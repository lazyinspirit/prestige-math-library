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
label: rr-10

run: frontier-15
role: refuter
label: rr-10
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

## ITEM: cor-algebraic-extensions-of-perfect-fields-are-separable

```markdown
---
id: cor-algebraic-extensions-of-perfect-fields-are-separable
kind: corollary
title: "Every algebraic extension of a perfect field is separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perfect-field, def-separable-elements-and-separable-extensions, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $K/F$ is algebraic and $F$ is perfect, then $K/F$ is separable.

## Facts & Assumptions

**Given:** An algebraic extension $K/F$ with $F$ perfect.

[L1] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L2] Every nonconstant irreducible polynomial over a perfect field is separable ([[def-perfect-field]]).

[L3] An extension is separable when every one of its elements has separable minimal polynomial over the base ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 For each $\alpha\in K$, [L1] supplies its irreducible minimal polynomial over $F$, and [L2] makes that polynomial separable. [L1, L2]

2.1 Thus every element of $K$ is separable over $F$, so $K/F$ is separable by [L3]. [step 1.1, L3] ∎

```

### Recorded proof contract for cor-algebraic-extensions-of-perfect-fields-are-separable

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-evaluation-kernel-and-minimal-polynomial",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and $a\\in K$. Evaluation is the unique\n$F$-algebra homomorphism\n$$\\operatorname{ev}_a:F[x]\\longrightarrow K,\\qquad f\\longmapsto f(a).$$\nIf $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a\nunique monic irreducible polynomial $m_a\\in F[x]$ such that\n$$\\ker(\\operatorname{ev}_a)=(m_a),$$\nand, for every $f\\in F[x]$,\n$$f(a)=0\\quad\\Longleftrightarrow\\quad m_a\\mid f.$$\nThe polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-perfect-field",
   "source_section": "Definition",
   "quote": "A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible\npolynomial in $F[x]$ is separable\n([[def-repeated-root-and-separable-polynomial]]).",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For each $\\alpha\\in K$, [L1] supplies its irreducible minimal polynomial over $F$, and [L2] makes that polynomial separable.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Thus every element of $K$ is separable over $F$, so $K/F$ is separable by [L3].",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, no possibly empty indexed operation occurs; the proof instead begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, no free numerical parameter has a separate value-one branch; the proof instead begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Every algebraic extension of a perfect field is separable, step 1.1 states: \"For each $\\alpha\\in K$, [L1] supplies its irreducible minimal polynomial over $F$, and [L2] makes that polynomial separable.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, only supplied data are used and no unproved nonempty selection occurs; the proof begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Every algebraic extension of a perfect field is separable is not a biconditional, so no forward implication is asserted; the proof begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Every algebraic extension of a perfect field is separable is not a biconditional, so no reverse implication is asserted; the proof begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-simple-finite-extension-has-finitely-many-intermediate-fields

```markdown
---
id: lem-simple-finite-extension-has-finitely-many-intermediate-fields
kind: lemma
title: "A simple finite extension has only finitely many intermediate fields"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-extension-generated-subfields-and-simple-extension, thm-evaluation-kernel-and-minimal-polynomial, thm-polynomial-ring-over-a-field-is-a-ufd, thm-tower-law-for-finite-field-extensions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $E/F$ is a finite simple extension, then there are only finitely many
intermediate fields $F\subseteq M\subseteq E$.

## Facts & Assumptions

**Given:** A finite simple extension $E=F(\alpha)$.

[L1] The notation $F(\alpha)$ denotes the smallest subfield containing $F$ and $\alpha$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

[L2] An algebraic element has a unique monic irreducible minimal polynomial over its base field ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L3] A polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L4] Degrees multiply in a finite tower of field extensions ([[thm-tower-law-for-finite-field-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Let $f$ be the minimal polynomial of $\alpha$ over $F$. For an intermediate field $M$, let $g_M$ be the minimal polynomial of $\alpha$ over $M$ and let $M_0$ be the subfield of $M$ generated over $F$ by the coefficients of $g_M$. [L1, L2]

2.1 The polynomial $g_M$ divides $f$ in $M[x]$ and therefore in $E[x]$. It is irreducible over $M_0$, since a factorisation over $M_0$ would be one over $M$, so it is also the minimal polynomial of $\alpha$ over $M_0$. [step 1.1, L2]

3.1 Thus $[E:M_0]=\deg g_M=[E:M]$; the tower law [L4] in $M_0\subseteq M\subseteq E$ gives $[M:M_0]=1$, so $M=M_0$. Hence the coefficients of $g_M$ determine $M$. [step 2.1, L4]

4.1 By unique factorisation [L3], the fixed polynomial $f$ has only finitely many monic divisors in $E[x]$. The injective assignment $M\mapsto g_M$ therefore proves that there are only finitely many intermediate fields. [step 3.1, L3] ∎

```

### Recorded proof contract for lem-simple-finite-extension-has-finitely-many-intermediate-fields

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-field-extension-generated-subfields-and-simple-extension",
   "source_section": "Definition",
   "quote": "A **field extension** $K/F$ is a field $K$ together with a specified field\nhomomorphism $F\\to K$ ([[def-field]], [[def-field-homomorphism]]). Since that\nmap is injective, we identify $F$ with its image and write $F\\subseteq K$.\n\nFor $S\\subseteq K$, the **subring generated by $F$ and $S$** is\n$$F[S]=\\bigcap\\{R:R\\text{ is a subring of }K\\text{ and }F\\cup S\\subseteq R\\},$$\nand the **subfield generated by $F$ and $S$** is\n$$F(S)=\\bigcap\\{E:E\\text{ is a subfield of }K\\text{ and }F\\cup S\\subseteq E\\}.$$\nThese intersections are nonempty because $K$ is among the displayed subrings\nand subfields, and they are respectively a subring and a subfield\n([[def-subring]], [[def-subfield]]). Equivalently, $F[S]$ and $F(S)$ are the\nsmallest subring and subfield of $K$ containing $F\\cup S$. For a singleton,\nwrite $F[a]$ and $F(a)$. An extension $K/F$ is **simple** if $K=F(a)$ for some\n$a\\in K$.\n\nFor completeness, the asserted injectivity is immediate: if $\\varphi(a)=0$\nwith $a\\ne0$, then\n$1=\\varphi(a^{-1}a)=\\varphi(a^{-1})\\varphi(a)=0$, a contradiction.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-evaluation-kernel-and-minimal-polynomial",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and $a\\in K$. Evaluation is the unique\n$F$-algebra homomorphism\n$$\\operatorname{ev}_a:F[x]\\longrightarrow K,\\qquad f\\longmapsto f(a).$$\nIf $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a\nunique monic irreducible polynomial $m_a\\in F[x]$ such that\n$$\\ker(\\operatorname{ev}_a)=(m_a),$$\nand, for every $f\\in F[x]$,\n$$f(a)=0\\quad\\Longleftrightarrow\\quad m_a\\mid f.$$\nThe polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-polynomial-ring-over-a-field-is-a-ufd",
   "source_section": "Statement",
   "quote": "For every field $F$, the polynomial ring $F[x]$ is a unique factorisation domain.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $f$ be the minimal polynomial of $\\alpha$ over $F$. For an intermediate field $M$, let $g_M$ be the minimal polynomial of $\\alpha$ over $M$ and let $M_0$ be the subfield of $M$ generated over $F$ by the coefficients of $g_M$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The polynomial $g_M$ divides $f$ in $M[x]$ and therefore in $E[x]$. It is irreducible over $M_0$, since a factorisation over $M_0$ would be one over $M$, so it is also the minimal polynomial of $\\alpha$ over $M_0$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus $[E:M_0]=\\deg g_M=[E:M]$; the tower law [L4] in $M_0\\subseteq M\\subseteq E$ gives $[M:M_0]=1$, so $M=M_0$. Hence the coefficients of $g_M$ determine $M$.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L4"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "By unique factorisation [L3], the fixed polynomial $f$ has only finitely many monic divisors in $E[x]$. The injective assignment $M\\mapsto g_M$ therefore proves that there are only finitely many intermediate fields.",
   "step": "4.1",
   "inputs": [
    "step 3.1",
    "L3"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, no possibly empty indexed operation occurs; the proof instead begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, no free numerical parameter has a separate value-one branch; the proof instead begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A simple finite extension has only finitely many intermediate fields, step 1.1 states: \"Let $f$ be the minimal polynomial of $\\alpha$ over $F$. For an intermediate field $M$, let $g_M$ be the minimal polynomial of $\\alpha$ over $M$ and let $M_0$ be the subfield of $M$ generated over $F$ by the coefficients of $g_M$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, only supplied data are used and no unproved nonempty selection occurs; the proof begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim A simple finite extension has only finitely many intermediate fields is not a biconditional, so no forward implication is asserted; the proof begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim A simple finite extension has only finitely many intermediate fields is not a biconditional, so no reverse implication is asserted; the proof begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces

```markdown
---
id: lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
kind: lemma
title: "A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vector-space, def-linear-basis, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a finite-dimensional vector space over an infinite field $F$. No
finite family of proper linear subspaces of $V$ has union $V$.

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$ over an infinite field $F$, and a finite family $W_0,\ldots,W_{m-1}$ of proper linear subspaces.

[L1] A vector space has addition and scalar multiplication satisfying the vector-space axioms ([[def-vector-space]]).

[L2] A finite-dimensional vector space has a finite basis, and the empty basis occurs exactly for the zero space ([[def-linear-basis]]).

[L3] A finite set has a natural-number cardinality invariant under bijection ([[def-finite-cardinality]]).

## Proof

**Proof technique:** induction.

1.1 For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space. [base, L1]

1.2 Assume the assertion for families of fewer than $m>0$ proper subspaces, in every finite-dimensional vector space over $F$. [ih]

2.1 If $m=1$, choose $b\in V\setminus W_0$ and the result is immediate. For $m>1$, remove any $W_i$ contained in another member; if this shortens the family, the induction hypothesis applies. Otherwise every $W_{m-1}\cap W_i$ is a proper subspace of $W_{m-1}$, so the induction hypothesis inside $W_{m-1}$ gives a nonzero $a\in W_{m-1}$ lying in none of the earlier $W_i$. Choose $b\in V\setminus W_{m-1}$. [step 1.2, L1, L2, choose]

3.1 In the unresolved case $m>1$, on the affine line $\{b+ta:t\in F\}$ each $W_i$ contains at most one point: two such points would have difference a nonzero scalar multiple of $a$, putting $a$ in $W_i$ for $i<m-1$, while any point in $W_{m-1}$ would put $b$ there. [step 2.1, L1, algebra]

4.1 For $m>1$ the union therefore meets the line in at most a finite set of points by [L3], whereas $t\mapsto b+ta$ is injective and $F$ is infinite. Some point of the line lies outside every $W_i$; together with the $m=1$ conclusion in step 2.1, this completes the induction. [step 2.1, step 3.1, L3, discharge-induction] ∎

```

### Recorded proof contract for lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-vector-space",
   "source_section": "Definition",
   "quote": "Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative\nidentity $1_F$, and the field axioms as stated there. A **vector space over $F$**,\nalso called an **$F$-vector space**, consists of\n\n- a set $V$, whose elements are called **vectors**;\n- a binary operation $+ : V \\times V \\to V$ on $V$ ([[def-binary-operation]]),\n  the **vector addition**;\n- an element $0_V \\in V$, the **zero vector**;\n- a map $\\cdot \\,:\\, F \\times V \\to V$, the **scalar multiplication**, written\n  $\\lambda v := \\cdot(\\lambda, v)$;\n\nsubject to the following axioms, in which $u, v \\in V$ and $\\lambda, \\mu \\in F$\nare arbitrary.\n\n- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative\n  and commutative, $0_V$ is a two-sided identity for $+$\n  ([[def-identity-element]]), and every $v \\in V$ has an additive inverse\n  ([[def-invertible-element]]).\n- **(V2)** $\\lambda(u + v) = \\lambda u + \\lambda v$.\n- **(V3)** $(\\lambda + \\mu)v = \\lambda v + \\mu v$.\n- **(V4)** $(\\lambda\\mu)v = \\lambda(\\mu v)$.\n- **(V5)** $1_F v = v$.\n\nThe elements of $F$ are called **scalars**. When several vector spaces are in\nplay we write $0_V$ for the zero of $V$, and we write $-v$ for the additive\ninverse of $v$ and $u - v := u + (-v)$.\n\n**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some\ntwo-sided identity and some additive inverses exist. That there is at most one\ntwo-sided identity for $+$ is [[lem-identity-unique]], and that an invertible\nelement of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are\nproved before [[def-group]] and are inherited here with the group structure. So\n$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.\n\n**What (V1) buys, and why it is not restated.** Associativity, commutativity, the\nidentity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,\ncancellation ([[lem-group-cancellation]]) and the inverse identities\n([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from\nthe group page wherever they are used and are never proved again for vectors.",
   "uses": [
    "1.1",
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-linear-basis",
   "source_section": "Definition",
   "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).\n\nA subset $B \\subseteq V$ is a **basis of $V$** when\n\n- **(B1)** $B$ is linearly independent ([[def-linear-independence]]), and\n- **(B2)** $B$ spans $V$, that is $\\operatorname{span}(B) = V$\n  ([[def-linear-combination-and-span]], which is where the words *spans* and\n  *spanning set* are fixed; they are not redefined here).\n\n**The empty set is a basis of the zero space, and of nothing else.**\n$\\varnothing$ is linearly independent ([[def-linear-independence]]) and\n$\\operatorname{span}(\\varnothing) = \\{0_V\\}$\n([[lem-span-is-the-set-of-linear-combinations]]), so $\\varnothing$ is a basis of\n$V$ exactly when $V = \\{0_V\\}$. This is the case $n = 0$ from which every\ninduction on this page starts, and it is a genuine case rather than a convention.\n\n### Ordered bases\n\nAn **ordered basis of $V$** is a finite list $v : n \\to V$, with $n \\in\n\\mathbb{N}$ and $n = \\{0, \\dots, n-1\\}$ the von Neumann natural\n([[def-natural-numbers]], [[lem-nat-order-is-membership]]), such that $v$ is\ninjective ([[def-injection-surjection-bijection]]) and its image $v[n]$ is a\nbasis of $V$.\n\nBy claim 6 of [[lem-independent-list-is-injective]], a list is linearly\nindependent exactly when it is injective with linearly independent image, so an\nordered basis is equally described as a **linearly independent list $v : n \\to V$\nwith $\\operatorname{span}(v[n]) = V$**: the injectivity does not have to be\nimposed separately. The empty list is the ordered basis of the zero space.\n\nAn ordered basis is a list, so it carries an order; a basis is a set, so it does\nnot. Reordering an ordered basis gives a different ordered basis with the same\nimage, and the coordinates of\n[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] are attached to the\nlist, not to the set.\n\n### Bases of a linear subspace\n\nLet $U$ be a linear subspace of $V$ ([[def-linear-subspace]]), which is itself a\nvector space over $F$, with the addition, the zero vector and the scalar\nmultiplication of $V$ restricted to $U$. For $A \\subseteq U$ the two readings of\n\"$A$ is a basis\" — computed inside $U$, or computed inside $V$ — agree, so the\nphrase needs no disambiguation below.\n\n- **Independence agrees.** The finite sums $\\sum_{i<n}\\lambda_i a_i$ of a list\n  $a : n \\to U$ are given by the same recursion in $U$ as in $V$\n  ([[def-monoid-finite-product]]), the base value $0_V$ and the operation $+$\n  being literally those of $V$ ([[def-linear-subspace]]). So a list into $U$ has\n  the same sums whichever space it is read in, and the vanishing condition of\n  [[def-linear-independence]] is the same condition in both.\n- **The span agrees.** A subset of $U$ is a linear subspace of $U$ exactly when it\n  is a linear subspace of $V$, conditions (W1), (W2), (W3) being the same\n  conditions in either reading. Now $\\operatorname{span}_V(A) \\subseteq U$, since\n  $U$ is a linear subspace of $V$ containing $A$ and the span is contained in\n  every such subspace; so $\\operatorname{span}_V(A)$ is a linear subspace of $U$\n  containing $A$, whence $\\operatorname{span}_U(A) \\subseteq \\operatorname{span}_V(A)$.\n  Conversely $\\operatorname{span}_U(A)$ is a linear subspace of $V$ containing\n  $A$, whence $\\operatorname{span}_V(A) \\subseteq \\operatorname{span}_U(A)$. The\n  two are therefore equal, and we write $\\operatorname{span}(A)$ for both.\n\nConsequently $A \\subseteq U$ is a basis of the vector space $U$ if and only if\n$A$ is linearly independent as a subset of $V$ and $\\operatorname{span}(A) = U$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-finite-cardinality",
   "source_section": "Definition",
   "quote": "Throughout this page $\\mathbb{N}$ is the set of von Neumann naturals\n([[def-natural-numbers]]): $0 = \\varnothing$, $\\sigma(n) = n \\cup \\{n\\}$, and\n$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\}$ is itself the set of its predecessors,\nthe order being the additive order of [[def-nat-order]] identified with\nmembership in [[lem-nat-order-is-membership]]. Write $A \\approx B$ when a\nbijection $A \\to B$ exists ([[def-equinumerous]],\n[[def-injection-surjection-bijection]]). A set $A$ is **finite** when\n$A \\approx n$ for some $n \\in \\mathbb{N}$ ([[def-countable]]).\n\n**Definition.** Let $A$ be a finite set. Then there is **exactly one**\n$n \\in \\mathbb{N}$ with $A \\approx n$, and we write\n\n$$\\lvert A\\rvert := \\text{that } n,$$\n\nthe **cardinality**, or number of elements, of $A$. The notation $\\lvert A\\rvert$\nis defined for finite $A$ only, and its value is a natural number.\n\n**Why exactly one, which is the whole content of the definition.** At least one\nsuch $n$ exists: that is literally what \"$A$ is finite\" says. At most one exists:\nif $A \\approx n$ and $A \\approx m$ with $n, m \\in \\mathbb{N}$, then $n \\approx A$,\nbecause the inverse of a bijection is a bijection, and hence $n \\approx m$,\nbecause a composition of bijections is a bijection\n([[def-injection-surjection-bijection]]); and $n \\approx m$ forces $n = m$ by\nclaim 3 of [[lem-pigeonhole]]. So $\\lvert A\\rvert$ names a single natural number\nand not a family of choices.\n\n**Four consequences, proved here because everything on this page uses them.**\n\n**(a) $\\lvert n\\rvert = n$ for every $n \\in \\mathbb{N}$.** The identity map\n$\\mathrm{id}_n$ is a bijection $n \\to n$, so $n \\approx n$; thus $n$ is finite and\nthe unique natural equinumerous with it is $n$ itself.\n\n**(b) $\\lvert\\varnothing\\rvert = 0$, and a finite $A$ satisfies\n$\\lvert A\\rvert = 0$ if and only if $A = \\varnothing$.** Since $0 = \\varnothing$,\npart (a) gives $\\lvert\\varnothing\\rvert = 0$. Conversely, if $\\lvert A\\rvert = 0$\nthen there is a bijection $f : A \\to \\varnothing$; were some $a \\in A$, the value\n$f(a)$ would be an element of $\\varnothing$, and $\\varnothing$ has none, so\n$A = \\varnothing$.\n\n**(c) Transport along a bijection.** If $A$ is finite and $f : A \\to B$ is a\nbijection, then $B$ is finite and $\\lvert B\\rvert = \\lvert A\\rvert$. Indeed\n$B \\approx A$ through $f^{-1}$ and $A \\approx \\lvert A\\rvert$, so\n$B \\approx \\lvert A\\rvert$ by transitivity.\n\n**(d) Equality of cardinalities is equinumerosity.** For finite $A$ and $B$:\n$\\lvert A\\rvert = \\lvert B\\rvert$ if and only if $A \\approx B$. If the\ncardinalities agree then $A \\approx \\lvert A\\rvert = \\lvert B\\rvert \\approx B$;\nconversely $A \\approx B$ gives $\\lvert B\\rvert = \\lvert A\\rvert$ by (c).",
   "uses": [
    "4.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.",
   "step": "1.1",
   "inputs": [
    "base",
    "L1"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Assume the assertion for families of fewer than $m>0$ proper subspaces, in every finite-dimensional vector space over $F$.",
   "step": "1.2",
   "inputs": [
    "ih"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $m=1$, choose $b\\in V\\setminus W_0$ and the result is immediate. For $m>1$, remove any $W_i$ contained in another member; if this shortens the family, the induction hypothesis applies. Otherwise every $W_{m-1}\\cap W_i$ is a proper subspace of $W_{m-1}$, so the induction hypothesis inside $W_{m-1}$ gives a nonzero $a\\in W_{m-1}$ lying in none of the earlier $W_i$. Choose $b\\in V\\setminus W_{m-1}$.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L1",
    "L2",
    "choose"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "In the unresolved case $m>1$, on the affine line $\\{b+ta:t\\in F\\}$ each $W_i$ contains at most one point: two such points would have difference a nonzero scalar multiple of $a$, putting $a$ in $W_i$ for $i<m-1$, while any point in $W_{m-1}$ would put $b$ there.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "For $m>1$ the union therefore meets the line in at most a finite set of points by [L3], whereas $t\\mapsto b+ta$ is injective and $F$ is infinite. Some point of the line lies outside every $W_i$; together with the $m=1$ conclusion in step 2.1, this completes the induction.",
   "step": "4.1",
   "inputs": [
    "step 2.1",
    "step 3.1",
    "L3",
    "discharge-induction"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 1.1 states: \"For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.\" This is the final proof check that the possibly empty family, list, union, product, or tower has its neutral case computed."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 1.1 states: \"For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 3.1 states: \"In the unresolved case $m>1$, on the affine line $\\{b+ta:t\\in F\\}$ each $W_i$ contains at most one point: two such points would have difference a nonzero scalar multiple of $a$, putting $a$ in $W_i$ for $i<m-1$, while any point in $W_{m-1}$ would put $b$ there.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 1.1 states: \"For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Choose a line not contained in any one of the finitely many proper subspaces, after induction on their number and the dimension."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 1.1 states: \"For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces is not a biconditional, so no forward implication is asserted; the proof begins from Choose a line not contained in any one of the finitely many proper subspaces, after induction on their number and the dimension."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces is not a biconditional, so no reverse implication is asserted; the proof begins from Choose a line not contained in any one of the finitely many proper subspaces, after induction on their number and the dimension."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-primitive-element-theorem-for-finite-separable-extensions

```markdown
---
id: thm-primitive-element-theorem-for-finite-separable-extensions
kind: theorem
title: "A finite extension generated by elements all but possibly one of which are separable is simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-elements-and-separable-extensions, lem-polynomial-gcd-is-stable-under-field-extension, cor-splitting-fields-exist-for-finite-families, cor-finite-extensions-of-finite-fields-are-simple, thm-finitely-generated-algebraic-extensions-are-finite]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Theorem 5.1"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $E=F(\alpha_1,\ldots,\alpha_r)$ be a finite extension. If all but possibly
one of the generators are separable over $F$, then $E/F$ is simple. In
particular, every finite separable extension is simple.

## Facts & Assumptions

**Given:** A finite extension $E=F(\alpha_1,\ldots,\alpha_r)$ in which all but possibly one generator are separable over $F$.

[L1] A polynomial gcd computed over a field is unchanged after extending the coefficient field ([[lem-polynomial-gcd-is-stable-under-field-extension]]).

[L2] A finite family of nonzero polynomials has a common splitting field ([[cor-splitting-fields-exist-for-finite-families]]).

[L3] Every finite extension of a finite field is simple ([[cor-finite-extensions-of-finite-fields-are-simple]]).

[L4] A field generated by finitely many algebraic elements is a finite extension ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L5] An element is separable when its minimal polynomial has no repeated root ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 For $r=0$, one has $E=F=F(0)$, and for $r=1$ the displayed presentation is already simple. Assume $r\ge2$. It is enough to combine two generators: if $F(\alpha,\beta)=F(\gamma)$ whenever $\beta$ is separable, repeated combination leaves at most the originally exceptional generator as the first entry and a separable generator as the second. Finiteness of each intermediate extension follows from [L4]. [given, L4, L5]

1.2 If $F$ is finite, the two-generator extension is simple by [L3]. [L3]

1.3 Suppose $F$ is infinite. In a common splitting field from [L2], list the distinct conjugates $\alpha_i$ of $\alpha$ and the pairwise distinct conjugates $\beta_j$ of the separable element $\beta$. Choose a nonzero $c\in F$ avoiding the finitely many values $(\alpha_1-\alpha_i)/(\beta_j-\beta_1)$ with $\beta_j\ne\beta_1$, and put $\gamma=\alpha+c\beta$. [L2, L5, choose]

2.1 In $F(\gamma)[x]$, the minimal polynomial of $\alpha$ and the translated minimal polynomial of $\beta$ have $\alpha$ as a common root. By the choice of $c$, any common root would give $\alpha_i+c\beta_j=\alpha+c\beta$ and hence must be $\alpha$; [L1] therefore makes their monic gcd $x-\alpha$. Thus $\alpha\in F(\gamma)$ and then $\beta=(\gamma-\alpha)/c\in F(\gamma)$. [step 1.3, L1, algebra]

3.1 Hence $F(\alpha,\beta)=F(\gamma)$ over either a finite or an infinite base. Iterating step 1.1 proves the theorem, and when every generator is separable it gives the usual finite separable primitive-element theorem. [step 1.1, step 1.2, step 2.1] ∎

```

### Recorded proof contract for thm-primitive-element-theorem-for-finite-separable-extensions

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-polynomial-gcd-is-stable-under-field-extension",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq E$ be a field extension and let $f,g\\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-splitting-fields-exist-for-finite-families",
   "source_section": "Statement",
   "quote": "Let $f_1,\\ldots,f_m\\in F[x]$ be nonzero, where $m\\in\\mathbb N$. A splitting field of the product\n$$ h=\\prod_{j=1}^m f_j $$\nis a splitting field of the family $\\{f_1,\\ldots,f_m\\}$. Hence every finite family of nonzero polynomials has a splitting field. For $m=0$, $h=1$ and the splitting field is $F$.",
   "uses": [
    "1.3"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-finite-extensions-of-finite-fields-are-simple",
   "source_section": "Statement",
   "quote": "Every finite-degree extension $K/F$ of a finite field is simple: there exists $a\\in K$ with $K=F(a)$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "1.1",
    "1.3"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For $r=0$, one has $E=F=F(0)$, and for $r=1$ the displayed presentation is already simple. Assume $r\\ge2$. It is enough to combine two generators: if $F(\\alpha,\\beta)=F(\\gamma)$ whenever $\\beta$ is separable, repeated combination leaves at most the originally exceptional generator as the first entry and a separable generator as the second. Finiteness of each intermediate extension follows from [L4].",
   "step": "1.1",
   "inputs": [
    "given",
    "L4",
    "L5"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "If $F$ is finite, the two-generator extension is simple by [L3].",
   "step": "1.2",
   "inputs": [
    "L3"
   ]
  },
  {
   "id": "step-1-3",
   "claim": "Suppose $F$ is infinite. In a common splitting field from [L2], list the distinct conjugates $\\alpha_i$ of $\\alpha$ and the pairwise distinct conjugates $\\beta_j$ of the separable element $\\beta$. Choose a nonzero $c\\in F$ avoiding the finitely many values $(\\alpha_1-\\alpha_i)/(\\beta_j-\\beta_1)$ with $\\beta_j\\ne\\beta_1$, and put $\\gamma=\\alpha+c\\beta$.",
   "step": "1.3",
   "inputs": [
    "L2",
    "L5",
    "choose"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "In $F(\\gamma)[x]$, the minimal polynomial of $\\alpha$ and the translated minimal polynomial of $\\beta$ have $\\alpha$ as a common root. By the choice of $c$, any common root would give $\\alpha_i+c\\beta_j=\\alpha+c\\beta$ and hence must be $\\alpha$; [L1] therefore makes their monic gcd $x-\\alpha$. Thus $\\alpha\\in F(\\gamma)$ and then $\\beta=(\\gamma-\\alpha)/c\\in F(\\gamma)$.",
   "step": "2.1",
   "inputs": [
    "step 1.3",
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Hence $F(\\alpha,\\beta)=F(\\gamma)$ over either a finite or an infinite base. Iterating step 1.1 proves the theorem, and when every generator is separable it gives the usual finite separable primitive-element theorem.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "step 2.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "Step 1.1 computes the empty generating list explicitly: for $r=0$, $E=F=F(0)$."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 1.1 treats list length $r=0$ explicitly, and step 1.3 chooses $c\\ne0$ before step 2.1 divides by $c$."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 1.1 treats the singleton presentation $r=1$ as already simple."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The trivial extension occurs in the $r=0$ branch of step 1.1; inseparable behavior is confined to the one permitted exceptional generator."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A finite extension generated by elements all but possibly one of which are separable is simple, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Reduce the generating list to two elements, with the second separable."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For A finite extension generated by elements all but possibly one of which are separable is simple, step 1.1 states: \"It is enough to combine two generators: if $F(\\alpha,\\beta)=F(\\gamma)$ whenever $\\beta$ is separable, repeated combination leaves at most the originally exceptional generator as the first entry and a separable generator as the second. Finiteness of each intermediate extension follows from [L4].\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim A finite extension generated by elements all but possibly one of which are separable is simple is not a biconditional, so no forward implication is asserted; the proof begins from Reduce the generating list to two elements, with the second separable."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim A finite extension generated by elements all but possibly one of which are separable is simple is not a biconditional, so no reverse implication is asserted; the proof begins from Reduce the generating list to two elements, with the second separable."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-one-step-simultaneous-root-extension

```markdown
---
id: thm-one-step-simultaneous-root-extension
kind: theorem
title: "Assuming Choice, every field has an algebraic extension containing roots of all nonconstant base polynomials"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-artin-simultaneous-root-ideal-is-proper, thm-proper-ideal-contained-in-maximal-ideal, thm-quotient-is-field-iff-ideal-maximal, thm-finitely-generated-algebraic-extensions-are-finite, thm-zorn]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Theorem 4.9"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. For every field $F$ there is an algebraic extension
$L/F$ such that every nonconstant polynomial in $F[x]$ has a root in $L$. The
construction uses Zorn's lemma to place Artin's proper ideal inside a maximal
ideal.

## Facts & Assumptions

**Given:** A field $F$, the set $\mathcal S$ of its monic nonconstant polynomials, $A=F[x_f:f\in\mathcal S]$, and $I=(f(x_f):f\in\mathcal S)$.

[L1] Artin's ideal $I$ is proper ([[lem-artin-simultaneous-root-ideal-is-proper]]).

[L2] Assuming Choice, every proper ideal of a nonzero commutative ring is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[L3] The quotient of a commutative ring by a maximal ideal is a field ([[thm-quotient-is-field-iff-ideal-maximal]]).

[L4] A field generated by finitely many algebraic elements is finite, and therefore algebraic, over the base ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L5] Assuming Choice, a nonempty poset whose chains have upper bounds has a maximal element ([[thm-zorn]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1] and the maximal-ideal theorem [L2], whose choice step is Zorn's lemma [L5], choose a maximal ideal $M$ of $A$ containing $I$. [L1, L2, L5, choose]

2.1 Put $L=A/M$. By [L3] this is a field. The composite $F\to A\to L$ is injective, since a nonzero scalar in $M$ would be a unit and force $1\in M$, so it identifies $F$ with a subfield of $L$. [step 1.1, L3, construct]

3.1 For each $f\in\mathcal S$, the residue $\overline{x_f}\in L$ satisfies $f(\overline{x_f})=0$ because $f(x_f)\in I\subseteq M$. Multiplying an arbitrary nonconstant polynomial by the inverse of its leading coefficient makes it monic without changing its roots, so every nonconstant polynomial over $F$ has a root in $L$. [step 1.1, step 2.1, algebra]

4.1 Every element of $L$ is represented by a polynomial involving finitely many variables $x_{f_1},\ldots,x_{f_r}$, hence lies in $F(\overline{x_{f_1}},\ldots,\overline{x_{f_r}})$. Each residue is algebraic over $F$, and [L4] makes this finite subextension algebraic. Thus $L/F$ is algebraic. [step 2.1, step 3.1, L4]

5.1 The field $L$ constructed above is the required algebraic root extension, and the only choice principle used is the maximal-ideal application in step 1.1. [step 1.1, step 3.1, step 4.1, discharge-construct] ∎

```

### Recorded proof contract for thm-one-step-simultaneous-root-extension

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-artin-simultaneous-root-ideal-is-proper",
   "source_section": "Statement",
   "quote": "Let $\\mathcal S$ be the set of monic nonconstant polynomials in $F[x]$, let\n$A=F[x_f:f\\in\\mathcal S]$, and let\n\n$$I=(f(x_f):f\\in\\mathcal S)\\mathrel{\\trianglelefteq}A.$$\n\nThen $I$ is a proper ideal of $A$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-proper-ideal-contained-in-maximal-ideal",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice ([[def-axiom-of-choice]]).\n\nIn a nonzero commutative ring, every proper ideal is contained in a maximal ideal.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-quotient-is-field-iff-ideal-maximal",
   "source_section": "Statement",
   "quote": "$R/M$ is a field if and only if $M$ is a maximal ideal.\n\nHere $R$ is commutative and $M$ is an ideal of $R$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-zorn",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \\le)$ be a\nnonempty poset in which **every chain has an upper bound**. Then $P$ has a\nmaximal element ([[def-maximal-element]]).\n\nNote the hypothesis asks only for an upper bound, not a least upper bound, and\nthe conclusion asserts only that a maximal element exists, never that a greatest\none does.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "By [L1] and the maximal-ideal theorem [L2], whose choice step is Zorn's lemma [L5], choose a maximal ideal $M$ of $A$ containing $I$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L5",
    "choose"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Put $L=A/M$. By [L3] this is a field. The composite $F\\to A\\to L$ is injective, since a nonzero scalar in $M$ would be a unit and force $1\\in M$, so it identifies $F$ with a subfield of $L$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "construct"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For each $f\\in\\mathcal S$, the residue $\\overline{x_f}\\in L$ satisfies $f(\\overline{x_f})=0$ because $f(x_f)\\in I\\subseteq M$. Multiplying an arbitrary nonconstant polynomial by the inverse of its leading coefficient makes it monic without changing its roots, so every nonconstant polynomial over $F$ has a root in $L$.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Every element of $L$ is represented by a polynomial involving finitely many variables $x_{f_1},\\ldots,x_{f_r}$, hence lies in $F(\\overline{x_{f_1}},\\ldots,\\overline{x_{f_r}})$. Each residue is algebraic over $F$, and [L4] makes this finite subextension algebraic. Thus $L/F$ is algebraic.",
   "step": "4.1",
   "inputs": [
    "step 2.1",
    "step 3.1",
    "L4"
   ]
  },
  {
   "id": "step-5-1",
   "claim": "The field $L$ constructed above is the required algebraic root extension, and the only choice principle used is the maximal-ideal application in step 1.1.",
   "step": "5.1",
   "inputs": [
    "step 1.1",
    "step 3.1",
    "step 4.1",
    "discharge-construct"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 4.1 states: \"Every element of $L$ is represented by a polynomial involving finitely many variables $x_{f_1},\\ldots,x_{f_r}$, hence lies in $F(\\overline{x_{f_1}},\\ldots,\\overline{x_{f_r}})$. Each residue is algebraic over $F$, and [L4] makes this finite subextension algebraic. Thus $L/F$ is algebraic.\" This is the final proof check that a quotient element using no variables is a base constant."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 2.1 states: \"Put $L=A/M$. By [L3] this is a field. The composite $F\\to A\\to L$ is injective, since a nonzero scalar in $M$ would be a unit and force $1\\in M$, so it identifies $F$ with a subfield of $L$.\" This is the final proof check that properness makes the quotient nonzero."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 1.1 states: \"By [L1] and the maximal-ideal theorem [L2], whose choice step is Zorn's lemma [L5], choose a maximal ideal $M$ of $A$ containing $I$.\" This is the final proof check that linear polynomials and constant representatives are included."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 3.1 states: \"For each $f\\in\\mathcal S$, the residue $\\overline{x_f}\\in L$ satisfies $f(\\overline{x_f})=0$ because $f(x_f)\\in I\\subseteq M$. Multiplying an arbitrary nonconstant polynomial by the inverse of its leading coefficient makes it monic without changing its roots, so every nonconstant polynomial over $F$ has a root in $L$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Place Artin's proper ideal inside a maximal ideal and quotient the family polynomial ring."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 1.1 states: \"By [L1] and the maximal-ideal theorem [L2], whose choice step is Zorn's lemma [L5], choose a maximal ideal $M$ of $A$ containing $I$.\" This is the final proof check that the maximal-ideal theorem supplies the chosen ideal."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Every field has an algebraic extension in which every nonconstant polynomial over the base has a root is not a biconditional, so no forward implication is asserted; the proof begins from Place Artin's proper ideal inside a maximal ideal and quotient the family polynomial ring."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Every field has an algebraic extension in which every nonconstant polynomial over the base has a root is not a biconditional, so no reverse implication is asserted; the proof begins from Place Artin's proper ideal inside a maximal ideal and quotient the family polynomial ring."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed

```markdown
---
id: lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed
kind: lemma
title: "The one-step root condition makes an algebraic extension of a perfect field algebraically closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-algebraic-extensions-of-perfect-fields-are-separable, thm-primitive-element-theorem-for-finite-separable-extensions, thm-universal-property-of-adjoining-an-irreducible-root, thm-splitting-fields-exist-for-nonzero-polynomials, thm-transitivity-of-algebraicity, def-algebraically-closed-field, thm-finitely-generated-algebraic-extensions-are-finite]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 6.5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Theorem 4.9"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $F$ be perfect and let $L/F$ be algebraic. If every nonconstant polynomial
in $F[x]$ has a root in $L$, then $L$ is algebraically closed.

## Facts & Assumptions

**Given:** A perfect field $F$ and an algebraic extension $L/F$ in which every nonconstant polynomial over $F$ has a root.

[L1] Algebraic extensions of perfect fields are separable ([[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

[L2] Every finite separable extension is simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[L3] A root of an irreducible polynomial induces the unique base-field embedding of the corresponding simple extension ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L4] Every nonzero polynomial has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

[L5] Algebraicity is transitive in towers ([[thm-transitivity-of-algebraicity]]).

[L6] A field is algebraically closed when every nonconstant polynomial over it has a root in it ([[def-algebraically-closed-field]]).

[L7] A field generated by finitely many algebraic elements is finite over its base ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

## Proof

**Proof technique:** direct.

1.1 Let $f\in F[x]$ be irreducible and nonconstant, and choose a splitting field $E/F$ by [L4]. It is generated by the finitely many roots of $f$, so [L7] makes it finite; [L1] makes it separable and [L2] gives $E=F(\alpha)$ for some $\alpha$. [L1, L2, L4, L7]

2.1 The minimal polynomial $m_\alpha\in F[x]$ has a root $\beta\in L$ by hypothesis. By [L3] there is an $F$-embedding $E=F(\alpha)\to L$ sending $\alpha$ to $\beta$. Since $f$ splits in $E$ and its coefficients are fixed, it splits in the image inside $L$. [step 1.1, L3]

3.1 Thus every irreducible polynomial over $F$, and hence every polynomial over $F$, splits in $L$. [step 2.1, algebra]

4.1 Let $q\in L[x]$ be nonconstant and choose a root $\gamma$ in a splitting field by [L4]. The element $\gamma$ is algebraic over $L$, while $L/F$ is algebraic, so [L5] makes $\gamma$ algebraic over $F$. Its minimal polynomial over $F$ splits in $L$ by step 3.1; since $\gamma$ is one of its roots, $\gamma\in L$. [step 3.1, L4, L5]

5.1 Every nonconstant polynomial over $L$ therefore has a root in $L$, so [L6] makes $L$ algebraically closed. [step 4.1, L6] ∎

```

### Recorded proof contract for lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "cor-algebraic-extensions-of-perfect-fields-are-separable",
   "source_section": "Statement",
   "quote": "If $K/F$ is algebraic and $F$ is perfect, then $K/F$ is separable.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-primitive-element-theorem-for-finite-separable-extensions",
   "source_section": "Statement",
   "quote": "Let $E=F(\\alpha_1,\\ldots,\\alpha_r)$ be a finite extension. If all but possibly\none of the generators are separable over $F$, then $E/F$ is simple. In\nparticular, every finite separable extension is simple.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-universal-property-of-adjoining-an-irreducible-root",
   "source_section": "Statement",
   "quote": "Let $p\\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put\n$a=x+(p)$. If $L/F$ is a field extension and $b\\in L$ satisfies $p(b)=0$,\nthere is a unique field homomorphism\n$$\\varphi:K\\longrightarrow L$$\nthat fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-splitting-fields-exist-for-nonzero-polynomials",
   "source_section": "Statement",
   "quote": "For every field $F$ and every nonzero polynomial $f\\in F[x]$, there exists a splitting field of $f$ over $F$.",
   "uses": [
    "1.1",
    "4.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-transitivity-of-algebraicity",
   "source_section": "Statement",
   "quote": "If $F\\subseteq K\\subseteq L$, the extension $K/F$ is algebraic, and $L/K$ is algebraic, then $L/F$ is algebraic.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L6",
   "source": "def-algebraically-closed-field",
   "source_section": "Definition",
   "quote": "A field $F$ is **algebraically closed** when every nonconstant polynomial $p\\in F[x]$ has a root in $F$: there is $\\lambda\\in F$ such that $p(\\lambda)=0$.\n\nThis definition concerns roots in the field itself. It does not assert here that any particular field, including $\\mathbb C$, is algebraically closed.",
   "uses": [
    "5.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $f\\in F[x]$ be irreducible and nonconstant, and choose a splitting field $E/F$ by [L4]. It is generated by the finitely many roots of $f$, so [L7] makes it finite; [L1] makes it separable and [L2] gives $E=F(\\alpha)$ for some $\\alpha$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L4",
    "L7"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The minimal polynomial $m_\\alpha\\in F[x]$ has a root $\\beta\\in L$ by hypothesis. By [L3] there is an $F$-embedding $E=F(\\alpha)\\to L$ sending $\\alpha$ to $\\beta$. Since $f$ splits in $E$ and its coefficients are fixed, it splits in the image inside $L$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus every irreducible polynomial over $F$, and hence every polynomial over $F$, splits in $L$.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Let $q\\in L[x]$ be nonconstant and choose a root $\\gamma$ in a splitting field by [L4]. The element $\\gamma$ is algebraic over $L$, while $L/F$ is algebraic, so [L5] makes $\\gamma$ algebraic over $F$. Its minimal polynomial over $F$ splits in $L$ by step 3.1; since $\\gamma$ is one of its roots, $\\gamma\\in L$.",
   "step": "4.1",
   "inputs": [
    "step 3.1",
    "L4",
    "L5"
   ]
  },
  {
   "id": "step-5-1",
   "claim": "Every nonconstant polynomial over $L$ therefore has a root in $L$, so [L6] makes $L$ algebraically closed.",
   "step": "5.1",
   "inputs": [
    "step 4.1",
    "L6"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, no possibly empty indexed operation occurs; the proof instead begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, step 4.1 states: \"Let $q\\in L[x]$ be nonconstant and choose a root $\\gamma$ in a splitting field by [L4]. The element $\\gamma$ is algebraic over $L$, while $L/F$ is algebraic, so [L5] makes $\\gamma$ algebraic over $F$. Its minimal polynomial over $F$ splits in $L$ by step 3.1; since $\\gamma$ is one of its roots, $\\gamma\\in L$.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, step 2.1 states: \"The minimal polynomial $m_\\alpha\\in F[x]$ has a root $\\beta\\in L$ by hypothesis. By [L3] there is an $F$-embedding $E=F(\\alpha)\\to L$ sending $\\alpha$ to $\\beta$. Since $f$ splits in $E$ and its coefficients are fixed, it splits in the image inside $L$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, step 2.1 states: \"The minimal polynomial $m_\\alpha\\in F[x]$ has a root $\\beta\\in L$ by hypothesis. By [L3] there is an $F$-embedding $E=F(\\alpha)\\to L$ sending $\\alpha$ to $\\beta$. Since $f$ splits in $E$ and its coefficients are fixed, it splits in the image inside $L$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim The one-step root condition makes an algebraic extension of a perfect field algebraically closed is not a biconditional, so no forward implication is asserted; the proof begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim The one-step root condition makes an algebraic extension of a perfect field algebraically closed is not a biconditional, so no reverse implication is asserted; the proof begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-existence-of-algebraic-closures

```markdown
---
id: thm-existence-of-algebraic-closures
kind: theorem
title: "Assuming Choice, every field has an algebraic closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-one-step-simultaneous-root-extension, thm-one-step-algebraic-root-extension-is-algebraically-closed, def-algebraic-closure]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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

Assuming the Axiom of Choice, every field has an algebraic closure.

## Facts & Assumptions

**Given:** A field $F$ and the Axiom of Choice.

[L1] Assuming Choice, there is an algebraic extension $L/F$ containing a root of every nonconstant polynomial over $F$ ([[thm-one-step-simultaneous-root-extension]]).

[L2] Every algebraic extension with that one-step root property is algebraically closed ([[thm-one-step-algebraic-root-extension-is-algebraically-closed]]).

[L3] An algebraic closure is an algebraic extension that is algebraically closed ([[def-algebraic-closure]]).

## Proof

**Proof technique:** constructive.

1.1 Use [L1] to construct an algebraic extension $L/F$ containing a root of every nonconstant base polynomial. [L1, construct]

2.1 By [L2], this same field $L$ is already algebraically closed. [step 1.1, L2]

3.1 Thus $L/F$ is an algebraic closure by [L3]. [step 1.1, step 2.1, L3, discharge-construct] ∎

```

### Recorded proof contract for thm-existence-of-algebraic-closures

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-one-step-simultaneous-root-extension",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice. For every field $F$ there is an algebraic extension\n$L/F$ such that every nonconstant polynomial in $F[x]$ has a root in $L$. The\nconstruction uses Zorn's lemma to place Artin's proper ideal inside a maximal\nideal.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-one-step-algebraic-root-extension-is-algebraically-closed",
   "source_section": "Statement",
   "quote": "Let $L/F$ be algebraic. If every nonconstant polynomial in $F[x]$ has a root\nin $L$, then $L$ is algebraically closed. One root-adjoining extension suffices;\nno iterated tower of root extensions is required.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-algebraic-closure",
   "source_section": "Definition",
   "quote": "An **algebraic closure** of a field $F$ is a field extension $\\overline F/F$\nthat is algebraic ([[def-algebraic-and-transcendental-elements]]) and whose\nfield $\\overline F$ is algebraically closed\n([[def-algebraically-closed-field]]). The notation $\\overline F$ denotes a\nchosen algebraic closure; it does not specify a preferred one or a preferred\nisomorphism between two choices.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Use [L1] to construct an algebraic extension $L/F$ containing a root of every nonconstant base polynomial.",
   "step": "1.1",
   "inputs": [
    "L1",
    "construct"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "By [L2], this same field $L$ is already algebraically closed.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus $L/F$ is an algebraic closure by [L3].",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "L3",
    "discharge-construct"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For Every field has an algebraic closure, no possibly empty indexed operation occurs; the proof instead begins from Apply the simultaneous root-extension theorem once."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For Every field has an algebraic closure, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Apply the simultaneous root-extension theorem once."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Every field has an algebraic closure, step 1.1 states: \"Use [L1] to construct an algebraic extension $L/F$ containing a root of every nonconstant base polynomial.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Every field has an algebraic closure, step 1.1 states: \"Use [L1] to construct an algebraic extension $L/F$ containing a root of every nonconstant base polynomial.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Every field has an algebraic closure, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Apply the simultaneous root-extension theorem once."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For Every field has an algebraic closure, step 1.1 states: \"Use [L1] to construct an algebraic extension $L/F$ containing a root of every nonconstant base polynomial.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Every field has an algebraic closure is not a biconditional, so no forward implication is asserted; the proof begins from Apply the simultaneous root-extension theorem once."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Every field has an algebraic closure is not a biconditional, so no reverse implication is asserted; the proof begins from Apply the simultaneous root-extension theorem once."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-perfect-field

```markdown
---
id: def-perfect-field
kind: definition
title: "Perfect fields: every irreducible polynomial is separable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-repeated-root-and-separable-polynomial, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible
polynomial in $F[x]$ is separable
([[def-repeated-root-and-separable-polynomial]]).

```

## DEPENDENCY: def-separable-elements-and-separable-extensions

```markdown
---
id: def-separable-elements-and-separable-extensions
kind: definition
title: "Separable algebraic elements and separable extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-repeated-root-and-separable-polynomial, thm-evaluation-kernel-and-minimal-polynomial, def-algebraic-and-transcendental-elements]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a field extension. An element $\alpha\in K$ is **separable over
$F$** when it is algebraic over $F$
([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over
$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial
([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is
**separable** when every element of $K$ is separable over $F$.

```

## DEPENDENCY: thm-evaluation-kernel-and-minimal-polynomial

```markdown
---
id: thm-evaluation-kernel-and-minimal-polynomial
kind: theorem
title: 'The evaluation kernel and the unique monic irreducible minimal polynomial of an algebraic element'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-algebraic-and-transcendental-elements, thm-universal-property-of-a-polynomial-ring, cor-polynomial-ring-over-a-field-is-a-pid]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

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

## Facts & Assumptions

**Given:** A field extension $K/F$ and an element $a\in K$.

[F1] Given a unital homomorphism $\phi:R\to S$ of commutative rings and $s\in S$, there is a unique homomorphism $\operatorname{ev}_{\phi,s}:R[x]\to S$ extending $\phi$ and sending $x$ to $s$ ([[thm-universal-property-of-a-polynomial-ring]]).

[F2] Every ideal of $F[x]$ is generated by one polynomial ([[cor-polynomial-ring-over-a-field-is-a-pid]]).

[F3] An element is algebraic precisely when some nonzero polynomial evaluates to zero at it ([[def-algebraic-and-transcendental-elements]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to the inclusion $F\hookrightarrow K$ and $a$; this gives the stated evaluation homomorphism and its uniqueness. [F1]

2.1 By [F3], $a$ is transcendental exactly when $\ker(\operatorname{ev}_a)=0$. [F3, step 1.1]

2.2 Suppose $a$ is algebraic. Then the kernel is a nonzero proper ideal, so [F2] gives $\ker(\operatorname{ev}_a)=(m)$ for a nonzero nonconstant $m$. [F2, F3, step 1.1]

3.1 Multiplying $m$ by the inverse of its leading coefficient does not change its principal ideal, so choose the generator $m$ monic. [step 2.2, algebra]

3.2 For any $f\in F[x]$, $f(a)=0$ if and only if $f$ belongs to the kernel, which is equivalent to $f\in(m)$ and hence to $m\mid f$. [step 2.2]

4.1 If $m=uv$ with both $u$ and $v$ nonconstant, then $0=m(a)=u(a)v(a)$; since $K$ is a field, one factor evaluates to zero and lies in $(m)$, impossible because its degree is smaller than $\deg m$. Thus $m$ is irreducible. [step 2.2, step 3.1, algebra]

5.1 If $m'$ is another monic polynomial with the same property, then $m\mid m'$ and $m'\mid m$ by step 3.2; equal degree and monicity give $m=m'$. [step 3.2, algebra] ∎

```

## DEPENDENCY: def-field-extension-generated-subfields-and-simple-extension

```markdown
---
id: def-field-extension-generated-subfields-and-simple-extension
kind: definition
title: 'Field extensions, generated subrings $F[S]$, generated subfields $F(S)$, and simple extensions'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field, def-field-homomorphism, def-subring, def-subfield]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-11
---

## Definition

A **field extension** $K/F$ is a field $K$ together with a specified field
homomorphism $F\to K$ ([[def-field]], [[def-field-homomorphism]]). Since that
map is injective, we identify $F$ with its image and write $F\subseteq K$.

For $S\subseteq K$, the **subring generated by $F$ and $S$** is
$$F[S]=\bigcap\{R:R\text{ is a subring of }K\text{ and }F\cup S\subseteq R\},$$
and the **subfield generated by $F$ and $S$** is
$$F(S)=\bigcap\{E:E\text{ is a subfield of }K\text{ and }F\cup S\subseteq E\}.$$
These intersections are nonempty because $K$ is among the displayed subrings
and subfields, and they are respectively a subring and a subfield
([[def-subring]], [[def-subfield]]). Equivalently, $F[S]$ and $F(S)$ are the
smallest subring and subfield of $K$ containing $F\cup S$. For a singleton,
write $F[a]$ and $F(a)$. An extension $K/F$ is **simple** if $K=F(a)$ for some
$a\in K$.

For completeness, the asserted injectivity is immediate: if $\varphi(a)=0$
with $a\ne0$, then
$1=\varphi(a^{-1}a)=\varphi(a^{-1})\varphi(a)=0$, a contradiction.

```

## DEPENDENCY: thm-polynomial-ring-over-a-field-is-a-ufd

```markdown
---
id: thm-polynomial-ring-over-a-field-is-a-ufd
kind: theorem
title: 'For every field $F$, $F[x]$ is a unique factorisation domain'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-polynomial-factorisation-into-irreducibles, thm-irreducible-polynomials-over-a-field-are-prime, def-unique-factorisation-domain, cor-polynomial-ring-over-a-domain-is-a-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.11'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

For every field $F$, the polynomial ring $F[x]$ is a unique factorisation domain.

## Facts & Assumptions

**Given:** A field $F$.

[L1] Every nonzero nonunit polynomial over $F$ factors into irreducibles ([[lem-polynomial-factorisation-into-irreducibles]]).

[L2] Every irreducible polynomial over $F$ is prime ([[thm-irreducible-polynomials-over-a-field-are-prime]]).

[L3] A UFD is an integral domain with existence and uniqueness, up to order and associates, of irreducible factorizations of every nonzero nonunit ([[def-unique-factorisation-domain]]).

[L4] The polynomial ring over a domain is a domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

## Proof

**Proof technique:** induction.

1.1 Fact [L4] makes $F[x]$ a domain, and [L1] supplies existence of irreducible factorizations. [base, given, L1, L4]

2.1 For uniqueness, compare $p_1\cdots p_m=q_1\cdots q_n$; by [L2], $p_1$ divides some $q_j$, and irreducibility makes $p_1$ associate to $q_j$; after reordering and cancelling these nonzero associates in the domain, induction on $m$ pairs all remaining factors and gives $m=n$. [step 1.1, ih, L2, L4, algebra]

3.1 The existence and uniqueness established in steps 1.1 and 2.1 are exactly the conditions of [L3], so $F[x]$ is a UFD. [step 1.1, step 2.1, L3, discharge-induction] ∎

```

## DEPENDENCY: thm-tower-law-for-finite-field-extensions

```markdown
---
id: thm-tower-law-for-finite-field-extensions
kind: theorem
title: "Tower law for finite extensions: $[L:F]=[L:K][K:F]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-product-basis-for-a-tower-of-finite-extensions, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and

$$[L:F]=[L:K][K:F].$$

## Facts & Assumptions

**Given:** Finite extensions $K/F$ and $L/K$.

[L1] Products of an $F$-basis of $K$ and a $K$-basis of $L$ form an $F$-basis of $L$ ([[lem-product-basis-for-a-tower-of-finite-extensions]]).

[L2] Extension degree is the size of a finite basis ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose bases of sizes $m=[K:F]$ and $n=[L:K]$. [given, L2, choose]

2.1 By [L1], their $mn$ pairwise products form an $F$-basis of $L$. [step 1.1, L1]

3.1 Hence $L/F$ is finite and [L2] gives $[L:F]=mn=[L:K][K:F]$. [step 2.1, L2, algebra] ∎

```

## DEPENDENCY: def-vector-space

```markdown
---
id: def-vector-space
kind: definition
title: "Vector space over a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-group, def-binary-operation, def-identity-element, def-invertible-element, lem-identity-unique, lem-inverse-unique]
justified_by: []
aliases: [def-vector, def-scalar-multiplication]
landmark: true
short: "vector space over $F$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative
identity $1_F$, and the field axioms as stated there. A **vector space over $F$**,
also called an **$F$-vector space**, consists of

- a set $V$, whose elements are called **vectors**;
- a binary operation $+ : V \times V \to V$ on $V$ ([[def-binary-operation]]),
  the **vector addition**;
- an element $0_V \in V$, the **zero vector**;
- a map $\cdot \,:\, F \times V \to V$, the **scalar multiplication**, written
  $\lambda v := \cdot(\lambda, v)$;

subject to the following axioms, in which $u, v \in V$ and $\lambda, \mu \in F$
are arbitrary.

- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative
  and commutative, $0_V$ is a two-sided identity for $+$
  ([[def-identity-element]]), and every $v \in V$ has an additive inverse
  ([[def-invertible-element]]).
- **(V2)** $\lambda(u + v) = \lambda u + \lambda v$.
- **(V3)** $(\lambda + \mu)v = \lambda v + \mu v$.
- **(V4)** $(\lambda\mu)v = \lambda(\mu v)$.
- **(V5)** $1_F v = v$.

The elements of $F$ are called **scalars**. When several vector spaces are in
play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive
inverse of $v$ and $u - v := u + (-v)$.

**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some
two-sided identity and some additive inverses exist. That there is at most one
two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible
element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are
proved before [[def-group]] and are inherited here with the group structure. So
$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.

**What (V1) buys, and why it is not restated.** Associativity, commutativity, the
identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,
cancellation ([[lem-group-cancellation]]) and the inverse identities
([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from
the group page wherever they are used and are never proved again for vectors.

## Remarks

- **Scalar multiplication is not a binary operation on a set.** It is a map
  $F \times V \to V$ with arguments from two different sets, so
  [[def-binary-operation]], which is about a map $S \times S \to S$, does not
  apply to it and is never cited for it. The definition above cites that item for
  the vector addition only. In particular "closed under scalar multiplication"
  below always means $\lambda v \in W$ for $\lambda \in F$ and $v \in W$, which is
  not an instance of the closure condition defined there.

- **(V5) is an axiom, not a consequence of (V2)–(V4).** Take any abelian group
  $(V,+,0_V)$ and define $\lambda v := 0_V$ for every $\lambda$ and $v$. Then
  (V2), (V3) and (V4) all hold, both sides of each being $0_V$, while (V5) fails
  as soon as $V \ne \{0_V\}$. So (V5) has to be imposed, and it is what ties the
  scalar action to the identity of $F$.

- **Two structures, one set.** A vector space is data: the set $V$, the addition,
  the zero, and the scalar multiplication, over a fixed field $F$. The same set
  may carry vector-space structures over different fields, and the field is part
  of the statement of every result below. [[lem-restriction-of-scalars]] is the
  first place where that matters.

- **The field is the published one.** No field axiom is restated here; $F$ is a
  field in the sense of [[def-field]], whose axiom (A) already says that $(F,+)$
  is an abelian group and whose axiom (M) says the same of
  $(F \setminus \{0_F\}, \cdot)$. In particular every field is a vector space over
  itself, which is [[lem-restriction-of-scalars]].

```

## DEPENDENCY: def-linear-basis

```markdown
---
id: def-linear-basis
kind: definition
title: "Basis of a vector space: a linearly independent spanning subset; and ordered basis: an injective finite list whose image is a basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-linear-independence, lem-independent-list-is-injective, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-linear-subspace, def-monoid-finite-product, def-vector-space, def-field, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
forward_refs: [def-topology-basis-subbasis]
aliases: [def-hamel-basis, def-ordered-basis]
landmark: true
short: "basis; ordered basis"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

A subset $B \subseteq V$ is a **basis of $V$** when

- **(B1)** $B$ is linearly independent ([[def-linear-independence]]), and
- **(B2)** $B$ spans $V$, that is $\operatorname{span}(B) = V$
  ([[def-linear-combination-and-span]], which is where the words *spans* and
  *spanning set* are fixed; they are not redefined here).

**The empty set is a basis of the zero space, and of nothing else.**
$\varnothing$ is linearly independent ([[def-linear-independence]]) and
$\operatorname{span}(\varnothing) = \{0_V\}$
([[lem-span-is-the-set-of-linear-combinations]]), so $\varnothing$ is a basis of
$V$ exactly when $V = \{0_V\}$. This is the case $n = 0$ from which every
induction on this page starts, and it is a genuine case rather than a convention.

### Ordered bases

An **ordered basis of $V$** is a finite list $v : n \to V$, with $n \in
\mathbb{N}$ and $n = \{0, \dots, n-1\}$ the von Neumann natural
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), such that $v$ is
injective ([[def-injection-surjection-bijection]]) and its image $v[n]$ is a
basis of $V$.

By claim 6 of [[lem-independent-list-is-injective]], a list is linearly
independent exactly when it is injective with linearly independent image, so an
ordered basis is equally described as a **linearly independent list $v : n \to V$
with $\operatorname{span}(v[n]) = V$**: the injectivity does not have to be
imposed separately. The empty list is the ordered basis of the zero space.

An ordered basis is a list, so it carries an order; a basis is a set, so it does
not. Reordering an ordered basis gives a different ordered basis with the same
image, and the coordinates of
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] are attached to the
list, not to the set.

### Bases of a linear subspace

Let $U$ be a linear subspace of $V$ ([[def-linear-subspace]]), which is itself a
vector space over $F$, with the addition, the zero vector and the scalar
multiplication of $V$ restricted to $U$. For $A \subseteq U$ the two readings of
"$A$ is a basis" — computed inside $U$, or computed inside $V$ — agree, so the
phrase needs no disambiguation below.

- **Independence agrees.** The finite sums $\sum_{i<n}\lambda_i a_i$ of a list
  $a : n \to U$ are given by the same recursion in $U$ as in $V$
  ([[def-monoid-finite-product]]), the base value $0_V$ and the operation $+$
  being literally those of $V$ ([[def-linear-subspace]]). So a list into $U$ has
  the same sums whichever space it is read in, and the vanishing condition of
  [[def-linear-independence]] is the same condition in both.
- **The span agrees.** A subset of $U$ is a linear subspace of $U$ exactly when it
  is a linear subspace of $V$, conditions (W1), (W2), (W3) being the same
  conditions in either reading. Now $\operatorname{span}_V(A) \subseteq U$, since
  $U$ is a linear subspace of $V$ containing $A$ and the span is contained in
  every such subspace; so $\operatorname{span}_V(A)$ is a linear subspace of $U$
  containing $A$, whence $\operatorname{span}_U(A) \subseteq \operatorname{span}_V(A)$.
  Conversely $\operatorname{span}_U(A)$ is a linear subspace of $V$ containing
  $A$, whence $\operatorname{span}_V(A) \subseteq \operatorname{span}_U(A)$. The
  two are therefore equal, and we write $\operatorname{span}(A)$ for both.

Consequently $A \subseteq U$ is a basis of the vector space $U$ if and only if
$A$ is linearly independent as a subset of $V$ and $\operatorname{span}(A) = U$.

## Remarks

- **The name is `def-linear-basis`, and the bare word is not used here.** The
  library already has a *basis* — a basis for a topology, defined in
  [[def-topology-basis-subbasis]] and namespaced there with the alias
  `def-basis-top`. The two notions share the word and nothing else: one is a
  family of open sets closed under a refinement condition, the other an
  independent spanning subset of a vector space. This page therefore follows the
  convention of [[def-linear-subspace]], where the same collision with the
  topological *subspace* was resolved the same way, and says *linear* in the id.
  In prose, where the ambient vector space is named, "basis" alone is used.

- **Nothing above asserts that a basis exists.** Existence for an arbitrary vector
  space is [[cor-every-vector-space-has-a-basis]], and it is proved from Zorn's
  lemma; existence for the concrete spaces $F^{n}$ is
  [[lem-standard-basis-of-f-n]] and needs no choice principle at all. The
  definition is stated first so that both statements have something to be about.

- **A basis need not be finite, and this definition does not assume it is.**
  Condition (B1) quantifies over finite lists drawn from $B$ and (B2) is an
  equality of sets, so both make sense for an arbitrary $B$. It is only
  [[def-dimension]] that restricts attention to spaces admitting a *finite* basis,
  and the companion page exhibits an explicit infinite basis, for the
  eventually zero families in $F^{\mathbb{N}}$.

```

## DEPENDENCY: def-finite-cardinality

```markdown
---
id: def-finite-cardinality
kind: definition
title: "The cardinality $\\lvert A\\rvert$ of a finite set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable, lem-pigeonhole, def-equinumerous, def-injection-surjection-bijection,
       def-natural-numbers, lem-nat-order-is-membership, def-nat-order]
justified_by: []
forward_refs: [def-cardinal]
aliases: []
landmark: true
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
    - title: "Cardinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "P. Halmos, Naive Set Theory, §13"
      url: "https://en.wikipedia.org/wiki/Naive_Set_Theory_(book)"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{N}$ is the set of von Neumann naturals
([[def-natural-numbers]]): $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$, and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ is itself the set of its predecessors,
the order being the additive order of [[def-nat-order]] identified with
membership in [[lem-nat-order-is-membership]]. Write $A \approx B$ when a
bijection $A \to B$ exists ([[def-equinumerous]],
[[def-injection-surjection-bijection]]). A set $A$ is **finite** when
$A \approx n$ for some $n \in \mathbb{N}$ ([[def-countable]]).

**Definition.** Let $A$ be a finite set. Then there is **exactly one**
$n \in \mathbb{N}$ with $A \approx n$, and we write

$$\lvert A\rvert := \text{that } n,$$

the **cardinality**, or number of elements, of $A$. The notation $\lvert A\rvert$
is defined for finite $A$ only, and its value is a natural number.

**Why exactly one, which is the whole content of the definition.** At least one
such $n$ exists: that is literally what "$A$ is finite" says. At most one exists:
if $A \approx n$ and $A \approx m$ with $n, m \in \mathbb{N}$, then $n \approx A$,
because the inverse of a bijection is a bijection, and hence $n \approx m$,
because a composition of bijections is a bijection
([[def-injection-surjection-bijection]]); and $n \approx m$ forces $n = m$ by
claim 3 of [[lem-pigeonhole]]. So $\lvert A\rvert$ names a single natural number
and not a family of choices.

**Four consequences, proved here because everything on this page uses them.**

**(a) $\lvert n\rvert = n$ for every $n \in \mathbb{N}$.** The identity map
$\mathrm{id}_n$ is a bijection $n \to n$, so $n \approx n$; thus $n$ is finite and
the unique natural equinumerous with it is $n$ itself.

**(b) $\lvert\varnothing\rvert = 0$, and a finite $A$ satisfies
$\lvert A\rvert = 0$ if and only if $A = \varnothing$.** Since $0 = \varnothing$,
part (a) gives $\lvert\varnothing\rvert = 0$. Conversely, if $\lvert A\rvert = 0$
then there is a bijection $f : A \to \varnothing$; were some $a \in A$, the value
$f(a)$ would be an element of $\varnothing$, and $\varnothing$ has none, so
$A = \varnothing$.

**(c) Transport along a bijection.** If $A$ is finite and $f : A \to B$ is a
bijection, then $B$ is finite and $\lvert B\rvert = \lvert A\rvert$. Indeed
$B \approx A$ through $f^{-1}$ and $A \approx \lvert A\rvert$, so
$B \approx \lvert A\rvert$ by transitivity.

**(d) Equality of cardinalities is equinumerosity.** For finite $A$ and $B$:
$\lvert A\rvert = \lvert B\rvert$ if and only if $A \approx B$. If the
cardinalities agree then $A \approx \lvert A\rvert = \lvert B\rvert \approx B$;
conversely $A \approx B$ gives $\lvert B\rvert = \lvert A\rvert$ by (c).

## Remarks

- **$\mathbb{N}$ contains $0$ here, and that is not a detail.** Every index range
  on this page starts at $0$, a one-element set has cardinality
  $1 = \{0\}$, and $\lvert A\rvert$ is never a positive-integer-only object. A
  statement about $\lvert A\rvert$ that is true only for $\lvert A\rvert \ge 1$
  must say so.

- **$\lvert A\rvert$ is a natural number, not a cardinal number.** The theory of
  cardinals ([[def-cardinal]]) is developed much later in the library and nothing
  here uses it, or any cardinal arithmetic: the pointer is orientation only. What
  makes the notation legitimate at this point in the reading order is exactly
  claim 3 of [[lem-pigeonhole]], and nothing more.

- **What the definition does not supply.** It asserts that *some* bijection
  $A \to \lvert A\rvert$ exists; it does not single one out, and nothing in the
  library does. Two sets can have equal cardinality with no distinguished
  bijection between them, which is the point of the counterexample on this page's
  companion.

```

## DEPENDENCY: lem-polynomial-gcd-is-stable-under-field-extension

```markdown
---
id: lem-polynomial-gcd-is-stable-under-field-extension
kind: lemma
title: 'The monic gcd of two base-field polynomials is unchanged after extending the coefficient field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monic-greatest-common-divisor-of-polynomials, thm-bezout-identity-for-polynomials, def-subfield, thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Lemma 1.1'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Statement

Let $F\subseteq E$ be a field extension and let $f,g\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.

## Facts & Assumptions

**Given:** A subfield $F\subseteq E$ and polynomials $f,g\in F[x]$ not both zero.

[L1] The monic gcd is the unique monic common divisor divisible by every common divisor ([[def-monic-greatest-common-divisor-of-polynomials]]).

[L2] If $d=\gcd(f,g)$ in $F[x]$, then $d=Af+Bg$ for some $A,B\in F[x]$ ([[thm-bezout-identity-for-polynomials]]).

[L3] A subfield has the same zero, one, operations, and inverses as the ambient field ([[def-subfield]]).

[L4] A coefficient inclusion extends uniquely to a ring homomorphism of polynomial rings ([[thm-universal-property-of-a-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $d$ be the monic gcd in $F[x]$; it divides $f,g$ there and hence in $E[x]$ under [L4], while [L2] remains the identity $d=Af+Bg$ in $E[x]$ by [L3] and [L4]. [given, L1, L2, L3, L4]

2.1 Every common divisor of $f,g$ in $E[x]$ divides the right side of the Bézout identity and hence divides $d$; since $d$ is monic, [L1] identifies it as the monic gcd computed in $E[x]$. [step 1.1, L1, L2] ∎

```

## DEPENDENCY: cor-splitting-fields-exist-for-finite-families

```markdown
---
id: cor-splitting-fields-exist-for-finite-families
kind: corollary
title: 'Every finite family of nonzero polynomials has a splitting field, obtained from their product'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-splitting-fields-exist-for-nonzero-polynomials, def-polynomials-that-split-and-splitting-fields, thm-polynomial-degree-of-a-product-over-a-domain, thm-polynomial-ring-over-a-field-is-a-ufd]
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
    - title: 'J. S. Milne, Fields and Galois Theory, Chapter 2'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Statement

Let $f_1,\ldots,f_m\in F[x]$ be nonzero, where $m\in\mathbb N$. A splitting field of the product
$$ h=\prod_{j=1}^m f_j $$
is a splitting field of the family $\{f_1,\ldots,f_m\}$. Hence every finite family of nonzero polynomials has a splitting field. For $m=0$, $h=1$ and the splitting field is $F$.

## Facts & Assumptions

**Given:** A finite family $f_1,\ldots,f_m$ of nonzero polynomials over a field $F$.

[F1] Nonzero polynomial products over a domain are nonzero ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[F2] Every nonzero polynomial has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

[F3] For every field $K$, the polynomial ring $K[x]$ is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[F4] A splitting field is generated by all roots of the polynomial or family that splits there ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 If $m=0$, the product is $1$, whose empty root set has splitting field $F$ by [F4]. Assume now that $m>0$. By [F1], $h$ is nonzero, so [F2] gives a splitting field $E/F$ of $h$. [F1, F2, F4]

2.1 Each $f_j$ divides $h$ in $E[x]$. Since $h$ is a product of linear factors there, unique factorisation in the ring $E[x]$ from [F3] shows that every irreducible factor of $f_j$ is linear; hence every $f_j$ splits over $E$. [F3, step 1.1]

3.1 An element of an extension is a root of $h=f_1\cdots f_m$ exactly when it is a root of at least one $f_j$, because a field has no zero divisors. Thus the roots generating $E$ are precisely the union of the roots of the family, and [F4] makes $E$ its splitting field. [F4, step 1.1, algebra] ∎

```

## DEPENDENCY: cor-finite-extensions-of-finite-fields-are-simple

```markdown
---
id: cor-finite-extensions-of-finite-fields-are-simple
kind: corollary
title: "Every finite extension of a finite field is simple"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multiplicative-group-of-a-finite-field-is-cyclic, def-extension-degree-and-finite-extension, thm-cardinality-of-a-set-of-functions, def-field-extension-generated-subfields-and-simple-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

Every finite-degree extension $K/F$ of a finite field is simple: there exists $a\in K$ with $K=F(a)$.

## Facts & Assumptions

**Given:** A finite field $F$ and a finite extension $K/F$ of degree $n$.

[L1] The multiplicative group of a finite field is cyclic ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

[L2] Degree $n$ gives a finite basis of $K$ over $F$ ([[def-extension-degree-and-finite-extension]]).

[L3] The functions from an $n$-element set to a finite set form a finite set ([[thm-cardinality-of-a-set-of-functions]]).

[L4] The subfield $F(a)$ is the smallest subfield containing $F$ and $a$, and an extension equal to such a field is simple ([[def-field-extension-generated-subfields-and-simple-extension]]).

## Proof

**Proof technique:** constructive.

1.1 Coordinates in a finite basis identify $K$ with a finite set of functions from an $n$-element index set to $F$, so $K$ is a finite field. [given, L2, L3]

2.1 By [L1], choose a generator $a$ of the cyclic group $K^\times$. [step 1.1, L1, choose, construct]

3.1 The subfield $F(a)$ contains $0$, $1$, and every power of $a$, hence all of $K^\times$ and therefore all of $K$. Thus $K=F(a)$ by [L4]. [step 2.1, L4]

4.1 The chosen $a$ exhibits the extension as simple. [step 3.1, discharge-construct] ∎

```

## DEPENDENCY: thm-finitely-generated-algebraic-extensions-are-finite

```markdown
---
id: thm-finitely-generated-algebraic-extensions-are-finite
kind: theorem
title: "An extension generated by finitely many algebraic elements is finite"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-generated-field-extension, cor-element-algebraic-iff-simple-extension-finite, thm-tower-law-for-finite-field-extensions, def-algebraic-and-transcendental-elements]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

If $a_1,\ldots,a_r$ are algebraic over $F$, then $F(a_1,\ldots,a_r)/F$ is finite.

## Facts & Assumptions

**Given:** A field extension containing elements $a_1,\ldots,a_r$ algebraic over $F$.

[L1] The field $F(a_1,\ldots,a_r)$ is obtained by adjoining the finite list of generators ([[def-finitely-generated-field-extension]]).

[L2] An algebraic element generates a finite simple extension ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L3] Degrees multiply in a finite tower ([[thm-tower-law-for-finite-field-extensions]]).

[L4] An element algebraic over $F$ satisfies a nonzero polynomial in $F[t]$ ([[def-algebraic-and-transcendental-elements]]).

## Proof

**Proof technique:** direct.

1.1 Put $F_0=F$ and $F_i=F(a_1,\ldots,a_i)$ for $1\le i\le r$. By [L4], the nonzero polynomial over $F$ satisfied by $a_i$ also belongs to $F_{i-1}[t]$, so $a_i$ is algebraic over $F_{i-1}$. Thus [L2] makes $F_i/F_{i-1}$ finite. [given, L1, L2, L4]

2.1 Repeated application of [L3] makes $F_r/F$ finite, with degree equal to the product of the simple-step degrees. [step 1.1, L3]

3.1 By [L1], $F_r=F(a_1,\ldots,a_r)$. If $r=0$, this is $F/F$ of degree one, so the boundary case also holds. [step 2.1, L1] ∎

```

## DEPENDENCY: lem-artin-simultaneous-root-ideal-is-proper

```markdown
---
id: lem-artin-simultaneous-root-ideal-is-proper
kind: lemma
title: "Artin's ideal generated by $f(x_f)$ for all monic nonconstant $f\\in F[x]$ is proper"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-ring-on-a-family-of-indeterminates, thm-universal-property-of-a-polynomial-ring-on-a-family, cor-splitting-fields-exist-for-finite-families]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Theorem 4.9"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal S$ be the set of monic nonconstant polynomials in $F[x]$, let
$A=F[x_f:f\in\mathcal S]$, and let

$$I=(f(x_f):f\in\mathcal S)\mathrel{\trianglelefteq}A.$$

Then $I$ is a proper ideal of $A$.

## Facts & Assumptions

**Given:** A field $F$, the family polynomial ring $A=F[x_f:f\in\mathcal S]$, and the ideal $I$ displayed in the Statement.

[L1] The family polynomial ring consists of finite sums involving only finitely many indeterminates ([[def-polynomial-ring-on-a-family-of-indeterminates]]).

[L2] A homomorphism from a family polynomial ring is obtained by assigning an image to every indeterminate, and is unique with those assignments ([[thm-universal-property-of-a-polynomial-ring-on-a-family]]).

[L3] A finite family of nonzero polynomials has a common splitting field ([[cor-splitting-fields-exist-for-finite-families]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $I=A$. Then $1=\sum_{j=1}^m h_j f_j(x_{f_j})$ for finitely many $f_j\in\mathcal S$ and $h_j\in A$. [assume-contra, L1]

1.2 By [L3], choose a field $E/F$ in which all $f_j$ split, and choose a root $a_j\in E$ of each $f_j$. [L3, choose]

2.1 Assign $x_{f_j}\mapsto a_j$ for the variables occurring as generators in step 1.1 and assign every other indeterminate, including unused ones appearing in the $h_j$, to $0$. By [L2] this gives an $F$-algebra homomorphism $\Phi:A\to E$. [step 1.1, step 1.2, L2, construct]

3.1 Applying $\Phi$ to step 1.1 gives $1=\sum_j\Phi(h_j)f_j(a_j)=0$, impossible in the field $E$. Therefore $I$ is proper. [step 1.1, step 1.2, step 2.1, discharge-contradiction] ∎

```

## DEPENDENCY: thm-proper-ideal-contained-in-maximal-ideal

```markdown
---
id: thm-proper-ideal-contained-in-maximal-ideal
kind: theorem
title: 'In a nonzero commutative ring, every proper ideal is contained in a maximal ideal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals, def-left-right-and-two-sided-ideal, lem-ideal-criterion-and-intersections, thm-zorn, def-axiom-of-choice, def-chain, def-maximal-element, def-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

In a nonzero commutative ring, every proper ideal is contained in a maximal ideal.

## Facts & Assumptions

**Given:** A nonzero commutative ring $R$ and a proper ideal $I\mathrel{\trianglelefteq}R$.

[L1] A maximal ideal is a maximal proper ideal under inclusion ([[def-prime-and-maximal-ideals]]).

[L2] Ideals are additive subgroups with multiplication absorption ([[def-left-right-and-two-sided-ideal]]).

[L3] An ideal criterion and intersection closure are available ([[lem-ideal-criterion-and-intersections]]).

[L4] Assuming the Axiom of Choice, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L5] A chain is a subset linearly ordered by the ambient order ([[def-chain]]).

[L6] A maximal element has no strictly larger element in the poset ([[def-maximal-element]]).

[L7] A nonzero ring has $1\ne0$ and ring operations distribute ([[def-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal P$ be the poset of proper ideals of $R$ containing $I$, ordered by inclusion. [L1, L2, given, construct]

1.2 $\mathcal P$ is nonempty, because $I$ is a proper ideal containing $I$. [given, L2]

2.1 The empty chain of $\mathcal P$ has an upper bound in $\mathcal P$: every member of $\mathcal P$ is vacuously above all of its members, and $\mathcal P$ is nonempty, so $I$ is such an upper bound. [step 1.1, step 1.2, L5]

2.2 A nonempty chain $\mathcal C\subseteq\mathcal P$ has an upper bound in $\mathcal P$: $\bigcup\mathcal C$ is an ideal containing $I$, and it is proper, since $1\in\bigcup\mathcal C$ would place $1$ in some member of $\mathcal C$, forcing that member to equal $R$ and contradicting its properness. [step 1.1, L2, L3, L5, L7, algebra]

3.1 Every chain of $\mathcal P$ has an upper bound in $\mathcal P$, and $\mathcal P$ is a nonempty poset, so Zorn's lemma yields a maximal element $M$ of $\mathcal P$. [step 1.2, step 2.1, step 2.2, L4]

4.1 $M$ is a proper ideal containing $I$ that is maximal among proper ideals of $R$, so $M$ is a maximal ideal containing $I$. [step 3.1, L1, L6] ∎

```

## DEPENDENCY: thm-quotient-is-field-iff-ideal-maximal

```markdown
---
id: thm-quotient-is-field-iff-ideal-maximal
kind: theorem
title: '$R/M$ is a field if and only if $M$ is a maximal ideal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals, thm-quotient-ring-laws, lem-field-is-a-commutative-ring, def-field, lem-ideal-criterion-and-intersections]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Statement

$R/M$ is a field if and only if $M$ is a maximal ideal.

Here $R$ is commutative and $M$ is an ideal of $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a proper ideal $M\mathrel{\trianglelefteq}R$.

[L1] A maximal ideal has no proper intermediate ideal ([[def-prime-and-maximal-ideals]]).

[L2] $R/M$ is a quotient ring with its usual coset operations ([[thm-quotient-ring-laws]]).

[L3] A field is a commutative ring in which every nonzero element is invertible ([[lem-field-is-a-commutative-ring]]).

[L4] The definition of field requires a multiplicative inverse for each nonzero element ([[def-field]]).

[L5] The ideal criterion verifies ideals by subtraction and absorption ([[lem-ideal-criterion-and-intersections]]).

## Proof

**Proof technique:** direct.

1.1 If $M$ is maximal and $a\notin M$, the set $J=\{m+ra:m\in M,r\in R\}$ is an ideal by the subtraction-and-absorption criterion, properly contains $M$, and hence is $R$; thus $m+ra=1$ for some $m\in M,r\in R$, giving $(a+M)(r+M)=1+M$. [L1, L2, L3, L4, L5, given, algebra]

2.1 If $R/M$ is a field and $M\subsetneq J\mathrel{\trianglelefteq}R$, choose $a\in J\setminus M$; an inverse $r+M$ of $a+M$ gives $ar-1\in M\subseteq J$, while $ar\in J$, so $1\in J$ and $J=R$. [step 1.1, L1, L2, L3, L4, L5, given, choose]

3.1 Hence $R/M$ is a field exactly when $M$ is maximal. [step 2.1] ∎

```

## DEPENDENCY: thm-zorn

```markdown
---
id: thm-zorn
kind: theorem
title: "Zorn's lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bourbaki-witt, def-axiom-of-choice, def-maximal-element, def-upper-bound, def-chain, def-partial-order]
justified_by: []
forward_refs: [cex-zorn-hypothesis-fails]
aliases: [thm-zorns-lemma]
landmark: true
short: "Zorn's lemma"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Zorn lemma"
      url: "https://encyclopediaofmath.org/wiki/Zorn_lemma"
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \le)$ be a
nonempty poset in which **every chain has an upper bound**. Then $P$ has a
maximal element ([[def-maximal-element]]).

Note the hypothesis asks only for an upper bound, not a least upper bound, and
the conclusion asserts only that a maximal element exists, never that a greatest
one does.

## Facts & Assumptions

**Given:** A nonempty poset $(P, \le)$ in which every chain has an upper bound, and the Axiom of Choice.

[A1] $P \ne \emptyset$, and every chain $C \subseteq P$ has an upper bound in $P$.

[A2] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] A progressive map on a chain-complete poset has a fixed point ([[thm-bourbaki-witt]]).

[L2] $m$ is maximal when there is no $x$ with $m < x$ ([[def-maximal-element]]).

[L3] $u$ is a strict upper bound of $S$ when $s < u$ for every $s \in S$ ([[def-upper-bound]]).

[L4] The empty set is a chain, and a subset is a chain when any two of its elements are comparable ([[def-chain]]).

[L5] $\le$ is a partial order, in particular transitive ($u \le v$ and $v \le w$ imply $u \le w$) and antisymmetric ($u \le v$ and $v \le u$ imply $u = v$); the strict order $u < v$ means $u \le v$ and $u \ne v$, so $<$ is irreflexive ([[def-partial-order]]).

[L6] Inclusion is a partial order on any collection of sets: $A \subseteq A$; $A \subseteq B$ and $B \subseteq A$ give $A = B$ by extensionality; and $A \subseteq B \subseteq C$ gives $A \subseteq C$ ([[def-partial-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $P$ has no maximal element. [assume-contra]

1.2 Let $\mathcal{C}$ be the set of all chains of $P$, a subset of the power set of $P$, partially ordered by inclusion. [L4, L6, construct]

2.1 $(\mathcal{C}, \subseteq)$ is a chain-complete poset: if $\mathcal{D} \subseteq \mathcal{C}$ is a chain under inclusion then $\bigcup \mathcal{D}$ is a chain of $P$, since any two of its elements lie in a common member of $\mathcal{D}$, and it is the least upper bound of $\mathcal{D}$ under inclusion; the empty chain has least upper bound $\bigcup \emptyset = \emptyset$, which is a chain. [step 1.2, L4, L6]

2.2 For $C \in \mathcal{C}$ let $S_C$ be the set of strict upper bounds of $C$ in $P$. [step 1.2, L3, construct]

3.1 Each $S_C$ is nonempty: $C$ has an upper bound $u$ in $P$ by hypothesis, taking any element of the nonempty $P$ when $C = \emptyset$; by assumption $u$ is not maximal, so there is $v$ with $u < v$; then for every $c \in C$ transitivity gives $c \le v$ from $c \le u \le v$, and $c \ne v$, since $c = v$ would give $v \le u$ and $u \le v$, hence $u = v$ by antisymmetry, contradicting $u < v$; so $c < v$ for every $c \in C$ and $v \in S_C$. [step 2.2, step 1.1, A1, L2, L3, L5]

4.1 Apply the Axiom of Choice to the family $\mathcal{S} = \{S_C : C \in \mathcal{C}\}$, every member of which is nonempty, obtaining a choice function $g$ with $g(S) \in S$ for each $S \in \mathcal{S}$; composing with the map $C \mapsto S_C$, which is a function on $\mathcal{C}$, yields a selection $C \mapsto g(S_C) \in S_C$ defined for every chain $C$, and no injectivity of $C \mapsto S_C$ is needed, since two chains with the same set of strict upper bounds simply receive the same chosen element. [step 3.1, A2]

5.1 Define $f(C) = C \cup \{g(S_C)\}$ for $C \in \mathcal{C}$; this is again a chain, because $g(S_C)$ is a strict upper bound of $C$ and so is comparable to every element of $C$. [step 4.1, step 2.2, L3, L4, L5, construct]

6.1 $f$ is progressive for inclusion, since $C \subseteq f(C)$ by construction. [step 5.1]

7.1 By Bourbaki–Witt applied to the chain-complete $\mathcal{C}$ and the progressive $f$, there is $C_0 \in \mathcal{C}$ with $f(C_0) = C_0$, that is $g(S_{C_0}) \in C_0$. [step 2.1, step 6.1, L1]

8.1 But $g(S_{C_0})$ is a strict upper bound of $C_0$, so every element of $C_0$ is strictly below it, giving $g(S_{C_0}) < g(S_{C_0})$, which is impossible because $<$ is irreflexive. [step 7.1, step 4.1, L3, L5, discharge-contradiction] ∎

## Remarks

- **The Axiom of Choice is used exactly once, at step 4.1**, and nowhere else. Everything before it, including Bourbaki–Witt, is a theorem of ZF. That is why the fixed point theorem is kept as a separate item: it marks the boundary between what is free and what is bought.
- The hypothesis is about **all** chains, including the empty one, whose upper bounds are exactly the elements of $P$. So on this library's convention, where $\emptyset$ is a chain ([[def-chain]]), requiring every chain to have an upper bound **already forces** $P \ne \emptyset$, and the nonemptiness hypothesis is stated separately for emphasis rather than as an independent assumption. In particular the empty poset does **not** satisfy the hypothesis: there the empty chain has no upper bound, because there is nothing at all to be one. Under the competing convention, on which chains are required to be nonempty, nonemptiness of $P$ is genuinely independent and cannot be dropped. See [[cex-zorn-hypothesis-fails]] for the failure when unbounded chains exist.
- The conclusion is **maximal, not greatest**, and conflating the two is the most common error in applying the lemma ([[fs-maximal-is-greatest]]).
- The converse holds: Zorn's lemma implies the Axiom of Choice ([[thm-zorn-implies-ac]]), so the two are equivalent over ZF ([[cor-ac-iff-zorn]]).

```

## DEPENDENCY: thm-universal-property-of-adjoining-an-irreducible-root

```markdown
---
id: thm-universal-property-of-adjoining-an-irreducible-root
kind: theorem
title: 'Universal property of adjoining a root of an irreducible polynomial'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-irreducible-quotient-adjoins-a-root, thm-quotient-ring-universal-property, thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

## Statement

Let $p\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put
$a=x+(p)$. If $L/F$ is a field extension and $b\in L$ satisfies $p(b)=0$,
there is a unique field homomorphism
$$\varphi:K\longrightarrow L$$
that fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.

## Facts & Assumptions

**Given:** The fields and roots appearing in the statement.

[F1] Evaluation gives the unique homomorphism $F[x]\to L$ fixing $F$ and sending $x$ to $b$ ([[thm-universal-property-of-a-polynomial-ring]]).

[F2] A homomorphism $R\to S$ whose kernel contains an ideal $I$ factors uniquely through $R/I$ ([[thm-quotient-ring-universal-property]]).

[F3] $K$ is a field extension, $p(a)=0$, and every element of $K$ is a polynomial in $a$ ([[thm-irreducible-quotient-adjoins-a-root]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], evaluation at $b$ is a homomorphism $\operatorname{ev}_b:F[x]\to L$ fixing $F$. [F1]

2.1 Since $p(b)=0$, the ideal $(p)$ lies in $\ker(\operatorname{ev}_b)$; [F2] therefore gives a unique homomorphism $\varphi:K\to L$ with $\varphi(f+(p))=f(b)$. [F2, step 1.1]

3.1 The formula fixes constant classes and sends $a=x+(p)$ to $b$; its image is exactly the set $F[b]$ of polynomial values. [F3, step 2.1, algebra]

3.2 Because [F3] makes $K$ a field and $\varphi(1)=1$, its kernel is not all of $K$ and hence is zero; thus $\varphi$ is a field homomorphism. [F3, step 2.1, algebra]

4.1 Any homomorphism fixing $F$ and sending $a$ to $b$ sends every $f(a)$ to $f(b)$; since every element is such an $f(a)$ by [F3], it equals $\varphi$. [F3, step 3.1] ∎

```

## DEPENDENCY: thm-splitting-fields-exist-for-nonzero-polynomials

```markdown
---
id: thm-splitting-fields-exist-for-nonzero-polynomials
kind: theorem
title: 'Every nonzero polynomial over a field has a splitting field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-adjoining-one-root-reduces-the-unsplit-degree, thm-strong-induction, def-polynomials-that-split-and-splitting-fields, thm-irreducible-quotient-adjoins-a-root]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Theorem 21.11'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
    - title: 'J. S. Milne, Fields and Galois Theory, Chapter 2'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Statement

For every field $F$ and every nonzero polynomial $f\in F[x]$, there exists a splitting field of $f$ over $F$.

## Facts & Assumptions

**Given:** A field $F$ and a nonzero polynomial $f\in F[x]$.

[F1] Strong induction permits proving a property at degree $n$ from all smaller degrees ([[thm-strong-induction]]).

[F2] A positive-degree polynomial has a root $\alpha$ in an extension such that, for $K=F(\alpha)$, it factors in $K[x]$ as $(x-\alpha)g$ with $\deg g=\deg f-1$ ([[lem-adjoining-one-root-reduces-the-unsplit-degree]]).

[F3] A splitting field is an extension over which the polynomial splits and which is generated by all its roots; a nonzero constant splits over the base field ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** strong induction on degree.

1.1 Let $P(n)$ assert the theorem for every field and every nonzero polynomial of degree $n$. We prove $P(n)$ for all $n$ by [F1]. [F1]

1.2 If $n=0$, the polynomial is a nonzero constant. It splits over $F$, and its empty root set generates $F$, so $F$ itself is a splitting field. [F3, base]

1.3 Let $n\ge1$ and assume $P(m)$ for every $m<n$. By [F2], choose a root $\alpha$, put $K=F(\alpha)$, and choose $g\in K[x]$ with $f=(x-\alpha)g$ and $\deg g=n-1<n$. [F2, ih]

2.1 The induction hypothesis over the field $K$ gives a splitting field $L/K$ of $g$. Then $f$ splits over $L$ by [F2], and $L=K(\text{roots of }g)=F(\alpha,\text{roots of }g)$ is generated over $F$ by roots of $f$. Thus $L/F$ is a splitting field of $f$. [F2, F3, step 1.3, ih]

3.1 Steps 1.2, 1.3, and 2.1 verify the strong-induction hypothesis at every $n$, so [F1] proves the theorem. [F1, step 1.1, step 1.2, step 1.3, step 2.1, discharge-induction] ∎

```

## DEPENDENCY: thm-transitivity-of-algebraicity

```markdown
---
id: thm-transitivity-of-algebraicity
kind: theorem
title: "Algebraicity is transitive in towers of field extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finitely-generated-algebraic-extensions-are-finite, cor-element-algebraic-iff-simple-extension-finite, thm-tower-law-for-finite-field-extensions, thm-finite-field-extensions-are-algebraic, def-algebraic-and-transcendental-elements]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

If $F\subseteq K\subseteq L$, the extension $K/F$ is algebraic, and $L/K$ is algebraic, then $L/F$ is algebraic.

## Facts & Assumptions

**Given:** A tower $F\subseteq K\subseteq L$ with $K/F$ and $L/K$ algebraic, and an element $a\in L$.

[L1] Finitely many algebraic generators produce a finite extension ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L2] An algebraic element generates a finite simple extension ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L3] Finite degrees multiply in a tower ([[thm-tower-law-for-finite-field-extensions]]).

[L4] Every finite extension is algebraic ([[thm-finite-field-extensions-are-algebraic]]).

[L5] Algebraicity means satisfying a nonzero polynomial over the base ([[def-algebraic-and-transcendental-elements]]).

## Proof

**Proof technique:** direct.

1.1 Since $a$ is algebraic over $K$, choose a nonzero polynomial $c_0+c_1t+\cdots+c_dt^d\in K[t]$ with value zero at $a$. [given, L5, choose]

2.1 Every coefficient $c_i$ is algebraic over $F$. Hence $M=F(c_0,\ldots,c_d)$ is finite over $F$ by [L1]. [given, step 1.1, L1]

3.1 The same polynomial lies in $M[t]$, so $a$ is algebraic over $M$ and [L2] makes $M(a)/M$ finite. The tower law [L3] makes $M(a)/F$ finite. [step 1.1, step 2.1, L2, L3]

4.1 By [L4], $a$ is algebraic over $F$. Since $a$ was arbitrary, $L/F$ is algebraic. [step 3.1, L4] ∎

```

## DEPENDENCY: def-algebraically-closed-field

```markdown
---
id: def-algebraically-closed-field
kind: definition
title: 'An algebraically closed field: every nonconstant polynomial has a root in the field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field, def-polynomial-evaluation-and-root, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: false
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
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
    - title: 'H. Pinkham, Linear Algebra, §12.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Definition

A field $F$ is **algebraically closed** when every nonconstant polynomial $p\in F[x]$ has a root in $F$: there is $\lambda\in F$ such that $p(\lambda)=0$.

This definition concerns roots in the field itself. It does not assert here that any particular field, including $\mathbb C$, is algebraically closed.

```

## DEPENDENCY: thm-one-step-algebraic-root-extension-is-algebraically-closed

```markdown
---
id: thm-one-step-algebraic-root-extension-is-algebraically-closed
kind: theorem
title: "An algebraic extension containing a root of every nonconstant base polynomial is algebraically closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed, lem-perfect-subfield-of-a-one-step-root-extension-in-positive-characteristic, cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 6.5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Theorem 4.9"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $L/F$ be algebraic. If every nonconstant polynomial in $F[x]$ has a root
in $L$, then $L$ is algebraically closed. One root-adjoining extension suffices;
no iterated tower of root extensions is required.

## Facts & Assumptions

**Given:** An algebraic extension $L/F$ containing a root of every nonconstant polynomial over $F$.

[L1] The one-step root condition over a perfect base makes an algebraic extension algebraically closed ([[lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed]]).

[L2] In positive characteristic, the elements with a suitable $p$-power in the base form a perfect intermediate field whose polynomials retain the root condition in $L$ ([[lem-perfect-subfield-of-a-one-step-root-extension-in-positive-characteristic]]).

[L3] Every characteristic-zero field is perfect ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ has characteristic zero, [L3] makes it perfect and [L1] makes $L$ algebraically closed. [L1, L3]

1.2 If $F$ has characteristic $p>0$, let $F'$ be the perfect intermediate field from [L2]. The extension $L/F'$ is algebraic because $L/F$ is algebraic, and [L2] gives the one-step root condition over $F'$, so [L1] again makes $L$ algebraically closed. [L1, L2]

2.1 The characteristic-zero and positive-characteristic cases exhaust all fields and establish the conclusion without repeating the root-extension construction. [step 1.1, step 1.2] ∎

```

## DEPENDENCY: def-algebraic-closure

```markdown
---
id: def-algebraic-closure
kind: definition
title: "An algebraic closure of a field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraically-closed-field, def-algebraic-and-transcendental-elements]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

An **algebraic closure** of a field $F$ is a field extension $\overline F/F$
that is algebraic ([[def-algebraic-and-transcendental-elements]]) and whose
field $\overline F$ is algebraically closed
([[def-algebraically-closed-field]]). The notation $\overline F$ denotes a
chosen algebraic closure; it does not specify a preferred one or a preferred
isomorphism between two choices.

```
