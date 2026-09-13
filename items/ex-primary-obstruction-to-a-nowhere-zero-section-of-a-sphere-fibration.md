---
id: ex-primary-obstruction-to-a-nowhere-zero-section-of-a-sphere-fibration
kind: example
title: Primary obstruction to a nowhere-zero section of a sphere fibration
status: published
origin: pipeline
deps: ["thm-obstruction-theory-for-lifting-through-a-fibration", "thm-lower-dimensional-sphere-maps-are-based-nullhomotopic", "thm-based-sphere-maps-are-classified-by-geometric-degree", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Sections 7.2--7.4 and 7.10, obstruction cocycles and obstruction theory for fibrations, printed pages 168--174 and 189--191
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 15, Proposition 15.2 and Theorem 15.3, printed pages 48--50
---

## Claim

Assume AC. Let $(X,A)$ be a CW pair and let $p:E\to X$ be a numerable fibration with fiber $S^r$, where $r\geq1$, together with a section over $A$. The first possible obstruction to extending that section over $X$ is

$$ o_{r+1}(p)\in H^{r+1}(X,A;\mathcal P), $$

where $\mathcal P$ has stalk $\pi_r(S^r)\cong\mathbb Z$ and fiber transport acts by its orientation sign. If $E$ is the unit-sphere bundle of a real vector bundle, a section of $E$ is equivalently a nowhere-zero vector-bundle section after radial normalization. No identification of $o_{r+1}$ with an Euler class is asserted here.

## Facts & Assumptions

[F1] $S^r$ is path connected and $\pi_q(S^r)=0$ for $0<q<r$ ([[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]).

[F2] Degree identifies $\pi_r(S^r)$ with $\mathbb Z$ and classifies based self-maps ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]); a self-homotopy equivalence therefore acts by multiplication by the unit $1$ or $-1$.

[F3] The lifting obstruction in dimension $q+1$ has coefficients in the local system of $\pi_q$ of the fiber ([[thm-obstruction-theory-for-lifting-through-a-fibration]]).

[A1] AC is used only to make simultaneous extension choices over arbitrary cell families ([[def-axiom-of-choice]]).

## Verification

**Given:** The fibration, relative section, and [A1] above.

1.1 A section is a lift of $\operatorname{id}_X$ through $p$. By [F1, F3], every positive-dimensional obstruction below degree $r+1$ has zero stalk. The lifting theorem therefore extends the given section over $X^r\cup A$; for an arbitrary family of cells, this invokes exactly [A1]. [F1, F3, A1]

2.1 The next obstruction has stalk $\pi_r(S^r)$, which [F2] identifies with $\mathbb Z$. Transport around a loop in $X$ is represented by a self-homotopy equivalence of the fiber. Its action on this integer stalk is multiplication by its degree, hence by its orientation sign. This is precisely the local system $\mathcal P$, so [F3] places the obstruction in the displayed group. [F2, F3, step 1.1]

3.1 Vanishing of this class is equivalent to extension through $X^{r+1}\cup A$ after the permitted change on $X^r\cup A$; higher-dimensional cells may have further obstructions. The restriction $r\geq1$ is essential: $\pi_0(S^0)$ is a pointed set, not the asserted integer coefficient system. For a finite CW pair only finite choices occur. $\square$ [F3, A1, step 2.1]
