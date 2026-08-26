---
id: ex-projective-linear-action-and-iwasawas-hypotheses
kind: example
title: "Projective linear actions and Iwasawa's hypotheses"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-doubly-transitive-actions-are-primitive, thm-iwasawa-simplicity-criterion-for-primitive-actions]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. J. Cameron, Classical Groups, Sections 2.3-2.4"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/class_gps/cg.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Example

Let $q > 3$, let $G = \operatorname{PSL}_2(\mathbb F_q)$, and let
$$\mathbb P^1(\mathbb F_q) = \mathbb F_q \cup \{\infty\}.$$
The usual fractional linear action of $G$ on $\mathbb P^1(\mathbb F_q)$ is
doubly transitive and therefore primitive. The stabilizer of $\infty$ contains
the translation subgroup
$$A := \{\, x \mapsto x + b : b \in \mathbb F_q \,\},$$
which is abelian and normal there, and the conjugates of $A$ generate $G$.
So this action satisfies the hypotheses of Iwasawa's criterion.

## Facts & Assumptions

**Given:** The action of $\operatorname{PSL}_2(\mathbb F_q)$ on $\mathbb P^1(\mathbb F_q)$ by fractional linear transformations.

[L1] Every doubly transitive action is primitive ([[prop-doubly-transitive-actions-are-primitive]]).

[L2] Iwasawa's criterion applies to a faithful primitive action when the point stabilizer contains a nontrivial abelian normal subgroup whose conjugates generate the whole group ([[thm-iwasawa-simplicity-criterion-for-primitive-actions]]).

## Verification

**Proof technique:** direct.

1.1 Fractional linear transformations send any ordered pair of distinct points of $\mathbb P^1(\mathbb F_q)$ to any other such pair, so the action is doubly transitive and therefore primitive by [L1]. [L1]

1.2 The subgroup $A$ fixes $\infty$, is abelian under composition, and is normal in the stabilizer of $\infty$ because conjugating a translation by an affine map gives another translation. [given, algebra]

2.1 Conjugating $A$ by the inversion $x \mapsto -1/x$ gives the lower-unitriangular subgroup. The upper and lower unitriangular subgroups generate $\operatorname{SL}_2(\mathbb F_q)$ by Gaussian elimination, so their projective images generate $G$. Thus the conjugates of $A$ generate $G$, and [L2] applies. [L2, step 1.1, step 1.2] ∎
