---
id: prop-dominated-families-are-uniformly-integrable
kind: proposition
title: "Dominated families are uniformly integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-uniformly-integrable-family, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-absolute-continuity-of-the-integral, thm-chebyshev-markov-inequality-for-the-integral, thm-the-lebesgue-integral-respects-almost-everywhere-equality]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Exercise 21.2"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space. If
$\mathcal F \subseteq L^1(\mu)$ and there is a nonnegative function
$g \in L^1(\mu)$ such that $|f|\le g$ almost everywhere for every
$f \in \mathcal F$, then $\mathcal F$ is uniformly integrable.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, a family $\mathcal F \subseteq L^1(\mu)$, and a nonnegative integrable function $g$ with $|f|\le g$ almost everywhere for every $f \in \mathcal F$.

[L1] If $g \in L^1(\mu)$ and $\varepsilon>0$, then there is $\delta>0$ such that $\mu(E)<\delta \Rightarrow \int_E g\,d\mu<\varepsilon$. ([[thm-absolute-continuity-of-the-integral]])

[L2] If $h:X\to[0,+\infty]$ is measurable and $t>0$, then $\mu(\{h\ge t\})\le t^{-1}\int h\,d\mu$. ([[thm-chebyshev-markov-inequality-for-the-integral]])

[L3] If two integrable functions are equal almost everywhere, then their integrals over every measurable set agree. ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[L4] For a measurable set $E$ and a nonnegative measurable function $u$, $\int_E u\,d\mu=\int u\chi_E\,d\mu$. ([[def-integral-over-a-measurable-set]])

[L5] The nonnegative integral is monotone. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$. Use [L1] for $g$ to choose $\delta>0$ such that $\mu(E)<\delta$ implies $\int_E g\,d\mu<\varepsilon$. Since $g \in L^1(\mu)$, choose $M>\delta^{-1}\int g\,d\mu$. Then [L2] applied to $h:=g$ gives $$\mu(\{g\ge M\})\le M^{-1}\int g\,d\mu<\delta,$$ and so [L1] yields $$\int_{\{g\ge M\}} g\,d\mu<\varepsilon.$$ [L1, L2, choose, algebra]

2.1 Fix $f \in \mathcal F$, and choose a measurable null set $N_f$ such that $|f|\le g$ on $X\setminus N_f$. Put $$u_f:=|f|\chi_{X\setminus N_f}.$$ Then $u_f$ is integrable, $u_f=|f|$ almost everywhere, and $u_f\chi_{\{|f|>M\}}\le g\chi_{\{g\ge M\}}$ pointwise. Therefore [L3], [L4], and [L5] give $$\int_{\{|f|>M\}} |f|\,d\mu =\int_{\{|f|>M\}} u_f\,d\mu \le \int_{\{g\ge M\}} g\,d\mu <\varepsilon.$$ Since the same $M$ works for every $f \in \mathcal F$, this is exactly uniform integrability. [step 1.1, L3, L4, L5, construct]

3.1 The family $\mathcal F$ is uniformly integrable. [step 2.1, L1] ∎
