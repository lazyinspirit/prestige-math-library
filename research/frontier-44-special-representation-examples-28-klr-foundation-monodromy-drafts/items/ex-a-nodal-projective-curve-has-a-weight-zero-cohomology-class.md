---
id: ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class
kind: example
title: "A proper singular curve with weight-zero cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree, thm-proper-hypercovers-compute-constructible-derived-cohomology, cor-homology-of-spheres, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Example

A rational projective curve with one ordinary node has one-dimensional $H^1(C,\mathbb Q)$ of weight $0$, illustrating that proper singular cohomology need not be pure of its degree.

## Verification

**Given:** The normalization $\nu:\mathbb P^1\to C$ identifies two distinct points to the node; proper mixed cohomology is supplied by [[thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree]].

1.1 Use the normalization's actual proper Čech hypercover. The underlying space of its degree-$p$ term consists of the diagonal $\mathbb P^1$ and the $2^{p+1}-2$ isolated nonconstant tuples of the two node preimages. Nilpotents in the scheme fiber products do not change the underlying analytic space or constant-sheaf cohomology. On the degree-zero cohomology row, $C^0=\mathbb Q$ and $C^1=\mathbb Q_{\mathrm{diag}}\oplus\mathbb Q_{ab}\oplus\mathbb Q_{ba}$, and $\delta^0=0$. Evaluating $\delta^1c$ on a constant triple gives $c_{\mathrm{diag}}=0$; evaluating it on $(a,b,a)$ gives $c_{ba}+c_{ab}=0$. Conversely these conditions make every triple evaluation zero: triples with adjacent repetitions cancel their two off-diagonal terms and triples with alternating entries have their two coefficients opposite. Thus $E_2^{1,0}=\mathbb Q$. The other total-degree-one term is $E_1^{0,1}=H^1(\mathbb P^1)=0$, and no higher differential can enter or leave $(1,0)$ in the first quadrant. The proper hypercover theorem therefore gives one-dimensional $H^1(C)$. [given, construct, algebra]

2.1 The degree-zero cohomology row is pure of type $(0,0)$. The proper mixed-Hodge construction identifies its $E_2^{1,0}$ with the weight-zero graded piece of $H^1(C)$. Since this is its only nonzero graded piece by step 1.1, the whole space is pure of type $(0,0)$ and weight $0$. [step 1.1, algebra] ∎
