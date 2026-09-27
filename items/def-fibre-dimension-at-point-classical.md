---
id: "def-fibre-dimension-at-point-classical"
kind: "definition"
title: "Reduced closed-point fibres and their dimension"
deps: ["def-dimension-classical-variety", "def-classical-algebraic-prevariety-regular-maps-and-varieties", "def-classical-affine-variety-morphism", "thm-classical-affine-nullstellensatz-correspondence", "def-axiom-of-choice"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (def-fibre-dimension-at-point-classical). No independent judge or whole-closure certification.
    delegated_by: owner
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

For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Indeed the coordinate functions of $f|_U:U\to V$ pull back $\mathfrak m_y$ to functions vanishing exactly at points over $y$; the relative radical-ideal/closed-set correspondence of [[thm-classical-affine-nullstellensatz-correspondence]] gives the reduced coordinate ring. General morphisms have the locally ringed-space meaning of [[def-classical-algebraic-prevariety-regular-maps-and-varieties]], and the affine morphism test of [[def-classical-affine-variety-morphism]] applies to $U\to V$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.
