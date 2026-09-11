---
id: cex-the-uct-splitting-is-not-natural
kind: counterexample
title: The UCT splitting is not natural
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, def-axiom-of-choice, lem-real-projective-space-cellular-homology-and-pinch-map, cor-homology-of-spheres, lem-singular-uct-extension-from-cycle-projections, def-ext-via-a-projective-resolution-of-the-first-variable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, nonnaturality of universal coefficient splittings
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement refuted

For each abelian coefficient group $G$, one can choose sections of cohomology UCT evaluation, $s_X:\operatorname{Hom}(H_n(X;\mathbb Z),G)\to H^n(X;G)$ with $\beta_Xs_X=1$, naturally in all continuous maps of spaces. Already for $n=2$ and fixed $G=\mathbb F_2$, this is false.

## Facts & Assumptions

[F1] [[lem-real-projective-space-cellular-homology-and-pinch-map]] computes integral homology of $\mathbb{RP}^2$ and proves that the actual quotient $q:\mathbb{RP}^2\to\mathbb{RP}^2/\mathbb{RP}^1\cong S^2$ induces an isomorphism on singular degree-two cohomology with coefficients $\mathbb F_2$. This uses the actual cellular homology map and natural singular field duality, rather than an unproved cellular-cohomology comparison.

[F2] [[cor-homology-of-spheres]] gives integral $H_1(S^2)=0$ and $H_2(S^2)=\mathbb Z$. [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives the natural evaluation sequence. Assume [[def-axiom-of-choice]].

[F3] [[def-ext-via-a-projective-resolution-of-the-first-variable]] and the canonical length-one comparison in [[lem-singular-uct-extension-from-cycle-projections]] compute its Ext terms from the displayed resolutions.

## Counterexample

**Given:** $X=\mathbb{RP}^2$, $Y=S^2$, their quotient map $q:X\to Y$, degree two, fixed coefficients $G=\mathbb F_2$, and AC.

1.1 Integrally $H_1(Y)=0$ and $H_2(Y)=\mathbb Z$ by [F2], so $\operatorname{Ext}^1(H_1(Y),G)=0$ (use the zero resolution), and evaluation $\beta_Y:H^2(Y;G)\to\operatorname{Hom}(\mathbb Z,G)=G$ is an isomorphism. Write $u:\mathbb Z\to G$ for reduction modulo two, the nonzero element of this Hom group. There is a unique nonzero $a=\beta_Y^{-1}u$. Every section of $\beta_Y$ must send $u$ to $a$. [F2, F3, given]

1.2 Integrally $H_1(X)=\mathbb Z/2$ and $H_2(X)=0$ by [F1]. The resolution $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$ becomes $G\xrightarrow{0}G$ on applying Hom into $G$, so $\operatorname{Ext}^1(\mathbb Z/2,G)=G$. Thus the UCT sequence for $X$ is $0\to G\xrightarrow{\iota_X}H^2(X;G)\xrightarrow{\beta_X}0\to0$. In particular all of $H^2(X;G)$ is in its Ext image. [F1, F2, F3, given]

2.1 The actual map $q^*:H^2(Y;G)\to H^2(X;G)$ is an isomorphism by [F1], so $q^*a\ne0$. In contrast, the map of Hom terms is precomposition by the integral homology map $q_*:H_2(X;\mathbb Z)=0\to H_2(Y;\mathbb Z)=\mathbb Z$; hence it sends $u$ to the zero homomorphism. The nonzero mod-two cohomology map and the zero map of integral-homology Hom terms are different assertions, with their coefficient conventions fixed. [F1, F2, step 1.1, step 1.2]

3.1 Suppose a family of group-homomorphism sections were natural for continuous space maps. Its naturality square at $q$ would require $q^*s_Y(u)=s_X(u\circ q_*)$. The left side is $q^*a\ne0$ by steps 1.1 and 2.1. The right side is $s_X(0)=0$, since $s_X$ is a group homomorphism from the zero Hom group. This is impossible. Therefore no such natural splitting exists even for fixed coefficients $G=\mathbb F_2$ and degree two, and in particular not for all coefficients and spaces. [step 1.1, step 1.2, step 2.1, assume-contra, discharge-contradiction]

4.1 The contradiction does not deny an individual split sequence: for $Y$ its section is $\beta_Y^{-1}$, while for $X$ the section from its zero Hom term is the zero map. It denies compatibility of these sections with the single explicit continuous quotient $q$. The witness is nonempty and finite dimensional, $u(1)=1$, and the zero Hom group on $X$ is essential, not an omitted endpoint. AC is inherited from [F1] field duality and [F2] UCT and comparison; no new choice is used in the two finite resolutions or the naturality contradiction. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 3.1] ∎
