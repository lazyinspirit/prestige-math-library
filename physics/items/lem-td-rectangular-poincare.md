---
id: lem-td-rectangular-poincare
kind: lemma
title: Mean-zero Poincare inequality on a rectangle
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - thm-newton-leibniz-with-interior-derivative
  - thm-riemann-fubini-on-product-rectangles
dependency_roles:
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations, §4.4
      url: https://www.math.ucdavis.edu/~hunter/pdes/ch4.pdf
      locator: Official chapter PDF retrieved; §4.4, Theorem 4.9, Poincare inequalities.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $d\ge1$, let $L_1,\ldots,L_d>0$, and let $\Omega=\prod_{i=1}^d(0,L_i)$. If $w\in C^1(\overline\Omega,\mathbb R)$ satisfies $\int_\Omega w(x)\,dx=0$, write $\nabla w=(\partial_1w,\ldots,\partial_dw)$ and $|\nabla w|^2=\sum_{i=1}^d|\partial_iw|^2$. Then
$$\int_\Omega |w(x)|^2\,dx\le \frac d2\sum_{i=1}^d L_i^2\int_\Omega |\partial_iw(x)|^2\,dx\le C_\Omega\int_\Omega |\nabla w(x)|^2\,dx,$$
where $C_\Omega=\frac d2\max_iL_i^2$. All integrals are the multidimensional Riemann integrals of continuous functions on the indicated closed rectangles, with the usual extension to their interiors.

## Facts & Assumptions

**Given:** A dimension $d\ge1$, positive side lengths $L_i$, the open rectangle $\Omega=\prod_i(0,L_i)$, and $w\in C^1(\overline\Omega,\mathbb R)$ with $\int_\Omega w=0$.

[A1] The zero-mean condition is $\int_\Omega w(x)\,dx=0$.

[F1] [[thm-newton-leibniz-with-interior-derivative]]: if $G$ is continuous on $[a,b]$, differentiable on $(a,b)$, and its interior derivative has a Riemann-integrable extension $f$, then $\int_a^b f=G(b)-G(a)$.

[F2] [[thm-riemann-fubini-on-product-rectangles]]: when every section of a Riemann-integrable function on a product of nondegenerate closed rectangles is integrable, the ordinary iterated integral equals the multiple integral. In particular, this applies to the continuous integrands used here.

## Proof


1.1 Expand the square in the product integral and use [A1]: $\int_\Omega\int_\Omega(w(x)-w(y))^2\,dy\,dx=2|\Omega|\int_\Omega w^2-2(\int_\Omega w)^2=2|\Omega|\int_\Omega w^2$. The integrand is continuous, so [F2] justifies the repeated integrals. [A1, F2, algebra]

1.2 For $x,y\in\Omega$, define $z^{(0)}=x$ and $z^{(i)}=(y_1,\ldots,y_i,x_{i+1},\ldots,x_d)$ for $1\le i\le d$, and set $\delta_i=w(z^{(i-1)})-w(z^{(i)})$. Then $w(x)-w(y)=\sum_i\delta_i$ and $d\sum_i\delta_i^2-(\sum_i\delta_i)^2=\sum_{i<j}(\delta_i-\delta_j)^2\ge0$. [given, algebra]

1.3 Fix $i$ and the other coordinates. By [F1], $\delta_i$ is the integral of $h=\partial_iw$ over the interval between $x_i$ and $y_i$. If the endpoints differ, let $\bar h$ be the average of $h$ on that interval. Nonnegativity of $\int(h-\bar h)^2$ gives $(\int h)^2\le |x_i-y_i|\int h^2$; if they agree, $\delta_i=0$. Since $|x_i-y_i|\le L_i$, in both cases $\delta_i^2\le L_i\int_0^{L_i}|\partial_iw(z_1,\ldots,z_{i-1},s,z_{i+1},\ldots,z_d)|^2\,ds$. [F1, algebra]

2.1 Integrate the last bound over $x,y$. The $x_i,y_i$ integrations contribute $L_i^2$, the displayed segment bound contributes $L_i$, each unused variable from a pair $x_j,y_j$ with $j\ne i$ contributes $L_j$, and the remaining variables and $s$ give $\int_\Omega|\partial_iw|^2$. By [F2], this yields $\int_\Omega\int_\Omega\delta_i^2\,dy\,dx\le |\Omega|L_i^2\int_\Omega|\partial_iw|^2$. [F2, step 1.3, algebra]

3.1 By step 1.2 and the finite squared-sum inequality, the double integral in step 1.1 is at most $d\sum_i\int_\Omega\int_\Omega\delta_i^2\,dy\,dx$. Apply step 2.1, divide by $2|\Omega|>0$, and use $\sum_iL_i^2|\partial_iw|^2\le(\max_iL_i^2)|\nabla w|^2$ pointwise. This gives both stated inequalities with the displayed $C_\Omega$. [step 1.1, step 1.2, step 2.1, algebra] ∎
