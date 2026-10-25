---
id: thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces
kind: theorem
title: "On a finite measure space, uniform integrability is equivalent to L^1-boundedness plus uniform absolute continuity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-uniformly-integrable-family, def-l-one-of-a-measure, def-integral-over-a-measurable-set]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 7.21"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Exercises 23 and 24"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space with $\mu(X)<+\infty$, and let
$\mathcal F \subseteq L^1(\mu)$ be a family of integrable real-valued
functions. Then the following are equivalent:

1. $\mathcal F$ is uniformly integrable;
2. $\sup_{f \in \mathcal F}\int |f|\,d\mu<+\infty$ and for every
   $\varepsilon>0$ there is $\delta>0$ such that
   $\mu(E)<\delta \Rightarrow \sup_{f \in \mathcal F}\int_E|f|\,d\mu<\varepsilon$.

## Facts & Assumptions

**Given:** A finite measure space $(X,\mathcal A,\mu)$ and a family $\mathcal F \subseteq L^1(\mu)$.

[L1] Uniform integrability means that for every $\varepsilon>0$ there is $M>0$ such that $f \in \mathcal F \Rightarrow \int_{\{|f|>M\}}|f|\,d\mu<\varepsilon$. ([[def-uniformly-integrable-family]])

## Proof

**Proof technique:** direct.

1.1 Assume $\mathcal F$ is uniformly integrable. Applying [L1] with $\varepsilon:=1$ gives $M>0$ such that $\int_{\{|f|>M\}}|f|\,d\mu<1$ for every $f \in \mathcal F$. Then $$\int |f|\,d\mu \le \int_{\{|f|\le M\}}|f|\,d\mu+\int_{\{|f|>M\}}|f|\,d\mu \le M\mu(X)+1,$$ so $\mathcal F$ is $L^1$-bounded. [L1, algebra]

1.2 Conversely, assume $\mathcal F$ is $L^1$-bounded by some constant $C$, and assume the stated uniform absolute continuity. Let $\varepsilon>0$, and choose $\delta>0$ such that $\mu(E)<\delta \Rightarrow \sup_{f \in \mathcal F}\int_E|f|\,d\mu<\varepsilon$. Choose $M>C/\delta$. For $f \in \mathcal F$, put $E_f:=\{|f|>M\}$. Then $M\mu(E_f)\le\int |f|\,d\mu\le C$, so $\mu(E_f)<\delta$ and hence $$\int_{\{|f|>M\}}|f|\,d\mu=\int_{E_f}|f|\,d\mu<\varepsilon.$$ Since this bound is uniform in $f$, [L1] holds. [L1, algebra]

2.1 Still under step 1.1, let $\varepsilon>0$. Use [L1] with $\varepsilon/2$ to choose $M>0$ such that $\int_{\{|f|>M\}}|f|\,d\mu<\varepsilon/2$ for every $f \in \mathcal F$, and put $\delta:=\varepsilon/(2M+1)$. If $\mu(E)<\delta$, then for every $f \in \mathcal F$, $$\int_E |f|\,d\mu \le \int_{E \cap \{|f|\le M\}} |f|\,d\mu+\int_{\{|f|>M\}}|f|\,d\mu \le M\mu(E)+\varepsilon/2<\varepsilon.$$ So $\mathcal F$ has the stated uniform absolute continuity. [step 1.1, L1, algebra]

3.1 Steps 1.1 and 2.1 prove that uniform integrability implies clause 2, and step 1.2 proves the converse implication. [step 1.1, step 2.1, step 1.2] ∎
