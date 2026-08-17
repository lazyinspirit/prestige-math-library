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
label: n-23

run: frontier-15
role: refuter
label: n-23
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

## ITEM: thm-separability-is-transitive

```markdown
---
id: thm-separability-is-transitive
kind: theorem
title: "Separability is transitive in towers of algebraic extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-extension-is-separable-iff-separable-degree-is-full, thm-multiplicativity-of-separable-degree, cor-separable-degree-of-a-simple-extension-counts-distinct-roots, lem-polynomial-gcd-is-stable-under-field-extension, thm-tower-law-for-finite-field-extensions, thm-finitely-generated-algebraic-extensions-are-finite, def-separable-elements-and-separable-extensions]
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

Let $F\subseteq K\subseteq L$ be algebraic field extensions. If $K/F$ and
$L/K$ are separable, then $L/F$ is separable.

## Facts & Assumptions

**Given:** An algebraic tower $F\subseteq K\subseteq L$ with $K/F$ and $L/K$ separable, and an element $a\in L$.

[L1] A finite extension is separable exactly when its separable degree equals its ordinary degree ([[thm-finite-extension-is-separable-iff-separable-degree-is-full]]).

[L2] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

[L3] A simple extension has full separable degree exactly when its minimal polynomial has all roots distinct ([[cor-separable-degree-of-a-simple-extension-counts-distinct-roots]]).

[L4] Polynomial gcd is unchanged after extending the coefficient field ([[lem-polynomial-gcd-is-stable-under-field-extension]]).

[L5] Ordinary degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L6] Finitely many algebraic generators produce a finite extension ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L7] Separability is the elementwise separability of minimal polynomials ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Let $f\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\ldots,c_r)\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$. [L2, L3, L5, L6, L7]

1.2 The polynomial $f$ is separable over $K$ because $a$ is separable over $K$. By gcd stability [L4], it is already coprime to its derivative in $E[x]$; hence every irreducible factor over $E$, in particular the minimal polynomial of $a$ over $E$, is separable. Thus $E(a)/E$ has full separable degree by [L3]. [L3, L4, L7]

2.1 Multiplicativity [L2] and the ordinary tower law [L5] now give $[E(a):F]_s=[E(a):F]$. By [L1], $E(a)/F$ is separable, so its element $a$ is separable over $F$. [step 1.1, step 1.2, L1, L2, L5]

3.1 Since $a\in L$ was arbitrary, [L7] makes $L/F$ separable. Trivial steps of the tower are included because their degree and separable degree are both one. [step 2.1, L7] ∎

```

### Recorded proof contract for thm-separability-is-transitive

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-finite-extension-is-separable-iff-separable-degree-is-full",
   "source_section": "Statement",
   "quote": "A finite extension $K/F$ is separable if and only if\n$[K:F]_s=[K:F]$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-multiplicativity-of-separable-degree",
   "source_section": "Statement",
   "quote": "For every finite tower $F\\subseteq K\\subseteq L$,\n\n$$[L:F]_s=[L:K]_s[K:F]_s.$$",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-separable-degree-of-a-simple-extension-counts-distinct-roots",
   "source_section": "Statement",
   "quote": "If $\\alpha$ is algebraic over $F$, then $[F(\\alpha):F]_s$ equals the number of\ndistinct roots of the minimal polynomial $m_\\alpha$ in any algebraic closure of\n$F$.",
   "uses": [
    "1.1",
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-polynomial-gcd-is-stable-under-field-extension",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq E$ be a field extension and let $f,g\\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L7",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "1.1",
    "1.2",
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "L3",
    "L5",
    "L6",
    "L7"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "The polynomial $f$ is separable over $K$ because $a$ is separable over $K$. By gcd stability [L4], it is already coprime to its derivative in $E[x]$; hence every irreducible factor over $E$, in particular the minimal polynomial of $a$ over $E$, is separable. Thus $E(a)/E$ has full separable degree by [L3].",
   "step": "1.2",
   "inputs": [
    "L3",
    "L4",
    "L7"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Multiplicativity [L2] and the ordinary tower law [L5] now give $[E(a):F]_s=[E(a):F]$. By [L1], $E(a)/F$ is separable, so its element $a$ is separable over $F$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "L1",
    "L2",
    "L5"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Since $a\\in L$ was arbitrary, [L7] makes $L/F$ separable. Trivial steps of the tower are included because their degree and separable degree are both one.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L7"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 1.1 states: \"Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.\" This is the final proof check that an empty coefficient list gives E=F."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 1.1 states: \"Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.\" This is the final proof check that r=0 requires no first coefficient field."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 2.1 states: \"Multiplicativity [L2] and the ordinary tower law [L5] now give $[E(a):F]_s=[E(a):F]$. By [L1], $E(a)/F$ is separable, so its element $a$ is separable over $F$.\" This is the final proof check that either tower step may be the identity."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 1.1 states: \"Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Separability is transitive in towers of algebraic extensions, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from For L/K/F and ain L, place the finitely many coefficients of the minimal polynomial of a over K in a field E=F(c_1,ldots,c_r)subseteq K."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 1.1 states: \"Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.\" This is the final proof check that only the finite coefficient set of the chosen minimal polynomial is selected."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Separability is transitive in towers of algebraic extensions is not a biconditional, so no forward implication is asserted; the proof begins from For L/K/F and ain L, place the finitely many coefficients of the minimal polynomial of a over K in a field E=F(c_1,ldots,c_r)subseteq K."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Separability is transitive in towers of algebraic extensions is not a biconditional, so no reverse implication is asserted; the proof begins from For L/K/F and ain L, place the finitely many coefficients of the minimal polynomial of a over K in a field E=F(c_1,ldots,c_r)subseteq K."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-purely-inseparable-extension-characterizations

```markdown
---
id: thm-purely-inseparable-extension-characterizations
kind: theorem
title: "Pure inseparability and its conjugate, embedding, and separable-degree criteria"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-purely-inseparable-extension, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-algebraic-embedding-extension, lem-restriction-fibres-for-embeddings-in-a-finite-tower, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core, def-separable-degree, thm-perfect-field-characterizations, def-perfect-field]
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

## Facts & Assumptions

**Given:** Fields $F\subseteq K\subseteq\Omega$, with $K/F$ algebraic and $\Omega/F$ an algebraic closure.

[L1] Pure inseparability is the elementwise $p$-power condition in characteristic $p$, and means the trivial extension in characteristic zero ([[def-purely-inseparable-extension]]).

[L2] Embeddings of $F(\alpha)$ into an algebraic closure correspond to distinct roots of the minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Assuming Choice, an embedding of a base field extends across every algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L4] In characteristic $p$, an irreducible polynomial is uniquely $g(x^{p^e})$ with $g$ irreducible and separable ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

[L5] For a finite extension, separable degree counts its embeddings into an algebraic closure ([[def-separable-degree]]).

[L6] In a finite tower, every embedding of the middle field into an algebraic closure extends to the top field ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

[L7] Every field of characteristic zero is perfect ([[thm-perfect-field-characterizations]]).

[L8] Every nonconstant irreducible polynomial over a perfect field is separable ([[def-perfect-field]]).

## Proof

**Proof technique:** direct.

1.1 In characteristic $p$, if $\alpha^{p^n}=a\in F$, then the minimal polynomial of $\alpha$ divides $x^{p^n}-a=(x-\alpha)^{p^n}$ in $\Omega[x]$, so it has only the distinct root $\alpha$. Conversely, if the minimal polynomial has one distinct root, write it as $g(x^{p^e})$ by [L4]; the separable polynomial $g$ can then have only one root and must be linear, so the minimal polynomial is $x^{p^e}-a$ and $\alpha^{p^e}=a\in F$. [L1, L4, algebra]

1.2 If every element has one conjugate, [L2] shows that every $F$-embedding fixes every element, so the inclusion is the only embedding. If some $\alpha$ has a different conjugate, [L2] gives a nonidentity embedding of $F(\alpha)$ into $\Omega$. When $K/F$ is finite, [L6] extends it across the finite tower $F\subseteq F(\alpha)\subseteq K$; for arbitrary algebraic $K/F$, [L3] gives the same extension under Choice. Thus the unique-embedding criterion is equivalent in exactly the two settings stated. [L2, L3, L6]

2.1 Thus condition 1 is equivalent to condition 2 in positive characteristic. In characteristic zero [L7] and [L8] make every irreducible polynomial separable, so one distinct root forces degree one; hence condition 2 is equivalent to $K=F$, which is condition 1 by [L1]. [step 1.1, L1, L7, L8]

3.1 For finite $K/F$, [L5] says that having exactly one embedding is exactly $[K:F]_s=1$. Together with steps 2.1 and 1.2, this proves the finite equivalences; step 1.2 also proves the asserted arbitrary-extension equivalence under Choice. The trivial extension is included by $e=0$. [step 2.1, step 1.2, L5] ∎

```

### Recorded proof contract for thm-purely-inseparable-extension-characterizations

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-purely-inseparable-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be algebraic ([[def-algebraic-and-transcendental-elements]]). If\n$\\operatorname{char}F=p>0$, the extension is **purely inseparable** when for\nevery $\\alpha\\in K$ there is $n\\in\\mathbb N$ such that\n$\\alpha^{p^n}\\in F$. The exponent $n=0$ is allowed. If\n$\\operatorname{char}F=0$, the term purely inseparable is reserved for the\ntrivial extension $K=F$.\n\nThe powers in positive characteristic are governed by the Frobenius\nendomorphism of [[thm-frobenius-endomorphism-and-finite-field-automorphism]].",
   "uses": [
    "1.1",
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
   "source": "thm-algebraic-embedding-extension",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\\Omega$ be\nalgebraically closed, and let $\\sigma:F\\to\\Omega$ be a field embedding. Then\n$\\sigma$ extends to a field embedding $\\widetilde\\sigma:K\\to\\Omega$. The proof\nuses Zorn's lemma.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$ and let $f\\in F[x]$ be nonconstant and\nirreducible. There are unique $e\\in\\mathbb N$ and $g\\in F[x]$ such that\n\n$$f(x)=g(x^{p^e}),$$\n\n$g$ is irreducible and separable, and $e$ is maximal with this property. The\ncase $e=0$ occurs exactly when $f$ is separable.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-separable-degree",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a finite field extension\n([[def-extension-degree-and-finite-extension]]) and let $\\Omega/F$ be an\nalgebraic closure. Assuming Choice, such a field exists by\n[[thm-existence-of-algebraic-closures]]. The\n**separable degree** of $K/F$ is\n\n$$[K:F]_s:=\\left|\\operatorname{Hom}_F(K,\\Omega)\\right|,$$\n\nwhere $\\operatorname{Hom}_F$ denotes the set of $F$-embeddings of\n[[def-f-homomorphisms-and-embeddings-of-field-extensions]]. This set is finite:\na finite $F$-basis generates $K$, an embedding is determined by the images of\nthose finitely many generators, and each image is among the finitely many roots\nof its minimal polynomial by\n[[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]].\nThus its cardinality is defined by [[def-finite-cardinality]]. The value is\nindependent of the chosen algebraic closure by\n[[thm-separable-degree-is-independent-of-the-algebraic-closure]].",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L6",
   "source": "lem-restriction-fibres-for-embeddings-in-a-finite-tower",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be a finite tower and let $\\Omega$ be an algebraic\nclosure of $F$. Restriction defines a surjection\n\n$$\\operatorname{Hom}_F(L,\\Omega)\\longrightarrow\\operatorname{Hom}_F(K,\\Omega).$$\n\nFor every $F$-embedding $\\sigma:K\\to\\Omega$, its fibre is nonempty and has\ncardinality $[L:K]_s$ after transporting the $K$-structure along $\\sigma$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-perfect-field-characterizations",
   "source_section": "Statement",
   "quote": "A field $F$ is perfect if and only if either $\\operatorname{char}F=0$, or\n$\\operatorname{char}F=p>0$ and the Frobenius map $a\\mapsto a^p$ is surjective.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L8",
   "source": "def-perfect-field",
   "source_section": "Definition",
   "quote": "A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible\npolynomial in $F[x]$ is separable\n([[def-repeated-root-and-separable-polynomial]]).",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "In characteristic $p$, if $\\alpha^{p^n}=a\\in F$, then the minimal polynomial of $\\alpha$ divides $x^{p^n}-a=(x-\\alpha)^{p^n}$ in $\\Omega[x]$, so it has only the distinct root $\\alpha$. Conversely, if the minimal polynomial has one distinct root, write it as $g(x^{p^e})$ by [L4]; the separable polynomial $g$ can then have only one root and must be linear, so the minimal polynomial is $x^{p^e}-a$ and $\\alpha^{p^e}=a\\in F$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L4",
    "algebra"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "If every element has one conjugate, [L2] shows that every $F$-embedding fixes every element. If some $\\alpha$ has a different conjugate, [L2] gives a nonidentity embedding of $F(\\alpha)$; [L6] extends it when $K/F$ is finite, and [L3] extends it for arbitrary algebraic $K/F$ under Choice.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L3",
    "L6"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Thus condition 1 is equivalent to condition 2 in positive characteristic. In characteristic zero [L7] and [L8] make every irreducible polynomial separable, so one distinct root forces degree one; hence condition 2 is equivalent to $K=F$, which is condition 1 by [L1].",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "L7",
    "L8"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For finite $K/F$, [L5] identifies unique embeddability with $[K:F]_s=1$. Steps 2.1 and 1.2 prove the finite equivalences and the arbitrary-extension embedding equivalence under Choice; the trivial extension is the $e=0$ case.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "step 1.2",
    "L5"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "No indexed family or empty product occurs; every condition is quantified elementwise."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 2.1 treats characteristic zero explicitly, and step 3.1 states that exponent $e=0$ includes the trivial extension."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 3.1 identifies the finite unique-embedding condition with separable degree one, including $K=F$."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The trivial extension is explicit in steps 2.1 and 3.1; repeated-root behavior is precisely the one-distinct-root case analyzed in step 1.1."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "All parameters are algebraic and discrete; there is no ordered or limiting endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "The algebraic closure is supplied. Step 1.2 uses the finite extension lemma [L6] without Choice and invokes [L3] only for the separately stated arbitrary-extension criterion under Choice."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 1.1 proves the $p$-power condition implies one distinct conjugate; step 1.2 then proves uniqueness of embeddings."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Step 1.1 proves one distinct conjugate implies the $p$-power condition; step 1.2 supplies the reverse embedding implication in the finite and Choice-qualified settings."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions

```markdown
---
id: thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions
kind: theorem
title: "A minimal generating family in a finite exponent-one purely inseparable extension is a $p$-basis and gives degree $p^r$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-basis-of-an-exponent-one-purely-inseparable-extension, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-simple-algebraic-extension-quotient-power-basis-and-degree, lem-product-basis-for-a-tower-of-finite-extensions, thm-tower-law-for-finite-field-extensions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite exponent-one purely inseparable extension of
characteristic $p$, and let $(b_1,\ldots,b_r)$ be a minimal generating family
for $K$ over $F$. Then it is a $p$-basis, and

$$[K:F]=p^r.$$

Conversely, every $p$-basis generates $K$ over $F$. The empty family gives the
trivial extension and degree $p^0=1$.

## Facts & Assumptions

**Given:** A finite exponent-one purely inseparable extension $K/F$ and a minimal generating family $(b_1,\ldots,b_r)$.

[L1] If a constant is not a $p$th power in a characteristic-$p$ field, then $x^p-a$ is irreducible ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L2] A simple algebraic extension has the power basis whose length is the degree of the minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L3] Products of bases in a finite tower form a basis of the top field over the bottom field ([[lem-product-basis-for-a-tower-of-finite-extensions]]).

[L4] Degrees multiply in a finite tower ([[thm-tower-law-for-finite-field-extensions]]).

[L5] A $p$-basis is the restricted-monomial basis of [[def-p-basis-of-an-exponent-one-purely-inseparable-extension]].

## Proof

**Proof technique:** direct.

1.1 Put $K_j=F(b_1,\ldots,b_j)$. Minimality gives $b_j\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\in F\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$. [L1, algebra]

2.1 By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\ldots,b_j^{p-1}$ and degree $p$. [step 1.1, L2]

3.1 Repeated use of [L3] gives the restricted monomials $b_1^{e_1}\cdots b_r^{e_r}$ as an $F$-basis of $K$, so the family is a $p$-basis by [L5]. Repeated use of [L4] gives $[K:F]=p^r$. [step 2.1, L3, L4, L5]

4.1 Conversely, if the restricted monomials form a basis, every element of $K$ is an $F$-linear combination of products of the $b_i$, so $K=F(b_1,\ldots,b_r)$. For $r=0$ this says $K=F$ and the degree is one. [L5, algebra] ∎

```

### Recorded proof contract for thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$, let $a\\in F$ not be a $p$th power in $F$,\nand let $n\\ge1$. Then $x^{p^n}-a$ is irreducible in $F[x]$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-simple-algebraic-extension-quotient-power-basis-and-degree",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and let $a\\in K$ be algebraic with minimal\npolynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism\n$$F[x]/(m_a)\\cong F(a),\\qquad f+(m_a)\\longmapsto f(a).$$\nMoreover, every element of $F(a)$ has a unique expression\n$$c_0+c_1a+\\cdots+c_{n-1}a^{n-1},\\qquad c_j\\in F.$$\nThus $1,a,\\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the\nsimple extension is $[F(a):F]=n$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-product-basis-for-a-tower-of-finite-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $(u_1,\\ldots,u_m)$ is an $F$-basis of $K$ and $(v_1,\\ldots,v_n)$ is a $K$-basis of $L$, then\n\n$$\\{u_iv_j:1\\le i\\le m,\\ 1\\le j\\le n\\}$$\n\nis an $F$-basis of $L$.",
   "uses": [
    "3.1"
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
  },
  {
   "fact": "L5",
   "source": "def-p-basis-of-an-exponent-one-purely-inseparable-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a finite purely inseparable extension of characteristic $p>0$\n([[def-purely-inseparable-extension]]) and suppose it has **exponent at most\none**, meaning $a^p\\in F$ for every $a\\in K$. A finite ordered family\n$(b_1,\\ldots,b_r)$ in $K$ is a **$p$-basis of $K/F$** when the restricted\nmonomials\n\n$$b_1^{e_1}\\cdots b_r^{e_r}\\qquad(0\\le e_i<p)$$\n\nform an $F$-basis of $K$ ([[def-linear-basis]]). For $r=0$, the sole restricted\nmonomial is the empty product $1$, so the definition gives the basis $(1)$ of\nthe trivial extension and degree one\n([[def-extension-degree-and-finite-extension]]).",
   "uses": [
    "3.1",
    "4.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Put $K_j=F(b_1,\\ldots,b_j)$. Minimality gives $b_j\\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\\in F\\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\\ldots,b_j^{p-1}$ and degree $p$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Repeated use of [L3] gives the restricted monomials $b_1^{e_1}\\cdots b_r^{e_r}$ as an $F$-basis of $K$, so the family is a $p$-basis by [L5]. Repeated use of [L4] gives $[K:F]=p^r$.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L3",
    "L4",
    "L5"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Conversely, if the restricted monomials form a basis, every element of $K$ is an $F$-linear combination of products of the $b_i$, so $K=F(b_1,\\ldots,b_r)$. For $r=0$ this says $K=F$ and the degree is one.",
   "step": "4.1",
   "inputs": [
    "L5",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 2.1 states: \"By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\\ldots,b_j^{p-1}$ and degree $p$.\" This is the final proof check that the empty p-basis corresponds to K=F."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 1.1 states: \"Put $K_j=F(b_1,\\ldots,b_j)$. Minimality gives $b_j\\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\\in F\\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$.\" This is the final proof check that r=0 gives p^0=1."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 1.1 states: \"Put $K_j=F(b_1,\\ldots,b_j)$. Minimality gives $b_j\\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\\in F\\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$.\" This is the final proof check that one generator gives its usual power basis."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 1.1 states: \"Put $K_j=F(b_1,\\ldots,b_j)$. Minimality gives $b_j\\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\\in F\\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Adjoin a minimal generating list one element at a time."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 2.1 states: \"By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\\ldots,b_j^{p-1}$ and degree $p$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 3.1 states: \"Repeated use of [L3] gives the restricted monomials $b_1^{e_1}\\cdots b_r^{e_r}$ as an $F$-basis of $K$, so the family is a $p$-basis by [L5]. Repeated use of [L4] gives $[K:F]=p^r$.\" This is the final proof check that minimal generation yields independence of restricted p-monomials."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 2.1 states: \"By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\\ldots,b_j^{p-1}$ and degree $p$.\" This is the final proof check that a spanning p-basis generates the extension."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

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

## DEPENDENCY: cor-separable-degree-of-a-simple-extension-counts-distinct-roots

```markdown
title: "The separable degree of $F(\\alpha)/F$ is the number of distinct roots of $m_{\\alpha}$"

## Statement
If $\alpha$ is algebraic over $F$, then $[F(\alpha):F]_s$ equals the number of
distinct roots of the minimal polynomial $m_\alpha$ in any algebraic closure of
$F$.
```

## DEPENDENCY: lem-polynomial-gcd-is-stable-under-field-extension

```markdown
title: 'The monic gcd of two base-field polynomials is unchanged after extending the coefficient field'

## Statement
Let $F\subseteq E$ be a field extension and let $f,g\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.
```

## DEPENDENCY: thm-tower-law-for-finite-field-extensions

```markdown
title: "Tower law for finite extensions: $[L:F]=[L:K][K:F]$"

## Statement
Let $F\subseteq K\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and

$$[L:F]=[L:K][K:F].$$
```

## DEPENDENCY: thm-finitely-generated-algebraic-extensions-are-finite

```markdown
title: "An extension generated by finitely many algebraic elements is finite"

## Statement
If $a_1,\ldots,a_r$ are algebraic over $F$, then $F(a_1,\ldots,a_r)/F$ is finite.
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

## DEPENDENCY: def-purely-inseparable-extension

```markdown
title: "Purely inseparable algebraic extensions"

## Definition
Let $K/F$ be algebraic ([[def-algebraic-and-transcendental-elements]]). If
$\operatorname{char}F=p>0$, the extension is **purely inseparable** when for
every $\alpha\in K$ there is $n\in\mathbb N$ such that
$\alpha^{p^n}\in F$. The exponent $n=0$ is allowed. If
$\operatorname{char}F=0$, the term purely inseparable is reserved for the
trivial extension $K=F$.

The powers in positive characteristic are governed by the Frobenius
endomorphism of [[thm-frobenius-endomorphism-and-finite-field-automorphism]].
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

## DEPENDENCY: lem-restriction-fibres-for-embeddings-in-a-finite-tower

```markdown
title: "Restriction partitions embeddings in a finite tower into extension fibres"

## Statement
Let $F\subseteq K\subseteq L$ be a finite tower and let $\Omega$ be an algebraic
closure of $F$. Restriction defines a surjection

$$\operatorname{Hom}_F(L,\Omega)\longrightarrow\operatorname{Hom}_F(K,\Omega).$$

For every $F$-embedding $\sigma:K\to\Omega$, its fibre is nonempty and has
cardinality $[L:K]_s$ after transporting the $K$-structure along $\sigma$.
```

## DEPENDENCY: thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core

```markdown
title: "In characteristic $p$, every irreducible polynomial is uniquely $g(x^{p^e})$ with $g$ irreducible and separable"

## Statement
Let $F$ have characteristic $p>0$ and let $f\in F[x]$ be nonconstant and
irreducible. There are unique $e\in\mathbb N$ and $g\in F[x]$ such that

$$f(x)=g(x^{p^e}),$$

$g$ is irreducible and separable, and $e$ is maximal with this property. The
case $e=0$ occurs exactly when $f$ is separable.
```

## DEPENDENCY: def-separable-degree

```markdown
title: "The separable degree $[K:F]_s$ as a count of embeddings into an algebraic closure"

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

## DEPENDENCY: thm-perfect-field-characterizations

```markdown
title: "A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective"

## Statement
A field $F$ is perfect if and only if either $\operatorname{char}F=0$, or
$\operatorname{char}F=p>0$ and the Frobenius map $a\mapsto a^p$ is surjective.
```

## DEPENDENCY: def-perfect-field

```markdown
title: "Perfect fields: every irreducible polynomial is separable"

## Definition
A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible
polynomial in $F[x]$ is separable
([[def-repeated-root-and-separable-polynomial]]).
```

## DEPENDENCY: def-p-basis-of-an-exponent-one-purely-inseparable-extension

```markdown
title: "$p$-bases for finite exponent-one purely inseparable extensions"

## Definition
Let $K/F$ be a finite purely inseparable extension of characteristic $p>0$
([[def-purely-inseparable-extension]]) and suppose it has **exponent at most
one**, meaning $a^p\in F$ for every $a\in K$. A finite ordered family
$(b_1,\ldots,b_r)$ in $K$ is a **$p$-basis of $K/F$** when the restricted
monomials

$$b_1^{e_1}\cdots b_r^{e_r}\qquad(0\le e_i<p)$$

form an $F$-basis of $K$ ([[def-linear-basis]]). For $r=0$, the sole restricted
monomial is the empty product $1$, so the definition gives the basis $(1)$ of
the trivial extension and degree one
([[def-extension-degree-and-finite-extension]]).
```

## DEPENDENCY: lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power

```markdown
title: "If $a$ is not a $p$th power in a characteristic-$p$ field, then $x^{p^n}-a$ is irreducible for every $n\\ge1$"

## Statement
Let $F$ have characteristic $p>0$, let $a\in F$ not be a $p$th power in $F$,
and let $n\ge1$. Then $x^{p^n}-a$ is irreducible in $F[x]$.
```

## DEPENDENCY: thm-simple-algebraic-extension-quotient-power-basis-and-degree

```markdown
title: 'A simple algebraic extension is its minimal-polynomial quotient and has power basis $1,a,\ldots,a^{n-1}$ and degree $n$'

## Statement
Let $K/F$ be a field extension and let $a\in K$ be algebraic with minimal
polynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism
$$F[x]/(m_a)\cong F(a),\qquad f+(m_a)\longmapsto f(a).$$
Moreover, every element of $F(a)$ has a unique expression
$$c_0+c_1a+\cdots+c_{n-1}a^{n-1},\qquad c_j\in F.$$
Thus $1,a,\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the
simple extension is $[F(a):F]=n$.
```

## DEPENDENCY: lem-product-basis-for-a-tower-of-finite-extensions

```markdown
title: "Products of bases form a basis in a tower of finite extensions"

## Statement
Let $F\subseteq K\subseteq L$ be fields. If $(u_1,\ldots,u_m)$ is an $F$-basis of $K$ and $(v_1,\ldots,v_n)$ is a $K$-basis of $L$, then

$$\{u_iv_j:1\le i\le m,\ 1\le j\le n\}$$

is an $F$-basis of $L$.
```
