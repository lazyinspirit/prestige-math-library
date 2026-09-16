---
id: lem-orthogonal-complements-under-invariant-forms-are-ideals
kind: lemma
title: Orthogonal complements under invariant forms are ideals
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lie-subalgebra-ideal-and-center]
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
    - title: "Milne, Lie Algebras, Lemma 4.6"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§4, Lemma 4.6, printed p. 41"
---

## Statement

Let $B$ be a symmetric invariant bilinear form on a Lie algebra
$\mathfrak g$, and let $\mathfrak i$ be an ideal. Then

$$\mathfrak i^\perp=\{u\in\mathfrak g:B(u,v)=0\text{ for every }v\in\mathfrak i\}$$

is an ideal. In particular, the radical $\mathfrak g^\perp$ of $B$ is an
ideal.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$, an ideal $\mathfrak i$, and a symmetric bilinear form satisfying $B([z,u],v)+B(u,[z,v])=0$.

[L1] An ideal is a linear subspace $\mathfrak i$ with $[\mathfrak g,\mathfrak i]\subseteq\mathfrak i$ ([[def-lie-subalgebra-ideal-and-center]]).

## Proof

**Proof technique:** direct.

1.1 The equations defining $\mathfrak i^\perp$ are linear in $u$, so it is a linear subspace. If $u\in\mathfrak i^\perp$, $z\in\mathfrak g$, and $v\in\mathfrak i$, invariance gives $B([z,u],v)=-B(u,[z,v])$. The second argument on the right belongs to $\mathfrak i$ by [L1], so the right side is zero. Hence $[z,u]\in\mathfrak i^\perp$, proving ideality. [L1, given, algebra]

2.1 Taking $\mathfrak i=\mathfrak g$ in step 1.1 gives that $\mathfrak g^\perp$ is an ideal. This includes the zero algebra, the zero form, and the nondegenerate case $\mathfrak g^\perp=0$ without any separate choice. [step 1.1] ∎