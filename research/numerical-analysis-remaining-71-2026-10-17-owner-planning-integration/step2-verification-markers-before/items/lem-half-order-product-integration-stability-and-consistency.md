---
id: lem-half-order-product-integration-stability-and-consistency
kind: lemma
title: Stability, collective compactness, and consistency of half-order product integration
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-half-order-product-integration
  - lem-half-order-singular-integral-exists
  - lem-half-order-kernel-translation-modulus-in-l1
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - thm-arzela-ascoli-for-real-ck
  - thm-heine-cantor-metric
  - lem-linear-interpolation-error-bound
  - def-higher-derivatives-and-smoothness
  - def-compact-linear-operator
  - thm-c-k-complete-in-the-sup-metric
justified_by: []
proof_strategy: direct
axiom_use: "AC is used only for the Arzelà–Ascoli compactness conclusions; the weight stability, translation modulus, consistency, and interpolation error bounds are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Nyström convergence framework, printed pp. 60–65; the half-order weights and estimates are proved locally here."
    - title: "Jiri Lebl, Basic Analysis I, §5.5 Improper Integrals"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
      locator: "Definition 5.5.1 and Proposition 5.5.2, endpoint improper-integral convention."
---

## Statement

Assume AC and let $a:[0,1]^2\to\mathbb R$ be continuous. For $K$ and $K_n$
from [[def-half-order-product-integration]], put $A:=\|a\|_\infty$ and
$h:=1/n$. Then both operators map $X=C([0,1],\mathbb R)$ to itself, $K$ is
compact, and $(K_n)$ is collectively compact and converges pointwise in norm to
$K$. Their product weights satisfy
$$w_{n,j}(x)\ge0,\qquad \sum_{j=0}^n|w_{n,j}(x)|  =2\sqrt{x}+2\sqrt{1-x}\le2\sqrt2$$
for every $x\in[0,1]$. If each $g_x(y):=a(x,y)u(y)$ extends to a $C^2$
function on a neighborhood of $[0,1]$ and
$M_2:=\sup_{x,y}|\partial_y^2g_x(y)|<\infty$, then
$$\|K_nu-Ku\|_\infty\le\frac{\sqrt2}{4}M_2h^2.$$

## Facts & Assumptions

**Given:** AC, continuous $a$, the scalar functionals $S_x$, hat functions $\phi_{n,j}$, and operators $K,K_n$ defined in the preceding item.

[A1] [[def-axiom-of-choice]] and [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]: AC supplies the two choice hypotheses of real Arzelà–Ascoli.

[F1] [[def-half-order-product-integration]]: $K_nu(x)=S_x(I_ng_x)$ for $g_x(y)=a(x,y)u(y)$, and $w_{n,j}(x)=S_x(\phi_{n,j})$.

[F2] [[lem-half-order-singular-integral-exists]]: $S_x$ is positive, linear, and $|S_x(g)|\le2\sqrt2\|g\|_\infty$; it is integration against $|x-y|^{-1/2}$ in the improper-Riemann sense.

[F3] [[lem-half-order-kernel-translation-modulus-in-l1]]: the finite modulus $\tau(d):=\sup_{|x-x'|\le d}\int_0^1|s(x-y)-s(x'-y)|dy$ tends to zero as $d\downarrow0$.

[F4] [[thm-heine-cantor-metric]]: continuous $a$ and $g_u(x,y)=a(x,y)u(y)$ on the compact square are uniformly continuous.

[F5] [[thm-arzela-ascoli-for-real-ck]]: under Countable Choice and Dependent Choice, an equicontinuous pointwise bounded family on $[0,1]$ has compact closure in $X$.

[F6] [[def-higher-derivatives-and-smoothness]] and [[lem-linear-interpolation-error-bound]]: for $g\in C^2$ on a neighborhood of a panel of width $h$, the linear interpolant error is at most $\tfrac12\|g''\|_\infty(y-y_j)(y_{j+1}-y)\le h^2\|g''\|_\infty/8$.

[F7] [[thm-c-k-complete-in-the-sup-metric]]: every continuous $a$ on the compact square is bounded, so $A:=\|a\|_\infty<\infty$.

## Proof



**Given:** AC, the definitions in [F1], $A=\|a\|_\infty$, $h=1/n$, and
$s(t):=|t|^{-1/2}$ for $0<|t|\le1$.

1.1 By [F7], $A=\|a\|_\infty$ is finite. The hat functions in [F1] are nonnegative and on each panel the two adjacent hats add to $1$, while all other hats vanish. Hence $\sum_{j=0}^n\phi_{n,j}=1$ pointwise. Positivity and linearity in [F2] give $w_{n,j}(x)\ge0$ and $\sum_j|w_{n,j}(x)|=\sum_jw_{n,j}(x)=S_x(1)=2\sqrt{x}+2\sqrt{1-x}\le2\sqrt2.$ The same bound shows $\|K_nu\|_\infty\le2\sqrt2 A\|u\|_\infty$. [given, F1, F2, F7, algebra]

1.2 For $d:=|x-x'|$, [F3] gives an upper bound $\tau(d)$ for the improper kernel translation integral, with $\tau(d)\to0$ as $d\downarrow0$. [F3]

2.1 For fixed $u$, [F4] makes $(x,y)\mapsto g_x(y)$ uniformly continuous. By step 1.1 the hats are nonnegative and sum to $1$, so on a panel $[y_j,y_{j+1}]$, $I_ng_x(y)$ is a convex combination of the two endpoint values. Hence $\|I_ng_x-g_x\|_\infty\to0$ uniformly in $x$, and the operator bound in [F2] yields $\|K_nu-Ku\|_\infty\le2\sqrt2\|I_ng_x-g_x\|_\infty\to0$. [F1, F2, F4, step 1.1]

2.2 Write $g_x(y)=a(x,y)u(y)$. The identities in [F1], the translation bound in [F3], and the operator bound in [F2] show $|Ku(x)-Ku(x')|\le A\|u\|_\infty\tau(d)+2\sqrt2\|u\|_\infty\omega_a(d),$ where $\tau(d)$ is the translation bound from step 1.2 and $\omega_a(d):=\sup_{|x-x'|\le d,y}|a(x,y)-a(x',y)|\to0$ by [F4]. Replacing $g_x$ by $I_ng_x$ gives the same bound for $K_nu$: by step 1.1 the interpolant is a convex combination of nodal values, so $\|I_ng_x\|_\infty\le\|g_x\|_\infty$ and $\|I_n(g_x-g_{x'})\|_\infty\le\|g_x-g_{x'}\|_\infty$. This proves that $K$ and all $K_n$ are continuous-valued maps, uniformly bounded on the unit ball and with one common equicontinuity modulus. By [F5] and [A1], $K$ is compact and $(K_n)$ is collectively compact. [F1, F2, F3, F4, F5, A1, step 1.1, step 1.2]

3.1 For each fixed $n,j$, take $a\equiv1$ and $u=\phi_{n,j}$ in the preceding continuity argument; then $K_nu(x)=w_{n,j}(x)$, so each weight function is continuous. Consequently the coefficient functions $x\mapsto w_{n,j}(x)a(x,y_j)$ in the finite-node representation are continuous. [F1, step 2.2]

4.1 Under the $C^2$ extension hypothesis, [F6] bounds $\|I_ng_x-g_x\|_\infty\le M_2h^2/8$ uniformly in $x$. Applying [F2] gives $\|K_nu-Ku\|_\infty\le2\sqrt2 M_2h^2/8=\sqrt2 M_2h^2/4$. [F2, F6] ∎

