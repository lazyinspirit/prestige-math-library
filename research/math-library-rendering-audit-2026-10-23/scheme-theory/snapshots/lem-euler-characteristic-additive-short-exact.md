---
id: lem-euler-characteristic-additive-short-exact
kind: lemma
title: "Euler characteristic is additive in short exact sequences"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-projective-cohomology-finite-dimensional-field
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-dimension
  - def-euler-characteristic-coherent-sheaf
  - def-exact-sequence-sheaves
  - def-field
  - def-module-on-ringed-space
  - def-proper-morphism
  - def-rank-and-nullity
  - def-sheaf-cohomology-derived-global-sections
  - def-vector-space
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-rank-nullity
  - thm-serre-finiteness-projective-cohomology
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the finiteness and long-exactness
suppliers cited below ([[def-axiom-of-choice]]). Let $k$ be a field
([[def-field]]), let $X$ be a scheme proper over $k$
([[def-proper-morphism]]), and let
$$0\longrightarrow\mathcal F'\xrightarrow{\ \alpha\ }\mathcal F\xrightarrow{\ \beta\ }\mathcal F''\longrightarrow0$$
be a short exact sequence of $\mathcal O_X$-modules
([[def-exact-sequence-sheaves]], [[def-module-on-ringed-space]]) in which the
three terms $\mathcal F'$, $\mathcal F$ and $\mathcal F''$ are coherent
([[def-coherent-module-scheme]]). Then
$$\chi(X,\mathcal F)=\chi(X,\mathcal F')+\chi(X,\mathcal F''),$$
where $\chi$ is the Euler characteristic of
[[def-euler-characteristic-coherent-sheaf]].

The empty source $X=\varnothing$, the zero sheaf in any of the three
positions, the degenerate cases in which one of the outer maps is an
isomorphism and every field $k$ are included.

## Facts & Assumptions
**Given:** The Axiom of Choice, a field $k$, a scheme $X$ proper over $k$, and a short exact sequence $0\to\mathcal F'\xrightarrow{\alpha}\mathcal F\xrightarrow{\beta}\mathcal F''\to0$ of coherent $\mathcal O_X$-modules.

[F1] The Euler characteristic: for a field $k$, a scheme $X$ proper over $k$ and a coherent $\mathcal O_X$-module $\mathcal G$, the cohomology groups $H^q(X,\mathcal G)$ are $k$-vector spaces, only finitely many of them are nonzero, and $$\chi(X,\mathcal G)=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal G)$$ is a well-defined integer; if $X=\varnothing$ or $\mathcal G=0$ then $H^q(X,\mathcal G)=0$ in every degree and $\chi(X,\mathcal G)=0$. ([[def-euler-characteristic-coherent-sheaf]])

[F2] Finite-dimensionality and eventual vanishing: for a field $k$, a scheme $X$ proper over $k$ and a coherent $\mathcal O_X$-module $\mathcal G$, every group $H^q(X,\mathcal G)$ is a finite-dimensional $k$-vector space and $H^q(X,\mathcal G)=0$ for all sufficiently large $q$. ([[cor-projective-cohomology-finite-dimensional-field]])

[F3] The long exact sequence, with its $k$-linearity: a short exact sequence of $\mathcal O_X$-modules induces a long exact sequence of $k$-vector spaces $$\cdots\to H^q(X,\mathcal F')\xrightarrow{\ \alpha_q\ }H^q(X,\mathcal F)\xrightarrow{\ \beta_q\ }H^q(X,\mathcal F'')\xrightarrow{\ \delta_q\ }H^{q+1}(X,\mathcal F')\to\cdots,$$ natural in the short exact sequence, with $\alpha_q=H^q(X,\alpha)$, $\beta_q=H^q(X,\beta)$ and $\delta_q$ the connecting map, and with $H^q(X,-)=0$ for $q<0$. All maps displayed are $k$-linear: scalar multiplication by $\lambda\in k$ on an $\mathcal O_X$-module is a morphism $m_\lambda$ of $\mathcal O_X$-modules, naturality of the sequence with respect to the morphism of short exact sequences induced by $m_\lambda$ identifies the scalar action on each $H^q$ with $H^q(X,m_\lambda)$ and makes $\alpha_q$, $\beta_q$ and $\delta_q$ commute with scalar multiplication. The groups carry the $k$-vector space structure of [F1] and [F2]. ([[thm-long-exact-sequence-sheaf-cohomology]], [[def-sheaf-cohomology-derived-global-sections]], [[def-module-on-ringed-space]], [[def-exact-sequence-sheaves]], [[def-vector-space]], [[thm-serre-finiteness-projective-cohomology]], [[cor-projective-cohomology-finite-dimensional-field]])

[F4] Rank-nullity: for a $k$-linear map $T:V\to W$ of $k$-vector spaces with $V$ finite-dimensional, $\dim_kV=\dim_k\ker T+\dim_k\operatorname{im}T$, and for a surjective $T$ the target satisfies $\dim_kW=\dim_kV-\dim_k\ker T$. ([[thm-rank-nullity]], [[def-rank-and-nullity]], [[def-dimension]])

[F5] The Axiom of Choice is the choice principle named in the statement. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct: write the Euler characteristics as finite alternating sums of dimensions using the finiteness corollary, form the long exact cohomology sequence of the short exact sequence, apply rank-nullity at each degree to express the dimensions of the middle and outer groups through the images of the three families of maps, and sum with alternating signs so that the connecting-map contributions telescope to zero.

1.1 Setup and finiteness. By [F1] and [F2] applied to each of the coherent modules $\mathcal F'$, $\mathcal F$ and $\mathcal F''$, every group appearing below is a finite-dimensional $k$-vector space, the three Euler characteristics $\chi(X,\mathcal F')$, $\chi(X,\mathcal F)$ and $\chi(X,\mathcal F'')$ are well-defined integers, and there is an integer $M\ge0$ with $H^q(X,\mathcal G)=0$ for every $q>M$ and each $\mathcal G\in\{\mathcal F',\mathcal F,\mathcal F''\}$; moreover $H^q(X,\mathcal G)=0$ for every $q<0$ by [F3]. Consequently each of the three sums defining $\chi$ is a finite sum over the finitely many degrees $q=0,1,\dots,M$ in which a nonzero group can occur. [F1, F2, F3]

1.2 The long exact sequence. Applying [F3] to the short exact sequence of the statement gives the long exact sequence $$\cdots\to H^{q-1}(X,\mathcal F'')\xrightarrow{\ \delta_{q-1}\ }H^q(X,\mathcal F')\xrightarrow{\ \alpha_q\ }H^q(X,\mathcal F)\xrightarrow{\ \beta_q\ }H^q(X,\mathcal F'')\xrightarrow{\ \delta_q\ }H^{q+1}(X,\mathcal F')\to\cdots,$$ exact at every term, with all maps $k$-linear. Exactness gives $$\operatorname{im}\alpha_q=\ker\beta_q,\qquad\operatorname{im}\beta_q=\ker\delta_q,\qquad\operatorname{im}\delta_{q-1}=\ker\alpha_q$$ for every $q\in\mathbb Z$. [F3]

1.3 Dimension identities. Put $a_q=\dim_kH^q(X,\mathcal F')$, $b_q=\dim_kH^q(X,\mathcal F)$ and $c_q=\dim_kH^q(X,\mathcal F'')$, finite numbers by 1.1. By [F4] applied to the $k$-linear maps $\beta_q$, $\alpha_q$ and $\delta_q$, using the exactness identifications of 1.2, $$b_q=\dim_k\operatorname{im}\alpha_q+\dim_k\operatorname{im}\beta_q,\qquad a_q=\dim_k\operatorname{im}\delta_{q-1}+\dim_k\operatorname{im}\alpha_q,\qquad c_q=\dim_k\operatorname{im}\beta_q+\dim_k\operatorname{im}\delta_q .$$ Indeed, for $\beta_q$ the kernel is $\operatorname{im}\alpha_q$; for $\alpha_q$ the kernel is $\operatorname{im}\delta_{q-1}$; for $\delta_q$ the kernel is $\operatorname{im}\beta_q$. [F4, 1.2]

1.4 Alternating sum. Multiplying the three identities of 1.3 by $(-1)^q$ and summing over $q\in\mathbb Z$, a finite sum by 1.1, and using the linearity of the sum, $$\sum_q(-1)^qb_q=\sum_q(-1)^q\dim_k\operatorname{im}\alpha_q+\sum_q(-1)^q\dim_k\operatorname{im}\beta_q,$$ while $$\sum_q(-1)^qa_q+\sum_q(-1)^qc_q=\sum_q(-1)^q\dim_k\operatorname{im}\alpha_q+\sum_q(-1)^q\dim_k\operatorname{im}\beta_q+\sum_q(-1)^q\dim_k\operatorname{im}\delta_{q-1}+\sum_q(-1)^q\dim_k\operatorname{im}\delta_q .$$ The two connecting-map sums cancel: the index shift $q\mapsto q-1$ gives $\sum_q(-1)^q\dim_k\operatorname{im}\delta_{q-1}=-\sum_q(-1)^q\dim_k\operatorname{im}\delta_q$, the $q=0$ term of the first sum being $\dim_k\operatorname{im}\delta_{-1}=0$ because $H^{-1}=0$ by 1.1 and the finite range $0,\dots,M$ makes the shift legitimate. Hence $\sum_q(-1)^qa_q+\sum_q(-1)^qc_q=\sum_q(-1)^qb_q$. [1.1, 1.3, algebra]

1.5 Conclusion. Restricting the sums of 1.4 to the degrees $q=0,\dots,M$ on which the groups can be nonzero and replacing the dimension sums by the Euler characteristics through [F1] gives $$\chi(X,\mathcal F)=\sum_{q\ge0}(-1)^qb_q=\sum_{q\ge0}(-1)^qa_q+\sum_{q\ge0}(-1)^qc_q=\chi(X,\mathcal F')+\chi(X,\mathcal F''),$$ which is the asserted additivity. [F1, 1.1, 1.4]

2.1 Boundaries and choice. If $X=\varnothing$ then every $\mathcal O_X$-module is zero, so $\mathcal F'=\mathcal F=\mathcal F''=0$, all cohomology vanishes and the identity reads $0=0+0$ by [F1]. If $\mathcal F=0$ then $\beta$ is the zero map and $\mathcal F''=\operatorname{im}\beta=0$, while $\alpha$ is injective with image $\ker\beta=0$, so $\mathcal F'=0$, and again the identity reduces to $0=0+0$; the same argument applies when any one of the three terms is zero, the sequence then exhibiting an isomorphism between the other two and reducing the identity to the tautology $\chi(X,\mathcal G)=\chi(X,\mathcal G)+0$. Since $k$ is a field it is not the zero ring, and the trivial short exact sequence $0\to\mathcal F\to\mathcal F\to0\to0$ is included with $\chi(X,\mathcal F)=\chi(X,\mathcal F)+0$. The endpoint degrees are covered by 1.1 and 1.4: the sums are finite, the degree $q=0$ is included, and the terms with $q<0$ and $q>M$ vanish on both sides. The Axiom of Choice [F5] is inherited through the finiteness corollary of [F2], which uses it to produce the finite-dimensionality and the vanishing bound, and through the long exact sequence of [F3], which uses it to supply the injective resolutions defining sheaf cohomology and the connecting maps; no further selection is made, the data of the statement and the integer $M$ being fixed. [F1, F2, F3, F5, 1.1] ∎
