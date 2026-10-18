---
id: lem-it-finite-wyner-ziv-function-convexity-continuity
kind: lemma
title: "Convexity, monotonicity, and continuity of finite Wyner-Ziv rate"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-finite-wyner-ziv-code
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - lem-it-wyner-ziv-auxiliary-cardinality-bound
  - thm-heine-borel-rn
  - thm-it-finite-entropy-chain-rule
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; time sharing, finite maps, and compact stochastic-matrix sets are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aaron D. Wyner and Jacob Ziv, The Rate-Distortion Function for Source Coding with Side Information at the Decoder"
      url: "https://web.mit.edu/6.962/www/www_fall_2001/kusuma/wynerziv.pdf"
      locator: "Appendix, Theorem A2, pp. 9–10: convexity, continuity, and attainment."
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 12, Wyner-Ziv theorem, p. 17, nonincreasing convex continuous rate."
---

## Statement

Let $R_{\rm WZ}(D)$, $D_{\min}$, and $D_{\max}$ be as in [[def-it-finite-wyner-ziv-code]]. Then $D_{\min}\le D_{\max}$, $R_{\rm WZ}$ is nonincreasing and convex on $[D_{\min},\infty)$, $R_{\rm WZ}(D)=0$ for $D\ge D_{\max}$, and $R_{\rm WZ}$ is continuous at every feasible distortion, including $D_{\min}$ and $D_{\max}$.

## Facts & Assumptions

**Given:** The finite source law, bounded distortion, and the candidate single-letter function in the Definition.

[F1] [[def-it-finite-wyner-ziv-code]]: $D_{\min}=\mathbb E[\min_{\hat x}d(X,\hat x)]$, $D_{\max}=\min_{h:\mathcal Y\to\widehat{\mathcal X}}\mathbb E[d(X,h(Y))]$, and $R_{\rm WZ}(D)$ is the infimum over finite $U-X-Y$ test channels and deterministic maps $g(Y,U)$.

[F2] [[lem-it-wyner-ziv-auxiliary-cardinality-bound]]: every feasible test channel can be replaced without increasing $I(X;U|Y)$ by one with $|U|\le|\mathcal X|+1$, and the minimum is attained.

[F3] [[thm-it-finite-entropy-chain-rule]]: for finite variables, $I(X;U|Y)=H(X|Y)-H(X|U,Y)$ and all terms are finite.

[F4] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: entropy is a finite sum of terms $-p\ln p$, with $0\ln0=0$.

[F5] [[thm-heine-borel-rn]]: the closed channel simplexes for a fixed finite auxiliary alphabet are compact subsets of a finite-dimensional Euclidean space.

## Proof

1.1 For any map $h:\mathcal Y\to\widehat{\mathcal X}$ and every $(x,y)$, $d(x,h(y))\ge\min_{\hat x}d(x,\hat x)$; minimizing over the finite set of maps gives $D_{\min}\le D_{\max}$. The feasible test-channel sets are nested as $D$ increases, so their infima are nonincreasing. A constant auxiliary $U$ and a minimizing map $h$ at $D_{\max}$ have zero mutual information and distortion $D_{\max}$, proving $R_{\rm WZ}(D)=0$ for $D\ge D_{\max}$. [F1, algebra]

1.2 Let $D_1,D_2\ge D_{\min}$ and $0\le\lambda\le1$. By [F2], choose minimizing channels $(U_1,g_1)$ and $(U_2,g_2)$, whose distortions $d_1,d_2$ satisfy $d_j\le D_j$. Let an independent finite $Q$ select branch 1 with probability $\lambda$, set $U=(Q,U_Q)$, and use $g(Y,U)=g_Q(Y,U_Q)$. Then $U-X-Y$, the distortion $\lambda d_1+(1-\lambda)d_2$ is at most $\lambda D_1+(1-\lambda)D_2$, and the finite conditional chain rule gives $I(X;U|Y)=I(X;Q|Y)+I(X;U_Q|Y,Q)=\lambda R_{\rm WZ}(D_1)+(1-\lambda)R_{\rm WZ}(D_2)$ because $Q$ is independent of $(X,Y)$. Applying [F2] to reduce $U$ if necessary proves convexity. [F1, F2, F3, choose, construct]

2.1 On the interior of $[D_{\min},D_{\max}]$, write $s(a,b)=(R_{\rm WZ}(b)-R_{\rm WZ}(a))/(b-a)$. Convexity implies $s(a,b)\le s(b,c)$ whenever $a<b<c$, by writing $b$ as a convex combination of $a,c$. For $D_-<z<D$, this gives $s(D_-,z)\le s(z,D)$, hence $R_{\rm WZ}(z)\le\frac{D-z}{D-D_-}R_{\rm WZ}(D_-)+\frac{z-D_-}{D-D_-}R_{\rm WZ}(D)$; the right side tends to $R_{\rm WZ}(D)$ as $z\uparrow D$, while monotonicity gives $R_{\rm WZ}(z)\ge R_{\rm WZ}(D)$. For $D<z<D_+$, the inequalities $s(D_-,D)\le s(D,z)\le s(z,D_+)$ bound $R_{\rm WZ}(z)$ between two linear interpolations that both tend to $R_{\rm WZ}(D)$ as $z\downarrow D$. This proves continuity at $D$. For right continuity at $D_{\min}<D_{\max}$, let $r<R_{\rm WZ}(D_{\min})$ and let $K_j$ be the set of channels with $|\mathcal U|=|\mathcal X|+1$ and decoder maps whose distortion is at most $D_{\min}+1/j$ and whose objective is at most $r$. The union of the finitely many channel simplexes over decoder maps is compact by [F5]: each simplex is closed and bounded in a finite-dimensional Euclidean space, and a finite union of compact sets is compact. Each $K_j$ is closed because distortion and mutual information are continuous finite entropy functions by [F3]–[F4]. If every $K_j$ were nonempty, they would be nested closed subsets of this compact space with the finite intersection property: if their total intersection were empty, their open complements would cover the compact space and a finite subcover would force one $K_j$ empty. Thus their intersection is nonempty, yielding a channel feasible at $D_{\min}$ with objective at most $r$, contrary to $r<R_{\rm WZ}(D_{\min})$. It follows that $R_{\rm WZ}(D)>r$ on some right neighborhood of $D_{\min}$; since $R_{\rm WZ}(D)\le R_{\rm WZ}(D_{\min})$ by monotonicity, right continuity follows. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 For $D_{\min}\le D\le D_{\max}$ with $D_{\min}<D_{\max}$, time-share a minimum-distortion channel at $D_{\min}$ with the zero-rate channel at $D_{\max}$. This gives $R_{\rm WZ}(D)\le\frac{D_{\max}-D}{D_{\max}-D_{\min}}R_{\rm WZ}(D_{\min})$, so $R_{\rm WZ}(D)\to0$ as $D\uparrow D_{\max}$. Nonnegativity and the zero-rate branch in step 1.1 prove continuity there. If $D_{\min}=D_{\max}$, the zero-rate channel already attains the minimum distortion, so the feasible function is identically zero. Outside $[D_{\min},D_{\max}]$ the function is zero by step 1.1. [F1, step 1.1, step 2.1, algebra] ∎

