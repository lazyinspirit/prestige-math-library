---
id: cor-poincare-recurrence-for-finite-volume-hamiltonian-invariant-regions
kind: corollary
title: Poincaré recurrence for finite-volume Hamiltonian invariant regions
status: published
origin: pipeline
deps: ["thm-liouville-volume-preservation", "thm-poincare-recurrence-for-finite-measure-preserving-systems"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Hamiltonian-flow invariance, p. 105
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

Let $R$ be a measurable invariant region of finite symplectic volume for a
Hamiltonian flow, and fix a nonzero time $\tau$ for which the time map and all
its iterates are defined on $R$. For every measurable $E\subseteq R$, almost
every $x\in E$ returns to $E$ under $\phi_{n\tau}$ for infinitely many positive
integers $n$.

## Facts & Assumptions

**Given:** The invariant finite-volume region and time map in the statement.

[F1] Hamiltonian time maps preserve symplectic volume.
[[thm-liouville-volume-preservation]].

[F2] In a finite measure-preserving system, almost every point of each
measurable set returns infinitely often.
[[thm-poincare-recurrence-for-finite-measure-preserving-systems]].

## Proof

**Proof technique:** direct.

1.1 Restrict $T=\phi_\tau$ and the symplectic volume measure to $R$. Invariance keeps $T$ on $R$, [F1] makes it measure preserving, and the hypothesis gives finite total measure. [F1, given]

2.1 Apply [F2] to $(R,T)$. Since $T^n=\phi_{n\tau}$ wherever the iterates are defined, its conclusion is exactly the stated recurrence. No assertion is made for an incomplete time map. [F2, step 1.1] ∎
