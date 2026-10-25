---
id: cex-centerless-does-not-imply-semisimple
kind: counterexample
title: Centerless does not imply semisimple
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [fs-centerless-implies-semisimple, def-derived-series-and-solvable-lie-algebra, def-semisimple-lie-algebra-by-vanishing-radical]
landmark: false
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, affine algebra and semisimplicity"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Chapter I, Example 1.4 and Definition 4.2, printed pp. 10 and 41"
---

## Counterexample

The two-dimensional affine Lie algebra
$\mathfrak a=kx\oplus ky$ with $[x,y]=y$ is centerless but solvable.
It therefore refutes [[fs-centerless-implies-semisimple]].

## Facts & Assumptions

**Given:** The displayed nonabelian Lie algebra over a characteristic-zero field.

[L1] The derived series defines solvability ([[def-derived-series-and-solvable-lie-algebra]]).

[L2] A finite-dimensional Lie algebra is semisimple when its solvable radical is zero ([[def-semisimple-lie-algebra-by-vanishing-radical]]).

## Refutation

**Proof technique:** counterexample.

1.1 For $u=ax+by$, $$[u,x]=-by,\qquad [u,y]=ay.$$ If $u$ is central, both brackets vanish, so $a=b=0$. Hence $Z(\mathfrak a)=0$. [given, algebra]

1.2 On the other hand, $\mathfrak a^{(1)}=[\mathfrak a,\mathfrak a]=ky$ and $\mathfrak a^{(2)}=[ky,ky]=0$. Thus $\mathfrak a$ is solvable by [L1]. As a solvable ideal of itself, its radical is all of $\mathfrak a$, which is nonzero; by [L2] it is not semisimple. [L1, L2, algebra]

2.1 Step 1.1 satisfies the proposed centerless hypothesis and step 1.2 fails the semisimplicity conclusion. The witness is nonzero, two-dimensional, and completely explicit; no choice is used. [step 1.1, step 1.2] ∎