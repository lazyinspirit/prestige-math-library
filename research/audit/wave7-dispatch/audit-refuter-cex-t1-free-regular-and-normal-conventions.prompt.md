# Audit proof-refuter brief — Wave 7, step A6

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

- high risk (6): 4 declared dependencies; 4 cited facts; boundary-sensitive language

## Target item — `cex-t1-free-regular-and-normal-conventions`

Normalized current SHA-256: `c67b9ea8a4df14ba75ab6548a0efbb920bc3e83b4d86c8372928ac4880af519e`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-t1-free-regular-and-normal-conventions
kind: counterexample
title: "Regular and normal do not imply $T_1$ under the library's conventions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-regular-and-t3-spaces, def-normal-and-t4-spaces, def-t0-and-t1-spaces]
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
    - title: "S. Willard, General Topology, separation axioms"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement refuted

Every regular space, and every normal space, is $T_1$.

## Facts & Assumptions

**Given:** A two-point set $X$ with its indiscrete topology.

[F1] The indiscrete topology has only $\varnothing$ and $X$ as open sets, hence only $\varnothing$ and $X$ as closed sets ([[def-standard-topologies]]).

[F2] Regularity separates a point from a closed set that misses it; normality separates disjoint closed sets; $T_1$ separates each distinct point from the other by an open set ([[def-regular-and-t3-spaces]], [[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]).

## Counterexample

**Proof technique:** direct.

1.1 In this topology the only closed set missing a point is $\varnothing$, and it is separated from that point by $X$ and $\varnothing$; thus $X$ is regular. [F1, F2]

1.2 Every disjoint pair of closed sets has an empty member, so the same two open sets show that $X$ is normal. [F1, F2]

2.1 No open set contains one point while missing the other, so $X$ is not $T_1$. This refutes both implications. [F1, F2, step 1.1, step 1.2] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "cex-t1-free-regular-and-normal-conventions",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space",
    "https://en.wikipedia.org/wiki/Separation_axiom"
  ],
  "rationale": "The counterexample is convention-sensitive: the library uses regular and normal without T1, and standard finite spaces show the missing implication.",
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
      "source": "def-standard-topologies",
      "source_section": "Definition",
      "quote": "Throughout, a topology is as in [[def-topological-space]], and *finite*,\n*at most countable* and *uncountable* are as in [[def-countable]], so that\n\"countable\" always means \"at most countable\" and every finite set is countable.\nLet $X$ be a set. The six families below are topologies on $X$; that each really\nsatisfies (T1), (T2) and (T3) is discharged in full after the list.\n\n1. **Discrete topology.** $\\mathcal{T}_{\\mathrm{disc}} := \\mathcal{P}(X)$: every\n   subset is open, hence every subset is closed, hence every subset is clopen.\n2. **Indiscrete topology.** $\\mathcal{T}_{\\mathrm{ind}} := \\{\\varnothing, X\\}$.\n   Its closed sets are again $\\varnothing$ and $X$.\n3. **Cofinite topology.**\n   $\\mathcal{T}_{\\mathrm{cof}} := \\{\\varnothing\\} \\cup \\{\\, U \\subseteq X : X \\setminus U \\text{ is finite} \\,\\}$.\n   Its closed sets are $X$ together with the finite subsets of $X$.\n4. **Cocountable topology.**\n   $\\mathcal{T}_{\\mathrm{coc}} := \\{\\varnothing\\} \\cup \\{\\, U \\subseteq X : X \\setminus U \\text{ is at most countable} \\,\\}$.\n   Its closed sets are $X$ together with the at most countable subsets of $X$.\n5. **Particular-point topology.** Fix $p \\in X$ and put\n   $\\mathcal{T}_p := \\{\\varnothing\\} \\cup \\{\\, U \\subseteq X : p \\in U \\,\\}$: the\n   open sets are $\\varnothing$ and the sets containing $p$. Its closed sets are\n   $X$ together with the sets **not** containing $p$.\n6. **Sierpinski topology.** On a two-point set $S = \\{a, b\\}$ with $a \\ne b$,\n   $\\mathcal{T}_{\\mathrm{Sier}} := \\{\\varnothing, \\{b\\}, S\\}$. The pair\n   $(S, \\mathcal{T}_{\\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open\n   point and $a$ its closed point. This is exactly the particular-point topology\n   of item 5 on a two-point set with particular point $b$, listed separately\n   because it is quoted so often.\n\n**Two elementary facts about finite sets are used below, and both are proved\nhere.**\n\n*(i) A subset of a finite set is finite.* Let $F \\approx n$ with $n \\in \\mathbb{N}$\n([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection\n$\\varphi : F \\to n$, and let $B \\subseteq F$. Then $\\varphi$ restricts to a\nbijection of $B$ onto $\\varphi[B] \\subseteq n$\n([[def-injection-surjection-bijection]]). Every element of the von Neumann natural\n$n$ is a natural number strictly smaller than $n$\n([[lem-nat-order-is-membership]]), so $\\varphi[B]$ is a subset of $\\mathbb{N}$\nbounded above by $n$, hence finite by the sharper form of\n[[lem-subset-of-countable]] (\"a subset $S \\subseteq \\mathbb{N}$ is finite if it is\nbounded above\"). Since $\\approx$ is symmetric and transitive, $B$ is finite.\n\n*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is\nany object then $H \\cup \\{g\\}$ is finite: if $g \\in H$ there is nothing to prove,\nand otherwise a bijection $u : H \\to k$ extends to a bijection\n$H \\cup \\{g\\} \\to k \\cup \\{k\\} = \\sigma(k)$ by setting $u(g) := k$, which is\ninjective because $k \\notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a\nfinite set $F$ and argue by induction ([[thm-induction-principle]]) on\n$m \\in \\mathbb{N}$ over the statement \"for every $G$ with $G \\approx m$, the union\n$F \\cup G$ is finite\". At $m = 0$ we have $G = \\varnothing$ and $F \\cup G = F$. At\n$m = \\sigma(j)$, a bijection $\\psi : G \\to \\sigma(j)$ gives $g := \\psi^{-1}(j)$\nand $G' := G \\setminus \\{g\\} \\approx j$ (restrict $\\psi$), so\n$F \\cup G = (F \\cup G') \\cup \\{g\\}$ is finite by the induction hypothesis and the\nprevious sentence.\n\n**Discharge of the topology axioms.**\n\n*Discrete.* Every subset of $X$ lies in $\\mathcal{P}(X)$, so (T1), (T2) and (T3)\nhold with nothing to check.\n\n*Indiscrete.* (T1) is the definition. For (T2), a subfamily of\n$\\{\\varnothing, X\\}$ has union $\\varnothing$ (if it is empty or $\\{\\varnothing\\}$)\nor $X$ (otherwise). For (T3), $\\varnothing \\cap A = \\varnothing$ and\n$X \\cap X = X$.\n\n*Cofinite.* (T1): $\\varnothing$ is listed, and $X \\setminus X = \\varnothing$ is\nfinite. (T2): let $\\mathcal{S} \\subseteq \\mathcal{T}_{\\mathrm{cof}}$. If every\nmember is $\\varnothing$ the union is $\\varnothing$. Otherwise fix\n$U_0 \\in \\mathcal{S}$ with $U_0 \\ne \\varnothing$; then\n$X \\setminus \\bigcup \\mathcal{S} \\subseteq X \\setminus U_0$, which is finite, so\nthe left side is finite by (i). (T3): for nonempty $U, V$ with finite\ncomplements, $X \\setminus (U \\cap V) = (X \\setminus U) \\cup (X \\setminus V)$ is\nfinite by (ii); and if either of $U, V$ is empty so is $U \\cap V$. The closed sets\nare the complements of the open ones, that is $X = X \\setminus \\varnothing$\ntogether with the finite sets.\n\n*Cocountable.* Identical to the cofinite case with \"at most countable\" in place of\n\"finite\": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the\nstatement that a union of two at most countable sets is at most countable, which\nis the two-set instance of [[thm-countable-union-of-countable]] applied to the\nfamily $A_0 := U, A_1 := V, A_k := \\varnothing$ for $k \\ge 2$.\n\n*Particular point.* (T1): $\\varnothing$ is listed and $p \\in X$. (T2): a\nsubfamily whose members are all $\\varnothing$ has union $\\varnothing$; otherwise\nsome member contains $p$, hence so does the union. (T3): if $U$ and $V$ both\ncontain $p$ then so does $U \\cap V$; and if either is $\\varnothing$ then so is the\nintersection.\n\n*Sierpinski.* The special case $X = \\{a,b\\}$, $p = b$ of the previous paragraph:\nthe sets containing $b$ are $\\{b\\}$ and $S$, so\n$\\mathcal{T}_b = \\{\\varnothing, \\{b\\}, S\\} = \\mathcal{T}_{\\mathrm{Sier}}$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "F2",
      "source": "def-regular-and-t3-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **regular** when a point can be separated from a closed set not\n  containing it: for every closed $C \\subseteq X$ and every\n  $x \\in X \\setminus C$ there are $U, V \\in \\mathcal{T}$ with\n  $$x \\in U, \\qquad C \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), regularity reads: $x$ and $C$ have disjoint open\nneighbourhoods. The case $C = \\varnothing$ is allowed and is satisfied by\n$U = X$, $V = \\varnothing$, so no nonemptiness is hidden in the condition.\n\n**The convention fork, and this library's side of it.** Textbooks disagree about\nwhether the word *regular* carries a $T_1$ hypothesis. Munkres builds it in,\ndefining a regular space to be one in which points are closed and the separation\ncondition above holds; Kelley, Willard and Engelking do not, and reserve $T_3$\nfor the conjunction. **This library takes the second side**: *regular* names the\nseparation condition alone, $T_3$ names regular plus $T_1$, and every statement\nthat needs points to be closed writes the $T_1$ hypothesis out. The reason is\nthat the two halves are genuinely independent and each is used alone below: the\nindiscrete topology on a two-point set is regular and not $T_0$\n([[def-standard-topologies]]), and the cofinite topology on an infinite set is\n$T_1$ and not regular, both witnessed on the companion page.\n\n**Regularity alone implies no other separation axiom.** It does not imply $T_0$,\n$T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set\n$X$ the only closed sets are $\\varnothing$ and $X$, so the only pair $(C, x)$ to\nbe separated has $C = \\varnothing$, and $U = X$, $V = \\varnothing$ separates it;\nyet no two distinct points are distinguished by any open set. Conversely $T_1$\ndoes not imply regularity. It is the *conjunction* $T_3$ that sits above\nHausdorff in the hierarchy, and the proof of that is three items below.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "F2",
      "source": "def-normal-and-t4-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **normal** when any two disjoint closed sets can be separated by\n  disjoint open sets: for all closed $A, B \\subseteq X$ with\n  $A \\cap B = \\varnothing$ there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nEither of $A$, $B$ may be empty, and those cases are met by $U = \\varnothing$ or\n$V = \\varnothing$ together with $X$; so the condition hides no nonemptiness\nhypothesis. As with regularity, \"disjoint open sets\" may equivalently be read as\n\"disjoint open neighbourhoods of the two sets\" ([[def-neighbourhood-top]]).\n\n**Normality is the special case of complete normality at a disjoint closed\npair.** Disjoint closed sets are separated in the sense of\n[[def-separated-sets]], since the closure of a closed set is itself; so a space\nin which every *separated* pair can be put into disjoint open sets is in\nparticular normal. That stronger condition is defined later on this page, and the\nimplication is proved there.\n\n**The convention fork, and this library's side of it.** Exactly as for\nregularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.\nMunkres builds it in; Kelley, Willard and Engelking do not. **This library takes\nthe second side**: *normal* names the separation condition alone, $T_4$ names\nnormal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.\nThe reason is again that the two halves are independent, and here the point is\nsharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The\nindiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,\nits only closed sets being $\\varnothing$ and the whole space, and it is not even\n$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on\nthis page, the first as a false statement and both on the companion page.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
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
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "In this topology the only closed set missing a point is $\\varnothing$, and it is separated from that point by $X$ and $\\varnothing$; thus $X$ is regular. [F1, F2]",
      "step": "1.1",
      "inputs": [
        "F1",
        "F2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Every disjoint pair of closed sets has an empty member, so the same two open sets show that $X$ is normal. [F1, F2]",
      "step": "1.2",
      "inputs": [
        "F1",
        "F2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "No open set contains one point while missing the other, so $X$ is not $T_1$. This refutes both implications. [F1, F2, step 1.1, step 1.2] ∎",
      "step": "2.1",
      "inputs": [
        "F1",
        "F2",
        "step 1.1",
        "step 1.2",
        "1.1",
        "1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The statement has no distinguished zero or base-value case parameter or case."
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
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-t1-free-regular-and-normal-conventions",
    "sourcePage": "hereditary-and-productive-separation-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-standard-topologies",
    "declared_target": "def-standard-topologies",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-t1-free-regular-and-normal-conventions",
    "sourcePage": "hereditary-and-productive-separation-examples",
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
    "source": "cex-t1-free-regular-and-normal-conventions",
    "sourcePage": "hereditary-and-productive-separation-examples",
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
    "source": "cex-t1-free-regular-and-normal-conventions",
    "sourcePage": "hereditary-and-productive-separation-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
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

## Full text of every cited or declared item (4)

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

### `def-standard-topologies`

````markdown
---
id: def-standard-topologies
kind: definition
title: "The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-countable, lem-subset-of-countable, thm-countable-union-of-countable,
       def-equinumerous, def-injection-surjection-bijection, def-natural-numbers,
       lem-nat-order-is-membership, lem-nat-transitive-irreflexive, thm-induction-principle]
justified_by: []
aliases: [def-discrete-topology, def-indiscrete-topology, def-cofinite-topology,
          def-cocountable-topology, def-particular-point-topology, def-sierpinski-space]
landmark: true
short: "discrete, indiscrete, cofinite, cocountable, particular point, Sierpinski"
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
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Particular point topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
pipeline_run: null
---

## Definition

Throughout, a topology is as in [[def-topological-space]], and *finite*,
*at most countable* and *uncountable* are as in [[def-countable]], so that
"countable" always means "at most countable" and every finite set is countable.
Let $X$ be a set. The six families below are topologies on $X$; that each really
satisfies (T1), (T2) and (T3) is discharged in full after the list.

1. **Discrete topology.** $\mathcal{T}_{\mathrm{disc}} := \mathcal{P}(X)$: every
   subset is open, hence every subset is closed, hence every subset is clopen.
2. **Indiscrete topology.** $\mathcal{T}_{\mathrm{ind}} := \{\varnothing, X\}$.
   Its closed sets are again $\varnothing$ and $X$.
3. **Cofinite topology.**
   $\mathcal{T}_{\mathrm{cof}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$.
   Its closed sets are $X$ together with the finite subsets of $X$.
4. **Cocountable topology.**
   $\mathcal{T}_{\mathrm{coc}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is at most countable} \,\}$.
   Its closed sets are $X$ together with the at most countable subsets of $X$.
5. **Particular-point topology.** Fix $p \in X$ and put
   $\mathcal{T}_p := \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$: the
   open sets are $\varnothing$ and the sets containing $p$. Its closed sets are
   $X$ together with the sets **not** containing $p$.
6. **Sierpinski topology.** On a two-point set $S = \{a, b\}$ with $a \ne b$,
   $\mathcal{T}_{\mathrm{Sier}} := \{\varnothing, \{b\}, S\}$. The pair
   $(S, \mathcal{T}_{\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open
   point and $a$ its closed point. This is exactly the particular-point topology
   of item 5 on a two-point set with particular point $b$, listed separately
   because it is quoted so often.

**Two elementary facts about finite sets are used below, and both are proved
here.**

*(i) A subset of a finite set is finite.* Let $F \approx n$ with $n \in \mathbb{N}$
([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection
$\varphi : F \to n$, and let $B \subseteq F$. Then $\varphi$ restricts to a
bijection of $B$ onto $\varphi[B] \subseteq n$
([[def-injection-surjection-bijection]]). Every element of the von Neumann natural
$n$ is a natural number strictly smaller than $n$
([[lem-nat-order-is-membership]]), so $\varphi[B]$ is a subset of $\mathbb{N}$
bounded above by $n$, hence finite by the sharper form of
[[lem-subset-of-countable]] ("a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above"). Since $\approx$ is symmetric and transitive, $B$ is finite.

*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is
any object then $H \cup \{g\}$ is finite: if $g \in H$ there is nothing to prove,
and otherwise a bijection $u : H \to k$ extends to a bijection
$H \cup \{g\} \to k \cup \{k\} = \sigma(k)$ by setting $u(g) := k$, which is
injective because $k \notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a
finite set $F$ and argue by induction ([[thm-induction-principle]]) on
$m \in \mathbb{N}$ over the statement "for every $G$ with $G \approx m$, the union
$F \cup G$ is finite". At $m = 0$ we have $G = \varnothing$ and $F \cup G = F$. At
$m = \sigma(j)$, a bijection $\psi : G \to \sigma(j)$ gives $g := \psi^{-1}(j)$
and $G' := G \setminus \{g\} \approx j$ (restrict $\psi$), so
$F \cup G = (F \cup G') \cup \{g\}$ is finite by the induction hypothesis and the
previous sentence.

**Discharge of the topology axioms.**

*Discrete.* Every subset of $X$ lies in $\mathcal{P}(X)$, so (T1), (T2) and (T3)
hold with nothing to check.

*Indiscrete.* (T1) is the definition. For (T2), a subfamily of
$\{\varnothing, X\}$ has union $\varnothing$ (if it is empty or $\{\varnothing\}$)
or $X$ (otherwise). For (T3), $\varnothing \cap A = \varnothing$ and
$X \cap X = X$.

*Cofinite.* (T1): $\varnothing$ is listed, and $X \setminus X = \varnothing$ is
finite. (T2): let $\mathcal{S} \subseteq \mathcal{T}_{\mathrm{cof}}$. If every
member is $\varnothing$ the union is $\varnothing$. Otherwise fix
$U_0 \in \mathcal{S}$ with $U_0 \ne \varnothing$; then
$X \setminus \bigcup \mathcal{S} \subseteq X \setminus U_0$, which is finite, so
the left side is finite by (i). (T3): for nonempty $U, V$ with finite
complements, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is
finite by (ii); and if either of $U, V$ is empty so is $U \cap V$. The closed sets
are the complements of the open ones, that is $X = X \setminus \varnothing$
together with the finite sets.

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

*Particular point.* (T1): $\varnothing$ is listed and $p \in X$. (T2): a
subfamily whose members are all $\varnothing$ has union $\varnothing$; otherwise
some member contains $p$, hence so does the union. (T3): if $U$ and $V$ both
contain $p$ then so does $U \cap V$; and if either is $\varnothing$ then so is the
intersection.

*Sierpinski.* The special case $X = \{a,b\}$, $p = b$ of the previous paragraph:
the sets containing $b$ are $\{b\}$ and $S$, so
$\mathcal{T}_b = \{\varnothing, \{b\}, S\} = \mathcal{T}_{\mathrm{Sier}}$.

## Remarks

- **Two degenerate collapses.** If $X$ is finite then the cofinite topology is
  the discrete one, since every subset then has finite complement by fact (i)
  above; if $X$ is at most countable the cocountable topology is discrete for the
  same reason. Both families are therefore interesting only on an infinite,
  respectively uncountable, set, and every statement made about them below names
  that hypothesis.

- **Where the two extremes sit in the comparison order.** The discrete topology
  is the finest and the indiscrete the coarsest topology on $X$
  ([[def-topological-space]]): every topology is a subfamily of $\mathcal{P}(X)$
  and contains $\varnothing$ and $X$. Every other topology on $X$ lies between
  them, and the cofinite topology is coarser than the cocountable one, because a
  finite set is at most countable.

- **No choice principle is needed for any of the six, despite the citation.**
  The only appeal above that carries a choice hypothesis is
  [[thm-countable-union-of-countable]], whose statement assumes
  $\mathrm{AC}_\omega$, and it is used for a union of **two** sets only, padded
  with copies of $\varnothing$. That instance is provable in ZF alone, by
  interleaving two *given* enumerations, exactly as
  [[cor-irrationals-uncountable]] records for the union of the rationals and the
  irrationals; the general theorem is cited because it is the form in which this
  library states the union result, not because the strength is needed. Nothing
  about the cocountable topology depends on countable choice.

- **The Sierpinski point that is open is a genuine choice of labelling.** Both
  $\{\varnothing,\{b\},S\}$ and $\{\varnothing,\{a\},S\}$ are topologies, and they
  are carried to each other by the transposition of $a$ and $b$; this library
  fixes the first and always names the open point.
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

