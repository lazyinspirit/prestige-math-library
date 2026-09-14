---
id: cex-a-nilpotent-by-nilpotent-extension-that-is-not-nilpotent
kind: counterexample
title: A nilpotent-by-nilpotent extension need not be nilpotent
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [ex-the-two-dimensional-affine-lie-algebra-is-solvable-not-nilpotent, def-quotient-lie-algebra, ex-abelian-lie-algebras-are-nilpotent-of-class-one]
landmark: false
proof_strategy: counterexample
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
    - title: "Milne, Lie Algebras, nilpotent extensions"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "introductory affine example, printed p. 9; Aside 2.3, printed p. 12"
---

## Counterexample

The assertion that an extension of a nilpotent Lie algebra by a nilpotent Lie
algebra must be nilpotent is false. For the affine algebra
$\mathfrak a=kx\oplus ky$ with $[x,y]=y$, the sequence

$$0\longrightarrow ky\longrightarrow\mathfrak a\longrightarrow\mathfrak a/ky\longrightarrow0$$

has nilpotent kernel and quotient, but $\mathfrak a$ is not nilpotent.

## Facts & Assumptions

**Given:** The displayed affine Lie algebra over a field $k$, with the first
map the inclusion and the second the quotient map.

[L1] Its lower central series satisfies $\gamma_r(\mathfrak a)=ky\neq0$ for
every $r\geq2$
([[ex-the-two-dimensional-affine-lie-algebra-is-solvable-not-nilpotent]]).

[L2] The quotient bracket is
$[u+I,v+I]=[u,v]+I$ for an ideal $I$
([[def-quotient-lie-algebra]]).

[L3] Every nonzero abelian Lie algebra is nilpotent of class one
([[ex-abelian-lie-algebras-are-nilpotent-of-class-one]]).

## Refutation

**Proof technique:** counterexample.

1.1 The line $ky$ is an ideal because $[x,y]=y$ and $[y,y]=0$. The displayed inclusion is injective, the quotient map is surjective, and its kernel is exactly $ky$, so the sequence is short exact. [given, algebra]

1.2 Nevertheless, [L1] says that every lower-central term of $\mathfrak a$ from $\gamma_2$ onward is the nonzero line $ky$. Thus the ambient algebra is not nilpotent. [L1]

2.1 The kernel $ky$ is one-dimensional abelian. The quotient is spanned by $x+ky$, and [L2] gives $[x+ky,x+ky]=0+ky$, so it too is one-dimensional abelian. Hence both kernel and quotient are nilpotent by [L3]. [L2, L3, step 1.1]

3.1 Steps 1.1, 1.2, and 2.1 satisfy the hypotheses of a nilpotent-by-nilpotent extension and explicitly fail its proposed nilpotence conclusion. The construction is finite and uses no choice principle. [step 1.1, step 2.1, step 1.2] ∎
