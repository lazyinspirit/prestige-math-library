---
id: thm-clamped-cubic-spline-fourth-order-error
kind: theorem
title: Boundary-compatible clamped cubic interpolation is fourth order in the
  maximum norm
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-clamped-cubic-spline-interpolant
  - thm-clamped-cubic-spline-interpolant-exists-uniquely
  - cor-taylor-remainder-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter V,
        pp. 51–56
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Brian LeMesurier, Introduction to Numerical Methods and Analysis with
        Python, §3.4.3, Theorem 3.5
      url: https://lemesurierb.people.charleston.edu/introduction-to-numerical-methods-and-analysis-python/docs/main/piecewise-polynomial-approximation-and-splines.html
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $a=x_0<\cdots<x_m=b$, $m\ge1$, with $h_i=x_{i+1}-x_i$ and
$H=\max_i h_i$. Suppose $f$ has continuous derivatives through order four
on an open interval containing $[a,b]$, and let $M\ge0$ satisfy
$|f^{(4)}(x)|\le M$ there. Let $s$ be the clamped cubic interpolant at
$y_i=f(x_i)$ with the boundary-compatible slopes
$s'(a)=f'(a)$ and $s'(b)=f'(b)$. Then
$$
\|s-f\|_{L^\infty([a,b])}\le\frac{83}{324}MH^4\le MH^4.
$$
The conclusion uses the exact endpoint derivatives; it is not a rate claim
for the natural boundary condition or for estimated endpoint slopes.

## Facts & Assumptions

**Given:** A strictly increasing partition, $f$ with continuous derivatives through order four near $[a,b]$, a bound $M$ on $|f^{(4)}|$, and the clamped interpolant with endpoint slopes equal to those of $f$.

[F1] [[thm-clamped-cubic-spline-interpolant-exists-uniquely]] gives the second-derivative system, the cubic piece formula, and the endpoint-slope formulae for the clamped interpolant.

[F2] [[cor-taylor-remainder-bound]]: if a function has derivatives through order $q+1$ on the closed segment between $c$ and $x$, with endpoint continuity, and its $(q+1)$st derivative is bounded by $M$, its degree-$q$ Taylor remainder is at most $M|x-c|^{q+1}/(q+1)!$. Here the proof uses $q=1$ for $f''$, $q=2$ for $f'$, and $q=3$ for $f$; the resulting factorials are $2$, $6$, and $24$.

[A1] $h_i>0$, $H=\max_i h_i$, and $|f^{(4)}|\le M$ on a neighborhood of the partition.

## Proof

1.1 Put $g_i=f''(x_i)$ and $q_i=f'''(x_i)$. By [F2], on each adjacent interval of length $h$, Taylor expansion gives $f''(x_i+h)=g_i+hq_i+R_g^+$ and $f''(x_i-h)=g_i-hq_i+R_g^-$ with $|R_g^\pm|\le Mh^2/2$; the corresponding secant slopes satisfy $d_i=f'(x_i)+h_i g_i/2+h_i^2q_i/6+R_i^+$ and $d_{i-1}=f'(x_i)-h_{i-1}g_i/2+h_{i-1}^2q_i/6+R_i^-$, with $|R_i^\pm|\le Mh_{i\text{ or }i-1}^3/24$. Substitution in an interior row of [F1] shows that the residual obtained by inserting $g_i$ in place of $M_i$ has magnitude at most $(3/4)MH^2(h_{i-1}+h_i)$: the first-derivative terms cancel, and the remaining terms are bounded by $(1/2+1/4)M(h_{i-1}^3+h_i^3)$. The same expansions in the first row give residual at most $(3/4)MH^2h_0$; expansion backward from $b$ gives at most $(3/4)MH^2h_{m-1}$ in the last row. [A1, F1, F2, algebra]

1.2 Fix an interval $[x_i,x_{i+1}]$ of length $h_i$ and let $H_i$ be the cubic Hermite interpolant matching $f$ and $f'$ at both endpoints. Let $T_3$ be the Taylor polynomial of degree three for $f$ at $x_i$, and put $g=f-T_3$. By [F2], $g(x_i)=g'(x_i)=0$, $|g(x)|\le Mh_i^4/24$, $|g(x_{i+1})|\le Mh_i^4/24$, and $|g'(x_{i+1})|\le Mh_i^3/6$. With $t=(x-x_i)/h_i$, the Hermite basis functions for the right value and right slope are $3t^2-2t^3$ and $t^3-t^2$; their absolute values on $[0,1]$ are at most $1$ and $4/27$. Therefore $|H_i g(x)|\le(43/648)Mh_i^4$, and $|f(x)-H_i(x)|=|g(x)-H_i g(x)|\le(35/324)Mh_i^4$. [A1, F2, construct, algebra]

2.1 In the clamped system matrix, each diagonal exceeds the sum of the absolute off-diagonal entries by respectively $h_0$, $h_{i-1}+h_i$, and $h_{m-1}$. Let $e_i=M_i-g_i$ and choose an index with maximal $|e_i|$. Since the residual equation is $Ae=b-Ag$, its row at that index has magnitude at least the row's diagonal-dominance margin times $\max_j|e_j|$. Step 1.1 bounds that same row by $(3/4)MH^2$ times the margin. Hence $\max_i|M_i-g_i|\le(3/4)MH^2$. [A1, F1, step 1.1, algebra, choose]

3.1 At an interior node $x_i$, [F1] gives $s'(x_i)=d_{i-1}+h_{i-1}(M_{i-1}+2M_i)/6$. Substituting the backward Taylor expansions in step 1.1 and $M_j=g_j+e_j$ cancels the terms in $g_i$ and $q_i$. The remaining Taylor terms are bounded by $(1/24+1/12)Mh_{i-1}^3=MH^3/8$, and the $e$ terms by $h_{i-1}(3/4)MH^2/2\le3MH^3/8$. Thus $|s'(x_i)-f'(x_i)|\le MH^3/2$. At $a$ and $b$ this difference is zero by the boundary conditions. [A1, F1, step 1.1, step 2.1, algebra]

4.1 The difference $s-H_i$ is a cubic with zero endpoint values and with endpoint slope differences $\epsilon_i=s'(x_i)-f'(x_i)$ and $\epsilon_{i+1}=s'(x_{i+1})-f'(x_{i+1})$. Its Hermite form is $h_i(\epsilon_i t(1-t)^2+\epsilon_{i+1}t^2(t-1))$. Each displayed shape function has absolute value at most $4/27$ on $[0,1]$. Step 3.1 therefore gives $|s-H_i|\le(4/27)MH^4$. Combining with step 1.2 yields $|s-f|\le(35/324+4/27)MH^4=(83/324)MH^4$ on this interval. [A1, step 3.1, step 1.2, algebra]

5.1 The intervals cover $[a,b]$, and $83/324<1$. Taking the supremum over all intervals proves the stated maximum-norm estimate. [step 4.1, algebra] ∎
