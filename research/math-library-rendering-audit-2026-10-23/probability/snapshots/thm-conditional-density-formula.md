---
id: "thm-conditional-density-formula"
kind: "theorem"
title: "Conditional density formula"
deps: ["def-measure-kernel-and-probability-kernel", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "def-regular-conditional-distribution", "thm-change-of-variables-for-expectation", "def-axiom-of-choice", "thm-integration-against-a-density"]
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
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $(E,\mathcal S,\mu)$ and $(T,\mathcal T,\nu)$ be sigma-finite measure spaces. Let a joint probability $\lambda$ on $E\times T$ have nonnegative product-measurable density $p:E\times T\to[0,\infty]$ relative to $\mu\times\nu$. A fixed probability $\rho$ on $(E,\mathcal S)$ is supplied. Put
$$m(y)=\int_E p(x,y)\,\mu(dx),\qquad D=\{y:0<m(y)<\infty\},$$
$$K(y,A)=\begin{cases}\displaystyle\frac{\int_Ap(x,y)\,\mu(dx)}{m(y)},&y\in D,\\ \rho(A),&y\notin D.\end{cases}$$

Then K is an everywhere probability kernel from T to E. If $\beta$ is the second marginal of $\lambda$, then $\beta(D)=1$ and
$$\lambda(A\times B)=\int_B K(y,A)\,\beta(dy).$$

For any random elements X,Y with joint law $\lambda$, $K(Y,\cdot)$ is a regular conditional distribution of X given $\sigma(Y)$. These event identities require no AC. If interpreted with the library's conditional-expectation class existence convention, assume AC. Neither zero nor infinite marginal-density fibres are normalized by the displayed quotient.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Probability-kernel sections must have mass one at every source point and measurable evaluations. [[def-measure-kernel-and-probability-kernel]].

[F2] Nonnegative product-measurable functions on the stated sigma-finite spaces have measurable section integrals and equal iterated integrals. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F3] Each nonnegative measurable section density defines a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F4] All conditioning-event identities characterize a supplied RCD. [[def-regular-conditional-distribution]].

[F5] Bounded measurable functions of Y integrate against its marginal. [[thm-change-of-variables-for-expectation]].

[F6] AC is only for the inherited conditional-class existence notation, not for the density construction with supplied rho. [[def-axiom-of-choice]].

[F7] Integrating against a density measure equals integrating the product. [[thm-integration-against-a-density]].

## Proof

**Proof technique:** direct.

1.1 By [F2], m is measurable and $\int_T m\,d\nu=\int p\,d(\mu\times\nu)=\lambda(E\times T)=1$. For each measurable B, apply [F2] to $p\mathbf1_{E\times B}$ to obtain $\beta(B)=\int_Bm\,d\nu$. Put $Z=\{m=0\}$ and $I=\{m=\infty\}$. Then $\beta(Z)=0$. Also $n\nu(I)\le\int m\,d\nu=1$ for all $n\ge1$, so $\nu(I)=0$; the nonnegative integral over this measurable null set is zero, even though m is infinite there, giving $\beta(I)=0$. Therefore $D=T\setminus(Z\cup I)$ is measurable and has full marginal mass. No finite value of m at each point follows from total integrability. [F2]

2.1 For $A\in\mathcal S$, let $a_A(y)=\int_Ap(x,y)\,\mu(dx)$. Tonelli applied to $p\mathbf1_{A\times T}$ makes $a_A$ measurable. It satisfies $0\le a_A\le m$ everywhere. On D both are finite and the denominator is positive, so $a_A/m$ is a measurable real function there; reciprocal and multiplication are continuous on this finite positive domain. Pasting the constant $\rho(A)$ off D proves measurable evaluations of K. For each $y\in D$, [F2] ensures that $p(\cdot,y)$ is measurable and [F3] makes $A\mapsto a_A(y)$ a measure of mass m(y); dividing by this finite positive number gives a probability. Off D, K is the supplied probability $\rho$. This proves [F1], including the empty-event and whole-target evaluations. [step 1.1, F1, F2, F3]

3.1 For measurable A,B, the contribution of $B\setminus D$ to the K-integral under $\beta$ is zero because $0\le K\le1$ and $\beta(D^c)=0$. On D the density conversion [F7] and $\beta=m\,d\nu$ give $$\int_BK(y,A)\,\beta(dy)=\int_{B\cap D}\frac{a_A(y)}{m(y)}m(y)\,\nu(dy)=\int_{B\cap D}a_A(y)\,\nu(dy).$$ On Z, $a_A=0$ since $a_A\le m$; on I its integral is zero because I is $\nu$-null. Thus the last integral is $\int_Ba_A\,d\nu$, which equals $\int_{A\times B}p\,d(\mu\times\nu)=\lambda(A\times B)$ by [F2]. All cancellation was restricted to finite positive m. [step 1.1, step 2.1, F2, F7]

4.1 If X,Y have joint law $\lambda$, [F5] applied to the bounded measurable function $\mathbf1_B(y)K(y,A)$ converts step 3.1 into $$\int_{\{Y\in B\}}K(Y,A)\,dP=P(X\in A,Y\in B).$$ The collection of inverse images $Y^{-1}(B)$ is already a sigma-algebra and is exactly $\sigma(Y)$. These are therefore all required conditioning events. Measurability and probability sections follow from step 2.1 under composition with Y, so [F4] proves the RCD assertion. The proof selected no points, versions or exhaustion: the sigma-finite measures, product density and filler probability are supplied. [F6] is required only when using the library conditional-class existence convention. [step 2.1, step 3.1, F4, F5, F6] ∎
