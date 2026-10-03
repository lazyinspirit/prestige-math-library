---
id: lem-normalization-isomorphism-over-normal-locus
kind: lemma
title: The normalization is an isomorphism over the normal locus
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-normalization-affine-variety, lem-normality-local-on-affine-opens, lem-finite-normalization-compatible-with-principal-opens, thm-coordinate-ring-principal-open, lem-principal-opens-form-affine-basis, thm-normality-is-local-for-domains, thm-local-ring-affine-variety-localization, thm-support-and-annihilator-of-a-finite-module, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a-b: the normalization is an isomorphism over the normal locus"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry (November 18, 2017 public draft), §9.7"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be an irreducible affine variety with
normalization $\nu\colon X^{\nu}\to X$. The normal locus of $X$ is a dense open
subset, and at every normal point $x$ there is a principal open $D(f)\ni x$
with $A_f$ integrally closed; on $\nu^{-1}(D(f))$ the map $\nu$ restricts to an
isomorphism onto $D(f)$. Consequently $\nu$ is an isomorphism over the normal
locus.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the irreducible affine variety $X$ with coordinate ring $A=k[X]$ and function field $k(X)$, the integral closure $B$ of $A$ in $k(X)$, the normalization $\nu\colon X^{\nu}\to X$ with pullback $A\hookrightarrow B$, and a point $x\in X$ with maximal ideal $\mathfrak m=\mathfrak m_x\subseteq A$.

[F1] $B$ is a finite $A$-module, $A\subseteq B\subseteq k(X)$, $B$ is an integrally closed domain, and $k[X^{\nu}]=B$ ([[def-normalization-affine-variety]]).

[F2] The point $x$ is normal exactly when $\mathcal O_{X,x}\cong A_{\mathfrak m}$ is integrally closed, and $A$ is integrally closed exactly when all its maximal localisations are ([[lem-normality-local-on-affine-opens]], [[thm-local-ring-affine-variety-localization]], [[thm-normality-is-local-for-domains]]).

[F3] For a finite $A$-module $M$, $M_{\mathfrak m}=0$ if and only if there is $f\notin\mathfrak m$ with $fM=0$; equivalently $\operatorname{Supp}(M)$ is closed and $M_{\mathfrak p}\ne0$ exactly for primes containing the annihilator ([[thm-support-and-annihilator-of-a-finite-module]]).

[F4] For $0\ne f\in A$, the principal open $D(f)$ is affine with coordinate ring $A_f$, and the integral closure of $A_f$ in $k(X)$ is $B_f$, a finite $A_f$-module; principal opens form a basis of the topology, and $\nu^{-1}(D(f))$ is an affine open with coordinate ring $B_f$ under the pullback ([[thm-coordinate-ring-principal-open]], [[lem-principal-opens-form-affine-basis]], [[lem-finite-normalization-compatible-with-principal-opens]], [[def-normalization-affine-variety]]).

## Proof

1.1 Let $x$ be a normal point. Then $A_{\mathfrak m}$ is an integrally closed domain by [F2]. Since $B$ is a finite, hence integral, $A$-module, $B_{\mathfrak m}$ is integral over $A_{\mathfrak m}$ and lies in the common fraction field $k(X)$; an integrally closed domain contains every element of its fraction field integral over it, so $B_{\mathfrak m}\subseteq A_{\mathfrak m}$ and therefore $(B/A)_{\mathfrak m}=0$. By [F3] applied to the finite module $B/A$ there is $f\notin\mathfrak m$ with $fB\subseteq A$. Then $B_f=A_f$: the inclusion $A_f\subseteq B_f$ is clear, and every $b/f^n\in B_f$ equals $f^kb/f^{n+k}$ with $f^kb\in A$. In particular $A_f=B_f$ is integrally closed (it is the integral closure of $A_f$ by [F4], and that closure is $B_f$), and by [F4] the map $\nu$ restricts over $D(f)$ to the morphism of affine varieties with pullback $A_f\xrightarrow{\ \sim\ }B_f$; by the anti-equivalence that restriction is an isomorphism $\nu^{-1}(D(f))\xrightarrow{\ \sim\ }D(f)$. [F1, F2, F3, F4, given]

1.2 The normal locus of $X$ is the set of points $x$ with $A_{\mathfrak m_x}=B_{\mathfrak m_x}$, equivalently the complement of $\operatorname{Supp}(B/A)$ [F2, F3]. Since $B/A$ is a finite $A$-module, its support is closed [F3], so the normal locus is open. It is nonempty: write finitely many $A$-module generators of $B$ as fractions in $\operatorname{Frac}(A)$ and multiply their nonzero denominators to obtain $0\ne d\in A$ with $dB\subseteq A$. Then $B_d=A_d$, so every point of the nonempty principal open $D(d)$ is normal. Since $X$ is irreducible, a proper closed subset has empty interior, so this nonempty open set is dense. Hence the normal locus is a dense open subset of $X$. [F1, F2, F3, given]

2.1 By step 1.1, at each normal point $x$ there is a principal open $D(f)\ni x$ with $A_f$ integrally closed on which $\nu$ restricts to an isomorphism; by step 1.2 the normal locus is dense open and is covered by those principal opens. Hence the normalization restricts to an isomorphism over the normal locus, and in particular over some principal open neighbourhood of each normal point. [F4, step 1.1, step 1.2] ∎
