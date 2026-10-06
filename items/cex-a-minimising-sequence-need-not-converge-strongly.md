---
id: cex-a-minimising-sequence-need-not-converge-strongly
kind: counterexample
title: "A minimising sequence need not converge strongly"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-direct-method-in-a-reflexive-banach-space, def-proper-coercive-and-weakly-lower-semicontinuous-functional, def-square-summable-family-on-an-arbitrary-index-set, cor-ell-p-duality-by-counting-measure, def-weak-convergence-of-nets-and-sequences, lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence, def-axiom-of-choice, thm-reflexivity-of-lp-for-one-less-p-less-infinity, rem-ell-p-is-l-p-of-counting-measure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Example 13.4, printed p. 296"
    - title: "Viktor Grigoryan, Math 246B Partial Differential Equations, UCSB 2011 (complete 31-page course notes)"
      url: "https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf"
      locator: "Section 4.1, printed p. 27"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**Counterexample.** Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H=\ell^2(\mathbb N,\mathbb R)$, let $B=\{u\in H:\|u\|\le1\}$ be its closed unit ball and let
$$I(u)=\sum_{j\ge0}\frac{1}{j+1}u_j^2\qquad(u\in H).$$
Then $I$ is nonnegative, convex and continuous, $I(0)=0$, and $u_k:=e_k$ is a minimising sequence for $\inf_BI=0$ with $I(e_k)=1/(k+1)\to0$; moreover $e_k\rightharpoonup0\in B$ and $0$ is the unique minimiser of $I$ on $B$, but $\|e_k-0\|=1$ for every $k$, so no subsequence of the minimising sequence converges strongly to the minimiser. The compactness recovered in the direct method is therefore genuinely weak compactness ([[thm-direct-method-in-a-reflexive-banach-space]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; the real Hilbert space $H=\ell^2(\mathbb N,\mathbb R)$ ([[def-square-summable-family-on-an-arbitrary-index-set]]), its coordinate vectors $e_k$, namely the family that is $1$ at $k$ and $0$ elsewhere, its closed unit ball $B=\{u\in H:\|u\|\le1\}$, and the functional $I(u)=\sum_{j\ge0}u_j^2/(j+1)$. The counting-measure dictionary [[rem-ell-p-is-l-p-of-counting-measure]] identifies $H$ with real $L^2(\#)$, which is reflexive (and thus Banach) by [[thm-reflexivity-of-lp-for-one-less-p-less-infinity]] under Countable Choice, supplied here by AC; the series pairing is its inner product.

[F1] The series defining $I$ converges absolutely for every $u\in H$ because $0\le u_j^2/(j+1)\le u_j^2$ and $\sum_ju_j^2=\|u\|^2<\infty$; moreover $|I(u+v)-I(u)|\le2\|u\|\|v\|+\|v\|^2$, so $I$ is continuous, and $I$ is convex and nonnegative ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F2] Each coordinate vector satisfies $e_k\in H$, $\|e_k\|=1$ and $e_k\rightharpoonup0$: by the duality of $\ell^p$ and $\ell^q$ every bounded linear functional on $\ell^2$ is $\Lambda(a)=\sum_ka_kb_k$ for a unique $b\in\ell^2$ ([[cor-ell-p-duality-by-counting-measure]]), so $\Lambda(e_k)=b_k$, and $b_k\to0$ because a square-summable family has small tails, that is, for every $\varepsilon>0$ there is a finite $F$ with $\sum_{k\notin F}|b_k|^2<\varepsilon$ ([[def-square-summable-family-on-an-arbitrary-index-set]]), whence $|b_k|^2<\varepsilon$ for every $k$ beyond all elements of $F$; weak convergence means convergence against every bounded linear functional ([[def-weak-convergence-of-nets-and-sequences]]).

[F3] In the direct method the compactness recovered is weak sequential compactness: a norm-bounded sequence in a reflexive Banach space has a weakly convergent subsequence ([[lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence]]), and the limit need not be a strong limit ([[thm-direct-method-in-a-reflexive-banach-space]], [[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]).

## Counterexample

**Proof technique:** direct computation along the standard basis.

1.1 $I$ is nonnegative, convex and continuous. Nonnegativity and convexity are immediate from the formula. For continuity, expanding the squares gives $I(u+v)-I(u)=\sum_j(2u_jv_j+v_j^2)/(j+1)$, and by Cauchy-Schwarz, $\sum_j|2u_jv_j|/(j+1)\le2(\sum_ju_j^2)^{1/2}(\sum_jv_j^2)^{1/2}=2\|u\|\|v\|$ while $\sum_jv_j^2/(j+1)\le\|v\|^2$; hence $|I(u+v)-I(u)|\le2\|u\|\|v\|+\|v\|^2\to0$ as $v\to0$. [F1, algebra]

1.2 The minimising sequence. The point $0\in B$ has $I(0)=0$, and $I\ge0$, so $\inf_BI=0$. By [F2] the vectors $e_k$ lie in $B$ and satisfy $I(e_k)=1/(k+1)\to0$, so $(e_k)$ is a minimising sequence for $\inf_BI$. [F1, F2, algebra]

2.1 The unique minimiser. If $u\in B$ has $I(u)=0$, then $u_j^2/(j+1)=0$ for every $j$, hence $u_j=0$ for every $j$ and $u=0$. So $0$ is the unique minimiser of $I$ on $B$. [step 1.1, algebra]

3.1 No strong convergence of the minimising sequence. By [F2] one has $e_k\rightharpoonup0$ with $\|e_k\|=1$ for every $k$, so $\|e_k-0\|=1$ does not tend to $0$; a fortiori no subsequence of $(e_k)$ converges in norm to $0$, the unique minimiser of step 2.1. [F2, step 2.1]

4.1 Conclusion. The bounded minimising sequence $(e_k)$ converges weakly to $0$ by [F2], but no subsequence converges in norm to the unique minimiser by step 3.1. Thus the weak subsequence conclusion described in [F3], under that theorem's stated principles, cannot be upgraded to strong convergence of minimising sequences. No additional extraction is needed for this explicit witness. [F2, F3, step 1.2, step 3.1] ∎
