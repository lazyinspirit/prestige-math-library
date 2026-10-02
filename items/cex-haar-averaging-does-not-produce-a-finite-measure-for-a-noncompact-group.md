---
id: cex-haar-averaging-does-not-produce-a-finite-measure-for-a-noncompact-group
kind: counterexample
title: "No normalized translation-invariant Haar probability on the real line"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-left-haar-integral-and-left-haar-measure, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, def-measure, thm-heine-borel-rn, def-topological-group, lem-real-line-is-a-metric-space]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Appendix A §A.5"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
---

## Statement refuted

The averaging construction of the compact theory does not extend to
noncompact groups by normalizing Haar measure. Every nonzero left Haar measure
$\mu$ on the additive group $\mathbb R$ has infinite total mass, so no positive
scalar multiple of $\mu$ is a left-invariant probability: there is no
translation-invariant Haar probability on $\mathbb R$, and the compactness
hypothesis in the compact-group construction is genuine rather than a
convenience. This implication is choice free once the Haar measure is given.

## Facts & Assumptions

**Given:** the additive group $\mathbb R$ with its usual topology, which is a
locally compact Hausdorff group with continuous addition and negation
([[def-topological-group]], [[lem-real-line-is-a-metric-space]]), and a nonzero
left Haar measure $\mu$ on it ([[def-left-haar-integral-and-left-haar-measure]]).
No choice principle is used: the measure $\mu$ is given.

[F1] A left Haar measure is left invariant and finite on compact sets: for every
Borel $E$ and every $a$ one has $\mu(a+E)=\mu(E)$, and $\mu(K)<\infty$ for
compact $K$. ([[def-left-haar-integral-and-left-haar-measure]])

[F2] Every Haar measure is positive on every nonempty open set.
([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]])

[F3] A measure is countably additive on pairwise disjoint sequences, with the
extended nonnegative sum.
([[def-measure]])

[F4] A subset of $\mathbb R$ is compact exactly when it is closed and bounded;
in particular every closed bounded interval is compact, and $\mathbb R$ itself
is not compact. ([[thm-heine-borel-rn]])

## Counterexample

**Proof technique:** direct.

1.1 For every $n\ge0$ the interval $E_n:=(2n,2n+1)$ is open and bounded, and its closure $[2n,2n+1]$ is compact, so $E_n$ is Borel with $\mu(E_n)\le\mu([2n,2n+1])<\infty$; the intervals $E_n$ are pairwise disjoint. [F1, F4]

2.1 The interval $E_0=(0,1)$ is nonempty and open, so $c:=\mu(E_0)$ satisfies $0<c<\infty$. [F2, step 1.1]

3.1 For every $n\ge0$ the interval $E_n=2n+E_0$ is the translate of $E_0$ by $2n$, so $\mu(E_n)=\mu(E_0)=c$ by left invariance; applying countable additivity to the pairwise disjoint sequence consisting of the complement $\mathbb R\setminus\bigcup_{n\ge0}E_n$ and the sets $E_n$ gives $\mu(\mathbb R)=\mu(\mathbb R\setminus\bigcup_{n\ge0}E_n)+\sum_{n\ge0}c=+\infty$, because $c>0$; hence no scalar multiple $\lambda\mu$ with $\lambda>0$ is a probability, so the compact-group normalization has no analogue on $\mathbb R$, and $\mathbb R$ is indeed noncompact since it is unbounded. [F1, F3, F4, step 1.1, step 2.1] ∎
