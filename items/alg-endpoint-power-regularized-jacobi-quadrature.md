---
id: alg-endpoint-power-regularized-jacobi-quadrature
kind: algorithm
title: Finite endpoint power substitution followed by Gauss–Jacobi quadrature
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-gauss-jacobi-quadrature-rule, def-countable-choice, lem-log-power-regularity-after-endpoint-substitution, thm-substitution, def-real-power, def-natural-logarithm, def-higher-derivatives-and-smoothness]
justified_by: [thm-endpoint-regularized-jacobi-error]
axiom_use: Countable Choice is used only through the Gauss–Jacobi measure; the substitutions and regularity calculation are choice-free.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: J. Lebl, Basic Analysis I, §5.4.1–5.4.2, The logarithm and the exponential
      url: https://www.jirka.org/ra/html/sec_logandexp.html
      locator: Real powers and logarithmic factors.
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §14, variable transformations for endpoint behavior and the need for explicit analytic hypotheses.
---

## Definition

Assume Countable Choice. Input $a<b$, an integer $n\ge1$, exponents $\alpha,\beta>-1$, nonnegative integers $m_a,m_b$, a function $h\in C^{2n}([a,b])$ in the sense of [[def-higher-derivatives-and-smoothness]], and positive integers $q_a,q_b$ satisfying $q_a(\alpha+1)-1>2n$ and $q_b(\beta+1)-1>2n$. On $(a,b)$ define
$$f(x)=(x-a)^\alpha(b-x)^\beta\left(\log\frac{x-a}{b-a}\right)^{m_a}\left(\log\frac{b-x}{b-a}\right)^{m_b}h(x).$$
The logarithms are natural logarithms and their arguments are positive. Put $c=(a+b)/2$, $x_L(t)=a+(c-a)t^{q_a}$, and $x_R(t)=b-(b-c)t^{q_b}$. For $0<t\le1$ set $F_L(t)=f(x_L(t))q_a(c-a)t^{q_a-1}$ and $F_R(t)=f(x_R(t))q_b(b-c)t^{q_b-1}$; set $F_L(0)=F_R(0)=0$.

Let $(z_j,w_j)_{j=1}^n$ be the nodes and weights of the $n$-node Gauss–Jacobi rule for $\alpha=\beta=0$ on $[-1,1]$. Set $s_j=(1+z_j)/2$ and $v_j=w_j/2$. The output is the finite number
$$\widehat I=\sum_{j=1}^nv_jF_L(s_j)+\sum_{j=1}^nv_jF_R(s_j).$$
The inputs $q_a,q_b$ are supplied finite cutoff orders; this definition makes no claim of automatic parameter selection. The conditional integral and error guarantee are proved in [[thm-endpoint-regularized-jacobi-error]].
