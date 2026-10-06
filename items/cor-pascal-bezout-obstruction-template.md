---
id: cor-pascal-bezout-obstruction-template
kind: corollary
title: The component-counting obstruction template for incidence arguments
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, cor-projective-plane-curves-meet, def-plane-projective-curve, thm-bezout-plane-curves, thm-intersection-multiplicity-basic-properties]
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

Let $C$ be a plane projective curve of degree $d$ and $E$ a plane projective curve of degree $f$ over the algebraically closed field $k$. If $C$ and $E$ have no common component then $E$ contains at most $df$ points of $C$, and any set of pairwise distinct points of $C$ on which $E$ is required to vanish must have at most $df$ elements. Consequently, in any incidence configuration in which curves of degrees $d$ and $f$ are forced to share more than $df$ distinct points, the two curves must share a component. This is the standard component-counting step behind Pascal- and Pappus-type applications, isolated here without minting a separate named incidence theorem.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], plane projective curves $C$ of degree $d\ge1$ and $E$ of degree $f\ge1$ over the algebraically closed field $k$.

[F1] If $C,E$ have no common component, then $\sum_{p\in C\cap E}I_p(C,E)=df$ over the finitely many intersection points [[thm-bezout-plane-curves]].

[F2] Whenever $I_p(C,E)$ is finite, it is a positive integer at points of $C\cap E$ and zero at points outside the intersection [[thm-intersection-multiplicity-basic-properties]]. Under the no-common-component hypothesis, [F1] ensures this finiteness at every intersection point.

## Proof

1.1 Assume $C$ and $E$ have no common component. By [F2] every point of $C\cap E$ contributes at least one to the Bezout sum, so $\#(C\cap E)\le\sum_{p\in C\cap E}I_p(C,E)=df$; in particular $E$ contains at most $df$ points of $C$. [F1, F2, algebra]

2.1 If $S$ is a set of pairwise distinct points of $C$ at which $E$ is required to vanish, then $S\subseteq C\cap E$, so by step 1.1 $|S|\le df$. [step 1.1, given]

3.1 Consequently, if an incidence configuration forces more than $df$ distinct common points, the assumption of no common component is impossible, so $C$ and $E$ share a component; this is the reusable obstruction template, and the finiteness and nonemptiness statements accompanying it are [F1] and [[cor-projective-plane-curves-meet]]. [step 1.1, step 2.1, F1] ∎ 
