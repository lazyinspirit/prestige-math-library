---
id: lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set
kind: lemma
title: "Assuming countable choice, simple functions are continuous on a large closed core"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-simple-function-and-canonical-representation, thm-lebesgue-inner-regularity-by-closed-and-compact-sets, thm-finite-and-countable-subadditivity-of-measures]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 5.15"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---
## Statement
Assume the Axiom of Countable Choice.

Let $n \ge 1$, let $E \subseteq \mathbb R^n$ be Lebesgue measurable with
$\lambda_n(E)<+\infty$, and let $s:E \to \mathbb R$ be a simple measurable
function. Then for every $\varepsilon>0$ there is a closed set
$F \subseteq E$ such that $\lambda_n(E\setminus F)<\varepsilon$ and
$s|_F$ is continuous.

## Facts & Assumptions
**Given:** The Axiom of Countable Choice, a Lebesgue measurable set $E \subseteq \mathbb R^n$ of finite measure, a simple measurable function $s:E \to \mathbb R$, and a real $\varepsilon>0$.

[L1] If the distinct values of $s$ are $c_1,\dots,c_m$ and $E_j:=s^{-1}(\{c_j\})$, then the sets $E_j$ are measurable, pairwise disjoint, their union is $E$, and $s=\sum_{j=1}^m c_j \mathbf 1_{E_j}$. ([[def-simple-function-and-canonical-representation]])

[L2] Assuming countable choice, every Lebesgue measurable subset of $\mathbb R^n$ has compact subsets of arbitrarily close measure from inside. ([[thm-lebesgue-inner-regularity-by-closed-and-compact-sets]])

[L3] For measurable $(A_k)$ one has $\mu(\bigcup_k A_k)\le\sum_{k=0}^\infty\mu(A_k)$. ([[thm-finite-and-countable-subadditivity-of-measures]])

## Proof

**Proof technique:** direct.

1.1 Let $c_1,\dots,c_m$ be the distinct values of $s$, and let $E_j:=s^{-1}(\{c_j\})$. By [L1], the sets $E_j$ are measurable, pairwise disjoint, and cover $E$. For each $j$ choose a compact set $K_j \subseteq E_j$ with $$\lambda_n(E_j\setminus K_j)<\varepsilon/m.$$ This is possible by [L2]. [L1, L2, choose]

2.1 Put $F:=\bigcup_{j=1}^m K_j$. Each $K_j$ is closed in $\mathbb R^n$, so the finite union $F$ is closed and lies in $E$. Also $$E\setminus F=\bigcup_{j=1}^m(E_j\setminus K_j),$$ so [L3] and step 1.1 give $$\lambda_n(E\setminus F)\le\sum_{j=1}^m \lambda_n(E_j\setminus K_j) <\varepsilon.$$ [step 1.1, L3, algebra]

3.1 Fix $x \in F$. By step 1.1, $x$ lies in exactly one $K_j$. In the subspace $F$, the set $K_j=F\setminus\bigcup_{i\ne j}K_i$ is open because the other $K_i$ are closed and finite in number. On that neighbourhood $K_j$, the restriction $s|_F$ is constant with value $c_j$. So $s|_F$ is locally constant at every point of $F$, hence continuous. [step 1.1, step 2.1]

4.1 The closed set $F$ from step 2.1 has $\lambda_n(E\setminus F)<\varepsilon$, and step 3.1 makes $s|_F$ continuous. [step 2.1, step 3.1] ∎
