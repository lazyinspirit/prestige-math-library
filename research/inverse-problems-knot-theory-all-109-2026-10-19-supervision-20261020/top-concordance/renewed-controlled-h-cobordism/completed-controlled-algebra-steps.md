# Completed algebra steps for the controlled h-cobordism construction

These are actual intermediate derivations, not a proof of the full controlled h-cobordism theorem. The remaining stabilization/squeezing step is identified at the end. The derivations apply to either coefficient ring Z or Z[z,z^{-1}], hence cover the required 0/Z constant local-group charts.

## From a controlled contraction to a controlled isomorphism

Let C_* be a locally finite based free chain complex over a ring R, with basis elements assigned locations in a metric space X. Suppose its differential d and contracting homotopy s each have propagation at most η: a nonzero coefficient only relates basis elements at distance at most η. Assume d²=0 and ds+sd=1. All operations below are on finite-degree sums; local finiteness is required so their matrices define operators on the locally finite based modules.

Put t=sds. First dsd=d, by multiplying ds+sd=1 by d. Consequently dt+td=dsds+sdsd=ds+sd=1. Also ds²=s²d=s−sds, and therefore ds²d=0. Thus t²=s(ds²d)s=0. It follows that D=d+t has D²=d²+dt+td+t²=1. Since D reverses chain parity, its even-to-odd and odd-to-even restrictions are mutually inverse isomorphisms. Both have propagation at most 3η. This derives, rather than assumes, the matrix representing the controlled torsion of the contracted handle complex. This is the construction stated in Quinn, Ends of maps II, printed 378 (article PDF27); the displayed algebra also establishes its inverse formula.

A matrix of propagation 3η is not automatically a product of elementary matrices of controlled total propagation. That extra conclusion is the subsequent theorem, not an algebraic consequence of D²=1.

## Explicit cancellation of a matrix together with its inverse

Let A:P→Q be an invertible based-module map; in the geometrical application both A and A^{-1} have propagation ≤η. Define

W(B)=[[I,B],[0,I]],  L(C)=[[I,0],[C,I]],

and D(A)=diag(A,A^{-1}), with domain/codomain blocks interpreted consistently. Direct multiplication gives

W(A)L(−A^{-1})W(A)=[[0,A],[−A^{-1},0]],

and hence

W(A)L(−A^{-1})W(A) D(A) W(−I)L(I)W(−I)=I.

Indeed multiplication of the first displayed rotation by D(A) gives [[0,I],[−I,0]], whereas W(−I)L(I)W(−I)=[[0,−I],[I,0]], its inverse. This is a six-factor elementary deformation cancelling a matrix against its inverse; it uses no commutation of A and A^{-1} with unrelated coefficients. Each block elementary matrix is a product of elementary basis additions: its off-diagonal block goes from one summand to the other, so distinct such additions commute whenever necessary and their cross-products vanish. This verifies the identity in the arbitrary coefficient ring, not only after passing to numerical determinants.

If the direct-sum copies are placed at the same locations, the nonconstant factors have propagation η, the three constant factors have propagation zero, and the successive products before and after D(A) have propagation bounded by a fixed multiple of η (at most 4η is enough). Thus this particular elementary deformation has controlled total size. The identity and the sharper relative localization construction appear in Quinn II printed 378–379, visually checked on retained article PDF27–28.

## Why this does not yet establish controlled cancellation of an arbitrary torsion-zero matrix

The identity cancels diag(A,A^{-1}), not A alone. Stabilization in the h-cobordism proof adds identity blocks by geometrically cancelling handle pairs; it does not authorize adding an A^{-1} block with arbitrary torsion and declaring that block geometrically trivial. Doing so would assume the conclusion being proved.

For the actual 0/Z local-group application one still needs a theorem converting the small geometric-module isomorphism obtained above, after allowable identity stabilization, into a small elementary deformation to a geometric basis bijection, with relative support away from the fixed product region. This is the controlled Whitehead/squeezing step. Vanishing of ordinary Wh(0) or Wh(Z) does not bound the supports or propagation of an arbitrary elementary factorization.

Quinn II §3.1(3), printed 377–378, explicitly delegates its geometric realization to Ends of maps I §6. Its §3.2 cancellation of inverses is a genuine ingredient, but is not that whole theorem. No local proof of the missing squeezing theorem has been completed in this note.


## Completing a partial inverse near the torus puncture

This step is also proved by direct algebra; it does not invoke the controlled h-cobordism theorem. Let G=P⊕Q be a based free module. Suppose a:P→G and b:G→P satisfy ba=I. Set q=I−ab. Then q²=q, qa=0, and bq=0. The map

F:P⊕G→G⊕P,  F(x,y)=(ax+qy,by)

is an isomorphism, with inverse

F^{-1}(u,v)=(bu,qu+av).

Indeed F^{-1}F(x,y)=(bax+bqy,qax+q²y+aby)=(x,y), and FF^{-1}(u,v)=(abu+q²u+qav,bqu+bav)=(u,v). Both identities use only ba=I. In the punctured-torus step, P is the submodule supported away from an annular buffer of the missing ball; a is the restriction of the small homomorphism h and b is the corresponding restriction of its small partial inverse. This formula extends h, after adding a free summand, to an actual global isomorphism. The added summand can initially be placed at the puncture center, and the collapse of the puncture ball then restores small propagation. This is the isomorphism portion of Quinn I, printed324/PDF51, whose matrix was visually checked. The separate projection part is unnecessary for the h-cobordism application.

## Close geometric identification of equal-rank modules

Suppose P and Q are finite free based modules of equal rank, with basis points on a connected metric space X. For any η>0, they admit a common stabilization for which there is a geometric η-isomorphism between them. To prove this, pair basis points one at a time. For a single pair x,y choose a finite η-chain x=x_0,x_1,…,x_m=y in X. Such a chain exists because the set reachable by finite η-chains from x is both open and relatively closed in connected X. Add generators at x_1,…,x_{m−1} to both modules. The shift x_i↦x_{i+1} gives a basis bijection of displacement <η from the stabilized x-module to the stabilized y-module. Direct sum over finitely many pairs gives the result. Thus the finite controlled-isomorphism problem reduces to an automorphism problem without assuming a preexisting close matching of its two bases. This is Quinn I8.7, printed328–329/PDF55–56, with the chain argument supplied explicitly.
