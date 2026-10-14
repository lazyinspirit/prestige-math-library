---
id: lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy
kind: lemma
title: Bracketing entropy implies empirical-process asymptotic equicontinuity
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps: [def-countable-choice, cor-markov-inequality-for-random-variables, def-donsker-class-and-asymptotic-equicontinuity, def-empirical-process-and-rademacher-process, def-covering-packing-bracketing-number-and-metric-entropy, lem-empirical-process-bracketing-maximal-inequality, thm-dominated-convergence, cor-cauchy-schwarz-inequality-for-l-two]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §7, Theorems 7.4–7.6"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Section 10"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Statement

For a class $\mathcal H$ of measurable real functions under a probability measure $Q$, an **envelope** $H$ means a nonnegative measurable function with $|h|\le H$ $Q$-almost surely for every $h\in\mathcal H$. Cauchy–Schwarz [[cor-cauchy-schwarz-inequality-for-l-two]] gives $QH\le\|H\|_{Q,2}<\infty$ when $H\in L^2(Q)$.

Assume Countable Choice. Let $X_1,X_2,\ldots$ be iid with law $P$, and let $\mathcal F$ be a nonempty pointwise-measurable class of measurable functions with a nonnegative envelope $F$ satisfying $PF^2<\infty$. Assume $0<\|F\|_{P,2}<\infty$ and

$$\int_0^1\sqrt{\log N_{[]}\bigl(\epsilon\|F\|_{P,2},\mathcal F,L^2(P)\bigr)}\,d\epsilon<\infty.$$

Use the empirical process $\mathbb G_n$ and semimetric $\rho_P$ from [[def-empirical-process-and-rademacher-process]] and [[def-donsker-class-and-asymptotic-equicontinuity]]. Then $\mathbb G_n$ is asymptotically equicontinuous in probability with respect to $\rho_P$.

## Facts & Assumptions

**Given:** Countable Choice; an iid sequence, pointwise-measurable class $\mathcal F$, square-integrable envelope $F$, and the finite normalized $L^2(P)$ bracketing entropy integral in the statement.

[A1] Countable Choice permits fixing a finite bracket family at each of countably many dyadic scales ([[def-countable-choice]]).

[A2] [[def-empirical-process-and-rademacher-process]] defines $P_n$, $P$, $\mathbb G_n$, outer probability, and the countable separable-version convention.

[F1] [[def-donsker-class-and-asymptotic-equicontinuity]]: $\rho_P(f,g)=\{P[(f-g)-P(f-g)]^2\}^{1/2}$ and asymptotic equicontinuity is the vanishing-in-probability condition for the supremum of $|\mathbb G_n(f)-\mathbb G_n(g)|$ over $\rho_P(f,g)<\delta$.

[F2] [[lem-empirical-process-bracketing-maximal-inequality]]: nested finite partitions with cell oscillation envelopes of dyadic $L^2(P)$ size bound the expected supremum by a coarse finite-class term, an envelope-tail term, and the sum of dyadic widths times square-root log cell counts. Its complete revised proof is in this batch.

[F3] [[def-covering-packing-bracketing-number-and-metric-entropy]]: an $L^2(P)$ bracket has measurable endpoints ordered $P$-almost surely and width $\|u-l\|_{P,2}$; $N_{[]} (r,\mathcal F,L^2(P))$ counts such brackets of width at most $r$.

[F4] [[thm-dominated-convergence]]: pointwise convergence dominated by an integrable function implies convergence in $L^1$.

[F5] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Y$ and $r>0$, $P(Y>r)\le EY/r$.

[F6] [[cor-cauchy-schwarz-inequality-for-l-two]]: on a probability space, $P|Y|\le\|Y\|_{P,2}$ for every $Y\in L^2(P)$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Choose a countable pointwise-dense subclass $\mathcal F_0\subseteq\mathcal F$. For $\delta>0$, set $\mathcal H_\delta=\{(f-g)-P(f-g):f,g\in\mathcal F_0,\ \rho_P(f,g)\le\delta\}$. Every $h\in\mathcal H_\delta$ has $\|h\|_{P,2}\le\delta$ and is bounded in absolute value by $H:=2F+2PF$, with $\|H\|_{P,2}\le4\|F\|_{P,2}$. [A2, F1, F6, given, construct, algebra]

1.2 If $f$ and $g$ lie in $L^2(P)$ brackets $[l_i,u_i]$ and $[l_j,u_j]$ of width at most $r\|F\|_{P,2}$, respectively, then $(f-g)-P(f-g)$ lies in the bracket $[l_i-u_j-P(u_i-l_j),\ u_i-l_j-P(l_i-u_j)].$ Its width is $w_i+w_j+P(w_i+w_j)$, where $w_i=u_i-l_i$ and $w_j=u_j-l_j$; Cauchy–Schwarz gives its $L^2(P)$ norm at most $2(\|w_i\|_{P,2}+\|w_j\|_{P,2})\le4r\|F\|_{P,2}$. Thus $N_{[]}(4r\|F\|_{P,2},\mathcal H_\delta,L^2(P))\le N_{[]}(r\|F\|_{P,2},\mathcal F,L^2(P))^2$. [A2, given, F1, F3, F6, algebra]

2.1 Fix $0<\delta<\|H\|_{P,2}/2$ and choose $q_0\ge1$ with $\delta/2<2^{-q_0}\|H\|_{P,2}\le\delta$. For each $q\ge q_0$, take a finite bracketing cover of $\mathcal H_\delta$ at width $2^{-q}\|H\|_{P,2}$ and partition the class by assigning each function to the first bracket containing it. Refine these finite partitions cumulatively through level $q$; by [A1], the countable family of finite covers and their representatives can be selected. If $b_q$ is the unrefined level-$q$ count, step 1.2 gives $b_q\le N_{[]} (r_q\|F\|_{P,2},\mathcal F,L^2(P))^2$ for $r_q=2^{-q}\|H\|_{P,2}/(4\|F\|_{P,2})$, and the refined count satisfies $m_q\le\prod_{p=q_0}^q b_p$. Consequently, using $\sqrt{1+\sum x_p}\le1+\sum\sqrt{x_p}$ for $x_p\ge0$ and summing the resulting geometric weights, $\sum_{q\ge q_0}2^{-q}\sqrt{1+\log(2m_q)}\le C_1\int_0^{C_2\delta/\|F\|_{P,2}}\sqrt{1+\log N_{[]} (\epsilon\|F\|_{P,2},\mathcal F,L^2(P))}\,d\epsilon$ for universal constants $C_1,C_2$: the unrefined entropy terms at scale $r_q$ are bounded by the integrand on the adjacent dyadic interval $[r_q/2,r_q]$ by monotonicity of bracketing numbers, and cumulative refinement contributes only a geometric sum of earlier terms. The added $1$ contributes a geometric sum of order $2^{-q_0}$, which is also bounded by the displayed integral because its integrand is at least $1$. On each refined cell $C$, define $\Delta_{q,C}=\sup_{h,h'\in C}|h-h'|$ and choose $\pi_q(C)\in C$. Countability makes this pointwise supremum measurable; containment in a level-$q$ bracket gives $\Delta_{q,C}\le u-l$ $P$-almost everywhere, so it has the required $L^2(P)$ bound. Intersecting partitions makes these oscillations nonincreasing on child cells. Thus these partitions and widths satisfy the hypotheses of [F2] when the local maximal inequality is applied. [A1, A2, F1, F2, F3, step 1.2, algebra]

3.1 Apply [F2] to $\mathcal H_\delta$ with envelope $H$ and this nested partition. Its coarse term is at most $C\delta\sqrt{1+\log(2m_{q_0})}$, its dyadic tail is bounded by the right-hand side of step 2.1, and its final envelope-tail term tends to zero as $n\to\infty$ for this fixed $\delta$: for each fixed $a>0$, $\sqrt n P(H\mathbf1_{\{H>a\sqrt n\}})\le a^{-1}P(H^2\mathbf1_{\{H>a\sqrt n\}})\to0$ by [F4]. [A1, F2, F4, step 2.1, algebra]

4.1 The entropy integral in the statement makes the integral in step 2.1 tend to zero with $\delta$. It also gives $\delta\sqrt{\log N_{[]} (c\delta\|F\|_{P,2},\mathcal F,L^2(P))}\to0$ for each fixed $c>0$: if $h(\epsilon)=\sqrt{\log N_{[]} (\epsilon\|F\|_{P,2},\mathcal F,L^2(P))}$, monotonicity yields $(\epsilon/2)h(\epsilon)\le\int_{\epsilon/2}^{\epsilon}h(u)\,du\to0$. Therefore step 3.1 implies $\lim_{\delta\downarrow0}\limsup_n E\sup_{h\in\mathcal H_\delta}|\mathbb G_n(h)|=0$. [F1, F3, step 2.1, step 3.1, algebra]

5.1 By [F5], Markov's inequality converts the expected-supremum limit in step 4.1 into asymptotic equicontinuity for pairs in $\mathcal F_0$. For arbitrary $f,g\in\mathcal F$, choose pointwise approximants $f_k,g_k\in\mathcal F_0$. The common envelope gives $L^1(P)$ convergence by [F4]; applying [F4] to $|f_k-f|^2\le4F^2$ and $|g_k-g|^2\le4F^2$ also gives $L^2(P)$ convergence. Pointwise convergence gives $P_nf_k\to P_nf$ and $P_ng_k\to P_ng$ for each fixed finite sample, so $\rho_P(f_k,g_k)\to\rho_P(f,g)$ and the empirical-process increment converges pointwise to the desired increment. Hence a pair with $\rho_P(f,g)<\delta/2$ is a limit of pairs from $\mathcal F_0$ with distance below $\delta$. The outer-probability modulus over $\mathcal F$ is therefore bounded by the countable-class modulus over $\mathcal F_0$ at radius $\delta$, proving the asserted asymptotic equicontinuity. [A2, F1, F4, F5, step 4.1, given, algebra] ∎
