---
id: lem-a-reiter-net-has-an-invariant-mean-cluster-point
kind: lemma
title: A Reiter net has an invariant-mean cluster point
status: published
origin: pipeline
dependency_level: 3
deps:
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
  - def-amenable-locally-compact-group
  - def-reiter-condition-p1
  - def-complex-haar-l-infinity-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-left-haar-integral-and-left-haar-measure
  - def-essential-supremum-with-respect-to-a-measure
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-integral-triangle-inequality
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-dual-space-of-a-normed-space
  - def-weak-star-topology
  - def-directed-set-and-net
  - def-net-convergence-and-cluster-point
  - thm-banach-alaoglu
  - thm-ultrafilter-lemma
  - thm-compactness-via-nets-filters-and-ultrafilters
  - thm-net-cluster-point-iff-convergent-subnet
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - def-measure-preserving-transformation-and-system
proof_strategy: direct
axiom_use: Assume the ultrafilter lemma, used through Banach–Alaoglu for weak-star compactness of the dual unit ball and through the compactness characterization for cluster points. No further choice principle is used; the separate theorem deriving the ultrafilter lemma from AC is not assumed here.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, Theorem G.3.1, implication (iv) to (v), printed pp. 454–455; a weak-star limit point of Reiter densities is invariant"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 19: Reiter's Property and the Folner Condition"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture19_2012_Reiter.pdf"
      locator: "The L1-to-L-infinity-dual pairing by integration, slides 5–7, file pp. 5–7; the cluster-point assertion is not attributed to these slides"
    - title: "Matthew Daws and Volker Runde, Reiter's properties (P1) and (P2) for locally compact quantum groups, arXiv:0705.3432v5"
      url: "https://arxiv.org/pdf/0705.3432v5"
      locator: "Introduction, printed p. 1, after equation (1): each weak-star accumulation point of an asymptotically invariant L1 probability net is a left-invariant mean"
---

## Statement

Assume the ultrafilter lemma. Let $G$ be a locally compact Hausdorff group with
fixed left Haar measure $\mu$, and let $(f_i)_{i\in I}$ be a Reiter net on $G$
as in [[def-reiter-condition-p1]]. Define
$$\lambda_{f_i}(\varphi):=\int_G f_i\varphi\,d\mu\qquad(\varphi\in L^\infty(G)).$$
Then $(\lambda_{f_i})$ has a weak-star cluster point $m$ in
$L^\infty(G)^*$. Every such cluster point is a left-invariant mean on
$L^\infty(G)$, so Reiter's condition (P1) implies that $G$ is amenable
([[def-amenable-locally-compact-group]]).

## Facts & Assumptions

**Given:** The ultrafilter lemma, a locally compact Hausdorff group $G$ with
fixed left Haar measure $\mu$, and a net $(f_i)$ in the probability densities
$\mathcal P$ satisfying Reiter's compact-uniform translation condition.

[A1] The ultrafilter lemma is assumed exactly as stated; Banach–Alaoglu and the
compactness-to-net-cluster-point implication use this principle
([[thm-ultrafilter-lemma]], [[thm-banach-alaoglu]],
[[thm-compactness-via-nets-filters-and-ultrafilters]]).

[F1] $L^\infty(G)$ is a complex normed space of almost-everywhere classes with
the essential-supremum norm; its dual consists of bounded complex-linear
functionals, and weak-star convergence is pointwise convergence on
$L^\infty(G)$ ([[def-complex-haar-l-infinity-space]],
[[def-dual-space-of-a-normed-space]], [[def-weak-star-topology]]).

[F2] For $f\in\mathcal P$, $f\ge0$ and $\int_G f\,d\mu=\|f\|_1=1$; for every
$\varphi\in L^\infty(G)$ and $\eta>0$, $|\varphi|\le\|\varphi\|_\infty+\eta$
almost everywhere. The integral is complex-linear, monotone on nonnegative
functions, and satisfies the integral triangle inequality
([[def-reiter-condition-p1]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]],
[[def-complex-haar-l-infinity-space]],
[[def-integrable-real-and-complex-functions-and-their-integrals]],
[[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[thm-integral-triangle-inequality]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F3] Left translations preserve Haar measure, so the substitution $x=gy$ in a
Haar integral is valid; the Reiter net satisfies
$\|L_hf_i-f_i\|_1\to0$ for every fixed $h\in G$
([[def-left-haar-integral-and-left-haar-measure]],
[[def-measure-preserving-transformation-and-system]],
[[thm-integrals-are-invariant-under-measure-preserving-maps]],
[[def-reiter-condition-p1]]).

[F4] The closed dual unit ball of a normed space is weak-star compact under the
ultrafilter lemma. In a compact space every net has a cluster point, and each
cluster point of a net is the limit of a subnet
([[thm-banach-alaoglu]],
[[thm-compactness-via-nets-filters-and-ultrafilters]],
[[thm-net-cluster-point-iff-convergent-subnet]]).

[F5] A mean on $L^\infty(G)$ is a positive complex-linear functional with
$m(1_G)=1$, and it is left-invariant when $m(L_g\varphi)=m(\varphi)$ for every
$g$ and $\varphi$ ([[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]]).

[F6] Amenability of $G$ means that such a left-invariant mean exists
([[def-amenable-locally-compact-group]]).

## Proof

**Proof technique:** direct.

1.1 For each $i$, define $\lambda_{f_i}(\varphi)=\int_Gf_i\varphi\,d\mu$ on $L^\infty(G)$. This is independent of representatives because changing either factor on a null set changes the product only almost everywhere. For each $\eta>0$, [F2] and positivity of $f_i$ give $|f_i\varphi|\le f_i|\varphi|\le f_i(\|\varphi\|_\infty+\eta)$ almost everywhere, so $f_i\varphi$ is integrable and $|\lambda_{f_i}(\varphi)|\le\int_Gf_i|\varphi|\,d\mu\le(\|\varphi\|_\infty+\eta)\|f_i\|_1=\|\varphi\|_\infty+\eta$. Letting $\eta\downarrow0$ proves boundedness with norm at most one. Linearity of the integral makes $\lambda_{f_i}$ complex-linear, so it lies in the closed dual unit ball of $L^\infty(G)^*$. [F1, F2]

1.2 By [A1] and [F4], the dual unit ball is weak-star compact and the net $(\lambda_{f_i})$ has a weak-star cluster point. Fix any cluster point $m$; [F4] supplies a subnet $(\lambda_{f_{i_j}})$ converging weak-star to $m$. For each $\varphi\ge0$, every $\lambda_{f_{i_j}}(\varphi)=\int f_{i_j}\varphi\,d\mu$ is nonnegative, so continuity of evaluation in the weak-star topology gives $m(\varphi)\ge0$. Also $\lambda_{f_{i_j}}(1_G)=\int f_{i_j}\,d\mu=1$ for every $j$, hence $m(1_G)=1$. Since $m\in L^\infty(G)^*$ already, it is a mean by [F5]. [A1, F1, F2, F4, F5]

2.1 Fix $g\in G$ and $\varphi\in L^\infty(G)$. Left invariance of Haar measure, with $x=gy$, gives $\lambda_{f_i}(L_g\varphi)=\int_G f_i(x)\varphi(g^{-1}x)\,d\mu(x)=\int_G f_i(gy)\varphi(y)\,d\mu(y)=\lambda_{L_{g^{-1}}f_i}(\varphi)$. Therefore $|\lambda_{f_i}(L_g\varphi)-\lambda_{f_i}(\varphi)|\le\|L_{g^{-1}}f_i-f_i\|_1\|\varphi\|_\infty\to0$ by [F2, F3] and the Reiter condition on the compact singleton $\{g^{-1}\}$. Along the subnet from step 1.2, weak-star convergence makes the left difference converge to $|m(L_g\varphi)-m(\varphi)|$, which must consequently be zero. As $g$ and $\varphi$ were arbitrary, $m$ is left-invariant by [F5]. [F1, F3, F5, step 1.2]

3.1 Steps 1.2 and 2.1 prove that the net has a cluster point and every cluster point is a left-invariant mean. If $G$ satisfies Reiter's condition, its equivalent net formulation [F2] supplies such a Reiter net; the cluster-point mean then witnesses amenability by [F6]. [F2, F6, step 1.2, step 2.1] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G, Theorem G.3.1, implication (iv) to
(v), states that a weak-star limit point of Reiter densities is invariant.
Thomas, Lecture 19, slides 5–7, records the $L^1$-to-dual pairing by
integration. Daws–Runde, Introduction, printed p. 1 after equation (1),
explicitly states that each weak-star accumulation point of an asymptotically
invariant $L^1$-probability net is a left-invariant mean. The present proof
supplies the complex-functional well-definedness, the exact Haar substitution,
and the ultrafilter-lemma assumption at the dual-ball compactness step.
