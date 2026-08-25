# frontier-18 · batch 10 — Beta notes

Run `frontier-18`, Beta-10, steps 1 and 2. Pairs owned:
`modules-substitution-and-prime-graphs` (order 397) with
`modules-substitution-and-prime-graphs-examples` (398), and
`sparse-restricted-subgraphs-and-rodl-nikiforov` (401) with
`sparse-restricted-subgraphs-and-rodl-nikiforov-examples` (402).
The same Beta returns as the step-5 author for all four pages.

Artifacts written: `research/frontier-18-batch-10.pages.json`, this file,
`research/frontier-18-batch-10.proof-contracts.json`, and the harvest
`research/frontier-18-batch-10.coverage.json`.

---

## Continuity checkpoint

**Substage.** Steps 1 and 2 complete; all four artifacts written and every
locally runnable gate run. Nothing is owed before the step-3 Alpha review.

**Owned artifact paths.** The four files above. `research/plan-spec.json` was
NOT touched; the item lists reach it through `tools/splice-plan.mjs` at step 4.

**Checks completed.** `validate-plan.mjs` against a temporary spliced copy of
the spec at `/tmp/spec-test.json` (exit 0, no error of any class attributable
to these four pages); `depsource.mjs` per page on the same temporary spec (0
unresolved, 0 planned-later, 0 draft-page, 0 homeless);
`coverage-checklist.mjs --require-destination` (0 errors, two
`coverage-low-yield` warnings, discussed in §9); `source-fetch-check.mjs
--stamp` then in check mode (8/8 sources stamped and verified);
`url-sweep.mjs --recover --fail-on-dead` (7/7 live, 0 recoverable, 0 suspect);
`content-policy.mjs --manifest-only` (0 errors, 0 warnings);
`prosecheck.mjs --warnings` (0 errors).

**Open constraints carried into step 5.**

- Page 401 may not use hom(G) or an Erdős–Hajnal exponent: those live at order
  395, which is not in 401's declared prerequisite closure, and the step-0
  drift review ruled that 401 does not need them. Every proof planned for 401
  respects this.
- The library has no real floor or ceiling item, so no proof may write a
  ceiling of a real number. Where an integer near a real bound is needed, take
  the least natural number above it and cite `thm-of-archimedean` with
  `thm-well-ordering-principle`, tagged `[choose]`.
- No applied canonical embedding around a natural number anywhere in the
  authored text.

**Exact next action.** None inside this batch. Await the step-3 Alpha decisions
on the findings in §10; if any is declined, the affected item list changes
before step 4's splice.

---

## 0. What is on each page

### `modules-substitution-and-prime-graphs` (A, order 397) — 36 items

1. `def-module-of-a-graph` · definition · Modules of a graph, and the trivial modules
2. `lem-module-criteria` · lemma · Three equivalent descriptions of a module: purity of every outside vertex, equality of outside neighbourhoods, and indistinguishability of the members
3. `lem-modules-are-complement-invariant` · lemma · A vertex set is a module of $G$ exactly when it is a module of $\overline G$
4. `lem-unions-of-components-and-of-anticomponents-are-modules` · lemma · Every union of connected components is a module, and so is every union of anticonnected components
5. `lem-disjoint-modules-are-a-pure-pair` · lemma · Two disjoint nonempty modules form a complete or an anticomplete pair
6. `lem-intersection-of-two-modules-is-a-module` · lemma · The intersection of two modules is a module
7. `lem-union-of-two-meeting-modules-is-a-module` · lemma · The union of two modules with a common vertex is a module
8. `lem-differences-of-overlapping-modules-are-modules` · lemma · If two modules overlap, then each difference and their symmetric difference are modules
9. `lem-a-module-meets-an-induced-subgraph-in-a-module` · lemma · If $M$ is a module of $G$ and $W\subseteq V(G)$, then $M\cap W$ is a module of $G[W]$
10. `lem-a-module-of-a-module-is-a-module` · lemma · A module of $G[M]$ is a module of $G$ whenever $M$ is a module of $G$
11. `lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour` · lemma · In a connected graph, some vertex outside a nonempty proper module is complete to it
12. `def-prime-graph` · definition · Prime graphs: those whose only modules are the trivial ones
13. `lem-graphs-on-three-vertices-are-not-prime` · lemma · No graph on exactly three vertices is prime
14. `def-substitution-of-a-graph-for-a-vertex` · definition · Substituting one graph for a vertex of another
15. `lem-the-substituted-set-is-a-module` · lemma · In $G_1$ with $G_2$ substituted for $a$, the vertex set of $G_2$ is a module, the two factors are recovered as induced subgraphs, and substituting a one-vertex graph changes nothing
16. `lem-substitution-commutes-with-complementation` · lemma · The complement of $G_1[a\to G_2]$ is $\overline{G_1}[a\to\overline{G_2}]$
17. `thm-prime-graphs-are-the-graphs-that-are-not-substitutions` · theorem · A graph with at least two vertices is prime exactly when it is not obtained by substituting one graph on at least two vertices for a vertex of another graph on at least two vertices
18. `def-modular-partition-and-quotient-graph` · definition · Modular partitions and the quotient graph they define
19. `lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is` · lemma · For a modular partition, a set of parts is a module of the quotient exactly when the union of those parts is a module of the graph
20. `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph` · theorem · A graph is recovered from any modular partition by the induced subgraphs on the parts together with the quotient graph
21. `lem-the-quotient-is-an-induced-subgraph-on-a-transversal` · lemma · The quotient by a modular partition is isomorphic to the subgraph induced by any set meeting each part exactly once
22. `lem-overlapping-proper-modules-of-a-connected-anticonnected-graph` · lemma · In a connected and anticonnected graph, the union of two proper modules that meet is again a proper module
23. `lem-every-vertex-lies-in-a-unique-maximal-proper-module` · lemma · In a connected and anticonnected graph with at least two vertices, each vertex lies in a largest proper module, and two such modules are equal or disjoint
24. `thm-gallai-modular-decomposition` · theorem · Gallai's modular decomposition theorem: a graph on at least two vertices is disconnected, or has a disconnected complement, or has a modular partition into its maximal proper modules whose quotient is prime
25. `cor-the-prime-quotient-has-at-least-four-vertices` · corollary · The prime quotient produced by the modular decomposition of a connected and anticonnected graph has at least four vertices
26. `cor-the-modular-partition-with-a-prime-quotient-is-unique` · corollary · In a connected and anticonnected graph, a modular partition with at least two parts whose quotient is prime consists of the maximal proper modules
27. `lem-homogeneous-number-is-monotone-under-induced-subgraphs` · lemma · $\operatorname{hom}(G[W])\le\operatorname{hom}(G)$ for every vertex subset $W$
28. `lem-a-large-set-contains-a-pattern-when-the-homogeneous-number-is-small` · lemma · If $\epsilon$ is an Erdős–Hajnal constant for $H$ and $W$ is a nonempty vertex set with $|W|^{\epsilon}>\operatorname{hom}(G)$, then $G[W]$ has an induced copy of $H$
29. `lem-supersaturation-for-induced-copies` · lemma · If every $m$-element vertex set contains an induced copy of $H$, then at least $\prod_{i<h}(n-i)/\prod_{i<h}(m-i)$ of the $h$-element vertex sets induce a copy of $H$
30. `lem-induced-copies-counted-by-extending-a-deleted-vertex` · lemma · The induced copies of $H_1$ in $G$ are counted by summing, over the induced embeddings of $H_1-v$, the number of vertices that extend them at $v$
31. `lem-a-pattern-inside-an-extension-set-produces-the-substitution` · lemma · An induced copy of $H_2$ inside the extension set of an induced embedding of $H_1-v$ yields an induced copy of $H_1$ with $H_2$ substituted for $v$
32. `thm-substitution-preserves-the-erdos-hajnal-property` · theorem · Alon–Pach–Solymosi: if $H_1$ and $H_2$ have the Erdős–Hajnal property, so does the graph obtained from $H_1$ by substituting $H_2$ for a vertex
33. `cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs` · corollary · Every graph has the Erdős–Hajnal property if and only if every prime graph does
34. `cor-blowing-up-a-vertex-preserves-the-erdos-hajnal-property` · corollary · Substituting a complete or an edgeless graph for a vertex preserves the Erdős–Hajnal property
35. `rem-modules-and-the-word-homogeneous` · remark · Why this page says module where its sources say homogeneous set
36. `rem-conventions-for-prime-graphs` · remark · Which small graphs count as prime, and why the convention matters

### `modules-substitution-and-prime-graphs-examples` (B, order 398) — 14 items

1. `ex-modules-of-complete-and-edgeless-graphs` · example · Every vertex set is a module of a complete graph and of an edgeless graph
2. `ex-modules-of-the-four-vertex-path` · example · The four-vertex path has only trivial modules
3. `ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices` · example · Up to isomorphism the four-vertex path is the only prime graph on four vertices
4. `ex-paths-on-at-least-four-vertices-are-prime` · example · $P_n$ is prime for every $n\ge4$
5. `ex-the-five-cycle-is-prime` · example · The five-cycle is prime
6. `ex-substitution-into-an-edge-and-into-a-nonedge` · example · Substituting into $K_2$ gives the join and substituting into $\overline{K_2}$ gives the disjoint union
7. `ex-the-modular-decomposition-of-a-blown-up-five-cycle` · example · The modular decomposition of a five-cycle with each vertex blown up into an edgeless graph
8. `ex-counting-induced-three-vertex-paths-by-extensions` · example · Counting the induced copies of $P_3$ in $P_4$ by extension sets
9. `ex-a-four-vertex-graph-with-the-erdos-hajnal-property-by-substitution` · example · Substituting an edge for an endpoint of $P_3$ gives a four-vertex graph with the Erdős–Hajnal property
10. `cex-a-union-of-two-disjoint-modules-need-not-be-a-module` · counterexample · Two disjoint modules whose union is not a module
11. `cex-a-difference-of-nested-modules-need-not-be-a-module` · counterexample · A difference of two nested modules that is not a module
12. `cex-maximal-proper-modules-need-not-be-disjoint-in-a-disconnected-graph` · counterexample · Maximal proper modules need not be disjoint when the graph or its complement is disconnected
13. `cex-primality-is-not-inherited-by-induced-subgraphs` · counterexample · An induced subgraph of a prime graph need not be prime
14. `fs-every-graph-with-at-least-four-vertices-has-a-nontrivial-module` · false-statement · Every graph with at least four vertices has a nontrivial module

### `sparse-restricted-subgraphs-and-rodl-nikiforov` (A, order 401) — 26 items

1. `def-c-sparse-and-c-restricted-vertex-set` · definition · $c$-sparse, $c$-dense and $c$-restricted vertex sets
2. `def-directional-and-weak-sparsity-between-vertex-sets` · definition · Sparsity of one vertex set to another, and weak sparsity of a pair
3. `lem-weak-sparsity-is-a-bound-on-the-edge-density` · lemma · For disjoint nonempty vertex sets, weak $c$-sparsity says exactly that the edge density is at most $c$
4. `lem-sparsity-depends-only-on-the-induced-subgraph` · lemma · A set is $c$-sparse exactly when the maximum degree of the graph it induces is at most $c$ times its size
5. `lem-a-sparse-set-has-small-self-density` · lemma · A $c$-sparse set has self-density at most $c$, and a $c$-dense set has self-density at least $1-c-1/|X|$
6. `lem-a-weakly-sparse-set-has-a-large-sparse-subset` · lemma · A set of self-density at most $c$ has a subset of at least half its size that is $4c$-sparse
7. `lem-restrictedness-is-complement-invariant` · lemma · A set is $c$-sparse in $G$ exactly when it is $c$-dense in $\overline G$, so $c$-restrictedness is complement-invariant
8. `lem-sparsity-transfers-to-a-large-subset` · lemma · A subset occupying at least a $\lambda$ fraction of a $c$-sparse set is $(c/\lambda)$-sparse
9. `lem-sparsity-is-monotone-in-the-parameter` · lemma · Sparsity is preserved when the parameter grows, and every set of at most two vertices is $0$-restricted
10. `cor-a-restricted-set-contains-a-large-stable-set-or-clique` · corollary · A $c$-sparse set $X$ satisfies $\alpha(G[X])\ge|X|/(c|X|+1)$, and a $c$-dense set satisfies $\omega(G[X])\ge|X|/(c|X|+1)$
11. `lem-regularity-is-monotone-in-the-parameter` · lemma · An $\epsilon$-regular pair is $\epsilon'$-regular for every $\epsilon'\ge\epsilon$ with $\epsilon'>0$
12. `lem-trimming-a-self-regular-set-of-low-density` · lemma · Deleting the high-degree vertices of a $\gamma$-self-regular set of density $d$ leaves more than $(1-\gamma)$ of it, and that remainder is $((d+\gamma)/(1-\gamma))$-sparse
13. `lem-trimming-a-self-regular-set-of-high-density` · lemma · Deleting the low-degree vertices of a $\gamma$-self-regular set of density $d$ leaves more than $(1-\gamma)$ of it, and that remainder is $((1-d+2\gamma)/(1-\gamma))$-dense
14. `lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies` · lemma · A large $\gamma$-self-regular set whose density lies between $\eta$ and $1-\eta$ forces at least $c|W|^{|V(H)|}$ induced copies of $H$
15. `lem-few-induced-copies-is-inherited-by-large-induced-subgraphs` · lemma · If $G$ has fewer than $(\delta n)^{h}$ induced copies of $H$ and $|W|\ge\lambda n$, then $G[W]$ has fewer than $((\delta/\lambda)|W|)^{h}$
16. `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set` · theorem · Nikiforov: for every $H$ and every $\epsilon\in(0,\tfrac12)$ there is $\delta>0$ such that every graph $G$ with $\operatorname{ind}_H(G)<(\delta|V(G)|)^{|V(H)|}$ has an $\epsilon$-restricted vertex set of size at least $\delta|V(G)|$
17. `cor-rodl-every-h-free-graph-has-a-linear-restricted-set` · corollary · Rödl: for every $H$ and every $\epsilon\in(0,\tfrac12)$ there is $\delta>0$ such that every $H$-free graph has an $\epsilon$-restricted vertex set of size at least $\delta|V(G)|$
18. `cor-rodl-for-a-nonempty-family-of-forbidden-graphs` · corollary · Rödl's theorem for a nonempty family of forbidden induced subgraphs
19. `cor-rodl-in-the-edge-density-form` · corollary · The edge-density form of Rödl's theorem: a linearly large set of self-density at most $\epsilon$ or at least $1-\epsilon$
20. `cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable` · corollary · The edge-density form of Rödl's theorem implies the maximum-degree form, with $\epsilon$ and $\delta$ each shrunk by a constant factor
21. `cor-nikiforov-applies-to-every-linearly-large-induced-subgraph` · corollary · A linearly large induced subgraph of a graph with few induced copies again has a linearly large restricted set
22. `cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction` · corollary · For every $\lambda>0$ a bounded number of disjoint $\epsilon$-restricted sets covers all but $\lambda|V(G)|$ vertices of an $H$-free graph
23. `thm-a-bounded-partition-into-weakly-restricted-sets` · theorem · Every $H$-free graph partitions into boundedly many vertex sets of self-density at most $\epsilon$ or at least $1-\epsilon$
24. `rem-the-two-forms-of-rodls-theorem` · remark · Bounded degree against bounded density: the two statements of Rödl's theorem, and which one is stronger
25. `rem-the-diagonal-convention-in-self-density` · remark · Why the dense alternative carries a $1/|X|$ slack
26. `rem-the-size-of-the-constant-in-rodls-theorem` · remark · What this proof gives for $\delta$, and why the regularity route is expensive

### `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` (B, order 402) — 11 items

1. `ex-zero-sparse-sets-are-the-stable-sets` · example · The $0$-sparse sets are exactly the stable sets and the $0$-dense sets exactly the cliques
2. `ex-the-self-density-of-a-clique` · example · A clique of size $s$ has self-density $1-1/s$
3. `ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set` · example · In a disjoint union of cliques of order $k$ the whole vertex set is $(k/n)$-sparse
4. `ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs` · example · For $P_3$-free graphs Rödl's theorem holds with $\delta=\epsilon$, by an explicit argument
5. `ex-restricted-sets-in-a-union-of-two-cliques` · example · In a union of two equal cliques the restricted sets are the ones concentrated on a single side
6. `ex-restricted-sets-in-a-complete-bipartite-graph` · example · In a balanced complete bipartite graph the two sides are the restricted sets of linear size
7. `cex-weak-sparsity-does-not-imply-sparsity` · counterexample · A star has tiny self-density, yet no restricted subset containing its centre has more than two vertices
8. `cex-sparsity-does-not-pass-to-subsets` · counterexample · A subset of a $c$-sparse set that is not $c$-sparse
9. `cex-directional-sparsity-is-not-symmetric` · counterexample · $X$ can be $c$-sparse to $Y$ while $Y$ is not $c$-sparse to $X$
10. `cex-a-complete-graph-has-no-large-sparse-set` · counterexample · The dense alternative in Rödl's theorem cannot be dropped
11. `fs-a-sparse-set-contains-a-stable-set-of-half-its-size` · false-statement · Every $c$-sparse set of size $m$ contains a stable set of size at least $m/2$

Neither A page approaches the sixty-item ceiling, so no split is proposed.

---

## 1. Design against spec

The design section is `research/plan-combinatorics-and-categories.md` §16, whose
§16.2 table carries both pairs (the 397/398 and 401/402 rows). The design states
prerequisites by placement and by the §16.1 amendments rather than by a
`requires` line, and the orders in §16.2 agree with `research/plan-spec.json`.
`requires` in the spec is `erdos-hajnal-property-and-homogeneous-sets` for 397
and `regular-pairs-and-induced-counting` for 401, which the run's step-0 drift
review examined and returned `no-drift` for both. Nothing in this batch
contradicts that; no design-versus-spec conflict was found and none was settled
locally.

One consequence of the step-0 ruling is load-bearing and is recorded so the
step-5 author does not undo it: **page 401 does not use hom(G) and does not
mention the Erdős–Hajnal property.** Rödl's and Nikiforov's theorems are
statements about sparse and restricted sets and need neither, and
`erdos-hajnal-property-and-homogeneous-sets` is not in 401's closure.

---

## 2. Amendments proposed to the prose scaffold

Applyable edits for the lead Alpha; this Beta does not touch prose scaffolds.

### A2.1 — record the modular decomposition theorem in the 397/398 scope

*File:* `research/plan-combinatorics-and-categories.md`, §16.2 table.

*Exact old text:*

```
| 397/398 | modules-substitution-and-prime-graphs | modules-substitution-and-prime-graphs-examples | Modules, prime graphs, substitution and the Alon–Pach–Solymosi theorem (1.4). |
```

*Exact new text:*

```
| 397/398 | modules-substitution-and-prime-graphs | modules-substitution-and-prime-graphs-examples | Modules, their closure properties, modular partitions and quotients, Gallai's modular decomposition theorem, prime graphs, substitution and the Alon–Pach–Solymosi theorem (1.4), with the reduction of the conjecture to prime graphs. |
```

*Why:* the substitution theorem is stated in the paper as a reduction to prime
graphs, and the reduction is only meaningful with the decomposition that
produces prime quotients. The module closure lemmas are needed for the quotient
to be well defined at all.

### A2.2 — record the added weakly-restricted partition theorem in the 401/402 scope

*File:* `research/plan-combinatorics-and-categories.md`, §16.2 table.

*Exact old text:*

```
| 401/402 | sparse-restricted-subgraphs-and-rodl-nikiforov | sparse-restricted-subgraphs-and-rodl-nikiforov-examples | c-sparse/restricted sets and full Rödl/Nikiforov theorems (1.1–1.2). |
```

*Exact new text:*

```
| 401/402 | sparse-restricted-subgraphs-and-rodl-nikiforov | sparse-restricted-subgraphs-and-rodl-nikiforov-examples | c-sparse/restricted sets in both the maximum-degree and the edge-density normalisation, the bridge between them, full Rödl/Nikiforov theorems (1.1–1.2), and the bounded partition into weakly restricted sets (Chudnovsky–Scott–Seymour–Spirkl 1.3). |
```

*Why:* the literature states Rödl's theorem in two normalisations, three of the
four sources backing this pair use the weaker one, and the target paper uses the
stronger one. Without the bridge the page would appear to prove a different
theorem from the one its own sources state.

### A2.3 — correct the item-level requirement for the Rödl/Nikiforov page

*File:* `research/plan-combinatorics-and-categories.md`, §16.3.

*Exact old text:*

```
Rödl/Nikiforov gets reduced-graph selection, induced-count bookkeeping and
parameter-transfer lemmas;
```

*Exact new text:*

```
Rödl/Nikiforov gets a self-regular-set extraction, degree-trimming lemmas on
both density sides, induced-count bookkeeping and parameter-transfer lemmas;
```

*Why:* the route through a reduced graph is not the cheapest one available now.
`thm-large-self-regular-subset` and `thm-induced-counting-lemma-for-regular-pairs`
are already published at order 399, and feeding the counting lemma the same set
in every coordinate turns the whole reduced-graph step into a single density
dichotomy. Nothing is lost: the reduced graph was only ever a device for finding
one self-regular set of extreme density.

---

## 3. Conventions adopted, and the disagreements found

**C1 — module, not homogeneous set.** The target paper §1.2 writes *homogeneous
set* for what Habib–Paul call a *module*. The published
`def-homogeneous-set-and-homogeneous-number` at order 395 already uses
*homogeneous set* for a clique or a stable set. Following the design's own
instruction, this page says **module** and records the clash in
`rem-modules-and-the-word-homogeneous`. A page that used the source's word would
put two incompatible meanings of the same term one page apart.

**C2 — which small graphs are prime.** Habib–Paul and the target paper agree:
prime means every module is trivial, so a graph on one or two vertices is prime
and no graph on three vertices is. Chudnovsky's survey instead defines prime as
"not obtained from smaller graphs by substitution" with both factors on at least
two vertices; `thm-prime-graphs-are-the-graphs-that-are-not-substitutions` proves
the two agree from two vertices upwards. Some texts additionally demand at least
four vertices. The page adopts the target paper's convention and records the
alternatives in `rem-conventions-for-prime-graphs`.

**C3 — substitution needs a nonnull inserted graph.** Chudnovsky requires both
factors to have at least two vertices; the target paper imposes no size
condition. This page requires the host graph to have a vertex and the inserted
graph to be nonnull, so that substituting a one-vertex graph is the identity up
to isomorphism, and it states the size hypotheses explicitly in the primality
theorem, which is the only place they matter.

**C4 — two normalisations of restricted.** Chudnovsky–Scott–Seymour–Spirkl call
a set *weakly ε-restricted* when the graph it induces, or that graph's
complement, has at most ε times the square of its size many edges, and
*ε-restricted* when one of the two has maximum degree at most ε times its size.
Conlon–Fox–Sudakov, Zhao and Fox–Sudakov state Rödl's theorem in the first
(edge-density) form; the target paper and Chudnovsky–Scott–Seymour–Spirkl state
it in the second. The maximum-degree form is strictly stronger. **This page
proves the maximum-degree form and derives the density form**, and
`lem-a-weakly-sparse-set-has-a-large-sparse-subset` together with
`cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable`
supply the return trip, so the sources stating the weaker form genuinely back
the stronger one.

**C5 — the density normalisation itself.** The published
`def-edge-density-between-vertex-sets` divides an **ordered** cross-pair count
by the product of the sizes, so the self-density of a set is twice its internal
edge count over the square of its size. The source's "at most ε times the square
of the size many edges" is therefore self-density at most 2ε, and the factor is
carried explicitly rather than absorbed. The same convention is why a clique of
size s has self-density 1 − 1/s and never 1; every dense statement on the page
carries that slack, and `rem-the-diagonal-convention-in-self-density` justifies
it.

**C6 — a path is named by its vertices.** Chudnovsky's survey counts edges ("the
three-edge path", "the four-edge path"); the library's
`def-standard-complete-bipartite-path-and-cycle-graphs` counts vertices. Every
citation of her results is translated: her three-edge path is the four-vertex
path, her four-edge path is the five-vertex path.

**C7 — every graph finite, simple, undirected; free means no induced copy.**
Both pages inherit this from the published `def-h-free-and-family-free-graph`
and from the design's §16.1 statement. No proof planned here uses any choice
principle beyond ZF, and every argument is finite.

---

## 4. Seams

**S1 — weak sparsity is edge density.**
`def-directional-and-weak-sparsity-between-vertex-sets` introduces the source's
edge-count condition into a library that already has
`def-edge-density-between-vertex-sets` from order 399.
`lem-weak-sparsity-is-a-bound-on-the-edge-density` proves the two agree for
disjoint nonempty sets, in the dictionary style the brief asks for. Without it
this page would be silently re-minting a density.

**S2 — module against pure pair.** `def-module-of-a-graph` is stated so that its
criterion is literally that the pair consisting of an outside vertex and the
module is pure, using the published `def-edges-between-sets-and-pure-mixed-pairs`
from order 393 rather than a fresh adjacency condition. `lem-module-criteria`
records the agreement.

**S3 — modules against connectivity.**
`lem-unions-of-components-and-of-anticomponents-are-modules` is the edge between
this page and the published component and anticomponent theory at order 393;
without it the disconnected cases of Gallai's theorem would have no declared
relationship to the published component partition.

**S4 — 397 and 401 share no dependency edge, and that is correct.** The two
pairs in this batch are independent: modules and substitution use no regularity,
and Rödl and Nikiforov use no module. The seam between them is
`polynomial-rodl-and-viral-equivalence`, where the polynomial Rödl property and
the Erdős–Hajnal property meet. Nothing on either page pretends otherwise.

**S5 — the clique and stable-set numbers exist twice in published content.**
`def-clique-stable-set-and-numbers` (order 393) and
`def-clique-and-independence-numbers` (order 215) define the same two invariants
under two ids. Page 401 must cite the second, because
`thm-clique-independence-chromatic-bounds` is stated against it; page 397 cites
the first, because the homogeneous number is. This is finding F5 and is not
repaired here.

---

## 5. Component provenance, per planned item

Values are the expected `provenance.statement` and `provenance.proof` of
SCHEMA §3. The reference column is the exact URL step 5 places in
`sources.references`; every one was fetched in this dispatch and carries a
`fetch_verified` stamp in the coverage file. An `ai-generated` statement carries
`generation.role` as noted and **is never a `deps` target**; this was checked
mechanically over the whole manifest, and every such item has no dependents.

### `modules-substitution-and-prime-graphs`

| id | kind | statement | proof | reference for step 5 | rationale |
|---|---|---|---|---|---|
| `def-module-of-a-graph` | definition | literature-derived | not-applicable | https://arxiv.org/pdf/0912.1457 | Habib–Paul Definition 5 and the target paper §1.2 give the same condition; only the name changes. |
| `lem-module-criteria` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | The three formulations are each used interchangeably in Habib–Paul §2.3 (splitter language, equal outside neighbourhood, Definition 5); assembling them into one equivalence is the local adaptation. |
| `lem-modules-are-complement-invariant` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul use complement invariance of the module family without isolating it (§2.5, 'if G is totally decomposable then so is its complement'); stating and proving it is the adaptation. |
| `lem-unions-of-components-and-of-anticomponents-are-modules` | lemma | literature-derived | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul §2.3 states exactly this as the first example of a module; the proof is written locally from the published component lemmas. |
| `lem-disjoint-modules-are-a-pure-pair` | lemma | literature-derived | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul Observation 2, restated in the library's complete/anticomplete vocabulary. |
| `lem-intersection-of-two-modules-is-a-module` | lemma | literature-derived | ai-generated | https://arxiv.org/pdf/0912.1457 | One clause of Habib–Paul Lemma 2 (the module family is partitive); intersection needs no overlap hypothesis. |
| `lem-union-of-two-meeting-modules-is-a-module` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | Lemma 2 gives the union for OVERLAPPING modules; the version proved here needs only a common vertex, which is a strictly weaker hypothesis and is what Gallai's theorem uses. |
| `lem-differences-of-overlapping-modules-are-modules` | lemma | literature-derived | ai-generated | https://arxiv.org/pdf/0912.1457 | The remaining clauses of Habib–Paul Lemma 2 read through their Definition 1; the overlap hypothesis is theirs and is genuinely needed. |
| `lem-a-module-meets-an-induced-subgraph-in-a-module` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | Standard and used implicitly whenever Habib–Paul recurse into G[M]; isolated here because the substitution theorem restricts modules to subsets. |
| `lem-a-module-of-a-module-is-a-module` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | The transitivity that makes the recursive decomposition of Habib–Paul §2.3 well founded, stated explicitly. |
| `lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | An immediate consequence of Definition 5 plus connectivity, used repeatedly in modular-decomposition arguments; stated here because three B-page primality checks run through it. |
| `def-prime-graph` | definition | literature-derived | not-applicable | https://arxiv.org/pdf/0912.1457 | Habib–Paul §2.4 ('a graph is prime if it only contains trivial modules') and the target paper §1.2 agree. |
| `lem-graphs-on-three-vertices-are-not-prime` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul assert that the smallest prime graph is P4, which contains this statement; the four-case verification is written locally. |
| `def-substitution-of-a-graph-for-a-vertex` | definition | literature-derived | not-applicable | https://arxiv.org/pdf/2606.06258v2 | The target paper §1.2 gives the four adjacency clauses verbatim; Chudnovsky §2 gives the same operation. |
| `lem-the-substituted-set-is-a-module` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2606.06258v2 | The target paper asserts the module property of V(G2) in passing when it derives the primality criterion; the recovery of both factors is the local addition. |
| `lem-substitution-commutes-with-complementation` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2606.06258v2 | Complement compatibility is used silently whenever the paper takes complements of substituted graphs; proved here so the blow-up corollary can use it. |
| `thm-prime-graphs-are-the-graphs-that-are-not-substitutions` | theorem | literature-derived | ai-generated | https://arxiv.org/pdf/2606.06258v2 | The target paper §1.2 states the equivalence exactly ('It is clear that a graph G on at least two vertices is prime if and only if ...') and supplies no proof, so the proof is local. |
| `def-modular-partition-and-quotient-graph` | definition | literature-derived | not-applicable | https://arxiv.org/pdf/0912.1457 | Habib–Paul Definitions 6 and 7. |
| `lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is` | lemma | literature-derived | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul Lemma 3, attributed to Möhring; the proof is written locally from the purity of disjoint modules. |
| `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph` | theorem | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul say adjacency can be retrieved from the decomposition tree and that the quotient is isomorphic to any transversal; the explicit adjacency rule for one modular partition is the adaptation. |
| `lem-overlapping-proper-modules-of-a-connected-anticonnected-graph` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | This is the step that makes Habib–Paul's Theorem 2 case (3) work; the source gives Theorem 2 with a citation and no proof, so the step is isolated and proved here. |
| `lem-every-vertex-lies-in-a-unique-maximal-proper-module` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul assert that each graph has a unique maximal modular partition; the existence and uniqueness argument is written locally. |
| `thm-gallai-modular-decomposition` | theorem | literature-derived | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul Theorem 2, attributed to Gallai and to Chein–Habib–Maurer; they state it without proof, so the whole proof is local. |
| `cor-the-prime-quotient-has-at-least-four-vertices` | corollary | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | Implied by Habib–Paul's Theorem 2 together with their remark that the smallest prime graph is P4; recorded because the reader otherwise cannot see that the third case is nondegenerate. |
| `lem-homogeneous-number-is-monotone-under-induced-subgraphs` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/1606.08827 | Chudnovsky uses monotonicity of the clique and stability numbers under induced subgraphs throughout §2 without stating it; the library has no published instance, so it is built here. |
| `lem-a-large-set-contains-a-pattern-when-the-homogeneous-number-is-small` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/1606.08827 | This is the first move of Chudnovsky's proof sketch of Theorem 2.2 ('every induced subgraph with at least |V(G)|^eps vertices contains an induced copy of H1'), stated as a lemma with its quantifiers fixed. |
| `lem-supersaturation-for-induced-copies` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/1606.08827 | The standard supersaturation double count, adapted from ordinary subgraphs to induced copies; Chudnovsky's sketch invokes it as 'counting shows'. |
| `lem-induced-copies-counted-by-extending-a-deleted-vertex` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/1606.08827 | The bookkeeping identity behind Chudnovsky's 'some copy of H1 minus v can be extended in at least n^eps ways'. |
| `lem-a-pattern-inside-an-extension-set-produces-the-substitution` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/1606.08827 | Chudnovsky's closing step ('this guarantees that there is a copy of H2 among the possible extensions'), made into an explicit construction of the induced embedding. |
| `thm-substitution-preserves-the-erdos-hajnal-property` | theorem | literature-derived | ai-altered | https://arxiv.org/pdf/1606.08827 | Alon–Pach–Solymosi, stated as Chudnovsky Theorem 2.2 and as the target paper's Theorem 1.4. The proof follows Chudnovsky's published sketch and supplies the constants, the choice of the intermediate size and the small-order case, none of which the sketch gives. |
| `cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs` | corollary | literature-derived | ai-generated | https://arxiv.org/pdf/2606.06258v2 | The target paper §1.2 states the reduction ('it suffices to consider Conjecture 1 for prime graphs'); the induction is written locally. |
| `cor-blowing-up-a-vertex-preserves-the-erdos-hajnal-property` | corollary | ai-generated | ai-generated | — (generated, no source claim) | A direct corollary of the substitution theorem and the published K_t-free theorem, non-load-bearing, generation.role: direct-corollary. Nothing depends on it. |
| `rem-modules-and-the-word-homogeneous` | remark | ai-altered | not-applicable | https://arxiv.org/pdf/2606.06258v2 | The clash is a fact about the two sources: the target paper §1.2 calls a module a homogeneous set, while the published page at order 395 uses homogeneous set for a clique or stable set. The remark reports both usages. |
| `rem-conventions-for-prime-graphs` | remark | ai-altered | not-applicable | https://arxiv.org/pdf/0912.1457 | Habib–Paul, Chudnovsky and the target paper each fix 'prime' slightly differently at small orders; the remark records the three and the one this page adopts. |

### `modules-substitution-and-prime-graphs-examples`

| id | kind | statement | proof | reference for step 5 | rationale |
|---|---|---|---|---|---|
| `ex-modules-of-complete-and-edgeless-graphs` | example | literature-derived | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul §2.3 give this as the example showing a graph can have exponentially many modules. |
| `ex-modules-of-the-four-vertex-path` | example | literature-derived | ai-generated | https://arxiv.org/pdf/0912.1457 | Habib–Paul §2.4: 'it is easy to check that the smallest prime graph is the P4'. |
| `ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices` | example | literature-derived | ai-generated | https://arxiv.org/pdf/1606.08827 | Chudnovsky §2: 'the only prime graph on four vertices is the three-edge path'. |
| `ex-paths-on-at-least-four-vertices-are-prime` | example | ai-altered | ai-generated | https://arxiv.org/pdf/0912.1457 | An extension of the source's P4 statement to all longer paths. Because it is ai-altered it is an eligible dependency target, and it is not auto-trusted: the proof supplied verifies it directly, and the counterexample that cites it uses only the P5 instance. |
| `ex-the-five-cycle-is-prime` | example | literature-derived | ai-generated | https://arxiv.org/pdf/1606.08827 | Chudnovsky §2 lists C5 among the four prime graphs on five vertices. |
| `ex-substitution-into-an-edge-and-into-a-nonedge` | example | ai-generated | ai-generated | — (generated, no source claim) | generation.role: example. A checkable identification of join and disjoint union as substitutions; nothing depends on it. |
| `ex-the-modular-decomposition-of-a-blown-up-five-cycle` | example | ai-generated | ai-generated | — (generated, no source claim) | generation.role: example. A worked instance of Gallai's theorem with an explicit finite witness; nothing depends on it. |
| `ex-counting-induced-three-vertex-paths-by-extensions` | example | ai-generated | ai-generated | — (generated, no source claim) | generation.role: example. A finite computation checking the extension identity; nothing depends on it. |
| `ex-a-four-vertex-graph-with-the-erdos-hajnal-property-by-substitution` | example | ai-generated | ai-generated | — (generated, no source claim) | generation.role: example. An instance of the substitution theorem with published inputs; nothing depends on it. |
| `cex-a-union-of-two-disjoint-modules-need-not-be-a-module` | counterexample | ai-generated | ai-generated | — (generated, no source claim) | generation.role: counterexample. Explicit finite witness in P4 showing the meeting hypothesis is needed; nothing depends on it. |
| `cex-a-difference-of-nested-modules-need-not-be-a-module` | counterexample | ai-generated | ai-generated | — (generated, no source claim) | generation.role: counterexample. Explicit four-vertex witness showing that the overlap hypothesis in the difference lemma cannot be weakened to inclusion; nothing depends on it. |
| `cex-primality-is-not-inherited-by-induced-subgraphs` | counterexample | ai-generated | ai-generated | — (generated, no source claim) | generation.role: counterexample. P5 minus its middle vertex; nothing depends on it. |
| `fs-every-graph-with-at-least-four-vertices-has-a-nontrivial-module` | false-statement | literature-derived | ai-generated | https://arxiv.org/pdf/0912.1457 | The false claim is the negation of Habib–Paul's statement that P4 is prime, so the claim itself is source-anchored and the refutation is the finite check. |

### `sparse-restricted-subgraphs-and-rodl-nikiforov`

| id | kind | statement | proof | reference for step 5 | rationale |
|---|---|---|---|---|---|
| `def-c-sparse-and-c-restricted-vertex-set` | definition | literature-derived | not-applicable | https://arxiv.org/pdf/2606.06258v2 | Target paper §1.1 defines c-sparse and c-restricted; Chudnovsky–Scott–Seymour–Spirkl §1 give the same two notions with the maximum-degree normalisation. |
| `def-directional-and-weak-sparsity-between-vertex-sets` | definition | literature-derived | not-applicable | https://arxiv.org/pdf/2606.06258v2 | Target paper §2 defines 'X is c-sparse to Y' and 'weakly c-sparse'; the same directional notion is in Chudnovsky–Scott–Seymour–Spirkl §1. |
| `lem-weak-sparsity-is-a-bound-on-the-edge-density` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2606.06258v2 | The dictionary between the source's edge-count formulation and the library's published edge density; written so the page never mints a second density. |
| `lem-sparsity-depends-only-on-the-induced-subgraph` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2105.07370 | Chudnovsky–Scott–Seymour–Spirkl phrase restrictedness as a maximum-degree condition on G[X] and on its complement; this records that the two phrasings agree. |
| `lem-a-sparse-set-has-small-self-density` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2105.07370 | Their sentence 'every eps-restricted set is weakly eps/2-restricted', converted to the library's density normalisation, where the diagonal convention costs a 1/|X| term. |
| `lem-a-weakly-sparse-set-has-a-large-sparse-subset` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2105.07370 | Their sentence 'every weakly eps/2-restricted set has a subset of at least half its size that is eps-restricted'. The constant is recomputed under the library's density convention and comes out as 4c, not c; the discrepancy is a normalisation difference, recorded in the conventions section. |
| `lem-restrictedness-is-complement-invariant` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2105.07370 | Restrictedness is defined as a disjunction over G and its complement in the source; the invariance is the immediate consequence, stated because two later proofs use it. |
| `lem-sparsity-transfers-to-a-large-subset` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2606.06258v2 | The parameter-transfer step used whenever the target paper restricts a sparse set; isolated here with its exact loss factor. |
| `lem-sparsity-is-monotone-in-the-parameter` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2105.07370 | Chudnovsky–Scott–Seymour–Spirkl record that sets of cardinality at most two are always restricted and that such parts are sometimes needed; monotonicity in the parameter is the other half. |
| `cor-a-restricted-set-contains-a-large-stable-set-or-clique` | corollary | ai-generated | ai-generated | — (generated, no source claim) | generation.role: direct-corollary. Two published citations, the greedy colouring bound and the chromatic-stability inequality, give it in two lines; nothing depends on it. |
| `lem-regularity-is-monotone-in-the-parameter` | lemma | ai-altered | ai-generated | https://yufeizhao.com/gtacbook/gtacbook.pdf | Zhao Remark 2.1.3 separates the two roles of eps and notes they need not be distinguished; the monotonicity that justifies this is proved here because the library has no published instance. |
| `lem-trimming-a-self-regular-set-of-low-density` | lemma | ai-altered | ai-generated | https://yufeizhao.com/gtacbook/gtacbook.pdf | The standard 'discard the atypical vertices' step of the regularity method (Zhao Lemma 2.2.3 and Remark 2.3.2), specialised to a self-regular set and to the maximum-degree conclusion. |
| `lem-trimming-a-self-regular-set-of-high-density` | lemma | ai-altered | ai-generated | https://yufeizhao.com/gtacbook/gtacbook.pdf | The same step read on the other side of the typical-degree lemma; the two-sided loss 2*gamma is computed explicitly rather than absorbed. |
| `lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies` | lemma | ai-altered | ai-generated | https://yufeizhao.com/gtacbook/gtacbook.pdf | Zhao §2.8's induced counting lemma applied with all h sets equal; the observation that repetitions are permitted is what makes the single-set version work. |
| `lem-few-induced-copies-is-inherited-by-large-induced-subgraphs` | lemma | ai-altered | ai-generated | https://arxiv.org/pdf/2606.06258v2 | Induced-count bookkeeping for the hypothesis of the target paper's Theorem 1.2; the inheritance is immediate but is used twice and is easy to get the direction wrong. |
| `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set` | theorem | literature-derived | ai-altered | https://arxiv.org/pdf/2606.06258v2 | The statement is the target paper's Theorem 1.2, attributed to Nikiforov, quoted with its exact hypothesis ind_H(G) < (delta|G|)^{|H|}. The proof is assembled from the published strong-regularity items rather than following Nikiforov's original route. |
| `cor-rodl-every-h-free-graph-has-a-linear-restricted-set` | corollary | literature-derived | ai-generated | https://arxiv.org/pdf/2606.06258v2 | The target paper's Theorem 1.1 and Chudnovsky–Scott–Seymour–Spirkl's 1.2, both in the maximum-degree form; the derivation from the counting version is local. |
| `cor-rodl-for-a-nonempty-family-of-forbidden-graphs` | corollary | ai-altered | ai-generated | https://arxiv.org/pdf/2606.06258v2 | The target paper uses the family form throughout §§2 onwards; recorded here with the quantifier structure later pages will cite. |
| `cor-rodl-in-the-edge-density-form` | corollary | literature-derived | ai-generated | https://arxiv.org/pdf/1501.02474 | Conlon–Fox–Sudakov §3.3, Zhao Exercise 2.7.2 and Chudnovsky–Scott–Seymour–Spirkl 1.1 all state Rödl's theorem in this density form; the derivation and the threshold on n are local. |
| `cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable` | corollary | literature-derived | ai-generated | https://arxiv.org/pdf/2105.07370 | Chudnovsky–Scott–Seymour–Spirkl state precisely this bridge between their 1.1 and 1.2; the constants are recomputed under the library's density convention. |
| `cor-nikiforov-applies-to-every-linearly-large-induced-subgraph` | corollary | ai-generated | ai-generated | — (generated, no source claim) | generation.role: direct-corollary. Immediate from the inheritance lemma and the theorem; nothing depends on it. |
| `cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction` | corollary | ai-altered | ai-generated | https://arxiv.org/pdf/2105.07370 | Chudnovsky–Scott–Seymour–Spirkl describe this iteration in the proof sketch of their 1.3 ('apply 1.1 repeatedly to partition most of the vertices'); the logarithmic bound on the number of steps is computed here. |
| `thm-a-bounded-partition-into-weakly-restricted-sets` | theorem | literature-derived | ai-altered | https://arxiv.org/pdf/2105.07370 | Their Theorem 1.3. Their sketch is one sentence; the proof here supplies the bound on the number of parts and the arithmetic that lets the leftover be absorbed into the largest part. |
| `rem-the-two-forms-of-rodls-theorem` | remark | ai-altered | not-applicable | https://arxiv.org/pdf/2105.07370 | The two normalisations are a documented fact about the sources; the remark says which is stronger and how the page moves between them. |
| `rem-the-diagonal-convention-in-self-density` | remark | ai-altered | not-applicable | https://yufeizhao.com/gtacbook/gtacbook.pdf | The published density counts ordered pairs and excludes the diagonal; the remark justifies the 1/|X| slack this forces in every dense statement. |
| `rem-the-size-of-the-constant-in-rodls-theorem` | remark | ai-altered | not-applicable | https://arxiv.org/pdf/1501.02474 | Conlon–Fox–Sudakov record that Rödl's regularity proof gives a tower-type bound on 1/delta; the remark says what this page's own route yields and does not claim the improved bounds it does not prove. |

### `sparse-restricted-subgraphs-and-rodl-nikiforov-examples`

| id | kind | statement | proof | reference for step 5 | rationale |
|---|---|---|---|---|---|
| `ex-zero-sparse-sets-are-the-stable-sets` | example | ai-altered | ai-generated | https://arxiv.org/pdf/2606.06258v2 | A direct reading of the source's definition at c = 0; recorded because two later examples cite it, so it must be an eligible dependency target. |
| `ex-the-self-density-of-a-clique` | example | ai-generated | ai-generated | — (generated, no source claim) | generation.role: example. An exact finite computation; nothing depends on it. |
| `ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set` | example | ai-altered | ai-generated | https://arxiv.org/pdf/2606.06258v2 | A direct reading of the source's definition on the standard sparse witness; it is cited by the false statement, so it is kept an eligible target. |
| `ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs` | example | ai-generated | ai-generated | — (generated, no source claim) | generation.role: example. An explicit instance with delta = eps proved from the definitions; nothing depends on it. |
| `ex-restricted-sets-in-a-union-of-two-cliques` | example | ai-generated | ai-generated | — (generated, no source claim) | generation.role: example. A finite computation on an explicit graph; nothing depends on it. |
| `ex-restricted-sets-in-a-complete-bipartite-graph` | example | ai-generated | ai-generated | — (generated, no source claim) | generation.role: example. A finite computation on an explicit graph; nothing depends on it. |
| `cex-weak-sparsity-does-not-imply-sparsity` | counterexample | literature-derived | ai-generated | https://arxiv.org/pdf/2105.07370 | The star witness and its conclusion are Chudnovsky–Scott–Seymour–Spirkl's own example in §1; the arithmetic is redone here. |
| `cex-sparsity-does-not-pass-to-subsets` | counterexample | ai-generated | ai-generated | — (generated, no source claim) | generation.role: counterexample. A perfect matching witness; nothing depends on it. |
| `cex-directional-sparsity-is-not-symmetric` | counterexample | ai-generated | ai-generated | — (generated, no source claim) | generation.role: counterexample. An explicit two-set witness; nothing depends on it. |
| `cex-a-complete-graph-has-no-large-sparse-set` | counterexample | ai-generated | ai-generated | — (generated, no source claim) | generation.role: counterexample. Shows the dense alternative in Rödl's theorem is necessary; nothing depends on it. |
| `fs-a-sparse-set-contains-a-stable-set-of-half-its-size` | false-statement | ai-altered | ai-generated | https://arxiv.org/pdf/2606.06258v2 | The false claim is a plausible misreading of the sparse-set exit; it is anchored to the source's definition of sparsity and refuted by an explicit witness. |

**Truth-risk obligations.** Every `ai-generated` statement above is a finite,
directly checkable construction: an explicit graph with an explicit adjacency
list, or a corollary that is two citations deep. For each, step 5 must state the
witness in full and verify the claim on it rather than assert it. No
counterexample search is owed for a general claim, because none of the generated
statements is general. The one place where doubt was real is
`ex-paths-on-at-least-four-vertices-are-prime`, which extends a source statement
about the four-vertex path to all longer paths; it is labelled `ai-altered`
rather than `literature-derived` for exactly that reason, its proof is supplied
in full, and the only item citing it uses the five-vertex instance, which that
proof settles directly.

**External fallback.** None. No planned item has `proved_here: false`, no
`external_dependency` record is owed, and no `external_refs` entry is planned.

---

## 6. Proof-obligation notes the step-5 author will need

### 6.1 The substitution theorem

Chudnovsky's survey gives the idea in four sentences and no constants. The
constants that close it are:

- Write h for the number of vertices of the host graph, and let e1 and e2 be
  Erdős–Hajnal constants for the two factors. Set b = 1/(2(h+1)) and
  e = b·min(e1, e2).
- Assume hom(G) < n^e for contradiction. Because b·e1 >= e and b·e2 >= e, every
  vertex set of size at least n^b contains an induced copy of each factor.
- Let m be the **least natural number** with m >= n^b; then m < n^b + 1. Do not
  write a ceiling: the library has no real ceiling. Existence is
  `thm-of-archimedean` plus `thm-well-ordering-principle`, tagged `[choose]`.
- Supersaturation gives at least ((n − h + 1)/m)^h vertex sets of size h
  inducing the host graph, hence at least that many induced copies.
- The induced embeddings of the host graph minus the substituted vertex number
  at most n^(h−1), so averaging produces one whose extension set has size at
  least 4^(−h)·n^(1−bh) once n >= 2h.
- Since 1 − b(h+1) = 1/2, that size exceeds m as soon as the square root of n is
  at least 2·4^h. Take n0 to be the largest of 4·16^h, 2h and h^(2(h+1)); the
  third term is what makes m >= h, which supersaturation needs.
- For n < n0 shrink the exponent to the smaller of e and 1/log2(n0). Then
  n^e' <= n0^e' <= 2 <= hom(G) for 2 <= n < n0, and n = 1 is the equality 1 = 1.
  This is the step that is easiest to forget, and it is where the theorem would
  otherwise be false as stated.

### 6.2 Boundary cases that are traps on these pages

- **The null graph.** Its homogeneous number is 0, its density is 0 by
  convention, it is neither connected nor anticonnected, and it has no
  self-regular subset. Every statement on 401 that produces a set therefore
  assumes G has a vertex; every statement on 397 about the decomposition assumes
  at least two vertices.
- **One and two vertices.** A one-vertex graph is connected and anticonnected,
  and is prime. A two-vertex graph is prime. Both are 0-restricted, and that is
  what makes the small-order case of Nikiforov's theorem work.
- **Three vertices.** No graph on three vertices is prime; this is a lemma, not
  a remark, because `cor-the-prime-quotient-has-at-least-four-vertices` needs it.
- **Empty vertex sets.** The empty pair is both complete and anticomplete, hence
  pure; the empty set is a module; sparsity is defined only for nonempty sets,
  because it divides by the size.
- **The diagonal in the self-density.** A self-density never reaches 1. Do not
  write that it is at least 1 − ε without either a lower bound on the size of
  the set or the reciprocal-size term.
- **The induced-copy count is a count of labelled embeddings**, not of vertex
  subsets, in both the published definition and the target paper. The
  supersaturation lemma counts subsets and the extension lemma counts
  embeddings; the conversion is "at least one embedding per good subset" and
  must be written down, not assumed to be an equality.
- **Both directions of every iff.** The three module criteria, the primality
  criterion, the union-of-parts lemma and the weak-versus-strong sparsity bridge
  are all biconditionals; the contract file records both directions separately
  for each.

### 6.3 Notation the authored text must avoid

No applied canonical embedding around a natural number. No real floor or
ceiling. No wikilink inside inline mathematics. No count of anything in page
prose, and no positional claim about another page that is not read off the spec.

---

## 7. Web research ledger

Every URL below was fetched in full in this dispatch;
`tools/source-fetch-check.mjs --stamp` recorded bytes, hash and page count for
each, and `tools/url-sweep.mjs --recover --fail-on-dead` reported all live. No
archive fallback was needed and no source was replaced.

| source | kind | what it backs |
|---|---|---|
| [Habib–Paul, *A Survey on Algorithmic Aspects of Modular Decomposition*](https://arxiv.org/pdf/0912.1457) | survey | modules, their closure properties, modular partitions, quotient graphs, Gallai's modular decomposition theorem, prime graphs |
| [Chudnovsky, *The Erdős–Hajnal Conjecture — A Survey*](https://arxiv.org/pdf/1606.08827) | survey | the substitution operation, primality as non-substitutability, Alon–Pach–Solymosi (her Theorem 2.2) and the proof idea this page makes rigorous |
| [Huang–Ju–Zhou, *Erdős-Hajnal beyond the five-vertex path* (arXiv:2606.06258v2)](https://arxiv.org/pdf/2606.06258v2) | paper | the exact statements of Theorems 1.1, 1.2 and 1.4, the four substitution clauses, the primality criterion, and the sparse and restricted definitions |
| [Chudnovsky–Scott–Seymour–Spirkl, *Strengthening Rödl's theorem*](https://arxiv.org/pdf/2105.07370) | paper | both normalisations of restricted, the bridge between them, the bounded partition into weakly restricted sets, the star example, directional sparsity |
| [Zhao, *Graph Theory and Additive Combinatorics*](https://yufeizhao.com/gtacbook/gtacbook.pdf) | textbook | the regularity machinery this page's proof runs on, and Rödl's theorem in the density form as Exercise 2.7.2 |
| [Conlon–Fox–Sudakov, *Recent developments in graph Ramsey theory*](https://arxiv.org/pdf/1501.02474) | survey | Rödl's theorem in the density form, the tower-type bound its regularity proof gives, the polynomial Rödl conjecture |
| [Fox–Sudakov, *Induced Ramsey-type theorems*](https://arxiv.org/pdf/0706.4112) | paper | independent statements of Rödl's and Nikiforov's theorems, and the record that Nikiforov's own form is the stronger partition version |

**Convention disagreements found in these sources** are C1 to C6 in §3. The one
that could have produced a wrong page is C4: three of the seven sources state
Rödl's theorem in the weaker edge-density form, and a scaffold that took the
weaker statement while citing the target paper's name for it would have shipped
a theorem the citation does not support.

**Dependency-closure statement.** Every published item proposed as a dependency
was opened on disk and its `status: published`, its exact Definition or
Statement, its domain, quantifiers, hypotheses and direction were read before it
was cited. There are 57 distinct external dependencies across the four pages.
Every one is either published on a page strictly earlier in plan order or an
earlier item inside the same pair; `depsource.mjs` reports 0 unresolved, 0
`planned-later`, 0 `draft-page` and 0 `homeless` for all four pages, and
`validate-plan.mjs`'s `undeclared-prereq` check passes, so every induced page
edge lies inside the declared `requires` closure. There is no exception and no
external fallback.

**Provenance of the dependencies.** Of the 57 external dependencies, 23 carry
`provenance.statement: literature-derived` and 34 carry `ai-altered`. **None is
`ai-generated`** and **none is legacy-unclassified**: every one carries a
component `provenance` block, so no confidence route under the
`established-from-knowledge` / `source-checked` rule is owed for any of them.
The `ai-altered` targets were not auto-trusted: each was read on disk and its
statement checked against the reading recorded above before being made
load-bearing, and the three whose exact form matters most —
`def-epsilon-regular-pair`, `lem-typical-degrees-in-a-regular-pair` and
`thm-induced-counting-lemma-for-regular-pairs` — were checked clause by clause,
including that the regular-pair definition explicitly permits a set to be paired
with itself and that the induced counting lemma explicitly permits repetitions
among its sets. Those two permissions are what make the proof of Nikiforov's
theorem on this page work at all.

---

## 8. Published-dependency defects

None found. No item read on disk during this dispatch carries a load-bearing
claim, citation or definition that is an unambiguous falsehood, so no
published-dependency repair is proposed and none will be attempted at step 5.
Findings F5 and F6 below are structural observations, not falsehoods.

---

## 9. The coverage harvest, and its yield

`coverage-checklist.mjs --require-destination` passes with no error and two
`coverage-low-yield` warnings. The warning is expected here and should be read
with the numbers behind it.

For `modules-substitution-and-prime-graphs`, 67 headings were harvested; 17 are
`included` and a further 9 are `inline` or `already-published`, so 26 are
covered by content that exists or will exist in this batch. For
`sparse-restricted-subgraphs-and-rodl-nikiforov`, 92 headings were harvested; 14
are `included` and a further 38 are `inline` or `already-published`, so 52 are
covered. The gap between the `included` count and the covered count is almost
entirely Zhao's regularity chapter, which the library published in full at order
399 — those rows are `already-published` because the library really does have
them, not because this page declined them.

The genuine declines are dominated by one structural fact: §16 of the design
splits a single research programme across twenty-five A/B pairs at orders
393–442, and both surveys here are surveys of that whole programme. Every
`deferred` row names a destination that resolves, and the destinations are
overwhelmingly pages inside that same block:
`cographs-perfect-patterns-and-pure-pairs`,
`small-graph-erdos-hajnal-consequences`,
`bull-free-graphs-and-the-erdos-hajnal-property`,
`pure-pairs-forests-and-path-antipath-classes`,
`the-five-cycle-and-erdos-hajnal`,
`iterative-sparsification-and-the-five-vertex-path`,
`star-expansions-and-erdos-hajnal`,
`blockades-combs-and-pattern-graphs`,
`leaf-reducibility-and-wonderful-families`,
`erdos-hajnal-for-the-e-graph-and-bird`,
`classical-and-loglog-erdos-hajnal-bounds` and
`polynomial-rodl-and-viral-equivalence`. The declines that resolve to
`owner-decision` are listed in finding F7.

The one class of decline that is a genuine mathematical limit rather than a
routing decision is Nikiforov's own *partition* form and
Chudnovsky–Scott–Seymour–Spirkl's Theorem 1.4: both ask for a bounded
**partition** in which every part is restricted in the maximum-degree sense. The
repeated-extraction argument this page can run leaves an uncovered remainder,
and the remainder cannot be absorbed in the maximum-degree normalisation — a
large star is the obstruction, as `cex-weak-sparsity-does-not-imply-sparsity`
records. What this page *can* prove, and does, is the weakly-restricted
partition, which is Chudnovsky–Scott–Seymour–Spirkl's Theorem 1.3.

---

## 10. Findings for the step-3 Alpha

Ordered by severity. Each is one decision.

**F1 — approve the route for Rödl and Nikiforov through the published
self-regular subset, not through a reduced graph.** §16.3 asks for
"reduced-graph selection". The scaffold instead extracts one linearly large
self-regular set with `thm-large-self-regular-subset` (published, order 399),
feeds `thm-induced-counting-lemma-for-regular-pairs` the same set in every
coordinate, and reads off a density dichotomy. *What breaks if declined:* a
reduced-graph route would need a Ramsey argument on the reduced graph and a
slicing pass, which is more machinery for the same conclusion, and it would have
to re-derive from the published regularity partition what
`thm-large-self-regular-subset` already states. Amendment A2.3 records the change
if approved.

**F2 — approve building Gallai's modular decomposition theorem on 397.** The
design's one-line scope for the pair names only modules, prime graphs,
substitution and Theorem 1.4. The scaffold adds the modular partition, the
quotient, the maximal-proper-module partition and the theorem itself. *Why:* the
paper's own framing is that the conjecture reduces to prime graphs, and the
reduction is a statement about how a graph decomposes; without the theorem the
page can say a non-prime graph is *some* substitution but not that every graph
is built from prime quotients. *What breaks if declined:*
`cor-the-prime-quotient-has-at-least-four-vertices` and three B-page items go,
and the cographs page loses the decomposition it will need to cite.

**F3 — approve the two-normalisation treatment of restricted sets.** Three of
the four sources for the 401 pair state Rödl's theorem with edge density; the
target paper states it with maximum degree. The scaffold proves the
maximum-degree form, derives the density form, and proves the return trip with
`lem-a-weakly-sparse-set-has-a-large-sparse-subset`. *What breaks if declined:*
either the page proves the weaker theorem while citing the target paper for the
stronger one, or its sources stop backing its main theorem. Amendment A2.2
records it.

**F4 — the design's GT-1 amendment is not on disk, and later pages in this block
need it.** §16.1 requires `graphs-walks-and-connectivity` (published, order 207)
to carry A-page edge-list definitions of the bull, the E-graph, the Bird and
their complements. It carries none of them. This batch does not need them and
works around it: the B-page primality examples use paths and the five-cycle,
which `def-standard-complete-bipartite-path-and-cycle-graphs` supplies. *What
breaks if left:* `bull-free-graphs-and-the-erdos-hajnal-property`,
`the-five-cycle-and-erdos-hajnal`, `small-graph-erdos-hajnal-consequences`,
`co-e-free-comb-structure`, `co-bird-free-comb-structure` and
`erdos-hajnal-for-the-e-graph-and-bird` have no way to name the figures their
theorems are about. This is not repairable from a batch: it is a change to a
published page. Reported for the lead Alpha and the owner.

**F5 — the clique and stable-set numbers are defined twice in published
content.** `def-clique-and-independence-numbers` at order 215 and
`def-clique-stable-set-and-numbers` at order 393 give the same two invariants
under two ids. Both are cited in this batch, each on the page whose other
citations force it. *What breaks if left:* nothing in this batch; a reader meets
the two invariants twice. Item ids are immutable, so the remedy is an alias or a
dictionary remark, and that is an owner decision about published content, not a
batch repair.

**F6 — the design's real-ceiling amendment is not on disk.** §16.1 requires the
real-analysis support to add real ceilings and their floor and ceiling
inequalities. The library has `def-the-ceiling-of-a-quotient-of-naturals`, which
is about quotients of naturals, and an example about the floor–ceiling adjunction
on a B page, which is a leaf and cannot be cited. This batch works around it by
taking least naturals above a real bound and citing `thm-of-archimedean` with
`thm-well-ordering-principle`; the workaround is recorded in §6.1 so step 5 does
not silently write a ceiling. *What breaks if left:* later pages in this block
that do explicit exponent arithmetic will hit the same wall with much more
arithmetic to route around.

**F7 — confirm the declines that resolve to `owner-decision`.** These are the
harvested results with a real statement and no page in the plan to hold them:
the strong-module tree and the correspondence lemma that supports it;
Habib–Paul's Theorem 4 hierarchy; Gowers's tower-type lower bound for the
regularity lemma; Fox–Sudakov's regularity-free proof of Rödl's theorem and its
much better constant; Nikiforov's partition form;
Chudnovsky–Scott–Seymour–Spirkl's Theorem 1.4 and the intermediate covering
statement; the Promel–Rödl theorem; Chudnovsky's Conjecture 2.3;
Conlon–Fox–Sudakov's Problem 3.13 and Conjecture 3.14; Fox–Sudakov's Theorem
1.3; and Zhao's Exercises 2.1.23 and 2.1.25. *What breaks if declined:* each
would need either a new page or an extension of this one; none is needed by any
page in the 393–442 block.

**F8 — confirm that page 401 stays free of the homogeneous number.** This
follows the step-0 drift ruling and is what keeps 401's `requires` a single edge
to order 399. It is recorded as a finding because it is the decision most likely
to look like an omission to a reader who knows the subject: a page about Rödl's
theorem that never mentions the Erdős–Hajnal conjecture. *What breaks if
reversed:* 401 would need `erdos-hajnal-property-and-homogeneous-sets` added to
its `requires`, which is a spec edit and Alpha's call, not this Beta's.

---

## 11. Forward references

**None.** `depsource.mjs` reports `planned-later 0` for all four pages, and no
item declares `forward_refs`. The two B pages cite only their own A page and
published content.

---

## 12. New ids, and how they were checked

84 new ids are proposed. Before minting, the whole published pool and the whole
plan spec were searched for each: `items/` was scanned for an existing file of
that id, `research/plan-spec.json` was scanned for the id on any planned page,
and every other `research/frontier-18-batch-*.pages.json` was scanned for a
cross-batch clash. All three came back empty for all 84. The searches that
mattered most, because they are where a duplicate would actually have been
likely, were: every `items/*.md` mentioning a graph-theoretic *module*, a *prime
graph* or a *substitution* (only integral and ring-theoretic substitutions came
back, plus `lem-dedekind-modular-law-for-subgroups`); every item mentioning
sparse or restricted induced subgraphs (none); and an id-prefix scan for
"sparse", "prime-graph", "substitut" and "modular", which returned only
integration and group-theory items. `validate-plan.mjs` independently confirms
no `dup-id` against `items/` or against the spec.

---

## 13. Cross-batch dependencies

**Needed from other batches of `frontier-18`: none.** Every external dependency
of these four pages is already published; `depsource.mjs` reports
`planned-earlier 0` for both A pages, meaning nothing rests on a page this run
is still building.

**Needed by other batches from this one: none.** No other batch of this run
scaffolds a page in the 393–442 band; the only consumers of these two pairs are
pages at orders 403 and above, which are not in this run.

**Owed to later runs.** `classical-and-loglog-erdos-hajnal-bounds` and
`polynomial-rodl-and-viral-equivalence` declare
`sparse-restricted-subgraphs-and-rodl-nikiforov` as a prerequisite, and
`bull-free-graphs-and-the-erdos-hajnal-property` and
`cographs-perfect-patterns-and-pure-pairs` declare
`modules-substitution-and-prime-graphs`. The items those pages will most want
are, from 397, `thm-substitution-preserves-the-erdos-hajnal-property`,
`cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs` and
`thm-gallai-modular-decomposition`; and from 401,
`cor-rodl-every-h-free-graph-has-a-linear-restricted-set`,
`cor-rodl-for-a-nonempty-family-of-forbidden-graphs` and
`def-c-sparse-and-c-restricted-vertex-set`.

---

## 14. Confidence

**High.** The dependency structure: every dependency was opened on disk, and
`validate-plan.mjs` and `depsource.mjs` both pass on a spliced copy of the spec.
The two main proofs: the substitution proof closes with explicit constants
(§6.1), and the Nikiforov proof closes against the exact published statements of
`thm-large-self-regular-subset`, `lem-typical-degrees-in-a-regular-pair` and
`thm-induced-counting-lemma-for-regular-pairs`, each of which was read clause by
clause. Gallai's theorem: the case analysis in
`lem-overlapping-proper-modules-of-a-connected-anticonnected-graph` was worked
through in full, including the two mixed cases that are contradictory on the
pair of differences.

**Medium.** The exact constants in the trimming lemmas on 401. The chain
"quarter of the parameter for the density threshold, an eighth for the
regularity parameter" was checked to give both trimming bounds below the target
for a parameter under one half, but the step-5 author should redo that
arithmetic rather than copy it, and the proof contract records it as a step to
discharge rather than as a fact.

**What was NOT verified.**

- No gate was run against the real `research/plan-spec.json`; the splice is step
  4's and the engine's. Everything reported here was run against
  `/tmp/spec-test.json`, a temporary copy with only these four item lists added.
  A claim that a gate would pass is not a gate passing.
- The faithfulness of the harvest is Alpha's check at step 6, not a gate's. The
  ranges recorded in the coverage file are the ranges actually read, and the
  headings were extracted from the fetched documents rather than recalled, but
  no tool confirms that.
- The Alon–Pach–Solymosi original (Combinatorica 21 (2001) 155–170) is paywalled
  and no open copy was found; the statement is taken from two independent
  secondary statements, Chudnovsky's Theorem 2.2 and the target paper's Theorem
  1.4, which agree. The *proof* on this page follows Chudnovsky's published
  sketch and is not claimed to reproduce the original.
- Nikiforov's own paper could not be fetched: its arXiv PDF answers 500 on every
  variant tried and the Wayback index holds no snapshot. His theorem is taken
  from the target paper's Theorem 1.2 and from Fox–Sudakov's restatement, which
  differ — Fox–Sudakov give the stronger partition form. The page proves the
  target paper's form and says so.
- No claim is made that the constants produced by the proofs here are anywhere
  near optimal; `rem-the-size-of-the-constant-in-rodls-theorem` says only what
  this route yields.


---

## 15. Finite smoke tests and the boundary worksheet

`tools/finite-smoke.mjs --self-test` lists ten registered checks. None of them
concerns modules, primality, substitution, sparsity or regularity, so no
registered check can be a bounded countermodel search for the main statements on
either page. The one registered check any item here actually uses is
`induced-complement-commutes`, which verifies over all graphs and vertex subsets
through four vertices that complementation commutes with taking an induced
subgraph. Six contracts select it, and each of the six turns on that identity:
`lem-module-criteria` and `lem-modules-are-complement-invariant` read the module
condition in the complement; `lem-a-module-meets-an-induced-subgraph-in-a-module`
restricts a module to an induced subgraph;
`lem-substitution-commutes-with-complementation` compares the two ways of
combining substitution with complementation; and
`lem-sparsity-depends-only-on-the-induced-subgraph` together with
`lem-restrictedness-is-complement-invariant` are the two halves of the statement
that restrictedness is a property of the induced subgraph and of its complement.
`finite_smoke.asserts` is left for step 5, which fills it with an exact excerpt
from the authored item, as the contract schema requires.

`tools/boundary-audit.mjs --min-cluster 2` reports no template cluster and no
contradicted disposition across all 73 contracts and 584 boundary rows. The
first draft of the contract file did contain templates — one shared block across
the example and counterexample items and several shared one-line rationales on
the implication axes — and every one was rewritten to say something specific
about the item it belongs to. That rewrite is where the sharpest boundary facts
on these pages were actually pinned down: that a set of at most two vertices is
restricted at parameter zero, that a self-density never reaches one, that the
dense trimming loses twice the regularity parameter and the sparse trimming only
once, and that the covering iteration needs the logarithmic bound on its step
count rather than the easier linear one.


---

## 16. Per-pair richness report

Both passes named in the brief — decomposition of long proofs into intermediate
lemmas, and a corollary pass after each main theorem or substantial lemma — were
performed on each of the two pairs. Neither pass came back empty.

### `modules-substitution-and-prime-graphs`

**Long proofs decomposed.** Two.

*Gallai's modular decomposition theorem* would otherwise be a single argument
containing four independently nameable subarguments. It is decomposed into
`lem-disjoint-modules-are-a-pure-pair` (what makes the quotient well defined),
`lem-intersection-of-two-modules-is-a-module`,
`lem-union-of-two-meeting-modules-is-a-module` and
`lem-differences-of-overlapping-modules-are-modules` (the closure properties),
`lem-overlapping-proper-modules-of-a-connected-anticonnected-graph` (the step
where both connectivity hypotheses are consumed, and the only place in the whole
development where they are used at all),
`lem-every-vertex-lies-in-a-unique-maximal-proper-module` (the partition), and
`lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is` (what makes the
quotient prime). The theorem itself is then five short steps. The
`lem-unions-of-components-and-of-anticomponents-are-modules` lemma carries the
two disconnected branches. Each of the seven has a separate consumer elsewhere
on the page or on the companion page, so none is a microlemma minted to shorten
one proof.

*The Alon–Pach–Solymosi theorem* is decomposed into four lemmas, each of which is
a distinct conceptual move:
`lem-a-large-set-contains-a-pattern-when-the-homogeneous-number-is-small`
converts the contradiction hypothesis into a statement about every large vertex
set; `lem-supersaturation-for-induced-copies` turns that into a count;
`lem-induced-copies-counted-by-extending-a-deleted-vertex` redistributes the
count over the embeddings of the host graph minus one vertex; and
`lem-a-pattern-inside-an-extension-set-produces-the-substitution` builds the
forbidden induced copy. `lem-homogeneous-number-is-monotone-under-induced-subgraphs`
was added because the first of those needs it and the library has no published
instance. The theorem's own proof is then the arithmetic and the small-order
case, both of which are stated explicitly in §6.1 because they are what the
published sketch omits.

**Corollaries added.** Three.
`cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs` is the reason the
substitution theorem is interesting and is the statement the later pages in this
block will cite. `cor-blowing-up-a-vertex-preserves-the-erdos-hajnal-property`
combines the theorem with the published theorem about complete-graph-free
classes and its complement-invariance, and costs three lines.
`cor-the-prime-quotient-has-at-least-four-vertices` records that the third branch
of the decomposition theorem is not degenerate, which is what makes the smallest
prime graph the four-vertex path rather than something smaller.

**Restatements deliberately not added.** No second proof of a published theorem
is proposed on this page. The only candidate was the published
`thm-p3-free-graphs-have-square-root-homogeneous-sets`, which the module theory
could reprove through the decomposition; the route is a rearrangement of the
component argument rather than a different method, so it is not a licensed
second proof and it is not scaffolded.

**Ceiling.** The A page has 34 items against a ceiling of 60. No split is
proposed and no result was dropped for size.

### `sparse-restricted-subgraphs-and-rodl-nikiforov`

**Long proofs decomposed.** One, and it is the page's main theorem.

*Nikiforov's theorem* is decomposed into five lemmas.
`lem-regularity-is-monotone-in-the-parameter` is what lets one regularity
parameter serve both the extraction and the counting lemma.
`lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies` is
the density dichotomy, and it is the step that replaces the reduced-graph
selection the design asked for.
`lem-trimming-a-self-regular-set-of-low-density` and
`lem-trimming-a-self-regular-set-of-high-density` are the two sides of the
degree-trimming, kept apart because their losses differ — one parameter on the
sparse side, two on the dense side — and that difference is what fixes the
parameter chain. `lem-sparsity-is-monotone-in-the-parameter` carries the
small-order case. The theorem's own proof is then the parameter chain, the
extraction and the two branches.

**Corollaries added.** Six.
`cor-rodl-every-h-free-graph-has-a-linear-restricted-set` is Rödl's theorem, one
line from the main theorem; `cor-rodl-for-a-nonempty-family-of-forbidden-graphs`
is the quantifier form later pages cite; `cor-rodl-in-the-edge-density-form` is
the form three of the four sources state;
`cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable`
closes the loop between them; `cor-nikiforov-applies-to-every-linearly-large-induced-subgraph`
is the form an iteration needs; and
`cor-a-restricted-set-contains-a-large-stable-set-or-clique` is the sparse-set
exit the design's §16.1 amendment to the colouring page was written for.
`cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction` is the
iteration itself.

**Machinery built rather than dropped.** Two results that the sources state and
that this page could not reach by citation were built instead:
`lem-a-weakly-sparse-set-has-a-large-sparse-subset`, without which the page's
theorem and its sources would be different theorems; and
`thm-a-bounded-partition-into-weakly-restricted-sets`, whose one-sentence proof
sketch in the source needed the bound on the number of parts and the absorption
arithmetic supplied here.

**Ceiling.** The A page has 26 items against a ceiling of 60. No split is
proposed. Nothing was dropped for size; what was declined was declined for a
reason recorded in the coverage file, and the one genuinely hard decline is
discussed in §9.

---

## Step-3 fix pass

Report worked from: `research/frontier-18-alpha-b-step3-scaffold-review.md`
(group Alpha `b`, batches 5 and 10). Findings addressed by id, none renumbered.
Findings B5-1 to B5-9 belong to batch 5 and are not touched here.

### B10-1 — the modules pair had no treatment in the required form · **applied**

**What was added.** `research/frontier-18-batch-10.coverage.json` now carries, on
`modules-substitution-and-prime-graphs`, a fourth source:

| field | value |
|---|---|
| url | `https://users.utu.fi/harju/Structures/Structure2018.pdf` |
| kind | `lecture-notes` |
| title | T. Harju, *Lecture Notes on Combinatorial Structures in Graph Theory* (University of Turku, 2019) |
| locator | §§1–5 in full — 1 Preliminaries, 2 Clans, 3 Quotients and Homomorphisms, 4 Clan Decomposition, 5 Primitive Graphs; notes pp. 1–31 = PDF pp. 4–34 |
| fetch stamp | `pdf`, 501289 bytes, 61 pages, `sha256_16: 8afed3c23b96a4d3` |

It is a full lecture-note set with its own table of contents, it is independent
of Habib–Paul in both authorship and tradition — Harju is a co-author of
Ehrenfeucht–Harju–Rozenberg, *The Theory of 2-Structures*, the monograph Alpha
named as one candidate, and these notes are that book's §§ on clans and clan
decomposition in lecture form — and §§1–5 are exactly the pair's subject:
modules, prime graphs, quotients and the decomposition theorem.

**What was tried first, and why it was not used.** Alpha's four candidates were
searched for before scouting further, and none of the three books has open full
text: Golumbic, *Algorithmic Graph Theory and Perfect Graphs*, surfaced only as
publisher, bookseller, ResearchGate and Internet Archive **lending** pages;
Ehrenfeucht–Harju–Rozenberg, *The Theory of 2-Structures*, only as vendor and
catalogue pages; Brandstädt–Le–Spinrad, *Graph Classes: A Survey*, only behind
the SIAM paywall. A URL that answers with a catalogue page is not a source under
the fetch rule and would not stamp. Bang-Jensen and Gutin, *Digraphs: Theory,
Algorithms and Applications*, whose full PDF **is** free at `cs.rhul.ac.uk`, was
downloaded (772 pages) and searched: of its 15 pages matching `modul`, twelve are
about **sub**modular and **super**modular set functions in the flow chapter, two
are bibliography entries and one is an index line. It has no treatment of modules
of a graph at all, so it was rejected on content rather than on access. Harju's
notes were then scouted from the author's own lecture-notes index and fetched in
full.

**The harvest.** 86 headings — every section and subsection heading of §§1–5,
every numbered Definition, Lemma, Theorem and Corollary in them, the substantive
Exercises and Remarks that carry statements, the worked Examples, and the
per-section "Notes on references". Dispositions: 29 `included`, 10 `inline`,
1 `already-published`, 29 `deferred`, 17 `out-of-scope`. Every `deferred` row
resolves: `cographs-perfect-patterns-and-pure-pairs` (413) for the cograph and
uniform-non-primitivity block, `small-graph-erdos-hajnal-consequences` (421) for
the vertex-extension and vertex-deletion theorems — the destination this coverage
file already uses for Habib–Paul's Lemma 6, which is the same theorem — and
`owner-decision` for the strong-module (prime clan) theory and the critically
primitive material, consistent with the F7 declines Alpha confirmed.

**Terminology dictionary (convention note C7).** Harju writes *clan* for module
and says so explicitly ("a clan (or a module)"); *primitive* for prime; *truly
primitive* for prime on at least three vertices; *factorization* for modular
partition; *factor* for the induced subgraph on a module; *special* for a graph
whose maximal prime clans are singletons. His §2 notes-on-references list is the
fullest synonym list found for this pair — closed set (Gallai), autonomous set,
partitive set, externally related set, condensible set, homogeneous set,
interval, module — and `rem-modules-and-the-word-homogeneous` should carry it.
His ambient object is a ∆-graph, an arbitrary colouring of ordered pairs with an
involution on colours; an undirected graph is the {0,1}-graph with both colours
symmetric (his Example 1.2(i)), and that is the specialisation under which every
clan statement above reads as a statement about modules.

**Convention disagreement C8, and the mathematics it turned up.** Harju's
uniqueness results are stated for *truly* primitive quotients, i.e. on at least
three vertices, and the restriction is not decoration. Under this page's
`def-prime-graph` a two-vertex graph is prime, and the edgeless graph on three
vertices then has **two different** modular partitions with prime quotients,
`{{a},{b,c}}` and `{{a,b},{c}}`. So the undirected form of his Theorem 3.10 is
true only under a hypothesis, and the hypothesis this page already has is that
the graph is connected and anticonnected. That is recorded in the new corollary
and refuted-without-it by the new counterexample below.

**Three items added, none of them padding.** Each is a heading of the new source
that the decline rule forbids declining: the proof is short, its dependencies are
already on the page, and nothing but a missing lemma stood in the way.

| id | kind | source heading | why it is built here |
|---|---|---|---|
| `lem-the-quotient-is-an-induced-subgraph-on-a-transversal` | lemma | Theorem 3.1 | The quotient is not merely an abstract contraction: choosing one vertex per part exhibits it as an induced subgraph of the graph itself. The page states the reconstruction theorem and the prime-quotient corollary without this, and a reader who wants to know what the quotient *is* has nowhere to look. |
| `cor-the-modular-partition-with-a-prime-quotient-is-unique` | corollary | Theorems 3.10 and 4.5 | Gallai's theorem as the page states it produces a modular partition with a prime quotient; canonicity — that there is no other one — is what makes the modular decomposition a decomposition, and it follows from three lemmas already on the page. |
| `cex-maximal-proper-modules-need-not-be-disjoint-in-a-disconnected-graph` | counterexample | Remark 4.1 | Harju's remark asserts that the maximal clans need not form a factorization but gives no witness. Three isolated vertices give one, and it is simultaneously the witness that both connectivity hypotheses in the corollary above and in `lem-every-vertex-lies-in-a-unique-maximal-proper-module` are load-bearing. |

Their placement respects plan order: the transversal lemma sits after
`thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph`, the
corollary after `cor-the-prime-quotient-has-at-least-four-vertices`, and the
counterexample after `cex-a-difference-of-nested-modules-need-not-be-a-module` on
the B page. **No existing item's `deps`, title or strategy was changed**, so the
splice is purely additive and nothing Alpha verified at step 3 was disturbed.
Page sizes are now 36 (A) and 14 (B) against the ceiling of 60; no split.

**Component provenance for the three new items.**

- `lem-the-quotient-is-an-induced-subgraph-on-a-transversal` —
  statement `ai-altered`, proof `ai-altered`. Harju's Theorem 3.1 is stated for
  ∆-graphs over an arbitrary colour set; the statement here is its undirected
  specialisation, which is a material reformulation of the ambient object, and
  the proof is his transversal argument read in that case.
  `sources.references`: `https://users.utu.fi/harju/Structures/Structure2018.pdf`.
- `cor-the-modular-partition-with-a-prime-quotient-is-unique` —
  statement `ai-altered`, proof `ai-generated`. The statement is the undirected
  form of Theorems 3.10 and 4.5 with the hypothesis C8 forces; the proof is
  **not** Harju's, which runs through the universal property of a primitive
  quotient in his epimorphism calculus, but a direct argument on maximal proper
  modules. An AI-generated proof does not make the statement AI-generated, and
  the statement remains source-backed.
  `sources.references`: the same URL.
- `cex-maximal-proper-modules-need-not-be-disjoint-in-a-disconnected-graph` —
  statement `ai-altered`, proof `ai-generated`. The fact is Harju's Remark 4.1;
  the witness is local. **Truth-risk check performed**: in an edgeless graph every
  vertex outside a set is anticomplete to it, so every subset is a module — the
  three two-element subsets are therefore proper modules, each maximal because
  the only module properly containing it is the whole vertex set, and any two of
  them meet. Complementing gives the triangle, by
  `lem-modules-are-complement-invariant`. No counterexample search is owed beyond
  this enumeration, since the witness has three vertices and was checked
  exhaustively. `sources.references`: the same URL.

**Proof contracts.** `research/frontier-18-batch-10.proof-contracts.json` gains
one version-1 contract per new item — derivations with an input map for every
planned step, all eight boundary dispositions, and `finite_smoke: []`, since the
registry holds no bounded check whose claim concerns modules or quotients and
`induced-complement-commutes` is not used by any of the three arguments. `scope`
grew from 73 to 76 ids.

**Yield.** The page's harvest is now 46 `included` of 153 headings, against 17 of
67 before this pass; the `coverage-low-yield` warning still fires and its cause is
unchanged and already adjudicated in Alpha's report — §16 of the design splits one
research programme across twenty-five A/B pairs, so both surveys and now the
notes' §5 survey material belong to sibling pages, each of which the coverage file
names. The ∆-graph generality accounts for most of the new `out-of-scope` rows:
the colour set, the involution, the epimorphism calculus and the linear
(total-order) alternative have no undirected instance, and each row says which.

**Gates re-run after the change** (all from the repo root, this dispatch):

| gate | result |
|---|---|
| `source-fetch-check.mjs --coverage … --stamp` | 9/9 fetch-verified, 1 newly stamped |
| `url-sweep.mjs --coverage … --recover --fail-on-dead` | 8/8 live, 0 failed, 0 recoverable, 0 suspect |
| `coverage-checklist.mjs --require-destination` | 2 pages, 245 harvested, **0 errors**, 2 `coverage-low-yield` warnings |
| `content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json` | 796 scoped items, **0 errors, 0 warnings** |
| `validate-plan.mjs research/plan-spec.json` | exit 0, `redundant-prereq` advisories only; the new ids are not spliced yet, which is step 4's job |
| `proof-contract.mjs research/frontier-18-batch-10.proof-contracts.json` | 76 `item-missing` errors, 0/76 checked — the documented pre-authoring state: the gate reads `items/` from disk and nothing is authored. Unchanged in kind by this pass; it was 73/73 before. |

### B10-2 — `cor-the-density-form-and-the-degree-form-…-are-interchangeable` · **already correct**

Alpha repaired this in the manifest and the repair is on disk:
`lem-restrictedness-is-complement-invariant` is present in the item's `deps`, and
the strategy carries the complement passage as its own numbered step, including
the identity `d_{\overline G}(X,X)=1-1/|X|-d_G(X,X)` and the instruction not to
write that the trimming lemma "gives the dense version too". Nothing to add.

### B10-3 — `thm-a-bounded-partition-into-weakly-restricted-sets` · **already correct**

On disk the strategy now names both thresholds as numbered steps — the
`|X_i|\ge2/\epsilon` needed to pay the `1/|X_i|` slack of
`lem-a-sparse-set-has-small-self-density`, and the `n\ge n_0(H,\epsilon)` it
forces — and states the small case explicitly, with the singleton partition and
the bound `\max\{t+1,n_0\}` on the number of parts. The theorem is therefore
stated and proved for the same class of graphs.

### B10-4 — `cor-a-restricted-set-contains-a-large-stable-set-or-clique` · **already correct**

On disk the strategy requires, as a numbered step, that
`def-clique-and-independence-numbers` (order 215) and
`def-clique-stable-set-and-numbers` (order 393) be checked to define the same
invariants, verified from the two Definitions rather than assumed from the shared
symbols, and both ids are in `deps`. This is the same dictionary discipline
`rem-modules-and-the-word-homogeneous` applies on the other page of this batch.

### B10-5, B10-6, B10-7 — **outside a Beta's write boundary**

All three are changes to published content — the missing §16.1 edge-list
definitions of the bull, the E-graph and the Bird on `graphs-walks-and-connectivity`;
the duplicate published definition of the clique and stable-set numbers; and the
absent real-ceiling amendment — and item ids are immutable on `main`, so none is
repairable inside a batch. They are recorded for the lead Alpha and the owner
exactly as Alpha routed them. The B10-7 workaround Alpha approved is already
carried in §6.1 of these notes: least naturals above a real bound are taken via
`thm-of-archimedean` and `thm-well-ordering-principle`, and no item on either page
of this batch writes a ceiling of a real number.

### B10-8 — Beta findings F1, F2, F3, F7, F8 · **approved, no action**

Alpha approved F1 (Rödl and Nikiforov through the published self-regular subset),
F2 (Gallai's theorem added to the 397/398 scope, amendment A2.1), F3 (both
normalisations of restricted, amendment A2.2) and F8 (page 401 stays free of the
homogeneous number), and confirmed the F7 `owner-decision` declines. Amendments
A2.1–A2.3 in §2 of these notes stand unchanged and are the lead Alpha's to apply
to the prose scaffold at step 4. The strong-module tree remains the first thing to
add if page 397 is revisited, as Alpha recorded; the new Harju harvest defers the
same theory to the same place, so that record is now backed by two sources rather
than one.

## Continuity checkpoint

- **Substage.** Step 5 authoring complete. All 87 owned item files, 4 page files, and the batch proof-contract file are now aligned on disk.
- **Owned artifact paths.** `items/<batch-10 ids>.md`, `library/combinatorics/modules-substitution-and-prime-graphs{,-examples}.md`, `library/combinatorics/sparse-restricted-subgraphs-and-rodl-nikiforov{,-examples}.md`, `research/frontier-18-batch-10.proof-contracts.json`, and this notes file.
- **Completed gates.** `reflow` on all owned items (all unchanged); `precheck` on all 76 proof-bearing owned items (all pass); `proof-contract --strict` on `research/frontier-18-batch-10.proof-contracts.json` (0 errors, 0 warnings); `content-policy` on `research/frontier-18-batch-10.pages.json` (0 errors, 0 warnings); `validate-plan` on `research/plan-spec.json` (exit 0, redundant-prereq advisories only); `coverage-checklist` on `research/frontier-18-batch-10.coverage.json` (0 errors, two previously adjudicated low-yield warnings); `prosecheck` on the 4 page files (0 errors, 0 warnings); `fwdcheck` and `extcheck` (pass).
- **Open constraints.** The batch-local text is clean; the remaining failing repo-wide gate is `depcheck`, on an existing page-cycle and legacy whole-repo issues outside batch-10 write scope. `citecheck` emits repo-wide heuristic warnings, but a targeted grep over its output found none matching the batch-10 page ids or item ids.
- **Exact next action.** Step-6 audit should read the authored pair texts on disk, using this report plus §5 of these notes as the provenance ledger.

## Step-5 authoring

All scaffolded items were authored. No planned item was dropped, merged, renamed, or rescopied, and no title or dependency list was changed from the scaffold. The final frontmatter provenance for every mathematical-content item matches the per-item table already recorded in §5 of these notes; source-backed items cite the same URLs listed there, and every generated statement carries the matching `generation.role` and remains non-load-bearing. The one source-backed addition made after Alpha's step-3 review, `cex-maximal-proper-modules-need-not-be-disjoint-in-a-disconnected-graph`, follows the Harju-backed amendment recorded under B10-1 and B10-8.

### Per-item status


#### Modules, Substitution and Prime Graphs

| id | precheck | statement | proof |
|---|---|---|---|
| `def-module-of-a-graph` | n/a | literature-derived | not-applicable |
| `lem-module-criteria` | pass | ai-altered | ai-generated |
| `lem-modules-are-complement-invariant` | pass | ai-altered | ai-generated |
| `lem-unions-of-components-and-of-anticomponents-are-modules` | pass | literature-derived | ai-generated |
| `lem-disjoint-modules-are-a-pure-pair` | pass | literature-derived | ai-generated |
| `lem-intersection-of-two-modules-is-a-module` | pass | literature-derived | ai-generated |
| `lem-union-of-two-meeting-modules-is-a-module` | pass | ai-altered | ai-generated |
| `lem-differences-of-overlapping-modules-are-modules` | pass | literature-derived | ai-generated |
| `lem-a-module-meets-an-induced-subgraph-in-a-module` | pass | ai-altered | ai-generated |
| `lem-a-module-of-a-module-is-a-module` | pass | ai-altered | ai-generated |
| `lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour` | pass | ai-altered | ai-generated |
| `def-prime-graph` | n/a | literature-derived | not-applicable |
| `lem-graphs-on-three-vertices-are-not-prime` | pass | ai-altered | ai-generated |
| `def-substitution-of-a-graph-for-a-vertex` | n/a | literature-derived | not-applicable |
| `lem-the-substituted-set-is-a-module` | pass | ai-altered | ai-generated |
| `lem-substitution-commutes-with-complementation` | pass | ai-altered | ai-generated |
| `thm-prime-graphs-are-the-graphs-that-are-not-substitutions` | pass | literature-derived | ai-generated |
| `def-modular-partition-and-quotient-graph` | n/a | literature-derived | not-applicable |
| `lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is` | pass | literature-derived | ai-generated |
| `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph` | pass | ai-altered | ai-generated |
| `lem-the-quotient-is-an-induced-subgraph-on-a-transversal` | pass | ai-altered | ai-altered |
| `lem-overlapping-proper-modules-of-a-connected-anticonnected-graph` | pass | ai-altered | ai-generated |
| `lem-every-vertex-lies-in-a-unique-maximal-proper-module` | pass | ai-altered | ai-generated |
| `thm-gallai-modular-decomposition` | pass | literature-derived | ai-generated |
| `cor-the-prime-quotient-has-at-least-four-vertices` | pass | ai-altered | ai-generated |
| `cor-the-modular-partition-with-a-prime-quotient-is-unique` | pass | ai-altered | ai-generated |
| `lem-homogeneous-number-is-monotone-under-induced-subgraphs` | pass | ai-altered | ai-generated |
| `lem-a-large-set-contains-a-pattern-when-the-homogeneous-number-is-small` | pass | ai-altered | ai-generated |
| `lem-supersaturation-for-induced-copies` | pass | ai-altered | ai-generated |
| `lem-induced-copies-counted-by-extending-a-deleted-vertex` | pass | ai-altered | ai-generated |
| `lem-a-pattern-inside-an-extension-set-produces-the-substitution` | pass | ai-altered | ai-generated |
| `thm-substitution-preserves-the-erdos-hajnal-property` | pass | literature-derived | ai-altered |
| `cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs` | pass | literature-derived | ai-generated |
| `cor-blowing-up-a-vertex-preserves-the-erdos-hajnal-property` | pass | ai-generated | ai-generated |
| `rem-modules-and-the-word-homogeneous` | n/a | ai-altered | not-applicable |
| `rem-conventions-for-prime-graphs` | n/a | ai-altered | not-applicable |


#### Modules, Substitution and Prime Graphs — Examples

| id | precheck | statement | proof |
|---|---|---|---|
| `ex-modules-of-complete-and-edgeless-graphs` | pass | literature-derived | ai-generated |
| `ex-modules-of-the-four-vertex-path` | pass | literature-derived | ai-generated |
| `ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices` | pass | literature-derived | ai-generated |
| `ex-paths-on-at-least-four-vertices-are-prime` | pass | ai-altered | ai-generated |
| `ex-the-five-cycle-is-prime` | pass | literature-derived | ai-generated |
| `ex-substitution-into-an-edge-and-into-a-nonedge` | pass | ai-generated | ai-generated |
| `ex-the-modular-decomposition-of-a-blown-up-five-cycle` | pass | ai-generated | ai-generated |
| `ex-counting-induced-three-vertex-paths-by-extensions` | pass | ai-generated | ai-generated |
| `ex-a-four-vertex-graph-with-the-erdos-hajnal-property-by-substitution` | pass | ai-generated | ai-generated |
| `cex-a-union-of-two-disjoint-modules-need-not-be-a-module` | pass | ai-generated | ai-generated |
| `cex-a-difference-of-nested-modules-need-not-be-a-module` | pass | ai-generated | ai-generated |
| `cex-maximal-proper-modules-need-not-be-disjoint-in-a-disconnected-graph` | pass | ai-altered | ai-generated |
| `cex-primality-is-not-inherited-by-induced-subgraphs` | pass | ai-generated | ai-generated |
| `fs-every-graph-with-at-least-four-vertices-has-a-nontrivial-module` | pass | literature-derived | ai-generated |


#### Sparse Restricted Subgraphs and the Rödl–Nikiforov Theorems

| id | precheck | statement | proof |
|---|---|---|---|
| `def-c-sparse-and-c-restricted-vertex-set` | n/a | literature-derived | not-applicable |
| `def-directional-and-weak-sparsity-between-vertex-sets` | n/a | literature-derived | not-applicable |
| `lem-weak-sparsity-is-a-bound-on-the-edge-density` | pass | ai-altered | ai-generated |
| `lem-sparsity-depends-only-on-the-induced-subgraph` | pass | ai-altered | ai-generated |
| `lem-a-sparse-set-has-small-self-density` | pass | ai-altered | ai-generated |
| `lem-a-weakly-sparse-set-has-a-large-sparse-subset` | pass | ai-altered | ai-generated |
| `lem-restrictedness-is-complement-invariant` | pass | ai-altered | ai-generated |
| `lem-sparsity-transfers-to-a-large-subset` | pass | ai-altered | ai-generated |
| `lem-sparsity-is-monotone-in-the-parameter` | pass | ai-altered | ai-generated |
| `cor-a-restricted-set-contains-a-large-stable-set-or-clique` | pass | ai-generated | ai-generated |
| `lem-regularity-is-monotone-in-the-parameter` | pass | ai-altered | ai-generated |
| `lem-trimming-a-self-regular-set-of-low-density` | pass | ai-altered | ai-generated |
| `lem-trimming-a-self-regular-set-of-high-density` | pass | ai-altered | ai-generated |
| `lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies` | pass | ai-altered | ai-generated |
| `lem-few-induced-copies-is-inherited-by-large-induced-subgraphs` | pass | ai-altered | ai-generated |
| `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set` | pass | literature-derived | ai-altered |
| `cor-rodl-every-h-free-graph-has-a-linear-restricted-set` | pass | literature-derived | ai-generated |
| `cor-rodl-for-a-nonempty-family-of-forbidden-graphs` | pass | ai-altered | ai-generated |
| `cor-rodl-in-the-edge-density-form` | pass | literature-derived | ai-generated |
| `cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable` | pass | literature-derived | ai-generated |
| `cor-nikiforov-applies-to-every-linearly-large-induced-subgraph` | pass | ai-generated | ai-generated |
| `cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction` | pass | ai-altered | ai-generated |
| `thm-a-bounded-partition-into-weakly-restricted-sets` | pass | literature-derived | ai-altered |
| `rem-the-two-forms-of-rodls-theorem` | n/a | ai-altered | not-applicable |
| `rem-the-diagonal-convention-in-self-density` | n/a | ai-altered | not-applicable |
| `rem-the-size-of-the-constant-in-rodls-theorem` | n/a | ai-altered | not-applicable |


#### Sparse Restricted Subgraphs and the Rödl–Nikiforov Theorems — Examples

| id | precheck | statement | proof |
|---|---|---|---|
| `ex-zero-sparse-sets-are-the-stable-sets` | pass | ai-altered | ai-generated |
| `ex-the-self-density-of-a-clique` | pass | ai-generated | ai-generated |
| `ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set` | pass | ai-altered | ai-generated |
| `ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs` | pass | ai-generated | ai-generated |
| `ex-restricted-sets-in-a-union-of-two-cliques` | pass | ai-generated | ai-generated |
| `ex-restricted-sets-in-a-complete-bipartite-graph` | pass | ai-generated | ai-generated |
| `cex-weak-sparsity-does-not-imply-sparsity` | pass | literature-derived | ai-generated |
| `cex-sparsity-does-not-pass-to-subsets` | pass | ai-generated | ai-generated |
| `cex-directional-sparsity-is-not-symmetric` | pass | ai-generated | ai-generated |
| `cex-a-complete-graph-has-no-large-sparse-set` | pass | ai-generated | ai-generated |
| `fs-a-sparse-set-contains-a-stable-set-of-half-its-size` | pass | ai-altered | ai-generated |

### Ledger

- No title changed from the scaffold.
- No dependency list changed from the scaffold.
- No planned claim was narrowed or dropped during authoring.
- `rem-the-two-forms-of-rodls-theorem` was adjusted during gate repair to remove a forward wikilink to its own B page; the mathematical content is unchanged and the edit was only to satisfy the leaf rule and `fwdcheck`.

### Gates run

- `node tools/tsx-run.mjs tools/reflow.mts $(cat /tmp/frontier18-b10-items.txt)` — all 87 owned items unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts $(cat /tmp/frontier18-b10-items.txt)` — 76 checked, 0 failing.
- `node tools/proof-contract.mjs research/frontier-18-batch-10.proof-contracts.json --strict` — 0 errors, 0 warnings, 76/76 items checked.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0, redundant-prereq advisories only.
- `node tools/content-policy.mjs research/frontier-18-batch-10.pages.json` — 87 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-18-batch-10.coverage.json` — 0 errors, 2 `coverage-low-yield` warnings on the two A pages, both already confirmed by Alpha's step-3 review and re-check.
- `node tools/prosecheck.mjs $(cat /tmp/frontier18-b10-pages.txt) --warnings` — 4 files checked, 0 errors, 0 warnings.
- `node tools/fwdcheck.mjs` — pass after removing the B-page forward link from `rem-the-two-forms-of-rodls-theorem`.
- `node tools/extcheck.mjs` — pass.
- `node tools/citecheck.mjs` — repo-wide heuristic warnings remain, but targeted grep found none on the batch-10 ids.
- `node tools/depcheck.mjs` — still fails repo-wide on an existing page-cycle `lattice-paths-and-catalan-numbers-examples -> lattice-paths-and-catalan-numbers -> lattice-paths-and-catalan-numbers-examples` and other legacy issues outside this batch's write scope.

### Escalations

- **Published-content debts unchanged:** B10-5 (missing bull/E/Bird definitions on `graphs-walks-and-connectivity`), B10-6 (duplicate published `alpha/omega` definitions), and B10-7 (no published real-ceiling item) remain owner/lead-Alpha matters outside this batch's boundary.
- **Repo-wide gate blocker outside scope:** `depcheck` is not batch-clean because of the pre-existing page-cycle above and legacy whole-repo issues. None of the batch-10 ids appears in the targeted grep of the failing output.

### Confidence

- **High on local mechanical state.** Every owned proof-bearing item passes precheck, and the strict proof-contract gate passes on the current disk text.
- **Moderate on the long quantitative proofs.** The Nikiforov and weakly-restricted partition arguments were written directly from the batch's proof-obligation map and then normalized to precheck's canonical stratification, but I did not subject them to a judge or an independent reader; that is Step 6 onward.
- **Not verified here:** I did not clear the repo-wide `depcheck` failure, and I did not resolve repo-wide `citecheck` heuristics outside the batch ids.
