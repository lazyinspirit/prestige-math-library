---
id: ex-counting-functions-and-subsets-of-the-continuum
kind: example
title: "$\\aleph_0^{\\aleph_0} = 2^{\\aleph_0}$ and $\\lvert \\mathbb{R}^{\\mathbb{R}} \\rvert = 2^{2^{\\aleph_0}}$, computed from the exponent laws and Hessenberg"
status: draft
origin: session
deps: [def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, lem-cardinal-operations-are-well-defined, thm-hessenberg, cor-cardinal-absorption, thm-cardinal-power-set-and-cantor, ex-the-cardinality-of-the-continuum, thm-cardinal-arithmetic-agrees-with-finite-counting, lem-cardinality-of-a-well-orderable-set, def-aleph-and-beth-hierarchies, def-axiom-of-choice, thm-well-ordering-theorem, def-cardinal, def-equinumerous, def-injection-surjection-bijection, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$\\aleph_0^{\\aleph_0} = 2^{\\aleph_0}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Write
$\mathfrak{c} = 2^{\aleph_0}$, and let $\mathbb{R}^{\mathbb{R}}$ denote the set
${}^{\mathbb{R}}\mathbb{R}$ of **all** functions $\mathbb{R} \to \mathbb{R}$,
continuity playing no role. Then

$$\aleph_0^{\aleph_0} \;=\; 2^{\aleph_0} \;=\; \mathfrak{c}, \qquad \lvert \mathbb{R}^{\mathbb{R}} \rvert \;=\; 2^{2^{\aleph_0}} .$$

Both computations are squeezes: an upper and a lower bound that meet, with
[[thm-hessenberg]] closing the gap through $\kappa \otimes \kappa = \kappa$ and
the second exponent law ([[lem-cardinal-arithmetic-basic-laws]]) turning a
repeated exponent into a product.

The second value is worth reading against the first. There are $\mathfrak{c}$
real numbers and $2^{\mathfrak{c}}$ functions between them, so the set of all
real functions is strictly larger than the continuum
([[thm-cardinal-power-set-and-cantor]]), by exactly one application of the power
operation.

## Facts & Assumptions

**Given:** The Axiom of Choice, so that every exponential below is defined ([[def-cardinal-arithmetic]], [[thm-well-ordering-theorem]]).

[L1] $\kappa \le \lambda$ implies $\kappa^{\mu} \le \lambda^{\mu}$; $(\mu^{\nu})^{\rho} = \mu^{\nu \otimes \rho}$; and for cardinals $\kappa \le \lambda$ iff $\kappa \preceq \lambda$ ([[lem-cardinal-arithmetic-basic-laws]]).

[L2] $\kappa \otimes \kappa = \kappa$ for every infinite cardinal $\kappa$ ([[thm-hessenberg]]); and $\mu \otimes \nu = \mu$ for an infinite cardinal $\mu$ and a cardinal $\nu$ with $0 \ne \nu \le \mu$ ([[cor-cardinal-absorption]]).

[L3] $\kappa < 2^{\kappa}$, and $2^{\kappa}$ is a cardinal ([[thm-cardinal-power-set-and-cantor]]).

[L4] $\lvert \mathbb{R}\rvert = 2^{\aleph_0}$ ([[ex-the-cardinality-of-the-continuum]]).

[L5] $\lvert {}^{B}A \rvert = \lvert A \rvert^{\lvert B \rvert}$ whenever the sets involved have cardinalities, because ${}^{B}A$ respects $\approx$ in both arguments ([[def-cardinal-arithmetic]], [[lem-cardinal-operations-are-well-defined]], [[lem-cardinality-of-a-well-orderable-set]], [[def-equinumerous]]).

[L6] $\aleph_0 = \omega$ is an infinite cardinal and $2 \in \omega$ is a cardinal with $2 \le \aleph_0$ ([[def-aleph-and-beth-hierarchies]], [[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-cardinal]]).

[L7] Ordinals satisfy trichotomy, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, and $\alpha \subseteq \beta \subseteq \alpha$ forces $\alpha = \beta$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 By [L6] and [L3], $2 \le \aleph_0 \le 2^{\aleph_0}$; so [L1] gives $2^{\aleph_0} \le \aleph_0^{\aleph_0} \le (2^{\aleph_0})^{\aleph_0}$, and $(2^{\aleph_0})^{\aleph_0} = 2^{\aleph_0 \otimes \aleph_0} = 2^{\aleph_0}$ by [L1] and [L2]; therefore $\aleph_0^{\aleph_0} = 2^{\aleph_0}$ by [L7]. [L1, L2, L3, L6, L7]

1.2 Writing $\mathfrak{c} = 2^{\aleph_0}$, [L4] and [L5] give $\lvert \mathbb{R}^{\mathbb{R}} \rvert = \lvert \mathbb{R} \rvert^{\lvert \mathbb{R} \rvert} = \mathfrak{c}^{\mathfrak{c}}$. [L4, L5]

2.1 $\mathfrak{c}^{\mathfrak{c}} = (2^{\aleph_0})^{\mathfrak{c}} = 2^{\aleph_0 \otimes \mathfrak{c}} = 2^{\mathfrak{c}}$: the middle equality is the second exponent law in [L1], and the last is absorption in [L2], applicable because $\mathfrak{c}$ is an infinite cardinal with $0 \ne \aleph_0 \le \mathfrak{c}$ by [L3] and [L6]. [step 1.2, L1, L2, L3, L6]

3.1 So $\aleph_0^{\aleph_0} = 2^{\aleph_0}$ and $\lvert \mathbb{R}^{\mathbb{R}} \rvert = 2^{\mathfrak{c}} = 2^{2^{\aleph_0}}$. [step 1.1, step 2.1] ∎

## Remarks

**Why the first computation is a collapse and not a coincidence.** Any base between $2$ and $2^{\aleph_0}$ gives the same value when raised to $\aleph_0$, because the chain of step 1.1 closes on both sides. That is the general phenomenon recorded in [[fs-cardinal-exponentiation-is-strictly-monotone-in-the-base]]: strict monotonicity in the base is false, and this is the smallest instance.

**Where Hessenberg's theorem enters.** Twice, both times as $\kappa \otimes \kappa = \kappa$ turning a repeated exponent into a single one: at $\aleph_0$ in step 1.1 and, through absorption, at $\mathfrak{c}$ in step 2.1. Without it neither exponent could be simplified and both computations would stall at an upper bound.

**Continuity is irrelevant here, and that is worth saying.** $\mathbb{R}^{\mathbb{R}}$ above is the set of **all** functions, with no regularity assumed. Counting the continuous ones is a different computation, needing tools this page and the pages it rests on do not provide, and no claim about it is made here.
