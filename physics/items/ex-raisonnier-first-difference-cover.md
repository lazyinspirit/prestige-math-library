---
id: ex-raisonnier-first-difference-cover
kind: example
title: Cylinder covers generate the Frechet tails in the Raisonnier filter
status: published
origin: pipeline
deps: [def-rapid-and-raisonnier-filters, lem-raisonnier-family-is-a-sigma-one-three-filter]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Lemma 3.8 proof, pp. 46-47"}
verification:
  audited: 2026-09-22
---

## Example

For fixed $n$, enumerate the finitely many length-$n$ binary strings $s$ and use
their cylinders $[s]$ as a countable cover of $L[x]\cap 2^\omega$. Any two
distinct reals in one cylinder first differ at a coordinate at least $n$. Hence
$\omega\setminus n$ belongs to $F(x)$, concretely demonstrating that $F(x)$
extends the Fréchet filter.

## Verification

**Given:** A real $x$, a natural number $n$, and the Raisonnier family $F(x)$ of the definition item.

[F1] [[def-rapid-and-raisonnier-filters]]: cylinders, the first-difference function and the defining cover criterion for F(x).

1.1 Let $s_0,\dots,s_{2^n-1}$ enumerate all binary strings of length $n$ in the canonical order and put $F_i=[s_i]$ for $i<2^n$, padded by empty sets for $i\ge2^n$. Every real in $L[x]\cap2^\omega$ extends exactly one of the listed strings, so $L[x]\cap2^\omega\subseteq\bigcup_iF_i$; this is a countable cover of the required kind. [F1]

2.1 If $u\ne v$ both lie in one cylinder $[s]$ with $|s|=n$, then $u$ and $v$ agree on all coordinates below $n$. Their first differing coordinate is therefore at least $n$, so the prefix length defined by [F1] satisfies $h(u,v)\ge n+1$, and in particular $\bigcup_iH(F_i)\subseteq\{k:k\ge n\}=\omega\setminus n$. [F1, step 1.1]

3.1 Therefore $\omega\setminus n\in F(x)$ by the defining cover criterion, for every $n<\omega$, so $F(x)$ contains the Fréchet filter. [F1, step 2.1]

3.2 The case $n=0$ is included: the unique length-$0$ string has cylinder $2^\omega$, every pair of distinct reals in it has first differing prefix length at least $1$, and the cover is the single set $2^\omega$ padded by empty sets, giving $\omega=\omega\setminus0\in F(x)$. [step 2.1]

4.1 The steps above exhibit the cofinite tails as members of $F(x)$ through explicit cylinder covers, which is the claim. [step 3.1, step 3.2] ∎
