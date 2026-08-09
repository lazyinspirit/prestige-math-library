## Selection reasons

- critical risk (9): 9 declared dependencies; 9 cited facts; existence, choice, uniqueness, or well-definedness; analytic limiting/completeness language

## Target item — `cex-paracompactness-is-not-productive`

Normalized current SHA-256: `e547b28b1fca86b4873ed305206a33d8fcd17373f7dfa2f5742fc4c73ca0c8fc`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-paracompactness-is-not-productive
kind: counterexample
title: "Assuming choice, two paracompact lower-limit lines can have a nonparacompact product"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-lower-limit-line-is-regular-and-lindelof, lem-regular-lindelof-spaces-are-paracompact, thm-normality-is-not-productive, lem-products-preserve-t0-t1-and-hausdorff, thm-paracompact-hausdorff-implies-normal, def-lower-limit-topology, def-hausdorff-space, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane and Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement refuted

Assuming the Axiom of Choice, a product of paracompact spaces is paracompact.

## Facts & Assumptions

**Given:** The lower-limit line $L$ under the Axiom of Choice.

[A1] Choice implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] If $x<y$ in $L$, then $[x,y)$ and $[y,y+1)$ are disjoint open neighbourhoods, so $L$ is Hausdorff ([[def-lower-limit-topology]], [[def-hausdorff-space]]).

[L1] The lower-limit line is regular and Lindelöf; under countable choice every regular Lindelöf space is paracompact ([[lem-lower-limit-line-is-regular-and-lindelof]], [[lem-regular-lindelof-spaces-are-paracompact]]).

[L2] Under choice, $L^2$ is not normal ([[thm-normality-is-not-productive]]).

[L3] The product of Hausdorff spaces is Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

[L4] A paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).

## Counterexample

**Proof technique:** direct.

1.1 By [A1] and [L1], both factors $L$ are paracompact. [A1, L1]

2.1 If $L^2$ were paracompact, [F1] and [L3] would make it Hausdorff, and [L4] would then make it normal, contradicting [L2]. [F1, L2, L3, L4, step 1.1]

3.1 Thus two paracompact spaces have a nonparacompact product, refuting the displayed assertion. [step 2.1] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-paracompactness-is-not-productive",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf",
    "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
  ],
  "rationale": "The sources give the same lower-limit/Sorgenfrey-line factors and nonparacompact square. The item is a shortened counterexample pointing to the page's fully expanded false-statement refutation, with Choice explicit.",
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
      "quote": "Every family of nonempty sets has a choice function",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-lower-limit-topology",
      "source_section": "Definition",
      "quote": "Let $\\mathcal B_\\ell=\\{[a,b):a,b\\in\\mathbb R,\\ a<b\\}$. The **lower-limit topology** $\\mathcal T_\\ell$ on $\\mathbb R$ is the topology having $\\mathcal B_\\ell$ as a basis. The resulting space is the **lower-limit line**.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is\n**Hausdorff** when any two distinct points are separated by disjoint open sets:",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-lower-limit-line-is-regular-and-lindelof",
      "source_section": "Statement",
      "quote": "The lower-limit line has a basis of clopen sets and is regular. Assuming the Axiom of Countable Choice, it is Lindelöf.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-regular-lindelof-spaces-are-paracompact",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Countable Choice. Every regular Lindelöf topological space\nis paracompact.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-normality-is-not-productive",
      "source_section": "Statement",
      "quote": "Assuming the Axiom of Choice, the lower-limit line is normal but its square is not normal. Hence normality is not productive, even for a product of two factors.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-products-preserve-t0-t1-and-hausdorff",
      "source_section": "Statement",
      "quote": "For any family $(X_i)_{i\\in I}$, if every $X_i$ is $T_0$, respectively $T_1$, respectively Hausdorff, then $\\prod_{i\\in I}X_i$ is respectively $T_0$, $T_1$, respectively Hausdorff. The empty product is included.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-paracompact-hausdorff-implies-normal",
      "source_section": "Statement",
      "quote": "Every paracompact Hausdorff topological space is normal. No choice principle is\nused.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "By [A1] and [L1], both factors $L$ are paracompact. [A1, L1]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "If $L^2$ were paracompact, [F1] and [L3] would make it Hausdorff, and [L4] would then make it normal, contradicting [L2]. [F1, L2, L3, L4, step 1.1]",
      "step": "2.1",
      "inputs": [
        "F1",
        "L2",
        "L3",
        "L4",
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Thus two paracompact spaces have a nonparacompact product, refuting the displayed assertion. [step 2.1]",
      "step": "3.1",
      "inputs": [
        "2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The fixed lower-limit-line factors are nonempty."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and steps 1.1--2.1 include 0 as an ordinary point of L."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1--2.1 use a binary product, the first nontrivial finite-product case."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The fixed factors are not singleton or empty spaces."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Fact F1 and step 2.1 respect the half-open basis endpoints used to prove Hausdorffness."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 invokes countable choice through A1 and L1; the contradiction uses no further selection."
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
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "lem-lower-limit-line-is-regular-and-lindelof",
    "declared_target": "lem-lower-limit-line-is-regular-and-lindelof",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "lem-regular-lindelof-spaces-are-paracompact",
    "declared_target": "lem-regular-lindelof-spaces-are-paracompact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "thm-normality-is-not-productive",
    "declared_target": "thm-normality-is-not-productive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "lem-products-preserve-t0-t1-and-hausdorff",
    "declared_target": "lem-products-preserve-t0-t1-and-hausdorff",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "thm-paracompact-hausdorff-implies-normal",
    "declared_target": "thm-paracompact-hausdorff-implies-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "def-lower-limit-topology",
    "declared_target": "def-lower-limit-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
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
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
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
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
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

## Full text of every cited or declared item (9)

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

### `def-countable-choice`

````markdown
---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
external_refs: [rem-feferman-levy-model, rem-cohen-first-model]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **$\mathrm{AC}_\omega$ is strictly weaker than the Axiom of Choice**
  ([[def-axiom-of-choice]]): AC implies it immediately, since AC applies to every
  family, while it is consistent with ZF that $\mathrm{AC}_\omega$ holds and AC
  fails. **It is also strictly stronger than what ZF proves**: it is consistent
  with ZF that $\mathrm{AC}_\omega$ fails, as Cohen's first model shows, since an
  infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]) is already a failure of $\mathrm{AC}_\omega$; the
  Feferman-Levy model ([[rem-feferman-levy-model]]) is a second witness. Both
  statements are conditional on the consistency of ZF and are external results,
  established by forcing and by permutation models; they are recorded here with
  references and are **not** proved in this library, which contains neither
  technique. Of the two, only the failure of $\mathrm{AC}_\omega$ is recorded in
  this library's catalogue of unproved results; the separation of
  $\mathrm{AC}_\omega$ from AC in the other direction is quoted from the
  references alone.

- **Dependent choice sits between them.** The Axiom of Dependent Choice
  (DC) says that if $R$ is a relation on a nonempty set $X$ such that every
  $x \in X$ has some $y$ with $x \mathbin{R} y$, then there is a sequence
  $(x_n)_{n \in \mathbb{N}}$ with $x_n \mathbin{R} x_{n+1}$ for all $n$. In ZF,
  $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$; both
  implications are theorems of ZF, and neither is proved here. That neither
  reverses is a pair of relative-consistency results of the same kind as in the
  previous bullet: if ZF is consistent, then so are ZF + DC + (not AC) and
  ZF + $\mathrm{AC}_\omega$ + (not DC). Both are established by forcing and by
  permutation models, are quoted here from the references rather than proved, and
  cannot be stated without the consistency hypothesis; so "DC is *strictly*
  between AC and $\mathrm{AC}_\omega$" is shorthand for those two conditional
  statements and is never used here as a standalone assertion. DC is the
  principle that legitimises "choose $x_0$, then choose $x_1$ depending on
  $x_0$, and so on"; $\mathrm{AC}_\omega$ only legitimises countably many
  *independent* choices made at once.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the exact
  step that spends it, and [[fs-countable-union-theorem-of-zf]] records that the
  assumption cannot be removed.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so. The false
  statements at the end of the page are not all of that kind, and the claim above
  does not cover them: two of the three refute a ZF-provability claim only under
  the hypothesis that ZF is consistent, quoting an external independence result
  rather than proving it, and they say so in their own Facts.
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

### `def-lower-limit-topology`

````markdown
---
id: def-lower-limit-topology
kind: definition
title: "The lower-limit topology on $\\mathbb{R}$, with the half-open intervals $[a,b)$ as a basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval, thm-basis-criterion, def-topology-basis-subbasis]
aliases: [def-sorgenfrey-line]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, Sorgenfrey line"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
pipeline_run: null
---

## Definition

Let $\mathcal B_\ell=\{[a,b):a,b\in\mathbb R,\ a<b\}$. The **lower-limit topology** $\mathcal T_\ell$ on $\mathbb R$ is the topology having $\mathcal B_\ell$ as a basis. The resulting space is the **lower-limit line**.

This basis is well defined. It covers $\mathbb R$, because $x\in[x,x+1)$ for every $x$. If $x\in[a,b)\cap[c,d)$, then $x\in[\max(a,c),\min(b,d))$, whose right endpoint exceeds $x$ and which lies inside the intersection. Thus the two basis conditions of [[thm-basis-criterion]] hold, so $\mathcal B_\ell$ determines a unique topology.

The lower-limit topology is finer than the usual topology: if $x\in(a,b)$, then $[x,(x+b)/2)$ is a lower-limit basic interval containing $x$ and contained in $(a,b)$. No equality with the usual topology is asserted here. The half-open intervals use the interval convention of [[def-interval]], and opens are exactly unions of basis members by [[def-topology-basis-subbasis]].
````

### `lem-lower-limit-line-is-regular-and-lindelof`

````markdown
---
id: lem-lower-limit-line-is-regular-and-lindelof
kind: lemma
title: "The lower-limit line has a clopen basis, is regular, and is Lindelöf under countable choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lower-limit-topology, lem-regularity-via-closed-neighbourhoods, def-compactness-variants, thm-rationals-countable, lem-rat-embeds-dense, def-countable-choice]
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
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, Sorgenfrey line"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement

The lower-limit line has a basis of clopen sets and is regular. Assuming the Axiom of Countable Choice, it is Lindelöf.

## Facts & Assumptions

**Given:** The lower-limit line and, for the Lindelöf assertion, the Axiom of Countable Choice.

[F1] Its basic open sets are the intervals $[a,b)$ ([[def-lower-limit-topology]]).

[L1] A clopen neighbourhood basis gives regularity through the closed-neighbourhood characterization ([[lem-regularity-via-closed-neighbourhoods]]).

[L2] $\mathbb Q$ is countably infinite and is dense in $\mathbb R$ ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[A1] The Axiom of Countable Choice ([[def-countable-choice]]).

[F2] Lindelöf means that every open cover has an at most countable subcover ([[def-compactness-variants]]).

## Proof

**Proof technique:** direct.

1.1 Each $[a,b)$ is clopen: its complement is $(-\infty,a)\cup[b,\infty)$, a union of lower-limit basic intervals. Hence the line is regular by [L1]. [F1, L1]

1.2 Let $\mathcal U$ be an open cover and let $O$ be the union of the usual intervals $(a,b)$ for which $[a,b)$ lies in a member of $\mathcal U$. The rational-endpoint intervals $[p,q)$ contained in members of $\mathcal U$ cover $O$; they form an at most countable family by [L2]. [F1, L2]

1.3 Put $D=\mathbb R\setminus O$. For $x\in D$, some $[x,b_x)$ lies in a member of $\mathcal U$, and $[x,b_x)\cap D=\{x\}$. The first rational $q_x\in(x,b_x)$ in a fixed enumeration exists, and the intervals $(x,q_x)$ are pairwise disjoint; their first rationals $r_x$ are therefore distinct. Thus $x\mapsto r_x$ injects $D$ into $\mathbb Q$, so $D$ is at most countable. [F1, L2]

2.1 By [A1], choose one member of $\mathcal U$ covering each point of the at most countable set $D$. Together with one covering member for each rational-endpoint interval used in step 1.2, these form an at most countable subcover of $\mathcal U$. [A1, L2, step 1.2, step 1.3]

3.1 Therefore the lower-limit line is Lindelöf under countable choice. [F2, step 2.1] ∎
````

### `lem-products-preserve-t0-t1-and-hausdorff`

````markdown
---
id: lem-products-preserve-t0-t1-and-hausdorff
kind: lemma
title: "Arbitrary products preserve $T_0$, $T_1$, and Hausdorffness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-topology, thm-product-universal-property, def-t0-and-t1-spaces, def-hausdorff-space]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

For any family $(X_i)_{i\in I}$, if every $X_i$ is $T_0$, respectively $T_1$, respectively Hausdorff, then $\prod_{i\in I}X_i$ is respectively $T_0$, $T_1$, respectively Hausdorff. The empty product is included.

## Facts & Assumptions

**Given:** A family of spaces with the indicated separation property and two distinct points $x,y$ of its product $P$.

[F1] Distinct product points differ at a coordinate, and $\pi_i^{-1}[U]$ is open whenever $U$ is open in $X_i$ ([[def-product-topology]], [[thm-product-universal-property]]).

[F2] The $T_0$, $T_1$, and Hausdorff conditions are respectively the stated one-sided, two-sided, and disjoint-open separations of distinct points ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 If $I=\varnothing$, the product has one point and all three conditions hold vacuously. [F2]

1.2 Otherwise choose $i\in I$ with $x_i\ne y_i$. For a $T_0$ factor, the inverse image under $\pi_i$ of an open set distinguishing $x_i,y_i$ distinguishes $x,y$. [F1, F2]

1.3 For a $T_1$ factor, pull back the two open sets separating $x_i$ from $y_i$ and $y_i$ from $x_i$. [F1, F2]

1.4 For a Hausdorff factor, pull back disjoint open neighbourhoods of $x_i,y_i$; their inverse images remain disjoint. [F1, F2]

2.1 Thus the product has the relevant property in every case. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
````

### `lem-regular-lindelof-spaces-are-paracompact`

````markdown
---
id: lem-regular-lindelof-spaces-are-paracompact
kind: lemma
title: "Under countable choice, every regular Lindelöf space is paracompact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-paracompact-space, def-compactness-variants, lem-regularity-via-closed-neighbourhoods, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every regular Lindelöf topological space
is paracompact.

## Facts & Assumptions

**Given:** Countable choice, a regular Lindelöf space $X$, and an open cover $\mathcal U$.

[A1] Countable choice selects from a countably indexed family of nonempty sets ([[def-countable-choice]]).

[L1] If $x\in U$ with $U$ open in a regular space, then some open $V$ satisfies $x\in V\subseteq\overline V\subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[F1] Lindelöfness gives an at most countable subcover, and paracompactness asks for a locally finite open refinement ([[def-compactness-variants]], [[def-paracompact-space]]).

## Proof

**Proof technique:** constructive.

1.1 The family of all open $V$ for which $\overline V\subseteq U$ for some $U\in\mathcal U$ covers $X$ by [L1]; by Lindelöfness take a sequence $V_0,V_1,\ldots$ covering $X$. [L1, F1, construct]

2.1 By [A1], choose $U_n\in\mathcal U$ with $\overline{V_n}\subseteq U_n$ for each $n$. [A1, step 1.1, choose]

3.1 Put $W_n:=U_n\setminus\bigcup_{i<n}\overline{V_i}$. Each $W_n$ is open and lies in $U_n$. [step 2.1, construct]

4.1 The $W_n$ cover $X$: if $n$ is the least index with $x\in U_n$, then $x\notin\overline{V_i}$ for $i<n$, since $\overline{V_i}\subseteq U_i$, and hence $x\in W_n$. [step 1.1, step 2.1, step 3.1]

4.2 The cover is locally finite: for $x\in V_k$, the neighbourhood $V_k$ is disjoint from $W_n$ for every $n>k$, while it can meet only $W_0,\ldots,W_k$. [step 3.1]

5.1 Thus $\{W_n\}$ is a locally finite open refinement of $\mathcal U$, and [F1] proves paracompactness. [F1, step 3.1, step 4.1, step 4.2, discharge-construct] ∎
````

### `thm-normality-is-not-productive`

````markdown
---
id: thm-normality-is-not-productive
kind: theorem
title: "Assuming choice, normality is not productive: the normal lower-limit line has a nonnormal square"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-choice, def-countable-choice, cor-lower-limit-line-is-normal, lem-jones-normal-density-discrete-bound, lem-lower-limit-plane-antidiagonal, thm-cardinal-power-set-and-cantor, thm-schroder-bernstein, thm-cantor-set-ternary-description, thm-rationals-countable, lem-of-q-dense]
aliases: []
landmark: true
proof_strategy: contradiction
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
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane and Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
    - title: "Sorgenfrey plane (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, the lower-limit line is normal but its square is not normal. Hence normality is not productive, even for a product of two factors.

## Facts & Assumptions

**Given:** The Axiom of Choice and the lower-limit line $L$.

[A1] The Axiom of Choice supplies a choice function for every family of nonempty sets, hence for every countably indexed family, which is the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Under the Axiom of Countable Choice, the lower-limit line is normal ([[cor-lower-limit-line-is-normal]]).

[L1] Jones's lemma injects $\mathcal P(D)$ into $\mathcal P(E)$ when a normal space has closed discrete $D$ and dense $E$ ([[lem-jones-normal-density-discrete-bound]]).

[L2] The plane $L^2$ has $E=\mathbb Q^2$ at most countable and $D=\{(x,-x):x\in\mathbb R\}$ closed discrete with $D\approx\mathbb R$ ([[lem-lower-limit-plane-antidiagonal]]).

[L3] Cantor's theorem gives no injection $\mathcal P(\mathcal P(\mathbb N))\to\mathcal P(\mathbb N)$, and Schröder-Bernstein turns injections both ways into a bijection ([[thm-cardinal-power-set-and-cantor]], [[thm-schroder-bernstein]]).

[L4] The ternary Cantor-set coding injects $\mathcal P(\mathbb N)$ into $\mathbb R$, while $x\mapsto\{q\in\mathbb Q:q<x\}$ injects $\mathbb R$ into $\mathcal P(\mathbb Q)$; a rational between distinct reals makes the latter map injective, and $\mathbb Q\approx\mathbb N$ ([[thm-cantor-set-ternary-description]], [[lem-of-q-dense]], [[thm-rationals-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 By [A1] and [F1], $L$ is normal. Suppose, for a contradiction, that $L^2$ is normal. [A1, F1, assume-contra]

1.2 Jones's lemma applied to the $D,E$ of [L2] injects $\mathcal P(D)$ into $\mathcal P(E)$. [L1, L2]

1.3 The two injections of [L4], with the fixed bijection $\mathbb Q\approx\mathbb N$, give $\mathbb R\approx\mathcal P(\mathbb N)$ by Schröder-Bernstein. Therefore $D\approx\mathcal P(\mathbb N)$, while $E\preceq\mathbb N$. [L2, L3, L4]

2.1 Taking direct images under these injections turns step 1.2 into an injection $\mathcal P(\mathcal P(\mathbb N))\to\mathcal P(\mathbb N)$. [step 1.2, step 1.3]

3.1 This contradicts Cantor's theorem in [L3]. Therefore $L^2$ is not normal, while $L$ is normal, proving nonproductivity. [L3, step 1.1, step 2.1, discharge-contradiction] ∎
````

### `thm-paracompact-hausdorff-implies-normal`

````markdown
---
id: thm-paracompact-hausdorff-implies-normal
kind: theorem
title: "Every paracompact Hausdorff space is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-paracompact-space, lem-paracompact-hausdorff-is-regular, lem-locally-finite-unions-and-closures, def-hausdorff-space, def-normal-and-t4-spaces]
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
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Every paracompact Hausdorff topological space is normal. No choice principle is
used.

## Facts & Assumptions

**Given:** A paracompact Hausdorff space $X$ and disjoint closed subsets $E,F\subseteq X$.

[L1] The space $X$ is regular ([[lem-paracompact-hausdorff-is-regular]]).

[L2] A locally finite family commutes with closure under union ([[lem-locally-finite-unions-and-closures]]).

[F1] Paracompactness supplies a locally finite open refining cover ([[def-paracompact-space]]).

[F2] Normality is separation of disjoint closed sets by disjoint open sets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in E$, regularity supplies an open $U$ containing $x$ with $\overline U\cap F=\varnothing$; therefore the family of all such $U$, together with $X\setminus E$, is an open cover $\mathcal U$ of $X$. [L1, construct]

2.1 Take a locally finite open cover $\mathcal W$ refining $\mathcal U$, and set $H:=\bigcup\{W\in\mathcal W:W\cap E\ne\varnothing\}$. [F1, step 1.1, choose, construct]

3.1 The open set $H$ contains $E$, because a member of $\mathcal W$ containing a point of $E$ cannot lie inside $X\setminus E$. [step 1.1, step 2.1]

3.2 Every member $W$ used in $H$ lies in one of the eligible $U$ and so has $\overline W\cap F=\varnothing$; hence $\overline H=\bigcup\overline W$ is disjoint from $F$ by [L2]. [step 1.1, step 2.1, L2]

4.1 The open sets $H$ and $X\setminus\overline H$ contain $E$ and $F$ respectively and are disjoint, so [F2] proves normality. [step 3.1, step 3.2, F2] ∎
````

