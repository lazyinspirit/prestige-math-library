---
id: "lem-coercive-form-operator-is-bounded-below"
kind: "lemma"
title: "A coercive form operator is bounded below"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 2
deps:
  - "def-bounded-below-operator"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-countable-choice"
  - "def-operator-norm"
  - "lem-form-to-bounded-operator-by-hilbert-riesz"
  - "thm-cauchy-schwarz-in-an-inner-product-space"
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
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.7, Theorem 4.20, printed p. 103: the real bilinear Lax–Milgram statement; its proof is referred to [9]. The lower-bound derivation is proved here."
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the unnumbered coercivity/Cauchy–Schwarz lower bound in the Lax–Milgram proof, printed p. 71 (PDF p. 38); (4.13) is Laugesen’s numbering, not Simon’s."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, estimate (4.13) $c\\|u\\|_K\\le\\|Au\\|_K$ in the proof of Theorem 4.12, printed p. 99"
---

## Statement

Assume Countable Choice, used through [[lem-form-to-bounded-operator-by-hilbert-riesz]]. Let $a$ be a bounded coercive sesquilinear form on a real or complex Hilbert space $H$ with constants $M,\alpha$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]) and let $A$ be its operator, $a(u,v)=(Au,v)$. Then $$\alpha\|u\|\le\|Au\|\le M\|u\|\qquad\text{for every }u\in H,$$ so $A$ is injective and bounded below with constant $\alpha$ in the sense of [[def-bounded-below-operator]].

## Facts & Assumptions

**Given:** Countable Choice; a real or complex Hilbert space $H$; a bounded coercive sesquilinear form $a$ on $H$ with bound $M\ge0$ and coercivity constant $\alpha>0$; and its operator $A\in\mathcal B(H)$, $a(u,v)=(Au,v)$.

[F1] $A$ exists, is linear and bounded with $a(u,v)=(Au,v)$ for all $u,v$ and $\|A\|\le M$; $a$ is linear in the first argument and conjugate-linear in the second, and $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[lem-form-to-bounded-operator-by-hilbert-riesz]]).

[F2] Cauchy--Schwarz: $|(x,y)|\le\|x\|\,\|y\|$; and for a complex number $z$ one has $\operatorname{Re}z\le|z|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] $T\in\mathcal B(X,Y)$ is bounded below when $\|Tx\|\ge c\|x\|$ for all $x$ and some $c>0$; $\|A\|=\sup_{\|x\|\le1}\|Ax\|$ is a bound for $A$ ([[def-bounded-below-operator]], [[def-operator-norm]]).



## Proof

1.1 Lower bound: for every $u\in H$ the coercivity of $a$ and the identity $a(u,u)=(Au,u)$ give $$\alpha\|u\|^2\le\operatorname{Re}a(u,u)=\operatorname{Re}(Au,u)\le|(Au,u)|\le\|Au\|\,\|u\|.$$ If $u\ne0$ divide by $\|u\|$; if $u=0$ both sides vanish. Hence $\alpha\|u\|\le\|Au\|$ for every $u\in H$. [F1, F2, algebra]

1.2 Upper bound: $\|Au\|\le\|A\|\,\|u\|\le M\|u\|$ for every $u$, since $\|A\|\le M$. [F1, F3]

2.1 Consequences: by step 1.1, $Au=0$ forces $\alpha\|u\|\le0$, hence $\|u\|=0$ and $u=0$, so $A$ is injective; together with step 1.1 this says exactly that $A$ is bounded below with constant $\alpha$, while step 1.2 supplies the upper bound, so $\alpha\|u\|\le\|Au\|\le M\|u\|$ for every $u\in H$. [F1, F3, step 1.1, step 1.2] ∎ 