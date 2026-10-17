---
id: thm-line-integrals-under-oriented-reparametrization
kind: theorem
title: "Scalar line integrals are parametrization-independent; vector line integrals retain orientation and change sign when it reverses"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-piecewise-c1-path-operations-and-oriented-reparametrizations, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, lem-line-integrals-are-independent-of-the-piecewise-c1-partition, thm-substitution, thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Proposition 9.2.15"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb R^n$ be piecewise-$C^1$, and let $h:[c,d]\to[a,b]$ be an oriented piecewise-$C^1$ reparametrization. For continuous fields on the trace,

$$\int_{\gamma\circ h}f\,ds=\int_\gamma f\,ds.$$

If $h$ preserves orientation, then

$$\int_{\gamma\circ h}F\cdot d\mathbf r=\int_\gamma F\cdot d\mathbf r,$$

whereas if $h$ reverses orientation, then

$$\int_{\gamma\circ h}F\cdot d\mathbf r=-\int_\gamma F\cdot d\mathbf r.$$

## Facts & Assumptions
**Given:** The path, reparametrization, and continuous fields in the Statement.

[L1] An oriented reparametrization has nondegenerate source and target intervals and is a continuous piecewise-$C^1$ bijection with nonvanishing derivative of fixed sign on its smooth pieces; bijectivity excludes multiple coverings ([[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]).

[L2] The scalar integrand contains the speed norm, while the vector integrand contains the oriented velocity ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L3] The line-integral sums are unchanged by refinement of an admissible partition ([[lem-line-integrals-are-independent-of-the-piecewise-c1-partition]]).

[L4] If $u$ is differentiable with integrable derivative and $q$ is continuous on an interval containing its image, then $$\int_{u(c)}^{u(d)}q=\int_c^d(q\circ u)u',$$ with oriented limits ([[thm-substitution]]).

[L5] The total-derivative chain rule is $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).



## Proof

**Proof technique:** direct.

1.1 Refine at the breakpoints of $h$ and at their preimages of the breakpoints of $\gamma$. On each resulting interval, [L5] gives $(\gamma\circ h)'=(\gamma'\circ h)h'$. The refinements do not alter either line integral by [L3]. [given, L1, L3, L5]

2.1 For the scalar integrand, step 1.1 gives $$f(\gamma(h(t)))\lVert(\gamma\circ h)'(t)\rVert_2 =f(\gamma(h(t)))\lVert\gamma'(h(t))\rVert_2|h'(t)|.$$ [step 1.1, L2, algebra]

2.2 For the vector integrand, step 1.1 and bilinearity give $$\langle F(\gamma(h(t))),(\gamma\circ h)'(t)\rangle =\langle F(\gamma(h(t))),\gamma'(h(t))\rangle h'(t).$$ [step 1.1, L2, algebra]

3.1 When $h$ is increasing, $|h'|=h'$ and [L4] identifies the sum of these integrals with $\int_\gamma f\,ds$. When $h$ is decreasing, $|h'|=-h'$ and the reversal of the oriented substitution limits supplies the second minus sign. Thus the scalar equality holds in both cases. [L1, L4, step 2.1, algebra]

3.2 Applying [L4] piece by piece to step 2.2 gives the same oriented integral when $h(c)=a,h(d)=b$, and its negative when $h(c)=b,h(d)=a$. These are respectively the orientation-preserving and orientation-reversing cases in [L1]. [L1, L4, step 2.2]

4.1 Steps 3.1 and 3.2 prove all three formulas. The nondegenerate-interval, nonzero-derivative, and bijectivity hypotheses in [L1] rule out singleton reparametrizations, pauses, and multiple traversals. [step 3.1, step 3.2, L1] ∎
