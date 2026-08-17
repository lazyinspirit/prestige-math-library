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
label: n-11

run: frontier-15
role: refuter
label: n-11
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

## ITEM: ex-groups-of-order-thirty

```markdown
---
id: ex-groups-of-order-thirty
kind: example
title: "The four isomorphism types of groups of order $30$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-groups-of-order-thirty-have-a-normal-sylow-subgroup, thm-classification-of-groups-of-order-pq, lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products, def-external-semidirect-product]
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

Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inversion on $C_5$ only. See [[thm-groups-of-order-thirty-have-a-normal-sylow-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple. ([[thm-groups-of-order-thirty-have-a-normal-sylow-subgroup]]).

[L2] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L3] Let $\alpha,β:H\to\operatorname{Aut}(N)$ be actions. If $u\in\operatorname{Aut}(N)$ and $v\in\operatorname{Aut}(H)$ satisfy $$\beta_{v(h)}=u\alpha_hu^{-1}\qquad(h\in H),$$ then $$N\rtimes_\alpha H\cong N\rtimes_\beta H$$. ([[lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products]]).

[L4] Let $N$ and $H$ be groups (def-group), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms (def-action-by-automorphisms). The external semidirect product $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication. ([[def-external-semidirect-product]]).

## Verification

**Proof technique:** direct.

1.1 The normal Sylow $3$- and $5$-subgroups commute and form a cyclic normal subgroup $N\cong C_{15}$. A Sylow $2$-subgroup $C_2$ meets $N$ trivially and $NC_2=G$, so $G\cong C_{15}\rtimes C_2$. [L1, L2, L3, L4, given, algebra]

2.1 Under $C_{15}\cong C_3\times C_5$, an involutory automorphism acts independently on the prime factors. Each factor admits either the trivial action or inversion, giving the four actions stated in the Example. [step 1.1, given, algebra]

3.1 The corresponding centers have orders $30$, $1$, $5$, and $3$, respectively, so the groups are pairwise nonisomorphic. Every group of order $30$ arose in step 1.1, proving exhaustiveness. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-groups-of-order-thirty

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-groups-of-order-thirty-have-a-normal-sylow-subgroup",
   "source_section": "Statement",
   "quote": "Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple. See [[thm-cauchys-theorem-for-finite-groups]].",
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
   "source": "lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products",
   "source_section": "Statement",
   "quote": "Let $\\alpha,β:H\\to\\operatorname{Aut}(N)$ be actions. If $u\\in\\operatorname{Aut}(N)$ and $v\\in\\operatorname{Aut}(H)$ satisfy\n\n$$\\beta_{v(h)}=u\\alpha_hu^{-1}\\qquad(h\\in H),$$\n\nthen\n\n$$N\\rtimes_\\alpha H\\cong N\\rtimes_\\beta H$$\n\nby $(n,h)\\mapsto(u(n),v(h))$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-external-semidirect-product",
   "source_section": "Definition",
   "quote": "Let $N$ and $H$ be groups ([[def-group]]), and let $\\alpha:H\\to\\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\\rtimes_\\alpha H$ is the set $N\\times H$ with multiplication\n\n$$(n,h)(n',h')=\\bigl(n\\alpha_h(n'),hh'\\bigr).$$\n\nWhen the action is clear, the subscript is omitted.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The normal Sylow $3$- and $5$-subgroups commute and form a cyclic normal subgroup $N\\cong C_{15}$. A Sylow $2$-subgroup $C_2$ meets $N$ trivially and $NC_2=G$, so $G\\cong C_{15}\\rtimes C_2$.",
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
   "claim": "Under $C_{15}\\cong C_3\\times C_5$, an involutory automorphism acts independently on the prime factors. Each factor admits either the trivial action or inversion, giving the four actions stated in the Example.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The corresponding centers have orders $30$, $1$, $5$, and $3$, respectively, so the groups are pairwise nonisomorphic. Every group of order $30$ arose in step 1.1, proving exhaustiveness. This proves the stated claim.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
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
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The four isomorphism types of groups of order $30$: the zero or trivial specialization for “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” is resolved in step 2.1: “Under $C_{15}\\cong C_3\\times C_5$, an involutory automorphism acts independently on the prime factors. Each factor admits either the trivial action or inversion, giving the four actions stated in the Example.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The four isomorphism types of groups of order $30$: the collapsed or coincident-input case admitted by the hypotheses for “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” is resolved in step 2.1: “Under $C_{15}\\cong C_3\\times C_5$, an involutory automorphism acts independently on the prime factors. Each factor admits either the trivial action or inversion, giving the four actions stated in the Example.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-a-four-is-not-nilpotent

```markdown
---
id: ex-a-four-is-not-nilpotent
kind: example
title: "$A_4$ is not nilpotent"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-characterizations-of-finite-nilpotence, def-alternating-group, cor-sylow-subgroup-normal-iff-unique]
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

The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent. See [[thm-sylow-characterizations-of-finite-nilpotence]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. ([[thm-sylow-characterizations-of-finite-nilpotence]]).

[L2] For $n\in\mathbb N$, the alternating group is the kernel of the sign homomorphism, $$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$ Thus $A_n$ consists exactly of the even permutations. The subgroup and normality assertions implicit in the word “group” follow from thm-image-subgroup-and-kernel-normal. ([[def-alternating-group]]).

[L3] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

## Verification

**Proof technique:** direct.

1.1 The eight $3$-cycles in $A_4$ occur in four inverse pairs, so they generate four distinct subgroups of order $3$. These are all the Sylow $3$-subgroups. [L1, L2, L3, given, algebra]

2.1 Since there is more than one Sylow $3$-subgroup, none is normal and the Sylow characterization rules out nilpotence. By contrast, the identity together with the three double transpositions is a conjugation-invariant Klein four group, hence the normal Sylow $2$-subgroup. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for ex-a-four-is-not-nilpotent

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-characterizations-of-finite-nilpotence",
   "source_section": "Statement",
   "quote": "For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. See [[lem-finite-nilpotence-via-normal-sylow-subgroups]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-alternating-group",
   "source_section": "Definition",
   "quote": "For $n\\in\\mathbb N$, the **alternating group** is the kernel of the sign\nhomomorphism,\n\n$$A_n:=\\ker(\\operatorname{sgn}:S_n\\to\\{+1,-1\\})=\\{\\sigma\\in S_n:\\operatorname{sgn}(\\sigma)=1\\}.$$\n\nThus $A_n$ consists exactly of the even permutations. The subgroup and\nnormality assertions implicit in the word “group” follow from\n[[thm-image-subgroup-and-kernel-normal]]",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The eight $3$-cycles in $A_4$ occur in four inverse pairs, so they generate four distinct subgroups of order $3$. These are all the Sylow $3$-subgroups.",
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
   "claim": "Since there is more than one Sylow $3$-subgroup, none is normal and the Sylow characterization rules out nilpotence. By contrast, the identity together with the three double transpositions is a conjugation-invariant Klein four group, hence the normal Sylow $2$-subgroup. This proves the stated claim.",
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
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-fitting-and-frattini-subgroups-of-s-three

```markdown
---
id: ex-fitting-and-frattini-subgroups-of-s-three
kind: example
title: "The Fitting and Frattini subgroups of $S_3$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-fitting-subgroup-of-a-finite-group, def-frattini-subgroup-of-a-finite-group, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\Phi(S_3)=1$. Hence $F(S_3/\Phi(S_3))=F(S_3)/\Phi(S_3)$. See [[def-fitting-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$, the Fitting subgroup is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores (def-p-core-of-a-finite-group). The factors are normal, so their finite product is a normal subgroup and does not depend on the order of multiplication. For the trivial group the product is empty and equals $1$. ([[def-fitting-subgroup-of-a-finite-group]]).

[L2] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L3] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

[L4] Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ (def-natural-numbers). The symmetric group on $n$ letters is $$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$ the group of all bijections of $n$ under composition (def-symmetric-group), with the composition convention. ([[def-finite-symmetric-group-and-permutation-notation]]).

## Verification

**Proof technique:** direct.

1.1 The subgroup $A_3$ is the unique Sylow $3$-subgroup, so $O_3(S_3)=A_3$. The three order-$2$ subgroups are conjugate, so no nontrivial $2$-subgroup is normal and $O_2(S_3)=1$. Therefore $F(S_3)=A_3$. [L1, L2, L3, L4, given, algebra]

2.1 The maximal subgroups are $A_3$ and the three order-$2$ subgroups, whose intersection is $1$; hence $\Phi(S_3)=1$. The quotient identity reduces to $F(S_3)=F(S_3)$ and is therefore satisfied. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for ex-fitting-and-frattini-subgroups-of-s-three

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-fitting-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Fitting subgroup** is $$F(G):=\\prod_{p\\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-frattini-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Frattini subgroup** is $$\\Phi(G):=\\bigcap\\{M\\le G:M\\text{ is maximal proper}\\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\\Phi(1)=1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup",
   "source_section": "Statement",
   "quote": "For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. See [[def-fitting-subgroup-of-a-finite-group]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-finite-symmetric-group-and-permutation-notation",
   "source_section": "Definition",
   "quote": "Let $n\\in\\mathbb N$, so that $n=\\{0,1,\\dots,n-1\\}$ ([[def-natural-numbers]]). The\n**symmetric group on $n$ letters** is\n\n$$S_n:=\\operatorname{Sym}(n)=\\operatorname{Sym}(\\{0,1,\\dots,n-1\\}),$$\n\nthe group of all bijections of $n$ under composition ([[def-symmetric-group]]),\nwith the composition convention\n\n$$(\\sigma\\tau)(i):=(\\sigma\\circ\\tau)(i)=\\sigma(\\tau(i))\\qquad(i\\in n),$$\n\nso that in a product the right-hand factor acts first. An element of $S_n$ is\nnamed by either of the two notations below.\n\n**One-line notation.** For $\\sigma\\in S_n$, its **one-line form** is the list of\nits values in order of their arguments,\n\n$$\\sigma=[\\sigma(0),\\sigma(1),\\dots,\\sigma(n-1)].$$\n\nThis list has length $n$ and its entries are $0,1,\\dots,n-1$, each occurring\nonce, because $\\sigma$ is a bijection of $n$. Conversely, a list\n$[b_0,b_1,\\dots,b_{n-1}]$ whose entries are $0,1,\\dots,n-1$ each occurring once\nis the one-line form of exactly one element of $S_n$, namely the map sending\neach $i\\in n$ to $b_i$: that map is injective because the entries are distinct,\nand surjective because every element of $n$ occurs among them. So one-line\nnotation is a bijection from $S_n$ to the arrangements of $0,1,\\dots,n-1$ in a\nlist. For $n=0$ the one-line form of the unique element of $S_0$ is the empty\nlist.\n\n**Cycle notation.** For distinct $a_0,a_1,\\dots,a_{k-1}\\in n$ with $k\\ge2$, the\nsymbol $(a_0\\,a_1\\,\\cdots\\,a_{k-1})$ denotes the element of $S_n$ that sends\n$a_i$ to $a_{i+1}$ for each $i<k-1$, sends $a_{k-1}$ to $a_0$, and fixes every\nelement of $n$ outside $\\{a_0,\\dots,a_{k-1}\\}$ ([[def-symmetric-group]]); it is\ncalled a **$k$-cycle**, and a $2$-cycle is a **transposition**. Writing cycle\nsymbols side by side means composing them, so $(a\\,b)(c\\,d)$ is\n$(a\\,b)\\circ(c\\,d)$, and the empty juxtaposition of cycle symbols is the\nidentity $\\operatorname{id}$.\n\nUnlike one-line notation, cycle notation does not name each permutation once:\nthe symbol may be started at any of its entries, so\n\n$$(a_0\\,a_1\\,\\cdots\\,a_{k-1})=(a_1\\,\\cdots\\,a_{k-1}\\,a_0)$$\n\nand each $k$-cycle is written by exactly $k$ symbols of this shape. A cycle\nsymbol also does not record $n$, which must be supplied by the context.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The subgroup $A_3$ is the unique Sylow $3$-subgroup, so $O_3(S_3)=A_3$. The three order-$2$ subgroups are conjugate, so no nontrivial $2$-subgroup is normal and $O_2(S_3)=1$. Therefore $F(S_3)=A_3$.",
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
   "claim": "The maximal subgroups are $A_3$ and the three order-$2$ subgroups, whose intersection is $1$; hence $\\Phi(S_3)=1$. The quotient identity reduces to $F(S_3)=F(S_3)$ and is therefore satisfied. This proves the stated claim.",
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
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The Fitting and Frattini subgroups of $S_3$: the zero or trivial specialization for “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” is resolved in step 1.1: “The subgroup $A_3$ is the unique Sylow $3$-subgroup, so $O_3(S_3)=A_3$. The three order-$2$ subgroups are conjugate, so no nontrivial $2$-subgroup is normal and $O_2(S_3)=1$. Therefore $F(S_3)=A_3$.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The Fitting and Frattini subgroups of $S_3$: the collapsed or coincident-input case admitted by the hypotheses for “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” is resolved in step 1.1: “The subgroup $A_3$ is the unique Sylow $3$-subgroup, so $O_3(S_3)=A_3$. The three order-$2$ subgroups are conjugate, so no nontrivial $2$-subgroup is normal and $O_2(S_3)=1$. Therefore $F(S_3)=A_3$.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-groups-of-order-thirty-have-a-normal-sylow-subgroup

```markdown
title: "Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple"

## Statement
Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple. See [[thm-cauchys-theorem-for-finite-groups]].
```

## DEPENDENCY: thm-classification-of-groups-of-order-pq

```markdown
title: "Classification of groups of order $pq$ for primes $p<q$"

## Statement
Let $p<q$ be primes.

- If $p\nmid(q-1)$, every group of order $pq$ is cyclic.
- If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$.
```

## DEPENDENCY: lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products

```markdown
title: "Actions changed by automorphisms of the kernel and complement give isomorphic semidirect products"

## Statement
Let $\alpha,β:H\to\operatorname{Aut}(N)$ be actions. If $u\in\operatorname{Aut}(N)$ and $v\in\operatorname{Aut}(H)$ satisfy

$$\beta_{v(h)}=u\alpha_hu^{-1}\qquad(h\in H),$$

then

$$N\rtimes_\alpha H\cong N\rtimes_\beta H$$

by $(n,h)\mapsto(u(n),v(h))$.
```

## DEPENDENCY: def-external-semidirect-product

```markdown
title: ' The external semidirect product $N\rtimes_\alpha H$'

## Definition
Let $N$ and $H$ be groups ([[def-group]]), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication

$$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr).$$

When the action is clear, the subscript is omitted.
```

## DEPENDENCY: thm-sylow-characterizations-of-finite-nilpotence

```markdown
title: "Sylow and maximal-subgroup characterizations of finite nilpotence"

## Statement
For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. See [[lem-finite-nilpotence-via-normal-sylow-subgroups]].
```

## DEPENDENCY: def-alternating-group

```markdown
title: 'The alternating group $A_n=\ker(\operatorname{sgn})$ of even permutations'

## Definition
For $n\in\mathbb N$, the **alternating group** is the kernel of the sign
homomorphism,

$$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$

Thus $A_n$ consists exactly of the even permutations. The subgroup and
normality assertions implicit in the word “group” follow from
[[thm-image-subgroup-and-kernel-normal]].
```

## DEPENDENCY: cor-sylow-subgroup-normal-iff-unique

```markdown
title: "A Sylow $p$-subgroup is normal if and only if it is unique"

## Statement
A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].
```

## DEPENDENCY: def-fitting-subgroup-of-a-finite-group

```markdown
title: "The Fitting subgroup $F(G)=\\prod_p O_p(G)$ of a finite group"

## Definition
For a finite group $G$, the **Fitting subgroup** is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.
```

## DEPENDENCY: def-frattini-subgroup-of-a-finite-group

```markdown
title: "The Frattini subgroup $\\Phi(G)$ as the intersection of the maximal subgroups of a finite group"

## Definition
For a finite group $G$, the **Frattini subgroup** is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$.
```

## DEPENDENCY: thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup

```markdown
title: "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group"

## Statement
For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. See [[def-fitting-subgroup-of-a-finite-group]].
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
