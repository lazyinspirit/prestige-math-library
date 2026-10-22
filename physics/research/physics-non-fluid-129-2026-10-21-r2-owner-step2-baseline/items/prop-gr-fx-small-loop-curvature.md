---
id: prop-gr-fx-small-loop-curvature
kind: proposition
title: Small-loop transport recovers curvature
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - prop-gr-fx-path-functor-and-gauge
  - def-gr-fx-tetrad-spin-connection
  - def-gr-fx-connection-path-transport
dependency_roles:
  prop-gr-fx-path-functor-and-gauge: mathematical-premise
  def-gr-fx-tetrad-spin-connection: mathematical-premise
  def-gr-fx-connection-path-transport: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §3.3.3 and §3.4.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.3.3 describes infinitesimal loop transport and curvature; §3.4.2 gives the matrix curvature form."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, Chapter 3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Equations (3.138) and surrounding discussion define the curvature two-form in an orthonormal frame."
verification:
  precheck: pass
---

## Statement

Let $V\subseteq\mathbb R^n$ be an open coordinate domain, let $K\subset V$ be compact with positive distance from $\mathbb R^n\setminus V$, and let $\omega=\sum_k\omega_k(x)\,dx^k$ be a $C^2$ matrix-valued connection one-form on $V$. For $p\in K$, distinct coordinate directions $i,j$, and sufficiently small positive $\varepsilon$ so the square stays in $V$, traverse the positively oriented boundary $p\to p+\varepsilon e_i\to p+\varepsilon e_i+\varepsilon e_j\to p+\varepsilon e_j\to p$. With the transport convention of [[def-gr-fx-connection-path-transport]],

$$U_{\partial R_\varepsilon}=I-\varepsilon^2F_{ij}(p)+O(\varepsilon^3),\qquad F_{ij}=\partial_i\omega_j-\partial_j\omega_i+[\omega_i,\omega_j].$$

Here the matrix norm is any fixed submultiplicative norm, and $O(\varepsilon^3)$ means its norm is at most $C\varepsilon^3$ for all sufficiently small positive $\varepsilon$, with $C$ uniform for basepoints $p\in K$.

## Statement references

[[prop-gr-fx-path-functor-and-gauge]]

[[def-gr-fx-tetrad-spin-connection]]

[[def-gr-fx-connection-path-transport]]

## Facts & Assumptions

**Given:** A $C^2$ matrix one-form, the ordered square boundary above, and the ODE convention $U'=-\omega(\dot\gamma)U$.

[F1] [[def-gr-fx-connection-path-transport]]: along a path, transport solves the left-multiplication matrix ODE with initial value $I$.

[F2] [[def-gr-fx-tetrad-spin-connection]]: the curvature components are $F_{ij}=\partial_i\omega_j-\partial_j\omega_i+[\omega_i,\omega_j]$ in a coordinate frame.

## Proof

**Proof technique:** direct expansion.

1.1 Set $A=\omega_i(p)$ and $B=\omega_j(p)$. The integral equation $U(t)=I-\int_0^t\omega(\dot\gamma)U$ gives the positive-$i$ segment expansion $S_1=I-\varepsilon A+\tfrac12\varepsilon^2(A^2-\partial_iA)+O(\varepsilon^3)$. On the following positive-$j$ segment, Taylor expansion at $p+\varepsilon e_i$ gives $S_2=I-\varepsilon B+\varepsilon^2(\tfrac12B^2-\partial_iB-\tfrac12\partial_jB)+O(\varepsilon^3)$. In each case the second iterated integral contributes $\tfrac12\varepsilon^2\omega_k(p)^2$, and the first integral contributes the displayed derivative terms. [given, F1, algebra]

2.1 Along the negative-$i$ segment from $p+\varepsilon e_i+\varepsilon e_j$ to $p+\varepsilon e_j$ and the negative-$j$ segment from $p+\varepsilon e_j$ to $p$, the same integral expansion gives $S_3=I+\varepsilon A+\varepsilon^2(\tfrac12A^2+\tfrac12\partial_iA+\partial_jA)+O(\varepsilon^3)$ and $S_4=I+\varepsilon B+\tfrac12\varepsilon^2(B^2+\partial_jB)+O(\varepsilon^3)$. The derivative terms use starting points $p+\varepsilon e_j$ and $p$; reversing the tangent changes the first-order ODE coefficient's sign. [given, F1, step 1.1, algebra]

3.1 Later segments multiply on the left, so total transport is $S_4S_3S_2S_1$. Its linear terms cancel. The within-segment quadratic terms sum to $A^2+B^2-\partial_iB+\partial_jA$; the six cross-products sum to $BA-B^2-BA-AB-A^2+BA=BA-AB-A^2-B^2$. The full coefficient is therefore $\partial_jA-\partial_iB+BA-AB=-(\partial_i\omega_j-\partial_j\omega_i+[A,B])=-F_{ij}(p)$ by [F2]. For a uniform remainder, choose a compact neighborhood $K'$ of $K$ contained in $V$ and containing the four square sides for $0<\varepsilon<\varepsilon_0$; the $C^2$ coefficients and derivatives are bounded there. Taylor remainders in single integrals are uniformly $O(\varepsilon^3)$, and if $M$ bounds coefficient norms, iterated-integral terms of order $m\ge3$ are bounded by $M^m\varepsilon^m/m!$, whose sum is $O(\varepsilon^3)$. Multiplying four expansions preserves the uniform remainder order. [given, F1, F2, step 1.1, step 2.1, algebra] ∎