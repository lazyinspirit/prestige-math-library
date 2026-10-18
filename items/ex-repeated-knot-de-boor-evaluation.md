---
id: ex-repeated-knot-de-boor-evaluation
kind: example
title: de Boor evaluation with a double knot
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-de-boor-coefficient-evaluation
  - def-b-spline-space-and-basis
  - thm-de-boor-coefficient-evaluation-equivalence
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter X,
        pp. 123–126
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Take degree $p=2$, knots
$t_0=t_1=t_2=0$, $t_3=t_4=1$, and $t_5=t_6=t_7=2$, and coefficients
$(c_0,c_1,c_2,c_3,c_4)=(0,0,4,8,0)$. Evaluate at $x=3/2$ on the
nonempty span $[t_4,t_5)=[1,2)$. This span is adjacent to the double knot
at $1$.

## Facts & Assumptions

**Given:** The degree, knot vector, coefficient list, span $[1,2)$, and query $x=3/2$ from the Example.

[F1] [[alg-de-boor-coefficient-evaluation]] initializes $d_j^{(0)}=c_{k-p+j}$ and uses the stated $\alpha_{j,r}$ blend for $j=p,\ldots,r$.

[F2] [[thm-de-boor-coefficient-evaluation-equivalence]] identifies the exact output with the B-spline coefficient expansion.

[F3] [[def-b-spline-space-and-basis]] uses a clamped knot vector with half-open cells, right-side values at interior knots, and left limits at $b$.

[A1] $p=2$, $k=4$, $t_0=t_1=t_2=0$, $t_3=t_4=1$, $t_5=t_6=t_7=2$, and $(c_0,c_1,c_2,c_3,c_4)=(0,0,4,8,0)$.

## Verification

1.1 The input is admissible: [F3] allows the displayed clamped knot vector, including the double interior knot; the knots are nondecreasing and clamped for degree two; $t_4=1<t_5=2$; and $x=3/2\in[1,2)$. By [F1], the initial active list is $(d_0^{(0)},d_1^{(0)},d_2^{(0)})=(4,8,0)$. [given, A1, F1, F3]

2.1 For $r=1,j=2$, the indices are $L=4,U=6$, so $\alpha=(3/2-t_4)/(t_6-t_4)=1/2$ and $d_2^{(1)}=(8+0)/2=4$. For $r=1,j=1$, $L=3,U=5$, again $\alpha=1/2$, so $d_1^{(1)}=(4+8)/2=6$. [A1, F1, step 1.1, algebra]

3.1 For $r=2,j=2$, $L=4,U=5$ and $\alpha=1/2$. Therefore $d_2^{(2)}=(6+4)/2=5$, which is the algorithm's exact returned value. [A1, F1, step 2.1, algebra]

4.1 By [F2], the B-spline curve value on the specified span is also $5$. The example exercises a repeated knot without evaluating a basis function outside the active span. [A1, F2, step 3.1, algebra] ∎
