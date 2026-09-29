---
id: def-vector-bundle-scheme
kind: definition
title: Geometric vector bundle with the sections convention
status: published
origin: pipeline
deps:
  - def-locally-free-sheaf-finite-rank
  - def-quasi-coherent-module-scheme
  - lem-dual-locally-free-and-base-change
  - def-symmetric-algebra-qc-module
  - lem-symmetric-algebra-qc-and-base-change
  - lem-relative-spec-glues-affine-algebras
  - thm-affine-morphism-relative-spec-characterization
  - def-affine-local-quasi-coherent-algebra
  - def-affine-morphism-schemes
  - def-scheme-over-base
  - def-direct-image-sheaf
  - def-morphism-of-schemes
  - def-axiom-of-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Constructions of Schemes §27.6"
      url: "https://stacks.math.columbia.edu/tag/01M1"
pipeline_run: frontier-36-complete
verification:
  audited: 2026-09-30
---

## Definition

Assume the Axiom of Choice, inherited from the relative-spectrum and
symmetric-algebra machinery used below ([[def-axiom-of-choice]],
[[lem-relative-spec-glues-affine-algebras]],
[[lem-symmetric-algebra-qc-and-base-change]]). Let $X$ be a scheme
([[def-scheme-over-base]]).

**Graded coordinate algebras.** Let $\pi:V\to X$ be an affine $X$-scheme
([[def-affine-morphism-schemes]]). Its **relative coordinate algebra** is
$$\mathcal A\;=\;\pi_*\mathcal O_V,$$
a sheaf of commutative unital $\mathcal O_X$-algebras with structure map the
comorphism $\pi^\sharp:\mathcal O_X\to\pi_*\mathcal O_V$
([[def-direct-image-sheaf]], [[def-morphism-of-schemes]]). By the
relative-spectrum characterization of affine morphisms, $\pi$ is recovered
from the affine-locally module-associated algebra $\mathcal A$
([[thm-affine-morphism-relative-spec-characterization]],
[[def-affine-local-quasi-coherent-algebra]]).

A **grading** on a sheaf $\mathcal A$ of commutative unital
$\mathcal O_X$-algebras is a family $(\mathcal A_d)_{d\ge0}$ of
$\mathcal O_X$-submodules with $\mathcal A_d\mathcal A_e\subseteq
\mathcal A_{d+e}$ for all $d,e\ge0$ whose multiplication maps assemble into an
isomorphism of $\mathcal O_X$-modules
$\bigoplus_{d\ge0}\mathcal A_d\to\mathcal A$. The grading is **normalised**
when $\mathcal A_0=\mathcal O_X$, the structure copy of the algebra; this is
the only case used below. An element of $\mathcal A_d$ is **homogeneous of
degree $d$**. A morphism of graded $\mathcal O_X$-algebras is an
$\mathcal O_X$-algebra morphism $\varphi:\mathcal A\to\mathcal B$ with
$\varphi(\mathcal A_d)\subseteq\mathcal B_d$ for every $d\ge0$; if
$\varphi$ is bijective, then $\varphi(\mathcal A_d)=\mathcal B_d$ for every
$d$: an element of $\mathcal B_d$ is a finite sum of elements of the graded
pieces $\varphi(\mathcal A_e)\subseteq\mathcal B_e$, and comparing components
inside the direct sum $\bigoplus_e\mathcal B_e$ shows that it lies in
$\varphi(\mathcal A_d)$; hence the inverse is graded as well.

**Geometric vector bundles.** A **geometric vector bundle over $X$**, in the
sections convention, is an affine $X$-scheme $\pi:V\to X$ together with a
normalised grading $\mathcal A=\bigoplus_{d\ge0}\mathcal A_d$ on its relative
coordinate algebra $\mathcal A=\pi_*\mathcal O_V$ such that there are an open
cover $X=\bigcup_iU_i$, integers $r_i\ge0$, and isomorphisms of graded
$\mathcal O_{U_i}$-algebras
$$\mathcal A|_{U_i}\;\cong\;\operatorname{Sym}\bigl(\mathcal O_{U_i}^{\,r_i}\bigr),$$
where the symmetric algebra carries its grading generated in degree one
([[def-symmetric-algebra-qc-module]],
[[lem-symmetric-algebra-qc-and-base-change]]).

**The rank.** On a trivializing open $U_i$ the degree-one part of such an
isomorphism is an isomorphism
$\mathcal A_1|_{U_i}\cong\operatorname{Sym}^1(\mathcal O_{U_i}^{r_i})
=\mathcal O_{U_i}^{r_i}$, so $\mathcal A_1$ is locally free of finite rank and
has rank $r_i$ on $U_i$ ([[def-symmetric-algebra-qc-module]],
[[def-locally-free-sheaf-finite-rank]]). On an overlap $U_i\cap U_j$ two
trivializations force $r_i=r_j$ pointwise, by the well-definedness of the rank
of a finite locally free sheaf ([[def-locally-free-sheaf-finite-rank]]); the
$r_i$ therefore glue to a locally constant function $r:X\to\mathbb N$, called
the **rank** of the geometric vector bundle. Rank $0$ is allowed: it means
$\mathcal A_1=0$, hence $\mathcal A=\mathcal O_X$ and $V=X$.

**Linearity of the transitions.** Let $W\subseteq X$ be open and let
$\mathcal A|_W\cong\operatorname{Sym}(\mathcal O_W^r)$ and
$\mathcal A|_W\cong\operatorname{Sym}(\mathcal O_W^s)$ be two
trivializations. Their comparison is an isomorphism
$\psi:\operatorname{Sym}(\mathcal O_W^r)\to\operatorname{Sym}(\mathcal O_W^s)$
of graded $\mathcal O_W$-algebras, so the degree-one part $\theta=\psi_1$
is an isomorphism $\mathcal O_W^r\to\mathcal O_W^s$ and
$\psi=\operatorname{Sym}(\theta)$: both maps are graded algebra morphisms out
of $\operatorname{Sym}(\mathcal O_W^r)$ with the same restriction to the
degree-one generators, and that algebra is generated in degree one and
determined by the universal property of [[def-symmetric-algebra-qc-module]].
Thus any two trivializations of a geometric vector bundle differ by an
invertible linear map of degree one, which is the transition condition of the
classical definition; conversely an atlas of trivializations whose transition
isomorphisms are linear transports the standard gradings to a well-defined
grading on $\mathcal A$. The grading belongs to the data of a geometric vector
bundle and is required to be preserved by morphisms, so morphisms of geometric
vector bundles are not arbitrary $X$-morphisms.

**Total space of a finite locally free module.** Let $\mathcal E$ be a finite
locally free $\mathcal O_X$-module, with rank function $r$
([[def-locally-free-sheaf-finite-rank]]). Its dual $\mathcal E^\vee$ is finite
locally free of the same rank, and
$\mathcal E^\vee|_U\cong\mathcal O_U^{r}$ on every open $U$ on which
$\mathcal E|_U\cong\mathcal O_U^{r}$
([[lem-dual-locally-free-and-base-change]]). Put
$$\mathcal A_{\mathcal E}\;:=\;\operatorname{Sym}(\mathcal E^\vee),$$
a quasi-coherent graded $\mathcal O_X$-algebra whose degree-one part is
$\mathcal E^\vee$, with restriction
$\mathcal A_{\mathcal E}|_U\cong\operatorname{Sym}(\mathcal O_U^{r})
\cong\mathcal O_U[T_1,\dots,T_r]$ on every such chart
([[def-symmetric-algebra-qc-module]],
[[lem-symmetric-algebra-qc-and-base-change]]). More generally, for an
arbitrary affine open $U=\operatorname{Spec}R\subseteq X$ the module
$\mathcal E^\vee|_U$ is quasi-coherent, because $\mathcal E^\vee$ is locally
free ([[def-locally-free-sheaf-finite-rank]],
[[def-quasi-coherent-module-scheme]]), so $\mathcal E^\vee|_U\cong\widetilde M$
for an $R$-module $M$, and then the affine model of the symmetric algebra
gives $\mathcal A_{\mathcal E}|_U\cong(\operatorname{Sym}_R M)^{\sim}$, the
module-associated sheaf with its usual principal-open localizations
([[def-symmetric-algebra-qc-module]]). Hence $\mathcal A_{\mathcal E}$ is
affine-locally module-associated
([[def-affine-local-quasi-coherent-algebra]]). The relative spectrum
$$\mathbb V(\mathcal E)\;:=\;\operatorname{Spec}_X\mathcal A_{\mathcal E} \;\longrightarrow\;X$$
exists, is affine over $X$, has relative coordinate algebra canonically
isomorphic to $\mathcal A_{\mathcal E}$, and carries the grading of
$\mathcal A_{\mathcal E}$; it is therefore a geometric vector bundle of rank
$r$, the **geometric total space** of $\mathcal E$
([[lem-relative-spec-glues-affine-algebras]],
[[thm-affine-morphism-relative-spec-characterization]]). On a trivializing
chart $\mathbb V(\mathcal E)$ restricts to
$\operatorname{Spec}_U\operatorname{Sym}(\mathcal O_U^r)\cong\mathbf A^r_U$,
the relative affine space of [[def-scheme-over-base]]; in particular
$\mathbb V(\mathcal O_X^r)\cong\mathbf A^r_X$. The degree-one part of
$\mathcal A_{\mathcal E}$ is $\mathcal E^\vee$, so
$\mathcal E\cong(\mathcal A_{\mathcal E})_1^\vee$ by the double-dual
isomorphism ([[lem-dual-locally-free-and-base-change]]): this is the sense in
which the symmetric algebra is formed on the dual and $\mathcal E$ is regarded
as the sheaf of sections, the sections convention fixed by this item.

**Rank zero.** For $\mathcal E=0$ one has $\mathcal E^\vee=0$ and
$\operatorname{Sym}(0)=\mathcal O_X$, since the degree-one part vanishes
([[def-symmetric-algebra-qc-module]]). Hence
$$\mathbb V(0)\;=\;\operatorname{Spec}_X\mathcal O_X\;=\;X,$$
the identity $X$-scheme, of rank $0$: the zero geometric vector bundle, whose
total space is the base with one zero vector over every point.

**Morphisms.** Let $(V,\mathcal A)$ and $(W,\mathcal B)$ be geometric vector
bundles over $X$ with structure morphisms $\pi_V$ and $\pi_W$. A **morphism of
geometric vector bundles** $\varphi:V\to W$ is an $X$-morphism
([[def-scheme-over-base]]) whose comorphism
$\varphi^\sharp:\mathcal O_W\to\varphi_*\mathcal O_V$
([[def-morphism-of-schemes]]) induces, by pushforward along $\pi_W$ and the
identity $\pi_W\circ\varphi=\pi_V$, a morphism of graded $\mathcal O_X$-algebras
$$\varphi^\sharp:\mathcal B=\pi_{W*}\mathcal O_W\;\longrightarrow\; (\pi_W\circ\varphi)_*\mathcal O_V=\pi_{V*}\mathcal O_V=\mathcal A .$$
Identities and composites of such morphisms are again such, because the
identity is graded and a composite of graded algebra morphisms is graded, so
geometric vector bundles over $X$ with these morphisms form a category; an
**isomorphism** is an invertible morphism in this category.

**Restriction to an open subscheme.** For an open subscheme $W\subseteq X$,
the base change $V\times_XW\to W$ with the restricted grading on
$\mathcal A|_W$ is again a geometric vector bundle over $W$, of the restricted
rank: the restriction clause of [[lem-relative-spec-glues-affine-algebras]]
identifies the relative spectrum over $W$ with the base change, and
$\operatorname{Sym}(\mathcal E^\vee)|_W\cong
\operatorname{Sym}((\mathcal E^\vee)|_W)$ is the restriction isomorphism of
[[lem-symmetric-algebra-qc-and-base-change]].

**Choice.** The Axiom of Choice is used only through the relative-spectrum
construction and the symmetric-algebra construction cited above; the data of a
geometric vector bundle are a scheme morphism and a grading, and the
construction of $\mathbb V(\mathcal E)$ uses the family of all affine opens
trivializing $\mathcal E$ without selecting a chart or an isomorphism
([[def-axiom-of-choice]]).
