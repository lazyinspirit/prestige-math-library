## Assigned repair — `thm-continuous-image-of-a-compact-set-r`

Item path: `items/thm-continuous-image-of-a-compact-set-r.md`

Normalized final-text SHA-256 at dispatch: `a5d7a5f1807ae9e80a7ae3a80a1e03a7dec29925403525323af0e1addf3c9177`

Split reasons: ["body text"]

Provenance ledger: `wave8-real-analysis-cantor-continuity.provenance.jsonl`

The three Wave 8 findings ledgers and wave8-A3.md record the original defect and approved repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-continuous-image-of-a-compact-set-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-image-of-a-compact-set-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-cover-r",
    "declared_target": "def-open-cover-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-image-of-a-compact-set-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-continuous-image-of-a-compact-set-r",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
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
id: thm-continuous-image-of-a-compact-set-r
kind: theorem
title: "The image of a compact subset of $\\mathbb{R}$ under a continuous real function is compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, def-open-cover-r, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "continuous image of a compact set"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be compact in the sense of
[[def-open-cover-r]], that is, every family of open subsets of $\mathbb{R}$
whose union contains $K$ has a finite subfamily whose union contains $K$. Then
the image

$$f[K] \;:=\; \{\, f(x) : x \in K \,\}$$

is a compact subset of $\mathbb{R}$.

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-continuous-image-of-a-compact-space-is-compact]], proved from the
cover machinery of metric spaces; the proof below is $\mathbb{R}$-native and
uses only open subsets of $\mathbb{R}$ and the definition of continuity of this
page. The duplication is deliberate and is acknowledged in exactly one place,
[[lem-real-and-metric-notions-agree]] later on this page, which proves that the
two notions of "compact subset of $\mathbb{R}$" and the two notions of
"continuous" coincide, so that the two theorems really are the same statement in
two vocabularies.

**No choice principle is used.** The covering family built below is cut out by a
property rather than selected point by point, and the only selection made is
from a *finite* list, which needs no axiom.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a compact set $K \subseteq A$; $f[K] = \{\, f(x) : x \in K \,\}$.

[L1] Continuity of $f$ at $x \in A$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(y) - f(x)| < \varepsilon$ for every $y \in A$ satisfying $|y - x| < \delta$; equivalently $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x))$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Open sets: $V \subseteq \mathbb{R}$ is open when every point of $V$ has a neighbourhood inside $V$, and every neighbourhood $N_{\delta}(x)$ is itself an open set containing $x$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] Compactness of $K$: for every family $\mathcal{W}$ of open subsets of $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{W}$, either $K = \varnothing$ and the empty subfamily covers it, or there are $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{W}$ with $K \subseteq W_0 \cup \dots \cup W_n$ ([[def-open-cover-r]]).

## Proof

**Proof technique:** direct.

1.1 If $K = \varnothing$, then $f[K] = \varnothing$, which is compact by [L3]. Hence suppose $K \ne \varnothing$ for the rest of the proof. [L3, cases]

1.2 Let $\mathcal{V}$ be a family of open subsets of $\mathbb{R}$ with $f[K] \subseteq \bigcup \mathcal{V}$. Define $$\mathcal{W} \;:=\; \bigl\{\, N_{\delta}(x) \ : \ x \in K,\ \delta \in \mathbb{R},\ \delta > 0,\ \text{and } f\bigl(K \cap N_{\delta}(x)\bigr) \subseteq V \text{ for some } V \in \mathcal{V} \,\bigr\}.$$ This family is cut out by a property of the pair $(x,\delta)$, so it is a set and nothing is selected in forming it; every member is an open subset of $\mathbb{R}$ by [L2]. [L2]

2.1 **$\mathcal{W}$ covers $K$.** Let $x \in K$. Then $x \in A$ and $f(x) \in f[K] \subseteq \bigcup \mathcal{V}$, so $f(x) \in V$ for some $V \in \mathcal{V}$. As $V$ is open, [L2] gives a real $\varepsilon > 0$ with $N_{\varepsilon}(f(x)) \subseteq V$, and [L1] gives a real $\delta > 0$ with $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x)) \subseteq V$. Since $K \subseteq A$ we get $f\bigl(K \cap N_{\delta}(x)\bigr) \subseteq V$, so $N_{\delta}(x) \in \mathcal{W}$, and $x \in N_{\delta}(x)$ by [L2]. Hence $K \subseteq \bigcup \mathcal{W}$. [step 1.2, L1, L2]

3.1 By [L3] there are $n \in \mathbb{N}$ and members $W_0, \dots, W_n$ of $\mathcal{W}$ with $K \subseteq W_0 \cup \dots \cup W_n$. For each $i \le n$ the membership $W_i \in \mathcal{W}$ asserts the existence of some $V \in \mathcal{V}$ with $f(K \cap W_i) \subseteq V$; naming one such $V_i$ for each of the finitely many indices $i \le n$ requires no choice principle. [step 1.1, step 1.2, step 2.1, L3, choose]

4.1 **The finite subfamily works.** Let $z \in f[K]$, say $z = f(x)$ with $x \in K$. By step 3.1 there is $i \le n$ with $x \in W_i$, hence $x \in K \cap W_i$ and $z = f(x) \in V_i$. Therefore $f[K] \subseteq V_0 \cup \dots \cup V_n$, a union of finitely many members of $\mathcal{V}$. [step 3.1]

5.1 Every family of open subsets of $\mathbb{R}$ covering $f[K]$ thus has a finite subfamily covering $f[K]$, so $f[K]$ is compact. [step 1.1, step 1.2, step 4.1, L3] ∎

## Remarks

- **The proof is the preimage characterisation, made canonical.** [[thm-continuity-preimage-characterisation]] says that $f^{-1}(V)$ is the trace on $A$ of an open set; the textbook argument pulls back each $V \in \mathcal{V}$ to such an open set and covers $K$ with those. Doing it that way selects one open set per member of $\mathcal{V}$, a family that may be arbitrarily large. Uniting all admissible balls instead, as above, reaches the same cover with no selection, and the only naming step left is over a finite index set.

- **The image of a compact set is closed and bounded**, by [[thm-heine-borel-characterisation-r]]. That is what the next two items use, and it is the shortest route to both boundedness and the attainment of extrema.

- **Compactness cannot be weakened to closedness or to boundedness.** The image of a closed set need not be closed ([[fs-continuous-image-of-a-closed-set-is-closed]]), and the image of a bounded set need not be bounded, since $x \mapsto 1/x$ carries the bounded set $(0,1)$ onto $(1,\infty)$.
````
