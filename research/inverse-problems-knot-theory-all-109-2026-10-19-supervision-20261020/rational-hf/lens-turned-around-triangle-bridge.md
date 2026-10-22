# The q=1 triangle turned around

This is a new construction, not an assertion of arbitrary rational-Y grading duality. The completed absolute grading/handle and rational-sphere standardness interfaces are used directly. The previously authored q=1 triangle and independent Chern calculation are carried forward unchanged.

Use the ordered torus triple `(alpha,beta,gamma)` with `alpha:y=0`, `beta:x=0`, and `gamma:px+y=epsilon (mod Z)`, oriented so that its three boundary manifolds are `Y_alpha,beta=S^3`, `Y_beta,gamma=S^3`, and `Y_alpha,gamma=-L(p,1)`. Let `x_i` be the alpha-gamma intersection with lifted coordinate `((i+epsilon)/p,0)`, and put the basepoint near `(1,1)`, beyond `px+y=p+epsilon`. The already constructed positive planar triangle has vertices `(0,0)`, `((i+epsilon)/p,0)`, `(0,i+epsilon)`, for `0<=i<p`. Its index is zero, its basepoint multiplicity is zero and its count is one over `F_2`. Its Spin-c structure evaluates as `2i-p` on the capped core of the negative-p trace.

The same oriented triangle, with its three boundary intervals started at a different marked corner, is a triangle for `(gamma,alpha,beta)`. This is a cyclic permutation, not reflection or reversal of the domain. Reparametrizing the domain by the orientation-preserving cyclic automorphism of the three-punctured disk carries its linearized Cauchy-Riemann operator to the original one; index, regularity, the mod-two count and the basepoint multiplicity are identical. Its first input is now `x_i` in `Y_gamma,alpha=L(p,1)`, its second input is the unique alpha-beta generator of `S^3`, and its output is the unique gamma-beta generator of `-S^3`, which is identified with `S^3` by an orientation-preserving diffeomorphism from `-S^3` to `S^3`.

Here is the four-dimensional identification and not merely a formal adjoint assertion. Build the usual triple four-manifold `X` from the surface times a triangle and the three attaching compression bodies. Its boundary is

`-Y_alpha,beta disjointunion -Y_beta,gamma disjointunion Y_alpha,gamma`.

A cyclic relabelling of the base triangle gives the same oriented manifold, with that boundary instead written

`-Y_gamma,alpha disjointunion -Y_alpha,beta disjointunion Y_gamma,beta`.

These expressions agree, since `Y_gamma,alpha=-Y_alpha,gamma` and `Y_gamma,beta=-Y_beta,gamma`. Fill the second input sphere with a four-ball in each description. In the first description this gives the negative-p trace from `S^3` to `-L(p,1)`. In the second it gives a cobordism `V_i:L(p,1)->S^3`. Attaching a four-ball along a sphere changes neither `H_2`, its intersection pairing, nor the Chern evaluation on the capped periodic domain; the two fillings have the same Euler characteristic. Thus `b_2(V)=1`, `chi(V)=1`, `sigma(V)=-1`, the intersection form is `(-p)`, and the fixed triangle structure has `c_1^2=-(2i-p)^2/p` on either filling. There is a unique Spin-c extension across the filled sphere. The incoming restriction on `L(p,1)` is the corresponding orientation-opposite structure.

For each of these fixed structures the triangle coefficient just described is exactly one, not only the leading coefficient of an unspecified sum. A difference of two triangle classes is a sum of a triply periodic class, a self-disk class at an end, and a sphere class. The periodic generator changes the extending Spin-c structure by the generator of `H^2` of the trace; fixing that structure removes it. The end diagrams have one intersection in the relevant Spin-c structure and no nonzero torsion self-periodic domains. The remaining sphere class has index two; fixing index zero removes it. Consequently there is only one index-zero class for the specified input and output in the fixed structure, namely the planar one. This statement is unchanged under cyclic reparametrization. The admissible polygon construction computes its coefficient by the regular planar model and neck gluing; no inference from a nonzero sum over structures is involved.

In the alpha-gamma and gamma-alpha torus diagrams each Spin-c summand has precisely one generator. Its infinity differential is zero: a self-disk in a torsion structure has index `2 n_z`, so cannot have index one. The minus lattice is exactly `U F_2[U][x_i,0]`; hence the correction term in that structure is the absolute grading of `[x_i,0]` itself. This uses the actual complex and not just a count of critical points.

The first fixed triangle map takes the degree-zero sphere generator at exponent zero to `[x_i,0]` at exponent zero. Its degree is

`D_i=(1-(2i-p)^2/p)/4`.

The cyclically reordered fixed map takes `[x_i,0]` of the opposite lens space at exponent zero to the sphere generator at exponent zero and has the SAME degree `D_i`, because its oriented four-manifold data are the same. Thus the two absolute generator gradings are `D_i` and `-D_i`. This proves exactly the required orientation-negation formula for this lens family; no arbitrary-Y duality has been assumed.

Finally the characteristic boundary labels are `k=2i-p (mod 2p)`. They give all p structures once; reversing the core/meridian orientation replaces k by -k and hence i by p-i. This is the conjugate label, and the square in the formula is invariant. Therefore the positive-surgery orientation has `d=((2i-p)^2-p)/(4p)`, and the opposite orientation has its negative with the conjugate label. The argument includes p=1: the planar triangle i=0 has k=-1 and D_0=0.
