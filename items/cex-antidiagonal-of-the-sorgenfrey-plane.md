---
id: cex-antidiagonal-of-the-sorgenfrey-plane
kind: counterexample
title: "The antidiagonal $\\{(x,-x)\\}$ is an uncountable discrete subspace of the Sorgenfrey plane, so having a countable dense subset is not a hereditary property"
status: published
origin: session
deps: [ex-sorgenfrey-plane, def-hereditary-property, def-subspace-topology-top,
       thm-subspace-closure-and-interior, def-dense-top, def-standard-topologies,
       thm-r-uncountable, def-countable, lem-countable-iff-surjection-from-n,
       def-interval, def-interior-closure-boundary-top, def-injection-surjection-bijection,
       def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "a countable dense subset is not hereditary"
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
    - title: "Separable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separable_space"
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
pipeline_run: null
---

## Statement refuted

**Refuted:** that the property "has a countable dense subset" is hereditary
([[def-hereditary-property]], [[def-dense-top]]).

**Witness.** In the Sorgenfrey plane $S \times S$ ([[ex-sorgenfrey-plane]]), which
has the countable dense subset $\mathbb{Q}\times\mathbb{Q}$, take the
**antidiagonal**

$$L \;:=\; \{\, (x,-x) : x \in \mathbb{R} \,\}$$

with the subspace topology ([[def-subspace-topology-top]]). Then:

1. **$L$ is discrete**: for every $x$, the basic rectangle
   $[x,\ x+1) \times [-x,\ -x+1)$ meets $L$ exactly in $\{(x,-x)\}$, so every
   singleton of $L$ is open in $L$ and the subspace topology is the discrete one
   ([[def-standard-topologies]]).
2. **$L$ is uncountable** ([[def-countable]]), being in bijection with
   $\mathbb{R}$ ([[thm-r-uncountable]]).
3. **The only dense subset of $L$ is $L$ itself**, since in a discrete space every
   subset is closed. So $L$ has no countable dense subset, although the space it
   sits inside has one.

The word *separable* is not used: it is not defined at this point in the reading
order, and the three claims above say in full what it would abbreviate.

## Facts & Assumptions

**Given:** The Sorgenfrey plane $S \times S$ with the rectangles $[a,b)\times[c,d)$ as a basis, the antidiagonal $L$ with the subspace topology, and a subset $D \subseteq L$.

[A1] The rectangles $[a,b)\times[c,d)$ with $a<b$ and $c<d$ form a basis for $S \times S$, and $\mathbb{Q}\times\mathbb{Q}$ is a countable dense subset of it ([[ex-sorgenfrey-plane]]).

[A2] The open sets of $L$ are the traces $B \cap L$ with $B$ open in $S \times S$, and a basis of them is the family of traces of basic open sets ([[def-subspace-topology-top]]).

[A3] In the discrete topology on a set, every subset is open and hence every subset is closed ([[def-standard-topologies]], [[def-topological-space]]).

[L1] $[a,b) = \{\, t : a \le t < b \,\}$ ([[def-interval]]).

[L2] $D$ is dense in a space exactly when $\overline{D}$ is the whole space, and a set equals its closure exactly when it is closed ([[def-dense-top]], [[def-interior-closure-boundary-top]], [[thm-subspace-closure-and-interior]]).

[L3] $\mathbb{R}$ is uncountable: there is no surjection $\mathbb{N} \to \mathbb{R}$ ([[thm-r-uncountable]], [[def-countable]]). A nonempty at most countable set admits a surjection from $\mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]), and a composite of surjections is a surjection ([[def-injection-surjection-bijection]]).

## Counterexample

**Proof technique:** direct.

1.1 For $x \in \mathbb{R}$ put $B_x := [x,\ x+1) \times [-x,\ -x+1)$, a basic open set of $S \times S$ containing $(x,-x)$, by [A1] and [L1]. [A1, L1]

1.2 The map $\varphi : \mathbb{R} \to L$, $\varphi(x) := (x,-x)$, is a surjection, every point of $L$ being of that form. [given]

2.1 $B_x \cap L = \{(x,-x)\}$: a point of $L$ is $(t,-t)$, and it lies in $B_x$ exactly when $x \le t < x+1$ and $-x \le -t < -x+1$; the second pair of inequalities says $x - 1 < t \le x$, and together with $x \le t$ this forces $t = x$. [step 1.1, L1]

2.2 $L$ is uncountable: if $L$ were at most countable then, being nonempty, it would admit a surjection $\mathbb{N} \to L$ by [L3]; composing that with the surjection $L \to \mathbb{R}$, $(x,-x) \mapsto x$, would give a surjection $\mathbb{N} \to \mathbb{R}$, contradicting [L3]. This is claim 2. [step 1.2, L3]

3.1 By steps 1.1 and 2.1 with [A2], every singleton $\{(x,-x)\}$ is open in $L$; hence every subset of $L$ is a union of singletons and so is open, and the subspace topology on $L$ is the discrete one. This is claim 1. [step 1.1, step 2.1, A2, A3]

4.1 By step 3.1 and [A3] every subset of $L$ is closed in $L$, so $\overline{D} = D$ for every $D \subseteq L$, and $D$ is dense in $L$ exactly when $D = L$ by [L2]. With step 2.2 the only dense subset of $L$ is uncountable, so $L$ has no countable dense subset. This is claim 3. [step 3.1, step 2.2, A3, L2]

5.1 By [A1] the space $S \times S$ has a countable dense subset and by step 4.1 its subspace $L$ has none, so the property "has a countable dense subset" is not hereditary, which refutes the claim. [step 4.1, A1] ∎

## Remarks

- **The rectangle in step 1.1 is chosen with both corners at the point.** Any
  basic rectangle $[x,b) \times [-x,d)$ with $b > x$ and $d > -x$ would do, and
  the computation is the same: the first factor forces $t \ge x$ and the second
  forces $t \le x$. It is the half-openness on the *left* in both coordinates,
  together with the reversal of the sign in the second, that isolates the point.

- **The property is open-hereditary, and that is the sharp statement.** By claim 4
  of [[thm-subspace-closure-and-interior]] a dense subset of a space traces to a
  dense subset of every *open* subspace, so "has a countable dense subset" passes
  to open subspaces. The antidiagonal is not open in $S \times S$, and the failure
  above shows that the hypothesis in that claim cannot be dropped.

- **Nothing here needs a choice principle.** The surjection $L \to \mathbb{R}$ is
  written down, the rectangles are written down, and the only nonconstructive
  ingredient is [[thm-r-uncountable]], whose own proof is choice free.
