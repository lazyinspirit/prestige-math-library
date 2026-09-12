---
id: "thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization"
kind: "theorem"
title: "Length minimizers are constant-speed geodesics up to reparametrization"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","def-countable-choice","def-piecewise-c-one-curve-on-a-manifold","def-riemannian-speed-and-length","lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision","prop-length-is-additive-under-concatenation-and-invariant-under-reversal","prop-components-of-a-topological-manifold-are-open-and-at-most-countable","thm-path-connected-implies-connected","def-riemannian-distance-on-a-connected-manifold","thm-riemannian-distance-is-a-metric","def-the-integral-function","thm-the-integral-function-is-lipschitz","thm-intermediate-value","thm-the-riemannian-distance-topology-is-the-manifold-topology","thm-existence-of-geodesically-convex-neighborhoods","thm-riemannian-length-is-invariant-under-orientation-preserving-piecewise-c-one-reparametrization","prop-geodesics-have-constant-speed-for-a-metric-compatible-connection","prop-affine-reparametrization-of-a-geodesic-is-a-geodesic","thm-ftc-first-part","thm-chain-rule-for-differentials-of-smooth-maps","def-geodesic-of-an-affine-connection"]
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 18.0.1 and Corollary 18.1.3, pp.133--137
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    - title: Roland Steinbauer, Riemannian Geometry, Remark 2.3.10 and Corollary 2.3.11, printed pp.59--60
      url: https://www.mat.univie.ac.at/~stein/teaching/skripten/rg-2025-12-11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g)$ be a smooth boundaryless Riemannian manifold, let $a<b$, and let $c:[a,b]\to M$ be a piecewise smooth curve that minimizes length among all piecewise-$C^1$ curves with the same endpoints. Put $L=L_g(c)$. If $c$ is nonconstant, then $L>0$ and there are a unique continuous nondecreasing surjection
$$s:[a,b]\longrightarrow[0,L],\qquad s(t)=L_g(c|_{[a,t]}),$$
and a unique curve $\bar c:[0,L]\to M$ such that
$$c=\bar c\circ s.$$
The curve $\bar c$ is a unit-speed affinely parametrized geodesic. Consequently
$$\widetilde c(t)=\bar c\!\left(\frac{L(t-a)}{b-a}\right)$$
is a constant-speed geodesic on $[a,b]$ with the same oriented trace as $c$.

Thus the precise ``no corners'' conclusion is that the constant-speed representative $\bar c$ is smooth and unbroken. At a breakpoint of the original parametrization, any two nonzero one-sided velocities are positive multiples of the same tangent vector. A jump involving a zero velocity may remain in the original parametrization, whether the zero-speed points are isolated, accumulate, or occupy a pause interval; the arclength factorization regularizes the parametrization and collapses every pause interval.

## Facts & Assumptions

**Given:** The manifold, interval, curve, and minimizing hypothesis in the statement; $C$ denotes the connected component of $c(a)$.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] [[def-piecewise-c-one-curve-on-a-manifold]], [[def-riemannian-speed-and-length]], and [[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]] make the piecewise speed integrable, allow pauses, and make every restricted length independent of a refined subdivision. [[prop-length-is-additive-under-concatenation-and-invariant-under-reversal]] gives additivity under finite concatenation.

[F2] [[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]] makes $C$ an open connected Riemannian submanifold. By [[thm-path-connected-implies-connected]], the trace of every path beginning in $C$ stays in $C$. Thus [[def-riemannian-distance-on-a-connected-manifold]] and [[thm-riemannian-distance-is-a-metric]] give a finite genuine metric $d_C$ whose competitors are exactly the ambient piecewise-$C^1$ paths between points of $C$.

[F3] [[def-the-integral-function]] and [[thm-the-integral-function-is-lipschitz]] make the integral function of a bounded integrable speed continuous. [[thm-intermediate-value]] makes a continuous real function attain every value between its endpoint values.

[F4] [[thm-the-riemannian-distance-topology-is-the-manifold-topology]] identifies the $d_C$-topology with the submanifold topology.

[F5] Under [A1], [[thm-existence-of-geodesically-convex-neighborhoods]] gives each point a strongly geodesically convex open neighbourhood and says that every piecewise smooth global minimizer between two points of that neighbourhood is a monotone reparametrization of its unique normalized minimizing geodesic.

[F6] [[thm-riemannian-length-is-invariant-under-orientation-preserving-piecewise-c-one-reparametrization]] includes nondecreasing reparametrizations with constant intervals. [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]] gives constant speed, and [[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]] preserves the geodesic equation under affine changes of parameter.

[F7] On every smooth piece, [[thm-ftc-first-part]] differentiates its cumulative speed integral, and [[thm-chain-rule-for-differentials-of-smooth-maps]] is the intrinsic chain rule. [[def-geodesic-of-an-affine-connection]] makes smoothness and the local equation $D_t\gamma'=0$ the defining geodesic conditions.

## Proof

**Proof technique:** direct.

1.1 Every path beginning at $c(a)$ has path-connected, hence connected, trace and therefore lies in $C$ by [F2]. In particular $c([a,b])\subseteq C$, and the ambient minimizing hypothesis is equivalent to $L=d_C(c(a),c(b))$. If $a\le u\le v\le b$, then $c|_{[u,v]}$ also minimizes between its endpoints: otherwise concatenating $c|_{[a,u]}$, a shorter competitor, and $c|_{[v,b]}$ would, by [F1], give a curve from $c(a)$ to $c(b)$ of length less than $L$. Hence $$L_g(c|_{[u,v]})=d_C(c(u),c(v)).$$ [F1, F2, given, contradiction]

2.1 Fix an admissible finite smooth subdivision and let $w(t)=|\dot c(t)|_g$ on each piece, assigning arbitrary one-sided values at the finitely many breakpoints. By [F1], $w$ is bounded, nonnegative and Riemann integrable, and $$s(t):=\int_a^t w=L_g(c|_{[a,t]}),\qquad s(v)-s(u)=L_g(c|_{[u,v]})\quad(u\le v).$$ Thus $s$ is nondecreasing, while [F3] makes it continuous; moreover $s(a)=0$ and $s(b)=L$. If $L=0$, the displayed identity and step 1.1 give $d_C(c(a),c(t))=s(t)=0$ for every $t$, so the metric property in [F2] makes $c$ constant. Therefore the assumed nonconstant curve has $L>0$, and [F3] makes $s$ surjective onto $[0,L]$. [F1, F2, F3, step 1.1]

3.1 For $r\in[0,L]$, define $\bar c(r)=c(t)$ for any $t$ satisfying $s(t)=r$. This is well defined: if $u\le v$ are two such parameters, then step 2.1 gives $L_g(c|_{[u,v]})=0$, and step 1.1 plus the metric property gives $c(u)=c(v)$. Existence of a parameter is step 2.1, so this unique-value definition makes no selection. It gives $c=\bar c\circ s$, and uniqueness follows from surjectivity of $s$. [F2, F3, step 1.1, step 2.1]

4.1 If $0\le r\le q\le L$, take $u,v$ with $s(u)=r$ and $s(v)=q$. Monotonicity gives $u\le v$ unless $r=q$, and steps 1.1--2.1 give $$d_C(\bar c(r),\bar c(q))=L_g(c|_{[u,v]})=s(v)-s(u)=q-r.$$ The case $r=q$ is the metric diagonal. Thus $\bar c$ is distance preserving and therefore $d_C$-continuous; by [F4] it is continuous as a manifold-valued curve. [F2, F4, step 1.1, step 2.1, step 3.1]

5.1 Fix $r_0\in[0,L]$. By [F5], choose a strongly geodesically convex open neighbourhood $W$ of $\bar c(r_0)$. Step 4.1 and [F4] give a positive relative interval $J\subseteq[0,L]$ about $r_0$ with $\bar c(J)\subseteq W$. Choose $\alpha<\beta$ in $J$ so that $r_0\in[\alpha,\beta]$, using a one-sided choice when $r_0$ is $0$ or $L$. Take $u\le v$ with $s(u)=\alpha$ and $s(v)=\beta$. By step 1.1, $c|_{[u,v]}$ is a global minimizer from $x=\bar c(\alpha)$ to $y=\bar c(\beta)$, so [F5] supplies its unique normalized minimizing geodesic $\gamma:[0,1]\to W$ and a continuous nondecreasing piecewise-smooth surjection $h:[u,v]\to[0,1]$ with $c(t)=\gamma(h(t))$. [A1, F2, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 The connector $\gamma$ has constant speed by [F6], and its length is $$d_C(x,y)=\beta-\alpha$$ by step 4.1, so that speed is $\beta-\alpha$. Applying [F6] to $h|_{[u,t]}:[u,t]\to[0,h(t)]$ gives $$s(t)-\alpha=L_g(c|_{[u,t]})=L_g(\gamma|_{[0,h(t)]})=(\beta-\alpha)h(t).$$ For each $r\in[\alpha,\beta]$, continuity of $s|_{[u,v]}$ supplies $t\in[u,v]$ with $s(t)=r$. Hence step 3.1 yields $$\bar c(r)=\gamma\!\left(\frac{r-\alpha}{\beta-\alpha}\right).$$ By [F6], this is a unit-speed affinely parametrized geodesic on $[\alpha,\beta]$. [F3, F6, step 2.1, step 3.1, step 4.1, step 5.1]

7.1 Since $r_0$ was arbitrary, step 6.1 represents $\bar c$ near every point of $[0,L]$ by an affine reparametrization of a smooth geodesic. Smoothness and the equation $D_r\bar c'=0$ are local, so [F7] makes $\bar c$ a unit-speed geodesic on all of $[0,L]$, with the prescribed one-sided endpoint interpretation. The affine map $t\mapsto L(t-a)/(b-a)$ is increasing and onto; [F6] therefore makes $\widetilde c$ a geodesic of constant speed $L/(b-a)$ with the same oriented trace as $\bar c$, hence as $c$. [F6, F7, step 3.1, step 6.1]

8.1 On the interior of each smooth piece of $c$, [F7] gives $s'(t)=w(t)=|\dot c(t)|_g$, and the chain rule applied to $c=\bar c\circ s$ gives $$\dot c(t)=|\dot c(t)|_g\,\bar c'(s(t)).$$ The same formula holds for each one-sided derivative at a breakpoint. Since $\bar c'$ is continuous and has unit norm, two nonzero one-sided velocities there are positive multiples of the same vector. If one speed is zero, a derivative jump may remain in $c$ regardless of whether zeros of speed are isolated, accumulate at the breakpoint, or include a pause interval. The map $s$ collapses each interval on which no length is accumulated; in every case the unit-speed representative $\bar c$ has no corner. This proves exactly the qualified no-corners assertion. [F1, F7, step 2.1, step 3.1, step 7.1]

9.1 The empty manifold admits no such nonconstant curve. On a zero-dimensional manifold every interval-valued curve is locally constant, so the nonconstant case is again empty; dimension one is covered without change. Coincident endpoints force $L=0$ and hence constancy by step 2.1. The hypothesis $a<b$ prevents a singleton source; both included endpoints were handled one-sidedly. Assumption [A1] is used exactly through [F5], whose convex-neighbourhood construction inherits $\mathrm{AC}_\omega$ from the exponential-map development. The component, cumulative integral, unique-value factorization, two preimages at one proof instance, and finite local choices introduce no additional choice principle. There is one implication, not an iff claim. [A1, F2, F3, F5, F7, step 2.1, step 3.1, step 5.1, step 7.1, step 8.1] ∎

## Source locator

Steinbauer, Remark 2.3.10 and Corollary 2.3.11 with proof, printed pp.59--60, proves that subsegments of a minimizer minimize, covers the curve by convex neighbourhoods, reparametrizes the resulting pieces as geodesics, and removes every genuine break by uniqueness in a convex neighbourhood. Datar, Theorem 18.0.1 and Corollary 18.1.3 with proofs, printed pp.133--137, supplies the normal-neighbourhood uniqueness and minimizing ingredients. The cumulative-arclength argument here additionally treats zero-speed pauses explicitly instead of silently deleting constant parameter intervals.
