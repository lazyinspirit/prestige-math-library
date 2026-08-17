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
label: n-9

run: frontier-15
role: refuter
label: n-9
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

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: def-number-of-sylow-p-subgroups

```markdown
title: "The number $n_p(G)$ of Sylow $p$-subgroups"

## Definition
For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is nonzero.
```

## DEPENDENCY: thm-sylow-third-theorem

```markdown
title: "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$"

## Statement
Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$ See [[thm-sylow-second-theorem]].
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

## DEPENDENCY: cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types

```markdown
title: 'The conjugacy classes of $S_n$ are indexed by the tuples $(c_1,\ldots,c_n)$ with $\sum k c_k=n$'

## Statement
The conjugacy classes of $S_n$ are in bijection with the tuples of
nonnegative integers $(c_1,\ldots,c_n)$ satisfying
$$\sum_{k=1}^n kc_k=n.$$
For $n=0$, the unique empty tuple indexes the identity class of $S_0$.
```

## DEPENDENCY: cor-sylow-subgroup-normal-iff-unique

```markdown
title: "A Sylow $p$-subgroup is normal if and only if it is unique"

## Statement
A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].
```

## DEPENDENCY: def-external-semidirect-product

```markdown
title: ' The external semidirect product $N\rtimes_\alpha H$'

## Definition
Let $N$ and $H$ be groups ([[def-group]]), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication

$$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr).$$

When the action is clear, the subscript is omitted.
```

## DEPENDENCY: thm-z-mod-p-is-a-field

```markdown
title: "For every prime $p$, the two operations on $\\mathbb{Z}/p$ make it a field"

## Statement
For every prime $p$, the operations of addition and multiplication on
$\mathbb Z/p$ make it a field ([[def-field]]).
```
