---
id: thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint
kind: theorem
title: The periodic Poisson mean-zero pseudoinverse is linear and self-adjoint
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-periodic-pic-grid-and-inner-product
  - thm-periodic-centered-difference-poisson-zero-mode-and-gauge
proof_strategy: direct
axiom_use: No choice principle is used; the inverse is defined by uniqueness in a finite-dimensional space.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Benjamin Seibold, MIT 18.336 Lecture 5, Finite Difference Approximation
      url: https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2.2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

For any real grid array $s$, define its mean-zero periodic Poisson pseudoinverse by
$$ A_h^\dagger s:=\text{the unique mean-zero grid array }u\text{ such that }A_hu=s-\bar s\,\mathbf1, $$
where $\bar s=L^{-d}\langle s,\mathbf1\rangle_h$. This definition is well-defined by [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]]. It gives $A_hA_h^\dagger s=s-\bar s\mathbf1$, $A_h^\dagger\mathbf1=0$, and a linear self-adjoint map on the full finite grid space.

## Facts & Assumptions

**Given:** The real grid space, its weighted inner product and mean, and the periodic centered Poisson operator.

[F1] [[def-periodic-pic-grid-and-inner-product]]: $\langle u,v\rangle_h=h^d\sum_ju_jv_j$ and $\bar s=L^{-d}\langle s,\mathbf1\rangle_h$.

[F2] [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]]: $A_h$ is self-adjoint, its range is the zero-mean subspace, and every zero-mean source has a unique mean-zero solution.

## Proof

1.1 For any $s$, the source $s-\bar s\mathbf1$ has mean zero by [F1]. By [F2] it has a unique mean-zero solution; this defines $A_h^\dagger s$, proves $A_hA_h^\dagger s=s-\bar s\mathbf1$, and gives $A_h^\dagger\mathbf1=0$. [F1, F2, given]

2.1 Let $a,b\in\mathbb R$ and grid arrays $s,t$. The array $aA_h^\dagger s+bA_h^\dagger t$ has mean zero, and applying $A_h$ gives $as+bt-(a\bar s+b\bar t)\mathbf1=as+bt-\overline{as+bt}\mathbf1$. Uniqueness in [F2] therefore yields $A_h^\dagger(as+bt)=aA_h^\dagger s+bA_h^\dagger t$. [F1, F2, step 1.1, algebra]

3.1 Both $A_h^\dagger s$ and $A_h^\dagger t$ have mean zero. Hence, using [F2] and step 1.1, $\langle A_h^\dagger s,t\rangle_h =\langle A_h^\dagger s,t-\bar t\mathbf1\rangle_h =\langle A_h^\dagger s,A_hA_h^\dagger t\rangle_h =\langle A_hA_h^\dagger s,A_h^\dagger t\rangle_h =\langle s-\bar s\mathbf1,A_h^\dagger t\rangle_h =\langle s,A_h^\dagger t\rangle_h.$ The middle equality uses self-adjointness of $A_h$. This proves that the full-space linear map $A_h^\dagger$ is self-adjoint. [F1, F2, step 1.1, step 2.1, algebra] ∎
