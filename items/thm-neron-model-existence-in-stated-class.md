---
id: thm-neron-model-existence-in-stated-class
kind: theorem
title: "Existence of Neron models for abelian varieties over a discrete valuation ring"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-neron-model-and-mapping-property
  - def-discrete-valuation-ring
  - lem-arith-separated-minimal-model-and-translations
  - lem-arith-birational-group-law-from-minimal-model
  - lem-arith-strictification-of-dvr-birational-group-law
  - lem-arith-finite-translate-group-completion
  - lem-arith-effective-ample-pair-and-group-descent
  - lem-arith-full-minimal-model-embedding
  - lem-arith-strict-law-translation-and-graph-calculus
  - thm-weil-extension-rational-map-into-group-scheme
  - lem-neron-model-uniqueness-etale-base-change-and-local-nature
  - def-s-dense-open-and-s-rational-map
  - cor-morphisms-equal-on-dense-open-reduced-source
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - def-faithfully-flat-morphism-schemes
  - lem-filtered-colimit-fp-scheme-stage
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 1.3/1 and 4.4/4 (existence of Neron models and the mapping property)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC. Let $R$ be an arbitrary discrete valuation ring with fraction field $K$ and residue field $k$, and let $A_K$ be an abelian variety over $K$. Then there exists a smooth separated finite-type $R$-group scheme $N$ with generic fibre $A_K$ such that for every smooth $R$-scheme $Z$ restriction
$$\operatorname{Hom}_R(Z,N)\longrightarrow\operatorname{Hom}_K(Z_K,A_K)$$
is bijective. The model $N$ is unique up to a unique isomorphism inducing the given identity on generic fibres. No excellence, completeness, perfect-residue-field or reduction-type hypothesis is imposed.

## Facts & Assumptions

**Given:** AC and DC, an arbitrary discrete valuation ring $R$ with fraction field $K$ and residue field $k$, and an abelian variety $A_K$ over $K$.

[F1] There exists a smooth separated finite-type faithfully flat $R$-model $X$ of $A_K$ carrying a birational group law with birational universal translations; the law restricts to a strict law on an $R$-dense model open $U\subseteq X$, whose multiplication domain is an open of $U\times_RU$ with strict universal translations, given by graph closures ([[lem-arith-separated-minimal-model-and-translations]], [[lem-arith-birational-group-law-from-minimal-model]], [[lem-arith-strictification-of-dvr-birational-group-law]], [[lem-arith-strict-law-translation-and-graph-calculus]]).

[F2] Over a strict henselization $R^{\mathrm{sh}}$, finitely many section translates complete the strict law to a smooth separated finite-type $R^{\mathrm{sh}}$-group scheme $H$ containing $U_{R^{\mathrm{sh}}}$ as a fibre-dense open, uniquely; the canonical descent datum on this completion is effective and gives a smooth separated finite-type $R$-group scheme $G$ containing $U$, and the full model $X$ embeds in $G$ as an $R$-dense open ([[lem-arith-finite-translate-group-completion]], [[lem-arith-effective-ample-pair-and-group-descent]], [[lem-arith-full-minimal-model-embedding]]).

[F3] If $S$ is a regular Noetherian base, $Z$ smooth over $S$, $G$ a smooth separated finite-type $S$-group scheme, and an $S$-rational map $Z\dashrightarrow G$ is defined at every height-one point of $Z$, then it extends uniquely to an $S$-morphism $Z\to G$ ([[thm-weil-extension-rational-map-into-group-scheme]]).

[F4] Domains of $R$-rational maps are fibre-dense; morphisms into a separated target that agree on a schematically dense open agree everywhere ([[def-s-dense-open-and-s-rational-map]], [[cor-morphisms-equal-on-dense-open-reduced-source]]).

[F5] Morphisms descend along faithfully flat, quasi-compact, locally finitely presented covers when the two pullbacks agree ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[def-faithfully-flat-morphism-schemes]]). A finitely presented open neighbourhood and morphism over a filtered-colimit local ring spread to a finite stage ([[lem-filtered-colimit-fp-scheme-stage]]).

[F6] Two smooth separated finite-type $R$-models of $A_K$ satisfying the extension property are uniquely isomorphic over $R$ compatibly with their specified generic-fibre identifications; Neron models over Dedekind bases are compatible with etale base change ([[lem-neron-model-uniqueness-etale-base-change-and-local-nature]], [[def-neron-model-and-mapping-property]]).

## Proof

**Proof technique:** build the group model from the minimal model, strictification and effective completion. For the mapping property, extend the generic translation on the minimal model by the codimension-one Weil criterion and descend its value using the faithfully flat model cover.

1.1 By [F1] construct the separated minimal model $X$ of $A_K$, its strictification $U$, and finally by [F2] the descended smooth separated finite-type $R$-group scheme $G$ with generic fibre $G_K=A_K$ and $X\subseteq G$ as an $R$-dense open. [F1, F2, given, construct]

1.2 To prove the mapping property, let $Z$ be a smooth $R$-scheme and $u_K:Z_K\to A_K$ a $K$-morphism. Work first with $Z$ of finite type; arbitrary $Z$ is covered by finite-type opens and the unique extensions glue. Put $Y=Z\times_RX$. On its generic fibre define $\theta_K:Y_K\to G_K$ by $\theta_K(z,x)=u_K(z)x$, using the group law of $G_K=A_K$. For each generic point $\eta$ of an irreducible component of $Z_k$, the local ring $R'=\mathcal O_{Z,\eta}$ is a DVR, with fraction field $K'$, and restriction of $u_K$ along $\operatorname{Spec}K'\to Z_K$ gives a point of $A_K(K')$. The translation supplier [[lem-arith-separated-minimal-model-and-translations]] extends translation by this point to an $R'$-birational self-map of $X_{R'}$ which is an open immersion on its $R'$-dense domain. This domain contains the generic point of every component of the special fibre of $X_{R'}$, so $\theta_K$ extends at the corresponding generic points of $Y_k$. Since $R'$ is the filtered colimit of the rings of affine neighbourhoods of $\eta$, finite-presentation descent [F5] spreads a quasi-compact open neighbourhood and its morphism to $G$ to a neighbourhood in $Y$ of each such point. There are finitely many vertical generic points. Together with the generic fibre, these neighbourhoods form an $R$-dense open in $Y$; the local maps agree on overlaps because the generic fibre is schematically dense in each overlap and $G$ is separated ([F4]), so they glue to an $R$-rational map $\theta:Y\dashrightarrow G$. It is defined at every height-one point of $Y$: the horizontal ones lie in $Y_K$, and each vertical height-one point is the generic point of a component of $Y_k$ just treated. Since $Y$ is smooth over the regular Noetherian DVR and $G$ is a smooth separated finite-type group scheme, [F3] extends $\theta$ uniquely to a morphism $\Theta:Y\to G$. [F1, F2, F3, F4, F5, given, construct]

2.1 Let $j:X\hookrightarrow G$ be the dense open embedding from [F2], and let $\iota_G$ and $m_G$ be inversion and multiplication on $G$. Define $h:Y=Z\times_RX\to G$ by $$h(z,x)=m_G\bigl(\Theta(z,x),\iota_G(j(x))\bigr).$$ On $Y_K$ this is $u_K(z)x x^{-1}=u_K(z)$, independent of $x$. The projection $p:Y\to Z$ is faithfully flat, quasi-compact and locally finitely presented because $X\to\operatorname{Spec}R$ is smooth, finite type and faithfully flat. On $Y\times_ZY=Z\times_RX\times_RX$, the two pullbacks of $h$ agree on the generic fibre, hence everywhere by [F4] and separatedness of $G$. Fppf descent [F5] therefore gives a unique $R$-morphism $u:Z\to G$ with $u\circ p=h$; its generic fibre is $u_K$. Uniqueness follows because any two extensions agree on the schematically dense generic fibre and $G$ is separated. This proves existence and uniqueness of the extension for all smooth $Z$. [F2, F4, F5, step 1.2, algebra]

3.1 Uniqueness of the model: if $N$ and $N'$ both satisfy the extension property with generic fibre $A_K$, then the identity of $A_K$ extends to $R$-morphisms $N\to N'$ and $N'\to N$. Both composites extend the identity of $A_K$, hence equal the respective identities by the uniqueness clause of the extension property (applied to the models themselves); so $N\cong N'$ uniquely, and [F4] identifies the canonical isomorphism. [F4, F6, step 2.1, algebra]

4.1 The construction used only an arbitrary discrete valuation ring: the minimal model, strictification, strict-henselian completion, effective group descent and Weil extension all hold without excellence, completeness, perfect residue field or any restriction on the reduction type, so the stated class is exactly as claimed. [F1, F2, F4, step 1.1, step 2.1, algebra] ∎ 
