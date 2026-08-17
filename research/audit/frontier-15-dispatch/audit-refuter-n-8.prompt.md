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
label: n-8

run: frontier-15
role: refuter
label: n-8
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

## ITEM: fs-subgroups-of-equal-p-power-order-are-conjugate

```markdown
---
id: fs-subgroups-of-equal-p-power-order-are-conjugate
kind: false-statement
title: "False statement: all subgroups of the same $p$-power order are conjugate"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-second-theorem, def-finite-symmetric-group-and-permutation-notation, thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]
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

**False claim:** all subgroups of the same $p$-power order are conjugate. See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ (def-natural-numbers). The symmetric group on $n$ letters is $$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$ the group of all bijections of $n$ under composition (def-symmetric-group), with the composition convention. ([[def-finite-symmetric-group-and-permutation-notation]]).

[L3] For $\sigma,\tau\in S_n$, there is a $g\in S_n$ with $\tau=g\sigma g^{-1}$ if and only if $\sigma$ and $\tau$ have the same cycle type, including their numbers of fixed points. ([[thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]]).

## Refutation

**Proof technique:** direct.

1.1 In $S_4$, the order-two subgroups generated by $(12)$ and $(12)(34)$ cannot be conjugate because their nonidentity generators have different cycle types. [L1, L2, L3, given, algebra]

2.1 Contrast this with Sylow II, which concerns only subgroups of maximal $p$-power order. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for fs-subgroups-of-equal-p-power-order-are-conjugate

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
   "source": "def-finite-symmetric-group-and-permutation-notation",
   "source_section": "Definition",
   "quote": "Let $n\\in\\mathbb N$, so that $n=\\{0,1,\\dots,n-1\\}$ ([[def-natural-numbers]]). The\n**symmetric group on $n$ letters** is\n\n$$S_n:=\\operatorname{Sym}(n)=\\operatorname{Sym}(\\{0,1,\\dots,n-1\\}),$$\n\nthe group of all bijections of $n$ under composition ([[def-symmetric-group]]),\nwith the composition convention\n\n$$(\\sigma\\tau)(i):=(\\sigma\\circ\\tau)(i)=\\sigma(\\tau(i))",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-symmetric-permutations-are-conjugate-iff-same-cycle-type",
   "source_section": "Statement",
   "quote": "For $\\sigma,\\tau\\in S_n$, there is a $g\\in S_n$ with\n$\\tau=g\\sigma g^{-1}$ if and only if $\\sigma$ and $\\tau$ have the same cycle\ntype, including their numbers of fixed points.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "In $S_4$, the order-two subgroups generated by $(12)$ and $(12)(34)$ cannot be conjugate because their nonidentity generators have different cycle types.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Contrast this with Sylow II, which concerns only subgroups of maximal $p$-power order. This proves the stated claim.",
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
   "reason": "False statement: all subgroups of the same $p$-power order are conjugate: the claim “**False claim:** all subgroups of the same $p$-power order are conjugate.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "False statement: all subgroups of the same $p$-power order are conjugate: the claim “**False claim:** all subgroups of the same $p$-power order are conjugate.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "False statement: all subgroups of the same $p$-power order are conjugate: the claim “**False claim:** all subgroups of the same $p$-power order are conjugate.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "False statement: all subgroups of the same $p$-power order are conjugate: the claim “**False claim:** all subgroups of the same $p$-power order are conjugate.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "False statement: all subgroups of the same $p$-power order are conjugate: the claim “**False claim:** all subgroups of the same $p$-power order are conjugate.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "False statement: all subgroups of the same $p$-power order are conjugate: the claim “**False claim:** all subgroups of the same $p$-power order are conjugate.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "False statement: all subgroups of the same $p$-power order are conjugate: the claim “**False claim:** all subgroups of the same $p$-power order are conjugate.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "False statement: all subgroups of the same $p$-power order are conjugate: the claim “**False claim:** all subgroups of the same $p$-power order are conjugate.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: fs-unique-sylow-subgroup-forces-a-direct-product

```markdown
---
id: fs-unique-sylow-subgroup-forces-a-direct-product
kind: false-statement
title: "False statement: one unique Sylow subgroup forces the whole group to be a direct product"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-sylow-subgroup-normal-iff-unique, thm-classification-of-groups-of-order-pq, prop-semidirect-product-is-direct-iff-action-is-trivial]
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

**False claim:** one unique Sylow subgroup forces the whole group to be a direct product. See [[cor-sylow-subgroup-normal-iff-unique]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L2] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L3] The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$. ([[prop-semidirect-product-is-direct-iff-action-is-trivial]]).

## Refutation

**Proof technique:** direct.

1.1 Let $C_2$ act on $C_3$ by inversion. The resulting semidirect product $C_3\rtimes C_2$ has order $6$ and is nonabelian. [L1, L2, L3, given, algebra]

2.1 Its canonical $C_3$ is normal and therefore the unique Sylow $3$-subgroup. If the product were direct, the two factors would commute, contradicting the inversion action. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for fs-unique-sylow-subgroup-forces-a-direct-product

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
   "source": "thm-classification-of-groups-of-order-pq",
   "source_section": "Statement",
   "quote": "Let $p<q$ be primes.\n\n- If $p\\nmid(q-1)$, every group of order $pq$ is cyclic.\n- If $p\\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\\rtimes C_p$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "prop-semidirect-product-is-direct-iff-action-is-trivial",
   "source_section": "Statement",
   "quote": "The canonical factors of $N\\rtimes_\\alpha H$ form an internal direct product if and only if $\\alpha_h=\\operatorname{id}_N$ for every $h\\in H$. In that case $N\\rtimes_\\alpha H$ is the external direct product $N\\times H$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $C_2$ act on $C_3$ by inversion. The resulting semidirect product $C_3\\rtimes C_2$ has order $6$ and is nonabelian.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Its canonical $C_3$ is normal and therefore the unique Sylow $3$-subgroup. If the product were direct, the two factors would commute, contradicting the inversion action. This proves the stated claim.",
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
   "reason": "False statement: one unique Sylow subgroup forces the whole group to be a direct product: the claim “**False claim:** one unique Sylow subgroup forces the whole group to be a direct product.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "False statement: one unique Sylow subgroup forces the whole group to be a direct product: the claim “**False claim:** one unique Sylow subgroup forces the whole group to be a direct product.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "False statement: one unique Sylow subgroup forces the whole group to be a direct product: the claim “**False claim:** one unique Sylow subgroup forces the whole group to be a direct product.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "False statement: one unique Sylow subgroup forces the whole group to be a direct product: the claim “**False claim:** one unique Sylow subgroup forces the whole group to be a direct product.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "False statement: one unique Sylow subgroup forces the whole group to be a direct product: the claim “**False claim:** one unique Sylow subgroup forces the whole group to be a direct product.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "False statement: one unique Sylow subgroup forces the whole group to be a direct product: the claim “**False claim:** one unique Sylow subgroup forces the whole group to be a direct product.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "The false claim is one-way. The iff occurring in cited Facts is checked in the direction used: step 2.1 uses [L1] to turn normality into uniqueness and [L3] to show that a direct product would require the exhibited action to be trivial."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "The false claim has no asserted converse. For the cited direct-product iff, step 2.1 uses its contrapositive correctly: the nontrivial inversion action rules out a direct product."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: fs-finite-nilpotent-and-solvable-groups-coincide

```markdown
---
id: fs-finite-nilpotent-and-solvable-groups-coincide
kind: false-statement
title: "False statement: finite nilpotent groups and finite solvable groups are the same"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-nilpotent-groups-and-finite-p-groups-are-solvable, def-derived-series-solvable-group-and-derived-length, def-finite-symmetric-group-and-permutation-notation, thm-sylow-characterizations-of-finite-nilpotence]
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

**False claim:** finite nilpotent groups and finite solvable groups are the same. See [[cor-nilpotent-groups-and-finite-p-groups-are-solvable]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] Every nilpotent group is solvable. Consequently every finite $p$-group is solvable. ([[cor-nilpotent-groups-and-finite-p-groups-are-solvable]]).

[L2] The derived series of a group $G$ is defined recursively by $$G^{(0)}=G,\qquad G^{(r+1)}=[G^{(r)},G^{(r)}].$$ Each term is characteristic, hence normal, in the preceding term by thm-derived-subgroup-is-characteristic-and-abelianization-is-universal. ([[def-derived-series-solvable-group-and-derived-length]]).

[L3] Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ (def-natural-numbers). The symmetric group on $n$ letters is $$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$ the group of all bijections of $n$ under composition (def-symmetric-group), with the composition convention. ([[def-finite-symmetric-group-and-permutation-notation]]).

[L4] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. ([[thm-sylow-characterizations-of-finite-nilpotence]]).

## Refutation

**Proof technique:** direct.

1.1 The forward implication is published. [L1, L2, L3, L4, given, algebra]

2.1 For the converse, compute $S_3' = A_3$ and $A_3'=1$, while its three Sylow $2$-subgroups are not normal; the Sylow characterization therefore makes $S_3$ solvable but not nilpotent. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for fs-finite-nilpotent-and-solvable-groups-coincide

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "cor-nilpotent-groups-and-finite-p-groups-are-solvable",
   "source_section": "Statement",
   "quote": "Every nilpotent group is solvable. Consequently every finite $p$-group is solvable.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-derived-series-solvable-group-and-derived-length",
   "source_section": "Definition",
   "quote": "The **derived series** of a group $G$ is defined recursively by\n$$G^{(0)}=G,\\qquad G^{(r+1)}=[G^{(r)},G^{(r)}].$$\nEach term is characteristic, hence normal, in the preceding term by [[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]].\n\nThe group $G$ is **solvable** if $G^{(n)}=1$ for some $n\\in\\mathbb N$. Its **derived length** is the",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-finite-symmetric-group-and-permutation-notation",
   "source_section": "Definition",
   "quote": "Let $n\\in\\mathbb N$, so that $n=\\{0,1,\\dots,n-1\\}$ ([[def-natural-numbers]]). The\n**symmetric group on $n$ letters** is\n\n$$S_n:=\\operatorname{Sym}(n)=\\operatorname{Sym}(\\{0,1,\\dots,n-1\\}),$$\n\nthe group of all bijections of $n$ under composition ([[def-symmetric-group]]),\nwith the composition convention\n\n$$(\\sigma\\tau)(i):=(\\sigma\\circ\\tau)(i)=\\sigma(\\tau(i))",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-sylow-characterizations-of-finite-nilpotence",
   "source_section": "Statement",
   "quote": "For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. See [[lem-finite-nilpotence-via-normal-sylow-subgroups]].",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The forward implication is published.",
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
   "claim": "For the converse, compute $S_3' = A_3$ and $A_3'=1$, while its three Sylow $2$-subgroups are not normal; the Sylow characterization therefore makes $S_3$ solvable but not nilpotent. This proves the stated claim.",
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
   "reason": "False statement: finite nilpotent groups and finite solvable groups are the same: the claim “**False claim:** finite nilpotent groups and finite solvable groups are the same.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "False statement: finite nilpotent groups and finite solvable groups are the same: the claim “**False claim:** finite nilpotent groups and finite solvable groups are the same.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "False statement: finite nilpotent groups and finite solvable groups are the same: the claim “**False claim:** finite nilpotent groups and finite solvable groups are the same.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "False statement: finite nilpotent groups and finite solvable groups are the same: the claim “**False claim:** finite nilpotent groups and finite solvable groups are the same.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "False statement: finite nilpotent groups and finite solvable groups are the same: the claim “**False claim:** finite nilpotent groups and finite solvable groups are the same.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "False statement: finite nilpotent groups and finite solvable groups are the same: the claim “**False claim:** finite nilpotent groups and finite solvable groups are the same.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "False statement: finite nilpotent groups and finite solvable groups are the same: the claim “**False claim:** finite nilpotent groups and finite solvable groups are the same.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "False statement: finite nilpotent groups and finite solvable groups are the same: the claim “**False claim:** finite nilpotent groups and finite solvable groups are the same.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
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

## DEPENDENCY: def-finite-symmetric-group-and-permutation-notation

```markdown
title: 'The finite symmetric group $S_n$, one-line notation, and cycle notation'

## Definition
Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ ([[def-natural-numbers]]). The
**symmetric group on $n$ letters** is

$$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$

the group of all bijections of $n$ under composition ([[def-symmetric-group]]),
with the composition convention

$$(\sigma\tau)(i):=(\sigma\circ\tau)(i)=\sigma(\tau(i))\qquad(i\in n),$$

so that in a product the right-hand factor acts first. An element of $S_n$ is
named by either of the two notations below.

**One-line notation.** For $\sigma\in S_n$, its **one-line form** is the list of
its values in order of their arguments,

$$\sigma=[\sigma(0),\sigma(1),\dots,\sigma(n-1)].$$

This list has length $n$ and its entries are $0,1,\dots,n-1$, each occurring
once, because $\sigma$ is a bijection of $n$. Conversely, a list
$[b_0,b_1,\dots,b_{n-1}]$ whose entries are $0,1,\dots,n-1$ each occurring once
is the one-line form of exactly one element of $S_n$, namely the map sending
each $i\in n$ to $b_i$: that map is injective because the entries are distinct,
and surjective because every element of $n$ occurs among them. So one-line
notation is a bijection from $S_n$ to the arrangements of $0,1,\dots,n-1$ in a
list. For $n=0$ the one-line form of the unique element of $S_0$ is the empty
list.

**Cycle notation.** For distinct $a_0,a_1,\dots,a_{k-1}\in n$ with $k\ge2$, the
symbol $(a_0\,a_1\,\cdots\,a_{k-1})$ denotes the element of $S_n$ that sends
$a_i$ to $a_{i+1}$ for each $i<k-1$, sends $a_{k-1}$ to $a_0$, and fixes every
element of $n$ outside $\{a_0,\dots,a_{k-1}\}$ ([[def-symmetric-group]]); it is
called a **$k$-cycle**, and a $2$-cycle is a **transposition**. Writing cycle
symbols side by side means composing them, so $(a\,b)(c\,d)$ is
$(a\,b)\circ(c\,d)$, and the empty juxtaposition of cycle symbols is the
identity $\operatorname{id}$.

Unlike one-line notation, cycle notation does not name each permutation once:
the symbol may be started at any of its entries, so

$$(a_0\,a_1\,\cdots\,a_{k-1})=(a_1\,\cdots\,a_{k-1}\,a_0)$$

and each $k$-cycle is written by exactly $k$ symbols of this shape. A cycle
symbol also does not record $n$, which must be supplied by the context.
```

## DEPENDENCY: thm-symmetric-permutations-are-conjugate-iff-same-cycle-type

```markdown
title: 'Two elements of $S_n$ are conjugate if and only if they have the same cycle type'

## Statement
For $\sigma,\tau\in S_n$, there is a $g\in S_n$ with
$\tau=g\sigma g^{-1}$ if and only if $\sigma$ and $\tau$ have the same cycle
type, including their numbers of fixed points.
```

## DEPENDENCY: cor-sylow-subgroup-normal-iff-unique

```markdown
title: "A Sylow $p$-subgroup is normal if and only if it is unique"

## Statement
A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].
```

## DEPENDENCY: thm-classification-of-groups-of-order-pq

```markdown
title: "Classification of groups of order $pq$ for primes $p<q$"

## Statement
Let $p<q$ be primes.

- If $p\nmid(q-1)$, every group of order $pq$ is cyclic.
- If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$.
```

## DEPENDENCY: prop-semidirect-product-is-direct-iff-action-is-trivial

```markdown
title: "The canonical semidirect decomposition is an internal direct product if and only if the defining action is trivial"

## Statement
The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$.
```

## DEPENDENCY: cor-nilpotent-groups-and-finite-p-groups-are-solvable

```markdown
title: "Nilpotent groups, and in particular finite $p$-groups, are solvable"

## Statement
Every nilpotent group is solvable. Consequently every finite $p$-group is solvable.
```

## DEPENDENCY: def-derived-series-solvable-group-and-derived-length

```markdown
title: "The derived series, solvable groups, and derived length"

## Definition
The **derived series** of a group $G$ is defined recursively by
$$G^{(0)}=G,\qquad G^{(r+1)}=[G^{(r)},G^{(r)}].$$
Each term is characteristic, hence normal, in the preceding term by [[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]].

The group $G$ is **solvable** if $G^{(n)}=1$ for some $n\in\mathbb N$. Its **derived length** is the least such $n$. This least index exists because the set of terminating indices is a nonempty subset of $\mathbb N$ and every such subset has a least element ([[thm-well-ordering-principle]]). Thus the trivial group has derived length $0$, and a nontrivial abelian group has derived length $1$.
```

## DEPENDENCY: thm-sylow-characterizations-of-finite-nilpotence

```markdown
title: "Sylow and maximal-subgroup characterizations of finite nilpotence"

## Statement
For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. See [[lem-finite-nilpotence-via-normal-sylow-subgroups]].
```
