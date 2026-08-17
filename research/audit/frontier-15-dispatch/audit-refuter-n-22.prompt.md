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
label: n-22

run: frontier-15
role: refuter
label: n-22
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

## ITEM: lem-restriction-fibres-for-embeddings-in-a-finite-tower

```markdown
---
id: lem-restriction-fibres-for-embeddings-in-a-finite-tower
kind: lemma
title: "Restriction partitions embeddings in a finite tower into extension fibres"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-f-homomorphisms-and-embeddings-of-field-extensions, def-extension-degree-and-finite-extension, lem-polynomials-and-roots-transport-along-field-isomorphisms, thm-universal-property-of-adjoining-an-irreducible-root, def-algebraically-closed-field, thm-separable-degree-is-independent-of-the-algebraic-closure]
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

Let $F\subseteq K\subseteq L$ be a finite tower and let $\Omega$ be an algebraic
closure of $F$. Restriction defines a surjection

$$\operatorname{Hom}_F(L,\Omega)\longrightarrow\operatorname{Hom}_F(K,\Omega).$$

For every $F$-embedding $\sigma:K\to\Omega$, its fibre is nonempty and has
cardinality $[L:K]_s$ after transporting the $K$-structure along $\sigma$.

## Facts & Assumptions

**Given:** A finite tower $F\subseteq K\subseteq L$, an algebraic closure $\Omega/F$, and an $F$-embedding $\sigma:K\to\Omega$.

[L1] Relative embeddings are field embeddings fixing the specified base map ([[def-f-homomorphisms-and-embeddings-of-field-extensions]]).

[L2] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

[L3] A field isomorphism transports polynomial coefficients, evaluation, and roots ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[L4] A chosen root of a transported irreducible polynomial induces the unique embedding of the corresponding simple root extension ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L5] Every nonconstant polynomial over an algebraically closed field has a root ([[def-algebraically-closed-field]]).

[L6] For a finite extension, the number of base-field embeddings into an algebraic closure is independent of the chosen algebraic closure ([[thm-separable-degree-is-independent-of-the-algebraic-closure]]).

## Proof

**Proof technique:** direct.

1.1 Restricting an $F$-embedding $L\to\Omega$ to $K$ gives an $F$-embedding by [L1]. [L1]

1.2 To extend a chosen $\sigma$, take a finite $K$-basis $a_1,\ldots,a_r$ of $L$ by [L2] and put $K_i=K(a_1,\ldots,a_i)$. Starting with $\tau_0=\sigma$, regard each $\tau_{i-1}$ as an isomorphism onto its image, transport the minimal polynomial of $a_i$ over $K_{i-1}$ along it by [L3], choose a root in $\Omega$ by [L5], and extend $\tau_{i-1}$ to $K_i$ by [L4]. After finitely many steps, $K_r=L$, so every $\sigma$ has an extension and the restriction map is surjective. [L2, L3, L4, L5, construct]

1.3 Identify $K$ with $\sigma(K)$. The extensions of $\sigma$ are exactly the $\sigma(K)$-embeddings of the scalar-transported copy of $L$ into $\Omega$. Since $\Omega$ is algebraically closed and algebraic over $\sigma(K)$, it is an algebraic closure of that copy of $K$. [L1, algebra]

2.1 Transporting scalars and maps along the isomorphism $K\to\sigma(K)$ identifies the embeddings in step 1.3 with embeddings of $L/K$ into an algebraic closure of $K$. By [L6], their number is the closure-independent value $[L:K]_s$. Thus every fibre of restriction has that cardinality. [step 1.3, L6, algebra]

3.1 In particular, transport along an isomorphism between two embedded copies of $K$ gives a bijection between their restriction fibres. [step 2.1] ∎

```

### Recorded proof contract for lem-restriction-fibres-for-embeddings-in-a-finite-tower

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-f-homomorphisms-and-embeddings-of-field-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ and $L/F$ be field extensions\n([[def-field-extension-generated-subfields-and-simple-extension]]). An\n**$F$-homomorphism** $\\sigma:K\\to L$ is a field homomorphism\n([[def-field-homomorphism]]) satisfying $\\sigma(a)=a$ for every $a\\in F$.\nBecause field homomorphisms are injective, it is also called an\n**$F$-embedding**. A bijective $F$-homomorphism is an **$F$-isomorphism**, and an\n$F$-isomorphism $K\\to K$ is an **$F$-automorphism** of $K$.",
   "uses": [
    "1.1",
    "1.3"
   ]
  },
  {
   "fact": "L2",
   "source": "def-extension-degree-and-finite-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. Scalar multiplication by $F\\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is\n\n$$[K:F]:=\\dim_FK.$$\n\nNo numerical degree is assigned here to an infinite-dimensional extension.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-polynomials-and-roots-transport-along-field-isomorphisms",
   "source_section": "Statement",
   "quote": "Let $\\tau:E\\to E'$ be a field isomorphism carrying a subfield $F\\subseteq E$ onto $F'\\subseteq E'$, and write $\\sigma=\\tau|_F$. Then\n$$ \\sigma_*:F[x]\\longrightarrow F'[x],\\qquad \\sum_i a_ix^i\\longmapsto\\sum_i\\sigma(a_i)x^i $$\nis a ring isomorphism, and for every $f\\in F[x]$ and $\\alpha\\in E$,\n$$ \\tau(f(\\alpha))=(\\sigma_*f)(\\tau(\\alpha)). $$\nConsequently $\\tau$ carries roots of $f$ bijectively to roots of $\\sigma_*f$, transports factorizations coefficientwise, and carries a splitting field of $f$ over $F$ to a splitting field of $\\sigma_*f$ over $F'$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-universal-property-of-adjoining-an-irreducible-root",
   "source_section": "Statement",
   "quote": "Let $p\\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put\n$a=x+(p)$. If $L/F$ is a field extension and $b\\in L$ satisfies $p(b)=0$,\nthere is a unique field homomorphism\n$$\\varphi:K\\longrightarrow L$$\nthat fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L5",
   "source": "def-algebraically-closed-field",
   "source_section": "Definition",
   "quote": "A field $F$ is **algebraically closed** when every nonconstant polynomial $p\\in F[x]$ has a root in $F$: there is $\\lambda\\in F$ such that $p(\\lambda)=0$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-separable-degree-is-independent-of-the-algebraic-closure",
   "source_section": "Statement",
   "quote": "For a finite extension $K/F$, the number of $F$-embeddings of $K$ into an\nalgebraic closure of $F$ is independent of the chosen algebraic closure.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Restricting an $F$-embedding $L\\to\\Omega$ to $K$ gives an $F$-embedding by [L1].",
   "step": "1.1",
   "inputs": [
    "L1"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Choose a finite $K$-basis of $L$ by [L2], adjoin its elements successively, regard each partial embedding as an isomorphism onto its image, transport the next minimal polynomial by [L3], choose a target root by [L5], and extend by [L4]. This finite induction extends every $\\sigma$ and proves surjectivity.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L3",
    "L4",
    "L5",
    "construct"
   ]
  },
  {
   "id": "step-1-3",
   "claim": "Identify $K$ with $\\sigma(K)$. The extensions of $\\sigma$ are exactly the $\\sigma(K)$-embeddings of the scalar-transported copy of $L$ into $\\Omega$. Since $\\Omega/F$ is algebraic and $F\\subseteq\\sigma(K)$, it is an algebraic closure of that copy of $K$.",
   "step": "1.3",
   "inputs": [
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Transporting scalars and maps along $K\\to\\sigma(K)$ identifies the fibre with embeddings of $L/K$ into an algebraic closure of $K$. By [L6], its cardinality is $[L:K]_s$.",
   "step": "2.1",
   "inputs": [
    "step 1.3",
    "L6",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Transport along an isomorphism between two embedded copies of $K$ therefore gives a bijection between their restriction fibres.",
   "step": "3.1",
   "inputs": [
    "step 2.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "A finite field extension is a nonzero finite-dimensional vector space, so the finite basis used in step 1.2 is nonempty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "In step 1.2 no division or zero-degree polynomial occurs; every adjoined element has a nonconstant minimal polynomial before [L5] is invoked."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "When $L=K$, restriction has singleton fibres and the scalar-transport description in steps 1.3–2.1 gives $[L:K]_s=1$."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The trivial tower $F=K=L$ reduces to the identity embedding and a singleton fibre; repeated roots merely reduce the number of choices and do not obstruct step 1.2."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "All parameters are fields, embeddings, and finite bases; there is no ordered or limiting endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Step 1.2 makes only finitely many successive root choices, each licensed by algebraic closedness [L5]; the finite basis is supplied by [L2]."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement is a surjectivity and fibre-cardinality assertion, not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement is a surjectivity and fibre-cardinality assertion, not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-separable-degree-is-at-most-extension-degree

```markdown
---
id: cor-separable-degree-is-at-most-extension-degree
kind: corollary
title: "For a finite extension, $[K:F]_s\\le [K:F]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multiplicativity-of-separable-degree, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-tower-law-for-finite-field-extensions, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: false
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

For every finite field extension $K/F$, one has $[K:F]_s\le [K:F]$.

## Facts & Assumptions

**Given:** A finite extension $K/F$.

[L1] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

[L2] Embeddings of a simple algebraic extension correspond to the distinct roots of its minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Ordinary extension degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L4] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $F$-basis of $K$ by [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions from $F$ to $K$. [L4, choose]

1.2 At each simple step, [L2] counts embeddings by distinct roots of a minimal polynomial, so its separable degree is at most the degree of that polynomial, which is the ordinary degree of the step. [L2]

2.1 Multiplying the inequalities in step 1.2 and using [L1] and [L3] for the two tower products gives $[K:F]_s\le[K:F]$. [step 1.1, step 1.2, L1, L3, algebra] ∎

```

### Recorded proof contract for cor-separable-degree-is-at-most-extension-degree

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-multiplicativity-of-separable-degree",
   "source_section": "Statement",
   "quote": "For every finite tower $F\\subseteq K\\subseteq L$,\n\n$$[L:F]_s=[L:K]_s[K:F]_s.$$",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots",
   "source_section": "Statement",
   "quote": "Let $\\alpha$ be algebraic over $F$, and let $\\Omega$ be an algebraically closed\nfield containing $F$. Sending an $F$-embedding\n$\\sigma:F(\\alpha)\\to\\Omega$ to $\\sigma(\\alpha)$ is a bijection from the set of\nsuch embeddings to the set of distinct roots in $\\Omega$ of the minimal\npolynomial $m_\\alpha$. Consequently the number of embeddings is the number of\ndistinct roots of $m_\\alpha$, not the sum of their multiplicities.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-extension-degree-and-finite-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. Scalar multiplication by $F\\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is\n\n$$[K:F]:=\\dim_FK.$$\n\nNo numerical degree is assigned here to an infinite-dimensional extension.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Choose a finite $F$-basis of $K$ by [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions from $F$ to $K$.",
   "step": "1.1",
   "inputs": [
    "L4",
    "choose"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "At each simple step, [L2] counts embeddings by distinct roots of a minimal polynomial, so its separable degree is at most the degree of that polynomial, which is the ordinary degree of the step.",
   "step": "1.2",
   "inputs": [
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Multiplying the inequalities in step 1.2 and using [L1] and [L3] for the two tower products gives $[K:F]_s\\le[K:F]$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "L1",
    "L3",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For For a finite extension, [K:F]_sle [K:F], no possibly empty indexed operation occurs; the proof instead begins from Induct along a simple generating tower."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For For a finite extension, [K:F]_sle [K:F], the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Induct along a simple generating tower."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For For a finite extension, [K:F]_sle [K:F], no free numerical parameter has a separate value-one branch; the proof instead begins from Induct along a simple generating tower."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For For a finite extension, [K:F]_s\\le [K:F], step 1.2 states: \"At each simple step, [L2] counts embeddings by distinct roots of a minimal polynomial, so its separable degree is at most the degree of that polynomial, which is the ordinary degree of the step.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For For a finite extension, [K:F]_sle [K:F], every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Induct along a simple generating tower."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For For a finite extension, [K:F]_s\\le [K:F], step 1.1 states: \"Choose a finite $F$-basis of $K$ by [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions from $F$ to $K$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim For a finite extension, [K:F]_sle [K:F] is not a biconditional, so no forward implication is asserted; the proof begins from Induct along a simple generating tower."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim For a finite extension, [K:F]_sle [K:F] is not a biconditional, so no reverse implication is asserted; the proof begins from Induct along a simple generating tower."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-finite-extension-is-separable-iff-separable-degree-is-full

```markdown
---
id: thm-finite-extension-is-separable-iff-separable-degree-is-full
kind: theorem
title: "A finite extension is separable if and only if $[K:F]_s=[K:F]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primitive-element-theorem-for-finite-separable-extensions, thm-multiplicativity-of-separable-degree, cor-separable-degree-is-at-most-extension-degree, cor-separable-degree-of-a-simple-extension-counts-distinct-roots, thm-tower-law-for-finite-field-extensions, def-separable-elements-and-separable-extensions]
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

A finite extension $K/F$ is separable if and only if
$[K:F]_s=[K:F]$.

## Facts & Assumptions

**Given:** A finite extension $K/F$.

[L1] Every finite separable extension is simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[L2] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

[L3] Separable degree is at most ordinary degree for every finite extension ([[cor-separable-degree-is-at-most-extension-degree]]).

[L4] For a simple extension, separable degree is the number of distinct roots of the minimal polynomial ([[cor-separable-degree-of-a-simple-extension-counts-distinct-roots]]).

[L5] Ordinary degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L6] An extension is separable when every element has separable minimal polynomial over the base ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 If $K/F$ is separable, [L1] gives $K=F(\alpha)$. The polynomial $m_\alpha$ is separable, so its number of distinct roots equals its degree; [L4] therefore gives $[K:F]_s=[K:F]$. [L1, L4, L6]

1.2 Conversely, assume $[K:F]_s=[K:F]$ and fix $\alpha\in K$. Put $a=[F(\alpha):F]_s$, $b=[F(\alpha):F]$, $c=[K:F(\alpha)]_s$, and $d=[K:F(\alpha)]$. Then [L2] and [L5] give $ac=bd$, while [L3] gives $a\le b$ and $c\le d$. [L2, L3, L5]

2.1 The inequalities give $ac\le bc\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\alpha$ therefore has as many distinct roots as its degree and is separable. [step 1.2, L4, algebra]

3.1 Since $\alpha$ was arbitrary, every element of $K$ is separable over $F$, so [L6] makes $K/F$ separable. This proves the reverse implication. [step 2.1, L6]

4.1 Steps 1.1 and 3.1 establish the biconditional. [step 1.1, step 3.1] ∎

```

### Recorded proof contract for thm-finite-extension-is-separable-iff-separable-degree-is-full

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-primitive-element-theorem-for-finite-separable-extensions",
   "source_section": "Statement",
   "quote": "Let $E=F(\\alpha_1,\\ldots,\\alpha_r)$ be a finite extension. If all but possibly\none of the generators are separable over $F$, then $E/F$ is simple. In\nparticular, every finite separable extension is simple.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-multiplicativity-of-separable-degree",
   "source_section": "Statement",
   "quote": "For every finite tower $F\\subseteq K\\subseteq L$,\n\n$$[L:F]_s=[L:K]_s[K:F]_s.$$",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-separable-degree-is-at-most-extension-degree",
   "source_section": "Statement",
   "quote": "For every finite field extension $K/F$, one has $[K:F]_s\\le [K:F]$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "cor-separable-degree-of-a-simple-extension-counts-distinct-roots",
   "source_section": "Statement",
   "quote": "If $\\alpha$ is algebraic over $F$, then $[F(\\alpha):F]_s$ equals the number of\ndistinct roots of the minimal polynomial $m_\\alpha$ in any algebraic closure of\n$F$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L6",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "1.1",
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If $K/F$ is separable, [L1] gives $K=F(\\alpha)$. The polynomial $m_\\alpha$ is separable, so its number of distinct roots equals its degree; [L4] therefore gives $[K:F]_s=[K:F]$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L4",
    "L6"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Conversely, assume $[K:F]_s=[K:F]$ and fix $\\alpha\\in K$. Put $a=[F(\\alpha):F]_s$, $b=[F(\\alpha):F]$, $c=[K:F(\\alpha)]_s$, and $d=[K:F(\\alpha)]$. Then [L2] and [L5] give $ac=bd$, while [L3] gives $a\\le b$ and $c\\le d$.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L3",
    "L5"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L4",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Since $\\alpha$ was arbitrary, every element of $K$ is separable over $F$, so [L6] makes $K/F$ separable. This proves the reverse implication.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L6"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Steps 1.1 and 3.1 establish the biconditional.",
   "step": "4.1",
   "inputs": [
    "step 1.1",
    "step 3.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For A finite extension is separable if and only if [K:F]_s=[K:F], no possibly empty indexed operation occurs; the proof instead begins from If the extension is separable, the primitive element theorem writes it as F(alpha) and the simple-extension root count gives full degree."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 1.1 states: \"If $K/F$ is separable, [L1] gives $K=F(\\alpha)$. The polynomial $m_\\alpha$ is separable, so its number of distinct roots equals its degree; [L4] therefore gives $[K:F]_s=[K:F]$.\" This is the final proof check that every ordinary and separable degree factor is positive."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 2.1 states: \"The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.\" This is the final proof check that the identity extension has both degrees one."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 2.1 states: \"The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A finite extension is separable if and only if [K:F]_s=[K:F], every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from If the extension is separable, the primitive element theorem writes it as F(alpha) and the simple-extension root count gives full degree."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 1.1 states: \"If $K/F$ is separable, [L1] gives $K=F(\\alpha)$. The polynomial $m_\\alpha$ is separable, so its number of distinct roots equals its degree; [L4] therefore gives $[K:F]_s=[K:F]$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 2.1 states: \"The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.\" This is the final proof check that a primitive element and distinct-root count give full degree."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 2.1 states: \"The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.\" This is the final proof check that factorwise upper bounds and equality force each simple subextension to have full degree."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: def-f-homomorphisms-and-embeddings-of-field-extensions

```markdown
title: "$F$-homomorphisms and $F$-embeddings of field extensions"

## Definition
Let $K/F$ and $L/F$ be field extensions
([[def-field-extension-generated-subfields-and-simple-extension]]). An
**$F$-homomorphism** $\sigma:K\to L$ is a field homomorphism
([[def-field-homomorphism]]) satisfying $\sigma(a)=a$ for every $a\in F$.
Because field homomorphisms are injective, it is also called an
**$F$-embedding**. A bijective $F$-homomorphism is an **$F$-isomorphism**, and an
$F$-isomorphism $K\to K$ is an **$F$-automorphism** of $K$.
```

## DEPENDENCY: def-extension-degree-and-finite-extension

```markdown
title: "The degree $[K:F]=\\dim_F K$ of a finite field extension"

## Definition
Let $K/F$ be a field extension. Scalar multiplication by $F\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is

$$[K:F]:=\dim_FK.$$

No numerical degree is assigned here to an infinite-dimensional extension.
```

## DEPENDENCY: lem-polynomials-and-roots-transport-along-field-isomorphisms

```markdown
title: 'A field isomorphism transports polynomials coefficientwise and carries roots, factorizations, and splitting to roots, factorizations, and splitting'

## Statement
Let $\tau:E\to E'$ be a field isomorphism carrying a subfield $F\subseteq E$ onto $F'\subseteq E'$, and write $\sigma=\tau|_F$. Then
$$ \sigma_*:F[x]\longrightarrow F'[x],\qquad \sum_i a_ix^i\longmapsto\sum_i\sigma(a_i)x^i $$
is a ring isomorphism, and for every $f\in F[x]$ and $\alpha\in E$,
$$ \tau(f(\alpha))=(\sigma_*f)(\tau(\alpha)). $$
Consequently $\tau$ carries roots of $f$ bijectively to roots of $\sigma_*f$, transports factorizations coefficientwise, and carries a splitting field of $f$ over $F$ to a splitting field of $\sigma_*f$ over $F'$.
```

## DEPENDENCY: thm-universal-property-of-adjoining-an-irreducible-root

```markdown
title: 'Universal property of adjoining a root of an irreducible polynomial'

## Statement
Let $p\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put
$a=x+(p)$. If $L/F$ is a field extension and $b\in L$ satisfies $p(b)=0$,
there is a unique field homomorphism
$$\varphi:K\longrightarrow L$$
that fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.
```

## DEPENDENCY: def-algebraically-closed-field

```markdown
title: 'An algebraically closed field: every nonconstant polynomial has a root in the field'

## Definition
A field $F$ is **algebraically closed** when every nonconstant polynomial $p\in F[x]$ has a root in $F$: there is $\lambda\in F$ such that $p(\lambda)=0$.

This definition concerns roots in the field itself. It does not assert here that any particular field, including $\mathbb C$, is algebraically closed.
```

## DEPENDENCY: thm-separable-degree-is-independent-of-the-algebraic-closure

```markdown
title: "The separable degree is independent of the chosen algebraic closure"

## Statement
For a finite extension $K/F$, the number of $F$-embeddings of $K$ into an
algebraic closure of $F$ is independent of the chosen algebraic closure.
```

## DEPENDENCY: thm-multiplicativity-of-separable-degree

```markdown
title: "Separable degree is multiplicative in finite towers: $[L:F]_s=[L:K]_s[K:F]_s$"

## Statement
For every finite tower $F\subseteq K\subseteq L$,

$$[L:F]_s=[L:K]_s[K:F]_s.$$
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

## DEPENDENCY: thm-tower-law-for-finite-field-extensions

```markdown
title: "Tower law for finite extensions: $[L:F]=[L:K][K:F]$"

## Statement
Let $F\subseteq K\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and

$$[L:F]=[L:K][K:F].$$
```

## DEPENDENCY: thm-primitive-element-theorem-for-finite-separable-extensions

```markdown
title: "A finite extension generated by elements all but possibly one of which are separable is simple"

## Statement
Let $E=F(\alpha_1,\ldots,\alpha_r)$ be a finite extension. If all but possibly
one of the generators are separable over $F$, then $E/F$ is simple. In
particular, every finite separable extension is simple.
```

## DEPENDENCY: cor-separable-degree-of-a-simple-extension-counts-distinct-roots

```markdown
title: "The separable degree of $F(\\alpha)/F$ is the number of distinct roots of $m_{\\alpha}$"

## Statement
If $\alpha$ is algebraic over $F$, then $[F(\alpha):F]_s$ equals the number of
distinct roots of the minimal polynomial $m_\alpha$ in any algebraic closure of
$F$.
```

## DEPENDENCY: def-separable-elements-and-separable-extensions

```markdown
title: "Separable algebraic elements and separable extensions"

## Definition
Let $K/F$ be a field extension. An element $\alpha\in K$ is **separable over
$F$** when it is algebraic over $F$
([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over
$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial
([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is
**separable** when every element of $K$ is separable over $F$.
```
