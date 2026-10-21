---
id: lem-ip-concave-modulus-hilbert-ball-intersection
kind: lemma
title: Concave-modulus intersection of Hilbert balls
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-projection-onto-a-nonempty-closed-convex-set
  - thm-hilbert-projection-variational-characterization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Yoav Benyamini and Joram Lindenstrauss, Geometric Nonlinear Functional
        Analysis, Volume 1
      url: https://doi.org/10.1090/coll/048
      locator: Chapter 1, complete Proposition 1.13, Proposition 1.13′ and Lemma 1.14
        proofs, printed pp.18–21; public OCR reading copy
        https://www.scribd.com/document/671784162/Analisis-Funcional-Beyamini-Lindenstrauss.
    - title: F. Grünbaum and E. H. Zarantonello, On the extension of uniformly
        continuous mappings
      url: https://doi.org/10.1307/mmj/1028999906
      locator: Original attribution in Benyamini–Lindenstrauss Chapter 1 historical
        notes, printed p.33. The original article was identified but its full
        PDF was not retrieved; the complete argument below is local.
---

## Statement

Assume the Axiom of Choice. Let $H_1,H_2$ be real Hilbert spaces, let $I$ be any set, let $x\in H_1$, and let $(x_i)_{i\in I}\subset H_1$ and $(y_i)_{i\in I}\subset H_2$. Let $\omega:[0,\infty)\to[0,\infty)$ be continuous, nondecreasing and concave, with $\omega(0)=0$. If
$$\|y_i-y_j\|\le\omega(\|x_i-x_j\|)\qquad(i,j\in I),$$
then
$$\bigcap_{i\in I}\overline B\bigl(y_i,\omega(\|x_i-x\|)\bigr)\ne\varnothing.$$
The intersection over an empty index set means all of $H_2$.

## Statement references

[[thm-projection-onto-a-nonempty-closed-convex-set|Existence of Hilbert projections under Countable Choice.]]

[[thm-hilbert-projection-variational-characterization|The projection variational inequality.]]

## Facts & Assumptions

**Given:** the Hilbert spaces, points, index set and modulus in the Statement.

[F1] Every nonempty closed convex Hilbert set has a unique nearest point under Countable Choice, and if $p$ is nearest to zero, then $\langle p,z-p\rangle\ge0$ for every point $z$ of the set. ([[thm-projection-onto-a-nonempty-closed-convex-set]], [[thm-hilbert-projection-variational-characterization]])

[A1] The Axiom of Choice implies Countable Choice and supplies the countable near-supremum selections used below. ([[def-axiom-of-choice]])

## Proof

**Given:** the data in the Statement.

1.1 For a nonnegative function $\delta$ with $\delta(0)=0$, consider the finite weighted inequality $\sum_{i,j}a_ia_j[\delta(\|v_i\|)^2+\delta(\|v_j\|)^2-\delta(\|v_i-v_j\|)^2]\ge0$ for Hilbert vectors $v_i$ and nonnegative scalars $a_i$. The function $\delta(t)=t$ satisfies it, since the sum is $2\|\sum_i a_iv_i\|^2$. Each truncated function $\delta_A(t)=\min\{t,A\}$, $A>0$, also satisfies it. Indeed, for the subsum with BOTH $\|v_i\|,\|v_j\|<A$, replacing the negative truncated-distance square by the negative full-distance square can only decrease the sum, and this subsum is then $2\|\sum_{\|v_i\|<A}a_iv_i\|^2\ge0$. Every remaining summand is separately nonnegative, because at least one of its two positive squares is $A^2$ while its negative square is at most $A^2$. The property is closed under pointwise limits, and under taking $\delta=(\sum_{k=1}^N c_k\delta_k^2)^{1/2}$ with $c_k\ge0$, since the weighted expression is linear in $\delta^2$. [given, construct, algebra]

2.1 The function $\eta(t)=\omega(\sqrt t)^2$ is nondecreasing, continuous, zero at zero and concave. Here is a proof that covers nonsmooth moduli. Interpolate $\omega$ on grids $0,1/n,2/n,\ldots,n$ and extend constantly after $n$; these concave nondecreasing polygonal functions converge pointwise to $\omega$. On each affine piece $\omega_n(r)=a+br$, its slope $b$ is nonnegative and its intercept $a$ is nonnegative because concavity and $\omega_n(0)=0$ imply $\omega_n(r)\ge r\omega_n'(r)$. Thus $\omega_n(\sqrt t)^2=a^2+2ab\sqrt t+b^2t$ is concave on that piece. At a junction its one-sided derivatives are $\omega_n(r)b/r$, so the slope drops when $b$ drops. Continuity at zero then proves global concavity for $\eta_n$, and passing to the pointwise limit proves it for $\eta$. Interpolate $\eta$ on the same type of grids and flatten the final slope to zero. Every such polygonal $\eta_n$ is a finite sum $\sum_k c_k\min\{t,t_k\}$ with $c_k\ge0$: take $c_k$ to be the decrease of slope at the breakpoint $t_k$. Hence $\sqrt{\eta_n(t^2)}=(\sum_k c_k\min\{t,\sqrt{t_k}\}^2)^{1/2}$ has step 1.1's property. Passing to the limit gives that property for $\omega(t)=\sqrt{\eta(t^2)}$. [step 1.1, given, construct, algebra]

3.1 First suppose the index set is finite and nonempty. If $\omega$ is identically zero, the pairwise hypothesis makes all the $y_i$ equal and their common value works. Otherwise $\omega(t)>0$ for every $t>0$: if $\omega(t_*)=0$ with $t_*>0$, monotonicity makes it zero on $[0,t_*]$, and concavity bounds every subsequent slope by zero, forcing it to be identically zero. If some $x_i=x$, then $y=y_i$ works directly by the pairwise hypothesis. In the remaining case all $r_i=\|x_i-x\|$ and $b_i=\omega(r_i)$ are positive. In the finite-dimensional affine span of the $y_i$, minimize $h(y)=\max_i\|y-y_i\|^2/b_i^2$. A minimum exists because this continuous function tends to infinity with $\|y\|$ in that span; its perpendicular projection from $H_2$ never increases any distance. Let $y$ be a minimizer and let $J$ be its active set. The origin belongs to the convex hull of $(y-y_i)/b_i^2$, $i\in J$: otherwise that finite convex hull has a nonzero nearest point $z$, whose variational inequality gives $\langle z,(y-y_i)/b_i^2\rangle\ge\|z\|^2>0$ for every active $i$. Moving a sufficiently small distance in direction $-z$ strictly decreases all active functions and keeps the finitely many inactive ones below the old maximum, a contradiction. [A1, F1, step 2.1, given, choose, algebra]

4.1 Choose nonnegative coefficients $\beta_i$, summing to one over $J$, with $\sum_{i\in J}\beta_i(y-y_i)/b_i^2=0$, and normalize $a_i=(\beta_i/b_i^2)/(\sum_{j\in J}\beta_j/b_j^2)$. Then $\sum a_i=1$ and $y=\sum a_iy_i$. Write $h(y)=\lambda^2$; every active index has $\|y-y_i\|^2=\lambda^2b_i^2$. The Hilbert variance identity gives $\sum_{i,j\in J}a_ia_j\|y_i-y_j\|^2=2\sum_{i\in J}a_i\|y_i-y\|^2=2\lambda^2\sum_i a_ib_i^2$. Apply the pairwise hypothesis and step 2.1's weighted inequality to $v_i=x_i-x$. They bound that same sum above by $\sum_{i,j}a_ia_j\omega(\|v_i-v_j\|)^2\le2\sum_i a_i\omega(\|v_i\|)^2=2\sum_i a_ib_i^2$. The latter scalar is positive, so $\lambda\le1$. The minimizer therefore belongs to EVERY target ball, proving finite intersection. [step 2.1, step 3.1, given, algebra]

5.1 Now let $I$ be arbitrary and nonempty, and fix $i_0\in I$. For every finite $J\subset I$ containing $i_0$, the set $C_J=\bigcap_{i\in J}\overline B(y_i,b_i)$ is nonempty by step 4.1, closed and convex. Let $p_J$ be its nearest point to zero by [F1]. Since $C_J$ lies in the fixed ball with center $y_{i_0}$ and radius $b_{i_0}$, the numbers $\|p_J\|^2$ have a finite supremum $D$. By [A1], choose finite $J_n$ with $\|p_{J_n}\|^2>D-1/n$ and replace them by their cumulative unions, preserving this inequality. They are increasing. For $m\ge n$, [F1] gives $\|p_{J_m}-p_{J_n}\|^2\le\|p_{J_m}\|^2-\|p_{J_n}\|^2\le D-\|p_{J_n}\|^2$, so they form a Cauchy sequence and converge to a point $p\in H_2$. [A1, F1, step 4.1, given, choose, algebra]

6.1 For any fixed $i\in I$, let $q_n=p_{J_n\cup\{i\}}$. Again [F1] gives $\|q_n-p_{J_n}\|^2\le\|q_n\|^2-\|p_{J_n}\|^2\le D-\|p_{J_n}\|^2\to0$. Hence $q_n\to p$; since every $q_n$ lies in the closed ball $\overline B(y_i,b_i)$, so does $p$. This works for each $i$ without enumerating $I$, and proves the required full intersection. If $I$ is empty, zero belongs to its intersection by convention. This proves all cases. [F1, step 5.1, algebra] ∎
