---
id: cor-harnack-inequality-on-compact-subsets
kind: corollary
title: "Harnack inequality on compact subsets"
status: published
origin: pipeline
deps: [thm-harnack-inequality-on-a-ball, lem-finite-harnack-chain-on-a-compact-connected-subset, cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.22, pp.31–32"
    - title: "Tsogtgerel Gantumur, Harmonic functions (2012)"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§11 Lemma 25, pp.18–19"
---

## Statement

For $n\ge2$, a domain $\Omega\subseteq\mathbb R^n$ and a nonempty compact $K\subset\Omega$, there is $C=C(K,\Omega,n)\ge1$ such that every nonnegative harmonic function $u$ on $\Omega$ satisfies
$$\sup_Ku\le C\inf_Ku.$$
The compact set $K$ need not be connected.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] On $B_R(a)$ a nonnegative harmonic function satisfies $u(x)\le(R/(R-|x-a|))^n u(a)$. ([[thm-harnack-inequality-on-a-ball]]).

[F2] Any compact subset of a domain has a finite cover by interior balls with connected overlap graph and fourfold closed balls in the domain. ([[lem-finite-harnack-chain-on-a-compact-connected-subset]]).

[F3] A nonnegative harmonic function on a domain is identically zero or strictly positive everywhere. ([[cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes]]).

## Proof

**Proof technique:** direct.

1.1 If $u$ has an interior zero, it vanishes throughout $\Omega$, and the inequality is immediate. Otherwise it is strictly positive. Fix the finite admissible-ball family of the chain lemma, of size $N$, independently of $u$. [F2, F3, given]

2.1 If $x,y\in B_r(a)$ from this family, then $B_{3r}(y)\subset B_{4r}(a)\subset\Omega$ and $|x-y|<2r$. Ball Harnack gives $u(x)\le3^n u(y)$. Thus any two points of one of the small balls are comparable by the same constant. [F1, step 1.1]

3.1 For $x,y\in K$, connect balls containing them by a simple path in the finite connected graph, with at most $N$ vertices. Choose one point in each of its finitely many overlaps and apply the local comparison in successive balls. It gives $u(x)\le3^{nN}u(y)$. Taking the supremum in $x$ and the infimum in $y$ proves the claim with $C=3^{nN}$. [step 2.1, algebra] ∎
