---
id: "thm-conditional-integration-through-a-regular-conditional-law"
kind: "theorem"
title: "Conditional integration through a regular conditional law"
deps: ["def-regular-conditional-distribution", "thm-measurability-of-integration-against-a-kernel", "thm-monotone-convergence-for-the-integral", "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function", "thm-conditional-monotone-convergence", "lem-conditional-expectation-is-unique-almost-surely", "def-axiom-of-choice", "thm-change-of-variables-for-expectation"]
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

Let $K$ be a specified regular conditional distribution of $X:(\Omega,\mathcal F,P)\to(E,\mathcal S)$ given $\mathcal G$. For measurable $f:E\to[0,\infty]$, the measurable function $I_f(\omega)=\int f(x)K(\omega,dx)$ satisfies

$$\int_H I_f\,dP=\int_H f(X)\,dP\qquad(H\in\mathcal G).$$

This assertion is choice-free. Under AC, it says $I_f=E[f(X)\mid\mathcal G]$ as nonnegative almost-sure classes. If $f:E\to\mathbb R$ is measurable and $E|f(X)|<\infty$, put $D=\{I_{|f|}<\infty\}$. Then $D\in\mathcal G$, $P(D)=1$, and the signed integral on $D$, extended by zero off $D$, is a real integrable conditional-expectation version of $f(X)$. Its identification with the AC-based conditional-expectation class uses AC only for that class convention.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Kernel event evaluations satisfy every conditioning-event identity. [[def-regular-conditional-distribution]].

[F2] A probability kernel integrates nonnegative measurable functions measurably and gives measurable zero-filled signed integrals on the absolute-integrability set. [[thm-measurability-of-integration-against-a-kernel]].

[F3] Increasing nonnegative limits pass through every section integral and every event integral. [[thm-monotone-convergence-for-the-integral]].

[F4] Nonnegative measurable functions have an explicit increasing simple approximation. [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]].

[F5] Under AC nonnegative conditional classes are characterized by all conditional event identities. [[thm-conditional-monotone-convergence]].

[F6] The real integrable version is unique up to almost-sure equality. [[lem-conditional-expectation-is-unique-almost-surely]].

[F7] AC is used only for the inherited conditional-class existence convention (RN selections and nonnegative truncations). [[def-axiom-of-choice]].

[F8] For real |f|, the absolute expectation also equals its integral against the law of X. [[thm-change-of-variables-for-expectation]].

## Proof

**Proof technique:** direct.

1.1 For $f=\mathbf1_A$, the assertion is [F1]. If $f=\sum_{j=1}^m a_j\mathbf1_{A_j}$ is nonnegative simple with disjoint measurable $A_j$ and finite coefficients, then $I_f=\sum_j a_jK(\cdot,A_j)$, so finite additivity of integrals proves the identity by summing the indicator identities. It includes the empty sum, giving $I_0=0$, and $f=1$, giving $I_1=1$. [F1]

2.1 For general nonnegative $f$, choose the prescribed simple approximants $s_n\uparrow f$ of [F4]. For every $\omega$, [F3] for the probability $K(\omega,\cdot)$ gives $I_{s_n}(\omega)\uparrow I_f(\omega)$. The function $(\omega,x)\mapsto f(x)$ is product-measurable since inverse images are $\Omega\times f^{-1}(B)$; thus [F2] ensures $\mathcal G$-measurability of $I_f$. Applying [F3] on each $H$ on both sides of step 1.1 proves the displayed identity, allowing infinity. No representative selection or AC occurred. If using conditional-class notation, [F5] identifies this characterized nonnegative function with the class, under [F7]. [step 1.1, F2, F3, F4, F5, F7]

3.1 For real $f$ with $C=E|f(X)|<\infty$, step 2.1 at $|f|$ and $H=\Omega$ gives $\int I_{|f|}\,dP=C$. Also $C=\int|f|\,dP_X$ by [F8], checking the equivalent law integrability condition. The set $D=\{I_{|f|}<\infty\}$ is measurable. For every positive integer $n$, $nP(D^c)\le\int I_{|f|}=C$, hence $P(D^c)=0$. On $D$, both $I_{f^+},I_{f^-}$ are finite and their difference $J$ is the signed integral. Fill $J$ by zero off $D$; it is real measurable by [F2], and $|J|\le I_{|f|}$ on $D$, so $J$ is integrable. The two nonnegative identities from step 2.1 have finite integrals, at most $C$, so subtraction gives $\int_H J\,dP=\int_H f(X)\,dP$. Removing $D^c$ changes neither integral, since it is measurable null. Thus $J$ is a conditional version; [F6] gives its almost-sure uniqueness, and [F7] supplies only the inherited class notation. No infinity is subtracted from infinity. [step 2.1, F2, F6, F7, F8] ∎
