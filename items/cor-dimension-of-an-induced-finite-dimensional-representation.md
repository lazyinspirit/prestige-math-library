---
id: cor-dimension-of-an-induced-finite-dimensional-representation
kind: corollary
title: "The dimension of an induced finite-dimensional representation is $[G:H]\\dim W$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dimension, def-finite-dimensional-representation-of-a-group-over-a-field, prop-induced-module-decomposes-over-a-left-transversal]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Remark 4.30"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 4.3.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Statement

Let $k$ be a field, let $G$ be a finite group, let $H\le G$, and let $W$ be a
finite-dimensional representation of $H$ over $k$. Then
$\operatorname{Ind}_H^G W$ is a finite-dimensional representation of $G$ over
$k$ and

$$
\dim_k\operatorname{Ind}_H^G W=[G:H]\dim_k W.
$$

## Facts & Assumptions

**Given:** A field $k$, a finite group $G$, a subgroup $H\le G$, and a
finite-dimensional representation $W$ of $H$ over $k$.

[F1] A left transversal identifies $\operatorname{Ind}_H^G W$ with a direct sum
of one copy of $W$ for each left coset of $H$ in $G$
([[prop-induced-module-decomposes-over-a-left-transversal]]).

[F2] The dimension of a finite-dimensional vector space is the cardinality of
any finite basis ([[def-dimension]]).

[F3] A finite-dimensional representation is a finite-dimensional vector space
with a linear group action ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Choose a left transversal $T=\{t_1,\dots,t_n\}$ for $G/H$; since $G$ is finite, $n=[G:H]$. By [F1], $\operatorname{Ind}_H^G W\cong\bigoplus_{i=1}^n W$ as $k$-vector spaces. [F1, given, choose]

2.1 Let $B$ be a basis of $W$ with $|B|=\dim_k W$ by [F2]. The vectors supported in one summand and equal there to a basis element of $B$ form a basis of $\bigoplus_{i=1}^n W$, so that direct sum has $n\dim_k W$ basis vectors. Hence $\dim_k\operatorname{Ind}_H^G W=n\dim_k W=[G:H]\dim_k W$. [F2, step 1.1, algebra]

3.1 The induced module already carries a $k$-linear $G$-action by its definition, and step 2.1 shows that its underlying vector space is finite-dimensional. Therefore it is a finite-dimensional representation of $G$ over $k$ in the sense of [F3]. [F3, step 2.1]

4.1 Steps 2.1 and 3.1 prove the stated dimension formula and finite-dimensionality claim. [step 2.1, step 3.1] ∎
