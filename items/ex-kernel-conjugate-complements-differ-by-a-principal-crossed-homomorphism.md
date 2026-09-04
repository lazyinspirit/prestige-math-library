---
id: ex-kernel-conjugate-complements-differ-by-a-principal-crossed-homomorphism
kind: example
title: "Kernel-conjugate complements differ by a principal crossed homomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism, thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy, def-external-semidirect-product]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Example

Let $C_2=\langle t\rangle$ act on an abelian group $A$.
If $z:C_2\to A$ is a crossed homomorphism and $a\in A$, then the complements
$\Gamma_z$ and $\Gamma_{z_a}$ are conjugate by a kernel element, where
$$z_a(g)=z(g)+g\cdot a-a\qquad(g\in C_2).$$

## Facts & Assumptions

**Given:** An action of $C_2$ on an abelian group $A$, a crossed homomorphism $z$, and an element $a\in A$.

[L1] Conjugating by a kernel element changes the crossed homomorphism by a
principal one
([[lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism]]).

[L2] First cohomology identifies kernel-conjugacy classes of complements
([[thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy]]).

## Verification

**Proof technique:** direct.

1.1 Define $z_a$ on every $g\in C_2$ by the displayed formula. Fact [L1] gives $(-a,1)\Gamma_z(a,1)=\Gamma_{z_a}$. So the two complements are conjugate by the kernel element $(-a,1)$. [given, L1, construct]

2.1 Therefore they determine the same class under the bijection of [L2], exactly because their defining cocycles differ by the principal crossed homomorphism attached to $a$. [L1, L2, step 1.1] ∎
