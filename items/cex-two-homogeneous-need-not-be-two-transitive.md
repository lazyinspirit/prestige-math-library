---
id: cex-two-homogeneous-need-not-be-two-transitive
kind: counterexample
title: "The square-affine group of F_7 is 2-homogeneous but not 2-transitive"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-k-transitive-and-k-homogeneous-actions]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "P. J. Cameron, Permutation Groups, Chapter 2"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/pgbook/"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Statement refuted

Every $2$-homogeneous action is $2$-transitive.

## Facts & Assumptions

**Given:** The subgroup $$G := \{\, x \mapsto ax+b : a \in \{1,2,4\},\ b \in \mathbb F_7 \,\}$$ of the affine group of $\mathbb F_7$.

[L1] A $2$-homogeneous action sends any $2$-element subset to any other, while a $2$-transitive action sends any ordered pair of distinct points to any other ordered such pair ([[def-k-transitive-and-k-homogeneous-actions]]).

## Counterexample

**Proof technique:** direct.

1.1 The nonzero squares in $\mathbb F_7$ are $\{1,2,4\}$, and every nonzero element is either a square or the negative of a square. So for any distinct $x,y,u,v \in \mathbb F_7$, after possibly swapping $u$ and $v$ there is $a \in \{1,2,4\}$ with $a(y-x)=v-u$. Then the affine map $z \mapsto a(z-x)+u$ lies in $G$ and sends $\{x,y\}$ to $\{u,v\}$. Thus the action is $2$-homogeneous. [L1, algebra]

1.2 Every element of $G$ multiplies differences by a square: if $g(z)=az+b$, then $g(y)-g(x)=a(y-x)$ with $a \in \{1,2,4\}$. Since $1$ is a square and $3$ is not, no element of $G$ sends the ordered pair $(0,1)$ to $(0,3)$. So the action is not $2$-transitive. [L1, algebra]

2.1 Step 1.1 gives $2$-homogeneity while step 1.2 denies $2$-transitivity, refuting the statement. [step 1.1, step 1.2] ∎
