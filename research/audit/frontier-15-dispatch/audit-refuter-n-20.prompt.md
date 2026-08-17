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
label: n-20

run: frontier-15
role: refuter
label: n-20
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

## ITEM: thm-algebraic-embedding-extension

```markdown
---
id: thm-algebraic-embedding-extension
kind: theorem
title: "Assuming Choice, a base-field embedding extends across every algebraic extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-zorn, thm-universal-property-of-adjoining-an-irreducible-root, lem-polynomials-and-roots-transport-along-field-isomorphisms, def-f-homomorphisms-and-embeddings-of-field-extensions, def-algebraically-closed-field]
justified_by: []
aliases: []
landmark: true
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

Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\Omega$ be
algebraically closed, and let $\sigma:F\to\Omega$ be a field embedding. Then
$\sigma$ extends to a field embedding $\widetilde\sigma:K\to\Omega$. The proof
uses Zorn's lemma.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraic extension $K/F$, an algebraically closed field $\Omega$, and an embedding $\sigma:F\to\Omega$.

[L1] Assuming Choice, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L2] A chosen root of an irreducible polynomial induces the unique embedding of the corresponding simple root extension ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L3] A field isomorphism transports coefficients, evaluation, and roots of polynomials ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[L4] Relative embeddings are field embeddings agreeing with the specified map on the base ([[def-f-homomorphisms-and-embeddings-of-field-extensions]]).

[L5] Every nonconstant polynomial over an algebraically closed field has a root ([[def-algebraically-closed-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal P$ consist of pairs $(E,\tau)$ where $F\subseteq E\subseteq K$ is an intermediate field and $\tau:E\to\Omega$ is an embedding extending $\sigma$, ordered by extension of the domain and map. The pair $(F,\sigma)$ shows that $\mathcal P$ is nonempty. [L4, construct]

2.1 The union of a chain of such pairs has the union of the domains as an intermediate field and the union of the compatible maps as an embedding into $\Omega$, so every chain has an upper bound. [step 1.1, L4]

3.1 By Zorn's lemma [L1], choose a maximal pair $(M,\tau)$ in $\mathcal P$. [step 1.1, step 2.1, L1, choose]

4.1 If $M\ne K$, choose $\alpha\in K\setminus M$. It is algebraic over $M$. Transport its minimal polynomial through the isomorphism $M\to\tau(M)$ using [L3], choose a root in $\Omega$ by [L5], and use [L2] to extend $\tau$ to an embedding of $M(\alpha)$. [step 3.1, L2, L3, L5, choose]

5.1 Step 4.1 contradicts maximality unless $M=K$. Thus $\tau$ on the maximal domain is the required extension of $\sigma$; the use of Choice is precisely [L1]. [step 3.1, step 4.1] ∎

```

### Recorded proof contract for thm-algebraic-embedding-extension

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-zorn",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \\le)$ be a\nnonempty poset in which **every chain has an upper bound**. Then $P$ has a\nmaximal element ([[def-maximal-element]]).\n\nNote the hypothesis asks only for an upper bound, not a least upper bound, and\nthe conclusion asserts only that a maximal element exists, never that a greatest\none does.",
   "uses": [
    "3.1",
    "5.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-universal-property-of-adjoining-an-irreducible-root",
   "source_section": "Statement",
   "quote": "Let $p\\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put\n$a=x+(p)$. If $L/F$ is a field extension and $b\\in L$ satisfies $p(b)=0$,\nthere is a unique field homomorphism\n$$\\varphi:K\\longrightarrow L$$\nthat fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-polynomials-and-roots-transport-along-field-isomorphisms",
   "source_section": "Statement",
   "quote": "Let $\\tau:E\\to E'$ be a field isomorphism carrying a subfield $F\\subseteq E$ onto $F'\\subseteq E'$, and write $\\sigma=\\tau|_F$. Then\n$$ \\sigma_*:F[x]\\longrightarrow F'[x],\\qquad \\sum_i a_ix^i\\longmapsto\\sum_i\\sigma(a_i)x^i $$\nis a ring isomorphism, and for every $f\\in F[x]$ and $\\alpha\\in E$,\n$$ \\tau(f(\\alpha))=(\\sigma_*f)(\\tau(\\alpha)). $$\nConsequently $\\tau$ carries roots of $f$ bijectively to roots of $\\sigma_*f$, transports factorizations coefficientwise, and carries a splitting field of $f$ over $F$ to a splitting field of $\\sigma_*f$ over $F'$.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-f-homomorphisms-and-embeddings-of-field-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ and $L/F$ be field extensions\n([[def-field-extension-generated-subfields-and-simple-extension]]). An\n**$F$-homomorphism** $\\sigma:K\\to L$ is a field homomorphism\n([[def-field-homomorphism]]) satisfying $\\sigma(a)=a$ for every $a\\in F$.\nBecause field homomorphisms are injective, it is also called an\n**$F$-embedding**. A bijective $F$-homomorphism is an **$F$-isomorphism**, and an\n$F$-isomorphism $K\\to K$ is an **$F$-automorphism** of $K$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-algebraically-closed-field",
   "source_section": "Definition",
   "quote": "A field $F$ is **algebraically closed** when every nonconstant polynomial $p\\in F[x]$ has a root in $F$: there is $\\lambda\\in F$ such that $p(\\lambda)=0$.\n\nThis definition concerns roots in the field itself. It does not assert here that any particular field, including $\\mathbb C$, is algebraically closed.",
   "uses": [
    "4.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $\\mathcal P$ consist of pairs $(E,\\tau)$ where $F\\subseteq E\\subseteq K$ is an intermediate field and $\\tau:E\\to\\Omega$ is an embedding extending $\\sigma$, ordered by extension of the domain and map. The pair $(F,\\sigma)$ shows that $\\mathcal P$ is nonempty.",
   "step": "1.1",
   "inputs": [
    "L4",
    "construct"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The union of a chain of such pairs has the union of the domains as an intermediate field and the union of the compatible maps as an embedding into $\\Omega$, so every chain has an upper bound.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L4"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "By Zorn's lemma [L1], choose a maximal pair $(M,\\tau)$ in $\\mathcal P$.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "L1",
    "choose"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "If $M\\ne K$, choose $\\alpha\\in K\\setminus M$. It is algebraic over $M$. Transport its minimal polynomial through the isomorphism $M\\to\\tau(M)$ using [L3], choose a root in $\\Omega$ by [L5], and use [L2] to extend $\\tau$ to an embedding of $M(\\alpha)$.",
   "step": "4.1",
   "inputs": [
    "step 3.1",
    "L2",
    "L3",
    "L5",
    "choose"
   ]
  },
  {
   "id": "step-5-1",
   "claim": "Step 4.1 contradicts maximality unless $M=K$. Thus $\\tau$ on the maximal domain is the required extension of $\\sigma$; the use of Choice is precisely [L1].",
   "step": "5.1",
   "inputs": [
    "step 3.1",
    "step 4.1",
    "L1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For An embedding of a base field into an algebraically closed field extends across every algebraic extension, step 1.1 states: \"Let $\\mathcal P$ consist of pairs $(E,\\tau)$ where $F\\subseteq E\\subseteq K$ is an intermediate field and $\\tau:E\\to\\Omega$ is an embedding extending $\\sigma$, ordered by extension of the domain and map. The pair $(F,\\sigma)$ shows that $\\mathcal P$ is nonempty.\" This is the final proof check that the supplied base embedding makes the partial-embedding poset nonempty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For An embedding of a base field into an algebraically closed field extends across every algebraic extension, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Order partial extensions of the given embedding by domain inclusion."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For An embedding of a base field into an algebraically closed field extends across every algebraic extension, step 1.1 states: \"Let $\\mathcal P$ consist of pairs $(E,\\tau)$ where $F\\subseteq E\\subseteq K$ is an intermediate field and $\\tau:E\\to\\Omega$ is an embedding extending $\\sigma$, ordered by extension of the domain and map. The pair $(F,\\sigma)$ shows that $\\mathcal P$ is nonempty.\" This is the final proof check that the domain may already equal the base."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For An embedding of a base field into an algebraically closed field extends across every algebraic extension, step 4.1 states: \"If $M\\ne K$, choose $\\alpha\\in K\\setminus M$. It is algebraic over $M$. Transport its minimal polynomial through the isomorphism $M\\to\\tau(M)$ using [L3], choose a root in $\\Omega$ by [L5], and use [L2] to extend $\\tau$ to an embedding of $M(\\alpha)$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For An embedding of a base field into an algebraically closed field extends across every algebraic extension, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Order partial extensions of the given embedding by domain inclusion."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For An embedding of a base field into an algebraically closed field extends across every algebraic extension, step 2.1 states: \"The union of a chain of such pairs has the union of the domains as an intermediate field and the union of the compatible maps as an embedding into $\\Omega$, so every chain has an upper bound.\" This is the final proof check that chain unions are upper bounds before Zorn supplies a maximal partial embedding."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim An embedding of a base field into an algebraically closed field extends across every algebraic extension is not a biconditional, so no forward implication is asserted; the proof begins from Order partial extensions of the given embedding by domain inclusion."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim An embedding of a base field into an algebraically closed field extends across every algebraic extension is not a biconditional, so no reverse implication is asserted; the proof begins from Order partial extensions of the given embedding by domain inclusion."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-algebraic-closures-are-isomorphic-over-the-base

```markdown
---
id: cor-algebraic-closures-are-isomorphic-over-the-base
kind: corollary
title: "Assuming Choice, any two algebraic closures are base-isomorphic, generally nonuniquely"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-algebraic-embedding-extension, def-algebraic-closure, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: true
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

Assuming the Axiom of Choice, any two algebraic closures of a field $F$ are
$F$-isomorphic. Such an isomorphism generally need not be unique.

## Facts & Assumptions

**Given:** The Axiom of Choice and two algebraic closures $\Omega_1/F$ and $\Omega_2/F$.

[L1] Assuming Choice, a base embedding into an algebraically closed field extends across an algebraic extension ([[thm-algebraic-embedding-extension]]).

[L2] An algebraic closure is algebraic over its base and algebraically closed ([[def-algebraic-closure]]).

[L3] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Extend the identity embedding of $F$ across $\Omega_1/F$ into $\Omega_2$ by [L1], obtaining an $F$-embedding $\sigma:\Omega_1\to\Omega_2$. [L1, L2]

2.1 Its image $E=\sigma(\Omega_1)$ is algebraically closed because it is isomorphic to $\Omega_1$. Every $b\in\Omega_2$ is algebraic over $F\subseteq E$, so [L3] gives a minimal polynomial over $E$; this polynomial has a root in $E$, and irreducibility then makes it linear. Hence $b\in E$. [step 1.1, L2, L3]

3.1 Thus $\sigma$ is surjective as well as injective, and is an $F$-isomorphism. The argument proves existence only and makes no uniqueness assertion. [step 1.1, step 2.1] ∎

```

### Recorded proof contract for cor-algebraic-closures-are-isomorphic-over-the-base

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-algebraic-embedding-extension",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\\Omega$ be\nalgebraically closed, and let $\\sigma:F\\to\\Omega$ be a field embedding. Then\n$\\sigma$ extends to a field embedding $\\widetilde\\sigma:K\\to\\Omega$. The proof\nuses Zorn's lemma.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-algebraic-closure",
   "source_section": "Definition",
   "quote": "An **algebraic closure** of a field $F$ is a field extension $\\overline F/F$\nthat is algebraic ([[def-algebraic-and-transcendental-elements]]) and whose\nfield $\\overline F$ is algebraically closed\n([[def-algebraically-closed-field]]). The notation $\\overline F$ denotes a\nchosen algebraic closure; it does not specify a preferred one or a preferred\nisomorphism between two choices.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L3",
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
   "claim": "Extend the identity embedding of $F$ across $\\Omega_1/F$ into $\\Omega_2$ by [L1], obtaining an $F$-embedding $\\sigma:\\Omega_1\\to\\Omega_2$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Its image $E=\\sigma(\\Omega_1)$ is algebraically closed because it is isomorphic to $\\Omega_1$. Every $b\\in\\Omega_2$ is algebraic over $F\\subseteq E$, so [L3] gives a minimal polynomial over $E$; this polynomial has a root in $E$, and irreducibility then makes it linear. Hence $b\\in E$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus $\\sigma$ is surjective as well as injective, and is an $F$-isomorphism. The argument proves existence only and makes no uniqueness assertion.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For Any two algebraic closures are isomorphic over the base, generally nonuniquely, no possibly empty indexed operation occurs; the proof instead begins from Extend the identity of the base from one closure into the other."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For Any two algebraic closures are isomorphic over the base, generally nonuniquely, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Extend the identity of the base from one closure into the other."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Any two algebraic closures are isomorphic over the base, generally nonuniquely, step 1.1 states: \"Extend the identity embedding of $F$ across $\\Omega_1/F$ into $\\Omega_2$ by [L1], obtaining an $F$-embedding $\\sigma:\\Omega_1\\to\\Omega_2$.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Any two algebraic closures are isomorphic over the base, generally nonuniquely, step 2.1 states: \"Its image $E=\\sigma(\\Omega_1)$ is algebraically closed because it is isomorphic to $\\Omega_1$. Every $b\\in\\Omega_2$ is algebraic over $F\\subseteq E$, so [L3] gives a minimal polynomial over $E$; this polynomial has a root in $E$, and irreducibility then makes it linear. Hence $b\\in E$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Any two algebraic closures are isomorphic over the base, generally nonuniquely, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Extend the identity of the base from one closure into the other."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For Any two algebraic closures are isomorphic over the base, generally nonuniquely, step 2.1 states: \"Its image $E=\\sigma(\\Omega_1)$ is algebraically closed because it is isomorphic to $\\Omega_1$. Every $b\\in\\Omega_2$ is algebraic over $F\\subseteq E$, so [L3] gives a minimal polynomial over $E$; this polynomial has a root in $E$, and irreducibility then makes it linear. Hence $b\\in E$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Any two algebraic closures are isomorphic over the base, generally nonuniquely is not a biconditional, so no forward implication is asserted; the proof begins from Extend the identity of the base from one closure into the other."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Any two algebraic closures are isomorphic over the base, generally nonuniquely is not a biconditional, so no reverse implication is asserted; the proof begins from Extend the identity of the base from one closure into the other."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-one-step-simultaneous-root-extension

```markdown
title: "Assuming Choice, every field has an algebraic extension containing roots of all nonconstant base polynomials"

## Statement
Assume the Axiom of Choice. For every field $F$ there is an algebraic extension
$L/F$ such that every nonconstant polynomial in $F[x]$ has a root in $L$. The
construction uses Zorn's lemma to place Artin's proper ideal inside a maximal
ideal.
```

## DEPENDENCY: thm-one-step-algebraic-root-extension-is-algebraically-closed

```markdown
title: "An algebraic extension containing a root of every nonconstant base polynomial is algebraically closed"

## Statement
Let $L/F$ be algebraic. If every nonconstant polynomial in $F[x]$ has a root
in $L$, then $L$ is algebraically closed. One root-adjoining extension suffices;
no iterated tower of root extensions is required.
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

## DEPENDENCY: thm-zorn

```markdown
title: "Zorn's lemma"

## Statement
Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \le)$ be a
nonempty poset in which **every chain has an upper bound**. Then $P$ has a
maximal element ([[def-maximal-element]]).

Note the hypothesis asks only for an upper bound, not a least upper bound, and
the conclusion asserts only that a maximal element exists, never that a greatest
one does.
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

## DEPENDENCY: def-algebraically-closed-field

```markdown
title: 'An algebraically closed field: every nonconstant polynomial has a root in the field'

## Definition
A field $F$ is **algebraically closed** when every nonconstant polynomial $p\in F[x]$ has a root in $F$: there is $\lambda\in F$ such that $p(\lambda)=0$.

This definition concerns roots in the field itself. It does not assert here that any particular field, including $\mathbb C$, is algebraically closed.
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
