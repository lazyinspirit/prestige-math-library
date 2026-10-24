---
page: quantum-affine-type-a-and-level-one-fock-space-examples
title: "Quantum Affine Type A and Level-One Fock Space — Examples"
status: published
requires: [quantum-affine-type-a-and-level-one-fock-space]
items: []
examples: [ex-level-one-fock-node-actions-for-partitions-up-to-three,
           ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions,
           ex-good-node-crystal-component-for-equals-three,
           cex-the-whole-partition-fock-space-is-not-the-basic-representation,
           ex-unitriangular-global-basis-elements-in-small-rank]
---

**Objective.** This companion page works the level-one Fock space machinery of
[[quantum-affine-type-a-and-level-one-fock-space]] on explicit partitions and
explicit coefficients. Every item is a dependency leaf: the theory it consumes
is supplied by the parent page and its established prerequisite closure,
nothing outside this page depends on anything homed here, and each computation
is finite and choice-free except where the parent page's decomposition theorem
is invoked with its declared axiom of choice. The tables are stated in the
conventions fixed on the parent page — residues $c-r\bmod e$, the
increasing-content node order with $-+$ cancellation, good $=$ first surviving
$-$ and cogood $=$ last surviving $+$ — and the ordinary generator compositions
below are never silently replaced by divided powers.

## Examples and counterexamples

The items are listed in the order in which they appear in the page inventory.

- [[ex-level-one-fock-node-actions-for-partitions-up-to-three]] tabulates the
  complete charge-$0$ data for every partition of size at most three at $e=2$
  and $e=3$: the Cartan exponents $(N_i)_i$, the $F_i$ outputs (including
  outputs of size four) and the $E_i$ outputs, with omitted terms zero. The
  exponent column satisfies $\sum_iN_i=1$ in every row, the $E_0$ line at
  $e=2$ on $(3,1)$ matches Leclerc's Exercise 15 calibration, and the item
  stresses that the crystal arrows are computed separately by signature
  reduction, not read off from minimal Chevalley exponents.
- [[ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions]]
  exhibits the cubic Serre identity at $e=2$ on explicit vectors: all four
  compositions of $X_0^3X_1-[3]X_0^2X_1X_0+[3]X_0X_1X_0^2-X_1X_0^3$ vanish
  for $X=E$ on $\varnothing,1,2,11$ and for $X=F$ on
  $\varnothing,1,3,111$ as boundary checks, while the genuinely cancelling
  cases on $2$, $11$ and $21$ display the four outputs term by term, including
  the nontrivial $E$-check on $(3,2,1)$; noncommutation of $F_0F_1$ and
  $F_1F_0$ is shown alongside.
- [[ex-good-node-crystal-component-for-equals-three]] draws the empty
  connected component of the level-one Fock crystal at $e=3$, charge $0$,
  through size three: the $3$-regular shapes
  $\varnothing;1;2,11;3,21$ with the arrows
  $\varnothing\xrightarrow{f_0}1$, $1\xrightarrow{f_1}2$,
  $1\xrightarrow{f_2}11$, $2\xrightarrow{f_2}3$,
  $11\xrightarrow{f_1}21$ and all other arrows from ranks at most two zero.
  The shape $(1,1,1)$ is outside the component and is a highest **crystal**
  vertex of weight $\Lambda_0-\delta$, which does not say that it is killed by
  $E_i$ as a field vector.
- [[cex-the-whole-partition-fock-space-is-not-the-basic-representation]]
  refutes the natural guess that the entire partition Fock module is the basic
  representation: for every finite $e\ge2$ the vector $|1^e\rangle$ and its
  ambient lower lift lie outside $M=U_q|\varnothing\rangle\cong V(\Lambda_0)$,
  the full decomposition is
  $F=\bigoplus_{k\ge0}V(\Lambda_0-k\delta)^{\oplus p(k)}$ with $\Lambda_0$
  occurring once, and higher constituents genuinely contribute.
- [[ex-unitriangular-global-basis-elements-in-small-rank]] lists the ambient
  lower global basis elements at $e=2$ in degrees at most three,
  $G(2)=|2\rangle+q|1,1\rangle$ and $G(3)=|3\rangle+q|1,1,1\rangle$ included,
  and displays the full degree-four transition matrix with basis columns
  $4$ and $3,1$. It records the accidental transpose-conjugation symmetry in
  low degree and the explicit failure at the next level, $d_{(2,1,1),4}=q$
  against $d_{(1,1,1,1),(3,1)}=0$, so the symmetry is a bar-matrix phenomenon
  and not a symmetry of the lower coefficient matrix.
