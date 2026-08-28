---
id: ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval
kind: example
title: "The Dirichlet function satisfies Lusin's conclusion without being continuous anywhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-rationals-countable, thm-finite-and-countable-subadditivity-of-measures, prop-measure-monotonicity, def-open-and-closed-in-r, lem-q-and-irrationals-dense-r]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Example 5.16"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Example

Let $D:=\mathbf 1_{\mathbb Q \cap [0,1]}$ on $[0,1]$. Then for every
$\varepsilon>0$ there is a closed set $F \subseteq [0,1]$ with
$\lambda([0,1]\setminus F)<\varepsilon$ such that $D|_F$ is continuous, even
though $D$ is nowhere continuous on $[0,1]$.
## Facts & Assumptions

**Given:** The Dirichlet function $D:=\mathbf 1_{\mathbb Q \cap [0,1]}$ and a real $\varepsilon>0$.

[L1] The rationals are countable. ([[thm-rationals-countable]])

[L2] For measurable $(E_k)$ one has $\mu(\bigcup_k E_k)\le\sum_{k=0}^\infty\mu(E_k)$. ([[thm-finite-and-countable-subadditivity-of-measures]])

[L3] If $A\subseteq B$ are measurable, then $\lambda(A)\le\lambda(B)$. ([[prop-measure-monotonicity]])

[L4] A set is closed when its complement is open. ([[def-open-and-closed-in-r]])

[L5] Both the rationals and the irrationals are dense in $\mathbb R$. ([[lem-q-and-irrationals-dense-r]])

## Verification

**Proof technique:** direct.

1.1 By [L1], enumerate the rationals in $[0,1]$ as $(q_j)_{j \ge 1}$. For each $j$, choose an open interval $U_j$ centred at $q_j$ with length below $\varepsilon 2^{-j-1}$, and put $U:=\bigcup_{j \ge 1} U_j$. Then $\mathbb Q \cap [0,1] \subseteq U$, and [L2] gives $$\lambda(U)\le\sum_{j=1}^\infty \lambda(U_j)<\varepsilon.$$ [L1, L2, choose]

2.1 Put $F:=[0,1]\setminus U$. Since $U$ is open, [L4] makes $F$ closed, and $F$ contains no rationals. Therefore $D|_F=0$, so the restriction is continuous. Also $[0,1]\setminus F=U\cap[0,1]\subseteq U$, so [L3] and step 1.1 give $\lambda([0,1]\setminus F)\le\lambda(U)<\varepsilon$. [step 1.1, L3, L4]

3.1 By [L5], every neighbourhood of every point of $[0,1]$ meets both $\mathbb Q$ and its complement, so $D$ is nowhere continuous on $[0,1]$. Thus step 2.1 is about the restriction $D|_F$, not continuity of $D$ at the points of $F$. [step 2.1, L5] ∎
