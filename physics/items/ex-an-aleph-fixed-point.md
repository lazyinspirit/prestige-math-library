---
id: ex-an-aleph-fixed-point
kind: example
title: "An ordinal $\\alpha$ with $\\aleph_\\alpha = \\alpha$, built as the supremum of the tower $\\aleph_0, \\aleph_{\\aleph_0}, \\aleph_{\\aleph_{\\aleph_0}}, \\dots$, and its cofinality is $\\aleph_0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-aleph-and-beth-hierarchies, cor-the-aleph-and-beth-hierarchies-are-well-defined, lem-recursion-on-the-ordinals, thm-transfinite-induction, def-cofinality, thm-cofinality-basics, def-cofinal-subset-of-an-ordinal, thm-cardinal-arithmetic-agrees-with-finite-counting, lem-cardinality-of-a-well-orderable-set, def-cardinal, def-ordinal, def-limit-ordinal, lem-omega-least-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-natural-numbers, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
short: "$\\aleph_\\alpha = \\alpha$"
proof_strategy: direct
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
    - title: "MATH 5001, Fixed Points of the Aleph Sequence"
      url: "https://math.osu.edu/~derdzinski.1/courses/5001/fixed-points.pdf"
    - title: "Aleph number — fixed points (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Aleph_number#Fixed_points_of_omega"
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
pipeline_run: null
---

## Example

Work in ZF; no choice principle is used. There is a tower of ordinals with

$$T(0) = \aleph_0, \qquad T(n+1) = \aleph_{T(n)} \quad (n \in \omega),$$

so that $T(1) = \aleph_{\aleph_0} = \aleph_\omega$ and
$T(2) = \aleph_{\aleph_\omega}$ ([[def-aleph-and-beth-hierarchies]]). Put

$$\alpha \;=\; \sup\{\, T(n) : n \in \omega \,\} \;=\; \bigcup\{\, T(n) : n \in \omega \,\}.$$

Then

$$\aleph_\alpha \;=\; \alpha, \qquad \operatorname{cf}(\alpha) = \aleph_0 ,$$

so $\alpha$ is an infinite cardinal ([[def-cardinal]]) fixed by the aleph
operation, and it is singular ([[def-cofinality]]).

**So the aleph operation has fixed points**, even though it is strictly
increasing and satisfies $\beta \le \aleph_\beta$ at every ordinal
([[cor-the-aleph-and-beth-hierarchies-are-well-defined]]). The power operation
behaves differently: assuming the Axiom of Choice, so that $2^{\kappa}$ is a
cardinal at all, $\kappa < 2^{\kappa}$ at every cardinal
([[thm-cardinal-power-set-and-cantor]]), so there are no fixed points there at
all. That comparison is an aside; nothing below uses it, and the example itself
stays in ZF.

## Facts & Assumptions

**Given:** ZF, with no choice principle. Write $n + 1 = n \cup \{n\}$ for the successor of $n \in \omega$ ([[def-natural-numbers]]).

[L1] The operation $\beta \mapsto \aleph_\beta$ is defined at every ordinal, takes infinite cardinal values, is strictly increasing, satisfies $\beta \le \aleph_\beta$, and is continuous at limits, meaning $\aleph_\lambda = \bigcup\{\aleph_\beta : \beta \in \lambda\}$ for limit $\lambda$ ([[cor-the-aleph-and-beth-hierarchies-are-well-defined]], [[def-aleph-and-beth-hierarchies]]).

[L2] A class rule $G$ on functions whose domain is an ordinal determines exactly one class function $T$ defined at every ordinal with $T(\beta) = G(T \restriction \beta)$ ([[lem-recursion-on-the-ordinals]]).

[L3] Transfinite induction is valid on any well-order, in particular on $(\omega, \in)$ ([[thm-transfinite-induction]], [[lem-ordinal-trichotomy]]).

[L4] $\omega$ is the least limit ordinal, is closed under successor, and its elements are exactly the ordinals below it, with $n + 1 = \{0, \dots, n\}$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[def-ordinal]], [[def-natural-numbers]]).

[L5] For a set $D$ of ordinals, $\bigcup D$ is an ordinal and the least upper bound of $D$; ordinals satisfy trichotomy; $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$; $\alpha \notin \alpha$ ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

[L6] For a limit ordinal $\lambda$: $\operatorname{cf}(\lambda)$ is an infinite cardinal, and every cofinal $C \subseteq \lambda$ satisfies $\operatorname{cf}(\lambda) \le \lvert C\rvert$ ([[thm-cofinality-basics]], [[def-cofinality]], [[def-cofinal-subset-of-an-ordinal]]).

[L7] An injective map onto its range is a bijection to that range; for a well-orderable set $X$, $\lvert X\rvert$ is the least ordinal equinumerous with $X$, and equinumerous sets receive the same cardinal ([[def-injection-surjection-bijection]], [[lem-cardinality-of-a-well-orderable-set]], [[def-equinumerous]]).

[L8] A cardinal is infinite exactly when $\omega \le \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L2] to the rule sending a function $h$ whose domain is an ordinal to $\aleph_{\bigcup \operatorname{ran}(h)}$, which is given by a formula; this yields exactly one class function $T$, defined at every ordinal, with $T(\beta) = \aleph_{\bigcup \operatorname{ran}(T \restriction \beta)}$, and in particular $T(0) = \aleph_{\bigcup \varnothing} = \aleph_0$. [L1, L2, L5]

2.1 By induction along [L3] on $n \in \omega$, the statement "$T(k) \in T(k+1)$ for every $k \le n$, and $T(n+1) = \aleph_{T(n)}$" holds for every $n$. At $n = 0$: $\operatorname{ran}(T \restriction 1) = \{T(0)\}$ by [L4], so $T(1) = \aleph_{T(0)} = \aleph_{\aleph_0}$, and $0 \in \aleph_0$ gives $\aleph_0 \in \aleph_{\aleph_0}$ by the strict increase in [L1], that is $T(0) \in T(1)$. At $n+1$: the statement at $n$ makes $T(0) \subseteq \cdots \subseteq T(n+1)$ by [L5], so $\bigcup \operatorname{ran}(T \restriction (n+2)) = T(n+1)$ and $T(n+2) = \aleph_{T(n+1)}$; and $T(n) \in T(n+1)$ together with strict increase gives $\aleph_{T(n)} \in \aleph_{T(n+1)}$, that is $T(n+1) \in T(n+2)$. [step 1.1, L1, L3, L4, L5]

3.1 Replacement makes $C = \{T(n) : n \in \omega\}$ a set of ordinals, so $\alpha = \bigcup C$ is an ordinal and the least upper bound of $C$ by [L5]; and $\alpha$ is a **limit** ordinal, since $\alpha \ne 0$ because $\aleph_0 = T(0) \subseteq \alpha$, and $\alpha$ is not a successor because step 2.1 gives $T(n) \in T(n+1) \subseteq \alpha$ for every $n$, so no member of $C$ is largest and no ordinal below $\alpha$ is an upper bound of $C$. [step 2.1, L1, L4, L5]

4.1 $\aleph_\alpha = \alpha$: continuity in [L1] at the limit ordinal $\alpha$ gives $\aleph_\alpha = \bigcup\{\aleph_\beta : \beta \in \alpha\}$; each $\beta \in \alpha$ lies in some $T(n)$ by [L5], so strict increase gives $\aleph_\beta \in \aleph_{T(n)} = T(n+1) \subseteq \alpha$ using step 2.1, whence $\aleph_\alpha \subseteq \alpha$; and $\alpha \subseteq \aleph_\alpha$ is the inequality $\beta \le \aleph_\beta$ of [L1] at $\beta = \alpha$. [step 2.1, step 3.1, L1, L5]

4.2 $\operatorname{cf}(\alpha) = \aleph_0$: the set $C$ is cofinal in $\alpha$, since $\alpha = \bigcup C$ makes every $\zeta \in \alpha$ a member of some $T(n)$ and hence $\zeta \le T(n)$; and $\lvert C \rvert = \aleph_0$, because $n \mapsto T(n)$ is injective by step 2.1 and [L5], so $C \approx \omega$ and [L7] applies; therefore $\operatorname{cf}(\alpha) \le \aleph_0$ by [L6], while $\operatorname{cf}(\alpha)$ is an infinite cardinal by [L6] and step 3.1, hence $\aleph_0 \le \operatorname{cf}(\alpha)$ by [L8]. [step 2.1, step 3.1, L5, L6, L7, L8]

5.1 So $\alpha = \aleph_\alpha$ is an infinite cardinal by [L1] and step 4.1, it is fixed by the aleph operation, and $\operatorname{cf}(\alpha) = \aleph_0 < \alpha$ by step 4.2 and [L5], so it is singular. [step 4.1, step 4.2, L1, L5] ∎

## Remarks

**Why a fixed point is not a contradiction.** $\beta \le \aleph_\beta$ holds everywhere and the operation is strictly increasing, but neither forces $\beta < \aleph_\beta$: strict increase compares the values at two different indices and says nothing about the value at one index. The tower converges exactly because at a limit the value is the supremum of the earlier ones, and the supremum of the tower is what the tower was climbing towards.

**Nothing is chosen, and nothing beyond Replacement is used.** The tower is a definable $\omega$-indexed family, Replacement makes its range a set, and every step of the verification is a computation. So the whole example is a theorem of ZF, like the aleph hierarchy it is built from.

**Its cofinality is the smallest an infinite cardinal can have.** $\operatorname{cf}(\alpha) = \aleph_0$ says $\alpha$ is reached by an $\omega$-indexed family, which is exactly how it was built. So this fixed point is singular, and, assuming the Axiom of Choice, by [[cor-cofinality-of-a-cardinal-power]] it is therefore not a possible value of $2^{\aleph_0}$. Nothing above claims it is the least fixed point.
