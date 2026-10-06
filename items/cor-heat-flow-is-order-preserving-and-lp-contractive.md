---
id: cor-heat-flow-is-order-preserving-and-lp-contractive
kind: corollary
title: "Monotonicity and $L^p$ contractivity of the heat flow"
status: published
origin: pipeline
deps:
  - cor-heat-flow-preserves-mass-and-positivity
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - thm-heat-cauchy-solution-for-lp-data
  - thm-young-convolution-inequality
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-3.md; immutable carrier: research/frontier-38-owner-30-step5-hash-3-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-3 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, formula (6.38) and Problem 6.8, printed p. 153 (the sup/inf bounds and strictness)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 5.5, printed pp. 130–131"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Theorem 1.1, printed pp. 5–7"
---

## Statement

Assume Countable Choice, let $n\ge1$ and $1\le p\le\infty$. If
$f,g\in L^p(\mathbb R^n)$ satisfy $f\le g$ almost everywhere, then
$H_tf\le H_tg$ almost everywhere for every $t>0$; and
$\|H_tf\|_p\le\|f\|_p$ for every $f\in L^p(\mathbb R^n)$ and every $t\ge0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p\le\infty$, $t>0$, and $f,g\in L^p(\mathbb R^n)$.

[A1] Countable Choice is the hypothesis carried by the evolution and convolution suppliers below ([[def-countable-choice]]).

[F1] Each $H_t$ is a complex-linear operator on $L^p(\mathbb R^n)$, $H_0$ is the identity, and $H_tf$ is the class of $\Gamma_t*f$ ([[def-heat-evolution-of-initial-data]]).

[F2] If $f\in L^p$ satisfies $f\ge0$ almost everywhere, then $H_tf\ge0$ almost everywhere ([[cor-heat-flow-preserves-mass-and-positivity]]).

[F3] For $1\le p<\infty$ and $f\in L^p$, $\|H_tf\|_p\le\|f\|_p$ ([[thm-heat-cauchy-solution-for-lp-data]]).

[F4] For $1\le p,q,r\le\infty$ with $1/r=1/p+1/q-1$ and $f\in L^p$, $g\in L^q$, $\|f*g\|_r\le\|f\|_p\|g\|_q$; with exponent triple $(p,1,p)$ this bounds convolution by an $L^1$ kernel ([[thm-young-convolution-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Order preservation: assume $f\le g$ almost everywhere and fix $t>0$. The difference $g-f$ is a class in $L^p$ with $g-f\ge0$ almost everywhere, so $H_t(g-f)\ge0$ almost everywhere by [F2]; by linearity of $H_t$ in [F1], $H_tg-H_tf=H_t(g-f)$ as classes, so any representatives satisfy $H_tf\le H_tg$ almost everywhere, the comparison being independent of representatives because changing them on null sets does not affect an almost-everywhere inequality. [A1, F1, F2, given]

2.1 Contractivity: for $1\le p<\infty$ the bound $\|H_tf\|_p\le\|f\|_p$ for every $t>0$ is [F3], while at $t=0$ it is the identity case of [F1]; for $p=\infty$ Young's inequality [F4] with the exponent triple $(\infty,1,\infty)$, which satisfies $1/\infty=1/\infty+1-1$, gives $\|H_tf\|_\infty\le\|\Gamma_t\|_1\|f\|_\infty=\|f\|_\infty$ for every $t>0$, and again $\|H_0f\|_\infty=\|f\|_\infty$. [step 1.1, F1, F3, F4, given, algebra]

3.1 Steps 1.1 and 2.1 prove the almost-everywhere monotonicity for $f\le g$ and the $L^p$ contraction for all $t\ge0$ and all $1\le p\le\infty$. [step 1.1, step 2.1, given] ∎
