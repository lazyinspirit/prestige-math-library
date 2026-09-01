---
id: thm-flatness-is-local
kind: theorem
title: "A module is flat if and only if all prime localizations are flat, equivalently all maximal localizations are flat"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-localisations-are-flat, thm-flatness-criteria-by-injections-and-ideals]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.39.18"
      url: "https://stacks.math.columbia.edu/tag/00H9"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §11"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R$ be a commutative ring and let $M$ be an $R$-module. The following are
equivalent:

1. $M$ is flat over $R$.
2. $M_{\mathfrak p}$ is flat over $R_{\mathfrak p}$ for every prime ideal
   $\mathfrak p\subset R$.
3. $M_{\mathfrak m}$ is flat over $R_{\mathfrak m}$ for every maximal ideal
   $\mathfrak m\subset R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and an $R$-module $M$.

[L1] Localization preserves flatness ([[thm-localisations-are-flat]]).

[L2] Flatness is equivalent to the ideal-injection criterion
([[thm-flatness-criteria-by-injections-and-ideals]]).

## Proof

**Proof technique:** direct.


1.1 If $M$ is flat, then every localization $M_{\mathfrak p}$ is flat over $R_{\mathfrak p}$ by [L1]. Therefore 1 implies 2, and 2 implies 3 trivially. [L1, given]


1.2 Assume 3. By [L2] it is enough to prove that for every finitely generated ideal $I\subseteq R$, the map $ I\otimes_R M\to M $ is injective. Let $K$ be its kernel. If $K\neq0$, then some maximal ideal $\mathfrak m$ contains $\operatorname{Ann}(k)$ for a nonzero $k\in K$, so $K_{\mathfrak m}\neq0$. [L2, given, algebra]


1.3 But localization commutes with tensor products, so localizing the map of algebra at $\mathfrak m$ gives $ I_{\mathfrak m}\otimes_{R_{\mathfrak m}} M_{\mathfrak m}\to M_{\mathfrak m}. $ By assumption 3 and criterion [L2], this map is injective. Hence its kernel $K_{\mathfrak m}$ is zero, contradicting algebra. Therefore $K=0$. [L2, algebra]


1.4 So the ideal-injection criterion [L2] holds globally, and therefore $M$ is flat. Thus 3 implies 1. [L2]


2.1 The three conditions are equivalent. [algebra] ∎
