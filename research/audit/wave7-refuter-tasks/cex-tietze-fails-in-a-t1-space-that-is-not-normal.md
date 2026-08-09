## Selection reasons

- critical risk (9): 11 declared dependencies; 5 cited facts; 7 numbered proof steps; biconditional / both-direction claim
- Wave 7 ai-generated statement seed

## Target item — `cex-tietze-fails-in-a-t1-space-that-is-not-normal`

Normalized current SHA-256: `d9d1c73745f3cb143e41e32818ddd959323f362901e119b34da0df296d542c32`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-tietze-fails-in-a-t1-space-that-is-not-normal
kind: counterexample
title: "In the $K$-topology on $\\mathbb{R}$ the closed set $K \\cup \\{0\\}$ carries a continuous two-valued function with no continuous extension"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-tietze-extension-theorem, lem-the-k-topology-is-hausdorff-and-not-regular,
       def-normal-and-t4-spaces, def-regular-and-t3-spaces, def-t0-and-t1-spaces,
       thm-t4-implies-t3, def-subspace-topology-top, def-continuous-map-top,
       thm-continuity-characterisations-top, def-interval,
       thm-t1-iff-singletons-are-closed]
justified_by: []
aliases: []
landmark: false
short: "Tietze fails in the $K$-topology"
proof_strategy: contradiction
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
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "K-topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/K-topology"
pipeline_run: null
---

## Statement refuted

The subspace $A := K \cup \{0\} \subseteq (\mathbb{R}, \mathcal{T}_K)$ of the
$K$-topology ([[lem-the-k-topology-is-hausdorff-and-not-regular]]) is closed,
and the continuous $k : A \to [0,1]$ with $k \equiv 0$ on $K$ and $k(0) := 1$
extends to a continuous $F : \mathbb{R} \to [0,1]$.

This is false, and the failure is not a failure of closedness: $A$ **is**
closed. What fails is normality of the ambient space — $(\mathbb{R},
\mathcal{T}_K)$ is $T_1$ but not normal — in contrast with the companion
witness on this page that instead varies the closedness hypothesis of
Tietze's theorem while keeping the ambient space normal.

## Facts & Assumptions

**Given:** $(\mathbb{R},\mathcal{T}_K)$ the $K$-topology with basis $\mathcal{B}_K = \{(a,b) : a<b\} \cup \{(a,b)\setminus K : a<b\}$ and $K = \{1/(n+1) : n \in \mathbb{N}\}$ ([[lem-the-k-topology-is-hausdorff-and-not-regular]]); $A := K \cup \{0\}$; and $k : A \to [0,1]$, $k \equiv 0$ on $K$, $k(0) := 1$.

[L1] $(\mathbb{R},\mathcal{T}_K)$ is $T_1$; $K$ is closed in $\mathcal{T}_K$; and the point $0$ and the closed set $K$ admit **no** disjoint open neighbourhoods, i.e. $(\mathbb{R},\mathcal{T}_K)$ is not regular ([[lem-the-k-topology-is-hausdorff-and-not-regular]], clauses 2–4).

[L2] Every singleton is closed in a $T_1$ space ([[thm-t1-iff-singletons-are-closed]]).

[L3] For $a<b$, $(a,b)\setminus K \in \mathcal{B}_K$, hence open in $\mathcal{T}_K$ ([[lem-the-k-topology-is-hausdorff-and-not-regular]]).

[L4] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b)).

## Counterexample

**Proof technique:** contradiction.

1.1 $0 \notin K$: every $1/(n+1)$, $n \in \mathbb{N}$, is positive, and $0$ is not. By [L2] (using [L1], $T_1$), $\{0\}$ is closed; with $K$ closed by [L1], $A = K \cup \{0\}$ is closed, a union of two closed sets. [given, L1, L2, algebra]

1.2 $\{0\}$ is open in the subspace $A$: $(-1,1)\setminus K$ is open in $\mathcal{T}_K$ by [L3], and its trace on $A$ is $\big((-1,1)\setminus K\big) \cap (K \cup \{0\}) = \{0\}$, since it excludes every point of $K$ and contains $0$. [given, L3, algebra]

1.3 Suppose, toward a contradiction, that a continuous $F : \mathbb{R} \to [0,1]$ exists with $F|_A = k$. [assume-contra]

2.1 $K$ is open in the subspace $A$: $\mathbb{R} \setminus \{0\}$ is open in $\mathcal{T}_K$ by step 1.1 ($\{0\}$ closed), and its trace on $A$ is $(\mathbb{R}\setminus\{0\}) \cap (K \cup \{0\}) = K$, since $0 \notin K$. [step 1.1, algebra]

2.2 Under step 1.3: $W_1 := F^{-1}\big[(-\tfrac12,\tfrac12)\big]$ and $W_2 := F^{-1}\big[(\tfrac12,\tfrac32)\big]$ are open in $\mathcal{T}_K$ by [L4]. $K \subseteq W_1$, since $F \equiv k \equiv 0 \in (-\tfrac12,\tfrac12)$ on $K \subseteq A$; $0 \in W_2$, since $F(0) = k(0) = 1 \in (\tfrac12,\tfrac32)$; and $W_1 \cap W_2 = \varnothing$, the target intervals $(-\tfrac12,\tfrac12)$ and $(\tfrac12,\tfrac32)$ being disjoint. [step 1.3, L4, algebra]

3.1 $k$ is continuous on $A$: for open $V \subseteq [0,1]$, $k^{-1}[V]$ is $A$ if $0,1 \in V$; $K$ if $0 \in V, 1 \notin V$ (open in $A$ by step 2.1); $\{0\}$ if $1 \in V, 0 \notin V$ (open in $A$ by step 1.2); or $\varnothing$ otherwise; in every case open in $A$. [step 1.2, step 2.1]

4.1 Step 2.2 exhibits disjoint open $W_2 \ni 0$ and $W_1 \supseteq K$, contradicting [L1]: the point $0$ and the closed set $K$ admit no disjoint open neighbourhoods. [step 2.2, L1, discharge-contradiction] ∎

## Remarks

- **$(\mathbb{R},\mathcal{T}_K)$ is not normal, and this is why Tietze's theorem does not apply here.** It is $T_1$ (step 1.1's citation of [L1]) but not regular (used directly in step 4.1); by [[thm-t4-implies-t3]], a normal $T_1$ space is regular, so a $T_1$ space that is not regular cannot be normal. [[thm-tietze-extension-theorem]] requires normality of the ambient space, and that hypothesis is exactly what fails.

- **Closedness of $A$ is not in question.** $A$ is closed by step 1.1, and $k$ is continuous on $A$ by step 3.1; every hypothesis of [[thm-tietze-extension-theorem]] except normality of $\mathbb{R}$ with the $\mathcal{T}_K$ topology holds here.
````

## Wave 7 provenance row for the target

```json
{
  "id": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "Direct verification from the K-topology definition: the closed set K union {0} carries the displayed continuous two-valued function, and any extension would give forbidden disjoint neighbourhoods of K and 0.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-the-k-topology-is-hausdorff-and-not-regular",
      "source_section": "Statement",
      "quote": "Write $\\iota$ for the canonical natural of $\\mathbb{R}$\n([[def-canonical-natural]]), so that $1/(n+1)$ abbreviates the inverse of\n$\\iota(n+1)$, and put\n\n$$K \\;:=\\; \\{\\, 1/(n+1) \\;:\\; n \\in \\mathbb{N} \\,\\} \\;\\subseteq\\; \\mathbb{R}, \\qquad \\mathcal{B}_K \\;:=\\; \\{\\, (a,b) : a < b \\,\\} \\;\\cup\\; \\{\\, (a,b) \\setminus K : a < b \\,\\},$$\n\nthe bounded open intervals of $\\mathbb{R}$ ([[def-interval]]) together with those\nsame intervals with $K$ removed. Then:\n\n1. $\\mathcal{B}_K$ is a basis for a unique topology $\\mathcal{T}_K$ on\n   $\\mathbb{R}$ ([[thm-basis-criterion]]), the **$K$-topology**, and\n   $\\mathcal{T}_K$ is finer than the usual topology of $\\mathbb{R}$\n   ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).\n2. $(\\mathbb{R}, \\mathcal{T}_K)$ is Hausdorff ([[def-hausdorff-space]]) and $T_1$\n   ([[def-t0-and-t1-spaces]]).\n3. $K$ is closed in $\\mathcal{T}_K$.\n4. $(\\mathbb{R}, \\mathcal{T}_K)$ is **not regular**\n   ([[def-regular-and-t3-spaces]]): the point $0$ and the closed set $K$ have no\n   disjoint open neighbourhoods.",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-t1-iff-singletons-are-closed",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$\\mathcal{T}_{\\mathrm{cof}}$ be the cofinite topology on the set $X$\n([[def-standard-topologies]]). The following four conditions are equivalent.\n\n- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).\n- **(b)** $\\{x\\}$ is closed for every $x \\in X$.\n- **(c)** $F$ is closed for every finite $F \\subseteq X$ ([[def-countable]]).\n- **(d)** $\\mathcal{T}_{\\mathrm{cof}} \\subseteq \\mathcal{T}$, that is, the\n  topology of $X$ is finer than the cofinite topology on the same set.\n\nCondition (d) says that the cofinite topology is the **coarsest** $T_1$ topology\non any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set\ncontains it.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-the-k-topology-is-hausdorff-and-not-regular",
      "source_section": "Statement",
      "quote": "Write $\\iota$ for the canonical natural of $\\mathbb{R}$\n([[def-canonical-natural]]), so that $1/(n+1)$ abbreviates the inverse of\n$\\iota(n+1)$, and put\n\n$$K \\;:=\\; \\{\\, 1/(n+1) \\;:\\; n \\in \\mathbb{N} \\,\\} \\;\\subseteq\\; \\mathbb{R}, \\qquad \\mathcal{B}_K \\;:=\\; \\{\\, (a,b) : a < b \\,\\} \\;\\cup\\; \\{\\, (a,b) \\setminus K : a < b \\,\\},$$\n\nthe bounded open intervals of $\\mathbb{R}$ ([[def-interval]]) together with those\nsame intervals with $K$ removed. Then:\n\n1. $\\mathcal{B}_K$ is a basis for a unique topology $\\mathcal{T}_K$ on\n   $\\mathbb{R}$ ([[thm-basis-criterion]]), the **$K$-topology**, and\n   $\\mathcal{T}_K$ is finer than the usual topology of $\\mathbb{R}$\n   ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).\n2. $(\\mathbb{R}, \\mathcal{T}_K)$ is Hausdorff ([[def-hausdorff-space]]) and $T_1$\n   ([[def-t0-and-t1-spaces]]).\n3. $K$ is closed in $\\mathcal{T}_K$.\n4. $(\\mathbb{R}, \\mathcal{T}_K)$ is **not regular**\n   ([[def-regular-and-t3-spaces]]): the point $0$ and the closed set $K$ have no\n   disjoint open neighbourhoods.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-continuity-characterisations-top",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T}_X)$ and $(Y, \\mathcal{T}_Y)$ be topological spaces, let\n$f : X \\to Y$ be a function, and let $\\mathcal{S}$ be a subbasis for\n$\\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions\nare equivalent.\n\n- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).\n- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$.\n- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \\subseteq Y$.\n- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \\in \\mathcal{S}$.\n- **(e)** $f[\\overline{A}] \\subseteq \\overline{f[A]}$ for every $A \\subseteq X$,\n  closures being taken in $X$ and in $Y$ respectively\n  ([[def-interior-closure-boundary-top]]).\n\nCondition (d) is what makes continuity checkable against a generating family\nrather than against every open set, and it holds for a *basis* as well, a basis\nbeing in particular a subbasis for the topology it generates.",
      "uses": [
        "2.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$0 \\notin K$: every $1/(n+1)$, $n \\in \\mathbb{N}$, is positive, and $0$ is not. By [L2] (using [L1], $T_1$), $\\{0\\}$ is closed; with $K$ closed by [L1], $A = K \\cup \\{0\\}$ is closed, a union of two closed sets. [given, L1, L2, algebra]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "L2",
        "algebra"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "$\\{0\\}$ is open in the subspace $A$: $(-1,1)\\setminus K$ is open in $\\mathcal{T}_K$ by [L3], and its trace on $A$ is $\\big((-1,1)\\setminus K\\big) \\cap (K \\cup \\{0\\}) = \\{0\\}$, since it excludes every point of $K$ and contains $0$. [given, L3, algebra]",
      "step": "1.2",
      "inputs": [
        "given",
        "L3",
        "algebra"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Suppose, toward a contradiction, that a continuous $F : \\mathbb{R} \\to [0,1]$ exists with $F|_A = k$. [assume-contra]",
      "step": "1.3",
      "inputs": [
        "assume-contra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "$K$ is open in the subspace $A$: $\\mathbb{R} \\setminus \\{0\\}$ is open in $\\mathcal{T}_K$ by step 1.1 ($\\{0\\}$ closed), and its trace on $A$ is $(\\mathbb{R}\\setminus\\{0\\}) \\cap (K \\cup \\{0\\}) = K$, since $0 \\notin K$. [step 1.1, algebra]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "algebra",
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Under step 1.3: $W_1 := F^{-1}\\big[(-\\tfrac12,\\tfrac12)\\big]$ and $W_2 := F^{-1}\\big[(\\tfrac12,\\tfrac32)\\big]$ are open in $\\mathcal{T}_K$ by [L4]. $K \\subseteq W_1$, since $F \\equiv k \\equiv 0 \\in (-\\tfrac12,\\tfrac12)$ on $K \\subseteq A$; $0 \\in W_2$, since $F(0) = k(0) = 1 \\in (\\tfrac12,\\tfrac32)$; and $W_1 \\cap W_2 = \\varnothing$, the target intervals $(-\\tfrac12,\\tfrac12)$ and $(\\tfrac12,\\tfrac32)$ being disjoint. [step 1.3, L4, algebra]",
      "step": "2.2",
      "inputs": [
        "step 1.3",
        "L4",
        "algebra",
        "1.3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "$k$ is continuous on $A$: for open $V \\subseteq [0,1]$, $k^{-1}[V]$ is $A$ if $0,1 \\in V$; $K$ if $0 \\in V, 1 \\notin V$ (open in $A$ by step 2.1); $\\{0\\}$ if $1 \\in V, 0 \\notin V$ (open in $A$ by step 1.2); or $\\varnothing$ otherwise; in every case open in $A$. [step 1.2, step 2.1]",
      "step": "3.1",
      "inputs": [
        "step 1.2",
        "step 2.1",
        "2.1",
        "1.2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Step 2.2 exhibits disjoint open $W_2 \\ni 0$ and $W_1 \\supseteq K$, contradicting [L1]: the point $0$ and the closed set $K$ admit no disjoint open neighbourhoods. [step 2.2, L1, discharge-contradiction] ∎",
      "step": "4.1",
      "inputs": [
        "step 2.2",
        "L1",
        "discharge-contradiction",
        "2.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 2.2: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 1.3: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The statement has no distinguished nonempty-choice obligations were checked against the stated hypothesis or explicit construction parameter or case."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (9): 11 declared dependencies; 5 cited facts; 7 numbered proof steps; biconditional / both-direction claim, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Empty/zero/one/degenerate/endpoint cases inspected; the function k uses only 0 and 1, the intervals and preimages are well-defined at the codomain endpoints, and no boundary case breaks the reasoning. Checked surface: The title, the public claim (Statement refuted), every numbered proof step (1.1–4.1), and the Remarks were read and verified. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/cex-tietze-fails-in-a-t1-space-that-is-not-normal--586119af95a98e75.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-tietze-extension-theorem",
    "declared_target": "thm-tietze-extension-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-the-k-topology-is-hausdorff-and-not-regular",
    "declared_target": "lem-the-k-topology-is-hausdorff-and-not-regular",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-regular-and-t3-spaces",
    "declared_target": "def-regular-and-t3-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-t4-implies-t3",
    "declared_target": "thm-t4-implies-t3",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
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
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
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
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
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
    "source": "cex-tietze-fails-in-a-t1-space-that-is-not-normal",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-t1-iff-singletons-are-closed",
    "declared_target": "thm-t1-iff-singletons-are-closed",
    "target_statement_provenance": "literature-derived",
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

## Full text of every cited or declared item (11)

### `def-continuous-map-top`

````markdown
---
id: def-continuous-map-top
kind: definition
title: "Continuity of a map of topological spaces at a point and globally"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
aliases: [def-continuity-top]
landmark: true
short: "continuous map of spaces"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

## Remarks

- **This is the metric definition when both topologies are metric topologies.**
  For metric spaces, $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, and the balls around a point are a neighbourhood
  base there; the identification is carried out where metrizable spaces are
  defined later on this page. Nothing about a metric survives in the definition
  above: continuity is a relation between two topologies and a function, and it
  is meaningless to ask whether a function between bare sets is continuous.

- **Continuity depends on both topologies, and coarsening the target or refining
  the source only helps.** If $f$ is continuous and $\mathcal{T}_X$ is replaced
  by a finer topology, or $\mathcal{T}_Y$ by a coarser one, $f$ remains
  continuous, since each condition to be verified is weakened and each
  neighbourhood available in the source is still available. In particular every
  map out of a discrete space and every map into an indiscrete space is
  continuous ([[def-standard-topologies]]).

- **Continuity at a point is strictly weaker than continuity.** A function may be
  continuous at exactly one point, and the definition above is deliberately local
  so that the sequential criteria proved later can be stated pointwise.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-normal-and-t4-spaces`

````markdown
---
id: def-normal-and-t4-spaces
kind: definition
title: "Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-separated-sets,
       def-standard-topologies, def-neighbourhood-top]
justified_by: []
aliases: [def-normal-space, def-t4-space]
landmark: true
short: "normal space, $T_4$ space"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

## Remarks

- **Normality does not imply regularity**, and the failure is witnessed by
  Sierpinski space on the companion page, which is normal and not regular.
  Whether *regularity* implies normality is a question this page leaves open: any
  witness reachable from the material here would need cardinal arithmetic or the
  hereditary behaviour of regularity. This page's own prerequisites still supply
  neither: cardinal arithmetic and cofinality is now built, but *below* this
  one, and nothing here draws on it; the hereditary and productive behaviour of
  the separation axioms is developed later in the reading order. So nothing above
  asserts an answer and no false statement asserting
  one is planted here ([[rem-separation-axiom-conventions]]).

- **Normality is the axiom that behaves worst**, and the companion page shows
  one symptom: the deleted Tychonoff plank, a subspace of a product of two
  ordinal spaces each of which is $T_3$, is Hausdorff and not normal. Whether
  normality is inherited by subspaces or preserved by products is a question this
  page does not answer, and nothing here asserts an answer; the plank is
  presented only as a Hausdorff space that fails normality.

- **What the definition does *not* say.** It says nothing about separating a
  point from a closed set, because a point need not be closed; that is the
  content of the $T_1$ hypothesis in $T_4$, and the theorem two items below is
  where it is spent.
````

### `def-regular-and-t3-spaces`

````markdown
---
id: def-regular-and-t3-spaces
kind: definition
title: "Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-hausdorff-space,
       def-neighbourhood-top, def-standard-topologies]
justified_by: []
aliases: [def-regular-space, def-t3-space]
landmark: true
short: "regular space, $T_3$ space"
verification:
  precheck: n/a
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-06
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **regular** when a point can be separated from a closed set not
  containing it: for every closed $C \subseteq X$ and every
  $x \in X \setminus C$ there are $U, V \in \mathcal{T}$ with
  $$x \in U, \qquad C \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), regularity reads: $x$ and $C$ have disjoint open
neighbourhoods. The case $C = \varnothing$ is allowed and is satisfied by
$U = X$, $V = \varnothing$, so no nonemptiness is hidden in the condition.

**The convention fork, and this library's side of it.** Textbooks disagree about
whether the word *regular* carries a $T_1$ hypothesis. Munkres builds it in,
defining a regular space to be one in which points are closed and the separation
condition above holds; Kelley, Willard and Engelking do not, and reserve $T_3$
for the conjunction. **This library takes the second side**: *regular* names the
separation condition alone, $T_3$ names regular plus $T_1$, and every statement
that needs points to be closed writes the $T_1$ hypothesis out. The reason is
that the two halves are genuinely independent and each is used alone below: the
indiscrete topology on a two-point set is regular and not $T_0$
([[def-standard-topologies]]), and the cofinite topology on an infinite set is
$T_1$ and not regular, both witnessed on the companion page.

**Regularity alone implies no other separation axiom.** It does not imply $T_0$,
$T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set
$X$ the only closed sets are $\varnothing$ and $X$, so the only pair $(C, x)$ to
be separated has $C = \varnothing$, and $U = X$, $V = \varnothing$ separates it;
yet no two distinct points are distinguished by any open set. Conversely $T_1$
does not imply regularity. It is the *conjunction* $T_3$ that sits above
Hausdorff in the hierarchy, and the proof of that is three items below.

## Remarks

- **A regular space is not required to separate two closed sets**, which is the
  stronger condition of normality defined later on this page; and a normal space
  is not required to separate a point from a closed set, since a point need not
  be closed. Normality does not imply regularity, and the witness is Sierpinski
  space on the companion page. Whether regularity implies normality is a
  question this page leaves open, and no statement here asserts an answer
  ([[def-normal-and-t4-spaces]]).

- **What regularity is really about.** The reformulation proved next — every
  point has a neighbourhood base of closed neighbourhoods — is the form in which
  regularity is used in practice, and the form in which it is verified for the
  ordinal spaces later on this page, whose basis consists of clopen sets.

- **The numeral.** Because of the fork above, "$T_3$" in the literature may mean
  either what is defined here or the bare separation condition. This library
  always writes the numeral for the conjunction and never uses it to abbreviate
  the separation condition alone ([[rem-separation-axiom-conventions]]).
````

### `def-subspace-topology-top`

````markdown
---
id: def-subspace-topology-top
kind: definition
title: "Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis, def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-subspace-top, def-relative-topology]
landmark: true
short: "subspace topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## Remarks

- **The subspace topology is what makes a subset a space.** Before it, a statement
  such as "the restriction of $f$ to $C$ is continuous" has no meaning, because
  $C$ carries no topology. Every restriction below is taken with respect to the
  subspace topology and with no other convention available.

- **Openness and closedness are not absolute.** $[0,1)$ is open in $[0,2)$ and is
  neither open nor closed in $\mathbb{R}$; the interval $(0,1)$ is closed in
  itself. A sentence of the form "$A$ is open" is incomplete unless the space is
  named, and this library names it whenever more than one is in play.

- **Transitivity.** If $S \subseteq T \subseteq X$ then the subspace topology $S$
  inherits from $(T, \mathcal{T}_T)$ is the subspace topology it inherits from
  $X$, since $(U \cap T) \cap S = U \cap S$ for $U \in \mathcal{T}$. So no
  ambiguity arises from the route by which a subset is reached.
````

### `def-t0-and-t1-spaces`

````markdown
---
id: def-t0-and-t1-spaces
kind: definition
title: "$T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-neighbourhood-top, def-interior-closure-boundary-top,
       def-standard-topologies]
justified_by: []
aliases: [def-t0-space, def-t1-space, def-kolmogorov-space, def-frechet-space]
landmark: true
short: "$T_0$ and $T_1$ spaces"
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
    - title: "Kolmogorov space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kolmogorov_space"
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

## Remarks

- **The names.** The numbering $T_0, T_1, T_2, \dots$ is Alexandroff and Hopf's
  *Trennungsaxiome*; the individual names honour Kolmogorov and Frechet. This
  page fixes each axiom by its condition and treats the numeral as an
  abbreviation, because the numerals above $T_3$ are used inconsistently in the
  literature ([[rem-separation-axiom-conventions]]).

- **What $T_1$ says about closures.** $T_1$ is equivalent to the closedness of
  every singleton, and hence to $\overline{\{x\}} = \{x\}$ for every point
  ([[def-interior-closure-boundary-top]]); that equivalence is the next item and
  is a theorem, not a restatement. The corresponding characterisation of $T_0$,
  that distinct points have distinct closures, is not needed on this page and is
  not proved here.

- **No separation is built into the word *space*.** [[def-topological-space]]
  assumes none; every separation property on this page is a hypothesis written
  out where it is used.
````

### `lem-the-k-topology-is-hausdorff-and-not-regular`

````markdown
---
id: lem-the-k-topology-is-hausdorff-and-not-regular
kind: lemma
title: "The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-topological-space, def-topology-basis-subbasis, thm-basis-criterion,
       def-t0-and-t1-spaces, def-hausdorff-space, def-regular-and-t3-spaces,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-interval,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor,
       lem-of-naturals-positive, lem-of-inverse-positive, thm-of-archimedean,
       def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: [lem-k-topology]
landmark: true
short: "the $K$-topology"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "K-topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/K-topology"
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §13 and §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 13: Basis for a Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-13.pdf"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Statement

Write $\iota$ for the canonical natural of $\mathbb{R}$
([[def-canonical-natural]]), so that $1/(n+1)$ abbreviates the inverse of
$\iota(n+1)$, and put

$$K \;:=\; \{\, 1/(n+1) \;:\; n \in \mathbb{N} \,\} \;\subseteq\; \mathbb{R}, \qquad \mathcal{B}_K \;:=\; \{\, (a,b) : a < b \,\} \;\cup\; \{\, (a,b) \setminus K : a < b \,\},$$

the bounded open intervals of $\mathbb{R}$ ([[def-interval]]) together with those
same intervals with $K$ removed. Then:

1. $\mathcal{B}_K$ is a basis for a unique topology $\mathcal{T}_K$ on
   $\mathbb{R}$ ([[thm-basis-criterion]]), the **$K$-topology**, and
   $\mathcal{T}_K$ is finer than the usual topology of $\mathbb{R}$
   ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).
2. $(\mathbb{R}, \mathcal{T}_K)$ is Hausdorff ([[def-hausdorff-space]]) and $T_1$
   ([[def-t0-and-t1-spaces]]).
3. $K$ is closed in $\mathcal{T}_K$.
4. $(\mathbb{R}, \mathcal{T}_K)$ is **not regular**
   ([[def-regular-and-t3-spaces]]): the point $0$ and the closed set $K$ have no
   disjoint open neighbourhoods.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its order, its usual metric $d_{\mathbb{R}}(s,t) = |s-t|$ and its usual topology; the set $K$ and the family $\mathcal{B}_K$ above; reals $a,b,c,d$ and naturals $m,n$. Throughout $1/(n+1)$ is the inverse of the canonical natural $\iota(n+1)$.

[A1] $(a,b) = \{\, t \in \mathbb{R} : a < t < b \,\}$, and for $a < b$ the midpoint satisfies $a < (a+b)/2 < b$, so $(a,b) \ne \varnothing$ ([[def-interval]]).

[L1] A family satisfying (B1) and (B2) is a basis for exactly one topology, namely the family of sets each of whose points lies in a member inside the set ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every $x \in U$ has $r > 0$ with $(x-r,x+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claim 3, [[def-metrizable-space]]).

[L3] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$; every nonzero natural is a successor; and for every real $x$ there is a natural $k \ge 1$ with $x < k$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[thm-of-archimedean]]).

[L4] For $n \ge 1$ the canonical natural $\iota(n)$ is positive and $n \mapsto \iota(n)$ is strictly increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]); and $0 < u < v$ implies $0 < 1/v < 1/u$ ([[lem-of-inverse-positive]]).

[L5] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]).

[L6] A space is Hausdorff when distinct points have disjoint open neighbourhoods; every Hausdorff space is $T_1$; a space is regular when a point and a closed set not containing it have disjoint open neighbourhoods ([[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-regular-and-t3-spaces]], [[def-t0-and-t1-spaces]]).

[L7] A set is closed exactly when its complement is open, and an arbitrary union of open sets is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 (B1): every $x \in \mathbb{R}$ lies in $(x-1, x+1) \in \mathcal{B}_K$, so $\mathcal{B}_K$ covers $\mathbb{R}$. [A1]

1.2 (B2): for $a < b$ and $c < d$ the intersection $(a,b) \cap (c,d)$ is $(\max\{a,c\}, \min\{b,d\})$ by [L5] and [A1], which is a member of $\mathcal{B}_K$ when $\max\{a,c\} < \min\{b,d\}$ and is empty otherwise; removing $K$ from one or from both factors intersects the same interval with the complement of $K$, giving a member of $\mathcal{B}_K$ or the empty set; and in the empty case (B2) is vacuous. [A1, L5]

2.1 By steps 1.1 and 1.2 and [L1] the family $\mathcal{B}_K$ is a basis for a unique topology $\mathcal{T}_K$ on $\mathbb{R}$, which is claim 1's first half. [step 1.1, step 1.2, L1]

3.1 $\mathcal{T}_K$ is finer than the usual topology: if $U$ is usually open and $x \in U$, then [L2] gives $r > 0$ with $x \in (x-r,x+r) \subseteq U$, and $(x-r,x+r) \in \mathcal{B}_K$, so $U \in \mathcal{T}_K$ by [L1]; this completes claim 1. [step 2.1, L1, L2]

3.2 Let $x \ne y$ in $\mathbb{R}$; by [L5] we may assume $x < y$, and put $r := (y-x)/2 > 0$, so that $x + r = (x+y)/2 = y - r$. The sets $(x-r,x+r)$ and $(y-r,y+r)$ lie in $\mathcal{B}_K$, hence are open, contain $x$ and $y$ respectively, and are disjoint, a common point being both $< x+r$ and $> y-r = x+r$. So $(\mathbb{R},\mathcal{T}_K)$ is Hausdorff, and $T_1$ by [L6]; this is claim 2. [step 2.1, A1, L5, L6]

3.3 $\mathbb{R} \setminus K = \bigcup_{k \ge 1} \big( (-k, k) \setminus K \big)$, the union being over naturals $k \ge 1$: each term is a member of $\mathcal{B}_K$ and misses $K$, and conversely a point $x \notin K$ has $|x| < k$ for some natural $k \ge 1$ by [L3], so $x$ lies in the term of index $k$. Hence $\mathbb{R} \setminus K$ is open by [L7] and $K$ is closed, which is claim 3. [step 2.1, L3, L7]

4.1 Suppose $U, V \in \mathcal{T}_K$ are disjoint with $0 \in U$ and $K \subseteq V$; note $0 \notin K$, since every element of $K$ is positive by [L4]. [step 3.3, L4, assume-hyp]

5.1 Under step 4.1: by [L1] there is $B \in \mathcal{B}_K$ with $0 \in B \subseteq U$, and $B$ is $(a,b)$ or $(a,b) \setminus K$ with $a < 0 < b$. [step 4.1, L1, A1]

6.1 Under step 4.1: by [L3] there is a natural $k \ge 1$ with $1/k < b$, and $k = n+1$ for some $n \in \mathbb{N}$, so $1/(n+1) \in (a,b)$, since $0 < 1/(n+1) < b$ by [L4] and $a < 0$. [step 5.1, L3, L4]

7.1 Under step 4.1: $B \ne (a,b)$, for otherwise $1/(n+1) \in B \subseteq U$ by step 6.1 while $1/(n+1) \in K \subseteq V$, contradicting $U \cap V = \varnothing$; hence $B = (a,b) \setminus K$. [step 5.1, step 6.1]

7.2 Under step 4.1: $1/(n+1) \in K \subseteq V$, so by [L1] there is $B' \in \mathcal{B}_K$ with $1/(n+1) \in B' \subseteq V$; and $B'$ is not of the form $(c,d) \setminus K$, which contains no point of $K$, so $B' = (c,d)$ with $c < 1/(n+1) < d$. [step 6.1, L1]

8.1 Under step 4.1: put $t := \max\{\, \max\{a,c\},\ 1/(n+2) \,\}$ by [L5]. Then $t < 1/(n+1)$: indeed $a < 0 < 1/(n+1)$ and $c < 1/(n+1)$, and $1/(n+2) < 1/(n+1)$ by [L4], since $\iota(n+1) < \iota(n+2)$ and both are positive. [step 6.1, step 7.1, step 7.2, L4, L5]

9.1 Under step 4.1: the interval $(t,\ 1/(n+1))$ contains no element of $K$. An element $1/(m+1)$ of it satisfies $1/(m+1) < 1/(n+1)$, hence $\iota(n+1) < \iota(m+1)$ by [L4], hence $n + 1 < m + 1$ and so $m + 1 \ge n + 2$, whence $1/(m+1) \le 1/(n+2) \le t$ by [L4] and step 8.1, contradicting $t < 1/(m+1)$. [step 8.1, L4]

10.1 Under step 4.1: put $z := (t + 1/(n+1))/2$, so $t < z < 1/(n+1)$ by [A1] and step 8.1, and $z \notin K$ by step 9.1. [step 8.1, step 9.1, A1]

11.1 Under step 4.1: $z \in (a,b) \setminus K = B \subseteq U$, since $a \le \max\{a,c\} \le t < z$ and $z < 1/(n+1) < b$ by step 6.1 and step 8.1; and $z \in (c,d) = B' \subseteq V$, since $c \le \max\{a,c\} \le t < z$ and $z < 1/(n+1) < d$ by step 7.2. [step 6.1, step 7.1, step 7.2, step 8.1, step 10.1, L5]

12.1 Step 11.1 puts $z$ in $U \cap V$, contradicting the disjointness assumed in step 4.1; so no such $U$ and $V$ exist, and by [L6] the space $(\mathbb{R},\mathcal{T}_K)$ is not regular, which is claim 4. [step 4.1, step 11.1, L6] ∎

## Remarks

- **One pair suffices, and only one pair is claimed.** Regularity is a statement about *every* point and *every* closed set missing it, so a single pair that cannot be separated refutes it; the pair exhibited is $(0, K)$. Nothing above asserts that the space is regular at any other pair, and nothing needs it: what the lemma is for is the refutation of "Hausdorff implies regular", and that needs exactly one failure.

- **Why the gap $(t, 1/(n+1))$ is the right place to look.** The basic neighbourhood of $0$ inside $U$ has had all of $K$ deleted, so it cannot be told apart from a usual interval except at the points of $K$; and any neighbourhood of the point $1/(n+1)$ of $K$ must be an ordinary interval, because the deleted basic sets miss $K$ altogether. Two such sets overlap in a nonempty interval, and the interval between consecutive members of $K$ supplies a point of the overlap that is not in $K$. Writing "clearly some point of the overlap avoids $K$" would be the gap that this argument exists to close.

- **The index shift is not cosmetic.** $\mathbb{N}$ contains $0$ ([[def-canonical-natural]]), so the set is written $\{1/(n+1) : n \in \mathbb{N}\}$ and its largest element is $1$; writing $\{1/n : n \in \mathbb{N}\}$ would divide by zero.
````

### `thm-continuity-characterisations-top`

````markdown
---
id: thm-continuity-characterisations-top
kind: theorem
title: "For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-map-top, thm-closure-characterisation-top, def-topology-basis-subbasis, thm-basis-criterion, def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "five equivalent forms of continuity"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

## Facts & Assumptions

**Given:** Topological spaces $(X,\mathcal{T}_X)$ and $(Y,\mathcal{T}_Y)$, a function $f : X \to Y$, a subbasis $\mathcal{S}$ for $\mathcal{T}_Y$, subsets $A \subseteq X$ and $V, F \subseteq Y$. Preimages satisfy $f^{-1}[Y \setminus W] = X \setminus f^{-1}[W]$, $f^{-1}[\bigcup_i W_i] = \bigcup_i f^{-1}[W_i]$ and $f^{-1}[\bigcap_i W_i] = \bigcap_i f^{-1}[W_i]$ for every family, with $f^{-1}[Y] = X$ for the empty intersection.

[A1] $f$ is continuous at $x$ when for every open $V \ni f(x)$ there is an open $U \ni x$ with $f[U] \subseteq V$ ([[def-continuous-map-top]]).

[A2] A set is closed exactly when its complement is open; a set is open exactly when it is a union of open sets containing each of its points ([[def-topological-space]]).

[L1] The topology generated by $\mathcal{S}$ has as a basis the family $\mathcal{B}_{\mathcal{S}}$ of intersections of finitely many members of $\mathcal{S}$, the empty intersection being $Y$; every open set is a union of members of $\mathcal{B}_{\mathcal{S}}$ ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] $x \in \overline{A}$ if and only if every open set containing $x$ meets $A$ ([[thm-closure-characterisation-top]], clause (c)).

[L3] $\overline{A}$ is the smallest closed superset of $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): let $V \subseteq Y$ be open and let $x \in f^{-1}[V]$, so $f(x) \in V$; continuity at $x$ gives an open $U \ni x$ with $f[U] \subseteq V$, that is $U \subseteq f^{-1}[V]$. As $x$ was arbitrary, $f^{-1}[V]$ is a union of open sets, hence open. [A1, A2]

1.2 (b) implies (a): let $x \in X$ and let $V$ be open with $f(x) \in V$; then $U := f^{-1}[V]$ is open, contains $x$, and satisfies $f[U] \subseteq V$. [A1]

1.3 (b) and (c) are equivalent: $F \subseteq Y$ is closed exactly when $Y \setminus F$ is open, and $f^{-1}[Y \setminus F] = X \setminus f^{-1}[F]$, so $f^{-1}[F]$ is closed exactly when $f^{-1}[Y \setminus F]$ is open; as $F$ ranges over the closed sets, $Y \setminus F$ ranges over the open sets. [given, A2]

1.4 (b) implies (d): every $S \in \mathcal{S}$ is open, $\mathcal{S}$ being contained in the topology it generates. [L1]

1.5 (d) implies (b): let $V \subseteq Y$ be open; by [L1] $V$ is a union of sets of the form $S_1 \cap \dots \cap S_n$ with $n \ge 0$ and $S_i \in \mathcal{S}$, and $f^{-1}$ turns unions into unions and intersections into intersections, with $f^{-1}[Y] = X$ for $n = 0$; so $f^{-1}[V]$ is a union of finite intersections of the open sets $f^{-1}[S_i]$ together with $X$, hence open. [given, L1, A2]

1.6 (e) implies (c): let $F \subseteq Y$ be closed and put $A := f^{-1}[F]$; then $f[A] \subseteq F$, so $f[\overline{A}] \subseteq \overline{f[A]} \subseteq \overline{F} = F$ by (e), monotonicity of the closure and [L3]; hence $\overline{A} \subseteq f^{-1}[F] = A$, and with $A \subseteq \overline{A}$ this gives $A = \overline{A}$, so $A$ is closed. [L3]

2.1 (b) implies (e): let $A \subseteq X$ and $x \in \overline{A}$, and let $V$ be open with $f(x) \in V$; then $f^{-1}[V]$ is open and contains $x$, so it meets $A$ by [L2], say at $a$; then $f(a) \in V \cap f[A]$, so $V$ meets $f[A]$. As $V$ was arbitrary, $f(x) \in \overline{f[A]}$ by [L2]. [step 1.1, L2]

3.1 Steps 1.1 and 1.2 make (a) and (b) equivalent; step 1.3 makes (b) and (c) equivalent; steps 1.4 and 1.5 make (b) and (d) equivalent; step 2.1 gives (b) implies (e) and step 1.6 gives (e) implies (c), which closes the cycle through (c) and (b). Hence all five conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 1.6] ∎

## Remarks

- **Only (a) is pointwise.** Conditions (b) to (e) are global, and none of them has a pointwise version that is equivalent to continuity at a single point: the preimage of an open set containing $f(x)$ can fail to be open while still being a neighbourhood of $x$, which is exactly what continuity at $x$ asserts.

- **The inclusion in (e) may be strict for a continuous map.** For the inclusion of $(0,1)$ into $\mathbb{R}$ and $A = (0,1)$, the image of the closure is $(0,1)$ while the closure of the image is $[0,1]$. Equality for all $A$ is a strictly stronger condition, equivalent to $f$ being a closed map, and closed maps are defined three items below. Note that no map into a **discrete** space can witness strictness: there every subset is closed, so $f[\overline{A}] = f[A] = \overline{f[A]}$ always.

- **What the theorem does not say.** It says nothing about images of open sets: a continuous map need not carry open sets to open sets, and the failure is exactly what separates a continuous bijection from a homeomorphism. That separation is recorded on this page as a false statement with an explicit two-point witness.
````

### `thm-t1-iff-singletons-are-closed`

````markdown
---
id: thm-t1-iff-singletons-are-closed
kind: theorem
title: "A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-t0-and-t1-spaces, def-topological-space, def-standard-topologies,
       def-neighbourhood-top, def-countable]
justified_by: []
aliases: []
landmark: true
short: "$T_1$ iff points are closed"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathcal{T}_{\mathrm{cof}}$ be the cofinite topology on the set $X$
([[def-standard-topologies]]). The following four conditions are equivalent.

- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).
- **(b)** $\{x\}$ is closed for every $x \in X$.
- **(c)** $F$ is closed for every finite $F \subseteq X$ ([[def-countable]]).
- **(d)** $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}$, that is, the
  topology of $X$ is finer than the cofinite topology on the same set.

Condition (d) says that the cofinite topology is the **coarsest** $T_1$ topology
on any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set
contains it.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the cofinite topology $\mathcal{T}_{\mathrm{cof}}$ on the same set $X$, points $x, y \in X$ and a finite subset $F \subseteq X$.

[A1] $X$ is $T_1$ when for all $x \ne y$ there are open $U, V$ with $x \in U$, $y \notin U$, $y \in V$ and $x \notin V$ ([[def-t0-and-t1-spaces]]).

[L1] A set is closed exactly when its complement is open; $\varnothing$ and $X$ are open and closed; and a union of two closed sets is closed by (C3), hence so is a union of finitely many by iterating (C3) ([[def-topological-space]]).

[L2] A set is open exactly when it is a neighbourhood of each of its points, that is, exactly when each of its points lies in an open subset of it ([[def-neighbourhood-top]], consequence 4).

[L3] The cofinite topology on $X$ consists of $\varnothing$ together with the sets whose complement in $X$ is finite; its closed sets are $X$ together with the finite subsets of $X$ ([[def-standard-topologies]]).

[L4] A finite set is one equinumerous with a natural number, so a finite $F$ may be listed as $F = \{x_0, \dots, x_{n-1}\}$ for some $n \in \mathbb{N}$, the case $n = 0$ being $F = \varnothing$ ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): fix $x \in X$ and let $y \in X \setminus \{x\}$; then $y \ne x$, so [A1] supplies an open $V$ with $y \in V$ and $x \notin V$, whence $y \in V \subseteq X \setminus \{x\}$. [A1]

1.2 (b) implies (c): let $F \subseteq X$ be finite and list it as $F = \{x_0, \dots, x_{n-1}\}$ by [L4], so that $F = \{x_0\} \cup \dots \cup \{x_{n-1}\}$; for $n = 0$ this reads $F = \varnothing$, which is closed by [L1]. [L1, L4]

1.3 (c) implies (d): let $U \in \mathcal{T}_{\mathrm{cof}}$; if $U = \varnothing$ then $U \in \mathcal{T}$ by [L1], and otherwise $X \setminus U$ is finite by [L3], hence closed by (c), hence $U$ is open. [L1, L3]

1.4 (d) implies (a): let $x \ne y$ in $X$; the sets $X \setminus \{y\}$ and $X \setminus \{x\}$ have finite complements, so they lie in $\mathcal{T}_{\mathrm{cof}}$ by [L3] and hence in $\mathcal{T}$ by (d), and they witness the $T_1$ condition, since $x \in X \setminus \{y\}$, $y \notin X \setminus \{y\}$, $y \in X \setminus \{x\}$ and $x \notin X \setminus \{x\}$. [A1, L3]

2.1 By step 1.1 the set $X \setminus \{x\}$ is a neighbourhood of each of its points, hence open by [L2], so $\{x\}$ is closed by [L1]; this completes the implication (a) implies (b). [step 1.1, L1, L2]

2.2 By step 1.2 and (b) the set $F$ is a union of $n$ closed sets, hence closed by [L1]; this completes the implication (b) implies (c). [step 1.2, L1]

3.1 The four implications of steps 2.1, 2.2, 1.3 and 1.4 close the cycle (a) implies (b) implies (c) implies (d) implies (a), so the four conditions are equivalent. [step 1.3, step 1.4, step 2.1, step 2.2]

4.1 In particular $\mathcal{T}_{\mathrm{cof}}$ itself satisfies (d) with $\mathcal{T} = \mathcal{T}_{\mathrm{cof}}$, so the cofinite topology on any set is $T_1$ by step 3.1, and by (d) it is contained in every $T_1$ topology on that set; this is the final assertion of the statement. [step 3.1, L3] ∎

## Remarks

- **The theorem is the reason $T_1$ is quoted as "points are closed".** Every later use of $T_1$ on this page goes through clause (b): the $T_1$ hypothesis in $T_3$ and $T_4$ is used exactly to turn a point into a closed set so that regularity or normality applies to it.

- **Clause (c) is not a strengthening of clause (b).** It follows from it by a finite union, and the finite union is genuinely finite: an *arbitrary* union of closed sets need not be closed, and in the cofinite topology on an infinite set no infinite proper subset is closed at all, although every singleton is.

- **Clause (d) locates the cofinite topology.** It is the smallest $T_1$ topology on a given set, in the sense of [[def-topological-space]]'s comparison order, and this is why it is the standard witness for a $T_1$ space that fails every stronger separation axiom; the witness is worked on the companion page.
````

### `thm-t4-implies-t3`

````markdown
---
id: thm-t4-implies-t3
kind: theorem
title: "A normal $T_1$ space is regular, hence $T_3$, hence Urysohn, Hausdorff, $T_1$ and $T_0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-and-t4-spaces, def-regular-and-t3-spaces, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, lem-urysohn-sits-between-hausdorff-and-regular-plus-t1,
       def-hausdorff-space, def-urysohn-space, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "$T_4$ implies $T_3$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a $T_4$ space, that is a normal $T_1$ space
([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]). Then $X$ is regular
([[def-regular-and-t3-spaces]]), hence $T_3$, and therefore also Urysohn
([[def-urysohn-space]]), Hausdorff ([[def-hausdorff-space]]), $T_1$ and $T_0$.

**The $T_1$ hypothesis is not decoration.** Normality alone implies none of the
conclusions: the indiscrete topology on a two-point set is normal and not even
$T_0$, which is recorded among this page's false statements.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ that is normal and $T_1$, a closed set $C \subseteq X$ and a point $x \in X \setminus C$.

[A1] Normality: disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[A2] $X$ is regular when a point and a closed set not containing it admit disjoint open supersets; $T_3$ means regular and $T_1$ ([[def-regular-and-t3-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] Every regular $T_1$ space is Urysohn, every Urysohn space is Hausdorff, and every Hausdorff space is $T_1$ and hence $T_0$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]]).

## Proof

**Proof technique:** direct.

1.1 $\{x\}$ is closed, since $X$ is $T_1$. [L1]

1.2 $\{x\} \cap C = \varnothing$, since $x \notin C$. [given]

2.1 By [A1] applied to the disjoint closed sets $\{x\}$ and $C$ there are disjoint open $U \supseteq \{x\}$ and $V \supseteq C$; in particular $x \in U$. [step 1.1, step 1.2, A1]

3.1 Since $C$ and $x \notin C$ were arbitrary, step 2.1 shows that $X$ is regular; being also $T_1$, it is $T_3$. [step 2.1, A2]

4.1 By [L2] the space $X$ is Urysohn, hence Hausdorff, hence $T_1$ and $T_0$; with step 3.1 this is the whole statement. [step 3.1, L2] ∎

## Remarks

- **The proof is one line and the hypothesis does all the work.** Normality separates two *closed* sets; the $T_1$ hypothesis is exactly what turns the point into one of them. This is the pattern of every "$T_{n+1}$ implies $T_n$" argument in the chain, and it is why this library never builds $T_1$ silently into the words *regular* and *normal* ([[def-normal-and-t4-spaces]]).

- **The converse is not proved here and is not asserted.** Whether a $T_3$ space must be normal is left open on this page: every witness reachable from this page's material would need machinery it does not have, so no false statement asserting a reversal is planted here ([[rem-separation-axiom-conventions]]).
````

### `thm-tietze-extension-theorem`

````markdown
---
id: thm-tietze-extension-theorem
kind: theorem
title: "Tietze's extension theorem, under dependent choice: a continuous map from a closed subspace of a normal space into $[a,b]$ extends continuously to the whole space, and this property characterises normality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-urysohn-lemma, lem-a-uniformly-approximable-real-valued-map-is-continuous,
       def-normal-and-t4-spaces, def-dependent-choice, def-subspace-topology-top,
       def-continuous-map-top, thm-continuity-characterisations-top, def-interval,
       def-series, thm-geometric-series,
       def-interior-closure-boundary-top, def-ordered-field, lem-of-abs-value,
       lem-of-sequence-basics, lem-continuity-is-local-and-pastes,
       def-topological-space, lem-geometric-sequence-null,
       lem-real-line-is-a-metric-space]
justified_by: []
aliases: [thm-tietze]
landmark: true
short: "Tietze extension theorem (DC)"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §35"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]), $A \subseteq X$ is closed
   ([[def-subspace-topology-top]]) and $a \le b$ are reals, then every
   continuous $f : A \to [a,b]$ ([[def-interval]]) extends to a continuous
   $F : X \to [a,b]$ with $F|_A = f$.
2. Conversely, if for every closed $A \subseteq X$ and every reals $a \le b$
   every continuous $f : A \to [a,b]$ extends to a continuous $F : X \to [a,b]$
   with $F|_A = f$, then $X$ is normal. **This direction uses no choice
   principle.**

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice; for clause 1, $X$ normal, $A \subseteq X$ closed, reals $a \le b$, and continuous $f : A \to [a,b]$; for clause 2, $X$ such that the extension property of clause 1 holds for every closed subspace and every $a \le b$.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R$ entire on $P$, and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0=a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[A2] Normal: disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[L1] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$, $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L2] If $A$ is closed in $X$ and $C \subseteq A$ is closed in the subspace $A$, then $C$ is closed in $X$: by [[def-subspace-topology-top]] $C = F \cap A$ for some closed $F \subseteq X$, and an intersection of two closed sets of $X$ is closed ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L3] Preimages of closed sets under a continuous map are closed ([[thm-continuity-characterisations-top]], clause (c)); preimages of open sets are open (clause (b)).

[L4] The geometric series: $\sum_{n \ge 0} (2/3)^n = 1/(1-2/3) = 3$ ([[thm-geometric-series]]), so $\sum_{n\ge0} M_n/3 = r$ for $M_n := r(2/3)^n$ and any real $r$; and $(2/3)^n \to 0$ as $n \to \infty$ (the same theorem's proof, [[lem-geometric-sequence-null]]).

[L5] The $M$-test: continuous $(g_n)$ on $X$, nonnegative reals $(N_n)$ with $|g_n(x)|\le N_n$ for all $x,n$ and $\sum N_n$ convergent, give $\sum g_n(x)$ convergent for every $x$ and $\sum_n g_n$ continuous on $X$ ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]], second clause).

[L6] Finite triangle inequality $|\sum_k u_k| \le \sum_k |u_k|$ ([[lem-of-abs-value]]); a real sequence has at most one limit, and limits preserve non-strict order ([[lem-of-sequence-basics]]).

[L7] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L8] $A$ and $B$ open in a subspace $S$, with $A \cup B = S$ and $A \cap B = \varnothing$: a function on $S$ constant on $A$ and constant on $B$ is continuous ([[lem-continuity-is-local-and-pastes]], clause 2).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal, $A \subseteq X$ is closed, $a \le b$ are reals, and $f : A \to [a,b]$ is continuous. [assume-hyp]

1.2 Assume instead that $X$ is such that every continuous $g : C \to [p,q]$ on a closed $C \subseteq X$, $p \le q$ reals, extends continuously to $X \to [p,q]$. [assume-hyp]

2.1 Under step 1.1: if $a=b$ the constant map $F : X \to \{a\} \subseteq [a,b]$, $F \equiv a$, is continuous and $F|_A = f$, since $f : A \to \{a\}$ forces $f \equiv a$. Assume from here that $a<b$. [step 1.1, assume-hyp, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; $C \cup E$ is closed, and $C, E$ are each open in the subspace $C \cup E$, being the complement there of the other, which is closed. Define $k : C \cup E \to \{0,1\} \subseteq [0,1]$ by $k \equiv 0$ on $C$ and $k \equiv 1$ on $E$; $k$ is constant, hence continuous, on each of $C$ and $E$, so $k$ is continuous on $C \cup E$ by [L8]. [step 1.2, L8, choose, construct]

3.1 Under steps 1.1 and 2.1: put $c := (a+b)/2$ and $r := (b-a)/2 > 0$, and define $f_0 : A \to \mathbb{R}$ by $f_0(x) := f(x)-c$; $f_0$ is continuous, being $f$ minus a constant, and $f_0[A] \subseteq [-r,r]$, since $f[A] \subseteq [a,b] = [c-r,c+r]$. [step 1.1, step 2.1, algebra, construct]

3.2 Under step 1.2: by hypothesis applied to the closed set $C \cup E$ and $p:=0, q:=1$, fix a continuous $K : X \to [0,1]$ with $K|_{C\cup E} = k$. [step 1.2, step 2.2, choose]

4.1 Under step 1.1: for $n \in \mathbb{N}$ put $M_n := r(2/3)^n$. Call a pair $(f_n,g_n)$, with $f_n : A \to \mathbb{R}$ and $g_n : X \to \mathbb{R}$ continuous, **admissible at level $n$** when $|f_n(x)| \le M_n$ for $x \in A$; $|g_n(x)| \le M_n/3$ for $x \in X$; $g_n(x) = -M_n/3$ for $x \in A$ with $f_n(x) \le -M_n/3$; and $g_n(x) = M_n/3$ for $x \in A$ with $f_n(x) \ge M_n/3$. [step 3.1, construct]

4.2 Under step 1.2: by [L7], put $O_1 := K^{-1}(\,[0,\tfrac12)\,)$, $O_2 := K^{-1}(\,(\tfrac12,1]\,)$, open by [L3]. $C \subseteq O_1$, since $K \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $K \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = \varnothing$, the two target sets being disjoint. [step 3.2, L7, L3]

5.1 Under step 1.1: put $A_0^- := \{x \in A : f_0(x) \le -M_0/3\}$, $A_0^+ := \{x \in A : f_0(x) \ge M_0/3\}$; both closed in $A$ by [L3] and hence in $X$ by [L2], and disjoint since $-M_0/3 < M_0/3$. By [L1] fix continuous $h_0 : X \to [0,1]$ with $A_0^- \subseteq h_0^{-1}(\{0\})$ and $A_0^+ \subseteq h_0^{-1}(\{1\})$, and put $g_0 := (M_0/3)(2h_0-1)$, continuous. [step 3.1, step 4.1, L1, L2, L3, choose, construct]

5.2 Under step 1.1: let $n \in \mathbb{N}$ and let $(f_n,g_n)$ be admissible at level $n$; define $f_{n+1} : A \to \mathbb{R}$ by $f_{n+1}(x) := f_n(x)-g_n(x)$, continuous. [step 4.1, construct]

5.3 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [A2]; this is clause 2, and it uses [A1] nowhere. [step 4.2, A2]

6.1 Under step 1.1: $(f_0,g_0)$ is admissible at level $0$: $|f_0| \le M_0$ on $A$ by step 3.1; $|g_0(x)| = (M_0/3)|2h_0(x)-1| \le M_0/3$ for every $x$, since $h_0(x) \in [0,1]$; $g_0(x) = -M_0/3$ for $x \in A_0^-$, where $h_0(x)=0$; and $g_0(x)=M_0/3$ for $x \in A_0^+$, where $h_0(x)=1$. [step 5.1, algebra]

6.2 Under step 1.1, continuing under step 5.2: for $x \in A$ with $f_n(x) \le -M_n/3$: $g_n(x)=-M_n/3$ (admissibility), so $f_{n+1}(x) = f_n(x)+M_n/3 \in [-2M_n/3,\,0]$, using $-M_n \le f_n(x) \le -M_n/3$; for $x \in A$ with $f_n(x) \ge M_n/3$: $f_{n+1}(x) = f_n(x)-M_n/3 \in [0,\,2M_n/3]$; for $x \in A$ with $-M_n/3 < f_n(x) < M_n/3$: $|g_n(x)| \le M_n/3$ gives $f_{n+1}(x) \in (-2M_n/3,\,2M_n/3)$. In every case $|f_{n+1}(x)| \le 2M_n/3 = M_{n+1}$. [step 5.2, step 4.1, algebra]

6.3 Under step 1.1: put $A_{n+1}^- := \{x\in A: f_{n+1}(x)\le -M_{n+1}/3\}$, $A_{n+1}^+ := \{x\in A: f_{n+1}(x)\ge M_{n+1}/3\}$; closed in $X$ by [L2], [L3], and disjoint. By [L1] fix continuous $h_{n+1}:X\to[0,1]$ with $A_{n+1}^- \subseteq h_{n+1}^{-1}(\{0\})$, $A_{n+1}^+ \subseteq h_{n+1}^{-1}(\{1\})$, and put $g_{n+1} := (M_{n+1}/3)(2h_{n+1}-1)$. [step 5.2, step 4.1, L1, L2, L3, choose, construct]

7.1 Under step 1.1: $(f_{n+1},g_{n+1})$ is admissible at level $n+1$, by step 6.2 and the same computation as step 6.1 with $h_{n+1}, g_{n+1}, M_{n+1}$ in place of $h_0,g_0,M_0$. So every admissible pair at level $n$ has an admissible successor at level $n+1$. [step 6.2, step 6.3]

8.1 Under step 1.1: put $P := \{\, (n,f_n,g_n) : n \in \mathbb{N},\ (f_n,g_n) \text{ admissible at level } n \,\}$, and for $(n,f,g),(n',f',g') \in P$ say $(n,f,g) \mathbin{R} (n',f',g')$ when $n'=n+1$ and $f' = (f-g)|_A$ pointwise. $P$ is nonempty by step 6.1, and $R$ is entire on $P$ by steps 5.2, 6.2, 6.3 and 7.1 (the pair produced there has $f_{n+1} = (f_n-g_n)|_A$ exactly as step 5.2 defines it). By [A1] with $a := (0,f_0,g_0)$, fix a sequence $\big((n_k,F_k,G_k)\big)_{k \in \mathbb{N}}$ with $(n_0,F_0,G_0)=(0,f_0,g_0)$ and $(n_k,F_k,G_k) \mathbin{R} (n_{k+1},F_{k+1},G_{k+1})$ for every $k$; as $R$ forces $n'=n+1$, induction gives $n_k=k$, so $(F_k,G_k)$ is admissible at level $k$ for every $k$, with $F_{k+1} = (F_k-G_k)|_A$. [step 6.1, step 7.1, step 5.2, A1, construct]

9.1 Under step 1.1: by [L4], $\sum_n M_n/3 = r$, convergent; by [L5] applied to $(G_n)$ and $(M_n/3)$ (each $|G_n(x)| \le M_n/3$ for all $x$, by admissibility), for every $x \in X$ the series $\sum_n G_n(x)$ converges, and $F := \sum_{n=0}^{\infty} G_n$ is a continuous map $X \to \mathbb{R}$. [step 8.1, L4, L5, construct]

9.2 Under step 1.1: for $x \in A$ and $N \in \mathbb{N}$: by the telescoping of step 8.1, $\sum_{n<N} G_n(x) = F_0(x) - F_N(x) = f_0(x)-F_N(x)$, since $F_0=f_0$. [step 8.1, algebra]

10.1 Under step 1.1: for every $x \in X$ and $N \in \mathbb{N}$, $\big|\sum_{n<N} G_n(x)\big| \le \sum_{n<N}|G_n(x)| \le \sum_{n<N} M_n/3 \le r$, by [L6] and admissibility; letting $N \to \infty$, since $\sum_{n<N}G_n(x) \to F(x)$ (step 9.1) and order is preserved in the limit ([L6]), $|F(x)| \le r$. [step 9.1, L4, L6, algebra]

10.2 Under step 1.1: for $x \in A$: $|F_N(x)| \le M_N = r(2/3)^N \to 0$ as $N \to \infty$, by admissibility of $F_N$ (step 8.1) and [L4]; so by step 9.2, $\sum_{n<N} G_n(x) = f_0(x)-F_N(x) \to f_0(x)-0 = f_0(x)$. [step 9.2, step 8.1, L4]

11.1 Under step 1.1: for $x \in A$: $\sum_{n<N} G_n(x) \to F(x)$ by step 9.1 and $\to f_0(x)$ by step 10.2; since a real sequence has at most one limit ([L6]), $F(x) = f_0(x)$. [step 9.1, step 10.2, L6]

12.1 Under step 1.1: define $\hat F : X \to \mathbb{R}$ by $\hat F(x) := F(x)+c$, continuous; for $x \in X$, $\hat F(x) \in [c-r,c+r] = [a,b]$ by step 10.1; for $x \in A$, $\hat F(x) = F(x)+c = f_0(x)+c = f(x)$ by step 11.1 and the definition of $f_0$ in step 3.1. [step 10.1, step 11.1, step 3.1, algebra, construct]

13.1 Steps 2.1 and 12.1 show that, under the hypothesis of step 1.1, a continuous $F : X \to [a,b]$ with $F|_A=f$ exists — either the constant map of step 2.1 when $a=b$, or $\hat F$ of step 12.1 when $a<b$ — which is clause 1. [step 2.1, step 12.1]

14.1 Steps 13.1 and 5.3 establish clauses 1 and 2 respectively. [step 13.1, step 5.3, discharge-construct] ∎

## Remarks

- **The bound after $n$ stages is $M_n = r(2/3)^n$, with $M_0 = r$, not $r(2/3)^{n-1}$.** Indexing from $n=0$ is what makes step 6.1 the base case rather than a special first step, and it is why the geometric series of [L4] is summed from $n=0$.

- **Choice is spent once more here, genuinely as dependent choice and not in disguise.** Unlike the countable-choice step inside the previous item, the function $g_{n+1}$ chosen in step 6.3 depends on $f_{n+1}$, which is computed from $f_n$ and the *particular* $g_n$ retained in the state $(n,f_n,g_n) \in P$ of step 8.1 — not merely on the index $n$. So the relation $R$ genuinely cannot be replaced by one that ignores its first argument, and this is exactly the situation dependent choice, rather than countable choice alone, is for.

- **The target $[a,b]$ is handled by a shift, not a rescaling.** Working with $f_0 = f - c$ keeps every bound in the construction a plain multiple of $r$, and the final translation $\hat F = F + c$ is the only place $c$ reappears; no affine change of variable on $X$ or on $g_n$ is needed elsewhere.
````

