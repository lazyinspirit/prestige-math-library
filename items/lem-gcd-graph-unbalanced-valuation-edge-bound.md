---
dependency_level: 2
id: lem-gcd-graph-unbalanced-valuation-edge-bound
kind: lemma
title: Far valuation classes have few edges or improve quality
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-finite-weighted-gcd-graph
- lem-gcd-graph-quality-selection-and-pruning
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
proof_strategy: direct
---

## Statement

Let $G$ be a nontrivial finite weighted GCD graph. Let $p\in R(G)$, $r\ge1$, and $k\ge0$ satisfy $p^r>H_0$ and $\mu(W_k)\ge(1-C_0/p)\mu(W)$. Then either some $l\ge0$ with $|l-k|\ge r+1$ satisfies both $q(G_{kl})>2q(G)$ and $\delta(G_{kl})q(G_{kl})>2\delta(G)q(G)$, or
$$ \sum_{|l-k|\ge r+1}\mu(E_{kl})\le\frac{\mu(E)}{4p^{31/30}}. $$
The symmetric assertion holds after exchanging left and right vertex sets.

## Statement references

[Koukoulopoulos–Maynard, §§6–14](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] The full stated result or definition in [[def-finite-weighted-gcd-graph]] is available, with its hypotheses and constants.

[F2] The full stated result or definition in [[lem-gcd-graph-quality-selection-and-pruning]] is available, with its hypotheses and constants.

## Proof

1.1 Suppose beta_k≥1-C_0/p, r≥1 and p^r>H_0. Then either some l with d=|l-k|≥r+1 gives both $Q_{kl}>2$ and $(\delta_{kl}/\delta)Q_{kl}>2$, or [given, F1, F2, algebra]

1.2 $$ \sum_{|l-k|\ge r+1}e_{kl}\le\frac1{4p^s}. \tag{6} $$ [given, F1, F2, algebra]

2.1 If the latter fails, the convergent geometric sum $\sum_{j\in\mathbb Z}2^{-|j|/20}<60$ gives one l with $e_{kl}>[300\,2^{d/20}p^s]^{-1}$. Since l differs from k, beta_l≤C_0/p. the quality identity implies $$ Q_{kl}>10^{-385}p^{-4/3}(p/\sqrt2)^d, \quad(\delta_{kl}/\delta)Q_{kl} >10^{-428}p^{-41/30}(p/2^{11/20})^d. $$ Both bases exceed $1$, so use $d\ge r+1$ directly. The ratio of $p^{-4/3}(p/\sqrt2)^{r+1}$ to $2^{-2/3}p^{r/3}$ is $$ p^{(2r-1)/3}2^{-r/2+1/6}\ge2^{(r-1)/6}\ge1. $$ The ratio of $p^{-41/30}(p/2^{11/20})^{r+1}$ to $2^{-451/600}p^{171r/600}$ is $$ p^{143r/200-11/30}2^{-11r/20+121/600}\ge2^{33(r-1)/200}\ge1. $$ Here the powers of $p$ in both ratios are positive for $r\ge1$, so $p\ge2$ gives the displayed comparisons. Consequently the two quality ratios are respectively greater than $10^{-385}2^{-2/3}p^{r/3}>2$ and $10^{-428}2^{-451/600}p^{171r/600}>2$, since $p^r>10^{2000}$ and $2000/3>666$, $2000\cdot171/600=570$. This proves (6) and its left/right symmetric form. [given, F1, F2, algebra] ∎
