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

- critical risk (9): 6 declared dependencies; 6 cited facts; biconditional / both-direction claim; boundary-sensitive language

## Target item — `cor-perfect-normality-is-hereditary`

Normalized current SHA-256: `ed05d5603e206d2a0b3614f84c39064e45ea56007745e943eec65d8a8e3ad3f7`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-perfect-normality-is-hereditary
kind: corollary
title: "Assuming countable choice, perfect normality, and hence $T_6$, is hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-perfectly-normal-implies-completely-normal, thm-completely-normal-iff-hereditarily-normal, lem-t0-t1-and-hausdorff-are-hereditary, def-g-delta-and-f-sigma-in-a-topological-space, def-subspace-topology-top, def-countable-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Engelking, General Topology, §1.5"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

Assuming the Axiom of Countable Choice, perfect normality is hereditary. Consequently $T_6$ is hereditary.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a subspace $S$ of a perfectly normal space $X$.

[A1] The Axiom of Countable Choice ([[def-countable-choice]]).

[L1] Under [A1], every perfectly normal space is completely normal ([[thm-perfectly-normal-implies-completely-normal]]).

[L2] A space is completely normal exactly when every one of its subspaces is normal; $T_1$ is hereditary ([[thm-completely-normal-iff-hereditarily-normal]], [[lem-t0-t1-and-hausdorff-are-hereditary]]).

[F1] A closed set of $S$ is $C\cap S$ for ambient closed $C$; a $G_\delta$ is a countable intersection of open sets ([[def-subspace-topology-top]], [[def-g-delta-and-f-sigma-in-a-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $X$ is completely normal. Every subspace of $S$ is then a subspace of $X$, hence normal by [L2]; applying [L2] to $S$ shows that $S$ is completely normal. The $T_1$ clause of [L2] also shows that $S$ is $T_1$ when $X$ is $T_6$. [A1, L1, L2]

1.2 Let $F$ be closed in $S$. Write $F=C\cap S$ with $C$ closed in $X$; perfect normality writes $C=\bigcap_{n\in\mathbb N}U_n$ with every $U_n$ open in $X$. [F1]

2.1 Then $F=\bigcap_{n\in\mathbb N}(U_n\cap S)$, a $G_\delta$ of $S$. Thus $S$ is perfectly normal, and with its inherited $T_1$ property it is $T_6$ when $X$ is $T_6$. [F1, step 1.1, step 1.2] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "cor-perfect-normality-is-hereditary",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Normal_space"
  ],
  "rationale": "Perfect normality is standardly hereditary; this version exposes countable choice and uses the library convention separating T6 from perfect normality.",
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
      "fact": "A1",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.\n\nEquivalently, in the vocabulary of [[def-choice-function]]: every at most\ncountable family of nonempty sets ([[def-countable]]) has a choice function.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-perfectly-normal-implies-completely-normal",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let\n$(X, \\mathcal{T})$ be a perfectly normal space\n([[def-completely-normal-and-perfectly-normal-spaces]]): $X$ is normal\n([[def-normal-and-t4-spaces]]) and every closed subset of $X$ is a $G_\\delta$,\nequivalently every open subset of $X$ is an $F_\\sigma$\n([[def-g-delta-and-f-sigma-in-a-topological-space]]). Then $X$ is **completely\nnormal**: any two separated sets $A, B \\subseteq X$ ([[def-separated-sets]])\nadmit disjoint open $U \\supseteq A$ and $V \\supseteq B$.\n\nConsequently $T_6$ implies $T_5$.\n\n**No continuous function is constructed anywhere in the proof**, and in\nparticular Urysohn's lemma is not used. All that is consumed is normality,\napplied once to each member of a countable family of closed sets, and the\n$F_\\sigma$ presentation of two open sets.\n\n**Where the choice principle is spent, and why it is not removable as written.**\nStep 4.1 selects, for each $n \\in \\mathbb{N}$ at once, one open set $U_n$ out of\nthe nonempty family that normality provides for the closed set $F_n$, and\nlikewise one $V_n$; normality is an existence statement and supplies no rule for\nsingling out a member, so extracting the two sequences is an application of\n$\\mathrm{AC}_\\omega$ and of nothing stronger. The hypothesis is stated in the\ntheorem rather than hidden in the proof, as this library does everywhere.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-completely-normal-iff-hereditarily-normal",
      "source_section": "Statement",
      "quote": "A space is completely normal if and only if every one of its subspaces is normal. Equivalently, complete normality is exactly hereditary normality.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-t0-t1-and-hausdorff-are-hereditary",
      "source_section": "Statement",
      "quote": "The properties $T_0$, $T_1$, and Hausdorffness are hereditary in the sense of [[def-hereditary-property]].",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is\n\n$$\\mathcal{T}_S := \\{\\, U \\cap S : U \\in \\mathcal{T} \\,\\},$$\n\nthe family of **traces** on $S$ of the open sets of $X$. The pair\n$(S, \\mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in\n$\\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the\nambient space needs emphasis.\n\n**$\\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):\n$\\varnothing = \\varnothing \\cap S$ and $S = X \\cap S$ are traces. (T2): if\n$\\mathcal{S}' \\subseteq \\mathcal{T}_S$, choose for each member a set of\n$\\mathcal{T}$ tracing to it — no choice principle is needed, since\n$U' := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\cap S \\subseteq W \\,\\}$ is a canonical\nsuch set for $W \\in \\mathcal{T}_S$, being open by (T2) in $X$ and satisfying\n$U' \\cap S = W$ — and then\n$\\bigcup_i (U_i \\cap S) = (\\bigcup_i U_i) \\cap S \\in \\mathcal{T}_S$ by (T2) in\n$X$. (T3): $(U \\cap S) \\cap (V \\cap S) = (U \\cap V) \\cap S \\in \\mathcal{T}_S$ by\n(T3) in $X$.\n\n**Closed sets of a subspace are the traces of the closed sets.** A set\n$C \\subseteq S$ is closed in $S$ if and only if $C = F \\cap S$ for some closed\n$F \\subseteq X$. Indeed $S \\setminus (U \\cap S) = (X \\setminus U) \\cap S$ and\n$S \\setminus (F \\cap S) = (X \\setminus F) \\cap S$, so complementation inside $S$\nmatches complementation inside $X$ under tracing.\n\n**Bases and subbases trace as well.** If $\\mathcal{B}$ is a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]) then\n$\\mathcal{B}_S := \\{\\, B \\cap S : B \\in \\mathcal{B} \\,\\}$ is a basis for\n$\\mathcal{T}_S$: its members are open in $S$, and for $W = U \\cap S$ open in $S$\nand $x \\in W$ there is $B \\in \\mathcal{B}$ with $x \\in B \\subseteq U$, whence\n$x \\in B \\cap S \\subseteq W$. The same computation with a subbasis $\\mathcal{S}$\nshows that $\\{\\, S_0 \\cap S : S_0 \\in \\mathcal{S} \\,\\}$ is a subbasis for\n$\\mathcal{T}_S$, since tracing commutes with finite intersections and with\nunions.\n\n**The inclusion is continuous.** The inclusion map $\\iota : S \\to X$,\n$\\iota(s) = s$, satisfies $\\iota^{-1}[U] = U \\cap S$ for every $U \\subseteq X$,\nso preimages of open sets are open and $\\iota$ is continuous\n([[thm-continuity-characterisations-top]], clause (b)). Moreover\n$\\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\\iota$ continuous: any\ntopology on $S$ for which $\\iota$ is continuous must contain every\n$\\iota^{-1}[U] = U \\cap S$, hence contain $\\mathcal{T}_S$.\n\n**Characteristic property of a map into a subspace.** Let $(Z, \\mathcal{T}_Z)$ be\na topological space and let $g : Z \\to S$ be a function. Then\n\n$$g \\text{ is continuous as a map } Z \\to (S,\\mathcal{T}_S) \\iff \\iota \\circ g \\text{ is continuous as a map } Z \\to (X,\\mathcal{T}) .$$\n\n*Proof.* For $U \\in \\mathcal{T}$ one has\n$(\\iota \\circ g)^{-1}[U] = g^{-1}[\\iota^{-1}[U]] = g^{-1}[U \\cap S]$. If $g$ is\ncontinuous then each $g^{-1}[U \\cap S]$ is open, so $\\iota \\circ g$ is continuous;\nconversely if $\\iota \\circ g$ is continuous then for any $W = U \\cap S$ open in\n$S$ the set $g^{-1}[W] = (\\iota \\circ g)^{-1}[U]$ is open, so $g$ is continuous.\nBoth directions use only clause (b) of [[thm-continuity-characterisations-top]].\n\n**Restriction of a continuous map.** If $f : X \\to Y$ is continuous and\n$S \\subseteq X$, then $f|_S : S \\to Y$ is continuous, since\n$(f|_S)^{-1}[V] = f^{-1}[V] \\cap S$ is open in $S$ for every open $V \\subseteq Y$\n([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).\n\n**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$\nis open in $S$ if and only if it is open in $X$: a trace $U \\cap S$ is then an\nintersection of two open sets of $X$, and conversely an open subset of $X$\ncontained in $S$ is its own trace. The same statement with \"closed\" throughout\nholds when $S$ is closed in $X$. Both are used in the pasting lemma of the next\nitem, and both fail without the hypothesis: $S$ itself is always open and closed\nin $S$, and need be neither in $X$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-g-delta-and-f-sigma-in-a-topological-space",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$A \\subseteq X$.\n\n- $A$ is a **$G_\\delta$ set of $X$** when there is a sequence\n  $(V_n)_{n \\in \\mathbb{N}}$ of open subsets of $X$ with\n  $$A \\;=\\; \\bigcap_{n \\in \\mathbb{N}} V_n .$$\n- $A$ is an **$F_\\sigma$ set of $X$** when there is a sequence\n  $(F_n)_{n \\in \\mathbb{N}}$ of closed subsets of $X$ with\n  $$A \\;=\\; \\bigcup_{n \\in \\mathbb{N}} F_n .$$\n\nAs everywhere in this library $\\mathbb{N}$ contains $0$, so both indexings start\nat $0$. An at most countable *family* may always be presented as a sequence\n([[def-countable]]): a finite list $V_0, \\dots, V_m$ is extended by $V_n := V_m$\nfor $n > m$, which changes neither the intersection nor the union, so nothing is\nlost by indexing over $\\mathbb{N}$.\n\n**The two classes are exchanged by complementation.** $A$ is $F_\\sigma$ in $X$ if\nand only if $X \\setminus A$ is $G_\\delta$ in $X$. If $A = \\bigcup_n F_n$ with\neach $F_n$ closed then $X \\setminus A = \\bigcap_n (X \\setminus F_n)$ by De Morgan\nand each $X \\setminus F_n$ is open ([[def-topological-space]]); the converse is\nthe same computation read backwards.\n\n**Every open set is $G_\\delta$ and every closed set is $F_\\sigma$**, by the\nconstant sequence $V_n := A$, respectively $F_n := A$. **Neither converse\nholds**, and $\\mathbb{R}$ with its usual topology already refutes both. The\nsingleton $\\{0\\}$ is a $G_\\delta$ that is **not open**: it is\n$\\bigcap_{n \\in \\mathbb{N}} (-1/(n+1),\\ 1/(n+1))$, since $0$ lies in every one of\nthose intervals while a real $t \\ne 0$ is excluded at some index, the\nArchimedean property giving a natural $k \\ge 1$ with $1/k < |t|$ and $k$ being a\nsuccessor $n+1$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]],\n[[def-canonical-natural]]); and $\\{0\\}$ is not open because every bounded open\ninterval $(a,b)$ with $a < 0 < b$ contains the point $b/2 \\ne 0$\n([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,\n$\\mathbb{R} \\setminus \\{0\\}$ is an $F_\\sigma$ that is **not closed**, its\ncomplement $\\{0\\}$ not being open.\n\n**The condition that is a real restriction is the other pairing**, namely that\nevery **closed** set be a $G_\\delta$, equivalently that every **open** set be an\n$F_\\sigma$. That is not automatic in an arbitrary space, and it is exactly the\nsecond conjunct of perfect normality later on this page. It must not be confused\nwith the two automatic inclusions above: they hold everywhere and say nothing\nabout a space.\n\n**Agreement with the real-line notion, stated because a second notion of the\nsame name would be a defect.** [[def-f-sigma-g-delta]] defines $F_\\sigma$ and\n$G_\\delta$ subsets of $\\mathbb{R}$ by the same two displayed conditions, with\n\"open\" and \"closed\" read in the sense of [[def-open-and-closed-in-r]]. Those two\nwords name the same two collections of subsets of $\\mathbb{R}$ as the usual\ntopology of $\\mathbb{R}$ does, and the verification is one line of unfolding.\n[[def-open-and-closed-in-r]] calls $U$ open when every $x \\in U$ admits\n$\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$, where\n$N_\\varepsilon(x) = (x - \\varepsilon,\\ x + \\varepsilon)$\n([[def-neighbourhood-r]]); [[def-metric-topology]] calls $U$ open in\n$(\\mathbb{R}, d_{\\mathbb{R}})$ when every $x \\in U$ admits $r > 0$ with\n$B(x,r) \\subseteq U$, and $B(x,r) = (x-r,\\ x+r)$ by claim 2 of\n[[lem-real-line-is-a-metric-space]]. The two conditions are therefore the same\ncondition word for word, so the two collections of open subsets of $\\mathbb{R}$\nare one collection, and hence so are the two collections of closed subsets, each\nbeing the complements of the other collection. The usual topology of $\\mathbb{R}$\nis the metric topology of $d_{\\mathbb{R}}$ ([[def-metrizable-space]]). Since the\ntwo definitions quantify over one collection of open sets and one collection of\nclosed sets, a subset of $\\mathbb{R}$ is $G_\\delta$ in the sense above, for\n$\\mathbb{R}$ with its usual topology, if and only if it is $G_\\delta$ in the\nsense of [[def-f-sigma-g-delta]]; and likewise for $F_\\sigma$. **There is one\nnotion here, not two**, and every statement proved about $F_\\sigma$ or $G_\\delta$\nsubsets of $\\mathbb{R}$ elsewhere in this library may be quoted verbatim as a\nstatement about the topological space $\\mathbb{R}$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1], $X$ is completely normal. Every subspace of $S$ is then a subspace of $X$, hence normal by [L2]; applying [L2] to $S$ shows that $S$ is completely normal. The $T_1$ clause of [L2] also shows that $S$ is $T_1$ when $X$ is $T_6$. [A1, L1, L2]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $F$ be closed in $S$. Write $F=C\\cap S$ with $C$ closed in $X$; perfect normality writes $C=\\bigcap_{n\\in\\mathbb N}U_n$ with every $U_n$ open in $X$. [F1]",
      "step": "1.2",
      "inputs": [
        "F1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Then $F=\\bigcap_{n\\in\\mathbb N}(U_n\\cap S)$, a $G_\\delta$ of $S$. Thus $S$ is perfectly normal, and with its inherited $T_1$ property it is $T_6$ when $X$ is $T_6$. [F1, step 1.1, step 1.2] ∎",
      "step": "2.1",
      "inputs": [
        "F1",
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
      "status": "checked",
      "evidence": "statement: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
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
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-perfectly-normal-implies-completely-normal",
    "declared_target": "thm-perfectly-normal-implies-completely-normal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-completely-normal-iff-hereditarily-normal",
    "declared_target": "thm-completely-normal-iff-hereditarily-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-t0-t1-and-hausdorff-are-hereditary",
    "declared_target": "lem-t0-t1-and-hausdorff-are-hereditary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-g-delta-and-f-sigma-in-a-topological-space",
    "declared_target": "def-g-delta-and-f-sigma-in-a-topological-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-perfect-normality-is-hereditary",
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
    "source": "cor-perfect-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
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

## Full text of every cited or declared item (6)

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

### `def-g-delta-and-f-sigma-in-a-topological-space`

````markdown
---
id: def-g-delta-and-f-sigma-in-a-topological-space
kind: definition
title: "$G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-countable, def-f-sigma-g-delta,
       def-metrizable-space, def-open-and-closed-in-r, def-neighbourhood-r,
       def-metric-topology, lem-real-line-is-a-metric-space, def-interval,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-g-delta-top, def-f-sigma-top]
landmark: true
short: "$G_\\delta$ and $F_\\sigma$ in a space"
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
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F%CF%83_set"
    - title: "J. Munkres, Topology, 2nd ed., §30"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$A \subseteq X$.

- $A$ is a **$G_\delta$ set of $X$** when there is a sequence
  $(V_n)_{n \in \mathbb{N}}$ of open subsets of $X$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$
- $A$ is an **$F_\sigma$ set of $X$** when there is a sequence
  $(F_n)_{n \in \mathbb{N}}$ of closed subsets of $X$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$

As everywhere in this library $\mathbb{N}$ contains $0$, so both indexings start
at $0$. An at most countable *family* may always be presented as a sequence
([[def-countable]]): a finite list $V_0, \dots, V_m$ is extended by $V_n := V_m$
for $n > m$, which changes neither the intersection nor the union, so nothing is
lost by indexing over $\mathbb{N}$.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ in $X$ if
and only if $X \setminus A$ is $G_\delta$ in $X$. If $A = \bigcup_n F_n$ with
each $F_n$ closed then $X \setminus A = \bigcap_n (X \setminus F_n)$ by De Morgan
and each $X \setminus F_n$ is open ([[def-topological-space]]); the converse is
the same computation read backwards.

**Every open set is $G_\delta$ and every closed set is $F_\sigma$**, by the
constant sequence $V_n := A$, respectively $F_n := A$. **Neither converse
holds**, and $\mathbb{R}$ with its usual topology already refutes both. The
singleton $\{0\}$ is a $G_\delta$ that is **not open**: it is
$\bigcap_{n \in \mathbb{N}} (-1/(n+1),\ 1/(n+1))$, since $0$ lies in every one of
those intervals while a real $t \ne 0$ is excluded at some index, the
Archimedean property giving a natural $k \ge 1$ with $1/k < |t|$ and $k$ being a
successor $n+1$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]],
[[def-canonical-natural]]); and $\{0\}$ is not open because every bounded open
interval $(a,b)$ with $a < 0 < b$ contains the point $b/2 \ne 0$
([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,
$\mathbb{R} \setminus \{0\}$ is an $F_\sigma$ that is **not closed**, its
complement $\{0\}$ not being open.

**The condition that is a real restriction is the other pairing**, namely that
every **closed** set be a $G_\delta$, equivalently that every **open** set be an
$F_\sigma$. That is not automatic in an arbitrary space, and it is exactly the
second conjunct of perfect normality later on this page. It must not be confused
with the two automatic inclusions above: they hold everywhere and say nothing
about a space.

**Agreement with the real-line notion, stated because a second notion of the
same name would be a defect.** [[def-f-sigma-g-delta]] defines $F_\sigma$ and
$G_\delta$ subsets of $\mathbb{R}$ by the same two displayed conditions, with
"open" and "closed" read in the sense of [[def-open-and-closed-in-r]]. Those two
words name the same two collections of subsets of $\mathbb{R}$ as the usual
topology of $\mathbb{R}$ does, and the verification is one line of unfolding.
[[def-open-and-closed-in-r]] calls $U$ open when every $x \in U$ admits
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, where
$N_\varepsilon(x) = (x - \varepsilon,\ x + \varepsilon)$
([[def-neighbourhood-r]]); [[def-metric-topology]] calls $U$ open in
$(\mathbb{R}, d_{\mathbb{R}})$ when every $x \in U$ admits $r > 0$ with
$B(x,r) \subseteq U$, and $B(x,r) = (x-r,\ x+r)$ by claim 2 of
[[lem-real-line-is-a-metric-space]]. The two conditions are therefore the same
condition word for word, so the two collections of open subsets of $\mathbb{R}$
are one collection, and hence so are the two collections of closed subsets, each
being the complements of the other collection. The usual topology of $\mathbb{R}$
is the metric topology of $d_{\mathbb{R}}$ ([[def-metrizable-space]]). Since the
two definitions quantify over one collection of open sets and one collection of
closed sets, a subset of $\mathbb{R}$ is $G_\delta$ in the sense above, for
$\mathbb{R}$ with its usual topology, if and only if it is $G_\delta$ in the
sense of [[def-f-sigma-g-delta]]; and likewise for $F_\sigma$. **There is one
notion here, not two**, and every statement proved about $F_\sigma$ or $G_\delta$
subsets of $\mathbb{R}$ elsewhere in this library may be quoted verbatim as a
statement about the topological space $\mathbb{R}$.

## Remarks

- **The letters.** $F$ for *ferme* with $\sigma$ for *somme*, $G$ for *Gebiet*
  with $\delta$ for *Durchschnitt*, as [[def-f-sigma-g-delta]] records.

- **Neither class is closed under complementation**, which is why both names are
  needed; and neither is a topology, an arbitrary union of $G_\delta$ sets being
  no longer $G_\delta$ in general. What is true, and all that is used on this
  page, is the complementation duality above together with the fact that a finite
  intersection of $G_\delta$ sets and a finite union of $F_\sigma$ sets stay in
  their class, by rearranging a finite array of sequences.

- **In a metric space every closed set is $G_\delta$.** That is proved later on
  this page from the distance function, and it is the reason every metrizable
  space is perfectly normal. In a general space it can fail, so it is a genuine
  hypothesis and not a convenience.
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

### `lem-t0-t1-and-hausdorff-are-hereditary`

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

### `thm-completely-normal-iff-hereditarily-normal`

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

### `thm-perfectly-normal-implies-completely-normal`

````markdown
---
id: thm-perfectly-normal-implies-completely-normal
kind: theorem
title: "Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completely-normal-and-perfectly-normal-spaces, def-normal-and-t4-spaces,
       def-separated-sets, def-g-delta-and-f-sigma-in-a-topological-space,
       lem-normality-via-shrinking, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-topological-space, def-countable,
       def-countable-choice, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "perfectly normal implies completely normal"
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
    - title: "Separated sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separated_sets"
    - title: "R. Engelking, General Topology, §1.5"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(X, \mathcal{T})$ be a perfectly normal space
([[def-completely-normal-and-perfectly-normal-spaces]]): $X$ is normal
([[def-normal-and-t4-spaces]]) and every closed subset of $X$ is a $G_\delta$,
equivalently every open subset of $X$ is an $F_\sigma$
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Then $X$ is **completely
normal**: any two separated sets $A, B \subseteq X$ ([[def-separated-sets]])
admit disjoint open $U \supseteq A$ and $V \supseteq B$.

Consequently $T_6$ implies $T_5$.

**No continuous function is constructed anywhere in the proof**, and in
particular Urysohn's lemma is not used. All that is consumed is normality,
applied once to each member of a countable family of closed sets, and the
$F_\sigma$ presentation of two open sets.

**Where the choice principle is spent, and why it is not removable as written.**
Step 4.1 selects, for each $n \in \mathbb{N}$ at once, one open set $U_n$ out of
the nonempty family that normality provides for the closed set $F_n$, and
likewise one $V_n$; normality is an existence statement and supplies no rule for
singling out a member, so extracting the two sequences is an application of
$\mathrm{AC}_\omega$ and of nothing stronger. The hypothesis is stated in the
theorem rather than hidden in the proof, as this library does everywhere.

## Facts & Assumptions

**Given:** A perfectly normal space $(X,\mathcal{T})$ and separated sets $A, B \subseteq X$, so that $\overline{A} \cap B = A \cap \overline{B} = \varnothing$.

[A1] $A$ and $B$ are separated: $\overline{A} \cap B = \varnothing$ and $A \cap \overline{B} = \varnothing$ ([[def-separated-sets]]).

[A2] Every open subset of $X$ is an $F_\sigma$: it is $\bigcup_{n \in \mathbb{N}} C_n$ for some sequence of closed sets $C_n$ ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-countable]]).

[A3] $\mathrm{AC}_\omega$: for a family of nonempty sets indexed by $\mathbb{N}$ there is a function choosing a member of each ([[def-countable-choice]]).

[L1] In a normal space, disjoint closed sets $F$ and $D$ admit an open $W \supseteq F$ with $\overline{W} \cap D = \varnothing$ ([[lem-normality-via-shrinking]], final assertion, [[def-normal-and-t4-spaces]]).

[L2] $\overline{S}$ is closed and contains $S$; a set is closed exactly when it equals its closure; a set is closed exactly when its complement is open ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L3] A union of finitely many closed sets is closed by iterating (C3), an arbitrary union of open sets is open by (T2), and an intersection of two open sets is open by (T3) ([[def-topological-space]]).

[L4] For all $n, m \in \mathbb{N}$ exactly one of $n < m$, $n = m$, $m < n$ holds ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq X \setminus \overline{B}$ and $B \subseteq X \setminus \overline{A}$, and both of these sets are open. [A1, L2]

2.1 By [A2] fix sequences of closed sets with $X \setminus \overline{B} = \bigcup_{n \in \mathbb{N}} F_n$ and $X \setminus \overline{A} = \bigcup_{n \in \mathbb{N}} G_n$. [step 1.1, A2, choose]

3.1 For every $n$ the closed sets $F_n$ and $\overline{B}$ are disjoint, since $F_n \subseteq X \setminus \overline{B}$; likewise $G_n$ and $\overline{A}$ are disjoint closed sets. [step 2.1, L2]

4.1 By [L1] the set of open $W \supseteq F_n$ with $\overline{W} \cap \overline{B} = \varnothing$ is nonempty for each $n$, and likewise the set of open $W' \supseteq G_n$ with $\overline{W'} \cap \overline{A} = \varnothing$; so [A3] supplies sequences $(U_n)_{n \in \mathbb{N}}$ and $(V_n)_{n \in \mathbb{N}}$ of open sets with $F_n \subseteq U_n$, $\overline{U_n} \cap \overline{B} = \varnothing$, $G_n \subseteq V_n$ and $\overline{V_n} \cap \overline{A} = \varnothing$ for every $n$. [step 3.1, A3, L1, choose]

5.1 Define $U := \bigcup_{n \in \mathbb{N}} \big(U_n \setminus \bigcup_{i \le n} \overline{V_i}\big)$ and $V := \bigcup_{n \in \mathbb{N}} \big(V_n \setminus \bigcup_{j \le n} \overline{U_j}\big)$. [step 4.1, construct]

6.1 $U$ and $V$ are open: for each $n$ the set $\bigcup_{i \le n} \overline{V_i}$ is a union of finitely many closed sets, hence closed, so its complement is open and $U_n \setminus \bigcup_{i \le n} \overline{V_i}$ is an intersection of two open sets; the union over $n$ is then open. [step 5.1, L2, L3]

6.2 $A \subseteq U$: given $a \in A$, step 1.1 and step 2.1 put $a$ in some $F_n \subseteq U_n$, while $a \in \overline{A}$ and $\overline{V_i} \cap \overline{A} = \varnothing$ give $a \notin \overline{V_i}$ for every $i$; hence $a \in U_n \setminus \bigcup_{i \le n} \overline{V_i} \subseteq U$. [step 1.1, step 2.1, step 4.1, step 5.1, L2]

6.3 $B \subseteq V$: given $b \in B$, step 1.1 and step 2.1 put $b$ in some $G_m \subseteq V_m$, while $b \in \overline{B}$ and $\overline{U_j} \cap \overline{B} = \varnothing$ give $b \notin \overline{U_j}$ for every $j$; hence $b \in V_m \setminus \bigcup_{j \le m} \overline{U_j} \subseteq V$. [step 1.1, step 2.1, step 4.1, step 5.1, L2]

6.4 Suppose $x \in U \cap V$; then by step 5.1 there are $n, m \in \mathbb{N}$ with $x \in U_n$, $x \notin \overline{V_i}$ for all $i \le n$, $x \in V_m$, and $x \notin \overline{U_j}$ for all $j \le m$. [step 5.1, assume-hyp]

7.1 If $n \le m$ in step 6.4 then $j := n$ satisfies $j \le m$, so $x \notin \overline{U_n}$; but $x \in U_n \subseteq \overline{U_n}$, which is impossible. [step 6.4, L2]

7.2 If $m < n$ in step 6.4 then $i := m$ satisfies $i \le n$, so $x \notin \overline{V_m}$; but $x \in V_m \subseteq \overline{V_m}$, which is impossible. [step 6.4, L2]

8.1 By [L4] one of $n \le m$ and $m < n$ holds, so steps 7.1 and 7.2 exclude every case and no such $x$ exists: $U \cap V = \varnothing$. [step 7.1, step 7.2, L4]

9.1 By steps 6.1, 6.2, 6.3 and 8.1 the sets $U$ and $V$ are disjoint open sets containing $A$ and $B$ respectively; since $A$ and $B$ were an arbitrary separated pair, $X$ is completely normal, and with the hypothesis $T_1$ this reads $T_6$ implies $T_5$. [step 6.1, step 6.2, step 6.3, step 8.1] ∎

## Remarks

- **The subtraction of the earlier closures is the entire trick.** Each $U_n \setminus \bigcup_{i \le n} \overline{V_i}$ is still large enough to catch the part of $A$ that $F_n$ covers, because no point of $A$ lies in any $\overline{V_i}$; and it is small enough that the two unions cannot meet, because a putative common point would be inside a $U_n$ that a later stage of $V$ has already removed, or inside a $V_m$ that a later stage of $U$ has removed. The comparison $n \le m$ or $m < n$ is what decides which of the two it is.

- **Only the two closures $\overline{A}$ and $\overline{B}$ are used**, never the sets $A$ and $B$ themselves beyond membership, which is why the hypothesis is exactly separation and not disjointness. For disjoint sets that are not separated the argument breaks at step 6.2.

- **The converse is not proved here and is not asserted.** Perfect normality asks a countability condition of every closed set that complete normality never mentions, so the two are not the same hypothesis; but no witness separating them is exhibited in this library, and nothing above claims one exists.

- **The hereditary reading is not used.** Complete normality is equivalent to the normality of every subspace, and some texts prove this theorem in that language; the argument above works directly with the separated-sets definition and never passes to a subspace.
````

