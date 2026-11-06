---
id: def-cft-pz-intertwining-map
kind: definition
title: "P(z)-intertwining map"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-logarithmic-intertwining-operator
  - def-grading-restricted-generalized-vertex-module
  - def-cft-hlz-strongly-graded-generalized-module
dependency_roles:
  "def-cft-hlz-strongly-graded-generalized-module": mathematical-premise
  "def-cft-logarithmic-intertwining-operator": mathematical-premise
  "def-grading-restricted-generalized-vertex-module": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part III, §4.1, Definition 4.2 and equations (4.3)–(4.5)"
      url: "https://arxiv.org/pdf/1012.4197v2"
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
dependency_level: 2
---

## Definition

Let A be an abelian group, let Ã contain A as a subgroup, let V be a strongly A-graded Möbius or conformal vertex algebra, and let W1,W2,W3 be strongly Ã-graded generalized V-modules, with the decompositions and operators specified in def-cft-hlz-strongly-graded-generalized-module. Fix $z∈C×$. Write $\overline W_3=\prod_{h\in\mathbb C}W_{3,[h]}$ for the formal completion and $π_h$ for its generalized-weight projections. A **P(z)-intertwining map** of type (W3;W1,W2) is a linear map $I:W1⊗W2→\overline W_3$ whose Ã-degrees add and such that, for each $h∈C$ and w1,w2, $π_{h-m}I(w1⊗w2)=0$ for all sufficiently large integers m. For every $v∈V$ and w1,w2, it satisfies
$$\begin{aligned}x_0^{-1}\delta\!\left(\frac{x_1-z}{x_0}\right)Y_3(v,x_1)I(w_1\otimes w_2)&=z^{-1}\delta\!\left(\frac{x_1-x_0}{z}\right)I(Y_1(v,x_0)w_1\otimes w_2)\\&\quad+x_0^{-1}\delta\!\left(\frac{z-x_1}{-x_0}\right)I(w_1\otimes Y_2(v,x_1)w_2). \end{aligned}$$
Here $\delta(t)=\sum_{r\in\mathbb Z}t^r$, x0,x1 are independent formal variables and z is fixed. In the three delta factors the binomial powers are expanded respectively in nonnegative powers of z, x0 and x1. The two right-hand expressions mean coefficientwise application of I to the ordinary module series. The left-hand side is interpreted in $\overline W_3$: for homogeneous v of weight d, its mode $v_n$ sends $W3_{[q]}$ into $W3_{[q+d−n−1]}$, so the lower-truncation condition makes each fixed output projection of any mode sum with indices bounded above a finite sum. It also satisfies, for $j=-1,0,1$,
$$L(j)I(w_1\otimes w_2)=I(w_1\otimes L(j)w_2)+\sum_{i=0}^{j+1}\binom{j+1}{i}z^iI(L(j-i)w_1\otimes w_2).$$
There is no L(-1)-derivative axiom for I.

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-cft-logarithmic-intertwining-operator]]: Let V be a Möbius or conformal vertex algebra and W1,W2,W3 generalized V-modules. A logarithmic intertwining operator of type (W3;W1,W2) is a linear map $Y(·,x)·:W1⊗W2→W3[\operatorname{log} x]\{x\}$, written $Y(w1,x)w2=\sum _{n∈C}\sum _{k≥0}(w1)_{n;k}w2 x^{-n-1}(\operatorname{log} x)^k$, satisfying: for each w1,w2,n, $(w1)_{n+m;k}w2=0$ for all sufficiently large integers m, with the bound independent of k; the intertwining Jacobi identity; $∂_xY(w1,x)=Y(L(-1)w1,x)$; and $[L(j),Y(w1,x)]=\sum _{i=0}^{j+1}\operatorname{binom}(j+1,i)x^iY(L(j-i)w1,x)$ for $j=-1,0,1$. Each coefficient of $x^{-n-1}$ is a finite polynomial in log x; no uniform degree bound over all n is imposed. In the strongly graded setting it is grading-compatible when coefficient degrees add. The no-log subspace consists of logarithmic intertwining operators with all coefficients for $k>0$ zero, retaining the stated integer-string truncation. It agrees with the usual ordinary intertwining-operator space over a conformal vertex algebra of CFT type when W1,W2,W3 are ordinary modules, meaning grading-restricted generalized modules with diagonalizable L(0); without that lower bound, no uniform real-part truncation is asserted.

[F2] [[def-grading-restricted-generalized-vertex-module]]: Let $V$ be a conformal vertex algebra of CFT type and $M$ a left $V$-module. Write $L_M(0)$ for the coefficient determined by $$ Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}. $$ For $h\in\mathbb C$, define the generalized $L_M(0)$-eigenspace $$ M_{[h]}=\{m\in M:(L_M(0)-h)^N m=0\text{ for some integer }N\ge1\}. $$ The module is **grading-restricted generalized** if $M=\bigoplus_{h\in\mathbb C}M_{[h]}$, every $M_{[h]}$ is finite dimensional, and the real parts of its nonzero generalized weights are bounded below. The direct sum means each vector has only finitely many generalized-weight components. This convention explicitly adds finite-dimensionality and a lower bound to the generalized-eigenspace decomposition; those conditions are not consequences of the module Jacobi identity.

[F3] [[def-cft-hlz-strongly-graded-generalized-module]]: Let V be an ordinary non-super vertex algebra in the sense of def-vertex-algebra-state-field. A **Möbius vertex algebra** is V with operators L(-1),L(0),L(1) representing sl(2), with L(-1) equal to translation, and satisfying $[L(j),Y(v,x)]=\sum _{i=0}^{j+1} \operatorname{binom}(j+1,i)x^iY(L(j-i)v,x)$ for $j=-1,0,1$. A Möbius module has the corresponding sl(2)-action and field commutator identities. A conformal vertex algebra supplies these operators through its Virasoro field. For a generalized module write $L(0)_s$ for the diagonal operator acting by h on $W_{[h]}$; the nilpotent part is $L(0)-L(0)_s$. Let A be an abelian group and suppose V has compatible integer-weight and A-gradings $V=⊕_{n∈Z,α∈A}V^{(α)}_{(n)}$, each component finite dimensional and lower truncated in n for each α, $1∈V^{(0)}_{(0)}$, $v_mV^{(β)}⊂V^{(α+β)}$, and $L(j)V^{(α)}⊂V^{(α)}$ for $j=-1,0,1$. In the conformal case require $ω∈V^{(0)}_{(2)}$. For an abelian group $\widetilde A⊃A$, a generalized module $W=⊕_{h∈C,β∈\widetilde A}W^{(β)}_{[h]}$ is strongly Ã-graded when the gradings are compatible, each $W^{(β)}_{[h]}$ is finite dimensional, $W^{(β)}_{[h+k]}=0$ for all sufficiently negative integers k for each h,β, $v_mW^{(β)}⊂W^{(α+β)}$, and $L(j)W^{(β)}⊂W^{(β)}$ for $j=-1,0,1$. Morphisms preserve both gradings and the V-action.

## Proof

1.1 The target completion is the product of generalized weight spaces, so an image may have infinitely many weights only subject to the stated lower truncation along integer weight strings. [given, F1, F2, algebra]

2.1 The P(z)-Jacobi identity specializes the formal intertwiner identity at z; the three sl(2) brackets are separate axioms, and no derivative identity is included. [given, F1, F2, F3, step 1.1, algebra] ∎
