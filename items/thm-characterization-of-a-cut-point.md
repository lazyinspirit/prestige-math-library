---
id: thm-characterization-of-a-cut-point
kind: theorem
title: Characterization of a cut point
status: published
origin: pipeline
deps:
  - cor-inner-product-induces-a-norm
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-countable-choice
  - def-cut-time-in-a-unit-tangent-direction
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-speed-and-length
  - lem-finite-dimensional-unit-spheres-are-sequentially-compact
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization
  - thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point
  - thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization
  - thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-hopf-rinow
  - thm-riemannian-distance-is-a-metric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173–190: the cut point of a geodesic and the statement that it occurs at or before the first conjugate point."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lemma 23.2.2 and proof, printed pp.167–169 (PDF labels P174–P176): the two-alternative characterization of the cut locus and the converse via a broken length-minimizing path."
---

## Statement

Assume exactly $\mathrm{AC}_\omega$ through the declared dependencies. Let
$(M,g)$ be a complete, connected, boundaryless, finite-dimensional Riemannian
manifold, let $p\in M$, let $v\in S_pM$ be a unit tangent vector, write
$\gamma(t)=\exp_p(tv)$ for the radial geodesic, and let
$c:=c_p(v)\in(0,+\infty]$ be its cut time.

(a) **Forward.** If $c<+\infty$, then at least one of the following holds:

1. $\gamma(0)=p$ and $\gamma(c)$ are conjugate along $\gamma|_{[0,c]}$;
2. there is a unit-speed minimizing geodesic $\sigma:[0,c]\to M$ with
   $\sigma(0)=p$, $\sigma(c)=\gamma(c)$ and $\sigma'(0)\ne v$, so that two
   distinct minimizing geodesics join $p$ to $\gamma(c)$ in time $c$.

(b) **Converse.**

1. If $t>0$ and $\gamma(0)$, $\gamma(t)$ are conjugate along $\gamma|_{[0,t]}$,
   then $c\le t$.
2. If $t>0$ and $\sigma:[0,t]\to M$ is a unit-speed minimizing geodesic with
   $\sigma(0)=p$, $\sigma(t)=\gamma(t)$ and $\sigma'(0)\ne v$, then $c\le t$.

In particular, if $c<+\infty$, then $c$ is the least positive instant at which
one of the two forward alternatives occurs. No completeness or compactness
beyond the stated completeness is assumed; dimension zero has no instance
because there is no unit tangent vector.

## Facts & Assumptions

**Given:** The complete connected boundaryless Riemannian manifold $(M,g)$, the
point $p\in M$, the unit vector $v\in S_pM$, the geodesic
$\gamma(t)=\exp_p(tv)$ and its cut time $c=c_p(v)$.

[A1] Countable choice is the assumption $\mathrm{AC}_\omega$ of
[[def-countable-choice]], inherited exactly through the declared Hopf–Rinow,
cut-time, conjugacy and length-minimization interfaces. No full Axiom of Choice
is assumed, and the local arguments of this proof make no further selection.

[F1] On the complete connected boundaryless manifold $(M,g)$, every two points
$x,y$ are joined by a minimizing geodesic: there is $w\in T_xM$ with
$\exp_x(w)=y$, $|w|_{g_x}=d(x,y)$, and $t\mapsto\exp_x(tw)$ on $[0,1]$ of
length $d(x,y)$ ([[thm-hopf-rinow]]).

[F2] On the complete connected boundaryless manifold $(M,g)$ the fibre
exponential domain is all of the tangent space, $\mathcal E_p=T_pM$
([[thm-hopf-rinow]]); hence $\exp_p$ and every radial curve
$t\mapsto\exp_p(tw)$ are defined for all $w\in T_pM$ and all real $t$.

[F3] The cut time is
$c_p(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty]$
([[def-cut-time-in-a-unit-tangent-direction]]).

[F4] The set $A_p(v)=\{t\ge0:d_g(p,\gamma(t))=t\}$ is an initial interval, and
a finite cut time is attained: if $c<+\infty$ then $c\in A_p(v)$
([[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]).

[F5] Riemannian distance is the infimum of lengths of piecewise $C^1$ curves,
and the length of a piecewise $C^1$ curve is the sum over its pieces of the
integral of the Riemannian speed; a unit-speed curve on a parameter interval of
length $s$ has length $s$
([[def-riemannian-distance-on-a-connected-manifold]],
[[def-riemannian-speed-and-length]]).

[F6] The Riemannian distance is a finite metric, so the triangle inequality
holds for all triples of points ([[thm-riemannian-distance-is-a-metric]]).

[F7] The unit tangent sphere $S_pM=\{w\in T_pM:|w|_g=1\}$ is sequentially
compact: every sequence in $S_pM$ has a subsequence converging in the norm
metric of $T_pM$ to a point of $S_pM$
([[lem-finite-dimensional-unit-spheres-are-sequentially-compact]]).

[F8] A length-minimizing piecewise smooth curve has a unit-speed affinely
parametrized geodesic as its arclength representative, and at a breakpoint of
the original parametrization any two nonzero one-sided velocities are positive
multiples of the same tangent vector
([[thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization]]).

[F9] The points $\gamma(a)$ and $\gamma(b)$ are conjugate along an affinely
parametrized geodesic segment exactly when some nonzero Jacobi field along it
vanishes at both endpoints; the multiplicity is the dimension of that space
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F10] For $w\ne0$ in the exponential domain of $p$, the points $p$ and
$\exp_p(w)$ are conjugate along $t\mapsto\exp_p(tw)$, $t\in[0,1]$, exactly when
$d(\exp_p)_w$ is singular; equivalently, exactly when $\exp_p$ fails to be a
local diffeomorphism at $w$
([[thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic]]).

[F11] A map is a local diffeomorphism when every point has an open neighbourhood
on which the map restricts to a diffeomorphism onto an open submanifold; in
particular such a restriction is injective
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F12] Conjugacy and multiplicity are unchanged under affine reparametrization
of the geodesic: if $\widetilde\gamma=\gamma\circ\phi$ for an affine bijection
$\phi$, then endpoint conjugacy for $\gamma$ and for $\widetilde\gamma$ are
equivalent ([[prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization]]).

[F13] If a nonconstant affinely parametrized geodesic $\gamma$ on $[a,b]$
has $\gamma(a)$ and $\gamma(c')$ conjugate along $\gamma|_{[a,c']}$ for some
$a<c'<b$, then there is a piecewise smooth curve on $[a,b]$ with the same
endpoints whose energy and length are strictly smaller than those of $\gamma$
([[thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point]]).

[F14] For every $(q,w)\in TM$ there is a unique maximal geodesic with value $q$
and velocity $w$ at parameter zero; geodesics agreeing in value and velocity at
a common parameter value therefore agree wherever both are defined, and the
map $(t,q,w)\mapsto\gamma_{q,w}(t)$ is smooth on its open domain
([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F15] On a real inner product space the induced length satisfies
$\|\lambda x\|=|\lambda|\,\|x\|$ for every scalar $\lambda$, and it is a norm
([[cor-inner-product-induces-a-norm]]).

## Proof

**Proof technique:** at the first cut time the minimizing rays to later points
have a limiting initial direction; different direction gives a second
minimizer, equal direction forces non-injectivity of the exponential map; the
converses use the short curve past a conjugate point and the no-corners theorem
for a broken minimizer.

1.1 Set-up and immediate consequences. [F3, F4, F5, F6, given]
Put $A:=A_p(v)=\{t>0:d_g(p,\gamma(t))=t\}$, so that $c=\sup A$ by [F3]. By
[F4] the set $A$ is an initial interval and, if $c<+\infty$, then
$c\in A$ and $d_g(p,\gamma(c))=c$. For every $t\ge0$ the segment
$\gamma|_{[0,t]}$ is a unit-speed curve of length $t$ joining $p$ to
$\gamma(t)$, so [F5] gives $d_g(p,\gamma(t))\le t$; consequently every $t>c$
satisfies $t\notin A$ and hence $d_g(p,\gamma(t))<t$, because $c$ is an upper
bound for $A$.

2.1 Converse for a conjugate instant. [F5, F6, F13, step 1.1]
Let $t>0$ and suppose $\gamma(0)=p$ and $\gamma(t)$ are conjugate along
$\gamma|_{[0,t]}$. For every $b>t$ the geodesic $\gamma|_{[0,b]}$ is
nonconstant, and its restriction to $[0,t]$ exhibits the conjugate pair
$\gamma(0)$, $\gamma(t)$; [F13] therefore supplies a piecewise smooth curve on
$[0,b]$ with the same endpoints and strictly smaller length than
$L(\gamma|_{[0,b]})=b$. Its length is an admissible competitor for the
distance, so $d_g(p,\gamma(b))<b$; thus no $b>t$ lies in $A$, and since
$c=\sup A$ we get $c\le t$. [F5, F6, F13, step 1.1]

2.2 Converse for two distinct minimizing geodesics. [F5, F6, F8, F14, step 1.1]
Let $t>0$ and let $\sigma:[0,t]\to M$ be a unit-speed minimizing geodesic with
$\sigma(0)=p$, $\sigma(t)=\gamma(t)$ and $\sigma'(0)\ne v$; in particular
$d_g(p,\gamma(t))=t$. Suppose for contradiction that $b\in A$ for some $b>t$,
so that $d_g(p,\gamma(b))=b$. Define the concatenation $C:[0,b]\to M$ by
$C(s)=\sigma(s)$ for $0\le s\le t$ and $C(s)=\gamma(s)$ for $t\le s\le b$;
it is continuous and piecewise smooth, and since both pieces have unit speed,
[F5] gives $L(C)=L(\sigma)+L(\gamma|_{[t,b]})=t+(b-t)=b=d_g(p,\gamma(b))$, so
$C$ minimizes length among piecewise $C^1$ curves with the same endpoints. By
[F8] the arclength representative $\bar C$ of $C$ is a unit-speed affinely
parametrized geodesic; the arclength function of $C$ is the identity because
$C$ has unit speed on each piece, so $\bar C=C$ and $C$ is a unit-speed
geodesic on $[0,b]$, in particular differentiable at $t$. Its one-sided
derivatives at $t$ are $\sigma'(t)$ and $\gamma'(t)$, so
$\sigma'(t)=\gamma'(t)$: the geodesics $\sigma$ and $\gamma$ agree in value and
velocity at the parameter value $t$. Translating the parameter to $t$ by
$r\mapsto t+r$ (which preserves the geodesic equation), the uniqueness in
[F14] makes the two agree on the whole interval $[0,t]$, so
$\sigma'(0)=\gamma'(0)=v$, a contradiction. Hence no $b>t$ lies in $A$, and
$c=\sup A\le t$. [F5, F6, F8, F14, step 1.1]

2.3 Forward: minimizing geodesics to times just beyond $c$. [F1, F2, F3, F4, F5, F6, F15, step 1.1]
Now assume $c<+\infty$. Since $c>0$, fix $K$ with $c-1/k>0$ for every $k\ge K$
and put $t_k:=c+1/k$ and $\ell_k:=d_g(p,\gamma(t_k))$ for $k\ge K$. The set-up
above gives $t_k\notin A$, so $\ell_k<t_k$; and by [F1], applied to the pair
$p,\gamma(t_k)$, there is $w_k\in T_pM$ with $\exp_p(w_k)=\gamma(t_k)$,
$|w_k|_g=\ell_k$, the curve $s\mapsto\exp_p(sw_k)$ on $[0,1]$ having length
$\ell_k$. Since $d_g(p,\gamma(c))=c$ and
$d_g(\gamma(c),\gamma(t_k))\le t_k-c=1/k$ by [F5], the triangle inequality [F6]
gives $\ell_k\ge c-1/k$; with $\ell_k\le t_k=c+1/k$ this shows
$\ell_k\to c$, so $\ell_k>0$ and $u_k:=w_k/\ell_k$ is defined. By [F15],
$|u_k|_g=\ell_k^{-1}|w_k|_g=1$, so $u_k\in S_pM$, and $\exp_p(\ell_ku_k)=
\exp_p(w_k)=\gamma(t_k)$ because $\ell_ku_k=w_k$. [F1, F2, F3, F4, F5, F6, F15, step 1.1]

3.1 Passing to a limiting direction. [F7, step 2.3]
By [F7] the unit sphere $S_pM$ is sequentially compact, so there are a strictly
increasing index map $k$ and a unit vector $u\in S_pM$ with
$u_{k_j}\to u$ in the norm metric of $T_pM$. [F7, step 2.3]

4.1 The limiting geodesic reaches $\gamma(c)$. [F2, F5, F14, F15, step 2.3, step 3.1]
Define $\sigma:[0,c]\to M$ by $\sigma(s)=\exp_p(su)$; this is defined on all of
$[0,c]$ by [F2] and is a unit-speed geodesic because $|u|_g=1$. From
$\ell_{k_j}\to c$ and $u_{k_j}\to u$ we get $\ell_{k_j}u_{k_j}\to cu$ in
$T_pM$, because
$|\ell_{k_j}u_{k_j}-cu|_g\le|\ell_{k_j}-c|+c\,|u_{k_j}-u|_g$ by [F15]; the map
$(s,w)\mapsto\exp_p(sw)$ is continuous on $\mathbb R\times T_pM$ by [F14], and
$\exp_p(\ell_{k_j}u_{k_j})=\gamma(t_{k_j})\to\gamma(c)$ because $\gamma$ is a
geodesic, hence continuous. Therefore
$\sigma(c)=\exp_p(cu)=\gamma(c)$. [F2, F5, F14, step 2.3, step 3.1]

5.1 The limiting geodesic is minimizing. [F5, F6, step 1.1, step 4.1]
The curve $\sigma|_{[0,c]}$ is a unit-speed geodesic on a parameter interval of
length $c$, so $L(\sigma|_{[0,c]})=c$ by [F5], and it joins $p$ to
$\gamma(c)$, where $d_g(p,\gamma(c))=c$ by step 1.1. Its length equals the
distance between its endpoints, so it is a minimizing geodesic. [F5, F6, step 1.1, step 4.1]

6.1 Forward alternatives. [F9, F10, F11, F12, F14, F15, step 2.3, step 3.1, step 4.1, step 5.1]
If $u\ne v$, then $\sigma$ and $\gamma|_{[0,c]}$ are unit-speed geodesics from
$p$ to $\gamma(c)$ with different initial velocities, hence distinct, and both
minimize by step 5.1; this is alternative 2. If $u=v$, then for every $j$ the
vectors $w_{k_j}=\ell_{k_j}u_{k_j}$ and $z_{k_j}:=t_{k_j}v$ satisfy
$\exp_p(w_{k_j})=\gamma(t_{k_j})=\exp_p(z_{k_j})$, both converge to $cv=cu$, and
they are distinct because $|w_{k_j}|_g=\ell_{k_j}$ and
$|z_{k_j}|_g=t_{k_j}|v|_g=t_{k_j}$ differ; hence $\exp_p$ is not injective on
any neighbourhood of $cv$. By [F11] a local diffeomorphism at $cv$ would be
injective on some neighbourhood, so $\exp_p$ fails to be a local diffeomorphism
at $cv$; by [F10], applied to the nonzero vector $cv$, the point
$\exp_p(cv)=\gamma(c)$ is conjugate to $p$ along $s\mapsto\exp_p(scv)$ on
$[0,1]$. The affine bijection $\phi:[0,1]\to[0,c]$, $\phi(s)=cs$, presents
the map $\eta(s):=\exp_p(scv)$ satisfies $\eta=\gamma|_{[0,c]}\circ\phi$, so [F12] transfers
the conjugacy to $\gamma(0)$, $\gamma(c)$ along $\gamma|_{[0,c]}$, which is
alternative 1. [F9, F10, F11, F12, F14, F15, step 2.3, step 3.1, step 4.1, step 5.1]

7.1 Assembly, least-instant form and boundary audit. [A1, F2, F3, F4, step 1.1, step 2.1, step 2.2, step 6.1]
Step 6.1 proves (a); steps 2.1 and 2.2 prove the two clauses of (b). If
$c<+\infty$, step 6.1 shows that at least one of the two events occurs at
$t=c$, while (b) shows that no such event occurs at any $t<c$; hence $c$ is
the least positive instant of either kind. The audit: in dimension zero there
is no unit tangent vector $v$, so there is no instance; in dimension one
$S_pM$ has two points and all the arguments above apply verbatim (the
sequential compactness of [F7] and the uniqueness of [F14] are dimension-free);
$\gamma$ is nonconstant because $|v|_g=1$, so constant geodesics are excluded
and the multiplicity-bound statement of [F9] is not needed; the case
$c=+\infty$ is allowed in (b) only as the impossible conclusion $c\le t$, so
when $c=+\infty$ neither event of (b) occurs; the compactness used in step 3.1
is supplied by [F7], and exactly the declared $\mathrm{AC}_\omega$ is inherited
through the Hopf–Rinow, cut-time, conjugacy and length-minimization interfaces
[A1]. No converse beyond (b) is claimed: conjugacy or a second minimizer at an
instant $t>c$ is not excluded, and nothing is asserted about how many
minimizing geodesics exist. $\square$

## Source locator

Datar, *Lectures on Riemannian Geometry*, Lemma 23.2.2 and its proof, printed
pp.167–169, is the model: the minimizing geodesics to points just beyond the
cut time yield a limiting unit direction, a different direction gives two
minimal geodesics, and an equal direction gives non-injectivity of $\exp_p$,
hence a critical point; conversely, a second minimal geodesic makes the broken
path a length-minimizer whose arclength representative is a geodesic. Lee,
*Riemannian Manifolds*, Chapter 10, printed pp.173–190, supplies the cut-point
definition and the principle that a geodesic does not minimize past its first
conjugate point. The compactness of the unit tangent sphere used in the
limiting-direction step is supplied by
[[lem-finite-dimensional-unit-spheres-are-sequentially-compact]], whose proof
is not repeated here; all other steps are carried out above.
