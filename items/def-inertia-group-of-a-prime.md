---
id: def-inertia-group-of-a-prime
title: "Inertia group of a prime"
kind: definition
status: draft
origin: pipeline
deps: [def-decomposition-group-of-a-prime, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a79.3.2, Definition 9.3.6 and Proposition 9.3.8, p.106"
      url: https://wstein.org/books/ant/ant.pdf
---

## Definition

Let $L/K$ be a finite Galois extension of number fields, let $p$ be a nonzero prime of $\mathcal O_K$, and choose a prime $P$ of $\mathcal O_L$ above $p$. Set $\kappa(P)=\mathcal O_L/P$ and $\kappa(p)=\mathcal O_K/p$. Each $\sigma\in D(P/p)$ induces a $\kappa(p)$-automorphism $\bar\sigma$ of $\kappa(P)$: the rule $\bar a\mapsto\overline{\sigma a}$ is independent of the representative because $\sigma P=P$. The **inertia group** is
$$I(P/p)=\ker\!\left(D(P/p)\longrightarrow\operatorname{Gal}(\kappa(P)/\kappa(p))\right).$$
Equivalently, $\sigma\in I(P/p)$ exactly when $\sigma\in D(P/p)$ and $\sigma(a)-a\in P$ for every $a\in\mathcal O_L$. It is a normal subgroup of D.
