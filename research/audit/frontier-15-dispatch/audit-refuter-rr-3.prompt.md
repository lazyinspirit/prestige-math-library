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
label: rr-3

run: frontier-15
role: refuter
label: rr-3
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

## ITEM: thm-sylow-third-theorem

```markdown
---
id: thm-sylow-third-theorem
kind: theorem
title: "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, thm-sylow-number-as-normalizer-index, thm-p-group-fixed-point-congruence, def-number-of-sylow-p-subgroups, lem-product-with-normal-subgroup]
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

Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$ See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$. ([[thm-sylow-number-as-normalizer-index]]).

[L3] If a finite $p$-group $P$ acts on a finite set $X$, then $$|X|\equiv|X^P|\pmod p.$$. ([[thm-p-group-fixed-point-congruence]]).

[L4] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L5] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Let a Sylow subgroup $P$ act by conjugation on the Sylow set. [L1, L2, L3, L4, L5, given, algebra]

2.1 If $P$ fixes $Q$, then $P,Q\le N_G(Q)$, and Sylow II inside that normalizer forces $P=Q$; hence there is exactly one fixed point and the congruence follows. [step 1.1, given, algebra]

3.1 The normalizer-index formula and $P\le N_G(P)$ give $n_p\mid m$. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for thm-sylow-third-theorem

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-second-theorem",
   "source_section": "Statement",
   "quote": "Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-sylow-number-as-normalizer-index",
   "source_section": "Statement",
   "quote": "If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-p-group-fixed-point-congruence",
   "source_section": "Statement",
   "quote": "If a finite $p$-group $P$ acts on a finite set $X$, then\n\n$$|X|\\equiv|X^P|\\pmod p.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-number-of-sylow-p-subgroups",
   "source_section": "Definition",
   "quote": "For a finite group $G$ and a prime $p$, let $\\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is n",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "lem-product-with-normal-subgroup",
   "source_section": "Statement",
   "quote": "If $H\\le G$ and $N\\mathrel{\\trianglelefteq}G$, then $HN$ is a subgroup and $H\\cap N\\mathrel{\\trianglelefteq}H$.\n\nHere $HN:=\\{hn:h\\in H,\\ n\\in N\\}$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let a Sylow subgroup $P$ act by conjugation on the Sylow set.",
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
   "claim": "If $P$ fixes $Q$, then $P,Q\\le N_G(Q)$, and Sylow II inside that normalizer forces $P=Q$; hence there is exactly one fixed point and the congruence follows.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The normalizer-index formula and $P\\le N_G(P)$ give $n_p\\mid m$. This proves the stated claim.",
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
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$: the claim “Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal

```markdown
---
id: cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal
kind: corollary
title: "A normal Sylow subgroup of a normal subgroup is normal in the whole group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-sylow-subgroup-normal-iff-unique, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]
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

If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. See [[cor-sylow-subgroup-normal-iff-unique]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L2] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$. ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

## Proof

**Proof technique:** direct.

1.1 A unique Sylow subgroup is preserved by every automorphism of its ambient normal subgroup, so it is characteristic there; characteristic-in-normal gives normality in the whole group. [L1, L2, given, algebra]

2.1 The preceding argument gives the conclusion under every hypothesis of the Statement. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "lem-characteristic-subgroup-of-a-normal-subgroup-is-normal",
   "source_section": "Statement",
   "quote": "If $K$ is characteristic in $N$ and $N\\trianglelefteq G$, then $K\\trianglelefteq G$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "A unique Sylow subgroup is preserved by every automorphism of its ambient normal subgroup, so it is characteristic there; characteristic-in-normal gives normality in the whole group.",
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
   "claim": "The preceding argument gives the conclusion under every hypothesis of the Statement. This proves the stated claim.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
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
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "A normal Sylow subgroup of a normal subgroup is normal in the whole group: the claim “If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "The Statement is one-way. The only biconditional in the item is [L1], whose forward implication—normal Sylow implies unique Sylow—is exactly what step 1.1 uses before characteristicity."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "The Statement asserts no reverse implication. The reverse half of the iff quoted in [L1] is not used; step 1.1 only needs normality to imply uniqueness."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-distinct-normal-sylow-subgroups-commute

```markdown
---
id: lem-distinct-normal-sylow-subgroups-commute
kind: lemma
title: "Distinct normal Sylow subgroups centralize one another"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sylow-p-subgroup, def-subgroup-commutator-and-lower-central-series, def-normal-subgroup, thm-lagrange]
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

Normal Sylow subgroups for distinct primes centralize one another. See [[def-sylow-p-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a Sylow $p$-subgroup when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in thm-sylow-first-theorem. ([[def-sylow-p-subgroup]]).

[L2] For subgroups $A,B\le G$, their subgroup commutator is $$[A,B]=\langle [a,b]:a\in A,\ b\in B\rangle,$$ where $[a,b]=aba^{-1}b^{-1}$ (def-commutator-and-commutator-subgroup, def-generated-subgroup). The lower central series is $$\gamma_1(G)=G,\qquad \gamma_{r+1}(G)=[G,\gamma_r(G)]\quad(r\ge1).$$ Each $\gamma_r(G)$ is characteristic in $G$, and the series descends because $[G,N]\le N$ whenever $N\trianglelefteq G$. ([[def-subgroup-commutator-and-lower-central-series]]).

[L3] Let $G$ be a group and let $N\le G$ be a subgroup (def-subgroup). For $g\in G$, write $$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$ The subgroup $N$ is normal in $G$ when $$gNg^{-1}=N\qquad\text{for every }g\in G.$$ In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner conjugation of $G$ maps $N$ onto itself. The connection with equality of the left and right cosets of def-coset is proved in thm-normal-subgroup-characterisations. ([[def-normal-subgroup]]).

[L4] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 For normal Sylow $p$- and $q$-subgroups with $p\ne q$, every commutator lies in their intersection. [L1, L2, L3, L4, given, algebra]

2.1 Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for lem-distinct-normal-sylow-subgroups-commute

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-sylow-p-subgroup",
   "source_section": "Definition",
   "quote": "Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\\in\\mathbb N$ and $p\\nmid m$. A subgroup $P\\le G$ is a **Sylow $p$-subgroup** when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in [[thm-sylow-first-",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-subgroup-commutator-and-lower-central-series",
   "source_section": "Definition",
   "quote": "For subgroups $A,B\\le G$, their **subgroup commutator** is\n$$[A,B]=\\langle [a,b]:a\\in A,\\ b\\in B\\rangle,$$\nwhere $[a,b]=aba^{-1}b^{-1}$ ([[def-commutator-and-commutator-subgroup]], [[def-generated-subgroup]]).\n\nThe **lower central series** is\n$$\\gamma_1(G)=G,\\qquad \\gamma_{r+1}(G)=[G,\\gamma_r(G)]\\quad(r\\ge1).$$\nEach $\\gamma_r(G)$ is characteristic in $G$, an",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-normal-subgroup",
   "source_section": "Definition",
   "quote": "Let $G$ be a group and let $N\\le G$ be a subgroup ([[def-subgroup]]). For\n$g\\in G$, write\n\n$$gNg^{-1}:=\\{gng^{-1}:n\\in N\\}.$$\n\nThe subgroup $N$ is **normal in $G$** when\n\n$$gNg^{-1}=N\\qquad\\text{for every }g\\in G.$$\n\nIn that case write $N\\mathrel{\\trianglelefteq}G$. Equivalently, every inner\nconjugation of $G$ maps $N$ onto itself. The connection with equali",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
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
   "claim": "For normal Sylow $p$- and $q$-subgroups with $p\\ne q$, every commutator lies in their intersection.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
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
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Distinct normal Sylow subgroups centralize one another: the zero or trivial specialization for “Normal Sylow subgroups for distinct primes centralize one another.” is resolved in step 2.1: “Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Distinct normal Sylow subgroups centralize one another: the collapsed or coincident-input case admitted by the hypotheses for “Normal Sylow subgroups for distinct primes centralize one another.” is resolved in step 2.1: “Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Distinct normal Sylow subgroups centralize one another: the claim “Normal Sylow subgroups for distinct primes centralize one another.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup

```markdown
---
id: thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup
kind: theorem
title: "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fitting-subgroup-of-a-finite-group, def-p-core-of-a-finite-group, lem-finite-nilpotence-via-normal-sylow-subgroups, thm-internal-direct-product-recognition, thm-sylow-second-theorem, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal, thm-lagrange]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. See [[def-fitting-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the Fitting subgroup is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores (def-p-core-of-a-finite-group). The factors are normal, so their finite product is a normal subgroup and does not depend on the order of multiplication. For the trivial group the product is empty and equals $1$. ([[def-fitting-subgroup-of-a-finite-group]]).

[L2] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. ([[lem-finite-nilpotence-via-normal-sylow-subgroups]]).

[L3] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. They form an internal direct product of $G$ if and only if every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$, equivalently the multiplication map $\prod_{i<r}N_i\to G$ is an isomorphism. ([[thm-internal-direct-product-recognition]]).

[L4] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$. ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

[L5] The $p$-core $O_p(G)$ is the unique largest normal $p$-subgroup of the finite group $G$. ([[def-p-core-of-a-finite-group]]).

[L6] Every $p$-subgroup of a finite group is contained in a Sylow $p$-subgroup, and all Sylow $p$-subgroups are conjugate. ([[thm-sylow-second-theorem]]).

[L7] The order of a subgroup of a finite group divides the order of the group. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 For distinct primes $p$ and $q$, normality puts every commutator of an element of $O_p(G)$ with an element of $O_q(G)$ in $O_p(G)\cap O_q(G)$. By [L7], the order of this intersection divides powers of both $p$ and $q$, so the intersection is trivial and the two $p$-cores centralize one another. If a product $\prod_p x_p$ with $x_p\in O_p(G)$ equals $1$, then for each $p$ the element $x_p$ lies both in the $p$-group $O_p(G)$ and in the commuting product of the other prime-power groups; its order divides two coprime numbers and is therefore $1$. Thus product expressions are unique, so [L3] identifies $F(G)$ with the internal direct product of the $p$-cores. The direct-product order shows that $O_p(G)$ is the Sylow $p$-subgroup of $F(G)$; [L2] makes $F(G)$ nilpotent, and [L1] gives its normality in $G$. [L1, L2, L3, L5, L7, given, algebra]

2.1 If $N\trianglelefteq G$ is nilpotent, [L2] makes each Sylow subgroup normal in $N$, and conjugacy [L6] makes it unique. Automorphisms preserve orders, so this unique Sylow subgroup is characteristic in $N$; [L4] makes it normal in $G$, and the maximality clause [L5] puts it in the corresponding $p$-core. [L2, L4, L5, L6, step 1.1, given, algebra]

3.1 By [L2], $N$ is the product of its Sylow subgroups, and step 2.1 puts every factor in the corresponding $p$-core. Hence $N\le F(G)$. [L1, L2, step 2.1, given]

4.1 For $G=1$ the family of $p$-cores is empty and $F(G)=1$, which is nilpotent and contains every normal nilpotent subgroup. This proves the stated claim. [L1, step 1.1, step 3.1, given, algebra] ∎

```

### Recorded proof contract for thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-fitting-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Fitting subgroup** is $$F(G):=\\prod_{p\\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.",
   "uses": [
    "1.1",
    "3.1",
    "4.1"
   ]
  },
  {
   "fact": "L2",
   "source": "lem-finite-nilpotence-via-normal-sylow-subgroups",
   "source_section": "Statement",
   "quote": "For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. See [[thm-normalizer-condition-for-finite-nilpotent-groups]].",
   "uses": [
    "1.1",
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-internal-direct-product-recognition",
   "source_section": "Statement",
   "quote": "Let $N_0,\\ldots,N_{r-1}\\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\\in G$ has a unique expression $g=n_0\\cdots n_{r-1}$ with $n_i\\in N_i$; and the multiplication map $\\mu:\\prod_{i<r}N_i\\to G$ is an isomorphism. These statements include the empty family and the one-factor case.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-characteristic-subgroup-of-a-normal-subgroup-is-normal",
   "source_section": "Statement",
   "quote": "If $K$ is characteristic in $N$ and $N\\trianglelefteq G$, then $K\\trianglelefteq G$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-p-core-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$ and a prime $p$, the **$p$-core** $O_p(G)$ is the subgroup generated by all normal $p$-subgroups of $G$. There are finitely many such subgroups. If $A$ and $B$ are two of them, then $AB$ is a subgroup by [[lem-product-with-normal-subgroup]] and is normal because $gABg^{-1}=AB$ for every $g\\in G$. For a fixed $ab\\in AB$, the fibres of the multiplication map $A\\times B\\to AB$ are exactly the pairs $(ax,x^{-1}b)$ with $x\\in A\\cap B$, so\n$$\n|AB|=\\frac{|A||B|}{|A\\cap B|}.\n$$\nLagrange's theorem [[thm-lagrange]] makes $|A\\cap B|$ a power of $p$, and therefore $AB$ is again a normal $p$-subgroup. Induction shows that the product of all normal $p$-subgroups is a normal $p$-subgroup. It contains every such subgroup, so it is the unique largest normal $p$-subgroup; this product is $O_p(G)$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-sylow-second-theorem",
   "source_section": "Statement",
   "quote": "Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L7",
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
   "claim": "For distinct primes $p$ and $q$, normality puts every commutator of an element of $O_p(G)$ with an element of $O_q(G)$ in $O_p(G)\\cap O_q(G)$. By [L7], the order of this intersection divides powers of both $p$ and $q$, so the intersection is trivial and the two $p$-cores centralize one another. If a product $\\prod_p x_p$ with $x_p\\in O_p(G)$ equals $1$, then for each $p$ the element $x_p$ lies both in the $p$-group $O_p(G)$ and in the commuting product of the other prime-power groups; its order divides two coprime numbers and is therefore $1$. Thus product expressions are unique, so [L3] identifies $F(G)$ with the internal direct product of the $p$-cores. The direct-product order shows that $O_p(G)$ is the Sylow $p$-subgroup of $F(G)$; [L2] makes $F(G)$ nilpotent, and [L1] gives its normality in $G$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L5",
    "L7",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $N\\trianglelefteq G$ is nilpotent, [L2] makes each Sylow subgroup normal in $N$, and conjugacy [L6] makes it unique. Automorphisms preserve orders, so this unique Sylow subgroup is characteristic in $N$; [L4] makes it normal in $G$, and the maximality clause [L5] puts it in the corresponding $p$-core.",
   "step": "2.1",
   "inputs": [
    "L2",
    "L4",
    "L5",
    "L6",
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "By [L2], $N$ is the product of its Sylow subgroups, and step 2.1 puts every factor in the corresponding $p$-core. Hence $N\\le F(G)$.",
   "step": "3.1",
   "inputs": [
    "L1",
    "L2",
    "step 2.1",
    "given"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "For $G=1$ the family of $p$-cores is empty and $F(G)=1$, which is nilpotent and contains every normal nilpotent subgroup. This proves the stated claim.",
   "step": "4.1",
   "inputs": [
    "L1",
    "step 1.1",
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
   "status": "checked",
   "evidence": "Step 4.1 checks $G=1$: the family of $p$-cores is empty, $F(G)=1$, and the nilpotence and maximality clauses hold."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 4.1 explicitly treats the one-element group and its empty product of $p$-cores."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Step 4.1 checks the collapsed trivial-group case, where the only normal nilpotent subgroup is $1=F(G)$."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-frattini-subgroup-nongenerator-characterization

```markdown
---
id: lem-frattini-subgroup-nongenerator-characterization
kind: lemma
title: "The Frattini subgroup consists exactly of the nongenerators of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-frattini-subgroup-of-a-finite-group, def-generated-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

For a finite group $G$, an element $x$ lies in $\Phi(G)$ if and only if, for every subset $S\subseteq G$, $\langle S,x\rangle=G$ implies $\langle S\rangle=G$. See [[def-frattini-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L2] For a subset $S$ of a group $G$, the generated subgroup is $$\langle S\rangle:=\bigcap\{H:H\le G\text{ and }S\subseteq H\},$$ the smallest subgroup of $G$ containing $S$. ([[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 If $x\notin\Phi(G)$, a maximal subgroup omitting $x$ shows that adjoining $x$ can enlarge a generating set. [L1, L2, given, algebra]

2.1 Conversely, if $\langle S,x\rangle=G$ while $\langle S\rangle\ne G$, extend the latter finite subgroup to a maximal subgroup; it contains $S$ but cannot contain $x$. [step 1.1, given, algebra]

3.1 We treat the trivial group, whose empty intersection convention gives $\Phi(1)=1$. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for lem-frattini-subgroup-nongenerator-characterization

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-frattini-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Frattini subgroup** is $$\\Phi(G):=\\bigcap\\{M\\le G:M\\text{ is maximal proper}\\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\\Phi(1)=1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-generated-subgroup",
   "source_section": "Definition",
   "quote": "Let $G$ be a group ([[def-group]]) and $S \\subseteq G$ a subset. The set of\nsubgroups of $G$ containing $S$ is nonempty, since $G$ itself is such a subgroup,\nso its intersection is a subgroup of $G$ by [[lem-intersection-of-subgroups]].\nThat intersection is the **subgroup generated by $S$**,\n\n$$\\langle S \\rangle \\;:=\\; \\bigcap \\{\\, H \\;:\\; H \\le G \\text{ and } S \\subseteq H \\,\\} .$$\n\nIt contains $S$, being an intersection of sets each containing $S$, and it is\ncontained in every subgroup of $G$ that contains $S$; so it is the **smallest**\nsubgroup of $G$ containing $S$, and these two properties determine it uniquely.\nThe elements of $S$ are called **generators**.\n\nFor a single element $g \\in G$ we write $\\langle g \\rangle := \\langle \\{g\\}\\rangle$\nand call it the **cyclic subgroup generated by $g$**. A group $G$ is **cyclic**\nwhen $G = \\langle g \\rangle$ for some $g \\in G$.\n\nBy convention $\\langle \\varnothing \\rangle = \\{e\\}$: the trivial subgroup is the\nsmallest subgroup containing the empty set, and this is a consequence of the\ndefinition, not a stipulation, since every subgroup contains $e$\n([[def-subgroup]]).",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If $x\\notin\\Phi(G)$, a maximal subgroup omitting $x$ shows that adjoining $x$ can enlarge a generating set.",
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
   "claim": "Conversely, if $\\langle S,x\\rangle=G$ while $\\langle S\\rangle\\ne G$, extend the latter finite subgroup to a maximal subgroup; it contains $S$ but cannot contain $x$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.",
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
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the empty-object specialization for “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is resolved in step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the zero or trivial specialization for “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is resolved in step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the claim “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the collapsed or coincident-input case admitted by the hypotheses for “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is resolved in step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the claim “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the nonemptiness condition for the subgroup, chain, or Zorn selection for “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is resolved in step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the forward implication of “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is established beginning at step 1.1; its first derived assertion is “If $x\\notin\\Phi(G)$, a maximal subgroup omitting $x$ shows that adjoining $x$ can enlarge a generating set.”."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the reverse implication of “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is completed by step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-p-adic-valuation

```markdown
---
id: def-p-adic-valuation
kind: definition
title: "The $p$-adic valuation $v_p(a)$ of a nonzero integer: the greatest $k \\in \\mathbb{N}$ with $p^{k} \\mid a$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-prime, def-group-power, def-semigroup-and-monoid, lem-units-of-z,
       def-divides-in-z, lem-divisibility-basic, lem-divisor-bound,
       lem-int-bounded-above-has-greatest, thm-induction-principle, def-int-abs,
       lem-int-abs-properties, def-integers, def-int-operations, def-int-order,
       thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers, def-nat-order,
       lem-nat-embeds-int, lem-nat-discrete, def-nat-addition]
justified_by: []
aliases: [def-p-adic-valuation-on-z]
landmark: true
short: "$v_p(a)$, the exponent of $p$ in $a$"
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
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
    - title: "University of Chicago REU notes: p-adic numbers"
      url: "https://www.math.uchicago.edu/~may/VIGRE/VIGRE2011/REUPapers/Herwig.pdf"
pipeline_run: null
---

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

## Remarks

- **$v_p(a)$ is a natural number, not an integer.** It is a von Neumann natural
  ([[def-natural-numbers]]), which is exactly what the exponent slot of
  [[def-group-power]] takes, so $p^{v_p(a)}$ is meaningful without any
  translation. Where a valuation has to be subtracted from another, as in
  [[lem-p-adic-valuation-on-q]], the values are first carried into $\mathbb{Z}$
  along $\iota$ ([[lem-nat-embeds-int]]).

- **These are monoid powers, and deliberately not [[def-integer-power]].** That
  definition is stated for an element of the ambient ordered field $\mathbb{R}$;
  using it here would make a statement about $\mathbb{Z}$ rest on the whole
  construction of the real numbers for no gain. The two agree along the
  embeddings $\mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$, since both are defined
  by the same recursion $x^{0} = 1$, $x^{\sigma(k)} = x^{k} x$ and the
  embeddings preserve products and the constant $1$; nothing on this page
  depends on that observation, and it is recorded here only so the reader does
  not think a second notion of power has been introduced.

- **The definition is by a maximum, and [[lem-p-adic-valuation-basic]] converts
  it into the form later proofs use**: $p^{v_p(a)} \mid a$, $p^{v_p(a)+1} \nmid a$,
  and $a = p^{v_p(a)} a'$ with $p \nmid a'$.

```

## DEPENDENCY: lem-p-adic-valuation-additive

```markdown
---
id: lem-p-adic-valuation-additive
kind: lemma
title: "$v_p(ab) = v_p(a) + v_p(b)$ for nonzero integers $a, b$, and $v_p(a+b) \\ge \\min\\{v_p(a), v_p(b)\\}$ whenever $a$, $b$ and $a+b$ are all nonzero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-adic-valuation, lem-p-adic-valuation-basic, thm-euclids-lemma, def-prime, def-group-power, lem-group-power-laws, def-semigroup-and-monoid, lem-units-of-z, def-divides-in-z, lem-divisibility-basic, thm-nat-linear-order, lem-nat-order-is-membership, lem-nat-discrete, def-nat-order, def-nat-addition, def-natural-numbers, lem-int-cancellation, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int]
justified_by: []
forward_refs: [ex-prime-factorisation-worked]
aliases: []
landmark: false
short: "$v_p(ab) = v_p(a) + v_p(b)$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
    - title: "Valuation (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Valuation_(algebra)"
    - title: "University of Chicago REU notes: p-adic numbers"
      url: "https://www.math.uchicago.edu/~may/VIGRE/VIGRE2011/REUPapers/Herwig.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]) and let $a, b \in \mathbb{Z}$ be nonzero,
with $v_p$ as in [[def-p-adic-valuation]]. Then $ab \ne 0$ and

$$v_p(ab) \;=\; v_p(a) + v_p(b),$$

the sum taken in $\mathbb{N}$ ([[def-nat-addition]]). If moreover $a + b \ne 0$,
then

$$v_p(a+b) \;\ge\; \min\{\, v_p(a),\, v_p(b) \,\},$$

the minimum of two natural numbers, which exists because the order on
$\mathbb{N}$ is total ([[thm-nat-linear-order]]).

## Facts & Assumptions

**Given:** A prime $p$ and nonzero integers $a, b$; $\alpha := v_p(a)$ and $\beta := v_p(b)$.

[L1] For a nonzero $u$: $p^{v_p(u)} \mid u$, and $u = p^{v_p(u)} u'$ for some nonzero $u'$ with $p \nmid u'$; moreover $p^{k} \mid u$ holds exactly for $k \le v_p(u)$ ([[lem-p-adic-valuation-basic]], [[def-p-adic-valuation]]).

[L2] Exponent law in a monoid for natural exponents: $g^{m+n} = g^{m} g^{n}$ ([[lem-group-power-laws]], [[def-group-power]], [[def-semigroup-and-monoid]], [[lem-units-of-z]]).

[L3] If $p$ is prime and $p \mid uv$ then $p \mid u$ or $p \mid v$ ([[thm-euclids-lemma]]).

[L4] Divisibility is linear: $d \mid u$ and $d \mid v$ give $d \mid ux + vy$, in particular $d \mid u + v$ ([[lem-divisibility-basic]]); $d \mid u$ means $u = dc$ for some $c$ ([[def-divides-in-z]]).

[L5] A product of two nonzero integers is nonzero, and $xz = yz$ with $z \ne 0$ gives $x = y$ ([[lem-int-cancellation]]).

[L6] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative and $x \cdot 1 = x$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]); its order is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

[L7] On $\mathbb{N}$: $\le$ is a linear order, so any two naturals are comparable and have a minimum ([[thm-nat-linear-order]]); $m \le n$ means $m + c = n$ for some $c$ ([[def-nat-order]]); $\sigma(k) = k + 1$ ([[def-nat-addition]], [[def-natural-numbers]]); $m < n$ exactly when $\sigma(m) \le n$ ([[lem-nat-discrete]]), and $m < \sigma(n)$ exactly when $m \le n$ ([[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 $ab \ne 0$, so $v_p(ab)$ is defined. [L5]

1.2 Fix $a'$ and $b'$ with $a = p^{\alpha} a'$, $b = p^{\beta} b'$, both nonzero, and $p \nmid a'$, $p \nmid b'$. [L1, choose]

1.3 Now assume also $a + b \ne 0$, and put $m := \min\{\alpha,\beta\}$, which exists because $\le$ is total on $\mathbb{N}$; then $m \le \alpha$ and $m \le \beta$. [L7]

2.1 $ab = (p^{\alpha} a')(p^{\beta} b') = (p^{\alpha} p^{\beta})(a' b') = p^{\alpha+\beta}(a'b')$, using commutativity, associativity and the exponent law. [step 1.2, L2, L6]

2.2 $p \nmid a'b'$: otherwise [L3] would give $p \mid a'$ or $p \mid b'$, both excluded by step 1.2. [step 1.2, L3]

2.3 By [L1], $p^{m} \mid a$ and $p^{m} \mid b$, so $p^{m} \mid a + b$ by linearity; since $a + b \ne 0$, [L1] applied to $a+b$ gives $m \le v_p(a+b)$, which is the second assertion. [step 1.3, L1, L4]

3.1 $p^{\alpha+\beta} \ne 0$, since $ab \ne 0$ and $ab = p^{\alpha+\beta}(a'b')$ would otherwise be $0$. [step 1.1, step 2.1, L6]

3.2 $p^{\alpha+\beta} \mid ab$ by step 2.1, so $\alpha + \beta \le v_p(ab)$. [step 1.1, step 2.1, L1, L4]

4.1 Suppose $\alpha + \beta < v_p(ab)$. Then $\alpha + \beta + 1 \le v_p(ab)$, so $p^{\alpha+\beta+1} \mid ab$; fix $c$ with $ab = p^{\alpha+\beta+1}c = p^{\alpha+\beta}(pc)$, using the exponent law. Cancelling $p^{\alpha+\beta} \ne 0$ against step 2.1 gives $a'b' = pc$, that is $p \mid a'b'$, contradicting step 2.2. [step 2.1, step 2.2, step 3.1, L1, L2, L4, L5, L7]

5.1 Hence $v_p(ab) = \alpha + \beta$ by totality and antisymmetry of the order on $\mathbb{N}$, which is the first assertion. [step 3.2, step 4.1, L7]

6.1 Both assertions are established. [step 5.1, step 2.3] ∎

## Remarks

- **Primality is used exactly once**, at step 2.2, and it is used through [[thm-euclids-lemma]]. That is the whole reason the additivity of $v_p$ is a theorem about *primes* and not about arbitrary integers greater than $1$: for a composite base the analogue fails, and the companion page of the divisibility page already carries the failure of the product principle ([[cex-divides-a-product-without-dividing-a-factor]]).

- **The second clause is an inequality and cannot be an equality.** Take $p = 2$, $a = 2$, $b = 2$: then $v_2(a) = v_2(b) = 1$ while $v_2(a+b) = v_2(4) = 2$. The companion page's worked example computes such valuations explicitly ([[ex-prime-factorisation-worked]]).

- **The minimum is taken in $\mathbb{N}$, through [[thm-nat-linear-order]]**, not through the library's [[def-max-min]], which is stated for real numbers. The values of $v_p$ are natural numbers, so no passage to $\mathbb{R}$ is needed or wanted here.

```

## DEPENDENCY: def-binomial-coefficient

```markdown
---
id: def-binomial-coefficient
kind: definition
title: "The set $[A]^{k}$ of $k$-element subsets and the binomial coefficient $\\binom{n}{k} := \\lvert [n]^{k}\\rvert$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-cardinality, cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set,
       def-injection-surjection-bijection, def-equinumerous, def-natural-numbers,
       def-nat-order, lem-nat-order-is-membership, lem-nat-trichotomy]
justified_by: []
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
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Combination"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

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

## Remarks

- **Notation.** $[A]^{k}$ is standard for the set of $k$-element subsets; it is
  unrelated to the notation $A^{B}$ for a set of functions, which appears on this
  page as well. Where confusion is possible the words are used in full.

- **Symmetry is not visible yet.** $\binom{n}{k} = \binom{n}{n-k}$ is proved in
  [[thm-binomial-closed-formula]] by exhibiting the complementation bijection
  $S \mapsto n \setminus S$; from the definition alone there is no reason for the
  two counts to agree.

- **$0$ is a legitimate value of $k$ and of $n$.** Every boundary clause above is
  checked at $0$, which is where a statement about binomial coefficients most
  often goes wrong in this library's index convention.

```

## DEPENDENCY: thm-binomial-closed-formula

```markdown
---
id: thm-binomial-closed-formula
kind: theorem
title: "$\\binom{n}{k}\\,k!\\,(n-k)! = n!$ for $k \\le n$; hence $\\binom{n}{k}\\,k! = n^{\\underline{k}}$, the quotient $n!/(k!(n-k)!)$ is a natural number, and $\\binom{n}{k} = \\binom{n}{n-k}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-binomial-coefficient, thm-number-of-bijections-of-a-finite-set,
       def-factorial-and-falling-factorial, thm-sum-rule, thm-product-rule,
       def-sum-over-a-finite-index-set, def-finite-cardinality, thm-subset-of-a-finite-set,
       lem-nat-mult-cancellative, lem-nat-mult-associative, lem-nat-mult-commutative,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-canonical-natural,
       lem-of-inverse-unique, def-field, def-nat-order, lem-nat-add-cancellative,
       def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

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

## Facts & Assumptions

**Given:** Naturals $n, k$ with $k \le n$; the initial segment $k = \{\,i : i<k\,\}$, which satisfies $k \subseteq n$; and $\operatorname{Bij}(X,Y)$ for the set of bijections $X \to Y$.

[L1] $\binom{m}{j} = \lvert [X]^{j}\rvert$ for every finite $X$ with $\lvert X\rvert = m$; $[X]^{j}$ is finite ([[def-binomial-coefficient]]).

[L2] $\lvert\operatorname{Bij}(X,Y)\rvert = m!$ when $\lvert X\rvert = \lvert Y\rvert = m$, and such a set is finite ([[thm-number-of-bijections-of-a-finite-set]]).

[L3] The sum rule ([[thm-sum-rule]]) and $\sum_{i \in S} c = \lvert S\rvert\cdot c$ ([[def-sum-over-a-finite-index-set]]).

[L4] The product rule $\lvert X \times Y\rvert = \lvert X\rvert\lvert Y\rvert$ ([[thm-product-rule]]).

[L5] Factorials ([[def-factorial-and-falling-factorial]]): $m! \ne 0$ for every $m$; $n^{\underline{k}}(n-k)! = n!$ for $k \le n$.

[L6] Cardinality and subsets ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]): transport along a bijection; $\lvert m\rvert = m$; a subset of a finite set is finite.

[L7] Arithmetic of $\mathbb{N}$: multiplication is associative and commutative, and $x\cdot c = y\cdot c$ with $c \ne 0$ gives $x = y$ ([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]], [[lem-nat-mult-cancellative]]); $k + t = n$ determines $t = n-k$ ([[def-nat-order]], [[lem-nat-add-cancellative]]).

[L8] The embedding $\iota$ is multiplicative and injective, and $\iota(m) \ne 0$ for $m \ne 0$ (clauses 0 and 7 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]); a nonzero element of a field has a unique inverse, so division by it is legitimate ([[lem-of-inverse-unique]], [[def-field]]).

[L9] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection; a bijection of $n$ carries a subset onto a subset and the complement onto the complement.

## Proof

**Proof technique:** direct.

1.1 The set to be counted twice is $\operatorname{Bij}(n)$, of cardinality $n!$ by [L2]. For $S \in [n]^{k}$ put $\operatorname{Bij}_S := \{\, f \in \operatorname{Bij}(n) : f[k] = S \,\}$. These sets are pairwise disjoint, since $f$ determines $f[k]$, and their union over $S \in [n]^{k}$ is all of $\operatorname{Bij}(n)$, because $f[k]$ is a subset of $n$ of cardinality $k$ for every bijection $f$ of $n$. [L1, L2, L6, L9, construct]

1.2 For any $X \subseteq n$ with $\lvert X\rvert = k$ one has $\lvert n \setminus X\rvert = n-k$: the sets $X$ and $n \setminus X$ are disjoint with union $n$, so $n = k + \lvert n\setminus X\rvert$ by [L3], and [L7] identifies the second summand as $n-k$. [L3, L6, L7]

2.1 $\lvert\operatorname{Bij}_S\rvert = k!\,(n-k)!$ for every $S \in [n]^{k}$. Indeed $f \mapsto (f\restriction k,\ f\restriction (n\setminus k))$ maps $\operatorname{Bij}_S$ to $\operatorname{Bij}(k, S) \times \operatorname{Bij}(n\setminus k,\ n\setminus S)$: if $f[k] = S$ then $f$ restricted to $k$ is a bijection onto $S$, and, $f$ being a bijection of $n$, it carries $n \setminus k$ onto $n \setminus S$. The map $(u,v) \mapsto u \cup v$ is a two-sided inverse, the union of the two functions being a function on $k \cup (n\setminus k) = n$ and a bijection onto $S \cup (n\setminus S) = n$. Since $\lvert k\rvert = \lvert S\rvert = k$ and $\lvert n\setminus k\rvert = \lvert n\setminus S\rvert = n-k$ by step 1.2, [L2] and [L4] give the cardinality $k!\,(n-k)!$. [step 1.1, step 1.2, L2, L4, L6, L9]

2.2 Symmetry. The map $S \mapsto n \setminus S$ sends $[n]^{k}$ into $[n]^{\,n-k}$ by step 1.2, and $T \mapsto n\setminus T$ sends $[n]^{\,n-k}$ into $[n]^{k}$, again by step 1.2 together with $n-(n-k) = k$, which holds because $(n-k) + k = n$. The two are mutually inverse, since $n\setminus(n\setminus S) = S$ for $S \subseteq n$. Hence $\binom{n}{k} = \binom{n}{n-k}$. [step 1.2, L1, L6, L7, L9, construct]

3.1 Counting $\operatorname{Bij}(n)$ by the blocks of step 1.1 and using [L3], $n! = \lvert\operatorname{Bij}(n)\rvert = \sum_{S \in [n]^{k}}\lvert\operatorname{Bij}_S\rvert = \sum_{S \in [n]^{k}} k!\,(n-k)! = \big\lvert [n]^{k}\big\rvert\cdot k!\,(n-k)! = \binom{n}{k}\,k!\,(n-k)!$, the summand being constant. [step 1.1, step 2.1, L1, L3]

4.1 Clause 1. By [L5], $n^{\underline{k}}(n-k)! = n!$, so $\big(\binom{n}{k}k!\big)(n-k)! = n^{\underline{k}}(n-k)!$ by step 3.1 and associativity; since $(n-k)! \ne 0$, cancellation gives $\binom{n}{k}\,k! = n^{\underline{k}}$. [step 3.1, L5, L7]

4.2 Clause 2. Applying $\iota$ to step 3.1 and using multiplicativity, $\iota(n!) = \iota\binom{n}{k}\,\iota(k!)\,\iota((n-k)!)$. Both $\iota(k!)$ and $\iota((n-k)!)$ are nonzero by [L5] and [L8], so their product is invertible in $\mathbb{R}$ and $\iota\binom{n}{k} = \iota(n!)\big/\big(\iota(k!)\iota((n-k)!)\big)$. The left-hand side is the canonical natural of the count $\binom{n}{k}$, which is what the word *integrality* means here. [step 3.1, L5, L8]

5.1 The displayed identity is step 3.1, clause 1 is step 4.1, clause 2 is step 4.2 and clause 3 is step 2.2. [step 2.2, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Why the symmetry is proved by a bijection.** Complementation is shorter than
  manipulating the closed formula, it needs no hypothesis beyond $k \le n$, and
  it is the argument that survives to the multinomial coefficient, where no
  single closed formula is available until the analogous count has been made.

- **Where $k \le n$ is used.** In step 1.1, so that $k$ is a subset of $n$ of
  cardinality $k$ and $[n]^{k}$ is nonempty; and in step 1.2, so that $n-k$ is a
  genuine difference. For $k > n$ both sides of the displayed identity are still
  defined, but the left-hand side is $0$ while $n!$ is not, so the hypothesis is
  not removable.

- **The quotient formula is a theorem about a natural number.** A reader who
  starts from $n!/(k!(n-k)!)$ has to prove that the division comes out exact.
  Starting from the count, the exactness is what step 3.1 says, and the quotient
  is a consequence.

```

## DEPENDENCY: def-factorial-and-falling-factorial

```markdown
---
id: def-factorial-and-falling-factorial
kind: definition
title: "The factorial $n!$ and the falling factorial $n^{\\underline{k}}$, defined by recursion in $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-nat-multiplication,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-mult-identity,
       lem-nat-mult-cancellative, lem-nat-add-cancellative, def-nat-order,
       lem-nat-nonzero-is-successor, thm-omega-is-peano-system, def-canonical-natural]
justified_by: []
forward_refs: [lem-factorial-beats-geometric, def-monoid-finite-product]
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

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

## Remarks

- **Why $0! = 1$ is not imported.** The empty-product convention of an arbitrary
  monoid is fixed in [[def-monoid-finite-product]], which comes later in the
  reading order, so citing it here would be a dependency pointing the wrong way.
  Taking $0! = 1$ as the base clause of the factorial's own recursion costs
  nothing and owes nothing, and clause (a) then records the agreement.

- **The library's other factorial.** [[lem-factorial-beats-geometric]], later in
  the reading order, works with a real-valued factorial defined as the product
  $\prod_{j<n}(j+1)$ in $\mathbb{R}$. Clause (b) says that this is exactly
  $\iota(n!)$, so the two agree and no second notion has been created. That
  pointer is orientation only.

- **Check every clause at $k = 0$ and at $k = n$.** The falling factorial is
  defined by two regimes, one for $k \le n$ and one beyond, and the recursion
  above covers both because the truncated difference is $0$ past the end. The
  two values that get used constantly are $n^{\underline{0}} = 1$ and
  $n^{\underline{n}} = n!$, and both are clause (d).

```

## DEPENDENCY: thm-sylow-first-theorem

```markdown
---
id: thm-sylow-first-theorem
kind: theorem
title: "Sylow I: every finite group has a Sylow $p$-subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sylow-p-subgroup, lem-wielandt-sylow-binomial-valuation, thm-orbit-stabilizer, cor-orbit-stabilizer-cardinality, thm-lagrange, thm-strong-induction, thm-orbits-partition-the-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Amin Idelhaj, The Sylow Theorems and Their Applications, Section 3, Lemma 3.6 and the proof of Sylow's first theorem"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Idelhaj.pdf"
    - title: "Keith Conrad, The Sylow Theorems, Section 2, Proof of Sylow I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf"
pipeline_run: null
---

## Statement

Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a Sylow $p$-subgroup when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in thm-sylow-first-theorem. ([[def-sylow-p-subgroup]]).

[L2] Let $p$ be prime and let $a,m\in\mathbb N$ satisfy $p\nmid m$. Then $$v_p\!\left(\binom{p^am}{p^a}\right)=0.$$ The valuation is applied only to nonzero integers. ([[lem-wielandt-sylow-binomial-valuation]]).

[L3] Let $G$ act on $X$ and let $x\in X$. The rule $$\Phi:G/G_x\longrightarrow G\cdot x,\qquad \Phi(gG_x)=g\cdot x,$$ is well-defined and bijective. Thus every orbit is naturally in bijection with the left cosets of its stabilizer. ([[thm-orbit-stabilizer]]).

[L4] For an action of $G$ on $X$ and $x\in X$, $$|G\cdot x|=[G:G_x]$$ whenever either side is finite. In particular, if $G$ is finite, then $$|G|=|G_x|\,|G\cdot x|.$$. ([[cor-orbit-stabilizer-cardinality]]).

[L5] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L6] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.). ([[thm-strong-induction]]).

[L7] For a left action of $G$ on $X$, the relation $x\sim y$ defined by $y=g\cdot x$ for some $g\in G$ is an equivalence relation whose class at $x$ is $G\cdot x$, and the distinct orbits partition $X$ ([[thm-orbits-partition-the-set]]).

## Proof

**Proof technique:** direct.

1.1 Argue by strong induction [L6] on $|G|$, the induction statement being that every finite group of order $n$ has a subgroup of order $p^a$ whenever $n=p^am$ with $p\nmid m$. Let $\Omega$ be the set of subsets of $G$ of size $p^a$ and let $G$ act on $\Omega$ by left translation, $g\cdot A:=gA$; this is an action, and $|gA|=|A|$ because left translation is a bijection of $G$. Counting subsets gives $|\Omega|=\binom{p^am}{p^a}$, so [L2] yields $v_p(|\Omega|)=0$, that is $p\nmid|\Omega|$. [L2, L6, given, algebra]

2.1 By [L7] the orbits partition $\Omega$, so $|\Omega|$ is the sum of the orbit sizes. Were $p$ to divide every orbit size it would divide $|\Omega|$, so some orbit $\mathcal O$ has $p\nmid|\mathcal O|$. Choose $A\in\mathcal O$ and put $H=G_A=\{g\in G:gA=A\}$. The bijection of [L3] between $G/H$ and $\mathcal O$ gives $|\mathcal O|=[G:H]$, so [L4] gives $p^am=|G|=|H|\,|\mathcal O|$; since $p\nmid|\mathcal O|$, the full power $p^a$ divides $|H|$. [step 1.1, L3, L4, L7, choose]

3.1 Suppose $H=G$. Then $gA=A$ for every $g\in G$, so for any $x\in A$ the set $A$ contains $Gx=G$, whence $A=G$ and $p^a=|A|=|G|=p^am$. Thus $m=1$ and $G$ itself is a subgroup of order $p^a$. [step 2.1, given, algebra]

3.2 Suppose instead $H\ne G$, so $|H|<|G|$. By [L5], $|H|$ divides $p^am$; writing $|H|=p^bm'$ with $p\nmid m'$, step 2.1 gives $b\ge a$, while $p^b\mid p^am$ with $p\nmid m$ gives $b\le a$. Hence $|H|=p^am'$ with $p\nmid m'$, and the induction hypothesis applied to $H$ supplies a subgroup of $H$ of order $p^a$, which is a subgroup of $G$. [step 2.1, L5, L6, given, algebra]

4.1 Steps 3.1 and 3.2 are exhaustive, so $G$ has a subgroup $P$ of order $p^a$, and $|P|$ is the largest power of $p$ dividing $|G|$, so $P$ is a Sylow $p$-subgroup by [L1]. At $a=0$ the argument returns the trivial subgroup, of order $p^0=1$; for the trivial group $|G|=1$ this is $G$ itself, and $m=1$ is the case settled in step 3.1. [L1, step 3.1, step 3.2, given] ∎

```

## DEPENDENCY: thm-p-group-fixed-point-congruence

```markdown
---
id: thm-p-group-fixed-point-congruence
kind: theorem
title: 'If a finite $p$-group $P$ acts on a finite set $X$, then $|X|\equiv|X^P|\pmod p$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-p-group, def-fixed-point-sets-of-a-group-action, thm-orbits-partition-the-set, cor-orbit-stabilizer-cardinality, lem-subgroups-of-finite-p-groups-are-p-groups, def-congruence-modulo-an-integer, thm-sum-rule, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Theorem 4.1"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

If a finite $p$-group $P$ acts on a finite set $X$, then

$$|X|\equiv|X^P|\pmod p.$$

## Facts & Assumptions

**Given:** A finite $p$-group $P$ acting on a finite set $X$.

[L1] A finite $p$-group has prime-power order ([[def-finite-p-group]]).

[L2] The global fixed-point set is $X^P=\{x:g\cdot x=x\text{ for every }g\in P\}$ ([[def-fixed-point-sets-of-a-group-action]]).

[L3] The $P$-orbits partition $X$ ([[thm-orbits-partition-the-set]]).

[L4] An orbit has size $|P\cdot x|=[P:P_x]$ ([[cor-orbit-stabilizer-cardinality]]).

[L5] Every subgroup of $P$ has prime-power order ([[lem-subgroups-of-finite-p-groups-are-p-groups]]).

[L6] The congruence $a\equiv b\pmod p$ means that $p$ divides $a-b$ ([[def-congruence-modulo-an-integer]]).

[L7] A finite partition has total cardinality equal to the sum of its block cardinalities ([[thm-sum-rule]]).

[L8] Finite sums over finite index sets are well-defined ([[def-sum-over-a-finite-index-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], $X$ is the disjoint union of its $P$-orbits. An orbit is a singleton exactly when its point is fixed by every element of $P$, so the singleton orbits are indexed by $X^P$. [L2, L3]

1.2 For a non-singleton orbit $P\cdot x$, the stabilizer $P_x$ is proper. By [L1], [L4], and [L5], its index is a positive power of $p$, so $p$ divides $|P\cdot x|$. [L1, L4, L5]

2.1 Applying [L7] and [L8] to the orbit partition, every non-singleton orbit contributes a multiple of $p$ and the singleton orbits contribute $|X^P|$. Thus $p$ divides $|X|-|X^P|$, which is the asserted congruence by [L6]. [step 1.1, step 1.2, L6, L7, L8] ∎

```

## DEPENDENCY: def-number-of-sylow-p-subgroups

```markdown
---
id: def-number-of-sylow-p-subgroups
kind: definition
title: "The number $n_p(G)$ of Sylow $p$-subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sylow-p-subgroup]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Definition

For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups ([[def-sylow-p-subgroup]]). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; [[thm-sylow-first-theorem]] later shows it is nonzero.

```

## DEPENDENCY: def-normalizer-of-a-subgroup

```markdown
---
id: def-normalizer-of-a-subgroup
kind: definition
title: 'The normalizer $N_G(H)=\{g\in G:gHg^{-1}=H\}$ of a subgroup'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subgroup, thm-conjugation-is-an-automorphism]
justified_by: [lem-centralizers-and-normalizers-are-subgroups]
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

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
---
id: thm-lagrange
kind: theorem
title: "Lagrange's theorem: $|G|=[G:H]|H|$ for every subgroup $H$ of a finite group $G$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-coset-partition, lem-coset-partition, lem-coset-equinumerous-with-subgroup, def-index, def-order-in-a-group, def-finite-cardinality, thm-sum-rule, def-sum-over-a-finite-index-set, def-divides-in-z, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "UCL lecture notes, Cosets and Lagrange's theorem"
      url: "https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/4-6-cosets-and-lagranges-theorem.html"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and $H\le G$. Then

$$|G|=[G:H]\,|H|.$$

Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$,
$\iota(|H|)$ divides $\iota(|G|)$.

## Facts & Assumptions

**Given:** A finite group $G$ and a subgroup $H\le G$.

[L1] The distinct left cosets of $H$ partition $G$ ([[lem-coset-partition]]).

[L2] The subgroup, every coset, and $G/H$ are finite; every coset has cardinality $|H|$ and $|G/H|=[G:H]$ ([[lem-finite-coset-partition]], [[lem-coset-equinumerous-with-subgroup]], [[def-index]]).

[L3] For a finite partition $A=\bigsqcup_{i\in I}A_i$, one has $|A|=\sum_{i\in I}|A_i|$; if every summand has the same value $c$, then $\sum_{i\in I}c=|I|c$ ([[thm-sum-rule]], [[def-sum-over-a-finite-index-set]]).

[F1] The order $|G|$ of a finite group is the unique natural equinumerous with its underlying set, hence agrees with finite cardinality ([[def-order-in-a-group]], [[def-finite-cardinality]]).

[L4] The embedding $\iota$ preserves multiplication, and $d\mid a$ in $\mathbb Z$ means $a=dq$ for some integer $q$ ([[lem-nat-embeds-int]], [[def-divides-in-z]]).

## Proof

**Proof technique:** direct.

1.1 Apply the finite partition sum to the coset partition: $|G|=\sum_{C\in G/H}|C|$. [L1, L2, L3, F1]

2.1 Every summand equals $|H|$, and there are $|G/H|=[G:H]$ summands, so the constant-sum clause gives $|G|=[G:H]|H|$. [step 1.1, L2, L3]

3.1 Applying $\iota$ gives $\iota(|G|)=\iota(|H|)\iota([G:H])$, so $\iota(|H|)\mid\iota(|G|)$. [step 2.1, L4] ∎

```

## DEPENDENCY: thm-sylow-number-as-normalizer-index

```markdown
---
id: thm-sylow-number-as-normalizer-index
kind: theorem
title: "Sylow III*: $n_p(G)=[G:N_G(P)]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, def-number-of-sylow-p-subgroups, thm-conjugate-subgroups-are-counted-by-the-normalizer]
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

If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$ See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L3] Let $H\le G$. The rule $$G/N_G(H)\longrightarrow\{gHg^{-1}:g\in G\},\qquad gN_G(H)\longmapsto gHg^{-1},$$ is a well-defined bijection. If $G$ is finite, the number of distinct conjugates of $H$ is $[G:N_G(H)]$. ([[thm-conjugate-subgroups-are-counted-by-the-normalizer]]).

## Proof

**Proof technique:** direct.

1.1 Conjugation is transitive on the Sylow $p$-subgroups by Sylow II, and the stabilizer of $P$ is exactly $N_G(P)$. [L1, L2, L3, given, algebra]

2.1 We apply orbit–stabiliser, including the unique/trivial Sylow case. This proves the stated claim. [step 1.1, given, algebra] ∎

```

## DEPENDENCY: lem-product-with-normal-subgroup

```markdown
---
id: lem-product-with-normal-subgroup
kind: lemma
title: 'If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-subgroup-criterion, def-normal-subgroup, thm-normal-subgroup-characterisations, lem-group-inverse-laws]
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
    - title: "Judson, Abstract Algebra: Theory and Applications, Isomorphism Theorems"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.02%3A_The_Isomorphism_Theorms"
pipeline_run: null
---

## Statement

If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$.

Here $HN:=\{hn:h\in H,\ n\in N\}$.

## Facts & Assumptions

**Given:** A subgroup $H\le G$ and a normal subgroup $N\mathrel{\trianglelefteq}G$.

[L1] A nonempty subset closed under $xy^{-1}$ is a subgroup ([[lem-subgroup-criterion]]).

[L2] Normality means $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

[L3] A subgroup is normal if its conjugates by ambient elements lie in it ([[thm-normal-subgroup-characterisations]]).

[L4] $(ab)^{-1}=b^{-1}a^{-1}$ in a group ([[lem-group-inverse-laws]]).

## Proof

**Proof technique:** direct.

1.1 The identity lies in $HN$; for $h_1n_1,h_2n_2\in HN$, put $m=n_1n_2^{-1}\in N$, so $(h_1n_1)(h_2n_2)^{-1}=h_1mh_2^{-1}=h_1h_2^{-1}(h_2mh_2^{-1})\in HN$. [L1, L2, L3, L4, given, algebra]

2.1 Thus [L1] gives $HN\le G$; moreover for $h\in H$ and $x\in H\cap N$, both $hxh^{-1}\in H$ and $hxh^{-1}\in N$, so it lies in $H\cap N$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 The conjugation closure in step 2.1 gives $H\cap N\mathrel{\trianglelefteq}H$. [step 2.1] ∎

```

## DEPENDENCY: cor-sylow-subgroup-normal-iff-unique

```markdown
---
id: cor-sylow-subgroup-normal-iff-unique
kind: corollary
title: "A Sylow $p$-subgroup is normal if and only if it is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, def-number-of-sylow-p-subgroups, def-normal-subgroup]
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

A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L3] Let $G$ be a group and let $N\le G$ be a subgroup (def-subgroup). For $g\in G$, write $$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$ The subgroup $N$ is normal in $G$ when $$gNg^{-1}=N\qquad\text{for every }g\in G.$$ In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner conjugation of $G$ maps $N$ onto itself. The connection with equality of the left and right cosets of def-coset is proved in thm-normal-subgroup-characterisations. ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 A normal Sylow subgroup is fixed by every conjugation, and Sylow II says every Sylow subgroup is one of its conjugates. [L1, L2, L3, given, algebra]

2.1 Conversely, uniqueness makes the subgroup conjugation-invariant. This proves the stated claim. [step 1.1, given, algebra] ∎

```

## DEPENDENCY: lem-characteristic-subgroup-of-a-normal-subgroup-is-normal

```markdown
---
id: lem-characteristic-subgroup-of-a-normal-subgroup-is-normal
kind: lemma
title: "If $K$ is characteristic in $N$ and $N$ is normal in $G$, then $K$ is normal in $G$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-characteristic-subgroup, def-normal-subgroup, thm-conjugation-is-an-automorphism]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$.

## Facts & Assumptions

**Given:** Subgroups $K\le N\le G$ with $K$ characteristic in $N$ and $N$ normal in $G$.

[L1] A characteristic subgroup is preserved by every automorphism of its ambient group ([[def-characteristic-subgroup]]).

[L2] A subgroup is normal exactly when conjugation by every ambient element preserves it ([[def-normal-subgroup]]).

[L3] Conjugation by a fixed group element is an automorphism ([[thm-conjugation-is-an-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G$. Normality of $N$ and [L2] show that conjugation by $g$ maps $N$ to itself; by [L3], its restriction is an automorphism of $N$. [L2, L3]

2.1 Since $K$ is characteristic in $N$, [L1] gives $gKg^{-1}=K$. This holds for every $g\in G$, so $K\trianglelefteq G$ by [L2]. [step 1.1, L1, L2] ∎

```

## DEPENDENCY: def-sylow-p-subgroup

```markdown
---
id: def-sylow-p-subgroup
kind: definition
title: "Sylow $p$-subgroups of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-p-group, def-p-adic-valuation]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a **Sylow $p$-subgroup** when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in [[thm-sylow-first-theorem]].

```

## DEPENDENCY: def-subgroup-commutator-and-lower-central-series

```markdown
---
id: def-subgroup-commutator-and-lower-central-series
kind: definition
title: "Subgroup commutators and the lower central series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutator-and-commutator-subgroup, def-generated-subgroup]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Definition

For subgroups $A,B\le G$, their **subgroup commutator** is
$$[A,B]=\langle [a,b]:a\in A,\ b\in B\rangle,$$
where $[a,b]=aba^{-1}b^{-1}$ ([[def-commutator-and-commutator-subgroup]], [[def-generated-subgroup]]).

The **lower central series** is
$$\gamma_1(G)=G,\qquad \gamma_{r+1}(G)=[G,\gamma_r(G)]\quad(r\ge1).$$
Each $\gamma_r(G)$ is characteristic in $G$, and the series descends because $[G,N]\le N$ whenever $N\trianglelefteq G$.

```

## DEPENDENCY: def-normal-subgroup

```markdown
---
id: def-normal-subgroup
kind: definition
title: "Normal subgroup: invariance under conjugation"
status: published
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subgroup, def-coset]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Normal subgroup"
      url: "https://encyclopediaofmath.org/wiki/Normal_subgroup"
pipeline_run: null
---

## Definition

Let $G$ be a group and let $N\le G$ be a subgroup ([[def-subgroup]]). For
$g\in G$, write

$$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$

The subgroup $N$ is **normal in $G$** when

$$gNg^{-1}=N\qquad\text{for every }g\in G.$$

In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner
conjugation of $G$ maps $N$ onto itself. The connection with equality of the
left and right cosets of [[def-coset]] is proved in
[[thm-normal-subgroup-characterisations]].

```

## DEPENDENCY: def-fitting-subgroup-of-a-finite-group

```markdown
---
id: def-fitting-subgroup-of-a-finite-group
kind: definition
title: "The Fitting subgroup $F(G)=\\prod_p O_p(G)$ of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-core-of-a-finite-group, def-internal-direct-product-of-subgroups]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Rachel K. Carleton, The Commuting and Cyclic Graphs of Solvable A-Groups, Chapter 2 Section 2.1"
      url: "https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=kent1713384046910533&disposition=inline"
pipeline_run: null
---

## Definition

For a finite group $G$, the **Fitting subgroup** is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.

```

## DEPENDENCY: def-p-core-of-a-finite-group

```markdown
---
id: def-p-core-of-a-finite-group
kind: definition
title: "The $p$-core $O_p(G)$ as the largest normal $p$-subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-p-group, def-normal-subgroup, lem-product-with-normal-subgroup, thm-lagrange]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Rachel K. Carleton, The Commuting and Cyclic Graphs of Solvable A-Groups, Chapter 2 Section 2.1"
      url: "https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=kent1713384046910533&disposition=inline"
pipeline_run: null
---

## Definition

For a finite group $G$ and a prime $p$, the **$p$-core** $O_p(G)$ is the subgroup generated by all normal $p$-subgroups of $G$. There are finitely many such subgroups. If $A$ and $B$ are two of them, then $AB$ is a subgroup by [[lem-product-with-normal-subgroup]] and is normal because $gABg^{-1}=AB$ for every $g\in G$. For a fixed $ab\in AB$, the fibres of the multiplication map $A\times B\to AB$ are exactly the pairs $(ax,x^{-1}b)$ with $x\in A\cap B$, so
$$
|AB|=\frac{|A||B|}{|A\cap B|}.
$$
Lagrange's theorem [[thm-lagrange]] makes $|A\cap B|$ a power of $p$, and therefore $AB$ is again a normal $p$-subgroup. Induction shows that the product of all normal $p$-subgroups is a normal $p$-subgroup. It contains every such subgroup, so it is the unique largest normal $p$-subgroup; this product is $O_p(G)$.

```

## DEPENDENCY: lem-finite-nilpotence-via-normal-sylow-subgroups

```markdown
---
id: lem-finite-nilpotence-via-normal-sylow-subgroups
kind: lemma
title: "A finite group is nilpotent if and only if all Sylow subgroups are normal, if and only if it is their internal direct product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-normalizer-condition-for-finite-nilpotent-groups, thm-normalizer-of-a-sylow-normalizer, thm-sylow-first-theorem, lem-distinct-normal-sylow-subgroups-commute, thm-internal-direct-product-recognition, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups, thm-finite-p-groups-are-nilpotent]
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

For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. See [[thm-normalizer-condition-for-finite-nilpotent-groups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Every proper subgroup of a finite nilpotent group is properly contained in its normalizer. ([[thm-normalizer-condition-for-finite-nilpotent-groups]]).

[L2] Let $P$ be a Sylow $p$-subgroup of a finite group $G$. If $N_G(P)\le H\le G$, then $N_G(H)=H$. In particular, $N_G(N_G(P))=N_G(P)$. ([[thm-normalizer-of-a-sylow-normalizer]]).

[L3] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L4] Normal Sylow subgroups for distinct primes centralize one another. ([[lem-distinct-normal-sylow-subgroups-commute]]).

[L5] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L6] Every subgroup and every quotient of a nilpotent group is nilpotent. Every finite direct product of nilpotent groups is nilpotent; the class of a subgroup or quotient is at most the class of the original group, and the class of a nonempty finite product is at most the maximum of the factor classes. The empty product is the trivial group of class zero. ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

[L7] Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero. ([[thm-finite-p-groups-are-nilpotent]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is nilpotent and $P$ is Sylow, self-normalization of $N_G(P)$ contradicts the normalizer condition unless $N_G(P)=G$. [L1, L2, L3, L4, L5, L6, L7, given, algebra]

2.1 Normal Sylow subgroups for distinct primes commute and have trivial intersections; their product has order $|G|$, so it is the internal direct product. [step 1.1, given, algebra]

3.1 Conversely each factor is a finite $p$-group and hence nilpotent, and a finite direct product of nilpotent groups is nilpotent. [step 2.1, given, algebra]

4.1 The two degenerate cases are admitted by [L5] and hold. For $G=1$ the family of Sylow subgroups is empty, the empty internal direct product is the trivial group, and $G$ is nilpotent of class zero by [L7]. If $|G|$ is a power of a single prime, the family has one member, namely $G$ itself, the one-factor internal direct product is $G$, and [L7] again makes $G$ nilpotent. This proves the stated claim. [L5, L7, step 3.1, given, algebra] ∎

```

## DEPENDENCY: thm-internal-direct-product-recognition

```markdown
---
id: thm-internal-direct-product-recognition
kind: theorem
title: "Internal direct products are external direct products, equivalently every element has a unique factorisation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-internal-direct-product-of-subgroups, thm-external-direct-product-is-a-group, def-group-homomorphism, thm-group-homomorphism-injective-iff-trivial-kernel, lem-product-with-normal-subgroup]
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
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Statement

Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $G$ be a group and let $N_0,\ldots,N_{r-1}$ be normal subgroups, where $r\in\mathbb N$. They form an **internal direct product** when they generate $G$ and, for each $i<r$, $$N_i\cap\langle N_j:j<r,\ j\ne i\rangle=\{e\}.$$ The empty family is an internal direct product of the trivial group. For two subgroups of an abelian group this says $G=HK$ and $H\cap K=\{e\}$; in additive notation one writes $G=H\oplus K$. Normal subgroups and generated subgroups are those of def-normal-subgroup and def-generated-subgroup, and the comparison product is def-external-direct-product-of-groups. ([[def-internal-direct-product-of-subgroups]]).

[L2] For groups $G$ and $H$, the componentwise operation of def-external-direct-product-of-groups makes $G\times H$ a group. Its identity is $(e_G,e_H)$, and $$(g,h)^{-1}=(g^{-1},h^{-1}).$$ Moreover the coordinate maps $\pi_G(g,h)=g$ and $\pi_H(g,h)=h$ are group homomorphisms. ([[thm-external-direct-product-is-a-group]]).

[L3] Let $(M,\cdot,e)$ and $(M',\cdot',e')$ be monoids (def-semigroup-and-monoid). A **monoid homomorphism** from $M$ to $M'$ is a function $f : M \to M'$ such that - **(H1)** $f(x \cdot y) = f(x) \cdot' f(y)$ for all $x, y \in M$; - **(H2)** $f(e) = e'$. Let $G$ and $G'$ be groups (def-group). A **group homomorphism** from $G$ to $G'$ is a function $f : G \to G'$ satisfying (H1) alone: $$f(xy) \;=\; f(x)\, f(y) \qquad \text{for all } x, y \in G .$$ Condition (H2) is not imposed for groups because it follows: a group homomorphism automatically satisfies $f(e) = e'$ and $f(x^{-1}) = f(x)^{-1}$ (lem-group-homomorphism-basic-properties). For monoids it does **not** follow and must be assumed, which is why the two definitions differ. A homomorphism from a structure to itself is an **endomorphism**. The identity map of $M$ is a monoid homomorphism, and a composite of monoid homomorphisms is one, since $(g \circ f)(xy) = g(f(x)f(y)) = g(f(x))\,g(f(y))$ and $(g \circ f)(e) = g(e') = e''$; the same computation, without the second clause, shows a composite of group homomorphisms is a group homomorphism. ([[def-group-homomorphism]]).

[L4] A group homomorphism is injective if and only if its kernel is trivial. For a group homomorphism $f:G\to H$, $f$ is injective exactly when $\ker f=\{e_G\}$. ([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

[L5] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The internal intersection condition gives $N_i\cap N_j=\{e\}$ for $i\ne j$. Unique factorisation gives the same conclusion, since an element of $N_i\cap N_j$ has expressions supported in either coordinate. In either case normality puts $[N_i,N_j]$ inside $N_i\cap N_j$, so distinct factors commute and the multiplication map $\mu((n_i))=n_0\cdots n_{r-1}$ is a homomorphism. [given, L1, L2, L3]

1.2 Conversely, suppose that $\mu$ is an isomorphism. Coordinate subgroups in the external product commute, so their images $N_i$ commute, and surjectivity says that the factors generate $G$. If $x\in N_i\cap\langle N_j:j\ne i\rangle$, the commuting factors express $x$ as an ordered product of elements from the other $N_j$. The tuple supported at $i$ and this tuple supported away from $i$ have the same image, so injectivity gives $x=e$. Hence the factors form an internal direct product. [given, L1, L2, L3, L4, L5]

2.1 Under the internal-product condition, the image of $\mu$ is the subgroup generated by the factors, hence is all of $G$. If $\mu((n_i))=e$, then each $n_i$ is the inverse of a product of the other factors and so lies in $N_i\cap\langle N_j:j\ne i\rangle$; therefore every $n_i=e$. Thus $\mu$ is an isomorphism. [step 1.1, L1, L4, L5]

2.2 Under unique factorisation, every element has exactly one preimage under the homomorphism $\mu$. Thus $\mu$ is bijective and hence is an isomorphism. [step 1.1, L3, L4]

3.1 For the empty family, each condition says that $G$ is trivial. For one factor, each says that $N_0=G$, and the multiplication map is then the identity after identifying the one-fold product with $N_0$. [given, L1, L2] ∎

```

## DEPENDENCY: def-frattini-subgroup-of-a-finite-group

```markdown
---
id: def-frattini-subgroup-of-a-finite-group
kind: definition
title: "The Frattini subgroup $\\Phi(G)$ as the intersection of the maximal subgroups of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-maximal-subgroup-of-a-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Definition

For a finite group $G$, the **Frattini subgroup** is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$.

```

## DEPENDENCY: def-generated-subgroup

```markdown
---
id: def-generated-subgroup
kind: definition
title: "The subgroup $\\langle S \\rangle$ generated by a subset, the cyclic subgroup $\\langle g \\rangle$, and cyclic groups"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-subgroup, lem-intersection-of-subgroups, def-group]
justified_by: []
aliases: [def-cyclic-group, def-cyclic-subgroup]
landmark: false
short: "$\\langle S \\rangle$, $\\langle g \\rangle$, cyclic"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Generating set of a group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Generating_set_of_a_group"
    - title: "Cyclic group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cyclic_group"
pipeline_run: null
---

## Definition

Let $G$ be a group ([[def-group]]) and $S \subseteq G$ a subset. The set of
subgroups of $G$ containing $S$ is nonempty, since $G$ itself is such a subgroup,
so its intersection is a subgroup of $G$ by [[lem-intersection-of-subgroups]].
That intersection is the **subgroup generated by $S$**,

$$\langle S \rangle \;:=\; \bigcap \{\, H \;:\; H \le G \text{ and } S \subseteq H \,\} .$$

It contains $S$, being an intersection of sets each containing $S$, and it is
contained in every subgroup of $G$ that contains $S$; so it is the **smallest**
subgroup of $G$ containing $S$, and these two properties determine it uniquely.
The elements of $S$ are called **generators**.

For a single element $g \in G$ we write $\langle g \rangle := \langle \{g\}\rangle$
and call it the **cyclic subgroup generated by $g$**. A group $G$ is **cyclic**
when $G = \langle g \rangle$ for some $g \in G$.

By convention $\langle \varnothing \rangle = \{e\}$: the trivial subgroup is the
smallest subgroup containing the empty set, and this is a consequence of the
definition, not a stipulation, since every subgroup contains $e$
([[def-subgroup]]).

## Remarks

- **Two descriptions, one object.** The definition above is "from outside": cut
  down from all subgroups containing $S$. There is also a description "from
  inside", as the set of all finite products of generators and their inverses.
  For a single generator that inside description is
  $\langle g \rangle = \{\, g^{n} : n \in \mathbb{Z} \,\}$, proved in
  [[lem-cyclic-subgroup-is-the-set-of-powers]]. The general case belongs to a
  later page; nothing here needs it.

- **Cyclic does not mean finite.** $(\mathbb{Z},+)$ is cyclic, generated by $1$,
  and infinite; the generator may also fail to be unique, since $-1$ generates it
  too.

- Every cyclic group is abelian ([[lem-cyclic-subgroup-is-the-set-of-powers]]),
  so a non-abelian group is never cyclic; the converse fails, and the Klein
  four-group on the companion page is an abelian group that is not cyclic.

```
