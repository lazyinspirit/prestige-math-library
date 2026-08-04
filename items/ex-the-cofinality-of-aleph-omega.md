---
id: ex-the-cofinality-of-aleph-omega
kind: example
title: "$\\operatorname{cf}(\\aleph_\\omega) = \\aleph_0$, computed from the cofinal map $n \\mapsto \\aleph_n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cofinality, thm-cofinality-basics, thm-regularity-of-the-alephs, def-aleph-and-beth-hierarchies, cor-the-aleph-and-beth-hierarchies-are-well-defined, thm-cardinal-arithmetic-agrees-with-finite-counting, lem-cardinality-of-a-well-orderable-set, def-cofinal-subset-of-an-ordinal, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-cardinal, def-equinumerous]
justified_by: []
aliases: []
landmark: false
short: "$\\operatorname{cf}(\\aleph_\\omega) = \\aleph_0$"
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
    - title: "UCL, Axiomatic Set Theory, Ch. 4: Cardinal Arithmetic"
      url: "https://www.homepages.ucl.ac.uk/~ucahcjm/ast/ast_notes_4.pdf"
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
    - title: "Aleph number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Aleph_number"
pipeline_run: null
---

## Example

Work in ZF; no choice principle is used. The set

$$C \;=\; \{\, \aleph_n : n \in \omega \,\} \;\subseteq\; \aleph_\omega$$

([[def-aleph-and-beth-hierarchies]]) is cofinal in $\aleph_\omega$
([[def-cofinal-subset-of-an-ordinal]]) and satisfies $\lvert C\rvert = \aleph_0$,
so

$$\operatorname{cf}(\aleph_\omega) \;=\; \aleph_0 \;<\; \aleph_\omega$$

([[def-cofinality]]) and $\aleph_\omega$ is singular.

Two things make the computation work, and both are visible in the display. The
**upper** bound is the cofinal family itself: $\aleph_\omega$ is by definition the
supremum of the $\aleph_n$, so a family indexed by $\omega$ already reaches it.
The **lower** bound is structural: $\aleph_\omega$ is an infinite cardinal, hence
a limit ordinal, so its cofinality is an infinite cardinal
([[thm-cofinality-basics]]) and cannot be smaller than $\aleph_0$.

## Facts & Assumptions

**Given:** ZF, with no choice principle.

[L1] $\aleph_\lambda = \bigcup\{\aleph_\beta : \beta \in \lambda\}$ at a limit ordinal $\lambda$; every $\aleph_\alpha$ is an infinite cardinal; the operation is strictly increasing ([[def-aleph-and-beth-hierarchies]], [[cor-the-aleph-and-beth-hierarchies-are-well-defined]]).

[L2] $\omega$ is a limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); every infinite cardinal is a limit ordinal and a cardinal is infinite exactly when $\omega \le \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-cardinal]]).

[L3] $C \subseteq \alpha$ is cofinal when every $\zeta \in \alpha$ has some $\eta \in C$ with $\zeta \le \eta$ ([[def-cofinal-subset-of-an-ordinal]]).

[L4] For a limit ordinal $\lambda$: $\operatorname{cf}(\lambda)$ is an infinite cardinal, and every cofinal $C \subseteq \lambda$ satisfies $\operatorname{cf}(\lambda) \le \lvert C\rvert$ ([[thm-cofinality-basics]], [[def-cofinality]]).

[L5] For a well-orderable set $X$, $\lvert X\rvert$ is the least ordinal equinumerous with $X$, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]], [[def-equinumerous]]).

[L6] Ordinals satisfy trichotomy, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, and $\alpha \subseteq \beta \subseteq \alpha$ forces $\alpha = \beta$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

## Verification

**Proof technique:** direct.

1.1 The set $C = \{\aleph_n : n \in \omega\}$ exists by Replacement, and $C \subseteq \aleph_\omega$ because $n \in \omega$ gives $\aleph_n \in \aleph_\omega$ by the strict increase in [L1] and [L2]. [L1, L2, L6]

1.2 $C$ is cofinal in $\aleph_\omega$: by [L1] and [L2], $\aleph_\omega = \bigcup C$, so each $\zeta \in \aleph_\omega$ lies in some $\aleph_n$ and hence satisfies $\zeta \le \aleph_n$ with $\aleph_n \in C$, which is [L3]. [L1, L2, L3, L6]

1.3 $\lvert C\rvert = \aleph_0$: the map $n \mapsto \aleph_n$ is injective by the strict increase in [L1], so $C \approx \omega$ and [L5] applies. [L1, L5]

2.1 By [L4] with $\lambda = \aleph_\omega$, which is a limit ordinal by [L1] and [L2], steps 1.2 and 1.3 give $\operatorname{cf}(\aleph_\omega) \le \aleph_0$; and $\operatorname{cf}(\aleph_\omega)$ is an infinite cardinal by [L4], so $\aleph_0 \le \operatorname{cf}(\aleph_\omega)$ by [L2]. [step 1.2, step 1.3, L1, L2, L4]

3.1 Hence $\operatorname{cf}(\aleph_\omega) = \aleph_0$ by [L6], and $\aleph_0 < \aleph_\omega$ by the strict increase in [L1], so $\aleph_\omega$ is singular. [step 2.1, L1, L6] ∎

## Remarks

**Nothing is chosen, and that is the point.** The cofinal family is the definable map $n \mapsto \aleph_n$, and Replacement makes its range a set. So singularity of $\aleph_\omega$ is a theorem of ZF, in contrast with the regularity of successor alephs, which is not ([[thm-regularity-of-the-alephs]]).

**The size of $\aleph_\omega$ plays no role.** Only the *index* $\omega$ is used: it is a limit ordinal reached from below by an $\omega$-indexed family, and the aleph operation is continuous at limits, so the same computation gives $\operatorname{cf}(\aleph_\lambda) \le \lvert \lambda \rvert$ for any limit $\lambda$ by exactly the argument of steps 1.2 and 1.3. What that bound is worth depends on $\lambda$, and [[ex-a-singular-cardinal-of-uncountable-cofinality]] computes a case where it is uncountable.

**Why this is not a counterexample to anything about $2^{\aleph_0}$.** It is the input to one: $\operatorname{cf}(2^{\aleph_0}) > \aleph_0$ ([[cor-cofinality-of-a-cardinal-power]]) together with the value computed here is what refutes $2^{\aleph_0} = \aleph_\omega$ ([[fs-the-continuum-has-cardinality-aleph-omega]]).
