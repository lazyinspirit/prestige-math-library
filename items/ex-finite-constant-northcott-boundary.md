---
id: ex-finite-constant-northcott-boundary
kind: example
title: A finite constant field gives bounded-height finiteness for a non-isotrivial quadratic map
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-finite-field-and-its-order
  - def-one-variable-function-field-with-constant-field
  - lem-rational-function-field-has-exact-constant-field
  - lem-rational-function-degree-on-projective-line
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - thm-projective-space-proper-over-base
  - cor-polynomial-ring-over-a-field-is-a-pid
  - lem-polynomial-algebras-over-fields-are-integrally-closed
  - thm-normality-is-local-for-domains
  - def-degree-divisor-proper-curve
  - def-rational-map-on-projective-line-degree
  - def-fixed-point-multiplier-rational-map
  - lem-fixed-point-multiplier-invariant-under-mobius-conjugacy
  - def-isotrivial-rational-map-over-function-field
  - def-function-field-height-on-projective-line
  - thm-function-field-projective-height-well-defined
  - thm-function-field-dynamical-height-growth-and-functional-equation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.2"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Joseph H. Silverman, Arizona Winter School lecture notes, §§5.1–5.2"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice. Let $q$ be an odd prime power,
$K=\mathbb F_q(t)$, and
$\phi(z)=z^2+t$. Then $\phi$ is non-isotrivial after every finite extension
of $K$. For every real $B\ge0$, the set
$$\{P\in\mathbb P^1(K):\widehat h_{\phi,K}(P)\le B\}$$
is finite. In particular, for $P\in\mathbb P^1(K)$,
$\widehat h_{\phi,K}(P)=0$ if and only if two forward iterates of $P$
coincide.

## Example references

[[def-axiom-of-choice]]

[[def-finite-field-and-its-order]]

[[def-one-variable-function-field-with-constant-field]]

[[lem-rational-function-field-has-exact-constant-field]]

[[lem-rational-function-degree-on-projective-line]]

[[def-rational-map-on-projective-line-degree]]

[[def-fixed-point-multiplier-rational-map]]

[[lem-fixed-point-multiplier-invariant-under-mobius-conjugacy]]

[[def-isotrivial-rational-map-over-function-field]]

[[def-function-field-height-on-projective-line]]

[[thm-function-field-projective-height-well-defined]]

[[thm-function-field-dynamical-height-growth-and-functional-equation]]

## Facts & Assumptions

**Given:** The Axiom of Choice, an odd prime power $q$, the finite field $k=\mathbb F_q$, the
function field $K=k(t)$, and $\phi(z)=z^2+t$.

[F1] The field $K/k$ has transcendence degree one and exact constants $k$.
Take $C=\mathbb P^1_k$; its two standard affine-line charts have coordinate
rings $k[t]$ and $k[u]$, which are integrally closed domains, and their
nonempty overlap makes $C$ integral. The curve has dimension one and is
proper over $k$, so it is a normal proper curve model of $K$. The map $\phi$
has degree two. ([[def-finite-field-and-its-order]],
[[def-one-variable-function-field-with-constant-field]],
[[lem-rational-function-field-has-exact-constant-field]],
[[def-projective-line-two-affine-cover-and-twisting-sheaf]],
[[thm-projective-space-proper-over-base]],
[[cor-polynomial-ring-over-a-field-is-a-pid]],
[[lem-polynomial-algebras-over-fields-are-integrally-closed]],
[[thm-normality-is-local-for-domains]],
[[def-degree-divisor-proper-curve]],
[[def-rational-map-on-projective-line-degree]])

[F2] Fixed points correspond under Möbius conjugacy and each corresponding
pair has the same multiplier. ([[lem-fixed-point-multiplier-invariant-under-mobius-conjugacy]])

[F3] For $P=[a:b]\in\mathbb P^1(k(t))$, with coprime polynomials
$a,b\in k[t]$ and $\deg 0=-\infty$,
$$h_K(P)=\log q\max(\deg a,\deg b).$$
For nonconstant $a/b$, this follows from the degree formula for rational maps
on the projective line; constant points and $[1:0]$ have height zero.
For all points, $|\widehat h_{\phi,K}(P)-h_K(P)|\le C_\phi$, the canonical
height is nonnegative, and it satisfies the functional equation.
([[def-function-field-height-on-projective-line]],
[[lem-rational-function-degree-on-projective-line]],
[[thm-function-field-projective-height-well-defined]],
[[thm-function-field-dynamical-height-growth-and-functional-equation]])

## Proof

1.1 The fixed points of $\phi$ are $\infty$ and the two roots
$\alpha_1,\alpha_2$ of $z^2-z+t=0$ in a finite splitting extension. The
discriminant $1-4t$ is nonzero, so the roots are distinct. In the local
coordinate $w=1/z$ at infinity, $\phi$ is
$w\mapsto w^2/(1+t w^2)$, whose derivative at $w=0$ is zero. The multipliers
at the two finite fixed points are $2\alpha_1$ and $2\alpha_2$; they are
nonzero because $q$ is odd and $\alpha_1\alpha_2=t\ne0$. Their product is
$4t$. [F1, given, algebra]

1.2 Suppose that $\phi$ became isotrivial over a finite extension $L/K$.
Enlarge $L$ finitely to contain the fixed points, the conjugating
transformation, and their images under that transformation. Let $k_L$ be the
full constant field of this enlarged $L$. The conjugate map is defined over
$k_L$, so its fixed-point equation has coefficients in $k_L$; each fixed
point in $L$ is therefore algebraic over $k_L$ and belongs to the full
constant field of $L$. Its multiplier is a rational expression in those
coordinates and coefficients, so it too lies in that constant field. By
[F2], the multiplier multiset is unchanged by conjugacy. Step 1.1 shows that
it has exactly one zero and two nonzero elements, whose product must therefore
belong to the constant field. But this product is $4t$, which is
transcendental over every algebraic extension of $k$. This contradiction
proves that $\phi$ is non-isotrivial after every finite extension.
[F1, F2, step 1.1, algebra]

2.1 If $H<0$, then no point has $h_K(P)\le H$ because the formula in [F3]
is nonnegative. If $H\ge0$ and $h_K(P)\le H$, then [F3] implies
$\max(\deg a,\deg b)\le H/\log q$. There are only finitely many
polynomials of degree at most $N:=\lfloor H/\log q\rfloor$: each is determined by its
$N+1$ coefficients in the finite field $k$, so there are at most
$q^{N+1}$ such polynomials and at most $q^{2(N+1)}$ ordered pairs. Hence
there are finitely many coprime pairs and projective points. Thus every
bounded ordinary-height set in $\mathbb P^1(K)$ is finite.
[F3, given, algebra]

2.2 If $\widehat h_{\phi,K}(P)\le B$, the bound in [F3] gives
$h_K(P)\le B+C_\phi$, so step 2.1 proves the asserted canonical-height
finiteness. If $\widehat h_{\phi,K}(P)=0$, the functional equation gives
$\widehat h_{\phi,K}(\phi^{\circ n}(P))=0$ for every $n$; each iterate has
ordinary height at most $C_\phi$, so all lie in a finite set by step 2.1 and
two iterates coincide. [F3, step 2.1]

3.1 Conversely, if $\phi^{\circ n}(P)=\phi^{\circ m}(P)$ for $n>m$, the
functional equation gives
$d^n\widehat h_{\phi,K}(P)=d^m\widehat h_{\phi,K}(P)$. Since $d=2$, this
forces $\widehat h_{\phi,K}(P)=0$. Together with step 2.2 this proves the
zero-height equivalence and completes the example. [F3, step 2.2, algebra] ∎
