---
id: ex-truncated-versus-full-nevanlinna-counting
kind: example
title: "Full and truncated counting differ for a power map"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-truncated-and-ramification-counts
  - def-nevanlinna-counting-proximity-and-characteristic
  - thm-rational-functions-characterized-by-logarithmic-characteristic
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §§1–2, printed pp. 87–98: definition of the truncated counts and the multiplicity convention"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5–6.1, printed pp. 35–43: full versus truncated counting for a power map"
verification:
  audited: 2026-10-02
---

## Example

Let $d\ge2$ be an integer, $f(z)=z^d$ and $r>1$. Then
$$ N(r,0;f)=d\log r,\qquad \bar N(r,0;f)=\log r,\qquad N_1(r,0;f)=(d-1)\log r, $$
while $T(r,f)=d\log r+O(1)$. In particular the full count strictly exceeds the
truncated count, and $N=\bar N+N_1$ holds with every term explicit.

## Facts & Assumptions

**Given:** An integer $d\ge2$, the function $f(z)=z^d$ and a radius $r>1$.

[F1] Counting conventions: $n(t,0;f)$ is the multiplicity of the zero of $f$ in $|z|\le t$, and $N(r,0;f)=n(0,0;f)\log r+\int_0^r\frac{n(t,0;f)-n(0,0;f)}{t}dt$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] Truncated counts: $\bar n(t,0;f)$ counts the distinct zeros once, $n_1(t,0;f)$ weights each zero by local degree minus one, and $\bar N$, $N_1$ use the same centre-regularized integral as $N$; moreover $N=\bar N+N_1$ ([[def-nevanlinna-truncated-and-ramification-counts]]).

[F3] For a rational function of degree $d\ge1$, $T(r,f)=d\log r+O(1)$ ([[thm-rational-functions-characterized-by-logarithmic-characteristic]]).

## Verification

**Proof technique:** read the three centre-regularized counts directly from the unique zero at the origin and compare with the rational degree formula.

1.1 The function $f(z)=z^d$ has exactly one zero, at $z=0$, of order $d$. Hence for every $t\ge0$: $n(t,0;f)=d$, $\bar n(t,0;f)=1$ and $n_1(t,0;f)=d-1$. [given, algebra]

2.1 Centre regularisation of the first count: $n(0,0;f)=d$, so $N(r,0;f)=d\log r+\int_0^r\frac{d-d}{t}dt=d\log r$ for every $r>0$. [F1, step 1.1, algebra]

2.2 For the truncated counts the centre values are $1$ and $d-1$ respectively, so $\bar N(r,0;f)=1\cdot\log r+\int_0^r\frac{1-1}{t}dt=\log r$ and $N_1(r,0;f)=(d-1)\log r$. [F2, step 1.1, algebra]

3.1 Consistency: $d\log r=\log r+(d-1)\log r$, in agreement with $N=\bar N+N_1$; and $N(r,0;f)=d\log r>\log r=\bar N(r,0;f)$ because $d\ge2$ and $\log r>0$. [F2, step 2.1, step 2.2, algebra]

4.1 The rational degree of $z^d$ is $d$, so [F3] gives $T(r,f)=d\log r+O(1)$; thus $T=N(r,0;f)+O(1)$ while the truncated count is smaller by $(d-1)\log r$. The truncated count omits the weight $(d-1)\log r$ of the multiple zero. Replacing the full count by the truncated count in the First Main Theorem therefore changes its equality by this unbounded term. In a Second Main Theorem inequality with truncated counts on the right, replacing them by the larger full counts preserves the inequality but gives a weaker bound. [F3, step 2.1, step 2.2, algebra] ∎
