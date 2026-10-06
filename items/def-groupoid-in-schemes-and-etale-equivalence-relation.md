---
id: def-groupoid-in-schemes-and-etale-equivalence-relation
kind: definition
title: "Groupoids in schemes, relations and etale equivalence relations"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
justified_by: []
aliases: []
deps:
  - def-morphism-of-schemes
  - def-fibre-product-schemes-universal-property
  - def-scheme-over-base
  - def-monomorphism-and-epimorphism
  - def-equivalence-relation
  - def-etale-morphism-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 39 (Groupoid Schemes)"
      url: "https://stacks.math.columbia.edu/tag/022P"
      locator: "Definition 39.3.1 (tag 022P), Lemma 39.3.2 (tag 022Q) and Definition 39.9.1 (etale equivalence relations)"
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Section 65.9"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Definition 65.9.2 (tag 02WS), etale equivalence relation on a scheme over S"
    - title: "Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (arXiv:math/0412512)"
      url: "https://arxiv.org/pdf/math/0412512"
      locator: "Sections 3.4-3.5 (groupoids and fibred categories)"
---

## Definition

Fix a base scheme $S$ ([[def-scheme-over-base]]). A **groupoid in
$S$-schemes** is a tuple $(U,R,s,t,c,e,i)$ consisting of $S$-schemes $U$ and
$R$ and morphisms of $S$-schemes $s,t\colon R\to U$ (**source** and
**target**), $c\colon R\times_{s,U,t}R\to R$ (**composition**),
$e\colon U\to R$ (**identity**) and $i\colon R\to R$ (**inverse**), subject to
the usual identities of a small groupoid. Here $c$ is defined on composable
pairs $(r_1,r_2)$ with $s(r_1)=t(r_2)$ and $c(r_1,r_2)$ is the composite
"$r_2$ first, then $r_1$", with $s(c(r_1,r_2))=s(r_2)$ and
$t(c(r_1,r_2))=t(r_1)$; the identities are
$$s\circ e=t\circ e=\mathrm{id}_U,\qquad s\circ c=s\circ\mathrm{pr}_2,\qquad t\circ c=t\circ\mathrm{pr}_1,$$
$$c\circ(c\times\mathrm{id}_R)=c\circ(\mathrm{id}_R\times c),\qquad c\circ(\mathrm{id}_R,e\circ s)=c\circ(e\circ t,\mathrm{id}_R)=\mathrm{id}_R,$$
$$s\circ i=t,\qquad t\circ i=s,\qquad c\circ(\mathrm{id}_R,i)=e\circ t,\qquad c\circ(i,\mathrm{id}_R)=e\circ s,$$
where the fibre products and projections are those of
[[def-fibre-product-schemes-universal-property]] and all morphisms are
morphisms of $S$-schemes ([[def-morphism-of-schemes]]); associativity is
stated on the triple fibre product $R\times_{s,U,t}R\times_{s,U,t}R$, where
$c\times\mathrm{id}_R$ and $\mathrm{id}_R\times c$ are formed using the
source/target identifications. A groupoid in $S$-schemes is precisely a
groupoid object in the category of $S$-schemes in the sense of these diagrams,
and its functor of points on the category of $S$-schemes is a groupoid-valued
functor.

With $j=(t,s)\colon R\to U\times_SU$, the groupoid is a **relation** when $j$
is a monomorphism ([[def-monomorphism-and-epimorphism]]); then $j$ presents
$R$ as a subobject of $U\times_SU$, and the groupoid axioms exhibit a
reflexive ($e$), symmetric ($i$) and transitive ($c$) set-theoretic relation
on the points of $U$ in the sense of [[def-equivalence-relation]]. The
groupoid is an **equivalence relation on $U$ over $S$** when it is a relation,
and an **etale equivalence relation** when in addition $s$ and $t$ are etale
([[def-etale-morphism-schemes]]).

Restriction is well defined as follows. Let $g\colon U'\to U$ be a morphism
of $S$-schemes and form
$$R'=R\times_{U\times_SU}(U'\times_SU'),$$
the fibre product along $j$ and $g\times g$, with its two projections
$\mathrm{pr}_R$ and $\mathrm{pr}_{U'\times U'}$; set
$t'=\mathrm{pr}_1\circ\mathrm{pr}_{U'\times U'}$ and
$s'=\mathrm{pr}_2\circ\mathrm{pr}_{U'\times U'}$. The map $e'$ sends $u'$ to
$(e(g(u')),(u',u'))$, where $(u',u')$ is the diagonal $U'\to U'\times_SU'$;
the map $i'$ sends $(r,(u'_1,u'_2))$ to $(i(r),(u'_2,u'_1))$; and $c'$ sends
a composable pair $\big((r_1,(u'_1,u'_2)),(r_2,(u'_2,u'_3))\big)$ to
$(c(r_1,r_2),(u'_1,u'_3))$. All three are defined by the universal property
of the relevant fibre products, and the groupoid
identities for $(U',R',s',t',c',e',i')$ follow from those for
$(U,R,s,t,c,e,i)$ after applying the universal property; this tuple is the
**restriction** $R|_{U'}$ of the groupoid along $g$. If $j$ is a monomorphism,
then so is $j'=(t',s')$, because a monomorphism is stable under base change in
any category with fibre products: given two morphisms into the fibre product
with equal composites to $U'\times_SU'$ and to $R$, the universal property of
the fibre product makes them equal. Hence restricting an equivalence relation
along an arbitrary morphism of $S$-schemes yields an equivalence relation.
Restriction of the *etale* property needs $g$ etale and is recorded separately
in [[lem-etale-equivalence-relation-restriction]]: its local flatness,
finite-presentation and fibre arguments establish the required stability
without a choice assumption.
