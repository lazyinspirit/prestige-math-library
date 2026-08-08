## Target item — `rem-what-the-diagonal-criterion-gives-and-what-it-costs`

Normalized current SHA-256: `bfebc1a4aacd425eabdcf839d4928ec7829bcc4751fbd42a39dace093cb32384`

The complete current item follows, including frontmatter:

````markdown
---
id: rem-what-the-diagonal-criterion-gives-and-what-it-costs
kind: remark
title: "Why the criterion is about the product topology, and the choice cost of the compact separation lemmas"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-hausdorff-iff-the-diagonal-is-closed, def-the-diagonal-of-a-space,
       def-product-topology, thm-product-universal-property,
       thm-compact-subset-of-a-hausdorff-space-is-closed, lem-finite-choice,
       def-choice-function, def-axiom-of-choice, def-compact-space,
       def-hausdorff-space, rem-separation-axiom-conventions]
justified_by: []
aliases: []
landmark: false
short: "what the diagonal criterion needs, and what the separation arguments cost"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
pipeline_run: null
---

**The criterion is a statement about the product topology, and the proof uses
one specific fact about it.** [[thm-hausdorff-iff-the-diagonal-is-closed]] tests
the closedness of $\Delta_X$ against basic open sets of $X \times X$, and the
basic open sets it uses are the boxes $U \times V$ with $U$ and $V$ open in $X$.
That those boxes really are a basis is a feature of a *binary* product: by
[[def-product-topology]] a basic product-open set is a box all but finitely many
of whose factors are unrestricted, and a box with two factors satisfies that
condition for the trivial reason that it has only two. So for $X \times X$ the
box basis and the product basis are one family, and the criterion carries no
ambiguity about which of the two topologies is meant. No product with an infinite
index set is formed anywhere on this page, and nothing here is asserted about one.

**What the criterion buys, in one sentence.** The Hausdorff condition is a
quantifier over pairs of points and pairs of open sets; the criterion converts it
into the closedness of a single subset of a single space. Every consequence on
this page is then obtained the same way: package two maps into one map into a
square with [[def-the-diagonal-of-a-space]], and pull $\Delta$ back along it,
using the characteristic property of the product
([[thm-product-universal-property]]) to know the packaged map is continuous.
That is why an agreement set, and a graph, and the equality of two maps on a
dense set are corollaries of the criterion rather than independent
arguments.

**The separation of compact sets, and what the naive proof of it would cost.**
The separation clauses used on this page are those of
[[thm-compact-subset-of-a-hausdorff-space-is-closed]]: in a Hausdorff space a
point and a disjoint compact set have disjoint open neighbourhoods, and so do two
disjoint compact sets. The argument everyone writes first is

> for each $y \in K$ choose disjoint open $U_y \ni x$ and $V_y \ni y$,

and it selects one pair of open sets for each point of an arbitrary set $K$. That
is an application of the Axiom of Choice ([[def-axiom-of-choice]],
[[def-choice-function]]), and it is avoidable. Take instead the family
$\mathcal{V}$ of **all** open $V$ for which there exists an open $U$ with
$x \in U$ and $U \cap V = \varnothing$. This family is specified by a formula, so
nothing is selected in forming it; it covers $K$, because $X$ is Hausdorff
([[def-hausdorff-space]]) and $x \notin K$; compactness ([[def-compact-space]])
cuts it down to finitely many members $V_0, \dots, V_{n-1}$; and only now is a
$U_i$ chosen for each $i < n$ — finitely many choices, licensed by
[[lem-finite-choice]], which is a theorem of ZF. Then
$$U := \{\, t \in X : t \in U_i \text{ for every } i < n \,\}, \qquad V := \bigcup_{i<n} V_i$$
are the required neighbourhoods: $U$ is open, being $X$ when $n = 0$ and a finite
intersection of open sets otherwise, it contains $x$, and it misses each $V_i$
because it is contained in each $U_i$. The same manoeuvre — collect a
formula-defined family, cut it down by compactness, choose only afterwards — is
what the closed-graph criterion on this page does. Where a step of this page
spends a choice principle the step names it, and it is never more than
[[lem-finite-choice]].

**Why the sequential form is weaker, and how much weaker.** Uniqueness of
sequential limits follows from the Hausdorff condition and does not imply it,
which is why the criterion above is stated for the diagonal and not for
sequences: a sequence sees at most countably many points, whereas closedness of
$\Delta_X$ is a condition at every point of the square at once.

**Conventions.** The separation vocabulary used here — *regular* and *normal* as
conditions on sets alone, $T_3$ and $T_4$ as their conjunctions with $T_1$ — is
the one fixed in [[rem-separation-axiom-conventions]], and every statement on
this page writes the $T_1$ hypothesis out where it is used rather than building
it into an adjective.
````

## Proof contract for the target

No proof contract is required for this non-proof-bearing item.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "declared_target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-the-diagonal-of-a-space",
    "declared_target": "def-the-diagonal-of-a-space",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-product-topology",
    "declared_target": "def-product-topology",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-product-universal-property",
    "declared_target": "thm-product-universal-property",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-compact-subset-of-a-hausdorff-space-is-closed",
    "declared_target": "thm-compact-subset-of-a-hausdorff-space-is-closed",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "lem-finite-choice",
    "declared_target": "lem-finite-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-choice-function",
    "declared_target": "def-choice-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-compact-space",
    "declared_target": "def-compact-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-what-the-diagonal-criterion-gives-and-what-it-costs",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "rem-separation-axiom-conventions",
    "declared_target": "rem-separation-axiom-conventions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (11)

### `def-axiom-of-choice`

````markdown
---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, fs-zorn-provable-in-zf,
               lem-finite-choice, rem-choice-ledger]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] carries the same consistency assumption explicitly
  in its Given; [[rem-choice-ledger]] records the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. A result that invokes AC should say so
  where it is stated, so that a reader can tell which theorems are choice-free;
  that bookkeeping is the purpose of [[rem-choice-ledger]].
  [[rem-choice-strengths]] carries the narrower question of what the ultrafilter
  lemma costs, and on cited authority, and under the hypothesis that ZF is
  consistent, places that principle strictly between ZF and AC.
````

### `def-choice-function`

````markdown
---
id: def-choice-function
kind: definition
title: "Choice function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-indexed-union-and-intersection, def-power-set,
       def-set-difference-and-symmetric-difference]
justified_by: []
forward_refs: [ex-canonical-choice-on-naturals, ex-russells-socks,
               lem-finite-choice]
aliases: []
landmark: false
short: "choice function"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

Let $\mathcal{F}$ be a family of sets, every member of which is nonempty. A
**choice function** for $\mathcal{F}$ is a function ([[def-function]])
$$g : \mathcal{F} \to \bigcup \mathcal{F} \qquad \text{such that} \qquad g(S) \in S \ \text{ for every } S \in \mathcal{F}.$$

Given a set $X$, a **choice function on $X$** means a choice function for the
family $\mathcal{P}(X) \setminus \{\emptyset\}$ ([[def-power-set]],
[[def-set-difference-and-symmetric-difference]]) of nonempty subsets of $X$.

## Remarks

- The requirement is only that $g$ pick *some* element of each member. Nothing
  requires the choices to be coherent, definable, or computable, and this is
  exactly where the difficulty lies: for a single nonempty set $S$ the existence
  of an element to pick is immediate, and for a family presented as the values
  of a function on a natural number the picks can be made one after another
  ([[lem-finite-choice]]). What is not available in ZF is
  a *simultaneous* choice across an arbitrary family.
- A choice function often exists for a concrete family with no appeal to any
  axiom, because the family carries extra structure that names a canonical
  element. Every nonempty set of natural numbers has a least element, so
  $S \mapsto \min S$ is an explicit choice function on $\mathbb{N}$
  ([[ex-canonical-choice-on-naturals]]). The contrast with families that admit no
  such rule is the content of [[ex-russells-socks]].
- Members of $\mathcal{F}$ must be nonempty: no function can select an element of
  $\emptyset$. The family $\mathcal{F}$ itself is allowed to be empty, and the
  empty function is then a choice function for it.
````

### `def-compact-space`

````markdown
---
id: def-compact-space
kind: definition
title: "Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-subspace-topology-top, def-standard-topologies, def-countable, def-metric-compactness]
justified_by: []
aliases: [def-compact-topological-space, def-open-cover-top]
landmark: true
short: "open cover, compact space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Section 5.12: Quasi-compact spaces and maps"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

## Remarks

**Why open covers rather than covers by arbitrary sets.** Nothing in the
definition would break if $\mathcal{U}$ were allowed to consist of arbitrary
subsets of $X$, but the resulting notion would be uninteresting: every space is
covered by its singletons, and only a finite space would survive. Openness of the
members is what makes the condition a genuine restriction, and it is what
[[lem-compactness-of-a-subspace-is-ambient]] has to keep track of when the
ambient space changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the space
$(A, \mathcal{T}_A)$", whose members are open subsets of $A$. Which of the two is
meant is written out everywhere on this page.
````

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
````

### `def-product-topology`

````markdown
---
id: def-product-topology
kind: definition
title: "The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-initial-and-final-topology, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-choice-function, def-axiom-of-choice, lem-finite-choice,
       def-standard-topologies]
justified_by: []
aliases: [def-product-top, def-box-topology, def-projection-top]
landmark: true
short: "product topology, box topology, projections"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

## Remarks

- **Where the two topologies actually differ.** The box topology is finer than
  the product topology by construction, since $\mathcal{R}^{\Pi} \subseteq
  \mathcal{R}$. They agree whenever $I$ is finite; and, assuming the Axiom of Choice, for a
  family of **nonempty** spaces they differ for infinite $I$ as soon as infinitely
  many factors have a nonempty proper open subset. Nonemptiness is not decoration: if one factor is
  empty then the product is empty and carries exactly one topology, so the two
  agree however the other factors are chosen. Both statements are proved two items
  below, with that hypothesis, and the failure is recorded on this page as a false
  statement.

- **The product set is a set of functions, and that is not a technicality.** The
  factors are indexed by an arbitrary set, so there is no "list" to write down;
  writing $x = (x_i)_{i \in I}$ is notation for the function $x$. The finite case
  recovers the familiar tuple, and the identification of $\prod_{k<n}\mathbb{R}$
  with the $\mathbb{R}^n$ of [[lem-metrics-on-rn]] is literal, that item defining
  $\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$.

- **The projections carry no hypothesis.** They are defined for every product,
  including the empty one and products with an empty factor; what does need a
  hypothesis is their *surjectivity*, which is the point at which choice enters
  and which is stated separately in the next item.
````

### `def-the-diagonal-of-a-space`

````markdown
---
id: def-the-diagonal-of-a-space
kind: definition
title: "The diagonal $\\Delta_X \\subseteq X \\times X$, the diagonal map $\\delta_X$, and the pairing $\\langle f, g \\rangle$ of two maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-product-topology, thm-product-universal-property,
       def-continuous-map-top, def-subspace-topology-top, def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-diagonal-top, def-pairing-of-two-maps]
landmark: true
short: "the diagonal, the diagonal map, the pairing of two maps"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Diagonal embedding (PlanetMath)"
      url: "https://planetmath.org/diagonalembedding"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]). Throughout, $X \times Y$ is the binary product
$\prod_{i<2} X_i$ with $X_0 = X$ and $X_1 = Y$ ([[def-product-topology]]),
carrying the product topology; a point of it is a **function** $z$ on the von
Neumann natural $2 = \{0,1\}$, written $(z_0, z_1)$, and $\pi_0, \pi_1$ are the
two projections.

**The basis used throughout.** For the index set $2$ the product basis and the
box basis coincide, since a box $\prod_{i<2} U_i$ has all but finitely many
factors unrestricted for the trivial reason that it has only two
([[def-product-topology]]). So

$$\{\, U \times V : U \in \mathcal{T},\ V \in \mathcal{T}_Y \,\}$$

is a basis for the product topology on $X \times Y$, and every statement below
that tests a basic open set tests a box of two open sets.

**The diagonal.** The **diagonal** of $X$ is

$$\Delta_X \;:=\; \{\, z \in X \times X : z_0 = z_1 \,\} \;=\; \{\, (x,x) : x \in X \,\} ,$$

the second description being the first read through the definition of a point of
the product as a function on $2$. It is a subset of $X \times X$ and is given the
subspace topology ([[def-subspace-topology-top]]) whenever it is regarded as a
space.

**The diagonal map.** The **diagonal map** of $X$ is

$$\delta_X : X \to X \times X, \qquad \delta_X(x) := (x,x) ,$$

that is, the function sending $x$ to the constant function $2 \to X$ with value
$x$. Its two components are $\pi_0 \circ \delta_X = \mathrm{id}_X$ and
$\pi_1 \circ \delta_X = \mathrm{id}_X$, and by claim 2 of
[[thm-product-universal-property]] it is the *unique* function $X \to X \times X$
with those two components. The same claim makes it **continuous**
([[def-continuous-map-top]]), the identity being continuous. Its image is
$\Delta_X$, and it is injective, since $\delta_X(x) = \delta_X(x')$ forces
$x = x'$ by reading the coordinate at $0$. Whether $\delta_X$ is an **embedding**
onto $\Delta_X$ ([[def-homeomorphism-and-open-maps]]) is not asserted here; it is
the content of the next item.

**The pairing of two maps.** For functions $f : Z \to X$ and $g : Z \to Y$ on a
common domain, the **pairing** is

$$\langle f, g \rangle : Z \to X \times Y, \qquad \langle f, g \rangle(z) := (f(z), g(z)) .$$

By claim 2 of [[thm-product-universal-property]] it is the unique function
$Z \to X \times Y$ with $\pi_0 \circ \langle f, g \rangle = f$ and
$\pi_1 \circ \langle f, g \rangle = g$; no hypothesis on $f$ and $g$ is needed
for the pairing to be defined, and continuity of the pairing is exactly
continuity of both components, which is again that claim. In this notation

$$\delta_X = \langle \mathrm{id}_X, \mathrm{id}_X \rangle ,$$

so the diagonal map is a special case of the pairing and needs no separate
treatment.

**The preimage identity that every later proof uses.** For $f, g : Z \to Y$,

$$\langle f, g \rangle^{-1}[\Delta_Y] \;=\; \{\, z \in Z : f(z) = g(z) \,\} ,$$

directly from the definitions above: $\langle f, g \rangle(z) \in \Delta_Y$ says
that the function $(f(z), g(z))$ on $2$ takes the same value at $0$ and at $1$.

## Remarks

- **The diagonal is a subset of a product, and the diagonal map is a function
  into it; they are different objects with the same name.** The set $\Delta_X$
  records which pairs are repetitions, and the map $\delta_X$ produces the
  repetitions. Both are needed: the closedness criterion of this page is about the
  set, and the transport of properties from $X$ to its copy inside the square is
  about the map.

- **Nothing here depends on a choice principle.** The product $X \times X$ is a
  binary product, and a point of it is exhibited by naming its two coordinates;
  the nonemptiness of an arbitrary product, which is where choice enters
  ([[thm-product-universal-property]], claim 4), is never invoked for a binary
  product with a named point.

- **Why the box description is recorded at the top.** The criterion proved on
  this page tests basic open sets of $X \times X$, and for the binary product
  there is no gap between the box topology and the product topology to worry
  about ([[def-product-topology]]). No infinite product is formed anywhere on
  this page, so the distinction never becomes live here.
````

### `lem-finite-choice`

````markdown
---
id: lem-finite-choice
kind: lemma
title: "Every natural-number-indexed list of nonempty sets has a choice function on its family of values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-choice-function, thm-induction-principle, def-natural-numbers, def-nat-addition, def-axiom-of-choice]
justified_by: []
forward_refs: [def-countable, ex-finite-choice-by-induction, ex-russells-socks]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

## Facts & Assumptions

**Given:** A natural number $n$, used as the index set $n = \{0, \dots, n-1\}$, and a function $F$ with domain $n$ such that $F(i) \ne \emptyset$ for every $i \in n$; write $F[n] = \{F(i) : i \in n\}$ for the family of values of $F$.

[A1] $P(n)$ denotes the statement: for every function $F$ with domain $n$ all of whose values are nonempty sets, the family $F[n]$ has a choice function.

[L1] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L2] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L3] $0=\emptyset$ and $\sigma(n)=n\cup\{n\}$, so $n\subseteq\sigma(n)$ ([[def-natural-numbers]]). Thus a function $F$ with domain $\sigma(n)$ restricts to a function with domain $n$; moreover, directly from the definition of image, $y\in F[\sigma(n)]$ iff $y=F(i)$ for some $i\in n$ or $y=F(n)$, so $F[\sigma(n)]=F[n]\cup\{F(n)\}$.

## Proof

**Proof technique:** induction.

1.1 Base case: $0 = \emptyset$, so the only function with domain $0$ is the empty function, its family of values is $F[0] = \emptyset$, and the empty function has domain $\emptyset$ and satisfies the defining condition vacuously, so it is a choice function for $F[0]$; hence $P(0)$ holds. [base, A1, L2, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that every function with domain $n$ whose values are all nonempty has a choice function for its family of values. [ih, A1]

1.3 Let $F$ be an arbitrary function with domain $\sigma(n) = n \cup \{n\}$ all of whose values are nonempty sets; write $S = F(n)$ and $\mathcal{G} = F[n]$, the family of values of the restriction $F \restriction n$, so that $F[\sigma(n)] = \mathcal{G} \cup \{S\}$. [given, L3]

2.1 The restriction $F \restriction n$ is a function with domain $n$, and every value of it is a value of $F$, hence nonempty; so the inductive hypothesis applies to it and supplies a choice function $h$ for $\mathcal{G}$, a function with domain $\mathcal{G}$ satisfying $h(T) \in T$ for every $T \in \mathcal{G}$. [step 1.3, step 1.2, L2, L3]

2.2 The set $S = F(n)$ is one of the values of $F$, hence nonempty, so there exists an element of $S$; fix one and call it $a$. [step 1.3, choose]

3.1 Define $g = (h \restriction (\mathcal{G} \setminus \{S\})) \cup \{(S, a)\}$; its two pieces are functions with the disjoint domains $\mathcal{G} \setminus \{S\}$ and $\{S\}$, so $g$ is a function, and its domain is $(\mathcal{G} \setminus \{S\}) \cup \{S\} = \mathcal{G} \cup \{S\} = F[\sigma(n)]$. [step 2.1, step 2.2, step 1.3, construct]

4.1 Every $T \in F[\sigma(n)]$ is either $S$ or a member of $\mathcal{G} \setminus \{S\}$; in the first case $g(S) = a \in S$, and in the second $g(T) = h(T) \in T$ because $h$ is a choice function for $\mathcal{G}$. So $g(T) \in T$ throughout. [step 3.1, step 2.1, step 2.2]

5.1 Hence $g$ is a choice function for $F[\sigma(n)]$, and since $F$ was an arbitrary function with domain $\sigma(n)$ with nonempty values, $P(n)$ implies $P(n+1)$. [step 4.1, step 3.1, step 1.3, L2, A1]

6.1 By the induction principle, $P(n)$ holds for every $n \in \mathbb{N}$: the family of values of any function whose domain is a natural number and whose values are nonempty has a choice function. [step 1.1, step 5.1, L1, discharge-induction] ∎

## Remarks

- **Later finiteness terminology.** A finite set is defined later as one
  equinumerous with a natural number ([[def-countable]]). That terminology is
  not used in the proof above, which keeps its exact indexed-family scope.
- **Where the Axiom of Choice would be needed, and why it is not needed here.** Step 2.2 picks one element out of one nonempty set. That is a single existential instantiation, licensed by first-order logic alone. The induction performs one such instantiation per stage, and the stages are indexed by a natural number, so the process terminates. ZF cannot in general turn an arbitrary infinite family of nonempty sets into a simultaneous choice function; that is the gap [[def-axiom-of-choice]] fills. An infinite family with a distinguished element in each member may still have an explicit choice function in ZF, as [[ex-russells-socks]] shows.
- **Why the family is presented as an indexed one.** Stated over "a family of exactly $n$ sets", the successor step would have to assert that deleting one member of a family of $n+1$ sets leaves exactly $n$, which is a claim about cardinality and needs a theory of finiteness this page does not have. Indexed by $n$, the same step is the restriction $F \restriction n$ of a function, which is immediate from $n \subseteq \sigma(n)$ and costs nothing. Nothing else in the argument changes.
- The listing may repeat, and the argument is arranged so that repetition needs no separate treatment: $g$ is built by overwriting rather than by adjoining, so it is a function whether or not $S$ already occurs among $F(0), \dots, F(n-1)$. In particular $\mathcal{F}$ may have strictly fewer than $n$ members.
- The lemma is not a special case of the Axiom of Choice that happens to be provable; it is the precise boundary of what is free. [[ex-russells-socks]] makes the boundary concrete, and [[ex-finite-choice-by-induction]] works this induction out on a small family.
````

### `rem-separation-axiom-conventions`

````markdown
---
id: rem-separation-axiom-conventions
kind: remark
title: "Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-t0-and-t1-spaces, def-hausdorff-space, def-urysohn-space,
       def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces,
       def-normal-and-t4-spaces, def-completely-normal-and-perfectly-normal-spaces,
       def-zero-sets-and-cozero-sets, thm-the-separation-implication-chain,
       thm-perfectly-normal-implies-completely-normal, def-metrizable-space,
       def-countable-choice,
       def-compact-space, thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: []
landmark: false
short: "separation-axiom conventions and the missing arrow"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §31-33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 33: The Urysohn Lemma (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-33.pdf"
pipeline_run: null
---

The separation axioms are the part of general topology where textbooks disagree
most sharply about vocabulary, and where a reader arriving with the other
convention misreads statements rather than merely finding them unfamiliar. This
remark settles the disagreements that are live on this page, records the one
implication of the classical chain that this page does not prove, and states the
choice cost of the one implication whose proof spends a choice principle. The
standing topological vocabulary is used throughout: neighbourhoods need not be
open, empty intersections equal the whole carrier, a basis is always relative to
a topology, and comparisons use *coarser* and *finer*.

## 1. Whether *regular* and *normal* include $T_1$

**They do not, in this library.** *Regular*, *completely regular*, *normal*,
*completely normal* and *perfectly normal* name separation conditions on sets
alone ([[def-regular-and-t3-spaces]],
[[def-completely-regular-and-tychonoff-spaces]], [[def-normal-and-t4-spaces]],
[[def-completely-normal-and-perfectly-normal-spaces]]); the numerals $T_3$,
$T_{3\frac12}$, $T_4$, $T_5$ and $T_6$ name the conjunction of each with $T_1$
([[def-t0-and-t1-spaces]]).

Munkres builds $T_1$ into *regular* and *normal* and then has no separate name
for the bare conditions; Kelley, Willard and Engelking take the side taken here.
Both usages are current, and neither is more correct. The reason for the choice
made here is that the two halves are genuinely independent and each is used
alone on this page: the indiscrete topology on a two-point set is regular,
completely regular, normal, completely normal and perfectly normal, and fails
$T_0$; and the cofinite topology on an infinite set is $T_1$ and fails
everything above it. **Every statement on this page writes the $T_1$ hypothesis
out where it is used**, so a reader may translate to the other convention by
deleting it.

The word *Tychonoff* is used for completely regular plus $T_1$, and $T_{3\frac12}$
is treated as a synonym.

## 2. The name *Urysohn*, which denotes three different things

- **Urysohn space**, $T_{2\frac12}$: distinct points have neighbourhoods with
  disjoint closures ([[def-urysohn-space]]). This is what "Urysohn" means on
  this page.
- **Completely Hausdorff**: distinct points are separated by a continuous
  real-valued function. Some texts attach Urysohn's name to *this* condition
  instead. This library does not define it.
- **Urysohn's lemma**: the theorem that in a normal $T_1$ space two disjoint
  closed sets are separated by a continuous function into $[0,1]$. It is a
  theorem about *sets*, not points, and it is unrelated to either space
  condition.

A statement quoting "Urysohn" without saying which is meant is ambiguous; this
page always says which.

## 3. The one arrow this page does not prove

[[thm-the-separation-implication-chain]] assembles every implication proved
here. Against the classical chain it is short by exactly **one** arrow:

> **$T_4 \Rightarrow T_{3\frac12}$: a normal $T_1$ space is completely regular.**

This is **Urysohn's lemma**, applied to the point $\{x_0\}$ — which is closed by
$T_1$ — and the closed set $C$. Its proof indexes a family of open sets by the
dyadic rationals, choosing each from the previous one by the shrinking lemma; it
is not available at this point in the reading order, and no theorem of this page
proves it. Where it is named — in [[def-completely-regular-and-tychonoff-spaces]]
and in [[thm-completely-regular-implies-regular]] — it is named as the classical
arrow that is missing here, and it is never used as a fact in any proof on this
page. What would license it is a page
proving Urysohn's lemma, which in this library's plan sits above the present
one.

**The gap is not mere bookkeeping.** Urysohn's lemma is not a theorem of ZF, nor
of ZF together with countable choice: this is recorded, with its sources, in
[[rem-urysohn-lemma-not-a-zf-theorem]], which this remark mentions without
depending on. So the missing arrow is missing for a reason stronger than the
reading order — no rearrangement of the material already on this page could
supply it, and any page that does supply it must record a choice principle.

**Everything else in the classical chain is here.** In particular
$T_6 \Rightarrow T_5$ *is* proved ([[thm-perfectly-normal-implies-completely-normal]]),
and proved without any Urysohn function: it needs only normality, the
$F_\sigma$ presentation of open sets, and the Axiom of Countable Choice recorded
in §4 below. A reader who expects that arrow also to be
unavailable is thinking of the route through "every closed set is a zero set",
which does need Urysohn's lemma; the route taken here does not.

## 4. The one choice cost incurred on this page

Every proof on this page is a theorem of ZF **except**
[[thm-perfectly-normal-implies-completely-normal]], which assumes the Axiom of
Countable Choice ([[def-countable-choice]]) and spends it at one step, selecting
one open set for each member of a countable family of closed sets. The
hypothesis is written into that theorem's own statement and into clause 1 of
[[thm-the-separation-implication-chain]], and it is inherited by nothing else:
in particular the metric results are choice free, so "metrizable implies
perfectly normal, completely normal and normal" needs no choice at all, even
though the general arrow from perfect to complete normality does.

## 5. What this page deliberately does not contain

- **Compactness.** "A compact Hausdorff space is normal" is the standard first
  example of a normal space, and it is absent here for a narrower reason than
  before: general topological compactness itself **is** now available at this
  point in the reading order ([[def-compact-space]]), and the two separation
  lemmas the proof needs are proved there too
  ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]). What is still absent
  is the packaged statement itself, which is homed on a page above the present
  one. What would license restating it here is a home for that packaging above
  this page, not below it.
- **A regular space that is not normal.** Every witness reachable from this
  page's material needs either cardinal arithmetic or the hereditary and
  productive behaviour of regularity, neither of which is available here. Rather
  than plant a false statement with no witness, this page omits it; what would
  license it is a page developing either of those two tools.
- **Hereditary and productive behaviour.** Which of these axioms pass to
  subspaces and to products is not asked here. In particular the equivalence
  "completely normal if and only if hereditarily normal" is not proved, and
  [[def-completely-normal-and-perfectly-normal-spaces]] uses only the
  separated-sets form.
- **Zero-set characterisations beyond the metric case.** The equivalence
  "perfectly normal if and only if normal with every closed set a zero set"
  ([[def-zero-sets-and-cozero-sets]]) again needs Urysohn's lemma; only the
  metric direction is proved here, where the distance function supplies the
  function outright ([[def-metrizable-space]]).
````

### `thm-compact-subset-of-a-hausdorff-space-is-closed`

````markdown
---
id: thm-compact-subset-of-a-hausdorff-space-is-closed
kind: theorem
title: "In a Hausdorff space a point and a disjoint compact set, and two disjoint compact sets, have disjoint open neighbourhoods; hence every compact subset is closed, and in a compact Hausdorff space the compact subsets are exactly the closed ones"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-hausdorff-space, def-topological-space, def-subspace-topology-top, thm-closed-subspace-of-a-compact-space-is-compact, lem-finite-choice]
justified_by: []
aliases: [thm-compact-hausdorff-separation]
landmark: true
short: "compact sets separate in a Hausdorff space"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a Hausdorff topological space
([[def-hausdorff-space]], [[def-topological-space]]), with compact subsets as in
[[def-compact-space]]. Then:

1. **A point and a disjoint compact set are separated.** If $K \subseteq X$ is
   compact and $x \in X \setminus K$, there are $U, V \in \mathcal{T}$ with
   $$x \in U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
2. **Two disjoint compact sets are separated.** If $K, L \subseteq X$ are compact
   and $K \cap L = \varnothing$, there are $U, V \in \mathcal{T}$ with
   $$L \subseteq U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
3. **Compact implies closed.** Every compact subset of $X$ is closed in $X$.
4. **In a compact Hausdorff space the two classes coincide.** If in addition
   $(X, \mathcal{T})$ is compact, then a subset of $X$ is compact if and only if
   it is closed.

**The proof is written choice-free, and that is not a stylistic preference.** The
textbook argument says "for each $y \in K$ choose disjoint open $U_y, V_y$",
which is a selection over an arbitrary index set and therefore an appeal to the
full Axiom of Choice. What is done below instead is to take the family of **all**
open $V$ that admit some open $U \ni x$ disjoint from them — a family cut out by
a formula, with nothing selected — extract a finite subcover from it, and only
then make finitely many selections, which [[lem-finite-choice]] supplies as a
theorem of ZF.

## Facts & Assumptions

**Given:** A Hausdorff topological space $(X, \mathcal{T})$.

[A1] For all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[L1] $\varnothing$ and $X$ are open, an arbitrary union of open sets is open, the intersection of finitely many open sets is open when at least one is taken, and a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L2] A subset $A \subseteq X$ is a compact subset of $X$ exactly when for every family $\mathcal{U}$ of open subsets of $X$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1; [[def-compact-space]], [[def-subspace-topology-top]]).

[L3] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

[L4] A closed subset of a compact space is a compact subset of it ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

## Proof

**Proof technique:** direct.

1.1 For claim 1 fix a compact $K \subseteq X$ and a point $x \in X \setminus K$, and put $\mathcal{V} := \{\, V \in \mathcal{T} : U \cap V = \varnothing \text{ for some } U \in \mathcal{T} \text{ with } x \in U \,\}$, a family cut out by a property of $V$ alone and not by any selection. [construct]

2.1 $K \subseteq \bigcup \mathcal{V}$: given $y \in K$ we have $y \ne x$, since $x \notin K$, so [A1] provides $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$; that $V$ belongs to $\mathcal{V}$ and contains $y$. [A1, step 1.1]

3.1 If $K = \varnothing$ then $U := X$ and $V := \varnothing$ satisfy claim 1; otherwise [L2] applied to the family $\mathcal{V}$ gives $n \in \mathbb{N}$ and $V_0, \dots, V_n \in \mathcal{V}$ with $K \subseteq V_0 \cup \dots \cup V_n$. [L1, L2, step 1.1, step 2.1]

4.1 For each $j \le n$ the set $S_j := \{\, U \in \mathcal{T} : x \in U \text{ and } U \cap V_j = \varnothing \,\}$ is nonempty, because $V_j \in \mathcal{V}$; and $j \mapsto S_j$ is a function with domain the natural number $\sigma(n)$, so a choice function for its values supplies $U_0, \dots, U_n \in \mathcal{T}$ with $x \in U_j$ and $U_j \cap V_j = \varnothing$ for every $j \le n$. [L3, step 3.1]

5.1 Put $U := U_0 \cap \dots \cap U_n$ and $V := V_0 \cup \dots \cup V_n$; both are open by [L1], $x \in U$ because $x \in U_j$ for every $j$, $K \subseteq V$ by step 3.1, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $V_j$ and in $U \subseteq U_j$, contradicting $U_j \cap V_j = \varnothing$. So claim 1 holds. [L1, step 3.1, step 4.1]

6.1 For claim 3 let $K \subseteq X$ be compact and put $G := \bigcup \{\, W \in \mathcal{T} : W \cap K = \varnothing \,\}$, which is open by [L1]. Every member of the union misses $K$, so $G \subseteq X \setminus K$; conversely for $x \in X \setminus K$ claim 1, proved at step 5.1, gives disjoint open $U \ni x$ and $V \supseteq K$, whence $U \cap K = \varnothing$ and $x \in U \subseteq G$. So $G = X \setminus K$ is open, $K$ is closed, and claim 3 holds. [L1, step 5.1]

6.2 For claim 2 let $K, L \subseteq X$ be compact with $K \cap L = \varnothing$, and put $\mathcal{W} := \{\, W \in \mathcal{T} : V \cap W = \varnothing \text{ for some } V \in \mathcal{T} \text{ with } K \subseteq V \,\}$, again cut out by a property. Then $L \subseteq \bigcup \mathcal{W}$: for $y \in L$ we have $y \notin K$, so claim 1, proved at step 5.1, gives disjoint open $U \ni y$ and $V \supseteq K$, and that $U$ lies in $\mathcal{W}$ and contains $y$. [step 5.1, construct]

7.1 If $L = \varnothing$ then $U := \varnothing$ and $V := X$ satisfy claim 2; otherwise [L2] applied to $\mathcal{W}$ gives $m \in \mathbb{N}$ and $W_0, \dots, W_m \in \mathcal{W}$ with $L \subseteq W_0 \cup \dots \cup W_m$. [L1, L2, step 6.2]

8.1 For each $j \le m$ the set $T_j := \{\, V \in \mathcal{T} : K \subseteq V \text{ and } V \cap W_j = \varnothing \,\}$ is nonempty, because $W_j \in \mathcal{W}$; and $j \mapsto T_j$ is a function with domain the natural number $\sigma(m)$, so a choice function for its values supplies $V_0, \dots, V_m \in \mathcal{T}$ with $K \subseteq V_j$ and $V_j \cap W_j = \varnothing$ for every $j \le m$. [L3, step 7.1]

9.1 Put $U := W_0 \cup \dots \cup W_m$ and $V := V_0 \cap \dots \cap V_m$; both are open by [L1], $L \subseteq U$ by step 7.1, $K \subseteq V$ because $K \subseteq V_j$ for every $j$, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $W_j$ and in $V \subseteq V_j$, contradicting $V_j \cap W_j = \varnothing$. So claim 2 holds. [L1, step 7.1, step 8.1]

10.1 For claim 4 assume $(X, \mathcal{T})$ is also compact: a compact subset of $X$ is closed by step 6.1, and a closed subset of $X$ is compact by [L4], so the two classes of subsets coincide; with claims 1, 2 and 3 settled at steps 5.1, 9.1 and 6.1 the theorem is proved. [L4, step 6.1, step 9.1] ∎

## Remarks

**Where each hypothesis is spent.** The Hausdorff condition is used exactly once, at step 2.1, to know that the family $\mathcal{V}$ covers $K$; compactness of $K$ is used exactly once, at step 3.1, to cut that cover down to finitely many members. Claim 2 then reuses claim 1 in the same shape, with the roles of point and compact set played by a point of $L$ and the compact set $K$.

**Why the family is defined and not chosen.** For each $y \in K$ the Hausdorff condition asserts that *some* pair $(U, V)$ exists; it provides no rule for naming one. A proof that writes $U_y$ and $V_y$ has selected a pair for every $y \in K$ at once, and for an arbitrary compact $K$ that is the Axiom of Choice. Collecting instead every $V$ that works for *some* $U$ replaces the selection by a formula, and the only selection left is over the finite index set $\sigma(n)$, where [[lem-finite-choice]] applies.

**Claim 3 fails without the Hausdorff hypothesis**, and [[fs-a-compact-subset-is-closed-in-every-space]] records the failure with a witness. Claim 4 is the converse pairing: closedness is enough for compactness only when the ambient space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]), and compactness is enough for closedness only when it is Hausdorff.
````

### `thm-hausdorff-iff-the-diagonal-is-closed`

````markdown
---
id: thm-hausdorff-iff-the-diagonal-is-closed
kind: theorem
title: "A space is Hausdorff if and only if its diagonal is closed in the square carrying the product topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-diagonal-of-a-space, def-hausdorff-space, def-product-topology,
       def-topology-basis-subbasis, thm-closure-characterisation-top,
       def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: [thm-diagonal-criterion-for-hausdorff]
landmark: true
short: "Hausdorff iff the diagonal is closed"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space and give $X \times X$ the product
topology ([[def-product-topology]]). Then $X$ is Hausdorff
([[def-hausdorff-space]]) if and only if the diagonal $\Delta_X$
([[def-the-diagonal-of-a-space]]) is closed in $X \times X$:

$$X \text{ Hausdorff} \iff \Delta_X = \overline{\Delta_X} \text{ in } X \times X .$$

The condition on the right is a single closedness statement about one subset of
one space, with no quantifier over pairs of points visible in it; that is what
makes the criterion useful, and every consequence on this page is obtained by
pulling $\Delta_X$ back along a continuous map.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the product $X \times X$ with the product topology, and the diagonal $\Delta_X = \{\, z \in X \times X : z_0 = z_1 \,\}$.

[A1] $X$ is Hausdorff when for all $x \ne y$ in $X$ there are open $U \ni x$ and $V \ni y$ with $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[A2] The boxes $U \times V$ with $U, V \in \mathcal{T}$ form a basis for the product topology on $X \times X$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[def-the-diagonal-of-a-space]]).

[L1] For a basis $\mathcal{B}$ of a space, a point lies in $\overline{A}$ if and only if every $B \in \mathcal{B}$ containing it meets $A$; and $A$ is closed if and only if $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2, [[def-interior-closure-boundary-top]]).

[L2] $A \subseteq \overline{A}$ for every subset $A$ of a space ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is Hausdorff and let $z \in X \times X$ with $z \notin \Delta_X$, so that $z_0 \ne z_1$; by [A1] there are open $U \ni z_0$ and $V \ni z_1$ with $U \cap V = \varnothing$. [A1]

1.2 Assume $\Delta_X$ is closed and let $x, y \in X$ with $x \ne y$; then $z := (x,y)$ satisfies $z \notin \Delta_X = \overline{\Delta_X}$, the equality holding by [L1] since $\Delta_X$ is closed. [L1]

2.1 The box $U \times V$ of step 1.1 is a basic open set containing $z$, and $(U \times V) \cap \Delta_X = \varnothing$: a point $w$ of the intersection would satisfy $w_0 = w_1$ with $w_0 \in U$ and $w_1 \in V$, putting $w_0$ in $U \cap V = \varnothing$. [step 1.1, A2]

2.2 By [L1] applied to the basis of [A2], step 1.2 supplies a basic open box $U \times V$ with $z \in U \times V$ and $(U \times V) \cap \Delta_X = \varnothing$; so $x \in U$ and $y \in V$. [step 1.2, A2, L1]

3.1 From step 2.1 and [L1], $z \notin \overline{\Delta_X}$ for every $z \notin \Delta_X$; hence $\overline{\Delta_X} \subseteq \Delta_X$, and with [L2] this gives $\overline{\Delta_X} = \Delta_X$, so $\Delta_X$ is closed. [step 1.1, step 2.1, L1, L2]

3.2 The sets $U$ and $V$ of step 2.2 are disjoint: if $t \in U \cap V$ then $(t,t)$ lies in $U \times V$ and in $\Delta_X$, contradicting $(U \times V) \cap \Delta_X = \varnothing$. [step 2.2]

4.1 Step 3.1 shows that $X$ Hausdorff implies $\Delta_X$ closed, and steps 2.2 and 3.2 show that $\Delta_X$ closed implies that any two distinct points of $X$ have disjoint open neighbourhoods, which by [A1] is the Hausdorff condition; the two implications are the theorem. [step 2.2, step 3.1, step 3.2, A1] ∎

## Remarks

- **The criterion is about the product topology on a binary product**, and there the box basis and the product basis are the same family ([[def-product-topology]]), so the boxes tested in steps 2.1 and 2.2 are legitimately basic. No infinite product is formed anywhere in the argument, and the criterion says nothing about one.

- **Neither direction spends a choice principle.** The forward direction produces one box from one Hausdorff separation of one named pair, and the backward direction reads one box out of the closure characterisation; there is no family to select from in either.

- **What the criterion does not say.** It does not say that $\Delta_X$ is closed in $X \times X$ carrying some other topology, and it does not say that $\Delta_X$ is closed in $X$ — the latter is not even a statement, $\Delta_X$ being a subset of the square. The hypothesis that $X \times X$ carries the product topology is used at [A2] and cannot be dropped.
````

### `thm-product-universal-property`

````markdown
---
id: thm-product-universal-property
kind: theorem
title: "A map into a product is continuous iff each of its components is; the projections are continuous and open; and each projection is surjective when every factor is nonempty, which for an infinite index set uses the Axiom of Choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, thm-initial-and-final-characteristic-properties,
       def-initial-and-final-topology, def-continuous-map-top,
       def-homeomorphism-and-open-maps, def-axiom-of-choice, def-choice-function,
       lem-finite-choice, def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "universal property of the product; projections are open"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X_i, \mathcal{T}_i)_{i \in I}$ be topological spaces and let
$P := \prod_{i \in I} X_i$ carry the product topology, with projections $\pi_j$
([[def-product-topology]]). Then:

1. **The projections are continuous**, and the product topology is the coarsest
   topology on $P$ making all of them continuous.
2. **Characteristic property.** For every space $Z$ and every function
   $h : Z \to P$,
   $$h \text{ is continuous } \iff \pi_i \circ h \text{ is continuous for every } i \in I .$$
   The functions $\pi_i \circ h$ are the **components** of $h$, and every family
   of functions $h_i : Z \to X_i$ arises from exactly one $h$, namely
   $h(z)(i) := h_i(z)$.
3. **The projections are open maps** ([[def-homeomorphism-and-open-maps]]), for
   the product topology and for the box topology alike. They need not be closed;
   that failure is recorded on this page as a false statement.
4. **Surjectivity.** If every $X_i$ is nonempty then every $\pi_j$ is surjective.
   For $I$ a natural number this is a theorem of ZF ([[lem-finite-choice]]); for
   an arbitrary $I$ it is the Axiom of Choice ([[def-axiom-of-choice]]), and this
   is the only place in the item where a choice principle is used.

## Facts & Assumptions

**Given:** Topological spaces $(X_i,\mathcal{T}_i)_{i \in I}$, the product $P = \prod_{i \in I} X_i$ with the product topology and the projections $\pi_j(x) = x_j$, a space $Z$ and a function $h : Z \to P$, and an index $j \in I$.

[A1] The product topology on $P$ is the initial topology of $(\pi_i)_{i \in I}$, and a basis for it is the family of boxes $\prod_i U_i$ with every $U_i$ open and $U_i = X_i$ for all but finitely many $i$; a basis for the box topology is the family of all boxes $\prod_i U_i$ with every $U_i$ open ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A2] $f$ is an open map when $f[U]$ is open in the target for every open $U$ in the source ([[def-homeomorphism-and-open-maps]]).

[L1] For a topology given as an initial topology of a family $(f_i)$: each $f_i$ is continuous, the topology is the coarsest with that property, and a map $h$ into it is continuous exactly when every $f_i \circ h$ is ([[thm-initial-and-final-characteristic-properties]], claims 1 and 2; [[def-initial-and-final-topology]], [[def-continuous-map-top]]).

[L2] If $F$ is a function with domain a natural number $n$ whose values are nonempty sets, then the family of its values has a choice function ([[lem-finite-choice]], [[def-choice-function]]).

[L3] If every member of a family of sets is nonempty then the product of the family is nonempty; this is the Axiom of Choice ([[def-axiom-of-choice]], [[def-choice-function]]).

[L4] The image of a union is the union of the images, and an arbitrary union of open sets is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] the product topology is an initial topology, so [L1] gives claim 1 and claim 2 at once, the defining family being $(\pi_i)_{i \in I}$. [A1, L1]

1.2 For a family of functions $h_i : Z \to X_i$ the assignment $h(z)(i) := h_i(z)$ defines a function $Z \to P$, since $h(z)$ has domain $I$ and $h(z)(i) = h_i(z) \in X_i$; it satisfies $\pi_i \circ h = h_i$, and any $h'$ with $\pi_i \circ h' = h_i$ for every $i$ satisfies $h'(z)(i) = h_i(z) = h(z)(i)$ for all $z$ and $i$, hence $h' = h$. [given]

1.3 Let $B = \prod_i U_i$ be a box with every $U_i$ open. If $B = \varnothing$ then $\pi_j[B] = \varnothing$. If $B \ne \varnothing$, fix $b \in B$; then $\pi_j[B] = U_j$, since $\pi_j[B] \subseteq U_j$ by definition, and for $u \in U_j$ the function $y$ with $y_j := u$ and $y_i := b_i$ for $i \ne j$ lies in $B$ and has $\pi_j(y) = u$. [A1, choose]

1.4 Assume every $X_i$ is nonempty and $I$ is a natural number $n$. By [L2] applied to $i \mapsto X_i$ there is a choice function $g$ for the family of values, and $x(i) := g(X_i)$ defines a point of $P$; so $P \ne \varnothing$. [L2]

1.5 Assume every $X_i$ is nonempty and $I$ is arbitrary. By [L3] the product $P$ is nonempty. [L3]

2.1 Both the box topology and the product topology have a basis consisting of boxes, by [A1], and the image of a union of basic sets is the union of their images; so by step 1.3 the image under $\pi_j$ of any open set of either topology is a union of sets each of which is $\varnothing$ or an open $U_j \subseteq X_j$, hence open. This is claim 3. [step 1.3, A1, A2, L4]

2.2 Assume every $X_i$ is nonempty and let $t \in X_j$. By step 1.4 when $I$ is a natural number, and by step 1.5 in general, there is a point $p \in P$; the function $y$ with $y_j := t$ and $y_i := p_i$ for $i \ne j$ then lies in $P$ and satisfies $\pi_j(y) = t$. So $\pi_j$ is surjective, which is claim 4. [step 1.4, step 1.5]

3.1 Step 1.1 gives claims 1 and 2, step 1.2 gives the bijection between maps into $P$ and families of component maps, step 2.1 gives claim 3 and step 2.2 gives claim 4. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- **Exactly where choice is spent, and where it is not.** Openness of the
  projections (claim 3) is choice free: step 1.3 uses a *single* point of the box
  in question, which is given by the assumption that the box is nonempty, and
  builds the required preimage from it by changing one coordinate. Surjectivity
  (claim 4) is different, because there the point has to be produced from nothing
  but nonemptiness of the factors, and for an infinite index set that is the
  Axiom of Choice itself.

- **The characteristic property is what makes the product topology the right
  one.** The box topology has no analogue of claim 2: a map into a box-topologised
  product may have all components continuous and fail to be continuous, and the
  companion page exhibits the diagonal of $\mathbb{R}^{\mathbb{N}}$ doing exactly
  that.

- **Openness does not survive to closedness.** A projection is always open and is
  in general not closed, and the standard witness, the hyperbola in
  $\mathbb{R}^2$, is worked in the false statement on this page. There is no
  asymmetry of taste here: images of open boxes are computed coordinatewise,
  while a closed set of the product need not be a union of closed boxes at all.
````

