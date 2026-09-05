---
id: ex-the-quaternion-and-dihedral-central-extension-classes
kind: example
title: "Quaternion and dihedral central extension classes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-central-extensions-are-classified-by-h-two-with-trivial-action]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Example

The groups $D_8$ and $Q_8$ both fit into central extensions

$$1\to C_2\to E\to C_2\times C_2\to1,$$

but they determine distinct classes in $H^2(C_2\times C_2,C_2)$.

## Facts & Assumptions

**Given:** The dihedral group $D_8$ and the quaternion group $Q_8$.

[L1] Central extensions are classified by $H^2$ with trivial action
([[cor-central-extensions-are-classified-by-h-two-with-trivial-action]]).

## Verification

**Proof technique:** direct.

1.1 In both $D_8$ and $Q_8$, the center has order $2$, and quotienting by it gives $C_2\times C_2$. So each group defines a central extension of $C_2\times C_2$ by $C_2$. [given, algebra]

2.1 The two extensions are not equivalent because $D_8$ contains five involutions, while $Q_8$ contains only one. An extension equivalence would be an isomorphism of middle groups preserving the kernel and quotient data, but the middle groups are not isomorphic. [step 1.1, algebra]

3.1 Therefore [L1] assigns distinct classes in $H^2(C_2\times C_2,C_2)$ to the dihedral and quaternion central extensions. [L1, step 2.1] ∎
