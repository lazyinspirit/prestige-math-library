---
id: "prop-cohomology-factors-through-the-derived-category"
kind: "proposition"
title: "Cohomology factors through the derived category"
deps: ["def-derived-category-of-an-abelian-category", "thm-homology-is-a-homological-functor-on-the-homotopy-category"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For every integer $n$, $H^n:K(\mathcal A)\to\mathcal A$ factors uniquely through $Q:D(\mathcal A)$. More precisely, there is a unique $\overline H^n:D(\mathcal A)\to\mathcal A$ with $H^n=\overline H^nQ$, and $\overline H^n(s,f)=H^n(f)H^n(s)^{-1}$.

## Facts & Assumptions

**Given:** For every integer $n$, $H^n:K(\mathcal A)\to\mathcal A$ factors uniquely through $Q:D(\mathcal A)$. More precisely, there is a unique $\overline H^n:D(\mathcal A)\to\mathcal A$ with $H^n=\overline H^nQ$, and $\overline H^n(s,f)=H^n(f)H^n(s)^{-1}$.

[F1] The derived category is localization at quasi-isomorphisms ([[def-derived-category-of-an-abelian-category]]).

[F2] Homology is a homological functor on the homotopy category ([[thm-homology-is-a-homological-functor-on-the-homotopy-category]]).

## Proof

1.1 Cochain reindexing of homology gives a functor $H^n$ on $K(\mathcal A)$, and it inverts every quasi-isomorphism by definition. In particular it sends the zero complex to zero. [F1, F2]

2.1 The localization property therefore gives the unique factorization. On a roof $Q(f)Q(s)^{-1}$ functoriality forces the displayed value. No triangulation of $D(\mathcal A)$ is needed for this assertion. [F1, step 1.1] ∎
