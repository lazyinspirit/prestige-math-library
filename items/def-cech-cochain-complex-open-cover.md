---
id: "def-cech-cochain-complex-open-cover"
kind: "definition"
title: "Ordered Čech cochain complex of a cover"
status: draft
origin: pipeline
deps: [def-sheaf-on-topological-space, def-section-restriction-and-global-section, lem-sheaf-section-over-empty-set-terminal]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Definition

Let $X$ be a topological space, let $\mathcal F$ be a sheaf of abelian groups
on $X$ ([[def-sheaf-on-topological-space]]), and let
$\mathcal U=(U_i)_{i\in I}$ be a cover of $X$ by open subsets, indexed by a set
$I$ that is equipped with a linear order $<$.

For an integer $p\ge0$ define the **group of ordered $p$-cochains of
$\mathcal U$ with values in $\mathcal F$** by
$$C^p(\mathcal U,\mathcal F):=\prod_{i_0<\cdots<i_p} \mathcal F\bigl(U_{i_0}\cap\cdots\cap U_{i_p}\bigr),$$
the product of the section groups over all increasing $(p+1)$-tuples
$i_0<\cdots<i_p$ in $I$; write an element as $s=(s_{i_0\cdots i_p})$. For
$p<0$ put $C^p(\mathcal U,\mathcal F):=0$. When $I$ has no increasing
$(p+1)$-tuple the product is empty and $C^p(\mathcal U,\mathcal F)=0$; when an
intersection $U_{i_0}\cap\cdots\cap U_{i_p}$ is empty, the corresponding
factor is the one-element group $\mathcal F(\varnothing)=0$
([[lem-sheaf-section-over-empty-set-terminal]]).

The **Čech differential** $\delta^p:C^p(\mathcal U,\mathcal F)\to
C^{p+1}(\mathcal U,\mathcal F)$ is defined on an increasing $(p+2)$-tuple
$i_0<\cdots<i_{p+1}$ by
$$(\delta^p s)_{i_0\cdots i_{p+1}} =\sum_{j=0}^{p+1}(-1)^j\, s_{i_0\cdots\widehat{i_j}\cdots i_{p+1}} \Big|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}},$$
where $\widehat{i_j}$ means that the index $i_j$ is omitted and the restriction
is taken from $U_{i_0}\cap\cdots\widehat{U_{i_j}}\cdots\cap U_{i_{p+1}}$ to the
full intersection ([[def-section-restriction-and-global-section]]). For $p<0$
set $\delta^p:=0$. The maps $\delta^p$ are group homomorphisms, componentwise
sums of restrictions, so the data $(C^p(\mathcal U,\mathcal F),\delta^p)_{p\in
\mathbb Z}$ form a cochain complex of abelian groups; that $\delta^{p+1}\circ
\delta^p=0$ is proved in [[lem-cech-differential-squares-zero]]. The pair
$(\mathcal F,\mathcal U)$ being fixed, the construction is functorial in
$\mathcal F$: a morphism $\varphi:\mathcal F\to\mathcal G$ of abelian sheaves
induces componentwise maps $C^p(\mathcal U,\varphi)$ commuting with the
differentials.
