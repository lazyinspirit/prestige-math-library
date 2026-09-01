---
id: thm-faithfully-flat-ring-map-characterisations
kind: theorem
title: "A flat ring map is faithfully flat exactly when it detects proper ideals and is surjective on spectra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, thm-faithful-flatness-detected-by-nonzero-modules-and-fibres]
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
    - title: "Stacks Project, Lemma 10.39.16"
      url: "https://stacks.math.columbia.edu/tag/00H9"
    - title: "J. S. Milne, A Primer of Commutative Algebra, Propositions 11.18-11.19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume the Axiom of Choice for the prime and maximal ideal existence used in the
spectral reformulations.

Let $f:R\to S$ be a flat homomorphism of commutative rings. The following are
equivalent:

1. $f$ is faithfully flat.
2. For every proper ideal $I\subsetneq R$, the extended ideal $IS$ is proper.
3. Every maximal ideal of $R$ has a prime ideal of $S$ lying over it.
4. The map on prime spectra
   $$
   \operatorname{Spec}(S)\to\operatorname{Spec}(R)
   $$
   is surjective.

## Facts & Assumptions

**Given:** A flat ring map $f:R\to S$.

[L1] Faithful flatness for the $R$-module $S$ is equivalent to detecting every
nonzero module and every residue field fibre
([[thm-faithful-flatness-detected-by-nonzero-modules-and-fibres]]).

[L2] A flat ring map is precisely a flat $R$-module structure on its target
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

## Proof

**Proof technique:** direct.


1.1 By [L2], the flatness of $f$ is the flatness of the $R$-module $S$. For a proper ideal $I$, the quotient $R/I$ is nonzero, and $ (R/I)\otimes_R S\cong S/IS. $ Therefore [L1] says that $f$ is faithfully flat exactly when $S/IS\neq0$ for every proper ideal $I$, which is equivalent to $IS\neq S$. So 1 and 2 are equivalent. [L1, L2, given]


1.2 A prime of $S$ lying over a maximal ideal $\mathfrak m$ exists exactly when the fibre ring $S\otimes_R \kappa(\mathfrak m)$ is nonzero. Since $R/\mathfrak m\otimes_R S\cong S/\mathfrak mS$ and $\mathfrak m$ is maximal, this is precisely the maximal-ideal fibre condition in [L1]. Thus 1 and 3 are equivalent. [L1, algebra]


1.3 Assume 1 and let $\mathfrak p\subset R$ be prime. By the prime-fibre form of [L1], the ring $T:=S\otimes_R \kappa(\mathfrak p)$ is nonzero. Choose a prime ideal $\mathfrak n\subset T$, and let $\mathfrak q$ be its preimage in $S$. Because the composite $R\to S\to T$ factors through $\kappa(\mathfrak p)$, every element of $\mathfrak p$ maps to $0$ in $T$, so $\mathfrak p\subseteq \mathfrak q\cap R$. If $r\in R\setminus\mathfrak p$, then its image in the field $\kappa(\mathfrak p)$ is a unit, hence its image in $T$ is a unit and cannot lie in the prime $\mathfrak n$. Therefore $r\notin\mathfrak q$, so $\mathfrak q\cap R=\mathfrak p$. Thus a prime of $S$ lies over $\mathfrak p$, and 1 implies 4. [L1, given, choose, algebra]


2.1 Condition 4 obviously implies 3. Since step 1.2 gives 3 if and only if 1, condition 4 is equivalent to 1 as well. [step 1.2, algebra]


3.1 Therefore 1, 2, 3, and 4 are equivalent. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
