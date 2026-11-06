---
id: thm-cft-c2-cofinite-pseudo-sewing-convergence
kind: theorem
title: Convergence of higher-genus pseudo-sewing
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
deps:
  - thm-cft-segal-sewing-convergence
  - lem-cft-plumbing-proper-analytic-family
  - def-cft-voa-conformal-block-and-dual-fusion-product
  - def-cft-contragredient-generalized-module
  - thm-cft-contragredient-generalized-module
  - def-vertex-algebra-module
  - def-cft-pseudotrace
  - lem-cft-pseudotrace-basis-independent
  - def-c2-cofinite-vertex-algebra
  - def-grading-restricted-generalized-vertex-module
  - def-axiom-of-choice
  - lem-cft-c2-cofinite-modules-finitely-generated
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  thm-cft-segal-sewing-convergence: mathematical-premise
  lem-cft-plumbing-proper-analytic-family: mathematical-premise
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  def-cft-contragredient-generalized-module: mathematical-premise
  thm-cft-contragredient-generalized-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-cft-pseudotrace: mathematical-premise
  lem-cft-pseudotrace-basis-independent: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
axiom_use: "Full AC is inherited from the compact-surface and analytic sewing suppliers; the finite projective trace calculation uses only the stated algebraic data."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces"
      url: https://arxiv.org/pdf/2411.07707v4
      locator: "Theorem 4.13 and its setup/proof, §§4.4.1–4.4.3, PDF pp. 61–64."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be C2-cofinite and of CFT type. Let $\widetilde\pi:\widetilde{\mathcal C}\to\widetilde B$ be a proper analytic family of compact pointed Riemann surfaces with $N\geq1$ incoming sections and one disjoint pair of sewing sections with positive coordinate radii. Assume every component of every fiber of $\widetilde{\mathcal C}\to\widetilde B$ meets an incoming or sewing section, and every component of each smooth sewn fiber meets an incoming section. Let $W$ be a grading-restricted generalized $V^{\otimes N}$-module at the remaining incoming points. Let $M$ be a grading-restricted generalized $V$-module at the first sewing section, with its contragredient $M'$ at the second. Assume $A\subseteq\mathrm{End}_V(M)^{\mathrm{op}}$ is a unital subalgebra, $\dim_\mathbb C\mathrm{End}_V(M)<\infty$, and $M$ is projective as a right $A$-module. For every lower truncation $M_{\le t}=\bigoplus_{\Re\lambda\leq t}M_{[\lambda]}$ used in the series, assume it is finite dimensional and projective as a right $A$-module, so the pseudo-trace is defined on its A-linear endomorphisms. Fix a symmetric linear functional $\omega:A\to\mathbb C$. A family conformal block $\phi$ at the unsewn marks determines, for every base point $b$, $w\in W$, and generalized weights $\lambda,\mu$, a finite-block map $T_{\lambda,\mu;b,w}:M_{[\mu]}\to M_{[\lambda]}$ by
$$
\langle m_\lambda^\vee,T_{\lambda,\mu;b,w}m_\mu\rangle=\phi_b(w\otimes m_\lambda^\vee\otimes m_\mu),
$$
for $m_\lambda^\vee\in M_{[\lambda]}^*$ and $m_\mu\in M_{[\mu]}$. Assume each such map is A-linear. These block maps form a product family and need not assemble to an algebraic endomorphism $M\to M$.

For a generalized weight $\lambda$, let $P_\lambda$ be the projection onto $M_{[\lambda]}$ and write $L(0)=\lambda I+N_\lambda$ there. The formal power is $q^{L(0)}P_\lambda=q^\lambda e^{(\log q)N_\lambda}$ on the universal cover. The pseudo-trace is applied only to diagonal block endomorphisms $T_{\lambda,\lambda;b,w}$. Extend each such map by zero to a finite-dimensional projective lower truncation containing $M_{[\lambda]}$; additivity makes its pseudo-trace independent of the chosen truncation. The formal pseudo-sewing is
$$
S^\omega_\phi(w)=\sum_{\lambda}\mathrm{Tr}_\omega\!\left(q^{L(0)}|_{M_{[\lambda]}}\,T_{\lambda,\lambda;b,w}\right),
$$
with the logarithm branch fixed on the universal cover of the punctured one-parameter disk. Then $S^\omega_\phi(w)$ converges absolutely and locally uniformly on compact subsets of the base and punctured sewing disk, and its limit is a conformal block of the sewn smooth family. This is a pseudo-trace statement with the projectivity, symmetry, finite-truncation, and blockwise A-linearity hypotheses above; it does not identify pseudo-trace with ordinary trace or replace it by a sum over simple modules.

## Statement references

[[thm-cft-segal-sewing-convergence]]

[[lem-cft-plumbing-proper-analytic-family]]

[[def-cft-pseudotrace]]

[[lem-cft-pseudotrace-basis-independent]]

[[def-cft-voa-conformal-block-and-dual-fusion-product]]

## Facts & Assumptions

**Given:** Exactly the data in the unchanged Statement. The ordinary analytic sewing theorem is used as a prerequisite, not proved by this reduction. Every tensor product and restricted dual below is algebraic; completions are products over the indicated joint generalized weights.

[F1] [[lem-cft-c2-cofinite-modules-finitely-generated]] gives finite lattice-coset support and finite-dimensional bounded weight truncations. The projectivity required in the Statement is retained.

[F2] [[thm-cft-contragredient-generalized-module]] supplies the opposite-field restricted dual, also componentwise. In particular the finite-support endomorphisms identify with the joint module $M\otimes M'$, with joint weights equal to output and input weights.

[F3] [[def-cft-pseudotrace]] and [[lem-cft-pseudotrace-basis-independent]] supply the finite-dual-basis trace and its independence.

[F4] [[thm-cft-segal-sewing-convergence]] supplies ordinary analytic sewing for arbitrary grading-restricted joint modules, including two sewing pairs. This is the only analytic convergence theorem used here.

[F5] [[def-cft-voa-conformal-block-and-dual-fusion-product]] fixes the global residue Ward action; [[lem-cft-plumbing-proper-analytic-family]] fixes plumbing. Reordering marked factors carries their labels with them.

## Proof

1.1 Since $A$ commutes with the module modes, it commutes with $L(0)$ and its finite generalized-weight projections. Each $M_{[\lambda]}$ is an $A$-summand of a finite projective truncation from the Statement, hence finite projective. Put $$F=\bigoplus_{\lambda,\mu}\operatorname{Hom}_A(M_{[\mu]},M_{[\lambda]}).$$ These are the finite-support $A$-linear operators. The identification $M\otimes M'\simeq\bigoplus_{\lambda,\mu}\operatorname{Hom}_{\mathbb C}(M_{[\mu]},M_{[\lambda]})$ sends $m\otimes m'$ to $x\mapsto m\langle m',x\rangle$. The two commuting actions on $F$ are left multiplication by $Y_M(v,z)$ and right multiplication by $Y_M(A(z)v,z^{-1})$, where $A(z)=e^{zL(1)}(-z^{-2})^{L(0)}$ acts on states. They preserve $A$-linearity. They are the restricted tensor/dual actions of [F2], so $F$ is a joint module with finite joint spaces and coordinatewise lower weight bounds. Its restricted contragredient $F'$ is therefore admitted by [F4]. No assertion that a fixed total-weight space of an arbitrary joint module is finite is used. [F1, F2, given, construct]

1.2 If $P,Q$ are finite projective right $A$-modules and $u:P\to Q$, $v:Q\to P$ are $A$-linear, then $\operatorname{Tr}_{\omega,P}(vu)=\operatorname{Tr}_{\omega,Q}(uv)$. Indeed with dual bases $(p_i,\alpha_i)$ and $(q_j,\beta_j)$ the two sums are respectively $\sum_{i,j}\omega(\alpha_i(vq_j)\beta_j(up_i))$ and the same products in reversed order, equal by symmetry of $\omega$. This proves cyclicity also for maps between distinct finite projectives. It implies additivity under direct sums by taking the union of their dual bases. Consequently extending an operator by zero to any larger projective weight truncation leaves its pseudo-trace unchanged. Thus $\tau:F\to\mathbb C$, given by the pseudo-trace on any sufficiently large finite truncation, is well-defined. It vanishes on all off-diagonal weight blocks and is cyclic whenever both compositions have finite support. [F3, given, algebra]

2.1 Associate the first component of $F$ to infinity and the second to zero on the sphere with coordinates $1/z,z$. Its two-point Ward relation is $$\tau(Y_M(v,z)T)=\tau(TY_M(v,z)),$$ coefficientwise for every $T\in F$. To justify applying step 1.2, for each fixed mode and $T$ choose a finite projective truncation containing its finitely many source and target weight blocks and the blocks reached by that mode. Both products then factor through this finite truncation; cyclicity applies there. Inversion in the second component is exactly the opposite-field action in step 1.1, so the displayed equality is precisely the residue Ward identity at zero and infinity. Laurent monomials span global two-point meromorphic coefficients; regular differential terms have zero residue, and state-coordinate changes obey [F5]. Hence $\tau$ is an actual two-point sphere conformal block. This proves the trace/block identification rather than assuming it. [F2, F3, F5, step 1.1, step 1.2, algebra]

2.2 For fixed $b,w$, the restriction of $\phi_b$ to each block $M_{[\lambda]}^*\otimes M_{[\mu]}$ is represented by $T_{\lambda,\mu;b,w}$. These maps form a product family in $\prod_{\lambda,\mu}F_{[\lambda,\mu]}$, where $F_{[\lambda,\mu]}=\operatorname{Hom}_A(M_{[\mu]},M_{[\lambda]})$; no finite support in $(\lambda,\mu)$ is asserted. Pairing with $F'=\bigoplus_{\lambda,\mu}F_{[\lambda,\mu]}^*$ therefore defines a functional on $W\otimes F'$. It is holomorphic in $b$ because each vector of $F'$ has finite block support. On each finite-dimensional block, the kernel of the restricted transpose $M'\otimes M\to F'$ is the annihilator of $F_{[\lambda,\mu]}$. Since $T_{\lambda,\mu;b,w}$ belongs to that A-linear subspace, $\phi_b$ annihilates the kernel. Its Ward identities consequently descend to $W\otimes F'$. Thus this is a family conformal block on the original unsewn surface. The two old marks retain the order $m',m$ in the pairing; their labels move with them under any enumeration. [F2, F5, given, step 1.1, algebra]

3.1 Take the disjoint union of that surface and the two-point sphere from step 2.1. The product block is $\phi\otimes\tau$, with $F'$ on the two old sewing marks and $F$ on the sphere marks. Apply ordinary two-pair sewing [F4], using parameters $q_1,q_2$ of radii $r,\rho$ and matching the first old dual label to infinity and the second to zero. The joint component gradings on $F$ are output and input gradings, so the resulting series is
$$
\sum_{\lambda,\mu}\tau\!\left(q_1^{L(0)}\widetilde T_{\lambda,\mu;b,w}q_2^{L(0)}\right),
$$
where $\widetilde T_{\lambda,\mu;b,w}$ is $T_{\lambda,\mu;b,w}$ extended by zero outside its source and target blocks. This formula follows by pairing the two component restricted dual bases in the ordinary sewing tensor; on each finite block it is the elementary identity expressing evaluation of a tensor against its dual basis. It uses no factorization of $F$ into two module factors. The hypotheses on components before and after sewing are those in the Statement, together with the two marked sphere points, so [F4] applies. [F2, F4, F5, step 2.1, step 2.2, construct]

4.1 Off-diagonal blocks in step 3.1 have zero pseudo-trace by step 1.2. On a diagonal block cyclicity moves $q_2^{L(0)}$ past the other finite operators, giving
$$
\tau(q_1^{L(0)}\widetilde T_{\lambda,\lambda;b,w}q_2^{L(0)})=\tau((q_1q_2)^{L(0)}\widetilde T_{\lambda,\lambda;b,w}).
$$
Here logarithms add on the chosen cover. The nilpotent powers are finite on the block, and $e^{(\log q_1)N_\lambda}e^{(\log q_2)N_\lambda}=e^{(\log q_1+\log q_2)N_\lambda}$. The ordinary double sewing is therefore exactly $S^\omega_\phi$ evaluated at $q=q_1q_2$, including every generalized-power and logarithmic coefficient. This is an equality of formal coefficient series before any analytic rearrangement. [F3, step 1.2, step 3.1, algebra]

5.1 By [F4] the double sewing converges absolutely and locally uniformly on $0<|q_1|<r$, $0<|q_2|<\rho$, locally uniformly in the base, to a sewn block. Every $q_0$ with $0<|q_0|<r\rho$ has a factorization $q_0=q_{1,0}q_{2,0}$ with these strict inequalities. In a neighborhood of $q_0$ choose $q_1=q_{1,0}$ and $q_2=q/q_{1,0}$, with compatible logarithms. Substitution in the absolutely locally uniformly convergent series is valid. The diagonal simplification in step 4.1 is a finite operation at each generalized weight and logarithmic degree, so it preserves the absolute bounds; it gives precisely the pseudo-sewing coefficients. A compact subset of the punctured disk and base is covered by finitely many such neighborhoods, giving the claimed absolute and locally uniform convergence. [F4, step 4.1, algebra]

6.1 Eliminating the two sphere collar coordinates in the successive plumbing identifications gives the original plumbing relation with parameter $q_1q_2=q$. Thus the sewn fiber is canonically the fiber in the Statement, with unchanged external markings and coordinates. The limit of step 5.1 is a block on that fiber by [F4]. Its Ward annihilation is also verified coefficientwise by step 2.1 and ordinary sewing, and persists under locally uniform convergence by finite residue extraction. Its holomorphic dependence follows from that same convergence. These conclusions establish the unchanged Statement. Projectivity and symmetry have remained hypotheses throughout. [F4, F5, step 5.1, algebra] ∎
