---
id: def-it-weak-and-strong-secrecy
kind: definition
title: "Weak and strong secrecy for wiretap code sequences"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-wiretap-channel, def-it-information-leakage-and-equivocation]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the definition concerns finite message and output variables."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-8–23-9: normalized information leakage rate."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 15"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_15.pdf
      locator: "PDF pp. 1–2: weak versus strong secrecy metrics and resolvability-based secrecy."
    - title: "Matthieu R. Bloch and J. Nicholas Laneman, Strong Secrecy from Channel Resolvability, arXiv:1105.5419"
      url: https://arxiv.org/pdf/1105.5419
      locator: "§III: the hierarchy of normalized, unnormalized, and variational-distance secrecy metrics."
---

## Definition

Consider a sequence of finite wiretap codes from [[def-it-wiretap-channel]], with uniform message $M_n$ and Eve's observation $Z^n$. Call it reliable when its average error tends to zero; maximal reliability is the stronger condition that its maximal error tends to zero. Among reliable sequences, **weak secrecy** means

$$\frac1n I(M_n;Z^n)\longrightarrow 0,$$

and **strong secrecy** means

$$I(M_n;Z^n)\longrightarrow 0,$$

where leakage is the unnormalized finite mutual information of [[def-it-information-leakage-and-equivocation]] and all quantities are in nats. Exact independence at every blocklength, total-variation secrecy, and per-message secrecy are separate conditions and are not identified with either limit here.
