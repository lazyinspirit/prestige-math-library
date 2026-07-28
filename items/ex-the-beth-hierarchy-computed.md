---
id: ex-the-beth-hierarchy-computed
kind: example
title: "$\\beth_0 = \\aleph_0$, $\\beth_1 = 2^{\\aleph_0} = \\lvert \\mathbb{R} \\rvert$, $\\beth_2 = \\lvert \\mathcal{P}(\\mathbb{R}) \\rvert$, and $\\beth_\\omega$ has cofinality $\\aleph_0$"
status: published
origin: session
deps: [def-aleph-and-beth-hierarchies, cor-the-aleph-and-beth-hierarchies-are-well-defined, def-cardinal-arithmetic, thm-cardinal-power-set-and-cantor, ex-the-cardinality-of-the-continuum, lem-cardinality-of-a-well-orderable-set, thm-cardinal-arithmetic-agrees-with-finite-counting, def-cofinality, thm-cofinality-basics, def-cofinal-subset-of-an-ordinal, def-axiom-of-choice, thm-well-ordering-theorem, def-cardinal, def-limit-ordinal, lem-omega-least-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "$\\beth_0, \\beth_1, \\beth_2, \\operatorname{cf}(\\beth_\\omega)$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Beth number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Beth_number"
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), which is what makes the
beths available at all ([[def-aleph-and-beth-hierarchies]]). Then

$$\beth_0 = \aleph_0, \qquad \beth_1 = 2^{\aleph_0} = \lvert \mathbb{R} \rvert, \qquad \beth_2 = 2^{2^{\aleph_0}} = \lvert \mathcal{P}(\mathbb{R}) \rvert,$$

and

$$\operatorname{cf}(\beth_\omega) = \aleph_0 < \beth_\omega ,$$

so $\beth_\omega$ is singular ([[def-cofinality]]).

The first three values are the definition unwound, once
$\lvert \mathbb{R}\rvert = 2^{\aleph_0}$ is known
([[ex-the-cardinality-of-the-continuum]]) and once
$2^{\lvert A \rvert} = \lvert \mathcal{P}(A)\rvert$ is available for an arbitrary
set ([[thm-cardinal-power-set-and-cantor]]). The last is the same cofinality
argument that applies to $\aleph_\omega$, and for the same reason: the index
$\omega$ is a limit reached by an $\omega$-indexed family, and the beth operation
is continuous at limits.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] $\beth_0 = \omega$, $\beth_{\alpha+1} = 2^{\beth_\alpha}$, and $\beth_\lambda = \bigcup\{\beth_\beta : \beta \in \lambda\}$ at a limit $\lambda$; every $\beth_\alpha$ is an infinite cardinal and the operation is strictly increasing; $\aleph_0 = \omega$ ([[def-aleph-and-beth-hierarchies]], [[cor-the-aleph-and-beth-hierarchies-are-well-defined]]).

[L2] $2^{\lvert A \rvert} = \lvert \mathcal{P}(A)\rvert$ for every set $A$, and $\kappa < 2^{\kappa}$ ([[thm-cardinal-power-set-and-cantor]], [[def-cardinal-arithmetic]]).

[L3] $\lvert \mathbb{R}\rvert = 2^{\aleph_0}$ ([[ex-the-cardinality-of-the-continuum]]).

[L4] $\lvert X\rvert$ is the least ordinal equinumerous with $X$, equinumerous sets receive the same one, and $\lvert \alpha\rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]], [[def-equinumerous]]); assuming the Axiom of Choice every set has a cardinality ([[thm-well-ordering-theorem]]).

[L5] For a limit ordinal $\lambda$: $\operatorname{cf}(\lambda)$ is an infinite cardinal, and every cofinal $C \subseteq \lambda$ satisfies $\operatorname{cf}(\lambda) \le \lvert C\rvert$ ([[thm-cofinality-basics]], [[def-cofinality]], [[def-cofinal-subset-of-an-ordinal]]).

[L6] Every infinite cardinal is a limit ordinal, and a cardinal is infinite exactly when $\omega \le \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-limit-ordinal]]).

[L7] $\omega$ is a limit ordinal ([[lem-omega-least-limit-ordinal]]); ordinals satisfy trichotomy, $\bigcup$ of a set of ordinals is its least upper bound, and $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$ ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 $\beth_0 = \omega = \aleph_0$, by the two base clauses in [L1]. [L1]

1.2 The set $C = \{\beth_n : n \in \omega\}$ exists by Replacement, is contained in $\beth_\omega$ by the strict increase in [L1], and is cofinal in $\beth_\omega = \bigcup C$, since every $\zeta \in \beth_\omega$ lies in some $\beth_n$ and hence satisfies $\zeta \le \beth_n$; and $n \mapsto \beth_n$ is injective by that same strict increase, so $C \approx \omega$ and $\lvert C\rvert = \aleph_0$ by [L4] and [L1]. [L1, L4, L7]

2.1 $\beth_1 = 2^{\beth_0} = 2^{\aleph_0}$ by [L1] and step 1.1, and this equals $\lvert \mathbb{R}\rvert$ by [L3]. [step 1.1, L1, L3]

2.2 $\beth_\omega$ is an infinite cardinal by [L1], hence a limit ordinal by [L6], so [L5] applied to step 1.2 gives $\operatorname{cf}(\beth_\omega) \le \aleph_0$, while $\operatorname{cf}(\beth_\omega)$ is an infinite cardinal by [L5] and so $\aleph_0 \le \operatorname{cf}(\beth_\omega)$ by [L6]; hence $\operatorname{cf}(\beth_\omega) = \aleph_0$ by [L7], and $\aleph_0 = \beth_0 < \beth_\omega$ by the strict increase in [L1]. [step 1.2, L1, L5, L6, L7]

3.1 $\beth_2 = 2^{\beth_1} = 2^{\lvert \mathbb{R}\rvert} = \lvert \mathcal{P}(\mathbb{R})\rvert$ by [L1], step 2.1 and [L2]; and $2^{\beth_1} = 2^{2^{\aleph_0}}$ by step 2.1. [step 2.1, L1, L2] ∎

## Remarks

**Where the beths and the alephs are known to agree, and where they are not.** $\beth_0 = \aleph_0$ by the base clauses. Beyond that, this development proves $\aleph_1 \le \beth_1$ ([[ex-aleph-one-is-at-most-the-continuum]]) and nothing sharper: whether $\beth_1 = \aleph_1$ is the continuum hypothesis, which [[rem-cardinal-arithmetic-choice-ledger]] records as undecided by the axioms in use here.

**Why $\beth_2$ is written two ways.** As $2^{2^{\aleph_0}}$ it is a cardinal computation; as $\lvert \mathcal{P}(\mathbb{R})\rvert$ it is a statement about a familiar set. The bridge is the general clause $2^{\lvert A\rvert} = \lvert \mathcal{P}(A)\rvert$ of [[thm-cardinal-power-set-and-cantor]], applied at $A = \mathbb{R}$; without it the two expressions would have to be related by hand.

**Singularity at a limit index is generic, not special to $\beth_\omega$.** The computation of step 2.2 uses only that the operation is strictly increasing and continuous at $\omega$, so it applies verbatim to $\aleph_\omega$ ([[ex-the-cofinality-of-aleph-omega]]) and to the fixed-point tower of [[ex-an-aleph-fixed-point]]. What is not generic is the value of the cofinality at other limit indices, which depends on the index and not on the operation.
