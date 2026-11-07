---
id: lem-s-integral-points-lift-through-finite-etale-covers
kind: lemma
title: S-integral points lift to bounded-degree number fields through finite étale covers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-s-integral-points-on-an-affine-curve
  - lem-number-field-extensions-bounded-degree-unramified-outside-finite-set-finite
  - def-finite-morphism-schemes
  - def-etale-morphism-schemes
  - lem-finite-etale-algebra-module-presentation-and-rank
  - lem-connected-finite-etale-cover-of-s-integers-is-a-number-ring
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - lem-etale-residue-extensions-finite-separable
  - lem-number-field-completions-as-local-polynomial-factors
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-completion-of-an-absolutely-valued-field
  - lem-integral-closure-commutes-etale-base-change
  - cor-ring-of-integers-is-a-dedekind-domain
  - lem-dedekind-localisation-at-nonzero-prime-is-dvr
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited through the finite étale algebra and connected-cover suppliers. The bounded degree is at most the rank of the pulled-back cover."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Fundamental Groups of Schemes, Section 58.11, Lemma 58.11.2
      url: https://stacks.math.columbia.edu/tag/0BQJ
      locator: A connected finite étale cover of a normal integral scheme is its normalization in its function field.
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $S$ be a finite set of nonzero prime ideals of $\mathcal O_K$, and put $R=\mathcal O_{K,S}$. Let $\mathcal Y$ be an $R$-scheme, let $\mathcal Z\to\mathcal Y$ be a finite étale morphism of constant degree $n\ge1$, and let $s:\operatorname{Spec}R\to\mathcal Y$ be an $R$-section. Then there is a finite field extension $L/K$ with $[L:K]\le n$ and an $L$-point of the generic-fibre cover lying above the generic point of $s$. This point extends to an $R$-section $\operatorname{Spec}\mathcal O_{L,S_L}\to\mathcal Z$ over the base change of $s$, where $S_L$ is the set of nonzero prime ideals of $\mathcal O_L$ lying over $S$. The extension $L/K$ is unramified outside $S$. As $s$ varies, the isomorphism class of $L/K$ can be taken from a finite set depending only on $K$, $S$, and $n$.

## Statement references

[Stacks Project, Fundamental Groups of Schemes, Section 58.11, Lemma 58.11.2](https://stacks.math.columbia.edu/tag/0BQJ)

[[def-s-integral-points-on-an-affine-curve]]

## Facts & Assumptions

**Given:** AC; $K$, $S$, and $R$; a finite étale degree-$n$ morphism $\mathcal Z\to\mathcal Y$; and an $R$-section $s$.

[A1] AC is the stated assumption. [[def-axiom-of-choice]]

[F1] Pulling back a finite étale morphism along $s$ gives a finite étale cover $\mathcal B\to\operatorname{Spec}R$ of degree $n$, equivalently a finite étale $R$-algebra $B$ of rank $n$. [[def-finite-morphism-schemes]] [[def-etale-morphism-schemes]] [[lem-finite-etale-algebra-module-presentation-and-rank]]

[F2] A finite étale algebra over a field is a product of finite separable field extensions; the sum of the factor degrees is its vector-space dimension. [[lem-finite-etale-algebra-module-presentation-and-rank]]

[F3] A finite étale algebra over the normal S-integer ring is its integral closure in its generic algebra; in particular generic factor idempotents, being integral, belong to that algebra. Every nonempty connected finite étale cover of $\operatorname{Spec}\mathcal O_{K,S}$ is $\operatorname{Spec}\mathcal O_{L,S_L}$ for a finite separable field extension $L/K$. The actual body and owner-authored Step 1 ready record of [[lem-connected-finite-etale-cover-of-s-integers-is-a-number-ring]] were inspected; the record claims authoring readiness, not native independent acceptance. The normality interface is [[lem-integral-closure-commutes-etale-base-change]]. The integer ring is Dedekind and its nonzero-prime localizations are DVRs under AC. ([[cor-ring-of-integers-is-a-dedekind-domain]], [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]])

[F4] Under AC, at every point of a finite-type morphism with zero relative differentials the residue extension is finite separable and the base maximal ideal generates the source maximal ideal. This applies to the finite étale cover and its localizations; it does not assert that a localization at one prime remains finite over the nonhenselian base DVR. ([[lem-etale-residue-extensions-finite-separable]])

[F8] AC supplies Countable Choice. Completion of a nonarchimedean valued field preserves its value group and residue field. Thus the valuation index and residue extension of a number-field place agree with those of its completion. ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[thm-completion-of-an-absolutely-valued-field]])

[F5] For a finite extension $L/K$ and finite prime $v$ of $K$, the completions $L_w$ for $w\mid v$ are the field factors of $L\otimes_KK_v$. [[lem-number-field-completions-as-local-polynomial-factors]]

[L1] For fixed $K$, finite $S$, and degree bound $n$, only finitely many $K$-isomorphism classes of finite extensions of degree at most $n$ are unramified outside $S$. [[lem-number-field-extensions-bounded-degree-unramified-outside-finite-set-finite]] Its exact current GLn-owned body reduces to the separately independently reviewed and root-accepted local/global discriminant reconstruction. This uses that accepted arithmetic interface without a duplicate arithmetic review.

[F6] A number field is a finite extension of $\mathbb Q$, and $\mathcal O_{K,S}$ is the ring of elements integral outside the finite set of nonzero prime ideals $S$. [[def-number-field]] [[def-s-integers-and-s-units-of-a-number-field]]

[F7] An $S$-integral point on the fixed affine model is an $\mathcal O_{K,S}$-section of that model. [[def-s-integral-points-on-an-affine-curve]]

## Proof

1.1 Pull back $\mathcal Z\to\mathcal Y$ along $s$. By [F1] the result is $\operatorname{Spec}B\to\operatorname{Spec}R$ for a finite étale $R$-algebra $B$ of rank $n$. Its generic fibre $B\otimes_RK$ is a nonzero finite étale $K$-algebra, so by [F2] it is a finite product $\prod_{i=1}^mL_i$ of finite separable field extensions with $\sum_i[L_i:K]=n$. Choose one factor $L_i$; its degree is at most $n$. By [F3], the generic factor idempotents satisfy monic equations and lie in $B$. They split $B$ into finite étale factors, each with one generic field. Such a factor is connected: it injects into that field, so has no nontrivial idempotent. Thus the chosen $L_i$ gives a nonempty connected finite étale component of $\operatorname{Spec}B$. [A1, F1, F2, F3, given, choose, algebra]

2.1 Apply [F3] to this connected component. It identifies it with $\operatorname{Spec}\mathcal O_{L_i,S_{L_i}}$ for the selected field factor. Its natural map into the pullback $\mathcal Z\times_{\mathcal Y,s}\operatorname{Spec}R$ and then to $\mathcal Z$ gives an $R$-morphism $\operatorname{Spec}\mathcal O_{L_i,S_{L_i}}\to\mathcal Z$ whose composite to $\mathcal Y$ is $s$ after base change. On generic fibres this is an $L_i$-point above the generic point of $s$. [F1, F3, step 1.1, given]

3.1 Let $v\notin S$ and let $w$ be ANY prime of $L_i$ over $v$. The selected component is finite étale over $R$ and equals $\operatorname{Spec}\mathcal O_{L_i,S_{L_i}}$ by step 2.1. Its local ring at $w$ is the DVR $\mathcal O_{L_i,w}$. Apply [F4] at this point over the base DVR $\mathcal O_{K,v}$: the residue extension is finite separable and the source maximal ideal is generated by the base uniformizer. Therefore the valuation ramification index is one. These local rings need not be finite over the nonhenselian base DVR and are not the completed fields. Instead [F8] passes their valuations to the completions without changing value groups or residue fields; [F5] identifies the resulting finite field extensions as $(L_i)_w/K_v$. They consequently have ramification index one and separable residue extension. This covers every such $v,w$ and proves the required unramifiedness. Taking $L=L_i$ also gives the degree and integral lifting assertions from steps 1.1–2.1. [A1, F3, F4, F5, F8, step 1.1, step 2.1, given, algebra]

4.1 Every field obtained in steps 1.1–3.1 has degree at most $n$ and is unramified outside the fixed set $S$. Applying [L1] to these uniform bounds shows that, as the section $s$ varies, only finitely many $K$-isomorphism classes can occur. [L1, step 1.1, step 3.1, given] ∎

## Proof status

The degree, integral lifting and everywhere-unramified clauses have the local AC argument above. The final finite-field-class clause uses the exact separately independently reviewed and root-accepted GLn arithmetic interface [L1]. This records existing arithmetic acceptance without a duplicate review. No Mordell or general effective Siegel assertion is proved by this lifting lemma.
