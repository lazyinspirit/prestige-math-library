---
id: thm-dani-correspondence-for-badly-approximable-matrices
kind: theorem
title: "Dani correspondence for badly approximable systems of linear forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-diagonal-flow-and-matrix-lattice
  - def-badly-approximable-matrix
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§1–4.7: Dani correspondence and affine approximation"
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§2: lattice-flow conventions"
---

## Statement

Dani's correspondence for systems of linear forms states the following.

Let $m,n\ge1$ and $A\in M_{m,n}(\mathbb R)$. Define
$$c(A):=\liminf_{\substack{q\in\mathbb Z^n\\\|q\|_\infty\to\infty}}\left(\min_{p\in\mathbb Z^m}\|Aq+p\|_\infty\right)^m\|q\|_\infty^n.$$
Then $c(A)>0$ if and only if there is $\varepsilon>0$ such that
$$\|g_tL_Av\|_\infty\ge\varepsilon\qquad(t\ge0,\ v\in\mathbb Z^{m+n}\setminus\{0\}).$$
Equivalently, $A$ is badly approximable exactly when the systole of $g_t\Lambda_A$ is uniformly bounded below for $t\ge0$.

## Statement references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: Dani correspondence and affine approximation.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §2: lattice-flow conventions.


## Facts & Assumptions

**Given:** $m,n\ge1$ and $A\in M_{m,n}(\mathbb R)$. Write $Q=\|q\|_\infty$ and $E=\min_p\|Aq+p\|_\infty$.

[F1] For $v=(p,q)$, $L_Av=(p+Aq,q)$ and $g_tL_Av=(e^{t/m}(p+Aq),e^{-t/n}q)$. [[def-diagonal-flow-and-matrix-lattice]]

[F2] Reduce entries modulo integers: choose $N\in M_{m,n}(\mathbb Z)$ with $A_0=A-N\in[0,1]^{m\times n}$ and set $X=A_0^T$. Then $q^TX=(A_0q)^T$ and $p+Nq$ ranges over $\mathbb Z^m$, so the supplier’s condition is exactly $c(A)>0$. [[def-badly-approximable-matrix]]

## Proof

1.1 If $c(A)>0$, then $E^mQ^n$ is bounded below by a positive constant for every $q\ne0$. The liminf gives the bound outside a finite set of integer $q$. For each remaining $q$, $E>0$, since $E=0$ would also hold for every nonzero integer multiple of $q$ and force the liminf to be zero. Taking the minimum over finitely many exceptions gives a global constant $c_0>0$. [given, F2, algebra]

2.1 Fix $q\ne0$, $p\in\mathbb Z^m$, and set $Q=\|q\|_\infty\ge1$, $E=\|Aq+p\|_\infty$. If $E>Q$, the first block of $g_tL_A(p,q)$ has norm at least $E>1$ for every $t\ge0$. If $0<E\le Q$, choose $t=\frac{mn}{m+n}\log(Q/E)\ge0$, which makes the two block norms equal to $(E^mQ^n)^{1/(m+n)}$. For every $t$, the maximum of the two scaled block norms is at least their weighted geometric mean $(E^mQ^n)^{1/(m+n)}$, since the exponential factors cancel after taking powers $m$ and $n$. Thus for all $t$ and all such vectors the sup norm is at least $\min(1,c_0^{1/(m+n)})$. For $q=0$ and $p\ne0$, the norm is at least $e^{t/m}\ge1$. [step 1.1, F1, algebra]

3.1 Conversely, suppose the uniform lower bound is $\varepsilon>0$. Testing $q=0$ and a unit integer $p$ shows $\varepsilon\le1$. For every $q\ne0$, take $p$ attaining the minimum $E$. If $E=0$, the nonzero vector $(p,q)$ has norm $e^{-t/n}Q\to0$, contradicting the uniform lower bound. Hence $E>0$. If $E\le Q$, the balancing time in step 2.1 gives $E^mQ^n\ge\varepsilon^{m+n}$. If $E>Q$, then $E^mQ^n>Q^{m+n}\ge1\ge\varepsilon^{m+n}$. The same lower bound holds for every nonzero $q$, so its liminf is positive. [step 2.1, F1, algebra] ∎

