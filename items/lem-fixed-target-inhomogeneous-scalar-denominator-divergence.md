---
dependency_level: 2
id: lem-fixed-target-inhomogeneous-scalar-denominator-divergence
kind: lemma
title: "Fixed-target monotone scalar-denominator divergence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-dirichlet-rational-approximation-with-bounded-denominator
  - thm-bezout-identity
  - lem-second-moment-limsup-positive-measure
  - lem-khintchine-groshev-torus-event-measure-and-independence
  - thm-lebesgue-density-theorem
  - thm-linear-change-of-variables-for-lebesgue-measure
  - def-countable-choice
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms, §2.2"
      url: "https://arxiv.org/pdf/1703.10015v2"
---

## Statement

Assume the Axiom of Countable Choice. Let $m\ge1$, $y\in\mathbb R^m$, and let $\psi:\mathbb N\to[0,\infty)$ be non-increasing with $\sum_{q\ge1}\psi(q)^m=\infty$. Then for almost every $x\in[0,1)^m$ there are infinitely many pairs $(q,p)\in\mathbb N\times\mathbb Z^m$ such that $\|qx+p-y\|_\infty<\psi(q)$.

## Statement references

[Allen–Beresnevich, §2.2, fixed-target inhomogeneous theorem](https://arxiv.org/pdf/1703.10015v2)

## Facts & Assumptions

**Given:** Countable Choice, $m$, the fixed target $y$, and the non-increasing function and divergent sum in the Statement.

[A1] Countable Choice supports countably additive Lebesgue measure, product integration, and the second-moment argument. ([[def-countable-choice]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-second-moment-limsup-positive-measure]])

[F1] For real $x$ and $N\ge1$ there is a reduced $a/r$ with $1\le r\le N$ and $|x-a/r|\le1/(rN)$. Coprimality gives that $qa$, for $1\le q\le r$, runs through every residue modulo $r$. ([[thm-dirichlet-rational-approximation-with-bounded-denominator]], [[thm-bezout-identity]])

[F2] The torus map $x\mapsto qx$ preserves normalized Lebesgue measure. A radius-$\delta$ product box, $0\le\delta\le1/2$, has measure $(2\delta)^m$. ([[lem-khintchine-groshev-torus-event-measure-and-independence]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F3] Almost every point of a measurable set is a density point. Invertible linear changes of variables scale Lebesgue measure by the absolute determinant. ([[thm-lebesgue-density-theorem]], [[thm-linear-change-of-variables-for-lebesgue-measure]])

## Proof

1.1 First suppose $m=1$. We establish a uniform local covering assertion for shifted rationals. Put $\epsilon=1/32$, $C=4096$, $Q=2^t$, $N=Q/2$, and $R_t=C/Q^2$. In any fixed interval $J$ of positive length, the points having an approximation $|x-a/r|\le1/(rN)$ with $r<\epsilon N$ occupy at most $2\epsilon|J|+O(\log N/N)$ of $J$: for each $r$, at most $r|J|+3$ of the relevant integers $a$ have their intervals meeting $J$, and summing their lengths gives this estimate. No coprimality restriction is needed for this upper bound. Apply it also to the concentric middle half $J_0$ of $J$. For all sufficiently large $t$, a subset of $J_0$ of measure at least $|J|/3$ therefore has, by [F1], a reduced approximation with $\epsilon N\le r\le N$. [given, A1, F1, algebra]

1.2 Now let $m>1$, replace $\psi$ by $\delta_q=\min\{\psi(q),1/4\}$, and write $w_q=\delta_q^m$. The sequence is non-increasing and its sum still diverges. Let $E_q=\{x\in[0,1)^m:\|qx-y\|_{(\mathbb R/\mathbb Z)^m,\infty}<\delta_q\}$. Then $|E_q|=2^mw_q$ by [F2]. For $1\le r\le q$, put $d=\gcd(q,r)$, $a=q/d$, $b=r/d$. Multiplication by $d$ preserves measure, reducing the overlap to the coprime pair $a,b$. In one coordinate the relevant interval centers are $(y-p)/a$ and $(y-p')/b$. Their intersection is nonempty only if $|ap'-bp-(a-b)y|\le b\delta_q+a\delta_r\le2a\delta_r$. There are at most $4a\delta_r+2$ relevant integers $ap'-bp$. For each such integer, Bézout implies that all representing pairs differ by $(a k,b k)$, so give just one interval intersection on the torus, of length at most $2\delta_q/a$. Taking the product over the $m$ coordinates proves $|E_q\cap E_r|\le K_m(w_qw_r+w_q(d/q)^m)$, uniformly in $y$. [given, A1, F1, F2, algebra]

2.1 For such an $x$, choose $q_0\in\{1,\ldots,r\}$ with $\|q_0a/r-y\|_{\mathbb R/\mathbb Z}\le1/(2r)$, and put $q=q_0+r$. Then $\epsilon N\le q\le2N=Q$ and $\|qx-y\|_{\mathbb R/\mathbb Z}\le1/(2r)+2/N$. Consequently some shifted rational $z=(b+y)/q$, $b\in\mathbb Z$, satisfies $|x-z|\le C/Q^2=R_t$; indeed dividing the preceding bound by $q\ge\epsilon N$ gives at most $4(1/(2\epsilon)+2)/(\epsilon Q^2)<C/Q^2$. Thus the $R_t$ intervals about shifted rationals of height at most $Q$ cover at least $|J|/3$ of $J_0$. For large $t$ their relevant centers and their radius-$R_t$ intervals lie inside $J$. [step 1.1, F1, algebra, choose]

2.2 The arithmetic error for fixed $q$ is $B(q)=\sum_{r=1}^q(\gcd(q,r)/q)^m=\sum_{s\mid q}\varphi(s)/s^m$, where $\varphi(s)$ here denotes the number of reduced residues modulo $s$. The equality counts the $r$ with $\gcd(q,r)=q/s$. For every $L$, $\sum_{q\le L}B(q)\le L\sum_{s\ge1}\varphi(s)/s^{m+1}\le L\sum_{s\ge1}s^{-m}\le K_m'L$. The last series converges for $m>1$ by grouping terms between consecutive powers of two. Abel summation and the non-increasing $w_q$ give $\sum_{q\le L}w_qB(q)\le K_m'\sum_{q\le L}w_q$: explicitly write the left side as $w_L\sum_{q\le L}B(q)+\sum_{j<L}(w_j-w_{j+1})\sum_{q\le j}B(q)$ and use the prefix bound. [step 1.2, algebra]

3.1 There are only finitely many relevant centers in the bounded interval $J$. Greedily choose a maximal set of them at mutual distance at least $2R_t$. Their radius-$R_t$ intervals are disjoint up to endpoints, while their radius-$3R_t$ intervals cover the original covered set. Hence the number $M_t$ of selected centers satisfies $c|J|/R_t\le M_t\le |J|/(2R_t)$ with an absolute $c>0$. About each selected center take the smaller interval of radius $r_t=\min\{\psi(Q)/(2Q),R_t/4\}$, and let $U_t$ be their disjoint union. Every $x\in U_t$ satisfies $|qx-b-y|<\psi(q)$ for its center's denominator: $q\le Q$ and $q r_t\le\psi(Q)/2\le\psi(q)/2$. Set $a_t=r_t/R_t$. Then $c'|J|a_t\le|U_t|\le |J|a_t$. [given, step 2.1, algebra, construct]

3.2 Put $S_L=\sum_{q\le L}w_q$. Steps 1.2–2.2 imply $\sum_{q,r\le L}|E_q\cap E_r|\le K_m''(S_L^2+S_L)$. For a fixed $M$, the first moment of $\sum_{M<q\le L}\mathbf1_{E_q}$ is $2^m(S_L-S_M)$, and its second moment is bounded by the preceding full-prefix bound. Cauchy–Schwarz therefore gives a lower bound $c_m>0$ for $|\bigcup_{q>M}E_q|$ after $L\to\infty$, independent of $M$, $y$ and $\psi$. Continuity from above yields $|\limsup E_q|\ge c_m$. This also explains why removing a finite prefix does not require a uniform divisor bound on every short interval. [step 1.2, step 2.2, A1, algebra]

4.1 Monotonicity gives $\sum_t2^t\psi(2^t)=\infty$: the sum over $2^{t-1}<q\le2^t$ lies between $2^{t-1}\psi(2^t)$ and $2^{t-1}\psi(2^{t-1})$. Thus $\sum_ta_t=\infty$, since $a_t=\min\{2^t\psi(2^t)/(2C),1/4\}$. For $s<t$, the $2R_t$ separation of selected centers implies that at most $K(r_s/R_t+1)$ of their small intervals meet any one interval of $U_s$, with an absolute $K$. Therefore $|U_s\cap U_t|\le K'|J|(a_sa_t+a_tR_t/R_s)$. Since $R_t/R_s=4^{s-t}$, summing over any finite tail of indices gives $\int_J(\sum_t\mathbf1_{U_t})^2\le K''|J|((\sum_ta_t)^2+\sum_ta_t)$. Cauchy–Schwarz on $J$, followed first by letting the terminal index tend to infinity and then by continuity from above in the initial index, gives $|\limsup_tU_t|\ge c''|J|$, with an absolute $c''>0$. These are precisely the indicator and decreasing-tail computations of [A1]'s second-moment lemma, with $J$ normalized to probability measure. [given, step 3.1, A1, algebra]

4.2 For any positive integer $b$, the sequence $\psi_b(r)=\psi(br)$ is non-increasing and has $\sum_r\psi_b(r)^m=\infty$: the original tail sum is bounded above by $b\sum_r\psi(br)^m$. Apply step 3.2 to $\psi_b$ and the same target $y$. In each cube $(a+[0,1)^m)/b$, $a\in\{0,\ldots,b-1\}^m$, the substitution $x=(z+a)/b$, $q=br$ transforms $qx+p-y$ into $rz+(ra+p)-y$. Thus the desired set occupies at least the fraction $c_m$ of each such cube, using only denominators divisible by $b$. If its complement had a density point, the grid cubes containing that point for $b\to\infty$ would have complement density tending to one: they lie in a centered ball of radius $\sqrt m/b$, whose volume is a fixed multiple of their volume. This contradicts the uniform fraction $c_m$. Therefore the desired set has full measure for $m>1$. [given, step 3.2, F3, algebra]

5.1 Each $r_t\le R_t/4$ tends to zero. Away from the countable set of shifted rational centers, membership in infinitely many $U_t$ requires infinitely many distinct approximating pairs; otherwise the point would have to equal one of finitely many centers. Hence the desired limsup occupies at least $c''|J|$ in every interval $J$. If its complement had positive measure, [F3] would give a density point of that complement and intervals on which the desired limsup occupies an arbitrarily small fraction, contradicting this lower bound. This proves the assertion when $m=1$. [step 4.1, F3, algebra]

6.1 Step 5.1 proves the assertion for $m=1$, and step 4.2 proves it for every $m>1$. All inequalities are strict by the half-radius choice in step 3.1 or the open torus events in step 1.2. No restriction was placed on the fixed target. These are all the cases of the Statement. [step 5.1, step 4.2, algebra] ∎
