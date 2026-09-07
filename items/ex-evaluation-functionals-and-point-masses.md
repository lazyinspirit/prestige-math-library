---
id: ex-evaluation-functionals-and-point-masses
kind: example
title: "Evaluation functionals and point masses"
status: draft
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Example 1.37 and Example 4.4, pp.37,173"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "The constant function one norms evaluation. Check Dirac regularity directly and integral f d delta_t=f(t), then invoke the published RMK uniqueness. Evaluate pullback at t."
---

## Example

Let $K$ be a nonempty compact Hausdorff space and $t\in K$. On $C(K;\mathbb C)$ with supremum norm, $\delta_t(f)=f(t)$ has norm one and is represented by the regular point mass at $t$. If $\phi:K\to K$ is a homeomorphism and $Pf=f\circ\phi$, then $P^*\delta_t=\delta_{\phi(t)}$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]], with its stated hypotheses: For an LCH space $X$, every bounded complex linear functional $L$ on $C_0(X;\mathbb C)$ has a unique representation $L(f)=\int_X f\,d\mu$ by a finite regular complex Borel measure $\mu$. Conversely each such $\mu$ defines a bounded functional and $\|L\|=|\mu|(X)$.

## Verification

1.1 Evaluation is complex-linear and $|f(t)|\le\|f\|_\infty$. The continuous constant function $1$ has norm one since $K\ne\varnothing$, and $\delta_t(1)=1$, so $\|\delta_t\|=1$. [given]

1.2 Define the Borel measure $\mu_t(A)=1$ when $t\in A$ and $0$ otherwise. In a disjoint countable union at most one member contains $t$, proving countable additivity. Its mass is one. For inner regularity, a set containing $t$ contains the compact singleton $\{t\}$, and a set not containing $t$ has measure zero. For outer regularity, a set missing $t$ lies in the open set $K\setminus\{t\}$ of measure zero; for a set containing $t$, every open superset has measure one. [given]

2.1 Integration of a simple Borel function against $\mu_t$ equals its value at $t$. Uniform simple approximation of a bounded complex Borel function extends this identity, since the integral error is bounded by the uniform error times $\mu_t(K)=1$. In particular $\int f\,d\mu_t=f(t)$ for $f\in C(K;\mathbb C)$. Compact Hausdorff $K$ is LCH and $C_0(K)=C(K)$, so RMK uniqueness identifies this regular point mass as the representing measure. [F2, step 1.1, step 1.2]

3.1 Composition with a homeomorphism preserves continuity and the supremum norm. For every $f$, $(P^*\delta_t)(f)=\delta_t(f\circ\phi)=f(\phi(t))=\delta_{\phi(t)}(f)$, which proves the transpose identity. [F1, step 1.1] ∎
