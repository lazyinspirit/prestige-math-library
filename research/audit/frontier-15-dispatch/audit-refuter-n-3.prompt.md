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
label: n-3

run: frontier-15
role: refuter
label: n-3
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

## ITEM: thm-unit-square-criterion-modulo-odd-prime-powers

```markdown
---
id: thm-unit-square-criterion-modulo-odd-prime-powers
kind: theorem
title: "Unit square criterion and root count modulo odd prime powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-nonsingular-square-root-lift-modulo-odd-prime-powers,
       cor-number-of-solutions-to-quadratic-congruence-modulo-prime,
       def-legendre-symbol]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §§B.VII and D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 7, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture7.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.4"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For an odd prime $p$, $k\ge1$, and $p\nmid a$, the congruence $x^2\equiv a\pmod{p^k}$ is soluble if and only if $\left(\frac ap\right)=1$.

When soluble it has exactly two solution classes modulo $p^k$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $k\ge1$, and an integer $a$ with $p\nmid a$.

[L1] Every root modulo $p^j$ has a unique lift to a root modulo $p^{j+1}$ when $j\ge1$ and $p\nmid a$ ([[lem-nonsingular-square-root-lift-modulo-odd-prime-powers]]).

[L2] The congruence $x^2\equiv a\pmod p$ has exactly $1+(a/p)$ solution classes modulo $p$ ([[cor-number-of-solutions-to-quadratic-congruence-modulo-prime]]).

[L3] For $p\nmid a$, the Legendre symbol $(a/p)$ is $1$ when $a$ is a square modulo $p$ and $-1$ otherwise ([[def-legendre-symbol]]).

## Proof

**Proof technique:** direct.

1.1 Any root modulo $p^k$ reduces to a root modulo $p$. Since $p\nmid a$, [L3] makes $(a/p)$ a sign, and [L2] says that a root exists only when $1+(a/p)=2$, equivalently when $(a/p)=1$. [L2, L3, given]

1.2 Conversely, if $(a/p)=1$, [L2] gives exactly two root classes modulo $p$. For $k=1$ these are the required roots. For $k>1$, repeatedly apply [L1] from exponent $1$ through exponent $k-1$ to lift each class uniquely; the two lifted classes remain distinct because their reductions modulo $p$ are distinct. [L1, L2, L3]

2.1 Every root modulo $p^k$ reduces to one of the two roots modulo $p$, and at every successive exponent [L1] forces it to be the unique lift of that reduction. Thus step 1.2 constructs all roots, so there are exactly two. Together with step 1.1 this proves both directions of the criterion and the count. [step 1.1, step 1.2, L1] ∎

```

### Recorded proof contract for thm-unit-square-criterion-modulo-odd-prime-powers

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-nonsingular-square-root-lift-modulo-odd-prime-powers",
   "source_section": "Statement",
   "quote": "Let $p$ be an odd prime, let $k\\ge1$, and let $a,x_k\\in\\mathbb Z$ satisfy $p\\nmid a$ and $x_k^2\\equiv a\\pmod{p^k}$. Then there is a unique class $t\\pmod p$ such that $(x_k+tp^k)^2\\equiv a\\pmod{p^{k+1}}$.\n\nEquivalently, the root class of $x_k$ modulo $p^k$ has exactly one lift to a root class modulo $p^{k+1}$.",
   "uses": [
    "1.2",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-number-of-solutions-to-quadratic-congruence-modulo-prime",
   "source_section": "Statement",
   "quote": "$$x^2\\equiv a\\pmod p$$\n\nhas exactly $1+(a/p)$ solution classes modulo $p$.",
   "uses": [
    "1.1",
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "def-legendre-symbol",
   "source_section": "Definition",
   "quote": "$$\\left(\\frac ap\\right):=\\begin{cases}0,&p\\mid a,\\\\1,&p\\nmid a\\text{ and }a\\text{ is a quadratic residue modulo }p,\\\\-1,&p\\nmid a\\text{ and }a\\text{ is a quadratic nonresidue modulo }p.\\end{cases}$$",
   "uses": [
    "1.1",
    "1.2"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Any root modulo $p^k$ reduces to a root modulo $p$. Since $p\\nmid a$, [L3] makes $(a/p)$ a sign, and [L2] says that a root exists only when $1+(a/p)=2$, equivalently when $(a/p)=1$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "L3",
    "given"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Conversely, if $(a/p)=1$, [L2] gives exactly two root classes modulo $p$. For $k=1$ these are the required roots. For $k>1$, repeatedly apply [L1] from exponent $1$ through exponent $k-1$ to lift each class uniquely; the two lifted classes remain distinct because their reductions modulo $p$ are distinct.",
   "step": "1.2",
   "inputs": [
    "L1",
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Every root modulo $p^k$ reduces to one of the two roots modulo $p$, and at every successive exponent [L1] forces it to be the unique lift of that reduction. Thus step 1.2 constructs all roots, so there are exactly two. Together with step 1.1 this proves both directions of the criterion and the count.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
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
   "reason": "The proof follows one prime-power chain rather than a possibly empty factor family."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The hypothesis $p\\nmid a$ is used in step 1.1 and excludes the singular zero target."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 1.2 treats exponent $k=1$ as the base case."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: the theorem requires an odd prime, exactly the nonsingular setting needed by [L1]."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Step 1.2 starts at exponent one and lifts only through exponent $k-1$."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "[L2] proves that the two base roots exist, and [L1] proves existence and uniqueness at every lift in steps 1.2–2.1."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 1.1 proves that solubility modulo $p^k$ forces Legendre symbol one."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Steps 1.2–2.1 prove that Legendre symbol one yields exactly two roots."
  }
 ],
 "finite_smoke": [
  {
   "check": "binomial-congruence-solution-count",
   "asserts": "When soluble it has exactly two solution classes modulo $p^k$.",
   "claim": "Every odd prime power below the search bound has a primitive root, so at exponent m = 2 the check computes gcd(phi(p^k), 2) = 2 — phi(p^k) = p^(k-1)(p-1) is even — and compares it against the actual number of solutions of x^2 = a for every solvable unit a. A count other than two at any of 3, 9, 27, 5, 25, 7, 49, 11, 13, ... is a countermodel to this clause.",
   "checked_in": "steps 1.2 and 2.1"
  }
 ]
}
```

## ITEM: lem-wielandt-sylow-binomial-valuation

```markdown
---
id: lem-wielandt-sylow-binomial-valuation
kind: lemma
title: "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-adic-valuation, lem-p-adic-valuation-additive, def-binomial-coefficient, thm-binomial-closed-formula, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Let $p$ be prime and let $a,m\in\mathbb N$ satisfy $p\nmid m$. Then $$v_p\!\left(\binom{p^am}{p^a}\right)=0.$$ The valuation is applied only to nonzero integers. See [[def-p-adic-valuation]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a prime $p$ and a nonzero integer $x$, the $p$-adic valuation is $$v_p(x):=\max\{k\in\mathbb N:p^k\mid x\};$$ the value $v_p(0)$ is undefined. ([[def-p-adic-valuation]]).

[L2] For a prime $p$ and nonzero integers $x,y$, the product $xy$ is nonzero and $$v_p(xy)=v_p(x)+v_p(y).$$ ([[lem-p-adic-valuation-additive]]).

[L3] For a finite set $A$ and $k \in \mathbb{N}$ put $$[A]^{k} := \{\, S \subseteq A \ :\ \lvert S\rvert = k \,\},$$ the set of $k$-element subsets of $A$. Every $S \subseteq A$ is finite (thm-subset-of-a-finite-set), so the condition $\lvert S\rvert = k$ makes sense for every subset. ([[def-binomial-coefficient]]).

[L4] Let $n,k\in\mathbb N$ with $k\le n$. Then $$\binom nk\,k!\,(n-k)!=n!,$$ and consequently $\binom nk\,k!=n^{\underline{k}}$. ([[thm-binomial-closed-formula]]).

[L5] The factorial and falling factorial satisfy $$0!=1,\qquad (n+1)!=n!(n+1),\qquad n^{\underline 0}=1,\qquad n^{\underline{k+1}}=n^{\underline k}(n-k),$$ and for $k\le n$, $n^{\underline k}$ is the product $n(n-1)\cdots(n-k+1)$. ([[def-factorial-and-falling-factorial]]).

## Proof

**Proof technique:** direct.

1.1 We apply the valuation to the identity $\binom{p^am}{p^a}(p^a)!= (p^am)^{\underline{p^a}}$. [L1, L2, L3, L4, L5, given, algebra]

2.1 If $0<j<p^a$, write $j=p^ru$ with $p\nmid u$; then $r<a$ and $p^am-j=p^r(p^{a-r}m-u)$, whose parenthesized factor is prime to $p$. Hence $v_p(p^am-j)=v_p(j)$. The factor $p^am$ contributes $a+v_p(m)=a$, exactly matching the contribution of $p^a$ in $(p^a)!$, so all valuations cancel. [step 1.1, given, algebra]

3.1 If $a=0$, the binomial coefficient is $\binom m1=m$, which is nonzero and prime to $p$. No valuation of zero occurs in either case. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for lem-wielandt-sylow-binomial-valuation

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-p-adic-valuation",
   "source_section": "Definition",
   "quote": "Let $p$ be a prime ([[def-prime]]) and let $a \\in \\mathbb{Z}$ with $a \\ne 0$.\nPowers $p^{k}$ for $k \\in \\mathbb{N}$ are the **natural powers of\n[[def-group-power]] taken in the commutative monoid $(\\mathbb{Z},\\cdot,1)$** of\n[[lem-units-of-z]] and [[def-semigroup-and-monoid]], so that\n\n$$p^{0} = 1, \\qquad p^{\\sigma(k)} = p^{k} \\cdot p \\quad (k \\in \\mathbb{N}).$$\n\nPut\n\n$$E(p,a) \\;:=\\; \\{\\, k \\in \\mathbb{N} \\;:\\; p^{k} \\mid a \\,\\}$$\n\n([[def-divides-in-z]]). Then $E(p,a)$ has a greatest element, and the **$p$-adic\nvaluation** of $a$ is\n\n$$v_p(a) \\;:=\\; \\max E(p,a) \\;\\in\\; \\mathbb{N},$$\n\nthe greatest $k \\in \\mathbb{N}$ with $p^{k} \\mid a$.\n\n**Why a greatest element exists.** Three facts are needed, and each is proved\nhere rather than assumed.\n\n*The set is nonempty.* $p^{0} = 1$ and $1 \\mid a$ for every $a$\n([[def-divides-in-z]]), so $0 \\in E(p,a)$.\n\n*Every power of $p$ exceeds its own exponent.* We claim $p^{k} \\ge 1$ and\n$\\iota(k) < p^{k}$ for every $k \\in \\mathbb{N}$, where\n$\\iota : \\mathbb{N} \\to \\mathbb{Z}$ is the embedding of [[lem-nat-embeds-int]].\nBoth are proved by induction ([[thm-induction-principle]]). At $k = 0$ we have\n$p^{0} = 1 \\ge 1$ and $\\iota(0) = 0 < 1 = p^{0}$, using $0 < 1$, which holds\nbecause $1 = \\iota(1)$ is nonnegative and differs from $0 = \\iota(0)$ by\ninjectivity of $\\iota$. Assume both at $k$. Since $p > 1$ we have $p - 1 > 0$,\nhence $p - 1 \\ge 1$ by discreteness of the order on $\\mathbb{Z}$\n([[lem-nat-discrete]], [[lem-nat-embeds-int]]: an integer $x > 0$ is $\\iota(j)$\nwith $j \\ne 0$, so $1 = \\sigma(0) \\le j$ and $1 \\le x$). Therefore\n$p^{\\sigma(k)} - p^{k} = p^{k}(p-1) \\ge p^{k} \\ge 1$, because $p^{k} \\ge 1 > 0$\nand positives are closed under multiplication ([[thm-int-ordered-ring]]); so\n$p^{\\sigma(k)} \\ge p^{k} + 1 \\ge 1 + 1 > 1$. The same discreteness applied to\n$p^{k} - \\iota(k) > 0$ gives $\\iota(k) + 1 \\le p^{k}$, and\n$\\iota(\\sigma(k)) = \\iota(k) + 1$ because $\\sigma(k) = k + 1$ in $\\mathbb{N}$\n([[def-nat-addition]]) and $\\iota$ preserves addition; so\n$\\iota(\\sigma(k)) \\le p^{k} < p^{k} + 1 \\le p^{\\sigma(k)}$. The induction is\ncomplete.\n\n*The set is bounded.* Let $k \\in E(p,a)$. Then $p^{k} \\mid a$ with $a \\ne 0$, so\n$|p^{k}| \\le |a|$ ([[lem-divisor-bound]]); and $p^{k} \\ge 1 > 0$ gives\n$|p^{k}| = p^{k}$ ([[def-int-abs]], [[lem-int-abs-properties]]). Combining with\nthe previous paragraph, $\\iota(k) < p^{k} \\le |a|$. So the set of integers\n$\\iota[E(p,a)] = \\{\\, \\iota(k) : k \\in E(p,a) \\,\\}$ is nonempty and bounded above\nby $|a|$, hence has a unique greatest element\n([[lem-int-bounded-above-has-greatest]]). That greatest element lies in the set,\nso it is $\\iota(k_0)$ for some $k_0 \\in E(p,a)$; and since $\\iota$ is injective\nand preserves the order in both directions, $k_0$ is the greatest element of\n$E(p,a)$ and is unique. We set $v_p(a) := k_0$.\n\n**$v_p(0)$ is left undefined.** Every power of $p$ divides $0$\n([[def-divides-in-z]]), so $E(p,0) = \\mathbb{N}$ has no greatest element and the\nclause above defines nothing. Every statement about $v_p$ in this library\ntherefore carries the hypothesis $a \\ne 0$ explicitly. The convention\n$v_p(0) := \\infty$ is *not* adopted: it would need a value set enlarging\n$\\mathbb{N}$ by a greatest element in which to place $\\infty$, and no such set is\navailable at this point in the reading order. The library does build a totally\nordered set with a greatest element — the extended real line, whose greatest\nelement is $+\\infty$ — but it is constructed far above this page, and taking the\nvalues of $v_p$ there would make a definition about $\\mathbb{Z}$ rest on the\nconstruction of $\\mathbb{R}$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "lem-p-adic-valuation-additive",
   "source_section": "Statement",
   "quote": "Let $p$ be a prime ([[def-prime]]) and let $a, b \\in \\mathbb{Z}$ be nonzero,\nwith $v_p$ as in [[def-p-adic-valuation]]. Then $ab \\ne 0$ and\n\n$$v_p(ab) \\;=\\; v_p(a) + v_p(b),$$\n\nthe sum taken in $\\mathbb{N}$ ([[def-nat-addition]]). If moreover $a + b \\ne 0$,\nthen\n\n$$v_p(a+b) \\;\\ge\\; \\min\\{\\, v_p(a),\\, v_p(b) \\,\\},$$\n\nthe minimum of two natural numbers, which exists because the order on\n$\\mathbb{N}$ is total ([[thm-nat-linear-order]]).",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-binomial-coefficient",
   "source_section": "Definition",
   "quote": "For a finite set $A$ and $k \\in \\mathbb{N}$ put\n\n$$[A]^{k} := \\{\\, S \\subseteq A \\ :\\ \\lvert S\\rvert = k \\,\\},$$\n\nthe set of $k$-element subsets of $A$. Every $S \\subseteq A$ is finite\n([[thm-subset-of-a-finite-set]]), so the condition $\\lvert S\\rvert = k$ makes\nsense for every subset.\n\n**$[A]^{k}$ is finite.** It is a subset of $\\mathcal{P}(A)$, which is finite by\n[[cor-cardinality-of-the-power-set]], so [[thm-subset-of-a-finite-set]] applies.\n\n**$\\lvert [A]^{k}\\rvert$ depends only on $\\lvert A\\rvert$.** Let $h : A \\to A'$ be\na bijection of finite sets. The direct image map $S \\mapsto h[S]$ carries\n$[A]^{k}$ into $[A']^{k}$, because $h$ restricted to $S$ is a bijection of $S$\nonto $h[S]$ and so $\\lvert h[S]\\rvert = \\lvert S\\rvert = k$ by the transport\nclause of [[def-finite-cardinality]]; the map $T \\mapsto h^{-1}[T]$ is its\ntwo-sided inverse, since $h^{-1}[h[S]] = S$ and $h[h^{-1}[T]] = T$ for a\nbijection $h$. So $[A]^{k} \\approx [A']^{k}$ and the two have the same\ncardinality.\n\n**Definition.** For $n, k \\in \\mathbb{N}$ set\n\n$$\\binom{n}{k} := \\big\\lvert\\, [n]^{k} \\,\\big\\rvert \\in \\mathbb{N},$$\n\nthe **binomial coefficient**. By the previous paragraph and $\\lvert n\\rvert = n$,\n\n$$\\big\\lvert [A]^{k}\\big\\rvert = \\binom{\\lvert A\\rvert}{k} \\qquad \\text{for every finite } A .$$\n\n**$\\binom{n}{k}$ is a count, so it is a natural number by construction.** It is\n*not* defined as $n!/(k!\\,(n-k)!)$: that expression involves a division, hence\nlives in $\\mathbb{R}$, and the assertion that its value is a natural number is a\ntheorem, proved in [[thm-binomial-closed-formula]]. Defining the coefficient as a\ncount makes integrality free and leaves the closed formula something to prove.\n\n**Boundary values, read off the definition and not stipulated.**\n\n- $\\binom{n}{0} = 1$ **for every $n$, including $n = 0$**: the subsets of $n$ of\n  cardinality $0$ are exactly the subsets equal to $\\varnothing$\n  ([[def-finite-cardinality]], clause (b)), so $[n]^{0} = \\{\\varnothing\\}$, a\n  one-element set. No empty-product convention is involved.\n- $\\binom{n}{n} = 1$: if $S \\subseteq n$ has $\\lvert S\\rvert = n = \\lvert n\\rvert$\n  then $S = n$ by clause 3 of [[thm-subset-of-a-finite-set]], so\n  $[n]^{n} = \\{n\\}$.\n- $\\binom{n}{k} = 0$ for $k > n$: a subset $S \\subseteq n$ has\n  $\\lvert S\\rvert \\le n$ by clause 2 of [[thm-subset-of-a-finite-set]], so\n  $\\lvert S\\rvert = k > n$ is impossible and $[n]^{k} = \\varnothing$\n  ([[lem-nat-trichotomy]]).\n- $\\binom{n}{1} = n$: a subset of cardinality $1$ is $\\{x\\}$ for exactly one\n  $x \\in n$, since $\\lvert S\\rvert = 1$ means $S \\approx \\{0\\}$; so\n  $S \\mapsto$ its unique element is a bijection $[n]^{1} \\to n$.\n- $\\binom{0}{0} = 1$ and $\\binom{0}{k} = 0$ for $k \\ge 1$, both instances of the\n  above.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-binomial-closed-formula",
   "source_section": "Statement",
   "quote": "Let $n, k \\in \\mathbb{N}$ with $k \\le n$. Then, in $\\mathbb{N}$,\n\n$$\\binom{n}{k}\\cdot k!\\cdot (n-k)! = n! ,$$\n\nand consequently:\n\n1. $\\binom{n}{k}\\cdot k! = n^{\\underline{k}}$\n   ([[def-factorial-and-falling-factorial]]);\n2. **integrality**: in $\\mathbb{R}$,\n   $\\iota\\binom{n}{k} = \\dfrac{\\iota(n!)}{\\iota(k!)\\,\\iota((n-k)!)}$, so the\n   familiar quotient $n!/(k!\\,(n-k)!)$ is the canonical natural of a natural\n   number, namely of the count $\\binom{n}{k}$;\n3. **symmetry**: $\\binom{n}{k} = \\binom{n}{n-k}$.\n\nHere $\\iota$ is the canonical natural of [[def-canonical-natural]] and $n-k$ the\ntruncated difference, which for $k \\le n$ is the ordinary one.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-factorial-and-falling-factorial",
   "source_section": "Definition",
   "quote": "**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the\nset $\\mathbb{N}\\times\\mathbb{N}$, the starting element $(0,1)$ and the function\n$f(k, v) = (\\sigma(k),\\, v \\cdot \\sigma(k))$, and by the same induction on the\nfirst coordinate as in [[def-nat-finite-sum-and-product]], there is a unique\n$F : \\mathbb{N} \\to \\mathbb{N}$ with\n\n$$F(0) = 1, \\qquad F(\\sigma(n)) = F(n)\\cdot\\sigma(n) \\quad (n \\in \\mathbb{N}).$$\n\nWe write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\\cdot 1 = 1$, $2! = 1!\\cdot 2 = 2$,\n$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.\n\n**$0! = 1$ is the base clause of this recursion**, not a convention imported from\nelsewhere. Nothing about empty products is presupposed; the agreement with the\nempty product is proved below, in clause (a), rather than assumed.\n\n**Truncated difference.** Throughout, $n - k$ is the operation fixed in\n[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when\n$k \\le n$, and $0$ when $n < k$.\n\n**The falling factorial.** For $n \\in \\mathbb{N}$ define $n^{\\underline{k}}$ by\nrecursion on $k$, by the recursion theorem applied to\n$\\mathbb{N}\\times\\mathbb{N}$ with starting element $(0,1)$ and\n$f(k, v) = (\\sigma(k),\\, v \\cdot (n-k))$:\n\n$$n^{\\underline{0}} = 1, \\qquad n^{\\underline{\\sigma(k)}} = n^{\\underline{k}}\\cdot(n-k) .$$\n\nSo $n^{\\underline{1}} = 1\\cdot(n-0) = n$ and $n^{\\underline{2}} = n\\,(n-1)$, and\nfor $k \\le n$ the value is the product $n(n-1)\\cdots(n-k+1)$ of the $k$ topmost\nfactors.\n\n**Four facts, proved here because the page uses each of them.**\n\n**(a) The factorial is the product of the first $n$ positive naturals.**\n$n! = \\prod_{j<n}\\sigma(j) = \\prod_{j<n}(j+1)$, the $\\mathbb{N}$-valued product of\n[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at\n$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and\n$\\prod_{j<\\sigma(n)}\\sigma(j) = \\big(\\prod_{j<n}\\sigma(j)\\big)\\cdot\\sigma(n) = n!\\cdot\\sigma(n) = \\sigma(n)!$.\n**So the empty-product reading and the base-clause reading are the same reading**,\nand neither was assumed.\n\n**(b) $n! \\ne 0$, and $\\iota(n!) = \\prod^{\\mathbb{R}}_{j<n}\\iota(j+1)$.** For the\nfirst, $0! = 1 \\ne 0$ ([[thm-omega-is-peano-system]]) and\n$\\sigma(n)! = n!\\cdot\\sigma(n)$ is a product of two nonzero naturals, which is\nnonzero: if $xy = 0$ with $y \\ne 0$ then $xy = 0\\cdot y$\n([[lem-nat-mult-identity]]) and cancellation gives $x = 0$\n([[lem-nat-mult-cancellative]]). So $n! \\ne 0$ for every $n$ by induction. For the second, apply the bridge clause\n6 of that lemma to clause (a) above. This is what makes the factorial of this\npage and the real-valued product $\\prod_{j<n}(j+1)$ used elsewhere in the library\n**one object seen twice**, rather than two unrelated notions.\n\n**(c) $n^{\\underline{k}}\\cdot(n-k)! = n!$ for $k \\le n$.** Induction on $k$, for\nall $n$ at once. At $k = 0$ this reads $1 \\cdot n! = n!$. Assume it at $k$ and\nlet $\\sigma(k) \\le n$; then $k \\le n$, and writing $d := n - k$ we have\n$k + d = n$ and $d \\ne 0$, since $k + 0 = k \\ne n$; so $d = \\sigma(e)$ for a\nunique $e$ ([[lem-nat-nonzero-is-successor]]), and $\\sigma(k) + e = n$, that is\n$e = n - \\sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore\n$n^{\\underline{\\sigma(k)}}\\cdot\\big(n-\\sigma(k)\\big)! = n^{\\underline{k}}\\cdot(n-k)\\cdot e! = n^{\\underline{k}}\\cdot\\big(e!\\cdot\\sigma(e)\\big) = n^{\\underline{k}}\\cdot\\sigma(e)! = n^{\\underline{k}}\\cdot(n-k)! = n!$,\nusing commutativity and associativity of multiplication\n([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion\nclause for the factorial.\n\n**(d) Boundary values.** $n^{\\underline{0}} = 1$ for every $n$, by the base\nclause; $n^{\\underline{n}} = n!$, since clause (c) at $k = n$ gives\n$n^{\\underline{n}}\\cdot 0! = n!$ and $0! = 1$; and\n$n^{\\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives\n$n^{\\underline{\\sigma(n)}} = n^{\\underline{n}}\\cdot 0 = 0$, the clause\n$x \\cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if\n$n^{\\underline{k}} = 0$ then\n$n^{\\underline{\\sigma(k)}} = 0$ as well, so $n^{\\underline{k}} = 0$ for every\n$k \\ge \\sigma(n)$ by induction.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "We apply the valuation to the identity $\\binom{p^am}{p^a}(p^a)!= (p^am)^{\\underline{p^a}}$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $0<j<p^a$, write $j=p^ru$ with $p\\nmid u$; then $r<a$ and $p^am-j=p^r(p^{a-r}m-u)$, whose parenthesized factor is prime to $p$. Hence $v_p(p^am-j)=v_p(j)$. The factor $p^am$ contributes $a+v_p(m)=a$, exactly matching the contribution of $p^a$ in $(p^a)!$, so all valuations cancel.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "If $a=0$, the binomial coefficient is $\\binom m1=m$, which is nonzero and prime to $p$. No valuation of zero occurs in either case. This proves the stated claim.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "given",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$: the claim “Let $p$ be prime and let $a,m\\in\\mathbb N$ satisfy $p\\nmid m$. Then $v_p\\!\\left(\\binom{p^am}{p^a}\\right)=0.$ The valuation is applied only to nonzero integers.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$: the zero or trivial specialization for “Let $p$ be prime and let $a,m\\in\\mathbb N$ satisfy $p\\nmid m$. Then $v_p\\!\\left(\\binom{p^am}{p^a}\\right)=0.$ The valuation is applied only to nonzero integers.” is resolved in step 3.1: “If $a=0$, the binomial coefficient is $\\binom m1=m$, which is nonzero and prime to $p$. No valuation of zero occurs in either case. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$: the claim “Let $p$ be prime and let $a,m\\in\\mathbb N$ satisfy $p\\nmid m$. Then $v_p\\!\\left(\\binom{p^am}{p^a}\\right)=0.$ The valuation is applied only to nonzero integers.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$: the collapsed or coincident-input case admitted by the hypotheses for “Let $p$ be prime and let $a,m\\in\\mathbb N$ satisfy $p\\nmid m$. Then $v_p\\!\\left(\\binom{p^am}{p^a}\\right)=0.$ The valuation is applied only to nonzero integers.” is resolved in step 3.1: “If $a=0$, the binomial coefficient is $\\binom m1=m$, which is nonzero and prime to $p$. No valuation of zero occurs in either case. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$: the initial index and termination or stabilization endpoint for “Let $p$ be prime and let $a,m\\in\\mathbb N$ satisfy $p\\nmid m$. Then $v_p\\!\\left(\\binom{p^am}{p^a}\\right)=0.$ The valuation is applied only to nonzero integers.” is resolved in step 3.1: “If $a=0$, the binomial coefficient is $\\binom m1=m$, which is nonzero and prime to $p$. No valuation of zero occurs in either case. This proves the stated claim.”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$: the claim “Let $p$ be prime and let $a,m\\in\\mathbb N$ satisfy $p\\nmid m$. Then $v_p\\!\\left(\\binom{p^am}{p^a}\\right)=0.$ The valuation is applied only to nonzero integers.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$: the claim “Let $p$ be prime and let $a,m\\in\\mathbb N$ satisfy $p\\nmid m$. Then $v_p\\!\\left(\\binom{p^am}{p^a}\\right)=0.$ The valuation is applied only to nonzero integers.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$: the claim “Let $p$ be prime and let $a,m\\in\\mathbb N$ satisfy $p\\nmid m$. Then $v_p\\!\\left(\\binom{p^am}{p^a}\\right)=0.$ The valuation is applied only to nonzero integers.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-sylow-second-theorem

```markdown
---
id: thm-sylow-second-theorem
kind: theorem
title: "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-first-theorem, thm-p-group-fixed-point-congruence, def-number-of-sylow-p-subgroups, def-normalizer-of-a-subgroup, thm-lagrange]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L2] If a finite $p$-group $P$ acts on a finite set $X$, then $$|X|\equiv|X^P|\pmod p.$$. ([[thm-p-group-fixed-point-congruence]]).

[L3] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L4] Let $H\le G$ be a subgroup (def-subgroup). The normalizer of $H$ in $G$ is $$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$ Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves $H$ setwise (thm-conjugation-is-an-automorphism). The subgroup property is proved in lem-centralizers-and-normalizers-are-subgroups. ([[def-normalizer-of-a-subgroup]]).

[L5] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 Let a finite $p$-subgroup $H$ act by left multiplication on $G/P$. [L1, L2, L3, L4, L5, given, algebra]

2.1 Its cardinality is prime to $p$, so the fixed-point congruence gives a fixed coset $gP$, and the fixed-coset condition is exactly $H\le gPg^{-1}$. [step 1.1, given, algebra]

3.1 Taking $H$ Sylow, Lagrange's theorem turns containment into equality; applying this to any Sylow $p$-subgroup $Q$ gives $Q=gPg^{-1}$. [step 2.1, given, algebra]

4.1 We treat the trivial $p$-subgroup and primes not dividing $|G|$. This proves the stated claim. [step 3.1, given, algebra] ∎

```

### Recorded proof contract for thm-sylow-second-theorem

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-first-theorem",
   "source_section": "Statement",
   "quote": "Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-p-group-fixed-point-congruence",
   "source_section": "Statement",
   "quote": "If a finite $p$-group $P$ acts on a finite set $X$, then\n\n$$|X|\\equiv|X^P|\\pmod p.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-number-of-sylow-p-subgroups",
   "source_section": "Definition",
   "quote": "For a finite group $G$ and a prime $p$, let $\\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is n",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-normalizer-of-a-subgroup",
   "source_section": "Definition",
   "quote": "Let $H\\le G$ be a subgroup ([[def-subgroup]]). The **normalizer** of $H$ in\n$G$ is\n\n$$N_G(H):=\\{g\\in G:gHg^{-1}=H\\}.$$\n\nThus $g\\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves\n$H$ setwise ([[thm-conjugation-is-an-automorphism]]). The subgroup property is\nproved in [[lem-centralizers-and-normalizers-are-subgroups]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-lagrange",
   "source_section": "Statement",
   "quote": "Let $G$ be a finite group and $H\\le G$. Then\n\n$$|G|=[G:H]\\,|H|.$$\n\nConsequently, under the canonical embedding $\\iota:\\mathbb N\\to\\mathbb Z$,\n$\\iota(|H|)$ divides $\\iota(|G|)$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let a finite $p$-subgroup $H$ act by left multiplication on $G/P$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Its cardinality is prime to $p$, so the fixed-point congruence gives a fixed coset $gP$, and the fixed-coset condition is exactly $H\\le gPg^{-1}$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Taking $H$ Sylow, Lagrange's theorem turns containment into equality; applying this to any Sylow $p$-subgroup $Q$ gives $Q=gPg^{-1}$.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "We treat the trivial $p$-subgroup and primes not dividing $|G|$. This proves the stated claim.",
   "step": "4.1",
   "inputs": [
    "step 3.1",
    "given",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class: the claim “Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class: the zero or trivial specialization for “Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}” is resolved in step 4.1: “We treat the trivial $p$-subgroup and primes not dividing $|G|$. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class: the claim “Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class: the collapsed or coincident-input case admitted by the hypotheses for “Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}” is resolved in step 4.1: “We treat the trivial $p$-subgroup and primes not dividing $|G|$. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class: the claim “Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class: the claim “Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class: the claim “Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class: the claim “Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: lem-nonsingular-square-root-lift-modulo-odd-prime-powers

```markdown
title: "A nonsingular square root lifts uniquely by one odd-prime-power step"

## Statement
Let $p$ be an odd prime, let $k\ge1$, and let $a,x_k\in\mathbb Z$ satisfy $p\nmid a$ and $x_k^2\equiv a\pmod{p^k}$. Then there is a unique class $t\pmod p$ such that $(x_k+tp^k)^2\equiv a\pmod{p^{k+1}}$.

Equivalently, the root class of $x_k$ modulo $p^k$ has exactly one lift to a root class modulo $p^{k+1}$.
```

## DEPENDENCY: cor-number-of-solutions-to-quadratic-congruence-modulo-prime

```markdown
title: '$x^2\equiv a\pmod p$ has exactly $1+(a/p)$ solution classes'

## Statement
For every integer $a$ and odd prime $p$, the congruence

$$x^2\equiv a\pmod p$$

has exactly $1+(a/p)$ solution classes modulo $p$.
```

## DEPENDENCY: def-legendre-symbol

```markdown
title: "The Legendre symbol, including its zero value"

## Definition
Let $p$ be an odd prime and let $a\in\mathbb Z$. The **Legendre symbol** is

$$\left(\frac ap\right):=\begin{cases}0,&p\mid a,\\1,&p\nmid a\text{ and }a\text{ is a quadratic residue modulo }p,\\-1,&p\nmid a\text{ and }a\text{ is a quadratic nonresidue modulo }p.\end{cases}$$

The zero branch is separate from the quadratic residue and nonresidue branches of [[def-quadratic-residue-modulo-n]], which apply only to unit numerators.
```

## DEPENDENCY: def-p-adic-valuation

```markdown
title: "The $p$-adic valuation $v_p(a)$ of a nonzero integer: the greatest $k \\in \\mathbb{N}$ with $p^{k} \\mid a$"

## Definition
Let $p$ be a prime ([[def-prime]]) and let $a \in \mathbb{Z}$ with $a \ne 0$.
Powers $p^{k}$ for $k \in \mathbb{N}$ are the **natural powers of
[[def-group-power]] taken in the commutative monoid $(\mathbb{Z},\cdot,1)$** of
[[lem-units-of-z]] and [[def-semigroup-and-monoid]], so that

$$p^{0} = 1, \qquad p^{\sigma(k)} = p^{k} \cdot p \quad (k \in \mathbb{N}).$$

Put

$$E(p,a) \;:=\; \{\, k \in \mathbb{N} \;:\; p^{k} \mid a \,\}$$

([[def-divides-in-z]]). Then $E(p,a)$ has a greatest element, and the **$p$-adic
valuation** of $a$ is

$$v_p(a) \;:=\; \max E(p,a) \;\in\; \mathbb{N},$$

the greatest $k \in \mathbb{N}$ with $p^{k} \mid a$.

**Why a greatest element exists.** Three facts are needed, and each is proved
here rather than assumed.

*The set is nonempty.* $p^{0} = 1$ and $1 \mid a$ for every $a$
([[def-divides-in-z]]), so $0 \in E(p,a)$.

*Every power of $p$ exceeds its own exponent.* We claim $p^{k} \ge 1$ and
$\iota(k) < p^{k}$ for every $k \in \mathbb{N}$, where
$\iota : \mathbb{N} \to \mathbb{Z}$ is the embedding of [[lem-nat-embeds-int]].
Both are proved by induction ([[thm-induction-principle]]). At $k = 0$ we have
$p^{0} = 1 \ge 1$ and $\iota(0) = 0 < 1 = p^{0}$, using $0 < 1$, which holds
because $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$ by
injectivity of $\iota$. Assume both at $k$. Since $p > 1$ we have $p - 1 > 0$,
hence $p - 1 \ge 1$ by discreteness of the order on $\mathbb{Z}$
([[lem-nat-discrete]], [[lem-nat-embeds-int]]: an integer $x > 0$ is $\iota(j)$
with $j \ne 0$, so $1 = \sigma(0) \le j$ and $1 \le x$). Therefore
$p^{\sigma(k)} - p^{k} = p^{k}(p-1) \ge p^{k} \ge 1$, because $p^{k} \ge 1 > 0$
and positives are closed under multiplication ([[thm-int-ordered-ring]]); so
$p^{\sigma(k)} \ge p^{k} + 1 \ge 1 + 1 > 1$. The same discreteness applied to
$p^{k} - \iota(k) > 0$ gives $\iota(k) + 1 \le p^{k}$, and
$\iota(\sigma(k)) = \iota(k) + 1$ because $\sigma(k) = k + 1$ in $\mathbb{N}$
([[def-nat-addition]]) and $\iota$ preserves addition; so
$\iota(\sigma(k)) \le p^{k} < p^{k} + 1 \le p^{\sigma(k)}$. The induction is
complete.

*The set is bounded.* Let $k \in E(p,a)$. Then $p^{k} \mid a$ with $a \ne 0$, so
$|p^{k}| \le |a|$ ([[lem-divisor-bound]]); and $p^{k} \ge 1 > 0$ gives
$|p^{k}| = p^{k}$ ([[def-int-abs]], [[lem-int-abs-properties]]). Combining with
the previous paragraph, $\iota(k) < p^{k} \le |a|$. So the set of integers
$\iota[E(p,a)] = \{\, \iota(k) : k \in E(p,a) \,\}$ is nonempty and bounded above
by $|a|$, hence has a unique greatest element
([[lem-int-bounded-above-has-greatest]]). That greatest element lies in the set,
so it is $\iota(k_0)$ for some $k_0 \in E(p,a)$; and since $\iota$ is injective
and preserves the order in both directions, $k_0$ is the greatest element of
$E(p,a)$ and is unique. We set $v_p(a) := k_0$.

**$v_p(0)$ is left undefined.** Every power of $p$ divides $0$
([[def-divides-in-z]]), so $E(p,0) = \mathbb{N}$ has no greatest element and the
clause above defines nothing. Every statement about $v_p$ in this library
therefore carries the hypothesis $a \ne 0$ explicitly. The convention
$v_p(0) := \infty$ is *not* adopted: it would need a value set enlarging
$\mathbb{N}$ by a greatest element in which to place $\infty$, and no such set is
available at this point in the reading order. The library does build a totally
ordered set with a greatest element — the extended real line, whose greatest
element is $+\infty$ — but it is constructed far above this page, and taking the
values of $v_p$ there would make a definition about $\mathbb{Z}$ rest on the
construction of $\mathbb{R}$.
```

## DEPENDENCY: lem-p-adic-valuation-additive

```markdown
title: "$v_p(ab) = v_p(a) + v_p(b)$ for nonzero integers $a, b$, and $v_p(a+b) \\ge \\min\\{v_p(a), v_p(b)\\}$ whenever $a$, $b$ and $a+b$ are all nonzero"

## Statement
Let $p$ be a prime ([[def-prime]]) and let $a, b \in \mathbb{Z}$ be nonzero,
with $v_p$ as in [[def-p-adic-valuation]]. Then $ab \ne 0$ and

$$v_p(ab) \;=\; v_p(a) + v_p(b),$$

the sum taken in $\mathbb{N}$ ([[def-nat-addition]]). If moreover $a + b \ne 0$,
then

$$v_p(a+b) \;\ge\; \min\{\, v_p(a),\, v_p(b) \,\},$$

the minimum of two natural numbers, which exists because the order on
$\mathbb{N}$ is total ([[thm-nat-linear-order]]).
```

## DEPENDENCY: def-binomial-coefficient

```markdown
title: "The set $[A]^{k}$ of $k$-element subsets and the binomial coefficient $\\binom{n}{k} := \\lvert [n]^{k}\\rvert$"

## Definition
For a finite set $A$ and $k \in \mathbb{N}$ put

$$[A]^{k} := \{\, S \subseteq A \ :\ \lvert S\rvert = k \,\},$$

the set of $k$-element subsets of $A$. Every $S \subseteq A$ is finite
([[thm-subset-of-a-finite-set]]), so the condition $\lvert S\rvert = k$ makes
sense for every subset.

**$[A]^{k}$ is finite.** It is a subset of $\mathcal{P}(A)$, which is finite by
[[cor-cardinality-of-the-power-set]], so [[thm-subset-of-a-finite-set]] applies.

**$\lvert [A]^{k}\rvert$ depends only on $\lvert A\rvert$.** Let $h : A \to A'$ be
a bijection of finite sets. The direct image map $S \mapsto h[S]$ carries
$[A]^{k}$ into $[A']^{k}$, because $h$ restricted to $S$ is a bijection of $S$
onto $h[S]$ and so $\lvert h[S]\rvert = \lvert S\rvert = k$ by the transport
clause of [[def-finite-cardinality]]; the map $T \mapsto h^{-1}[T]$ is its
two-sided inverse, since $h^{-1}[h[S]] = S$ and $h[h^{-1}[T]] = T$ for a
bijection $h$. So $[A]^{k} \approx [A']^{k}$ and the two have the same
cardinality.

**Definition.** For $n, k \in \mathbb{N}$ set

$$\binom{n}{k} := \big\lvert\, [n]^{k} \,\big\rvert \in \mathbb{N},$$

the **binomial coefficient**. By the previous paragraph and $\lvert n\rvert = n$,

$$\big\lvert [A]^{k}\big\rvert = \binom{\lvert A\rvert}{k} \qquad \text{for every finite } A .$$

**$\binom{n}{k}$ is a count, so it is a natural number by construction.** It is
*not* defined as $n!/(k!\,(n-k)!)$: that expression involves a division, hence
lives in $\mathbb{R}$, and the assertion that its value is a natural number is a
theorem, proved in [[thm-binomial-closed-formula]]. Defining the coefficient as a
count makes integrality free and leaves the closed formula something to prove.

**Boundary values, read off the definition and not stipulated.**

- $\binom{n}{0} = 1$ **for every $n$, including $n = 0$**: the subsets of $n$ of
  cardinality $0$ are exactly the subsets equal to $\varnothing$
  ([[def-finite-cardinality]], clause (b)), so $[n]^{0} = \{\varnothing\}$, a
  one-element set. No empty-product convention is involved.
- $\binom{n}{n} = 1$: if $S \subseteq n$ has $\lvert S\rvert = n = \lvert n\rvert$
  then $S = n$ by clause 3 of [[thm-subset-of-a-finite-set]], so
  $[n]^{n} = \{n\}$.
- $\binom{n}{k} = 0$ for $k > n$: a subset $S \subseteq n$ has
  $\lvert S\rvert \le n$ by clause 2 of [[thm-subset-of-a-finite-set]], so
  $\lvert S\rvert = k > n$ is impossible and $[n]^{k} = \varnothing$
  ([[lem-nat-trichotomy]]).
- $\binom{n}{1} = n$: a subset of cardinality $1$ is $\{x\}$ for exactly one
  $x \in n$, since $\lvert S\rvert = 1$ means $S \approx \{0\}$; so
  $S \mapsto$ its unique element is a bijection $[n]^{1} \to n$.
- $\binom{0}{0} = 1$ and $\binom{0}{k} = 0$ for $k \ge 1$, both instances of the
  above.
```

## DEPENDENCY: thm-binomial-closed-formula

```markdown
title: "$\\binom{n}{k}\\,k!\\,(n-k)! = n!$ for $k \\le n$; hence $\\binom{n}{k}\\,k! = n^{\\underline{k}}$, the quotient $n!/(k!(n-k)!)$ is a natural number, and $\\binom{n}{k} = \\binom{n}{n-k}$"

## Statement
Let $n, k \in \mathbb{N}$ with $k \le n$. Then, in $\mathbb{N}$,

$$\binom{n}{k}\cdot k!\cdot (n-k)! = n! ,$$

and consequently:

1. $\binom{n}{k}\cdot k! = n^{\underline{k}}$
   ([[def-factorial-and-falling-factorial]]);
2. **integrality**: in $\mathbb{R}$,
   $\iota\binom{n}{k} = \dfrac{\iota(n!)}{\iota(k!)\,\iota((n-k)!)}$, so the
   familiar quotient $n!/(k!\,(n-k)!)$ is the canonical natural of a natural
   number, namely of the count $\binom{n}{k}$;
3. **symmetry**: $\binom{n}{k} = \binom{n}{n-k}$.

Here $\iota$ is the canonical natural of [[def-canonical-natural]] and $n-k$ the
truncated difference, which for $k \le n$ is the ordinary one.
```

## DEPENDENCY: def-factorial-and-falling-factorial

```markdown
title: "The factorial $n!$ and the falling factorial $n^{\\underline{k}}$, defined by recursion in $\\mathbb{N}$"

## Definition
**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the
set $\mathbb{N}\times\mathbb{N}$, the starting element $(0,1)$ and the function
$f(k, v) = (\sigma(k),\, v \cdot \sigma(k))$, and by the same induction on the
first coordinate as in [[def-nat-finite-sum-and-product]], there is a unique
$F : \mathbb{N} \to \mathbb{N}$ with

$$F(0) = 1, \qquad F(\sigma(n)) = F(n)\cdot\sigma(n) \quad (n \in \mathbb{N}).$$

We write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\cdot 1 = 1$, $2! = 1!\cdot 2 = 2$,
$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.

**$0! = 1$ is the base clause of this recursion**, not a convention imported from
elsewhere. Nothing about empty products is presupposed; the agreement with the
empty product is proved below, in clause (a), rather than assumed.

**Truncated difference.** Throughout, $n - k$ is the operation fixed in
[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when
$k \le n$, and $0$ when $n < k$.

**The falling factorial.** For $n \in \mathbb{N}$ define $n^{\underline{k}}$ by
recursion on $k$, by the recursion theorem applied to
$\mathbb{N}\times\mathbb{N}$ with starting element $(0,1)$ and
$f(k, v) = (\sigma(k),\, v \cdot (n-k))$:

$$n^{\underline{0}} = 1, \qquad n^{\underline{\sigma(k)}} = n^{\underline{k}}\cdot(n-k) .$$

So $n^{\underline{1}} = 1\cdot(n-0) = n$ and $n^{\underline{2}} = n\,(n-1)$, and
for $k \le n$ the value is the product $n(n-1)\cdots(n-k+1)$ of the $k$ topmost
factors.

**Four facts, proved here because the page uses each of them.**

**(a) The factorial is the product of the first $n$ positive naturals.**
$n! = \prod_{j<n}\sigma(j) = \prod_{j<n}(j+1)$, the $\mathbb{N}$-valued product of
[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at
$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and
$\prod_{j<\sigma(n)}\sigma(j) = \big(\prod_{j<n}\sigma(j)\big)\cdot\sigma(n) = n!\cdot\sigma(n) = \sigma(n)!$.
**So the empty-product reading and the base-clause reading are the same reading**,
and neither was assumed.

**(b) $n! \ne 0$, and $\iota(n!) = \prod^{\mathbb{R}}_{j<n}\iota(j+1)$.** For the
first, $0! = 1 \ne 0$ ([[thm-omega-is-peano-system]]) and
$\sigma(n)! = n!\cdot\sigma(n)$ is a product of two nonzero naturals, which is
nonzero: if $xy = 0$ with $y \ne 0$ then $xy = 0\cdot y$
([[lem-nat-mult-identity]]) and cancellation gives $x = 0$
([[lem-nat-mult-cancellative]]). So $n! \ne 0$ for every $n$ by induction. For the second, apply the bridge clause
6 of that lemma to clause (a) above. This is what makes the factorial of this
page and the real-valued product $\prod_{j<n}(j+1)$ used elsewhere in the library
**one object seen twice**, rather than two unrelated notions.

**(c) $n^{\underline{k}}\cdot(n-k)! = n!$ for $k \le n$.** Induction on $k$, for
all $n$ at once. At $k = 0$ this reads $1 \cdot n! = n!$. Assume it at $k$ and
let $\sigma(k) \le n$; then $k \le n$, and writing $d := n - k$ we have
$k + d = n$ and $d \ne 0$, since $k + 0 = k \ne n$; so $d = \sigma(e)$ for a
unique $e$ ([[lem-nat-nonzero-is-successor]]), and $\sigma(k) + e = n$, that is
$e = n - \sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore
$n^{\underline{\sigma(k)}}\cdot\big(n-\sigma(k)\big)! = n^{\underline{k}}\cdot(n-k)\cdot e! = n^{\underline{k}}\cdot\big(e!\cdot\sigma(e)\big) = n^{\underline{k}}\cdot\sigma(e)! = n^{\underline{k}}\cdot(n-k)! = n!$,
using commutativity and associativity of multiplication
([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion
clause for the factorial.

**(d) Boundary values.** $n^{\underline{0}} = 1$ for every $n$, by the base
clause; $n^{\underline{n}} = n!$, since clause (c) at $k = n$ gives
$n^{\underline{n}}\cdot 0! = n!$ and $0! = 1$; and
$n^{\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives
$n^{\underline{\sigma(n)}} = n^{\underline{n}}\cdot 0 = 0$, the clause
$x \cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if
$n^{\underline{k}} = 0$ then
$n^{\underline{\sigma(k)}} = 0$ as well, so $n^{\underline{k}} = 0$ for every
$k \ge \sigma(n)$ by induction.
```

## DEPENDENCY: thm-sylow-first-theorem

```markdown
title: "Sylow I: every finite group has a Sylow $p$-subgroup"

## Statement
Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].
```

## DEPENDENCY: thm-p-group-fixed-point-congruence

```markdown
title: 'If a finite $p$-group $P$ acts on a finite set $X$, then $|X|\equiv|X^P|\pmod p$'

## Statement
If a finite $p$-group $P$ acts on a finite set $X$, then

$$|X|\equiv|X^P|\pmod p.$$
```

## DEPENDENCY: def-number-of-sylow-p-subgroups

```markdown
title: "The number $n_p(G)$ of Sylow $p$-subgroups"

## Definition
For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is nonzero.
```

## DEPENDENCY: def-normalizer-of-a-subgroup

```markdown
title: 'The normalizer $N_G(H)=\{g\in G:gHg^{-1}=H\}$ of a subgroup'

## Definition
Let $H\le G$ be a subgroup ([[def-subgroup]]). The **normalizer** of $H$ in
$G$ is

$$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$

Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves
$H$ setwise ([[thm-conjugation-is-an-automorphism]]). The subgroup property is
proved in [[lem-centralizers-and-normalizers-are-subgroups]].
```

## DEPENDENCY: thm-lagrange

```markdown
title: "Lagrange's theorem: $|G|=[G:H]|H|$ for every subgroup $H$ of a finite group $G$"

## Statement
Let $G$ be a finite group and $H\le G$. Then

$$|G|=[G:H]\,|H|.$$

Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$,
$\iota(|H|)$ divides $\iota(|G|)$.
```
