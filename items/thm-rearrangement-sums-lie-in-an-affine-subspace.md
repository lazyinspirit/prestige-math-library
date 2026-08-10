---
id: thm-rearrangement-sums-lie-in-an-affine-subspace
kind: theorem
title: "The set of rearrangement sums of a convergent series in $\\mathbb{R}^n$ is a nonempty subset of the affine subspace $s + \\Gamma^{\\perp}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-space-of-summing-directions, def-series-of-vectors-and-rearrangement, thm-absolute-convergence-in-rn, thm-componentwise-convergence-and-completeness, thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, thm-dirichlet-rearrangement, thm-riemann-series-theorem, cor-unconditional-iff-absolute-in-r, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, def-series, lem-finite-sum-laws, def-finite-sum, lem-standard-basis-of-f-n, def-linear-subspace, def-injection-surjection-bijection, def-metric-convergence, def-real-limit, lem-metric-limits-unique, thm-induction-principle, def-isometry-and-metric-embedding, lem-of-abs-value, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $(x_k)$ be a sequence in
$\mathbb{R}^{n}$ whose series converges
([[def-series-of-vectors-and-rearrangement]]) and write
$s := \sum_{k=0}^{\infty}x_k$. Let $\Gamma$ and $\Gamma^{\perp}$ be as in
[[def-the-space-of-summing-directions]]. Then:

1. **Nonemptiness.** $s \in \mathcal{S}(x)$, so $\mathcal{S}(x) \ne \varnothing$.
2. **Containment.**
   $$\mathcal{S}(x) \;\subseteq\; s + \Gamma^{\perp},$$
   the affine subspace through $s$ with direction $\Gamma^{\perp}$
   ([[def-the-space-of-summing-directions]]). Equivalently, $t - s \in \Gamma^{\perp}$
   for every rearrangement sum $t$.
3. **The absolutely convergent case.** If $\sum x_k$ converges absolutely then
   $\Gamma = \mathbb{R}^{n}$, $\Gamma^{\perp} = \{0\}$, the affine subspace is
   the single point $\{s\}$, and $\mathcal{S}(x) = \{s\}$.
4. **The one-dimensional conditionally convergent case.** Let $n = 1$ and
   identify $\mathbb{R}^{1}$ with $\mathbb{R}$ as in
   [[def-series-of-vectors-and-rearrangement]]. If $\sum x_k$ converges
   conditionally ([[def-absolute-and-conditional-convergence]]) then
   $\Gamma = \{0\}$, $\Gamma^{\perp} = \mathbb{R}^{1}$, and the containment of
   clause 2 is an **equality**, $\mathcal{S}(x) = s + \Gamma^{\perp} = \mathbb{R}^{1}$,
   by the published [[thm-riemann-series-theorem]].

**What this theorem does not say, stated here and repeated in the Remarks.** It
proves a **containment** and nothing more. Whether $\mathcal{S}(x)$ is all of
$s + \Gamma^{\perp}$ when $n \ge 2$ is **not settled anywhere on this page**, and
no item on this page asserts anything about it in either direction. Clause 4 is
the case $n = 1$, where the answer is supplied by a published theorem about the
real line; it is not evidence for any statement in higher dimensions.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $(x_k)$ in $\mathbb{R}^{n}$ with $\sum x_k$ convergent of sum $s$; a bijection $\sigma$ of $\mathbb{N}$; a vector $a \in \Gamma$; the partial sums $s_N = \sum_{k<N}x_k$ and $s^{\sigma}_N = \sum_{k<N}x_{\sigma(k)}$.

[L1] Series of vectors, absolute convergence, rearrangement, $\mathcal{S}(x)$, and the identification of $\mathbb{R}^{1}$ with $\mathbb{R}$ ([[def-series-of-vectors-and-rearrangement]], [[def-rearrangement-and-unconditional-convergence]], [[def-injection-surjection-bijection]], [[def-isometry-and-metric-embedding]]).

[L2] $\Gamma$ and $\Gamma^{\perp}$ are linear subspaces; $a \in \Gamma$ means $\sum_k|\langle a,x_k\rangle|$ converges; $\Gamma = \mathbb{R}^{n}$ exactly when $\sum x_k$ converges absolutely; and $s + W$ denotes the coset of a linear subspace $W$ ([[def-the-space-of-summing-directions]], [[def-linear-subspace]]).

[L3] The inner product is bilinear and symmetric, $\langle y,y\rangle = \lVert y\rVert_2^{2}$, positive definiteness gives $\langle y,y\rangle = 0$ only for $y = 0$, and Cauchy-Schwarz gives $|\langle a,y\rangle| \le \lVert a\rVert_2\lVert y\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]]).

[L4] Laws of finite sums and the induction principle ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]); finite sums in $\mathbb{R}^{n}$ are pointwise ([[lem-standard-basis-of-f-n]] clause 1).

[L5] Dirichlet's rearrangement theorem: an absolutely convergent real series has, for every bijection $\sigma$ of $\mathbb{N}$, a rearrangement converging to the same sum ([[thm-dirichlet-rearrangement]], [[def-absolute-and-conditional-convergence]]).

[L6] The Riemann series theorem: a conditionally convergent real series has, for every $c \in \mathbb{R}$, a rearrangement converging to $c$ ([[thm-riemann-series-theorem]] clause 1); and over $\mathbb{R}$ a convergent series is absolutely convergent or conditionally convergent and not both ([[cor-unconditional-iff-absolute-in-r]], [[def-absolute-and-conditional-convergence]]).

[L7] Convergence in $(\mathbb{R}^{n},d_2)$ and in $\mathbb{R}$, uniqueness of limits, and the componentwise criterion ([[def-metric-convergence]], [[def-real-limit]], [[lem-metric-limits-unique]], [[thm-componentwise-convergence-and-completeness]]).

[L8] An absolutely convergent series in $\mathbb{R}^{n}$ converges, every rearrangement converges to the same sum, and $\mathcal{S}(x)$ is then a single point ([[thm-absolute-convergence-in-rn]]).

[L9] Absolute value and order arithmetic: $|uv| = |u||v|$, $|u| \ge 0$, and $u>0$ gives $u^{-1}>0$ ([[lem-of-abs-value]], [[lem-of-inverse-positive]]).

## Proof

**Proof technique:** direct.

1.1 The identity map of $\mathbb{N}$ is a bijection and the rearrangement along it is the original series, so $s \in \mathcal{S}(x)$ and clause 1 holds. [L1]

1.2 For every $a \in \mathbb{R}^{n}$ and every finite list $u : p \to \mathbb{R}^{n}$, $\bigl\langle a, \sum_{j<p}u_j\bigr\rangle = \sum_{j<p}\langle a, u_j\rangle$: at $p=0$ both sides are $0$, and the successor step is additivity of the inner product in its second argument. [L3, L4]

1.3 If $u_N \to u$ in $(\mathbb{R}^{n},d_2)$ then $\langle a, u_N\rangle \to \langle a,u\rangle$ in $\mathbb{R}$, since $\bigl|\langle a,u_N\rangle - \langle a,u\rangle\bigr| = \bigl|\langle a, u_N-u\rangle\bigr| \le \lVert a\rVert_2\,\lVert u_N-u\rVert_2$, so a tolerance $\varepsilon/(\lVert a\rVert_2+1)$ on the right serves for $\varepsilon$ on the left. [L3, L7, L9]

1.4 Now let $n = 1$ and suppose $\sum x_k$ converges conditionally, so the real series $\sum_k (x_k)_0$ converges and $\sum_k|(x_k)_0|$ diverges. For $a \in \mathbb{R}^{1}$, $\langle a, x_k\rangle = a_0 (x_k)_0$ and $|\langle a,x_k\rangle| = |a_0|\,|(x_k)_0|$; if $a_0 \ne 0$ then convergence of $\sum_k |a_0||(x_k)_0|$ would give convergence of $\sum_k |(x_k)_0|$ after multiplying by the positive $1/|a_0|$, which is false, so $a \in \Gamma$ forces $a_0 = 0$; and $a = 0$ does lie in $\Gamma$. Hence $\Gamma = \{0\}$. [L1, L2, L9]

2.1 Let $t \in \mathcal{S}(x)$, say $s^{\sigma}_N \to t$ for a bijection $\sigma$, and let $a \in \Gamma$. By steps 1.2 and 1.3, $\langle a,t\rangle = \lim_N \langle a, s^{\sigma}_N\rangle = \lim_N \sum_{k<N}\langle a, x_{\sigma(k)}\rangle$, so the real series $\sum_k\langle a,x_{\sigma(k)}\rangle$ converges with sum $\langle a,t\rangle$. [step 1.2, step 1.3, L1, L7]

2.2 In the same way $\langle a, s\rangle = \lim_N\langle a, s_N\rangle = \lim_N\sum_{k<N}\langle a,x_k\rangle$, so $\sum_k\langle a,x_k\rangle$ converges with sum $\langle a,s\rangle$. [step 1.2, step 1.3, L7]

2.3 With $\Gamma = \{0\}$ the condition defining $\Gamma^{\perp}$ is $\langle 0,y\rangle = 0$, which holds for every $y$, so $\Gamma^{\perp} = \mathbb{R}^{1}$ and $s + \Gamma^{\perp} = \mathbb{R}^{1}$. [step 1.4, L2, L3]

3.1 The real sequence $k \mapsto \langle a, x_{\sigma(k)}\rangle$ is the rearrangement along $\sigma$ of the sequence $k \mapsto \langle a,x_k\rangle$, and the latter series converges absolutely because $a \in \Gamma$; so by Dirichlet's theorem the two series have the same sum. [step 2.1, step 2.2, L2, L5]

3.2 By the Riemann series theorem applied to the conditionally convergent real series $\sum_k (x_k)_0$, every real $c$ is the sum of some rearrangement of it; transporting along the identification of $\mathbb{R}$ with $\mathbb{R}^{1}$, every element of $\mathbb{R}^{1}$ lies in $\mathcal{S}(x)$. So $\mathcal{S}(x) = \mathbb{R}^{1} = s + \Gamma^{\perp}$, which with steps 1.4 and 2.3 is clause 4. [step 1.4, step 2.3, L1, L6, L7]

4.1 Combining steps 2.1, 2.2 and 3.1 gives $\langle a,t\rangle = \langle a,s\rangle$, hence $\langle a, t-s\rangle = 0$ by bilinearity. [step 2.1, step 2.2, step 3.1, L3]

5.1 Since $a \in \Gamma$ was arbitrary, $t-s \in \Gamma^{\perp}$, that is $t \in s + \Gamma^{\perp}$; as $t \in \mathcal{S}(x)$ was arbitrary, clause 2 holds. [step 4.1, L2]

6.1 Suppose $\sum x_k$ converges absolutely. Then $\Gamma = \mathbb{R}^{n}$, so any $y \in \Gamma^{\perp}$ satisfies $\langle y,y\rangle = 0$ and hence $y = 0$; thus $\Gamma^{\perp} = \{0\}$ and $s + \Gamma^{\perp} = \{s\}$. Moreover $\mathcal{S}(x) = \{s\}$ by [L8], so clause 3 holds and the containment of clause 2 is an equality in this case. [step 5.1, L2, L3, L8]

7.1 Clauses 1, 2, 3 and 4 are steps 1.1, 5.1, 6.1 and 3.2. [step 1.1, step 5.1, step 6.1, step 3.2] ∎

## Remarks

- **This theorem proves containment only, and the reverse inclusion is not proved, assumed, or asserted anywhere on this page.** For $n \ge 2$ the question whether every point of $s + \Gamma^{\perp}$ is a rearrangement sum is **open as far as this library is concerned**. It is not open in the mathematical literature, and this page deliberately states nothing about what the literature says, exactly as the published [[rem-rearrangement-in-higher-dimensions]] declines to. What is missing here is machinery, not effort: every route known to the author of this page passes through the orthogonal decomposition of a finite-dimensional inner product space and through a separation argument for convex sets, and neither exists in this library — the first belongs to a page earlier in the plan order that is not yet built, and the second to no planned page at all. See [[rem-rn-conventions-and-scope]].

- **The title claims exactly clause 2 and clause 1, and no more.** A title asserting that $\mathcal{S}(x)$ **is** the affine subspace would assert the reverse inclusion, which is not proved here.

- **Clause 4 is the published one-dimensional dichotomy seen from this page.** Over $\mathbb{R}$ a convergent series is either absolutely convergent, and then $\Gamma$ is everything and $\mathcal{S}$ is a point (clause 3), or conditionally convergent, and then $\Gamma$ is $\{0\}$ and $\mathcal{S}$ is the whole line (clause 4). Both extremes are consistent with clause 2, and both are equalities; that is a fact about dimension $1$, where a linear subspace of $\mathbb{R}^{1}$ is $\{0\}$ or everything and there is no room in between.

- **What the containment already rules out.** Even without the reverse inclusion, clause 2 forbids a rearrangement sum from leaving the affine subspace. That is enough to refute the naive $\mathbb{R}^{n}$ analogue of the Riemann series theorem, and the companion page does so with an elementary witness, using clause 2 and nothing further.
