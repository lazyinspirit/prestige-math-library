---
id: lem-schwartz-space-is-dense-in-l-two
kind: lemma
title: Schwartz space is dense in L2
deps: ["def-schwartz-space-and-its-seminorms", "lem-schwartz-functions-and-all-derivatives-are-integrable", "thm-c-c-infinity-rn-is-dense-in-l-p-of-rn", "def-countable-choice", "lem-complex-lp-completeness-density-and-inner-product"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Text before Lemma 14.4 and Theorem 14.10
---

## Statement

Assume countable choice and let $n\ge1$. Every Schwartz function belongs to complex $L^2(\mathbb R^n)$, and the classes represented by $\mathcal S(\mathbb R^n)$ are dense there.

## Facts & Assumptions

**Given:** [[def-countable-choice]] and the seminorm definition [[def-schwartz-space-and-its-seminorms]].

[F1] The complex smooth-density interface gives $C_c^\infty$ approximation in finite-exponent Euclidean spaces ([[lem-complex-lp-completeness-density-and-inner-product]]). Its real supplier is [[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]].

[F2] Every Schwartz function is integrable, and the zeroth Schwartz seminorm bounds it pointwise ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

## Proof

**Proof technique:** direct.

1.1 For $u\in C_c^\infty$, every derivative vanishes off its compact support: outside the support, $u$ is zero on a neighbourhood. Thus $x^\alpha\partial^\beta u$ is continuous with compact support, hence bounded, for all $\alpha,\beta$. The empty-support case is the zero function. Therefore $C_c^\infty\subseteq\mathcal S$. [given]

1.2 If $u\in\mathcal S$, then [F2] gives $u\in L^1$, while $|u(x)|\le p_{00}(u)$ by the defining seminorm. Hence $$\int_{\mathbb R^n}|u|^2\le p_{00}(u)\int_{\mathbb R^n}|u|<\infty.$$ Thus every Schwartz function determines an $L^2$ class. [F2, given]

2.1 Given $f\in L^2$ and $\varepsilon>0$, apply [F1] with $p=2$ to obtain $u\in C_c^\infty$ with $\|f-u\|_2<\varepsilon$. Step 1.1 puts this same $u$ in Schwartz space, and step 1.2 confirms that its class belongs to $L^2$. Every norm ball about $f$ therefore meets the Schwartz classes, proving density with precisely the countable-choice assumption of the smooth-density supplier. [step 1.1, step 1.2, F1, given] ∎
