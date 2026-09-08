---
id: prop-diamond-implies-ostaszewski-club
kind: proposition
title: "Diamond implies clubsuit"
status: draft
origin: pipeline
deps: [def-diamond-on-omega-one, def-ostaszewski-club-principle, lem-limit-points-of-unbounded-sets, thm-small-intersections-of-clubs, thm-countable-subsets-of-omega-one-are-bounded, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Mildenberger–Shelah, Specialising Aronszajn Trees, September 4, 2015 draft, Definitions 1.9 and 1.11, printed p4; implication derived locally"
      url: https://home.mathematik.uni-freiburg.de/mildenberger/postings/paperspdf/988_2015_09_04.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, $\diamondsuit$ implies $\clubsuit$.

## Facts & Assumptions

**Given:** A diamond sequence $(A_\alpha)_{\alpha<\omega_1}$; assume AC.

[F1] Every subset of $\omega_1$ is guessed stationarily often. [[def-diamond-on-omega-one]]

[F2] The club principle and the explicit thinning of cofinal sets to order-type-$\omega$ ladders are as defined here. [[def-ostaszewski-club-principle]]

[F3] The limit points of an unbounded subset of an ordinal of uncountable cofinality form a club. [[lem-limit-points-of-unbounded-sets]]

[F4] A finite intersection of clubs of uncountable cofinality is club. [[thm-small-intersections-of-clubs]]

[F5] No countable subset of $\omega_1$ is cofinal under countable choice. [[thm-countable-subsets-of-omega-one-are-bounded]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 Fix the ordinal enumerations in F2 using A1. At a nonzero countable limit $\alpha$, if $A_\alpha$ is cofinal in $\alpha$, apply the explicit minimum recursion in F2 to it and call its range $C_\alpha$. Otherwise apply the same recursion to $\alpha$ itself. In both situations $C_\alpha$ is cofinal of order type $\omega$; when $A_\alpha$ is cofinal we also have $C_\alpha\subseteq A_\alpha$. This defines the whole ladder sequence from the fixed parameters. [F2, A1, given]

1.2 Let $X\subseteq\omega_1$ be uncountable. It is unbounded, since a bounded subset lies inside a countable ordinal and is countable. F5 and A1 give $\operatorname{cf}(\omega_1)=\omega_1>\omega$, so F3 makes $E=\operatorname{acc}_{\omega_1}(X)$ club. Let $S=\{\alpha:X\cap\alpha=A_\alpha\}$, stationary by F1. For any club $D$, F4 makes $D\cap E$ club, so it meets $S$. Thus $S\cap E$ is stationary. [F1, F3, F4, F5, A1, given]

2.1 If $\alpha\in S\cap E$, then $\alpha$ is a nonzero limit and $A_\alpha=X\cap\alpha$ is cofinal in $\alpha$. The first alternative of step 1.1 therefore applies, giving $C_\alpha\subseteq A_\alpha\subseteq X$. Hence the containment-guess set contains the stationary set $S\cap E$ and itself meets every club. This is exactly F2's club principle. [F2, step 1.1, step 1.2] ∎
