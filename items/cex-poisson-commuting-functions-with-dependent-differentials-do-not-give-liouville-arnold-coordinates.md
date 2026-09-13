---
id: cex-poisson-commuting-functions-with-dependent-differentials-do-not-give-liouville-arnold-coordinates
kind: counterexample
title: Poisson-commuting functions with dependent differentials do not give Liouville–Arnold coordinates
status: draft
origin: pipeline
deps: ["def-completely-integrable-hamiltonian-system"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Definition 18.10 and Theorem 18.12, pp. 110--111
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Counterexample

On standard $\mathbb R^4$, take $F_1=H=q^1$ and $F_2=(q^1)^2$.
They Poisson commute everywhere, but their differentials are dependent
everywhere, so they do not yield Liouville–Arnold coordinates.

## Facts & Assumptions

**Given:** The standard form
$dq^1\wedge dp_1+dq^2\wedge dp_2$.

[F1] Complete integrability requires both involution and independence of
$dF_1,\ldots,dF_n$ on a dense open subset; that subset is the regular locus.
[[def-completely-integrable-hamiltonian-system]].

## Verification

**Proof technique:** direct.

1.1 Both functions depend only on $q^1$. Their Hamiltonian fields are scalar multiples of $\partial_{p_1}$, so their symplectic pairing and hence $\{F_1,F_2\}$ vanish. [given, algebra]

2.1 Nevertheless $dF_2=2q^1\,dF_1$ at every point, so the integral map $(F_1,F_2)$ has rank at most one instead of two and has no regular locus of the required rank. By [F1], it is not a completely integrable system, and Liouville–Arnold cannot furnish action–angle coordinates for it. [F1, step 1.1, algebra] ∎
