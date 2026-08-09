# Audit proof-refuter brief — Wave 7, step A6

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

## Selection reasons

- critical risk (18): 22 declared dependencies; 23 cited facts; 17 numbered proof steps; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `thm-root-test`

Normalized current SHA-256: `8753093c13294664b19c4e3c16f2654d74f1e93ef707eaba8338976b0c76bed7`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-root-test
kind: theorem
title: "Root test: $\\limsup |a_k|^{1/k} < 1$ gives absolute convergence and hence convergence, $> 1$ gives divergence, and $= 1$ decides nothing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-limsup-liminf, lem-limsup-exists, thm-ratio-root-inequality, thm-geometric-series, thm-direct-comparison-test, lem-series-tail-invariance, lem-absolute-convergence-implies-convergence, lem-nth-term-test, thm-nth-roots-exist, def-rational-power, lem-rational-power-laws, lem-rational-power-monotone, lem-power-monotone, lem-of-abs-value, def-extended-reals, lem-extended-reals-complete, thm-p-series-rational, lem-nth-root-of-n-tends-to-one, thm-algebra-of-limits, thm-convergence-iff-limsup-equals-liminf, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.33)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)_{k \ge 1}$ be a family of reals from the starting index $1$
([[def-series]]), put

$$\rho_k \;:=\; |a_{k+1}|^{1/(k+1)} \qquad (k \in \mathbb{N}), \qquad \rho \;:=\; \limsup_{k} \rho_k \;\in\; \overline{\mathbb{R}} ,$$

and note that $\rho$ exists for every such family, with no hypothesis whatever
([[lem-limsup-exists]], [[def-limsup-liminf]]). Then:

1. if $\rho < 1$ then $\sum_{k \ge 1} |a_k|$ converges, and hence
   $\sum_{k \ge 1} a_k$ converges as well;
2. if $\rho > 1$ then $\sum_{k \ge 1} a_k$ diverges;
3. if $\rho = 1$ neither conclusion follows: $\sum_{k \ge 1} 1/k$ diverges,
   $\sum_{k \ge 1} 1/k^{2}$ converges, and both have $\rho = 1$.

**The root family is shifted, and that is forced.** The classical expression
$|a_n|^{1/n}$ is meaningful only for $n \ge 1$, since $1/0$ is not a rational
number ([[def-rational-power]]), while sequences here are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$. So the roots are written
$\rho_k = |a_{k+1}|^{1/(k+1)}$, which is $|a_n|^{1/n}$ reindexed by $n = k+1$,
exactly the convention of [[thm-ratio-root-inequality]]. Every $\rho_k$ is
defined, including where $a_{k+1} = 0$, by the supplementary clause of
[[def-rational-power]].

**What claim 1 does and does not say.** The comparison with a geometric series
delivers convergence of the series of *absolute values*; that
$\sum_{k \ge 1} a_k$ itself converges is a separate step, and it is supplied by
[[lem-absolute-convergence-implies-convergence]] earlier on this page. Nothing
here identifies the sum, and nothing here says anything about rearranging the
series, which is taken up later in this track.

## Facts & Assumptions

**Given:** A family $(a_k)_{k \ge 1}$ of reals, the roots $\rho_k = |a_{k+1}|^{1/(k+1)}$ for $k \in \mathbb{N}$, the tail suprema $s_n = \sup\{\rho_k : k \ge n\}$ taken in $\overline{\mathbb{R}}$, and $\rho = \limsup_k \rho_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there, and the extended order is total ([[lem-extended-reals-complete]], [[def-extended-reals]]). In particular $\rho \le s_n$ for every $n$, and $\rho_k \le s_n$ for every $k \ge n$; a real $t$ with $\rho < t$ fails to be a lower bound of $\{s_n\}$, and a real $u$ with $s_n > u$ fails to be an upper bound of $\{\rho_k : k \ge n\}$.

[L2] Both quantities exist for every sequence, bounded or not ([[lem-limsup-exists]]).

[L3] Roots and powers: for $x \ge 0$ and natural $n \ge 1$, $x^{1/n} \ge 0$ and $(x^{1/n})^{n} = x$; on the nonnegatives $y \mapsto y^{n}$ is strictly increasing for $n \ge 1$; and $1^{n} = 1$ ([[thm-nth-roots-exist]], [[def-rational-power]], [[lem-power-monotone]]).

[L4] Absolute value: $|x| \ge 0$ for every real $x$ ([[lem-of-abs-value]]).

[L5] The geometric series $\sum_{j \ge 0} t^{j}$ converges when $|t| < 1$, and a series converges if and only if each of its tail series converges ([[thm-geometric-series]], [[lem-series-tail-invariance]]).

[L6] Direct comparison, in the form for families from a general starting index: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges then $\sum x_k$ converges ([[thm-direct-comparison-test]], [[def-series]]).

[L7] If a series converges then its terms tend to $0$; contrapositively, terms not tending to $0$ force divergence ([[lem-nth-term-test]], [[def-real-limit]]).

[L8] $1 \le n^{1/n}$ for every natural $n \ge 1$, and the sequence $(k+1)^{1/(k+1)}$ converges to $1$ ([[lem-nth-root-of-n-tends-to-one]]); a sequence converging to a real $c$ has $\limsup = \liminf = c$ ([[thm-convergence-iff-limsup-equals-liminf]]); products and quotients of convergent sequences converge, the quotient requiring nonzero limit and nonzero denominators ([[thm-algebra-of-limits]]).

[L9] Laws of rational exponents on a positive base: $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$ and $a^{r} > 0$; and for rational $t > 0$, $a > 1$ implies $a^{t} > 1$ ([[lem-rational-power-laws]], [[lem-rational-power-monotone]]).

[L10] For rational $p > 0$, $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$ ([[thm-p-series-rational]]).

[L11] If $\sum |x_j|$ converges then $\sum x_j$ converges; for a family from the starting index $1$ this is the same statement applied to the shifted sequence $j \mapsto a_{j+1}$, whose series is $\sum_{k \ge 1} a_k$ and whose absolute-value series is $\sum_{k \ge 1} |a_k|$ ([[lem-absolute-convergence-implies-convergence]], [[def-series]]).

## Proof

**Proof technique:** cases.

1.1 Assume $\rho < 1$. [assume-case lt]

1.2 Assume instead $\rho > 1$. [assume-case gt]

1.3 Assume instead $\rho = 1$. [assume-case one]

2.1 Every $\rho_k$ is a nonnegative real, so each $s_n \ge \rho_n \ge 0$ and hence $0$ is a lower bound of $\{s_n\}$, giving $\rho \ge 0$; combined with the case hypothesis $\rho < 1$ this puts $\rho$ strictly between the reals $0$ and $1$, so $\rho$ is a real number. [step 1.1, L1, L2, L3, L4]

2.2 In the case $\rho > 1$, the value $\rho$ is a lower bound of $\{s_n\}$, so $s_n \ge \rho > 1$ for every $n \in \mathbb{N}$. [step 1.2, L1]

2.3 In the case $\rho = 1$, take first $b_k := 1/k$ for $k \ge 1$. Its root family is $\big(1/(k+1)\big)^{1/(k+1)} = 1 / (k+1)^{1/(k+1)}$, and since $(k+1)^{1/(k+1)} \to 1$ with every term at least $1$, the quotient rule gives convergence to $1$, so the limit superior of the root family is $1$; and $\sum_{k \ge 1} 1/k$ diverges, being the case $p = 1$. [step 1.3, L8, L9, L10]

2.4 In the case $\rho = 1$, take next $c_k := 1/k^{2}$ for $k \ge 1$. Its root family is $\big((k+1)^{-2}\big)^{1/(k+1)} = \big((k+1)^{1/(k+1)}\big)^{-2}$, which converges to $1^{-2} = 1$ by the product and quotient rules, so again the limit superior of the root family is $1$; and $\sum_{k \ge 1} 1/k^{2}$ converges, being the case $p = 2$. [step 1.3, L8, L9, L10]

3.1 In the case $\rho < 1$ put $t := (\rho + 1)/2$, a real number with $0 \le \rho < t < 1$; since $t$ is not a lower bound of $\{s_n\}$ there is $N \in \mathbb{N}$ with $s_N < t$. [step 2.1, L1, choose]

3.2 In the case $\rho > 1$, for each $n$ the real $1$ is not an upper bound of $\{\rho_k : k \ge n\}$, so there is $k \ge n$ with $\rho_k > 1$. [step 2.2, L1]

3.3 So at $\rho = 1$ one family gives a divergent series and another a convergent one, and neither of the two conclusions can be drawn, which is claim 3. [step 2.3, step 2.4]

4.1 In the case $\rho < 1$, for every $k \ge N$ we have $\rho_k \le s_N < t$, and raising both nonnegative sides to the power $k+1 \ge 1$ gives $|a_{k+1}| = (\rho_k)^{k+1} < t^{\,k+1}$. [step 3.1, L1, L3]

4.2 In the case $\rho > 1$, whenever $\rho_k > 1$ we get $|a_{k+1}| = (\rho_k)^{k+1} > 1^{\,k+1} = 1$; so by step 3.2 there are indices $k \ge n$ with $|a_{k+1}| > 1$ for every $n$. [step 3.2, L3]

4.3 In the case $\rho < 1$: since $0 < t < 1$ the geometric series $\sum_{j \ge 0} t^{j}$ converges, hence so does its first tail series $\sum_{m \ge 1} t^{m}$. [step 3.1, L5]

5.1 In the case $\rho < 1$: putting $x_j := |a_{j+1}|$ and $y_j := t^{\,j+1}$ for $j \in \mathbb{N}$, step 4.1 gives $0 \le x_j \le y_j$ for all $j \ge N$, and $\sum_j y_j$ is the convergent series of step 4.3; so $\sum_{k \ge 1} |a_k|$ converges. [step 4.1, step 4.3, L4, L6]

5.2 In the case $\rho > 1$: the sequence $j \mapsto a_{j+1}$ does not converge to $0$, because with the rational tolerance $1$ no index $K$ satisfies $|a_{k+1}| < 1$ for all $k \ge K$; hence $\sum_{k \ge 1} a_k$ diverges, which is claim 2. [step 4.2, L7]

6.1 In the case $\rho < 1$: the series $\sum_{k \ge 1} |a_k|$ having been shown to converge, the sequence $j \mapsto a_{j+1}$ has a convergent absolute-value series, so $\sum_{k \ge 1} a_k$ converges as well; together with the convergence of $\sum_{k \ge 1}|a_k|$ that is claim 1. [step 5.1, L11]

7.1 The three cases $\rho < 1$, $\rho > 1$ and $\rho = 1$ exhaust $\overline{\mathbb{R}}$, the extended order being total, so the three claims together cover every family. [step 6.1, step 5.2, step 3.3, L1, cases-exhaustive] ∎

## Remarks

- **The test reads only the tail suprema, and that is why it never needs the roots to converge.** Claim 1 uses a single index $N$ beyond which all roots sit below a fixed $t < 1$; claim 2 uses only that roots above $1$ occur arbitrarily late. Neither argument asks whether $(\rho_k)$ has a limit, which is exactly the advantage of $\limsup$ over $\lim$ here.

- **Claim 2 is proved through the term test, not through a comparison.** What the hypothesis delivers is infinitely many terms of absolute value greater than $1$, which already forbids the terms from tending to $0$. No estimate on the partial sums is needed, and none is available, the terms having no sign.

- **The witnesses in claim 3 are chosen so that both root computations reduce to the single standard limit $n^{1/n} \to 1$.** The companion page carries the same phenomenon with the exponents $-1/2$ and $-2$, where the divergent witness is not the harmonic series.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-root-test",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
  ],
  "rationale": "Hunter Theorem 4.27 states the limsup root test with absolute convergence below 1 and divergence above 1; the surrounding text gives both outcomes at equality. The item merely reindexes |a_n|^(1/n) as |a_{k+1}|^(1/(k+1)) to avoid exponent 1/0. Its proof follows the sourced geometric comparison.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-series.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-extended-reals-complete",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\overline{\\mathbb{R}}$ be **any** subset of the extended real\nline ([[def-extended-reals]]) and write $A_{\\mathbb{R}} := A \\cap \\mathbb{R}$.\nThen $A$ has a least upper bound and a greatest lower bound in\n$\\overline{\\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write\n$\\sup A$ and $\\inf A$ with the ambient set always $\\overline{\\mathbb{R}}$.\nExplicitly:\n\n- $\\sup A = +\\infty$ if $+\\infty \\in A$, or if $A_{\\mathbb{R}}$ is not bounded above in $\\mathbb{R}$;\n- $\\sup A = -\\infty$ if $+\\infty \\notin A$ and $A_{\\mathbb{R}} = \\emptyset$;\n- $\\sup A$ is the real supremum $\\sup A_{\\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\\infty \\notin A$ and $A_{\\mathbb{R}}$ is nonempty and bounded above in $\\mathbb{R}$;\n\nand dually, with $-\\infty$ and $+\\infty$ exchanged and \"above\" replaced by\n\"below\", for $\\inf A$ ([[def-infimum]], [[thm-infimum-property]]).\n\n**Agreement.** If $A \\subseteq \\mathbb{R}$ is nonempty and bounded above in\n$\\mathbb{R}$ ([[def-bounded-set]]) then $\\sup A$ computed in\n$\\overline{\\mathbb{R}}$ is the real number $\\sup A$ of\n[[def-complete-ordered-field]]; if $A \\subseteq \\mathbb{R}$ is nonempty and\nbounded below then $\\inf A$ computed in $\\overline{\\mathbb{R}}$ is the real\nnumber $\\inf A$ of [[thm-infimum-property]]. In particular the notation is\nunambiguous on the sets for which the real supremum and infimum are defined, and\n$\\sup \\emptyset = -\\infty$, $\\inf \\emptyset = +\\infty$ in\n$\\overline{\\mathbb{R}}$.\n\n**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot\ndo, and it is why every $\\limsup$ statement on this page holds for every sequence\nrather than for bounded ones only. It is also not a weakening of the discipline\nthis library keeps around suprema: the operation supplied here is a *different*\noperation, taken in a *different* ordered set, and the agreement clause records\nexactly where the two coincide.",
      "uses": [
        "2.1",
        "2.2",
        "3.1",
        "3.2",
        "4.1",
        "7.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "Fix two objects $-\\infty$ and $+\\infty$, distinct from one another and neither of\nthem a real number ([[def-real-numbers]]), and set\n\n$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$\n\nThis is a **new object**, introduced here explicitly with its own order and its\nown partial arithmetic. It is not an enlargement of the field $\\mathbb{R}$, and\nno operation of $\\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by\nanything below.\n\n**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare\n\n$$a \\le b \\quad :\\Longleftrightarrow \\quad a = -\\infty \\ \\text{ or } \\ b = +\\infty \\ \\text{ or } \\ \\big(a, b \\in \\mathbb{R} \\text{ and } a \\le b \\text{ in } \\mathbb{R}\\big),$$\n\nwith $\\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for\n\"$a \\le b$ and $a \\ne b$\" as usual ([[def-partial-order]]).\n\n**$(\\overline{\\mathbb{R}}, \\le)$ is a totally ordered set, and the inclusion of\n$\\mathbb{R}$ preserves and reflects the order.** All four checks are immediate\nfrom the displayed clauses.\n\n- *Reflexive.* For $a = \\pm\\infty$ one of the first two clauses applies; for\n  $a \\in \\mathbb{R}$ the third does, since $a \\le a$ in $\\mathbb{R}$.\n- *Antisymmetric.* Suppose $a \\le b$ and $b \\le a$. If $a = -\\infty$ then\n  $b \\le a$ forces $b = -\\infty$, since the clause $a = +\\infty$ fails and $b, a$\n  are not both real. Symmetrically $b = -\\infty$ forces $a = -\\infty$, and\n  $a = +\\infty$ or $b = +\\infty$ forces the other to be $+\\infty$. In the one\n  remaining situation $a$ and $b$ are both real and antisymmetry is that of\n  $\\mathbb{R}$.\n- *Transitive.* Let $a \\le b \\le c$. If $a = -\\infty$ or $c = +\\infty$ the\n  conclusion is one of the first two clauses. Otherwise $a \\ne -\\infty$ forces,\n  in $a \\le b$, either $b = +\\infty$ or $a, b \\in \\mathbb{R}$; and $c \\ne +\\infty$\n  forces, in $b \\le c$, either $b = -\\infty$ or $b, c \\in \\mathbb{R}$. The value\n  $b = +\\infty$ is incompatible with the second alternative pair, so $b$ is real,\n  hence so are $a$ and $c$, and transitivity is that of $\\mathbb{R}$.\n- *Total.* If $a = -\\infty$ or $b = +\\infty$ then $a \\le b$; if $b = -\\infty$ or\n  $a = +\\infty$ then $b \\le a$; otherwise both are real and the order of\n  $\\mathbb{R}$ is total.\n- *Preserved and reflected.* For $a, b \\in \\mathbb{R}$ the first two clauses fail,\n  so $a \\le b$ in $\\overline{\\mathbb{R}}$ says exactly $a \\le b$ in $\\mathbb{R}$.\n\nIn particular $-\\infty$ is the least and $+\\infty$ the greatest element of\n$\\overline{\\mathbb{R}}$, and $-\\infty < x < +\\infty$ for every $x \\in \\mathbb{R}$.\n\n**Reflection.** Extend negation by\n\n$$-(+\\infty) := -\\infty, \\qquad -(-\\infty) := +\\infty,$$\n\nkeeping the field negative on $\\mathbb{R}$. The resulting map\n$\\nu : \\overline{\\mathbb{R}} \\to \\overline{\\mathbb{R}}$, $\\nu(a) = -a$, satisfies\n$\\nu(\\nu(a)) = a$ and\n\n$$a \\le b \\iff -b \\le -a \\qquad (a, b \\in \\overline{\\mathbb{R}}).$$\n\nFor $a$ and $b$ real this is the elementwise order reversal in $\\mathbb{R}$:\ntranslation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$\nturns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,\nwhile $a = b$ holds exactly when $-a = -b$. In every other case both sides are\ndecided by the first two clauses of the order: $a = -\\infty$ makes both sides\ntrue, as does $b = +\\infty$, and if $a \\ne -\\infty$, $b \\ne +\\infty$ and $a, b$\nare not both real then one of $a = +\\infty$, $b = -\\infty$ holds and both sides\nare false.\n\n**Partial addition.** For $a, b \\in \\overline{\\mathbb{R}}$ the sum $a + b$ is\ndefined by\n\n- $a + b$ = the field sum, when $a, b \\in \\mathbb{R}$;\n- $a + b := +\\infty$ when $a = +\\infty$ and $b \\ne -\\infty$, or $b = +\\infty$ and $a \\ne -\\infty$;\n- $a + b := -\\infty$ when $a = -\\infty$ and $b \\ne +\\infty$, or $b = -\\infty$ and $a \\ne +\\infty$;\n\nand **the two sums $(+\\infty) + (-\\infty)$ and $(-\\infty) + (+\\infty)$ are left\nundefined**. Addition is commutative where defined, and\n\n$$-(a + b) = (-a) + (-b),$$\n\neach side being defined exactly when the other is: the excluded pairs\n$\\{+\\infty, -\\infty\\}$ are exchanged by $\\nu$, and the three clauses above are\nexchanged accordingly.\n\n**Partial multiplication.** For $a, b \\in \\overline{\\mathbb{R}}$ the product $ab$\nis defined by\n\n- $ab$ = the field product, when $a, b \\in \\mathbb{R}$;\n- $ab := +\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and both are $> 0$ or both are $< 0$;\n- $ab := -\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and one is $> 0$ and the other $< 0$;\n\nand **every product with one factor $0$ and the other $\\pm\\infty$ is left\nundefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,\nunder which $+\\infty > 0 > -\\infty$.\n\n**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "2.1",
        "2.2",
        "3.1",
        "3.2",
        "4.1",
        "7.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-limsup-exists",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and\nextended tail bounds $s_n = \\sup T_n$, $i_n = \\inf T_n$ as in\n[[def-limsup-liminf]].\n\n1. **Monotonicity of the extended bounds under inclusion.** If\n   $A \\subseteq B \\subseteq \\overline{\\mathbb{R}}$ ([[def-extended-reals]]) then\n   $$\\sup A \\le \\sup B \\qquad \\text{and} \\qquad \\inf B \\le \\inf A,$$\n   the four quantities being the extended bounds of [[lem-extended-reals-complete]].\n   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.\n2. **The tail bounds are monotone.** $T_m \\subseteq T_n$ whenever $n \\le m$, and\n   hence\n   $$s_m \\le s_n \\qquad \\text{and} \\qquad i_n \\le i_m \\qquad (n \\le m).$$\n   In particular $s_{n+1} \\le s_n$ and $i_n \\le i_{n+1}$ for every $n$, and\n   $i_n \\le s_n$ for every $n$.\n3. **Existence.** $\\limsup_k x_k$ and $\\liminf_k x_k$ exist in\n   $\\overline{\\mathbb{R}}$ for **every** sequence of reals, bounded or not.\n\nClaim 1 is the tool the rest of this page uses whenever two extended suprema are\ncompared. It is proved here, from the definition of a least upper bound, rather\nthan quoted from the suprema page, for the reason given in the remarks below.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-nth-roots-exist",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).\nFor every $a \\in \\mathbb{R}$ with $a \\ge 0$ and every $n \\in \\mathbb{N}$ with\n$n \\ge 1$ there is a **unique** $s \\in \\mathbb{R}$ with $s \\ge 0$ and $s^n = a$\n([[def-integer-power]]); we write\n\n$$s = a^{1/n} = \\sqrt[n]{a}.$$\n\nMoreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.\n\n**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is\nnot new.** That theorem already produces the unique $\\sqrt{a} \\ge 0$ with\n$(\\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation\n$a^{1/2}$ introduced here is the same number. What is new is the passage to\ngeneral $n$: the completed square that drives the $n = 2$ argument has no direct\nanalogue, and its place is taken by the factorisation of $b^n - a^n$ and the\nresulting Lipschitz estimate ([[lem-power-difference-factorisation]]).",
      "uses": [
        "2.1",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-rational-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$ with $a > 0$ and let $r \\in \\mathbb{Q}$ ([[def-rationals]]).\n\nEvery rational has a representative with positive denominator\n([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \\in \\mathbb{Z}$\nand $n$ a positive integer; a positive integer is the image of a unique natural\n$\\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define\n\n$$a^{r} := \\big(a^{1/n}\\big)^{m},$$\n\nwhere $a^{1/n}$ is the unique nonnegative $n$-th root of $a$\n([[thm-nth-roots-exist]]) and the outer exponent is an integer power\n([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when\n$a > 0$, so it has an inverse and negative integer exponents are allowed.\n\n**Well-definedness.** The right-hand side must not depend on which representative\n$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],\nwhich is recorded in this item's `justified_by` rather than in its `deps`, since\nit is a statement *about* the operation defined here and therefore depends on\nthis definition.\n\n**The base must be positive.** For $a < 0$ the same formula is not a definition\nat all, because different representatives of the same rational give different\nanswers, or no answer: see [[fs-rational-power-of-negative-base]], which is\nexactly the item that justifies the restriction.\n\n**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$\n([[def-rat-order]]) the displayed formula still makes sense and still does not\ndepend on the representative: $r > 0$ forces $m \\ge 1$, and\n$\\big(0^{1/n}\\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every\n$a \\ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the\nexpression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is\nwhat lets the inequalities later on this page be stated for nonnegative entries\nrather than for positive ones only.",
      "uses": [
        "2.1",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let\n$a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in\n[[def-integer-power]].\n\n1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$.\n2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$.\n3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$.\n4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "uses": [
        "2.1",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),\nso that $r^0 = 1$ for every $r$, including $r = 0$.\n\n1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and\n   $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$\n2. If $|r| \\ge 1$ then $\\sum r^k$ diverges.\n\nThe series starts at $k = 0$ and its first term is $r^0 = 1$; in particular\n$\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to\n$1$. Which starting index is meant has to be said, and it is said here.",
      "uses": [
        "4.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-series-tail-invariance",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with partial sums $s_n = \\sum_{k<n} a_k$, let\n$N \\in \\mathbb{N}$, and let $t_j := \\sum_{i<j} a_{N+i}$ be the partial sums of the\n$N$-th tail series $\\sum_{k \\ge N} a_k$ ([[def-series]]). Then:\n\n1. $t_j = s_{j+N} - s_N$ for every $j \\in \\mathbb{N}$;\n2. $\\sum a_k$ converges **if and only if** its $N$-th tail series converges, and\n   in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; s_N \\;+\\; \\sum_{k=N}^{\\infty} a_k ;$$\n3. hence the following are equivalent: $\\sum a_k$ converges; every tail series of\n   $\\sum a_k$ converges; some tail series of $\\sum a_k$ converges.\n\nIn words: convergence of a series is a property of its terms from any index on,\nand changing finitely many terms changes the sum but not the fact of convergence.",
      "uses": [
        "4.3"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is\n$K \\in \\mathbb{N}$ with\n\n$$0 \\;\\le\\; a_k \\;\\le\\; b_k \\qquad \\text{for all } k \\ge K .$$\n\nThen:\n\n1. if $\\sum b_k$ converges then $\\sum a_k$ converges ([[def-series]]);\n2. if $\\sum a_k$ diverges then $\\sum b_k$ diverges.\n\nThe same statement holds verbatim for series with a general starting index $m$,\napplied to the shifted sequences of [[def-series]].\n\nThe hypothesis is on the terms from some index on, not on all of them: finitely\nmany terms of either sequence may violate it, or be negative, without affecting\nthe conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that\nindex on.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and\na **sequence of reals** is a function $a : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), written $(a_k)$; recall that $\\mathbb{N}$ contains $0$.\n\n**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial\nsums** is\n\n$$s_n \\;:=\\; \\sum_{k < n} a_k \\qquad (n \\in \\mathbb{N}),$$\n\nthe finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and\n$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses\nthat define the finite sum. Note that $s_n$ is the sum of the $n$ terms\n$a_0, \\dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last\none.\n\n**Convergence, the sum, divergence.** The **series** of $(a_k)$, written\n$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges\n([[def-real-limit]]), and then the **sum of the series** is\n\n$$\\sum_{k=0}^{\\infty} a_k \\;:=\\; \\lim_{n} s_n .$$\n\nThe series **diverges** when $(s_n)$ does not converge. A convergent sequence of\nreals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names\na single real number and nothing further has to be checked for it to be\nwell defined.\n\n**Series with a general starting index.** Let $m \\in \\mathbb{N}$ and let $a$ be a\nfunction on $\\{\\, k \\in \\mathbb{N} : k \\ge m \\,\\}$, which we call a **family from\n$m$** and write $(a_k)_{k \\ge m}$. The series\n\n$$\\sum_{k \\ge m} a_k$$\n\nis by definition the series of the sequence $b_j := a_{j + m}$,\n$j \\in \\mathbb{N}$, which is a genuine sequence of reals; it converges exactly\nwhen that series converges, and its sum is then written\n$\\sum_{k = m}^{\\infty} a_k$. Its partial sums are\n\n$$\\sum_{k=m}^{n-1} a_k \\;=\\; \\sum_{j < n-m} a_{m+j} \\qquad (n \\ge m),$$\n\nin the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum\n$0$. A sequence on $\\mathbb{N}$ is the case $m = 0$, and the two readings of\n$\\sum a_k$ agree there, since $b_j = a_j$.\n\n**This clause is not a convenience.** Sequences in this library are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the\nclassical series are built from expressions that are undefined at the index $0$:\n$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \\ge 1$. Writing such a series as\n$\\sum_{k \\ge 1} a_k$ names an honest object, whereas writing it as a sequence on\n$\\mathbb{N}$ would require a value at an index where the defining expression has\nnone. Every statement on this page says which starting index it uses.\n\n**Tail series.** For $N \\in \\mathbb{N}$, the **$N$-th tail series** of\n$\\sum a_k$ is $\\sum_{k \\ge N} a_k$, that is the series of the $N$-th tail\n$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The\n$0$-th tail series is the series itself.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-nth-term-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals. If the series $\\sum a_k$ converges\n([[def-series]]) then the sequence $(a_k)$ converges ([[def-real-limit]]), with\n\n$$\\lim_{k} a_k \\;=\\; 0 .$$\n\nEquivalently, in the contrapositive form in which the lemma is almost always\nused: **if $(a_k)$ does not converge to $0$ then $\\sum a_k$ diverges.**\n\nThe same statement holds for a series $\\sum_{k \\ge m} a_k$ with a general\nstarting index, with the conclusion that $(a_{j+m})_{j \\in \\mathbb{N}}$ converges\nto $0$: that series is by definition the series of the sequence\n$b_j = a_{j+m}$ ([[def-series]]), so it is the statement above applied to $(b_j)$.\n\nThe converse is false; it is refuted by [[fs-nth-term-test-converse]].",
      "uses": [
        "5.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "5.2"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-nth-root-of-n-tends-to-one",
      "source_section": "Statement",
      "quote": "For a natural number $n \\ge 1$ write $\\iota(n) := n \\cdot 1_{\\mathbb{R}}$ for the\ncanonical natural of $\\mathbb{R}$ ([[lem-of-naturals-positive]]) and\n$n^{1/n} := \\iota(n)^{1/n}$, $n^{1/2} := \\iota(n)^{1/2}$ for its roots\n([[thm-nth-roots-exist]], [[def-rational-power]]). Then:\n\n1. $\\displaystyle 1 \\;\\le\\; n^{1/n} \\;\\le\\; 1 + \\frac{2}{n^{1/2}}$ for every natural $n \\ge 1$;\n2. the sequence $r_k := (k+1)^{1/(k+1)}$, $k \\in \\mathbb{N}$, converges to $1$\n   ([[def-real-limit]]).\n\n**The index range is not cosmetic.** The expression $n^{1/n}$ is defined only for\n$n \\ge 1$, since $1/n$ is not a rational number when $n = 0$\n([[def-rational-power]]). Sequences in this library are functions on $\\mathbb{N}$\nand $\\mathbb{N}$ contains $0$ ([[def-sequence]]), so the statement of convergence\nis made about the shifted family $r_k = (k+1)^{1/(k+1)}$, which is the classical\nfamily $n^{1/n}$, $n \\ge 1$, reindexed by $n = k+1$. Claim 1 is stated over the\nnatural range $n \\ge 1$ where the expression means something.",
      "uses": [
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-convergence-iff-limsup-equals-liminf",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\limsup$ and\n$\\liminf$ as in [[def-limsup-liminf]].\n\n1. For $L \\in \\mathbb{R}$: $(x_k)$ converges to $L$ ([[def-real-limit]]) **if and\n   only if** $\\liminf_k x_k = \\limsup_k x_k = L$.\n2. $x_k \\to +\\infty$ ([[def-divergence-to-infinity]]) **if and only if**\n   $\\liminf_k x_k = \\limsup_k x_k = +\\infty$. Moreover $\\liminf_k x_k = +\\infty$\n   on its own already forces $\\limsup_k x_k = +\\infty$.\n3. $x_k \\to -\\infty$ **if and only if** $\\liminf_k x_k = \\limsup_k x_k = -\\infty$,\n   and $\\limsup_k x_k = -\\infty$ on its own already forces\n   $\\liminf_k x_k = -\\infty$.\n\nThe three clauses combine into one statement about the extended line: for\n$L \\in \\overline{\\mathbb{R}}$, the sequence $(x_k)$ converges to $L$ in\n$\\overline{\\mathbb{R}}$ ([[def-extended-limits]]) if and only if\n\n$$\\liminf_{k} x_k = \\limsup_{k} x_k = L .$$\n\nSince $\\liminf_k x_k \\le \\limsup_k x_k$ always ([[lem-liminf-le-limsup]]), the\nsingle equation $\\liminf_k x_k = \\limsup_k x_k$ is therefore equivalent to\nconvergence in $\\overline{\\mathbb{R}}$, and the common value is the limit. A\nsequence that neither converges nor diverges to $\\pm\\infty$ is exactly one for\nwhich the inequality is strict.",
      "uses": [
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-algebra-of-limits",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to\n$x$ and $y$ respectively ([[def-real-limit]]), and let $c \\in \\mathbb{R}$. Then\n\n$$x_k + y_k \\to x + y, \\qquad c\\,x_k \\to c\\,x, \\qquad x_k - y_k \\to x - y, \\qquad x_k y_k \\to x y,$$\n\nand if in addition $y \\ne 0$ and $y_k \\ne 0$ for every $k \\in \\mathbb{N}$, then\n\n$$\\frac{1}{y_k} \\to \\frac{1}{y} \\qquad \\text{and} \\qquad \\frac{x_k}{y_k} \\to \\frac{x}{y}.$$\n\nThe quotient case rests on an eventual lower bound for $|y_k|$, proved below\nrather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.",
      "uses": [
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-rational-power-laws",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a, b > 0$ and let $r, s \\in \\mathbb{Q}$, with\nrational powers as in [[def-rational-power]]. Then:\n\n1. $a^{r} > 0$.\n2. $a^{r+s} = a^{r} a^{s}$.\n3. $(ab)^{r} = a^{r} b^{r}$; in particular $\\big(ab\\big)^{1/N} = a^{1/N} b^{1/N}$ for every natural $N \\ge 1$.\n4. $a^{-r} = \\big(a^{r}\\big)^{-1} = 1/a^{r}$.\n5. $\\big(a^{r}\\big)^{s} = a^{rs}$.\n\nClaims 2 and 3 persist in the supplementary case of [[def-rational-power]]: for\n$a, b \\ge 0$ and rationals $r, s > 0$ ([[def-rat-order]]) one still has\n$(ab)^{r} = a^{r} b^{r}$ and $a^{r+s} = a^{r} a^{s}$. The two identities degenerate\ndifferently, and it is worth saying how. In the product identity, a zero base on\neither side makes both sides $0$. In the addition identity only the base $a$\noccurs, so it degenerates only when $a = 0$, and then both sides are $0$; when\n$a > 0$ that identity holds with no hypothesis on $b$ at all.",
      "uses": [
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-rational-power-monotone",
      "source_section": "Statement",
      "quote": "Let $a \\in \\mathbb{R}$ with $a > 0$ and let $r, s \\in \\mathbb{Q}$ with $r < s$\n([[def-rat-order]]), with rational powers as in [[def-rational-power]].\n\n1. **In the exponent.** If $a > 1$ then $a^{r} < a^{s}$; if $a = 1$ then $a^{r} = a^{s} = 1$; if $0 < a < 1$ then $a^{r} > a^{s}$.\n2. **In the base.** If $r \\in \\mathbb{Q}$ with $r > 0$ and $0 < a < b$, then $a^{r} < b^{r}$; so $a \\mapsto a^{r}$ is strictly increasing on $\\{a \\in \\mathbb{R} : a > 0\\}$.\n3. **Comparison with $1$.** For rational $t > 0$: $a > 1$ implies $a^{t} > 1$, and $0 < a < 1$ implies $a^{t} < 1$.",
      "uses": [
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L10",
      "source": "thm-p-series-rational",
      "source_section": "Statement",
      "quote": "Let $p \\in \\mathbb{Q}$ with $p > 0$. For a natural number $k \\ge 1$ write\n$\\iota(k) = k \\cdot 1_{\\mathbb{R}}$ for the canonical natural, which is positive\n([[lem-of-naturals-positive]]), and write $k^{p} := \\iota(k)^{p}$ for its rational\npower ([[def-rational-power]]). Then\n\n$$\\sum_{k \\ge 1} \\frac{1}{k^{p}} \\ \\text{converges} \\qquad \\Longleftrightarrow \\qquad p > 1 .$$\n\nIn particular the harmonic series $\\sum_{k \\ge 1} 1/k$ diverges, at $p = 1$, and\n$\\sum_{k \\ge 1} 1/k^{2}$ converges, at $p = 2$.\n\n**The index range is not cosmetic.** The series starts at $k = 1$ because\n$1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational\n$p > 0$, and $0$ has no inverse. Sequences here are functions on $\\mathbb{N}$ and\n$\\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series\nfrom the starting index $1$ in the sense of [[def-series]], not a series of a\nsequence on $\\mathbb{N}$.\n\n**The exponent is rational, and that is a limitation of this page.** Rational\npowers of a positive base are what [[def-rational-power]] supplies; real exponents\nrequire the exponential and the logarithm, which this library develops later. The\nstatement above is therefore the full $p$-series theorem for every exponent this\npage can name.",
      "uses": [
        "2.3",
        "2.4"
      ]
    },
    {
      "fact": "L11",
      "source": "lem-absolute-convergence-implies-convergence",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals. If the series $\\sum |a_k|$ converges\n([[def-series]]) then the series $\\sum a_k$ converges.\n\nA series with the property that $\\sum |a_k|$ converges is called **absolutely\nconvergent**; the lemma says that absolute convergence implies convergence.\n\nThe same statement holds for a family from a general starting index $m$, being\nthis statement applied to the shifted sequence $j \\mapsto a_{j+m}$\n([[def-series]]).\n\n**The converse is false**, and the standard witness is the alternating harmonic\nseries. That witness is not available on this page: its convergence is the\nalternating series test, which is not proved here. Nothing below asserts a\nconverse, and no item on this page uses one.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and\na **sequence of reals** is a function $a : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), written $(a_k)$; recall that $\\mathbb{N}$ contains $0$.\n\n**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial\nsums** is\n\n$$s_n \\;:=\\; \\sum_{k < n} a_k \\qquad (n \\in \\mathbb{N}),$$\n\nthe finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and\n$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses\nthat define the finite sum. Note that $s_n$ is the sum of the $n$ terms\n$a_0, \\dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last\none.\n\n**Convergence, the sum, divergence.** The **series** of $(a_k)$, written\n$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges\n([[def-real-limit]]), and then the **sum of the series** is\n\n$$\\sum_{k=0}^{\\infty} a_k \\;:=\\; \\lim_{n} s_n .$$\n\nThe series **diverges** when $(s_n)$ does not converge. A convergent sequence of\nreals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names\na single real number and nothing further has to be checked for it to be\nwell defined.\n\n**Series with a general starting index.** Let $m \\in \\mathbb{N}$ and let $a$ be a\nfunction on $\\{\\, k \\in \\mathbb{N} : k \\ge m \\,\\}$, which we call a **family from\n$m$** and write $(a_k)_{k \\ge m}$. The series\n\n$$\\sum_{k \\ge m} a_k$$\n\nis by definition the series of the sequence $b_j := a_{j + m}$,\n$j \\in \\mathbb{N}$, which is a genuine sequence of reals; it converges exactly\nwhen that series converges, and its sum is then written\n$\\sum_{k = m}^{\\infty} a_k$. Its partial sums are\n\n$$\\sum_{k=m}^{n-1} a_k \\;=\\; \\sum_{j < n-m} a_{m+j} \\qquad (n \\ge m),$$\n\nin the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum\n$0$. A sequence on $\\mathbb{N}$ is the case $m = 0$, and the two readings of\n$\\sum a_k$ agree there, since $b_j = a_j$.\n\n**This clause is not a convenience.** Sequences in this library are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the\nclassical series are built from expressions that are undefined at the index $0$:\n$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \\ge 1$. Writing such a series as\n$\\sum_{k \\ge 1} a_k$ names an honest object, whereas writing it as a sequence on\n$\\mathbb{N}$ would require a value at an index where the defining expression has\nnone. Every statement on this page says which starting index it uses.\n\n**Tail series.** For $N \\in \\mathbb{N}$, the **$N$-th tail series** of\n$\\sum a_k$ is $\\sum_{k \\ge N} a_k$, that is the series of the $N$-th tail\n$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The\n$0$-th tail series is the series itself.",
      "uses": [
        "6.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Assume $\\rho < 1$.",
      "step": "1.1",
      "inputs": [
        "assume-case lt"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Assume instead $\\rho > 1$.",
      "step": "1.2",
      "inputs": [
        "assume-case gt"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Assume instead $\\rho = 1$.",
      "step": "1.3",
      "inputs": [
        "assume-case one"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Every $\\rho_k$ is a nonnegative real, so each $s_n \\ge \\rho_n \\ge 0$ and hence $0$ is a lower bound of $\\{s_n\\}$, giving $\\rho \\ge 0$; combined with the case hypothesis $\\rho < 1$ this puts $\\rho$ strictly between the reals $0$ and $1$, so $\\rho$ is a real number.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1",
        "L2",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "In the case $\\rho > 1$, the value $\\rho$ is a lower bound of $\\{s_n\\}$, so $s_n \\ge \\rho > 1$ for every $n \\in \\mathbb{N}$.",
      "step": "2.2",
      "inputs": [
        "1.2",
        "L1"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "In the case $\\rho = 1$, take first $b_k := 1/k$ for $k \\ge 1$. Its root family is $\\big(1/(k+1)\\big)^{1/(k+1)} = 1 / (k+1)^{1/(k+1)}$, and since $(k+1)^{1/(k+1)} \\to 1$ with every term at least $1$, the quotient rule gives convergence to $1$, so the limit superior of the root family is $1$; and $\\sum_{k \\ge 1} 1/k$ diverges, being the case $p = 1$.",
      "step": "2.3",
      "inputs": [
        "1.3",
        "L8",
        "L9",
        "L10"
      ]
    },
    {
      "id": "step-2-4",
      "claim": "In the case $\\rho = 1$, take next $c_k := 1/k^{2}$ for $k \\ge 1$. Its root family is $\\big((k+1)^{-2}\\big)^{1/(k+1)} = \\big((k+1)^{1/(k+1)}\\big)^{-2}$, which converges to $1^{-2} = 1$ by the product and quotient rules, so again the limit superior of the root family is $1$; and $\\sum_{k \\ge 1} 1/k^{2}$ converges, being the case $p = 2$.",
      "step": "2.4",
      "inputs": [
        "1.3",
        "L8",
        "L9",
        "L10"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "In the case $\\rho < 1$ put $t := (\\rho + 1)/2$, a real number with $0 \\le \\rho < t < 1$; since $t$ is not a lower bound of $\\{s_n\\}$ there is $N \\in \\mathbb{N}$ with $s_N < t$.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1",
        "choose"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "In the case $\\rho > 1$, for each $n$ the real $1$ is not an upper bound of $\\{\\rho_k : k \\ge n\\}$, so there is $k \\ge n$ with $\\rho_k > 1$.",
      "step": "3.2",
      "inputs": [
        "2.2",
        "L1"
      ]
    },
    {
      "id": "step-3-3",
      "claim": "So at $\\rho = 1$ one family gives a divergent series and another a convergent one, and neither of the two conclusions can be drawn, which is claim 3.",
      "step": "3.3",
      "inputs": [
        "2.3",
        "2.4"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "In the case $\\rho < 1$, for every $k \\ge N$ we have $\\rho_k \\le s_N < t$, and raising both nonnegative sides to the power $k+1 \\ge 1$ gives $|a_{k+1}| = (\\rho_k)^{k+1} < t^{\\,k+1}$.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "In the case $\\rho > 1$, whenever $\\rho_k > 1$ we get $|a_{k+1}| = (\\rho_k)^{k+1} > 1^{\\,k+1} = 1$; so by step 3.2 there are indices $k \\ge n$ with $|a_{k+1}| > 1$ for every $n$.",
      "step": "4.2",
      "inputs": [
        "3.2",
        "L3"
      ]
    },
    {
      "id": "step-4-3",
      "claim": "In the case $\\rho < 1$: since $0 < t < 1$ the geometric series $\\sum_{j \\ge 0} t^{j}$ converges, hence so does its first tail series $\\sum_{m \\ge 1} t^{m}$.",
      "step": "4.3",
      "inputs": [
        "3.1",
        "L5"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "In the case $\\rho < 1$: putting $x_j := |a_{j+1}|$ and $y_j := t^{\\,j+1}$ for $j \\in \\mathbb{N}$, step 4.1 gives $0 \\le x_j \\le y_j$ for all $j \\ge N$, and $\\sum_j y_j$ is the convergent series of step 4.3; so $\\sum_{k \\ge 1} |a_k|$ converges.",
      "step": "5.1",
      "inputs": [
        "4.1",
        "4.3",
        "L4",
        "L6"
      ]
    },
    {
      "id": "step-5-2",
      "claim": "In the case $\\rho > 1$: the sequence $j \\mapsto a_{j+1}$ does not converge to $0$, because with the rational tolerance $1$ no index $K$ satisfies $|a_{k+1}| < 1$ for all $k \\ge K$; hence $\\sum_{k \\ge 1} a_k$ diverges, which is claim 2.",
      "step": "5.2",
      "inputs": [
        "4.2",
        "L7"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "In the case $\\rho < 1$: the series $\\sum_{k \\ge 1} |a_k|$ having been shown to converge, the sequence $j \\mapsto a_{j+1}$ has a convergent absolute-value series, so $\\sum_{k \\ge 1} a_k$ converges as well; together with the convergence of $\\sum_{k \\ge 1}|a_k|$ that is claim 1.",
      "step": "6.1",
      "inputs": [
        "5.1",
        "L11"
      ]
    },
    {
      "id": "step-7-1",
      "claim": "The three cases $\\rho < 1$, $\\rho > 1$ and $\\rho = 1$ exhaust $\\overline{\\mathbb{R}}$, the extended order being total, so the three claims together cover every family.",
      "step": "7.1",
      "inputs": [
        "6.1",
        "5.2",
        "3.3",
        "L1",
        "cases-exhaustive"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The family begins at index 1 and the shifted root family is a sequence on N; no empty family is quantified."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement admits zero terms through the supplementary rational-power clause; steps 2.1 and 5.1 use only nonnegative roots."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "steps 2.3, 2.4, and 3.3 give both a divergent and a convergent witness at rho = 1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "the zero family has rho = 0 and is covered by the rho < 1 comparison in steps 2.1-6.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "steps 1.1-1.3 and 7.1 exhaust rho < 1, rho = 1, and rho > 1 in the extended order."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "steps 2.3, 2.4, 3.1, 3.2, 4.2: every selected index or tolerance is supplied by the cited limit, order-bound, Archimedean, or divergence clause; no selection from an unproved nonempty family is hidden."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The asserted claim is not a biconditional; any contrapositive wording is the same one-directional implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The asserted claim is not a biconditional, so no independent reverse implication is claimed."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A5/A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-limsup-exists",
    "declared_target": "lem-limsup-exists",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-ratio-root-inequality",
    "declared_target": "thm-ratio-root-inequality",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-series-tail-invariance",
    "declared_target": "lem-series-tail-invariance",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-absolute-convergence-implies-convergence",
    "declared_target": "lem-absolute-convergence-implies-convergence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-nth-term-test",
    "declared_target": "lem-nth-term-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-nth-roots-exist",
    "declared_target": "thm-nth-roots-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-rational-power",
    "declared_target": "def-rational-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-rational-power-laws",
    "declared_target": "lem-rational-power-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-rational-power-monotone",
    "declared_target": "lem-rational-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-power-monotone",
    "declared_target": "lem-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-extended-reals",
    "declared_target": "def-extended-reals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-extended-reals-complete",
    "declared_target": "lem-extended-reals-complete",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-p-series-rational",
    "declared_target": "thm-p-series-rational",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-nth-root-of-n-tends-to-one",
    "declared_target": "lem-nth-root-of-n-tends-to-one",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-algebra-of-limits",
    "declared_target": "thm-algebra-of-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-convergence-iff-limsup-equals-liminf",
    "declared_target": "thm-convergence-iff-limsup-equals-liminf",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-root-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (22)

### `def-extended-reals`

````markdown
---
id: def-extended-reals
kind: definition
title: "The extended real line $\\overline{\\mathbb{R}} = \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$, its order, and the arithmetic that is left undefined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-divergence-to-infinity, def-partial-order, lem-of-add-order]
justified_by: []
forward_refs: [cex-zero-times-infinity-indeterminate]
aliases: [def-extended-real-line]
landmark: true
short: "$\\overline{\\mathbb{R}}$"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (1.23, the extended real number system)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.2 (the extended real number system)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. K. Hunter, Measure Theory notes"
      url: "https://www.math.ucdavis.edu/~hunter/m206/ch0_measure.pdf"
pipeline_run: null
---

## Definition

Fix two objects $-\infty$ and $+\infty$, distinct from one another and neither of
them a real number ([[def-real-numbers]]), and set

$$\overline{\mathbb{R}} := \mathbb{R} \cup \{-\infty, +\infty\}.$$

This is a **new object**, introduced here explicitly with its own order and its
own partial arithmetic. It is not an enlargement of the field $\mathbb{R}$, and
no operation of $\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by
anything below.

**The order.** For $a, b \in \overline{\mathbb{R}}$ declare

$$a \le b \quad :\Longleftrightarrow \quad a = -\infty \ \text{ or } \ b = +\infty \ \text{ or } \ \big(a, b \in \mathbb{R} \text{ and } a \le b \text{ in } \mathbb{R}\big),$$

with $\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for
"$a \le b$ and $a \ne b$" as usual ([[def-partial-order]]).

**$(\overline{\mathbb{R}}, \le)$ is a totally ordered set, and the inclusion of
$\mathbb{R}$ preserves and reflects the order.** All four checks are immediate
from the displayed clauses.

- *Reflexive.* For $a = \pm\infty$ one of the first two clauses applies; for
  $a \in \mathbb{R}$ the third does, since $a \le a$ in $\mathbb{R}$.
- *Antisymmetric.* Suppose $a \le b$ and $b \le a$. If $a = -\infty$ then
  $b \le a$ forces $b = -\infty$, since the clause $a = +\infty$ fails and $b, a$
  are not both real. Symmetrically $b = -\infty$ forces $a = -\infty$, and
  $a = +\infty$ or $b = +\infty$ forces the other to be $+\infty$. In the one
  remaining situation $a$ and $b$ are both real and antisymmetry is that of
  $\mathbb{R}$.
- *Transitive.* Let $a \le b \le c$. If $a = -\infty$ or $c = +\infty$ the
  conclusion is one of the first two clauses. Otherwise $a \ne -\infty$ forces,
  in $a \le b$, either $b = +\infty$ or $a, b \in \mathbb{R}$; and $c \ne +\infty$
  forces, in $b \le c$, either $b = -\infty$ or $b, c \in \mathbb{R}$. The value
  $b = +\infty$ is incompatible with the second alternative pair, so $b$ is real,
  hence so are $a$ and $c$, and transitivity is that of $\mathbb{R}$.
- *Total.* If $a = -\infty$ or $b = +\infty$ then $a \le b$; if $b = -\infty$ or
  $a = +\infty$ then $b \le a$; otherwise both are real and the order of
  $\mathbb{R}$ is total.
- *Preserved and reflected.* For $a, b \in \mathbb{R}$ the first two clauses fail,
  so $a \le b$ in $\overline{\mathbb{R}}$ says exactly $a \le b$ in $\mathbb{R}$.

In particular $-\infty$ is the least and $+\infty$ the greatest element of
$\overline{\mathbb{R}}$, and $-\infty < x < +\infty$ for every $x \in \mathbb{R}$.

**Reflection.** Extend negation by

$$-(+\infty) := -\infty, \qquad -(-\infty) := +\infty,$$

keeping the field negative on $\mathbb{R}$. The resulting map
$\nu : \overline{\mathbb{R}} \to \overline{\mathbb{R}}$, $\nu(a) = -a$, satisfies
$\nu(\nu(a)) = a$ and

$$a \le b \iff -b \le -a \qquad (a, b \in \overline{\mathbb{R}}).$$

For $a$ and $b$ real this is the elementwise order reversal in $\mathbb{R}$:
translation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$
turns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,
while $a = b$ holds exactly when $-a = -b$. In every other case both sides are
decided by the first two clauses of the order: $a = -\infty$ makes both sides
true, as does $b = +\infty$, and if $a \ne -\infty$, $b \ne +\infty$ and $a, b$
are not both real then one of $a = +\infty$, $b = -\infty$ holds and both sides
are false.

**Partial addition.** For $a, b \in \overline{\mathbb{R}}$ the sum $a + b$ is
defined by

- $a + b$ = the field sum, when $a, b \in \mathbb{R}$;
- $a + b := +\infty$ when $a = +\infty$ and $b \ne -\infty$, or $b = +\infty$ and $a \ne -\infty$;
- $a + b := -\infty$ when $a = -\infty$ and $b \ne +\infty$, or $b = -\infty$ and $a \ne +\infty$;

and **the two sums $(+\infty) + (-\infty)$ and $(-\infty) + (+\infty)$ are left
undefined**. Addition is commutative where defined, and

$$-(a + b) = (-a) + (-b),$$

each side being defined exactly when the other is: the excluded pairs
$\{+\infty, -\infty\}$ are exchanged by $\nu$, and the three clauses above are
exchanged accordingly.

**Partial multiplication.** For $a, b \in \overline{\mathbb{R}}$ the product $ab$
is defined by

- $ab$ = the field product, when $a, b \in \mathbb{R}$;
- $ab := +\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and both are $> 0$ or both are $< 0$;
- $ab := -\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and one is $> 0$ and the other $< 0$;

and **every product with one factor $0$ and the other $\pm\infty$ is left
undefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,
under which $+\infty > 0 > -\infty$.

**Nothing else is defined.** There is no subtraction, no division, no
exponentiation and no absolute value on $\overline{\mathbb{R}}$ in this library;
where such an expression is wanted it is written out in the two defined
operations, and where a case falls in the undefined list the statement carries an
explicit hypothesis saying so.

## Remarks

- **$\overline{\mathbb{R}}$ is not a field, and not an ordered field.** It has no
  additive inverse for $+\infty$: $(+\infty) + b$ is $+\infty$ whenever it is
  defined and is never $0$. So none of the field axioms
  ([[def-complete-ordered-field]]) is available here, and no algebraic
  manipulation valid in $\mathbb{R}$ may be transported to
  $\overline{\mathbb{R}}$ without a separate justification.

- **Why the excluded cases are excluded.** The three defined clauses of each
  operation are exactly the cases in which the value is forced by the limiting
  behaviour of the sequences involved, and the excluded cases are exactly the
  ones in which it is not. For the product this is proved on the companion page:
  [[cex-zero-times-infinity-indeterminate]] exhibits a null sequence and two
  sequences diverging to $+\infty$ whose products behave differently, so no value
  assigned to $0 \cdot (+\infty)$ could be compatible with products of limits.
  The same phenomenon rules out a value for $(+\infty) + (-\infty)$: with
  $a_k = k$ and $b_k = -k$ the sum is constantly $0$, while with $b_k = -2k$ it
  diverges to $-\infty$. Leaving them undefined is not squeamishness, it is the
  only option that keeps every later statement about limits true without a
  side condition hidden inside the arithmetic.

- **This is the separate introduction that [[rem-sup-conventions]] points to.**
  That remark refuses the conventions $\sup S = +\infty$ and
  $\inf \emptyset = +\infty$ inside $\mathbb{R}$, and records that the extended
  real line is introduced explicitly here, with its own order and its own partial
  arithmetic kept separate from $\mathbb{R}$ rather than quietly extending it.
  This is that introduction. The suprema and infima of [[def-complete-ordered-field]],
  [[def-infimum]] and the whole suprema page remain real numbers with their
  nonempty and bounded hypotheses intact; what is new is a *separate* supremum
  operation, taken in $\overline{\mathbb{R}}$ and named as such, supplied by
  [[lem-extended-reals-complete]].

- **The symbols were already in circulation, and this definition does not change
  what they meant.** [[def-divergence-to-infinity]] defines the single phrase
  "$x_k \to +\infty$" as an abbreviation for a condition on $(x_k)$, and says in
  as many words that it does not define an object named $+\infty$. That reading
  is still correct: nothing in [[def-divergence-to-infinity]] is restated or
  reinterpreted here, and [[def-extended-limits]] is where the two are related, by
  a definition that quotes the old one rather than replacing it. Likewise the
  interval notation $(a, \infty)$ of [[def-interval]] is notation for a condition
  on one side, not an endpoint, and stays that way.

- **Why the order is defined by three clauses rather than by a picture.** The
  clauses are what the verifications above actually use, and they make the two
  facts that later proofs lean on immediate: every element is $\le +\infty$ and
  every element is $\ge -\infty$, with no case analysis at the point of use.
````

### `def-limsup-liminf`

````markdown
---
id: def-limsup-liminf
kind: definition
title: "Limit superior and limit inferior of a real sequence as $\\inf_n \\sup_{k \\ge n} x_k$ and $\\sup_n \\inf_{k \\ge n} x_k$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals, def-sequence, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, lem-extended-reals-complete]
justified_by: []
aliases: [def-limsup, def-liminf]
landmark: true
short: "$\\limsup$, $\\liminf$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.16)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \in \mathbb{N}$ let

$$T_n \;:=\; \{\, x_k : k \in \mathbb{N},\ k \ge n \,\} \subseteq \mathbb{R}$$

be the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\mathbb{R}$ since
$x_n \in T_n$. Regard $T_n$ as a subset of $\overline{\mathbb{R}}$
([[def-extended-reals]]) and put

$$s_n \;:=\; \sup T_n \in \overline{\mathbb{R}}, \qquad i_n \;:=\; \inf T_n \in \overline{\mathbb{R}},$$

the supremum and infimum taken in $\overline{\mathbb{R}}$, which exist for every
$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit
superior** and **limit inferior** of $(x_k)$ are then

$$\limsup_{k} x_k \;:=\; \inf \{\, s_n : n \in \mathbb{N} \,\}, \qquad \liminf_{k} x_k \;:=\; \sup \{\, i_n : n \in \mathbb{N} \,\},$$

again taken in $\overline{\mathbb{R}}$ and again existing by
[[lem-extended-reals-complete]], since $\{s_n : n \in \mathbb{N}\}$ and
$\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$ on which no
hypothesis is needed. Both are elements of $\overline{\mathbb{R}}$, and either may
be $+\infty$ or $-\infty$. The notations $\limsup_{k \to \infty} x_k$,
$\varlimsup_k x_k$ and $\overline{\lim}_k x_k$ all denote the first of them
elsewhere; this library writes $\limsup_k x_k$.

**Every quantity written here exists, and that is why the extended line was
introduced.** Each of the four operations above is an application of
[[lem-extended-reals-complete]] to a subset of $\overline{\mathbb{R}}$ carrying no
hypothesis whatever. Written with the real supremum of
[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]
instead, the definition would be available only for sequences that are bounded
([[def-bounded-set]]): $\sup T_n$ needs $T_n$ bounded above, and
$\inf\{s_n\}$ needs $\{s_n\}$ nonempty, bounded below, and made of real numbers
([[def-infimum]]). None of those is automatic, and the discipline recorded in
[[rem-sup-conventions]] forbids papering over the gap with a convention. The
extended supremum is a different operation in a different ordered set, and it is
total.

**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say
$|x_k| \le M$ for every $k$, then each $T_n$ is a nonempty subset of $\mathbb{R}$
bounded above by $M$ and below by $-M$, so by the agreement clause of
[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum
or infimum of $T_n$, and lies in $[-M, M]$. The family $\{s_n\}$ is then a
nonempty set of reals bounded below by $-M$, so $\limsup_k x_k$ is likewise the
real infimum of $\{s_n\}$ and lies in $[-M, M]$; dually for $\liminf_k x_k$. So
for a bounded sequence both quantities are ordinary real numbers computed with
the ordinary real supremum and infimum, and the extended line is doing no work.
It is only for unbounded sequences that the values $\pm\infty$ occur.

## Remarks

- **The order of the two operations is not symmetric and must be kept straight.**
  $\limsup$ is an infimum of suprema and $\liminf$ a supremum of infima. Taking
  them in the other order gives $\sup_n \sup_{k \ge n} x_k = \sup_k x_k$ and
  $\inf_n \inf_{k \ge n} x_k = \inf_k x_k$, which are the extreme values of the
  whole sequence and carry no information about its behaviour at large indices.
  The point of the definition is that the inner operation looks at a tail and the
  outer one lets the tail recede.

- **Why tails at all.** Each $s_n$ is a bound on the whole tail from index $n$ on,
  so it forgets the first $n$ terms; letting $n$ grow forgets any fixed finite
  number of them. That is what makes $\limsup$ and $\liminf$ tail quantities in
  the sense of [[lem-limit-of-tail]], and it is the reason they can characterise
  convergence, which is itself a tail property.

- **Neither quantity is a limit, and neither is claimed to be one.** The symbols
  $\limsup$ and $\liminf$ are single pieces of notation for the two displayed
  expressions, exactly as "$x_k \to +\infty$" is a single abbreviation in
  [[def-divergence-to-infinity]]. That the family $(s_n)$ does decrease to
  $\limsup_k x_k$ in a precise sense is a theorem, not part of this definition;
  the monotonicity half is [[lem-limsup-exists]].

- **The tail ranges are sets, not sequences.** $T_n$ is the range of the $n$-th
  tail, so repetitions and order are forgotten ([[def-sequence]]). That is
  harmless here, since a supremum depends only on the set of values, and it is
  what lets the whole definition be phrased with the order-theoretic operations of
  [[lem-extended-reals-complete]] and nothing else.
````

### `def-rational-power`

````markdown
---
id: def-rational-power
kind: definition
title: "Rational powers $a^r$ of a positive base"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-nth-roots-exist, def-integer-power, def-rationals, lem-rat-positive-denominator, lem-nat-embeds-int, def-rat-order, lem-power-monotone, lem-power-laws, lem-of-inverse-positive]
justified_by: [lem-rational-power-well-defined]
aliases: []
landmark: true
short: "$a^{m/n} := (a^{1/n})^m$, $a>0$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-04
    scope: published-audit-targeted
    context_sha256: 22067f1978d2f781dd7327a6f5c81cccbbc2009bd13885930f7d56ba5a2ceb5e
    item_sha256: 4f75fe6e8c39549d9a1c82a4fc920d13b890d3917b367621daddcaf70f377565
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$ with $a > 0$ and let $r \in \mathbb{Q}$ ([[def-rationals]]).

Every rational has a representative with positive denominator
([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \in \mathbb{Z}$
and $n$ a positive integer; a positive integer is the image of a unique natural
$\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define

$$a^{r} := \big(a^{1/n}\big)^{m},$$

where $a^{1/n}$ is the unique nonnegative $n$-th root of $a$
([[thm-nth-roots-exist]]) and the outer exponent is an integer power
([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when
$a > 0$, so it has an inverse and negative integer exponents are allowed.

**Well-definedness.** The right-hand side must not depend on which representative
$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],
which is recorded in this item's `justified_by` rather than in its `deps`, since
it is a statement *about* the operation defined here and therefore depends on
this definition.

**The base must be positive.** For $a < 0$ the same formula is not a definition
at all, because different representatives of the same rational give different
answers, or no answer: see [[fs-rational-power-of-negative-base]], which is
exactly the item that justifies the restriction.

**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$
([[def-rat-order]]) the displayed formula still makes sense and still does not
depend on the representative: $r > 0$ forces $m \ge 1$, and
$\big(0^{1/n}\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every
$a \ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the
expression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is
what lets the inequalities later on this page be stated for nonnegative entries
rather than for positive ones only.

## Remarks

- **Consistency with integer powers.** If $r \in \mathbb{Z}$ then $r = r/1$,
  $a^{1/1} = a$ ([[thm-nth-roots-exist]]), and the definition returns
  $(a^{1})^{r} = a^{r}$ as given by [[def-integer-power]]. So the notation $a^{r}$
  is unambiguous, and rational powers extend integer powers on positive bases.
  At $r = 1/n$ it returns $\big(a^{1/n}\big)^{1} = a^{1/n}$, so the root notation
  of [[thm-nth-roots-exist]] is the special case $r = 1/n$, as intended.
- $a^{r} > 0$ for every $a > 0$ and **every** $r \in \mathbb{Q}$, the exponent $0$
  included. Writing $r = m/n$ with $n \ge 1$: the root $a^{1/n}$ is positive
  ([[thm-nth-roots-exist]]); for $m \ge 0$ the value $\big(a^{1/n}\big)^{m}$ is a
  natural power of a positive element, hence positive, which is claim 1 of
  [[lem-power-monotone]] and covers $m = 0$ as well, since $a^{0} = 1 > 0$; and for
  $m < 0$ the value is $\big(a^{1/n}\big)^{m} = \Big(\big(a^{1/n}\big)^{-m}\Big)^{-1}$
  ([[lem-power-laws]], claim 2), the inverse of a positive element, hence positive
  ([[lem-of-inverse-positive]]). Note that [[lem-power-monotone]] is stated for
  natural exponents only, so it does not by itself settle the negative case; that
  is what the inverse step is for. The exponent laws are
  [[lem-rational-power-laws]] and the order behaviour is
  [[lem-rational-power-monotone]].
- **The exponent is a rational, never a real.** Nothing on this page is a limit,
  a series or a continuous function, and $a^{r}$ is computed in finitely many
  field operations once the root is available. What would be needed to go
  further, why it is deferred here, and where the library later defines $a^{x}$
  for real $x$ are recorded in [[rem-real-exponents-deferred]].
- The convention $0^0 = 1$ of [[def-integer-power]] is untouched: $r = 0$ is not
  covered by the supplementary clause, which asks for $r > 0$. So $0^0 = 1$ while
  $0^{r} = 0$ for every rational $r > 0$. There is no inconsistency, only the
  familiar fact that the two-variable function $(a, r) \mapsto a^{r}$ has no
  continuous extension to $(0,0)$, a statement this library cannot even make yet.
````

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
````

### `lem-absolute-convergence-implies-convergence`

````markdown
---
id: lem-absolute-convergence-implies-convergence
kind: lemma
title: "If $\\sum |a_k|$ converges then $\\sum a_k$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, thm-series-cauchy-criterion, lem-triangle-inequality-finite, lem-finite-sum-laws, def-finite-sum, lem-of-abs-value, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.45)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. If the series $\sum |a_k|$ converges
([[def-series]]) then the series $\sum a_k$ converges.

A series with the property that $\sum |a_k|$ converges is called **absolutely
convergent**; the lemma says that absolute convergence implies convergence.

The same statement holds for a family from a general starting index $m$, being
this statement applied to the shifted sequence $j \mapsto a_{j+m}$
([[def-series]]).

**The converse is false**, and the standard witness is the alternating harmonic
series. That witness is not available on this page: its convergence is the
alternating series test, which is not proved here. Nothing below asserts a
converse, and no item on this page uses one.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals such that the series $\sum |a_k|$ converges, with partial sums as in [[def-series]] and finite sums as in [[def-finite-sum]].

[L1] The Cauchy criterion for series: $\sum d_k$ converges if and only if for every real $\varepsilon > 0$ there is $N \in \mathbb{N}$ with $\big|\sum_{k=p+1}^{n} d_k\big| < \varepsilon$ for all $n > p \ge N$ ([[thm-series-cauchy-criterion]], [[def-series]]).

[L2] Triangle inequality for finite sums: $\big|\sum_{k<d} u_k\big| \le \sum_{k<d}|u_k|$ ([[lem-triangle-inequality-finite]]); the block $\sum_{k=p+1}^{n} u_k$ is by definition the finite sum $\sum_{t < n-p} u_{p+1+t}$ ([[def-finite-sum]]), so applying the inequality to the shifted sequence $t \mapsto u_{p+1+t}$ gives $\big|\sum_{k=p+1}^{n} u_k\big| \le \sum_{k=p+1}^{n} |u_k|$ for all naturals $n > p$.

[L3] Monotonicity of finite sums: if $x_t \ge 0$ for all $t < d$ then $\sum_{t<d} x_t \ge 0$ ([[lem-finite-sum-laws]]).

[L4] Absolute value: $|u| \ge 0$ for every real $u$, and $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L5] Convergence of a real sequence, and the fact that the real and rational formulations of a tolerance agree ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary real; since $\sum |a_k|$ converges, the Cauchy criterion applied to the sequence $(|a_k|)$ supplies $N \in \mathbb{N}$ with $\big|\sum_{k=p+1}^{n} |a_k|\big| < \varepsilon$ for all $n > p \ge N$. [L1, L5, choose]

1.2 For all naturals $n > p$ the block $\sum_{k=p+1}^{n} |a_k|$ is a finite sum of nonnegative terms, hence nonnegative, hence equal to its own absolute value. [L2, L3, L4]

2.1 So for all $n > p \ge N$ one has $\big|\sum_{k=p+1}^{n} a_k\big| \le \sum_{k=p+1}^{n} |a_k| = \big|\sum_{k=p+1}^{n} |a_k|\big| < \varepsilon$. [step 1.1, step 1.2, L2]

3.1 As $\varepsilon > 0$ was arbitrary, the sequence $(a_k)$ satisfies the Cauchy criterion, so $\sum a_k$ converges. [step 2.1, L1] ∎

## Remarks

- **Nothing here identifies the two sums**, and they are in general different. What is proved is that the second series converges, not that it converges to the same value; the bound $\big|\sum_{k=0}^{\infty} a_k\big| \le \sum_{k=0}^{\infty}|a_k|$ is true and is not needed anywhere on this page, so it is not proved here.

- **Why the Cauchy criterion is the right instrument.** The terms have no sign, so [[thm-nonnegative-series-bounded-partial-sums]] does not apply to $\sum a_k$ and boundedness of its partial sums would prove nothing. The Cauchy criterion is the one convergence test on this page that never names a candidate sum and never asks for a sign, and the whole proof is the observation that its hypothesis for $(|a_k|)$ implies its hypothesis for $(a_k)$, term by term, through one application of the finite triangle inequality.

- **What this unlocks on this page.** The root test ([[thm-root-test]]) and the ratio test ([[thm-ratio-test]]) each produce convergence of $\sum |a_k|$ directly, by comparison with a geometric series; with this lemma both reach their standard conclusion, the convergence of $\sum a_k$ itself. Without it their convergence halves would be strictly weaker than the classical statements.

- **The systematic theory is elsewhere.** Rearrangement, the Riemann series theorem, conditional convergence and products of series all belong with absolute convergence and are developed on a later page of this track. This lemma is only the one implication those two tests need.
````

### `lem-extended-reals-complete`

````markdown
---
id: lem-extended-reals-complete
kind: lemma
title: "Every subset of $\\overline{\\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\\overline{\\mathbb{R}}$, agreeing with the real supremum and infimum on nonempty sets bounded in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-extended-reals, def-upper-bound, def-partial-order, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, def-real-order]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{\\mathbb{R}}$ is order complete"
proof_strategy: cases
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
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Complete lattice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_lattice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \overline{\mathbb{R}}$ be **any** subset of the extended real
line ([[def-extended-reals]]) and write $A_{\mathbb{R}} := A \cap \mathbb{R}$.
Then $A$ has a least upper bound and a greatest lower bound in
$\overline{\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write
$\sup A$ and $\inf A$ with the ambient set always $\overline{\mathbb{R}}$.
Explicitly:

- $\sup A = +\infty$ if $+\infty \in A$, or if $A_{\mathbb{R}}$ is not bounded above in $\mathbb{R}$;
- $\sup A = -\infty$ if $+\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$;
- $\sup A$ is the real supremum $\sup A_{\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\infty \notin A$ and $A_{\mathbb{R}}$ is nonempty and bounded above in $\mathbb{R}$;

and dually, with $-\infty$ and $+\infty$ exchanged and "above" replaced by
"below", for $\inf A$ ([[def-infimum]], [[thm-infimum-property]]).

**Agreement.** If $A \subseteq \mathbb{R}$ is nonempty and bounded above in
$\mathbb{R}$ ([[def-bounded-set]]) then $\sup A$ computed in
$\overline{\mathbb{R}}$ is the real number $\sup A$ of
[[def-complete-ordered-field]]; if $A \subseteq \mathbb{R}$ is nonempty and
bounded below then $\inf A$ computed in $\overline{\mathbb{R}}$ is the real
number $\inf A$ of [[thm-infimum-property]]. In particular the notation is
unambiguous on the sets for which the real supremum and infimum are defined, and
$\sup \emptyset = -\infty$, $\inf \emptyset = +\infty$ in
$\overline{\mathbb{R}}$.

**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot
do, and it is why every $\limsup$ statement on this page holds for every sequence
rather than for bounded ones only. It is also not a weakening of the discipline
this library keeps around suprema: the operation supplied here is a *different*
operation, taken in a *different* ordered set, and the agreement clause records
exactly where the two coincide.

## Facts & Assumptions

**Given:** A subset $A \subseteq \overline{\mathbb{R}}$, and its real part $A_{\mathbb{R}} := A \cap \mathbb{R}$.

[L1] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set in which $-\infty$ is the least element and $+\infty$ the greatest, and whose order restricted to $\mathbb{R}$ is the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]], [[def-real-order]]).

[L2] Upper and lower bounds in a poset: $u$ is an upper bound of $A$ when $a \le u$ for all $a \in A$, and a least upper bound when moreover $u \le v$ for every upper bound $v$; dually for lower bounds and greatest lower bounds. Each is unique when it exists, by antisymmetry ([[def-upper-bound]], [[def-partial-order]]).

[L3] Least-upper-bound property of $\mathbb{R}$: every nonempty $S \subseteq \mathbb{R}$ that is bounded above in $\mathbb{R}$ has a real least upper bound $\sup S$ ([[def-complete-ordered-field]]).

[L4] Greatest-lower-bound property of $\mathbb{R}$: every nonempty $S \subseteq \mathbb{R}$ that is bounded below in $\mathbb{R}$ has a real greatest lower bound $\inf S$ ([[thm-infimum-property]], [[def-infimum]]).

[L5] Bounded above and bounded below in $\mathbb{R}$ mean the existence of a real upper, respectively lower, bound ([[def-bounded-set]]).

## Proof

**Proof technique:** cases.

1.1 Case S1 for the supremum: $+\infty \in A$. [given, assume-case suptop]

1.2 Case S2 for the supremum: $+\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$, so that every element of $A$ equals $-\infty$. [given, assume-case supbot]

1.3 Case S3 for the supremum: $+\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is bounded above in $\mathbb{R}$. [given, assume-case supfin]

1.4 Case S4 for the supremum: $+\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is not bounded above in $\mathbb{R}$. [given, assume-case supunb]

1.5 Case I1 for the infimum: $-\infty \in A$. [given, assume-case infbot]

1.6 Case I2 for the infimum: $-\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$, so that every element of $A$ equals $+\infty$. [given, assume-case inftop]

1.7 Case I3 for the infimum: $-\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is bounded below in $\mathbb{R}$. [given, assume-case inffin]

1.8 Case I4 for the infimum: $-\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is not bounded below in $\mathbb{R}$. [given, assume-case infunb]

2.1 In case S1 the element $+\infty$ is an upper bound of $A$, being the greatest element of $\overline{\mathbb{R}}$; and if $v$ is any upper bound of $A$ then $+\infty \in A$ gives $+\infty \le v$, whence $v = +\infty$ by antisymmetry. So $+\infty$ is the least upper bound of $A$. [step 1.1, L1, L2]

2.2 In case S2 every element of $A$ equals $-\infty$, so $-\infty$ is an upper bound of $A$ by reflexivity; and $-\infty \le v$ for every $v \in \overline{\mathbb{R}}$, being the least element. So $-\infty$ is the least upper bound of $A$. [step 1.2, L1, L2]

2.3 In case S3 the real number $\sigma := \sup A_{\mathbb{R}}$ exists, and it is an upper bound of $A$ in $\overline{\mathbb{R}}$: an element of $A$ is either real, hence lies in $A_{\mathbb{R}}$ and satisfies $a \le \sigma$ in $\mathbb{R}$ and so in $\overline{\mathbb{R}}$, or equals $-\infty$, which is $\le \sigma$; the value $+\infty$ does not occur in $A$ in this case. [step 1.3, L1, L3]

2.4 In case S4 the element $+\infty$ is an upper bound of $A$; and if $v$ is an upper bound then $v \ne -\infty$, because fixing $a \in A_{\mathbb{R}}$, which is possible in this case, gives $a \le v$ with $a$ real and $-\infty$ is below no real, while $v$ real would make $v$ a real upper bound of $A_{\mathbb{R}}$ and contradict the case hypothesis. So $v = +\infty$, and $+\infty$ is the least upper bound of $A$. [step 1.4, L1, L2, L5]

2.5 In case I1 the element $-\infty$ is a lower bound of $A$, being least; and any lower bound $w$ satisfies $w \le -\infty$ because $-\infty \in A$, whence $w = -\infty$ by antisymmetry. So $-\infty$ is the greatest lower bound of $A$. [step 1.5, L1, L2]

2.6 In case I2 every element of $A$ equals $+\infty$, so $+\infty$ is a lower bound of $A$ by reflexivity, and $w \le +\infty$ for every $w$. So $+\infty$ is the greatest lower bound of $A$. [step 1.6, L1, L2]

2.7 In case I3 the real number $\iota := \inf A_{\mathbb{R}}$ exists and is a lower bound of $A$ in $\overline{\mathbb{R}}$: an element of $A$ is either real, hence in $A_{\mathbb{R}}$ and $\ge \iota$, or equals $+\infty \ge \iota$; the value $-\infty$ does not occur in $A$ in this case. [step 1.7, L1, L4]

2.8 In case I4 the element $-\infty$ is a lower bound of $A$; any lower bound $w$ satisfies $w \ne +\infty$, because fixing $a \in A_{\mathbb{R}}$ gives $w \le a$ with $a$ real and $+\infty$ is above no real, while $w$ real would be a real lower bound of $A_{\mathbb{R}}$ and contradict the case hypothesis. So $w = -\infty$ is the greatest lower bound of $A$. [step 1.8, L1, L2, L5]

3.1 In case S3 let $v$ be any upper bound of $A$ and fix $a \in A_{\mathbb{R}}$, which is possible since $A_{\mathbb{R}} \ne \emptyset$. From $a \le v$ with $a$ real we get $v \ne -\infty$, since $-\infty$ is below no real. If $v = +\infty$ then $\sigma \le v$ because $+\infty$ is greatest. Otherwise $v$ is real, and it bounds $A_{\mathbb{R}}$ above in $\mathbb{R}$, so $\sigma \le v$ by leastness of the real supremum. Hence $\sigma$ is the least upper bound of $A$. [step 1.3, step 2.3, L1, L2, L3]

3.2 In case I3 let $w$ be a lower bound of $A$ and fix $a \in A_{\mathbb{R}}$. From $w \le a$ with $a$ real we get $w \ne +\infty$. If $w = -\infty$ then $w \le \iota$; otherwise $w$ is real and bounds $A_{\mathbb{R}}$ below in $\mathbb{R}$, so $w \le \iota$. Hence $\iota$ is the greatest lower bound of $A$. [step 1.7, step 2.7, L1, L2, L4]

4.1 The four supremum cases are exhaustive and mutually exclusive: either $+\infty \in A$, which is S1, or not, and then either $A_{\mathbb{R}} = \emptyset$, which is S2, or $A_{\mathbb{R}} \ne \emptyset$ and it is bounded above in $\mathbb{R}$, which is S3, or it is not, which is S4. In each case a least upper bound was produced, and it is unique. The same four alternatives with $-\infty$, $+\infty$ and "below" in place of $+\infty$, $-\infty$ and "above" are I1 to I4, and in each a greatest lower bound was produced. [step 2.1, step 2.2, step 3.1, step 2.4, step 2.5, step 2.6, step 3.2, step 2.8, L2, L5, cases: a two-fold split followed by a three-fold split, cases-exhaustive]

5.1 The agreement clause follows: a nonempty $A \subseteq \mathbb{R}$ bounded above in $\mathbb{R}$ satisfies $+\infty \notin A$ and $A_{\mathbb{R}} = A$, so case S3 applies and $\sup A = \sup A_{\mathbb{R}}$ is the real supremum; a nonempty $A \subseteq \mathbb{R}$ bounded below satisfies case I3 and $\inf A$ is the real infimum; and $A = \emptyset$ falls under S2 and I2, giving $\sup \emptyset = -\infty$ and $\inf \emptyset = +\infty$. [step 2.3, step 3.1, step 2.7, step 3.2, step 4.1, L3, L4] ∎

## Remarks

- **What makes this work is that $\overline{\mathbb{R}}$ has a top and a bottom.**
  The three defining clauses of the order ([[def-extended-reals]]) put $+\infty$
  above everything and $-\infty$ below everything, and every case above is settled
  by one of those two facts or by the least-upper-bound property of $\mathbb{R}$
  applied to the real part. Nothing else about $\overline{\mathbb{R}}$ is used,
  and in particular no arithmetic is used at all.

- **The two exceptional cases of [[fs-every-set-has-sup]] are not repaired, they
  are relocated.** That false statement records that in $\mathbb{R}$ a set may
  fail to have a supremum, and it stays true; the discipline of
  [[rem-sup-conventions]], which refuses to write $\sup S = +\infty$ inside
  $\mathbb{R}$, also stays in force. What is proved here is a statement about a
  different ordered set.

- **The empty set is not an exception here, and that is the point of the
  ambient set.** In $\mathbb{R}$ the empty set has no supremum, because every
  real is an upper bound and there is no least one.
  In $\overline{\mathbb{R}}$ every element is still an upper bound of $\emptyset$,
  but now there *is* a least one, namely $-\infty$. The two statements are about
  different ordered sets and neither contradicts the other.

- **Where this is consumed.** [[def-limsup-liminf]] needs the supremum of a tail
  range of an arbitrary real sequence, which may be unbounded, and then the
  infimum of the resulting family, which may contain $+\infty$; both are supplied
  here and by nothing earlier in the library. Fourteen items on this page depend
  on it, and five more on the companion page of examples.
````

### `lem-limsup-exists`

````markdown
---
id: lem-limsup-exists
kind: lemma
title: "The tail suprema of any real sequence are nonincreasing in $\\overline{\\mathbb{R}}$, so the limit superior exists for every sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, def-extended-reals, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$s_{n+1}\\le s_n$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and
extended tail bounds $s_n = \sup T_n$, $i_n = \inf T_n$ as in
[[def-limsup-liminf]].

1. **Monotonicity of the extended bounds under inclusion.** If
   $A \subseteq B \subseteq \overline{\mathbb{R}}$ ([[def-extended-reals]]) then
   $$\sup A \le \sup B \qquad \text{and} \qquad \inf B \le \inf A,$$
   the four quantities being the extended bounds of [[lem-extended-reals-complete]].
   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.
2. **The tail bounds are monotone.** $T_m \subseteq T_n$ whenever $n \le m$, and
   hence
   $$s_m \le s_n \qquad \text{and} \qquad i_n \le i_m \qquad (n \le m).$$
   In particular $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$ for every $n$, and
   $i_n \le s_n$ for every $n$.
3. **Existence.** $\limsup_k x_k$ and $\liminf_k x_k$ exist in
   $\overline{\mathbb{R}}$ for **every** sequence of reals, bounded or not.

Claim 1 is the tool the rest of this page uses whenever two extended suprema are
compared. It is proved here, from the definition of a least upper bound, rather
than quoted from the suprema page, for the reason given in the remarks below.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, and the extended bounds $s_n = \sup T_n$, $i_n = \inf T_n$ ([[def-sequence]], [[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, with no hypothesis on the subset ([[lem-extended-reals-complete]]).

[L2] Least upper bound and greatest lower bound in a poset: $\sup A$ is an upper bound of $A$ that is $\le$ every upper bound of $A$, and $\inf A$ is a lower bound that is $\ge$ every lower bound; each is unique when it exists ([[def-upper-bound]], [[def-partial-order]]).

[L3] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set, so its order is reflexive and transitive ([[def-extended-reals]], [[def-partial-order]]).

[L4] The order on $\mathbb{N}$ is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $A \subseteq B \subseteq \overline{\mathbb{R}}$ be arbitrary. By [L1] the four elements $\sup A$, $\sup B$, $\inf A$, $\inf B$ of $\overline{\mathbb{R}}$ all exist and are uniquely determined. [given, L1, L2]

1.2 Let $n \le m$ in $\mathbb{N}$. Every element of $T_m$ has the form $x_k$ with $k \ge m$, and then $k \ge n$ by transitivity, so $x_k \in T_n$; hence $T_m \subseteq T_n$. [given, L4]

1.3 For every $n$ the tail range $T_n$ contains $x_n$, so $i_n \le x_n$ because $i_n$ is a lower bound of $T_n$, and $x_n \le s_n$ because $s_n$ is an upper bound of $T_n$; transitivity gives $i_n \le s_n$. [given, L1, L2, L3]

2.1 Since $\sup B$ is an upper bound of $B$ and $A \subseteq B$, every element of $A$ is $\le \sup B$, so $\sup B$ is an upper bound of $A$; as $\sup A$ is the least of the upper bounds of $A$, this gives $\sup A \le \sup B$. Dually $\inf B$ is a lower bound of $B$, hence of $A$, and as $\inf A$ is the greatest of the lower bounds of $A$ this gives $\inf B \le \inf A$. Claim 1 is proved. [step 1.1, L1, L2]

3.1 Applying claim 1 to the inclusion $T_m \subseteq T_n$ valid for $n \le m$ gives $s_m \le s_n$ and $i_n \le i_m$; the special case $m = n + 1$ gives $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$. Together with $i_n \le s_n$ this is claim 2. [step 1.2, step 1.3, step 2.1]

4.1 The families $\{s_n : n \in \mathbb{N}\}$ and $\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$, so [L1] applies to them with no hypothesis, and $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ exist in $\overline{\mathbb{R}}$ for every sequence of reals. This is claim 3. [step 3.1, L1, L2] ∎

## Remarks

- **The monotonicity is where the two operations of the definition interlock.**
  Because $(s_n)$ is nonincreasing, the outer infimum in
  $\limsup_k x_k = \inf_n s_n$ is an infimum of a decreasing family, so it is the
  value the tail suprema are pressing down towards; and because $(i_n)$ is
  nondecreasing, $\liminf_k x_k = \sup_n i_n$ is the value the tail infima are
  pressing up towards. Nothing in this lemma says the pressing converges, and for
  an unbounded sequence there is nothing in $\mathbb{R}$ for it to converge to;
  the exact statement is [[lem-limsup-epsilon-characterisation]].

- **Why the word "nonincreasing" is spelled out rather than cited.**
  [[def-monotone-sequence]] defines monotone for sequences of *reals*, and
  $(s_n)$ takes values in $\overline{\mathbb{R}}$, so the definition does not
  apply to it. Claim 2 is therefore stated as the inequality it is. When $(x_k)$
  is bounded every $s_n$ is real ([[def-limsup-liminf]]) and $(s_n)$ is then a
  nonincreasing sequence of reals in the sense of [[def-monotone-sequence]], but
  no proof on this page needs that reading.

- **Claim 1 is not [[lem-sup-monotone]].** That lemma is the same one-line
  argument carried out in $\mathbb{R}$, and its statement carries the hypotheses
  that the smaller set be nonempty and the larger one bounded above, without
  which neither supremum denotes anything. Those are exactly the hypotheses that
  the extended bounds of [[lem-extended-reals-complete]] dispense with, so the
  extended statement is not an instance of the real one and is proved from the
  definition of a least upper bound instead.

- **Claim 1 costs nothing and is used everywhere.** It is the one-line poset
  argument: the larger set's supremum bounds the smaller set, and leastness does
  the rest. It is stated as part of this lemma rather than as an item of its own
  because it is used only in company with the tail bounds.
````

### `lem-nth-root-of-n-tends-to-one`

````markdown
---
id: lem-nth-root-of-n-tends-to-one
kind: lemma
title: "$n^{1/n} \\to 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nth-roots-exist, thm-am-gm, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-squeeze, thm-of-archimedean, lem-of-inverse-positive, lem-of-sign-rules, lem-of-naturals-positive, lem-power-monotone, def-integer-power, def-real-limit, def-sequence, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, lem-of-add-order, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$n^{1/n}\\to 1$"
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
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "AM-GM inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/AM%E2%80%93GM_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

For a natural number $n \ge 1$ write $\iota(n) := n \cdot 1_{\mathbb{R}}$ for the
canonical natural of $\mathbb{R}$ ([[lem-of-naturals-positive]]) and
$n^{1/n} := \iota(n)^{1/n}$, $n^{1/2} := \iota(n)^{1/2}$ for its roots
([[thm-nth-roots-exist]], [[def-rational-power]]). Then:

1. $\displaystyle 1 \;\le\; n^{1/n} \;\le\; 1 + \frac{2}{n^{1/2}}$ for every natural $n \ge 1$;
2. the sequence $r_k := (k+1)^{1/(k+1)}$, $k \in \mathbb{N}$, converges to $1$
   ([[def-real-limit]]).

**The index range is not cosmetic.** The expression $n^{1/n}$ is defined only for
$n \ge 1$, since $1/n$ is not a rational number when $n = 0$
([[def-rational-power]]). Sequences in this library are functions on $\mathbb{N}$
and $\mathbb{N}$ contains $0$ ([[def-sequence]]), so the statement of convergence
is made about the shifted family $r_k = (k+1)^{1/(k+1)}$, which is the classical
family $n^{1/n}$, $n \ge 1$, reindexed by $n = k+1$. Claim 1 is stated over the
natural range $n \ge 1$ where the expression means something.

## Facts & Assumptions

**Given:** For a natural $m \ge 1$ the canonical natural $\iota(m) := m \cdot 1_{\mathbb{R}}$, extended by $\iota(0) := 0$; this extension keeps the additivity $\iota(m + m') = \iota(m) + \iota(m')$ of [[lem-of-naturals-positive]], which for $m$ or $m'$ equal to $0$ reads $\iota(m) = \iota(m) + 0$.

[L1] Roots: for real $a \ge 0$ and natural $n \ge 1$ there is a unique real $s \ge 0$ with $s^n = a$, written $a^{1/n}$; it is $> 0$ when $a > 0$, and $a^{1/1} = a$ ([[thm-nth-roots-exist]], [[def-integer-power]]).

[L2] Rational powers and monotonicity: $a^{1/n}$ is the rational power $a^r$ at $r = 1/n$, and for rational $t > 0$ one has $a^t > 1$ whenever $a > 1$; also $\big(1/a\big)^{1/2} = 1/a^{1/2}$ for $a > 0$ ([[def-rational-power]], [[lem-rational-power-monotone]], [[lem-rational-power-laws]]).

[L3] AM-GM: for a natural $n \ge 1$ and reals $a_0, \dots, a_{n-1} \ge 0$, the geometric mean $\big(\prod_{j<n} a_j\big)^{1/n}$ is $\le$ the arithmetic mean $\frac{1}{\iota(n)}\sum_{j<n} a_j$ ([[thm-am-gm]]).

[L4] Finite sums and products: the empty sum is $0$ and the empty product $1$; sums and products split at any intermediate index; and $\sum_{j<m} \lambda = \iota(m)\lambda$ for a constant $\lambda$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Induction principle ([[thm-induction-principle]]).

[L6] Canonical naturals: $\iota(m) > 0$ and $\iota(m)$ is invertible for $m \ge 1$, $\iota$ is strictly increasing, and $\iota(2) = 2 > 1$; the Archimedean property gives, for every real $x$, a natural $p \ge 1$ with $x < \iota(p)$ ([[lem-of-naturals-positive]], [[thm-of-archimedean]]).

[L7] Order and reciprocals: $0 < a < b$ gives $0 < 1/b < 1/a$; multiplying an inequality by a positive element preserves it; and inequalities may be added and translated ([[lem-of-inverse-positive]], [[lem-of-sign-rules]], [[lem-of-add-order]]).

[L8] Squares: for $a, b \ge 0$ one has $a < b$ if and only if $a \cdot a < b \cdot b$ ([[lem-power-monotone]], [[def-integer-power]]).

[L9] Squeeze theorem, and the fact that a constant sequence converges to its value; to establish convergence it suffices to produce a threshold for every real $\varepsilon > 0$ ([[thm-squeeze]], [[def-sequence]], [[def-real-limit]]).

[L10] The order on $\mathbb{N}$ is total and $\iota$ respects it ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 For a natural $n \ge 1$ the element $\iota(n)$ is positive and invertible, so $\iota(n)^{1/n}$ and $\iota(n)^{1/2}$ exist and are positive. [given, L1, L6]

1.2 For every natural $m$ one has $\prod_{j<m} 1 = 1$: the empty product is $1$, and if $\prod_{j<m} 1 = 1$ then $\prod_{j<m+1} 1 = \big(\prod_{j<m} 1\big) \cdot 1 = 1$, so this follows by induction on $m$. [given, L4, L5]

2.1 For $n = 1$ one has $\iota(1) = 1$ and $1^{1/1} = 1$; for $n \ge 2$ one has $\iota(n) \ge \iota(2) = 2 > 1$ and $1/n$ is a positive rational, so $\iota(n)^{1/n} > 1$. In either case $n^{1/n} \ge 1$. [step 1.1, L1, L2, L6, L10]

2.2 Let $n \ge 2$ and put $u := \iota(n)^{1/2}$, so that $u > 0$ and $u \cdot u = \iota(n)$. Apply [L3] to the list of $n$ nonnegative reals given by $a_0 = a_1 = u$ and $a_j = 1$ for $2 \le j < n$, the latter range being empty when $n = 2$. Splitting at index $2$ gives $\prod_{j<n} a_j = \big(\prod_{j<2} a_j\big)\big(\prod_{j<n-2} a_{2+j}\big) = (u \cdot u) \cdot 1 = \iota(n)$ by step 1.2, so the geometric mean is $\iota(n)^{1/n}$; and $\sum_{j<n} a_j = \big(\sum_{j<2} a_j\big) + \big(\sum_{j<n-2} 1\big) = (u + u) + \iota(n-2) = (u+u) + \iota(n) - 2$, using additivity of $\iota$ and $\iota(2) = 2$, so the arithmetic mean is $A = \big((u+u) + \iota(n) - 2\big)/\iota(n) = 1 + \big((u+u) - 2\big)/\iota(n)$. Since $(u+u) - 2 < u + u$ and $\iota(n) > 0$, and $(u+u)/\iota(n) = (u+u)/(u \cdot u) = 2/u$, this gives $\iota(n)^{1/n} \le A \le 1 + 2/u = 1 + 2/n^{1/2}$. [step 1.1, step 1.2, L1, L3, L4, L6, L7, algebra]

2.3 For $n = 1$ the same bound holds trivially: $1^{1/1} = 1 \le 1 + 2 = 1 + 2/1^{1/2}$. [step 1.1, L1, L6, L7]

2.4 The sequence $b_k := 1 + 2/(k+1)^{1/2}$ converges to $1$. Given a real $\varepsilon > 0$, put $t := 2/\varepsilon > 0$ and take a natural $p \ge 1$ with $t \cdot t < \iota(p)$. For $k \ge p$ we have $k + 1 > p$, hence $\iota(k+1) > \iota(p) > t \cdot t$, and since $\big(\iota(k+1)^{1/2}\big)\big(\iota(k+1)^{1/2}\big) = \iota(k+1)$ with both factors $\ge 0$, this forces $t < \iota(k+1)^{1/2}$. Therefore $0 < 2/\iota(k+1)^{1/2} < 2/t = \varepsilon$, that is $|b_k - 1| < \varepsilon$. [step 1.1, L1, L6, L7, L8, L9, L10, algebra]

3.1 Claim 1 is the combination of steps 2.1, 2.2 and 2.3, the two upper bounds covering $n \ge 2$ and $n = 1$ respectively. [step 2.1, step 2.2, step 2.3]

4.1 For every $k \in \mathbb{N}$ the natural $k+1$ is $\ge 1$, so claim 1 gives $1 \le r_k \le b_k$. The constant sequence $1$ converges to $1$ and $(b_k)$ converges to $1$ by step 2.4, so the squeeze theorem gives $r_k \to 1$, which is claim 2. [step 3.1, step 2.4, L9] ∎

## Remarks

- **Where the $\sqrt{n}$ comes from.** AM-GM is applied to a list whose product is
  $n$ but whose entries are as close to $1$ as possible: two copies of $n^{1/2}$
  and $n-2$ copies of $1$. The arithmetic mean is then
  $1 + (2n^{1/2} - 2)/n$, which tends to $1$ at the rate $2/n^{1/2}$. Splitting
  $n$ as $n^{1/2} \cdot n^{1/2}$ rather than as $n \cdot 1$ is the whole trick:
  the list $n, 1, \dots, 1$ gives only $n^{1/n} \le 2 - 1/n$, which does not
  converge to $1$.

- **The lower bound is not decoration.** Without $n^{1/n} \ge 1$ the squeeze has
  nothing below it, and the upper bound alone would leave open a limit smaller
  than $1$. It comes from monotonicity of rational powers in the base
  ([[lem-rational-power-monotone]]) and holds with equality only at $n = 1$.

- **No logarithm and no exponential is used.** The usual quick proof writes
  $n^{1/n} = e^{(\log n)/n}$ and appeals to $(\log n)/n \to 0$; neither function
  exists in this library yet, and the AM-GM route needs nothing beyond roots and
  finite sums.
````

### `lem-nth-term-test`

````markdown
---
id: lem-nth-term-test
kind: lemma
title: "If a series converges then its terms tend to $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, thm-algebra-of-limits, def-real-limit, def-finite-sum, lem-limit-of-tail, def-sequence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Term test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Term_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. If the series $\sum a_k$ converges
([[def-series]]) then the sequence $(a_k)$ converges ([[def-real-limit]]), with

$$\lim_{k} a_k \;=\; 0 .$$

Equivalently, in the contrapositive form in which the lemma is almost always
used: **if $(a_k)$ does not converge to $0$ then $\sum a_k$ diverges.**

The same statement holds for a series $\sum_{k \ge m} a_k$ with a general
starting index, with the conclusion that $(a_{j+m})_{j \in \mathbb{N}}$ converges
to $0$: that series is by definition the series of the sequence
$b_j = a_{j+m}$ ([[def-series]]), so it is the statement above applied to $(b_j)$.

The converse is false; it is refuted by [[fs-nth-term-test-converse]].

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals whose series converges, with partial sums $s_n = \sum_{k<n} a_k$ ([[def-series]], [[def-finite-sum]]).

[A1] $(s_n)$ converges to some real $S$ ([[def-series]], [[def-real-limit]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ for every $n \in \mathbb{N}$ ([[def-finite-sum]], [[def-series]]).

[L2] Convergence depends only on the tail: if $(x_n)$ converges to $x$ then so does its $1$-st tail $(x_{n+1})_{n}$ ([[lem-limit-of-tail]], [[def-sequence]]).

[L3] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n - y_n \to x - y$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 The sequence $(s_{n+1})_{n \in \mathbb{N}}$ is the $1$-st tail of $(s_n)$, and it converges to $S$. [A1, L2]

1.2 From the recursion clause, $a_n = s_{n+1} - s_n$ for every $n \in \mathbb{N}$. [L1, algebra]

2.1 Hence $(a_n)$ is the difference of two sequences converging to $S$, so it converges to $S - S = 0$. [step 1.1, step 1.2, A1, L3]

3.1 That is the claim, and its contrapositive is the assertion that a series whose terms do not tend to $0$ diverges. [step 2.1] ∎

## Remarks

- **This is a necessary condition and never a sufficient one.** It rules a series out; it never rules one in. The harmonic series has terms tending to $0$ and diverges, which is exactly the content of [[fs-nth-term-test-converse]].

- **What the proof actually uses.** Only that the partial sums converge and that consecutive partial sums differ by a term. No sign hypothesis is placed on $(a_k)$, and none is available at this point on the page.
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
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
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-power-monotone`

````markdown
---
id: lem-power-monotone
kind: lemma
title: "Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, cor-of-one-positive, lem-of-sign-rules, prop-of-multiply-inequalities, thm-induction-principle, def-ordered-field, def-nat-order, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

## Facts & Assumptions

**Given:** An ordered field $\mathbb{R}$, elements $a, b \in \mathbb{R}$ and naturals $m, n$.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Sign and scaling rules: a product of positives is positive, and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-sign-rules]]); the positives are closed under addition and satisfy trichotomy ([[def-ordered-field]]); and $1 > 0$ ([[cor-of-one-positive]], which is where that fact is proved: neither of the two items just named states it).

[L4] Multiplying inequalities of nonnegatives: if $0 \le x \le y$ and $0 \le u \le v$ then $xu \le yv$, and if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

[L5] Trichotomy and transitivity of the order: for $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds, and $<$ and $\le$ are transitive ([[def-ordered-field]]).

[L6] The order on the exponents: $m \le n$ holds exactly when $n = m + k$ for some natural $k$ ([[def-nat-order]]), and $m < n$ holds exactly when $m + 1 \le n$ ([[lem-nat-discrete]]); combining the two, $m < n$ holds exactly when $n = m + d$ for some natural $d \ge 1$.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: $a^0 = 1 > 0$, so claim 1 holds; claim 2 is vacuous at $n = 0$; $a^0 = 1 \ge 1$ and $a^0 = 1 \le 1$, so claim 3 holds at $n = 0$ in the nonstrict readings. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume, for all $a, b$: $a \ge 0 \Rightarrow a^n \ge 0$ and $a > 0 \Rightarrow a^n > 0$; and $0 \le a \le b \Rightarrow a^n \le b^n$, with $a^n < b^n$ when moreover $a < b$ and $n \ge 1$. [ih]

2.1 Signs at $n+1$: if $a \ge 0$ then $a^{n+1} = a^n a$ is a product of two nonnegatives, hence $\ge 0$, and if $a > 0$ it is a product of two positives, hence $> 0$. [step 1.2, L1, L3, L4]

3.1 Strict monotonicity at $n+1$, assuming $0 \le a < b$: then $b > 0$, and the hypothesis gives $0 \le a^n \le b^n$ with $b^n > 0$ by step 2.1; if $a = 0$ then $a^{n+1} = 0 < b^{n+1}$ since $b^{n+1} = b^n b > 0$; if $a > 0$ then $a^{n+1} = a^n a \le b^n a$ by multiplying $a^n \le b^n$ by $a > 0$, and $b^n a < b^n b$ by multiplying $a < b$ by $b^n > 0$, so $a^{n+1} < b^{n+1}$ by transitivity; and in either case $0 \le a \le b$ gives $a^{n+1} \le b^{n+1}$ by [L4]. [step 1.2, step 2.1, L1, L3, L4, L5]

4.1 By the induction principle, claims 1 and 2 hold for every $n$, in the form: $a \ge 0 \Rightarrow a^n \ge 0$; $a > 0 \Rightarrow a^n > 0$; and $0 \le a < b$ with $n \ge 1$ gives $a^n < b^n$. [step 1.1, step 2.1, step 3.1, L2]

5.1 The equivalences of claim 2 follow by trichotomy: for $a, b \ge 0$ and $n \ge 1$, if $a^n < b^n$ then neither $a = b$ (which would give $a^n = b^n$) nor $b < a$ (which would give $b^n < a^n$) is possible, so $a < b$; the $\le$ form is the negation of the $<$ form with $a$ and $b$ exchanged; and injectivity is the case $a^n = b^n$, where $a < b$ and $b < a$ are both excluded. [step 4.1, L5]

5.2 Claim 4: for $a > 1$ we have $a^{n+1} = a^n a > a^n \cdot 1 = a^n$, multiplying $1 < a$ by $a^n > 0$, so $a^n$ is strictly increasing in $n$, and hence $a^m < a^n$ whenever $m < n$: writing $n = m + d$ with $d \ge 1$ and inducting on $d$, the case $d = 1$ is that one-step inequality and the passage from $d$ to $d+1$ is $a^m < a^{m+d} < a^{m+d+1}$ by transitivity; for $a = 1$ an induction gives $1^n = 1$ for all $n$; and for $0 < a < 1$ we have $a^{n+1} = a^n a < a^n \cdot 1 = a^n$, so $a^n$ is strictly decreasing in $n$ and the same induction on the gap $d$ gives $a^m > a^n$ for $m < n$. [step 4.1, L1, L2, L3, L5, L6]

6.1 Claim 3: if $a \ge 1$ and $n \ge 1$ then applying step 4.1 to $1 \le a$ gives $1 = 1^n \le a^n$, and $a^n = a^{n-1} a \ge 1 \cdot a = a$ since $a^{n-1} \ge 1$ by the same argument and $a > 0$; if $a > 1$ the same computation gives $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1^n = 1$. [step 4.1, step 5.1, L1, L3, L4]

7.1 All four claims are proved: signs and strict monotonicity in the base by the induction of steps 1.1 and 3.1, the order equivalences and injectivity by trichotomy, and the comparisons with the base and the behaviour in the exponent by steps 6.1 and 5.2. [step 4.1, step 5.1, step 6.1, step 5.2, discharge-induction] ∎
````

### `lem-rational-power-laws`

````markdown
---
id: lem-rational-power-laws
kind: lemma
title: "Laws of rational exponents"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-rational-power, lem-rational-power-well-defined, lem-power-laws, thm-nth-roots-exist, def-rat-operations, lem-power-monotone, def-rationals, def-integer-power, lem-of-inverse-positive, def-rat-order, thm-rat-ordered-field, lem-of-zero-mult]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a, b > 0$ and let $r, s \in \mathbb{Q}$, with
rational powers as in [[def-rational-power]]. Then:

1. $a^{r} > 0$.
2. $a^{r+s} = a^{r} a^{s}$.
3. $(ab)^{r} = a^{r} b^{r}$; in particular $\big(ab\big)^{1/N} = a^{1/N} b^{1/N}$ for every natural $N \ge 1$.
4. $a^{-r} = \big(a^{r}\big)^{-1} = 1/a^{r}$.
5. $\big(a^{r}\big)^{s} = a^{rs}$.

Claims 2 and 3 persist in the supplementary case of [[def-rational-power]]: for
$a, b \ge 0$ and rationals $r, s > 0$ ([[def-rat-order]]) one still has
$(ab)^{r} = a^{r} b^{r}$ and $a^{r+s} = a^{r} a^{s}$. The two identities degenerate
differently, and it is worth saying how. In the product identity, a zero base on
either side makes both sides $0$. In the addition identity only the base $a$
occurs, so it degenerates only when $a = 0$, and then both sides are $0$; when
$a > 0$ that identity holds with no hypothesis on $b$ at all.

## Facts & Assumptions

**Given:** Reals $a, b > 0$ and rationals $r, s$.

[L1] Definition and well-definedness ([[def-rational-power]], [[lem-rational-power-well-defined]]): for ANY representative $r = m/N$ with $m \in \mathbb{Z}$ and $N \ge 1$ natural, $a^{r} = \big(a^{1/N}\big)^{m}$; and $a^{1/N}$ is the unique $x \ge 0$ with $x^{N} = a$ ([[thm-nth-roots-exist]]), which is $> 0$ when $a > 0$.

[L2] Laws of integer exponents ([[lem-power-laws]], [[def-integer-power]]): for $x, y \ne 0$ and integers $j, k$, $x^{j+k} = x^{j}x^{k}$, $(x^{j})^{k} = x^{jk}$, $(xy)^{j} = x^{j}y^{j}$ and $x^{-j} = (x^{j})^{-1}$.

[L3] Positivity and injectivity: $x > 0$ implies $x^{j} > 0$ for every NATURAL $j$ ([[lem-power-monotone]], claim 1), and hence for every integer $j$, since $x^{-j} = \big(x^{j}\big)^{-1}$ ([[lem-power-laws]], claim 2) and the inverse of a positive element is positive ([[lem-of-inverse-positive]]); and $x \mapsto x^{N}$ is injective on $\{x \ge 0\}$ for $N \ge 1$ ([[lem-power-monotone]], claim 2).

[L4] Rational arithmetic ([[def-rat-operations]], [[def-rationals]]): any two rationals can be written with a common positive denominator, $m/N + k/N = (m+k)/N$, $-(m/N) = (-m)/N$, and $(m/n)(p/q) = (mp)/(nq)$.

[L5] The order on $\mathbb{Q}$ ([[thm-rat-ordered-field]], [[def-rat-order]]) is compatible with addition, so $r > 0$ and $s > 0$ imply $r + s > 0$.

[L6] The supplementary clause of [[def-rational-power]]: $0^{t} = 0$ for every rational $t > 0$, while $0^{t}$ is left undefined for rational $t < 0$ and the convention $0^{0} = 1$ of [[def-integer-power]] is untouched. In a field, a product with a factor $0$ is $0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Choose a common denominator: there are a natural $N \ge 1$ and integers $m, k$ with $r = m/N$ and $s = k/N$; then $r + s = (m+k)/N$ and $-r = (-m)/N$. [L4]

1.2 Roots of a product: for $a, b > 0$ and $N \ge 1$ the element $a^{1/N} b^{1/N}$ is positive and satisfies $\big(a^{1/N} b^{1/N}\big)^{N} = \big(a^{1/N}\big)^{N}\big(b^{1/N}\big)^{N} = ab$, so by uniqueness of the nonnegative $N$-th root $\big(ab\big)^{1/N} = a^{1/N} b^{1/N}$. [L1, L2, L3]

2.1 Claim 1: $a^{r} = \big(a^{1/N}\big)^{m}$ with $a^{1/N} > 0$, and a positive element has positive integer powers, so $a^{r} > 0$. [step 1.1, L1, L3]

2.2 Claim 3: $(ab)^{r} = \big((ab)^{1/N}\big)^{m} = \big(a^{1/N} b^{1/N}\big)^{m} = \big(a^{1/N}\big)^{m}\big(b^{1/N}\big)^{m} = a^{r} b^{r}$, using the root-of-a-product identity and then the integer product law. [step 1.1, step 1.2, L1, L2]

3.1 Claim 2: $a^{r+s} = \big(a^{1/N}\big)^{m+k} = \big(a^{1/N}\big)^{m}\big(a^{1/N}\big)^{k} = a^{r} a^{s}$, the middle equality being the integer addition law applied to the nonzero base $a^{1/N}$. [step 1.1, step 2.1, L1, L2]

3.2 Claim 4: $a^{-r} = \big(a^{1/N}\big)^{-m} = \Big(\big(a^{1/N}\big)^{m}\Big)^{-1} = \big(a^{r}\big)^{-1}$. [step 1.1, step 2.1, L1, L2]

3.3 Claim 5: write $r = m/n$ and $s = p/q$ with $n, q \ge 1$, and put $x := a^{1/(nq)}$, so $x > 0$ and $x^{nq} = a$; then $\big(x^{q}\big)^{n} = x^{qn} = a$ with $x^{q} > 0$, so $x^{q} = a^{1/n}$ by uniqueness of the nonnegative $n$-th root; putting $z := x^{m}$ we get $z > 0$ and $z^{q} = \big(x^{m}\big)^{q} = \big(x^{q}\big)^{m} = \big(a^{1/n}\big)^{m} = a^{r}$, so $z$ is the nonnegative $q$-th root of $a^{r}$, that is $z = \big(a^{r}\big)^{1/q}$; therefore $\big(a^{r}\big)^{s} = \Big(\big(a^{r}\big)^{1/q}\Big)^{p} = z^{p} = \big(x^{m}\big)^{p} = x^{mp} = \big(a^{1/(nq)}\big)^{mp} = a^{(mp)/(nq)} = a^{rs}$. [step 2.1, L1, L2, L3, L4]

3.4 The supplementary nonnegative case, product identity: let $a, b \ge 0$ and let $r > 0$ be rational; if $a > 0$ and $b > 0$ this is step 2.2, and otherwise $a = 0$ or $b = 0$, so $ab = 0$ and the left side is $0^{r} = 0$, while the right side $a^{r}b^{r}$ has a factor $0^{r} = 0$ and is therefore $0$ as well. [step 2.2, L6]

4.1 The supplementary nonnegative case, addition identity: the identity $a^{r+s} = a^{r}a^{s}$ involves the base $a$ only, so nothing need be assumed about $b$; for $a > 0$ it is step 3.1 verbatim, which uses only $a > 0$, and both sides are then positive rather than $0$; for $a = 0$ the exponents satisfy $r + s > 0$, so the left side is $0^{r+s} = 0$ and the right side is $0 \cdot 0 = 0$. [step 3.1, L5, L6]

5.1 All five claims hold for positive bases and arbitrary rational exponents, together with the two supplementary identities for nonnegative bases and positive rational exponents. [step 2.1, step 3.1, step 3.2, step 2.2, step 3.3, step 3.4, step 4.1] ∎
````

### `lem-rational-power-monotone`

````markdown
---
id: lem-rational-power-monotone
kind: lemma
title: "Monotonicity of $r \\mapsto a^{r}$ and of $a \\mapsto a^{r}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-rational-power, lem-rational-power-laws, lem-power-monotone, lem-power-laws, lem-rational-power-well-defined, def-rat-order, def-int-order, lem-nat-embeds-int, thm-nth-roots-exist, lem-rat-positive-denominator, lem-of-sign-rules, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a \in \mathbb{R}$ with $a > 0$ and let $r, s \in \mathbb{Q}$ with $r < s$
([[def-rat-order]]), with rational powers as in [[def-rational-power]].

1. **In the exponent.** If $a > 1$ then $a^{r} < a^{s}$; if $a = 1$ then $a^{r} = a^{s} = 1$; if $0 < a < 1$ then $a^{r} > a^{s}$.
2. **In the base.** If $r \in \mathbb{Q}$ with $r > 0$ and $0 < a < b$, then $a^{r} < b^{r}$; so $a \mapsto a^{r}$ is strictly increasing on $\{a \in \mathbb{R} : a > 0\}$.
3. **Comparison with $1$.** For rational $t > 0$: $a > 1$ implies $a^{t} > 1$, and $0 < a < 1$ implies $a^{t} < 1$.

## Facts & Assumptions

**Given:** A real $a > 0$ and rationals $r < s$; write $t := s - r$, a rational with $t > 0$.

[L1] Positive rationals have positive representatives: $t > 0$ can be written $t = m/N$ with $m, N$ naturals and $m \ge 1$, $N \ge 1$. Every rational has a representative with positive denominator ([[lem-rat-positive-denominator]]); on such a representative $m/N > 0$ holds exactly when $m > 0$ in $\mathbb{Z}$ ([[def-rat-order]], [[def-int-order]]); and a positive integer is the image of a unique natural $\ge 1$ ([[lem-nat-embeds-int]]), which is what turns both the numerator $m > 0$ and the denominator $N > 0$ into naturals $\ge 1$. The last passage is a genuine step and is what [[lem-rational-power-well-defined]] uses at its own [L5].

[L2] Rational power laws ([[lem-rational-power-laws]], [[lem-rational-power-well-defined]], [[def-rational-power]]): $a^{r} > 0$; $a^{r+t} = a^{r} a^{t}$; and $a^{t} = \big(a^{1/N}\big)^{m}$ for the representative $t = m/N$.

[L3] Roots ([[thm-nth-roots-exist]]): $a^{1/N}$ is the unique $x \ge 0$ with $x^{N} = a$, and it is $> 0$ when $a > 0$.

[L4] Integer power monotonicity ([[lem-power-monotone]]): for $N \ge 1$, $x \mapsto x^{N}$ is strictly increasing on $\{x \ge 0\}$ (claim 2); for $m \ge 1$, $x > 1$ implies $x^{m} \ge x > 1$ (claim 3), while $0 \le x < 1$ implies $x^{m} < 1^{m} = 1$, which is claim 2 again with $1$ as the larger base and NOT claim 3, whose nonstrict $x^{m} \le 1$ would not suffice; and $1^{m} = 1$ for every integer $m$, by claim 4 for natural $m$ together with $1^{-k} = (1^{k})^{-1} = 1$ ([[lem-power-laws]]).

[L5] Order arithmetic: for $c > 0$, $x < y \iff cx < cy$; and trichotomy, exactly one of $a < 1$, $a = 1$, $a > 1$ holds ([[lem-of-sign-rules]], [[def-ordered-field]]).

## Proof

**Proof technique:** cases.

1.1 Write $t = s - r$, so $t$ is rational with $t > 0$, and fix a representative $t = m/N$ with naturals $m, N \ge 1$; then $a^{s} = a^{r+t} = a^{r} a^{t}$ with $a^{r} > 0$, so the comparison of $a^{s}$ with $a^{r}$ is exactly the comparison of $a^{t}$ with $1$. [L1, L2, L5]

1.2 Claim 2, which needs no case split: let $r > 0$ be rational with representative $r = m/N$, $m, N \ge 1$, and let $0 < a < b$; then $a^{1/N} < b^{1/N}$, since $b^{1/N} \le a^{1/N}$ would give $b = \big(b^{1/N}\big)^{N} \le \big(a^{1/N}\big)^{N} = a$; raising to the power $m$ preserves the strict inequality between nonnegatives, so $a^{r} = \big(a^{1/N}\big)^{m} < \big(b^{1/N}\big)^{m} = b^{r}$. [L2, L3, L4]

2.1 Case $a > 1$: then $a^{1/N} > 1$, because $a^{1/N} \le 1$ would give $a = \big(a^{1/N}\big)^{N} \le 1$; hence $a^{t} = \big(a^{1/N}\big)^{m} \ge a^{1/N} > 1$, and multiplying $1 < a^{t}$ by $a^{r} > 0$ gives $a^{r} < a^{r} a^{t} = a^{s}$. [assume-case big, step 1.1, L3, L4, L5]

2.2 Case $a = 1$: then $1^{N} = 1$ shows $a^{1/N} = 1$ by uniqueness of the nonnegative $N$-th root, so $a^{u} = 1^{m'} = 1$ for every rational $u$ with representative $m'/N'$; in particular $a^{r} = a^{s} = 1$. [assume-case one, step 1.1, L2, L3, L4]

2.3 Case $0 < a < 1$: then $0 \le a^{1/N} < 1$, because $a^{1/N} \ge 1$ would give $a = \big(a^{1/N}\big)^{N} \ge 1$; hence $a^{t} = \big(a^{1/N}\big)^{m} < 1^{m} = 1$ by strict monotonicity of $x \mapsto x^{m}$ on the nonnegatives, $m \ge 1$, and multiplying $a^{t} < 1$ by $a^{r} > 0$ gives $a^{s} = a^{r} a^{t} < a^{r}$. [assume-case small, step 1.1, L3, L4, L5]

3.1 The three cases $a > 1$, $a = 1$, $0 < a < 1$ exhaust the possibilities for $a > 0$ by trichotomy, so claim 1 holds; claim 3 is the comparison of $a^{t}$ with $1$ established inside the first and third cases; and claim 2 is step 1.2. [cases-exhaustive, step 2.1, step 2.2, step 2.3, step 1.2, L5] ∎
````

### `lem-series-tail-invariance`

````markdown
---
id: lem-series-tail-invariance
kind: lemma
title: "A series converges iff each of its tail series converges, and the sum splits as $s_N$ plus the $N$-th tail"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, lem-limit-of-tail, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, def-real-limit, def-sequence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with partial sums $s_n = \sum_{k<n} a_k$, let
$N \in \mathbb{N}$, and let $t_j := \sum_{i<j} a_{N+i}$ be the partial sums of the
$N$-th tail series $\sum_{k \ge N} a_k$ ([[def-series]]). Then:

1. $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$;
2. $\sum a_k$ converges **if and only if** its $N$-th tail series converges, and
   in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; s_N \;+\; \sum_{k=N}^{\infty} a_k ;$$
3. hence the following are equivalent: $\sum a_k$ converges; every tail series of
   $\sum a_k$ converges; some tail series of $\sum a_k$ converges.

In words: convergence of a series is a property of its terms from any index on,
and changing finitely many terms changes the sum but not the fact of convergence.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals, a natural number $N$, the partial sums $s_n = \sum_{k<n} a_k$ and the partial sums $t_j = \sum_{i<j} a_{N+i}$ of the $N$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums: if $m \le n$ then $\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$ ([[lem-finite-sum-laws]]), and $\sum_{k=m}^{n-1} a_k$ is by definition $\sum_{i<n-m} a_{m+i}$ ([[def-finite-sum]]).

[L2] Convergence depends only on the tail: a sequence $(x_n)$ converges to $x$ if and only if its $N$-th tail $(x_{j+N})_{j}$ converges to $x$ ([[lem-limit-of-tail]], [[def-sequence]]).

[L3] Algebra of limits: if $x_j \to x$ and $y_j \to y$ then $x_j + y_j \to x + y$ and $x_j - y_j \to x - y$ ([[thm-algebra-of-limits]]).

[L4] A constant sequence $y_j = c$ converges to $c$, immediately from the definition of a limit ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Fix $j \in \mathbb{N}$ and put $n := j + N$, so that $N \le n$ and $n - N = j$. [given]

1.2 The family $(s_{j+N})_{j \in \mathbb{N}}$ is the $N$-th tail of the sequence $(s_n)$ of partial sums. [given, L2]

2.1 Splitting the partial sum $s_n$ at $N$ gives $s_n = \sum_{k<N} a_k + \sum_{k=N}^{n-1} a_k = s_N + \sum_{i<j} a_{N+i} = s_N + t_j$. [step 1.1, L1]

2.2 Suppose $\sum a_k$ converges, say $s_n \to S$; then the $N$-th tail $(s_{j+N})_j$ converges to $S$. [given, step 1.2, L2]

3.1 Claim 1 follows: $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$. [step 2.1, algebra]

4.1 The constant sequence with value $s_N$ converges to $s_N$, so $t_j = s_{j+N} - s_N \to S - s_N$, and the $N$-th tail series converges with sum $S - s_N$. [step 2.2, step 3.1, L3, L4]

4.2 Conversely, suppose the $N$-th tail series converges, say $t_j \to T$; then $s_{j+N} = s_N + t_j \to s_N + T$ by the same two rules. [step 3.1, L3, L4]

5.1 So the $N$-th tail of $(s_n)$ converges to $s_N + T$, hence $(s_n)$ itself converges to $s_N + T$ and $\sum a_k$ converges. [step 4.2, step 1.2, L2]

6.1 Claim 2 follows: the two convergences are equivalent, and when they hold the sums are related by $S = s_N + T$, which is the displayed identity. [step 4.1, step 5.1, algebra]

7.1 Claim 3 follows as well: if $\sum a_k$ converges then by claim 2 every tail series converges; every tail series converging trivially gives some tail series converging, the family of tails being indexed by all of $\mathbb{N}$; and if some tail series, say the $N$-th, converges then by claim 2 again $\sum a_k$ converges. [step 6.1] ∎

## Remarks

- **Where the hypothesis-free character comes from.** Nothing here assumes the terms have a sign or that any series converges: claim 1 is an identity between finite sums, valid always, and claims 2 and 3 are read off from it by two standard limit rules. That is why the lemma may be used to move between a series and its tails inside proofs that have not yet decided the convergence question.

- **The sum does change.** Only the fact of convergence is tail invariant. The identity in claim 2 is the exact bookkeeping: discarding the first $N$ terms lowers the sum by $s_N$, and no more.
````

### `thm-algebra-of-limits`

````markdown
---
id: thm-algebra-of-limits
kind: theorem
title: "Algebra of limits: sums, scalar multiples, products and quotients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-convergent-implies-bounded, lem-null-times-bounded, lem-of-triangle-inequality, lem-of-abs-value, cor-of-reverse-triangle, thm-of-archimedean, lem-of-inverse-positive, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits respect $+$, $\\cdot$, $/$"
proof_strategy: direct
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "OpenStax Calculus Volume 2, §5.1 Sequences"
      url: "https://openstax.org/books/calculus-volume-2/pages/5-1-sequences"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$ and $(y_k)$ converging to $y$, and a real $c$ ([[def-sequence]], [[def-real-limit]]). For the last two claims we assume in addition $y \ne 0$ and $y_k \ne 0$ for every $k$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value and the triangle inequality: $|uv| = |u|\,|v|$, $|u| \ge 0$, $|u| = 0$ if and only if $u = 0$, $|-u| = |u|$, and $|a + b| \le |a| + |b|$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[L3] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]); consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

[L4] Convergent sequences are bounded ([[lem-convergent-implies-bounded]]), and a constant sequence $(c)$ is bounded by $|c|$ ([[def-sequence]]).

[L5] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L6] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u| \ge |v| - |v - u|$ ([[cor-of-reverse-triangle]]).

[L7] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L8] Order arithmetic in $\mathbb{R}$: adding a constant and adding inequalities preserve the order, multiplying a strict inequality by a positive factor preserves it, and $\le$ and $<$ compose transitively; trichotomy holds, and since $u \ge 0$ means $u > 0$ or $u = 0$, an element with $u \ge 0$ and $u \ne 0$ satisfies $u > 0$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). Moreover $2 = 1 + 1 > 0$ and $2$ is invertible: $0 < 1$ in any ordered field ([[cor-of-one-positive]]) and the positives are closed under addition, so $2 > 0$ and in particular $2 \ne 0$ ([[def-ordered-field]]), whence $2^{-1}$ exists ([[def-field]]).

[L9] Rational arithmetic: $\varepsilon/2$ is a rational $> 0$ whenever $\varepsilon$ is, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-ordered-field]]); the order on $\mathbb{N}$ is total, so finitely many thresholds admit a common index ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Reduction to null sequences: for any sequence $(z_k)$ of reals and any real $z$, the statements "$(z_k)$ converges to $z$" and "$(z_k - z)$ converges to $0$" are literally the same condition, because $|(z_k - z) - 0| = |z_k - z|$ for every $k$. [L1, L2]

1.2 Sum rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$ be any convergent sequences of reals and let $\varepsilon > 0$ be rational; take $K_1$ with $|u_k - u| < \varepsilon/2$ for $k \ge K_1$ and $K_2$ with $|v_k - v| < \varepsilon/2$ for $k \ge K_2$, and let $K$ be an index at least as large as both. For $k \ge K$, $|(u_k + v_k) - (u + v)| = |(u_k - u) + (v_k - v)| \le |u_k - u| + |v_k - v| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; hence $u_k + v_k \to u + v$, and in particular $x_k + y_k \to x + y$. [L1, L2, L8, L9, algebra]

1.3 Boundedness: every convergent sequence of reals is bounded, and every constant sequence $(d)$ is bounded by $|d|$. [L4]

1.4 Quotient preparation. Assume $y \ne 0$ and $y_k \ne 0$ for every $k$. Then $|y| > 0$ by [L2], so $|y|/2 > 0$; running the convergence test of $(y_k)$ with the real number $|y|/2$ as tolerance, which [L3] licenses, produces $K_0 \in \mathbb{N}$ with $|y_k - y| < |y|/2$ for all $k \ge K_0$. [L1, L2, L3, L7, L8, choose]

2.1 Scalar rule, in general form. Let $(u_k) \to u$ and let $d \in \mathbb{R}$. By step 1.1 the sequence $(u_k - u)$ is null and by step 1.3 the constant sequence $(d)$ is bounded, so $(d(u_k - u)) = (d u_k - d u)$ is null by [L5]; by step 1.1 again, $d u_k \to d u$, and in particular $c x_k \to c x$. [step 1.1, step 1.3, L5, algebra]

2.2 Product rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$, and write $u_k v_k - u v = u_k(v_k - v) + v(u_k - u)$. By step 1.1 both $(v_k - v)$ and $(u_k - u)$ are null; by step 1.3 both $(u_k)$ and the constant sequence $(v)$ are bounded; so both $(u_k(v_k - v))$ and $(v(u_k - u))$ are null by [L5], and their sum is null by step 1.2 applied with both limits equal to $0$. By step 1.1, $u_k v_k \to u v$, and in particular $x_k y_k \to x y$. [step 1.1, step 1.2, step 1.3, L5, algebra]

2.3 Eventual lower bound. For every $k \ge K_0$, the reverse triangle inequality gives $|y_k| \ge |y| - |y - y_k| = |y| - |y_k - y| > |y| - |y|/2 = |y|/2 > 0$; so $|y_k| > |y|/2$ for all $k \ge K_0$, and in particular $|y_k| \ne 0$ there. [step 1.4, L2, L6, L8]

3.1 Difference rule. Applying step 2.1 to the sequence $(y_k)$ with $d = -1$ gives $-y_k \to -y$; the sum rule of step 1.2 applied to $(x_k)$ and $(-y_k)$ then gives $x_k - y_k = x_k + (-y_k) \to x + (-y) = x - y$. [step 1.2, step 2.1, L8, algebra]

3.2 Reciprocal estimate. For $k \ge K_0$ we have $y_k \ne 0$ and $|y_k| > |y|/2 > 0$, so [L7] applied to $0 < |y|/2 < |y_k|$ gives $0 < |y_k|^{-1} < 2/|y|$, and therefore $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| = \dfrac{|y - y_k|}{|y_k|\,|y|} \le \dfrac{2}{|y|^2}\,|y_k - y|$. [step 2.3, L2, L7, L8, algebra]

4.1 Reciprocal rule. Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon |y|^2/2$, a real $> 0$; by [L3] there is $K_1$ with $|y_k - y| < \eta$ for all $k \ge K_1$. For every $k$ at least as large as both $K_0$ and $K_1$, step 3.2 gives $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| \le \dfrac{2}{|y|^2}|y_k - y| < \dfrac{2}{|y|^2}\,\eta = \varepsilon$; hence $1/y_k \to 1/y$. [step 3.2, L1, L3, L7, L8, L9, algebra]

5.1 Quotient rule. By step 4.1 the sequence $(1/y_k)$ converges to $1/y$, so the product rule of step 2.2 applied to $(x_k)$ and $(1/y_k)$ gives $x_k/y_k = x_k \cdot (1/y_k) \to x \cdot (1/y) = x/y$. [step 2.2, step 4.1, algebra]

6.1 All the claims are established: the sum rule in step 1.2, the scalar rule in step 2.1, the difference rule in step 3.1, the product rule in step 2.2, and the reciprocal and quotient rules in steps 4.1 and 5.1. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **The quotient case is where proofs usually cheat.** The estimate $|1/y_k - 1/y| = |y - y_k| / (|y_k||y|)$ is worthless until $|y_k|$ is known to stay away from $0$: without a lower bound the denominator can be arbitrarily small and the fraction arbitrarily large, even while $|y - y_k|$ shrinks. Step 2.3 supplies that bound, $|y_k| > |y|/2$ for $k \ge K_0$, and it is proved from the reverse triangle inequality, not assumed.

- The hypothesis $y_k \ne 0$ for every $k$ is only there so that $1/y_k$ is defined for every index. It is not needed for the limit: step 2.3 shows $|y_k| > |y|/2 > 0$ from $K_0$ on, so a sequence with $y \ne 0$ has at most finitely many zero terms, and by [[lem-limit-of-tail]] one may pass to the $K_0$-th tail and read the conclusion there.

- The hypothesis $y \ne 0$ cannot be dropped. With $x_k = 1$ and $y_k = 1/(k+1)$, both sequences converge: the first is constant ([[def-sequence]]) and the second is null ([[fs-limit-preserves-strict-inequality]]), so $y = 0$. Yet $x_k/y_k = k+1$, and no real $M$ bounds every $k+1$, by the Archimedean property ([[thm-of-archimedean]]); so the quotient sequence is unbounded, hence not convergent by [[lem-convergent-implies-bounded]].

- Nothing in the proof uses completeness of $\mathbb{R}$ beyond the Archimedean property invoked in [L3], so the same rules hold verbatim for sequences of rationals.
````

### `thm-convergence-iff-limsup-equals-liminf`

````markdown
---
id: thm-convergence-iff-limsup-equals-liminf
kind: theorem
title: "A real sequence converges to $L \\in \\mathbb{R}$ iff $\\liminf x_k = \\limsup x_k = L$, and diverges to $\\pm\\infty$ iff both equal $\\pm\\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-reflection, lem-limsup-exists, lem-extended-reals-complete, def-real-limit, def-divergence-to-infinity, def-extended-reals, def-extended-limits, def-upper-bound, def-partial-order, def-sequence, lem-rat-embeds-dense, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-limsup-of-alternating-sequence]
aliases: []
landmark: true
short: "convergence $\\iff \\liminf = \\limsup$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\limsup$ and
$\liminf$ as in [[def-limsup-liminf]].

1. For $L \in \mathbb{R}$: $(x_k)$ converges to $L$ ([[def-real-limit]]) **if and
   only if** $\liminf_k x_k = \limsup_k x_k = L$.
2. $x_k \to +\infty$ ([[def-divergence-to-infinity]]) **if and only if**
   $\liminf_k x_k = \limsup_k x_k = +\infty$. Moreover $\liminf_k x_k = +\infty$
   on its own already forces $\limsup_k x_k = +\infty$.
3. $x_k \to -\infty$ **if and only if** $\liminf_k x_k = \limsup_k x_k = -\infty$,
   and $\limsup_k x_k = -\infty$ on its own already forces
   $\liminf_k x_k = -\infty$.

The three clauses combine into one statement about the extended line: for
$L \in \overline{\mathbb{R}}$, the sequence $(x_k)$ converges to $L$ in
$\overline{\mathbb{R}}$ ([[def-extended-limits]]) if and only if

$$\liminf_{k} x_k = \limsup_{k} x_k = L .$$

Since $\liminf_k x_k \le \limsup_k x_k$ always ([[lem-liminf-le-limsup]]), the
single equation $\liminf_k x_k = \limsup_k x_k$ is therefore equivalent to
convergence in $\overline{\mathbb{R}}$, and the common value is the limit. A
sequence that neither converges nor diverges to $\pm\infty$ is exactly one for
which the inequality is strict.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail bounds $s_n = \sup T_n$ and $i_n = \inf T_n$, and the quantities $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ ([[def-limsup-liminf]]).

[L1] All of $s_n$, $i_n$, $\limsup_k x_k$ and $\liminf_k x_k$ exist in $\overline{\mathbb{R}}$ for every sequence; $i_n$ is the greatest lower bound of $T_n$ and $\liminf_k x_k$ the least upper bound of $\{i_n\}$, with the dual descriptions for $s_n$ and $\limsup_k x_k$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; $+\infty$ is the greatest element and $-\infty$ the least; and every real is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently; and $L = \liminf_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k x_k \le \limsup_k x_k$ ([[lem-liminf-le-limsup]]).

[L5] Reflection: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]). Also $x_k \to -\infty$ if and only if $-x_k \to +\infty$: the condition $x_k < M$ for all $k \ge K$ is equivalent to $-x_k > -M$ for all $k \ge K$ by order reversal, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]]); the order reversal used here is strict, and the form stated in [[lem-of-add-order]] is likewise strict, so nothing nonstrict is being borrowed from it.

[L6] Convergence to a real $L$ means: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$; and the same relation is obtained by testing every real $\varepsilon > 0$ instead, since below any positive real lies a positive rational ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L7] Divergence: $x_k \to +\infty$ means that for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L8] Eventually and frequently, and the fact that a property holding eventually holds frequently, since indices beyond any two given thresholds exist by totality of the order on $\mathbb{N}$; likewise two properties each holding eventually hold together from the larger threshold on ([[def-sequence]], [[thm-nat-linear-order]]).

[L9] Absolute value: for $c > 0$, $|a| < c$ if and only if $-c < a < c$ ([[lem-of-abs-value]]).

[L10] Order arithmetic in $\mathbb{R}$: $0 < 1$, so $t < t + 1$ for every real $t$, and no real is above every real; adding a constant preserves the order ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L \in \mathbb{R}$ and that $(x_k)$ converges to $L$. [assume-hyp, L6]

1.2 For the converse implication of claim 1, assume $L \in \mathbb{R}$ and $\liminf_k x_k = \limsup_k x_k = L$. [assume-hyp, L1]

1.3 For the forward implication of claim 2, assume $x_k \to +\infty$. [assume-hyp, L7]

1.4 For the converse implication of claim 2, assume $\liminf_k x_k = +\infty$. [assume-hyp, L1]

2.1 Under the assumption of step 1.1, let $\varepsilon > 0$ be an arbitrary real. Testing convergence at $\varepsilon$ gives $K$ with $|x_k - L| < \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, for all $k \ge K$. So $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ eventually, and each of the two therefore also holds frequently. Both halves of each characterisation in [L3] are met, so $\limsup_k x_k = L$ and $\liminf_k x_k = L$. [step 1.1, L3, L6, L8, L9]

2.2 Under the assumption of step 1.2, let $\varepsilon > 0$ be an arbitrary real. The forward halves of the two characterisations in [L3] give $x_k < L + \varepsilon$ for all $k$ beyond some $K_1$ and $x_k > L - \varepsilon$ for all $k$ beyond some $K_2$; beyond the larger of $K_1$ and $K_2$ both hold, so $|x_k - L| < \varepsilon$ there. This holds for every real $\varepsilon > 0$, in particular for every rational one, so $(x_k)$ converges to $L$. [step 1.2, L3, L6, L8, L9]

2.3 Under the assumption of step 1.3, let $M$ be an arbitrary real and take $K$ with $x_k > M$ for all $k \ge K$. Then $M$ is a lower bound of $T_K$, so $M \le i_K$, and $i_K \le \liminf_k x_k$ because $\liminf_k x_k$ is an upper bound of $\{i_n\}$; hence $M \le \liminf_k x_k$. Since $M$ was an arbitrary real, $\liminf_k x_k$ is not $-\infty$, which lies below every real, and it is not a real $t$ either, since $M = t + 1$ would give $t + 1 \le t$. So $\liminf_k x_k = +\infty$. [step 1.3, L1, L2, L7, L10]

2.4 Under the assumption of step 1.4, let $M$ be an arbitrary real. Since $\sup\{i_n\} = +\infty$ and $M < +\infty$, the real $M$ is not an upper bound of $\{i_n\}$, for otherwise the least upper bound would satisfy $+\infty \le M$; by totality there is $n$ with $i_n > M$. Every $k \ge n$ satisfies $x_k \ge i_n > M$, so $x_k > M$ eventually. As $M$ was arbitrary, $x_k \to +\infty$. [step 1.4, L1, L2, L7]

3.1 Steps 2.1 and 2.2 are the two implications of claim 1. [step 2.1, step 2.2, L3]

3.2 For claim 2: if $x_k \to +\infty$ then $\liminf_k x_k = +\infty$ by step 2.3, and then $+\infty = \liminf_k x_k \le \limsup_k x_k$ forces $\limsup_k x_k = +\infty$ since $+\infty$ is the greatest element; conversely if $\liminf_k x_k = \limsup_k x_k = +\infty$ then in particular $\liminf_k x_k = +\infty$ and step 2.4 gives $x_k \to +\infty$. The same use of [L4] is the additional assertion that $\liminf_k x_k = +\infty$ alone forces $\limsup_k x_k = +\infty$. [step 2.3, step 2.4, L2, L4]

4.1 For claim 3, reflection gives $x_k \to -\infty$ exactly when $-x_k \to +\infty$, which by claim 2 holds exactly when $\liminf_k(-x_k) = \limsup_k(-x_k) = +\infty$, that is $-\limsup_k x_k = -\liminf_k x_k = +\infty$, that is $\limsup_k x_k = \liminf_k x_k = -\infty$; and $\limsup_k x_k = -\infty$ alone forces $\liminf_k x_k \le -\infty$, hence $\liminf_k x_k = -\infty$, since $-\infty$ is least. Claims 1, 2 and 3 together say that for $L \in \overline{\mathbb{R}}$ the sequence converges to $L$ in $\overline{\mathbb{R}}$ exactly when $\liminf_k x_k = \limsup_k x_k = L$, since the three clauses of that definition are convergence to a real $L$, divergence to $+\infty$ and divergence to $-\infty$. [step 3.1, step 3.2, L2, L4, L5] ∎

## Remarks

- **This is the theorem that makes $\limsup$ and $\liminf$ worth defining.** They
  exist for every sequence, with no hypothesis, and their coincidence is exactly
  convergence in $\overline{\mathbb{R}}$. So a question about convergence becomes
  a question about two computable quantities, and a proof of convergence can be
  assembled from one-sided estimates without a candidate limit in hand.

- **The equation is between elements of $\overline{\mathbb{R}}$, and reading it in
  $\mathbb{R}$ would lose two thirds of the content.** Clauses 2 and 3 are
  statements about divergence, and they are true statements about
  [[def-divergence-to-infinity]], not a redefinition of it: nothing above claims
  that a sequence diverging to $+\infty$ has a limit in $\mathbb{R}$, and the
  symbol $+\infty$ occurring in them is the element of $\overline{\mathbb{R}}$
  introduced in [[def-extended-reals]].

- **A sequence with $\liminf < \limsup$ does neither.** The alternating sequence
  is the standard witness, with the two values $-1$ and $1$
  ([[ex-limsup-of-alternating-sequence]]); it is bounded, so it also does not
  diverge to $\pm\infty$, and the theorem says its failure to converge is exactly
  the gap between the two quantities.
````

### `thm-direct-comparison-test`

````markdown
---
id: thm-direct-comparison-test
kind: theorem
title: "If $0 \\le a_k \\le b_k$ eventually, convergence of $\\sum b_k$ gives convergence of $\\sum a_k$, and divergence of $\\sum a_k$ gives divergence of $\\sum b_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-series, lem-finite-sum-laws, def-bounded-set, def-finite-sum]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Direct comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_comparison_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.25)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is
$K \in \mathbb{N}$ with

$$0 \;\le\; a_k \;\le\; b_k \qquad \text{for all } k \ge K .$$

Then:

1. if $\sum b_k$ converges then $\sum a_k$ converges ([[def-series]]);
2. if $\sum a_k$ diverges then $\sum b_k$ diverges.

The same statement holds verbatim for series with a general starting index $m$,
applied to the shifted sequences of [[def-series]].

The hypothesis is on the terms from some index on, not on all of them: finitely
many terms of either sequence may violate it, or be negative, without affecting
the conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that
index on.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $K \in \mathbb{N}$ with $0 \le a_k \le b_k$ for all $k \ge K$; the partial sums $\alpha_j = \sum_{i<j} a_{K+i}$ and $\beta_j = \sum_{i<j} b_{K+i}$ of the $K$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Monotonicity of finite sums: if $x_i \le y_i$ for all $i < j$ then $\sum_{i<j} x_i \le \sum_{i<j} y_i$ ([[lem-finite-sum-laws]]).

[L2] A series converges if and only if its $K$-th tail series converges ([[lem-series-tail-invariance]]).

[L3] For a series of nonnegative terms: it converges if and only if the range of its partial sums is bounded above, and in the convergent case every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 For every $i \in \mathbb{N}$ the index $K + i$ is at least $K$, so $0 \le a_{K+i} \le b_{K+i}$; in particular both tail series have nonnegative terms. [given]

1.2 Assume $\sum b_k$ converges. Then its $K$-th tail series $\sum_{k \ge K} b_k$ converges. [given, L2]

2.1 By monotonicity of finite sums, $\alpha_j \le \beta_j$ for every $j \in \mathbb{N}$. [step 1.1, L1]

2.2 That tail series has nonnegative terms, so its partial sums satisfy $\beta_j \le B$ for every $j$, where $B$ is its sum. [step 1.2, step 1.1, L3]

3.1 Hence $\alpha_j \le \beta_j \le B$ for every $j$, so the range of $(\alpha_j)$ is bounded above by $B$. [step 2.1, step 2.2]

4.1 The tail series $\sum_{k \ge K} a_k$ has nonnegative terms and partial sums bounded above, so it converges. [step 3.1, step 1.1, L3]

5.1 Therefore $\sum a_k$ converges, which is claim 1. [step 4.1, L2]

6.1 Claim 2 is the contrapositive of claim 1: if $\sum a_k$ diverges then $\sum b_k$ cannot converge. [step 5.1] ∎

## Remarks

- **Both nonnegativity hypotheses are used, and in different places.** $a_k \ge 0$ is what lets convergence of $\sum_{k \ge K} a_k$ be read off from boundedness of its partial sums, and $b_k \ge a_k \ge 0$ is what makes the sum of $\sum_{k \ge K} b_k$ an upper bound for the partial sums $\beta_j$. Drop the sign hypothesis and the theorem is false, not merely unproved; the companion page exhibits a pair with $a_k \le b_k$ for every $k$, $\sum b_k$ convergent and $\sum a_k$ divergent.

- **The comparison is with a series, not with a limit.** No quotient $a_k/b_k$ appears and no $b_k$ is required to be nonzero, which is what distinguishes this test from the limit comparison test proved next.
````

### `thm-geometric-series`

````markdown
---
id: thm-geometric-series
kind: theorem
title: "For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, lem-power-difference-factorisation, lem-geometric-sequence-null, lem-nth-term-test, def-integer-power, thm-algebra-of-limits, def-finite-sum, lem-of-abs-value, lem-power-monotone, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges ([[def-series]]) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

## Facts & Assumptions

**Given:** A real number $r$, the integer powers $r^k$ ([[def-integer-power]]), and the partial sums $s_n = \sum_{k<n} r^k$ of $\sum r^k$ ([[def-series]], [[def-finite-sum]]).

[L1] Factorisation of a difference of powers: for $a, b \in \mathbb{R}$ and natural $n \ge 1$, $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$ ([[lem-power-difference-factorisation]]).

[L2] For $|r| < 1$ the sequence $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]]).

[L3] Algebra of limits: sums, differences and quotients of convergent sequences converge to the corresponding combination, the quotient rule requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L4] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$; also $|1| = 1$, since $1 > 0$ ([[lem-of-abs-value]]).

[L5] Powers and order: $a^0 = 1$ for every $a$; if $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; and $1^n = 1$ for every $n$ ([[lem-power-monotone]], [[def-integer-power]]).

[L6] The principle of induction ([[thm-induction-principle]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]]).

[L8] Notation of [[def-finite-sum]]: $\sum_{k=0}^{n-1} x_k$ is $\sum_{k<n} x_k$, and the empty sum $\sum_{k<0} x_k$ is $0$.

## Proof

**Proof technique:** cases.

1.1 Assume $|r| < 1$. [assume-case lt]

1.2 Assume instead $|r| \ge 1$. [assume-case ge]

1.3 For every natural $n \ge 1$, applying [L1] with $b = 1$ and $a = r$ gives $1 - r^n = (1-r)\sum_{k=0}^{n-1} r^k \cdot 1^{\,n-1-k} = (1-r)\,s_n$, using $1^m = 1$ and the notation of [L8]. [L1, L5, L8]

1.4 At $n = 0$ the identity $1 - r^n = (1-r)s_n$ also holds, both sides being $0$ because $r^0 = 1$ and $s_0$ is the empty sum. [L5, L8]

2.1 In the case $|r| < 1$ we have $r \ne 1$, since $|1| = 1$ and $|r| < 1$; hence $1 - r \ne 0$. [step 1.1, L4, algebra]

2.2 In the case $|r| \ge 1$, an induction gives $|r^k| = |r|^k$ for every $k \in \mathbb{N}$: at $k = 0$ both sides are $1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k \cdot r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [step 1.2, L4, L5, L6]

2.3 In the case $|r| \ge 1$ we get $|r|^k \ge 1$ for every $k \in \mathbb{N}$: at $k = 0$ this reads $1 \ge 1$, and for $k \ge 1$ it is the comparison $|r|^k \ge |r| \ge 1$. [step 1.2, L5]

3.1 In the case $|r| < 1$, dividing by $1 - r \ne 0$ gives $s_n = (1 - r^n)/(1-r)$ for every $n \in \mathbb{N}$. [step 2.1, step 1.3, step 1.4, algebra]

3.2 In the case $|r| \ge 1$, combining the two previous steps gives $|r^k - 0| = |r^k| = |r|^k \ge 1$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3]

4.1 In the case $|r| < 1$ the sequence $(r^n)$ is null, so $1 - r^n \to 1$ and therefore $s_n \to 1/(1-r)$, the denominator being the nonzero constant $1-r$; hence $\sum r^k$ converges with sum $1/(1-r)$, which is claim 1. [step 1.1, step 3.1, step 2.1, L2, L3]

4.2 In the case $|r| \ge 1$ the sequence $(r^k)$ does not converge to $0$, since the rational tolerance $\varepsilon = 1$ admits no index $K$ with $|r^k - 0| < 1$ for all $k \ge K$; so by the term test $\sum r^k$ diverges, which is claim 2. [step 3.2, L7]

5.1 The two cases $|r| < 1$ and $|r| \ge 1$ exhaust the possibilities, since the order on $\mathbb{R}$ is total, so claims 1 and 2 together cover every real $r$. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **The divergence half needs no separate treatment of $r = 1$ and $r = -1$.** Both are covered by $|r| \ge 1$, and the single reason is the same in every case: the terms have absolute value at least $1$, so they cannot tend to $0$. For $r = 1$ the partial sums are $s_n = n$ and run to $+\infty$; for $r = -1$ they oscillate between $0$ and $1$. The theorem says only that neither converges, which is all that "diverges" means here ([[def-series]]).

- **Why the identity is proved at $n = 0$ separately.** [[lem-power-difference-factorisation]] requires $n \ge 1$, since its right-hand side is a sum over $k < n$ of a term involving $b^{\,n-1-k}$, and $n-1$ is not a natural number at $n = 0$. The identity is still true at $n = 0$, but by inspection of two empty objects rather than by that lemma, and step 1.4 says so rather than letting the reader assume the citation covers it.
````

### `thm-nth-roots-exist`

````markdown
---
id: thm-nth-roots-exist
kind: theorem
title: "Existence and uniqueness of $n$-th roots: a unique $a^{1/n} \\ge 0$ with $(a^{1/n})^n = a$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, lem-power-monotone, lem-power-difference-factorisation, def-bounded-set, lem-of-add-order, thm-of-square-roots, def-integer-power, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, lem-of-zero-mult, lem-of-naturals-positive, lem-of-q-embeds, def-ordered-field]
justified_by: []
aliases: [thm-nth-root, def-nth-root]
landmark: true
short: "unique $s\\ge0$ with $s^n=a$"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
For every $a \in \mathbb{R}$ with $a \ge 0$ and every $n \in \mathbb{N}$ with
$n \ge 1$ there is a **unique** $s \in \mathbb{R}$ with $s \ge 0$ and $s^n = a$
([[def-integer-power]]); we write

$$s = a^{1/n} = \sqrt[n]{a}.$$

Moreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.

**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is
not new.** That theorem already produces the unique $\sqrt{a} \ge 0$ with
$(\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation
$a^{1/2}$ introduced here is the same number. What is new is the passage to
general $n$: the completed square that drives the $n = 2$ argument has no direct
analogue, and its place is taken by the factorisation of $b^n - a^n$ and the
resulting Lipschitz estimate ([[lem-power-difference-factorisation]]).

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property; an element $a \ge 0$; and a natural $n \ge 1$, with $\iota(n) \in \mathbb{R}$ written $n$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).

[L1] Least-upper-bound property: every nonempty subset of $\mathbb{R}$ that is bounded above ([[def-bounded-set]]) has a least upper bound, and it is unique, so the notation $\sup S$ is legitimate ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Epsilon characterisation of the supremum: if $S$ is nonempty and bounded above and $u = \sup S$, then for every $\varepsilon > 0$ there is $t \in S$ with $u - \varepsilon < t$ ([[lem-sup-epsilon]]).

[L3] Monotonicity of powers ([[lem-power-monotone]]): $x \mapsto x^n$ is strictly increasing on $\{x \ge 0\}$ for $n \ge 1$, hence injective there; $x \ge 0$ implies $x^n \ge 0$ and $x > 0$ implies $x^n > 0$; and $x \ge 1$ implies $x^n \ge x$.

[L4] Lipschitz estimate ([[lem-power-difference-factorisation]]): if $0 \le x \le y \le B$ and $n \ge 1$ then $0 \le y^n - x^n \le n B^{\,n-1}(y - x)$.

[L5] Order arithmetic: adding a constant preserves the order and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-add-order]], [[lem-of-sign-rules]]), both stated there for the STRICT order alone, so where a $\le$ is added or scaled below the move is that statement together with the case of equality, settled by trichotomy ([[def-ordered-field]]); $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of those three, hence $2 = 1 + 1 > 0$; and $0 < 2^{-1} < 1$, since $0 < 1 < 2$ gives $0 < 2^{-1} < 1^{-1} = 1$ ([[lem-of-inverse-positive]], claim 2).

[L6] Trichotomy: for $x, y \in \mathbb{R}$ exactly one of $x < y$, $x = y$, $y < x$ holds; consequently any two elements have a minimum ([[def-ordered-field]]).

[L7] A product with a zero factor vanishes: $0 \cdot x = x \cdot 0 = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$ then $s = 0$ satisfies $s \ge 0$ and $s^n = 0 = a$, since $0^n = 0^{n-1} \cdot 0 = 0$ for $n \ge 1$; so existence holds in that case and we assume $a > 0$ from here on. [given, L3, L7, algebra]

1.2 Uniqueness holds as soon as a root exists: if $u, v \ge 0$ satisfy $u^n = v^n$, then strict monotonicity of $x \mapsto x^n$ on the nonnegatives rules out both $u < v$ and $v < u$, so $u = v$ by trichotomy. [L3, L6]

1.3 Define $S = \{t \in \mathbb{R} : t \ge 0 \text{ and } t^n \le a\}$; then $0 \in S$, because $0 \ge 0$ and $0^n = 0 \le a$, so $S$ is nonempty. [given, L3, L7]

1.4 The element $M := 1 + a$ is an upper bound of $S$: since $a > 0$ and $1 > 0$ we have $M > 1$ and $M > a$, so any $t > M$ satisfies $t > 1$, whence $t^n \ge t > M > a$ and $t \notin S$. [given, L3, L5]

2.1 By the least-upper-bound property $s := \sup S$ exists in $\mathbb{R}$; moreover $s \ge 0$ because $0 \in S$, and $s \le M$ because $M$ is an upper bound and $s$ is the least one. [L1, step 1.3, step 1.4]

3.1 Put $B := M + 1 = a + 2$; then $B > M \ge 1 > 0$, so $B^{\,n-1} > 0$ and $n B^{\,n-1} > 0$, and every $x$ with $0 \le x \le M + 1$ satisfies $0 \le x \le B$. [step 2.1, L3, L5]

3.2 Assume, for contradiction, that $s^n \ne a$; by trichotomy either $s^n < a$ or $s^n > a$. [assume-contra, step 2.1, L6]

4.1 (Case $s^n < a$.) Put $\delta := \min\{1, (a - s^n)(n B^{\,n-1})^{-1}\}$, which is $> 0$ since $a - s^n > 0$ and $n B^{\,n-1} > 0$, and put $h := 2^{-1}\delta$, so that $0 < h < \delta \le 1$ and $h < (a - s^n)(nB^{\,n-1})^{-1}$; then $0 \le s \le s + h \le M + 1 = B$, so the Lipschitz estimate gives $(s+h)^n - s^n \le nB^{\,n-1} h < a - s^n$, hence $(s+h)^n < a$ and $s + h \in S$, while $s + h > s$ contradicts that $s$ is an upper bound of $S$. [assume-case low, step 3.2, step 2.1, step 3.1, L4, L5, L6, choose]

4.2 (Case $s^n > a$.) Here $s > 0$, since $s = 0$ would give $s^n = 0 \le a$; put $\delta := \min\{s, (s^n - a)(nB^{\,n-1})^{-1}\} > 0$ and $h := 2^{-1}\delta$, so that $0 < h < s$ and $h < (s^n - a)(nB^{\,n-1})^{-1}$; then $0 \le s - h \le s \le B$, so the Lipschitz estimate gives $s^n - (s-h)^n \le nB^{\,n-1}h < s^n - a$, hence $(s-h)^n > a$; applying the epsilon characterisation with $\varepsilon = h$ produces $t \in S$ with $t > s - h \ge 0$, whence $t^n > (s-h)^n > a$ by strict monotonicity, contradicting $t \in S$. [assume-case high, step 3.2, step 2.1, step 3.1, L2, L3, L4, L5, L6, L7, choose]

5.1 Both cases of the disjunction in step 3.2 are impossible, so the assumption fails and $s^n = a$; this $s$ is the unique nonnegative $n$-th root of $a$ by step 1.2, it satisfies $s > 0$ when $a > 0$ because $s = 0$ would force $a = s^n = 0$, and at $n = 1$ the element $a$ itself is a nonnegative solution of $s^1 = a$, so $a^{1/1} = a$; writing $a^{1/n} = \sqrt[n]{a}$ for it, the case $n = 2$ recovers the already published $\sqrt{a}$ of [[thm-of-square-roots]]. [step 4.1, step 4.2, step 3.2, step 1.2, step 1.1, L3, L7, cases, discharge-contradiction] ∎
````

### `thm-p-series-rational`

````markdown
---
id: thm-p-series-rational
kind: theorem
title: "For rational $p > 0$, $\\sum 1/k^p$ converges iff $p > 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-condensation, thm-geometric-series, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-monotone-sequence, def-series, lem-of-inverse-positive, thm-nth-roots-exist, lem-of-naturals-positive, def-integer-power, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.28)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $p \in \mathbb{Q}$ with $p > 0$. For a natural number $k \ge 1$ write
$\iota(k) = k \cdot 1_{\mathbb{R}}$ for the canonical natural, which is positive
([[lem-of-naturals-positive]]), and write $k^{p} := \iota(k)^{p}$ for its rational
power ([[def-rational-power]]). Then

$$\sum_{k \ge 1} \frac{1}{k^{p}} \ \text{converges} \qquad \Longleftrightarrow \qquad p > 1 .$$

In particular the harmonic series $\sum_{k \ge 1} 1/k$ diverges, at $p = 1$, and
$\sum_{k \ge 1} 1/k^{2}$ converges, at $p = 2$.

**The index range is not cosmetic.** The series starts at $k = 1$ because
$1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational
$p > 0$, and $0$ has no inverse. Sequences here are functions on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series
from the starting index $1$ in the sense of [[def-series]], not a series of a
sequence on $\mathbb{N}$.

**The exponent is rational, and that is a limitation of this page.** Rational
powers of a positive base are what [[def-rational-power]] supplies; real exponents
require the exponential and the logarithm, which this library develops later. The
statement above is therefore the full $p$-series theorem for every exponent this
page can name.

## Facts & Assumptions

**Given:** A rational $p > 0$ and the family $a_k := 1/k^{p} = \iota(k)^{-p}$, defined for naturals $k \ge 1$ ([[def-rational-power]], [[def-series]]).

[L1] Rational powers of a positive base are positive, and $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$ for $a > 0$ and rationals $r, s$ ([[lem-rational-power-laws]]).

[L2] Monotonicity of rational powers: for rational $t > 0$ and $0 < a < b$ one has $a^{t} < b^{t}$; and for $a > 1$ and rationals $r < s$ one has $a^{r} < a^{s}$ ([[lem-rational-power-monotone]]).

[L3] The integer power and the rational power agree at an integer exponent: for $a > 0$ and $n \in \mathbb{Z}$, $a^{n}$ read as in [[def-integer-power]] equals $a^{n}$ read as in [[def-rational-power]], since $n = n/1$ and $a^{1/1} = a$ ([[thm-nth-roots-exist]], [[def-rational-power]]). In particular $a^{0} = 1$.

[L4] Reciprocation reverses the order on the positives: $0 < a < b$ implies $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L5] Condensation: for a family $(x_k)_{k \ge 1}$ that is nonnegative and nonincreasing, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L6] The geometric series: $\sum_{j \ge 0} r^{j}$ converges if and only if $|r| < 1$ ([[thm-geometric-series]], [[lem-of-abs-value]]).

[L7] The canonical naturals are positive and order preserving: $0 < \iota(1) \le \iota(j) < \iota(k)$ for naturals $1 \le j < k$, and $\iota(2) = 2 > 1$ ([[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 For every natural $k \ge 1$ the base $\iota(k)$ is positive, so $a_k = \iota(k)^{-p}$ is defined and positive; in particular the family is nonnegative. [given, L7, L1]

1.2 For naturals $1 \le j < k$ we have $0 < \iota(j) < \iota(k)$, hence $\iota(j)^{p} < \iota(k)^{p}$ since $p > 0$, hence $a_j = 1/\iota(j)^{p} > 1/\iota(k)^{p} = a_k$; and for $j = k$ the two are equal. So $a_j \ge a_k$ whenever $1 \le j \le k$. [given, L7, L2, L4, L1]

1.3 For every $j \in \mathbb{N}$ the base $2^{j}$ is positive and, reading the exponent $j$ as a rational, $2^{j} a_{2^{j}} = 2^{j} \big(2^{j}\big)^{-p} = 2^{j} \cdot 2^{-jp} = 2^{\,j - jp} = 2^{\,(1-p)j} = \big(2^{\,1-p}\big)^{j}$. [L1, L3, L7, algebra]

1.4 Since $2 > 1$, the map $t \mapsto 2^{t}$ is strictly increasing on $\mathbb{Q}$ and $2^{0} = 1$; hence $r = 2^{\,1-p} < 1 = 2^{0}$ holds exactly when $1 - p < 0$, that is exactly when $p > 1$. [L2, L3, L7]

2.1 Condensation applies to $(a_k)_{k \ge 1}$: $\sum_{k \ge 1} a_k$ converges if and only if $\sum_{j \ge 0} 2^{j} a_{2^{j}}$ converges. [step 1.1, step 1.2, L5]

2.2 So the condensed series is the geometric series $\sum_{j \ge 0} r^{j}$ with $r := 2^{\,1-p}$, and $r > 0$, so $|r| = r$. [step 1.3, L1, L3]

3.1 By the geometric series theorem, $\sum_{j \ge 0} r^{j}$ converges if and only if $r < 1$. [step 2.2, L6]

4.1 Chaining the three equivalences: $\sum_{k \ge 1} 1/k^{p}$ converges $\iff$ the condensed series converges $\iff$ $r < 1$ $\iff$ $p > 1$. [step 2.1, step 2.2, step 3.1, step 1.4] ∎

## Remarks

- **Where the threshold comes from.** Condensation turns the $p$-series into a geometric series of ratio $2^{1-p}$, and the geometric threshold $r = 1$ pulls back to $p = 1$. Nothing about the number $1$ is special to the $p$-series; it is the exponent at which the condensed terms stop shrinking.

- **At $p = 1$ the condensed series is $\sum_{j \ge 0} 1$.** Its terms do not tend to $0$, so it diverges, and with it the harmonic series. That instance is worked out on the companion page, together with the older block argument that does not use condensation at all.

- **Only rational exponents are covered, and the gap is real.** For irrational $p$ the expression $k^{p}$ has no meaning in this library yet, so the statement is not merely unproved there, it is unstatable. The same limitation is what keeps the Bertrand-type series $\sum 1/(k (\log k)^{p})$ off this page entirely, the logarithm not being available.
````

### `thm-ratio-root-inequality`

````markdown
---
id: thm-ratio-root-inequality
kind: theorem
title: "For $a_k > 0$: $\\liminf a_{k+1}/a_k \\le \\liminf a_k^{1/k} \\le \\limsup a_k^{1/k} \\le \\limsup a_{k+1}/a_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-monotone-comparison, lem-limsup-exists, lem-extended-reals-complete, thm-convergence-iff-limsup-equals-liminf, def-extended-reals, def-divergence-to-infinity, thm-nth-roots-exist, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, lem-nth-root-of-constant-tends-to-one, lem-power-monotone, def-integer-power, lem-power-laws, thm-of-archimedean, cor-archimedean-reciprocal, lem-of-inverse-positive, thm-algebra-of-limits, thm-induction-principle, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, prop-of-multiply-inequalities, def-sequence, def-real-limit, def-upper-bound, def-partial-order, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-ratio-fails-root-succeeds, ex-strict-ratio-root-chain]
aliases: []
landmark: true
short: "ratio-to-root chain"
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
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.37)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Maryland Math 410, Notes on the Real Numbers"
      url: "https://math.umd.edu/~lvrmr/2010-2011-F/Classes/MATH410/NOTES/Reals.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)_{k \in \mathbb{N}}$ be a sequence of reals ([[def-sequence]]) with
$a_k > 0$ for every $k$. Put

$$q_k := \frac{a_{k+1}}{a_k}, \qquad r_k := a_{k+1}^{1/(k+1)} \qquad (k \in \mathbb{N}),$$

with roots as in [[thm-nth-roots-exist]] and [[def-rational-power]]. Then, in
$\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]),

$$\liminf_{k} q_k \;\le\; \liminf_{k} r_k \;\le\; \limsup_{k} r_k \;\le\; \limsup_{k} q_k .$$

**The root sequence must start at index $1$, and $(r_k)$ is the shift that makes
it a sequence on $\mathbb{N}$.** The classical statement writes $a_n^{1/n}$, which
is meaningful only for $n \ge 1$, since $1/0$ is not a rational number; sequences
here are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$
([[def-sequence]]), so the root family is written $r_k = a_{k+1}^{1/(k+1)}$,
which is $a_n^{1/n}$ reindexed by $n = k+1$. The ratio family $q_k$ needs no
shift, and the four quantities in the display are those of the two sequences
$(q_k)$ and $(r_k)$ exactly as written here.

**This is why the root test dominates the ratio test.** If the ratios converge,
the outer two quantities coincide and the chain forces the roots to converge to
the same value; but the roots can converge when the ratios do not, and then the
chain is strict at both ends. Both phenomena are exhibited by named examples on
the companion page.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; the ratio sequence $q_k = a_{k+1}/a_k$; the root sequence $r_k = a_{k+1}^{1/(k+1)}$; and $\iota(n) = n \cdot 1_{\mathbb{R}}$ for the canonical naturals.

[L1] Tail ranges, extended tail bounds and the two quantities exist for every sequence, with $s_n$ the least upper bound of the $n$-th tail range and $i_n$ its greatest lower bound, $\limsup = \inf\{s_n\}$ and $\liminf = \sup\{i_n\}$ ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total and transitive, $+\infty$ is greatest and $-\infty$ least, it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$, and an element between two reals is real ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k z_k$ gives $z_k < L + \varepsilon$ eventually for every real $\varepsilon > 0$; $L = \liminf_k z_k$ gives $z_k > L - \varepsilon$ eventually for every real $\varepsilon > 0$ ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k z_k \le \limsup_k z_k$ ([[lem-liminf-le-limsup]]).

[L5] Comparison: $z_k \le w_k$ eventually implies $\limsup_k z_k \le \limsup_k w_k$ and $\liminf_k z_k \le \liminf_k w_k$ ([[lem-limsup-monotone-comparison]]).

[L6] A sequence converging to a real $c$ has $\limsup = \liminf = c$; and $\liminf_k z_k = +\infty$ implies $z_k \to +\infty$, hence $z_k > M$ eventually for every real $M$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-divergence-to-infinity]]).

[L7] For every real $C > 0$ the sequence $C^{1/(k+1)}$ converges to $1$ ([[lem-nth-root-of-constant-tends-to-one]]).

[L8] Algebra of limits: a scalar multiple of a convergent sequence converges to the scalar multiple of the limit ([[thm-algebra-of-limits]]).

[L9] Roots and powers of positive reals: $x^{1/n}$ exists, is unique and is $> 0$ for $x > 0$ and $n \ge 1$; $(xy)^{1/n} = x^{1/n} y^{1/n}$; the integer power $x^n$ is the rational power at exponent $n$, so $(x^n)^{1/n} = x^{n \cdot (1/n)} = x$; $x^{-m} = 1/x^m$ and $x^{m} x^{m'} = x^{m+m'}$ for integer exponents and $x \ne 0$; $x^n > 0$ for $x > 0$; and $0 \le x \le y$ implies $x^{1/n} \le y^{1/n}$ ([[thm-nth-roots-exist]], [[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[def-integer-power]], [[lem-power-laws]], [[lem-power-monotone]]).

[L10] Induction principle ([[thm-induction-principle]]).

[L11] Archimedean facts: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < x < y$ gives $0 < 1/y < 1/x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L12] Order arithmetic: [[lem-of-add-order]] and claim 4 of [[lem-of-sign-rules]] state the strict forms, that inequalities may be translated and added and that multiplication by a positive element preserves $<$; adjoining the case of equality, where both sides move or scale alike, gives the nonstrict forms used below. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]], and the order on $\mathbb{R}$ is total.

[L13] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L14] The order on $\mathbb{N}$ is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Every $q_k$ is positive, being a quotient of positive reals, and every $r_k$ is positive, being a root of the positive real $a_{k+1}$. Hence $0$ is a lower bound of every tail range of $(q_k)$ and of $(r_k)$, so every tail infimum is $\ge 0$ and therefore $\liminf_k q_k \ge 0$ and $\liminf_k r_k \ge 0$; with [L4] this also gives $\limsup_k q_k \ge 0$. [given, L1, L2, L4, L9, L11]

1.2 Let $c > 0$ be real, let $N \in \mathbb{N}$ and put $C := a_N c^{-N}$, a positive real. If $a_{k+1} \le c\,a_k$ for every $k \ge N$ then $a_n \le C c^n$ for every $n \ge N$; if $a_{k+1} \ge c\,a_k$ for every $k \ge N$ then $a_n \ge C c^n$ for every $n \ge N$. Both are inductions on $j$ for $n = N + j$: at $j = 0$ one has $C c^N = a_N c^{-N} c^N = a_N c^0 = a_N$, and the inductive step multiplies the bound at $n$ by the positive $c$ and uses the hypothesis at $k = n$. [given, L9, L10, L12]

1.3 Let $C > 0$ and $c > 0$ be real and $n \ge 1$ a natural. Then $(C c^n)^{1/n} = C^{1/n} (c^n)^{1/n} = C^{1/n} c$. Consequently $0 < a_n \le C c^n$ gives $a_n^{1/n} \le C^{1/n} c$, and $a_n \ge C c^n > 0$ gives $a_n^{1/n} \ge C^{1/n} c$, since $x \mapsto x^{1/n}$ is nondecreasing on the nonnegative reals. [given, L9]

1.4 For real $C > 0$ and $c > 0$ the sequence $u_k := C^{1/(k+1)} c$ converges to $c$, by [L7] and the scalar rule; hence $\limsup_k u_k = \liminf_k u_k = c$. [given, L6, L7, L8]

1.5 If $\limsup_k q_k = +\infty$ then $\limsup_k r_k \le \limsup_k q_k$, since $+\infty$ is the greatest element of $\overline{\mathbb{R}}$. [given, L2]

2.1 Suppose $\beta := \limsup_k q_k$ is real, and let $\varepsilon > 0$ be an arbitrary real. Put $c := \beta + \varepsilon$, which is positive since $\beta \ge 0$. By [L3] there is $N$ with $q_k < c$ for all $k \ge N$, that is $a_{k+1} < c\,a_k$ after multiplying by $a_k > 0$; so $a_{k+1} \le c\,a_k$ for $k \ge N$, and step 1.2 gives $a_n \le C c^n$ for all $n \ge N$ with $C := a_N c^{-N} > 0$. For $k \ge N$ the index $n := k+1$ satisfies $n \ge N$ and $n \ge 1$, so step 1.3 gives $r_k \le C^{1/(k+1)} c = u_k$. By step 1.4 and [L5], $\limsup_k r_k \le \limsup_k u_k = c = \beta + \varepsilon$. [step 1.1, step 1.2, step 1.3, step 1.4, L3, L5, L12, L14]

2.2 If $\alpha := \liminf_k q_k = 0$ then $\liminf_k r_k \ge 0 = \alpha$ by step 1.1. [step 1.1]

2.3 Suppose $\alpha := \liminf_k q_k > 0$ and let $c$ be a real with $0 < c < \alpha$. Then $q_k > c$ eventually: if $\alpha$ is real this is [L3] applied with $\varepsilon := \alpha - c > 0$, and if $\alpha = +\infty$ then $q_k \to +\infty$ by [L6], so $q_k > c$ eventually. Fix $N$ with $q_k > c$ for all $k \ge N$; then $a_{k+1} \ge c\,a_k$ for $k \ge N$, so step 1.2 gives $a_n \ge C c^n$ for all $n \ge N$ with $C := a_N c^{-N} > 0$, and step 1.3 gives $r_k \ge C^{1/(k+1)} c = u_k$ for every $k \ge N$. By step 1.4 and [L5], $\liminf_k r_k \ge \liminf_k u_k = c$. [step 1.1, step 1.2, step 1.3, step 1.4, L3, L5, L6, L12, L14]

3.1 Hence $\limsup_k r_k \le \limsup_k q_k$. By step 1.1 the element $\beta = \limsup_k q_k$ is $\ge 0$, so it is either $+\infty$, which is step 1.5, or real. In the real case step 2.1 with $\varepsilon = 1$ gives $\limsup_k r_k \le \beta + 1$, a real, so $\limsup_k r_k \ne +\infty$; if $\limsup_k r_k = -\infty$ it is $\le \beta$; and otherwise it is a real $S$, and $S > \beta$ would give, on choosing a natural $m \ge 1$ with $1/m < S - \beta$ and applying step 2.1 with $\varepsilon = 1/m$, the impossibility $S \le \beta + 1/m < S$. By totality $\limsup_k r_k \le \beta$. [step 2.1, step 1.5, step 1.1, L2, L11, L12]

3.2 Hence $\liminf_k q_k \le \liminf_k r_k$. By step 1.1 the element $\alpha = \liminf_k q_k$ is $\ge 0$, so it is $0$, or a positive real, or $+\infty$. The first case is step 2.2. If $\alpha$ is a positive real and $\liminf_k r_k < \alpha$, then $\liminf_k r_k$ lies between the reals $0$ and $\alpha$ by step 1.1 and is therefore real, so [L13] supplies a real $c$ with $\liminf_k r_k < c < \alpha$, necessarily $c > 0$; step 2.3 then gives $\liminf_k r_k \ge c$, contradicting $c > \liminf_k r_k$, so $\liminf_k r_k \ge \alpha$ by totality. If $\alpha = +\infty$, step 2.3 gives $\liminf_k r_k \ge c$ for every real $c$ with $c > 0$, so $\liminf_k r_k$ is not $-\infty$, and it is not a real $t$ either, since $t \ge 0$ by step 1.1 and then $c := t+1 > 0$ would give $t \ge t+1$; hence $\liminf_k r_k = +\infty = \alpha$. [step 2.2, step 2.3, step 1.1, L2, L12, L13]

4.1 Combining the three links, $\liminf_k q_k \le \liminf_k r_k$ by step 3.2, $\liminf_k r_k \le \limsup_k r_k$ by [L4], and $\limsup_k r_k \le \limsup_k q_k$ by step 3.1. [step 3.1, step 3.2, L4] ∎

## Remarks

- **The mechanism is that a ratio bound integrates to a geometric bound.** If the
  ratios are eventually below $c$ then the terms are eventually below a constant
  times $c^n$, and taking $n$-th roots turns the constant into $C^{1/n}$, which
  tends to $1$ by [[lem-nth-root-of-constant-tends-to-one]]. That single lemma is
  what makes the constant disappear, and it is the only analytic input; everything
  else is the comparison lemma [[lem-limsup-monotone-comparison]] and order
  bookkeeping.

- **All four quantities can be different, and the two outer inequalities can both
  be strict.** [[ex-strict-ratio-root-chain]] gives a positive sequence with
  chain $0 < 1/3 < 1/2 < +\infty$, so no two of the four coincide, and
  [[ex-ratio-fails-root-succeeds]] is the standard witness in which the roots
  converge while the ratios oscillate across $1$.

- **The chain also explains the practical rule.** When
  $\limsup_k q_k < 1$ the chain forces $\limsup_k r_k < 1$, so any conclusion
  drawn from the roots is available from the ratios; but
  $\limsup_k r_k < 1$ can hold with $\limsup_k q_k > 1$, and then only the root
  side is usable. This is the sense in which the root criterion is the stronger
  of the two.

- **The hypothesis $a_k > 0$ is needed at every index, not merely eventually.**
  The ratios must be defined, which needs $a_k \ne 0$, and the roots must be
  defined, which needs $a_{k+1} \ge 0$; positivity also lets the ratio
  inequalities be cleared of denominators. A sequence positive only from some
  index on can be handled by passing to that tail, which changes none of the four
  quantities.
````

