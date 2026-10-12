---
id: thm-translation-to-the-wall-on-verma-simple-and-projective-objects
kind: theorem
title: "Translation to the wall on Verma, simple and projective objects"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-singular-integral-category-o-block-and-stabilizer,
       lem-facet-tensor-weight-exclusion,
       def-translation-functor-between-o-blocks,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall,
       thm-translation-to-and-from-a-wall-on-standard-modules,
       def-verma-flag-and-its-multiplicities,
       thm-projectives-in-category-o-have-verma-flags,
       prop-projective-covers-in-o-are-indecomposable-and-unique,
       lem-finite-length-objects-decompose-into-indecomposables,
       def-verma-module, def-standard-and-costandard-objects-in-category-o,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       cor-antidominant-verma-modules-are-simple,
       lem-standard-costandard-hom-and-ext-vanishing, def-projective-object,
       def-dot-action-facets-and-single-wall-translation-data,
       def-axiom-of-choice, thm-bgg-verma-homomorphism-criterion,
       lem-a-nonzero-verma-homomorphism-is-injective, thm-bgg-reciprocity,
       lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags,
       thm-category-o-has-enough-projectives,
       thm-simple-objects-of-category-o-are-highest-weight-modules,
       lem-weight-norm-bound-for-finite-dimensional-simple-modules,
       thm-category-o-decomposes-by-generalized-central-character,
       cor-central-characters-are-dot-weyl-orbits]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9: standard filtrations, BGG reciprocity and translation functors (complete 7-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf"
      locator: "Section 3, Theorem 3.12 with sketch, Theorem 3.13, Example 3.16, Construction 3.17 and Exercise 3.18 (printed pp. 6-7): T_lambda^mu(M_{w.lambda}) = M_{w.mu}, the simple dichotomy by the facet criterion, the big projective Xi_mu = T_{-rho}^mu(L_{-rho}) with (Xi_mu : M_{w.mu}) = 1, Xi_mu = P_mu; complete passages read."
    - title: "James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O, AMS Graduate Studies in Mathematics 94"
      url: null
      locator: "Section 7.6 and 7.12 (title-only locator): translation functors onto and off a wall, including the projective multiplicities; argument reproduced from the fetched treatments."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(\lambda,\mu)$ be as
in [[lem-facet-tensor-weight-exclusion]]: $\lambda$ integral dot-antidominant
and dot-regular, $\mu$ integral dot-antidominant with $F_\mu$ in the closure
of the chamber $F_\lambda$, $J=J(\mu)$, $W_\mu=W_J$. Let $\nu$ be the unique
dominant weight of $W(\mu-\lambda)$ and let
$$T:=T_\lambda^\mu=\operatorname{pr}_{\chi_\mu}\circ(L(\nu)\otimes-)\circ\operatorname{incl}_{\chi_\lambda}\colon\mathcal O_\lambda\longrightarrow\mathcal O_\mu,\qquad T':=T_\mu^\lambda,$$
be the translation functors of [[def-translation-functor-between-o-blocks]],
which are exact and biadjoint
([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]). Then:

**(1)** $T\Delta(w\cdot\lambda)\cong\Delta(w\cdot\mu)$ and
$T\nabla(w\cdot\lambda)\cong\nabla(w\cdot\mu)$ for every $w\in W$.

**(2)** $TL(w\cdot\lambda)\cong L(w\cdot\mu)$ if $w\in W^J$, and
$TL(w\cdot\lambda)=0$ otherwise; equivalently $TL(w\cdot\lambda)\neq0$ if and
only if $w$ lies in the set $W^J$ of minimal representatives of the cosets $wW_J$.

**(3) (Big projective on the wall.)** Let
$\Xi_\mu:=T_{-\rho}^{\mu}L(-\rho)$ be the translate of the simple object of
the most singular block. Then $\Xi_\mu$ is projective and injective in
$\mathcal O_\mu$, it is the projective cover $P(1\cdot\mu)$ of $L(\mu)$, and
$(\Xi_\mu:\Delta(w\cdot\mu))=1$ for every distinct orbit label (equivalently
for its representatives $w\in W^J$); consequently
$(P(\mu):\Delta(y\cdot\mu))=1$ for every distinct label $y\in W^J$ and
$[\Delta(w\cdot\mu):L(\mu)]=1$ for all $w\in W$.

## Facts & Assumptions

**Given:** The facet data $(\lambda,\mu)$ of [[lem-facet-tensor-weight-exclusion]] with $J=J(\mu)$, $W_\mu=W_J$, the translating weight $\nu$ and $E=L(\nu)$; the functors $T=T_\lambda^\mu$, $T'=T_\mu^\lambda$ of [[def-translation-functor-between-o-blocks]] with $E^*=L(\nu)^*$; write $\lambda_\bullet=\lambda+\rho$, $\mu_\bullet=\mu+\rho$.

[F1] $T=\operatorname{pr}_{\chi_\mu}\circ(E\otimes-)\circ\operatorname{incl}_{\chi_\lambda}$ and $T'=\operatorname{pr}_{\chi_\lambda}\circ(E^*\otimes-)\circ\operatorname{incl}_{\chi_\mu}$; inclusions and projections are exact, and $\mathcal O$ is the direct sum of its central-character blocks ([[def-translation-functor-between-o-blocks]], [[thm-category-o-decomposes-by-generalized-central-character]], [[cor-central-characters-are-dot-weyl-orbits]]).

[F2] $T$ and $T'$ are exact and each is both a left and a right adjoint of the other; they send projectives to projectives and injectives to injectives ([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]).

[F3] The unique-factor clause: for every $w\in W$, the tensor $E\otimes\Delta(w\cdot\lambda)$ has exactly one Verma factor with central character $\chi_\mu$, namely $\Delta(w\cdot\mu)$, of multiplicity one ([[lem-facet-tensor-weight-exclusion]]).

[F4] Tensoring with $E$ preserves finite Verma flags: $E\otimes\Delta(\eta)$ has a finite Verma flag with factors $\Delta(\eta+\gamma)$, $\gamma$ running over the weights of $E$ with multiplicity $\dim E_\gamma$; the flag factors of $E\otimes X$ for Verma-filtered $X$ are computed by convolution ([[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]]).

[F5] The block $\mathcal O_\mu$: $J(\mu)$ indexes the vanishing simple coroot pairings of $\mu_\bullet$, $W_J$ is the dot stabilizer of $\mu$, the labels $w\cdot\mu$ depend only on $wW_J$, and $W^J$ is the set of minimal right coset representatives ([[def-singular-integral-category-o-block-and-stabilizer]], [[def-dot-action-facets-and-single-wall-translation-data]]).

[F6] Restricted Chevalley duality: $D(M)_\eta=M_\eta^*$ with the $\tau$-twisted action; $D$ is an exact contravariant involution of $\mathcal O$, preserves weight-space dimensions, simple composition multiplicities and central-character blocks, and $D(L(\eta))\cong L(\eta)$, $D(\Delta(\eta))=\nabla(\eta)$ ([[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[def-standard-and-costandard-objects-in-category-o]]). For finite-dimensional $E$ the evaluation pairing $E^*\otimes D(M)\to D(E\otimes M)$ is a natural isomorphism.

[F8] For a dominant integral weight $\nu$, every weight $\gamma$ of $L(\nu)$ satisfies $\lvert\gamma\rvert\le\lvert\nu\rvert$, with equality exactly when $\gamma\in W\nu$, and every weight of the orbit $W\nu$ occurs in $L(\nu)$ with multiplicity one ([[lem-weight-norm-bound-for-finite-dimensional-simple-modules]]).

[F7] BGG data: a nonzero $\mathfrak g$-homomorphism $M(\eta)\to M(\zeta)$ exists if and only if $\eta\uparrow\zeta$ in the strong linkage order ([[thm-bgg-verma-homomorphism-criterion]]), such a map is injective ([[lem-a-nonzero-verma-homomorphism-is-injective]]), $M(\eta)=L(\eta)$ is simple when $\eta$ is dot-antidominant, BGG reciprocity $(P(\eta):\Delta(\zeta))=[\Delta(\zeta):L(\eta)]$ holds with finitely many nonzero multiplicities ([[thm-bgg-reciprocity]], [[def-verma-flag-and-its-multiplicities]], [[thm-projectives-in-category-o-have-verma-flags]]), and $\operatorname{Hom}(\Delta(\eta),\nabla(\zeta))$ is $0$ or one-dimensional according as $\eta\neq\zeta$ or $\eta=\zeta$ ([[lem-standard-costandard-hom-and-ext-vanishing]]). Every object of $\mathcal O$ has finite length and finite-length objects decompose into indecomposables ([[thm-simple-objects-of-category-o-are-highest-weight-modules]], [[lem-finite-length-objects-decompose-into-indecomposables]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[thm-category-o-has-enough-projectives]]).

## Proof

**Proof technique:** direct: compute $T$ on standards by the unique surviving factor, transport to costandards by restricted duality, decide simple survival by the nonminimal Verma embedding, and manufacture the big projective from the most singular block.

1.1 **Standards (first clause of (1)).** By [F3], the tensor $E\otimes\Delta(w\cdot\lambda)$ has a finite Verma flag by [F4] in which the unique factor with central character $\chi_\mu$ is $\Delta(w\cdot\mu)$, once. The exact projection $\operatorname{pr}_{\chi_\mu}$ applied to this flag kills every factor whose central character differs from $\chi_\mu$ and carries the remaining $\Delta(w\cdot\mu)$ isomorphically, so $T\Delta(w\cdot\lambda)\cong\Delta(w\cdot\mu)$ for every $w$. [F1, F3, F4, algebra]

1.2 **The big projective (3).** For $\lambda'=-\rho$ one has $\lambda'_\bullet=0$, so $M(-\rho)=L(-\rho)$ is the simple object of the most singular block, whose dot orbit is $\{w\cdot(-\rho)\}=\{-\rho\}$; by [F7] its projective cover has Verma flag $[\Delta(-\rho)]$ (the only label in the block) and there is a surjection $P(-\rho)\twoheadrightarrow L(-\rho)=\Delta(-\rho)$, necessarily an isomorphism since both have flag length one. Hence $L(-\rho)=P(-\rho)=\nabla(-\rho)$ is projective and injective, and $\Xi_\mu:=T_{-\rho}^\mu L(-\rho)$ is projective and injective in $\mathcal O_\mu$ by [F2]. The flag of $\Xi_\mu$: $E\otimes L(-\rho)=E\otimes M(-\rho)$ has Verma flag with factors $\Delta(-\rho+\gamma)$, $\gamma$ a weight of $E=L(w_0\mu_\bullet)$ [F4]; after the exact projection $\operatorname{pr}_{\chi_\mu}$, only factors with $-\rho+\gamma\in W\cdot\mu$, i.e. $\gamma\in W(\mu+\rho)=\{\text{extremal weights of }E\}$, survive, and by [F8] the extremal weights of $E$ occur in $E$ with multiplicity one, so $\Xi_\mu$ has a finite generalized flag with exactly one factor $\Delta(y\cdot\mu)$ for each distinct orbit label $y\cdot\mu$, $(y\in W^J)$. Next, reverse adjunction [F2] computes $\operatorname{Hom}(\Xi_\mu,L(\mu))\cong\operatorname{Hom}(L(-\rho),T'L(\mu))$, and $T'L(\mu)=\operatorname{pr}_{\chi_{-\rho}}(E^*\otimes L(\mu))$ with $E^*=L(\mu_\bullet)^*\cong L(-\mu_\bullet)$: tensoring with $L(\mu)=M(\mu)$ and projecting to the most singular block keeps exactly the factor $\Delta(-\rho)$ coming from the highest weight $-\mu_\bullet$ of $E^*$, once (by [F8]), so $T'L(\mu)\cong L(-\rho)$ and $\dim\operatorname{Hom}(\Xi_\mu,L(\mu))=1$: there is a surjection $\Xi_\mu\twoheadrightarrow L(\mu)$. Since $\Xi_\mu$ is projective, $P(\mu)$ is a direct summand of $\Xi_\mu$; by BGG reciprocity [F7] and the assumption $\mu$ dot-antidominant (so $y\cdot\mu\ge\mu$ for all $y$, with equality only for $y\in W^J$), the criterion $\mu\uparrow y\cdot\mu$ supplies an injection $\Delta(\mu)\hookrightarrow\Delta(y\cdot\mu)$ by [F7], hence $[P(\mu):\Delta(y\cdot\mu)]=[\Delta(y\cdot\mu):L(\mu)]\ge1$ for every distinct label $y\cdot\mu$. As $P(\mu)$ is a summand of $\Xi_\mu$ and the latter has each such factor exactly once, all these multiplicities are exactly one and $P(\mu)=\Xi_\mu$; consequently $(P(\mu):\Delta(y\cdot\mu))=1$ and $[\Delta(w\cdot\mu):L(\mu)]=(P(\mu):\Delta(w\cdot\mu))=1$ for all $w$. This proves (3). [F1, F2, F4, F5, F7, F8, algebra]

2.1 **Nonminimal vanishing (second half of (2)).** Suppose $w\notin W^J$; then there is a simple $s\in J$ with $\ell(ws)<\ell(w)$, equivalently $w\alpha_s<0$ ([[def-dot-action-facets-and-single-wall-translation-data]], [F5]). Then $w\cdot\lambda-ws\cdot\lambda=w(\lambda-s\cdot\lambda)=\langle\lambda_\bullet,\alpha_s^\vee\rangle\,w\alpha_s$ with $\langle\lambda_\bullet,\alpha_s^\vee\rangle<0$ and $w\alpha_s<0$, so $w\cdot\lambda-ws\cdot\lambda\in Q^+\setminus\{0\}$: $ws\cdot\lambda$ is strictly below $w\cdot\lambda$ in the dominance order, and both lie in $W\cdot\lambda$, so the strong linkage order gives a nonzero (hence injective) map $\Delta(ws\cdot\lambda)\to\Delta(w\cdot\lambda)$ by [F7]. Applying the exact functor $T$ and step 1.1 gives a map $\Delta(ws\cdot\mu)\to\Delta(w\cdot\mu)$; now $ws\cdot\mu=w\cdot(s\cdot\mu)=w\cdot\mu$ because $s\in J$ fixes $\mu$ [F5], so this is an injective endomorphism of the finite-length module $\Delta(w\cdot\mu)$, hence an isomorphism. If $N$ is the cokernel of $\Delta(ws\cdot\lambda)\to\Delta(w\cdot\lambda)$, exactness of $T$ gives $TN=0$; since $L(w\cdot\lambda)$ is a quotient of $N$ (the kernel of $\Delta(w\cdot\lambda)\twoheadrightarrow L(w\cdot\lambda)$ contains $\Delta(ws\cdot\lambda)$ because the latter has no composition factor $L(w\cdot\lambda)$, its weights being strictly below), $TL(w\cdot\lambda)=0$. [F5, F7, step 1.1, algebra]

2.2 **Costandards (second clause of (1)).** The evaluation pairing gives $D(E\otimes M)\cong D(E)\otimes D(M)$ naturally, and $D(E)\cong E$ for the finite-dimensional simple $E$ by [F6]. Hence $E\otimes\nabla(w\cdot\lambda)=E\otimes D\Delta(w\cdot\lambda)\cong D(E\otimes\Delta(w\cdot\lambda))$. Since $D$ preserves central-character blocks and is exact, it commutes with the inclusion and projection defining the translation functor, so $T\nabla(w\cdot\lambda)=\operatorname{pr}_{\chi_\mu}(E\otimes\nabla(w\cdot\lambda))\cong D(\operatorname{pr}_{\chi_\mu}(E\otimes\Delta(w\cdot\lambda)))\cong D\Delta(w\cdot\mu)=\nabla(w\cdot\mu)$ by step 1.1. [F1, F6, step 1.1, algebra]

3.1 **Minimal survival (first half of (2)).** Let $w\in W^J$ and consider a composition series of $\Delta(w\cdot\lambda)$ with factors $L(x\cdot\lambda)$, $x\le w$. Applying the exact functor $T$ and using step 1.1 gives a series of $\Delta(w\cdot\mu)$ with factors $TL(x\cdot\lambda)$, which vanish for $x\notin W^J$ by step 2.1. The head $L(w\cdot\mu)$ of $\Delta(w\cdot\mu)$ therefore occurs as a composition factor of some $TL(x\cdot\lambda)$ with $x\in W^J,\ x\le w$; a nonzero $TL(x\cdot\lambda)$ is a quotient of $\Delta(x\cdot\mu)$ by step 1.1, so all its composition factors are $L(y\cdot\mu)$ with $y\le x$, and its head is $L(x\cdot\mu)$; the factor $L(w\cdot\mu)$ can only come from $x=w$, since $x\cdot\mu=y\cdot\mu$ with $x,y\in W^J$ forces $x,y$ to represent the same coset and hence $x=y$ [F5]. Thus $TL(w\cdot\lambda)\neq0$ with head $L(w\cdot\mu)$; combined with step 2.1 this is the dichotomy of (2). [F5, F7, step 1.1, step 2.1, algebra]

4.1 **Simplicity of the surviving simple (end of (2)).** For $w\in W^J$, the socle inclusion $L(w\cdot\lambda)\hookrightarrow\nabla(w\cdot\lambda)$ becomes, by exactness of $T$ and step 2.2, an inclusion $TL(w\cdot\lambda)\hookrightarrow\nabla(w\cdot\mu)$, and the surjection $\Delta(w\cdot\lambda)\twoheadrightarrow L(w\cdot\lambda)$ becomes a surjection $\Delta(w\cdot\mu)\twoheadrightarrow TL(w\cdot\lambda)$ by step 1.1. The composite $\Delta(w\cdot\mu)\twoheadrightarrow TL(w\cdot\lambda)\hookrightarrow\nabla(w\cdot\mu)$ is nonzero by step 3.1, so by [F7] its image is the image of the canonical nonzero map $\Delta(w\cdot\mu)\to L(w\cdot\mu)\hookrightarrow\nabla(w\cdot\mu)$, namely $L(w\cdot\mu)$; since $TL(w\cdot\lambda)\hookrightarrow\nabla(w\cdot\mu)$ is injective, $TL(w\cdot\lambda)\cong L(w\cdot\mu)$. [F7, step 1.1, step 2.2, step 3.1, algebra]

5.1 Part (1) is steps 1.1 and 2.2; part (2) is steps 2.1 and 3.1 together with the simplicity statement of step 4.1; part (3) is step 1.2. [step 1.1, step 2.1, step 1.2, step 2.2, step 3.1, step 4.1] ∎

## Remarks

**Correction of the scaffold's facet clause.** The scaffolded statement
asserted, as an equivalent of the $W^J$ dichotomy of (2), that
$TL(w\cdot\lambda)\neq0$ if and only if the facet $F_{w\cdot\mu}$ is contained
in the upper closure $F^+_{w\cdot\lambda}$. That containment is automatic for
every $w$ under the stated hypotheses ($\lambda$ and $\mu$ are both
dot-antidominant, so $F_{w\cdot\mu}\subseteq F^+_{w\cdot\lambda}$ follows from
the sign pattern alone) and therefore cannot characterise survival; it is
refuted by the smallest example $\mathfrak{sl}_2$, $\lambda=-2$, $\mu=-1$,
$w=s$, where $TL(0)=0$ although $F_{\mu}=\{-1\}\subseteq F^+_0=[-1,\infty)$.
The correct criterion is the primary one: $w\in W^J$, the minimal right coset
representatives. This is the same dichotomy that the companion example
`ex-translation-to-a-singular-wall-in-type-a-two` records in type $A_2$.

Only the big antidominant projective $\Xi_\mu=P(\mu)$ carries every distinct
singular standard exactly once; other singular projectives need not contain
all standards, so no universal lower bound $(P:\Delta)\ge1$ is asserted for
arbitrary projectives.
