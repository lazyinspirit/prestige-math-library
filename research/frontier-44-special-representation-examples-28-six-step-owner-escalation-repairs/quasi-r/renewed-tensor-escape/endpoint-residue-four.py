exec(open('/tmp/quasi-r-tensor-chain.py').read().split('for J in map')[0])
c=Chain(4);g=c.solve();f=g[(4,0,4,c.n[4])];p=s.cyclotomic_poly(14,q)
print('SUPPORT',len([x for x in g.values() if x!=0]),'DEGREE',s.degree(f,q),'RESIDUE',s.rem(f,p,q),flush=True)
