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

- Wave 7 ai-generated statement seed
- direct-citation consumer of pending genrisk seed cex-psi-of-one-over-x-has-no-limit-at-zero
- direct-citation consumer of pending genrisk seed ex-x-times-psi-tends-to-zero
- pending genrisk seed (cone 2)

## Target item — `rem-classical-oscillator-is-sine-of-one-over-x`

Normalized current SHA-256: `cf29dbe0e48af9a9167bf25f5b26d897798e7f909c2b0efd718dc2aaaa16a0e8`

The complete current item follows, including frontmatter:

````markdown
---
id: rem-classical-oscillator-is-sine-of-one-over-x
kind: remark
title: "The classical form of the oscillator above is $\\sin(1/x)$, which this library can only construct much later"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [ex-distance-to-the-integers, lem-integer-part]
justified_by: []
aliases: []
forward_refs: [cex-sine-of-one-over-x-has-no-limit-at-zero, ex-x-sine-of-one-over-x-tends-to-zero]
landmark: false
short: "why $\\psi$ and not $\\sin$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Sine and cosine (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sine_and_cosine"
    - title: "Topologist's sine curve (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topologist%27s_sine_curve"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 8 (the trigonometric functions)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Orientation, not a claim of this library

Every analysis course states the two examples of this page in the form

$$\sin(1/x) \quad \text{has no limit at } 0, \qquad x \sin(1/x) \to 0 \text{ as } x \to 0 ,$$

and a reader who has met them before will recognise
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-times-psi-tends-to-zero]] as those examples with $\psi$ in place of
$\sin$. This remark records the correspondence, and it records that the
correspondence is **orientation only**: the two displayed statements are reported
as what the classical treatment proves, not asserted here, and nothing on this
page uses or proves anything about $\sin$.

## The later analytic construction

This library now constructs sine and cosine from their power series, proves
their differential and addition laws, and defines pi from the first positive
zero of cosine. The promised classical examples are
[[cex-sine-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-sine-of-one-over-x-tends-to-zero]]. They occur later in the reading
order, so both links are orientation-only forward references declared in this
item's `forward_refs`; no proof on this earlier page depends on them.

## What $\psi$ supplies instead

The function $\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ of
[[ex-distance-to-the-integers]] is elementary — it needs only the integer part,
the order and the absolute value — and it has the three properties that make the
classical examples work:

- it is **bounded**, with values exactly in $[0, 1/2]$;
- it is **periodic**, with period $1$, so $\psi(1/x)$ oscillates without damping
  as $x \to 0$;
- it **attains** two distinct values on every punctured neighbourhood of $0$
  after the substitution $x \mapsto 1/x$, namely $0$ at the reciprocals of the
  integers and $1/2$ at the reciprocals of the half-integers.

The third property is what
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] uses. It is not sharper than what
$\sin$ would give — the classical witnessing sequences hit the extreme values of
$\sin$ exactly too — but it is available *here*: the two values $0$ and $1/2$ are
read off from the integer part in one line ([[lem-integer-part]]), with no series
and no $\pi$, whereas the corresponding facts about $\sin$ presuppose the whole
construction described above.

## What is genuinely lost, and what is not

Nothing on this page is weaker for using $\psi$. The two statements proved are
exactly the statements usually proved with $\sin$, and their proofs are shorter.

What is lost is a connection to a different subject. The classical pair
$\sin(1/x)$, $x\sin(1/x)$ also carries information about smoothness, about power
series and about the topologist's sine curve, none of which $\psi$ can carry,
since $\psi$ is assembled from the order, the absolute value and the integer part
alone and none of those notions is defined in this library yet. Those phenomena
are not in scope on this earlier page; the forward-linked analytic examples
state them with $\sin$ on the later page that defines it.
````

## Wave 7 provenance row for the target

```json
{
  "id": "rem-classical-oscillator-is-sine-of-one-over-x",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "Positive novelty determination: this is a repository-specific comparison between the local psi construction, later sine items, and the current dependency frontier. External sources can supply the classical sin(1/x) example, but cannot state this library-specific substitution and scope map; its stale scope sentence is reported separately.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

No Wave 7 proof contract is required for this target.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "rem-classical-oscillator-is-sine-of-one-over-x",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "ex-distance-to-the-integers",
    "declared_target": "ex-distance-to-the-integers",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions-examples",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-classical-oscillator-is-sine-of-one-over-x",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-integer-part",
    "declared_target": "lem-integer-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-classical-oscillator-is-sine-of-one-over-x",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cex-sine-of-one-over-x-has-no-limit-at-zero",
    "declared_target": "cex-sine-of-one-over-x-has-no-limit-at-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sine-cosine-and-the-definition-of-pi-examples",
    "targetBatch": null,
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-classical-oscillator-is-sine-of-one-over-x",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "ex-x-sine-of-one-over-x-tends-to-zero",
    "declared_target": "ex-x-sine-of-one-over-x-tends-to-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sine-cosine-and-the-definition-of-pi-examples",
    "targetBatch": null,
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[
  {
    "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "file": "items/cex-psi-of-one-over-x-has-no-limit-at-zero.md",
    "source": "provenance",
    "cone_size": 4,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "ex-distance-to-the-integers",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-one-sided-limits-of-the-sign-function",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-x-times-psi-tends-to-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "rem-classical-oscillator-is-sine-of-one-over-x",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  },
  {
    "id": "ex-x-times-psi-tends-to-zero",
    "file": "items/ex-x-times-psi-tends-to-zero.md",
    "source": "provenance",
    "cone_size": 4,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-distance-to-the-integers",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-x-times-dirichlet-has-a-limit-only-at-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "rem-classical-oscillator-is-sine-of-one-over-x",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  },
  {
    "id": "rem-classical-oscillator-is-sine-of-one-over-x",
    "file": "items/rem-classical-oscillator-is-sine-of-one-over-x.md",
    "source": "provenance",
    "cone_size": 2,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-x-times-psi-tends-to-zero",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full text of every cited or declared item (6)

### `cex-psi-of-one-over-x-has-no-limit-at-zero`

````markdown
---
id: cex-psi-of-one-over-x-has-no-limit-at-zero
kind: counterexample
title: "$\\psi(1/x)$ has no limit at $0$: two sequences tending to $0$ give values constantly $0$ and constantly $1/2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [ex-distance-to-the-integers, cor-sequential-criterion-for-nonexistence, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-sequence, def-real-limit, def-natural-numbers, def-integers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, thm-int-comm-ring, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, def-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$\\psi(1/x)$ has no limit at $0$"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function

$$\Phi : \mathbb{R} \setminus \{0\} \to \mathbb{R}, \qquad \Phi(x) := \psi(1/x) ,$$

with $\psi$ the distance to the integers ([[ex-distance-to-the-integers]]), has a
limit at $0$ ([[def-function-limit]]).

$\Phi$ is bounded — $0 \le \Phi(x) \le 1/2$ for every $x \ne 0$, by claim 2 of
[[ex-distance-to-the-integers]] — and $0$ is a limit point of its domain, so
every hypothesis that might plausibly deliver a limit except the limit itself is
present. Boundedness near a point is therefore **not** sufficient for a limit to
exist, and the converse of [[lem-limit-implies-local-boundedness]] fails.

The refutation exhibits two sequences of positive reals tending to $0$ along
which $\Phi$ is constantly $0$ and constantly $1/2$, and applies
[[cor-sequential-criterion-for-nonexistence]].

## Facts & Assumptions

**Given:** The function $\Phi(x) = \psi(1/x)$ on $\mathbb{R} \setminus \{0\}$, and the sequences $x_k := 1/(k+1)$ and $y_k := 2/(2k+1)$ for $k \in \mathbb{N}$. Sequences are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]], [[def-natural-numbers]]), so the first terms are $x_0 = 1$ and $y_0 = 2$; the denominators $k+1$ and $2k+1$ are canonical naturals $\ge 1$, never $0$, which is why the sequences are written this way and not as $1/k$.

[L1] The function $\psi$ vanishes exactly on $\mathbb{Z}$, satisfies $\psi(m + 1/2) = 1/2$ for every $m \in \mathbb{Z}$, and takes values in $[0,1/2]$ ([[ex-distance-to-the-integers]], claims 2, 3 and 4).

[L2] Nonexistence criterion: if two sequences with all terms in $A \setminus \{c\}$ converge to $c$ while the image sequences converge to distinct reals, then $f$ has no limit at $c$ ([[cor-sequential-criterion-for-nonexistence]]).

[L3] Sequential convergence, and the fact that a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]). Testing against every positive real rather than every positive rational defines the same relation ([[lem-rat-embeds-dense]], remarks of [[def-sequence]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); canonical naturals are positive and strictly increasing in the index ([[lem-of-naturals-positive]]); and $0 < a < b$ gives $0 < 1/b < 1/a$, with the non-strict form following by adjoining equality ([[lem-of-inverse-positive]]).

[L5] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L6] Absolute value ([[lem-of-abs-value]]); order and field arithmetic: $0 < 1$, so $2 > 0$ and $1/2 > 0$ with $1/2 \ne 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-field]], [[def-ordered-field]]).

[L7] Integers in $\mathbb{R}$: every canonical natural is an integer, and $\mathbb{Z}$ is closed under adding $1$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[thm-int-comm-ring]]).

## Counterexample

**Proof technique:** direct.

1.1 $0$ is a limit point of $\mathbb{R} \setminus \{0\}$: given a real $\varepsilon > 0$, the real $\varepsilon/2$ is positive, hence lies in $\mathbb{R} \setminus \{0\}$, and $0 < |\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$. [L5, L6]

1.2 For every $k \in \mathbb{N}$ the terms $x_k = 1/(k+1)$ and $y_k = 2/(2k+1)$ are defined and positive, since $k + 1 \ge 1 > 0$ and $2k + 1 \ge 1 > 0$; in particular $x_k \ne 0$ and $y_k \ne 0$, so both sequences have all their terms in $\mathbb{R} \setminus \{0\}$, which equals $(\mathbb{R} \setminus \{0\}) \setminus \{0\}$. [L4, L6, L7]

1.3 The reals $0$ and $1/2$ are distinct, since $1/2 > 0$. [L6]

2.1 $x_k \to 0$: given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon$; every $k \ge n$ has $k + 1 > n \ge 1$, hence $|x_k - 0| = 1/(k+1) < 1/n < \varepsilon$. [step 1.2, L3, L4, L6]

2.2 $y_k \to 0$: for every $k \in \mathbb{N}$ we have $2k + 1 \ge k + 1$, since their difference is $k \ge 0$, so $0 < y_k = 2/(2k+1) \le 2/(k+1)$. Given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon/2$; every $k \ge n$ has $k + 1 > n$, hence $|y_k - 0| \le 2/(k+1) < 2/n < \varepsilon$. [step 1.2, L3, L4, L6]

2.3 $\Phi(x_k) = 0$ for every $k$: $1/x_k = k + 1$, a canonical natural and hence an integer by [L7], so $\psi(1/x_k) = 0$ by [L1]. The image sequence is therefore the constant sequence $0$ and converges to $0$. [step 1.2, L1, L3, L7]

2.4 $\Phi(y_k) = 1/2$ for every $k$: $1/y_k = (2k+1)/2 = k + 1/2$ with $k$ an integer by [L7], so $\psi(1/y_k) = 1/2$ by [L1]. The image sequence is therefore the constant sequence $1/2$ and converges to $1/2$. [step 1.2, L1, L3, L6, L7]

3.1 So $(x_k)$ and $(y_k)$ have all their terms in $(\mathbb{R} \setminus \{0\}) \setminus \{0\}$ and both converge to $0$, which is a limit point of $\mathbb{R} \setminus \{0\}$, while the image sequences converge to the distinct reals $0$ and $1/2$. By [L2], $\Phi$ has no limit at $0$. [step 1.1, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4, L2] ∎

## Remarks

- **Both witnessing sequences have positive terms**, so what is refuted is already the existence of the *right-hand* limit $\lim_{x \to 0^{+}} \Phi(x)$ ([[def-one-sided-limits]]), and the two-sided failure follows. The contrast with the sign function on this page is exact: there both one-sided limits exist and merely disagree.

- **Why $1/(k+1)$ and $2/(2k+1)$.** They are the sequences whose reciprocals are $k+1$ and $k + 1/2$, that is, the integers and the half-integers, which are precisely the two sets on which claims 3 and 4 of [[ex-distance-to-the-integers]] evaluate $\psi$ exactly. Writing $1/k$ instead would be undefined at the index $k = 0$, since $\mathbb{N}$ contains $0$ ([[def-sequence]]).

- **Multiplying by $x$ repairs it.** The function $x \mapsto x\,\psi(1/x)$ does have a limit at $0$, namely $0$, by the squeeze theorem ([[ex-x-times-psi-tends-to-zero]]). The oscillation is unchanged; what changes is that its amplitude is forced to $0$.

- **The classical form of this counterexample** uses $\sin(1/x)$ in place of $\psi(1/x)$; [[rem-classical-oscillator-is-sine-of-one-over-x]] records why this library cannot yet write it.
````

### `cex-sine-of-one-over-x-has-no-limit-at-zero`

````markdown
---
id: cex-sine-of-one-over-x-has-no-limit-at-zero
kind: counterexample
title: "sin(1/x) has no limit as x tends to zero"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sequential-criterion-for-function-limits, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis"
      url: "https://books.google.com/books/about/Introduction_to_Real_Analysis.html?id=YawbAAAAQBAJ"
    - title: "H. Zeisel, lim sin(x)/x and the definition of pi"
      url: "https://arxiv.org/abs/1302.1167"
pipeline_run: null
---

## Statement refuted

The function $x\mapsto\sin(1/x)$, defined for $x\ne0$, has a limit at $0$.

## Facts & Assumptions

**Given:** The punctured real line.

[L1] $\sin(\pi/2+2m\pi)=1$ and $\sin(3\pi/2+2m\pi)=-1$ for integers $m$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L2] A function limit implies convergence along every sequence in its punctured domain approaching the point ([[thm-sequential-criterion-for-function-limits]]).

[L3] Reciprocal natural-number sequences tend to zero ([[cor-archimedean-reciprocal]]).

## Counterexample

**Proof technique:** direct.

1.1 For $n\in\mathbb N$, put $x_n=1/(\pi/2+2\pi(n+1))$ and $y_n=1/(3\pi/2+2\pi(n+1))$. Both sequences are nonzero and tend to $0$. [L3, algebra]

1.2 Their image values are $\sin(1/x_n)=1$ and $\sin(1/y_n)=-1$. [L1]

2.1 A common function limit at zero would force both image sequences to converge to it, which is impossible. [step 1.1, step 1.2, L2] ∎
````

### `ex-distance-to-the-integers`

````markdown
---
id: ex-distance-to-the-integers
kind: example
title: "The trigonometry-free oscillator $\\psi(x) = \\inf_{n \\in \\mathbb{Z}} |x - n|$ is well defined and attained at a nearest integer, takes values in $[0, 1/2]$, vanishes exactly on $\\mathbb{Z}$, equals $1/2$ at half-integers, and is $1$-periodic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-integer-part, def-infimum, def-max-min, def-bounded-set, def-interval, def-integers, def-natural-numbers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, lem-nat-discrete, thm-int-ordered-ring, thm-int-comm-ring, lem-of-abs-value, def-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field, def-field]
justified_by: []
aliases: [ex-distance-to-nearest-integer, ex-triangle-wave]
landmark: true
short: "$\\psi = $ distance to $\\mathbb{Z}$"
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
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Triangle wave (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Triangle_wave"
pipeline_run: null
---

## Example

Identify $\mathbb{Z}$ with its canonical copy in $\mathbb{R}$
([[def-integers]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]) and for
$x \in \mathbb{R}$ put

$$D(x) \;:=\; \{\, |x - n| \ : \ n \in \mathbb{Z} \,\}, \qquad \psi(x) \;:=\; \inf D(x)$$

([[def-infimum]]). Write $m := \lfloor x \rfloor$ for the integer part of $x$
([[lem-integer-part]]) and $t := x - m$, so $0 \le t < 1$. Then:

1. **Existence and attainment.** $\psi(x)$ exists and is **attained**:
   $$\psi(x) \;=\; \min\{\, t,\ 1 - t \,\} \;=\; \min\bigl\{\, |x - m|,\ |x - (m+1)| \,\bigr\} ,$$
   so $\psi(x) = |x - n|$ for $n = m$ or $n = m + 1$, and $\psi(x) = \min D(x)$
   ([[def-max-min]]).
2. **Range.** $0 \le \psi(x) \le 1/2$ for every real $x$, and every value in
   $[0, 1/2]$ occurs: the range of $\psi$ is exactly the interval $[0, 1/2]$
   ([[def-interval]]).
3. **Zero set.** $\psi(x) = 0$ if and only if $x \in \mathbb{Z}$.
4. **Half-integers.** $\psi(m + 1/2) = 1/2$ for every $m \in \mathbb{Z}$.
5. **Periodicity.** $\psi(x + 1) = \psi(x)$ for every real $x$.

**What this function is for.** It is the elementary, trigonometry-free
substitute for $\sin$: it is bounded, it oscillates, and on every punctured
neighbourhood of $0$ the composite $\psi(1/x)$ attains both the value $0$ and the
value $1/2$. Claims 3 and 4 are exactly what the companion counterexample
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] evaluates, and claim 2 is what the
squeeze argument of [[ex-x-times-psi-tends-to-zero]] uses.

## Facts & Assumptions

**Given:** A real $x$; the set $D(x) = \{\, |x - n| : n \in \mathbb{Z} \,\}$; the integer $m := \lfloor x \rfloor$ and the real $t := x - m$. Integers are identified with their canonical copies in $\mathbb{R}$.

[L1] Integer part: for every real $x$ there is exactly one integer $m$ with $m \le x < m + 1$ ([[lem-integer-part]]). Hence $0 \le t < 1$ and $0 < 1 - t \le 1$, where $1 - t = (m+1) - x$.

[L2] Integers in $\mathbb{R}$: the embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ are injective and preserve $0$, $1$, addition and order; $\mathbb{Z}$ is a totally ordered commutative ring, closed under $n \mapsto n + 1$ and $n \mapsto n - 1$; every integer $\ge 0$ is the image of a unique natural; and a natural $j \ne 0$ satisfies $j \ge 1$, so an integer $> 0$ is $\ge 1$ and consequently, for integers $n < n'$, one has $n + 1 \le n'$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[thm-int-ordered-ring]], [[thm-int-comm-ring]], [[lem-nat-discrete]], [[def-natural-numbers]]).

[L3] Infimum: $\ell = \inf S$ when $\ell \le s$ for every $s \in S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$. So a lower bound of $S$ that belongs to $S$ is the infimum, and is then also the minimum of $S$ ([[def-infimum]], [[def-max-min]], [[def-bounded-set]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L5] Order and field arithmetic in $\mathbb{R}$: the order is total and trichotomy holds; translation invariance and adding inequalities ([[lem-of-add-order]]); $0 < 1$ ([[cor-of-one-positive]]), so $2 > 0$, $1/2 > 0$ ([[lem-of-inverse-positive]]), $1/2 < 1$ and $1 - 1/2 = 1/2$ ([[lem-of-sign-rules]], [[def-field]]); and the minimum of a two-element set of reals ([[def-max-min]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $D(x)$ is nonempty and $0$ is a lower bound of it: the integer $0$ gives $|x - 0| \in D(x)$, and $|x - n| \ge 0$ for every $n \in \mathbb{Z}$. [L2, L4]

1.2 By [L1] the integer $m = \lfloor x \rfloor$ satisfies $m \le x < m + 1$, so $t = x - m$ satisfies $0 \le t < 1$, and $(m+1) - x = 1 - t$ satisfies $0 < 1 - t \le 1$. [L1, L5]

2.1 Every element of $D(x)$ is at least $\min\{t, 1-t\}$. Let $n \in \mathbb{Z}$. By [L2] and totality either $n \le m$ or $m < n$, and in the second case $m + 1 \le n$. If $n \le m$ then $x - n \ge x - m = t \ge 0$, so $|x - n| = x - n \ge t$. If $m + 1 \le n$ then $n - x \ge (m+1) - x = 1 - t > 0$, so $|x - n| = n - x \ge 1 - t$. In both cases $|x - n| \ge \min\{t, 1-t\}$. [step 1.2, L2, L4, L5]

2.2 Both $t$ and $1 - t$ belong to $D(x)$: since $t \ge 0$ we have $t = |x - m|$, and since $1 - t > 0$ we have $1 - t = |x - (m+1)|$, with $m$ and $m+1$ in $\mathbb{Z}$. [step 1.2, L2, L4]

3.1 Hence $\min\{t, 1-t\}$ is a lower bound of $D(x)$ belonging to $D(x)$, so by [L3] it is the greatest lower bound and also the minimum: $\psi(x) = \min\{t, 1-t\} = \min\{|x - m|, |x - (m+1)|\}$, attained at $n = m$ or at $n = m+1$. This is claim 1. [step 2.1, step 2.2, L3, L5]

4.1 Claim 2, the inclusion. $\psi(x) \ge 0$, since $t \ge 0$ and $1 - t > 0$; and $\psi(x) \le 1/2$: if $t \le 1/2$ then $\psi(x) \le t \le 1/2$, while if $1/2 < t$ then $1 - t < 1 - 1/2 = 1/2$ and $\psi(x) \le 1 - t < 1/2$. So $0 \le \psi(x) \le 1/2$ for every real $x$. [step 1.2, step 3.1, L5]

4.2 Claim 3. If $\psi(x) = 0$ then $\min\{t, 1-t\} = 0$; since $1 - t > 0$ this forces $t = 0$, that is $x = m \in \mathbb{Z}$. Conversely if $x \in \mathbb{Z}$ then $|x - x| = 0$ lies in $D(x)$ and $0$ is a lower bound of $D(x)$ by step 1.1, so $\psi(x) = 0$ by [L3]. [step 1.1, step 1.2, step 3.1, L3, L4, L5]

4.3 Claim 4. Let $m \in \mathbb{Z}$ and $x := m + 1/2$. Since $0 < 1/2 < 1$ we have $m \le x < m + 1$, so the uniqueness in [L1] gives $\lfloor x \rfloor = m$ and $t = 1/2$; then step 3.1 gives $\psi(x) = \min\{1/2,\ 1 - 1/2\} = \min\{1/2, 1/2\} = 1/2$. [step 3.1, L1, L5]

4.4 Claim 5. The map $n \mapsto n + 1$ is a bijection of $\mathbb{Z}$ onto itself, with inverse $n \mapsto n - 1$ [L2]; so, substituting $n = n' + 1$, $$D(x+1) = \{\, |(x+1) - n| : n \in \mathbb{Z} \,\} = \{\, |x - n'| : n' \in \mathbb{Z} \,\} = D(x) .$$ Being infima of the same set, $\psi(x+1)$ and $\psi(x)$ are equal by step 3.1 applied at $x + 1$ and at $x$. [step 3.1, L2, L3]

5.1 Claim 2, the exact range. Every value of $\psi$ lies in $[0,1/2]$ by step 4.1. Conversely let $s$ satisfy $0 \le s \le 1/2$; then $0 \le s < 1$, so $0 \le s < 0 + 1$ and the uniqueness in [L1] gives $\lfloor s \rfloor = 0$ and $t = s$; and $s \le 1/2 \le 1 - s$ because $2s \le 1$, so step 3.1 gives $\psi(s) = \min\{s, 1-s\} = s$. Hence the range of $\psi$ is exactly $[0,1/2]$. [step 3.1, step 4.1, L1, L5]

6.1 So $\psi$ is defined at every real, is attained at a nearest integer, has range exactly $[0,1/2]$, vanishes exactly on $\mathbb{Z}$, takes the value $1/2$ at every half-integer, and is $1$-periodic. [step 3.1, step 4.1, step 4.2, step 4.3, step 4.4, step 5.1] ∎

## Remarks

- **No completeness of $\mathbb{R}$ is needed for the infimum here.** The general existence theorem [[thm-infimum-property]] would supply $\inf D(x)$ from the least-upper-bound property, but step 3.1 does not use it: the infimum is produced by exhibiting an element of $D(x)$ that is also a lower bound, which is [[def-infimum]] read directly. Completeness does enter, once, through [[lem-integer-part]], whose existence half is the Archimedean property.

- **Why $\min\{t, 1-t\}$ and not "the distance to the nearest integer".** The phrase presupposes that a nearest integer exists, which is exactly what step 2.2 establishes and what the picture cannot. When $t = 1/2$ there are two nearest integers, $m$ and $m+1$, and the formula is indifferent to which is chosen, so nothing has to be selected.

- **$\psi$ is the triangle wave** of amplitude $1/2$ and period $1$ — not the sawtooth $x - \lfloor x \rfloor$, which drops discontinuously at every integer: on $[0, 1/2]$ it is $\psi(s) = s$ by step 5.1, and periodicity and the reflection $\psi(-x) = \psi(x)$ — immediate from $D(-x) = \{\, |-x - n| : n \in \mathbb{Z} \,\} = \{\, |x + n| : n \in \mathbb{Z} \,\} = D(x)$, using $|-u| = |u|$ and the bijection $n \mapsto -n$ of $\mathbb{Z}$ — determine it everywhere.
````

### `ex-x-sine-of-one-over-x-tends-to-zero`

````markdown
---
id: ex-x-sine-of-one-over-x-tends-to-zero
kind: example
title: "x sin(1/x) tends to zero despite its oscillation"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-trigonometric-parity-and-pythagorean-identity, thm-squeeze-for-function-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis"
      url: "https://books.google.com/books/about/Introduction_to_Real_Analysis.html?id=YawbAAAAQBAJ"
    - title: "H. Zeisel, lim sin(x)/x and the definition of pi"
      url: "https://arxiv.org/abs/1302.1167"
pipeline_run: null
---

## Example

$$\lim_{x\to0}x\sin(1/x)=0,$$
where the function is defined at $0$ by the displayed limit.

## Facts & Assumptions

**Given:** A nonzero real $x$ approaching $0$.

[L1] $|\sin u|\le1$ for every real $u$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] The squeeze theorem for function limits holds ([[thm-squeeze-for-function-limits]]).



## Verification

**Proof technique:** direct.

1.1 From [L1], $|x\sin(1/x)|\le|x|$ for every $x\ne0$. [L1, algebra]

2.1 Since both $-|x|$ and $|x|$ tend to $0$, squeeze gives $x\sin(1/x)\to0$. [step 1.1, L2] ∎
````

### `ex-x-times-psi-tends-to-zero`

````markdown
---
id: ex-x-times-psi-tends-to-zero
kind: example
title: "$x\\,\\psi(1/x) \\to 0$ as $x \\to 0$, by the squeeze theorem"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [ex-distance-to-the-integers, thm-squeeze-for-function-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, lem-of-sign-rules, lem-of-inverse-positive, lem-of-add-order, cor-of-one-positive, def-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x\\,\\psi(1/x) \\to 0$"
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
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Example

Let $A := \mathbb{R} \setminus \{0\}$ and define $h : A \to \mathbb{R}$ by

$$h(x) \;:=\; x \cdot \psi(1/x),$$

with $\psi$ as in [[ex-distance-to-the-integers]]. Then $0$ is a limit point of
$A$, the limit of $h$ at $0$ exists, and

$$\lim_{x \to 0} h(x) \;=\; 0 .$$

**The point of the example.** The factor $\psi(1/x)$ has no limit at $0$ at all
([[cex-psi-of-one-over-x-has-no-limit-at-zero]]), so
[[thm-algebra-of-function-limits]] cannot be applied to the product: its product
rule requires both factors to have limits. What is available is that
$\psi(1/x)$ stays inside $[0,1/2]$, and a bounded factor multiplied by one
tending to $0$ is killed. That is exactly what
[[thm-squeeze-for-function-limits]] delivers, and it delivers the *existence* of
the limit, not merely its value.

## Facts & Assumptions

**Given:** The set $A = \mathbb{R} \setminus \{0\}$ and the function $h : A \to \mathbb{R}$, $h(x) = x \cdot \psi(1/x)$, with $\psi$ the function of [[ex-distance-to-the-integers]].

[L1] Range of $\psi$: $0 \le \psi(u) \le 1/2$ for every real $u$ ([[ex-distance-to-the-integers]], claim 2).

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} f(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain with $0 < |x - c| < \delta$ satisfies $|f(x) - P| < \varepsilon$.

[L3] Squeeze theorem: if $f \le g \le k$ on $A \cap N^{*}_{\eta}(c)$ for some real $\eta > 0$, and the limits of $f$ and of $k$ at $c$ exist and are equal to $L$, then the limit of $g$ at $c$ exists and equals $L$ ([[thm-squeeze-for-function-limits]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|uv| = |u|\,|v|$; $|-u| = |u|$; $|u| = u$ for $u \ge 0$; and $-|u| \le u \le |u|$ ([[lem-of-abs-value]]).

[L5] Order and field arithmetic: $x \ne 0$ has an inverse $1/x$ ([[def-field]]); $0 < 1$, so $2 > 0$ and $1/2 > 0$ with $t/2 < t$ for $t > 0$ ([[cor-of-one-positive]], [[lem-of-inverse-positive]], [[lem-of-sign-rules]]); multiplying an inequality by a non-negative factor, and adding inequalities ([[lem-of-sign-rules]], [[lem-of-add-order]]); the order is total ([[def-ordered-field]]). Those two sources state their moves in their STRICT forms only; the non-strict forms used below follow by adjoining the equality case, in which the two sides coincide ([[def-ordered-field]]).

[L6] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Verification

**Proof technique:** direct.

1.1 $0$ is a limit point of $A = \mathbb{R} \setminus \{0\}$: given a real $\varepsilon > 0$, the real $\varepsilon/2$ satisfies $\varepsilon/2 > 0$, so it lies in $A$, and $0 < |\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$. [L4, L5, L6]

1.2 $h$ is defined on all of $A$, and $|h(x)| \le |x|/2$ there: for $x \in A$ we have $x \ne 0$, so $1/x$ exists, and $|h(x)| = |x| \cdot \psi(1/x)$ by [L4], while $0 \le \psi(1/x) \le 1/2$ by [L1] and $|x| \ge 0$, so multiplying the inequality $\psi(1/x) \le 1/2$ by the non-negative factor $|x|$ gives $|h(x)| \le |x|/2$. [L1, L4, L5]

1.3 The two functions $x \mapsto -|x|/2$ and $x \mapsto |x|/2$ on $A$ each have limit $0$ at $0$: given a real $\varepsilon > 0$, take $\delta := \varepsilon$; every $x \in A$ with $0 < |x - 0| < \delta$ satisfies $\bigl| |x|/2 - 0 \bigr| = |x|/2 < \varepsilon/2 < \varepsilon$, and likewise $\bigl| -|x|/2 - 0 \bigr| = |x|/2 < \varepsilon$. [L2, L4, L5]

2.1 Hence $-|x|/2 \le h(x) \le |x|/2$ for every $x \in A$, by [L4] applied to $|h(x)| \le |x|/2$. [step 1.2, L4]

3.1 The three functions satisfy $-|x|/2 \le h(x) \le |x|/2$ on all of $A$, in particular on $A \cap N^{*}_{1}(0)$, and the two outer ones have limit $0$ at $0$; since $0$ is a limit point of $A$, the squeeze theorem [L3] gives that the limit of $h$ at $0$ exists and equals $0$. [step 1.1, step 1.3, step 2.1, L3] ∎

## Remarks

- **Where the hypotheses of the squeeze theorem are met.** The order hypothesis holds on all of $A$, so any $\eta > 0$ serves and $\eta = 1$ is taken; the two outer limits are computed by hand in step 1.3; and $0$ is a limit point of $A$ by step 1.1, which is what makes every limit here well posed ([[def-function-limit]]).

- **Nothing about $\psi$ beyond its range is used.** Replacing $\psi$ by any function with values in a fixed bounded set would give the same conclusion by the same three steps. What makes the example worth stating is the contrast with [[cex-psi-of-one-over-x-has-no-limit-at-zero]]: the same oscillating factor, multiplied by $x$ or not, is the difference between a limit existing and not.

- **The classical version of this example** is $x \sin(1/x) \to 0$ as $x \to 0$; see [[rem-classical-oscillator-is-sine-of-one-over-x]] for why this library writes $\psi$ and not $\sin$.
````

### `lem-integer-part`

````markdown
---
id: lem-integer-part
kind: lemma
title: "Integer part: for every real $x$ there is exactly one integer $m$ with $m \\le x < m + 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integers, def-natural-numbers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, lem-nat-discrete, thm-int-ordered-ring, thm-int-comm-ring, thm-of-archimedean, thm-well-ordering-principle, thm-induction-principle, lem-of-naturals-positive, lem-of-add-order, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [lem-floor-function, lem-floor-exists]
landmark: true
short: "integer part (floor)"
proof_strategy: constructive
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
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Identify $\mathbb{Z}$ with its canonical copy inside $\mathbb{R}$, along the
embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$
([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]],
[[def-integers]]). Then for every real $x$ there is **exactly one** integer $m$
with

$$m \;\le\; x \;<\; m + 1 .$$

It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**,
of $x$.

**Two independent ingredients are needed and neither may be dropped.** Existence
is the Archimedean property ([[thm-of-archimedean]]) together with the
well-ordering of $\mathbb{N}$ ([[thm-well-ordering-principle]]): the first says
that $x$ is caught between two integers at all, the second picks the *least*
integer above $x$. Uniqueness is the discreteness of $\mathbb{Z}$: no integer
lies strictly between $m$ and $m+1$.

This lemma is stated once here and reused. It is what turns "the nearest integer
to $x$" from a picture into an object, and the companion page's oscillator
$\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ is computed from it in one line.

## Facts & Assumptions

**Given:** A real $x$. Naturals, integers and rationals are identified with their canonical copies in $\mathbb{R}$ along $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$.

[L1] The embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ are injective and preserve $0$, $1$, addition, multiplication and order ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]]); $\mathbb{Z}$ is a totally ordered commutative ring ([[thm-int-ordered-ring]], [[thm-int-comm-ring]]); every integer $\ge 0$ is the image of a unique natural, that map being injective and order preserving ([[lem-nat-embeds-int]]); and a natural $j \ne 0$ satisfies $j \ge 1$ ([[lem-nat-discrete]], [[def-natural-numbers]]).

[L2] The image of a natural $n \ge 1$ under the composite $\mathbb{N} \to \mathbb{R}$ is the canonical natural $n \cdot 1_{\mathbb{R}}$ of [[lem-of-naturals-positive]]. Indeed that composite preserves $1$ and addition by [L1], while $n \cdot 1_{\mathbb{R}}$ is defined by $1 \cdot 1_{\mathbb{R}} = 1_{\mathbb{R}}$ and $(n+1) \cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1_{\mathbb{R}}$, so the two agree at $1$ and satisfy the same recursion; induction on $n$ ([[thm-induction-principle]]) gives the identification.

[L3] Archimedean property: for every real $t$ there is a natural $n \ge 1$ with $t < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L4] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] Order arithmetic in $\mathbb{R}$: the order is total, so the negation of $t < u$ is $u \le t$; trichotomy, so $t < u$ and $u \le t$ cannot both hold; translation invariance ([[lem-of-add-order]]); $t \le |t|$ and $-t \le |t|$ ([[lem-of-abs-value]]); and transitivity ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L3] to the real $|x|$: fix a natural $n \ge 1$ with $|x| < n$. Since $x \le |x|$ and $-x \le |x|$, this gives $-n < x < n$. [L2, L3, L5, choose]

2.1 Put $S := \{\, k \in \mathbb{N} \ : \ x < k - n \,\}$, where $k - n$ is formed in $\mathbb{Z}$ and read in $\mathbb{R}$ through [L1]. It is a subset of $\mathbb{N}$, and it is nonempty: the natural $2n$ satisfies $2n - n = n > x$ by step 1.1, so $2n \in S$. [step 1.1, L1, L2, construct]

3.1 By the well-ordering principle [L4] let $k_0$ be the least element of $S$. [step 2.1, L4, choose]

4.1 The index $k_0$ is not $0$: for $k = 0$ the defining condition reads $x < 0 - n = -n$, which trichotomy excludes since $-n < x$ by step 1.1. Hence $k_0 \ne 0$, so $k_0 \ge 1$ by [L1], and $k_0 - 1$ is again a natural number. [step 1.1, step 3.1, L1, L5]

5.1 Set $m := (k_0 - 1) - n$, an integer. Since $k_0 - 1 < k_0$ and $k_0$ is the least element of $S$, the natural $k_0 - 1$ does not lie in $S$, that is, $x < (k_0 - 1) - n$ fails; the order being total, $m = (k_0 - 1) - n \le x$. [step 3.1, step 4.1, L1, L5, construct]

6.1 On the other hand $k_0 \in S$ gives $x < k_0 - n = \bigl((k_0 - 1) - n\bigr) + 1 = m + 1$. So $m \le x < m + 1$, and existence is proved. [step 3.1, step 5.1, L1, L5]

7.1 Uniqueness: suppose an integer $m'$ also satisfies $m' \le x < m' + 1$ and $m' \ne m$. The order of $\mathbb{Z}$ being total, one of $m < m'$ and $m' < m$ holds, and the two cases are the same with the roles of $m$ and $m'$ exchanged; so assume $m < m'$. Then $m' - m$ is an integer $> 0$, hence by [L1] the image of a natural $j \ne 0$, so $j \ge 1$ and $m' - m \ge 1$, that is $m + 1 \le m'$. But then $x < m + 1 \le m' \le x$, which trichotomy forbids. Hence $m' = m$. [step 6.1, L1, L5]

8.1 Therefore exactly one integer $m$ satisfies $m \le x < m + 1$, and we write $m = \lfloor x \rfloor$. [step 6.1, step 7.1, discharge-construct] ∎

## Remarks

- **What the two halves of the proof really use.** Step 1.1 is the only use of the Archimedean property, and it is indispensable: in a non-Archimedean ordered field ([[cex-ordered-field-not-archimedean]]) an element larger than every canonical natural has no integer part at all, since the set $S$ of step 2.1 would be empty. Step 3.1 is the only use of the well-ordering principle, and it is what makes the construction canonical: no choice is made anywhere, and $\lfloor x \rfloor$ is a function of $x$.

- **Immediate consequences, used later.** From $m \le x < m + 1$ one reads off $0 \le x - m < 1$ and $0 < (m+1) - x \le 1$; and $\lfloor x \rfloor = x$ exactly when $x$ is an integer, since an integer $m$ satisfies $m \le m < m + 1$ and uniqueness does the rest. The translation identity $\lfloor x + p \rfloor = \lfloor x \rfloor + p$ for an integer $p$ follows the same way: adding $p$ to $m \le x < m+1$ gives $m + p \le x + p < (m + p) + 1$, and uniqueness identifies $m + p$ as the integer part of $x + p$.

- **The ceiling is not defined here** and is not needed on this page; it would be the least integer $\ge x$, obtained from the same set $S$ without the shift by one.
````

