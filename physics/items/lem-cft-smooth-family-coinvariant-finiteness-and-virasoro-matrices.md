---
id: lem-cft-smooth-family-coinvariant-finiteness-and-virasoro-matrices
kind: lemma
title: Relative coinvariant generators and actual Virasoro matrices
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
- lem-cft-smooth-family-positive-pole-cohomology-and-lifting
- lem-cft-fixed-curve-partial-coinvariants-finite
- lem-cft-c2-cofinite-modules-finitely-generated
- lem-cft-cyclic-weak-module-difference-one-spanning
- lem-cft-locality-to-jacobi-residue-calculus
- lem-cft-aut-o-action-and-coordinate-covariance
- lem-cft-state-field-and-residue-coordinate-covariance
- def-cft-voa-conformal-block-and-dual-fusion-product
- thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity
- thm-long-exact-sequence-sheaf-cohomology
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Gui and Zhang, Analytic Conformal Blocks II
    url: https://arxiv.org/pdf/2411.07707v4
    locator: Theorems1.16 and2.23 and the matrix reduction in3.7; relative lifting
      and the matrices are constructed below.
dependency_roles:
  lem-cft-smooth-family-positive-pole-cohomology-and-lifting: mathematical-premise
  lem-cft-fixed-curve-partial-coinvariants-finite: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  lem-cft-cyclic-weak-module-difference-one-spanning: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
  lem-cft-aut-o-action-and-coordinate-covariance: mathematical-premise
  lem-cft-state-field-and-residue-coordinate-covariance: mathematical-premise
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
dependency_level: 4
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---


## Statement

Assume full AC. Let $\pi:C\to B$ be a proper holomorphic submersion with disjoint marked sections meeting every fiber component, and let $V$ be C2-cofinite and of CFT type. Assign one fixed grading-restricted generalized joint module $W$ to the incoming marks, without a tensor-factorization assumption. Locally choose their vertical coordinates. Write $J_{\mathrm{pre}}(U)$ for the span of residue actions on $W\otimes\mathcal O(U)$ of global finite-state, finite-pole differentials on $C_U$, and $Q$ for the sheaf cokernel.

Every base point has a connected coordinate polydisc $U$ and a fixed finite-dimensional subspace $G\subset W$ such that $G\otimes\mathcal O(T)$ surjects onto $(W\otimes\mathcal O(T))/J_{\mathrm{pre}}(T)$ for every coordinate subpolydisc $T\subset U$. In particular $Q|_U$ is of finite type. Its formation commutes with holomorphic base changes between complex manifolds, and its fiber is the fixed-curve coinvariant quotient.

For each coordinate $b_a$ on a sufficiently small such $U$ there is an actual global meromorphic lift $\widetilde{\partial_a}$ with finite poles at the marked sections. In the marked charts write it as $\partial_a+h_{a,i}(t_i,b)\partial_{t_i}$. Then
$$\nabla_a=\partial_a-\sum_i\operatorname{Res}_{t_i=0}h_{a,i}(t_i,b)Y_i(\omega,t_i)dt_i$$
is a holomorphic differential operator on $W\otimes\mathcal O_U$ preserving the Ward ideal, hence descending to $Q$. For a basis $e_1,\ldots,e_d$ of $G$ there are holomorphic matrices $\Omega_a$ on $U$ with
$$\nabla_a e_i=\sum_j(\Omega_a)_{ij}e_j\pmod{J_{\mathrm{pre}}(U)}.$$
These are constructed coefficient matrices, not additional assumptions. The locally chosen connection need not be flat; no independence from the chosen meromorphic lifts, nodal extension, Hodge-line normalization or sewing assertion is included.

## Facts & Assumptions

**Given:** Exactly the smooth analytic family, module, residue convention and local coordinates above.

[F1] [[lem-cft-smooth-family-positive-pole-cohomology-and-lifting]] gives finite locally free direct images and base change for every sufficiently positive marked-pole twist, and its principal-part exact sequences.

[F2] [[lem-cft-fixed-curve-partial-coinvariants-finite]] proves the state bundle filtration by powers of the canonical line and the strict-index high-mode reduction. [[lem-cft-c2-cofinite-modules-finitely-generated]] and [[lem-cft-cyclic-weak-module-difference-one-spanning]] supply the finite-piece auxiliary grading and spanning for the joint module.

[F3] [[thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity]] gives a sufficiently small coordinate polydisc on which a specified coherent base bundle has zero positive cohomology, as do all its coordinate subpolydiscs. [[thm-long-exact-sequence-sheaf-cohomology]] gives surjectivity on sections when the kernel has zero first cohomology.

[F4] [[lem-cft-locality-to-jacobi-residue-calculus]] gives module residue Jacobi and the Virasoro commutator. [[lem-cft-aut-o-action-and-coordinate-covariance]] and [[lem-cft-state-field-and-residue-coordinate-covariance]] supply actual finite-jet coordinate covariance. The state weights are integral; the connection uses the genuine conformal modes, not an auxiliary grading operator.

[F5] [[def-cft-voa-conformal-block-and-dual-fusion-product]] defines the relative residue cokernel and its dual. No coherence, local freeness or family base-change conclusion is taken from that definition.

## Proof

1.1 Choose the finite homogeneous positive-weight representative set $A$ and finite incoming generating set from F2, and let $E$ bound the weights in $A$. The finite current bundle $F_E=V_{\le E,C}\otimes K_{C/B}$ has a filtration with graded quotients finite sums of $K_{C/B}^{1-r}$, $0\le r\le E$. Write $D$ for the sum of marked sections. After restricting to a fixed neighborhood, the genera and marked-point distributions are constant. F1 therefore gives one $k_0$ for which every fiber $H^1(F_E(kD))$ vanishes for $k\ge k_0$. Put $K=\pi_*F_E(k_0D)$, a fixed finite holomorphic bundle. Choose the connected coordinate polydisc $U$ so that F3 makes $H^1(T,K|_T)=0$ for every coordinate subpolydisc $T\subset U$. [F1, F2, F3, construct]

2.1 For every $\ell>k_0$, F1 gives the exact sequence $0\to K\to\pi_*F_E(\ell D)\to P_{k_0,\ell}\to0$. Its kernel is the same K for every arbitrarily large $\ell$. Thus F3 lifts every global principal-part section on T to a global current section on $C_T$, simultaneously in the sense that the same base T works for all pole orders. In particular the principal part $a t_i^{-\ell}dt_i$ at one incoming point, zero at the others and with all intermediate orders set to zero, has such a lift; its error poles have order at most $k_0$. No simultaneous frame or acyclicity assertion for infinitely many different direct-image bundles is needed. [F1, F3, step 1.1, construct]

2.2 We construct the needed meromorphic vector fields. On a base coordinate polydisc the exact tangent sequence, twisted by $kD$, is $$0\to T_{C/B}(kD)\to T_C(kD)\to\pi^*T_B(kD)\to0.$$ On each fiber the first term is $K^{-1}(kD)$, the last is a finite sum of $\mathcal O(kD)$, and the middle is their extension. For sufficiently large k all three have zero first cohomology by line duality and F1. Apply F1 to them. Their direct-image bundle map is fiberwise surjective because the kernel has zero fiber H1. A finite maximal minor supplies a local holomorphic right inverse. Apply it to the section $\pi^*\partial_a$, whose base component has no pole. This yields a global section $\widetilde{\partial_a}$ on $C_U$ with only finite marked poles and with differential exactly $\pi^*\partial_a$. Shrink U for the finitely many coordinate fields; the acyclicity condition in step 1.1 persists on its coordinate subpolydiscs. [F1, step 1.1, construct]

3.1 Fix $L\ge E+k_0$. By F2's strict-index spanning, there is a uniform auxiliary degree bound $\nu(L)$ such that every homogeneous vector above that bound is a sum of $a_{(-\ell)}^{(i)}w^\circ$, $a\in A$, $\ell>L$. The global lift in step 2.1 acts on $w^\circ$ as that term plus a finite remainder. Its remainder modes have degree at most $E+k_0-1$, so its total degree is strictly smaller than the original vector, exactly as in F2's fixed-curve argument. All coefficients and reductions are holomorphic on T because the lift is a section on the whole $C_T$. Induction on the nonnegative auxiliary degree expresses every constant vector of W, modulo $J_{\mathrm{pre}}(T)$, as an $\mathcal O(T)$-linear combination of the fixed finite space $G=W_{\le\nu(L)}$. Every section of $W\otimes\mathcal O(T)$ is a finite sum of such vectors with holomorphic coefficients. This proves the asserted global generation on T. The auxiliary grading controls this finite reduction only; it is not used as an infinitesimal conformal dilation. [F2, step 2.1, algebra]

3.2 Its local vertical coefficient $h_{a,i}$ is meromorphic in $t_i$ with a finite negative Laurent cutoff and holomorphic in b. On a fixed input vector w the proposed Virasoro residue $A_aw$ is a finite sum: finitely many negative modes come from that pole bound, and sufficiently large positive conformal modes kill w by module truncation. Thus it lies in a fixed finite-dimensional span of conformal-mode images of w, with holomorphic coefficients on U. The operators $\nabla_a=\partial_a-A_a$ are consequently actual sheaf differential operators on the algebraic tensor sheaf, obeying the Leibniz rule. [F4, step 2.2, algebra]

3.3 To prove ideal preservation, let $\sigma=u(t,b)dt$ be a finite-state global meromorphic current. Differentiating the finite-coordinate action along the flow of $\widetilde{\partial_a}$ gives its globally defined Lie derivative, locally $$\mathcal L_{\widetilde{\partial_a}}\sigma=\left[(\partial_a+h\partial_t+h')u-\sum_{r\ge0}\frac{h^{(r+1)}}{(r+1)!}L(r)u\right]dt.$$ For justification, a centered infinitesimal coordinate change is $s\mapsto s+\epsilon(h(t+s)-h(t))$; F4 differentiates its state operator to $\sum_{r\ge0}h^{(r+1)}L(r)/(r+1)!$. Pullback differentiates the coefficient by $\partial_a+h\partial_t$, and the relative one-form contributes $h'$. The state operator enters with the displayed negative sign in the pullback Lie derivative. Coordinate functoriality in F4 makes these local formulas agree on overlaps away from D, and the finite state sum gives only finite poles along D. This constructs the global current Lie derivative, rather than assuming it exists. [F4, step 2.2, algebra]

4.1 For each state cutoff n, increase the allowed marked pole order k until all fibers $H^1(F_n(kD))$ vanish. F1 gives the canonical holomorphic bundle $H_{n,k}=\pi_*F_n(kD)$ and its base change on the fixed neighborhood. Every finite-state finite-pole current is included in one of these sufficiently positive twists, so Q is the cokernel of $$\bigoplus_{n,k}(H_{n,k}\otimes W\otimes\mathcal O_B)\longrightarrow W\otimes\mathcal O_B,$$ where the first map is the residue action and k ranges over such positive twists. Pullback commutes with these direct sums, tensors and cokernels. F1 identifies each pulled-back $H_{n,k}$ with its corresponding direct image; the residue formula in F4 identifies the action. Hence the resulting cokernel is exactly the coinvariant sheaf of the pulled-back family. In particular base change to a point gives the fixed-curve quotient, not merely an abstract vector space of the same dimension. This uses no unproved coherence of Q. [F1, F4, F5, step 3.1, algebra]

4.2 Module residue Jacobi gives $$[A_a,J(\sigma)]=J\left(\left[\sum_{r\ge0}\frac{h^{(r+1)}}{(r+1)!}L(r)u-\partial_t(hu)\right]dt\right).$$ Indeed the $r=-1$ Virasoro term is $hY(Tu,t)=h\partial_tY(u,t)$ for a constant state; integration by parts supplies $-\partial_t(hu)$ including the derivative of every coefficient of u. All sums are finite on each input as in step 3.2. Therefore $$\nabla_a(J(\sigma)w)=J(\sigma)\nabla_aw+J(\mathcal L_{\widetilde{\partial_a}}\sigma)w.$$ The current in the last term is a permitted global meromorphic current by step 3.3, so $\nabla_a$ preserves $J_{\mathrm{pre}}(T)$ for every open T. In particular it descends to Q. The central contribution is retained: for $u=\omega$, the $L(2)\omega=(c/2)\mathbf1$ term contributes the actual third-derivative term in this same formula. No projective-connection or Hodge-line normalization has been inferred. [F4, step 3.2, step 3.3, algebra]

5.1 Choose a basis $e_1,\ldots,e_d$ of G. By step 3.2 the finitely many $\nabla_a e_i$ have a fixed finite-dimensional W-span with holomorphic coefficients on U. Apply the global reduction of step 3.1 to each of those finitely many constant vectors, obtaining actual holomorphic coefficient functions $(\Omega_a)_{ij}$ on U and relations $$\nabla_a e_i-\sum_j(\Omega_a)_{ij}e_j\in J_{\mathrm{pre}}(U).$$ These finite holomorphic matrices are the required output of the geometric construction. They may depend on the chosen reductions and lifts. No integrability, scalar curvature or nodal regular-singularity property is asserted. Together with steps 3.1–4.2 this proves every assertion of the Statement. [step 3.1, step 3.2, step 4.2, algebra] ∎
