---
id: lem-nonsingular-complex-algebraic-curve-holomorphic-charts
kind: lemma
title: Local holomorphic charts on nonsingular complex algebraic curves
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-holomorphic-implicit-function-theorem
  - def-affine-algebraic-set
  - def-jacobian-matrix-affine-algebraic-set
  - def-projective-space-points
  - def-initial-and-final-topology
  - thm-initial-and-final-characteristic-properties
  - def-continuous-map-top
  - def-homeomorphism-and-open-maps
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - thm-complex-numbers-are-the-real-coordinate-plane
  - def-riemann-surface-and-holomorphic-atlas
forward_refs: [ex-nonsingular-algebraic-curve-charts]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2, Examples 1.9(iii)–(iv), printed pp. 10–11: a zero set with nonvanishing gradient, and the projective hypersurface defined by a homogeneous polynomial, are Riemann surfaces. The present lemma isolates the local graph chart that those arguments use."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 1–2, examples of Riemann surfaces and the graph description of a smooth curve; used as an independent cross-check of the coordinates, not as a source of the proof."
---

## Statement

Let $C$ be a complex algebraic curve, meaning a one-dimensional algebraic set
over $\mathbb C$ ([[def-affine-algebraic-set]]), and let $p\in C$ lie either in
$\mathbb C^N$ (affine case) or in a standard affine chart of $\mathbb{CP}^N$
with its coordinates $(\zeta_1/\zeta_i,\dots)$ (projective case,
[[def-projective-space-points]]). Assume that near $p$ the curve is the common
zero set of holomorphic functions $f_1,\dots,f_{N-1}$ on a neighbourhood of $p$,
and that their complex Jacobian matrix at $p$ has rank $N-1$. Here the
matrix $J_F(p)=(\partial f_i/\partial t_j(p))$ uses the equation-row and
coordinate-column convention of
[[def-jacobian-matrix-affine-algebraic-set]], extended directly to the stated
local holomorphic functions by their complex partial derivatives; this hypothesis is the
**Jacobian-rank sense** of nonsingularity used in this pair.

Then there are an index $j$, a plane domain $A\subseteq\mathbb C$ and a
holomorphic map $\phi:A\to\mathbb C^{N-1}$ such that, after permuting the
coordinates so that the $j$-th coordinate comes first,
$C$ agrees near $p$ with the graph $\{(z,\phi(z)):z\in A\}$, and the projection
$(z,\phi(z))\mapsto z$ is a homeomorphism of that neighbourhood of $p$ in $C$
onto the plane domain $A$ whose inverse $z\mapsto(z,\phi(z))$ is holomorphic:
one free ambient coordinate is a local parameter. Moreover, if two such local
parameters $z$ and $w$ are defined on overlapping pieces, coming from the same
ambient chart or from two standard affine charts, then the transition
$z\mapsto w$ is holomorphic wherever both are defined.

## Facts & Assumptions

**Given:** A complex algebraic curve $C$, a point $p$ of $C$, local holomorphic functions $f_1,\dots,f_{N-1}$ with $F=(f_1,\dots,f_{N-1})$ whose Jacobian at $p$ has rank $N-1$, and the hypothesis that $C$ agrees with $F^{-1}(0)$ near $p$.

[F1] Let $m,n\ge1$, $U\subseteq\mathbb C^m\times\mathbb C^n$ open and $f:U\to\mathbb C^n$ holomorphic with $f(a,b)=0$ and $\det(\partial f_j/\partial w_k(a,b))\ne0$; then there are neighbourhoods $A$ of $a$, $B$ of $b$ and a unique holomorphic $\varphi:A\to B$ with $f(z,w)=0\iff w=\varphi(z)$ for $(z,w)\in A\times B$ ([[thm-holomorphic-implicit-function-theorem]]).

[F2] An affine algebraic set is $V(S)=\{a\in k^n:f(a)=0\ \text{for all }f\in S\}$ and $\mathbf A^n_{\mathbb C}=\mathbb C^n$ ([[def-affine-algebraic-set]]).

[F3] For a polynomial generating list, the Jacobian matrix has equation rows and coordinate columns ([[def-jacobian-matrix-affine-algebraic-set]]). For the local holomorphic functions in the hypothesis, define $J_F(p)$ by the same displayed array of their existing complex partial derivatives. Thus rank $N-1$ means an $(N-1)\times(N-1)$ minor is nonzero. This extension of notation does not identify an arbitrary holomorphic list with a polynomial ideal.

[F4] $\mathbb{CP}^N=(\mathbb C^{N+1}\setminus\{0\})/\sim$ with $a\sim b$ exactly when $b=\lambda a$ for some $\lambda\in\mathbb C^\times$, classes written $[a_0:\cdots:a_N]$ ([[def-projective-space-points]]).

[F5] For the final topology of a single surjection, a function $k$ out of the quotient is continuous if and only if $k\circ q$ is continuous ([[thm-initial-and-final-characteristic-properties]], [[def-initial-and-final-topology]]).

[F6] Sums, products and quotients of holomorphic functions of several variables are holomorphic, the quotient on the open set where its denominator does not vanish ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[F7] A chart on a topological space is a homeomorphism of an open set onto an open subset of $\mathbb C$, and compatible charts have holomorphic transitions ([[def-riemann-surface-and-holomorphic-atlas]]).

[F8] The bijection $\Phi(a+bi)=(a,b)$ identifies $\mathbb C$ with $\mathbb R^2$, so coordinatewise $\mathbb C^m$ is read as $\mathbb R^{2m}$; products of continuous maps are continuous, and a continuous bijection with continuous inverse is a homeomorphism ([[thm-complex-numbers-are-the-real-coordinate-plane]], [[def-continuous-map-top]], [[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 (A free coordinate exists.) If $N=1$, there are no defining functions or dependent coordinates: the sole ambient coordinate is free, and $C$ agrees locally with an open subset of $\mathbb C$ by the empty zero-set condition. Write $w\in\mathbb C^0$ for the unique empty coordinate tuple in this case. If $N\ge2$, the Jacobian matrix of $F$ at $p$ has rank $N-1$, so some $(N-1)\times(N-1)$ minor is invertible; permute the ambient coordinates so that the columns of that minor are the last $N-1$ and write the permutation as the invertible linear change of names $z=(z_1,w)$, $w\in\mathbb C^{N-1}$, with $p=(p_1,p')$. [F3, given]

1.2 (Standard affine charts are homeomorphisms with holomorphic transitions.) For $i\in\{0,\dots,N\}$ put $U_i=\{[\zeta]:\zeta_i\ne0\}\subseteq\mathbb{CP}^N$ and $p_i(\zeta)=(\zeta_k/\zeta_i)_{k\ne i}\in\mathbb C^N$; the section $s_i(w)=[w_0:\cdots:w_{i-1}:1:w_{i+1}:\cdots:w_N]$ satisfies $p_i\circ s_i=\mathrm{id}$ and $s_i\circ p_i=\mathrm{id}_{U_i}$, so $p_i$ is a bijection. The preimage $q^{-1}(U_i)=\{\zeta:\zeta_i\ne0\}$ is open and saturated, hence $U_i$ is open by the quotient topology [F5]. The restriction $q:q^{-1}(U_i)\to U_i$ is a quotient map because $U_i$ is open and saturated. Thus $p_i$ is continuous by [F5], since $p_i\circ q$ is the continuous coordinate-ratio map on $q^{-1}(U_i)$; $s_i$ is continuous because it is the quotient of the continuous map sending $w$ to its normalized coordinate vector. These coordinate formulas are holomorphic where their denominators do not vanish by [F6]; thus $p_i:U_i\to\mathbb C^N$ is a homeomorphism, and for $i\ne j$ the transition $p_j\circ p_i^{-1}(w)=(w_k/w_j)_{k\ne j}$ is holomorphic on its domain $\{w:w_j\ne0\}$. [F4, F5, F6, F8]

2.1 (The curve is locally a graph.) If $N=1$, choose a connected plane neighbourhood $A$ of $p$ contained in the local open piece of $C$ from step 1.1; with $B=\mathbb C^0$ and the unique map $\phi:A\to B$, the piece $C\cap(A\times B)$ is its graph. If $N\ge2$, apply [F1] with $m=1$, $n=N-1$, $a=p_1$, $b=p'$ to $F$ to obtain a plane domain $A$ containing $p_1$ (after shrinking to the connected component of the first coordinate of the neighbourhood), a domain $B\ni p'$ and a holomorphic $\phi:A\to B$ with $F(z,w)=0\iff w=\phi(z)$ on $A\times B$; because $C$ agrees near $p$ with $F^{-1}(0)$, one has $C\cap(A\times B)=\{(z,\phi(z)):z\in A\}$. [F1, F2, step 1.1, given]

3.1 (The free coordinate is a chart.) On the piece $V:=C\cap(A\times B)$ the projection $\pi(z,\phi(z))=z$ is the restriction of the continuous coordinate function $z_1$ and has the continuous inverse $z\mapsto(z,\phi(z))$ built from the holomorphic, hence continuous, $\phi$; so $\pi:V\to A$ is a homeomorphism onto the plane domain $A$ with holomorphic inverse, i.e. a chart for a holomorphic atlas on $C$. [F7, F8, step 2.1]

4.1 (Projective case.) If $p$ lies in a standard affine chart $U_i$ of $\mathbb{CP}^N$, step 1.2 identifies $U_i$ with $\mathbb C^N$ by a homeomorphism whose transitions to any other standard affine chart are holomorphic, and the hypothesis of the lemma is imposed in these coordinates, so the construction of steps 1.1–3.1 applies verbatim in the chart and supplies the local parameter at $p$; the same chart transition is used when a second parameter comes from another affine chart. [step 1.2, step 2.1, step 3.1, given]

5.1 (Transitions of local parameters are holomorphic.) Let $c_1(u)=q_1(u)$ and $c_2(v)$ be two such parameters, where $q_1(u)$ is the point whose free coordinate equals $u$; by step 2.1 every ambient coordinate of a point of the graph is either the free coordinate $u$ or a component of $\phi(u)$, hence a holomorphic function of $u$, so the second free coordinate $w(u)$ and with it the transition $u\mapsto w(u)$ is holomorphic; if the two parameters come from different standard affine charts, then the passage between the two affine coordinate systems is the holomorphic transition of step 1.2, and a composite of holomorphic functions is holomorphic. [F6, step 1.2, step 2.1, step 4.1]

6.1 (Conclusion.) Steps 2.1 and 3.1 exhibit, in the affine case, a plane domain $A$ and a homeomorphism of a neighbourhood of $p$ in $C$ onto $A$ with holomorphic inverse, i.e. a chart given by one free ambient coordinate; step 4.1 gives the same in the projective case inside a standard affine chart, and step 5.1 shows that all such local parameters have holomorphic transition maps, so the local parameters form a holomorphic atlas on the pieces where they are defined. [step 3.1, step 4.1, step 5.1] ∎

## Source locator

Looijenga, *Riemann Surfaces*, Ch. 1 §2, Examples 1.9(iii)–(iv), printed
pp. 10–11, obtains holomorphic charts on a zero set with nonvanishing gradient
and on a projective hypersurface from the holomorphic implicit function theorem;
the dehomogenized equations of a projective hypersurface are used in the
standard affine charts $\zeta_i\ne0$. The present lemma records the local
consequence in the form used by this pair: the free ambient coordinate is a
chart, and any two such local parameters transform holomorphically. The
Jacobian-rank hypothesis is stated explicitly because a nonsingular point of a curve of
codimension $N-1$ is exactly a point at which the local defining equations have
independent differentials, and the implicit function theorem applies to a
chosen invertible minor of that Jacobian matrix.

## Remarks

No compactness, connectedness or global atlas statement is claimed here; those
belong to [[ex-nonsingular-algebraic-curve-charts]].
