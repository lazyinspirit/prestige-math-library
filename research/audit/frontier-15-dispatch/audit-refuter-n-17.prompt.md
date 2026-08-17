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
label: n-17

run: frontier-15
role: refuter
label: n-17
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

## ITEM: thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core

```markdown
---
id: thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core
kind: theorem
title: "In characteristic $p$, every irreducible polynomial is uniquely $g(x^{p^e})$ with $g$ irreducible and separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-is-separable-iff-coprime-to-its-derivative, thm-frobenius-endomorphism-and-finite-field-automorphism, lem-polynomial-factorisation-into-irreducibles]
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

Let $F$ have characteristic $p>0$ and let $f\in F[x]$ be nonconstant and
irreducible. There are unique $e\in\mathbb N$ and $g\in F[x]$ such that

$$f(x)=g(x^{p^e}),$$

$g$ is irreducible and separable, and $e$ is maximal with this property. The
case $e=0$ occurs exactly when $f$ is separable.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $p>0$ and a nonconstant irreducible polynomial $f\in F[x]$.

[L1] A nonzero polynomial is separable exactly when it is coprime to its formal derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

[L2] In characteristic $p$, Frobenius is an injective endomorphism and $(a+b)^p=a^p+b^p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L3] Every nonzero nonunit polynomial over a field factors into irreducibles ([[lem-polynomial-factorisation-into-irreducibles]]).

## Proof

**Proof technique:** direct.

1.1 The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\ne0$. [L2, algebra]

2.1 If $g=uv$ with both factors nonconstant, then $f=u(x^{p^e})v(x^{p^e})$, contradicting irreducibility of $f$; hence $g$ is irreducible. [step 1.1, algebra]

3.1 Since $g'\ne0$, any nonunit common divisor of $g$ and $g'$ has an irreducible factor by [L3], which would divide the irreducible $g$ and hence force $g\mid g'$, impossible by degree; thus $\gcd(g,g')=1$ and [L1] makes $g$ separable. [step 1.1, step 2.1, L1, L3]

4.1 The exponents occurring in $f$ determine their largest common power $p^e$, so $e$ and then the coefficient-preserving core $g$ are unique. Moreover $e=0$ exactly when $f'\ne0$, which for irreducible $f$ is equivalent to separability by [L1]. [step 1.1, step 3.1, L1] ∎

```

### Recorded proof contract for thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-polynomial-is-separable-iff-coprime-to-its-derivative",
   "source_section": "Statement",
   "quote": "Let $F$ be a field and let $0\\ne f\\in F[x]$. Then $f$ is separable over $F$ if and only if $\\gcd(f,f')=1$ in $F[x]$.",
   "uses": [
    "3.1",
    "4.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-frobenius-endomorphism-and-finite-field-automorphism",
   "source_section": "Statement",
   "quote": "Let $F$ be a field of characteristic $p>0$. The **Frobenius map**\n\n$$\\operatorname{Fr}_F:F\\to F,\\qquad x\\mapsto x^p,$$\n\nis an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\\mapsto x^{p^n}$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-polynomial-factorisation-into-irreducibles",
   "source_section": "Statement",
   "quote": "Every nonzero nonunit polynomial over a field is a finite product of irreducible polynomials.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\\ne0$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $g=uv$ with both factors nonconstant, then $f=u(x^{p^e})v(x^{p^e})$, contradicting irreducibility of $f$; hence $g$ is irreducible.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Since $g'\\ne0$, any nonunit common divisor of $g$ and $g'$ has an irreducible factor by [L3], which would divide the irreducible $g$ and hence force $g\\mid g'$, impossible by degree; thus $\\gcd(g,g')=1$ and [L1] makes $g$ separable.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "L1",
    "L3"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "The exponents occurring in $f$ determine their largest common power $p^e$, so $e$ and then the coefficient-preserving core $g$ are unique. Moreover $e=0$ exactly when $f'\\ne0$, which for irreducible $f$ is equivalent to separability by [L1].",
   "step": "4.1",
   "inputs": [
    "step 1.1",
    "step 3.1",
    "L1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, no possibly empty indexed operation occurs; the proof instead begins from While the derivative vanishes, every exponent is divisible by p, so write f(x)=h(x^p) without changing the coefficients and repeat."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 1.1 states: \"The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\\ne0$.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, no free numerical parameter has a separate value-one branch; the proof instead begins from While the derivative vanishes, every exponent is divisible by p, so write f(x)=h(x^p) without changing the coefficients and repeat."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 1.1 states: \"The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\\ne0$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from While the derivative vanishes, every exponent is divisible by p, so write f(x)=h(x^p) without changing the coefficients and repeat."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 1.1 states: \"The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\\ne0$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 4.1 proves that e=0 implies f' is nonzero and hence f is separable."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 4.1 also proves that separability forces f' to be nonzero, so the maximal exponent is e=0."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power

```markdown
---
id: lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power
kind: lemma
title: "If $a$ is not a $p$th power in a characteristic-$p$ field, then $x^{p^n}-a$ is irreducible for every $n\\ge1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frobenius-endomorphism-and-finite-field-automorphism, thm-polynomial-is-separable-iff-coprime-to-its-derivative, thm-splitting-fields-exist-for-nonzero-polynomials, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F$ have characteristic $p>0$, let $a\in F$ not be a $p$th power in $F$,
and let $n\ge1$. Then $x^{p^n}-a$ is irreducible in $F[x]$.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $p>0$, an element $a\notin F^p$, and a natural number $n\ge1$.

[L1] Frobenius is injective and $(u-v)^{p^r}=u^{p^r}-v^{p^r}$ in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L2] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

[L3] Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

[L4] Every irreducible polynomial in characteristic $p$ is uniquely a separable irreducible polynomial in a power $x^{p^e}$ ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

## Proof

**Proof technique:** direct.

1.1 In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root. [L1, L3]

2.1 Let $q$ be the minimal polynomial of $b$ over $F$. By [L4], write $q(x)=g(x^{p^r})$ with $g$ irreducible and separable. Every root of $q$ is also a root of $x^{p^n}-a$, hence equals $b$ by step 1.1; separability of $g$ and [L2] therefore force $g$ to be linear. Thus $q(x)=x^{p^r}-c$ for some $c=b^{p^r}\in F$ and some $0\le r\le n$. [step 1.1, L2, L4]

3.1 If $r<n$, then $a=b^{p^n}=c^{p^{n-r}}$ is a $p$th power in $F$, contrary to the hypothesis; hence $r=n$ and $q=x^{p^n}-a$. [step 2.1, algebra]

4.1 Therefore $x^{p^n}-a$ is the minimal polynomial of $b$ and is irreducible. The hypothesis excludes $a=0$ because $0=0^p$, and the same argument includes $n=1$. [step 3.1] ∎

```

### Recorded proof contract for lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-frobenius-endomorphism-and-finite-field-automorphism",
   "source_section": "Statement",
   "quote": "Let $F$ be a field of characteristic $p>0$. The **Frobenius map**\n\n$$\\operatorname{Fr}_F:F\\to F,\\qquad x\\mapsto x^p,$$\n\nis an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\\mapsto x^{p^n}$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-polynomial-is-separable-iff-coprime-to-its-derivative",
   "source_section": "Statement",
   "quote": "Let $F$ be a field and let $0\\ne f\\in F[x]$. Then $f$ is separable over $F$ if and only if $\\gcd(f,f')=1$ in $F[x]$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-splitting-fields-exist-for-nonzero-polynomials",
   "source_section": "Statement",
   "quote": "For every field $F$ and every nonzero polynomial $f\\in F[x]$, there exists a splitting field of $f$ over $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$ and let $f\\in F[x]$ be nonconstant and\nirreducible. There are unique $e\\in\\mathbb N$ and $g\\in F[x]$ such that\n\n$$f(x)=g(x^{p^e}),$$\n\n$g$ is irreducible and separable, and $e$ is maximal with this property. The\ncase $e=0$ occurs exactly when $f$ is separable.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Let $q$ be the minimal polynomial of $b$ over $F$. By [L4], write $q(x)=g(x^{p^r})$ with $g$ irreducible and separable. Every root of $q$ is also a root of $x^{p^n}-a$, hence equals $b$ by step 1.1; separability of $g$ and [L2] therefore force $g$ to be linear. Thus $q(x)=x^{p^r}-c$ for some $c=b^{p^r}\\in F$ and some $0\\le r\\le n$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2",
    "L4"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "If $r<n$, then $a=b^{p^n}=c^{p^{n-r}}$ is a $p$th power in $F$, contrary to the hypothesis; hence $r=n$ and $q=x^{p^n}-a$.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Therefore $x^{p^n}-a$ is the minimal polynomial of $b$ and is irreducible. The hypothesis excludes $a=0$ because $0=0^p$, and the same argument includes $n=1$.",
   "step": "4.1",
   "inputs": [
    "step 3.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every nge1, no possibly empty indexed operation occurs; the proof instead begins from In an algebraic closure the polynomial is (x-b)^{p^n}."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every n\\ge1, step 1.1 states: \"In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root.\" This is the final proof check that the hypotheses exclude both a=0 and n=0."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every n\\ge1, step 1.1 states: \"In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root.\" This is the final proof check that n=1 is the first allowed exponent."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every n\\ge1, step 2.1 states: \"Let $q$ be the minimal polynomial of $b$ over $F$. By [L4], write $q(x)=g(x^{p^r})$ with $g$ irreducible and separable. Every root of $q$ is also a root of $x^{p^n}-a$, hence equals $b$ by step 1.1; separability of $g$ and [L2] therefore force $g$ to be linear. Thus $q(x)=x^{p^r}-c$ for some $c=b^{p^r}\\in F$ and some $0\\le r\\le n$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every nge1, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from In an algebraic closure the polynomial is (x-b)^{p^n}."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every n\\ge1, step 1.1 states: \"In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root.\" This is the final proof check that a splitting field exists before a geometric root is selected."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every nge1 is not a biconditional, so no forward implication is asserted; the proof begins from In an algebraic closure the polynomial is (x-b)^{p^n}."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every nge1 is not a biconditional, so no reverse implication is asserted; the proof begins from In an algebraic closure the polynomial is (x-b)^{p^n}."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-perfect-field-characterizations

```markdown
---
id: thm-perfect-field-characterizations
kind: theorem
title: "A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perfect-field, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-frobenius-endomorphism-and-finite-field-automorphism, thm-polynomial-is-separable-iff-coprime-to-its-derivative]
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

A field $F$ is perfect if and only if either $\operatorname{char}F=0$, or
$\operatorname{char}F=p>0$ and the Frobenius map $a\mapsto a^p$ is surjective.

## Facts & Assumptions

**Given:** A field $F$.

[L1] A field is perfect when all of its nonconstant irreducible polynomials are separable ([[def-perfect-field]]).

[L2] In characteristic $p$, every irreducible polynomial has a unique form $g(x^{p^e})$ with $g$ irreducible and separable ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

[L3] If $a$ is not a $p$th power, then $x^p-a$ is irreducible ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L4] Frobenius is an injective field endomorphism in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L5] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

## Proof

**Proof technique:** direct.

1.1 If $\operatorname{char}F=0$ and $f$ is irreducible, then $f'\ne0$; any common nonconstant divisor of $f$ and $f'$ would be associated to $f$, which is impossible because $\deg f'<\deg f$. Thus $\gcd(f,f')=1$, so $f$ is separable by [L5]. [L1, L5, algebra]

1.2 Suppose $\operatorname{char}F=p>0$ and Frobenius is surjective. For irreducible $f=g(x^{p^e})$ as in [L2], if $e>0$ then taking $p^e$th roots of the coefficients through repeated surjectivity and using [L4] would write $f$ as a $p^e$th power of a nonconstant polynomial, contradicting irreducibility. Hence $e=0$ and every irreducible is separable. [L2, L4]

1.3 Conversely, if Frobenius is not surjective, choose $a\notin F^p$. Then [L3] makes $x^p-a$ irreducible, while its derivative is zero, so it is not separable and $F$ is not perfect. [L1, L3]

2.1 The characteristic-zero argument and the two implications in positive characteristic establish the equivalence. [step 1.1, step 1.2, step 1.3] ∎

```

### Recorded proof contract for thm-perfect-field-characterizations

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-perfect-field",
   "source_section": "Definition",
   "quote": "A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible\npolynomial in $F[x]$ is separable\n([[def-repeated-root-and-separable-polynomial]]).",
   "uses": [
    "1.1",
    "1.3"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$ and let $f\\in F[x]$ be nonconstant and\nirreducible. There are unique $e\\in\\mathbb N$ and $g\\in F[x]$ such that\n\n$$f(x)=g(x^{p^e}),$$\n\n$g$ is irreducible and separable, and $e$ is maximal with this property. The\ncase $e=0$ occurs exactly when $f$ is separable.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-polynomial-is-separable-iff-coprime-to-its-derivative",
   "source_section": "Statement",
   "quote": "Let $F$ be a field and let $0\\ne f\\in F[x]$. Then $f$ is separable over $F$ if and only if $\\gcd(f,f')=1$ in $F[x]$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$, let $a\\in F$ not be a $p$th power in $F$,\nand let $n\\ge1$. Then $x^{p^n}-a$ is irreducible in $F[x]$.",
   "uses": [
    "1.3"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-frobenius-endomorphism-and-finite-field-automorphism",
   "source_section": "Statement",
   "quote": "Let $F$ be a field of characteristic $p>0$. The **Frobenius map**\n\n$$\\operatorname{Fr}_F:F\\to F,\\qquad x\\mapsto x^p,$$\n\nis an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\\mapsto x^{p^n}$.",
   "uses": [
    "1.2"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If $\\operatorname{char}F=0$ and $f$ is irreducible, then $f'\\ne0$; any common nonconstant divisor of $f$ and $f'$ would be associated to $f$, which is impossible because $\\deg f'<\\deg f$. Thus $\\gcd(f,f')=1$, so $f$ is separable by [L5].",
   "step": "1.1",
   "inputs": [
    "L1",
    "L5",
    "algebra"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Suppose $\\operatorname{char}F=p>0$ and Frobenius is surjective. For irreducible $f=g(x^{p^e})$ as in [L2], if $e>0$ then taking $p^e$th roots of the coefficients through repeated surjectivity and using [L4] would write $f$ as a $p^e$th power of a nonconstant polynomial, contradicting irreducibility. Hence $e=0$ and every irreducible is separable.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L4"
   ]
  },
  {
   "id": "step-1-3",
   "claim": "Conversely, if Frobenius is not surjective, choose $a\\notin F^p$. Then [L3] makes $x^p-a$ irreducible, while its derivative is zero, so it is not separable and $F$ is not perfect.",
   "step": "1.3",
   "inputs": [
    "L1",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The characteristic-zero argument and the two implications in positive characteristic establish the equivalence.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "step 1.3"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, no possibly empty indexed operation occurs; the proof instead begins from In characteristic zero a nonzero derivative of an irreducible polynomial cannot share a factor with it."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, step 1.3 states: \"Conversely, if Frobenius is not surjective, choose $a\\notin F^p$. Then [L3] makes $x^p-a$ irreducible, while its derivative is zero, so it is not separable and $F$ is not perfect.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, no free numerical parameter has a separate value-one branch; the proof instead begins from In characteristic zero a nonzero derivative of an irreducible polynomial cannot share a factor with it."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, step 1.2 states: \"Suppose $\\operatorname{char}F=p>0$ and Frobenius is surjective. For irreducible $f=g(x^{p^e})$ as in [L2], if $e>0$ then taking $p^e$th roots of the coefficients through repeated surjectivity and using [L4] would write $f$ as a $p^e$th power of a nonconstant polynomial, contradicting irreducibility. Hence $e=0$ and every irreducible is separable.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from In characteristic zero a nonzero derivative of an irreducible polynomial cannot share a factor with it."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, only supplied data are used and no unproved nonempty selection occurs; the proof begins from In characteristic zero a nonzero derivative of an irreducible polynomial cannot share a factor with it."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 1.1 proves the characteristic-zero branch via the exact gcd criterion [L5], while step 1.2 proves the positive-characteristic surjective-Frobenius branch."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Step 1.3 starts from failure of Frobenius surjectivity and constructs the irreducible inseparable polynomial $x^p-a$, proving the converse independently."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-polynomial-is-separable-iff-coprime-to-its-derivative

```markdown
title: 'A nonzero polynomial over a field is separable exactly when its gcd with its derivative is $1$'

## Statement
Let $F$ be a field and let $0\ne f\in F[x]$. Then $f$ is separable over $F$ if and only if $\gcd(f,f')=1$ in $F[x]$.
```

## DEPENDENCY: thm-frobenius-endomorphism-and-finite-field-automorphism

```markdown
title: "Frobenius $x\\mapsto x^p$ is an injective endomorphism in characteristic $p$, and an automorphism for finite fields"

## Statement
Let $F$ be a field of characteristic $p>0$. The **Frobenius map**

$$\operatorname{Fr}_F:F\to F,\qquad x\mapsto x^p,$$

is an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\mapsto x^{p^n}$.
```

## DEPENDENCY: lem-polynomial-factorisation-into-irreducibles

```markdown
title: 'Every nonzero nonunit polynomial over a field factors into irreducible polynomials'

## Statement
Every nonzero nonunit polynomial over a field is a finite product of irreducible polynomials.
```

## DEPENDENCY: thm-splitting-fields-exist-for-nonzero-polynomials

```markdown
title: 'Every nonzero polynomial over a field has a splitting field'

## Statement
For every field $F$ and every nonzero polynomial $f\in F[x]$, there exists a splitting field of $f$ over $F$.
```

## DEPENDENCY: def-perfect-field

```markdown
title: "Perfect fields: every irreducible polynomial is separable"

## Definition
A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible
polynomial in $F[x]$ is separable
([[def-repeated-root-and-separable-polynomial]]).
```
