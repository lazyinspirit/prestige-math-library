---
id: prop-translation-identifies-regular-integral-blocks
kind: proposition
title: "Translation identifies the regular integral blocks"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one, thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values, def-regular-integral-dot-orbit-labelling-convention, def-axiom-of-choice, def-verma-flag-and-its-multiplicities, thm-bgg-reciprocity, thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o, def-translation-functor-between-o-blocks, prop-translation-functors-are-exact-and-biadjoint-across-a-wall, lem-dominant-norm-distance-comparison, lem-weight-norm-bound-for-finite-dimensional-simple-modules, lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags, thm-verma-homomorphism-spaces-have-dimension-at-most-one, thm-category-o-has-enough-projectives, thm-projectives-in-category-o-have-verma-flags, thm-category-o-is-abelian-and-extension-closed, thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights, cor-central-characters-are-dot-weyl-orbits]
justified_by: []
aliases: []
landmark: false
dependency_level: 18
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46, complete German text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.5 (printed p. 18), Theorem 11: a natural equivalence of Z-categories O_lambda(g,b) -> O_lambda'(g',b') for an isomorphism of Coxeter systems, with L(x.lambda) -> L(x'.lambda') and Verma modules corresponding; the abstract ('the structure of the direct summands depends only on the integral Weyl group and the singularity of the central character'); complete passages read."
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9: standard filtrations, BGG reciprocity and translation functors (complete 7-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf"
      locator: "Section 3, Constructions 3.1, 3.6-3.7, Lemmas 3.3, 3.5, Theorem 3.13 and Examples 3.15-3.16, printed pp. 4-7; complete 7-page body read. The source translation proof uses same-facet adjunction; the present dominant norm-distance proof supplies the standard counts directly and extends units through projective flags and finite presentations, without importing Humphreys or a Morita theorem."
---

## Statement

Assume the Axiom of Choice. Let $\lambda,\mu$ be dominant regular integral
weights for the same complex type-$A$ semisimple Lie algebra and fixed positive
system. Let $\nu$ be the unique dominant member of $W(\mu-\lambda)$ and
$E=L(\nu)$ the finite-dimensional simple. The actual translation functors
$$F=T_\lambda^\mu=\operatorname{pr}_{\chi_\mu}(E\otimes-)\operatorname{incl}_{\chi_\lambda},\qquad G=T_\mu^\lambda=\operatorname{pr}_{\chi_\lambda}(E^*\otimes-)\operatorname{incl}_{\chi_\mu}$$
are exact mutually inverse equivalences, with natural adjunction isomorphisms
$\operatorname{Id}\cong GF$ and $FG\cong\operatorname{Id}$. They preserve the
dot-orbit labels: for every $w\in W$,
$$F\Delta(w\cdot\lambda)\cong\Delta(w\cdot\mu),\quad FL(w\cdot\lambda)\cong L(w\cdot\mu),\quad FP(w\cdot\lambda)\cong P(w\cdot\mu),$$
and conversely for $G$. Consequently the two blocks have identical Verma-flag
and composition multiplicities, both equal to $P_{y,w}(1)$, and $F$ transports
the inverse-Kazhdan–Lusztig character identity as a Grothendieck-group identity
with the same signed weighted-inverse coefficients $q'_{w,x}(1)$ and the same
support $x\ge w$. Formal characters in the two blocks use their respective
weights $x\cdot\lambda$ and $x\cdot\mu$; they need not be equal as weight
series. The dominant/antidominant, Bruhat, left/right and inverse-Soergel-label
conventions are preserved. This is an ungraded categorical transport and
supplies no Ext or Koszul grading.

## Facts & Assumptions

**Given:** The Axiom of Choice (inherited from the category-O suppliers cited below), dominant regular integral weights $\lambda,\mu$ of a fixed type-$A$ root datum, the weights $a:=\lambda+\rho$, $b:=\mu+\rho$ (both strictly dominant), the dominant weight $\nu$ with $W\nu=W(\mu-\lambda)$, the finite-dimensional simple $E=L(\nu)$, and the translation functors $F=T_\lambda^\mu$, $G=T_\mu^\lambda$.

[F1] Translation functors and central characters ([[def-translation-functor-between-o-blocks]], [[cor-central-characters-are-dot-weyl-orbits]]): $T_{\chi,E,\chi'}=\operatorname{pr}_{\chi'}\circ(E\otimes-)\circ\operatorname{incl}_\chi$ for a finite-dimensional $\mathfrak h$-semisimple $E$, with exact inclusions and projections of the central-character decomposition; for weights, $T_\lambda^\mu=\operatorname{pr}_{\chi_\mu}(E\otimes-)\operatorname{incl}_{\chi_\lambda}$ and $T_\mu^\lambda=\operatorname{pr}_{\chi_\lambda}(E^*\otimes-)\operatorname{incl}_{\chi_\mu}$ with $\nu$ the unique dominant member of $W(\mu-\lambda)$; $\chi_{\lambda'}=\chi_\mu$ if and only if $\lambda'\in W\cdot\mu$, so a Verma $\Delta(\lambda')$ is killed by $\operatorname{pr}_{\chi_\mu}$ exactly when $\lambda'\notin W\cdot\mu$, and is preserved identically when $\lambda'\in W\cdot\mu$.

[F2] Exactness and biadjunction ([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]): for every finite-dimensional $\mathfrak h$-semisimple $E$ the functor $T_{\chi,E,\chi'}$ is exact and $T_{\chi',E^*,\chi}$ is both a left and a right adjoint of it; in particular $F$ and $G$ are exact, $F$ has $G$ as both a left and a right adjoint, and exactness of the right adjoint makes $F$ send projectives to projectives and $G$ send projectives to projectives.

[F3] Verma flags under finite-dimensional tensoring ([[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]]): for a weight $\mu'$, the object $E\otimes\Delta(\mu')$ has a finite Verma flag with factors $\Delta(\mu'+\eta)$, the factor occurring $\dim E_\eta$ times.

[F4] Dominant norm comparison ([[lem-dominant-norm-distance-comparison]]): for dominant $\xi,\eta$ and every $w\in W$, $|\xi-w\eta|\ge|\xi-\eta|$, with equality if and only if $w\eta\in W_\xi\eta$; for regular $\xi$ equality forces $w\eta=\eta$.

[F5] Weight-norm bound and multiplicity one ([[lem-weight-norm-bound-for-finite-dimensional-simple-modules]]): every weight $\gamma$ of $L(\nu)$ satisfies $|\gamma|\le|\nu|$ with equality if and only if $\gamma\in W\nu$, and every orbit weight $W\nu$ occurs with multiplicity one in $L(\nu)$.

[F6] Homomorphism spaces between Vermas ([[thm-verma-homomorphism-spaces-have-dimension-at-most-one]]): $\dim\operatorname{Hom}_{\mathfrak g}(M(\mu'),M(\lambda'))\le1$ for all weights, so $\operatorname{End}(M)=M\mapsto$ scalars on every Verma: the identity spans $\operatorname{End}(M)$ and every nonzero endomorphism of a Verma is an isomorphism.

[F7] Projectives have Verma flags ([[thm-projectives-in-category-o-have-verma-flags]]): every projective object of $\mathcal O$ has a finite Verma flag.

[F8] Enough projectives and covers ([[thm-category-o-has-enough-projectives]]): every simple admits a projective cover, unique up to isomorphism and indecomposable; every object of $\mathcal O$ has finite length and is a quotient of a finite direct sum of projective covers.

[F9] Abelian and extension closed ([[thm-category-o-is-abelian-and-extension-closed]]): $\mathcal O$ is abelian and closed under submodules, quotients and finite direct sums, so kernels and cokernels of morphisms between its objects lie in $\mathcal O$.

[F10] Finite-dimensional simples and their duals ([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]], [[def-translation-functor-between-o-blocks]]): for the dominant integral weight $\nu$ there is a unique finite-dimensional simple $E=L(\nu)$ of highest weight $\nu$, and its dual $E^*$ is the finite-dimensional simple with highest weight $-w_0\nu$, whose extremal orbit is $W(\lambda-\mu)$ and whose weights obey [F5] with the same norm $|\nu|$.

[F11] Block conventions and multiplicities ([[def-regular-integral-dot-orbit-labelling-convention]], [[thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one]], [[thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values]], [[thm-bgg-reciprocity]]): in each of the regular integral blocks $\mathcal O_\lambda$, $\mathcal O_\mu$ the standards, simples and indecomposable projectives are labelled by $W$, the dominant label is $e$, the antidominant one $w_0$, $(P(w\cdot\lambda):\Delta(y\cdot\lambda))=[M(y\cdot\lambda):L(w\cdot\lambda)]$ by BGG reciprocity, and both multiplicities equal $P_{y,w}(1)$, vanishing unless $y\le w$.

[F12] The inverse-Kazhdan–Lusztig character formula ([[thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o]]): in $\mathcal O_\lambda$, $[L(w\cdot\lambda)]=\sum_xq'_{w,x}(1)[M(x\cdot\lambda)]$ with $q'_{x,w}$ the inverse Kazhdan–Lusztig coefficients, supported on $x\ge w$.

## Proof

**Proof technique:** direct.

1.1 Since $\lambda$ and $\mu$ are dominant regular integral, the shifted weights $a=\lambda+\rho$ and $b=\mu+\rho$ are strictly dominant and have trivial stabilizers in $W$; the dominant member $\nu$ of $W(\mu-\lambda)=W(b-a)$ satisfies $|\nu|=|b-a|$, and by [F5] and [F10] every weight $\gamma$ of $E=L(\nu)$ has $|\gamma|\le|b-a|$, with equality exactly on $W\nu$, where the multiplicity is one. [F4, F5, F10]

1.2 By [F2] the functors $F$ and $G$ are exact, and $G$ is both a left and a right adjoint of $F$ (with the roles of $E$ and $E^*$ exchanged for the reverse pair); exactness of the right adjoint on the other side makes $F$ preserve projectives and $G$ preserve projectives. Write $\eta:\operatorname{Id}\to GF$ and $\varepsilon:FG\to\operatorname{Id}$ for the unit and counit of the adjunction $F\dashv G$; both composites $GF$ and $FG$ are exact as compositions of exact functors. [F2]

2.1 Compute $F\Delta(y\cdot\lambda)=\operatorname{pr}_{\chi_\mu}(E\otimes\Delta(y\cdot\lambda))$ for $y\in W$. By [F3] the object $E\otimes\Delta(y\cdot\lambda)$ has a Verma flag with factors $\Delta(y\cdot\lambda+\gamma)$, $\gamma$ running over the weights of $E$ with multiplicity $\dim E_\gamma$, and by [F1] the exact projection $\operatorname{pr}_{\chi_\mu}$ maps this flag to a flag of the projected object whose factor at $\gamma$ is $\Delta(y\cdot\lambda+\gamma)$ when $y\cdot\lambda+\gamma\in W\cdot\mu$ and $0$ otherwise. A retained factor has $y\cdot\lambda+\gamma=x\cdot\mu$ for some $x$, that is $ya+\gamma=xb$ with $a,b$ strictly dominant and regular. Then $|\gamma|=|xb-ya|=|b-x^{-1}ya|\ge|b-a|$ by [F4] applied to the dominant vectors $b$ and $a$; regularity of $b$ makes equality of the norm comparison force $x^{-1}ya=a$, and regularity of $a$ then forces $x=y$. Comparing with the bound $|\gamma|\le|b-a|$ of [F5] gives equality, so $\gamma\in W\nu$ and $x=y$; then $\gamma=y(b-a)=y(\mu-\lambda)$, the factor is $\Delta(y\cdot\lambda+y(\mu-\lambda))=\Delta(y\cdot\mu)$, and by the multiplicity-one clause of [F5] it occurs exactly once. No other retained factor exists, since every retained factor was shown to equal this one. The projected object therefore has a one-step flag with quotient $\Delta(y\cdot\mu)$, so $F\Delta(y\cdot\lambda)\cong\Delta(y\cdot\mu)$ for every $y$. [F1, F3, F4, F5, step 1.1, step 1.2]

2.2 The dual computation gives $G\Delta(y\cdot\mu)\cong\Delta(y\cdot\lambda)$ for every $y$. By [F3] applied to the finite-dimensional module $E^*$ of [F10], the flag factors of $E^*\otimes\Delta(y\cdot\mu)$ are $\Delta(y\cdot\mu+\gamma')$ with multiplicities $\dim(E^*)_{\gamma'}$, and a factor retained by $\operatorname{pr}_{\chi_\lambda}$ satisfies $yb+\gamma'=xa$ for some $x\in W$. Then $|\gamma'|=|xa-yb|=|a-x^{-1}yb|\ge|b-a|$ by [F4] applied to the dominant vectors $a$ and $b$, and regularity of $a$ forces $x^{-1}yb=b$ and then $x=y$; the weight bound [F5] applied to the weights of $E^*$ (whose extremal orbit is $W(\lambda-\mu)$ with multiplicity one, [F10]) gives equality $|\gamma'|=|b-a|$, $\gamma'=y(a-b)=y(\lambda-\mu)$, and the retained factor $\Delta(y\cdot\mu+y(\lambda-\mu))=\Delta(y\cdot\lambda)$ occurs once. Hence $G\Delta(y\cdot\mu)\cong\Delta(y\cdot\lambda)$. [F1, F3, F4, F5, F10, step 1.1, step 1.2]

3.1 For each $y\in W$, the unit $\eta_{\Delta(y\cdot\lambda)}:\Delta(y\cdot\lambda)\to GF\Delta(y\cdot\lambda)$ corresponds under the adjunction isomorphism $\operatorname{Hom}(F\Delta(y\cdot\lambda),F\Delta(y\cdot\lambda))\cong\operatorname{Hom}(\Delta(y\cdot\lambda),GF\Delta(y\cdot\lambda))$ to the identity of $F\Delta(y\cdot\lambda)$; since $F\Delta(y\cdot\lambda)\cong\Delta(y\cdot\mu)\ne0$ by step 2.1, the unit is nonzero. Its target is $GF\Delta(y\cdot\lambda)\cong G\Delta(y\cdot\mu)\cong\Delta(y\cdot\lambda)$ by steps 2.1 and 2.2, so $\eta_{\Delta(y\cdot\lambda)}$ is a nonzero endomorphism of a Verma module after transport along this isomorphism, and by [F6] every nonzero endomorphism of a Verma module is an isomorphism. Hence $\eta$ is an isomorphism on every standard object of $\mathcal O_\lambda$. [F6, step 1.2, step 2.1, step 2.2]

3.2 The same argument for the counit: for each $y\in W$, $\varepsilon_{\Delta(y\cdot\mu)}:FG\Delta(y\cdot\mu)\to\Delta(y\cdot\mu)$ corresponds to the identity of $G\Delta(y\cdot\mu)\ne0$ under the adjunction, hence is nonzero, and its source is $FG\Delta(y\cdot\mu)\cong F\Delta(y\cdot\lambda)\cong\Delta(y\cdot\mu)$ by steps 2.1 and 2.2; by [F6] it is an isomorphism on every standard object of $\mathcal O_\mu$. [F6, step 1.2, step 2.1, step 2.2]

4.1 The isomorphisms of steps 3.1 and 3.2 extend to every Verma-filtered object. If $0\to A\to B\to C\to0$ is a short exact sequence in $\mathcal O_\lambda$ with $A$ and $C$ Verma-filtered and $\eta_A,\eta_C$ isomorphisms, then $GF$ is exact by step 1.2, and naturality of $\eta$ gives a map of short exact sequences from $0\to A\to B\to C\to0$ to $0\to GFA\to GFB\to GFC\to0$ with isomorphisms at the outer terms; the five lemma makes $\eta_B$ an isomorphism. Inducting along a finite Verma flag of $X$ ([[def-verma-flag-and-its-multiplicities]], the flag decomposition $0=X_0\subseteq\cdots\subseteq X_n=X$ with Verma quotients) gives that $\eta_X$ is an isomorphism for every Verma-filtered $X$, and [F7] makes every projective of $\mathcal O_\lambda$ Verma-filtered; the identical induction with $FG$ exact and the counit gives that $\varepsilon_Y$ is an isomorphism for every Verma-filtered $Y$ of $\mathcal O_\mu$, in particular for every projective. [F7, step 1.2, step 3.1, step 3.2]

5.1 The isomorphisms extend to all objects by finite projective presentations. By [F8] every object $X$ of $\mathcal O_\lambda$ has finite length and is a quotient of a finite direct sum of projective covers; choosing such a cover $P_0\twoheadrightarrow X$ and applying the same to the kernel of this map (an object of $\mathcal O_\lambda$ by [F9]) produces an exact sequence $P_1\to P_0\to X\to0$ with $P_0,P_1$ finite direct sums of projective covers, hence projective and Verma-filtered by [F7]. Applying the exact functor $GF$ and using naturality of $\eta$ identifies $\eta_X$ with the map induced on the cokernel of $\eta_{P_1},\eta_{P_0}$, which are isomorphisms by step 4.1; therefore $\eta_X$ is an isomorphism. The same argument in $\mathcal O_\mu$ with a finite projective presentation and the exact functor $FG$ makes $\varepsilon_Y$ an isomorphism for every $Y$ in $\mathcal O_\mu$. Thus the unit and counit of the adjunction $F\dashv G$ are natural isomorphisms, so $F$ and $G$ are mutually inverse equivalences of categories. [F8, F9, step 4.1]

6.1 Being inverse equivalences, $F$ is exact and reflects the categorical structures. For the labels: $F\Delta(w\cdot\lambda)\cong\Delta(w\cdot\mu)$ was proved in step 2.1. For each $w$, $FL(w\cdot\lambda)$ is a simple object, and the exact functor $F$ turns the epimorphism $\Delta(w\cdot\lambda)\twoheadrightarrow L(w\cdot\lambda)$ onto its unique simple quotient into an epimorphism $\Delta(w\cdot\mu)\cong F\Delta(w\cdot\lambda)\twoheadrightarrow FL(w\cdot\lambda)$; since the simple quotient of $\Delta(w\cdot\mu)$ is unique and equal to $L(w\cdot\mu)$, one has $FL(w\cdot\lambda)\cong L(w\cdot\mu)$. Finally $P(w\cdot\lambda)$ is a projective cover of $L(w\cdot\lambda)$ by [F8] and [F11], so $FP(w\cdot\lambda)$ is a projective object mapping onto $FL(w\cdot\lambda)\cong L(w\cdot\mu)$ with essential kernel: if a subobject $Z'\subseteq FP(w\cdot\lambda)$ mapped onto $FL(w\cdot\lambda)$, then applying the inverse equivalence would exhibit a subobject of $P(w\cdot\lambda)$ mapping onto $L(w\cdot\lambda)$, so essentiality on the source forces $Z'=FP(w\cdot\lambda)$. By uniqueness of projective covers in [F8], $FP(w\cdot\lambda)\cong P(w\cdot\mu)$. The dual statements $G\Delta(w\cdot\mu)\cong\Delta(w\cdot\lambda)$, $GL(w\cdot\mu)\cong L(w\cdot\lambda)$ and $GP(w\cdot\mu)\cong P(w\cdot\lambda)$ follow from step 2.2 and the identical argument with the roles exchanged. [F8, F11, step 2.1, step 2.2, step 5.1]

7.1 The multiplicities are transported termwise. Since $F$ is an equivalence, it is full and faithful, so applying $F$ to a finite Verma flag of $P$ and applying $G$ to a finite Verma flag of $FP$ are inverse bijections between the flag multiplicities of $P$ and of $FP$; by steps 6.1 and 2.2 the labels match, giving $(FP(w\cdot\lambda):F\Delta(y\cdot\lambda))=(P(w\cdot\lambda):\Delta(y\cdot\lambda))$ and, with step 6.1, $(P(w\cdot\mu):\Delta(y\cdot\mu))=(P(w\cdot\lambda):\Delta(y\cdot\lambda))=P_{y,w}(1)$ by [F11]; BGG reciprocity [F11] likewise transports the composition multiplicities and their vanishing. Transporting the identity of [F12] along the induced isomorphism of Grothendieck groups gives $[L(w\cdot\mu)]=\sum_xq'_{w,x}(1)[M(x\cdot\mu)]$ with the same weighted-inverse coefficients and the same support $x\ge w$, because $F$ carries $L(w\cdot\lambda)$ to $L(w\cdot\mu)$ and $M(x\cdot\lambda)=\Delta(x\cdot\lambda)$ to $M(x\cdot\mu)$. The conventions are preserved because the label $w$ is unchanged: dominant and antidominant labels, Bruhat comparisons, left/right labels and inverse Soergel labels carry over; the formal characters are read in the respective weight series $x\cdot\lambda$ and $x\cdot\mu$ and need not coincide. Nothing above uses or produces a grading on $\mathcal O$, an $\mathrm{Ext}$-algebra or a Koszul structure. [F11, F12, step 2.2, step 6.1] ∎
