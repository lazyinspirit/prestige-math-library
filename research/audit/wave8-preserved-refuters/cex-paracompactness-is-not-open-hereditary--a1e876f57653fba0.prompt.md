# Audit proof-refuter brief — Wave 8, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

## Selection reasons

- critical risk (8): 4 declared dependencies; 4 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language

## Target item — `cex-paracompactness-is-not-open-hereditary`

Normalized current SHA-256: `ab9056157a6eb15664a8fa89b91b1d4c883cf210ee370ecbeef725054c047b6a`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-paracompactness-is-not-open-hereditary
kind: counterexample
title: 'Assuming choice, paracompactness is not open-hereditary: $\omega_1$ inside $\omega_1+1$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-omega-one-is-not-paracompact, prop-compact-spaces-are-paracompact, thm-ordinal-spaces-and-compactness, lem-ordinal-order-topology-is-t3]
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

## Statement refuted

Assuming the Axiom of Choice, every open subspace of a paracompact space is
paracompact.

## Facts & Assumptions

**Given:** The ordinal inclusion $\omega_1\subseteq\omega_1+1$ under the Axiom of Choice.

[L1] The space $\omega_1$ is not paracompact ([[ex-omega-one-is-not-paracompact]]).

[L2] The successor ordinal $\omega_1+1$ is compact ([[thm-ordinal-spaces-and-compactness]]).

[L3] Compact spaces are paracompact ([[prop-compact-spaces-are-paracompact]]).

[L4] Ordinal order topologies are $T_1$, so their singleton subsets are closed ([[lem-ordinal-order-topology-is-t3]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L2] and [L3], $\omega_1+1$ is paracompact. [L2, L3]

1.2 Its subspace $\omega_1$ is open, as the complement consisting of the top endpoint is closed by [L4]. [L4]

2.1 The open subspace $\omega_1$ is not paracompact by [L1], which refutes the displayed assertion. [L1, step 1.1, step 1.2] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-paracompactness-is-not-open-hereditary",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf",
    "https://public.csusm.edu/aitken_html/Essays/Topology/compactness.pdf"
  ],
  "rationale": "The standard counterexample is omega_1 as the open initial segment of compact omega_1+1, with omega_1 nonparacompact. The item restates it under explicit Choice and gives the short local verification from the cited ordinal facts.",
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
      "fact": "L1",
      "source": "ex-omega-one-is-not-paracompact",
      "source_section": "Example",
      "quote": "Assume the Axiom of Choice. The ordinal space $\\omega_1$ is Hausdorff,\ncountably compact, and noncompact by\n[[thm-ordinal-spaces-and-compactness]] and\n[[lem-ordinal-order-topology-is-t3]]. If it were paracompact, then\n[[lem-countably-compact-paracompact-hausdorff-is-compact]] would make it compact.\nIt is therefore not paracompact.\n\nThe use of Choice includes the countable choice hypothesis of the cited ordinal\ncompactness result.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-ordinal-spaces-and-compactness",
      "source_section": "Statement",
      "quote": "Every ordinal carries the order topology of the membership order on it\n([[def-ordinal]], [[def-order-topology-on-a-linearly-ordered-set]]), with the\nclopen basis $\\mathcal{B}_\\gamma$ of\n[[lem-the-order-topology-on-an-ordinal]]. Then:\n\n1. **Successors are compact.** For every ordinal $\\delta$ the successor ordinal\n   $\\delta^{+}$ is compact ([[def-compact-space]]).\n2. **Limits are not.** No limit ordinal ([[def-limit-ordinal]]) is compact.\n3. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]): the\n   first uncountable ordinal $\\omega_1$ ([[def-first-uncountable-ordinal]]) is\n   sequentially compact and countably compact ([[def-compactness-variants]]),\n   and it is not compact; while $\\omega_1 + 1$ is compact\n   ([[def-ordinal-addition]]).\n\nClaims 1 and 2 are theorems of ZF. Claim 3 spends countable choice twice, both\ntimes through cited results that carry the hypothesis in their own statements:\n[[thm-countable-subsets-of-omega-one-are-bounded]], which supplies the\nboundedness of at most countable subsets of $\\omega_1$, and claim 2 of\n[[thm-compactness-variants-hierarchy]], which converts sequential compactness\ninto countable compactness; the extraction of a subsequence below selects\nnothing, taking least elements throughout.",
      "uses": [
        "1.1"
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
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "By [L2] and [L3], $\\omega_1+1$ is paracompact. [L2, L3]",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Its subspace $\\omega_1$ is open, as the complement consisting of the top endpoint is closed by [L4]. [L4]",
      "step": "1.2",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The open subspace $\\omega_1$ is not paracompact by [L1], which refutes the displayed assertion. [L1, step 1.1, step 1.2]",
      "step": "2.1",
      "inputs": [
        "L1",
        "1.1",
        "1.2"
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
      "evidence": "Statement and steps 1.1--1.2 include the least ordinal 0."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.2 treats the singleton top-endpoint complement."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The fixed ordinal inclusion has distinct ambient and subspace ordinals."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.1--1.2 distinguish the open initial segment from the top endpoint."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "The Statement assumes Choice; steps 1.1--2.1 invoke only cited results already carrying that hypothesis."
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
    "source": "cex-paracompactness-is-not-open-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "ex-omega-one-is-not-paracompact",
    "declared_target": "ex-omega-one-is-not-paracompact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness-examples",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-open-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
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
    "source": "cex-paracompactness-is-not-open-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
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
    "source": "cex-paracompactness-is-not-open-hereditary",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "lem-ordinal-order-topology-is-t3",
    "declared_target": "lem-ordinal-order-topology-is-t3",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
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

## Full text of every cited or declared item (4)

### `ex-omega-one-is-not-paracompact`

````markdown
---
id: ex-omega-one-is-not-paracompact
kind: example
title: 'Assuming choice, $\omega_1$ is countably compact, noncompact, and not paracompact'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: [lem-countably-compact-paracompact-hausdorff-is-compact, thm-ordinal-spaces-and-compactness, lem-ordinal-order-topology-is-t3, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
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
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "G. Gruenhage, General Topology Course Notes"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice. The ordinal space $\omega_1$ is Hausdorff,
countably compact, and noncompact by
[[thm-ordinal-spaces-and-compactness]] and
[[lem-ordinal-order-topology-is-t3]]. If it were paracompact, then
[[lem-countably-compact-paracompact-hausdorff-is-compact]] would make it compact.
It is therefore not paracompact.

The use of Choice includes the countable choice hypothesis of the cited ordinal
compactness result.
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

