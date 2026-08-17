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
label: n-25

run: frontier-15
role: refuter
label: n-25
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

## ITEM: thm-separable-closures-exist-and-are-isomorphic-over-the-base

```markdown
---
id: thm-separable-closures-exist-and-are-isomorphic-over-the-base
kind: theorem
title: "Assuming Choice, separable closures exist and are base-isomorphic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-of-algebraic-closures, def-separable-closure-in-an-algebraic-extension, thm-separability-is-transitive, lem-polynomial-gcd-is-stable-under-field-extension, thm-finitely-generated-algebraic-extensions-are-finite, thm-algebraic-embedding-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3, 5, and 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, every field $F$ has a **separable closure**: a
separable algebraic extension $F^{\mathrm{sep}}/F$ in which every nonconstant
separable polynomial splits. Any two separable closures are $F$-isomorphic,
generally nonuniquely.

## Facts & Assumptions

**Given:** A field $F$ and the Axiom of Choice.

[L1] Assuming Choice, every field has an algebraic closure ([[thm-existence-of-algebraic-closures]]).

[L2] Inside an algebraic extension, the elements separable over the base form the relative separable closure ([[def-separable-closure-in-an-algebraic-extension]]).

[L3] Separability is transitive in algebraic towers ([[thm-separability-is-transitive]]).

[L4] Polynomial gcd is unchanged after extending the coefficient field ([[lem-polynomial-gcd-is-stable-under-field-extension]]).

[L5] Assuming Choice, a base embedding extends across an algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L6] A field generated by finitely many algebraic elements is finite over its base ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

## Proof

**Proof technique:** direct.

1.1 Choose an algebraic closure $\Omega/F$ by [L1] and let $S=\Omega_s$ be its relative separable closure from [L2]. Then $S/F$ is algebraic and separable. [L1, L2, choose]

1.2 Let $S_1,S_2$ be separable closures and choose an algebraic closure $\Omega_2$ of $S_2$ using [L1]. By [L5], the identity of $F$ extends to an embedding $\sigma:S_1\to\Omega_2$. Images of elements separable over $F$ remain separable. Conversely, if $a\in\Omega_2$ is separable over $F$, then its minimal polynomial over $S_2$ divides its separable minimal polynomial over $F$, so it is separable over the separably closed field $S_2$ and therefore lies in $S_2$. Hence $\sigma(S_1)\subseteq S_2$. [L1, L5, algebra]

2.1 Let $q\in S[x]$ be nonconstant and separable. Its finitely many coefficients generate a finite subextension $E/F$ of $S/F$ by [L6]. By [L4], $q$ is already separable over $E$. Each root $a\in\Omega$ is separable over $E$, while $E/F$ is separable; [L3] makes $a$ separable over $F$, so $a\in S$. Thus $q$ splits in $S$. [step 1.1, L2, L3, L4, L6]

2.2 The image $\sigma(S_1)$ is separably closed. For $a\in S_2$, its minimal polynomial over $\sigma(S_1)$ divides its separable minimal polynomial over $F$, so it is separable over $\sigma(S_1)$. Separable closedness therefore forces $a$ into the image. Thus $\sigma:S_1\to S_2$ is an $F$-isomorphism. The construction does not assert uniqueness. [step 1.2, algebra]

3.1 Steps 1.1 and 2.1 give existence, while steps 1.2 and 2.2 give base-field isomorphism of any two separable closures. [step 1.1, step 2.1, step 1.2, step 2.2] ∎

```

### Recorded proof contract for thm-separable-closures-exist-and-are-isomorphic-over-the-base

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-existence-of-algebraic-closures",
   "source_section": "Statement",
   "quote": "Assuming the Axiom of Choice, every field has an algebraic closure.",
   "uses": [
    "1.1",
    "1.2"
   ]
  },
  {
   "fact": "L2",
   "source": "def-separable-closure-in-an-algebraic-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be algebraic. The **separable closure of $F$ in $K$** is\n\n$$K_s:=\\{a\\in K:a\\text{ is separable over }F\\}.$$\n\nThis is an intermediate field by\n[[thm-separable-elements-form-an-intermediate-field]]. It is the largest\nintermediate extension of $K/F$ that is separable over $F$: any separable\nintermediate field consists entirely of elements in the displayed set.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-separability-is-transitive",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be algebraic field extensions. If $K/F$ and\n$L/K$ are separable, then $L/F$ is separable.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-polynomial-gcd-is-stable-under-field-extension",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq E$ be a field extension and let $f,g\\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-algebraic-embedding-extension",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\\Omega$ be\nalgebraically closed, and let $\\sigma:F\\to\\Omega$ be a field embedding. Then\n$\\sigma$ extends to a field embedding $\\widetilde\\sigma:K\\to\\Omega$. The proof\nuses Zorn's lemma.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Choose an algebraic closure $\\Omega/F$ by [L1] and let $S=\\Omega_s$ be its relative separable closure from [L2]. Then $S/F$ is algebraic and separable.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "choose"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Let $S_1,S_2$ be separable closures and choose an algebraic closure $\\Omega_2$ of $S_2$ by [L1]. By [L5], extend the identity of $F$ to $\\sigma:S_1\\to\\Omega_2$. Images of $F$-separable elements stay $F$-separable; any $a\\in\\Omega_2$ separable over $F$ is separable over the separably closed field $S_2$ and therefore lies in $S_2$. Hence $\\sigma(S_1)\\subseteq S_2$.",
   "step": "1.2",
   "inputs": [
    "L1",
    "L5"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Let $q\\in S[x]$ be nonconstant and separable. Its finitely many coefficients generate a finite subextension $E/F$ by [L6]. Gcd stability [L4] makes $q$ separable over $E$. Each root in $\\Omega$ is separable over $E$, and transitivity [L3] with separable $E/F$ puts every root in $S$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2",
    "L3",
    "L4",
    "L6"
   ]
  },
  {
   "id": "step-2-2",
   "claim": "The image $\\sigma(S_1)$ is separably closed. For $a\\in S_2$, its minimal polynomial over the image divides its separable minimal polynomial over $F$, hence is separable; separable closedness forces $a$ into the image. Thus $\\sigma:S_1\\to S_2$ is an $F$-isomorphism, with no uniqueness claim.",
   "step": "2.2",
   "inputs": [
    "step 1.2",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Steps 1.1 and 2.1 give existence, while steps 1.2 and 2.2 give base-field isomorphism of any two separable closures.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "step 1.2",
    "step 2.2"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "The only coefficient set comes from a nonconstant polynomial and is finite but nonempty; no empty indexed construction occurs."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Only nonconstant separable polynomials are tested, and no denominator or unrestricted zero parameter occurs."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For a linear polynomial, step 2.1 places its sole root in $S$; if $F$ is already separably closed, the construction gives $S=F$."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Step 2.1 uses the separable-polynomial hypothesis to exclude repeated roots; step 1.1 includes the already separably closed and trivial cases."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "All parameters are fields, polynomials, and finite coefficient sets; there is no ordered or limiting endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "The Statement makes Choice explicit; steps 1.1 and 1.2 use [L1] for the algebraic-closure choices and step 1.2 uses [L5] for embedding extension."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement asserts existence and isomorphism, not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement asserts existence and isomorphism, not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-separable-degree-is-the-degree-of-the-separable-closure

```markdown
---
id: thm-separable-degree-is-the-degree-of-the-separable-closure
kind: theorem
title: "For a finite extension, $[K:F]_s=[K_s:F]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-closure-in-an-algebraic-extension, thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure, thm-purely-inseparable-extension-characterizations, thm-finite-extension-is-separable-iff-separable-degree-is-full, thm-multiplicativity-of-separable-degree]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $K/F$ is finite and $K_s$ is the separable closure of $F$ in $K$, then

$$[K:F]_s=[K_s:F].$$

## Facts & Assumptions

**Given:** A finite extension $K/F$ and its relative separable closure $K_s$.

[L1] The field $K_s$ consists of the elements separable over $F$ ([[def-separable-closure-in-an-algebraic-extension]]).

[L2] The extension $K/K_s$ is purely inseparable ([[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]).

[L3] A finite purely inseparable extension has separable degree one ([[thm-purely-inseparable-extension-characterizations]]).

[L4] A finite separable extension has full separable degree ([[thm-finite-extension-is-separable-iff-separable-degree-is-full]]).

[L5] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

## Proof

**Proof technique:** direct.

1.1 The finite extension $K_s/F$ is separable by [L1], so [L4] gives $[K_s:F]_s=[K_s:F]$. [L1, L4]

1.2 By [L2] and [L3], one has $[K:K_s]_s=1$. [L2, L3]

2.1 Multiplicativity [L5] in $F\subseteq K_s\subseteq K$ gives $[K:F]_s=[K:K_s]_s[K_s:F]_s=[K_s:F]$. This includes $K_s=F$. [step 1.1, step 1.2, L5, algebra] ∎

```

### Recorded proof contract for thm-separable-degree-is-the-degree-of-the-separable-closure

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-separable-closure-in-an-algebraic-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be algebraic. The **separable closure of $F$ in $K$** is\n\n$$K_s:=\\{a\\in K:a\\text{ is separable over }F\\}.$$\n\nThis is an intermediate field by\n[[thm-separable-elements-form-an-intermediate-field]]. It is the largest\nintermediate extension of $K/F$ that is separable over $F$: any separable\nintermediate field consists entirely of elements in the displayed set.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure",
   "source_section": "Statement",
   "quote": "Let $K/F$ be algebraic and let $K_s$ be the separable closure of $F$ in $K$.\nThen $K/K_s$ is purely inseparable.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-purely-inseparable-extension-characterizations",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq\\Omega$, where $K/F$ is algebraic and $\\Omega/F$ is\nan algebraic closure. The following are equivalent:\n\n1. $K/F$ is purely inseparable;\n2. every $\\alpha\\in K$ has exactly one distinct conjugate over $F$.\n\nIf $K/F$ is finite, these are also equivalent to the inclusion\n$K\\hookrightarrow\\Omega$ being the only $F$-embedding of $K$ into $\\Omega$,\nand to $[K:F]_s=1$. Assuming the Axiom of Choice, the same unique-embedding\ncriterion is equivalent to conditions 1 and 2 for arbitrary algebraic $K/F$. In\ncharacteristic $p>0$, they are equivalent elementwise to the minimal polynomial\nof each $\\alpha$ having the form $x^{p^e}-a$, or to\n$\\alpha^{p^e}\\in F$ for some $e\\ge0$. In characteristic zero they force\n$K=F$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-finite-extension-is-separable-iff-separable-degree-is-full",
   "source_section": "Statement",
   "quote": "A finite extension $K/F$ is separable if and only if\n$[K:F]_s=[K:F]$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-multiplicativity-of-separable-degree",
   "source_section": "Statement",
   "quote": "For every finite tower $F\\subseteq K\\subseteq L$,\n\n$$[L:F]_s=[L:K]_s[K:F]_s.$$",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The finite extension $K_s/F$ is separable by [L1], so [L4] gives $[K_s:F]_s=[K_s:F]$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L4"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "By [L2] and [L3], one has $[K:K_s]_s=1$.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Multiplicativity [L5] in $F\\subseteq K_s\\subseteq K$ gives $[K:F]_s=[K:K_s]_s[K_s:F]_s=[K_s:F]$. This includes $K_s=F$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "L5",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For For a finite extension, [K:F]_s=[K_s:F], no possibly empty indexed operation occurs; the proof instead begins from The finite extension K_s/F is separable and therefore has full separable degree."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For For a finite extension, [K:F]_s=[K_s:F], the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from The finite extension K_s/F is separable and therefore has full separable degree."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For For a finite extension, [K:F]_s=[K_s:F], step 1.2 states: \"By [L2] and [L3], one has $[K:K_s]_s=1$.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For For a finite extension, [K:F]_s=[K_s:F], step 1.1 states: \"The finite extension $K_s/F$ is separable by [L1], so [L4] gives $[K_s:F]_s=[K_s:F]$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For For a finite extension, [K:F]_s=[K_s:F], every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from The finite extension K_s/F is separable and therefore has full separable degree."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For For a finite extension, [K:F]_s=[K_s:F], only supplied data are used and no unproved nonempty selection occurs; the proof begins from The finite extension K_s/F is separable and therefore has full separable degree."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim For a finite extension, [K:F]_s=[K_s:F] is not a biconditional, so no forward implication is asserted; the proof begins from The finite extension K_s/F is separable and therefore has full separable degree."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim For a finite extension, [K:F]_s=[K_s:F] is not a biconditional, so no reverse implication is asserted; the proof begins from The finite extension K_s/F is separable and therefore has full separable degree."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-degree-factors-into-separable-and-inseparable-degrees

```markdown
---
id: cor-degree-factors-into-separable-and-inseparable-degrees
kind: corollary
title: "$[K:F]=[K:F]_s[K:F]_i$, and in positive characteristic the inseparable degree is a power of $p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inseparable-degree, thm-separable-degree-is-the-degree-of-the-separable-closure, thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure, cor-finite-purely-inseparable-extensions-have-prime-power-degree, thm-tower-law-for-finite-field-extensions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

For every finite extension $K/F$,

$$[K:F]=[K:F]_s[K:F]_i.$$

If $\operatorname{char}F=p>0$, then $[K:F]_i$ is a power of $p$. In
characteristic zero it is one.

## Facts & Assumptions

**Given:** A finite extension $K/F$ with relative separable closure $K_s$.

[L1] Inseparable degree is the quotient $[K:F]/[K:F]_s$ ([[def-inseparable-degree]]).

[L2] One has $[K:F]_s=[K_s:F]$ ([[thm-separable-degree-is-the-degree-of-the-separable-closure]]).

[L3] The extension $K/K_s$ is purely inseparable ([[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]).

[L4] A finite purely inseparable extension in characteristic $p$ has $p$-power degree ([[cor-finite-purely-inseparable-extensions-have-prime-power-degree]]).

[L5] Ordinary degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

## Proof

**Proof technique:** direct.

1.1 The displayed factorization is the defining equality in [L1] after multiplying by $[K:F]_s$. [L1, algebra]

2.1 By [L5] and [L2], $[K:F]=[K:K_s][K_s:F]=[K:K_s][K:F]_s$, so comparison with step 1.1 gives $[K:F]_i=[K:K_s]$. [L2, L5, algebra]

3.1 In characteristic $p>0$, [L3] and [L4] make this last degree a power of $p$. In characteristic zero, $K_s=K$, so it is one. [step 2.1, L3, L4] ∎

```

### Recorded proof contract for cor-degree-factors-into-separable-and-inseparable-degrees

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-inseparable-degree",
   "source_section": "Definition",
   "quote": "For a finite extension $K/F$ ([[def-extension-degree-and-finite-extension]]),\nthe **inseparable degree** is the natural number\n\n$$[K:F]_i:=\\frac{[K:F]}{[K:F]_s}.$$\n\nThe quotient is an integer because\n[[thm-separable-degree-divides-extension-degree]] proves that the separable\ndegree divides the ordinary degree.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-separable-degree-is-the-degree-of-the-separable-closure",
   "source_section": "Statement",
   "quote": "If $K/F$ is finite and $K_s$ is the separable closure of $F$ in $K$, then\n\n$$[K:F]_s=[K_s:F].$$",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure",
   "source_section": "Statement",
   "quote": "Let $K/F$ be algebraic and let $K_s$ be the separable closure of $F$ in $K$.\nThen $K/K_s$ is purely inseparable.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L4",
   "source": "cor-finite-purely-inseparable-extensions-have-prime-power-degree",
   "source_section": "Statement",
   "quote": "If $K/F$ is a finite purely inseparable extension of characteristic $p>0$, then\n$[K:F]=p^r$ for some $r\\in\\mathbb N$. The trivial extension gives $r=0$.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The displayed factorization is the defining equality in [L1] after multiplying by $[K:F]_s$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "By [L5] and [L2], $[K:F]=[K:K_s][K_s:F]=[K:K_s][K:F]_s$, so comparison with step 1.1 gives $[K:F]_i=[K:K_s]$.",
   "step": "2.1",
   "inputs": [
    "L2",
    "L5",
    "algebra",
    "step 1.1"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "In characteristic $p>0$, [L3] and [L4] make this last degree a power of $p$. In characteristic zero, $K_s=K$, so it is one.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L3",
    "L4"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For [K:F]=[K:F]_s[K:F]_i, and in positive characteristic the inseparable degree is a power of p, no possibly empty indexed operation occurs; the proof instead begins from The factorization is the definition after divisibility."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For [K:F]=[K:F]_s[K:F]_i, and in positive characteristic the inseparable degree is a power of p, step 3.1 states: \"In characteristic $p>0$, [L3] and [L4] make this last degree a power of $p$. In characteristic zero, $K_s=K$, so it is one.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For [K:F]=[K:F]_s[K:F]_i, and in positive characteristic the inseparable degree is a power of p, step 3.1 states: \"In characteristic $p>0$, [L3] and [L4] make this last degree a power of $p$. In characteristic zero, $K_s=K$, so it is one.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For [K:F]=[K:F]_s[K:F]_i, and in positive characteristic the inseparable degree is a power of p, step 3.1 states: \"In characteristic $p>0$, [L3] and [L4] make this last degree a power of $p$. In characteristic zero, $K_s=K$, so it is one.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For [K:F]=[K:F]_s[K:F]_i, and in positive characteristic the inseparable degree is a power of p, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from The factorization is the definition after divisibility."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For [K:F]=[K:F]_s[K:F]_i, and in positive characteristic the inseparable degree is a power of p, only supplied data are used and no unproved nonempty selection occurs; the proof begins from The factorization is the definition after divisibility."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim [K:F]=[K:F]_s[K:F]_i, and in positive characteristic the inseparable degree is a power of p is not a biconditional, so no forward implication is asserted; the proof begins from The factorization is the definition after divisibility."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim [K:F]=[K:F]_s[K:F]_i, and in positive characteristic the inseparable degree is a power of p is not a biconditional, so no reverse implication is asserted; the proof begins from The factorization is the definition after divisibility."
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

## DEPENDENCY: def-separable-closure-in-an-algebraic-extension

```markdown
title: "The separable closure of the base inside an algebraic extension"

## Definition
Let $K/F$ be algebraic. The **separable closure of $F$ in $K$** is

$$K_s:=\{a\in K:a\text{ is separable over }F\}.$$

This is an intermediate field by
[[thm-separable-elements-form-an-intermediate-field]]. It is the largest
intermediate extension of $K/F$ that is separable over $F$: any separable
intermediate field consists entirely of elements in the displayed set.
```

## DEPENDENCY: thm-separability-is-transitive

```markdown
title: "Separability is transitive in towers of algebraic extensions"

## Statement
Let $F\subseteq K\subseteq L$ be algebraic field extensions. If $K/F$ and
$L/K$ are separable, then $L/F$ is separable.
```

## DEPENDENCY: lem-polynomial-gcd-is-stable-under-field-extension

```markdown
title: 'The monic gcd of two base-field polynomials is unchanged after extending the coefficient field'

## Statement
Let $F\subseteq E$ be a field extension and let $f,g\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.
```

## DEPENDENCY: thm-finitely-generated-algebraic-extensions-are-finite

```markdown
title: "An extension generated by finitely many algebraic elements is finite"

## Statement
If $a_1,\ldots,a_r$ are algebraic over $F$, then $F(a_1,\ldots,a_r)/F$ is finite.
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

## DEPENDENCY: thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure

```markdown
title: "An algebraic extension is purely inseparable over its separable closure"

## Statement
Let $K/F$ be algebraic and let $K_s$ be the separable closure of $F$ in $K$.
Then $K/K_s$ is purely inseparable.
```

## DEPENDENCY: thm-purely-inseparable-extension-characterizations

```markdown
title: "Pure inseparability and its conjugate, embedding, and separable-degree criteria"

## Statement
Let $F\subseteq K\subseteq\Omega$, where $K/F$ is algebraic and $\Omega/F$ is
an algebraic closure. The following are equivalent:

1. $K/F$ is purely inseparable;
2. every $\alpha\in K$ has exactly one distinct conjugate over $F$.

If $K/F$ is finite, these are also equivalent to the inclusion
$K\hookrightarrow\Omega$ being the only $F$-embedding of $K$ into $\Omega$,
and to $[K:F]_s=1$. Assuming the Axiom of Choice, the same unique-embedding
criterion is equivalent to conditions 1 and 2 for arbitrary algebraic $K/F$. In
characteristic $p>0$, they are equivalent elementwise to the minimal polynomial
of each $\alpha$ having the form $x^{p^e}-a$, or to
$\alpha^{p^e}\in F$ for some $e\ge0$. In characteristic zero they force
$K=F$.
```

## DEPENDENCY: thm-finite-extension-is-separable-iff-separable-degree-is-full

```markdown
title: "A finite extension is separable if and only if $[K:F]_s=[K:F]$"

## Statement
A finite extension $K/F$ is separable if and only if
$[K:F]_s=[K:F]$.
```

## DEPENDENCY: thm-multiplicativity-of-separable-degree

```markdown
title: "Separable degree is multiplicative in finite towers: $[L:F]_s=[L:K]_s[K:F]_s$"

## Statement
For every finite tower $F\subseteq K\subseteq L$,

$$[L:F]_s=[L:K]_s[K:F]_s.$$
```

## DEPENDENCY: def-inseparable-degree

```markdown
title: "The inseparable degree $[K:F]_i=[K:F]/[K:F]_s$ of a finite extension"

## Definition
For a finite extension $K/F$ ([[def-extension-degree-and-finite-extension]]),
the **inseparable degree** is the natural number

$$[K:F]_i:=\frac{[K:F]}{[K:F]_s}.$$

The quotient is an integer because
[[thm-separable-degree-divides-extension-degree]] proves that the separable
degree divides the ordinary degree.
```

## DEPENDENCY: cor-finite-purely-inseparable-extensions-have-prime-power-degree

```markdown
title: "A finite purely inseparable extension in characteristic $p$ has degree a power of $p$"

## Statement
If $K/F$ is a finite purely inseparable extension of characteristic $p>0$, then
$[K:F]=p^r$ for some $r\in\mathbb N$. The trivial extension gives $r=0$.
```

## DEPENDENCY: thm-tower-law-for-finite-field-extensions

```markdown
title: "Tower law for finite extensions: $[L:F]=[L:K][K:F]$"

## Statement
Let $F\subseteq K\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and

$$[L:F]=[L:K][K:F].$$
```
