---
id: thm-darboux-theorem
kind: theorem
title: Darboux theorem
status: published
origin: pipeline
deps: ["thm-relative-moser-theorem", "thm-alternating-forms-have-a-symplectic-normal-form"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 8, Theorem 8.1 and proof, p. 47
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

Assume $\mathrm{AC}_\omega$. For every point $p$ of a $2n$-dimensional
symplectic manifold $(M,\omega)$, there are coordinates
$(q^1,\ldots,q^n,p_1,\ldots,p_n)$ centred at $p$ in which

$$\omega=\sum_{i=1}^n dq^i\wedge dp_i.$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a symplectic manifold $(M,\omega)$, and
$p\in M$.

[F1] A nondegenerate alternating form has a symplectic basis.
[[thm-alternating-forms-have-a-symplectic-normal-form]].

[F2] Symplectic forms that agree as tensors along a closed embedded
submanifold and have a locally symplectic interpolation are related by a local
symplectomorphism fixed there. [[thm-relative-moser-theorem]].

## Proof

**Proof technique:** direct.

1.1 By [F1], choose a chart $x=(q',p')$ centred at $p$ whose differential identifies $\omega_p$ with $\omega_{\mathrm{std}}=\sum_i dq'^i\wedge dp'_i$ at the origin. The forms $\omega$ and $x^*\omega_{\mathrm{std}}$ agree at $p$. Their convex interpolation is nondegenerate on a neighbourhood of $p$ for every $t\in[0,1]$, after shrinking once, because nondegeneracy is open and the parameter interval is compact. [F1, given]

2.1 Apply [F2] to the closed submanifold $\{p\}$. It gives a local diffeomorphism $\phi$ fixing $p$ with $\phi^*(x^*\omega_{\mathrm{std}})=\omega$. Therefore the components of $x\circ\phi$ are the required coordinates. When $n=0$, the empty coordinate list already works. [F2, step 1.1] ∎
