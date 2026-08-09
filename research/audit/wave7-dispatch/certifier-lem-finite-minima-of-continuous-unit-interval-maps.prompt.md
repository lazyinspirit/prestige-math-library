# Independent repair certifier brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of one Audit-Beta repair.
You did not author it. Your Codex lane has a mechanically read-only shell: use
non-mutating commands such as `rg`, `sed`, and `git diff` to read the current
workspace and use web access where a source check is material. Do not edit,
delegate, escalate, or ask for a shell permission. Shell reads already allowed
inside the read-only sandbox require no owner approval.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned item's **current final text from disk**, not merely its task
summary. Read each dependency relevant to the repaired inference. Check the
title and public statement, every numbered step, Facts & Assumptions, Remarks,
dependency lists, provenance tags, and verification block. Where an exact
external source is material, use web access to check that source. Confirm that
stale pre-repair `verification.judge`/`verification.audited` evidence is absent
and that the stated repair fixes its named defect without introducing a new
one. A passing mechanical gate is supporting evidence, not a mathematical
substitute.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp. Audit-
Alpha decides whether the independent reading licenses one.


---

# This dispatch

## Assigned repair — `lem-finite-minima-of-continuous-unit-interval-maps`

Item path: `items/lem-finite-minima-of-continuous-unit-interval-maps.md`

Normalized final-text SHA-256 at dispatch: `2c239396af86d1052da0bee9d39f19dfe6fdb5151a4dcbda9cd4926ba09768a8`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-topology-separation-urysohn.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "lem-finite-minima-of-continuous-unit-interval-maps",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-finite-minima-of-continuous-unit-interval-maps",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "lem-finite-minima-of-continuous-unit-interval-maps",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "lem-finite-minima-of-continuous-unit-interval-maps",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-continuity-characterisations-top",
    "declared_target": "thm-continuity-characterisations-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-finite-minima-of-continuous-unit-interval-maps",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-finite-minima-of-continuous-unit-interval-maps",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-finite-minima-of-continuous-unit-interval-maps",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-topology-basis-subbasis",
    "declared_target": "def-topology-basis-subbasis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-finite-minima-of-continuous-unit-interval-maps",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: lem-finite-minima-of-continuous-unit-interval-maps
kind: lemma
title: "Finite pointwise minima of continuous maps to $[0,1]$ are continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-map-top, def-product-topology, thm-product-universal-property,
       thm-continuity-characterisations-top, def-interval,
       lem-real-line-is-a-metric-space, def-topology-basis-subbasis,
       def-subspace-topology-top]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. R. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Boundedness Properties in Functionlattices (Canadian Journal of Mathematics)"
      url: "https://www.cambridge.org/core/journals/canadian-journal-of-mathematics/article/boundedness-properties-in-functionlattices/E0BB364483D015D69B96D40631B4F805"
pipeline_run: null
---

## Statement

If $f_0,\ldots,f_{n-1}:X\to[0,1]$ are continuous, then $x\mapsto\min_{i<n}f_i(x)$ is continuous; for $n=0$ this minimum is the constant-one map.

## Facts & Assumptions

**Given:** A space $X$ and a finite family of continuous maps $f_i:X\to[0,1]$.

[F1] The product of two continuous maps is continuous into the product, and a map is continuous exactly when inverse images of open sets are open ([[thm-product-universal-property]], [[thm-continuity-characterisations-top]]).

[F2] In the usual topology of $\mathbb R$, a set is open exactly when each of its points lies in a bounded open interval contained in it; bases trace to subspaces, so the sets $(a,b)\cap[0,1]$ form a basis for $[0,1]$ ([[lem-real-line-is-a-metric-space]], clause 3; [[def-topology-basis-subbasis]]; [[def-subspace-topology-top]]).

## Proof

**Proof technique:** induction.

1.1 The map $m:[0,1]^2\to[0,1]$, $m(s,t)=\min(s,t)$ is continuous: for an interval $(a,b)$, $m^{-1}((a,b))=\{s>a,t>a\}\cap(\{s<b\}\cup\{t<b\})$, which is open in the product. [F2]

1.2 The empty minimum is constant one, hence continuous, and the one-term minimum is $f_0$. [given, base]

2.1 Assume the minimum $g_n=\min_{i<n}f_i$ is continuous. Then $(g_n,f_n):X\to[0,1]^2$ is continuous and $g_{n+1}=m\circ(g_n,f_n)$ is continuous. [F1, step 1.1, ih]

3.1 Induction gives the claim for every finite family. [step 1.2, step 2.1, discharge-induction] ∎
````
