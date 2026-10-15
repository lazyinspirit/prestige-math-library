---
id: thm-tdmath-dominated-convergence
kind: theorem
title: "Dominated convergence for the measure integral"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: ["thm-complex-plane-is-complete","thm-arithmetic-and-lattice-operations-preserve-measurability","thm-composition-with-borel-functions-preserves-measurability","thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable","def-tdmath-measure-integral","lem-tdmath-fatou","thm-tdmath-monotone-convergence"]
justified_by: []
dependency_roles: {"thm-complex-plane-is-complete":"mathematical-premise","thm-arithmetic-and-lattice-operations-preserve-measurability":"mathematical-premise","thm-composition-with-borel-functions-preserves-measurability":"mathematical-premise","thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable":"mathematical-premise","def-tdmath-measure-integral":"mathematical-premise","lem-tdmath-fatou":"mathematical-premise","thm-tdmath-monotone-convergence":"mathematical-premise"}
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Terence Tao, 245A Notes 3: Integration on Abstract Measure Spaces and the Convergence Theorems, full author-hosted lecture text"
      url: "https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/"
      locator: "Complete HTML lecture text read; abstract measure spaces, integration, Fatou, monotone convergence, dominated convergence, and the L1 convergence argument."
    - title: "MIT OpenCourseWare 18.102 Spring 2021, complete lecture notes (Lecture 12 on Lebesgue Integration and Dominated Convergence)"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
      locator: "Complete full lecture-notes PDF retrieved and read; Lecture 12, definitions 120–121, Propositions 122–123, and Theorem 125 with its Fatou-based dominated-convergence proof, lecture pp.59–62."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $(X,\Sigma,\mu)$ be a measure space and let $f_n:X\to\mathbb C$ be measurable with $f_n\to f$ almost everywhere. Suppose $g\ge0$ is measurable and $\int g\,d\mu<\infty$, and $|f_n|\le g$ almost everywhere for every $n$. Let $f_0(x)$ be the finite complex pointwise limit of $(f_n(x))$ where it exists, and $0$ elsewhere. Then $f_0$ is measurable, equals $f$ almost everywhere, is integrable, and $\int f_n\,d\mu\to\int f_0\,d\mu$ and $\int|f_n-f_0|\,d\mu\to0$. If the specified $f$ is measurable, these same conclusions hold with $f$ in place of $f_0$. In particular this is automatic when $\mu$ is complete. On a noncomplete measure space an arbitrary almost-everywhere representative need not be measurable, so no integral of such a nonmeasurable $f$ is asserted.

## Facts & Assumptions

**Given:** As stated in the item.

[F1] [[def-tdmath-measure-integral]]: integrability, signed/complex integrals, and the reference-measure convention are as defined there.

[F2] [[lem-tdmath-fatou]]: for nonnegative measurable functions, the integral of the pointwise liminf is at most the liminf of the integrals.

[F3] [[thm-tdmath-monotone-convergence]]: the nonnegative integral is additive and positively homogeneous.

[F4] [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-composition-with-borel-functions-preserves-measurability]], and [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]: component arithmetic, measurable compositions and pointwise real limits preserve measurability; [[thm-complex-plane-is-complete]] identifies complex Cauchy sequences with finite complex limits.

[A1] The sequence and envelope are measurable, converge almost everywhere, and are dominated almost everywhere by the nonnegative integrable function $g$.

## Proof

**Given:** A measure space, almost-everywhere convergence, and an integrable dominating function $g\ge0$.

1.1 The set on which $(f_n)$ is Cauchy is measurable: write it as the countable intersection/union/intersection of sets $\{|f_n-f_k|<1/m\}$ using [F4]. On this set the finite real and imaginary limits exist; their measurable limit functions, set to zero on its complement, define the measurable $f_0$. The assumed almost-everywhere convergence gives $f_0=f$ outside a measurable null set. Enlarge that set by the countably many measurable domination exceptions to a measurable null set $N$. Set $f_n$ and $f_0$ to zero on $N$, which preserves their measurability. A nonnegative measurable function supported on $N$ has integral zero by the simple-minorant definition, so these changes preserve every defined integral. Convergence and domination now hold everywhere, and $|f_0|\le g$ proves integrability. This does not redefine the potentially nonmeasurable $f$ and then claim it was measurable. [F1, F4, A1, algebra]

2.1 First take all functions real. The nonnegative functions $f_n+g$ converge pointwise to $f_0+g$. Fatou gives $\int(f_0+g)\le\liminf_n\int(f_n+g)=\int g+\liminf_n\int f_n$, so $\int f_0\le\liminf_n\int f_n$. Applying Fatou to $g-f_n\ge0$ gives $\int(g-f_0)\le\liminf_n\int(g-f_n)=\int g-\limsup_n\int f_n$, hence $\limsup_n\int f_n\le\int f_0$. Additivity of integrable signed integrals follows by writing each as a difference of its positive and negative parts and using [F3]. The inequalities imply convergence of integrals. [F1, F2, F3, step 1.1]

3.1 For complex $f_n$, apply step 2.1 separately to their real and imaginary parts, each dominated by $g$; their integral limits combine to $\int f_0$. To prove $L^1$ convergence, apply Fatou to the nonnegative functions $2g-|f_n-f_0|$, which converge to $2g$; it gives $2\int g\le2\int g-\limsup_n\int|f_n-f_0|$, so the latter limsup is zero. Therefore $\int|f_n-f_0|\to0$ as claimed. [F1, F2, F3, step 2.1] ∎


## Remarks

If $f$ is measurable and equals $f_0$ outside a measurable null set, their measurable difference has zero integral and zero $L^1$ norm; hence the same limits hold for $f$. If the measure is complete, every subset of the exceptional null set is measurable, so every almost-everywhere representative is measurable. The completeness qualification is necessary: on a noncomplete space, a nonmeasurable subset $A$ of a measurable null set gives $f=\mathbf1_A$ and $f_n=g=0$. All stated almost-everywhere convergence and domination conditions hold, but $f$ has no measurable integral; the canonical representative is $f_0=0$.
