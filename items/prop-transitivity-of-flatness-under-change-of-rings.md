---
id: prop-transitivity-of-flatness-under-change-of-rings
kind: proposition
title: "Flatness is transitive under a flat change of rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, cor-change-of-rings-for-extension-of-scalars, def-restriction-and-extension-of-scalars]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.39.4"
      url: "https://stacks.math.columbia.edu/tag/00H9"
pipeline_run: null
---

## Statement

Let $R\to S$ be a flat homomorphism of commutative rings. If $N$ is a flat $S$-module, then $N$, restricted to an $R$-module, is flat over $R$. Consequently a composite of flat ring homomorphisms is flat.

The same assertions hold with "faithfully flat" throughout.

## Facts & Assumptions

**Given:** A flat ring map $R\to S$ and a flat $S$-module $N$; for the faithful assertion, assume both are faithfully flat.

[L1] A ring map is flat or faithfully flat exactly when its target has that property as a module over its source ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L2] For every right $R$-module $X$, change of rings gives $X\otimes_RN\cong(X\otimes_RS)\otimes_SN$ ([[cor-change-of-rings-for-extension-of-scalars]]).

[L3] Restriction of scalars leaves the underlying groups and maps unchanged ([[def-restriction-and-extension-of-scalars]]).

## Proof

**Proof technique:** direct.

1.1 Let $A\to B\to C$ be an exact sequence of $R$-modules. Flatness of $S$ over $R$ makes $A\otimes_RS\to B\otimes_RS\to C\otimes_RS$ exact as a sequence of $S$-modules. [given, L1]

2.1 Flatness of $N$ over $S$ preserves the exactness of step 1.1 after tensoring over $S$. [given, step 1.1, L1]

3.1 By [L2], the sequence in step 2.1 is naturally isomorphic to $A\otimes_RN\to B\otimes_RN\to C\otimes_RN$, so the restricted $R$-module $N$ is flat. [step 2.1, L2, L3]

3.2 If both functors are faithful on exactness, the implications in steps 1.1 and 2.1 may be read backwards as well; [L2] then shows that tensoring with $N$ over $R$ reflects exactness, so the restricted module is faithfully flat. [step 1.1, step 2.1, L1, L2]

4.1 Taking $N$ to be the target ring of a second flat, respectively faithfully flat, ring map and using [L1] proves the corresponding composition statement. [step 3.1, step 3.2, L1] ∎
