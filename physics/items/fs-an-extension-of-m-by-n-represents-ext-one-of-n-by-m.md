---
id: fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m
kind: false-statement
title: "FALSE: an extension of M by N represents Ext one of N by M"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-extension-of-an-object-by-an-object-in-an-abelian-category, thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

FALSE: an extension of M by N represents Ext one of N by M

## Facts & Assumptions

**Given:** $M=\mathbb Z/n\mathbb Z$, $N=\mathbb Z$, and $n\ge2$ in the category of abelian groups.

## Refutation

**Proof technique:** direct.

1.1 An extension of $M$ by $N$ has the typed form $0\to N\to E\to M\to0$; its connecting homomorphism starts at $1_M\in\operatorname{Hom}(M,M)$ and lands in $\operatorname{Ext}^1(M,N)$. [given, algebra]

2.1 Here $\operatorname{Ext}^1(\mathbb Z/n\mathbb Z,\mathbb Z)\cong\mathbb Z/n\mathbb Z$, whereas $\operatorname{Ext}^1(\mathbb Z,\mathbb Z/n\mathbb Z)=0$ because $\mathbb Z$ is projective. Interchanging the endpoints therefore changes the group and disproves the asserted order. [step 1.1, algebra] ∎
