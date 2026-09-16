---
id: fs-every-solvable-lie-algebra-is-nilpotent
kind: false-statement
title: Every solvable Lie algebra is nilpotent
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra, def-lower-central-series-and-nilpotent-lie-algebra]
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
    - title: "Milne, Lie Algebras, introductory examples"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Example 1.4(b) and the series definitions, printed pp. 5 and 11"
---

## Statement

Every solvable Lie algebra is nilpotent.

## Facts & Assumptions

**Given:** A field $k$ and the two-dimensional $k$-vector space $\mathfrak a=kx\oplus ky$ with bracket $[x,y]=y$.

[L1] Solvability means termination of the derived series ([[def-derived-series-and-solvable-lie-algebra]]).

[L2] Nilpotence means termination of the lower central series ([[def-lower-central-series-and-nilpotent-lie-algebra]]).

## Refutation

**Proof technique:** direct.

1.1 Alternation and bilinearity determine all brackets from $[x,y]=y$, and Jacobi holds because it is enough to check basis triples, where either two entries coincide or the inner bracket is a scalar multiple of $y$. Thus $\mathfrak a$ is a Lie algebra. Its derived algebra is $\mathfrak a^{(1)}=ky$, and $\mathfrak a^{(2)}=[ky,ky]=0$, so it is solvable by [L1]. [given, L1, algebra]

2.1 Its lower central series satisfies $\gamma_2(\mathfrak a)=[\mathfrak a,\mathfrak a]=ky$ and, whenever $r\geq2$ and $\gamma_r=ky$, $\gamma_{r+1}=[\mathfrak a,ky]=ky$ because $[x,y]=y\neq0$. Hence every term from $\gamma_2$ onward is $ky$, so the series never reaches zero and $\mathfrak a$ is not nilpotent by [L2]. This explicit solvable nonnilpotent witness refutes the statement over every field and uses no choice. [L2, step 1.1, algebra] ∎
