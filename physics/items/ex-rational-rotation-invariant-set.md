---
id: ex-rational-rotation-invariant-set
kind: example
title: An explicit invariant set for a rational rotation
deps: ["prop-circle-rotations-preserve-lebesgue-measure", "def-ergodic-measure-preserving-system", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Proposition 2.16
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume countable choice. If $\alpha=p/q$ with integers $p$, $q\ge1$ in lowest terms, then $E=\bigcup_{j=0}^{q-1}[j/q,j/q+1/(2q))$ is strictly invariant under $R_\alpha$ and has Lebesgue measure $1/2$. Thus this rational rotation is not ergodic.

## Facts & Assumptions

[F1] Circle rotations preserve Lebesgue probability and have measurable inverses. [[prop-circle-rotations-preserve-lebesgue-measure]].

[F2] In a probability system ergodicity requires strict invariant sets to have measure zero or one. [[def-ergodic-measure-preserving-system]].

## Verification

**Given:** Assume countable choice. If $\alpha=p/q$ with integers $p$, $q\ge1$ in lowest terms, then $E=\bigcup_{j=0}^{q-1}[j/q,j/q+1/(2q))$ is strictly invariant under $R_\alpha$ and has Lebesgue measure $1/2$. Thus this rational rotation is not ergodic.

1.1 Write $E_j=[j/q,j/q+1/(2q))$. For $x=j/q+t$ with $0\le t<1/(2q)$, one has $R_{p/q}x=((j+p)\bmod q)/q+t$. The residue map $j\mapsto j+p\bmod q$ is a permutation, with inverse subtraction of $p$. Thus rotation maps the collection of $E_j$ onto itself and, being bijective, satisfies $R_{p/q}^{-1}E=E$. The half-open convention makes the formula exact at every included left endpoint and excludes every right endpoint. [F1]

2.1 The $q$ intervals $E_j$ are pairwise disjoint and each has length $1/(2q)$. Hence $\lambda(E)=\sum_{j=0}^{q-1}1/(2q)=1/2$. It is Borel, and its complement also has measure $1/2$. By [F1] the ambient system preserves the probability, so [F2] proves nonergodicity. For $q=1$, this is simply the identity rotation and $E=[0,1/2)$. Countable choice is used only for the Lebesgue probability supplied by [F1]. [1.1, F1, F2] ∎

