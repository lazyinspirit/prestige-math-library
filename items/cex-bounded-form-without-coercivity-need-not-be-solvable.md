---
id: "cex-bounded-form-without-coercivity-need-not-be-solvable"
kind: "counterexample"
title: "A bounded form without coercivity need not be solvable"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 5
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-bounded-linear-operator"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-hilbert-space"
  - "def-operator-norm"
  - "thm-lax-milgram"
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
      locator: "§4.5–4.7, the coercivity hypothesis is used essentially in Theorem 4.11 and Theorem 4.22, printed pp. 99–105"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, hypothesis (iii) (strict coercivity) is required for the Lax–Milgram Lemma, printed p. 71"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, ellipticity/coercivity is a hypothesis of Theorem 4.12, printed p. 98"
---

## Statement refuted

Let $H$ be a nonzero real or complex Hilbert space and let $a\equiv0$, so $a$ is a bounded sesquilinear form with bound $M=0$, but $a$ is not coercive: $\operatorname{Re}a(u,u)=0$ for all $u$, so no $\alpha>0$ satisfies $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$ at any $u\ne0$. Let $F\ne0$ be a bounded conjugate-linear functional on $H$. Then the equation $a(u,v)=F(v)$ for all $v\in H$ has no solution, since its left side is identically $0$ while the right side is not. Hence boundedness alone does not imply existence or uniqueness, and the coercivity hypothesis of [[thm-lax-milgram]] cannot be dropped. The same witness shows that the estimate $\|u\|\le\|F\|/\alpha$ has no content without $\alpha>0$.

## Facts & Assumptions

**Given:** A nonzero real or complex Hilbert space $H$; the zero form $a\equiv0$; and a nonzero bounded conjugate-linear functional $F$ on $H$.

[F1] $a\equiv0$ is sesquilinear and bounded with $M=0$; $\operatorname{Re}a(u,u)=0$ for every $u$, so $a$ is coercive with no $\alpha>0$: a nonzero $u$ would give $\alpha\|u\|^2\le\operatorname{Re}a(u,u)=0$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-hilbert-space]]).

[F2] Since $F\ne0$ there is $v_0\in H$ with $F(v_0)\ne0$; also $H\ne\{0\}$ ([[def-bounded-linear-operator]], [[def-operator-norm]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] A solution of $a(u,v)=F(v)$ for all $v\in H$ would in particular satisfy $a(u,v_0)=F(v_0)$ ([[thm-lax-milgram]] records the equation whose hypotheses fail here).



## Proof

1.1 The form is bounded but not coercive: $|a(u,v)|=0\le0\cdot\|u\|\,\|v\|$ shows the bound $M=0$, while for every $u\ne0$ and every $\alpha>0$ one has $\operatorname{Re}a(u,u)=0<\alpha\|u\|^2$. [F1]

1.2 A datum with nonzero value: $F\ne0$ means $\|F\|=\sup_{\|v\|\le1}|F(v)|>0$, so some $v_0$ has $F(v_0)\ne0$. [F2]

2.1 No solution: if $u\in H$ satisfied $a(u,v)=F(v)$ for all $v$, then $0=a(u,v_0)=F(v_0)\ne0$, a contradiction. Hence the equation has no solution, so neither existence nor uniqueness follows from boundedness alone; the estimate $\|u\|\le\|F\|/\alpha$ of [[thm-lax-milgram]] has no content without $\alpha>0$, and the coercivity hypothesis there cannot be dropped. [F1, F3, step 1.2] ∎ 