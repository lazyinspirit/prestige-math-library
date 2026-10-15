---
id: thm-hellinger-tv-comparison-under-library-convention
kind: theorem
title: "Hellinger invariance and comparison with library total variation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-hellinger-distance-for-dominated-laws
  - def-total-variation-distance-for-probability-laws
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-probability-measure
  - thm-holder-inequality-for-integrals
  - def-axiom-of-choice
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
  - thm-integration-against-a-density
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
proof_strategy: direct
axiom_use: "AC is used through the general likelihood-density convention to supply finite-valued representatives. The proof then uses the supplied densities and finite measure calculations."
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
    - title: "B. J. K. Kleijn, Lectures on Nonparametric Bayesian Statistics, §8.1 equation (8.2) and §9.4 Lemma 9.8"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
---

## Statement

Assume AC for the imported density-representative convention. Let $P,Q$ be probability laws on a measurable space, both dominated by one specified common sigma-finite positive measure. Then the root-L2 Hellinger distance from [[def-hellinger-distance-for-dominated-laws]] is independent of the choice of common dominating measure. With the library convention $\lVert P-Q\rVert_{\mathrm{TV}}:=\sup_{A}|P(A)-Q(A)|$ from [[def-total-variation-distance-for-probability-laws]],

$$\lVert P-Q\rVert_{\mathrm{TV}}\le h(P,Q),\qquad h(P,Q)^2\le 2\lVert P-Q\rVert_{\mathrm{TV}}.$$

## Facts & Assumptions

**Given:** Probability laws $P,Q$ with a specified common sigma-finite dominating measure. The conclusions are the common-measure invariance and both displayed inequalities.

[A1] Assume the Axiom of Choice for the general density-selection convention in [[def-likelihood-density]]. After finite-valued density representatives are supplied, the calculations use no further choice. [[def-axiom-of-choice]]

[F1] For finite-valued nonnegative density representatives $p,q$ against a common measure $\mu$, $h(P,Q)^2=\int(\sqrt p-\sqrt q)^2\,d\mu$. [[def-hellinger-distance-for-dominated-laws]]

[F2] The library total-variation distance is $\sup_A|P(A)-Q(A)|$, with no factor $1/2$ in the event supremum. [[def-total-variation-distance-for-probability-laws]]

[F3] A common dominating measure is sigma-finite and satisfies $P,Q\ll\mu$. [[def-dominated-statistical-experiment]]

[F4] Under AC, a law dominated by the specified sigma-finite measure has a finite-valued nonnegative measurable density representative. [[def-likelihood-density]]

[F5] For square-integrable real functions $f,g$, $\int|fg|\,d\mu\le\|f\|_2\|g\|_2$. [[thm-holder-inequality-for-integrals]]

[F6] A finite measure is sigma-finite, and a sigma-finite measure has a countable finite-measure exhaustion. [[def-finite-sigma-finite-and-semifinite-measures]]

[F7] Sums, products, scalar multiples, and lattice operations of finite real-valued measurable functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F8] A set defined by a real threshold of a measurable real-valued function is measurable. [[thm-threshold-characterisations-of-real-and-extended-real-measurability]]

[F9] For nonnegative measurable $f,g$, the density measure satisfies $\int g\,d(f\,d\mu)=\int gf\,d\mu$. [[thm-integration-against-a-density]]

[F10] The nonnegative integral is additive, monotone and homogeneous. [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [A1], [F3], and [F4], take finite-valued nonnegative densities $p=dP/d\mu$ and $q=dQ/d\mu$ for a common sigma-finite dominator $\mu$. Define $\rho(A):=P(A)+Q(A)$. For disjoint measurable $A_k$, countable additivity of $P,Q$ and regrouping nonnegative series give $\rho(\bigcup_kA_k)=\sum_k\rho(A_k)$; also $\rho(\varnothing)=0$ and $\rho(\mathsf X)=2$. Thus $\rho$ is a finite, hence sigma-finite, measure by [F6]. Additivity of the nonnegative integral [F10] gives $\rho(A)=\int_A(p+q)\,d\mu$, with $p+q$ measurable by [F7]. [A1, F3, F4, F6, F7, F10, given]


1.2 Using $p,q$ against $\mu$, the set $B:=\{p\ge q\}$ is measurable by [F7,F8]. On $B$, $p=(p-q)+q$, so additivity [F10] gives $\delta:=P(B)-Q(B)=\int_B(p-q)\,d\mu\ge0$. On $B^c$, $q=(q-p)+p$ and the total masses are one, hence $\int_{B^c}(q-p)\,d\mu=Q(B^c)-P(B^c)=\delta$. Additivity then gives $\int|p-q|\,d\mu=2\delta$. For any measurable $A$, the difference on $A\cap B$ lies in $[0,\delta]$ by monotonicity [F10], while the difference on $A\cap B^c$ lies in $[-\delta,0]$; thus $|P(A)-Q(A)|\le\delta$, and $A=B$ attains $\delta$. Therefore [F2] gives $\lVert P-Q\rVert_{\mathrm{TV}}=\delta=\tfrac12\int|p-q|\,d\mu$. [F2, F3, F4, F7, F8, F10, algebra]


2.1 On $\{p+q>0\}$ define $\bar p=p/(p+q)$ and $\bar q=q/(p+q)$, and set both to zero on $\{p+q=0\}$. For $r<0$, $\{\bar p>r\}$ is the whole space; for $r\ge0$, it is $\{p+q>0\}\cap\{p-r(p+q)>0\}$. Thus [F7,F8] make $\bar p$ measurable, and the same argument applies to $\bar q$. Since $p=q=0$ where $p+q=0$, [F9] gives $\int_A\bar p\,d\rho=\int_A\bar p(p+q)\,d\mu=P(A)$ and $\int_A\bar q\,d\rho=Q(A)$ for every measurable $A$. Hence $\bar p,\bar q$ are finite-valued density representatives of $P,Q$ against $\rho$. [F7, F8, F9, step 1.1, algebra]


2.2 Pointwise $|p-q|=|\sqrt p-\sqrt q|(\sqrt p+\sqrt q)$. Hölder [F5] therefore gives $\int|p-q|\,d\mu\le h(P,Q)\bigl(\int(\sqrt p+\sqrt q)^2\,d\mu\bigr)^{1/2}$. The squared second factor is $2+2\int\sqrt{pq}\,d\mu\le4$, since [F5] applied to $\sqrt p,\sqrt q$ bounds their product integral by $1$. Step 1.2 now gives $\lVert P-Q\rVert_{\mathrm{TV}}\le h(P,Q)$. [F1, F5, F10, step 1.2, algebra]


3.1 Write $H_\lambda(P,Q)^2$ for the defining Hellinger integral computed from supplied densities against a common dominator $\lambda$. Applying [F1] and [F9] to the densities in step 2.1 gives $H_\rho(P,Q)^2=\int(\sqrt{\bar p}-\sqrt{\bar q})^2\,d\rho=\int_{\{p+q>0\}}(\sqrt p-\sqrt q)^2\,d\mu=H_\mu(P,Q)^2$, because both original densities vanish where $p+q=0$. For any measure $\alpha$ and finite-valued nonnegative densities $f,g$ of the same finite measure $\Lambda$ with respect to $\alpha$, they agree $\alpha$-almost everywhere: on $E_m:=\{f\ge g+1/m\}$, equality of their density integrals gives $0=\int_{E_m}(f-g)\,d\alpha\ge\alpha(E_m)/m$, so $\alpha(E_m)=0$. Since $\{f>g\}=\bigcup_{m\ge1}E_m$, and the same argument with $f,g$ swapped handles $\{g>f\}$, this proves uniqueness almost everywhere. Thus changing supplied representatives against a fixed dominator does not change the Hellinger integral. [F1, F7, F8, F9, F10, step 1.1, step 2.1, algebra]


4.1 For any other common sigma-finite dominator $\nu$, repeat steps 1.1 and 2.1 using its densities to obtain density representatives $\bar p_\nu,\bar q_\nu$ against the same finite measure $\rho=P+Q$. The uniqueness argument in step 3.1 gives $\bar p_\nu=\bar p$ and $\bar q_\nu=\bar q$ $\rho$-almost everywhere. The same density-change calculation as in step 3.1 therefore identifies the Hellinger integral against $\nu$ with the same canonical value against $\rho$, and hence with that against $\mu$. [step 1.1, step 2.1, step 3.1, F1, F3, F4]


5.1 Pointwise $(\sqrt p-\sqrt q)^2\le|p-q|$. Integrating by monotonicity [F10] and using [F1] and step 1.2 gives $h(P,Q)^2\le\int|p-q|\,d\mu=2\lVert P-Q\rVert_{\mathrm{TV}}$. [F1, F10, step 1.2, algebra] ∎
