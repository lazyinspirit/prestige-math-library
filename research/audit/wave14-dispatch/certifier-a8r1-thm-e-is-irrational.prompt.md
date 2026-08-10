# Independent repair certifier brief — Wave 14, A8

> **NO SHELL-PERMISSION PROMPTS.** Use only non-mutating reads in the read-only sandbox. Do not edit, delegate, escalate, or ask for shell or edit permission.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context window. Independently certify an A8 fatal repair you did not author. Read the complete exact-current item and every named dependency. Check mathematical validity, exact citation licensing, every boundary, current normalized hash, absence of stale `verified`/`judge`/`audited` evidence, and that the named fatal defect is actually fixed. A gap closable by a competent reader within 30 seconds is nonfatal and must not cause refusal.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [hash/provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```


---

# This dispatch

# Wave 14 A8 exact-final certification — `thm-e-is-irrational`

Normalized verification-stripped SHA-256: `8ea24c102b30f21259e235b2839c2ed7ee5c73384f714b01ca0bdbd13dbc75ea`

## Confirmed fatal defect repaired

The pre-repair integrality step lacked licenses for q|n!, k!|n!, the positive-integer/natural passage, and the embeddings into R.

## Hash-bound adjudication rows

```json
[
  {
    "id": "thm-e-is-irrational",
    "model": "gpt-5.6-terra",
    "context_sha256": "2a240f10616fb6de71483b6aaea7ff05b4e1247b5a7f2d29962af1434ef5053c",
    "outcome": "confirmed_fatal",
    "item_sha256": "733ef7c24688da2b73d1223df8b5729e86121937c6c4ee5e028d699cb63bb38a",
    "verdict_item_sha256": "9bc53116e43987feabaf20728f5e9dcf24234497bca83566748433c83b15db05",
    "adjudicator": "audit-alpha (gpt-5.6-sol, xhigh; owner-delegated)",
    "at": "2026-08-10T06:40:00.000Z",
    "note": "Confirmed fatal. Step 3.1 is the load-bearing assertion that A is an integer, but L1 exports only factorial recurrence/nonzeroness and canonical-natural positivity. It does not license q|n!, k!|n!, the positive-integer-to-natural passage, or preservation through Z->Q->R. Without those facts the contradiction 0<A<1 cannot be applied to an embedded integer. The repair requires exact embedding and factorial-divisibility dependencies plus a typed local derivation."
  },
  {
    "id": "thm-e-is-irrational",
    "model": "deepseek-v4-pro",
    "context_sha256": "2a240f10616fb6de71483b6aaea7ff05b4e1247b5a7f2d29962af1434ef5053c",
    "outcome": "confirmed_fatal",
    "item_sha256": "733ef7c24688da2b73d1223df8b5729e86121937c6c4ee5e028d699cb63bb38a",
    "verdict_item_sha256": "9bc53116e43987feabaf20728f5e9dcf24234497bca83566748433c83b15db05",
    "adjudicator": "audit-alpha (gpt-5.6-sol, xhigh; owner-delegated)",
    "at": "2026-08-10T06:40:00.000Z",
    "note": "Confirmed fatal for the same load-bearing typed gap. def-integers and def-rationals only construct quotient sets; they do not by themselves embed them into R. The exact lemmas lem-nat-embeds-int, lem-int-embeds-rat and lem-of-q-embeds are required, while thm-binomial-closed-formula plus factorial recurrence supplies the divisibility witnesses. Until those facts are stated and used, A's integrality is unproved."
  }
]
```

## Exact-current repaired item

````markdown
---
id: thm-e-is-irrational
kind: theorem
title: "The number $e$ is irrational"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-exponential-factorial-tail-bound, def-real-exponential-function-and-e, def-rationals, def-integers, def-factorial-and-falling-factorial, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, lem-rat-positive-denominator, lem-nat-embeds-int, lem-int-embeds-rat, lem-of-q-embeds, thm-binomial-closed-formula, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "MIT Proofs in Analysis and Probability, Lecture 2 notes"
      url: "https://math.mit.edu/classes/proofsiap/notes/Lecture2.pdf"
    - title: "LSU MATH 7230, Homework 1"
      url: "https://www.math.lsu.edu/~mahlburg/teaching/handouts/2018-7230/HW1.pdf"
pipeline_run: null
---

## Statement

The number $e$ is irrational.

## Facts & Assumptions

**Given:** The series definition of $e$ ([[def-real-exponential-function-and-e]]).

[L1] Factorials are nonzero naturals and obey their recurrence. If $k\le n$, then $\binom nk k!(n-k)!=n!$, so $k!$ divides $n!$ ([[def-factorial-and-falling-factorial]], [[thm-binomial-closed-formula]]). Every positive natural has a positive, hence nonzero, canonical real image, and the canonical map preserves products ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] The exponential factorial tail is bounded by [[lem-exponential-factorial-tail-bound]].

[L3] Every rational has an integer representative $p/q$ with positive denominator; every positive integer is the image of a unique natural $q\ge1$. The embeddings $\mathbb N\hookrightarrow\mathbb Z\hookrightarrow\mathbb Q\hookrightarrow\mathbb R$ are injective, preserve arithmetic and order, and the integers are closed under finite sums and differences ([[lem-rat-positive-denominator]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-of-q-embeds]], [[thm-int-comm-ring]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume $e\in\mathbb Q$. By [L3], write $e=p/q$ in $\mathbb R$ with $p\in\mathbb Z$ and $q\in\mathbb N$, $q\ge1$, using the canonical embeddings. Choose a natural $n\ge\max\{q,2\}$ ([[thm-of-archimedean]]).  [assume-contra, L3, choose]

2.1 Put $A:=\iota(n!)\left(e-\sum_{k=0}^{n}1/\iota(k!)\right)$. Every tail term is positive, so $A>0$. Applying [L2] with $x=1$ and $N=n$, then using the factorial recurrence, gives $$ A\le \frac{2\iota(n!)}{\iota((n+1)!)} =\frac2{\iota(n+1)} \le\frac23<1 $$ because $n\ge2$.  [step 1.1, L1, L2, algebra]

3.1 The number $A$ from step 2.1 is an embedded integer. Indeed, for each $0\le k\le n$, [L1] gives a natural $s_k$ with $n!=k!s_k$. Also $q!=m!q$ for the natural $m$ with $q=m+1$, and [L1] at $k=q$ gives $q!\mid n!$; hence $n!=qr$ for some natural $r$. By [L3] and multiplicativity of the embeddings, $$\iota(n!)e=\widehat{pr},\qquad \frac{\iota(n!)}{\iota(k!)}=\iota(s_k),$$ where $\widehat{pr}$ is the real image of the integer $pr$. Therefore $A$ is a difference of embedded integers and is itself an embedded integer.  [step 1.1, L1, L3, algebra]

4.1 Since the embedding preserves order, no embedded integer lies strictly between $0$ and $1$, contradicting steps 3.1 and 2.1. Therefore $e\notin\mathbb Q$.  [step 3.1, step 2.1, L3, discharge-contradiction] ∎
````

## Exact-current repaired proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-factorial-and-falling-factorial",
      "source_section": "Definition",
      "quote": "**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the\nset $\\mathbb{N}\\times\\mathbb{N}$, the starting element $(0,1)$ and the function\n$f(k, v) = (\\sigma(k),\\, v \\cdot \\sigma(k))$, and by the same induction on the\nfirst coordinate as in [[def-nat-finite-sum-and-product]], there is a unique\n$F : \\mathbb{N} \\to \\mathbb{N}$ with\n\n$$F(0) = 1, \\qquad F(\\sigma(n)) = F(n)\\cdot\\sigma(n) \\quad (n \\in \\mathbb{N}).$$\n\nWe write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\\cdot 1 = 1$, $2! = 1!\\cdot 2 = 2$,\n$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.\n\n**$0! = 1$ is the base clause of this recursion**, not a convention imported from\nelsewhere. Nothing about empty products is presupposed; the agreement with the\nempty product is proved below, in clause (a), rather than assumed.\n\n**Truncated difference.** Throughout, $n - k$ is the operation fixed in\n[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when\n$k \\le n$, and $0$ when $n < k$.\n\n**The falling factorial.** For $n \\in \\mathbb{N}$ define $n^{\\underline{k}}$ by\nrecursion on $k$, by the recursion theorem applied to\n$\\mathbb{N}\\times\\mathbb{N}$ with starting element $(0,1)$ and\n$f(k, v) = (\\sigma(k),\\, v \\cdot (n-k))$:\n\n$$n^{\\underline{0}} = 1, \\qquad n^{\\underline{\\sigma(k)}} = n^{\\underline{k}}\\cdot(n-k) .$$\n\nSo $n^{\\underline{1}} = 1\\cdot(n-0) = n$ and $n^{\\underline{2}} = n\\,(n-1)$, and\nfor $k \\le n$ the value is the product $n(n-1)\\cdots(n-k+1)$ of the $k$ topmost\nfactors.\n\n**Four facts, proved here because the page uses each of them.**\n\n**(a) The factorial is the product of the first $n$ positive naturals.**\n$n! = \\prod_{j<n}\\sigma(j) = \\prod_{j<n}(j+1)$, the $\\mathbb{N}$-valued product of\n[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at\n$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and\n$\\prod_{j<\\sigma(n)}\\sigma(j) = \\big(\\prod_{j<n}\\sigma(j)\\big)\\cdot\\sigma(n) = n!\\cdot\\sigma(n) = \\sigma(n)!$.\n**So the empty-product reading and the base-clause reading are the same reading**,\nand neither was assumed.\n\n**(b) $n! \\ne 0$, and $\\iota(n!) = \\prod^{\\mathbb{R}}_{j<n}\\iota(j+1)$.** For the\nfirst, $0! = 1 \\ne 0$ ([[thm-omega-is-peano-system]]) and\n$\\sigma(n)! = n!\\cdot\\sigma(n)$ is a product of two nonzero naturals, which is\nnonzero: if $xy = 0$ with $y \\ne 0$ then $xy = 0\\cdot y$\n([[lem-nat-mult-identity]]) and cancellation gives $x = 0$\n([[lem-nat-mult-cancellative]]). So $n! \\ne 0$ for every $n$ by induction. For the second, apply the bridge clause\n6 of that lemma to clause (a) above. This is what makes the factorial of this\npage and the real-valued product $\\prod_{j<n}(j+1)$ used elsewhere in the library\n**one object seen twice**, rather than two unrelated notions.\n\n**(c) $n^{\\underline{k}}\\cdot(n-k)! = n!$ for $k \\le n$.** Induction on $k$, for\nall $n$ at once. At $k = 0$ this reads $1 \\cdot n! = n!$. Assume it at $k$ and\nlet $\\sigma(k) \\le n$; then $k \\le n$, and writing $d := n - k$ we have\n$k + d = n$ and $d \\ne 0$, since $k + 0 = k \\ne n$; so $d = \\sigma(e)$ for a\nunique $e$ ([[lem-nat-nonzero-is-successor]]), and $\\sigma(k) + e = n$, that is\n$e = n - \\sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore\n$n^{\\underline{\\sigma(k)}}\\cdot\\big(n-\\sigma(k)\\big)! = n^{\\underline{k}}\\cdot(n-k)\\cdot e! = n^{\\underline{k}}\\cdot\\big(e!\\cdot\\sigma(e)\\big) = n^{\\underline{k}}\\cdot\\sigma(e)! = n^{\\underline{k}}\\cdot(n-k)! = n!$,\nusing commutativity and associativity of multiplication\n([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion\nclause for the factorial.\n\n**(d) Boundary values.** $n^{\\underline{0}} = 1$ for every $n$, by the base\nclause; $n^{\\underline{n}} = n!$, since clause (c) at $k = n$ gives\n$n^{\\underline{n}}\\cdot 0! = n!$ and $0! = 1$; and\n$n^{\\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives\n$n^{\\underline{\\sigma(n)}} = n^{\\underline{n}}\\cdot 0 = 0$, the clause\n$x \\cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if\n$n^{\\underline{k}} = 0$ then\n$n^{\\underline{\\sigma(k)}} = 0$ as well, so $n^{\\underline{k}} = 0$ for every\n$k \\ge \\sigma(n)$ by induction.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-binomial-closed-formula",
      "source_section": "Statement",
      "quote": "Let $n, k \\in \\mathbb{N}$ with $k \\le n$. Then, in $\\mathbb{N}$,\n\n$$\\binom{n}{k}\\cdot k!\\cdot (n-k)! = n! ,$$\n\nand consequently:\n\n1. $\\binom{n}{k}\\cdot k! = n^{\\underline{k}}$\n   ([[def-factorial-and-falling-factorial]]);\n2. **integrality**: in $\\mathbb{R}$,\n   $\\iota\\binom{n}{k} = \\dfrac{\\iota(n!)}{\\iota(k!)\\,\\iota((n-k)!)}$, so the\n   familiar quotient $n!/(k!\\,(n-k)!)$ is the canonical natural of a natural\n   number, namely of the count $\\binom{n}{k}$;\n3. **symmetry**: $\\binom{n}{k} = \\binom{n}{n-k}$.\n\nHere $\\iota$ is the canonical natural of [[def-canonical-natural]] and $n-k$ the\ntruncated difference, which for $k \\le n$ is the ordinary one.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-exponential-factorial-tail-bound",
      "source_section": "Statement",
      "quote": "If $x\\in\\mathbb R$, $N\\in\\mathbb N$, and $\\iota(N+2)\\ge2|x|$, then\n$$\\sum_{k=N+1}^{\\infty}\\frac{|x|^k}{\\iota(k!)} \\le \\frac{2|x|^{N+1}}{\\iota((N+1)!)}.$$",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-rat-positive-denominator",
      "source_section": "Statement",
      "quote": "Every rational has a representative $(a,b)$ with $b > 0$: for a class $[(a,b)]$\n(where $b \\ne 0$), if $b > 0$ take $(a,b)$ itself, and if $b < 0$ then\n$(a,b) \\sim (-a,-b)$ with $-b > 0$. Consequently the order on $\\mathbb{Q}$\n([[def-rat-order]]), which is stated on positive-denominator representatives, is\ndefined on all of $\\mathbb{Q}$.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-nat-embeds-int",
      "source_section": "Statement",
      "quote": "The map $\\iota(n) = [(n,0)]$ is injective and preserves addition,\nmultiplication, and order. Its image is exactly the set of nonnegative\nintegers, so every $x \\ge 0$ in $\\mathbb{Z}$ is $\\iota(k)$ for a unique\nnatural $k$.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-int-embeds-rat",
      "source_section": "Statement",
      "quote": "The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,\nand order. Composing with [[lem-nat-embeds-int]] embeds $\\mathbb{N}$ in\n$\\mathbb{Q}$; we write $k$ for $j(k)$ throughout.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-q-embeds",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). There is a unique field\nhomomorphism $\\iota : \\mathbb{Q} \\to F$ ([[def-field-homomorphism]]). On the\nintegers it is given by $n \\mapsto n \\cdot 1_F$ (with $-n \\mapsto -(n \\cdot 1_F)$\nand $0 \\mapsto 0$), and on a rational written as $p/q$ with $q \\ge 1$ by\n$\\iota(p/q) = \\iota(p)\\,(q \\cdot 1_F)^{-1}$. Moreover $\\iota$ is injective and\norder-preserving, so it is an embedding of $\\mathbb{Q}$ as an ordered subfield of\n$F$, and it is the only field homomorphism $\\mathbb{Q} \\to F$.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-int-comm-ring",
      "source_section": "Statement",
      "quote": "$(\\mathbb{Z}, +, \\cdot, 0, 1)$ with the operations of [[def-int-operations]] is\na commutative ring with multiplicative identity, in which every element has the\nadditive inverse $-[(a,b)] = [(b,a)]$.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "1.1 Assume $e\\in\\mathbb Q$. By [L3], write $e=p/q$ in $\\mathbb R$ with $p\\in\\mathbb Z$ and $q\\in\\mathbb N$, $q\\ge1$, using the canonical embeddings. Choose a natural $n\\ge\\max\\{q,2\\}$ ([[thm-of-archimedean]]).  [assume-contra, L3, choose]",
      "step": "1.1",
      "inputs": [
        "L3",
        "assume-contra",
        "choose"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "2.1 Put $A:=\\iota(n!)\\left(e-\\sum_{k=0}^{n}1/\\iota(k!)\\right)$. Every tail term is positive, so $A>0$. Applying [L2] with $x=1$ and $N=n$, then using the factorial recurrence, gives $$ A\\le \\frac{2\\iota(n!)}{\\iota((n+1)!)} =\\frac2{\\iota(n+1)} \\le\\frac23<1 $$ because $n\\ge2$.  [step 1.1, L1, L2, algebra]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1",
        "L2",
        "algebra"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "3.1 The number $A$ from step 2.1 is an embedded integer. Indeed, for each $0\\le k\\le n$, [L1] gives a natural $s_k$ with $n!=k!s_k$. Also $q!=m!q$ for the natural $m$ with $q=m+1$, and [L1] at $k=q$ gives $q!\\mid n!$; hence $n!=qr$ for some natural $r$. By [L3] and multiplicativity of the embeddings, $$\\iota(n!)e=\\widehat{pr},\\qquad \\frac{\\iota(n!)}{\\iota(k!)}=\\iota(s_k),$$ where $\\widehat{pr}$ is the real image of the integer $pr$. Therefore $A$ is a difference of embedded integers and is itself an embedded integer.  [step 1.1, L1, L3, algebra]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "L1",
        "L3",
        "algebra"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "4.1 Since the embedding preserves order, no embedded integer lies strictly between $0$ and $1$, contradicting steps 3.1 and 2.1. Therefore $e\\notin\\mathbb Q$.  [step 3.1, step 2.1, L3, discharge-contradiction] ∎",
      "step": "4.1",
      "inputs": [
        "2.1",
        "3.1",
        "L3",
        "discharge-contradiction"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "No set parameter is present."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 converts the positive denominator to a natural q>=1, excluding q=0 before division."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 permits q=1; step 3.1 gives 1|1! and n is still chosen at least 2."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 1.1-3.1 keep factorials nonzero, every denominator an embedded positive natural, and n>=2 for the tail bound."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint is involved; the infinite tail is estimated directly."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 uses the exact positive-denominator lemma and Archimedes to supply n>=max{q,2}."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 14 A8",
    "notes": "A8 repaired the fatal integrality gap by adding exact positive-denominator, nested-embedding, integer-ring, and factorial-divisibility licenses and deriving typed witnesses. Alpha read the complete repaired item and dependencies at normalized hash 8ea24c102b30f21259e235b2839c2ed7ee5c73384f714b01ca0bdbd13dbc75ea; independent Terra certification is routed in research/audit/wave14-A8-certifier-index.json."
  }
}
```

## Complete exact-current cited targets (12)

### `lem-exponential-factorial-tail-bound`

````markdown
---
id: lem-exponential-factorial-tail-bound
kind: lemma
title: "A geometric bound for tails of the exponential series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-exponential-function-and-e, thm-geometric-series, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "MIT Proofs in Analysis and Probability, Lecture 2 notes"
      url: "https://math.mit.edu/classes/proofsiap/notes/Lecture2.pdf"
    - title: "LSU MATH 7230, Homework 1"
      url: "https://www.math.lsu.edu/~mahlburg/teaching/handouts/2018-7230/HW1.pdf"
pipeline_run: null
---

## Statement

If $x\in\mathbb R$, $N\in\mathbb N$, and $\iota(N+2)\ge2|x|$, then
$$\sum_{k=N+1}^{\infty}\frac{|x|^k}{\iota(k!)} \le \frac{2|x|^{N+1}}{\iota((N+1)!)}.$$

## Facts & Assumptions

**Given:** $x,N$ with the stated inequality.

[L1] Factorials satisfy the recurrence; the canonical embedding preserves products and order and is strictly increasing on naturals ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] A geometric tail of ratio $1/2$ sums to $2$ ([[thm-geometric-series]]).

## Proof

**Proof technique:** direct.

1.1 For $k\ge N+1$, strict increase gives $\iota(k+1)\ge\iota(N+2)\ge2|x|$, and the factorial recurrence gives that the ratio of consecutive absolute terms is $|x|/\iota(k+1)\le1/2$.   [given, L1]

2.1 Thus the $j$-th term after $N+1$ is at most the first tail term times $2^{-j}$.  [step 1.1, induction]

3.1 Sum the geometric majorant using [L2] to obtain the displayed bound.   [step 2.1, L2, given] ∎
````

### `def-real-exponential-function-and-e`

````markdown
---
id: def-real-exponential-function-and-e
kind: definition
title: "The real exponential function and the number $e$ by a power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence, def-factorial-and-falling-factorial, def-integer-power, def-canonical-natural, lem-of-naturals-positive, def-series]
justified_by: [lem-exponential-series-has-infinite-radius]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Definition

For $x\in\mathbb R$, define
$$\exp(x):=\sum_{n=0}^{\infty}\frac{x^n}{\iota(n!)}, \qquad e:=\exp(1),$$
provided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\in\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].

This is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.
````

### `def-factorial-and-falling-factorial`

````markdown
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
````

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
````

### `lem-rat-positive-denominator`

````markdown
---
id: lem-rat-positive-denominator
kind: lemma
title: "Every rational has a positive-denominator representative"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rationals, thm-int-comm-ring, thm-int-ordered-ring, def-rat-order]
aliases: []
landmark: false
short: "rep with $b>0$ exists"
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Every rational has a representative $(a,b)$ with $b > 0$: for a class $[(a,b)]$
(where $b \ne 0$), if $b > 0$ take $(a,b)$ itself, and if $b < 0$ then
$(a,b) \sim (-a,-b)$ with $-b > 0$. Consequently the order on $\mathbb{Q}$
([[def-rat-order]]), which is stated on positive-denominator representatives, is
defined on all of $\mathbb{Q}$.

## Facts & Assumptions

**Given:** A rational represented by $(a,b)$ with $a, b \in \mathbb{Z}$, $b \ne 0$, and the relation $(x,y) \sim (z,w) \iff x w = z y$ ([[def-rationals]]).

[L1] Trichotomy in $\mathbb{Z}$: each nonzero integer is either $> 0$ or $< 0$, and $b < 0$ iff $-b > 0$ ([[thm-int-ordered-ring]]).

[L2] In the commutative ring $\mathbb{Z}$, $a(-b) = -(ab) = (-a)b$ (both products are the additive inverse of $ab$, by distributivity) ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 Since $b \ne 0$, by trichotomy [L1] either $b > 0$ or $b < 0$. [given, L1]

2.1 If $b > 0$, the representative $(a,b)$ already has positive denominator. [step 1.1]

2.2 If $b < 0$, then $-b > 0$ by [L1], and $a(-b) = (-a)b$ by [L2] is exactly the defining relation $(a,b) \sim (-a,-b)$; so $(-a,-b)$ represents the same class and has positive denominator $-b$. [step 1.1, L1, L2]

3.1 In either case the class has a representative with positive denominator; hence the order [[def-rat-order]], stated on such representatives, is defined for every rational. [step 2.1, step 2.2] ∎
````

### `lem-nat-embeds-int`

````markdown
---
id: lem-nat-embeds-int
kind: lemma
title: "The naturals embed in the integers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-integers, def-int-operations, def-int-order, def-natural-numbers, def-nat-order, lem-nat-add-identity, lem-nat-mult-identity, thm-nat-linear-order]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

The map $\iota(n) = [(n,0)]$ is injective and preserves addition,
multiplication, and order. Its image is exactly the set of nonnegative
integers, so every $x \ge 0$ in $\mathbb{Z}$ is $\iota(k)$ for a unique
natural $k$.

## Facts & Assumptions

**Given:** The map $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(n) = [(n,0)]$.

[A1] Arithmetic identities in $\mathbb{N}$: $x + 0 = x$, $0 + x = x$, $x \cdot 0 = 0$, $0 \cdot x = 0$, $x \cdot 1 = x$.

[A2] The order on $\mathbb{N}$, and: $x \le y$ iff $y = x + k$ for some $k$.

## Proof

**Proof technique:** direct.

1.1 Injectivity: $[(m,0)] = [(n,0)]$ means $m + 0 = 0 + n$, i.e. $m = n$. [A1]

1.2 Addition: $\iota(m) + \iota(n) = [(m+n,\, 0+0)] = \iota(m+n)$. [A1]

1.3 Multiplication: $\iota(m)\,\iota(n) = [(mn + 0 \cdot 0,\; m \cdot 0 + 0 \cdot n)] = \iota(mn)$. [A1]

1.4 Order: $\iota(m) \le \iota(n)$ reads $m + 0 \le 0 + n$, i.e. $m \le n$. [A1, A2]

1.5 Image: if $0 \le [(a,b)]$ then $b \le a$, so $a = b + k$ and $(a,b) \sim (k,0)$, giving $[(a,b)] = \iota(k)$; conversely $0 \le \iota(k)$ for every $k$. [A2, algebra]

2.1 $\iota$ embeds $\mathbb{N}$ into $\mathbb{Z}$, preserving arithmetic and order, with image the nonnegative integers. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
````

### `lem-int-embeds-rat`

````markdown
---
id: lem-int-embeds-rat
kind: lemma
title: "The integers embed in the rationals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rat-operations, def-rat-order, def-int-order, def-rationals, thm-int-comm-ring, lem-nat-embeds-int]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Statement

The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,
and order. Composing with [[lem-nat-embeds-int]] embeds $\mathbb{N}$ in
$\mathbb{Q}$; we write $k$ for $j(k)$ throughout.

## Facts & Assumptions

**Given:** The map $j : \mathbb{Z} \to \mathbb{Q}$, $j(k) = [(k,1)]$.

[L1] Ring arithmetic in $\mathbb{Z}$ ([[thm-int-comm-ring]]).

[L2] The order on $\mathbb{Q}$ ([[def-rat-order]]), whose defining inequality is read in the order on $\mathbb{Z}$ ([[def-int-order]]).

[L3] Equality in $\mathbb{Q}$: $[(a,b)] = [(c,d)]$ iff $ad = cb$ ([[def-rationals]]).

## Proof

**Proof technique:** direct.

1.1 Injectivity: $(k,1) \sim (m,1)$ means $k \cdot 1 = m \cdot 1$, i.e. $k = m$. [L3, L1]

1.2 Addition: $j(k) + j(m) = [(k \cdot 1 + m \cdot 1,\; 1)] = j(k+m)$. [L1]

1.3 Multiplication: $j(k)\,j(m) = [(km,\, 1)] = j(km)$. [L1]

1.4 Order: denominators are $1 > 0$, so $j(k) \le j(m)$ reads $k \cdot 1 \le m \cdot 1$, i.e. $k \le m$. [L1, L2]

2.1 $j$ embeds $\mathbb{Z}$ into $\mathbb{Q}$, preserving arithmetic and order. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
````

### `lem-of-q-embeds`

````markdown
---
id: lem-of-q-embeds
kind: lemma
title: "The unique embedding of ℚ into an ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, def-field-homomorphism, def-ordered-field, thm-rat-ordered-field]
aliases: []
landmark: false
short: "ℚ embeds"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]). There is a unique field
homomorphism $\iota : \mathbb{Q} \to F$ ([[def-field-homomorphism]]). On the
integers it is given by $n \mapsto n \cdot 1_F$ (with $-n \mapsto -(n \cdot 1_F)$
and $0 \mapsto 0$), and on a rational written as $p/q$ with $q \ge 1$ by
$\iota(p/q) = \iota(p)\,(q \cdot 1_F)^{-1}$. Moreover $\iota$ is injective and
order-preserving, so it is an embedding of $\mathbb{Q}$ as an ordered subfield of
$F$, and it is the only field homomorphism $\mathbb{Q} \to F$.

## Facts & Assumptions

**Given:** An ordered field $F$; the field $\mathbb{Q}$ of [[thm-rat-ordered-field]], every element of which is $0$ or $\pm p/q$ with integers $p, q \ge 1$. For an integer $p$ write $\iota(p)$ for $p \cdot 1_F$ if $p \ge 0$ and $-(|p| \cdot 1_F)$ if $p < 0$.

[L1] $\mathbb{Q}$ is an ordered field; a nonzero $p/q$ with $q \ge 1$ is positive exactly when $p \ge 1$ ([[thm-rat-ordered-field]]).

[L2] The canonical naturals satisfy $n \cdot 1_F > 0$ for $n \ge 1$, $n \mapsto n \cdot 1_F$ is injective, $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$, and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ ([[lem-of-naturals-positive]]).

[L3] If $a > 0$ then $a^{-1} > 0$ ([[lem-of-inverse-positive]]).

[L4] Sign rules: a product of positives is positive, and for $c > 0$ one has $a < b$ iff $ac < bc$ ([[lem-of-sign-rules]]).

[L5] A field homomorphism preserves $+$, $\cdot$, and $1$, and hence $0$, negation, and inverses ([[def-field-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Define $\iota$ on the integers by $\iota(n) = n \cdot 1_F$ for $n \ge 0$ and $\iota(-n) = -(n \cdot 1_F)$; by [L2] this is additive and multiplicative on $\mathbb{Z}$ and sends $1 \mapsto 1_F$. [L2]

1.2 For a rational $x = p/q$ with $q \ge 1$ define $\iota(x) = \iota(p)\,(q \cdot 1_F)^{-1}$, which makes sense because $q \cdot 1_F > 0 \ne 0$ has an inverse. [L2]

2.1 Well-defined: if $p/q = p'/q'$ with $q, q' \ge 1$, then $p q' = p' q$ in $\mathbb{Z}$, so [L2] gives $\iota(p)(q' \cdot 1_F) = \iota(p')(q \cdot 1_F)$, and multiplying by the positive $(q \cdot 1_F)^{-1}(q' \cdot 1_F)^{-1}$ yields $\iota(p)(q \cdot 1_F)^{-1} = \iota(p')(q' \cdot 1_F)^{-1}$; thus $\iota(x)$ is independent of the representative. [step 1.1, step 1.2, L2, L3]

2.2 Multiplicativity: for $x = p/q$, $y = r/s$ one has $xy = (pr)/(qs)$, and $\iota(xy) = \iota(pr)((qs) \cdot 1_F)^{-1} = \iota(p)\iota(r)(q \cdot 1_F)^{-1}(s \cdot 1_F)^{-1} = \iota(x)\iota(y)$, using $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ and $(uv)^{-1} = u^{-1} v^{-1}$. [step 1.2, L2]

2.3 Additivity: with $x + y = (ps + rq)/(qs)$, $\iota(x+y) = (\iota(p)(s \cdot 1_F) + \iota(r)(q \cdot 1_F))(q \cdot 1_F)^{-1}(s \cdot 1_F)^{-1} = \iota(p)(q \cdot 1_F)^{-1} + \iota(r)(s \cdot 1_F)^{-1} = \iota(x) + \iota(y)$, using the additive and multiplicative identities of [L2]. [step 1.2, L2]

2.4 Positivity: if $x = p/q > 0$ in $\mathbb{Q}$ with $q \ge 1$, then $p \ge 1$ by [L1], so $\iota(p) = p \cdot 1_F > 0$ and $q \cdot 1_F > 0$ by [L2], whence $(q \cdot 1_F)^{-1} > 0$ by [L3] and $\iota(x) = \iota(p)(q \cdot 1_F)^{-1} > 0$ by [L4]. [step 1.2, L1, L2, L3, L4]

2.5 Uniqueness on $\mathbb{Z}$: let $\psi : \mathbb{Q} \to F$ be any field homomorphism; then $\psi(1) = 1_F$, additivity forces $\psi(n) = n \cdot 1_F = \iota(n)$ for $n \ge 1$, and $\psi(0) = 0$, $\psi(-n) = -(n \cdot 1_F)$, so $\psi = \iota$ on $\mathbb{Z}$. [step 1.1, L5]

3.1 Unit: $\iota(1) = \iota(1/1) = \iota(1)(1 \cdot 1_F)^{-1} = 1_F$; hence $\iota$ is a field homomorphism $\mathbb{Q} \to F$. [step 2.2, step 2.3, L2, L5]

3.2 Order: for $x < y$ in $\mathbb{Q}$ we have $y - x > 0$, so $\iota(y) - \iota(x) = \iota(y - x) > 0$ by 2.3 and 2.4, that is $\iota(x) < \iota(y)$; thus $\iota$ is order-preserving. [step 2.3, step 2.4]

4.1 Injectivity: if $x \ne y$ then $x < y$ or $y < x$, and 3.2 forces $\iota(x) \ne \iota(y)$; so $\iota$ is injective, an embedding of ordered fields. [step 3.2]

5.1 Uniqueness on $\mathbb{Q}$: for $p/q \in \mathbb{Q}$, $\psi(p/q) = \psi(p)\psi(q)^{-1} = \iota(p)(q \cdot 1_F)^{-1} = \iota(p/q)$ since $\psi$ preserves products and inverses; hence $\psi = \iota$, so $\iota$ is the unique field homomorphism $\mathbb{Q} \to F$. [step 2.5, step 1.2, L5] ∎
````

### `thm-binomial-closed-formula`

````markdown
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
````

### `thm-int-comm-ring`

````markdown
---
id: thm-int-comm-ring
kind: theorem
title: "The integers form a commutative ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integers, def-int-operations, lem-int-add-well-defined,
       lem-int-mul-well-defined, lem-nat-add-commutative,
       lem-nat-add-associative, lem-nat-add-identity,
       lem-nat-mult-commutative, lem-nat-mult-associative,
       lem-nat-mult-distributive, lem-nat-mult-identity]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

$(\mathbb{Z}, +, \cdot, 0, 1)$ with the operations of [[def-int-operations]] is
a commutative ring with multiplicative identity, in which every element has the
additive inverse $-[(a,b)] = [(b,a)]$.

## Facts & Assumptions

**Given:** $\mathbb{Z}$ with the operations of [[def-int-operations]].

[L1] Addition on $\mathbb{N}$ is commutative and associative, with zero as a two-sided identity ([[lem-nat-add-commutative]], [[lem-nat-add-associative]], [[lem-nat-add-identity]]).

[L2] Multiplication on $\mathbb{N}$ is commutative and associative, distributes over addition, and has the usual zero and identity laws ([[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-distributive]], [[lem-nat-mult-identity]]).

[L3] The integer operations are independent of representatives ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], each axiom may be verified on arbitrary fixed representatives $(a,b), (c,d), (e,f)$. [L3, suffices]

1.2 Associativity of $+$: $((a,b)+(c,d))+(e,f)$ and $(a,b)+((c,d)+(e,f))$ both equal $(a+c+e,\; b+d+f)$. [L1]

1.3 Commutativity of $+$: $(a+c,\, b+d) = (c+a,\, d+b)$. [L1]

1.4 Additive identity: $(a,b) + (0,0) = (a+0,\, b+0) = (a,b)$. [L1]

1.5 Additive inverses: $(a,b) + (b,a) = (a+b,\, b+a) \sim (0,0)$, since $(a+b) + 0 = (b+a) + 0$. [L1]

1.6 Commutativity of $\cdot$: swapping $(a,b) \leftrightarrow (c,d)$ sends $(ac+bd,\, ad+bc)$ to $(ca+db,\, cb+da)$, the same pair. [L1, L2]

1.7 Multiplicative identity: $(a,b) \cdot (1,0) = (a \cdot 1 + b \cdot 0,\; a \cdot 0 + b \cdot 1) = (a,b)$. [L1, L2]

1.8 Associativity of $\cdot$: expanding, both $((a,b)(c,d))(e,f)$ and $(a,b)((c,d)(e,f))$ equal $(ace+adf+bcf+bde,\; acf+ade+bce+bdf)$. [L1, L2]

1.9 Distributivity: $(a,b) \cdot ((c,d)+(e,f)) = (a(c+e)+b(d+f),\; a(d+f)+b(c+e)) = (ac+bd,\, ad+bc) + (ae+bf,\, af+be) = (a,b)(c,d) + (a,b)(e,f)$. [L1, L2]

2.1 Steps 1.2–1.9 verify all axioms: $(\mathbb{Z}, +, \cdot, 0, 1)$ is a commutative ring with identity and additive inverses. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8, step 1.9] ∎
````

