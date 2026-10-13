---
id: thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule
kind: theorem
title: Wall-crossing under the Soergel functor is tensoring with the coinvariant bimodule
status: published
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

**Given:** AC ([[def-axiom-of-choice]]), the regular block at $\lambda$, a wall with dot stabilizer $H=\{1,s\}$, its singular antidominant projective $P_\nu$, the regular antidominant projective $P_\lambda$, and the exact biadjoint translations $T_{\mathrm{on}},T_{\mathrm{out}}$.

[F1] $\operatorname{End}(P_\lambda)=C$ and $\operatorname{End}(P_\nu)=C^s$. Translation out identifies $T_{\mathrm{out}}P_\nu\cong P_\lambda$ and induces the inclusion $C^s\hookrightarrow C$ on endomorphisms, by specializing the deformed central-action orders with Hom base change ([[lem-the-central-action-on-the-deformed-antidominant-projective]], [[thm-lifting-of-indecomposable-projectives-to-the-deformed-family]], [[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]]).

[F2] The regular Soergel functor is exact and gives the equivalence of the Serre quotient by its kernel with finite $C$-modules ([[def-the-antidominant-projective-and-the-soergel-functor]], [[thm-soergels-struktursatz-full-faithfulness-on-projectives]]).

[F3] Translations are exact and biadjoint and preserve projectives and injectives; their action on standards is one onto-wall standard and a **flag** of two return standards, not a direct sum ([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]], [[lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension]], [[def-wall-crossing-functor-and-unit-counit]]).

[F4] Type-A polynomial conventions: $S=\mathbb C[x_1,\dots,x_n]$ after scalar extension, $\deg x_i=2$, $B_s=S\otimes_{S^s}S(1)$, $S=S^s\oplus\alpha S^s$ with $\deg\alpha=2$, and the external shift is $M(d)_j=M_{j+d}$; right origin reduction is $M\otimes_S\mathbb C$ ([[def-type-a-soergel-bimodule-for-a-simple-reflection]], [[def-the-type-a-soergel-category]], [[def-graded-ring-module-bimodule-and-internal-shift]], [[def-reduced-soergel-module-and-dominant-lefschetz-operator]]).

## Proof

**Proof technique:** direct; translated endomorphism actions and descended adjunctions, as in Soergel §2.4, Theorem 10 and Corollary 1.

1.1 Set $V_\nu=\operatorname{Hom}(P_\nu,-)$. It is exact and induces the singular quotient equivalence with finite $C^s$-modules by the same finite-presentation argument $P_\nu\otimes_{C^s}-\dashv V_\nu$ used in [F2]. Adjunction and the chosen identification in [F1] give $V_\nu T_{\mathrm{on}}M\cong\operatorname{Hom}(T_{\mathrm{out}}P_\nu,M)\cong V_\lambda M$. Precomposition by an element of $\operatorname{End}(P_\nu)$ becomes precomposition by its translated endomorphism of $P_\lambda$, which is the inclusion $C^s\hookrightarrow C$ in [F1]. Hence this is an isomorphism of $C^s$-module functors $V_\nu T_{\mathrm{on}}\cong\operatorname{Res}_{C^s}^C V_\lambda$. [F1, F2, F3, algebra]

2.1 Both translations preserve the kernels of these quotient functors. For $T_{\mathrm{on}}$ this follows from step 1.1. For the return functor, $T_{\mathrm{on}}P_\lambda$ is projective-injective by [F3]. In the singular block its indecomposable summands are copies of $P_\nu$: the unique simple Verma is the antidominant one (the same integral Verma embedding argument as in the regular block), every projective has a Verma flag, so every simple submodule of a projective has this label; an indecomposable injective is its injective hull, by the finite-socle argument in the Struktursatz proof [F2]. Thus $T_{\mathrm{on}}P_\lambda=P_\nu^{\oplus m}$ for some finite $m$. If $V_\nu N=0$, adjunction gives $V_\lambda T_{\mathrm{out}}N=\operatorname{Hom}(T_{\mathrm{on}}P_\lambda,N)=0$. The exact adjunction $T_{\mathrm{out}}\dashv T_{\mathrm{on}}$ therefore descends to the two Serre quotients: the unit, counit and their triangle identities descend. [F1, F2, F3, step 1.1, algebra]

3.1 Under the quotient equivalences, the onto-wall functor is restriction by step 1.1. Its descended left adjoint is uniquely isomorphic to extension of scalars $C\otimes_{C^s}-$: the elementary adjunction sends a map $C\otimes_{C^s}N\to M$ to $n\mapsto f(1\otimes n)$, with inverse $c\otimes n\mapsto c g(n)$. Thus $V_\lambda T_{\mathrm{out}}\cong C\otimes_{C^s}V_\nu$ as module functors, with the $C$-action established by adjunction rather than just a vector-space dimension count. Composing with step 1.1 proves $V\theta_s\cong C\otimes_{C^s}V$, equivalently tensoring by the $(C,C)$-bimodule $C\otimes_{C^s}C$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Let $J$ be the ideal of $S^s$ generated by $S^W_+$. Then $I=SJ=J\oplus\alpha J$ under [F4], so $C=(S^s/J)\oplus\alpha(S^s/J)$ and averaging over $s$ identifies $S^s/J=C^s$. Thus $C$ is free over $C^s$ with generators in degrees $0,2$. The natural tensor map $S\otimes_{S^s}C\to C\otimes_{C^s}C$ is an isomorphism: its left $I$ acts as zero since the generators $S^W_+$ balance to zero on the right; factoring the left quotient and the image of $S^s$ therefore gives inverse maps on pure tensors. Hence $B_s\otimes_SC\cong(C\otimes_{C^s}C)(1)$ as graded bimodules. As left $C$-modules this is $C(1)\oplus C(-1)$, not $C(1)\oplus C(3)$, because a degree-two generator contributes the external shift $(-2)$. Its dimension is $2|W|$, whereas $B_s\otimes_S\mathbb C$ has the two centered degrees $-1,1$. This proves the polynomial comparison and the dimension distinction without imposing any grading on category $\mathcal O$. [F4, step 3.1, algebra] ∎
