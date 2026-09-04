---
id: ex-a-non-residually-finite-baumslag-solitar-group
kind: example
title: "A Baumslag-Solitar group gives a noninjective completion map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite, def-group-presentation]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
    - title: "Rita Gitik and Eliyahu Rips, On separability properties of free groups"
      url: "https://arxiv.org/pdf/1906.07275"
---

## Example

The Baumslag-Solitar group

$$ \operatorname{BS}(2,3)=\langle a,t\mid t^{-1}a^2t=a^3\rangle $$

is a standard example whose canonical map to its profinite completion is not
injective.

## Facts & Assumptions

**Given:** The classical theorem of Meskin that $\operatorname{BS}(m,n)$ is
residually finite exactly when $|m|=|n|$ or $|m|=1$ or $|n|=1$.

[L1] The canonical map is injective exactly when the group is residually finite
([[cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite]]).

## Verification

**Proof technique:** direct.

1.1 For $(m,n)=(2,3)$, the Meskin criterion in the Given clause fails. Therefore $\operatorname{BS}(2,3)$ is not residually finite. [given]

2.1 Apply [L1] to $\operatorname{BS}(2,3)$. Since the group is not residually finite, its canonical map into the profinite completion is not injective. [L1, step 1.1] ∎
