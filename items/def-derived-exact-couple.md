---
id: def-derived-exact-couple
kind: definition
title: Derived exact couple
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-exact-couple, lem-the-exact-couple-differential-squares-to-zero, lem-spectral-sequence-subquotient-and-local-lifting-calculus]
justified_by: [lem-the-derived-couple-maps-are-well-defined, thm-the-derived-couple-is-exact]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Lemma 12.21.2 and Remark 12.21.5"
      url: https://stacks.math.columbia.edu/tag/011P
---

## Definition

For a page-$r$ [[def-exact-couple|exact couple]] $(D,E,i,j,k)$, let $d=jk$.
The [[lem-the-exact-couple-differential-squares-to-zero|square-zero identity]]
allows the quotient
$$D'_{p,q}=\operatorname{im}(i_{p-1,q+1}:D_{p-1,q+1}\to D_{p,q}),\qquad E'_{p,q}=\ker(d_{p,q})/\operatorname{im}(d_{p+r,q-r+1}).$$
Define the following maps by their local formulas:
$$i'_{p,q}:D'_{p,q}\to D'_{p+1,q-1},\qquad i'(a)=i(a),$$
$$j'_{p,q}:D'_{p,q}\to E'_{p-r,q+r},\qquad j'(i x)=[j x]\quad(x\text{ at }D_{p-1,q+1}),$$
$$k'_{p,q}:E'_{p,q}\to D'_{p-1,q},\qquad k'([e])=k e.$$
In the last formula $e$ is a $d$-cycle. The local preimage $x$ and local
representative $e$ are understood after an epimorphism onto a test object's
domain, as in [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]].
They do not mean a chosen section of $i$ or of a quotient map.

The existence and independence of these maps are established in
[[lem-the-derived-couple-maps-are-well-defined]], and their exactness in
[[thm-the-derived-couple-is-exact]]. These data form the **derived exact
couple**, a page-$(r+1)$ couple: the degrees of $i'$ and $k'$ are unchanged,
while $j'$ has degree $(-r,r)$. For an initial couple this changes the degree
of $j$ from $(0,0)$ to $(-1,1)$. Zero kernels, images and quotients are
permitted; every construction is componentwise, with no infinite sum.
