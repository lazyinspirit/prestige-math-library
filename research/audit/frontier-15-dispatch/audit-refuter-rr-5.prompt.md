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
label: rr-5

run: frontier-15
role: refuter
label: rr-5
# Risk-review refutation — 7 high/critical-tier items
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

## ITEM: ex-sylow-subgroups-of-s-four

```markdown
---
id: ex-sylow-subgroups-of-s-four
kind: example
title: "The Sylow subgroups of $S_4$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-number-of-sylow-p-subgroups, thm-sylow-third-theorem, def-finite-symmetric-group-and-permutation-notation, thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]
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

## Example

The group $S_4$ has three Sylow $2$-subgroups, each of order $8$, and four Sylow $3$-subgroups, each generated by a pair of inverse $3$-cycles. See [[def-number-of-sylow-p-subgroups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L2] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L3] Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ (def-natural-numbers). The symmetric group on $n$ letters is $$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$ the group of all bijections of $n$ under composition (def-symmetric-group), with the composition convention. ([[def-finite-symmetric-group-and-permutation-notation]]).

[L4] For $\sigma,\tau\in S_n$, there is a $g\in S_n$ with $\tau=g\sigma g^{-1}$ if and only if $\sigma$ and $\tau$ have the same cycle type, including their numbers of fixed points. ([[thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]]).

## Verification

**Proof technique:** direct.

1.1 Relabel the underlying set as $\{1,2,3,4\}$. Each of its three partitions into two unordered pairs has a stabilizer of order $2^2\cdot2=8$: one may swap within either pair and may swap the two pairs. These three distinct stabilizers are therefore Sylow $2$-subgroups. [L1, L2, L3, L4, given, algebra]

2.1 A subgroup of order $3$ is generated by a $3$-cycle. Choosing its unique fixed point gives four subgroups, because the two cycles on the remaining three letters are inverse generators of the same subgroup. Thus $n_2=3$ and $n_3=4$, consistent with $n_2\mid3$, $n_2\equiv1\pmod2$, $n_3\mid8$, and $n_3\equiv1\pmod3$. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for ex-sylow-subgroups-of-s-four

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-number-of-sylow-p-subgroups",
   "source_section": "Definition",
   "quote": "For a finite group $G$ and a prime $p$, let $\\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is n",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-sylow-third-theorem",
   "source_section": "Statement",
   "quote": "Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$$ See [[thm-sylow-second-theorem]].",
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
   "claim": "Relabel the underlying set as $\\{1,2,3,4\\}$. Each of its three partitions into two unordered pairs has a stabilizer of order $2^2\\cdot2=8$: one may swap within either pair and may swap the two pairs. These three distinct stabilizers are therefore Sylow $2$-subgroups.",
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
   "claim": "A subgroup of order $3$ is generated by a $3$-cycle. Choosing its unique fixed point gives four subgroups, because the two cycles on the remaining three letters are inverse generators of the same subgroup. Thus $n_2=3$ and $n_3=4$, consistent with $n_2\\mid3$, $n_2\\equiv1\\pmod2$, $n_3\\mid8$, and $n_3\\equiv1\\pmod3$. This proves the stated claim.",
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
   "reason": "The Sylow subgroups of $S_4$: the claim “The group $S_4$ has three Sylow $2$-subgroups, each of order $8$, and four Sylow $3$-subgroups, each generated by a pair of inverse $3$-cycles.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $S_4$: the claim “The group $S_4$ has three Sylow $2$-subgroups, each of order $8$, and four Sylow $3$-subgroups, each generated by a pair of inverse $3$-cycles.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $S_4$: the claim “The group $S_4$ has three Sylow $2$-subgroups, each of order $8$, and four Sylow $3$-subgroups, each generated by a pair of inverse $3$-cycles.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $S_4$: the claim “The group $S_4$ has three Sylow $2$-subgroups, each of order $8$, and four Sylow $3$-subgroups, each generated by a pair of inverse $3$-cycles.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "The Sylow subgroups of $S_4$: the initial index and termination or stabilization endpoint for “The group $S_4$ has three Sylow $2$-subgroups, each of order $8$, and four Sylow $3$-subgroups, each generated by a pair of inverse $3$-cycles.” is resolved in step 2.1: “A subgroup of order $3$ is generated by a $3$-cycle. Choosing its unique fixed point gives four subgroups, because the two cycles on the remaining three letters are inverse generators of the same subgroup. Thus $n_2=3$ and $n_3=4$”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $S_4$: the claim “The group $S_4$ has three Sylow $2$-subgroups, each of order $8$, and four Sylow $3$-subgroups, each generated by a pair of inverse $3$-cycles.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $S_4$: the claim “The group $S_4$ has three Sylow $2$-subgroups, each of order $8$, and four Sylow $3$-subgroups, each generated by a pair of inverse $3$-cycles.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $S_4$: the claim “The group $S_4$ has three Sylow $2$-subgroups, each of order $8$, and four Sylow $3$-subgroups, each generated by a pair of inverse $3$-cycles.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-sylow-subgroups-of-a-five

```markdown
---
id: ex-sylow-subgroups-of-a-five
kind: example
title: "The Sylow subgroups of $A_5$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-number-of-sylow-p-subgroups, thm-sylow-third-theorem, def-alternating-group, cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]
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

## Example

The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups. See [[def-number-of-sylow-p-subgroups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L2] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L3] For $n\in\mathbb N$, the alternating group is the kernel of the sign homomorphism, $$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$ Thus $A_n$ consists exactly of the even permutations. The subgroup and normality assertions implicit in the word “group” follow from thm-image-subgroup-and-kernel-normal. ([[def-alternating-group]]).

[L4] The conjugacy classes of $S_n$ are in bijection with the tuples of nonnegative integers $(c_1,\ldots,c_n)$ satisfying $$\sum_{k=1}^n kc_k=n.$$ For $n=0$, the unique empty tuple indexes the identity class of $S_0$. ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]).

## Verification

**Proof technique:** direct.

1.1 There are $\binom53\cdot2=20$ three-cycles, and each order-$3$ subgroup has two nonidentity elements, giving $n_3=10$. There are $4!=24$ five-cycles, and each order-$5$ subgroup has four nonidentity elements, giving $n_5=6$. [L1, L2, L3, L4, given, algebra]

2.1 Each of the five choices of a fixed letter gives the Klein four group of the three double transpositions on the remaining letters. The resulting five groups partition the fifteen double transpositions, so $n_2=5$. The values satisfy $5\mid15$, $10\mid20$, $6\mid12$ and the respective congruences modulo $2$, $3$, and $5$. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for ex-sylow-subgroups-of-a-five

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-number-of-sylow-p-subgroups",
   "source_section": "Definition",
   "quote": "For a finite group $G$ and a prime $p$, let $\\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is n",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-sylow-third-theorem",
   "source_section": "Statement",
   "quote": "Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-alternating-group",
   "source_section": "Definition",
   "quote": "For $n\\in\\mathbb N$, the **alternating group** is the kernel of the sign\nhomomorphism,\n\n$$A_n:=\\ker(\\operatorname{sgn}:S_n\\to\\{+1,-1\\})=\\{\\sigma\\in S_n:\\operatorname{sgn}(\\sigma)=1\\}.$$\n\nThus $A_n$ consists exactly of the even permutations. The subgroup and\nnormality assertions implicit in the word “group” follow from\n[[thm-image-subgroup-and-kernel-normal]]",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types",
   "source_section": "Statement",
   "quote": "The conjugacy classes of $S_n$ are in bijection with the tuples of\nnonnegative integers $(c_1,\\ldots,c_n)$ satisfying\n$$\\sum_{k=1}^n kc_k=n.$$\nFor $n=0$, the unique empty tuple indexes the identity class of $S_0$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "There are $\\binom53\\cdot2=20$ three-cycles, and each order-$3$ subgroup has two nonidentity elements, giving $n_3=10$. There are $4!=24$ five-cycles, and each order-$5$ subgroup has four nonidentity elements, giving $n_5=6$.",
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
   "claim": "Each of the five choices of a fixed letter gives the Klein four group of the three double transpositions on the remaining letters. The resulting five groups partition the fifteen double transpositions, so $n_2=5$. The values satisfy $5\\mid15$, $10\\mid20$, $6\\mid12$ and the respective congruences modulo $2$, $3$, and $5$. This proves the stated claim.",
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
   "reason": "The Sylow subgroups of $A_5$: the claim “The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $A_5$: the claim “The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $A_5$: the claim “The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $A_5$: the claim “The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $A_5$: the claim “The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $A_5$: the claim “The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $A_5$: the claim “The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The Sylow subgroups of $A_5$: the claim “The group $A_5$ has five Sylow $2$-subgroups, ten Sylow $3$-subgroups, and six Sylow $5$-subgroups.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-sylow-subgroups-of-affine-group-modulo-five

```markdown
---
id: ex-sylow-subgroups-of-affine-group-modulo-five
kind: example
title: "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, def-external-semidirect-product, thm-z-mod-p-is-a-field]
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

## Example

In $\operatorname{Aff}(\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] Let $N$ and $H$ be groups (def-group), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms (def-action-by-automorphisms). The external semidirect product $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication. ([[def-external-semidirect-product]]).

[L4] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field (def-field). ([[thm-z-mod-p-is-a-field]]).

## Verification

**Proof technique:** direct.

1.1 Composition identifies the affine maps $x\mapsto ax+b$, with $a\in\mathbb F_5^\times$ and $b\in\mathbb F_5$, with $\mathbb F_5\rtimes\mathbb F_5^\times$. The multiplier map has the translation subgroup as its kernel, so that normal subgroup has order $5$ and is the unique Sylow $5$-subgroup. [L1, L2, L3, L4, given, algebra]

2.1 For each $c\in\mathbb F_5$, the stabilizer of $c$ consists of the four maps $x\mapsto a(x-c)+c$. It has order $4$, the full $2$-part of the group order $20$, and hence is Sylow. [step 1.1, given, algebra]

3.1 The five point stabilizers are distinct, and Sylow III permits at most five Sylow $2$-subgroups. Consequently they are all of them, so $n_2=5$ and $n_5=1$. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-sylow-subgroups-of-affine-group-modulo-five

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-third-theorem",
   "source_section": "Statement",
   "quote": "Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-external-semidirect-product",
   "source_section": "Definition",
   "quote": "Let $N$ and $H$ be groups ([[def-group]]), and let $\\alpha:H\\to\\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\\rtimes_\\alpha H$ is the set $N\\times H$ with multiplication\n\n$$(n,h)(n',h')=\\bigl(n\\alpha_h(n'),hh'\\bigr).$$\n\nWhen the action is clear, the subscript is omitted.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-z-mod-p-is-a-field",
   "source_section": "Statement",
   "quote": "For every prime $p$, the operations of addition and multiplication on\n$\\mathbb Z/p$ make it a field ([[def-field]]).",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Composition identifies the affine maps $x\\mapsto ax+b$, with $a\\in\\mathbb F_5^\\times$ and $b\\in\\mathbb F_5$, with $\\mathbb F_5\\rtimes\\mathbb F_5^\\times$. The multiplier map has the translation subgroup as its kernel, so that normal subgroup has order $5$ and is the unique Sylow $5$-subgroup.",
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
   "claim": "For each $c\\in\\mathbb F_5$, the stabilizer of $c$ consists of the four maps $x\\mapsto a(x-c)+c$. It has order $4$, the full $2$-part of the group order $20$, and hence is Sylow.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The five point stabilizers are distinct, and Sylow III permits at most five Sylow $2$-subgroups. Consequently they are all of them, so $n_2=5$ and $n_5=1$. This proves the stated claim.",
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
   "reason": "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$: the claim “In $\\operatorname{Aff}(\\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$: the claim “In $\\operatorname{Aff}(\\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$: the claim “In $\\operatorname{Aff}(\\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$: the claim “In $\\operatorname{Aff}(\\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$: the initial index and termination or stabilization endpoint for “In $\\operatorname{Aff}(\\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$.” is resolved in step 3.1: “The five point stabilizers are distinct, and Sylow III permits at most five Sylow $2$-subgroups. Consequently they are all of them, so $n_2=5$ and $n_5=1$. This proves the stated claim.”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$: the claim “In $\\operatorname{Aff}(\\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$: the claim “In $\\operatorname{Aff}(\\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$: the claim “In $\\operatorname{Aff}(\\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared

```markdown
---
id: ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared
kind: example
title: "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, def-external-semidirect-product, thm-totient-of-a-prime-power, thm-unit-criterion-modulo-n]
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

## Example

For every prime $p$, the affine group of $\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\mapsto ax+b$ with $a\equiv1\pmod p$. It has order $p^3$, including when $p=2$. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] Let $N$ and $H$ be groups (def-group), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms (def-action-by-automorphisms). The external semidirect product $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication. ([[def-external-semidirect-product]]).

[L4] For every prime $p$ and natural $k\ge1$, $$\varphi(p^k)=p^k-p^{k-1}.$$ Equivalently, among the $p^k$ standard classes modulo $p^k$, the nonunits are exactly those whose standard representatives are divisible by $p$. ([[thm-totient-of-a-prime-power]]).

[L5] Let $n\ge1$ and $a\in\mathbb Z$. Then $[a]_n$ is a unit of $\mathbb Z/n$ (def-unit-group-modulo-n-and-euler-totient) if and only if $$\gcd(a,n)=1,$$ that is, if and only if $a$ and $n$ are coprime (def-coprime). Consequently the condition $\gcd(a,n)=1$ depends only on the class $[a]_n$. ([[thm-unit-criterion-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 The affine group is $(\mathbb Z/p^2)\rtimes(\mathbb Z/p^2)^\times$ and has order $p^2\varphi(p^2)=p^3(p-1)$. Reduction of the multiplier modulo $p$ is a homomorphism to $(\mathbb Z/p)^\times$. [L1, L2, L3, L4, L5, given, algebra]

2.1 Its kernel consists of arbitrary translations and the $p$ units $1+pt$ with $t\in\mathbb Z/p$. It is therefore normal of order $p^2\cdot p=p^3$, the full $p$-part of the affine-group order, and so is the unique Sylow $p$-subgroup. [step 1.1, given, algebra]

3.1 For $p=2$, both units modulo $4$ are congruent to $1$ modulo $2$, so the kernel is the whole affine group of order $8$; the same conclusion holds without exception. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-third-theorem",
   "source_section": "Statement",
   "quote": "Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-external-semidirect-product",
   "source_section": "Definition",
   "quote": "Let $N$ and $H$ be groups ([[def-group]]), and let $\\alpha:H\\to\\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\\rtimes_\\alpha H$ is the set $N\\times H$ with multiplication\n\n$$(n,h)(n',h')=\\bigl(n\\alpha_h(n'),hh'\\bigr).$$\n\nWhen the action is clear, the subscript is omitted.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-totient-of-a-prime-power",
   "source_section": "Statement",
   "quote": "For every prime $p$ and natural $k\\ge1$,\n\n$$\\varphi(p^k)=p^k-p^{k-1}.$$\n\nEquivalently, among the $p^k$ standard classes modulo $p^k$, the nonunits are\nexactly those whose standard representatives are divisible by $p$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-unit-criterion-modulo-n",
   "source_section": "Statement",
   "quote": "Let $n\\ge1$ and $a\\in\\mathbb Z$. Then $[a]_n$ is a unit of $\\mathbb Z/n$\n([[def-unit-group-modulo-n-and-euler-totient]]) if and only if\n\n$$\\gcd(a,n)=1,$$\n\nthat is, if and only if $a$ and $n$ are coprime ([[def-coprime]]). Consequently\nthe condition $\\gcd(a,n)=1$ depends only on the class $[a]_n$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The affine group is $(\\mathbb Z/p^2)\\rtimes(\\mathbb Z/p^2)^\\times$ and has order $p^2\\varphi(p^2)=p^3(p-1)$. Reduction of the multiplier modulo $p$ is a homomorphism to $(\\mathbb Z/p)^\\times$.",
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
   "claim": "Its kernel consists of arbitrary translations and the $p$ units $1+pt$ with $t\\in\\mathbb Z/p$. It is therefore normal of order $p^2\\cdot p=p^3$, the full $p$-part of the affine-group order, and so is the unique Sylow $p$-subgroup.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For $p=2$, both units modulo $4$ are congruent to $1$ modulo $2$, so the kernel is the whole affine group of order $8$; the same conclusion holds without exception. This proves the stated claim.",
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
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the smallest positive, one-factor, or $p=2$ specialization for “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” is resolved in step 3.1: “For $p=2$, both units modulo $4$ are congruent to $1$ modulo $2$, so the kernel is the whole affine group of order $8$; the same conclusion holds without exception. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the collapsed or coincident-input case admitted by the hypotheses for “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” is resolved in step 3.1: “For $p=2$, both units modulo $4$ are congruent to $1$ modulo $2$, so the kernel is the whole affine group of order $8$; the same conclusion holds without exception. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: thm-sylow-second-theorem

```markdown
---
id: thm-sylow-second-theorem
kind: theorem
title: "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-first-theorem, thm-p-group-fixed-point-congruence, def-number-of-sylow-p-subgroups, def-normalizer-of-a-subgroup, thm-lagrange]
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

Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L2] If a finite $p$-group $P$ acts on a finite set $X$, then $$|X|\equiv|X^P|\pmod p.$$. ([[thm-p-group-fixed-point-congruence]]).

[L3] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L4] Let $H\le G$ be a subgroup (def-subgroup). The normalizer of $H$ in $G$ is $$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$ Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves $H$ setwise (thm-conjugation-is-an-automorphism). The subgroup property is proved in lem-centralizers-and-normalizers-are-subgroups. ([[def-normalizer-of-a-subgroup]]).

[L5] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 Let a finite $p$-subgroup $H$ act by left multiplication on $G/P$. [L1, L2, L3, L4, L5, given, algebra]

2.1 Its cardinality is prime to $p$, so the fixed-point congruence gives a fixed coset $gP$, and the fixed-coset condition is exactly $H\le gPg^{-1}$. [step 1.1, given, algebra]

3.1 Taking $H$ Sylow, Lagrange's theorem turns containment into equality; applying this to any Sylow $p$-subgroup $Q$ gives $Q=gPg^{-1}$. [step 2.1, given, algebra]

4.1 We treat the trivial $p$-subgroup and primes not dividing $|G|$. This proves the stated claim. [step 3.1, given, algebra] ∎

```

## DEPENDENCY: def-finite-symmetric-group-and-permutation-notation

```markdown
---
id: def-finite-symmetric-group-and-permutation-notation
kind: definition
title: 'The finite symmetric group $S_n$, one-line notation, and cycle notation'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetric-group, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-11
    scope: item
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: 'Permutation (Wikipedia)'
      url: 'https://en.wikipedia.org/wiki/Permutation'
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

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

## Remarks

- **The brackets carry the meaning, so the same list of numbers reads two
  different ways.** Square brackets are one-line notation and round brackets are
  cycle notation. In $S_3$ the one-line form $[1,2,0]$ and the cycle symbol
  $(0\,1\,2)$ happen to name the same permutation, the one sending $0\mapsto1$,
  $1\mapsto2$, $2\mapsto0$; but $[0,1,2]$ is the identity while $(0\,1\,2)$ is
  not, and $[2,1,0]$ is the transposition exchanging $0$ and $2$ while
  $(2\,1\,0)$ is a $3$-cycle. Inside a cycle symbol this library separates the
  entries by thin spaces rather than by commas, which keeps the two notations
  apart on the page.

- **Relation to the two-row form.** Many texts write a permutation as the array
  $\sigma=\begin{pmatrix}0&1&\cdots&n-1\\\sigma(0)&\sigma(1)&\cdots&\sigma(n-1)\end{pmatrix}$,
  whose first row lists the arguments and whose second row lists their images.
  One-line notation is that array with its first row deleted, which loses
  nothing because the first row is the same for every $\sigma\in S_n$.

- **Why the identity is a product of no cycles rather than a cycle.** The cycle
  symbols are restricted to $k\ge2$, so a fixed point is never written. The
  identity is therefore the empty product, and a permutation is written by
  listing only the cycles that move something. Which permutations admit such a
  factorisation, and in how many ways, is
  [[thm-disjoint-cycle-decomposition]]; the fixed points that cycle notation
  suppresses are restored as one-cycles when a cycle type is recorded
  ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

```

## DEPENDENCY: thm-symmetric-permutations-are-conjugate-iff-same-cycle-type

```markdown
---
id: thm-symmetric-permutations-are-conjugate-iff-same-cycle-type
kind: theorem
title: 'Two elements of $S_n$ are conjugate if and only if they have the same cycle type'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-conjugating-a-cycle-relabels-its-entries, thm-disjoint-cycle-decomposition, def-permutation-support-disjoint-cycles-and-cycle-type]
justified_by: []
aliases: []
landmark: true
proof_strategy: iff
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Statement

For $\sigma,\tau\in S_n$, there is a $g\in S_n$ with
$\tau=g\sigma g^{-1}$ if and only if $\sigma$ and $\tau$ have the same cycle
type, including their numbers of fixed points.

## Facts & Assumptions

**Given:** Permutations $\sigma,\tau\in S_n$.

[F1] Every permutation has a disjoint-cycle decomposition, unique up to cycle order, cyclic rotation, and omission of fixed points ([[thm-disjoint-cycle-decomposition]]).

[F2] Cycle type records the number $c_k$ of cycles of each length $k$, including $1$-cycles ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F3] Conjugating a cycle by $g$ relabels all its entries by $g$ ([[lem-conjugating-a-cycle-relabels-its-entries]]).

## Proof

**Proof technique:** iff.

1.1 Suppose $\tau=g\sigma g^{-1}$. Conjugate every factor in the disjoint-cycle decomposition of $\sigma$; [F3] preserves each cycle length and relabels fixed points. [F1, F3]

1.2 Conversely, suppose the cycle types agree. By [F1] and [F2], pair every cycle of $\sigma$ with a cycle of $\tau$ of the same length, including the fixed points, and define $g$ by sending entries positionwise in each pair. [F1, F2]

2.1 Hence $\sigma$ and $\tau$ have the same multiplicities $c_k$ and the same cycle type. [F2, step 1.1]

2.2 The paired cycles partition the underlying set, so the map in step 1.2 is a bijection and hence an element of $S_n$. [step 1.2, algebra]

3.1 Applying [F3] to each paired cycle gives $g\sigma g^{-1}=\tau$. [F3, step 1.2, step 2.2] ∎

```

## DEPENDENCY: cor-sylow-subgroup-normal-iff-unique

```markdown
---
id: cor-sylow-subgroup-normal-iff-unique
kind: corollary
title: "A Sylow $p$-subgroup is normal if and only if it is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, def-number-of-sylow-p-subgroups, def-normal-subgroup]
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

A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L3] Let $G$ be a group and let $N\le G$ be a subgroup (def-subgroup). For $g\in G$, write $$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$ The subgroup $N$ is normal in $G$ when $$gNg^{-1}=N\qquad\text{for every }g\in G.$$ In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner conjugation of $G$ maps $N$ onto itself. The connection with equality of the left and right cosets of def-coset is proved in thm-normal-subgroup-characterisations. ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 A normal Sylow subgroup is fixed by every conjugation, and Sylow II says every Sylow subgroup is one of its conjugates. [L1, L2, L3, given, algebra]

2.1 Conversely, uniqueness makes the subgroup conjugation-invariant. This proves the stated claim. [step 1.1, given, algebra] ∎

```

## DEPENDENCY: thm-classification-of-groups-of-order-pq

```markdown
---
id: thm-classification-of-groups-of-order-pq
kind: theorem
title: "Classification of groups of order $pq$ for primes $p<q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-groups-of-order-pq-have-a-normal-q-subgroup, lem-order-p-actions-on-a-cyclic-q-group, thm-cauchys-theorem-for-finite-groups, cor-prime-order-group-is-cyclic, thm-internal-external-semidirect-product-equivalence, lem-product-with-normal-subgroup, lem-group-power-laws, lem-order-characterisation, lem-coprime-divides-product, thm-lagrange, thm-classification-of-cyclic-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

Let $p<q$ be primes.

- If $p\nmid(q-1)$, every group of order $pq$ is cyclic.
- If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$.

## Facts & Assumptions

**Given:** Primes $p<q$ and a group $G$ of order $pq$.

[L1] The group $G$ has a normal subgroup $Q$ of order $q$ ([[lem-groups-of-order-pq-have-a-normal-q-subgroup]]).

[L2] Cauchy's theorem supplies a subgroup $P$ of order $p$, and every prime-order group is cyclic ([[thm-cauchys-theorem-for-finite-groups]], [[cor-prime-order-group-is-cyclic]]).

[L3] A normal factor and a complement with trivial intersection realise an external semidirect product ([[thm-internal-external-semidirect-product-equivalence]]).

[L4] Nontrivial actions of $C_p$ on $C_q$ exist exactly when $p\mid(q-1)$ and give a unique semidirect-product type ([[lem-order-p-actions-on-a-cyclic-q-group]]).

[L5] A product with a normal subgroup is a subgroup; group powers obey the addition law; and $x^m=1$ exactly when the order of $x$ divides $m$ ([[lem-product-with-normal-subgroup]], [[lem-group-power-laws]], [[lem-order-characterisation]]).

[L6] If two coprime integers divide an integer, then their product divides it ([[lem-coprime-divides-product]]).

[L7] The order of a subgroup divides the order of a finite group ([[thm-lagrange]]).

[L8] Finite cyclic groups are determined up to isomorphism by their order ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** cases.

1.1 Choose $Q$ and $P$ as in [L1] and [L2]. By [L7], the order of $Q\cap P$ divides both primes, so the intersection is trivial. Since $Q$ is normal, $QP$ is a subgroup by [L5]. Its cosets $xP$ for $x\in Q$ are distinct because $xP=x'P$ would give $x'^{-1}x\in Q\cap P$, and each has $p$ elements. Thus $|QP|=pq=|G|$, so $G=QP$. [L1, L2, L5, L7, algebra]

2.1 Both $Q$ and $P$ are cyclic by [L2], and [L3] gives $G\cong C_q\rtimes C_p$. [step 1.1, L2, L3]

3.1 [assume-case first] Suppose the action is trivial. Let $x,y$ generate the commuting factors of orders $q,p$. If $(xy)^m=1$, then $x^m=y^{-m}$ belongs to their trivial intersection, so $q\mid m$ and $p\mid m$ by [L5]. Since $p,q$ are coprime, [L6] gives $pq\mid m$. Hence $xy$ has order $pq$, and $G$ is cyclic. [step 2.1, L5, L6]

3.2 [assume-case second] Suppose the action is nontrivial. Then [L4] says that this is possible exactly when $p\mid(q-1)$ and that all such products are isomorphic. The product is nonabelian because some element of $P$ acts nontrivially on $Q$. [step 2.1, L4]

4.1 [cases-exhaustive] If $p\nmid(q-1)$ only step 3.1 occurs. If $p\mid(q-1)$, steps 3.1 and 3.2 give two types, distinguished by commutativity; [L8] gives uniqueness of the cyclic type and [L4] gives uniqueness of the nonabelian type. [step 3.1, step 3.2, L4, L8] ∎

```

## DEPENDENCY: prop-semidirect-product-is-direct-iff-action-is-trivial

```markdown
---
id: prop-semidirect-product-is-direct-iff-action-is-trivial
kind: proposition
title: "The canonical semidirect decomposition is an internal direct product if and only if the defining action is trivial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-canonical-subgroups-of-an-external-semidirect-product, def-external-direct-product-of-groups, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: iff
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$.

## Facts & Assumptions

**Given:** An external semidirect product $N\rtimes_\alpha H$ with its canonical factors $\bar N$ and $\bar H$.

[L1] The canonical factors have trivial intersection, multiply to the whole group, and satisfy $(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1)$ ([[prop-canonical-subgroups-of-an-external-semidirect-product]]).

[L2] The external direct product has coordinatewise multiplication ([[def-external-direct-product-of-groups]]).

[L3] A subgroup $M\le G$ is normal when $gMg^{-1}=M$ for every $g\in G$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** iff.

1.1 [reverse] Suppose the action is trivial. The semidirect law becomes $(n,h)(n',h')=(nn',hh')$, which is the direct-product law from [L2]. [L1, L2]

1.2 [forward] Suppose the canonical decomposition is an internal direct product, so $\bar H$ as well as $\bar N$ is normal. For $x\in\bar N$ and $y\in\bar H$, normality gives $xyx^{-1}y^{-1}\in\bar H$ and also $xyx^{-1}y^{-1}=x(yx^{-1}y^{-1})\in\bar N$. Thus this commutator lies in $\bar N\cap\bar H=\{1\}$ by [L1], so $x$ and $y$ commute. [L1, L3, algebra]

2.1 The conjugation formula in [L1] now gives $(\alpha_h(n),1)=(n,1)$ for every $n,h$. Hence every $\alpha_h$ is the identity. [step 1.2, L1] ∎

```

## DEPENDENCY: cor-nilpotent-groups-and-finite-p-groups-are-solvable

```markdown
---
id: cor-nilpotent-groups-and-finite-p-groups-are-solvable
kind: corollary
title: "Nilpotent groups, and in particular finite $p$-groups, are solvable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derived-series-solvable-group-and-derived-length, def-subgroup-commutator-and-lower-central-series, thm-upper-and-lower-central-characterizations-of-nilpotence, thm-finite-p-groups-are-nilpotent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Every nilpotent group is solvable. Consequently every finite $p$-group is solvable.

## Facts & Assumptions

**Given:** A nilpotent group $G$.

[F1] $G^{(0)}=G$ and $G^{(r+1)}=[G^{(r)},G^{(r)}]$ ([[def-derived-series-solvable-group-and-derived-length]]).

[F2] $\gamma_1(G)=G$ and $\gamma_{r+1}(G)=[G,\gamma_r(G)]$ ([[def-subgroup-commutator-and-lower-central-series]]).

[L1] Nilpotence is equivalent to $\gamma_{c+1}(G)=1$ for some $c$ ([[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

[L2] Every finite $p$-group is nilpotent ([[thm-finite-p-groups-are-nilpotent]]).

## Proof

**Proof technique:** direct.

1.1 For every subgroup $H\le G$, one has $[H,H]\le[G,H]$. [F2, algebra]

2.1 Induction on $r$ gives $G^{(r)}\le\gamma_{r+1}(G)$: equality holds at $r=0$, and step 1.1 sends the inclusion at $r$ to $G^{(r+1)}\le[G,\gamma_{r+1}(G)]=\gamma_{r+2}(G)$. [step 1.1, F1, F2]

3.1 Choose $c$ with $\gamma_{c+1}(G)=1$ using [L1]. Step 2.1 gives $G^{(c)}=1$, so $G$ is solvable by [F1]. [step 2.1, L1, F1, choose]

4.1 A finite $p$-group is nilpotent by [L2], so step 3.1 applies. [step 3.1, L2] ∎

```

## DEPENDENCY: def-derived-series-solvable-group-and-derived-length

```markdown
---
id: def-derived-series-solvable-group-and-derived-length
kind: definition
title: "The derived series, solvable groups, and derived length"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-derived-subgroup-is-characteristic-and-abelianization-is-universal, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Definition

The **derived series** of a group $G$ is defined recursively by
$$G^{(0)}=G,\qquad G^{(r+1)}=[G^{(r)},G^{(r)}].$$
Each term is characteristic, hence normal, in the preceding term by [[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]].

The group $G$ is **solvable** if $G^{(n)}=1$ for some $n\in\mathbb N$. Its **derived length** is the least such $n$. This least index exists because the set of terminating indices is a nonempty subset of $\mathbb N$ and every such subset has a least element ([[thm-well-ordering-principle]]). Thus the trivial group has derived length $0$, and a nontrivial abelian group has derived length $1$.

```

## DEPENDENCY: thm-sylow-characterizations-of-finite-nilpotence

```markdown
---
id: thm-sylow-characterizations-of-finite-nilpotence
kind: theorem
title: "Sylow and maximal-subgroup characterizations of finite nilpotence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-nilpotence-via-normal-sylow-subgroups, thm-maximal-subgroups-of-finite-nilpotent-groups, thm-nilpotence-is-detected-modulo-the-frattini-subgroup, def-frattini-subgroup-of-a-finite-group, thm-internal-direct-product-recognition, thm-correspondence-theorem-groups, thm-cauchys-theorem-for-finite-groups, thm-finite-p-groups-are-nilpotent, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]
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

For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. See [[lem-finite-nilpotence-via-normal-sylow-subgroups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. ([[lem-finite-nilpotence-via-normal-sylow-subgroups]]).

[L2] Every maximal proper subgroup of a finite nilpotent group is normal and has prime index. ([[thm-maximal-subgroups-of-finite-nilpotent-groups]]).

[L3] Let $G$ be finite and let $\Phi(G)\le N\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\Phi(G)$ is nilpotent. ([[thm-nilpotence-is-detected-modulo-the-frattini-subgroup]]).

[L4] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L5] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L6] If a prime $p$ divides the order of a finite group $H$, then $H$ contains an element, and hence a subgroup, of order $p$. ([[thm-cauchys-theorem-for-finite-groups]]).

[L7] Every finite $p$-group is nilpotent, including the trivial group. ([[thm-finite-p-groups-are-nilpotent]]).

[L8] Every subgroup and every quotient of a nilpotent group is nilpotent, and every finite direct product of nilpotent groups is nilpotent. ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

[L9] For $K\trianglelefteq G$, subgroups of $G/K$ correspond to subgroups of $G$ containing $K$, and the correspondence preserves inclusion and normality. ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the first three conditions are equivalent, and [L2] proves that any of them implies normality of every maximal subgroup. [L1, L2, given]

2.1 Conversely, assume every maximal subgroup $M$ is normal. The diagonal map $G/\Phi(G)\to\prod_M G/M$ is injective because its kernel is the intersection [L4]. By [L9] and maximality, each nontrivial quotient $G/M$ has no nontrivial proper subgroup. If $p$ divides its order, [L6] supplies a subgroup of order $p$, which must be all of $G/M$. Thus each factor has prime order and is nilpotent by [L7]. [L4, L6, L7, L9, step 1.1, given, algebra]

3.1 The finite product in step 2.1 is nilpotent and so is its subgroup $G/\Phi(G)$ by [L8]. The lifting theorem [L3] now makes $G$ nilpotent. [L3, L8, step 2.1]

4.1 This proves the reverse implication and hence all four equivalences. [step 1.1, step 3.1]

5.1 If the family of maximal subgroups is empty, finiteness forces $G=1$; the diagonal target is then the empty product $1$, and every condition holds. [L1, L4, L5, L7, step 4.1, given] ∎

```

## DEPENDENCY: def-number-of-sylow-p-subgroups

```markdown
---
id: def-number-of-sylow-p-subgroups
kind: definition
title: "The number $n_p(G)$ of Sylow $p$-subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sylow-p-subgroup]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Definition

For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is nonzero.

```

## DEPENDENCY: thm-sylow-third-theorem

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

## DEPENDENCY: def-alternating-group

```markdown
---
id: def-alternating-group
kind: definition
title: 'The alternating group $A_n=\ker(\operatorname{sgn})$ of even permutations'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-sign-is-a-homomorphism, def-kernel-and-image-of-group-homomorphism, thm-image-subgroup-and-kernel-normal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

## Definition

For $n\in\mathbb N$, the **alternating group** is the kernel of the sign
homomorphism,

$$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$

Thus $A_n$ consists exactly of the even permutations. The subgroup and
normality assertions implicit in the word “group” follow from
[[thm-image-subgroup-and-kernel-normal]].

```

## DEPENDENCY: cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types

```markdown
---
id: cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types
kind: corollary
title: 'The conjugacy classes of $S_n$ are indexed by the tuples $(c_1,\ldots,c_n)$ with $\sum k c_k=n$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-symmetric-permutations-are-conjugate-iff-same-cycle-type, def-permutation-support-disjoint-cycles-and-cycle-type]
justified_by: []
aliases: []
landmark: false
proof_strategy: bijection
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Statement

The conjugacy classes of $S_n$ are in bijection with the tuples of
nonnegative integers $(c_1,\ldots,c_n)$ satisfying
$$\sum_{k=1}^n kc_k=n.$$
For $n=0$, the unique empty tuple indexes the identity class of $S_0$.

## Facts & Assumptions

**Given:** The symmetric group $S_n$ for $n\ge0$.

[F1] The cycle type of a permutation is the tuple $(c_1,\ldots,c_n)$ counting its orbits of each length, with fixed points counted as $1$-cycles ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F2] Two permutations in $S_n$ are conjugate exactly when they have the same cycle type ([[thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]]).

## Proof

**Proof technique:** bijection.

1.1 Assign to a conjugacy class the cycle type of any representative; [F2] makes this well-defined and injective. [F2]

1.2 Conversely, for any such tuple, partition $n$ symbols into $c_k$ blocks of size $k$ and put a $k$-cycle on each block; their product has that cycle type. For $n=0$, use the empty product on the empty set. [F1, algebra]

2.1 The orbits counted in [F1] partition the $n$ symbols, so counting their points gives $\sum_k kc_k=n$. Thus the image consists of tuples satisfying the displayed equation. [F1, step 1.1, algebra]

3.1 Thus the assignment is surjective and hence a bijection. [step 1.1, step 2.1, step 1.2] ∎

```

## DEPENDENCY: def-external-semidirect-product

```markdown
---
id: def-external-semidirect-product
kind: definition
title: ' The external semidirect product $N\rtimes_\alpha H$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-action-by-automorphisms, def-group]
justified_by: [thm-external-semidirect-product-is-a-group]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Definition

Let $N$ and $H$ be groups ([[def-group]]), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication

$$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr).$$

When the action is clear, the subscript is omitted.

```

## DEPENDENCY: thm-z-mod-p-is-a-field

```markdown
---
id: thm-z-mod-p-is-a-field
kind: theorem
title: "For every prime $p$, the two operations on $\\mathbb{Z}/p$ make it a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integers-modulo-n-basic-algebra, thm-unit-criterion-modulo-n, lem-prime-not-dividing-is-coprime, def-prime, def-field, def-integers-modulo-n, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
    - title: "MIT 18.783 Lecture Notes 3"
      url: "https://math.mit.edu/classes/18.783/2022/LectureNotes3.pdf"
pipeline_run: null
---

## Statement

For every prime $p$, the operations of addition and multiplication on
$\mathbb Z/p$ make it a field ([[def-field]]).

## Facts & Assumptions

**Given:** A prime integer $p$.

[L1] Modular addition makes $\mathbb Z/p$ an abelian group, modular multiplication makes it a commutative monoid, and both distributive laws hold ([[thm-integers-modulo-n-basic-algebra]]).

[L2] A prime satisfies $p>1$, and if $p\nmid a$ then $\gcd(a,p)=1$ ([[def-prime]], [[lem-prime-not-dividing-is-coprime]]).

[L3] For positive modulus $p$, $[a]_p$ is invertible exactly when $\gcd(a,p)=1$ ([[thm-unit-criterion-modulo-n]]).

[L4] Equality $[a]_p=[b]_p$ is equivalent to $a\equiv b\pmod p$, which means $p\mid(a-b)$ ([[def-integers-modulo-n]], [[def-congruence-modulo-an-integer]]).

[L5] A field is a commutative ring with $0\ne1$ in which every nonzero element is multiplicatively invertible ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], all additive, multiplicative, identity, inverse, commutativity, associativity and distributive field axioms already hold except possibly $[0]_p\ne[1]_p$ and invertibility of nonzero classes. [L1, L5]

1.2 Since $p>1$, it does not divide $1$, so [L4] gives $[0]_p\ne[1]_p$. [L2, L4]

1.3 If $[a]_p\ne[0]_p$, then $p\nmid a$ by [L4]. Hence $\gcd(a,p)=1$ by [L2], and [L3] makes $[a]_p$ invertible. [L2, L3, L4]

2.1 Steps 1.1 through 1.3 verify every clause of [L5], so $\mathbb Z/p$ is a field. [step 1.1, step 1.2, step 1.3, L5] ∎

```

## DEPENDENCY: thm-totient-of-a-prime-power

```markdown
---
id: thm-totient-of-a-prime-power
kind: theorem
title: "For a prime $p$ and $k\\ge1$, $\\varphi(p^k)=p^k-p^{k-1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-multiples-below-a-prime-power, thm-unit-criterion-modulo-n, lem-prime-not-dividing-is-coprime, def-prime, def-common-divisor-and-gcd, lem-divisibility-basic, def-unit-group-modulo-n-and-euler-totient, thm-standard-representatives-modulo-n, thm-sum-rule, def-finite-cardinality, thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Euler's totient function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euler%27s_totient_function"
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "Carnegie Mellon, number-theory lecture notes"
      url: "https://www.cs.cmu.edu/~goyal/15356/lecture_notes.pdf"
pipeline_run: null
---

## Statement

For every prime $p$ and natural $k\ge1$,

$$\varphi(p^k)=p^k-p^{k-1}.$$

Equivalently, among the $p^k$ standard classes modulo $p^k$, the nonunits are
exactly those whose standard representatives are divisible by $p$.

## Facts & Assumptions

**Given:** A prime $p$, a natural $k\ge1$, and an arbitrary standard representative $r$ with $0\le r<p^k$.

[L1] A class $[r]_{p^k}$ is a unit exactly when $\gcd(r,p^k)=1$ ([[thm-unit-criterion-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L2] If $p\nmid r$, then $\gcd(p,r)=1$ ([[lem-prime-not-dividing-is-coprime]]).

[L3] Every positive integer is a finite product of primes, and two finite prime products with the same value have the same factors up to a permutation ([[thm-fundamental-theorem-of-arithmetic]]).

[F1] Every prime exceeds $1$ ([[def-prime]]).

[F2] The gcd of a nonzero pair is its greatest common divisor: it is a common divisor, it is at least every common divisor, and divisibility is transitive. Hence every divisor of $\gcd(a,b)$ divides both $a$ and $b$ ([[def-common-divisor-and-gcd]], [[lem-divisibility-basic]]).

[L4] The standard representatives modulo $p^k$ divisible by $p$ have cardinality $p^{k-1}$ ([[lem-multiples-below-a-prime-power]]).

[L5] The standard representatives modulo $p^k$ map bijectively to $\mathbb Z/p^k$, which has cardinality $p^k$, and $\varphi(p^k)$ is the cardinality of its unit subset ([[thm-standard-representatives-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L6] A finite disjoint union has cardinality equal to the sum of the cardinalities of its blocks ([[thm-sum-rule]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 If $p\mid r$, then $p$ is a common divisor of $r$ and $p^k$. Since $p>1$ by [F1], the greatest-common-divisor property in [F2] gives $\gcd(r,p^k)\ne1$, so $[r]_{p^k}$ is not a unit. [L1, F1, F2]

1.2 Suppose $p\nmid r$, so $p$ and $r$ are coprime by [L2]. If $\gcd(r,p^k)>1$, [L3] gives a prime $q$ dividing that gcd. Then [F2] gives $q\mid r$ and $q\mid p^k$. Uniqueness of prime factorisation applied to $p^k$, a product of copies of $p$, forces $q=p$, contradicting the coprimality of $p$ and $r$. Hence $\gcd(r,p^k)=1$, so $[r]_{p^k}$ is a unit. [L1, L2, L3, F2]

2.1 Since $r$ was arbitrary, the standard representatives split disjointly into the unit representatives and the representatives divisible by $p$. The whole set has cardinality $p^k$ by [L5], and the second block has cardinality $p^{k-1}$ by [L4]. [step 1.1, step 1.2, L4, L5]

3.1 By the sum rule, $p^k=\varphi(p^k)+p^{k-1}$ in $\mathbb N$, so $\varphi(p^k)=p^k-p^{k-1}$. [step 2.1, L5, L6] ∎

```

## DEPENDENCY: thm-unit-criterion-modulo-n

```markdown
---
id: thm-unit-criterion-modulo-n
kind: theorem
title: "For $n\\ge1$, $[a]_n$ is a unit if and only if $\\gcd(a,n)=1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unit-group-modulo-n-and-euler-totient, thm-bezout-identity, def-common-divisor-and-gcd, def-coprime, lem-coprime-criterion, lem-divisibility-basic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "UW Oshkosh, Number Theory Notes 3"
      url: "https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and $a\in\mathbb Z$. Then $[a]_n$ is a unit of $\mathbb Z/n$
([[def-unit-group-modulo-n-and-euler-totient]]) if and only if

$$\gcd(a,n)=1,$$

that is, if and only if $a$ and $n$ are coprime ([[def-coprime]]). Consequently
the condition $\gcd(a,n)=1$ depends only on the class $[a]_n$.

## Facts & Assumptions

**Given:** A positive integer $n$ and an integer $a$.

[L1] Integers $u,v$ are coprime exactly when $ux+vy=1$ for some integers $x,y$ ([[lem-coprime-criterion]], [[thm-bezout-identity]], [[def-common-divisor-and-gcd]], [[def-coprime]]).

[F1] The class $[a]_n$ is a unit exactly when some $[b]_n$ satisfies $[a]_n[b]_n=[1]_n$ ([[def-unit-group-modulo-n-and-euler-totient]]).

[L2] If an integer divides two integers, it divides every integer linear combination of them ([[lem-divisibility-basic]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\gcd(a,n)=1$. By [L1], choose integers $x,y$ with $ax+ny=1$. Reducing this equality modulo $n$ gives $[a]_n[x]_n=[1]_n$, so $[a]_n$ is a unit. [L1, F1, choose]

1.2 Conversely, suppose $[a]_n$ is a unit. Choose $b$ with $[a]_n[b]_n=[1]_n$. Then $ab\equiv1\pmod n$, so $ab-1=nq$ for some integer $q$, and $ab+n(-q)=1$. By [L1], $\gcd(a,n)=1$. [F1, L1, choose]

1.3 If $a\equiv a'\pmod n$ and $\gcd(a,n)=1$, write $a'=a+nk$. A Bézout identity $ax+ny=1$ then becomes $a'x+n(y-kx)=1$, so $\gcd(a',n)=1$ by [L1]; symmetry gives the converse. Thus the criterion is representative independent. [L1, L2, algebra]

2.1 Steps 1.1 and 1.2 prove the equivalence, and step 1.3 proves its final representative-independence assertion. [step 1.1, step 1.2, step 1.3] ∎

```
