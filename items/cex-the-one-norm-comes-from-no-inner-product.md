---
id: cex-the-one-norm-comes-from-no-inner-product
kind: counterexample
title: "$\\lVert\\cdot\\rVert_1$ on $\\mathbb{R}^{2}$ violates the parallelogram law, so no symmetric bilinear form induces it"
status: draft
origin: session
deps: [thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, lem-standard-basis-of-f-n, def-integer-power, def-canonical-natural, lem-of-naturals-positive, thm-of-square-roots, def-abs-value, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Parallelogram law (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parallelogram_law"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every norm on $\mathbb{R}^{2}$ arises from a symmetric
bilinear form, that is, for every norm $N$ there is a function
$B : \mathbb{R}^{2}\times\mathbb{R}^{2} \to \mathbb{R}$ that is symmetric and
additive and homogeneous in each argument, with $N(x) = \sqrt{B(x,x)}$ for every
$x$.

The witness is $N := \lVert\cdot\rVert_1$ on $\mathbb{R}^{2}$
([[def-p-norms-on-rn]]), and the obstruction is the parallelogram law, which
every such $N$ satisfies ([[thm-cauchy-schwarz-and-the-euclidean-norm]] clause 3
is the instance for the Euclidean form, and the general computation is two lines
of bilinearity, done below) and which $\lVert\cdot\rVert_1$ fails at
$x = e_0$, $y = e_1$.

**What is and is not claimed.** What is refuted is the displayed claim, whose
hypothesis is a symmetric bilinear form on $\mathbb{R}^{2}$ written out in full.
The general converse — that a norm **satisfying** the parallelogram law is
induced by an inner product, the Jordan-von Neumann theorem — is **not proved
here and is not used here**; nor is any abstract theory of inner product spaces,
which belongs to a page of this library earlier in the plan order that is not yet
built ([[rem-rn-conventions-and-scope]]).

## Facts & Assumptions

**Given:** The space $\mathbb{R}^{2}$ with $\lVert x\rVert_1 = |x_0|+|x_1|$ ([[def-p-norms-on-rn]]) and the standard basis vectors $e_0 = (1,0)$, $e_1 = (0,1)$ ([[lem-standard-basis-of-f-n]]).

[A1] The refuted claim at $N = \lVert\cdot\rVert_1$: there is a symmetric $B : \mathbb{R}^{2}\times\mathbb{R}^{2}\to\mathbb{R}$, additive and homogeneous in each argument, with $\lVert x\rVert_1 = \sqrt{B(x,x)}$ for every $x \in \mathbb{R}^{2}$.

[L1] $\lVert\cdot\rVert_1$ is a norm on $\mathbb{R}^{2}$, and $\lVert x\rVert_1 = |x_0|+|x_1|$ ([[def-p-norms-on-rn]], [[def-norm-and-normed-space]]).

[L2] Absolute values: $|1| = |-1| = 1$ and $|0| = 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L3] Square roots: $\sqrt{c}$ is the unique nonnegative $s$ with $s^{2} = c$, so $\bigl(\sqrt{B(x,x)}\bigr)^{2} = B(x,x)$ whenever $B(x,x) \ge 0$ ([[thm-of-square-roots]], [[def-integer-power]]).

[L4] Canonical naturals are strictly increasing and positive and carry sums to sums and products to products, so $\iota(2)^{2} = \iota(4)$, $\iota(4)+\iota(4) = \iota(8)$, $2\cdot 1 + 2\cdot 1 = \iota(4)$ and $\iota(8) \ne \iota(4)$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L5] The Euclidean inner product is bilinear and symmetric and satisfies the parallelogram law for $\lVert\cdot\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]] clause 3).

[L6] All norms on $\mathbb{R}^{2}$ are equivalent ([[thm-all-norms-on-rn-are-equivalent]], [[def-equivalent-norms]]).

## Counterexample

**Proof technique:** direct.

1.1 Assume [A1] and write $Q(x) := B(x,x)$, so $\lVert x\rVert_1^{2} = Q(x)$ for every $x$. [A1, L3]

1.2 By symmetry and additivity and homogeneity in each argument, $Q(x+y) = B(x+y,x+y) = Q(x) + 2B(x,y) + Q(y)$ and $Q(x-y) = Q(x) - 2B(x,y) + Q(y)$, hence $Q(x+y)+Q(x-y) = 2Q(x)+2Q(y)$ for all $x,y$. [A1]

1.3 Computing: $\lVert (1,1)\rVert_1 = |1|+|1| = \iota(2)$ and $\lVert (1,-1)\rVert_1 = |1|+|-1| = \iota(2)$, while $\lVert e_0\rVert_1 = \lVert e_1\rVert_1 = 1$. [L1, L2]

2.1 Instantiate step 1.2 at $x = e_0$, $y = e_1$: the left side is $\lVert (1,1)\rVert_1^{2} + \lVert (1,-1)\rVert_1^{2}$ and the right side is $2\lVert e_0\rVert_1^{2} + 2\lVert e_1\rVert_1^{2}$. [step 1.1, step 1.2]

3.1 So the left side of step 2.1 is $\iota(2)^{2}+\iota(2)^{2} = \iota(4)+\iota(4) = \iota(8)$ and the right side is $2\cdot 1 + 2\cdot 1 = \iota(4)$, giving $\iota(8) = \iota(4)$, which contradicts the strict increase of $\iota$. [step 2.1, step 1.3, L4]

4.1 Hence [A1] is false: no symmetric bilinear form on $\mathbb{R}^{2}$ induces $\lVert\cdot\rVert_1$, and in particular $\lVert\cdot\rVert_1 \ne \lVert\cdot\rVert_2$. [step 1.1, step 3.1, A1]

5.1 The parallelogram law does hold for $\lVert\cdot\rVert_2$, which is induced by the Euclidean inner product, so the failure above is a genuine separation between the two norms and not a defect of the computation. [L5] ∎

## Remarks

- **Equivalence of norms says nothing about inner products.** By [[thm-all-norms-on-rn-are-equivalent]] the norms $\lVert\cdot\rVert_1$ and $\lVert\cdot\rVert_2$ on $\mathbb{R}^{2}$ **are** equivalent: they have the same open sets, the same convergent sequences and the same Cauchy sequences. What the computation above shows is that they are nevertheless different norms, and that one of them cannot be written as $\sqrt{B(\cdot,\cdot)}$ for any symmetric bilinear $B$. Equivalence is a metric statement; the parallelogram law is not.

- **Only one instance of the law is needed.** The claim is refuted by a single pair $(e_0,e_1)$, and the arithmetic is $\iota(8) \ne \iota(4)$. No general theory is required, which is exactly why this item can be stated on a page that has no abstract inner products.

- **The converse direction is a different theorem.** That a norm satisfying the parallelogram law **is** induced by an inner product is the Jordan-von Neumann theorem, proved by polarisation; [[thm-cauchy-schwarz-and-the-euclidean-norm]] clause 4 contains the polarisation identity for the Euclidean form, but the general theorem needs the abstract theory and is **not** asserted anywhere in this library.
