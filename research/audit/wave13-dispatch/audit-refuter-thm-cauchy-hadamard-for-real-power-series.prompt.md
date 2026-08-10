# Audit proof-refuter brief — Wave 13, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- critical risk (9): 6 declared dependencies; 5 cited facts; 6 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-cauchy-hadamard-for-real-power-series`

Normalized current SHA-256: `460d4eb711bb1fe0f92f1d209886404c09d99fde3acf182ff29295afe7cb3ed7`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-cauchy-hadamard-for-real-power-series
kind: theorem
title: "Cauchy–Hadamard: the reciprocal radius is $\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}$, with the zero and infinite cases included"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-power-series-and-radius-of-convergence, def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, thm-root-test, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cauchy-Hadamard theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cauchy-Hadamard_theorem"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}a_n(x-c)^n$ be a real power series with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]), and put

$$L:=\limsup_{k\to\infty}|a_{k+1}|^{1/(k+1)}\in[0,+\infty].$$

Then $R$ is the reciprocal of $L$ in the following explicit sense:

$$R=\begin{cases}+\infty,&L=0,\\[2pt]1/L,&0<L<+\infty,\\[2pt]0,&L=+\infty.\end{cases}$$

Equivalently, with the conventions $1/0:=+\infty$ and $1/(+\infty):=0$, one has $R=1/L$. The roots use $a_{k+1}$ and the exponent $1/(k+1)$ because $\mathbb N$ starts at $0$ and a zeroth root is undefined.

## Facts & Assumptions

**Given:** A real power series $\sum a_n(x-c)^n$, its radius $R$, the nonnegative root sequence $q_k:=|a_{k+1}|^{1/(k+1)}$, and $L:=\limsup_k q_k$.

[L1] The limit superior $L$ exists in $\overline{\mathbb R}$ for every real sequence ([[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] If $L$ is real, then for every real $\varepsilon>0$, $q_k<L+\varepsilon$ eventually and $q_k>L-\varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L3] The root test says that a real series from index $1$ converges absolutely when the limit superior of its shifted roots is $<1$, and diverges when that limit superior is $>1$ ([[thm-root-test]]).

[L4] Absolute convergence means convergence of the series of absolute values ([[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\mathbb R$ and put $d:=|x-c|$. The shifted roots of the terms $a_n(x-c)^n$, $n\ge1$, are $|a_{k+1}(x-c)^{k+1}|^{1/(k+1)}=q_kd$. [given, algebra]

2.1 If $L=0$, then for $d=0$ every root in step 1.1 is $0$, while for $d>0$ and any $\eta>0$, [L2] applied with $\varepsilon=\eta/d$ makes $q_kd<\eta$ eventually. Thus $\limsup_k(q_kd)=0<1$ for every $x$. [step 1.1, L2]

2.2 Suppose $0<L<+\infty$. If $d<1/L$, choose a real $t$ with $L<t<1/d$ (with the second inequality omitted when $d=0$). By [L2], $q_k<t$ eventually, so $\limsup_k(q_kd)\le td<1$. If $d>1/L$, choose $t$ with $1/d<t<L$; [L2] gives $q_k>t$ frequently, so $\limsup_k(q_kd)\ge td>1$. [step 1.1, L2, choose]

2.3 If $L=+\infty$ and $d>0$, then for every real $M>0$ and every index $N$ there is $k\ge N$ with $q_k>M$: otherwise $M$ would bound a tail and its supremum, forcing the infimum of the tail suprema to be finite. Taking $M>1/d$ shows $q_kd>1$ arbitrarily late, hence $\limsup_k(q_kd)>1$. [L1, step 1.1, choose]

3.1 By [L3] and [L4], step 2.1 gives absolute convergence at every real $x$ when $L=0$; step 2.2 gives absolute convergence for $d<1/L$ and divergence for $d>1/L$ when $0<L<+\infty$; and step 2.3 gives divergence at every $x\ne c$ when $L=+\infty$, while the series converges at $c$ to $a_0$. [step 2.1, step 2.2, step 2.3, L3, L4]

4.1 Reading these three alternatives through the definition of the radius yields $R=+\infty$, $R=1/L$, and $R=0$, respectively, which is the stated convention-complete formula. [step 3.1] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-cauchy-hadamard-for-real-power-series",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Cauchy-Hadamard_theorem",
    "https://encyclopediaofmath.org/wiki/Power_series"
  ],
  "rationale": "The sources give the Cauchy–Hadamard reciprocal formula with the zero, finite-positive, and infinite limit-superior cases. The item shifts the root sequence to zero-based indexing and works only over the reals; its proof adapts the standard root-test argument.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-limsup-liminf",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \\in \\mathbb{N}$ let\n\n$$T_n \\;:=\\; \\{\\, x_k : k \\in \\mathbb{N},\\ k \\ge n \\,\\} \\subseteq \\mathbb{R}$$\n\nbe the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\\mathbb{R}$ since\n$x_n \\in T_n$. Regard $T_n$ as a subset of $\\overline{\\mathbb{R}}$\n([[def-extended-reals]]) and put\n\n$$s_n \\;:=\\; \\sup T_n \\in \\overline{\\mathbb{R}}, \\qquad i_n \\;:=\\; \\inf T_n \\in \\overline{\\mathbb{R}},$$\n\nthe supremum and infimum taken in $\\overline{\\mathbb{R}}$, which exist for every\n$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit\nsuperior** and **limit inferior** of $(x_k)$ are then\n\n$$\\limsup_{k} x_k \\;:=\\; \\inf \\{\\, s_n : n \\in \\mathbb{N} \\,\\}, \\qquad \\liminf_{k} x_k \\;:=\\; \\sup \\{\\, i_n : n \\in \\mathbb{N} \\,\\},$$\n\nagain taken in $\\overline{\\mathbb{R}}$ and again existing by\n[[lem-extended-reals-complete]], since $\\{s_n : n \\in \\mathbb{N}\\}$ and\n$\\{i_n : n \\in \\mathbb{N}\\}$ are subsets of $\\overline{\\mathbb{R}}$ on which no\nhypothesis is needed. Both are elements of $\\overline{\\mathbb{R}}$, and either may\nbe $+\\infty$ or $-\\infty$. The notations $\\limsup_{k \\to \\infty} x_k$,\n$\\varlimsup_k x_k$ and $\\overline{\\lim}_k x_k$ all denote the first of them\nelsewhere; this library writes $\\limsup_k x_k$.\n\n**Every quantity written here exists, and that is why the extended line was\nintroduced.** Each of the four operations above is an application of\n[[lem-extended-reals-complete]] to a subset of $\\overline{\\mathbb{R}}$ carrying no\nhypothesis whatever. Written with the real supremum of\n[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]\ninstead, the definition would be available only for sequences that are bounded\n([[def-bounded-set]]): $\\sup T_n$ needs $T_n$ bounded above, and\n$\\inf\\{s_n\\}$ needs $\\{s_n\\}$ nonempty, bounded below, and made of real numbers\n([[def-infimum]]). None of those is automatic, and the discipline recorded in\n[[rem-sup-conventions]] forbids papering over the gap with a convention. The\nextended supremum is a different operation in a different ordered set, and it is\ntotal.\n\n**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say\n$|x_k| \\le M$ for every $k$, then each $T_n$ is a nonempty subset of $\\mathbb{R}$\nbounded above by $M$ and below by $-M$, so by the agreement clause of\n[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum\nor infimum of $T_n$, and lies in $[-M, M]$. The family $\\{s_n\\}$ is then a\nnonempty set of reals bounded below by $-M$, so $\\limsup_k x_k$ is likewise the\nreal infimum of $\\{s_n\\}$ and lies in $[-M, M]$; dually for $\\liminf_k x_k$. So\nfor a bounded sequence both quantities are ordinary real numbers computed with\nthe ordinary real supremum and infimum, and the extended line is doing no work.\nIt is only for unbounded sequences that the values $\\pm\\infty$ occur.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-limsup-exists",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and\nextended tail bounds $s_n = \\sup T_n$, $i_n = \\inf T_n$ as in\n[[def-limsup-liminf]].\n\n1. **Monotonicity of the extended bounds under inclusion.** If\n   $A \\subseteq B \\subseteq \\overline{\\mathbb{R}}$ ([[def-extended-reals]]) then\n   $$\\sup A \\le \\sup B \\qquad \\text{and} \\qquad \\inf B \\le \\inf A,$$\n   the four quantities being the extended bounds of [[lem-extended-reals-complete]].\n   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.\n2. **The tail bounds are monotone.** $T_m \\subseteq T_n$ whenever $n \\le m$, and\n   hence\n   $$s_m \\le s_n \\qquad \\text{and} \\qquad i_n \\le i_m \\qquad (n \\le m).$$\n   In particular $s_{n+1} \\le s_n$ and $i_n \\le i_{n+1}$ for every $n$, and\n   $i_n \\le s_n$ for every $n$.\n3. **Existence.** $\\limsup_k x_k$ and $\\liminf_k x_k$ exist in\n   $\\overline{\\mathbb{R}}$ for **every** sequence of reals, bounded or not.\n\nClaim 1 is the tool the rest of this page uses whenever two extended suprema are\ncompared. It is proved here, from the definition of a least upper bound, rather\nthan quoted from the suprema page, for the reason given in the remarks below.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-limsup-epsilon-characterisation",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \\in \\mathbb{R}$,\nwith *eventually* and *frequently* as in [[def-sequence]] and $\\limsup$,\n$\\liminf$ as in [[def-limsup-liminf]].\n\n1. $L = \\limsup_{k} x_k$ **if and only if** for every real $\\varepsilon > 0$\n   $$x_k < L + \\varepsilon \\ \\text{ eventually} \\qquad \\text{and} \\qquad x_k > L - \\varepsilon \\ \\text{ frequently}.$$\n2. Dually, $L = \\liminf_{k} x_k$ **if and only if** for every real\n   $\\varepsilon > 0$\n   $$x_k > L - \\varepsilon \\ \\text{ eventually} \\qquad \\text{and} \\qquad x_k < L + \\varepsilon \\ \\text{ frequently}.$$\n\n**The hypothesis $L \\in \\mathbb{R}$ is not a restriction that can be lifted.**\nBoth conditions are stated with real $\\varepsilon$ and real $L \\pm \\varepsilon$,\nso neither has a reading at $L = \\pm\\infty$; the infinite cases are handled\ninstead by the convergence theorem later on this page. What the lemma does say\nis that whenever $\\limsup_k x_k$ happens to be a real number, it is pinned down by\nthe familiar two-sided test: nothing exceeds it by a fixed positive amount from\nsome index on, and something comes within any fixed positive amount of it\narbitrarily late.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-root-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)_{k \\ge 1}$ be a family of reals from the starting index $1$\n([[def-series]]), put\n\n$$\\rho_k \\;:=\\; |a_{k+1}|^{1/(k+1)} \\qquad (k \\in \\mathbb{N}), \\qquad \\rho \\;:=\\; \\limsup_{k} \\rho_k \\;\\in\\; \\overline{\\mathbb{R}} ,$$\n\nand note that $\\rho$ exists for every such family, with no hypothesis whatever\n([[lem-limsup-exists]], [[def-limsup-liminf]]). Then:\n\n1. if $\\rho < 1$ then $\\sum_{k \\ge 1} |a_k|$ converges, and hence\n   $\\sum_{k \\ge 1} a_k$ converges as well;\n2. if $\\rho > 1$ then $\\sum_{k \\ge 1} a_k$ diverges;\n3. if $\\rho = 1$ neither conclusion follows: $\\sum_{k \\ge 1} 1/k$ diverges,\n   $\\sum_{k \\ge 1} 1/k^{2}$ converges, and both have $\\rho = 1$.\n\n**The root family is shifted, and that is forced.** The classical expression\n$|a_n|^{1/n}$ is meaningful only for $n \\ge 1$, since $1/0$ is not a rational\nnumber ([[def-rational-power]]), while sequences here are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$. So the roots are written\n$\\rho_k = |a_{k+1}|^{1/(k+1)}$, which is $|a_n|^{1/n}$ reindexed by $n = k+1$,\nexactly the convention of [[thm-ratio-root-inequality]]. Every $\\rho_k$ is\ndefined, including where $a_{k+1} = 0$, by the supplementary clause of\n[[def-rational-power]].\n\n**What claim 1 does and does not say.** The comparison with a geometric series\ndelivers convergence of the series of *absolute values*; that\n$\\sum_{k \\ge 1} a_k$ itself converges is a separate step, and it is supplied by\n[[lem-absolute-convergence-implies-convergence]] earlier on this page. Nothing\nhere identifies the sum, and nothing here says anything about rearranging the\nseries, which is taken up later in this track.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-absolute-and-conditional-convergence",
      "source_section": "Definition",
      "quote": "Let $(a_k)$ be a sequence of reals, with series $\\sum a_k$ and partial sums\n$s_n = \\sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value\n([[def-abs-value]]).\n\n**Absolute convergence.** The series $\\sum a_k$ **converges absolutely** when the\nseries $\\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \\ge 0$ for every $k$\n([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.\n\n**Conditional convergence.** The series $\\sum a_k$ **converges conditionally**\nwhen it converges ([[def-series]], [[def-real-limit]]) and does *not* converge\nabsolutely.\n\nSo a convergent series is exactly one of the two: absolutely convergent or\nconditionally convergent, according as $\\sum |a_k|$ converges or not.\n\n**One implication is already proved, and is not reproved anywhere on this page.**\n[[lem-absolute-convergence-implies-convergence]] states that if $\\sum |a_k|$\nconverges then $\\sum a_k$ converges. That lemma was coined and proved on the\nprevious page of this track, where the root and ratio tests need it; this page\nnames it and builds on it. In particular an absolutely convergent series is a\nconvergent series, so the two words above really do partition the convergent\nseries, and \"conditionally convergent\" is not vacuous by accident: the alternating\nharmonic series is a witness, and the witness is exhibited in\n[[fs-convergent-implies-absolutely-convergent]].\n\n**General starting index.** Let $m \\in \\mathbb{N}$ and let $(a_k)_{k \\ge m}$ be a\nfamily from $m$ ([[def-series]]). The series $\\sum_{k \\ge m} a_k$ **converges\nabsolutely** when $\\sum_{k \\ge m} |a_k|$ converges, and **converges\nconditionally** when it converges and does not converge absolutely. By\n[[def-series]] both statements are the corresponding statements for the shifted\nsequence $j \\mapsto a_{j+m}$, so nothing new is being defined and every result\nbelow transfers to a general starting index in the same way, exactly as\n[[lem-absolute-convergence-implies-convergence]] already records for the one\nimplication it proves.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Fix $x\\in\\mathbb R$ and put $d:=|x-c|$. The shifted roots of the terms $a_n(x-c)^n$, $n\\ge1$, are $|a_{k+1}(x-c)^{k+1}|^{1/(k+1)}=q_kd$.",
      "step": "1.1",
      "inputs": [
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "If $L=0$, then for $d=0$ every root in step 1.1 is $0$, while for $d>0$ and any $\\eta>0$, [L2] applied with $\\varepsilon=\\eta/d$ makes $q_kd<\\eta$ eventually. Thus $\\limsup_k(q_kd)=0<1$ for every $x$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L2"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Suppose $0<L<+\\infty$. If $d<1/L$, choose a real $t$ with $L<t<1/d$ (with the second inequality omitted when $d=0$). By [L2], $q_k<t$ eventually, so $\\limsup_k(q_kd)\\le td<1$. If $d>1/L$, choose $t$ with $1/d<t<L$; [L2] gives $q_k>t$ frequently, so $\\limsup_k(q_kd)\\ge td>1$.",
      "step": "2.2",
      "inputs": [
        "L2",
        "step 1.1"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "If $L=+\\infty$ and $d>0$, then for every real $M>0$ and every index $N$ there is $k\\ge N$ with $q_k>M$: otherwise $M$ would bound a tail and its supremum, forcing the infimum of the tail suprema to be finite. Taking $M>1/d$ shows $q_kd>1$ arbitrarily late, hence $\\limsup_k(q_kd)>1$.",
      "step": "2.3",
      "inputs": [
        "L1",
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By [L3] and [L4], step 2.1 gives absolute convergence at every real $x$ when $L=0$; step 2.2 gives absolute convergence for $d<1/L$ and divergence for $d>1/L$ when $0<L<+\\infty$; and step 2.3 gives divergence at every $x\\ne c$ when $L=+\\infty$, while the series converges at $c$ to $a_0$.",
      "step": "3.1",
      "inputs": [
        "L3",
        "L4",
        "step 2.1",
        "step 2.2",
        "step 2.3"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Reading these three alternatives through the definition of the radius yields $R=+\\infty$, $R=1/L$, and $R=0$, respectively, which is the stated convention-complete formula.",
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
      "reason": "thm-cauchy-hadamard-for-real-power-series: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $\\sum_{n\\ge0}a_n(x-c)^n$ be a real power series with radius $R$ (), and put $$L:=\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}\\in[0,+\\infty].$$ Then $R$ is the reciprocal of $L$ in the following explicit sense: $$R=\\begin{"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 2.1: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-cauchy-hadamard-for-real-power-series: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $\\sum_{n\\ge0}a_n(x-c)^n$ be a real power series with radius $R$ (), and put $$L:=\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}\\in[0,+\\infty].$$ Then $R$ is the reciprocal of $L$ in the following explicit sense: $$R=\\begin{"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 2.3: the proof explicitly handles or excludes the degenerate configuration relevant to the statement."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-cauchy-hadamard-for-real-power-series: no interval or radial endpoint is part of the conclusion; checked against the Statement: Let $\\sum_{n\\ge0}a_n(x-c)^n$ be a real power series with radius $R$ (), and put $$L:=\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}\\in[0,+\\infty].$$ Then $R$ is the reciprocal of $L$ in the following explicit sense: $$R=\\begin{"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.2: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-cauchy-hadamard-for-real-power-series: the Statement is not an equivalence, so there is no forward implication obligation: Let $\\sum_{n\\ge0}a_n(x-c)^n$ be a real power series with radius $R$ (), and put $$L:=\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}\\in[0,+\\infty].$$ Then $R$ is the reciprocal of $L$ in the following explicit sense: $$R=\\begin{"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-cauchy-hadamard-for-real-power-series: the Statement is not an equivalence, so there is no reverse implication obligation: Let $\\sum_{n\\ge0}a_n(x-c)^n$ be a real power series with radius $R$ (), and put $$L:=\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}\\in[0,+\\infty].$$ Then $R$ is the reciprocal of $L$ in the following explicit sense: $$R=\\begin{"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-cauchy-hadamard-for-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-real-power-series-and-radius-of-convergence",
    "declared_target": "def-real-power-series-and-radius-of-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-hadamard-for-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
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
    "source": "thm-cauchy-hadamard-for-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
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
    "source": "thm-cauchy-hadamard-for-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-limsup-epsilon-characterisation",
    "declared_target": "lem-limsup-epsilon-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-hadamard-for-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-root-test",
    "declared_target": "thm-root-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-hadamard-for-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-absolute-and-conditional-convergence",
    "declared_target": "def-absolute-and-conditional-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (6)

### `def-absolute-and-conditional-convergence`

````markdown
---
id: def-absolute-and-conditional-convergence
kind: definition
title: "Absolutely convergent and conditionally convergent series, and the general starting index"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, lem-absolute-convergence-implies-convergence, def-abs-value, lem-of-abs-value, def-real-limit]
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Conditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Conditional_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals, with series $\sum a_k$ and partial sums
$s_n = \sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value
([[def-abs-value]]).

**Absolute convergence.** The series $\sum a_k$ **converges absolutely** when the
series $\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \ge 0$ for every $k$
([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.

**Conditional convergence.** The series $\sum a_k$ **converges conditionally**
when it converges ([[def-series]], [[def-real-limit]]) and does *not* converge
absolutely.

So a convergent series is exactly one of the two: absolutely convergent or
conditionally convergent, according as $\sum |a_k|$ converges or not.

**One implication is already proved, and is not reproved anywhere on this page.**
[[lem-absolute-convergence-implies-convergence]] states that if $\sum |a_k|$
converges then $\sum a_k$ converges. That lemma was coined and proved on the
previous page of this track, where the root and ratio tests need it; this page
names it and builds on it. In particular an absolutely convergent series is a
convergent series, so the two words above really do partition the convergent
series, and "conditionally convergent" is not vacuous by accident: the alternating
harmonic series is a witness, and the witness is exhibited in
[[fs-convergent-implies-absolutely-convergent]].

**General starting index.** Let $m \in \mathbb{N}$ and let $(a_k)_{k \ge m}$ be a
family from $m$ ([[def-series]]). The series $\sum_{k \ge m} a_k$ **converges
absolutely** when $\sum_{k \ge m} |a_k|$ converges, and **converges
conditionally** when it converges and does not converge absolutely. By
[[def-series]] both statements are the corresponding statements for the shifted
sequence $j \mapsto a_{j+m}$, so nothing new is being defined and every result
below transfers to a general starting index in the same way, exactly as
[[lem-absolute-convergence-implies-convergence]] already records for the one
implication it proves.

## Remarks

- **Absolute convergence is a condition on the terms, not on the sum.** It says
  the series of absolute values converges, and it says nothing about the value of
  $\sum_{k=0}^{\infty} a_k$. The two sums are in general different, and no
  statement here identifies them.

- **Why the distinction earns a page.** Every result on this page separates the
  two classes. An absolutely convergent series may be reordered at will
  ([[thm-dirichlet-rearrangement]]) and multiplied by another
  ([[thm-mertens]]); a conditionally convergent one may be reordered to any sum
  whatever ([[thm-riemann-series-theorem]]). The difference is not one of degree.

- **A series of nonnegative terms converges absolutely if it converges at all**,
  since then $|a_k| = a_k$. So the distinction is invisible for the comparison,
  condensation, Raabe, Gauss and Kummer tests of the previous page, all of which
  assume terms of one sign. It is not invisible on that page as a whole: the root
  and ratio tests are stated for terms of arbitrary sign and reach convergence of
  $\sum a_k$ precisely through
  [[lem-absolute-convergence-implies-convergence]], which is where the word
  *absolutely convergent* is first used. What that page does not develop, and this
  one does, is everything that separates the two classes rather than the one
  implication those two tests need.
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

### `def-real-power-series-and-radius-of-convergence`

````markdown
---
id: def-real-power-series-and-radius-of-convergence
kind: definition
title: "A real power series about a centre, its interval of convergence, and its radius in $[0,+\\infty]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-absolute-and-conditional-convergence, def-integer-power, def-extended-reals, lem-extended-reals-complete, def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Definition

Let $(a_n)_{n\in\mathbb N}$ be a sequence of reals and let $c\in\mathbb R$. The **real power series about the centre $c$ with coefficients $(a_n)$** is the series

$$\sum_{n=0}^{\infty}a_n(x-c)^n$$

at a real argument $x$, where powers are those of [[def-integer-power]] and convergence is that of [[def-series]]. Its value, when the series converges, is called its **sum at $x$**. At $x=c$ the series always converges to $a_0$: the term with $n=0$ is $a_0$ because $0^0=1$, and every later term is $0$.

For $r\ge0$ let $P(r)$ mean that the series converges absolutely at every real $x$ with $|x-c|<r$. The set of such $r$ contains $0$, since the condition $|x-c|<0$ has no solutions. The **radius of convergence** is

$$R:=\sup_{\overline{\mathbb R}}\{r\in\mathbb R:r\ge0\text{ and }P(r)\}\in[0,+\infty],$$

where the supremum is taken in the extended real line of [[def-extended-reals]]. Thus $R$ may be a nonnegative real or $+\infty$, but never $-\infty$.

The **open interval determined by the radius** is

$$I_R:=\{x\in\mathbb R:|x-c|<R\}.$$

When $0<R<+\infty$ this is $(c-R,c+R)$, when $R=+\infty$ it is all of $\mathbb R$, and when $R=0$ it is empty. The centre still carries the convergent value $a_0$ in the last case. No endpoint is included in $I_R$; convergence at $c-R$ or $c+R$, when these are real, is a separate question.

## Remarks

The radius is extended-valued, but no undefined arithmetic in $\overline{\mathbb R}$ is used. Expressions such as $c\pm R$ are written only when $R$ is finite. The reciprocal conventions used in Cauchy-Hadamard are stated explicitly in [[thm-cauchy-hadamard-for-real-power-series]].
````

### `lem-limsup-epsilon-characterisation`

````markdown
---
id: lem-limsup-epsilon-characterisation
kind: lemma
title: "For finite $L$: $L = \\limsup x_k$ iff for every $\\varepsilon > 0$ one has $x_k < L + \\varepsilon$ eventually and $x_k > L - \\varepsilon$ frequently"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-limsup-reflection, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$\\varepsilon$ test for $\\limsup$"
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

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \in \mathbb{R}$,
with *eventually* and *frequently* as in [[def-sequence]] and $\limsup$,
$\liminf$ as in [[def-limsup-liminf]].

1. $L = \limsup_{k} x_k$ **if and only if** for every real $\varepsilon > 0$
   $$x_k < L + \varepsilon \ \text{ eventually} \qquad \text{and} \qquad x_k > L - \varepsilon \ \text{ frequently}.$$
2. Dually, $L = \liminf_{k} x_k$ **if and only if** for every real
   $\varepsilon > 0$
   $$x_k > L - \varepsilon \ \text{ eventually} \qquad \text{and} \qquad x_k < L + \varepsilon \ \text{ frequently}.$$

**The hypothesis $L \in \mathbb{R}$ is not a restriction that can be lifted.**
Both conditions are stated with real $\varepsilon$ and real $L \pm \varepsilon$,
so neither has a reading at $L = \pm\infty$; the infinite cases are handled
instead by the convergence theorem later on this page. What the lemma does say
is that whenever $\limsup_k x_k$ happens to be a real number, it is pinned down by
the familiar two-sided test: nothing exceeds it by a fixed positive amount from
some index on, and something comes within any fixed positive amount of it
arbitrarily late.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, a real number $L$, the tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail suprema $s_n = \sup T_n$, and $\Lambda := \limsup_k x_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]]).

[L1] $\Lambda$ and every $s_n$ exist in $\overline{\mathbb{R}}$ for every sequence, and $\Lambda$ is the greatest lower bound of $\{s_n\}$ while $s_n$ is the least upper bound of $T_n$ ([[lem-extended-reals-complete]], [[lem-limsup-exists]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; and every real number is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] A property $P$ of indices holds *eventually* when it holds for all $k \ge K$ for some $K$, and *frequently* when for every $K$ it holds for some $k \ge K$ ([[def-sequence]]).

[L4] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$: for $\varepsilon > 0$ one has $L - \varepsilon < L < L + \varepsilon$, and $a < b$ if and only if $-b < -a$, both by translation invariance; the order is total, so exactly one of $a < b$, $a = b$, $b < a$ holds and $a < a$ is impossible ([[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] Reflection exchanges the two quantities: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L = \Lambda$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

1.2 For the converse implication of claim 1, assume that for every real $\varepsilon > 0$ the sequence satisfies $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently. [assume-hyp, L3]

2.1 Under the assumption of step 1.1, $L + \varepsilon > L = \Lambda$, so $L + \varepsilon$ is not a lower bound of $\{s_n\}$, since $\Lambda$ is the greatest lower bound; by totality there is $n$ with $s_n < L + \varepsilon$. For every $k \ge n$ we have $x_k \le s_n$, hence $x_k < L + \varepsilon$; so $x_k < L + \varepsilon$ eventually. [step 1.1, L1, L2, L3, L5]

2.2 Under the assumption of step 1.1, fix $n \in \mathbb{N}$. Then $\Lambda \le s_n$ because $\Lambda$ is a lower bound of $\{s_n\}$, and $L - \varepsilon < L = \Lambda$, so $L - \varepsilon < s_n$. Hence $L - \varepsilon$ is not an upper bound of $T_n$, for an upper bound $u$ of $T_n$ satisfies $s_n \le u$; by totality of the order on $\mathbb{R}$ there is therefore $k \ge n$ with $x_k > L - \varepsilon$. As $n$ was arbitrary, $x_k > L - \varepsilon$ frequently. [step 1.1, L1, L2, L3, L5]

2.3 Under the assumption of step 1.2, let $\varepsilon > 0$ be a real and take $N$ with $x_k < L + \varepsilon$ for all $k \ge N$. Then $L + \varepsilon$ is an upper bound of $T_N$, so $s_N \le L + \varepsilon$ by leastness, and $\Lambda \le s_N$ because $\Lambda$ is a lower bound of $\{s_n\}$; hence $\Lambda \le L + \varepsilon$. [step 1.2, L1, L2, L3]

2.4 Under the assumption of step 1.2, let $\varepsilon > 0$ be a real and fix $n$. There is $k \ge n$ with $x_k > L - \varepsilon$, and $x_k \le s_n$, so $L - \varepsilon < s_n$ and in particular $L - \varepsilon \le s_n$. As $n$ was arbitrary, $L - \varepsilon$ is a lower bound of $\{s_n\}$, so $L - \varepsilon \le \Lambda$ by greatest-lower-boundedness. [step 1.2, L1, L2, L3]

3.1 Taking $\varepsilon = 1$ in steps 2.3 and 2.4 gives $L - 1 \le \Lambda \le L + 1$ with $L \pm 1$ real, so $\Lambda$ is neither $+\infty$ nor $-\infty$ and is therefore a real number. Suppose $\Lambda > L$ and put $\delta := \Lambda - L > 0$; choosing a natural $m \ge 1$ with $1/m < \delta$ and applying step 2.3 with $\varepsilon = 1/m$ gives $\Lambda \le L + 1/m < L + \delta = \Lambda$, which is impossible. Suppose instead $\Lambda < L$ and put $\delta := L - \Lambda > 0$; choosing $m \ge 1$ with $1/m < \delta$ and applying step 2.4 with $\varepsilon = 1/m$ gives $L - 1/m \le \Lambda$, that is $\delta = L - \Lambda \le 1/m < \delta$, again impossible. By trichotomy $\Lambda = L$. [step 2.3, step 2.4, L2, L4, L5]

4.1 Steps 2.1 and 2.2 prove the forward implication of claim 1 and step 3.1 proves its converse, so claim 1 holds. [step 2.1, step 2.2, step 3.1]

5.1 For claim 2, note that $L = \liminf_k x_k$ holds exactly when $-L = -\liminf_k x_k = \limsup_k(-x_k)$, since negation is injective on $\overline{\mathbb{R}}$. Applying claim 1 to the sequence $(-x_k)$ and the real number $-L$, that holds exactly when for every real $\varepsilon > 0$ one has $-x_k < -L + \varepsilon$ eventually and $-x_k > -L - \varepsilon$ frequently. Negating each of the two inequalities reverses it, turning them into $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently, which is claim 2. [step 4.1, L5, L6] ∎

## Remarks

- **The two halves are not interchangeable.** "Eventually below $L + \varepsilon$"
  says $L$ is not exceeded in the long run; "frequently above $L - \varepsilon$"
  says $L$ is approached again and again. Weakening the first to *frequently*
  would make the condition hold for $L = \liminf$ as well, and strengthening the
  second to *eventually* would force convergence, which is exactly the extra
  content of [[thm-convergence-iff-limsup-equals-liminf]].

- **Real $\varepsilon$ is used throughout, and no rational test is involved.**
  Neither condition is a convergence statement, so [[def-real-limit]] and its
  quantification over rational $\varepsilon$ do not enter. Where a convergence
  hypothesis has to be fed into this lemma, as in
  [[thm-convergence-iff-limsup-equals-liminf]], the passage between rational and
  real $\varepsilon$ is made there, by the sanctioned remark of [[def-sequence]].

- **Why the epsilon lemmas for the real supremum are not cited.**
  [[lem-sup-epsilon]] and [[lem-inf-epsilon]] characterise the *real* supremum and
  infimum of a nonempty set bounded on the relevant side. Here $s_n$ may be
  $+\infty$ and the family $\{s_n\}$ may be unbounded below in $\mathbb{R}$, so
  neither lemma applies to the sets actually in play; the corresponding steps
  above are made directly from the least-upper-bound and greatest-lower-bound
  properties in $\overline{\mathbb{R}}$ ([[lem-extended-reals-complete]]), which
  need no hypothesis.

- **The Archimedean property is what closes the converse.** Steps 2.3 and 2.4
  give $L - \varepsilon \le \Lambda \le L + \varepsilon$ for every positive real
  $\varepsilon$, and passing from that to $\Lambda = L$ needs a positive real
  strictly below any prescribed positive gap; [[cor-archimedean-reciprocal]]
  supplies $1/m$.
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

### `thm-root-test`

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
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
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

