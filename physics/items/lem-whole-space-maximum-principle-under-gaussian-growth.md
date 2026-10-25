---
id: lem-whole-space-maximum-principle-under-gaussian-growth
kind: lemma
title: Maximum principle on the whole space under Gaussian growth
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - def-countable-choice
  - thm-weak-parabolic-maximum-principle
  - def-parabolic-cylinder-and-parabolic-boundary
  - def-laplacian-of-a-c2-function
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-derivative-of-exponential
  - thm-exponential-addition-formula
  - def-real-exponential-function-and-e
  - thm-exponential-beats-every-polynomial
  - thm-heine-borel-rn
  - def-metric-compactness
  - thm-extreme-value-metric
  - thm-of-archimedean
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: '§6.3, printed pp. 158–159, Theorem 6.18 and its complete proof (the barrier $\frac{\varepsilon}{(T+\delta-t)^{n/2}}e^{|x|^2/4(T+\delta-t)}$)'
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2, printed pp. 334–335 (the perturbation approach to the parabolic maximum principle used on the bounded cylinder)"
---

## Statement

Assume Countable Choice. Let $T>0$, $a\ge0$, $A<\infty$, and let
$u\in C([0,T]\times\mathbb R^n)\cap C^{1,2}((0,T]\times\mathbb R^n)$ satisfy
$$u_t-\Delta u\le0,\qquad u(t,x)\le Ae^{a|x|^2}\quad((t,x)\in[0,T]\times\mathbb R^n).$$
Then
$$\sup_{[0,T]\times\mathbb R^n}u\le\sup_{\mathbb R^n}u(0,\cdot).$$
(The same statement holds for a finite union of consecutive strips of length
less than $1/(4a)$ when $a>0$.)

## Facts & Assumptions

**Given:** Countable Choice, $T>0$, $a\ge0$, $A<\infty$, and a continuous $u$ on the closed strip, $C^{1,2}$ in positive time, with $u_t-\Delta u\le0$ and $u(t,x)\le Ae^{a|x|^2}$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] The weak maximum principle on a bounded cylinder $B_R(0)\times(0,T]$: a $C^{2,1}$ subsolution attains its maximum on the parabolic boundary ([[thm-weak-parabolic-maximum-principle]], [[def-parabolic-cylinder-and-parabolic-boundary]]).

[F2] The exponential $\exp$ is defined by its series ([[def-real-exponential-function-and-e]]), satisfies $\exp(u+v)=\exp u\exp v$ ([[thm-exponential-addition-formula]]) and $(\exp)'=\exp$ ([[thm-derivative-of-exponential]]); the chain, product and quotient rules are those of [[thm-chain-rule]] and [[thm-algebra-of-derivatives]], and $\Delta=\sum_i\partial_i\partial_i$ is the Laplacian of [[def-laplacian-of-a-c2-function]].

[F3] $x^m/\exp(ax)\to0$ as $x\to+\infty$ for every $m$ and $a>0$ ([[thm-exponential-beats-every-polynomial]]); the Archimedean property supplies the resulting thresholds ([[thm-of-archimedean]]), and continuous functions on compact sets attain their extrema ([[thm-extreme-value-metric]], [[thm-heine-borel-rn]], [[def-metric-compactness]]).

## Proof

**Given:** Countable Choice, $T>0$, $a\ge0$, $A<\infty$, and $u$ satisfying the subsolution inequality and the Gaussian growth bound.

1.1 Put $M:=\sup_{\mathbb R^n}u(0,\cdot)$. If $M=+\infty$ the conclusion is immediate, so assume $M<\infty$ (it is greater than $-\infty$ since the initial trace is real valued). Assume first $aT<1/4$; choose $\delta>0$ with $b:=\frac1{4(T+\delta)}>a$, which is possible under this assumption because $1/(4T)>a$ and $\delta\mapsto1/(4(T+\delta))$ is continuous with value $1/(4T)$ at $\delta=0$, and set $B(t,x):=(T+\delta-t)^{-n/2}e^{|x|^2/[4(T+\delta-t)]}$ for $t\le T$; writing $\tau=T+\delta-t$ and differentiating, [F2] gives $B_t=\bigl(\frac n{2\tau}+\frac{|x|^2}{4\tau^2}\bigr)B=\Delta B$, so $(\partial_t-\Delta)B=0$ and $v:=u-\varepsilon B$ satisfies $(\partial_t-\Delta)v\le0$ for every $\varepsilon>0$. [A1, F2, F3, given]

2.1 For every $\varepsilon>0$ there is $R$ with $v(t,x)\le M$ for all $|x|\ge R$ and all $t\in[0,T]$: indeed $B(t,x)\ge(T+\delta)^{-n/2}e^{b|x|^2}$ and $u\le Ae^{a|x|^2}$, so $v\le Ae^{a|x|^2}-\varepsilon(T+\delta)^{-n/2}e^{b|x|^2}$, whose right-hand side tends to $-\infty$ as $|x|\to\infty$ because $b>a$ and exponentials dominate constants and polynomials [F3]; hence it is at most the fixed value $M$ for $|x|\ge R$. On the initial slice $v(0,x)=u(0,x)-\varepsilon B(0,x)\le u(0,x)\le M$, since $B(0,x)>0$. [step 1.1, F2, F3, given]

3.1 Fix $\varepsilon>0$ and $R$ as in step 2.1. For $0<h<T$, $v$ has all required derivatives continuous on $\overline B_R\times[h,T]$, so [F1] applies on this positive-time cylinder. Continuity on $\overline B_R\times[0,T]$ gives $\eta_h:=\max(0,\max_{\overline B_R}v(h,\cdot)-M)\to0$ as $h\downarrow0$, because $v(0,\cdot)\le M$. Its lateral values are at most $M$ by step 2.1, hence [F1] gives $v\le M+\eta_h$ for $h\le t\le T$ in the ball. At each fixed positive time let $h\downarrow0$; combining with step 2.1 outside the ball gives $v\le M$ on the whole closed strip. Letting $\varepsilon\downarrow0$ gives $u\le M$ when $aT<1/4$. [step 1.1, step 2.1, F1, F3, given]

4.1 If $aT\ge1/4$, choose an integer $N>4aT$ and divide $[0,T]$ into the $N$ equal intervals $[kT/N,(k+1)T/N]$. Each has positive length $T/N<1/(4a)$ and inherits the same Gaussian bound. Apply the short-strip case to the time-translated function on each interval. On the first interval its supremum is at most $M$, and inductively the initial supremum of each subsequent strip is at most $M$. Thus $u\le M$ throughout $[0,T]\times\mathbb R^n$, with no time-zero derivative assumption. [step 3.1, F3, given] ∎
