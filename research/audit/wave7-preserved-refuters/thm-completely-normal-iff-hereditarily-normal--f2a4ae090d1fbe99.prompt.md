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

- critical risk (9): 5 declared dependencies; 4 cited facts; biconditional / both-direction claim; boundary-sensitive language

## Target item — `thm-completely-normal-iff-hereditarily-normal`

Normalized current SHA-256: `e2f2aad9f06c4bffaeac901eb69b7cc37f178ce679281589f1a56d96df7c9909`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-completely-normal-iff-hereditarily-normal
kind: theorem
title: "A space is completely normal if and only if every subspace is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-completely-normal-and-perfectly-normal-spaces, def-separated-sets, def-normal-and-t4-spaces, def-subspace-topology-top, def-hereditary-property]
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
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

A space is completely normal if and only if every one of its subspaces is normal. Equivalently, complete normality is exactly hereditary normality.

## Facts & Assumptions

**Given:** A space $X$ and the definitions of complete normality, normality, separated sets, and subspace topology.

[F1] Completely normal means that separated subsets have disjoint open neighbourhoods; normal means the same assertion for disjoint closed subsets ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-normal-and-t4-spaces]]).

[F2] Disjoint closed subsets are separated, and separation is unchanged on passing to a subspace ([[def-separated-sets]]).

[F3] Open subsets of a subspace are traces of ambient open sets ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $X$ is completely normal, let $S\subseteq X$, and let $A,B$ be disjoint closed subsets of $S$. By [F2] they are separated in $X$, so ambient disjoint open sets containing them trace to disjoint open sets of $S$. Thus $S$ is normal. [F1, F2, F3]

1.2 Conversely suppose every subspace of $X$ is normal, and let $A,B\subseteq X$ be separated. Put $Y=X\setminus((\overline A\setminus A)\cup(\overline B\setminus B))$; separation ensures that $A,B\subseteq Y$, and they are disjoint closed subsets of $Y$. [F2]

2.1 Normality of $Y$ gives disjoint open $U,V\subseteq Y$ containing $A,B$. Write $U=G\cap Y$ and $V=H\cap Y$ with $G,H$ open in $X$; then $G\cap H$ is contained in $(\overline A\setminus A)\cup(\overline B\setminus B)$. [F3, step 1.2]

3.1 The open sets $G\setminus\overline B$ and $H\setminus\overline A$ contain $A$ and $B$ respectively, and are disjoint: a point of their intersection would lie in $G\cap H$ but in neither of the two displayed closure differences. [F2, step 2.1]

4.1 Hence every separated pair in $X$ has disjoint open neighbourhoods, so $X$ is completely normal. [F1, step 3.1] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-completely-normal-iff-hereditarily-normal",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Normal_space"
  ],
  "rationale": "The source explicitly identifies completely normal spaces with spaces every subspace of which is normal and with separation of separated sets.",
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
      "source": "def-completely-normal-and-perfectly-normal-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **completely normal** when any two **separated** sets can be put into\n  disjoint open sets: for all $A, B \\subseteq X$ that are separated\n  ([[def-separated-sets]]) there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n  $X$ is **$T_5$** when it is completely normal and $T_1$\n  ([[def-t0-and-t1-spaces]]).\n- $X$ is **perfectly normal** when $X$ is normal ([[def-normal-and-t4-spaces]])\n  **and** every closed subset of $X$ is a $G_\\delta$\n  ([[def-g-delta-and-f-sigma-in-a-topological-space]]). $X$ is **$T_6$** when it\n  is perfectly normal and $T_1$.\n\nAs with *regular* and *normal*, neither adjective carries a $T_1$ hypothesis in\nthis library, and the numerals name the conjunctions.\n\n**The $G_\\delta$ condition, restated by complementation.** Every closed subset of\n$X$ is a $G_\\delta$ if and only if every open subset of $X$ is an $F_\\sigma$,\nbecause complementation exchanges the two classes and exchanges open with closed\n([[def-g-delta-and-f-sigma-in-a-topological-space]]). Both forms are used below,\nand the second is the one the implication $T_6 \\Rightarrow T_5$ consumes.\n\n**Complete normality really is stronger than normality, on its face.** Disjoint\nclosed sets are separated ([[def-separated-sets]]), so the complete-normality\ncondition applies in particular to them; that is the whole proof of the next\nitem. What complete normality adds is the ability to separate sets that are not\nclosed, for instance the two sets $(0,1)$ and $(1,2)$ of $\\mathbb{R}$, which are\nseparated and neither of which is closed.\n\n**A competing definition of *perfectly normal*, and why this library does not\nuse it.** Some texts define a perfectly normal space to be a normal space in\nwhich every closed set is a **zero set** ([[def-zero-sets-and-cozero-sets]]).\nThat condition is equivalent to the one above, but the equivalence rests on\nUrysohn's lemma, which is not available at this point in the reading order; the\n$G_\\delta$ form is therefore the definition here, and no statement on this page\nasserts the equivalence. What *is* proved here is one direction in the metric\ncase, where the distance function exhibits every closed set simultaneously as a\nzero set and as a $G_\\delta$.",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-normal-and-t4-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **normal** when any two disjoint closed sets can be separated by\n  disjoint open sets: for all closed $A, B \\subseteq X$ with\n  $A \\cap B = \\varnothing$ there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nEither of $A$, $B$ may be empty, and those cases are met by $U = \\varnothing$ or\n$V = \\varnothing$ together with $X$; so the condition hides no nonemptiness\nhypothesis. As with regularity, \"disjoint open sets\" may equivalently be read as\n\"disjoint open neighbourhoods of the two sets\" ([[def-neighbourhood-top]]).\n\n**Normality is the special case of complete normality at a disjoint closed\npair.** Disjoint closed sets are separated in the sense of\n[[def-separated-sets]], since the closure of a closed set is itself; so a space\nin which every *separated* pair can be put into disjoint open sets is in\nparticular normal. That stronger condition is defined later on this page, and the\nimplication is proved there.\n\n**The convention fork, and this library's side of it.** Exactly as for\nregularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.\nMunkres builds it in; Kelley, Willard and Engelking do not. **This library takes\nthe second side**: *normal* names the separation condition alone, $T_4$ names\nnormal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.\nThe reason is again that the two halves are independent, and here the point is\nsharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The\nindiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,\nits only closed sets being $\\varnothing$ and the whole space, and it is not even\n$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on\nthis page, the first as a false statement and both on the companion page.",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "F2",
      "source": "def-separated-sets",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$A, B \\subseteq X$, with closures taken in $X$\n([[def-interior-closure-boundary-top]]). Then $A$ and $B$ are **separated** when\n\n$$\\overline{A} \\cap B = \\varnothing \\qquad \\text{and} \\qquad A \\cap \\overline{B} = \\varnothing .$$\n\nEquivalently, neither set meets the closure of the other. The condition is\nsymmetric in $A$ and $B$ by construction, and it is inherited downwards: if $A$\nand $B$ are separated and $A' \\subseteq A$, $B' \\subseteq B$, then $A'$ and $B'$\nare separated, because $A' \\subseteq A$ forces\n$\\overline{A'} \\subseteq \\overline{A}$, the closure $\\overline{A}$ being a closed\nsuperset of $A'$ and $\\overline{A'}$ the smallest such\n([[thm-closure-characterisation-top]], claim 2).\n\n**Separated sets are disjoint, and being disjoint is not enough.** From\n$A \\subseteq \\overline{A}$ one gets\n$A \\cap B \\subseteq \\overline{A} \\cap B = \\varnothing$. The converse fails: in\n$\\mathbb{R}$ with its usual topology the sets $A = (0,1)$ and $B = [1,2)$ are\ndisjoint, yet $1 \\in \\overline{A} \\cap B$, so they are not separated.\n\n**Two sufficient conditions, both used constantly below.**\n\n1. *Disjoint closed sets are separated.* If $A$ and $B$ are closed and disjoint\n   then $\\overline{A} = A$ and $\\overline{B} = B$\n   ([[thm-closure-characterisation-top]], claim 2), so both displayed\n   intersections are $A \\cap B = \\varnothing$.\n2. *Disjoint open sets are separated.* Let $U, V$ be open and disjoint. If\n   $y \\in V$ then $V$ is an open set containing $y$ and missing $U$, so\n   $y \\notin \\overline{U}$ by clause (c) of\n   [[thm-closure-characterisation-top]]; hence $\\overline{U} \\cap V = \\varnothing$,\n   and symmetrically $U \\cap \\overline{V} = \\varnothing$.\n\n**Separation is absolute rather than relative to a subspace.** Let\n$A, B \\subseteq S \\subseteq X$ with $S$ carrying the subspace topology\n([[def-subspace-topology-top]]). Then $A$ and $B$ are separated in the space $S$\nif and only if they are separated in $X$. Indeed\n$\\operatorname{cl}_S(A) = \\overline{A} \\cap S$\n([[thm-subspace-closure-and-interior]], claim 1), so\n\n$$\\operatorname{cl}_S(A) \\cap B = \\overline{A} \\cap S \\cap B = \\overline{A} \\cap B$$\n\nbecause $B \\subseteq S$, and symmetrically for the other intersection. So the\nphrase \"$A$ and $B$ are separated\" needs no ambient space named once both sets\nare fixed, and this is exactly what makes the notion the right hypothesis for\ncomplete normality later on this page.",
      "uses": [
        "1.1",
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "F3",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is\n\n$$\\mathcal{T}_S := \\{\\, U \\cap S : U \\in \\mathcal{T} \\,\\},$$\n\nthe family of **traces** on $S$ of the open sets of $X$. The pair\n$(S, \\mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in\n$\\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the\nambient space needs emphasis.\n\n**$\\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):\n$\\varnothing = \\varnothing \\cap S$ and $S = X \\cap S$ are traces. (T2): if\n$\\mathcal{S}' \\subseteq \\mathcal{T}_S$, choose for each member a set of\n$\\mathcal{T}$ tracing to it — no choice principle is needed, since\n$U' := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\cap S \\subseteq W \\,\\}$ is a canonical\nsuch set for $W \\in \\mathcal{T}_S$, being open by (T2) in $X$ and satisfying\n$U' \\cap S = W$ — and then\n$\\bigcup_i (U_i \\cap S) = (\\bigcup_i U_i) \\cap S \\in \\mathcal{T}_S$ by (T2) in\n$X$. (T3): $(U \\cap S) \\cap (V \\cap S) = (U \\cap V) \\cap S \\in \\mathcal{T}_S$ by\n(T3) in $X$.\n\n**Closed sets of a subspace are the traces of the closed sets.** A set\n$C \\subseteq S$ is closed in $S$ if and only if $C = F \\cap S$ for some closed\n$F \\subseteq X$. Indeed $S \\setminus (U \\cap S) = (X \\setminus U) \\cap S$ and\n$S \\setminus (F \\cap S) = (X \\setminus F) \\cap S$, so complementation inside $S$\nmatches complementation inside $X$ under tracing.\n\n**Bases and subbases trace as well.** If $\\mathcal{B}$ is a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]) then\n$\\mathcal{B}_S := \\{\\, B \\cap S : B \\in \\mathcal{B} \\,\\}$ is a basis for\n$\\mathcal{T}_S$: its members are open in $S$, and for $W = U \\cap S$ open in $S$\nand $x \\in W$ there is $B \\in \\mathcal{B}$ with $x \\in B \\subseteq U$, whence\n$x \\in B \\cap S \\subseteq W$. The same computation with a subbasis $\\mathcal{S}$\nshows that $\\{\\, S_0 \\cap S : S_0 \\in \\mathcal{S} \\,\\}$ is a subbasis for\n$\\mathcal{T}_S$, since tracing commutes with finite intersections and with\nunions.\n\n**The inclusion is continuous.** The inclusion map $\\iota : S \\to X$,\n$\\iota(s) = s$, satisfies $\\iota^{-1}[U] = U \\cap S$ for every $U \\subseteq X$,\nso preimages of open sets are open and $\\iota$ is continuous\n([[thm-continuity-characterisations-top]], clause (b)). Moreover\n$\\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\\iota$ continuous: any\ntopology on $S$ for which $\\iota$ is continuous must contain every\n$\\iota^{-1}[U] = U \\cap S$, hence contain $\\mathcal{T}_S$.\n\n**Characteristic property of a map into a subspace.** Let $(Z, \\mathcal{T}_Z)$ be\na topological space and let $g : Z \\to S$ be a function. Then\n\n$$g \\text{ is continuous as a map } Z \\to (S,\\mathcal{T}_S) \\iff \\iota \\circ g \\text{ is continuous as a map } Z \\to (X,\\mathcal{T}) .$$\n\n*Proof.* For $U \\in \\mathcal{T}$ one has\n$(\\iota \\circ g)^{-1}[U] = g^{-1}[\\iota^{-1}[U]] = g^{-1}[U \\cap S]$. If $g$ is\ncontinuous then each $g^{-1}[U \\cap S]$ is open, so $\\iota \\circ g$ is continuous;\nconversely if $\\iota \\circ g$ is continuous then for any $W = U \\cap S$ open in\n$S$ the set $g^{-1}[W] = (\\iota \\circ g)^{-1}[U]$ is open, so $g$ is continuous.\nBoth directions use only clause (b) of [[thm-continuity-characterisations-top]].\n\n**Restriction of a continuous map.** If $f : X \\to Y$ is continuous and\n$S \\subseteq X$, then $f|_S : S \\to Y$ is continuous, since\n$(f|_S)^{-1}[V] = f^{-1}[V] \\cap S$ is open in $S$ for every open $V \\subseteq Y$\n([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).\n\n**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$\nis open in $S$ if and only if it is open in $X$: a trace $U \\cap S$ is then an\nintersection of two open sets of $X$, and conversely an open subset of $X$\ncontained in $S$ is its own trace. The same statement with \"closed\" throughout\nholds when $S$ is closed in $X$. Both are used in the pasting lemma of the next\nitem, and both fail without the hypothesis: $S$ itself is always open and closed\nin $S$, and need be neither in $X$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Suppose $X$ is completely normal, let $S\\subseteq X$, and let $A,B$ be disjoint closed subsets of $S$. By [F2] they are separated in $X$, so ambient disjoint open sets containing them trace to disjoint open sets of $S$. Thus $S$ is normal. [F1, F2, F3]",
      "step": "1.1",
      "inputs": [
        "F1",
        "F2",
        "F3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Conversely suppose every subspace of $X$ is normal, and let $A,B\\subseteq X$ be separated. Put $Y=X\\setminus((\\overline A\\setminus A)\\cup(\\overline B\\setminus B))$; separation ensures that $A,B\\subseteq Y$, and they are disjoint closed subsets of $Y$. [F2]",
      "step": "1.2",
      "inputs": [
        "F2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Normality of $Y$ gives disjoint open $U,V\\subseteq Y$ containing $A,B$. Write $U=G\\cap Y$ and $V=H\\cap Y$ with $G,H$ open in $X$; then $G\\cap H$ is contained in $(\\overline A\\setminus A)\\cup(\\overline B\\setminus B)$. [F3, step 1.2]",
      "step": "2.1",
      "inputs": [
        "F3",
        "step 1.2",
        "1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The open sets $G\\setminus\\overline B$ and $H\\setminus\\overline A$ contain $A$ and $B$ respectively, and are disjoint: a point of their intersection would lie in $G\\cap H$ but in neither of the two displayed closure differences. [F2, step 2.1]",
      "step": "3.1",
      "inputs": [
        "F2",
        "step 2.1",
        "2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Hence every separated pair in $X$ has disjoint open neighbourhoods, so $X$ is completely normal. [F1, step 3.1] ∎",
      "step": "4.1",
      "inputs": [
        "F1",
        "step 3.1",
        "3.1"
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
      "status": "checked",
      "evidence": "statement: the forward implication was followed through its numbered proof steps and its hypotheses were not reversed"
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "statement: the reverse implication was followed independently through its numbered proof steps"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-completely-normal-iff-hereditarily-normal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-completely-normal-and-perfectly-normal-spaces",
    "declared_target": "def-completely-normal-and-perfectly-normal-spaces",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completely-normal-iff-hereditarily-normal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-separated-sets",
    "declared_target": "def-separated-sets",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completely-normal-iff-hereditarily-normal",
    "sourcePage": "hereditary-and-productive-separation",
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
    "source": "thm-completely-normal-iff-hereditarily-normal",
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
    "source": "thm-completely-normal-iff-hereditarily-normal",
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

## Full text of every cited or declared item (5)

### `def-completely-normal-and-perfectly-normal-spaces`

````markdown
---
id: def-completely-normal-and-perfectly-normal-spaces
kind: definition
title: "Completely normal ($T_5$) and perfectly normal ($T_6$) spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-and-t4-spaces, def-separated-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-zero-sets-and-cozero-sets,
       def-t0-and-t1-spaces, def-topological-space]
justified_by: []
aliases: [def-completely-normal-space, def-perfectly-normal-space, def-t5-space, def-t6-space]
landmark: true
short: "completely normal, perfectly normal"
verification:
  precheck: n/a
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
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **completely normal** when any two **separated** sets can be put into
  disjoint open sets: for all $A, B \subseteq X$ that are separated
  ([[def-separated-sets]]) there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
  $X$ is **$T_5$** when it is completely normal and $T_1$
  ([[def-t0-and-t1-spaces]]).
- $X$ is **perfectly normal** when $X$ is normal ([[def-normal-and-t4-spaces]])
  **and** every closed subset of $X$ is a $G_\delta$
  ([[def-g-delta-and-f-sigma-in-a-topological-space]]). $X$ is **$T_6$** when it
  is perfectly normal and $T_1$.

As with *regular* and *normal*, neither adjective carries a $T_1$ hypothesis in
this library, and the numerals name the conjunctions.

**The $G_\delta$ condition, restated by complementation.** Every closed subset of
$X$ is a $G_\delta$ if and only if every open subset of $X$ is an $F_\sigma$,
because complementation exchanges the two classes and exchanges open with closed
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Both forms are used below,
and the second is the one the implication $T_6 \Rightarrow T_5$ consumes.

**Complete normality really is stronger than normality, on its face.** Disjoint
closed sets are separated ([[def-separated-sets]]), so the complete-normality
condition applies in particular to them; that is the whole proof of the next
item. What complete normality adds is the ability to separate sets that are not
closed, for instance the two sets $(0,1)$ and $(1,2)$ of $\mathbb{R}$, which are
separated and neither of which is closed.

**A competing definition of *perfectly normal*, and why this library does not
use it.** Some texts define a perfectly normal space to be a normal space in
which every closed set is a **zero set** ([[def-zero-sets-and-cozero-sets]]).
That condition is equivalent to the one above, but the equivalence rests on
Urysohn's lemma, which is not available at this point in the reading order; the
$G_\delta$ form is therefore the definition here, and no statement on this page
asserts the equivalence. What *is* proved here is one direction in the metric
case, where the distance function exhibits every closed set simultaneously as a
zero set and as a $G_\delta$.

## Remarks

- **Both axioms are about pairs of sets, not about points.** Neither implies
  $T_0$: the indiscrete topology on a two-point set is completely normal and
  perfectly normal, since its only separated pairs have an empty member and its
  only closed sets are open, and it is not $T_0$. That is why the numerals $T_5$
  and $T_6$ include $T_1$.

- **A frequently quoted equivalent of complete normality is not proved here.** A
  space is completely normal exactly when every subspace of it is normal, which
  is why *hereditarily normal* is the other common name. This page defines and
  uses only the separated-sets form; the hereditary characterisation belongs to a
  later page, and nothing here depends on it.

- **The chain at the top.** Perfectly normal implies completely normal, which
  implies normal; the second implication is immediate and the first is a real
  theorem, proved two items below.
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

### `def-separated-sets`

````markdown
---
id: def-separated-sets
kind: definition
title: "Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-subspace-topology-top,
       thm-subspace-closure-and-interior]
justified_by: []
forward_refs: [def-separable-space]
aliases: [def-separated-sets-top]
landmark: true
short: "separated sets"
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
    - title: "Separated sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separated_sets"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "S. Willard, General Topology, §14"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$A, B \subseteq X$, with closures taken in $X$
([[def-interior-closure-boundary-top]]). Then $A$ and $B$ are **separated** when

$$\overline{A} \cap B = \varnothing \qquad \text{and} \qquad A \cap \overline{B} = \varnothing .$$

Equivalently, neither set meets the closure of the other. The condition is
symmetric in $A$ and $B$ by construction, and it is inherited downwards: if $A$
and $B$ are separated and $A' \subseteq A$, $B' \subseteq B$, then $A'$ and $B'$
are separated, because $A' \subseteq A$ forces
$\overline{A'} \subseteq \overline{A}$, the closure $\overline{A}$ being a closed
superset of $A'$ and $\overline{A'}$ the smallest such
([[thm-closure-characterisation-top]], claim 2).

**Separated sets are disjoint, and being disjoint is not enough.** From
$A \subseteq \overline{A}$ one gets
$A \cap B \subseteq \overline{A} \cap B = \varnothing$. The converse fails: in
$\mathbb{R}$ with its usual topology the sets $A = (0,1)$ and $B = [1,2)$ are
disjoint, yet $1 \in \overline{A} \cap B$, so they are not separated.

**Two sufficient conditions, both used constantly below.**

1. *Disjoint closed sets are separated.* If $A$ and $B$ are closed and disjoint
   then $\overline{A} = A$ and $\overline{B} = B$
   ([[thm-closure-characterisation-top]], claim 2), so both displayed
   intersections are $A \cap B = \varnothing$.
2. *Disjoint open sets are separated.* Let $U, V$ be open and disjoint. If
   $y \in V$ then $V$ is an open set containing $y$ and missing $U$, so
   $y \notin \overline{U}$ by clause (c) of
   [[thm-closure-characterisation-top]]; hence $\overline{U} \cap V = \varnothing$,
   and symmetrically $U \cap \overline{V} = \varnothing$.

**Separation is absolute rather than relative to a subspace.** Let
$A, B \subseteq S \subseteq X$ with $S$ carrying the subspace topology
([[def-subspace-topology-top]]). Then $A$ and $B$ are separated in the space $S$
if and only if they are separated in $X$. Indeed
$\operatorname{cl}_S(A) = \overline{A} \cap S$
([[thm-subspace-closure-and-interior]], claim 1), so

$$\operatorname{cl}_S(A) \cap B = \overline{A} \cap S \cap B = \overline{A} \cap B$$

because $B \subseteq S$, and symmetrically for the other intersection. So the
phrase "$A$ and $B$ are separated" needs no ambient space named once both sets
are fixed, and this is exactly what makes the notion the right hypothesis for
complete normality later on this page.

## Remarks

- **Why the notion is not "disjoint closures".** Requiring
  $\overline{A} \cap \overline{B} = \varnothing$ is strictly stronger, and it is
  too strong to be useful: in $\mathbb{R}$ the sets $(0,1)$ and $(1,2)$ are
  separated in the sense above, while their closures $[0,1]$ and $[1,2]$ meet.
  The definition asks only that each set avoid the *other's* closure.

- **The vocabulary collides with two others and neither is meant here.** "$A$ and
  $B$ are separated by disjoint open sets" is a different, stronger condition,
  and it is the conclusion of the normality and complete-normality axioms below,
  not the hypothesis. "Separable", meaning "has an at most countable dense
  subset", is unrelated and is defined later in [[def-separable-space]].

- **Nothing here needs a separation axiom.** The definition and all four
  observations above hold in an arbitrary topological space, points closed or
  not.
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

