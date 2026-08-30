---
id: thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures
kind: theorem
title: "For finite signed or complex measures, absolute continuity is equivalent to the epsilon-delta small-set condition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-radon-nikodym-derivative, def-total-variation-of-a-signed-or-complex-measure, thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data, thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value, thm-absolute-continuity-of-the-integral]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 13.2"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Proposition 6.25"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Exercise 14"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $\mu$ be a sigma-finite positive measure and let $\nu$ be a finite signed
measure or a finite complex measure on the same measurable space. Then the
following are equivalent:

1. $\nu\ll\mu$;
2. for every $\varepsilon>0$ there exists $\delta>0$ such that
   $$\mu(E)<\delta\qquad\Longrightarrow\qquad |\nu(E)|<\varepsilon\qquad(E\in\mathcal A).$$

## Facts & Assumptions

**Given:** A finite signed or finite complex measure $\nu$ and a sigma-finite positive measure $\mu$.

[L1] If $\nu\ll\mu$, then $|\nu|(E)=\int_E|d\nu/d\mu|\,d\mu$ for every measurable $E$. ([[def-radon-nikodym-derivative]], [[thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]])

[L2] Absolute continuity of the integral gives the $\varepsilon$-$\delta$ estimate for integrable absolute values. ([[thm-absolute-continuity-of-the-integral]])

[L3] For signed or complex measures, $|\nu|\ll\mu$ is equivalent to $\nu\ll\mu$, and always $|\nu(E)|\le|\nu|(E)$. ([[thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data]], [[def-total-variation-of-a-signed-or-complex-measure]])

## Proof

**Proof technique:** direct.

1.1 Assume $\nu\ll\mu$ and let $\varepsilon>0$. By [L1], the function $|d\nu/d\mu|$ is integrable, so [L2] yields $\delta>0$ such that $\mu(E)<\delta$ implies $$|\nu|(E)=\int_E\left|\frac{d\nu}{d\mu}\right|\,d\mu<\varepsilon.$$ Then [L3] gives $|\nu(E)|<\varepsilon$. This proves condition 2. [L1, L2, L3, choose]

1.2 Assume condition 2. If $\mu(E)=0$, then $\mu(E)<\delta$ for every $\delta>0$, so condition 2 forces $|\nu(E)|<\varepsilon$ for every $\varepsilon>0$. Hence $\nu(E)=0$, and therefore $\nu\ll\mu$. [given, algebra]

2.1 Step 1.1 proves $(1)\Rightarrow(2)$ and step 1.2 proves $(2)\Rightarrow(1)$. [step 1.1, step 1.2] ∎
