---
id: lem-the-bockstein-is-independent-of-lift-and-cocycle-representative
kind: lemma
title: The Bockstein is independent of lift and representative
status: draft
origin: pipeline
deps: ["def-bockstein-connecting-operation", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 3.E, printed page 303
---

## Statement

Assume AC and the hypotheses and notation of
[[def-bockstein-connecting-operation]]. The class $\beta[c]$ is independent
of the chosen $B$-cochain lift of $c$ and of the cocycle representing $[c]$.

## Facts & Assumptions

**Given:** A short exact sequence $0\to A\xrightarrow{i}B\xrightarrow{q}C\to0$
and a cocycle $c\in C^n(X;C)$.

[F1] The Bockstein construction chooses $b$ with $q_*b=c$, uniquely solves
$i_*a=\delta b$, and proposes $\beta[c]=[a]$
([[def-bockstein-connecting-operation]]).

[F2] AC supplies a simultaneous choice from any set-indexed family of
nonempty fibres ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct cochain comparison.

1.1 The cochain $a$ in [F1] is a cocycle. [given, F1]
Indeed,
$i_*(\delta a)=\delta(i_*a)=\delta^2b=0$; injectivity of $i_*$ gives
$\delta a=0$.

2.1 Changing only the lift changes $a$ by a coboundary. [F1, step 1.1]
If $b'$ is another lift of $c$, then $q_*(b'-b)=0$. Exactness gives a unique
$h\in C^n(X;A)$ with $b'-b=i_*h$. If $a'$ is defined from $b'$, then
$i_*(a'-a)=\delta(b'-b)=i_*(\delta h)$, hence $a'-a=\delta h$.

3.1 Changing the cocycle representative also changes $a$ by a coboundary. [F1, F2, step 2.1]
Write $c'=c+\delta u$. Use the lifting choice of [F2] to take
$v\in C^{n-1}(X;B)$ with $q_*v=u$. For an arbitrary lift $b'$ of $c'$,

$$
q_*(b'-b-\delta v)=c'-c-\delta u=0.
$$

Thus $b'=b+\delta v+i_*h$ for some $h\in C^n(X;A)$. Applying $\delta$
and using $\delta^2v=0$ gives $a'=a+\delta h$.

4.1 Steps 2.1 and 3.1 show that $[a']=[a]$ for either permitted change, so $\beta[c]$ is well defined. [step 2.1, step 3.1] ∎
