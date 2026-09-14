---
id: ex-the-two-dimensional-affine-lie-algebra-is-solvable-not-nilpotent
kind: example
title: The two-dimensional affine Lie algebra is solvable, not nilpotent
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra, def-lower-central-series-and-nilpotent-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, two-dimensional nonabelian example"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Example 1.4(b), printed p. 5"
---

## Example

Let $\mathfrak a=kx\oplus ky$ with $[x,y]=y$. Then
$\mathfrak a^{(1)}=ky$, $\mathfrak a^{(2)}=0$, and
$\gamma_r(\mathfrak a)=ky$ for every $r\geq2$. Thus $\mathfrak a$ is solvable
but not nilpotent.

## Facts & Assumptions

**Given:** The displayed two-dimensional Lie algebra over a field $k$.

[L1] The derived series tests solvability
([[def-derived-series-and-solvable-lie-algebra]]).

[L2] The lower central series tests nilpotence
([[def-lower-central-series-and-nilpotent-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Every basis bracket is zero or a scalar multiple of $y$, and $[x,y]=y$ is nonzero. Hence $[\mathfrak a,\mathfrak a]=ky$, while $[ky,ky]=0$. Therefore $\mathfrak a^{(1)}=ky$ and $\mathfrak a^{(2)}=0$, so $\mathfrak a$ is solvable by [L1]. [given, L1, algebra]

1.2 The same first calculation gives $\gamma_2(\mathfrak a)=ky$. Since $[\mathfrak a,ky]=ky$, induction gives $\gamma_r(\mathfrak a)=ky\neq0$ for every $r\geq2$. Thus the lower central series does not terminate and $\mathfrak a$ is not nilpotent by [L2]. [given, L2, algebra]

2.1 These computations establish every displayed equality and both conclusions over every field, including characteristic two, because the persistent bracket has coefficient one. No choice is used. [step 1.1, step 1.2] ∎
