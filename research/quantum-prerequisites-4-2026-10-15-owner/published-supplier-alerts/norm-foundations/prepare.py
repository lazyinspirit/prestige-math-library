from pathlib import Path
import re,json,difflib,hashlib
b=Path('research/quantum-prerequisites-4-2026-10-15-owner/published-supplier-alerts/norm-foundations')
ids=['def-complex-conjugate-real-imaginary-part-and-modulus','thm-of-square-roots','lem-of-abs-value','lem-complex-conjugation-and-modulus-laws','lem-of-square-monotone']
sha=lambda s:hashlib.sha256(s.encode()).hexdigest();rows=[]
for id in ids:
 p=Path('items')/(id+'.md');s=p.read_text();t=s
 if id==ids[0]:
  t+='''## Remarks

The radicand is in the square-root domain. In the real ordered field supplied by [[cor-cauchy-reals-lub-complete]], distributivity and additive cancellation give $0t=0$, and hence $0^2=0$. If $t\\ne0$, then either $t>0$ or $-t>0$; positive-cone closure gives $t^2>0$ in the first case and $(-t)^2=t^2>0$ in the second. Thus $a^2,b^2\\ge0$. If either square is zero, their sum is the other nonnegative square; if both are positive, their sum is positive by positive-cone closure. Therefore $a^2+b^2\\ge0$, so [[thm-of-square-roots]] applies with exactly the radicand in the Definition.
'''
 elif id==ids[1]:
  old='Choose $h$ with $0 < h < 1$ and $h < \\dfrac{a - s^2}{2s + 1}$, possible since $a - s^2 > 0$ and $2s + 1 \\ge 1 > 0$;'
  new='Put $\\delta=(a-s^2)/(2s+1)>0$ and $h=\\delta/(1+\\delta)$. The denominators are positive because $s\\ge0$ and $\\delta>0$. Since $\\delta<1+\\delta$ and $1<1+\\delta$, positive scaling gives $0<h<1$ and $h<\\delta=(a-s^2)/(2s+1)$;'
  assert old in t;t=t.replace(old,new)
  old='choose $h$ with $0 < h < s$ and $h < \\dfrac{s^2 - a}{2s}$, so'
  new='put $\\delta=(s^2-a)/(2s)>0$ and $h=s\\delta/(s+\\delta)$. Both denominators are positive; from $s<s+\\delta$ and $\\delta<s+\\delta$, positive scaling gives $0<h<\\delta$ and $h<s$. Thus $h<(s^2-a)/(2s)$, so'
  assert old in t;t=t.replace(old,new)
 elif id==ids[2]:
  old='then $xy = 0$, so $|xy| = 0$,'
  new='distributivity gives $0t=(0+0)t=0t+0t$ for every $t$, so additive cancellation yields $0t=0$; commutativity also gives $t0=0$. Thus $xy = 0$, so $|xy| = 0$,'
  assert old in t;t=t.replace(old,new).replace('[assume-case zerofactor, L1]','[assume-case zerofactor, L1, L2, algebra]')
 elif id==ids[3]:
  t=t.replace('The final inequality follows from [F5], with the zero case included.','For $q=av-bu$, if $q\\ne0$ then [F5] gives $q^2>0$; if $q=0$ then $q^2=0$ by field algebra. Thus $q^2\\ge0$ in either case.')
  t=t.replace('and [F5] forces $a=b=0$.','and each square is nonnegative: a nonzero coordinate has positive square by [F5], while a zero coordinate has square zero by field algebra. If either coordinate were nonzero, its square would be positive; adding the other nonnegative square gives a positive sum, since either that other square is zero or both summands are positive in the ordered field [F3]. Thus $a=b=0$.')
  t=t.replace('Both sides of $|zw|=|z||w|$ are nonnegative,','The product $|z||w|$ is nonnegative: if either factor is zero the product is zero by field algebra; otherwise both are positive by step 2.1 and their product is positive in the ordered field [F3]. Hence both sides of $|zw|=|z||w|$ are nonnegative,')
  t=t.replace('this follows from $|z||w|\\ge0$;','this follows because if either modulus is zero the product is zero, and otherwise both moduli are positive by step 2.1 and positive-cone closure in [F3] makes their product positive;').replace('[F4, step 2.1, step 1.3]','[F3, F4, step 2.1, step 1.3]')
  t=t.replace('Both sides of $|z+w|\\le|z|+|w|$ are nonnegative,','By step 2.1 the two moduli $|z|,|w|$ are nonnegative. If one is zero their sum is the other; if neither is zero both are positive and their sum is positive in the ordered field [F3]. Hence both sides of $|z+w|\\le|z|+|w|$ are nonnegative,').replace('[F4, step 2.1, step 4.1]','[F3, F4, step 2.1, step 4.1]')
 elif id==ids[4]:
  t=t.replace('and a sum of two nonnegatives with at least one positive is positive ([[def-ordered-field]]).','and the positive cone is closed under addition ([[def-ordered-field]]). Consequently, if two elements are nonnegative and at least one is positive, their sum is positive: if the other is zero the sum is the positive element, and otherwise both are positive and closure applies.')
 assert t!=s
 # Preserve every historical verification block only in exact before carrier.
 fm,body=t.split('---',2)[1:];fm=re.sub(r'^verification:[^\n]*(?:\n(?:[ \t]+[^\n]*|[ \t]*)(?=\n|$))*\n?', '', fm, flags=re.M)
 t='---'+fm+'---'+body
 (b/'before'/p.name).write_text(s);out=b/'items'/p.name;out.write_text(t)
 (b/(id+'.diff')).write_text(''.join(difflib.unified_diff(s.splitlines(True),t.splitlines(True),fromfile=str(p),tofile=str(out))))
 def public(src):
  return {m[1]:m[2] for m in re.finditer(r'^## (Statement|Definition)\n([\s\S]*?)(?=^## |\Z)',src,re.M)}
 assert public(s)==public(t),(id,'public section changed')
 rows.append(dict(id=id,live_file=str(p),before_file=str(b/'before'/p.name),before_raw_sha256=sha(s),proposal=str(out),proposal_raw_sha256=sha(t),delta=str(b/(id+'.diff')),public_sections_byte_identical=True,disposition='conditional explanatory expansion for native adjudicator; not a confirmed missing prerequisite or approval'))
(b/'proposal-manifest.json').write_text(json.dumps(dict(version=1,kind='unapplied-conditional-published-supplier-explanatory-proposals',cycle=1,items=rows,native_findings_adjudication_not_preempted=True,live_sources_unchanged=True),indent=2)+'\n')
print('5 optional source expansions; all public sections byte-identical')
