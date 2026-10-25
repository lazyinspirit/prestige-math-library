---
id: thm-universal-property-of-clifford-algebra
kind: theorem
title: Universal property of the Clifford algebra
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: clifford-universal-algebras-and-pbw
dependency_level: 2
deps: [def-clifford-algebra-of-a-quadratic-space, def-algebra-over-a-commutative-ring, thm-universal-property-of-the-tensor-algebra, lem-clifford-quotient-factorization]
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.2"
      url: https://arxiv.org/pdf/0805.0311
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §1"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
---

## Statement

Let $k,V,B,Q$ be as in [[def-clifford-algebra-of-a-quadratic-space]], and let $A$ be a unital associative $k$-algebra. For every $k$-linear map $f:V\to A$ satisfying $f(v)^2=Q(v)1_A$ for all $v\in V$, there is a unique unital $k$-algebra homomorphism $\bar f:\mathrm{Cl}(V,Q)\to A$ such that $\bar f\circ i_Q=f$.

## Facts & Assumptions

**Given:** The quadratic space $(V,Q)$, a unital associative $k$-algebra $A$, and a $k$-linear map $f:V\to A$ satisfying the stated quadratic relations.

[F1] Every linear map from $V$ to a unital associative $k$-algebra extends uniquely to a unital algebra homomorphism from $T_k(V)$ ([[thm-universal-property-of-the-tensor-algebra]]).

[F2] A homomorphism from $T_k(V)$ that kills every Clifford relation factors uniquely through $\mathrm{Cl}(V,Q)$ ([[lem-clifford-quotient-factorization]]).

[F3] The canonical map is $i_Q=q_Q\circ j$, and the quotient map $q_Q$ is surjective ([[def-clifford-algebra-of-a-quadratic-space]]).

[F4] A unital $k$-algebra is a unital ring with a central unital structure map from $k$ ([[def-algebra-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [F4], $A$ has the central unital $k$-algebra structure required by [F1], so $f$ extends uniquely to a unital $k$-algebra homomorphism $\widetilde f:T_k(V)\to A$ with $\widetilde f\circ j=f$. [given, F1, F4, construct]

2.1 For every $v\in V$, $\widetilde f(j(v)^2-Q(v)1)=f(v)^2-Q(v)1_A=0$. Thus [F2] gives a unique unital homomorphism $\bar f:\mathrm{Cl}(V,Q)\to A$ satisfying $\bar f\circ q_Q=\widetilde f$. [given, step 1.1, F2]

3.1 Since $i_Q=q_Q\circ j$, step 2.1 gives $\bar f\circ i_Q=\widetilde f\circ j=f$. Let $g:\mathrm{Cl}(V,Q)\to A$ be any other unital $k$-algebra homomorphism with $g\circ i_Q=f$. Then $g\circ q_Q:T_k(V)\to A$ and $\widetilde f$ are unital algebra extensions of the same map $f$ along $j$, because $(g\circ q_Q)\circ j=g\circ i_Q=f=\widetilde f\circ j$. Uniqueness in [F1] gives $g\circ q_Q=\widetilde f=\bar f\circ q_Q$. Since $q_Q$ is surjective by [F3], $g=\bar f$. [given, F1, F3, step 2.1] ∎

## Remarks

For a $k$-linear map $f$ satisfying $f(v)^2=Q(v)1_A$, the universal property is the commutative triangle below. The maps $i_Q$ and $f$ are $k$-linear; the dashed arrow is the unique unital $k$-algebra homomorphism $\bar f$ with $\bar f\circ i_Q=f$. The triangle is viewed on underlying vector spaces, so it does not assign an algebra structure to $V$.

```tikzcd
V \arrow[r, "i_Q"] \arrow[dr, "f"'] & \mathrm{Cl}(V,Q) \arrow[d, dashed, "\bar f"] \\
& A
```

The figure summarizes step 3.1; the proof above establishes both existence and uniqueness independently of the illustration.
