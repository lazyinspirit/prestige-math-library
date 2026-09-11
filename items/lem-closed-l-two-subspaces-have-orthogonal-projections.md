---
id: "lem-closed-l-two-subspaces-have-orthogonal-projections"
kind: "lemma"
title: "Closed l two subspaces have orthogonal projections"
deps: ["def-l-two-operator-conventions-for-weak-mixing", "thm-complex-lp-completeness-and-almost-everywhere-subsequences", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Axler 8.28 p.226, 8.37–8.40 pp.228–229
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $H$ be complex $L^2(\mu)$ or a closed linear subspace of it, and let $M$ be a closed linear subspace of $H$. There is a unique linear contraction $P_M:H\to H$ such that, for every $f\in H$, $P_Mf\in M$ and $f-P_Mf\perp M$. Moreover,
$$\|f-P_Mf\|=\inf_{g\in M}\|f-g\|,\qquad H=M\oplus M^\perp.$$
Here the orthogonal complement is taken inside $H$.

## Facts & Assumptions

[F1] The complex pairing is positive definite and sesquilinear, with norm $\|f\|_2$ and Cauchy–Schwarz [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F2] Complex $L^2$ is complete under countable choice [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]].

[F3] AC supplies a choice function on a family of nonempty sets [[def-axiom-of-choice]].

[F4] Orthogonality and contraction use the local operator conventions [[def-l-two-operator-conventions-for-weak-mixing]].

## Proof

**Given:** AC, $H$, $M$ and $f$ as in the statement.

1.1 Since $0\in M$, $d=\inf_{g\in M}\|f-g\|$ exists in $[0,\|f\|]$. For every $n\in\mathbb N$ the set $\{g\in M:\|f-g\|^2<d^2+1/(n+1)\}$ is nonempty by the defining property of the infimum. AC selects $g_n$ in these sets, including $g_0$. It also supplies the countable choice assumed in complex completeness. [F3, given]

2.1 Expanding the pairing gives $\|u+v\|^2+\|u-v\|^2=2\|u\|^2+2\|v\|^2$: the two cross terms cancel. Apply this to $u=f-g_n$, $v=f-g_m$. Since $(g_n+g_m)/2\in M$, it follows that $\|g_n-g_m\|^2\le2\|f-g_n\|^2+2\|f-g_m\|^2-4d^2<2/(n+1)+2/(m+1)$. Thus $(g_n)_{n\in\mathbb N}$ is Cauchy. [F1, step 1.1]

3.1 Completeness gives a norm limit in $L^2$. Closedness of $H$, then of $M$ in $H$, puts this limit $g$ in $M$. The triangle inequality implies $|\|f-g_n\|-\|f-g\||\le\|g_n-g\|$, so $\|f-g\|=d$. This reasoning applies equally when $H$ is the full space. [F2, step 2.1, given]

4.1 Set $z=f-g$. For $h\in M$ and real $t$, minimality gives $0\le\|z-th\|^2-\|z\|^2=-2t\operatorname{Re}\langle z,h\rangle+t^2\|h\|^2$. Dividing separately for positive and negative $t$ and letting $t\to0$ makes the real part zero. Replacing $h$ by $ih\in M$ makes the imaginary part zero because $\langle z,ih\rangle=-i\langle z,h\rangle$. Hence $z\perp M$. [F1, F4, step 3.1]

5.1 If $g'$ also lies in $M$ with $f-g'\perp M$, then $g-g'\in M\cap M^\perp$; its squared norm is zero, so $g=g'$. Define $P_Mf=g$. Conversely any such orthogonal decomposition minimizes distance: for $h\in M$, expansion yields $\|f-h\|^2=\|f-g\|^2+\|g-h\|^2\ge\|f-g\|^2$. Thus it has exactly the required distance property. [F1, step 4.1]

6.1 For $a,b\in\mathbb C$ and $f_1,f_2\in H$, the vector $aP_Mf_1+bP_Mf_2$ lies in $M$, and its difference from $af_1+bf_2$ is orthogonal to $M$ by sesquilinearity. Uniqueness gives linearity. Orthogonal expansion gives $\|f\|^2=\|P_Mf\|^2+\|f-P_Mf\|^2$, proving contraction. Pairing with each fixed $h\in M$ is continuous by Cauchy–Schwarz, so $M^\perp$ is closed; it is a subspace by linearity. Each $f$ has the displayed decomposition, and its uniqueness follows from $M\cap M^\perp=\{0\}$. When $M=\{0\}$ this gives $P_M=0$, and when $M=H$ it gives $P_M=I$, including the zero-space case. [F1, F4, step 5.1] ∎
