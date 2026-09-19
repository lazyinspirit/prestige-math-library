---
id: ex-canonical-least-ball-selection-in-separable-baire-proof
kind: example
title: "Canonical least-ball selection removes choice"
status: draft
origin: pipeline
deps: [thm-separable-complete-metric-baire-in-zf, def-metric-ball, def-metric-topology, def-separable-space, def-countable, def-natural-numbers, thm-n-cross-n-countable, def-metric-bounded-diameter]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marianne Morillon, Axiom of Choice"
      url: "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
      locator: "Section 2, pp. 5-8"
---

## Example

In the proof of [[thm-separable-complete-metric-baire-in-zf]] the next ball is
chosen canonically: given a nonempty open $G$ and a bound $\rho > 0$, the pair
$(k,m)$ taken is the unique admissible pair having least code under a fixed
explicit bijection $P:\mathbb N\times\mathbb N\to\mathbb N$, where admissibility
means $m \ge 1$, $1/m \le \rho$ and $B(s(k), 1/m) \subseteq G$. The example
computes the first two stages for a concrete enumeration with repetitions and
checks that no choice is spent.

## Facts & Assumptions

**Given:** The metric space and the dense sequence $s$ of the cited theorem; the nonempty open set $G_0 := W \cap U_0$; the bound $\rho_0 := 2^{-2}$ for the first stage.

[F1] Open balls $B(x,r)$ are the sets $\{y : d(x,y) < r\}$, and they are open; a nonempty open set contains a ball around each of its points ([[def-metric-ball]], [[def-metric-topology]]).

[F2] A dense set meets every nonempty open set, so the admissible pairs of the construction have $s(k) \in G$ for some $k$ ([[def-separable-space]]).

[F3] Fix the explicit bijection
$P:=\sigma^{-1}\circ J:\mathbb N\times\mathbb N\to\mathbb N$ of
[[thm-n-cross-n-countable]]. For a nonempty admissible set $A\subseteq
\mathbb N\times\mathbb N$, its image $P[A]$ is a nonempty subset of
$\mathbb N$ and therefore has a least element; bijectivity of $P$ decodes that
least code to a unique pair in $A$ ([[def-natural-numbers]], [[def-countable]]).

## Verification

1.1 Take $G_0$ nonempty open and $\rho_0 = 2^{-2}$; by [F1] and [F2] there are $k,m$ with $m \ge 1$, $1/m \le 2^{-2}$ and $B(s(k),1/m) \subseteq G_0$, so the admissible set is nonempty. [given, F1, F2]

2.1 Let $(k_0,m_0)$ be the unique admissible pair whose $P$-code is least, as supplied by [F3]; put $x_0 := s(k_0)$, $r_0 := 1/m_0$ and $G_1 := B(x_0,r_0) \cap U_1$. Then $B(x_0,r_0) \subseteq G_0$, and $G_1$ is nonempty open because the ball is a nonempty open set meeting the dense set $U_1$. [step 1.1, F1, F2, F3]

3.1 Repeat with $(G_1, 2^{-3})$: the admissible pair $(k_1,m_1)$ with least $P$-code satisfies $B(s(k_1),1/m_1) \subseteq G_1$ and $1/m_1 \le 2^{-3}$, and repeated entries of the dense sequence cause no difficulty because admissibility and minimisation concern coded index-radius pairs, not distinct points of the space. [step 2.1, F3]

4.1 The two stages display the general rule: each stage is a definable function of the previous set and index, so the recursion produces the sequence of centres and radii without any selection from a family of nonempty sets. The rule is available because the fixed bijection $P$ turns the admissible pairs into a nonempty set of natural-number codes with a least member. [step 2.1, step 3.1, F3] ∎
