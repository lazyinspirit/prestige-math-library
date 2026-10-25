---
id: thm-jacobi-inversion
kind: theorem
title: Jacobi inversion
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 24
deps:
  - cor-complex-analytic-functions-have-local-primitives
  - def-abel-jacobi-map
  - def-jacobian-of-a-compact-riemann-surface
  - lem-principal-divisors-have-vanishing-abel-jacobi-class
  - def-algebraic-dual-and-linear-functional
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-holomorphic-function-in-several-complex-variables
  - def-holomorphic-map-and-complex-jacobian
  - def-linear-map
  - def-meromorphic-differential-on-a-riemann-surface
  - def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface
  - def-vector-space
  - lem-abel-jacobi-map-is-well-defined-and-base-point-independent
  - lem-holomorphic-differentials-form-a-g-dimensional-space
  - lem-holomorphic-differentials-separate-generic-points
  - thm-componentwise-holomorphy-in-several-complex-variables
  - thm-holomorphic-inverse-function-theorem-several-variables
  - thm-riemann-roch-compact-riemann-surfaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2, Theorem 21.7 and its proof (the division-by-N argument) and Theorem 21.9 (surjectivity of $X^g\\to\\operatorname{Jac}(X)$ via Riemann-Roch), printed pp. 170-172."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, Theorem 15.8 (Jacobi): $X^g\\to\\operatorname{Jac}(X)$ is surjective because $\\det D\\varphi=0$ iff some holomorphic form vanishes at all the points, printed p. 130."
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 7 §2, Lemma 7.4: $I:\\operatorname{Div}^0(S)\\to\\operatorname{Jac}(S)$ is onto, via a local surjectivity argument and differences, printed pp. 60-61."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from
Riemann-Roch and the Jacobian definition. Let $X$ be a compact connected
Riemann surface and let $u:\operatorname{Div}^0(X)\to\operatorname{Jac}(X)$ be
the Abel-Jacobi homomorphism ([[def-abel-jacobi-map]]). Then $u$ is surjective:
every point of the Jacobian is represented by a divisor of degree zero.

More precisely, let $a_1,\ldots,a_g$ be the $g$ points of
[[lem-holomorphic-differentials-separate-generic-points]] and let
$V_1,\ldots,V_g$ be simply connected coordinate neighbourhoods of them; then for
every $\xi\in\Omega(X)^{*}$ there exist an integer $N\ge1$ and points
$x_j\in V_j$ such that
$$\xi=N\cdot\sum_{j=1}^{g}\Bigl[\omega\mapsto\int_{a_j}^{x_j}\omega\Bigr]\quad\text{in }\Omega(X)^{*},$$
so that $\xi$ is the period functional of the degree-zero divisor
$D=N\cdot\sum_{j=1}^{g}\bigl(x_j-a_j\bigr)$ and $u(D)=[\xi]$ in
$\operatorname{Jac}(X)$.

In particular the map $X^{g}\to\operatorname{Jac}(X)$,
$(x_1,\ldots,x_g)\mapsto\sum_{j=1}^{g}\bigl(u(x_j)-u(a_j)\bigr)$, is
surjective; it is invariant under permutation of the coordinates, so it
descends to the $g$-fold symmetric product formed as the quotient by coordinate permutations, and the descended map is surjective as well.

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$ of genus $g\ge0$, its $g$-dimensional space $\Omega(X)$ of holomorphic differentials with a basis $\omega_1,\ldots,\omega_g$, and the Abel-Jacobi map $u$.

[F1] If $g\ge1$, there are distinct points $a_1,\ldots,a_g\in X$ for which the combined evaluation $\omega\mapsto(\omega(a_1),\ldots,\omega(a_g))$ is an isomorphism $\Omega(X)\to\mathbb C^g$; moreover $\operatorname{ev}_p\ne0$ for every $p$ ([[lem-holomorphic-differentials-separate-generic-points]], [[lem-holomorphic-differentials-form-a-g-dimensional-space]]).

[F2] On a simply connected coordinate disk a holomorphic differential has a holomorphic primitive, and the path integral of a holomorphic differential is the difference of local primitives; it is additive over concatenated paths ([[cor-complex-analytic-functions-have-local-primitives]], [[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F3] A map defined on an open set of $\mathbb C^g$ with holomorphic components is holomorphic, and its complex Jacobian is the matrix of the component derivatives ([[def-holomorphic-function-in-several-complex-variables]], [[def-holomorphic-map-and-complex-jacobian]], [[thm-componentwise-holomorphy-in-several-complex-variables]]).

[F4] Holomorphic inverse function theorem in several variables: a holomorphic map with invertible complex Jacobian at a point is biholomorphic between suitable neighbourhoods of the point and its image ([[thm-holomorphic-inverse-function-theorem-several-variables]]).

[F5] On degree-zero divisors $u(D)$ is represented by the functional $\omega\mapsto\int_c\omega$ for any chain $c$ with $\partial c=D$, and $u$ is a base-point-free group homomorphism there with $u((q)-(p))=[\omega\mapsto\int_p^q\omega]$ ([[def-abel-jacobi-map]], [[lem-abel-jacobi-map-is-well-defined-and-base-point-independent]]).

[F6] Riemann-Roch: for a divisor $D$ on $X$, $\ell(D)-\ell(K-D)=\deg D+1-g$, where $\ell(D)=\dim_{\mathbb C}L(D)$ and $K$ is a canonical divisor; a nonzero meromorphic function with $(f)\ge-D$ exists exactly when $\ell(D)\ge1$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F7] Evaluation on the basis $\omega_1,\ldots,\omega_g$ identifies the algebraic dual $\Omega(X)^*$ with $\mathbb C^g$, compatibly with addition and scalar multiplication ([[def-algebraic-dual-and-linear-functional]], [[def-linear-map]], [[def-vector-space]]).

[F8] Full AC is inherited from Riemann-Roch and the Jacobian definition; only the finitely many local primitives and the points $a_j$ are selected ([[def-axiom-of-choice]]).

[F9] Principal divisors have Abel-Jacobi class zero, and in genus zero $\Omega(X)=0$ and $\operatorname{Jac}(X)$ is a point ([[lem-principal-divisors-have-vanishing-abel-jacobi-class]], [[lem-holomorphic-differentials-form-a-g-dimensional-space]], [[def-jacobian-of-a-compact-riemann-surface]]).

## Proof

**Proof technique:** direct.

1.1 If $g=0$, [F9] gives the one-point Jacobian and zero dual space; the empty tuple and empty sum represent its unique element, with $N=1$, and $X^0$ is a point. Thus all statements hold. For the remainder assume $g\ge1$. Fix points $a_1,\ldots,a_g$ and simply connected coordinate disks $V_j$ with coordinate $z_j$ centred at $a_j$ as in [F1]. For each $i,j$ let $f_{ij}$ be the holomorphic primitive of the coefficient of $\omega_i$ on $V_j$ with $f_{ij}(a_j)=0$, which exists by [F2], and define $F:V_1\times\cdots\times V_g\to\mathbb C^g$ by $F(x)_i:=\sum_{j=1}^g f_{ij}(x_j)$. Each component is a sum of holomorphic functions of one coordinate, hence $F$ is holomorphic by [F3], and $F(a)=0$. [F1, F2, F3, F9, given]

1.2 The complex Jacobian of $F$ at $a$ is the matrix $\bigl(\partial F_i/\partial z_j(a)\bigr)=\bigl(h_{ij}(a_j)\bigr)$, where $h_{ij}$ is the coefficient of $\omega_i$ in the chart $z_j$, i.e. the evaluation $\omega_i(a_j)$ of the differential on $\partial_{z_j}$. By [F1] the evaluation $\omega\mapsto(\omega(a_1),\ldots,\omega(a_g))$ is an isomorphism, so this matrix is invertible. [F1, F3]



2.1 By the inverse function theorem [F4] applied at $a$, there are open neighbourhoods $U_0\subseteq V_1\times\cdots\times V_g$ of $a$ and $V_0$ of $0$ such that $F|_{U_0}:U_0\to V_0$ is biholomorphic; in particular there is $\varepsilon>0$ with the ball $B(0,\varepsilon)\subseteq F(V_1\times\cdots\times V_g)$. [F4, step 1.2]

2.2 For $x\in V_1\times\cdots\times V_g$ and each $j$ choose a path $\gamma_j$ in the simply connected disk $V_j$ from $a_j$ to $x_j$, and put $c_x:=\sum_j\gamma_j$ and $D_x:=\sum_j(x_j-a_j)=\partial c_x$. By [F2], $\int_{c_x}\omega_i=\sum_j f_{ij}(x_j)=F(x)_i$ for every $i$, so under the identification [F7] the vector $F(x)$ is the functional $\omega\mapsto\int_{c_x}\omega$; by [F5] the Abel-Jacobi class of $D_x=\partial c_x$ is $u(D_x)=[F(x)]$. [F2, F5, F7, step 1.1]

3.1 Let $\xi\in\Omega(X)^*$, identified with a vector of $\mathbb C^g$ by [F7]. Choose $N\ge1$ with $\xi/N\in B(0,\varepsilon)$ and write $\xi/N=F(x)$ for some $x\in V_1\times\cdots\times V_g$, using step 2.1. Then $\xi=N F(x)$ is the functional $\omega\mapsto\int_{Nc_x}\omega$ of the chain $Nc_x$, whose boundary is the degree-zero divisor $D:=N D_x=N\sum_j(x_j-a_j)$; by [F5] and step 2.2, $u(D)=[N F(x)]=[\xi]$. Hence $u$ is surjective and the displayed representation of $\xi$ holds. [F5, F7, step 2.1, step 2.2]


4.1 For any class in the Jacobian, step 3.1 supplies a degree-zero divisor $D$ representing it. Set $D'=D+\sum_{j=1}^g[a_j]$, of degree $g$. Riemann–Roch [F6] gives $\ell(D')-\ell(K-D')=1$, so choose nonzero $f\in L(D')$. The divisor $D''=(f)+D'$ is effective of degree $g$, since principal divisors have degree zero, and can be written $D''=\sum_{j=1}^g[y_j]$ with multiplicities. By [F9] and additivity [F5], $u(D)=u(D+(f))=u(\sum_j([y_j]-[a_j]))$. Hence the class is the image of $(y_1,\ldots,y_g)$ under the displayed map, proving its surjectivity. [F5, F6, F9, step 3.1, choose, algebra]

5.1 Steps 3.1 and 4.1 prove the surjectivity of $u$ with the explicit division-by-$N$ form and the surjectivity of $X^g\to\operatorname{Jac}(X)$ under the inherited AC of [F8]. The displayed map on $X^g$ depends only on the multiset $\{y_1,\ldots,y_g\}$ because $u$ is additive, so it factors through the quotient by coordinate permutations, and that factor is surjective. [F8, step 1.1, step 3.1, step 4.1] ∎

## Source notes

The division-by-$N$ argument is Forster's proof of Theorem 21.7 (*Lectures on
Riemann Surfaces*, printed pp. 170-171): the local map $F$ has invertible
derivative, its image is a neighbourhood of $0$, and $\xi=N F(x)$. The sharper
statement for $X^g$ is Forster's Theorem 21.9 (printed pp. 171-172), proved by
writing $D+\sum a_j$ as an effective divisor of degree $g$ via Riemann-Roch;
McMullen's Theorem 15.8 (printed p. 130) gives the equivalent determinant
formulation, and Looijenga's Lemma 7.4 (printed pp. 60-61) gives the open-image
argument. The scaffold's edge to the one-variable
`thm-holomorphic-inverse-function-theorem` is replaced by the several-variables
theorem actually applied to $F$; the scaffold's
`def-complex-line-integral-over-a-rectifiable-path` edge is replaced by the
local-primitive path integral used on the disks.
