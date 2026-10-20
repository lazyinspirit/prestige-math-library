---
id: lem-ucrl2-evi-termination
kind: lemma
title: "Termination of extended value iteration under communicating assumptions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [alg-extended-value-iteration, def-communicating-mdp-and-diameter]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "Appendix B, proof of convergence of Extended Value Iteration, PDF pp. 22–23."}
    - {title: "Martin L. Puterman and Timothy C. Y. Chan, Markov Decision Processes and Reinforcement Learning, Chapter 7: Average Reward Models", url: "https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf", locator: "Chapter 7, Proposition 7.3 and Theorem 7.10; the formal proof of Proposition 7.3 is omitted."}
proof_strategy: direct
---

## Statement

For every finite nonempty state/action system, bounded real upper rewards, probability-vector empirical centers, strictly positive transition radii, and tolerance $\varepsilon>0$, extended value iteration terminates. More precisely, write $F$ for its optimistic Bellman operator, put $\eta=\min_{s,a}\min\{1,b_p(s,a)/2\}>0$, and set $u_0=0$, $u_i=F(u_{i-1})$. Then
$$\operatorname{span}(u_i-u_{i-1})\le(1-\eta)^{i-1}\operatorname{span}(u_1),\qquad i\ge1.$$
When $\eta=1$, the span is zero for $i\ge2$. In particular, the positive UCRL2 confidence radii give finite stopping with tolerance $1/\sqrt{t_k}$ in every episode of a finite communicating MDP, including episodes whose confidence set misses the true model.

## Statement references

[[alg-extended-value-iteration]].

[[def-communicating-mdp-and-diameter]].

[Jaksch, Ortner, and Auer](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf), Theorem 7 and Appendix B. The contraction argument below is supplied locally and does not invoke their convergence sketch.

## Facts & Assumptions

**Given:** The finite system and positive radii in the Statement; all maxima are over the compact nonempty sets in [[alg-extended-value-iteration]].

[F1] [[alg-extended-value-iteration]]: $F(v)(s)=\max_a[\widetilde r(s,a)+\max_{q\in Q_{s,a}}q\cdot v]$, where $Q_{s,a}=\{q\in\Delta(S):\|q-\widehat P_{s,a}\|_1\le b_p(s,a)\}$.

## Proof

1.1 For a probability vector $p$ and $0<\alpha\le1$, the ball $Q=\{q\in\Delta(S):\|q-p\|_1\le2\alpha\}$ equals the set of $z+w$ with $0\le z\le p$, $\sum z=1-\alpha$, $w\ge0$, and $\sum w=\alpha$. Indeed, if $q\in Q$, the coordinatewise minimum $p\wedge q$ has mass $1-\|p-q\|_1/2\ge1-\alpha$; scaling that minimum down to mass $1-\alpha$ gives such $z\le q$, and $w=q-z$. (For $\alpha=1$, take $z=0$.) Conversely $p-z$ and $w$ are nonnegative of mass $\alpha$, so $\|z+w-p\|_1\le2\alpha$. Consequently the support function is $\alpha\max_j v(j)+H_p^\alpha(v)$, where $H_p^\alpha(v)=\max_{0\le z\le p,\,\sum z=1-\alpha}z\cdot v$. This equality includes radii at least $2$, for which $\alpha=1$ and the ball is the whole simplex. [given, F1, construct, algebra]

2.1 Put $\alpha_{s,a}=\min\{1,b_p(s,a)/2\}$. If $\eta<1$, step 1.1 writes $F(v)=\eta\max_j v(j)\mathbf1+(1-\eta)G(v)$, where $$G(v)(s)=\max_a\frac{\widetilde r(s,a)+(\alpha_{s,a}-\eta)\max_j v(j)+H_{\widehat P_{s,a}}^{\alpha_{s,a}}(v)}{1-\eta}.$$ The map $G$ is monotone in every coordinate. Each expression inside its maximum increases by $c$ on replacing $v$ by $v+c\mathbf1$, because its coefficient mass is $(\alpha_{s,a}-\eta)+(1-\alpha_{s,a})=1-\eta$. Thus $G(v+c\mathbf1)=G(v)+c\mathbf1$. If $m=\min(v-w)$ and $M=\max(v-w)$, monotonicity applied to $w+m\mathbf1\le v\le w+M\mathbf1$ implies $m\mathbf1\le G(v)-G(w)\le M\mathbf1$. The common scalar term in the expression for $F$ disappears from span, giving $\operatorname{span}(F(v)-F(w))\le(1-\eta)\operatorname{span}(v-w)$. [given, F1, step 1.1, algebra]

3.1 Apply step 2.1 repeatedly to $u_i=F(u_{i-1})$ and $u_{i-1}=F(u_{i-2})$. This proves the displayed geometric bound by induction. Its right side tends to zero, so the strict span test holds at some finite iteration for every positive tolerance. If $\eta=1$, every row ball is the whole simplex and $F(v)(s)=\max_a\widetilde r(s,a)+\max_jv(j)$; hence $F(v)-F(w)$ is constant across states and every increment after the first has zero span. UCRL2's logarithms, denominators, and tolerance at every finite $t_k\ge1$, $\delta\in(0,1)$ give positive radii and tolerance, so this applies to each episode without any confidence-event qualification. [given, step 1.1, step 2.1, induction] ∎
