---
id: ex-circle-covering-towers-follow-divisibility
kind: example
title: "Maps between connected circle coverings are governed by divisibility"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-covering-morphism-subgroup-criterion,
       cor-connected-coverings-of-circle-classified-by-nonnegative-integers,
       lem-subgroups-of-z-are-cyclic, def-divides-in-z,
       thm-division-algorithm-in-z,
       thm-sheets-equal-fundamental-group-index,
       thm-covering-maps-inject-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       lem-open-quotient-arcs-in-real-line-mod-integers,
       thm-convex-subsets-have-trivial-fundamental-group,
       def-locally-connected,
       prop-real-line-mod-integers-is-compact-and-path-connected,
       prop-local-path-connectedness-lifts-and-descends-along-coverings,
       thm-connected-and-locally-path-connected-implies-path-connected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Section 7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Example

For positive integers $m,n$, let $E_m$ and $E_n$ be the based connected circle coverings classified by $m\mathbb Z$ and $n\mathbb Z$. There is a based covering morphism

$$E_m\longrightarrow E_n$$

exactly when $n\mid m$. It is unique when it exists. If $m=nq$, then this morphism has $q$ sheets; in particular, $q=1$ gives a based covering isomorphism.

## Facts & Assumptions

**Given:** Positive integers $m,n$ and the classified based covers $E_m,E_n$.

[L1] Over a path-connected locally path-connected base, a unique based morphism between coverings with connected total spaces exists exactly when the source induced subgroup is contained in the target induced subgroup, and such a morphism is a surjective covering map ([[prop-covering-morphism-subgroup-criterion]]).

[F1] The relation $n\mid m$ means that $m=nq$ for some integer $q$ ([[def-divides-in-z]]).

[F2] For a covering with nonempty path-connected total space, the sheet number equals the index of its induced fundamental-group subgroup ([[thm-sheets-equal-fundamental-group-index]]).

[F3] For a positive integer $q$, every integer has a unique remainder $r$ with $0\le r<q$ modulo $q$ ([[thm-division-algorithm-in-z]]).

[F4] A covering map induces an injective homomorphism on fundamental groups ([[thm-covering-maps-inject-fundamental-groups]]).

[F5] Induced fundamental-group homomorphisms respect composition ([[thm-induced-fundamental-group-map-functoriality]]).

[F6] Open quotient arcs of length below one are homeomorphic to real intervals ([[lem-open-quotient-arcs-in-real-line-mod-integers]]).

[F7] Every nonempty convex real interval is path-connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F8] Local path-connectedness means that every neighbourhood contains an open path-connected neighbourhood ([[def-locally-connected]]).

[F9] Local path-connectedness lifts from the base of a covering to its total space ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]]).

[F10] A connected locally path-connected space is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]).

[F11] The quotient circle $\mathbb R/\mathbb Z$ is path-connected ([[prop-real-line-mod-integers-is-compact-and-path-connected]]).

## Verification

**Proof technique:** direct.

1.1 For the forward direction, $m\mathbb Z\subseteq n\mathbb Z$ puts $m\in n\mathbb Z$, so $m=nq$ for an integer $q$ and $n\mid m$. For the reverse direction, if $m=nq$, then every $mk=n(qk)$ is in $n\mathbb Z$, so $m\mathbb Z\subseteq n\mathbb Z$. Since $m,n>0$, the quotient $q=m/n$ is positive. [F1, algebra]

2.1 The quotient circle is path-connected by [F11] and locally path-connected because [F6] gives arbitrarily small open neighbourhoods homeomorphic to convex intervals, which are path-connected by [F7], so [F8] applies. Hence [L1] and step 1.1 give a unique based morphism $E_m\to E_n$ exactly when $n\mid m$. [step 1.1, L1, F6, F7, F8, F11]

3.1 Suppose $m=nq$. The local path-connectedness established in step 2.1 lifts to $E_m$ by [F9], and connectedness then makes $E_m$ path-connected by [F10]. Functoriality for the morphism $f:E_m\to E_n$ gives $(p_n)_*f_*=(p_m)_*$, and [F4] identifies $\pi_1(E_n)$ with $n\mathbb Z$ and $f_*\pi_1(E_m)$ with $m\mathbb Z$ inside it. Under the isomorphism $n\mathbb Z\to\mathbb Z$, $nk\mapsto k$, the subgroup $m\mathbb Z=nq\mathbb Z$ corresponds to $q\mathbb Z$. By [F3], the latter has the $q$ cosets represented by $0,1,\ldots,q-1$. Thus $[n\mathbb Z:m\mathbb Z]=q$, and the path-connected total space licenses [F2], which gives $q$ sheets. At $q=1$ the two subgroups are equal, so the morphism is an isomorphism. [step 2.1, F2, F3, F4, F5, F9, F10] ∎
