---
id: lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
kind: lemma
title: "Fundamental theorem of calculus for Banach-valued continuous curves"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-countable-choice
  - lem-average-convergence-of-a-continuous-banach-valued-function
  - lem-mean-value-inequality-for-a-differentiable-banach-valued-curve
  - lem-linearity-of-the-bochner-integral
  - def-bochner-integrable-function
  - lem-bochner-integral-norm-inequality
  - def-frechet-derivative-between-banach-spaces
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.1, Theorem 11.3, printed pp. 249-250"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, Remark 1.15(f), equations (1.2)-(1.4) and proof, printed p. 9 (March 19, 2026 revision)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the Lebesgue-measure interfaces. Let $X$ be a real or complex Banach space, let $a<b$, and let $f:[a,b]\to X$ be continuous. Differentiation uses the underlying real structure. Then $G(t):=\int_a^t f(s)\,ds$ is differentiable on $(a,b)$ and has the corresponding one-sided derivatives at $a,b$, with $G'(t)=f(t)$, and this derivative extends continuously to $[a,b]$. Consequently, if $\varphi:[a,b]\to X$ is continuous, differentiable on $(a,b)$ with $\varphi'$ continuous on $(a,b)$ and extendable to a continuous $X$-valued function on $[a,b]$, then $\int_a^b\varphi'(s)\,ds=\varphi(b)-\varphi(a)$. The Bochner integral here is the one of [[def-bochner-integrable-function]]; the identities also hold for continuous curves on $[0,\infty)$ restricted to compact subintervals.

## Facts & Assumptions

**Given:** Countable Choice; A Banach space $X$, real numbers $a<b$, a continuous $f:[a,b]\to X$, the primitive $G(t):=\int_a^tf(s)\,ds$ for $t\in[a,b]$, and a continuous $\varphi:[a,b]\to X$ differentiable on $(a,b)$ whose derivative extends to a continuous $X$-valued function on $[a,b]$.

[F1] Average convergence ([[lem-average-convergence-of-a-continuous-banach-valued-function]]): a continuous $f:[a,b]\to X$ is Bochner integrable, and for $t\in[a,b)$, $h>0$, $t+h\le b$, $\bigl\|\frac1h\int_t^{t+h}f-f(t)\bigr\|\le\sup_{[t,t+h]}\|f-f(t)\|\to0$, with the analogous backward limit for $t\in(a,b]$; the same one-sided limits hold for curves continuous at $t$ and Bochner integrable near $t$.

[F2] The Bochner integral is linear, so for $[c,d]\subseteq[a,b]$ the difference of primitives is $\int_c^df$ ([[lem-linearity-of-the-bochner-integral]], [[def-bochner-integrable-function]]).

[F4] Differentiability on $(a,b)$ means Fréchet differentiability at every point of the open interval ([[def-frechet-derivative-between-banach-spaces]]); at the endpoints only the relevant one-sided difference quotients are considered.

[F5] Mean value inequality ([[lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]): a curve continuous on an interval, differentiable inside with derivative bounded by $C$, changes by at most $C$ times the length; in particular a curve with vanishing interior derivative is constant.



## Proof

**Proof technique:** direct, computing the difference quotient of the primitive with the average-convergence lemma and then applying the mean value inequality to $\varphi$ minus its integral.

1.1 By [F1] the continuous $f$ is Bochner integrable on $[a,b]$, so $G(t)=\int_a^tf$ is defined for every $t\in[a,b]$; by [F2] $G(t+h)-G(t)=\int_t^{t+h}f$ for $[t,t+h]\subseteq[a,b]$. [F1, F2]

2.1 Difference quotients of $G$: for $t\in[a,b)$ and $h>0$ with $t+h\le b$, $\frac{G(t+h)-G(t)}{h}=\frac1h\int_t^{t+h}f\to f(t)$ by [F1]; similarly $\frac{G(t)-G(t-h)}{h}=\frac1h\int_{t-h}^tf\to f(t)$ for $t\in(a,b]$. Hence $G$ is differentiable on $(a,b)$ with $G'=f$, and has the one-sided derivatives $f(t)$ at the endpoints. [F1, F2, F4, step 1.1]

3.1 $G'=f$ is continuous on $[a,b]$, and the existence of the one-sided derivative at $a$ and at $b$ makes $G$ continuous there from the appropriate side; at interior points $G$ is continuous by differentiability. [F4, step 2.1]

3.2 Since $\varphi'$ extends to a continuous $X$-valued function on $[a,b]$, denote the extension again by $\varphi'$ and put $\psi(t):=\varphi(t)-\int_a^t\varphi'(s)\,ds$ for $t\in[a,b]$. By [step 2.1] the primitive of $\varphi'$ is differentiable on $(a,b)$ with derivative $\varphi'$, and $\psi$ is differentiable on $(a,b)$; by linearity of the derivative and of the integral, $\psi'=\varphi'-\varphi'=0$ on $(a,b)$, and $\psi(a)=\varphi(a)$. [F2, F4, step 2.1]

4.1 $\psi$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with $\psi'=0$ there; by [F5] (constant case) $\psi$ is constant on $[a,b]$, so $\psi(b)=\psi(a)=\varphi(a)$, that is $\varphi(b)-\int_a^b\varphi'=\varphi(a)$. [F5, step 3.2]

5.1 Therefore $\int_a^b\varphi'(s)\,ds=\varphi(b)-\varphi(a)$. The same computation, applied to each compact subinterval $[a,b]\subseteq[0,\infty)$ after restricting a continuous curve on $[0,\infty)$, gives the stated identity in that setting. [step 2.1, step 4.1] ∎
