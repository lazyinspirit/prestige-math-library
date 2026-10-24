---
id: thm-local-normal-form-holomorphic-map-riemann-surfaces
kind: theorem
title: Local power-map normal form on Riemann surfaces
status: published
origin: pipeline
pipeline_run: frontier-36-complete
landmark: true
deps:
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-riemann-surface-and-holomorphic-atlas
  - thm-local-normal-form-holomorphic-map
  - def-local-degree-holomorphic-map
  - thm-zero-order-factorization-holomorphic-function
  - thm-identity-theorem-holomorphic-functions
  - def-complex-domain
  - def-biholomorphic-map
  - def-connected-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 3, Theorem 3.2 and its proof, printed pp. 16–17: a nonconstant holomorphic map between Riemann surfaces has the local form z ↦ z^e in suitable coordinates."
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 4 §2, the multiplicity mult_p(f) and the normal form z ↦ z^{mult_p(f)}, printed pp. 43–44."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $f:X\to Y$ be a nonconstant holomorphic map between Riemann surfaces
([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]) and let $x\in X$.
Then there are holomorphic coordinates $\varphi$ on a neighbourhood of $x$ with
$\varphi(x)=0$ and $\psi$ on a neighbourhood of $f(x)$ with $\psi(f(x))=0$ such
that

$$\psi\circ f\circ\varphi^{-1}(z)=z^{e}\qquad\text{for }z\text{ near }0,$$

for a unique positive integer $e$; equivalently, in these coordinates $f$ is the
power map $z\mapsto z^{e}$. Uniqueness means that $e$ does not depend on the
choice of the two coordinates. Moreover $e$ is the local degree
$\deg_x f$ of the chart expression, $e\ge1$, and $e=1$ exactly when $f$ is a
local biholomorphism at $x$.

## Facts & Assumptions

**Given:** A nonconstant holomorphic map $f:X\to Y$ between Riemann surfaces and a point $x\in X$.

[F1] A map between Riemann surfaces is holomorphic when a chart expression $\psi\circ f\circ\varphi^{-1}$ is holomorphic at $\varphi(x)$; the definition is independent of the charts, and charts are homeomorphisms onto open subsets of $\mathbb C$ ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-riemann-surface-and-holomorphic-atlas]]).

[F2] For a nonconstant holomorphic $F$ on a complex domain $\Omega$ and $a\in\Omega$, there are a complex domain $V\subseteq\Omega$ containing $a$ and a biholomorphic $\theta:V\to\theta(V)$ with $\theta(a)=0$ and $F(z)-F(a)=\theta(z)^m$, where $m=\deg_a F\ge1$ is the local degree of $F$ at $a$ ([[thm-local-normal-form-holomorphic-map]], [[def-local-degree-holomorphic-map]]).

[F3] $\deg_a F$ is the order of vanishing at $a$ of $F-F(a)$: $F(z)-F(a)=(z-a)^m q(z)$ with $q(a)\ne0$, and $\deg_a F=1$ exactly when $F'(a)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]], [[def-local-degree-holomorphic-map]]).

[F4] If two holomorphic functions on a complex domain agree on a set with an accumulation point in the domain, then they agree identically ([[thm-identity-theorem-holomorphic-functions]]); a holomorphic map on a connected space that is constant near one point is constant ([[def-connected-space]]).

[F5] A composite of biholomorphic maps between plane domains is biholomorphic, and the inverse of a biholomorphism is holomorphic ([[def-biholomorphic-map]]); the connected component of an open subset of $\mathbb C$ is a complex domain ([[def-complex-domain]]).

## Proof

**Proof technique:** direct.

1.1 (A chart expression of a nonconstant map is never locally constant.) Choose a chart $\varphi_0$ at $x$ and a chart $\psi_0$ at $f(x)$ with $\varphi_0(x)=0$, $\psi_0(f(x))=0$, and put $F_0=\psi_0\circ f\circ\varphi_0^{-1}$, holomorphic near $0$; if $F_0$ were constant on some neighbourhood of $0$, then $f$ would be constant near $x$, and the set $Z$ of points near which $f$ is locally constant would be nonempty, open by definition, and closed because a limit point of $Z$ forces the chart expression to be constant near the limit point by [F4], so $Z=X$ by connectedness of $X$ and $f$ would be constant, a contradiction. [F1, F4, given]

1.2 (The local degree is chart-independent.) Let $F=\psi\circ f\circ\varphi^{-1}$ and $G=\psi'\circ f\circ\varphi'^{-1}$ be chart expressions of $f$ at $x$ with $\varphi(x)=0=\varphi'(x)$ and $\psi(f(x))=0=\psi'(f(x))=0$; writing the transitions as $z=z(u)$ and $w=w(v)$ with $z'(0)\ne0\ne w'(0)$ (they are injective holomorphic maps of complex domains), one has $G(u)=w\bigl(F(z(u))\bigr)$, and [F3] gives $\deg_0 G=\operatorname{ord}_0\bigl(w(F(z(u)))-w(0)\bigr)=\operatorname{ord}_0\bigl(F(z(u))\bigr)=\operatorname{ord}_0 F=\deg_0 F$, because a biholomorphism at $0$ differs from its derivative by a unit and preserves vanishing orders. [F1, F3, F5]

2.1 (Planar normal form for the chart expression.) By step 1.1 the function $F_0$ is not constant on any neighbourhood of $0$, so there is a disc $D$ around $0$ contained in its domain on which $F_0$ is nonconstant; applying [F2] to $F_0|_D$ at $0$ gives a domain $V\subseteq D$, a holomorphic bijection $\theta:V\to\theta(V)$ with $\theta(0)=0$, and $F_0(z)=\theta(z)^m$ on $V$ with $m=\deg_0 F_0\ge1$. [F2, step 1.1, given]

3.1 (Source coordinates putting the expression in power form.) Let $\varphi:=\theta\circ\varphi_0$ on $\varphi_0^{-1}(V)$; it is a chart at $x$ with $\varphi(x)=0$, since $\theta$ is a biholomorphic map of plane domains by [F5], and with $\psi:=\psi_0$ the chart expression becomes $\psi\circ f\circ\varphi^{-1}(u)=F_0(\theta^{-1}(u))=\bigl(\theta(\theta^{-1}(u))\bigr)^m=u^m$ for $u\in\theta(V)$; hence the required coordinates exist with $e=m$. [F5, step 2.1]

4.1 (Uniqueness of the exponent and conclusion.) If another pair of centred coordinates exhibits $f$ as $u\mapsto u^{e'}$, then $e'=\deg_0 G$ for that chart expression $G$, which equals $\deg_0 F_0=m$ by step 1.2, so $e'=e$: the exponent is independent of the charts. By [F3], $m\ge1$, and $m=1$ exactly when $F_0'(0)\ne0$, which is exactly the condition that $f$ is a local biholomorphism at $x$ by [F5] and [F1]; this proves the normal form and all the stated properties. [F1, F3, F5, step 1.2, step 3.1] ∎

## Remarks

The exponent $e=\deg_x f$ is the ramification index
[[def-ramification-index-and-branch-value]] of $f$ at $x$; the normal form
$z\mapsto z^e$ is the reason a nonconstant holomorphic map is locally a branched
covering, and the uniqueness of $e$ proved here is what makes the ramification
index well defined. If $f$ were constant, the chart expression would be locally
constant and no finite positive exponent would exist, so nonconstancy is a
necessary hypothesis, not a convenience.


For a precise local picture, write $D_r=\{z\in\mathbb C:|z|<r\}$.
Shrink the normal-form charts so that $\overline{D_r}$ lies in the source
coordinate image and $\overline{D_{r^e}}$ lies in the target coordinate image,
and put $U=\varphi^{-1}(D_r)$ and $W=\psi^{-1}(D_{r^e})$.
Then $f(U)=W$ and the square below commutes by step 3.1. Its lower sketch
illustrates the case $e=3$: the three marked points over a nonzero $w$ merge
at the centre as $w\to0$.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node (U) at (0,3) {$U\subset X$};
\node (W) at (5,3) {$W\subset Y$};
\node (D) at (0,1.5) {$D_r$};
\node (E) at (5,1.5) {$D_{r^e}$};
\draw[->] (U) -- node[above] {$f|_U$} (W);
\draw[->] (U) -- node[left] {$\varphi|_U$} (D);
\draw[->] (W) -- node[right] {$\psi|_W$} (E);
\draw[->] (D) -- node[above] {$z\mapsto z^e$} (E);
\draw[dashed] (0,-1) circle (1);
\draw[dashed] (5,-1) circle (1);
\fill (0,-1) circle (1.3pt) node[below right] {$0$};
\fill (5,-1) circle (1.3pt) node[below left] {$0$};
\fill (0.65,-1) circle (2pt);
\fill (-0.325,-0.437) circle (2pt);
\fill (-0.325,-1.563) circle (2pt);
\fill (5.55,-1) circle (2pt) node[right] {$w$};
\draw[->] (1.3,-1) -- node[above] {$z\mapsto z^3$} (3.7,-1);
\node at (0,-2.4) {three distinct roots of $w$};
\node at (5,-2.4) {one nonzero value $w$};
\node at (2.5,-3) {local fibre sketch for $e=3$};
\end{tikzpicture}
```

The dashed circles depict the boundaries of open coordinate discs; their
radii in the sketch are schematic. In general, if
$w=\rho e^{i\alpha}\in D_{r^e}\setminus\{0\}$, the points over it have
coordinates $z_k=\rho^{1/e}e^{i(\alpha+2\pi k)/e}$ for
$k=0,\ldots,e-1$. They are distinct and lie in $D_r$, while $0$ has the
single preimage $0$ with multiplicity $e$. Thus $e>1$ gives a ramification
point at $x$ and a branch value at $f(x)$, with ramification order $e-1$;
$e=1$ gives a local biholomorphism. All these descriptions concern the
restriction $f|_U$, and assert no global covering property. The proof above
is independent of the illustration.
