---
id: lem-qc-tqc-fibonacci-coefficient-ring-specialization
kind: lemma
title: Fibonacci coefficient ring and its exact mod-31 specialization
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - ex-qc-tqc-fibonacci-data
dependency_level: 7
axiom_use: None; the proof is algebraic number-field arithmetic.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57
---

## Statement

Let $r=e^{-3\pi i/5}$, $\phi=(1+\sqrt5)/2=1-r-r^{-1}$, and
$s=\sqrt\phi>0$. Then
$$\mathbb Z[r,s]\cong \mathbb Z[x,y]\big/\bigl(x^4-x^3+x^2-x+1,\ y^2-(1-x-x^{-1})\bigr),$$
where $x^{-1}=x^9$. The assignment
$$r\mapsto15,\qquad r^{-1}\mapsto29,\qquad \phi\mapsto19,\qquad s\mapsto9$$
defines a ring homomorphism to $\mathbb F_{31}$. The elements $r$ and
$\phi$ map to nonzero units, and conjugation of coefficients is handled by
$r\mapsto r^{-1}$ before reduction.

## Facts & Assumptions

**Given:** The fixed Fibonacci root $r$, the golden ratio $\phi$, and the
positive square root $s=\sqrt\phi$.

[A1] Assume the fixed-chirality root $r=R_\tau/R_1=e^{-3\pi i/5}$ from the
actual Fibonacci data carrier; the positive square root $s=\sqrt\phi$ is
fixed in the Statement. The carrier states the phases
$R_1=e^{-4\pi i/5}$ and $R_\tau=e^{3\pi i/5}$.
[[ex-qc-tqc-fibonacci-data]]

## Proof

1.1 The number $r$ is a primitive tenth root of unity, so its minimal polynomial is $\Phi_{10}(x)=x^4-x^3+x^2-x+1$ and $[\mathbb Q(r):\mathbb Q]=4$. Its maximal real subfield is $\mathbb Q(\sqrt5)$, and the nontrivial conjugate of $\phi$ is $(1-\sqrt5)/2=-\phi^{-1}$; hence the field norm of $\phi$ from $\mathbb Q(\sqrt5)$ to $\mathbb Q$ is $-1$. Therefore $\phi$ is not a square in that real subfield, since the norm of a square would be a nonnegative rational square. [given, A1, algebra]

2.1 If $u\in\mathbb Q(r)$ satisfied $u^2=\phi$, complex conjugation would give $\bar u^2=\phi$, hence $\bar u=u$ or $\bar u=-u$. In the first case $u\in\mathbb Q(\sqrt5)$, contradicting step 1.1. In the second case $u$ is purely imaginary in the chosen embedding, so $u^2$ is nonpositive real, contrary to $\phi>0$. Thus $Y^2-\phi$ is irreducible over $\mathbb Q(r)$ and $[\mathbb Q(r,s):\mathbb Q]=8$. The displayed monic relations therefore give the full degree-eight presentation; no additional relation is being assumed. [given, step 1.1, algebra]

3.1 In $\mathbb F_{31}$, $15^{-1}=29$, $\Phi_{10}(15)=0$, $1-15-29=19$, and $9^2=19$. Thus the assignments satisfy both defining relations and extend to the stated ring homomorphism. The images $15$ and $19$ are nonzero, so $r,\phi$ and their powers are units; all denominators in the path projectors and normalized braid matrices are therefore invertible after specialization. [given, A1, step 2.1, algebra]

4.1 In the number field, complex conjugation fixes $\phi,s$ and sends $r$ to $r^{-1}$. Therefore a coefficient involving conjugation is first rewritten with $r^{-1}$ and only then reduced by $r^{-1}\mapsto29$. No conjugation operation on $\mathbb F_{31}$ is required. [given, step 3.1, algebra] ∎
