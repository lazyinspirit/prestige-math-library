---
id: "def-godement-resolution"
kind: "definition"
title: "Godement resolution of an abelian sheaf"
status: published
origin: pipeline
deps: [def-sheaf-on-topological-space, def-stalk-of-presheaf, def-germ-of-section, def-skyscraper-sheaf-abelian-group, def-kernel-cokernel-image-sheaves, thm-abelian-sheaves-form-abelian-category, lem-section-zero-if-all-germs-zero]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Definition

Let $X$ be a topological space and let $\mathcal F$ be a sheaf of abelian groups
on $X$ ([[def-sheaf-on-topological-space]]). For $x\in X$ let $\mathcal F_x$ be
the stalk at $x$ ([[def-stalk-of-presheaf]], [[def-germ-of-section]]) and let
$i_{x,*}A$ be the skyscraper sheaf at $x$ with value an abelian group $A$
([[def-skyscraper-sheaf-abelian-group]]): $(i_{x,*}A)(V)=A$ when $x\in V$ and
$(i_{x,*}A)(V)=0$ otherwise.

Put
$$C^0(\mathcal F):=\prod_{x\in X}i_{x,*}\mathcal F_x,$$
the product in $\mathrm{Ab}(X)$ of the skyscraper sheaves of the stalks of
$\mathcal F$; since products of sheaves are computed open by open, for an open
$V\subseteq X$ one has
$$C^0(\mathcal F)(V)=\prod_{x\in V}\mathcal F_x .$$
The germ maps $\mathcal F(V)\to\prod_{x\in V}\mathcal F_x$,
$s\mapsto(s_x)_{x\in V}$ ([[def-germ-of-section]]) are compatible with
restrictions and assemble into a morphism of sheaves
$\varepsilon_{\mathcal F}:\mathcal F\to C^0(\mathcal F)$, the **germ map** of
$\mathcal F$. Let
$$Q^0(\mathcal F):=\operatorname{coker}(\varepsilon_{\mathcal F})$$
be the cokernel sheaf of $\varepsilon_{\mathcal F}$
([[def-kernel-cokernel-image-sheaves]]). Recursively, having defined a sheaf
$Q^n(\mathcal F)$ of abelian groups on $X$, put
$$C^{n+1}(\mathcal F):=C^0\bigl(Q^n(\mathcal F)\bigr),\qquad Q^{n+1}(\mathcal F):=\operatorname{coker}\bigl(Q^n(\mathcal F) \xrightarrow{\ \varepsilon_{Q^n}\ }C^{n+1}(\mathcal F)\bigr),$$
with $\varepsilon_{Q^n}$ the germ map of $Q^n(\mathcal F)$. The **Godement
resolution** of $\mathcal F$ is the coaugmented complex
$$0\to\mathcal F\xrightarrow{\ \varepsilon_{\mathcal F}\ } C^0(\mathcal F)\xrightarrow{\ d^0\ }C^1(\mathcal F)\xrightarrow{\ d^1\ }\cdots,$$
where $d^n:C^n(\mathcal F)\to C^{n+1}(\mathcal F)$ is the composite of the
quotient morphism $C^n(\mathcal F)\to Q^n(\mathcal F)$ with the germ map
$\varepsilon_{Q^n}:Q^n(\mathcal F)\to C^0(Q^n(\mathcal F))=C^{n+1}(\mathcal F)$.
Its terms are sheaves of abelian groups on $X$ and its differentials are
differentials of the cochain complex $\Gamma(X,C^\bullet(\mathcal F))$ after
applying global sections.

The construction is functorial: a morphism $\varphi:\mathcal F\to\mathcal G$ of
abelian sheaves induces morphisms of stalks $\varphi_x$, hence morphisms
$C^0(\varphi)$, $Q^0(\varphi)$, and by recursion morphisms $C^n(\varphi)$ and
$Q^n(\varphi)$ commuting with the germ maps and the differentials, so that
$C^\bullet$ is a functor from $\mathrm{Ab}(X)$ to the category of coaugmented cochain complexes in $\mathrm{Ab}(X)$ ([[thm-abelian-sheaves-form-abelian-category]]). The germ
map $\varepsilon_{\mathcal E}:\mathcal E\to C^0(\mathcal E)$ is injective for
every abelian sheaf $\mathcal E$, by [[lem-section-zero-if-all-germs-zero]].
