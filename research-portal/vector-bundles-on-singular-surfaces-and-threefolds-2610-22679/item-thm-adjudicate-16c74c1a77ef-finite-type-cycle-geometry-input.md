---
title: Regularity and dimensions for finite-type cycle arguments
status: published
research_item: thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input
dependency_level: 0
---

PDF p. 13: Proof of Proposition 6.1: ordinary CH3 identification and degree-seven vanishing

## Prerequisites

- [Stacks Project, smooth schemes over fields · Lemma 33.25.3; live tag text inspected 2026-11-09](https://stacks.math.columbia.edu/tag/056S)
- [Stacks Project, regular local rings · Lemma 10.106.2; live section text inspected 2026-11-09](https://stacks.math.columbia.edu/tag/00NN)
- [Stacks Project, finite-type dimension formulas · Lemmas 10.116.1-10.116.3; live section text inspected 2026-11-09](https://stacks.math.columbia.edu/tag/07NB)
- [Stacks Project, dimension formula for a proper dominant map · Lemma 29.53.4; live tag text inspected 2026-11-09](https://stacks.math.columbia.edu/tag/02JX)
- [Stacks Project, dimensions of Cartier divisor components · Lemma 42.16.1; live tag text inspected 2026-11-09](https://stacks.math.columbia.edu/tag/02RK)

## Statement
Let $k$ be a field. A smooth $k$-scheme is regular, and every regular local ring is a domain. If $T$ is an integral finite-type $k$-scheme and $D\subset T$ is integral and closed, then $\dim T=\operatorname{trdeg}_k k(T)$ and $\operatorname{codim}_T D=\dim T-\dim D$. Every nonempty open of $T$ has the same dimension as $T$. Every irreducible component of an effective Cartier divisor on $T$ has dimension $\dim T-1$.

If $p:P\to Q$ is a proper dominant morphism of integral finite-type $k$-schemes, then $\dim P=\dim Q+\operatorname{trdeg}_{k(Q)}k(P)$. None of these assertions requires separatedness over $k$.

## External input
Import the stated regularity, domain and dimension results from the specified Stacks lemmas. The affine dimension and local codimension formulas apply on affine neighbourhoods of the relevant generic points; all nonempty affine charts of an integral scheme have the same function field. Their formulas therefore retain their scope on nonseparated schemes. The field base satisfies Situation 42.7.1. The application uses only finite-type schemes. The cited source statements and indicated proofs were read; their deeper prerequisites are accepted external inputs, not reconstructed local proofs. The version is the live tag text retrieved on 2026-11-09; no pinned repository commit is asserted.
