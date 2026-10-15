---
id: lem-hellinger-distance-controls-l1-and-total-variation
kind: lemma
title: "Hellinger distance is a metric and controls L1 and total variation"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-hellinger-distance-between-density-laws
  - def-total-variation-distance-for-probability-laws
  - thm-minkowski-inequality-for-integrals
  - thm-holder-inequality-for-integrals
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Ghosal, Ghosh and van der Vaart, Convergence rates of posterior distributions, §2"
      url: "https://doi.org/10.1214/aos/1016218228"
    - title: "Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §2.5"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
    - title: "Kleijn, Bayesian Statistics for Frequentists, §6.4"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf"
---

## Statement

For probability densities $p,q$ relative to one fixed measure $\mu$, define $h$ as in [[def-hellinger-distance-between-density-laws]] and set $d_1(P,Q):=\int|p-q|\,d\mu$. Then $h$ is a metric on the induced probability laws and
$$h(P,Q)^2\le d_1(P,Q)=2\lVert P-Q\rVert_{\rm TV},\qquad d_1(P,Q)\le2h(P,Q),$$
where library total variation is the event supremum $\lVert P-Q\rVert_{\rm TV}=\sup_{A\in\mathcal A}|P(A)-Q(A)|$.

## Facts & Assumptions

**Given:** A measure space $(\mathsf X,\mathcal A,\mu)$ and nonnegative measurable densities $p,q$ with integrals one; let $P,Q$ be their induced probability laws.

[F1] [[def-hellinger-distance-between-density-laws]]: $h(P,Q)=\lVert\sqrt p-\sqrt q\rVert_2$ for this fixed dominating measure.

[F2] [[thm-minkowski-inequality-for-integrals]]: for $L^2(\mu)$ functions, $\lVert f+g\rVert_2\le\lVert f\rVert_2+\lVert g\rVert_2$.

[F3] [[thm-holder-inequality-for-integrals]]: $\int|fg|\,d\mu\le\lVert f\rVert_2\lVert g\rVert_2$ when both functions are in $L^2(\mu)$.

[F4] [[def-total-variation-distance-for-probability-laws]]: $\lVert P-Q\rVert_{\rm TV}=\sup_{A\in\mathcal A}|P(A)-Q(A)|$.

[F5] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative measurable function has zero integral exactly when it vanishes $\mu$-almost everywhere.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: integration is linear for integrable functions; here $p-q\in L^1(\mu)$ because $|p-q|\le p+q$, both densities integrate to one, and [F9] plus [F10] bound the integral of $p+q$ by $2$.

[F7] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: sums, differences, products, and absolute values of measurable functions are measurable.

[F8] [[thm-composition-with-borel-functions-preserves-measurability]]: Borel functions of measurable real-valued functions are measurable; in particular this applies to square root on $[0,\infty)$, the sign function, and threshold indicators.

[F9] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral preserves pointwise order.

[F10] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the nonnegative integral is additive on nonnegative measurable functions.

## Proof

1.1 Since $p,q$ are measurable, [F8] makes $\sqrt p,\sqrt q$ measurable and [F7] makes their difference and absolute value measurable. Their unit integrals put both roots in $L^2(\mu)$. The triangle inequality in [F2] gives symmetry, nonnegativity, and the triangle inequality for $h$. If $h(P,Q)=0$, [F5] gives $\sqrt p=\sqrt q$ almost everywhere, hence $p=q$ almost everywhere and $P=Q$. Conversely, put $g=p-q\in L^1(\mu)$ by [F6]. If $P=Q$, then for every measurable $A$, $\int g\mathbf1_A\,d\mu=\int p\mathbf1_A\,d\mu-\int q\mathbf1_A\,d\mu=P(A)-Q(A)=0$ by [F6]. For each integer $m\ge1$, the set $E_m:=\{g\ge1/m\}$ is measurable by [F8]. Define $u_m:=g\mathbf1_{E_m}$; it is nonnegative and measurable by [F7], and linearity gives $\int u_m\,d\mu=0$. By [F5], $u_m=0$ almost everywhere; since $u_m\ge1/m$ on $E_m$, $\mu(E_m)=0$. Applying the same argument to $(q-p)\mathbf1_{\{q-p\ge1/m\}}$ shows $\mu(\{g\le-1/m\})=0$. Since $\{g\ne0\}$ is the countable union of these null sets, $p=q$ almost everywhere and $h(P,Q)=0$. Thus $h$ is a metric on these laws. [F1, F2, F5, F6, F7, F8, F9, F10, given, algebra]

1.2 Put $g:=p-q$ and $A:=\{x:g(x)\ge0\}$, which is measurable by [F7, F8]. Since $\int g\,d\mu=0$, the positive and negative parts have equal integral, so $\int_Ag\,d\mu=\frac12\int|g|\,d\mu$. For every measurable $B$, positivity of $g$ on $A$ and nonpositivity on $A^c$, together with monotonicity [F9], give $\int_{A^c}g\le\int_Bg\le\int_Ag$; equality in the absolute supremum is attained at $A$ (or $A^c$). Thus [F4] gives $\lVert P-Q\rVert_{\rm TV}=\frac12d_1(P,Q)$. [F4, F7, F8, F9, F10, given, algebra]

1.3 The functions in the pointwise inequality are measurable by [F7, F8]. If $p\ge q$, then $(\sqrt p-\sqrt q)^2\le p-q$, because $0\le(\sqrt p-\sqrt q)/(\sqrt p+\sqrt q)\le1$ when the denominator is positive; the case $q\ge p$ is symmetric, and when both vanish the inequality is zero on both sides. Monotonicity [F9] and [F1] give $h(P,Q)^2\le d_1(P,Q)$. [F1, F7, F8, F9, given, algebra]

2.1 By [F7, F8], the displayed products and sums of square roots are measurable. Factor $|p-q|=|\sqrt p-\sqrt q|(\sqrt p+\sqrt q)$. By [F3], $d_1(P,Q)\le h(P,Q)\lVert\sqrt p+\sqrt q\rVert_2$. Also $\lVert\sqrt p+\sqrt q\rVert_2^2=2+2\int\sqrt{pq}\,d\mu\le4$, again by [F3] and the unit $L^2$ norms. Hence $d_1(P,Q)\le2h(P,Q)$, and step 1.2 gives $\lVert P-Q\rVert_{\rm TV}\le h(P,Q)$. [F1, F3, F7, F8, F9, step 1.1, step 1.2, algebra] ∎
