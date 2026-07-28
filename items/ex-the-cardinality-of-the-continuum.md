---
id: ex-the-cardinality-of-the-continuum
kind: example
title: "$\\mathbb{R} \\approx \\mathcal{P}(\\mathbb{N})$ in ZF, by the Cantor set for one injection and by the cuts $\\{q \\in \\mathbb{Q} : q < x\\}$ for the other; so $\\lvert \\mathbb{R} \\rvert = 2^{\\aleph_0}$ under the Axiom of Choice"
status: draft
origin: session
deps: [thm-cantor-set-ternary-description, def-cantor-set, thm-rationals-countable, lem-of-q-dense, lem-of-q-embeds, thm-of-archimedean, def-complete-ordered-field, def-real-numbers, def-real-order, def-sequence, thm-schroder-bernstein, lem-cardinal-operations-are-well-defined, lem-cardinality-of-a-well-orderable-set, def-cardinal-arithmetic, thm-cardinal-power-set-and-cantor, def-aleph-and-beth-hierarchies, def-cardinal, def-equinumerous, def-injection-surjection-bijection, def-axiom-of-choice, thm-well-ordering-theorem, def-natural-numbers, def-countable]
justified_by: []
aliases: [ex-continuum-is-two-to-the-aleph-null]
landmark: true
short: "$\\lvert \\mathbb{R}\\rvert = 2^{\\aleph_0}$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
pipeline_run: null
---

## Example

Write ${}^{\omega}2$ for the set of functions $\omega \to 2 = \{0,1\}$, the
$2$ here being the von Neumann natural number, and $\mathcal{P}(\mathbb{N})$ for
the power set of $\mathbb{N} = \omega$ ([[def-natural-numbers]]). Then:

**(a) In ZF, with no choice principle:**

$$\mathbb{R} \;\approx\; {}^{\omega}2 \;\approx\; \mathcal{P}(\mathbb{N})$$

([[def-equinumerous]], [[def-real-numbers]]).

**(b) Assuming the Axiom of Choice** ([[def-axiom-of-choice]]):

$$\lvert \mathbb{R} \rvert \;=\; 2^{\aleph_0} \;=\; \lvert \mathcal{P}(\mathbb{N}) \rvert$$

([[def-cardinal-arithmetic]], [[def-aleph-and-beth-hierarchies]]).

The two injections are the classical ones and neither uses a binary expansion.
One direction is the Cantor set: [[thm-cantor-set-ternary-description]] already
supplies a bijection from the sequences with values in $\{0,1\}$ onto the Cantor
set $C \subseteq \mathbb{R}$ ([[def-cantor-set]]). The other is the cut map
$x \mapsto \{q \in \mathbb{Q} : q < x\}$, injective because $\mathbb{Q}$ is dense
in $\mathbb{R}$ ([[lem-of-q-dense]]), and $\mathcal{P}(\mathbb{Q})$ is a copy of
$\mathcal{P}(\mathbb{N})$ because $\mathbb{Q}$ is countable
([[thm-rationals-countable]]). [[thm-schroder-bernstein]] closes the loop, and it
is choice free, which is what makes clause (a) a theorem of ZF.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its order and the canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$; the Axiom of Choice is assumed only in clause (b).

[L1] $\mathbb{R}$ is a complete ordered field with a total order ([[def-real-numbers]], [[def-complete-ordered-field]], [[def-real-order]]), hence Archimedean ([[thm-of-archimedean]]), and $\iota : \mathbb{Q} \to \mathbb{R}$ is the unique order-preserving field embedding ([[lem-of-q-embeds]]).

[L2] For $x < y$ in an Archimedean ordered field there is a rational $q$ with $x < \iota(q) < y$ ([[lem-of-q-dense]]).

[L3] There is a bijection from the set of sequences with values in $\{0,1\}$ onto the Cantor set $C \subseteq \mathbb{R}$ (claim 3 of [[thm-cantor-set-ternary-description]], [[def-cantor-set]]); a sequence of reals is a function $\mathbb{N} \to \mathbb{R}$ ([[def-sequence]]).

[L4] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-countable]]).

[L5] $A \approx B$ implies $\mathcal{P}(A) \approx \mathcal{P}(B)$ and ${}^{C}A \approx {}^{C}B$ ([[lem-cardinal-operations-are-well-defined]]).

[L6] If $A \preceq B$ and $B \preceq A$ then $A \approx B$ ([[thm-schroder-bernstein]]).

[L7] $\lvert X\rvert$ is the least ordinal equinumerous with $X$ and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]]); assuming the Axiom of Choice every set has one ([[thm-well-ordering-theorem]]).

[L8] Assuming the Axiom of Choice, $2^{\kappa} = \lvert \mathcal{P}(\kappa)\rvert$, and $\aleph_0 = \omega$ ([[thm-cardinal-power-set-and-cantor]], [[def-cardinal-arithmetic]], [[def-aleph-and-beth-hierarchies]]).

[L9] A subset inclusion is an injection, a composition of injections is an injection, and a map with a two-sided inverse is a bijection ([[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 The two-element sets $2 = \{0,1\}$ and $\{0_{\mathbb{R}}, 1_{\mathbb{R}}\}$ are equinumerous, since $0_{\mathbb{R}} \ne 1_{\mathbb{R}}$ in a field, so ${}^{\omega}2 \approx {}^{\omega}\{0_{\mathbb{R}},1_{\mathbb{R}}\}$ by [L5]. [L1, L5, L9]

1.2 The set ${}^{\omega}\{0_{\mathbb{R}},1_{\mathbb{R}}\}$ is exactly the set of sequences with values in $\{0,1\}$ of [L3], so it is in bijection with $C \subseteq \mathbb{R}$, and composing with the inclusion gives an injection ${}^{\omega}\{0_{\mathbb{R}},1_{\mathbb{R}}\} \to \mathbb{R}$. [L3, L9]

1.3 The map $x \mapsto Q_x := \{\, q \in \mathbb{Q} : \iota(q) < x \,\}$ is an injection $\mathbb{R} \to \mathcal{P}(\mathbb{Q})$: for $x \ne y$ the order is total by [L1], so we may assume $x < y$, and [L2] supplies a rational $q$ with $x < \iota(q) < y$, whence $q \in Q_y$ and $q \notin Q_x$, so $Q_x \ne Q_y$. [L1, L2]

1.4 $\mathcal{P}(\mathbb{Q}) \approx \mathcal{P}(\mathbb{N})$ by [L4] and [L5]. [L4, L5]

1.5 $\mathcal{P}(\mathbb{N}) \approx {}^{\omega}2$: the map sending $S \subseteq \mathbb{N}$ to its characteristic function has the two-sided inverse $h \mapsto h^{-1}[\{1\}]$. [L9]

2.1 Chaining steps 1.1, 1.2 gives ${}^{\omega}2 \preceq \mathbb{R}$, and chaining steps 1.3, 1.4, 1.5 gives $\mathbb{R} \preceq {}^{\omega}2$; so [L6] yields $\mathbb{R} \approx {}^{\omega}2$, and with step 1.5 also $\mathbb{R} \approx \mathcal{P}(\mathbb{N})$, which is clause (a) and uses no choice principle. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, L6, L9]

3.1 Assuming the Axiom of Choice, all three sets have cardinalities by [L7], equal by step 2.1, and $\lvert \mathcal{P}(\mathbb{N})\rvert = 2^{\lvert \omega \rvert} = 2^{\aleph_0}$ by [L8] and [L7]; so $\lvert \mathbb{R}\rvert = 2^{\aleph_0} = \lvert \mathcal{P}(\mathbb{N})\rvert$, which is clause (b). [step 2.1, L7, L8] ∎

## Remarks

**Why binary expansions are avoided.** The textbook proof identifies a real in $[0,1]$ with the set of positions where its binary expansion has a $1$, and then has to deal with the reals having two expansions. Neither injection above meets that difficulty: the Cantor set map is already published as a bijection, and the cut map needs only density. The cost is that the two injections go in opposite directions and [[thm-schroder-bernstein]] is required to combine them, which is free, since that theorem is choice free.

**Which half needs the Axiom of Choice, and why.** Clause (a) is an equinumerosity statement and is a theorem of ZF. Clause (b) writes $\lvert \mathbb{R}\rvert$ and $2^{\aleph_0}$ as **cardinals**, that is as ordinals, and in ZF alone $\mathcal{P}(\mathbb{N})$ need not be well-orderable, so those symbols need not denote anything. The hypothesis buys the notation, not the mathematics.

**What is still not decided.** Nothing here says which aleph $2^{\aleph_0}$ is. The one constraint proved in this development is that its cofinality is uncountable ([[cor-cofinality-of-a-cardinal-power]]), and the question of whether it is $\aleph_1$ is the continuum hypothesis ([[rem-cardinal-arithmetic-choice-ledger]]).
