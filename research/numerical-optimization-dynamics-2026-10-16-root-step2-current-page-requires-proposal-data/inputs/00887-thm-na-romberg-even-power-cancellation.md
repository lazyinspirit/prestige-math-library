---
id: thm-na-romberg-even-power-cancellation
kind: theorem
title: "Romberg cancels a proved finite even-power expansion"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 4
deps: [alg-na-romberg-trapezoid-table, cor-na-composite-trapezoid-even-power-expansion, def-composite-trapezoidal-rule, thm-induction-principle]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The cancellation is a finite algebraic induction.
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.3"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 228–235, finite Euler–Maclaurin remainder for trapezoid levels."
    - title: "NIST Digital Library of Mathematical Functions, §3.5(iii), Romberg Integration"
      url: "https://dlmf.nist.gov/3.5"
      locator: "Full-text section §3.5(iii), equations 3.5.9–3.5.12 on the finite even-power expansion and Romberg recurrence."
---

## Statement

Let $a<b$, let $m\ge1$ and $L\ge m$ be integers, and let $f\in C^{2m+2}([a,b])$. Write $h_\ell=(b-a)2^{-\ell}$ and let $(R_{\ell,j})$ be the table from [[alg-na-romberg-trapezoid-table]]. If the trapezoid expansion has coefficients $c_1,\ldots,c_m$ as in [[cor-na-composite-trapezoid-even-power-expansion]], then the recurrence cancels all first $m$ even powers and there is a finite $C_{m,L}$ such that
$$|R_{L,m}-\int_a^b f(x)\,dx|\le C_{m,L}h_L^{2m+2}.$$
No error-order conclusion is made from a ratio of observed consecutive trapezoid errors.

## Facts & Assumptions

**Given:** $a<b$, integers $m\ge1$, $L\ge m$, $f\in C^{2m+2}([a,b])$, and its finite Romberg table.

[F1] [[alg-na-romberg-trapezoid-table]]: $R_{\ell,0}=T_{2^\ell}(f)$ and $R_{\ell,j}=R_{\ell,j-1}+(R_{\ell,j-1}-R_{\ell-1,j-1})/(4^j-1)$ for $1\le j\le\ell$.

[F2] [[cor-na-composite-trapezoid-even-power-expansion]]: for every level $\ell$, $R_{\ell,0}=I+\sum_{r=1}^m c_rh_\ell^{2r}+\varepsilon_{\ell,0}$ with $|\varepsilon_{\ell,0}|\le C_0h_\ell^{2m+2}$, where $I=\int_a^b f$ and $C_0$ is independent of $\ell$.

[F3] [[def-composite-trapezoidal-rule]]: $h_{\ell-1}=2h_\ell$ and the initial table entries are the nested trapezoid values on these levels.

[F4] [[thm-induction-principle]]: induction on the finite extrapolation-column index is valid.

## Proof

1.1 By [F1]–[F2], column zero has the expansion $R_{\ell,0}=I+\sum_{r=1}^m c_rh_\ell^{2r}+\varepsilon_{\ell,0}$ uniformly for $\ell\ge0$. We prove by induction on the column $j$ that, for every $\ell\ge j$, $R_{\ell,j}=I+\sum_{r=j+1}^{m}d_{r,j}h_\ell^{2r}+\varepsilon_{\ell,j},\qquad |\varepsilon_{\ell,j}|\le C_jh_\ell^{2m+2},$ with coefficients $d_{r,j}$ independent of $\ell$. For $j=0$, this is [F2] with $d_{r,0}=c_r$. [given, F1, F2, base, induction]

2.1 Assume the induction hypothesis for column $j-1$ with $1\le j\le m$. Then $R_{\ell,j-1}$ has terms indexed $r=j,\ldots,m$ and $R_{\ell-1,j-1}$ has the same coefficients with $h_{\ell-1}^{2r}=4^rh_\ell^{2r}$ by [F3]. Substitution in [F1] multiplies the coefficient of $h_\ell^{2r}$ by $1+\frac{1-4^r}{4^j-1}=\frac{4^j-4^r}{4^j-1}.$ For $r=j$ this factor is zero, so the $j$th error power cancels; the remaining powers have indices $r>j$. [given, F1, F3, step 1.1, IH, induction, algebra]

3.1 The new remainder is $\varepsilon_{\ell,j}=\varepsilon_{\ell,j-1}+(\varepsilon_{\ell,j-1}-\varepsilon_{\ell-1,j-1})/(4^j-1)$. Thus $|\varepsilon_{\ell,j}|\le C_{j-1}\left(1+\frac{1+2^{2m+2}}{4^j-1}\right)h_\ell^{2m+2},$ so a finite level-independent $C_j$ exists under the inductive remainder bound. [given, F1, step 2.1, IH, algebra]

4.1 Step 1.1 supplies the base column, and steps 2.1 and 3.1 advance the expansion and its uniform remainder from column $j-1$ to column $j$. By [F4], induction therefore gives the asserted expansion at every column through $m$. At $j=m$ the coefficient sum is empty, so $R_{L,m}=I+\varepsilon_{L,m}$, and step 3.1 bounds its remainder by $C_mh_L^{2m+2}$. [F2, F4, step 1.1, step 2.1, step 3.1, induction, discharge-induction, algebra] ∎
