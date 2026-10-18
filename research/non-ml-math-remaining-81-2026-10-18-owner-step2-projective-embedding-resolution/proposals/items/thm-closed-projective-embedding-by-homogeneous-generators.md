---
id: thm-closed-projective-embedding-by-homogeneous-generators
kind: theorem
title: "Closed projective embedding from a radical homogeneous ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-space-points, def-projective-algebraic-set, def-homogeneous-coordinate-ring, lem-projective-irreducibility-homogeneous-prime, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: pass
---

## Statement

Assume the Axiom of Choice. If $J$ is homogeneous radical and
$V_+(J)\ne\varnothing$, then $I_+(V_+(J))=J$; its inclusion in
$\mathbf P_k^n$ is a closed projective embedding and its homogeneous
coordinate ring is $k[x_0,\ldots,x_n]/J$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the algebraically closed base field $k$ fixed by [[def-projective-space-points]], and a homogeneous radical ideal $J\subseteq k[x_0,\ldots,x_n]$ with nonempty $X=V_+(J)$.

[F1] The projective space $\mathbf P_k^n$ is defined over a fixed algebraically closed field $k$ ([[def-projective-space-points]]); its projective algebraic sets are the homogeneous zero loci $V_+(J)$ ([[def-projective-algebraic-set]]).

[F2] Over this algebraically closed field, under AC the projective radical-ideal correspondence gives $I_+(V_+(J))=J$ for homogeneous radical $J$ with nonempty zero locus ([[lem-projective-irreducibility-homogeneous-prime]]).

[F3] The homogeneous coordinate ring of a projective algebraic set $X$ is $S(X)=k[x_0,\ldots,x_n]/I_+(X)$, with its induced grading ([[def-homogeneous-coordinate-ring]]).

[A1] Assume the Axiom of Choice. Its use is the radical-ideal correspondence in [F2] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The base field is algebraically closed by the standing projective-space convention in [F1]. Since $J$ is homogeneous and radical and $X=V_+(J)$ is nonempty, all hypotheses of [F2] hold; under [A1] it gives $I_+(X)=J$. [A1, F1, F2, given]

2.1 By [F1], $X=V_+(J)$ is projectively closed. Its inclusion identifies $X$ with this closed algebraic subset and has the identity as inverse onto its image, so it is a closed projective embedding in the classical coordinate sense used here. [F1, step 1.1]

3.1 Substituting $I_+(X)=J$ from step 1.1 into [F3] gives $S(X)=k[x_0,\ldots,x_n]/J$. The quotient carries the induced grading because $J$ is homogeneous. This proves the stated coordinate-ring formula together with the closed embedding in step 2.1. [F3, step 1.1, step 2.1, algebra] ∎
