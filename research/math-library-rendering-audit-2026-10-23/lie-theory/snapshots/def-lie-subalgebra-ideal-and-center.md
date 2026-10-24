---
id: def-lie-subalgebra-ideal-and-center
kind: definition
title: Lie subalgebras, ideals, and center
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-algebra-over-a-field, def-linear-subspace]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §3.2"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.3"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Definition

Let $\mathfrak g$ be a Lie algebra over $k$, and let $\mathfrak h$ be a linear
subspace ([[def-linear-subspace]]).

- It is a **Lie subalgebra** if $[\mathfrak h,\mathfrak h]\subseteq\mathfrak h$.
  The restricted bracket then makes $\mathfrak h$ a Lie algebra: bilinearity,
  alternation, and Jacobi are inherited from $\mathfrak g$.
- It is an **ideal**, written $\mathfrak i\trianglelefteq\mathfrak g$, if
  $[\mathfrak g,\mathfrak i]\subseteq\mathfrak i$. Since the bracket is
  skew-symmetric, this is equivalent to
  $[\mathfrak i,\mathfrak g]\subseteq\mathfrak i$.
- The **center** is
  $$Z(\mathfrak g)=\{z\in\mathfrak g:[z,x]=0\text{ for every }x\in\mathfrak g\}.$$

The center is an ideal: it is a linear subspace by bilinearity, and for
$z\in Z(\mathfrak g)$ and $x\in\mathfrak g$ one has $[x,z]=0$, which lies in
$Z(\mathfrak g)$. Every ideal is therefore a Lie subalgebra, but a Lie
subalgebra need not be an ideal.
