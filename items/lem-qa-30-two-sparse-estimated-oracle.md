---
id: lem-qa-30-two-sparse-estimated-oracle
kind: lemma
title: "Two-sparse estimated SDP oracle from coherent labels"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
page: quantum-optimization-sdp-and-variational-algorithms
deps:
  - def-qa-30-sdp-primal-dual-pair
  - lem-qa-30-estimated-polytope-threshold-soundness
  - thm-qa-30-generalized-minimum-guarantee
justified_by: []
proof_strategy: direct
axiom_use: "None; all choices are finite or explicit, and interpolation is on real intervals."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Joran van Apeldoorn et al., Quantum SDP-solvers: Better upper and lower bounds, Section 2.3, Lemmas 15–16"
      url: "https://arxiv.org/pdf/1705.01843v4"
---

## Statement

Consider the normalized SDP of [[def-qa-30-sdp-primal-dual-pair]], with $m\ge1$, $A_1=I$, $b_1=R>0$, $\|A_i\|,\|C\|\le1$, and a dual optimum $v_D$ attained by a nonnegative vector of norm at most $r\ge1$. Fix a density matrix $\rho$, let $a_i=\operatorname{tr}(A_i\rho)$ and $c=\operatorname{tr}(C\rho)$, and supply rational $\alpha,r,\theta,b_i,\widetilde c$ with $\theta\ge0$ and $|\widetilde c-c|\le\theta$. At each index $i$, a coherent sampler, preserving its work and supplying its inverse, has a nonempty set $S_i$ of supported rational good labels $a_i'$ satisfying the uniform indexed bound $|a_i'-a_i|\le\theta$. Put $c'=\widetilde c-(r+1)\theta$.

Use the good-label robust-minimum guarantee of [[thm-qa-30-generalized-minimum-guarantee]] for each of the two finite score orders defined in the proof: its selected good score $s_*$ satisfies, for every index $i$, the existence of a label in $S_i$ with score at least $s_*$. The theorem's operator-norm cleaning and hybrid prerequisites for sampler errors must be supplied; mere high marginal probability of a good trace label is not substituted for them.

There is a finite procedure using two such minima and rational comparisons which, on their joint good event, returns either:

- a rational $y\ge0$ with at most two nonzero coordinates, $\|y\|_1\le r$, $b\cdot y\le\alpha$, and $a\cdot y-c\ge-2(r+1)\theta$; or
- `EMPTY`, implying $\alpha<v_D$.

More strongly, a nonempty set $\{y\ge0:b\cdot y\le\alpha,\ \|y\|_1\le r,\ a\cdot y\ge c\}$ rules out `EMPTY` on that event. `EMPTY` need not mean emptiness for every good estimate table. Multiplying the trace residual by $R$ gives slack at most $2R(r+1)\theta\le4Rr\theta$. If each supplied robust minimum costs $\widetilde O(\sqrt m)$ coherent sampler and inverse calls, the procedure has the same query order. Charge those calls, their controlled versions and reflections, scalar-estimate preparation, exact score arithmetic, and output arithmetic at their supplied costs; no sampler, reflection or memory interface is free. Failure probabilities include both minimum calls and the scalar/cleaning events.

For fixed rational point data, the same geometry gives a complete two-sparse feasibility procedure using one membership search and two exact minima. Every feasible vector of prescribed positive norm $N$ has a two-sparse feasible replacement of the same norm.

## Facts & Assumptions

**Given:** The SDP promises, rational encodings, coherent sampler and inverse, good-label sets, supplied good scalar estimate, and robust-minimum prerequisites in the Statement.

[F1] [[lem-qa-30-estimated-polytope-threshold-soundness]]: every exact bounded trace-feasible witness belongs to every $\theta$-good estimated polytope $\{y\ge0:b\cdot y\le\alpha,\ \|y\|_1\le r,\ \bar a\cdot y\ge c'\}$. In particular, if $\alpha\ge v_D$, the bounded optimal dual belongs to every such polytope. A feasible estimated multiplier has original trace slack at most $2(r+1)\theta$.

[F2] [[thm-qa-30-generalized-minimum-guarantee]] supplies each good selected label and the numeric nondomination property stated above, with its declared conditional probability and charged costs, under its cleaning/hybrid hypotheses.

## Proof

**Proof technique:** direct finite planar geometry followed by vertical interpolation of good estimates.

1.1 If $\alpha\ge0$ and $c'\le0$, return $y=0$; it meets the estimated inequality and [F1] gives the trace conclusion. Otherwise define $v=(\alpha/r,c'/r)$ and $G=\bigcup_{0<N\le r}\{(b,a):b\le\alpha/N,\ a\ge c'/N\}$. A convex combination $p=\sum_iq_i(b_i,a_i')$ belongs to $G$ exactly when some $y=Nq$ satisfies the bounded estimated constraints, since a nonzero feasible vector has $N=\|y\|_1>0$ and $q=y/N$. The zero vector is impossible in the present branch. [given, F1, algebra]

2.1 The following are exact closed halfspace descriptions and ordered ray generators $u,w$ for $G=v+K$, where $K=\{su+tw:s,t\ge0\}$: if $\alpha<0,c'<0$, use $b\le\alpha/r$, $a\ge(c'/\alpha)b$, $u=(0,1)$, $w=(\alpha,c')$; if $\alpha<0,c'\ge0$, use $b\le\alpha/r$, $a\ge c'/r$, $u=(0,1)$, $w=(-1,0)$; if $\alpha>0,c'>0$, use $a\ge c'/r$, $a\ge(c'/\alpha)b$, $u=(\alpha,c')$, $w=(-1,0)$; if $\alpha=0,c'>0$, use $b\le0$, $a\ge c'/r$, $u=(0,1)$, $w=(-1,0)$. Each follows from the union's inequalities by multiplying with positive $N$. For the converse, the first row admits $N=\alpha/b\in(0,r]$; the second admits $N=r$; the last two admit $N=c'/a\in(0,r]$. Substitution verifies both scaled inequalities. Thus scale recovery is explicit and rational, including $c'=0$ in the second row. In every row $\det(u,w)>0$, so the counterclockwise cone angle $\beta$ lies in $(0,\pi)$. The bypassed zero-vector branch requires no claim that its union is the whole plane. [given, step 1.1, algebra]

3.1 For a point $p\notin G$, write $z=p-v\ne0$ and let $t(p)\in(\beta,2\pi)$ be its unique counterclockwise angle from $u$. Define $A(p)=2\pi-t(p)>0$ and $B(p)=t(p)-\beta>0$ outside $G$, and define both scores to be zero inside $G$. This is an exact finite order on encoded labels without trigonometric computation: for nonzero rational $z$, let $H(z)=0$ if $\det(u,z)>0$, or if $\det(u,z)=0$ and $u\cdot z>0$, and let $H(z)=1$ otherwise. Compare $H$ first; within either half a positive $\det(z,z')$ means the first angle is smaller, and determinant zero means equal angles. Opposite rays are in different halves. This orders angles in $[0,2\pi)$; reverse it for positive $A$ and retain it for positive $B$, placing the zero sentinel first in both orders. Index ties can be lexical. Membership, half-plane tests and determinants use exact rational arithmetic. [given, step 2.1, construct, algebra]

4.1 For a fixed deterministic table of points, search for a point in $G$. If none exists, let $t_{\min},t_{\max}$ be its extreme exterior angles, obtained by separately minimizing $B$ and $A$. If $D=t_{\max}-t_{\min}<\pi$, all translated points lie in the closed sector $[t_{\min},t_{\max}]$, the intersection of its two inward linear halfplanes. Dot product with the direction at the sector's middle angle is strictly positive on every nonzero vector there. Thus every convex combination remains nonzero in that sector and outside $K$, so the original convex hull misses $G$. If $D=\pi$, its extreme vectors are opposite; writing $z_j=-\lambda z_k$ with $\lambda>0$ gives $(z_j+\lambda z_k)/(1+\lambda)=0$, hence a segment through the corner. The scalar $\lambda$ is rational from either nonzero coordinate. [step 2.1, step 3.1, algebra]

4.2 At fixed first coordinate $b$, the set $I_b=\{a:(b,a)\notin G\}$ is empty, the whole line, or an open lower interval, because each description in step 2.1 cuts that vertical line in either an empty set or a closed upper interval. On $I_b$, the exterior angle $t$ is continuous: normalization of $(b,a)-v$ is continuous away from zero, and the unit-circle arc outside the closed cone has continuous angle coordinate in $(\beta,2\pi)$. Its removed cone arc contains the possible branch cut. If $b=v_b$, every outside vector is vertically downward, since every listed cone contains the upward vertical ray; the angle is then constant and the origin is excluded. The intermediate value theorem therefore realizes every angle between two outside points on a fixed vertical line by interpolation of their second coordinates. The interpolation stays outside $G$ and stays $\theta$-good if both endpoint estimates are $\theta$-good. [given, step 2.1, step 3.1, algebra]

5.1 If $D>\pi$, take $h=u+w$ in the interior of $K$ and the vectors $z_j,z_k$ at $t_{\max},t_{\min}$. Necessarily $t_{\min}<\pi$ and $t_{\max}>\beta+\pi$, so all three determinants $\det(z_j,z_k)$, $\det(h,z_k)$, $\det(z_j,h)$ are positive. The identity $h=Lz_j+Mz_k$, with $L=\det(h,z_k)/\det(z_j,z_k)>0$ and $M=\det(z_j,h)/\det(z_j,z_k)>0$, gives a segment point $h/(L+M)\in K$. Thus the extreme pair works exactly when $D\ge\pi$, including the antipodal equality case. Operationally, intersect $[0,1]$ with the two rational linear halfspace inequalities on $\lambda p_j+(1-\lambda)p_k$. A constant inequality is either always satisfied or impossible; otherwise divide with the correct sign. The intersection is closed, so a nonempty interval has a rational least endpoint. Use it and the scale from step 2.1. No open endpoint, numerical angle tolerance or unnamed geometry primitive is needed. [step 2.1, step 4.1, algebra, construct]

6.1 For prescribed norm $N>0$, repeat step 3.1 and step 4.1 and step 5.1 with corner $(\alpha/N,c'/N)$ and quadrant rays $(0,1),(-1,0)$. If a convex combination lies in that quadrant, the disjoint-sector alternative is impossible, so a single point or the extreme pair gives a new convex combination there. Multiplication by $N$ preserves the norm and all inequalities. Norm zero is the zero vector and needs no division. This proves the fixed-norm sparsity assertion without an LP theorem. [step 4.1, step 5.1, construct, algebra]

6.2 Run [F2] for the two sentinel scores. If either selected good point lies in $G$, return its scaled one-coordinate vector. Otherwise let $p_j^*,p_k^*$ be the selected good points and put $T=t(p_j^*)$, $S=t(p_k^*)$. Their scores are positive. For every index $i$, numeric nondomination for $A$ supplies a good point $p_i^-$ outside $G$ with $t(p_i^-)\le T$, since a zero sentinel cannot witness a score at least the selected positive score. Likewise nondomination for $B$ supplies a good outside point $p_i^+$ with $t(p_i^+)\ge S$. These witnesses may differ and need not have appreciable probability. If $S\le T$ and $T-S\ge\pi$, step 4.1 and step 5.1 show that the two selected points yield a successful rational segment test. [F2, step 3.1, step 4.1, step 5.1, construct]

7.1 Suppose $S\le T$ and $T-S<\pi$. At index $i$, the interval between the witness angles in step 6.2 meets $[S,T]$: its lower endpoint is at most $T$ and its upper endpoint is at least $S$. Step 4.2 supplies an interpolated $\theta$-good estimate $\bar a_i$ outside $G$ with angle in $[S,T]$. All points of this good table lie in one exterior sector of aperture less than $\pi$, so step 4.1 proves its convex hull misses $G$. If instead $S>T$, fix any $t_0\in(T,S)$; the witness angles at every index straddle $t_0$, so step 4.2 supplies good estimates all on that one exterior ray. Their convex hull again misses $G$. These real interpolated estimates are existential witnesses; they need not be sampled labels or encoded outputs. [step 4.1, step 6.2, step 4.2, construct, algebra]

7.2 For a successful pair let $q_j=\lambda$, $q_k=1-\lambda$ and recover $N\le r$ by step 2.1. Then $y=Nq$ has exact nonnegativity, norm and objective bounds. The selected good estimates give $a\cdot y\ge c'-\theta\|y\|_1\ge\widetilde c-(2r+1)\theta\ge c-2(r+1)\theta$. If $j=k$ but the selected labels differ, merge their weights and use the estimate $\lambda a_j^*+(1-\lambda)a_k^*$, still $\theta$-good and preserving the interpolated inequality. Thus duplicate indices cause no incompatible assignment or extra support. Multiplication by $R$ and $r+1\le2r$ give the displayed scaled slack. [given, step 2.1, step 5.1, step 6.2, algebra]

8.1 In either case of step 7.1, step 1.1 gives an empty estimated polytope for one $\theta$-good table. If $\alpha\ge v_D$, [F1] puts the bounded optimal dual into every such polytope, a contradiction. Thus a failed rational segment test on the joint good event implies $\alpha<v_D$, and the procedure may return `EMPTY`. The same argument with any exact bounded trace-feasible witness proves the stronger completeness assertion. There is no assertion that all good tables are empty, nor any assumption that the two selected minima extend to a common deterministic table preserving their labels. [F1, step 1.1, step 6.2, step 7.1, contradiction]

9.1 The coherent procedure uses only two robust minima; a preliminary membership search may find an earlier verified good return but is unnecessary for completeness, so a search miss need not be interpreted as absence of all in-region labels. Two calls retain the supplied $\widetilde O(\sqrt m)$ query order. Score evaluation is reversible rational membership and determinant comparison on finite encodings; charge its arithmetic, the sampler and inverse, cleaning/hybrid errors, controlled operations, reflections and scalar preparation as stipulated in [F2]. Budget the two conditional minimum failures and all supplied scalar/cleaning failures by a union bound; independence is unnecessary. On the joint good event step 8.1 and step 7.2 establish exactly the stated alternatives. An unproved timeout supplies no additional emptiness certificate. [given, F2, step 8.1, step 7.2, algebra] ∎

