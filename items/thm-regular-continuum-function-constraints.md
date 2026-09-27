---
id: thm-regular-continuum-function-constraints
kind: theorem
title: Necessary constraints on the regular-cardinal continuum function
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-cardinal-power-set-and-cantor, cor-cofinality-of-a-cardinal-power, thm-cofinality-basics, def-cofinality, lem-cardinal-arithmetic-basic-laws, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15: Applications of Forcing, condition (15.7), printed p.232"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Definition 52, PDF p.11"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $\kappa$ and
$\lambda$ range over infinite regular cardinals ([[def-cofinality]]). Then the
continuum function $\kappa\mapsto 2^{\kappa}$ satisfies:

**(a)** $\kappa<2^{\kappa}$;

**(b)** $2^{\kappa}\le 2^{\lambda}$ whenever $\kappa\le\lambda$;

**(c)** $\operatorname{cf}(2^{\kappa})>\kappa$.

Clause (a) excludes values at most $\kappa$, clause (b) requires monotonicity,
and clause (c) is König's stronger cofinality bound. Since
$\operatorname{cf}(\mu)\le\mu$ ([[thm-cofinality-basics]]), clause (c) already implies clause (a); an
Easton function is specified by monotonicity and this cofinality bound.

## Facts & Assumptions

**Given:** The Axiom of Choice, so that every set has a cardinality, and infinite regular cardinals $\kappa\le\lambda$.

[F1] Under the Axiom of Choice, $2^{\kappa}=\lvert\mathcal{P}(\kappa)\rvert$ for every cardinal $\kappa$, and $\kappa<2^{\kappa}$. ([[thm-cardinal-power-set-and-cantor]])

[F2] Under the Axiom of Choice, $\operatorname{cf}(2^{\kappa})>\kappa$ for every infinite cardinal $\kappa$. ([[cor-cofinality-of-a-cardinal-power]])

[F3] Cardinals compare by injections: $\kappa\le\lambda$ if and only if there is an injection $\kappa\to\lambda$, and if $\kappa\le\lambda$ then $\kappa^{\mu}\le\lambda^{\mu}$. ([[lem-cardinal-arithmetic-basic-laws]])

[F4] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

**Proof technique:** direct.

## Proof

1.1 Assume [F4]. Let $\kappa$ be an infinite cardinal. By [F1], $2^{\kappa}=\lvert\mathcal{P}(\kappa)\rvert$ is a cardinal and $\kappa<2^{\kappa}$. Restricting to infinite regular $\kappa$ gives clause (a). [F1, F4, given]

1.2 Let $\kappa\le\lambda$ be infinite regular cardinals. Every subset of $\kappa$ is a subset of $\lambda$, so the inclusion $\mathcal{P}(\kappa)\subseteq\mathcal{P}(\lambda)$ is an injection; by the injection criterion of [F3], $\lvert\mathcal{P}(\kappa)\rvert\le\lvert\mathcal{P}(\lambda)\rvert$. Applying [F1] at $\kappa$ and at $\lambda$ turns this into $2^{\kappa}\le2^{\lambda}$, which is clause (b). [F1, F3]

1.3 Clause (c) is [F2] at $\kappa$: $\operatorname{cf}(2^{\kappa})>\kappa$ for every infinite cardinal $\kappa$, in particular for every infinite regular one. [F2]

2.1 Clauses (a), (b) and (c) hold for all infinite regular cardinals, so in ZFC the continuum function on infinite regular cardinals satisfies exactly the displayed constraints. The Axiom of Choice enters only through [F1] and [F2] -- through the identification of $2^{\kappa}$ with $\lvert\mathcal{P}(\kappa)\rvert$ and through König's theorem -- and no further selection is made in steps 1.2 and 1.3. ∎ [F1, F2, step 1.1, step 1.2, step 1.3]
