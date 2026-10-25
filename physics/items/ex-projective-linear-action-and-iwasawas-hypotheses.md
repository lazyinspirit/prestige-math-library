---
id: ex-projective-linear-action-and-iwasawas-hypotheses
kind: example
title: "Projective linear actions and Iwasawa's hypotheses"
status: published
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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

1.1 The matrices $\begin{pmatrix}1&b\\0&1\end{pmatrix}$ give translations $x\mapsto x+b$, so the stabilizer of $\infty$ is transitive on $\mathbb F_q$. The matrix $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ sends $\infty$ to $0$; composing it with translations sends $\infty$ to any finite point. All these matrices have determinant one, so they act through $G$, not merely through the full projective linear group. Hence the action is transitive, and its point stabilizer is transitive on the other points: it is doubly transitive and therefore primitive by [L1]. A fractional linear map fixing $\infty$, $0$, and $1$ is scalar as a matrix, hence the projective action is faithful. [L1, given, algebra]

1.2 The subgroup $A$ fixes $\infty$, is abelian under composition, and is normal in the stabilizer of $\infty$ because conjugating a translation by an affine map gives another translation. [given, algebra]

2.1 Conjugating $A$ by the inversion $x \mapsto -1/x$ gives the lower-unitriangular subgroup. The upper and lower unitriangular subgroups generate $\operatorname{SL}_2(\mathbb F_q)$ by Gaussian elimination, so their projective images generate $G$. Thus the conjugates of $A$ generate $G$, and [L2] applies. [L2, step 1.1, step 1.2] ∎
