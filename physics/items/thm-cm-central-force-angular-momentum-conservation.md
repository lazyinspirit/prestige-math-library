---
id: thm-cm-central-force-angular-momentum-conservation
kind: theorem
title: "Conservation of the angular momentum vector along a central-force trajectory and its orthogonality to position and velocity"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-central-force-trajectory, lem-cm-derivative-of-pairings-of-curves, def-vector-valued-derivative-and-integral, def-euclidean-inner-product, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, cor-vector-valued-ftc-and-lipschitz-bound, def-interval]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.5.4, printed p. 31, Eqs. (2.83)-(2.84): the orbit lies in a plane perpendicular to the conserved angular momentum"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.3 Motion in a General Central Force-Field, Eqs. (299)-(304): the angular first integral $r^2\\dot\\theta=h$ in polar coordinates"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node44.html"
---

## Statement

Let $\mu>0$, let $J_0\subseteq(0,\infty)$ be an open interval, let
$U:J_0\to\mathbb R$ be of class $C^2$, let $I\subseteq\mathbb R$ be an interval
with at least two points, and let $r:I\to\mathbb R^3$ be a central-force
trajectory for $(\mu,U)$ with angular momentum vector
$j=\mu\,r\times r'$ ([[def-cm-central-force-trajectory]]). Then:

1. $j$ is differentiable on $I$ with $j'(t)=0$ for every $t\in I$; hence $j$ is
   constant on $I$;
2. for every $t\in I$, $\langle r(t),j(t)\rangle=0$ and
   $\langle r'(t),j(t)\rangle=0$.

## Facts & Assumptions

**Given:** A central-force trajectory $r$ for $(\mu,U)$ on an interval $I$ with at least two points.

[L1] For differentiable curves $u,v:I\to\mathbb R^3$ the cross product $u\times v$ is differentiable with $(u\times v)'=u'\times v+u\times v'$; moreover sums, and scalar multiples of curves, differentiate by the usual rules ([[lem-cm-derivative-of-pairings-of-curves]]).

[L2] The trajectory satisfies $r''=-\bigl(U'(|r|)/(\mu|r|)\bigr)r$ on $I$, where $|x|=\lVert x\rVert_2$ ([[def-cm-central-force-trajectory]], [[def-vector-valued-derivative-and-integral]]).

[L3] The cross product is bilinear and alternating, so $u\times u=0$ and $(u\times v)\perp u$, $(u\times v)\perp v$; orthogonality means vanishing Euclidean inner product ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]]).

[L4] If $f:[a,b]\to\mathbb R^3$ is differentiable with integrable $f'$, then $\int_a^b f'=f(b)-f(a)$ ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the curve $j=\mu(r\times r')$ is differentiable with $$j'=\mu\bigl(r'\times r'+r\times r''\bigr)=\mu\,r\times r''.$$ [given, L1, algebra]

2.1 Substituting [L2] and using alternation [L3], $$j'=\mu\,r\times\Bigl(-\frac{U'(|r|)}{\mu|r|}\,r\Bigr)=-\frac{U'(|r|)}{|r|}\,r\times r=0\qquad\text{on }I.$$ [step 1.1, L2, L3, algebra]

3.1 Let $a,b\in I$ with $a<b$. Then [L4] applied to $j$ gives $\int_a^b j'=j(b)-j(a)$; since $j'$ is the zero curve by step 2.1, the integral vanishes and $j(b)=j(a)$. As $a,b$ were arbitrary, $j$ is constant on $I$. [step 2.1, L4]

4.1 For every $t\in I$, [L3] gives $\langle r(t),j(t)\rangle=\mu\langle r(t),r(t)\times r'(t)\rangle=0$ and $\langle r'(t),j(t)\rangle=\mu\langle r'(t),r(t)\times r'(t)\rangle=0$: the cross product is orthogonal to each factor. [L3, algebra] ∎
