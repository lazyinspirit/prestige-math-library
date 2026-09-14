---
id: cor-semisimple-lie-algebras-are-centerless-and-perfect
kind: corollary
title: Semisimple Lie algebras are centerless and perfect
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-cartans-semisimplicity-criterion, def-killing-form-of-a-finite-dimensional-lie-algebra]
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
    - title: "Milne, Lie Algebras, consequences of Theorem 4.13"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§4, immediately after Theorem 4.13, printed pp. 43–44"
---

## Statement

If $\mathfrak g$ is finite-dimensional and semisimple over a
characteristic-zero field, then
$Z(\mathfrak g)=0$ and $[\mathfrak g,\mathfrak g]=\mathfrak g$.

## Facts & Assumptions

**Given:** Such a Lie algebra $\mathfrak g$.

[L1] Its Killing form is nondegenerate
([[thm-cartans-semisimplicity-criterion]]).

[L2] The Killing form is the trace form of the adjoint representation
([[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 If $z\in Z(\mathfrak g)$, then $\operatorname{ad}_z=0$, so [L2] gives $K(z,x)=0$ for every $x$. Nondegeneracy in [L1] yields $z=0$. [L1, L2]
2.1 Let $D=[\mathfrak g,\mathfrak g]$. Its orthogonal complement consists exactly of the elements $z$ with $K([x,y],z)=K(x,[y,z])=0$ for all $x,y$, hence $[y,z]=0$ by [L1]. Thus $D^\perp=Z(\mathfrak g)=0$ by step 1.1, and finite-dimensional nondegeneracy gives $D=\mathfrak g$. [L1, step 1.1, algebra]
3.1 When $\mathfrak g=0$, both conclusions read $0=0$; no nonempty choice was used. [step 1.1, 2.1] ∎
