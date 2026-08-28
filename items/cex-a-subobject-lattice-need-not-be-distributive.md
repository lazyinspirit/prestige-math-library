---
id: cex-a-subobject-lattice-need-not-be-distributive
kind: counterexample
title: "A subobject lattice of an abelian category need not be distributive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-subobject-lattice-of-an-abelian-category-is-modular, def-lattice-distributive-lattice-and-order-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Daniel Murfet, Abelian Categories, Section 4.2"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Statement refuted

Every subobject lattice of an object in an abelian category is distributive.

## Facts & Assumptions

**Given:** The abelian group $A=(\mathbb Z/2)\oplus(\mathbb Z/2)$.

[L1] Subobject lattices in an abelian category are modular
([[thm-the-subobject-lattice-of-an-abelian-category-is-modular]]).

[L2] A lattice is distributive when meet distributes over join
([[def-lattice-distributive-lattice-and-order-ideal]]).

## Counterexample

1.1 The nonzero proper subgroups of $A$ are exactly the three one-dimensional subspaces $$L_1=\langle(1,0)\rangle,\qquad L_2=\langle(0,1)\rangle,\qquad L_3=\langle(1,1)\rangle.$$ For $i\ne j$, the intersection $L_i\cap L_j$ is $0$, and $L_i+L_j=A$. So the subobject lattice of $A$ is the diamond $M_3$. [given, algebra]

2.1 Now $$L_1\wedge(L_2\vee L_3)=L_1\wedge A=L_1,$$ while $$ (L_1\wedge L_2)\vee(L_1\wedge L_3)=0\vee0=0. $$ Hence the distributive law of [L2] fails in this subobject lattice. By [L1], the example is modular but not distributive. [L1, L2, step 1.1] ∎
