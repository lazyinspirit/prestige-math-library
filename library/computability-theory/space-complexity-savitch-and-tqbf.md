---
page: space-complexity-savitch-and-tqbf
title: "Space Complexity, Savitch's Theorem, and TQBF"
status: draft
items:
  - def-pspace-and-npspace
  - lem-space-bounded-machines-have-exponentially-many-configurations
  - def-bounded-reachability-recursion
  - lem-bounded-reachability-recursion-is-correct
  - lem-bounded-reachability-uses-logarithmic-recursion-depth
  - thm-savitchs-theorem
  - cor-pspace-equals-npspace-and-is-closed-under-complement
  - def-quantified-boolean-formula-and-tqbf
  - prop-tqbf-is-in-pspace
  - def-reachable-configuration-formula
  - lem-quantifier-reuse-keeps-reachability-formulas-polynomial
  - thm-tqbf-is-pspace-complete
  - def-quantified-formula-game
  - thm-tqbf-truth-iff-existential-player-has-a-winning-strategy
  - def-alternating-polynomial-time
  - thm-ap-equals-pspace
  - fs-savitch-stores-the-whole-configuration-graph
examples:
  - ex-bounded-reachability-recursion-is-correct
  - ex-ap-equals-pspace
  - cex-savitch-stores-the-whole-configuration-graph
---

This page isolates the space-bounded side of complexity theory. The first block
turns a local reachability recursion on finite digraphs into Savitch's theorem,
making explicit that the recursion reuses workspace instead of materializing the
whole configuration graph. The immediate corollary is the collapse
$\mathrm{PSPACE}=\mathrm{NPSPACE}$ together with deterministic closure under
complement.

The second block moves from reachability to quantified formulas. It proves that
TQBF can be evaluated in polynomial space, then builds the reachability formula
used for PSPACE-hardness and keeps its size polynomial by reusing one recursive
subformula. The page closes by interpreting quantified formulas as games and
using that semantics to connect unlimited alternation with PSPACE via
$\mathrm{AP}=\mathrm{PSPACE}$.
