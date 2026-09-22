---
id: lem-two-sided-mills-bounds-for-standard-normal-tail
kind: lemma
title: "Two-sided Mills bounds for the standard normal tail"
status: draft
origin: pipeline
deps: [def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-c1-lipschitz-ac-bv-hierarchy, thm-integration-by-parts-for-absolutely-continuous-functions, thm-substitution, thm-monotone-convergence-for-the-integral, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Lemma 1.2.6 and the Gaussian tail estimates (8.5.2) in the proof of Theorem 8.5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ and
$\overline\Phi(x)=\int_x^\infty\varphi(y)\,dy$ for $x\in\mathbb R$. Then for
every $x>0$
$$\frac{x\,\varphi(x)}{1+x^2}\ \le\ \overline\Phi(x)\ \le\ \frac{\varphi(x)}{x},$$
and consequently, for every $x>1$,
$$\Bigl(\frac1x-\frac1{x^3}\Bigr)\varphi(x)\ \le\ \overline\Phi(x)\ \le\ \frac{\varphi(x)}{x}.$$
Both bounds are sharp as $x\to\infty$ in the sense that the ratio of each side
to $\overline\Phi(x)$ tends to $1$.

## Facts & Assumptions

**Given:** AC, AC$_\omega$, DC, and a real $x>0$.

[F1] $\varphi$ is the strictly positive, Borel measurable standard normal density, with $\int_{\mathbb R}\varphi=1$, and $N(0,1)$ is the probability measure $\varphi\,dy$. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F2] On a compact interval every $C^1$ function is Lipschitz, hence absolutely continuous and of bounded variation; in particular $\varphi$ and $y\mapsto1/y$ are absolutely continuous on $[x,R]$ for $0<x<R$. [[thm-c1-lipschitz-ac-bv-hierarchy]]

[F3] Integration by parts for absolutely continuous functions: $\int_a^bFG'+\int_a^bF'G=F(b)G(b)-F(a)G(a)$, under AC$_\omega$ and DC. [[thm-integration-by-parts-for-absolutely-continuous-functions]] [[def-countable-choice]] [[def-dependent-choice]]

[F4] Substitution computes $\int_x^Ry\,e^{-y^2/2}\,dy=e^{-x^2/2}-e^{-R^2/2}$, and monotone convergence justifies passing to the limit $R\to\infty$ in the integrals of the nonnegative functions $\varphi$ and $\varphi(y)/y^2$ over $[x,R]$. [[thm-substitution]] [[thm-monotone-convergence-for-the-integral]]

[F5] AC is the ambient assumption; AC$_\omega$ and DC are the hypotheses of the integration-by-parts interface used in [F3]. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** direct.

1.1 For $y\ge x>0$ one has $\varphi(y)\le(y/x)\varphi(y)$; integrating over $[x,R]$ and letting $R\to\infty$ with [F4] gives $\overline\Phi(x)\le\frac1x\int_x^\infty y\varphi(y)\,dy$, and [F4] computes $\int_x^Ry\varphi(y)\,dy=(2\pi)^{-1/2}(e^{-x^2/2}-e^{-R^2/2})\to\varphi(x)$, so $\overline\Phi(x)\le\varphi(x)/x$. [given, F1, F4]

1.2 For $0<x<R$, [F2] and [F3] applied to $F(y)=1/y$ and $G=\varphi$ on $[x,R]$, together with $\varphi'(y)=-y\varphi(y)$, give $\int_x^R\varphi(y)\,dy=\varphi(x)/x-\varphi(R)/R-\int_x^R\varphi(y)y^{-2}\,dy$. [F2, F3]

2.1 Letting $R\to\infty$ in [step 1.2] with [F4] gives $\overline\Phi(x)=\varphi(x)/x-\int_x^\infty\varphi(y)y^{-2}\,dy$, and since $y^{-2}\le x^{-2}$ on $[x,\infty)$ one gets $\overline\Phi(x)\ge\varphi(x)/x-\overline\Phi(x)/x^2$, that is, $\overline\Phi(x)\,(1+x^{-2})\ge\varphi(x)/x$ and hence $\overline\Phi(x)\ge x\varphi(x)/(1+x^2)$. [step 1.2, F4]

3.1 The algebraic comparison $x/(1+x^2)\ge(1/x-1/x^3)$ for $x>0$ is equivalent to $x^4\ge(x^2-1)(1+x^2)=x^4-1$, which holds; combining it with [step 2.1] gives the displayed form for $x>1$, and the ratio claim follows because $(1/x-1/x^3)/(1/x)=1-x^{-2}\to1$ and $\bigl(x/(1+x^2)\bigr)/(1/x)=1/(1+x^{-2})\to1$ while the upper bound already is $\varphi(x)/x$. [step 1.1, step 2.1]

4.1 The endpoint and degenerate cases are covered: $x>0$ is required so that $1/x$ and the integration interval $[x,R]$ are meaningful and $F=1/y$ is $C^1$ on it; $x=0$ is excluded by the statement because the upper bound would divide by zero, while $\overline\Phi(0)=\tfrac12$ is finite; the limit $R\to\infty$ is handled by monotone convergence over the increasing family $[x,R]$; the constants AC$_\omega$ and DC are those declared for [F3] and are used nowhere else; and AC enters only through [F5]. [step 1.2, step 2.1, F3, F5, given] ∎

## Source notes

Durrett, Lemma 1.2.6 and the estimates (8.5.2) in the proof of Theorem 8.5.1, states the two-sided bound $(x^{-1}-x^{-3})e^{-x^2/2}\le\int_x^\infty e^{-y^2/2}dy\le x^{-1}e^{-x^2/2}$ for $x>0$ (up to the normalization constant), together with the asymptotic ratio $1$ used in the law of the iterated logarithm. The proof above derives the stronger lower bound $x\varphi(x)/(1+x^2)$ from the identity obtained by integrating by parts, which is the form consumed by the LIL item.
