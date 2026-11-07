---
dependency_level: 0
id: lem-tangent-space-of-a-lie-group-is-a-lie-algebra
kind: lemma
title: The tangent space of a Lie group carries a Lie algebra
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-lie-group
  - def-derivation-at-a-point-and-tangent-space
  - def-smooth-map-between-manifolds-with-boundary
  - def-finite-dimensional-lie-algebra
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Section 2, introductory Lie algebra discussion, printed pp. 477–478
    - title: Bob Hough, Math 639 Lecture 16, Equidistribution on nilmanifolds
      url: https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf
      locator: Mal’cev bases and tangent Lie algebra convention, pp. 6–7
---

## Statement

Let $G$ be a finite-dimensional real Lie group with identity $e$, and let
$\mathfrak g=T_eG$ be the real vector space of derivations of smooth-function
germs at $e$. For $u\in\mathfrak g$, define $D_u$ on local smooth functions by
$(D_uf)(g)=u(f\circ L_g)$, where $L_g(x)=gx$; the same formula defines it on
global smooth functions. Then $D_u$ is a derivation of smooth functions, the
map $u\mapsto D_u$ is injective, and for every
$u,v\in\mathfrak g$ there is a unique $w\in\mathfrak g$ such that
$D_uD_v-D_vD_u=D_w$. The bracket $[u,v]_{\mathfrak g}:=w$ makes
$\mathfrak g$ a finite-dimensional real Lie algebra.

## Statement references

[Green and Tao, Section 2](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)

## Facts & Assumptions

**Given:** A finite-dimensional real Lie group $G$ with identity $e$.

[F1] A Lie group has smooth multiplication $m:G\times G\to G$, $m(g,x)=gx$.
[[def-lie-group]]

[F2] A tangent vector at $e$ is an $\mathbb R$-linear derivation on smooth
function germs at $e$. [[def-derivation-at-a-point-and-tangent-space]]

[F3] Smooth maps between smooth manifolds are defined in local coordinates by
smooth coordinate expressions. [[def-smooth-map-between-manifolds-with-boundary]]

[F4] A finite-dimensional real Lie algebra is a finite-dimensional real
vector space with a bilinear alternating bracket satisfying Jacobi.
[[def-finite-dimensional-lie-algebra]]

## Proof

**Proof technique:** direct.

1.1 Fix a smooth chart $\phi:U\to V\subseteq\mathbb R^m$ with $\phi(e)=0$. Write $x_j=\phi_j$ and $a_j=u([x_j])$. The derivation rule gives $u(1)=u(1\cdot1)=2u(1)$, hence $u(1)=0$. After shrinking $U$ to a ball about $e$, put $h_j(x)=\int_0^1\partial_j(h\circ\phi^{-1})(tx)\,dt$. The fundamental theorem of calculus gives $h-h(e)=\sum_{j=1}^m x_jh_j$. The integrand is smooth in $(t,x)$, so each $h_j$ is smooth; evaluation at $x=0$ gives $h_j(e)=\partial_j(h\circ\phi^{-1})(0)$. Applying $u$ and using $x_j(e)=0$ yields $u(h)=\sum_{j=1}^m a_j\partial_j(h\circ\phi^{-1})(0)$. Thus the linear map $u\mapsto(a_1,\ldots,a_m)$ is injective, so $T_eG$ is finite-dimensional. [given, F2, choose, algebra]

2.1 For a smooth function $f$ on an open set $W\subseteq G$, define $(D_uf)(g)=u([f\circ L_g])$ for $g\in W$; the germ is defined because $L_g(e)=g\in W$. In the chart above this equals $\sum_j a_j\partial_{x_j}(f(g\phi^{-1}(x)))|_{x=0}$. The map $(g,x)\mapsto f(g\phi^{-1}(x))$ is smooth wherever defined by [F1] and [F3], so its partial derivatives at the fixed value $x=0$ depend smoothly on $g$; hence $D_uf$ is smooth on $W$. Applying the derivation rule from [F2] to $(f\circ L_g)(h\circ L_g)$ shows pointwise that $D_u(fh)=fD_uh+hD_uf$. This defines compatible local operators and, in particular, an operator on global smooth functions. [F1, F2, F3, step 1.1, algebra]

3.1 For every $a,g\in G$ and smooth $f$, $D_u(f\circ L_a)(g)=u([f\circ L_a\circ L_g])=u([f\circ L_{ag}]) =(D_uf)(ag)$. Therefore $D_u(f\circ L_a)=(D_uf)\circ L_a$; the same holds for $D_v$ and for their commutator $C=D_uD_v-D_vD_u$. [F1, step 2.1, algebra]

4.1 The commutator of two derivations is a derivation: expanding $D_uD_v(fh)-D_vD_u(fh)$ cancels the two mixed products and leaves $fC(h)+hC(f)$. The operators are local by their coordinate formula in step 2.1, so $w([f])=C(f)(e)$ is a well-defined derivation of germs at $e$. The invariance identity in step 3.1 gives $C(f)(g)=C(f\circ L_g)(e)=w([f\circ L_g])=(D_wf)(g)$ for every $g$; hence $C=D_w$. If $D_{w'}=D_w$, evaluation at $e$ gives $w'=w$, proving uniqueness. [F2, step 2.1, step 3.1, algebra]

5.1 The map $u\mapsto D_u$ is linear and injective because $(D_uf)(e)=u([f])$. The operator commutator is bilinear and alternating, and its Jacobi identity follows by expanding the three commutators in the associative algebra of linear operators on smooth functions; each composition term occurs once with each sign and cancels. By step 4.1 the commutators correspond to tangent derivations, so these identities transfer through the injective map $u\mapsto D_u$. Step 1.1 shows $T_eG$ is finite-dimensional. The bracket is therefore bilinear, alternating and satisfies Jacobi on a finite-dimensional real vector space, as required by [F4], without a choice axiom. [F2, F4, step 1.1, step 4.1, algebra] ∎
