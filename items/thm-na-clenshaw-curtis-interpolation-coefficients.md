---
id: thm-na-clenshaw-curtis-interpolation-coefficients
kind: theorem
title: "DCT-I coefficients of the Chebyshev–Lobatto interpolant"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 5
deps: [def-na-clenshaw-curtis-dct-i, lem-na-clenshaw-curtis-dct-i-orthogonality, def-cardinal-polynomial-interpolation, thm-cardinal-polynomial-interpolant-exists-uniquely, def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants, lem-cardinal-lagrange-interpolation-and-operator-norm, def-chebyshev-polynomials-first-and-second-kind, lem-na-chebyshev-recurrence-angle-identity, lem-na-chebyshev-degree-bound-from-recurrence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The finite cosine identities and polynomial interpolation are choice-free.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, Clenshaw–Curtis data transform and coefficient normalization."
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.4.1"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed p. 236, interpolation at Chebyshev extrema and Clenshaw–Curtis."
---

## Statement

Let $n\in\mathbb N$ with $n\ge1$, and let $g\in C[-1,1]$. Put $y_j=g(\cos(j\pi/n))$ for $0\le j\le n$, and let $X_k$ be the DCT-I of [[def-na-clenshaw-curtis-dct-i]]. Define
$$a_0:=\frac{X_0}{2n},\qquad a_n:=\frac{X_n}{2n},\qquad a_k:=\frac{X_k}{n}\quad(1\le k<n).$$
Then $p_n(t):=\sum_{k=0}^{n}a_kT_k(t)$ is the unique polynomial of degree at most $n$ interpolating $g$ at the Chebyshev–Lobatto nodes $\cos(j\pi/n)$; in particular $p_n=I_n^L g$ in the convention of [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]].

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a continuous $g:[-1,1]\to\mathbb R$.

[F1] [[def-na-clenshaw-curtis-dct-i]]: $X_k=y_0+(-1)^ky_n+2\sum_{j=1}^{n-1}y_j\cos(jk\pi/n)$.

[F2] [[lem-na-clenshaw-curtis-dct-i-orthogonality]]: the half-endpoint weighted cosine products sum to $n$ at matching endpoint frequencies, $n/2$ at matching interior frequencies, and $0$ at distinct frequencies.

[F3] [[lem-na-chebyshev-recurrence-angle-identity]]: $T_k(\cos\theta)=\cos(k\theta)$ for every real $\theta$.

[F4] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]: the Lobatto nodes are $x_j^{L,n}=\cos(j\pi/n)$ and $I_n^L g$ is the Lagrange-cardinal interpolant at those nodes.

[F5] [[lem-cardinal-lagrange-interpolation-and-operator-norm]]: $I_n^L g$ is a polynomial of degree at most $n$ and has values $I_n^L g(x_j^{L,n})=g(x_j^{L,n})$ at every node.

[F6] [[def-cardinal-polynomial-interpolation]] and [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: at $n+1$ strictly increasing distinct real nodes, the degree-at-most-$n$ Lagrange interpolant is the unique polynomial with the given node values.

[F7] [[lem-na-chebyshev-degree-bound-from-recurrence]]: each $T_k$ has degree at most $k$.

## Proof

1.1 Use the half-endpoint sum notation $\sum_{j=0}^{n}{}'v_j:=v_0/2+\sum_{j=1}^{n-1}v_j+v_n/2$. By [F1], $X_k=2\sum_{j=0}^{n}{}'y_j\cos(jk\pi/n)$. The recurrence-angle identity [F3] gives $T_k(\cos(j\pi/n))=\cos(jk\pi/n)$, so the definition of $a_k$ then gives $p_n(\cos(j\pi/n))=\frac1n\sum_{k=0}^{n}{}'X_k\cos(jk\pi/n).$ [given, F1, F3, algebra]

2.1 Substitute the expression for $X_k$ from step 1.1 into the displayed reconstruction sum and interchange the two finite sums. By [F2], every frequency $m\ne j$ contributes zero. If $j$ is an endpoint, its outer half-weight and the diagonal sum $n$ contribute $(1/n)\cdot2\cdot(1/2)n\,y_j=y_j$; if $j$ is interior, the diagonal sum $n/2$ contributes $(1/n)\cdot2\cdot(n/2)y_j=y_j$. Thus $p_n(\cos(j\pi/n))=y_j$ for each $j$. [given, F1, F2, step 1.1, algebra]

3.1 By [F7], $p_n$ has degree at most $n$. The interpolant $I_n^L g$ has the same degree bound and node values by [F4]–[F5]. Reorder the common node set increasingly; it remains $n+1$ distinct nodes because $\cos$ is strictly decreasing on $[0,\pi]$. Apply the uniqueness statement [F6] to the two polynomials with the same values from step 2.1. Hence $p_n=I_n^L g$. [given, F4, F5, F6, F7, step 2.1, algebra] ∎
