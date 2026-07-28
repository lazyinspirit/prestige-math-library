---
id: fs-cardinal-addition-is-cancellative
kind: false-statement
title: "FALSE: $\\kappa \\oplus \\mu = \\lambda \\oplus \\mu$ implies $\\kappa = \\lambda$"
status: draft
origin: session
deps: [def-cardinal-arithmetic, cor-cardinal-absorption, lem-cardinal-arithmetic-basic-laws, def-aleph-and-beth-hierarchies, thm-cardinal-arithmetic-agrees-with-finite-counting, def-cardinal, lem-omega-least-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$\\aleph_0 \\oplus \\aleph_0 = 1 \\oplus \\aleph_0$"
proof_strategy: contradiction
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
pipeline_run: null
---

## Statement

**FALSE.** Cardinal addition is cancellative: for all cardinals
$\kappa, \lambda, \mu$ ([[def-cardinal]], [[def-cardinal-arithmetic]]),

$$\kappa \oplus \mu = \lambda \oplus \mu \quad \Longrightarrow \quad \kappa = \lambda .$$

The claim is plausible because it is true for **finite** cardinals, where
$\oplus$ is the ordinary addition of natural numbers
([[thm-cardinal-arithmetic-agrees-with-finite-counting]]) and cancellation is a
Peano fact. It fails at the first infinite cardinal, and it fails for the same
reason that infinite arithmetic is easy: absorption
([[cor-cardinal-absorption]]) makes $\oplus$ throw away the smaller argument, and
an operation that forgets one of its inputs cannot be cancelled.

## Facts & Assumptions

**Given:** The cardinal operations of [[def-cardinal-arithmetic]] and the cardinals $0, 1 \in \omega$ and $\aleph_0 = \omega$.

[L1] For an infinite cardinal $\nu$ and a cardinal $\rho \le \nu$: $\nu \oplus \rho = \nu$ ([[cor-cardinal-absorption]]).

[L2] $\oplus$ is commutative ([[lem-cardinal-arithmetic-basic-laws]]).

[L3] Every natural number is a cardinal, $\omega$ is a cardinal, and a cardinal is infinite exactly when $\omega \le \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-cardinal-arithmetic]]).

[L4] $\aleph_0 = \omega$ ([[def-aleph-and-beth-hierarchies]]); $\omega$ is the least limit ordinal and $1 \in \omega$ ([[lem-omega-least-limit-ordinal]]).

[L5] Ordinals satisfy trichotomy, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, and $\alpha \notin \alpha$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the displayed claim holds for all cardinals $\kappa, \lambda, \mu$. [assume-contra]

1.2 By [L3] and [L4] the ordinals $1$ and $\aleph_0 = \omega$ are cardinals, $\aleph_0$ is infinite, $1 \in \aleph_0$ and hence $1 \le \aleph_0$, and $1 \ne \aleph_0$ by [L5]. [L3, L4, L5]

2.1 By [L1] with $\nu = \aleph_0$ and $\rho = \aleph_0$, $\aleph_0 \oplus \aleph_0 = \aleph_0$; and by [L2] and [L1] with $\rho = 1$, $1 \oplus \aleph_0 = \aleph_0 \oplus 1 = \aleph_0$. [step 1.2, L1, L2]

3.1 So the hypothesis of the assumed claim holds at $\kappa = \aleph_0$, $\lambda = 1$, $\mu = \aleph_0$, and the claim would give $\aleph_0 = 1$, which step 1.2 forbids; therefore cardinal addition is not cancellative. [step 1.1, step 1.2, step 2.1, discharge-contradiction] ∎

## Remarks

**The finite case really is cancellative, and nothing above contradicts it.** For $m, n, k \in \omega$ read as cardinals, $m \oplus k = n \oplus k$ is $m +_{\mathbb{N}} k = n +_{\mathbb{N}} k$ by [[thm-cardinal-arithmetic-agrees-with-finite-counting]], and Peano addition is cancellative. The witness above is forced to use an infinite $\mu$, and once $\mu$ is infinite every $\kappa \le \mu$ gives the same sum.

**Multiplication fails in the same way, and for the same reason.** [[cor-cardinal-absorption]] also gives $\aleph_0 \otimes \aleph_0 = \aleph_0 = 1 \otimes \aleph_0$ with $1 \ne \aleph_0$, so $\otimes$ is not cancellative either, even away from the trivial obstruction at $\mu = 0$.

**What survives.** Monotonicity survives: $\kappa \le \lambda$ still gives $\kappa \oplus \mu \le \lambda \oplus \mu$ ([[lem-cardinal-arithmetic-basic-laws]]). It is the *strict* form that fails, and cancellation is exactly the strict form in disguise. Exponentiation is the one place on this page where a strict increase survives at every cardinal, and that is [[thm-cardinal-power-set-and-cantor]].
