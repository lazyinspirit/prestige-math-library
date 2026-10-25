---
id: thm-structure-sheaf-affine-scheme
kind: theorem
title: "The localization construction extends to the structure sheaf on Spec A"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-scheme-spectrum, def-structure-presheaf-on-basic-opens, lem-structure-presheaf-basic-open-well-defined]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "The Stacks Project, Definition 26.5.3"
      url: "https://stacks.math.columbia.edu/tag/01HR"
    - title: "The Stacks Project, Lemma 6.30.9"
      url: "https://stacks.math.columbia.edu/tag/009Q"
---
## Statement

Assume the Axiom of Choice. For every ring $A$, the basic-open localization data extend uniquely to a sheaf
of rings $\mathcal O_{\operatorname{Spec}A}$ on all opens of
$\operatorname{Spec}A$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the distinguished-open localization assignment of the preceding lemma.

## Proof

**Proof technique:** direct.

1.1 The preceding lemma gives a sheaf of rings $\widetilde A$ on the distinguished-open basis. [given]

2.1 For an open $U$, let $\mathcal O(U)$ be the ring of families $(s_x)_{x\in U}$ of germs of $\widetilde A$ such that every $x\in U$ has a distinguished neighborhood $D(f)\subseteq U$ on which the family is represented by one section of $\widetilde A(D(f))$. Restriction discards the germs outside the smaller open, and ring operations are pointwise. These maps make $\mathcal O$ a presheaf of rings; for $U=\varnothing$, the empty germ family is its unique element. [step 1.1]

3.1 Local representability is itself local, so compatible families in the rings $\mathcal O(U_i)$ glue uniquely by taking their pointwise germs. Hence $\mathcal O$ is a sheaf of rings. If $U=D(f)$ is distinguished, the map from $\widetilde A(D(f))$ to its family of germs is bijective by locality and gluing for the basis sheaf in step 1.1. Thus $\mathcal O$ agrees with the localization assignment on every distinguished open. [step 1.1, step 2.1]

4.1 If $\mathcal G$ is any other sheaf of rings with the same basis restriction, its sections on each open $U$ map to the locally representable germ families of step 2.1. The sheaf axiom makes this map bijective and compatible with restrictions, so $\mathcal G\cong\mathcal O$ uniquely through the prescribed basis identifications. [step 2.1, step 3.1] ∎
