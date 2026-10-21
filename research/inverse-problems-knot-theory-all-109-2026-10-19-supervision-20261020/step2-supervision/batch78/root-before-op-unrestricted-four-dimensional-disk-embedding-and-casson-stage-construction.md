---
id: op-unrestricted-four-dimensional-disk-embedding-and-casson-stage-construction
kind: open-problem
title: "Unrestricted four-dimensional disk embedding and Casson-stage construction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-freedman-good-group-and-disk-embedding-data
  - def-countable-choice
dependency_level: 2
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    - date: "2026-10-20"
      scope: "FQ full printed pp.232–233; PRT2025 full25-page text and Figure1; Freedman1982 full printed pp.357–361; Freedman–Krushkal2016 full introductory pp.1–5. No claim of reading the full1982 or2016 papers."
      by: "owner-freedman-alexander-one"
sources:
  references:
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf"
      locator: "§12.1, printed pp.232–233: unrestricted embedding problem and capped-grope formulation"
    - title: "Mark Powell, Arunima Ray and Peter Teichner, The4-dimensional disc embedding theorem and dual spheres"
      url: "https://www.maths.gla.ac.uk/~mpowell/s00029-025-01069-y.pdf"
      locator: "Selecta Mathematica31:80(2025), PDFpp.3–7,13–20: good-group scope, Definition3.2, correction and proof; PDFp.4 explicitly retains the free-group goodness problem"
    - title: "Michael H. Freedman, The topology of four-dimensional manifolds"
      url: "https://www.maths.gla.ac.uk/~mpowell/1982_The%20topology%20of%20four-dimensional%20manifolds.pdf"
      locator: "JDG17(1982), printed pp.357–361, especially Theorem1.1: Casson-handle standardness"
    - title: "Michael Freedman and Vyacheslav Krushkal, Engel relations in4-manifold topology"
      url: "https://www.maths.gla.ac.uk/~mpowell/engel_relations_in_4manifold_topology.pdf"
      locator: "Forum of Mathematics,Sigma4,e22(2016), full introductory pp.1–5: unrestricted surgery and free-group problems"
---

## Open problem

Assume Countable Choice. Let $X$ be a compact connected oriented topological $4$-manifold with nonempty boundary, with no restriction on $\pi_1(X)$. Let a finite framed generic disk datum $f_i:(D^2,S^1)\looparrowright(X,\partial X)$ be supplied in the stated plumbing and equivariant intersection conventions. Its boundary circles are embedded and pairwise disjoint. Suppose there are framed immersed spheres $g_i$ satisfying

$$\lambda(f_i,g_j)=\delta_{ij},\qquad \lambda(g_i,g_j)=0,\qquad \mu(g_i)=0,$$

and suppose $\lambda(f_i,f_j)=0$ for $i\ne j$ and $\mu(f_i)=0$ for every $i$.

Does every such datum admit pairwise disjoint proper locally flat embedded disks with exactly the same framed boundary circles? This asks for boundary-framed replacement, and does not add a requirement that the replacements be homotopic to the specified $f_i$ or that their dual spheres remain geometrically dual.

The unrestricted Casson-stage construction sought by the original module is a stronger concrete construction problem: can one always place countable compatible framed kinky-handle stages in $X$, with their original attaching solid tori preserved, whose finite prefixes are embedded plumbing models, whose branches have no unintended intersections, and whose embedded union is a genuine Casson handle for each attaching circle? Here a kinky handle is a framed disk-handle model with finitely many self-plumbings, and each next-stage handle attaches to the prescribed double-point loop with the extending framing. Abstract rooted trees or stages mapped with uncontrolled intersections are not this assertion.

## Status

Unresolved in the checked generality, as reviewed on2026-10-20. This classification concerns the unrestricted assertion, not the established good-group disk-embedding theorem whose local proof is an independent construction obligation.

Freedman–Quinn §12.1 defines the unrestricted boundary-framed replacement problem and identifies it with embedded disks in orientable neighborhoods of proper two-stage capped gropes. The extra vanishing conditions on the input $f_i$ above do not remove that problem: the finite preprocessing in Powell–Ray–Teichner's proof, PDFp.19, tubes intersections into the algebraic duals to achieve those vanishings while preserving the framed boundaries. It need not preserve the original disk homotopy classes, which are deliberately not required by the replacement question.

A positive answer to the genuine embedded Casson-stage construction would imply a positive answer to the disk-replacement question: Freedman's Theorem1.1 makes each such Casson handle a relative standard open two-handle, whose core supplies a disk. This implication needs neither homotopy control of the input disks nor retained output duals. Merely building immersed stages with uncontrolled intersections has no such implication.

The capped-grope formulation also explains the unresolved group issue. Finite height raising puts a height-$1.5$ grope into the two-stage formulation in its own supplied neighborhood. An embedded disk there would have no double-point loops and hence satisfy the null-disk requirement for every homomorphism of that neighborhood group. Thus unrestricted disk replacement would settle goodness for all such group targets. Powell–Ray–Teichner2025, PDFp.4, explicitly states that goodness of nonabelian free groups is not known. The2016 Freedman–Krushkal introduction identifies unrestricted surgery and its free-group reductions as central open problems. These are actual source-status statements, not an inference from an unfinished local proof. The latest checked general-status source here is2025; this item does not claim a blanket review of every2026 publication.

The known good-group theorem remains separate. Its corrected proof constructs geometric output duals by an additional Clifford-torus argument; those duals do not follow from arbitrary embedded replacement disks. The present problem is never a logical supplier for that theorem or for Alexander-one topological sliceness.

## Definition references

[[def-freedman-good-group-and-disk-embedding-data|Framed relative disk data and Wall intersection conventions]]

[[def-countable-choice|Countable Choice]]
