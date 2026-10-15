---
id: lem-qft-cube-poincare-compact-form-inclusion
kind: lemma
domain: mathematics
title: Cube mean estimate and compact form inclusion
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-qft-coercive-polynomial-form-domain, def-compact-linear-operator, thm-cauchy-schwarz-in-an-inner-product-space, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
dependency_roles:
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §2.3, pp.76–83"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 8, pp.48–50"
      url: "https://arxiv.org/pdf/1203.2344v1"
---

## Statement

Assume the finite-dimensional coercive form data and Hilbert space $Q$ of
[[lem-qft-coercive-polynomial-form-domain]]. The inclusion
$J:Q\hookrightarrow H_N$ is compact: the closure in $H_N$ of the image of
every bounded subset of $Q$ is compact in the metric topology. The proof below
uses an explicit cube-mean approximation for each finite $N$ and does not
assume a general Rellich theorem.

## Facts & Assumptions

**Given:** $N\ge1$, the form domain $Q$, its norm, and the injection
$J:Q\to H_N$.

[F1] [[lem-qft-coercive-polynomial-form-domain]]: $Q$ is complete and injects densely into the complete Hilbert space $H_N$; for $u\in Q$, its weak derivatives and weighted function are in $L^2$ and
$$\|u\|_Q^2=\sum_{j=1}^N a_j\|\partial_j u\|_2^2+\|\sqrt{W+1}\,u\|_2^2,$$
with $W(q)\ge1+c|q|^2$.

[F2] [[def-compact-linear-operator]]: a linear map is compact when the closure of the image of every bounded set is compact; it suffices to check the closed unit ball.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: on each $L^2$ space, $|\int f\overline g|\le\|f\|_2\|g\|_2$.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: integrable functions on sigma-finite products have equal iterated integrals; the continuous cube integrands used below are integrable.

## Proof

**Proof technique:** direct.

**Given:** Countable Choice as inherited through [F1], the finite data, and an arbitrary $Q$-bounded set.

1.1 Let $C$ be a cube of side $\delta>0$ and $u\in C_c^\infty(\mathbb R^N;\mathbb C)$, with $u_C:=|C|^{-1}\int_Cu$. Expanding the square and using Fubini on the finite cube gives
$$\int_C|u-u_C|^2=\frac1{2|C|}\int_C\int_C|u(x)-u(y)|^2\,dx\,dy.$$
Telescope $u(x)-u(y)$ through the $N$ coordinate changes and use $|\sum_{j=1}^Nz_j|^2\le N\sum_j|z_j|^2$. For the $j$th change, the fundamental theorem of calculus and Cauchy–Schwarz give $|D_j(x,y)|^2\le\delta\int_{\min(x_j,y_j)}^{\max(x_j,y_j)}|\partial_ju|^2$. For fixed values of the other coordinates and fixed $s\in[0,\delta]$, the measure of pairs $(x_j,y_j)$ whose segment contains $s$ is $2s(\delta-s)\le\delta^2/2$; integrating the displayed bound over the cube variables and dividing by $2|C|$ therefore yields the safe estimate
$$\|u-u_C\|_{L^2(C)}^2\le N\delta^2\sum_{j=1}^N\|\partial_j u\|_{L^2(C)}^2.$$
It applies to complex $u$ because the squared-modulus Cauchy–Schwarz inequality is used. [F3, F4, algebra]

1.2 The estimate of step 1.1 passes to every $u\in Q$: approximate $u$ in the $Q$ norm by elements of $C_c^\infty$ (the defining completion), restrict to $C$, and use [F1] to pass the $L^2$ and derivative limits. [step 1.1, F1]

2.1 For $R>0$ and $u\in Q$, the coercive weight gives
$$\int_{|q|>R}|u(q)|^2\,dq\le\frac1{cR^2}\int_{|q|>R}c|q|^2|u(q)|^2\,dq\le\frac1{cR^2}\|u\|_Q^2.$$
Thus the $L^2$ tails of the $Q$ unit ball are uniformly small for large $R$. [F1, algebra]

2.2 Fix $\varepsilon>0$. Choose $R$ so the squared tail in step 2.1 is below $\varepsilon^2/16$, and partition $[-R,R]^N$ into finitely many cubes of side $\delta$ so that the sum of the squared mean-approximation errors in step 1.2 is below $\varepsilon^2/16$. Replacing $u$ on each cube by its mean and setting it to zero outside the large cube then approximates every $u$ in the $Q$ unit ball to $L^2$ error below $\varepsilon/2$. [step 1.2, step 2.1, F1, choose]

2.3 The resulting vectors of cube means lie in a bounded subset of a finite-dimensional complex coordinate space: $\|u\|_2\le\|u\|_Q\le1$ and each cube has fixed positive volume. Subdivide a bounded real-and-imaginary coordinate box into finitely many boxes of sufficiently small side length. The associated finitely many piecewise-constant functions approximate every vector of means to $L^2$ error below $\varepsilon/2$. Combining with step 2.2 gives a finite $\varepsilon$-net for the image of the $Q$ unit ball. Scaling shows that the image of every bounded $Q$ set is totally bounded. [step 2.2, F1, algebra]

3.1 Let $K$ be the $H_N$ closure of the image of the $Q$ unit ball. It is complete because it is closed in the complete space $H_N$, and it is totally bounded because a finite $\varepsilon/2$-net for the image is an $\varepsilon$-net for its closure. To prove compactness directly, suppose an open cover of $K$ has no finite subcover. At each $n\ge1$, take the explicit finite net from step 2.3 at radius $2^{-n-2}$; its closed balls of radius $2^{-n-1}$ cover $K$. Starting with $C_0=K$, choose the least ball index for which $C_n:=C_{n-1}\cap\overline B(p_n,2^{-n-1})$ has no finite subcover. Such an index exists, since otherwise finitely many finite subcovers would cover $C_{n-1}$. Each $C_n$ is nonempty, closed, nested, and has diameter at most $2^{-n}$. For $m>n$, any point of nonempty $C_m$ lies in both selected balls, so $\|p_m-p_n\|_2\le2^{-m-1}+2^{-n-1}$; hence $(p_n)$ is Cauchy and converges to some $p\in H_N$. Since $C_n$ is nonempty and is contained in both $K$ and $\overline B(p_n,2^{-n-1})$, the distance from $p_n$ to $K$ is at most $2^{-n-1}$. Therefore $\operatorname{dist}(p,K)\le\|p-p_n\|_2+2^{-n-1}\to0$; closedness of $K$ gives $p\in K$. For fixed $n$ and each $m>n$, $C_m\subseteq C_n$ and $C_m\subseteq\overline B(p_m,2^{-m-1})$, so $\inf_{y\in C_n}\|p_m-y\|_2\le2^{-m-1}$. The triangle inequality gives $\inf_{y\in C_n}\|p-y\|_2\le\|p-p_m\|_2+2^{-m-1}\to0$; since $C_n$ is closed, $p\in C_n$. An open set of the cover containing $p$ contains $K\cap B(p,r)$ for some $r>0$; for large $n$, $\operatorname{diam}(C_n)<r$, so that one open set covers $C_n$, a contradiction. Thus $K$ is compact. The net grids are explicitly indexed by finite integer boxes, and each recursive ball choice is the least admissible index; no choice beyond the inherited countable foundation is used. [step 2.3, F1, algebra]

4.1 Step 3.1 proves that the closed-unit-ball image under $J$ has compact closure; applying the equivalent criterion in [F2] to the linear inclusion proves that $J:Q\hookrightarrow H_N$ is compact. [step 3.1, F2] ∎
