---
id: thm-simpson-richardson-error-estimator-asymptotic
kind: theorem
title: Conditional asymptotic validity of the Simpson /15 indicator
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-adaptive-simpson-refinement-indicator
  - lem-composite-simpson-asymptotic-error-expansion
  - def-higher-derivatives-and-smoothness
  - cor-of-reverse-triangle
justified_by: []
proof_strategy: direct
axiom_use: None. The proof is a real sequence limit and finite algebra.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.2
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
      locator: Chapter 7, §7.2, compound Simpson rule (7.6) and its fourth-derivative error formula.
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §§5.6–5.7
      url: https://fncbook.com/adaptive/
      locator: §5.7.1, equations (5.7.1)–(5.7.4), with its asymptotic premise.
    - title: L. Ridgway Scott, Numerical Analysis, 2nd ed., Chapter 13, §13.2
      url: https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf
      locator: §13.2, Theorem 13.5, printed pp. 223–224; Peano error representation.
---

## Statement

Let $a<b$, $f\in C^4([a,b])$, $n_k=2^k$ for $k\ge1$,
$h_k=(b-a)/n_k$, $Q_k=Q_S(f;a,b,n_k)$, and
$c=-(1/180)\int_a^b f^{(4)}(x)\,dx$. Let $I=\int_a^b f$. Then the
refinement indicator
$$\eta_k=\frac{|Q_{k+1}-Q_k|}{15}$$
satisfies $\eta_k=|c|h_k^4/16+o(h_k^4)$. If $c\ne0$, then
$\eta_k/|I-Q_{k+1}|\to1$. The Richardson-corrected value
$R_{k+1}=Q_{k+1}+(Q_{k+1}-Q_k)/15$ satisfies
$I-R_{k+1}=o(h_k^4)$. When $c=0$, these statements give no relative
error estimate for $\eta_k$; at no finite level does $\eta_k$ alone certify
the true error.

## Facts & Assumptions

**Given:** A nondegenerate interval, a $C^4$ integrand, nested composite Simpson grids with mesh widths $h_{k+1}=h_k/2$, and exact arithmetic.

[F1] [[lem-composite-simpson-asymptotic-error-expansion]]: $I-Q_k=ch_k^4+o(h_k^4)$ with the stated coefficient $c$.

[F2] [[def-adaptive-simpson-refinement-indicator]]: the magnitude of the embedded indicator is $|Q_{k+1}-Q_k|/15$; a Richardson correction adds the signed quantity $(Q_{k+1}-Q_k)/15$ to the refined value.

[F3] [[def-higher-derivatives-and-smoothness]]: $C^4$ specifies continuous derivatives through order four on the closed interval.

[F4] [[cor-of-reverse-triangle]]: for reals $x,y$, $\bigl||x|-|y|\bigr|\le|x-y|$.

## Proof

1.1 By [F3], the regularity hypothesis is $f\in C^4([a,b])$. By [F1], write $E_k:=I-Q_k=ch_k^4+r_k$ where $r_k=o(h_k^4)$. Since $h_{k+1}=h_k/2$, $E_{k+1}=ch_k^4/16+o(h_k^4)$. [given, F1, F3, algebra]

2.1 The signed difference $Q_{k+1}-Q_k=E_k-E_{k+1}$. Therefore [F2] and step 1.1 give $(Q_{k+1}-Q_k)/15=ch_k^4/16+s_k$ for some $s_k=o(h_k^4)$. By [F4], the difference between $\eta_k=|(Q_{k+1}-Q_k)/15|$ and $|c|h_k^4/16$ is at most $|s_k|=o(h_k^4)$, so $\eta_k=|c|h_k^4/16+o(h_k^4)$. [given, F2, F4, step 1.1, algebra]

3.1 If $c\ne0$, step 1.1 and [F4] give $|E_{k+1}|/h_k^4\to|c|/16>0$, so $E_{k+1}\ne0$ for all sufficiently large $k$; dividing the step 2.1 relation by $|E_{k+1}|$ then gives $\eta_k/|E_{k+1}|\to1$. Also $I-R_{k+1}=(16E_{k+1}-E_k)/15$, whose order-$h_k^4$ terms cancel by step 1.1, leaving $o(h_k^4)$. If $c=0$, both leading terms vanish, and these asymptotic formulas do not give a relative-error conclusion. The limit statements do not bound any finite-level error. [given, F4, step 1.1, step 2.1, algebra] ∎

