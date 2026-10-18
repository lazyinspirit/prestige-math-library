---
id: lem-it-finite-rate-distortion-minimum-attained
kind: lemma
title: "Attainment of finite-alphabet rate-distortion minima"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-finite-mutual-information
  - thm-heine-borel-rn
  - thm-it-information-unit-conversion
  - thm-extreme-value-metric
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the channel simplex is finite-dimensional and all minima are obtained by compactness."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §4.1: finite-alphabet rate-distortion minimization; compactness proof supplied here."
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed."
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "Chapter 10, §10.2: finite-alphabet information rate-distortion function."
---

## Statement

Let $\mathcal X,\widehat{\mathcal X}$ be nonempty finite sets, let $p$ be a probability mass function on $\mathcal X$, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,\infty)$ be finite-valued. Put
$$
D_{\min}:=\sum_{x\in\mathcal X}p(x)\min_{\hat x\in\widehat{\mathcal X}}d(x,\hat x).
$$
For every $D\ge0$, the feasible stochastic channels $W(\hat x\mid x)$ satisfying $\sum_{x,\hat x}p(x)W(\hat x\mid x)d(x,\hat x)\le D$ form a nonempty set exactly when $D\ge D_{\min}$. Whenever nonempty, mutual information in bits attains its minimum over this set.

## Facts & Assumptions

**Given:** Nonempty finite alphabets $\mathcal X,\widehat{\mathcal X}$, a source pmf $p$, and finite nonnegative distortion $d$.

[F1] [[def-it-finite-mutual-information]]: for a finite joint pmf, mutual information in nats is its finite joint-law KL sum.

[F2] [[thm-it-information-unit-conversion]]: mutual information in bits is the finite nats value divided by $\ln2$.

[F3] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F4] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains a minimum.

## Proof




1.1 For each $x$, choose a minimizing $\hat x_x$ from the nonempty finite set $\widehat{\mathcal X}$; finite choice is available by successive selection from finitely many nonempty sets. The deterministic channel $W(\hat x\mid x)=\mathbf1_{\{\hat x=\hat x_x\}}$ has expected distortion $D_{\min}$. Conversely, each channel row is a probability vector, so its conditional mean distortion is at least $\min_{\hat x}d(x,\hat x)$; averaging against $p$ shows every channel has distortion at least $D_{\min}$. Thus feasibility is equivalent to $D\ge D_{\min}$. [given, algebra]

1.2 For a probability vector $q$, set $H(q)=-\sum_i q_i\ln q_i$, with $0\ln0:=0$. The scalar function $-t\ln t$ on $(0,1]$ extends continuously to zero because $\lim_{t\downarrow0}t\ln t=0$; hence entropy is continuous on every finite simplex. Expanding the finite KL sum in [F1] gives $I(X;\widehat X)=H(p)+H(q)-H(p_{X\widehat X})$, where $q(\hat x)=\sum_xp(x)W(\hat x\mid x)$; all terms are continuous functions of the channel coordinates. [F1, given, algebra]

2.1 Identify all channels with a point in $[0,1]^{|\mathcal X||\widehat{\mathcal X}|}$. The row-sum equalities, nonnegativity inequalities and expected-distortion inequality define a closed set; the cube makes it bounded. When feasible it is nonempty, so [F3] makes it compact. [F3, step 1.1, given, algebra]

3.1 By [F2], division by the positive constant $\ln2$ preserves continuity. Thus the bit mutual-information objective is continuous on the nonempty compact feasible set in step 2.1; [F4] gives a point where it attains its minimum. This proves attainment. [F2, F4, step 2.1, step 1.2, algebra] ∎
