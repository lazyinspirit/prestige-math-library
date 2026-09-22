---
id: ex-character-lattices-of-su-two-and-so-three
kind: example
title: Character lattices of SU(2) and SO(3)
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, prop-central-quotients-correspond-to-intermediate-character-lattices, def-axiom-of-choice, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix V (SU(2)/SO(3) lattice computation)"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. For type $A_1$ with fundamental weight $\omega$ one
has $P=\mathbb Z\omega$ and $Q=2\mathbb Z\omega$. The character lattice of the
maximal torus of $SU(2)=\{g\in U(2):\det g=1\}$ is $P$, while that of the maximal torus
of $SO(3)\cong SU(2)/\{\pm I\}$ is $Q$; consequently precisely the even $SU(2)$
highest weights descend to $SO(3)$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; $SU(2)$ with maximal torus $T_{SU(2)}=\{\operatorname{diag}(z,z^{-1}):|z|=1\}$ and the standard central quotient identification $SO(3)\cong SU(2)/\{\pm I\}$.

[L1] For a compact connected semisimple group $Q\subseteq X^*(T)\subseteq P$, the simply connected form has character lattice $P$ and the adjoint form has character lattice $Q$; central quotients correspond to intermediate lattices ([[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]], [[prop-central-quotients-correspond-to-intermediate-character-lattices]]).

[L2] For type $A_1$, $Q=\mathbb Z\alpha=2\mathbb Z\omega$ and $P=\mathbb Z\omega$, and characters of $T_{SU(2)}$ are the maps $\operatorname{diag}(z,z^{-1})\mapsto z^n$ with weight $n\omega$ ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]). [L1]

## Verification

**Proof technique:** direct.

1.1 $SU(2)$ is simply connected and semisimple with root system $A_1$, so $X^*(T_{SU(2)})=P=\mathbb Z\omega$ by [L1]; the characters are $\operatorname{diag}(z,z^{-1})\mapsto z^n$, with weight $n\omega$. [L1, L2]

2.1 The kernel of $SU(2)\to SO(3)$ is $\{\pm I\}$. Since $-I=\operatorname{diag}(-1,-1)$ corresponds to $z=-1$ in $T_{SU(2)}$, the character of weight $n\omega$ takes the value $(-1)^n$ there, so it is trivial on the kernel exactly when $n$ is even. [L2, step 1.1]

3.1 By [L1] the intermediate lattice of $SO(3)$ is $X^*(T_{SO(3)})=\{\text{characters trivial on }\{\pm I\}\}=2\mathbb Z\omega=Q$, and the adjoint-form computation of [L1] gives the same answer. [L1, step 2.1]

4.1 Hence a dominant $SU(2)$ highest weight $n\omega$ descends to $SO(3)$ exactly when $n$ is even, i.e. exactly when $n\omega\in Q$; this is the explicit form of the finite central quotient obstruction. [L1, step 2.1, step 3.1] ∎
