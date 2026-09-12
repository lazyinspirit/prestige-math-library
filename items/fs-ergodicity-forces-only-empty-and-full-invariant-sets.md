---
id: fs-ergodicity-forces-only-empty-and-full-invariant-sets
kind: false-statement
title: 'False: an ergodic invariant sigma-algebra has only two sets'
deps: ["thm-doubling-map-is-ergodic-for-lebesgue-measure", "def-strict-and-mod-null-invariant-sigma-algebras", "prop-countable-subsets-of-rn-are-lebesgue-null", "thm-countable-union-of-countable", "def-countable-choice"]
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
    - title: E–W Proposition 2.14; doubling example specialization
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assuming countable choice, it is false that an ergodic system has only the empty set and the whole space as strictly invariant measurable sets. For Lebesgue doubling on $[0,1)$, the dyadic rationals form a nonempty proper strictly invariant null set.

## Facts & Assumptions

[F1] Doubling is ergodic for Lebesgue probability. [[thm-doubling-map-is-ergodic-for-lebesgue-measure]].

[F2] Strict invariance means exact equality with the inverse image. [[def-strict-and-mod-null-invariant-sigma-algebras]].

[F3] Countable real sets are measurable and Lebesgue null under countable choice. [[prop-countable-subsets-of-rn-are-lebesgue-null]].

[F4] Countable unions of finite sets are countable under countable choice. [[thm-countable-union-of-countable]].

## Refutation

**Given:** Assuming countable choice, it is false that an ergodic system has only the empty set and the whole space as strictly invariant measurable sets. For Lebesgue doubling on $[0,1)$, the dyadic rationals form a nonempty proper strictly invariant null set.

1.1 Put $Q_2=\bigcup_{n\ge0}\{k/2^n:0\le k<2^n,\ k\text{ integer}\}$. Each level is finite, so [F4] and [F3] give measurability and $\lambda(Q_2)=0$; it is also Borel as a countable union of finite closed subsets of the circle. It contains $0$ and is proper: $1/3\notin Q_2$, since $1/3=k/2^n$ would give $2^n=3k$, while induction gives the residue of $2^n$ modulo 3 as $1$ for even $n$ and $2$ for odd $n$. [F3, F4]

2.1 If $x=k/2^n$ is dyadic, then $D(x)=\{2x\}$ is dyadic, including $n=0$ when $x=0$. Conversely, if $D(x)=k/2^n$, write $2x=k/2^n+\ell$ with $\ell\in\{0,1\}$. Then $x=(k+\ell2^n)/2^{n+1}$ is dyadic and belongs to $[0,1)$. Hence $D^{-1}Q_2=Q_2$ exactly, as required by [F2]. By [F1] the system is ergodic, but its invariant sigma-algebra contains this nonempty proper set. Ergodicity only constrains its measure to zero or one. Countable choice is inherited from [F1], [F3] and [F4]. [1.1, F1, F2, F3, F4] ∎

