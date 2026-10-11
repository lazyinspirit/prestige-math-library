exec(open('/tmp/quasi-r-tensor-chain.py').read().split('for J in map')[0])
for J in [1,2,3]:
 c=Chain(J);g=c.solve();f=g[(J,0,J,c.n[J])];p=s.cyclotomic_poly(2*(J+3),q)
 print('RESIDUE',J,s.rem(f,p,q),flush=True)
