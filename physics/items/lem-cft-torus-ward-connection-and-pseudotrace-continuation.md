---
id: lem-cft-torus-ward-connection-and-pseudotrace-continuation
kind: lemma
title: Flat torus Ward connection, cusp regularity and projective pseudotrace continuation
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
axiom_use: Full AC is inherited by the C2-cofinite analytic conclusion from the geometric sphere/cylinder sewing constructions; the finite dual-basis formulas require no additional physical premise.
deps:
- lem-cft-nonnegative-c2-sphere-and-cylinder-sewing
- lem-cft-torus-blocks-as-projective-pseudotrace-sewings
- lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions
- lem-cft-smooth-family-positive-pole-cohomology-and-lifting
- thm-nakayama-lemma
dependency_roles:
  lem-cft-nonnegative-c2-sphere-and-cylinder-sewing: mathematical-premise
  lem-cft-torus-blocks-as-projective-pseudotrace-sewings: mathematical-premise
  lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions: mathematical-premise
  lem-cft-smooth-family-positive-pole-cohomology-and-lifting: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement

Let V be a C2-cofinite nonnegative VOA in the explicit sphere/cylinder sense, allowing V0 larger than C1. Fix n>=1 external grading-restricted generalized modules W_i. On
 X_n={(z_1,...,z_n,tau):Im(tau)>0, z_i-z_j not in Z+tau Z for i!=j}
use additive incoming coordinates on C/(Z+tau Z). The finite coinvariant sheaf has the flat Ward connection constructed below. Its dual flat sections continue along every collision-free path and are determined by their full block value at one point. At a cusp its finite evaluation system is Fuchsian, with convergent finite-exponent, uniformly bounded-log expansions.

Every cyclic chain of logarithmic intertwiners with fixed external W_i, generalized intermediate modules, a projective V-R loop bimodule over a finite algebra R, a symmetric functional and coefficientwise R-linearity of the whole product for every external input converges on its preferred nested radial domain, gives such a flat section, and continues on the universal cover of X_n. Conversely, the fiberwise projective pseudotrace sewings of the linked completeness lemma extend to flat sections by their cyclic intertwiner factorizations. Every modular substitution, with its specified logarithm lift of (c tau+d)^{-L0} on the external states, preserves this flat-section space. This asserts closure for each lifted substitution; an unqualified honest SL2 representation independent of all logarithm lifts is not claimed for arbitrary external conformal weights.

## Facts & Assumptions

**Given:** The stated VOA, external modules and additive coordinates.

[F1] [[lem-cft-nonnegative-c2-sphere-and-cylinder-sewing]] proves finite partial quotients, common finite input generators in plumbing families, full ordinary sewing and its actual cylinder inverse. Its geometric positive-pole constructions also apply on smooth normalization families.

[F2] [[lem-cft-torus-blocks-as-projective-pseudotrace-sewings]] proves finite-dimensional fibers and their actual finite-projective pseudotrace realization; its two-pair argument proves convergence also when the originally specified finite algebra action is not faithful.

[F3] [[lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions]] proves existence/convergence/spanning for every finite holomorphic Euler system. [[lem-cft-smooth-family-positive-pole-cohomology-and-lifting]] and [[thm-nakayama-lemma]] are used on finite bundles and finite-type quotients, not as an unproved coherence theorem.

## Proof


1.1 Write a=2pi i. Define the normally convergent lattice zeta function by zeta_tau(z)=1/z+sum_{lambda!=0}(1/(z-lambda)+1/lambda+z/lambda^2), and put G2=zeta(z+1)-zeta(z). Differentiation gives a periodic Weierstrass function, hence the zeta period differences are constants. Integrating zeta around a fundamental parallelogram gives tau G2-eta_tau=a, so eta_tau=tau G2-a. Consequently
$$h_\tau(z)=-\frac{\zeta_\tau(z-z_1)-G_2(\tau)(z-z_1)}{a}$$
is periodic under z->z+1 and satisfies h_tau(z+tau)=h_tau(z)+1. Thus partial_tau+h_tau(z)partial_z descends to a meromorphic lift on the universal elliptic family, with its sole allowed pole at the first marked section. For a position derivative use the lift with global vertical coefficient zero; in the moving incoming chart t_i=z-z_i its coefficient is -delta_ij. These are actual geometric lifts. [F1, algebra]

2.1 On the algebraic input sheaf W_1 tensor ... tensor W_n tensor O define
$$\nabla_j=\partial_{z_j}+T_j,\qquad \nabla_\tau=\partial_\tau-A_\tau,\qquad A_\tau=\sum_i\operatorname{Res}_{t=0}h_\tau(z_i+t)Y_i(\omega,t)dt.$$
For every fixed input these are finite sums with holomorphic parameter coefficients: the negative Laurent part is finite and high positive conformal modes kill that input. They preserve the Ward subspace. Explicitly for a state-valued current u(t,b)dt its derivative along partial_b+h partial_t is
$$\left((\partial_b+h\partial_t+h')u-\sum_{r>=0}\frac{h^{(r+1)}}{(r+1)!}L(r)u\right)dt.$$
Differentiate the finite coordinate-jet action to obtain the sum; the coefficient and one-form derivatives give the other three terms. Module residue Jacobi gives exactly the commutator with the conformal residue, after integration by parts of its L(-1) term. Hence nabla sends a current relation to another current relation plus its relation on nabla(input). This proves descent. The possible central contribution is already the L(2)omega=c1/2 term of this same formula. Additive chart transitions are translations and have zero Schwarzian, so no unrecorded projective scalar is inserted. [F1, step 1.1, algebra]

3.1 The descended connection is flat. Position operators commute. For j!=1, partial_{z_j}A_tau is Res h_tau' Y_j(omega), whereas [T_j,A_tau]=-Res h_tau'Y_j(omega), so the mixed commutator is zero. For j=1, differentiating the center z1 contributes -Res h_tau'Y_i(omega) at every i!=1, and [T_1,A_tau] contributes the remaining i=1 term. Their total is the global current -h_tau'(z)omega dz, since h_tau' is doubly periodic. It vanishes in coinvariants. The remaining mixed commutator therefore vanishes too. There is no central commutator here: [L(-1),L(m)] has zero central coefficient for every m. There is just one tau variable, so there is no further two-form component. This is an exact flatness calculation modulo Ward relations, not an assumed projectively flat connection. [step 2.1, algebra]

3.2 The geometric modification is the actual change of incoming coordinate. Put U(x)=x^{L0}U with U=a^{L0}exp(-sum A_jL(j)) and exp(sum A_j y^{j+1}partial_y)y=log(1+ay)/a. Differentiating positive-mode conjugation and using the Virasoro commutators gives the corresponding coordinate flow and its centered jet, coefficientwise; each coefficient uses finitely many positive modes. Uniqueness of that scalar flow proves
 U Y(v,t)U^{-1}=Y(U(e^{at})v,e^{at}-1),
 U T U^{-1}=a(T+L0), and U omega=a^2(omega-c1/24).
For the last formula A1=-a/2,A2=a^2/12, while L1 omega=0,L2 omega=c1/2. These identities hold also on generalized modules, with the chosen logarithm of a; all positive-mode sums and nilpotent exponentials are vectorwise finite. In particular
 partial_z Y(U(e^{az})w,e^{az})=Y(U(e^{az})Tw,e^{az}).
Thus preferred pseudotrace chains have exactly the position differential equations dual to nabla_j. [given, step 2.1, algebra]

4.1 On every small parameter polydisc, the positive-pole construction in F1 supplies a common finite-dimensional input generating space. For smooth elliptic fibers its proof is the line-filtered Green construction on the family, followed by the same strict-index high-mode descent; all state weights are nonnegative and its weight-zero estimate is already included in F1. Thus the descended coinvariant module is finite type. Choose its finite generators and their actual holomorphic connection matrices. Formal horizontal extension of any dual fiber functional annihilates every relation, since all covariant derivatives of a relation remain relations. Picard iteration of these finite matrices converges by M^k|t|^k/k!, so the formal extensions are analytic. Flatness in step 3.1 makes coordinate orders agree by uniqueness of their Taylor coefficients. Hence dual fiber transports are isomorphisms, giving constant fiber dimension. Nakayama makes a fiber basis generate locally; a kernel relation among those basis generators has all coefficients zero at each point and therefore is zero as a holomorphic relation. The quotient is consequently finite locally free, with its actual block fibers. Finite chains of regular ODE neighborhoods give continuation along every compact path. Subdivision of a homotopy into coordinate rectangles and local uniqueness give the continuation on the universal cover of X_n. This also proves uniqueness from the entire block value at one point. [F1, F3, step 3.1, algebra]

4.2 Their convergence and block interpretation are actual sewings. Every logarithmic intertwiner is the corresponding three-point sphere block by its Jacobi and sl2 identities, and conversely its fixed-parameter map reconstructs by L0 conjugation. Sewing the chain of these spheres is the nested product series; F1 proves its absolute/local-uniform convergence. To include the loop pseudotrace, use G=direct-sum Hom_R(M_[mu],M_[lambda]) and the cyclic two-point trace block of F2. A two-pair ordinary sewing of the sphere chain with that block equals its pseudo-series coefficientwise, including nilpotent powers; this is F2's explicit construction, not an ordinary-trace replacement. It applies to the whole-product compatibility hypothesis for ALL external inputs: replacing any external state by a mode of a VOA state remains a compatible product. The resulting convergent family is a torus block, and termwise differentiation follows on smaller compact sets from normal power/log convergence. [F1, F2, step 3.2, algebra]

5.1 We verify the tau equation, including its normalization. Insert the additive stress field into the convergent block. Its Ward identities make it meromorphic and doubly periodic away from its prescribed poles at the marked points. Cyclicity of the projective trace on finite source/target weight spaces gives the same periodicity directly in the annular region. The constant Fourier coefficient of this field is a^2 times the inserted trace of L0-c/24, by U omega in step 3.2. It is therefore a^2 delta F, delta=q partial_q, since differentiating q^{L0-c/24} gives that insertion. Integrate h_tau times this stress field around a fundamental parallelogram avoiding its poles. The two vertical edges cancel, while h_tau(z+tau)=h_tau(z)+1 makes the horizontal difference minus the period integral of the stress field. Dividing the contour integral by 2pi i=a gives
$$\sum_i\operatorname{Res}_{t=0}h_\tau(z_i+t)F(Y_i(\omega,t)w)\,dt =-a\delta F=-\partial_\tau F.$$
This is precisely the dual nabla_tau equation. The calculation uses pseudo-trace cyclicity, not an identity between pseudo- and ordinary traces. It also shows that the shifted normalization and Schwarzian constant have the required sign. [F2, step 1.1, step 3.2, step 4.2, algebra]

6.1 Cusp regularity is controlled by actual nodal matrices. Cut the torus to its rational normalization with the two sewing marks. The global finite generators and logarithmic q partial_q lift of F1, with its explicitly derived Schwarzian scalar, give a finite evaluation-column equation q partial_q f=B(q,b)f with B holomorphic through q=0, also in the insertion parameters b on a small polydisc. The additive-coordinate normalization in step 3.2 multiplies it by q^{-c/24}; this changes B only by -c/24 times the identity. F3 therefore gives a complete convergent finite-exponent, bounded-log expansion for every horizontal germ, not merely convergence of a preselected formal solution. Finite generator reductions extend the same finite exponent set and log bound to every fixed external input. This proves regular-singular genus-one continuation at the cusp by a specified finite system. Away from the cusp step 4.1 has no interior singularity on X_n. [F1, F3, step 4.1, step 5.1, algebra]

6.2 We prove modular covariance of these actual equations. Put s=c_gamma tau+d0, tau'=(a0 tau+b0)/s and S=s^{-sum L_i(0)}. Lattice reindexing gives zeta_tau'(z/s)=s zeta_tau(z); integrating its quasi-periods as in step 1.1 gives G2(tau')=s^2G2(tau)-2pi i c_gamma s. Therefore
$$h_{\tau'}(z/s)=s h_\tau(z)-c_\gamma(z-z_1).$$
Module weight conjugation gives Y_i(omega,t')S=S s^2Y_i(omega,s t'). Changing residue variables yields the exact operator identity
$$A_{\tau'}S=s^2 S A_\tau-c_\gamma sS\sum_i((z_i-z_1)T_i+L_i(0)).$$
The chain rule for F_g(w;z,tau)=F(Sw;z/s,tau') has two additional derivatives: -c_gamma/s times sum L_i(0), from S, and -c_gamma z_i/s^2 times the translated insertion derivatives. Substituting the displayed identity cancels their L0 and z_i terms; the remaining term is -c_gamma z1/s times F_g(sum_i T_i w), which is zero by the global translation Ward current. Thus F_g obeys the same tau equation. The position equation follows from T_i S=s S T_i. Fiber Ward identities are preserved by the linear torus coordinate map, whose Schwarzian is zero. This proves covariance of the full flat-section space for each fixed logarithm lift, including generalized L0. [step 1.1, step 2.1, step 3.1, step 5.1, algebra]

7.1 Finally, F2's fiberwise pseudotrace realizations extend by actual cyclic chains. Choose a reference point in the preferred nested radial domain. The R-linear sphere block supplied there factors along its successive separating three-point cuts by F1. Naturality of the representing maps carries the loop R-action to the intermediate modules and keeps every canonical map and final composition R-linear. Reconstruction from the fixed-parameter maps gives the required cyclic logarithmic intertwiners with the SAME external modules. Their pseudotrace chain converges by step 4.2, is horizontal by step 5.1, and equals the prescribed fiber block by F2. Uniqueness in step 4.1 makes it the same continued flat section. As the fiber space is finite dimensional, finitely many such maps span every flat section on the universal cover. Step 6.2 preserves that space, proving the stated covariance and continuation. No genus-one associativity theorem, rational ordinary-trace completeness or generic nonsemisimple rigidity has been used. [F1, F2, step 4.1, step 4.2, step 5.1, step 6.2, algebra] ∎
