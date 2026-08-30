---
id: def-two-value-omitting-holomorphic-family
kind: definition
title: "Families of holomorphic functions omitting two common finite values"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, Theorem 13"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Definition

Let $\Omega$ be a plane domain and $\mathcal F\subseteq H(\Omega)$. The family
$\mathcal F$ is a **two-value-omitting holomorphic family** when there are
distinct $a,b\in\mathbb C$ such that

$$f(\Omega)\cap\{a,b\}=\varnothing\qquad(f\in\mathcal F).$$

By postcomposing with an affine map, one may normalize the omitted pair to
$\{0,1\}$ when convenient.
