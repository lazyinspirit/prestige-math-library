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

## Target item — `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`

Normalized current SHA-256: `d28d42e619a13f35391c8190033ee0456eaa4295d231f95321394f60dd6c5616`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
kind: lemma
title: "In a locally compact Hausdorff space every open set containing a point contains an open set containing it whose closure is compact and still inside; such a space is regular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-locally-compact-space, def-compact-space,
       thm-closed-subspace-of-a-compact-space-is-compact,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-a-compact-hausdorff-space-is-regular-and-normal,
       lem-regularity-via-closed-neighbourhoods, def-regular-and-t3-spaces,
       def-hausdorff-space, def-subspace-topology-top, thm-subspace-closure-and-interior,
       def-interior-closure-boundary-top, def-neighbourhood-top,
       def-topology-basis-subbasis, def-topological-space]
justified_by: []
aliases: [lem-locally-compact-hausdorff-base-of-compact-closures]
landmark: true
short: "locally compact Hausdorff: a base of open sets with compact closure"
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
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "B. McKay, Topology Lecture Notes"
      url: "https://ben-mckay.github.io/benmckay.github.io/files/topology-lecture-notes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a locally compact ([[def-locally-compact-space]]) Hausdorff
([[def-hausdorff-space]]) space, so that every point of $X$ has a compact
neighbourhood ([[def-neighbourhood-top]], [[def-compact-space]]). Closures are
taken in $X$ unless a subscript names another space
([[def-interior-closure-boundary-top]]). Then:

1. **Shrinking with a compact closure.** For every $x \in X$ and every open
   $U \subseteq X$ with $x \in U$ there is an open $V \subseteq X$ with
   $$x \in V \subseteq \overline{V} \subseteq U$$
   and $\overline{V}$ compact.
2. **A base.** The family of open subsets of $X$ whose closure is compact is a
   basis for the topology of $X$ ([[def-topology-basis-subbasis]]).
3. **Regularity.** $X$ is regular ([[def-regular-and-t3-spaces]]).

Nothing stronger than regularity is claimed: complete regularity of such a space
is a separate statement, needs a continuous real-valued function, and is not
proved here.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $X$, a point $x \in X$ and an open set $U \subseteq X$ with $x \in U$.

[A1] Every point of $X$ has a compact neighbourhood: for each $x$ there are a compact subset $K \subseteq X$ and an open $O \subseteq X$ with $x \in O \subseteq K$ ([[def-locally-compact-space]], [[def-neighbourhood-top]], [[def-compact-space]]).

[A2] $X$ is Hausdorff: distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[A3] $\operatorname{int}(K)$ is the largest open subset of $K$, and $\overline{A}$ is the smallest closed superset of $A$ ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L1] For $S \subseteq X$ the open sets of the subspace $S$ are the traces $U' \cap S$ of the open sets of $X$; an open subset of $X$ contained in $S$ is open in $S$; and for $S \subseteq T \subseteq X$ the topology $S$ inherits from $T$ is the topology it inherits from $X$ ([[def-subspace-topology-top]]).

[L2] A compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[L3] A compact Hausdorff space is regular ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], claim 1).

[L4] A space is regular if and only if for every point $p$ of it and every set $W$ open in it with $p \in W$ there is a set $V$ open in it with $p \in V \subseteq \operatorname{cl}(V) \subseteq W$, the closure being taken in that space ([[lem-regularity-via-closed-neighbourhoods]], (a) iff (b), [[def-regular-and-t3-spaces]]).

[L5] For $S \subseteq X$ and $A \subseteq S$ one has $\operatorname{cl}_S(A) = \overline{A} \cap S$ ([[thm-subspace-closure-and-interior]], claim 1).

[L6] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L7] A family of open sets is a basis for the topology exactly when for every open $W$ and every $p \in W$ some member of the family contains $p$ and is contained in $W$ ([[def-topology-basis-subbasis]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] fix a compact $K \subseteq X$ and an open $O \subseteq X$ with $x \in O \subseteq K$; then $O \subseteq \operatorname{int}(K)$ by [A3], so $x \in \operatorname{int}(K)$. [A1, A3, choose]

1.2 The subspace $K$ is Hausdorff: distinct $p, q \in K$ have disjoint open $U_1 \ni p$ and $U_2 \ni q$ in $X$ by [A2], and the traces $U_1 \cap K$ and $U_2 \cap K$ are disjoint open sets of the subspace containing $p$ and $q$ respectively. [A2, L1]

1.3 $K$ is closed in $X$, being a compact subset of the Hausdorff space $X$. [A2, L2]

2.1 The subspace $K$ is compact and Hausdorff, hence regular. [step 1.2, L3]

2.2 Put $G := U \cap \operatorname{int}(K)$; it is open in $X$, contains $x$ by step 1.1, is contained in $K$ by [A3], and is therefore also open in the subspace $K$. [step 1.1, A3, L1]

3.1 Applying [L4] inside the space $K$, which is regular by step 2.1, to the point $x$ and the set $G$ open in $K$, there is a set $V$ open in $K$ with $x \in V \subseteq \operatorname{cl}_K(V) \subseteq G$. [step 2.1, step 2.2, L4, choose]

4.1 $V$ is open in $X$: by [L1] there is an open $V' \subseteq X$ with $V = V' \cap K$, and since $V \subseteq G \subseteq \operatorname{int}(K)$ we get $V = V \cap \operatorname{int}(K) = V' \cap K \cap \operatorname{int}(K) = V' \cap \operatorname{int}(K)$, an intersection of two open subsets of $X$. [step 2.2, step 3.1, L1, A3]

4.2 $\overline{V} = \operatorname{cl}_K(V)$: from $V \subseteq K$ and $K$ closed in $X$ (step 1.3) the smallest closed superset of $V$ satisfies $\overline{V} \subseteq K$, and [L5] gives $\operatorname{cl}_K(V) = \overline{V} \cap K = \overline{V}$. [step 1.3, step 3.1, A3, L5]

5.1 $\overline{V}$ is compact: by step 4.2 it is $\operatorname{cl}_K(V)$, which is closed in the compact subspace $K$ and hence compact by [L6]; and by the transitivity clause of [L1] the topology it inherits from $K$ is the one it inherits from $X$, so it is a compact subset of $X$. [step 4.2, L1, L6]

6.1 Combining, $V$ is open in $X$ by step 4.1, $x \in V \subseteq \overline{V} = \operatorname{cl}_K(V) \subseteq G \subseteq U$ by steps 3.1, 4.2 and 2.2, and $\overline{V}$ is compact by step 5.1; as $x$ and $U$ were arbitrary this is claim 1. [step 2.2, step 3.1, step 4.1, step 4.2, step 5.1]

7.1 The open subsets of $X$ with compact closure are open, and by step 6.1 every open $U$ and every $x \in U$ admit such a set $V$ with $x \in V \subseteq U$; so by [L7] they form a basis for the topology of $X$, which is claim 2. [step 6.1, L7]

7.2 Step 6.1 gives, for every $x$ and every open $U \ni x$, an open $V$ with $x \in V \subseteq \overline{V} \subseteq U$, which is condition (b) of [L4] for the space $X$; hence $X$ is regular, which is claim 3. [step 6.1, L4]

8.1 Steps 6.1, 7.1 and 7.2 are claims 1, 2 and 3, so the lemma is proved. [step 6.1, step 7.1, step 7.2] ∎

## Remarks

- **Which clause of local compactness is used.** Only that every point has a compact neighbourhood, in the weak sense of [[def-locally-compact-space]]: a compact $K$ with $x$ in its interior. The stronger-sounding conclusion, a neighbourhood base of open sets with compact closure, is *derived* from it here, and the Hausdorff hypothesis is what makes the derivation possible — it is used twice, once to make $K$ closed in $X$ and once to make the subspace $K$ regular.

- **Why the argument moves into the subspace $K$ and back out.** Regularity is available inside $K$, because $K$ is compact Hausdorff, and not yet available in $X$ — proving it for $X$ is claim 3. The two transfers back to $X$ are step 4.1, which uses that $V$ sits inside the *open* set $\operatorname{int}(K)$, and step 4.2, which uses that $K$ is *closed*. Neither transfer works without its hypothesis: an open set of a subspace need not be open in the ambient space, and a closure computed in a subspace need not agree with the ambient closure.

- **Compactness of $\overline{V}$, not merely of its closure inside $K$.** Compactness is a property of a space, and $\overline{V}$ carries the same topology whether it is reached through $K$ or directly from $X$ ([[def-subspace-topology-top]]); step 5.1 records that, so no second notion of "compact subset" is created.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-locally-compact-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **locally compact** when > every point of $X$ has a compact neighbourhood: that is, for every $x \\in X$ there is a neighbourhood $N$ of $x$ ([[def-neighbourhood-top]]) that is a compact subset of $X$ ([[def-compact-space]], [[def-subspace-topology-top]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-neighbourhood-top",
      "source_section": "Definition",
      "quote": "*$X$ is a neighbourhood of each of its points*, since $x \\in X \\subseteq X$ and $X$ is open by (T1); so $\\mathcal{N}(x) \\ne \\varnothing$ and every point has at least one neighbourhood base, namely $\\mathcal{N}(x)$ itself.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-compact-space",
      "source_section": "Definition",
      "quote": "- An **open cover** of $(X,\\mathcal{T})$ is a family $\\mathcal{U} \\subseteq \\mathcal{T}$ of open sets with $X = \\bigcup \\mathcal{U}$, where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover. - A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and harmless. - $(X,\\mathcal{T})$ is **compact** when every open cover of it has a finite subcover: for every open cover $\\mathcal{U}$, either $X = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$X = U_0 \\cup \\dots \\cup U_n .$$ - A subset $A \\subseteq X$ is a **compact subset** of $X$ when the subspace $(A, \\mathcal{T}_A)$ is a compact topological space, $\\mathcal{T}_A$ being the subspace topology ([[def-subspace-topology-top]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **Hausdorff** when any two distinct points are separated by disjoint open sets: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "A3",
      "source": "def-interior-closure-boundary-top",
      "source_section": "Definition",
      "quote": "**Interior and closure are exchanged by complementation.** For every $A \\subseteq X$, $$X \\setminus \\operatorname{int}(A) = \\overline{X \\setminus A}, \\qquad X \\setminus \\overline{A} = \\operatorname{int}(X \\setminus A) = \\operatorname{ext}(A).$$ Indeed $U \\mapsto X \\setminus U$ is a bijection between the open subsets of $A$ and the closed supersets of $X \\setminus A$, and it turns unions into intersections ([[def-topological-space]]); applying complementation to the first identity gives the second.",
      "uses": [
        "1.1",
        "2.2",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "A3",
      "source": "def-topological-space",
      "source_section": "Definition",
      "quote": "The members of $\\mathcal{T}$ are the **open** sets of $(X,\\mathcal{T})$. A subset $F \\subseteq X$ is **closed** when its complement $X \\setminus F$ is open, and **clopen** when it is both open and closed. By (T1) both $\\varnothing$ and $X$ are clopen. *Open and closed are not opposites*: a set may be neither, and it may be both, so \"not open\" is never a synonym for \"closed\".",
      "uses": [
        "1.1",
        "2.2",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let $S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is",
      "uses": [
        "1.2",
        "2.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-compact-subset-of-a-hausdorff-space-is-closed",
      "source_section": "Statement",
      "quote": "4. **In a compact Hausdorff space the two classes coincide.** If in addition $(X, \\mathcal{T})$ is compact, then a subset of $X$ is compact if and only if it is closed.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
      "source_section": "Statement",
      "quote": "claim 3 is what supplies the $T_1$ half, and it is stated separately for that reason. **Nothing stronger is claimed.** In particular it is not asserted here that a compact Hausdorff space is completely regular ([[def-regular-and-t3-spaces]] distinguishes the two conditions), and no continuous real-valued function is produced anywhere below.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-regularity-via-closed-neighbourhoods",
      "source_section": "Statement",
      "quote": "- **(a)** $X$ is regular ([[def-regular-and-t3-spaces]]). - **(b)** For every $x \\in X$ and every open $U$ with $x \\in U$ there is an open $V$ with $$x \\in V \\subseteq \\overline{V} \\subseteq U .$$ - **(c)** Every point of $X$ has a neighbourhood base consisting of **closed** neighbourhoods: for every $x \\in X$ and every neighbourhood $N$ of $x$ there is a closed neighbourhood $K$ of $x$ with $K \\subseteq N$.",
      "uses": [
        "3.1",
        "7.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-regular-and-t3-spaces",
      "source_section": "Definition",
      "quote": "- $X$ is **regular** when a point can be separated from a closed set not containing it: for every closed $C \\subseteq X$ and every $x \\in X \\setminus C$ there are $U, V \\in \\mathcal{T}$ with $$x \\in U, \\qquad C \\subseteq V, \\qquad U \\cap V = \\varnothing .$$ - $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).",
      "uses": [
        "3.1",
        "7.2"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-subspace-closure-and-interior",
      "source_section": "Statement",
      "quote": "\\overline{A} \\cap S .$$ 2. **Interior traces only one way.** $\\operatorname{int}(A) \\subseteq S$, so $\\operatorname{int}(A) \\cap S = \\operatorname{int}(A)$, and $$\\operatorname{int}(A) \\;\\subseteq\\;",
      "uses": [
        "4.2"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-closed-subspace-of-a-compact-space-is-compact",
      "source_section": "Statement",
      "quote": "1. **Closed in compact is compact.** If $(X, \\mathcal{T})$ is compact and $F \\subseteq X$ is closed in $X$, then $F$ is a compact subset of $X$. 2. **Finite unions.** If $n \\in \\mathbb{N}$ and $K_0, \\dots, K_n$ are compact subsets of $X$, then $K_0 \\cup \\dots \\cup K_n$ is a compact subset of $X$. The union of the empty list is $\\varnothing$, which is a compact subset of every space.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-topology-basis-subbasis",
      "source_section": "Definition",
      "quote": "A family $\\mathcal{B} \\subseteq \\mathcal{T}$ is a **basis for $\\mathcal{T}$** if every open set is a union of members of $\\mathcal{B}$: for every $U \\in \\mathcal{T}$ there is $\\mathcal{B}_U \\subseteq \\mathcal{B}$ with $U = \\bigcup \\mathcal{B}_U$. Equivalently, and this is the form used in proofs,",
      "uses": [
        "7.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [A1] fix a compact $K \\subseteq X$ and an open $O \\subseteq X$ with $x \\in O \\subseteq K$; then $O \\subseteq \\operatorname{int}(K)$ by [A3], so $x \\in \\operatorname{int}(K)$. [A1, A3, choose]",
      "step": "1.1",
      "inputs": [
        "A1",
        "A3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The subspace $K$ is Hausdorff: distinct $p, q \\in K$ have disjoint open $U_1 \\ni p$ and $U_2 \\ni q$ in $X$ by [A2], and the traces $U_1 \\cap K$ and $U_2 \\cap K$ are disjoint open sets of the subspace containing $p$ and $q$ respectively. [A2, L1]",
      "step": "1.2",
      "inputs": [
        "A2",
        "L1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "$K$ is closed in $X$, being a compact subset of the Hausdorff space $X$. [A2, L2]",
      "step": "1.3",
      "inputs": [
        "A2",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The subspace $K$ is compact and Hausdorff, hence regular. [step 1.2, L3]",
      "step": "2.1",
      "inputs": [
        "1.2",
        "L3"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Put $G := U \\cap \\operatorname{int}(K)$; it is open in $X$, contains $x$ by step 1.1, is contained in $K$ by [A3], and is therefore also open in the subspace $K$. [step 1.1, A3, L1]",
      "step": "2.2",
      "inputs": [
        "1.1",
        "A3",
        "L1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Applying [L4] inside the space $K$, which is regular by step 2.1, to the point $x$ and the set $G$ open in $K$, there is a set $V$ open in $K$ with $x \\in V \\subseteq \\operatorname{cl}_K(V) \\subseteq G$. [step 2.1, step 2.2, L4, choose]",
      "step": "3.1",
      "inputs": [
        "L4",
        "2.1",
        "2.2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "$V$ is open in $X$: by [L1] there is an open $V' \\subseteq X$ with $V = V' \\cap K$, and since $V \\subseteq G \\subseteq \\operatorname{int}(K)$ we get $V = V \\cap \\operatorname{int}(K) = V' \\cap K \\cap \\operatorname{int}(K) = V' \\cap \\operatorname{int}(K)$, an intersection of two open subsets of $X$. [step 2.2, step 3.1, L1, A3]",
      "step": "4.1",
      "inputs": [
        "L1",
        "2.2",
        "3.1",
        "A3"
      ]
    },
    {
      "id": "step-4.2",
      "claim": "$\\overline{V} = \\operatorname{cl}_K(V)$: from $V \\subseteq K$ and $K$ closed in $X$ (step 1.3) the smallest closed superset of $V$ satisfies $\\overline{V} \\subseteq K$, and [L5] gives $\\operatorname{cl}_K(V) = \\overline{V} \\cap K = \\overline{V}$. [step 1.3, step 3.1, A3, L5]",
      "step": "4.2",
      "inputs": [
        "1.3",
        "L5",
        "3.1",
        "A3"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "$\\overline{V}$ is compact: by step 4.2 it is $\\operatorname{cl}_K(V)$, which is closed in the compact subspace $K$ and hence compact by [L6]; and by the transitivity clause of [L1] the topology it inherits from $K$ is the one it inherits from $X$, so it is a compact subset of $X$. [step 4.2, L1, L6]",
      "step": "5.1",
      "inputs": [
        "4.2",
        "L6",
        "L1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Combining, $V$ is open in $X$ by step 4.1, $x \\in V \\subseteq \\overline{V} = \\operatorname{cl}_K(V) \\subseteq G \\subseteq U$ by steps 3.1, 4.2 and 2.2, and $\\overline{V}$ is compact by step 5.1; as $x$ and $U$ were arbitrary this is claim 1. [step 2.2, step 3.1, step 4.1, step 4.2, step 5.1]",
      "step": "6.1",
      "inputs": [
        "4.1",
        "3.1",
        "4.2",
        "2.2",
        "5.1"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "The open subsets of $X$ with compact closure are open, and by step 6.1 every open $U$ and every $x \\in U$ admit such a set $V$ with $x \\in V \\subseteq U$; so by [L7] they form a basis for the topology of $X$, which is claim 2. [step 6.1, L7]",
      "step": "7.1",
      "inputs": [
        "6.1",
        "L7"
      ]
    },
    {
      "id": "step-7.2",
      "claim": "Step 6.1 gives, for every $x$ and every open $U \\ni x$, an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$, which is condition (b) of [L4] for the space $X$; hence $X$ is regular, which is claim 3. [step 6.1, L4]",
      "step": "7.2",
      "inputs": [
        "6.1",
        "L4"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "Steps 6.1, 7.1 and 7.2 are claims 1, 2 and 3, so the lemma is proved. [step 6.1, step 7.1, step 7.2] ∎",
      "step": "8.1",
      "inputs": [
        "6.1",
        "7.1",
        "7.2"
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
      "evidence": "steps 1.1 and 3.1 instantiate witnesses only for the fixed point and fixed neighbourhood"
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
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-locally-compact-space",
    "declared_target": "def-locally-compact-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-compact-space",
    "declared_target": "def-compact-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-closed-subspace-of-a-compact-space-is-compact",
    "declared_target": "thm-closed-subspace-of-a-compact-space-is-compact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-compact-subset-of-a-hausdorff-space-is-closed",
    "declared_target": "thm-compact-subset-of-a-hausdorff-space-is-closed",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "declared_target": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "lem-regularity-via-closed-neighbourhoods",
    "declared_target": "lem-regularity-via-closed-neighbourhoods",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
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
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
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
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
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
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-subspace-closure-and-interior",
    "declared_target": "thm-subspace-closure-and-interior",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-interior-closure-boundary-top",
    "declared_target": "def-interior-closure-boundary-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-neighbourhood-top",
    "declared_target": "def-neighbourhood-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
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
    "source": "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure",
    "sourcePage": "hausdorff-via-the-diagonal",
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

### `def-compact-space`

````markdown
---
id: def-compact-space
kind: definition
title: "Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-subspace-topology-top, def-standard-topologies, def-countable, def-metric-compactness]
justified_by: []
aliases: [def-compact-topological-space, def-open-cover-top]
landmark: true
short: "open cover, compact space"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Section 5.12: Quasi-compact spaces and maps"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

## Remarks

**Why open covers rather than covers by arbitrary sets.** Nothing in the
definition would break if $\mathcal{U}$ were allowed to consist of arbitrary
subsets of $X$, but the resulting notion would be uninteresting: every space is
covered by its singletons, and only a finite space would survive. Openness of the
members is what makes the condition a genuine restriction, and it is what
[[lem-compactness-of-a-subspace-is-ambient]] has to keep track of when the
ambient space changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the space
$(A, \mathcal{T}_A)$", whose members are open subsets of $A$. Which of the two is
meant is written out everywhere on this page.
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

### `def-interior-closure-boundary-top`

````markdown
---
id: def-interior-closure-boundary-top
kind: definition
title: "Interior, closure, boundary, exterior, derived set and isolated point in a topological space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top]
justified_by: []
aliases: [def-closure-top, def-interior-top, def-boundary-top, def-derived-set-top]
landmark: true
short: "interior, closure, boundary, derived set"
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
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $x \in X$. Neighbourhoods are as in
[[def-neighbourhood-top]], so a neighbourhood need not be open.

- The **interior** of $A$ is
  $\operatorname{int}(A) := \bigcup \{\, U \in \mathcal{T} : U \subseteq A \,\}$.
- The **closure** of $A$ is
  $\overline{A} := \bigcap \{\, F \subseteq X : F \text{ closed and } A \subseteq F \,\}$.
- The **exterior** of $A$ is $\operatorname{ext}(A) := \operatorname{int}(X \setminus A)$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$
  of $x$ satisfies $N \cap (A \setminus \{x\}) \ne \varnothing$. The set of limit
  points of $A$ is the **derived set** $A'$.
- $x$ is an **isolated point of $A$** if $x \in A$ and some neighbourhood $N$ of
  $x$ satisfies $N \cap A = \{x\}$.

**Both operators are well posed, and the two names are justified rather than
asserted.** The interior is a union of open sets, hence open by (T2), it is
contained in $A$, and it contains every open $U \subseteq A$: so
$\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being
intersected in the definition of $\overline{A}$ is nonempty, since $X$ is closed
and contains $A$, so the intersection is a set; it is closed by (C2) of
[[def-topological-space]], it contains $A$, and it is contained in every closed
$F \supseteq A$: so $\overline{A}$ is *the smallest closed superset of $A$*. In
particular

$$\operatorname{int}(A) \subseteq A \subseteq \overline{A},$$

and $A$ is open if and only if $A = \operatorname{int}(A)$, and closed if and
only if $A = \overline{A}$, in each case because one inclusion is automatic and
the other says exactly that $A$ belongs to the family in question.

**Interior and closure are exchanged by complementation.** For every
$A \subseteq X$,

$$X \setminus \operatorname{int}(A) = \overline{X \setminus A}, \qquad X \setminus \overline{A} = \operatorname{int}(X \setminus A) = \operatorname{ext}(A).$$

Indeed $U \mapsto X \setminus U$ is a bijection between the open subsets of $A$
and the closed supersets of $X \setminus A$, and it turns unions into
intersections ([[def-topological-space]]); applying complementation to the first
identity gives the second. So $\operatorname{ext}(A) = X \setminus \overline{A}$,
and every statement about interiors has a mirror statement about closures.

**The pointwise description of the interior.** $x \in \operatorname{int}(A)$ if
and only if $A$ is a neighbourhood of $x$. If $x \in \operatorname{int}(A)$ then
$\operatorname{int}(A)$ is an open set with $x \in \operatorname{int}(A) \subseteq A$;
conversely a neighbourhood relation $x \in U \subseteq A$ with $U$ open puts $x$
in the union defining $\operatorname{int}(A)$. The corresponding description of
the closure is proved as the next item, because it is the statement that does the
work in every later proof.

**$X$ is the disjoint union of the three regions.** Since
$\operatorname{int}(A) \subseteq \overline{A}$, the three sets
$\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$
and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint and
their union is $X$. This is recorded again, with the identities for interior and
closure of unions and intersections, in the lemma two items below.

## Remarks

- **The boundary is symmetric in $A$ and its complement**:
  $\partial A = \overline{A} \cap \overline{X \setminus A}$, because
  $\overline{A} \setminus \operatorname{int}(A) = \overline{A} \cap (X \setminus \operatorname{int}(A)) = \overline{A} \cap \overline{X \setminus A}$
  by the complementation identity above. Hence $\partial A = \partial(X \setminus A)$,
  and $\partial A$ is closed, being an intersection of two closed sets.

- **A limit point of $A$ need not lie in $A$, and a point of $A$ need not be a
  limit point of $A$.** The points of $A$ that are not limit points of $A$ are
  exactly its isolated points, directly from the two definitions. The relation
  $\overline{A} = A \cup A'$ is a theorem, proved next, not a restatement.

- **These are the metric notions when the topology is a metric topology.** For a
  metric space the definitions of [[def-metric-interior-closure-boundary]] are
  stated with balls in place of neighbourhoods, and the balls around $x$ are a
  neighbourhood base at $x$; the identification is carried out where metrizable
  spaces are defined, later on this page, and it is what allows metric examples
  to be quoted here without reproof.
````

### `def-locally-compact-space`

````markdown
---
id: def-locally-compact-space
kind: definition
title: "Locally compact topological space: every point has a compact neighbourhood; and what this says in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, def-neighbourhood-top, def-topological-space, def-subspace-topology-top, def-metrizable-space, def-metric-topology, def-metric-ball, def-metric-bounded-diameter, thm-compactness-agrees-with-metric-compactness, cor-heine-borel-in-the-product-topology, lem-metrics-on-rn]
justified_by: []
aliases: [def-locally-compact]
landmark: true
short: "locally compact space"
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
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 08ZQ"
      url: "https://stacks.math.columbia.edu/tag/08ZQ"
    - title: "I. Khatchatourian, Compactifications (MAT327 notes)"
      url: "https://www.math.toronto.edu/ivan/mat327/docs/notes/19-compactifications.pdf"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **locally
compact** when

> every point of $X$ has a compact neighbourhood:

that is, for every $x \in X$ there is a neighbourhood $N$ of $x$
([[def-neighbourhood-top]]) that is a compact subset of $X$
([[def-compact-space]], [[def-subspace-topology-top]]).

**A neighbourhood need not be open here**, and that is what makes the condition
the weak one it is meant to be: $N$ is required only to contain some open set
containing $x$. Writing "compact **open** neighbourhood" instead would define a
strictly stronger property, satisfied by no space in which a point has no compact
open neighbourhood, $\mathbb{R}$ among them; and requiring the compact set merely
to *contain* $x$ would define a property so weak that every space with a
singleton has it, singletons being compact.

**Every compact space is locally compact**, since $X$ itself is a neighbourhood
of each of its points and is a compact subset of itself. The converse fails, and
$\mathbb{R}^n$ is the standard witness.

**What the condition says in a metric space.** Let $(X,d)$ be a metric space
carrying its metric topology ([[def-metric-topology]], [[def-metrizable-space]]),
with balls as in [[def-metric-ball]], and let $x \in X$. Then

> $x$ has a compact neighbourhood **if and only if** there are a real $r > 0$ and
> a compact $K \subseteq X$ with $B(x,r) \subseteq K$.

*Both directions are immediate and are discharged here.* If $N$ is a compact
neighbourhood of $x$, fix an open $U$ with $x \in U \subseteq N$; by
[[def-metric-topology]] there is $r > 0$ with $B(x,r) \subseteq U \subseteq N$, so
$K := N$ serves. Conversely, if $B(x,r) \subseteq K$ with $K$ compact, then $K$
contains the open set $B(x,r)$, which contains $x$, so $K$ is a neighbourhood of
$x$ and is compact. Compactness of a subset of $(X,d)$ means the same thing read
metrically and read topologically
([[thm-compactness-agrees-with-metric-compactness]]), so the criterion may be
applied with either development's theorems.

**$\mathbb{R}^n$ is locally compact for every $n \ge 1$.** Give $\mathbb{R}^n$
the product topology, which is the metric topology of the Euclidean metric $d_2$
([[lem-metrics-on-rn]], [[cor-heine-borel-in-the-product-topology]]). For
$p \in \mathbb{R}^n$ the set

$$Q_p \;:=\; \{\, x \in \mathbb{R}^n : d_2(x,p) \le 1 \,\}$$

is closed, being the complement of the union of the open balls $B(y, d_2(y,p) - 1)$
over the points $y$ with $d_2(y,p) > 1$, and it is bounded
([[def-metric-bounded-diameter]]), lying inside $B(p, 2)$; so $Q_p$ is compact by
[[cor-heine-borel-in-the-product-topology]]. It contains the open ball $B(p,1)$,
which contains $p$, so it is a compact neighbourhood of $p$. The space
$\mathbb{R}^n$ is not compact, so local compactness is strictly weaker than
compactness.

## Remarks

**Local compactness is a local condition and compactness is not.** The definition
quantifies over points and asks for something in a neighbourhood of each; nothing
is asserted about covers of the whole space. That is why a locally compact space
may be as large as one likes, and why the two properties separate.

**Where the extra strength is needed.** For an arbitrary space, "every point has
a compact neighbourhood" does not by itself give a *base* of compact
neighbourhoods at each point, nor an open set with compact closure around each
compact set. Both of those do follow once the space is also Hausdorff, and that
is [[thm-locally-compact-hausdorff-basics]]; several authors build the stronger
condition into the definition and then note the agreement in the Hausdorff case.
This library takes the weak definition and proves the strengthening under the
hypothesis that licenses it.

**Local compactness is not hereditary**, unlike metrizability. A subspace of a
locally compact space need not be locally compact, and
[[fs-local-compactness-is-hereditary]] records the failure with a witness; what
does survive is heredity along open and along closed subspaces of a locally
compact **Hausdorff** space ([[thm-locally-compact-hausdorff-basics]]).
````

### `def-neighbourhood-top`

````markdown
---
id: def-neighbourhood-top
kind: definition
title: "Neighbourhood of a point and neighbourhood base, with this library's convention that a neighbourhood need not be open"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: [def-neighbourhood-base-top]
landmark: false
short: "neighbourhood, neighbourhood base"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: bdc41ee3553c62ad7ffa23eb8a9315579cc671c9836708c819eafe237b79eec7
    item_sha256: 4458190d9dd13e026a4be25d56858bc99377b2d4ccf6729c349381630a633343
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "Neighbourhood system (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_system"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$.

A set $N \subseteq X$ is a **neighbourhood of $x$** if there is an open
$U \in \mathcal{T}$ with $x \in U \subseteq N$. The family of all neighbourhoods
of $x$ is written $\mathcal{N}(x)$ and called the **neighbourhood filter** at
$x$. A neighbourhood that is itself open is an **open neighbourhood**.

**Convention, and it is a live fork: in this library a neighbourhood need not be
open.** The competing convention, used by Munkres among others, defines a
neighbourhood of $x$ to be an *open* set containing $x$. Both are in current use;
this library follows the one above and writes "open neighbourhood" in full
whenever openness is wanted, so that no statement here depends on which
convention a reader brings.

A family $\mathcal{B}_x \subseteq \mathcal{N}(x)$ is a **neighbourhood base at
$x$** if every neighbourhood of $x$ contains a member of $\mathcal{B}_x$: for
every $N \in \mathcal{N}(x)$ there is $B \in \mathcal{B}_x$ with $B \subseteq N$.

**Four immediate consequences, established here because they are used
constantly.**

1. *$X$ is a neighbourhood of each of its points*, since $x \in X \subseteq X$
   and $X$ is open by (T1); so $\mathcal{N}(x) \ne \varnothing$ and every point
   has at least one neighbourhood base, namely $\mathcal{N}(x)$ itself.
2. *A superset of a neighbourhood of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N \subseteq M$ with $U$ open then $x \in U \subseteq M$.
3. *The intersection of two neighbourhoods of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N$ and $x \in V \subseteq M$ with $U, V$ open, then
   $U \cap V$ is open by (T3) and $x \in U \cap V \subseteq N \cap M$. By
   iteration the same holds for any intersection of finitely many
   neighbourhoods of $x$.
4. *A set is open exactly when it is a neighbourhood of each of its points.* If
   $U$ is open and $x \in U$ then $x \in U \subseteq U$. Conversely, if $N$ is a
   neighbourhood of each of its points, choose for each $x \in N$ an open $U_x$
   with $x \in U_x \subseteq N$; then $N = \bigcup_{x \in N} U_x$ is open by (T2).
   No choice principle is involved: $U_x$ may be taken to be the union of *all*
   open subsets of $N$ containing $x$, which is determined by $x$ and $N$, and is
   open by (T2).

**Basic sets give neighbourhood bases.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_x := \{\, B \in \mathcal{B} : x \in B \,\}$ is a neighbourhood base
at $x$ consisting of open sets. Each such $B$ is open and contains $x$, hence is
a neighbourhood of $x$; and if $N \in \mathcal{N}(x)$, fix open $U$ with
$x \in U \subseteq N$ and then $B \in \mathcal{B}$ with $x \in B \subseteq U$,
which gives $B \in \mathcal{B}_x$ with $B \subseteq N$. A member of
$\mathcal{B}_x$ is called a **basic neighbourhood** of $x$.

## Remarks

- **The convention costs nothing and buys one thing.** Every statement of the
  form "for every neighbourhood $N$ of $x$ ... " whose predicate is preserved
  when $N$ is enlarged is equivalent to the statement with $N$ restricted to
  open neighbourhoods: every neighbourhood contains an open one, and the
  predicate then passes to the larger set. Eventual-membership and the usual
  local-existence tests have this form; an arbitrary predicate need not. What
  the wider notion buys is that $\mathcal{N}(x)$ is a filter on $X$ in the sense
  of [[def-filter]]: consequence 1 is (F1), consequence 3 is (F3), consequence 2
  is (F4), and (F2) holds because $x \in U \subseteq \varnothing$ is impossible,
  so $\varnothing$ is a neighbourhood of no point. Under the narrower convention
  the family of open sets containing $x$ fails (F4) as soon as some non-open set
  contains an open set around $x$, so the name "neighbourhood filter" would not
  be available.

- **A neighbourhood base is not required to be closed under intersection**, and
  the bases used below usually are not; what is required is only that its members
  be cofinal downwards among neighbourhoods.
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

### `lem-regularity-via-closed-neighbourhoods`

````markdown
---
id: lem-regularity-via-closed-neighbourhoods
kind: lemma
title: "A space is regular if and only if every point has a neighbourhood base of closed neighbourhoods, if and only if $x \\in U$ open gives an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-regular-and-t3-spaces, def-neighbourhood-top,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "regularity by closed neighbourhoods"
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
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]] and neighbourhoods as in
[[def-neighbourhood-top]], so that a neighbourhood need not be open. The
following three conditions are equivalent.

- **(a)** $X$ is regular ([[def-regular-and-t3-spaces]]).
- **(b)** For every $x \in X$ and every open $U$ with $x \in U$ there is an open
  $V$ with
  $$x \in V \subseteq \overline{V} \subseteq U .$$
- **(c)** Every point of $X$ has a neighbourhood base consisting of **closed**
  neighbourhoods: for every $x \in X$ and every neighbourhood $N$ of $x$ there is
  a closed neighbourhood $K$ of $x$ with $K \subseteq N$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a point $x \in X$, an open set $U$ with $x \in U$, a neighbourhood $N$ of $x$, and a closed set $C$ with $x \notin C$.

[A1] $X$ is regular when for every closed $C$ and every $x \notin C$ there are disjoint open $U_0 \ni x$ and $V_0 \supseteq C$ ([[def-regular-and-t3-spaces]]).

[L1] $N$ is a neighbourhood of $x$ exactly when some open $W$ satisfies $x \in W \subseteq N$; a set is open exactly when it is a neighbourhood of each of its points ([[def-neighbourhood-top]]).

[L2] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L3] $\operatorname{int}(K)$ is the largest open subset of $K$, and $x \in \operatorname{int}(K)$ exactly when $K$ is a neighbourhood of $x$ ([[def-interior-closure-boundary-top]]).

[L4] A set is closed exactly when its complement is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume (a) and let $U$ be open with $x \in U$; then $C := X \setminus U$ is closed by [L4] and $x \notin C$, so [A1] gives disjoint open $V \ni x$ and $W \supseteq C$. [A1, L4, assume-hyp]

1.2 Assume (b) and let $N$ be a neighbourhood of $x$; fix an open $U$ with $x \in U \subseteq N$ by [L1], and let $V$ be as in (b), so $x \in V \subseteq \overline{V} \subseteq U \subseteq N$. [L1, assume-hyp]

1.3 Assume (c) and let $C$ be closed with $x \notin C$; then $X \setminus C$ is open by [L4] and contains $x$, hence is a neighbourhood of $x$ by [L1], so (c) gives a closed neighbourhood $K$ of $x$ with $K \subseteq X \setminus C$. [L1, L4, assume-hyp]

2.1 Under step 1.1: $V \subseteq X \setminus W$, since $V$ and $W$ are disjoint, and $X \setminus W$ is closed by [L4], so $\overline{V} \subseteq X \setminus W$ by [L2]; and $X \setminus W \subseteq X \setminus C = U$ because $C \subseteq W$. [step 1.1, L2, L4]

2.2 Under step 1.2: $\overline{V}$ is a closed set containing the open $V \ni x$, so it is a neighbourhood of $x$ by [L1], and it is a closed neighbourhood of $x$ contained in $N$. [step 1.2, L1, L2]

2.3 Under step 1.3: put $V_0 := \operatorname{int}(K)$, which is open and contains $x$ by [L3] since $K$ is a neighbourhood of $x$; and put $W_0 := X \setminus K$, which is open by [L4] since $K$ is closed. [step 1.3, L3, L4]

3.1 Step 2.1 gives $x \in V \subseteq \overline{V} \subseteq U$ with $V$ open, so (a) implies (b). [step 2.1]

3.2 Step 2.2 gives, for every neighbourhood $N$ of $x$, a closed neighbourhood of $x$ inside $N$, so (b) implies (c). [step 2.2]

3.3 Under step 2.3: $V_0 \cap W_0 = \operatorname{int}(K) \cap (X \setminus K) = \varnothing$ because $\operatorname{int}(K) \subseteq K$ by [L3], and $C \subseteq X \setminus K = W_0$ because $K \subseteq X \setminus C$; so $V_0$ and $W_0$ are disjoint open sets containing $x$ and $C$ respectively, and (c) implies (a). [step 2.3, A1, L3]

4.1 By steps 3.1, 3.2 and 3.3 the three conditions (a), (b) and (c) are equivalent. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Clause (b) is the working form.** Every application of regularity below uses it in the shape "shrink an open set around a point so that even its closure stays inside", which is what makes regularity behave like a one-sided version of the normality shrinking lemma proved later on this page.

- **Clause (c) is what makes a clopen basis decisive.** If a space has a basis of clopen sets then the basic sets containing a point are closed neighbourhoods of it and form a neighbourhood base ([[def-neighbourhood-top]]), so (c) holds and the space is regular with no further work. That is exactly the route by which the ordinal spaces later on this page are shown to be regular.

- **No separation hypothesis is used anywhere above.** Points need not be closed, and the lemma is a statement about regularity alone; combining it with $T_1$ is the separate step that produces $T_3$.
````

### `thm-a-compact-hausdorff-space-is-regular-and-normal`

````markdown
---
id: thm-a-compact-hausdorff-space-is-regular-and-normal
kind: theorem
title: "A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-compact-subset-of-a-hausdorff-space-is-closed, def-compact-space,
       thm-closed-subspace-of-a-compact-space-is-compact, def-regular-and-t3-spaces,
       def-normal-and-t4-spaces, def-t0-and-t1-spaces, def-hausdorff-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-topological-space]
justified_by: []
aliases: [thm-compact-hausdorff-is-normal]
landmark: true
short: "compact Hausdorff implies regular and normal"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "A. Hatcher, Topology Notes"
      url: "https://pi.math.cornell.edu/~hatcher/Top/TopNotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact ([[def-compact-space]]) Hausdorff
([[def-hausdorff-space]]) topological space. Then:

1. $X$ is **regular** ([[def-regular-and-t3-spaces]]);
2. $X$ is **normal** ([[def-normal-and-t4-spaces]]);
3. $X$ is $T_1$ ([[def-t0-and-t1-spaces]]), and hence $X$ is $T_3$ and $T_4$.

Following [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]],
*regular* and *normal* name the separation conditions alone and the numerals
$T_3$ and $T_4$ name their conjunctions with $T_1$; claim 3 is what supplies the
$T_1$ half, and it is stated separately for that reason.

**Nothing stronger is claimed.** In particular it is not asserted here that a
compact Hausdorff space is completely regular
([[def-regular-and-t3-spaces]] distinguishes the two conditions), and no
continuous real-valued function is produced anywhere below.

## Facts & Assumptions

**Given:** A compact Hausdorff topological space $X$.

[A1] $X$ is regular when for every closed $C \subseteq X$ and every $x \in X \setminus C$ there are disjoint open $U \ni x$ and $V \supseteq C$; the case $C = \varnothing$ is met by $U = X$ and $V = \varnothing$, and $T_3$ is regular together with $T_1$ ([[def-regular-and-t3-spaces]], [[def-t0-and-t1-spaces]]).

[A2] $X$ is normal when for all disjoint closed $A, B \subseteq X$ there are disjoint open $U \supseteq A$ and $V \supseteq B$; the cases $A = \varnothing$ and $B = \varnothing$ are met by $\varnothing$ together with $X$, and $T_4$ is normal together with $T_1$ ([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]).

[A3] $X$ is a topological space, so a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L1] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

[L2] In a Hausdorff space, a point and a disjoint compact set have disjoint open neighbourhoods, and two disjoint compact sets have disjoint open neighbourhoods ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-hausdorff-space]], [[def-compact-space]]).

[L3] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], claim 2, [[def-t0-and-t1-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $C \subseteq X$ be closed and let $x \in X \setminus C$; since $X$ is compact and $C$ is closed in $X$, the subspace $C$ is compact, and $x$ does not lie in it. [A3, L1]

1.2 Let $A, B \subseteq X$ be closed with $A \cap B = \varnothing$; since $X$ is compact and both are closed in $X$, both subspaces $A$ and $B$ are compact. [A3, L1]

1.3 $X$ is $T_1$, being Hausdorff. [L3]

2.1 By [L2], applied to the point $x$ and the disjoint compact set $C$ of step 1.1, there are disjoint open $U \ni x$ and $V \supseteq C$; as $C$ and $x$ were arbitrary this is exactly the condition of [A1], so $X$ is regular, which is claim 1. [step 1.1, A1, L2]

2.2 By [L2], applied to the two disjoint compact sets $A$ and $B$ of step 1.2, there are disjoint open $U \supseteq A$ and $V \supseteq B$; as $A$ and $B$ were arbitrary this is the condition of [A2], so $X$ is normal, which is claim 2. [step 1.2, A2, L2]

3.1 By step 1.3 the space is $T_1$; with step 2.1 it is regular and $T_1$, hence $T_3$, and with step 2.2 it is normal and $T_1$, hence $T_4$. This is claim 3. [step 1.3, step 2.1, step 2.2, A1, A2]

4.1 Steps 2.1, 2.2 and 3.1 are claims 1, 2 and 3, so a compact Hausdorff space is regular, normal, $T_3$ and $T_4$. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The whole content is that "closed" and "compact" coincide here, in the direction that is needed.** Regularity asks a point to be separated from a closed set and normality asks two closed sets to be separated; compactness of the ambient space converts each closed set into a compact one, and the separation of compact sets in a Hausdorff space is what [[thm-compact-subset-of-a-hausdorff-space-is-closed]] supplies. No new separation argument is run.

- **Why compactness of $X$ is needed and not just of the sets separated.** The hypothesis is used only through [L1], to know that an arbitrary closed subset of $X$ is compact. A Hausdorff space in which the sets to be separated happen to be compact is separated by [L2] alone and needs no hypothesis on the ambient space at all; what compactness of $X$ buys is that *every* closed set is such a set.

- **The degenerate cases are not a gap.** If $C$, $A$ or $B$ is empty the required open sets are named outright in [A1] and [A2], so the argument does not depend on any nonemptiness hidden in the compact-separation clauses.
````

### `thm-closed-subspace-of-a-compact-space-is-compact`

````markdown
---
id: thm-closed-subspace-of-a-compact-space-is-compact
kind: theorem
title: "A closed subspace of a compact space is compact, and a finite union of compact subspaces is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-topological-space, def-subspace-topology-top, lem-finite-choice]
justified_by: []
aliases: [thm-closed-subset-of-a-compact-space-is-compact-top]
landmark: true
short: "closed in compact is compact"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
subspaces as in [[def-subspace-topology-top]] and compactness as in
[[def-compact-space]]. Then:

1. **Closed in compact is compact.** If $(X, \mathcal{T})$ is compact and
   $F \subseteq X$ is closed in $X$, then $F$ is a compact subset of $X$.
2. **Finite unions.** If $n \in \mathbb{N}$ and $K_0, \dots, K_n$ are compact
   subsets of $X$, then $K_0 \cup \dots \cup K_n$ is a compact subset of $X$. The
   union of the empty list is $\varnothing$, which is a compact subset of every
   space.

Claim 1 needs $X$ to be compact and claim 2 does not; no hypothesis of any kind
is placed on $X$ in claim 2. **No choice principle is used**: claim 1 selects
nothing, taking a least index where a selection would be natural, and claim 2
makes finitely many selections through [[lem-finite-choice]], a theorem of ZF.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$.

[L1] $(X, \mathcal{T})$ is compact exactly when every family of open subsets of $X$ with union $X$ has a finite subfamily with union $X$; a subset $A \subseteq X$ is a compact subset when the subspace $(A, \mathcal{T}_A)$ is compact; and a family is finite when it is empty or listable as $\{V_0, \dots, V_n\}$ for some $n \in \mathbb{N}$, repetitions allowed ([[def-compact-space]], [[def-subspace-topology-top]]).

[L2] $A \subseteq X$ is a compact subset of $X$ exactly when for every family $\mathcal{U}$ of open subsets of $X$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1).

[L3] $F \subseteq X$ is closed exactly when $X \setminus F$ is open ([[def-topological-space]]).

[L4] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1, let $(X, \mathcal{T})$ be compact, let $F \subseteq X$ be closed and let $\mathcal{U}$ be a family of open subsets of $X$ with $F \subseteq \bigcup \mathcal{U}$; put $\mathcal{W} := \mathcal{U} \cup \{\, X \setminus F \,\}$, a family of open subsets of $X$ with $\bigcup \mathcal{W} = X$, since every point outside $F$ lies in $X \setminus F$ and every point of $F$ lies in some member of $\mathcal{U}$. [L2, L3, construct]

1.2 For claim 2, let $n \in \mathbb{N}$, let $K_0, \dots, K_n$ be compact subsets of $X$, put $K := K_0 \cup \dots \cup K_n$ and let $\mathcal{U}$ be a family of open subsets of $X$ with $K \subseteq \bigcup \mathcal{U}$; then $K_m \subseteq \bigcup \mathcal{U}$ for every $m \le n$, so by [L2] the set $T_m$ of finite subfamilies of $\mathcal{U}$ whose union contains $K_m$ is nonempty, the empty subfamily belonging to it when $K_m = \varnothing$. [L1, L2, construct]

2.1 If $X = \varnothing$ then $F = \varnothing$ and the second alternative of [L2] holds for $F$; otherwise compactness of $X$ applied to $\mathcal{W}$ gives $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{W}$ with $X = W_0 \cup \dots \cup W_n$. [L1, step 1.1]

2.2 The assignment $m \mapsto T_m$ is a function with domain the natural number $\sigma(n)$ all of whose values are nonempty, so a choice function for its values supplies finite subfamilies $\mathcal{V}_0, \dots, \mathcal{V}_n$ of $\mathcal{U}$ with $K_m \subseteq \bigcup \mathcal{V}_m$ for every $m \le n$. [L4, step 1.2]

3.1 Assume $F \ne \varnothing$, the case $F = \varnothing$ being settled at step 2.1, and fix $x \in F$; then $x \in W_j$ for some $j \le n$, and $x \notin X \setminus F$, so that $W_j \ne X \setminus F$ and hence $W_j \in \mathcal{U}$. Let $j_0$ be the least $j \le n$ with $W_j \in \mathcal{U}$, which exists by the previous sentence, and put $V_j := W_j$ when $W_j \in \mathcal{U}$ and $V_j := W_{j_0}$ otherwise; then $V_0, \dots, V_n \in \mathcal{U}$, and nothing has been selected, $j_0$ being the least admissible index. [step 2.1, construct]

3.2 The family $\mathcal{V} := \mathcal{V}_0 \cup \dots \cup \mathcal{V}_n$ is a subfamily of $\mathcal{U}$; it is finite, a union of finitely many listable families being listed by concatenating their lists; and $K = K_0 \cup \dots \cup K_n \subseteq \bigcup \mathcal{V}$, since each $K_m$ lies inside $\bigcup \mathcal{V}_m \subseteq \bigcup \mathcal{V}$. So $\mathcal{V}$ is empty, in which case $K = \varnothing$, or listable as $\{U_0, \dots, U_p\}$ with $K \subseteq U_0 \cup \dots \cup U_p$; by [L2] the set $K$ is a compact subset of $X$, which is claim 2. [L1, L2, algebra, step 2.2]

4.1 $F \subseteq V_0 \cup \dots \cup V_n$: given $y \in F$ there is $j \le n$ with $y \in W_j$, and $y \in F$ forces $W_j \ne X \setminus F$, hence $W_j \in \mathcal{U}$ and $V_j = W_j \ni y$. Since $V_0, \dots, V_n$ are members of $\mathcal{U}$, [L2] gives that $F$ is a compact subset of $X$, the case $F = \varnothing$ having been settled at step 2.1. [L2, step 2.1, step 3.1]

5.1 Claim 1 is step 4.1 and claim 2 is step 3.2, and the final sentence of claim 2 is the compactness of the empty space, which holds because the empty subfamily of any family covers it. [L1, step 3.2, step 4.1] ∎

## Remarks

**Claim 1 is where the two hypotheses do different work.** Compactness of $X$ supplies a finite subcover of $X$; closedness of $F$ is what makes $X \setminus F$ available as one more open set, so that a cover of $F$ can be enlarged to a cover of $X$ by adding a single member. Neither hypothesis can be dropped: an open subspace of a compact space need not be compact, and without compactness of $X$ there is nothing to thin.

**The converse of claim 1 fails, and that is the subject of the next item.** A compact subset of an arbitrary space need not be closed; it is closed as soon as the ambient space is Hausdorff ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]), and [[fs-a-compact-subset-is-closed-in-every-space]] records the failure without that hypothesis.

**The metric special case is [[lem-closed-subset-of-a-compact-space-is-compact]].** It is stated there for a closed subset of a compact metric space and is not used above; by [[thm-compactness-agrees-with-metric-compactness]] it is claim 1 applied to a metric topology. The general theorem is proved from the general definitions and borrows nothing from the metric development, which is why the metric statement does not appear among its dependencies.
````

### `thm-compact-subset-of-a-hausdorff-space-is-closed`

````markdown
---
id: thm-compact-subset-of-a-hausdorff-space-is-closed
kind: theorem
title: "In a Hausdorff space a point and a disjoint compact set, and two disjoint compact sets, have disjoint open neighbourhoods; hence every compact subset is closed, and in a compact Hausdorff space the compact subsets are exactly the closed ones"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-hausdorff-space, def-topological-space, def-subspace-topology-top, thm-closed-subspace-of-a-compact-space-is-compact, lem-finite-choice]
justified_by: []
aliases: [thm-compact-hausdorff-separation]
landmark: true
short: "compact sets separate in a Hausdorff space"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a Hausdorff topological space
([[def-hausdorff-space]], [[def-topological-space]]), with compact subsets as in
[[def-compact-space]]. Then:

1. **A point and a disjoint compact set are separated.** If $K \subseteq X$ is
   compact and $x \in X \setminus K$, there are $U, V \in \mathcal{T}$ with
   $$x \in U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
2. **Two disjoint compact sets are separated.** If $K, L \subseteq X$ are compact
   and $K \cap L = \varnothing$, there are $U, V \in \mathcal{T}$ with
   $$L \subseteq U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
3. **Compact implies closed.** Every compact subset of $X$ is closed in $X$.
4. **In a compact Hausdorff space the two classes coincide.** If in addition
   $(X, \mathcal{T})$ is compact, then a subset of $X$ is compact if and only if
   it is closed.

**The proof is written choice-free, and that is not a stylistic preference.** The
textbook argument says "for each $y \in K$ choose disjoint open $U_y, V_y$",
which is a selection over an arbitrary index set and therefore an appeal to the
full Axiom of Choice. What is done below instead is to take the family of **all**
open $V$ that admit some open $U \ni x$ disjoint from them — a family cut out by
a formula, with nothing selected — extract a finite subcover from it, and only
then make finitely many selections, which [[lem-finite-choice]] supplies as a
theorem of ZF.

## Facts & Assumptions

**Given:** A Hausdorff topological space $(X, \mathcal{T})$.

[A1] For all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[L1] $\varnothing$ and $X$ are open, an arbitrary union of open sets is open, the intersection of finitely many open sets is open when at least one is taken, and a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L2] A subset $A \subseteq X$ is a compact subset of $X$ exactly when for every family $\mathcal{U}$ of open subsets of $X$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1; [[def-compact-space]], [[def-subspace-topology-top]]).

[L3] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

[L4] A closed subset of a compact space is a compact subset of it ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

## Proof

**Proof technique:** direct.

1.1 For claim 1 fix a compact $K \subseteq X$ and a point $x \in X \setminus K$, and put $\mathcal{V} := \{\, V \in \mathcal{T} : U \cap V = \varnothing \text{ for some } U \in \mathcal{T} \text{ with } x \in U \,\}$, a family cut out by a property of $V$ alone and not by any selection. [construct]

2.1 $K \subseteq \bigcup \mathcal{V}$: given $y \in K$ we have $y \ne x$, since $x \notin K$, so [A1] provides $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$; that $V$ belongs to $\mathcal{V}$ and contains $y$. [A1, step 1.1]

3.1 If $K = \varnothing$ then $U := X$ and $V := \varnothing$ satisfy claim 1; otherwise [L2] applied to the family $\mathcal{V}$ gives $n \in \mathbb{N}$ and $V_0, \dots, V_n \in \mathcal{V}$ with $K \subseteq V_0 \cup \dots \cup V_n$. [L1, L2, step 1.1, step 2.1]

4.1 For each $j \le n$ the set $S_j := \{\, U \in \mathcal{T} : x \in U \text{ and } U \cap V_j = \varnothing \,\}$ is nonempty, because $V_j \in \mathcal{V}$; and $j \mapsto S_j$ is a function with domain the natural number $\sigma(n)$, so a choice function for its values supplies $U_0, \dots, U_n \in \mathcal{T}$ with $x \in U_j$ and $U_j \cap V_j = \varnothing$ for every $j \le n$. [L3, step 3.1]

5.1 Put $U := U_0 \cap \dots \cap U_n$ and $V := V_0 \cup \dots \cup V_n$; both are open by [L1], $x \in U$ because $x \in U_j$ for every $j$, $K \subseteq V$ by step 3.1, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $V_j$ and in $U \subseteq U_j$, contradicting $U_j \cap V_j = \varnothing$. So claim 1 holds. [L1, step 3.1, step 4.1]

6.1 For claim 3 let $K \subseteq X$ be compact and put $G := \bigcup \{\, W \in \mathcal{T} : W \cap K = \varnothing \,\}$, which is open by [L1]. Every member of the union misses $K$, so $G \subseteq X \setminus K$; conversely for $x \in X \setminus K$ claim 1, proved at step 5.1, gives disjoint open $U \ni x$ and $V \supseteq K$, whence $U \cap K = \varnothing$ and $x \in U \subseteq G$. So $G = X \setminus K$ is open, $K$ is closed, and claim 3 holds. [L1, step 5.1]

6.2 For claim 2 let $K, L \subseteq X$ be compact with $K \cap L = \varnothing$, and put $\mathcal{W} := \{\, W \in \mathcal{T} : V \cap W = \varnothing \text{ for some } V \in \mathcal{T} \text{ with } K \subseteq V \,\}$, again cut out by a property. Then $L \subseteq \bigcup \mathcal{W}$: for $y \in L$ we have $y \notin K$, so claim 1, proved at step 5.1, gives disjoint open $U \ni y$ and $V \supseteq K$, and that $U$ lies in $\mathcal{W}$ and contains $y$. [step 5.1, construct]

7.1 If $L = \varnothing$ then $U := \varnothing$ and $V := X$ satisfy claim 2; otherwise [L2] applied to $\mathcal{W}$ gives $m \in \mathbb{N}$ and $W_0, \dots, W_m \in \mathcal{W}$ with $L \subseteq W_0 \cup \dots \cup W_m$. [L1, L2, step 6.2]

8.1 For each $j \le m$ the set $T_j := \{\, V \in \mathcal{T} : K \subseteq V \text{ and } V \cap W_j = \varnothing \,\}$ is nonempty, because $W_j \in \mathcal{W}$; and $j \mapsto T_j$ is a function with domain the natural number $\sigma(m)$, so a choice function for its values supplies $V_0, \dots, V_m \in \mathcal{T}$ with $K \subseteq V_j$ and $V_j \cap W_j = \varnothing$ for every $j \le m$. [L3, step 7.1]

9.1 Put $U := W_0 \cup \dots \cup W_m$ and $V := V_0 \cap \dots \cap V_m$; both are open by [L1], $L \subseteq U$ by step 7.1, $K \subseteq V$ because $K \subseteq V_j$ for every $j$, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $W_j$ and in $V \subseteq V_j$, contradicting $V_j \cap W_j = \varnothing$. So claim 2 holds. [L1, step 7.1, step 8.1]

10.1 For claim 4 assume $(X, \mathcal{T})$ is also compact: a compact subset of $X$ is closed by step 6.1, and a closed subset of $X$ is compact by [L4], so the two classes of subsets coincide; with claims 1, 2 and 3 settled at steps 5.1, 9.1 and 6.1 the theorem is proved. [L4, step 6.1, step 9.1] ∎

## Remarks

**Where each hypothesis is spent.** The Hausdorff condition is used exactly once, at step 2.1, to know that the family $\mathcal{V}$ covers $K$; compactness of $K$ is used exactly once, at step 3.1, to cut that cover down to finitely many members. Claim 2 then reuses claim 1 in the same shape, with the roles of point and compact set played by a point of $L$ and the compact set $K$.

**Why the family is defined and not chosen.** For each $y \in K$ the Hausdorff condition asserts that *some* pair $(U, V)$ exists; it provides no rule for naming one. A proof that writes $U_y$ and $V_y$ has selected a pair for every $y \in K$ at once, and for an arbitrary compact $K$ that is the Axiom of Choice. Collecting instead every $V$ that works for *some* $U$ replaces the selection by a formula, and the only selection left is over the finite index set $\sigma(n)$, where [[lem-finite-choice]] applies.

**Claim 3 fails without the Hausdorff hypothesis**, and [[fs-a-compact-subset-is-closed-in-every-space]] records the failure with a witness. Claim 4 is the converse pairing: closedness is enough for compactness only when the ambient space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]), and compactness is enough for closedness only when it is Hausdorff.
````

### `thm-subspace-closure-and-interior`

````markdown
---
id: thm-subspace-closure-and-interior
kind: theorem
title: "For $A \\subseteq S \\subseteq X$ the closure of $A$ in $S$ is $\\overline{A}^{X} \\cap S$, while the interior only contains $\\operatorname{int}^{X}(A) \\cap S$, with equality when $S$ is open; and a dense subset of $X$ traces to a dense subset of every open $S$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-subspace-topology-top, def-interior-closure-boundary-top, def-dense-top,
       def-standard-topologies, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "closure and interior in a subspace"
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
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$S \subseteq X$ carry the subspace topology $\mathcal{T}_S$
([[def-subspace-topology-top]]) and let $A \subseteq S$. Write $\overline{A}$ and
$\operatorname{int}(A)$ for the closure and the interior of $A$ in $X$, and
$\operatorname{cl}_S(A)$ and $\operatorname{int}_S(A)$ for those taken in the
space $(S, \mathcal{T}_S)$ ([[def-interior-closure-boundary-top]]). Then:

1. **Closure traces exactly.**
   $$\operatorname{cl}_S(A) \;=\; \overline{A} \cap S .$$
2. **Interior traces only one way.** $\operatorname{int}(A) \subseteq S$, so
   $\operatorname{int}(A) \cap S = \operatorname{int}(A)$, and
   $$\operatorname{int}(A) \;\subseteq\; \operatorname{int}_S(A) ,$$
   an inclusion that may be strict.
3. **Equality for an open subspace.** If $S \in \mathcal{T}$ then
   $\operatorname{int}_S(A) = \operatorname{int}(A)$.
4. **Density traces to open subspaces only.** If $D \subseteq X$ is dense in $X$
   ([[def-dense-top]]) and $S \in \mathcal{T}$, then $D \cap S$ is dense in
   $(S, \mathcal{T}_S)$. Without the hypothesis $S \in \mathcal{T}$ this fails.

Both failures are witnessed inside the proof, in Sierpinski space
([[def-standard-topologies]]): the unqualified forms of claims 2 and 3 and of
claim 4 are false, and the counterexamples are two lines each rather than
deferred.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a subset $S \subseteq X$ with its subspace topology $\mathcal{T}_S = \{\, U \cap S : U \in \mathcal{T} \,\}$, and a subset $A \subseteq S$. Also Sierpinski space $E = \{a,b\}$ with $a \ne b$ and $\mathcal{T}_E = \{\varnothing, \{b\}, E\}$.

[A1] $\mathcal{T}_S$ is a topology on $S$, and $C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed $F \subseteq X$ ([[def-subspace-topology-top]]).

[A2] If $S \in \mathcal{T}$ then a subset of $S$ is open in $S$ if and only if it is open in $X$ ([[def-subspace-topology-top]]).

[L1] $\operatorname{int}(A)$ is the largest open subset of $A$ and $\overline{A}$ is the smallest closed superset of $A$; both are taken in whichever space is named ([[def-interior-closure-boundary-top]]).

[L2] $D$ is dense in a space exactly when $D$ meets every nonempty open subset of that space ([[def-dense-top]]).

[L3] In Sierpinski space $E$ the open sets are $\varnothing$, $\{b\}$ and $E$, so the closed sets are $E$, $\{a\}$ and $\varnothing$ ([[def-standard-topologies]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 $\overline{A} \cap S$ is closed in $S$ by [A1], since $\overline{A}$ is closed in $X$, and it contains $A$, since $A \subseteq \overline{A}$ and $A \subseteq S$. [A1, L1]

1.2 $\operatorname{cl}_S(A) = F \cap S$ for some closed $F \subseteq X$, by [A1] applied to the set $\operatorname{cl}_S(A)$, which is closed in $S$; and $A \subseteq \operatorname{cl}_S(A) = F \cap S \subseteq F$. [A1, L1]

1.3 $\operatorname{int}(A)$ is open in $X$ and satisfies $\operatorname{int}(A) \subseteq A \subseteq S$, so $\operatorname{int}(A) = \operatorname{int}(A) \cap S$ is a trace of an open set of $X$ and hence lies in $\mathcal{T}_S$. [given, L1]

1.4 In $E$, put $S_0 := \{a\}$, $A_0 := \{a\}$ and $D_0 := \{b\}$. Then $\operatorname{int}_{S_0}(A_0) = S_0 = \{a\}$, since $S_0$ is open in $S_0$ and $S_0 \subseteq A_0$; and the interior of $A_0$ in $E$ is $\varnothing$, since by [L3] the only open subset of $\{a\}$ in $E$ is $\varnothing$. So the inclusion of claim 2 is strict for this pair. [L1, L3]

1.5 Assume $S \in \mathcal{T}$. Then $\operatorname{int}_S(A)$, being open in $S$, is open in $X$ by [A2], and it is contained in $A$; so $\operatorname{int}_S(A) \subseteq \operatorname{int}(A)$ by [L1]. [A2, L1]

1.6 Assume $S \in \mathcal{T}$ and that $D$ is dense in $X$, and let $W$ be a nonempty open subset of $S$. By [A2] the set $W$ is open in $X$, so $W \cap D \ne \varnothing$ by [L2]; and $W \subseteq S$ gives $W \cap D = W \cap (D \cap S)$. [A2, L2]

2.1 In $E$ with the sets of step 1.4: the closure of $D_0$ in $E$ is $E$, since by [L3] the only closed superset of $\{b\}$ is $E$, so $D_0$ is dense in $E$; and $D_0 \cap S_0 = \varnothing$, which is not dense in the nonempty space $S_0$, because $S_0$ is a nonempty open subset of $S_0$ that $\varnothing$ does not meet. [L1, L2, L3]

2.2 $\operatorname{cl}_S(A) \subseteq \overline{A} \cap S$: by step 1.1 the set $\overline{A} \cap S$ is a closed subset of $S$ containing $A$, and $\operatorname{cl}_S(A)$ is the smallest such. [step 1.1, L1]

2.3 $\overline{A} \cap S \subseteq \operatorname{cl}_S(A)$: with $F$ as in step 1.2 one has $A \subseteq F$ with $F$ closed in $X$, so $\overline{A} \subseteq F$ by [L1], whence $\overline{A} \cap S \subseteq F \cap S = \operatorname{cl}_S(A)$. [step 1.2, L1]

2.4 $\operatorname{int}(A) \subseteq \operatorname{int}_S(A)$: by step 1.3 the set $\operatorname{int}(A)$ is open in $S$ and contained in $A$, and $\operatorname{int}_S(A)$ is the largest such. [step 1.3, L1]

3.1 Steps 2.2 and 2.3 give $\operatorname{cl}_S(A) = \overline{A} \cap S$, which is claim 1. [step 2.2, step 2.3]

3.2 Step 1.3 gives $\operatorname{int}(A) \cap S = \operatorname{int}(A)$, step 2.4 gives the inclusion, and step 1.4 exhibits a case where the inclusion is strict; this is claim 2. [step 1.3, step 2.4, step 1.4]

3.3 Steps 2.4 and 1.5 give $\operatorname{int}_S(A) = \operatorname{int}(A)$ when $S \in \mathcal{T}$, which is claim 3. [step 2.4, step 1.5]

4.1 By step 1.6 the set $D \cap S$ meets every nonempty open subset of $S$, hence is dense in $(S,\mathcal{T}_S)$ by [L2]; and step 2.1 shows that the conclusion fails for a subspace that is not open. This is claim 4, and with steps 3.1, 3.2 and 3.3 all four claims are proved. [step 1.6, step 2.1, step 3.1, step 3.2, step 3.3, L2] ∎

## Remarks

- **The same two failures occur in $\mathbb{R}$, and there they are the familiar ones.** With the usual topology, $S = [0,1]$ and $A = [0,1]$ give $\operatorname{int}_S(A) = [0,1]$ while $\operatorname{int}(A) = (0,1)$; and $\mathbb{Q}$ is dense in $\mathbb{R}$ while its trace on the subspace of irrationals is empty, so a dense set need not trace to a dense set of a subspace that is not open. Sierpinski space is used in the proof only because it needs no real-number machinery.

- **Why closure behaves better than interior.** Claim 1 holds for every $S$, with no hypothesis, because the closed sets of a subspace are exactly the traces of the closed sets and tracing preserves the "smallest superset" that defines a closure. The interior is a *largest subset*, and tracing does not preserve that: a set can be open in $S$ without being the trace of any open set of $X$ that is contained in $A$, which is exactly what step 1.4 exhibits.

- **Claim 4 is what makes "has a countable dense subset" behave the way it does.** The property passes to open subspaces by claim 4, and it does not pass to arbitrary subspaces; the witness for the failure is worked on the companion page, where an uncountable discrete subspace is exhibited inside a space with a countable dense subset.
````

