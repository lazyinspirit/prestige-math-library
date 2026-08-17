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
label: n-7

run: frontier-15
role: refuter
label: n-7
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

## ITEM: thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup

```markdown
---
id: thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup
kind: theorem
title: "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, lem-product-with-normal-subgroup, thm-left-coset-action-and-its-kernel, thm-image-subgroup-and-kernel-normal, thm-first-isomorphism-theorem-groups, cor-order-of-a-quotient-group, thm-lagrange, thm-number-of-bijections-of-a-finite-set, thm-classification-of-groups-of-order-pq, cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal, def-simple-group]
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

Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

[L4] Let $H\le G$. Left multiplication defines a transitive action on $G/H$, and the corresponding homomorphism $\rho:G\to\operatorname{Sym}(G/H)$ has $$\ker\rho=\operatorname{Core}_G(H)\le H.$$ ([[thm-left-coset-action-and-its-kernel]]).

[L5] The image of a group homomorphism is a subgroup and its kernel is a normal subgroup. For every group homomorphism $f:G\to H$, one has $\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$. ([[thm-image-subgroup-and-kernel-normal]]).

[L6] First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$. For every homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto $\operatorname{im}f$. ([[thm-first-isomorphism-theorem-groups]]).

[L7] Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group $G/N$ is finite and $$|G/N|=[G:N].$$ In particular, if $G$ is finite, then $$|G/N|=\frac{|G|}{|N|}.$$. ([[cor-order-of-a-quotient-group]]).

[L8] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L9] If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. ([[cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal]]).

[L10] A group $G$ is simple if $G\ne\{1\}$ and its only normal subgroups are $\{1\}$ and $G$, where normality is as in def-normal-subgroup. ([[def-simple-group]]).

[L11] If $H\le G$ and $G$ is finite, then $|G|=[G:H]|H|$; in particular $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L12] A set of cardinality $n$ has exactly $n!$ bijections to itself; in particular the symmetric group on three points has order $3!=6$. ([[thm-number-of-bijections-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 The nonunique counts $n_5=21$ and $n_7=15$ would already contribute $84+90$ distinct nonidentity elements, so at least one of the two Sylow subgroups is normal. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, given, algebra]

2.1 Let $P$ be the normal Sylow subgroup supplied by step 1.1 and let $Q$ be a Sylow subgroup for the other prime. By [L3], $H=PQ$ is a subgroup. Its multiplication map $P\times Q\to PQ$ has fibres indexed by $P\cap Q=1$, so $|H|=|P||Q|=35$. [L3, step 1.1, given, algebra]

3.1 The action on the three left cosets has kernel $K\subseteq H$. By [L6], $G/K$ is isomorphic to a subgroup of the symmetric group on three points, so [L11] and [L12] give $[G:K]\mid6$. Also [L7] and [L11] give $[G:K]\mid105$, while $K\le H$ gives $3=[G:H]\mid[G:K]$. Hence $[G:K]=3=[G:H]$, so $K=H$ and $H\trianglelefteq G$. [L4, L5, L6, L7, L11, L12, step 2.1, given, algebra]

4.1 The order-$pq$ classification [L8] makes $H$ cyclic, and its Sylow $5$- and $7$-subgroups are normal in $H$ and therefore normal in $G$ by [L9]. Either is a nontrivial proper normal subgroup of $G$, so [L10] also shows that $G$ is not simple. [L8, L9, L10, step 3.1, given] ∎

```

### Recorded proof contract for thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup

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
   "source": "lem-product-with-normal-subgroup",
   "source_section": "Statement",
   "quote": "If $H\\le G$ and $N\\mathrel{\\trianglelefteq}G$, then $HN$ is a subgroup and $H\\cap N\\mathrel{\\trianglelefteq}H$.\n\nHere $HN:=\\{hn:h\\in H,\\ n\\in N\\}$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-left-coset-action-and-its-kernel",
   "source_section": "Statement",
   "quote": "Let $H\\le G$. Left multiplication defines a transitive action of $G$ on the\ncoset set $G/H$ by\n\n$$g\\cdot(aH):=(ga)H.$$\n\nThe stabilizer of the point $H$ is $H$. The corresponding homomorphism\n$\\rho:G\\to\\operatorname{Sym}(G/H)$ has\n\n$$\\ker\\rho=\\operatorname{Core}_G(H).$$",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-image-subgroup-and-kernel-normal",
   "source_section": "Statement",
   "quote": "The image of a group homomorphism is a subgroup and its kernel is a normal subgroup.\n\nFor every group homomorphism $f:G\\to H$, one has\n$\\operatorname{im}f\\le H$ and $\\ker f\\mathrel{\\trianglelefteq}G$.",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-first-isomorphism-theorem-groups",
   "source_section": "Statement",
   "quote": "First isomorphism theorem for groups: $G/\\ker f\\cong\\operatorname{im}f$.\n\nFor every homomorphism $f:G\\to H$, the rule\n$g\\ker f\\mapsto f(g)$ is an isomorphism from $G/\\ker f$ onto\n$\\operatorname{im}f$.",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L7",
   "source": "cor-order-of-a-quotient-group",
   "source_section": "Statement",
   "quote": "Let $N\\mathrel{\\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group\n$G/N$ is finite and\n\n$$|G/N|=[G:N].$$\n\nIn particular, if $G$ is finite, then\n\n$$|G/N|=\\frac{|G|}{|N|}.$$",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L8",
   "source": "thm-classification-of-groups-of-order-pq",
   "source_section": "Statement",
   "quote": "Let $p<q$ be primes.\n\n- If $p\\nmid(q-1)$, every group of order $pq$ is cyclic.\n- If $p\\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\\rtimes C_p$.",
   "uses": [
    "1.1",
    "4.1"
   ]
  },
  {
   "fact": "L9",
   "source": "cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal",
   "source_section": "Statement",
   "quote": "If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$. See [[cor-sylow-subgroup-normal-iff-unique]].",
   "uses": [
    "1.1",
    "4.1"
   ]
  },
  {
   "fact": "L10",
   "source": "def-simple-group",
   "source_section": "Definition",
   "quote": "A group $G$ is **simple** if $G\\ne\\{1\\}$ and its only normal subgroups are\n$\\{1\\}$ and $G$, where normality is as in [[def-normal-subgroup]].",
   "uses": [
    "1.1",
    "4.1"
   ]
  },
  {
   "fact": "L11",
   "source": "thm-lagrange",
   "source_section": "Statement",
   "quote": "Let $G$ be a finite group and $H\\le G$. Then\n\n$$|G|=[G:H]\\,|H|.$$\n\nConsequently, under the canonical embedding $\\iota:\\mathbb N\\to\\mathbb Z$,\n$\\iota(|H|)$ divides $\\iota(|G|)$.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L12",
   "source": "thm-number-of-bijections-of-a-finite-set",
   "source_section": "Statement",
   "quote": "Let $A$ be a finite set with $n := \\lvert A\\rvert$ and write\n\n$$\\operatorname{Bij}(A) := \\{\\, f : A \\to A \\ :\\ f \\text{ is a bijection} \\,\\}.$$\n\nThen $\\operatorname{Bij}(A)$ is finite and $\\lvert\\operatorname{Bij}(A)\\rvert = n!$\n([[def-factorial-and-falling-factorial]]).\n\nMore generally, for finite sets $X$ and $Y$ write $\\operatorname{Bij}(X,Y)$ for\nthe set of bijections $X \\to Y$. If $\\lvert X\\rvert = \\lvert Y\\rvert = n$ then\n$\\operatorname{Bij}(X,Y)$ is finite with $n!$ elements, and if\n$\\lvert X\\rvert \\ne \\lvert Y\\rvert$ then $\\operatorname{Bij}(X,Y) = \\varnothing$.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The nonunique counts $n_5=21$ and $n_7=15$ would already contribute $84+90$ distinct nonidentity elements, so at least one of the two Sylow subgroups is normal.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "L6",
    "L7",
    "L8",
    "L9",
    "L10",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Let $P$ be the normal Sylow subgroup supplied by step 1.1 and let $Q$ be a Sylow subgroup for the other prime. By [L3], $H=PQ$ is a subgroup. Its multiplication map $P\\times Q\\to PQ$ has fibres indexed by $P\\cap Q=1$, so $|H|=|P||Q|=35$.",
   "step": "2.1",
   "inputs": [
    "L3",
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The action on the three left cosets has kernel $K\\subseteq H$. By [L6], $G/K$ is isomorphic to a subgroup of the symmetric group on three points, so [L11] and [L12] give $[G:K]\\mid6$. Also [L7] and [L11] give $[G:K]\\mid105$, while $K\\le H$ gives $3=[G:H]\\mid[G:K]$. Hence $[G:K]=3=[G:H]$, so $K=H$ and $H\\trianglelefteq G$.",
   "step": "3.1",
   "inputs": [
    "L4",
    "L5",
    "L6",
    "L7",
    "L11",
    "L12",
    "step 2.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "The order-$pq$ classification [L8] makes $H$ cyclic, and its Sylow $5$- and $7$-subgroups are normal in $H$ and therefore normal in $G$ by [L9]. Either is a nontrivial proper normal subgroup of $G$, so [L10] also shows that $G$ is not simple.",
   "step": "4.1",
   "inputs": [
    "L8",
    "L9",
    "L10",
    "step 3.1",
    "given"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-classification-of-groups-of-order-one-hundred-five

```markdown
---
id: cor-classification-of-groups-of-order-one-hundred-five
kind: corollary
title: "There are exactly two isomorphism classes of groups of order $105$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup, thm-sylow-first-theorem, lem-product-with-normal-subgroup, cor-prime-order-group-is-cyclic, thm-conjugation-is-an-automorphism, thm-automorphisms-form-a-group, thm-image-subgroup-and-kernel-normal, thm-automorphisms-of-a-finite-cyclic-group, cor-totient-at-one-and-at-a-prime, thm-lagrange, thm-internal-external-semidirect-product-equivalence, prop-semidirect-product-is-direct-iff-action-is-trivial, thm-classification-of-groups-of-order-pq, thm-order-of-element-in-direct-product, thm-classification-of-cyclic-groups]
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

Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\times(C_7\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly two isomorphism classes. See [[thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple. ([[thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup]]).

[L2] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L3] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

[L4] Let $G$ be a finite group such that the positive integer $|G|$ is prime. Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence generates $G$. In particular, $G$ is cyclic. ([[cor-prime-order-group-is-cyclic]]).

[L5] Conjugation $x\mapsto gxg^{-1}$ is an automorphism. For each $g\in G$, the map $c_g:G\to G$, $c_g(x)=gxg^{-1}$, is an automorphism. ([[thm-conjugation-is-an-automorphism]]).

[L6] The automorphisms of a group form a group under composition. ([[thm-automorphisms-form-a-group]]).

[L7] The image of a group homomorphism is a subgroup and its kernel is a normal subgroup. For every group homomorphism $f:G\to H$, one has $\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$. ([[thm-image-subgroup-and-kernel-normal]]).

[L8] For every $n\ge1$, $$\operatorname{Aut}(C_n)\cong(\mathbb Z/n)^\times.$$ If $C_n=\langle g\rangle$, the unit class $[a]$ corresponds to the automorphism $g\mapsto g^a$. ([[thm-automorphisms-of-a-finite-cyclic-group]]).

[L9] Euler's totient satisfies $\varphi(1)=1$. If $p$ is prime (def-prime), then $$\varphi(p)=p-1.$$. ([[cor-totient-at-one-and-at-a-prime]]).

[L10] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L11] Let $N,H\le G$. The conditions $$N\trianglelefteq G,\qquad G=NH,\qquad N\cap H=\{1\}$$ hold if and only if both of the following hold: conjugation $\alpha_h(n)=hnh^{-1}$ restricts to an action $\alpha:H\to\operatorname{Aut}(N)$, and the resulting map. ([[thm-internal-external-semidirect-product-equivalence]]).

[L12] The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$. ([[prop-semidirect-product-is-direct-iff-action-is-trivial]]).

[L13] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L14] If $g\in G$ and $h\in H$ have finite orders $m,n\ge1$, then in the external direct product $$\operatorname{ord}(g,h)=\operatorname{lcm}(m,n).$$ ([[thm-order-of-element-in-direct-product]]).

[L15] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: - if $g$ has infinite order, $G\cong(\mathbb Z,+)$; - if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$. ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** direct.

1.1 Let $N_5,N_7$ be the normal Sylow subgroups and let $P$ be Sylow of order $3$. Since $N_7$ is normal, $H=N_7P$ is a subgroup of order $21$; similarly $G=N_5H$ and $N_5\cap H=1$. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13, L14, L15, given, algebra]

2.1 Conjugation gives a homomorphism $H\to\operatorname{Aut}(N_5)$. Its image order divides $|H|=21$ and $|\operatorname{Aut}(C_5)|=4$, so the image is trivial. [step 1.1, given, algebra]

3.1 Thus $H$ centralizes $N_5$, and the internal product is $G\cong C_5\times H$. [step 1.1, step 2.1, given, algebra]

4.1 The order-$pq$ classification makes $H$ either $C_{21}$ or the unique nonabelian $C_7\rtimes C_3$. In the first case, generators of $C_5$ and $C_{21}$ combine to an element of order $\operatorname{lcm}(5,21)=105$, so $C_5\times H\cong C_{105}$. [step 3.1, given, algebra]

5.1 The two resulting groups are distinguished by abelianness, and exhaustiveness of the order-$21$ classification leaves no third case. This proves the stated claim. [step 3.1, step 4.1, given, algebra] ∎

```

### Recorded proof contract for cor-classification-of-groups-of-order-one-hundred-five

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup",
   "source_section": "Statement",
   "quote": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple. See [[thm-sylow-third-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-sylow-first-theorem",
   "source_section": "Statement",
   "quote": "Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-product-with-normal-subgroup",
   "source_section": "Statement",
   "quote": "If $H\\le G$ and $N\\mathrel{\\trianglelefteq}G$, then $HN$ is a subgroup and $H\\cap N\\mathrel{\\trianglelefteq}H$.\n\nHere $HN:=\\{hn:h\\in H,\\ n\\in N\\}$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "cor-prime-order-group-is-cyclic",
   "source_section": "Statement",
   "quote": "Let $G$ be a finite group such that the positive integer $\\iota(|G|)$ is prime.\nThen every $g\\ne e$ has order $|G|$, satisfies $\\langle g\\rangle=G$, and hence\ngenerates $G$. In particular, $G$ is cyclic.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-conjugation-is-an-automorphism",
   "source_section": "Statement",
   "quote": "Conjugation $x\\mapsto gxg^{-1}$ is an automorphism.\n\nFor each $g\\in G$, the map $c_g:G\\to G$, $c_g(x)=gxg^{-1}$, is an\nautomorphism.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-automorphisms-form-a-group",
   "source_section": "Statement",
   "quote": "The automorphisms of a group form a group under composition.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-image-subgroup-and-kernel-normal",
   "source_section": "Statement",
   "quote": "The image of a group homomorphism is a subgroup and its kernel is a normal subgroup.\n\nFor every group homomorphism $f:G\\to H$, one has\n$\\operatorname{im}f\\le H$ and $\\ker f\\mathrel{\\trianglelefteq}G$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L8",
   "source": "thm-automorphisms-of-a-finite-cyclic-group",
   "source_section": "Statement",
   "quote": "For every $n\\ge1$,\n\n$$\\operatorname{Aut}(C_n)\\cong(\\mathbb Z/n)^\\times.$$\n\nIf $C_n=\\langle g\\rangle$, the unit class $[a]$ corresponds to the automorphism $g\\mapsto g^a$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L9",
   "source": "cor-totient-at-one-and-at-a-prime",
   "source_section": "Statement",
   "quote": "Euler's totient satisfies $\\varphi(1)=1$. If $p$ is prime\n([[def-prime]]), then\n\n$$\\varphi(p)=p-1.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L10",
   "source": "thm-lagrange",
   "source_section": "Statement",
   "quote": "Let $G$ be a finite group and $H\\le G$. Then\n\n$$|G|=[G:H]\\,|H|.$$\n\nConsequently, under the canonical embedding $\\iota:\\mathbb N\\to\\mathbb Z$,\n$\\iota(|H|)$ divides $\\iota(|G|)$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L11",
   "source": "thm-internal-external-semidirect-product-equivalence",
   "source_section": "Statement",
   "quote": "Let $N,H\\le G$. The conditions\n\n$$N\\trianglelefteq G,\\qquad G=NH,\\qquad N\\cap H=\\{1\\}$$\n\nhold if and only if both of the following hold: conjugation $\\alpha_h(n)=hnh^{-1}$ restricts to an action $\\alpha:H\\to\\operatorname{Aut}(N)$, and the resulting map\n\n$$\\Phi:N\\rtimes_\\alpha H\\longrightarrow G,\\qquad (n,h)\\longmapsto nh$$\n\nis an isomorphism carrying the can",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L12",
   "source": "prop-semidirect-product-is-direct-iff-action-is-trivial",
   "source_section": "Statement",
   "quote": "The canonical factors of $N\\rtimes_\\alpha H$ form an internal direct product if and only if $\\alpha_h=\\operatorname{id}_N$ for every $h\\in H$. In that case $N\\rtimes_\\alpha H$ is the external direct product $N\\times H$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L13",
   "source": "thm-classification-of-groups-of-order-pq",
   "source_section": "Statement",
   "quote": "Let $p<q$ be primes.\n\n- If $p\\nmid(q-1)$, every group of order $pq$ is cyclic.\n- If $p\\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\\rtimes C_p$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L14",
   "source": "thm-order-of-element-in-direct-product",
   "source_section": "Statement",
   "quote": "Let $\\iota:\\mathbb N\\to\\mathbb Z$ be the canonical embedding. If $g\\in G$\nand $h\\in H$ have finite orders $m,n\\ge1$, then in the external direct product\n\n$$\\iota(\\operatorname{ord}(g,h))=\\operatorname{lcm}(\\iota(m),\\iota(n)).$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L15",
   "source": "thm-classification-of-cyclic-groups",
   "source_section": "Statement",
   "quote": "If $G=\\langle g\\rangle$ is cyclic, then exactly one of the following applies:\n\n- if $g$ has infinite order, $G\\cong(\\mathbb Z,+)$;\n- if $g$ has finite order $n$, necessarily $n\\ge1$, then $G\\cong(\\mathbb Z/n,+)$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $N_5,N_7$ be the normal Sylow subgroups and let $P$ be Sylow of order $3$. Since $N_7$ is normal, $H=N_7P$ is a subgroup of order $21$; similarly $G=N_5H$ and $N_5\\cap H=1$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "L6",
    "L7",
    "L8",
    "L9",
    "L10",
    "L11",
    "L12",
    "L13",
    "L14",
    "L15",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Conjugation gives a homomorphism $H\\to\\operatorname{Aut}(N_5)$. Its image order divides $|H|=21$ and $|\\operatorname{Aut}(C_5)|=4$, so the image is trivial.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus $H$ centralizes $N_5$, and the internal product is $G\\cong C_5\\times H$.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "The order-$pq$ classification makes $H$ either $C_{21}$ or the unique nonabelian $C_7\\rtimes C_3$. In the first case, generators of $C_5$ and $C_{21}$ combine to an element of order $\\operatorname{lcm}(5,21)=105$, so $C_5\\times H\\cong C_{105}$.",
   "step": "4.1",
   "inputs": [
    "step 3.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-5-1",
   "claim": "The two resulting groups are distinguished by abelianness, and exhaustiveness of the order-$21$ classification leaves no third case. This proves the stated claim.",
   "step": "5.1",
   "inputs": [
    "step 3.1",
    "step 4.1",
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
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "There are exactly two isomorphism classes of groups of order $105$: the zero or trivial specialization for “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” is resolved in step 2.1: “Conjugation gives a homomorphism $H\\to\\operatorname{Aut}(N_5)$. Its image order divides $|H|=21$ and $|\\operatorname{Aut}(C_5)|=4$, so the image is trivial.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "There are exactly two isomorphism classes of groups of order $105$: the collapsed or coincident-input case admitted by the hypotheses for “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” is resolved in step 2.1: “Conjugation gives a homomorphism $H\\to\\operatorname{Aut}(N_5)$. Its image order divides $|H|=21$ and $|\\operatorname{Aut}(C_5)|=4$, so the image is trivial.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-groups-of-order-forty-five-are-abelian

```markdown
---
id: thm-groups-of-order-forty-five-are-abelian
kind: theorem
title: "Every group of order $45$ is abelian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, lem-distinct-normal-sylow-subgroups-commute, cor-groups-of-order-p-squared-are-abelian, thm-internal-direct-product-recognition]
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

Every group of order $45$ is abelian. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] Normal Sylow subgroups for distinct primes centralize one another. ([[lem-distinct-normal-sylow-subgroups-commute]]).

[L4] If $p$ is prime and $G$ is a group of order $p^2$, then $G$ is abelian. ([[cor-groups-of-order-p-squared-are-abelian]]).

[L5] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

## Proof

**Proof technique:** direct.

1.1 Sylow III forces both the order-nine and order-five Sylow subgroups to be unique. [L1, L2, L3, L4, L5, given, algebra]

2.1 They commute, their product is the whole group, and both factors are abelian, so the internal direct product is abelian. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for thm-groups-of-order-forty-five-are-abelian

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
   "source": "lem-distinct-normal-sylow-subgroups-commute",
   "source_section": "Statement",
   "quote": "Normal Sylow subgroups for distinct primes centralize one another. See [[def-sylow-p-subgroup]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "cor-groups-of-order-p-squared-are-abelian",
   "source_section": "Statement",
   "quote": "If $p$ is prime and $G$ is a group of order $p^2$, then $G$ is abelian.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-internal-direct-product-recognition",
   "source_section": "Statement",
   "quote": "Let $N_0,\\ldots,N_{r-1}\\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\\in G$ has a unique expression $g=n_0\\cdots n_{r-1}$ with $n_i\\in N_i$; and the multiplication map $\\mu:\\prod_{i<r}N_i\\to G$ is an isomorphism. These statements include the empty family and the one-factor case.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Sylow III forces both the order-nine and order-five Sylow subgroups to be unique.",
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
   "claim": "They commute, their product is the whole group, and both factors are abelian, so the internal direct product is abelian. This proves the stated claim.",
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
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-sylow-third-theorem

```markdown
title: "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$"

## Statement
Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$ See [[thm-sylow-second-theorem]].
```

## DEPENDENCY: cor-sylow-subgroup-normal-iff-unique

```markdown
title: "A Sylow $p$-subgroup is normal if and only if it is unique"

## Statement
A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].
```

## DEPENDENCY: lem-product-with-normal-subgroup

```markdown
title: 'If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$'

## Statement
If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$.

Here $HN:=\{hn:h\in H,\ n\in N\}$.
```

## DEPENDENCY: thm-left-coset-action-and-its-kernel

```markdown
title: 'Left multiplication on $G/H$ is transitive, has stabiliser $H$ at $H$, and has kernel $\operatorname{Core}_G(H)$'

## Statement
Let $H\le G$. Left multiplication defines a transitive action of $G$ on the
coset set $G/H$ by

$$g\cdot(aH):=(ga)H.$$

The stabilizer of the point $H$ is $H$. The corresponding homomorphism
$\rho:G\to\operatorname{Sym}(G/H)$ has

$$\ker\rho=\operatorname{Core}_G(H).$$
```

## DEPENDENCY: thm-image-subgroup-and-kernel-normal

```markdown
title: 'The image of a group homomorphism is a subgroup and its kernel is a normal subgroup'

## Statement
The image of a group homomorphism is a subgroup and its kernel is a normal subgroup.

For every group homomorphism $f:G\to H$, one has
$\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$.
```

## DEPENDENCY: thm-first-isomorphism-theorem-groups

```markdown
title: 'First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$'

## Statement
First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$.

For every homomorphism $f:G\to H$, the rule
$g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto
$\operatorname{im}f$.
```

## DEPENDENCY: cor-order-of-a-quotient-group

```markdown
title: "If $[G:N]$ is finite then $|G/N|=[G:N]$; for finite $G$ this equals $|G|/|N|$"

## Statement
Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group
$G/N$ is finite and

$$|G/N|=[G:N].$$

In particular, if $G$ is finite, then

$$|G/N|=\frac{|G|}{|N|}.$$
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

## DEPENDENCY: thm-number-of-bijections-of-a-finite-set

```markdown
title: "A finite set $A$ with $\\lvert A\\rvert = n$ has exactly $n!$ bijections onto itself, and $n!$ bijections onto any set of the same cardinality"

## Statement
Let $A$ be a finite set with $n := \lvert A\rvert$ and write

$$\operatorname{Bij}(A) := \{\, f : A \to A \ :\ f \text{ is a bijection} \,\}.$$

Then $\operatorname{Bij}(A)$ is finite and $\lvert\operatorname{Bij}(A)\rvert = n!$
([[def-factorial-and-falling-factorial]]).

More generally, for finite sets $X$ and $Y$ write $\operatorname{Bij}(X,Y)$ for
the set of bijections $X \to Y$. If $\lvert X\rvert = \lvert Y\rvert = n$ then
$\operatorname{Bij}(X,Y)$ is finite with $n!$ elements, and if
$\lvert X\rvert \ne \lvert Y\rvert$ then $\operatorname{Bij}(X,Y) = \varnothing$.
```

## DEPENDENCY: thm-classification-of-groups-of-order-pq

```markdown
title: "Classification of groups of order $pq$ for primes $p<q$"

## Statement
Let $p<q$ be primes.

- If $p\nmid(q-1)$, every group of order $pq$ is cyclic.
- If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$.
```

## DEPENDENCY: cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal

```markdown
title: "A normal Sylow subgroup of a normal subgroup is normal in the whole group"

## Statement
If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. See [[cor-sylow-subgroup-normal-iff-unique]].
```

## DEPENDENCY: def-simple-group

```markdown
title: 'Simple groups'

## Definition
A group $G$ is **simple** if $G\ne\{1\}$ and its only normal subgroups are
$\{1\}$ and $G$, where normality is as in [[def-normal-subgroup]].
```

## DEPENDENCY: thm-sylow-first-theorem

```markdown
title: "Sylow I: every finite group has a Sylow $p$-subgroup"

## Statement
Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].
```

## DEPENDENCY: cor-prime-order-group-is-cyclic

```markdown
title: "A finite group of prime order is cyclic and every nonidentity element generates it"

## Statement
Let $G$ be a finite group such that the positive integer $\iota(|G|)$ is prime.
Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence
generates $G$. In particular, $G$ is cyclic.
```

## DEPENDENCY: thm-conjugation-is-an-automorphism

```markdown
title: 'Conjugation $x\mapsto gxg^{-1}$ is an automorphism'

## Statement
Conjugation $x\mapsto gxg^{-1}$ is an automorphism.

For each $g\in G$, the map $c_g:G\to G$, $c_g(x)=gxg^{-1}$, is an
automorphism.
```

## DEPENDENCY: thm-automorphisms-form-a-group

```markdown
title: 'The automorphisms of a group form a group under composition'

## Statement
The automorphisms of a group form a group under composition.
```

## DEPENDENCY: thm-automorphisms-of-a-finite-cyclic-group

```markdown
title: ' $\operatorname{Aut}(C_n)\cong(\mathbb Z/n\mathbb Z)^\times$'

## Statement
For every $n\ge1$,

$$\operatorname{Aut}(C_n)\cong(\mathbb Z/n)^\times.$$

If $C_n=\langle g\rangle$, the unit class $[a]$ corresponds to the automorphism $g\mapsto g^a$.
```

## DEPENDENCY: cor-totient-at-one-and-at-a-prime

```markdown
title: "$\\varphi(1)=1$, and $\\varphi(p)=p-1$ for every prime $p$"

## Statement
Euler's totient satisfies $\varphi(1)=1$. If $p$ is prime
([[def-prime]]), then

$$\varphi(p)=p-1.$$
```

## DEPENDENCY: thm-internal-external-semidirect-product-equivalence

```markdown
title: ' Recognition theorem: $G=NH$ with $N\trianglelefteq G$, $N\cap H=1$ exactly realises an external semidirect product'

## Statement
Let $N,H\le G$. The conditions

$$N\trianglelefteq G,\qquad G=NH,\qquad N\cap H=\{1\}$$

hold if and only if both of the following hold: conjugation $\alpha_h(n)=hnh^{-1}$ restricts to an action $\alpha:H\to\operatorname{Aut}(N)$, and the resulting map

$$\Phi:N\rtimes_\alpha H\longrightarrow G,\qquad (n,h)\longmapsto nh$$

is an isomorphism carrying the canonical factors onto $N$ and $H$.

The first clause of the right-hand side is what makes $N\rtimes_\alpha H$ defined at all: without normality of $N$, the map $\alpha_h$ need not send $N$ into $N$.
```

## DEPENDENCY: prop-semidirect-product-is-direct-iff-action-is-trivial

```markdown
title: "The canonical semidirect decomposition is an internal direct product if and only if the defining action is trivial"

## Statement
The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$.
```

## DEPENDENCY: thm-order-of-element-in-direct-product

```markdown
title: "If $g$ and $h$ have finite orders $m$ and $n$, then $\\iota(\\operatorname{ord}(g,h))=\\operatorname{lcm}(\\iota(m),\\iota(n))$ in $G\\times H$"

## Statement
Let $\iota:\mathbb N\to\mathbb Z$ be the canonical embedding. If $g\in G$
and $h\in H$ have finite orders $m,n\ge1$, then in the external direct product

$$\iota(\operatorname{ord}(g,h))=\operatorname{lcm}(\iota(m),\iota(n)).$$
```

## DEPENDENCY: thm-classification-of-cyclic-groups

```markdown
title: "Every cyclic group is isomorphic to $(\\mathbb Z,+)$ or to $(\\mathbb Z/n,+)$ for its finite order $n\\ge1$"

## Statement
If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies:

- if $g$ has infinite order, $G\cong(\mathbb Z,+)$;
- if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$.
```

## DEPENDENCY: lem-distinct-normal-sylow-subgroups-commute

```markdown
title: "Distinct normal Sylow subgroups centralize one another"

## Statement
Normal Sylow subgroups for distinct primes centralize one another. See [[def-sylow-p-subgroup]].
```

## DEPENDENCY: cor-groups-of-order-p-squared-are-abelian

```markdown
title: "Every group of order $p^2$, for prime $p$, is abelian"

## Statement
If $p$ is prime and $G$ is a group of order $p^2$, then $G$ is abelian.
```

## DEPENDENCY: thm-internal-direct-product-recognition

```markdown
title: "Internal direct products are external direct products, equivalently every element has a unique factorisation"

## Statement
Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case.
```
