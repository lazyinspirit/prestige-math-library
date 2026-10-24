---
id: "lem-finite-biproducts-of-injective-objects-are-injective"
kind: "lemma"
title: "Finite biproducts of injective objects are injective"
deps: ["def-abelian-category", "def-injective-object"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.7.2 (finite-diagonal Cartan-Eilenberg totalization)"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Stacks Project, Tag 015G (Cartan-Eilenberg resolutions)"
      url: "https://stacks.math.columbia.edu/download/derived.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

In an abelian category, a finite biproduct of injective objects is injective, including the empty biproduct. No choice axiom is required.

## Facts & Assumptions

**Given:** Injective objects $I_1,\ldots,I_m$ with $m\ge0$.

[F1] An abelian category is additive, so it has finite biproducts ([[def-abelian-category]]).

[F2] Injectivity means extension of a map across any monomorphism ([[def-injective-object]]).

## Proof

1.1 Let $u:X\rightarrowtail Y$ and $f:X\to I=\bigoplus_{j=1}^m I_j$. By the finite product property, $f$ is determined by the components $f_j=\pi_j f$. For each $j$, injectivity gives $g_j:Y\to I_j$ with $g_j u=f_j$. The finite conjunction of these existence assertions follows by induction on $m$ in ordinary first-order logic; it uses no infinite choice. [given, F1, F2]

2.1 The product property supplies $g:Y\to I$ with $\pi_jg=g_j$, and hence $\pi_jgu=\pi_jf$ for every $j$. Uniqueness in the product property gives $gu=f$, proving injectivity of $I$. For $m=0$, $I=0$ and both maps to it are unique, so the same extension property holds; for $m=1$ the construction is precisely the extension property of $I_1$. Zero summands and zero $X$ or $Y$ obey the same equations. [F1, F2, step 1.1] ∎
