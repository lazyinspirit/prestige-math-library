---
id: lem-simple-rational-representations-are-finite-dimensional
kind: lemma
title: "Simple rational representations are finite-dimensional"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [def-rational-representation-and-comodule-of-an-affine-group-scheme, def-simple-and-semisimple-representations, lem-finite-dimensional-subcomodules-contain-elements]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 4 (4.15)-(4.16), printed p. 90"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, use of local finiteness of the space of functions (Theorem 40(b) proof)"
---

## Statement

Let $G$ be an affine group scheme of finite type over a field $k$. Then every
simple rational representation $(V,r)$ of $G$ is finite-dimensional
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]],
[[def-simple-and-semisimple-representations]]).

## Facts & Assumptions

**Given:** An affine group scheme $G$ of finite type over $k$ with coordinate
Hopf algebra $A=O(G)$, and a simple rational representation $(V,r)$, so
$V\ne0$ and the only subrepresentations of $V$ are $0$ and $V$
([[def-simple-and-semisimple-representations]]).

[F1] *Finite-dimensional subcomodules.* For every finite subset $S$ of an
$A$-comodule $M$ there is a finite-dimensional subcomodule $N\subseteq M$
containing $S$; consequently $M$ is the directed union of its
finite-dimensional subcomodules
([[lem-finite-dimensional-subcomodules-contain-elements]]).

[F2] *Subrepresentations are subcomodules.* Under the comodule dictionary,
subrepresentations of $V$ correspond to subcomodules, and a nonzero
subcomodule is a nonzero subrepresentation
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

## Proof

**Proof technique:** direct.

1.1 Since $V\ne0$, choose a nonzero vector $v\in V$. [given]

2.1 By [F1] there is a finite-dimensional subcomodule $W\subseteq V$ containing $v$. [F1, step 1.1]

3.1 By [F2] the subspace $W$ is a subrepresentation of $V$; it is nonzero because $v\in W$. Since $V$ is simple, its only subrepresentations are $0$ and $V$, so $W=V$. Hence $V$ is finite-dimensional, as claimed. [F2, given, step 2.1] ∎

## Remarks

- The only input is Milne 4.8: the comodule structure makes every element lie
  in a finite-dimensional subcomodule, and a simple module cannot have a
  nonzero proper submodule.
- No hypothesis on $k$ beyond being a field is used, and no choice principle:
  the finite-dimensional subcomodule is produced from finitely many
  coefficients of $\rho(v)$.
