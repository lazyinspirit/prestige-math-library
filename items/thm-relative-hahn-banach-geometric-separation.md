---
id: thm-relative-hahn-banach-geometric-separation
kind: theorem
title: Relative geometric Hahn–Banach with the exact open, closed, and compact hypotheses
status: published
origin: pipeline
deps: [lem-relative-hahn-banach-separates-an-open-convex-set-from-a-point, lem-relative-compact-closed-sets-have-a-positive-distance-gap, def-relative-normed-convexity-and-separation, lem-sup-epsilon, thm-infimum-property]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Assume HB. Let $A,B$ be disjoint nonempty convex subsets of a real or complex normed space $X$.

(i) If $A$ is open, there are $0\ne f\in X^*$ and $a\in\mathbb R$ with
$$\operatorname{Re}f(x)<a\le\operatorname{Re}f(y)\qquad(x\in A,\ y\in B).$$
If $B$ is also open, the right inequality is strict too. If only $B$ is open, interchange the labels and negate the functional to put the strict inequality on the $B$ side.

(ii) If $A$ is closed and $B$ is compact, there are $0\ne f\in X^*$, $a\in\mathbb R$, and $\varepsilon>0$ with
$$\operatorname{Re}f(x)\le a-\varepsilon<a+\varepsilon\le\operatorname{Re}f(y)\qquad(x\in A,\ y\in B).$$
In particular, a point outside a nonempty closed convex set is uniformly strictly separated from it. All inequalities concern real parts.

## Facts & Assumptions

[F1] Under HB a nonempty open convex set and an exterior point admit a nonzero bounded scalar-linear functional with strict real-part separation ([[lem-relative-hahn-banach-separates-an-open-convex-set-from-a-point]]).

[F2] A nonempty compact set and a disjoint nonempty closed set have a uniform positive norm-distance lower bound ([[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]).

[F3] Convexity uses real weights; for $0\ne f\in X^*$, $u=\operatorname{Re}f$ is a nonzero bounded real-linear functional, and a uniform positive margin defines uniform strict separation ([[def-relative-normed-convexity-and-separation]]).

[F4] A supremum of a nonempty upper-bounded real set has elements within every positive error from below ([[lem-sup-epsilon]]).

[F5] A nonempty lower-bounded real set has a real infimum; reflection gives the corresponding real supremum ([[thm-infimum-property]]).

## Proof

**Given:** HB, a normed real or complex $X$, and disjoint nonempty convex $A,B$, with the additional hypotheses of each part.

1.1 For (i), put $D=A-B=\{x-y:x\in A,y\in B\}$. It is nonempty. For $x_j-y_j\in D$ and $0\le t\le1$, their convex combination equals $((1-t)x_1+tx_2)-((1-t)y_1+ty_2)\in D$. If $x-y\in D$, choose $r>0$ with $B(x,r)\subseteq A$; then $B(x-y,r)\subseteq D$ by keeping $y$ fixed. Thus $D$ is open and convex. If $0\in D$, then some $x\in A$ equals some $y\in B$, contrary to disjointness; hence $0\notin D$. [given, F3, algebra]

1.2 For (ii), now suppose $A$ is closed and $B$ compact. The distance-gap lemma applied with $K=B,C=A$ gives $\delta>0$ with $\|x-y\|\ge\delta$ for all $x\in A,y\in B$. Put $\rho=\delta/2$ and $O=A+B(0,\rho)$. The ball is convex by the triangle inequality, so for $x_j+h_j\in O$ each convex combination has its $A$ component in $A$ and its ball component of norm less than $\rho$, including the weights zero and one. Thus $O$ is convex. A ball about $x+h$ of radius $\rho-\|h\|$ stays in $O$, so $O$ is open; it contains nonempty $A$. If $x+h=y\in B$, then $\|x-y\|=\|h\|<\rho<\delta$, impossible. Therefore $O$ and $B$ are disjoint. [given, F2, F3, algebra]

2.1 For (i), apply point separation to $D$ and $0$. It gives $0\ne f\in X^*$ with $u(d)<u(0)=0$ for every $d\in D$, where $u=\operatorname{Re}f$ is nonzero bounded real-linear. Consequently $u(x)<u(y)$ for every $x\in A,y\in B$. Fix $y_0\in B$. The nonempty real set $u(A)$ is bounded above by $u(y_0)$, so it has a real supremum $a_0$. Explicitly, $a_0=-\inf(-u(A))$; reflection of lower bounds makes this the least upper bound. Since every $u(y)$ bounds $u(A)$, $a_0\le u(y)$ for all $y\in B$. [step 1.1, F1, F3, F5]

3.1 For (i), fix a vector $v$ with $u(v)>0$: nonzero $u$ has a nonzero value, and negation makes that value positive. For each fixed $x\in A$, choose $r_x>0$ with $B(x,r_x)\subseteq A$ and set $t=r_x/(2\|v\|)>0$. Then $x+tv\in A$ and $u(x)<u(x)+tu(v)=u(x+tv)\le a_0$. This proves the strict left inequality. If $B$ is open, for each $y\in B$ choose $s_y>0$ with $B(y,s_y)\subseteq B$ and set $t=s_y/(2\|v\|)$. Then $y-tv\in B$, and step 2.1 gives $a_0\le u(y-tv)<u(y)$. Thus both inequalities are strict in that case. [step 2.1, algebra]

4.1 If only $B$ is open, apply the result just proved to $(B,A)$ to get a functional $g$ and level $b$ with $\operatorname{Re}g(y)<b\le\operatorname{Re}g(x)$ for $y\in B,x\in A$. Taking $f=-g$ and $a=-b$ gives $\operatorname{Re}f(x)\le a<\operatorname{Re}f(y)$. This completes (i) in each orientation. [step 2.1, step 3.1, algebra]

4.2 For (ii), apply the already proved open-side assertion to $(O,B)$. It gives $0\ne f\in X^*$ and $a_0\in\mathbb R$ with $u(x)+u(h)<a_0\le u(y)$ whenever $x\in A$, $\|h\|<\rho$, and $y\in B$, where $u=\operatorname{Re}f\ne0$. Regard $u$ as a member of the real dual of the underlying normed space, and let $N=\|u\|=\sup_{\|v\|\le1}|u(v)|$. The bound $|u(v)|\le\|f\|\|v\|$ makes this supremum finite, and a normalized vector with nonzero value shows $N>0$. [step 2.1, step 3.1, step 1.2, F3]

5.1 Continuing (ii), we show $\sup_{\|h\|<\rho}u(h)=\rho N$. Normalization gives $u(h)\le|u(h)|\le N\|h\|\le\rho N$ (including $h=0$). For any $q<\rho N$ with $q<0$, $h=0$ has $u(h)>q$. For $0\le q<\rho N$, use the supremum criterion for $N$ with error $N-q/\rho>0$ to obtain $v$ with $\|v\|\le1$ and $|u(v)|>q/\rho$. Let $w=v$ if $u(v)>0$ and $w=-v$ otherwise; then $m=u(w)=|u(v)|>0$. Set $t=(q/m+\rho)/2$, which satisfies $0<t<\rho$ and $tm>q$. Thus $h=tw$ has $\|h\|<\rho$ and $u(h)>q$. No number smaller than $\rho N$ is an upper bound, proving the identity. [step 4.2, F4, algebra]

6.1 For (ii), for each fixed $x\in A$, step 4.2 says $a_0-u(x)$ is an upper bound for all $u(h)$ with $\|h\|<\rho$. The identity just proved yields $u(x)+\rho N\le a_0$. Put $\varepsilon=\rho N/2>0$ and $a=a_0-\varepsilon$. Then $u(x)\le a_0-\rho N=a-\varepsilon$, while $a+\varepsilon=a_0\le u(y)$ for every $y\in B$. Since $\varepsilon>0$, these are precisely the required uniform strict separation inequalities. [step 4.2, step 5.1, F3, algebra]

7.1 Finally, if $z$ lies outside a nonempty closed convex $A$, the set $B=\{z\}$ is nonempty, disjoint from $A$, and convex since $(1-t)z+tz=z$. It is intrinsically compact: any open cover of its one-point metric space has a member containing $z$, and that one member is a finite subcover. Thus the hypotheses of (ii) hold and steps 1.2, 4.2, 5.1 and 6.1 give the final specialization. [step 1.2, step 6.1, algebra] ∎

## Source notes

Brezis Theorems 1.6–1.7, pp.5–7; Teschl Theorems 5.2–5.3 and Corollary 5.4, pp.138–140.
