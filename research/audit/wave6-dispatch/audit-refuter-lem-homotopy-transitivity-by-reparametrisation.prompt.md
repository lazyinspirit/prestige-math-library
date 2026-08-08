# Audit proof-refuter brief — Wave 6, step A6

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

## Target item — `lem-homotopy-transitivity-by-reparametrisation`

Normalized current SHA-256: `bf506993253d94c872ccdfdab55aab2859fd73e84b614a27713c96fc4cd49597`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-homotopy-transitivity-by-reparametrisation
kind: lemma
title: "Two homotopies relative to the same subspace concatenate after piecewise-linear reparametrisation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-relative-and-path-homotopy, thm-continuity-characterisations-top, def-subspace-topology-top, thm-product-universal-property, def-topological-space, lem-real-line-is-a-metric-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Homotopy lecture notes (University of Padua)"
      url: "https://www.math.unipd.it/~maraston/Topologia2/Topo2_1011_homotopy.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq X$ and let $f,g,h:X\to Y$ be continuous. If $F$ is a homotopy from $f$ to $g$ rel $A$ and $G$ is a homotopy from $g$ to $h$ rel $A$, then

$$K(x,t):=\begin{cases}F(x,2t),&0\le t\le \tfrac12,\\G(x,2t-1),&\tfrac12\le t\le1\end{cases}$$

is a continuous homotopy from $f$ to $h$ rel $A$.

## Facts & Assumptions

**Given:** Topological spaces $X,Y$, a subspace $A\subseteq X$, continuous maps $f,g,h:X\to Y$, and homotopies $F:f\simeq_A g$ and $G:g\simeq_A h$.

[A1] The endpoint and relative conditions for $F$ and $G$ are those of [[def-homotopy-relative-and-path-homotopy]].

[L1] A map is continuous exactly when preimages of closed sets are closed ([[thm-continuity-characterisations-top]], condition (c)).

[L2] In a subspace, closed sets are exactly traces of ambient closed sets; restrictions of continuous maps to subspaces are continuous ([[def-subspace-topology-top]]).

[L3] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L4] A finite union of closed sets is closed, and the complement of an open set is closed ([[def-topological-space]]).

[L5] In the usual topology of $\mathbb R$, open balls are open intervals; $I=[0,1]$ has the subspace topology ([[lem-real-line-is-a-metric-space]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 The sets $I_0=[0,\tfrac12]$ and $I_1=[\tfrac12,1]$ are closed in $I$: their complements are respectively $I\cap(\tfrac12,\tfrac32)$ and $I\cap(-\tfrac12,\tfrac12)$, traces of open intervals of $\mathbb R$. Hence $D_0=X\times I_0$ and $D_1=X\times I_1$ are closed in $X\times I$, because they are the preimages of $I_0,I_1$ under the continuous time projection. [L1, L3, L4, L5]

1.2 The maps $a_0:I_0\to I$, $a_0(t)=2t$, and $a_1:I_1\to I$, $a_1(t)=2t-1$, are continuous. Indeed, at any $t_0$ and for any ambient open interval of radius $\varepsilon$ about $a_j(t_0)$, the relative interval of radius $\varepsilon/2$ about $t_0$ maps into it, since $|a_j(t)-a_j(t_0)|=2|t-t_0|$; [L5] turns these intervals into the required subspace neighbourhoods. [L5]

2.1 Define $r_j:D_j\to X\times I$ by $r_j(x,t)=(x,a_j(t))$. The first component is the restricted product projection and the second is $a_j$ after the time projection, so $r_j$ is continuous by [L2], step 1.2 and [L3]. [step 1.2, L2, L3]

3.1 The maps $K_0:=F\circ r_0:D_0\to Y$ and $K_1:=G\circ r_1:D_1\to Y$ are continuous: for every closed $C\subseteq Y$, $K_j^{-1}[C]=r_j^{-1}[F^{-1}[C]]$ or $r_j^{-1}[G^{-1}[C]]$, which is closed by [L1]. On $D_0\cap D_1=X\times\{\tfrac12\}$ they agree, since $K_0(x,\tfrac12)=F(x,1)=g(x)=G(x,0)=K_1(x,\tfrac12)$. [step 2.1, A1, L1]

4.1 Thus the displayed clauses define one function $K:X\times I\to Y$. If $C\subseteq Y$ is closed, then $K^{-1}[C]$ is the union of $K_0^{-1}[C]$, regarded as a closed subset of $X\times I$ through the closed subspace $D_0$, and $K_1^{-1}[C]$, regarded likewise through $D_1$. Each is closed by [L2] and steps 1.1 and 3.1, so their union is closed by [L4]. Hence $K$ is continuous by [L1]. [step 1.1, step 3.1, L1, L2, L4]

5.1 At $t=0$ the first clause gives $K(x,0)=F(x,0)=f(x)$, and at $t=1$ the second gives $K(x,1)=G(x,1)=h(x)$. If $a\in A$, both clauses give the common value $f(a)=g(a)=h(a)$ for every $t$. Therefore $K$ is a homotopy from $f$ to $h$ rel $A$. [step 4.1, A1] ∎

## Remarks

The continuity argument uses only a cover by the two closed sets $D_0,D_1$ and proves the finite pasting step directly. No assertion about an infinite closed cover is used.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-homotopy-relative-and-path-homotopy",
      "source_section": "Definition",
      "quote": "Let $A\\subseteq X$ carry the subspace topology ([[def-subspace-topology-top]]). The homotopy $H$ is a **homotopy relative to $A$**, or a homotopy **rel $A$**, when",
      "uses": [
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-continuity-characterisations-top",
      "source_section": "Statement",
      "quote": "- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]). - **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$. - **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \\subseteq Y$. - **(d)** $f^{-1}[S]$ is open in $X$ for every $S \\in \\mathcal{S}$. - **(e)** $f[\\overline{A}] \\subseteq \\overline{f[A]}$ for every $A \\subseteq X$, closures being taken in $X$ and in $Y$ respectively ([[def-interior-closure-boundary-top]]).",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "**Closed sets of a subspace are the traces of the closed sets.** A set $C \\subseteq S$ is closed in $S$ if and only if $C = F \\cap S$ for some closed $F \\subseteq X$. Indeed $S \\setminus (U \\cap S) = (X \\setminus U) \\cap S$ and $S \\setminus (F \\cap S) = (X \\setminus F) \\cap S$, so complementation inside $S$ matches complementation inside $X$ under tracing.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-product-universal-property",
      "source_section": "Statement",
      "quote": "Let $(X_i, \\mathcal{T}_i)_{i \\in I}$ be topological spaces and let $P := \\prod_{i \\in I} X_i$ carry the product topology, with projections $\\pi_j$ ([[def-product-topology]]). Then:",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-topological-space",
      "source_section": "Definition",
      "quote": "The members of $\\mathcal{T}$ are the **open** sets of $(X,\\mathcal{T})$. A subset $F \\subseteq X$ is **closed** when its complement $X \\setminus F$ is open, and **clopen** when it is both open and closed. By (T1) both $\\varnothing$ and $X$ are clopen. *Open and closed are not opposites*: a set may be neither, and it may be both, so \"not open\" is never a synonym for \"closed\".",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is called the **usual metric** of $\\mathbb{R}$. 2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval ([[def-interval]], [[def-metric-ball]]) $$B(x,r) = (x-r,\\ x+r),$$ and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$. 3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$ there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the **usual topology** of $\\mathbb{R}$. 4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let $S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The sets $I_0=[0,\\tfrac12]$ and $I_1=[\\tfrac12,1]$ are closed in $I$: their complements are respectively $I\\cap(\\tfrac12,\\tfrac32)$ and $I\\cap(-\\tfrac12,\\tfrac12)$, traces of open intervals of $\\mathbb R$. Hence $D_0=X\\times I_0$ and $D_1=X\\times I_1$ are closed in $X\\times I$, because they are the preimages of $I_0,I_1$ under the continuous time projection. [L1, L3, L4, L5]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L3",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The maps $a_0:I_0\\to I$, $a_0(t)=2t$, and $a_1:I_1\\to I$, $a_1(t)=2t-1$, are continuous. Indeed, at any $t_0$ and for any ambient open interval of radius $\\varepsilon$ about $a_j(t_0)$, the relative interval of radius $\\varepsilon/2$ about $t_0$ maps into it, since $|a_j(t)-a_j(t_0)|=2|t-t_0|$; [L5] turns these intervals into the required subspace neighbourhoods. [L5]",
      "step": "1.2",
      "inputs": [
        "L5"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Define $r_j:D_j\\to X\\times I$ by $r_j(x,t)=(x,a_j(t))$. The first component is the restricted product projection and the second is $a_j$ after the time projection, so $r_j$ is continuous by [L2], step 1.2 and [L3]. [step 1.2, L2, L3]",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.2",
        "L3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The maps $K_0:=F\\circ r_0:D_0\\to Y$ and $K_1:=G\\circ r_1:D_1\\to Y$ are continuous: for every closed $C\\subseteq Y$, $K_j^{-1}[C]=r_j^{-1}[F^{-1}[C]]$ or $r_j^{-1}[G^{-1}[C]]$, which is closed by [L1]. On $D_0\\cap D_1=X\\times\\{\\tfrac12\\}$ they agree, since $K_0(x,\\tfrac12)=F(x,1)=g(x)=G(x,0)=K_1(x,\\tfrac12)$. [step 2.1, A1, L1]",
      "step": "3.1",
      "inputs": [
        "L1",
        "2.1",
        "A1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Thus the displayed clauses define one function $K:X\\times I\\to Y$. If $C\\subseteq Y$ is closed, then $K^{-1}[C]$ is the union of $K_0^{-1}[C]$, regarded as a closed subset of $X\\times I$ through the closed subspace $D_0$, and $K_1^{-1}[C]$, regarded likewise through $D_1$. Each is closed by [L2] and steps 1.1 and 3.1, so their union is closed by [L4]. Hence $K$ is continuous by [L1]. [step 1.1, step 3.1, L1, L2, L4]",
      "step": "4.1",
      "inputs": [
        "L2",
        "1.1",
        "3.1",
        "L4",
        "L1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "At $t=0$ the first clause gives $K(x,0)=F(x,0)=f(x)$, and at $t=1$ the second gives $K(x,1)=G(x,1)=h(x)$. If $a\\in A$, both clauses give the common value $f(a)=g(a)=h(a)$ for every $t$. Therefore $K$ is a homotopy from $f$ to $h$ rel $A$. [step 4.1, A1] ∎",
      "step": "5.1",
      "inputs": [
        "4.1",
        "A1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 5.1 checks the two outer endpoints and the fixed-subspace condition"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-homotopy-transitivity-by-reparametrisation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-homotopy-relative-and-path-homotopy",
    "declared_target": "def-homotopy-relative-and-path-homotopy",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-homotopy-transitivity-by-reparametrisation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
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
    "source": "lem-homotopy-transitivity-by-reparametrisation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
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
    "source": "lem-homotopy-transitivity-by-reparametrisation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
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
    "source": "lem-homotopy-transitivity-by-reparametrisation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-topological-space",
    "declared_target": "def-topological-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-homotopy-transitivity-by-reparametrisation",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (6)

### `def-homotopy-relative-and-path-homotopy`

````markdown
---
id: def-homotopy-relative-and-path-homotopy
kind: definition
title: "Homotopies of continuous maps, homotopies relative to a subspace, and path homotopies relative to the endpoints"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuous-map-top, def-product-topology, def-subspace-topology-top, def-interval, def-path-connected]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Write $I=[0,1]$ with its usual subspace topology, as in [[def-path-connected]]. Let $X$ and $Y$ be topological spaces, and let $f,g:X\to Y$ be continuous maps ([[def-continuous-map-top]]).

A **homotopy from $f$ to $g$** is a continuous map

$$H:X\times I\longrightarrow Y$$

from the product space ([[def-product-topology]]) such that $H(x,0)=f(x)$ and $H(x,1)=g(x)$ for every $x\in X$. When such an $H$ exists, $f$ and $g$ are **homotopic**, written $f\simeq g$.

Let $A\subseteq X$ carry the subspace topology ([[def-subspace-topology-top]]). The homotopy $H$ is a **homotopy relative to $A$**, or a homotopy **rel $A$**, when

$$H(a,t)=f(a)=g(a)\qquad(a\in A,\ t\in I).$$

Thus a homotopy rel $A$ can exist only when $f|_A=g|_A$, and every ordinary homotopy is a homotopy rel $\varnothing$. We write $f\simeq_A g$ when a homotopy rel $A$ exists.

If $\alpha,\beta:I\to Y$ are paths with the same initial point and the same terminal point ([[def-path-connected]]), a **path homotopy from $\alpha$ to $\beta$ relative to the endpoints** is a homotopy $H:I\times I\to Y$ rel $\{0,1\}$. Explicitly,

$$H(s,0)=\alpha(s),\quad H(s,1)=\beta(s),\quad H(0,t)=\alpha(0)=\beta(0),\quad H(1,t)=\alpha(1)=\beta(1).$$

The first coordinate $s$ parametrises the path and the second coordinate $t$ parametrises the deformation.

## Remarks

- The adjective *relative* means pointwise fixed throughout the deformation, not merely mapped back into $A$.
- A homotopy is a map on a product. A family of maps $H_t(x):=H(x,t)$ is not by itself a homotopy unless the joint map $(x,t)\mapsto H_t(x)$ is continuous.
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

### `def-topological-space`

````markdown
---
id: def-topological-space
kind: definition
title: "Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: [def-topology, def-open-set-top, def-closed-set-top]
landmark: true
short: "topology, open, closed, clopen"
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
    - title: "Topological space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topological_space"
    - title: "Comparison of topologies (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Comparison_of_topologies"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

## Remarks

- **The topology is part of the data.** Two different topologies on one set are
  two different topological spaces, exactly as two different metrics on one set
  are two different metric spaces. Every statement below that says "the space
  $X$" has a topology fixed in advance.

- **Nothing is assumed beyond (T1)–(T3).** In particular no separation property
  is built into the word *space* here: distinct points need not lie in disjoint
  open sets, singletons need not be closed, and both failures occur in the
  standard topologies defined on the next item. Where a separation property is
  used it is stated as a hypothesis.

- **This library always writes *coarser* and *finer*.** The synonyms
  *smaller/larger* are unambiguous, but *weaker/stronger* is used in both
  directions in the literature and is avoided here entirely.

- **Why "arbitrary unions, finite intersections" and not the reverse.** The
  asymmetry is not a convention: it is what makes the metric notion of open set
  ([[def-metric-topology]]) an instance, and an arbitrary intersection of open
  sets genuinely need not be open. The failure is recorded on this page as a
  false statement, with witnesses in two different spaces.
````

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
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

