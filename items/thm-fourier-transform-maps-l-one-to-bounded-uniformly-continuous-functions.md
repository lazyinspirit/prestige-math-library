---
id: thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions
kind: theorem
title: The L1 transform is bounded and uniformly continuous
deps: ["lem-l-one-fourier-transform-is-well-defined", "thm-dominated-convergence", "thm-complex-exponential-addition-and-real-extension", "thm-linearity-of-the-lebesgue-integral-on-l-one", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "cor-mean-value-theorem", "thm-sine-and-cosine-derivatives", "thm-cauchy-schwarz-and-the-euclidean-norm", "lem-complex-conjugation-and-modulus-laws"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Proposition 11.2 and (11.2), p.119; uniform estimate made explicit
---

## Statement

The map $\mathcal F:L^1(\mathbb R^n;\mathbb C)\to BUC(\mathbb R^n;\mathbb C)$ is complex-linear and $\sup_\xi|\widehat f(\xi)|\le\|f\|_1$. Here $n\ge1$ and $BUC$ means bounded uniformly continuous functions.

## Facts & Assumptions

**Given:** $f,g\in L^1$, complex scalars $a,b$, and real frequency vectors $\xi,h$.

[F1] The integral transform exists at every frequency, is representative independent, and satisfies the pointwise norm bound ([[lem-l-one-fourier-transform-is-well-defined]]).

[F2] Dominated convergence applies to complex integrands dominated by one integrable function ([[thm-dominated-convergence]]).

[F3] The complex exponential has the addition law ([[thm-complex-exponential-addition-and-real-extension]]).

[F4] Integration is complex-linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F5] For real $u$, $e^{iu}=\cos u+i\sin u$ and has modulus one ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F6] The real mean value theorem bounds an increment by a bound for the derivative times the interval length ([[cor-mean-value-theorem]]), and $(\sin u)'=\cos u$, $(\cos u)'=-\sin u$ ([[thm-sine-and-cosine-derivatives]]).

[F7] For real Euclidean vectors, $|x\cdot h|\le |x||h|$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F8] Complex modulus obeys the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

1.1 Reconstruct first the integral interface used here. Augment any finite disjoint display of a nonnegative simple function by the complement with coefficient $0$. Intersections of two augmented displays partition the whole space and have equal coefficients on nonempty cells, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple addition and monotonicity; scalar zero is direct and positive scalars are termwise. Supremum over simple minorants and the sets $\{u_j\ge cs\}$, $0<c<1$, give monotone convergence; increasing simple approximations give nonnegative additivity, and positive/negative plus real/imaginary decompositions give finite complex $L^1$ linearity. Thus the integrable functions $f(x)e^{-2\pi ix\cdot\xi}$ and $g(x)e^{-2\pi ix\cdot\xi}$ have linear combination $(af+bg)(x)e^{-2\pi ix\cdot\xi}$, and integrating gives $\widehat{af+bg}=a\widehat f+b\widehat g$. The pointwise estimate in F1, with a right side independent of frequency, gives boundedness and the asserted supremum bound. [F1, F4, given, construct]

2.1 The preceding MCT also gives Fatou by applying it to $\inf_{j\ge m}v_j\uparrow\liminf_jv_j$. If $u_j\to u$ almost everywhere and $|u_j|\le g\in L^1$, Fatou applied to $2g-|u_j-u|\ge0$ gives $\limsup_j\int|u_j-u|\le0$; hence $L^1$ convergence, and the local finite linearity gives convergence of integrals. This proves the exact dominated-convergence clause used below without [F2]'s affected foundation. Factoring the exponentials yields $\widehat f(\xi+h)-\widehat f(\xi)=\mathcal F(f(e^{-2\pi ix\cdot h}-1))(\xi)$. F1 therefore gives the bound $|\widehat f(\xi+h)-\widehat f(\xi)|\le I(h)$, where $I(h)=\int|f(x)||e^{-2\pi ix\cdot h}-1|\,dx$. For real $u$, F5--F6 and F8 give $|\sin u|\le|u|$, $|\cos u-1|\le|u|$, and hence $|e^{iu}-1|\le2|u|$; F5 also bounds this modulus by two. Applying the locally proved dominated convergence to the explicit integer-ball tails, dominated by $|f|$, choose an integer $R\ge1$ with $\int_{|x|>R}|f|<\epsilon/4$. On $|x|\le R$, F7 gives $|2\pi x\cdot h|\le2\pi R|h|$, so the single choice $\delta=\epsilon/(8\pi R(1+\|f\|_1))$ makes $|e^{-2\pi ix\cdot h}-1|<\epsilon/(2(1+\|f\|_1))$ whenever $|h|<\delta$. The inside integral is below $\epsilon/2$ and the outside integral below $\epsilon/2$, so $I(h)<\epsilon$. Consequently, for every $\epsilon>0$ there is $\delta>0$ such that $|h|<\delta$ implies the difference is below $\epsilon$ for every $\xi$. This is uniform continuity. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1] ∎
