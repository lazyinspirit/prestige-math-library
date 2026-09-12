---
id: "cor-density-inversion-from-an-integrable-characteristic-function"
kind: "corollary"
title: "Density inversion from an integrable characteristic function"
deps: ["thm-levy-inversion-formula", "thm-dominated-convergence", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "lem-finite-measure-uniqueness-on-a-pi-system", "def-axiom-of-choice", "lem-basic-properties-of-characteristic-functions", "thm-continuity-from-below-for-measures"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. If $\varphi_X\in L^1(\mathbb R)$, then the law $\mu$ of $X$ has the bounded continuous probability density $$f(x)=\frac1{2\pi}\int_{\mathbb R}e^{-itx}\varphi_X(t)\,dt.$$ Thus $\mu(B)=\int_B f(x)\,dx$ for every Borel set $B$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Inversion recovers interval mass plus half of each endpoint mass. [[thm-levy-inversion-formula]].

[F2] DCT gives continuity and the limit of truncated absolutely integrable expressions. [[thm-dominated-convergence]].

[F3] Absolute Fubini exchanges the interval and frequency integrals. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

[F4] A nonnegative measurable density defines a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F5] Equal finite masses on a generating pi-system and the whole space imply equality. [[lem-finite-measure-uniqueness-on-a-pi-system]].

[F6] Measures converge on increasing exhaustions. [[thm-continuity-from-below-for-measures]].

[F7] Characteristic functions have conjugate symmetry. [[lem-basic-properties-of-characteristic-functions]].

[F8] AC is retained from the inversion theorem. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 Put $C=(2\pi)^{-1}\int|\varphi_X|<\infty$. The defining integral is absolutely convergent and $|f(x)|\le C$. For $x_n\to x$, the integrands converge pointwise and are dominated by $|\varphi_X|$, so DCT gives $f(x_n)\to f(x)$. Under the assumed AC the sequential criterion proves continuity. Conjugating the integral and substituting $s=-t$, conjugate symmetry yields $\overline{f(x)}=f(x)$; hence f is real. [F2, F7, F8]

2.1 By F1 and absolute convergence, for every $a<b$ $$\mu((a,b))+\tfrac12\mu(\{a,b\})=\frac1{2\pi}\int q_{a,b}(t)\varphi_X(t)\,dt,\quad q_{a,b}(t)=\int_a^b e^{-ity}\,dy.$$ Its modulus is at most $C(b-a)$. Taking $a=x-1/n,b=x+1/n$, the point x lies in the open interval, so positivity and monotonicity give $\mu(\{x\})\le\mu((a,b))\le C(b-a)=2C/n$ for every n, hence every singleton has mass zero. Also the double absolute integral of $e^{-ity}\varphi_X(t)$ on $(a,b)\times\mathbb R$ is $(b-a)\|\varphi_X\|_1$, so Fubini gives $\mu((a,b))=\int_a^b f(y)\,dy$. [F1, F2, F3, step 1.1]

3.1 If $f(x_0)<0$, continuity supplies an interval about $x_0$ on which $f<f(x_0)/2<0$, contradicting the nonnegative interval mass in step 2.1. Thus $f\ge0$, and F4 defines a Borel measure $\nu(B)=\int_Bf$. Applying continuity from below to $(-n,n)\uparrow\mathbb R$ for both measures gives $\nu(\mathbb R)=\mu(\mathbb R)=1$. Bounded open intervals together with the empty set form a pi-system generating the Borel sets: their rational-endpoint subfamily is a countable base for the real topology. Step 2.1 and F5 therefore imply $\nu=\mu$. AC is inherited from F1 and covers the sequential continuity use in step 1.1. [step 1.1, step 2.1, F4, F5, F6, F8] ∎
