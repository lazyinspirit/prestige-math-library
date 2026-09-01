---
id: thm-flat-going-down
kind: theorem
title: "Every flat ring map satisfies going down"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-faithfully-flat-ring-map-characterisations, thm-localisations-are-flat]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemmas 10.39.17 and 10.39.19"
      url: "https://stacks.math.columbia.edu/tag/00H9"
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 11.20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume the Axiom of Choice for the prime-ideal lifting step.

Let $f:R\to S$ be a flat homomorphism of commutative rings. Then $f$ satisfies
**going down**: whenever
$$ \mathfrak p_1\subseteq \mathfrak p_2\subset R,\qquad \mathfrak q_2\subset S,\qquad \mathfrak q_2\cap R=\mathfrak p_2, $$
there exists a prime ideal $\mathfrak q_1\subseteq \mathfrak q_2$ with
$$
\mathfrak q_1\cap R=\mathfrak p_1.
$$

## Facts & Assumptions

**Given:** A flat ring map $f:R\to S$ and primes $\mathfrak p_1\subseteq\mathfrak p_2\subset R$, $\mathfrak q_2\subset S$ with $\mathfrak q_2\cap R=\mathfrak p_2$.

[L1] Localizations of flat maps are flat ([[thm-localisations-are-flat]]).

[L2] A flat local map is faithfully flat on the localized spectra criterion ([[thm-faithfully-flat-ring-map-characterisations]]).

## Proof

**Proof technique:** direct.


1.1 Localize at $\mathfrak p_2$ and then at $\mathfrak q_2$. We obtain a flat local homomorphism $ R_{\mathfrak p_2}\to S_{\mathfrak q_2} $ by [L1]. [L1, given]


1.2 Because this localized map is local and flat, [L2] makes it faithfully flat. Applying the spectral characterization of faithful flatness to the prime ideal $\mathfrak p_1R_{\mathfrak p_2}$ of the source produces a prime $ \mathfrak q_1S_{\mathfrak q_2}\subseteq S_{\mathfrak q_2} $ lying over it. Contracting back to $S$ gives a prime $\mathfrak q_1\subseteq\mathfrak q_2$ with $ \mathfrak q_1\cap R=\mathfrak p_1. $ [L2, algebra]


2.1 Therefore flat ring maps satisfy going down. [algebra] ∎
