# Audit proof-refuter brief — Wave 8, step A6

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

- critical risk (9): 10 declared dependencies; 11 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cex-dirichlet-is-nowhere-continuous`

Normalized current SHA-256: `91e2d1e02b9fcc056e467e45001480be450bbc6045df59051efdb83bc634dc20`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-dirichlet-is-nowhere-continuous
kind: counterexample
title: "The indicator of $\\mathbb{Q}$ is continuous at no point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-limit-point-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-open-and-closed-in-r, lem-rat-embeds-dense, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [cex-dirichlet-function]
landmark: true
short: "Dirichlet function is nowhere continuous"
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
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every function $\mathbb{R} \to \mathbb{R}$ is continuous at
at least one point ([[def-continuity-real]]).

The witness is the **Dirichlet function**, the indicator of the rationals:
writing $\mathbb{Q}$ for the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]),

$$\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}, \qquad \mathbf{1}_{\mathbb{Q}}(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}. \end{cases}$$

It is continuous at **no** point of $\mathbb{R}$. The mechanism is that both
$\mathbb{Q}$ and its complement are dense ([[lem-q-and-irrationals-dense-r]]),
so every neighbourhood of every real contains a point of each, and the two
values differ by $1$.

**The argument is choice free.** Density is used in the form "every
neighbourhood of every point meets the set", which is
[[thm-closure-characterisations-r]] applied to a closure equal to $\mathbb{R}$;
no sequence is built, so neither
[[lem-sequential-characterisation-of-closure-r]] nor
[[thm-sequential-criterion-for-continuity]] is invoked, and the countable choice
those two spend is not spent here.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, its complement $X := \mathbb{R} \setminus \mathbb{Q}$, and the function $\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}$ taking the value $1$ on $\mathbb{Q}$ and $0$ on $X$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| < \varepsilon$ for every real $x$ with $|x - c| < \delta$. So continuity at $c$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a real $x$ with $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| \ge \varepsilon_0$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Both $\mathbb{Q}$ and $X$ are dense in $\mathbb{R}$, that is, each has closure $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]], [[def-limit-point-r]], [[lem-rat-embeds-dense]]).

[L3] A point lies in the closure of $S$ exactly when every neighbourhood $N_{\delta}$ of it meets $S$; so a set with closure $\mathbb{R}$ meets every $N_{\delta}(c)$, for every real $c$ and every real $\delta > 0$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function: $X$ is by definition the complement $\mathbb{R} \setminus \mathbb{Q}$, so every real either lies in $\mathbb{Q}$ or does not, exclusively; and $|1 - 0| = |0 - 1| = 1$, with $1/2 > 0$ and $1/2 < 1$ ([[lem-of-abs-value]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function on $\mathbb{R}$ taking only the values $0$ and $1$, and $\mathbb{R}$ is the disjoint union of $\mathbb{Q}$ and $X$. [L4]

1.2 Let $c \in \mathbb{R}$ be arbitrary, put $\varepsilon_0 := 1/2 > 0$, and let a real $\delta > 0$ be given. [L4]

2.1 By [L2] and [L3] the neighbourhood $N_{\delta}(c)$ meets $\mathbb{Q}$ and it meets $X$: there are reals $p \in N_{\delta}(c) \cap \mathbb{Q}$ and $z \in N_{\delta}(c) \cap X$, so $|p - c| < \delta$ and $|z - c| < \delta$, with $\mathbf{1}_{\mathbb{Q}}(p) = 1$ and $\mathbf{1}_{\mathbb{Q}}(z) = 0$. [step 1.2, L2, L3, choose]

3.1 If $c \in \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 1$ and the point $x := z$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |0 - 1| = 1 \ge \varepsilon_0$. If $c \notin \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 0$ and the point $x := p$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |1 - 0| = 1 \ge \varepsilon_0$. By [L4] these two possibilities are exhaustive and exclusive. [step 1.1, step 2.1, L4]

4.1 So for the fixed $\varepsilon_0 = 1/2$ no real $\delta > 0$ serves at $c$, and by [L1] the function $\mathbf{1}_{\mathbb{Q}}$ is not continuous at $c$. As $c$ was an arbitrary real, it is continuous at no point of $\mathbb{R}$, and the refuted claim is false. [step 1.2, step 3.1, L1] ∎

## Remarks

- **Why $\varepsilon_0 = 1/2$ and not $1$.** Any $\varepsilon_0 \le 1$ works, since the discrepancy produced is exactly $1$. Taking $1/2$ leaves the inequality strict and makes it visible that the failure is not a boundary effect.

- **Restricting the domain repairs it completely.** The restriction of $\mathbf{1}_{\mathbb{Q}}$ to $\mathbb{Q}$ is constantly $1$ and the restriction to the irrationals is constantly $0$; both are continuous. This is the standard warning that continuity is a property of the pair (function, domain), recorded in [[def-continuity-real]]: continuity passes to subsets of the domain, never up from them.

- **A near miss worth naming.** Multiplying by $x$ repairs continuity at exactly one point: $x \mapsto x\,\mathbf{1}_{\mathbb{Q}}(x)$ is continuous at $0$ and nowhere else, which is [[ex-x-times-dirichlet-is-continuous-exactly-at-zero]]. The same argument as above, applied to any function taking two distinct values densely, shows nowhere-continuity; in particular the function equal to $1$ on $\mathbb{Q}$ and $-1$ elsewhere is nowhere continuous while its absolute value is constant.
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-dirichlet-is-nowhere-continuous",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
  ],
  "rationale": "Zakon gives exactly the rational indicator and proves that it is discontinuous at every real because rationals and irrationals meet every neighbourhood. The local proof is the same density argument.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-cantor-continuity.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Let $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with $\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-q-and-irrationals-dense-r",
      "source_section": "Statement",
      "quote": "Write $\\mathbb{Q}_{\\mathbb{R}}$ for the image of $\\mathbb{Q}$ in $\\mathbb{R}$ under the canonical embedding $q \\mapsto \\hat q$ ([[lem-rat-embeds-dense]]), the set usually written $\\mathbb{Q}$ once the identification is made, and put $X := \\mathbb{R} \\setminus \\mathbb{Q}_{\\mathbb{R}}$ for the irrationals. Then: 1. $\\mathbb{Q}_{\\mathbb{R}}$ is dense in $\\mathbb{R}$, that is, $\\overline{\\mathbb{Q}_{\\mathbb{R}}} = \\mathbb{R}$ ([[def-limit-point-r]]); 2. $X$ is dense in $\\mathbb{R}$; 3. every nonempty open subset of $\\mathbb{R}$ is uncountable ([[def-countable]]).",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$. - $x$ is a **limit point** (or *accumulation point*) of $A$ when $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$. - $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$. - The **derived set** of $A$ is $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$ - $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "for $x \\in \\mathbb{R}$ and rational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in [[def-interior-closure-boundary-r]] and derived set $A'$ as in [[def-limit-point-r]]. Write $$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$ for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then: 1. $\\overline{A} = E$. 2. $\\overline{A} = A \\cup A'$. 3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$. 4. $A$ is closed if and only if $A = \\overline{A}$, if and only if $A' \\subseteq A$. Claim 3 is the content of the definition of $\\overline{A}$ and is restated here so that the four descriptions stand together; claims 1, 2 and 4 are the ones that carry work.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "- The **interior** of $A$ is the union of all open subsets of $A$: $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$ - The **closure** of $A$ is the intersection of all closed supersets of $A$: $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$ - The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$. - The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and $0 < \\delta \\le \\varepsilon - |y - x|$, then",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "1.1",
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1",
        "1.2",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$\\mathbf{1}_{\\mathbb{Q}}$ is a well-defined function on $\\mathbb{R}$ taking only the values $0$ and $1$, and $\\mathbb{R}$ is the disjoint union of $\\mathbb{Q}$ and $X$.",
      "step": "1.1",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Let $c \\in \\mathbb{R}$ be arbitrary, put $\\varepsilon_0 := 1/2 > 0$, and let a real $\\delta > 0$ be given.",
      "step": "1.2",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By [L2] and [L3] the neighbourhood $N_{\\delta}(c)$ meets $\\mathbb{Q}$ and it meets $X$: there are reals $p \\in N_{\\delta}(c) \\cap \\mathbb{Q}$ and $z \\in N_{\\delta}(c) \\cap X$, so $|p - c| < \\delta$ and $|z - c| < \\delta$, with $\\mathbf{1}_{\\mathbb{Q}}(p) = 1$ ",
      "step": "2.1",
      "inputs": [
        "L2",
        "L3",
        "1.2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "If $c \\in \\mathbb{Q}$ then $\\mathbf{1}_{\\mathbb{Q}}(c) = 1$ and the point $x := z$ satisfies $|x - c| < \\delta$ and $|\\mathbf{1}_{\\mathbb{Q}}(x) - \\mathbf{1}_{\\mathbb{Q}}(c)| = |0 - 1| = 1 \\ge \\varepsilon_0$. If $c \\notin \\mathbb{Q}$ then $\\mathbf{1}_{\\mathbb{",
      "step": "3.1",
      "inputs": [
        "L4",
        "1.1",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So for the fixed $\\varepsilon_0 = 1/2$ no real $\\delta > 0$ serves at $c$, and by [L1] the function $\\mathbf{1}_{\\mathbb{Q}}$ is not continuous at $c$. As $c$ was an arbitrary real, it is continuous at no point of $\\mathbb{R}$, and the refuted claim is false.",
      "step": "4.1",
      "inputs": [
        "L1",
        "1.2",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The item uses a fixed nonempty real domain or fixed numerical witness, so no empty-domain branch is part of its claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1–4.1 treat an arbitrary c, including c=0, with the same rational/irrational density argument."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The two function values 0 and 1 give the fixed positive separation used in steps 2.1–4.1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 2.1 chooses a point of the opposite density class, so the witness never collapses to c."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement of `cex-dirichlet-is-nowhere-continuous` has no interval endpoint or one-sided endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 uses density to prove both neighbourhood intersections nonempty and then makes two local existential instantiations."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `cex-dirichlet-is-nowhere-continuous` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `cex-dirichlet-is-nowhere-continuous` is not an equivalence, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract by reading the item and each cited target from disk. Independent risk review occurs after A3/A4."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-q-and-irrationals-dense-r",
    "declared_target": "lem-q-and-irrationals-dense-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-closure-characterisations-r",
    "declared_target": "thm-closure-characterisations-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-interior-closure-boundary-r",
    "declared_target": "def-interior-closure-boundary-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-dirichlet-is-nowhere-continuous",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
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

## Full text of every cited or declared item (13)

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-interior-closure-boundary-r`

````markdown
---
id: def-interior-closure-boundary-r
kind: definition
title: "Interior, closure, boundary and exterior of a subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-neighbourhood-r, thm-open-set-algebra-r]
justified_by: []
aliases: []
landmark: true
short: "$A^{\\circ}$, $\\overline{A}$, $\\partial A$"
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
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- The **interior** of $A$ is the union of all open subsets of $A$:
  $$A^{\circ} \;:=\; \bigcup \{\, U \subseteq \mathbb{R} : U \text{ open and } U \subseteq A \,\}.$$
- The **closure** of $A$ is the intersection of all closed supersets of $A$:
  $$\overline{A} \;:=\; \bigcap \{\, F \subseteq \mathbb{R} : F \text{ closed and } A \subseteq F \,\}.$$
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus A^{\circ}$.
- The **exterior** of $A$ is $\operatorname{ext} A := (\mathbb{R} \setminus A)^{\circ}$.

**Both operators are well defined and deliver what their names claim.** The
family whose union defines $A^{\circ}$ always contains $\varnothing$, and the
family whose intersection defines $\overline{A}$ always contains $\mathbb{R}$,
so the second family is nonempty and both expressions denote subsets of
$\mathbb{R}$ without appeal to any convention about empty unions or
intersections. Moreover:

- $A^{\circ}$ is **open**, being a union of open sets
  ([[thm-open-set-algebra-r]], claim 1), and $A^{\circ} \subseteq A$, since
  every set in the family is a subset of $A$. It is therefore the **largest**
  open subset of $A$: any open $U \subseteq A$ is a member of the family and so
  $U \subseteq A^{\circ}$.
- $\overline{A}$ is **closed**, being an intersection of a nonempty family of
  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \subseteq
  \overline{A}$, since every set in the family contains $A$. It is therefore the
  **smallest** closed superset of $A$: any closed $F \supseteq A$ is a member of
  the family and so $\overline{A} \subseteq F$.

**Pointwise description of the interior.** For $x \in \mathbb{R}$,

$$x \in A^{\circ} \iff \text{there is } \varepsilon > 0 \text{ with } N_\varepsilon(x) \subseteq A .$$

If $x \in A^{\circ}$ then, $A^{\circ}$ being open and containing $x$, there is
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq A^{\circ} \subseteq A$.
Conversely if $N_\varepsilon(x) \subseteq A$ then $N_\varepsilon(x)$ is an open
subset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence
$x \in N_\varepsilon(x) \subseteq A^{\circ}$ ([[def-neighbourhood-r]]).

The corresponding pointwise description of the closure is not a definitional
matter and is proved separately, as [[thm-closure-characterisations-r]].

## Remarks

- **The four sets partition nothing by themselves, but three of them do.** For
  every $A$ the three sets $A^{\circ}$, $\partial A$ and $\operatorname{ext} A$
  are pairwise disjoint with union $\mathbb{R}$. This is not proved here and is
  not used on this page; what is used is only the definitions above and the
  characterisations of [[thm-closure-characterisations-r]].

- **Interior and closure are dual.** Complementation exchanges the two families
  above, since $U$ is open exactly when $\mathbb{R} \setminus U$ is closed, so
  $\mathbb{R} \setminus A^{\circ} = \overline{\mathbb{R} \setminus A}$ and
  $\mathbb{R} \setminus \overline{A} = (\mathbb{R} \setminus A)^{\circ} =
  \operatorname{ext} A$. The second identity is the reason the exterior is
  usually described as "the complement of the closure".

- **$A$ is open exactly when $A = A^{\circ}$, and closed exactly when
  $A = \overline{A}$.** For the first: $A^{\circ} \subseteq A$ always, and
  $A \subseteq A^{\circ}$ holds exactly when $A$ is one of the open subsets of
  $A$, that is, exactly when $A$ is open. The closure half is the same argument
  read the other way, and it is recorded as a claim of
  [[thm-closure-characterisations-r]] because the rest of that theorem needs it.

- **Boundary points may or may not belong to the set.** $\partial (0,1) =
  \partial [0,1] = \{0,1\}$, and the two boundary points lie outside the first
  set and inside the second; the boundary sees only the way the set meets its
  complement, not which side the edge is assigned to.
````

### `def-limit-point-r`

````markdown
---
id: def-limit-point-r
kind: definition
title: "Limit point, isolated point, adherent point, derived set, and dense subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r]
justified_by: []
aliases: [def-accumulation-point-r, def-derived-set-r, def-dense-in-r]
landmark: true
short: "limit point, isolated point, dense"
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
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]] and closure as in
[[def-interior-closure-boundary-r]].

- $x$ is an **adherent point** of $A$ when $N_\varepsilon(x) \cap A \ne
  \varnothing$ for every real $\varepsilon > 0$.
- $x$ is a **limit point** (or *accumulation point*) of $A$ when
  $N^{*}_\varepsilon(x) \cap A \ne \varnothing$ for every real
  $\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.
- $x$ is an **isolated point** of $A$ when $x \in A$ and there is a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \{x\}$.
- The **derived set** of $A$ is
  $$A' \;:=\; \{\, x \in \mathbb{R} : x \text{ is a limit point of } A \,\}.$$
- $A$ is **dense in $\mathbb{R}$** when $\overline{A} = \mathbb{R}$.

**A limit point is an adherent point**, since $N^{*}_\varepsilon(x) \subseteq
N_\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since
$x \in N_\varepsilon(x) \cap A$ ([[def-neighbourhood-r]]). So the adherent
points of $A$ are exactly the points of $A \cup A'$, a statement proved as part
of [[thm-closure-characterisations-r]].

**Limit point and isolated point are exact opposites inside $A$.** For
$x \in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point
of $A$. Indeed $N_\varepsilon(x) \cap A = \{x\}$ says precisely that
$N^{*}_\varepsilon(x) \cap A = \varnothing$, because $x$ itself always lies in
$N_\varepsilon(x) \cap A$ when $x \in A$; so the existence of an $\varepsilon$
witnessing isolation is the negation of the condition defining a limit point.
A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and
never both.

**A limit point need not belong to the set, and a point of the set need not be a
limit point.** Both possibilities occur, and the two examples that matter later
are $0$, which is a limit point of $\{\, 1/k : k \ge 1 \,\}$ without belonging
to it, and $0$ again, which belongs to $\{0\} \cup [1,2]$ as an isolated point.

## Remarks

- **Terminology: *limit point* here is about a set, never about a sequence.**
  This library reserves *subsequential limit* for the sequential notion
  ([[def-subsequential-limit]]), and the two are genuinely different: the
  constant sequence $x_k = 0$ has $0$ as a subsequential limit, while its set of
  values $\{0\}$ has no limit point at all. The distinction is the one
  [[def-subsequential-limit]] records under "Terminology", and it is respected
  throughout this page.

- **Density is defined through the closure, not through intervals.** Saying
  $\overline{A} = \mathbb{R}$ is equivalent to saying that every nonempty open
  subset of $\mathbb{R}$ meets $A$, and also to saying that every neighbourhood
  of every real meets $A$; the equivalences follow from
  [[thm-closure-characterisations-r]] and are used in that form in
  [[lem-q-and-irrationals-dense-r]].

- **The derived set need not be comparable with the set.** It can be strictly
  larger, as for $\mathbb{Q}$: every punctured neighbourhood of any real
  contains a rational, since density supplies one strictly between $x$ and
  $x + \varepsilon$ ([[lem-q-and-irrationals-dense-r]]), so the derived set of
  $\mathbb{Q}$ is all of $\mathbb{R}$. It can be strictly smaller, as for
  $\{0\}$, whose derived set is empty; and it can be neither, as for
  $\{0\} \cup (1,2)$, whose derived set is $[1,2]$, a set containing points
  outside the original and omitting the point $0$ of it. A closed set satisfying
  $A \subseteq A'$ is called perfect ([[def-perfect-set-r]]).
````

### `def-neighbourhood-r`

````markdown
---
id: def-neighbourhood-r
kind: definition
title: "The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-order, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, def-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
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
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.1 and §1.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]) and its absolute value ([[def-abs-value]]).

Let $x \in \mathbb{R}$ and let $\varepsilon \in \mathbb{R}$ with
$\varepsilon > 0$. The **$\varepsilon$-neighbourhood of $x$** is

$$N_\varepsilon(x) \;:=\; \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\},$$

and the **punctured $\varepsilon$-neighbourhood of $x$** is

$$N^{*}_\varepsilon(x) \;:=\; N_\varepsilon(x) \setminus \{x\} \;=\; \{\, y \in \mathbb{R} : 0 < |y - x| < \varepsilon \,\}.$$

The two descriptions of $N^{*}_\varepsilon(x)$ agree because $|y - x| = 0$ holds
exactly when $y = x$ ([[lem-of-abs-value]]).

**A neighbourhood is an open interval.** For every $x$ and every
$\varepsilon > 0$,

$$N_\varepsilon(x) \;=\; (x - \varepsilon,\ x + \varepsilon),$$

the interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for
$\varepsilon > 0$, the equivalence $|y - x| < \varepsilon \iff -\varepsilon <
y - x < \varepsilon$, and adding $x$ throughout turns the right-hand side into
$x - \varepsilon < y < x + \varepsilon$ ([[def-ordered-field]]).

**The centre lies in its own neighbourhoods.** $x \in N_\varepsilon(x)$, since
$|x - x| = |0| = 0 < \varepsilon$ ([[lem-of-abs-value]]).

**Punctured neighbourhoods are never empty.** The element
$y := x + \varepsilon/2$ satisfies $|y - x| = \varepsilon/2$, which is
$> 0$ and $< \varepsilon$, so $y \in N^{*}_\varepsilon(x)$
([[lem-of-abs-value]], [[def-ordered-field]]).

**Monotonicity in the radius.** If $0 < \delta \le \varepsilon$ then
$N_\delta(x) \subseteq N_\varepsilon(x)$, because $|y - x| < \delta \le
\varepsilon$ ([[def-ordered-field]]).

**Nesting at an interior point.** If $y \in N_\varepsilon(x)$ and
$0 < \delta \le \varepsilon - |y - x|$, then

$$N_\delta(y) \;\subseteq\; N_\varepsilon(x).$$

Indeed for $z \in N_\delta(y)$ the triangle inequality
([[lem-of-triangle-inequality]]) gives
$|z - x| = |(z - y) + (y - x)| \le |z - y| + |y - x| < \delta + |y - x| \le
\varepsilon$. Note that $\varepsilon - |y - x| > 0$ precisely because
$y \in N_\varepsilon(x)$, so such a $\delta$ always exists.

## Remarks

- **The radius is a real number, not a rational.** Nothing on this page tests a
  condition against rational radii only. That convention belongs to
  [[def-real-limit]], where the quantifier is over rational $\varepsilon$ and
  the passage between the rational and the real form is the sanctioned remark of
  [[def-sequence]]. Here $\varepsilon$ ranges over the positive reals
  throughout, and every statement above is proved for an arbitrary positive
  real.

- **Why the punctured version is separated out.** A limit point of a set is a
  point every punctured neighbourhood of which meets the set
  ([[def-limit-point-r]]), and deleting the centre is exactly what stops a point
  of the set from qualifying automatically. The unpunctured condition defines
  the weaker notion of an adherent point, and the difference between the two is
  precisely an isolated point.

- **Nesting is the workhorse.** Almost every openness verification on this page
  has the shape "given $y$ in the set, shrink the radius by the distance
  already travelled", which is the nesting property above. It is recorded here
  once so that no later proof has to redo the triangle inequality in passing.
````

### `def-open-and-closed-in-r`

````markdown
---
id: def-open-and-closed-in-r
kind: definition
title: "Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-interval, def-complete-ordered-field, def-ordered-field, def-real-order, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "open, closed, clopen in $\\mathbb{R}$"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## Remarks

- **Open and closed are not opposites, and not exhaustive.** A set may be
  neither: the half-open interval $[0,1)$ is neither open nor closed
  ([[fs-every-set-is-open-or-closed]]). A set may be both: $\varnothing$ and
  $\mathbb{R}$ are clopen. The words are inherited from the interval terminology
  of [[def-interval]], and the agreement between the two usages is exactly the
  two lists verified above: an interval called open there is an open set here,
  and an interval called closed there is a closed set here.

- **A clopen set is a disconnection waiting to happen.** If $A$ is clopen and
  both $A$ and $\mathbb{R} \setminus A$ are nonempty, then each of the two is
  its own closure, so the two are separated in the sense of
  [[def-connected-r]] and $\mathbb{R} = A \cup (\mathbb{R} \setminus A)$ is a
  disconnection. Since $\mathbb{R}$ is order-convex it is connected
  ([[thm-connected-subsets-of-r-are-intervals]]), so no such $A$ exists:
  $\varnothing$ and $\mathbb{R}$ are the only clopen subsets of $\mathbb{R}$.

- **The half-open forms are the ones the two lists omit**, and deliberately so:
  $[a,b)$ and $(a,b]$ with $a < b$ are neither open nor closed as subsets of
  $\mathbb{R}$.

- **The radius depends on the point.** Openness asks for *some* $\varepsilon$
  at each point, and that $\varepsilon$ may shrink to nothing as the point
  approaches the edge of the set, as the computation for $(a,b)$ shows: there
  $\delta = \min\{x - a,\ b - x\}$ tends to $0$ as $x$ tends to either endpoint.
  Asking instead for a single $\varepsilon$ that works simultaneously at every
  point of the set is a strictly stronger condition, and it is not what is
  defined here; nothing on this page uses it.
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

### `ex-x-times-dirichlet-is-continuous-exactly-at-zero`

````markdown
---
id: ex-x-times-dirichlet-is-continuous-exactly-at-zero
kind: example
title: "$x \\cdot 1_{\\mathbb{Q}}(x)$ is continuous at $0$ and at no other point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-dirichlet-is-nowhere-continuous, def-continuity-real, cor-of-reverse-triangle, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-neighbourhood-r, def-max-min, lem-finite-set-has-max, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x\\,1_{\\mathbb{Q}}$ continuous only at $0$"
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
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Boman and R. Rogers, An Analytic Definition of Continuity"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Real_Analysis_%28Boman_and_Rogers%29/06%3A_Continuity_-_What_It_Isnt_and_What_It_Is/6.01%3A_An_Analytic_De%EF%AC%81nition_of_Continuity"
pipeline_run: null
---

## Example

Let $\mathbf{1}_{\mathbb{Q}}$ be the indicator of the rationals
([[cex-dirichlet-is-nowhere-continuous]]) and put

$$h : \mathbb{R} \to \mathbb{R}, \qquad h(x) := x \cdot \mathbf{1}_{\mathbb{Q}}(x),$$

so $h(x) = x$ for rational $x$ and $h(x) = 0$ for irrational $x$. Then:

1. $h$ is **continuous at $0$** ([[def-continuity-real]]);
2. $h$ is **not continuous at any $c \ne 0$**.

So the set of points of continuity of a real function can be a single point.
Together with [[cex-dirichlet-is-nowhere-continuous]], where that set is empty,
this shows how little the set of continuity points is constrained by the mere
existence of the function.

**The point of the example.** Continuity at $c$ compares $h(x)$ with $h(c)$, and
the two branches of $h$ agree only where $x = 0$. Multiplying the indicator by
$x$ damps the jump: near $0$ both branches are small, so the discrepancy is at
most $|x|$; away from $0$ the discrepancy is at least $|c|/2$ on every
neighbourhood, because each branch is realised arbitrarily close to $c$.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals with complement $X := \mathbb{R} \setminus \mathbb{Q}$, and $h : \mathbb{R} \to \mathbb{R}$ with $h(x) = x$ for $x \in \mathbb{Q}$ and $h(x) = 0$ for $x \in X$.

[L1] Continuity at $c$, in the form of [[def-continuity-real]]: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|h(x) - h(c)| < \varepsilon$ whenever $|x - c| < \delta$; and it fails at $c$ as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a real $x$ with $|x-c| < \delta$ and $|h(x) - h(c)| \ge \varepsilon_0$ ([[def-neighbourhood-r]]).

[L2] Both $\mathbb{Q}$ and $X$ are dense in $\mathbb{R}$, so every $N_{\delta}(c)$ meets each of them ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]]).

[L3] $X$ is by definition the complement $\mathbb{R} \setminus \mathbb{Q}$, so every real lies in exactly one of $\mathbb{Q}$ and $X$; hence $h$ is a well-defined function, and $|h(x)| \le |x|$ for every real $x$ ([[lem-of-abs-value]], [[cex-dirichlet-is-nowhere-continuous]]).

[L4] Absolute value and order: $|u| \ge 0$ and $|u| > 0$ exactly when $u \ne 0$ ([[lem-of-abs-value]]); the reverse triangle inequality $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u - v| \ge |u| - |v|$ ([[cor-of-reverse-triangle]]); and the minimum of a two-element set of reals exists and is one of the two ([[lem-finite-set-has-max]], [[def-max-min]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $h$ is well defined and satisfies $|h(x)| \le |x|$ for every real $x$: on $\mathbb{Q}$ one has $|h(x)| = |x|$ and on $X$ one has $|h(x)| = 0 \le |x|$. Also $0 \in \mathbb{Q}$, so $h(0) = 0$. [L3, L4]

1.2 **Claim 2, the setup.** Let $c \ne 0$ be real, put $\varepsilon_0 := |c|/2 > 0$ by [L4], and let a real $\delta > 0$ be given. Put $\delta' := \min\{\delta,\ |c|/2\} > 0$ by [L4]. [L4, choose]

2.1 **Claim 1.** Let a real $\varepsilon > 0$ be given and take $\delta := \varepsilon$. Every real $x$ with $|x - 0| < \delta$ satisfies $|h(x) - h(0)| = |h(x)| \le |x| < \varepsilon$ by step 1.1. So $h$ is continuous at $0$. [step 1.1, L1, L4]

2.2 By [L2] the neighbourhood $N_{\delta'}(c)$ meets $\mathbb{Q}$ and meets $X$: fix $p \in N_{\delta'}(c) \cap \mathbb{Q}$ and $z \in N_{\delta'}(c) \cap X$, so $|p - c| < \delta' \le \delta$ and $|z - c| < \delta' \le \delta$, with $h(p) = p$ and $h(z) = 0$. [step 1.2, L2, choose]

3.1 **The rational case.** Suppose $c \in \mathbb{Q}$, so $h(c) = c$. Take $x := z$: then $|x - c| < \delta$ and $|h(x) - h(c)| = |0 - c| = |c| \ge |c|/2 = \varepsilon_0$. [step 1.2, step 2.2, L3, L4]

3.2 **The irrational case.** Suppose $c \in X$, so $h(c) = 0$. Take $x := p$: then $|x - c| < \delta$, and $|p| \ge |c| - |p - c| > |c| - |c|/2 = |c|/2$ by [L4] and step 2.2, so $|h(x) - h(c)| = |p| > |c|/2 = \varepsilon_0$. [step 1.2, step 2.2, L3, L4]

4.1 By [L3] the two cases of steps 3.1 and 3.2 are exhaustive, so for every real $\delta > 0$ some $x$ with $|x-c| < \delta$ has $|h(x) - h(c)| \ge \varepsilon_0$; by [L1] the function $h$ is not continuous at $c$. Since $c \ne 0$ was arbitrary, claim 2 holds, and with step 2.1 the set of points of continuity of $h$ is exactly $\{0\}$. [step 2.1, step 3.1, step 3.2, L1, L3] ∎

## Remarks

- **Where the damping factor does its work.** The estimate $|h(x)| \le |x|$ of step 1.1 is the whole of claim 1, and it is available only because the two branches of $h$ agree at $0$. Replacing $x$ by any function vanishing at $0$ and continuous there gives the same conclusion at $0$; replacing it by a nonzero constant gives [[cex-dirichlet-is-nowhere-continuous]] back.

- **The choice of $\delta' = \min\{\delta, |c|/2\}$ is what makes the irrational case work.** Without shrinking to $|c|/2$ the rational point $p$ near $c$ could be close to $0$, and then $|h(p) - h(c)| = |p|$ would be small; the shrinking keeps $p$ away from $0$ by at least $|c|/2$.

- **This example is choice free**, for the same reason as [[cex-dirichlet-is-nowhere-continuous]]: density is used only in the form "every neighbourhood meets the set", never to build a sequence.
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

### `lem-q-and-irrationals-dense-r`

````markdown
---
id: lem-q-and-irrationals-dense-r
kind: lemma
title: "Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-rat-embeds-dense, def-limit-point-r, def-open-and-closed-in-r, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, cor-interval-uncountable, lem-subset-of-countable, def-countable, thm-rationals-countable, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
forward_refs: [ex-closure-interior-boundary-of-q]
aliases: []
landmark: false
short: "$\\mathbb{Q}$ and its complement are dense"
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
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is,
   $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[def-limit-point-r]]);
2. $X$ is dense in $\mathbb{R}$;
3. every nonempty open subset of $\mathbb{R}$ is uncountable
   ([[def-countable]]).

Claim 2 is not a symmetry of claim 1: the rationals are dense because they are
*constructed* to approximate, whereas the irrationals are dense because there are
too many points in any interval for a countable set to exhaust it, which is why
claim 3 is proved alongside and used for it.

## Facts & Assumptions

**Given:** The canonical embedding $q \mapsto \hat q$ of $\mathbb{Q}$ into $\mathbb{R}$, its image $\mathbb{Q}_{\mathbb{R}}$, and the complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\overline{A}$ is the set of points every neighbourhood of which meets $A$; $A$ is dense in $\mathbb{R}$ when $\overline{A} = \mathbb{R}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ for real $\varepsilon > 0$, and $x - \varepsilon < x + \varepsilon$ ([[def-neighbourhood-r]], [[def-interval]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ ([[def-open-and-closed-in-r]]).

[L4] Strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$, and $q \mapsto \hat q$ is injective ([[lem-rat-embeds-dense]]).

[L5] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); an injection is a bijection onto its image, and $\approx$ is symmetric and transitive ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L6] Every subset of an at most countable set is at most countable, and uncountable means not at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[L7] For $a < b$ the interval $(a,b)$ is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; by [L2] one has $x - \varepsilon < x + \varepsilon$, so [L4] supplies $\hat q$ with $x - \varepsilon < \hat q < x + \varepsilon$, that is $\hat q \in N_\varepsilon(x) \cap \mathbb{Q}_{\mathbb{R}}$. Every real is therefore an adherent point of $\mathbb{Q}_{\mathbb{R}}$ and claim 1 follows from [L1]. [L1, L2, L4]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is at most countable: the embedding is an injection of $\mathbb{Q}$ with image $\mathbb{Q}_{\mathbb{R}}$, hence a bijection onto it, so $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q} \approx \mathbb{N}$. [L4, L5]

1.3 For all reals $a < b$ the interval $(a,b)$ is uncountable. [L7]

2.1 For all reals $a < b$ the interval $(a,b)$ contains an irrational: if it did not, then $(a,b) \subseteq \mathbb{Q}_{\mathbb{R}}$, so $(a,b)$ would be a subset of an at most countable set by step 1.2 and hence at most countable by [L6], contradicting step 1.3. So some $z \in (a,b)$ lies in $X$. [step 1.2, step 1.3, L6]

2.2 Every nonempty open $U \subseteq \mathbb{R}$ is uncountable: fix $x \in U$ and, by [L3], a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; by [L2] the set $N_\varepsilon(x)$ is the interval $(x - \varepsilon, x + \varepsilon)$ with $x - \varepsilon < x + \varepsilon$, hence uncountable by step 1.3. Were $U$ at most countable, its subset $N_\varepsilon(x)$ would be at most countable by [L6], which it is not; so $U$ is uncountable, which is claim 3. [step 1.3, L2, L3, L6, choose]

3.1 $X$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; applying step 2.1 with $a = x - \varepsilon$ and $b = x + \varepsilon$ gives $z \in (x - \varepsilon, x + \varepsilon) \cap X$, which is $N_\varepsilon(x) \cap X$ by [L2]. Every real is therefore an adherent point of $X$, so $\overline{X} = \mathbb{R}$ by [L1], which is claim 2. [step 2.1, L1, L2]

4.1 Claims 1, 2 and 3 are steps 1.1, 3.1 and 2.2, so both $\mathbb{Q}_{\mathbb{R}}$ and its complement are dense in $\mathbb{R}$ and every nonempty open subset of $\mathbb{R}$ is uncountable. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **Two dense sets can be disjoint.** $\mathbb{Q}_{\mathbb{R}}$ and $X$ partition
  $\mathbb{R}$ and both are dense, so density says nothing about size: one of
  them is countable and the other is not
  ([[cor-irrationals-uncountable]]). What density does say is that neither has
  interior: a set whose complement is dense has empty interior, which is the
  computation carried out for $\mathbb{Q}$ in
  [[ex-closure-interior-boundary-of-q]].

- **Claim 3 is a statement about open sets, not about intervals.** It follows
  from the uncountability of intervals ([[cor-interval-uncountable]]) only
  because openness supplies an interval inside the set at each of its points.
  A nonempty set with empty interior can perfectly well be countable, as
  $\mathbb{Q}_{\mathbb{R}}$ shows.

- **An explicit irrational is not produced here.** Step 2.1 is a counting
  argument and exhibits nothing. The library does exhibit one separately,
  $\sqrt 2$ ([[thm-of-square-roots]], [[fs-sqrt2-rational]]), and an explicit
  irrational in a given interval $(a,b)$ can be built from it as
  $q_1 + (q_2 - q_1)/\sqrt 2$ for suitable rationals $q_1 < q_2$ in the
  interval; that route is longer and is not the one taken above.
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `lem-sequential-characterisation-of-closure-r`

````markdown
---
id: lem-sequential-characterisation-of-closure-r
kind: lemma
title: "A point lies in the closure of $A \\subseteq \\mathbb{R}$ iff some sequence in $A$ converges to it, so a subset of $\\mathbb{R}$ is closed iff it is sequentially closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-closure-characterisations-r, def-limit-point-r, def-real-limit, def-sequence, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, def-countable-choice, def-neighbourhood-r, def-interior-closure-boundary-r, def-open-and-closed-in-r]
justified_by: []
aliases: []
landmark: false
short: "closure = sequential closure"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.2(d))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with closure as in
[[def-interior-closure-boundary-r]] and sequences and convergence as in
[[def-sequence]] and [[def-real-limit]]. Then

$$x \in \overline{A} \iff \text{there is a sequence } (a_k)_{k \in \mathbb{N}} \text{ with } a_k \in A \text{ for every } k \text{ and } a_k \to x .$$

Consequently $A$ is closed if and only if it is **sequentially closed**: whenever
a sequence with all its terms in $A$ converges, its limit lies in $A$.

**The right-to-left direction is choice free; the left-to-right direction spends
$\mathrm{AC}_\omega$** ([[def-countable-choice]]). Producing a sequence from a
point of the closure requires selecting one point of $A$ from each of the
countably many sets $N_{1/(k+1)}(x) \cap A$, and this library has no canonical
rule for that selection, so the axiom of countable choice is invoked
explicitly at step 2.2 and nowhere else.

## Facts & Assumptions

**Given:** A subset $A \subseteq \mathbb{R}$ and a real $x$. Sequences are functions on $\mathbb{N}$, which contains $0$, so a sequence is $(a_k)_{k \in \mathbb{N}}$ and the radii used below are $1/(k+1)$ rather than $1/k$ ([[def-sequence]]).

[L1] $\overline{A}$ is exactly the set of adherent points of $A$, that is, of points every neighbourhood of which meets $A$; and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\}$ for real $\varepsilon > 0$ ([[def-neighbourhood-r]], [[def-open-and-closed-in-r]]).

[L3] $(a_k) \to x$ means: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|a_k - x| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]], [[def-sequence]]).

[L4] Strictly between any two reals lies a rational; in particular for every real $\varepsilon > 0$ there is a rational $q$ with $0 < q < \varepsilon$ ([[lem-rat-embeds-dense]]).

[L5] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L6] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ and $m \le n$ in $\mathbb{N}$ gives $m \cdot 1_{\mathbb{R}} \le n \cdot 1_{\mathbb{R}}$ ([[lem-of-naturals-positive]]); a positive element has a positive inverse and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L7] Countable choice: for every family $(X_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function $f$ with domain $\mathbb{N}$ such that $f(k) \in X_k$ for every $k$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 For the right-to-left implication, assume $a_k \in A$ for every $k \in \mathbb{N}$ and $a_k \to x$, and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L3]

1.2 For the left-to-right implication, assume $x \in \overline{A}$; then for every $k \in \mathbb{N}$ the radius $1/(k+1)$ is a positive real and the set $X_k := N_{1/(k+1)}(x) \cap A$ is nonempty, because $x$ is an adherent point of $A$ by [L1]. [assume-hyp, L1, L2, L6]

2.1 Fix a rational $q$ with $0 < q < \varepsilon$ by [L4], and then $K \in \mathbb{N}$ with $|a_k - x| < q$ for all $k \ge K$ by [L3]; in particular $|a_K - x| < q < \varepsilon$, so $a_K \in N_\varepsilon(x) \cap A$ and that intersection is nonempty. As $\varepsilon$ was an arbitrary positive real, $x$ is an adherent point of $A$, hence $x \in \overline{A}$ by [L1]. [step 1.1, L1, L2, L3, L4, choose]

2.2 Apply [L7] to the family $(X_k)_{k \in \mathbb{N}}$ of step 1.2 and fix $f$ with $f(k) \in X_k$ for every $k$; putting $a_k := f(k)$ gives a sequence with $a_k \in A$ and $|a_k - x| < 1/(k+1)$ for every $k \in \mathbb{N}$. [step 1.2, L2, L7, choose]

3.1 That sequence converges to $x$: let $\varepsilon > 0$ be rational, fix by [L5] a natural $n \ge 1$ with $1/n < \varepsilon$, and put $K := n - 1$, a natural number since $n \ge 1$; for every $k \ge K$ one has $k + 1 \ge n \ge 1$, hence $0 < 1/(k+1) \le 1/n < \varepsilon$ by [L6], and therefore $|a_k - x| < 1/(k+1) < \varepsilon$. [step 2.2, L3, L5, L6, choose]

4.1 Step 2.1 gives the implication from right to left and steps 2.2 and 3.1 give it from left to right, so $x \in \overline{A}$ holds exactly when some sequence with all terms in $A$ converges to $x$. [step 2.1, step 2.2, step 3.1]

4.2 Sequential closedness: if $A$ is closed and a sequence with all terms in $A$ converges to some $y$, then $y \in \overline{A}$ by step 2.1 and $\overline{A} = A$ by [L1], so $y \in A$; conversely, if every convergent sequence with terms in $A$ has its limit in $A$, then any $y \in \overline{A}$ is the limit of the sequence produced by steps 2.2 and 3.1, hence lies in $A$, so $\overline{A} \subseteq A$, and with $A \subseteq \overline{A}$ this gives $A = \overline{A}$, that is, $A$ is closed. [step 2.1, step 2.2, step 3.1, L1]

5.1 Both assertions of the statement are proved, namely the sequential description of the closure in step 4.1 and the equivalence of closedness with sequential closedness in step 4.2. [step 4.1, step 4.2] ∎

## Remarks

- **Where the choice is spent, and why it cannot be avoided here.** Step 2.2 is
  the only appeal to [[def-countable-choice]]. A canonical selection would
  require a rule picking a distinguished element of an arbitrary nonempty subset
  of $\mathbb{R}$, and $\mathbb{R}$ carries no well-ordering that this library
  has constructed, so this library has no such rule to offer. Contrast
  [[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]], where
  the selection is from subsets of $\mathbb{N}$ and the least element is
  canonical.

- **The choice is genuinely confined to one direction.** Step 2.1 selects a
  single rational $q$ and a single index $K$ for one $\varepsilon$ at a time, and
  finitely many selections need no choice principle. So "the limit of a
  convergent sequence in a closed set lies in the set" is a theorem of ZF, and
  only the production of a sequence out of a point of the closure is not.

- **The indices start at $0$.** Since $\mathbb{N}$ contains $0$
  ([[def-sequence]]), the shrinking radii are $1/(k+1)$ and not $1/k$; the
  latter is undefined at $k = 0$. The threshold in step 3.1 is $K = n - 1$ for
  the same reason, and $n \ge 1$ is exactly what makes $K$ a natural number.
````

### `thm-closure-characterisations-r`

````markdown
---
id: thm-closure-characterisations-r
kind: theorem
title: "The closure equals the set together with its limit points, equals the set of points every neighbourhood of which meets it, and is the smallest closed superset; a set is closed iff it contains its limit points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-r, def-limit-point-r, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{A} = A \\cup A'$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.27)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, with closure $\overline{A}$ as in
[[def-interior-closure-boundary-r]] and derived set $A'$ as in
[[def-limit-point-r]]. Write

$$E \;:=\; \{\, x \in \mathbb{R} : N_\varepsilon(x) \cap A \ne \varnothing \text{ for every real } \varepsilon > 0 \,\}$$

for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:

1. $\overline{A} = E$.
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is the smallest closed superset of $A$: it is closed, it
   contains $A$, and it is contained in every closed $F$ with $A \subseteq F$.
4. $A$ is closed if and only if $A = \overline{A}$, if and only if
   $A' \subseteq A$.

Claim 3 is the content of the definition of $\overline{A}$ and is restated here
so that the four descriptions stand together; claims 1, 2 and 4 are the ones
that carry work.

## Facts & Assumptions

**Given:** A subset $A \subseteq \mathbb{R}$, and the set $E$ of adherent points of $A$ as displayed in the Statement.

[L1] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\} \subseteq N_\varepsilon(x)$; and if $y \in N_\varepsilon(x)$ then $\delta := \varepsilon - |y - x| > 0$ and $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L3] $\overline{A}$ is the intersection of the nonempty family of closed supersets of $A$; it is closed, it contains $A$, and it is contained in every closed superset of $A$ ([[def-interior-closure-boundary-r]], [[thm-open-set-algebra-r]]).

[L4] $x$ is an adherent point of $A$ when every $N_\varepsilon(x)$ meets $A$, a limit point when every $N^{*}_\varepsilon(x)$ meets $A$, and $A'$ is the set of limit points ([[def-limit-point-r]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq E$: for $x \in A$ and any $\varepsilon > 0$ one has $x \in N_\varepsilon(x) \cap A$, so that intersection is nonempty. [L2, L4]

1.2 Let $x \in \mathbb{R} \setminus E$; by the definition of $E$ there is a real $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \varnothing$. [L4, choose]

1.3 Let $F$ be closed with $A \subseteq F$, and let $x \in \mathbb{R} \setminus F$; since $\mathbb{R} \setminus F$ is open there is a real $\eta > 0$ with $N_\eta(x) \subseteq \mathbb{R} \setminus F$. [L1, choose]

2.1 For every $y \in N_\varepsilon(x)$ the radius $\delta := \varepsilon - |y - x|$ is positive and $N_\delta(y) \subseteq N_\varepsilon(x)$, so $N_\delta(y) \cap A = \varnothing$ and $y \notin E$; hence $N_\varepsilon(x) \subseteq \mathbb{R} \setminus E$, and since $x$ was an arbitrary point of $\mathbb{R} \setminus E$ that set is open, that is, $E$ is closed. [step 1.2, L1, L2, L4]

2.2 From $N_\eta(x) \subseteq \mathbb{R} \setminus F \subseteq \mathbb{R} \setminus A$ we get $N_\eta(x) \cap A = \varnothing$, so $x \notin E$; hence $\mathbb{R} \setminus F \subseteq \mathbb{R} \setminus E$, that is, $E \subseteq F$, for every closed $F \supseteq A$. [step 1.3, L4]

3.1 By steps 1.1 and 2.1 the set $E$ is a closed superset of $A$, so $\overline{A} \subseteq E$ by the leastness in [L3]; and $\overline{A}$ is itself a closed superset of $A$ by [L3], so step 2.2 applied to $F = \overline{A}$ gives $E \subseteq \overline{A}$. Hence $\overline{A} = E$, which is claim 1. [step 1.1, step 2.1, step 2.2, L3]

4.1 $E = A \cup A'$: if $x \in E$ and $x \notin A$ then for every $\varepsilon > 0$ some $a \in N_\varepsilon(x) \cap A$ exists, and $a \ne x$ because $x \notin A$, so $a \in N^{*}_\varepsilon(x) \cap A$ and $x \in A'$; conversely $A \subseteq E$ by step 1.1, and $A' \subseteq E$ because $N^{*}_\varepsilon(x) \subseteq N_\varepsilon(x)$. Combining with step 3.1 gives $\overline{A} = A \cup A'$, which is claim 2. [step 1.1, step 3.1, L2, L4]

5.1 Claim 4: if $A$ is closed then $A$ is a closed superset of itself, so $\overline{A} \subseteq A$ by [L3], while $A \subseteq \overline{A}$ by [L3], whence $A = \overline{A}$; conversely if $A = \overline{A}$ then $A$ is closed because $\overline{A}$ is. Finally $A = \overline{A}$ says $A = A \cup A'$ by step 4.1, and $A = A \cup A'$ holds exactly when $A' \subseteq A$. [step 4.1, L3]

6.1 Claim 3 is [L3] restated, and claims 1, 2 and 4 are steps 3.1, 4.1 and 5.1, so all four hold. [step 3.1, step 4.1, step 5.1, L3] ∎

## Remarks

- **Which claim does the work in practice.** Claim 1 is the one used almost
  everywhere below: to show a point lies in $\overline{A}$ one exhibits, for each
  $\varepsilon > 0$, a point of $A$ within $\varepsilon$ of it. Claim 2 is what
  separates the two ways a point can be adherent, by membership or by
  accumulation, and it is what makes the notion of an isolated point visible.

- **No special property of $\mathbb{R}$ is used.** The argument uses the
  definitions of open, closed, neighbourhood and closure, and the order enters
  only through the nesting property of neighbourhoods; neither the
  least-upper-bound property nor the Archimedean property appears at any step.
  The results of this page that do use them are flagged in
  [[rem-r-native-topology-scope]].

- **The sequential form is a separate theorem and costs more.** Replacing
  "every neighbourhood meets $A$" by "some sequence in $A$ converges to $x$" is
  [[lem-sequential-characterisation-of-closure-r]], and the passage from the
  first to the second spends the axiom of countable choice, since it selects one
  point of $A$ from each of infinitely many neighbourhoods. The characterisation
  proved above is choice free.
````

### `thm-sequential-criterion-for-continuity`

````markdown
---
id: thm-sequential-criterion-for-continuity
kind: theorem
title: "$f$ is continuous at $c \\in A$ if and only if $f(x_k) \\to f(c)$ for every sequence in $A$ converging to $c$, the converse direction costing countable choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-sequential-criterion-for-function-limits, rem-heine-criterion-choice-cost, def-countable-choice, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-sequence, def-real-limit, lem-rat-embeds-dense, lem-of-abs-value]
justified_by: []
aliases: [thm-heine-criterion-for-continuity]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "sequential criterion for continuity"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. The
following are equivalent.

1. $f$ is continuous at $c$ ([[def-continuity-real]]).
2. For **every** sequence $(x_k)_{k \in \mathbb{N}}$ with $x_k \in A$ for every
   $k$ and $x_k \to c$ ([[def-sequence]], [[def-real-limit]]), the sequence
   $\bigl(f(x_k)\bigr)_{k \in \mathbb{N}}$ converges to $f(c)$.

**The sequences here are not required to avoid $c$**, which is the one
difference from [[thm-sequential-criterion-for-function-limits]] and is exactly
what makes the criterion available at an isolated point of $A$, where no limit
exists.

**The two directions do not cost the same.** The implication from 1 to 2 is
proved in ZF: the sequence is handed to the proof and nothing is selected. The
implication from 2 to 1 is obtained below from
[[thm-sequential-criterion-for-function-limits]], and therefore inherits the one
use of the axiom of countable choice ([[def-countable-choice]]) made in that
theorem's converse direction. What this library does and does not claim about
that cost is recorded once, in [[rem-heine-criterion-choice-cost]], and is not
restated here.

**Nothing else on this page is routed through this theorem.** The algebra of
continuous functions, composition, the intermediate value theorem, the extreme
value theorem and Heine-Cantor are all proved from $\varepsilon$ and $\delta$,
or from compactness, exactly as the previous page organised itself. The
choice-free direction 1 to 2 *is* used, in the intermediate value theorem and in
Heine-Cantor, and each of those two items says which direction it uses.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; $c$ is isolated in $A$ when $N_{\eta}(c) \cap A = \{c\}$ for some real $\eta > 0$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] At a limit point $c$ of $A$, $f$ is continuous at $c$ if and only if the limit of $f$ at $c$ exists and equals $f(c)$; at an isolated point of $A$ every function is continuous ([[def-continuity-real]], [[def-function-limit]]).

[L4] Heine criterion for limits: at a limit point $c$ of $A$, $\lim_{x \to c} f(x) = L$ holds if and only if $f(x_k) \to L$ for every sequence $(x_k)$ with $x_k \in A$, $x_k \ne c$ for every $k$, and $x_k \to c$. The direction from the limit to sequences is a theorem of ZF; the converse uses the axiom of countable choice exactly once ([[thm-sequential-criterion-for-function-limits]], [[def-countable-choice]]).

[L5] Convergence of a real sequence: $x_k \to x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$; below every positive real lies a positive rational, so the test may equally be run at every real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L6] Absolute value: $|u| \ge 0$, and $|u| = 0$ exactly when $u = 0$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 **The isolated case, both statements at once.** Suppose $c$ is an isolated point of $A$ and fix a real $\eta > 0$ with $N_{\eta}(c) \cap A = \{c\}$. Then statement 1 holds by [L3]. Statement 2 also holds: if $x_k \in A$ for every $k$ and $x_k \to c$, then by [L5] there is $K$ with $|x_k - c| < \eta$ for all $k \ge K$, so $x_k \in N_{\eta}(c) \cap A = \{c\}$ and hence $x_k = c$ and $f(x_k) = f(c)$ for all $k \ge K$; a sequence eventually equal to $f(c)$ converges to $f(c)$, since $|f(x_k) - f(c)| = 0 < \varepsilon$ for $k \ge K$. So 1 and 2 are both true, and in particular equivalent. [L2, L3, L5, L6]

1.2 **The limit-point case, from 1 to 2.** Suppose $c$ is a limit point of $A$ and that $f$ is continuous at $c$. Let $(x_k)$ satisfy $x_k \in A$ for every $k$ and $x_k \to c$, and let a rational $\varepsilon > 0$ be given. By [L1] fix a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ satisfying $|x - c| < \delta$; by [L5] fix $K$ with $|x_k - c| < \delta$ for all $k \ge K$. Every such $k$ has $x_k \in A$ and $|x_k - c| < \delta$, hence $|f(x_k) - f(c)| < \varepsilon$. As the rational $\varepsilon > 0$ was arbitrary, $f(x_k) \to f(c)$. Nothing was selected, so this is a theorem of ZF. [L1, L5]

1.3 **The limit-point case, from 2 to 1.** Suppose $c$ is a limit point of $A$ and that statement 2 holds. Every sequence $(x_k)$ with $x_k \in A$, $x_k \ne c$ for every $k$, and $x_k \to c$ is in particular a sequence in $A$ converging to $c$, so statement 2 gives $f(x_k) \to f(c)$. That is the right-hand side of [L4] with $L := f(c)$, so [L4] yields that the limit of $f$ at $c$ exists and equals $f(c)$, and [L3] turns that into continuity of $f$ at $c$. This is the direction that inherits the single use of countable choice made in [L4]. [L3, L4]

2.1 By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$. In the first case step 1.1 proves both statements outright; in the second, step 1.2 gives 1 implies 2 and step 1.3 gives 2 implies 1. So statements 1 and 2 are equivalent, with the first implication free of choice and the second inheriting exactly one application of countable choice. [step 1.1, step 1.2, step 1.3, L2] ∎

## Remarks

- **Why the sequences are allowed to hit $c$.** [[thm-sequential-criterion-for-function-limits]] must exclude $c$, because [[def-function-limit]] says nothing about $f(c)$ and a sequence constantly equal to $c$ would test the wrong thing. Continuity does look at $f(c)$, so no exclusion is needed, and dropping it is what makes statement 2 meaningful at an isolated point, where the only sequences converging to $c$ are those eventually equal to $c$.

- **What the choice cost is, and what it is not.** The claim recorded here is that the proof *given above* of 2 implies 1 uses countable choice, through [[thm-sequential-criterion-for-function-limits]]. No claim is made that it is necessary; [[rem-heine-criterion-choice-cost]] states in full what this library does and does not assert, including Sierpiński's ZF theorem that a function continuous sequentially at *every* point of $\mathbb{R}$ is continuous, which shows the everywhere-statement and the pointwise statement behave differently.

- **The negative use is the common one.** To show that $f$ is *not* continuous at $c$ it suffices to exhibit one sequence in $A$ converging to $c$ whose image sequence does not converge to $f(c)$, and that uses only the choice-free direction. [[cex-dirichlet-is-nowhere-continuous]] on the companion page is proved without sequences at all, directly from density, which is cheaper still.
````

