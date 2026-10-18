---
id: lem-real-power-improper-integral
kind: lemma
title: The improper integral of a power at zero
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-real-power, def-natural-logarithm, thm-real-power-continuity-and-derivatives, thm-natural-logarithm-laws, thm-exponential-limits-and-range, thm-ftc-second-part]
proof_strategy: direct
axiom_use: None. The truncated FTC argument and the endpoint limit use no choice.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: J. Lebl, Basic Analysis I, §5.4.1–5.4.2, The logarithm and the exponential
      url: https://www.jirka.org/ra/html/sec_logandexp.html
      locator: §§5.4.1–5.4.2, logarithm as an integral and positive-base real powers.
---

## Statement

For every real $γ>-1$, the improper Riemann integral of $x^{γ}$ on $(0,1]$ converges and
$$\int_0^1 x^{\gamma}\,dx=\frac{1}{\gamma+1}.$$

## Facts & Assumptions

**Given:** A real exponent $\gamma>-1$.

[F1] [[def-real-power]] and [[def-natural-logarithm]]: for $x>0$, $x^\gamma=\exp(\gamma\log x)$ and $\exp(\log x)=x$.

[F2] [[thm-real-power-continuity-and-derivatives]]: on $(0,\infty)$, $x\mapsto x^q$ is continuous and differentiable with derivative $q x^{q-1}$ for every real $q$.

[F3] [[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing on $(0,\infty)$.

[F4] [[thm-exponential-limits-and-range]]: $\exp(u)\to0$ as $u\to-\infty$.

[F5] [[thm-ftc-second-part]]: on every closed interval $[\varepsilon,1]$ with $\varepsilon>0$, the integral of a continuous derivative equals the endpoint increment of its primitive.

## Proof

1.1 Put $q=\gamma+1>0$. For $0<\varepsilon<1$, the function $x\mapsto x^q/q$ is differentiable on $[\varepsilon,1]$ with derivative $x^{q-1}=x^\gamma$ by [F2]. Applying [F5] gives $\int_{\varepsilon}^{1}x^\gamma\,dx=(1-\varepsilon^q)/q$. [given, F2, F5, algebra]

1.2 As $\varepsilon\downarrow0$, $\log\varepsilon\to-\infty$: for any real $M$, $0<\varepsilon<\exp(M)$ implies $\log\varepsilon<M$ by [F1] and [F3]. Hence $q\log\varepsilon\to-\infty$ and $\varepsilon^q=\exp(q\log\varepsilon)\to0$ by [F1] and [F4]. [given, F1, F3, F4, algebra]

2.1 Taking $\varepsilon\downarrow0$ in step 1.1 using step 1.2 proves convergence of the improper integral and gives its value $1/q=1/(\gamma+1)$. [given, step 1.1, step 1.2, algebra] ∎
