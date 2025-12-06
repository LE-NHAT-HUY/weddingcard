-- Tạo bảng lưu lời chúc
CREATE TABLE IF NOT EXISTS wishes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bật RLS
ALTER TABLE wishes ENABLE ROW LEVEL SECURITY;

-- Cho phép tất cả mọi người xem lời chúc (public read)
CREATE POLICY "Allow public read wishes" ON wishes
  FOR SELECT
  USING (true);

-- Cho phép tất cả mọi người gửi lời chúc (public insert)
CREATE POLICY "Allow public insert wishes" ON wishes
  FOR INSERT
  WITH CHECK (true);
