---
id: lem-ip-weighted-coefficient-spaces-are-hilbert
kind: lemma
title: Weighted coefficient spaces form a Hilbert scale
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-hilbert-space
  - def-separable-space
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-square-summable-sequences-form-a-hilbert-space
  - lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is assumed only through the published square-summable orthogonal-series and Parseval results used to identify coefficient norms and reconstruct vectors from their coordinates."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models (Cambridge University Press, 2016)"
      url: "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf"
      locator: "§4.2, orthonormal wavelet bases; §§4.3.4–4.3.5, coefficient norms for Besov spaces."
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§2.3, coefficient summability in Besov-prior regularity."
---

## Statement

Assume countable choice. Let $H_0$ be a separable real Hilbert space with a complete orthonormal basis indexed by the disjoint union of a finite set $I_*$ and the level indices $(\ell,k)$ with $\ell\ge0$ and $0\le k<2^\ell$. Write the basis vectors as $(e_i)_{i\in I_*}$ and $(e_{\ell k})$. For $r\ge0$, define
$$H_r:=\left\{x\in H_0:\sum_{i\in I_*}|\langle x,e_i\rangle_{H_0}|^2+\sum_{\ell\ge0}2^{2r\ell}\sum_{k<2^\ell}|\langle x,e_{\ell k}\rangle_{H_0}|^2<\infty\right\},$$
with inner product given by the corresponding weighted coefficient sum and norm squared
$$\|x\|_{H_r}^2:=\sum_{i\in I_*}|\langle x,e_i\rangle_{H_0}|^2+\sum_{\ell\ge0}2^{2r\ell}\sum_{k<2^\ell}|\langle x,e_{\ell k}\rangle_{H_0}|^2.$$
Then $H_r$ is a separable real Hilbert space. Its displayed basis is complete and orthogonal in $H_r$, with squared basis norms $1$ on the finite family and $2^{2r\ell}$ on level $\ell$, and the inclusion $H_r\hookrightarrow H_0$ is continuous with operator norm at most $1$.

## Statement references

[[def-countable-choice|countable choice, used by the cited countable-basis expansion results]]

[[def-hilbert-space|a Hilbert space is complete for its induced norm]]

[[def-separable-space|separability means an at most countable dense subset]]

[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis|an orthonormal basis has dense linear span and its coefficients determine vectors]]

[[def-square-summable-family-on-an-arbitrary-index-set|the square-summable coefficient norm]]

[[lem-square-summable-sequences-form-a-hilbert-space|real square-summable sequences form a Hilbert space]]

[[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums|square-summable coefficients reconstruct a vector from an orthonormal family]]

[[thm-parseval-equivalences-for-a-complete-orthonormal-family|Parseval's identity under countable choice]]

[Giné and Nickl, §§4.2–4.3.5, full book](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf)

[Dashti and Stuart, §2.3, full text](https://arxiv.org/pdf/1302.6989)

## Facts & Assumptions

**Given:** Countable choice, $H_0$, its finite orthonormal family and level-indexed orthonormal families, and $r\ge0$.

[A1] Countable choice is the principle that every countable family of nonempty sets has a choice function. [[def-countable-choice]]

[F1] Under countable choice, a complete orthonormal family satisfies Parseval's identity: the sum of squared coefficients of each vector equals its squared norm. [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]

[F2] Real square-summable sequences with their canonical inner product are complete and hence Hilbert. [[lem-square-summable-sequences-form-a-hilbert-space]]

[F3] Under countable choice, square-summable coefficients on an orthonormal family give a norm-convergent sum whose limit has those coefficients and the corresponding squared norm. [[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]]

[F4] A topological space is separable when it has an at most countable dense subset. [[def-separable-space]]

## Proof

**Given:** Countable choice, $H_0$, $(e_{\ell k})$, and $r\ge0$ as in the Statement.

1.1 Write $m=|I_*|$ and enumerate the basis by placing the finite family first, followed by $(\ell,k)$ at index $m+(2^\ell-1)+k$, since $2^\ell-1$ is the number of level indices below $\ell$. For $x\in H_r$, define $T_rx$ by $(T_rx)_t=\langle x,e_{i_t}\rangle_{H_0}$ for the finite coordinates and $(T_rx)_{m+(2^\ell-1)+k}=2^{r\ell}\langle x,e_{\ell k}\rangle_{H_0}$. Parseval [F1] gives $\|T_rx\|_{\ell^2}^2=\|x\|_{H_r}^2$, so $T_r$ is an isometry into real $\ell^2(\mathbb N)$. [A1, F1, given, construct, algebra]

2.1 Given $b\in\ell^2(\mathbb N,\mathbb R)$, set the finite-family coefficients equal to its first $m$ coordinates and put $a_{\ell k}=2^{-r\ell}b_{m+(2^\ell-1)+k}$. Since $r\ge0$, the sum of squares of all these coefficients is at most $\sum_n|b_n|^2<\infty$. By [F3], their orthonormal expansion converges in $H_0$ to a vector $x$ with those coefficients. Thus $x\in H_r$ and $T_rx=b$, so $T_r$ is onto. By [F2], the isometric pullback of the real $\ell^2$ inner product makes $H_r$ complete, and hence a real Hilbert space. [A1, F2, F3, step 1.1, given, construct, algebra]

3.1 The finite-support rational sequences form a countable subset of real $\ell^2$: each is encoded by a finite list of coordinate indices, integer numerators, and positive denominators, and such finite integer lists have an explicit natural-number encoding. Given $b\in\ell^2$ and $\varepsilon>0$, choose $N\ge1$ so that the norm of its tail after $N$ is below $\varepsilon/2$, then choose rationals $q_1,\dots,q_N$ with $|b_n-q_n|<\varepsilon/(2\sqrt N)$ for each $n\le N$. The finite-support rational sequence $q$ then satisfies $\|b-q\|_2<\varepsilon$, so these sequences are dense. Because $T_r$ is an isometric bijection by steps 1.1 and 2.1, their inverse images are a countable dense subset of $H_r$. Hence $H_r$ is separable by [F4]. [F4, step 1.1, step 2.1, algebra]

4.1 Each basis vector has a single nonzero coefficient, so its squared $H_r$ norm is $1$ on $I_*$ and $2^{2r\ell}$ on level $\ell$; distinct basis vectors are orthogonal under the weighted inner product. The finite-support coefficient vectors are dense by step 3.1, so the orthogonal family is complete in $H_r$. Finally Parseval [F1] gives $\|x\|_{H_0}^2=\sum_{i\in I_*}|\langle x,e_i\rangle|^2+\sum_{\ell,k}|\langle x,e_{\ell k}\rangle|^2\le\|x\|_{H_r}^2$ for $x\in H_r$, because $2^{2r\ell}\ge1$. Thus the inclusion has operator norm at most $1$. [A1, F1, step 3.1, given, algebra] ∎
