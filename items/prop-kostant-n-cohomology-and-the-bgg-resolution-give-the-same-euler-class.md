---
id: prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class
kind: proposition
title: "Kostant cohomology and BGG characters give the same Weyl numerator"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [cor-kostant-euler-character-recovers-the-weyl-numerator, def-bgg-category-o, prop-verma-and-finite-dimensional-modules-lie-in-category-o, thm-kostant-nilradical-cohomology-theorem, thm-bgg-resolution-of-a-finite-dimensional-simple-module, cor-bgg-euler-character-identity, def-bgg-bruhat-verma-sum-in-degree-k, def-grothendieck-group-and-character-of-category-o, prop-formal-character-of-a-verma-module, def-integral-dominant-and-strictly-dominant-weights, def-axiom-of-choice]
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
      locator: "printed pp.6–7, the cohomological Weyl numerator; the BGG comparison is supplied by the cited library items"
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.5 printed pp.77–84"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.5.2, printed pp.82–84, the cohomological proof of the Weyl character formula"
---

## Statement

Assume the Axiom of Choice and let $\lambda\in\Lambda^+$. Put
$D=\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$ and
$N_\lambda=\sum_{w\in W}(-1)^{\ell(w)}e^{w\cdot\lambda}$. In the Grothendieck
group of the linkage block $\mathcal O_\lambda$, the BGG resolution gives
$[L(\lambda)]=\sum_{w\in W}(-1)^{\ell(w)}[M(w\cdot\lambda)]$ by
[[thm-bgg-resolution-of-a-finite-dimensional-simple-module]]. Applying its
formal-character map and the Verma character formula
[[prop-formal-character-of-a-verma-module]] gives
$\operatorname{ch}L(\lambda)=D^{-1}N_\lambda$. Separately, the spaces
$H^k(\mathfrak n^+,L(\lambda))$ are finite-dimensional $\mathfrak h$-modules,
and [[thm-kostant-nilradical-cohomology-theorem]] gives
$\sum_{k\ge0}(-1)^k\operatorname{ch}_{\mathfrak h}H^k(\mathfrak n^+,L(\lambda))=N_\lambda$,
as recorded in
[[cor-kostant-euler-character-recovers-the-weyl-numerator]]. Thus the
character calculations identify the same finite Weyl numerator after clearing
the Verma denominator in the BGG character formula. No equality between classes
in different Grothendieck groups is asserted, and no spectral sequence is
constructed.

## Facts & Assumptions

**Given:** The Axiom of Choice; $\lambda\in\Lambda^+$; the linkage block $\mathcal O_\lambda$ with its Grothendieck group and formal-character map; the finite sums $D$ and $N_\lambda$.

[F1] In the Grothendieck group of the linkage block, $[L(\lambda)]=\sum_{w}(-1)^{\ell(w)}[M(w\cdot\lambda)]$, and applying the character homomorphism with the Verma character $\operatorname{ch}M(\mu)=e^{\mu}\prod_{\alpha>0}(1-e^{-\alpha})^{-1}$ gives $\operatorname{ch}L(\lambda)=\sum_w(-1)^{\ell(w)}e^{w\cdot\lambda}D^{-1}=D^{-1}N_\lambda$ ([[cor-bgg-euler-character-identity]], [[thm-bgg-resolution-of-a-finite-dimensional-simple-module]], [[def-bgg-bruhat-verma-sum-in-degree-k]], [[def-grothendieck-group-and-character-of-category-o]], [[prop-formal-character-of-a-verma-module]], [[def-bgg-category-o]], [[prop-verma-and-finite-dimensional-modules-lie-in-category-o]]).

[F2] Independently of [F1], the Kostant decomposition computes the alternating sum of the finite-dimensional $\mathfrak h$-module characters of the nilradical cohomology: $\sum_k(-1)^k\operatorname{ch}H^k(\mathfrak n^+,L(\lambda))=\sum_w(-1)^{\ell(w)}e^{w\cdot\lambda}=N_\lambda$ ([[cor-kostant-euler-character-recovers-the-weyl-numerator]], [[thm-kostant-nilradical-cohomology-theorem]], [[def-integral-dominant-and-strictly-dominant-weights]]).

## Proof

**Proof technique:** compute the numerator twice, once from the BGG class and once from the cohomology decomposition, and compare after clearing the denominator.

1.1 The BGG side: [F1] gives $\operatorname{ch}L(\lambda)=D^{-1}N_\lambda$ in the formal-character target of the category-$\mathcal O$ character map, where $D=\prod_{\alpha>0}(1-e^{-\alpha})$ is the Verma denominator. [F1]

1.2 The cohomological side: by [F2] the alternating sum of the characters of the finite-dimensional $\mathfrak h$-modules $H^k(\mathfrak n^+,L(\lambda))$ equals the same finite numerator $N_\lambda$, computed directly from the cohomology decomposition and using no Weyl-character input. [F2]

2.1 Clearing the common denominator $D$ in step 1.1 and comparing with step 1.2 identifies the same finite sum $N_\lambda$: $D\cdot D^{-1}N_\lambda=N_\lambda=\sum_k(-1)^k\operatorname{ch}H^k(\mathfrak n^+,L(\lambda))$. Both sides live in the common completed formal-character target after this clearing, and no equality of classes in different Grothendieck groups is used: the BGG class lives in $K_0(\mathcal O_\lambda)$, while the cohomology spaces are finite-dimensional $\mathfrak h$-modules and their alternating character is computed there. No spectral sequence is constructed. [F1, F2, step 1.1, step 1.2] ∎ 