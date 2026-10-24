---
id: lem-canonical-free-presentation-controls-eilenberg-watts-comparison
kind: lemma
title: "Canonical free presentations force the comparison to be an isomorphism"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural
  - lem-evaluation-on-the-regular-module-has-a-commuting-right-action
  - lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving
  - lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums
  - cor-every-module-is-a-quotient-of-a-free-module
  - thm-unit-isomorphisms-for-module-tensor-products
  - def-exact-and-short-exact-sequences-of-modules
  - def-kernels-and-cokernels-as-equalizers-and-coequalizers
  - def-direct-sum-of-a-family-of-modules
  - thm-universal-property-of-module-direct-sums
  - prop-functoriality-of-module-tensor-products
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, V. Ostrik, Tensor Categories, §1.8, Proposition 1.8.10 (finite-dimensional free-presentation argument)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A,B$ be unital rings and let
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ be additive, right exact, and
coproduct-preserving; put $M=F(A)$ with the $(B,A)$-bimodule structure of
[[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]]. Then the
canonical comparison
$\tau:M\otimes_A-\Rightarrow F$ of
[[lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural]] is a
natural isomorphism. Consequently $F$ is naturally isomorphic to the tensor
functor $T_{F(A)}$. No commutativity and no choice are used.

## Facts & Assumptions

**Given:** Unital rings $A,B$, an additive, right exact, coproduct-preserving functor $F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$, the $(B,A)$-bimodule $M=F(A)$, and a left $A$-module $X$.

[F1] The canonical comparison $\tau_X:M\otimes_AX\to F(X)$ satisfies $\tau_X(m\otimes x)=F(\ell_x)(m)$ for $\ell_x(a)=ax$, each $\tau_X$ is $B$-linear, and $\tau$ is natural: $F(u)\circ\tau_X=\tau_Y\circ(1_M\otimes u)$ ([[lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural]]).

[F2] The formula $ma=F(r_a)(m)$ with $r_a(x)=xa$ makes $M$ a $(B,A)$-bimodule ([[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]]).

[F3] $\rho_M:M\otimes_AA\to M$, $\rho_M(m\otimes a)=ma$, is a group isomorphism ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F4] $T_M=M\otimes_A-$ is additive, right exact, preserves arbitrary direct sums including the empty one, and its induced maps are $B$-linear when $M$ is a $(B,A)$-bimodule ([[lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums]]).

[F5] For an additive module functor, right exactness together with coproduct preservation is equivalent to preservation of cokernels and arbitrary direct sums ([[lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving]]).

[F6] The free module $A^{(X)}$ admits the canonical surjection $q_X:A^{(X)}\to X$ with $q_X(e_x)=x$, and $A^{(K)}$ denotes the free module on the underlying set of a module $K$ ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[F7] A cokernel of $f:A\to B$ is a map $q:B\to\operatorname{coker}(f)$ with $qf=0$ such that every $h$ with $hf=0$ factors uniquely as $h=\overline h\circ q$ ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[F8] The direct sum is the coproduct with coordinate inclusions, a map out of a coproduct is uniquely determined by its components, and the empty direct sum is the zero module ([[def-direct-sum-of-a-family-of-modules]], [[thm-universal-property-of-module-direct-sums]]).

[F9] Exactness of $A^{(K)}\xrightarrow dA^{(X)}\xrightarrow qX\to0$ means $\operatorname{im}d=\ker q$ and surjectivity of $q$ ([[def-exact-and-short-exact-sequences-of-modules]]).

[F10] Module maps induce tensor maps functorially: $(1\otimes v)\circ(1\otimes u)=1\otimes(v\circ u)$, and $(1\otimes u)(m\otimes x)=m\otimes u(x)$ ([[prop-functoriality-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 At $A$: since $\ell_a=r_a$, step [F1] and [F2] give $\tau_A(m\otimes a)=F(\ell_a)(m)=ma=\rho_M(m\otimes a)$; by [F3] the map $\tau_A=\rho_M$ is an isomorphism. [F1, F2, F3]

1.2 Coproduct preservation: by [F5] the hypotheses make $F$ preserve cokernels and arbitrary direct sums, and $T_M$ preserves arbitrary direct sums by [F4]. Hence for any family $(Y_i)$ the object $F(\bigoplus_iY_i)$ with the maps $F(\jmath_i)$ is a coproduct of the family $(F(Y_i))$, and $M\otimes_A(\bigoplus_iY_i)$ with the maps $1_M\otimes\jmath_i$ is a coproduct of the family $(M\otimes_AY_i)$. [F4, F5, F8]

1.3 Presentation: put $K_X=\ker q_X$ for the canonical surjection $q_X:A^{(X)}\to X$ of [F6], let $q'_X:A^{(K_X)}\to K_X$ be the canonical surjection of [F6] for $K_X$, and let $d_X:A^{(K_X)}\to A^{(X)}$ be $q'_X$ followed by the inclusion $K_X\hookrightarrow A^{(X)}$. Then $\operatorname{im}d_X=K_X=\ker q_X$ and $q_X$ is surjective, so $A^{(K_X)}\xrightarrow{d_X}A^{(X)}\xrightarrow{q_X}X\to0$ is exact. [F6, F9]

2.1 Free modules: let $I$ be a set with coordinate inclusions $\iota_i:A\to A^{(I)}$. Naturality [F1] gives $F(\iota_i)\circ\tau_A=\tau_{A^{(I)}}\circ(1_M\otimes\iota_i)$ for every $i$. By step 1.2 the $1_M\otimes\iota_i$ exhibit $M\otimes_AA^{(I)}$ as a coproduct of copies of $M\otimes_AA$ and the $F(\iota_i)$ exhibit $F(A^{(I)})$ as a coproduct of copies of $M$; comparing components shows that under these identifications $\tau_{A^{(I)}}$ is the coproduct of the maps $\tau_A$, namely $\bigoplus_i\tau_A$. A coproduct of isomorphisms is an isomorphism, its inverse being the map induced by the inverses of the components via [F8]; since $\tau_A$ is an isomorphism by step 1.1, so is $\tau_{A^{(I)}}$, including $I=\varnothing$. [F1, F8, step 1.1, step 1.2]

2.2 Induced map at $X$: by right exactness [F4, F5] the maps $1_M\otimes q_X$ and $F(q_X)$ are cokernels of $1_M\otimes d_X$ and $F(d_X)$ respectively. Naturality [F1] gives $\tau_{A^{(X)}}\circ(1_M\otimes d_X)=F(d_X)\circ\tau_{A^{(K_X)}}$, so $F(q_X)\circ\tau_{A^{(X)}}$ kills $\operatorname{im}(1_M\otimes d_X)$; by the cokernel universal property [F7] there is a unique map $\tau_X:M\otimes_AX\to F(X)$ with $\tau_X\circ(1_M\otimes q_X)=F(q_X)\circ\tau_{A^{(X)}}$. [F1, F4, F5, F7, step 1.3]

3.1 Inverse at $X$: since $(1_M\otimes q_X)\circ(1_M\otimes d_X)=1_M\otimes(q_X\circ d_X)=0$ by [F10] and step 1.3, and $\tau_{A^{(X)}}^{-1}\circ F(d_X)=(1_M\otimes d_X)\circ\tau_{A^{(K_X)}}^{-1}$ by naturality [F1] and the invertibility of step 2.1, the composite $(1_M\otimes q_X)\circ\tau_{A^{(X)}}^{-1}$ kills $\operatorname{im}F(d_X)$; by [F7] there is a unique map $\sigma_X:F(X)\to M\otimes_AX$ with $\sigma_X\circ F(q_X)=(1_M\otimes q_X)\circ\tau_{A^{(X)}}^{-1}$. Then $\sigma_X\circ\tau_X$ and the identity agree after composition with the cokernel map $1_M\otimes q_X$, and $\tau_X\circ\sigma_X$ and the identity agree after composition with the cokernel map $F(q_X)$; uniqueness in [F7] makes both composites the identity, so $\tau_X$ is an isomorphism. [F1, F7, F10, step 2.1, step 2.2]

4.1 Steps 1.1, 2.1 and 3.1 show that every component of the natural transformation $\tau$ is an isomorphism, so $\tau:M\otimes_A-\Rightarrow F$ is a natural isomorphism and $F\cong T_{F(A)}$; the comparison was constructed before any presentation of $X$ was chosen, and no element of an auxiliary set is selected, so no presentation independence argument and no choice are needed. [F1, step 1.1, step 2.1, step 3.1] ∎
