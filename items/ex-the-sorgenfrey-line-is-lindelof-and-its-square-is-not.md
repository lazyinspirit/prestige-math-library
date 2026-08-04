---
id: ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not
kind: example
title: "$\\mathbb{R}$ with the half-open intervals $[a,b)$ as a basis is not compact and, assuming the Axiom of Countable Choice, is Lindel\\\"of, while its square is not Lindel\\\"of, the antidiagonal being an uncountable closed discrete subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compactness-variants, def-compact-space, def-topology-basis-subbasis, thm-basis-criterion, def-product-topology, def-subspace-topology-top, def-topological-space, def-countable, lem-countable-iff-surjection-from-n, thm-r-uncountable, thm-rationals-countable, lem-subset-of-countable, thm-product-of-countable, lem-of-q-dense, def-countable-choice, def-interval, def-real-order, def-complete-ordered-field, def-canonical-natural, thm-of-archimedean, thm-reals-ordered-field, cor-cauchy-reals-lub-complete]
justified_by: []
aliases: []
landmark: true
short: "the Sorgenfrey line and its square"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    scope: published-audit
    delegated_by: owner
    at: 2026-08-05
    by: certify-round4 (gpt-5.6-sol, read-only certifier)
    note: independent certification of the wave-4 citation-precision repair to [L4] and steps 3.1/3.2
sources:
  scraped: []
  references:
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
    - title: "Lindelöf space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lindel%C3%B6f_space"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Example

Let $\mathcal{B}_\ell := \{\, [a,b) : a, b \in \mathbb{R},\ a < b \,\}$
([[def-interval]]) and let $\mathbb{R}_\ell$ be $\mathbb{R}$ carrying the
topology for which $\mathcal{B}_\ell$ is a basis
([[def-topology-basis-subbasis]], [[thm-basis-criterion]]). Then:

1. $\mathcal{B}_\ell$ **is** a basis for a topology on $\mathbb{R}$.
2. $\mathbb{R}_\ell$ **is not compact** ([[def-compact-space]]).
3. $\mathbb{R}_\ell$ **is Lindel&ouml;f** ([[def-compactness-variants]]),
   assuming the Axiom of Countable Choice ([[def-countable-choice]]).
4. $\mathbb{R}_\ell \times \mathbb{R}_\ell$ with the product topology
   ([[def-product-topology]]) **is not Lindel&ouml;f**: the antidiagonal
   $\Delta := \{\, (x,-x) : x \in \mathbb{R} \,\}$ is an uncountable subset that
   is closed and carries the discrete topology as a subspace.

So Lindel&ouml;fness is not preserved by products, even by the product of a
space with itself.

**This is the same space that appears elsewhere in the library under the name
Sorgenfrey line**, re-minted here because the published treatment lives on a page
whose items may not be cited from anywhere; nothing below depends on that
treatment.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its order, the family $\mathcal{B}_\ell$ of half-open intervals $[a,b) = \{t : a \le t < b\}$ with $a<b$, the space $\mathbb{R}_\ell$, and the product $\mathbb{R}_\ell \times \mathbb{R}_\ell$.

[L1] A family $\mathcal{B}$ of subsets of a set $X$ is a basis for a unique topology exactly when it covers $X$ and every point of an intersection of two members lies in a member inside that intersection; the topology consists of the sets $U$ such that every $x \in U$ has $B \in \mathcal{B}$ with $x \in B \subseteq U$ ([[thm-basis-criterion]], [[def-topology-basis-subbasis]], [[def-topological-space]]).

[L2] The sets $B \times B'$ with $B, B' \in \mathcal{B}_\ell$ form a basis for the product topology on $\mathbb{R}_\ell \times \mathbb{R}_\ell$, the index set being a natural number ([[def-product-topology]], [[thm-basis-criterion]]).

[L3] The order of [[def-real-order]] makes $\mathbb{R}$ a totally ordered field ([[thm-reals-ordered-field]]) with the least-upper-bound property ([[cor-cauchy-reals-lub-complete]]), hence a complete ordered field ([[def-complete-ordered-field]]); for every real $t$ there is therefore $n \in \mathbb{N}$ with $t < \iota(n)$ ([[thm-of-archimedean]], [[def-canonical-natural]]); and for reals $c<d$ there is a rational strictly between them ([[lem-of-q-dense]]).

[L4] A set is at most countable when it is finite or countably infinite ([[def-countable]]); $\mathbb{Q}$ is countably infinite ([[thm-rationals-countable]]) and $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]); every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]); if $A$ and $B$ are at most countable then so is $A \times B$ ([[thm-product-of-countable]]); and a nonempty set is at most countable iff it is a surjective image of $\mathbb{N}$, an injection back into $\mathbb{N}$ being obtained from any such surjection ([[lem-countable-iff-surjection-from-n]]). The union of two at most countable sets is then at most countable, by interleaving two such surjections.

[L5] A space is Lindel&ouml;f when every open cover has an at most countable subcover, and compact when every open cover has a finite subcover ([[def-compactness-variants]], [[def-compact-space]]).

[L6] Countable choice: for every family $(Y_n)_{n \in \mathbb{N}}$ of nonempty sets there is $f$ on $\mathbb{N}$ with $f(n) \in Y_n$ ([[def-countable-choice]]).

[L7] The open sets of a subspace are the traces of the ambient open sets, and its closed sets the traces of the ambient closed sets ([[def-subspace-topology-top]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1: $\mathcal{B}_\ell$ covers $\mathbb{R}$, since $x \in [x, x+1)$; and $[a,b) \cap [c,d)$ is $[\max\{a,c\}, \min\{b,d\})$ when that is nonempty and $\varnothing$ otherwise, so it is a member of $\mathcal{B}_\ell$ or empty. By [L1] the family is a basis for exactly one topology, and a set is open in $\mathbb{R}_\ell$ exactly when each of its points has a half-open interval around it inside it. [L1, L3]

2.1 Claim 2: the family $\{\, [-\iota(n), \iota(n)) : n \in \mathbb{N},\ n \ge 1 \,\}$ consists of members of $\mathcal{B}_\ell$, hence of open sets, and covers $\mathbb{R}$ by [L3]; the members increase with $n$, so a finite subfamily has union $[-\iota(N), \iota(N))$ for the largest index $N$ occurring, which omits $\iota(N)$. So $\mathbb{R}_\ell$ is not compact. [L3, L5, step 1.1]

2.2 For claim 3 let $\mathcal{A}$ be an open cover of $\mathbb{R}_\ell$ and let $\mathcal{D}$ be the family of members of $\mathcal{B}_\ell$ contained in some member of $\mathcal{A}$; by step 1.1 the family $\mathcal{D}$ covers $\mathbb{R}$. Put $C := \bigcup \{\, (a,b) : [a,b) \in \mathcal{D} \,\}$. [L5, step 1.1, construct]

2.3 In $\mathbb{R}_\ell \times \mathbb{R}_\ell$ the antidiagonal $\Delta$ is discrete as a subspace: for $x \in \mathbb{R}$ the basic set $[x, x+1) \times [-x, -x+1)$ meets $\Delta$ only in $(x,-x)$, since a point $(y,-y)$ in it satisfies $x \le y$ and $-x \le -y$, that is $y \le x$. By [L7] each singleton of $\Delta$ is therefore open in the subspace. [L2, L3, L7, step 1.1]

2.4 $\Delta$ is closed in $\mathbb{R}_\ell \times \mathbb{R}_\ell$: let $(u,v)$ have $u + v \ne 0$. If $u + v > 0$, every point $(y_1,y_2)$ of $[u,u+1) \times [v,v+1)$ has $y_1 + y_2 \ge u+v > 0$, so the box misses $\Delta$. If $u+v < 0$, put $\delta := -(u+v)/2 > 0$; every point of $[u, u+\delta) \times [v, v+\delta)$ has $y_1 + y_2$ at least $u+v$ and less than $u+v+2\delta = 0$, so again the box misses $\Delta$. So the complement of $\Delta$ is open. [L2, L3, step 1.1]

3.1 $\mathbb{R} \setminus C$ is at most countable. Fix a surjection $\mathbb{N} \to \mathbb{Q}$ ([L4]) and for $x \notin C$ let $r(x)$ be the rational of least index with $x < r(x)$ and $[x, r(x)) \in \mathcal{D}$; such rationals exist, since $\mathcal{D}$ covers gives $[a,b) \in \mathcal{D}$ with $a \le x < b$, a rational $q$ with $x < q < b$ by [L3] then has $[x,q) \subseteq [a,b)$ and so $[x,q) \in \mathcal{D}$. Nothing is selected, the least index being determined by $x$. The map $r$ is injective on $\mathbb{R} \setminus C$: if $x < y$ lay outside $C$ with $r(x) = r(y) = q$, then $[x,q) \in \mathcal{D}$ gives $(x,q) \subseteq C$ and $x < y < q$ puts $y$ in $C$. So $\mathbb{R} \setminus C$ injects into $\mathbb{Q}$, hence is equinumerous with a subset of $\mathbb{Q}$ and at most countable by [L4]. [L3, L4, step 2.2]

3.2 $C$ is covered by the at most countable family $\mathcal{D}_{\mathbb{Q}} := \{\, [p,q) \in \mathcal{D} : p, q \in \mathbb{Q} \,\}$, at most countable because $[p,q) \mapsto (p,q)$ injects it into $\mathbb{Q} \times \mathbb{Q}$, which is at most countable by [L4], as is therefore the image subset: given $x \in C$ there is $[a,b) \in \mathcal{D}$ with $a < x < b$, and [L3] gives rationals $p, q$ with $a < p < x < q < b$, whence $[p,q) \subseteq [a,b)$ lies in $\mathcal{D}$ and contains $x$. [L3, L4, step 2.2]

4.1 So $\mathcal{D}_0 := \mathcal{D}_{\mathbb{Q}} \cup \{\, [x, r(x)) : x \in \mathbb{R} \setminus C \,\}$ is an at most countable subfamily of $\mathcal{D}$ by [L4] and covers $\mathbb{R}$ by steps 3.1 and 3.2. Every member of $\mathcal{D}$ lies inside some member of $\mathcal{A}$, so [L6] applied to an indexing of $\mathcal{D}_0$ by $\mathbb{N}$ supplies one member of $\mathcal{A}$ for each member of $\mathcal{D}_0$, and those form an at most countable subcover of $\mathcal{A}$. Hence $\mathbb{R}_\ell$ is Lindel&ouml;f: claim 3. [L4, L5, L6, step 3.1, step 3.2]

5.1 $\Delta$ is uncountable, being in bijection with $\mathbb{R}$ under $x \mapsto (x,-x)$ and $\mathbb{R}$ being uncountable by [L4]. Were $\mathbb{R}_\ell \times \mathbb{R}_\ell$ Lindel&ouml;f, its closed subspace $\Delta$ would be too: given a cover of $\Delta$ by traces of ambient open sets, adjoining the complement of $\Delta$ gives an ambient open cover, an at most countable subcover of it traces back to an at most countable subcover of $\Delta$. But $\Delta$ is discrete by step 2.3, so its singletons form an open cover admitting only itself as a subcover, and that family is uncountable. So $\mathbb{R}_\ell \times \mathbb{R}_\ell$ is not Lindel&ouml;f: claim 4. [L4, L5, L7, step 2.3, step 2.4] ∎

## Remarks

- **Dictionary.** The space defined here is the same space as the published
  [[ex-sorgenfrey-line]]; that item is homed on an examples page, whose items may
  not be cited from outside their own A/B pair, which is why the space is
  re-minted here rather than cited. Nothing above depends on the published
  treatment.

**What fails in the product.** Lindel&ouml;fness of $\mathbb{R}_\ell$ rests on the rationals being dense and at most countable, so that a cover can be thinned to countably many rational-endpoint intervals plus countably many exceptional points. In the square each point $(x,-x)$ of the antidiagonal has a basic box around it meeting the antidiagonal in that point alone, and there are uncountably many such points; no countability of the rationals helps, because those boxes are pairwise distinct and each of them isolates one antidiagonal point, so an at most countable subfamily of the cover they generate can reach only at most countably many of them.

**Neither compactness nor Lindel&ouml;fness is what separates the topologies.** $\mathbb{R}_\ell$ is finer than the usual topology of $\mathbb{R}$, since every $(a,b)$ is a union of half-open intervals, and both spaces are Lindel&ouml;f and not compact; the difference shows up only in the square.
