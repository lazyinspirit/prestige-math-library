---
id: def-reverse-filtration-and-reverse-martingale
kind: definition
title: Reverse filtration and reverse martingale
status: published
origin: pipeline
deps: [def-filtration-and-filtered-probability-space, def-conditional-expectation-as-an-ae-class, thm-tower-property-of-conditional-expectation, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Definition 2.27, p. 17", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Definition

Assume AC. A **reverse filtration** is a decreasing sequence
$$\mathcal G_0\supseteq\mathcal G_1\supseteq\cdots$$
of sub-$\sigma$-algebras, and $\mathcal G_\infty:=\bigcap_{n\ge0}\mathcal G_n$. An integrable process $X_n$, with $X_n$ measurable for $\mathcal G_n$, is a **reverse martingale** if
$$\mathbb E[X_m\mid\mathcal G_n]=X_n\quad\text{a.s. whenever }m\le n.$$

It is enough to require the adjacent identities $\mathbb E[X_n\mid\mathcal G_{n+1}]=X_{n+1}$: iterating them with [[thm-tower-property-of-conditional-expectation]] gives the displayed multistep identity, while the latter immediately includes adjacent indices. In particular $X_n=\mathbb E[X_0\mid\mathcal G_n]$. AC is used for existence of the conditional expectations and, if concrete versions are required, selection of this countable family; all identities are identities of almost-everywhere classes.
