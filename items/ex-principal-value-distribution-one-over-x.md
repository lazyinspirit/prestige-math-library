---
id: "ex-principal-value-distribution-one-over-x"
kind: "example"
title: "Principal value distribution one over x"
deps: ["thm-local-finite-order-characterization-of-distributions", "thm-mean-value-inequality", "thm-continuous-on-a-rectangle-is-riemann-integrable", "thm-multidimensional-integral-properties"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

The symmetric principal value
$$\operatorname{pv}(1/x)(\varphi)=\lim_{\varepsilon\downarrow0}\int_{|x|>\varepsilon}\frac{\varphi(x)}x\,dx$$
exists for every $\varphi\in\mathcal D(\mathbb R)$ and defines a distribution of order at most one on each compact support. Here the truncated integrals are proper Riemann integrals on the two finite intervals meeting the test support, taken componentwise. This construction holds in ZF.

## Facts & Assumptions

[F1] Compactwise finite-order estimates characterize distributions ([[thm-local-finite-order-characterization-of-distributions]]).

[F2] The mean-value inequality for complex curves gives $|\varphi(x)-\varphi(y)|\le |x-y|\sup|\varphi'|$ on the joining interval ([[thm-mean-value-inequality]]).

[F3] Continuous real functions on compact intervals are Riemann integrable, and their integrals are linear and bounded by interval length times the uniform bound ([[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-multidimensional-integral-properties]]). Apply componentwise for complex functions.

## Proof

**Given:** a test $\varphi$ supported in $[-R,R]$, with $R>0$.

1.1 Changing $x$ to $-t$ in the negative interval, which follows directly by reflecting its tagged partitions, gives $\int_{|x|>\varepsilon}\varphi(x)/x\,dx=\int_\varepsilon^R(\varphi(t)-\varphi(-t))/t\,dt$ for $0<\varepsilon<R$. The quotient extends continuously to $t=0$ with value $2\varphi'(0)$ by the definition of derivative. Its modulus is at most $2\sup|\varphi'|$ by F2. F3 therefore gives an integral on $[0,R]$, and the omitted interval has integral tending to zero, bounded by a constant times $\varepsilon\sup|\varphi'|$. This proves existence of the principal value. [given, F2, F3]

2.1 The expression is linear in $\varphi$, since each truncation is linear and limits preserve finite sums. For any fixed compact $K\subseteq\mathbb R$, choose $R>0$ with $K\subseteq[-R,R]$. The integral representation from step 1.1 gives $|\operatorname{pv}(1/x)(\varphi)|\le4R p_1(\varphi)$ for $\varphi\in\mathcal D_K$, by separately bounding real and imaginary integrals; the sharper $2R$ bound also follows from the complex integral triangle inequality but is unnecessary. F1 proves continuity. An even test gives zero because the quotient vanishes. Tests supported away from zero give their ordinary integral against $1/x$, and the zero test gives zero. The limit requires symmetric removal at zero, with no assertion about independently varying two cutoffs. $\square$ [step 1.1, F1, F3]
