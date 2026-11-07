---
dependency_level: 0
id: lem-mixing-uniformity-for-compact-quotient-families
kind: lemma
title: "Uniform mixing over compact quotient parameter families"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock, Badly approximable systems of affine forms"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§2.1; local smooth-measure and compact-family arguments are supplied below"
---

## Statement

Assume Countable Choice. Let $G$ be a finite-dimensional real Lie group, $\Gamma$ a discrete subgroup, and $\Omega=G/\Gamma$ with a $G$-invariant Borel probability $\bar\mu$. This measure is smooth in quotient charts, and there is a smooth left-and-right invariant density $m$ on $G$ normalized so $\bar\mu(Ax)=m(A)$ whenever $g\mapsto gx$ is injective on the Borel set $A$.

Suppose a one-parameter subgroup $a_t$ acts mixingly on $\Omega$. Let $Q\subset\Omega$ be compact, let $U\subset G$ be relatively compact Borel with $m(\partial U)=0$, and suppose $g\mapsto gx$ is injective on $U$ for every $x\in Q$. For every Borel $K\subset\Omega$,
$$\sup_{x\in Q}|\bar\mu(a_tUx\cap K)-m(U)\bar\mu(K)|\longrightarrow0\qquad(t\to\infty).$$
For $Q=\varnothing$, the displayed supremum of the nonnegative error is interpreted as0. No rate of mixing and no general full-Choice Haar translation-continuity theorem is assumed.

## Statement references

[Kleinbock, Proposition 2.1](https://arxiv.org/pdf/math/9808057v2) — compact-family mixing uniformity.

## Facts & Assumptions

**Given:** Countable Choice, $G,\Gamma,\Omega,\bar\mu,a_t,Q,U,K$ as stated. Lie groups and manifolds use the second-countable convention.

[F1] Fubini applies to integrable functions for sigma-finite measures; on compact coordinate pieces the bounded functions used below are integrable. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F2] Dominated convergence applies with an integrable majorant. [[thm-dominated-convergence]]

[F3] Under Countable Choice, smooth Euclidean changes of variables transform nonnegative integrals by their absolute Jacobians. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[A1] Countable Choice is assumed for the conditional Lie, integration, measure or dimension suppliers actually invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** construct the smooth quotient measure locally, then use an $L^2$-compact family and finite nets.

1.1 If $G$ is zero-dimensional it is discrete. Invariance on the transitive countable discrete quotient forces finitely many points, all of equal mass. Scaled counting measure on $G$ gives the asserted density, and compact $Q$ is finite, so pointwise mixing is automatically uniform over it. This proves that case; suppose henceforth the dimension is positive. A discrete subgroup is closed: choose an identity neighbourhood $W$ with $W^{-1}W\cap\Gamma=\{e\}$; a small translate of $W$ contains at most one subgroup point, so any closure point equals that point. Discreteness gives small group neighbourhoods projecting injectively to $G/\Gamma$, with smooth transitions given by right translations. The right action is proper on compact sets, since $L^{-1}K\cap\Gamma$ is finite for compact $K,L$. A countable group atlas supplies countably many injective quotient pieces. Define a measure $\widetilde m$ on $G$ by integrating the number of points in each fibre lying in a Borel set. This counting function is measurable: partition $G$ into disjoint Borel pieces in the countably many injective charts, and sum the indicators of their quotient images. The definition is independent of the partition. It is locally finite by a finite injective cover of each compact set, sigma-finite by a countable compact chart exhaustion, and left invariant by $G$ invariance of $\bar\mu$. Every nonempty quotient open set has positive measure: otherwise countably many translates covering the transitive second-countable quotient would give total measure zero. Thus $\widetilde m$ is nonzero. [given, construct, algebra, A1]

2.1 Translate one positive density at the identity to obtain a smooth left-invariant density $\omega$ on $G$. In countably many charts F3 defines its integral. Right translation satisfies $R_g^*\omega=\delta(g)\omega$ for the smooth positive character $\delta(g)=|\det\operatorname{Ad}_g|^{-1}$, by differentiating left-trivialized tangent vectors. Choose a nonnegative smooth compactly supported function $\phi$ with $\int\phi\,d\omega=1$. Left invariance of $\widetilde m$, F1, and substitution $z=hg$ in the $\omega$ integral give, for every relatively compact Borel set $A$, $\widetilde m(A)=\int_A b(z)\,d\omega(z),\qquad b(z)=\int_G\phi(zg^{-1})\delta(g)^{-1}\,d\widetilde m(g).$ All integrals here are over compact product regions after localization, so F1 is applicable even before smoothness of $\widetilde m$ is known. [F1, F3, step 1.1, construct, algebra]

3.1 The function $b$ is smooth: over a compact set of $z$, the relevant $g$ lie in a fixed compact set, the integrand and each of its derivatives are bounded there, and F2 permits successive differentiation under the finite measure integral. Since both $\widetilde m$ and $\omega$ are left invariant, the preceding density equality gives $b(hz)=b(z)$ almost everywhere for each $h$. Smoothness and positivity of $\omega$ make this equality hold everywhere. Thus $b$ is one positive constant and $\widetilde m$ is a smooth left-invariant density. Its lift-counting definition is invariant under right $\Gamma$, so $\delta(\gamma)=1$ for every $\gamma\in\Gamma$. [F2, step 1.1, step 2.1, algebra]

4.1 Therefore $g\Gamma\mapsto\log\delta(g)$ is a well-defined Borel function on $\Omega$. Its probability distribution is invariant under addition of $\log\delta(h)$ for every $h\in G$. A probability on $\mathbb R$ cannot be invariant under a nonzero translation: the half-open intervals of that length partition $\mathbb R$, have equal masses, and their countable sum cannot be1. Hence $\delta(h)=1$ for all $h$, proving unimodularity. Set $m=\widetilde m$. The lift definition gives local quotient smoothness and $\bar\mu(Ax)=m(A)$ for injective $A$, because $\pi_x(A)=\pi_e(Ak)$ for a representative $x=k\Gamma$ and $m$ is now right invariant. [step 1.1, step 3.1, algebra]

5.1 For $k\to e$, the indicators $\mathbf1_{Uk}$ converge to $\mathbf1_U$ pointwise outside $\partial U$, and have support in one compact set. F2 gives $m(Uk\mathbin\triangle U)\to0$. For nearby $x=kx_0$ in $Q$, the quotient image bound $\bar\mu(\pi_{x_0}(A))\le m(A)$ and the injectivity hypotheses give $\bar\mu(Ux\mathbin\triangle Ux_0)\le m(Uk\mathbin\triangle U)\to0$. Local quotient sections provide such $k\to e$ when $x\to x_0$. Thus $x\mapsto\mathbf1_{Ux}$ is continuous from $Q$ to $L^2(\bar\mu)$, since its squared norm difference is that symmetric-difference measure. Its image is compact and has finite nets of any prescribed radius. [F2, step 1.1, step 4.1, algebra]

6.1 For each element $f_j$ of a finite $L^2$ net for that image, mixing gives $\langle\pi(a_t)f_j,\mathbf1_K\rangle\to m(U)\bar\mu(K)$, where $\pi(g)f(z)=f(g^{-1}z)$. All net elements may be chosen from the image and have integral $m(U)$ by step 4.1. Measure preservation and $|\mathbf1_K|\le1$ bound the error made by replacing any $\mathbf1_{Ux}$ by its net element by the measure of their symmetric difference, the square of their $L^2$ distance. A common large $t$ works for the finitely many net elements. Letting the net radius tend to zero proves the uniform limit. [given, step 4.1, step 5.1, algebra] ∎

