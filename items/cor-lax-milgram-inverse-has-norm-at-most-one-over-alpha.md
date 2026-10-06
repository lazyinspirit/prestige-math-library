---
id: "cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha"
kind: "corollary"
title: "The Lax--Milgram solution operator has norm at most $1/\\alpha$"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 5
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-bounded-linear-operator"
  - "def-countable-choice"
  - "def-hilbert-space"
  - "def-operator-norm"
  - "def-space-of-bounded-linear-operators"
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
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, the bound $|A^{-1}|\\le1/\\alpha$ implicit in Corollary 5.8 and Remark 8, printed pp. 139–140"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the unnumbered isomorphism estimate in the Lax–Milgram Lemma, printed p. 71, and surjectivity on p. 72; (4.13) is Laugesen’s numbering."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, the bounded inverse statement of Theorem 4.12, printed p. 98"
---

## Statement

Under the hypotheses of [[thm-lax-milgram]], let $\mathcal{F}$ be the space of bounded conjugate-linear functionals on $H$, normed by $\|F\|=\sup_{\|v\|\le1}|F(v)|$, and let $S:\mathcal{F}\to H$ assign to $F$ the unique solution $u$ of $a(u,v)=F(v)$ for all $v$. Then $S$ is well defined and linear, and $$\|S\|\le\frac1\alpha .$$ In particular $\|u\|\le\|F\|/\alpha$ for every $F$, and the estimate is uniform over all data.

## Facts & Assumptions

**Given:** Countable Choice; a real or complex Hilbert space $H$; a bounded coercive sesquilinear form $a$ with constants $M,\alpha$; the normed space $\mathcal F$ of bounded conjugate-linear functionals on $H$ with $\|F\|=\sup_{\|v\|\le1}|F(v)|$; and the solution map $S:\mathcal F\to H$ sending $F$ to the unique $u$ with $a(u,v)=F(v)$ for all $v$.

[F1] Lax--Milgram: for every $F\in\mathcal F$ there is exactly one $u\in H$ with $a(u,v)=F(v)$ for all $v$, and $\alpha\|u\|\le\|F\|$; the form is linear in the first argument ([[thm-lax-milgram]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-hilbert-space]]).

[F2] Bounded operators and operator norm: $\|S\|=\sup\{\|SF\|:\|F\|\le1\}$, and $S$ is bounded with $\|S\|\le1/\alpha$ once $\|SF\|\le\|F\|/\alpha$ for every $F$ ([[def-operator-norm]], [[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]).



## Proof

1.1 $S$ is well defined by [F1]: each $F$ has exactly one solution, so $S$ is a function $\mathcal F\to H$. [F1]

2.1 $S$ is linear: if $u_i=S(F_i)$ and $\lambda$ is a scalar, then for every $v$, first-slot linearity of $a$ gives $a(u_1+u_2,v)=F_1(v)+F_2(v)$ and $a(\lambda u_1,v)=\lambda F_1(v)$; by the uniqueness part of [F1], $S(F_1+F_2)=S(F_1)+S(F_2)$ and $S(\lambda F_1)=\lambda S(F_1)$. [F1, step 1.1, algebra]

3.1 Norm bound: the estimate of [F1] reads $\|S(F)\|\le\|F\|/\alpha$ for every $F\in\mathcal F$; hence $S$ is a bounded linear operator with $\|S\|\le1/\alpha$ by [F2]. The same inequality gives $\|u\|\le\|F\|/\alpha$ for each datum, uniformly. [F1, F2, step 2.1] ∎ 
