---
id: def-qc-tqc-f-symbol
kind: definition
title: F-symbol as a recoupling matrix
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-qc-tqc-fusion-tree-basis, lem-qc-tqc-fusion-tree-dimension, def-qc-tqc-unitary-fusion-category]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 14–16: F-matrices between orthonormal tree bases."
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§II.A, PDF pp. 4–6: associativity basis change and F-symbols."
---

## Definition

Let $a,b,c,d$ be simple charges in a unitary fusion category, and put
$P_L=((a\otimes b)\otimes c)$ and $P_R=a\otimes(b\otimes c)$. The local
fusion-tree basis result [[lem-qc-tqc-fusion-tree-dimension]] identifies

$$\mathcal H_L:=\bigoplus_e V_{ab}^e\otimes V_{ec}^d \quad\text{with}\quad\operatorname{Hom}(P_L,d),$$

and

$$\mathcal H_R:=\bigoplus_f V_{bc}^f\otimes V_{af}^d \quad\text{with}\quad\operatorname{Hom}(P_R,d),$$

by the corresponding tree compositions. These direct sums carry the
orthonormal left- and right-tree bases. If $\mu:a\otimes b\to e$ and
$\nu:e\otimes c\to d$ are vertex basis maps, write
$L_{e,\mu,\nu}:=\nu\circ(\mu\otimes\operatorname{id}_c):P_L\to d$. If
$\rho:b\otimes c\to f$ and $\sigma:a\otimes f\to d$ are vertex basis maps,
write $R_{f,\rho,\sigma}:=\sigma\circ(\operatorname{id}_a\otimes\rho):P_R\to d$.
Let $\alpha_{a,b,c}:P_L\to P_R$ be the associator. Define the **F-symbol
matrix** $F_d^{abc}$ by

$$L_{e,\mu,\nu}\circ\alpha_{a,b,c}^{-1} =\sum_{f,\rho,\sigma}F_d^{abc}[(f,\rho,\sigma),(e,\mu,\nu)]R_{f,\rho,\sigma}.$$

Rows index target-tree labels and multiplicity indices; columns index
source-tree labels and multiplicity indices. The sums retain every fusion
channel and every multiplicity coordinate.
If the fixed-total fusion space is zero-dimensional, the F-symbol is the unique
empty $0\times0$ matrix.

## Associator convention

The object-level associator is drawn below. The F matrix records its induced
change of coordinates on the Hom spaces by the inverse-precomposition rule in
the Definition; the diagram is only a convention aid.

```tikzcd
((a\otimes b)\otimes c) \arrow[r,"\alpha_{a,b,c}"] & a\otimes(b\otimes c)
```

