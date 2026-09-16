---
id: fs-simple-roots-are-pairwise-orthogonal
kind: false-statement
title: Simple roots are pairwise orthogonal
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-distinct-simple-roots-have-nonpositive-inner-product, thm-existence-of-each-classified-root-system, def-positive-system-and-base-of-simple-roots]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Lemma 2.51 and (2.50), printed pp. 155-156"
landmark: false
proof_strategy: counterexample
---

## Statement

False: distinct simple roots of a reduced crystallographic root system are
generally not orthogonal; their inner product is nonpositive and can be
nonzero.

## Facts & Assumptions

**Given:** The standard model of $A_2$ and the notion of a simple root.

[L1] For the root system $A_2=\{e_i-e_j:1\le i\ne j\le3\}$ in the sum-zero subspace of $\mathbb R^{3}$, the roots $e_1-e_2$ and $e_2-e_3$ are simple with respect to the regular functional $x\mapsto(x,(3,2,1))$ ([[thm-existence-of-each-classified-root-system]], [[def-positive-system-and-base-of-simple-roots]]).

[L2] Distinct simple roots satisfy $(\alpha,\beta)\le0$ ([[prop-distinct-simple-roots-have-nonpositive-inner-product]]).

## Refutation

**Proof technique:** counterexample.

1.1 In the model of [L1] take $\alpha=e_1-e_2$, $\beta=e_2-e_3$; the coordinates are $(1,-1,0)$ and $(0,1,-1)$ in the standard orthonormal basis of $\mathbb R^{3}$, so $(\alpha,\beta)=0\cdot1+(-1)\cdot1+0\cdot(-1)=-1\ne0$. [L1, algebra]

2.1 Both $\alpha$ and $\beta$ are simple roots by [L1], and they span a rank-two subsystem, so they are distinct simple roots that are not orthogonal; the negative value of their inner product is consistent with [L2]. This refutes the claim that simple roots are pairwise orthogonal. [L1, L2, step 1.1] ∎
