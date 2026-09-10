---
id: prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant
kind: proposition
title: Higher homotopy groups are functorial and based homotopy invariant
deps: ["thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one", "thm-composition-respects-homotopy"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

A based map $f:(X,x_0)\to(Y,y_0)$ induces $f_*[a]=[f\circ a]$ on all pointed component and cubical homotopy sets. For $n\ge1$ this is a homomorphism, identities and composition are preserved, and based homotopic maps induce equal maps. Based homotopy equivalences induce isomorphisms.

## Facts & Assumptions

[F1] Cubical concatenation gives the group law. [[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]

[F2] Continuous precomposition and postcomposition preserve relative homotopies. [[thm-composition-respects-homotopy]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Postcomposition with f sends boundary-fixed homotopies to boundary-fixed homotopies, now with value $y_0$, by F2. Hence $f_*[a]$ is well-defined. Pointwise on both half-cubes, $f\circ(a*b)=(f\circ a)*(f\circ b)$, so F1 makes it a homomorphism. A path is similarly sent to a path, giving a well-defined map on components. [F1, F2]

2.1 For based maps f,g one has $g\circ(f\circ a)=(g\circ f)\circ a$ and $\mathrm{id}\circ a=a$, proving functoriality. If $H:X\times I\to Y$ is a based homotopy, $H(a(u),t)$ is continuous by F2 and equals $y_0$ on the cube boundary for every t. Thus its two endpoints define the same class, giving $f_*=g_*$. The same formula on points gives equality on components. [F2, step 1.1]

3.1 If based maps f and h are inverse up to based homotopy, step 2.1 gives $h_*f_*=(hf)_*=\mathrm{id}$ and $f_*h_*=(fh)_*=\mathrm{id}$. Thus these are inverse homomorphisms for positive degrees and inverse pointed bijections in degree zero. [F1, step 1.1, step 2.1] ∎
