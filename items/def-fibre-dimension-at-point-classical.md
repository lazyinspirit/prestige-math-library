---
id: "def-fibre-dimension-at-point-classical"
kind: "definition"
title: "Reduced closed-point fibres and their dimension"
deps: ["def-dimension-classical-variety", "def-morphism-classical-varieties", "thm-affine-nullstellensatz-correspondence", "def-classical-algebraic-prevariety-regular-maps-and-varieties"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arapura §4.2, pp.31–32"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
    - title: "Milne §9b, pp.201–204"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
---

## Definition

For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.
