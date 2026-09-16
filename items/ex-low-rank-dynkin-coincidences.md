---
id: ex-low-rank-dynkin-coincidences
kind: example
title: Low-rank Dynkin coincidences
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-classification-of-irreducible-reduced-crystallographic-root-systems, ex-classical-root-systems-in-euclidean-coordinates, prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types, ex-root-system-a-one, ex-dynkin-diagram-duality-of-b-n-and-c-n]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 23, Remark 23.18"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Problems 2 and 19, printed pp. 203 and 206"
landmark: false
proof_strategy: direct
---

## Example

The low-rank coincidences among the classical types are
$$B_1=C_1=A_1,\qquad B_2=C_2,\qquad D_2=A_1\sqcup A_1,\qquad D_3=A_3 .$$

## Facts & Assumptions

**Given:** The classical coordinate models and the classification list of types.

[L1] A rank-one reduced crystallographic root system is $\{\pm\alpha\}$, the system $A_1$ ([[ex-root-system-a-one]], [[thm-classification-of-irreducible-reduced-crystallographic-root-systems]]).

[L2] The systems $B_n$ and $C_n$ have the same root set up to relabelling for $n=2$, and in general are related by the rotation of the plane carrying the four short directions and the four long directions of one onto those of the other ([[prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types]], [[ex-dynkin-diagram-duality-of-b-n-and-c-n]]).

[L3] The trivalent simply-laced diagram with arms $1,1,1$ is the path on three vertices, and the rank-two even orthogonal system $\{\pm(e_1+e_2),\pm(e_1-e_2)\}$ splits into the orthogonal union of $\{\pm(e_1+e_2)\}$ and $\{\pm(e_1-e_2)\}$ ([[thm-classification-of-irreducible-reduced-crystallographic-root-systems]], [[ex-classical-root-systems-in-euclidean-coordinates]]).

## Proof

**Proof technique:** direct.

1.1 $B_1=C_1=A_1$: in rank one the only reduced crystallographic system is $\{\pm\alpha\}$ by [L1], so the names $A_1,B_1,C_1$ all denote it, and the classification list records this identification. [L1, algebra]

1.2 $B_2=C_2$: both are the eight-root system with four directions at mutual angles $45^{\circ}$ and two lengths in ratio $2$; the rotation by $45^{\circ}$ followed by a uniform rescaling carries the root set of one onto that of the other and preserves Cartan integers, giving an explicit isomorphism by [L2]. [L2, algebra]

2.1 $D_2=A_1\sqcup A_1$: the rank-two even orthogonal system is $\{\pm(e_1+e_2),\pm(e_1-e_2)\}$, an orthogonal disjoint union of two rank-one systems each equal to $A_1$ by [L1], so $D_2=A_1\sqcup A_1$ as a reducible system; and $D_3=A_3$ because the trivalent diagram with arm lengths $1,1,1$ is the path on three vertices, which is the $A_3$ diagram by [L3]. [L1, L3, algebra] ∎
