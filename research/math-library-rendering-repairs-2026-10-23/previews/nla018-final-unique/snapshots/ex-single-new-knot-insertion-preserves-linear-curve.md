---
id: ex-single-new-knot-insertion-preserves-linear-curve
kind: example
title: Inserting a knot leaves a linear B-spline curve fixed
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-single-new-b-spline-knot-insertion
  - def-b-spline-space-and-basis
  - thm-single-new-knot-insertion-preserves-b-spline-curve
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter XI,
        pp. 135–138
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

The degree-one B-spline curve with knots $(0,0,1,1)$ and controls $(0,1)$
is $C(x)=x$ on $[0,1]$. Insert the new knot $u=1/2$. The new knots are
$(0,0,1/2,1,1)$ and the updated controls are $(0,1/2,1)$.

In the control diagram, arrows show the copied endpoints and the single
midpoint blend. The diagram records the update formulas; the verification
below establishes the represented curves agree.

```tikz
\begin{tikzpicture}[
  control/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt},
  copy/.style={->,gray!75,line width=.8pt},
  blend/.style={->,blue!70!black,line width=1pt}
]
\node[control] (p0) at (0,1.7) {$P_0=0$};
\node[control] (p1) at (4,1.7) {$P_1=1$};
\node[control] (q0) at (0,0) {$Q_0=0$};
\node[control] (q1) at (2,0) {$Q_1=1/2$};
\node[control] (q2) at (4,0) {$Q_2=1$};
\draw[copy] (p0) -- (q0);
\draw[blend] (p0) -- (q1);
\draw[blend] (p1) -- (q1);
\draw[copy] (p1) -- (q2);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Degree $p=1$, knot vector $(0,0,1,1)$, controls $(0,1)$, and the inserted knot $u=1/2$.

[F1] [[alg-single-new-b-spline-knot-insertion]] uses $Q_i=\alpha_iP_i+(1-\alpha_i)P_{i-1}$ on the active blend range, with $\alpha_i=(u-t_i)/(t_{i+p}-t_i)$.

[F2] [[thm-single-new-knot-insertion-preserves-b-spline-curve]] proves that the old and refined coefficient expansions define the same function.

[F3] [[def-b-spline-space-and-basis]] defines the degree-one basis by the Cox–de Boor recurrence and half-open knot cells.

[A1] The original active span is $[0,1)$ and $P_0=0$, $P_1=1$.

## Verification

1.1 For the insertion span $k=1$, the only blended index is $i=1$ and $\alpha_1=(1/2-t_1)/(t_2-t_1)=1/2$. Therefore [F1] returns $Q_0=P_0=0$, $Q_1=(P_0+P_1)/2=1/2$, and $Q_2=P_1=1$. [A1, F1, algebra]

1.2 Before insertion, the two degree-one basis functions on $[0,1)$ are $1-x$ and $x$, so the curve is $x$. [A1, F3, algebra]

2.1 On $[0,1/2)$, the refined curve is $0(1-2x)+(1/2)(2x)=x$. On $[1/2,1)$, it is $(1/2)2(1-x)+1(2x-1)=x$. The endpoint value at $1$ is the left limit. Therefore the piecewise calculation agrees with the general preservation statement [F2]. [A1, F2, F3, step 1.1, step 1.2, algebra] ∎
