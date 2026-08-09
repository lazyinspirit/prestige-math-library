## Selection reasons

- critical risk (9): 7 declared dependencies; 5 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language

## Target item — `fs-paracompactness-is-hereditary`

Normalized current SHA-256: `9d20b58f114b60d29dcdbe2e97330befccb32362f83b7bcbe377d1fde880ed5d`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-paracompactness-is-hereditary
kind: false-statement
title: "Assuming choice, refuted: paracompactness is hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-compact-spaces-are-paracompact, lem-countably-compact-paracompact-hausdorff-is-compact, thm-ordinal-spaces-and-compactness, lem-ordinal-order-topology-is-t3, def-order-topology-on-an-ordinal, def-hereditary-property, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "G. Gruenhage, General Topology Course Notes"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "M. Aitken, Compactness notes (California State University San Marcos)"
      url: "https://public.csusm.edu/aitken_html/Essays/Topology/compactness.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, paracompactness is hereditary.

## Facts & Assumptions

**Given:** The Axiom of Choice and the ordinal spaces $\omega_1\subseteq\omega_1+1$.

[A1] Choice implies the countable choice used by the ordinal compactness theorem ([[def-axiom-of-choice]]).

[L1] Under countable choice, $\omega_1$ is countably compact and noncompact, while $\omega_1+1$ is compact ([[thm-ordinal-spaces-and-compactness]]).

[L2] Under choice, a countably compact paracompact Hausdorff space is compact ([[lem-countably-compact-paracompact-hausdorff-is-compact]]).

[L3] A compact space is paracompact ([[prop-compact-spaces-are-paracompact]]).

[L4] Every ordinal in its order topology is $T_1$ and Hausdorff, so each singleton is closed ([[lem-ordinal-order-topology-is-t3]], clauses 2 and 3).

## Refutation

**Proof technique:** direct.

1.1 By [A1] and [L1], $\omega_1+1$ is compact, hence paracompact by [L3], and its initial segment $\omega_1$ is countably compact but noncompact. [A1, L1, L3]

1.2 The initial segment $\omega_1$ is open in $\omega_1+1$, since its complement is the closed singleton consisting of the top endpoint. [L4]

2.1 If $\omega_1$ were paracompact, its Hausdorffness from [L4] would let [L2] make it compact, contradicting step 1.1. [L2, L4, step 1.1]

3.1 Thus a paracompact space has the nonparacompact subspace $\omega_1$, which refutes the displayed hereditary assertion. [step 1.1, step 1.2, step 2.1] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "fs-paracompactness-is-hereditary",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf",
    "https://public.csusm.edu/aitken_html/Essays/Topology/compactness.pdf"
  ],
  "rationale": "The sources identify omega_1 as nonparacompact and give the ordinal compactness facts for omega_1 and omega_1+1 that make the standard open-in-compact obstruction to hereditary paracompactness. The item makes Choice explicit and packages the witness as a refutation with a local derivation.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-topology.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-axiom-of-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Choice** (AC) is the following statement.\n\n> Every family of nonempty sets has a choice function\n> ([[def-choice-function]]).\n\nWritten out: for every set $\\mathcal{F}$ all of whose members are nonempty,\nthere exists a function $g$ with domain $\\mathcal{F}$ satisfying $g(S) \\in S$ for\nall $S \\in \\mathcal{F}$.\n\nAn equivalent formulation is that a product of nonempty sets is nonempty: if\n$X_i \\ne \\emptyset$ for every $i \\in I$, then $\\prod_{i \\in I} X_i \\ne \\emptyset$.\nHere $\\prod_{i \\in I} X_i$ is the set of functions $f$ with domain $I$ such that\n$f(i) \\in X_i$ for every $i \\in I$; when a family of nonempty sets is indexed by\nitself, such an $f$ is precisely a choice function for it.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-ordinal-spaces-and-compactness",
      "source_section": "Statement",
      "quote": "Every ordinal carries the order topology of the membership order on it\n([[def-ordinal]], [[def-order-topology-on-a-linearly-ordered-set]]), with the\nclopen basis $\\mathcal{B}_\\gamma$ of\n[[lem-the-order-topology-on-an-ordinal]]. Then:\n\n1. **Successors are compact.** For every ordinal $\\delta$ the successor ordinal\n   $\\delta^{+}$ is compact ([[def-compact-space]]).\n2. **Limits are not.** No limit ordinal ([[def-limit-ordinal]]) is compact.\n3. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]): the\n   first uncountable ordinal $\\omega_1$ ([[def-first-uncountable-ordinal]]) is\n   sequentially compact and countably compact ([[def-compactness-variants]]),\n   and it is not compact; while $\\omega_1 + 1$ is compact\n   ([[def-ordinal-addition]]).\n\nClaims 1 and 2 are theorems of ZF. Claim 3 spends countable choice twice, both\ntimes through cited results that carry the hypothesis in their own statements:\n[[thm-countable-subsets-of-omega-one-are-bounded]], which supplies the\nboundedness of at most countable subsets of $\\omega_1$, and claim 2 of\n[[thm-compactness-variants-hierarchy]], which converts sequential compactness\ninto countable compactness; the extraction of a subsequence below selects\nnothing, taking least elements throughout.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-countably-compact-paracompact-hausdorff-is-compact",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Countable Choice. Every countably compact paracompact\nHausdorff space is compact.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "prop-compact-spaces-are-paracompact",
      "source_section": "Statement",
      "quote": "Every compact topological space is paracompact.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-ordinal-order-topology-is-t3",
      "source_section": "Statement",
      "quote": "Let $\\gamma$ be an ordinal ([[def-ordinal]]) with its order topology\n([[def-order-topology-on-an-ordinal]]), whose basis is\n$\\mathcal{B}_\\gamma$. Then:\n\n1. Every member of $\\mathcal{B}_\\gamma$ is **clopen** in $\\gamma$\n   ([[def-topological-space]]), so $\\gamma$ has a basis of clopen sets.\n2. $\\gamma$ is $T_1$ ([[def-t0-and-t1-spaces]]).\n3. $\\gamma$ is Hausdorff ([[def-hausdorff-space]]).\n4. $\\gamma$ is regular ([[def-regular-and-t3-spaces]]), and therefore $T_3$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "By [A1] and [L1], $\\omega_1+1$ is compact, hence paracompact by [L3], and its initial segment $\\omega_1$ is countably compact but noncompact. [A1, L1, L3]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "The initial segment $\\omega_1$ is open in $\\omega_1+1$, since its complement is the closed singleton consisting of the top endpoint. [L4]",
      "step": "1.2",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "If $\\omega_1$ were paracompact, its Hausdorffness from [L4] would let [L2] make it compact, contradicting step 1.1. [L2, L4, step 1.1]",
      "step": "2.1",
      "inputs": [
        "L4",
        "L2",
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Thus a paracompact space has the nonparacompact subspace $\\omega_1$, which refutes the displayed hereditary assertion. [step 1.1, step 1.2, step 2.1]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "1.2",
        "2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The fixed ordinal counterexample is nonempty."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and steps 1.1--1.2 include the least ordinal 0 inside omega_1."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.2 treats the one-point complement {omega_1}."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "No collapsed ordinal or coincident endpoint is admitted by the fixed witness."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.1--1.2 distinguish omega_1 from the top endpoint of omega_1+1."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 uses A1 to license the cited countable-choice theorem; no additional selection occurs."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The refuted statement is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The refuted statement is not a biconditional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "fs-paracompactness-is-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "prop-compact-spaces-are-paracompact",
    "declared_target": "prop-compact-spaces-are-paracompact",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-paracompactness-is-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "declared_target": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-paracompactness-is-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "thm-ordinal-spaces-and-compactness",
    "declared_target": "thm-ordinal-spaces-and-compactness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-paracompactness-is-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-ordinal-order-topology-is-t3",
    "declared_target": "lem-ordinal-order-topology-is-t3",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-paracompactness-is-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-order-topology-on-an-ordinal",
    "declared_target": "def-order-topology-on-an-ordinal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-paracompactness-is-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-hereditary-property",
    "declared_target": "def-hereditary-property",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-paracompactness-is-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (7)

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

### `def-hereditary-property`

````markdown
---
id: def-hereditary-property
kind: definition
title: "Hereditary, open-hereditary and closed-hereditary properties of topological spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-subspace-topology-top, def-homeomorphism-and-open-maps, def-topological-space]
justified_by: []
aliases: [def-hereditary, def-open-hereditary, def-closed-hereditary]
landmark: true
short: "hereditary property"
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
    - title: "Hereditary property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hereditary_property"
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A **property of topological spaces** is a condition $P$ that is either true or
false of each space, as in [[def-homeomorphism-and-open-maps]]; a **topological
property** is one whose truth value is the same for homeomorphic spaces. Every
subset of a space is regarded as a space by giving it the subspace topology
([[def-subspace-topology-top]]).

Let $P$ be a property of topological spaces. Then $P$ is

- **hereditary** if, whenever a space $X$ has $P$, every subspace of $X$ has $P$;
- **open-hereditary** if, whenever $X$ has $P$, every subspace $S \subseteq X$
  with $S$ open in $X$ has $P$;
- **closed-hereditary** if, whenever $X$ has $P$, every subspace $S \subseteq X$
  with $S$ closed in $X$ has $P$.

A hereditary property is both open-hereditary and closed-hereditary, since the
condition on $S$ is only a restriction of the range of subspaces quantified over.
Neither of the two weaker notions implies the other, and neither implies
heredity.

**The definition is stable under the route by which a subspace is reached.** If
$S \subseteq T \subseteq X$ then the topology $S$ inherits from the subspace $T$
is the topology $S$ inherits from $X$, transitivity being discharged in
[[def-subspace-topology-top]]. So "every subspace of $X$" is unambiguous, and a
hereditary property automatically passes from $X$ to a subspace of a subspace,
with no separate induction.

**Heredity is a statement about a property, not about a space.** It quantifies
over all spaces having $P$ and all their subspaces, so a single space whose
subspaces all inherit $P$ says nothing; and a single space that **has** $P$ and
has one subspace lacking $P$ refutes heredity outright. A space that lacks $P$
refutes nothing, however its subspaces behave. That asymmetry is why the failures are
recorded here as counterexamples and the successes as theorems.

**Only topological properties are worth asking about.** Taking $S = X$ shows that
a hereditary property holds of $X$ itself, and the subspace topology on $X$ is
$\mathcal{T}$ ([[def-subspace-topology-top]], with $U \cap X = U$), so the
definition is not vacuous at the top. But a condition that is not invariant under
homeomorphism can be hereditary for uninteresting reasons, since a subspace is
only determined up to the identification of its topology
([[def-topological-space]]); every property named hereditary in this library is
a topological property, and it is said so where it is proved.

## Remarks

- **The three notions separate in practice.** Metrizability and first
  countability are hereditary, and that is proved in the next item. "Has a
  countable dense subset" is open-hereditary, by claim 4 of
  [[thm-subspace-closure-and-interior]], and is *not* hereditary; the witness is
  worked on the companion page, where an uncountable discrete subspace is
  exhibited inside a space that has a countable dense subset.

- **What is deliberately not settled here.** Whether the separation properties
  beyond the Hausdorff condition of [[def-hausdorff-space]] are hereditary is a
  question about axioms that are not available at this point in the reading
  order, and no claim about them is made on this page.

- **Products have their own word.** A property preserved by arbitrary products is
  usually called *productive*, and the same three-way refinement (finite
  products, countable products, arbitrary products) applies to it. No item on
  this page uses that word, because the productive theorems it would organise are
  not available at this point in the reading order.
````

### `def-order-topology-on-an-ordinal`

````markdown
---
id: def-order-topology-on-an-ordinal
kind: definition
title: "The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy,
       lem-omega-least-limit-ordinal, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-standard-topologies,
       def-order-topology-on-a-linearly-ordered-set]
justified_by: []
aliases: [def-ordinal-order-topology]
landmark: true
short: "order topology on an ordinal"
verification:
  precheck: n/a
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "J. Munkres, Topology, 2nd ed., §14 and §10"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
pipeline_run: null
---

## Definition

Let $\gamma$ be an ordinal ([[def-ordinal]]). Since $\gamma$ is the set of
ordinals below it and $\xi < \eta$ means $\xi \in \eta$, the following two
families of subsets of $\gamma$ are defined for $\beta \in \gamma$ and
$\alpha \in \gamma$:

$$[0,\beta] \;:=\; \{\, \xi \in \gamma : \xi \le \beta \,\} \;=\; \beta^{+}, \qquad (\alpha,\beta] \;:=\; \{\, \xi \in \gamma : \alpha < \xi \le \beta \,\} \;=\; \beta^{+} \setminus \alpha^{+} .$$

Both identifications are immediate: $\beta^{+} = \beta \cup \{\beta\}$ is the set
of ordinals $\le \beta$, and it is a subset of $\gamma$ because $\gamma$ is
transitive and $\beta \in \gamma$ ([[def-ordinal]], [[lem-ordinal-basics]]).

Put

$$\mathcal{B}_\gamma \;:=\; \{\, [0,\beta] : \beta \in \gamma \,\} \;\cup\; \{\, (\alpha,\beta] : \alpha, \beta \in \gamma,\ \alpha < \beta \,\} .$$

**$\mathcal{B}_\gamma$ is a basis for a unique topology on $\gamma$**
([[thm-basis-criterion]], [[def-topology-basis-subbasis]]), and that topology is
the **order topology on $\gamma$**. The obligation is discharged here.

*(B1), covering.* If $\xi \in \gamma$ then $\xi \in [0,\xi] \in \mathcal{B}_\gamma$,
so $\bigcup \mathcal{B}_\gamma = \gamma$. For $\gamma = 0 = \varnothing$ the
family is empty and $\bigcup \varnothing = \varnothing = \gamma$, so (B1) holds
there too.

*(B2), intersections.* By trichotomy of the ordinals ([[lem-ordinal-trichotomy]])
any two ordinals have a maximum and a minimum, namely the larger and the smaller
of the two, and for $\alpha_1, \alpha_2, \beta_1, \beta_2 \in \gamma$:

- $[0,\beta_1] \cap [0,\beta_2] = [0, \min\{\beta_1,\beta_2\}]$;
- $[0,\beta_1] \cap (\alpha_2,\beta_2] = (\alpha_2, \min\{\beta_1,\beta_2\}]$ when
  $\alpha_2 < \min\{\beta_1,\beta_2\}$, and $\varnothing$ otherwise;
- $(\alpha_1,\beta_1] \cap (\alpha_2,\beta_2] = (\max\{\alpha_1,\alpha_2\},\ \min\{\beta_1,\beta_2\}]$
  when $\max\{\alpha_1,\alpha_2\} < \min\{\beta_1,\beta_2\}$, and $\varnothing$
  otherwise.

In each case the intersection is either a member of $\mathcal{B}_\gamma$ or
empty, and in the empty case (B2) is vacuous, having no point to test. So (B2)
holds, and [[thm-basis-criterion]] supplies the topology and its uniqueness.

**This definition is for ordinals only, and it says so.** The general order
topology of a linearly ordered set takes the open intervals, together with the
initial and final rays, as a basis. For an ordinal that family is the wrong one:
a successor $\beta^{+}$ has an immediate predecessor, so the smallest open
interval around it is already $\{\beta^{+}\}$, but no *interval* of the form
$(\alpha,\eta)$ isolates $0$, and the initial segments must be supplied
separately. The family $\mathcal{B}_\gamma$ above is exactly the general order
basis for an ordinal, rewritten so that no case analysis is needed; nothing here
claims to define the order topology of an arbitrary linearly ordered set, and no
statement on this page is about such a set.

**Isolated and non-isolated points.** Every ordinal is $0$, a successor, or a
limit ([[def-limit-ordinal]]). If $\xi = 0$ then $\{\xi\} = [0,0]$ is basic open;
if $\xi = \alpha^{+}$ then $\{\xi\} = (\alpha, \xi]$ is basic open; so every
non-limit point of $\gamma$ is isolated. If $\xi$ is a limit ordinal then every
basic set containing $\xi$ contains some $(\alpha,\xi]$ with $\alpha < \xi$, and
$\alpha^{+} < \xi$ because $\xi$ is a limit, so $\alpha^{+}$ is a second point of
that basic set; hence a limit point of $\gamma$ is not isolated. In particular
$\omega$, the least limit ordinal ([[lem-omega-least-limit-ordinal]]), is the
unique non-isolated point of $\omega + 1$, and every ordinal $\gamma \le \omega$
carries the discrete topology ([[def-standard-topologies]]).

## Remarks

- **The basis members are clopen**, and that is proved as the next item; it is
  the single fact that makes ordinal spaces easy to place in the separation
  hierarchy, since a clopen basis gives regularity at once.

- **$\gamma$ is a set of ordinals and also a space.** The notations $[0,\beta]$
  and $(\alpha,\beta]$ are relative to the ambient $\gamma$: the same symbols in
  a larger ordinal denote larger sets. Where two ordinals are in play the ambient
  one is named.

- **Nothing here needs any choice principle.** Every fact used above is a theorem
  of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

- **This is the ordinal instance of a general construction.** The order topology
  of an arbitrary linearly ordered set is now defined elsewhere in the library
  ([[def-order-topology-on-a-linearly-ordered-set]]), by open intervals together
  with the initial and final rays. $\mathcal{B}_\gamma$ above is not that
  construction applied verbatim to $\gamma$ — the note two Remarks up already
  explains why a raw open-interval basis is the wrong family for an ordinal —
  but it generates the same topology: every basic open set of the general
  construction is a union of members of $\mathcal{B}_\gamma$ and conversely,
  since both bases are generated by the same order relation on the same
  underlying set. So this definition is the ordinal special case of that one,
  restated in a form that needs no case analysis, not a second, competing
  notion.
````

### `lem-countably-compact-paracompact-hausdorff-is-compact`

````markdown
---
id: lem-countably-compact-paracompact-hausdorff-is-compact
kind: lemma
title: "Assuming countable choice, every countably compact paracompact Hausdorff space is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-locally-finite-unions-and-closures, def-compactness-variants, def-paracompact-space, def-hausdorff-space, def-countable-choice, def-countable, thm-countable-union-of-countable, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "P. Bacon, Pacific Journal of Mathematics 32 (1970), countably compact paracompact spaces"
      url: "https://msp.org/pjm/1970/32-3/pjm-v32-n3-p03-p.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every countably compact paracompact
Hausdorff space is compact.

## Facts & Assumptions

**Given:** Countable choice and a countably compact paracompact Hausdorff space $X$.

[A1] Countable choice supplies a choice function for every sequence of nonempty sets ([[def-countable-choice]]).

[F1] Countable compactness tests at most countable open covers, while compactness tests all open covers ([[def-compactness-variants]]).

[F2] Paracompactness supplies a locally finite open refining cover ([[def-paracompact-space]]).

[F3] Hausdorff spaces separate distinct points by disjoint open neighbourhoods ([[def-hausdorff-space]]).

[L1] A locally finite union of closed sets is closed ([[lem-locally-finite-unions-and-closures]]).

[L2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).

[L3] Choice from a finite listed family is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal U$ be an arbitrary open cover, and take a locally finite open refining cover $\mathcal V$ by [F2]. [F2, choose]

2.1 Suppose $\mathcal V$ were infinite. For every $n$ the family of $(n+1)$-element subsets of $\mathcal V$ is nonempty; [A1] chooses one $E_n$. Then $E=\bigcup_nE_n$ is at most countable by [L2] and infinite because it has finite subsets of arbitrarily large size. Hence, by the definition of at-most-countable, $E$ is countably infinite; enumerate its distinct members as $(V_n)_{n\in\mathbb N}$. [A1, L2, step 1.1, construct]

3.1 By [A1] choose $d_n\in V_n$ for every $n$. The range $D=\{d_n:n\in\mathbb N\}$ is infinite: if it were finite, local finiteness would make only finitely many distinct $V_n$ meet $D$, but every $V_n$ contains $d_n\in D$. Moreover the singleton family $\{\{d\}:d\in D\}$ is locally finite, since a neighbourhood meeting only finitely many $V_n$ can contain only finitely many points $d\in D$. [A1, F2, step 2.1, construct]

4.1 Hausdorffness makes points closed, so [L1] makes $D$ closed. For each $d\in D$, local finiteness gives a neighbourhood meeting only finitely many points of $D$; pass to an open subneighbourhood and remove those finitely many other closed points. Using [A1] along an enumeration of $D$ yields open sets $O_d$ with $O_d\cap D=\{d\}$. [A1, F3, L1, step 3.1, construct]

5.1 The open set $X\setminus D$, together with the at most countable family $\{O_d:d\in D\}$, is an open cover with no finite subcover, contradicting countable compactness in [F1]. [F1, step 3.1, step 4.1]

6.1 Hence $\mathcal V$ is finite. By [L3], select for each member of this finite refining family one containing member of $\mathcal U$; the selected members form a finite subcover of $\mathcal U$. [step 1.1, step 5.1, L3]

7.1 Since $\mathcal U$ was arbitrary, [F1] proves that $X$ is compact. [F1, step 6.1] ∎

## Remarks

Countable choice is spent twice: first to extract a countably infinite subfamily from a putatively infinite locally finite cover, and then to choose one point from each member of that subfamily. The final selection is only finite choice, which is available in ZF.
````

### `lem-ordinal-order-topology-is-t3`

````markdown
---
id: lem-ordinal-order-topology-is-t3
kind: lemma
title: "Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-order-topology-on-an-ordinal, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-hausdorff-space, def-regular-and-t3-spaces,
       lem-regularity-via-closed-neighbourhoods, def-neighbourhood-top,
       def-interior-closure-boundary-top, lem-ordinal-basics, lem-ordinal-trichotomy,
       def-ordinal, def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "ordinal spaces are $T_3$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "J. Munkres, Topology, 2nd ed., §14"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 32: Normal Spaces (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-32.pdf"
pipeline_run: null
---

## Statement

Let $\gamma$ be an ordinal ([[def-ordinal]]) with its order topology
([[def-order-topology-on-an-ordinal]]), whose basis is
$\mathcal{B}_\gamma$. Then:

1. Every member of $\mathcal{B}_\gamma$ is **clopen** in $\gamma$
   ([[def-topological-space]]), so $\gamma$ has a basis of clopen sets.
2. $\gamma$ is $T_1$ ([[def-t0-and-t1-spaces]]).
3. $\gamma$ is Hausdorff ([[def-hausdorff-space]]).
4. $\gamma$ is regular ([[def-regular-and-t3-spaces]]), and therefore $T_3$.

## Facts & Assumptions

**Given:** An ordinal $\gamma$ with its order topology, ordinals $\alpha, \beta, \xi, \eta \in \gamma$, and the basis $\mathcal{B}_\gamma$ consisting of the sets $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$.

[A1] $[0,\beta] = \{\, \zeta \in \gamma : \zeta \le \beta \,\}$ and $(\alpha,\beta] = \{\, \zeta \in \gamma : \alpha < \zeta \le \beta \,\}$, and $\mathcal{B}_\gamma$ is a basis for the order topology ([[def-order-topology-on-an-ordinal]], [[def-topology-basis-subbasis]]).

[L1] For ordinals exactly one of $\zeta < \eta$, $\zeta = \eta$, $\eta < \zeta$ holds, and $<$ is transitive; every element of an ordinal is an ordinal ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

[L2] A set is open exactly when each of its points lies in a basic set inside it; a set is closed exactly when its complement is open; a union of open sets is open ([[def-topology-basis-subbasis]], [[def-topological-space]]).

[L3] A space is $T_1$ exactly when every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b), [[def-t0-and-t1-spaces]]).

[L4] The basic sets containing a point form a neighbourhood base at that point, consisting of open sets ([[def-neighbourhood-top]]).

[L5] A space is regular exactly when every point has a neighbourhood base of closed neighbourhoods ([[lem-regularity-via-closed-neighbourhoods]], clause (c), [[def-regular-and-t3-spaces]]).

[L6] A closed neighbourhood of a point is a neighbourhood of it that is closed, and $\overline{K} = K$ for such a $K$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 The set $T_\beta := \{\, \zeta \in \gamma : \beta < \zeta \,\}$ is open for every $\beta \in \gamma$: if $\beta < \zeta$ with $\zeta \in \gamma$ then $(\beta,\zeta]$ is a basic set with $\zeta \in (\beta,\zeta] \subseteq T_\beta$, by [A1] and transitivity in [L1]. [A1, L1, L2]

1.2 The set $S_\xi := \{\, \zeta \in \gamma : \zeta < \xi \,\}$ is open for every $\xi \in \gamma$: if $\zeta < \xi$ then $[0,\zeta]$ is a basic set with $\zeta \in [0,\zeta] \subseteq S_\xi$, again by [A1] and transitivity. [A1, L1, L2]

1.3 Let $\xi \ne \eta$ in $\gamma$ and assume $\xi < \eta$ without loss of generality, by [L1]. Then $[0,\xi]$ and $(\xi,\eta]$ are basic open sets with $\xi \in [0,\xi]$, $\eta \in (\xi,\eta]$ and $[0,\xi] \cap (\xi,\eta] = \varnothing$ by [A1] and trichotomy; so $\gamma$ is Hausdorff, which is claim 3. [A1, L1]

2.1 $\gamma \setminus [0,\beta] = T_\beta$ by trichotomy, so $[0,\beta]$ is closed by step 1.1 and [L2]; and $[0,\beta]$ is open, being basic. [step 1.1, A1, L1, L2]

2.2 $\gamma \setminus (\alpha,\beta] = S_{\alpha^{+}} \cup T_\beta$ by trichotomy, where $S_{\alpha^{+}} = [0,\alpha]$ is basic open and $T_\beta$ is open by step 1.1, so $(\alpha,\beta]$ is closed by [L2]; and it is open, being basic. [step 1.1, A1, L1, L2]

2.3 $\gamma \setminus \{\xi\} = S_\xi \cup T_\xi$ by trichotomy, which is open by steps 1.1 and 1.2 and [L2], so $\{\xi\}$ is closed. [step 1.1, step 1.2, L1, L2]

3.1 Steps 2.1 and 2.2 exhaust $\mathcal{B}_\gamma$, so every basic set is clopen, which is claim 1. [step 2.1, step 2.2, A1]

3.2 Step 2.3 makes every singleton closed, so $\gamma$ is $T_1$ by [L3], which is claim 2. [step 2.3, L3]

4.1 Let $\xi \in \gamma$ and let $N$ be a neighbourhood of $\xi$; by [L4] there is a basic $B \in \mathcal{B}_\gamma$ with $\xi \in B \subseteq N$, and $B$ is closed by step 3.1 and open, hence a closed neighbourhood of $\xi$ inside $N$. [step 3.1, L4, L6]

5.1 By step 4.1 every point of $\gamma$ has a neighbourhood base of closed neighbourhoods, so $\gamma$ is regular by [L5]; with step 3.2 it is $T_3$, which is claim 4. [step 3.2, step 4.1, L5] ∎

## Remarks

- **The clopen basis is the whole content.** A space with a basis of clopen sets is regular for the reason given in step 4.1, and the ordinals have such a basis because a half-open interval $(\alpha,\beta]$ has an *immediate* left endpoint outside it, namely $\alpha$, and everything above $\beta$ is separated from it by a further half-open interval. No case distinction between successors and limits is needed anywhere in the proof.

- **Regularity is claimed and normality is not.** Nothing above asserts that an ordinal with its order topology is normal, and nothing on this page proves it. The companion page's deleted plank is a subspace of a product of two ordinal spaces and is *not* normal, so no normality statement about ordinal spaces may be read off from this lemma in either direction.

- **No choice principle is used**, every ingredient being a theorem of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).
````

### `prop-compact-spaces-are-paracompact`

````markdown
---
id: prop-compact-spaces-are-paracompact
kind: proposition
title: "Every compact space is paracompact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-paracompact-space, def-compact-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Every compact topological space is paracompact.

## Facts & Assumptions

**Given:** A compact topological space $X$ and an open cover $\mathcal U$ of $X$.

[F1] Compactness means that $\mathcal U$ has a finite subcover ([[def-compact-space]]).

[F2] Paracompactness asks for a locally finite open refinement of each open cover ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 By compactness, fix a finite subfamily $\mathcal V\subseteq\mathcal U$ covering $X$. [F1, choose]

2.1 The family $\mathcal V$ is open, covers $X$, refines $\mathcal U$, and is locally finite because every point has the neighbourhood $X$, which meets only members of the finite family $\mathcal V$. [step 1.1]

3.1 Thus $\mathcal V$ is the refinement required by [F2], and $X$ is paracompact. [F2, step 2.1] ∎
````

### `thm-ordinal-spaces-and-compactness`

````markdown
---
id: thm-ordinal-spaces-and-compactness
kind: theorem
title: "Every successor ordinal is compact in its order topology and every limit ordinal is not; and, assuming countable choice, $\\omega_1$ is countably compact and sequentially compact while $\\omega_1 + 1$ is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-the-order-topology-on-an-ordinal, def-compact-space, def-compactness-variants, thm-compactness-variants-hierarchy, def-order-topology-on-a-linearly-ordered-set, def-topology-basis-subbasis, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-ordinal-addition, def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, thm-countable-subsets-of-omega-one-are-bounded, def-countable-choice, def-countable, lem-countable-iff-surjection-from-n, lem-subset-of-countable, def-sequence-convergence-top, def-sequence, lem-index-map-grows, thm-transfinite-induction, def-topological-space]
justified_by: []
aliases: [thm-ordinal-space-compactness]
landmark: true
short: "compactness of ordinal spaces"
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
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Statement

Every ordinal carries the order topology of the membership order on it
([[def-ordinal]], [[def-order-topology-on-a-linearly-ordered-set]]), with the
clopen basis $\mathcal{B}_\gamma$ of
[[lem-the-order-topology-on-an-ordinal]]. Then:

1. **Successors are compact.** For every ordinal $\delta$ the successor ordinal
   $\delta^{+}$ is compact ([[def-compact-space]]).
2. **Limits are not.** No limit ordinal ([[def-limit-ordinal]]) is compact.
3. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]): the
   first uncountable ordinal $\omega_1$ ([[def-first-uncountable-ordinal]]) is
   sequentially compact and countably compact ([[def-compactness-variants]]),
   and it is not compact; while $\omega_1 + 1$ is compact
   ([[def-ordinal-addition]]).

Claims 1 and 2 are theorems of ZF. Claim 3 spends countable choice twice, both
times through cited results that carry the hypothesis in their own statements:
[[thm-countable-subsets-of-omega-one-are-bounded]], which supplies the
boundedness of at most countable subsets of $\omega_1$, and claim 2 of
[[thm-compactness-variants-hierarchy]], which converts sequential compactness
into countable compactness; the extraction of a subsequence below selects
nothing, taking least elements throughout.

## Facts & Assumptions

**Given:** Ordinals with their order topologies, and the notation $[0,\beta]$, $(\alpha,\beta]$ of [[lem-the-order-topology-on-an-ordinal]].

[A1] The Axiom of Countable Choice, for claim 3 only ([[def-countable-choice]]).

[L1] A space is compact when every open cover has a finite subcover ([[def-compact-space]], [[def-topological-space]]).

[L2] On an ordinal $\gamma$ the sets $[0,\beta]$ and $(\alpha,\beta]$ with $\alpha, \beta \in \gamma$ are clopen and form a basis $\mathcal{B}_\gamma$, so every open $U$ and every $\eta \in U$ admit a member of $\mathcal{B}_\gamma$ between them ([[lem-the-order-topology-on-an-ordinal]], claim 1; [[def-topology-basis-subbasis]]).

[L3] Ordinals are linearly ordered by membership; $\beta < \alpha$ holds exactly when $\beta^{+} \le \alpha$; a nonempty set of ordinals has a least element, and a nonempty set listed as $\{\beta_0, \dots, \beta_n\}$ has a greatest, by induction on $n$ using trichotomy; and $\beta \in \lambda$ with $\lambda$ a limit ordinal gives $\beta^{+} \in \lambda$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-limit-ordinal]]).

[L4] Transfinite induction: if $S$ is a subset of a well-ordered set $W$ containing every $a$ all of whose strict predecessors lie in $S$, then $S = W$ ([[thm-transfinite-induction]]).

[L5] $\omega_1$ is the least uncountable ordinal, it is a limit ordinal, and every ordinal below it is at most countable ([[def-first-uncountable-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-countable]]).

[L6] Assuming $\mathrm{AC}_\omega$, every at most countable $A \subseteq \omega_1$ satisfies $\sup A = \bigcup A \in \omega_1$ ([[thm-countable-subsets-of-omega-one-are-bounded]], claim (a)).

[L7] The range of a function with domain $\mathbb{N}$ is at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L8] An infinite subset $P \subseteq \mathbb{N}$ carries a strictly increasing enumeration $i \mapsto m_i$ of $\mathbb{N}$ onto $P$, built by taking least elements and using no choice principle; and a strictly increasing index map satisfies $m_i \ge i$ ([[lem-subset-of-countable]], [[lem-index-map-grows]]).

[L9] A sequence in a space is a function on $\mathbb{N}$, and $y_k \to p$ means that every open set containing $p$ contains $y_k$ from some index on; a subsequence is given by a strictly increasing index map ([[def-sequence-convergence-top]], [[def-sequence]]).

[L10] Assuming $\mathrm{AC}_\omega$, a sequentially compact space is countably compact ([[thm-compactness-variants-hierarchy]], claim 2; [[def-compactness-variants]]).

[L11] $\alpha + 1 = \alpha^{+}$ for every ordinal $\alpha$ ([[def-ordinal-addition]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1 let $\gamma := \delta^{+}$, so that $\delta$ is the greatest element of $\gamma$ and $[0,\delta] = \gamma$; let $\mathcal{U}$ be an open cover of $\gamma$ and put $S := \{\, \eta \in \gamma : \text{finitely many members of } \mathcal{U} \text{ cover } [0,\eta] \,\}$. [L1, L3, construct]

1.2 For claim 2 let $\lambda$ be a limit ordinal; the family $\{\, [0,\beta] : \beta \in \lambda \,\}$ consists of open sets by [L2] and covers $\lambda$, since $\xi \in [0,\xi]$ for every $\xi \in \lambda$. [L2, L3]

1.3 For claim 3 assume $\mathrm{AC}_\omega$ and let $(y_k)$ be a sequence in $\omega_1$; its range is at most countable by [L7], so [L6] gives $\sigma := \sup\{\, y_k : k \in \mathbb{N} \,\} \in \omega_1$, and the set $\{\, k \in \mathbb{N} : y_k \le \sigma \,\}$ is all of $\mathbb{N}$ and in particular infinite. [A1, L6, L7]

2.1 Let $\eta \in \gamma$ and suppose $[0,\zeta]$ is covered by finitely many members of $\mathcal{U}$ for every $\zeta < \eta$. Some $U \in \mathcal{U}$ contains $\eta$, and [L2] gives $B \in \mathcal{B}_\gamma$ with $\eta \in B \subseteq U$. If $B = [0,\beta]$ then $\eta \le \beta$ and $[0,\eta] \subseteq [0,\beta] \subseteq U$, so $\{U\}$ covers $[0,\eta]$. If $B = (\alpha,\beta]$ then $\alpha < \eta \le \beta$, and $[0,\eta] \subseteq [0,\alpha] \cup (\alpha,\eta] \subseteq [0,\alpha] \cup U$ by [L3], so a finite cover of $[0,\alpha]$ with $U$ adjoined covers $[0,\eta]$. Either way $\eta \in S$. [L2, L3, step 1.1]

2.2 A finite subfamily of the cover of step 1.2 is empty, and then covers only $\varnothing \ne \lambda$, or is $[0,\beta_0], \dots, [0,\beta_n]$ with union $[0,\beta]$ for $\beta$ the greatest of the $\beta_j$, which exists by [L3]; and $\beta^{+} \in \lambda$ by [L3] while $\beta^{+} \notin [0,\beta]$. So no finite subfamily covers $\lambda$ and $\lambda$ is not compact, which is claim 2. [L1, L3, step 1.2]

2.3 By [L5] and [L6] the set $\{\, \xi \in \omega_1 : \{k : y_k \le \xi\} \text{ is infinite} \,\}$ is a nonempty set of ordinals, $\sigma$ belonging to it by step 1.3, so it has a least element $\tau$ by [L3]; then $P := \{\, k \in \mathbb{N} : y_k \le \tau \,\}$ is infinite while $\{\, k : y_k \le \alpha \,\}$ is finite for every $\alpha < \tau$. [L3, L5, step 1.3]

3.1 By [L4] applied to the well-ordered $\gamma$, step 2.1 gives $S = \gamma$; in particular $\delta \in S$, so finitely many members of $\mathcal{U}$ cover $[0,\delta] = \gamma$. As $\mathcal{U}$ was arbitrary, $\gamma = \delta^{+}$ is compact, which is claim 1. [L1, L4, step 1.1, step 2.1]

3.2 Let $i \mapsto m_i$ be the strictly increasing enumeration of $P$ given by [L8]; then $(y_{m_i})$ is a subsequence of $(y_k)$ by [L9], and every one of its terms satisfies $y_{m_i} \le \tau$. [L8, L9, step 2.3]

4.1 $y_{m_i} \to \tau$. Let $U$ be open with $\tau \in U$ and take $B \in \mathcal{B}_{\omega_1}$ with $\tau \in B \subseteq U$ by [L2]. If $B = [0,\beta]$ then $\tau \le \beta$ and every term satisfies $y_{m_i} \le \tau \le \beta$, so all terms lie in $B$. If $B = (\alpha,\beta]$ then $\alpha < \tau \le \beta$, the set $\{k : y_k \le \alpha\}$ is finite by step 2.3, so $\{\, i : y_{m_i} \le \alpha \,\}$ is finite, the map $i \mapsto m_i$ being injective; hence $\alpha < y_{m_i} \le \tau \le \beta$ for all large $i$ and the terms lie in $B$ from some index on. So $\omega_1$ is sequentially compact. [L2, L9, step 2.3, step 3.2]

5.1 By [L10] the space $\omega_1$ is therefore countably compact; it is not compact by step 2.2, being a limit ordinal by [L5]; and $\omega_1 + 1 = \omega_1^{+}$ is compact by step 3.1 and [L11]. This is claim 3, and with claims 1 and 2 at steps 3.1 and 2.2 the theorem is proved. [L5, L10, L11, step 2.2, step 3.1, step 4.1] ∎

## Remarks

**Why claim 1 is a transfinite induction and not an ordinary one.** The statement being proved at $\eta$ uses the statement at $\alpha$ for a single $\alpha < \eta$ produced by the cover, not at the predecessor of $\eta$, and $\eta$ may have no predecessor. What the induction of [L4] gives is exactly the right shape: the step assumes the statement below $\eta$ and proves it at $\eta$, with no separate limit clause to write.

**$\omega_1$ separates sequential compactness from compactness.** It is sequentially compact and countably compact and not compact, so neither of those two properties implies compactness; that is the content of [[fs-sequentially-compact-implies-compact]] and [[fs-countably-compact-implies-compact]], both of which take their witness from here. The reason is visible in the proof: countably many terms cannot escape from $\omega_1$, because a countable set of countable ordinals has a countable supremum, while the uncountable cover by the initial segments has no finite subfamily covering everything.

**The hypothesis of countable choice is inherited, not added.** It enters through two cited results whose own statements carry it — [[thm-countable-subsets-of-omega-one-are-bounded]] at the boundedness step, and claim 2 of [[thm-compactness-variants-hierarchy]] at the passage from sequential to countable compactness; the boundedness of an at most countable subset of $\omega_1$ is what claim 3 rests on, and everything else in the argument takes least elements.
````

