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
label: n-1

run: frontier-15
role: refuter
label: n-1
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

## ITEM: prop-jacobi-symbol-well-defined

```markdown
---
id: prop-jacobi-symbol-well-defined
kind: proposition
title: "The Jacobi symbol is well defined on numerator residue classes"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jacobi-symbol, thm-canonical-prime-factorisation,
       prop-legendre-symbol-well-defined,
       lem-every-integer-above-one-has-a-prime-divisor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every integer $a$ and odd positive integer $n$, the product in [[def-jacobi-symbol]] is independent of the ordering used to list the canonical prime factors and belongs to $\{-1,0,1\}$. The Jacobi symbol depends only on $a\pmod n$, and it is zero exactly when $\gcd(a,n)>1$. At $n=1$ it has the value $1$.

## Facts & Assumptions

**Given:** An integer $a$ and an odd positive integer $n$.

[L1] For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, define $\left(\frac an\right):=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$ ([[def-jacobi-symbol]]).

[L2] In a prime factorisation of a positive integer, the exponents are determined by the integer; primes outside the factor list have exponent zero ([[thm-canonical-prime-factorisation]]).

[L3] For every odd prime $p$, the Legendre symbol belongs to $\{-1,0,1\}$, depends only on the numerator modulo $p$, and equals zero exactly when $p$ divides the numerator ([[prop-legendre-symbol-well-defined]]).

[L4] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

## Proof

**Proof technique:** direct.

1.1 The uniqueness in [L2] fixes the set of prime factors and every exponent in [L1]; changing their order does not change a finite product of integers. Each factor belongs to $\{-1,0,1\}$ by [L3], so their product does too, and at $n=1$ the empty product is $1$. [L1, L2, L3, algebra]

2.1 If $a\equiv b\pmod n$, then $a\equiv b\pmod p$ for every prime factor $p$ of $n$, so [L3] makes every corresponding factor in [L1] equal. The product is zero exactly when some prime factor $p$ of $n$ divides $a$, which gives $\gcd(a,n)>1$; conversely, if $\gcd(a,n)>1$, [L4] supplies a prime divisor of the gcd, hence a prime factor of $n$ dividing $a$, and [L3] makes that Legendre factor zero. [step 1.1, L1, L3, L4, algebra] ∎

```

### Recorded proof contract for prop-jacobi-symbol-well-defined

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-jacobi-symbol",
   "source_section": "Definition",
   "quote": "For odd $n\\ge1$ with canonical prime factorisation $n=\\prod_{i<r}p_i^{e_i}$, define $\\left(\\frac an\\right):=\\prod_{i<r}\\left(\\frac a{p_i}\\right)^{e_i}$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-canonical-prime-factorisation",
   "source_section": "Statement",
   "quote": "the exponents are determined by $n$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "prop-legendre-symbol-well-defined",
   "source_section": "Statement",
   "quote": "For every odd prime $p$, the Legendre symbol belongs to $\\{-1,0,1\\}$, depends only on the numerator modulo $p$, and satisfies\n\n$$\\left(\\frac ap\\right)=0\\quad\\Longleftrightarrow\\quad p\\mid a.$$",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-every-integer-above-one-has-a-prime-divisor",
   "source_section": "Statement",
   "quote": "In particular every integer greater than $1$ has a\nprime divisor.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The uniqueness in [L2] fixes the set of prime factors and every exponent in [L1]; changing their order does not change a finite product of integers. Each factor belongs to $\\{-1,0,1\\}$ by [L3], so their product does too, and at $n=1$ the empty product is $1$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $a\\equiv b\\pmod n$, then $a\\equiv b\\pmod p$ for every prime factor $p$ of $n$, so [L3] makes every corresponding factor in [L1] equal. The product is zero exactly when some prime factor $p$ of $n$ divides $a$, which gives $\\gcd(a,n)>1$; conversely, if $\\gcd(a,n)>1$, [L4] supplies a prime divisor of the gcd, hence a prime factor of $n$ dividing $a$, and [L3] makes that Legendre factor zero.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "L3",
    "L4",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "Step 1.1 evaluates the empty prime factorisation at $n=1$ as the product one."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 2.1 identifies the zero value exactly with a common prime divisor instead of assuming coprimality."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The denominator-one convention is explicitly discharged in step 1.1."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Repeated prime factors are handled through their canonical exponents in step 1.1."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "No ordered range other than the finite factor list enters the well-definedness proof."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Step 1.1 uses uniqueness of canonical prime exponents and therefore makes no choice of a factorisation."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 2.1 proves that a zero Jacobi product gives a prime common divisor and hence $\\gcd(a,n)>1$."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Step 2.1 proves that $\\gcd(a,n)>1$ supplies a common prime divisor and hence a zero Legendre factor."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: prop-jacobi-symbol-on-units-is-a-homomorphism

```markdown
---
id: prop-jacobi-symbol-on-units-is-a-homomorphism
kind: proposition
title: "For fixed odd modulus, the Jacobi symbol is a homomorphism on the unit group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-jacobi-symbol-well-defined, thm-jacobi-symbol-multiplicativity,
       def-unit-group-modulo-n-and-euler-totient, thm-unit-criterion-modulo-n,
       def-group-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Fix an odd positive integer $n$. The assignment $\chi_n([a]_n)=\left(\frac an\right)$ is a group homomorphism $(\mathbb Z/n)^\times\to\{\pm1\}$.

Here $\{\pm1\}$ is the two-element multiplicative group, except that the image is the one-element subgroup $\{1\}$ when the character is trivial.

## Facts & Assumptions

**Given:** An odd positive integer $n$ and unit classes $[a]_n,[b]_n\in(\mathbb Z/n)^\times$.

[L1] The Jacobi symbol belongs to $\{-1,0,1\}$, depends only on $a\pmod n$, and is zero exactly when $\gcd(a,n)>1$ ([[prop-jacobi-symbol-well-defined]]).

[L2] For odd positive $n$, $\left(\frac{ab}{n}\right)=\left(\frac an\right)\left(\frac bn\right)$ ([[thm-jacobi-symbol-multiplicativity]]).

[L3] The unit group $(\mathbb Z/n)^\times$ consists of the invertible residue classes modulo $n$ under multiplication ([[def-unit-group-modulo-n-and-euler-totient]]).

[L4] The class $[a]_n$ is a unit if and only if $\gcd(a,n)=1$ ([[thm-unit-criterion-modulo-n]]).

[L5] A group homomorphism $f:G\to H$ is a function satisfying $f(xy)=f(x)f(y)$ for all $x,y\in G$ ([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the value $\left(\frac an\right)$ depends only on the residue class. By [L3] and [L4], a unit class has $\gcd(a,n)=1$, so [L1] rules out the value zero; hence $\chi_n$ is a well-defined function from $(\mathbb Z/n)^\times$ to $\{\pm1\}$. [L1, L3, L4]

2.1 For unit classes $[a]_n$ and $[b]_n$, [L2] gives $\chi_n([a]_n[b]_n)=\chi_n([ab]_n)=\chi_n([a]_n)\chi_n([b]_n)$, which is the condition in [L5]. Thus $\chi_n$ is a group homomorphism, including when $n=1$ and the unit group has one element. [step 1.1, L2, L5] ∎

```

### Recorded proof contract for prop-jacobi-symbol-on-units-is-a-homomorphism

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "prop-jacobi-symbol-well-defined",
   "source_section": "Statement",
   "quote": "For every integer $a$ and odd positive integer $n$, the product in [[def-jacobi-symbol]] is independent of the ordering used to list the canonical prime factors and belongs to $\\{-1,0,1\\}$. The Jacobi symbol depends only on $a\\pmod n$, and it is zero exactly when $\\gcd(a,n)>1$. At $n=1$ it has the value $1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-jacobi-symbol-multiplicativity",
   "source_section": "Statement",
   "quote": "For integers $a,b$ and an odd positive integer $n$,\n\n$$\\left(\\frac{ab}{n}\\right)=\\left(\\frac an\\right)\\left(\\frac bn\\right).$$",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-unit-group-modulo-n-and-euler-totient",
   "source_section": "Definition",
   "quote": "$$(\\mathbb Z/n)^\\times:=\\{\\,u\\in\\mathbb Z/n:\\text{some }v\\in\\mathbb Z/n\\text{ satisfies }uv=[1]_n\\,\\}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-unit-criterion-modulo-n",
   "source_section": "Statement",
   "quote": "Let $n\\ge1$ and $a\\in\\mathbb Z$. Then $[a]_n$ is a unit of $\\mathbb Z/n$\n([[def-unit-group-modulo-n-and-euler-totient]]) if and only if\n\n$$\\gcd(a,n)=1,$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-group-homomorphism",
   "source_section": "Definition",
   "quote": "$$f(xy) \\;=\\; f(x)\\, f(y) \\qquad \\text{for all } x, y \\in G .$$",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "By [L1], the value $\\left(\\frac an\\right)$ depends only on the residue class. By [L3] and [L4], a unit class has $\\gcd(a,n)=1$, so [L1] rules out the value zero; hence $\\chi_n$ is a well-defined function from $(\\mathbb Z/n)^\\times$ to $\\{\\pm1\\}$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L3",
    "L4"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "For unit classes $[a]_n$ and $[b]_n$, [L2] gives $\\chi_n([a]_n[b]_n)=\\chi_n([ab]_n)=\\chi_n([a]_n)\\chi_n([b]_n)$, which is the condition in [L5]. Thus $\\chi_n$ is a group homomorphism, including when $n=1$ and the unit group has one element.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2",
    "L5"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "The map is defined on a fixed unit group, not by an indexed family."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 1.1 excludes the zero Jacobi value precisely because every domain element is a unit."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 2.1 handles modulus one and the identity value explicitly."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "At $n=1$ both domain and codomain image reduce to the identity case checked in step 2.1."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "No interval or bounded summation occurs in defining the homomorphism."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Representative independence makes the map canonical; no representative is selected."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the Jacobi homomorphism is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the Jacobi homomorphism is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-jacobi-symbol-supplements

```markdown
---
id: thm-jacobi-symbol-supplements
kind: theorem
title: "The two supplementary laws for the Jacobi symbol"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobi-symbol, thm-jacobi-symbol-multiplicativity,
       thm-first-supplement-to-quadratic-reciprocity,
       thm-second-supplement-to-quadratic-reciprocity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every odd positive integer $n$,

$$\left(\frac{-1}{n}\right)=(-1)^{(n-1)/2},\qquad \left(\frac2n\right)=(-1)^{(n^2-1)/8}.$$

Both formulas include $n=1$, where each Jacobi symbol and each displayed power of $-1$ equals $1$.

## Facts & Assumptions

**Given:** An odd positive integer $n$.

[L1] The Jacobi symbol is the product of the prime Legendre symbols, taken with the multiplicities in the canonical prime factorisation ([[def-jacobi-symbol]]).

[L2] For odd positive $u,v$, $\left(\frac a{uv}\right)=\left(\frac au\right)\left(\frac av\right)$ ([[thm-jacobi-symbol-multiplicativity]]).

[L3] For every odd prime $p$, $\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}$ ([[thm-first-supplement-to-quadratic-reciprocity]]).

[L4] For every odd prime $p$, $\left(\frac2p\right)=(-1)^{(p^2-1)/8}$ ([[thm-second-supplement-to-quadratic-reciprocity]]).

## Proof

**Proof technique:** direct.

1.1 Expand $\left(\frac{-1}{n}\right)$ through [L1], applying [L3] to every prime factor with multiplicity and [L2] to multiply the contributions. For odd $u,v$, the difference $(uv-1)/2-(u-1)/2-(v-1)/2=(u-1)(v-1)/2$ is even, so iteration through the factor list gives $\left(\frac{-1}{n}\right)=(-1)^{(n-1)/2}$; for the empty factor list $n=1$, both sides are $1$. [L1, L2, L3, algebra]

2.1 Similarly, [L1] and [L4] give the product of the signs $(-1)^{(p^2-1)/8}$ with multiplicity. For odd $u,v$, the difference $((uv)^2-1)/8-(u^2-1)/8-(v^2-1)/8=(u^2-1)(v^2-1)/8$ is even, because each of $u^2-1$ and $v^2-1$ is divisible by $8$. Iterating this identity gives $\left(\frac2n\right)=(-1)^{(n^2-1)/8}$, again with value $1$ at $n=1$. [L1, L2, L4, algebra] ∎

```

### Recorded proof contract for thm-jacobi-symbol-supplements

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-jacobi-symbol",
   "source_section": "Definition",
   "quote": "For odd $n\\ge1$ with canonical prime factorisation $n=\\prod_{i<r}p_i^{e_i}$, define $\\left(\\frac an\\right):=\\prod_{i<r}\\left(\\frac a{p_i}\\right)^{e_i}$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-jacobi-symbol-multiplicativity",
   "source_section": "Statement",
   "quote": "For an integer $a$ and odd positive integers $m,n$,\n\n$$\\left(\\frac a{mn}\\right)=\\left(\\frac am\\right)\\left(\\frac an\\right).$$",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-first-supplement-to-quadratic-reciprocity",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac{-1}{p}\\right)=(-1)^{(p-1)/2}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-second-supplement-to-quadratic-reciprocity",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac2p\\right)=(-1)^{(p^2-1)/8}.$$",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Expand $\\left(\\frac{-1}{n}\\right)$ through [L1], applying [L3] to every prime factor with multiplicity and [L2] to multiply the contributions. For odd $u,v$, the difference $(uv-1)/2-(u-1)/2-(v-1)/2=(u-1)(v-1)/2$ is even, so iteration through the factor list gives $\\left(\\frac{-1}{n}\\right)=(-1)^{(n-1)/2}$; for the empty factor list $n=1$, both sides are $1$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Similarly, [L1] and [L4] give the product of the signs $(-1)^{(p^2-1)/8}$ with multiplicity. For odd $u,v$, the difference $((uv)^2-1)/8-(u^2-1)/8-(v^2-1)/8=(u^2-1)(v^2-1)/8$ is even, because each of $u^2-1$ and $v^2-1$ is divisible by $8$. Iterating this identity gives $\\left(\\frac2n\\right)=(-1)^{(n^2-1)/8}$, again with value $1$ at $n=1$.",
   "step": "2.1",
   "inputs": [
    "L1",
    "L2",
    "L4",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "Statement boundary: both steps evaluate the empty prime factorisation at $n=1$."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The statement hypothesis that $n$ is positive excludes the zero denominator before the divisions in steps 1.1 and 2.1."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Steps 1.1 and 2.1 explicitly verify both formulas at $n=1$."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: prime powers and repeated prime factors are included by the multiplicity induction in both steps."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "There is no ordered interval; only parity identities for odd products are used."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Canonical prime factors are not selected noncanonically."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the Jacobi supplementary laws is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the Jacobi supplementary laws is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: def-jacobi-symbol

```markdown
title: "The Jacobi symbol, with its zero value and empty-product convention"

## Definition
Let $a\in\mathbb Z$ and let $n$ be an odd positive integer. For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, define $\left(\frac an\right):=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$.

This is the **Jacobi symbol** of $a$ modulo $n$. The prime factors are distinct, every exponent is positive, and each factor on the right is a Legendre symbol ([[def-legendre-symbol]]). When $n=1$, the factor list is empty and the finite-product convention ([[def-monoid-finite-product]]) gives

$$\left(\frac a1\right)=1.$$

The value is $0$ exactly when $\gcd(a,n)>1$, and $\left(\frac a1\right)=1$. Independence from the ordering of the canonical factors, dependence only on $a\pmod n$, and the stated zero criterion are proved in [[prop-jacobi-symbol-well-defined]].
```

## DEPENDENCY: thm-canonical-prime-factorisation

```markdown
title: "For $n \\ge 1$ and any injective list $p : r \\to \\mathbb{Z}$ of primes containing every prime divisor of $n$, one has $n = \\prod_{i<r} p_i^{\\,v_{p_i}(n)}$; the exponents are determined by $n$, and $v_q(n) = 0$ for every prime $q$ outside the list"

## Statement
Powers are the natural powers of [[def-group-power]] and finite products those of
[[def-monoid-finite-product]], both taken in the commutative monoid
$(\mathbb{Z},\cdot,1)$ of [[lem-units-of-z]]. Call $p : r \to \mathbb{Z}$ an
**injective list of primes** when every $p_i$ is prime ([[def-prime]]) and
$p_i = p_j$ forces $i = j$ ([[def-injection-surjection-bijection]]).

Let $n \in \mathbb{Z}$ with $n \ge 1$ and let $p : r \to \mathbb{Z}$ be an
injective list of primes such that every prime divisor of $n$ equals $p_i$ for
some $i < r$. Then, with $v_q$ as in [[def-p-adic-valuation]]:

1. $\displaystyle n \;=\; \prod_{i<r} p_i^{\,v_{p_i}(n)}$;
2. $v_q(n) = 0$ for every prime $q$ that is not among $p_0,\dots,p_{r-1}$;
3. the exponents are determined by $n$: if $e : r \to \mathbb{N}$ and
   $n = \prod_{i<r} p_i^{\,e_i}$, then $e_j = v_{p_j}(n)$ for every $j < r$.

Clause 3 needs only injectivity of the list, not the covering hypothesis.
```

## DEPENDENCY: prop-legendre-symbol-well-defined

```markdown
title: "The Legendre symbol is well defined on residue classes"

## Statement
For every odd prime $p$, the Legendre symbol belongs to $\{-1,0,1\}$, depends only on the numerator modulo $p$, and satisfies

$$\left(\frac ap\right)=0\quad\Longleftrightarrow\quad p\mid a.$$
```

## DEPENDENCY: lem-every-integer-above-one-has-a-prime-divisor

```markdown
title: "Every integer $n > 1$ has a prime divisor; indeed the least divisor of $n$ that exceeds $1$ is prime"

## Statement
Let $n \in \mathbb{Z}$ with $n > 1$, and put

$$S \;:=\; \{\, d \in \mathbb{Z} \;:\; d \mid n \ \text{ and } \ d > 1 \,\}$$

([[def-divides-in-z]]). Then $S$ is nonempty and has a least element $q$, and
$q$ is prime ([[def-prime]]). In particular every integer greater than $1$ has a
prime divisor.
```

## DEPENDENCY: thm-jacobi-symbol-multiplicativity

```markdown
title: "The Jacobi symbol is multiplicative in numerator and denominator"

## Statement
For integers $a,b$ and an odd positive integer $n$,

$$\left(\frac{ab}{n}\right)=\left(\frac an\right)\left(\frac bn\right).$$

For an integer $a$ and odd positive integers $m,n$,

$$\left(\frac a{mn}\right)=\left(\frac am\right)\left(\frac an\right).$$

No coprimality hypothesis is imposed on either pair of arguments.
```

## DEPENDENCY: def-unit-group-modulo-n-and-euler-totient

```markdown
title: "The unit group $(\\mathbb{Z}/n)^\\times$ and Euler's totient $\\varphi(n)=\\lvert(\\mathbb{Z}/n)^\\times\\rvert$ for $n\\ge1$"

## Definition
Let $n\ge1$ be an integer. Multiplication makes $\mathbb Z/n$ a commutative
monoid with identity $[1]_n$ by [[thm-integers-modulo-n-basic-algebra]]. A class
$u\in\mathbb Z/n$ is a **unit** when it is invertible in that monoid
([[def-invertible-element]]). The set of all units is

$$(\mathbb Z/n)^\times:=\{\,u\in\mathbb Z/n:\text{some }v\in\mathbb Z/n\text{ satisfies }uv=[1]_n\,\}.$$

By [[lem-monoid-units-form-a-group]], multiplication restricts to a group
operation on $(\mathbb Z/n)^\times$, called the **unit group modulo $n$**.

The quotient $\mathbb Z/n$ is finite with cardinality $n$ by
[[thm-standard-representatives-modulo-n]], and its unit set is a finite subset by
[[thm-subset-of-a-finite-set]]. Euler's **totient function** is therefore defined
for every positive integer $n$ by

$$\varphi(n):=\big|(\mathbb Z/n)^\times\big|\in\mathbb N$$

([[def-finite-cardinality]]). For $n=1$, the quotient has one element, which is
its multiplicative identity and hence a unit, so $\varphi(1)=1$ follows from the
definition.
```

## DEPENDENCY: thm-unit-criterion-modulo-n

```markdown
title: "For $n\\ge1$, $[a]_n$ is a unit if and only if $\\gcd(a,n)=1$"

## Statement
Let $n\ge1$ and $a\in\mathbb Z$. Then $[a]_n$ is a unit of $\mathbb Z/n$
([[def-unit-group-modulo-n-and-euler-totient]]) if and only if

$$\gcd(a,n)=1,$$

that is, if and only if $a$ and $n$ are coprime ([[def-coprime]]). Consequently
the condition $\gcd(a,n)=1$ depends only on the class $[a]_n$.
```

## DEPENDENCY: def-group-homomorphism

```markdown
title: "Monoid homomorphism and group homomorphism"

## Definition
Let $(M,\cdot,e)$ and $(M',\cdot',e')$ be monoids ([[def-semigroup-and-monoid]]).
A **monoid homomorphism** from $M$ to $M'$ is a function $f : M \to M'$ such that

- **(H1)** $f(x \cdot y) = f(x) \cdot' f(y)$ for all $x, y \in M$;
- **(H2)** $f(e) = e'$.

Let $G$ and $G'$ be groups ([[def-group]]). A **group homomorphism** from $G$ to
$G'$ is a function $f : G \to G'$ satisfying (H1) alone:

$$f(xy) \;=\; f(x)\, f(y) \qquad \text{for all } x, y \in G .$$

Condition (H2) is not imposed for groups because it follows: a group
homomorphism automatically satisfies $f(e) = e'$ and $f(x^{-1}) = f(x)^{-1}$
([[lem-group-homomorphism-basic-properties]]). For monoids it does **not**
follow and must be assumed, which is why the two definitions differ.

A homomorphism from a structure to itself is an **endomorphism**. The identity
map of $M$ is a monoid homomorphism, and a composite of monoid homomorphisms is
one, since $(g \circ f)(xy) = g(f(x)f(y)) = g(f(x))\,g(f(y))$ and
$(g \circ f)(e) = g(e') = e''$; the same computation, without the second clause,
shows a composite of group homomorphisms is a group homomorphism.
```

## DEPENDENCY: thm-first-supplement-to-quadratic-reciprocity

```markdown
title: "First supplement: $(-1/p)=(-1)^{(p-1)/2}$"

## Statement
For every odd prime $p$,

$$\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}.$$

Equivalently, $(-1/p)=1$ if and only if $p\equiv1\pmod4$, while $(-1/p)=-1$ if and only if $p\equiv3\pmod4$.
```

## DEPENDENCY: thm-second-supplement-to-quadratic-reciprocity

```markdown
title: "Second supplement: $(2/p)=(-1)^{(p^2-1)/8}$"

## Statement
For every odd prime $p$,

$$\left(\frac2p\right)=(-1)^{(p^2-1)/8}.$$

Equivalently, $(2/p)=1$ if and only if $p\equiv1$ or $7\pmod8$, while $(2/p)=-1$ if and only if $p\equiv3$ or $5\pmod8$.
```
