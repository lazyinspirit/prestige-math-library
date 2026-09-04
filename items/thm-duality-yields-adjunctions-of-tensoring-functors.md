---
id: thm-duality-yields-adjunctions-of-tensoring-functors
kind: theorem
title: "Duality yields adjunctions of tensoring functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-dual-and-right-dual-object, def-adjunction-by-unit-counit-and-triangle-identities]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 2.10.8"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

If $V^\vee$ is a left dual of $V$, then the functor $V^\vee\otimes-$ is left
adjoint to $V\otimes-$. Equivalently, for all objects $U,W$ there is a natural
bijection

$$\operatorname{Hom}(V^\vee\otimes U,W)\cong\operatorname{Hom}(U,V\otimes W).$$

Dually, $-\otimes V^\vee$ is right adjoint to $-\otimes V$.

## Facts & Assumptions

**Given:** A monoidal category and a left dual
$(V^\vee,\operatorname{ev}_V,\operatorname{coev}_V)$ of $V$.

[L1] An adjunction is unit-counit data satisfying the two triangle identities
([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[L2] The pair $(V^\vee,\operatorname{ev}_V,\operatorname{coev}_V)$ satisfies
the zig-zag identities ([[def-left-dual-and-right-dual-object]]).

## Proof

**Proof technique:** direct.

1.1 For each object $U$, define a unit $\eta_U:U\to V\otimes(V^\vee\otimes U)$ by $$U\xrightarrow{\lambda_U^{-1}}\mathbf 1\otimes U\xrightarrow{\operatorname{coev}_V\otimes1_U}(V\otimes V^\vee)\otimes U\xrightarrow{\alpha_{V,V^\vee,U}}V\otimes(V^\vee\otimes U).$$ For each object $W$, define a counit $\varepsilon_W:V^\vee\otimes(V\otimes W)\to W$ by $$V^\vee\otimes(V\otimes W)\xrightarrow{\alpha^{-1}_{V^\vee,V,W}}(V^\vee\otimes V)\otimes W\xrightarrow{\operatorname{ev}_V\otimes1_W}\mathbf 1\otimes W\xrightarrow{\lambda_W}W.$$ [given, L1, L2, construct]

2.1 The composite $(V\otimes\varepsilon_W)\circ\eta_{V\otimes W}$ is exactly the first zig-zag for $V^\vee$ tensored with $W$, and the composite $\varepsilon_{V^\vee\otimes U}\circ(V^\vee\otimes\eta_U)$ is exactly the second zig-zag for $V^\vee$ tensored with $U$. By [L2], both are identities. [step 1.1, L2]

3.1 Steps 1.1 and 2.1 provide an adjunction $V^\vee\otimes-\dashv V\otimes-$ by [L1]. Transposition under this adjunction gives the displayed hom-set bijection, and the statement for right tensoring is the mirrored construction. [step 2.1, L1] ∎
