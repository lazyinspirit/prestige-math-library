---
id: thm-local-criterion-for-flatness-closed-fibre-form
kind: theorem
title: "For an $R$-finite module over a local map, flatness on the closed fibre plus the multiplication-map condition implies flatness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-local-criterion-for-flatness-ideal-form]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.99.15"
      url: "https://stacks.math.columbia.edu/tag/00MP"
    - title: "Craig Huneke and Irena Swanson, Integral Closure, Chapter 2"
      url: "https://www.ams.org/books/surv/336/"
---

## Statement

Let $R\to S$ be a local homomorphism of Noetherian local rings with maximal
ideal $\mathfrak m\subset R$, and let $M$ be a finite $S$-module that is also
finitely generated as an $R$-module. Assume:

1. the closed fibre $M/\mathfrak mM$ is flat over $S/\mathfrak mS$;
2. the multiplication map
   $$    \mathfrak m\otimes_R M\to M    $$
   is injective.

Then $M$ is flat over $R$.

## Facts & Assumptions

**Given:** A local map of Noetherian local rings $R\to S$ with maximal ideal
$\mathfrak m$, and a finite $S$-module $M$ that is finitely generated as an
$R$-module and satisfies the two hypotheses.

[L1] The ideal-form local criterion applies once one knows that $M/\mathfrak mM$
is flat over $R/\mathfrak m$ and that
$$ \mathfrak m\otimes_R M\to M $$
is injective ([[thm-local-criterion-for-flatness-ideal-form]]).

## Proof

**Proof technique:** direct.


1.1 The ring $R/\mathfrak m$ is a field. Since $M/\mathfrak mM$ is flat over the $S/\mathfrak mS$-algebra in hypothesis 1, it is in particular a vector space over $R/\mathfrak m$, hence flat over $R/\mathfrak m$. [given, algebra]


1.2 Hypothesis 2 is exactly the injectivity condition required in [L1] for the ideal $I=\mathfrak m$. Therefore [L1] applies and yields that $M$ is flat over $R$. [L1, given]


2.1 This is the claimed closed-fibre criterion. [algebra] ∎
