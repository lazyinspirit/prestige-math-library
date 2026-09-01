---
id: thm-complete-nakayama-lemma
kind: theorem
title: "Complete Nakayama lemma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separated-and-complete-filtered-module, def-dependent-choice]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 22.28"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.96.12"
      url: "https://stacks.math.columbia.edu/tag/00M9"
pipeline_run: null
---

## Statement

Assume the Axiom of Dependent Choice.

Let $R$ be a commutative ring, let $I \subseteq R$ be an ideal, and let $M$ be
an $R$-module. Assume that $R$ is $I$-adically complete and that $M$ is
$I$-adically separated.

If $m_1,\dots,m_r \in M$ have images that generate $M/IM$ as an
$R/I$-module, then $m_1,\dots,m_r$ generate $M$ as an $R$-module.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I \subseteq R$, an $R$-module $M$
with $R$ $I$-adically complete and $M$ $I$-adically separated, and elements
$m_1,\dots,m_r \in M$ whose classes generate $M/IM$.

[L1] An $I$-adically complete module is identified with the inverse limit of its
quotients, and separated means $\bigcap_{n \ge 0} I^nM=0$
([[def-separated-and-complete-filtered-module]]).

## Proof

**Proof technique:** direct.

1.1 Let $N:=Rm_1+\cdots+Rm_r$. We prove $M=N$. Fix $x \in M$. Since the classes of the $m_i$ generate $M/IM$, choose coefficients $a_{i,0}\in R$ and an element $x_1 \in IM$ such that $$x=\sum_{i=1}^r a_{i,0}m_i + x_1.$$ [given, choose]

2.1 Suppose $x_n \in I^nM$ has been constructed. Because multiplication by elements of $I^n$ shows that the classes of the $m_i$ also generate $I^nM/I^{n+1}M$, choose coefficients $a_{i,n}\in I^n$ and $x_{n+1}\in I^{n+1}M$ such that $$x_n=\sum_{i=1}^r a_{i,n}m_i + x_{n+1}.$$ Inductively, for every $N \ge 0$, $$x=\sum_{n=0}^N \sum_{i=1}^r a_{i,n}m_i + x_{N+1}$$ with $x_{N+1}\in I^{N+1}M$. [step 1.1, choose]

3.1 For each $i$, the partial sums $$A_{i,N}:=\sum_{n=0}^N a_{i,n}$$ form a Cauchy sequence in the $I$-adic topology on $R$, because $A_{i,N'}-A_{i,N}\in I^{N+1}$ for $N' \ge N$. Since $R$ is complete, there is $A_i \in R$ with $$A_i-A_{i,N}\in I^{N+1}$$ for every $N$. [L1, step 2.1, choose]

4.1 Set $$y:=\sum_{i=1}^r A_im_i \in N.$$ Using the identity in step 2.1, $$x-y=\left(x-\sum_{i=1}^r A_{i,N}m_i\right)-\sum_{i=1}^r (A_i-A_{i,N})m_i.$$ The first term lies in $I^{N+1}M$ because it equals $x_{N+1}$, and the second term also lies in $I^{N+1}M$ because each $A_i-A_{i,N}\in I^{N+1}$. Hence $x-y\in I^{N+1}M$ for every $N$. By separatedness and [L1], $$x-y \in \bigcap_{N\ge 0} I^{N+1}M = 0,$$ so $x=y \in N$. [L1, step 2.1, step 3.1, algebra]

5.1 Since every $x \in M$ lies in $N$, one has $M=N$, so $m_1,\dots,m_r$ generate $M$. [step 4.1] ∎
