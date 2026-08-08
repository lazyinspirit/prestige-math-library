# Audit proof-refuter brief — Wave 6, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```



---

# This dispatch

## Target item — `thm-laurent-cauchy-complete`

Normalized current SHA-256: `cc1b09d79aa5ca608eb9ca2a715999b9b4e104e152abd9fcda66a1d06dca64d0`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-laurent-cauchy-complete
kind: theorem
title: "Every Cauchy sequence in $\\mathbb{R}((t^{-1}))$ converges: $K$ is sequentially Cauchy complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-series-ring, thm-laurent-ordered-field, lem-laurent-non-archimedean, def-sequences-in-an-ordered-field, def-ordered-field, def-abs-value, thm-well-ordering-principle, thm-induction-principle, def-natural-numbers, def-nat-order, thm-nat-linear-order, lem-nat-embeds-int]
aliases: []
landmark: true
short: "$K$ is Cauchy complete"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Complete field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_field"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Laurent series (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Laurent_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Every sequence $(f^{(n)})_{n \in \mathbb{N}}$ in $K = \mathbb{R}((t^{-1}))$ that
is Cauchy in $K$ ([[def-sequences-in-an-ordered-field]]) converges in $K$. That
is, the ordered field $K$ of [[thm-laurent-ordered-field]] is **sequentially
Cauchy complete**.

The limit is built coefficient by coefficient: at each index $j \in \mathbb{Z}$
the real numbers $f^{(n)}(j)$ are eventually constant in $n$, and $L(j)$ is that
eventual value.

## Scratch

The whole theorem turns on one structural fact about $K$, and it is worth
isolating before the proof: **the value group is $\mathbb{Z}$, so it has
countable cofinality.** Concretely, the countably many monomials $t^{-k}$,
$k \in \mathbb{N}$, get below every positive element of $K$
([[lem-laurent-non-archimedean]], clause 3). Two consequences drive everything.

First, the Cauchy condition, which quantifies over the uncountably many positive
$\varepsilon \in K$, is *equivalent* to its restriction to the countable family
$\varepsilon = t^{-(k+1)}$, and by clause 4 of the same lemma that restricted
condition says exactly: for each $k$ the coefficients at all indices $j \le k$
are eventually constant along the sequence.

Second, a sequence indexed by $\mathbb{N}$ is long enough to reach the limit.
For each of the countably many thresholds $t^{-k}$ there is an index $N_k$ past
which the sequence is that close, and $\sup$-free bookkeeping over $\mathbb{N}$
assembles the $N_k$ into a single limit. In a field whose value group had
uncountable cofinality this last step would fail, and a sequence would not
suffice.

The one genuinely non-formal point is that the assembled $L$ must have support
bounded below, so that it is an element of $K$ at all. That does not follow from
the eventual constancy at each index separately; it comes from the *single*
threshold $k = 0$, which already pins down every negative index at once.

## Facts & Assumptions

**Given:** A sequence $(f^{(n)})_{n \in \mathbb{N}}$ in $K$ that is Cauchy in $K$.

[L1] $K$ consists of the functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere ([[def-formal-laurent-series]]).

[L2] $K$ is an ordered field, so its order is transitive and total ([[thm-laurent-ordered-field]], [[def-ordered-field]], [[def-abs-value]]); and $(g - h)(j) = g(j) - h(j)$ for $g, h \in K$ ([[lem-laurent-series-ring]]).

[L3] In $K$: $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$; for every $\varepsilon > 0$ in $K$ there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$; if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$; and if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$ ([[lem-laurent-non-archimedean]]).

[L4] $(x_n)$ is Cauchy in $K$ when for every $\varepsilon > 0$ in $K$ there is $N \in \mathbb{N}$ with $|x_n - x_m| < \varepsilon$ for all $n, m \ge N$; and $(x_n)$ converges to $L$ in $K$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - L| < \varepsilon$ for all $n \ge N$ ([[def-sequences-in-an-ordered-field]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] The order on $\mathbb{N}$ is total ([[thm-nat-linear-order]], [[def-nat-order]]), induction is available ([[thm-induction-principle]], [[def-natural-numbers]]), and every integer $\ge 0$ is the image of a unique natural number, so a natural number may be used as an index in $\mathbb{Z}$ ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** constructive.

1.1 For $k \in \mathbb{N}$ put $M_k := \{\, N \in \mathbb{N} : |f^{(n)} - f^{(m)}| < t^{-(k+1)} \text{ for all } n, m \ge N \,\}$. Since $t^{-(k+1)} > 0_K$ by [L3] and the sequence is Cauchy, $M_k \ne \varnothing$ by [L4]; let $N_k := \min M_k$, which exists by [L5]. [given, L3, L4, L5, construct]

2.1 For every $k \in \mathbb{N}$, all $n, m \ge N_k$ and every $j \le k$ one has $f^{(n)}(j) = f^{(m)}(j)$: by [step 1.1] $|f^{(n)} - f^{(m)}| < t^{-(k+1)}$, so [L3] gives $(f^{(n)} - f^{(m)})(j) = 0$ for every $j < k+1$, that is for every $j \le k$, and $(f^{(n)} - f^{(m)})(j) = f^{(n)}(j) - f^{(m)}(j)$ by [L2]. [step 1.1, L2, L3, L6]

2.2 $N_a \le N_b$ whenever $a \le b$ in $\mathbb{N}$: for consecutive indices, $t^{-(k+2)} < t^{-(k+1)}$ by [L3], so any $N$ witnessing membership in $M_{k+1}$ also witnesses membership in $M_k$ by transitivity of the order [L2]; hence $M_{k+1} \subseteq M_k$ and $N_k = \min M_k \le \min M_{k+1} = N_{k+1}$. The general case follows by induction on $b$ [L6]. [step 1.1, L2, L3, L6]

2.3 Define $\kappa : \mathbb{Z} \to \mathbb{N}$ by $\kappa(j) := j$ for $j \ge 0$ and $\kappa(j) := 0$ for $j < 0$, so that $j \le \kappa(j)$ for every $j \in \mathbb{Z}$; then define $L : \mathbb{Z} \to \mathbb{R}$ by $L(j) := f^{(N_{\kappa(j)})}(j)$. [step 1.1, L6, construct]

3.1 For every $j \in \mathbb{Z}$ and every $n \ge N_{\kappa(j)}$ one has $f^{(n)}(j) = L(j)$: apply [step 2.1] with $k = \kappa(j)$, which is legitimate since $j \le \kappa(j)$, to the two indices $n$ and $N_{\kappa(j)}$, both of which are $\ge N_{\kappa(j)}$. [step 2.1, step 2.3, L6]

3.2 $L \in K$. The series $f^{(N_0)}$ lies in $K$, so by [L1] there is $m_0 \in \mathbb{Z}$ with $f^{(N_0)}(j) = 0$ for every $j < m_0$. If $j < m_0$ and $j < 0$ then $\kappa(j) = 0$, so $L(j) = f^{(N_0)}(j) = 0$; hence $L(j) = 0$ for every $j$ below both $m_0$ and $0$, the support of $L$ is bounded below, and $L \in K$. [step 2.3, L1]

4.1 For every $k \in \mathbb{N}$, every $n \ge N_k$ and every $j \le k$ one has $f^{(n)}(j) = L(j)$: if $j \ge 0$ then $\kappa(j) = j \le k$, and if $j < 0$ then $\kappa(j) = 0 \le k$, so in both cases $N_{\kappa(j)} \le N_k \le n$ by [step 2.2] and [step 3.1] applies. [step 2.2, step 3.1, L6]

5.1 $(f^{(n)})$ converges to $L$ in $K$. Let $\varepsilon > 0$ in $K$. By [L3] — this is the countable-cofinality step, and it is the only place where anything special about $K$ is used — there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$. Put $N := N_k$. For every $n \ge N$, [step 4.1] and [L2] give $(f^{(n)} - L)(j) = f^{(n)}(j) - L(j) = 0$ for every $j \le k$, so $|f^{(n)} - L| < t^{-k}$ by [L3] and therefore $|f^{(n)} - L| < \varepsilon$ by transitivity [L2]. As $\varepsilon$ was arbitrary, this is convergence in the sense of [L4]. [step 3.2, step 4.1, L2, L3, L4]

6.1 The sequence $(f^{(n)})$ was an arbitrary Cauchy sequence in $K$, and [step 3.2] and [step 5.1] produce an element $L \in K$ to which it converges; so every Cauchy sequence in $K$ converges in $K$. [step 3.2, step 5.1, discharge-construct] ∎

## Remarks

- **What makes the argument work, in one sentence.** The value group of $K$ is $\mathbb{Z}$, whose cofinality is countable, so the continuum of thresholds $\varepsilon > 0$ in the Cauchy condition collapses to the countable family $t^{-k}$, $k \in \mathbb{N}$ ([[lem-laurent-non-archimedean]], clause 3), and a sequence indexed by $\mathbb{N}$ can meet all of them. A proof that skipped this step would be proving nothing: it is exactly the point at which the countability of the index set $\mathbb{N}$ is matched to the structure of the field.

- **Support-boundedness of the limit is a separate obligation, and it is discharged from a single threshold.** Knowing that each coefficient $f^{(n)}(j)$ is eventually constant gives a function $\mathbb{Z} \to \mathbb{R}$ and nothing more; there is no reason *a priori* why its support should be bounded below. What supplies that is [step 3.2]: the threshold $k = 0$ freezes *all* indices $j \le 0$ simultaneously from the single stage $N_0$ onward, so $L$ agrees with the one series $f^{(N_0)}$ on the whole negative half-line and inherits its lower bound.

- **No choice is used.** The stage $N_k$ is not chosen: it is defined as the least element of $M_k$, which exists by the well-ordering principle ([[thm-well-ordering-principle]]). This matters because the construction makes countably many selections, and a version of it that said "pick some $N_k$" would be an appeal to countable choice for no reason.

- **This is Cauchy completeness and nothing more.** $K$ is sequentially Cauchy complete and at the same time lacks the least-upper-bound property ([[cor-laurent-not-lub-complete]]); the two are not the same condition, and in a non-Archimedean field they come apart. Nor does this theorem give the unrestricted nested interval property: see [[cor-laurent-nested-intervals]] for what it does give, and [[cex-laurent-nested-intervals-empty]] for what it does not.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-formal-laurent-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the field of real numbers with its order\n([[def-real-numbers]], [[thm-reals-ordered-field]]) and $\\mathbb{Z}$ is the\ntotally ordered commutative ring of integers ([[def-integers]],\n[[def-int-operations]], [[def-int-order]], [[thm-int-ordered-ring]]).\n\nFor a function $f : \\mathbb{Z} \\to \\mathbb{R}$ write\n\n$$\\operatorname{supp} f \\;:=\\; \\{\\, k \\in \\mathbb{Z} : f(k) \\ne 0 \\,\\},$$\n\nand say that $\\operatorname{supp} f$ is **bounded below** when there is\n$m \\in \\mathbb{Z}$ with $f(k) = 0$ for every $k < m$. The set of **formal Laurent\nseries in $t^{-1}$ over $\\mathbb{R}$** is\n\n$$K \\;=\\; \\mathbb{R}((t^{-1})) \\;:=\\; \\{\\, f : \\mathbb{Z} \\to \\mathbb{R} \\;\\mid\\; \\operatorname{supp} f \\text{ is bounded below} \\,\\},$$\n\nequipped with\n\n$$(f + g)(k) := f(k) + g(k), \\qquad (fg)(k) := \\sum_{i + j = k} f(i)\\,g(j),$$\n\nwhere the product sum ranges over the pairs $(i,j) \\in \\mathbb{Z} \\times\n\\mathbb{Z}$ with $i + j = k$ and $f(i)g(j) \\ne 0$. That set of pairs is finite\nfor every $k$, and $f + g$ and $fg$ again lie in $K$: this is\n[[lem-laurent-series-ring]], which also proves that $K$ with these operations is\na commutative ring whose zero $0_K$ is the constant function $0$ and whose\nidentity $1_K$ is the function taking the value $1$ at $0$ and $0$ elsewhere.\n\n**Distinguished elements.** For $n \\in \\mathbb{Z}$ let $t^{-n} \\in K$ be the\nfunction taking the value $1$ at $n$ and $0$ at every other index; so\n$t^{0} = 1_K$, and $t := t^{-(-1)}$ is the function taking the value $1$ at $-1$.\nFor $c \\in \\mathbb{R}$ let $\\iota(c) \\in K$ be the function taking the value $c$\nat $0$ and $0$ elsewhere. The notation $t^{-n}$ is *defined* here as a name;\nthat it is consistent with the ring multiplication, $t^{-m} \\, t^{-n} =\nt^{-(m+n)}$, is proved in [[lem-laurent-series-ring]].\n\n**Series notation.** Because $\\operatorname{supp} f$ is bounded below, say by\n$m$, one writes\n\n$$f \\;=\\; \\sum_{k \\ge m} f(k)\\, t^{-k},$$\n\na purely notational device: the object is the function $f$, and no convergence\nof any kind is asserted or used.\n\n**Valuation and leading coefficient.** Let $f \\in K$ with $f \\ne 0_K$. Then\n$\\operatorname{supp} f$ is nonempty and bounded below, so it has a least element\n([[lem-laurent-series-ring]]). Define\n\n$$v(f) \\;:=\\; \\min \\operatorname{supp} f \\in \\mathbb{Z}, \\qquad \\operatorname{lc}(f) \\;:=\\; f(v(f)) \\in \\mathbb{R} \\setminus \\{0\\}.$$\n\n$v(f)$ is the **valuation** and $\\operatorname{lc}(f)$ the **leading\ncoefficient** of $f$. Neither is defined at $f = 0_K$, whose support is empty;\nevery statement about $v$ or $\\operatorname{lc}$ in this library carries the\nhypothesis $f \\ne 0_K$ explicitly.\n\n**Order.** The **positive cone** of $K$ is\n\n$$P \\;:=\\; \\{\\, f \\in K : f \\ne 0_K \\text{ and } \\operatorname{lc}(f) > 0 \\,\\},$$\n\nthat is, a nonzero series is positive exactly when its lowest-index nonzero\ncoefficient is a positive real. That $(K, P)$ is an ordered field\n([[def-ordered-field]], [[def-field]]) is [[thm-laurent-ordered-field]], and\nthat every nonzero element of $K$ is invertible is\n[[thm-laurent-series-field]]. As in any ordered field, $f < g$ means\n$g - f \\in P$.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-laurent-ordered-field",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ and let\n$P = \\{\\, f \\in K : f \\ne 0_K \\text{ and } \\operatorname{lc}(f) > 0 \\,\\}$\n([[def-formal-laurent-series]]). Then:\n\n1. $P$ is a positive cone on $K$, so $(K, P)$ is an ordered field\n   ([[def-ordered-field]]), and $f < g$ holds exactly when $g - f \\ne 0_K$ and\n   $\\operatorname{lc}(g - f) > 0$.\n2. For $f \\ne 0_K$ the absolute value ([[def-abs-value]]) satisfies\n   $|f| \\ne 0_K$, $v(|f|) = v(f)$ and\n   $\\operatorname{lc}(|f|) = \\lvert \\operatorname{lc}(f) \\rvert > 0$.\n3. The map $\\iota : \\mathbb{R} \\to K$ sending $c$ to the series with value $c$\n   at index $0$ is an injective ring homomorphism with $\\iota(c) \\in P$ exactly\n   when $c > 0$; and the canonical naturals of $K$ are\n   $n \\cdot 1_K = \\iota(n \\cdot 1_{\\mathbb{R}})$ for every $n \\in \\mathbb{N}$.",
      "uses": [
        "2.1",
        "2.2",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1",
        "2.2",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of\n$x \\in F$ is\n\n$$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "uses": [
        "2.1",
        "2.2",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-laurent-series-ring",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ be as in [[def-formal-laurent-series]], and let\n$f, g \\in K$, with $m, n \\in \\mathbb{Z}$ chosen so that $f(i) = 0$ for all\n$i < m$ and $g(j) = 0$ for all $j < n$. Then:\n\n1. **(Finiteness.)** For every $k \\in \\mathbb{Z}$ the set\n   $S_k := \\{\\, (i,j) \\in \\mathbb{Z} \\times \\mathbb{Z} : i + j = k,\\; f(i)g(j) \\ne 0 \\,\\}$\n   is finite, so $(fg)(k) = \\sum_{i+j=k} f(i)g(j)$ is a finite sum of reals; and\n   $S_k = \\varnothing$ whenever $k < m + n$.\n2. **(Closure.)** $f + g$, $-f$ and $fg$ lie in $K$, with $(f+g)(k) = 0$ for\n   $k < \\min(m,n)$ and $(fg)(k) = 0$ for $k < m + n$.\n3. **(Ring.)** $(K, +, \\cdot\\,, 0_K, 1_K)$ is a commutative ring with identity,\n   and $1_K \\ne 0_K$.\n4. **(Monomials and constants.)** $(t^{-a}h)(k) = h(k-a)$ for every $h \\in K$\n   and all $a, k \\in \\mathbb{Z}$; consequently $t^{-a} \\, t^{-b} = t^{-(a+b)}$\n   for all $a, b \\in \\mathbb{Z}$. Moreover $(\\iota(c)f)(k) = c\\, f(k)$ for all\n   $c \\in \\mathbb{R}$ and $k \\in \\mathbb{Z}$.\n5. **(Least element.)** Every nonempty $S \\subseteq \\mathbb{Z}$ that is bounded\n   below has a least element. In particular $\\operatorname{supp} f$ has a least\n   element whenever $f \\ne 0_K$, so the valuation $v(f)$ and the leading\n   coefficient $\\operatorname{lc}(f)$ of [[def-formal-laurent-series]] are\n   defined.",
      "uses": [
        "2.1",
        "2.2",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-laurent-non-archimedean",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ be the ordered field of\n[[thm-laurent-ordered-field]], and identify a natural number with its image in\n$\\mathbb{Z}$ when it is used as an index. Then:\n\n1. $n \\cdot 1_K < t$ for every $n \\in \\mathbb{N}$; consequently $K$ is **not**\n   Archimedean ([[def-archimedean-field]]).\n2. $0_K < t^{-(k+1)} < t^{-k}$ for every $k \\in \\mathbb{Z}$.\n3. **(Countable cofinality.)** For every $\\varepsilon \\in K$ with\n   $\\varepsilon > 0_K$ there is $k \\in \\mathbb{N}$ with\n   $0_K < t^{-k} < \\varepsilon$; indeed every integer $k > v(\\varepsilon)$\n   works.\n4. **(The monomials measure the valuation.)** For $h \\in K$ and $k \\in\n   \\mathbb{Z}$: if $h(j) = 0$ for every $j \\le k$ then $|h| < t^{-k}$; and\n   conversely, if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-sequences-in-an-ordered-field",
      "source_section": "Definition",
      "quote": "Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and\nits absolute value $|\\cdot|$ ([[def-abs-value]]), and $\\mathbb{N}$ is the set of\nnatural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]).\n\nA **sequence in $F$** is a function $x : \\mathbb{N} \\to F$. We write $x_k$ for\n$x(k)$ and $(x_k)$, or $(x_k)_{k \\in \\mathbb{N}}$, for the function itself.\n\nLet $(x_k)$ be a sequence in $F$.\n\n- $(x_k)$ is **bounded** when there is $M \\in F$ with $|x_k| \\le M$ for every\n  $k \\in \\mathbb{N}$.\n- $(x_k)$ **converges to** $L \\in F$ when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - L| < \\varepsilon \\text{ for all } k \\ge N.$$\n\n  We then write $x_k \\to L$ *in $F$*. The sequence is **convergent in $F$** when\n  it converges to some $L \\in F$, and **divergent in $F$** otherwise.\n- $(x_k)$ is **Cauchy in $F$** when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - x_l| < \\varepsilon \\text{ for all } k, l \\ge N.$$\n\n- $(x_k)$ is **nondecreasing** when $x_j \\le x_k$ for all $j \\le k$,\n  **increasing** when $x_j < x_k$ for all $j < k$, **nonincreasing** when\n  $x_j \\ge x_k$ for all $j \\le k$, **decreasing** when $x_j > x_k$ for all\n  $j < k$, and **monotone** when it is nondecreasing or nonincreasing.\n- For a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, the **subsequence**\n  of $(x_k)$ along $n$ is the composite $(x_{n_j})_{j \\in \\mathbb{N}}$. An\n  element $L \\in F$ is a **subsequential limit** of $(x_k)$ when some\n  subsequence of $(x_k)$ converges to $L$ in $F$.\n\n**Closed intervals and nesting.** For $a, b \\in F$ with $a \\le b$, the **closed\ninterval** with endpoints $a$ and $b$ is\n\n$$[a,b]_F \\;:=\\; \\{\\, x \\in F : a \\le x \\le b \\,\\},$$\n\nand its **length** is $b - a \\ge 0$. A sequence $(I_k)_{k \\in \\mathbb{N}}$ of\nclosed intervals $I_k = [a_k, b_k]_F$ is **nested** when $I_{k+1} \\subseteq I_k$\nfor every $k$. Its **lengths tend to $0$ in $F$** when the sequence\n$(b_k - a_k)_{k \\in \\mathbb{N}}$ converges to $0$ in the sense above, that is,\nwhen for every $\\varepsilon > 0$ in $F$ there is $N \\in \\mathbb{N}$ with\n$b_k - a_k < \\varepsilon$ for all $k \\ge N$ (the absolute value may be dropped\nbecause each length is $\\ge 0$).",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-nat-order",
      "source_section": "Definition",
      "quote": "For $m, n \\in \\mathbb{N}$, define the **order** by",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-nat-linear-order",
      "source_section": "Statement",
      "quote": "The relation $\\le$ on $\\mathbb{N}$, where $m \\le n \\iff \\exists k\\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-natural-numbers",
      "source_section": "Definition",
      "quote": "The set of **natural numbers** is the **smallest inductive set**\n([[def-inductive-set]]),\n\n$$\\mathbb{N} = \\omega := \\bigcap\\,\\{\\, I : I \\text{ is inductive} \\,\\},$$\n\nwhich exists and is itself inductive by [[lem-omega-smallest-inductive]] (the\nAxiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to\nintersect within, and Separation, [[def-axiom-schema-of-separation]], makes the\nintersection a set). On $\\mathbb{N}$ we take\n\n$$0 := \\varnothing, \\qquad \\sigma(n) := n \\cup \\{n\\},$$\n\nthe distinguished element and the successor function. Thus\n$0 = \\varnothing$, $1 = \\{0\\}$, $2 = \\{0, 1\\}$, $3 = \\{0, 1, 2\\}$, and in general\n$n = \\{0, 1, \\dots, n-1\\}$ is the set of its predecessors.",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-nat-embeds-int",
      "source_section": "Statement",
      "quote": "The map $\\iota(n) = [(n,0)]$ is injective and preserves addition,\nmultiplication, and order. Its image is exactly the set of nonnegative\nintegers, so every $x \\ge 0$ in $\\mathbb{Z}$ is $\\iota(k)$ for a unique\nnatural $k$.",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "3.1",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For $k \\in \\mathbb{N}$ put $M_k := \\{\\, N \\in \\mathbb{N} : |f^{(n)} - f^{(m)}| < t^{-(k+1)} \\text{ for all } n, m \\ge N \\,\\}$. Since $t^{-(k+1)} > 0_K$ by [L3] and the sequence is Cauchy, $M_k \\ne \\varnothing$ by [L4]; let $N_k := \\min M_k$, which exists by [L5].",
      "step": "1.1",
      "inputs": [
        "L3",
        "L4",
        "L5",
        "given",
        "construct"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "For every $k \\in \\mathbb{N}$, all $n, m \\ge N_k$ and every $j \\le k$ one has $f^{(n)}(j) = f^{(m)}(j)$: by [step 1.1] $|f^{(n)} - f^{(m)}| < t^{-(k+1)}$, so [L3] gives $(f^{(n)} - f^{(m)})(j) = 0$ for every $j < k+1$, that is for every $j \\le k$, and $(f^{(n)} - f^{(m)})(j) = f^{(n)}(j) - f^{(m)}(j)$ by [L2].",
      "step": "2.1",
      "inputs": [
        "L3",
        "L2",
        "L6",
        "step 1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "$N_a \\le N_b$ whenever $a \\le b$ in $\\mathbb{N}$: for consecutive indices, $t^{-(k+2)} < t^{-(k+1)}$ by [L3], so any $N$ witnessing membership in $M_{k+1}$ also witnesses membership in $M_k$ by transitivity of the order [L2]; hence $M_{k+1} \\subseteq M_k$ and $N_k = \\min M_k \\le \\min M_{k+1} = N_{k+1}$. The general case follows by induction on $b$ [L6].",
      "step": "2.2",
      "inputs": [
        "L3",
        "L2",
        "L6",
        "step 1.1"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "Define $\\kappa : \\mathbb{Z} \\to \\mathbb{N}$ by $\\kappa(j) := j$ for $j \\ge 0$ and $\\kappa(j) := 0$ for $j < 0$, so that $j \\le \\kappa(j)$ for every $j \\in \\mathbb{Z}$; then define $L : \\mathbb{Z} \\to \\mathbb{R}$ by $L(j) := f^{(N_{\\kappa(j)})}(j)$.",
      "step": "2.3",
      "inputs": [
        "L6",
        "step 1.1",
        "construct"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "For every $j \\in \\mathbb{Z}$ and every $n \\ge N_{\\kappa(j)}$ one has $f^{(n)}(j) = L(j)$: apply [step 2.1] with $k = \\kappa(j)$, which is legitimate since $j \\le \\kappa(j)$, to the two indices $n$ and $N_{\\kappa(j)}$, both of which are $\\ge N_{\\kappa(j)}$.",
      "step": "3.1",
      "inputs": [
        "L6",
        "step 2.1",
        "step 2.3"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "$L \\in K$. The series $f^{(N_0)}$ lies in $K$, so by [L1] there is $m_0 \\in \\mathbb{Z}$ with $f^{(N_0)}(j) = 0$ for every $j < m_0$. If $j < m_0$ and $j < 0$ then $\\kappa(j) = 0$, so $L(j) = f^{(N_0)}(j) = 0$; hence $L(j) = 0$ for every $j$ below both $m_0$ and $0$, the support of $L$ is bounded below, and $L \\in K$.",
      "step": "3.2",
      "inputs": [
        "L1",
        "step 2.3"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "For every $k \\in \\mathbb{N}$, every $n \\ge N_k$ and every $j \\le k$ one has $f^{(n)}(j) = L(j)$: if $j \\ge 0$ then $\\kappa(j) = j \\le k$, and if $j < 0$ then $\\kappa(j) = 0 \\le k$, so in both cases $N_{\\kappa(j)} \\le N_k \\le n$ by [step 2.2] and [step 3.1] applies.",
      "step": "4.1",
      "inputs": [
        "L6",
        "step 2.2",
        "step 3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "$(f^{(n)})$ converges to $L$ in $K$. Let $\\varepsilon > 0$ in $K$. By [L3] — this is the countable-cofinality step, and it is the only place where anything special about $K$ is used — there is $k \\in \\mathbb{N}$ with $t^{-k} < \\varepsilon$. Put $N := N_k$. For every $n \\ge N$, [step 4.1] and [L2] give $(f^{(n)} - L)(j) = f^{(n)}(j) - L(j) = 0$ for every $j \\le k$, so $|f^{(n)} - L| < t^{-k}$ by [L3] and therefore $|f^{(n)} - L| < \\varepsilon$ by transitivity [L2]. As $\\varepsilon$ was arbitrary, this is convergence in the sense of [L4].",
      "step": "5.1",
      "inputs": [
        "L3",
        "L2",
        "L4",
        "step 4.1",
        "step 3.2"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "The sequence $(f^{(n)})$ was an arbitrary Cauchy sequence in $K$, and [step 3.2] and [step 5.1] produce an element $L \\in K$ to which it converges; so every Cauchy sequence in $K$ converges in $K$.",
      "step": "6.1",
      "inputs": [
        "step 3.2",
        "step 5.1",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "A sequence is a total function on N, so it has at least its index-0 term; every threshold set M_k is proved nonempty at step 1.1."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The threshold k=0 is included and is used at step 3.2 to obtain one uniform lower support bound for the limit."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "A constant sequence is covered: step 2.1 makes every coefficient stable and step 5.1 gives convergence to that constant series."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "If all terms are 0_K, the constructed L is 0_K at step 2.3 and its support-boundedness and convergence follow at steps 3.2 and 5.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The shift from the strict conclusion j<k+1 to j<=k is made explicitly at step 2.1, and step 5.1 uses vanishing through k to get the strict bound t^-k."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Every M_k is nonempty by Cauchyness and N_k is defined as its least element at step 1.1, so no countable choice is used."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional, so there is no forward implication boundary to audit."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional, so there is no reverse implication boundary to audit."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-formal-laurent-series",
    "declared_target": "def-formal-laurent-series",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "lem-laurent-series-ring",
    "declared_target": "lem-laurent-series-ring",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-laurent-ordered-field",
    "declared_target": "thm-laurent-ordered-field",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "lem-laurent-non-archimedean",
    "declared_target": "lem-laurent-non-archimedean",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-sequences-in-an-ordered-field",
    "declared_target": "def-sequences-in-an-ordered-field",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-natural-numbers",
    "declared_target": "def-natural-numbers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-nat-order",
    "declared_target": "def-nat-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-cauchy-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "lem-nat-embeds-int",
    "declared_target": "lem-nat-embeds-int",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (16)

### `cex-laurent-nested-intervals-empty`

````markdown
---
id: cex-laurent-nested-intervals-empty
kind: counterexample
title: "The unrestricted nested interval property fails in $\\mathbb{R}((t^{-1}))$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation, thm-laurent-ordered-field, lem-laurent-non-archimedean, def-sequences-in-an-ordered-field, cor-laurent-nested-intervals, def-ordered-field, thm-reals-ordered-field, cor-cauchy-reals-lub-complete, thm-of-archimedean, cor-archimedean-reciprocal]
aliases: []
landmark: false
short: "nested intervals in $K$ with empty intersection"
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the *unrestricted* nested interval property holds in
$K = \mathbb{R}((t^{-1}))$, that is, every nested sequence
$I_0 \supseteq I_1 \supseteq \cdots$ of closed intervals
$I_n = [a_n,b_n]_K$ of $K$ ([[def-sequences-in-an-ordered-field]]) has
$\bigcap_n I_n \ne \varnothing$.

The witness is

$$a_n := \iota(n)\, t^{-1}, \qquad b_n := \iota\!\left(\tfrac{1}{n+1}\right) \qquad (n \in \mathbb{N}),$$

where $\iota(c)$ is the constant series with value $c$ at index $0$ and
$\iota(n)$ abbreviates $\iota(n \cdot 1_{\mathbb{R}})$
([[def-formal-laurent-series]]). The intervals $[a_n,b_n]_K$ are nested and
their intersection is empty: a common point would have to be an infinitesimal
of valuation $\ge 1$, because it lies below every positive real constant, and
simultaneously *not* such an element, because it lies above every multiple
$\iota(n)t^{-1}$ of $t^{-1}$.

This refutes only the unrestricted form. The shrinking form, with the additional
hypothesis that the lengths tend to $0$ in $K$, is true
([[cor-laurent-nested-intervals]]), and the lengths here do not tend to $0$.

## Facts & Assumptions

**Given:** $K = \mathbb{R}((t^{-1}))$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$; and the elements $a_n = \iota(n)t^{-1}$, $b_n = \iota(1/(n+1))$ for $n \in \mathbb{N}$.

[L1] For nonzero $h \in K$: $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is nonzero with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$; and $\iota(c)$ for $c \ne 0$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$ ([[def-formal-laurent-series]], [[thm-laurent-ordered-field]]).

[L2] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; exactly one of $f < g$, $f = g$, $g < f$ holds; $\iota$ is a ring homomorphism, so $\iota(c) + \iota(d) = \iota(c+d)$ and $\iota(c)\iota(d) = \iota(cd)$ ([[thm-laurent-ordered-field]], [[def-ordered-field]]).

[L3] For nonzero $f,g \in K$: $fg \ne 0_K$ with $v(fg) = v(f)+v(g)$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f)+\operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)+\operatorname{lc}(g)$ ([[lem-laurent-valuation]], [[lem-laurent-series-ring]]).

[L4] $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$; and if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$ ([[lem-laurent-non-archimedean]]).

[L5] $[a,b]_K = \{x \in K : a \le x \le b\}$ for $a \le b$; a sequence of closed intervals is nested when $I_{n+1} \subseteq I_n$ for every $n$; and its lengths tend to $0$ in $K$ when for every $\varepsilon > 0$ in $K$ they are eventually $< \varepsilon$ ([[def-sequences-in-an-ordered-field]]).

[L6] $\mathbb{R}$ is a complete ordered field, hence Archimedean: for every real $c$ there is a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$, and for every real $c > 0$ there is a natural $n \ge 1$ with $1/n < c$ ([[thm-reals-ordered-field]], [[cor-cauchy-reals-lub-complete]], [[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

## Counterexample

**Proof technique:** direct.

1.1 For $n \ge 1$ the element $a_n = \iota(n)t^{-1}$ is nonzero with $v(a_n) = 0 + 1 = 1$ and $\operatorname{lc}(a_n) = n \cdot 1 = n > 0$, while $a_0 = \iota(0)t^{-1} = 0_K$; and for every $n$ the element $b_n = \iota(1/(n+1))$ is nonzero with $v(b_n) = 0$ and $\operatorname{lc}(b_n) = 1/(n+1) > 0$. Also $a_1 = \iota(1)t^{-1} = t^{-1}$. [given, L1, L2, L3]

2.1 $a_n \le b_n$ for every $n$: for $n = 0$ this is $0_K < \iota(1) = 1_K$, which holds since $\operatorname{lc}(1_K) = 1 > 0$; and for $n \ge 1$ we have $v(b_n) = 0 < 1 = v(-a_n)$ by [step 1.1] and [L3], so $b_n - a_n$ is nonzero with leading coefficient $1/(n+1) > 0$, that is $a_n < b_n$. So each $[a_n,b_n]_K$ is a closed interval. [step 1.1, L1, L2, L3, L5]

2.2 The sequence is nested: $a_{n+1} - a_n = \bigl(\iota(n+1) - \iota(n)\bigr)t^{-1} = \iota(1)t^{-1} = t^{-1} > 0_K$ by [L2] and [L4], so $a_n < a_{n+1}$; and $b_n - b_{n+1} = \iota\bigl(\tfrac{1}{n+1} - \tfrac{1}{n+2}\bigr) = \iota\bigl(\tfrac{1}{(n+1)(n+2)}\bigr)$, which is nonzero with positive leading coefficient, so $b_{n+1} < b_n$. Hence $a_n \le a_{n+1}$ and $b_{n+1} \le b_n$, and every $x$ with $a_{n+1} \le x \le b_{n+1}$ satisfies $a_n \le x \le b_n$, that is $I_{n+1} \subseteq I_n$. [step 1.1, L1, L2, L3, L4, L5]

3.1 Suppose $x \in \bigcap_{n} I_n$. Then $a_1 \le x$, and $a_1 = t^{-1} > 0_K$ by [step 1.1] and [L4], so $x > 0_K$; hence $x \ne 0_K$ and $\operatorname{lc}(x) > 0$ by [L2]. Write $q := v(x)$ and $c := \operatorname{lc}(x) > 0$. [step 1.1, step 2.1, L1, L2, L4, L5]

4.1 $q \ge 1$. If $q < 0$ then $v(x) < 0 = v(-b_0)$ by [step 1.1] and [L3], so $x - b_0$ is nonzero with leading coefficient $c > 0$ and $x > b_0$, contradicting $x \le b_0$. If $q = 0$, use [L6] to fix a natural $n \ge 1$ with $1/n < c$ and set $n' := n - 1$, so that $1/(n'+1) < c$; then $x$ and $-b_{n'}$ both have valuation $0$ with leading coefficients summing to $c - 1/(n'+1) \ne 0$, so by [L3] $x - b_{n'}$ is nonzero with leading coefficient $c - 1/(n'+1) > 0$, giving $x > b_{n'}$ and contradicting $x \le b_{n'}$. By trichotomy on $\mathbb{Z}$ the remaining case is $q \ge 1$. [step 3.1, L1, L2, L3, L5, L6]

4.2 $q < 1$. If $q > 1$ then $v(-a_1) = 1 < q$ by [step 1.1] and [L3], so $x - a_1$ is nonzero with leading coefficient $\operatorname{lc}(-a_1) = -1 < 0$, giving $x < a_1$ and contradicting $a_1 \le x$. If $q = 1$, use [L6] to fix a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$, so $n \ge 1$; then $x$ and $-a_n$ both have valuation $1$ with leading coefficients summing to $c - n \ne 0$, so by [L3] $x - a_n$ is nonzero with leading coefficient $c - n < 0$, giving $x < a_n$ and contradicting $a_n \le x$. Hence $q \ne 1$ and $q \not> 1$. [step 3.1, L1, L2, L3, L5, L6]

5.1 Steps 4.1 and 4.2 are incompatible, so no $x$ lies in every $I_n$: the nested sequence $(I_n)$ of [step 2.1] and [step 2.2] has $\bigcap_n I_n = \varnothing$, which refutes the unrestricted nested interval property for $K$. [step 2.1, step 2.2, step 4.1, step 4.2, L5]

6.1 Consistency with [[cor-laurent-nested-intervals]]: the lengths here do not tend to $0$ in $K$. Indeed $(b_n - a_n)(0) = 1/(n+1) \ne 0$ by [step 1.1], so by [L4] the inequality $|b_n - a_n| < t^{-1}$ fails for every $n$; taking $\varepsilon = t^{-1}$ shows the shrinking hypothesis of [L5] is not satisfied. [step 1.1, step 2.1, L4, L5] ∎

## Remarks

- **What the counterexample really exhibits.** It is a *gap* in $K$. Each of the
  two requirements is satisfiable on its own — $\iota(1)$ lies above every
  $\iota(n)t^{-1}$, and $0_K$ lies below every $\iota(1/(n+1))$ — yet steps 4.1
  and 4.2 show that nothing in $K$ satisfies both at once. Both sides of the gap
  are approached along countable sequences, which is why intervals indexed by
  $\mathbb{N}$ can straddle it, and the lengths cannot shrink across it: they
  stay of valuation $0$ while the left endpoints stay of valuation $1$.

- **Why this does not contradict Cauchy completeness.** $(a_n)$ is not Cauchy in
  $K$: consecutive terms differ by exactly $t^{-1}$, so the Cauchy condition
  fails at $\varepsilon = t^{-1}$. Cauchy completeness
  ([[thm-laurent-cauchy-complete]]) constrains sequences whose terms crowd
  together in the order of $K$, and neither endpoint sequence here does.

- **Consequence for the equivalence of completeness properties.** Since $K$ is
  Cauchy complete but has neither the least-upper-bound property
  ([[cor-laurent-not-lub-complete]]) nor the unrestricted nested interval
  property, any statement of the form "nested intervals imply least upper
  bounds" has to say *which* nested interval property it means. The form that
  $K$ does satisfy is the shrinking one, and that is the form for which $K$ is
  a counterexample to the implication.
````

### `cor-laurent-nested-intervals`

````markdown
---
id: cor-laurent-nested-intervals
kind: corollary
title: "$\\mathbb{R}((t^{-1}))$ has the nested interval property for lengths tending to $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sequences-in-an-ordered-field, thm-laurent-cauchy-complete, thm-laurent-ordered-field, lem-laurent-non-archimedean, def-formal-laurent-series, def-ordered-field, def-abs-value, lem-of-abs-value, lem-of-add-order, thm-induction-principle, def-nat-order, thm-nat-linear-order, def-natural-numbers]
aliases: []
landmark: true
short: "shrinking nested intervals in $K$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Cantor theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Cantor_theorem"
    - title: "Cauchy sequences in ordered fields (University of Tennessee notes)"
      url: "https://web.math.utk.edu/~freire/teaching/m300f12/m300s12handout7.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ and let $(I_n)_{n \in \mathbb{N}}$ with
$I_n = [a_n, b_n]_K$ be a nested sequence of closed intervals in $K$ whose
lengths tend to $0$ in $K$, that is, for every $\varepsilon > 0$ in $K$ there is
$N$ with $b_n - a_n < \varepsilon$ for all $n \ge N$
([[def-sequences-in-an-ordered-field]]). Then

$$\bigcap_{n \in \mathbb{N}} I_n$$

contains exactly one element of $K$.

**The hypothesis that the lengths tend to $0$ may not be dropped**: this is the
nested interval property in its *shrinking* form only, and nothing on this page
establishes the unrestricted form for $K$. The remarks below record what happens
without the hypothesis.

## Facts & Assumptions

**Given:** A nested sequence $(I_n)_{n \in \mathbb{N}}$ of closed intervals $I_n = [a_n,b_n]_K$ in $K$, so $a_n \le b_n$ and $I_{n+1} \subseteq I_n$ for every $n$, whose lengths tend to $0$ in $K$.

[L1] $[a,b]_K = \{x \in K : a \le x \le b\}$ for $a \le b$; a sequence $(x_n)$ in $K$ is Cauchy in $K$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - x_m| < \varepsilon$ for all $n,m \ge N$, and converges to $L$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - L| < \varepsilon$ for all $n \ge N$; the lengths $b_n - a_n$ tend to $0$ when for every $\varepsilon > 0$ in $K$ they are eventually $< \varepsilon$ ([[def-sequences-in-an-ordered-field]]).

[L2] Every Cauchy sequence in $K$ converges in $K$ ([[thm-laurent-cauchy-complete]]).

[L3] $K$ is an ordered field ([[thm-laurent-ordered-field]], [[def-ordered-field]]), so its order is total and transitive and $x < y$ means $0 < y - x$. Compatibility with addition is used below in its NONSTRICT form, $x \le y \Rightarrow x + z \le y + z$, whereas [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + z < y + z$, and $x < y$ with $z < w$ giving $x + z < y + w$); the nonstrict form is the first strict form together with the case $x = y$, where the two sides are equal, the order being total ([[def-ordered-field]]).

[L4] $|z| \ge 0$, $|z| = 0$ only for $z = 0$, and $|z|$ equals $z$ or $-z$; so $|z| = z$ when $z \ge 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L5] The order on $\mathbb{N}$ is total ([[thm-nat-linear-order]], [[def-nat-order]]) and induction is available ([[thm-induction-principle]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For each $n$, the endpoints $a_{n+1}$ and $b_{n+1}$ belong to $I_{n+1}$ because $a_{n+1} \le b_{n+1}$, and $I_{n+1} \subseteq I_n$, so both belong to $I_n$; by [L1] this says $a_n \le a_{n+1}$ and $b_{n+1} \le b_n$. Hence $a_n \le a_{n+1} \le b_{n+1} \le b_n$. [given, L1, L3]

1.2 The intersection contains at most one element. Suppose $x, y \in \bigcap_n I_n$ with $x \ne y$, so $|x - y| > 0$ by [L4]. For each $n$ both $x$ and $y$ lie in $[a_n,b_n]_K$, so $x - y \le b_n - a_n$ and $y - x \le b_n - a_n$ by [L1] and [L3], and since $|x-y|$ is one of $x-y$, $y-x$ by [L4] we get $|x - y| \le b_n - a_n$ for every $n$. Applying the shrinking hypothesis with $\varepsilon := |x-y|$ produces some $n$ with $b_n - a_n < |x-y|$, a contradiction. [given, L1, L3, L4]

2.1 Whenever $n \le m$ one has $a_n \le a_m \le b_m \le b_n$: this is [step 1.1] for $m = n+1$, it is trivial for $m = n$, and the general case follows by induction on $m$ using transitivity of the order. [step 1.1, L3, L5]

3.1 $(a_n)_{n \in \mathbb{N}}$ is Cauchy in $K$. Let $\varepsilon > 0$ in $K$ and take $N$ with $b_n - a_n < \varepsilon$ for all $n \ge N$. Let $n, m \ge N$; by [L5] we may assume $n \le m$, the other case being the same with the roles exchanged. By [step 2.1], $a_n \le a_m \le b_m \le b_n$, so $0 \le a_m - a_n \le b_n - a_n < \varepsilon$, and $|a_m - a_n| = a_m - a_n < \varepsilon$ by [L4]. [step 2.1, given, L1, L3, L4, L5]

4.1 By [L2] there is $L \in K$ with $a_n \to L$ in $K$. [step 3.1, L2]

5.1 $a_n \le L$ for every $n$. Otherwise $L < a_n$ for some $n$; put $\varepsilon := a_n - L > 0$ and use [step 4.1] to fix $N$ with $|a_m - L| < \varepsilon$ for all $m \ge N$. Pick $m$ with $m \ge N$ and $m \ge n$ ([L5]). By [step 2.1], $a_n \le a_m$, so $a_m - L \ge a_n - L = \varepsilon > 0$ and hence $|a_m - L| = a_m - L \ge \varepsilon$ by [L4], contradicting $|a_m - L| < \varepsilon$. [step 2.1, step 4.1, L1, L3, L4, L5]

5.2 $L \le b_n$ for every $n$. Otherwise $b_n < L$ for some $n$; put $\varepsilon := L - b_n > 0$ and fix $N$ with $|a_m - L| < \varepsilon$ for all $m \ge N$. Pick $m$ with $m \ge N$ and $m \ge n$. By [step 2.1], $a_m \le b_m \le b_n$, so $L - a_m \ge L - b_n = \varepsilon > 0$ and hence $|a_m - L| = L - a_m \ge \varepsilon$ by [L4], again a contradiction. [step 2.1, step 4.1, L1, L3, L4, L5]

6.1 By [step 5.1] and [step 5.2], $a_n \le L \le b_n$ for every $n$, so $L \in \bigcap_n I_n$ by [L1] and the intersection is nonempty; by [step 1.2] it has no second element. Hence $\bigcap_n I_n = \{L\}$. [step 5.1, step 5.2, step 1.2, L1] ∎

## Remarks

- **This is the shrinking form, and the restriction is real.** The unrestricted nested interval property — every nested sequence of nonempty closed intervals meets — is **false** in $K$, and [[cex-laurent-nested-intervals-empty]] exhibits a nested sequence with empty intersection. So the hypothesis here is not a convenience of the proof, and no item on this page may be cited for the unrestricted form.

- **A trap in the hypothesis: "lengths $2/n$" does not mean shrinking.** The condition is that the lengths tend to $0$ *in the order of $K$*, tested against every positive $\varepsilon \in K$, not merely against positive real constants. A nested sequence whose $n$-th length is the constant series $\iota(2/(n+1))$ does **not** satisfy it: since $\iota(c)$ takes the nonzero value $c$ at index $0$, clause 4 of [[lem-laurent-non-archimedean]] forbids $|\iota(c)| < t^{-1}$, so no such length ever gets below $\varepsilon = t^{-1}$. Real-indexed shrinking is strictly weaker than shrinking in $K$, and a proof that assumed the former would be proving a different theorem.

- **Where completeness enters.** Exactly once, at [step 4.1]. Everything before it is monotonicity bookkeeping valid in any ordered field, and everything after it uses only the order and the absolute value. That is why the corollary is a corollary of [[thm-laurent-cauchy-complete]] and not an independent argument about series.
````

### `cor-laurent-not-lub-complete`

````markdown
---
id: cor-laurent-not-lub-complete
kind: corollary
title: "$\\mathbb{R}((t^{-1}))$ does not have the least-upper-bound property; its canonical naturals have no supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-valuation, thm-laurent-ordered-field, lem-laurent-non-archimedean, thm-of-archimedean, def-complete-ordered-field, def-archimedean-field, def-ordered-field, thm-reals-ordered-field, cor-cauchy-reals-lub-complete]
aliases: []
landmark: true
short: "$K$ is not complete"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Complete ordered fields are Archimedean (Rutgers Math 311 notes)"
      url: "https://sites.math.rutgers.edu/~sussmann/slides-math-311-2020-September-21.pdf"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

$K = \mathbb{R}((t^{-1}))$ is an ordered field that is **not** a complete
ordered field ([[def-complete-ordered-field]]): it does not have the
least-upper-bound property.

The failure is witnessed concretely by the set of canonical naturals
$$A \;:=\; \{\, n \cdot 1_K \;:\; n \in \mathbb{N} \,\} \;\subseteq\; K,$$
which is nonempty and bounded above by $t$, yet has no least upper bound in
$K$: every upper bound of $A$ admits a strictly smaller upper bound.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$; the set $A = \{\, n \cdot 1_K : n \in \mathbb{N} \,\}$.

[L1] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; the canonical naturals are $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$; and for $c \ne 0$ the constant $\iota(c)$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$ ([[thm-laurent-ordered-field]]).

[L2] $n \cdot 1_K < t$ for every $n \in \mathbb{N}$, and $K$ is not Archimedean ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L3] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L4] $F$ is a complete ordered field when every nonempty $S \subseteq F$ that is bounded above has a least upper bound in $F$, a least upper bound being an upper bound $\le$ every upper bound ([[def-complete-ordered-field]]).

[L5] For nonzero $h \in K$: $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is nonzero with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$ ([[def-formal-laurent-series]]).

[L6] For nonzero $f, g \in K$: $fg \ne 0_K$ with $v(fg) = v(f)+v(g)$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f)+\operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)+\operatorname{lc}(g)$ ([[lem-laurent-valuation]]).

[L7] $\mathbb{R}$ is a complete ordered field and hence Archimedean: for every real $c$ there is a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$ ([[thm-reals-ordered-field]], [[cor-cauchy-reals-lub-complete]], [[thm-of-archimedean]]).

[L8] In an ordered field exactly one of $x < y$, $x = y$, $y < x$ holds ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $K$ is an ordered field that is not Archimedean, while by [L3] every complete ordered field is Archimedean; so $K$ is not a complete ordered field, that is, $K$ does not have the least-upper-bound property of [L4]. [L1, L2, L3, L4]

1.2 $A$ is nonempty, since $0 \cdot 1_K = 0_K$ and $1 \cdot 1_K = 1_K$ lie in it, and it is bounded above by $t$, since $n \cdot 1_K < t$ for every natural $n$ by [L2]. [L1, L2, L4]

1.3 Let $s \in K$ be any upper bound of $A$. Since $1_K \in A$ we have $1_K \le s$, and $1_K > 0_K$ because $\operatorname{lc}(1_K) = 1 > 0$; so $s > 0_K$, hence $s \ne 0_K$ and $\operatorname{lc}(s) > 0$. [L1, L4, L5]

2.1 $v(s) < 0$. Indeed, if $v(s) > 0$ then $v(1_K) = 0 < v(s) = v(-s)$ by [L6], so $1_K - s$ is nonzero with leading coefficient $\operatorname{lc}(1_K) = 1 > 0$, giving $s < 1_K$ and contradicting $1_K \le s$ by [L8]. And if $v(s) = 0$, write $c := \operatorname{lc}(s) > 0$ and use [L7] to fix a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$; then $\iota(n \cdot 1_{\mathbb{R}}) - s$ has both valuations equal to $0$ and leading coefficients summing to $n \cdot 1_{\mathbb{R}} - c \ne 0$, so by [L6] it is nonzero with leading coefficient $n \cdot 1_{\mathbb{R}} - c > 0$, giving $n \cdot 1_K > s$ and contradicting that $s$ is an upper bound of $A$. [step 1.3, L1, L4, L5, L6, L7, L8]

3.1 Put $r := v(s) < 0$ and $c := \operatorname{lc}(s) > 0$, and set $s' := \iota(c/2)\, t^{-r} \in K$. By [L1], [L5] and [L6], $s'$ is nonzero with $v(s') = 0 + r = r$ and $\operatorname{lc}(s') = (c/2)\cdot 1 = c/2 > 0$. [step 1.3, step 2.1, L1, L5, L6]

4.1 $s'$ is an upper bound of $A$: it satisfies $s' > 0_K$ by [L1], which settles $n = 0$; and for $n \ge 1$ the element $n \cdot 1_K$ is nonzero with valuation $0$ by [L1], so $v(s') = r < 0 = v(-(n \cdot 1_K))$ and [L6] makes $s' - n\cdot 1_K$ nonzero with leading coefficient $c/2 > 0$, that is $n \cdot 1_K < s'$. [step 3.1, L1, L5, L6]

4.2 $s' < s$: both $s$ and $-s'$ are nonzero of valuation $r$, and their leading coefficients sum to $c - c/2 = c/2 \ne 0$, so by [L6] the difference $s - s'$ is nonzero with leading coefficient $c/2 > 0$. [step 3.1, L1, L6]

5.1 Steps 4.1 and 4.2 show that every upper bound $s$ of $A$ admits an upper bound $s'$ with $s' < s$, so no upper bound of $A$ is least and $A$ has no least upper bound in $K$; with [step 1.2] this exhibits a nonempty subset of $K$ that is bounded above and has no supremum, which is the concrete form of the failure already established in [step 1.1]. [step 1.1, step 1.2, step 4.1, step 4.2, L4] ∎

## Remarks

- **Two proofs of one fact, kept apart on purpose.** [step 1.1] is the abstract
  route: non-Archimedean ordered fields cannot be complete, by the contrapositive
  of [[thm-of-archimedean]], and nothing about Laurent series enters it. The rest
  of the proof is the concrete route, and it names the failing set. Only the
  concrete route tells the reader *what* has no supremum, which matters because
  the same field will be shown to be sequentially Cauchy complete in
  [[thm-laurent-cauchy-complete]]: the reader is entitled to see the set on which
  the two notions of completeness disagree.

- **The halving is not special.** Any real $\lambda$ with $0 < \lambda < 1$
  would serve in place of $1/2$: the only properties used are that
  $\lambda c > 0$, so the smaller element is still positive of valuation $r < 0$
  and therefore still above every canonical natural, and that
  $c - \lambda c \ne 0$, so the descent is strict. Both hold for every such
  $\lambda$, which is why the set of upper bounds of $A$ has no least element
  rather than merely failing to contain one particular candidate.
````

### `def-abs-value`

````markdown
---
id: def-abs-value
kind: definition
title: "Absolute value in an ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: []
landmark: false
short: "|x|"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dartmouth College analysis notes: Absolute value"
      url: "https://math.dartmouth.edu/~m63w21/lecture-m63-02.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

## Remarks

- The distance between $x$ and $y$ is $|x - y|$.
- The basic algebraic properties ($|x| \ge 0$, $|x| = 0 \iff x = 0$,
  $|xy| = |x|\,|y|$, and the characterisation $|x| < c \iff -c < x < c$) are
  established in [[lem-of-abs-value]]; the triangle inequality is
  [[lem-of-triangle-inequality]].
````

### `def-formal-laurent-series`

````markdown
---
id: def-formal-laurent-series
kind: definition
title: "The formal Laurent series $\\mathbb{R}((t^{-1}))$: support bounded below, valuation, leading coefficient"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, thm-reals-ordered-field, def-integers, def-int-order, def-int-operations, thm-int-ordered-ring, def-field, def-ordered-field]
justified_by: [lem-laurent-series-ring, thm-laurent-series-field, thm-laurent-ordered-field]
aliases: []
landmark: true
short: "$\\mathbb{R}((t^{-1}))$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the field of real numbers with its order
([[def-real-numbers]], [[thm-reals-ordered-field]]) and $\mathbb{Z}$ is the
totally ordered commutative ring of integers ([[def-integers]],
[[def-int-operations]], [[def-int-order]], [[thm-int-ordered-ring]]).

For a function $f : \mathbb{Z} \to \mathbb{R}$ write

$$\operatorname{supp} f \;:=\; \{\, k \in \mathbb{Z} : f(k) \ne 0 \,\},$$

and say that $\operatorname{supp} f$ is **bounded below** when there is
$m \in \mathbb{Z}$ with $f(k) = 0$ for every $k < m$. The set of **formal Laurent
series in $t^{-1}$ over $\mathbb{R}$** is

$$K \;=\; \mathbb{R}((t^{-1})) \;:=\; \{\, f : \mathbb{Z} \to \mathbb{R} \;\mid\; \operatorname{supp} f \text{ is bounded below} \,\},$$

equipped with

$$(f + g)(k) := f(k) + g(k), \qquad (fg)(k) := \sum_{i + j = k} f(i)\,g(j),$$

where the product sum ranges over the pairs $(i,j) \in \mathbb{Z} \times
\mathbb{Z}$ with $i + j = k$ and $f(i)g(j) \ne 0$. That set of pairs is finite
for every $k$, and $f + g$ and $fg$ again lie in $K$: this is
[[lem-laurent-series-ring]], which also proves that $K$ with these operations is
a commutative ring whose zero $0_K$ is the constant function $0$ and whose
identity $1_K$ is the function taking the value $1$ at $0$ and $0$ elsewhere.

**Distinguished elements.** For $n \in \mathbb{Z}$ let $t^{-n} \in K$ be the
function taking the value $1$ at $n$ and $0$ at every other index; so
$t^{0} = 1_K$, and $t := t^{-(-1)}$ is the function taking the value $1$ at $-1$.
For $c \in \mathbb{R}$ let $\iota(c) \in K$ be the function taking the value $c$
at $0$ and $0$ elsewhere. The notation $t^{-n}$ is *defined* here as a name;
that it is consistent with the ring multiplication, $t^{-m} \, t^{-n} =
t^{-(m+n)}$, is proved in [[lem-laurent-series-ring]].

**Series notation.** Because $\operatorname{supp} f$ is bounded below, say by
$m$, one writes

$$f \;=\; \sum_{k \ge m} f(k)\, t^{-k},$$

a purely notational device: the object is the function $f$, and no convergence
of any kind is asserted or used.

**Valuation and leading coefficient.** Let $f \in K$ with $f \ne 0_K$. Then
$\operatorname{supp} f$ is nonempty and bounded below, so it has a least element
([[lem-laurent-series-ring]]). Define

$$v(f) \;:=\; \min \operatorname{supp} f \in \mathbb{Z}, \qquad \operatorname{lc}(f) \;:=\; f(v(f)) \in \mathbb{R} \setminus \{0\}.$$

$v(f)$ is the **valuation** and $\operatorname{lc}(f)$ the **leading
coefficient** of $f$. Neither is defined at $f = 0_K$, whose support is empty;
every statement about $v$ or $\operatorname{lc}$ in this library carries the
hypothesis $f \ne 0_K$ explicitly.

**Order.** The **positive cone** of $K$ is

$$P \;:=\; \{\, f \in K : f \ne 0_K \text{ and } \operatorname{lc}(f) > 0 \,\},$$

that is, a nonzero series is positive exactly when its lowest-index nonzero
coefficient is a positive real. That $(K, P)$ is an ordered field
([[def-ordered-field]], [[def-field]]) is [[thm-laurent-ordered-field]], and
that every nonzero element of $K$ is invertible is
[[thm-laurent-series-field]]. As in any ordered field, $f < g$ means
$g - f \in P$.

## Remarks

- **Why the support must be bounded below.** It is exactly what makes the
  product a finite sum. If arbitrary functions $\mathbb{Z} \to \mathbb{R}$ were
  admitted, the defining sum for $(fg)(k)$ would range over an infinite set of
  pairs and would denote nothing, since $K$ carries no notion of convergence.
  The condition is preserved by both operations, which is the content of
  [[lem-laurent-series-ring]].

- **Indices run over all of $\mathbb{Z}$, and the edge cases are real.** The zero
  series has empty support and no valuation. A nonzero constant series
  $\iota(c)$ has $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$, so the
  index $k = 0$ is an ordinary index and not a boundary. Negative indices are
  admitted, and they are what makes $t = t^{-(-1)}$, whose support is $\{-1\}$,
  an element of $K$; a series may have finitely many terms of negative index but
  never infinitely many.

- **The order is not the coefficientwise order.** Two series are compared by
  their *lowest* differing coefficient, not by all of them at once, and this is
  what makes $t^{-1}$ smaller than every positive real constant while $t$ is
  larger than every real constant. The consequences are drawn in
  [[lem-laurent-non-archimedean]].

- **Relation to the rational functions.** The ordered field $\mathbb{R}(t)$ of
  [[cex-ordered-field-not-archimedean]], ordered so that $f > 0$ exactly when
  $f(x) > 0$ for all sufficiently large real $x$, is the standard first example
  of a non-Archimedean ordered field, and standard treatments identify it with a
  subfield of $K$ by expanding each rational function at infinity. **This page
  neither constructs that identification nor uses it**, and no item here may be
  cited for it: everything proved about $K$ below is proved from the definition
  above and nothing else. What the two objects share, and all that is used here,
  is the idea of ordering by behaviour at infinity.
````

### `def-nat-order`

````markdown
---
id: def-nat-order
kind: definition
title: "Order on the natural numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition]
aliases: []
landmark: false
short: "$m\\le n\\iff\\exists k\\,(m+k=n)$"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.2 (Ordering of the naturals)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Definition

For $m, n \in \mathbb{N}$, define the **order** by

$$m \le n \iff \exists k \in \mathbb{N}\ (m + k = n),$$

and the **strict order** by $m < n \iff (m \le n \text{ and } m \neq n)$, using
addition ([[def-nat-addition]]).

## Remarks

Read $m \le n$ as "$n$ is $m$ plus something": the gap $k$ with $m + k = n$ is
unique when it exists (by commutativity and cancellation,
[[lem-nat-add-commutative]], [[lem-nat-add-cancellative]]) and is
written $n - m$ once subtraction is available. That $\le$ is genuinely a linear
order, reflexive, antisymmetric, transitive, and total, is proved in
[[thm-nat-linear-order]] and [[lem-nat-trichotomy]]; compatibility with the
arithmetic ([[lem-nat-order-add-compatible]],
[[lem-nat-order-mult-compatible]]) and discreteness
($m < n \iff \sigma(m) \le n$, [[lem-nat-discrete]]) follow.

In the von Neumann model this order coincides with membership and inclusion:
$m \le n \iff m \subseteq n$ and $m < n \iff m \in n$, matching the picture of
each natural number as the set $\{0, 1, \dots, n-1\}$ of its predecessors
([[def-natural-numbers]]). That coincidence is not proved here; it is derived
from the additive definition above on a later page. The least-element property of every nonempty subset,
the **well-ordering principle** ([[thm-well-ordering-principle]]), is the deepest
consequence.
````

### `def-natural-numbers`

````markdown
---
id: def-natural-numbers
kind: definition
title: "The natural numbers $\\mathbb{N}$ (von Neumann)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inductive-set, lem-omega-smallest-inductive, def-peano-system,
       def-axiom-of-infinity, def-axiom-schema-of-separation]
aliases: [def-omega, natural-numbers]
landmark: true
short: "$\\mathbb{N}=\\omega$, smallest inductive set"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

The set of **natural numbers** is the **smallest inductive set**
([[def-inductive-set]]),

$$\mathbb{N} = \omega := \bigcap\,\{\, I : I \text{ is inductive} \,\},$$

which exists and is itself inductive by [[lem-omega-smallest-inductive]] (the
Axiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to
intersect within, and Separation, [[def-axiom-schema-of-separation]], makes the
intersection a set). On $\mathbb{N}$ we take

$$0 := \varnothing, \qquad \sigma(n) := n \cup \{n\},$$

the distinguished element and the successor function. Thus
$0 = \varnothing$, $1 = \{0\}$, $2 = \{0, 1\}$, $3 = \{0, 1, 2\}$, and in general
$n = \{0, 1, \dots, n-1\}$ is the set of its predecessors.

## Remarks

"Smallest" means $\omega \subseteq I$ for every inductive set $I$. This minimality
is exactly the **induction principle** ([[thm-induction-principle]]): a subset of
$\mathbb{N}$ that contains $0$ and is closed under $\sigma$ is itself inductive,
hence contains $\omega = \mathbb{N}$, hence equals $\mathbb{N}$.

With $0$ and $\sigma$ so defined, $(\mathbb{N}, 0, \sigma)$ satisfies the Peano
axioms ([[def-peano-system]], proved in [[thm-omega-is-peano-system]]), so it is a
**model** of the abstract natural numbers. By categoricity
([[thm-peano-categoricity]]) any other model is uniquely isomorphic to it, so the
particular set-theoretic encoding chosen here is immaterial to every arithmetic
and order property that follows: those are developed from the Peano axioms, not
from the sets themselves.
````

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
````

### `def-sequences-in-an-ordered-field`

````markdown
---
id: def-sequences-in-an-ordered-field
kind: definition
title: "Sequences, convergence, Cauchyness, monotonicity, boundedness and closed intervals in an arbitrary ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordered-field, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-natural-numbers, def-nat-order, def-sequence, def-real-limit, def-monotone-sequence, def-interval, def-subsequential-limit]
aliases: []
landmark: false
short: "sequences in an ordered field $F$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Cauchy sequences in ordered fields (University of Tennessee notes)"
      url: "https://web.math.utk.edu/~freire/teaching/m300f12/m300s12handout7.pdf"
pipeline_run: null
---

## Definition

Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and
its absolute value $|\cdot|$ ([[def-abs-value]]), and $\mathbb{N}$ is the set of
natural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]).

A **sequence in $F$** is a function $x : \mathbb{N} \to F$. We write $x_k$ for
$x(k)$ and $(x_k)$, or $(x_k)_{k \in \mathbb{N}}$, for the function itself.

Let $(x_k)$ be a sequence in $F$.

- $(x_k)$ is **bounded** when there is $M \in F$ with $|x_k| \le M$ for every
  $k \in \mathbb{N}$.
- $(x_k)$ **converges to** $L \in F$ when

  $$\text{for every } \varepsilon \in F \text{ with } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } |x_k - L| < \varepsilon \text{ for all } k \ge N.$$

  We then write $x_k \to L$ *in $F$*. The sequence is **convergent in $F$** when
  it converges to some $L \in F$, and **divergent in $F$** otherwise.
- $(x_k)$ is **Cauchy in $F$** when

  $$\text{for every } \varepsilon \in F \text{ with } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } |x_k - x_l| < \varepsilon \text{ for all } k, l \ge N.$$

- $(x_k)$ is **nondecreasing** when $x_j \le x_k$ for all $j \le k$,
  **increasing** when $x_j < x_k$ for all $j < k$, **nonincreasing** when
  $x_j \ge x_k$ for all $j \le k$, **decreasing** when $x_j > x_k$ for all
  $j < k$, and **monotone** when it is nondecreasing or nonincreasing.
- For a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, the **subsequence**
  of $(x_k)$ along $n$ is the composite $(x_{n_j})_{j \in \mathbb{N}}$. An
  element $L \in F$ is a **subsequential limit** of $(x_k)$ when some
  subsequence of $(x_k)$ converges to $L$ in $F$.

**Closed intervals and nesting.** For $a, b \in F$ with $a \le b$, the **closed
interval** with endpoints $a$ and $b$ is

$$[a,b]_F \;:=\; \{\, x \in F : a \le x \le b \,\},$$

and its **length** is $b - a \ge 0$. A sequence $(I_k)_{k \in \mathbb{N}}$ of
closed intervals $I_k = [a_k, b_k]_F$ is **nested** when $I_{k+1} \subseteq I_k$
for every $k$. Its **lengths tend to $0$ in $F$** when the sequence
$(b_k - a_k)_{k \in \mathbb{N}}$ converges to $0$ in the sense above, that is,
when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with
$b_k - a_k < \varepsilon$ for all $k \ge N$ (the absolute value may be dropped
because each length is $\ge 0$).

## Remarks

- **The thresholds range over $F$, and that is not a stylistic choice.** In an
  Archimedean ordered field one may equivalently test $\varepsilon$ over the
  canonical rationals, and that is what the $\mathbb{R}$-specific
  [[def-real-limit]] does; the two agree there, as the remark on rational and
  real $\varepsilon$ in [[def-sequence]] records. In a general $F$ they do
  **not** agree, because the canonical rationals need not be cofinal below the
  positive elements. A concrete failure lives on this page: in
  $\mathbb{R}((t^{-1}))$ every positive rational constant exceeds $t^{-1}$
  (clause 4 of [[lem-laurent-non-archimedean]], since a nonzero constant is
  nonzero at index $0$), so the sequence taking the value $0$ at even indices
  and $t^{-1}$ at odd indices would satisfy the Cauchy condition read with
  rational thresholds only, while failing it at $\varepsilon = t^{-2}$, where
  consecutive terms differ by $t^{-1} > t^{-2}$; and it has no limit at all,
  since a convergent sequence is Cauchy by the triangle inequality. Every
  definition above therefore
  quantifies over $\varepsilon \in F$, and no proof in this library may
  substitute a rational threshold in a field that has not been shown to be
  Archimedean.

- **These are the $\mathbb{R}$-notions with $\mathbb{R}$ replaced by $F$, and
  nothing more.** Sequence, tail, subsequence and boundedness are
  [[def-sequence]]; monotonicity is [[def-monotone-sequence]]; subsequential
  limits are [[def-subsequential-limit]]; convergence and Cauchyness are
  [[def-real-limit]]; closed intervals are the form $[a,b]$ of
  [[def-interval]]. Only the field in which the inequalities are read has
  changed.

- **Transfer of theorems is not automatic, and citing an $\mathbb{R}$-item for a
  general $F$ is a citation error.** A result proved about sequences of reals is
  a statement about $\mathbb{R}$. Many such proofs use only the ordered-field
  axioms and go through for any $F$ verbatim, and many others use completeness
  or the Archimedean property and do not. Which is which has to be settled by
  reading the proof; until an item is stated for a general ordered field, it may
  not be cited for one.

- **Limits are unique in any ordered field.** If $x_k \to L$ and $x_k \to L'$
  in $F$ with $L \ne L'$, put $\varepsilon := |L - L'|/2$, which is positive
  because $|L-L'| > 0$ ([[lem-of-abs-value]]) and $2 = 1 + 1 > 0$. Choose $N$
  beyond which both $|x_k - L| < \varepsilon$ and $|x_k - L'| < \varepsilon$
  hold, and take any $k \ge N$: the triangle inequality
  ([[lem-of-triangle-inequality]], proved for an arbitrary ordered field) gives
  $|L - L'| \le |L - x_k| + |x_k - L'| < 2\varepsilon = |L - L'|$, which is
  impossible. So the limit, when it exists, is unique, and the notation
  $\lim_k x_k$ is unambiguous. No completeness and no Archimedean hypothesis is
  used.

- **Indexing starts at $0$**, as everywhere in this library, because
  $0 \in \mathbb{N}$ ([[def-natural-numbers]]). A nested sequence of intervals
  therefore begins with $I_0$, and a statement about "the first $N$ terms" means
  the indices $0, \dots, N-1$.
````

### `lem-laurent-non-archimedean`

````markdown
---
id: lem-laurent-non-archimedean
kind: lemma
title: "$\\mathbb{R}((t^{-1}))$ is non-Archimedean, and the monomials $t^{-k}$ are cofinal below its positive elements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-valuation, thm-laurent-ordered-field, def-archimedean-field, def-ordered-field, def-abs-value, thm-int-ordered-ring, lem-nat-embeds-int, def-int-order]
aliases: []
landmark: true
short: "$K$ is non-Archimedean"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ be the ordered field of
[[thm-laurent-ordered-field]], and identify a natural number with its image in
$\mathbb{Z}$ when it is used as an index. Then:

1. $n \cdot 1_K < t$ for every $n \in \mathbb{N}$; consequently $K$ is **not**
   Archimedean ([[def-archimedean-field]]).
2. $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$.
3. **(Countable cofinality.)** For every $\varepsilon \in K$ with
   $\varepsilon > 0_K$ there is $k \in \mathbb{N}$ with
   $0_K < t^{-k} < \varepsilon$; indeed every integer $k > v(\varepsilon)$
   works.
4. **(The monomials measure the valuation.)** For $h \in K$ and $k \in
   \mathbb{Z}$: if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$; and
   conversely, if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$.

[L1] For nonzero $h \in K$, $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere, so $t^{-a} \ne 0_K$ with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$; and $t = t^{-(-1)}$ ([[def-formal-laurent-series]]).

[L2] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; for $f \ne 0_K$ one has $|f| \ne 0_K$, $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) > 0$; and $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$, which for $n \ge 1$ is nonzero with $v = 0$ ([[thm-laurent-ordered-field]], [[def-abs-value]]).

[L3] For nonzero $f, g \in K$: $-f \ne 0_K$ with $v(-f) = v(f)$; and if $v(f) < v(g)$ then $f + g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$ ([[lem-laurent-valuation]]).

[L4] An ordered field $F$ is Archimedean when for every $x \in F$ there is a natural $n$ with $x < n \cdot 1_F$; and in an ordered field exactly one of $x < y$, $x = y$, $y < x$ holds ([[def-archimedean-field]], [[def-ordered-field]]).

[L5] The order on $\mathbb{Z}$ is total, and every integer $\ge 0$ is the image of a unique natural number; so for every $m \in \mathbb{Z}$ there is a natural $k$ whose image exceeds $m$ ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 For every $k \in \mathbb{Z}$ the monomial $t^{-k}$ is nonzero with $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-k} > 0_K$ by [L2]; and since $v(t^{-k}) = k < k+1 = v(-t^{-(k+1)})$ by [L1] and [L3], the difference $t^{-k} - t^{-(k+1)}$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-(k+1)} < t^{-k}$. [L1, L2, L3]

1.2 Let $n \in \mathbb{N}$. If $n = 0$ then $t - n \cdot 1_K = t$, which is nonzero with $\operatorname{lc}(t) = 1 > 0$. If $n \ge 1$ then $n \cdot 1_K$ is nonzero with $v(n \cdot 1_K) = 0$, so $-(n\cdot 1_K)$ is nonzero with valuation $0$ by [L3], while $v(t) = -1 < 0$; hence $t - n\cdot 1_K$ is nonzero with leading coefficient $\operatorname{lc}(t) = 1 > 0$ by [L3]. In both cases $n \cdot 1_K < t$ by [L2]. [L1, L2, L3]

1.3 Conversely, let $h \in K$ and $k \in \mathbb{Z}$ with $|h| < t^{-k}$, and suppose $h \ne 0_K$ with $v(h) < k$. Then $v(|h|) = v(h) < k = v(t^{-k})$ and $\operatorname{lc}(|h|) > 0$ by [L2], so $|h| - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(|h|) > 0$ by [L3], giving $t^{-k} < |h|$ and contradicting $|h| < t^{-k}$ by the trichotomy of [L4]. Hence $h = 0_K$ or $v(h) \ge k$, and in either case $h(j) = 0$ for every $j < k$ by [L1]. [L1, L2, L3, L4]

2.1 Let $h \in K$ and $k \in \mathbb{Z}$ with $h(j) = 0$ for every $j \le k$. If $h = 0_K$ then $|h| = 0_K < t^{-k}$ by [step 1.1]. Otherwise $h \ne 0_K$ with $v(h) > k$, so $|h| \ne 0_K$ with $v(|h|) = v(h) > k = v(t^{-k})$ by [L1] and [L2]; then $t^{-k} - |h|$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$ by [L3], so $|h| < t^{-k}$ by [L2]. [step 1.1, L1, L2, L3]

2.2 Let $\varepsilon \in K$ with $\varepsilon > 0_K$, so $\varepsilon \ne 0_K$ and $\operatorname{lc}(\varepsilon) > 0$ by [L2]; put $m := v(\varepsilon)$ and use [L5] to fix a natural $k$ with $k > m$. Then $v(\varepsilon) = m < k = v(t^{-k}) = v(-t^{-k})$ by [L1] and [L3], so $\varepsilon - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(\varepsilon) > 0$, that is $t^{-k} < \varepsilon$; and $t^{-k} > 0_K$ by [step 1.1]. The same computation applies to every integer $k > m$. [step 1.1, L1, L2, L3, L5]

2.3 By [step 1.2], $n \cdot 1_K < t$ for every natural $n$; by the trichotomy of [L4] no natural $n$ can then satisfy $t < n \cdot 1_K$, so the defining condition of [L4] fails at $x = t$ and $K$ is not Archimedean. [step 1.2, L4]

3.1 Clause 1 is [step 1.2] with [step 2.3], clause 2 is [step 1.1], clause 3 is [step 2.2], and clause 4 is [step 2.1] together with [step 1.3]. [step 1.1, step 2.1, step 1.3, step 2.2, step 2.3] ∎

## Remarks

- **Why clause 3 is the pivotal one.** The valuation takes its values in
  $\mathbb{Z}$, which has countable cofinality, and clause 3 is the translation
  of that fact into the order of $K$: a *countable* family, the monomials
  $t^{-k}$ with $k \in \mathbb{N}$, already gets below every positive element.
  This is what makes the sequential Cauchy condition in $K$ testable against
  countably many thresholds, and it is the reason a sequence indexed by
  $\mathbb{N}$ suffices to reach a limit in [[thm-laurent-cauchy-complete]].
  Nothing like it would hold if the exponents were allowed to range over a
  group of uncountable cofinality.

- **Non-Archimedean here is a statement about $t$, not about the constants.**
  The canonical naturals of $K$ are the constant series
  $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ (clause 3 of
  [[thm-laurent-ordered-field]]), all of valuation $0$, and what bounds them
  above is $t$, of valuation $-1$. The computation in step 1.2 uses nothing
  about $t$ beyond that: every *positive* element of negative valuation exceeds
  every canonical natural, because a strict inequality between valuations
  decides the comparison outright, whatever the coefficients are.
````

### `lem-laurent-series-ring`

````markdown
---
id: lem-laurent-series-ring
kind: lemma
title: "$\\mathbb{R}((t^{-1}))$ is a commutative ring: the product is a finite sum and both operations preserve support bounded below"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, thm-int-ordered-ring, def-int-order, def-int-operations, thm-well-ordering-principle, lem-nat-embeds-int, def-field, thm-reals-ordered-field]
aliases: []
landmark: false
short: "$K$ is a commutative ring"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ be as in [[def-formal-laurent-series]], and let
$f, g \in K$, with $m, n \in \mathbb{Z}$ chosen so that $f(i) = 0$ for all
$i < m$ and $g(j) = 0$ for all $j < n$. Then:

1. **(Finiteness.)** For every $k \in \mathbb{Z}$ the set
   $S_k := \{\, (i,j) \in \mathbb{Z} \times \mathbb{Z} : i + j = k,\; f(i)g(j) \ne 0 \,\}$
   is finite, so $(fg)(k) = \sum_{i+j=k} f(i)g(j)$ is a finite sum of reals; and
   $S_k = \varnothing$ whenever $k < m + n$.
2. **(Closure.)** $f + g$, $-f$ and $fg$ lie in $K$, with $(f+g)(k) = 0$ for
   $k < \min(m,n)$ and $(fg)(k) = 0$ for $k < m + n$.
3. **(Ring.)** $(K, +, \cdot\,, 0_K, 1_K)$ is a commutative ring with identity,
   and $1_K \ne 0_K$.
4. **(Monomials and constants.)** $(t^{-a}h)(k) = h(k-a)$ for every $h \in K$
   and all $a, k \in \mathbb{Z}$; consequently $t^{-a} \, t^{-b} = t^{-(a+b)}$
   for all $a, b \in \mathbb{Z}$. Moreover $(\iota(c)f)(k) = c\, f(k)$ for all
   $c \in \mathbb{R}$ and $k \in \mathbb{Z}$.
5. **(Least element.)** Every nonempty $S \subseteq \mathbb{Z}$ that is bounded
   below has a least element. In particular $\operatorname{supp} f$ has a least
   element whenever $f \ne 0_K$, so the valuation $v(f)$ and the leading
   coefficient $\operatorname{lc}(f)$ of [[def-formal-laurent-series]] are
   defined.

## Facts & Assumptions

**Given:** $K$, its operations, $0_K$, $1_K$, the monomials $t^{-n}$ and the constants $\iota(c)$ as in [[def-formal-laurent-series]]; elements $f, g \in K$ and bounds $m, n \in \mathbb{Z}$ with $f(i) = 0$ for $i < m$ and $g(j) = 0$ for $j < n$.

[L1] $K$ consists of the functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $(f+g)(k) = f(k) + g(k)$ and $(fg)(k) = \sum_{i+j=k} f(i)g(j)$; $0_K$ is the zero function, $1_K$ is $1$ at index $0$ and $0$ elsewhere, $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere, and $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere ([[def-formal-laurent-series]]).

[L2] $\mathbb{Z}$ is a totally ordered commutative ring: its order is total, and $x \le y$ implies $x + z \le y + z$ ([[thm-int-ordered-ring]], [[def-int-order]], [[def-int-operations]]).

[L3] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] The map $\varepsilon(a) = [(a,0)]$ is injective from $\mathbb{N}$ onto the set of nonnegative integers and preserves addition and order, so every integer $x \ge 0$ is $\varepsilon(a)$ for a unique natural $a$ ([[lem-nat-embeds-int]]).

[L5] $\mathbb{R}$ is a field: addition and multiplication are associative and commutative, multiplication distributes over addition, $0 \ne 1$, and a finite sum of reals is independent of the order and bracketing of its terms ([[def-field]], [[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $S \subseteq \mathbb{Z}$ be nonempty with $s \ge b$ for all $s \in S$. Every element of $T := \{\, s - b : s \in S \,\}$ is a nonnegative integer, so by [L4] $T = \{\, \varepsilon(a) : a \in A \,\}$ for a nonempty $A \subseteq \mathbb{N}$; by [L3] $A$ has a least element $a_0$, and since $\varepsilon$ preserves order and $x \mapsto x + b$ preserves order, $\varepsilon(a_0) + b$ is an element of $S$ that is $\le$ every element of $S$. [L2, L3, L4]

1.2 Fix $k \in \mathbb{Z}$ and let $(i,j) \in S_k$. Then $f(i) \ne 0$ and $g(j) \ne 0$, so $i \ge m$ and $j \ge n$; from $i + j = k$ and $j \ge n$ we get $i = k - j \le k - n$. Hence $m \le i \le k - n$, and $j = k - i$ is determined by $i$. [given, L1, L2]

2.1 The integers $i$ with $m \le i \le k - n$ are in order-preserving bijection with the naturals $a$ satisfying $\varepsilon(a) \le k - n - m$ by [L4], and there are finitely many of these, none at all when $k - n - m < 0$; so $S_k$ is a finite set by [step 1.2], it is empty whenever $k < m + n$, and therefore $(fg)(k)$ is a finite sum of reals which is $0$ whenever $k < m + n$. [step 1.2, L2, L4, L5]

3.1 $(f+g)(k) = f(k) + g(k) = 0$ for every $k < \min(m,n)$ and $(-f)(k) = -f(k) = 0$ for every $k < m$, so $f + g$ and $-f$ have support bounded below; and $(fg)(k) = 0$ for every $k < m+n$ by [step 2.1], so $fg$ does too. All three therefore lie in $K$. [step 2.1, given, L1, L5]

3.2 $(fg)(k) = \sum_{i+j=k} f(i)g(j) = \sum_{j+i=k} g(j)f(i) = (gf)(k)$, since the two sums have the same finite index set and their terms agree by commutativity of multiplication in $\mathbb{R}$; so multiplication on $K$ is commutative. [step 2.1, L5]

3.3 For $f, g, h \in K$ and $k \in \mathbb{Z}$, expanding both $((fg)h)(k)$ and $(f(gh))(k)$ by [L1] and [L5] gives the sum of $f(i)g(j)h(l)$ over the triples $(i,j,l)$ with $i + j + l = k$ and $f(i)g(j)h(l) \ne 0$; that set is finite because the argument of [step 1.2] bounds $i$, $j$ and $l$ from below and hence, as in [step 2.1], from above as well. So multiplication on $K$ is associative. [step 1.2, step 2.1, L5]

3.4 $(f(g+h))(k) = \sum_{i+j=k} f(i)\bigl(g(j) + h(j)\bigr) = \sum_{i+j=k} f(i)g(j) + \sum_{i+j=k} f(i)h(j) = (fg)(k) + (fh)(k)$, all three sums being finite; so multiplication distributes over addition. [step 2.1, L5]

3.5 For $h \in K$, $(t^{-a}h)(k) = \sum_{i+j=k} t^{-a}(i)h(j)$ has at most one nonzero term, the one with $i = a$ and $j = k - a$, so $(t^{-a}h)(k) = h(k-a)$; taking $h = t^{-b}$ gives $(t^{-a}t^{-b})(k) = t^{-b}(k-a)$, which is $1$ when $k = a+b$ and $0$ otherwise, that is, $t^{-a}t^{-b} = t^{-(a+b)}$. [step 2.1, L1]

3.6 $(\iota(c)f)(k) = \sum_{i+j=k} \iota(c)(i) f(j)$ has at most one nonzero term, the one with $i = 0$ and $j = k$, so $(\iota(c)f)(k) = c\,f(k)$. [step 2.1, L1]

3.7 $(f \cdot 1_K)(k) = \sum_{i+j=k} f(i) 1_K(j)$ has at most one nonzero term, the one with $j = 0$ and $i = k$, so $(f \cdot 1_K)(k) = f(k)$ and $f \cdot 1_K = f$; moreover $1_K(0) = 1 \ne 0 = 0_K(0)$, so $1_K \ne 0_K$. [step 2.1, L1, L5]

4.1 Addition on $K$ is defined index by index, and $K$ is closed under it and under negation by [step 3.1]; so associativity, commutativity, the law $f + 0_K = f$ and the law $f + (-f) = 0_K$ each hold at every index by the corresponding law in $\mathbb{R}$, and $(K, +, 0_K)$ is an abelian group. [step 3.1, L1, L5]

5.1 By [step 4.1] addition makes $K$ an abelian group, by [step 3.2], [step 3.3] and [step 3.7] multiplication is commutative and associative with identity $1_K \ne 0_K$, and by [step 3.4] it distributes over addition; hence $K$ is a commutative ring with identity. [step 3.2, step 3.3, step 3.4, step 3.7, step 4.1]

6.1 Clause 1 is [step 2.1], clause 2 is [step 3.1] with [step 2.1], clause 3 is [step 5.1], clause 4 is [step 3.5] and [step 3.6], and clause 5 is [step 1.1] applied to $S = \operatorname{supp} f$, which is nonempty when $f \ne 0_K$ and bounded below because $f \in K$. [step 1.1, step 2.1, step 3.1, step 3.5, step 3.6, step 5.1] ∎
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

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-laurent-ordered-field`

````markdown
---
id: thm-laurent-ordered-field
kind: theorem
title: "$\\mathbb{R}((t^{-1}))$ is an ordered field, ordered by the sign of the leading coefficient"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation, thm-laurent-series-field, def-ordered-field, def-archimedean-field, def-field, def-abs-value, thm-reals-ordered-field, thm-induction-principle, def-natural-numbers, thm-int-ordered-ring]
aliases: []
landmark: true
short: "$K$ is an ordered field"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ and let
$P = \{\, f \in K : f \ne 0_K \text{ and } \operatorname{lc}(f) > 0 \,\}$
([[def-formal-laurent-series]]). Then:

1. $P$ is a positive cone on $K$, so $(K, P)$ is an ordered field
   ([[def-ordered-field]]), and $f < g$ holds exactly when $g - f \ne 0_K$ and
   $\operatorname{lc}(g - f) > 0$.
2. For $f \ne 0_K$ the absolute value ([[def-abs-value]]) satisfies
   $|f| \ne 0_K$, $v(|f|) = v(f)$ and
   $\operatorname{lc}(|f|) = \lvert \operatorname{lc}(f) \rvert > 0$.
3. The map $\iota : \mathbb{R} \to K$ sending $c$ to the series with value $c$
   at index $0$ is an injective ring homomorphism with $\iota(c) \in P$ exactly
   when $c > 0$; and the canonical naturals of $K$ are
   $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ for every $n \in \mathbb{N}$.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, constants $\iota(c)$ and the set $P$ above.

[L1] For nonzero $h \in K$, $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere; $1_K = \iota(1)$ ([[def-formal-laurent-series]]).

[L2] $K$ is a commutative ring, $(f+g)(k) = f(k)+g(k)$, and $(\iota(c)h)(k) = c\,h(k)$ ([[lem-laurent-series-ring]]).

[L3] For nonzero $f, g \in K$: $fg \ne 0_K$ with $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$ ([[lem-laurent-valuation]]).

[L4] $K$ is a field ([[thm-laurent-series-field]], [[def-field]]).

[L5] An ordered field is a field with a subset $P$ satisfying (O1) trichotomy, for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$, and (O2) closure of $P$ under addition and multiplication; the order is then $a < b :\iff b - a \in P$ ([[def-ordered-field]]). For $n \ge 1$, $n \cdot 1_F$ is the $n$-fold sum of $1_F$, and $0 \cdot 1_F = 0$ ([[def-archimedean-field]]).

[L6] $\mathbb{R}$ is an ordered field: exactly one of $x > 0$, $x = 0$, $x < 0$ holds for each real $x$, and sums and products of positive reals are positive ([[thm-reals-ordered-field]], [[def-ordered-field]]).

[L7] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x < 0$, in any ordered field and in $\mathbb{R}$ ([[def-abs-value]]).

[L8] Induction: a property holding at $0$ and inherited from $n$ to $n+1$ holds at every natural number ([[thm-induction-principle]], [[def-natural-numbers]]).

[L9] The order on $\mathbb{Z}$ is total, so for $p, q \in \mathbb{Z}$ exactly one of $p < q$, $p = q$, $q < p$ holds ([[thm-int-ordered-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $f \in K$. If $f = 0_K$ then neither $f$ nor $-f = 0_K$ lies in $P$, since membership in $P$ requires being nonzero. If $f \ne 0_K$ then $-f \ne 0_K$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$ by [L3], and by trichotomy in $\mathbb{R}$ ([L6]) exactly one of $\operatorname{lc}(f) > 0$ and $-\operatorname{lc}(f) > 0$ holds. So for every $f$ exactly one of $f \in P$, $f = 0_K$, $-f \in P$ holds, which is (O1). [L1, L3, L5, L6]

1.2 Let $f, g \in P$. By [L3] $fg \ne 0_K$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$, a product of two positive reals, hence positive by [L6]; so $fg \in P$. [L3, L6]

1.3 $\iota(c) + \iota(d) = \iota(c+d)$ because addition is computed index by index, and $\iota(c)\iota(d) = \iota(cd)$ because $(\iota(c)\iota(d))(k) = c\,\iota(d)(k)$ by [L2], which is $cd$ at $k = 0$ and $0$ elsewhere; also $\iota(1) = 1_K$, and $\iota$ is injective since $\iota(c)(0) = c$. [L1, L2]

2.1 Let $f, g \in P$ and compare $v(f)$ with $v(g)$, which by [L9] are related in exactly one of three ways. If $v(f) < v(g)$ then by [L3] $f + g \ne 0_K$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) > 0$; if $v(g) < v(f)$ the same argument with the roles exchanged applies; and if $v(f) = v(g)$ then $\operatorname{lc}(f) + \operatorname{lc}(g) > 0$ by [L6], in particular nonzero, so by [L3] $f+g \ne 0_K$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g) > 0$. In every case $f + g \in P$, which with [step 1.2] is (O2). [step 1.2, L3, L6, L9]

2.2 For $c \ne 0$ the series $\iota(c)$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$, so $\iota(c) \in P$ exactly when $c > 0$; and $\iota(0) = 0_K \notin P$. With [step 1.3] this makes $\iota$ an injective ring homomorphism carrying the positive reals onto the positive constants. [step 1.3, L1]

2.3 For every natural $n$, $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$: at $n = 0$ both sides are $0_K$ by [L5] and [L1], and if the identity holds at $n$ then $(n+1)\cdot 1_K = n \cdot 1_K + 1_K = \iota(n \cdot 1_{\mathbb{R}}) + \iota(1) = \iota(n \cdot 1_{\mathbb{R}} + 1) = \iota((n+1)\cdot 1_{\mathbb{R}})$ by [step 1.3]. [step 1.3, L1, L5, L8]

3.1 By [step 1.1] and [step 2.1] the set $P$ satisfies (O1) and (O2), and $K$ is a field by [L4]; hence $(K,P)$ is an ordered field, in which $f < g$ means $g - f \in P$, that is, $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$. [step 1.1, step 2.1, L4, L5]

4.1 Let $f \ne 0_K$. If $f \in P$ then $f > 0_K$ by [step 3.1], so $|f| = f$ by [L7], and $\operatorname{lc}(|f|) = \operatorname{lc}(f) = \lvert \operatorname{lc}(f)\rvert$ since $\operatorname{lc}(f) > 0$. Otherwise $-f \in P$ by [step 1.1], so $f < 0_K$ and $|f| = -f$, whence $|f| \ne 0_K$, $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) = -\operatorname{lc}(f) = \lvert\operatorname{lc}(f)\rvert$, again positive. In both cases $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) = \lvert\operatorname{lc}(f)\rvert > 0$. [step 1.1, step 3.1, L3, L7]

5.1 Clause 1 is [step 3.1], clause 2 is [step 4.1], and clause 3 is [step 2.2] with [step 2.3]. [step 3.1, step 2.2, step 4.1, step 2.3] ∎

## Remarks

- **The order compares lowest terms, and only those.** By clause 1, deciding $f < g$ means finding the least index at which $f$ and $g$ differ and comparing the two coefficients there. Every later coefficient is irrelevant, which is why $\iota(c) > t^{-1}$ for every positive real $c$, however small, and why the order is not the coefficientwise one.

- **$\mathbb{R}$ sits inside $K$ as an ordered subfield, and that is all clause 3 says.** It does not say that $\mathbb{R}$ is cofinal in $K$, and indeed it is not: the computation used for the canonical naturals in [[lem-laurent-non-archimedean]] applies verbatim to every constant, since $v(t) = -1 < 0 = v(\iota(c))$ for every $c \ne 0$, so $\iota(c) < t$ for every real $c$. The identification $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ is recorded because the Archimedean property is a statement about the canonical naturals ([[def-archimedean-field]]), and it is the bridge between those and the constant series.
````

### `thm-nat-linear-order`

````markdown
---
id: thm-nat-linear-order
kind: theorem
title: "$\\le$ is a linear order on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-omega-is-peano-system]
aliases: []
landmark: true
short: "reflexive, antisymmetric, transitive, total"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]) and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] $0 + k = k$ and addition is associative ([[lem-nat-add-identity]], [[lem-nat-add-associative]]).

[L2] Cancellation: $m + k = n + k \Rightarrow m = n$ ([[lem-nat-add-cancellative]]).

[L3] Every nonzero natural is a successor: if $j \ne 0$ then $j = \sigma(i)$ for some $i$ ([[lem-nat-nonzero-is-successor]]).

[L4] Trichotomy: exactly one of $m < n$, $m = n$, $m > n$ holds ([[lem-nat-trichotomy]]).

[L5] Addition is commutative ([[lem-nat-add-commutative]]).

[L6] $\sigma(x) \ne 0$ for every $x$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 Reflexive: $m + 0 = m$, so $m \le m$. [given]

1.2 Transitive: if $m \le n$ and $n \le p$, say $m + k = n$ and $n + j = p$, then $m + (k + j) = (m + k) + j = n + j = p$, so $m \le p$. [given, L1]

1.3 A sum is zero only if both summands are: if $k + j = 0$ with $j \ne 0$ then $j = \sigma(i)$ and $k + j = k + \sigma(i) = \sigma(k + i) \ne 0$ [L6], a contradiction, so $k = j = 0$. [L1, L3, L6]

1.4 Total: by trichotomy one of $m < n$, $m = n$, $m > n$ holds, and each of these gives $m \le n$ or $n \le m$. [L4]

2.1 Antisymmetric: if $m \le n$ and $n \le m$, say $m + k = n$ and $n + j = m$, then $m + (k + j) = (m + k) + j = n + j = m = m + 0$; commuting both sides [L5] gives $(k + j) + m = 0 + m$, and cancelling the common right summand $m$ [L2] gives $k + j = 0$, hence $k = j = 0$ by step 1.3 and $m = n$. [given, L1, L2, L5, step 1.3]

3.1 Reflexivity, antisymmetry, transitivity, and totality all hold, so $\le$ is a linear order on $\mathbb{N}$. [step 1.1, step 1.2, step 2.1, step 1.4] ∎
````

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
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
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````

