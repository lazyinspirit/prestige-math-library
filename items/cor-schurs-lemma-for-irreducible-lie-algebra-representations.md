---
id: cor-schurs-lemma-for-irreducible-lie-algebra-representations
kind: corollary
title: Schur’s lemma for irreducible Lie-algebra representations
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra, thm-schurs-lemma-for-modules, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation, cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §11.2, printed pp. 64–65"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Theorem 4.29, printed p. 54"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

A nonzero intertwiner between irreducible $\mathfrak g$-representations is an
isomorphism, and the endomorphism ring of an irreducible representation is a
division ring. If $k$ is algebraically closed and the representation is finite
dimensional, every intertwining endomorphism is scalar.

## Facts & Assumptions

**Given:** Irreducible representations of one Lie algebra $\mathfrak g$ over
$k$.

[L1] Lie representations and their intertwiners are respectively unital
$U(\mathfrak g)$-modules and module maps
([[thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra]]).

[L2] Schur's lemma for modules makes a nonzero map between simple modules an
isomorphism and the endomorphism ring of a simple module a division ring
([[thm-schurs-lemma-for-modules]]).

[L3] A linear operator on a positive finite-dimensional vector space over an
algebraically closed field has an eigenvalue
([[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]]).

## Proof

**Proof technique:** direct.

1.1 A stable subspace is exactly a $U(\mathfrak g)$-submodule under [L1], so an irreducible Lie representation is a simple nonzero $U(\mathfrak g)$-module. Applying [L2] proves the first two assertions. [L1, L2]

2.1 Now assume $k$ is algebraically closed and $V$ is finite-dimensional and irreducible. For $T\in\operatorname{End}_{\mathfrak g}(V)$, [L3] gives an eigenvalue $\lambda\in k$. Then $T-\lambda I$ is still an intertwiner but is not invertible; the division-ring conclusion of step 1.1 forces $T-\lambda I=0$. [step 1.1, L3, algebra]

3.1 Thus every such $T$ equals $\lambda I$. The finite-dimensional and algebraic-closure hypotheses are used only in step 2.1 and are not claimed in the division-ring statement. [step 1.1, step 2.1] ∎
