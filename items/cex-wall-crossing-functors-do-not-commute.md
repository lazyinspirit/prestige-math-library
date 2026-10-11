---
id: cex-wall-crossing-functors-do-not-commute
kind: counterexample
title: Wall-crossing functors do not commute
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group,
       def-verma-flag-and-its-multiplicities,
       prop-the-grothendieck-group-of-o-has-simple-and-standard-bases,
       def-wall-crossing-functor-and-unit-counit,
       def-axiom-of-choice]
generation:
  role: counterexample
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Proposition 4.7 and Remark 4.8 (printed p. 8): the standard-basis class map intertwines wall crossing with right multiplication by 1+s; the A_2 products are computed locally here"
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.6, Theorem 12 and Lemma 9(ii): the class isomorphism for <O_0> and the sP = theta_s P - P operation"
---

## Statement refuted

Assume the Axiom of Choice, inherited from the published items used. In type
$A_2$ with distinct simple reflections $s,t$ (so $m_{st}=3$), the wall-crossing
functors $\theta_s\theta_t$ and $\theta_t\theta_s$ on the regular integral block
commute, so that the assignment $s\mapsto\theta_s$ defines a representation of
$W=S_3$ on the block. This is false: the two functors are not naturally
equivalent, and $\theta_s^2$ is not the identity.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the type-$A_2$ regular integral block with simple reflections $s,t$ with $st$ of order three, the wall-crossing functors $\theta_s,\theta_t$ of [[def-wall-crossing-functor-and-unit-counit]], and the class map $c$ of [[lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s]].

[F1] The assignment $c\colon K_0(\mathcal O_\lambda)\to\mathbb Z[W]$, $c[\Delta(v\cdot\lambda)]=v$, is an isomorphism and satisfies $c[\theta_sX]=c[X](1+s)$ for every $X$, hence $c[\theta_t\theta_s\Delta(\lambda)]=(1+s)(1+t)$ and $c[\theta_s\theta_t\Delta(\lambda)]=(1+t)(1+s)$ ([[lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s]]).

[F2] The classes $[\Delta(v\cdot\lambda)]$, $v\in W$, form a $\mathbb Z$-basis of $K_0(\mathcal O_\lambda)$ ([[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]], [[def-verma-flag-and-its-multiplicities]]).

[F3] Two projective functors are naturally equivalent if and only if their induced operators on $K_0(\mathcal O_\lambda)$ agree ([[thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group]], part (3)).

## Counterexample

**Proof technique:** direct.

1.1 The two class computations are $c[\theta_t\theta_s\Delta(\lambda)]=(1+s)(1+t)=1+s+t+st$ and $c[\theta_s\theta_t\Delta(\lambda)]=(1+t)(1+s)=1+t+s+ts$, that is $[\theta_t\theta_s\Delta(\lambda)]=[\Delta(\lambda)]+[\Delta(s\cdot\lambda)]+[\Delta(t\cdot\lambda)]+[\Delta(st\cdot\lambda)]$ and $[\theta_s\theta_t\Delta(\lambda)]=[\Delta(\lambda)]+[\Delta(t\cdot\lambda)]+[\Delta(s\cdot\lambda)]+[\Delta(ts\cdot\lambda)]$. [F1]

1.2 The two products of [F1], $(1+s)(1+t)$ and $(1+t)(1+s)$, differ: the coefficient of the length-two element $st$ is one in the first and zero in the second, and vice versa for $ts$, while $st\ne ts$ in $S_3$ and the standard classes form a $\mathbb Z$-basis, so the induced class operators on $K_0(\mathcal O_\lambda)$ are different and already differ on the single class $[\Delta(\lambda)]$. [F1, F2, algebra]

2.1 By the determination theorem, two projective functors whose class operators on $K_0$ differ are not naturally equivalent; hence $\theta_s\theta_t\not\cong\theta_t\theta_s$. [F3, step 1.2]

3.1 Feeding one factor at a time gives $c[\theta_s^2X]=c[X](1+s)^2=2c[X](1+s)=2c[\theta_sX]$ for every $X$, so the class operators of $\theta_s^2$ and of $\theta_s\oplus\theta_s$ agree and the determination theorem gives $\theta_s^2\cong\theta_s\oplus\theta_s\not\cong\operatorname{id}$, since $\theta_s\Delta(\lambda)$ has nonzero class $1+s$; hence $s\mapsto\theta_s$ is not a representation of $W$, the wall-crossing classes are the specialized self-dual Hecke generators $1+s$, whose square is $2(1+s)$; the group generator is recovered on classes by $s=[\theta_s]-1$, and 'generated by wall-crossing' cannot be read as the assignment $s\mapsto\theta_s$ being a representation of $W$. [F3, step 2.1, algebra] ∎
