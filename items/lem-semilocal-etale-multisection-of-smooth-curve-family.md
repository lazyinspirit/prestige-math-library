---
id: lem-semilocal-etale-multisection-of-smooth-curve-family
kind: lemma
title: "Semilocal finite étale multisections of smooth curve families"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - lem-characteristic-free-pointed-hypersurface-transversality
  - thm-proper-quasi-finite-is-finite
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the pointed transversality supplier."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé XI, section 2, Theorem 2.1"
      url: "https://grothendiecksga.com/read/sga4/en/XI-2.html"
      locator: "Pointed transverse sections; simultaneous finite-fibre interpolation is reconstructed below."
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $S$ be an affine finite-type $k$-scheme, and let $\bar f:\overline X\to S$ be smooth and projective with geometrically connected nonempty curve fibres. Let $X\subseteq\overline X$ be open, and let $F\subset X(k)$ be finite and nonempty. There are an affine open neighborhood $V$ of $\bar f(F)$ and a finite étale surjection $T\to V$ with a $V$-morphism $T\to X_V$. In particular $X_T\to T$ has a section.

## Facts & Assumptions

**Given:** The algebraically closed field, affine base, curve family, open subscheme and finite nonempty marked set in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Pointed hypersurfaces can be chosen simultaneously transverse to smooth strata in every characteristic. [[lem-characteristic-free-pointed-hypersurface-transversality]]

[F2] A proper quasi-finite morphism is finite. [[thm-proper-quasi-finite-is-finite]]

## Proof

**Proof technique:** prescribe transverse fibre sections simultaneously and shrink away from their bad locus.

1.1 Choose a relative projective embedding $\overline X\hookrightarrow\mathbb P^N_S$ and enumerate the distinct points $s_1,\ldots,s_q$ in $\bar f(F)$. For each $s_i$ choose one $x_i\in F$ over it. The fibre $C_i$ is a smooth connected projective curve, and its closed complement $C_i\setminus X_{s_i}$ is finite. By [F1], choose a quadratic hypersurface in $\mathbb P^N_k$ through $x_i$ which meets $C_i$ transversely and avoids every point of that complement; use $C_i$ and those individual points as the strata. Its zero divisor on $C_i$ is finite, reduced, nonempty and contained in $X_{s_i}$. [A1, F1, given, choose, construct, algebra]

2.1 Write $S=\operatorname{Spec}A$. The maximal ideals of the distinct rational points $s_i$ are pairwise comaximal. By the Chinese remainder theorem, lift the coefficients of the finitely many fibrewise quadratic forms to one homogeneous quadratic form over $A$. Its restriction to $\overline X$ defines a closed divisor $T_0$ whose fibre over each $s_i$ is the chosen finite reduced divisor. At every point of those fibres, the relative derivative is nonzero, so $T_0\to S$ is étale there. As $T_0$ is projective over $S$, the images of its non-étale locus and of $T_0\setminus X$ are closed and miss all $s_i$. Their defining ideal is not contained in any maximal ideal of a marked point; prime avoidance supplies an element whose principal open contains every $s_i$ and avoids those images. Restrict to that affine principal open. [A1, step 1.1, choose, construct, algebra]

3.1 On the remaining neighborhood, $T_0\to S$ is proper and étale, hence quasi-finite and finite by [F2]. Its image is both open and closed and contains every $s_i$; restrict the base to that image and call it $V$; it is affine because it is open and closed in an affine scheme. Then $T=T_0|_V$ is finite étale surjective over $V$, lies in $X_V$, and gives a section of $X_T\to T$ after base change. [F2, step 2.1, construct, algebra] ∎
