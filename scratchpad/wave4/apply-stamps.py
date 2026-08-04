import re,glob,sys
certified=set(); refused=set()
for f in glob.glob('research/audit/wave4-dispatch/certifier-certify-*.log'):
    txt=open(f).read()
    body=txt.split('## stdout',1)[1].split('## stderr',1)[0]
    for m in re.finditer(r'^### ([a-z0-9-]+) — (CERTIFY|REFUSE)', body, re.M):
        (certified if m.group(2)=='CERTIFY' else refused).add(m.group(1))
certified-=refused  # a later refusal wins unless re-certified in round 2
r2=open('research/audit/wave4-dispatch/certifier-certify-round2.log').read() if glob.glob('research/audit/wave4-dispatch/certifier-certify-round2.log') else ''
if r2:
    b2=r2.split('## stdout',1)[1].split('## stderr',1)[0]
    for m in re.finditer(r'^### ([a-z0-9-]+) — (CERTIFY|REFUSE)', b2, re.M):
        if m.group(2)=='CERTIFY': certified.add(m.group(1)); refused.discard(m.group(1))
        else: refused.add(m.group(1)); certified.discard(m.group(1))
print('certified',len(certified),'refused',len(refused))
if refused: print('REFUSED:',sorted(refused))
STAMP=("  verified:\n    model: gpt-5.6-sol-codex-subscription\n    verdict: certify\n"
       "    date: 2026-08-05\n    scope: published-audit\n    delegated_by: owner\n")
n=0
for i in sorted(certified):
    p=f'items/{i}.md'
    t=open(p).read(); head,fm,body=t.split('---',2)
    if 'verified:' in fm: continue
    m=re.search(r'^verification:\n(?:[ \t]+.*\n?)*', fm, re.M)
    block=m.group(0)
    new=block if block.endswith('\n') else block+'\n'
    new=new+STAMP
    open(p,'w').write('---'.join([head,fm.replace(block,new),body])); n+=1
print('stamped',n)
