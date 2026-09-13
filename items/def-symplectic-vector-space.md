---
id: def-symplectic-vector-space
kind: definition
title: Symplectic vector space
status: draft
origin: pipeline
deps: ["thm-alternating-forms-have-a-symplectic-normal-form"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, §1.1, pp. 1--3
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

A **symplectic vector space** is a pair $(V,\omega)$ consisting of a
finite-dimensional real vector space $V$ and an alternating bilinear form
$\omega:V\times V\to\mathbb R$ for which

$$\omega^\flat:V\longrightarrow V^*,\qquad \omega^\flat(v)=\omega(v,\,·),$$

is an isomorphism. Equivalently, $\omega(v,w)=0$ for every $w\in V$ implies
$v=0$. The equivalence also follows from the radical clause in
[[thm-alternating-forms-have-a-symplectic-normal-form]]. The zero vector space,
with its unique alternating form, is included: its map to its dual is the
unique isomorphism.
