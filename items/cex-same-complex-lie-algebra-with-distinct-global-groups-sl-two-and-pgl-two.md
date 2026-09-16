---
id: cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two
kind: counterexample
title: SL_2 and PGL_2 have the same Lie algebra but differ globally
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-mobius-group-and-projective-linear-identification, def-invertible-matrix-and-general-linear-group, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Example 19.14 and Exercise 3.9"
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§3.8 on connected groups with the same Lie algebra, printed pp. 39-45"
landmark: false
proof_strategy: direct
---

## Statement refuted

A connected Lie group is determined up to isomorphism by its Lie algebra, so
two connected Lie groups with the same complex semisimple Lie algebra are
isomorphic.

## Facts & Assumptions

**Given:** The groups $\operatorname{SL}_2(\mathbb C)$ and $\operatorname{PGL}_2(\mathbb C)=\operatorname{GL}_2(\mathbb C)/(\mathbb C^{\times}I)$, and their Lie algebras.

[L1] The Möbius group is $\operatorname{GL}_2(\mathbb C)/(\mathbb C^{\times}I)=\operatorname{PGL}_2(\mathbb C)$, so $\operatorname{PGL}_2(\mathbb C)$ is a quotient of the connected group $\operatorname{GL}_2(\mathbb C)$ by the normal subgroup $\mathbb C^{\times}I$ ([[thm-mobius-group-and-projective-linear-identification]], [[def-invertible-matrix-and-general-linear-group]]).

[L2] $\operatorname{SL}_2(\mathbb C)$ is the group of invertible matrices of determinant one and its Lie algebra is $\mathfrak{sl}_2(\mathbb C)=\{X:\operatorname{tr}X=0\}$, so both groups have Lie algebra $\mathfrak{sl}_2(\mathbb C)$: the quotient $\operatorname{GL}_2(\mathbb C)/(\mathbb C^{\times}I)$ has Lie algebra $\mathfrak{gl}_2(\mathbb C)/\mathbb CI\cong\mathfrak{sl}_2(\mathbb C)$. ([[def-special-linear-lie-algebra-sl-two]], [[thm-mobius-group-and-projective-linear-identification]])

## Proof

**Proof technique:** explicit witness.

1.1 $Z(\operatorname{SL}_2(\mathbb C))=\{\pm I\}$: a matrix commuting with all of $\mathfrak{sl}_2(\mathbb C)$ commutes in particular with $E_{12}$ and $E_{21}$, hence is diagonal, and a diagonal matrix $\operatorname{diag}(a,d)$ of determinant $1$ commuting with $E_{12}$ satisfies $\operatorname{diag}(a,d)E_{12}=E_{12}\operatorname{diag}(a,d)$, that is $a=d$; then $a^{2}=1$ and the matrix is $\pm I$. [L2, algebra]

1.2 $Z(\operatorname{PGL}_2(\mathbb C))$ is trivial: a coset $g\mathbb C^{\times}I$ is central if and only if $g$ commutes with $\operatorname{GL}_2(\mathbb C)$ up to scalars, which forces $g$ to be scalar, so the coset is the identity. [L1, algebra]

2.1 An isomorphism of groups carries the center onto the center, so $\operatorname{SL}_2(\mathbb C)$ and $\operatorname{PGL}_2(\mathbb C)$ are not isomorphic, although by [L2] both are connected complex Lie groups with Lie algebra $\mathfrak{sl}_2(\mathbb C)$ and hence with the same Dynkin diagram $A_1$. This witnesses the failure of the claim: the two groups are distinct global forms of the same Lie algebra, with central kernels $\{\pm I\}$ and $\mathbb C^{\times}I$ respectively. [L1, L2, step 1.1, step 1.2] ∎
