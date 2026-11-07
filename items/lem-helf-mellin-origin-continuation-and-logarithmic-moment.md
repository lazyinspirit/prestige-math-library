---
dependency_level: 0
id: lem-helf-mellin-origin-continuation-and-logarithmic-moment
kind: lemma
title: "Mellin continuation at zero and its logarithmic moment"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-holomorphic-parameter-riemann-integral
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-integration-by-parts
  - thm-natural-logarithm-laws
  - thm-complex-exponential-is-entire-with-derivative-itself
  - def-real-elementary-functions-and-domains
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. A. Helfgott, Goldbach analytic proof; bounded local reconstruction"
      url: "https://arxiv.org/pdf/1305.2897v4"
      locator: "\u00a74.1, pp32\u201333: transform continuation and logarithmic coefficient; printed inequality4.5 has its direction reversed, repaired locally"
---

## Statement

Let $\eta:[0,\infty)\to\mathbb R$ be $C^1$, let $\delta\in\mathbb R$, and put $f(t)=\eta(t)e^{2\pi i\delta t}$. Suppose $I=(a,b)$ contains $[1/2,3/2]$ and $\int_0^\infty(|\eta(t)|+|\eta'(t)|)t^{\sigma-1}dt<\infty$ for every $\sigma\in I$. The Mellin integral $G(s)=\int_0^\infty f(t)t^{s-1}dt$ is holomorphic for $0<\operatorname{Re}s<b$ and continues meromorphically to $a-1<\operatorname{Re}s<b$, with only a possible simple pole at zero. Its Laurent expansion there is
$$G(s)=\frac{\eta(0)}s+B+O(s),\qquad B=-\int_0^\infty f'(t)\log t\,dt.$$
In particular,
$$|B|\le\frac23\left(\int_0^\infty|\eta'(t)|(t^{-1/2}+t^{1/2})dt+2\pi|\delta|\int_0^\infty|\eta(t)|(t^{-1/2}+t^{1/2})dt\right).$$
This statement concerns the transform and its origin coefficient only; it does not assert a Dirichlet-$L$ contour shift or a sum over zeros.

## Facts & Assumptions

**Given:** The function, twist and weighted integrability interval in the Statement. Every improper integral below is absolutely convergent when it is used.

[F1] Finite-interval parameter integrals of jointly continuous holomorphic functions are holomorphic; locally uniform holomorphic limits preserve holomorphy and derivatives. [[thm-holomorphic-parameter-riemann-integral]] [[thm-weierstrass-convergence-holomorphic-functions]]

[F2] Integration by parts holds on compact intervals; logarithms obey their usual product laws and the complex exponential is entire with its stated derivative. [[thm-integration-by-parts]] [[thm-natural-logarithm-laws]] [[thm-complex-exponential-is-entire-with-derivative-itself]]

[F3] The real exponential has its everywhere convergent power series; its even part is $\cosh u=\sum_{j\ge0}u^{2j}/(2j)!$. [[def-real-elementary-functions-and-domains]]

## Proof

1.1 On every compact substrip of $0<\operatorname{Re}s<b$, use boundedness of $f$ near zero and a weighted integrability exponent greater than the substrip's upper endpoint at infinity. These bound $|f(t)t^{s-1}|$ by one integrable function, uniformly on that substrip. Compact-interval integrals over $[1/n,n]$ are holomorphic by [F1], and their tails tend uniformly to zero under this bound. The same argument applies to $D(s)=\int_0^\infty f'(t)t^sdt$ on $a-1<\operatorname{Re}s<b-1$, since $|f'|\le|\eta'|+2\pi|\delta||\eta|$. Logarithmic derivatives of the kernels are also dominated on smaller substrips, using slightly stronger and weaker powers from the open interval. Thus [F1] gives holomorphy and differentiation under these integrals. [given, F1, F2, algebra]

2.1 For $0<\operatorname{Re}s<b-1$, both $f'(t)t^s$ and $f(t)t^{s-1}$ are absolutely integrable. The derivative of $f(t)t^s$ is their integrable sum, so its endpoint limits exist. The limit at zero is zero by continuity of $f$ and positive real part. If its limit at infinity were nonzero, then $|f(t)t^{s-1}|$ would eventually be bounded below by a positive constant times $1/t$, contradicting integrability. Applying [F2] on finite cutoffs and passing to the endpoints therefore gives $sG(s)=-D(s)$. The expressions agree on this nonempty overlap; hence $-D(s)/s$ continues $G$ to the asserted union of strips. [step 1.1, F2, algebra]

3.1 The hypotheses at $\sigma=1$ make $f,f'$ integrable. Since $f'$ is integrable, $f$ has a limit at infinity; integrability of $f$ forces this limit to be zero. Consequently $D(0)=\int_0^\infty f'=-\eta(0)$, and differentiating $D$ at zero gives $D'(0)=\int_0^\infty f'(t)\log t\,dt$. Expansion of $-D(s)/s$ yields exactly the displayed pole and constant coefficient. No claim of absolute convergence of a zero sum follows from this transform calculation. [step 1.1, step 2.1, algebra]

4.1 For $u\ge0$, [F3] gives $\cosh u\ge1+u^2/2+u^4/24$. Moreover $u^4+12u^2-36u+24=(u^2-3/2)^2+15(u-6/5)^2+3/20>0$. Hence $\cosh u\ge3u/2$. Set $u=|\log t|/2$ and use [F2] to obtain $|\log t|\le(2/3)(t^{-1/2}+t^{1/2})$. Apply this bound to step 3.1 and $|f'|\le|\eta'|+2\pi|\delta||\eta|$; its two weighted endpoints are integrable by hypothesis. This proves the exact constant-coefficient bound. [F2, F3, step 3.1, algebra] ∎
