---
id: thm-adam-online-regret-counterexample
kind: theorem
title: Adam can have nonzero average regret on a one-dimensional convex sequence
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-adam
  - lem-adaptive-moment-updates-well-defined
  - lem-geometric-polynomial-decay
  - lem-clipped-negative-prefix-positive-suffix
  - thm-induction-principle
  - def-natural-numbers
  - def-integer-power
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-of-square-roots
  - lem-of-square-monotone
  - def-ordered-field
  - def-complete-ordered-field
  - cor-cauchy-reals-lub-complete
  - lem-of-sign-rules
  - def-max-min
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-convex-subset-of-euclidean-space
  - def-interval
  - def-limsup-liminf
  - def-sequence
  - thm-of-archimedean
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "Appendix B, periodic linear-loss construction and complete parameter choice; Appendix F, fixed-epsilon construction and its cycle-drift proof, PDF pp. 14–18."
---

## Statement

For the scalar Adam update on $[-1,1]$ with step sizes $\alpha_t=\alpha/\sqrt t$, fixed parameters $\beta_1\in[0,1)$ and $\beta_2\in(0,1)$, no bias correction, and clipping after every update, define the best-comparator regret by
$$R_T=\sum_{t=1}^T\ell_t(x_t)-\min_{u\in[-1,1]}\sum_{t=1}^T\ell_t(u).$$
For every $\alpha>0$ and every $\beta_1<\sqrt{\beta_2}$, there is an even integer $C\ge2$ such that, with $\epsilon=0$, $x_1=1$, and the periodic linear losses
$$\ell_{kC+1}(x)=Cx,\qquad \ell_{kC+j}(x)=-x\quad(2\le j\le C,\ k\ge0),$$
the algorithm receives their slopes $g_{kC+1}=C$ and $g_{kC+j}=-1$, and its regret satisfies $\liminf_{T\to\infty}R_T/T\ge2/C>0$.

For every fixed $\epsilon>0$, there is also a counterexample for the update with denominator $\sqrt{v_t+\epsilon}$: set $\alpha=1/10$, $\beta_1=0$, $\beta_2=1/45$, $x_1=1$, and repeat the losses
$$\ell_{3k+1}(x)=3\sqrt\epsilon\,x,\qquad \ell_{3k+2}(x)=\ell_{3k+3}(x)=-\sqrt\epsilon\,x\quad(k\ge0).$$
The algorithm receives the corresponding slopes $g_{3k+1}=3\sqrt\epsilon$ and $g_{3k+2}=g_{3k+3}=-\sqrt\epsilon$.
Then $\liminf_{T\to\infty}R_T/T\ge2\sqrt\epsilon/3>0$. In both cases the losses are convex on $[-1,1]$, and the comparator is selected separately for each finite horizon.

## Statement references

[[alg-adam]]: defines the uncorrected moment recurrences, inside-root denominator parameter, step schedule, and clipping update used in both constructions.

[[lem-geometric-polynomial-decay]]: ensures that a sufficiently large even period satisfies the finitely many geometric-moment inequalities in the zero-epsilon construction.

[[lem-clipped-negative-prefix-positive-suffix]]: bounds the clipped endpoint of a period whose update increments have a nonpositive prefix and a nonnegative suffix.

[[def-limsup-liminf]]: defines the limit inferior in the two average-regret conclusions.

[[def-interval]]: $[-1,1]$ is the closed interval on which the losses and clipping operate.

[Reddi, Kale, and Kumar, Appendix B and Appendix F](https://arxiv.org/pdf/1904.09237)

[[cex-adam-periodic-linear-losses-force-divergence]]: the published bias-corrected periodic example is a distinct update convention and is not used as a proof of either local Adam branch.

## Facts & Assumptions

**Given:** The Adam recurrence and clipping rule, the parameters in the Statement, and the periodic gradients defining the losses.

[F1] [[alg-adam]]: $m_t=\beta_1m_{t-1}+(1-\beta_1)g_t$, $v_t=\beta_2v_{t-1}+(1-\beta_2)g_t^2$, and $x_{t+1}=\max(-1,\min(1,x_t-\alpha_t m_t/\sqrt{v_t+\epsilon}))$ on admissible inputs.

[F2] [[lem-adaptive-moment-updates-well-defined]]: the stated recurrences have finite nonnegative second moments and every denominator used in the constructions is positive.

[F3] [[lem-geometric-polynomial-decay]]: for $q\in[0,1)$ and $p\in\{1,2\}$, $n^p q^n\to0$; hence all finitely many eventual inequalities required below hold for every sufficiently large even $C$.

[F4] [[lem-clipped-negative-prefix-positive-suffix]]: if clipped scalar updates have nonpositive increments through an index $j$ and nonnegative increments afterward, their final iterate is at least the minimum of $1$ and the initial iterate plus the sum of the increments.

[F5] [[thm-induction-principle]], [[def-natural-numbers]], and [[def-integer-power]]: finite recurrences may be iterated, and powers use $q^0=1$, $q^{n+1}=q^nq$.

[F6] [[thm-of-square-roots]], [[lem-of-square-monotone]], [[def-ordered-field]], and [[lem-of-sign-rules]]: nonnegative quantities have ordered square roots, and inequalities are preserved under the positive operations used below.

[F7] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]] and [[def-convex-subset-of-euclidean-space]]: a set is convex when it contains each segment between its points, and a function is convex when it lies below each chord.

[F8] [[def-sequence]] and [[def-limsup-liminf]]: the limit inferior of the real sequence $(R_T/T)$ is the supremum of the infima of its tails.

[F9] [[thm-of-archimedean]]: the positive integers are unbounded in $\mathbb R$.

[F13] [[def-interval]]: the domain $[-1,1]$ is the closed interval with endpoints $-1$ and $1$.

[F10] [[def-finite-sum]] and [[lem-finite-sum-laws]]: finite sums may be reindexed and distributed; multiplying $\sum_{r=0}^Nq^r$ by $1-q$ yields the telescoping sum $\sum_{r=0}^N(q^r-q^{r+1})$.

## Proof

**Given:** The assumptions in the Statement.

1.1 First take $\epsilon=0$. Every input gradient is either $C$ or $-1$, so $v_1=(1-\beta_2)C^2>0$ and $v_{t+1}\ge\beta_2v_t>0$; thus every no-epsilon denominator is positive. Put $\gamma=\beta_1/\sqrt{\beta_2}<1$ and $$H=\frac{(1-\beta_1)(1+\gamma/(1-\gamma))}{\sqrt{1-\beta_2}}.$$ Choose an even $C\ge2$ so large that $$C\ge\frac{\beta_1}{1-\beta_1},\quad \beta_1^{C/2}\le\frac12,\quad (1-\beta_1)C\beta_1^{C/2}\le\frac14,\quad C^2\beta_2^{C/2}\le1,$$ $$(1-\beta_1)C\beta_1^{C-1}\le1-\beta_1^{C-1},\qquad \frac C{16}>H,\qquad \frac{\sqrt C}{8\sqrt2}>H.$$ Such an even integer exists by [F3], using $n=C/2$ for the half-period powers and then increasing $C$ to satisfy the remaining linear and square-root bounds. [F1, F2, F3, F5, F6, F9, given, choose, algebra]

1.2 Let $s=kC$ be a period start and let $m_s$ be its first moment. Induction over periods gives $-1\le m_s\le0$: it holds at $m_0=0$; if it holds at $s$, then $m_{s+1}=\beta_1m_s+(1-\beta_1)C$ lies in $[0,(1-\beta_1)C]$, while after the following $C-1$ gradients equal to $-1$, $$m_{s+C}=\beta_1^{C-1}m_{s+1}-(1-\beta_1^{C-1}).$$ The last choice inequality gives $m_{s+C}\le0$, and $m_{s+1}\ge0$ gives $m_{s+C}\ge-(1-\beta_1^{C-1})\ge-1$. Thus every high-gradient update has $m_{s+1}\ge0$. At the later positions $j=2,\ldots,C$, $$m_{s+j}=\beta_1^{j-1}(m_{s+1}+1)-1,$$ which is nonincreasing in $j$. Hence the update increments $\delta_{s+j}=-\alpha_{s+j}m_{s+j}/\sqrt{v_{s+j}}$ have a nonpositive prefix and a nonnegative suffix. [F1, F3, F5, F6, given, induction, algebra]

1.3 At the high-gradient round, $v_{s+1}\ge(1-\beta_2)C^2$ and $m_{s+1}\le(1-\beta_1)C$, so its negative increment has magnitude at most $$\frac{\alpha(1-\beta_1)}{\sqrt{1-\beta_2}\sqrt{s+1}}.$$ For a low-gradient position $j\ge2$, the high-gradient contribution gives $v_{s+j}\ge(1-\beta_2)\beta_2^{j-1}C^2$. If its increment is negative, then $m_{s+j}>0$ and the displayed moment formula gives $m_{s+j}\le(1-\beta_1)C\beta_1^{j-1}$. Therefore the sum of all negative increments at low-gradient positions is at most $$\frac{\alpha(1-\beta_1)}{\sqrt{1-\beta_2}\sqrt{s+1}}\sum_{j=2}^{C}\gamma^{j-1} \le\frac{\alpha(1-\beta_1)\gamma}{(1-\gamma)\sqrt{1-\beta_2}\sqrt{s+1}}.$$ Indeed, multiplying the finite geometric sum by $1-\gamma>0$ gives $\sum_{r=1}^{C-1}(\gamma^r-\gamma^{r+1})=\gamma-\gamma^C\le\gamma$, by [F5], [F6], and [F10]. The total magnitude of negative increments in a period is thus at most $\alpha H/\sqrt{s+1}$. [F1, F5, F6, F10, given, algebra]

1.4 For $j\ge C/2+1$, the moment formula and the choice of $C$ give $$m_{s+j}\le(1-\beta_1)C\beta_1^{C/2}-(1-\beta_1^{C/2})\le-\frac14.$$ Also $v_{s+1}\le C^2$, since the second-moment recurrence averages values in $[0,C^2]$, and subsequent unit-gradient updates give $v_{s+j}=\beta_2^{j-1}v_{s+1}+1-\beta_2^{j-1}\le1+C^2\beta_2^{C/2}\le2$. There are $C/2$ such updates. Their positive increments sum to at least $\alpha C/(8\sqrt2\sqrt{s+C})$. For $k\ge1$, $s+C\le2(s+1)$, so this is at least $\alpha C/(16\sqrt{s+1})$; for $k=0$ it is at least $\alpha\sqrt C/(8\sqrt2)$. The final two conditions on $C$ therefore show that the sum $D_k=\sum_{j=1}^C\delta_{s+j}$ of the period's increments is positive for every $k$, and for $k\ge1$ it satisfies $$D_k\ge\frac{\alpha(C/16-H)}{\sqrt{kC+1}}.$$ [F1, F3, F5, F6, given, algebra]

1.5 Now fix $\epsilon>0$ and use the second construction, with $b=1/45$, $c=44/45$, and $w_t=v_t/\epsilon$. Since $g_t^2/\epsilon$ is either $9$ or $1$, the recurrence $w_t=bw_{t-1}+c(g_t^2/\epsilon)$ gives $0\le w_t\le9$ by induction. At a high-gradient time $3k+1$, $w_{3k+1}\ge9c=44/5$, so the magnitude of the negative update is at most $$\frac{3\alpha}{\sqrt{3k+1}\sqrt{49/5}}=\frac{3\sqrt5\,\alpha}{7\sqrt{3k+1}}.$$ At the following two low-gradient times, the recurrence and $w_{3k+1}\le9$ give $w_{3k+2}\le53/45<5/4$ and $w_{3k+3}\le2033/2025<5/4$. Their denominator roots are therefore less than $3/2$, so their positive increments sum to at least $$\frac{2\alpha}{3}\left(\frac1{\sqrt{3k+2}}+\frac1{\sqrt{3k+3}}\right).$$ [F1, F5, F6, given, induction, algebra]

2.1 Apply [F4] to each period using the sign pattern from step 1.2. It gives $$x_{(k+1)C+1}\ge\min\{1,x_{kC+1}+D_k\}.$$ The positive lower bounds in step 1.4 have divergent sum: for every $N\ge1$, $$\sum_{k=1}^N\frac{1}{\sqrt{kC+1}}\ge\frac{N}{\sqrt{NC+1}}\ge\frac{\sqrt N}{\sqrt{C+1}},$$ which is unbounded by [F9]. Iterating the endpoint inequality, the boundary iterate therefore reaches $1$ after finitely many periods and equals $1$ at every later period boundary. [F4, F6, F9, step 1.2, step 1.4, given, induction, algebra]

3.1 For $x,y\in[-1,1]$ and $\theta\in[0,1]$, the nonnegative coefficients $1-\theta$ and $\theta$ give $-1=(1-\theta)(-1)+\theta(-1)\le(1-\theta)x+\theta y\le(1-\theta)1+\theta1=1$, so the interval is convex by [F7]. For every real slope $a$, the loss $\ell(x)=ax$ satisfies $\ell((1-\theta)x+\theta y)=(1-\theta)\ell(x)+\theta\ell(y)$; hence it is convex by [F7]. Every finite-horizon gradient sum is positive: a complete period sums to $1$, and a nonempty proper prefix of a period sums to one of $C,C-1,\ldots,2$. Thus $u=-1$ minimizes the cumulative linear loss on $[-1,1]$. In each complete period after the boundary iterate reaches $1$, the first round has regret $2C$ and each of the other $C-1$ rounds has regret at least $-2$, since every iterate lies in $[-1,1]$; each such period therefore contributes at least $2$. Each incomplete period contributes at least $-2C$, and the finitely many initial periods contribute a fixed finite amount. Hence there is a constant $K$ independent of $T$ such that $R_T\ge2\lfloor T/C\rfloor-K\ge2T/C-(2+K)$. For every $N$, all $T\ge N$ consequently satisfy $R_T/T\ge2/C-(2+K)/N$. By [F8] and the unboundedness in [F9], taking the supremum of these tail infima gives $\liminf_{T\to\infty}R_T/T\ge2/C$. [F6, F7, F8, F9, F13, step 2.1, given, algebra]

3.2 For $k\ge1$, $3k+2\le\frac54(3k+1)$ and $3k+3\le\frac32(3k+1)$. Also $2/\sqrt5>8/9$, $\sqrt{2/3}>4/5$, and $3\sqrt5/7<27/28$, so the low-gradient sum in step 1.5 exceeds the high-gradient magnitude by at least $$\frac{\alpha}{\sqrt{3k+1}}\left(\frac{152}{135}-\frac{27}{28}\right)>0.$$ For the first cycle, its high update has magnitude $3\sqrt5\alpha/7<\alpha=1/10$, so $x_2>0.9$ and the two positive low updates ensure $x_4>0.9$. The displayed cycle lower bounds have divergent sum, since $\sum_{k=1}^N(3k+1)^{-1/2}\ge N/\sqrt{3N+1}\ge\sqrt N/2$. The three update increments in every cycle have a nonpositive prefix and a nonnegative suffix. By [F4], their positive cumulative drift makes the boundary iterates reach $1$ and remain $1$ at cycle boundaries, as in step 2.1. [F4, F6, F9, step 2.1, step 1.5, given, algebra]

4.1 The convexity of the interval and of all linear losses follows from step 3.1, which covers every real slope. Every finite-horizon gradient sum is positive because every complete cycle sums to $\sqrt\epsilon$ and the proper nonempty prefixes sum to $3\sqrt\epsilon$ or $2\sqrt\epsilon$. Hence $u=-1$ is a best comparator. A full cycle after the boundary iterate reaches $1$ has regret at least $6\sqrt\epsilon-4\sqrt\epsilon=2\sqrt\epsilon$; every incomplete cycle has regret at least $-4\sqrt\epsilon$, and the initial finite segment contributes a fixed amount. Thus there is a constant $K_\epsilon$ independent of $T$ with $R_T\ge2\sqrt\epsilon\lfloor T/3\rfloor-K_\epsilon\ge2\sqrt\epsilon T/3-(2\sqrt\epsilon+K_\epsilon)$. Taking tail infima and then their supremum as in step 3.1 gives $\liminf_{T\to\infty}R_T/T\ge2\sqrt\epsilon/3$. [F7, F8, F9, step 3.1, step 3.2, given, algebra] ∎
## Remarks

The positive-epsilon branch fixes $\beta_1=0$ and $\beta_2=1/45$; it does not claim failure for every fixed parameter pair. The zero-epsilon branch applies to every fixed pair satisfying $\beta_1<\sqrt{\beta_2}$. Both are online convex-loss statements for the stated uncorrected update and do not assert a claim about bias-corrected Adam.
