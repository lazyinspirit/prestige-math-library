---
id: thm-law-entropy-countable-support-characterization
kind: theorem
title: "Self-mutual-information entropy on countable and non-atomic laws"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-law-entropy-as-self-mutual-information
  - def-measure-theoretic-mutual-information
  - def-standard-borel-space
  - def-polish-space
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-measurability-of-integration-against-a-kernel
  - cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - cor-archimedean-reciprocal
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from the measurable-space KL definition. Enumerating a countable set of atoms uses the stated standard set-theoretic choice base."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapters 1 and 5 §5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Let X have a probability law P on a standard-Borel space. Let $S=\{x:P(\{x\})>0\}$ be its set of atoms. Then S is countable. If $P(S)=1$ and its atom masses are $(p_i)$, the law entropy from [[def-law-entropy-as-self-mutual-information]] is
$$H(X)=\sum_i p_i\ln\frac1{p_i},$$
with value $+\infty$ allowed. If $P(S)<1$, then $H(X)=+\infty$.

## Facts & Assumptions

**Given:** AC and a standard-Borel probability law P.

[A1] AC is inherited through the Radon–Nikodym definition of law entropy. [[def-axiom-of-choice]]

[F1] Law entropy is the KL divergence of the diagonal joint law of $(X,X)$ from $P\otimes P$. [[def-law-entropy-as-self-mutual-information]] [[def-measure-theoretic-mutual-information]]

[F2] A standard-Borel space has a countable algebra separating points, and each singleton is Borel because points are closed in its Polish presentation. The diagonal is the intersection, over the algebra, of measurable sets $(A\times A)\cup(A^c\times A^c)$. [[def-standard-borel-space]] [[def-polish-space]] [[cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras]] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F3] The product probability has the rectangle formula and section-integral formula on product-measurable sets. [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] [[thm-measurability-of-integration-against-a-kernel]]

[F4] For a finite law, Shannon entropy is the sum $-\sum_i p_i\ln p_i$ with $0\ln0=0$. [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]

[F5] For every positive real $t$, there is an integer $n\ge1$ with $1/n<t$. [[cor-archimedean-reciprocal]]

## Proof

**Given:** AC and the standard-Borel probability law P.

1.1 For each positive integer n, there are at most n atoms with mass at least $1/n$, since any n+1 distinct such atoms would have total mass greater than one. For each atom of mass $p>0$, choose n with $1/n<p$ by [F5]; thus S is a countable union of finite sets and is countable. [A1, F5, given, choose]

1.2 Suppose $P(S)=1$ and enumerate the distinct atoms as $(x_i)$ with masses $p_i>0$. The diagonal joint law assigns mass $p_i$ to $(x_i,x_i)$, while $P\otimes P$ assigns mass $p_i^2$. Define $r(x_i,x_i)=1/p_i$ and r=0 elsewhere. For each measurable $C\subseteq E\times E$,
$$\int_C r\,d(P\otimes P)=\sum_{i:(x_i,x_i)\in C}\frac1{p_i}p_i^2=\sum_{i:(x_i,x_i)\in C}p_i=P_{XX}(C).$$
Thus r is the Radon–Nikodym density and the KL integral is $\sum_i p_i\ln(1/p_i)$, including an infinite sum. [A1, F1, F2, given, construct]

2.1 Suppose $P(S)<1$. The set $C=\Delta\setminus(S\times S)$ is measurable, where $\Delta=\{(x,x):x\in E\}$ by [F2]. The diagonal joint law assigns C mass $P(E\setminus S)>0$. Its product-measure section at $x\in S$ is empty; at $x\notin S$ it is $\{x\}$, whose P-mass is zero. By [F3], $(P\otimes P)(C)=0$. Hence $P_{XX}\not\ll P\otimes P$ and [F1] gives $H(X)=+\infty$. [A1, F1, F2, F3, step 1.1]

3.1 The two cases $P(S)=1$ and $P(S)<1$ exhaust all probability laws. Step 1.2 gives the nonnegative countable sum, which agrees on every finite subset with the finite Shannon formula [F4]; step 2.1 gives infinite divergence when there is positive non-atomic mass. [F4, step 1.2, step 2.1] ∎
