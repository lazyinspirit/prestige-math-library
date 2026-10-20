---
id: lem-ucrl2-evi-termination
kind: lemma
title: "Termination of extended value iteration under communicating assumptions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [alg-extended-value-iteration, def-communicating-mdp-and-diameter, def-axiom-of-choice]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§3.1.3, Theorem 7 (PDF lines 747–760); Appendix B, proof sketch of Theorem 7 (PDF lines 3649–3708)."}
    - {title: "Martin L. Puterman and Timothy C. Y. Chan, Markov Decision Processes and Reinforcement Learning, Chapter 7: Average Reward Models", url: "https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf", locator: "Chapter 7, Proposition 7.3 and Theorem 7.10; the formal proof of Proposition 7.3 is omitted."}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice for the path laws in the concluding UCRL2 application. For any finite nonempty state/action system, probability-vector empirical centers, finite nonnegative transition radii, and real value vector, the transfer routine in extended value iteration returns a feasible vector maximizing the value-vector expectation over the stated $\ell^1$ confidence set; it uses at most $2|S|+1$ positive transfers per row. If the upper rewards are finite, the tolerance is $\varepsilon>0$, and every transition radius is strictly positive, extended value iteration terminates. With fixed state and action orders, its returned policy, transition rows, value vector, and stopping index are measurable functions of the real input estimates. More precisely, write $F$ for its optimistic Bellman operator, put $\eta=\min_{s,a}\min\{1,b_p(s,a)/2\}>0$, and set $u_0=0$, $u_i=F(u_{i-1})$. Then
$$\operatorname{span}(u_i-u_{i-1})\le(1-\eta)^{i-1}\operatorname{span}(u_1),\qquad i\ge1.$$
When $\eta=1$, the span is zero for $i\ge2$. In particular, the positive UCRL2 confidence radii give finite stopping with tolerance $1/\sqrt{t_k}$ in every episode of a finite communicating MDP, including episodes whose confidence set misses the true model.

## Statement references

[[alg-extended-value-iteration]].

[[def-communicating-mdp-and-diameter]].

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed for the concluding communicating-MDP path laws.

[Jaksch, Ortner, and Auer](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf), §3.1.3, Theorem 7, and Appendix B. Their convergence argument is a proof sketch; the contraction argument below is supplied locally and does not invoke it.

## Facts & Assumptions

**Given:** The finite system and radii in the Statement; the row confidence sets and Bellman update are those specified by [[alg-extended-value-iteration]].

[F1] [[alg-extended-value-iteration]]: $F(v)(s)=\max_a[\widetilde r(s,a)+\max_{q\in Q_{s,a}}q\cdot v]$, where $Q_{s,a}=\{q\in\Delta(S):\|q-\widehat P_{s,a}\|_1\le b_p(s,a)\}$.

[F2] [[def-communicating-mdp-and-diameter]]: defines the communicating-MDP condition in the final application.

[A1] [[def-axiom-of-choice]]: supplies only the path-law construction used to formulate that application; the finite optimization and contraction arguments are choice-free.

## Proof

1.1 For a probability vector $p$ and $0\le\alpha\le1$, the ball $Q=\{q\in\Delta(S):\|q-p\|_1\le2\alpha\}$ equals the set of $z+w$ with $0\le z\le p$, $\sum z=1-\alpha$, $w\ge0$, and $\sum w=\alpha$. If $q\in Q$, the coordinatewise minimum $p\wedge q$ has mass $1-\|p-q\|_1/2\ge1-\alpha$; scaling it down to mass $1-\alpha$ gives $z\le q$, and $w=q-z$. This also covers $\alpha=0$; for $\alpha=1$, take $z=0$. Conversely, $p-z$ and $w$ are nonnegative vectors of mass $\alpha$, so $\|z+w-p\|_1\le2\alpha$. Thus the support function is $\alpha\max_jv(j)+H_p^\alpha(v)$, where $H_p^\alpha(v)=\max_{0\le z\le p,\,\sum z=1-\alpha}z\cdot v$. The maximizing sets are nonempty and compact, since the simplex and the coordinatewise constrained sets are closed and bounded. The formula includes radii at least $2$, for which $\alpha=1$ and the ball is the whole simplex. [given, F1, construct, algebra]

2.1 Fix a center $p$, a value vector $v$, and $\alpha=\min\{1,b/2\}$. Each routine update preserves the coordinate sum, keeps coordinates in $[0,1]$, and transfers at most the remaining budget $c$. Since every transfer has $j<\ell$ and the pointers move only inward, its source and destination supports remain disjoint; the final vector is a probability vector at distance $2R\le2\alpha\le b$ from $p$, where $R$ is the total transferred mass. Any feasible $q'$ moves a mass $R=\|q'-p\|_1/2\le\alpha$ from coordinates it decreases to coordinates it increases; the decrease capacities are $p_i$ and the increase capacities are $1-p_i$. Its gain $v\cdot(q'-p)$ is at most the gain obtained by removing mass $R$ from the lowest-valued available coordinates and adding mass $R$ to the highest-valued available coordinates. This follows by exchanging any removed mass at a higher-valued source with available mass at a lower-valued source, and any added mass at a lower-valued destination with available capacity at a higher-valued destination. As $R$ increases, the marginal source values are nondecreasing and the marginal destination values are nonincreasing, so the maximum gain increases while the largest remaining destination-minus-source value is positive and cannot increase after that value becomes nonpositive. The routine implements exactly these allocations and stops only when the budget is spent or every remaining marginal gain is nonpositive. Hence it attains the maximum gain over all $R\le\alpha$. Each positive transfer exhausts one of at most $|S|$ source capacities or $|S|$ destination capacities, or spends the remaining budget, so there are at most $2|S|+1$ positive transfers. [given, F1, step 1.1, algebra]

3.1 Put $\alpha_{s,a}=\min\{1,b_p(s,a)/2\}$. If $\eta<1$, steps 1.1 and 2.1 give $F(v)=\eta\max_j v(j)\mathbf1+(1-\eta)G(v)$, where $$G(v)(s)=\max_a\frac{\widetilde r(s,a)+(\alpha_{s,a}-\eta)\max_j v(j)+H_{\widehat P_{s,a}}^{\alpha_{s,a}}(v)}{1-\eta}.$$ The map $G$ is monotone in every coordinate. Each expression inside its maximum increases by $c$ on replacing $v$ by $v+c\mathbf1$, because its coefficient mass is $(\alpha_{s,a}-\eta)+(1-\alpha_{s,a})=1-\eta$. Thus $G(v+c\mathbf1)=G(v)+c\mathbf1$. If $m=\min(v-w)$ and $M=\max(v-w)$, monotonicity applied to $w+m\mathbf1\le v\le w+M\mathbf1$ implies $m\mathbf1\le G(v)-G(w)\le M\mathbf1$. The common scalar term in the expression for $F$ disappears from span, giving $\operatorname{span}(F(v)-F(w))\le(1-\eta)\operatorname{span}(v-w)$. [given, F1, step 1.1, step 2.1, algebra]

4.1 Apply step 3.1 repeatedly to $u_i=F(u_{i-1})$ and $u_{i-1}=F(u_{i-2})$. This proves the displayed geometric bound by induction. Its right side tends to zero, so the strict span test holds at some finite iteration for every positive tolerance. If $\eta=1$, every row ball is the whole simplex and $F(v)(s)=\max_a\widetilde r(s,a)+\max_jv(j)$; hence $F(v)-F(w)$ is constant across states and every increment after the first has zero span. UCRL2's logarithms, denominators, and tolerance at every finite $t_k\ge1$, $\delta\in(0,1)$ give positive radii and tolerance, so this applies to each episode without any confidence-event qualification. [given, F2, A1, step 1.1, step 3.1, induction]

5.1 With fixed finite tie orders, sorting, coordinate updates, maxima, and comparisons in each row routine are Borel functions of the real estimates; step 2.1 bounds the number of transfers uniformly. Thus each finite Bellman update and its selected action and rows are Borel. For each integer $i$, the event that the stopping test first succeeds at iteration $i$ is Borel, and the returned quantities restricted to that event are Borel. Step 4.1 shows that, under positive radii and positive tolerance, these events cover all inputs. Therefore the returned policy, rows, value vector, and stopping index are measurable functions of the estimates. [given, step 2.1, step 4.1, algebra] ∎
