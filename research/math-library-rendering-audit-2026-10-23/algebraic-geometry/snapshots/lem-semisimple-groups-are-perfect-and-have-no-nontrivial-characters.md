---
id: lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters
kind: lemma
title: "Semisimple groups are perfect and have no nontrivial characters"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 21
deps: [def-axiom-of-choice, def-derived-subgroup-and-solvable-algebraic-group, def-radical-and-unipotent-radical-of-an-algebraic-group, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-split-reductive-algebraic-group, lem-derived-subgroup-properties, lem-reductive-center-radical-and-semisimple-quotient]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 21 (21.50)-(21.51), printed pp. 439 and 461; Ch. 19 (19.10)-(19.12)"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, the paragraph on complete reducibility over compact forms (perfectness of the semisimple group)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
semisimple algebraic group over a field $k$
([[def-split-reductive-algebraic-group]],
[[def-radical-and-unipotent-radical-of-an-algebraic-group]]). Then
$G=[G,G]$ ([[def-derived-subgroup-and-solvable-algebraic-group]]) and
$X(G)=\operatorname{Hom}_k(G,\mathbf G_m)=0$; equivalently, every
one-dimensional rational representation of $G$ is trivial.

## Facts & Assumptions

**Given:** A semisimple algebraic group $G$ over $k$, its derived subgroup
$[G,G]=G'$ and its character group
$X(G)=\operatorname{Hom}_k(G,\mathbf G_m)$.

[F1] *Semisimple groups are reductive.* $R_u(G)$ is contained in the radical
$R(G)$ and $G$ is semisimple exactly when $R(G_{k^{\mathrm a}})=1$, so
$R_u(G_{k^{\mathrm a}})=1$ and $G$ is reductive
([[def-radical-and-unipotent-radical-of-an-algebraic-group]]).

[F2] *Centre, radical and derived subgroup.* For a reductive $G$ one has
$G=Z(G)_t\cdot G'$ with finite intersection, and $G'$ is semisimple; moreover
$G$ is semisimple if and only if $Z(G)$ is finite
([[lem-reductive-center-radical-and-semisimple-quotient]],
[[def-derived-subgroup-and-solvable-algebraic-group]]).

[F3] *Characters kill commutators.* A morphism of algebraic groups
$\chi:G\to\mathbf G_m$ satisfies $\chi(ghg^{-1}h^{-1})=1$ for all $R$-points
$g,h$, since $\mathbf G_m$ is commutative; hence $\chi$ is trivial on the
derived subgroup $[G,G]$
([[lem-derived-subgroup-properties]]).

[F4] *One-dimensional representations are characters.* A rational
representation of $G$ on a one-dimensional $k$-space is given by a morphism
$G\to\operatorname{GL}_1\cong\mathbf G_m$, that is, by an element of $X(G)$
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the group $G$ is reductive. Since $G$ is semisimple, [F2] shows that $Z(G)$ is finite, so its largest central torus $Z(G)_t$ is trivial, and the decomposition $G=Z(G)_t\cdot G'$ of [F2] gives $G=G'=[G,G]$. [F1, F2, given]

2.1 Let $\chi\in X(G)$. By [F3] the character $\chi$ is trivial on every commutator, hence on $[G,G]$, which is all of $G$ by step 1.1; therefore $\chi$ is the trivial character. [F3, step 1.1]

3.1 By [F4] a one-dimensional rational representation of $G$ is given by a character on $G$; by step 2.1 every such representation is trivial. [F4, step 2.1]

4.1 Steps 1.1 and 3.1 give both $G=[G,G]$ and $X(G)=0$, and the displayed equivalence with triviality of all one-dimensional rational representations. [step 1.1, step 3.1] ∎

## Remarks

- No splitness is used; the argument applies to every semisimple algebraic
  group over $k$.
- The commutator identity used for characters is the only place where the
  commutativity of $\mathbf G_m$ enters; it makes every character factor through
  the abelianization $G/[G,G]$.
