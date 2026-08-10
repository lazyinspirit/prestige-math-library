# Independent repair certifier brief — Wave 12, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Use only non-mutating
> reads already available in the read-only sandbox. Do not edit, delegate,
> escalate, or ask for shell or edit permission.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of a repair or source
disposition you did not author.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned target's exact current final text from disk and compare its
hash with the dispatch task. For an item, read every dependency needed for the
repaired inference, the title/public statement, every numbered step, Facts &
Assumptions, Remarks, dependency list, provenance tags, sources, and
verification block. Check the named baseline defect is fixed without a new one
and that stale pre-repair judge/audited evidence is absent. Use web access when
an external source is material. For a source-correction task, open the retained
live source(s), compare the cited claim against them, and state whether the
final attribution and provenance class remain exact after the dead redundant
endpoint was removed.

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

Do not suggest optional polishing and do not write a verification stamp.


---

# This dispatch

## Assigned exact-final target — `cex-m-over-m-plus-n-has-noncommuting-iterated-limits`

Item path: `items/cex-m-over-m-plus-n-has-noncommuting-iterated-limits.md`

Normalized final-text SHA-256 at dispatch: `41b732e2053c7bf75556840dff6484e950aec7ddf173c20a83bd4b2449f047ec`

Target type(s): `A6-source-correction`

- A6 replaced an off-topic function-sequence route with Abbott's exact unequal-iterated-limit witness

Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.

Current generated-manifest rows:

```json
[
  {
    "source": "cex-m-over-m-plus-n-has-noncommuting-iterated-limits",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-m-over-m-plus-n-has-noncommuting-iterated-limits",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-m-over-m-plus-n-has-noncommuting-iterated-limits",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-m-over-m-plus-n-has-noncommuting-iterated-limits",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-m-over-m-plus-n-has-noncommuting-iterated-limits",
    "sourcePage": "uniform-convergence-of-functions-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

Current provenance row:

```json
{
  "id": "cex-m-over-m-plus-n-has-noncommuting-iterated-limits",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://link.springer.com/chapter/10.1007/978-1-4939-2712-8_2"
  ],
  "rationale": "Abbott, Understanding Analysis, 2nd ed., Exercise 2.3.13, gives the double sequence a_mn=m/(m+n) and asks for its two unequal iterated limits. The recorded URL is Springer’s official DOI chapter page for the same audited edition and chapter. The item shifts both positive indices to a zero-based natural convention so the first denominator is nonzero, reverses only the displayed order used to name the outer limits, and supplies the complete epsilon proof through the library’s canonical-natural and Archimedean interfaces. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

Exact current item at dispatch:

````markdown
---
id: cex-m-over-m-plus-n-has-noncommuting-iterated-limits
kind: counterexample
title: "The double sequence $(m+1)/(m+n+2)$ has unequal iterated limits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-limit, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stephen Abbott, Understanding Analysis, 2nd ed., Exercise 2.3.13"
      url: "https://link.springer.com/chapter/10.1007/978-1-4939-2712-8_2"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** whenever both iterated limits of a double real sequence
exist, they are equal.

For $m,n\in\mathbb{N}$ define

$$s_{m,n}:=\frac{\iota(m+1)}{\iota(m+n+2)}=\frac{\iota(m+1)}{\iota(m+1)+\iota(n+1)}.$$

Then

$$\lim_m\lim_ns_{m,n}=0,\qquad \lim_n\lim_ms_{m,n}=1.$$

The shifts make the expression defined at the first index $(m,n)=(0,0)$.

## Facts & Assumptions

**Given:** The double sequence $s_{m,n}$ in the Statement.

[L1] The canonical-natural map satisfies $\iota(0)=0$ and $\iota(r+1)=\iota(r)+1$; positive canonical naturals increase, and their reciprocals decrease ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L3] A real sequence converges when its terms are eventually within every positive error of the proposed limit ([[def-real-limit]]).

## Counterexample

**Proof technique:** direct.

1.1 The denominator $\iota(m+1)+\iota(n+1)$ is positive for all $m,n$, so every $s_{m,n}$ is defined and lies between $0$ and $1$. [L1, algebra]

1.2 Fix $m$ and put $a:=\iota(m+1)>0$. Then $0\le s_{m,n}\le a/\iota(n+1)$; given $\varepsilon>0$, [L2] makes the latter smaller than $\varepsilon$ for all sufficiently large $n$. Hence $\lim_ns_{m,n}=0$. [L1, L2, L3, choose, algebra]

1.3 Fix $n$ and put $b:=\iota(n+1)>0$. Since $|1-s_{m,n}|=b/(\iota(m+1)+b)\le b/\iota(m+1)$, [L2] makes this smaller than any prescribed $\varepsilon>0$ for all sufficiently large $m$. Hence $\lim_ms_{m,n}=1$. [L1, L2, L3, choose, algebra]

2.1 By step 1.2 the first inner-limit sequence is constantly $0$, so its limit in $m$ is $0$; by step 1.3 the other inner-limit sequence is constantly $1$, so its limit in $n$ is $1$. [step 1.2, step 1.3, L3]

3.1 Thus both iterated limits exist and are unequal, refuting the claim. [step 2.1] ∎
````
