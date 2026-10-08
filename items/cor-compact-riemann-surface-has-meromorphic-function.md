---
id: cor-compact-riemann-surface-has-meromorphic-function
kind: corollary
title: Every compact Riemann surface admits a nonconstant meromorphic function
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
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-meromorphic-differential-on-a-riemann-surface
  - lem-structure-sheaf-euler-characteristic-is-one-minus-genus
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
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
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "§§16.11–16.13, printed pp. 130–131: Theorem 16.11 applies Riemann–Roch to D=(g+1)[p] to obtain a nonconstant function; Corollary 16.12 bounds the covering degree by g+1; Corollary 16.13 treats genus zero."
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 9, Theorem 9.6 and proof, printed pp. 87–88: Riemann–Roch gives a nonconstant map of degree at most g_a+1; Corollary 9.11 later proves g_a equals the topological genus."
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6 §3, Corollary 6.6 and its proof, printed pp. 55–56: the Riemann–Roch formula and the derivation of deg K=2g−2 from a meromorphic map and Riemann–Hurwitz."
---

## Statement

Assume the full Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface of topological genus $g$ and let $p\in X$. Put $D_0:=2g[p]$ and $F_{D_0}:=K_X\otimes\mathcal O_X(-D_0)$, where $K_X:=\Lambda^{1,0}T^*X$ is the canonical line bundle ([[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[thm-serre-duality-compact-riemann-surfaces]]). Then:

1. $\ell(D_0)=g+1$, and the intrinsic Riemann–Roch correction is
$$\ell(D_0)-h^0(X,F_{D_0})=g+1.$$
There exists a nonzero meromorphic differential $\eta$ on $X$. For every such differential, put $K_\eta:=(\eta)$; then $\deg K_\eta=2g-2$, $\ell(K_\eta-D_0)=0$, and the correction identity is $\ell(D_0)-\ell(K_\eta-D_0)=g+1$ ([[def-meromorphic-differential-on-a-riemann-surface]], [[thm-riemann-roch-compact-riemann-surfaces]]). If $g\ge1$, a nonzero holomorphic differential exists as well.

2. There is a nonconstant meromorphic function whose only possible pole is $p$, of order at most $2g$ if $g\ge1$ and at most $1$ if $g=0$. Viewed as a holomorphic map $X\to\widehat{\mathbb C}$, it is proper and has degree at most $\max\{1,2g\}$ ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$ of topological genus $g$, and a point $p\in X$.

[F1] Full AC is assumed by the cohomology, duality, and Riemann–Roch suppliers ([[def-axiom-of-choice]]).

[F2] For a divisor $D$, $L(D)$ consists of $0$ and the meromorphic functions satisfying $(f)+D\ge0$; at a point outside the support of $D$, every element of $L(D)$ is holomorphic ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] For topological genus $g$, $\ell(0)=1$ and $i(0)=h^1(X,\mathcal O_X)=g$ ([[lem-structure-sheaf-euler-characteristic-is-one-minus-genus]]).

[F4] Serre duality identifies $i(0)=h^1(X,\mathcal O_X)$ with $h^0(X,K_X)$ ([[thm-serre-duality-compact-riemann-surfaces]]).

[F5] For every divisor $D$, $\ell(D)$ and $i(D)$ are finite and the intrinsic formula is $\ell(D)-h^0(X,K_X\otimes\mathcal O_X(-D))=\deg D+1-g$ ([[thm-riemann-roch-compact-riemann-surfaces]]).

[F11] A nonzero meromorphic differential exists, and for every such $\eta$ with $K_\eta=(\eta)$, $i(D)=\ell(K_\eta-D)$ ([[thm-riemann-roch-compact-riemann-surfaces]]).

[F6] A nonzero holomorphic section of $K_X=\Lambda^{1,0}T^*X$ is a nonzero holomorphic, hence meromorphic, differential ([[def-meromorphic-differential-on-a-riemann-surface]]).

[F7] A meromorphic function on $X$ is a holomorphic map $X\to\widehat{\mathbb C}$ other than the constant map at $\infty$ ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F8] A proper nonconstant holomorphic map between connected Riemann surfaces has positive degree $d=\sum_{x\in f^{-1}(y)}e_x(f)$, independent of $y$ ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

[F9] On compact $X$, a nonconstant meromorphic function is proper as a map to $\widehat{\mathbb C}$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F10] If $X$ is compact and $\deg D<0$, then $L(D)=0$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F12] At a pole $q$ of a meromorphic function $f:X\to\widehat{\mathbb C}$, its divisor order is $-e_q(f)$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F13] Every principal divisor has degree zero ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F14] All canonical divisors are linearly equivalent ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

## Proof

Riemann–Roch supplies a canonical divisor and computes its degree at every genus. The nonconstant function is obtained from $2g[p]$ in positive genus and from $[p]$ in genus zero.

1.1 By [F11], choose a nonzero meromorphic differential $\eta$ and put $K_\eta=(\eta)$. By [F11] at $D=0$ and [F3], $\ell(K_\eta)=i(0)=g$. At $D=K_\eta$, [F11] gives $i(K_\eta)=\ell(0)=1$, and [F5] gives $\ell(K_\eta)-i(K_\eta)=\deg K_\eta+1-g$. Thus $g-1=\deg K_\eta+1-g$, so $\deg K_\eta=2g-2$ for every genus. By [F13] and [F14], every other canonical divisor has this same degree. If $g\ge1$, [F3] and [F4] give $h^0(X,K_X)=g>0$, so [F6] also gives a nonzero holomorphic differential. [F1, F3, F4, F5, F6, F11, F13, F14, given, choose, algebra]

2.1 By [F5], the intrinsic correction at $D_0$ is $\ell(D_0)-h^0(X,F_{D_0})=2g+1-g=g+1$, and [F11] identifies $h^0(X,F_{D_0})=i(D_0)=\ell(K_\eta-D_0)$. By step 1.1, $\deg(K_\eta-D_0)=(2g-2)-2g=-2$ at every genus, so [F10] gives $\ell(K_\eta-D_0)=0$ and hence $\ell(D_0)=g+1$. In particular, when $g=0$, $D_0=0$ and $\ell(D_0)=1$; no nonconstant function is inferred from this space. [F5, F10, F11, step 1.1, algebra]

3.1 If $g\ge1$, then $\ell(D_0)=g+1\ge2$ by step 2.1. The constants form a one-dimensional subspace of $L(D_0)$ by [F3], so choose a nonconstant $f\in L(D_0)$. If $g=0$, [F5] applied to $[p]$ gives $\ell([p])-i([p])=2$, hence $\ell([p])\ge2$; the constants again form a one-dimensional subspace, so choose a nonconstant $f\in L([p])$. By [F2], membership in these spaces means that all poles are confined to $p$, with order at most $2g$ in the first case and at most $1$ in the second. [F1, F2, F3, F5, step 2.1, algebra]

4.1 By [F7], $f$ is a nonconstant holomorphic map to $\widehat{\mathbb C}$. It is proper by [F9], so [F8] computes its degree by the weighted fibre over $\infty$. There are no poles away from $p$, and at $p$ the local multiplicity equals the pole order by [F12]. Thus the degree is at most $2g$ when $g\ge1$ and at most $1$ when $g=0$; in both cases it is at most $\max\{1,2g\}$. [F7, F8, F9, F12, step 3.1] ∎
