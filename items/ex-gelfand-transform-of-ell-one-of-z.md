---
id: ex-gelfand-transform-of-ell-one-of-z
kind: example
title: Gelfand transform of ell one of Z
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-characters-on-a-unital-banach-algebra-are-continuous, lem-finite-truncations-are-dense-in-c0-and-ell-one, thm-absolute-convergence-of-complex-series, thm-tonelli-for-nonnegative-double-series, thm-double-series-fubini, thm-complex-plane-is-complete, thm-compactness-under-continuous-maps, def-the-one-dimensional-torus-and-normalized-haar-integral, def-countable-choice, def-character-and-maximal-ideal-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1 and Chapter 4, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §3.1, printed pp. 54–67"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix explicit
bijections $\mathbb N \to \mathbb Z$ and $\mathbb N \to \mathbb Z^2$
and let $\ell^1(\mathbb Z)$ be the complex Banach space of absolutely summable
families $a = (a_n)_{n \in \mathbb Z}$ with
$\|a\|_1 = \sum_n |a_n|$, convolution

$$(a*b)_n := \sum_{j \in \mathbb Z} a_j\,b_{n-j},$$

and the elements $\delta_m$ with $(\delta_m)_n = 1$ if $n = m$ and $0$ otherwise.
Then $\ell^1(\mathbb Z)$ is a commutative unital complex Banach algebra with unit
$\delta_0$, its characters are exactly the maps

$$\chi_z(a) \;=\; \sum_{n \in \mathbb Z} a_n z^n \qquad (z \in \mathbb T := \{z \in \mathbb C : |z| = 1\}),$$

the assignment $z \mapsto \chi_z$ is a homeomorphism $\mathbb T \to
\Delta(\ell^1(\mathbb Z))$ whose inverse is $\chi \mapsto \chi(\delta_1)$, and
the Gelfand transform of $a$ is the absolutely convergent Laurent series
$\hat a(\chi_z) = \sum_n a_nz^n$.

## Facts & Assumptions

**Given:** Countable Choice, the bijections above, the space $\ell^1(\mathbb Z)$ with convolution, and the unit circle $\mathbb T$.

[L1] Characters of a nonzero unital complex Banach algebra are unital and continuous, with $|\chi(a)| \le \|a\|$, and the character space carries the pointwise-evaluation topology, so every map $\chi \mapsto \chi(a)$ is continuous ([[thm-characters-on-a-unital-banach-algebra-are-continuous]], [[def-character-and-maximal-ideal-space]]).

[L2] The finite truncations $P_Na$ converge to $a$ in $\ell^1$ norm ([[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[L3] Absolutely convergent complex series converge and may be rearranged; Tonelli's theorem for nonnegative double series and the real double-series Fubini theorem license the interchanges of summation used below ([[thm-absolute-convergence-of-complex-series]], [[thm-tonelli-for-nonnegative-double-series]], [[thm-double-series-fubini]]).

[L4] $\mathbb C$ is complete ([[thm-complex-plane-is-complete]]), and a continuous bijection from a compact space onto a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

[L5] Under Countable Choice, $\mathbb T$ is homeomorphic to $\mathbb R/\mathbb Z$ and is compact Hausdorff ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 Convolution is well defined and $\|a*b\|_1 \le \|a\|_1\|b\|_1$: for each $n$ the family $(|a_jb_{n-j}|)_j$ has finite sum at most $\|a\|_1\|b\|_1$ whenever $\sum_j|a_j| < \infty$ and $|b_{n-j}|$ is bounded along $j$; summing over $n$ and interchanging the order of summation by Tonelli's theorem [L3] gives $\sum_n\sum_j|a_jb_{n-j}| = \|a\|_1\|b\|_1$, so every convolution coordinate is absolutely convergent and the estimate follows. [L3, algebra]

1.2 Convolution is commutative and associative and $\delta_0$ is the identity: commutativity is the change of variable $j \mapsto n-j$; associativity is the regrouping of the absolutely summable triple family $(a_i b_j c_{n-i-j})_{i,j}$ along the two possible bracketing orders, licensed by Tonelli and Fubini for the real and imaginary parts [L3]; and $(a*\delta_0)_n = a_n = (\delta_0*a)_n$. [1.1, L3, algebra]

1.3 $\ell^1(\mathbb Z)$ is complete: if $(a^{(k)})$ is Cauchy in $\|\cdot\|_1$, then each coordinate sequence $(a^{(k)}_n)_k$ is Cauchy in $\mathbb C$ and converges by [L4] to some $a_n$; for every finite set $F \subseteq \mathbb Z$ one has $\sum_{n\in F}|a_n| = \lim_k\sum_{n\in F}|a^{(k)}_n| \le \sup_k\|a^{(k)}\|_1 < \infty$, so $a \in \ell^1(\mathbb Z)$ with $\|a\|_1 \le \sup_k\|a^{(k)}\|_1$, and the same finite-subset estimate applied to $a - a^{(k)}$ gives $\|a - a^{(k)}\|_1 \le \sup_{l \ge k}\|a^{(l)} - a^{(k)}\|_1 \to 0$. [1.1, L4, algebra]

1.4 $\delta_1$ is invertible with inverse $\delta_{-1}$, since $\delta_1 * \delta_{-1} = \delta_0$; if $\chi$ is a character and $z := \chi(\delta_1)$, then $1 = \chi(\delta_0) = \chi(\delta_1)\chi(\delta_{-1})$ so $|z| \ge 1$ by [L1], while $|z| \le \|\delta_1\|_1 = 1$; hence $|z| = 1$, and multiplicativity gives $\chi(\delta_n) = z^n$ for all $n \in \mathbb Z$. [1.2, L1, algebra]

1.5 Let $z^{(k)} \to z$ in $\mathbb T$ and $a \in \ell^1(\mathbb Z)$; then $\chi_{z^{(k)}}(a) \to \chi_z(a)$: given $\epsilon>0$ choose $N$ with $\sum_{|n|>N}|a_n| < \epsilon/4$, and for $|n| \le N$ use $|z^{(k)n} - z^n| \le |n||z^{(k)}-z|$ to make $\sum_{|n|\le N}|a_n||z^{(k)n}-z^n| < \epsilon/2$ for $k$ large; hence $z \mapsto \chi_z$ is continuous, and its inverse $\chi \mapsto \chi(\delta_1)$ is continuous because it is the evaluation map $\chi \mapsto \chi(\delta_1)$, one of the maps that generate the evaluation topology by [L1]. [L1, L5, algebra]

1.6 For $|z| = 1$ the map $\chi_z(a) := \sum_n a_nz^n$ is a character: it is complex-linear, nonzero ($\chi_z(\delta_0) = 1$) and multiplicative, because expanding $\chi_z(a)\chi_z(b) = \sum_j\sum_k a_jb_kz^{j+k}$ and regrouping along $n = j+k$ (Tonelli and Fubini on the absolutely summable family $(a_jb_kz^{j+k})$, [L3]) gives $\sum_n(a*b)_nz^n = \chi_z(a*b)$. [1.1, L3, algebra]

2.1 For every $a \in \ell^1(\mathbb Z)$ and every character $\chi$ with $z = \chi(\delta_1)$ one has $\chi(a) = \sum_n a_nz^n$: approximate $a$ by its finite truncations [L2], apply linearity and [step 1.4] to each truncation, and pass to the limit using continuity of $\chi$ from [L1]; the series converges absolutely because $|a_nz^n| = |a_n|$. [step 1.4, L1, L2, algebra]

3.1 The map $z \mapsto \chi_z$ is a bijection $\mathbb T \to \Delta(\ell^1(\mathbb Z))$: it is injective because $\chi_z = \chi_{z'}$ forces $z = \chi_z(\delta_1) = \chi_{z'}(\delta_1) = z'$, and it is surjective by [step 2.1] applied to the character $\chi$ and its value $z = \chi(\delta_1) \in \mathbb T$ from [step 1.4]. [step 1.4, step 2.1, step 1.6, algebra]

4.1 By [step 1.5] and [step 3.1] the assignment is a continuous bijection with continuous inverse between the compact Hausdorff space $\mathbb T$ and the Hausdorff character space $\Delta(\ell^1(\mathbb Z))$, hence a homeomorphism; and by [step 2.1] the Gelfand transform of $a$ is the Laurent series $\hat a(\chi_z) = \sum_na_nz^n$. [step 2.1, step 1.5, step 3.1, L4, L5] ∎

## Remarks

- **The example is the model case of the transform being injective but not surjective.** The image of $\ell^1(\mathbb Z)$ under its Gelfand transform is the Wiener algebra inside $C(\mathbb T)$; that refinement belongs to the Fourier-analysis track and is only pointed at in [[rem-wiener-lemma-is-developed-on-the-fourier-analysis-track]].
- **Fubini is used to justify the regrouping, not to prove convergence**: absolute summability of the relevant two- and three-index families is established by Tonelli before any rearrangement.
