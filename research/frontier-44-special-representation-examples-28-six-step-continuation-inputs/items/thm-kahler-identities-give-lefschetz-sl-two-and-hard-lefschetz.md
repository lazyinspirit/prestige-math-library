---
id: thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz
kind: theorem
title: "Kähler identities give Lefschetz sl-two and hard Lefschetz"
status: draft
origin: pipeline
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity
  - lem-kahler-commutators-and-laplacian-type-preservation
  - lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Theorem 18.13 (Lefschetz decomposition), Corollary 18.14 (hard Lefschetz) and the sl2 discussion"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter VI §5.1-§5.3, §6.1 and §8.3, printed pp. 300-306 and 313; primitive elements, hard Lefschetz and Kähler commutation relations"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
analytic suppliers below. Let $X$ be a compact Kähler $n$-fold with Kähler form
$\omega$, in the conventions of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]], and put
$L=[\omega]\smile(-)$ on cohomology. Then the following hold.

- $L^{n-k}:H^k(X;\mathbb R)\to H^{2n-k}(X;\mathbb R)$ is an isomorphism for
  $0\le k\le n$.
- Harmonic representatives transport $(L,\Lambda,H)$ to an $\mathfrak{sl}_2$
  action: $L$ is cup product with $[\omega]$, $\Lambda$ on cohomology means
  applying $\Lambda$ to the harmonic representative and not to an arbitrary
  closed form, $H$ acts by $\deg-n$, and
  $[L,\Lambda]=H$, $[H,L]=2L$, $[H,\Lambda]=-2\Lambda$ hold on cohomology.
- Primitive cohomology is
  $P^k=\{a\in H^k(X;\mathbb R):\text{the harmonic representative of }a\text{ lies in }\ker\Lambda\}$,
  and for $0\le k\le n$ one has
  $P^k=\ker\bigl(L^{n-k+1}:H^k(X;\mathbb R)\to H^{2n-k+2}(X;\mathbb R)\bigr)$;
  for every $k$,
  $$H^k(X;\mathbb R)=\bigoplus_{r\ge\max(0,k-n)}L^rP^{k-2r},$$
  and a class of type $(p,q)$ has primitive components of type $(p-r,q-r)$.
- If $[\omega]$ is the real image of a rational class
  $\ell\in H^2(X;\mathbb Q)$, all these decompositions and $L$-isomorphisms are
  rational, and they remain isomorphisms after extension to every
  characteristic-zero field.

## Facts & Assumptions

**Given:** A compact Kähler $n$-fold $X$ with Kähler form $\omega$, the
operators $L=\omega\wedge$, $\Lambda=L^*$, $H=[L,\Lambda]$, and the cohomology
of $X$.

[F1] The Kähler conventions, the Laplacians, the Hodge star, the $(p,q)$
decomposition, the operators $L,\Lambda$ and the sign convention on cohomology
are those of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]].

[F2] On each exterior power, $L$ raises degree by two, $\Lambda$ lowers it by
two, $H=(k-n)\mathrm{id}$ on degree $k$, $[L,\Lambda]=H$, $[H,L]=2L$,
$[H,\Lambda]=-2\Lambda$, every element has a unique primitive decomposition
$\sum_rL^ru_r$ with $u_r\in\ker\Lambda$ of degree $k-2r$ and
$r\ge\max(0,k-n)$, $L^{n-t+1}u=0$ and $L^{n-t}u\ne0$ for nonzero primitive $u$
of degree $t\le n$, an element of degree $k\le n$ is primitive exactly when
$L^{n-k+1}u=0$, and $L^{n-k}$ is a linear isomorphism of degree-$k$ onto
degree-$(2n-k)$ forms
([[lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity]]).

[F3] The de Rham Laplacian commutes with $L$, $\Lambda$ and $H$, preserves each
bidegree type, and equals twice the $\bar\partial$-Laplacian
([[lem-kahler-commutators-and-laplacian-type-preservation]]).

[F4] Every real de Rham class of the compact Kähler manifold has a unique
harmonic representative, the Hodge decomposition of $H^k(X;\mathbb C)$ is by
the types of harmonic representatives, pullback and cup product preserve type,
and the rational cohomology is a pure Hodge structure
([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]).

[F5] The natural coefficient maps
$H^r(X;\mathbb Q)\otimes F\to H^r(X;F)$ are isomorphisms for every
characteristic-zero field $F$, compatibly with cup products and pullback
([[lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds]]).

## Proof

1.1 By [F3] the Laplacian commutes with $L$, $\Lambda$ and $H$; hence $L$ and $\Lambda$ carry harmonic forms to harmonic forms and $H$ acts on a harmonic form of degree $k$ by the scalar $k-n$ [F1]. By [F4] every real de Rham class has a unique harmonic representative, so applying the corresponding operator to that representative defines $\mathbb R$-linear maps $L,\Lambda,H$ on $H^*(X;\mathbb R)$; on closed forms $L$ is wedge with the closed $\omega$, so on cohomology it is cup product with $[\omega]$, and the $\mathfrak{sl}_2$ relations $[L,\Lambda]=H$, $[H,L]=2L$, $[H,\Lambda]=-2\Lambda$ hold on forms by [F2], hence on harmonic forms by commutation with the Laplacian, hence pass to cohomology. Unique harmonic representatives also transport the pointwise primitive decomposition: a harmonic form $u$ of degree $k$ is uniquely $\sum_rL^ru_r$ with $u_r$ primitive harmonic of degree $k-2r$, $r\ge\max(0,k-n)$, and the operators preserve the range by commutation with $\Delta$; conversely every sum of string elements with primitive harmonic seeds is harmonic. Since $L^{n-t+1}u_r=0$ and $L^ru_r\ne0$ for $0\le r\le n-t$ when $t=\deg u_r\le n$ by [F2], the map $L^{n-k}$ sends the string of $u_r$ bijectively from its $(k)$-position to its $(2n-k)$-position and zero is the only string element killed in the relevant range, so $L^{n-k}:H^k(X;\mathbb R)\to H^{2n-k}(X;\mathbb R)$ is an isomorphism for $0\le k\le n$; the kernel of $L^{n-k+1}$ in degree $k\le n$ consists exactly of the sums $\sum_rL^ru_r$ with $r=0$, because $L^{n-k+1}L^ru_r=L^{r+n-k+1}u_r=0$ if and only if $n-k+1+r>n-t$ with $k=t+2r$, that is $r=0$; this is the displayed $P^k$. Summing the decompositions string by string gives $H^k(X;\mathbb R)=\bigoplus_{r\ge\max(0,k-n)}L^rP^{k-2r}$, and since $L$ raises both Hodge indices by one and $\Lambda$ lowers both by one, a class of type $(p,q)$ has primitive components of type $(p-r,q-r)$. [F1, F2, F3, F4, given, algebra]

2.1 Assume $[\omega]$ is the real image of a rational class $\ell$, so that cup product with $[\omega]$ on cohomology is the scalar extension of the rational map $a\mapsto a\smile\ell$ [F4, F5]. In rational bases the matrix of $L^{n-k}:H^k(X;\mathbb Q)\to H^{2n-k}(X;\mathbb Q)$ is rational and becomes invertible over $\mathbb R$ by step 1.1, so its determinant is a nonzero rational number and the map is already invertible over $\mathbb Q$; under the comparison of [F5] its scalar extension to any characteristic-zero field $F$ is therefore an isomorphism $H^k(X;F)\to H^{2n-k}(X;F)$, compatible with cup products. The subspaces $P^k=\ker L^{n-k+1}$ and the primitive summands $L^rP^{k-2r}$ are then rational, and the rational matrix of the direct-sum map $\bigoplus_{r\ge\max(0,k-n)}L^rP^{k-2r}\to H^k(X;\mathbb Q)$ becomes the isomorphism of step 1.1 over $\mathbb R$, hence is invertible with nonzero rational determinant and stays invertible after scalar extension, which proves that the decomposition is rational and persists over $F$. Finally the lowering operator reconstructed on each string by $\Lambda L^ru=r(n-t-r+1)L^{r-1}u$ for primitive $u$ of degree $t=k-2r$ [F2] has rational coefficients and, by uniqueness of the primitive decomposition over $\mathbb R$, it coincides there with the transported harmonic operator $\Lambda$; so the $\mathfrak{sl}_2$ structure itself is rational. [F2, F4, F5, step 1.1, given, algebra] ∎
