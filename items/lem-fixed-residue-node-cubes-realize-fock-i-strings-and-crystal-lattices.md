---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices.json
  precheck: pass
id: lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices
kind: lemma
title: "Fixed-residue node cubes realize the actual Fock strings"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 16
deps: [def-the-node-order-and-n-i-exponents-for-fock-space, lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas, thm-crystal-basis-tensor-product-rule,
       thm-quantized-sl-two-string-formulas, def-kashiwara-crystal-operators, def-crystal-lattice-and-crystal-basis,
       def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.10, printed pp. 23-24: the node formulas (38)-(39) interpreted as finite fundamental-string cubes."
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 3.3, printed pp. 14-21: Theorem 3.3.12 and Prop. 3.3.14 (independence and crystal base of the wedge space)."
    - title: "Matthew Fayers, Partition models for the crystal of the basic $U_q(\\mathfrak{sl}_n)$-module, arXiv:0906.4129"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 4, printed pp. 10-12: the signed-word reduction, order and the endpoints of $i$-strings; the local module proof is supplied by the cube computation."
---

## Statement

For the declared charge-$0$ node operators and a fixed residue $i$ and partition
$\lambda$, the orbit obtained by toggling the addable/removable $i$-cells of
$\lambda$ is a finite Boolean cube: the availability of one such cell is
unchanged by every other $i$-toggle, including $e=2$. Order the $i$-slots by
decreasing content, call a vertex state $+$ when the slot is empty (addable)
and $-$ when it is occupied (removable), so that the state word records the
configuration. Then the node operators on this cube are exactly the tensor
power $V(1)^{\otimes k}$ of the two-vertex rank-one string with the fixed
coproduct and $K$-exponent $q^{\#+-\#-}$; in particular the raw $A_0$-partition
span is stable under the actual normalized string operators. On the residue
classes $b_\mu:=|\mu\rangle+qF_0$ in $F_0/qF_0$, $f$ applies to the
first surviving $+$ and $e$ to the last surviving $-$ in decreasing-content
order, equivalently $f$ to the last $+$ and $e$ to the first $-$ in
increasing-content order, with $\varepsilon,\varphi$ the surviving minus/plus
counts; if the required sign is absent, the residue operator is zero. These
are congruences modulo $qF_0$, not equalities on standard field vectors.
The standard partition form is the normalized rank-one polarization,
and all divided $E$- and $F$-powers have Laurent-integral matrices.

## Facts & Assumptions

**Given:** The partition Fock space with node formulas and content order, the fixed residue $i$, and the rank-one tensor crystal of the vector module.

[F1] A corner's addability/removability is determined by its horizontal and vertical neighbours, whose residues are $i\pm1$ and never $i$ for $e\ge2$; toggling another $i$-cell does not change any such neighbour ([[def-the-node-order-and-n-i-exponents-for-fock-space]], [[def-removable-and-addable-nodes-of-a-partition]]).

[F2] On the two-vertex rank-one string the operators have coefficients $1$, $E^{(2)}=F^{(2)}=0$, and the tensor rule is the fixed-coproduct rule with the strict $f$/non-strict $e$ comparison ([[thm-quantized-sl-two-string-formulas]], [[thm-crystal-basis-tensor-product-rule]]).

[F3] The node operators are the stable prefix operators; their coefficients are $q^{N_i^r}$ and $q^{-N_i^l}$ and the exponents agree with the tensor cube weights ([[lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas]], [[def-the-node-order-and-n-i-exponents-for-fock-space]]).

## Proof

**Proof technique:** show the residue slots are independent, identify the node action with the tensor cube, and apply the rank-one tensor rule.

1.1 Independence of the $i$-slots. If two $i$-cells are toggled, the neighbours determining each corner's availability are of residues $i\pm1$, and the toggled cell has residue $i$, so it is not a neighbour of any other $i$-cell; hence toggling one $i$-cell never changes the availability of another, every subset of the finitely many slots is realizable, and the orbit is a Boolean cube with $2^k$ distinct partition diagrams. [F1, given, algebra]

2.1 The cube is the rank-one tensor power. In decreasing-content order, the $j$-th slot's toggling multiplies by $q^{+1}$ or $q^{-1}$ according to occupancy and the iterated coproduct coefficient at slot $j$ is $q^{\sum_{\text{slots before }j}\text{weight}}$ for $f$ and $q^{-\sum_{\text{slots after }j}\text{weight}}$ for $e$; these are exactly $N_i^r$ and $-N_i^l$ by [F3], so the map from tensor bit vectors to partitions is a rank-one module isomorphism onto the cube. [step 1.1, F3, given, algebra]

3.1 The string rule, lattice and divided powers. The tensor crystal theorem [F2] gives stability of the $A_0$-span of the cube basis under the normalized string operators. On the residue basis modulo $q$, unrolling its strict/non-strict comparison cancels $+-$ in decreasing order, with $f$ acting on the first surviving $+$ and $e$ on the last surviving $-$; reversing the order cancels $-+$ and selects the last $+$ / first $-$. For divided powers, write $\epsilon_s=1$ on an empty slot and $-1$ on an occupied slot. If $a$ empty slots are filled by $F_i^{(a)}$, the coefficient is the Laurent monomial $q^{\sum_{t\text{ selected}}\sum_{s<t}\epsilon_s-a(a-1)/2}$: the $a!$ orders of distinct toggles contribute the asymmetric factorial at $q^{-2}$, which divided by $[a]!$ is $q^{-a(a-1)/2}$. Repeated toggles vanish. Likewise emptying $a$ occupied slots by $E_i^{(a)}$ has coefficient $q^{-\sum_{t\text{ selected}}\sum_{s>t}\epsilon_s-a(a-1)/2}$. These formulas prove Laurent integrality. Define the standard partition form by making cube words orthonormal. For an edge $\lambda\to\mu$ and $N=N_i(\lambda)$, its two coefficients satisfy $N_i^r+N_i^l=N-1$, so $q^{N_i^r}=q^{N-1}q^{-N_i^l}$. This verifies $(F_ix,y)=(x,q^{-1}K_iE_iy)$ and, by transposition, $(E_ix,y)=(x,qF_iK_i^{-1}y)$; together with diagonal $K_i$ this is the normalized rank-one polarization for the fixed coproduct. [step 2.1, F2, F3, given, algebra]

4.1 Conclusion. Each fixed-residue orbit is a finite Boolean tensor cube of highest-weight-$1$ strings, the actual normalized operators preserve the raw $A_0$-partition span and induce the survivor rule on its residue classes in either content order, including $e=2$. Lattice stability precedes transport of these congruences; no equality on standard field vectors is asserted. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

For $e=2$, $i=1$, put $h=|1\rangle$, $x=|2\rangle$, $y=|1,1\rangle$ and $z=|2,1\rangle$. The node formulas give $F_1h=x+qy$, $F_1^{(2)}h=z$, and $s=x-q^{-1}y$ is killed by both $E_1$ and $F_1$. Thus $y=q(1+q^2)^{-1}(F_1h-s)$ and $\tilde f_1y=q(1+q^2)^{-1}z\ne0$. Its residue is zero, exactly as the cancelled signature predicts.


In this two-slot example, the decreasing-content order is $(1,2)$ then
$(2,1)$, of contents $1$ and $-1$. Thus $h,x,y,z$ have sign words
$++,-+,+-,--$, respectively. The left square shows independent slot
additions, without Chevalley coefficients; the right diagram shows only
crystal arrows on the residue classes $b_h,b_x,b_y,b_z$ modulo $qF_0$.
In particular, cancelling $+-$ isolates $b_y$, while the first-surviving-plus
rule gives $b_h\mapsto b_x\mapsto b_z$ under $\tilde f_1$; $\tilde e_1$
reverses these two arrows. This does not assert an equality on the standard
field vectors (as the nonzero $\tilde f_1y$ above illustrates).

```tikz
\begin{tikzpicture}
\node at (1.5,3) {Slot additions};
\node (h) at (0,2) {$h:\ ++$};
\node (x) at (3,2) {$x:\ -+$};
\node (y) at (0,0) {$y:\ +-$};
\node (z) at (3,0) {$z:\ --$};
\draw[->] (h) -- node[above] {$1$} (x);
\draw[->] (h) -- node[left] {$2$} (y);
\draw[->] (x) -- node[right] {$2$} (z);
\draw[->] (y) -- node[below] {$1$} (z);
\node at (7,3) {Residue crystal};
\node (bh) at (5,2) {$b_h$};
\node (bx) at (7,2) {$b_x$};
\node (bz) at (9,2) {$b_z$};
\node (by) at (7,0) {$b_y:\ +-$};
\draw[->] (bh) -- node[above] {$\tilde f_1$} (bx);
\draw[->] (bx) -- node[above] {$\tilde f_1$} (bz);
\node at (7,-0.7) {isolated};
\end{tikzpicture}
```
