---
id: def-it-information-leakage-and-equivocation
kind: definition
title: "Information leakage and equivocation for finite observations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-mutual-information, def-it-finite-conditional-entropy]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all probability laws and sums are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-8–23-9: uniform message, information leakage rate, and receiver error."
    - title: "Matthieu R. Bloch and J. Nicholas Laneman, Strong Secrecy from Channel Resolvability, arXiv:1105.5419"
      url: https://arxiv.org/pdf/1105.5419
      locator: "§§I and III: normalized information leakage and total information leakage as distinct secrecy measures."
---

## Definition

For finite random variables $M,Z$, information leakage is the finite mutual information $I(M;Z)$ in nats, as defined in [[def-it-finite-mutual-information]], and equivocation is the finite conditional entropy $H(M\mid Z)$, as defined in [[def-it-finite-conditional-entropy]]. For an $n$-use code with Eve's observation $Z^n$, its normalized leakage is $n^{-1}I(M;Z^n)$. When $M$ is uniform on a finite message set $\mathcal M$, its entropy is $H(M)=\ln|\mathcal M|$. Zero-probability symbols are handled by the finite entropy and KL conventions cited above.
