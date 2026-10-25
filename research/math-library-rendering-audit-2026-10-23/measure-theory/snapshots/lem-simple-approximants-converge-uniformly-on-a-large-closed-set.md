---
id: lem-simple-approximants-converge-uniformly-on-a-large-closed-set
kind: lemma
title: "Assuming countable choice, simple approximants to a measurable function can be made uniformly convergent on a large closed set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-measurable-functions-admit-dominated-simple-approximations, thm-egorovs-theorem, thm-lebesgue-inner-regularity-by-closed-and-compact-sets, lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set, thm-finite-and-countable-subadditivity-of-measures]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 5.15"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---
## Statement
Assume the Axiom of Countable Choice.

Let $n \ge 1$, let $E \subseteq \mathbb R^n$ be Lebesgue measurable with
$\lambda_n(E)<+\infty$, and let $f:E \to \mathbb R$ be bounded and measurable.
Then for every $\varepsilon>0$ there are a closed set $F \subseteq E$ and
simple functions $s_m:E \to \mathbb R$ such that

1. $\lambda_n(E\setminus F)<\varepsilon$;
2. each restriction $s_m|_F$ is continuous;
3. $s_m \to f$ uniformly on $F$.

## Facts & Assumptions
**Given:** The Axiom of Countable Choice, a bounded measurable function $f:E \to \mathbb R$ on a finite Lebesgue-measure set $E \subseteq \mathbb R^n$, and a real $\varepsilon>0$.

[L1] Every measurable function admits simple approximations $s_m$ with $|s_m|\le |f|$ for every $m$ and $s_m(x)\to f(x)$ for every $x$. ([[cor-measurable-functions-admit-dominated-simple-approximations]])

[L2] On a finite measure space, almost-everywhere convergence implies almost-uniform convergence. ([[thm-egorovs-theorem]])

[L3] Assuming countable choice, every Lebesgue measurable subset of $\mathbb R^n$ has compact subsets of arbitrarily close measure from inside. ([[thm-lebesgue-inner-regularity-by-closed-and-compact-sets]])

[L4] Every simple measurable function on a finite-measure Lebesgue set is continuous on a large closed core. ([[lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set]])

[L5] For measurable $(A_k)$ one has $\mu(\bigcup_k A_k)\le\sum_{k=0}^\infty\mu(A_k)$. ([[thm-finite-and-countable-subadditivity-of-measures]])

## Proof

**Proof technique:** direct.

1.1 By [L1], choose simple functions $s_m:E \to \mathbb R$ with $|s_m|\le |f|$ and $s_m(x)\to f(x)$ for every $x \in E$. Since $\lambda_n(E)<+\infty$, [L2] gives a measurable set $G \subseteq E$ with $\lambda_n(E\setminus G)<\varepsilon/2$ such that $s_m \to f$ uniformly on $G$. [L1, L2, choose]

1.2 By [L3], choose a compact set $K \subseteq G$ with $\lambda_n(G\setminus K)<\varepsilon/4$. For each $m \ge 1$, apply [L4] to $s_m$ with tolerance $\varepsilon 2^{-m-3}$, obtaining a closed set $F_m \subseteq E$ such that $\lambda_n(E\setminus F_m)<\varepsilon 2^{-m-3}$ and $s_m|_{F_m}$ is continuous. [L3, L4, choose]

2.1 Put $F:=K \cap \bigcap_{m=1}^\infty F_m$. Then $F$ is closed, $F \subseteq K \subseteq G \subseteq E$, and $$E\setminus F \subseteq (E\setminus G)\cup(G\setminus K)\cup\bigcup_{m=1}^\infty(E\setminus F_m).$$ So [L5] together with steps 1.1 and 1.2 gives $$\lambda_n(E\setminus F)<\frac{\varepsilon}{2}+\frac{\varepsilon}{4} +\sum_{m=1}^\infty \varepsilon 2^{-m-3}<\varepsilon.$$ Because $F \subseteq G$, the convergence $s_m \to f$ remains uniform on $F$. And because $F \subseteq F_m$, each $s_m|_F$ is continuous as a restriction of $s_m|_{F_m}$. [step 1.1, step 1.2, L5, algebra]

3.1 The closed set $F$ and the simple approximants $s_m$ satisfy all three assertions. [step 2.1] ∎
