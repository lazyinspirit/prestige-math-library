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
label: n-2

run: frontier-15
role: refuter
label: n-2
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

## ITEM: thm-euclidean-algorithm-for-jacobi-symbol

```markdown
---
id: thm-euclidean-algorithm-for-jacobi-symbol
kind: theorem
title: "The Euclidean algorithm computes the Jacobi symbol without factoring the denominator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobi-symbol, prop-jacobi-symbol-well-defined,
       thm-jacobi-symbol-multiplicativity, thm-jacobi-symbol-supplements,
       thm-jacobi-symbol-reciprocity, thm-division-algorithm-in-z,
       lem-p-adic-valuation-basic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.3"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
pipeline_run: null
---

## Statement

Let $a\in\mathbb Z$ and let $n\ge1$ be odd. Starting from $(\varepsilon,A,N)=(1,a,n)$, repeat the following deterministic procedure:

- if $N=1$, return $\varepsilon$;
- otherwise let $r$ be the least nonnegative remainder of $A$ modulo $N$, and return $0$ if $r=0$;
- write $r=2^s b$ with $b$ odd, replace $\varepsilon$ by $\varepsilon(-1)^{s(N^2-1)/8}$, then replace it by $\varepsilon(-1)^{(b-1)(N-1)/4}$ and replace $(A,N)$ by $(N,b)$.

The Euclidean Jacobi algorithm terminates and returns $\left(\frac an\right)$ without factoring the odd denominator $n$.

## Facts & Assumptions

**Given:** An integer $a$, an odd positive integer $n$, and the algorithmic state described in the Statement.

[L1] The Jacobi symbol satisfies $\left(\frac a1\right)=1$ and is zero exactly when $\gcd(a,n)>1$ ([[def-jacobi-symbol]]).

[L2] The Jacobi symbol depends only on its numerator modulo the odd positive denominator ([[prop-jacobi-symbol-well-defined]]).

[L3] For odd positive $N$, $\left(\frac{uv}{N}\right)=\left(\frac uN\right)\left(\frac vN\right)$ ([[thm-jacobi-symbol-multiplicativity]]).

[L4] For odd positive $N$, $\left(\frac2N\right)=(-1)^{(N^2-1)/8}$ ([[thm-jacobi-symbol-supplements]]).

[L5] For coprime odd positive $b,N$, $\left(\frac bN\right)\left(\frac Nb\right)=(-1)^{(b-1)(N-1)/4}$ ([[thm-jacobi-symbol-reciprocity]]).

[L6] Division by a positive integer has a unique remainder $r$ with $0\le r<N$ ([[thm-division-algorithm-in-z]]).

[L7] Every nonzero integer $r$ has a uniquely determined maximal power $2^s$ dividing it and can be written $r=2^s b$ with $b$ odd ([[lem-p-adic-valuation-basic]]).

## Proof

**Proof technique:** direct.

1.1 Maintain the invariant $\left(\frac an\right)=\varepsilon\left(\frac AN\right)$. By [L2] and [L6], replacing $A$ by $r$ preserves the current symbol. If $r=2^sb$, then [L3] and [L4] give $\left(\frac rN\right)=(-1)^{s(N^2-1)/8}\left(\frac bN\right)$. When $\gcd(b,N)=1$, [L5] gives $\left(\frac bN\right)=(-1)^{(b-1)(N-1)/4}\left(\frac Nb\right)$; when the gcd exceeds $1$, [L1] makes both Jacobi symbols zero, so the same signed equality remains true. Thus every nonterminal update preserves the invariant. [L1, L2, L3, L4, L5, L6, L7, algebra]

2.1 At a nonterminal update, $0<r<N$ and the new denominator is the positive odd part $b\le r$, so it is strictly smaller than $N$. A strictly decreasing chain of positive integers cannot have more terms than its initial value, so the procedure reaches a terminal state. [step 1.1, L6, algebra]

3.1 If $N=1$, [L1] and the invariant give $\left(\frac an\right)=\varepsilon$. If $r=0$ while $N>1$, then $N$ divides $A$, so [L1] gives $\left(\frac AN\right)=0$ and the invariant gives the returned value $0$. These are all terminal states, proving correctness and termination; only division, extraction of powers of $2$, and sign updates were used, not a factorisation of $n$. [step 1.1, step 2.1, L1, L6] ∎

```

### Recorded proof contract for thm-euclidean-algorithm-for-jacobi-symbol

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-jacobi-symbol",
   "source_section": "Definition",
   "quote": "The value is $0$ exactly when $\\gcd(a,n)>1$, and $\\left(\\frac a1\\right)=1$.",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "prop-jacobi-symbol-well-defined",
   "source_section": "Statement",
   "quote": "The Jacobi symbol depends only on $a\\pmod n$, and it is zero exactly when $\\gcd(a,n)>1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-jacobi-symbol-multiplicativity",
   "source_section": "Statement",
   "quote": "For integers $a,b$ and an odd positive integer $n$,\n\n$$\\left(\\frac{ab}{n}\\right)=\\left(\\frac an\\right)\\left(\\frac bn\\right).$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-jacobi-symbol-supplements",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac{-1}{n}\\right)=(-1)^{(n-1)/2},\\qquad \\left(\\frac2n\\right)=(-1)^{(n^2-1)/8}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-jacobi-symbol-reciprocity",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac mn\\right)\\left(\\frac nm\\right)=(-1)^{(m-1)(n-1)/4}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-division-algorithm-in-z",
   "source_section": "Statement",
   "quote": "$$a \\;=\\; qb + r, \\qquad 0 \\le r < b,$$\n\nand the pair $(q,r)$ with these two properties is unique.",
   "uses": [
    "1.1",
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L7",
   "source": "lem-p-adic-valuation-basic",
   "source_section": "Statement",
   "quote": "$a = p^{v} a'$ for some $a' \\in \\mathbb{Z}$ with $a' \\ne 0$ and $p \\nmid a'$",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Maintain the invariant $\\left(\\frac an\\right)=\\varepsilon\\left(\\frac AN\\right)$. By [L2] and [L6], replacing $A$ by $r$ preserves the current symbol. If $r=2^sb$, then [L3] and [L4] give $\\left(\\frac rN\\right)=(-1)^{s(N^2-1)/8}\\left(\\frac bN\\right)$. When $\\gcd(b,N)=1$, [L5] gives $\\left(\\frac bN\\right)=(-1)^{(b-1)(N-1)/4}\\left(\\frac Nb\\right)$; when the gcd exceeds $1$, [L1] makes both Jacobi symbols zero, so the same signed equality remains true. Thus every nonterminal update preserves the invariant.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "L6",
    "L7",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "At a nonterminal update, $0<r<N$ and the new denominator is the positive odd part $b\\le r$, so it is strictly smaller than $N$. A strictly decreasing chain of positive integers cannot have more terms than its initial value, so the procedure reaches a terminal state.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L6",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "If $N=1$, [L1] and the invariant give $\\left(\\frac an\\right)=\\varepsilon$. If $r=0$ while $N>1$, then $N$ divides $A$, so [L1] gives $\\left(\\frac AN\\right)=0$ and the invariant gives the returned value $0$. These are all terminal states, proving correctness and termination; only division, extraction of powers of $2$, and sign updates were used, not a factorisation of $n$.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "L1",
    "L6"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "The deterministic loop has a terminal state but no empty indexed product beyond the definition cited in [L1]."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 3.1 handles a zero remainder and returns the Jacobi zero value."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 3.1 handles denominator one before taking a remainder."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "When the reduced numerator is one, step 1.1 immediately reaches the denominator-one terminal evaluation without an invalid swap."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Step 2.1 uses the strict remainder inequalities $0<r<n$ to prove descent."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Statement boundary: the quotient-remainder pair and the power-of-two exponent are unique, so every update is deterministic."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the Euclidean Jacobi algorithm is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the Euclidean Jacobi algorithm is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: prop-unit-square-has-jacobi-symbol-one

```markdown
---
id: prop-unit-square-has-jacobi-symbol-one
kind: proposition
title: "A unit square modulo an odd integer has Jacobi symbol one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-jacobi-symbol-on-units-is-a-homomorphism,
       thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: false
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

If $a$ is a unit square modulo an odd positive integer $n$, then $\left(\frac an\right)=1$.

Explicitly, if $\gcd(a,n)=1$ and $x^2\equiv a\pmod n$ for some integer $x$, then the Jacobi symbol of $a$ modulo $n$ is $1$.

## Facts & Assumptions

**Given:** An odd positive integer $n$ and integers $a,x$ such that $\gcd(a,n)=1$ and $x^2\equiv a\pmod n$.

[L1] The assignment $\chi_n([u]_n)=\left(\frac un\right)$ is a group homomorphism $(\mathbb Z/n)^\times\to\{\pm1\}$ ([[prop-jacobi-symbol-on-units-is-a-homomorphism]]).

[L2] A residue class $[u]_n$ is a unit if and only if $\gcd(u,n)=1$ ([[thm-unit-criterion-modulo-n]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $[a]_n$ is a unit. If $v$ is its inverse, then $[x]_n([x]_n v)=[x]_n^2v=[a]_nv=[1]_n$, so $[x]_n$ is also a unit and lies in the domain of [L1]. [L1, L2, given, algebra]

2.1 Applying [L1] to $[a]_n=[x]_n^2$ gives $\left(\frac an\right)=\chi_n([a]_n)=\chi_n([x]_n)^2=1$, since $\chi_n([x]_n)\in\{\pm1\}$. [step 1.1, L1, algebra] ∎

```

### Recorded proof contract for prop-unit-square-has-jacobi-symbol-one

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "prop-jacobi-symbol-on-units-is-a-homomorphism",
   "source_section": "Statement",
   "quote": "The assignment $\\chi_n([a]_n)=\\left(\\frac an\\right)$ is a group homomorphism $(\\mathbb Z/n)^\\times\\to\\{\\pm1\\}$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-unit-criterion-modulo-n",
   "source_section": "Statement",
   "quote": "Let $n\\ge1$ and $a\\in\\mathbb Z$. Then $[a]_n$ is a unit of $\\mathbb Z/n$\n([[def-unit-group-modulo-n-and-euler-totient]]) if and only if\n\n$$\\gcd(a,n)=1,$$",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "By [L2], $[a]_n$ is a unit. If $v$ is its inverse, then $[x]_n([x]_n v)=[x]_n^2v=[a]_nv=[1]_n$, so $[x]_n$ is also a unit and lies in the domain of [L1].",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Applying [L1] to $[a]_n=[x]_n^2$ gives $\\left(\\frac an\\right)=\\chi_n([a]_n)=\\chi_n([x]_n)^2=1$, since $\\chi_n([x]_n)\\in\\{\\pm1\\}$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "Only one supplied square-root witness is used."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The unit hypothesis used in step 1.1 excludes a zero Jacobi value, including nonunit square targets."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "At $n=1$ the unique class and empty-product Jacobi value make step 2.1 equal to one."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: the one-element unit group at modulus one satisfies the same homomorphism calculation."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "No interval or finite range appears in this group calculation."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Statement boundary: the square root is part of the hypothesis, not selected from an unproved nonempty set."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of unit squares and the Jacobi symbol is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of unit squares and the Jacobi symbol is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-nonsingular-square-root-lift-modulo-odd-prime-powers

```markdown
---
id: lem-nonsingular-square-root-lift-modulo-odd-prime-powers
kind: lemma
title: "A nonsingular square root lifts uniquely by one odd-prime-power step"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-linear-congruence-solvability-and-solution-count,
       thm-euclids-lemma, lem-prime-not-dividing-is-coprime]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 7, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture7.pdf"
    - title: "P. Hackman, Elementary Number Theory, §B.VII"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime, let $k\ge1$, and let $a,x_k\in\mathbb Z$ satisfy $p\nmid a$ and $x_k^2\equiv a\pmod{p^k}$. Then there is a unique class $t\pmod p$ such that $(x_k+tp^k)^2\equiv a\pmod{p^{k+1}}$.

Equivalently, the root class of $x_k$ modulo $p^k$ has exactly one lift to a root class modulo $p^{k+1}$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $k\ge1$, and integers $a,x_k$ with $p\nmid a$ and $x_k^2\equiv a\pmod{p^k}$.

[L1] If $d=\gcd(c,n)$, then $ct\equiv b\pmod n$ is soluble exactly when $d\mid b$, and when soluble it has exactly $d$ solution classes modulo $n$ ([[thm-linear-congruence-solvability-and-solution-count]]).

[L2] If a prime $p$ divides a product $uv$, then $p\mid u$ or $p\mid v$ ([[thm-euclids-lemma]]).

[L3] If a prime $p$ does not divide an integer $u$, then $\gcd(p,u)=1$ ([[lem-prime-not-dividing-is-coprime]]).

## Proof

**Proof technique:** direct.

1.1 Reducing the given congruence modulo $p$ shows that $p\mid x_k$ would force $p\mid a$, contrary to the hypothesis. If $p\mid2x_k$, [L2] would give $p\mid2$ or $p\mid x_k$; both are impossible because $p$ is odd. Hence $p\nmid2x_k$, and [L3] gives $\gcd(2x_k,p)=1$. [L2, L3, given]

2.1 Write $x_k^2-a=cp^k$. Every class modulo $p^{k+1}$ reducing to $x_k$ modulo $p^k$ has a unique form $x_k+tp^k$ with $t$ modulo $p$, and expansion gives $(x_k+tp^k)^2-a=p^k(c+2x_kt+t^2p^k)$. Since $k\ge1$, the lift is a root modulo $p^{k+1}$ exactly when $2x_kt\equiv-c\pmod p$. By step 1.1 and [L1], this linear congruence has exactly one solution class $t$ modulo $p$. [step 1.1, L1, algebra] ∎

```

### Recorded proof contract for lem-nonsingular-square-root-lift-modulo-odd-prime-powers

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-linear-congruence-solvability-and-solution-count",
   "source_section": "Statement",
   "quote": "The congruence\n\n$$ax\\equiv b\\pmod n$$\n\nhas an integer solution if and only if $d\\mid b$. When it is solvable, it has\nexactly $d$ solution classes in $\\mathbb Z/n$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-euclids-lemma",
   "source_section": "Statement",
   "quote": "$$p \\mid a \\qquad \\text{or} \\qquad p \\mid b .$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-prime-not-dividing-is-coprime",
   "source_section": "Statement",
   "quote": "if $p \\nmid a$ then $p$ and $a$ are coprime",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Reducing the given congruence modulo $p$ shows that $p\\mid x_k$ would force $p\\mid a$, contrary to the hypothesis. If $p\\mid2x_k$, [L2] would give $p\\mid2$ or $p\\mid x_k$; both are impossible because $p$ is odd. Hence $p\\nmid2x_k$, and [L3] gives $\\gcd(2x_k,p)=1$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "L3",
    "given"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Write $x_k^2-a=cp^k$. Every class modulo $p^{k+1}$ reducing to $x_k$ modulo $p^k$ has a unique form $x_k+tp^k$ with $t$ modulo $p$, and expansion gives $(x_k+tp^k)^2-a=p^k(c+2x_kt+t^2p^k)$. Since $k\\ge1$, the lift is a root modulo $p^{k+1}$ exactly when $2x_kt\\equiv-c\\pmod p$. By step 1.1 and [L1], this linear congruence has exactly one solution class $t$ modulo $p$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "The lemma lifts one supplied root and has no indexed family."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 1.1 uses $p\\nmid a$ to exclude the singular zero root modulo $p$."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The minimum exponent $k=1$ is admitted and the expansion in step 2.1 still has the required $p^2$ error term."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Oddness of $p$ is spent in step 1.1; the singular prime-two case is deliberately excluded."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The correction parameter is a residue class, not an interval endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Statement boundary: the error quotient exists by the supplied congruence, and [L1] proves existence and uniqueness of the correction class."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of one-step nonsingular square-root lifting is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of one-step nonsingular square-root lifting is not a biconditional."
  }
 ],
 "finite_smoke": [
  {
   "check": "binomial-congruence-solution-count",
   "asserts": "Equivalently, the root class of $x_k$ modulo $p^k$ has exactly one lift to a root class modulo $p^{k+1}$.",
   "claim": "Unique lifting is exactly what holds the solution count fixed as the exponent climbs: if some root class lifted in two ways at one step, the count at p^(k+1) would exceed gcd(phi(p^(k+1)), 2) = 2 while the count at p^k stayed 2. The check runs both exponents for 3/9/27, 5/25 and 7/49, so a failure of uniqueness at any of those steps is caught as a wrong count.",
   "checked_in": "step 2.1"
  }
 ]
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

## DEPENDENCY: prop-jacobi-symbol-well-defined

```markdown
title: "The Jacobi symbol is well defined on numerator residue classes"

## Statement
For every integer $a$ and odd positive integer $n$, the product in [[def-jacobi-symbol]] is independent of the ordering used to list the canonical prime factors and belongs to $\{-1,0,1\}$. The Jacobi symbol depends only on $a\pmod n$, and it is zero exactly when $\gcd(a,n)>1$. At $n=1$ it has the value $1$.
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

## DEPENDENCY: thm-jacobi-symbol-supplements

```markdown
title: "The two supplementary laws for the Jacobi symbol"

## Statement
For every odd positive integer $n$,

$$\left(\frac{-1}{n}\right)=(-1)^{(n-1)/2},\qquad \left(\frac2n\right)=(-1)^{(n^2-1)/8}.$$

Both formulas include $n=1$, where each Jacobi symbol and each displayed power of $-1$ equals $1$.
```

## DEPENDENCY: thm-jacobi-symbol-reciprocity

```markdown
title: "Quadratic reciprocity for coprime odd Jacobi denominators"

## Statement
For coprime odd positive integers $m,n$,

$$\left(\frac mn\right)\left(\frac nm\right)=(-1)^{(m-1)(n-1)/4}.$$

The formula includes $m=1$ or $n=1$.
```

## DEPENDENCY: thm-division-algorithm-in-z

```markdown
title: "Division with remainder in $\\mathbb{Z}$: for $a \\in \\mathbb{Z}$ and $b > 0$ there are unique $q, r \\in \\mathbb{Z}$ with $a = qb + r$ and $0 \\le r < b$"

## Statement
Let $a, b \in \mathbb{Z}$ ([[def-integers]]) with $b > 0$. Then there exist
integers $q$ and $r$ with

$$a \;=\; qb + r, \qquad 0 \le r < b,$$

and the pair $(q,r)$ with these two properties is unique.

We say $b$ **divides** $a$, written $b \mid a$, when $a = qb$ for some
$q \in \mathbb{Z}$; by the above, for $b > 0$ this holds exactly when the
remainder $r$ is $0$.
```

## DEPENDENCY: lem-p-adic-valuation-basic

```markdown
title: "For a prime $p$ and a nonzero integer $a$: $p^{v_p(a)} \\mid a$ and $p^{v_p(a)+1} \\nmid a$; $p^{k} \\mid a$ holds exactly for $k \\le v_p(a)$; $v_p(a) \\ge 1$ exactly when $p \\mid a$; $v_p(1) = v_p(-1) = 0$; and $v_p(p) = 1$"

## Statement
Let $p$ be a prime ([[def-prime]]), let $a \in \mathbb{Z}$ with $a \ne 0$, and
write $v := v_p(a)$ ([[def-p-adic-valuation]]). Powers are the natural powers of
[[def-group-power]] in the commutative monoid $(\mathbb{Z},\cdot,1)$
([[lem-units-of-z]]), and $k + 1$ means $\sigma(k)$. Then:

0. $p^{k} \ge 1$ for every $k \in \mathbb{N}$; in particular $p^{k} > 0$ and
   $p^{k} \ne 0$;
1. $p^{v} \mid a$ and $p^{v+1} \nmid a$;
2. for $k \in \mathbb{N}$: $p^{k} \mid a$ if and only if $k \le v$;
3. $a = p^{v} a'$ for some $a' \in \mathbb{Z}$ with $a' \ne 0$ and $p \nmid a'$;
4. $v \ge 1$ if and only if $p \mid a$;
5. $v_p(1) = v_p(-1) = 0$ and $v_p(p) = 1$.
```

## DEPENDENCY: prop-jacobi-symbol-on-units-is-a-homomorphism

```markdown
title: "For fixed odd modulus, the Jacobi symbol is a homomorphism on the unit group"

## Statement
Fix an odd positive integer $n$. The assignment $\chi_n([a]_n)=\left(\frac an\right)$ is a group homomorphism $(\mathbb Z/n)^\times\to\{\pm1\}$.

Here $\{\pm1\}$ is the two-element multiplicative group, except that the image is the one-element subgroup $\{1\}$ when the character is trivial.
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

## DEPENDENCY: thm-linear-congruence-solvability-and-solution-count

```markdown
title: "For $n\\ge1$, $ax\\equiv b\\pmod n$ is solvable exactly when $\\gcd(a,n)\\mid b$, and then has exactly $\\gcd(a,n)$ solution classes modulo $n$"

## Statement
Let $a,b\in\mathbb Z$ and $n\ge1$, and put $d:=\gcd(a,n)$. The congruence

$$ax\equiv b\pmod n$$

has an integer solution if and only if $d\mid b$. When it is solvable, it has
exactly $d$ solution classes in $\mathbb Z/n$. More explicitly, if
$a=da'$, $n=dn'$, $b=db'$ and $x_0$ solves
$a'x_0\equiv b'\pmod{n'}$, the solutions modulo $n$ are

$$[x_0+jn']_n\qquad(0\le j<d).$$
```

## DEPENDENCY: thm-euclids-lemma

```markdown
title: "Euclid's lemma: if $p$ is prime and $p \\mid ab$ then $p \\mid a$ or $p \\mid b$"

## Statement
Let $p$ be a prime ([[def-prime]]) and let $a, b \in \mathbb{Z}$. If
$p \mid ab$ ([[def-divides-in-z]]) then

$$p \mid a \qquad \text{or} \qquad p \mid b .$$
```

## DEPENDENCY: lem-prime-not-dividing-is-coprime

```markdown
title: "For a prime $p$ and any integer $a$, $\\gcd(p,a)$ is $p$ when $p \\mid a$ and $1$ otherwise; so $p \\nmid a$ makes $p$ and $a$ coprime"

## Statement
Let $p$ be a prime ([[def-prime]]) and let $a \in \mathbb{Z}$. Then

$$\gcd(p,a) \;=\; \begin{cases} p & \text{if } p \mid a, \\ 1 & \text{if } p \nmid a, \end{cases}$$

with $\gcd$ as in [[def-common-divisor-and-gcd]] and divisibility as in
[[def-divides-in-z]]. In particular, if $p \nmid a$ then $p$ and $a$ are coprime
([[def-coprime]]).
```
