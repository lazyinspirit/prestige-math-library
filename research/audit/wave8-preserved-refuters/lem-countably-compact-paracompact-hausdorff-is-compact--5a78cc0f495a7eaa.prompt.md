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

- critical risk (8): 8 declared dependencies; 8 cited facts; 7 numbered proof steps; boundary-sensitive language

## Target item — `lem-countably-compact-paracompact-hausdorff-is-compact`

Normalized current SHA-256: `60c799848d03a085ed253660a671437e80616ba096e49030c2e8f29b7a906842`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-countably-compact-paracompact-hausdorff-is-compact
kind: lemma
title: "Assuming countable choice, every countably compact paracompact Hausdorff space is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-locally-finite-unions-and-closures, def-compactness-variants, def-paracompact-space, def-hausdorff-space, def-countable-choice, def-countable, thm-countable-union-of-countable, lem-finite-choice]
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
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "P. Bacon, Pacific Journal of Mathematics 32 (1970), countably compact paracompact spaces"
      url: "https://msp.org/pjm/1970/32-3/pjm-v32-n3-p03-p.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every countably compact paracompact
Hausdorff space is compact.

## Facts & Assumptions

**Given:** Countable choice and a countably compact paracompact Hausdorff space $X$.

[A1] Countable choice supplies a choice function for every sequence of nonempty sets ([[def-countable-choice]]).

[F1] Countable compactness tests at most countable open covers, while compactness tests all open covers ([[def-compactness-variants]]).

[F2] Paracompactness supplies a locally finite open refining cover ([[def-paracompact-space]]).

[F3] Hausdorff spaces separate distinct points by disjoint open neighbourhoods ([[def-hausdorff-space]]).

[L1] A locally finite union of closed sets is closed ([[lem-locally-finite-unions-and-closures]]).

[L2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).

[L3] Choice from a finite listed family is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal U$ be an arbitrary open cover, and take a locally finite open refining cover $\mathcal V$ by [F2]. [F2, choose]

2.1 Suppose $\mathcal V$ were infinite. For every $n$ the family of $(n+1)$-element subsets of $\mathcal V$ is nonempty; [A1] chooses one $E_n$. Then $E=\bigcup_nE_n$ is at most countable by [L2] and infinite because it has finite subsets of arbitrarily large size. Hence, by the definition of at-most-countable, $E$ is countably infinite; enumerate its distinct members as $(V_n)_{n\in\mathbb N}$. [A1, L2, step 1.1, construct]

3.1 By [A1] choose $d_n\in V_n$ for every $n$. The range $D=\{d_n:n\in\mathbb N\}$ is infinite: if it were finite, local finiteness would make only finitely many distinct $V_n$ meet $D$, but every $V_n$ contains $d_n\in D$. Moreover the singleton family $\{\{d\}:d\in D\}$ is locally finite, since a neighbourhood meeting only finitely many $V_n$ can contain only finitely many points $d\in D$. [A1, F2, step 2.1, construct]

4.1 Hausdorffness makes points closed, so [L1] makes $D$ closed. For each $d\in D$, local finiteness gives a neighbourhood meeting only finitely many points of $D$; pass to an open subneighbourhood and remove those finitely many other closed points. Using [A1] along an enumeration of $D$ yields open sets $O_d$ with $O_d\cap D=\{d\}$. [A1, F3, L1, step 3.1, construct]

5.1 The open set $X\setminus D$, together with the at most countable family $\{O_d:d\in D\}$, is an open cover with no finite subcover, contradicting countable compactness in [F1]. [F1, step 3.1, step 4.1]

6.1 Hence $\mathcal V$ is finite. By [L3], select for each member of this finite refining family one containing member of $\mathcal U$; the selected members form a finite subcover of $\mathcal U$. [step 1.1, step 5.1, L3]

7.1 Since $\mathcal U$ was arbitrary, [F1] proves that $X$ is compact. [F1, step 6.1] ∎

## Remarks

Countable choice is spent twice: first to extract a countably infinite subfamily from a putatively infinite locally finite cover, and then to choose one point from each member of that subfamily. The final selection is only finite choice, which is available in ZF.
````

## Wave 8 provenance row for the target

```json
{
  "id": "lem-countably-compact-paracompact-hausdorff-is-compact",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://msp.org/pjm/1970/32-3/pjm-v32-n3-p03-p.pdf"
  ],
  "rationale": "Bacon's peer-reviewed paper proves the stronger standard result that a countably compact paracompact space is compact. The item adds Hausdorffness and Countable Choice to make its particular closed-discrete-subset proof valid in the library's explicit foundations, so the statement is a specialization. The detailed extraction proof is locally composed.",
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
      "fact": "A1",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.\n\nEquivalently, in the vocabulary of [[def-choice-function]]: every at most\ncountable family of nonempty sets ([[def-countable]]) has a choice function.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-compactness-variants",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), with\nopen covers, subcovers, finiteness and compactness as in [[def-compact-space]],\nand *finite*, *at most countable* and *uncountable* as in [[def-countable]].\n\n- $(X, \\mathcal{T})$ is **countably compact** when every open cover of $X$ that\n  is at most countable has a finite subcover.\n- $(X, \\mathcal{T})$ is **Lindel&ouml;f** when every open cover of $X$ has an at\n  most countable subcover.\n- $(X, \\mathcal{T})$ is **sequentially compact** when every sequence $(x_k)$ in\n  $X$, that is every function $x : \\mathbb{N} \\to X$\n  ([[def-sequence-convergence-top]]), has a subsequence $(x_{n_j})$ converging to\n  a point of $X$, the index map $n : \\mathbb{N} \\to \\mathbb{N}$ being strictly\n  increasing ([[def-sequence]], [[lem-index-map-grows]]).\n- $(X, \\mathcal{T})$ is **limit point compact** when every infinite subset\n  $A \\subseteq X$ has a limit point in $X$, that is a point $p \\in X$ every\n  neighbourhood $N$ of which satisfies $N \\cap (A \\setminus \\{p\\}) \\ne \\varnothing$\n  ([[def-interior-closure-boundary-top]]). Here *infinite* means not finite in\n  the sense of [[def-countable]].\n- $(X, \\mathcal{T})$ is **$\\sigma$-compact** when there is an at most countable\n  family $\\mathcal{K}$ of compact subsets of $X$ with $X = \\bigcup \\mathcal{K}$.\n- A subset $A \\subseteq X$ is **relatively compact in $X$** when its closure\n  $\\overline{A}$ ([[def-interior-closure-boundary-top]]) is a compact subset of\n  $X$.\n\nA subset $A \\subseteq X$ is called countably compact, Lindel&ouml;f,\nsequentially compact, limit point compact or $\\sigma$-compact when the subspace\n$(A, \\mathcal{T}_A)$ is ([[def-subspace-topology-top]]), exactly as for\ncompactness. **Relative compactness is the exception and is deliberately not of\nthat form**: it is a statement about $A$ *inside* $X$, since $\\overline{A}$ is\ncomputed in $X$, and a set may be relatively compact in one space and not in\nanother that contains it. Every other notion on this list is intrinsic to the\nsubspace.\n\n**The countable covers may be listed.** A nonempty at most countable family\n$\\mathcal{U}$ admits a surjection $\\mathbb{N} \\to \\mathcal{U}$\n([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for\nevery sequence $(U_n)_{n \\in \\mathbb{N}}$ of open sets with\n$X = \\bigcup_{n \\in \\mathbb{N}} U_n$ there are finitely many indices whose sets\nalready cover $X$. That surjection is produced from the countability assumption\nalone and no choice principle is involved; the empty family covers only the empty\nspace, which is compact anyway.\n\n**Indexing starts at $0$.** A sequence here is a function on $\\mathbb{N}$ and\n$\\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is\n$(x_{n_j})_{j \\in \\mathbb{N}}$ with $n_0 < n_1 < \\cdots$ and $n_j \\ge j$\n([[lem-index-map-grows]]). An index range taken from a text that starts at $1$\nmust be shifted before it is used here.\n\n**Agreement with the metric definitions.** Let $(X,d)$ be a metric space carrying\nits metric topology $\\mathcal{T}_d$ ([[def-metric-topology]],\n[[def-metrizable-space]]). Then the three notions that\n[[def-metric-compactness-variants]] defines metrically are the three defined\nabove, read in $(X, \\mathcal{T}_d)$:\n\n- *Countably compact.* The open sets used there are the members of\n  $\\mathcal{T}_d$, so the at most countable open covers are the same families and\n  the condition is the same condition, exactly as for compactness itself\n  ([[thm-compactness-agrees-with-metric-compactness]]).\n- *Sequentially compact.* Convergence of a sequence in the metric sense and in\n  the sense of [[def-sequence-convergence-top]] agree on a metric topology,\n  because the balls around a point are a neighbourhood base at it\n  ([[def-metrizable-space]]); the subsequences quantified over are the same.\n- *Limit point compact.* A point $p$ is a limit point of $A$ in the metric sense\n  when every ball around $p$ meets $A \\setminus \\{p\\}$, and in the sense above\n  when every neighbourhood does; the same neighbourhood base makes the two\n  conditions one ([[def-metrizable-space]],\n  [[def-interior-closure-boundary-top]]).\n\nSo no statement below about a metrizable space introduces a second notion, and\nevery theorem of the metric development about these three properties may be\nquoted here once a metric inducing the topology is named. Lindel&ouml;fness,\n$\\sigma$-compactness and relative compactness have no metric counterpart in this\nlibrary and are defined here for the first time.",
      "uses": [
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "F2",
      "source": "def-paracompact-space",
      "source_section": "Definition",
      "quote": "A topological space $X$ is **paracompact** when every open cover $\\mathcal U$\nof $X$ has an open refinement $\\mathcal V$ which covers $X$ and is locally\nfinite. In symbols, for every open cover $\\mathcal U$ there is a locally finite\nopen cover $\\mathcal V$ such that every $V\\in\\mathcal V$ lies in some\n$U\\in\\mathcal U$.\n\nNo separation axiom is included in this definition. Some sources reserve the\nword *paracompact* for the conjunction of this covering property with\nHausdorffness. Here the covering property is named by itself, and any use of\nHausdorffness is stated explicitly.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "F3",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is\n**Hausdorff** when any two distinct points are separated by disjoint open sets:\nfor all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with\n\n$$x \\in U, \\qquad y \\in V, \\qquad U \\cap V = \\varnothing .$$\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint\nopen neighbourhoods. Nothing is asserted about points that are equal, and the\ncondition is vacuous for a space with at most one point, so every such space is\nHausdorff.\n\n**Every metrizable space is Hausdorff.** This is not proved here, because it is\nalready discharged: [[def-metrizable-space]] records it among the two things\nevery metrizable space has, deriving it from\n[[thm-metric-hausdorff-separation]], which separates $p \\ne q$ in a metric space\nby the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In\nparticular $\\mathbb{R}$ with its usual topology, every $\\mathbb{R}^n$, and every\nsubspace of a metrizable space are Hausdorff.\n\n**Not every space is Hausdorff.** The indiscrete topology\n$\\mathcal{T}_{\\mathrm{ind}} = \\{\\varnothing, X\\}$ on a set $X = \\{a,b\\}$ with\n$a \\ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$\nis $X$, the only one containing $b$ is $X$, and $X \\cap X = X \\ne \\varnothing$.\nThis is the same two-point space that [[def-metrizable-space]] uses to exhibit a\ntopology induced by no metric, and the reason is the same one: failure of the\nHausdorff condition is an obstruction to metrizability.\n\n**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).\nIf $h : X \\to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \\ne z'$ in\n$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint\nopen $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and\n$z'$ respectively, a homeomorphism carrying the open sets of one space\nbijectively onto those of the other. So no space homeomorphic to a Hausdorff\nspace fails the condition.\n\n**Scope of this item.** Only the definition, the metrizable case and the\ntwo-point failure are recorded here, because that is all this page uses. The\nHausdorff condition is one of a graded family of separation axioms; that family,\nits ordering, and the questions of which of its members are hereditary or\npreserved by products, are not available at this point in the reading order and\nnothing here anticipates them. What this page does use is a single negative\nresult: a quotient of a Hausdorff space need not be Hausdorff, which is recorded\nbelow as a false statement and witnessed on the companion page.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-locally-finite-unions-and-closures",
      "source_section": "Statement",
      "quote": "Let $\\{A_i\\}_{i\\in I}$ be a locally finite family of subsets of a topological\nspace $X$. Then $\\{\\overline{A_i}\\}_{i\\in I}$ is locally finite and\n$$\\overline{\\bigcup_{i\\in I}A_i}=\\bigcup_{i\\in I}\\overline{A_i}.$$\nConsequently, a locally finite union of closed subsets of $X$ is closed.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-countable-union-of-countable",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let\n$(A_n)_{n \\in \\mathbb{N}}$ be a family of at most countable sets\n([[def-countable]]) indexed by $\\mathbb{N}$. Then\n\n$$U = \\bigcup_{n \\in \\mathbb{N}} A_n$$\n\nis at most countable.\n\n**The hypothesis $\\mathrm{AC}_\\omega$ is not decoration and it is not removable.**\nIt is spent at exactly one step, step 3.1 below, where one surjection\n$\\mathbb{N} \\to A_n$ is selected for every $n$ at once. Each $A_n$ has such\nsurjections, in general many of them, and the countability assumption provides no\nrule for singling one out. Without some choice principle the theorem is not\navailable at all: ZF alone does not prove it, **conditionally on the consistency\nof ZF**, as recorded among this page's false statements and discussed in the\nremarks below, where that item is named and linked. The\nconsistency hypothesis is not a formality and cannot be dropped: the separation\nrests on an external independence result that this library quotes rather than\nproves, and it cannot be stated without it.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "Recall that a natural number is a von Neumann natural\n([[def-natural-numbers]]): $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$, so\nthat\n\n$$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$$\n\nis itself the set of its predecessors. Here $<$ is the order of\n[[def-nat-order]], which is defined additively, so the displayed identity is a\ntheorem and not a convention: it is [[lem-nat-order-is-membership]], proved\nimmediately above. Let $A$ be a set, and let $\\approx$ be equinumerosity\n([[def-equinumerous]]).\n\n- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$.\n- $A$ is **countably infinite** if $A \\approx \\mathbb{N}$.\n- $A$ is **at most countable** if it is finite or countably infinite.\n- $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-choice",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $F$ be a function with domain $n$ all of whose\nvalues are nonempty sets. Then the family of its values,\n$\\mathcal{F} = F[n] = \\{\\, F(i) : i \\in n \\,\\}$, has a choice function\n([[def-choice-function]]).\n\nThis is a theorem of ZF: its proof uses no form of the Axiom of Choice\n([[def-axiom-of-choice]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$. The\nnatural number $n$ serves as the index set in the von Neumann sense,\n$n = \\{0, 1, \\dots, n-1\\}$ ([[def-natural-numbers]]), so \"$F$ has domain $n$\"\nsays precisely that the members of $\\mathcal{F}$ are listed as\n$F(0), \\dots, F(n-1)$. The listing need not be injective, and $\\mathcal{F}$ is the\nset of values, so repetitions are harmless and are not counted.\n\nThe displayed statement and its proof use only a natural-number-indexed\nfunction. They do not identify an arbitrary finite family with a particular\nenumeration.",
      "uses": [
        "6.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Let $\\mathcal U$ be an arbitrary open cover, and take a locally finite open refining cover $\\mathcal V$ by [F2]. [F2, choose]",
      "step": "1.1",
      "inputs": [
        "F2",
        "choose"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Suppose $\\mathcal V$ were infinite. For every $n$ the family of $(n+1)$-element subsets of $\\mathcal V$ is nonempty; [A1] chooses one $E_n$. Then $E=\\bigcup_nE_n$ is at most countable by [L2] and infinite because it has finite subsets of arbitrarily large size. Hence, by the definition of at-most-countable, $E$ is countably infinite; enumerate its distinct members as $(V_n)_{n\\in\\mathbb N}$. [A1, L2, step 1.1, construct]",
      "step": "2.1",
      "inputs": [
        "A1",
        "L2",
        "1.1",
        "construct"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By [A1] choose $d_n\\in V_n$ for every $n$. The range $D=\\{d_n:n\\in\\mathbb N\\}$ is infinite: if it were finite, local finiteness would make only finitely many distinct $V_n$ meet $D$, but every $V_n$ contains $d_n\\in D$. Moreover the singleton family $\\{\\{d\\}:d\\in D\\}$ is locally finite, since a neighbourhood meeting only finitely many $V_n$ can contain only finitely many points $d\\in D$. [A1, F2, step 2.1, construct]",
      "step": "3.1",
      "inputs": [
        "A1",
        "F2",
        "2.1",
        "construct"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Hausdorffness makes points closed, so [L1] makes $D$ closed. For each $d\\in D$, local finiteness gives a neighbourhood meeting only finitely many points of $D$; pass to an open subneighbourhood and remove those finitely many other closed points. Using [A1] along an enumeration of $D$ yields open sets $O_d$ with $O_d\\cap D=\\{d\\}$. [A1, F3, L1, step 3.1, construct]",
      "step": "4.1",
      "inputs": [
        "L1",
        "A1",
        "F3",
        "3.1",
        "construct"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "The open set $X\\setminus D$, together with the at most countable family $\\{O_d:d\\in D\\}$, is an open cover with no finite subcover, contradicting countable compactness in [F1]. [F1, step 3.1, step 4.1]",
      "step": "5.1",
      "inputs": [
        "F1",
        "3.1",
        "4.1"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "Hence $\\mathcal V$ is finite. By [L3], select for each member of this finite refining family one containing member of $\\mathcal U$; the selected members form a finite subcover of $\\mathcal U$. [step 1.1, step 5.1, L3]",
      "step": "6.1",
      "inputs": [
        "L3",
        "1.1",
        "5.1"
      ]
    },
    {
      "id": "step-7-1",
      "claim": "Since $\\mathcal U$ was arbitrary, [F1] proves that $X$ is compact. [F1, step 6.1]",
      "step": "7.1",
      "inputs": [
        "F1",
        "6.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and steps 1.1, 6.1, and 7.1 include X empty and the empty finite refinement/subcover."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 2.1 begins with n=0 and selects a one-element subset if the refining family is infinite."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 2.1--6.1 cover singleton selected sets and singleton D."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 3.1--5.1 explicitly rule out a finite repeated range D before using it as an infinite closed discrete set."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 2.1 and 5.1 use at-most-countable, countably infinite, and finite-cover boundaries in their stated directions."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Steps 2.1, 3.1, and 4.1 invoke A1 on explicitly nonempty countable families; step 6.1 uses finite choice L3."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-locally-finite-unions-and-closures",
    "declared_target": "lem-locally-finite-unions-and-closures",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-compactness-variants",
    "declared_target": "def-compactness-variants",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-paracompact-space",
    "declared_target": "def-paracompact-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
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
    "source": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "thm-countable-union-of-countable",
    "declared_target": "thm-countable-union-of-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countably-compact-paracompact-hausdorff-is-compact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-finite-choice",
    "declared_target": "lem-finite-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
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

## Full text of every cited or declared item (8)

### `def-compactness-variants`

````markdown
---
id: def-compactness-variants
kind: definition
title: "Countably compact, Lindel\\\"of, sequentially compact, limit point compact and $\\sigma$-compact spaces, and relatively compact subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, def-countable, lem-countable-iff-surjection-from-n, def-sequence-convergence-top, def-sequence, def-interior-closure-boundary-top, def-metric-compactness-variants, def-subspace-topology-top, def-topological-space, lem-index-map-grows, def-metrizable-space, def-metric-topology, thm-compactness-agrees-with-metric-compactness]
justified_by: []
aliases: [def-lindelof, def-sigma-compact, def-relatively-compact, def-countably-compact-top, def-sequentially-compact-top, def-limit-point-compact-top]
landmark: true
short: "the compactness variants"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
    - title: "Lindelöf space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lindel%C3%B6f_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
open covers, subcovers, finiteness and compactness as in [[def-compact-space]],
and *finite*, *at most countable* and *uncountable* as in [[def-countable]].

- $(X, \mathcal{T})$ is **countably compact** when every open cover of $X$ that
  is at most countable has a finite subcover.
- $(X, \mathcal{T})$ is **Lindel&ouml;f** when every open cover of $X$ has an at
  most countable subcover.
- $(X, \mathcal{T})$ is **sequentially compact** when every sequence $(x_k)$ in
  $X$, that is every function $x : \mathbb{N} \to X$
  ([[def-sequence-convergence-top]]), has a subsequence $(x_{n_j})$ converging to
  a point of $X$, the index map $n : \mathbb{N} \to \mathbb{N}$ being strictly
  increasing ([[def-sequence]], [[lem-index-map-grows]]).
- $(X, \mathcal{T})$ is **limit point compact** when every infinite subset
  $A \subseteq X$ has a limit point in $X$, that is a point $p \in X$ every
  neighbourhood $N$ of which satisfies $N \cap (A \setminus \{p\}) \ne \varnothing$
  ([[def-interior-closure-boundary-top]]). Here *infinite* means not finite in
  the sense of [[def-countable]].
- $(X, \mathcal{T})$ is **$\sigma$-compact** when there is an at most countable
  family $\mathcal{K}$ of compact subsets of $X$ with $X = \bigcup \mathcal{K}$.
- A subset $A \subseteq X$ is **relatively compact in $X$** when its closure
  $\overline{A}$ ([[def-interior-closure-boundary-top]]) is a compact subset of
  $X$.

A subset $A \subseteq X$ is called countably compact, Lindel&ouml;f,
sequentially compact, limit point compact or $\sigma$-compact when the subspace
$(A, \mathcal{T}_A)$ is ([[def-subspace-topology-top]]), exactly as for
compactness. **Relative compactness is the exception and is deliberately not of
that form**: it is a statement about $A$ *inside* $X$, since $\overline{A}$ is
computed in $X$, and a set may be relatively compact in one space and not in
another that contains it. Every other notion on this list is intrinsic to the
subspace.

**The countable covers may be listed.** A nonempty at most countable family
$\mathcal{U}$ admits a surjection $\mathbb{N} \to \mathcal{U}$
([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for
every sequence $(U_n)_{n \in \mathbb{N}}$ of open sets with
$X = \bigcup_{n \in \mathbb{N}} U_n$ there are finitely many indices whose sets
already cover $X$. That surjection is produced from the countability assumption
alone and no choice principle is involved; the empty family covers only the empty
space, which is compact anyway.

**Indexing starts at $0$.** A sequence here is a function on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is
$(x_{n_j})_{j \in \mathbb{N}}$ with $n_0 < n_1 < \cdots$ and $n_j \ge j$
([[lem-index-map-grows]]). An index range taken from a text that starts at $1$
must be shifted before it is used here.

**Agreement with the metric definitions.** Let $(X,d)$ be a metric space carrying
its metric topology $\mathcal{T}_d$ ([[def-metric-topology]],
[[def-metrizable-space]]). Then the three notions that
[[def-metric-compactness-variants]] defines metrically are the three defined
above, read in $(X, \mathcal{T}_d)$:

- *Countably compact.* The open sets used there are the members of
  $\mathcal{T}_d$, so the at most countable open covers are the same families and
  the condition is the same condition, exactly as for compactness itself
  ([[thm-compactness-agrees-with-metric-compactness]]).
- *Sequentially compact.* Convergence of a sequence in the metric sense and in
  the sense of [[def-sequence-convergence-top]] agree on a metric topology,
  because the balls around a point are a neighbourhood base at it
  ([[def-metrizable-space]]); the subsequences quantified over are the same.
- *Limit point compact.* A point $p$ is a limit point of $A$ in the metric sense
  when every ball around $p$ meets $A \setminus \{p\}$, and in the sense above
  when every neighbourhood does; the same neighbourhood base makes the two
  conditions one ([[def-metrizable-space]],
  [[def-interior-closure-boundary-top]]).

So no statement below about a metrizable space introduces a second notion, and
every theorem of the metric development about these three properties may be
quoted here once a metric inducing the topology is named. Lindel&ouml;fness,
$\sigma$-compactness and relative compactness have no metric counterpart in this
library and are defined here for the first time.

## Remarks

**None of the conditions listed above is compactness by definition.** Countable
compactness restricts the covers tested; Lindel&ouml;fness weakens the conclusion
from finite to at most countable; sequential compactness speaks about sequences
instead of covers; limit point compactness speaks about subsets;
$\sigma$-compactness asks only that the space be assembled from at most countably
many compact pieces; relative compactness is a condition on a subset of an
ambient space. Which implications hold between them, and which need a choice
principle, is [[thm-compactness-variants-hierarchy]]; that some of them fail
to be equivalent is witnessed by the false statements at the end of this page.

**Why $\sigma$-compactness is not a compactness property at all.** The real line
is $\sigma$-compact, being the union of the compact intervals $[-n, n]$, and it is
not compact; the definition is useful precisely because it names a class of
spaces built out of compact pieces without being compact. The same remark
explains why a $\sigma$-compact space need not be countably compact.

**Limit point compactness is sometimes called the Bolzano-Weierstrass
property**, and *countably compact* is occasionally used for what is called limit
point compact here. This library uses the four names above with the meanings
given, and writes the condition out whenever the risk of confusion is real.
````

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
````

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

### `def-paracompact-space`

````markdown
---
id: def-paracompact-space
kind: definition
title: "Paracompactness: every open cover has a locally finite open refinement, with no separation axiom built into the word"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-compact-space]
justified_by: []
aliases: [def-paracompactness]
landmark: true
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
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Definition

A topological space $X$ is **paracompact** when every open cover $\mathcal U$
of $X$ has an open refinement $\mathcal V$ which covers $X$ and is locally
finite. In symbols, for every open cover $\mathcal U$ there is a locally finite
open cover $\mathcal V$ such that every $V\in\mathcal V$ lies in some
$U\in\mathcal U$.

No separation axiom is included in this definition. Some sources reserve the
word *paracompact* for the conjunction of this covering property with
Hausdorffness. Here the covering property is named by itself, and any use of
Hausdorffness is stated explicitly.

## Remarks

The finite-subcover condition defining compactness is recalled in
[[def-compact-space]]. A finite family is locally finite, but compactness and
paracompactness remain distinct definitions because their conclusions quantify
over different refinements of a cover.
````

### `lem-finite-choice`

````markdown
---
id: lem-finite-choice
kind: lemma
title: "Every natural-number-indexed list of nonempty sets has a choice function on its family of values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-choice-function, thm-induction-principle, def-natural-numbers, def-nat-addition, def-axiom-of-choice]
justified_by: []
forward_refs: [def-countable, ex-finite-choice-by-induction, ex-russells-socks]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

## Facts & Assumptions

**Given:** A natural number $n$, used as the index set $n = \{0, \dots, n-1\}$, and a function $F$ with domain $n$ such that $F(i) \ne \emptyset$ for every $i \in n$; write $F[n] = \{F(i) : i \in n\}$ for the family of values of $F$.

[A1] $P(n)$ denotes the statement: for every function $F$ with domain $n$ all of whose values are nonempty sets, the family $F[n]$ has a choice function.

[L1] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L2] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L3] $0=\emptyset$ and $\sigma(n)=n\cup\{n\}$, so $n\subseteq\sigma(n)$ ([[def-natural-numbers]]). Thus a function $F$ with domain $\sigma(n)$ restricts to a function with domain $n$; moreover, directly from the definition of image, $y\in F[\sigma(n)]$ iff $y=F(i)$ for some $i\in n$ or $y=F(n)$, so $F[\sigma(n)]=F[n]\cup\{F(n)\}$.

## Proof

**Proof technique:** induction.

1.1 Base case: $0 = \emptyset$, so the only function with domain $0$ is the empty function, its family of values is $F[0] = \emptyset$, and the empty function has domain $\emptyset$ and satisfies the defining condition vacuously, so it is a choice function for $F[0]$; hence $P(0)$ holds. [base, A1, L2, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that every function with domain $n$ whose values are all nonempty has a choice function for its family of values. [ih, A1]

1.3 Let $F$ be an arbitrary function with domain $\sigma(n) = n \cup \{n\}$ all of whose values are nonempty sets; write $S = F(n)$ and $\mathcal{G} = F[n]$, the family of values of the restriction $F \restriction n$, so that $F[\sigma(n)] = \mathcal{G} \cup \{S\}$. [given, L3]

2.1 The restriction $F \restriction n$ is a function with domain $n$, and every value of it is a value of $F$, hence nonempty; so the inductive hypothesis applies to it and supplies a choice function $h$ for $\mathcal{G}$, a function with domain $\mathcal{G}$ satisfying $h(T) \in T$ for every $T \in \mathcal{G}$. [step 1.3, step 1.2, L2, L3]

2.2 The set $S = F(n)$ is one of the values of $F$, hence nonempty, so there exists an element of $S$; fix one and call it $a$. [step 1.3, choose]

3.1 Define $g = (h \restriction (\mathcal{G} \setminus \{S\})) \cup \{(S, a)\}$; its two pieces are functions with the disjoint domains $\mathcal{G} \setminus \{S\}$ and $\{S\}$, so $g$ is a function, and its domain is $(\mathcal{G} \setminus \{S\}) \cup \{S\} = \mathcal{G} \cup \{S\} = F[\sigma(n)]$. [step 2.1, step 2.2, step 1.3, construct]

4.1 Every $T \in F[\sigma(n)]$ is either $S$ or a member of $\mathcal{G} \setminus \{S\}$; in the first case $g(S) = a \in S$, and in the second $g(T) = h(T) \in T$ because $h$ is a choice function for $\mathcal{G}$. So $g(T) \in T$ throughout. [step 3.1, step 2.1, step 2.2]

5.1 Hence $g$ is a choice function for $F[\sigma(n)]$, and since $F$ was an arbitrary function with domain $\sigma(n)$ with nonempty values, $P(n)$ implies $P(n+1)$. [step 4.1, step 3.1, step 1.3, L2, A1]

6.1 By the induction principle, $P(n)$ holds for every $n \in \mathbb{N}$: the family of values of any function whose domain is a natural number and whose values are nonempty has a choice function. [step 1.1, step 5.1, L1, discharge-induction] ∎

## Remarks

- **Later finiteness terminology.** A finite set is defined later as one
  equinumerous with a natural number ([[def-countable]]). That terminology is
  not used in the proof above, which keeps its exact indexed-family scope.
- **Where the Axiom of Choice would be needed, and why it is not needed here.** Step 2.2 picks one element out of one nonempty set. That is a single existential instantiation, licensed by first-order logic alone. The induction performs one such instantiation per stage, and the stages are indexed by a natural number, so the process terminates. ZF cannot in general turn an arbitrary infinite family of nonempty sets into a simultaneous choice function; that is the gap [[def-axiom-of-choice]] fills. An infinite family with a distinguished element in each member may still have an explicit choice function in ZF, as [[ex-russells-socks]] shows.
- **Why the family is presented as an indexed one.** Stated over "a family of exactly $n$ sets", the successor step would have to assert that deleting one member of a family of $n+1$ sets leaves exactly $n$, which is a claim about cardinality and needs a theory of finiteness this page does not have. Indexed by $n$, the same step is the restriction $F \restriction n$ of a function, which is immediate from $n \subseteq \sigma(n)$ and costs nothing. Nothing else in the argument changes.
- The listing may repeat, and the argument is arranged so that repetition needs no separate treatment: $g$ is built by overwriting rather than by adjoining, so it is a function whether or not $S$ already occurs among $F(0), \dots, F(n-1)$. In particular $\mathcal{F}$ may have strictly fewer than $n$ members.
- The lemma is not a special case of the Axiom of Choice that happens to be provable; it is the precise boundary of what is free. [[ex-russells-socks]] makes the boundary concrete, and [[ex-finite-choice-by-induction]] works this induction out on a small family.
````

### `lem-locally-finite-unions-and-closures`

````markdown
---
id: lem-locally-finite-unions-and-closures
kind: lemma
title: "Locally finite families remain locally finite after taking closures, closure commutes with their union, and a locally finite union of closed sets is closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cover-refinement-and-local-finiteness, thm-closure-characterisation-top, def-topological-space]
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
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "S. Semmes, Topology notes, Sections 5.13–5.14 (Rice University)"
      url: "https://math.rice.edu/~semmes/math443b.pdf"
pipeline_run: null
---

## Statement

Let $\{A_i\}_{i\in I}$ be a locally finite family of subsets of a topological
space $X$. Then $\{\overline{A_i}\}_{i\in I}$ is locally finite and
$$\overline{\bigcup_{i\in I}A_i}=\bigcup_{i\in I}\overline{A_i}.$$
Consequently, a locally finite union of closed subsets of $X$ is closed.

## Facts & Assumptions

**Given:** A locally finite family $\{A_i\}_{i\in I}$ in a topological space $X$.

[F1] Local finiteness says that each point has a neighbourhood meeting only finitely many $A_i$ ([[def-cover-refinement-and-local-finiteness]]).

[L1] A point belongs to $\overline A$ exactly when every neighbourhood of it meets $A$, and $\overline A$ is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and a neighbourhood $N$ of $x$ meeting only $A_{i_1},\ldots,A_{i_n}$. Choose an open neighbourhood $O$ of $x$ with $O\subseteq N$. If $O\cap\overline{A_j}\ne\varnothing$, choose $y\in O\cap\overline{A_j}$; the open neighbourhood $O$ of $y$ then meets $A_j$, so $N$ meets $A_j$ and $j\in\{i_1,\ldots,i_n\}$. [F1, L1]

1.2 The inclusion $\bigcup_i\overline{A_i}\subseteq\overline{\bigcup_iA_i}$ holds because each $\overline{A_i}$ is contained in every closed set containing $A_i$, in particular in $\overline{\bigcup_iA_i}$. [L1]

2.1 Thus $O$ meets only $\overline{A_{i_1}},\ldots,\overline{A_{i_n}}$, so the closed family is locally finite. [step 1.1, F1]

2.2 Let $x\in\overline{\bigcup_iA_i}$ and take $N$ as in step 1.1; if $x\notin\bigcup_i\overline{A_i}$, then for each $i_k$ an open neighbourhood of $x$ misses $A_{i_k}$, and its finite intersection with an open neighbourhood inside $N$ misses every $A_i$, contradicting the closure criterion. [step 1.1, L1]

3.1 Hence $\overline{\bigcup_iA_i}=\bigcup_i\overline{A_i}$ by steps 1.2 and 2.2; if every $A_i$ is closed, the right-hand side is $\bigcup_iA_i$, so that union is closed. [step 1.2, step 2.2, L1] ∎
````

### `thm-countable-union-of-countable`

````markdown
---
id: thm-countable-union-of-countable
kind: theorem
title: "Countable unions of at most countable sets, assuming $\\mathrm{AC}_\\omega$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, thm-n-cross-n-countable, lem-countable-iff-surjection-from-n, def-countable, thm-well-ordering-principle, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: false
short: "countable union of countables (needs $\\mathrm{AC}_\\omega$)"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets
([[def-countable]]) indexed by $\mathbb{N}$. Then

$$U = \bigcup_{n \in \mathbb{N}} A_n$$

is at most countable.

**The hypothesis $\mathrm{AC}_\omega$ is not decoration and it is not removable.**
It is spent at exactly one step, step 3.1 below, where one surjection
$\mathbb{N} \to A_n$ is selected for every $n$ at once. Each $A_n$ has such
surjections, in general many of them, and the countability assumption provides no
rule for singling one out. Without some choice principle the theorem is not
available at all: ZF alone does not prove it, **conditionally on the consistency
of ZF**, as recorded among this page's false statements and discussed in the
remarks below, where that item is named and linked. The
consistency hypothesis is not a formality and cannot be dropped: the separation
rests on an external independence result that this library quotes rather than
proves, and it cannot be stated without it.

## Facts & Assumptions

**Given:** A family $(A_n)_{n \in \mathbb{N}}$ of at most countable sets, its union $U = \bigcup_{n \in \mathbb{N}} A_n$, and the Axiom of Countable Choice as an explicit hypothesis.

[L1] Finite, countably infinite, at most countable; $\varnothing$ is finite ([[def-countable]]).

[L2] A nonempty set $X$ is at most countable if and only if there is a surjection $\mathbb{N} \to X$ ([[lem-countable-iff-surjection-from-n]]).

[L3] $\mathrm{AC}_\omega$: for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets there is $f$ with $f(n) \in X_n$ for all $n$ ([[def-countable-choice]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-equinumerous]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] A composition of surjections is a surjection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 If $U = \varnothing$ then $U$ is finite, hence at most countable. [given, L1]

1.2 Assume instead $U \ne \varnothing$; then $J := \{\, n \in \mathbb{N} : A_n \ne \varnothing \,\}$ is nonempty, so it has a least element $n_0$ by [L5]. [given, L5]

1.3 Fix the bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ of [L4]. [L4]

2.1 For $n \in J$ let $S_n$ be the set of all surjections $\mathbb{N} \to A_n$, which is nonempty by [L2] since $A_n$ is nonempty and at most countable; for $n \notin J$ put $S_n := S_{n_0}$, also nonempty. This makes $(S_n)_{n \in \mathbb{N}}$ a family of nonempty sets indexed by $\mathbb{N}$, defined with no choices. [step 1.2, given, L2, construct]

3.1 **This is the step that uses choice.** Apply $\mathrm{AC}_\omega$ [L3] to the family $(S_n)_{n \in \mathbb{N}}$ of step 2.1: it delivers a function $n \mapsto s_n$ with $s_n \in S_n$ for every $n$, that is, one surjection $s_n : \mathbb{N} \to A_n$ selected simultaneously for every $n \in J$. Nothing in the hypotheses names a particular surjection onto $A_n$, so this selection cannot be replaced by a definition; it is exactly here, and nowhere else in the proof, that the theorem leaves ZF. [step 2.1, L3, choose]

4.1 Define $t : \mathbb{N} \times \mathbb{N} \to U$ by $t(n,k) = s_n(k)$; the value lies in $A_n \subseteq U$ for $n \in J$ and in $A_{n_0} \subseteq U$ otherwise, so $t$ is well defined. It is surjective: any $x \in U$ lies in some $A_n$, which is then nonempty, so $n \in J$ and $x = s_n(k)$ for some $k$ because $s_n$ is onto $A_n$. [step 3.1, given]

5.1 Hence $t \circ \beta : \mathbb{N} \to U$ is a surjection by [L6], and $U \ne \varnothing$, so $U$ is at most countable by [L2]. [step 1.3, step 4.1, L2, L6]

6.1 In both cases $U$ is at most countable, which is the assertion. [step 1.1, step 5.1, L1] ∎

## Remarks

- **An at most countable index set is no more general.** If $I$ is at most countable and $(A_i)_{i \in I}$ are at most countable, then either $I$ is empty, and the union is $\varnothing$, or a surjection $r : \mathbb{N} \to I$ exists ([[lem-countable-iff-surjection-from-n]]) and $\bigcup_{i \in I} A_i = \bigcup_{n \in \mathbb{N}} A_{r(n)}$, which the theorem covers. That reindexing uses no choice.

- **The two-set union needs no choice at all**, and neither does any union of finitely many sets: with $A$ and $B$ both at most countable and nonempty, fix surjections $f, g : \mathbb{N} \to A, B$ (two choices made one after the other, which is ordinary existential instantiation, not a choice principle) and put $u(0,k) = f(k)$ and $u(n,k) = g(k)$ for $n \ne 0$, a surjection $\mathbb{N} \times \mathbb{N} \to A \cup B$. This is the form used in [[cor-irrationals-uncountable]], and keeping it separate from the countable case is the whole point of flagging step 3.1.

- The failure without choice is not a technicality about exotic sets: if ZF is consistent, then it is consistent with ZF that $\mathbb{R}$ itself is a countable union of countable sets ([[fs-countable-union-theorem-of-zf]]), even though $\mathbb{R}$ is provably uncountable in ZF ([[thm-r-uncountable]]).
````

