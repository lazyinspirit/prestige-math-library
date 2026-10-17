---
id: "thm-lax-milgram"
kind: "theorem"
title: "The Lax--Milgram theorem"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 4
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-bounded-linear-operator"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-countable-choice"
  - "def-hilbert-space"
  - "def-lipschitz-holder-contraction"
  - "def-operator-norm"
  - "lem-coercive-form-operator-is-bounded-below"
  - "lem-coercivity-makes-a-small-form-step-a-contraction"
  - "lem-form-to-bounded-operator-by-hilbert-riesz"
  - "thm-banach-fixed-point"
  - "thm-riesz-representation-for-hilbert-space"
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
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, Corollary 5.8 (Lax–Milgram) and its proof from Theorem 5.6 with $K=H$, printed pp. 139–140"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, Theorem 4.12 (Lax–Milgram), printed pp. 98–99"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the Lax–Milgram Lemma (real bilinear statement) and its proof, printed pp. 71–72"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.2, Theorem 10.9 (Lax–Milgram) with the estimate $\\|u\\|\\le\\varepsilon^{-1}\\|f\\|$, printed pp. 233–234"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.7, Theorem 4.20 (real bilinear form), printed p. 103"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be a real or complex Hilbert space, let $a$ be a bounded coercive sesquilinear form on $H$ with constants $M,\alpha$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]), and let $F:H\to\mathbb K$ be a bounded conjugate-linear functional with norm $\|F\|=\sup_{\|v\|\le1}|F(v)|$. Then there is a unique $u\in H$ with $$a(u,v)=F(v)\qquad\text{for every }v\in H,$$ and it satisfies $\alpha\|u\|\le\|F\|$, that is $\|u\|\le\|F\|/\alpha$. The real bilinear case is the same statement with $a$ symmetric or not, $F$ a bounded linear functional, and the conjugation read as the identity.

## Facts & Assumptions

**Given:** Countable Choice; a real or complex Hilbert space $H$; a bounded coercive sesquilinear form $a$ on $H$ with constants $M\ge0$ and $\alpha>0$; a bounded conjugate-linear functional $F$ on $H$ with $\|F\|=\sup_{\|v\|\le1}|F(v)|$; and the operator $A$ of $a$, $a(u,v)=(Au,v)$.

[F1] $A$ is linear and bounded with $a(u,v)=(Au,v)$, $\|A\|\le M$, and $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[lem-form-to-bounded-operator-by-hilbert-riesz]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[F2] Riesz representation under Countable Choice: every bounded linear functional $G$ has a unique $w$ with $G(v)=(v,w)$ for all $v$, and $\|G\|=\|w\|$ ([[thm-riesz-representation-for-hilbert-space]], [[def-countable-choice]]).

[F3] Contractions on complete spaces: a map $T$ of a nonempty complete metric space with $\|T(u)-T(v)\|\le q\|u-v\|$, $0\le q<1$, has exactly one fixed point; and for $H\ne\{0\}$ and $0<\rho<2\alpha/M^2$ the map $u\mapsto u-\rho(Au-w)$ is a strict contraction with constant $q_\rho=(1-2\rho\alpha+\rho^2M^2)^{1/2}<1$ ([[thm-banach-fixed-point]], [[def-lipschitz-holder-contraction]], [[lem-coercivity-makes-a-small-form-step-a-contraction]], [[def-hilbert-space]]).

[F4] Conjugation: $G(v):=\overline{F(v)}$ is linear when $F$ is conjugate-linear, $|G(v)|=|F(v)|$, and $G$ bounded with the same norm; $\operatorname{Re}z\le|z|$ and $|z|=|\overline z|$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F5] Linearity of $a$ in the first argument and the estimate for the unique solution follow from $a(u,v)=(Au,v)$; the degenerate space $H=\{0\}$ has the unique solution $u=0$ and $\|F\|=0$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-hilbert-space]]).



## Proof

1.1 Assume first $H\ne\{0\}$. Then the given bound and coercivity constant satisfy $\alpha\le M$ and $M>0$: choosing $u\ne0$ and normalising, $\alpha\le\operatorname{Re}a(u,u)\le|a(u,u)|\le M\|u\|^2$, so $M\ge\alpha>0$; hence $\rho:=\alpha/M^2$ satisfies $0<\rho<2\alpha/M^2$. [F1, algebra]

1.2 Uniqueness: if $u$ satisfies $a(u,v)=0$ for every $v$, then testing $v=u$ gives $\alpha\|u\|^2\le\operatorname{Re}a(u,u)=0$, so $u=0$. If $u_1,u_2$ are two solutions of $a(u,\cdot)=F$, then first-slot linearity gives $a(u_1-u_2,v)=0$ for all $v$, so $u_1=u_2$. [F1, algebra]

2.1 The conjugate functional: $G(v):=\overline{F(v)}$ is a bounded linear functional with $\|G\|=\|F\|$, so by Riesz representation there is a unique $w\in H$ with $G(v)=(v,w)$ for all $v$, that is $F(v)=(w,v)$ for all $v$, and $\|w\|=\|F\|$. [F2, F4, step 1.1]

3.1 Existence: fix $\rho$ as in step 1.1 and define $T(u):=u-\rho(Au-w)$. By [F3] the map $T$ is a strict contraction of the complete space $H$ with constant $q_\rho<1$, so by the Banach fixed-point theorem it has a fixed point $u\in H$; then $u=u-\rho(Au-w)$ gives $Au=w$, and hence $a(u,v)=(Au,v)=(w,v)=F(v)$ for every $v\in H$. [F1, F3, step 2.1]

4.1 Estimate: for the solution $u$ of step 3.1, $\alpha\|u\|^2\le\operatorname{Re}a(u,u)=\operatorname{Re}F(u)\le|F(u)|\le\|F\|\,\|u\|$; if $u\ne0$ divide by $\|u\|$ to get $\alpha\|u\|\le\|F\|$, and if $u=0$ the inequality holds trivially. [F1, F4, step 3.1, algebra]

5.1 Degenerate space: if $H=\{0\}$, then the only element is $0$, the only functional is $0$ and it is the value at the unique solution $u=0$ with $\alpha\|u\|=0=\|F\|$; uniqueness is immediate. The real bilinear case is the same argument with conjugation read as the identity, and $a$ need not be symmetric. [F5, given] ∎ 