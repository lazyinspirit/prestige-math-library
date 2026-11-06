---
id: thm-cft-contragredient-generalized-module
kind: theorem
title: Contragredient construction preserves generalized VOA modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
deps:
  - thm-cft-contragredient-module-well-defined
  - def-cft-voa-conformal-block-and-dual-fusion-product
  - def-cft-contragredient-generalized-module
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-grading-restricted-generalized-vertex-module
justified_by: []
proof_strategy: direct
domain: mathematics
library: mathematics
dependency_roles:
  thm-cft-contragredient-module-well-defined: mathematical-premise
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  def-cft-contragredient-generalized-module: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras I: Propagation and Dual Fusion Products"
      url: https://arxiv.org/pdf/2305.10180v4
      locator: "§1.2 and the stated contragredient-module conventions, PDF pp. 18–20."
    - title: "Yi-Zhi Huang, James Lepowsky, and Hao Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I"
      url: https://arxiv.org/pdf/1012.4193
      locator: "§2, Theorem 2.34 and its proof, PDF pp. 67–68; the source derives the module axioms using FHL Theorems 5.2.1 and 5.3.1 plus its Lemma 2.22."
    - title: "Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I"
      url: https://arxiv.org/pdf/1012.4193
      locator: "§2, Definition 2.12 and the contragredient-module construction for grading-restricted generalized modules."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $U$ be a conformal vertex algebra of CFT type and let $M$ be a grading-restricted generalized $U$-module. The restricted dual vector space and candidate action defined above satisfy the lower-truncation, vacuum, and module Jacobi axioms, and the resulting module is grading-restricted generalized. Thus $M'$ is a grading-restricted generalized $U$-module, with the contragredient convention fixed in its definition. For a tensor product $V^{\otimes k}$ acting componentwise, the same construction applied in each component gives a $V^{\otimes k}$-module with the corresponding joint generalized-weight decomposition.

## Statement references

[[def-cft-contragredient-generalized-module]]

[[def-vertex-algebra-module]]

[[def-grading-restricted-generalized-vertex-module]]

## Facts & Assumptions

**Given:** The single-module or finite tensor-component situation in the unchanged Statement. For the tensor clause, use precisely the joint-module convention in F2, not a hypothesis of finite-dimensional total-weight spaces.

[F1] [[thm-cft-contragredient-module-well-defined]] proves the opposite-field restricted-dual module construction for every grading-restricted generalized module over a CFT-type conformal vertex algebra. It gives the same generalized weights, dimensions and real lower bound. Its opposite-field proof does not require semisimplicity or a uniform nilpotence exponent for the module.

[F2] The module paragraph of [[def-cft-voa-conformal-block-and-dual-fusion-product]] defines the finite-component convention used here: the component V-actions commute, the commuting operators $L_j(0)$ have a simultaneous generalized-eigenspace direct sum $M=\bigoplus_{\lambda\in\mathbb C^k}M_{[\lambda]}$, each joint block is finite dimensional, vectors have finite support, and there is a real lower bound $B_j$ for the real parts of the occurring jth weights. No finiteness of the total-weight spaces is assumed. Only this explicitly defined module paragraph is used; no coordinate-change gluing, conformal-block or analytic existence assertion is needed.

[F3] [[def-cft-contragredient-generalized-module]] specifies the restricted dual and the opposite-field formula. Its single-module formula is identical to that of F1; its component formula uses the jth copy of the same state operator $e^{zL(1)}(-z^{-2})^{L(0)}$ on V.

## Proof

1.1 In the single-module clause all hypotheses of F1 are exactly those in the Statement and [[def-grading-restricted-generalized-vertex-module]]. The formula in F3 is the formula proved in F1. Thus F1 supplies lower truncation, vacuum, module Jacobi and the grading-restricted generalized-weight decomposition, without an additional unproved formal-adjoint input. This proves the single-module clause. [given, F1, F3, algebra]

1.2 Fix a component j and a tuple $\beta$ of eigenvalues for all components other than j. Let $M^{j,\beta}=\bigoplus_{h\in\mathbb C}M_{[(\beta,h)_j]}$, where $(\beta,h)_j$ denotes the joint tuple with h in position j. Every mode of the jth action commutes with $L_i(0)$ for $i\ne j$, hence preserves their generalized eigenspaces and this subspace. The restriction is a V-module, since its truncation, vacuum and Jacobi identities restrict from the jth component action. Its generalized $L_j(0)$-eigenspace at h is exactly $M_{[(\beta,h)_j]}$: on any other generalized eigenspace the operator $L_j(0)-h$ is invertible, and each vector has finite support. F2 gives finite-dimensionality of this block and the lower bound $B_j$. Thus $M^{j,\beta}$ is an actual grading-restricted generalized V-module even when M is not grading restricted for the sum $\sum_iL_i(0)$. [F2, construct, algebra]

2.1 Apply F1 to every fibre in step 1.2. For fixed j the joint restricted dual has the algebraic identification $M'=\bigoplus_\beta(M^{j,\beta})'$, since both sides consist of finite sums of functionals on the same joint blocks. The fibre contragredient action is exactly F3's jth formula and preserves the other dual labels $\beta$. Therefore it defines a component action on M'. For any vector of M', only finitely many fibres and weight blocks occur; taking the maximum of their truncation bounds proves lower truncation on that vector. Vacuum and Jacobi hold on each fibre, hence on their algebraic direct sum. [F1, F2, F3, step 1.2, algebra]

3.1 For distinct components i and j, all original component modes commute. Each opposite mode is a finite sum of modes of that same component, because the state-side exponential is finite. The opposite modes of distinct components therefore commute, and their transposes commute too: pairing their commutator against any m gives the negative of the original opposite-mode commutator, zero. Hence the dual component actions commute. On the finite joint block $M_{[\lambda]}^*$ each dual $L_j(0)$ is the transpose of the original $L_j(0)$, so $L_j(0)-\lambda_j$ remains nilpotent there. Finite-dimensionality, finite support and every coordinate lower bound are unchanged, and the displayed direct sum is its joint generalized-weight decomposition. These are precisely F2's component-module axioms for $V^{\otimes k}$, proving the full tensor-component clause. [F1, F2, F3, step 2.1, algebra]

4.1 For a module map $f:M\to N$, commutation with the component conformal fields implies that f preserves joint generalized weights. Its restricted transpose $f':N'\to M'$ is therefore defined. Pairing with m gives $\langle f'Y_{N'}(u,z)\nu,m\rangle=\langle\nu,Y_N^o(u,z)f(m)\rangle=\langle\nu,fY_M^o(u,z)m\rangle=\langle Y_{M'}(u,z)f'(\nu),m\rangle$, component by component. The middle equality uses only f commuting with the original modes and their finite opposite-state combinations. The separating restricted pairings prove that f' is a module map. The same pairing gives $(g\circ f)'=f'\circ g'$ and $\mathrm{id}'=\mathrm{id}$, so the constructed contragredient acts contravariantly on module maps as well. [F2, F3, step 3.1, algebra] ∎

## Local proof scope

This proof covers all joint generalized modules in the stated page convention. It does not replace joint restrictions by finite-dimensional total-weight spaces, or assume quasi-finiteness, rationality, semisimplicity, or any analytic convergence theorem. The fibre argument is an explicit application of the existing local single-module theorem.
