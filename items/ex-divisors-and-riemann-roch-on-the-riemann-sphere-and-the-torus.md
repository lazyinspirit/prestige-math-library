---
id: ex-divisors-and-riemann-roch-on-the-riemann-sphere-and-the-torus
kind: example
title: "Divisors and Riemann-Roch on the Riemann sphere and on a complex torus"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - def-riemann-sphere-holomorphic-charts
  - thm-meromorphic-functions-riemann-sphere-are-rational
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - def-meromorphic-differential-on-a-riemann-surface
  - def-complex-lattice-and-complex-torus
  - thm-complex-torus-quotient-is-well-defined
  - def-elliptic-function-for-a-lattice
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - thm-riemann-roch-compact-riemann-surfaces
  - thm-serre-duality-compact-riemann-surfaces
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references: [{"title": "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)", "url": "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf", "locator": "Ch. 9, printed p. 85: the torus example $h^0(nP)=1,1,2,3,\\dots$ and its residue explanation; Ch. 12, printed p. 107: the polynomial linear system on the Riemann sphere"}, {"title": "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan", "url": "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf", "locator": "Exercise 16.1, printed p. 131: $\\dim H^0(\\mathbf P^1,\\mathcal O_D)=\\max(0,1+\\deg D)$ and $\\dim H^1(\\mathbf P^1,\\mathcal O_D)=\\max(0,-1-\\deg D)$; Exercise 16.2: $\\dim H^0(X,\\mathcal O_{nP})$ for a torus"}, {"title": "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)", "url": "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf", "locator": "Ch. 6 §§1-3, printed pp. 53-56: the divisor exact sequence, residues and Riemann-Roch"}]
---

## Example

Assume full AC ([[def-axiom-of-choice]]).

1. On the Riemann sphere $X=\widehat{\mathbb C}$ with affine coordinate $z$, write $D=\sum_{j=1}^k m_j[a_j]+m_\infty[\infty]$ with distinct finite points $a_j$, and put $s=\deg D$ and $u(z)=\prod_{j=1}^k(z-a_j)^{-m_j}$ (the empty product is $1$). Then $(u)=-D+s[\infty]$ and
$$\ell(D)=\max(0,s+1).$$
When $s\ge0$, a basis of $L(D)$ is $u,uz,\ldots,uz^s$, with
$$(uz^j)+D=j[0]+(s-j)[\infty].$$
The meromorphic differential $dz$ has canonical divisor $K=-2[\infty]$. It is not a nonzero global holomorphic differential: $H^0(X,K_X)\cong H^0(X,\mathcal O_X(K))=0$. Moreover
$$\ell(K-D)=\max(0,-s-1),\qquad \ell(D)-\ell(K-D)=s+1,$$
and $i(D)=\ell(K-D)$, so the negative-degree and special-divisor cases are included ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

2. Let $\Lambda$ be a full complex lattice and $T_\Lambda=\mathbb C/\Lambda$ its compact Riemann surface. The differential $dz$ descends to a nowhere-vanishing holomorphic differential, so one may take $K=0$; the genus is $1$ and $\ell(K)=1$. At the origin $o=[0]$, for every integer $n\ge1$,
$$\ell(n[o])=n,\qquad L(0)=\mathbb C.$$
Let $\wp$ and $\wp'$ denote the descended Weierstrass functions. A basis of $L(n[o])$ consists of $1$ and one function $\wp^j(\wp')^\varepsilon$ for each pole order $m=2,3,\ldots,n$: for even $m$ take $(j,\varepsilon)=(m/2,0)$, and for odd $m\ge3$ take $((m-3)/2,1)$. Thus the basis begins $1,\wp,\wp',\wp^2,\wp\wp',\wp^3,\ldots$ with orders $0,2,3,4,5,6,\ldots$. In particular $L([o])=\mathbb C$, while $L(2[o])=\langle1,\wp\rangle$; order $1$ is the first gap, and $\wp$ is the first nonconstant function in this filtration.

## Facts & Assumptions

**Given:** Full AC, the sphere divisor $D$ with degree $s$, and a full lattice $\Lambda$ with torus origin $o$.

[F1] Full AC is the hypothesis of the cohomology and Riemann–Roch results ([[def-axiom-of-choice]]).

[F2] Divisor orders add under multiplication, principal divisors have degree zero, $L(A)=0$ for negative-degree $A$, and linear equivalence identifies the corresponding spaces $L(A)$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] The sphere coordinates are $z$ and $w=1/z$; rational functions are exactly its meromorphic functions ([[def-riemann-sphere-holomorphic-charts]], [[thm-meromorphic-functions-riemann-sphere-are-rational]]).

[F4] Every nonconstant complex polynomial has a root, and a degree-$d$ polynomial has $d$ roots counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

[F5] A meromorphic differential is locally $h(z)\,dz$ with the differential transition law; its order is the Laurent order of $h$ ([[def-meromorphic-differential-on-a-riemann-surface]]).

[F6] The divisor bundle identifies its holomorphic sections with $L(A)$, and $\mathcal O_X((\eta))\cong K_X$ for a nonzero meromorphic differential $\eta$ ([[def-line-bundle-associated-to-a-divisor]]).

[F7] Riemann–Roch gives $\ell(A)-i(A)=\deg A+1-g$, $\ell(0)=1$, and $i(0)=g$; Serre duality identifies $i(A)=\ell(K-A)$ for a canonical divisor $K$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

[F8] The quotient torus has a holomorphic atlas from the inverse local restrictions of its projection; its chart transitions are translations, and it is compact ([[def-complex-lattice-and-complex-torus]], [[thm-complex-torus-quotient-is-well-defined]]).

[F9] Elliptic functions descend to meromorphic functions on the torus. The Weierstrass function has double poles precisely at lattice points, with principal part $z^{-2}$ at zero, while its derivative is elliptic with principal part $-2z^{-3}$ there and no other poles modulo the lattice ([[def-elliptic-function-for-a-lattice]], [[thm-weierstrass-p-normal-convergence-and-periodicity]]).

[F10] The sphere has genus zero; the genus is a topological invariant ([[def-genus-and-euler-characteristic-compact-riemann-surface]]).

## Verification

1.1 Each factor $z-a_j$ has divisor $[a_j]-[\infty]$ by the coordinates in [F3], so [F2] gives $(u)=-D+s[\infty]$. For any nonzero $f$, $(f/u)+s[\infty]=(f)+D$, so division by $u$ identifies $L(D)$ with $L(s[\infty])$. A rational function with no finite poles is a polynomial: in a reduced quotient of polynomials, a nonconstant denominator would have a finite root by [F4], hence a pole, contrary to the divisor bound. A polynomial of degree $d$ has pole order $d$ at infinity in the coordinate $w=1/z$, so for $s\ge0$ this space consists precisely of the polynomials of degree at most $s$. Its basis $1,z,\ldots,z^s$ yields the displayed basis of $L(D)$ and its divisor formula. If $s<0$, [F2] gives $L(D)=0$. [F2, F3, F4, given, algebra]

1.2 By [F8], different local lifts of a torus point differ by a lattice translation, whose derivative is $1$, so their differentials $dz$ agree; by [F5] they define a nowhere-vanishing holomorphic differential with divisor $0$. Thus [F6] identifies the canonical bundle with $\mathcal O_X(0)$. By [F7], $\ell(0)=1$ and $i(0)=\ell(K)=1$; applying Riemann–Roch at $0$ gives $0=1-g$, hence $g=1$. For $n\ge1$, the divisor $K-n[o]=-n[o]$ has negative degree, so [F2] gives $\ell(K-n[o])=0$. Riemann–Roch and duality [F7] now give $\ell(n[o])=n$ and $L(0)=\mathbb C$. [F1, F2, F5, F6, F7, F8, given, algebra]

2.1 On the finite chart $dz$ has no zeros or poles; at infinity $dz=-w^{-2}dw$, so [F5] gives $(dz)=-2[\infty]=K$. Step 1.1 applied to $K$ gives $\ell(K)=0$, and [F6] identifies this zero space with the holomorphic differentials. Applied to $K-D$, the same calculation gives $\ell(K-D)=\max(0,-s-1)$. If $s\ge-1$, subtracting it from $\ell(D)$ gives $s+1$; if $s\le-2$, the difference is $0-(-s-1)=s+1$. This is Riemann–Roch for the genus-zero sphere, and [F7] identifies the second term with $i(D)$. [F5, F6, F7, F10, step 1.1, algebra]

3.1 By [F9], $\wp^j(\wp')^\varepsilon$ descends to the torus, has no poles away from $o$, and has pole order exactly $2j+3\varepsilon$ at $o$, with nonzero leading coefficient $(-2)^\varepsilon$. The chosen representatives have distinct orders $2,3,\ldots,n$, so each belongs to $L(n[o])$; together with $1$ they are linearly independent, because in a nontrivial linear combination the term of largest pole order has a principal coefficient that no other term can cancel. There are $n$ such functions for $n\ge1$ (only $1$ when $n=1$), so step 1.2 makes them a basis. This proves the gap and the first nonconstant-function claims. [F9, step 1.2, algebra] ∎
