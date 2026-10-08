---
id: thm-riemann-roch-compact-riemann-surfaces
kind: theorem
title: The Riemann-Roch theorem on a compact Riemann surface
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 13
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-riemann-surface-and-holomorphic-atlas
  - def-meromorphic-differential-on-a-riemann-surface
  - lem-point-divisor-exact-sequence-and-euler-characteristic-step
  - lem-structure-sheaf-euler-characteristic-is-one-minus-genus
  - thm-finiteness-cohomology-compact-riemann-surface
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
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "§§16.7–16.9, printed pp. 129–130: the skyscraper exact sequence, finiteness of H^0 and H^1, the D=0 case, and induction over positive and negative point coefficients to obtain dim H^0(O_D)-dim H^1(O_D)=1-g+deg D"
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6 §§1 and 3, Proposition 6.1 and Corollary 6.6, printed pp. 52–55: the exact sequence for divisors and the formula dim L(D)-dim H^1(D)=1-g+deg D; the proof also derives deg K=2g-2 using a meromorphic map and Riemann–Hurwitz"
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 9, Theorem 9.1 and its proof, printed pp. 85–87: χ(O_D)=χ(O)+deg D from the skyscraper exact sequence; the proof uses the arithmetic genus g_a and notes that g_a=g is established later"
    - title: Anand Deopurkar, Riemann-Roch (MATH 8320/2017 algebraic curves course notes, University of California Davis)
      url: https://ananddeopurkar.org/teaching/2017_algebraic_curves/RR.pdf
      locator: "§2.1, printed pp. 2–3: Euler-characteristic Riemann–Roch and the point-divisor increment; the accompanying Serre-duality proof is developed in §§2.2–2.3 and uses the ample-divisor/Serre-vanishing input of Theorem 1.1"
---

## Statement

Assume the full Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface of topological genus $g$, let $D$ be a divisor on $X$, and put $E_D:=\mathcal O_X(D)$ and $F_D:=K_X\otimes E_D^*$, where $K_X:=\Lambda^{1,0}T^*X$ is the canonical holomorphic line bundle ([[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]], [[thm-serre-duality-compact-riemann-surfaces]]). Write $h^q(X,G):=\dim_{\mathbb C}H^q(X,G)$ when finite, $\ell(D):=\dim H^0(X,E_D)$, $i(D):=\dim H^1(X,E_D)$, and $\chi(E_D):=\ell(D)-i(D)$ ([[thm-finiteness-cohomology-compact-riemann-surface]]). Then:

1. The spaces $H^0(X,E_D)$, $H^1(X,E_D)$, and $H^0(X,F_D)$ are finite-dimensional, and $i(D)=h^0(X,F_D)$ ([[thm-finiteness-cohomology-compact-riemann-surface]], [[thm-serre-duality-compact-riemann-surfaces]]).

2. The intrinsic Riemann–Roch formula is
$$\ell(D)-h^0(X,F_D)=\chi(E_D)=\deg D+1-g.$$

3. There exists a nonzero meromorphic differential on $X$. For any such differential $\eta$, let $K_\eta:=(\eta)$ be its canonical divisor. The isomorphism $\mathcal O_X(K_\eta)\cong K_X$ identifies $H^0(X,F_D)$ with $L(K_\eta-D)$, so $i(D)=\ell(K_\eta-D)$ and the formula becomes
$$\ell(D)-\ell(K_\eta-D)=\deg D+1-g.$$
This expression is independent of the differential, and the identity is invariant under replacing $D$ by a linearly equivalent divisor. For $D=0$, it gives $\ell(0)=1$, $i(0)=g$, and $\chi(\mathcal O_X)=1-g$.

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$ of topological genus $g$, and a divisor $D$.

[F1] Full AC implies countable choice by restricting a choice function to any countable family of nonempty sets ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F2] A divisor on compact $X$ has finite support and degree the sum of its finitely many coefficients. Every principal divisor has degree zero, and any two canonical divisors are linearly equivalent ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] For a canonical divisor $K_\eta=(\eta)$, the divisor bundle satisfies $\mathcal O_X(K_\eta)\cong K_X$, and tensoring with $\mathcal O_X(-D)\cong\mathcal O_X(D)^*$ identifies $\mathcal O_X(K_\eta-D)$ with $F_D$ ([[def-line-bundle-associated-to-a-divisor]]).

[F4] Under countable choice, a compact Riemann surface admits a compatible Riemannian metric ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F5] Under countable choice, every holomorphic line bundle admits a Hermitian metric ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F6] With compatible metrics supplied, the groups $H^0(X,\mathcal O_X(D))$ and $H^1(X,\mathcal O_X(D))$ are finite-dimensional ([[thm-finiteness-cohomology-compact-riemann-surface]]).

[F7] The notation is $\ell(D)=\dim H^0(X,\mathcal O_X(D))=\dim L(D)$, $i(D)=\dim H^1(X,\mathcal O_X(D))$, and $\chi(\mathcal O_X(D))=\ell(D)-i(D)$ ([[thm-finiteness-cohomology-compact-riemann-surface]]).

[F8] For every divisor $A$ and point $p$, $\chi(\mathcal O_X(A+[p]))=\chi(\mathcal O_X(A))+1$ ([[lem-point-divisor-exact-sequence-and-euler-characteristic-step]]).

[F9] The adjacent cohomology spaces in that point-divisor sequence are finite-dimensional ([[lem-point-divisor-exact-sequence-and-euler-characteristic-step]]).

[F10] For topological genus $g$, $\ell(0)=1$, $i(0)=h^1(X,\mathcal O_X)=g$, and $\chi(\mathcal O_X)=1-g$ ([[lem-structure-sheaf-euler-characteristic-is-one-minus-genus]]).

[F11] For $E_D=\mathcal O_X(D)$, Serre duality identifies $H^1(X,E_D)$ with the complex-linear dual of $H^0(X,F_D)$, and both spaces are finite-dimensional with equal dimensions ([[thm-serre-duality-compact-riemann-surfaces]]).

[F12] Every principal divisor has degree zero ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F13] Any two canonical divisors are linearly equivalent ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F14] If $D'\sim D$, multiplication by the inverse of a meromorphic function with divisor $D'-D$ gives the line-bundle isomorphism $\mathcal O_X(D)\cong\mathcal O_X(D')$ ([[def-line-bundle-associated-to-a-divisor]]).

[F15] The zero-divisor bundle is canonically trivial, $\mathcal O_X(0)\cong X\times\mathbb C$ ([[def-line-bundle-associated-to-a-divisor]]).

[F16] For every divisor $A$, the global holomorphic sections of $\mathcal O_X(A)$ identify with $L(A)$ ([[def-line-bundle-associated-to-a-divisor]]).

[F17] A Riemann surface is nonempty and connected and has holomorphic coordinate charts ([[def-riemann-surface-and-holomorphic-atlas]]).

[F18] If $X$ is compact and $\deg A<0$, then $L(A)=0$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F19] The divisor bundle $\mathcal O_X(A)$ has a canonical meromorphic section $s_A=f_i e_i$ with $(s_A)=A$, where $e_j=(f_i/f_j)e_i$; also $\mathcal O_X(-A)\cong\mathcal O_X(A)^*$ ([[def-line-bundle-associated-to-a-divisor]]).

[F20] Holomorphic sections have holomorphic coefficients in holomorphic frames, and meromorphic sections of $K_X$ are exactly meromorphic differentials. A nonzero meromorphic differential has no identically zero germ on connected $X$ ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-meromorphic-differential-on-a-riemann-surface]]).

## Proof

The proof computes the Euler characteristic by finite point-divisor increments, then applies Serre duality to the canonical line bundle. Applying the intrinsic formula to a sufficiently negative point divisor produces a nonzero meromorphic differential, and hence the unconditional divisor form.

1.1 Full AC gives countable choice by [F1]. Choose compatible metrics on $X$ and $E_D$ using [F4, F5], solely to invoke the finiteness result [F6]; the formula below does not depend on these auxiliary metrics. Thus $\ell(D)$ and $i(D)$ are finite and $\chi(E_D)=\ell(D)-i(D)$ by [F7]. [F1, F4, F5, F6, F7, given]

2.1 Write $D=\sum_{p\in S}n_p[p]$, where $S$ is finite by [F2]. The finite sequence from $0$ to $D$ uses only finitely many intermediate divisors. By [F1], [F4], and [F5], choose compatible metrics on $X$ and each associated line bundle; [F6] then makes every intermediate Euler characteristic finite and defined. Starting at the zero divisor, apply [F8] $n_p$ times to add $[p]$ when $n_p>0$. When $n_p<0$, apply [F8] to $A-[p]$ to obtain $\chi(\mathcal O_X(A-[p]))=\chi(\mathcal O_X(A))-1$, and repeat $-n_p$ times; [F9] supplies finiteness for each adjacent pair. This finite sequence reaches $D$ and changes $\chi$ by $\sum_{p\in S}n_p=\deg D$. By [F10], its initial value is $\chi(\mathcal O_X)=1-g$, so $\chi(E_D)=1-g+\deg D$. [F1, F2, F4, F5, F6, F8, F9, F10, step 1.1, algebra]

3.1 Set $F_D=K_X\otimes E_D^*$. By [F11], $i(D)=h^0(X,F_D)$. Substituting this equality into the definition of $\chi(E_D)$ and using step 2.1 gives $\ell(D)-h^0(X,F_D)=1-g+\deg D$. Finiteness of $H^0(X,F_D)$ follows from the same perfect duality and finiteness of $H^1(X,E_D)$. [F7, F11, step 1.1, step 2.1, algebra]

4.1 By [F17], choose $p\in X$ and put $n=g+2>0$ and $A=-n[p]$. Since $\deg A=-n<0$, [F18] gives $\ell(A)=0$. Applying step 3.1 to $A$ and using the dual-bundle identity in [F19] gives $h^0(X,K_X\otimes\mathcal O_X(n[p]))=n+g-1=2g+1>0$. Choose a nonzero holomorphic section $\sigma$ of this bundle. In local coordinates and holomorphic divisor-bundle frames, write $\sigma=a_i\,dz_i\otimes e_i$ and $s_{n[p]}=f_i e_i$ as in [F19], and define $\eta|_{U_i}=(a_i/f_i)\,dz_i$. Each quotient is meromorphic. If $e_j=g_{ij}e_i$ and $dz_j=k_{ij}dz_i$ on an overlap, then $a_i=k_{ij}g_{ij}a_j$ and $f_i=g_{ij}f_j$, so $a_i/f_i=k_{ij}(a_j/f_j)$; the differentials therefore glue by [F20]. Near $p$, the local equation $f_i$ has order $n$, so $\eta$ has pole order at most $n$; away from $p$, $f_i$ is a holomorphic unit, so $\eta$ is holomorphic. Since $\sigma\ne0$, division by $s_{n[p]}$ gives $\eta\ne0$. By [F20], its germs are not identically zero, and [F2] gives the finite-support canonical divisor $(\eta)$. [F2, F17, F18, F19, F20, step 3.1, choose, construct, algebra]

5.1 A nonzero meromorphic differential exists by step 4.1. For any such differential $\eta$, [F3] identifies $F_D\cong\mathcal O_X(K_\eta-D)$, and [F16] identifies its global sections with $L(K_\eta-D)$. Together with step 3.1, this gives $i(D)=\ell(K_\eta-D)$ and the divisor form. If $\eta'$ is another nonzero meromorphic differential, [F13] gives $K_{\eta'}\sim K_\eta$, so [F3] yields the same dimension. If $D'\sim D$, then [F14] identifies $\mathcal O_X(D')$ with $\mathcal O_X(D)$ and their dual twists with the same $K_X$; [F12] gives $\deg D' = \deg D$. Hence both sides of the formula are invariant under this replacement. [F3, F12, F13, F14, F16, step 3.1, step 4.1, algebra]

6.1 For $D=0$, [F15] identifies $E_0$ with $\mathcal O_X$. By [F10], $\ell(0)=1$ and $i(0)=g$, so the formula reads $1-g=1-g$. [F10, F15, step 2.1, algebra] ∎
