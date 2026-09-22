---
id: ex-maximal-torus-and-weyl-group-of-so-three
kind: example
title: A maximal torus and Weyl group of SO(3)
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weyl-group-of-a-compact-connected-lie-group, thm-analytic-and-root-system-weyl-groups-agree, def-axiom-of-choice, def-torus-and-maximal-torus-in-a-compact-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §4 (the SO(3) example)"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. Rotations about a fixed axis form a maximal torus
$SO(2)\le SO(3)$, and the Weyl group of $SO(3)$ with respect to it has order two,
acting on the torus by reversing the angle.

## Facts & Assumptions

**Given:** The group $SO(3)$ of rotations of $\mathbb R^3$, the subgroup $T$ of rotations about the $z$-axis, and the half-turn $s$ about the $x$-axis.

[L1] $T\cong SO(2)$ is a compact connected abelian Lie group, hence a torus, and the Weyl group is $W(G,T)=N_G(T)/T$ ([[def-torus-and-maximal-torus-in-a-compact-lie-group]], [[def-weyl-group-of-a-compact-connected-lie-group]]).

[L2] Every element of $SO(3)$ is a rotation about some axis through the origin (Euler's theorem for $SO(3)$), and the fixed-point set of a nonidentity rotation is its axis. [L1]

## Verification

**Proof technique:** direct.

1.1 $T$ is a torus by [L1]. If a connected abelian subgroup $S\supseteq T$ existed, then every element of $S$ would commute with every rotation about the $z$-axis, and a rotation commuting with all of them fixes the $z$-axis, hence is itself a rotation about the $z$-axis; so $S=T$ and $T$ is maximal. [L2]

2.1 The half-turn $s$ about the $x$-axis satisfies $sts^{-1}=t^{-1}$ for $t\in T$: conjugating a rotation about the $z$-axis by $s$ reverses its angle, so $s\in N_G(T)$ and its class in $W$ is nontrivial. [L1, step 1.1]

3.1 Conversely, if $g\in N_G(T)$ normalizes $T$, then $g$ preserves the axis of every nonidentity element of $T$, namely the $z$-axis as an unoriented line; hence $g$ either preserves or reverses the direction of the $z$-axis, and modulo $T$ the only two possibilities are the identity and the half-turn's coset. [L1, step 2.1]

4.1 Therefore $N_G(T)/T\cong\mathbb Z/2$, the nontrivial element acting by $t\mapsto t^{-1}$, i.e. by angle reversal; this agrees with the root-system computation for type $A_1$ with one positive root. [L1, step 3.1] ∎
