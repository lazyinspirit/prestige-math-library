---
id: cex-birational-does-not-imply-isomorphic
kind: counterexample
title: "The affine line and its punctured principal open are birational but not isomorphic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-birational-equivalence-varieties, def-principal-open-classical-variety, thm-coordinate-ring-principal-open, thm-affine-morphisms-coordinate-ring-anti-equivalence, ex-hyperbola-is-multiplicative-group-variety]
justified_by: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 5l"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, localization discussion"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement refuted

Birational affine varieties need not be isomorphic.

Assume the Axiom of Choice and let $k$ be an algebraically closed field. Take
$X=\mathbf A_k^1$ with coordinate ring $k[t]$ and
$$ U=D_X(t)=\mathbf A_k^1\setminus\{0\}. $$
The explicit isomorphism in
[[ex-hyperbola-is-multiplicative-group-variety]] identifies $U$ with the
classical affine variety $V(xy-1)\subseteq\mathbf A_k^2$, so $U$ may be used as
an affine-variety target. The identity on the common nonempty open $U$, in one
direction, and the inclusion $U\hookrightarrow X$, in the other, exhibit $X$
and $U$ as birational.

They are not isomorphic. By [[thm-coordinate-ring-principal-open]],
$$ k[U]\cong k[t,t^{-1}], $$
whereas $k[X]=k[t]$. Every unit of $k[t]$ is constant: if $fg=1$ in $k[t]$,
then $\deg(f)+\deg(g)=0$, so $\deg(f)=0$. By contrast, $t$ is a nonconstant
unit of $k[t,t^{-1}]$ with inverse $t^{-1}$. Therefore the two rings have
different unit groups and cannot be isomorphic. Thus
[[thm-affine-morphisms-coordinate-ring-anti-equivalence]] rules out an
isomorphism of varieties.
