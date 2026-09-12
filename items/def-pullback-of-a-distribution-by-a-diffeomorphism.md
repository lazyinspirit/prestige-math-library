---
id: "def-pullback-of-a-distribution-by-a-diffeomorphism"
kind: "definition"
title: "Pullback of a distribution by a diffeomorphism"
deps: ["def-distribution", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "thm-test-function-operations-are-continuous", "cor-c-one-change-of-variables-for-l-one-functions", "thm-nonnegative-integral-zero-iff-zero-almost-everywhere", "def-countable-choice"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
---

## Definition

Let $n\ge1$ be an integer, let $F:U\to V$ be a smooth diffeomorphism between open subsets of $\mathbb R^n$, and let $u\in\mathcal D'(V)$ in the convention of [[def-distribution]]. Put $J_F(x)=|\det DF(x)|$. The chain rule applied to $F^{-1}\circ F$ makes $DF(x)$ invertible, so $J_F>0$. It is smooth: the determinant is smooth and nonzero, and its sign is locally constant. Define
$$\langle F^*u,\varphi\rangle=\left\langle u,\left(\frac{\varphi}{J_F}\right)\circ F^{-1}\right\rangle\qquad(\varphi\in\mathcal D(U)).$$
The transformed test has support in $F(\operatorname{supp}\varphi)$, a compact subset of $V$. Multiplication by the fixed smooth reciprocal Jacobian and diffeomorphic composition are continuous linear test operations by [[thm-test-function-operations-are-continuous]], so their transpose defines a distribution. This definition is choice-free. For the identity map the Jacobian is one and the pullback is the identity; the zero distribution pulls back to zero. Empty diffeomorphic domains give zero test and distribution spaces. The absolute value of the determinant handles orientation reversal; arbitrary smooth maps are not covered by this definition.

For compatibility with functions, use the regular-functional convention of [[def-regular-distribution-from-a-locally-integrable-function]] and assume the Axiom of Countable Choice ([[def-countable-choice]]). If $f\in L^1_{\mathrm{loc}}(V)$ and $K\subseteq U$ is compact, put $h_K=\mathbf1_{F(K)}|f|$. This is an $L^1(V)$ function. The exact formula of [[cor-c-one-change-of-variables-for-l-one-functions]] gives
$$\int_K |f(F(x))|J_F(x)\,dx=\int_{F(K)}|f(y)|\,dy<\infty.$$
The formula also makes the transformed integrand measurable; since $J_F$ is positive and its reciprocal is bounded on $K$, this proves $f\circ F\in L^1_{\mathrm{loc}}(U)$. If $f=g$ almost everywhere, apply the same formula to $\mathbf1_{F(K)}|f-g|$, whose integral is zero, and use [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]] to obtain $f\circ F=g\circ F$ almost everywhere on each compact $K$. Thus composition respects local almost-everywhere classes. For a fixed test $\varphi$, the function $f(y)(\varphi/J_F)(F^{-1}(y))$ is integrable, since its smooth factor is bounded with compact support. Applying the same change-of-variables formula gives
$$\langle F^*u_f,\varphi\rangle=\int_V f(y)\frac{\varphi(F^{-1}(y))}{J_F(F^{-1}(y))}\,dy=\int_U f(F(x))\varphi(x)\,dx.$$
Thus $F^*u_f=u_{f\circ F}$, with both regular functionals distributions by [[thm-locally-integrable-functions-embed-in-distributions]]. Countable Choice is used through the published Lebesgue change-of-variables and embedding results, not through the definition of $F^*u$.
