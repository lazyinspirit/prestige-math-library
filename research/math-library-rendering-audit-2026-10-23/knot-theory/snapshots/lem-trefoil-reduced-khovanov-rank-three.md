---
id: lem-trefoil-reduced-khovanov-rank-three
kind: lemma
title: "The reduced Khovanov homology of a trefoil has rank three"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - alg-khovanov-chain-complex-from-diagram
  - lem-khovanov-cube-differential-squares-to-zero
  - thm-khovanov-chain-complex-from-diagram-procedure-properties
proof_strategy: direct
axiom_use: "Choice-free finite enumeration and linear algebra over F2."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §6"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Shumakovitch, Torsion of the Khovanov homology, §2.2"
      url: "https://arxiv.org/pdf/math/0405474v2"
---

## Statement

Let $D$ be the oriented closure of the two-strand braid $\sigma_1^3$, with both strands directed downward and the positive generator drawn with its southwest-to-northeast strand over its northwest-to-southeast strand. Mark a point away from the three crossings, use the A-smoothing (zero-resolution) as the through pairing, and use the B-smoothing (one-resolution) as the cap-cup pairing. The normalized reduced Khovanov cohomology of $D$ over $\mathbb F_2$ has total rank $3$. The normalized cohomological and quantum grading shifts do not change this total rank.

## Statement references

[[def-reduced-khovanov-cohomology-of-a-based-link-over-f2|Based reduced Khovanov complex]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Frobenius algebra and merge/split maps]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §6](https://arxiv.org/pdf/math/0309170v1)

[Shumakovitch, *Torsion of the Khovanov homology*, §2.2](https://arxiv.org/pdf/math/0405474v2)

## Facts & Assumptions

**Given:** The three-crossing two-strand braid closure, a basepoint, and its reduced cube over $\mathbb F_2$.

[F1] The based reduced state space removes the marked-circle factor, and a split of that circle maps its surviving label $1$ to $X$ on the unmarked output. The supplier proof verifies that the marked action commutes with every edge map, so the quotient is a cochain complex ([[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]]).

[F2] The circle algebra has $X^2=0$, multiplication $m$, and comultiplication $\Delta(1)=1\otimes X+X\otimes1$, $\Delta(X)=X\otimes X$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

[F3] The signed Khovanov differential squares to zero, and the finite diagram procedure outputs a finite cochain complex ([[lem-khovanov-cube-differential-squares-to-zero]], [[thm-khovanov-chain-complex-from-diagram-procedure-properties]]).

[F4] The diagram procedure enumerates all smoothing states and assigns the merge or split edge map at each crossing change ([[alg-khovanov-chain-complex-from-diagram]]).

## Proof

1.1 Let $r$ be the number of one-resolutions. The all-through closure has two circles; for $r\ge1$, the first cap-cup gives one circle and each additional cap-cup contributes one closed circle. Thus the eight state circle counts in lexicographic order are $2,1,1,2,1,2,2,3$. Removing the marked circle gives reduced state dimensions $2,1,1,2,1,2,2,4$, so the cube cochain dimensions are $2,3,6,4$. [F1, F4, given, construct]

2.1 Order states within each cohomological degree lexicographically and order free circle factors by their first encounter in a fixed diagram scan, with $1$ before $X$. The quotient by the marked-circle action in [F1], the Frobenius maps in [F2], and the edge procedure in [F4] give $d^0=\begin{pmatrix}1&0\\1&0\\1&0\end{pmatrix}$, $d^1=\begin{pmatrix}0&0&0\\1&1&0\\0&0&0\\1&0&1\\0&0&0\\0&1&1\end{pmatrix}$, and $d^2=\begin{pmatrix}0&0&0&0&0&0\\1&0&1&0&0&0\\0&0&1&0&1&0\\0&1&0&1&0&1\end{pmatrix}$. In $d^0$ each merge sends $1\mapsto1$ and $X\mapsto0$. In $d^1$ each target gets two marked-circle splits $1\mapsto X$. For $d^2$, on target basis $(1\otimes1,1\otimes X,X\otimes1,X\otimes X)$ the three source-state maps are $011:(1\mapsto1\otimes X,\ X\mapsto X\otimes X)$, $101:(1\mapsto1\otimes X+X\otimes1,\ X\mapsto X\otimes X)$, and $110:(1\mapsto X\otimes1,\ X\mapsto X\otimes X)$. These are exactly the marked quotient split maps and the ordinary Frobenius split map, in the stated basis order. [F1, F2, F4, step 1.1, construct, algebra]

3.1 The matrix $d^0$ has rank $1$. In $d^1$, the first two columns are independent and their sum is the third, so $\operatorname{rank}d^1=2$. The last matrix has three independent nonzero rows, so $\operatorname{rank}d^2=3$. By [F1] the quotient is a cochain complex, and [F3] gives its finite support; hence its cohomology dimensions are $2-1=1$, $3-1-2=0$, $6-2-3=1$, and $4-3=1$. The total rank is therefore $3$, and grading shifts preserve total dimension. [F1, F3, step 1.1, step 2.1, algebra] ∎
