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
label: rr-11

run: frontier-15
role: refuter
label: rr-11
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

## ITEM: cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure

```markdown
---
id: cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure
kind: corollary
title: "Assuming Choice, conjugates in an algebraic closure are related by a base automorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-elements-over-a-field, prop-base-field-embeddings-carry-elements-to-conjugates, thm-universal-property-of-adjoining-an-irreducible-root, thm-algebraic-embedding-extension, def-algebraic-closure, thm-evaluation-kernel-and-minimal-polynomial]
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
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $\Omega$ be an algebraic closure of $F$ and let $\alpha,\beta\in\Omega$.
Then $\alpha$ and $\beta$ are conjugate over $F$ if and only if some
$F$-automorphism of $\Omega$ sends $\alpha$ to $\beta$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraic closure $\Omega/F$, and elements $\alpha,\beta\in\Omega$.

[L1] An $F$-embedding carries an algebraic element to a conjugate ([[prop-base-field-embeddings-carry-elements-to-conjugates]]).

[L2] Conjugates are roots of the same minimal polynomial over $F$ ([[def-conjugate-elements-over-a-field]]).

[L3] A chosen conjugate root induces an $F$-isomorphism between the corresponding simple extensions ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L4] Assuming Choice, a base embedding extends across an algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L5] An algebraic closure is an algebraic extension whose top field is algebraically closed ([[def-algebraic-closure]]).

[L6] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 If an $F$-automorphism sends $\alpha$ to $\beta$, then [L1] makes them conjugate. [L1]

1.2 Conversely, suppose they are conjugate. By [L2] and [L3], there is an $F$-isomorphism $F(\alpha)\to F(\beta)$ sending $\alpha$ to $\beta$. [L2, L3]

2.1 Apply [L4] with base $F(\alpha)$ to extend this map to an embedding $\tau:\Omega\to\Omega$. Its image $E$ is algebraically closed because it is isomorphic to $\Omega$. Every $b\in\Omega$ is algebraic over $F\subseteq E$ by [L5], so [L6] gives its minimal polynomial over $E$; this polynomial has a root in $E$ and is therefore linear. Hence $b\in E$, so $\tau$ is surjective and is an automorphism. [step 1.2, L4, L5, L6]

3.1 This automorphism sends $\alpha$ to $\beta$, proving the reverse implication. [step 1.2, step 2.1] ∎

```

### Recorded proof contract for cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "prop-base-field-embeddings-carry-elements-to-conjugates",
   "source_section": "Statement",
   "quote": "Let $\\sigma:K\\to L$ be an $F$-embedding and let $\\alpha\\in K$ be algebraic\nover $F$. Then $\\sigma(\\alpha)$ is conjugate to $\\alpha$ over $F$. In\nparticular, an $F$-endomorphism of a splitting field permutes the distinct roots\nof every base polynomial that splits there.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-conjugate-elements-over-a-field",
   "source_section": "Definition",
   "quote": "Let $\\alpha$ and $\\beta$ be elements of field extensions of $F$, both\nalgebraic over $F$. They are **conjugate over $F$** when they have the same\nminimal polynomial over $F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]),\nor equivalently when $\\beta$ is a root of the minimal polynomial of $\\alpha$.\nThe relation is relative to the chosen base field. Relative embeddings and\nautomorphisms are those of\n[[def-f-homomorphisms-and-embeddings-of-field-extensions]].",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-universal-property-of-adjoining-an-irreducible-root",
   "source_section": "Statement",
   "quote": "Let $p\\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put\n$a=x+(p)$. If $L/F$ is a field extension and $b\\in L$ satisfies $p(b)=0$,\nthere is a unique field homomorphism\n$$\\varphi:K\\longrightarrow L$$\nthat fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-algebraic-embedding-extension",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\\Omega$ be\nalgebraically closed, and let $\\sigma:F\\to\\Omega$ be a field embedding. Then\n$\\sigma$ extends to a field embedding $\\widetilde\\sigma:K\\to\\Omega$. The proof\nuses Zorn's lemma.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-algebraic-closure",
   "source_section": "Definition",
   "quote": "An **algebraic closure** of a field $F$ is a field extension $\\overline F/F$\nthat is algebraic ([[def-algebraic-and-transcendental-elements]]) and whose\nfield $\\overline F$ is algebraically closed\n([[def-algebraically-closed-field]]). The notation $\\overline F$ denotes a\nchosen algebraic closure; it does not specify a preferred one or a preferred\nisomorphism between two choices.",
   "uses": [
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
   "claim": "If an $F$-automorphism sends $\\alpha$ to $\\beta$, then [L1] makes them conjugate.",
   "step": "1.1",
   "inputs": [
    "L1"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Conversely, suppose they are conjugate. By [L2] and [L3], there is an $F$-isomorphism $F(\\alpha)\\to F(\\beta)$ sending $\\alpha$ to $\\beta$.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Apply [L4] with base $F(\\alpha)$ to extend this map to an embedding $\\tau:\\Omega\\to\\Omega$. Its image $E$ is algebraically closed because it is isomorphic to $\\Omega$. Every $b\\in\\Omega$ is algebraic over $F\\subseteq E$ by [L5], so [L6] gives its minimal polynomial over $E$; this polynomial has a root in $E$ and is therefore linear. Hence $b\\in E$, so $\\tau$ is surjective and is an automorphism.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L4",
    "L5",
    "L6"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "This automorphism sends $\\alpha$ to $\\beta$, proving the reverse implication.",
   "step": "3.1",
   "inputs": [
    "step 1.2",
    "step 2.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, no possibly empty indexed operation occurs; the proof instead begins from One direction is preservation of minimal polynomials."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from One direction is preservation of minimal polynomials."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, step 1.1 states: \"If an $F$-automorphism sends $\\alpha$ to $\\beta$, then [L1] makes them conjugate.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, step 1.1 states: \"If an $F$-automorphism sends $\\alpha$ to $\\beta$, then [L1] makes them conjugate.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from One direction is preservation of minimal polynomials."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, step 2.1 states: \"Apply [L4] with base $F(\\alpha)$ to extend this map to an embedding $\\tau:\\Omega\\to\\Omega$. Its image $E$ is algebraically closed because it is isomorphic to $\\Omega$. Every $b\\in\\Omega$ is algebraic over $F\\subseteq E$ by [L5], so [L6] gives its minimal polynomial over $E$; this polynomial has a root in $E$ and is therefore linear. Hence $b\\in E$, so $\\tau$ is surjective and is an automorphism.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, step 1.1 proves that an F-automorphism carrying alpha to beta makes the two elements conjugate."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, steps 1.2, 2.1, and 3.1 extend the isomorphism determined by conjugacy to an automorphism carrying alpha to beta."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-finite-normal-closures-exist-and-are-finite

```markdown
---
id: thm-finite-normal-closures-exist-and-are-finite
kind: theorem
title: "The normal closure of a finite extension exists and is finite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normal-closure-of-an-algebraic-extension, cor-splitting-fields-exist-for-finite-families, prop-algebraic-splitting-extensions-are-normal, thm-finitely-generated-algebraic-extensions-are-finite, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 9.15: Normal extensions"
      url: "https://stacks.math.columbia.edu/tag/09HL"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite extension embedded in an algebraic closure $\Omega$ of
$F$. Its normal closure in $\Omega$ is a finite extension of $F$. If
$K=F(\alpha_1,\ldots,\alpha_r)$, it is the splitting field in $\Omega$ of the
product of the minimal polynomials of the $\alpha_i$.

## Facts & Assumptions

**Given:** A finite extension $F\subseteq K\subseteq\Omega$ with $\Omega/F$ an algebraic closure.

[L1] The normal closure is the intersection of the normal intermediate extensions containing $K$ ([[def-normal-closure-of-an-algebraic-extension]]).

[L2] A finite family of nonzero polynomials has a splitting field ([[cor-splitting-fields-exist-for-finite-families]]).

[L3] An algebraic splitting extension is normal ([[prop-algebraic-splitting-extensions-are-normal]]).

[L4] A field generated by finitely many algebraic elements is finite over the base ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L5] A finite extension is finite-dimensional over its base ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $F$-basis of $K$ using [L5]; it is also a finite generating family $\alpha_1,\ldots,\alpha_r$. Let $f_i$ be the minimal polynomial of $\alpha_i$ over $F$, and inside $\Omega$ let $E$ be the field generated by all roots of $f_1\cdots f_r$. [L2, L5, choose]

2.1 The field $E$ is generated by finitely many algebraic roots, so [L4] makes $E/F$ finite. It is a splitting field of the product and is normal by [L3], and it contains every $\alpha_i$, hence $K$. [step 1.1, L3, L4]

2.2 If $H/F$ is any normal intermediate extension in $\Omega$ containing $K$, then each $f_i$, having the root $\alpha_i\in H$, splits in $H$. Thus $H$ contains all generators of $E$ and $E\subseteq H$. [step 1.1, algebra]

3.1 Therefore $E$ is contained in every field intersected in [L1], while step 2.1 makes $E$ one of those fields. It equals the normal closure, which is consequently finite. [step 2.1, step 2.2, L1] ∎

```

### Recorded proof contract for thm-finite-normal-closures-exist-and-are-finite

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-normal-closure-of-an-algebraic-extension",
   "source_section": "Definition",
   "quote": "Let $F\\subseteq K\\subseteq\\Omega$, where $K/F$ is algebraic and $\\Omega/F$ is\na fixed algebraic closure ([[def-algebraic-closure]]). The **normal closure of\n$K/F$ in $\\Omega$** is\n\n$$N_{\\Omega}(K/F):=\\bigcap\\{E:K\\subseteq E\\subseteq\\Omega\\text{ and }E/F\\text{ is normal}\\}.$$\n\nThe family being intersected is nonempty: $\\Omega/F$ is normal because every\nminimal polynomial over $F$ splits in the algebraically closed field $\\Omega$\n([[def-normal-algebraic-extension]]). Its intersection is normal by\n[[prop-nonempty-intersections-of-normal-subextensions-are-normal]], so the\ndefinition produces the smallest normal intermediate extension containing $K$.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-splitting-fields-exist-for-finite-families",
   "source_section": "Statement",
   "quote": "Let $f_1,\\ldots,f_m\\in F[x]$ be nonzero, where $m\\in\\mathbb N$. A splitting field of the product\n$$ h=\\prod_{j=1}^m f_j $$\nis a splitting field of the family $\\{f_1,\\ldots,f_m\\}$. Hence every finite family of nonzero polynomials has a splitting field. For $m=0$, $h=1$ and the splitting field is $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "prop-algebraic-splitting-extensions-are-normal",
   "source_section": "Statement",
   "quote": "Let $E/F$ be algebraic. If $E$ is a splitting field over $F$ of a nonzero polynomial $f\\in F[x]$, then $E/F$ is normal.",
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
    "2.1"
   ]
  },
  {
   "fact": "L5",
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
   "claim": "Choose a finite $F$-basis of $K$ using [L5]; it is also a finite generating family $\\alpha_1,\\ldots,\\alpha_r$. Let $f_i$ be the minimal polynomial of $\\alpha_i$ over $F$, and inside $\\Omega$ let $E$ be the field generated by all roots of $f_1\\cdots f_r$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "L5",
    "choose"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The field $E$ is generated by finitely many algebraic roots, so [L4] makes $E/F$ finite. It is a splitting field of the product and is normal by [L3], and it contains every $\\alpha_i$, hence $K$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "L4"
   ]
  },
  {
   "id": "step-2-2",
   "claim": "If $H/F$ is any normal intermediate extension in $\\Omega$ containing $K$, then each $f_i$, having the root $\\alpha_i\\in H$, splits in $H$. Thus $H$ contains all generators of $E$ and $E\\subseteq H$.",
   "step": "2.2",
   "inputs": [
    "step 1.1",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Therefore $E$ is contained in every field intersected in [L1], while step 2.1 makes $E$ one of those fields. It equals the normal closure, which is consequently finite.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "step 2.2",
    "L1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For The normal closure of a finite extension exists and is finite, step 1.1 states: \"Choose a finite $F$-basis of $K$ using [L5]; it is also a finite generating family $\\alpha_1,\\ldots,\\alpha_r$. Let $f_i$ be the minimal polynomial of $\\alpha_i$ over $F$, and inside $\\Omega$ let $E$ be the field generated by all roots of $f_1\\cdots f_r$.\" This is the final proof check that the possibly empty family, list, union, product, or tower has its neutral case computed."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For The normal closure of a finite extension exists and is finite, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For The normal closure of a finite extension exists and is finite, no free numerical parameter has a separate value-one branch; the proof instead begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For The normal closure of a finite extension exists and is finite, step 2.2 states: \"If $H/F$ is any normal intermediate extension in $\\Omega$ containing $K$, then each $f_i$, having the root $\\alpha_i\\in H$, splits in $H$. Thus $H$ contains all generators of $E$ and $E\\subseteq H$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For The normal closure of a finite extension exists and is finite, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For The normal closure of a finite extension exists and is finite, step 2.2 states: \"If $H/F$ is any normal intermediate extension in $\\Omega$ containing $K$, then each $f_i$, having the root $\\alpha_i\\in H$, splits in $H$. Thus $H$ contains all generators of $E$ and $E\\subseteq H$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim The normal closure of a finite extension exists and is finite is not a biconditional, so no forward implication is asserted; the proof begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim The normal closure of a finite extension exists and is finite is not a biconditional, so no reverse implication is asserted; the proof begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-separable-degree-is-independent-of-the-algebraic-closure

```markdown
---
id: thm-separable-degree-is-independent-of-the-algebraic-closure
kind: theorem
title: "The separable degree is independent of the chosen algebraic closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-degree, def-extension-degree-and-finite-extension, thm-evaluation-kernel-and-minimal-polynomial, def-polynomials-that-split-and-splitting-fields, cor-splitting-fields-are-unique-up-to-base-isomorphism]
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

For a finite extension $K/F$, the number of $F$-embeddings of $K$ into an
algebraic closure of $F$ is independent of the chosen algebraic closure.

## Facts & Assumptions

**Given:** A finite extension $K/F$ and algebraic closures $\Omega_1/F$ and $\Omega_2/F$.

[L1] Separable degree is the finite cardinality of the set of base-field embeddings into a chosen algebraic closure ([[def-separable-degree]]).

[L2] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

[L3] Every algebraic element has a unique monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L4] A splitting field of a polynomial is generated over the base by all of its roots ([[def-polynomials-that-split-and-splitting-fields]]).

[L5] Any two splitting fields of the same nonzero polynomial are isomorphic over the base ([[cor-splitting-fields-are-unique-up-to-base-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $F$-basis $\alpha_1,\ldots,\alpha_r$ of $K$ by [L2], and let $f$ be the product of their minimal polynomials over $F$ from [L3]. For $j=1,2$, let $E_j\subseteq\Omega_j$ be generated over $F$ by all roots of $f$ in $\Omega_j$. Since $\Omega_j$ is algebraically closed, $f$ splits there, and [L4] makes $E_j/F$ a splitting field of $f$. [L2, L3, L4, choose]

1.2 By [L5], choose an $F$-isomorphism $\theta:E_1\to E_2$. Postcomposition with $\theta$ gives a bijection $\operatorname{Hom}_F(K,E_1)\to\operatorname{Hom}_F(K,E_2)$, with inverse given by postcomposition with $\theta^{-1}$. [L5, construct]

2.1 Every $F$-embedding $\sigma:K\to\Omega_j$ sends each $\alpha_i$ to a root of its minimal polynomial, so $\sigma(K)=F(\sigma(\alpha_1),\ldots,\sigma(\alpha_r))\subseteq E_j$. Hence $\operatorname{Hom}_F(K,\Omega_j)=\operatorname{Hom}_F(K,E_j)$. [step 1.1, L3, algebra]

3.1 Steps 2.1 and 1.2 give a bijection between the embedding sets into $\Omega_1$ and $\Omega_2$. Their finite cardinalities are equal, so the value in [L1] is independent of the closure. [step 2.1, step 1.2, L1] ∎

```

### Recorded proof contract for thm-separable-degree-is-independent-of-the-algebraic-closure

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-separable-degree",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a finite field extension\n([[def-extension-degree-and-finite-extension]]) and let $\\Omega/F$ be an\nalgebraic closure. Assuming Choice, such a field exists by\n[[thm-existence-of-algebraic-closures]]. The\n**separable degree** of $K/F$ is\n\n$$[K:F]_s:=\\left|\\operatorname{Hom}_F(K,\\Omega)\\right|,$$\n\nwhere $\\operatorname{Hom}_F$ denotes the set of $F$-embeddings of\n[[def-f-homomorphisms-and-embeddings-of-field-extensions]]. This set is finite:\na finite $F$-basis generates $K$, an embedding is determined by the images of\nthose finitely many generators, and each image is among the finitely many roots\nof its minimal polynomial by\n[[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]].\nThus its cardinality is defined by [[def-finite-cardinality]]. The value is\nindependent of the chosen algebraic closure by\n[[thm-separable-degree-is-independent-of-the-algebraic-closure]].",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-extension-degree-and-finite-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. Scalar multiplication by $F\\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is\n\n$$[K:F]:=\\dim_FK.$$\n\nNo numerical degree is assigned here to an infinite-dimensional extension.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-evaluation-kernel-and-minimal-polynomial",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and $a\\in K$. Evaluation is the unique\n$F$-algebra homomorphism\n$$\\operatorname{ev}_a:F[x]\\longrightarrow K,\\qquad f\\longmapsto f(a).$$\nIf $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a\nunique monic irreducible polynomial $m_a\\in F[x]$ such that\n$$\\ker(\\operatorname{ev}_a)=(m_a),$$\nand, for every $f\\in F[x]$,\n$$f(a)=0\\quad\\Longleftrightarrow\\quad m_a\\mid f.$$\nThe polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-polynomials-that-split-and-splitting-fields",
   "source_section": "Definition",
   "quote": "For a family $\\mathcal F$ of nonzero polynomials in $F[x]$, a **splitting field of $\\mathcal F$ over $F$** is a field extension $E/F$ such that every member of $\\mathcal F$ splits over $E$ and $E$ is generated over $F$ by all roots in $E$ of all polynomials in $\\mathcal F$. A splitting field of the one-element family $\\{f\\}$ is called a splitting field of $f$. For the empty family, the set of roots is empty and its splitting field is $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "cor-splitting-fields-are-unique-up-to-base-isomorphism",
   "source_section": "Statement",
   "quote": "If $E/F$ and $E'/F$ are splitting fields of the same nonzero polynomial $f\\in F[x]$, then there is a field isomorphism $E\\to E'$ that fixes $F$ pointwise.",
   "uses": [
    "1.2"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Choose a finite $F$-basis $\\alpha_1,\\ldots,\\alpha_r$ of $K$ by [L2], and let $f$ be the product of their minimal polynomials over $F$ from [L3]. For $j=1,2$, the subfield $E_j\\subseteq\\Omega_j$ generated by all roots of $f$ is a splitting field by [L4].",
   "step": "1.1",
   "inputs": [
    "L2",
    "L3",
    "L4",
    "choose"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "By [L5], choose an $F$-isomorphism $\\theta:E_1\\to E_2$. Postcomposition with $\\theta$ is a bijection of the two embedding sets, with inverse induced by $\\theta^{-1}$.",
   "step": "1.2",
   "inputs": [
    "L5",
    "construct"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Every $F$-embedding of $K$ into $\\Omega_j$ sends the chosen basis generators to roots of their minimal polynomials, so its image lies in $E_j$ and $\\operatorname{Hom}_F(K,\\Omega_j)=\\operatorname{Hom}_F(K,E_j)$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Steps 2.1 and 1.2 give a bijection between the embedding sets into $\\Omega_1$ and $\\Omega_2$, so their finite cardinalities and the value in [L1] agree.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "step 1.2",
    "L1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "A finite extension is a nonzero finite-dimensional vector space, so its basis in step 1.1 is nonempty and no empty product occurs."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The polynomial in step 1.1 is a product of nonzero monic minimal polynomials, so the nonzero-polynomial hypothesis of [L5] is met."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "In step 1.1, for $K=F$ choose the basis $(1)$; both generated splitting fields are $F$, and the two embedding sets are singletons."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Repeated roots of the product do not matter: $E_j$ is generated by the set of all roots, and step 2.1 uses only root containment."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "All parameters are fields, polynomials, and finite sets; there is no ordered or limiting endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Step 1.1 uses the supplied algebraic closures and a finite basis, while step 1.2 uses [L5] for the splitting-field isomorphism."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement is an invariance assertion, not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement is an invariance assertion, not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

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

---

# DEPENDENCY TEXT — the cited items, in full

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

## DEPENDENCY: lem-polynomials-and-roots-transport-along-field-isomorphisms

```markdown
---
id: lem-polynomials-and-roots-transport-along-field-isomorphisms
kind: lemma
title: 'A field isomorphism transports polynomials coefficientwise and carries roots, factorizations, and splitting to roots, factorizations, and splitting'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-homomorphism, thm-universal-property-of-a-polynomial-ring, def-polynomial-evaluation-and-root, def-polynomials-that-split-and-splitting-fields]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Section 21.2'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
pipeline_run: frontier-12
---

## Statement

Let $\tau:E\to E'$ be a field isomorphism carrying a subfield $F\subseteq E$ onto $F'\subseteq E'$, and write $\sigma=\tau|_F$. Then
$$ \sigma_*:F[x]\longrightarrow F'[x],\qquad \sum_i a_ix^i\longmapsto\sum_i\sigma(a_i)x^i $$
is a ring isomorphism, and for every $f\in F[x]$ and $\alpha\in E$,
$$ \tau(f(\alpha))=(\sigma_*f)(\tau(\alpha)). $$
Consequently $\tau$ carries roots of $f$ bijectively to roots of $\sigma_*f$, transports factorizations coefficientwise, and carries a splitting field of $f$ over $F$ to a splitting field of $\sigma_*f$ over $F'$.

## Facts & Assumptions

**Given:** An isomorphism $\tau:E\to E'$ with $\tau(F)=F'$ and restriction $\sigma:F\to F'$.

[F1] A coefficient homomorphism and the chosen image of $x$ determine a unique homomorphism of polynomial rings ([[thm-universal-property-of-a-polynomial-ring]]).

[F2] Polynomial evaluation is substitution into the coefficient sum, and a root is an element where that evaluation is zero ([[def-polynomial-evaluation-and-root]]).

[F3] A splitting field is generated over the base by all roots of a polynomial that splits there ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to $\sigma$ and the indeterminate $x\in F'[x]$. This gives $\sigma_*$ with the displayed coefficient formula. Applying the same construction to $\sigma^{-1}$ gives its inverse, so $\sigma_*$ is an isomorphism. [F1]

1.2 For $f=\sum_i a_ix^i$, the homomorphism laws give $\tau(f(\alpha))=\sum_i\sigma(a_i)\tau(\alpha)^i=(\sigma_*f)(\tau(\alpha))$. Thus $f(\alpha)=0$ if and only if $(\sigma_*f)(\tau(\alpha))=0$, because $\tau$ is injective. [F2, algebra]

2.1 Applying the construction of step 1.1 to $\tau$ gives a coefficientwise isomorphism $\tau_*:E[x]\to E'[x]$ extending $\sigma_*$. It transports every product factorisation and, in particular, a linear factorisation of $f$ to one of $\sigma_*f$. Since $\tau$ is bijective, step 1.2 gives a bijection of root sets, and $\tau(F(\text{roots of }f))=F'(\text{roots of }\sigma_*f)$. The splitting-field claim follows from [F3]. [F1, F3, step 1.1, step 1.2] ∎

```

## DEPENDENCY: def-f-homomorphisms-and-embeddings-of-field-extensions

```markdown
---
id: def-f-homomorphisms-and-embeddings-of-field-extensions
kind: definition
title: "$F$-homomorphisms and $F$-embeddings of field extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-homomorphism, def-field-extension-generated-subfields-and-simple-extension]
justified_by: []
aliases: []
landmark: false
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

## DEPENDENCY: def-conjugate-elements-over-a-field

```markdown
---
id: def-conjugate-elements-over-a-field
kind: definition
title: "Conjugate algebraic elements over a field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-f-homomorphisms-and-embeddings-of-field-extensions, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
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

Let $\alpha$ and $\beta$ be elements of field extensions of $F$, both
algebraic over $F$. They are **conjugate over $F$** when they have the same
minimal polynomial over $F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]),
or equivalently when $\beta$ is a root of the minimal polynomial of $\alpha$.
The relation is relative to the chosen base field. Relative embeddings and
automorphisms are those of
[[def-f-homomorphisms-and-embeddings-of-field-extensions]].

```

## DEPENDENCY: prop-base-field-embeddings-carry-elements-to-conjugates

```markdown
---
id: prop-base-field-embeddings-carry-elements-to-conjugates
kind: proposition
title: "A base-field embedding carries an algebraic element to a conjugate"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-elements-over-a-field, lem-polynomials-and-roots-transport-along-field-isomorphisms, prop-endomorphisms-of-a-splitting-field-permute-its-roots]
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

Let $\sigma:K\to L$ be an $F$-embedding and let $\alpha\in K$ be algebraic
over $F$. Then $\sigma(\alpha)$ is conjugate to $\alpha$ over $F$. In
particular, an $F$-endomorphism of a splitting field permutes the distinct roots
of every base polynomial that splits there.

## Facts & Assumptions

**Given:** An $F$-embedding $\sigma:K\to L$ and an element $\alpha\in K$ algebraic over $F$.

[L1] A field isomorphism transports polynomial evaluation and carries roots to roots after applying the induced coefficient map ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[L2] An endomorphism of a splitting field fixing the base permutes the finite set of distinct roots of the defining polynomial ([[prop-endomorphisms-of-a-splitting-field-permute-its-roots]]).

[L3] Conjugate elements are the roots of the same minimal polynomial over the base ([[def-conjugate-elements-over-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Regard $\sigma$ as an isomorphism $K\to\sigma(K)\subseteq L$. Let $m_\alpha\in F[x]$ be the minimal polynomial of $\alpha$. Since $\sigma$ fixes $F$, [L1] gives $m_\alpha(\sigma(\alpha))=\sigma(m_\alpha(\alpha))=0$. [L1]

2.1 Thus $\sigma(\alpha)$ is a root of $m_\alpha$ and is conjugate to $\alpha$ by [L3]. [step 1.1, L3]

3.1 When $K=L$ is a splitting field, [L2] strengthens this root preservation to a permutation of the distinct roots. [L2] ∎

```

## DEPENDENCY: def-normal-closure-of-an-algebraic-extension

```markdown
---
id: def-normal-closure-of-an-algebraic-extension
kind: definition
title: "The normal closure of an algebraic extension inside a fixed algebraic closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normal-algebraic-extension, def-algebraic-closure, prop-nonempty-intersections-of-normal-subextensions-are-normal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 9.15: Normal extensions"
      url: "https://stacks.math.columbia.edu/tag/09HL"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $F\subseteq K\subseteq\Omega$, where $K/F$ is algebraic and $\Omega/F$ is
a fixed algebraic closure ([[def-algebraic-closure]]). The **normal closure of
$K/F$ in $\Omega$** is

$$N_{\Omega}(K/F):=\bigcap\{E:K\subseteq E\subseteq\Omega\text{ and }E/F\text{ is normal}\}.$$

The family being intersected is nonempty: $\Omega/F$ is normal because every
minimal polynomial over $F$ splits in the algebraically closed field $\Omega$
([[def-normal-algebraic-extension]]). Its intersection is normal by
[[prop-nonempty-intersections-of-normal-subextensions-are-normal]], so the
definition produces the smallest normal intermediate extension containing $K$.

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

## DEPENDENCY: prop-algebraic-splitting-extensions-are-normal

```markdown
---
id: prop-algebraic-splitting-extensions-are-normal
kind: proposition
title: 'An algebraic extension that is a splitting field of a polynomial is normal'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-normal-algebraic-extension, thm-splitting-fields-exist-for-nonzero-polynomials, lem-an-isomorphism-extends-across-a-simple-root-adjunction, thm-isomorphisms-extend-to-splitting-fields, def-polynomials-that-split-and-splitting-fields]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Lemma 9.15.9'
      url: 'https://stacks.math.columbia.edu/tag/09HQ'
    - title: 'J. S. Milne, Fields and Galois Theory, Proposition 2.12'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Statement

Let $E/F$ be algebraic. If $E$ is a splitting field over $F$ of a nonzero polynomial $f\in F[x]$, then $E/F$ is normal.

## Facts & Assumptions

**Given:** An algebraic extension $E/F$ that is a splitting field of $0\ne f\in F[x]$.

[F1] Corresponding roots of a transported irreducible polynomial give an isomorphism between their simple adjunctions ([[lem-an-isomorphism-extends-across-a-simple-root-adjunction]]).

[F2] A base isomorphism extends to an isomorphism between splitting fields of corresponding polynomials ([[thm-isomorphisms-extend-to-splitting-fields]]).

[F3] A splitting field is generated over its base by all roots of the polynomial ([[def-polynomials-that-split-and-splitting-fields]]).

[F4] Normality requires every minimal polynomial of an element of $E$ to split over $E$ ([[def-normal-algebraic-extension]]).

[F5] Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

## Proof

**Proof technique:** direct conjugate argument.

1.1 Fix $\alpha\in E$ and let $m$ be its minimal polynomial over $F$. By [F5], choose a splitting field $\Omega/E$ of $m$, and let $\beta$ be any root of $m$ in $\Omega$. By [F1], the identity on $F$ extends to an isomorphism $\sigma_0:F(\alpha)\to F(\beta)$ sending $\alpha$ to $\beta$. [F1, F5]

2.1 The field $E$ is a splitting field of $f$ over $F(\alpha)$, because it splits $f$ and is generated by its roots. The field $E(\beta)$ is a splitting field of $f$ over $F(\beta)$ for the same reason. Since $\sigma_0$ fixes the coefficients of $f$, [F2] extends it to an isomorphism $\sigma:E\to E(\beta)$. [F2, F3, step 1.1]

3.1 Every generator of $E$ over $F$ is a root of $f$. The map $\sigma$ fixes $F$ and therefore carries each such generator to another root of $f$, all of which already lie in $E$. Hence $\sigma(E)\subseteq E$. But $\sigma(E)=E(\beta)$ by surjectivity, so $\beta\in E$. [F3, step 2.1]

4.1 Every root $\beta$ of the minimal polynomial $m$ lies in $E$, so $m$ splits over $E$. Since $\alpha$ was arbitrary and $E/F$ is algebraic by hypothesis, [F4] proves normality. [F4, step 1.1, step 3.1] ∎

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

## DEPENDENCY: def-extension-degree-and-finite-extension

```markdown
---
id: def-extension-degree-and-finite-extension
kind: definition
title: "The degree $[K:F]=\\dim_F K$ of a finite field extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-extension-generated-subfields-and-simple-extension, def-dimension]
justified_by: []
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
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a field extension. Scalar multiplication by $F\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is

$$[K:F]:=\dim_FK.$$

No numerical degree is assigned here to an infinite-dimensional extension.

```

## DEPENDENCY: def-separable-degree

```markdown
---
id: def-separable-degree
kind: definition
title: "The separable degree $[K:F]_s$ as a count of embeddings into an algebraic closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-f-homomorphisms-and-embeddings-of-field-extensions, def-algebraic-closure, def-extension-degree-and-finite-extension, thm-existence-of-algebraic-closures, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, def-finite-cardinality]
justified_by: [thm-separable-degree-is-independent-of-the-algebraic-closure]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a finite field extension
([[def-extension-degree-and-finite-extension]]) and let $\Omega/F$ be an
algebraic closure. Assuming Choice, such a field exists by
[[thm-existence-of-algebraic-closures]]. The
**separable degree** of $K/F$ is

$$[K:F]_s:=\left|\operatorname{Hom}_F(K,\Omega)\right|,$$

where $\operatorname{Hom}_F$ denotes the set of $F$-embeddings of
[[def-f-homomorphisms-and-embeddings-of-field-extensions]]. This set is finite:
a finite $F$-basis generates $K$, an embedding is determined by the images of
those finitely many generators, and each image is among the finitely many roots
of its minimal polynomial by
[[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]].
Thus its cardinality is defined by [[def-finite-cardinality]]. The value is
independent of the chosen algebraic closure by
[[thm-separable-degree-is-independent-of-the-algebraic-closure]].

```

## DEPENDENCY: def-polynomials-that-split-and-splitting-fields

```markdown
---
id: def-polynomials-that-split-and-splitting-fields
kind: definition
title: 'Polynomials that split and splitting fields of a polynomial or a family of polynomials'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-extension-generated-subfields-and-simple-extension, def-polynomial-evaluation-and-root, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: [splitting field]
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
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Section 21.2'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
    - title: 'J. S. Milne, Fields and Galois Theory, Chapter 2'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Definition

Let $E/F$ be a field extension and let $0\ne f\in F[x]$ have degree $n$. The polynomial $f$ **splits over $E$** if there are $c\in F^\times$ and $\alpha_1,\ldots,\alpha_n\in E$ such that
$$ f(x)=c\prod_{j=1}^n(x-\alpha_j) $$
in $E[x]$, with repetitions allowed. When $n=0$, the product is empty, so every nonzero constant polynomial splits over $F$.

For a family $\mathcal F$ of nonzero polynomials in $F[x]$, a **splitting field of $\mathcal F$ over $F$** is a field extension $E/F$ such that every member of $\mathcal F$ splits over $E$ and $E$ is generated over $F$ by all roots in $E$ of all polynomials in $\mathcal F$. A splitting field of the one-element family $\{f\}$ is called a splitting field of $f$. For the empty family, the set of roots is empty and its splitting field is $F$.

```

## DEPENDENCY: cor-splitting-fields-are-unique-up-to-base-isomorphism

```markdown
---
id: cor-splitting-fields-are-unique-up-to-base-isomorphism
kind: corollary
title: 'Any two splitting fields of a polynomial are isomorphic over the base field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-isomorphisms-extend-to-splitting-fields]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Corollary 21.14'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
pipeline_run: frontier-12
---

## Statement

If $E/F$ and $E'/F$ are splitting fields of the same nonzero polynomial $f\in F[x]$, then there is a field isomorphism $E\to E'$ that fixes $F$ pointwise.

## Facts & Assumptions

**Given:** Two splitting fields $E/F$ and $E'/F$ of the same nonzero polynomial.

[F1] A base-field isomorphism extends to an isomorphism between splitting fields of the corresponding transported polynomials ([[thm-isomorphisms-extend-to-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to the identity isomorphism of $F$. It transports $f$ to itself and therefore extends to an isomorphism $E\to E'$ fixing $F$. [F1]

2.1 This includes nonzero constants, whose splitting fields have empty root sets and both equal $F$. [F1, step 1.1] ∎

```

## DEPENDENCY: thm-multiplicativity-of-separable-degree

```markdown
---
id: thm-multiplicativity-of-separable-degree
kind: theorem
title: "Separable degree is multiplicative in finite towers: $[L:F]_s=[L:K]_s[K:F]_s$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-degree, lem-restriction-fibres-for-embeddings-in-a-finite-tower]
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

For every finite tower $F\subseteq K\subseteq L$,

$$[L:F]_s=[L:K]_s[K:F]_s.$$

## Facts & Assumptions

**Given:** A finite tower $F\subseteq K\subseteq L$ and an algebraic closure $\Omega/F$.

[L1] Separable degree counts embeddings into an algebraic closure ([[def-separable-degree]]).

[L2] Restriction from $F$-embeddings of $L$ to $F$-embeddings of $K$ is surjective, and every fibre has cardinality $[L:K]_s$ ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the finite set $\operatorname{Hom}_F(L,\Omega)$ is the disjoint union of the restriction fibres indexed by $\operatorname{Hom}_F(K,\Omega)$. [L2]

2.1 There are $[K:F]_s$ fibres by [L1], and each has $[L:K]_s$ elements by [L2]. Counting the disjoint union gives the displayed product. [step 1.1, L1, L2, algebra] ∎

```

## DEPENDENCY: thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots

```markdown
---
id: thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
kind: theorem
title: "$F$-embeddings of $F(\\alpha)$ into an algebraically closed field correspond to the distinct roots of $m_{\\alpha}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-base-field-embeddings-carry-elements-to-conjugates, thm-universal-property-of-adjoining-an-irreducible-root, def-algebraically-closed-field]
justified_by: []
aliases: []
landmark: true
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

Let $\alpha$ be algebraic over $F$, and let $\Omega$ be an algebraically closed
field containing $F$. Sending an $F$-embedding
$\sigma:F(\alpha)\to\Omega$ to $\sigma(\alpha)$ is a bijection from the set of
such embeddings to the set of distinct roots in $\Omega$ of the minimal
polynomial $m_\alpha$. Consequently the number of embeddings is the number of
distinct roots of $m_\alpha$, not the sum of their multiplicities.

## Facts & Assumptions

**Given:** An algebraic element $\alpha$ over $F$, its minimal polynomial $m_\alpha$, and an algebraically closed overfield $\Omega$ of $F$.

[L1] An $F$-embedding carries an algebraic element to a conjugate root of its minimal polynomial ([[prop-base-field-embeddings-carry-elements-to-conjugates]]).

[L2] For a monic irreducible polynomial, every chosen root in an extension induces a unique homomorphism from the quotient adjoining that root ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L3] Every nonconstant polynomial over an algebraically closed field has a root there ([[def-algebraically-closed-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the image $\sigma(\alpha)$ of every $F$-embedding is a root of $m_\alpha$ in $\Omega$. [L1]

1.2 Conversely, if $\beta\in\Omega$ is a root of $m_\alpha$, [L2] applied to the two realizations of $F[x]/(m_\alpha)$ gives a unique $F$-embedding $F(\alpha)\to\Omega$ with $\alpha\mapsto\beta$. [L2]

2.1 The constructions in steps 1.1 and 1.2 are inverse because an $F$-homomorphism on $F(\alpha)$ is determined by the image of $\alpha$. [step 1.1, step 1.2]

3.1 The polynomial $m_\alpha$ splits in $\Omega$ by repeated use of [L3], and the bijection indexes embeddings by its distinct roots, so repeated roots are counted once. [step 2.1, L3] ∎

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
