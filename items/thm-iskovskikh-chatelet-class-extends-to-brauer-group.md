---
id: thm-iskovskikh-chatelet-class-extends-to-brauer-group
kind: theorem
title: "The quaternion class on Iskovskikh’s Châtelet surface extends to its Brauer group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-iskovskikh-chatelet-surface
  - def-cohomological-brauer-group-of-a-variety
  - def-azumaya-algebra-on-a-variety
  - def-brauer-group-as-galois-cohomology
  - thm-classic-brauer-group-is-h2-galois-cohomology
  - def-quaternion-symbol-over-a-field
  - lem-quaternion-symbol-units-define-azumaya-algebra
  - thm-azumaya-unramified-residue-purity-for-regular-schemes
  - thm-pgl-torsors-classify-azumaya-algebras
  - lem-quaternion-algebra-splits-iff-quadratic-norm
  - lem-quaternion-symbol-bilinearity-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §8.2.5.3, Proposition 8.2.14"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Alternative quaternion representatives on a Zariski-open cover and the residue-purity step."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §3.2"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Châtelet surface Brauer class and its local evaluation."
verification: {}
---

## Statement

Assume the Axiom of Choice (AC) and Dependent Choice (DC), as in the field
cohomology conventions. Let $X$ be the Iskovskikh Châtelet surface
$$y^2+z^2=(3-x^2)(x^2-2)$$
over $\mathbb Q$, and let $\mathbb Q(X)$ be its function field. The generic
quaternion Brauer class
$$\alpha=(3-x^2,-1)\in\operatorname{Br}(\mathbb Q(X))[2]$$
is the restriction of a class in the cohomological Brauer group
$\operatorname{Br}(X)$. On suitable open subsets it has the equal representatives
$$\alpha=(x^2-2,-1)=(3/x^2-1,-1).$$

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-iskovskikh-chatelet-surface|The surface and its compactification]]

[[def-cohomological-brauer-group-of-a-variety|Cohomological Brauer group]]

[[def-azumaya-algebra-on-a-variety|Azumaya algebras]]

[[def-brauer-group-as-galois-cohomology|Classical field Brauer group]]

[[thm-classic-brauer-group-is-h2-galois-cohomology|Field comparison; AC/DC proof branch complete, broader claim held]]

[[def-quaternion-symbol-over-a-field|Quaternion algebra symbol over a field]]

[[lem-quaternion-symbol-units-define-azumaya-algebra|Unit symbols extend locally as Azumaya algebras]]

[[lem-quaternion-algebra-splits-iff-quadratic-norm|Quaternion splitting and quadratic norms]]

[[thm-azumaya-unramified-residue-purity-for-regular-schemes|Required residue-purity supplier; not currently authored]]

[[thm-pgl-torsors-classify-azumaya-algebras|Natural torsion cohomology class of an Azumaya algebra]]

[[lem-quaternion-symbol-bilinearity-over-a-field|Quaternion-symbol bilinearity]]

[Poonen, §8.2.5.3, Proposition 8.2.14](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §3.2](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** AC, DC, the surface $X$, its function field $F=\mathbb Q(X)$, and
its generic coordinates $x,y,z$.

[A1] AC and DC are required by the current field cohomology conventions.
[[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] In $F$, the defining equation gives
$y^2+z^2=(3-x^2)(x^2-2)$. [[def-iskovskikh-chatelet-surface]]

[F2] A quaternion symbol is a central-simple similarity class, and the
classical field Brauer group is the group of such similarity classes.
[[def-quaternion-symbol-over-a-field]]
[[def-brauer-group-as-galois-cohomology]]

[F3] A quaternion symbol is killed by $2$.
[[def-quaternion-symbol-over-a-field]]

[F4] If $a$ and $-1$ are units on an open subset in characteristic zero,
the symbol algebra $(a,-1)$ is Azumaya there. The current local proof uses
the explicit finite étale splitting in the cited lemma.
[[lem-quaternion-symbol-units-define-azumaya-algebra]]

[F5] The quaternion algebra $Q_F(a,b)$ splits exactly when $b$ is a norm
from $F(\sqrt a)$; exchanging the generators gives the symmetric criterion.
[[lem-quaternion-algebra-splits-iff-quadratic-norm]]

[F6] In the classical field Brauer group,
$(a,b)+(a,c)=(a,bc)$ and $(a,b)+(c,b)=(ac,b)$.
[[lem-quaternion-symbol-bilinearity-over-a-field]]

[L1] For a regular integral scheme, identifying the image of
$\operatorname{Br}(X)\to\operatorname{Br}(F)$ with classes unramified at
all codimension-one points requires Azumaya residue purity. The proposed
supplier [[thm-azumaya-unramified-residue-purity-for-regular-schemes]] is not
present in the current library.

[F8] An Azumaya algebra of degree $n$ on a Noetherian scheme has a natural
étale cohomological class killed by $n$, functorial under restriction. This is
the scalar connecting class of its $\operatorname{PGL}_n$ splitting torsor.
Only this forward map is needed here, not surjectivity from Azumaya classes
onto all torsion cohomology classes.
[[thm-pgl-torsors-classify-azumaya-algebras]]

[F7] Under the AC/DC branch [A1], the current proof identifies the classical
field Brauer group with continuous Galois cohomology; the supplier's broader
unqualified Statement remains held. [[thm-classic-brauer-group-is-h2-galois-cohomology]]

## Proof

**Proof technique:** identify equal generic quaternion classes, extend them
as Azumaya algebras on a cover, and apply the codimension-one purity
interface.

**Given:** The data above.

1.1 Put $\beta=(x^2-2,-1)$ and $\gamma=(3/x^2-1,-1)$ in $\operatorname{Br}(F)$. By [F6], bilinearity in the first square class, $$\alpha+\beta=((3-x^2)(x^2-2),-1)=(y^2+z^2,-1).$$ The element $y+zi$ has norm $y^2+z^2$ from $F(i)/F$, so [F5] splits this quaternion algebra and $\alpha+\beta=0$. Also $$\alpha-\gamma=(x^2,-1)=0,$$ because $x^2$ is a square. Since all three classes are killed by $2$, $\alpha=\beta=\gamma$. [F1, F2, F3, F5, F6, given]

2.1 On $U_\alpha$, remove the fibers above $\infty$ and the roots of $3-x^2$; then $3-x^2$ and $-1$ are units, so [F4] extends $\alpha$ to an Azumaya algebra. On $U_\beta$, remove the fibers above $\infty$ and the roots of $x^2-2$; [F4] extends $\beta$. On $U_\gamma$, remove the fibers above $0$ and the roots of $3-x^2$; [F4] extends $\gamma$. The complements of $U_\beta$ and $U_\gamma$ in the base $\mathbb P^1$ are disjoint, so $U_\beta\cup U_\gamma=X$. [F2, F3, F4, step 1.1, given]

3.1 The source passes from these open-cover Azumaya extensions to a global class in the Azumaya Brauer group of $X$ by the purity assertion [L1]. Its image under [F8] lies in the cohomological torsion Brauer group in the Statement and restricts to $\alpha$; the field-level comparison is covered by [F7]. The purity supplier is not authored in the current library, so the claimed extension remains escalated pending [L1]. [A1, F6, F7, F8, L1, step 2.1] ∎