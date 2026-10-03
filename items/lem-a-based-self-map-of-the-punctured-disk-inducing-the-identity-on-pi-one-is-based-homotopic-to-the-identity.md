---
id: lem-a-based-self-map-of-the-punctured-disk-inducing-the-identity-on-pi-one-is-based-homotopic-to-the-identity
kind: lemma
title: "A based self-map of the punctured disk inducing the identity on the fundamental group is based-homotopic to the identity"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
deps: [lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis, def-homotopy-relative-and-path-homotopy, thm-induced-fundamental-group-map-functoriality, def-wedge-of-pointed-spaces, def-based-loops-and-fundamental-group, def-free-group, prop-retracts-inject-fundamental-groups, lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1B.9 and section 1.A (maps from wedges of spheres, aspherical graphs)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

Let $f:D^2\setminus Q_n\to D^2\setminus Q_n$ be continuous with $f(d)=d$
and $f_*=\operatorname{id}$ on $\pi_1(D^2\setminus Q_n,d)$. Then $f$ is
homotopic to the identity relative to $d$. No choice principle is used.

## Facts & Assumptions

**Given:** the based map $f$ and $X=D^2\setminus Q_n$.

[F1] The truncated flower $W$ is a based deformation retract of $X$; collapsing
its tether tree to $d$ is a based homotopy equivalence $c:W\to R$, where $R$
is a wedge of $n$ circles
([[lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis]],
[[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]],
[[def-wedge-of-pointed-spaces]]).

[F2] Based maps induce homomorphisms, composition is functorial, and a based
homotopy induces equal maps of fundamental groups
([[thm-induced-fundamental-group-map-functoriality]],
[[prop-retracts-inject-fundamental-groups]]).

[F3] Equal based-loop classes admit homotopies fixing the basepoint
([[def-based-loops-and-fundamental-group]],
[[def-homotopy-relative-and-path-homotopy]]).

## Proof

1.1 *Passing to an actual wedge.* Combine the deformation retraction with the collapse equivalence of [F1]. They give based maps $a:X\to R$, $b:R\to X$ with $ba\simeq\operatorname{id}_X$ and $ab\simeq\operatorname{id}_R$ relative to their basepoints. For $g=afb:R\to R$, [F2] and $f_*=\operatorname{id}$ imply $g_*=a_*f_*b_*=a_*b_*=\operatorname{id}$. [F1, F2, given]

2.1 *Homotoping the wedge map.* Restrict $g$ to each actual circle summand of $R$. Its based-loop class equals that summand's standard generator because $g_*=\operatorname{id}$. By [F3], it has a based homotopy to that summand's inclusion. The finitely many homotopies agree at the wedge vertex at every time and hence glue continuously on the finite quotient $R\times I$. They give $g\simeq\operatorname{id}_R$ relative to the vertex. [F3, step 1.1, construct]

3.1 *Returning to the punctured disk.* Compose the based homotopies to obtain $f\simeq bafba=bg a\simeq ba\simeq\operatorname{id}_X$, all relative to $d$. For $n=0$ the wedge is a point and the same argument is the based contraction of the disk. This is a homotopy of maps on $X$; it claims no extension to any puncture. Only finitely many based-loop homotopies and the specified finite graph equivalences occur, so no choice principle is used. [F1, F2, F3, step 2.1] ∎
