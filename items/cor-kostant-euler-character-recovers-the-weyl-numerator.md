---
id: cor-kostant-euler-character-recovers-the-weyl-numerator
kind: corollary
title: "The Kostant Euler character recovers the Weyl numerator"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [thm-kostant-nilradical-cohomology-theorem, cor-bgg-euler-character-identity, def-grothendieck-group-and-character-of-category-o, prop-formal-character-of-a-verma-module, def-weight-and-weight-space-of-a-lie-algebra-representation, def-integral-dominant-and-strictly-dominant-weights, def-weyl-vector-rho-for-a-chosen-positive-system, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed pp.6–7, Euler–Poincaré argument and the alternating cohomology character"
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.5 printed pp.77–84"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.5.2, printed pp.82–84, the cohomological recovery of the Weyl character formula numerator"
---

## Statement

Assume the Axiom of Choice. In the setting of [[thm-kostant-nilradical-cohomology-theorem]], define the formal character of a finite-dimensional $\mathfrak h$-module by $\operatorname{ch}M=\sum_\mu\dim(M_\mu)e^\mu$. Then
$$\sum_{k\ge0}(-1)^k\operatorname{ch}H^k(\mathfrak n^+,V)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\cdot\lambda}.$$
The right-hand side is the finite alternating character computed directly from Kostant's decomposition. The separate BGG/Weyl-character identity at [[cor-bgg-euler-character-identity]] identifies this same finite sum as the Weyl numerator. Thus the cohomological computation of the sum itself does not use Weyl-character input; its interpretation as the numerator is the comparison supplied by that identity.

## Facts & Assumptions

**Given:** The setting of [[thm-kostant-nilradical-cohomology-theorem]] and the finite sums $\sum_\mu\dim(M_\mu)e^\mu$ of formal exponentials for finite-dimensional $\mathfrak h$-modules $M$.

[L1] $H^k(\mathfrak n^+,V)\cong\bigoplus_{\ell(w)=k}\mathbb C_{w\cdot\lambda}$ as $\mathfrak h$-modules, so each $H^k$ is finite dimensional, multiplicity free, and has weights exactly $w\cdot\lambda$ for the length-$k$ elements ([[thm-kostant-nilradical-cohomology-theorem]]).

[L2] For a finite-dimensional module, the formal character is the finite sum of $e^\mu$ over the weights with multiplicity, and distinct weight spaces contribute distinct monomials ([[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[def-grothendieck-group-and-character-of-category-o]]).

[L3] The BGG identity $\operatorname{ch}L(\lambda)=\sum_w(-1)^{\ell(w)}e^{w\circ\lambda}\prod_{\alpha>0}(1-e^{-\alpha})^{-1}$ holds in the formal-character ring, with the Verma character supplied by [[prop-formal-character-of-a-verma-module]]; it is a comparison identity, not an input to the computation below ([[cor-bgg-euler-character-identity]]).

## Proof

**Proof technique:** substitute the multiplicity-free weight list into the alternating sum.

1.1 By [L1] and [L2] the formal character of $H^k(\mathfrak n^+,V)$ is $\sum_{\ell(w)=k}e^{w\cdot\lambda}$, the sum of one monomial for each Weyl element of length $k$, with no multiplicities and no other terms. [L1, L2]

2.1 Substituting step 1.1 into the alternating sum and interchanging the two finite sums over $k$ and $w$ gives $\sum_{k\ge0}(-1)^k\operatorname{ch}H^k(\mathfrak n^+,V)=\sum_{k\ge0}(-1)^k\sum_{\ell(w)=k}e^{w\cdot\lambda}=\sum_{w\in W}(-1)^{\ell(w)}e^{w\cdot\lambda}$, the displayed finite identity; the sums are finite because the cochain complex vanishes above $\dim\mathfrak n^+=|\Phi^+|$ and $W$ is finite. [L1, step 1.1]

3.1 The computation in step 2.1 used only the cohomology decomposition of [L1], not the Weyl character formula; the separate identity [L3] is what names the resulting finite sum $\sum_w(-1)^{\ell(w)}e^{w\cdot\lambda}$ as the Weyl numerator after clearing the Verma denominator, and no spectral sequence or BGG input enters the computation itself. [L3, step 2.1] ∎ 