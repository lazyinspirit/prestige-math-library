---
id: lem-uniform-convexity-gives-unique-asymptotic-centers
kind: lemma
title: Uniform convexity gives unique asymptotic centers
status: published
origin: pipeline
deps: [def-uniformly-convex-banach-space, def-countable-choice, def-limsup-liminf, lem-limsup-epsilon-characterisation, thm-infimum-property, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-naturals-positive, def-banach-space, def-relative-normed-convexity-and-separation, thm-metric-sequential-closure]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: "Use countable choice to select centers whose radii decrease to the infimum.  The triangle inequality handles radius zero; at positive radius, normalize two near-minimizers by one common radius and apply uniform convexity to their midpoint.  Completeness, closedness and a directly proved Lipschitz estimate give existence, and the same midpoint argument gives uniqueness."
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Teck-Cheong Lim, On Asymptotic Centers and Fixed Points of Nonexpansive Mappings"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/16085FFB75CC410726D2245C2706A6FF/S0008414X00014310a.pdf/on-asymptotic-centers-and-fixed-points-of-nonexpansive-mappings.pdf"
      locator: "§§1–2, especially Proposition 1 and Theorem 1, printed pp. 421–423"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$.  Let $X$ be a real
or complex uniformly convex Banach space, let $(x_n)_{n\in\mathbb N}$ be a
bounded sequence in $X$, and let $C\subseteq X$ be nonempty, norm closed and
convex.  Define its asymptotic-radius function on $C$ by

$$r(y):=\limsup_{n\to\infty}\|x_n-y\|\qquad(y\in C).$$

Then there is a unique $c\in C$ such that

$$r(c)=\inf_{y\in C}r(y).$$

The point $c$ is the asymptotic center of $(x_n)$ relative to $C$.  Convexity
uses real coefficients even when $X$ is complex.

## Facts & Assumptions

**Given:** $X$, $(x_n)$ and $C$ as in the statement, with $R:=\inf_{y\in C}r(y)$ once that real infimum has been justified.

[F1] For a bounded real sequence, its limit superior is the real infimum of its real tail suprema.  If its limit superior is the real number $L$, then for every $\eta>0$ its terms are eventually less than $L+\eta$ ([[def-limsup-liminf]], [[lem-limsup-epsilon-characterisation]]).

[F2] Every nonempty subset of $\mathbb R$ bounded below has a real infimum ([[thm-infimum-property]]).

[F3] $\mathrm{AC}_\omega$ supplies one member of each member of a sequence of nonempty sets ([[def-countable-choice]]).

[F4] For every real $\eta>0$ there is an integer $N\ge1$ with $1/N<\eta$ ([[cor-archimedean-reciprocal]]).

[F5] Uniform convexity says that for each $\theta\in(0,2]$ there is $\delta>0$ such that unit-ball vectors separated by at least $\theta$ have midpoint norm at most $1-\delta$ ([[def-uniformly-convex-banach-space]]).

[F6] Every norm-Cauchy sequence in $X$ converges in $X$ ([[def-banach-space]]).

[F7] A closed subset of a metric space contains the limit of each convergent sequence in it ([[thm-metric-sequential-closure]], using its choice-free closed-to-sequentially-closed direction).

[F8] Convexity keeps real midpoints in $C$, also in a complex normed space ([[def-relative-normed-convexity-and-separation]]).

[F9] Canonical positive naturals increase with their indices, and inversion reverses strict inequalities between positive elements.  Consequently $1/(j+1)\to0$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

## Proof

1.1 Choose $B\ge0$ with $\|x_n\|\le B$ for every $n$.  For each $y\in C$, $0\le\|x_n-y\|\le B+\|y\|$, so [F1] makes $r(y)$ a finite nonnegative real. Thus $\{r(y):y\in C\}$ is nonempty and bounded below by zero, and [F2] defines a finite real $R\ge0$. [given, F1, F2]

2.1 The function $r$ is $1$-Lipschitz.  Indeed, fix $y,z\in C$ and $\eta>0$.  By [F1], eventually $\|x_n-z\|<r(z)+\eta$, and then $\|x_n-y\|\le\|x_n-z\|+\|z-y\|<r(z)+\|z-y\|+\eta$. The corresponding tail supremum, and hence its infimum $r(y)$, is at most $r(z)+\|z-y\|+\eta$.  If $r(y)>r(z)+\|z-y\|$, [F4] supplies a positive reciprocal smaller than that gap, contradicting this inequality.  Hence $r(y)\le r(z)+\|z-y\|$; exchanging $y,z$ gives $|r(y)-r(z)|\le\|y-z\|$. [step 1.1, F1, F4]

2.2 For $j\in\mathbb N$ put $E_j:=\{y\in C:r(y)<R+1/(j+1)\}$.  Each $E_j$ is nonempty by the defining greatest-lower-bound property of $R$.  Applying [F3] once to this countable family produces a sequence $(y_j)$ with $y_j\in E_j$ for every $j$.  This is the proof's exact use of $\mathrm{AC}_\omega$. [step 1.1, F2, F3]

3.1 Suppose first that $R=0$.  Given $\varepsilon>0$, [F4] and [F9] give a threshold $J$ such that $1/(j+1)<\varepsilon/8$ for $j\ge J$.  For $j,k\ge J$, [F1] gives one index $n$ beyond the two eventual thresholds at tolerance $\varepsilon/8$.  Then $$\|y_j-y_k\|\le\|y_j-x_n\|+\|x_n-y_k\|<r(y_j)+r(y_k)+\varepsilon/4<\varepsilon/2.$$ Thus $(y_j)$ is Cauchy when $R=0$. [step 2.2, F1, F4, F9]

3.2 Now suppose $R>0$, and fix $\varepsilon>0$.  Put $\theta:=\min\{1,\varepsilon/(R+1)\}\in(0,1]$.  Choose the $\delta>0$ from [F5], replace it by $\delta_0:=\min\{\delta,1/2\}$, and set $$a:=\min\{1/2,R\delta_0/2\}>0,\qquad t:=R+a.$$ Then $t<R+1$ and $t(1-\delta_0)<R$.  By [F4] and [F9], for all sufficiently large $j,k$ one has $r(y_j),r(y_k)<t$.  If such $j,k$ also satisfied $\|y_j-y_k\|\ge\varepsilon$, [F1] would give a common tail on which both $\|x_n-y_j\|<t$ and $\|x_n-y_k\|<t$.  On that tail the vectors $$u_n:=\frac{x_n-y_j}{t},\qquad v_n:=\frac{x_n-y_k}{t}$$ belong to the unit ball and satisfy $\|u_n-v_n\|=\|y_j-y_k\|/t>\varepsilon/(R+1)\ge\theta$. Uniform convexity therefore gives $$\left\|x_n-\frac{y_j+y_k}{2}\right\|=t\left\|\frac{u_n+v_n}{2}\right\|\le t(1-\delta_0)$$ throughout that tail.  The midpoint lies in $C$ by [F8], and [F1] now yields $r((y_j+y_k)/2)\le t(1-\delta_0)<R$, contradicting the definition of $R$. Consequently $\|y_j-y_k\|<\varepsilon$ for all sufficiently large $j,k$; $(y_j)$ is Cauchy also when $R>0$. [step 2.2, F1, F4, F5, F8, F9]

4.1 By [F6] there is $c\in X$ with $y_j\to c$, and [F7] gives $c\in C$.  The lower-bound property gives $R\le r(c)$.  Conversely, the Lipschitz estimate gives $r(c)\le r(y_j)+\|c-y_j\|<R+1/(j+1)+\|c-y_j\|$ for every $j$. If $r(c)>R$, [F4], [F9] and convergence make the sum $1/(j+1)+\|c-y_j\|$ smaller than this positive gap for some $j$, a contradiction.  Hence $r(c)=R$, so a minimizer exists. [step 2.1, step 2.2, step 3.1, step 3.2, F4, F6, F7, F9]

4.2 To prove uniqueness, let $c,d\in C$ both have radius $R$.  If $R=0$ and $c\ne d$, take $\eta=\|c-d\|/3$ in [F1]; at one sufficiently large $n$ the triangle inequality gives $\|c-d\|<2\eta$, a contradiction.  If $R>0$ and $c\ne d$, repeat step 3.2 with $\varepsilon=\|c-d\|$, the same $\theta,\delta_0,a,t$, and the two fixed points $c,d$.  Their radii equal $R<t$, so [F1] again gives a common tail, while [F5] makes the radius of their midpoint at most $t(1-\delta_0)<R$.  By [F8] that midpoint lies in $C$, the same contradiction.  Thus $c=d$. [step 1.1, step 3.2, F1, F5, F8]

5.1 Steps 4.1 and 4.2 give the asserted unique asymptotic center.  The zero space is included: its only nonempty subset is the singleton $\{0\}$ and the radius is zero.  A singleton $C$ is likewise immediate.  The argument uses only real norms and real midpoints, so it is unchanged over complex scalars. The set $C$ is expressly nonempty; no minimizer is asserted for the empty set. [step 4.1, step 4.2] ∎

## Source notes

Lim defines asymptotic radius and center for decreasing tails of a bounded net
in §1, then proves nonemptiness and uniqueness for closed convex subsets of
uniformly convex Banach spaces in Proposition 1 and Theorem 1 on printed
pp. 422–423.  The local proof is independent and makes its Countable Choice
use explicit.
