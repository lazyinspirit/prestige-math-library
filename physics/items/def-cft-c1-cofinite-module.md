---
id: def-cft-c1-cofinite-module
kind: definition
title: "C1-cofinite generalized module in the ungraded HLZ convention"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-conformal-vertex-algebra
  - def-grading-restricted-generalized-vertex-module
  - def-cft-hlz-strongly-graded-generalized-module
dependency_roles:
  "def-cft-hlz-strongly-graded-generalized-module": mathematical-premise
  "def-conformal-vertex-algebra": mathematical-premise
  "def-grading-restricted-generalized-vertex-module": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part VII"
      url: "https://arxiv.org/pdf/1110.1929v2"
    - title: "Christophe Nozaradan, Introduction to Vertex Algebras"
      url: "https://arxiv.org/pdf/0809.1380v3"
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 1
---

## Definition

Let V be an integer-graded Möbius or conformal vertex algebra with $A=\widetilde A=\{0\}$, and W a generalized V-module. Put $V_+=⊕_{n>0}V_{(n)}$ and $C1(W)=\operatorname{span}_C\{u_{-1}w:u∈V_+, w∈W\}$. The module is C1-cofinite when $\operatorname{dim}_C(W/C1(W))<∞$.

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-conformal-vertex-algebra]]: A **conformal vertex algebra of CFT type** is a complex vertex algebra $V$ in the sense of def-vertex-algebra-state-field, with a specified vector $\omega\in V$ and scalar $c\in\mathbb C$, such that, writing $$ Y(\omega,z)=\sum_{n\in\mathbb Z}L(n)z^{-n-2}, $$ the operators $L(n)$ and scalar central action $c$ satisfy the Virasoro relations of def-virasoro-algebra, and $L(-1)=T$. In addition, $L(0)$ is diagonalizable, $V_n:=\{v\in V:L(0)v=nv\}$ gives $V=\bigoplus_{n\ge0}V_n$, every $V_n$ is finite dimensional, and $V_0=\mathbb C\mathbf1$. Under this page's convention, this is a vertex operator algebra of CFT type. The grading and the CFT-type condition are part of the definition; they do not follow from the vertex-algebra axioms alone. The conformal weight of $v\in V_n$ is $n$. A conformal vector, a grading, and the nonnegative grading condition are additional data beyond an ordinary vertex algebra.

[F2] [[def-grading-restricted-generalized-vertex-module]]: Let $V$ be a conformal vertex algebra of CFT type and $M$ a left $V$-module. Write $L_M(0)$ for the coefficient determined by $$ Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}. $$ For $h\in\mathbb C$, define the generalized $L_M(0)$-eigenspace $$ M_{[h]}=\{m\in M:(L_M(0)-h)^N m=0\text{ for some integer }N\ge1\}. $$ The module is **grading-restricted generalized** if $M=\bigoplus_{h\in\mathbb C}M_{[h]}$, every $M_{[h]}$ is finite dimensional, and the real parts of its nonzero generalized weights are bounded below. The direct sum means each vector has only finitely many generalized-weight components. This convention explicitly adds finite-dimensionality and a lower bound to the generalized-eigenspace decomposition; those conditions are not consequences of the module Jacobi identity.

[F3] [[def-cft-hlz-strongly-graded-generalized-module]]: Let V be an ordinary non-super vertex algebra in the sense of def-vertex-algebra-state-field. A **Möbius vertex algebra** is V with an integer grading $V=⊕_{n∈Z}V_{(n)}$ satisfying $V_{(n)}=\{v∈V:L(0)v=nv\}$, and operators L(-1),L(0),L(1) representing sl(2), with L(-1) equal to translation, and satisfying $[L(j),Y(v,x)]=\sum _{i=0}^{j+1} \operatorname{binom}(j+1,i)x^iY(L(j-i)v,x)$ for $j=-1,0,1$. A Möbius module has the corresponding sl(2)-action and field commutator identities. A conformal vertex algebra supplies these operators through its Virasoro field. For a generalized module write $L(0)_s$ for the diagonal operator acting by h on $W_{[h]}$; the nilpotent part is $L(0)-L(0)_s$. Let A be an abelian group and suppose V has compatible integer-weight and A-gradings $V=⊕_{n∈Z,α∈A}V^{(α)}_{(n)}$, each component finite dimensional and lower truncated in n for each α, $1∈V^{(0)}_{(0)}$, $v_mV^{(β)}⊂V^{(α+β)}$, and $L(j)V^{(α)}⊂V^{(α)}$ for $j=-1,0,1$. In the conformal case require $ω∈V^{(0)}_{(2)}$. For an abelian group $\widetilde A⊃A$, a generalized module $W=⊕_{h∈C,β∈\widetilde A}W^{(β)}_{[h]}$ is strongly Ã-graded when the gradings are compatible, each $W^{(β)}_{[h]}$ is finite dimensional, $W^{(β)}_{[h+k]}=0$ for all sufficiently negative integers k for each h,β, $v_mW^{(β)}⊂W^{(α+β)}$, and $L(j)W^{(β)}⊂W^{(β)}$ for $j=-1,0,1$. Morphisms preserve both gradings and the V-action.

## Proof

1.1 The mode action makes every $u_{-1}w$ a vector of W, so their linear span is a well-defined subspace C1(W). [given, F1, F2, algebra]

2.1 The quotient is finite dimensional exactly when W is C1-cofinite; the trivial A,Ã specialization is part of the convention and is not implied for general strong gradings. [given, F1, F2, F3, step 1.1, algebra] ∎
