---
id: lem-qcqs-structure-pushforward-affine-local
kind: lemma
title: "Structure sheaf of a quasi-compact quasi-separated morphism is affine-local"
status: published
origin: pipeline
deps:
  - def-quasi-compact-and-quasi-separated-morphism
  - def-affine-local-quasi-coherent-algebra
  - thm-affine-scheme-ring-anti-equivalence
  - thm-sections-basic-open-affine-scheme
  - def-sheaf-on-topological-space
  - def-direct-image-sheaf
  - thm-fibre-products-of-schemes-exist
  - thm-localisation-of-modules-is-exact
  - thm-localisations-are-flat
  - cor-affine-scheme-quasi-compact
  - thm-tensor-products-commute-with-arbitrary-direct-sums
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.11 (quasi-coherent sheaves and pushforwards)"
      url: https://stacks.math.columbia.edu/tag/01S8
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.25 (flat morphisms)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Let $f:X\to S$ be a quasi-compact and quasi-separated morphism. For every
affine open $U=\operatorname{Spec}R\subseteq S$, put
$M=\Gamma(f^{-1}(U),\mathcal O_X)$, an $R$-algebra under $f^\sharp$. Then:

1. For every $r\in R$ there is a canonical isomorphism of $R$-algebras
   $$M\otimes_RR_r\;\cong\;\Gamma\bigl(f^{-1}(D(r)),\mathcal O_X\bigr),$$
   compatible with restriction $M\otimes_RR_r\to M\otimes_RR_s$ for
   $D(s)\subseteq D(r)$ and with multiplication; hence $f_*\mathcal O_X$ is an
   affine-local quasi-coherent $\mathcal O_S$-algebra
   ([[def-affine-local-quasi-coherent-algebra]]).
2. If $R\to R'$ is flat and $U'=\operatorname{Spec}R'\to U$ is the induced map,
   then there is a canonical isomorphism
   $$M\otimes_RR'\;\cong\;\Gamma\bigl(f^{-1}(U)\times_UU',\mathcal O_X\bigr).$$

No choice principle is used: the only selections are finitely many members of
a fixed affine cover.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] $f$ is quasi-compact when $f^{-1}(V)$ is quasi-compact for every quasi-compact open $V\subseteq S$, and quasi-separated when for affine opens $U_1,U_2\subseteq X$ lying over a common affine open of $S$ the intersection $U_1\cap U_2$ is quasi-compact ([[def-quasi-compact-and-quasi-separated-morphism]]).

[F2] Every affine scheme is quasi-compact ([[cor-affine-scheme-quasi-compact]]).

[F4] Every diagram $X\to S\leftarrow Y$ has a fibre product, and over affine opens with $f^{-1}(\operatorname{Spec}A)=\bigcup_j\operatorname{Spec}B_j$, $g^{-1}(\operatorname{Spec}A)=\bigcup_k\operatorname{Spec}C_k$ the product has affine cover $\operatorname{Spec}(B_j\otimes_AC_k)$ ([[thm-fibre-products-of-schemes-exist]]).

[F5] A sheaf has unique gluing of compatible sections on every open cover; equivalently a family of sections agreeing on all pairwise intersections comes from a unique section ([[def-sheaf-on-topological-space]]).

[F6] For an affine spectrum and $r\in R$, sections of the structure sheaf on the principal open $D(r)$ are the localisation $\Gamma(D(r),\mathcal O)=R_r$, and restriction $D(s)\subseteq D(r)$ is the canonical localisation map ([[thm-sections-basic-open-affine-scheme]]).

[F7] Localisation is exact and $R\to R_r$ is flat, so $-\otimes_RR_r$ is an exact functor ([[thm-localisation-of-modules-is-exact]], [[thm-localisations-are-flat]]).

[F8] Tensor product commutes with finite direct sums, and a finite product of modules is a finite direct sum, so $(\prod_iN_i)\otimes_RR'\cong\prod_i(N_i\otimes_RR')$ ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[F9] Sections of the direct image are $(f_*\mathcal O_X)(V)=\Gamma(f^{-1}(V),\mathcal O_X)$ with restrictions induced by those of $\mathcal O_X$ ([[def-direct-image-sheaf]]).

[F10] The affine-local quasi-coherent condition asks for an $R$-algebra $B_U$ with $\mathcal A|_U\cong\widetilde{B_U}$, restriction to $D(r)$ being $B_U\to B_U[\varphi(r)^{-1}]$ ([[def-affine-local-quasi-coherent-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Fix an affine open $U=\operatorname{Spec}R\subseteq S$ and write $X_U=f^{-1}(U)$, so $\Gamma(X_U,\mathcal O_X)=(f_*\mathcal O_X)(U)$ by [F9]. The open $U$ is quasi-compact by [F2], so $X_U$ is quasi-compact by [F1]; since affine opens form a basis of $X_U$, there are finitely many affine opens $U_1,\dots,U_n\subseteq X_U$ with $X_U=U_1\cup\cdots\cup U_n$. [F1, F2, F9]

1.2 For every pair $i,j$ the intersection $U_i\cap U_j$ is quasi-compact by [F1], since $U_i,U_j$ are affine and both lie over the affine open $U$. Choose finitely many affine opens $U_{ijk}\subseteq U_i\cap U_j$ covering $U_i\cap U_j$; one may take $U_{iii}=U_i$. The restrictions of $\mathcal O_X$ give maps $$\Gamma(X_U,\mathcal O_X)\longrightarrow\prod_i\Gamma(U_i,\mathcal O_X)\xrightarrow{\ \partial\ }\prod_{i,j,k}\Gamma(U_{ijk},\mathcal O_X),$$ where $\partial\bigl((s_i)_i\bigr)_{i,j,k}=s_i|_{U_{ijk}}-s_j|_{U_{ijk}}$; the composite is zero. [F1]

1.3 For the second assertion let $R\to R'$ be flat and put $U'=\operatorname{Spec}R'$, so the fibre product $X_U\times_UU'$ has the affine open cover $\{U_i\times_UU'\}$ with $U_i\times_UU'\cong\operatorname{Spec}(C_i\otimes_RR')$ where $C_i=\Gamma(U_i,\mathcal O_X)$, and pairwise intersections covered by the affine opens $U_{ijk}\times_UU'$; here $\Gamma(U_i\times_UU',\mathcal O_{X_U\times_UU'})=C_i\otimes_RR'=\Gamma(U_i,\mathcal O_X)\otimes_RR'$ and likewise for the triple intersections. [F4]

2.1 This sequence is exact at the middle term. If a section over $X_U$ restricts to zero on every $U_i$ it is zero because the $U_i$ cover $X_U$; conversely if $(s_i)_i$ satisfies $\partial(s_i)=0$, then $s_i$ and $s_j$ agree on each member $U_{ijk}$ of a cover of $U_i\cap U_j$, so by [F5] they agree on $U_i\cap U_j$; the sheaf axiom [F5] then glues the family to a unique section of $\mathcal O_X$ over $X_U=X_U$. Hence $0\to\Gamma(X_U,\mathcal O_X)\to\prod_i\Gamma(U_i,\mathcal O_X)\to\prod_{i,j,k}\Gamma(U_{ijk},\mathcal O_X)$ is exact. [F5, step 1.1, step 1.2]

3.1 Fix $r\in R$ and apply the exact functor $-\otimes_RR_r$ of [F7] to the sequence of step 2.1, using [F8] to move the tensor product inside the finite products. Since each $U_i$, and each $U_{ijk}$, is affine and its structure map to $U=\operatorname{Spec}R$ makes its ring of sections an $R$-algebra, [F6] identifies $\Gamma(U_i,\mathcal O_X)\otimes_RR_r=\Gamma(U_i,\mathcal O_X)_r=\Gamma(U_i\cap f^{-1}(D(r)),\mathcal O_X)$ and likewise for the $U_{ijk}$, where $U_i\cap f^{-1}(D(r))$ and $U_{ijk}\cap f^{-1}(D(r))$ are principal opens of the affine schemes $U_i$, $U_{ijk}$ and hence affine. So the localised sequence is exact. [F6, F7, F8, step 2.1]

3.2 Tensoring the exact sequence of step 2.1 with $R'$ is exact because $R'$ is flat over $R$, and by [F8] the tensored sequence has the terms computed in step 1.3, so it is the sheaf equaliser sequence of the pulled-back cover of $X_U\times_UU'$; its kernel is therefore $\Gamma(X_U\times_UU',\mathcal O_X)$ by the argument of step 2.1, while the kernel of the original sequence is $M=\Gamma(X_U,\mathcal O_X)$ by step 2.1. Since tensor product of the exact sequence preserves the kernel, $M\otimes_RR'\cong\Gamma(X_U\times_UU',\mathcal O_X)$. [F5, F8, step 2.1, step 1.3]

4.1 The opens $U_i\cap f^{-1}(D(r))$ form a finite affine open cover of $X_U\cap f^{-1}(D(r))=f^{-1}(D(r))$, and their intersections are covered by the affine opens $U_{ijk}\cap f^{-1}(D(r))$; the canonical map on restrictions gives exactly the localised sequence of step 3.1. By the same sheaf argument as in step 2.1, its kernel is $\Gamma(f^{-1}(D(r)),\mathcal O_X)$, so step 3.1 yields a canonical isomorphism $M\otimes_RR_r\cong\Gamma(f^{-1}(D(r)),\mathcal O_X)$ with $M=\Gamma(X_U,\mathcal O_X)$; it is multiplicative because all maps are restriction maps of the structure sheaf and localisation maps of rings. [F5, F6, step 3.1]

5.1 If $D(s)\subseteq D(r)$, the localisation $M\otimes_RR_r\to M\otimes_RR_s$ corresponds under step 4.1 to the restriction $\Gamma(f^{-1}(D(r)),\mathcal O_X)\to\Gamma(f^{-1}(D(s)),\mathcal O_X)$: both are induced by restricting sections along $f^{-1}(D(s))\subseteq f^{-1}(D(r))$, and the identification with localisation in step 3.1 is natural in the localised ring. Since $U$ was arbitrary and these identifications are compatible with restriction and multiplication, $U\mapsto\Gamma(f^{-1}U,\mathcal O_X)$ together with them is precisely the affine-local module-associated structure of [F10] for $f_*\mathcal O_X$. [F6, F10, step 4.1]

6.1 All selections in the proof are of finitely many members of a fixed cover of a quasi-compact space or of a basis of an affine scheme, which are finitely many existential instantiations and not applications of a choice principle; the gluing in [F5] is unique, and the AC-free statements are used only. Hence the lemma is choice-free. [F5, step 1.1, step 2.1] $\square$
