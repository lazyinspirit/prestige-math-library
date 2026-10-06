---
id: cor-projective-plane-curves-meet
kind: corollary
title: Two plane projective curves meet
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, cor-no-common-component-projective-plane-intersection-is-zero-dimensional, def-plane-projective-curve, lem-bezout-no-common-component-finite-intersection, lem-zero-dimensional-projective-scheme-has-finite-local-charts, thm-bezout-plane-curves, thm-intersection-multiplicity-basic-properties]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

Let $C,D$ be plane projective curves of positive degrees over the algebraically closed field $k$. If $C$ and $D$ have no common component they meet, and their local intersection multiplicities sum to $de\ge1$; if they share a component they meet along that component. In all cases $C\cap D\neq\varnothing$.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], plane projective curves $C=V(F)$ of degree $d\ge1$ and $D=V(G)$ of degree $e\ge1$ over the algebraically closed field $k$.

[F1] If $C,D$ have no common component, then $C\cap D$ is nonempty and finite [[lem-bezout-no-common-component-finite-intersection]], and $\sum_{p\in C\cap D}I_p(C,D)=de$ [[thm-bezout-plane-curves]]. Each summand $I_p$ is positive exactly at the points of $C\cap D$ and nonnegative everywhere [[thm-intersection-multiplicity-basic-properties]].

[F2] Every plane projective curve is nonempty, and if $C,D$ share an irreducible component $E$, then $E\subseteq C\cap D$ [[def-plane-projective-curve]]. In the no-common-component case, the intersection scheme is nonempty and zero-dimensional [[cor-no-common-component-projective-plane-intersection-is-zero-dimensional]], [[lem-zero-dimensional-projective-scheme-has-finite-local-charts]].

## Proof

1.1 If $C$ and $D$ have no common component: by [F1] the multiplicities form a finite sum of nonnegative integers equal to $de\ge1$, so at least one point $p$ has $I_p(C,D)\ge1$, which by [F1] happens exactly when $p\in C\cap D$. Hence $C\cap D\ne\varnothing$ and the multiplicities sum to $de$. [F1, algebra]

1.2 If $C$ and $D$ share a component $E$: by [F2] the component is nonempty and contained in $C\cap D$, so $C\cap D\ne\varnothing$; in this case the intersection is infinite along $E$ and the Bezout sum is not finite. [F2, given]

2.1 The two cases exhaust the possibilities for two plane curves, so in all cases $C\cap D\neq\varnothing$, and in the no-common-component case the sum of the local multiplicities is $de\ge1$. [step 1.1, step 1.2] ∎ 