---
id: cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity
kind: counterexample
title: "Uniformly tiny perturbations on larger and larger shells of a noncompact manifold can create new critical points far out"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [rem-noncompact-morse-genericity-is-not-an-open-dense-claim]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct construction
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
---

## Statement refuted

On a noncompact manifold, perturbations that are uniformly tiny in value cannot
create new critical points far out at infinity.

## Facts & Assumptions

**Given:** A smooth bump function $\beta:\mathbb R\to\mathbb R$ supported in $[-1,1]$ with $\beta'(0)=-1$, the base function $f(x)=x$, and the perturbations $g_n(x)=x+\frac1n\beta(n^2(x-n))$.

[L1] The A-page remark records that compact-set smallness alone is not a substitute for the strong topology on a noncompact manifold, because drifting-shell perturbations can create new critical points far out at infinity ([[rem-noncompact-morse-genericity-is-not-an-open-dense-claim]]).

## Counterexample

**Proof technique:** direct construction.

1.1 One has $\|g_n-f\|_\infty\le 1/n$, so the perturbations are uniformly tiny in value. Their supports lie in $[n-1/n^2,n+1/n^2]$, hence for every fixed compact set $K\subseteq\mathbb R$ one has $g_n=f$ on $K$ once $n$ is large enough. [given, algebra]

2.1 Differentiating gives $g_n'(x)=1+n\,\beta'(n^2(x-n))$. In particular $g_n'(n)=1+n\beta'(0)=1-n\le 0$, with equality only when $n=1$, while outside the support interval one has $g_n'(x)=1$. Thus $g_1'(1)=0$, and for every $n\ge 2$ continuity gives some $x_n\in[n-1/n^2,n+1/n^2]$ with $g_n'(x_n)=0$. Thus each $g_n$ has a new critical point near $x=n$. [step 1.1, given, algebra]

3.1 Step 1.1 shows that the perturbations are tiny on every fixed compact set, while step 2.1 shows that they still create new far-out critical points. This is exactly the noncompact failure mode recorded in [L1]. Therefore the displayed claim is false. [L1, step 1.1, step 2.1] ∎
