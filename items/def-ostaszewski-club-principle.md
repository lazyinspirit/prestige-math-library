---
id: def-ostaszewski-club-principle
kind: definition
title: "The Ostaszewski club principle"
status: draft
origin: pipeline
deps: [def-club-filter-and-nonstationary-ideal, def-cofinal-subset-of-an-ordinal, def-first-uncountable-ordinal, def-axiom-of-choice, thm-recursion]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Mildenberger–Shelah, Specialising Aronszajn Trees, September 4, 2015 draft, Definition 1.11, printed p4; order-type-omega thinning proved locally"
      url: https://home.mathematik.uni-freiburg.de/mildenberger/postings/paperspdf/988_2015_09_04.pdf
justified_by: []
forward_refs: []
---

## Definition

In ZFC, the **Ostaszewski club principle** $\clubsuit$ asserts a sequence $(C_\alpha)$ indexed by the nonzero limit ordinals $\alpha<\omega_1$, where $C_\alpha\subseteq\alpha$ is cofinal in $\alpha$, such that for every uncountable $X\subseteq\omega_1$ the set

$$\{\alpha<\omega_1:\alpha\text{ is a nonzero limit and }C_\alpha\subseteq X\}$$

is stationary. Use [[def-first-uncountable-ordinal]], the cofinality convention of [[def-cofinal-subset-of-an-ordinal]], and stationarity from [[def-club-filter-and-nonstationary-ideal]]. The sequence is an extra principle; no existence is asserted in ZFC alone. Each $C_\alpha$ is bounded in $\omega_1$, so it is not a club of $\omega_1$.

One may equivalently require each $C_\alpha$ to have order type $\omega$. Here is the thinning argument, including its choice use. By [[def-axiom-of-choice]], fix a surjection $e_\alpha:\omega\to\alpha$ for every nonzero countable limit $\alpha$ simultaneously. For any cofinal $C\subseteq\alpha$, set $c_0=\min\{c\in C:c>e_\alpha(0)\}$ and recursively set $c_{n+1}=\min\{c\in C:c>\max(c_n,e_\alpha(n+1))\}$. Cofinality and limitness ensure every minimum exists. The sequence is strictly increasing, and every $\beta<\alpha$ occurs in the enumeration and hence is below some $c_n$. Its range therefore has order type $\omega$ and is cofinal. This recursion is an instance of [[thm-recursion]] (store the stage and last value in the state). Apply it to each supplied $C_\alpha$. The new ladder is a subset of the old, so every old containment guess is preserved and the stationary requirement persists. Conversely an order-type-$\omega$ witness already meets the original cofinal-set definition.

Zero and successor ordinals are excluded as ladder indices. Empty or countable targets $X$ carry no guessing requirement; the quantified targets are uncountable subsets of $\omega_1$.
