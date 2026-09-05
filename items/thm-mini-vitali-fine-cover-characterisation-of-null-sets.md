---
id: thm-mini-vitali-fine-cover-characterisation-of-null-sets
kind: theorem
title: "A set is null exactly when every fine cover has arbitrarily cheap countable subfamilies covering it up to a null remainder"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-dependent-choice, def-measure-zero-and-content-zero, def-vitali-cover-and-fine-cover-on-the-line, thm-countable-union-of-null-is-null, thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line, thm-vitali-covering-theorem-for-fine-covers-on-the-line]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian S. Thomson, Vitali Coverings and Lebesgue's Differentiation Theorem"
      url: "https://classicalrealanalysis.info/documents/Thomson-RAE2003-euclid.rae.1149698567.pdf"
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed., Mini-Vitali covering theorem"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]), and hence the
Axiom of Countable Choice ([[def-countable-choice]]).

For a set $E \subseteq \mathbb{R}$, the following are equivalent:

1. $E$ has Lebesgue measure zero;
2. for every fine cover $\mathcal V$ of $E$ by closed intervals and every
   $\varepsilon > 0$, there is a countable subfamily $(I_n)$ of $\mathcal V$
   with
   $$\lambda\!\left(E \setminus \bigcup_{n \ge 1} I_n\right)=0 \qquad\text{and}\qquad \sum_{n \ge 1}|I_n| < \varepsilon.$$

## Facts & Assumptions

**Given:** Dependent Choice (and therefore Countable Choice), the set
$E \subseteq \mathbb{R}$, and a fine cover $\mathcal V$ of $E$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 Assume first that $E$ is null, and let $\varepsilon > 0$. Choose an open set $U \supseteq E$ with $\lambda(U) < \varepsilon$. Restrict $\mathcal V$ to intervals lying in $U$; the restricted family is still a fine cover of $E$. Applying [[thm-vitali-covering-theorem-for-fine-covers-on-the-line]] gives a countable disjoint subfamily $(J_n)$ of $\mathcal V$ with $$\lambda\!\left(E \setminus \bigcup_n J_n\right)=0.$$ Because the $J_n$ lie in $U$ and are disjoint, $$\sum_{n \ge 1} |J_n| \le \lambda(U) < \varepsilon.$$ Thus $(J_n)$ is the required cheap countable subfamily. [given, choose]

1.2 Conversely, assume condition 2. Apply it to the fine cover consisting of all closed intervals with $\varepsilon=1/(2m)$ for each $m \ge 1$. Then there is a countable family $(I_{m,n})_{n \ge 1}$ of closed intervals such that $$\lambda\!\left(E \setminus \bigcup_{n \ge 1} I_{m,n}\right)=0 \qquad\text{and}\qquad \sum_{n \ge 1}|I_{m,n}|<\frac1{2m}.$$ Let $N_m := E \setminus \bigcup_{n \ge 1} I_{m,n}$. Since $N_m$ is null, cover $N_m$ by closed intervals $(K_{m,j})_{j \ge 1}$ of total length $<1/(2m)$. Then the combined family $(I_{m,n})_{n \ge 1} \cup (K_{m,j})_{j \ge 1}$ covers $E$ and has total length $<1/m$. Hence $E$ has elementary measure zero by [[def-measure-zero-and-content-zero]]. Equivalently, $E$ is Lebesgue null by [[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]]. [given, choose]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
