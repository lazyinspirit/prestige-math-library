---
id: cex-su-two-and-so-three-share-a-root-system-but-are-not-isomorphic
kind: counterexample
title: SU(2) and SO(3) share roots but are not isomorphic
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems, ex-character-lattices-of-su-two-and-so-three, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §7 and Chapter V §8 (isogeny versus isomorphism)"
proof_strategy: direct
---

## Statement refuted

Assume the Axiom of Choice. The compact connected semisimple groups $SU(2)$ and
$SO(3)$, which share the root system $A_1$ and are centrally isogenous, are
isomorphic.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; the double cover $SU(2)\to SO(3)$ with kernel $\{\pm I\}$.

[L1] $SU(2)$ and $SO(3)$ have the same $A_1$ root system and are centrally isogenous, the adjoint double cover being $SU(2)\to SO(3)=SU(2)/\{\pm I\}$ ([[thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems]], [[ex-character-lattices-of-su-two-and-so-three]]).

[L2] The centre of $SU(2)$ is $\{\pm I\}$: a central matrix commutes with every $\operatorname{diag}(z,z^{-1})$, so it is diagonal, and commuting with $J=\left(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right)$ makes its diagonal entries equal; determinant one then gives $\pm I$. The centre of $SO(3)$ is trivial: commuting with the three coordinate half-turns makes a central rotation diagonal, and commuting with the cyclic coordinate permutation makes its three diagonal entries equal; orthogonality and determinant one then force $I$. Finally, if $\varphi:G\to H$ is an isomorphism and $z\in Z(G)$, then $\varphi(z)$ commutes with every $\varphi(g)\in H$, so $\varphi(Z(G))=Z(H)$. [matrix multiplication, group axioms]

[L3] The character lattice of $SU(2)$ is $P=\mathbb Z\omega$ while that of $SO(3)$ is $Q=2\mathbb Z\omega$ ([[ex-character-lattices-of-su-two-and-so-three]]).

## Counterexample

**Proof technique:** direct.

1.1 Both groups are compact, connected and semisimple with root system $A_1$, and they are related by the finite central isogeny of [L1]; so the root system and the isogeny class coincide. [L1]

1.2 An isomorphism would carry the centre $\{\pm I\}$ of $SU(2)$ onto the centre of $SO(3)$, which is trivial by [L2]; as $\{\pm I\}$ has two elements and the trivial group has one, no isomorphism exists. [L2]

2.1 Equivalently, the two groups have different character lattices $P\ne Q$ by [L3], and the fundamental weight of $SU(2)$ does not descend to $SO(3)$; the witness pair $(SU(2),SO(3))$ therefore refutes the claim that a shared root system determines a compact connected semisimple group up to isomorphism. [L1, L3, step 1.2] ∎
