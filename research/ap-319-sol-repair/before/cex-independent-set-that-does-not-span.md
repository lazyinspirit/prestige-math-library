---
id: cex-independent-set-that-does-not-span
kind: counterexample
title: "The standard unit families $\\{\\, e_i : i \\in \\mathbb{N} \\,\\}$ are linearly independent in $F^{\\mathbb{N}}$ but do not span it: the constant family $1_F$ is not a finite linear combination of them"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-basis-of-the-eventually-zero-families, def-linear-independence, def-linear-basis, def-dimension, cor-independent-set-is-no-larger-than-a-finite-spanning-set, thm-every-independent-set-extends-to-a-basis, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-function-space, def-linear-subspace, def-vector-space, def-field, def-countable, def-equinumerous, lem-pigeonhole, def-natural-numbers, def-nat-order, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "independent, infinite, and not spanning"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Sequence space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence_space"
    - title: "Linear independence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_independence"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement refuted

**False claim:** if $V$ is an infinite-dimensional vector space over a field $F$
([[def-dimension]]) and $B \subseteq V$ is a linearly independent subset that is
not finite, then $\operatorname{span}(B) = V$.

Take $F$ any field, $V := F^{\mathbb{N}}$ the function space of all families
$x : \mathbb{N} \to F$ with the pointwise operations ([[def-function-space]]),
and $B := \{\, e_i : i \in \mathbb{N} \,\}$ the standard unit families, where
$e_i(i) = 1_F$ and $e_i(n) = 0_F$ for $n \ne i$. Then $B$ is linearly
independent and not finite, $V$ is infinite-dimensional, and yet
$\operatorname{span}(B) = E$, the linear subspace of eventually zero families,
which is not all of $V$: the constant family $c$ with $c(n) = 1_F$ for every $n$
lies outside it.

So $B$ is an infinite linearly independent set that is **not** a basis of $V$
([[def-linear-basis]]), although it is a basis of $E$.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{\mathbb{N}}$, the set $E$ of eventually zero families, the families $e_i$, and $B = \{\, e_i : i \in \mathbb{N} \,\}$ as above.

[L1] $E$ is a linear subspace of $F^{\mathbb{N}}$; $B \subseteq E$ and $\operatorname{span}(B) = E$; $B$ is linearly independent; and $B \approx \mathbb{N}$ ([[ex-basis-of-the-eventually-zero-families]], claims 1, 2 and 3).

[L2] $F^{X}$ is a vector space over $F$ with pointwise operations, and two of its elements are equal exactly when they agree at every point ([[def-function-space]], [[def-vector-space]], [[def-linear-subspace]]).

[L3] $\mathbb{N} \not\approx p$ for every $p \in \mathbb{N}$ ([[lem-pigeonhole]], claim 4); a set is finite when it is equinumerous with some natural number; $\approx$ is symmetric and transitive ([[def-countable]], [[def-equinumerous]]).

[L4] If a vector space has a spanning set with $p$ elements then no linearly independent subset of it is equinumerous with $\mathbb{N}$; a basis is a spanning set ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], claim 2, [[def-linear-basis]], [[def-linear-independence]], [[def-linear-combination-and-span]], [[lem-span-is-the-set-of-linear-combinations]]).

[L5] $1_F \ne 0_F$ in a field, and the order of $\mathbb{N}$ is reflexive ([[def-field]], [[def-nat-order]], [[lem-nat-order-is-membership]], [[def-natural-numbers]]).

## Counterexample

**Proof technique:** direct.

1.1 $B$ is linearly independent, $\operatorname{span}(B) = E$, and $B \approx \mathbb{N}$. [L1]

1.2 $B$ is not finite: if $B \approx p$ for some $p \in \mathbb{N}$ then, since $B \approx \mathbb{N}$, symmetry and transitivity of $\approx$ would give $\mathbb{N} \approx p$, which is impossible. [L1, L3]

1.3 The constant family $c$ with $c(n) = 1_F$ for every $n$ lies in $F^{\mathbb{N}}$ and not in $E$: for any candidate witness $N$ we have $N \ge N$ and $c(N) = 1_F \ne 0_F$, so no $N$ witnesses that $c$ is eventually zero. [L2, L5]

1.4 $F^{\mathbb{N}}$ is infinite-dimensional. If it had a finite basis, that basis would be a spanning set with $p$ elements for some $p$, and then no linearly independent subset of $F^{\mathbb{N}}$ would be equinumerous with $\mathbb{N}$; but $B$ is such a subset. [L1, L4]

2.1 So $B$ is a linearly independent subset of the infinite-dimensional space $F^{\mathbb{N}}$, it is not finite, and $\operatorname{span}(B) = E \ne F^{\mathbb{N}}$, since $c$ lies in the second and not the first. The false claim therefore fails, and $B$ is not a basis of $F^{\mathbb{N}}$, its span not being the whole space. [step 1.1, step 1.2, step 1.3, step 1.4] ∎

## Remarks

- **What is true instead.** $B$ **extends** to a basis of $F^{\mathbb{N}}$ by [[thm-every-independent-set-extends-to-a-basis]], applied with $L = B$ and $S = F^{\mathbb{N}}$. That is not in tension with anything above: the extension adds vectors outside $\operatorname{span}(B)$, and it is produced by Zorn's lemma rather than exhibited.

- **Where the finite-dimensional intuition breaks.** In a space of dimension $n$, an independent set with $n$ elements does span, because [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]] forbids enlarging it and [[lem-basis-iff-maximal-independent-iff-minimal-spanning]] then makes it a basis. Infinitude is not a substitute for maximality: $B$ is infinite and still extendable.

- **The whole content of the failure is that a linear combination is finite.** Every element of $\operatorname{span}(B)$ is built from finitely many of the $e_i$ ([[lem-span-is-the-set-of-linear-combinations]]), hence vanishes from some index on, while $c$ vanishes nowhere.
