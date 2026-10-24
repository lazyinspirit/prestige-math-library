---
id: "lem-affine-module-sheaf-universal-property"
kind: "lemma"
title: "The sheaf attached to a module on an affine scheme"
status: published
origin: "pipeline"
deps: ["def-sheafification", "def-presheaf-plus-construction", "thm-sheafification-universal-property", "def-module-on-ringed-space", "thm-universal-property-of-module-tensor-products", "thm-global-sections-affine-scheme", "def-affine-scheme-spectrum", "thm-right-exactness-of-tensor-products"]
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Stacks Schemes, Lemma 26.7.1 (tag 01I7)"
      url: "https://stacks.math.columbia.edu/tag/01I7"
    - title: "Stacks Modules, Definition 17.10.1 (tag 01BE), Lemma 17.10.5 (tag 01BH) and Definition 17.10.6 (tag 01BI)"
      url: "https://stacks.math.columbia.edu/tag/01BH"
verification:
  audited: 2026-09-27
---

## Statement

Let $B$ be a commutative ring, let $M$ be a $B$-module and let
$X=\operatorname{Spec}B$ with structure sheaf $\mathcal O_X$
([[def-affine-scheme-spectrum]]). Let $P_M$ be the presheaf of abelian groups
$$P_M(U):=M\otimes_B\mathcal O_X(U),$$
with restrictions $\mathrm{id}_M\otimes\rho_{V\subseteq U}$ induced by those of
$\mathcal O_X$; it is a presheaf of $\mathcal O_X$-modules. Its sheafification
$$\widetilde M:=aP_M$$
is a sheaf of $\mathcal O_X$-modules, the **sheaf attached to $M$**, and for
every $\mathcal O_X$-module $\mathcal F$ the map
$$\operatorname{Hom}_{\mathcal O_X}(\widetilde M,\mathcal F)\longrightarrow \operatorname{Hom}_B(M,\mathcal F(X)),\qquad \varphi\longmapsto\varphi_X\circ\varepsilon,$$
where $\varepsilon:=\eta_{P_M,X}\circ\iota_M$ and
$\iota_M\colon M\xrightarrow{\cong}P_M(X)$ is the canonical identification
from $B\cong\mathcal O_X(X)$, is a
bijection, natural in $M$ and in $\mathcal F$. Its inverse sends a $B$-linear
$g\colon M\to\mathcal F(X)$ to the unique morphism whose component over $U$,
after precomposition with $P_M(U)\to\widetilde M(U)$, is
$$M\otimes_B\mathcal O_X(U)\longrightarrow\mathcal F(U),\qquad m\otimes a\longmapsto a\cdot g(m)|_U .$$
A $B$-linear map $M\to N$ induces a morphism $\widetilde M\to\widetilde N$, so
$M\mapsto\widetilde M$ is a functor; it is right exact, and
$\widetilde B\cong\mathcal O_X$ with $\Gamma(X,\widetilde B)=B$. No finiteness
assumption is made on $M$ or on $B$.

## Facts & Assumptions

**Given:** A commutative ring $B$, a $B$-module $M$, the affine scheme $X=\operatorname{Spec}B$ and the presheaf $P_M$.

[F1] [[def-sheafification]]: for a presheaf $\mathcal F$ the sheafification $a\mathcal F$ is a sheaf equipped with a morphism $\eta_{\mathcal F}\colon\mathcal F\to a\mathcal F$; it is the double plus construction using germ-compatible local presentations ([[def-presheaf-plus-construction]]).

[F2] [[thm-sheafification-universal-property]]: for every morphism of presheaves $\varphi\colon\mathcal F\to\mathcal G$ with $\mathcal G$ a sheaf there is a unique morphism of sheaves $\overline\varphi\colon a\mathcal F\to\mathcal G$ with $\varphi=\overline\varphi\circ\eta_{\mathcal F}$.

[F3] [[def-module-on-ringed-space]]: an $\mathcal O_X$-module is a sheaf of abelian groups whose section groups are $\mathcal O_X(U)$-modules compatibly with restriction, and a morphism of $\mathcal O_X$-modules is $\mathcal O_X(U)$-linear on every open set.

[F4] [[thm-universal-property-of-module-tensor-products]]: for a $B$-bilinear map $\beta\colon M\times N\to P$ into a $B$-module there is a unique $B$-linear $\overline\beta\colon M\otimes_BN\to P$ with $\overline\beta(m\otimes n)=\beta(m,n)$.

[F5] [[thm-global-sections-affine-scheme]]: the canonical map $B\to\Gamma(X,\mathcal O_X)$ is an isomorphism.

[F6] [[thm-right-exactness-of-tensor-products]]: tensoring an exact sequence of $B$-modules with any $B$-module preserves its cokernel and surjectivity.

## Proof

**Proof technique:** direct.

1.1 $P_M$ is a presheaf of $\mathcal O_X$-modules. The restriction $M\otimes_B\mathcal O_X(U)\to M\otimes_B\mathcal O_X(V)$ is $\mathrm{id}_M\otimes\rho$ for $V\subseteq U$, it is additive and functorial, and $a\cdot(m\otimes a')=m\otimes aa'$ shows that it is $\mathcal O_X(U)$-linear after restricting scalars along $\mathcal O_X(U)\to\mathcal O_X(V)$; the module structure on $aP_M$ is constructed as follows. For a presheaf of $\mathcal O_X$-modules $P$, a scalar $a\in\mathcal O_X(U)$ acts on a plus-section represented by $(U_i,s_i)$ by $(U_i,a|_{U_i}s_i)$. This is independent of the representative because equality of germs is preserved by multiplication. Addition is defined on the common refinement of two covers. All module laws and compatibility with restriction follow on these local representatives from the corresponding laws in $P$. Apply this construction twice to obtain the module structure on $aP_M$; its unit map is linear. Moreover every section of $aP$ is locally represented by a section of $P$, by refining twice the presentations in [F1]. [F1, F3]

1.2 Morphisms of presheaves of $\mathcal O_X$-modules $\varphi\colon P_M\to\mathcal F$ with $\mathcal F$ a sheaf are the compatible families of $\mathcal O_X(U)$-linear maps $\varphi_U\colon M\otimes_B\mathcal O_X(U)\to\mathcal F(U)$, and these are in canonical bijection with $B$-linear maps $g\colon M\to\mathcal F(X)$: the map $g$ is recovered as $\varphi_X(-\otimes1)$, while for a given $g$ the formulas $\psi_U(m\otimes a):=a\cdot g(m)|_U$ define a family that is well defined and $B$-bilinear in $(m,a)$, hence $\mathcal O_X(U)$-linear by [F4], and compatible with restrictions by the compatibility of the restrictions of $\mathcal F$. The two assignments are inverse because the values on the elements $m\otimes1$ determine an $\mathcal O_X(U)$-linear map on all of $M\otimes_B\mathcal O_X(U)$. [F3, F4]

2.1 By [F2] a linear presheaf map $P_M\to\mathcal F$ extends uniquely as a morphism of sheaves. This extension is linear: locally write a section as $\eta(s)$ using step 1.1, and then $\overline\varphi(a\eta(s))=\overline\varphi(\eta(as))=\varphi(as)=a\varphi(s)$; additivity is checked on a common local presentation in the same way. Equality of sheaf sections is local. Conversely precomposition of a linear sheaf map with the linear unit is linear. Thus [F2] restricts to the module morphisms, and step 1.2 gives a bijection $\operatorname{Hom}_{\mathcal O_X}(\widetilde M,\mathcal F)\cong\operatorname{Hom}_B(M,\mathcal F(X))$; under it, $\varphi$ corresponds to $\varphi_X\circ\eta_{P_M,X}\circ\iota_M=\varphi_X\circ\varepsilon$, using the identification $\iota_M$ from [F5]. The displayed formula is the component of the presheaf map $P_M\to\mathcal F$, hence the composite of the induced sheaf morphism with $P_M(U)\to\widetilde M(U)$. Naturality in $M$ and in $\mathcal F$ is immediate from the formula $m\otimes a\mapsto a\cdot g(m)|_U$, and a $B$-linear $u\colon M\to N$ induces $u\otimes\mathrm{id}\colon P_M\to P_N$ and hence a morphism $\widetilde M\to\widetilde N$. [F2, F5, step 1.1, step 1.2]

3.1 For $M=B$ one has $P_B(U)=B\otimes_B\mathcal O_X(U)\cong\mathcal O_X(U)$, so $\widetilde B\cong a\mathcal O_X=\mathcal O_X$ because $\mathcal O_X$ is already a sheaf, and $\Gamma(X,\widetilde B)\cong B$ by [F5]. For an exact sequence $M'\to M\to M''\to0$, [F6] makes the corresponding sequence of presheaves $P_{M'}\to P_M\to P_{M''}\to0$ objectwise right exact; sheafification, as the left adjoint supplied by [F2], preserves its cokernel and gives $\widetilde M'\to\widetilde M\to\widetilde M''\to0$ exact. [F2, F5, F6, step 1.1] ∎
