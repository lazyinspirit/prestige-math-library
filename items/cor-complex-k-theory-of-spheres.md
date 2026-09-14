---
id: cor-complex-k-theory-of-spheres
kind: corollary
title: Complex K-theory of spheres
status: published
origin: pipeline
deps: [thm-complex-bott-periodicity, thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range, thm-hopf-line-calculation-of-k-zero-of-the-two-sphere, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Corollary 2.12"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Sphere groups after Bott periodicity, printed p.55"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Coefficient groups of complex K-theory, printed pp.205–208"
---

## Statement

Assume AC. For $m\geq0$,

$$\widetilde K^0(S^{2m})\cong\mathbb Z,\qquad \widetilde K^0(S^{2m+1})=0.$$

The even generator is the $m$-fold reduced external product of the Bott class
$\beta$, with $S^0$ interpreted as a based two-point space and the empty
product as its rank-difference generator. Equivalently,
$\widetilde K^q(S^n)$ is $\mathbb Z$ when $q-n$ is even and is zero when
$q-n$ is odd.

## Facts & Assumptions

**Given:** AC, based spheres, and the Hopf Bott class $\beta$.

[F1] Multiplication by $\beta$ is the natural twofold-suspension isomorphism
in every degree ([[thm-complex-bott-periodicity]]).

[F2] Complex bundles on $S^1$ are classified by clutching data on $S^0$ and
$\operatorname{GL}_n(\mathbb C)$ is path-connected in the complex case
([[thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]]).

[F3] $\widetilde K^0(S^2)=\mathbb Z\beta$
([[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]]).

[A1] AC is propagated from [F1] and [F3]; the $S^0$ and $S^1$ base
calculations themselves are finite and choice-free.

## Proof

**Proof technique:** direct.

1.1 A bundle on the based two-point space $S^0$ is a pair of finite-dimensional complex vector spaces. The reduced kernel records the dimension at the nonbasepoint minus the dimension at the basepoint, so $\widetilde K^0(S^0)\cong\mathbb Z$. On $S^1$, [F2] reduces a rank-$n$ bundle to two clutching values in the same path component of $\operatorname{GL}_n(\mathbb C)$, so it is trivial. Thus $K^0(S^1)\cong\mathbb Z$ by rank and $\widetilde K^0(S^1)=0$. [F2, algebra]

2.1 Apply [F1] repeatedly to the two base groups in step 1.1. It gives $\widetilde K^0(S^{2m})\cong\widetilde K^0(S^0)=\mathbb Z$ and $\widetilde K^0(S^{2m+1})\cong\widetilde K^0(S^1)=0$ for all $m\geq0$. At each even step the isomorphism is external product with $\beta$, so the generator is the stated $m$-fold product; for $m=1$ it agrees with [F3]. [F1, F3, A1, step 1.1, induction]

3.1 By definition, suspension shifts the reduced degree and [F1] makes it two-periodic. Hence $\widetilde K^q(S^n)$ depends only on the parity of $q-n$; step 2.1 gives $\mathbb Z$ in even parity and zero in odd parity. This includes $n=0$, $m=0$, and the zero group without a hidden exception. [F1, step 2.1, algebra] ∎
