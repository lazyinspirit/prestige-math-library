---
id: lem-neron-model-uniqueness-etale-base-change-and-local-nature
kind: lemma
title: "Uniqueness, weak Neron property, etale base change and local nature of Neron models"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-neron-model-and-mapping-property
  - def-etale-morphism-schemes
  - lem-flat-morphisms-stable-base-change
  - lem-filtered-colimit-fp-scheme-stage
  - thm-ag-standard-smooth-geometric-regularity
  - thm-smooth-morphisms-stable-base-change-composition
  - def-locally-noetherian-and-noetherian-scheme
  - def-scheme-theoretic-fibre
  - cor-morphisms-equal-on-dense-open-reduced-source
  - def-smooth-morphism-schemes
  - def-separated-morphism-schemes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 1.2/2-6 (uniqueness, weak property, etale base change, local nature, group law)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC. Let $S$ be a Dedekind scheme with function field $K$ ([[def-locally-noetherian-and-noetherian-scheme]]) and let $X$ be a Neron model of the smooth separated finite-type $K$-scheme $X_K$ ([[def-neron-model-and-mapping-property]]). Then:

(a) $X$ is unique up to a unique $S$-isomorphism inducing the identity on the generic fibre;

(b) $X$ is a weak Neron model of $X_K$: it satisfies the extension property for etale points at every closed point of $S$;

(c) for every etale morphism $S'\to S$ ([[def-etale-morphism-schemes]]) with function field $K'$, the base change $X_{S'}$ is a Neron model of $X_{K'}$;

(d) $X$ is a Neron model over $S$ if and only if $X\times_S\operatorname{Spec}\mathcal O_{S,s}$ is a Neron model over $\operatorname{Spec}\mathcal O_{S,s}$ for every closed point $s\in S$; thus the notion is local on the base;

(e) if $X_K$ is a $K$-group scheme, then its multiplication, inverse and unit extend uniquely to $X$, making $X$ an $S$-group scheme.

The arguments apply the mapping property directly. No converse from the weak Neron property to the full mapping property is asserted for an arbitrary scheme or for a model whose generic fibre alone carries a group law.

## Facts & Assumptions

**Given:** AC, a Dedekind scheme $S$ with function field $K$, a smooth separated finite-type $K$-scheme $X_K$, and a Neron model $X$ of $X_K$ with its Neron mapping property.

[F1] The Neron mapping property: for every smooth $S$-scheme $Y$ and every $K$-morphism $Y_K\to X_K$ there is a unique $S$-morphism $Y\to X$ extending it; the weak Neron model is defined by the extension property for etale points ([[def-neron-model-and-mapping-property]]).

[F2] Etale morphisms are smooth; smooth and flat morphisms are stable under base change and composition, and etale morphisms are stable under base change ([[def-etale-morphism-schemes]], [[def-smooth-morphism-schemes]], [[lem-flat-morphisms-stable-base-change]], [[thm-smooth-morphisms-stable-base-change-composition]]).

[F3] Two morphisms from a reduced scheme to a separated scheme that agree on a schematically dense open subscheme are equal ([[cor-morphisms-equal-on-dense-open-reduced-source]], assuming AC). For the generic fibre, which need not be open, the agreement assertion holds for a flat source over the integral base $S$: the equalizer is closed by separatedness; on affine base and source charts its ideal becomes zero after tensoring with $K$. Every element of that ideal is therefore killed by a nonzero base element, while flatness makes the source coordinate ring torsion-free, so the ideal is zero. In particular this applies to every smooth source and its overlaps ([[def-separated-morphism-schemes]], [[def-scheme-theoretic-fibre]], [[def-smooth-morphism-schemes]]).

[F4] Morphisms between finitely presented schemes descend along filtered limits of affine base schemes, and equality descends after a later stage. In particular, $\operatorname{Spec}\mathcal O_{S,s}$ is the filtered limit of open neighbourhoods of $s$ ([[lem-filtered-colimit-fp-scheme-stage]]). Smooth morphisms are locally standard smooth, so their finite-presentation presentations and invertible Jacobian minors descend to smooth neighbourhoods after shrinking ([[thm-ag-standard-smooth-geometric-regularity]]).

## Proof

**Proof technique:** direct; each assertion is an application of the mapping property to a suitable smooth source.

1.1 Let $X'$ be another Neron model of $X_K$. Applying the mapping property of $X$ to the identity $K$-morphism $X'_K\to X_K$ gives $u:X'\to X$ over $S$, and applying the mapping property of $X'$ to the identity $X_K\to X'_K$ gives $v:X\to X'$; the composites $uv$ and $vu$ extend the identity $K$-morphisms and both sides are $S$-morphisms, so by the uniqueness clause they are identities. This proves (a). [F1, given, algebra]

1.2 Let $s\in S$ be closed and $R'$ an etale local $\mathcal O_{S,s}$-algebra with fraction field $K'$. It is a filtered limit of pointed etale neighbourhoods $V_i\to U_i$ with $U_i\subseteq S$ open and containing $s$. The given $K'$-point of $X_K$ descends to the generic fibre of one such neighbourhood after passing to a later stage, by [F4]. Each $V_i\to U_i\to S$ is smooth, so the Neron property extends that stage point to $V_i\to X$; base change along the limit gives the required $R'$-point of $X$. Thus the extension property for etale points holds at every closed point and $X$ is a weak Neron model, proving (b). [F1, F2, F4, given, construct]

1.3 For (c), let $S'\to S$ be etale with function field $K'$ and let $Y'$ be a smooth $S'$-scheme with a $K'$-morphism $u_{K'}:Y'_{K'}\to X_{K'}$. The composite $Y'\to S'\to S$ is smooth by [F2], and $u_{K'}$ composed with the projection $X_{K'}=X_K\times_KK'\to X_K$ is a $K$-morphism $Y'_K\to X_K$; by the mapping property it extends uniquely to an $S$-morphism $Y'\to X$. Combining this with the structure morphism $Y'\to S'$ gives an $S'$-morphism $Y'\to X\times_SS'=X_{S'}$ extending $u_{K'}$, and uniqueness follows from the uniqueness in the $S$-mapping property. Since $X_{S'}$ is smooth separated of finite type over $S'$ by [F2] and has generic fibre $X_{K'}$, it is a Neron model of $X_{K'}$. [F1, F2, algebra]

1.4 For (d), first suppose $X$ is a Neron model over $S$. Cover a smooth $\operatorname{Spec}\mathcal O_{S,s}$-scheme by affine standard-smooth charts. Their finite-presentation presentations and invertible Jacobian minors descend along the filtered limit of open neighbourhoods of $s$ to smooth charts over some neighbourhood, by [F4]; the generic-fibre morphism to $X_K$ descends at a later stage by the same finite-presentation lemma. Apply the Neron property over $S$ to each descended smooth neighbourhood and pass to the limit. These local extensions agree on overlaps by uniqueness, so they glue to an extension over $\operatorname{Spec}\mathcal O_{S,s}$. Uniqueness follows from separatedness and density of the generic fibre. [F1, F4, algebra, construct]

1.5 Conversely, suppose each localization $X_{\mathcal O_{S,s}}$ is a Neron model. First take a smooth finite-type $S$-scheme $Y$ and a $K$-morphism $u_K:Y_K\to X_K$. For each closed $s$, the local property gives $Y_{\mathcal O_{S,s}}\to X_{\mathcal O_{S,s}}$. Since $Y$ and $X$ are of finite presentation over the noetherian base, [F4] descends this map to $Y_U\to X_U$ for some open neighbourhood $U$ of $s$, with generic restriction $u_K$ after a further shrinking if needed. These neighbourhoods cover the closed points of $S$, and together with the generic point cover $S$. The descended maps agree on overlaps because they agree on $Y_K$, which is schematically dense in the flat scheme $Y$, and $X$ is separated. They therefore glue to an extension $Y\to X$. For an arbitrary smooth $Y/S$, cover it by finite-type open subschemes, apply this argument on each, and glue by uniqueness. This proves the converse and the locality assertion. [F1, F3, F4, algebra, construct]

2.1 For (e), assume $X_K$ is a $K$-group scheme with multiplication $m_K$, inverse $i_K$ and unit $e_K$. Apply the mapping property to the smooth $S$-schemes $X\times_SX$, $X$ and $S$ and the $K$-morphisms $m_K$, $i_K$ and $e_K$: this yields $S$-morphisms $m:X\times_SX\to X$, $i:X\to X$ and $e:S\to X$ extending them uniquely. Each group identity, for example associativity, is an identity between $S$-morphisms from the reduced smooth $S$-scheme $X\times_SX\times_SX$ to the separated $S$-scheme $X$; it holds after restriction to the generic fibre, which is schematically dense by [F3], so it holds everywhere. Thus $X$ is an $S$-group scheme. [F1, F3, step 1.4, algebra] ∎ 
