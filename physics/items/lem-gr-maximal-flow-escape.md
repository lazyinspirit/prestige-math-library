---
id: lem-gr-maximal-flow-escape
kind: lemma
title: "Escape lemma for manifold flows: a finite maximal time forces the integral curve to leave every compact set"
status: published
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: contradiction
deps: [thm-unique-maximal-integral-curve-through-each-point, thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves, def-integral-curve-of-a-vector-field, def-smooth-vector-field-as-a-tangent-bundle-section, def-smooth-manifold, def-compact-space, thm-metric-compactness-equivalences, def-countable-choice, def-dependent-choice]
dependency_roles:
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves: mathematical-premise
  def-integral-curve-of-a-vector-field: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-compact-space: mathematical-premise
  thm-metric-compactness-equivalences: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Springer GTM 218 (2012): the escape lemma for integral curves (Lemma 9.19 in the second edition), with the maximal integral curve and local flow theorem"
      url: "https://doi.org/10.1007/978-1-4419-9982-5"
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems: maximal solutions and escape from compact sets, Chapter 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $M$ be a smooth
manifold without boundary, let $X$ be a smooth vector field on $M$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]), let $p\in M$ and
let $\gamma:(\alpha,\beta)\to M$ be the unique maximal integral curve of $X$
with $\gamma(0)=p$ ([[thm-unique-maximal-integral-curve-through-each-point]],
[[def-integral-curve-of-a-vector-field]]). If $\beta<+\infty$ then for every
compact set $K\subseteq M$
([[def-compact-space]]) there is $s\in(\alpha,\beta)$ such that
$\gamma(t)\notin K$ for every $t\in(s,\beta)$. Dually, if $\alpha>-\infty$
then for every compact $K$ there is $s$ such that $\gamma(t)\notin K$ for
every $t\in(\alpha,s)$.

## Facts & Assumptions

**Given:** A smooth manifold $M$ without boundary, a smooth vector field $X$, a point $p$, the maximal integral curve $\gamma:(\alpha,\beta)\to M$ with $\gamma(0)=p$, a compact set $K\subseteq M$, and the assumption $\beta<+\infty$.

[L1] Local flows with uniform time: for every $q\in M$ there exist $h>0$, an open neighborhood $U$ of $q$ and a smooth map $\Phi:(-h,h)\times U\to M$ whose time slices are the unique integral curves of $X$ ([[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]).

[L2] Maximality: the maximal integral curve $\gamma$ has domain $(\alpha,\beta)$ equal to the union of the domains of all integral curves of $X$ through $p$; in particular no integral curve through $p$ is defined on an interval strictly containing $(\alpha,\beta)$ ([[thm-unique-maximal-integral-curve-through-each-point]], [[def-integral-curve-of-a-vector-field]]).

[L3] Every sequence in a compact subset $K$ of a Hausdorff manifold has a convergent subsequence. Indeed, the closures in $K$ of its tails are nonempty closed sets with the finite-intersection property, so compactness gives a point $q$ in their intersection. A chart at $q$ supplies the countable neighborhood basis of coordinate balls of radii tending to zero; recursively taking the least index beyond the preceding index whose term lies in that ball gives a subsequence converging to $q$. This proves the needed sequential compactness without invoking a global metrization theorem ([[def-compact-space]], [[def-smooth-manifold]]).

## Proof

**Proof technique:** contradiction.

1.1 (Assume a compact set is visited near the endpoint.) Suppose the assertion fails for $K$: there are $t_k\in(\alpha,\beta)$ with $t_k\to\beta$ and $\gamma(t_k)\in K$; passing to a subsequence we may assume $t_k$ is strictly increasing to $\beta$. [assume-contra, given]

2.1 (A limit point and a local flow.) By sequential compactness of $K$ [L3] there is a subsequence, renamed $\gamma(t_k)$, converging to some $q\in K$. Apply [L1] at $q$: there are $h>0$, an open neighborhood $U$ of $q$ and a smooth $\Phi:(-h,h)\times U\to M$ whose slices are integral curves. Since $\gamma(t_k)\to q$, for some $k$ both $\gamma(t_k)\in U$ and $\beta-t_k<h$ hold. [step 1.1, L1, L3, choose]

3.1 (Extension beyond the maximal time.) Define $\widetilde\gamma:(\alpha,t_k+h)\to M$ by $\widetilde\gamma(t):=\gamma(t)$ for $t<t_k$ and $\widetilde\gamma(t):=\Phi(t-t_k,\gamma(t_k))$ for $t\in[t_k,t_k+h)$. The two pieces agree at $t_k$; on the overlap near $t_k$ they are both integral curves with the same value at $t_k$, so they agree by uniqueness of integral curves [L1], and $\widetilde\gamma$ is an integral curve of $X$ through $p$. Since $t_k+h>\beta$, its domain strictly contains $(\alpha,\beta)$, contradicting maximality [L2]. Hence no such sequence exists, which is the assertion; the past-end assertion is the same argument applied to $-X$ (the maximal integral curve of $-X$ through $p$ is $t\mapsto\gamma(-t)$, with endpoint $-\alpha$). [step 2.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **Where each hypothesis is used.** Second countability enters only through metrizability of $M$, which converts compactness of $K$ into sequential compactness; the local flow is used twice: to extend the curve beyond a finite endpoint and to identify the two pieces on their overlap.
- **Use.** In [[thm-gr-smooth-cauchy-temporal-splitting]] this escape statement turns a finite maximal time of a flow line into a contradiction with the divergence of the volume time, giving completeness of the temporal gradient field.
