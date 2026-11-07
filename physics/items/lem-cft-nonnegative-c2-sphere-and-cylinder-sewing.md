---
id: lem-cft-nonnegative-c2-sphere-and-cylinder-sewing
kind: lemma
title: Sphere dual fusion and cylinder sewing for a nonnegative C2-cofinite VOA
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
axiom_use: Full AC is used through the geometric Green, line-cohomology and finite-bundle acyclicity premises; no rationality or semisimplicity is used.
deps:
- def-axiom-of-choice
- lem-cft-nonnegative-c2-mode-window-finiteness
- lem-cft-c2-finite-projective-generator-and-weight-projectivity
- lem-cft-smooth-family-positive-pole-cohomology-and-lifting
- lem-cft-finite-holomorphic-bundles-polydisc-first-cohomology-zero
- lem-cft-plumbing-proper-analytic-family
- lem-cft-holomorphic-euler-systems-converge-with-parameters
- lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions
- thm-serre-duality-compact-riemann-surfaces
- thm-long-exact-sequence-sheaf-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-cft-nonnegative-c2-mode-window-finiteness: mathematical-premise
  lem-cft-c2-finite-projective-generator-and-weight-projectivity: mathematical-premise
  lem-cft-smooth-family-positive-pole-cohomology-and-lifting: mathematical-premise
  lem-cft-finite-holomorphic-bundles-polydisc-first-cohomology-zero: mathematical-premise
  lem-cft-plumbing-proper-analytic-family: mathematical-premise
  lem-cft-holomorphic-euler-systems-converge-with-parameters: mathematical-premise
  lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions: mathematical-premise
  thm-serre-duality-compact-riemann-surfaces: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
  - title: Gui and Zhang, Analytic Conformal Blocks III
    url: https://arxiv.org/abs/2503.23995
    locator: The sphere/cylinder argument is reconstructed below with weight-zero states retained.
dependency_level: 5
---

## Statement

Assume full AC. Let V be a C2-cofinite vertex operator algebra with finite-dimensional nonnegative integral state grades, without assuming V0=C1. On a finite disjoint union of pointed spheres with at least one incoming mark on every component, assign an arbitrary grading-restricted generalized joint module at its incoming marks. Every fixed-sphere dual-fusion product exists, with any finite number of outgoing marks and with its actual universal block. The ordinary generalized-weight sewing series of sphere blocks converges absolutely and locally uniformly in its allowed nonzero plumbing parameters and base parameters, also for rational normalizations whose plumbing graph has at most one cycle, provided every normalization component meets an incoming or sewing mark and every smooth sewn component meets an incoming mark. Its sum is a block.

In particular, let F have two outgoing disks and incoming label W, let D=D_F(W), and let N be the two-point sphere. Self-sewing F with q=p1 p2 gives a torus. The cylinder insertion map
 CB_N(D') -> CB_{F_q}(W)
is a linear isomorphism. Equivalently, if Q has incoming vacuum V and two outgoing marks, with H=D_Q(V), sewing to its vacuum two-point block gives
 CB_F(W tensor H') -> CB_{F_q}(W)
as an isomorphism. Genus-zero fixed-surface block factorization through the same dual-fusion objects also holds. These assertions use full generalized modules, not a simple-module sum.

Here a nonnegative VOA means a vacuum/translation vertex algebra with ordinary state/module Jacobi identities, a conformal vector obeying the Virasoro brackets, L(-1)=T, diagonal integral L0 state weights, finite-dimensional V_r, V_r=0 for r<0, and an arbitrary finite-dimensional V0. Generalized modules have algebraic finite-dimensional generalized weight spaces with real parts bounded below, componentwise in the joint setting.

## Facts & Assumptions

**Given:** Exactly this broader nonnegative VOA and sphere/plumbing data, with full AC as in [[def-axiom-of-choice]] for the geometric constructions.

[F1] [[lem-cft-nonnegative-c2-mode-window-finiteness]] and [[lem-cft-c2-finite-projective-generator-and-weight-projectivity]] prove finite strict-index spanning, finite cosets and bounded weight truncations, finite generation of joint modules, and the actual finite module categories in this scope.

[F2] [[lem-cft-smooth-family-positive-pole-cohomology-and-lifting]] supplies line-filtered finite-bundle direct images, canonical base change and Green right inverses on smooth normalization families. [[thm-serre-duality-compact-riemann-surfaces]] and [[thm-long-exact-sequence-sheaf-cohomology]] supply vanishing and jet lifting. [[lem-cft-finite-holomorphic-bundles-polydisc-first-cohomology-zero]] supplies vanishing of its first cohomology on the whole chosen polydisc. These are geometric statements without a VOA vacuum-dimension hypothesis.

[F3] [[lem-cft-plumbing-proper-analytic-family]] supplies the rational normalization and node charts xy=q. [[lem-cft-holomorphic-euler-systems-converge-with-parameters]] proves convergence of the GIVEN finite formal power/log solution with holomorphic parameter coefficients on the full coefficient polydisc. [[lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions]] supplies fundamental solutions and spanning.

## Proof


1.1 Coordinate actions use only the Virasoro commutator: differentiating conjugation by exp(sum b_j L(j)), j>0, gives the flow of sum b_j t^{j+1}partial_t and its centered jet on the inserted state. Coefficientwise ODE uniqueness identifies the two formal flows; each prescribed coefficient uses only finitely many j. Diagonal scaling follows from [L0,a_m]=(wt(a)-m-1)a_m. This constructs the finite-state coordinate bundle, its residue covariance and its filtration with graded quotient V_r tensor K^{-r}. All its positive Virasoro sums terminate because weights are nonnegative; no assertion that V0 is one dimensional has entered. Restricted transposition uses A(x)=exp(xL1)(-x^{-2})^{L0}; substituting inverse variables into Jacobi gives its opposite-field Jacobi identity, while A(x^{-1})A(x)=1 gives involutive double duality on finite weight blocks. These formulas apply componentwise. [given, F1, algebra]

2.1 We spell out the finite partial quotients needed later. At outgoing y_j take the lattice generated by t_j^{a_j+r}v for v in V_r, a_j>=0. At the incoming divisor D the finite state stage E has line-filtration quotients K^{1-r}(-sum_j(a_j+r)y_j). Positive incoming twists kD have zero H1 by line duality, since each normalization component meets an incoming point. Therefore arbitrary high principal parts of finite-state currents at one incoming mark, zero at the others, lift globally with error poles bounded by one k0. Use F1's finite incoming generators and strict strings, now including weight-zero nonvacuum states. If all indices are >=-L and less than the fixed generator cutoff, there are finitely many strict strings, so their auxiliary degrees have a bound nu(L). Above that degree, a vector has a leftmost a_(-ell) with ell>L. Put E=max wt(a) and choose L>=E+k0. Its lifted current replaces this term by a finite remainder whose mode degree is at most E+k0-1. If r=wt(a)>=0, its input tail has degree d-r-ell+1; the remainder degree is at most d+E+k0-r-ell<d. Induction on the nonnegative auxiliary grading reduces to the finite input window W_<=nu(L). The grading exists by finite cosets and lower bounds, and every piece is finite. This proves finite-dimensional partial coinvariants with zero-weight letters INCLUDED. [F1, F2, step 1.1, algebra]

2.2 We construct the nodal finite-bundle interface, rather than apply a CFT-only statement. On a fixture xy=q the state frame indexed by v of weight r is x^{L0}v on one branch and y^{L0}Jv on the other, J=exp(L1)(-1)^{L0}; the centered transition exp(x/q L1)(-q/x^2)^{L0} identifies them. Declare this common frame free at the node. Its finite weight filtration has graded lines omega^{-r}, with omega generated by dx/x=-dy/y. This also works for r=0 of arbitrary multiplicity. For any finite stage bundle E(kD), the normalization exact sequence is
 0 -> E -> nu_*nu^*E -> sum_nodes E_p -> 0,
with the last map the difference of branch values. Choose k so both H1(nu^*E(kD)) and H1(nu^*E(kD)(-Z)) vanish, where Z consists of the branch points. Line degrees and the finite filtration give one such k for all partial smoothings and nearby normalization parameters. [F2, F3, step 1.1, algebra]

3.1 The block functor on joint outgoing labels is contravariant left exact, and finite valued by step 2.1. F1 identifies that joint category with finite modules over a finite algebra. Any finite-valued contravariant left-exact functor on such modules is representable: dualize it to a covariant right-exact functor; on a finite free presentation it is tensoring with its value on the regular module, with the right action induced by regular-module maps. Dualizing gives Hom(-,D), where D is the finite vector dual of that value. Applying the exact category equivalence produces an actual grading-restricted joint module D and its universal sphere block. Thus dual fusion exists in this broader vacuum scope, without invoking a narrower CFT-type existence theorem. [F1, step 2.1, algebra]

3.2 The relative lifting has an actual bounded matching inverse. On circles |x|=a, |y|=b use H^s boundary norms, s>=3, and node sections c+sum_{m>=1}u_m x^m+sum_{m>=1}v_m y^m with weighted square-sum norms (1+m)^{2s}a^{2m} and (1+m)^{2s}b^{2m}. Cauchy projection splits each jump into positive/negative Fourier parts. Cut off the exterior part, solve its dbar on the compact normalization with F2's Green inverse, and correct branch constants using the surjective finite node-evaluation map from the (-Z) vanishing. Normalize the finite kernel by exactly a basis of its dual evaluation functionals. This gives a bounded normalized right inverse R0 to the central matching map L0. At nonzero q the crossed series are sum v_m q^m x^{-m} and sum u_m q^m y^{-m}; their norm is bounded by |q|/(ab). Thus
 R(q)=R0[1+(L(q)-L0)R0]^{-1}
is a convergent Neumann inverse on a small full q-disk. Its normalized kernel sections form a finite frame and are holomorphic in all parameters: their total dbar is a matched kernel section with zero normalizing evaluations, hence zero. The same argument proves base change and holomorphic right inverses on section data. Global first-cohomology vanishing on the base glues these local lifts and gives principal-part surjectivity with one fixed kernel for every larger pole order. [F2, step 2.2, algebra]

4.1 Its evaluation realizes D as the directed union of the finite partial-block spaces. Here are the residue details. A partial functional at cutoff a has outgoing modes defined by choosing a global finite-state differential with the desired finite outgoing jet and zero jets at the other outgoing marks. F2 supplies it by a positive incoming twist. Different choices differ by the partial Ward subspace, so give the same functional. Choosing jets through a common sufficiently high order makes two successive residue computations finite; input Jacobi then gives the outgoing commutator and iterate identities, with opposite substitution on an inverted chart. These coefficient identities give the full outgoing weak-module Jacobi identity. The degree-zero conformal residue preserves each finite partial space, so its L0 is locally finite there. The lattice cutoff kills all shifted modes u[k], k>=a+1, on its functionals. Decompose a functional into its finitely many joint generalized L0 components in that finite partial space; F1's degree-span bound makes each cyclic component an actual grading-restricted joint module. Evaluation on the incoming label is a block, so universality puts every such functional in D. Conversely a vector of D satisfies a uniform large outgoing cutoff by its lower weight bounds and therefore belongs to some partial space. The evaluation kernel is stable under the outgoing modes by the same jet residue construction. If nonzero, its inclusion in D would represent the zero block and contradict the representing bijection; hence evaluation is injective. This proves precisely the partial-space realization used in the inverse below. [F1, F2, step 2.1, step 3.1, algebra]

4.2 The logarithmic tangent sequence on xy=q has generators x partial_x and y partial_y, both mapping to q partial_q, with kernel x partial_x-y partial_y dual to dx/x. The preceding positive-pole construction applied to omega^{-1} therefore glues a global meromorphic lift of q partial_q, with poles only at incoming marks, and with coefficients ax partial_x+by partial_y, a+b=1. It also gives one finite incoming generating window on the whole q-disk: use the same fixed kernel for all high principal-part lifts and the degree descent in step 2.1. The simultaneous-parameter construction is identical on disjoint fixtures and gives the stated a+b=0 on a different fixture. For components with no incoming mark insert a vacuum mark first. Vacuum propagation is actual creation and residue reconstruction: a functional with vacuum inserted extends uniquely by moving a meromorphic current with prescribed jet to that mark; the unit field is identity and its derivative is zero. The same finite jet lifting proves independence and inverse evaluation at 1. This uses the unit, not uniqueness of its weight-zero space. [F1, F2, step 2.1, step 3.2, algebra]

5.1 Let Omega(q) be the generalized-weight sewing tensor. Opposite transpose and L0 covariance give
 (Y(x^{L0}v,x) tensor1)Omega=(1 tensorY(y^{L0}Jv,y))Omega.
The nilpotent exponentials on every weight block are finite, and dx/x=-dy/y cancels the branch residues. Hence the formal sewing annihilates every total nodal Ward relation. Its logarithmic derivative is obtained by moving the paired conformal residues across this tensor. Raw conformal currents have the Schwarzian scalar because
 U(rho)omega=rho'(0)^2 omega+(c/12)S rho(0)1;
only L2 omega=c1/2 contributes and S rho(0)=6c2 in its jet exponential. On each rational normalization use the usual projective coordinates, with projective coefficient zero in the global projective chart and its Schwarzian transform in other charts. The chain rule for S makes the corrected conformal current global. Its finite paired residues yield a holomorphic scalar kappa(q). Thus
 q partial_q S(w)=S(-A(q)w)+kappa(q)S(w),
where A is the finite residue action of the lift in step 4.2. Reducing its finitely many images of the fixed incoming generators gives a finite system q partial_q f=B(q)f with B holomorphic at q=0. With disjoint fixtures one obtains the corresponding several Euler equations. Module finite cosets are F1; uniform nilpotence follows by taking the maximum exponent on finitely many generating generalized-weight vectors and commuting the nilpotent part through integer-degree modes. The formal series is therefore exactly a finite-exponent, uniformly finite-log formal solution. F3's Euler majorant proves its absolute and locally uniform convergence on every smaller full allowed parameter polydisc. Increasing the smaller coordinate radii exhausts the stated sewing domain. The limit is a block by its coefficientwise Ward identity and normal convergence. This proves ordinary sewing, including auxiliary vacuum removal, in the broader scope. [F1, F3, step 4.2, algebra]

6.1 We give the cylinder inverse, including its coefficient-membership step. On the smooth punctured q-disk the finite Ward quotient is locally free: the finite generators and Ward-preserving Virasoro differential operator give formal horizontal extensions of every fiber functional; a finite matrix Picard equation makes them analytic; relation annihilation follows from all their covariant derivatives. Hence fiber dimensions are constant. Nakayama on the finite-type quotient gives a local basis, since any kernel coefficient vanishes on every fiber. This is the finite-type/connection proof and does not presume nodal coherence. Parallel-extend a block at q0 to the universal cover, using the corrected operator q partial_q-A+kappa. The same finite generating column has its holomorphic Euler matrix B(q). F3 gives a convergent expansion
 psi(w)=sum_{n in E+N}sum_{l=0}^L psi_{n,l}(w) q^n(log q)^l,
with a common finite exponent-class set and log bound for ALL w. For arbitrary w this follows by its holomorphic reduction to the finite generators. Finite-difference spectral separation and Laurent uniqueness give unique coefficients. [F1, F3, step 4.2, step 5.1, algebra]

7.1 Fix one coefficient psi_{n,l}. Choose an outgoing cutoff h larger than its exponent offset. An outgoing-lattice current at cutoff h has branch terms x^{r+h}v dx and y^{r+h}v dy; in the node current frame these vanish to order h+1. Its crossed substitutions are therefore O(q^{h+1}). The bounded matching inverse of step 3.2 corrects that error without changing the first h exterior coefficients, with a finite positive incoming pole bound. Ward annihilation and expansion uniqueness imply psi_{n,l} kills that lattice. Thus psi_{n,l} belongs to the actual D partial space from step 4.1, not merely to the full dual of W. To get the complete annular balance, prescribe each finite node jet f(x,y)x^{L0}u dx/x on the two normalization branches through a fixed q order h. Positive incoming twist and subtraction of high outgoing jets lift them by F2. Choose the jet cutoff Q>h so its errors kill the finitely many D coefficient vectors concerned; their crossed errors are O(q^{h+1}) and are again corrected by the normalized matching inverse. Ward identities now give the branch residue equality modulo every h, hence coefficientwise. For u[k]=Res z^{k+wt(u)-1}Y(u,z)dz it reads
 u_+[k]psi_{n,l}=u_-^o[k]psi_{n-k,l}.
The outgoing conformal residues of the lift add to one by a+b=1, so comparison with the parallel differential equation also gives
 (L_+(0)-n)psi_{n,l}=(l+1)psi_{n,l+1}=(L_-(0)-n)psi_{n,l}.
Thus these are actual diagonal generalized-weight vectors with the indicated nilpotent recurrence. [F2, step 4.1, step 3.2, step 5.1, step 6.1, algebra]

8.1 Define chi on D' by chi(d')=sum_n <psi_{n,0},d'>. Every such pairing is finite because d' has finite joint-weight support. The annular identity in step 7.1 transposes to the two-point sphere Ward identity. Hence chi is a block on N. Moreover
 p1^{L_+(0)}p2^{L_-(0)}psi_{n,0}
 =q^n sum_l (log q)^l psi_{n,l}, q=p1 p2,
by that nilpotent recurrence. Finite coefficient contraction in the sewing tensor gives the original parallel block exactly. This constructs a right inverse. Conversely a cylinder sewing vanishing at q0 vanishes as a parallel section; coefficient uniqueness and the evaluation injection D into W^* make every diagonal sphere coefficient zero, proving injectivity. Finally vacuum propagation on Q and the representing bijections identify CB_N(D') with CB_F(W tensor H'); transposition reverses the Hom map, and on vectors both maps are composition with the same vacuum block. Thus their sewing is exactly the stated cylinder insertion. For a separating cut use the same construction on the disconnected normalization. Its dual fusion is the external product of its component dual fusions: each partial Ward quotient of a disjoint union is the tensor product of the component partial quotients, whose finite duals tensor. Applying the cylinder insertion isomorphism and representing property on one component therefore identifies the remaining component blocks with blocks of the sewn sphere. Explicitly every block psi on the first component factors uniquely as gamma_F composed with a module map T_psi; sewing with a block chi on the other component sends it to chi composed with T_psi', and the inverse just constructed proves surjectivity and injectivity. Iterating this on three-point separating cuts gives the stated genus-zero factorization. Disjoint cuts commute because their finite tensor contractions commute before convergent evaluation. This completes the needed broad sphere/cylinder and ordinary convergence interfaces, with no V0=C1 or rationality premise. [step 3.1, step 4.1, step 5.1, step 7.1, algebra] ∎
