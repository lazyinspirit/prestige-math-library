---
id: lem-invertible-sheaf-dual-tensor-inverse
kind: lemma
title: Dual of a line bundle is its tensor inverse
status: draft
origin: pipeline
deps:
  - def-invertible-sheaf
  - lem-dual-locally-free-and-base-change
  - def-sheaf-hom
  - def-sheaf-tensor-product
  - def-sheafification
  - thm-sheafification-universal-property
  - thm-universal-property-of-module-tensor-products
  - def-module-on-ringed-space
  - def-sheaf-on-topological-space
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Let $X$ be a scheme and let $\mathcal L$ be an invertible $\mathcal O_X$-module
([[def-invertible-sheaf]]), with dual
$\mathcal L^\vee=\mathcal H om_{\mathcal O_X}(\mathcal L,\mathcal O_X)$
([[def-sheaf-hom]]). Then the evaluation pairing
$$\operatorname{ev}:\mathcal L^\vee\otimes_{\mathcal O_X}\mathcal L \longrightarrow\mathcal O_X,\qquad \varphi\otimes s\longmapsto\varphi(s),$$
is an isomorphism of $\mathcal O_X$-modules, so $\mathcal L^\vee\otimes\mathcal L\cong\mathcal O_X$
canonically; here $\otimes$ is the tensor product of sheaves of modules
([[def-sheaf-tensor-product]]).

Moreover the dual is described by transition data: if $X=\bigcup_iU_i$ and
$\tau_i:\mathcal L|_{U_i}\to\mathcal O_{U_i}$ are trivialisations, and
$u_{ij}\in\Gamma(U_i\cap U_j,\mathcal O_X)^\times$ are the units with
$\tau_i\circ\tau_j^{-1}$ equal to multiplication by $u_{ij}$, then the induced
trivialisations $\tau_i^\vee$ of $\mathcal L^\vee$ have transition units
$u_{ij}^{-1}$, and $\tau_i^\vee\otimes\tau_i$ is a trivialisation of
$\mathcal L^\vee\otimes\mathcal L$ whose transition units are
$u_{ij}^{-1}u_{ij}=1$, compatible with the evaluation isomorphism. No choice
principle is used.

## Facts & Assumptions

**Given:** A scheme $X$ and an invertible $\mathcal O_X$-module $\mathcal L$,
with a cover $X=\bigcup_iU_i$ and trivialisations
$\tau_i:\mathcal L|_{U_i}\to\mathcal O_{U_i}$.

[F1] $\mathcal L$ is locally free of rank $1$: there is an open cover by sets
$U$ with $\mathcal L|_U\cong\mathcal O_U$; equivalently, on each such open a
generator $s\in\mathcal L(U)$ induces an isomorphism
$\mathcal O_U\to\mathcal L|_U$, $a\mapsto a\cdot s|_U$
([[def-invertible-sheaf]]).

[F2] $\mathcal L^\vee=\mathcal H om_{\mathcal O_X}(\mathcal L,\mathcal O_X)$ is
finite locally free, and on a chart $U$ with $\mathcal L|_U\cong\mathcal O_U$
one has $\mathcal L^\vee|_U\cong\mathcal O_U$
([[lem-dual-locally-free-and-base-change]]).

[F3] Sections of the internal Hom are homomorphisms:
$\Gamma(U,\mathcal L^\vee)=\operatorname{Hom}_{\mathcal O_U}(\mathcal L|_U,\mathcal O_U)$,
with restrictions given by restriction of morphisms, and restriction of the
Hom sheaf to $U$ is $\mathcal H om_{\mathcal O_U}(\mathcal L|_U,\mathcal O_U)$
([[def-sheaf-hom]], [[def-module-on-ringed-space]]).

[F4] The tensor product sheaf
$\mathcal F\otimes_{\mathcal O_X}\mathcal G$ is the sheafification of the
presheaf $U\mapsto\mathcal F(U)\otimes_{\mathcal O_X(U)}\mathcal G(U)$; a
natural family of $\mathcal O_X(U)$-bilinear maps
$\mathcal F(U)\times\mathcal G(U)\to\mathcal H(U)$ therefore induces a
morphism of sheaves $\mathcal F\otimes_{\mathcal O_X}\mathcal G\to\mathcal H$
([[def-sheaf-tensor-product]], [[def-sheafification]],
[[thm-sheafification-universal-property]]).

[F5] Universal property of the module tensor product: a bilinear map
$M\times N\to P$ over a commutative ring $R$ factors uniquely through
$M\otimes_RN$; in particular $R\otimes_RR\to R$, $a\otimes b\mapsto ab$, is an
isomorphism with inverse $c\mapsto c\otimes1$
([[thm-universal-property-of-module-tensor-products]]).

[F6] A morphism of $\mathcal O_X$-modules which restricts to an isomorphism on
each member of an open cover is an isomorphism, because sections over an open
set are determined by their restrictions to a cover and compatible families
glue ([[def-sheaf-on-topological-space]]).

[F7] For an $\mathcal O_X$-module $\mathcal F$ and open $U$, evaluation on the
unit section gives an isomorphism
$\operatorname{Hom}_{\mathcal O_U}(\mathcal O_U,\mathcal F)\to\mathcal F(U)$,
$\psi\mapsto\psi(1)$, with inverse $x\mapsto(a\mapsto a\cdot x)$; in particular
$\operatorname{Hom}_{\mathcal O_U}(\mathcal O_U,\mathcal O_U)\cong\mathcal O_X(U)$,
and an endomorphism of $\mathcal O_U$ is an isomorphism exactly when its value
at $1$ is a unit ([[def-module-on-ringed-space]]).



**Proof technique:** direct; define evaluation on the presheaf tensor product,
and check it is an isomorphism on a trivialising cover, where it becomes the
multiplication map of the structure sheaf.

## Proof

1.1 Evaluation is a morphism: for each open $U\subseteq X$ the map $\mathcal L^\vee(U)\times\mathcal L(U)\to\mathcal O_X(U)$, $(\varphi,s)\mapsto\varphi(s)$, is well defined by [F3], is $\mathcal O_X(U)$-bilinear by additivity and $\mathcal O_X$-linearity of homomorphisms of module sheaves, and is compatible with restrictions; by [F4] it induces a morphism of $\mathcal O_X$-modules $\operatorname{ev}:\mathcal L^\vee\otimes_{\mathcal O_X}\mathcal L\to\mathcal O_X$ with $\operatorname{ev}(\varphi\otimes s)=\varphi(s)$. [F3, F4]

1.2 On a chart $U$ with trivialisation $\tau:\mathcal L|_U\to\mathcal O_U$, the induced trivialisation of the dual is $\tau^\vee:\mathcal L^\vee|_U\to\mathcal O_U$, $\psi\mapsto\psi(\tau^{-1}(1))$, which is an isomorphism because $\psi\mapsto\psi(\tau^{-1}(1))$ corresponds under $\tau$ to the isomorphism $\operatorname{Hom}_{\mathcal O_U}(\mathcal O_U,\mathcal O_U)\cong\mathcal O_U$ of [F7]; moreover every automorphism of the trivial bundle $\mathcal O_U$ is multiplication by a unit of $\mathcal O_X(U)$, again by [F7]. [F2, F3, F7]

2.1 On such a chart $U$, transport the evaluation morphism along the trivialisations $\tau^\vee\otimes\tau$: the result is the map $\mathcal O_U\otimes_{\mathcal O_U}\mathcal O_U\to\mathcal O_U$, $a\otimes b\mapsto ab$, which is an isomorphism by [F5], with inverse $c\mapsto c\otimes1$. By [F1] such trivialising charts cover $X$, so $\operatorname{ev}$ restricts to an isomorphism on every member of a cover of $X$, and is therefore an isomorphism by [F6]; this proves the first claim. [F1, F5, F6, step 1.1, step 1.2]

2.2 Transition units: let $\tau_i,\tau_j$ be two trivialisations as in the Statement, and put $u_{ij}=(\tau_i\circ\tau_j^{-1})(1)\in\Gamma(U_i\cap U_j,\mathcal O_X)$; by step 1.2 the automorphism $\tau_i\circ\tau_j^{-1}$ of $\mathcal O_{U_i\cap U_j}$ is multiplication by $u_{ij}$, which is a unit because the automorphism is invertible. Computing the transition of the duals, for $a\in\Gamma(U_i\cap U_j,\mathcal O_X)$ and with $\varphi_i=\tau_i^\vee{}^{-1}(1),\varphi_j=\tau_j^\vee{}^{-1}(1)$ one has $\tau_i^\vee(a\varphi_j)=a\varphi_j(\tau_i^{-1}(1))=a\,(\tau_j\circ\tau_i^{-1})(1)=a\,u_{ij}^{-1}$, since $\tau_j\circ\tau_i^{-1}=(\tau_i\circ\tau_j^{-1})^{-1}$ is multiplication by $u_{ij}^{-1}$; so the transition unit of $\mathcal L^\vee$ is $u_{ij}^{-1}$. [step 1.2]

3.1 Compatibility with evaluation: under the trivialisation $\tau_i^\vee\otimes\tau_i$ the evaluation pairing becomes multiplication $\mathcal O_{U_i}\otimes\mathcal O_{U_i}\to\mathcal O_{U_i}$, $a\otimes b\mapsto ab$, by step 2.1, and under the transitions of step 2.2 both sides transform by $u_{ij}^{-1}$ and $u_{ij}$ respectively, so the transition unit of $\mathcal L^\vee\otimes\mathcal L$ is $u_{ij}^{-1}u_{ij}=1$ and evaluation is the identity trivialisation on overlaps; all constructions are local and canonical, so no choice principle is used. [step 2.1, step 2.2] ∎
