---
id: fs-ergodicity-implies-strong-mixing
kind: false-statement
title: 'False: ergodicity implies strong mixing'
deps: ["thm-circle-rotation-is-ergodic-iff-angle-is-irrational", "def-strong-and-weak-mixing", "lem-irrational-circle-orbits-are-dense", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Example 2.33
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assuming countable choice, the assertion that every ergodic probability-preserving transformation is strongly mixing is false: any irrational circle rotation gives a counterexample.

## Facts & Assumptions

[F1] Irrational circle rotations preserve Lebesgue probability and are ergodic. [[thm-circle-rotation-is-ergodic-iff-angle-is-irrational]].

[F2] Irrational rotations have arbitrarily large positive iterates arbitrarily close to zero. [[lem-irrational-circle-orbits-are-dense]].

[F3] Strong mixing requires every set correlation to tend to the product of measures. [[def-strong-and-weak-mixing]].

## Refutation

**Given:** Assuming countable choice, the assertion that every ergodic probability-preserving transformation is strongly mixing is false: any irrational circle rotation gives a counterexample.

1.1 Fix an irrational $\alpha$ and the ergodic Lebesgue system $R_\alpha$ of [F1]. Set $A=[0,1/2)$, of measure $1/2$. By [F2], define recursively $n_j$ to be the least integer greater than $n_{j-1}$, with $n_0=0$, such that $d(\{n_j\alpha\},0)<1/(j+3)$. The existence is [F2] and leastness gives unique choices. Thus $n_j\to\infty$ and $\delta_j=d(\{n_j\alpha\},0)\to0$. [F1, F2]

2.1 For a translation by a circle displacement with representative $t\in[-1/2,1/2]$, the half-circle $A$ and its inverse translate overlap in length $1/2-|t|$: if $0\le t\le1/2$, the part in $A$ is $[0,1/2-t)$, up to endpoints, and for $-1/2\le t\le0$ it is $[-t,1/2)$. Consequently $\lambda(A\cap R_\alpha^{-n_j}A)=1/2-\delta_j\to1/2$. Strong mixing in [F3] would require the full sequence, hence this subsequence, to tend to $\lambda(A)^2=1/4$. Since $1/2\ne1/4$, mixing fails. Countable choice is inherited only from the ergodic Lebesgue system in [F1]; the return-index recursion is canonical. [1.1, F1, F3] ∎

