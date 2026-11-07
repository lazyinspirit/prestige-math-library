---
id: lem-finite-etale-cover-spreads-out-over-s-integers
kind: lemma
title: A finite étale curve cover spreads out after enlarging S
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - thm-clearing-denominators-for-an-algebraic-number
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-finite-morphism-schemes
  - def-etale-morphism-schemes
  - lem-finite-etale-algebra-module-presentation-and-rank
  - thm-kahler-differentials-existence-presentation
  - lem-differentials-localization
  - lem-differentials-base-change
  - def-localisation-of-a-module
  - thm-proper-ideal-contained-in-maximal-ideal
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Limits of Algebraic Spaces, Lemma 70.7.1
      url: https://stacks.math.columbia.edu/tag/07SJ
      locator: Section 70.7, Lemma 70.7.1
    - title: The Stacks Project, Limits of Schemes, Section 32.8, Lemmas 32.8.3, 32.8.8, and 32.8.10
      url: https://stacks.math.columbia.edu/tag/081C
      locator: Section 32.8, Lemmas 32.8.3, 32.8.8, and 32.8.10
    - title: The Stacks Project, Limits of Schemes, Lemma 32.10.1
      url: https://stacks.math.columbia.edu/tag/01ZM
      locator: Section 32.10, Lemma 32.10.1
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $S$ be a finite set of nonzero prime ideals of $\mathcal O_K$, let $R=\mathcal O_{K,S}$, and let $\mathcal Y=\operatorname{Spec}A$ be a flat affine finite-type $R$-scheme with generic fibre $Y=\mathcal Y_K$. For $S'\supseteq S$, write $\mathcal Y_{S'}=\mathcal Y\times_{\operatorname{Spec}R}\operatorname{Spec}\mathcal O_{K,S'}$. Let $Z\to Y$ be a finite étale morphism of constant degree $n\ge0$. Then there is a finite set $S'\supseteq S$ of nonzero prime ideals of $\mathcal O_K$ and a finite étale morphism $\mathcal Z\to\mathcal Y_{S'}$ of degree $n$ whose generic fibre is isomorphic over $Y$ to $Z\to Y$.

## Statement references

[Stacks Project, Lemma 70.7.1](https://stacks.math.columbia.edu/tag/07SJ)

[Stacks Project, Lemmas 32.8.3, 32.8.8, and 32.8.10](https://stacks.math.columbia.edu/tag/081C)

[Stacks Project, Lemma 32.10.1](https://stacks.math.columbia.edu/tag/01ZM)

## Facts & Assumptions

**Given:** AC and the original Statement data, including the fixed flat affine model, its generic finite étale cover, and the degree $n\ge0$.

[A1] AC is available at the finite-projective/étale and maximal-ideal interfaces. ([[def-axiom-of-choice]])

[F1] Under AC, a finite étale algebra is a finite projective module, locally free of the given rank. A module-finite algebra is finitely presented as a module exactly when it is finitely presented as an algebra, and it is finite étale exactly when it is finitely presented and flat as a module and has zero relative differentials. The local-basis and finite dual-basis arguments also prove that a finite projective module is locally free and is the image of an idempotent on a finite free module. ([[lem-finite-etale-algebra-module-presentation-and-rank]])

[F2] Kähler differentials exist by their generator/Leibniz relations and commute with scalar base change and localization. Differentials of finitely many algebra generators generate the differential module. ([[thm-kahler-differentials-existence-presentation]], [[lem-differentials-base-change]], [[lem-differentials-localization]])

[F3] The ring $R=\mathcal O_{K,S}$ has fraction field $K$. A nonzero element of $R$ is a unit after adjoining finitely many finite primes to $S$, by clearing its integer denominator and factoring its nonzero principal fractional ideal. ([[def-number-field]], [[def-s-integers-and-s-units-of-a-number-field]], [[def-prime-ideal-valuations-on-fractional-ideals]], [[thm-clearing-denominators-for-an-algebraic-number]], [[thm-number-field-integral-ideal-factorisation-in-zf]])

[F4] An element of a localized module is zero exactly when some element of the multiplicative set kills its numerator. Under AC, a proper ideal is contained in a maximal ideal, so an ideal avoiding containment in every maximal ideal is the unit ideal. ([[def-localisation-of-a-module]], [[thm-proper-ideal-contained-in-maximal-ideal]])

## Proof

1.1 Since $R$ is a domain, flatness embeds $A$ into $A_K=A\otimes_RK$: tensor the injection given by each nonzero base element. If $A_K=0$, then $A=0$, so the original model and its generic cover are empty; the empty cover over that model has constant degree $n$ vacuously. If $n=0$, [F1] makes the generic cover empty, and the zero algebra over $A$ supplies its degree-zero extension with $S'=S$. Henceforth assume $A_K\ne0$ and $n\ge1$. Write the generic finite morphism as $Z=\operatorname{Spec}B$, with $B$ finite étale of rank $n$ over $A_K$. [A1, F1, given, algebra]

2.1 By [F1], choose a finite free surjection $A_K^m\to B$ and a section, so $B$ is the image of an idempotent matrix $e\in M_m(A_K)$. Transport its multiplication and unit to this image. Extend multiplication to a bilinear map $\mu:A_K^m\otimes A_K^m\to A_K^m$ by projecting both inputs with $e$; let $u\in A_K^m$ represent the unit. Then $e\mu=\mu$, $\mu(e\otimes e)=\mu$, $eu=u$, and the finitely many commutativity, associativity and unit identities $\mu(u,x)=ex=\mu(x,u)$ are matrix identities on finite free modules. Every coefficient of $e,\mu,u$ has one nonzero base denominator in $R$. Clear their finite product and the finitely many identity denominators. Over the resulting base localization, the image $P=eA^m$ is a finite projective module, and these identities make it a commutative unital $A$-algebra with generic algebra $B$. [A1, F1, F3, F4, step 1.1, choose, construct, algebra]

3.1 Its rank must be preserved on the whole model. Over $A_K$, every $(n+1)$-minor of $e$ is zero and the $n$-minors generate the unit ideal. Indeed locally the image is free of rank $n$; writing its inclusion and projection as matrices gives $e=UV$ and $VU=I_n$. The first equality kills the larger minors, and $VeU=I_n$, expanded by the finite Cauchy–Binet formula, places $1$ in the localized ideal of $n$-minors. Thus this ideal lies in no maximal ideal and is the unit ideal by [F4]. Choose its finite expression for $1$. Clear its finitely many base denominators and those of the zero-minor identities. These exact identities now hold over one further base localization. In every residue field the idempotent therefore has rank exactly $n$, so its finite projective image is locally free of rank $n$ by the local-basis argument in [F1]. No reducedness of the base algebra is assumed. [A1, F1, F4, step 2.1, choose, algebra]

4.1 The algebra $P$ is module-finite and finitely presented, hence an algebra of finite presentation by [F1]. The finitely many columns of $e$ generate it as an $A$-module and, with the unit, as an algebra. By [F2], their differentials generate $\Omega_{P/A}$. Its localization to $K$ is $\Omega_{B/A_K}=0$. By [F4], each of this finite list of generators is killed by a nonzero base element of $R$; invert their product. Localization of differentials [F2] then gives $\Omega_{P/A}=0$ over that stage. The finite projective module remains locally free of rank $n$, so the exact criterion [F1] makes $\operatorname{Spec}P\to\operatorname{Spec}A$ finite étale of degree $n$. [F1, F2, F4, step 2.1, step 3.1, construct, algebra]

5.1 Only finitely many nonzero base denominators were inverted in steps 2.1–4.1. By [F3], adjoining their prime divisors to $S$ gives a finite $S'\supseteq S$ in whose ring all these denominators are units. Base change of the constructed finite étale algebra to $\mathcal O_{K,S'}$ gives $\mathcal Z\to\mathcal Y_{S'}$ with the prescribed generic cover and degree. This reconstructs the finite algebra and its properties from local suppliers; the Stacks references record source context and are not external proof premises. The conclusion is existence after enlarging $S$, with no assertion about a fixed-$S$ global smooth proper model. [F1, F3, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
