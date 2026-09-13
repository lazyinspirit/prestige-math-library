---
id: prop-symplectic-vector-spaces-have-even-dimension
kind: proposition
title: Symplectic vector spaces have even dimension
status: published
origin: pipeline
deps: ["def-symplectic-vector-space", "thm-alternating-forms-have-a-symplectic-normal-form"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, Theorem 1.1 and Corollary 1.2, pp. 2--3
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Every symplectic vector space $(V,\omega)$ has dimension $2n$ for a unique
$n\ge 0$. It has a basis $e_1,\ldots,e_n,f_1,\ldots,f_n$ in which
$\omega(e_i,f_j)=\delta_{ij}$ and all $e$--$e$ and $f$--$f$ pairings vanish.

## Facts & Assumptions

**Given:** A symplectic vector space $(V,\omega)$.

[F1] Symplectic means that the radical of $\omega$ is zero.
[[def-symplectic-vector-space]].

[F2] An alternating form has a basis of symplectic pairs followed by a basis
of its radical. [[thm-alternating-forms-have-a-symplectic-normal-form]].

## Proof

**Proof technique:** direct.

1.1 Apply [F2] to $\omega$. Its normal-form basis consists of $r$ pairs $e_i,f_i$ and $s$ radical vectors, with $\dim V=2r+s$. [F2]

2.1 By [F1] the radical is zero, so $s=0$. Taking $n=r$ gives the asserted even dimension and the displayed standard symplectic basis. This includes $V=0$, where $n=0$ and the basis is empty. [F1, F2, step 1.1] ∎
