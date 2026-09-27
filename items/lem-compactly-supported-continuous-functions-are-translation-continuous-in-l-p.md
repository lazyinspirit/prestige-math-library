---
id: lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p
kind: lemma
title: "Continuous compactly supported functions are translation-continuous in $L^p$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-translation-of-a-function-on-rn, def-c-c-and-c-c-infinity-on-rn, thm-heine-cantor-metric, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
landmark: false
proof_strategy: "A compactly supported continuous function is uniformly continuous on a large compact set containing all small translates of its support. Uniform smallness on that set, together with bounded support measure, gives $L^p$ smallness."
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Countable Choice.

Let $1 \le p < \infty$ and let $f \in C_c(\mathbb{R}^n)$. Then

$$\|\tau_h f - f\|_p \longrightarrow 0 \qquad(h \to 0).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]), $1 \le p < \infty$, and $f \in C_c(\mathbb{R}^n)$.

[L1] Continuous functions on compact metric spaces are uniformly continuous ([[thm-heine-cantor-metric]]).

[L2] Bounded sets have finite Lebesgue measure, and translation preserves Lebesgue measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[L3] Translation is the convention of [[def-translation-of-a-function-on-rn]], and $C_c(\mathbb{R}^n)$ is defined in [[def-c-c-and-c-c-infinity-on-rn]].

## Proof

**Proof technique:** direct.

1.1 If $n=0$, the only translation vector is zero, so the difference is identically zero. Assume $n\ge1$. Let $K=\operatorname{supp}(f)$ and choose $R>0$ with $K\subseteq B(0,R)$. For $|h|\le1$, the support of $\tau_hf-f$ lies in $\overline{B(0,R+1)}$. Apply [L1] to $f$ on the larger compact ball $\overline{B(0,R+2)}$; this includes both $x$ and $x-h$ whenever $x\in\overline{B(0,R+1)}$ and $|h|\le1$. [L1, L3, given, choose]

2.1 Let $\varepsilon>0$. Uniform continuity in step 1.1 gives $0<\delta\le1$ such that $|f(x-h)-f(x)|<\varepsilon$ for $|h|<\delta$ and every $x\in\overline{B(0,R+1)}$. Outside that ball both terms vanish by the support bound. Translation invariance preserves measurability; the compact ball has finite measure $V$ by [L2]. Thus $$\|\tau_hf-f\|_p^p\le\varepsilon^p V.$$ [L1, L2, step 1.1, choose, algebra]

3.1 Given any target $\eta>0$, choose $\varepsilon>0$ with $\varepsilon^p V<\eta^p$ in step 2.1. Then $|h|<\delta$ implies $\|\tau_hf-f\|_p<\eta$. Hence $\|\tau_h f-f\|_p\to0$ as $h\to0$. [step 2.1] ∎
