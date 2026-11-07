---
id: thm-hansen-mann-gl-n-categorical-llc-conditional-on-eisenstein-compatibility
kind: theorem
title: "Hansen–Mann: GLₙ categorical LLC conditional on enhanced Whittaker–Eisenstein compatibility"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-categorical-local-langlands-framework
  - def-whittaker-eisenstein-compatibility
  - def-axiom-of-choice
  - thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "David Hansen and Lucas Mann, The Categorical Local Langlands Conjecture, Theorem 1.1.1"
      url: "https://arxiv.org/pdf/2606.00983v2"
---

## Statement

Assume the Axiom of Choice. Let $E$ be a finite extension of $\mathbb Q_p$,
let $\ell\ne p$, and fix an abstract field isomorphism
$\overline{\mathbb Q}_\ell\cong\mathbb C$ for the complex-valued classical
local Langlands parameters used in the proof.
Let $G=\mathrm{GL}_n/E$ for $n\ge1$, with a fixed Whittaker datum $(B,\psi)$.
Assume the Whittaker–Eisenstein compatibility condition $(\mathrm{Eis})$:
for every standard parabolic subgroup $P$ of every standard Levi subgroup
of $G$, the enhanced Whittaker coefficient functor is compatible with the
geometric Eisenstein functor along $P$, in the natural-equivalence sense of
the preceding compatibility definition. Then the Whittaker-normalized
categorical local Langlands functor is an equivalence
$L_\psi:D(\operatorname{Bun}_G)\simeq\operatorname{IndCoh}(\operatorname{Par}_G)$.

## Statement references

[[def-categorical-local-langlands-framework]]

[[def-whittaker-eisenstein-compatibility]]

[[def-axiom-of-choice]]

[[thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields]]

[David Hansen and Lucas Mann, *The Categorical Local Langlands Conjecture*, Theorem 1.1.1](https://arxiv.org/pdf/2606.00983v2)
