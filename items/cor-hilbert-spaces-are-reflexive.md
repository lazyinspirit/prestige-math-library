---
id: cor-hilbert-spaces-are-reflexive
kind: corollary
title: Hilbert spaces are reflexive
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-riesz-representation-for-hilbert-space, def-canonical-map-into-the-bidual, def-reflexive-banach-space, def-dual-space-of-a-normed-space, def-real-and-complex-inner-product-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.35, p.236"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 184"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Bruce Blackadar, Ilijas Farah and Asaf Karagila, Hilbert spaces without the Countable Axiom of Choice, Theorem 2.0.6"
      url: "https://eprints.whiterose.ac.uk/216587/1/Hilbert%20spaces%20without%20the.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Every real or complex Hilbert space $H$ is reflexive: the canonical evaluation map $J_H:H\to H^{**}$ is surjective.

## Facts & Assumptions

[A1] Riesz representation: for every bounded linear functional $f$ on $H$ there is a unique $y\in H$ with $f(x)=\langle x,y\rangle$ for all $x$, and $\|f\|=\|y\|$; writing $R(y):=\langle\,\cdot\,,y\rangle$ defines a bijection $R:H\to H^*$ that is conjugate-linear, and linear in the real case ([[thm-riesz-representation-for-hilbert-space]], [[def-dual-space-of-a-normed-space]]).

[A2] The canonical map is $(J_Hx)(f)=f(x)$ and does not depend on choices ([[def-canonical-map-into-the-bidual]]).

[A3] $H$ is reflexive exactly when $J_H$ is surjective ([[def-reflexive-banach-space]]).

[A4] The pairing is conjugate-linear in the second argument, so $\langle z,y\rangle=\overline{\langle y,z\rangle}$ ([[def-real-and-complex-inner-product-space]]).

[A5] Countable Choice is the hypothesis of the Riesz representation theorem used below ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a real or complex Hilbert space $H$, its dual $H^*$, bidual $H^{**}$ and canonical map $J_H$.

1.1 By [A1] the Riesz map $R:H\to H^*$ is a bijection with $R(y)(x)=\langle x,y\rangle$ and $\|R(y)\|=\|y\|$. [A1, A5]

2.1 Let $\Phi\in H^{**}$ and define $\psi(y)=\Phi(R(y))$; since $R$ is conjugate-linear and $\Phi$ is linear, $\psi(ay)=\overline a\psi(y)$ and $\psi(y+y')=\psi(y)+\psi(y')$, while $|\psi(y)|\le\|\Phi\|\,\|R(y)\|=\|\Phi\|\,\|y\|$; hence $\varphi:=\overline{\psi}$ is a linear functional on $H$ with $|\varphi(y)|\le\|\Phi\|\,\|y\|$. [step 1.1, A1]

3.1 Applying Riesz representation to $\varphi$ gives $z\in H$ with $\varphi(y)=\langle y,z\rangle$ for every $y$. [step 2.1, A1]

4.1 Then for every $y$ one has $\Phi(R(y))=\overline{\varphi(y)}=\overline{\langle y,z\rangle}=\langle z,y\rangle=R(y)(z)=J_H(z)(R(y))$ by [A4] and [A2]; since $R$ is onto $H^*$, every element of $H^*$ has the form $R(y)$, so $\Phi=J_H(z)$ lies in the range of $J_H$. [step 3.1, A1, A2, A4]

5.1 Thus $J_H$ is surjective and $H$ is reflexive; the only choice assumption is the one inherited from Riesz representation in step 1.1. [step 1.1, step 4.1, A3, A5] ∎
