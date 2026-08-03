---
id: ex-sorgenfrey-plane
kind: example
title: "The Sorgenfrey plane: the product of two half-open-interval lines has the rectangles $[a,b) \\times [c,d)$ as a basis and $\\mathbb{Q} \\times \\mathbb{Q}$ as a countable dense subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, thm-basis-criterion, def-topology-basis-subbasis,
       def-dense-top, thm-closure-characterisation-top, lem-rat-embeds-dense,
       thm-rationals-countable, thm-product-of-countable, def-countable, def-interval,
       lem-real-line-is-a-metric-space, def-metrizable-space, def-max-min,
       lem-finite-set-has-max, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "the Sorgenfrey plane"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Sorgenfrey plane (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
pipeline_run: null
---

## Example

Let $\mathcal{B} := \{\, [a,b) : a,b \in \mathbb{R},\ a < b \,\}$ be the family of
bounded half-open intervals of $\mathbb{R}$ ([[def-interval]]). Then:

1. **$\mathcal{B}$ is a basis** for a topology $\mathcal{T}_{\mathrm{S}}$ on
   $\mathbb{R}$ ([[thm-basis-criterion]]); the space
   $S := (\mathbb{R}, \mathcal{T}_{\mathrm{S}})$ is the Sorgenfrey line, and
   $\mathcal{T}_{\mathrm{S}}$ is finer than the usual topology
   ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).
2. **The Sorgenfrey plane** is $S \times S$ with the product topology
   ([[def-product-topology]]). The rectangles
   $$[a,b) \times [c,d) \qquad (a<b,\ c<d)$$
   form a basis for it.
3. **$\mathbb{Q} \times \mathbb{Q}$ is a dense subset of $S \times S$**
   ([[def-dense-top]]) and is at most countable
   ([[thm-rationals-countable]], [[thm-product-of-countable]],
   [[def-countable]]). So the Sorgenfrey plane has a countable dense subset.

The word *separable* is not used here: it is not defined at this point in the
reading order, and claim 3 says in full what it would abbreviate. Claim 1 restates, and reproves
from the basis criterion, the construction of the Sorgenfrey line; the level-8
worked example of that line is linked in the remarks rather than depended on,
since it lives on an examples page.

## Facts & Assumptions

**Given:** The family $\mathcal{B}$ above; the Sorgenfrey line $S$; the product $S \times S$ with the product topology; reals $a<b$, $c<d$ and points $x, y \in \mathbb{R}$.

[A1] $[a,b) = \{\, t \in \mathbb{R} : a \le t < b \,\}$ and $(a,b) = \{\, t : a < t < b \,\}$ ([[def-interval]]).

[A2] A basis for the product topology on a product of two spaces is the family of boxes $U \times V$ with $U$ open in the first factor and $V$ open in the second ([[def-product-topology]]).

[L1] A family is a basis for a topology on a set exactly when it covers the set and every point of an intersection of two members lies in a member inside that intersection; the topology is then the family of unions of its members, and is unique ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every point of $U$ has a bounded open interval around it inside $U$ ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]], [[def-interval]]).

[L3] A subset is dense exactly when it meets every nonempty member of a basis ([[def-dense-top]], [[thm-closure-characterisation-top]], clause (d)).

[L4] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]); $\mathbb{Q}$ is at most countable and a product of two at most countable sets is at most countable ([[thm-rationals-countable]], [[thm-product-of-countable]], [[def-countable]]).

[L5] The order of $\mathbb{R}$ is total, so a two-element set of reals has a maximum and a minimum ([[def-max-min]], [[lem-finite-set-has-max]]); a topology is a family of subsets of the underlying set ([[def-topological-space]]).

## Verification

**Proof technique:** direct.

1.1 $\mathcal{B}$ covers $\mathbb{R}$: for $x \in \mathbb{R}$ one has $x < x+1$, so $[x, x+1) \in \mathcal{B}$ and $x \in [x,x+1)$. [A1, L5]

1.2 $\mathcal{B}$ satisfies the intersection condition: for $x \in [a,b) \cap [c,d)$ put $a' := \max\{a,c\}$ and $b' := \min\{b,d\}$, available by [L5]; then $[a,b) \cap [c,d) = [a',b')$, and $a' \le x < b'$ gives $a' < b'$, so this is a member of $\mathcal{B}$ containing $x$. [A1, L5]

1.3 Every bounded open interval is a union of members of $\mathcal{B}$: $(a,b) = \bigcup \{\, [t,b) : a < t < b \,\}$, since every $s \in (a,b)$ lies in $[s,b)$ and every such $[t,b)$ lies in $(a,b)$. [A1]

1.4 Every nonempty $[a,b) \in \mathcal{B}$ contains a rational, by [L4] applied to $a < b$: a rational $p$ with $a < p < b$ satisfies $p \in [a,b)$. [A1, L4]

2.1 By steps 1.1 and 1.2 with [L1], $\mathcal{B}$ is a basis for a unique topology $\mathcal{T}_{\mathrm{S}}$ on $\mathbb{R}$. [step 1.1, step 1.2, L1]

3.1 $\mathcal{T}_{\mathrm{S}}$ is finer than the usual topology: a set open in the usual topology is a union of bounded open intervals by [L2], and each of those is a union of members of $\mathcal{B}$ by step 1.3, hence lies in $\mathcal{T}_{\mathrm{S}}$ by [L1]. With step 2.1 this is claim 1. [step 1.3, step 2.1, L1, L2]

3.2 The rectangles $[a,b) \times [c,d)$ form a basis for $S \times S$: they are boxes with open factors, hence open by [A2] and step 2.1; and given a box $U \times V$ with $U, V \in \mathcal{T}_{\mathrm{S}}$ and $(x,y) \in U \times V$, step 2.1 and [L1] supply $[a,b) \subseteq U$ containing $x$ and $[c,d) \subseteq V$ containing $y$, whence $(x,y) \in [a,b)\times[c,d) \subseteq U \times V$. So every basic open box of $S \times S$ is a union of such rectangles, and [L1] applies. This is claim 2. [step 2.1, A2, L1, L5]

4.1 $\mathbb{Q}\times\mathbb{Q}$ meets every nonempty rectangle $[a,b)\times[c,d)$: by step 1.4 there are rationals $p \in [a,b)$ and $r \in [c,d)$, and $(p,r)$ lies in the rectangle. By step 3.2 and [L3] the set $\mathbb{Q}\times\mathbb{Q}$ is therefore dense in $S \times S$; and it is at most countable by [L4]. This is claim 3. [step 1.4, step 3.2, L3, L4] ∎

## Remarks

- **The half-open basis is reintroduced here rather than imported.** The
  Sorgenfrey line is worked out in full at level 8, in
  [[ex-sorgenfrey-line]], including its first countability and the fact that its
  sequences converge only from the right. That item lives on an examples page and
  so may not be a dependency of anything; the verification above repeats only the
  part needed here, directly from [[thm-basis-criterion]].

- **The plane is genuinely finer than the Euclidean plane.** Every open rectangle
  $(a,b)\times(c,d)$ is open in $S \times S$ by step 3.1 and [A2], while
  $[0,1)\times[0,1)$ is open in $S \times S$ and is not open in $\mathbb{R}^2$,
  since no Euclidean ball around $(0,0)$ lies inside it. Nothing above depends on
  that comparison, and it is recorded here for orientation.

- **What makes this example worth having is its subspace**, not the plane itself.
  The next item exhibits an uncountable discrete subspace of $S \times S$, which
  by claim 3 shows that "has a countable dense subset" is not a hereditary
  property.
