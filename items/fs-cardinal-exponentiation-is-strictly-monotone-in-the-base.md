---
id: fs-cardinal-exponentiation-is-strictly-monotone-in-the-base
kind: false-statement
title: "FALSE: $\\kappa < \\lambda$ implies $\\kappa^{\\mu} < \\lambda^{\\mu}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, thm-hessenberg, thm-cardinal-power-set-and-cantor, lem-successor-cardinal-exists, cor-the-aleph-and-beth-hierarchies-are-well-defined, def-aleph-and-beth-hierarchies, thm-cardinal-arithmetic-agrees-with-finite-counting, def-cardinal, def-axiom-of-choice, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$\\aleph_0^{\\aleph_0} = \\aleph_1^{\\aleph_0} = 2^{\\aleph_0}$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "P. Koellner, Set Theory: The Independence Phenomenon, Lemma 3.19"
      url: "https://people.math.harvard.edu/~wboney/fall16/settheory.pdf"
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
pipeline_run: null
---

## Statement

**FALSE.** Assume the Axiom of Choice ([[def-axiom-of-choice]]). Cardinal
exponentiation is strictly monotone in the base: for all cardinals
$\kappa, \lambda, \mu$ ([[def-cardinal-arithmetic]]),

$$\kappa < \lambda \quad \Longrightarrow \quad \kappa^{\mu} < \lambda^{\mu} .$$

The claim is plausible because the **weak** form is true —
$\kappa \le \lambda$ does give $\kappa^{\mu} \le \lambda^{\mu}$
([[lem-cardinal-arithmetic-basic-laws]]) — and because Cantor's theorem supplies
the different strict inequality $\kappa < 2^{\kappa}$ at every cardinal
([[thm-cardinal-power-set-and-cantor]]). It fails already at
$\kappa = \aleph_0$, $\lambda = \aleph_1$, $\mu = \aleph_0$, where both powers
collapse to $2^{\aleph_0}$.

## Facts & Assumptions

**Given:** The Axiom of Choice, so that every exponential written here is defined ([[def-cardinal-arithmetic]]).

[L1] $\kappa \le \lambda$ implies $\kappa^{\mu} \le \lambda^{\mu}$; and $(\mu^{\nu})^{\rho} = \mu^{\nu \otimes \rho}$ ([[lem-cardinal-arithmetic-basic-laws]]).

[L2] $\kappa \otimes \kappa = \kappa$ for every infinite cardinal $\kappa$ ([[thm-hessenberg]]).

[L3] $\kappa < 2^{\kappa}$ and $2^{\kappa}$ is a cardinal ([[thm-cardinal-power-set-and-cantor]]).

[L4] $\aleph_1 = \aleph_0^{+}$ is the least cardinal strictly above $\aleph_0$, and $\aleph_0 < \aleph_1$ ([[def-aleph-and-beth-hierarchies]], [[lem-successor-cardinal-exists]], [[cor-the-aleph-and-beth-hierarchies-are-well-defined]]).

[L5] $\aleph_0 = \omega$ is an infinite cardinal and $2 \in \omega$ is a cardinal with $2 \le \aleph_0$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-cardinal]], [[def-aleph-and-beth-hierarchies]]).

[L6] Ordinals satisfy trichotomy and $\alpha \notin \alpha$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\kappa < \lambda$ implies $\kappa^{\mu} < \lambda^{\mu}$ for all cardinals. [assume-contra]

1.2 By [L3] the cardinal $2^{\aleph_0}$ satisfies $\aleph_0 < 2^{\aleph_0}$, so [L4] gives $\aleph_1 \le 2^{\aleph_0}$; with [L5] this chains to $2 \le \aleph_0 < \aleph_1 \le 2^{\aleph_0}$. [L3, L4, L5]

2.1 Applying [L1] along that chain, $2^{\aleph_0} \le \aleph_0^{\aleph_0} \le \aleph_1^{\aleph_0} \le (2^{\aleph_0})^{\aleph_0} = 2^{\aleph_0 \otimes \aleph_0} = 2^{\aleph_0}$, the last two equalities by [L1] and [L2]; so all four values are equal and in particular $\aleph_0^{\aleph_0} = \aleph_1^{\aleph_0}$. [step 1.2, L1, L2, L5, L6]

3.1 But $\aleph_0 < \aleph_1$ by step 1.2, so the assumed claim at $\kappa = \aleph_0$, $\lambda = \aleph_1$, $\mu = \aleph_0$ gives $\aleph_0^{\aleph_0} < \aleph_1^{\aleph_0}$, contradicting step 2.1 by [L6]; therefore exponentiation is not strictly monotone in the base. [step 1.1, step 1.2, step 2.1, L6, discharge-contradiction] ∎

## Remarks

**Why the collapse happens.** For an infinite exponent $\mu$: once the base is at least $2$ and at most $2^{\mu}$, raising it to the power $\mu$ gives the same value, because $(2^{\mu})^{\mu} = 2^{\mu \otimes \mu} = 2^{\mu}$ squeezes the chain shut. So for infinite $\mu$ strict monotonicity in the base can only survive where the base is allowed to exceed $2^{\mu}$, and it fails on the whole interval below it; for finite exponents $\ge 1$ the collapse does not occur, which is why the witness above takes $\mu = \aleph_0$. That is a fact about [[thm-hessenberg]] as much as about exponentiation.

**The weak form is not damaged.** $\kappa \le \lambda \Rightarrow \kappa^{\mu} \le \lambda^{\mu}$ remains true, and so does Cantor's strict inequality $\kappa < 2^{\kappa}$. What fails is the strict form in the base, and it fails at the smallest infinite instance.

**A second casualty of the same computation.** The chain in step 2.1 also shows $\aleph_0^{\aleph_0} = 2^{\aleph_0}$, so raising $\aleph_0$ to its own power adds nothing beyond taking the power set of $\omega$. The companion page carries that computation on its own, together with the corresponding value for $\lvert \mathbb{R}^{\mathbb{R}} \rvert$.
