---
id: ex-spectrum-of-the-unilateral-shift
kind: example
title: Spectrum of the unilateral shift
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-point-continuous-and-residual-spectrum, def-approximate-point-and-compression-spectrum, ex-bounded-operators-form-a-noncommutative-banach-algebra, rem-ell-p-is-l-p-of-counting-measure, def-counting-measure, prop-counting-measure-is-a-measure, lem-complex-lp-completeness-density-and-inner-product, def-countable-choice, def-bounded-below-operator, def-spectrum-and-resolvent-set-in-a-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Example 5.16, printed p. 220"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Assume Countable Choice ([[def-countable-choice]]). Let
$\ell^2 = \ell^2(\mathbb N_0)$ be identified with $L^2$ of the counting
measure on $\mathbb N_0 = \{0,1,2,\dots\}$
([[rem-ell-p-is-l-p-of-counting-measure]],
[[def-counting-measure]], [[prop-counting-measure-is-a-measure]],
[[lem-complex-lp-completeness-density-and-inner-product]]), with coordinate
vectors $e_n$, and let $S$ be the **unilateral shift**

$$Se_n := e_{n+1}, \qquad \text{extended linearly and by continuity to all of } \ell^2 .$$

Then $S \in \mathcal B(\ell^2)$ is an isometry, and

$$\sigma(S) = \overline{D}, \quad \sigma_p(S) = \varnothing, \quad \sigma_r(S) = \sigma_{cp}(S) = D, \quad \sigma_c(S) = \sigma_{ap}(S) = \mathbb T ,$$

where $D = \{|z|<1\}$, $\overline D$ its closure and $\mathbb T$ the unit circle
(scalar spectrum in [[def-spectrum-and-resolvent-set-in-a-banach-algebra]],
point/continuous/residual spectrum in
[[def-point-continuous-and-residual-spectrum]], approximate point and
compression spectrum in
[[def-approximate-point-and-compression-spectrum]], all inside
$\mathcal B(\ell^2)$ of
[[ex-bounded-operators-form-a-noncommutative-banach-algebra]]).

## Facts & Assumptions

**Given:** Countable Choice, the Hilbert space $\ell^2 = \ell^2(\mathbb N_0)$ with orthonormal coordinate vectors $e_n$, and the isometric coordinate shift $S e_n = e_{n+1}$.

[L1] Elements of $\ell^2$ are determined by their coordinates, almost-everywhere equality for the counting measure is pointwise equality, and $\|x\|_2^2 = \sum_n|x_n|^2$; the inner product is $\langle x,y\rangle = \sum_nx_n\overline{y_n}$ ([[rem-ell-p-is-l-p-of-counting-measure]], [[def-counting-measure]], [[prop-counting-measure-is-a-measure]], [[lem-complex-lp-completeness-density-and-inner-product]]).

[L2] $S$ is bounded with $\|S\| = 1$ and $\|Sx\| = \|x\|$ for all $x$, so $\|(S-\lambda)x\| \ge \|Sx\| - |\lambda|\,\|x\| = (1-|\lambda|)\|x\|$ for $|\lambda| < 1$; an operator that is not bounded below is not invertible ([[def-bounded-below-operator]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[ex-bounded-operators-form-a-noncommutative-banach-algebra]]).

[L3] $\lambda \in \sigma_p(S)$ means $S-\lambda$ is not injective; $\lambda \in \sigma_c(S)$ means injective with dense non-surjective range; $\lambda \in \sigma_r(S)$ means injective with non-dense range; $\lambda \in \sigma_{ap}(S)$ means $S-\lambda$ is not bounded below; $\lambda \in \sigma_{cp}(S)$ means $S-\lambda$ has non-dense range; and $\sigma(S)$ is the set of non-invertible $S-\lambda$ ([[def-point-continuous-and-residual-spectrum]], [[def-approximate-point-and-compression-spectrum]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Shift identities: $(Sx)_n = x_{n-1}$ for $n \ge 1$ and $(Sx)_0 = 0$, so $\|Sx\| = \|x\|$ and $\|S\| = 1$; moreover $S-\lambda$ is injective for every $\lambda$: from $(S-\lambda)x = 0$ the recursion $x_{n-1} = \lambda x_n$ gives $x = 0$ for $\lambda \ne 0$ and $Sx = 0$ gives $x = 0$ for $\lambda = 0$, since $S$ is injective. [L1, L2, algebra]

1.2 Spectral containment: if $|\lambda| > 1$ then $\|S/\lambda\| < 1$ and $S - \lambda = -\lambda(1 - S/\lambda)$ is invertible by the Neumann series; if $|\lambda| < 1$ then $\|(S-\lambda)x\| \ge (1-|\lambda|)\|x\|$ by [L2], so $S-\lambda$ is bounded below. [L2, algebra]

2.1 Non-density in the open disc: for $|\lambda| < 1$ the vector $c := (\overline\lambda^{\,n})_{n\ge0}$ lies in $\ell^2$ and annihilates the range: for every $x \in \ell^2$, $\langle (S-\lambda)x, c\rangle = \sum_n x_n(\overline{c_{n+1}} - \lambda\overline{c_n}) = \sum_n x_n(\lambda^{n+1} - \lambda\lambda^n) = 0$. So $\operatorname{ran}(S-\lambda)$ is not dense for $|\lambda| < 1$, and $\sigma_{cp}(S) \supseteq D$. [step 1.1, L1, L3, algebra]

2.2 Approximate eigenvectors on the circle: for $|\lambda| = 1$ and $N \ge 1$ put $v_N := N^{-1/2}\sum_{k<N}\lambda^{-k}e_k$, a unit vector; then $Sv_N = \lambda v_N + N^{-1/2}\lambda^{-(N-1)}e_N$, so $\|(S-\lambda)v_N\| = N^{-1/2} \to 0$ and $S-\lambda$ is not bounded below. [step 1.1, L2, L3, algebra]

3.1 Density on the closed disc: if $c \perp \operatorname{ran}(S-\lambda)$ then the same computation gives $c_{n+1} = \overline\lambda c_n$ for all $n$, so $|c_n|$ is constant; the only such vector in $\ell^2$ is $c = 0$; hence the range is dense whenever $|\lambda| \le 1$. [step 2.1, L1, algebra]

3.2 Point spectrum empty and residual spectrum: injectivity is [step 1.1], so $\sigma_p(S) = \varnothing$; for $|\lambda|<1$ the range is non-dense by [step 2.1], so $\lambda \in \sigma_r(S)$ and also $\lambda \in \sigma_{cp}(S)$; for $|\lambda|>1$ the operator is invertible by [step 1.2], so those points are outside every spectral set. [step 1.1, step 1.2, step 2.1, L3]

4.1 Combining: $\sigma(S) = \overline D$ because $|\lambda|>1$ gives invertibility [step 1.2] and every $|\lambda| \le 1$ lies in $\sigma_c(S)$ or $\sigma_r(S)$ by [step 3.2] and [step 2.2]; $\sigma_{ap}(S) = \mathbb T$ by [step 1.2] (bounded below inside the disc), [step 2.2] (on the circle) and [step 1.2] again (invertible, hence bounded below, outside); $\sigma_c(S) = \mathbb T$ because those points are injective with dense range [step 1.1, step 3.1] and non-surjective (else invertible); $\sigma_r(S) = \sigma_{cp}(S) = D$ by [step 2.1], [step 3.1] and [step 3.2]. [step 1.2, step 2.1, step 3.1, step 3.2, step 2.2, L3] ∎
