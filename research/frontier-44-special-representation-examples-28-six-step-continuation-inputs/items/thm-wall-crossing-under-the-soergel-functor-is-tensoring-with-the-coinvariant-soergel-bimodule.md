---
id: thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule
kind: theorem
title: Wall-crossing under the Soergel functor is tensoring with the coinvariant bimodule
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [thm-soergels-struktursatz-full-faithfulness-on-projectives,
       thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra,
       def-the-antidominant-projective-and-the-soergel-functor,
       def-wall-crossing-functor-and-unit-counit,
       lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension,
       def-reduced-soergel-module-and-dominant-lefschetz-operator,
       def-type-a-soergel-bimodule-for-a-simple-reflection,
       def-the-type-a-soergel-category,
       def-graded-ring-module-bimodule-and-internal-shift,
       lem-the-central-action-on-the-deformed-antidominant-projective,
       def-axiom-of-choice,
       thm-lifting-of-indecomposable-projectives-to-the-deformed-family,
       lem-dominant-norm-distance-comparison,
       lem-weight-norm-bound-for-finite-dimensional-simple-modules,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.4, Theorem 10 and Corollary 1: V B_s = C^mu \\otimes_{C^s} V, and Section 2.5 for the description of the VP(x.A)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Theorem 4.19(2): V o Theta_s = (-\\otimes_{C^s} C) o V and Corollary 4.21(2): V o Theta_s = (-\\otimes_R B_s) o V, V(P_x) = C\\otimes_R BS(x)"
---

## Statement

Assume the Axiom of Choice. For a regular integral block and simple reflection
$s$, with $C=\operatorname{End}(P(w_0\cdot\lambda))$, there is a natural
isomorphism of functors to left $C$-modules
$$V\theta_s\cong C\otimes_{C^s}V.$$
Equivalently the functor is tensoring by the $(C,C)$-bimodule
$C\otimes_{C^s}C$, with left action on the first factor and right action on the
second. In type A over $\mathbb C$, its polynomial lift is tensoring on the
left by $B_s=S\otimes_{S^s}S(1)$; read up to the auxiliary suspension
normalisation fixed by the rank-one case, the right origin reduction of $B_s$
is the two-dimensional module of centered degrees $-1,1$, for $M=S$ the
coinvariant reduction satisfies
$B_s\otimes_SC\cong(C\otimes_{C^s}C)(1)$ in the same normalisation, and
$B_s\otimes_S\mathbb C$ itself is not the bimodule $C\otimes_{C^s}C$: the
former has vector-space dimension two, whereas the latter has dimension
$2|W|$. Forgetting the grading gives the displayed category-$\mathcal O$
formula, and no grading on arbitrary category-$\mathcal O$ objects is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the regular integral block of [[def-the-antidominant-projective-and-the-soergel-functor]] with $C=\operatorname{End}(P(w_0\cdot\lambda))$, a simple reflection $s$ with $H=\{1,s\}$, the wall-crossing functor $\theta_s=T_{\mathrm{out}}T_{\mathrm{on}}$ of [[def-wall-crossing-functor-and-unit-counit]], and $V=\operatorname{Hom}(P(w_0\cdot\lambda),-)$.

[F1] $V$ is exact, $VP\cong C$, and $V$ identifies $\operatorname{End}(P)$ with $C$, so $V$ takes values in left $C$-modules; $V$ is fully faithful on projective objects and induces an equivalence of the quotient by $\ker V$ with finite $C$-modules ([[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]], [[thm-soergels-struktursatz-full-faithfulness-on-projectives]], [[def-the-antidominant-projective-and-the-soergel-functor]]).

[F2] Dominant norm-distance and the finite-dimensional weight bound: the translator with extremal weight $u-v$ retains for each $\Delta(y\cdot\lambda)$ exactly one wall standard, and its return sends $\Delta(y\cdot\nu)$ to the two standards $\Delta(y\cdot\lambda)$ and $\Delta(ys\cdot\lambda)$, once each, where $\nu$ is the wall weight with $\nu+\rho=u$ dominant ([[lem-dominant-norm-distance-comparison]], [[lem-weight-norm-bound-for-finite-dimensional-simple-modules]], [[lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension]]).

[F3] The lifted wall projectives over $R=S(\mathfrak h)_{(0)}$: the singular lift $P_R^\nu$ has every distinct singular standard once, $T_{\mathrm{out}}P_R^\nu\cong P_R^\lambda$, and $T_{\mathrm{on}}P_R^\lambda\cong P_R^\nu\oplus P_R^\nu$; the deformed lift $P_R^\lambda$ specializes at $0$ to $P(w_0\cdot\lambda)$ and carries the central-action order $R\otimes_{R^W}R$, while the singular lift carries $R^H\otimes_{R^W}R$ with $H=\{1,s\}$ ([[thm-lifting-of-indecomposable-projectives-to-the-deformed-family]], [[lem-the-central-action-on-the-deformed-antidominant-projective]]).

[F4] Translation functors are exact and biadjoint, so $T_{\mathrm{on}}$ has both adjoints and $\operatorname{Hom}(T_{\mathrm{on}}X,Y)\cong\operatorname{Hom}(X,T_{\mathrm{out}}Y)$ and $\operatorname{Hom}(T_{\mathrm{out}}X,Y)\cong\operatorname{Hom}(X,T_{\mathrm{on}}Y)$; every projective functor sends $P(w_0\cdot\lambda)$ to a finite sum of copies of itself ([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]], [[def-wall-crossing-functor-and-unit-counit]]).

[F5] Type-A polynomial data ([[def-type-a-soergel-bimodule-for-a-simple-reflection]], [[def-the-type-a-soergel-category]], [[def-graded-ring-module-bimodule-and-internal-shift]]): $B_s=S\otimes_{S^s}S(1)$ is a graded $(S,S)$-bimodule, free of rank two on each side; for $S=\mathbb C[x_1,\dots,x_n]$ with $\deg x_i=2$ the averaging idempotent gives $S=S^s\oplus\alpha S^s$ with $\deg\alpha=2$; the coinvariant algebra $C$ of [[def-reduced-soergel-module-and-dominant-lefschetz-operator]] is free of rank two over $C^s$, so $C\otimes_{C^s}C\cong C\oplus C(2)$ has dimension $2|W|$, and the right origin reduction of $B_s$ is the two-dimensional module $k(-1)\oplus k(1)$ of centered degrees $-1,1$ (the image of $S^s$ in $C$ is $C^s$ by averaging).

## Proof

**Proof technique:** direct.

1.1 With $u=\nu+\rho$ dominant and $H=\{1,s\}$, the norm comparison shows that translation onto the wall sends $\Delta(y\cdot\lambda)$ onto $\Delta(y\cdot\nu)$ with multiplicity one, and translation out of the wall sends $\Delta(y\cdot\nu)$ to $\Delta(y\cdot\lambda)\oplus\Delta(ys\cdot\lambda)$, once each; the retained factors are exactly the extremal-weight contributions of the finite-dimensional translators. [F2]

1.2 In the type-A polynomial model, $B_s\otimes_SC=(S\otimes_{S^s}S)(1)\otimes_SC\cong(S\otimes_{S^s}C)(1)\cong(C\oplus C(2))(1)=C(1)\oplus C(3)$ using $S=S^s\oplus\alpha S^s$, and $(C\otimes_{C^s}C)(1)=(C\oplus C(2))(1)=C(1)\oplus C(3)$, so the two graded modules agree; the right origin reduction is $k(-1)\oplus k(1)$ after centering, and $B_s\otimes_S\mathbb C$ is not $C\otimes_{C^s}C$ because its dimension is two while $C\otimes_{C^s}C\cong C\oplus C(2)$ has dimension $2|W|$. [F5]

2.1 The singular lift $P_R^\nu$ has every distinct singular standard once, so by step 1.1 the projective $T_{\mathrm{out}}P_R^\nu$ has every regular standard once; its Hom to the regular antidominant simple is one-dimensional by adjunction through the one-factor onto translation, so the regular antidominant projective splits off, the once-each flags coincide, and $T_{\mathrm{out}}P_R^\nu\cong P_R^\lambda$; conversely $T_{\mathrm{on}}P_R^\lambda$ is projective-injective in the wall component and a sum of copies of $P_R^\nu$, and its flag, computed by applying step 1.1 to the once-each flag of $P_R^\lambda$, contains every singular standard exactly twice, so $T_{\mathrm{on}}P_R^\lambda\cong P_R^\nu\oplus P_R^\nu$. [F3, step 1.1]

3.1 Both $T_{\mathrm{on}}$ and $T_{\mathrm{out}}$ send the antidominant projective to finite sums of antidominant projectives by step 2.1, so they preserve the subcategory $\ker V$: if $VX=0$, then $V(T_{\mathrm{on}}X)=\operatorname{Hom}(P,T_{\mathrm{on}}X)\cong\operatorname{Hom}(T_{\mathrm{out}}P,X)=0$ and likewise with the roles exchanged; hence both descend to the quotient of step [F1], and the quotient equivalence intertwines their adjunction with the module-theoretic restriction and extension of scalars along $C^s\subset C$. [F1, F4, step 2.1]

4.1 Adjunction and step 2.1 give canonical natural isomorphisms of functors: $V_\nu T_{\mathrm{on}}\cong\operatorname{Res}V_\lambda$ because $\operatorname{Hom}(P_\nu,T_{\mathrm{on}}M)\cong\operatorname{Hom}(T_{\mathrm{out}}P_\nu,M)\cong\operatorname{Hom}(P_\lambda,M)$, and $V_\lambda T_{\mathrm{out}}\cong C\otimes_{C^s}V_\nu$ because $\operatorname{Hom}(P_\lambda,T_{\mathrm{out}}N)\cong\operatorname{Hom}(T_{\mathrm{on}}P_\lambda,N)\cong\operatorname{Hom}(P_\nu,N)\oplus\operatorname{Hom}(P_\nu,N)\cong C\otimes_{C^s}\operatorname{Hom}(P_\nu,N)$, using that $C$ is free of rank two over $C^s$; by step 2.1 these are the descended adjunctions, so all maps are the canonical ones. [F1, F4, step 1.2, step 3.1]

5.1 Composing the two identifications of step 4.1 gives $V\theta_s=V_\lambda T_{\mathrm{out}}T_{\mathrm{on}}\cong C\otimes_{C^s}(V_\nu T_{\mathrm{on}})\cong C\otimes_{C^s}(\operatorname{Res}V_\lambda)=C\otimes_{C^s}V$, an isomorphism of functors to left $C$-modules; equivalently $\theta_s$ acts by the $(C,C)$-bimodule $C\otimes_{C^s}C$ with left action on the first factor and right action on the second, and the type-A comparison of step 1.2 realizes its polynomial lift by $B_s$ up to the auxiliary suspension normalisation fixed by the rank-one case, with $B_s\otimes_S\mathbb C$ of dimension two distinct from the $2|W|$-dimensional coinvariant bimodule; forgetting the auxiliary grading gives the displayed formula and no grading of category-$\mathcal O$ objects is asserted. [step 1.2, step 4.1] ∎
