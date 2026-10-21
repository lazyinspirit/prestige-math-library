---
id: cor-satellite-companion-is-detected-by-jsj
kind: corollary
title: "The JSJ system detects a companion torus when it is not amalgamated"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-axiom-of-choice
  - lem-satellite-torus-is-essential
  - thm-jsj-decomposition-of-knot-exteriors
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§4, Definitions 4.1 and 4.3, Propositions 4.6 and 4.14, Theorem 4.18, PDF pp.14–21"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Theorem 1.9 and its uniqueness proof, printed pp.14, 21–23"
---

## Statement

Assume full AC. Let $K\subset S^3$ be a nontrivial smooth oriented knot with a specified orientation-preserving companion embedding $e:V=S^1\times D^2\to S^3$ that sends the oriented core to $K$ and identifies the product meridian and longitude with the positive meridian and preferred longitude of $K$. Let $P\subset\operatorname{int}V$ be a smooth oriented pattern with a chosen closed tubular neighbourhood $N(P)\subset\operatorname{int}V$. Put $X_P=V\setminus\operatorname{int}N(P)$ and assume that no properly embedded disk in $X_P$ has essential boundary on $\partial V$, and that $X_P$ is not a product $T^2\times[0,1]$ with ends $\partial V$ and $\partial N(P)$. Put $P(K)=e(P)$, $M=E_{P(K)}=S^3\setminus\operatorname{int}e(N(P))$, and $T_c=e(\partial V)$. Suppose both components of $M$ cut along $T_c$ are atoroidal or Seifert-fibered, and $M$ itself is neither atoroidal nor Seifert-fibered. Then every inclusion-minimal JSJ system of $M$ consists of one torus ambient isotopic to $T_c$. Cutting along $T_c$ has the companion exterior $E_K$ as its outside component. No conclusion is made for an essential companion torus that is absorbed into a Seifert-fibered union.

## Statement references

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Theorem 1.9](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

## Facts & Assumptions

**Given:** Full AC, a satellite knot exterior $M$, its companion torus $T_c$, the stated pattern hypotheses, and the two pieces obtained by cutting along $T_c$.

[A1] Full AC is the assertion that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] The pattern and companion torus are defined in [[def-satellite-pattern-companion-and-winding-number]].

[F2] Under the nontrivial companion and nonproduct pattern hypotheses, $T_c$ is essential ([[lem-satellite-torus-is-essential]], Statement).

[F3] A finite family of incompressible tori is a JSJ system when cutting along it gives only atoroidal or Seifert-fibered pieces; inclusion-minimality excludes every proper subfamily ([[def-incompressibility-seifert-fibration-and-jsj-system]], Definition).

[F4] For a compact knot exterior, an inclusion-minimal JSJ system is unique up to ambient isotopy ([[thm-jsj-decomposition-of-knot-exteriors]], Statement).

## Proof

1.1 By [F2], $T_c$ is incompressible. The hypothesis on the two cut components and [F3] show that the singleton family $\{T_c\}$ is a JSJ system. The empty family is not a JSJ system because its sole cut component is $M$, which by hypothesis is neither atoroidal nor Seifert-fibered. Thus $\{T_c\}$ is inclusion-minimal. [A1, F1, F2, F3, given, construct]

2.1 Apply [F4] to the minimal system $\{T_c\}$. It follows that the unique minimal system consists of one torus ambient isotopic to $T_c$. The decomposition of the satellite exterior in [F1] shows that the side inside the companion solid torus is the pattern exterior and the outside side is exactly $E_K$. The ambient isotopy supplied by [F4] is jointly smooth and starts at the identity. Apply its final diffeomorphism to the cut decomposition: it carries the original outside component $E_K$ to the corresponding outside component for the isotopic torus. The boundary of $M$ remains on the pattern side, so the component labels are unambiguous. [F1, F4, step 1.1, construct] ∎
