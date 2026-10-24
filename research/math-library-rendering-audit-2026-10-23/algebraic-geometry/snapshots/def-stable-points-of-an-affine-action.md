---
id: def-stable-points-of-an-affine-action
kind: definition
title: Stable points of an affine action
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rational-action-on-affine-variety, lem-orbit-dimension-and-closed-orbits-for-complex-group-actions, def-dimension-classical-variety, def-axiom-of-choice, lem-classical-variety-noetherian-components]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
---

## Definition

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
complex affine algebraic group acting algebraically on an affine algebraic set
$X$ ([[def-rational-action-on-affine-variety]]). A point $x\in X$ is **stable**
if

(i) its orbit $Gx$ is closed in $X$, and

(ii) its stabilizer $G_x$ is finite, equivalently $\dim G_x=0$
([[lem-orbit-dimension-and-closed-orbits-for-complex-group-actions]],
[[def-dimension-classical-variety]]);

Here $G_x$ is a closed subgroup of the finite-type group $G$ and has finitely
many irreducible components ([[lem-classical-variety-noetherian-components]]).
If its dimension is zero, each component is a single point: otherwise a
closed point strictly contained in that component would give a chain of length
one. Conversely a finite set of closed points has dimension zero. Thus $G_x$
is finite exactly when its dimension is zero. The **stable locus** $X^s\subseteq X$ is
the set of stable points, and the **unstable locus** is its complement.

Stability implies that the orbit is closed; the converse fails: the trivial
action of $\mathbf G_m$ on a point has closed orbit but positive-dimensional
stabilizer. Stability is preserved by replacing $G$ with $G^\circ$, because
$G_x$ and $(G^\circ)_x$ have the same dimension by
[[lem-orbit-dimension-and-closed-orbits-for-complex-group-actions]], while the
$G$-orbit of a point is a finite union of $G^\circ$-orbits permuted by $G$.
Those $G^\circ$-orbits are closed in $Gx$ by Proof 3.1 of the orbit lemma,
so a closed $G$-orbit makes each of them closed in $X$. Conversely, if
$G^\circ x$ is closed in $X$, its finitely many translates have closed union
$Gx$.

## Remarks

- This is Brion's Definition 1.25 (printed p. 9) with the finite-stabilizer
  condition expressed by dimension, using that a closed subgroup of a
  finite-type complex algebraic group is finite if and only if it is
  zero-dimensional. The final strictness remark is Brion Example 1.27(1) and is
  made explicit as a counterexample on the companion page.
- The definition is choice-free; the dimensional restatement and the
  $G^\circ$-reduction inherit AC from the orbit lemma above. No closedness of
  $X$ or of the stabilizer is assumed beyond what the named suppliers give.
