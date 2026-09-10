---
id: lem-variable-radius-injectivity-for-normal-addition
kind: lemma
title: "Variable-radius injectivity for normal addition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section,
       def-normal-addition-map-for-a-euclidean-submanifold, def-countable-choice,
       thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function,
       def-the-standard-smooth-step-function,
       thm-a-locally-finite-sum-of-smooth-functions-is-smooth,
       thm-extreme-value-metric, thm-algebra-of-derivatives,
       prop-identity-maps-and-composites-of-smooth-maps-are-smooth]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: locally-repaired
    date: 2026-09-09
    scope: owner-authorized-local-radius-and-smooth-minorant-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.24, pp. 139–140"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11, Theorem 3.54"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $S\subseteq\mathbb R^m$ be an embedded smooth submanifold, and let
$E:N^\perp S\to\mathbb R^m$ be the normal addition map. Then there exists a
positive smooth function $\delta:S\to(0,\infty)$ such that $E$ is injective on
$$ \Omega_\delta:=\{(p,v)\in N^\perp S:\|v\|<\delta(p)\}. $$

## Facts & Assumptions

**Given:** Countable choice, an embedded smooth submanifold $S\subseteq\mathbb R^m$, and its normal addition map $E$.

[L1] The map $E$ is a local diffeomorphism along the zero section ([[lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section]]).

[L2] The orthogonal normal bundle is the set of pairs $(p,v)$ with $v\perp T_pS$, with its standard smooth bundle structure, and $E(p,v)=p+v$ ([[def-normal-addition-map-for-a-euclidean-submanifold]]). Its topology is the subspace topology in $\mathbb R^m\times\mathbb R^m$: local smooth normal frames identify the bundle with their images by continuous coefficient maps and continuous inverses.

[A1] Countable choice is [[def-countable-choice]]. It covers the normal-bundle manifold interface used in [L1, L2] and supplies a smooth function $\rho:S\to[0,\infty)$ with compact closed sublevels ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[L3] The standard step function $\sigma$ is smooth, zero on $(-\infty,0]$, one on $[1,\infty)$, and strictly positive on $(0,\infty)$ ([[def-the-standard-smooth-step-function]]). The last assertion follows immediately from its defining positive flat-function numerator when $0<t<1$.

[L4] Sums with locally finite supports are smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]). Products and quotients with nonzero denominators are smooth on real open intervals by repeated derivative rules ([[thm-algebra-of-derivatives]]); compositions of smooth maps are smooth ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[L5] A positive continuous real function on a nonempty compact metric space has a positive attained minimum ([[thm-extreme-value-metric]]).

## Proof
**Proof technique:** direct.

1.1 If $S$ is empty, its empty function is a positive smooth radius with the stated injectivity property. Suppose henceforth that $S$ is nonempty. For $p\in S$ and $a>0$ put $$V_a(p)=\{(q,v)\in N^\perp S:\|q-p\|<a,\ \|v\|<a\}.$$ By [L2] these are open and form a neighbourhood basis at $(p,0)$. By [L1] some such set lies in a neighbourhood on which $E$ is a diffeomorphism. Thus $$A_p=\{a\in(0,1]:E|_{V_a(p)}\text{ is a diffeomorphism onto its image}\}$$ is nonempty and bounded above by one. Define $r(p)=\sup A_p\in(0,1]$. No simultaneous choice of local radii is made, and the cap is imposed before taking the supremum. [given, L1, L2, construct]

2.1 For every $0<a<r(p)$, the supremum property supplies $b\in A_p$ with $a<b$, so restriction to the open set $V_a(p)$ shows $a\in A_p$. Any two points of $V_{r(p)}(p)$ lie in some common $V_a(p)$ with $a<r(p)$, by taking $a$ larger than their finitely many strict distance bounds. Hence $E$ is injective on $V_{r(p)}(p)$. Each point there also has an open neighbourhood in one such $V_a(p)$, on which $E$ is a local diffeomorphism. Therefore its image is open, and these local smooth inverses agree by injectivity, proving that $E|_{V_{r(p)}(p)}$ itself is a diffeomorphism onto its image. This establishes the supremum endpoint rather than assuming it is eligible. [step 1.1, algebra]

3.1 Let $p,q\in S$. For $0<a<r(p)-\|p-q\|$ one has $a<1$ and $V_a(q)\subseteq V_{r(p)}(p)$ by the triangle inequality. Step 2.1 and restriction imply $a\in A_q$, so $r(q)\ge a$. If $r(p)-\|p-q\|>0$, taking the supremum over these $a$ gives $r(q)\ge r(p)-\|p-q\|$; if not, the inequality follows from $r(q)>0$. Interchanging the points gives $$|r(p)-r(q)|\le\|p-q\|.$$ Thus $r$ is positive and continuous. [step 1.1, step 2.1, algebra]

4.1 Use [A1] to fix a smooth nonnegative proper exhaustion $\rho$. For integers $n\ge0$ put $K_n=\{p:\rho(p)\le n+1\}$, a compact set. Define $$a_n=\begin{cases}\frac14\min\{1,\min_{p\in K_n}r(p)\},&K_n\ne\varnothing,\\[2pt]\frac14,&K_n=\varnothing.\end{cases}$$ When $K_n$ is nonempty its induced metric is compact, since $S$ is embedded, and [L5] and step 3.1 give a positive minimum. Thus $a_n>0$. Each coefficient is a uniquely specified real value, so defining all of them requires no additional countable selection. [A1, L5, step 3.1, construct]

5.1 For $t\in\mathbb R$ and integers $n\ge0$ put $$\psi_n(t)=\sigma(t-n+1)\sigma(n+1-t).$$ These functions are smooth and nonnegative, supported in $[n-1,n+1]$, and positive for $n-1<t<n+1$. The supports are locally finite on $\mathbb R$: a bounded neighbourhood of any fixed $t$ meets only finitely many such integer-indexed intervals. Their positive sets cover $(-1,\infty)$; in particular $\psi_0(0)=1$, and every nonnegative integer $n$ has $\psi_n(n)=1$. By [L4], $$B(t)=\sum_{n\ge0}\psi_n(t),\qquad C(t)=\sum_{n\ge0}a_n\psi_n(t)$$ are smooth, with $B,C>0$ on $(-1,\infty)$. Therefore $F=C/B$ is smooth and positive there. [L3, L4, step 4.1, construct]

6.1 Set $\delta=F\circ\rho$, a positive smooth function by [L4]. At a point $p$, if $\psi_n(\rho(p))>0$, then $\rho(p)<n+1$ and hence $p\in K_n$. Consequently $a_n\le r(p)/4$. As $F(\rho(p))$ is the weighted average of these finitely many active coefficients with nonnegative weights summing to one, $$0<\delta(p)\le r(p)/4<r(p)/2.$$ Empty sublevels never contribute an active term. At endpoints a bump is zero, while the integer-centred bump is positive; thus no zero denominator occurs. This construction works equally on a zero-dimensional manifold. [step 4.1, step 5.1, L4, algebra]

7.1 Suppose $E(p,v)=E(q,w)$ with both points in $\Omega_\delta$, and arrange $r(q)\le r(p)$. By [L2] and step 6.1, $$\|p-q\|=\|w-v\|\le\|v\|+\|w\|<\delta(p)+\delta(q)\le\frac{r(p)+r(q)}4\le\frac{r(p)}2<r(p).$$ Both normal-vector lengths are less than $r(p)$ as well. Thus both points lie in $V_{r(p)}(p)$, where step 2.1 proves injectivity, so they coincide. Therefore $E$ is injective on $\Omega_\delta$. Together with the empty case this proves the claim. [L2, step 1.1, step 2.1, step 6.1, algebra] ∎

## Remarks

- Once the normal-bundle manifold/local-inverse data and a smooth nonnegative
  exhaustion with compact sublevels are supplied, the radius construction makes
  no further choices. Compact minimum values are unique; no minimizing points
  are selected as a family.
- No partition-of-unity, Urysohn, or Euclidean Whitney approximation theorem is
  used to smooth the radius. The explicit one-variable locally finite sums
  retain the positive smooth radius required by the statement.
