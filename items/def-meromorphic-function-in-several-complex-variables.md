---
id: def-meromorphic-function-in-several-complex-variables
kind: definition
title: Meromorphic functions on an open set in complex Euclidean space
status: published
origin: pipeline
deps:
  - def-holomorphic-function-in-several-complex-variables
  - def-connected-component-and-quasicomponent
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - rem-complex-euclidean-space-dictionary
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Ch. 1 §1.2, the paragraph defining meromorphic functions after Exercise 1.2.19 (a function on a dense open subset that is locally a ratio of holomorphic functions), and §4.6, where the same notion is used for the Cousin I problem."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. I §6.2, the sheaf of germs of meromorphic functions: sections over an open set are meromorphic functions, representable locally as quotients of holomorphic functions, and the pole set is closed with empty interior."
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Fix $n\ge1$ and read $\mathbb C^n$ through
[[rem-complex-euclidean-space-dictionary]]. Let $U\subseteq\mathbb C^n$ be a
nonempty open set, and for an open $W\subseteq\mathbb C^n$ write
$\mathcal O(W)$ for the set of holomorphic functions $W\to\mathbb C$
([[def-holomorphic-function-in-several-complex-variables]]). Open subsets of
$\mathbb C^n$ carry the subspace topology, and components are those of
[[def-connected-component-and-quasicomponent]].

**(a) Meromorphic functions.** A **meromorphic function on $U$** is a function
$F\colon D\to\mathbb C$ such that

1. $D\subseteq U$ is open and dense in $U$;
2. $F$ is holomorphic on $D$;
3. every point $p\in U$ has a neighbourhood $W\subseteq U$ and holomorphic
   functions $f,g\in\mathcal O(W)$, with $g$ not identically zero on any
   connected component of $W$, such that $$F(z)=\frac{f(z)}{g(z)}\qquad\text{whenever } z\in D\cap W \text{ and } g(z)\ne0 .$$

The set $D$ is the **domain of definition** of $F$, briefly its **domain**.
Every $H\in\mathcal O(U)$ determines a meromorphic function on $U$ with domain
$U$ (take $D=U$ and $g\equiv1$ in clause 3). A meromorphic representative
$F:D\to\mathbb C$ with $D\ne U$ is holomorphic on $U$ when it admits a
holomorphic extension as in clause (c); removable omissions from $D$ are
therefore allowed.

**(b) Restriction.** If $F$ is meromorphic on $U$ with domain $D$ and
$V\subseteq U$ is open and nonempty, then the **restriction** $F|_V$ is the
meromorphic function on $V$ with domain $D\cap V$ and values
$(F|_V)(z):=F(z)$; the domain $D\cap V$ is dense in $V$ because $D$ is dense in
$U$, and clause 3 for $F$ restricts to clause 3 for $F|_V$.

**(c) Holomorphic on a subset; differences.** Let $F$ be meromorphic on $U$
with domain $D$ and let $V\subseteq U$ be open. Then $F$ is **holomorphic on
$V$** when there is $H\in\mathcal O(V)$ with $H(z)=F(z)$ for every
$z\in D\cap V$; such an $H$ is called a **holomorphic extension** of $F$ to
$V$. For meromorphic $F,G$ on $U$ with domains $D_F,D_G$ the **difference**
$F-G$ is the function $D_F\cap D_G\to\mathbb C$, $z\mapsto F(z)-G(z)$, and for
open $V\subseteq U$ the phrase "$F-G$ **is holomorphic on** $V$" means that
$F-G$ admits a holomorphic extension to $V$ in this sense.

**(d) Sums with holomorphic functions.** If $F$ is meromorphic on $U$ with
domain $D$ and $h\in\mathcal O(U)$, then $F+h\colon D\to\mathbb C$,
$z\mapsto F(z)+h(z)$, is meromorphic on $U$: it is holomorphic on $D$, and
wherever $F=f/g$ on $D\cap W$ for a local representation of clause 3 one has
$F+h=(f+hg)/g$ there, while $f+hg$ and $g$ are holomorphic on $W$ and $g$ is
not identically zero on any component of $W$
([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

## Remark

**Poles.** Let $F$ be meromorphic on $U$ with domain $D$. A point of $U$ is a
**pole** of $F$ when $F$ admits no holomorphic extension to any neighbourhood
of the point. The points where $F$ does admit a holomorphic extension form an
open subset of $U$: each such extension also works near every point in its
domain. Hence the pole set is closed. Every pole lies outside $D$, and
$U\setminus D$ is closed with empty interior because $D$ is open and dense, so
the pole set also has empty interior. In particular a meromorphic function is
never undefined on a nonempty open subset of its ambient set: its domain meets
every nonempty open subset of $U$.

**Local nature.** Clause 3 is a local condition: if every point of $U$ has a
neighbourhood to which $F$ restricts as a meromorphic function, then $F$ is
meromorphic on $U$. Concretely a ratio of two holomorphic functions is
meromorphic on the open set where the denominator does not vanish identically
on a component. This is the standard definition in several complex variables:
in several variables only the local ratio is available in general.

**Choice.** This definition quantifies only over points, neighbourhoods and
holomorphic functions; it invokes no choice principle, and none of its clauses
selects from a family of nonempty sets.
