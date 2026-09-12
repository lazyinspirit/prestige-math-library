---
id: fs-continuous-invariant-functions-characterize-measure-ergodicity
kind: false-statement
title: 'False: constant continuous invariants characterize measure ergodicity'
deps: ["def-circle-rotation-and-doubling-map", "def-ergodic-measure-preserving-system", "prop-dirac-measure-is-a-probability-measure", "thm-of-archimedean"]
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
    - title: E–W ergodicity definition and doubling example; explicit measure specialization
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

The assertion that a probability-preserving continuous map is measure ergodic whenever all of its everywhere invariant continuous real functions are constant is false. On the circle, doubling has only constant everywhere invariant continuous functions, but is not ergodic for $\mu=\tfrac12\delta_0+\tfrac14\delta_{1/3}+\tfrac14\delta_{2/3}$. This atomic counterexample is choice-free, and therefore also holds under countable choice.

## Facts & Assumptions

[F1] Use only the choice-free metric and map clauses defining the circle and $D$. [[def-circle-rotation-and-doubling-map]].

[F2] A probability-preserving map is ergodic when each strictly invariant measurable set has measure zero or one. [[def-ergodic-measure-preserving-system]].

[F3] Dirac set functions are probabilities without a choice assumption. [[prop-dirac-measure-is-a-probability-measure]].

[F4] The natural numbers are cofinal in the reals. [[thm-of-archimedean]].

## Refutation

**Given:** The assertion that a probability-preserving continuous map is measure ergodic whenever all of its everywhere invariant continuous real functions are constant is false. On the circle, doubling has only constant everywhere invariant continuous functions, but is not ergodic for $\mu=\tfrac12\delta_0+\tfrac14\delta_{1/3}+\tfrac14\delta_{2/3}$. This atomic counterexample is choice-free, and therefore also holds under countable choice.

1.1 For $D$ from [F1], $D(0)=0$, $D(1/3)=2/3$ and $D(2/3)=1/3$. The measure $\mu$ displayed in the statement is a Borel probability by [F3] and finite additivity of the weighted sum of measures; countable additivity follows by commuting a finite sum with increasing partial sums. For every Borel $E$, $\mu(D^{-1}E)=\tfrac12\mathbf1_E(0)+\tfrac14\mathbf1_E(2/3)+\tfrac14\mathbf1_E(1/3)=\mu(E)$, so it is invariant. Continuity of $D$ gives its Borel measurability. [F1, F3]

1.2 Put $Z=\bigcup_{n\ge0}(D^n)^{-1}\{0\}$. Each inverse image is Borel since $D^n$ is continuous and $\{0\}$ is closed, so $Z$ is Borel. A point lies in $Z$ exactly when it eventually maps to zero. If it does, then so does its image, since zero is fixed; conversely if its image eventually maps to zero, the point does one step later. Thus $D^{-1}Z=Z$. The point zero is in $Z$, while $1/3$ and $2/3$ stay in their two-cycle and never reach zero. Therefore $\mu(Z)=1/2$, which violates [F2]. [1.1, F2]

2.1 Now let continuous real $f$ satisfy $f\circ D=f$ at every circle point. Iteration shows $f(k/2^n)=f(0)$ for $0\le k<2^n$, since $D^n(k/2^n)=0$. For any $x\in[0,1)$ put $q_n=2^{-n}\lfloor2^nx\rfloor$. Then $0\le x-q_n<2^{-n}$, so $q_n\to x$ in the circle metric: $2^n\ge n+1$ by induction and [F4] gives $2^{-n}\to0$. Continuity yields $f(x)=\lim_n f(q_n)=f(0)$. Hence all the stated continuous invariants are constant while the invariant probability is nonergodic. No Lebesgue measure, countable union of countable sets, or choice principle is used; the sets and sequences are explicitly defined. [1.1, 1.2, F1, F4] ∎

