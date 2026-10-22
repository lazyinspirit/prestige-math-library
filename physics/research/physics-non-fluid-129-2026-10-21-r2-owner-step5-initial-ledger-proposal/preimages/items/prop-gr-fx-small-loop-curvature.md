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
  - prop-gr-fx-connection-path-transport-exists
dependency_roles:
  prop-gr-fx-path-functor-and-gauge: mathematical-premise
  def-gr-fx-tetrad-spin-connection: mathematical-premise
  def-gr-fx-connection-path-transport: mathematical-premise
  prop-gr-fx-connection-path-transport-exists: mathematical-premise
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

Fix coordinate dimension $n\ge2$ and matrix size $q\ge1$, independently. Let $V\subseteq\mathbb R^n$ be an open coordinate domain, let $K\subset V$ be compact with positive distance from $\mathbb R^n\setminus V$, and let $e_1,\ldots,e_n$ be the standard basis of $\mathbb R^n$. Let $\omega=\sum_{k=1}^n\omega_k(x)\,dx^k$ be a $C^2$ $M_q(\mathbb R)$-valued connection one-form, with each $\omega_k:V\to M_q(\mathbb R)$. Along each segment use the matrix ODE $U'=-\omega(\dot\gamma)U$ and initial value $I_q$; existence and uniqueness for this fixed matrix size follow from [[prop-gr-fx-connection-path-transport-exists]]. For the tetrad connection of [[def-gr-fx-connection-path-transport]], take $q=4$. For $p\in K$, distinct coordinate directions $i,j$, and sufficiently small positive $\varepsilon$ so the square stays in $V$, define $\gamma_\varepsilon$ by traversing each straight side at constant speed over one quarter of $[0,1]$, in the order

$$p\to p+\varepsilon e_i\to p+\varepsilon e_i+\varepsilon e_j\to p+\varepsilon e_j\to p.$$

Its boundary orientation is positive for the ordered coordinate pair $(e_i,e_j)$.

$$U_{\gamma_\varepsilon}(1)=I_q-\varepsilon^2F_{ij}(p)+O(\varepsilon^3),\qquad F_{ij}=\partial_i\omega_j-\partial_j\omega_i+[\omega_i,\omega_j]\in M_q(\mathbb R).$$

Here $I_q$ is the identity in $M_q(\mathbb R)$ and fix a norm $\|\cdot\|$ on that space satisfying $\|AB\|\le\|A\|\,\|B\|$ for all $A,B\in M_q(\mathbb R)$. The notation $O(\varepsilon^3)$ means that the norm of the remainder is at most $C\varepsilon^3$ for all sufficiently small positive $\varepsilon$, with $C$ uniform for basepoints $p\in K$.

## Statement references

[[prop-gr-fx-path-functor-and-gauge]]

[[def-gr-fx-tetrad-spin-connection]]

[[def-gr-fx-connection-path-transport]]

[[prop-gr-fx-connection-path-transport-exists]]

## Facts & Assumptions

**Given:** A $C^2$ matrix one-form, the ordered square boundary above, and the ODE convention $U'=-\omega(\dot\gamma)U$.

[F1] [[prop-gr-fx-connection-path-transport-exists]]: for a fixed matrix size, a continuous matrix coefficient on each compact path segment gives a unique solution of the left-multiplication matrix ODE with the specified initial value.

[F2] [[def-gr-fx-tetrad-spin-connection]] defines the smooth four-dimensional tetrad connection curvature by $F=d\omega+\omega\wedge\omega$, with matrix coefficients in $M_4(\mathbb R)$. This supplier is used only to identify the smooth tetrad specialization.

[F3] [[prop-gr-fx-path-functor-and-gauge]]: in the $q=4$ tetrad case, later path segments multiply on the left, $U_{\delta*\gamma}(1)=U_\delta(1)U_\gamma(1)$; the tangent-space arrow assignment leaves this component-matrix law unchanged.

[F4] [[def-gr-fx-connection-path-transport]]: the tetrad application uses the same component ODE with $q=4$.

[L1] For the arbitrary matrix size $q$ in the Statement, the commutator is $[A,B]:=AB-BA$, and $F_{ij}$ denotes the explicitly displayed combination $\partial_i\omega_j-\partial_j\omega_i+[\omega_i,\omega_j]$. The proof computes this combination directly.

## Proof

**Proof technique:** direct expansion.

1.1 Set $A=\omega_i(p)$ and $B=\omega_j(p)$. The integral equation $U(t)=I-\int_0^t\omega(\dot\gamma)U$ gives the positive-$i$ segment expansion $S_1=I-\varepsilon A+\tfrac12\varepsilon^2(A^2-\partial_iA)+O(\varepsilon^3)$. On the following positive-$j$ segment, Taylor expansion at $p+\varepsilon e_i$ gives $S_2=I-\varepsilon B+\varepsilon^2(\tfrac12B^2-\partial_iB-\tfrac12\partial_jB)+O(\varepsilon^3)$. In each case the second iterated integral contributes $\tfrac12\varepsilon^2\omega_k(p)^2$, and the first integral contributes the displayed derivative terms. [given, F1, algebra]

2.1 Along the negative-$i$ segment from $p+\varepsilon e_i+\varepsilon e_j$ to $p+\varepsilon e_j$ and the negative-$j$ segment from $p+\varepsilon e_j$ to $p$, the same integral expansion gives $S_3=I+\varepsilon A+\varepsilon^2(\tfrac12A^2+\tfrac12\partial_iA+\partial_jA)+O(\varepsilon^3)$ and $S_4=I+\varepsilon B+\tfrac12\varepsilon^2(B^2+\partial_jB)+O(\varepsilon^3)$. The derivative terms use starting points $p+\varepsilon e_j$ and $p$; reversing the tangent changes the first-order ODE coefficient's sign. [given, F1, step 1.1, algebra]

3.1 For any fixed $q$, uniqueness in [F1] shows that adjoining a segment with identity-initial transport $S$ to an already traversed path with transport $T$ gives total matrix $ST$: $S(t)T$ solves the next segment's ODE with its required initial value. Applying this successively gives total transport $S_4S_3S_2S_1$; for $q=4$ this agrees with [F3] using the same component ODE of [F4]. Its linear terms cancel. The within-segment quadratic terms sum to $A^2+B^2-\partial_iB+\partial_jA$; the six cross-products sum to $BA-B^2-BA-AB-A^2+BA=BA-AB-A^2-B^2$. The full coefficient is therefore $\partial_jA-\partial_iB+BA-AB=-(\partial_i\omega_j-\partial_j\omega_i+[A,B])=-F_{ij}(p)$ by [L1]. In the smooth tetrad specialization, evaluating $d\omega+\omega\wedge\omega$ on the commuting coordinate vectors gives exactly this expression, since $d\omega(\partial_i,\partial_j)=\partial_i\omega_j-\partial_j\omega_i$ and $(\omega\wedge\omega)(\partial_i,\partial_j)=\omega_i\omega_j-\omega_j\omega_i$, in agreement with [F2]. For a uniform remainder, choose a compact neighborhood $K'$ of $K$ contained in $V$ and containing the four square sides for $0<\varepsilon<\varepsilon_0$; the $C^2$ coefficients and derivatives are bounded there. Taylor remainders in single integrals are uniformly $O(\varepsilon^3)$; replacing either coefficient in the second iterated integral by its value at $p$ also incurs $O(\varepsilon^3)$, since each coefficient differs by $O(\varepsilon)$ over these length-$\varepsilon$ sides. If $M$ bounds coefficient norms in the fixed submultiplicative norm, iterated-integral terms of order $m\ge3$ are bounded by $M^m\varepsilon^m/m!$, whose sum is $O(\varepsilon^3)$. Multiplying four expansions preserves the uniform remainder order. [given, F1, F2, F3, F4, L1, step 1.1, step 2.1, algebra] ∎
