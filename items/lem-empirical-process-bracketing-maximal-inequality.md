---
id: lem-empirical-process-bracketing-maximal-inequality
kind: lemma
title: Bracketing maximal inequality for the empirical process
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-empirical-process-and-rademacher-process, lem-probability-measure-basic-identities, thm-dominated-convergence, thm-bernstein-independent-sums, thm-layer-cake-formula-for-l-p-powers, thm-monotone-convergence-for-the-integral, cor-cauchy-schwarz-inequality-for-l-two]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §7, Theorem 7.6 and preceding proof"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Section 8"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Statement

Let $X_1,X_2,\ldots$ be iid with law $P$, and let $\mathcal G$ be a nonempty countable class of measurable real functions with a nonnegative measurable envelope $H$, so $|g|\le H$ $P$-almost everywhere for every $g\in\mathcal G$, and $0<\|H\|_{P,2}<\infty$. Use $\mathbb G_n(g)=\sqrt n(P_ng-Pg)$ as in [[def-empirical-process-and-rademacher-process]]. Suppose that for some integer $q_0\ge1$ there are nested finite partitions $\Pi_q$ of $\mathcal G$, for all $q\ge q_0$, with $m_q$ nonempty cells. For each cell $C\in\Pi_q$ choose a representative $\pi_q(C)\in C$ and define its pointwise oscillation

$$\Delta_{q,C}(x)=\sup_{g,h\in C}|g(x)-h(x)|.$$

Assume $\Delta_{q,C}$ is measurable, $0\le\Delta_{q,C}\le2H$ $P$-almost everywhere, and $\|\Delta_{q,C}\|_{P,2}\le2^{-q}\|H\|_{P,2}$. If $C'\in\Pi_{q+1}$ is contained in $C\in\Pi_q$, then $\Delta_{q+1,C'}\le\Delta_{q,C}$ pointwise by definition. Put

$$L_q=1+\log(2m_q),\qquad a_q=\frac{2^{-q}\|H\|_{P,2}}{\sqrt{L_{q+1}}},\qquad M_{\mathcal G}=\sup_{g\in\mathcal G}\|g\|_{P,2}.$$

The refinement property gives $m_{q+1}\ge m_q$, so $a_q$ is nonincreasing.

There is a universal constant $C<\infty$ such that

$$\mathbb E\sup_{g\in\mathcal G}|\mathbb G_n(g)|\le C\left[(M_{\mathcal G}+2^{-q_0}\|H\|_{P,2})\sqrt{L_{q_0}}+\|H\|_{P,2}\sum_{q>q_0}2^{-q}\sqrt{L_q}+\sqrt n\,P\!\left(H\mathbf1_{\{H>\sqrt n a_{q_0}/2\}}\right)\right].$$

This is a local maximal estimate: the nested partitions and their oscillation bounds are hypotheses. Empirical-process notation uses [[def-empirical-process-and-rademacher-process]].

## Facts & Assumptions

**Given:** The iid experiment, the countable class and square-integrable envelope, and the nested partitions and oscillation bounds in the statement.

[F1] [[def-empirical-process-and-rademacher-process]]: $P_ng=n^{-1}\sum_{i=1}^n g(X_i)$, $Pg=\int g\,dP$, and $\mathbb G_n(g)=\sqrt n(P_ng-Pg)$. Its current batch-15 carrier and manifest entry agree; no Step 1 readiness record was present at this handoff.

[F2] [[thm-bernstein-independent-sums]]: independent centered summands with total variance $v$ and absolute bound $b$ satisfy the two-sided Bernstein tail bound $2\exp[-t^2/(2(v+bt/3))]$.

[F3] [[thm-layer-cake-formula-for-l-p-powers]]: for a nonnegative measurable random variable $Y$, $EY=\int_0^\infty P(Y>t)\,dt$, allowing infinite values.

[F4] [[lem-probability-measure-basic-identities]]: finite and countable subadditivity give the union bounds for events.

[F5] [[thm-dominated-convergence]]: almost-everywhere convergence dominated by one integrable function implies convergence of integrals.

[F6] [[thm-monotone-convergence-for-the-integral]]: increasing limits of nonnegative measurable functions pass through the integral.

[F7] [[cor-cauchy-schwarz-inequality-for-l-two]]: on a probability space, $P|Y|\le\|Y\|_{P,2}$ for every $Y\in L^2(P)$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 First let $h_1,\ldots,h_m$ be measurable functions with $Ph_j^2\le\sigma^2$ and $|h_j|\le b$. Applying [F2] to $h_j(X_i)-Ph_j$, whose variance is at most $\sigma^2$ and whose absolute value is at most $2b$, gives $P\{|\mathbb G_n(h_j)|>\sqrt{2\sigma^2u}+2bu/\sqrt n\}\le2e^{-u}.$ Put $L=\log(2m)$ and $Z=\max_j|\mathbb G_n(h_j)|$. By [F4], for $s\ge0$, $P\{Z>\phi(s)\}\le e^{-s},\qquad \phi(s)=\sqrt{2\sigma^2(L+s)}+2b(L+s)/\sqrt n.$ Using [F3] to integrate this tail after the increasing change of variable $t=\phi(s)$ gives $EZ\le\phi(0)+\int_0^\infty e^{-s}\phi'(s)\,ds\le C_0(\sigma\sqrt L+bL/\sqrt n)$, since $L\ge\log2$ and $\int_0^\infty e^{-s}(L+s)^{-1/2}ds\le L^{-1/2}$. The same bound follows by continuity if $\sigma=0$ or $b=0$. [F2, F3, F4, given, algebra]

1.2 For $g\in\mathcal G$, abbreviate its cell oscillation by $\Delta_qg$. The sequence $\Delta_qg$ decreases pointwise and is dominated by $2H$, while $\|\Delta_qg\|_{P,2}\le2^{-q}\|H\|_{P,2}$. By [F7], $P\Delta_qg\to0$; by [F5] and the integrable majorant $2H$, the pointwise limit of $\Delta_qg$ consequently has integral zero and is zero $P$-almost everywhere. Countability of $\mathcal G$ and finiteness of each partition give one common full-measure set on which all envelope and oscillation bounds hold and every oscillation tends to zero; iid observations avoid its null complement almost surely. Define $A_qg=\prod_{p=q_0}^q\mathbf1_{\{\Delta_pg\le\sqrt n a_p\}},\quad B_{q_0}g=\mathbf1_{\{\Delta_{q_0}g>\sqrt n a_{q_0}\}},\quad B_qg=A_{q-1}g\mathbf1_{\{\Delta_qg>\sqrt n a_q\}}\ (q>q_0).$ Nestedness makes these indicators constant on the corresponding cells. At each point either every cutoff passes or there is a unique first failed cutoff. In the first case, $\pi_qg\to g$ by the vanishing oscillation; in the second, the sum stops at that first failure. In either case, pointwise telescoping gives $g-\pi_{q_0}g=(g-\pi_{q_0}g)B_{q_0}g+\sum_{q>q_0}(g-\pi_qg)B_qg+\sum_{q>q_0}(\pi_qg-\pi_{q-1}g)A_{q-1}g.$ [F4, F5, F7, given, construct, algebra]

2.1 The $m_{q_0}$ representatives $\pi_{q_0}(C)$ have $L^2(P)$ norm at most $M_{\mathcal G}$. Clip each representative to zero on $\{H>\sqrt n a_{q_0}\}$. The clipped functions have absolute bound $\sqrt n a_{q_0}$ and the same $L^2$ bound, so step 1.1 bounds their expected maximum by $C_0[M_{\mathcal G}\sqrt{L_{q_0}}+a_{q_0}\log(2m_{q_0})]$. The unclipped remainders are bounded by $H\mathbf1_{\{H>\sqrt n a_{q_0}\}}$, whose empirical-process maximum has expectation at most $2\sqrt n P(H\mathbf1_{\{H>\sqrt n a_{q_0}\}})$. Since $m_{q_0+1}\ge m_{q_0}$, the definition of $a_{q_0}$ absorbs the second term into $2^{-q_0}\|H\|_{P,2}\sqrt{L_{q_0}}$. Thus the coarse representatives contribute at most the first and tail terms in the claimed bound, up to a universal factor. [F1, step 1.1, given, algebra]

2.2 The first term on the right of step 1.2 is bounded by $2H\mathbf1_{\{H>\sqrt n a_{q_0}/2\}}$, because $\Delta_{q_0}g>\sqrt n a_{q_0}$ and $\Delta_{q_0}g\le2H$. For any integrable $Y$, the triangle inequality and $E P_n|Y|=P|Y|$ give $E|\mathbb G_n(Y)|\le2\sqrt n P|Y|$. Thus this first term contributes at most $4\sqrt n P(H\mathbf1_{\{H>\sqrt n a_{q_0}/2\}})$. [F1, step 1.2, given, algebra]

2.3 Fix $q>q_0$. Because $B_qg$ is constant on its level-$q$ cell, the functions $w_q=\Delta_qg\,B_qg$ take at most $m_q$ distinct values. On $B_qg=1$, $\Delta_qg>\sqrt n a_q$ and $\Delta_qg\le\Delta_{q-1}g\le\sqrt n a_{q-1}$, so $P w_q^2\le\frac{a_{q-1}}{a_q}P(\Delta_qg)^2\le\frac{a_{q-1}}{a_q}4^{-q}\|H\|_{P,2}^2,$ and $|w_q|\le\sqrt n a_{q-1}$. Step 1.1 therefore bounds the expected maximum of $|\mathbb G_n(w_q)|$ by $C_0\left[2^{-q}\|H\|_{P,2}\sqrt{\frac{a_{q-1}}{a_q}L_q}+a_{q-1}\log(2m_q)\right].$ For each residual $r_q=(g-\pi_qg)B_qg$, $|r_q|\le w_q$, whence $|\mathbb G_n(r_q)|\le|\mathbb G_n(w_q)|+2\sqrt n Pw_q$. The cutoff also gives $\sqrt n Pw_q\le P(\Delta_qg)^2/a_q\le2^{-q}\|H\|_{P,2}\sqrt{L_{q+1}}$. Since $a_{q-1}/a_q=2\sqrt{L_{q+1}/L_q}$ and $a_{q-1}=2^{-(q-1)}\|H\|_{P,2}/\sqrt{L_q}$, these bounds are at most a universal multiple of $\|H\|_{P,2}2^{-q}(\sqrt{L_q}+\sqrt{L_{q+1}})$. Summing over $q>q_0$ is bounded by a universal multiple of the entropy tail in the statement. [F1, step 1.1, given, algebra]

2.4 The functions $v_q=(\pi_qg-\pi_{q-1}g)A_{q-1}g$ take at most $m_q$ distinct values by nestedness. On $A_{q-1}g=1$, both representatives lie in the level-$(q-1)$ cell, so $|v_q|\le\Delta_{q-1}g\le\sqrt n a_{q-1}$ and $Pv_q^2\le4^{-(q-1)}\|H\|_{P,2}^2$. Step 1.1 bounds their expected maximum by a universal multiple of $\|H\|_{P,2}2^{-q}\sqrt{L_q}+a_{q-1}\log(2m_q)\le C_1\|H\|_{P,2}2^{-q}\sqrt{L_q}.$ Summing over $q>q_0$ gives the same entropy-tail bound. [F1, step 1.1, given, algebra]

3.1 If the entropy tail in the claimed bound is infinite, the result is immediate. Otherwise take finite partial sums in the decomposition of step 1.2: they stabilize at a first failed cutoff or telescope to $g-\pi_{q_0}g$, and their absolute values are bounded by $2H$ outside the common null set from step 1.2. Dominated convergence [F5] and convergence of the finite sample averages therefore let the linear empirical-process map pass to the decomposition for each $g$. Now take the supremum over the countable class. Step 2.1 bounds the coarse representatives, step 2.2 bounds the first failed-cutoff term, and steps 2.3–2.4 bound the two series; [F6] justifies summing the nonnegative expected maxima by monotone convergence. Combining these estimates and increasing the universal constant gives the stated inequality. [F1, F5, step 2.1, step 1.2, step 2.2, step 2.3, step 2.4, F3, F6, algebra] ∎

## Remarks

The supremum in the Statement need not be attained, so replacing it by a maximum would leave the claim undefined for some permitted countable classes. For an explicit instance satisfying all the partition hypotheses, let $X_i$ be iid Bernoulli$(1/2)$, put $A=\{1\}$, $\mathcal G=\{c\mathbf1_A:c\in\mathbb Q,\ 0<c<1\}$, and take $H=\mathbf1_A$, with $\|H\|_{P,2}=1/\sqrt2$. For every $q\ge1$, partition the coefficients into the dyadic half-open intervals $[j2^{-q},(j+1)2^{-q})$, $0\le j<2^q$, restricted to $(0,1)$. Each cell is nonempty, the partitions refine one another, and any supplied rational representative in each cell is permitted. The oscillation of each cell is exactly $2^{-q}\mathbf1_A$, hence is measurable, bounded by $2H$, and has norm $2^{-q}\|H\|_{P,2}$. Here $m_q=2^q$, so the entropy series in the bound is finite. At sample size $n=1$, $|\mathbb G_1(c\mathbf1_A)|=c|X_1-1/2|=c/2$ for either observation. Its supremum is $1/2$, but no coefficient in the class attains that value. This explicitly refutes maximum attainment under the original hypotheses; the proof above bounds the measurable countable supremum throughout.
