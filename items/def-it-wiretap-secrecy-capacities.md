---
id: def-it-wiretap-secrecy-capacities
kind: definition
title: "Operational weak and strong secrecy capacities"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-it-wiretap-channel, def-it-information-leakage-and-equivocation, def-it-weak-and-strong-secrecy]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all message sets and code alphabets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-8–23-9: rate, reliability, normalized leakage, and secrecy capacity."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 15"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_15.pdf
      locator: "PDF pp. 1–2: weak and strong secrecy metrics and their unnormalized/normalized definitions."
---

## Definition

Fix an error criterion $e\in\{\mathrm{av},\mathrm{max}\}$ and a secrecy criterion $s\in\{\mathrm{weak},\mathrm{strong}\}$. For each code let $P_{\rm err}^{(n)}=P_{e,\rm av}^{(n)}$ when $e=\mathrm{av}$ and $P_{\rm err}^{(n)}=P_{e,\rm max}^{(n)}$ when $e=\mathrm{max}$. A rate $R\ge0$ in nats per channel use is $(e,s)$-achievable for a finite wiretap channel [[def-it-wiretap-channel]] if there is a sequence of wiretap codes, one at each blocklength $n\ge1$, such that

$$\liminf_{n\to\infty}\frac1n\ln|\mathcal M_n|\ge R,\qquad P_{\rm err}^{(n)}\longrightarrow0,$$

and the sequence satisfies secrecy criterion $s$ from [[def-it-weak-and-strong-secrecy]], with leakage measured by [[def-it-information-leakage-and-equivocation]]. Define $C_{e,s}$ as the supremum of all such rates. Thus this definition gives four operational capacities, distinguished by average or maximal error and weak or strong secrecy.
