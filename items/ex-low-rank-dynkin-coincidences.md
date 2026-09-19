---
id: ex-low-rank-dynkin-coincidences
kind: example
title: Low-rank Dynkin coincidences
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-classical-root-systems-in-euclidean-coordinates, ex-root-system-a-one, ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras]
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

**Given:** The classical coordinate models.

[L1] The set $\{\pm\alpha\}$ in a Euclidean line is the root system $A_1$ ([[ex-root-system-a-one]]).

[L2] The coordinate root systems $B_2$ and $C_2$ are isomorphic: an explicit orthogonal transformation followed by a uniform rescaling carries one root set to the other ([[ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras]]).

[L3] In the classical coordinate models,
$$D_n=\{\pm e_i\pm e_j:1\le i<j\le n\}.$$
For $D_3$, the roots
$$\delta_1=e_1-e_2,\qquad \delta_2=e_2-e_3,\qquad \delta_3=e_2+e_3$$
form a simple system ([[ex-classical-root-systems-in-euclidean-coordinates]]).

## Proof

**Proof technique:** direct.

1.1 Extending the coordinate notation to rank one gives $B_1=\{\pm e_1\}$ and $C_1=\{\pm2e_1\}$. The linear maps $e_1\mapsto\alpha$ and $2e_1\mapsto\alpha$ identify these systems with $A_1$ from [L1]. Thus $B_1=C_1=A_1$ up to root-system isomorphism. [L1, algebra]

1.2 The explicit similarity in [L2] identifies the eight roots of $B_2$ with those of $C_2$ and preserves every Cartan integer. Hence $B_2=C_2$ up to root-system isomorphism. [L2]

1.3 For $D_2$, [L3] gives $D_2=\{\pm(e_1+e_2),\pm(e_1-e_2)\}$, the orthogonal disjoint union of two rank-one systems, so $D_2=A_1\sqcup A_1$ by [L1]. [L1, L3, algebra]

2.1 For the simple roots of $D_3$ in [L3], all squared lengths are $2$, while $(\delta_1,\delta_2)=(\delta_1,\delta_3)=-1$ and $(\delta_2,\delta_3)=0$. Their Dynkin graph therefore has the three-vertex path $\delta_2-\delta_1-\delta_3$, the $A_3$ diagram. Hence $D_3=A_3$ up to root-system isomorphism. [L3, algebra] ∎
