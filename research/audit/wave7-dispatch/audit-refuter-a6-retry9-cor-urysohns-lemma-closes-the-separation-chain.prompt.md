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

- critical risk (11): 8 declared dependencies; 6 cited facts; 6 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language

## Target item — `cor-urysohns-lemma-closes-the-separation-chain`

Normalized current SHA-256: `6d98b0f1a481b1185c64684221aaa83cbac2093512a65b26383aa3e98d0fabff`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-urysohns-lemma-closes-the-separation-chain
kind: corollary
title: "Under dependent choice a normal $T_1$ space is completely regular, so $T_4 \\Rightarrow T_{3\\frac{1}{2}}$, and together with the implications already proved this is the whole classical chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-urysohn-lemma, def-normal-and-t4-spaces, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-completely-regular-and-tychonoff-spaces,
       thm-the-separation-implication-chain, def-dependent-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "$T_4 \\Rightarrow T_{3\\frac12}$ (DC)"
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
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). If
$(X,\mathcal{T})$ is normal and $T_1$, that is $T_4$
([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]), then $X$ is
completely regular ([[def-completely-regular-and-tychonoff-spaces]]). Since $X$
is also $T_1$, $X$ is Tychonoff, and $T_4 \Rightarrow T_{3\frac12}$.

Combined with [[thm-the-separation-implication-chain]], every arrow of

$$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_{3\frac12} \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$$

now holds: the first arrow under the Axiom of Countable Choice
([[def-countable-choice]]), the arrow $T_4 \Rightarrow T_{3\frac12}$ proved here
under dependent choice, and every other arrow with no choice principle at all.
No arrow of this chain is asserted to reverse.

## Facts & Assumptions

**Given:** A normal, $T_1$ topological space $(X,\mathcal{T})$, a closed set $C \subseteq X$, and a point $x_0 \in X \setminus C$.

[A1] $X$ is normal ([[def-normal-and-t4-spaces]]) and $T_1$ ([[def-t0-and-t1-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$ and $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] $X$ is completely regular when for every closed $C$ and every $x_0 \in X \setminus C$ there is a continuous $f : X \to [0,1]$ with $f(x_0) = 1$ and $f \equiv 0$ on $C$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L4] Clauses 3 and 4 of [[thm-the-separation-implication-chain]]: normal with $T_1$ implies $T_3$; completely regular implies regular, and Tychonoff implies $T_3$; and clauses 1, 2 and 5 give the remaining arrows of the displayed chain, clause 1 — perfectly normal implies completely normal, that is $T_6 \Rightarrow T_5$ — under the Axiom of Countable Choice.

## Proof

**Proof technique:** direct.

1.1 $\{x_0\}$ is closed, since $X$ is $T_1$ by [A1]. [A1, L1]

1.2 $\{x_0\} \cap C = \varnothing$, since $x_0 \notin C$. [given]

2.1 By [A1] $X$ is normal, so [L2] applies to the disjoint closed sets $C$ and $\{x_0\}$: there is a continuous $f : X \to [0,1]$ with $C \subseteq f^{-1}(\{0\})$ and $\{x_0\} \subseteq f^{-1}(\{1\})$, that is $f \equiv 0$ on $C$ and $f(x_0) = 1$. [step 1.1, step 1.2, A1, L2]

3.1 Since $C$ and $x_0 \notin C$ were arbitrary, step 2.1 exhibits, for every closed $C$ and every $x_0 \in X \setminus C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$ and $f \equiv 0$ on $C$; by [L3] this makes $X$ completely regular. [step 2.1, L3]

4.1 Since $X$ is also $T_1$ by [A1], $X$ is Tychonoff, so $T_4 \Rightarrow T_{3\frac12}$. [step 3.1, A1]

5.1 By [L4], $T_{3\frac12} \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$ and $T_6 \Rightarrow T_5 \Rightarrow T_4$ all hold, the arrow $T_6 \Rightarrow T_5$ under countable choice; combined with step 4.1, every arrow of the displayed chain holds. [step 4.1, L4] ∎

## Remarks

- **This corollary supplies exactly the one arrow the published `separation-axioms` page could not reach.** That page's own `rem-separation-axiom-conventions` names the missing arrow as *normal $T_1$ implies completely regular* and records that no rearrangement of material already on that page could supply it, since the implication is Urysohn's lemma. Nothing in this corollary revisits or amends that page; it only supplies, at a later point in the reading order, the theorem that page named as absent.

- **The chain above is not asserted to be a theorem of ZF.** Its weakest link is this corollary's own dependent-choice hypothesis, and the first arrow separately costs countable choice; neither cost is removed by combining the arrows, and no clause of [[thm-the-separation-implication-chain]] is reproved here.
````

## Wave 7 provenance row for the target

```json
{
  "id": "cor-urysohns-lemma-closes-the-separation-chain",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Urysohn%27s_lemma",
    "https://en.wikipedia.org/wiki/Separation_axiom"
  ],
  "rationale": "The standard Urysohn implication from normal T1 to complete regularity is combined with the library separation chain and choice annotations.",
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
      "source": "def-normal-and-t4-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **normal** when any two disjoint closed sets can be separated by\n  disjoint open sets: for all closed $A, B \\subseteq X$ with\n  $A \\cap B = \\varnothing$ there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nEither of $A$, $B$ may be empty, and those cases are met by $U = \\varnothing$ or\n$V = \\varnothing$ together with $X$; so the condition hides no nonemptiness\nhypothesis. As with regularity, \"disjoint open sets\" may equivalently be read as\n\"disjoint open neighbourhoods of the two sets\" ([[def-neighbourhood-top]]).\n\n**Normality is the special case of complete normality at a disjoint closed\npair.** Disjoint closed sets are separated in the sense of\n[[def-separated-sets]], since the closure of a closed set is itself; so a space\nin which every *separated* pair can be put into disjoint open sets is in\nparticular normal. That stronger condition is defined later on this page, and the\nimplication is proved there.\n\n**The convention fork, and this library's side of it.** Exactly as for\nregularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.\nMunkres builds it in; Kelley, Willard and Engelking do not. **This library takes\nthe second side**: *normal* names the separation condition alone, $T_4$ names\nnormal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.\nThe reason is again that the two halves are independent, and here the point is\nsharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The\nindiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,\nits only closed sets being $\\varnothing$ and the whole space, and it is not even\n$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on\nthis page, the first as a false statement and both on the companion page.",
      "uses": [
        "1.1",
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are\n  *topologically distinguishable*: for all $x, y \\in X$ with $x \\ne y$ there is\n  an open set containing exactly one of $x$ and $y$.\n- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points\n  has an open set containing it and missing the other: for all $x, y \\in X$ with\n  $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with\n\n$$x \\in U, \\quad y \\notin U, \\qquad y \\in V, \\quad x \\notin V .$$\n\nNothing is asserted about a pair of equal points, so a space with at most one\npoint satisfies both conditions vacuously.\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), both conditions may be read with \"open\nneighbourhood\" in place of \"open set\"; and by the same equivalence recorded in\n[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since\na neighbourhood of $x$ contains an open one and an open neighbourhood is a\nneighbourhood.\n\n**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to\nthe reader, because it is the bottom arrow of the whole hierarchy on this page.\nLet $x \\ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set\ncontaining $x$ and not $y$, so it contains exactly one of the two points, which\nis the $T_0$ condition. Only the first half of the $T_1$ condition is used, so\nthe implication does not reverse formally, and it does not reverse in fact:\nSierpinski space is a witness, recorded on the companion page.\n\n**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set\nthat tells the pair apart, with no control over which of the two it contains;\n$T_1$ asks for *both* separations at once. In Sierpinski space\n$(\\{a,b\\}, \\{\\varnothing, \\{b\\}, \\{a,b\\}\\})$ of [[def-standard-topologies]] the\nopen set $\\{b\\}$ contains $b$ and not $a$, so the space is $T_0$; but the only\nopen set containing $a$ is the whole space, which also contains $b$, so it is\nnot $T_1$.\n\n**Neither condition is a property of a set alone.** Both are properties of the\npair $(X, \\mathcal{T})$, and both are inherited upwards along the comparison\norder of [[def-topological-space]]: if $\\mathcal{T}_1 \\subseteq \\mathcal{T}_2$\nand $(X,\\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is\n$(X,\\mathcal{T}_2)$, since the separating open sets of the coarser topology lie\nin the finer one. In particular the discrete topology satisfies both, and the\nindiscrete topology on a set with at least two points satisfies neither.",
      "uses": [
        "1.1",
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-t1-iff-singletons-are-closed",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$\\mathcal{T}_{\\mathrm{cof}}$ be the cofinite topology on the set $X$\n([[def-standard-topologies]]). The following four conditions are equivalent.\n\n- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).\n- **(b)** $\\{x\\}$ is closed for every $x \\in X$.\n- **(c)** $F$ is closed for every finite $F \\subseteq X$ ([[def-countable]]).\n- **(d)** $\\mathcal{T}_{\\mathrm{cof}} \\subseteq \\mathcal{T}$, that is, the\n  topology of $X$ is finer than the cofinite topology on the same set.\n\nCondition (d) says that the cofinite topology is the **coarsest** $T_1$ topology\non any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set\ncontains it.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-urysohn-lemma",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let\n$(X, \\mathcal{T})$ be a topological space.\n\n1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \\subseteq X$ are\n   disjoint closed sets, there is a continuous $f : X \\to [0,1]$\n   ([[def-continuous-map-top]], [[def-interval]]) with\n   $A \\subseteq f^{-1}(\\{0\\})$ and $B \\subseteq f^{-1}(\\{1\\})$.\n2. Conversely, if every pair of disjoint closed subsets of $X$ admits a\n   continuous function into $[0,1]$ separating them in the sense of clause 1,\n   then $X$ is normal. **This direction uses no choice principle.**\n\n**Where the choice principle of clause 1 is spent, and why not less.** The\nconstruction below builds, for each $n \\in \\mathbb{N}$, an assignment of an\nopen set to every dyadic rational of level $n$, extending the level-$(n-1)$\nassignment; at each single level the finitely many new open sets are chosen at\nonce by [[lem-finite-choice]], a theorem of ZF, but stringing together\ninfinitely many such levels, each depending on the one before, is exactly the\nsituation dependent choice is for. The published\n[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that\n$\\mathrm{ZF}$ and even $\\mathrm{ZF}$ together with the Axiom of Countable\nChoice do not suffice, and that dependent choice does; nothing here claims\ndependent choice is *necessary* for clause 1, only that the construction given\nis carried out in $\\mathrm{ZF} + \\mathrm{DC}$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-completely-regular-and-tychonoff-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$[0,1] \\subseteq \\mathbb{R}$ carry the subspace topology of the usual topology of\n$\\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],\n[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).\n\n- $X$ is **completely regular** when a point can be separated from a closed set\n  not containing it *by a continuous function*: for every closed $C \\subseteq X$\n  and every $x_0 \\in X \\setminus C$ there is a continuous\n  $f : X \\to [0,1]$ ([[def-continuous-map-top]]) with\n  $$f(x_0) = 1 \\qquad \\text{and} \\qquad f(y) = 0 \\ \\text{ for every } y \\in C .$$\n- $X$ is **Tychonoff**, also written **$T_{3\\frac{1}{2}}$** and *completely\n  regular Hausdorff*, when it is completely regular **and** $T_1$\n  ([[def-t0-and-t1-spaces]]).\n\nThe case $C = \\varnothing$ is allowed and is satisfied by the constant function\n$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition\nhides no nonemptiness hypothesis.\n\n**The same condition in the vocabulary of zero sets.** With $f$ as displayed,\n$C \\subseteq Z(f)$ and $x_0 \\in \\operatorname{coz}(f)$\n([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every\nclosed $C$ and every $x_0 \\notin C$ there is a continuous $f$ whose zero set\ncontains $C$ and whose cozero set contains $x_0$. In particular\n$\\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;\nthat alone is weaker than regularity, and the passage from the function to two\n*disjoint* open sets is the next item.\n\n**The values $0$ and $1$ are a normalisation, not a restriction.** If\n$g : X \\to \\mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \\{b\\}$ and\n$a \\ne b$, then the condition above is met by a function built from $g$ by an\naffine change of variable followed by truncation into $[0,1]$; this page never\nneeds that construction, because every function it builds is already normalised.\nThe *direction* of the normalisation is a genuine convention and is fixed here as\n$f(x_0) = 1$ and $f[C] = \\{0\\}$, following the most common usage; some texts\nwrite the reverse, and a reader must check which is meant before quoting a\nformula.\n\n**The convention fork over $T_1$ is the same one as for regularity.** *Completely\nregular* names the function-separation condition alone, and Tychonoff names the\nconjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology\non a two-point set ([[def-standard-topologies]]) is completely regular, its only\nclosed set disjoint from a point being $\\varnothing$, and it is not $T_0$; so the\ntwo halves are independent here as well.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-the-separation-implication-chain",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]). The\nfollowing implications hold, and each is proved by an earlier item of this page.\n\n1. **Perfectly normal implies completely normal**, assuming the Axiom of\n   Countable Choice ([[def-countable-choice]]).\n2. **Completely normal implies normal**, and **perfectly normal implies normal**.\n3. **Normal together with $T_1$ implies $T_3$**, that is regular together with\n   $T_1$.\n4. **Completely regular implies regular**, and **Tychonoff implies $T_3$**.\n5. **Regular together with $T_1$ implies Urysohn**, which implies **Hausdorff**,\n   which implies **$T_1$**, which implies **$T_0$**.\n6. **Metrizable implies every property named above**: a metrizable space is\n   perfectly normal, completely normal, normal, Tychonoff, completely regular,\n   $T_3$, regular, Urysohn, Hausdorff, $T_1$ and $T_0$, with no choice principle\n   used.\n\nReading the numbered axioms in order, clauses 1 to 5 give\n\n$$T_6 \\Rightarrow T_5 \\Rightarrow T_4 \\Rightarrow T_3 \\Rightarrow T_{2\\frac12} \\Rightarrow T_2 \\Rightarrow T_1 \\Rightarrow T_0 ,$$\n\nthe first arrow under $\\mathrm{AC}_\\omega$, together with\n$T_{3\\frac12} \\Rightarrow T_3$.\n\n**This is the whole of the classical chain that this page proves, and it is one\narrow short of the classical chain.** The implication $T_4 \\Rightarrow\nT_{3\\frac12}$ — a normal $T_1$ space is completely regular — is Urysohn's lemma\nand is not available at this point in the reading order. Its absence is recorded,\nwith what would license it, in this page's conventions remark; it is\ndeliberately **not** asserted here,\nand no clause above may be read as giving it.",
      "uses": [
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$\\{x_0\\}$ is closed, since $X$ is $T_1$ by [A1]. [A1, L1]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "$\\{x_0\\} \\cap C = \\varnothing$, since $x_0 \\notin C$. [given]",
      "step": "1.2",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [A1] $X$ is normal, so [L2] applies to the disjoint closed sets $C$ and $\\{x_0\\}$: there is a continuous $f : X \\to [0,1]$ with $C \\subseteq f^{-1}(\\{0\\})$ and $\\{x_0\\} \\subseteq f^{-1}(\\{1\\})$, that is $f \\equiv 0$ on $C$ and $f(x_0) = 1$. [step 1.1, step 1.2, A1, L2]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "A1",
        "L2",
        "1.1",
        "1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Since $C$ and $x_0 \\notin C$ were arbitrary, step 2.1 exhibits, for every closed $C$ and every $x_0 \\in X \\setminus C$, a continuous $f : X \\to [0,1]$ with $f(x_0)=1$ and $f \\equiv 0$ on $C$; by [L3] this makes $X$ completely regular. [step 2.1, L3]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L3",
        "2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Since $X$ is also $T_1$ by [A1], $X$ is Tychonoff, so $T_4 \\Rightarrow T_{3\\frac12}$. [step 3.1, A1]",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "A1",
        "3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "By [L4], $T_{3\\frac12} \\Rightarrow T_3 \\Rightarrow T_{2\\frac12} \\Rightarrow T_2 \\Rightarrow T_1 \\Rightarrow T_0$ and $T_6 \\Rightarrow T_5 \\Rightarrow T_4$ all hold, the arrow $T_6 \\Rightarrow T_5$ under countable choice; combined with step 4.1, every arrow of the displayed chain holds. [step 4.1, L4] ∎",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "L4",
        "4.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.2: empty-set or empty-family case was inspected and introduces no illicit witness"
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
      "evidence": "statement and step 2.1: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 5.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
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
    "source": "cor-urysohns-lemma-closes-the-separation-chain",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-urysohn-lemma",
    "declared_target": "thm-urysohn-lemma",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-urysohns-lemma-closes-the-separation-chain",
    "sourcePage": "urysohn-lemma-and-tietze",
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
    "source": "cor-urysohns-lemma-closes-the-separation-chain",
    "sourcePage": "urysohn-lemma-and-tietze",
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
    "source": "cor-urysohns-lemma-closes-the-separation-chain",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "cor-urysohns-lemma-closes-the-separation-chain",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-completely-regular-and-tychonoff-spaces",
    "declared_target": "def-completely-regular-and-tychonoff-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-urysohns-lemma-closes-the-separation-chain",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-the-separation-implication-chain",
    "declared_target": "thm-the-separation-implication-chain",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-urysohns-lemma-closes-the-separation-chain",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-urysohns-lemma-closes-the-separation-chain",
    "sourcePage": "urysohn-lemma-and-tietze",
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

## Full text of every cited or declared item (8)

### `def-completely-regular-and-tychonoff-spaces`

````markdown
---
id: def-completely-regular-and-tychonoff-spaces
kind: definition
title: "Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-zero-sets-and-cozero-sets, def-regular-and-t3-spaces, def-t0-and-t1-spaces,
       def-continuous-map-top, def-interval, def-subspace-topology-top,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-topological-space,
       def-standard-topologies]
justified_by: []
aliases: [def-completely-regular-space, def-tychonoff-space, def-t3-and-a-half-space]
landmark: true
short: "completely regular, Tychonoff"
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
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 33: The Urysohn Lemma (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-33.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$[0,1] \subseteq \mathbb{R}$ carry the subspace topology of the usual topology of
$\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

- $X$ is **completely regular** when a point can be separated from a closed set
  not containing it *by a continuous function*: for every closed $C \subseteq X$
  and every $x_0 \in X \setminus C$ there is a continuous
  $f : X \to [0,1]$ ([[def-continuous-map-top]]) with
  $$f(x_0) = 1 \qquad \text{and} \qquad f(y) = 0 \ \text{ for every } y \in C .$$
- $X$ is **Tychonoff**, also written **$T_{3\frac{1}{2}}$** and *completely
  regular Hausdorff*, when it is completely regular **and** $T_1$
  ([[def-t0-and-t1-spaces]]).

The case $C = \varnothing$ is allowed and is satisfied by the constant function
$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition
hides no nonemptiness hypothesis.

**The same condition in the vocabulary of zero sets.** With $f$ as displayed,
$C \subseteq Z(f)$ and $x_0 \in \operatorname{coz}(f)$
([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every
closed $C$ and every $x_0 \notin C$ there is a continuous $f$ whose zero set
contains $C$ and whose cozero set contains $x_0$. In particular
$\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;
that alone is weaker than regularity, and the passage from the function to two
*disjoint* open sets is the next item.

**The values $0$ and $1$ are a normalisation, not a restriction.** If
$g : X \to \mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \{b\}$ and
$a \ne b$, then the condition above is met by a function built from $g$ by an
affine change of variable followed by truncation into $[0,1]$; this page never
needs that construction, because every function it builds is already normalised.
The *direction* of the normalisation is a genuine convention and is fixed here as
$f(x_0) = 1$ and $f[C] = \{0\}$, following the most common usage; some texts
write the reverse, and a reader must check which is meant before quoting a
formula.

**The convention fork over $T_1$ is the same one as for regularity.** *Completely
regular* names the function-separation condition alone, and Tychonoff names the
conjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology
on a two-point set ([[def-standard-topologies]]) is completely regular, its only
closed set disjoint from a point being $\varnothing$, and it is not $T_0$; so the
two halves are independent here as well.

## Remarks

- **Complete regularity is a strong hypothesis in disguise.** It asserts the
  existence of many continuous real-valued functions, and a space may have almost
  none; producing such functions is what Urysohn's lemma does for normal $T_1$
  spaces, and that lemma is not available at this point in the reading order
  ([[rem-separation-axiom-conventions]]).

- **Why the numeral is $3\frac12$.** Complete regularity implies regularity, as
  the next item proves, and every normal $T_1$ space is completely regular, which
  this page does **not** prove; so the axiom sits between $T_3$ and $T_4$, and
  the fractional numeral records that position and nothing more.

- **Both names are in use for the conjunction.** *Tychonoff*, *completely regular
  Hausdorff* and *$T_{3\frac12}$* denote the same class; this library writes
  Tychonoff.
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

### `def-dependent-choice`

````markdown
---
id: def-dependent-choice
kind: definition
title: "The axiom of dependent choice: a relation in which every element is related to something admits an $\\mathbb{N}$-indexed chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable-choice, def-sequence, def-natural-numbers]
justified_by: []
aliases: [def-dc]
landmark: true
short: "dependent choice (DC)"
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
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a sequence $x : \mathbb{N} \to X$ ([[def-sequence]],
> [[def-natural-numbers]]) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** [[def-choice-function]] and
[[def-axiom-of-choice]] select one element from each member of a family that is
fixed in advance, and [[def-countable-choice]] does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense ([[def-chain]]). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

## Remarks

**Where DC sits among the choice principles.** It is a standard fact, proved in
the references and **not** in this library, that

$$\mathrm{AC} \;\Longrightarrow\; \mathrm{DC} \;\Longrightarrow\; \mathrm{AC}_\omega ,$$

and that neither implication reverses. The non-reversals are relative-consistency
results: what they establish is that ZF, if consistent, does not prove the
missing implications, never that those implications are false. This library
contains neither forcing nor permutation models and proves no independence
result, so all of that is quoted from the references and used nowhere.

**Nothing in this library proves DC, and nothing assumes it silently.** Like
[[def-axiom-of-choice]] and [[def-countable-choice]], DC is a statement that may
be assumed or not. Every theorem whose proof uses it says so in its own
statement, and the accounting for the compactness page is collected in
[[rem-compactness-choice-ledger-metric]].

**An upper bound, never a lower one.** When a later item records that its proof
uses DC, the claim made is that the argument given here is carried out in
$\mathrm{ZF} + \mathrm{DC}$. No item claims that DC is *necessary* for the
statement proved, because establishing necessity means separating the statement
from ZF, and that is an independence result of exactly the kind this library does
not prove.
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

### `thm-the-separation-implication-chain`

````markdown
---
id: thm-the-separation-implication-chain
kind: theorem
title: "The implications proved on this page: perfectly normal gives completely normal under countable choice, and completely normal gives normal; normal with $T_1$ gives $T_3$; completely regular gives regular; regular with $T_1$ gives Urysohn, hence Hausdorff, hence $T_1$, hence $T_0$; and metrizable gives every one of them"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-t0-and-t1-spaces, def-hausdorff-space, def-urysohn-space,
       def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces,
       def-normal-and-t4-spaces, def-completely-normal-and-perfectly-normal-spaces,
       thm-t1-iff-singletons-are-closed, lem-urysohn-sits-between-hausdorff-and-regular-plus-t1,
       thm-completely-regular-implies-regular, thm-t4-implies-t3,
       thm-completely-normal-implies-normal, thm-perfectly-normal-implies-completely-normal,
       thm-metric-spaces-are-completely-normal, thm-metric-spaces-are-tychonoff-and-perfectly-normal,
       def-metrizable-space, def-countable-choice, def-topological-space]
justified_by: []
aliases: [thm-separation-chain]
landmark: true
short: "the separation implication chain"
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
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §31-33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §13-15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). The
following implications hold, and each is proved by an earlier item of this page.

1. **Perfectly normal implies completely normal**, assuming the Axiom of
   Countable Choice ([[def-countable-choice]]).
2. **Completely normal implies normal**, and **perfectly normal implies normal**.
3. **Normal together with $T_1$ implies $T_3$**, that is regular together with
   $T_1$.
4. **Completely regular implies regular**, and **Tychonoff implies $T_3$**.
5. **Regular together with $T_1$ implies Urysohn**, which implies **Hausdorff**,
   which implies **$T_1$**, which implies **$T_0$**.
6. **Metrizable implies every property named above**: a metrizable space is
   perfectly normal, completely normal, normal, Tychonoff, completely regular,
   $T_3$, regular, Urysohn, Hausdorff, $T_1$ and $T_0$, with no choice principle
   used.

Reading the numbered axioms in order, clauses 1 to 5 give

$$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0 ,$$

the first arrow under $\mathrm{AC}_\omega$, together with
$T_{3\frac12} \Rightarrow T_3$.

**This is the whole of the classical chain that this page proves, and it is one
arrow short of the classical chain.** The implication $T_4 \Rightarrow
T_{3\frac12}$ — a normal $T_1$ space is completely regular — is Urysohn's lemma
and is not available at this point in the reading order. Its absence is recorded,
with what would license it, in this page's conventions remark; it is
deliberately **not** asserted here,
and no clause above may be read as giving it.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, and the definitions of $T_0$, $T_1$, Hausdorff, Urysohn, regular, completely regular, normal, completely normal and perfectly normal ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]], [[def-urysohn-space]], [[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]], [[def-normal-and-t4-spaces]], [[def-completely-normal-and-perfectly-normal-spaces]]).

[L1] Assuming $\mathrm{AC}_\omega$, every perfectly normal space is completely normal ([[thm-perfectly-normal-implies-completely-normal]], [[def-countable-choice]]).

[L2] Every completely normal space is normal, and every perfectly normal space is normal ([[thm-completely-normal-implies-normal]]).

[L3] A normal $T_1$ space is regular, hence $T_3$ ([[thm-t4-implies-t3]]).

[L4] Every completely regular space is regular, and every Tychonoff space is $T_3$ ([[thm-completely-regular-implies-regular]]).

[L5] Every regular $T_1$ space is Urysohn, every Urysohn space is Hausdorff, and every Hausdorff space is $T_1$ and hence $T_0$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]]).

[L6] Every $T_1$ space has closed singletons, and conversely ([[thm-t1-iff-singletons-are-closed]]).

[L7] Every metric space is completely normal, hence normal, with no choice principle used ([[thm-metric-spaces-are-completely-normal]]).

[L8] Every metrizable space is Tychonoff and perfectly normal, and hence satisfies every axiom named in clause 6 ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]], [[def-metrizable-space]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1 is [L1], whose hypothesis $\mathrm{AC}_\omega$ is carried into clause 1 unchanged. [L1]

1.2 Clause 2 is [L2]. [L2]

1.3 Clause 3 is [L3]. [L3]

1.4 Clause 4 is [L4]. [L4]

1.5 Clause 5 is [L5], the first implication of which uses [L6] inside its own proof and needs nothing further here. [L5, L6]

1.6 Clause 6 is [L7] together with [L8]. [L7, L8]

2.1 The displayed chain of numbered axioms is read off from steps 1.1 to 1.5, each numbered axiom being the corresponding unnumbered property together with $T_1$, which is carried along every arrow: $T_6$ gives completely normal by step 1.1, hence $T_5$; $T_5$ gives normal by step 1.2, hence $T_4$; $T_4$ gives $T_3$ by step 1.3; and $T_3$ gives Urysohn, Hausdorff, $T_1$ and $T_0$ by step 1.5. [step 1.1, step 1.2, step 1.3, step 1.5]

2.2 The side arrow $T_{3\frac12} \Rightarrow T_3$ is the second half of step 1.4. [step 1.4]

3.1 Steps 1.1 to 1.6, 2.1 and 2.2 are exactly clauses 1 to 6 and the two displayed chains, and no other implication is asserted. [step 1.6, step 2.1, step 2.2] ∎

## Remarks

- **Every clause above is an implication and none is an equivalence.** This page refutes four of the possible converses among its false statements — $T_1$ does not give Hausdorff, normal does not give Hausdorff, Hausdorff does not give regular, and unique sequential limits do not give Hausdorff — and asserts nothing about the others.

- **The $T_1$ hypothesis is where the numerals differ from the adjectives.** *Regular*, *completely regular*, *normal*, *completely normal* and *perfectly normal* carry no $T_1$ in this library; $T_3$, $T_{3\frac12}$, $T_4$, $T_5$ and $T_6$ are the conjunctions with $T_1$. Clauses 3 and 5 are the two places the conjunction is genuinely needed for the next arrow, and they are what makes the numbered chain descend at all.

- **The countable choice in clause 1 is inherited, not introduced.** It is spent in the proof of [[thm-perfectly-normal-implies-completely-normal]] and nowhere else on this page; clause 6 in particular is choice free, since the metric proofs construct their open sets explicitly.
````

### `thm-urysohn-lemma`

````markdown
---
id: thm-urysohn-lemma
kind: theorem
title: "Urysohn's lemma, under the axiom of dependent choice: in a normal space two disjoint closed sets are separated by a continuous function into $[0,1]$, and conversely such a space is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
       def-the-dyadic-rationals-of-the-unit-interval, def-normal-and-t4-spaces,
       lem-normality-via-shrinking, def-dependent-choice, lem-finite-choice,
       def-choice-function, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interior-closure-boundary-top, def-interval, def-topological-space,
       def-subspace-topology-top, lem-real-line-is-a-metric-space]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: [thm-urysohn]
landmark: true
short: "Urysohn's lemma (DC)"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \subseteq X$ are
   disjoint closed sets, there is a continuous $f : X \to [0,1]$
   ([[def-continuous-map-top]], [[def-interval]]) with
   $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.
2. Conversely, if every pair of disjoint closed subsets of $X$ admits a
   continuous function into $[0,1]$ separating them in the sense of clause 1,
   then $X$ is normal. **This direction uses no choice principle.**

**Where the choice principle of clause 1 is spent, and why not less.** The
construction below builds, for each $n \in \mathbb{N}$, an assignment of an
open set to every dyadic rational of level $n$, extending the level-$(n-1)$
assignment; at each single level the finitely many new open sets are chosen at
once by [[lem-finite-choice]], a theorem of ZF, but stringing together
infinitely many such levels, each depending on the one before, is exactly the
situation dependent choice is for. The published
[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that
$\mathrm{ZF}$ and even $\mathrm{ZF}$ together with the Axiom of Countable
Choice do not suffice, and that dependent choice does; nothing here claims
dependent choice is *necessary* for clause 1, only that the construction given
is carried out in $\mathrm{ZF} + \mathrm{DC}$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$ (every $p \in P$ has some $q \in P$ with $p \mathbin{R} q$), and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0 = a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[L1] Shrinking: if $X$ is normal, $C \subseteq X$ is closed and $O \subseteq X$ is open with $C \subseteq O$, then there is open $W$ with $C \subseteq W \subseteq \overline{W} \subseteq O$ ([[lem-normality-via-shrinking]]).

[L2] Finite choice: a function $F$ with domain a natural number $n$, all of whose values are nonempty sets, admits a choice function for the family $F[n]$ of its values ([[lem-finite-choice]], [[def-choice-function]]), a theorem of ZF.

[L3] The dyadic rationals $D = \bigcup_{n} D_n$ of $[0,1]$ are an increasing union of finite levels; for $n \in \mathbb{N}$, $D_{n+1} = D_n \cup \{\, t_j : 0 \le j < 2^n \,\}$, where $t_j$ is strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and $s_j := (j+1)/2^n$, the $2^n$ points $t_j$ are pairwise distinct and disjoint from $D_n$, and every two elements of $D$ lie together in some common $D_n$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L4] Chaining: if $V_0, \dots, V_k$ ($k \ge 0$) are subsets of $X$ with $\overline{V_i} \subseteq V_{i+1}$ for every $i < k$, then $\overline{V_0} \subseteq V_k$, since $V_i \subseteq \overline{V_i} \subseteq V_{i+1}$ for each $i$ ([[def-interior-closure-boundary-top]]) makes $\overline{V_0} \subseteq V_1 \subseteq V_2 \subseteq \cdots \subseteq V_k$ a chain of inclusions.

[L5] The generic construction: if $(U_r)_{r \in D}$ is a family of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r<s$ in $D$ and $U_1 = X$, then $g(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$ ([[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]]).

[L6] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L7] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L8] $A \subseteq \overline{A}$ for every $A \subseteq X$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal and $A, B \subseteq X$ are disjoint closed sets (the hypothesis of clause 1). [assume-hyp]

1.2 Assume instead that every pair of disjoint closed subsets of $X$ admits a continuous function into $[0,1]$ separating them as in clause 1 (the hypothesis of clause 2). [assume-hyp]

2.1 Under step 1.1: $A \subseteq X \setminus B$, since $A \cap B = \varnothing$, and $X \setminus B$ is open since $B$ is closed; by [L1] applied to the closed set $A$ and the open set $X \setminus B$, fix open $\Phi_0(0)$ with $A \subseteq \Phi_0(0) \subseteq \overline{\Phi_0(0)} \subseteq X \setminus B$, and put $\Phi_0(1) := X \setminus B$, defining $\Phi_0 : D_0 \to \mathcal{T}$ on $D_0 = \{0,1\}$. [step 1.1, L1, choose, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; fix a continuous $h : X \to [0,1]$ with $C \subseteq h^{-1}(\{0\})$ and $E \subseteq h^{-1}(\{1\})$. [step 1.2, choose]

3.1 Under step 1.1: $A \subseteq \Phi_0(0)$; $\overline{\Phi_0(0)} \subseteq \Phi_0(1)$; and $\Phi_0(1) = X \setminus B$. [step 2.1]

3.2 Under step 1.2, continuing: by [L6], $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in $[0,1]$, disjoint, with $0 \in [0,\tfrac12)$ and $1 \in (\tfrac12,1]$; put $O_1 := h^{-1}(\,[0,\tfrac12)\,)$ and $O_2 := h^{-1}(\,(\tfrac12,1]\,)$, open in $X$ by [L7]. [step 2.2, L6, L7]

4.1 Under step 1.1: for $n \in \mathbb{N}$, call $\Phi : D_n \to \mathcal{T}$ **admissible at level $n$** when (i) $\overline{\Phi(r)} \subseteq \Phi(s)$ for every $r < s$ in $D_n$; (ii) $A \subseteq \Phi(0)$; (iii) $\Phi(1) = X \setminus B$. Put $P := \{\, (n,\Phi) : n \in \mathbb{N},\ \Phi \text{ admissible at level } n \,\}$, and for $(n,\Phi), (n',\Phi') \in P$ say $(n,\Phi) \mathbin{R} (n',\Phi')$ when $n' = n+1$ and $\Phi'|_{D_n} = \Phi$. By step 3.1, $(0,\Phi_0) \in P$. [step 3.1, construct]

4.2 Under step 1.2: $C \subseteq O_1$, since $h \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $h \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = h^{-1}\big(\,[0,\tfrac12) \cap (\tfrac12,1]\,\big) = h^{-1}(\varnothing) = \varnothing$. [step 2.2, step 3.2, L6]

5.1 Under step 1.1: let $(n,\Phi) \in P$. For each $j$ with $0 \le j < 2^n$, with $r_j, s_j, t_j$ as in [L3]: since $r_j < s_j$ in $D_n$, admissibility (i) gives $\overline{\Phi(r_j)} \subseteq \Phi(s_j)$, so by [L1] the set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$ is nonempty. [step 4.1, L1, L3]

5.2 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [[def-normal-and-t4-spaces]]; this is clause 2, and no step of it used [A1]. [step 4.2]

6.1 Under step 1.1, continuing under step 5.1: by [L2] applied to the function assigning, to each $j < 2^n$, the nonempty set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$, fix a simultaneous choice, giving open $W_j$ with $\overline{\Phi(r_j)} \subseteq W_j \subseteq \overline{W_j} \subseteq \Phi(s_j)$ for every $0 \le j < 2^n$. [step 5.1, L2, choose]

7.1 Under step 1.1: define $\Phi' : D_{n+1} \to \mathcal{T}$ by $\Phi'|_{D_n} := \Phi$ and $\Phi'(t_j) := W_j$ for $0 \le j < 2^n$; this is well defined since $D_{n+1} = D_n \cup \{t_j : 0 \le j < 2^n\}$ with the $t_j$ pairwise distinct and disjoint from $D_n$ by [L3]. Then $(n,\Phi) \mathbin{R} (n+1,\Phi')$. [step 6.1, L3, construct]

8.1 Under step 1.1, with $\Phi, \Phi'$ as in step 7.1: for the $D_{n+1}$-consecutive pair $(r_j, t_j)$: $\overline{\Phi'(r_j)} = \overline{\Phi(r_j)} \subseteq W_j = \Phi'(t_j)$ by step 6.1; for the pair $(t_j, s_j)$: $\overline{\Phi'(t_j)} = \overline{W_j} \subseteq \Phi(s_j) = \Phi'(s_j)$ by step 6.1. [step 7.1, step 6.1]

9.1 Under step 1.1: for $x < y$ in $D_{n+1}$, the finitely many elements of $D_{n+1} \cap [x,y]$, listed increasingly as $x = u_0 < u_1 < \cdots < u_k = y$, are $D_{n+1}$-consecutive at each step $u_i < u_{i+1}$, and each such pair is one of the pairs of step 8.1 (every $D_{n+1}$-consecutive pair has at least one member among the new points $t_j$, since a new point was inserted into every $D_n$-consecutive gap); so $\overline{\Phi'(u_i)} \subseteq \Phi'(u_{i+1})$ at each step, and [L4] gives $\overline{\Phi'(x)} = \overline{\Phi'(u_0)} \subseteq \Phi'(u_k) = \Phi'(y)$. [step 8.1, L3, L4]

10.1 Under step 1.1: $A \subseteq \Phi'(0) = \Phi(0)$, since $0 \in D_n$ is unaffected by the extension; $\Phi'(1) = \Phi(1) = X \setminus B$, since $1 \in D_n$ is likewise unaffected; with step 9.1 this is admissibility of $\Phi'$ at level $n+1$, so $(n+1,\Phi') \in P$. [step 7.1, step 9.1, L3]

11.1 Under step 1.1: by steps 5.1, 6.1, 7.1 and 10.1, every $(n,\Phi) \in P$ has some $(n+1,\Phi') \in P$ with $(n,\Phi) \mathbin{R} (n+1,\Phi')$; so $R$ is entire on $P$. [step 7.1, step 10.1]

12.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 11.1; by [A1] applied with $a := (0,\Phi_0)$, there is a sequence $\big((m_k,\Psi_k)\big)_{k \in \mathbb{N}}$ with $(m_0,\Psi_0) = (0,\Phi_0)$ and $(m_k,\Psi_k) \mathbin{R} (m_{k+1},\Psi_{k+1})$ for every $k$. [step 4.1, step 11.1, A1, construct]

13.1 Under step 1.1: since $(n,\Phi) \mathbin{R} (n',\Phi')$ forces $n' = n+1$, and $m_0 = 0$, induction on $k$ gives $m_k = k$ for every $k \in \mathbb{N}$; so each $\Psi_k : D_k \to \mathcal{T}$ is admissible at level $k$, and $\Psi_{k+1}|_{D_k} = \Psi_k$ for every $k$. [step 12.1]

14.1 Under step 1.1: for $r \in D$, fix $n$ with $r \in D_n$ [L3] and define $V_r := \Psi_n(r)$; by step 13.1, for $n \le n'$ with $r \in D_n$, $\Psi_{n'}(r) = \Psi_n(r)$ (chaining $\Psi_{n'}|_{D_n} = \Psi_n$ through the intermediate levels), so $V_r$ does not depend on the level $n$ chosen. [step 13.1, L3, construct]

15.1 Under step 1.1: for $r < s$ in $D$, fix $n$ with $r, s \in D_n$ [L3]; then $\overline{V_r} = \overline{\Psi_n(r)} \subseteq \Psi_n(s) = V_s$ by admissibility (i) of $\Psi_n$. Also $A \subseteq V_0$ and $V_1 = X \setminus B$, by admissibility (ii) and (iii) of $\Psi_n$ for any $n$. [step 14.1, step 13.1, L3]

16.1 Under step 1.1: define $U_r := V_r$ for $r \in D$ with $r < 1$, and $U_1 := X$. For $r < s$ in $D$: if $s < 1$, $\overline{U_r} = \overline{V_r} \subseteq V_s = U_s$ by step 15.1; if $s = 1$, $\overline{U_r} = \overline{V_r} \subseteq V_1 = X \setminus B \subseteq X = U_1$ by step 15.1. So $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$. [step 15.1, construct]

17.1 Under step 1.1: by [L5] applied to $(U_r)_{r \in D}$ of step 16.1, $f(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$. [step 16.1, L5]

17.2 Under step 1.1: for $b \in B$ and $r \in D$ with $r < 1$: fix $n$ with $r \in D_n$ [L3]; since $1 \in D_n$ also, admissibility (i) of $\Psi_n$ applied to $r < 1$ gives $\overline{\Psi_n(r)} \subseteq \Psi_n(1) = X \setminus B$, that is $\overline{V_r} \subseteq X \setminus B$; since $V_r \subseteq \overline{V_r}$ by [L8] and $U_r = V_r$ by step 16.1, $U_r \cap B = \varnothing$, so $b \notin U_r$. [step 14.1, step 13.1, step 16.1, L3, L8]

18.1 Under step 1.1: for $a \in A$: $a \in V_0$ by step 15.1, and $U_0 = V_0$ by step 16.1 (as $0 < 1$), so $a \in U_0$ and $0 \in \{r \in D : a \in U_r\}$; hence $f(a) \le 0$, and $f(a) \ge 0$ since $f$ maps into $[0,1]$ by step 17.1, so $f(a) = 0$. [step 17.1, step 16.1, step 15.1]

18.2 Under step 1.1: for $b \in B$: by step 17.2, $b \notin U_r$ for every $r \in D$ with $r < 1$, and $b \in U_1 = X$ by step 16.1; so $\{r \in D : b \in U_r\} \cup \{1\} = \{1\}$, giving $f(b) = \inf\{1\} = 1$. [step 17.2, step 16.1]

19.1 Steps 17.1, 18.1 and 18.2 show that, under the hypothesis of step 1.1, $f$ is a continuous map $X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$, which is clause 1. [step 17.1, step 18.1, step 18.2]

20.1 Steps 19.1 and 5.2 establish clauses 1 and 2 respectively. [step 19.1, step 5.2, discharge-construct] ∎

## Remarks

- **The lemma is stated for a normal space, not a $T_4$ space.** $T_1$ is used nowhere above; it is needed only to turn a *point* into a closed set, which is the extra step the next corollary spends. The published [[rem-urysohn-lemma-not-a-zf-theorem]] states the classical $T_4$ form; the form proved here is the more general one, and the two are not in tension — the $T_4$ form follows by adding the $T_1$ hypothesis, which is not used in this proof at all.

- **Only clause 1 costs a choice principle**, and it is spent at exactly one place: the single application of dependent choice in step 12.1, which strings together the countably many admissible levels built one finite step at a time in steps 5.1–10.1. Every other existential instantiation above (steps 2.1, 2.2 and 6.1) draws from a single nonempty set or, in step 6.1, from a finite family of them via [[lem-finite-choice]], and neither costs anything beyond ZF.

- **Why the construction tracks $X \setminus B$ rather than $X$ at $r=1$.** Recording $\Phi_n(1) := X \setminus B$ throughout the recursion, rather than $X$, is what makes admissibility clause (i) alone carry the whole $B$-avoidance property: since $1 \in D_n$ for every $n$, clause (i) applied to any $r<1$ already gives $\overline{\Phi_n(r)} \subseteq \Phi_n(1) = X \setminus B$, with no separate bookkeeping. Only at the very end, in step 16.1, is the top value widened from $X \setminus B$ to $X$, which is exactly what [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] requires.
````

