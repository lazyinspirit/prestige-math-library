---
id: def-centralizer-of-a-subgroup
kind: definition
title: "The centralizer $C_G(H)$ of a subgroup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-conjugacy-class-and-centralizer, def-center-of-a-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Proposition 3.22"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a group ([[def-group]]) and let $H\le G$. The **centralizer of $H$
in $G$** is

$$C_G(H):=\{g\in G:gh=hg\text{ for every }h\in H\}.$$

Equivalently, $C_G(H)=\bigcap_{h\in H}C_G(h)$, the intersection of the
centralizers of the individual elements of $H$
([[def-conjugacy-class-and-centralizer]]).

**Why it is a subgroup.** The identity satisfies $eh=h=he$ for every $h\in H$,
so $e\in C_G(H)$. If $g_1,g_2\in C_G(H)$ and $h\in H$, then

$$(g_1g_2)h=g_1(g_2h)=g_1(hg_2)=(g_1h)g_2=(hg_1)g_2=h(g_1g_2),$$

so $g_1g_2\in C_G(H)$. If $g\in C_G(H)$ and $h\in H$, then multiplying
$gh=hg$ by $g^{-1}$ on both sides gives $hg^{-1}=g^{-1}h$, so
$g^{-1}\in C_G(H)$. Hence $C_G(H)\le G$.

Two special cases are used without further comment. Taking $H=G$ gives
$C_G(G)=Z(G)$, the center ([[def-center-of-a-group]]). Intersecting with $H$
gives $C_G(H)\cap H=Z(H)$, since an element of $H$ lies in $C_G(H)$ exactly
when it commutes with every element of $H$.
