---
id: cor-noetherian-spectrum-has-finitely-many-irreducible-components
kind: corollary
title: "A Noetherian ring has only finitely many irreducible components in its spectrum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-irreducible-components-and-minimal-primes, thm-noetherian-ring-has-finitely-many-minimal-primes]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 14.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.26: Irreducible components of spectra"
      url: "https://stacks.math.columbia.edu/tag/00ET"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

If $R$ is a Noetherian commutative ring, then $\operatorname{Spec}(R)$ has only finitely many irreducible components.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and the Axiom of Choice.

[L1] Irreducible components of $\operatorname{Spec}(R)$ correspond exactly to minimal prime ideals ([[thm-irreducible-components-and-minimal-primes]]).

[L2] A Noetherian ring has only finitely many minimal prime ideals ([[thm-noetherian-ring-has-finitely-many-minimal-primes]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the ring $R$ has only finitely many minimal prime ideals. [L2]

2.1 By [L1], each irreducible component is $V(\mathfrak p)$ for a unique minimal prime $\mathfrak p$, and each minimal prime gives an irreducible component. Therefore the set of irreducible components is finite. [L1, step 1.1]

3.1 Hence $\operatorname{Spec}(R)$ has only finitely many irreducible components. [step 2.1] ∎
