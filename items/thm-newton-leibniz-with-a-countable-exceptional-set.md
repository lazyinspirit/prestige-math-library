---
id: thm-newton-leibniz-with-a-countable-exceptional-set
kind: theorem
title: "Botsko's theorem: if $F$ is continuous on $[a,b]$, $F'(x)=f(x)$ off a countable subset of $(a,b)$, and $f$ is Riemann integrable, then $\\int_a^b f=F(b)-F(a)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable, lem-countable-iff-surjection-from-n, def-continuity-real, def-derivative, thm-nested-interval-property, lem-geometric-sequence-null, def-darboux-sums, def-darboux-integral, def-partition-and-refinement]
justified_by: []
aliases: []
landmark: true
proof_strategy: squeeze
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. W. Botsko, A Fundamental Theorem of Calculus that Applies to All Riemann Integrable Functions"
      url: "https://doi.org/10.1080/0025570X.1991.11977632"
    - title: "C. Swartz, Even More on the Fundamental Theorem of Calculus"
      url: "https://scispace.com/pdf/even-more-on-the-fundamental-theorem-of-calculus-ckox8bw1gn.pdf"
pipeline_run: null
---

## Statement

Let $a<b$, let $E\subseteq(a,b)$ be at most countable, let $F:[a,b]\to\mathbb R$ be continuous, and let $f:[a,b]\to\mathbb R$ be Riemann integrable. If $F$ is differentiable at every $x\in(a,b)\setminus E$ and

$$F'(x)=f(x)\qquad(x\in(a,b)\setminus E),$$

then

$$\int_a^b f=F(b)-F(a).$$

Neither derivatives at the endpoints nor derivatives at points of $E$ are required.

## Facts & Assumptions

**Given:** The data in the statement.

[L1] An at-most-countable set is empty or, when nonempty, is the range of a surjection $e:\mathbb N\to E$; repetitions are allowed and no choice is required ([[def-countable]], [[lem-countable-iff-surjection-from-n]]).

[L2] Continuity at $c$ means that every prescribed positive error bounds $|H(x)-H(c)|$ throughout some neighbourhood of $c$ ([[def-continuity-real]]).

[L3] Differentiability at $x$ means that the difference quotients $(H(y)-H(x))/(y-x)$ tend to $H'(x)$ as $y\to x$ ([[def-derivative]]).

[L4] A nested sequence of nonempty closed bounded intervals whose lengths tend to $0$ has a one-point intersection ([[thm-nested-interval-property]]).

[L5] The geometric sequence $2^{-n}$ tends to $0$ ([[lem-geometric-sequence-null]]).

[L6] For a partition $P$, the lower and upper Darboux sums use the infima and suprema on its subintervals, and an integrable function has its integral between every such pair of sums ([[def-darboux-sums]], [[def-darboux-integral]], [[def-partition-and-refinement]]).

## Proof

**Proof technique:** squeeze.

1.1 It suffices first to prove the countable-exception monotonicity lemma: if $H:[u,v]\to\mathbb R$ is continuous and $H'(x)\le0$ on $(u,v)\setminus E$, where $E$ is at most countable, then $H(v)\le H(u)$. [given, suffices]

1.2 Suppose contrariwise that $H(v)>H(u)$. By continuity choose $u<p<q<v$ with $H(q)>H(p)$, and put $c=(H(q)-H(p))/(q-p)>0$. [given, L2, algebra]

1.3 If $E$ is nonempty, fix the surjection $e:\mathbb N\to E$ from [L1]; if $E$ is empty, put $e_n=u$ for every $n$. Assign stage $n$ the slope-loss budget $\delta_n=c2^{-n-2}$. The finite geometric-sum identity gives $\sum_{j\le n}\delta_j<c/2$ for every $n$. [L1, algebra]

1.4 Fix a partition $P=(t_0,\ldots,t_m)$ and let $m_i,M_i$ be the infimum and supremum of $f$ on $[t_i,t_{i+1}]$. Off $E$, the functions $F(x)-M_ix$ and $m_ix-F(x)$ have derivatives at most $0$. [given, L6, algebra]

2.1 Construct nested closed intervals $I_n=[p_n,q_n]\subseteq[p,q]$. Start with $I_0=[p,q]$. Given $I_n$, one of its two closed halves has secant slope at least the slope of $I_n$, because the latter is the length-weighted average of the two half-slopes. Call that half $J$. If $e_n\notin J$, take $I_{n+1}=J$. If $e_n\in J$, split $J$ at $e_n$; one nondegenerate side has slope at least the slope of $J$, and [L2] lets us move its endpoint $e_n$ slightly into that side so that the resulting closed interval excludes $e_n$ and loses less than $\delta_n$ in slope. Thus $I_{n+1}\subseteq I_n$, $|I_{n+1}|\le |I_n|/2$, $e_n\notin I_{n+1}$, and its secant slope is at least $c-\sum_{j\le n}\delta_j\ge c/2$. [step 1.2, step 1.3, L2, algebra]

3.1 By step 2.1 and [L5], the nested intervals have lengths tending to $0$, so [L4] gives a unique $x$ in their intersection. The initial interval lies in $(u,v)$, and $x\ne e_n$ for every $n$; hence $x\in(u,v)\setminus E$. [step 2.1, L1, L4, L5]

4.1 Write $I_n=[p_n,q_n]$. Both endpoints tend to $x$. The secant slope on $I_n$ is a convex combination of the two difference quotients based at $x$ (omitting a zero-length side), so [L3] makes those slopes tend to $H'(x)$. Step 2.1 keeps every slope at least $c/2$, whence $H'(x)\ge c/2>0$, contradicting the hypothesis. Therefore $H(v)\le H(u)$ and the monotonicity lemma is proved. [step 2.1, step 3.1, L3, algebra, discharge-contradiction]

5.1 Apply the lemma from step 4.1 on $[t_i,t_{i+1}]$ to obtain $m_i(t_{i+1}-t_i)\le F(t_{i+1})-F(t_i)\le M_i(t_{i+1}-t_i)$. [step 4.1, step 1.4]

6.1 Summing step 5.1 and telescoping yields $L(f,P)\le F(b)-F(a)\le U(f,P)$. [step 5.1, L6]

7.1 Since $f$ is integrable, the supremum of all lower sums and the infimum of all upper sums are both $\int_a^b f$; step 6.1 therefore forces $\int_a^b f=F(b)-F(a)$. [step 6.1, L6] ∎
