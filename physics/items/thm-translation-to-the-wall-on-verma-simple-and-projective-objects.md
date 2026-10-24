---
id: thm-translation-to-the-wall-on-verma-simple-and-projective-objects
kind: theorem
title: "Translation to the wall on Verma, simple and projective objects"
status: published
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
       cor-central-characters-are-dot-weyl-orbits,
       lem-dominant-weights-are-maxima-of-their-weyl-orbits,
       prop-weights-of-a-verma-module-lie-below-lambda,
       lem-finite-weyl-strong-exchange-and-deletion,
       thm-verma-module-has-a-unique-simple-quotient]
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

[F6] Restricted Chevalley duality: $D(M)_\eta=M_\eta^*$ with the $\tau$-twisted action; $D$ is an exact contravariant involution of $\mathcal O$, preserves weight-space dimensions, simple composition multiplicities and central-character blocks, and $D(L(\eta))\cong L(\eta)$, $D(\Delta(\eta))=\nabla(\eta)$ ([[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[def-standard-and-costandard-objects-in-category-o]]). For finite-dimensional $E$, the natural tensor-dual identification is $D(E)\otimes D(M)\cong D(E\otimes M)$, with the Chevalley-twisted dual $D(E)$, not the ordinary dual $E^*$.

[F8] For a dominant integral weight $\nu$, every weight $\gamma$ of $L(\nu)$ satisfies $\lvert\gamma\rvert\le\lvert\nu\rvert$, with equality exactly when $\gamma\in W\nu$, and every weight of the orbit $W\nu$ occurs in $L(\nu)$ with multiplicity one ([[lem-weight-norm-bound-for-finite-dimensional-simple-modules]]).

[F7] Each Verma has the unique simple head $L(\eta)$ ([[thm-verma-module-has-a-unique-simple-quotient]]), whose dual is the simple socle of its costandard by [F6]. BGG data: a nonzero $\mathfrak g$-homomorphism $M(\eta)\to M(\zeta)$ exists if and only if $\eta\uparrow\zeta$ in the strong linkage order ([[thm-bgg-verma-homomorphism-criterion]]), such a map is injective ([[lem-a-nonzero-verma-homomorphism-is-injective]]), BGG reciprocity $(P(\eta):\Delta(\zeta))=[\Delta(\zeta):L(\eta)]$ holds with finitely many nonzero multiplicities ([[thm-bgg-reciprocity]], [[def-verma-flag-and-its-multiplicities]], [[thm-projectives-in-category-o-have-verma-flags]]), and $\operatorname{Hom}(\Delta(\eta),\nabla(\zeta))$ is $0$ or one-dimensional according as $\eta\neq\zeta$ or $\eta=\zeta$ ([[lem-standard-costandard-hom-and-ext-vanishing]]). Every object of $\mathcal O$ has finite length and finite-length objects decompose into indecomposables ([[thm-simple-objects-of-category-o-are-highest-weight-modules]], [[lem-finite-length-objects-decompose-into-indecomposables]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[thm-category-o-has-enough-projectives]]).

[F9] Orbit and weight bounds: for dot-antidominant integral $\eta$, applying [[lem-dominant-weights-are-maxima-of-their-weyl-orbits]] to $-\eta-\rho$ gives $w\cdot\eta\ge\eta$ for every $w$. Verma weights lie in $\eta-Q^+$ and the highest-weight space is one dimensional ([[prop-weights-of-a-verma-module-lie-below-lambda]]). By the central-character and simple-label facts in [F1], [F7], every composition factor of $M(\eta)$ has its highest weight in $W\cdot\eta$; the two bounds force that weight to equal $\eta$. Exactness of weight spaces and the one-dimensional top then force length one. Thus $M(\eta)=L(\eta)$, including singular $\eta$ and $\eta=-\rho$.

[F10] Finite-Weyl root/length criterion ([[lem-finite-weyl-strong-exchange-and-deletion]]): $\ell(ws_j)<\ell(w)$ iff $w\alpha_j<0$, and $\ell(s_i v)>\ell(v)$ iff $v^{-1}\alpha_i>0$. Positive roots of a parabolic subsystem are nonnegative combinations of its simple roots, so $w\alpha_j>0$ for all $j\in J$ implies $w\Phi_J^+\subseteq\Phi^+$.


## Proof

**Proof technique:** direct: compute $T$ on standards by the unique surviving factor, transport to costandards by restricted duality, decide simple survival by the nonminimal Verma embedding, and manufacture the big projective from the most singular block.

1.1 **Standards (first clause of (1)).** By [F3], the tensor $E\otimes\Delta(w\cdot\lambda)$ has a finite Verma flag by [F4] in which the unique factor with central character $\chi_\mu$ is $\Delta(w\cdot\mu)$, once. The exact projection $\operatorname{pr}_{\chi_\mu}$ applied to this flag kills every factor whose central character differs from $\chi_\mu$ and carries the remaining $\Delta(w\cdot\mu)$ isomorphically, so $T\Delta(w\cdot\lambda)\cong\Delta(w\cdot\mu)$ for every $w$. [F1, F3, F4, algebra]

1.2 **The big projective (3).** By [F9], $M(-\rho)=L(-\rho)$. Its dot orbit is a singleton, so BGG reciprocity [F7] gives a one-factor Verma flag for $P(-\rho)$, proving $P(-\rho)=L(-\rho)$. Simple-preserving duality makes it injective too. Put $E_0=L(w_0\mu_\bullet)$ and $S=T_{-\rho}^{\mu}$, whose adjoint is $S'=T_{\mu}^{-\rho}$; the ordinary dual $E_0^*$ has highest weight $-\mu_\bullet$. By [F2], $\Xi_\mu=SL(-\rho)$ is projective and injective. Tensoring $M(-\rho)$ with $E_0$ and projecting retains exactly the factors $\Delta(-\rho+\gamma)$ with $\gamma\in W\mu_\bullet$, each once by [F4], [F8]. These are precisely the distinct standards $\Delta(y\cdot\mu)$. Likewise, since $L(\mu)=M(\mu)$ by [F9], tensoring it with $E_0^*$ and projecting to $\chi_{-\rho}$ retains only $\Delta(-\rho)$, once, from the extremal weight $-\mu_\bullet$. Thus $S'L(\mu)=L(-\rho)$, and adjunction gives $\dim\operatorname{Hom}(\Xi_\mu,L(\mu))=1$. The resulting epimorphism splits off the projective cover $P(\mu)$: lift it through the cover, use essentiality to make the lift surjective, and split by projectivity. For every $y$, there is an injection $M(\mu)\hookrightarrow M(y\cdot\mu)$. Indeed induct on a reduced expression $y=s_i v$: [F10] gives $v^{-1}\alpha_i>0$, so $\langle v(\mu_\bullet),\alpha_i^\vee\rangle\le0$. If it is zero the weights coincide; otherwise the positive integral pairing at $s_i v\cdot\mu$ supplies the one-step strong linkage and the injection $M(v\cdot\mu)\hookrightarrow M(s_i v\cdot\mu)$ by [F7]. Compose these injections. BGG then gives $(P(\mu):\Delta(y\cdot\mu))\ge1$ for every distinct label. The direct-summand complement of $P(\mu)$ in $\Xi_\mu$ is projective and has a Verma flag by [F7]. Additivity and the already computed one-per-label flag of $\Xi_\mu$ force every flag multiplicity of the complement to vanish, so the complement is zero. Hence $\Xi_\mu=P(\mu)$ and all the displayed standard and composition multiplicities are one. [F1, F2, F4, F5, F6, F7, F8, F9, F10, algebra]

2.1 **Nonminimal vanishing (second half of (2)).** Suppose $w\notin W^J$; then there is a simple $s\in J$ with $\ell(ws)<\ell(w)$, equivalently $w\alpha_s<0$ by [F10]. Then $w\cdot\lambda-ws\cdot\lambda=w(\lambda-s\cdot\lambda)=\langle\lambda_\bullet,\alpha_s^\vee\rangle\,w\alpha_s$ with $\langle\lambda_\bullet,\alpha_s^\vee\rangle<0$ and $w\alpha_s<0$, so $w\cdot\lambda-ws\cdot\lambda\in Q^+\setminus\{0\}$: $ws\cdot\lambda$ is strictly below $w\cdot\lambda$. Put $\beta=-w\alpha_s\in\Phi^+$; then $s_\beta w=ws$ and $\langle w\lambda_\bullet,\beta^\vee\rangle=-\langle\lambda_\bullet,\alpha_s^\vee\rangle\in\mathbb Z_{>0}$. This is a one-step strong linkage, so [F7] gives a nonzero (hence injective) map $\Delta(ws\cdot\lambda)\to\Delta(w\cdot\lambda)$ by [F7]. Applying the exact functor $T$ and step 1.1 gives a map $\Delta(ws\cdot\mu)\to\Delta(w\cdot\mu)$; now $ws\cdot\mu=w\cdot(s\cdot\mu)=w\cdot\mu$ because $s\in J$ fixes $\mu$ [F5], so this is an injective endomorphism of the finite-length module $\Delta(w\cdot\mu)$, hence an isomorphism. If $N$ is the cokernel of $\Delta(ws\cdot\lambda)\to\Delta(w\cdot\lambda)$, exactness of $T$ gives $TN=0$; since $L(w\cdot\lambda)$ is a quotient of $N$ (the kernel of $\Delta(w\cdot\lambda)\twoheadrightarrow L(w\cdot\lambda)$ contains $\Delta(ws\cdot\lambda)$ because the latter has no composition factor $L(w\cdot\lambda)$, its weights being strictly below), $TL(w\cdot\lambda)=0$. [F5, F7, F10, step 1.1, algebra]

2.2 **Costandards (second clause of (1)).** The evaluation pairing gives $D(E\otimes M)\cong D(E)\otimes D(M)$ naturally, and $D(E)\cong E$ for the finite-dimensional simple $E$ by [F6]. Hence $E\otimes\nabla(w\cdot\lambda)=E\otimes D\Delta(w\cdot\lambda)\cong D(E\otimes\Delta(w\cdot\lambda))$. Since $D$ preserves central-character blocks and is exact, it commutes with the inclusion and projection defining the translation functor, so $T\nabla(w\cdot\lambda)=\operatorname{pr}_{\chi_\mu}(E\otimes\nabla(w\cdot\lambda))\cong D(\operatorname{pr}_{\chi_\mu}(E\otimes\Delta(w\cdot\lambda)))\cong D\Delta(w\cdot\mu)=\nabla(w\cdot\mu)$ by step 1.1. [F1, F6, step 1.1, algebra]

3.1 **A translated simple is simple or zero.** For every $x\in W$, apply exact $T$ to $\Delta(x\cdot\lambda)\twoheadrightarrow L(x\cdot\lambda)\hookrightarrow\nabla(x\cdot\lambda)$. Steps 1.1 and 2.2 give a surjection $\Delta(x\cdot\mu)\twoheadrightarrow TL(x\cdot\lambda)$ followed by an injection into $\nabla(x\cdot\mu)$. If the intermediate object is nonzero, the composite is nonzero; the one-dimensional standard-costandard Hom of [F7] makes its image the canonical simple $L(x\cdot\mu)$. The injection identifies the intermediate object with that image. Thus $TL(x\cdot\lambda)$ is either zero or $L(x\cdot\mu)$, without any unstated Bruhat support assertion. [F6, F7, step 1.1, step 2.2, algebra]

4.1 **Minimal survival.** Let $w\in W^J$ and translate a composition series of $\Delta(w\cdot\lambda)$. Its image is $\Delta(w\cdot\mu)$, whose head $L(w\cdot\mu)$ occurs as a composition factor. By step 3.1 that factor is the image of some $L(x\cdot\lambda)$ with $x\cdot\mu=w\cdot\mu$. Step 2.1 kills every nonminimal $x$, and [F5] says that the coset $wW_J$ has exactly one minimal representative, namely $w$. Thus $TL(w\cdot\lambda)$ is nonzero and equals $L(w\cdot\mu)$ by step 3.1. Together with step 2.1 this proves (2). [F5, step 1.1, step 2.1, step 3.1, algebra]

5.1 Part (1) is steps 1.1 and 2.2; part (2) is steps 2.1 and 3.1 together with the simplicity statement of step 4.1; part (3) is step 1.2. [step 1.1, step 2.1, step 1.2, step 2.2, step 3.1, step 4.1] ∎

## Remarks

**Upper closure.** The upper closure in [[def-dot-action-facets-and-single-wall-translation-data]] preserves strictly positive pairings and allows a negative pairing to become zero. Consequently $F_{w\cdot\mu}\subseteq F^+_{w\cdot\lambda}$ holds exactly when $w\Phi_J^+\subseteq\Phi^+$: zeros at the translated walls are allowed precisely when the corresponding regular pairings were negative. This is equivalent to $w\alpha_j>0$ for all $j\in J$, hence to $w\in W^J$ by [F10]. The criterion therefore agrees with (2). In $\mathfrak{sl}_2$, $F^+_0=(-1,\infty)$ excludes the wall $-1$, whereas $F^+_{-2}=(-\infty,-1]$ includes it, in agreement with $TL(0)=0$ and $TL(-2)=L(-1)$. This is Chen Definition 3.9, Theorem 3.12 and Example 3.16; ordinary closure must not be substituted for upper closure.

Only the big antidominant projective $\Xi_\mu=P(\mu)$ carries every distinct singular standard exactly once; other singular projectives need not contain all standards, so no universal lower bound $(P:\Delta)\ge1$ is asserted for arbitrary projectives.
