---
id: "def-bounded-coercive-and-symmetric-sesquilinear-forms"
kind: "definition"
title: "Bounded, coercive and symmetric sesquilinear forms"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-hilbert-space"
  - "def-linear-map"
  - "def-norm-and-normed-space"
  - "def-real-and-complex-inner-product-space"
  - "def-sesquilinear-and-hermitian-forms-over-a-field-with-involution"
  - "rem-real-and-complex-normed-space-convention"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, the definition of a sesquilinear form used in Theorem 4.12, printed p. 98"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the bilinear form hypotheses (i)–(iii) preceding the Lax–Milgram Lemma, printed p. 71"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.7, the bilinear form $a$ of (4.20) and the coercivity/boundedness hypotheses, printed p. 103"
---

## Definition

Let $H$ be a real or complex Hilbert space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ with inner product $(\cdot,\cdot)$ linear in the first argument and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]), and let $a:H\times H\to\mathbb K$ be sesquilinear in the sense of [[def-sesquilinear-and-hermitian-forms-over-a-field-with-involution]]: linear in the first argument and conjugate-linear in the second. The form $a$ is **bounded** with bound $M\ge0$ when $$|a(u,v)|\le M\|u\|\,\|v\|\qquad\text{for all }u,v\in H,$$ and **coercive** with constant $\alpha>0$ when $$\operatorname{Re}a(u,u)\ge\alpha\|u\|^2\qquad\text{for all }u\in H .$$ It is **symmetric** (Hermitian) when $a(u,v)=\overline{a(v,u)}$ for all $u,v$, over $\mathbb C$ this is equivalent to $a(u,u)\in\mathbb R$ for every $u$. Indeed, writing $q(u)=a(u,u)$, sesquilinearity gives $4a(u,v)=q(u+v)-q(u-v)+i q(u+iv)-i q(u-iv)$, and real diagonal values make this identity conjugate-symmetric. Over $\mathbb R$, symmetry means $a(u,v)=a(v,u)$; real diagonal values alone do not imply symmetry. The **adjoint form** is $a^*(u,v):=\overline{a(v,u)}$, and $(a^*)^*=a$. **Real bilinear convention.** When $H$ is a real Hilbert space the same definitions apply with $a$ bilinear and coercive in the form $a(u,u)\ge\alpha\|u\|^2$; the conjugation in the second slot is then the identity. More generally, a real bilinear form may satisfy the boundedness and coercivity conditions without being symmetric; symmetry is an additional property, not part of either condition. When $H=\{0\}$ every form is bounded with bound $0$ and coercive with every $\alpha>0$; this degenerate case is kept but is never load-bearing. All constants below are named and never silently improved. No choice principle is used in this definition.
