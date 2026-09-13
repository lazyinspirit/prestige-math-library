---
id: ex-the-heisenberg-lie-group-and-algebra
kind: example
title: The Heisenberg Lie group and algebra
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-matrix-units, def-lie-bracket-on-the-tangent-space-of-a-lie-group, def-lie-bracket-of-smooth-vector-fields]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introductory examples
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Chapter 2 matrix-group examples
---

## Example

Assume $\mathrm{AC}_\omega$. The matrices

$$h(x,y,z)=\begin{pmatrix}1&x&z\\0&1&y\\0&0&1\end{pmatrix}$$

form the Heisenberg Lie group. Its Lie algebra has basis
$X=E_{01}$, $Y=E_{12}$, $Z=E_{02}$ with
$[X,Y]=Z$ and $Z$ central.

## Facts & Assumptions

**Given:** Real coordinates $x,y,z$.

[F1] The tangent bracket is computed from the commutator of left-invariant
vector fields. [[def-lie-bracket-on-the-tangent-space-of-a-lie-group]].
[[def-lie-bracket-of-smooth-vector-fields]].

[F2] Matrix units have their standard entrywise definition.
[[def-matrix-units]].

[F3] Countable choice is inherited from [F1].
[[def-countable-choice]].

## Verification

**Proof technique:** direct.

1.1 Matrix multiplication gives $h(x,y,z)h(x',y',z')=h(x+x',y+y',z+z'+xy')$ and $h(x,y,z)^{-1}=h(-x,-y,-z+xy)$. Thus $\mathbb R^3$ with these polynomial formulas is a Lie group embedded in $\operatorname{GL}_3$. [F1, algebra]

2.1 Differentiation at the identity gives the span of $E_{01},E_{12},E_{02}$. From the product law in step 1.1, the corresponding left-invariant fields are $X^L=\partial_x$, $Y^L=\partial_y+x\partial_z$, and $Z^L=\partial_z$. Their commutators are $[X^L,Y^L]=Z^L$ and $[X^L,Z^L]=[Y^L,Z^L]=0$. Hence [F1] gives $[X,Y]=Z$ and $Z$ central. [F1, F2, step 1.1, algebra]

3.1 The group is nonempty and three-dimensional; its Lie algebra is two-step nilpotent but the bracket is degenerate because $Z$ is central. No metric, interval, endpoint, or biconditional occurs. $\mathrm{AC}_\omega$ is propagated only through the current tangent-bracket supplier, and finite coordinates add no choice. [F1, F2, F3, step 1.1, step 2.1] ∎
