---
id: ex-discrete-and-indiscrete-topologies
kind: example
title: "The discrete and indiscrete topologies, their closures and interiors, and their continuous maps in each direction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-interior-closure-boundary-top, thm-continuity-characterisations-top,
       def-topological-space, def-continuous-map-top, def-topology-basis-subbasis, thm-basis-criterion]
justified_by: []
aliases: []
landmark: false
short: "discrete and indiscrete topologies"
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
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Let $X$ be a set, let $\mathcal{T}_{\mathrm{disc}} = \mathcal{P}(X)$ be the
discrete topology and $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ the
indiscrete topology ([[def-standard-topologies]]), and let $A \subseteq X$. Then:

1. **In the discrete space** every subset is clopen, and
   $$\operatorname{int}(A) = A = \overline{A}, \qquad \partial A = \varnothing$$
   for every $A$ ([[def-interior-closure-boundary-top]]). The singletons
   $\{\, \{x\} : x \in X \,\}$ form a basis
   ([[def-topology-basis-subbasis]]).
2. **In the indiscrete space**
   $$\operatorname{int}(A) = \begin{cases} X & A = X \\ \varnothing & A \ne X \end{cases}, \qquad \overline{A} = \begin{cases} \varnothing & A = \varnothing \\ X & A \ne \varnothing \end{cases},$$
   so $\partial A = X$ for every $A$ other than $\varnothing$ and $X$.
3. **Maps out of a discrete space and into an indiscrete space are all
   continuous.** For any topological space $Y$, every function
   $(X, \mathcal{T}_{\mathrm{disc}}) \to Y$ is continuous, and every function
   $Y \to (X, \mathcal{T}_{\mathrm{ind}})$ is continuous.
4. **The other two directions are restrictive.** A function
   $f : Y \to (X, \mathcal{T}_{\mathrm{disc}})$ is continuous exactly when
   $f^{-1}[\{x\}]$ is open in $Y$ for every $x \in X$; and a function
   $g : (X, \mathcal{T}_{\mathrm{ind}}) \to Y$ is continuous exactly when
   $g^{-1}[V] \in \{\varnothing, X\}$ for every open $V \subseteq Y$.

The two topologies are the extreme points of the comparison order
([[def-topological-space]]): every topology on $X$ is finer than
$\mathcal{T}_{\mathrm{ind}}$ and coarser than $\mathcal{T}_{\mathrm{disc}}$.

## Facts & Assumptions

**Given:** A set $X$ with the two topologies above, a subset $A \subseteq X$, a topological space $Y$, and functions $f : Y \to X$ and $g : X \to Y$.

[A1] $\mathcal{T}_{\mathrm{disc}} = \mathcal{P}(X)$ and $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ ([[def-standard-topologies]]).

[A2] $\operatorname{int}(A)$ is the largest open subset of $A$ and $\overline{A}$ the smallest closed superset of $A$; $\partial A = \overline{A} \setminus \operatorname{int}(A)$; a set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L1] A map is continuous exactly when preimages of open sets are open, and exactly when preimages of the members of any fixed basis are open, a basis being a subbasis for the topology it generates ([[thm-continuity-characterisations-top]], clauses (b) and (d), [[def-continuous-map-top]]).

[L2] A family $\mathcal{B}$ of subsets of $X$ is a basis for a topology exactly when it covers $X$ and every point of an intersection of two members lies in a member inside that intersection; the topology is then the family of unions of subfamilies ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

## Verification

**Proof technique:** direct.

1.1 In the discrete topology every subset of $X$ is open by [A1], so every subset is also closed, its complement being open; hence every subset is clopen. [A1, A2]

1.2 The singletons cover $X$, and the intersection of two distinct singletons is empty while the intersection of a singleton with itself is that singleton; so the family of singletons satisfies the basis criterion, and the topology it generates consists of all unions of singletons, that is of all subsets of $X$, which is $\mathcal{T}_{\mathrm{disc}}$. [A1, L2]

1.3 In the indiscrete topology the open subsets of $A$ are $\varnothing$ always and $X$ exactly when $A = X$; so $\operatorname{int}(A) = X$ if $A = X$ and $\operatorname{int}(A) = \varnothing$ otherwise. [A1, A2]

1.4 In the indiscrete topology the closed sets are $\varnothing$ and $X$, so the closed supersets of $A$ are $X$ always and $\varnothing$ exactly when $A = \varnothing$; hence $\overline{A} = \varnothing$ if $A = \varnothing$ and $\overline{A} = X$ otherwise. [A1, A2]

1.5 For any function $h$ out of the discrete space and any open $V$ in the target, $h^{-1}[V]$ is a subset of $X$ and hence open; for any function $h$ into the indiscrete space, the only open sets of the target are $\varnothing$ and $X$, whose preimages are $\varnothing$ and the whole source, both open. [A1, L1]

2.1 For $f : Y \to (X,\mathcal{T}_{\mathrm{disc}})$: the singletons form a basis by step 1.2, so by clause (d) of [L1] continuity of $f$ is exactly the openness of every $f^{-1}[\{x\}]$. For $g : (X,\mathcal{T}_{\mathrm{ind}}) \to Y$: by clause (b) continuity is exactly the condition that each $g^{-1}[V]$ be open in the indiscrete topology, that is a member of $\{\varnothing, X\}$. [step 1.2, A1, L1]

2.2 By step 1.1 every $A \subseteq X$ is open and closed in the discrete topology, so $\operatorname{int}(A) = A$ and $\overline{A} = A$ by [A2], whence $\partial A = \varnothing$; with step 1.2 this is claim 1. [step 1.1, step 1.2, A2]

2.3 Steps 1.3 and 1.4 are claim 2, and for $A \notin \{\varnothing, X\}$ they give $\partial A = X \setminus \varnothing = X$. [step 1.3, step 1.4, A2]

3.1 Step 1.5 is claim 3 and step 2.1 is claim 4. [step 1.5, step 2.1] ∎

## Remarks

- **Both spaces are first countable, for opposite reasons.** In the discrete space $\{\{x\}\}$ is a one-element neighbourhood base at $x$; in the indiscrete space $\{X\}$ is. So first countability is no obstruction to either, and it is the Hausdorff property that separates them: the discrete topology is metrizable by the metric taking the value $1$ on distinct points and $0$ on equal ones, whose ball of radius $1$ about $x$ is $\{x\}$, while the indiscrete topology on a set with two or more points is metrizable by none ([[cex-non-metrizable-topology]]).

- **Claim 3 explains why neither extreme is interesting on its own.** A space in which every map is continuous carries no information about the maps; the content of a topology lies between the two extremes, and the comparison order of [[def-topological-space]] is the scale on which that content is measured.

- **In the indiscrete space every nonempty subset is dense** by claim 2 and [[def-dense-top]], and in the discrete space only $X$ is. These are again the two extremes: density is a measure of how coarse the topology is, not of how large the set is.
