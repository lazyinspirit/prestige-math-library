---
id: def-ramification-index-and-branch-value
kind: definition
title: Ramification index, ramification order and branch value
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
landmark: true
deps:
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-local-degree-holomorphic-map
  - thm-zero-order-factorization-holomorphic-function
  - def-biholomorphic-map
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 4 §2, the multiplicity mult_p(f) of a nonconstant holomorphic map at a point and the normal form z ↦ z^{mult_p(f)}, printed pp. 43–44."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 3, Theorem 3.2 and the following discussion of the multiplicity e_x(f) and of critical points and branch points, printed pp. 16–17."
---

## Definition

Let $f:X\to Y$ be a nonconstant holomorphic map between Riemann surfaces and let
$x\in X$ ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]). By
[[thm-local-normal-form-holomorphic-map-riemann-surfaces]] there are holomorphic
coordinate charts $\varphi$ centred at $x$ and $\psi$ centred at $f(x)$ such that
the chart expression is the power map
$$\psi\circ f\circ\varphi^{-1}(z)=z^{e}\qquad\text{for }z\text{ near }0,$$
with a unique positive integer $e$. Define:

1. the **ramification index** of $f$ at $x$ to be this exponent,
   $$e_x(f):=e\ge1;$$
2. the **ramification order** of $f$ at $x$ to be $e_x(f)-1\ge0$;
3. $x$ to be a **critical point** (or ramification point) of $f$ when
   $e_x(f)>1$, and $f$ to be **unramified at** $x$ when $e_x(f)=1$;
4. a **branch value** of $f$ to be a point $y\in Y$ for which there is a critical
   point $x\in X$ with $f(x)=y$; the set of branch values is the **branch
   locus** of $f$, and the set of critical points is the **critical locus**.

**Conventions.** The index is well defined because the exponent of the normal
form is unique; the proof below records this together with the equivalent
descriptions $e_x(f)=\deg_x(\psi\circ f\circ\varphi^{-1})=
\operatorname{ord}_x(f-f(x))$ in any centred charts
([[def-local-degree-holomorphic-map]]), and $e_x(f)=1$ exactly when $f$ is a
local biholomorphism at $x$ ([[def-biholomorphic-map]]). In particular a
critical point is a point where $f$ is not locally injective, and the set of
critical points is discrete in $X$. A meromorphic function on $X$ is a
holomorphic map to the Riemann sphere
([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]), so the same
index, order and branch language applies to it; a pole of a meromorphic
function is a point where its value is the point at infinity, and says nothing
by itself about ramification. No choice principle is used anywhere in this
definition: an index is a single positive integer determined by local data.

## Facts & Assumptions

**Given:** A nonconstant holomorphic map $f:X\to Y$ between Riemann surfaces and a point $x\in X$.

[F1] There are charts $\varphi$ at $x$, $\psi$ at $f(x)$ with $\varphi(x)=0=\psi(f(x))$ and $\psi\circ f\circ\varphi^{-1}(z)=z^e$ near $0$ for a unique positive integer $e$; with these coordinates $e$ is the local degree $\deg_x$ of the chart expression, $f$ is a local biholomorphism at $x$ exactly when $e=1$, and for every other pair of centred charts the exponent equals the same $e$ ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-biholomorphic-map]]).

[F2] For a nonconstant holomorphic function $F$ on a complex domain and $a$ in the domain, $\deg_aF=\operatorname{ord}_a(F-F(a))\ge1$ is the order of vanishing of $F-F(a)$ at $a$, and $\deg_aF=1$ exactly when $F'(a)\ne0$ ([[def-local-degree-holomorphic-map]], [[thm-zero-order-factorization-holomorphic-function]]).

[F3] A map between Riemann surfaces is a local biholomorphism at $x$ exactly when some, equivalently every, chart expression of it at $x$ has nonzero derivative there ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-biholomorphic-map]]).

**Proof technique:** direct.

## Proof

**Proof technique:** direct.

1.1 (The index exists and is unique.) By [F1] centred charts exhibiting the normal form exist, with a unique positive exponent $e$; since the exponent of any such pair of charts equals $e$, the number $e_x(f):=e$ is independent of the charts, and it is the local degree of the chart expression by [F1]. [F1, given]

2.1 (Equivalent descriptions of the index.) Let $F=\psi\circ f\circ\varphi^{-1}$ be a chart expression with $\varphi(x)=0$; by [F2], $\deg_0 F=\operatorname{ord}_0(F-F(0))$, so $e_x(f)=\deg_0F=\operatorname{ord}_0(F-F(0))$, and $e_x(f)=1$ exactly when $F'(0)\ne0$, which by [F3] is exactly the condition that $f$ be a local biholomorphism at $x$. [F2, F3, step 1.1]

3.1 (Critical points are isolated, and the critical locus is discrete.) Fix $x\in X$ and take the power-form charts of [F1] on a sufficiently small disc about $0$, so the local expression is $F(z)=z^e$ with $e\ge1$. Its derivative is $F'(z)=e z^{e-1}$. If $e=1$ this is nowhere zero on the disc; if $e>1$ it vanishes there only at $z=0$. By [F2] and step 2.1, the points with vanishing derivative are exactly the critical points in this chart neighbourhood. Thus every $x$ has a neighbourhood containing no critical point other than possibly $x$ itself, so the critical locus is discrete. By [F1], a critical point is exactly a point at which $f$ is not a local biholomorphism. [F1, F2, step 2.1]

4.1 (Conclusion.) Steps 1.1–3.1 show that $e_x(f)$, the ramification order $e_x(f)-1$, the critical points, and the branch values are well defined, that $e_x(f)\ge1$ with equality exactly at local biholomorphisms, and that the critical locus is discrete; a branch value is by definition the image of a critical point. [step 1.1, step 2.1, step 3.1] ∎



## Remarks

The index $e_x(f)$ is the multiplicity used in [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], where a weighted fibre count $\sum_{x\in f^{-1}(y)}e_x(f)$ is shown to be independent of $y$, and in [[thm-riemann-hurwitz-formula]], where the numbers $e_x(f)-1$ are summed over the critical locus. Both uses require the *finiteness* of the critical locus on a compact surface and not merely its discreteness; that finiteness is a consequence of compactness and is stated and used where it is needed. The local normal form theorem is the only place where the exponent is manufactured, and it is applied to a nonconstant map throughout; a constant map has no honest local power form and is excluded by hypothesis.
