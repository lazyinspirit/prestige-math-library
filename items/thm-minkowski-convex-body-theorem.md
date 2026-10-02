---
id: thm-minkowski-convex-body-theorem
kind: theorem
title: "Minkowski convex-body theorem, strict form"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-blichfeldt-lattice-point-principle
  - def-convex-subset-of-euclidean-space
  - thm-lebesgue-measure-under-dilations-and-reflections
  - def-full-euclidean-lattice-and-covolume
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Remark 4.18 and Theorem 4.19, p.76."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§28 pp.144-147."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$, let
$\Lambda\subseteq\mathbb R^n$ be a full lattice with
$\operatorname{covol}(\Lambda)>0$
([[def-full-euclidean-lattice-and-covolume]]), and let
$C\subseteq\mathbb R^n$ be Lebesgue measurable, convex and centrally symmetric
([[def-convex-subset-of-euclidean-space]]). If

$$\lambda_n(C)>2^n\operatorname{covol}(\Lambda),$$

then $C$ contains a nonzero point of $\Lambda$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a full lattice $\Lambda$ with
$\operatorname{covol}(\Lambda)>0$, and a Lebesgue measurable convex centrally
symmetric set $C$ with $\lambda_n(C)>2^n\operatorname{covol}(\Lambda)$.

[A1] The Axiom of Choice gives the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), the choice
hypothesis of the scaling fact [F2], invoked in step 1.1; Blichfeldt's
principle [F1] is applied under the Axiom of Choice assumed in the statement,
and no further choice is used.

[F1] Blichfeldt's principle: for a Lebesgue measurable
$S\subseteq\mathbb R^n$ with $\lambda_n(S)>\operatorname{covol}(\Lambda)$
there are distinct $x,y\in S$ with $x-y\in\Lambda$
([[lem-blichfeldt-lattice-point-principle]]).

[F2] For a nonzero real $c$, a set $E$ is Lebesgue measurable if and only if
$cE$ is, and then $\lambda_n(cE)=|c|^n\lambda_n(E)$
([[thm-lebesgue-measure-under-dilations-and-reflections]]).

[F3] $C$ convex means $(1-t)x+ty\in C$ for all $x,y\in C$ and
$t\in[0,1]$; central symmetry means $-C=C$, so $-y\in C$ whenever $y\in C$
([[def-convex-subset-of-euclidean-space]]).

## Proof

1.1 Put $C':=\tfrac12C=\{x/2:x\in C\}$. By [F2] with $c=1/2$, $C'$ is Lebesgue measurable with $\lambda_n(C')=2^{-n}\lambda_n(C)>\operatorname{covol}(\Lambda)$, the Countable Choice hypothesis of [F2] being supplied by [A1]. [F2, A1, given]
1.2 $C'$ is convex and centrally symmetric: for $u,v\in C'$ write $u=x/2$, $v=y/2$ with $x,y\in C$; then $(1-t)u+tv=((1-t)x+ty)/2\in C'$ by convexity of $C$, and $-u=(-x)/2\in C'$ by symmetry of $C$. [F3, algebra]
2.1 By [F1] applied to the measurable set $C'$ of step 1.1 there are distinct $u,v\in C'$ with $u-v\in\Lambda$. [F1, step 1.1]
3.1 The difference $u-v$ is nonzero because $u\ne v$, and it lies in $C$: $2u\in C$ and $2v\in C$ by definition of $C'$, so $-2v\in C$ by central symmetry, and convexity of $C$ gives $u-v=\tfrac12(2u)+\tfrac12(-2v)\in C$. [F3, step 2.1]
4.1 Thus $u-v$ is a nonzero point of $\Lambda$ lying in $C$, as required. [step 2.1, step 3.1] ∎

## Remarks

The factor $2^n$ is optimal for centrally symmetric convex bodies: for the
open cube $C=(-1,1)^n$ and $\Lambda=\mathbb Z^n$ one has
$\lambda_n(C)=2^n=2^n\operatorname{covol}(\Lambda)$ while
$C\cap\mathbb Z^n=\{0\}$, so the strict inequality cannot be weakened to
$\ge$. The equality case for compact bodies is treated in the next item, where
the strict form is applied to the dilates $(1+1/m)C$.
