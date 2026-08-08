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

## Target item — `ex-the-diagonal-in-the-cofinite-and-cocountable-topologies`

Normalized current SHA-256: `98bba4240ff49f467c5021c15a848bad2b44646cdfeede0e2bf9ffde0a834290`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-the-diagonal-in-the-cofinite-and-cocountable-topologies
kind: example
title: "The cofinite topology on an infinite set, and the cocountable topology on $\\mathbb{R}$, are $T_1$ with a diagonal whose closure is the whole square; on a countably infinite set the cocountable topology is discrete instead"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hausdorff-iff-the-diagonal-is-closed, def-the-diagonal-of-a-space,
       def-standard-topologies, def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed,
       def-product-topology, def-topology-basis-subbasis, def-hausdorff-space,
       thm-closure-characterisation-top, def-countable, lem-subset-of-countable,
       fs-unique-sequential-limits-imply-hausdorff, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "the diagonal in the cofinite and cocountable topologies"
proof_strategy: direct
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
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Topology review notes (University of Toronto)"
      url: "https://www.math.toronto.edu/~alfonso/MC/topologyMC14_V2.pdf"
    - title: "Topological Spaces lecture notes (University of Cambridge)"
      url: "https://www.dpmms.cam.ac.uk/~or257/teaching/notes/TopSp.pdf"
pipeline_run: null
---

## Example

Standard topologies are as in [[def-standard-topologies]], diagonals as in
[[def-the-diagonal-of-a-space]], and every square carries the product topology
([[def-product-topology]]).

1. **Cofinite, on an infinite set.** Let $X$ be infinite ([[def-countable]]) and
   give it the cofinite topology $\mathcal{T}_{\mathrm{cof}}$. Then
   $(X, \mathcal{T}_{\mathrm{cof}})$ is $T_1$ ([[def-t0-and-t1-spaces]]), no two
   nonempty open sets are disjoint,
   $$\overline{\Delta_X} \;=\; X \times X \;\ne\; \Delta_X ,$$
   so $\Delta_X$ is not closed and the space is not Hausdorff.
2. **Cocountable, on $\mathbb{R}$.** Give $\mathbb{R}$ the cocountable topology
   $\mathcal{T}_{\mathrm{coc}}$. The same three conclusions hold:
   $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$ is $T_1$, no two nonempty open sets
   are disjoint, and $\overline{\Delta_{\mathbb{R}}} = \mathbb{R} \times
   \mathbb{R} \ne \Delta_{\mathbb{R}}$.
3. **"Infinite" is the wrong hypothesis for the cocountable half.** If $Z$ is
   countably infinite then $\mathcal{T}_{\mathrm{coc}}$ on $Z$ is the **discrete**
   topology, which is Hausdorff and whose diagonal is therefore closed. So clause
   2 must be asserted of a set large enough that a cocountable set is a genuine
   restriction, and $\mathbb{R}$ is such a set; an arbitrary infinite set is not.

In every case the verdict on the diagonal matches
[[thm-hausdorff-iff-the-diagonal-is-closed]], as it must.

## Facts & Assumptions

**Given:** An infinite set $X$ with the cofinite topology; $\mathbb{R}$ with the cocountable topology; a countably infinite set $Z$ with the cocountable topology; and each square with the product topology.

[A1] The cofinite topology consists of $\varnothing$ together with the sets of finite complement, and its closed sets are the whole set together with the finite subsets; the cocountable topology consists of $\varnothing$ together with the sets of at most countable complement, and its closed sets are the whole set together with the at most countable subsets ([[def-standard-topologies]], [[def-topological-space]]).

[A2] The boxes $U \times W$ with $U$ and $W$ open form a basis for the product topology on a square, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A3] A subset of a finite set is finite and a union of two finite sets is finite, both discharged in [[def-standard-topologies]]; a set with at most one element is equinumerous with $0$ or with $1$ and hence finite, so an infinite set has at least two distinct elements ([[def-countable]]).

[L1] A space is $T_1$ exactly when every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b), [[def-t0-and-t1-spaces]]).

[L2] A point lies in $\overline{A}$ exactly when every basic open set containing it meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2).

[L3] A space is Hausdorff exactly when its diagonal is closed in its square ([[thm-hausdorff-iff-the-diagonal-is-closed]], [[def-hausdorff-space]]).

[L4] In the cocountable topology on $\mathbb{R}$ no two nonempty open sets are disjoint, so that space is not Hausdorff ([[fs-unique-sequential-limits-imply-hausdorff]]).

[L5] A subset of an at most countable set is at most countable ([[lem-subset-of-countable]], [[def-countable]]).

## Verification

**Proof technique:** direct.

1.1 Every singleton of $X$ is finite, hence closed in $\mathcal{T}_{\mathrm{cof}}$, so $(X, \mathcal{T}_{\mathrm{cof}})$ is $T_1$; every singleton of $\mathbb{R}$ is finite, hence at most countable, hence closed in $\mathcal{T}_{\mathrm{coc}}$, so $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$ is $T_1$. [A1, A3, L1]

1.2 No two nonempty $U, V \in \mathcal{T}_{\mathrm{cof}}$ are disjoint: $X \setminus U$ and $X \setminus V$ are finite by [A1], so $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is finite by [A3], and $X$ is infinite, so $U \cap V \ne \varnothing$. [A1, A3]

1.3 No two nonempty members of $\mathcal{T}_{\mathrm{coc}}$ on $\mathbb{R}$ are disjoint. [L4]

1.4 Each of $X$ and $\mathbb{R}$ has two distinct points, $X$ being infinite and $\mathbb{R}$ containing $0$ and $1$. [A3]

1.5 Every subset of the countably infinite $Z$ is at most countable by [L5], so every subset of $Z$ has at most countable complement and is therefore open in $\mathcal{T}_{\mathrm{coc}}$; thus $\mathcal{T}_{\mathrm{coc}}$ on $Z$ is the discrete topology. [A1, L5]

2.1 Let $(Y, \mathcal{T})$ be either $(X, \mathcal{T}_{\mathrm{cof}})$ or $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$, and let $z \in Y \times Y$ and $U \times W$ be a basic open box containing $z$; then $U \ni z_0$ and $W \ni z_1$ are nonempty open, so $U \cap W \ne \varnothing$ by step 1.2 or step 1.3, and any $t \in U \cap W$ gives $(t,t) \in (U \times W) \cap \Delta_Y$. [step 1.2, step 1.3, A2]

2.2 For distinct $p, q \in Y$ the point $(p,q)$ lies in $Y \times Y$ and not in $\Delta_Y$, so $\Delta_Y \ne Y \times Y$. [step 1.4]

3.1 By step 2.1 and [L2] every point of $Y \times Y$ lies in $\overline{\Delta_Y}$, so $\overline{\Delta_Y} = Y \times Y$, which by step 2.2 differs from $\Delta_Y$; hence $\Delta_Y$ is not closed and by [L3] $Y$ is not Hausdorff. This is claims 1 and 2, together with step 1.1. [step 1.1, step 2.1, step 2.2, L2, L3]

4.1 Distinct $p, q \in Z$ are separated by the disjoint open sets $\{p\}$ and $\{q\}$, so $(Z, \mathcal{T}_{\mathrm{coc}})$ is Hausdorff and by [L3] its diagonal is closed in $Z \times Z$; this is claim 3, and with step 3.1 the example is verified. [step 3.1, step 1.5, L3] ∎

## Remarks

- **Why clause 3 is stated rather than left implicit.** The cofinite and the cocountable topologies behave alike only when the underlying set is large enough for the excluded sets to be a genuine restriction. On a countably infinite set "at most countable complement" excludes nothing, so the cocountable topology collapses to the discrete one and every conclusion of clause 2 reverses. Stating the two clauses with the same hypothesis would be a falsehood, and the falsehood is invisible unless the degenerate case is written out.

- **The closure of the diagonal is as large as it can be.** In both spaces of clauses 1 and 2 it is the entire square, so the diagonal is not merely non-closed: it is dense. That is the extreme opposite of the metric picture of [[ex-the-diagonal-of-the-real-line-is-closed]], where the diagonal is closed and its complement is open.

- **$T_1$ is doing no work here.** Both spaces satisfy $T_1$ and neither satisfies $T_2$, which is exactly the separation between the two axioms; the diagonal criterion detects the second and is blind to the first, since it is a statement about the square rather than about singletons.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-standard-topologies",
      "source_section": "Definition",
      "quote": "*Cocountable.* Identical to the cofinite case with \"at most countable\" in place of \"finite\": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the statement that a union of two at most countable sets is at most countable, which is the two-set instance of [[thm-countable-union-of-countable]] applied to the family $A_0 := U, A_1 := V, A_k := \\varnothing$ for $k \\ge 2$.",
      "uses": [
        "1.1",
        "1.2",
        "1.5"
      ]
    },
    {
      "fact": "A1",
      "source": "def-topological-space",
      "source_section": "Definition",
      "quote": "The members of $\\mathcal{T}$ are the **open** sets of $(X,\\mathcal{T})$. A subset $F \\subseteq X$ is **closed** when its complement $X \\setminus F$ is open, and **clopen** when it is both open and closed. By (T1) both $\\varnothing$ and $X$ are clopen. *Open and closed are not opposites*: a set may be neither, and it may be both, so \"not open\" is never a synonym for \"closed\".",
      "uses": [
        "1.1",
        "1.2",
        "1.5"
      ]
    },
    {
      "fact": "A2",
      "source": "def-product-topology",
      "source_section": "Definition",
      "quote": "**The product topology.** The **product topology** $\\mathcal{T}^{\\Pi}$ on $\\prod_i X_i$ is the initial topology of the family of projections $(\\pi_i)_{i \\in I}$ ([[def-initial-and-final-topology]]): the topology generated by the subbasis",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-topology-basis-subbasis",
      "source_section": "Definition",
      "quote": "A family $\\mathcal{B} \\subseteq \\mathcal{T}$ is a **basis for $\\mathcal{T}$** if every open set is a union of members of $\\mathcal{B}$: for every $U \\in \\mathcal{T}$ there is $\\mathcal{B}_U \\subseteq \\mathcal{B}$ with $U = \\bigcup \\mathcal{B}_U$. Equivalently, and this is the form used in proofs,",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A3",
      "source": "def-standard-topologies",
      "source_section": "Definition",
      "quote": "*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is any object then $H \\cup \\{g\\}$ is finite: if $g \\in H$ there is nothing to prove, and otherwise a bijection $u : H \\to k$ extends to a bijection $H \\cup \\{g\\} \\to k \\cup \\{k\\} = \\sigma(k)$ by setting $u(g) := k$, which is injective because $k \\notin k$ ([[lem-nat-transitive-irreflexive]]).",
      "uses": [
        "1.1",
        "1.2",
        "1.4"
      ]
    },
    {
      "fact": "A3",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$. - $A$ is **countably infinite** if $A \\approx \\mathbb{N}$. - $A$ is **at most countable** if it is finite or countably infinite. - $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "1.1",
        "1.2",
        "1.4"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-t1-iff-singletons-are-closed",
      "source_section": "Statement",
      "quote": "- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]). - **(b)** $\\{x\\}$ is closed for every $x \\in X$. - **(c)** $F$ is closed for every finite $F \\subseteq X$ ([[def-countable]]). - **(d)** $\\mathcal{T}_{\\mathrm{cof}} \\subseteq \\mathcal{T}$, that is, the topology of $X$ is finer than the cofinite topology on the same set.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are *topologically distinguishable*: for all $x, y \\in X$ with $x \\ne y$ there is an open set containing exactly one of $x$ and $y$. - $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points has an open set containing it and missing the other: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-closure-characterisation-top",
      "source_section": "Statement",
      "quote": "1. The following four conditions are equivalent. - (a) $x \\in \\overline{A}$; - (b) $N \\cap A \\ne \\varnothing$ for every neighbourhood $N$ of $x$ ([[def-neighbourhood-top]]); - (c) $U \\cap A \\ne \\varnothing$ for every open $U$ with $x \\in U$; - (d) $B \\cap A \\ne \\varnothing$ for every $B \\in \\mathcal{B}$ with $x \\in B$. 2. $\\overline{A}$ is closed, contains $A$, and is contained in every closed $F \\subseteq X$ with $A \\subseteq F$; so it is the smallest closed superset of $A$, and $A$ is closed if and only if $A = \\overline{A}$. 3. $\\overline{A} = A \\cup A'$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-hausdorff-iff-the-diagonal-is-closed",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space and give $X \\times X$ the product topology ([[def-product-topology]]). Then $X$ is Hausdorff ([[def-hausdorff-space]]) if and only if the diagonal $\\Delta_X$ ([[def-the-diagonal-of-a-space]]) is closed in $X \\times X$:",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **Hausdorff** when any two distinct points are separated by disjoint open sets: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "fs-unique-sequential-limits-imply-hausdorff",
      "source_section": "Statement",
      "quote": "The refutation is the **cocountable topology** $\\mathcal{T}_{\\mathrm{coc}}$ on $\\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\\varnothing$ together with the complements of the at most countable subsets of $\\mathbb{R}$. In it every convergent sequence is eventually constant, so limits are unique; and no two nonempty open sets are disjoint, so the space is not Hausdorff. It is nevertheless $T_1$.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-subset-of-countable",
      "source_section": "Statement",
      "quote": "Let $A$ be at most countable ([[def-countable]]) and let $B \\subseteq A$. Then $B$ is at most countable.",
      "uses": [
        "1.5"
      ]
    },
    {
      "fact": "L5",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$. - $A$ is **countably infinite** if $A \\approx \\mathbb{N}$. - $A$ is **at most countable** if it is finite or countably infinite. - $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "1.5"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Every singleton of $X$ is finite, hence closed in $\\mathcal{T}_{\\mathrm{cof}}$, so $(X, \\mathcal{T}_{\\mathrm{cof}})$ is $T_1$; every singleton of $\\mathbb{R}$ is finite, hence at most countable, hence closed in $\\mathcal{T}_{\\mathrm{coc}}$, so $(\\mathbb{R}, \\mathcal{T}_{\\mathrm{coc}})$ is $T_1$. [A1, A3, L1]",
      "step": "1.1",
      "inputs": [
        "A1",
        "A3",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "No two nonempty $U, V \\in \\mathcal{T}_{\\mathrm{cof}}$ are disjoint: $X \\setminus U$ and $X \\setminus V$ are finite by [A1], so $X \\setminus (U \\cap V) = (X \\setminus U) \\cup (X \\setminus V)$ is finite by [A3], and $X$ is infinite, so $U \\cap V \\ne \\varnothing$. [A1, A3]",
      "step": "1.2",
      "inputs": [
        "A1",
        "A3"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "No two nonempty members of $\\mathcal{T}_{\\mathrm{coc}}$ on $\\mathbb{R}$ are disjoint. [L4]",
      "step": "1.3",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "Each of $X$ and $\\mathbb{R}$ has two distinct points, $X$ being infinite and $\\mathbb{R}$ containing $0$ and $1$. [A3]",
      "step": "1.4",
      "inputs": [
        "A3"
      ]
    },
    {
      "id": "step-1.5",
      "claim": "Every subset of the countably infinite $Z$ is at most countable by [L5], so every subset of $Z$ has at most countable complement and is therefore open in $\\mathcal{T}_{\\mathrm{coc}}$; thus $\\mathcal{T}_{\\mathrm{coc}}$ on $Z$ is the discrete topology. [A1, L5]",
      "step": "1.5",
      "inputs": [
        "L5",
        "A1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Let $(Y, \\mathcal{T})$ be either $(X, \\mathcal{T}_{\\mathrm{cof}})$ or $(\\mathbb{R}, \\mathcal{T}_{\\mathrm{coc}})$, and let $z \\in Y \\times Y$ and $U \\times W$ be a basic open box containing $z$; then $U \\ni z_0$ and $W \\ni z_1$ are nonempty open, so $U \\cap W \\ne \\varnothing$ by step 1.2 or step 1.3, and any $t \\in U \\cap W$ gives $(t,t) \\in (U \\times W) \\cap \\Delta_Y$. [step 1.2, step 1.3, A2]",
      "step": "2.1",
      "inputs": [
        "1.2",
        "1.3",
        "A2"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "For distinct $p, q \\in Y$ the point $(p,q)$ lies in $Y \\times Y$ and not in $\\Delta_Y$, so $\\Delta_Y \\ne Y \\times Y$. [step 1.4]",
      "step": "2.2",
      "inputs": [
        "1.4"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By step 2.1 and [L2] every point of $Y \\times Y$ lies in $\\overline{\\Delta_Y}$, so $\\overline{\\Delta_Y} = Y \\times Y$, which by step 2.2 differs from $\\Delta_Y$; hence $\\Delta_Y$ is not closed and by [L3] $Y$ is not Hausdorff. This is claims 1 and 2, together with step 1.1. [step 1.1, step 2.1, step 2.2, L2, L3]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L2",
        "2.2",
        "L3",
        "1.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Distinct $p, q \\in Z$ are separated by the disjoint open sets $\\{p\\}$ and $\\{q\\}$, so $(Z, \\mathcal{T}_{\\mathrm{coc}})$ is Hausdorff and by [L3] its diagonal is closed in $Z \\times Z$; this is claim 3, and with step 3.1 the example is verified. [step 3.1, step 1.5, L3] ∎",
      "step": "4.1",
      "inputs": [
        "L3",
        "3.1",
        "1.5"
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
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.1 instantiates one point from the already nonempty intersection U cap W"
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
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "declared_target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-the-diagonal-of-a-space",
    "declared_target": "def-the-diagonal-of-a-space",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
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
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
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
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "thm-t1-iff-singletons-are-closed",
    "declared_target": "thm-t1-iff-singletons-are-closed",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
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
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
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
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
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
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "thm-closure-characterisation-top",
    "declared_target": "thm-closure-characterisation-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
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
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "lem-subset-of-countable",
    "declared_target": "lem-subset-of-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "fs-unique-sequential-limits-imply-hausdorff",
    "declared_target": "fs-unique-sequential-limits-imply-hausdorff",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-diagonal-in-the-cofinite-and-cocountable-topologies",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-topological-space",
    "declared_target": "def-topological-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (14)

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

### `def-product-topology`

````markdown
---
id: def-product-topology
kind: definition
title: "The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-initial-and-final-topology, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-choice-function, def-axiom-of-choice, lem-finite-choice,
       def-standard-topologies]
justified_by: []
aliases: [def-product-top, def-box-topology, def-projection-top]
landmark: true
short: "product topology, box topology, projections"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

## Remarks

- **Where the two topologies actually differ.** The box topology is finer than
  the product topology by construction, since $\mathcal{R}^{\Pi} \subseteq
  \mathcal{R}$. They agree whenever $I$ is finite; and, assuming the Axiom of Choice, for a
  family of **nonempty** spaces they differ for infinite $I$ as soon as infinitely
  many factors have a nonempty proper open subset. Nonemptiness is not decoration: if one factor is
  empty then the product is empty and carries exactly one topology, so the two
  agree however the other factors are chosen. Both statements are proved two items
  below, with that hypothesis, and the failure is recorded on this page as a false
  statement.

- **The product set is a set of functions, and that is not a technicality.** The
  factors are indexed by an arbitrary set, so there is no "list" to write down;
  writing $x = (x_i)_{i \in I}$ is notation for the function $x$. The finite case
  recovers the familiar tuple, and the identification of $\prod_{k<n}\mathbb{R}$
  with the $\mathbb{R}^n$ of [[lem-metrics-on-rn]] is literal, that item defining
  $\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$.

- **The projections carry no hypothesis.** They are defined for every product,
  including the empty one and products with an empty factor; what does need a
  hypothesis is their *surjectivity*, which is the point at which choice enters
  and which is stated separately in the next item.
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

### `def-the-diagonal-of-a-space`

````markdown
---
id: def-the-diagonal-of-a-space
kind: definition
title: "The diagonal $\\Delta_X \\subseteq X \\times X$, the diagonal map $\\delta_X$, and the pairing $\\langle f, g \\rangle$ of two maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-product-topology, thm-product-universal-property,
       def-continuous-map-top, def-subspace-topology-top, def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-diagonal-top, def-pairing-of-two-maps]
landmark: true
short: "the diagonal, the diagonal map, the pairing of two maps"
verification:
  precheck: n/a
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Diagonal embedding (PlanetMath)"
      url: "https://planetmath.org/diagonalembedding"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]). Throughout, $X \times Y$ is the binary product
$\prod_{i<2} X_i$ with $X_0 = X$ and $X_1 = Y$ ([[def-product-topology]]),
carrying the product topology; a point of it is a **function** $z$ on the von
Neumann natural $2 = \{0,1\}$, written $(z_0, z_1)$, and $\pi_0, \pi_1$ are the
two projections.

**The basis used throughout.** For the index set $2$ the product basis and the
box basis coincide, since a box $\prod_{i<2} U_i$ has all but finitely many
factors unrestricted for the trivial reason that it has only two
([[def-product-topology]]). So

$$\{\, U \times V : U \in \mathcal{T},\ V \in \mathcal{T}_Y \,\}$$

is a basis for the product topology on $X \times Y$, and every statement below
that tests a basic open set tests a box of two open sets.

**The diagonal.** The **diagonal** of $X$ is

$$\Delta_X \;:=\; \{\, z \in X \times X : z_0 = z_1 \,\} \;=\; \{\, (x,x) : x \in X \,\} ,$$

the second description being the first read through the definition of a point of
the product as a function on $2$. It is a subset of $X \times X$ and is given the
subspace topology ([[def-subspace-topology-top]]) whenever it is regarded as a
space.

**The diagonal map.** The **diagonal map** of $X$ is

$$\delta_X : X \to X \times X, \qquad \delta_X(x) := (x,x) ,$$

that is, the function sending $x$ to the constant function $2 \to X$ with value
$x$. Its two components are $\pi_0 \circ \delta_X = \mathrm{id}_X$ and
$\pi_1 \circ \delta_X = \mathrm{id}_X$, and by claim 2 of
[[thm-product-universal-property]] it is the *unique* function $X \to X \times X$
with those two components. The same claim makes it **continuous**
([[def-continuous-map-top]]), the identity being continuous. Its image is
$\Delta_X$, and it is injective, since $\delta_X(x) = \delta_X(x')$ forces
$x = x'$ by reading the coordinate at $0$. Whether $\delta_X$ is an **embedding**
onto $\Delta_X$ ([[def-homeomorphism-and-open-maps]]) is not asserted here; it is
the content of the next item.

**The pairing of two maps.** For functions $f : Z \to X$ and $g : Z \to Y$ on a
common domain, the **pairing** is

$$\langle f, g \rangle : Z \to X \times Y, \qquad \langle f, g \rangle(z) := (f(z), g(z)) .$$

By claim 2 of [[thm-product-universal-property]] it is the unique function
$Z \to X \times Y$ with $\pi_0 \circ \langle f, g \rangle = f$ and
$\pi_1 \circ \langle f, g \rangle = g$; no hypothesis on $f$ and $g$ is needed
for the pairing to be defined, and continuity of the pairing is exactly
continuity of both components, which is again that claim. In this notation

$$\delta_X = \langle \mathrm{id}_X, \mathrm{id}_X \rangle ,$$

so the diagonal map is a special case of the pairing and needs no separate
treatment.

**The preimage identity that every later proof uses.** For $f, g : Z \to Y$,

$$\langle f, g \rangle^{-1}[\Delta_Y] \;=\; \{\, z \in Z : f(z) = g(z) \,\} ,$$

directly from the definitions above: $\langle f, g \rangle(z) \in \Delta_Y$ says
that the function $(f(z), g(z))$ on $2$ takes the same value at $0$ and at $1$.

## Remarks

- **The diagonal is a subset of a product, and the diagonal map is a function
  into it; they are different objects with the same name.** The set $\Delta_X$
  records which pairs are repetitions, and the map $\delta_X$ produces the
  repetitions. Both are needed: the closedness criterion of this page is about the
  set, and the transport of properties from $X$ to its copy inside the square is
  about the map.

- **Nothing here depends on a choice principle.** The product $X \times X$ is a
  binary product, and a point of it is exhibited by naming its two coordinates;
  the nonemptiness of an arbitrary product, which is where choice enters
  ([[thm-product-universal-property]], claim 4), is never invoked for a binary
  product with a named point.

- **Why the box description is recorded at the top.** The criterion proved on
  this page tests basic open sets of $X \times X$, and for the binary product
  there is no gap between the box topology and the product topology to worry
  about ([[def-product-topology]]). No infinite product is formed anywhere on
  this page, so the distinction never becomes live here.
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

### `def-topology-basis-subbasis`

````markdown
---
id: def-topology-basis-subbasis
kind: definition
title: "Basis and subbasis for a topology, and the topology generated by a family of sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space]
justified_by: []
aliases: [def-basis-top, def-subbasis-top, def-generated-topology]
landmark: true
short: "basis, subbasis, generated topology"
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
    - title: "Base (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Base_(topology)"
    - title: "Subbase (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subbase"
    - title: "J. Munkres, Topology, 2nd ed., §13"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

## Remarks

- **Every topology is a basis for itself**, so a basis always exists; the point
  of a basis is to be smaller and more explicit than $\mathcal{T}$, and the point
  of a subbasis is to be smaller still at the cost of one round of finite
  intersections.

- **Two extremes of the generated topology.** $\langle \varnothing \rangle$ is
  the indiscrete topology, since $\{\varnothing, X\}$ is a topology containing the
  empty family and is contained in every topology. At the other end,
  $\langle \mathcal{P}(X) \rangle = \mathcal{P}(X)$ is the discrete topology.

- **Generation is monotone and idempotent.** If
  $\mathcal{S}_1 \subseteq \mathcal{S}_2$ then every topology containing
  $\mathcal{S}_2$ contains $\mathcal{S}_1$, so
  $\langle \mathcal{S}_1 \rangle \subseteq \langle \mathcal{S}_2 \rangle$; and
  $\langle \langle \mathcal{S} \rangle \rangle = \langle \mathcal{S} \rangle$
  because $\langle \mathcal{S} \rangle$ is itself a topology containing
  $\mathcal{S}$. Both are used silently below.
````

### `ex-the-diagonal-of-the-real-line-is-closed`

````markdown
---
id: ex-the-diagonal-of-the-real-line-is-closed
kind: example
title: "The diagonal of $\\mathbb{R}$ is closed in $\\mathbb{R}^2$, computed from the product basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hausdorff-iff-the-diagonal-is-closed, def-the-diagonal-of-a-space,
       def-product-topology, lem-product-topology-on-rn, lem-real-line-is-a-metric-space,
       def-metrizable-space, def-hausdorff-space, def-interval,
       thm-closure-characterisation-top, def-topology-basis-subbasis,
       lem-of-triangle-inequality, def-abs-value]
justified_by: []
aliases: []
landmark: false
short: "the diagonal of the real line is closed"
proof_strategy: direct
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
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Example

Give $\mathbb{R}$ its usual topology ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]) and let $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$
carry the product topology ([[def-product-topology]],
[[lem-product-topology-on-rn]]). Then the diagonal
([[def-the-diagonal-of-a-space]])

$$\Delta_{\mathbb{R}} \;=\; \{\, (t,t) : t \in \mathbb{R} \,\}$$

is **closed** in $\mathbb{R}^2$, and the box that separates a point
$(a,b) \notin \Delta_{\mathbb{R}}$ from it may be written down:

$$(a - r, a + r) \times (b - r, b + r), \qquad r := \tfrac{1}{2}|a - b| > 0 .$$

Nothing here appeals to the general criterion; the computation is carried out
against the product basis directly. It agrees with
[[thm-hausdorff-iff-the-diagonal-is-closed]], $\mathbb{R}$ being Hausdorff
([[def-hausdorff-space]], [[def-metrizable-space]]), and the point of writing it
out is to show what the criterion's abstract box is in this case: the two open
intervals of half the distance between the coordinates.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, $\mathbb{R}^2$ with the product topology, and $\Delta_{\mathbb{R}} = \{\, z \in \mathbb{R}^2 : z_0 = z_1 \,\}$.

[A1] Every bounded open interval is open in $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3, [[def-metrizable-space]], [[def-interval]]).

[A2] The boxes $U \times W$ with $U$ and $W$ open in $\mathbb{R}$ form a basis for the product topology on $\mathbb{R}^2$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[lem-product-topology-on-rn]]).

[A3] The absolute value satisfies $|u + v| \le |u| + |v|$, whence $|a - b| = |(a - t) + (t - b)| \le |a - t| + |t - b|$ for all reals $a, b, t$ ([[lem-of-triangle-inequality]], [[def-abs-value]]).

[L1] A point lies in $\overline{A}$ exactly when every basic open set containing it meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2).

## Verification

**Proof technique:** direct.

1.1 Let $z = (a,b) \in \mathbb{R}^2$ with $z \notin \Delta_{\mathbb{R}}$, so $a \ne b$ and $r := |a-b|/2 > 0$. [given]

2.1 The set $B := (a - r, a + r) \times (b - r, b + r)$ is a basic open set of $\mathbb{R}^2$ containing $z$. [step 1.1, A1, A2]

3.1 $B \cap \Delta_{\mathbb{R}} = \varnothing$: a point of the intersection is of the form $(t,t)$ with $|t - a| < r$ and $|t - b| < r$, whence $|a - b| \le |a - t| + |t - b| < 2r = |a-b|$, which is impossible. [step 1.1, step 2.1, A3]

4.1 By [L1] no $z \notin \Delta_{\mathbb{R}}$ lies in $\overline{\Delta_{\mathbb{R}}}$, so $\overline{\Delta_{\mathbb{R}}} = \Delta_{\mathbb{R}}$ and $\Delta_{\mathbb{R}}$ is closed in $\mathbb{R}^2$. [step 1.1, step 2.1, step 3.1, L1] ∎

## Remarks

- **The radius $|a-b|/2$ is exactly the Hausdorff separation of $a$ and $b$ in $\mathbb{R}$, and that is not a coincidence.** The proof of [[thm-hausdorff-iff-the-diagonal-is-closed]] builds its box out of a pair of disjoint open sets separating the two coordinates; here that pair is $(a-r, a+r)$ and $(b-r, b+r)$, the two balls of radius half the distance which the usual metric supplies.

- **The product topology on $\mathbb{R}^2$ is the topology of the usual metrics on it**, so the computation above may be read equally as a statement about boxes or about balls ([[lem-product-topology-on-rn]]); the box form is used because it is what the criterion tests.
````

### `fs-unique-sequential-limits-imply-hausdorff`

````markdown
---
id: fs-unique-sequential-limits-imply-hausdorff
kind: false-statement
title: "FALSE: a space in which every sequence has at most one limit is Hausdorff"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-sequence-convergence-top, def-hausdorff-space,
       def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed, def-countable,
       lem-subset-of-countable, lem-countable-iff-surjection-from-n,
       thm-r-uncountable, thm-countable-union-of-countable, def-topological-space,
       def-metrizable-space]
justified_by: []
aliases: []
landmark: false
short: "unique sequential limits do not give Hausdorff"
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
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "S. Willard, General Topology, §13"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
pipeline_run: null
---

## Statement

**False claim:** if every sequence in a topological space has at most one limit
([[def-sequence-convergence-top]]), then the space is Hausdorff
([[def-hausdorff-space]]).

The refutation is the **cocountable topology** $\mathcal{T}_{\mathrm{coc}}$ on
$\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\varnothing$
together with the complements of the at most countable subsets of $\mathbb{R}$.
In it every convergent sequence is eventually constant, so limits are unique; and
no two nonempty open sets are disjoint, so the space is not Hausdorff. It is
nevertheless $T_1$.

**This is why [[def-sequence-convergence-top]] refuses the notation
$\lim_k x_k$ in a general space and restores it only under a hypothesis.**
Uniqueness of sequential limits is strictly weaker than the Hausdorff condition,
so it is uniqueness, and not the Hausdorff condition, that is the exact
licensing condition for the symbol — and the two are not interchangeable.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the cocountable topology $\mathcal{T}_{\mathrm{coc}}$, a sequence $(x_k)_{k \in \mathbb{N}}$ in $\mathbb{R}$, and points $p, q \in \mathbb{R}$.

[A1] $\mathcal{T}_{\mathrm{coc}}$ consists of $\varnothing$ together with the sets whose complement in $\mathbb{R}$ is at most countable; its closed sets are $\mathbb{R}$ and the at most countable sets ([[def-standard-topologies]]).

[A2] $x_k \to p$ means that for every neighbourhood $N$ of $p$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).

[A3] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

[L1] The range $\{\, x_k : k \in \mathbb{N} \,\}$ of a sequence is nonempty and at most countable, the sequence itself being a surjection of $\mathbb{N}$ onto it; and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]], [[def-countable]]).

[L2] A union of two at most countable sets is at most countable; this is the two-set instance of [[thm-countable-union-of-countable]], padded with copies of $\varnothing$, and it needs no choice principle, exactly as [[def-standard-topologies]] records for the cocountable topology itself.

[L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]).

[L4] A topology is $T_1$ exactly when it contains the cofinite topology on the same set ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]]); a finite set is at most countable ([[def-countable]]).

## Refutation

**Proof technique:** direct.

1.1 Suppose $x_k \to p$, and put $R := \{\, x_k : k \in \mathbb{N} \,\} \setminus \{p\}$, which is at most countable by [L1]. [A2, L1, assume-hyp]

1.2 Let $U, V \in \mathcal{T}_{\mathrm{coc}}$ be nonempty and suppose $U \cap V = \varnothing$; then $\mathbb{R} = (\mathbb{R} \setminus U) \cup (\mathbb{R} \setminus V)$ is a union of two at most countable sets, hence at most countable by [L2], contradicting [L3]. [A1, L2, L3, assume-hyp]

1.3 The cofinite topology on $\mathbb{R}$ is contained in $\mathcal{T}_{\mathrm{coc}}$, a finite set being at most countable, so $(\mathbb{R},\mathcal{T}_{\mathrm{coc}})$ is $T_1$. [A1, L4]

2.1 Under step 1.1: $\mathbb{R} \setminus R$ is open by [A1] and contains $p$, so by [A2] there is $K$ with $x_k \in \mathbb{R} \setminus R$ for all $k \ge K$. [step 1.1, A1, A2]

2.2 So no two nonempty open sets of $\mathcal{T}_{\mathrm{coc}}$ are disjoint; taking $p = 0$ and $q = 1$, any open $U \ni p$ and $V \ni q$ are nonempty and therefore meet, and $(\mathbb{R},\mathcal{T}_{\mathrm{coc}})$ is not Hausdorff. [step 1.2, A3]

3.1 Under step 1.1: for $k \ge K$ the point $x_k$ lies in the range of the sequence and not in $R$, hence $x_k = p$; so the sequence is eventually constant with value $p$. [step 2.1]

4.1 If also $x_k \to q$ with $q \ne p$, then $\mathbb{R} \setminus \{p\}$ is open by [A1], since $\{p\}$ is at most countable, and it contains $q$; so by [A2] there is $K'$ with $x_k \in \mathbb{R} \setminus \{p\}$ for all $k \ge K'$, contradicting step 3.1 at any index at least $\max\{K, K'\}$. [step 3.1, A1, A2]

5.1 By step 4.1 every sequence in $(\mathbb{R},\mathcal{T}_{\mathrm{coc}})$ has at most one limit. [step 4.1]

6.1 By step 5.1 every sequence has at most one limit and by step 2.2 the space is not Hausdorff, so the claim is false; by step 1.3 the witness is moreover $T_1$. [step 5.1, step 2.2, step 1.3] ∎

## Remarks

- **The refutation is not about pathological sequences but about their scarcity.** In the cocountable topology on an uncountable set a sequence can only reach at most countably many points, and every at most countable set is closed, so convergence degenerates to eventual constancy. Sequences are simply too small to detect this topology, which is also why nothing about it can be read off from sequential arguments.

- **What a countability hypothesis would change is not settled here.** Whether adding first countability to the hypothesis rescues the claim is a question this library does not address, and nothing above asserts an answer. What *is* recorded is the metrizable case, where limits are unique and the space is Hausdorff for reasons independent of each other ([[def-sequence-convergence-top]], [[def-metrizable-space]]).

- **The converse is true and easy.** In a Hausdorff space limits are unique: two distinct limits would have disjoint open neighbourhoods, each of which contains the sequence eventually, which is impossible. That direction is not what this item refutes.
````

### `lem-subset-of-countable`

````markdown
---
id: lem-subset-of-countable
kind: lemma
title: "Every subset of an at most countable set is at most countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, thm-well-ordering-principle, thm-recursion, thm-strong-induction, def-equinumerous, def-injection-surjection-bijection, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-nat-transitive-irreflexive, lem-nat-discrete, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "subsets of countable sets are countable"
proof_strategy: cases
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
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A$ be at most countable ([[def-countable]]) and let $B \subseteq A$. Then
$B$ is at most countable.

The proof establishes the sharper statement about subsets of $\mathbb{N}$ from
which this follows: **a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above, and countably infinite if it is not.**

**No choice principle is used.** This is the point of the lemma rather than a
footnote to it. The enumeration of an unbounded $S \subseteq \mathbb{N}$ is built
by always taking the *least* element of $S$ above the previous one, and the least
element of a nonempty set of naturals is canonical
([[thm-well-ordering-principle]]): it is determined by $S$, not selected from it.
Replacing "least" by "some" would turn the construction into an appeal to
dependent choice.

## Facts & Assumptions

**Given:** An at most countable set $A$ and a subset $B \subseteq A$. Throughout, a natural number is the von Neumann natural, so that $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]); that $n = \{\, m \in \mathbb{N} : m < n \,\}$, and in particular that every element of a natural number is a natural number, is [[lem-nat-order-is-membership]], proved earlier on this page from the additive order of [[def-nat-order]].

[L1] $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$, countably infinite when $A \approx \mathbb{N}$, and at most countable when one of the two holds ([[def-countable]]).

[L2] $\approx$ is symmetric and transitive, an injection is a bijection onto its image, and the restriction of a bijection to a subset is a bijection onto the image of that subset ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L3] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Strong induction: if for every $n$ the truth of $P(m)$ for all $m < n$ implies $P(n)$, then $P(n)$ holds for every $n$ ([[thm-strong-induction]]).

[L5] Recursion: for any set $X$, any $x_0 \in X$ and any $F : X \to X$ there is a function $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Order facts in $\mathbb{N}$: $m \in n \iff m < n$, $m \le n \iff m \subseteq n$, $n < \sigma(n)$, and $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]]); exactly one of $m < n$, $m = n$, $n < m$ holds, so $<$ is irreflexive and any two naturals are comparable ([[lem-nat-trichotomy]]); $\le$ is reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]), whence $<$ is transitive, because $m < n < p$ gives $m \le p$ while $m = p$ would force $m = n$ by antisymmetry; $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]).

[L7] Every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L8] Membership is irreflexive on $\mathbb{N}$: $k \notin k$ for every $k \in \mathbb{N}$, and every natural number is a transitive set ([[lem-nat-transitive-irreflexive]]).

## Proof

**Proof technique:** cases.

1.1 Since $A$ is at most countable there is a bijection $\varphi : A \to N_0$ where $N_0 = n$ for some $n \in \mathbb{N}$ or $N_0 = \mathbb{N}$; in either case $N_0 \subseteq \mathbb{N}$, and restricting $\varphi$ to $B$ gives a bijection of $B$ onto $S := \varphi[B] \subseteq \mathbb{N}$, so $B \approx S$. It therefore suffices to prove that every subset of $\mathbb{N}$ is at most countable, since then $S \approx n'$ or $S \approx \mathbb{N}$ and transitivity carries the conclusion back to $B$. [given, L1, L2, L6, suffices: every subset of N is at most countable]

1.2 Every subset of a natural number is finite: by strong induction on $n$, assume every subset of every $m < n$ is finite. If $n = 0$ then a subset $T \subseteq 0 = \varnothing$ is empty and $T \approx 0$. Otherwise $n = \sigma(m)$ by [L7], with $m < n$; given $T \subseteq \sigma(m) = m \cup \{m\}$, the set $T \setminus \{m\}$ is a subset of $m$, so the hypothesis at $m$ gives a bijection $u : T \setminus \{m\} \to k$ for some $k \in \mathbb{N}$. If $m \notin T$ then $T = T \setminus \{m\} \approx k$. If $m \in T$, extend $u$ by $u(m) := k$; since $k \notin k$ by irreflexivity of membership, the value $k$ is not already taken and the extension is a bijection $T \to k \cup \{k\} = \sigma(k)$. In both cases $T$ is finite, so the claim holds for $n$ and hence for all $n$. [L1, L2, L4, L6, L7, L8]

1.3 Case $S$ bounded: assume there is $b_0 \in \mathbb{N}$ with $s \le b_0$ for every $s \in S$. Then $s < \sigma(b_0)$ for every $s \in S$ by [L6], that is, $S \subseteq \sigma(b_0)$. [assume-case bounded, L6]

1.4 Case $S$ unbounded: assume that for every $b \in \mathbb{N}$ there is $s \in S$ with $b < s$. Then $S \ne \varnothing$, and for each $s \in S$ the set $\{\, t \in S : s < t \,\}$ is nonempty, so [L3] makes $\nu(s) := \min \{\, t \in S : s < t \,\}$ a well-defined element of $S$ with $s < \nu(s)$; this defines a function $\nu : S \to S$ with no arbitrary choices. [assume-case unbounded, L3, construct]

2.1 In the bounded case $S$ is a subset of the natural number $\sigma(b_0)$, hence finite by step 1.2, hence at most countable. [step 1.2, step 1.3, L1]

2.2 In the unbounded case apply [L5] with $X = S$, $x_0 = \min S$ (available by [L3] since $S \ne \varnothing$) and $F = \nu$: there is $e : \mathbb{N} \to S$ with $e(0) = \min S$ and $e(\sigma(n)) = \nu(e(n)) = \min \{\, t \in S : e(n) < t \,\}$ for every $n$. [step 1.4, L3, L5, construct]

3.1 For every $n$, $e(n) < e(\sigma(n))$ by the defining property of $\nu$; consequently $m < n$ implies $e(m) < e(n)$, by strong induction on $n$ (for $n = \sigma(j)$ and $m < n$ one has $m \le j$ by [L6], so either $m = j$, giving $e(m) < e(\sigma(j))$ directly, or $m < j$, giving $e(m) < e(j) < e(\sigma(j))$ by the hypothesis at $j$ and transitivity). Hence $e$ is injective: if $m \ne n$ then $m < n$ or $n < m$ by comparability, and irreflexivity forbids $e(m) = e(n)$. [step 2.2, L4, L6, L7]

3.2 For every $k$, $k \le e(k)$: again by strong induction, at $k = 0$ this is immediate, and for $k = \sigma(j)$ the hypothesis at $j$ gives $j \le e(j) < e(\sigma(j))$, so $j < e(k)$ and therefore $\sigma(j) \le e(k)$ by [L6], that is $k \le e(k)$. [step 2.2, L4, L6, L7]

4.1 $e$ is surjective onto $S$: let $t \in S$. The set $K = \{\, k \in \mathbb{N} : t \le e(k) \,\}$ contains $t$ by step 3.2, so $k^\ast := \min K$ exists by [L3]. If $k^\ast = 0$ then $e(0) = \min S \le t$ because $t \in S$, and $t \le e(0)$, so $e(0) = t$. Otherwise $k^\ast = \sigma(j)$ by [L7], and $j \notin K$ by minimality, so $e(j) < t$; then $t$ belongs to $\{\, u \in S : e(j) < u \,\}$, whence $e(k^\ast) = \min \{\, u \in S : e(j) < u \,\} \le t$, and with $t \le e(k^\ast)$ this gives $e(k^\ast) = t$. In both cases $t$ is a value of $e$. [step 2.2, step 3.2, L3, L6, L7]

5.1 In the unbounded case $e : \mathbb{N} \to S$ is therefore a bijection, so $S \approx \mathbb{N}$ and $S$ is countably infinite, hence at most countable. [step 3.1, step 4.1, L1, L2]

6.1 Every $S \subseteq \mathbb{N}$ is either bounded above or not, so steps 2.1 and 5.1 cover all cases and every subset of $\mathbb{N}$ is at most countable; by the reduction of step 1.1 the subset $B$ of the at most countable set $A$ is at most countable. [step 1.1, step 2.1, step 5.1, cases-exhaustive, L1, L2] ∎

## Remarks

- A subset of a countably infinite set may perfectly well be finite: $\{0, 1\}$ and $\varnothing$ are subsets of $\mathbb{N}$. This is exactly why the conclusion is "at most countable" and not "countably infinite", and it is why the library's convention that "countable" means "at most countable" ([[def-countable]]) keeps the statement free of case distinctions.

- The dichotomy proved here, bounded subsets of $\mathbb{N}$ are finite and unbounded ones are copies of $\mathbb{N}$, is the only structural fact about $\mathbb{N}$ the rest of the page needs. The enumeration $e$ built in the unbounded case is the increasing one, and it is unique with that property.

- The bounded case rests on the von Neumann encoding: "bounded by $b_0$" is literally "a subset of the set $\sigma(b_0)$", which is what makes the induction of step 1.2 an induction on a natural number rather than on an informal count. That translation is not a convention but a theorem, [[lem-nat-order-is-membership]], since the library's order on $\mathbb{N}$ is defined additively ([[def-nat-order]]) and not by membership.
````

### `thm-closure-characterisation-top`

````markdown
---
id: thm-closure-characterisation-top
kind: theorem
title: "A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-top, def-neighbourhood-top, def-topology-basis-subbasis, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "closure by neighbourhoods; $\\overline{A} = A \\cup A'$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \subseteq X$ and let
$x \in X$. Closure, derived set and limit points are as in
[[def-interior-closure-boundary-top]]. Then:

1. The following four conditions are equivalent.
   - (a) $x \in \overline{A}$;
   - (b) $N \cap A \ne \varnothing$ for every neighbourhood $N$ of $x$
     ([[def-neighbourhood-top]]);
   - (c) $U \cap A \ne \varnothing$ for every open $U$ with $x \in U$;
   - (d) $B \cap A \ne \varnothing$ for every $B \in \mathcal{B}$ with $x \in B$.
2. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$; so it is the smallest closed superset of
   $A$, and $A$ is closed if and only if $A = \overline{A}$.
3. $\overline{A} = A \cup A'$.

Claim 2 is recorded here for reference and is discharged in
[[def-interior-closure-boundary-top]], where it is what makes the definition of
$\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in
which the closure is used everywhere afterwards, and clause (d) is what makes a
closure computable from a basis rather than from all open sets.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a basis $\mathcal{B}$ for $\mathcal{T}$, a subset $A \subseteq X$ and a point $x \in X$.

[A1] $\overline{A}$ is the intersection of all closed supersets of $A$; it is closed, contains $A$, and is contained in every closed superset of $A$ ([[def-interior-closure-boundary-top]]).

[A2] $x \in A'$ means that $N \cap (A \setminus \{x\}) \ne \varnothing$ for every neighbourhood $N$ of $x$ ([[def-interior-closure-boundary-top]]).

[L1] $N$ is a neighbourhood of $x$ when $x \in U \subseteq N$ for some open $U$; an open set containing $x$ is a neighbourhood of $x$ ([[def-neighbourhood-top]]).

[L2] $\mathcal{B}$ is a basis for $\mathcal{T}$: for every open $U$ and every $x \in U$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, and every member of $\mathcal{B}$ is open ([[def-topology-basis-subbasis]]).

[L3] A set is closed exactly when its complement is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (c): let $U$ be open with $x \in U$ and suppose $U \cap A = \varnothing$; then $X \setminus U$ is closed and contains $A$, so $\overline{A} \subseteq X \setminus U$ by [A1], whence $x \notin \overline{A}$, contradicting (a); therefore $U \cap A \ne \varnothing$. [A1, L3]

1.2 (c) implies (a): suppose $x \notin \overline{A}$; then $U := X \setminus \overline{A}$ is open by [A1] and [L3], contains $x$, and satisfies $U \cap A = \varnothing$ because $A \subseteq \overline{A}$, so (c) fails. [A1, L3]

1.3 (b) implies (c): an open $U$ containing $x$ is a neighbourhood of $x$, so (b) applies to it. [L1]

1.4 (c) implies (b): let $N$ be a neighbourhood of $x$ and fix open $U$ with $x \in U \subseteq N$; then $\varnothing \ne U \cap A \subseteq N \cap A$. [L1]

1.5 (c) implies (d): every $B \in \mathcal{B}$ with $x \in B$ is an open set containing $x$. [L2]

1.6 (d) implies (c): let $U$ be open with $x \in U$ and fix $B \in \mathcal{B}$ with $x \in B \subseteq U$; then $\varnothing \ne B \cap A \subseteq U \cap A$. [L2]

1.7 $A \subseteq \overline{A}$ and $\overline{A}$ is closed, and $\overline{A}$ is contained in every closed superset of $A$, which is claim 2; in particular $A$ is closed exactly when $A = \overline{A}$, since one inclusion always holds and the other says that $A$ is a closed superset of itself. [A1, L3]

2.1 By steps 1.1 to 1.6 the four conditions (a), (b), (c) and (d) are equivalent, which is claim 1: (a) and (c) are equivalent by steps 1.1 and 1.2, (b) and (c) by steps 1.3 and 1.4, and (c) and (d) by steps 1.5 and 1.6. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6]

3.1 $A \cup A' \subseteq \overline{A}$: points of $A$ lie in $\overline{A}$ by [A1], and if $x \in A'$ then every neighbourhood $N$ of $x$ meets $A \setminus \{x\}$ and hence meets $A$, so $x \in \overline{A}$ by condition (b). [step 2.1, A1, A2]

3.2 $\overline{A} \subseteq A \cup A'$: let $x \in \overline{A}$ and suppose $x \notin A$; then for every neighbourhood $N$ of $x$ condition (b) gives $N \cap A \ne \varnothing$, and $A = A \setminus \{x\}$ because $x \notin A$, so $N \cap (A \setminus \{x\}) \ne \varnothing$ and $x \in A'$. [step 2.1, A2]

4.1 Steps 3.1 and 3.2 give $\overline{A} = A \cup A'$, which is claim 3; with step 2.1 for claim 1 and step 1.7 for claim 2 the theorem is proved. [step 1.7, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Clause (d) is relative to a basis and clause (c) is not.** Different bases for one topology give different families of test sets in (d), and the theorem says all of them detect the same closure. This is why a closure in a metric space may be computed with balls alone, and a closure in $\mathbb{R}$ with bounded open intervals alone.

- **The empty set and the whole space.** $\overline{\varnothing} = \varnothing$, since $\varnothing$ is closed, and $\overline{X} = X$; claim 1 reads correctly in both cases, no neighbourhood meeting $\varnothing$ and every neighbourhood meeting $X$.

- **Nothing here assumes that singletons are closed.** In the indiscrete topology on a set with at least two points, $\overline{\{x\}} = X$ for every $x$, since the only neighbourhood of any point is $X$; claim 3 then says $A' = X \setminus \{x\}$ is contained in $\overline{\{x\}}$, which it is.
````

### `thm-hausdorff-iff-the-diagonal-is-closed`

````markdown
---
id: thm-hausdorff-iff-the-diagonal-is-closed
kind: theorem
title: "A space is Hausdorff if and only if its diagonal is closed in the square carrying the product topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-diagonal-of-a-space, def-hausdorff-space, def-product-topology,
       def-topology-basis-subbasis, thm-closure-characterisation-top,
       def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: [thm-diagonal-criterion-for-hausdorff]
landmark: true
short: "Hausdorff iff the diagonal is closed"
proof_strategy: direct
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
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space and give $X \times X$ the product
topology ([[def-product-topology]]). Then $X$ is Hausdorff
([[def-hausdorff-space]]) if and only if the diagonal $\Delta_X$
([[def-the-diagonal-of-a-space]]) is closed in $X \times X$:

$$X \text{ Hausdorff} \iff \Delta_X = \overline{\Delta_X} \text{ in } X \times X .$$

The condition on the right is a single closedness statement about one subset of
one space, with no quantifier over pairs of points visible in it; that is what
makes the criterion useful, and every consequence on this page is obtained by
pulling $\Delta_X$ back along a continuous map.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the product $X \times X$ with the product topology, and the diagonal $\Delta_X = \{\, z \in X \times X : z_0 = z_1 \,\}$.

[A1] $X$ is Hausdorff when for all $x \ne y$ in $X$ there are open $U \ni x$ and $V \ni y$ with $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[A2] The boxes $U \times V$ with $U, V \in \mathcal{T}$ form a basis for the product topology on $X \times X$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[def-the-diagonal-of-a-space]]).

[L1] For a basis $\mathcal{B}$ of a space, a point lies in $\overline{A}$ if and only if every $B \in \mathcal{B}$ containing it meets $A$; and $A$ is closed if and only if $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2, [[def-interior-closure-boundary-top]]).

[L2] $A \subseteq \overline{A}$ for every subset $A$ of a space ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is Hausdorff and let $z \in X \times X$ with $z \notin \Delta_X$, so that $z_0 \ne z_1$; by [A1] there are open $U \ni z_0$ and $V \ni z_1$ with $U \cap V = \varnothing$. [A1]

1.2 Assume $\Delta_X$ is closed and let $x, y \in X$ with $x \ne y$; then $z := (x,y)$ satisfies $z \notin \Delta_X = \overline{\Delta_X}$, the equality holding by [L1] since $\Delta_X$ is closed. [L1]

2.1 The box $U \times V$ of step 1.1 is a basic open set containing $z$, and $(U \times V) \cap \Delta_X = \varnothing$: a point $w$ of the intersection would satisfy $w_0 = w_1$ with $w_0 \in U$ and $w_1 \in V$, putting $w_0$ in $U \cap V = \varnothing$. [step 1.1, A2]

2.2 By [L1] applied to the basis of [A2], step 1.2 supplies a basic open box $U \times V$ with $z \in U \times V$ and $(U \times V) \cap \Delta_X = \varnothing$; so $x \in U$ and $y \in V$. [step 1.2, A2, L1]

3.1 From step 2.1 and [L1], $z \notin \overline{\Delta_X}$ for every $z \notin \Delta_X$; hence $\overline{\Delta_X} \subseteq \Delta_X$, and with [L2] this gives $\overline{\Delta_X} = \Delta_X$, so $\Delta_X$ is closed. [step 1.1, step 2.1, L1, L2]

3.2 The sets $U$ and $V$ of step 2.2 are disjoint: if $t \in U \cap V$ then $(t,t)$ lies in $U \times V$ and in $\Delta_X$, contradicting $(U \times V) \cap \Delta_X = \varnothing$. [step 2.2]

4.1 Step 3.1 shows that $X$ Hausdorff implies $\Delta_X$ closed, and steps 2.2 and 3.2 show that $\Delta_X$ closed implies that any two distinct points of $X$ have disjoint open neighbourhoods, which by [A1] is the Hausdorff condition; the two implications are the theorem. [step 2.2, step 3.1, step 3.2, A1] ∎

## Remarks

- **The criterion is about the product topology on a binary product**, and there the box basis and the product basis are the same family ([[def-product-topology]]), so the boxes tested in steps 2.1 and 2.2 are legitimately basic. No infinite product is formed anywhere in the argument, and the criterion says nothing about one.

- **Neither direction spends a choice principle.** The forward direction produces one box from one Hausdorff separation of one named pair, and the backward direction reads one box out of the closure characterisation; there is no family to select from in either.

- **What the criterion does not say.** It does not say that $\Delta_X$ is closed in $X \times X$ carrying some other topology, and it does not say that $\Delta_X$ is closed in $X$ — the latter is not even a statement, $\Delta_X$ being a subset of the square. The hypothesis that $X \times X$ carries the product topology is used at [A2] and cannot be dropped.
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

