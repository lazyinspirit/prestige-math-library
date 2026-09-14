---
id: thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory
kind: theorem
title: Complex K-theory is a two-periodic generalized cohomology theory
status: published
origin: pipeline
deps: [prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant, thm-reduced-k-theory-exact-sequence-of-a-cofibration, def-external-product-in-complex-k-theory, def-negative-degree-complex-k-groups, thm-complex-bott-periodicity, cor-complex-k-theory-of-spheres, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §§2.1–2.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Exactness, products, grading, and coefficients, printed pp.51–58"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "The KU prespectrum and multiplicative cohomology theory, printed pp.205–208"
---

## Statement

Assume AC. On finite CW pairs, the groups $K^q$ form a contravariant
two-periodic multiplicative generalized cohomology theory: homotopic maps
induce equal maps, cofiber sequences give natural long exact sequences,
suspension isomorphisms hold, and finite wedges map to direct sums. Its
coefficients are

$$K^{2k}(*)\cong\mathbb Z,\qquad K^{2k+1}(*)=0$$

for every $k\in\mathbb Z$.

## Facts & Assumptions

**Given:** AC and finite based CW complexes and pairs.

[F1] $K^0$ is contravariantly functorial and homotopy invariant
([[prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant]]).

[F2] Every reduced cofibration gives a natural exact sequence at all iterated
mapping-cone stages
([[thm-reduced-k-theory-exact-sequence-of-a-cofibration]]).

[F3] Negative absolute, reduced, and relative groups are defined by iterated
suspension ([[def-negative-degree-complex-k-groups]]).

[F4] Bott multiplication extends these groups naturally and uniquely to all
integer degrees with period two ([[thm-complex-bott-periodicity]]).

[F5] Reduced external product descends to smash products
([[def-external-product-in-complex-k-theory]]).

[F6] The reduced sphere groups have the even/odd parity calculation
([[cor-complex-k-theory-of-spheres]]).

[A1] AC is propagated from [F1], [F2], [F4], [F5], and [F6], including their
bundle-homotopy, exactness, and reduced-product uses.

## Proof

**Proof technique:** direct.

1.1 For $q\leq0$, functoriality and homotopy invariance follow by applying [F1] to the suspended maps in [F3]. For arbitrary $q$, transport these maps through the natural Bott isomorphisms [F4]. Identity and composition are preserved by conjugating with natural isomorphisms, and homotopic maps remain equal. [F1, F3, F4, A1]

2.1 Apply [F2] after each suspension in [F3]. This gives the natural long exact cofiber sequence in every nonpositive degree, with the connecting map induced by the next mapping-cone arrow. Transport through [F4] gives the long exact sequence for every integer degree. Taking the cofiber of $X\to CX$ identifies its quotient with $\Sigma X$ and yields the suspension isomorphism, with the reflection signs already fixed in [F2]. [F2, F3, F4, A1, step 1.1]

2.2 For a finite wedge $W=X_1\vee\cdots\vee X_r$, restriction gives $\widetilde K^0(W)\to\bigoplus_i\widetilde K^0(X_i)$. Let $p_i:W\to X_i$ collapse the other summands. For reduced classes $a_i$, the sum $\sum_i p_i^*a_i$ restricts to $a_i$ on $X_i$, because every other $p_j$ is constant there and reduced classes vanish at the basepoint. This is a two-sided inverse. Suspending and then applying [F4] proves the finite-wedge axiom in every degree; $r=0$ gives the zero group and $r=1$ the identity. [F1, F3, F4, step 1.1, algebra]

3.1 For based reduced groups and $i,j\geq0$, apply [F5] to $\Sigma^iX$ and $\Sigma^jY$ and use $\Sigma^iX\wedge\Sigma^jY\cong\Sigma^{i+j}(X\wedge Y)$. For absolute groups, apply the same construction to $\Sigma^iX_+$ and $\Sigma^jY_+$; the canonical homeomorphism $X_+\wedge Y_+\cong(X\times Y)_+$ gives $$K^{-i}(X)\otimes K^{-j}(Y)\longrightarrow K^{-(i+j)}(X\times Y).$$ Relative products are obtained by applying the reduced construction to quotient spaces. Diagonal pullback gives internal products. Tensor associativity, the trivial-line unit, and naturality hold at degree zero. The reduced products are uniquely characterized by their pullbacks to products, so these identities commute with suspension; [F4] transports them to all degrees. Thus the graded theory has natural associative unital external and internal products and is multiplicative. [F3, F4, F5, A1, step 1.1, step 2.1]

4.1 By [F3], $K^q(*)=\widetilde K^q(S^0)$. The parity calculation [F6] gives $\mathbb Z$ for even $q$ and zero for odd $q$, and [F4] identifies all even generators with Bott translates of $1$. Together, the preceding four steps verify the homotopy, exactness, suspension, finite-wedge, and multiplicative axioms, including zero and one-point cases. [F3, F4, F6, A1, step 1.1, step 2.1, step 2.2, step 3.1] ∎
