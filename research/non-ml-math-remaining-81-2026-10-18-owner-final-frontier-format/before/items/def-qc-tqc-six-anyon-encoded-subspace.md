---
id: def-qc-tqc-six-anyon-encoded-subspace
kind: definition
title: Six-anyon triple-encoded subspace and leakage complement
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-fixed-charge-encoding
  - def-qc-tqc-fusion-tree-basis
  - lem-qc-tqc-fusion-tree-dimension
  - def-qc-tqc-unitary-fusion-category
  - thm-qc-tqc-f-symbol-unitary
  - ex-qc-tqc-fibonacci-data
dependency_level: 7
axiom_use: None; all spaces, bases, and orthogonal complements are finite-dimensional.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21
---

## Definition

Assume the Fibonacci fusion rules
$1\otimes x=x\otimes1=x$ and $\tau\otimes\tau=1\oplus\tau$, with each
listed summand of multiplicity one. For six ordered $\tau$ charges, let
$W_a$ be the fixed-input, fixed-total fusion space of total charge
$a\in\{1,\tau\}$ in the tree that first fuses leaves $1,2,3$ and $4,5,6$
separately, then fuses those triple outputs. Let
$V_a$ be the same fixed-charge space in the left-associated tree.

To identify these spaces, write
$A=((\tau_1\otimes\tau_2)\otimes\tau_3)$. Use the object associator
composite
$$g=(\alpha^{-1}_{A\otimes\tau_4,\tau_5,\tau_6})
\circ\alpha^{-1}_{A,\tau_4,\tau_5\otimes\tau_6}
\circ(\operatorname{id}_A\otimes\alpha_{\tau_4,\tau_5,\tau_6})$$
from the triple-grouped input tree to the left-associated tree. On a fusion
morphism $f$ into $a$, define $G_a(f)=f\circ g^{-1}:V_a$; this is a unitary
change of fusion-tree coordinates.

For one triple of total charge $\tau$, its two orthonormal path vectors are
indexed by the charge $x\in\{1,\tau\}$ after the first two anyons: both
$x\otimes\tau\to\tau$ channels have multiplicity one. Write these vectors as
$|x\rangle$. For $x,y\in\{1,\tau\}$ and $a\in\{1,\tau\}$, let $|x,y;a\rangle$
be the grouped-tree vector with first triple path $x$, first triple total
$\tau$, second triple path $y$, second triple total $\tau$, and final vertex
channel $\tau\otimes\tau\to a$. The last channel has multiplicity one. Define
$$\mathcal C_a:=G_a\bigl(\operatorname{span}\{|x,y;a\rangle:
x,y\in\{1,\tau\}\}\bigr)\subseteq V_a.$$
In the ordered basis
$(G_a|1,1;a\rangle,G_a|1,\tau;a\rangle,
G_a|\tau,1;a\rangle,G_a|\tau,\tau;a\rangle)$, the inclusion
$J_a:\mathbb C^4\to V_a$ is an isometry; its code projector is $P_a=J_aJ_a^*$.
The same ordered local triple paths are used for $a=1$ and $a=\tau$; only
the final pair-charge coordinate differs. The orthogonal complements are
called leakage spaces.

## Facts & Assumptions

**Given:** The stated Fibonacci fusion rules, the multiplicity-aware
fusion-tree basis, the unitary associator, and the fixed-charge encoding
convention.

[A1] Assume the Fibonacci fusion rules stated in the Definition. The actual
Fibonacci data carrier states $1\otimes x=x\otimes1=x$ and
$\tau\otimes\tau=1\oplus\tau$ with multiplicity one in each channel.
[[ex-qc-tqc-fibonacci-data]]

[F1] The fusion-tree definition constructs each path vector by composing
its vertex multiplicity-basis maps. [[def-qc-tqc-fusion-tree-basis]]

[F2] The fusion-tree lemma proves that these path vectors form a complete
orthonormal basis and counts them by the products of the vertex
multiplicities. [[lem-qc-tqc-fusion-tree-dimension]]

[F3] An isometric inclusion $J$ has code projector $JJ^*$ onto its image.
[[def-qc-tqc-fixed-charge-encoding]]

[F4] Each associator is unitary, so the stated finite associator composite
induces a unitary map between the two fusion-tree Hom spaces.
[[def-qc-tqc-unitary-fusion-category]]
[[thm-qc-tqc-f-symbol-unitary]]

## Proof

1.1 The fusion rule gives
$\dim V(\tau^2\to1)=\dim V(\tau^2\to\tau)=1$ and therefore
$\dim V(\tau^3\to1)=1$, $\dim V(\tau^3\to\tau)=2$. Applying the
fusion-tree count [F2] to the grouped tree, total charge $1$ receives one
basis vector from the $(1,1)$ triple-output pair and four from $(\tau,\tau)$,
so $\dim W_1=1+2\cdot2=5$. Total charge $\tau$ receives two vectors from
$(1,\tau)$, two from $(\tau,1)$, and four from $(\tau,\tau)$, so
$\dim W_\tau=2+2+4=8$. The map $G_a$ in [F4] is unitary, hence
$\dim V_1=5$ and $\dim V_\tau=8$. [A1, F2, F4, algebra]

1.2 Each selected triple-total-$\tau$ factor has its two paths $|1\rangle$
and $|\tau\rangle$, and the final $\tau\otimes\tau\to a$ vertex has
multiplicity one. Thus the four grouped-tree vectors $|x,y;a\rangle$ are admissible tree vectors by [F1] and form an
orthonormal family by [F2]. Applying the unitary $G_a$ preserves
orthonormality, so they define an isometric inclusion $J_a$; [F3] gives
the projector $P_a=J_aJ_a^*$ and $\dim\mathcal C_a=4$.
[F1, F2, F3, F4, given, algebra]

2.1 The orthogonal decompositions $V_a=\mathcal C_a\oplus\mathcal C_a^\perp$
then give $\dim\mathcal C_1^\perp=5-4=1$ and
$\dim\mathcal C_\tau^\perp=8-4=4$ by step 1.1. These code copies share the
same ordered local triple paths, while their final output charge differs.
This supplies the dimensions and path identification used in the two B6
blocks. [step 1.1, step 1.2, algebra] ∎
