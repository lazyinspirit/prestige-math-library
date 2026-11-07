---
id: thm-khintchine-groshev-hausdorff-law-under-primitivity-constraints
kind: theorem
title: "Hausdorff Khintchine–Groshev law under primitivity constraints"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-hausdorff-gauge-measure-is-borel-regular
  - def-khintchine-groshev-matrix-approximation-set
  - def-partitioned-primitive-linear-form-condition
  - def-gcd-of-finite-integer-tuple
  - def-hausdorff-dimension-function-and-gauge-measure
  - thm-dani-laurent-nogueira-partitioned-khintchine-groshev-law
  - lem-q-block-primitivity-follows-from-a-disjoint-combined-partition
  - thm-general-hausdorff-transfer-for-distorted-inhomogeneous-linear-forms
  - thm-mass-transference-principle-for-systems-of-linear-forms
  - lem-affine-plane-tube-covering-by-small-balls
  - lem-linear-form-events-and-affine-plane-neighborhoods
  - lem-gauge-fixed-dilation-and-small-gauge-regimes
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, Theorem 8"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "Theorem 8 and its full transfer argument"
    - title: "Dani, Laurent, and Nogueira, Multi-dimensional metric approximation by primitive points, Theorem 1.1"
      url: "https://arxiv.org/pdf/1310.5535v2"
      locator: "Theorem 1.1 and complete proof in §§3–6"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$, let $\pi$ be a partition of $\{1,\ldots,n\}$ whose blocks each have at least $m+1$ indices, and let $\psi:\mathbb N\to[0,\infty)$. Let $f,g$ be dimension functions with $g(r)=r^{-m(n-1)}f(r)$, with $r^{-nm}f(r)$ monotonic, and suppose $q^{n+m-1}g(\psi(q)/q)$ is nonincreasing in $q$. Let $A^\pi_{n,m}(\psi)$ consist of the matrices satisfying $\|qX+p\|_\infty<\psi(\|q\|_\infty)$ for infinitely many pairs $(q,p)$ that are $\pi$-primitive, meaning that for every block $J\in\pi$ the tuple $(q_i)_{i\in J}$ followed by $(p_1,\ldots,p_m)$ has greatest common divisor $1$. Then

$$\mathcal H^f(A^\pi_{n,m}(\psi))=0\quad\text{if }\sum_q q^{n+m-1}g\!\left(\frac{\psi(q)}q\right)<\infty,$$

and

$$\mathcal H^f(A^\pi_{n,m}(\psi))=\mathcal H^f([0,1]^{n\times m})\quad\text{if }\sum_q q^{n+m-1}g\!\left(\frac{\psi(q)}q\right)=\infty.$$

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, Theorem 8](https://arxiv.org/pdf/1703.10015v2)

[Dani, Laurent, and Nogueira, *Multi-dimensional metric approximation by primitive points*, Theorem 1.1](https://arxiv.org/pdf/1310.5535v2)

## Facts & Assumptions

**Given:** Countable Choice, the transposed matrix convention, the partitioned primitivity definition, the block-size bound, and the stated summand monotonicity.

[A1] Countable Choice is assumed by the Lebesgue supplier used in the divergence branch. ([[def-countable-choice]])

[F1] A valid disjoint combined-coordinate partition $\widehat\pi$ has primitive tuples contained in the Statement's q-only/all-p predicate. [[lem-q-block-primitivity-follows-from-a-disjoint-combined-partition]]

[F2] Tuple gcd has the ordinary common-divisor meaning. [[def-gcd-of-finite-integer-tuple]]

[F6] The homogeneous DNL theorem gives full measure for $\widehat\pi$-primitive transformed events when $q^{n-1}\theta(q)^m$ is non-increasing and its sum diverges. [[thm-dani-laurent-nogueira-partitioned-khintchine-groshev-law]]

[F7] The general distorted transfer permits a pair-dependent function, including zero on forbidden primitive pairs, and requires unbounded denominator norm. [[thm-general-hausdorff-transfer-for-distorted-inhomogeneous-linear-forms]]

[F3] A homogeneous linear-form event lies in a tube about its affine solution plane with radius comparable to $\psi(q)/q$. ([[lem-linear-form-events-and-affine-plane-neighborhoods]])

[F4] The tube-cover and fixed-dilation estimates bound the convergence cost by the displayed summand, outside the zero-gauge case where ambient measure already vanishes. ([[lem-affine-plane-tube-covering-by-small-balls]], [[lem-gauge-fixed-dilation-and-small-gauge-regimes]])

[F5] Plane mass transfer is locally proved and available, without imposing any slice restriction. [[thm-mass-transference-principle-for-systems-of-linear-forms]]

## Proof

1.1 If the series converges, then $r_q:=\psi(q)/q\to0$: otherwise some $\varepsilon>0$ occurs infinitely often and the corresponding terms are at least $q^{n+m-1}g(\varepsilon)$. For each shell $\|q\|_\infty=q$, there are $O(q^{n-1})$ rows and, when $r_q<1$, $O(q^m)$ relevant offsets. [given, algebra]

1.2 The decreasing summand $q^{n+m-1}g(\psi(q)/q)$ is bounded by its first term. Since $n+m-1>0$ and $g(\epsilon)>0$ for every $\epsilon>0$, this forces $\psi(q)/q\to0$. Put $\theta(q)=qg(\psi(q)/q)^{1/m}$. Its DNL summand is exactly $q^{n-1}\theta(q)^m=q^{n+m-1}g(\psi(q)/q)$, which is decreasing and divergent by hypothesis. The transformed function is positive at every shell: a zero summand would force the decreasing nonnegative tail to vanish, contradicting divergence. Apply [F6] to the combined partition from [F1] with input $\theta/2$. Multiplying by this constant preserves summand monotonicity and divergence, and its non-strict inequalities are strictly below $\theta$. Its primitive tuples satisfy every approved appended-p gcd condition, so the transformed limsup for that approved predicate is full. Only inclusion is required. [given, A1, F1, F6, algebra]

2.1 By [F3]–[F4], the events in shell $q$ have total covering cost $O(q^{n+m-1}g(r_q))$. The set in the Statement is a subset of the unrestricted approximation events, so the convergent tails have arbitrarily small cost. This proves the convergence branch without using primitivity. [F3, F4, step 1.1, algebra]

3.1 Define $\Psi(p,q)=\psi(\|q\|_\infty)$ on the approved primitive pairs and $0$ otherwise. This has the uniform sublinear tail from step 1.2. Its transformed function is $\theta(\|q\|_\infty)$ on exactly those pairs and $0$ otherwise. With $y=0$ and $\Phi=I_m$, step 1.2 is the full-measure premise of [F7]. That theorem gives the desired full gauge-measure conclusion. Bounded denominators have only finitely many relevant integer offsets here, so its unbounded-denominator definition agrees with the approved infinitely-many-pairs definition. Step 2.1 proves convergence independently of primitivity, and these two branches prove the complete Statement. [step 1.2, F7, F1, algebra] ∎
