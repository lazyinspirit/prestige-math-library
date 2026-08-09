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

- critical risk (18): 26 declared dependencies; 27 cited facts; 22 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; induction, recursion, or minimality; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `thm-gauss-test`

Normalized current SHA-256: `c6e57aa7e526cdff6daffb82a0c5078ee1912ee300ec932b0294af04a951dc79`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-gauss-test
kind: theorem
title: "Gauss: for positive terms, if $a_k/a_{k+1} = 1 + h/k + r_k$ with $|r_k| \\le C\\,k^{-1-\\varepsilon}$ for $k \\ge 1$, some constant $C$ and some rational $\\varepsilon > 0$, the series converges iff $h > 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-raabe-test, thm-p-series-rational, thm-direct-comparison-test, def-limsup-liminf, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-series, thm-induction-principle, thm-of-archimedean, cor-archimedean-reciprocal, thm-squeeze, thm-algebra-of-limits, lem-series-linearity, lem-series-tail-invariance, lem-limit-of-tail, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-real-limit, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws]
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
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$.
Suppose there are a real $h$, a real $C \ge 0$, a rational $\varepsilon > 0$ and
reals $r_k$ for $k \ge 1$ such that

$$\frac{a_k}{a_{k+1}} \;=\; 1 + \frac{h}{k} + r_k \qquad \text{and} \qquad |r_k| \;\le\; C\,k^{-1-\varepsilon} \qquad (k \ge 1),$$

where $k$ denotes the canonical natural $\iota(k) > 0$ and $k^{-1-\varepsilon}$
is the rational power ([[def-rational-power]], [[lem-of-naturals-positive]]).
Then

$$\sum a_k \ \text{converges} \qquad \Longleftrightarrow \qquad h > 1 .$$

The hypotheses are imposed from $k = 1$ on, since $h/k$ has no value at $k = 0$;
$a_0$ is unconstrained beyond being positive, which costs nothing because
convergence is a tail property ([[lem-series-tail-invariance]]).

**The exponent $\varepsilon$ is rational because that is what
[[def-rational-power]] supplies**, and the error bound is a $p$-series bound with
$p = 1 + \varepsilon > 1$, which is exactly the summability the proof consumes.

**The borderline case $h = 1$ is the whole point of the theorem.** There
$R_k = (k+1)(a_k/a_{k+1} - 1)$ tends to $1$, so both halves of Raabe's test
([[cor-raabe-test]]) are silent; the theorem asserts divergence there, and the
argument below establishes it without any logarithm, by a telescoping product
estimate.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; reals $h$, $C \ge 0$, a rational $\varepsilon > 0$ and reals $r_k$ ($k \ge 1$) with $a_k/a_{k+1} = 1 + h/k + r_k$ and $|r_k| \le C k^{-1-\varepsilon}$ for $k \ge 1$; and $R_k := (k+1)(a_k/a_{k+1} - 1)$ for $k \in \mathbb{N}$ ([[cor-raabe-test]]).

[L1] Raabe's test: for positive terms, $\liminf_k R_k > 1$ gives convergence of $\sum a_k$ and $\limsup_k R_k < 1$ gives divergence ([[cor-raabe-test]]).

[L2] Every subset of $\overline{\mathbb{R}}$ has least upper and greatest lower bounds there; $\liminf_k x_k = \sup\{i_n\}$ and $\limsup_k x_k = \inf\{s_n\}$ for the tail bounds, both existing for every sequence ([[lem-extended-reals-complete]], [[def-extended-reals]], [[def-limsup-liminf]], [[lem-limsup-exists]]).

[L3] For every real $c > 0$ there is a natural $n \ge 1$ with $1/n < c$, and for every real $x$ there is a natural $n$ with $\iota(n) > x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Rational powers on a positive base: $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$, $a^{r} > 0$; and for rational $t > 0$, $0 < x < y$ implies $x^{t} < y^{t}$ ([[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[def-rational-power]]).

[L5] Limit rules: sums, scalar multiples, products and quotients of convergent sequences ([[thm-algebra-of-limits]]); the squeeze theorem ([[thm-squeeze]]); convergence depends only on the tail ([[lem-limit-of-tail]]); a convergent sequence satisfies its estimate for every real tolerance ([[def-real-limit]], [[cor-archimedean-reciprocal]]).

[L6] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$ ([[thm-p-series-rational]]).

[L7] Direct comparison, and the fact that scaling by a nonzero constant preserves convergence and divergence ([[thm-direct-comparison-test]], [[lem-series-linearity]]); a series converges if and only if each of its tail series converges, and for nonnegative terms every partial sum is at most the sum ([[lem-series-tail-invariance]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] The principle of induction ([[thm-induction-principle]]); reciprocation reverses order on the positives ([[lem-of-inverse-positive]]); $|x| \ge 0$ and $x \le |x|$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** cases.

1.1 Assume $h > 1$. [assume-case gt]

1.2 Assume instead $h < 1$. [assume-case lt]

1.3 Assume instead $h = 1$. [assume-case eq]

1.4 For every $k \ge 1$, $R_k = (k+1)\left(\dfrac{h}{k} + r_k\right) = h\left(1 + \dfrac{1}{k}\right) + (k+1) r_k$. [given, algebra]

1.5 The sequence $j \mapsto 1/(j+1)$ converges to $0$: given a rational $\eta > 0$, choose a natural $n \ge 1$ with $1/n < \eta$; then $1/(j+1) \le 1/n < \eta$ for every $j$ with $j+1 \ge n$. [L3, L8, choose]

1.6 The sequence $j \mapsto (j+1)^{-\varepsilon}$ converges to $0$: given a real $\eta > 0$, put $M := \max\{1/\eta,\, 1\} > 0$ and choose a natural $n$ with $\iota(n) > M^{1/\varepsilon}$; then for $j + 1 \ge n$ we get $(j+1)^{\varepsilon} > \big(M^{1/\varepsilon}\big)^{\varepsilon} = M \ge 1/\eta$, hence $0 < (j+1)^{-\varepsilon} < \eta$. [L3, L4, L8, choose]

1.7 For every $j \in \mathbb{N}$, $|(j+2)\,r_{j+1}| \le C (j+2)(j+1)^{-1-\varepsilon} \le 2C (j+1)\,(j+1)^{-1-\varepsilon} = 2C\,(j+1)^{-\varepsilon}$, using $j + 2 \le 2(j+1)$. [given, L4, L8, algebra]

2.1 Hence $-2C(j+1)^{-\varepsilon} \le (j+2) r_{j+1} \le 2C(j+1)^{-\varepsilon}$ with both bounds converging to $0$, so $(j+2) r_{j+1} \to 0$ by the squeeze theorem. [step 1.7, step 1.6, L5]

2.2 In the case $h = 1$, put $u_k := \dfrac{k}{k+1}\,r_k$ and $t_k := k\,a_k$ for $k \ge 1$; then $t_k > 0$, $|u_k| \le |r_k| \le C k^{-1-\varepsilon}$ since $0 < k/(k+1) < 1$, and $\dfrac{a_k}{a_{k+1}} = \dfrac{k+1}{k} + r_k = \dfrac{k+1}{k}\big(1 + u_k\big)$. [step 1.3, given, L8, algebra]

3.1 Therefore $R_{j+1} = h\big(1 + 1/(j+1)\big) + (j+2) r_{j+1} \to h(1+0) + 0 = h$, and since convergence depends only on the tail, the sequence $(R_k)_{k \in \mathbb{N}}$ converges to $h$. [step 1.4, step 1.5, step 2.1, L5]

3.2 Consequently $\dfrac{t_k}{t_{k+1}} = \dfrac{k}{k+1}\cdot\dfrac{a_k}{a_{k+1}} = 1 + u_k$ for $k \ge 1$, so $1 + u_k = t_k/t_{k+1} > 0$ and $\dfrac{t_{k+1}}{t_k} = \dfrac{1}{1+u_k}$. [step 2.2, algebra]

3.3 In the case $h = 1$: $\sum_{k \ge 1} k^{-1-\varepsilon}$ converges, since $1 + \varepsilon$ is a rational exceeding $1$; hence so does $\sum_{k \ge 1} C k^{-1-\varepsilon}$, and by comparison with it so does $\sum_{k \ge 1} |u_k|$, whose terms are nonnegative. [step 2.2, L6, L7]

4.1 In the case $h > 1$: applying the limit estimate with the real tolerance $(h-1)/2 > 0$ gives an $N$ with $R_k > h - (h-1)/2 = (h+1)/2$ for all $k \ge N$; so $(h+1)/2$ is a lower bound of $\{R_k : k \ge N\}$, whence $\liminf_k R_k \ge (h+1)/2 > 1$ and $\sum a_k$ converges. [step 1.1, step 3.1, L2, L5, L1]

4.2 In the case $h < 1$: the tolerance $(1-h)/2 > 0$ gives an $N$ with $R_k < h + (1-h)/2 = (h+1)/2$ for all $k \ge N$; so $(h+1)/2$ is an upper bound of $\{R_k : k \ge N\}$, whence $\limsup_k R_k \le (h+1)/2 < 1$ and $\sum a_k$ diverges. [step 1.2, step 3.1, L2, L5, L1]

4.3 For $k \ge 1$: $(1-u_k)(1+u_k) = 1 - u_k^{2} \le 1$ and $1 + u_k > 0$, so $\dfrac{1}{1+u_k} \ge 1 - u_k \ge 1 - |u_k|$. [step 3.2, L8, algebra]

4.4 Writing $U$ for the sum of $\sum_{k \ge 1} |u_k|$ and $P_n = \sum_{k=1}^{n} |u_k|$ for its partial sums, $P_n \to U$, so there is a natural $N_0$ with $U - P_{N_0} \le 1/2$; put $N := N_0 + 1$. [step 3.3, L5, L7, choose]

5.1 For every $n \ge N$ the block $\sum_{k=N}^{n} |u_k|$ is a partial sum of the $N_0$-th tail series of $\sum_{k \ge 1}|u_k|$, whose terms are nonnegative and whose sum is $U - P_{N_0}$; hence $\sum_{k=N}^{n} |u_k| \le 1/2$, and in particular $|u_k| \le 1/2$ for every $k \ge N$. [step 4.4, L7]

6.1 In the case $h = 1$: for every $n \ge N-1$, $\dfrac{t_{n+1}}{t_N} \ge 1 - \sum_{k=N}^{n} |u_k|$, by induction on $n$. At $n = N-1$ both sides equal $1$, the sum being empty. Assume it at $n$; then, since $t_{n+1}/t_N > 0$ and $1/(1+u_{n+1}) \ge 1 - |u_{n+1}| \ge 1/2 > 0$, and since the induction hypothesis gives $t_{n+1}/t_N \ge 1 - \sum_{k=N}^{n}|u_k| \ge 1/2 > 0$, we get $\dfrac{t_{n+2}}{t_N} = \dfrac{1}{1+u_{n+1}}\cdot\dfrac{t_{n+1}}{t_N} \ge \big(1-|u_{n+1}|\big)\Big(1 - \sum_{k=N}^{n}|u_k|\Big) \ge 1 - \sum_{k=N}^{n+1}|u_k|$, the last step expanding the product and discarding a nonnegative term. [step 3.2, step 4.3, step 5.1, L8]

7.1 Hence $t_{n+1}/t_N \ge 1 - 1/2 = 1/2$ for every $n \ge N-1$, that is $m\,a_m = t_m \ge t_N/2 > 0$ for every $m \ge N$, and so $a_m \ge \dfrac{t_N}{2}\cdot\dfrac{1}{m}$ for every $m \ge N$. [step 6.1, step 5.1, L8, algebra]

8.1 The series $\sum_{m \ge 1} 1/m$ diverges, so $\sum_{m \ge 1} \frac{t_N}{2}\cdot\frac{1}{m}$ diverges, the factor $t_N/2$ being nonzero. [step 7.1, L6, L7]

9.1 If $\sum a_k$ converged, then so would $\sum_{m \ge 1} a_m$, and comparison with the estimate of step 7.1 would make $\sum_{m \ge 1} \frac{t_N}{2m}$ converge, contradicting step 8.1; so in the case $h = 1$ the series $\sum a_k$ diverges. [step 7.1, step 8.1, L7]

10.1 The three cases $h > 1$, $h < 1$ and $h = 1$ exhaust the reals, and they give convergence, divergence and divergence respectively; so $\sum a_k$ converges exactly when $h > 1$. [step 4.1, step 4.2, step 9.1, cases-exhaustive] ∎

## Remarks

- **No logarithm anywhere, and that is deliberate.** The classical treatment of $h = 1$ compares $a_k$ with $1/(k \log k)$ or invokes Bertrand's test. Neither is available in this library at this point, and neither is needed: the hypothesis $|r_k| \le C k^{-1-\varepsilon}$ makes $\sum |u_k|$ convergent, and a convergent sum of nonnegative errors is exactly what the product estimate of step 6.1 consumes. The price is that the theorem is stated with an $\varepsilon$ of decay to spare, rather than for an arbitrary summable error.

- **Step 7.1 is the Weierstrass product inequality in disguise.** In the form $\prod_{j}(1 - x_j) \ge 1 - \sum_j x_j$ for $x_j \in [0,1]$, it is the standard statement; here the product is $t_{n+1}/t_N$, telescoped in advance, so that one induction does the work of two and no separate lemma about products of inequalities is needed.

- **What the conclusion at $h = 1$ says about the terms.** The estimate $a_m \ge (t_N/2)\,(1/m)$ is a genuine lower bound of harmonic type: at the borderline the terms cannot decay faster than a constant multiple of $1/m$, and divergence follows from the divergence of the harmonic series alone.

- **The three cases are decided by $h$ and by nothing else.** The constants $C$ and $\varepsilon$ never appear in the conclusion; they enter only through the requirement that the error be summable, which is what keeps the case $h = 1$ from being genuinely borderline in this argument.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-gauss-test",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf",
    "https://en.wikipedia.org/wiki/Convergence_tests"
  ],
  "rationale": "The sources state Gauss's test for a_n/a_{n+1}=1+alpha/n+O(n^{-beta}) with beta>1, convergent exactly for alpha>1. The item's bound |r_k|<=C k^{-1-epsilon}, epsilon positive rational, is the same big-O regime after choosing beta=1+epsilon, with local rational-power conventions. Its borderline proof is a locally constructed summable-error product argument rather than the sourced logarithmic/Kummer proof.",
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
      "source": "cor-raabe-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \\in \\mathbb{N}$.\nWrite $k+1$ for the canonical natural $\\iota(k+1) \\in \\mathbb{R}$, which is\npositive ([[lem-of-naturals-positive]]), take the weights\n$\\zeta_k := k+1$ in [[thm-kummer-test]], and put\n\n$$R_k \\;:=\\; (k+1)\\left(\\frac{a_k}{a_{k+1}} - 1\\right) \\qquad (k \\in \\mathbb{N}),$$\n\nso that Kummer's expression for these weights is $K_k = R_k - 1$. Then:\n\n1. if $\\liminf_{k} R_k > 1$ then $\\sum a_k$ converges;\n2. if $\\limsup_{k} R_k < 1$ then $\\sum a_k$ diverges.\n\nThe weights are $k+1$ rather than $k$ because $\\zeta_0$ has to be positive and\n$\\mathbb{N}$ contains $0$; the classical statement, indexed from $1$, is the same\ncriterion read along the shift $k = j+1$.\n\n**Nothing is claimed when $\\liminf_k R_k \\le 1 \\le \\limsup_k R_k$.** The Gauss\ntest proved next is exactly the tool for the borderline case $R_k \\to 1$, where\nRaabe's test is silent.",
      "uses": [
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-extended-reals-complete",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\overline{\\mathbb{R}}$ be **any** subset of the extended real\nline ([[def-extended-reals]]) and write $A_{\\mathbb{R}} := A \\cap \\mathbb{R}$.\nThen $A$ has a least upper bound and a greatest lower bound in\n$\\overline{\\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write\n$\\sup A$ and $\\inf A$ with the ambient set always $\\overline{\\mathbb{R}}$.\nExplicitly:\n\n- $\\sup A = +\\infty$ if $+\\infty \\in A$, or if $A_{\\mathbb{R}}$ is not bounded above in $\\mathbb{R}$;\n- $\\sup A = -\\infty$ if $+\\infty \\notin A$ and $A_{\\mathbb{R}} = \\emptyset$;\n- $\\sup A$ is the real supremum $\\sup A_{\\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\\infty \\notin A$ and $A_{\\mathbb{R}}$ is nonempty and bounded above in $\\mathbb{R}$;\n\nand dually, with $-\\infty$ and $+\\infty$ exchanged and \"above\" replaced by\n\"below\", for $\\inf A$ ([[def-infimum]], [[thm-infimum-property]]).\n\n**Agreement.** If $A \\subseteq \\mathbb{R}$ is nonempty and bounded above in\n$\\mathbb{R}$ ([[def-bounded-set]]) then $\\sup A$ computed in\n$\\overline{\\mathbb{R}}$ is the real number $\\sup A$ of\n[[def-complete-ordered-field]]; if $A \\subseteq \\mathbb{R}$ is nonempty and\nbounded below then $\\inf A$ computed in $\\overline{\\mathbb{R}}$ is the real\nnumber $\\inf A$ of [[thm-infimum-property]]. In particular the notation is\nunambiguous on the sets for which the real supremum and infimum are defined, and\n$\\sup \\emptyset = -\\infty$, $\\inf \\emptyset = +\\infty$ in\n$\\overline{\\mathbb{R}}$.\n\n**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot\ndo, and it is why every $\\limsup$ statement on this page holds for every sequence\nrather than for bounded ones only. It is also not a weakening of the discipline\nthis library keeps around suprema: the operation supplied here is a *different*\noperation, taken in a *different* ordered set, and the agreement clause records\nexactly where the two coincide.",
      "uses": [
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "Fix two objects $-\\infty$ and $+\\infty$, distinct from one another and neither of\nthem a real number ([[def-real-numbers]]), and set\n\n$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$\n\nThis is a **new object**, introduced here explicitly with its own order and its\nown partial arithmetic. It is not an enlargement of the field $\\mathbb{R}$, and\nno operation of $\\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by\nanything below.\n\n**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare\n\n$$a \\le b \\quad :\\Longleftrightarrow \\quad a = -\\infty \\ \\text{ or } \\ b = +\\infty \\ \\text{ or } \\ \\big(a, b \\in \\mathbb{R} \\text{ and } a \\le b \\text{ in } \\mathbb{R}\\big),$$\n\nwith $\\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for\n\"$a \\le b$ and $a \\ne b$\" as usual ([[def-partial-order]]).\n\n**$(\\overline{\\mathbb{R}}, \\le)$ is a totally ordered set, and the inclusion of\n$\\mathbb{R}$ preserves and reflects the order.** All four checks are immediate\nfrom the displayed clauses.\n\n- *Reflexive.* For $a = \\pm\\infty$ one of the first two clauses applies; for\n  $a \\in \\mathbb{R}$ the third does, since $a \\le a$ in $\\mathbb{R}$.\n- *Antisymmetric.* Suppose $a \\le b$ and $b \\le a$. If $a = -\\infty$ then\n  $b \\le a$ forces $b = -\\infty$, since the clause $a = +\\infty$ fails and $b, a$\n  are not both real. Symmetrically $b = -\\infty$ forces $a = -\\infty$, and\n  $a = +\\infty$ or $b = +\\infty$ forces the other to be $+\\infty$. In the one\n  remaining situation $a$ and $b$ are both real and antisymmetry is that of\n  $\\mathbb{R}$.\n- *Transitive.* Let $a \\le b \\le c$. If $a = -\\infty$ or $c = +\\infty$ the\n  conclusion is one of the first two clauses. Otherwise $a \\ne -\\infty$ forces,\n  in $a \\le b$, either $b = +\\infty$ or $a, b \\in \\mathbb{R}$; and $c \\ne +\\infty$\n  forces, in $b \\le c$, either $b = -\\infty$ or $b, c \\in \\mathbb{R}$. The value\n  $b = +\\infty$ is incompatible with the second alternative pair, so $b$ is real,\n  hence so are $a$ and $c$, and transitivity is that of $\\mathbb{R}$.\n- *Total.* If $a = -\\infty$ or $b = +\\infty$ then $a \\le b$; if $b = -\\infty$ or\n  $a = +\\infty$ then $b \\le a$; otherwise both are real and the order of\n  $\\mathbb{R}$ is total.\n- *Preserved and reflected.* For $a, b \\in \\mathbb{R}$ the first two clauses fail,\n  so $a \\le b$ in $\\overline{\\mathbb{R}}$ says exactly $a \\le b$ in $\\mathbb{R}$.\n\nIn particular $-\\infty$ is the least and $+\\infty$ the greatest element of\n$\\overline{\\mathbb{R}}$, and $-\\infty < x < +\\infty$ for every $x \\in \\mathbb{R}$.\n\n**Reflection.** Extend negation by\n\n$$-(+\\infty) := -\\infty, \\qquad -(-\\infty) := +\\infty,$$\n\nkeeping the field negative on $\\mathbb{R}$. The resulting map\n$\\nu : \\overline{\\mathbb{R}} \\to \\overline{\\mathbb{R}}$, $\\nu(a) = -a$, satisfies\n$\\nu(\\nu(a)) = a$ and\n\n$$a \\le b \\iff -b \\le -a \\qquad (a, b \\in \\overline{\\mathbb{R}}).$$\n\nFor $a$ and $b$ real this is the elementwise order reversal in $\\mathbb{R}$:\ntranslation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$\nturns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,\nwhile $a = b$ holds exactly when $-a = -b$. In every other case both sides are\ndecided by the first two clauses of the order: $a = -\\infty$ makes both sides\ntrue, as does $b = +\\infty$, and if $a \\ne -\\infty$, $b \\ne +\\infty$ and $a, b$\nare not both real then one of $a = +\\infty$, $b = -\\infty$ holds and both sides\nare false.\n\n**Partial addition.** For $a, b \\in \\overline{\\mathbb{R}}$ the sum $a + b$ is\ndefined by\n\n- $a + b$ = the field sum, when $a, b \\in \\mathbb{R}$;\n- $a + b := +\\infty$ when $a = +\\infty$ and $b \\ne -\\infty$, or $b = +\\infty$ and $a \\ne -\\infty$;\n- $a + b := -\\infty$ when $a = -\\infty$ and $b \\ne +\\infty$, or $b = -\\infty$ and $a \\ne +\\infty$;\n\nand **the two sums $(+\\infty) + (-\\infty)$ and $(-\\infty) + (+\\infty)$ are left\nundefined**. Addition is commutative where defined, and\n\n$$-(a + b) = (-a) + (-b),$$\n\neach side being defined exactly when the other is: the excluded pairs\n$\\{+\\infty, -\\infty\\}$ are exchanged by $\\nu$, and the three clauses above are\nexchanged accordingly.\n\n**Partial multiplication.** For $a, b \\in \\overline{\\mathbb{R}}$ the product $ab$\nis defined by\n\n- $ab$ = the field product, when $a, b \\in \\mathbb{R}$;\n- $ab := +\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and both are $> 0$ or both are $< 0$;\n- $ab := -\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and one is $> 0$ and the other $< 0$;\n\nand **every product with one factor $0$ and the other $\\pm\\infty$ is left\nundefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,\nunder which $+\\infty > 0 > -\\infty$.\n\n**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-limsup-liminf",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \\in \\mathbb{N}$ let\n\n$$T_n \\;:=\\; \\{\\, x_k : k \\in \\mathbb{N},\\ k \\ge n \\,\\} \\subseteq \\mathbb{R}$$\n\nbe the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\\mathbb{R}$ since\n$x_n \\in T_n$. Regard $T_n$ as a subset of $\\overline{\\mathbb{R}}$\n([[def-extended-reals]]) and put\n\n$$s_n \\;:=\\; \\sup T_n \\in \\overline{\\mathbb{R}}, \\qquad i_n \\;:=\\; \\inf T_n \\in \\overline{\\mathbb{R}},$$\n\nthe supremum and infimum taken in $\\overline{\\mathbb{R}}$, which exist for every\n$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit\nsuperior** and **limit inferior** of $(x_k)$ are then\n\n$$\\limsup_{k} x_k \\;:=\\; \\inf \\{\\, s_n : n \\in \\mathbb{N} \\,\\}, \\qquad \\liminf_{k} x_k \\;:=\\; \\sup \\{\\, i_n : n \\in \\mathbb{N} \\,\\},$$\n\nagain taken in $\\overline{\\mathbb{R}}$ and again existing by\n[[lem-extended-reals-complete]], since $\\{s_n : n \\in \\mathbb{N}\\}$ and\n$\\{i_n : n \\in \\mathbb{N}\\}$ are subsets of $\\overline{\\mathbb{R}}$ on which no\nhypothesis is needed. Both are elements of $\\overline{\\mathbb{R}}$, and either may\nbe $+\\infty$ or $-\\infty$. The notations $\\limsup_{k \\to \\infty} x_k$,\n$\\varlimsup_k x_k$ and $\\overline{\\lim}_k x_k$ all denote the first of them\nelsewhere; this library writes $\\limsup_k x_k$.\n\n**Every quantity written here exists, and that is why the extended line was\nintroduced.** Each of the four operations above is an application of\n[[lem-extended-reals-complete]] to a subset of $\\overline{\\mathbb{R}}$ carrying no\nhypothesis whatever. Written with the real supremum of\n[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]\ninstead, the definition would be available only for sequences that are bounded\n([[def-bounded-set]]): $\\sup T_n$ needs $T_n$ bounded above, and\n$\\inf\\{s_n\\}$ needs $\\{s_n\\}$ nonempty, bounded below, and made of real numbers\n([[def-infimum]]). None of those is automatic, and the discipline recorded in\n[[rem-sup-conventions]] forbids papering over the gap with a convention. The\nextended supremum is a different operation in a different ordered set, and it is\ntotal.\n\n**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say\n$|x_k| \\le M$ for every $k$, then each $T_n$ is a nonempty subset of $\\mathbb{R}$\nbounded above by $M$ and below by $-M$, so by the agreement clause of\n[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum\nor infimum of $T_n$, and lies in $[-M, M]$. The family $\\{s_n\\}$ is then a\nnonempty set of reals bounded below by $-M$, so $\\limsup_k x_k$ is likewise the\nreal infimum of $\\{s_n\\}$ and lies in $[-M, M]$; dually for $\\liminf_k x_k$. So\nfor a bounded sequence both quantities are ordinary real numbers computed with\nthe ordinary real supremum and infimum, and the extended line is doing no work.\nIt is only for unbounded sequences that the values $\\pm\\infty$ occur.",
      "uses": [
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-limsup-exists",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and\nextended tail bounds $s_n = \\sup T_n$, $i_n = \\inf T_n$ as in\n[[def-limsup-liminf]].\n\n1. **Monotonicity of the extended bounds under inclusion.** If\n   $A \\subseteq B \\subseteq \\overline{\\mathbb{R}}$ ([[def-extended-reals]]) then\n   $$\\sup A \\le \\sup B \\qquad \\text{and} \\qquad \\inf B \\le \\inf A,$$\n   the four quantities being the extended bounds of [[lem-extended-reals-complete]].\n   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.\n2. **The tail bounds are monotone.** $T_m \\subseteq T_n$ whenever $n \\le m$, and\n   hence\n   $$s_m \\le s_n \\qquad \\text{and} \\qquad i_n \\le i_m \\qquad (n \\le m).$$\n   In particular $s_{n+1} \\le s_n$ and $i_n \\le i_{n+1}$ for every $n$, and\n   $i_n \\le s_n$ for every $n$.\n3. **Existence.** $\\limsup_k x_k$ and $\\liminf_k x_k$ exist in\n   $\\overline{\\mathbb{R}}$ for **every** sequence of reals, bounded or not.\n\nClaim 1 is the tool the rest of this page uses whenever two extended suprema are\ncompared. It is proved here, from the definition of a least upper bound, rather\nthan quoted from the suprema page, for the reason given in the remarks below.",
      "uses": [
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "1.5",
        "1.6"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "1.5",
        "1.6"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-rational-power-laws",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a, b > 0$ and let $r, s \\in \\mathbb{Q}$, with\nrational powers as in [[def-rational-power]]. Then:\n\n1. $a^{r} > 0$.\n2. $a^{r+s} = a^{r} a^{s}$.\n3. $(ab)^{r} = a^{r} b^{r}$; in particular $\\big(ab\\big)^{1/N} = a^{1/N} b^{1/N}$ for every natural $N \\ge 1$.\n4. $a^{-r} = \\big(a^{r}\\big)^{-1} = 1/a^{r}$.\n5. $\\big(a^{r}\\big)^{s} = a^{rs}$.\n\nClaims 2 and 3 persist in the supplementary case of [[def-rational-power]]: for\n$a, b \\ge 0$ and rationals $r, s > 0$ ([[def-rat-order]]) one still has\n$(ab)^{r} = a^{r} b^{r}$ and $a^{r+s} = a^{r} a^{s}$. The two identities degenerate\ndifferently, and it is worth saying how. In the product identity, a zero base on\neither side makes both sides $0$. In the addition identity only the base $a$\noccurs, so it degenerates only when $a = 0$, and then both sides are $0$; when\n$a > 0$ that identity holds with no hypothesis on $b$ at all.",
      "uses": [
        "1.6",
        "1.7"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-rational-power-monotone",
      "source_section": "Statement",
      "quote": "Let $a \\in \\mathbb{R}$ with $a > 0$ and let $r, s \\in \\mathbb{Q}$ with $r < s$\n([[def-rat-order]]), with rational powers as in [[def-rational-power]].\n\n1. **In the exponent.** If $a > 1$ then $a^{r} < a^{s}$; if $a = 1$ then $a^{r} = a^{s} = 1$; if $0 < a < 1$ then $a^{r} > a^{s}$.\n2. **In the base.** If $r \\in \\mathbb{Q}$ with $r > 0$ and $0 < a < b$, then $a^{r} < b^{r}$; so $a \\mapsto a^{r}$ is strictly increasing on $\\{a \\in \\mathbb{R} : a > 0\\}$.\n3. **Comparison with $1$.** For rational $t > 0$: $a > 1$ implies $a^{t} > 1$, and $0 < a < 1$ implies $a^{t} < 1$.",
      "uses": [
        "1.6",
        "1.7"
      ]
    },
    {
      "fact": "L4",
      "source": "def-rational-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$ with $a > 0$ and let $r \\in \\mathbb{Q}$ ([[def-rationals]]).\n\nEvery rational has a representative with positive denominator\n([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \\in \\mathbb{Z}$\nand $n$ a positive integer; a positive integer is the image of a unique natural\n$\\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define\n\n$$a^{r} := \\big(a^{1/n}\\big)^{m},$$\n\nwhere $a^{1/n}$ is the unique nonnegative $n$-th root of $a$\n([[thm-nth-roots-exist]]) and the outer exponent is an integer power\n([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when\n$a > 0$, so it has an inverse and negative integer exponents are allowed.\n\n**Well-definedness.** The right-hand side must not depend on which representative\n$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],\nwhich is recorded in this item's `justified_by` rather than in its `deps`, since\nit is a statement *about* the operation defined here and therefore depends on\nthis definition.\n\n**The base must be positive.** For $a < 0$ the same formula is not a definition\nat all, because different representatives of the same rational give different\nanswers, or no answer: see [[fs-rational-power-of-negative-base]], which is\nexactly the item that justifies the restriction.\n\n**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$\n([[def-rat-order]]) the displayed formula still makes sense and still does not\ndepend on the representative: $r > 0$ forces $m \\ge 1$, and\n$\\big(0^{1/n}\\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every\n$a \\ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the\nexpression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is\nwhat lets the inequalities later on this page be stated for nonnegative entries\nrather than for positive ones only.",
      "uses": [
        "1.6",
        "1.7"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-algebra-of-limits",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to\n$x$ and $y$ respectively ([[def-real-limit]]), and let $c \\in \\mathbb{R}$. Then\n\n$$x_k + y_k \\to x + y, \\qquad c\\,x_k \\to c\\,x, \\qquad x_k - y_k \\to x - y, \\qquad x_k y_k \\to x y,$$\n\nand if in addition $y \\ne 0$ and $y_k \\ne 0$ for every $k \\in \\mathbb{N}$, then\n\n$$\\frac{1}{y_k} \\to \\frac{1}{y} \\qquad \\text{and} \\qquad \\frac{x_k}{y_k} \\to \\frac{x}{y}.$$\n\nThe quotient case rests on an eventual lower bound for $|y_k|$, proved below\nrather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.",
      "uses": [
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.4"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-squeeze",
      "source_section": "Statement",
      "quote": "Let $(a_k)$, $(x_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) with\n\n$$a_k \\le x_k \\le b_k \\quad \\text{eventually},$$\n\nand suppose $(a_k)$ and $(b_k)$ both converge to the same real $L$\n([[def-real-limit]]). Then $(x_k)$ converges to $L$.\n\nThe middle sequence is not assumed to converge; that is the point of the\ntheorem, and it is why the squeeze is a tool for *establishing* convergence\nrather than for computing a limit already known to exist.",
      "uses": [
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.4"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-limit-of-tail",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), let $x \\in \\mathbb{R}$,\nand for $K \\in \\mathbb{N}$ let $x^{(K)}$ denote the $K$-th tail, $x^{(K)}_j =\nx_{j+K}$. The following are equivalent ([[def-real-limit]]):\n\n1. $(x_k)$ converges to $x$;\n2. every tail $x^{(K)}$ converges to $x$;\n3. some tail $x^{(K)}$ converges to $x$.\n\nThe same three statements with \"converges to $x$\" replaced by \"is Cauchy\" are\nlikewise equivalent. Consequently, if two sequences agree from some index on,\nthen either both converge to $x$ or neither does, and either both are Cauchy or\nneither is.",
      "uses": [
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.4"
      ]
    },
    {
      "fact": "L5",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.4"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.4"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-p-series-rational",
      "source_section": "Statement",
      "quote": "Let $p \\in \\mathbb{Q}$ with $p > 0$. For a natural number $k \\ge 1$ write\n$\\iota(k) = k \\cdot 1_{\\mathbb{R}}$ for the canonical natural, which is positive\n([[lem-of-naturals-positive]]), and write $k^{p} := \\iota(k)^{p}$ for its rational\npower ([[def-rational-power]]). Then\n\n$$\\sum_{k \\ge 1} \\frac{1}{k^{p}} \\ \\text{converges} \\qquad \\Longleftrightarrow \\qquad p > 1 .$$\n\nIn particular the harmonic series $\\sum_{k \\ge 1} 1/k$ diverges, at $p = 1$, and\n$\\sum_{k \\ge 1} 1/k^{2}$ converges, at $p = 2$.\n\n**The index range is not cosmetic.** The series starts at $k = 1$ because\n$1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational\n$p > 0$, and $0$ has no inverse. Sequences here are functions on $\\mathbb{N}$ and\n$\\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series\nfrom the starting index $1$ in the sense of [[def-series]], not a series of a\nsequence on $\\mathbb{N}$.\n\n**The exponent is rational, and that is a limitation of this page.** Rational\npowers of a positive base are what [[def-rational-power]] supplies; real exponents\nrequire the exponential and the logarithm, which this library develops later. The\nstatement above is therefore the full $p$-series theorem for every exponent this\npage can name.",
      "uses": [
        "3.3",
        "8.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is\n$K \\in \\mathbb{N}$ with\n\n$$0 \\;\\le\\; a_k \\;\\le\\; b_k \\qquad \\text{for all } k \\ge K .$$\n\nThen:\n\n1. if $\\sum b_k$ converges then $\\sum a_k$ converges ([[def-series]]);\n2. if $\\sum a_k$ diverges then $\\sum b_k$ diverges.\n\nThe same statement holds verbatim for series with a general starting index $m$,\napplied to the shifted sequences of [[def-series]].\n\nThe hypothesis is on the terms from some index on, not on all of them: finitely\nmany terms of either sequence may violate it, or be negative, without affecting\nthe conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that\nindex on.",
      "uses": [
        "3.3",
        "4.4",
        "5.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-series-linearity",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge\n([[def-series]]), and let $c \\in \\mathbb{R}$. Then:\n\n1. $\\sum (a_k + b_k)$ converges, with\n   $\\displaystyle\\sum_{k=0}^{\\infty}(a_k + b_k) = \\sum_{k=0}^{\\infty} a_k + \\sum_{k=0}^{\\infty} b_k$;\n2. $\\sum c\\,a_k$ converges, with\n   $\\displaystyle\\sum_{k=0}^{\\infty} c\\,a_k = c \\sum_{k=0}^{\\infty} a_k$.\n\nMoreover, for $c \\ne 0$ and an arbitrary sequence $(a_k)$, whose series is not\nassumed to converge:\n\n3. $\\sum c\\,a_k$ converges **if and only if** $\\sum a_k$ converges. Equivalently,\n   $\\sum a_k$ diverges if and only if $\\sum c\\,a_k$ diverges.\n\nClaim 3 is the form used whenever a comparison is made against a constant\nmultiple of a known series.",
      "uses": [
        "3.3",
        "4.4",
        "5.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-series-tail-invariance",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with partial sums $s_n = \\sum_{k<n} a_k$, let\n$N \\in \\mathbb{N}$, and let $t_j := \\sum_{i<j} a_{N+i}$ be the partial sums of the\n$N$-th tail series $\\sum_{k \\ge N} a_k$ ([[def-series]]). Then:\n\n1. $t_j = s_{j+N} - s_N$ for every $j \\in \\mathbb{N}$;\n2. $\\sum a_k$ converges **if and only if** its $N$-th tail series converges, and\n   in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; s_N \\;+\\; \\sum_{k=N}^{\\infty} a_k ;$$\n3. hence the following are equivalent: $\\sum a_k$ converges; every tail series of\n   $\\sum a_k$ converges; some tail series of $\\sum a_k$ converges.\n\nIn words: convergence of a series is a property of its terms from any index on,\nand changing finitely many terms changes the sum but not the fact of convergence.",
      "uses": [
        "3.3",
        "4.4",
        "5.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$,\nlet $s_n = \\sum_{k<n} a_k$ be its partial sums and let\n$S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]).\nThen:\n\n1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every\n   $n$;\n2. $\\sum a_k$ converges **if and only if** $S$ is bounded above\n   ([[def-bounded-set]]), and in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$\n   so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$;\n3. if $S$ is not bounded above then $s_n \\to +\\infty$\n   ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges.\n\nThis is the theorem that makes the nonnegative theory work: for terms of one\nsign, convergence is a boundedness question and no candidate limit is ever\nneeded. Every comparison test on this page is an application of it.",
      "uses": [
        "3.3",
        "4.4",
        "5.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and\na **sequence of reals** is a function $a : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), written $(a_k)$; recall that $\\mathbb{N}$ contains $0$.\n\n**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial\nsums** is\n\n$$s_n \\;:=\\; \\sum_{k < n} a_k \\qquad (n \\in \\mathbb{N}),$$\n\nthe finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and\n$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses\nthat define the finite sum. Note that $s_n$ is the sum of the $n$ terms\n$a_0, \\dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last\none.\n\n**Convergence, the sum, divergence.** The **series** of $(a_k)$, written\n$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges\n([[def-real-limit]]), and then the **sum of the series** is\n\n$$\\sum_{k=0}^{\\infty} a_k \\;:=\\; \\lim_{n} s_n .$$\n\nThe series **diverges** when $(s_n)$ does not converge. A convergent sequence of\nreals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names\na single real number and nothing further has to be checked for it to be\nwell defined.\n\n**Series with a general starting index.** Let $m \\in \\mathbb{N}$ and let $a$ be a\nfunction on $\\{\\, k \\in \\mathbb{N} : k \\ge m \\,\\}$, which we call a **family from\n$m$** and write $(a_k)_{k \\ge m}$. The series\n\n$$\\sum_{k \\ge m} a_k$$\n\nis by definition the series of the sequence $b_j := a_{j + m}$,\n$j \\in \\mathbb{N}$, which is a genuine sequence of reals; it converges exactly\nwhen that series converges, and its sum is then written\n$\\sum_{k = m}^{\\infty} a_k$. Its partial sums are\n\n$$\\sum_{k=m}^{n-1} a_k \\;=\\; \\sum_{j < n-m} a_{m+j} \\qquad (n \\ge m),$$\n\nin the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum\n$0$. A sequence on $\\mathbb{N}$ is the case $m = 0$, and the two readings of\n$\\sum a_k$ agree there, since $b_j = a_j$.\n\n**This clause is not a convenience.** Sequences in this library are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the\nclassical series are built from expressions that are undefined at the index $0$:\n$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \\ge 1$. Writing such a series as\n$\\sum_{k \\ge 1} a_k$ names an honest object, whereas writing it as a sequence on\n$\\mathbb{N}$ would require a value at an index where the defining expression has\nnone. Every statement on this page says which starting index it uses.\n\n**Tail series.** For $N \\in \\mathbb{N}$, the **$N$-th tail series** of\n$\\sum a_k$ is $\\sum_{k \\ge N} a_k$, that is the series of the $N$-th tail\n$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The\n$0$-th tail series is the series itself.",
      "uses": [
        "3.3",
        "4.4",
        "5.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "3.3",
        "4.4",
        "5.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "3.3",
        "4.4",
        "5.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.5",
        "1.6",
        "1.7",
        "2.2",
        "4.3",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.5",
        "1.6",
        "1.7",
        "2.2",
        "4.3",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.5",
        "1.6",
        "1.7",
        "2.2",
        "4.3",
        "6.1",
        "7.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Assume $h > 1$.",
      "step": "1.1",
      "inputs": [
        "assume-case gt"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Assume instead $h < 1$.",
      "step": "1.2",
      "inputs": [
        "assume-case lt"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Assume instead $h = 1$.",
      "step": "1.3",
      "inputs": [
        "assume-case eq"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "For every $k \\ge 1$, $R_k = (k+1)\\left(\\dfrac{h}{k} + r_k\\right) = h\\left(1 + \\dfrac{1}{k}\\right) + (k+1) r_k$.",
      "step": "1.4",
      "inputs": [
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-1-5",
      "claim": "The sequence $j \\mapsto 1/(j+1)$ converges to $0$: given a rational $\\eta > 0$, choose a natural $n \\ge 1$ with $1/n < \\eta$; then $1/(j+1) \\le 1/n < \\eta$ for every $j$ with $j+1 \\ge n$.",
      "step": "1.5",
      "inputs": [
        "L3",
        "L8",
        "choose"
      ]
    },
    {
      "id": "step-1-6",
      "claim": "The sequence $j \\mapsto (j+1)^{-\\varepsilon}$ converges to $0$: given a real $\\eta > 0$, put $M := \\max\\{1/\\eta,\\, 1\\} > 0$ and choose a natural $n$ with $\\iota(n) > M^{1/\\varepsilon}$; then for $j + 1 \\ge n$ we get $(j+1)^{\\varepsilon} > \\big(M^{1/\\varepsilon}\\big)^{\\varepsilon} = M \\ge 1/\\eta$, hence $0 < (j+1)^{-\\varepsilon} < \\eta$.",
      "step": "1.6",
      "inputs": [
        "L3",
        "L4",
        "L8",
        "choose"
      ]
    },
    {
      "id": "step-1-7",
      "claim": "For every $j \\in \\mathbb{N}$, $|(j+2)\\,r_{j+1}| \\le C (j+2)(j+1)^{-1-\\varepsilon} \\le 2C (j+1)\\,(j+1)^{-1-\\varepsilon} = 2C\\,(j+1)^{-\\varepsilon}$, using $j + 2 \\le 2(j+1)$.",
      "step": "1.7",
      "inputs": [
        "L4",
        "L8",
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Hence $-2C(j+1)^{-\\varepsilon} \\le (j+2) r_{j+1} \\le 2C(j+1)^{-\\varepsilon}$ with both bounds converging to $0$, so $(j+2) r_{j+1} \\to 0$ by the squeeze theorem.",
      "step": "2.1",
      "inputs": [
        "1.7",
        "1.6",
        "L5"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "In the case $h = 1$, put $u_k := \\dfrac{k}{k+1}\\,r_k$ and $t_k := k\\,a_k$ for $k \\ge 1$; then $t_k > 0$, $|u_k| \\le |r_k| \\le C k^{-1-\\varepsilon}$ since $0 < k/(k+1) < 1$, and $\\dfrac{a_k}{a_{k+1}} = \\dfrac{k+1}{k} + r_k = \\dfrac{k+1}{k}\\big(1 + u_k\\big)$.",
      "step": "2.2",
      "inputs": [
        "1.3",
        "L8",
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Therefore $R_{j+1} = h\\big(1 + 1/(j+1)\\big) + (j+2) r_{j+1} \\to h(1+0) + 0 = h$, and since convergence depends only on the tail, the sequence $(R_k)_{k \\in \\mathbb{N}}$ converges to $h$.",
      "step": "3.1",
      "inputs": [
        "1.4",
        "1.5",
        "2.1",
        "L5"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Consequently $\\dfrac{t_k}{t_{k+1}} = \\dfrac{k}{k+1}\\cdot\\dfrac{a_k}{a_{k+1}} = 1 + u_k$ for $k \\ge 1$, so $1 + u_k = t_k/t_{k+1} > 0$ and $\\dfrac{t_{k+1}}{t_k} = \\dfrac{1}{1+u_k}$.",
      "step": "3.2",
      "inputs": [
        "2.2",
        "algebra"
      ]
    },
    {
      "id": "step-3-3",
      "claim": "In the case $h = 1$: $\\sum_{k \\ge 1} k^{-1-\\varepsilon}$ converges, since $1 + \\varepsilon$ is a rational exceeding $1$; hence so does $\\sum_{k \\ge 1} C k^{-1-\\varepsilon}$, and by comparison with it so does $\\sum_{k \\ge 1} |u_k|$, whose terms are nonnegative.",
      "step": "3.3",
      "inputs": [
        "2.2",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "In the case $h > 1$: applying the limit estimate with the real tolerance $(h-1)/2 > 0$ gives an $N$ with $R_k > h - (h-1)/2 = (h+1)/2$ for all $k \\ge N$; so $(h+1)/2$ is a lower bound of $\\{R_k : k \\ge N\\}$, whence $\\liminf_k R_k \\ge (h+1)/2 > 1$ and $\\sum a_k$ converges.",
      "step": "4.1",
      "inputs": [
        "1.1",
        "3.1",
        "L2",
        "L5",
        "L1"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "In the case $h < 1$: the tolerance $(1-h)/2 > 0$ gives an $N$ with $R_k < h + (1-h)/2 = (h+1)/2$ for all $k \\ge N$; so $(h+1)/2$ is an upper bound of $\\{R_k : k \\ge N\\}$, whence $\\limsup_k R_k \\le (h+1)/2 < 1$ and $\\sum a_k$ diverges.",
      "step": "4.2",
      "inputs": [
        "1.2",
        "3.1",
        "L2",
        "L5",
        "L1"
      ]
    },
    {
      "id": "step-4-3",
      "claim": "For $k \\ge 1$: $(1-u_k)(1+u_k) = 1 - u_k^{2} \\le 1$ and $1 + u_k > 0$, so $\\dfrac{1}{1+u_k} \\ge 1 - u_k \\ge 1 - |u_k|$.",
      "step": "4.3",
      "inputs": [
        "3.2",
        "L8",
        "algebra"
      ]
    },
    {
      "id": "step-4-4",
      "claim": "Writing $U$ for the sum of $\\sum_{k \\ge 1} |u_k|$ and $P_n = \\sum_{k=1}^{n} |u_k|$ for its partial sums, $P_n \\to U$, so there is a natural $N_0$ with $U - P_{N_0} \\le 1/2$; put $N := N_0 + 1$.",
      "step": "4.4",
      "inputs": [
        "3.3",
        "L5",
        "L7",
        "choose"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "For every $n \\ge N$ the block $\\sum_{k=N}^{n} |u_k|$ is a partial sum of the $N_0$-th tail series of $\\sum_{k \\ge 1}|u_k|$, whose terms are nonnegative and whose sum is $U - P_{N_0}$; hence $\\sum_{k=N}^{n} |u_k| \\le 1/2$, and in particular $|u_k| \\le 1/2$ for every $k \\ge N$.",
      "step": "5.1",
      "inputs": [
        "4.4",
        "L7"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "In the case $h = 1$: for every $n \\ge N-1$, $\\dfrac{t_{n+1}}{t_N} \\ge 1 - \\sum_{k=N}^{n} |u_k|$, by induction on $n$. At $n = N-1$ both sides equal $1$, the sum being empty. Assume it at $n$; then, since $t_{n+1}/t_N > 0$ and $1/(1+u_{n+1}) \\ge 1 - |u_{n+1}| \\ge 1/2 > 0$, and since the induction hypothesis gives $t_{n+1}/t_N \\ge 1 - \\sum_{k=N}^{n}|u_k| \\ge 1/2 > 0$, we get $\\dfrac{t_{n+2}}{t_N} = \\dfrac{1}{1+u_{n+1}}\\cdot\\dfrac{t_{n+1}}{t_N} \\ge \\big(1-|u_{n+1}|\\big)\\Big(1 - \\sum_{k=N}^{n}|u_k|\\Big) \\ge 1 - \\sum_{k=N}^{n+1}|u_k|$, the last step expanding the product and discarding a nonnegative term.",
      "step": "6.1",
      "inputs": [
        "3.2",
        "4.3",
        "5.1",
        "L8"
      ]
    },
    {
      "id": "step-7-1",
      "claim": "Hence $t_{n+1}/t_N \\ge 1 - 1/2 = 1/2$ for every $n \\ge N-1$, that is $m\\,a_m = t_m \\ge t_N/2 > 0$ for every $m \\ge N$, and so $a_m \\ge \\dfrac{t_N}{2}\\cdot\\dfrac{1}{m}$ for every $m \\ge N$.",
      "step": "7.1",
      "inputs": [
        "6.1",
        "5.1",
        "L8",
        "algebra"
      ]
    },
    {
      "id": "step-8-1",
      "claim": "The series $\\sum_{m \\ge 1} 1/m$ diverges, so $\\sum_{m \\ge 1} \\frac{t_N}{2}\\cdot\\frac{1}{m}$ diverges, the factor $t_N/2$ being nonzero.",
      "step": "8.1",
      "inputs": [
        "7.1",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-9-1",
      "claim": "If $\\sum a_k$ converged, then so would $\\sum_{m \\ge 1} a_m$, and comparison with the estimate of step 7.1 would make $\\sum_{m \\ge 1} \\frac{t_N}{2m}$ converge, contradicting step 8.1; so in the case $h = 1$ the series $\\sum a_k$ diverges.",
      "step": "9.1",
      "inputs": [
        "7.1",
        "8.1",
        "L7"
      ]
    },
    {
      "id": "step-10-1",
      "claim": "The three cases $h > 1$, $h < 1$ and $h = 1$ exhaust the reals, and they give convergence, divergence and divergence respectively; so $\\sum a_k$ converges exactly when $h > 1$.",
      "step": "10.1",
      "inputs": [
        "4.1",
        "4.2",
        "9.1",
        "cases-exhaustive"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement concerns a fixed infinite sequence or positive-index family and quantifies over no possibly empty carrier or family."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement permits C = 0 but requires a_k > 0 and epsilon > 0; steps 1.7-3.3 remain valid when the error is identically zero."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "steps 1.3, 2.2-3.3, and 9.1 give the separate h = 1 divergence argument."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement and steps 1.1-1.3 include the exact model r_k = 0 (and C = 0) in all three h cases; no product estimate divides by r_k."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement starts the expansion at k = 1; steps 1.1-1.3 and 10.1 exhaust h > 1, h = 1, and h < 1."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "steps 1.5, 1.6, 4.4: every selected index or tolerance is supplied by the cited limit, order-bound, Archimedean, or divergence clause; no selection from an unproved nonempty family is hidden."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "steps 4.2, 9.1, and 10.1 show that convergence excludes h <= 1 and therefore forces h > 1."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "step 4.1 proves h > 1 gives convergence, and step 10.1 records that direction."
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
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cor-raabe-test",
    "declared_target": "cor-raabe-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-squeeze",
    "declared_target": "thm-squeeze",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-series-linearity",
    "declared_target": "lem-series-linearity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-limit-of-tail",
    "declared_target": "lem-limit-of-tail",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
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
    "source": "thm-gauss-test",
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
  },
  {
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-gauss-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
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

## Full text of every cited or declared item (26)

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
````

### `cor-raabe-test`

````markdown
---
id: cor-raabe-test
kind: corollary
title: "Raabe is Kummer with $\\zeta_k = k+1$: for positive terms, $\\liminf\\, (k+1)(a_k/a_{k+1} - 1) > 1$ gives convergence and $\\limsup < 1$ gives divergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-kummer-test, thm-p-series-rational, def-limsup-liminf, lem-limsup-exists, def-series, def-extended-reals, lem-extended-reals-complete, lem-of-naturals-positive, def-rational-power, thm-nth-roots-exist, def-integer-power]
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
    - title: "Raabe's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Raabe%27s_test"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
    - title: "Binghamton University notes on Kummer, Raabe, and Gauss tests"
      url: "https://people.math.binghamton.edu/dikran/478/Ch5.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$.
Write $k+1$ for the canonical natural $\iota(k+1) \in \mathbb{R}$, which is
positive ([[lem-of-naturals-positive]]), take the weights
$\zeta_k := k+1$ in [[thm-kummer-test]], and put

$$R_k \;:=\; (k+1)\left(\frac{a_k}{a_{k+1}} - 1\right) \qquad (k \in \mathbb{N}),$$

so that Kummer's expression for these weights is $K_k = R_k - 1$. Then:

1. if $\liminf_{k} R_k > 1$ then $\sum a_k$ converges;
2. if $\limsup_{k} R_k < 1$ then $\sum a_k$ diverges.

The weights are $k+1$ rather than $k$ because $\zeta_0$ has to be positive and
$\mathbb{N}$ contains $0$; the classical statement, indexed from $1$, is the same
criterion read along the shift $k = j+1$.

**Nothing is claimed when $\liminf_k R_k \le 1 \le \limsup_k R_k$.** The Gauss
test proved next is exactly the tool for the borderline case $R_k \to 1$, where
Raabe's test is silent.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; the weights $\zeta_k = \iota(k+1)$; and $R_k = (k+1)(a_k/a_{k+1} - 1)$ ([[def-limsup-liminf]], [[lem-of-naturals-positive]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there, and $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ for the tail bounds $s_n, i_n$, both existing for every sequence ([[lem-extended-reals-complete]], [[def-extended-reals]], [[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] Kummer's test in both halves, for positive terms and positive weights ([[thm-kummer-test]]).

[L3] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$; at $p = 1$ it therefore diverges ([[thm-p-series-rational]]). Moreover $k^{1} = \iota(k)$, the rational power at exponent $1$ being the element itself ([[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]]).

[L4] The canonical naturals $\iota(k+1)$ are positive, and $\iota(k+2) = \iota(k+1) + 1$ ([[lem-of-naturals-positive]]).

[L5] The series $\sum_{k \ge 1} x_k$ from the starting index $1$ is by definition the series of the sequence $j \mapsto x_{j+1}$ ([[def-series]]).

## Proof

**Proof technique:** direct.

1.1 The weights $\zeta_k = \iota(k+1)$ are positive for every $k \in \mathbb{N}$, and the terms $a_k$ are positive, so Kummer's test applies with these data. [given, L4, L2]

1.2 Suppose $\liminf_k R_k > 1$. The real $1$ is not an upper bound of the set of tail infima of $(R_k)$, so there is $N$ with $i_N > 1$, and $i_N$ is real because $i_N \le R_N$. [given, L1, choose]

1.3 Suppose instead $\limsup_k R_k < 1$. The real $1$ is not a lower bound of the set of tail suprema of $(R_k)$, so there is $N$ with $s_N < 1$, and then $R_k \le s_N < 1$ for every $k \ge N$. [given, L1, choose]

2.1 Kummer's expression for these weights is $K_k = (k+1)\dfrac{a_k}{a_{k+1}} - (k+2) = (k+1)\left(\dfrac{a_k}{a_{k+1}} - 1\right) - 1 = R_k - 1$. [step 1.1, L4, algebra]

2.2 The weight series is $\sum_k 1/\zeta_k = \sum_k 1/\iota(k+1)$, which is precisely the series $\sum_{k \ge 1} 1/k$ from the starting index $1$, and that is the case $p = 1$ of the $p$-series, hence divergent. [step 1.1, L3, L5]

3.1 Put $c := i_N - 1 > 0$. For every $k \ge N$ we have $R_k \ge i_N$, hence $K_k = R_k - 1 \ge i_N - 1 = c$. [step 1.2, step 2.1, L1, algebra]

3.2 Hence $K_k = R_k - 1 < 0$, in particular $K_k \le 0$, for every $k \ge N$. [step 1.3, step 2.1, algebra]

4.1 So $c$ is a lower bound of $\{K_k : k \ge N\}$, whence $\liminf_k K_k \ge c > 0$, and Kummer's convergence criterion gives convergence of $\sum a_k$, which is claim 1. [step 3.1, step 1.1, L1, L2]

5.1 Together with the divergence of the weight series, Kummer's divergence criterion gives divergence of $\sum a_k$, which is claim 2. [step 3.2, step 2.2, step 1.1, L2] ∎

## Remarks

- **Raabe's test is a genuine strengthening of the ratio test.** Whenever the ratios $a_{k+1}/a_k$ converge to $1$ the ratio test is silent, while $R_k$ may still be bounded away from $1$ on either side; the companion page carries a series with ratio limit exactly $1$ that Raabe decides. The reason is visible in the weights: the divergent comparison series behind the test has moved from $\sum 1$ to the harmonic series, which diverges far more slowly.

- **The threshold is $1$ and not $0$, and step 2.1 says why.** Kummer's criterion is a statement about $K_k = R_k - 1$; the shift by $1$ between the two expressions is the whole difference between the two thresholds, and it comes from $\zeta_{k+1} - \zeta_k = 1$ for these weights.
````

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

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
verification:
  precheck: n/a
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
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

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
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
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-limit-of-tail`

````markdown
---
id: lem-limit-of-tail
kind: lemma
title: "Convergence depends only on the tail"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, def-real-limit, def-nat-order, def-nat-addition, lem-nat-order-add-compatible, lem-nat-add-associative, lem-nat-add-commutative, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "tails have the same limit"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), let $x \in \mathbb{R}$,
and for $K \in \mathbb{N}$ let $x^{(K)}$ denote the $K$-th tail, $x^{(K)}_j =
x_{j+K}$. The following are equivalent ([[def-real-limit]]):

1. $(x_k)$ converges to $x$;
2. every tail $x^{(K)}$ converges to $x$;
3. some tail $x^{(K)}$ converges to $x$.

The same three statements with "converges to $x$" replaced by "is Cauchy" are
likewise equivalent. Consequently, if two sequences agree from some index on,
then either both converge to $x$ or neither does, and either both are Cauchy or
neither is.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, a real $x$, and for each $K \in \mathbb{N}$ the $K$-th tail $x^{(K)}$ defined by $x^{(K)}_j := x_{j+K}$ ([[def-sequence]]).

[L1] Convergence and the Cauchy condition: $(z_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $N$ with $|z_k - z| < \varepsilon$ for all $k \ge N$, and $(z_k)$ is Cauchy when for every rational $\varepsilon > 0$ there is $N$ with $|z_k - z_l| < \varepsilon$ for all $k, l \ge N$ ([[def-real-limit]]).

[L2] Index arithmetic, first half: $j \ge N$ implies $j + K \ge N + K$, and $N + K \ge N$ ([[def-nat-order]], [[lem-nat-order-add-compatible]]).

[L3] Index arithmetic, second half: every $k \ge N + K$ has the form $k = j + K$ with $j \ge N$. Indeed $N + K \le k$ gives $i$ with $(N+K) + i = k$; put $j := N + i$, so that $j \ge N$ and $j + K = (N+i) + K = N + (i + K) = N + (K + i) = (N+K) + i = k$ ([[def-nat-order]], [[lem-nat-add-associative]], [[lem-nat-add-commutative]]).

[L4] The order on $\mathbb{N}$ is reflexive and transitive, so $k \ge N + K \ge N$ gives $k \ge N$; and $j + 0 = j$ for every $j$ ([[thm-nat-linear-order]], [[def-nat-order]], [[def-nat-addition]]).

## Proof

**Proof technique:** direct.

1.1 (1) implies (2). Assume $(x_k)$ converges to $x$, let $K \in \mathbb{N}$ be arbitrary and let $\varepsilon > 0$ be rational; take $N$ with $|x_k - x| < \varepsilon$ for all $k \ge N$. For every $j \ge N$ we have $j + K \ge N + K \ge N$, hence $|x^{(K)}_j - x| = |x_{j+K} - x| < \varepsilon$; so $x^{(K)}$ converges to $x$. [assume-hyp, L1, L2, L4]

1.2 (2) implies (3), in both families. The $0$-th tail satisfies $x^{(0)}_j = x_{j+0} = x_j$, so $(x_k)$ is itself one of its own tails; statement (2) quantifies over all tails, so applying it to this one already yields (3). [given, L4]

1.3 (3) implies (1). Assume $x^{(K)}$ converges to $x$ for some fixed $K$, and let $\varepsilon > 0$ be rational; take $N$ with $|x^{(K)}_j - x| < \varepsilon$ for all $j \ge N$. Every $k \ge N + K$ is of the form $j + K$ with $j \ge N$, so $|x_k - x| = |x^{(K)}_j - x| < \varepsilon$; taking $N + K$ as the threshold shows $(x_k)$ converges to $x$. [assume-hyp, L1, L3]

1.4 The Cauchy version of (1) implies (2). Assume $(x_k)$ is Cauchy, fix $K$ and a rational $\varepsilon > 0$, and take $N$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge N$. For $i, j \ge N$ both $i + K \ge N$ and $j + K \ge N$, so $|x^{(K)}_i - x^{(K)}_j| = |x_{i+K} - x_{j+K}| < \varepsilon$; so $x^{(K)}$ is Cauchy. [assume-hyp, L1, L2, L4]

1.5 The Cauchy version of (3) implies (1). Assume $x^{(K)}$ is Cauchy and let $\varepsilon > 0$ be rational; take $N$ with $|x^{(K)}_i - x^{(K)}_j| < \varepsilon$ for all $i, j \ge N$. Any $k, l \ge N + K$ are of the form $i + K$ and $j + K$ with $i, j \ge N$, so $|x_k - x_l| < \varepsilon$; so $(x_k)$ is Cauchy. [assume-hyp, L1, L3]

2.1 In each of the two families the cycle (1) implies (2) implies (3) implies (1) is closed, so within each family the three statements are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]

3.1 If $(x_k)$ and $(y_k)$ agree from index $K$ on, then $x^{(K)} = y^{(K)}$ as functions, so by the established equivalence $(x_k)$ converges to $x$ exactly when $y^{(K)}$ does, exactly when $(y_k)$ does, and the same chain applies to the Cauchy condition. [step 2.1, given] ∎

## Remarks

- This is the lemma that makes the word "eventually" usable. Once it is known that finitely many initial terms are irrelevant, a hypothesis of the form "$P(k)$ for all $k$" can everywhere be weakened to "$P(k)$ eventually" ([[def-sequence]]) at the cost of passing to a tail.

- It also settles the bookkeeping question of where the indexing starts. A text that writes $(x_k)_{k \ge 1}$ is describing the first tail of a sequence in the sense used here, and the two have the same limits and the same Cauchy status.

- Boundedness, by contrast, is *not* a tail property in the same trivial way: a tail of a bounded sequence is bounded, and a sequence with a bounded tail is bounded only because the finitely many omitted terms can be absorbed into the bound, which is exactly the argument of [[lem-convergent-implies-bounded]].
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

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
aliases: []
landmark: false
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
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
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

### `lem-series-linearity`

````markdown
---
id: lem-series-linearity
kind: lemma
title: "Convergent series add and scale termwise"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, thm-algebra-of-limits, lem-finite-sum-laws, def-finite-sum]
justified_by: []
aliases: []
landmark: false
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
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge
([[def-series]]), and let $c \in \mathbb{R}$. Then:

1. $\sum (a_k + b_k)$ converges, with
   $\displaystyle\sum_{k=0}^{\infty}(a_k + b_k) = \sum_{k=0}^{\infty} a_k + \sum_{k=0}^{\infty} b_k$;
2. $\sum c\,a_k$ converges, with
   $\displaystyle\sum_{k=0}^{\infty} c\,a_k = c \sum_{k=0}^{\infty} a_k$.

Moreover, for $c \ne 0$ and an arbitrary sequence $(a_k)$, whose series is not
assumed to converge:

3. $\sum c\,a_k$ converges **if and only if** $\sum a_k$ converges. Equivalently,
   $\sum a_k$ diverges if and only if $\sum c\,a_k$ diverges.

Claim 3 is the form used whenever a comparison is made against a constant
multiple of a known series.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $c \in \mathbb{R}$, with partial sums $s_n = \sum_{k<n} a_k$ and $t_n = \sum_{k<n} b_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Additivity and scaling of finite sums: $\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$ and $\sum_{k<n} c\,a_k = c \sum_{k<n} a_k$ ([[lem-finite-sum-laws]]).

[L2] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n + y_n \to x + y$ and $c\,x_n \to c\,x$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 The partial sums of $\sum (a_k + b_k)$ are $\sum_{k<n}(a_k + b_k) = s_n + t_n$, and those of $\sum c\,a_k$ are $\sum_{k<n} c\,a_k = c\,s_n$. [given, L1]

1.2 Assume $\sum a_k$ and $\sum b_k$ converge, say $s_n \to S$ and $t_n \to T$. [given]

2.1 Then $s_n + t_n \to S + T$, so $\sum(a_k + b_k)$ converges with sum $S + T$, which is claim 1. [step 1.2, step 1.1, L2]

2.2 Likewise $c\,s_n \to c\,S$, so $\sum c\,a_k$ converges with sum $c\,S$, which is claim 2. [step 1.2, step 1.1, L2]

3.1 For claim 3, let $c \ne 0$ and let $(a_k)$ be arbitrary. If $\sum a_k$ converges then $\sum c\,a_k$ converges by claim 2. [step 2.2]

3.2 Conversely, if $\sum c\,a_k$ converges then applying claim 2 to the sequence $(c\,a_k)$ and the scalar $1/c$, which exists since $c \ne 0$, shows that $\sum (1/c)(c\,a_k) = \sum a_k$ converges. [step 2.2, algebra]

4.1 The two implications are claim 3, and its contrapositive form is the statement about divergence. [step 3.1, step 3.2] ∎

## Remarks

- **There is no product rule here, and there is no rule for $\sum a_k b_k$.** The proof works because a finite sum is additive and homogeneous, and neither property has an analogue for products. Multiplying series is a genuinely harder question, requiring absolute convergence, and it is not treated on this page.

- **Claim 3 needs $c \ne 0$ and nothing else.** In particular it does not need either series to converge, which is what makes it usable in the divergence direction: scaling a divergent series by a nonzero constant leaves it divergent.
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

### `thm-nonnegative-series-bounded-partial-sums`

````markdown
---
id: thm-nonnegative-series-bounded-partial-sums
kind: theorem
title: "A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-monotone-sequence, thm-monotone-convergence, cor-monotone-converges-iff-bounded, lem-monotone-unbounded-diverges, def-bounded-set, def-finite-sum, lem-finite-sum-laws, def-sequence, def-divergence-to-infinity, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-comparison-needs-nonnegativity]
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ge 0$ for every $k$, its partial sums $s_n = \sum_{k<n} a_k$, and the range $S = \{s_n : n \in \mathbb{N}\}$ ([[def-series]], [[def-finite-sum]], [[def-sequence]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ ([[def-finite-sum]]).

[L2] Consecutive comparisons suffice for monotonicity: $(x_k)$ is nondecreasing if and only if $x_k \le x_{k+1}$ for every $k$; and a nondecreasing sequence is bounded below by its first term ([[def-monotone-sequence]]).

[L3] Monotonicity of finite sums: if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$ ([[lem-finite-sum-laws]]).

[L4] A monotone sequence converges if and only if it is bounded, that is if and only if there is $M$ with $|x_k| \le M$ for every $k$ ([[cor-monotone-converges-iff-bounded]], [[def-sequence]]).

[L5] A nondecreasing sequence bounded above converges to the supremum of its range, which exists by the least-upper-bound property ([[thm-monotone-convergence]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L6] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, $s_{n+1} - s_n = a_n \ge 0$, so $s_n \le s_{n+1}$ and $(s_n)$ is nondecreasing. [given, L1, L2]

1.2 For every $n$, $s_n = \sum_{k<n} a_k \ge 0$, all terms being nonnegative. [given, L3]

2.1 Claim 1 is steps 1.1 and 1.2 together. [step 1.1, step 1.2]

2.2 Since $s_n \ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above. [step 1.2, L4]

3.1 By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above. [step 1.1, step 2.2, L4]

4.1 If $S$ is bounded above then $(s_n)$ converges to $\sup S$, so $\sum a_k$ converges with sum $\sup S$; and since $\sup S$ is an upper bound of $S$, $s_n \le \sup S$ for every $n$. [step 1.1, step 3.1, L5]

4.2 If $S$ is not bounded above then $s_n \to +\infty$, and by step 3.1 the series diverges. [step 1.1, step 3.1, L6]

5.1 The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **"Bounded" and "bounded above" coincide here, and only here.** The equivalence used in step 2.2 rests on $s_n \ge 0$, which rests on every term being nonnegative. For a series with terms of both signs the partial sums can be bounded above and still fail to converge, so nothing in this theorem survives the loss of the sign hypothesis. That failure is exhibited by [[cex-comparison-needs-nonnegativity]] on the companion page.

- **Claim 3 is a strictly stronger statement than "diverges".** Divergence alone permits oscillation ([[def-series]]); for nonnegative terms it cannot occur, and the partial sums necessarily run to $+\infty$. This is what licenses the phrase "the series diverges to $+\infty$" for nonnegative terms, and it is what the Abel-Dini theorem later on this page uses.

- **This criterion is the monotone convergence property, worn differently.** The proof above is monotone convergence for $\mathbb{R}$ applied to the nondecreasing sequence of partial sums, and nothing is lost going back the other way. Given a nondecreasing sequence $(x_n)$ of reals, put $y_n := x_n - x_0 \ge 0$ and let $a_0 := 0$, $a_{k+1} := y_{k+1} - y_k \ge 0$; then $s_{n+1} = y_n$ ([[def-series]]), the partial sums are bounded exactly when $(x_n)$ is bounded above, and claim 1 returns the convergence of $(y_n)$ and so of $(x_n)$. Testing boundedness of partial sums is therefore not a device special to series. Read in the vocabulary of [[def-completeness-properties]] it is the property (MCT), which in an arbitrary ordered field already forces the Archimedean property on its own ([[lem-mct-implies-archimedean]]) and with it the least-upper-bound property ([[lem-mct-implies-lub]]). The translation just given is carried out in $\mathbb{R}$, since [[def-series]] is stated for sequences of reals and this library defines no series over a general ordered field.
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

### `thm-squeeze`

````markdown
---
id: thm-squeeze
kind: theorem
title: "The squeeze theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-real-limit, def-sequence, lem-of-add-order, lem-of-abs-value, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [sandwich-theorem]
landmark: true
short: "squeeze"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(a_k)$, $(x_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) with

$$a_k \le x_k \le b_k \quad \text{eventually},$$

and suppose $(a_k)$ and $(b_k)$ both converge to the same real $L$
([[def-real-limit]]). Then $(x_k)$ converges to $L$.

The middle sequence is not assumed to converge; that is the point of the
theorem, and it is why the squeeze is a tool for *establishing* convergence
rather than for computing a limit already known to exist.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(x_k)$, $(b_k)$ of reals, an index $K_0 \in \mathbb{N}$ with $a_k \le x_k \le b_k$ for every $k \ge K_0$, and a real $L$ such that $(a_k)$ converges to $L$ and $(b_k)$ converges to $L$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value: for $c > 0$, $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]]).

[L3] Order arithmetic in $\mathbb{R}$: adding a constant preserves $<$ and $\le$; $u < v \le w$ and $u \le v < w$ both give $u < w$; and $\le$ is transitive ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L4] The order on $\mathbb{N}$ is total and transitive, so three indices $K_0, K_1, K_2$ admit an index $K$ with $K \ge K_0$, $K \ge K_1$ and $K \ge K_2$, and then $k \ge K$ gives $k \ge K_0$, $k \ge K_1$, $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational. By convergence of $(a_k)$ there is $K_1$ with $|a_k - L| < \varepsilon$ for all $k \ge K_1$, and by convergence of $(b_k)$ there is $K_2$ with $|b_k - L| < \varepsilon$ for all $k \ge K_2$. [L1]

2.1 By [L2], $|a_k - L| < \varepsilon$ gives $-\varepsilon < a_k - L$, that is $L - \varepsilon < a_k$, for all $k \ge K_1$; and $|b_k - L| < \varepsilon$ gives $b_k - L < \varepsilon$, that is $b_k < L + \varepsilon$, for all $k \ge K_2$. [step 1.1, L2, L3]

3.1 Choose $K$ with $K \ge K_0$, $K \ge K_1$ and $K \ge K_2$. For every $k \ge K$ the hypothesis gives $a_k \le x_k \le b_k$, so $L - \varepsilon < a_k \le x_k \le b_k < L + \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, hence $-\varepsilon < x_k - L < \varepsilon$, hence $|x_k - L| < \varepsilon$. [step 2.1, given, L2, L3, L4, choose]

4.1 The rational $\varepsilon > 0$ was arbitrary, so for every rational $\varepsilon > 0$ there is an index $K$ beyond which $|x_k - L| < \varepsilon$; that is, $(x_k)$ converges to $L$. [step 3.1, L1] ∎

## Remarks

- The proof is direct from the definition and does not route through [[lem-limit-preserves-order]]. It could not: that lemma assumes the middle sequence converges, which is what is being proved here.

- Both bounding sequences must have the **same** limit. With $a_k = -1$, $b_k = 1$ and any $(x_k)$ taking values in $[-1, 1]$ the hypothesis $a_k \le x_k \le b_k$ holds and nothing whatever follows, since a bounded sequence need not converge ([[fs-bounded-implies-convergent]]).

- The most common use is with $a_k = -c_k$ and $b_k = c_k$ for a null sequence $(c_k)$: if $|x_k| \le c_k$ eventually and $c_k \to 0$, then $x_k \to 0$. That special case also follows from [[lem-null-times-bounded]] whenever $x_k$ is presented as a product of a null sequence and a bounded one, but the squeeze needs no such presentation.
````

