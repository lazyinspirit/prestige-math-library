# Positive-dimensional strata and finite IC splitting

Owning proof-only component for the last geometric stage of the same core induction. It uses the supplied finite algebraic Whitney stratification for f with smooth surjective source-stratum maps, actual generic smoothness/Bertini and ordinary local-product/perverse suppliers. It does not assume middle semisimplicity. The zero-dimensional refined-intersection component has been read in full and is the preceding input.

## 1. Projective transverse slices through a fixed stratum point

Fix y in a positive-dimensional target stratum S of complex dimension s, with s smaller than the positive image dimension m. Work in a projective embedding of Y. The linear system of target hyperplanes through y has base locus precisely {y}: at any other projective point some linear form vanishes at y and not there. On the smooth source X its pulled-back system has base locus exactly Z=f^−1(y). Choose s members whose differentials restricted to T_yS are independent; ambient linear forms through y span that cotangent space, so this is a nonempty parameter open.

At every x∈Z, the source stratum map f:R→S is submersive. Thus the differentials of these s equations composed with df_x are independent already on T_xR, hence on T_xX. The implicit-function/Jacobian calculation makes their joint zero locus smooth of codimension s at every point of Z. Away from Z, the pulled-back constrained system is basepointfree. Published Bertini, successively for the smooth sections, gives smoothness of the entire source intersection away from Z; independence at Z remains an open parameter condition. Alternatively apply target generic smoothness to the universal constrained incidence away from Z: its parameter projection has a dense good open, and the previously established rank condition at Z handles the base locus. Intersect these finite opens. The resulting X_s is globally smooth projective of pure dimension n−s, with possibly finitely many connected components; componentwise lower induction is legitimate.

The same universal constrained-incidence calculation on every target stratum away from y makes the target slice Y_s transverse to those strata for a common parameter open. Near y, Whitney A puts T_yS into every limiting upper tangent plane; the s differentials independent on T_yS remain independent on these planes after shrinking. At y they cut S to an isolated point. The target slice has the inherited finite Whitney stratification and y is a zero-dimensional stratum. This supplies actual transversality, rather than using an unconstrained generic hyperplane and then assuming it passes through y.

The strata also respect every fibre-dimension locus Y_i. On a locus not containing y, generic constrained hyperplanes have the usual dimension drop s or make the locus empty: their base locus there is empty. On a locus containing y, its stratum containing y has dimension at least s. Independence at y and general dimension drop away from y therefore give dimension at most dimY_i−s, including the possible isolated y when equality holds. Since dimX_s=n−s, the defect contributions do not exceed those for f. The image dimension is at most m−s<m. The projective slice map f_s:X_s→Y_s is consequently lexicographically lower. Every component of X_s has dimension n−s, so the same bound applies to each component map. The point-image and top smooth-image boundary cases are treated separately; no strict source-defect drop below zero is claimed here.

## 2. The local costalk/stalk map is reflected by the normalized slice

Proper base change identifies K_s=i_s*K[−s], where i_s:Y_s→Y is the constructed transverse codimension-s inclusion. The actual noncharacteristic perverse pullback is exact, so P_{s,0}=i_s*P_0[−s], and it preserves the eta primitive kernels. The actual noncharacteristic normal calculation has i_s!P_0=i_s*P_0[−2s] with positive complex orientation. Write a:{y}→Y_s and b:{y}→S. Extraordinary composition for the same inclusion into Y gives

a!i_s!P_0=b!i_S!P_0.

The cohomology of i_S!P_0 is locally constant on S by the supplied compatible stratification. Smooth-stratum point orientation therefore gives b!=b*[−2s] on this bounded locally constant complex. Cancel the common [−2s] shift to obtain

a!i_s*P_0=b*i_S!P_0.

Ordinary composition likewise gives a*i_s*P_0=b*i_S*P_0. After the perverse normalization [−s], degree-zero costalk and stalk of P_{s,0} at y are therefore the degree−s cohomology fibres of i_S!P_0 and i_S*P_0, precisely the fibres of their perverse degree-zero local systems on the smooth s-dimensional stratum. The coherent adjunction/trace composition identifies the natural map between them with the fibre of the original costalk-to-stalk morphism. The even real normal shift produces no odd interchange sign. This proves reflection of the ACTUAL morphism, not just equality of dimensions, and does not use homotopy invariance for arbitrary coefficients. Restricting to an open neighborhood where S is closed leaves both local maps unchanged.

The lexicographically lower package for f_s includes the zero-stratum refined-intersection isomorphism, so the slice morphism at y is invertible. The preceding product shows the original morphism invertible on a neighborhood of y in S. Since y was arbitrary, it is invertible everywhere on S. For zero-dimensional strata use the current zero-stratum refined-intersection proof. On the top smooth-image dense stratum, P_0 is a local system shifted by the stratum dimension and there is no smaller normal-support extension to split there.

## 3. Recollement gives a finite IC decomposition before local-system semisimplicity

The formal closed-support criterion applies not only to a point: its proof used only an ordinary closed/open recollement and the perverse adjunctions. For a closed smooth stratum, pH^0i!P and pH^0i*P are local systems shifted by its dimension, and an invertible map between them splits off i_*pH^0i!P; the complementary object has no subobject or quotient supported there, so it is j!*j*P. This is the same five-step local criterion, applied in the perverse category of the stratum; it requires no semisimplicity of those local systems.

Choose a union of the minimal strata, closed by the finite frontier condition, and split it off. The complement on the remaining open target inherits every remaining local costalk/stalk isomorphism. Induct on the finite number of strata. Intermediate extension is transitive: extending an IC object first across one boundary and then the next yields the unique extension with its dense local system and no boundary-supported subobject/quotient, hence the same IC on the closure. This proves that P_0 is a finite direct sum of IC objects of finite-rank stratum local systems. The argument gives the IC decomposition before invoking Gauss–Manin semisimplicity, so it introduces no circular hypothesis.

## 4. Top-stratum local systems are precisely geometric

On a dense smooth open of the irreducible image, published target generic smoothness makes f smooth projective of relative dimension n−m. On the smooth m-dimensional target, perverse cohomology is ordinary cohomology shifted by m. Therefore the degree-zero perverse local system is exactly

H^−m(P_0)|_S = R^(n−m)f_*Q.

Its semisimplicity and complexified semisimplicity follow from the independent smooth-projective Gauss–Manin supplier, and the dense-open fundamental-group surjection extends them to the whole stratum. For intermediate-dimensional strata the separate complete moving-family component provides the actual quotient of a smooth-projective Gauss–Manin system. Zero-dimensional strata give finite-dimensional vector spaces; strata outside the image give zero. Exact intermediate extension sends a finite direct sum of simple local systems to the corresponding finite direct sum of simple IC objects. Together with the decomposition in section3, these deductions complete the middle perverse semisimplicity stage, relative to the named independent suppliers.

## Current boundary

This fills the positive-stratum reduction and finite IC splitting mechanism between the zero-stratum refined-intersection and moving-family components. It still requires the exact supplied stratified smooth-map/control/coefficient and generic algebraic supplier proofs. No native acceptance, readiness or proof of those upstream suppliers is asserted. The complete core assembly must include this construction and its prerequisites explicitly.
