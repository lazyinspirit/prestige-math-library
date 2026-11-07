---
id: lem-vwma-produces-short-diagonal-lattice-vectors
kind: lemma
title: "Very well multiplicatively approximable vectors produce exponentially short diagonal-flow lattice vectors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-very-well-multiplicatively-approximable-vector
  - def-lattice-systole
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality"
---

## Statement

Let $n\ge1$ and $y\in\mathbb R^n$ satisfy: for some $\eta>0$, infinitely many distinct $q\in\mathbb Z^n$ admit $p\in\mathbb Z$ with $|q\cdot y+p|\Pi_+(q)\le\Pi_+(q)^{-\eta}$, where $\Pi_+(q)=\prod_i\max(1,|q_i|)$. Put
$$u_y=\begin{pmatrix}1&y^T\\0&I_n\end{pmatrix},\quad \Lambda_y=u_y\mathbb Z^{n+1},\quad g_{\mathbf t}=\operatorname{diag}(e^{\sum_i t_i},e^{-t_1},\ldots,e^{-t_n}).$$
There are $\gamma>0$ and infinitely many distinct $\mathbf t\in\mathbb Z_{\ge0}^n$ with $\sum_i t_i\to\infty$ and
$$\delta_\infty(g_{\mathbf t}\Lambda_y)\le e^{-\gamma\sum_i t_i}.$$

## Statement references

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality.


## Facts & Assumptions

**Given:** $y$ is VWMA and $\delta_\infty$ is the lattice systole.

[F1] VWMA means $|q\cdot y+p|\Pi_+(q)\le\Pi_+(q)^{-\eta}$ for some $\eta>0$ and infinitely many $q,p$. [[def-very-well-multiplicatively-approximable-vector]]

[F2] The systole is the shortest nonzero lattice-vector sup norm. [[def-lattice-systole]]

## Proof

1.1 Discard the finitely many integer vectors with $\Pi_+(q)\le1$; all remaining $q$ are nonzero. For each remaining solution $(p,q)$ in [F1], let $Q=\Pi_+(q)$, $r=Q^{-\eta/(n+1)}$, and choose $t_i\ge0$ by $e^{t_i}=\max(1,|q_i|)/r$. Then $T=\sum_i t_i=\log Q-n\log r$. The lattice vector $u_y(p,q)=(p+q\cdot y,q)$ has, after applying $g_{\mathbf t}$, last $n$ coordinates of absolute value at most $r$. Its first coordinate has absolute value $e^T|p+q\cdot y|=Qr^{-n}|p+q\cdot y|\le r$, since [F1] gives $Q|p+q\cdot y|\le Q^{-\eta}=r^{n+1}$. Hence $\delta_\infty(g_{\mathbf t}\Lambda_y)\le r$. Moreover $r=e^{-\gamma T}$ for $\gamma=\eta/(n+1+n\eta)>0$. [given, F1, F2, algebra]

2.1 The vectors $q$ in [F1] have $Q\to\infty$, hence $T\to\infty$. Replace each real coordinate $t_i$ by its integer part $s_i$. The diagonal operator $g_{\mathbf s}g_{\mathbf t}^{-1}$ has sup-norm operator norm at most $e$, so $\delta_\infty(g_{\mathbf s}\Lambda_y)\le e r$. Since $0\le T-\sum_i s_i<n$, after decreasing the positive exponent, for all sufficiently large $T$ this is at most $e^{-\gamma'\sum_i s_i}$ for some $0<\gamma'<\gamma$. Infinitely many distinct integer vectors result because their coordinate sums tend to infinity. [step 1.1, algebra] ∎

