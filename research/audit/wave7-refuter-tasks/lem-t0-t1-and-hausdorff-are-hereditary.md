## Selection reasons

- high risk (5): 4 declared dependencies; 3 cited facts; boundary-sensitive language

## Target item — `lem-t0-t1-and-hausdorff-are-hereditary`

Normalized current SHA-256: `88dd207b9c0f05edb41ce7642c2e4658d7de1b2fdf6ad4d4fa5613af42ada4b0`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-t0-t1-and-hausdorff-are-hereditary
kind: lemma
title: "$T_0$, $T_1$, and Hausdorffness are hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-t0-and-t1-spaces, def-hausdorff-space, def-subspace-topology-top, def-hereditary-property]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §§5–6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

The properties $T_0$, $T_1$, and Hausdorffness are hereditary in the sense of [[def-hereditary-property]].

## Facts & Assumptions

**Given:** A subspace $S$ of a space $X$ carrying one of the stated properties.

[F1] An open set of $S$ is $S \cap U$ for an open set $U$ of $X$ ([[def-subspace-topology-top]]).

[F2] $T_0$ distinguishes a distinct pair by one open set, $T_1$ separates each point from the other by an open set, and Hausdorffness separates a distinct pair by disjoint open sets ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $x,y\in S$ be distinct. If $X$ is $T_0$, choose an open $U\subseteq X$ containing exactly one of $x,y$; then $S\cap U$ does the same in $S$. [F1, F2]

1.2 If $X$ is $T_1$, apply the preceding trace argument separately to the two open sets supplied by the $T_1$ condition, so each of $x,y$ has an open neighbourhood in $S$ missing the other. [F1, F2]

1.3 If $X$ is Hausdorff, choose disjoint open $U,V\subseteq X$ containing $x,y$ respectively; $S\cap U$ and $S\cap V$ are disjoint open neighbourhoods in $S$. [F1, F2]

2.1 Since $S$ was arbitrary, each of the three properties is hereditary. [step 1.1, step 1.2, step 1.3] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-t0-t1-and-hausdorff-are-hereditary",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf",
    "https://en.wikipedia.org/wiki/Separation_axiom"
  ],
  "rationale": "May states subspace preservation for Hausdorff spaces and the separation-axiom literature supplies the T0/T1 clauses; the library combines the three conventions in one lemma.",
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
      "fact": "F1",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is\n\n$$\\mathcal{T}_S := \\{\\, U \\cap S : U \\in \\mathcal{T} \\,\\},$$\n\nthe family of **traces** on $S$ of the open sets of $X$. The pair\n$(S, \\mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in\n$\\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the\nambient space needs emphasis.\n\n**$\\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):\n$\\varnothing = \\varnothing \\cap S$ and $S = X \\cap S$ are traces. (T2): if\n$\\mathcal{S}' \\subseteq \\mathcal{T}_S$, choose for each member a set of\n$\\mathcal{T}$ tracing to it — no choice principle is needed, since\n$U' := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\cap S \\subseteq W \\,\\}$ is a canonical\nsuch set for $W \\in \\mathcal{T}_S$, being open by (T2) in $X$ and satisfying\n$U' \\cap S = W$ — and then\n$\\bigcup_i (U_i \\cap S) = (\\bigcup_i U_i) \\cap S \\in \\mathcal{T}_S$ by (T2) in\n$X$. (T3): $(U \\cap S) \\cap (V \\cap S) = (U \\cap V) \\cap S \\in \\mathcal{T}_S$ by\n(T3) in $X$.\n\n**Closed sets of a subspace are the traces of the closed sets.** A set\n$C \\subseteq S$ is closed in $S$ if and only if $C = F \\cap S$ for some closed\n$F \\subseteq X$. Indeed $S \\setminus (U \\cap S) = (X \\setminus U) \\cap S$ and\n$S \\setminus (F \\cap S) = (X \\setminus F) \\cap S$, so complementation inside $S$\nmatches complementation inside $X$ under tracing.\n\n**Bases and subbases trace as well.** If $\\mathcal{B}$ is a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]) then\n$\\mathcal{B}_S := \\{\\, B \\cap S : B \\in \\mathcal{B} \\,\\}$ is a basis for\n$\\mathcal{T}_S$: its members are open in $S$, and for $W = U \\cap S$ open in $S$\nand $x \\in W$ there is $B \\in \\mathcal{B}$ with $x \\in B \\subseteq U$, whence\n$x \\in B \\cap S \\subseteq W$. The same computation with a subbasis $\\mathcal{S}$\nshows that $\\{\\, S_0 \\cap S : S_0 \\in \\mathcal{S} \\,\\}$ is a subbasis for\n$\\mathcal{T}_S$, since tracing commutes with finite intersections and with\nunions.\n\n**The inclusion is continuous.** The inclusion map $\\iota : S \\to X$,\n$\\iota(s) = s$, satisfies $\\iota^{-1}[U] = U \\cap S$ for every $U \\subseteq X$,\nso preimages of open sets are open and $\\iota$ is continuous\n([[thm-continuity-characterisations-top]], clause (b)). Moreover\n$\\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\\iota$ continuous: any\ntopology on $S$ for which $\\iota$ is continuous must contain every\n$\\iota^{-1}[U] = U \\cap S$, hence contain $\\mathcal{T}_S$.\n\n**Characteristic property of a map into a subspace.** Let $(Z, \\mathcal{T}_Z)$ be\na topological space and let $g : Z \\to S$ be a function. Then\n\n$$g \\text{ is continuous as a map } Z \\to (S,\\mathcal{T}_S) \\iff \\iota \\circ g \\text{ is continuous as a map } Z \\to (X,\\mathcal{T}) .$$\n\n*Proof.* For $U \\in \\mathcal{T}$ one has\n$(\\iota \\circ g)^{-1}[U] = g^{-1}[\\iota^{-1}[U]] = g^{-1}[U \\cap S]$. If $g$ is\ncontinuous then each $g^{-1}[U \\cap S]$ is open, so $\\iota \\circ g$ is continuous;\nconversely if $\\iota \\circ g$ is continuous then for any $W = U \\cap S$ open in\n$S$ the set $g^{-1}[W] = (\\iota \\circ g)^{-1}[U]$ is open, so $g$ is continuous.\nBoth directions use only clause (b) of [[thm-continuity-characterisations-top]].\n\n**Restriction of a continuous map.** If $f : X \\to Y$ is continuous and\n$S \\subseteq X$, then $f|_S : S \\to Y$ is continuous, since\n$(f|_S)^{-1}[V] = f^{-1}[V] \\cap S$ is open in $S$ for every open $V \\subseteq Y$\n([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).\n\n**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$\nis open in $S$ if and only if it is open in $X$: a trace $U \\cap S$ is then an\nintersection of two open sets of $X$, and conversely an open subset of $X$\ncontained in $S$ is its own trace. The same statement with \"closed\" throughout\nholds when $S$ is closed in $X$. Both are used in the pasting lemma of the next\nitem, and both fail without the hypothesis: $S$ itself is always open and closed\nin $S$, and need be neither in $X$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "F2",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are\n  *topologically distinguishable*: for all $x, y \\in X$ with $x \\ne y$ there is\n  an open set containing exactly one of $x$ and $y$.\n- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points\n  has an open set containing it and missing the other: for all $x, y \\in X$ with\n  $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with\n\n$$x \\in U, \\quad y \\notin U, \\qquad y \\in V, \\quad x \\notin V .$$\n\nNothing is asserted about a pair of equal points, so a space with at most one\npoint satisfies both conditions vacuously.\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), both conditions may be read with \"open\nneighbourhood\" in place of \"open set\"; and by the same equivalence recorded in\n[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since\na neighbourhood of $x$ contains an open one and an open neighbourhood is a\nneighbourhood.\n\n**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to\nthe reader, because it is the bottom arrow of the whole hierarchy on this page.\nLet $x \\ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set\ncontaining $x$ and not $y$, so it contains exactly one of the two points, which\nis the $T_0$ condition. Only the first half of the $T_1$ condition is used, so\nthe implication does not reverse formally, and it does not reverse in fact:\nSierpinski space is a witness, recorded on the companion page.\n\n**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set\nthat tells the pair apart, with no control over which of the two it contains;\n$T_1$ asks for *both* separations at once. In Sierpinski space\n$(\\{a,b\\}, \\{\\varnothing, \\{b\\}, \\{a,b\\}\\})$ of [[def-standard-topologies]] the\nopen set $\\{b\\}$ contains $b$ and not $a$, so the space is $T_0$; but the only\nopen set containing $a$ is the whole space, which also contains $b$, so it is\nnot $T_1$.\n\n**Neither condition is a property of a set alone.** Both are properties of the\npair $(X, \\mathcal{T})$, and both are inherited upwards along the comparison\norder of [[def-topological-space]]: if $\\mathcal{T}_1 \\subseteq \\mathcal{T}_2$\nand $(X,\\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is\n$(X,\\mathcal{T}_2)$, since the separating open sets of the coarser topology lie\nin the finer one. In particular the discrete topology satisfies both, and the\nindiscrete topology on a set with at least two points satisfies neither.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "F2",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is\n**Hausdorff** when any two distinct points are separated by disjoint open sets:\nfor all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with\n\n$$x \\in U, \\qquad y \\in V, \\qquad U \\cap V = \\varnothing .$$\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint\nopen neighbourhoods. Nothing is asserted about points that are equal, and the\ncondition is vacuous for a space with at most one point, so every such space is\nHausdorff.\n\n**Every metrizable space is Hausdorff.** This is not proved here, because it is\nalready discharged: [[def-metrizable-space]] records it among the two things\nevery metrizable space has, deriving it from\n[[thm-metric-hausdorff-separation]], which separates $p \\ne q$ in a metric space\nby the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In\nparticular $\\mathbb{R}$ with its usual topology, every $\\mathbb{R}^n$, and every\nsubspace of a metrizable space are Hausdorff.\n\n**Not every space is Hausdorff.** The indiscrete topology\n$\\mathcal{T}_{\\mathrm{ind}} = \\{\\varnothing, X\\}$ on a set $X = \\{a,b\\}$ with\n$a \\ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$\nis $X$, the only one containing $b$ is $X$, and $X \\cap X = X \\ne \\varnothing$.\nThis is the same two-point space that [[def-metrizable-space]] uses to exhibit a\ntopology induced by no metric, and the reason is the same one: failure of the\nHausdorff condition is an obstruction to metrizability.\n\n**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).\nIf $h : X \\to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \\ne z'$ in\n$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint\nopen $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and\n$z'$ respectively, a homeomorphism carrying the open sets of one space\nbijectively onto those of the other. So no space homeomorphic to a Hausdorff\nspace fails the condition.\n\n**Scope of this item.** Only the definition, the metrizable case and the\ntwo-point failure are recorded here, because that is all this page uses. The\nHausdorff condition is one of a graded family of separation axioms; that family,\nits ordering, and the questions of which of its members are hereditary or\npreserved by products, are not available at this point in the reading order and\nnothing here anticipates them. What this page does use is a single negative\nresult: a quotient of a Hausdorff space need not be Hausdorff, which is recorded\nbelow as a false statement and witnessed on the companion page.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $x,y\\in S$ be distinct. If $X$ is $T_0$, choose an open $U\\subseteq X$ containing exactly one of $x,y$; then $S\\cap U$ does the same in $S$. [F1, F2]",
      "step": "1.1",
      "inputs": [
        "F1",
        "F2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "If $X$ is $T_1$, apply the preceding trace argument separately to the two open sets supplied by the $T_1$ condition, so each of $x,y$ has an open neighbourhood in $S$ missing the other. [F1, F2]",
      "step": "1.2",
      "inputs": [
        "F1",
        "F2"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "If $X$ is Hausdorff, choose disjoint open $U,V\\subseteq X$ containing $x,y$ respectively; $S\\cap U$ and $S\\cap V$ are disjoint open neighbourhoods in $S$. [F1, F2]",
      "step": "1.3",
      "inputs": [
        "F1",
        "F2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Since $S$ was arbitrary, each of the three properties is hereditary. [step 1.1, step 1.2, step 1.3] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 1.3",
        "1.1",
        "1.2",
        "1.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement has no distinguished empty-set or empty-family case parameter or case."
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
      "status": "not_applicable",
      "reason": "The statement has no distinguished endpoint and codomain-boundary behavior parameter or case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
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
    "notes": "high risk (5): 4 declared dependencies; 3 cited facts; boundary-sensitive language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Checked empty subspace (vacuous satisfaction of separation axioms), singleton subspace (vacuous), and the general case of distinct points in S (handled by steps 1.1‑1.3). No counterexample to the hereditary claim exists; the proof requires no choice or extra hypotheses. Checked surface: Title, public claim, all numbered steps (1.1, 1.2, 1.3, 2.1), and Remarks (no Remarks section present) were read. All reasoning is mathematically sound. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/lem-t0-t1-and-hausdorff-are-hereditary--8e7cb74964bb7b92.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-t0-t1-and-hausdorff-are-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
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
    "source": "lem-t0-t1-and-hausdorff-are-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "lem-t0-t1-and-hausdorff-are-hereditary",
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
  },
  {
    "source": "lem-t0-t1-and-hausdorff-are-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-hereditary-property",
    "declared_target": "def-hereditary-property",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
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

