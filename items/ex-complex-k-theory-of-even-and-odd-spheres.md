---
id: ex-complex-k-theory-of-even-and-odd-spheres
kind: example
title: Complex K-theory of even and odd spheres
status: draft
origin: pipeline
deps: [cor-complex-k-theory-of-spheres, ex-k-theory-of-a-point-and-the-empty-space, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §2.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Bott periodicity and sphere groups, printed pp.54–58"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "KU coefficients and suspension grading, printed pp.205–208"
---

## Example

Assume AC. For $n\geq1$,

$$K^0(S^{2n})\cong\mathbb Z\oplus\mathbb Z,\qquad K^0(S^{2n+1})\cong\mathbb Z,$$

and the corresponding reduced groups are $\mathbb Z$ and $0$. More generally,
for $n\geq0$ and $q\in\mathbb Z$,

$$\widetilde K^q(S^n)\cong\begin{cases}\mathbb Z,&q-n\text{ is even},\\0,&q-n\text{ is odd}.\end{cases}$$

## Facts & Assumptions

**Given:** integers $n\geq0$ and $q$, with $n\geq1$ for the two unreduced
degree-zero formulas, and AC.

[F1] The reduced sphere calculation, including its all-degree parity formula,
is [[cor-complex-k-theory-of-spheres]].

[F2] The coefficient groups are $K^{2k}(*)\cong\mathbb Z$ and
$K^{2k+1}(*)=0$ ([[ex-k-theory-of-a-point-and-the-empty-space]]).

[A1] AC is required by [F1] and by the periodic clause of [F2].

## Verification

**Proof technique:** direct use of the reduced calculation and the split rank map.

1.1 By [F1], $\widetilde K^0(S^{2n})\cong\mathbb Z$ and $\widetilde K^0(S^{2n+1})=0$ for every $n\geq1$. Since each such sphere is nonempty, connected, and based, restriction to the basepoint is split by pullback along the collapse $S^m\to *$. Hence $K^0(S^m)\cong K^0(*)\oplus\widetilde K^0(S^m)$. Substitution of [F2] gives the two displayed unreduced groups. [F1, F2, A1, algebra]

1.2 Suspending the coefficient calculation gives $\widetilde K^q(S^n)\cong K^{q-n}(*)$. By [F2], this group is $\mathbb Z$ precisely when $q-n$ is even and is zero precisely when $q-n$ is odd, proving both exhaustive parity cases. [F1, F2, A1]

2.1 At $n=0$, the based sphere $S^0$ is the disjoint union of the basepoint and one further point. Its reduced group is the difference between the two coefficient copies and hence is one copy of $K^q(*)$, agreeing with step 1.2. This is why the unreduced formulas were stated only for $n\geq1$. [F2, step 1.2] ∎
