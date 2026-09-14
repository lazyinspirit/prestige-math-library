---
id: ex-the-euclidean-motion-lie-algebra-is-solvable-in-dimension-two
kind: example
title: The plane Euclidean-motion Lie algebra is solvable
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-semidirect-product-of-lie-algebras, def-derived-series-and-solvable-lie-algebra, def-solvable-length-of-a-lie-algebra, def-lower-central-series-and-nilpotent-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, solvable examples"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§5.4, printed pp. 101–103"
---

## Example

The Lie algebra of orientation-preserving Euclidean motions of the plane is

$$\mathfrak e(2)=\mathfrak{so}(2)\ltimes\mathbb R^2.$$

It has derived length two and is not nilpotent.

## Facts & Assumptions

**Given:** A basis $R,P,Q$ in which $R$ is infinitesimal rotation and $P,Q$
are translations.

[L1] The semidirect-product bracket combines the acting algebra, its action,
and the ideal bracket ([[def-semidirect-product-of-lie-algebras]]).

[L2] The derived series tests solvability
([[def-derived-series-and-solvable-lie-algebra]]), and its least vanishing
index is the derived length ([[def-solvable-length-of-a-lie-algebra]]).

[L3] The lower central series tests nilpotence
([[def-lower-central-series-and-nilpotent-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 The standard rotation action gives $[R,P]=Q$, $[R,Q]=-P$, and $[P,Q]=0$ via [L1]. Therefore every bracket lies in the translation ideal $T=\mathbb RP\oplus\mathbb RQ$, while the first two displayed brackets span $T$. Hence $\mathfrak e(2)^{(1)}=T$. Since $T$ is abelian, $\mathfrak e(2)^{(2)}=0$. The first derived term is nonzero, so [L2] gives derived length exactly two. [given, L1, L2, algebra]

2.1 The same calculation gives $\gamma_2(\mathfrak e(2))=T$. Moreover $[\mathfrak e(2),T]=T$, because bracketing $R$ with $P,Q$ again yields $Q,-P$. Induction gives $\gamma_r(\mathfrak e(2))=T\neq0$ for every $r\geq2$, so the algebra is not nilpotent by [L3]. [L3, step 1.1, algebra]

3.1 Thus the abelian translation ideal is responsible for solvability, while the nontrivial rotation action prevents lower-central termination. Both endpoint computations are exact, and the finite explicit example uses no choice. [step 1.1, step 2.1] ∎
