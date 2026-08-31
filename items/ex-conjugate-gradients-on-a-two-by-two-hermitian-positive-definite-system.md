---
id: ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system
kind: example
title: "CG on a $2\\times2$ Hermitian positive-definite system reaches the solution in at most two steps"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate,
       thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems"
      url: "https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf"
---

## Example

Take

$$A=\begin{pmatrix}2&0\\0&1\end{pmatrix},\qquad b=\binom21,\qquad x_0=\binom00.$$

Then $A$ is Hermitian positive definite and the exact solution is

$$x_*=\binom11.$$

CG reaches $x_*$ by the second step.

## Facts & Assumptions

**Given:** The displayed system and the exact-arithmetic CG recurrence started
from $x_0=0$.

[L1] CG residuals are mutually orthogonal and search directions are
$A$-conjugate
([[thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate]]).

[L2] Exact-arithmetic CG terminates no later than the relative grade and hence
in at most $n$ steps
([[thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic]]).

## Verification
**Proof technique:** direct calculation.

1.1 Here $r_0=p_0=b=(2,1)^T$, so $$\alpha_0=\frac{r_0^Tr_0}{p_0^TAp_0}=\frac{5}{9},\qquad x_1=\binom{10/9}{5/9},\qquad r_1=b-Ax_1=\binom{-2/9}{4/9}.$$ Then $$\beta_0=\frac{r_1^Tr_1}{r_0^Tr_0}=\frac{4}{81},\qquad p_1=r_1+\beta_0p_0=\binom{-10/81}{40/81}.$$ One checks $$r_0^Tr_1=2(-2/9)+1(4/9)=0,\qquad p_0^TAp_1=(2,1)\cdot\binom{-20/81}{40/81}=0,$$ exactly as [L1] predicts. [L1, algebra]

2.1 Next $$\alpha_1=\frac{r_1^Tr_1}{p_1^TAp_1}=\frac{20/81}{200/729}=\frac{9}{10},$$ so $$x_2=x_1+\alpha_1p_1=\binom{10/9}{5/9}+\frac9{10}\binom{-10/81}{40/81}=\binom11=x_*.$$ Thus the method terminates in two steps, which matches the $n=2$ upper bound in [L2]. [L2, step 1.1] ∎
