---
id: lem-reference-jacobi-weighted-endpoint-kernel
kind: lemma
title: Weighted Jacobi endpoint kernel on the reference interval
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Leszek F. Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.oden.utexas.edu/~leszek/classes/EM394F/book.pdf
      locator: "§3.1.4, printed pp. 64–68: Jacobi-based hierarchical p-version functions and endpoint degrees of freedom."
    - title: Tim Warburton and Jan S. Hesthaven, On the Constants in hp-Finite Element Trace Inverse Inequalities
      url: https://infoscience.epfl.ch/server/api/core/bitstreams/a541b153-f562-48eb-baa1-b42f9335269d/content
      locator: "§§3–4, pp. 4–14: Jacobi endpoint evaluation and its use in explicit simplex trace bounds."
---

## Statement

For an integer $d\ge1$, put $w_d(t)=(1-t)^{d-1}$ on $[0,1]$ and, for $n\ge0$, define
$$\phi_n(t):=\frac{(-1)^n}{n!}(1-t)^{-(d-1)}\frac{d^n}{dt^n}\bigl(t^n(1-t)^{n+d-1}\bigr).$$
The quotient extends to a polynomial of degree $n$. These polynomials are pairwise orthogonal in $L^2(w_d\,dt)$, with
$$\phi_n(0)=(-1)^n,\qquad \operatorname{lc}(\phi_n)=\binom{2n+d-1}{n},\qquad \int_0^1w_d\phi_n^2\,dt=\frac1{2n+d}.$$
Consequently, for every $p\ge0$ the squared norm of endpoint evaluation $q\mapsto q(0)$ on $\mathbb P_p([0,1])$ with this weighted $L^2$ norm is exactly $(p+1)(p+d)$.

## Facts & Assumptions

**Given:** Integers $d\ge1$ and $p\ge0$, the weight $w_d(t)=(1-t)^{d-1}$, and polynomials on $[0,1]$.

[A1] The factor $t^n(1-t)^{n+d-1}$ and its derivatives of orders $0,\ldots,n-1$ vanish at both endpoints; integration by parts therefore has no boundary terms.

## Proof

1.1 Apply Leibniz's rule to the $n$th derivative in the definition. Every term differentiates $(1-t)^{n+d-1}$ at most $n$ times, so it contains a factor $(1-t)^{d-1}$. After division the result is a polynomial. The original factor has degree $2n+d-1$ and leading coefficient $(-1)^{n+d-1}$; differentiating $n$ times and dividing by the leading term $(-1)^{d-1}t^{d-1}$ of $(1-t)^{d-1}$ shows that $\phi_n$ has degree $n$ and leading coefficient $\binom{2n+d-1}{n}$. The coefficient of $t^n$ in $t^n(1-t)^{n+d-1}$ is $1$, so its $n$th derivative at zero is $n!$ and $\phi_n(0)=(-1)^n$. [given, A1, algebra]

2.1 If $r$ has degree below $n$, multiply the Rodrigues formula by $w_dr$ and integrate. Integrating by parts $n$ times is allowed by [A1] and gives $\int_0^1w_d(t)\phi_n(t)r(t)\,dt=\frac1{n!}\int_0^1t^n(1-t)^{n+d-1}r^{(n)}(t)\,dt=0$, because $r^{(n)}=0$. Thus $\phi_n$ is orthogonal to every lower-degree polynomial, and the degree conclusion in step 1.1 makes the family an orthogonal basis of each polynomial space. [given, A1, step 1.1, algebra]

3.1 For nonnegative integers $a,b$, let $B(a,b)=\int_0^1t^a(1-t)^b\,dt$. The case $a=0$ gives $B(0,b)=1/(b+1)$; for $a\ge1$, integration by parts with $u=t^a$ and $dv=(1-t)^b\,dt$ gives $B(a,b)=aB(a-1,b+1)/(b+1)$. Iterating yields $B(a,b)=a!b!/(a+b+1)!$. Applying $n$ integrations by parts to the Rodrigues formula with $r(t)=t^n$ gives $\int_0^1w_d\phi_nt^n\,dt=B(n,n+d-1)=n!(n+d-1)!/(2n+d)!$. Since $t^n=\phi_n/\kappa_n+r$ for some $r$ of degree below $n$, where $\kappa_n=\binom{2n+d-1}{n}$, orthogonality gives $\|\phi_n\|_{L^2(w_d)}^2=\kappa_n B(n,n+d-1)=1/(2n+d)$. [given, A1, step 2.1, algebra]

4.1 Write $q=\sum_{n=0}^pc_n\phi_n$. By the endpoint and norm identities, Cauchy–Schwarz gives $|q(0)|^2=\left|\sum_{n=0}^pc_n(-1)^n\right|^2\le\left(\sum_{n=0}^p(2n+d)\right)\left(\sum_{n=0}^p\frac{|c_n|^2}{2n+d}\right)=(p+1)(p+d)\|q\|_{L^2(w_d)}^2$. Equality is attained by the polynomial $K_p(t,0)=\sum_{n=0}^p(2n+d)(-1)^n\phi_n(t)$: its endpoint value and squared norm both equal $\sum_{n=0}^p(2n+d)=(p+1)(p+d)$. Hence the evaluation norm squared is exactly the stated value. [step 1.1, step 2.1, step 3.1, algebra] ∎
