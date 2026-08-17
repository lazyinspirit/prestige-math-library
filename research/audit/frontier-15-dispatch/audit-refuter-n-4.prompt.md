# Proof-refuter brief — run `frontier-15`

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened
> 2026-08-11).** Shell, edit, web-search and git alike, and it binds a compound
> command as a whole — no segment of an `&&` chain may raise one. Web search is
> part of your job and you never ask before searching. If an indispensable
> operation has no escalation-free form, **record a blocker in your report** —
> that is the escape hatch, never a prompt.

You are a **read-only proof-refuter**, GPT 5.6 Sol. Your process is
`--sandbox read-only`: you *cannot* write, and that is deliberate. **You never
write content and never apply a fix.** Alpha adjudicates every finding from disk.
Your job is evidence, not a verdict.

Your assignment is in the "This dispatch" section appended below.

## Your standard is the step-7 judges' standard

You are held to the same skeptical, adversarial standard as the paired DeepSeek
V4 Pro and GPT 5.6 Terra judges. Report **only**:

- a concrete **false claim** — the Statement, a witness, or a computed value is
  actually wrong, and you can say why;
- an **unlicensed inference** — a step that does not follow from the facts,
  hypotheses and earlier steps it cites;
- a **missing hypothesis** — characteristic, ordering, nonnegativity,
  nonemptiness, smallness, local smallness, completeness, a size/class
  distinction, or a choice principle the proof silently uses;
- an **inaccurate citation** — a `[F#]`/`[A#]`/`[L#]` that does not state what the
  cited item states, with a changed domain, quantifier, hypothesis, direction or
  conclusion, or an invented converse.

**Open the cited item on disk before alleging a dependency is too weak.** Every
dependency is a real file at `items/<id>.md`. A restatement inflating a
dependency to carry more weight than it has is a defect; a terse but licensed
routine move is not.

## What is NOT a finding

A gap a competent reader closes in **30 seconds** is nonfatal (owner,
2026-07-31). Say so and move on. Style preferences, alternative proofs you
prefer, "could be deeper", and generality the page deliberately scoped away are
not findings.

An independent reader has already passed over this batch and its findings are
being adjudicated separately. **Do not pad your report with citation-hygiene
nitpicks.** What Alpha needs is the class the reader is most likely to have
missed: a Statement, title, witness or computed value that is actually **false**,
and an inference that cannot be closed at all rather than one whose citation is
merely imprecise. **Rank a real falsehood above a wording defect.**

## Titles and Statements

A **title or Statement asserting more than the proof delivers is fatal.** The
step-7 judges read Statements and cannot see a false title. Check the title
against what was actually proved, every time. Where a Statement carries a
hypothesis the proof's Given silently strengthens — a supplied family over a
proper class where the Statement promises only objectwise existence, a nonzero
space where the Statement says arbitrary — say so concretely.

## Boundary cases are where the defects were

Two contract boundary rows marked `not_applicable` each concealed a
confirmed-fatal defect: a division by zero at `h = 0`, and a counterexample at
`n = 0`. For every item, actively instantiate the **zero object or zero space**,
the **empty family or empty index set**, `n = 0` and `n = 1`, a degenerate
parameter, and both directions of an iff. State what you found.

## Provenance is part of your check

An **`ai-generated` Statement or Construction may never be a dependency target**
— finding one in another item's `deps` is a finding. For an `ai-generated`
statement, witness or refutation anywhere in your assignment, **actively search
for a counterexample** when you have concrete doubt; a plausible repaired proof
is not evidence the Statement is true.

## Your output

You are read-only and cannot write a file. **Put your complete report in your
final message**, structured per finding:

- the item id and exact location (Statement, a numbered step, a `[F#]` fact, the
  Remark, or page prose);
- what is wrong;
- the evidence — quote the dependency text from disk, or give the counterexample;
- your severity call: **fatal** or **nonfatal**.

Fatal findings first. Finish with a plain statement of coverage: which items you
read fully, which you sampled, and anything you could not check.

If you find nothing fatal, say so plainly. "No defect found in these N items,
here is what I checked" is a valuable and expected result — **do not manufacture
a finding to justify the dispatch.**


---

# This dispatch

run: frontier-15
role: audit-refuter
label: n-4

run: frontier-15
role: refuter
label: n-4
# Risk-review refutation — 3 high/critical-tier items
You have **no tools**: every file you need is reproduced below in full.
Do not ask to read anything; if something you need is genuinely absent, say so.

These items were scored high or critical risk by structural triage (many
dependencies, biconditionals, existence/uniqueness/well-definedness claims,
boundary language, induction, quotients). Your job is to attack the specific
risk, not to survey.

For **every** item below, report: is the Statement true as written; does each
numbered step follow from the facts, hypotheses and earlier steps it cites; does
any `[L#]`/`[F#]`/`[A#]` restate its cited item inaccurately (the cited item's
own text is reproduced under DEPENDENCY TEXT — check against it, and if a
dependency's text is not reproduced, say that rather than guessing); is a
hypothesis silently used (characteristic, finiteness, nonzero, coprimality, a
choice principle); does the **title** claim more than the proof delivers.

Actively instantiate the degenerate cases: n = 0, n = 1, the empty family, the
zero module/ring, the trivial group, a degenerate parameter, and BOTH directions
of every iff. Two contract rows marked `not_applicable` each hid a
confirmed-fatal defect on earlier runs.

Rank a genuine falsehood above a wording defect. A gap a competent reader closes
in 30 seconds is nonfatal — say so and move on. Do not manufacture findings:
"no defect in these N items, here is what I checked" is a valuable result.

Structure each finding as: item id | exact location (Statement, step 1.2, [L3],
title, Remark) | what is wrong | the evidence | fatal or nonfatal.

---

# ITEMS UNDER REVIEW

## ITEM: thm-sylow-third-theorem

```markdown
---
id: thm-sylow-third-theorem
kind: theorem
title: "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, thm-sylow-number-as-normalizer-index, thm-p-group-fixed-point-congruence, def-number-of-sylow-p-subgroups, lem-product-with-normal-subgroup]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$ See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$. ([[thm-sylow-number-as-normalizer-index]]).

[L3] If a finite $p$-group $P$ acts on a finite set $X$, then $$|X|\equiv|X^P|\pmod p.$$. ([[thm-p-group-fixed-point-congruence]]).

[L4] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L5] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Let a Sylow subgroup $P$ act by conjugation on the Sylow set. [L1, L2, L3, L4, L5, given, algebra]

2.1 If $P$ fixes $Q$, then $P,Q\le N_G(Q)$, and Sylow II inside that normalizer forces $P=Q$; hence there is exactly one fixed point and the congruence follows. [step 1.1, given, algebra]

3.1 The normalizer-index formula and $P\le N_G(P)$ give $n_p\mid m$. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for thm-sylow-third-theorem

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-second-theorem",
   "source_section": "Statement",
   "quote": "Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-sylow-number-as-normalizer-index",
   "source_section": "Statement",
   "quote": "If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-p-group-fixed-point-congruence",
   "source_section": "Statement",
   "quote": "If a finite $p$-group $P$ acts on a finite set $X$, then\n\n$$|X|\\equiv|X^P|\\pmod p.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-number-of-sylow-p-subgroups",
   "source_section": "Definition",
   "quote": "For a finite group $G$ and a prime $p$, let $\\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is n",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "lem-product-with-normal-subgroup",
   "source_section": "Statement",
   "quote": "If $H\\le G$ and $N\\mathrel{\\trianglelefteq}G$, then $HN$ is a subgroup and $H\\cap N\\mathrel{\\trianglelefteq}H$.\n\nHere $HN:=\\{hn:h\\in H,\\ n\\in N\\}$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let a Sylow subgroup $P$ act by conjugation on the Sylow set.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $P$ fixes $Q$, then $P,Q\\le N_G(Q)$, and Sylow II inside that normalizer forces $P=Q$; hence there is exactly one fixed point and the congruence follows.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The normalizer-index formula and $P\\le N_G(P)$ give $n_p\\mid m$. This proves the stated claim.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "given",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal

```markdown
---
id: cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal
kind: corollary
title: "A normal Sylow subgroup of a normal subgroup is normal in the whole group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-sylow-subgroup-normal-iff-unique, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. See [[cor-sylow-subgroup-normal-iff-unique]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L2] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$. ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

## Proof

**Proof technique:** direct.

1.1 A unique Sylow subgroup is preserved by every automorphism of its ambient normal subgroup, so it is characteristic there; characteristic-in-normal gives normality in the whole group. [L1, L2, given, algebra]

2.1 The preceding argument gives the conclusion under every hypothesis of the Statement. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "lem-characteristic-subgroup-of-a-normal-subgroup-is-normal",
   "source_section": "Statement",
   "quote": "If $K$ is characteristic in $N$ and $N\\trianglelefteq G$, then $K\\trianglelefteq G$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "A unique Sylow subgroup is preserved by every automorphism of its ambient normal subgroup, so it is characteristic there; characteristic-in-normal gives normality in the whole group.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The preceding argument gives the conclusion under every hypothesis of the Statement. This proves the stated claim.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "The Statement is one-way. The only biconditional in the item is [L1], whose forward implication—normal Sylow implies unique Sylow—is exactly what step 1.1 uses before characteristicity."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "The Statement asserts no reverse implication. The reverse half of the iff quoted in [L1] is not used; step 1.1 only needs normality to imply uniqueness."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-distinct-normal-sylow-subgroups-commute

```markdown
---
id: lem-distinct-normal-sylow-subgroups-commute
kind: lemma
title: "Distinct normal Sylow subgroups centralize one another"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sylow-p-subgroup, def-subgroup-commutator-and-lower-central-series, def-normal-subgroup, thm-lagrange]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Normal Sylow subgroups for distinct primes centralize one another. See [[def-sylow-p-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a Sylow $p$-subgroup when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in thm-sylow-first-theorem. ([[def-sylow-p-subgroup]]).

[L2] For subgroups $A,B\le G$, their subgroup commutator is $$[A,B]=\langle [a,b]:a\in A,\ b\in B\rangle,$$ where $[a,b]=aba^{-1}b^{-1}$ (def-commutator-and-commutator-subgroup, def-generated-subgroup). The lower central series is $$\gamma_1(G)=G,\qquad \gamma_{r+1}(G)=[G,\gamma_r(G)]\quad(r\ge1).$$ Each $\gamma_r(G)$ is characteristic in $G$, and the series descends because $[G,N]\le N$ whenever $N\trianglelefteq G$. ([[def-subgroup-commutator-and-lower-central-series]]).

[L3] Let $G$ be a group and let $N\le G$ be a subgroup (def-subgroup). For $g\in G$, write $$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$ The subgroup $N$ is normal in $G$ when $$gNg^{-1}=N\qquad\text{for every }g\in G.$$ In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner conjugation of $G$ maps $N$ onto itself. The connection with equality of the left and right cosets of def-coset is proved in thm-normal-subgroup-characterisations. ([[def-normal-subgroup]]).

[L4] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 For normal Sylow $p$- and $q$-subgroups with $p\ne q$, every commutator lies in their intersection. [L1, L2, L3, L4, given, algebra]

2.1 Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for lem-distinct-normal-sylow-subgroups-commute

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-sylow-p-subgroup",
   "source_section": "Definition",
   "quote": "Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\\in\\mathbb N$ and $p\\nmid m$. A subgroup $P\\le G$ is a **Sylow $p$-subgroup** when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in [[thm-sylow-first-",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-subgroup-commutator-and-lower-central-series",
   "source_section": "Definition",
   "quote": "For subgroups $A,B\\le G$, their **subgroup commutator** is\n$$[A,B]=\\langle [a,b]:a\\in A,\\ b\\in B\\rangle,$$\nwhere $[a,b]=aba^{-1}b^{-1}$ ([[def-commutator-and-commutator-subgroup]], [[def-generated-subgroup]]).\n\nThe **lower central series** is\n$$\\gamma_1(G)=G,\\qquad \\gamma_{r+1}(G)=[G,\\gamma_r(G)]\\quad(r\\ge1).$$\nEach $\\gamma_r(G)$ is characteristic in $G$, an",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-normal-subgroup",
   "source_section": "Definition",
   "quote": "Let $G$ be a group and let $N\\le G$ be a subgroup ([[def-subgroup]]). For\n$g\\in G$, write\n\n$$gNg^{-1}:=\\{gng^{-1}:n\\in N\\}.$$\n\nThe subgroup $N$ is **normal in $G$** when\n\n$$gNg^{-1}=N\\qquad\\text{for every }g\\in G.$$\n\nIn that case write $N\\mathrel{\\trianglelefteq}G$. Equivalently, every inner\nconjugation of $G$ maps $N$ onto itself. The connection with equali",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-lagrange",
   "source_section": "Statement",
   "quote": "Let $G$ be a finite group and $H\\le G$. Then\n\n$$|G|=[G:H]\\,|H|.$$\n\nConsequently, under the canonical embedding $\\iota:\\mathbb N\\to\\mathbb Z$,\n$\\iota(|H|)$ divides $\\iota(|G|)$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For normal Sylow $p$- and $q$-subgroups with $p\\ne q$, every commutator lies in their intersection.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Distinct normal Sylow subgroups centralize one another: the zero or trivial specialization for “Normal Sylow subgroups for distinct primes centralize one another.” is resolved in step 2.1: “Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Distinct normal Sylow subgroups centralize one another: the collapsed or coincident-input case admitted by the hypotheses for “Normal Sylow subgroups for distinct primes centralize one another.” is resolved in step 2.1: “Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-sylow-second-theorem

```markdown
title: "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class"

## Statement
Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].
```

## DEPENDENCY: thm-sylow-number-as-normalizer-index

```markdown
title: "Sylow III*: $n_p(G)=[G:N_G(P)]$"

## Statement
If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$ See [[thm-sylow-second-theorem]].
```

## DEPENDENCY: thm-p-group-fixed-point-congruence

```markdown
title: 'If a finite $p$-group $P$ acts on a finite set $X$, then $|X|\equiv|X^P|\pmod p$'

## Statement
If a finite $p$-group $P$ acts on a finite set $X$, then

$$|X|\equiv|X^P|\pmod p.$$
```

## DEPENDENCY: def-number-of-sylow-p-subgroups

```markdown
title: "The number $n_p(G)$ of Sylow $p$-subgroups"

## Definition
For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is nonzero.
```

## DEPENDENCY: lem-product-with-normal-subgroup

```markdown
title: 'If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$'

## Statement
If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$.

Here $HN:=\{hn:h\in H,\ n\in N\}$.
```

## DEPENDENCY: cor-sylow-subgroup-normal-iff-unique

```markdown
title: "A Sylow $p$-subgroup is normal if and only if it is unique"

## Statement
A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].
```

## DEPENDENCY: lem-characteristic-subgroup-of-a-normal-subgroup-is-normal

```markdown
title: "If $K$ is characteristic in $N$ and $N$ is normal in $G$, then $K$ is normal in $G$"

## Statement
If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$.
```

## DEPENDENCY: def-sylow-p-subgroup

```markdown
title: "Sylow $p$-subgroups of a finite group"

## Definition
Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a **Sylow $p$-subgroup** when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in [[thm-sylow-first-theorem]].
```

## DEPENDENCY: def-subgroup-commutator-and-lower-central-series

```markdown
title: "Subgroup commutators and the lower central series"

## Definition
For subgroups $A,B\le G$, their **subgroup commutator** is
$$[A,B]=\langle [a,b]:a\in A,\ b\in B\rangle,$$
where $[a,b]=aba^{-1}b^{-1}$ ([[def-commutator-and-commutator-subgroup]], [[def-generated-subgroup]]).

The **lower central series** is
$$\gamma_1(G)=G,\qquad \gamma_{r+1}(G)=[G,\gamma_r(G)]\quad(r\ge1).$$
Each $\gamma_r(G)$ is characteristic in $G$, and the series descends because $[G,N]\le N$ whenever $N\trianglelefteq G$.
```

## DEPENDENCY: def-normal-subgroup

```markdown
title: "Normal subgroup: invariance under conjugation"

## Definition
Let $G$ be a group and let $N\le G$ be a subgroup ([[def-subgroup]]). For
$g\in G$, write

$$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$

The subgroup $N$ is **normal in $G$** when

$$gNg^{-1}=N\qquad\text{for every }g\in G.$$

In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner
conjugation of $G$ maps $N$ onto itself. The connection with equality of the
left and right cosets of [[def-coset]] is proved in
[[thm-normal-subgroup-characterisations]].
```

## DEPENDENCY: thm-lagrange

```markdown
title: "Lagrange's theorem: $|G|=[G:H]|H|$ for every subgroup $H$ of a finite group $G$"

## Statement
Let $G$ be a finite group and $H\le G$. Then

$$|G|=[G:H]\,|H|.$$

Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$,
$\iota(|H|)$ divides $\iota(|G|)$.
```
