---
id: lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite
kind: lemma
title: Fourier-Stieltjes transforms of positive measures are continuous positive definite
dependency_level: 1
deps:
- def-positive-definite-function-on-an-abelian-group
- def-fourier-transform-on-an-lca-group
- def-pontryagin-dual-and-compact-open-topology
- lem-character-evaluation-pairing-is-jointly-continuous
- def-radon-measure-on-an-lch-space
- def-nonnegative-lebesgue-integral
- def-integral-of-a-nonnegative-simple-function
- thm-linearity-of-the-lebesgue-integral-on-l-one
- thm-integral-triangle-inequality
- lem-unit-circle-is-a-compact-metrizable-topological-group
- def-integrable-real-and-complex-functions-and-their-integrals
- lem-complex-conjugation-and-modulus-laws
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let $G$ be a locally compact Hausdorff abelian group with dual $\widehat G$,
and let $\mu$ be a finite positive Radon measure on $\widehat G$
([[def-radon-measure-on-an-lch-space]]). Then the **Fourier-Stieltjes
transform**
$$\phi(x):=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$$
is a continuous positive definite function on $G$
([[def-positive-definite-function-on-an-abelian-group]]) with
$\phi(0)=\mu(\widehat G)=\|\mu\|$. Continuity is uniform on $G$, not merely at
the identity.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$ (written additively) with dual $\widehat G$, and a finite positive Radon measure $\mu$ on $\widehat G$.

[F1] Each $\gamma\in\widehat G$ is a continuous homomorphism $G\to\mathbb T$ ([[def-pontryagin-dual-and-compact-open-topology]]); hence $\gamma(0)=1$, $\gamma(x-y)=\gamma(x)\gamma(y)^{-1}=\gamma(x)\overline{\gamma(y)}$, and $|\gamma(x)|=1$ with $|z^{-1}-w^{-1}|=|z-w|$ for $z,w\in\mathbb T$ ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-complex-conjugation-and-modulus-laws]]).

[F2] $\mu$ is a finite positive Radon measure on $\widehat G$: $\mu(\widehat G)<+\infty$, the integral of the constant function $1$ is $\mu(\widehat G)$ ([[def-integral-of-a-nonnegative-simple-function]], [[def-nonnegative-lebesgue-integral]]), and for every open $U\subseteq\widehat G$ one has $\mu(U)=\sup\{\mu(K):K\subseteq U\text{ compact}\}$ ([[def-radon-measure-on-an-lch-space]]). Every Borel function $h$ with $|h|\le1$ is $\mu$-integrable with $\bigl|\int h\,d\mu\bigr|\le\int|h|\,d\mu\le\mu(\widehat G)$ ([[thm-integral-triangle-inequality]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F3] The evaluation pairing $\widehat G\times G\to\mathbb T$, $(\gamma,x)\mapsto\gamma(x)$, is continuous, and the integral is complex-linear on $L^1(\mu)$, so finite linear combinations of $\mu$-integrable functions are $\mu$-integrable and may be integrated term by term ([[lem-character-evaluation-pairing-is-jointly-continuous]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct.

1.1 For fixed $x\in G$ the map $\gamma\mapsto\gamma(x)$ is continuous on $\widehat G$ by [F3], hence Borel measurable, and $|\gamma(x)|=1$ by [F1]; since $\mu$ is finite, this bounded measurable function is $\mu$-integrable by [F2]. Thus $\phi(x)$ is a well-defined complex number with $|\phi(x)|\le\mu(\widehat G)$ for every $x$, and $\phi(0)=\int_{\widehat G}\gamma(0)\,d\mu=\int_{\widehat G}1\,d\mu=\mu(\widehat G)$. [F1, F2, F3]

1.2 Let $n\ge0$, $x_1,\dots,x_n\in G$ and $c_1,\dots,c_n\in\mathbb C$. Each function $\gamma\mapsto c_j\overline{c_k}\,\gamma(x_j-x_k)$ is $\mu$-integrable by [F1] and [F2], so [F3] and $\gamma(x_j-x_k)=\gamma(x_j)\overline{\gamma(x_k)}$ give $$\sum_{j=1}^{n}\sum_{k=1}^{n}c_j\overline{c_k}\,\phi(x_j-x_k)=\int_{\widehat G}\sum_{j=1}^{n}\sum_{k=1}^{n}c_j\overline{c_k}\,\gamma(x_j)\overline{\gamma(x_k)}\,d\mu(\gamma)=\int_{\widehat G}\Bigl|\sum_{j=1}^{n}c_j\gamma(x_j)\Bigr|^{2}\,d\mu(\gamma)\ge0,$$ the last inequality because the integrand is a nonnegative measurable function. For $n=0$ the sum is $0$. Hence $\phi$ is positive definite. [F1, F2, F3, algebra]

2.1 Suppose first that $\mu(\widehat G)=0$; then $\phi(x)=0$ for every $x$ by step 1.1, so $\phi$ is uniformly continuous. If $\mu(\widehat G)>0$, let $\varepsilon>0$ and use [F2] with the open set $\widehat G$ to choose a compact $K\subseteq\widehat G$ with $\mu(\widehat G\setminus K)<\varepsilon/4$; put $\delta:=\varepsilon/(2\mu(\widehat G))$. Consider all pairs $(W,U)$ with $W$ open in $\widehat G$, $U$ an open identity neighbourhood in $G$, and $|\eta(x)-1|<\delta/2$ for $\eta\in W$, $x\in U$. Joint continuity [F3] gives such a pair with each prescribed $\gamma_0\in K$ inside $W$. Their first coordinates cover $K$, so compactness gives finitely many pairs $(W_i,U_i)$ covering it. Put $U=\bigcap_iU_i$, or $U=G$ if the finite cover is empty. Then $|\gamma(x)-1|<\delta/2$ for every $\gamma\in K$ and $x\in U$, without choosing neighborhoods separately for every point of $K$. [F1, F2, F3]

3.1 For $x\in U$ from step 2.1, $|\gamma(x)-1|\le2$ by [F1], so [F2] and the linearity and triangle inequality of the integral give $$|\phi(x)-\phi(0)|\le\int_{K}|\gamma(x)-1|\,d\mu+\int_{\widehat G\setminus K}|\gamma(x)-1|\,d\mu<\tfrac{\delta}{2}\,\mu(K)+2\,\mu(\widehat G\setminus K)\le\tfrac{\varepsilon}{4}+\tfrac{\varepsilon}{2}<\varepsilon .$$ [F1, F2, step 1.1, step 2.1]

4.1 For arbitrary $h,x\in G$, $|\gamma(h+x)-\gamma(h)|=|\gamma(h)\gamma(x)-\gamma(h)|=|\gamma(x)-1|$ by [F1], and subtraction under the integral together with [F2] gives $$|\phi(h+x)-\phi(h)|=\Bigl|\int_{\widehat G}\gamma(h)\bigl(\gamma(x)-1\bigr)\,d\mu(\gamma)\Bigr|\le\int_{\widehat G}|\gamma(x)-1|\,d\mu(\gamma)<\varepsilon$$ whenever $x\in U$, where the final inequality repeats the estimate of step 3.1; the bound does not depend on $h$, so $\phi$ is uniformly continuous. With step 1.2 and step 1.1, $\phi$ is a continuous positive definite function with $\phi(0)=\mu(\widehat G)=\|\mu\|$. [F1, F2, F3, step 1.1, step 1.2, step 3.1] ∎ 