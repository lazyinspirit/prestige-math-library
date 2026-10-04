import pathlib,re,difflib,json
P=pathlib.Path(__file__).parent
ranges=[(5,28,4,10),(29,72,11,19),(73,106,20,25),(107,142,26,31),(143,186,32,40),(187,224,41,46)]
for ch,(a,b,c,d) in enumerate(ranges,1):
 old=' '.join((P/'raw'/f'{i:02d}.txt').read_text() for i in range(c,d+1));new=' '.join(f' PDFPAGE{i} '+(P/'raw/pdf-pages'/f'{i:03d}.txt').read_text() for i in range(a,b+1))
 def words(s):return re.findall(r'\S+',s)
 ow,nw=words(old),words(new)
 norm=lambda l:[re.sub(r'[^a-z0-9]','',x.lower()) for x in l]
 sm=difflib.SequenceMatcher(None,norm(ow),norm(nw),autojunk=False);out=[];covered=0
 for tag,i,j,k,l in sm.get_opcodes():
  if tag=='equal':covered+=l-k
  else:out.append(' '.join(nw[max(0,k-7):min(len(nw),l+7)]))
 (P/'raw'/f'comparison-ch{ch}.txt').write_text('\n\n'.join(out));print(ch,len(nw),covered,sum(len(x) for x in out))
