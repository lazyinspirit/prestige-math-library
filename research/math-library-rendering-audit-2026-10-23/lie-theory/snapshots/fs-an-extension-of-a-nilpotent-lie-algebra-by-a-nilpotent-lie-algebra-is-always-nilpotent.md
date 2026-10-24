---
id: fs-an-extension-of-a-nilpotent-lie-algebra-by-a-nilpotent-lie-algebra-is-always-nilpotent
kind: false-statement
title: Nilpotent-by-nilpotent extensions are always nilpotent
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, def-quotient-lie-algebra]
landmark: false
proof_strategy: direct
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
    - title: "Milne, Lie Algebras, Aside 2.3"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Aside 2.3 and the two-dimensional nonabelian example, printed pp. 5 and 11"
---

## Statement

If an ideal and the corresponding quotient Lie algebra are nilpotent, then the
ambient Lie algebra is nilpotent.

## Facts & Assumptions

**Given:** A field $k$ and the two-dimensional Lie algebra $\mathfrak a=kx\oplus ky$ with $[x,y]=y$.

[L1] Nilpotence is termination of the lower central series ([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L2] The bracket in a quotient by an ideal is computed on coset representatives ([[def-quotient-lie-algebra]]).

## Refutation

**Proof technique:** direct.

1.1 The line $I=ky$ is an ideal because $[x,y]=y\in I$ and $[y,y]=0$. Its bracket is zero, so $\gamma_2(I)=0$ and $I$ is nilpotent by [L1]. [given, L1, algebra]

2.1 The quotient $\mathfrak a/I$ is spanned by $x+I$ and is abelian: [L2] gives $[x+I,x+I]=I$. Hence its second lower-central term is zero, so it too is nilpotent. Thus $0\to I\to\mathfrak a\to\mathfrak a/I\to0$ has nilpotent kernel and quotient. [L1, L2, step 1.1, algebra]

3.1 Nevertheless, $\gamma_2(\mathfrak a)=ky$ and $\gamma_{r+1}(\mathfrak a)=[\mathfrak a,ky]=ky$ for every $r\geq2$, since $[x,y]=y\neq0$. The lower central series never vanishes, so $\mathfrak a$ is not nilpotent by [L1]. This exact extension is therefore a counterexample over every field; it is finite and uses no choice. [L1, step 2.1, algebra] ∎
