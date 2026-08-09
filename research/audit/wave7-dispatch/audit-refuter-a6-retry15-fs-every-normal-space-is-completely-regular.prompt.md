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

- high risk (5): 7 declared dependencies; 7 cited facts

## Target item — `fs-every-normal-space-is-completely-regular`

Normalized current SHA-256: `80d93eaaf270ea9c5127172bed6bea9a00bcbc13e0a386228b54039834ba32f3`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-every-normal-space-is-completely-regular
kind: false-statement
title: "FALSE: Every normal space is completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-urysohns-lemma-closes-the-separation-chain,
       def-normal-and-t4-spaces, def-completely-regular-and-tychonoff-spaces,
       thm-completely-regular-implies-regular, def-regular-and-t3-spaces,
       def-standard-topologies, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "normal does not imply completely regular"
proof_strategy: constructive
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
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

**FALSE.** Every normal space is completely regular.

This is exactly why [[cor-urysohns-lemma-closes-the-separation-chain]] carries
the hypothesis $T_1$: normality alone, without $T_1$, gives no separation
property above itself.

## Facts & Assumptions

**Given:** Sierpinski space $S = \{a,b\}$, $a \ne b$, with topology $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing, \{b\}, S\}$ ([[def-standard-topologies]]).

[L1] The closed sets of $S$ are the complements of $\mathcal{T}_{\mathrm{Sier}}$: $S \setminus \varnothing = S$, $S \setminus \{b\} = \{a\}$, $S \setminus S = \varnothing$; so the closed sets are $\{S, \{a\}, \varnothing\}$ ([[def-standard-topologies]], [[def-topological-space]]).

[L2] $S$ is normal when disjoint closed subsets of $S$ admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[L3] $S$ is regular when a point and a closed set not containing it admit disjoint open neighbourhoods ([[def-regular-and-t3-spaces]]).

[L4] Every completely regular space is regular ([[thm-completely-regular-implies-regular]], [[def-completely-regular-and-tychonoff-spaces]]).

## Refutation

**Proof technique:** constructive.

1.1 Let $S = \{a,b\}$ with $a \ne b$ and $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing,\{b\},S\}$; by [L1] its closed sets are $\{S,\{a\},\varnothing\}$. [given, L1, construct]

2.1 $S$ is normal: let $A, B$ be disjoint closed subsets of $S$. The nonempty closed sets are $\{a\}$ and $S$, and $\{a\} \subseteq S$, so any two nonempty closed sets of $S$ meet at $a$; hence disjointness of $A,B$ forces $A=\varnothing$ or $B=\varnothing$. If $A=\varnothing$, take $U:=\varnothing \supseteq A$ and $V:=S \supseteq B$; if $B=\varnothing$, take $U:=S \supseteq A$ and $V:=\varnothing \supseteq B$. Either way $U,V$ are open and $U \cap V = \varnothing$. [step 1.1, L1, L2, algebra]

2.2 $S$ is not regular: $b \notin \{a\}$, since $a \ne b$, and $\{a\}$ is closed by step 1.1. Every open set containing $a$ equals $S$, since among $\varnothing, \{b\}, S$ only $S$ contains $a$; so any open $V \supseteq \{a\}$ has $V=S$, and any open $U \ni b$ then satisfies $U \cap V = U \cap S = U \ne \varnothing$, since $b \in U$. So no disjoint open $U \ni b$, $V \supseteq \{a\}$ exist, and $S$ is not regular. [step 1.1, L1, L3]

3.1 By [L4], complete regularity implies regularity; by step 2.2, $S$ is not regular, so $S$ is not completely regular. With step 2.1, $S$ is a normal space that is not completely regular, refuting the statement. [step 2.1, step 2.2, L4, discharge-construct] ∎

## Remarks

- **The failure is exactly the missing $T_1$.** Sierpinski space is $T_0$ (the open set $\{b\}$ distinguishes $a$ from $b$) but not $T_1$: the singleton $\{b\}$ is not among the closed sets $\{S,\{a\},\varnothing\}$ of step 1.1, so $b$ has no closed singleton. Consequently [[cor-urysohns-lemma-closes-the-separation-chain]] never claims anything about a normal space that is not $T_1$.

- **Every disjoint closed pair in $S$ is separated for a trivial reason.** Step 2.1 never invokes Urysohn's lemma or any function; normality here has nothing to do with continuous functions, because the only disjoint pairs available involve $\varnothing$.
````

## Wave 7 provenance row for the target

```json
{
  "id": "fs-every-normal-space-is-completely-regular",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space",
    "https://en.wikipedia.org/wiki/Normal_space"
  ],
  "rationale": "Under the library convention normal omits T1; the Sierpinski source explicitly gives a normal space that is not regular or completely regular.",
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
      "source": "def-standard-topologies",
      "source_section": "Definition",
      "quote": "Throughout, a topology is as in [[def-topological-space]], and *finite*,\n*at most countable* and *uncountable* are as in [[def-countable]], so that\n\"countable\" always means \"at most countable\" and every finite set is countable.\nLet $X$ be a set. The six families below are topologies on $X$; that each really\nsatisfies (T1), (T2) and (T3) is discharged in full after the list.\n\n1. **Discrete topology.** $\\mathcal{T}_{\\mathrm{disc}} := \\mathcal{P}(X)$: every\n   subset is open, hence every subset is closed, hence every subset is clopen.\n2. **Indiscrete topology.** $\\mathcal{T}_{\\mathrm{ind}} := \\{\\varnothing, X\\}$.\n   Its closed sets are again $\\varnothing$ and $X$.\n3. **Cofinite topology.**\n   $\\mathcal{T}_{\\mathrm{cof}} := \\{\\varnothing\\} \\cup \\{\\, U \\subseteq X : X \\setminus U \\text{ is finite} \\,\\}$.\n   Its closed sets are $X$ together with the finite subsets of $X$.\n4. **Cocountable topology.**\n   $\\mathcal{T}_{\\mathrm{coc}} := \\{\\varnothing\\} \\cup \\{\\, U \\subseteq X : X \\setminus U \\text{ is at most countable} \\,\\}$.\n   Its closed sets are $X$ together with the at most countable subsets of $X$.\n5. **Particular-point topology.** Fix $p \\in X$ and put\n   $\\mathcal{T}_p := \\{\\varnothing\\} \\cup \\{\\, U \\subseteq X : p \\in U \\,\\}$: the\n   open sets are $\\varnothing$ and the sets containing $p$. Its closed sets are\n   $X$ together with the sets **not** containing $p$.\n6. **Sierpinski topology.** On a two-point set $S = \\{a, b\\}$ with $a \\ne b$,\n   $\\mathcal{T}_{\\mathrm{Sier}} := \\{\\varnothing, \\{b\\}, S\\}$. The pair\n   $(S, \\mathcal{T}_{\\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open\n   point and $a$ its closed point. This is exactly the particular-point topology\n   of item 5 on a two-point set with particular point $b$, listed separately\n   because it is quoted so often.\n\n**Two elementary facts about finite sets are used below, and both are proved\nhere.**\n\n*(i) A subset of a finite set is finite.* Let $F \\approx n$ with $n \\in \\mathbb{N}$\n([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection\n$\\varphi : F \\to n$, and let $B \\subseteq F$. Then $\\varphi$ restricts to a\nbijection of $B$ onto $\\varphi[B] \\subseteq n$\n([[def-injection-surjection-bijection]]). Every element of the von Neumann natural\n$n$ is a natural number strictly smaller than $n$\n([[lem-nat-order-is-membership]]), so $\\varphi[B]$ is a subset of $\\mathbb{N}$\nbounded above by $n$, hence finite by the sharper form of\n[[lem-subset-of-countable]] (\"a subset $S \\subseteq \\mathbb{N}$ is finite if it is\nbounded above\"). Since $\\approx$ is symmetric and transitive, $B$ is finite.\n\n*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is\nany object then $H \\cup \\{g\\}$ is finite: if $g \\in H$ there is nothing to prove,\nand otherwise a bijection $u : H \\to k$ extends to a bijection\n$H \\cup \\{g\\} \\to k \\cup \\{k\\} = \\sigma(k)$ by setting $u(g) := k$, which is\ninjective because $k \\notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a\nfinite set $F$ and argue by induction ([[thm-induction-principle]]) on\n$m \\in \\mathbb{N}$ over the statement \"for every $G$ with $G \\approx m$, the union\n$F \\cup G$ is finite\". At $m = 0$ we have $G = \\varnothing$ and $F \\cup G = F$. At\n$m = \\sigma(j)$, a bijection $\\psi : G \\to \\sigma(j)$ gives $g := \\psi^{-1}(j)$\nand $G' := G \\setminus \\{g\\} \\approx j$ (restrict $\\psi$), so\n$F \\cup G = (F \\cup G') \\cup \\{g\\}$ is finite by the induction hypothesis and the\nprevious sentence.\n\n**Discharge of the topology axioms.**\n\n*Discrete.* Every subset of $X$ lies in $\\mathcal{P}(X)$, so (T1), (T2) and (T3)\nhold with nothing to check.\n\n*Indiscrete.* (T1) is the definition. For (T2), a subfamily of\n$\\{\\varnothing, X\\}$ has union $\\varnothing$ (if it is empty or $\\{\\varnothing\\}$)\nor $X$ (otherwise). For (T3), $\\varnothing \\cap A = \\varnothing$ and\n$X \\cap X = X$.\n\n*Cofinite.* (T1): $\\varnothing$ is listed, and $X \\setminus X = \\varnothing$ is\nfinite. (T2): let $\\mathcal{S} \\subseteq \\mathcal{T}_{\\mathrm{cof}}$. If every\nmember is $\\varnothing$ the union is $\\varnothing$. Otherwise fix\n$U_0 \\in \\mathcal{S}$ with $U_0 \\ne \\varnothing$; then\n$X \\setminus \\bigcup \\mathcal{S} \\subseteq X \\setminus U_0$, which is finite, so\nthe left side is finite by (i). (T3): for nonempty $U, V$ with finite\ncomplements, $X \\setminus (U \\cap V) = (X \\setminus U) \\cup (X \\setminus V)$ is\nfinite by (ii); and if either of $U, V$ is empty so is $U \\cap V$. The closed sets\nare the complements of the open ones, that is $X = X \\setminus \\varnothing$\ntogether with the finite sets.\n\n*Cocountable.* Identical to the cofinite case with \"at most countable\" in place of\n\"finite\": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the\nstatement that a union of two at most countable sets is at most countable, which\nis the two-set instance of [[thm-countable-union-of-countable]] applied to the\nfamily $A_0 := U, A_1 := V, A_k := \\varnothing$ for $k \\ge 2$.\n\n*Particular point.* (T1): $\\varnothing$ is listed and $p \\in X$. (T2): a\nsubfamily whose members are all $\\varnothing$ has union $\\varnothing$; otherwise\nsome member contains $p$, hence so does the union. (T3): if $U$ and $V$ both\ncontain $p$ then so does $U \\cap V$; and if either is $\\varnothing$ then so is the\nintersection.\n\n*Sierpinski.* The special case $X = \\{a,b\\}$, $p = b$ of the previous paragraph:\nthe sets containing $b$ are $\\{b\\}$ and $S$, so\n$\\mathcal{T}_b = \\{\\varnothing, \\{b\\}, S\\} = \\mathcal{T}_{\\mathrm{Sier}}$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-topological-space",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and write $\\mathcal{P}(X)$ for its power set. A **topology** on\n$X$ is a family $\\mathcal{T} \\subseteq \\mathcal{P}(X)$ such that\n\n- **(T1)** $\\varnothing \\in \\mathcal{T}$ and $X \\in \\mathcal{T}$;\n- **(T2)** $\\bigcup \\mathcal{S} \\in \\mathcal{T}$ for every $\\mathcal{S} \\subseteq \\mathcal{T}$;\n- **(T3)** $U \\cap V \\in \\mathcal{T}$ for all $U, V \\in \\mathcal{T}$.\n\nA **topological space** is a pair $(X, \\mathcal{T})$ consisting of a set $X$ and\na topology $\\mathcal{T}$ on it; the elements of $X$ are its **points**. When only\none topology is in play we write $X$ for the pair; when several are, the topology\nis always named.\n\nThe members of $\\mathcal{T}$ are the **open** sets of $(X,\\mathcal{T})$. A subset\n$F \\subseteq X$ is **closed** when its complement $X \\setminus F$ is open, and\n**clopen** when it is both open and closed. By (T1) both $\\varnothing$ and $X$\nare clopen. *Open and closed are not opposites*: a set may be neither, and it may\nbe both, so \"not open\" is never a synonym for \"closed\".\n\n**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets\nbecause that is all that is ever needed: if $n \\ge 1$ and\n$U_1, \\dots, U_n \\in \\mathcal{T}$, then $U_1 \\cap \\dots \\cap U_n \\in \\mathcal{T}$\nfollows by iterating (T3) $n-1$ times. The intersection of the **empty** family\nof subsets of $X$ is $X$, since the condition \"lies in every member of the empty\nfamily\" is vacuous; that case is covered by (T1) rather than by (T3), which is\none of the two reasons $X \\in \\mathcal{T}$ is demanded outright. The other is\nthat (T2) alone gives only $\\bigcup \\varnothing = \\varnothing$.\n\n**The closed sets, and the dual axiomatisation.** Put\n$\\mathcal{C} := \\{\\, X \\setminus U : U \\in \\mathcal{T} \\,\\}$, the family of closed\nsets. Then\n\n- **(C1)** $\\varnothing \\in \\mathcal{C}$ and $X \\in \\mathcal{C}$;\n- **(C2)** $\\bigcap \\mathcal{D} \\in \\mathcal{C}$ for every **nonempty**\n  $\\mathcal{D} \\subseteq \\mathcal{C}$;\n- **(C3)** $C \\cup D \\in \\mathcal{C}$ for all $C, D \\in \\mathcal{C}$.\n\nConversely, if a family $\\mathcal{C} \\subseteq \\mathcal{P}(X)$ satisfies (C1),\n(C2) and (C3), then $\\mathcal{T} := \\{\\, X \\setminus C : C \\in \\mathcal{C} \\,\\}$\nis a topology on $X$ whose closed sets are exactly the members of $\\mathcal{C}$.\nSo a topology may be presented equally well by its open sets or by its closed\nsets, and this library uses whichever is shorter.\n\n*Both directions are one computation, and it is carried out here rather than\nassumed.* The map $U \\mapsto X \\setminus U$ is an involution of\n$\\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities\n\n$$X \\setminus \\bigcup_{i \\in I} A_i = \\bigcap_{i \\in I} (X \\setminus A_i) \\quad (I \\ne \\varnothing), \\qquad X \\setminus \\bigcap_{i \\in I} A_i = \\bigcup_{i \\in I} (X \\setminus A_i) \\quad (I \\ne \\varnothing)$$\n\nterm by term into each other. Given (T1)–(T3): $\\varnothing = X \\setminus X$ and\n$X = X \\setminus \\varnothing$ lie in $\\mathcal{C}$, which is (C1); for nonempty\n$\\mathcal{D} \\subseteq \\mathcal{C}$ the family\n$\\mathcal{S} = \\{\\, X \\setminus C : C \\in \\mathcal{D} \\,\\}$ lies in $\\mathcal{T}$\nand $\\bigcap \\mathcal{D} = X \\setminus \\bigcup \\mathcal{S}$ is closed by (T2),\nwhich is (C2); and $C \\cup D = X \\setminus ((X \\setminus C) \\cap (X \\setminus D))$\nis closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run\nbackwards, the empty-union case $\\bigcup \\varnothing = \\varnothing$ being supplied\nby (C1) rather than by (C2); and $\\{\\, X \\setminus C : C \\in \\mathcal{C} \\,\\}$ has\n$\\mathcal{C}$ as its family of complements because complementation is an\ninvolution.\n\n**Comparison of topologies.** If $\\mathcal{T}_1$ and $\\mathcal{T}_2$ are\ntopologies on the same set $X$ and $\\mathcal{T}_1 \\subseteq \\mathcal{T}_2$, then\n$\\mathcal{T}_1$ is **coarser** than $\\mathcal{T}_2$ and $\\mathcal{T}_2$ is\n**finer** than $\\mathcal{T}_1$; the comparison is **strict** when the inclusion\nis. Inclusion is a partial order on the set of topologies on $X$\n([[def-partial-order]]), and it is not a total one: two topologies on the same\nset may be incomparable.",
      "uses": [
        "1.1",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-normal-and-t4-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **normal** when any two disjoint closed sets can be separated by\n  disjoint open sets: for all closed $A, B \\subseteq X$ with\n  $A \\cap B = \\varnothing$ there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nEither of $A$, $B$ may be empty, and those cases are met by $U = \\varnothing$ or\n$V = \\varnothing$ together with $X$; so the condition hides no nonemptiness\nhypothesis. As with regularity, \"disjoint open sets\" may equivalently be read as\n\"disjoint open neighbourhoods of the two sets\" ([[def-neighbourhood-top]]).\n\n**Normality is the special case of complete normality at a disjoint closed\npair.** Disjoint closed sets are separated in the sense of\n[[def-separated-sets]], since the closure of a closed set is itself; so a space\nin which every *separated* pair can be put into disjoint open sets is in\nparticular normal. That stronger condition is defined later on this page, and the\nimplication is proved there.\n\n**The convention fork, and this library's side of it.** Exactly as for\nregularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.\nMunkres builds it in; Kelley, Willard and Engelking do not. **This library takes\nthe second side**: *normal* names the separation condition alone, $T_4$ names\nnormal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.\nThe reason is again that the two halves are independent, and here the point is\nsharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The\nindiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,\nits only closed sets being $\\varnothing$ and the whole space, and it is not even\n$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on\nthis page, the first as a false statement and both on the companion page.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-regular-and-t3-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **regular** when a point can be separated from a closed set not\n  containing it: for every closed $C \\subseteq X$ and every\n  $x \\in X \\setminus C$ there are $U, V \\in \\mathcal{T}$ with\n  $$x \\in U, \\qquad C \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), regularity reads: $x$ and $C$ have disjoint open\nneighbourhoods. The case $C = \\varnothing$ is allowed and is satisfied by\n$U = X$, $V = \\varnothing$, so no nonemptiness is hidden in the condition.\n\n**The convention fork, and this library's side of it.** Textbooks disagree about\nwhether the word *regular* carries a $T_1$ hypothesis. Munkres builds it in,\ndefining a regular space to be one in which points are closed and the separation\ncondition above holds; Kelley, Willard and Engelking do not, and reserve $T_3$\nfor the conjunction. **This library takes the second side**: *regular* names the\nseparation condition alone, $T_3$ names regular plus $T_1$, and every statement\nthat needs points to be closed writes the $T_1$ hypothesis out. The reason is\nthat the two halves are genuinely independent and each is used alone below: the\nindiscrete topology on a two-point set is regular and not $T_0$\n([[def-standard-topologies]]), and the cofinite topology on an infinite set is\n$T_1$ and not regular, both witnessed on the companion page.\n\n**Regularity alone implies no other separation axiom.** It does not imply $T_0$,\n$T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set\n$X$ the only closed sets are $\\varnothing$ and $X$, so the only pair $(C, x)$ to\nbe separated has $C = \\varnothing$, and $U = X$, $V = \\varnothing$ separates it;\nyet no two distinct points are distinguished by any open set. Conversely $T_1$\ndoes not imply regularity. It is the *conjunction* $T_3$ that sits above\nHausdorff in the hierarchy, and the proof of that is three items below.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-completely-regular-implies-regular",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]). If $X$\nis completely regular ([[def-completely-regular-and-tychonoff-spaces]]) then $X$\nis regular ([[def-regular-and-t3-spaces]]). Consequently every Tychonoff space is\n$T_3$, being completely regular and $T_1$ ([[def-t0-and-t1-spaces]]).\n\nThis page does not prove the converse and does not assert it: a regular space\nthat is not completely regular would need a construction this page does not\ncarry, so whether the implication reverses is left open here.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-completely-regular-and-tychonoff-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$[0,1] \\subseteq \\mathbb{R}$ carry the subspace topology of the usual topology of\n$\\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],\n[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).\n\n- $X$ is **completely regular** when a point can be separated from a closed set\n  not containing it *by a continuous function*: for every closed $C \\subseteq X$\n  and every $x_0 \\in X \\setminus C$ there is a continuous\n  $f : X \\to [0,1]$ ([[def-continuous-map-top]]) with\n  $$f(x_0) = 1 \\qquad \\text{and} \\qquad f(y) = 0 \\ \\text{ for every } y \\in C .$$\n- $X$ is **Tychonoff**, also written **$T_{3\\frac{1}{2}}$** and *completely\n  regular Hausdorff*, when it is completely regular **and** $T_1$\n  ([[def-t0-and-t1-spaces]]).\n\nThe case $C = \\varnothing$ is allowed and is satisfied by the constant function\n$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition\nhides no nonemptiness hypothesis.\n\n**The same condition in the vocabulary of zero sets.** With $f$ as displayed,\n$C \\subseteq Z(f)$ and $x_0 \\in \\operatorname{coz}(f)$\n([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every\nclosed $C$ and every $x_0 \\notin C$ there is a continuous $f$ whose zero set\ncontains $C$ and whose cozero set contains $x_0$. In particular\n$\\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;\nthat alone is weaker than regularity, and the passage from the function to two\n*disjoint* open sets is the next item.\n\n**The values $0$ and $1$ are a normalisation, not a restriction.** If\n$g : X \\to \\mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \\{b\\}$ and\n$a \\ne b$, then the condition above is met by a function built from $g$ by an\naffine change of variable followed by truncation into $[0,1]$; this page never\nneeds that construction, because every function it builds is already normalised.\nThe *direction* of the normalisation is a genuine convention and is fixed here as\n$f(x_0) = 1$ and $f[C] = \\{0\\}$, following the most common usage; some texts\nwrite the reverse, and a reader must check which is meant before quoting a\nformula.\n\n**The convention fork over $T_1$ is the same one as for regularity.** *Completely\nregular* names the function-separation condition alone, and Tychonoff names the\nconjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology\non a two-point set ([[def-standard-topologies]]) is completely regular, its only\nclosed set disjoint from a point being $\\varnothing$, and it is not $T_0$; so the\ntwo halves are independent here as well.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $S = \\{a,b\\}$ with $a \\ne b$ and $\\mathcal{T}_{\\mathrm{Sier}} = \\{\\varnothing,\\{b\\},S\\}$; by [L1] its closed sets are $\\{S,\\{a\\},\\varnothing\\}$. [given, L1, construct]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "construct"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "$S$ is normal: let $A, B$ be disjoint closed subsets of $S$. The nonempty closed sets are $\\{a\\}$ and $S$, and $\\{a\\} \\subseteq S$, so any two nonempty closed sets of $S$ meet at $a$; hence disjointness of $A,B$ forces $A=\\varnothing$ or $B=\\varnothing$. If $A=\\varnothing$, take $U:=\\varnothing \\supseteq A$ and $V:=S \\supseteq B$; if $B=\\varnothing$, take $U:=S \\supseteq A$ and $V:=\\varnothing \\supseteq B$. Either way $U,V$ are open and $U \\cap V = \\varnothing$. [step 1.1, L1, L2, algebra]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1",
        "L2",
        "algebra",
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "$S$ is not regular: $b \\notin \\{a\\}$, since $a \\ne b$, and $\\{a\\}$ is closed by step 1.1. Every open set containing $a$ equals $S$, since among $\\varnothing, \\{b\\}, S$ only $S$ contains $a$; so any open $V \\supseteq \\{a\\}$ has $V=S$, and any open $U \\ni b$ then satisfies $U \\cap V = U \\cap S = U \\ne \\varnothing$, since $b \\in U$. So no disjoint open $U \\ni b$, $V \\supseteq \\{a\\}$ exist, and $S$ is not regular. [step 1.1, L1, L3]",
      "step": "2.2",
      "inputs": [
        "step 1.1",
        "L1",
        "L3",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By [L4], complete regularity implies regularity; by step 2.2, $S$ is not regular, so $S$ is not completely regular. With step 2.1, $S$ is a normal space that is not completely regular, refuting the statement. [step 2.1, step 2.2, L4, discharge-construct] ∎",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 2.2",
        "L4",
        "discharge-construct",
        "2.2",
        "2.1"
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
      "status": "checked",
      "evidence": "statement and step 2.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
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
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "fs-every-normal-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "cor-urysohns-lemma-closes-the-separation-chain",
    "declared_target": "cor-urysohns-lemma-closes-the-separation-chain",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-every-normal-space-is-completely-regular",
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
    "source": "fs-every-normal-space-is-completely-regular",
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
    "source": "fs-every-normal-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-completely-regular-implies-regular",
    "declared_target": "thm-completely-regular-implies-regular",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-every-normal-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
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
    "source": "fs-every-normal-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
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
    "source": "fs-every-normal-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
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

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (7)

### `cor-urysohns-lemma-closes-the-separation-chain`

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

### `thm-completely-regular-implies-regular`

````markdown
---
id: thm-completely-regular-implies-regular
kind: theorem
title: "Every completely regular space is regular, and every Tychonoff space is $T_3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-completely-regular-and-tychonoff-spaces, def-regular-and-t3-spaces,
       def-t0-and-t1-spaces, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interval, def-subspace-topology-top, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "completely regular implies regular"
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
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). If $X$
is completely regular ([[def-completely-regular-and-tychonoff-spaces]]) then $X$
is regular ([[def-regular-and-t3-spaces]]). Consequently every Tychonoff space is
$T_3$, being completely regular and $T_1$ ([[def-t0-and-t1-spaces]]).

This page does not prove the converse and does not assert it: a regular space
that is not completely regular would need a construction this page does not
carry, so whether the implication reverses is left open here.

## Facts & Assumptions

**Given:** A completely regular space $(X,\mathcal{T})$, a closed set $C \subseteq X$ and a point $x_0 \in X \setminus C$.

[A1] Complete regularity supplies a continuous $f : X \to [0,1]$ with $f(x_0) = 1$ and $f(y) = 0$ for every $y \in C$ ([[def-completely-regular-and-tychonoff-spaces]]).

[A2] $X$ is regular when every such pair $(C, x_0)$ admits disjoint open $U \ni x_0$ and $V \supseteq C$ ([[def-regular-and-t3-spaces]]).

[L1] A map into the subspace $[0,1]$ of $\mathbb{R}$ is continuous exactly when it is continuous as a map into $\mathbb{R}$, and the open subsets of $[0,1]$ are the traces on $[0,1]$ of the open subsets of $\mathbb{R}$ ([[def-subspace-topology-top]], [[def-interval]]).

[L2] $f^{-1}[W]$ is open in $X$ for every open $W$ in the target ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L3] The sets $(1/2, \infty)$ and $(-\infty, 1/2)$ are open in the usual topology of $\mathbb{R}$, they are disjoint, and $0 < 1/2 < 1$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $f$ as in [A1], and put $W_1 := (1/2,\infty) \cap [0,1]$ and $W_0 := (-\infty,1/2) \cap [0,1]$, which are open in $[0,1]$ and disjoint by [L1] and [L3]. [A1, L1, L3]

1.2 Put $U := f^{-1}[W_1]$ and $V := f^{-1}[W_0]$; both are open in $X$ by [L2]. [A1, L2]

2.1 $x_0 \in U$, since $f(x_0) = 1 > 1/2$ and $1 \in [0,1]$. [step 1.1, step 1.2, A1, L3]

2.2 $C \subseteq V$, since $f(y) = 0 < 1/2$ and $0 \in [0,1]$ for every $y \in C$. [step 1.1, step 1.2, A1, L3]

2.3 $U \cap V = \varnothing$: a point of both would satisfy $f(x) > 1/2$ and $f(x) < 1/2$, which is impossible by trichotomy of the order of $\mathbb{R}$. [step 1.1, step 1.2, L3]

3.1 By steps 1.2, 2.1, 2.2 and 2.3 the pair $(C, x_0)$ is separated by disjoint open sets, and since $C$ and $x_0$ were arbitrary, $X$ is regular by [A2]. [step 1.2, step 2.1, step 2.2, step 2.3, A2]

4.1 If in addition $X$ is $T_1$ then $X$ is regular and $T_1$, that is $T_3$; so every Tychonoff space is $T_3$. [step 3.1, A2] ∎

## Remarks

- **The threshold $1/2$ is arbitrary.** Any $t$ with $0 < t < 1$ works, and the same two-set construction applied to a function with values in $\mathbb{R}$ rather than $[0,1]$ gives the same conclusion; the normalisation of [[def-completely-regular-and-tychonoff-spaces]] is used only to know that $f(x_0)$ and the values on $C$ lie on opposite sides of the threshold.

- **What the theorem does not give.** It says nothing about separating two closed sets, and complete regularity does not imply normality. In the other direction, a normal $T_1$ space *is* completely regular, but that is Urysohn's lemma and is the one arrow of the classical chain this page cannot reach ([[rem-separation-axiom-conventions]]).
````

