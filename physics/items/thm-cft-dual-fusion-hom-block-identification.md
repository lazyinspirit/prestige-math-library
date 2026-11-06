---
id: thm-cft-dual-fusion-hom-block-identification
kind: theorem
title: Dual-fusion Hom and conformal-block identification
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
deps:
  - def-cft-pointed-analytic-worldsheet
  - def-cft-voa-conformal-block-and-dual-fusion-product
  - def-grading-restricted-generalized-vertex-module
  - def-cft-contragredient-generalized-module
  - thm-cft-contragredient-generalized-module
  - thm-cft-contragredient-double-dual-isomorphism
justified_by: []
proof_strategy: direct
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-cft-contragredient-generalized-module: mathematical-premise
  thm-cft-contragredient-generalized-module: mathematical-premise
  thm-cft-contragredient-double-dual-isomorphism: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras III: The Sewing-Factorization Theorems"
      url: https://arxiv.org/pdf/2503.23995v4
      locator: "§0.4, equations (0.7)–(0.9), and §3.2, Lemma 3.6: the dual-fusion universal property identifies the relevant Hom and conformal-block coend factors."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a conformal vertex algebra of CFT type. Let $F,G$ be pointed compact worldsheets with respectively $N,K$ ordered incoming marks and the same number $R\ge0$ of ordered outgoing marks. Let $W,X$ be admitted grading-restricted generalized joint $V^{\otimes N}$- and $V^{\otimes K}$-modules at their incoming marks, and suppose their dual fusion products $D_F(W)$ and $D_G(X)$ exist as generalized joint $V^{\otimes R}$-modules. All joint spaces and coordinatewise lower bounds use the earlier conformal-block definition, and all Hom maps below commute with every one of the $R$ component actions. With the module ordering on this page and the restricted contragredient convention from its Definition, there is a natural linear isomorphism
$$
\mathcal T_G^*\bigl(X\otimes D_F(W)'\bigr)\ \cong\ \operatorname{Hom}_{V^{\otimes R}}\!\bigl(D_G(X)',D_F(W)\bigr).
$$
It is the composition of the representing isomorphism for $D_G(X)$ with contragredient transposition and the double-contragredient identification. No semisimplicity or rationality assumption is used.

## Statement references

[[def-cft-contragredient-generalized-module]]

[[thm-cft-contragredient-generalized-module]]

[[thm-cft-contragredient-double-dual-isomorphism]]

## Facts & Assumptions

**Given:** The fixed pointed worldsheets and module ordering in the Statement; write $A=D_F(W)$ and $B=D_G(X)$. Existence of these two objects is a hypothesis here.

[F1] [[def-cft-voa-conformal-block-and-dual-fusion-product]] gives, for any module Z, the natural representing bijection $\operatorname{Hom}(Z,B)\to\mathcal T_G^*(X\otimes Z)$, $f\mapsto\gamma_G\circ(\mathrm{id}_X\otimes f)$. No existence theorem or analytic-family assertion is needed after B is given.

[F2] [[thm-cft-contragredient-generalized-module]] gives the restricted contragredients in the joint $V^{\otimes R}$ convention, with each joint block finite dimensional.

[F3] [[thm-cft-contragredient-double-dual-isomorphism]] gives the natural evaluation module isomorphisms $e_A:A\to A''$ and $e_B:B\to B''$.

## Proof

1.1 Since A' is a module by F2, F1 applies with $Z=A'$. It identifies each block $\Gamma\in\mathcal T_G^*(X\otimes A')$ with a unique module map $f:A'\to B$, characterized by $\Gamma(x\otimes a')=\gamma_G(x\otimes f(a'))$. The incoming factor X remains first; no tensor permutation or braiding is introduced. [given, F1, F2, algebra]

2.1 A module map f commutes with every component $L_j(0)$, so it preserves joint generalized weights. Its restricted transpose $f':B'\to A''$ is therefore well-defined. For any component state u and formal variable z, pairing with $a'\in A'$ gives $\langle f'Y_{B'}(u,z)b',a'\rangle=\langle b',Y_B^o(u,z)f(a')\rangle=\langle b',f(Y_{A'}^o(u,z)a')\rangle=\langle Y_{A''}(u,z)f'(b'),a'\rangle$. The middle equality follows from f commuting with every original mode and therefore with its finite opposite-state combinations. The separating pairing proves that f' is a module map. Consequently $g=e_A^{-1}f':B'\to A$ is a module map by F3. [F2, F3, step 1.1, algebra]

3.1 This correspondence is exactly the transpose-pairing identity $\langle a',g(b')\rangle=\langle b',f(a')\rangle$. Conversely, for any module map $g:B'\to A$, the same transposition argument gives the module map $f=e_B^{-1}g':A'\to B$ and that identity. It determines f and g uniquely: restricted functionals separate each finite joint block, and both maps preserve those blocks. Thus the two constructions are inverse linear bijections. Composing this bijection with step 1.1 gives precisely the isomorphism in the Statement, without finite-dimensionality of either entire module or either Hom space. [F2, F3, step 2.1, algebra]

4.1 Naturality follows from the same two explicit identities. The representing equality in step 1.1 is natural by F1. The transpose-pairing identity commutes with precomposition and postcomposition by module maps: moving such a map across its evaluation pairing replaces it by its restricted transpose, by definition. F3 ensures that the evaluation identifications used in this movement are natural. Hence the composed linear bijection is natural in the module data and respects the specified incoming/outgoing ordering. No semisimplicity or rationality is used. [F1, F2, F3, step 1.1, step 3.1, algebra] ∎

## Local proof scope

This is an algebraic fixed-worldsheet identification assuming the two dual fusion objects exist, as in the Statement. It does not prove their existence, analytic sewing, finite-dimensionality of the Hom space, finite local freeness or holomorphic base-change compatibility in families. Those remain separate supplier obligations.
