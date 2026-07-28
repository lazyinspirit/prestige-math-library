---
id: ex-the-long-line-in-the-connectedness-hierarchy
kind: example
title: "The long ray is connected and locally connected, every proper initial segment is order-convex and connected, and no at most countable subset is cofinal"
status: draft
origin: session
deps: [def-the-long-line, thm-the-long-line-is-a-connected-linear-continuum,
       def-order-topology-on-a-linearly-ordered-set, def-connected-space,
       def-locally-connected, def-connected-component-and-quasicomponent,
       thm-a-linear-continuum-is-connected, def-first-uncountable-ordinal,
       lem-ordinal-basics, def-interval, thm-countable-subsets-of-omega-one-are-bounded,
       def-countable-choice, def-cofinal-subset-of-an-ordinal, def-subspace-topology-top,
       def-countable, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Long line (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Long_line_(topology)"
    - title: "Linear continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_continuum"
pipeline_run: null
---

## Example

Let $R = \omega_1 \times [0,1)$ be the closed long ray with its lexicographic
order and its order topology ([[def-the-long-line]],
[[def-order-topology-on-a-linearly-ordered-set]]), and let $0_R = (0,0)$ be its
least element. For $x \in R$ write $[0_R, x] := \{\, y \in R : y \le x \,\}$ for
the initial segment up to $x$. Then:

1. **$R$ is connected**, and its unique component is $R$
   ([[def-connected-space]], [[def-connected-component-and-quasicomponent]]).
2. **Every initial segment $[0_R, x]$ is order-convex and connected**, and so is
   every open ray and every interval of $R$.
3. **$R$ is locally connected** ([[def-locally-connected]]).
4. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]), no at
   most countable subset of $R$ is cofinal in $R$, that is, every at most
   countable subset has a strict upper bound
   ([[def-countable]]).

Claim 4 is the order-theoretic analogue, transported to $R$, of the statement
that no at most countable subset of $\omega_1$ is cofinal in $\omega_1$
([[thm-countable-subsets-of-omega-one-are-bounded]],
[[def-cofinal-subset-of-an-ordinal]]); here a subset $D \subseteq R$ is called
**cofinal** when for every $x \in R$ there is $y \in D$ with $x \le y$.

**Path-connectedness is not asserted.** Whether $R$ is path-connected is not
settled by any item among this page's declared prerequisites, and nothing here
claims it either way. Consequently the path components of $R$ are not computed.

## Facts & Assumptions

**Given:** The closed long ray $R$ with its order topology, and a subset $D \subseteq R$.

[A1] $R$ is a linear continuum; $R$ is connected; every order-convex subset of $R$ is connected in the subspace topology; and, assuming $\mathrm{AC}_\omega$, every at most countable subset of $R$ has an upper bound in $R$ ([[thm-the-long-line-is-a-connected-linear-continuum]], claims 1, 2, 3, [[thm-a-linear-continuum-is-connected]], [[def-countable-choice]], [[thm-countable-subsets-of-omega-one-are-bounded]]).

[A2] $R$ has a least element $0_R$ and no greatest element: for $(\alpha,s) \in R$ the element $(\alpha^{+},0)$ is strictly above it, and $\alpha^{+} \in \omega_1$ ([[def-the-long-line]], [[lem-ordinal-basics]], [[def-first-uncountable-ordinal]]).

[A3] The order topology has as a basis the whole space, the open rays $R_{<b}$ and $R_{>a}$, and the open intervals $(a,b)$; each of these is order-convex, as is every set of the form $[0_R,x]$ and every interval ([[def-order-topology-on-a-linearly-ordered-set]], [[def-topology-basis-subbasis]], [[def-interval]]).

[A4] The component of a point is the largest connected subset containing it ([[def-connected-component-and-quasicomponent]]).

[A5] $X$ is locally connected at $x$ when every open $U \ni x$ contains an open connected $V$ with $x \in V \subseteq U$; a subset carries the subspace topology ([[def-locally-connected]], [[def-subspace-topology-top]]).

## Verification

**Proof technique:** direct.

1.1 $R$ is connected by [A1], so the largest connected subset containing any point is $R$ itself and the unique component is $R$ by [A4]. This is claim 1. [A1, A4]

1.2 Every set of the form $[0_R, x]$, every open ray and every interval of $R$ is order-convex by [A3], hence connected by [A1]. This is claim 2. [A1, A3]

2.1 $R$ is locally connected: let $U$ be open with $x \in U$. By [A3] there is a basic set $B$ with $x \in B \subseteq U$, and every basic set is order-convex, hence connected by [A1]; $B$ is open, being basic. So [A5] is witnessed by $B$, and this is claim 3. [step 1.2, A1, A3, A5]

3.1 For claim 4 let $D \subseteq R$ be at most countable. By [A1] it has an upper bound $u \in R$, and by [A2] there is $v \in R$ with $u < v$; then $y \le u < v$ for every $y \in D$, so $v$ is a strict upper bound and $D$ is not cofinal, no $y \in D$ satisfying $v \le y$. [A1, A2] ∎

## Remarks

- **Local connectedness is immediate here and is not a deep property of $R$.** Every basic open set of an order topology is order-convex, and in a linear continuum every order-convex set is connected. So any linear continuum is locally connected, and $R$ inherits that with no reference to $\omega_1$.

- **What distinguishes $R$ from an ordinary half-line is claim 4 alone.** The first three claims hold verbatim for $[0,\infty) \subseteq \mathbb{R}$, which is also a linear continuum with a least element and no greatest. In $[0,\infty)$ the at most countable set of canonical naturals is cofinal; in $R$ no at most countable set is, and that is the whole content of the word *long*.

- **The choice cost is inherited and is not spent again here.** Claim 4 uses claim 3 of [[thm-the-long-line-is-a-connected-linear-continuum]], whose own statement carries $\mathrm{AC}_\omega$; the argument above adds only the passage from an upper bound to a strict one, which needs nothing beyond $R$ having no greatest element.
