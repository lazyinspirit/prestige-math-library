---
id: ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set
kind: example
title: "A unit-mass spike has a large maximal superlevel set"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-countable-choice, thm-hardy-littlewood-maximal-inequality-for-balls]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Theorem 1.6.20"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

For $\varepsilon>0$, define
$$f_\varepsilon:=\varepsilon^{-1}\mathbf{1}_{[0,\varepsilon]}.$$
Then $\|f_\varepsilon\|_1=1$, and for every $x\ge\varepsilon$,
$$Mf_\varepsilon(x)\ge \frac{1}{2x}.$$
Consequently, for every $0<t\le(2\varepsilon)^{-1}$,
$$\lambda(\{x\in\mathbb{R}:Mf_\varepsilon(x)>t\})\ge \frac{1}{2t}-\varepsilon.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a real number $\varepsilon>0$, and the spike $f_\varepsilon=\varepsilon^{-1}\mathbf{1}_{[0,\varepsilon]}$.

[L1] The centered maximal operator is weak type $(1,1)$. ([[thm-hardy-littlewood-maximal-inequality-for-balls]])

## Verification

**Proof technique:** direct.

1.1 One has [given, algebra] $$\|f_\varepsilon\|_1 =\int_0^\varepsilon \varepsilon^{-1}\,dx=1.$$ [given, algebra]

1.2 If $x\ge\varepsilon$, then the centered interval $[0,2x]$ contains the [L1, given, algebra] support of $f_\varepsilon$, so $$Mf_\varepsilon(x)\ge \frac{1}{2x}\int_0^\varepsilon \varepsilon^{-1}\,dy =\frac{1}{2x}.$$ [L1, given, algebra]

2.1 If $0<t\le(2\varepsilon)^{-1}$ and $\varepsilon\le x<1/(2t)$, then [step 1.2, algebra] step 1.2 gives $Mf_\varepsilon(x)>t$. Therefore $$[\varepsilon,1/(2t))\subseteq\{Mf_\varepsilon>t\},$$ so $$\lambda(\{Mf_\varepsilon>t\})\ge \frac{1}{2t}-\varepsilon.$$ [step 1.2, algebra]

3.1 This explicit family matches the weak-type $t^{-1}$ scale from [L1] on a [L1, step 1.1, step 2.1] unit-$L^1$ example. [L1, step 1.1, step 2.1] ∎
