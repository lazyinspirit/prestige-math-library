---
id: lem-continuous-functions-riemann-integrable
kind: lemma
title: Continuous functions have an oriented Riemann integral
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field, def-continuity-and-derivative-on-real-interval, lem-archimedean-property-from-completeness, lem-closed-interval-compactness-from-completeness, lem-extreme-value-theorem-from-compactness, lem-real-and-complex-modulus-rules]
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 18: Integrable Functions"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec18.pdf"
    - title: "Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §5.2.3, Lemma 5.2.7"
      url: "https://www.jirka.org/ra/realanal.pdf"
---

## Statement

Let $g:[a,b]\to\mathbb R$ be continuous, with $a<b$, in a Dedekind-complete
ordered field. For a partition $P=(a=x_0<\cdots<x_m=b)$ put
$$
U(g,P)=\sum_{i=1}^m \left(\max_{t\in[x_{i-1},x_i]}g(t)\right)(x_i-x_{i-1}),\qquad
L(g,P)=\sum_{i=1}^m \left(\min_{t\in[x_{i-1},x_i]}g(t)\right)(x_i-x_{i-1}).
$$
The supremum of the lower sums equals the infimum of the upper sums. Define
$\int_a^b g$ to be this common value, set $\int_a^a g=0$, and set
$\int_b^a g=-\int_a^b g$. This oriented Riemann integral is additive over
intervals. Refining a partition increases its lower sum and decreases its
upper sum, and any two partitions have a common refinement. It satisfies
$$
\left|\int_a^b g(t)\,dt\right|
\le |b-a|\max_{t\text{ between }a\text{ and }b}|g(t)|.
$$
If $a<b$ and constants $m,M$ satisfy $m\le g(t)\le M$ on $[a,b]$, then
$m(b-a)\le\int_a^b g\le M(b-a)$; reversing the endpoints reverses these
inequalities. The integral is monotone in its integrand: if continuous
$g\le h$ on $[a,b]$, then $\int_a^b g\le\int_a^b h$.
If $g$ is continuous on an open interval $J$ and $x_0\in J$, then
$G(x)=\int_{x_0}^x g(t)\,dt$ is defined for $x\in J$ and $G'(x)=g(x)$.

## Facts & Assumptions

**Given:** A Dedekind-complete ordered field, $a<b$, and a function continuous
on $[a,b]$ using
[[def-continuity-and-derivative-on-real-interval]].

[F1] [[def-complete-ordered-real-field]]: every nonempty subset bounded above
has a least upper bound.

[F2] [[def-continuity-and-derivative-on-real-interval]]: continuity on a
closed interval is the relative epsilon-delta condition.

[L1] [[lem-closed-interval-compactness-from-completeness]]: every relative open
cover of a nondegenerate closed interval has a finite subcover.

[L2] [[lem-extreme-value-theorem-from-compactness]]: a continuous function on
each closed subinterval attains its maximum and minimum.

[L3] [[lem-archimedean-property-from-completeness]]: natural numbers are
unbounded above, so equal partitions can have arbitrarily small mesh.

[L4] [[lem-real-and-complex-modulus-rules]]: real absolute value satisfies the
triangle inequality.

## Proof

1.1 For a partition $P$, the maxima and minima in its sums exist by [L2]. If
$Q$ refines $P$, each old subinterval is divided into finitely many pieces;
the minimum on each piece is at least the old minimum and the maximum is at
most the old maximum. Since the piece lengths sum to the old length,
$L(g,P)\le L(g,Q)\le U(g,Q)\le U(g,P)$. [given, L2, algebra]

1.2 The range of $g$ has a minimum $m$ and maximum $M$ by [L2]. Thus all
lower and upper sums lie between $m(b-a)$ and $M(b-a)$, and the partition
set is nonempty. Define $I_-:=\sup_P L(g,P)$ and $I_+:=\inf_P U(g,P)$;
both exist by [F1], applying it to negatives for the infimum. For any
partitions $P,Q$, their union is a common
refinement, so step 1.1 gives
$L(g,P)\le L(g,P\cup Q)\le U(g,P\cup Q)\le U(g,Q)$. Taking the supremum
and infimum yields $I_-\le I_+$. [given, F1, L2, step 1.1, construct]

2.1 Fix $\varepsilon>0$. For each $x\in[a,b]$, continuity [F2] gives
$\delta_x>0$ such that $|g(t)-g(x)|<\varepsilon/2$ when
$t\in[a,b]$ and $|t-x|<\delta_x$. The relative neighborhoods
$(x-\delta_x/2,x+\delta_x/2)\cap[a,b]$ cover $[a,b]$. Choose a finite
subcover with centers $x_1,\ldots,x_r$ by [L1], and put
$\delta=\min_i\delta_{x_i}/2>0$. If $u,v\in[a,b]$, $|u-v|<\delta$, and
$u$ belongs to the neighborhood centered at $x_i$, then both $u$ and $v$ are
within $\delta_{x_i}$ of $x_i$. By [L4],
$|g(u)-g(v)|\le|g(u)-g(x_i)|+|g(v)-g(x_i)|<\varepsilon$.
Thus $g$ is uniformly continuous. [given, F2, L1, L4, choose]

2.2 Apply step 2.1 with tolerance $\varepsilon/(2(b-a))$ and choose an equal
partition with mesh smaller than its uniform-continuity radius, using [L3].
On each piece the oscillation $\max g-\min g$ is less than that tolerance,
because both extrema are attained by [L2]. Hence
$U(g,P)-L(g,P)<\varepsilon/2$. Since $I_-\ge L(g,P)$ and
$I_+\le U(g,P)$, we have $0\le I_+-I_-<\varepsilon$. This holds for every
$\varepsilon>0$, so $I_-=I_+$. Their common value defines the integral in
the statement. [given, L2, L3, step 2.1, algebra]

3.1 Fix $c$ with $a<c<b$. Refining any partition by inserting $c$ cannot
increase its upper sum by step 1.1, so the infimum of upper sums over all
partitions equals the infimum over partitions containing $c$. Each such
upper sum is the sum of an upper sum on $[a,c]$ and one on $[c,b]$. Every
pair of partitions of these two intervals combines to a partition containing
$c$; therefore the infimum of the combined sums is the sum of the two separate
infima (choose each sum within $\varepsilon/2$ of its infimum for the reverse
inequality). The common upper/lower values from step 2.2 give
$\int_a^b g=\int_a^c g+\int_c^b g$. Endpoint cases follow from
$\int_a^a g=0$. Reversal is the definition, so the integral is oriented and
additive. [step 1.1, step 2.2, algebra, construct]

3.2 The constant function with value $d$ has every upper and lower sum equal
to $d(b-a)$, so its integral is $d(b-a)$. More generally, if constants
$m,M$ satisfy $m\le g(t)\le M$ on $[a,b]$, every lower sum is at least
$m(b-a)$ and every upper sum is at most $M(b-a)$; hence
$m(b-a)\le\int_a^b g\le M(b-a)$. If $m_0$ and $M_0$ are the attained
minimum and maximum of $g$, then
$C:=\max(|m_0|,|M_0|)=\max_{t\in[a,b]}|g(t)|$, since every value lies
between $m_0$ and $M_0$. Applying the comparison with $m=-C,M=C$ gives
$|\int_a^b g|\le C(b-a)$; reversal gives the bound with $|b-a|$ for either
orientation. [given, L2, step 2.2, algebra]

3.3 If continuous $g\le h$ on $[a,b]$, then on each partition interval the
minimum of $g$ is at most the minimum of $h$. Thus $L(g,P)\le L(h,P)$ for
every partition $P$; taking suprema of the lower sums gives
$\int_a^b g\le\int_a^b h$. [given, L2, step 2.2, algebra]

4.1 Let $g$ be continuous on an open interval $J$, fix $x_0\in J$, and put
$G(x)=\int_{x_0}^x g(t)\,dt$. The compact-segment results above define each
integral. By additivity from step 3.1 and the constant-integral calculation
in step 3.2, for $h\ne0$ sufficiently small,
$$
\frac{G(x+h)-G(x)}h
=\frac1h\int_x^{x+h}g(t)\,dt.
$$
For any $\eta>0$, continuity at $x$ gives $\delta>0$ such that
$g(x)-\eta<g(t)<g(x)+\eta$ whenever $|t-x|<\delta$. If $0<h<\delta$,
step 3.1 and the comparison in step 3.2 place this quotient between
$g(x)-\eta$ and $g(x)+\eta$. If $-\delta<h<0$, reverse the integral by
step 3.1, apply the same comparison on $[x+h,x]$, and divide by the
negative $h$; the inequalities again place the quotient between those same
constants. The extrema of $g$ on each such segment exist by [L2], and the
largest deviation from $g(x)$ is attained at one of them. Hence its limit is
$g(x)$, so $G'(x)=g(x)$. [F2, L2, step 3.1,
step 3.2, algebra] ∎
