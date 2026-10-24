---
id: ex-low-degree-riemann-roch-computations
kind: example
title: "Low-degree Riemann-Roch computations"
status: published
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
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-line-bundle-associated-to-a-divisor
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - lem-point-divisor-exact-sequence-and-euler-characteristic-step
  - thm-riemann-roch-compact-riemann-surfaces
  - thm-serre-duality-compact-riemann-surfaces
aliases: []
landmark: false
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references: [{"title": "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan", "url": "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf", "locator": "§16.5, §16.9-16.10, §17.16, printed pp. 128-130, 141: the elementary cases, the index of speciality and the vanishing $H^1(\\mathcal O_D)=0$ for $\\deg D>2g-2$"}, {"title": "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)", "url": "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf", "locator": "Ch. 9, printed pp. 85-88: Riemann-Roch, $\\ell(D)=0$ for negative degree, and the first examples on a torus"}, {"title": "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)", "url": "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf", "locator": "Ch. 5 §2, printed p. 52: hyperelliptic Riemann surfaces and degree-two moving linear systems; Ch. 6 §§1 and 3, printed pp. 53–56: exact sequence and Riemann–Roch"}]
---

## Example

Assume full AC ([[def-axiom-of-choice]]), and let $X$ be a compact Riemann surface of genus $g$, $D$ any divisor, and $K$ a canonical divisor. Such $K$ exists by [[thm-riemann-roch-compact-riemann-surfaces]]. Here, for $g\ge2$, **hyperelliptic** means that $X$ admits a degree-two holomorphic map to the Riemann sphere.

1. If $\deg D<0$, then $\ell(D)=0$ and $\chi(\mathcal O_X(D))=-\ell(K-D)$.
2. If $\deg D=0$, then $\ell(D)=1$ exactly when $D\sim0$; otherwise $\ell(D)=0$. In particular $\ell(D)\le1$.
3. If $\deg D=1$ and $g\ge1$, then $\ell(D)\le1$, with equality exactly when $D$ is linearly equivalent to a point divisor $[p]$. For an effective degree-one divisor $D=[p]$, $L(D)=\mathbb C$. For arbitrary degree-one $D$, a nonzero $L(D)$ need not be spanned by the constant function.
4. If $\deg D=2$ and $g\ge2$, then $\ell(D)\le2$. When $\ell(D)=2$, any two independent sections define a degree-two map by their ratio, and $X$ is hyperelliptic. If $X$ is not hyperelliptic, then every degree-two divisor has $\ell(D)\le1$.
5. If $\deg D>2g-2$, then $i(D)=0$ and $\ell(D)=\deg D+1-g$.

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$ of genus $g$, and a divisor $D$.

[F1] Full AC is the premise of the cohomology and genus suppliers ([[def-axiom-of-choice]]).

[F2] A nonzero $f\in L(A)$ has effective divisor $(f)+A$, whose degree equals $\deg A$ because principal divisors have degree zero. Negative-degree divisors have $L(A)=0$, and linear equivalence identifies their section spaces ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] Riemann–Roch supplies a canonical divisor $K$, $\ell(A)-i(A)=\deg A+1-g$, $\ell(0)=1$ and $i(0)=g$; Serre duality gives $i(A)=\ell(K-A)$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

[F4] A nonconstant meromorphic function is a holomorphic map to the sphere and, on compact $X$, is proper. Its pole order at a point equals its ramification multiplicity over infinity ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F5] A proper nonconstant holomorphic map is surjective and has positive integer degree, equal to the sum of ramification multiplicities over each fibre ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

[F6] A nonconstant holomorphic map locally has coordinate form $z\mapsto z^e$ with $e\ge1$; when $e=1$, it has a holomorphic local inverse ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]]).

[F7] Genus is invariant under biholomorphism, and the sphere has genus zero ([[def-genus-and-euler-characteristic-compact-riemann-surface]]).

[F8] For every divisor $A$ and point $p$, the point-divisor exact sequence gives $0\le\ell(A)-\ell(A-[p])\le1$ ([[lem-point-divisor-exact-sequence-and-euler-characteristic-step]]).

[F9] Holomorphic sections of $\mathcal O_X(A)$ identify with $L(A)$ via the canonical meromorphic section of divisor $A$. The section represented by a nonzero $f$ has zero divisor $(f)+A$ ([[def-line-bundle-associated-to-a-divisor]]).

## Verification

1.1 By [F3] at $A=0$, $\ell(K)=i(0)=g$. At $A=K$, duality gives $i(K)=\ell(0)=1$, so Riemann–Roch gives $g-1=\deg K+1-g$, hence $\deg K=2g-2$. If $\deg D<0$, [F2] gives $\ell(D)=0$ and [F3] gives $\chi(\mathcal O_X(D))=\ell(D)-i(D)=-\ell(K-D)$. If $\deg D>2g-2$, then $\deg(K-D)<0$ and [F2] gives $\ell(K-D)=0$; [F3] therefore gives $i(D)=0$ and $\ell(D)=\deg D+1-g$. [F1, F2, F3, given, algebra]

1.2 Suppose $\deg D=0$ and $0\ne f\in L(D)$. The effective divisor $(f)+D$ has degree zero by [F2], so all its nonnegative coefficients vanish; thus $(f)=-D$ and $D\sim0$. Conversely, if $D\sim0$, [F2] and [F3] identify $L(D)$ with the one-dimensional space $L(0)=\mathbb C$. This proves the degree-zero equivalence and the dimension bound. [F2, F3, given, algebra]

1.3 A degree-one proper nonconstant holomorphic map to the sphere is a biholomorphism: [F5] makes every fibre a single point of multiplicity $1$, so the map is bijective; [F6] provides local holomorphic inverses, which agree with its unique inverse and hence glue to a holomorphic inverse. It would force $g=0$ by [F7]. Now let $\deg D=1$, $g\ge1$, and suppose $f_0,f_1\in L(D)$ are independent. Put $E_j=(f_j)+D$, effective of degree one by [F2], and $r=f_1/f_0$. Independence makes $r$ nonconstant, and its pole divisor is bounded by $E_0$ since $(r)=E_1-E_0$. By [F4] and [F5], it is a proper map of degree at most one and at least one, contradicting the preceding genus consequence. Thus $\ell(D)\le1$. A nonzero section gives an effective degree-one divisor $(f)+D=[p]$, so $D\sim[p]$. Conversely $D\sim[p]$ identifies $L(D)$ with $L([p])$, which contains constants and has dimension at most one; hence equality holds. For effective degree-one $D=[p]$, this also proves $L(D)=\mathbb C$. [F2, F3, F4, F5, F6, F7, given, algebra]

2.1 Let $\deg D=2$ and $g\ge2$. Choosing any point $p$, [F8] and step 1.3 give $\ell(D)\le\ell(D-[p])+1\le2$. Suppose $\ell(D)=2$ and choose independent $f_0,f_1\in L(D)$, representing sections as in [F9]. Their effective zero divisors $E_j=(f_j)+D$ each have degree two. Let $B$ be their common effective divisor, with coefficient $B(q)=\min\{E_0(q),E_1(q)\}$. If $B\ne0$, choose a point $q$ in its support; then both $f_j$ belong to $L(D-[q])$, contrary to the degree-one bound in step 1.3. Hence $B=0$. The nonconstant ratio $r=f_1/f_0$ has divisor $E_1-E_0$; because the two effective divisors have disjoint support, its pole divisor is exactly $E_0$, of degree two. By [F4] and [F5], $r:X\to\widehat{\mathbb C}$ has degree two, proving hyperellipticity in the stated analytic sense. Its contrapositive and the bound $\ell(D)\le2$ give $\ell(D)\le1$ for every degree-two divisor on a nonhyperelliptic surface. [F2, F4, F5, F8, F9, step 1.3, choose, algebra] ∎
