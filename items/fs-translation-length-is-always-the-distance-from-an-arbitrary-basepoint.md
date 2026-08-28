---
id: fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint
kind: false-statement
title: "FALSE: translation length is always the distance from an arbitrary basepoint"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-translation-length-of-a-tree-automorphism-without-inversions, thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Statement

For a tree automorphism without inversions and for any chosen basepoint $v$, one
always has $\ell(g)=d(v,gv)$.

## Facts & Assumptions

**Given:** The definition of translation length and the elliptic/hyperbolic dichotomy.

[L1] Translation length is the minimum of $d(v,gv)$ over all vertices. ([[def-translation-length-of-a-tree-automorphism-without-inversions]])

[L2] Elliptic automorphisms fix a vertex. ([[thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]])

## Refutation

**Proof technique:** direct.

1.1 Reflect the bi-infinite line by $r(n)=-n$. The vertex $0$ is fixed, so [L2] gives $\ell(r)=0$ via [L1]. [L1, L2, given]

2.1 At the basepoint $v=1$ one has $d(1,r(1))=d(1,-1)=2\ne 0$. So $\ell(r)$ is not the displacement from an arbitrary basepoint, and the statement is false. [L1, step 1.1, algebra] ∎
