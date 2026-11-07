---
id: lem-smooth-proper-curve-has-good-reduction-away-from-finite-set
kind: lemma
title: Smooth proper curves have good models away from finitely many primes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-good-reduction-of-smooth-proper-curve-at-a-finite-place
  - lem-filtered-colimit-fp-scheme-stage
  - lem-filtered-colimit-proper-fp-stage
  - def-ag-standard-smooth-algebra
  - thm-ag-standard-smooth-geometric-regularity
  - lem-proper-flat-cohomology-perfect-complex
  - thm-global-functions-proper-integral-variety
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-irreducible-components-and-minimal-primes
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-finiteness-of-the-number-field-class-group
  - thm-ring-of-integers-free-of-rank-degree
  - thm-gluing-affine-schemes
  - lem-proper-local-on-base
  - def-smooth-morphism-schemes
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
axiom_use: AC and DC are explicit; they are inherited from finite-presentation/properness descent and the proper flat cohomology complex. The patching uses finitely many chosen local models and transition maps.
sources:
  references:
    - title: The Stacks Project, Limits of Schemes, Lemma 32.10.1 and Section 32.13
      url: https://stacks.math.columbia.edu/tag/01ZM
      locator: Finite-presentation descent and descent of properness; the proof here uses the published local library carriers and explicitly patches local models.
    - title: The Stacks Project, Cohomology of Schemes, Lemma 30.22.1
      url: https://stacks.math.columbia.edu/tag/07VK
      locator: The proper flat cohomology complex used to preserve connected geometric fibres.
---

## Statement

Assume AC and DC. Let $K$ be a number field and let $C/K$ be a smooth proper geometrically connected curve. There is a finite set $T$ of nonzero prime ideals of $\mathcal O_K$ and a smooth proper morphism $\mathcal C\to\operatorname{Spec}\mathcal O_{K,T}$ with generic fibre identified with $C$, all of whose geometric fibres are connected curves of dimension one. In particular, $C$ has good reduction outside $T$.

More precisely, if $S$ is a prescribed finite set of nonzero prime ideals and $C$ has good reduction at every prime outside $S$, then such a smooth proper curve model exists over $\operatorname{Spec}\mathcal O_{K,S}$ itself. This second assertion retains the prescribed $S$; it does not enlarge it. No rational point on $C$ is required.

## Statement references

[[def-good-reduction-of-smooth-proper-curve-at-a-finite-place]]

[[lem-filtered-colimit-fp-scheme-stage]]

[[lem-filtered-colimit-proper-fp-stage]]

[[lem-proper-flat-cohomology-perfect-complex]]

## Facts & Assumptions

**Given:** AC, DC, a number field $K$, and the smooth proper geometrically connected curve $C/K$; for the second assertion, the prescribed finite set $S$ and good reduction at each prime outside $S$.

[A1] AC and DC are explicit hypotheses. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Finitely presented schemes and their morphisms descend along filtered affine limits, and equality of stage morphisms is eventual. Properness of a finitely presented morphism descends over directed systems of finite-type $\mathbb Z$-algebras. [[lem-filtered-colimit-fp-scheme-stage]] [[lem-filtered-colimit-proper-fp-stage]]

[F2] Smooth morphisms have local finite standard smooth presentations with an invertible Jacobian minor. These presentations define flat morphisms with geometrically regular fibres; charts with one more variable than equations have pure relative dimension one. [[def-ag-standard-smooth-algebra]] [[thm-ag-standard-smooth-geometric-regularity]] [[def-smooth-morphism-schemes]]

[F3] For a proper morphism over a Noetherian affine base and a coherent sheaf flat over the base, a bounded complex of finite projective modules in nonnegative degrees computes its cohomology after every algebra base change. The complex becomes finite free on a neighbourhood of any base point. [[lem-proper-flat-cohomology-perfect-complex]]

[F4] A proper geometrically integral variety has only its base field as global functions. A regular local ring is a domain, and irreducible components of a Noetherian scheme are given by its minimal primes. Consequently a smooth connected curve over an algebraically closed field is integral: its finitely many components cannot meet in a regular local domain, so connectedness leaves one component. [[thm-global-functions-proper-integral-variety]] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]] [[thm-irreducible-components-and-minimal-primes]]

[F5] The ring $\mathcal O_K$ is finite free over $\mathbb Z$, is Noetherian and has fraction field $K$. Its nonzero ideals have finite prime factorizations, and its ideal class group is finite under AC. The ring $\mathcal O_{K,S}$ consists of the elements of $K$ integral at primes outside $S$. [[def-number-field]] [[def-ring-of-integers-of-a-number-field]] [[thm-ring-of-integers-free-of-rank-degree]] [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-finiteness-of-the-number-field-class-group]] [[def-s-integers-and-s-units-of-a-number-field]]

[F6] Schemes glue along open isomorphisms satisfying the cocycle identities. Properness is local on the base. A smooth proper curve model at a prime is a proper smooth model over the localized ring with geometrically connected one-dimensional fibres. [[thm-gluing-affine-schemes]] [[lem-proper-local-on-base]] [[def-good-reduction-of-smooth-proper-curve-at-a-finite-place]]

## Proof

1.1 Put $R=\mathcal O_K$. For a finite set $S$, let $h>0$ annihilate the finite ideal class group in [F5]. For each $\mathfrak p\in S$, choose $a_{\mathfrak p}\in R$ with $\mathfrak p^h=(a_{\mathfrak p})$, and set $a=\prod_{\mathfrak p\in S}a_{\mathfrak p}$, taking $a=1$ if $S$ is empty. Its prime divisors are exactly $S$. Ideal factorization shows $R[1/a]=\mathcal O_{K,S}$: one inclusion follows from valuations, while, for an element integral outside $S$, multiplication by a sufficiently large power of $a$ kills its finitely many negative valuations. Thus $\operatorname{Spec}\mathcal O_{K,S}$ identifies with the open $\operatorname{Spec}R\setminus S$. Every closed subset of $\operatorname{Spec}R$ missing the generic point is finite: its defining ideal contains a nonzero element, whose principal ideal has finitely many prime divisors by [F5]. Localizations $R[1/b]$ are finite-type $\mathbb Z$-algebras, their directed limit over $b\ne0$ is $K$, and their directed limit over $b\notin\mathfrak p$ is $R_{\mathfrak p}$. [A1, F5, given, construct, algebra]

2.1 We first describe descent of a smooth proper curve model from either $K$ or $R_{\mathfrak p}$ to an open neighbourhood in $\operatorname{Spec}R$; in the latter case the neighbourhood contains $\mathfrak p$. A proper scheme over either of these Noetherian rings is of finite presentation. Apply [F1] and the localization systems of step 1.1 to descend it to a finitely presented scheme over some $R[1/b]$, then pass to a later stage where it is proper. Cover the original smooth model by finitely many standard smooth affine charts of relative dimension one from [F2]. Each chart, its open immersion into the model, its presentation and inverse presentation, and the finitely many identities expressing the invertible Jacobian minor descend by [F1]. An open immersion of finite presentation is specified here by finitely many principal-open refinements, so those open charts descend as well. Their union is smooth of relative dimension one and contains the base change of the entire original model. The closed complement has closed image in the base by properness; that image misses the generic point, and also $\mathfrak p$ in the localized-ring case. Remove it. We obtain a smooth proper model of pure relative dimension one over a nonempty base open, retaining $\mathfrak p$ in that case. [A1, F1, F2, step 1.1, construct]

3.1 The neighbourhood in step 2.1 can be chosen so that every geometric fibre is connected. Apply [F3] to its structure sheaf, which is coherent and base-flat because the model is smooth. Near the distinguished base point (the generic point, or $\mathfrak p$) let $P^\bullet$ be its computing complex with finite free terms, and put $n=\operatorname{rank}P^0$. At that point, after an algebraic closure of its residue field, the given smooth proper connected fibre is integral by [F4] and has $H^0$ of dimension one. Since the complex has no negative terms, the matrix of $d^0:P^0\to P^1$ therefore has rank $n-1$ there. Invert a nonzero $(n-1)$-minor, using the empty minor $1$ when $n=1$. On the resulting neighbourhood all geometric fibres have $\dim H^0\le1$ by [F3]. They are nonempty: the image of a proper model is closed, contains the generic point, and hence is the entire integral base. Constants therefore give $\dim H^0\ge1$. Thus this dimension is exactly one. A disconnected fibre would have two independent functions given by the characteristic functions of its two nonempty open-and-closed parts. Hence every geometric fibre is connected; it is a smooth curve of dimension one by step 2.1. This argument uses only the actual cohomology of the specified fibre, not a rational point or a presumed global model. [A1, F2, F3, F4, step 2.1, algebra, construct]

4.1 Apply steps 2.1 and 3.1 to $C/K$. It is geometrically integral because its geometric base change is smooth and connected, by [F4]. This gives a smooth proper model with connected geometric curve fibres over a nonempty open $U\subseteq\operatorname{Spec}R$. Its complement is a finite set $T$ by step 1.1, and $U=\operatorname{Spec}\mathcal O_{K,T}$ by that same step. Restriction to $\operatorname{Spec}R_{\mathfrak p}$ for $\mathfrak p\notin T$ is a model in the sense of [F6], proving the first assertion. [F4, F5, F6, step 1.1, step 2.1, step 3.1, construct]

5.1 Now fix $S$ as in the second assertion and work on $B=\operatorname{Spec}R\setminus S$. Intersect $U$ from step 4.1 with $B$; write $T'=B\setminus U$, a finite set. For each $\mathfrak p\in T'$, take a good local model over $R_{\mathfrak p}$ supplied by the hypothesis and [F6]. Steps 2.1 and 3.1 spread it to a smooth proper curve model $\mathcal C_{\mathfrak p}$ on an open neighbourhood $V_{\mathfrak p}\subseteq B$ of $\mathfrak p$. Shrink $V_{\mathfrak p}$ to exclude all points of $T'\setminus\{\mathfrak p\}$. The specified identifications of the two generic fibres give an isomorphism between the generic fibres of $\mathcal C_{\mathfrak p}$ and $\mathcal C_U$. By [F1], this isomorphism and its inverse descend, with their two inverse identities, to a nonempty open $W_{\mathfrak p}\subseteq U\cap V_{\mathfrak p}$. The complement $(U\cap V_{\mathfrak p})\setminus W_{\mathfrak p}$ is finite, contains no $\mathfrak p$, and can be removed from $V_{\mathfrak p}$. After doing so, there is an actual isomorphism $\mathcal C_{\mathfrak p}|_{U\cap V_{\mathfrak p}}\cong\mathcal C_U|_{U\cap V_{\mathfrak p}}$. [A1, F1, F6, step 1.1, step 2.1, step 3.1, step 4.1, choose, construct]

6.1 These shrunk neighbourhoods together with $U$ cover $B$: each missing point $\mathfrak p\in T'$ is retained in its own neighbourhood. For distinct $\mathfrak p,\mathfrak q\in T'$, their intersection lies in $U$, so define the transition isomorphism between their models by the two actual identifications with $\mathcal C_U$ there. The transition maps satisfy every cocycle identity by cancellation. Glue the finitely many models by [F6]. The result is smooth and proper over $B$, since these properties hold on the displayed open cover, and all its geometric fibres are connected curves of dimension one. The generic identifications used in gluing give its generic fibre $C$. Finally $B=\operatorname{Spec}\mathcal O_{K,S}$ by step 1.1. This proves the prescribed-$S$ assertion without enlarging $S$ and completes the lemma. [F2, F6, step 1.1, step 5.1, construct] ∎
