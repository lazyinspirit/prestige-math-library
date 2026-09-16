---
id: rem-omega-one-strongly-compact-normal-moore-refinement
kind: remark
title: "The omega-one-strongly compact refinement and open gap"
status: draft
origin: pipeline
deps: [def-product-measure-extension-axioms-pmea-and-pmea-sigma, thm-pmea-implies-normal-moore-space-conjecture]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Joan Bagaria and Samuel Gomes da Silva, omega-one-strongly compact cardinals and normality"
      url: "https://diposit.ub.edu/server/api/core/bitstreams/d5caf92a-962e-496a-a31e-5630dafa67ec/content"
      locator: "Theorems 2.5 and 2.7-2.10, printed pp. 5-10"
---

## Remark

Bagaria and da Silva prove that
$\operatorname{Con}(\mathrm{ZFC} + \text{there is an } \omega_1\text{-strongly
compact cardinal})$ implies $\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$:
a random-real extension makes PMEA-$\sigma$
([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]) hold, and
PMEA-$\sigma$ already implies the normal Moore space conjecture
([[thm-pmea-implies-normal-moore-space-conjecture]]). This lowers the large
cardinal in the consistency upper bound from strongly compact to
$\omega_1$-strongly compact. Whether NMSC conversely implies (the consistency of)
an $\omega_1$-strongly compact cardinal is recorded there as an open question,
and is not asserted or refuted here.

**Status of the claim in this library.** This is orientation only. The pullback
computation of Theorem 2.10 is given there with its Solovay-measure input
sketched and the PMEA-$\sigma$ separation modification omitted, so the item is
not used as a proof supplier and carries no proof load; the proved consistency
upper bound used on this page is the strongly compact one from the random
algebra interface ([[thm-lc-strong-compactness-product-measure-extension-interface]]).

## Remarks

- **What is and is not claimed.** Only the relative-consistency implication is
  recorded; no $\omega_1$-strongly compact cardinal is asserted to exist, and no
  implication between NMSC and $\omega_1$-strong compactness is claimed in
  either direction.
