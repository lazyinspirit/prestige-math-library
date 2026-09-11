---
id: "thm-tightness-from-characteristic-function-equicontinuity-at-zero"
kind: "theorem"
title: "Tightness from characteristic function equicontinuity at zero"
deps: ["def-characteristic-function-of-a-real-random-variable", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "def-tight-family-of-probability-measures", "thm-sine-and-cosine-derivatives", "thm-integration-by-parts", "thm-heine-borel-rn", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
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

Assume AC. Let $\mathcal A$ be a family of Borel probability laws on $\mathbb R$. For $\delta>0$ put $w_\delta(t)=\delta^{-1}(1-|t|/\delta)_+$. Every $\mu\in\mathcal A$ satisfies
$$\mu\{|x|\ge4/\delta\}\le\frac43\int_{\mathbb R}w_\delta(t)(1-\operatorname{Re}\phi_\mu(t))\,dt.$$
If the characteristic functions are equicontinuous at zero, meaning that for every $\eta>0$ some $r>0$ satisfies $|\phi_\mu(t)-1|<\eta$ for every $\mu\in\mathcal A$ and $|t|<r$, then $\mathcal A$ is tight. AC supplies the countable choice used by the compact-interval integration bridge and the continuous-integrand calculus.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The real part of the characteristic function is the integral of cosine. [[def-characteristic-function-of-a-real-random-variable]].

[F2] Fubini applies to absolutely integrable functions on sigma-finite products. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

[F3] An integrable derivative is evaluated by its primitive. [[thm-ftc-second-part]].

[F4] Under countable choice the bounded Riemann integral agrees with the Lebesgue integral. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F5] AC implies the countable choice used by the integration bridge. [[def-axiom-of-choice]].

[F6] Tightness requires a single compact set for each error and the whole family. [[def-tight-family-of-probability-measures]].

[F7] Sine and cosine have derivatives cosine and minus sine. [[thm-sine-and-cosine-derivatives]].

[F8] Integration by parts holds for differentiable functions with integrable derivatives. [[thm-integration-by-parts]].

[F9] Closed bounded real intervals are compact. [[thm-heine-borel-rn]].

[F10] The cosine is real with absolute value at most one. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

## Proof

**Proof technique:** direct.

1.1 The continuous nonnegative weight is supported on $[-\delta,\delta]$ and has integral $2\delta^{-1}\int_0^\delta(1-t/\delta)\,dt=1$. Set $K_\delta(x)=\int w_\delta(t)\cos(tx)\,dt$. At $x=0$ it equals one. For $x\ne0$, integration by parts on $[0,\delta]$, with $u=1-t/\delta$ and $v=\sin(tx)/x$, gives $$K_\delta(x)=\frac{2}{\delta^2x}\int_0^\delta\sin(tx)\,dt=\frac{2(1-\cos(\delta x))}{\delta^2x^2}.$$ All functions and their derivatives here are continuous on that interval; the primitive and integration bridge therefore apply. The formula gives $K_\delta\ge0$, while its defining integral and $\cos\le1$ give $K_\delta\le1$. Also $K_\delta(x)\le4/(\delta^2x^2)\le1/4$ when $|x|\ge4/\delta$, including equality in the cutoff. [F3, F4, F5, F7, F8, F10]

2.1 The function $w_\delta(t)(1-\cos(tx))$ is jointly Borel, nonnegative, and has product integral at most $2\int w_\delta=2$: Lebesgue measure is sigma-finite and $\mu$ is finite. Fubini and the characteristic-function definition yield $$\int w_\delta(t)(1-\operatorname{Re}\phi_\mu(t))\,dt=\int (1-K_\delta(x))\,\mu(dx)\ge\tfrac34\mu\{|x|\ge4/\delta\}.$$ Nonnegativity off the tail justifies discarding its complement. Rearrangement proves the quantitative assertion. [F1, F2, step 1.1]

3.1 Given $\varepsilon>0$, equicontinuity supplies $r>0$ with $|1-\phi_\mu(t)|<3\varepsilon/8$ whenever $|t|<r$, uniformly in $\mu$. Choose $0<\delta<r$. The weight has mass one, so the integral in the bound is at most $3\varepsilon/8$. Thus $\mu(\mathbb R\setminus[-4/\delta,4/\delta])\le\varepsilon/2<\varepsilon$ for every member. The interval is compact, proving tightness. For an empty family the empty compact set suffices. A singleton family and an atom at zero satisfy the same calculation (the latter has zero right-hand side). There is no assertion at $\delta=0$, where the weight is undefined. [step 1.1, step 2.1, F6, F9] ∎ 
