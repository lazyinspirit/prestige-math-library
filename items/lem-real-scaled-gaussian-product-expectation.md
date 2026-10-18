---
id: lem-real-scaled-gaussian-product-expectation
kind: lemma
title: Real scaled-Gaussian spectral and Frobenius product bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, lem-finite-real-gaussian-increment-comparison, thm-jensen-inequality-for-expectation, def-countable-choice, thm-dominated-convergence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Proposition 10.1 and Appendix A.1"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "S. Chevet, Séries de variables aléatoires gaussiennes..., Lemma 3.1"
      url: "https://www.numdam.org/item/SAF_1977-1978____A14_0.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $a,r,s,b$ be positive integers, let $S\in\mathbb R^{a\times r}$ and $T\in\mathbb R^{s\times b}$ be fixed,
and let $G\in\mathbb R^{r\times s}$ have independent standard real Gaussian
entries. Then
$$\mathbb E\|SGT\|_F^2=\|S\|_F^2\|T\|_F^2,\qquad \mathbb E\|SGT\|_2\le\|S\|_2\|T\|_F+\|S\|_F\|T\|_2.$$
The spectral estimate in this lemma is real-field only.

## Facts & Assumptions

**Given:** Countable Choice for the finite Gaussian law, and fixed compatible real matrices $S,T$ and an iid standard real Gaussian matrix $G$.

[F1] The entries of $G$ are independent standard real Gaussians ([[def-standard-real-and-normalized-complex-gaussian-matrix-law]]).

[F2] Finite centered Gaussian families whose increment variances are ordered have ordered expected maxima ([[lem-finite-real-gaussian-increment-comparison]]).

[F3] For an integrable real random variable $X$ and a convex real function $\varphi$ on an interval containing its almost-everywhere range, Jensen's inequality applies when $\varphi(X)$ is integrable or nonnegative ([[thm-jensen-inequality-for-expectation]]).

[F4] Almost-everywhere convergence under one integrable absolute majorant permits passage of expectations to the limit ([[thm-dominated-convergence]]).

[A1] Countable Choice supplies the Lebesgue measures for the finite Gaussian expectations ([[def-countable-choice]]).

## Proof

1.1 Write $(SGT)_{\alpha\beta}=\sum_{i=1}^r\sum_{j=1}^sS_{\alpha i}G_{ij}T_{j\beta}$. Expanding gives $\mathbb E\|SGT\|_F^2=\sum_{\alpha=1}^a\sum_{\beta=1}^b\sum_{i,u=1}^r\sum_{j,v=1}^sS_{\alpha i}T_{j\beta}S_{\alpha u}T_{v\beta}\mathbb E(G_{ij}G_{uv})$. Independence, zero means, and unit variances give $\mathbb E(G_{ij}G_{uv})=\mathbf1_{i=u}\mathbf1_{j=v}$, so this reduces to $\sum_{\alpha,\beta,i,j}S_{\alpha i}^2T_{j\beta}^2=(\sum_{\alpha,i}S_{\alpha i}^2)(\sum_{j,\beta}T_{j\beta}^2)=\|S\|_F^2\|T\|_F^2$. [given, F1, A1, algebra]

1.2 For unit vectors $x\in\mathbb R^a,y\in\mathbb R^b$, set $u=S^Tx$, $v=Ty$, $U=\|u\|$, $V=\|v\|$, and define centered Gaussian processes $X_{xy}=u^TGv+zUV$ and $Y_{xy}=Vg^Tu+Uh^Tv$, where $z\in\mathbb R$, $g\in\mathbb R^r$, and $h\in\mathbb R^s$ are independent standard real Gaussian variables/vectors, independent of $G$. For a second pair $(x',y')$, write $u'=S^Tx'$, $v'=Ty'$, $U'=\|u'\|$, $V'=\|v'\|$, $c=u^Tu'$, and $d=v^Tv'$. At each index both processes have variance $2U^2V^2$, and their cross-covariances are $\operatorname{Cov}(X_{xy},X_{x'y'})=cd+UU'VV'$ and $\operatorname{Cov}(Y_{xy},Y_{x'y'})=cVV'+UU'd$. The difference is $(UU'-c)(VV'-d)\ge0$ by Cauchy–Schwarz; subtracting twice the covariance from the sum of the two variances gives $\mathbb E(X_{xy}-X_{x'y'})^2\le\mathbb E(Y_{xy}-Y_{x'y'})^2$. [given, F1, algebra]

2.1 Apply [F2] to increasing finite subsets of normalized rational vectors in the product of unit spheres. They are dense; both sample paths are continuous, and their absolute suprema are bounded by $\|S\|_2\|T\|_2(\|G\|_F+|z|)$ for $X$ and $\|T\|_2\|Sg\|_2+\|S\|_2\|T^Th\|_2$ for $Y$. These bounds are integrable because independence and unit coordinate variances give $\mathbb E\|G\|_F^2=rs$, $\mathbb E z^2=1$, $\mathbb E\|Sg\|_2^2=\|S\|_F^2$, and $\mathbb E\|T^Th\|_2^2=\|T\|_F^2$. Dominated convergence [F4] passes the finite comparisons to the full spheres. For fixed $G$, $z\mapsto\sup_{x,y}(u^TGv+zUV)$ is convex with integrable growth, so Jensen [F3] gives $\mathbb E_z\sup_{x,y}X_{xy}\ge\sup_{x,y}\mathbb E_zX_{xy}=\sup_{x,y}u^TGv=\|SGT\|_2$. [step 1.2, F2, F3, F4, A1, algebra]

3.1 For every unit $x,y$, $Y_{xy}\le\|T\|_2\|Sg\|_2+\|S\|_2\|T^Th\|_2$. Taking suprema and expectations, [F3] applied to the convex square gives $\mathbb E\|Sg\|_2\le(\mathbb E\|Sg\|_2^2)^{1/2}=\|S\|_F$ and $\mathbb E\|T^Th\|_2\le\|T\|_F$. Combining with step 2.1 proves the spectral estimate. [step 2.1, F1, F3, algebra] ∎
