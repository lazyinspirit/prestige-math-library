---
id: def-bloch-radius-and-bloch-constant
kind: definition
title: "Bloch radii and the Bloch constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-univalent-holomorphic-function]
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, §7.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, §6.3"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Definition

Let $f$ be holomorphic on $\mathbb D$ with $f'(0)\ne0$. The **Bloch radius**
$\beta(f)$ is the supremum of all $r>0$ for which some subdomain
$U\subseteq\mathbb D$ is mapped univalently by $f$ onto a round disc of radius
$r$.

The **Bloch constant** is

$$\mathcal B:=\inf\{\,\beta(f):f\text{ holomorphic on }\mathbb D,\ |f'(0)|=1\,\}.$$
