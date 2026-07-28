---
id: thm-cardinal-power-set-and-cantor
kind: theorem
title: "Assuming the Axiom of Choice, $2^{\\kappa} = \\lvert \\mathcal{P}(\\kappa) \\rvert$, and Cantor's theorem in cardinal form: $\\kappa < 2^{\\kappa}$"
status: published
origin: session
deps: [def-cardinal-arithmetic, thm-cantor-powerset, def-equinumerous, lem-cardinality-of-a-well-orderable-set, lem-cardinal-operations-are-well-defined, def-injection-surjection-bijection, lem-cardinal-arithmetic-basic-laws, def-cardinal, def-axiom-of-choice, thm-well-ordering-theorem, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "$\\kappa < 2^{\\kappa} = \\lvert\\mathcal{P}(\\kappa)\\rvert$"
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
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), so that every set has a
cardinality ([[thm-well-ordering-theorem]],
[[lem-cardinality-of-a-well-orderable-set]]). Let $\kappa$ be a cardinal
([[def-cardinal]]) and read $2 = \{0,1\}$ as a cardinal. Then:

**(a)** $2^{\kappa} = \lvert \mathcal{P}(\kappa) \rvert$
([[def-cardinal-arithmetic]]), and more generally
$2^{\lvert A \rvert} = \lvert \mathcal{P}(A) \rvert$ for every set $A$;

**(b)** $\kappa < 2^{\kappa}$.

Clause (b) is [[thm-cantor-powerset]] transcribed into cardinal arithmetic. The
underlying combinatorial fact — that there is no surjection $A \to \mathcal{P}(A)$
— is a theorem of ZF and needs no choice at all; what the Axiom of Choice buys
here is only the right to write $\lvert \mathcal{P}(A) \rvert$ and $2^{\kappa}$
as cardinals in the first place.

## Facts & Assumptions

**Given:** The Axiom of Choice, a cardinal $\kappa$, and a set $A$.

[L1] $\kappa^{\lambda} = \lvert {}^{\lambda}\kappa \rvert$, where ${}^{\lambda}\kappa$ is the set of functions $\lambda \to \kappa$ ([[def-cardinal-arithmetic]]).

[L2] There is no surjection $A \to \mathcal{P}(A)$, and $A \prec \mathcal{P}(A)$, that is $A \preceq \mathcal{P}(A)$ and $A \not\approx \mathcal{P}(A)$ ([[thm-cantor-powerset]], [[def-equinumerous]]).

[L3] For a well-orderable $X$, $X \approx \lvert X \rvert$, the value is a cardinal, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]]).

[L4] $A \approx B$ implies $\mathcal{P}(A) \approx \mathcal{P}(B)$ (claim (b) of [[lem-cardinal-operations-are-well-defined]]).

[L5] For cardinals, $\kappa \le \lambda$ if and only if $\kappa \preceq \lambda$; and $A \preceq B$ with both well-orderable gives $\lvert A \rvert \le \lvert B \rvert$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L6] Assuming the Axiom of Choice every set is well-orderable, hence has a cardinality ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[L7] Ordinals satisfy trichotomy, and a map with a two-sided inverse is a bijection ([[lem-ordinal-trichotomy]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 The map $\chi : \mathcal{P}(\kappa) \to {}^{\kappa}2$ sending $S$ to its characteristic function, $\chi_S(\xi) = 1$ for $\xi \in S$ and $\chi_S(\xi) = 0$ otherwise, has the two-sided inverse $h \mapsto h^{-1}[\{1\}]$, so it is a bijection and $\mathcal{P}(\kappa) \approx {}^{\kappa}2$. [L7]

1.2 By [L2], $\kappa \preceq \mathcal{P}(\kappa)$ and $\kappa \not\approx \mathcal{P}(\kappa)$. [L2]

2.1 Claim (a): by [L6] both $\mathcal{P}(\kappa)$ and ${}^{\kappa}2$ have cardinalities, equal by step 1.1 and [L3], so $\lvert \mathcal{P}(\kappa)\rvert = \lvert {}^{\kappa}2\rvert = 2^{\kappa}$ by [L1]; and for an arbitrary set $A$, $A \approx \lvert A \rvert$ by [L3] gives $\mathcal{P}(A) \approx \mathcal{P}(\lvert A \rvert)$ by [L4], hence $\lvert \mathcal{P}(A)\rvert = 2^{\lvert A \rvert}$. [step 1.1, L1, L3, L4, L6]

2.2 By [L5] applied to step 1.2, $\kappa = \lvert \kappa \rvert \le \lvert \mathcal{P}(\kappa)\rvert$; and $\kappa \ne \lvert \mathcal{P}(\kappa)\rvert$, since otherwise $\kappa \approx \lvert \mathcal{P}(\kappa)\rvert \approx \mathcal{P}(\kappa)$ by [L3], contradicting step 1.2. [step 1.2, L3, L5, L6]

3.1 Therefore $\kappa < \lvert \mathcal{P}(\kappa)\rvert = 2^{\kappa}$ by trichotomy, which with step 2.1 is claim (b). [step 2.1, step 2.2, L7] ∎

## Remarks

**Why $2$ and not some other base.** The characteristic function of a subset takes two values, so the power set is the function space with base $2$; that is the whole content of step 1.1, and it is why $2^{\kappa}$ rather than $\mathcal{P}$ is the object cardinal arithmetic manipulates. For infinite $\kappa$, any base $\mu$ with $2 \le \mu$ gives the same value once $\mu \le 2^{\kappa}$, by monotonicity, the second exponent law and [[thm-hessenberg]], and the companion page computes one such case; for finite $\kappa$ the bases genuinely differ, $3^{2} = 9 \ne 4 = 2^{2}$.

**No fixed point.** Clause (b) holds for **every** cardinal, so no cardinal satisfies $2^{\kappa} = \kappa$ and the hierarchy of cardinals never terminates. The corresponding statement one level up — that $\alpha \mapsto \aleph_\alpha$ has no fixed point — is **false**, and the companion page exhibits one; the two operations behave quite differently, and it is the power operation, not the successor operation, that is unboundedly expansive.

**Where the Axiom of Choice is and is not spent.** [[thm-cantor-powerset]] is choice free, and so is step 1.1. The hypothesis is used exactly twice, both times to know that a set has a cardinality: at $\mathcal{P}(\kappa)$ and at ${}^{\kappa}2$. In ZF alone, $\mathcal{P}(\omega)$ may fail to be well-orderable, and then $2^{\aleph_0}$ is not an ordinal and the inequality of clause (b) has no cardinal to compare $\kappa$ with — while the underlying statement "there is no surjection $\omega \to \mathcal{P}(\omega)$" remains a theorem.
