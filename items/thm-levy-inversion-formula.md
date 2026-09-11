---
id: "thm-levy-inversion-formula"
kind: "theorem"
title: "Levy inversion formula"
deps: ["def-characteristic-function-of-a-real-random-variable", "lem-uniform-sine-integral-bound-and-dirichlet-value", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-dominated-convergence", "def-axiom-of-choice", "thm-sine-and-cosine-derivatives", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral"]
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

Assume AC. For a real random variable $X$ and $a<b$, $$\lim_{T\to\infty}\frac1{2\pi}\int_{-T}^T\frac{e^{-ita}-e^{-itb}}{it}\varphi_X(t)\,dt=\mathbb P(a<X<b)+\frac{\mathbb P(X=a)+\mathbb P(X=b)}2.$$ The quotient at $t=0$ means $b-a$. Thus atom-free endpoints give exactly the open-interval probability.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The exponential is integrated against the probability law. [[def-characteristic-function-of-a-real-random-variable]].

[F2] The symmetric sine integrals have uniform bound and signed limit. [[lem-uniform-sine-integral-bound-and-dirichlet-value]].

[F3] Absolute product integrability permits exchange of integrals. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

[F4] A fixed integrable majorant permits passage to the limit. [[thm-dominated-convergence]].

[F5] Sine and cosine primitives evaluate the real and imaginary integrals. [[thm-sine-and-cosine-derivatives]].

[F6] The integral of a derivative is its endpoint increment. [[thm-ftc-second-part]].

[F7] The compact analytic integrals agree with Lebesgue integrals under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F8] AC covers the analytic bridge and sine-integral lemma. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 Let $\mu=\mathbb P_X$ and define $q(t)=\int_a^b e^{-ity}\,dy$. Applying FTC to the sine and cosine components gives the stated quotient for $t\ne0$, while $q(0)=b-a$. The integral expression shows $|q(t)|\le b-a$ and continuity at zero by dominated convergence on $[a,b]$. F7 identifies the compact integrals with Lebesgue integrals; AC covers its assumption and F2. [F1, F4, F5, F6, F7, F8]

2.1 For $T>0$ the joint integrand $q(t)e^{itx}$ is Borel and its absolute integral against $dt\,\mu(dx)$ on $[-T,T]\times\mathbb R$ is at most $2T(b-a)$. Fubini gives $$\int_{-T}^Tq(t)\varphi_X(t)\,dt=\int_{\mathbb R}\bigl(R_T(x-a)-R_T(x-b)\bigr)\,\mu(dx),\qquad R_T(z)=\int_{-T}^T\frac{\sin(tz)}t\,dt.$$ Indeed expand the exponentials after multiplication by $e^{itx}$: the imaginary part is an odd function of t and integrates to zero, leaving the two displayed real sine integrals. [step 1.1, F1, F3, F5]

3.1 F2 bounds the difference of sine kernels uniformly in x and T, and its limit is $\pi(\operatorname{sgn}(x-a)-\operatorname{sgn}(x-b))$. This equals $2\pi$ when $a<x<b$, $\pi$ when $x=a$ or $x=b$, and zero when $x<a$ or $x>b$. Since $\mu$ has mass one, dominated convergence applies to the right-hand side of step 2.1. Division by $2\pi$ proves every term of the stated formula, including the half endpoint atoms. [step 2.1, F2, F4] ∎
