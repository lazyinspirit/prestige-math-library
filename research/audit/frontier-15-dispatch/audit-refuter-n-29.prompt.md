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
label: n-29

run: frontier-15
role: refuter
label: n-29
# Risk-review refutation — 1 high/critical-tier items
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

## ITEM: fs-algebraic-closure-is-unique-up-to-unique-isomorphism

```markdown
---
id: fs-algebraic-closure-is-unique-up-to-unique-isomorphism
kind: false-statement
title: "FALSE: an algebraic closure is unique up to a unique base-field isomorphism"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-existence-of-algebraic-closures, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-algebraic-embedding-extension, cor-algebraic-closures-are-isomorphic-over-the-base, def-algebraic-closure, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

For any two algebraic closures of a field $F$, there is exactly one
$F$-isomorphism between them.

## Facts & Assumptions

**Given:** The axiom of Choice and the field $\mathbb Q$.

[L1] Assuming Choice, every field has an algebraic closure ([[thm-existence-of-algebraic-closures]]).

[L2] Embeddings of a simple extension correspond to the distinct roots of its minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Assuming Choice, a base embedding extends across an algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L4] Assuming Choice, any two algebraic closures of the same field are isomorphic over that field ([[cor-algebraic-closures-are-isomorphic-over-the-base]]).

[L5] An algebraic closure is algebraic over its base and algebraically closed ([[def-algebraic-closure]]).

[L6] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Refutation

**Proof technique:** direct.

1.1 Choose $\Omega$ by [L1]. The polynomial $x^2+1$ is irreducible over $\mathbb Q$ and has a root $a\in\Omega$ by [L5]. Its roots $a$ and $-a$ are distinct because $\mathbb Q$ has characteristic zero. By [L2], the assignment $a\mapsto-a$ gives a nonidentity $\mathbb Q$-embedding of $\mathbb Q(a)$ into $\Omega$. [L1, L2, L5, algebra]

2.1 Extend that embedding across the algebraic extension $\Omega/\mathbb Q(a)$ using [L3]. Its image $E$ is algebraically closed because it is isomorphic to $\Omega$. Every $b\in\Omega$ is algebraic over $\mathbb Q\subseteq E$ by [L5], so [L6] gives a minimal polynomial over $E$; it has a root in $E$ and is therefore linear. Thus the resulting embedding $\tau:\Omega\to\Omega$ is surjective, hence is a nonidentity $\mathbb Q$-automorphism with $\tau(a)=-a$. [step 1.1, L3, L5, L6]

3.1 The identity and $\tau$ are distinct $\mathbb Q$-isomorphisms from the same algebraic closure to itself. Therefore uniqueness of the base-field isomorphism is false, although existence is true by [L4]. [step 2.1, L4] ∎

```

### Recorded proof contract for fs-algebraic-closure-is-unique-up-to-unique-isomorphism

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-existence-of-algebraic-closures",
   "source_section": "Statement",
   "quote": "Assuming the Axiom of Choice, every field has an algebraic closure.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots",
   "source_section": "Statement",
   "quote": "Let $\\alpha$ be algebraic over $F$, and let $\\Omega$ be an algebraically closed\nfield containing $F$. Sending an $F$-embedding\n$\\sigma:F(\\alpha)\\to\\Omega$ to $\\sigma(\\alpha)$ is a bijection from the set of\nsuch embeddings to the set of distinct roots in $\\Omega$ of the minimal\npolynomial $m_\\alpha$. Consequently the number of embeddings is the number of\ndistinct roots of $m_\\alpha$, not the sum of their multiplicities.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-algebraic-embedding-extension",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\\Omega$ be\nalgebraically closed, and let $\\sigma:F\\to\\Omega$ be a field embedding. Then\n$\\sigma$ extends to a field embedding $\\widetilde\\sigma:K\\to\\Omega$. The proof\nuses Zorn's lemma.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "cor-algebraic-closures-are-isomorphic-over-the-base",
   "source_section": "Statement",
   "quote": "Assuming the Axiom of Choice, any two algebraic closures of a field $F$ are\n$F$-isomorphic. Such an isomorphism generally need not be unique.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-algebraic-closure",
   "source_section": "Definition",
   "quote": "An **algebraic closure** of a field $F$ is a field extension $\\overline F/F$\nthat is algebraic ([[def-algebraic-and-transcendental-elements]]) and whose\nfield $\\overline F$ is algebraically closed\n([[def-algebraically-closed-field]]). The notation $\\overline F$ denotes a\nchosen algebraic closure; it does not specify a preferred one or a preferred\nisomorphism between two choices.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-evaluation-kernel-and-minimal-polynomial",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and $a\\in K$. Evaluation is the unique\n$F$-algebra homomorphism\n$$\\operatorname{ev}_a:F[x]\\longrightarrow K,\\qquad f\\longmapsto f(a).$$\nIf $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a\nunique monic irreducible polynomial $m_a\\in F[x]$ such that\n$$\\ker(\\operatorname{ev}_a)=(m_a),$$\nand, for every $f\\in F[x]$,\n$$f(a)=0\\quad\\Longleftrightarrow\\quad m_a\\mid f.$$\nThe polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Choose $\\Omega$ by [L1]. The polynomial $x^2+1$ is irreducible over $\\mathbb Q$ and has a root $a\\in\\Omega$ by [L5]. Its roots $a$ and $-a$ are distinct because $\\mathbb Q$ has characteristic zero. By [L2], the assignment $a\\mapsto-a$ gives a nonidentity $\\mathbb Q$-embedding of $\\mathbb Q(a)$ into $\\Omega$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L5",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Extend that embedding across the algebraic extension $\\Omega/\\mathbb Q(a)$ using [L3]. Its image $E$ is algebraically closed because it is isomorphic to $\\Omega$. Every $b\\in\\Omega$ is algebraic over $\\mathbb Q\\subseteq E$ by [L5], so [L6] gives a minimal polynomial over $E$; it has a root in $E$ and is therefore linear. Thus the resulting embedding $\\tau:\\Omega\\to\\Omega$ is surjective, hence is a nonidentity $\\mathbb Q$-automorphism with $\\tau(a)=-a$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "L5",
    "L6"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The identity and $\\tau$ are distinct $\\mathbb Q$-isomorphisms from the same algebraic closure to itself. Therefore uniqueness of the base-field isomorphism is false, although existence is true by [L4].",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L4"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For FALSE: an algebraic closure is unique up to a unique base-field isomorphism, no possibly empty indexed operation occurs; the proof instead begins from In an algebraic closure of mathbb Q, choose a root a of x^2+1."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For FALSE: an algebraic closure is unique up to a unique base-field isomorphism, step 1.1 states: \"Choose $\\Omega$ by [L1]. The polynomial $x^2+1$ is irreducible over $\\mathbb Q$ and has a root $a\\in\\Omega$ by [L5]. Its roots $a$ and $-a$ are distinct because $\\mathbb Q$ has characteristic zero. By [L2], the assignment $a\\mapsto-a$ gives a nonidentity $\\mathbb Q$-embedding of $\\mathbb Q(a)$ into $\\Omega$.\" This is the final proof check that a root of x^2+1 is nonzero."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For FALSE: an algebraic closure is unique up to a unique base-field isomorphism, step 2.1 states: \"Extend that embedding across the algebraic extension $\\Omega/\\mathbb Q(a)$ using [L3]. Its image $E$ is algebraically closed because it is isomorphic to $\\Omega$. Every $b\\in\\Omega$ is algebraic over $\\mathbb Q\\subseteq E$ by [L5], so [L6] gives a minimal polynomial over $E$; it has a root in $E$ and is therefore linear. Thus the resulting embedding $\\tau:\\Omega\\to\\Omega$ is surjective, hence is a nonidentity $\\mathbb Q$-automorphism with $\\tau(a)=-a$.\" This is the final proof check that the identity and one nonidentity automorphism are exhibited."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For FALSE: an algebraic closure is unique up to a unique base-field isomorphism, step 1.1 states: \"Choose $\\Omega$ by [L1]. The polynomial $x^2+1$ is irreducible over $\\mathbb Q$ and has a root $a\\in\\Omega$ by [L5]. Its roots $a$ and $-a$ are distinct because $\\mathbb Q$ has characteristic zero. By [L2], the assignment $a\\mapsto-a$ gives a nonidentity $\\mathbb Q$-embedding of $\\mathbb Q(a)$ into $\\Omega$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For FALSE: an algebraic closure is unique up to a unique base-field isomorphism, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from In an algebraic closure of mathbb Q, choose a root a of x^2+1."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For FALSE: an algebraic closure is unique up to a unique base-field isomorphism, step 1.1 states: \"Choose $\\Omega$ by [L1]. The polynomial $x^2+1$ is irreducible over $\\mathbb Q$ and has a root $a\\in\\Omega$ by [L5]. Its roots $a$ and $-a$ are distinct because $\\mathbb Q$ has characteristic zero. By [L2], the assignment $a\\mapsto-a$ gives a nonidentity $\\mathbb Q$-embedding of $\\mathbb Q(a)$ into $\\Omega$.\" This is the final proof check that a closure root is selected before the simple-field embedding is extended."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim FALSE: an algebraic closure is unique up to a unique base-field isomorphism is not a biconditional, so no forward implication is asserted; the proof begins from In an algebraic closure of mathbb Q, choose a root a of x^2+1."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim FALSE: an algebraic closure is unique up to a unique base-field isomorphism is not a biconditional, so no reverse implication is asserted; the proof begins from In an algebraic closure of mathbb Q, choose a root a of x^2+1."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-existence-of-algebraic-closures

```markdown
title: "Assuming Choice, every field has an algebraic closure"

## Statement
Assuming the Axiom of Choice, every field has an algebraic closure.
```

## DEPENDENCY: thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots

```markdown
title: "$F$-embeddings of $F(\\alpha)$ into an algebraically closed field correspond to the distinct roots of $m_{\\alpha}$"

## Statement
Let $\alpha$ be algebraic over $F$, and let $\Omega$ be an algebraically closed
field containing $F$. Sending an $F$-embedding
$\sigma:F(\alpha)\to\Omega$ to $\sigma(\alpha)$ is a bijection from the set of
such embeddings to the set of distinct roots in $\Omega$ of the minimal
polynomial $m_\alpha$. Consequently the number of embeddings is the number of
distinct roots of $m_\alpha$, not the sum of their multiplicities.
```

## DEPENDENCY: thm-algebraic-embedding-extension

```markdown
title: "Assuming Choice, a base-field embedding extends across every algebraic extension"

## Statement
Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\Omega$ be
algebraically closed, and let $\sigma:F\to\Omega$ be a field embedding. Then
$\sigma$ extends to a field embedding $\widetilde\sigma:K\to\Omega$. The proof
uses Zorn's lemma.
```

## DEPENDENCY: cor-algebraic-closures-are-isomorphic-over-the-base

```markdown
title: "Assuming Choice, any two algebraic closures are base-isomorphic, generally nonuniquely"

## Statement
Assuming the Axiom of Choice, any two algebraic closures of a field $F$ are
$F$-isomorphic. Such an isomorphism generally need not be unique.
```

## DEPENDENCY: def-algebraic-closure

```markdown
title: "An algebraic closure of a field"

## Definition
An **algebraic closure** of a field $F$ is a field extension $\overline F/F$
that is algebraic ([[def-algebraic-and-transcendental-elements]]) and whose
field $\overline F$ is algebraically closed
([[def-algebraically-closed-field]]). The notation $\overline F$ denotes a
chosen algebraic closure; it does not specify a preferred one or a preferred
isomorphism between two choices.
```

## DEPENDENCY: thm-evaluation-kernel-and-minimal-polynomial

```markdown
title: 'The evaluation kernel and the unique monic irreducible minimal polynomial of an algebraic element'

## Statement
Let $K/F$ be a field extension and $a\in K$. Evaluation is the unique
$F$-algebra homomorphism
$$\operatorname{ev}_a:F[x]\longrightarrow K,\qquad f\longmapsto f(a).$$
If $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a
unique monic irreducible polynomial $m_a\in F[x]$ such that
$$\ker(\operatorname{ev}_a)=(m_a),$$
and, for every $f\in F[x]$,
$$f(a)=0\quad\Longleftrightarrow\quad m_a\mid f.$$
The polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.
```
