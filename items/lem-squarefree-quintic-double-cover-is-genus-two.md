---
id: lem-squarefree-quintic-double-cover-is-genus-two
kind: lemma
title: Smooth double cover from a squarefree quintic has genus two
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-different-divisor-curve-map
  - def-finite-morphism-schemes
  - def-krull-dimension-of-a-ring
  - def-nonconstant-morphism-curves-degree
  - def-proper-morphism
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - lem-composite-finite-proper-morphism-proper
  - lem-projective-line-curve-and-divisor-basics
  - cor-dimension-preserved-by-integral-extensions
  - cor-finite-morphism-proper
  - thm-canonical-bundle-ramification-formula
  - thm-jacobian-criterion-smooth-morphism
  - thm-riemann-hurwitz-complete
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves, Lemma 53.12.2 (tag 0C1D)"
      url: https://stacks.math.columbia.edu/tag/0C1D
    - title: "Bjorn Poonen, Rational Points on Varieties, §9.5.2, printed pp. 287–288"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field with $\operatorname{char}k\ne2$,
let $c\in k^\times$, and let
$$f(x)=\prod_{i=1}^{5}(x-a_i)$$
for pairwise distinct elements $a_1,\ldots,a_5\in k$. Put
$g(u)=\prod_{i=1}^{5}(1-a_i u)$. Glue
$$U=\operatorname{Spec}k[x,y]/(c y^2-f(x))$$
to
$$V=\operatorname{Spec}k[u,w]/(c w^2-u g(u))$$
on the loci $x\ne0$ and $u\ne0$ by $u=x^{-1}$ and $w=u^3y$. The resulting
curve $C$ is smooth, proper and geometrically integral over $k$. The maps
$x$ on $U$ and $u$ on $V$ define a finite morphism $\pi:C\to\mathbb P^1_k$
of degree two whose different divisor has degree six; consequently $C$ has
genus two. Its unique point above infinity is the point $u=w=0$, and $x$
has a pole there.

## Statement references

[The Stacks Project, Lemma 53.12.2 (tag 0C1D)](https://stacks.math.columbia.edu/tag/0C1D)

[Poonen, §9.5.2, printed pp. 287–288](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** AC, a field $k$ of characteristic different from two, $c\ne0$, and
five distinct $a_i\in k$, with $f$ and the glued scheme $C$ as in the
Statement.

[A1] AC: every family of nonempty sets has a choice function.
[[def-axiom-of-choice]]

[F1] The projective line is a smooth proper geometrically integral curve of
genus zero, and a finite morphism composed with a proper morphism is proper.
[[def-projective-line-two-affine-cover-and-twisting-sheaf]]
[[lem-projective-line-curve-and-divisor-basics]]
[[lem-composite-finite-proper-morphism-proper]]

[F2] For a finite separable morphism of smooth proper geometrically integral
curves, Riemann–Hurwitz gives
$2g(C)-2=\deg(\pi)(2g(\mathbb P^1)-2)+\deg(R_\pi)$, where $R_\pi$ is the
effective different divisor. [[thm-riemann-hurwitz-complete]]

[F3] The different divisor is the divisor of the cokernel of
$\pi^*\Omega^1_{\mathbb P^1/k}\to\Omega^1_{C/k}$; in local parameters its
coefficient is the order of the pulled-back base differential.
[[def-different-divisor-curve-map]]
[[thm-canonical-bundle-ramification-formula]]

[F4] A finite morphism of curves has degree equal to the degree of its
function-field extension, and the ramification indices above a point, weighted
by residue degrees, sum to at most that degree.
[[def-nonconstant-morphism-curves-degree]]

[F5] The relative Jacobian criterion: a finitely presented affine morphism
given locally by one equation in two variables is smooth at every point where
one partial derivative of that equation is a unit.
[[thm-jacobian-criterion-smooth-morphism]]

[F6] Each standard affine chart of the projective line has a coordinate ring
of Krull dimension one. An injective integral extension of nonzero rings
preserves Krull dimension, and a finite morphism has finite coordinate
algebras.
[[cor-dimension-preserved-by-integral-extensions]]
[[def-finite-morphism-schemes]]
[[def-krull-dimension-of-a-ring]]

[F7] A proper morphism is universally closed, so its image is closed.
[[def-proper-morphism]]

[F8] Under the Axiom of Choice, every finite morphism is proper.
[[cor-finite-morphism-proper]]

## Axiom use

The finite gluing and local computations are choice-free. AC is inherited
through the cited projective-line, dimension, different, degree, Jacobian,
finite-properness and Riemann–Hurwitz suppliers [F1]–[F6] and [F8].

## Proof

**Proof technique:** direct; glue two finite double-cover charts, check
smoothness and geometric integrality, compute the local different, and apply
Riemann–Hurwitz.

1.1 On $U$ and $V$ the coordinate algebras are free of rank two over $k[x]$ and $k[u]$, respectively, because $c$ is a unit and each displayed equation is monic in $y$ or $w$ after division by $c$. The maps from $k[x]$ and $k[u]$ are injective, so [F6] shows that both charts have dimension one. The transition formulas agree on the overlap since $u^6f(u^{-1})=u g(u)$, so the two charts define a finite locally free morphism $\pi:C\to\mathbb P^1_k$ of rank two. Composing this finite morphism with the proper structure map of $\mathbb P^1_k$ is proper, so $C$ is proper over $k$ and has dimension one. [A1, F1, F6, given, construct, algebra]

2.1 After extending scalars to an algebraic closure $\bar k$, the polynomial $f$ still has five simple roots. It is not a square in $\bar k(x)$, since its valuation at each root is one, so $c y^2-f(x)$ is irreducible over $\bar k(x)$. The coordinate algebra of $U_{\bar k}$ is free over $\bar k[x]$ and injects into its localization at all nonzero polynomials in $x$; that localization is a field, so $U_{\bar k}$ is integral. The overlap $D(x)=D(u)$ is a nonempty open of this integral chart. The coordinate algebra of $V_{\bar k}$ is free over $\bar k[u]$, so it injects into its localization at $u$; by the transition formulas that localization is the corresponding localization of the integral chart $U_{\bar k}$. Hence $V_{\bar k}$ is integral and the overlap is dense in both charts. Their gluing $C_{\bar k}$ is therefore integral. The same irreducibility shows that the generic fibre of $\pi$ over $k$ is a field of degree two, so $\pi$ is dominant of degree two. By [F8], the finite map $\pi$ is proper; [F7] then makes its image closed. The image contains the generic point of $\mathbb P^1_k$, so it is all of $\mathbb P^1_k$. Thus $\pi$ is finite surjective of degree two, and $C_{\bar k}$ integral proves geometric integrality. [F7, F8, given, algebra, step 1.1]

2.2 At any point of $U$, if $y$ is a unit then the partial derivative $2cy$ of $c y^2-f(x)$ is a unit. If $y$ belongs to the point's prime ideal, then $f(x)=c y^2$ does too; the distinct roots give $f'(a_i)=\prod_{j\ne i}(a_i-a_j)\ne0$, so $f$ and $f'$ are coprime and that prime cannot contain $f'(x)$. Thus the other partial derivative $-f'(x)$ is a unit. On $V$, points with $u\ne0$ lie in $U$, while the only point with $u=0$ is $(u,w)=(0,0)$ and the partial derivative in $u$ of $c w^2-u g(u)$ there is $-g(0)=-1$. The relative Jacobian criterion [F5] proves smoothness at every point of both charts, so $C$ is smooth over $k$. [F5, given, algebra, step 1.1]

3.1 The generic function-field extension is defined by $c y^2=f(x)$; its quadratic minimal polynomial has nonzero derivative $2cy$ at $y$, so $\pi$ is separable because $\operatorname{char}k\ne2$. At each of the five finite roots $a_i$, the unique point above it has local parameter $y$ and the equation gives $x-a_i=(c/f'(a_i))y^2+O(y^4)$; hence $dx/dy=2(c/f'(a_i))y+O(y^3)$ has order one. Away from the roots and infinity, $y$ is a unit and the relative differential module is generated by $dy$ with relation $2cy\,dy=0$, so it vanishes and the different coefficient is zero. [F3, given, algebra, step 2.1, step 2.2]

4.1 At infinity put $u=1/x$. The chart $V$ has the unique point $(u,w)=(0,0)$ above $u=0$; if $e$ is its ramification index, then the equation gives $2\operatorname{ord}(y)=-5e$, so $e$ is even; since the map has degree two by step 2.1, $e=2$ and the residue degree is one. For a local parameter $v$ there, $u=bv^2+O(v^3)$ with $b\ne0$, and $2\ne0$ in $k$, so $du/dv$ has order one. Thus $x=u^{-1}$ has a pole there, the different coefficient at infinity is one, and the total different degree is the five finite coefficients plus this one, namely six. [F3, F4, given, algebra, step 1.1, step 2.1, step 3.1]

5.1 Apply [F2] to the finite separable map of step 1.1; its smoothness and geometric integrality were proved in steps 2.1–2.2, and its different degree was computed in steps 3.1–4.1. Its degree is two, the target genus is zero, and its different degree is six, so $2g(C)-2=2(-2)+6=2$. Therefore $g(C)=2$. [F1, F2, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎

