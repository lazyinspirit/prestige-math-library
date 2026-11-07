---
dependency_level: 2
id: lem-fixed-target-divergence-for-decreasing-approximation-radii
kind: lemma
title: "Fixed-target divergence for decreasing approximation radii"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-countable-choice
  - thm-dirichlet-rational-approximation-with-bounded-denominator
  - thm-bezout-identity
  - lem-khintchine-groshev-torus-event-measure-and-independence
  - thm-lebesgue-density-theorem
  - thm-linear-change-of-variables-for-lebesgue-measure
  - lem-primitive-vector-supnorm-shell-count
  - lem-parallel-integer-vectors-share-a-primitive-direction
  - cor-second-borel-cantelli-lemma-under-pairwise-independence
  - def-gcd-of-finite-integer-tuple
proof_strategy: direct
sources:
  references:
    - title: "Mass-transference and metric approximation source proof, with explicit local reconstruction"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "\u00a72.2 fixed-target law; explicit decreasing-radius extension of local covering, overlap and primitive-row arguments"
---

## Statement

Assume Countable Choice. Let $n,m\ge1$, $y\in\mathbb R^m$ and $\delta:\mathbb N\to[0,\infty)$ satisfy that $\delta(q)/q$ is non-increasing and $\sum_q q^{n-1}\delta(q)^m=\infty$. Then for almost every $X\in[0,1)^{n\times m}$ there are pairs $(q,p)$ with unbounded $\|q\|_\infty$ and $\|qX+p-y\|_\infty<\delta(\|q\|_\infty)$. In particular, no monotonicity of $\delta$ itself is required.

## Facts & Assumptions

**Given:** The fixed target, divergent series and decreasing approximation radii.

[A1] Countable Choice supports Lebesgue measure and the countable constructions. [[def-countable-choice]]

[F1] Dirichlet approximation gives a reduced $a/r$, $1\le r\le N$, with $|x-a/r|\le1/(rN)$, and Bezout makes multiplication by $a$ permute residues modulo $r$. [[thm-dirichlet-rational-approximation-with-bounded-denominator]] [[thm-bezout-identity]]

[F2] The torus map $x\mapsto qx$ preserves measure, and independent integer rows have independent translated box events. [[lem-khintchine-groshev-torus-event-measure-and-independence]]

[F3] Almost every point of a measurable set is a density point; linear changes of variables have their determinant scaling. [[thm-lebesgue-density-theorem]] [[thm-linear-change-of-variables-for-lebesgue-measure]]

[F4] In dimension $2$ there are $8\varphi(h)$ primitive rows on shell $h$; in dimension $n\ge3$ there are at least $h^{n-1}/2$. Parallel primitive integer rows differ only by sign. [[lem-primitive-vector-supnorm-shell-count]] [[lem-parallel-integer-vectors-share-a-primitive-direction]] [[def-gcd-of-finite-integer-tuple]]

[F5] Pairwise independent events of divergent total measure occur infinitely often almost surely. [[cor-second-borel-cantelli-lemma-under-pairwise-independence]]

## Proof

1.1 Replace $\delta(q)$ by $\eta(q)=\min(\delta(q),1/4)$. The normalized radii still decrease and the weighted sum still diverges: either clipping occurs infinitely often, when the clipped terms alone diverge, or only finitely often. Put $w_q=\eta(q)^m$; then $a_q=w_q/q^m$ is non-increasing. We shall use the following finite Abel calculation. If nonnegative sequences have prefix sums $\sum_{q\le Q}b_q\le C\sum_{q\le Q}c_q$, then $\sum_{q\le Q}a_qb_q\le C\sum_{q\le Q}a_qc_q$ for every decreasing $a_q\ge0$, by writing the left side as $a_Q B_Q+\sum_{q<Q}(a_q-a_{q+1})B_q$. Lower prefix bounds give the reverse inequality. [given, A1, algebra]

1.2 It remains to prove $n=m=1$. Put $\epsilon=1/32$, $C=4096$, $Q=2^t$, $N=Q/2$, and $R_t=C/Q^2$. In any fixed interval $J$ the union of $|x-a/r|\le1/(rN)$ with $r<\epsilon N$ has measure at most $2\epsilon|J|+O(\log N/N)$: at most $r|J|+3$ relevant centers occur for each $r$, and sum their lengths. Dirichlet [F1], applied in the middle half of $J$, therefore leaves at least $|J|/3$ covered by reduced fractions with $\epsilon N\le r\le N$, for large $t$. Choose $1\le q_0\le r$ with $\|q_0a/r-y\|_{\mathbb T}\le1/(2r)$ and put $q=q_0+r$. Then $\epsilon N\le q\le Q$ and $\|qx-y\|_{\mathbb T}\le1/(2r)+2/N$, so a shifted rational $(p+y)/q$ lies within $R_t$ of $x$. The stated $C$ exceeds the bound obtained by dividing by $q\ge\epsilon N$. [given, F1, algebra, choose]

2.1 For $n\ge3$, use one primitive row per sign pair on each shell. Their box events have measures $(2\eta(h))^m$, their sum diverges by [F4], and they are pairwise independent by [F2] and [F4]. Thus [F5] proves the assertion. For $n=2$, the needed series is $\sum_h\varphi(h)\eta(h)^m$. The elementary bound $\sum_{h\le Q}\varphi(h)\ge cQ^2$ follows by counting coprime pairs: noncoprime pairs in $\{1,\ldots,Q\}^2$ are at most $Q^2\sum_{d\ge2}d^{-2}<3Q^2/4$, since $1/4+\sum_{d\ge3}d^{-2}\le1/4+\int_{2}^{\infty}x^{-2}dx=3/4$. Symmetry counts coprime pairs as $2\sum\varphi(h)-1$. Subtracting the trivial upper bound on a sufficiently small initial fraction of the interval gives $\sum_{h\le Q}h^m\varphi(h)\ge c_m Q^{m+2}$, hence at least $c_m'\sum_{h\le Q}h^{m+1}$. Apply step 1.1 to $a_h=\eta(h)^m/h^m$ and these lower prefix bounds. Divergence of $\sum h\eta(h)^m$ implies divergence of the primitive series. The same independent-row argument proves the case $n=2$. [step 1.1, F2, F4, F5, algebra]

2.2 Suppose $n=1,m>1$. Let $E_q=\{x:\|qx-y\|_{\mathbb T^m,\infty}<\eta(q)\}$. For $r\le q$, put $d=\gcd(q,r)$, $a=q/d$, $b=r/d$. In one coordinate, intersecting interval centers require $|ap'-bp-(a-b)y|\le b\eta(q)+a\eta(r)\le2a\eta(r)$; the last inequality is exactly decreasing $\eta(q)/q$. There are at most $4a\eta(r)+2$ possible integers $ap'-bp$. Bezout gives one representing interval pair modulo the torus per such integer, with overlap length at most $2\eta(q)/a$. Multiplication by $d$ preserves measure. Taking products proves $|E_q\cap E_r|\le C_m(w_qw_r+w_q(d/q)^m)$. The integer counting on the torus includes wrapping intervals by passing to their periodic lifts. [step 1.1, F1, F2, algebra]

2.3 Greedily choose a maximal $2R_t$-separated subfamily of these finitely many relevant centers, retaining only centers inside $J$ with their radius-$R_t$ intervals inside $J$. For large $t$ this still covers the just constructed middle-half subset after tripling. The number of selected centers is between $c|J|/R_t$ and $|J|/(2R_t)$, with absolute constants. Take around each center the smaller interval of radius $r_t=\min(\eta(Q)/(2Q),R_t/4)$ and call their union $U_t$. Decreasing $\eta(q)/q$ implies $r_t\le\eta(q)/(2q)$ whenever $q\le Q$, so every point of $U_t$ satisfies the desired strict approximation. Write $\alpha_t=r_t/R_t$. Then $c'|J|\alpha_t\le|U_t|\le C'|J|\alpha_t$. [step 1.2, step 1.1, construct, algebra]

3.1 The error sum is $B(q)=\sum_{r\le q}(\gcd(q,r)/q)^m=\sum_{s\mid q}\varphi(s)/s^m$. Thus $\sum_{q\le Q}B(q)\le Q\sum_s\varphi(s)/s^{m+1}\le C_mQ$ for $m>1$. In particular $\sum_{q\le Q}q^m B(q)\le C_m Q^{m+1}\le C_m'\sum_{q\le Q}q^m$. Applying step 1.1 to decreasing $a_q=w_q/q^m$ gives $\sum_{q\le Q}w_qB(q)\le C_m'\sum_{q\le Q}w_q$. The overlap sum is consequently at most $C_m''(S_Q^2+S_Q)$, where $S_Q=\sum_{q\le Q}w_q\to\infty$. Cauchy--Schwarz applied to the sum of event indicators on any tail yields $|\limsup E_q|\ge c_m>0$, uniformly in the target and the sequence: for a tail starting at $M$, its first moment is $2^m(S_Q-S_M)$ and the displayed full-prefix bound controls its second moment, then let $Q\to\infty$ and $M\to\infty$. [step 1.1, step 2.2, A1, algebra]

4.1 For any positive integer $b$, $\sum_r\eta(br)^m=\infty$: when $br\le h<b(r+1)$, decreasing normalized radii give $\eta(h)\le(h/(br))\eta(br)\le2\eta(br)$, so convergence on multiples would imply convergence of the entire series. The sequence $r\mapsto\eta(br)$ has decreasing normalized radii. Apply step 3.1 to it, then substitute $x=(z+a)/b$ in each grid cube, with denominator $q=br$. This gives the same positive fraction $c_m$ of the desired set in every grid cube of side $1/b$, for every $b$. A density point of its complement would contradict these fractions as $b\to\infty$, since a grid cube containing it lies in a centered ball of uniformly comparable volume. By [F3], the set is full. [step 3.1, F3, algebra]

5.1 Since $a(q)=\eta(q)/q$ decreases, grouping $q$ between consecutive powers of two compares $\sum_q q a(q)$ with $\sum_tQ^2a(Q)$. The former is $\sum\eta(q)=\infty$, so $\sum_t\alpha_t=\infty$. For $s<t$, the separated fine centers give $|U_s\cap U_t|\le C|J|(\alpha_s\alpha_t+\alpha_t R_t/R_s)$: each interval of $U_s$ meets at most $C(r_s/R_t+1)$ fine intervals, and there are at most $C|J|/R_s$ coarse ones. Since $R_t/R_s=4^{s-t}$, every finite tail of the indicator sums has second moment at most $C'|J|((\sum\alpha_t)^2+\sum\alpha_t)$. Cauchy--Schwarz, followed by the two tail limits, gives $|\limsup U_t|\ge c''|J|$. The denominators used lie in $[\epsilon Q/2,Q]$, so they become unbounded. This lower fraction in every interval, and the density theorem [F3], prove full measure for $n=m=1$. Together with steps 2.1 and 4.1 this proves the Statement in every dimension. [step 2.3, F3, A1, algebra] ∎
