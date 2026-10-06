---
id: "lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive"
kind: "lemma"
title: "The adjoint of a coercive form is coercive with the same constants"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 3
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-countable-choice"
  - "def-hilbert-space-adjoint"
  - "def-real-and-complex-inner-product-space"
  - "lem-coercive-form-operator-is-bounded-below"
  - "lem-form-to-bounded-operator-by-hilbert-riesz"
  - "lem-kernel-range-orthogonality-for-hilbert-adjoints"
  - "thm-hilbert-adjoint-properties"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Section 4.4, Theorem 4.12 and its proof, printed pp. 98–99: bounded/coercive operator representation and the density argument. The same-constant adjoint calculation is proved here, not taken from an adjoint discussion in those pages."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.7, the bilinear form and its adjoint in the general elliptic discussion, printed pp. 103–105"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 5.3, Remark 8(b)–(c), printed pp. 140–141: closed range and density for a coercive operator. This is real bilinear background; the adjoint-form identity and its same-constant coercivity are proved here."
---

## Statement

Assume Countable Choice, used through the Riesz representation and Hilbert-adjoint suppliers. Let $a$ be a bounded sesquilinear form on a real or complex Hilbert space with bound $M$ and coercivity constant $\alpha>0$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]), and let $a^*(u,v):=\overline{a(v,u)}$. Then $a^*$ is bounded with the same bound $M$ and coercive with the same constant $\alpha$; its operator is the Hilbert adjoint $A^*$ of the operator $A$ of $a$ ([[lem-form-to-bounded-operator-by-hilbert-riesz]]). In particular $\ker A^*=\{0\}$ and $(\operatorname{ran}A)^\perp=\ker A^*$, so the range of $A$ is dense in the classical route to surjectivity.

## Facts & Assumptions

**Given:** Countable Choice; a real or complex Hilbert space $H$; a bounded sesquilinear form $a$ with bound $M\ge0$ and coercivity constant $\alpha>0$; the adjoint form $a^*(u,v)=\overline{a(v,u)}$; and the operator $A$ of $a$, $a(u,v)=(Au,v)$.

[F1] $a$ is linear in the first argument and conjugate-linear in the second, with $|a(u,v)|\le M\|u\|\,\|v\|$ and $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] The operator $A$ exists, is linear and bounded with $a(u,v)=(Au,v)$, and $a^*(u,v)=(A^*u,v)$ where $A^*$ is the Hilbert adjoint of $A$; moreover the adjoint form $a^*$ is again a sesquilinear form ([[lem-form-to-bounded-operator-by-hilbert-riesz]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[F3] A bounded coercive form's operator is bounded below with the coercivity constant: for the form $a^*$ with operator $A^*$ this gives $\alpha\|u\|\le\|A^*u\|$ ([[lem-coercive-form-operator-is-bounded-below]]).

[F4] Kernel--range orthogonality: $(\operatorname{ran}A)^\perp=\ker A^*$ and $\overline{\operatorname{ran}A}=(\ker A^*)^\perp$ for the Hilbert adjoint ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]], [[def-hilbert-space-adjoint]]).

[F5] Conjugation is an involution with $\operatorname{Re}\overline z=\operatorname{Re}z$ and $|z|=|\overline z|$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-real-and-complex-inner-product-space]]).



## Proof

1.1 Boundedness of $a^*$: for all $u,v\in H$, $|a^*(u,v)|=|\overline{a(v,u)}|=|a(v,u)|\le M\|v\|\,\|u\|$, so $a^*$ is bounded with the same bound $M$; it is sesquilinear of the same type, being conjugate-linear in $v$ and linear in $u$. [F1, F2, F5]

1.2 Coercivity of $a^*$: $a^*(u,u)=\overline{a(u,u)}$ has the same real part as $a(u,u)$, hence $\operatorname{Re}a^*(u,u)=\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$ for every $u$. [F1, F5, algebra]

2.1 Operator and kernel: [F2] identifies the operator of $a^*$ as the Hilbert adjoint $A^*$; since $a^*$ is bounded and coercive with constant $\alpha$, [F3] gives $\alpha\|u\|\le\|A^*u\|$, so $A^*u=0$ forces $u=0$, that is $\ker A^*=\{0\}$. [F2, F3, step 1.2]

3.1 Orthogonality: by [F4], $(\operatorname{ran}A)^\perp=\ker A^*=\{0\}$, so the orthogonal complement of the range of $A$ is trivial and $\overline{\operatorname{ran}A}=(\ker A^*)^\perp=H$; the range of $A$ is dense. [F4, step 2.1] ∎ 