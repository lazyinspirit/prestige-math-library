---
id: thm-cft-logarithmic-pz-intertwining-correspondence
kind: theorem
title: "Logarithmic intertwiners and P(z)-maps correspond"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-logarithmic-intertwining-operator
  - def-cft-pz-intertwining-map
  - def-cft-hlz-strongly-graded-generalized-module
dependency_roles:
  "def-cft-logarithmic-intertwining-operator": mathematical-premise
  "def-cft-pz-intertwining-map": mathematical-premise
  "def-cft-hlz-strongly-graded-generalized-module": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part III"
      url: "https://arxiv.org/pdf/1012.4197v2"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 3
---

## Statement

Fix z∈C×, p∈Z, and $ℓ_p(z)=\log|z|+i\operatorname{arg}(z)+2πip$ with 0≤arg(z)<2π. For strongly graded generalized V-modules W1,W2,W3, $I_{Y,p}(w1⊗w2)=Y(w1,e^{ℓ_p(z)})w2$ is a linear isomorphism from grading-compatible logarithmic intertwiners of type (W3;W1,W2) to P(z)-intertwining maps of that type. Its inverse is $Y_{I,p}(w1,x)w2=(y^{L(0)}x^{L(0)}I(y^{-L(0)}x^{-L(0)}w1⊗y^{-L(0)}x^{-L(0)}w2))|_{y=e^{-ℓ_p(z)}}$.

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-cft-logarithmic-intertwining-operator]]: Let V be a Möbius or conformal vertex algebra and W1,W2,W3 generalized V-modules. A logarithmic intertwining operator of type (W3;W1,W2) is a linear map Y(·,x)·:W1⊗W2→W3[log x]{x}, written $Y(w1,x)w2=\sum _{n∈C}\sum _{k≥0}(w1)_{n;k}w2 x^{-n-1}(\operatorname{log} x)^k$, satisfying: for each w1,w2,n, $(w1)_{n+m;k}w2=0$ for all sufficiently large integers m, with the bound independent of k; the intertwining Jacobi identity; $∂_xY(w1,x)=Y(L(-1)w1,x)$; and $[L(j),Y(w1,x)]=\sum _{i=0}^{j+1}\operatorname{binom}(j+1,i)x^iY(L(j-i)w1,x)$ for $j=-1,0,1$. Each coefficient of $x^{-n-1}$ is a finite polynomial in log x; no uniform degree bound over all n is imposed. In the strongly graded setting it is grading-compatible when coefficient degrees add. The no-log subspace retains the same integer-string truncation. For ordinary modules (grading-restricted generalized modules with diagonalizable L(0)) over a conformal vertex algebra of CFT type it agrees with the usual ordinary intertwining-operator space; no such identification is asserted for unrestricted generalized modules.

[F2] [[def-cft-pz-intertwining-map]]: Let z∈C× and W1,W2,W3 be generalized V-modules. A P(z)-intertwining map of type (W3;W1,W2) is a linear map $I:W1⊗W2→W̄3=∏_{h∈C}W3_{[h]}$ whose Ã-degrees add, for which $π_{h-m}I(w1⊗w2)=0$ for all sufficiently large integers m for each fixed h,w1,w2, and which satisfies the P(z)-Jacobi identity and, for $j=-1,0,1, L(j)I(w1⊗w2)=I(w1⊗L(j)w2)+\sum _{i=0}^{j+1}\operatorname{binom}(j+1,i)z^i I((L(j-i)w1)⊗w2)$. There is no L(-1)-derivative axiom for I. Formal variables x0,x1 are independent; z is a fixed complex number.

[F3] [[def-cft-hlz-strongly-graded-generalized-module]]: Let V be an ordinary non-super vertex algebra in the sense of def-vertex-algebra-state-field. A **Möbius vertex algebra** has $V=⊕_{n∈Z}V_{(n)}$, with $V_{(n)}=\{v∈V:L(0)v=nv\}$, and operators L(-1),L(0),L(1) representing sl(2), with L(-1) equal to translation, and satisfying $[L(j),Y(v,x)]=\sum _{i=0}^{j+1} \operatorname{binom}(j+1,i)x^iY(L(j-i)v,x)$ for $j=-1,0,1$. A Möbius module has the corresponding sl(2)-action and field commutator identities. A conformal vertex algebra supplies these operators through its Virasoro field. For a generalized module write $L(0)_s$ for the diagonal operator acting by h on $W_{[h]}$; the nilpotent part is $L(0)-L(0)_s$. Let A be an abelian group and suppose V has compatible integer-weight and A-gradings $V=⊕_{n∈Z,α∈A}V^{(α)}_{(n)}$, each component finite dimensional and lower truncated in n for each $α, 1∈V^{(0)}_{(0)}, v_mV^{(β)}⊂V^{(α+β)}$, and $L(j)V^{(α)}⊂V^{(α)}$ for $j=-1,0,1$. In the conformal case require $ω∈V^{(0)}_{(2)}$. For an abelian group Ã⊃A, a generalized module $W=⊕_{h∈C,β∈Ã}W^{(β)}_{[h]}$ is strongly Ã-graded when $W^{(β)}_{[h]}=W_{[h]}∩W^{(β)}, W^{(β)}=⊕_h W^{(β)}_{[h]}$ and $W_{[h]}=⊕_β W^{(β)}_{[h]}$, each $W^{(β)}_{[h]}$ is finite dimensional, $W^{(β)}_{[h+k]}=0$ for all sufficiently negative integers k for each h,β, $v_mW^{(β)}⊂W^{(α+β)}$, and $L(j)W^{(β)}⊂W^{(β)}$ for $j=-1,0,1$. Morphisms preserve both gradings and the V-action.

## Proof

1.1 Substituting $e^{ℓ_p(z)}$ in the logarithmic Jacobi and sl(2) identities gives the P(z) identities; the source lower-truncation bound makes every completed-weight component well defined. [given, F1, F2, F3, algebra]

2.1 In the reverse formula, conjugation by $x^{L(0)}y^{L(0)}$ transports the P(z)-Jacobi identity and sl(2) brackets to the formal intertwiner identities; the $j=0$ bracket yields the L(-1)-derivative property. P(z)-lower truncation yields the required coefficientwise truncation. [given, F1, F2, F3, step 1.1, algebra]

3.1 Substituting the formulas into one another cancels the $x^{±L(0)}$ and $y^{±L(0)}$ factors and recovers I and Y, respectively, for the same branch p. [given, F1, F2, step 2.1, algebra] ∎
