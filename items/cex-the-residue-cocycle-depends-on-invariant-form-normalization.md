---
id: cex-the-residue-cocycle-depends-on-invariant-form-normalization
kind: counterexample
title: The residue cocycle depends on invariant form normalization
deps: ["def-residue-two-cocycle-on-a-loop-algebra", "def-untwisted-affine-central-extension", "def-null-root-central-coroot-and-affine-level"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Sections 7.1-7.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Sections 12.1-12.2
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement refuted

The numerical residue cocycle and level are unchanged when the invariant form is rescaled, with no accompanying adjustment of the central generator.

## Facts & Assumptions

**Given:** A nondegenerate invariant form $B$, a nonzero scalar $a$, and the rescaled form $B_a=aB$.

[F1] The residue formula is [[def-residue-two-cocycle-on-a-loop-algebra]].

[F2] A chosen form defines the central-extension bracket in [[def-untwisted-affine-central-extension]].

[F3] Level is evaluation on the chosen central generator by [[def-null-root-central-coroot-and-affine-level]].

## Counterexample

1.1 F1 gives $\omega_a=a\omega$. Choose $x,y$ with $B(x,y)=1$. For modes $x_1,y_{-1}$ the old scalar cocycle is $1$, while the new one is $a$. In particular $a=2$ is an explicit failure of invariance of the numerical cocycle. Nondegeneracy permits the finite pair choice and scalar normalization. [F1, given, algebra]

2.1 Let $c_a$ denote the central generator for $B_a$. A map fixing all loop modes and sending $c_a$ to $a^{-1}c$ preserves brackets, since the image of $[x_m,y_n]_{a}=[x,y]_{m+n}+am\delta_{m,-n}B(x,y)c_a$ is $[x,y]_{m+n}+m\delta_{m,-n}B(x,y)c$. It is invertible, with inverse $c\mapsto ac_a$, so is a Lie isomorphism. This central image is forced: apply any such map to the bracket in step 1.1 and subtract its fixed loop component to get $a\varphi(c_a)=c$. [F2, step 1.1, algebra]

3.1 Pulling a level-$k$ module for the old extension back through this isomorphism makes $c_a$ act as $a^{-1}k$. Equivalently the transported weight has $\Lambda_a(c_a)=a^{-1}\Lambda(c)$ by F3. At $a=2$ this is $k/2$, differing from $k$ whenever $k\ne0$. The case $k=0$ stays zero and $a=1$ gives the identity normalization; $a=0$ is excluded because both nondegeneracy and the inverse would fail. Thus rescaling requires exactly the stated adjustment of the central generator and numerical levels. No AC is used. [F3, step 2.1, algebra] ∎
