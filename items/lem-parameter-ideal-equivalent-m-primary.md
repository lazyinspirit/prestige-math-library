---
id: lem-parameter-ideal-equivalent-m-primary
kind: lemma
title: "Parameter ideals are exactly the m-primary d-generated ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-system-of-parameters-and-parameter-ideal, thm-primary-submodule-characterisations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §21"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.60: Dimension"
      url: "https://stacks.math.columbia.edu/tag/00KD"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $(R,\mathfrak m)$ be a $d$-dimensional Noetherian local ring and let $J=(x_1,\ldots,x_d)$. Then $(x_1,\ldots,x_d)$ is a system of parameters if and only if $J$ is $\mathfrak m$-primary.

## Facts & Assumptions

**Given:** A $d$-dimensional Noetherian local ring $(R,\mathfrak m)$ and the ideal $J=(x_1,\ldots,x_d)$.

[L1] By definition, $(x_1,\ldots,x_d)$ is a system of parameters exactly when $\sqrt J=\mathfrak m$ ([[def-system-of-parameters-and-parameter-ideal]]).

[L2] For a finite module over a Noetherian ring, a proper ideal is $\mathfrak p$-primary exactly when the quotient has associated-prime set $\{\mathfrak p\}$; equivalently, when some power of $\mathfrak p$ kills the quotient and every element outside $\mathfrak p$ acts injectively ([[thm-primary-submodule-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\sqrt J=\mathfrak m$. Since every element outside $\mathfrak m$ is a unit in a local ring, it acts injectively on $R/J$. Also $\sqrt J=\mathfrak m$ means some power $\mathfrak m^N$ lies in $J$, hence kills $R/J$. Therefore [L2] makes $J$ a $\mathfrak m$-primary ideal. [L1, L2, given]

1.2 Conversely, if $J$ is $\mathfrak m$-primary, [L2] applied to the finite module $R/J$ gives $\sqrt J=\mathfrak m$. Then [L1] says $(x_1,\ldots,x_d)$ is a system of parameters. [L1, L2, given]

2.1 Thus parameter ideals are exactly the $d$-generated $\mathfrak m$-primary ideals. [step 1.1, step 1.2] ∎
