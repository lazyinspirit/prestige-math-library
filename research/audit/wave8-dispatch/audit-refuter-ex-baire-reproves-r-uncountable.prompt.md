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

- critical risk (10): 16 declared dependencies; 16 cited facts; biconditional / both-direction claim; boundary-sensitive language

## Target item — `ex-baire-reproves-r-uncountable`

Normalized current SHA-256: `83c4894bb39dd5706958a288cf706bdd76d74dceaee19386584d180f70c0fbcd`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-baire-reproves-r-uncountable
kind: example
title: "Baire category gives a third proof that $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-baire-category-r, def-nowhere-dense-meager, thm-r-uncountable, def-countable, lem-countable-iff-surjection-from-n, def-interval, def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-injection-surjection-bijection, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Cantor's first set theory article (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_first_set_theory_article"
    - title: "Baire theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Baire_theorem"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Example

$\mathbb{R}$ is uncountable ([[def-countable]]), by [[thm-baire-category-r]]: a
singleton is nowhere dense, so a listing of $\mathbb{R}$ would present
$\mathbb{R}$ as a countable union of nowhere dense sets, which the Baire theorem
forbids.

This is the third proof of the fact in this library. The first is Cantor's
nested-interval argument of 1874 ([[thm-r-uncountable]]); the second is the
perfect-set theorem applied to a closed interval
([[thm-perfect-set-uncountable-r]]); this one isolates what the first two have in
common, namely completeness used through nested intervals, and packages it once.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$.

[L1] If $(A_n)_{n \in \mathbb{N}}$ is a sequence of nowhere dense subsets of $\mathbb{R}$ then $\bigcup_n A_n \ne \mathbb{R}$ ([[thm-baire-category-r]]).

[L2] A closed set is nowhere dense exactly when its interior is empty ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L3] $U$ is open when every point of it has a neighbourhood inside it, $F$ is closed when its complement is open, and $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ contains $x$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L4] A nonempty at most countable set admits a surjection from $\mathbb{N}$, and uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]], [[def-injection-surjection-bijection]]).

[L5] $\mathbb{R}$ is uncountable, by Cantor's nested-interval argument ([[thm-r-uncountable]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $0 < \varepsilon \cdot 2^{-1} < \varepsilon$ for $\varepsilon > 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 For $c \in \mathbb{R}$ the singleton $\{c\}$ is nowhere dense: it is closed, since $x \ne c$ gives $N_{|x-c|}(x) \subseteq \mathbb{R} \setminus \{c\}$ by [L3]; and its interior is empty, since for every real $\varepsilon > 0$ the point $c + \varepsilon \cdot 2^{-1}$ lies in $N_\varepsilon(c)$ and differs from $c$ by [L6], so no neighbourhood of $c$ is contained in $\{c\}$. By [L2] it is nowhere dense. [L2, L3, L6]

2.1 Let $s : \mathbb{N} \to \mathbb{R}$ be any function. The sets $A_n := \{s(n)\}$ are nowhere dense by step 1.1, so $\bigcup_n A_n \ne \mathbb{R}$ by [L1]; but $\bigcup_n A_n$ is exactly the image of $s$, so $s$ is not surjective. [step 1.1, L1]

3.1 Hence there is no surjection $\mathbb{N} \to \mathbb{R}$. Since $\mathbb{R}$ is nonempty, [L4] gives that $\mathbb{R}$ is not at most countable, that is, $\mathbb{R}$ is uncountable, which is [L5] reproved along an independent route. [step 2.1, L4, L5] ∎

## Remarks

- **The proof is not circular.** [[thm-baire-category-r]] is proved from the
  nested interval property and an enumeration of $\mathbb{Q}$, and it nowhere uses
  the uncountability of $\mathbb{R}$; nor does it use
  [[thm-perfect-set-uncountable-r]]. What it shares with both is
  [[thm-nested-interval-property]], and that is the one ingredient no proof of
  uncountability here avoids.

- **It proves more than uncountability.** The same argument shows that
  $\mathbb{R}$ is not a countable union of nowhere dense sets, of which "not a
  countable union of singletons" is the weakest case. So it also shows, for
  instance, that $\mathbb{R}$ is not the union of countably many Cantor sets,
  each of which is nowhere dense ([[thm-cantor-set-properties]]).

- **What it does not give.** It gives no cardinality beyond "not at most
  countable", and in particular says nothing about a bijection with
  $\mathcal{P}(\mathbb{N})$. For the Cantor set that stronger information is
  available through the digit description
  ([[thm-cantor-set-ternary-description]]), and it is what makes
  [[fs-cantor-set-countable]] fail so badly.
````

## Wave 8 provenance row for the target

```json
{
  "id": "ex-baire-reproves-r-uncountable",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Baire_theorem",
    "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
  ],
  "rationale": "Baire category implies that a complete metric space without isolated points is uncountable; the sources give the theorem and the rationals-as-meager example. The local proof is a fresh specialization to this dependency graph.",
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
      "source": "thm-baire-category-r",
      "source_section": "Statement",
      "quote": "Let $(U_n)_{n \\in \\mathbb{N}}$ be a sequence of subsets of $\\mathbb{R}$, each open ([[def-open-and-closed-in-r]]) and dense ([[def-limit-point-r]]). Then",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-nowhere-dense-meager",
      "source_section": "Definition",
      "quote": "- $A$ is **nowhere dense** when the interior of its closure is empty: $$\\big(\\overline{A}\\big)^{\\circ} \\;=\\; \\varnothing .$$ - $A$ is **meager**, or **of the first category**, when there is a sequence $(A_n)_{n \\in \\mathbb{N}}$ of nowhere dense subsets of $\\mathbb{R}$ with $$A \\;=\\; \\bigcup_{n \\in \\mathbb{N}} A_n .$$ - $A$ is **of the second category** when it is not meager. - $A$ is **residual** (also *comeager*) when $\\mathbb{R} \\setminus A$ is meager.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "- The **interior** of $A$ is the union of all open subsets of $A$: $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$ - The **closure** of $A$ is the intersection of all closed supersets of $A$: $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$ - The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$. - The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in [[def-interior-closure-boundary-r]] and derived set $A'$ as in [[def-limit-point-r]]. Write $$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$ for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then: 1. $\\overline{A} = E$. 2. $\\overline{A} = A \\cup A'$. 3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$. 4. $A$ is closed if and only if $A = \\overline{A}$, if and only if $A' \\subseteq A$. Claim 3 is the content of the definition of $\\overline{A}$ and is restated here so that the four descriptions stand together; claims 1, 2 and 4 are the ones that carry work.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "**A neighbourhood is an open interval.** For every $x$ and every $\\varepsilon > 0$,",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "An interval is **open** when both of its written endpoints are excluded, that is for the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is **closed** when both written endpoints are included, that is for $[a,b]$, $[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and $(a,b]$ are **half-open**.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-countable-iff-surjection-from-n",
      "source_section": "Statement",
      "quote": "Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if and only if there is a surjection $s : \\mathbb{N} \\to A$ ([[def-injection-surjection-bijection]]).",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$. - $A$ is **countably infinite** if $A \\approx \\mathbb{N}$. - $A$ is **at most countable** if it is finite or countably infinite. - $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "Let $A$ and $B$ be sets and let $f : A \\to B$ be a function ([[def-function]]). - $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \\in A$. - $f$ is **surjective** (onto) if for every $b \\in B$ there is some $x \\in A$ with $f(x) = b$; equivalently, the image $f[A] := \\{ f(x) : x \\in A \\}$ equals $B$. - $f$ is **bijective** if it is both injective and surjective. For $S \\subseteq A$ we write $f[S] = \\{ f(x) : x \\in S \\}$ for the image of $S$, and for $T \\subseteq B$ we write $f^{-1}[T] = \\{ x \\in A : f(x) \\in T \\}$ for the preimage of $T$; these are the image and preimage of a set under $f$ read as a relation ([[def-image-and-preimage-under-a-relation]]).",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-r-uncountable",
      "source_section": "Statement",
      "quote": "uncountable",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity satisfies $0 < 1$;",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c, d \\in F$. 1. **Translation invariance.** If $a < b$ then $a + c < b + c$. 2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c \\in F$. 1. If $a > 0$ and $b > 0$ then $ab > 0$. 2. If $a > 0$ and $b < 0$ then $ab < 0$. 3. If $a < 0$ and $b < 0$ then $ab > 0$. 4. If $c > 0$ then $a < b \\iff ac < bc$. 5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For $c \\in \\mathbb{R}$ the singleton $\\{c\\}$ is nowhere dense: it is closed, since $x \\ne c$ gives $N_{|x-c|}(x) \\subseteq \\mathbb{R} \\setminus \\{c\\}$ by [L3]; and its interior is empty, since for every real $\\varepsilon > 0$ the point $c + \\varepsilon \\cdot 2",
      "step": "1.1",
      "inputs": [
        "L3",
        "L6",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Let $s : \\mathbb{N} \\to \\mathbb{R}$ be any function. The sets $A_n := \\{s(n)\\}$ are nowhere dense by step 1.1, so $\\bigcup_n A_n \\ne \\mathbb{R}$ by [L1]; but $\\bigcup_n A_n$ is exactly the image of $s$, so $s$ is not surjective.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Hence there is no surjection $\\mathbb{N} \\to \\mathbb{R}$. Since $\\mathbb{R}$ is nonempty, [L4] gives that $\\mathbb{R}$ is not at most countable, that is, $\\mathbb{R}$ is uncountable, which is [L5] reproved along an independent route.",
      "step": "3.1",
      "inputs": [
        "L4",
        "L5",
        "2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The refutation/example uses a fixed nonempty witness, not a variable set whose empty case could establish or defeat the claim."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `ex-baire-reproves-r-uncountable` has a zero boundary requiring a separate argument."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `ex-baire-reproves-r-uncountable` has a one boundary requiring a separate argument."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 1.1 proves each singleton is nowhere dense, which is the degenerate set used in the contradiction."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement of `ex-baire-reproves-r-uncountable` has no interval endpoint or one-sided endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 fixes the single alleged enumeration under the countability assumption; the singleton sequence is then formula-defined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `ex-baire-reproves-r-uncountable` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `ex-baire-reproves-r-uncountable` is not an equivalence, so it has no reverse iff direction."
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
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-baire-category-r",
    "declared_target": "thm-baire-category-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-nowhere-dense-meager",
    "declared_target": "def-nowhere-dense-meager",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-r-uncountable",
    "declared_target": "thm-r-uncountable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-countable-iff-surjection-from-n",
    "declared_target": "lem-countable-iff-surjection-from-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
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
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
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
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
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
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
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
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-baire-reproves-r-uncountable",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
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

## Full text of every cited or declared item (21)

### `cor-of-one-positive`

````markdown
---
id: cor-of-one-positive
kind: corollary
title: "The multiplicative identity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-square-positive, def-field]
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
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
proof_strategy: direct
---

## Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$ and multiplicative identity $1$ ([[def-field]]).

[L1] In any field $1 \neq 0$ ([[def-field]]).

[L2] For every $x \neq 0$ the square satisfies $x^2 > 0$ ([[lem-of-square-positive]]).

[L3] The identity axiom gives $1 = 1 \cdot 1 = 1^2$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By the field axioms $1 \neq 0$, and $1 = 1 \cdot 1 = 1^2$. [L1, L3]

2.1 Since $1 \neq 0$, applying the square lemma with $x = 1$ gives $1^2 > 0$. [step 1.1, L2]

3.1 Because $1 = 1^2$, it follows that $1 > 0$, i.e. $0 < 1$. [step 2.1, step 1.1, L3] ∎
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
````

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
````

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
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

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
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

### `def-nowhere-dense-meager`

````markdown
---
id: def-nowhere-dense-meager
kind: definition
title: "Nowhere dense, meager (first category), residual, and second category subsets of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interior-closure-boundary-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-limit-point-r, def-countable, def-neighbourhood-r, thm-n-cross-n-countable, def-countable-choice]
justified_by: []
forward_refs: [cex-meager-set-of-full-measure]
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
    - title: "Nowhere dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nowhere_dense_set"
    - title: "Meagre set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Meagre_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
    - title: "Meager set (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Meager_set"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with interior $A^{\circ}$ and closure
$\overline{A}$ as in [[def-interior-closure-boundary-r]].

- $A$ is **nowhere dense** when the interior of its closure is empty:
  $$\big(\overline{A}\big)^{\circ} \;=\; \varnothing .$$
- $A$ is **meager**, or **of the first category**, when there is a sequence
  $(A_n)_{n \in \mathbb{N}}$ of nowhere dense subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} A_n .$$
- $A$ is **of the second category** when it is not meager.
- $A$ is **residual** (also *comeager*) when $\mathbb{R} \setminus A$ is meager.

**Why a sequence, and why that is the same as "an at most countable union".**
Sequences here are indexed by $\mathbb{N}$, which contains $0$. A finite family
$A_0, \dots, A_m$ of nowhere dense sets is turned into a sequence by setting
$A_n := \varnothing$ for $n > m$, and $\varnothing$ is nowhere dense because
$\overline{\varnothing} = \varnothing$ has empty interior; the empty family is
handled the same way and gives $A = \varnothing$. So "a union of an at most
countable family of nowhere dense sets" ([[def-countable]]) and the displayed
condition define the same class, and the sequence form is used below because it
carries an explicit index and needs no case split.

**Nowhere dense means exactly that the complement of the closure is dense.**
For $A \subseteq \mathbb{R}$,

$$\big(\overline{A}\big)^{\circ} = \varnothing \quad \Longleftrightarrow \quad \mathbb{R} \setminus \overline{A} \text{ is dense in } \mathbb{R} .$$

Indeed, by the pointwise description of the interior
([[def-interior-closure-boundary-r]]), $(\overline{A})^{\circ} = \varnothing$
says that no $x \in \mathbb{R}$ admits a real $\varepsilon > 0$ with
$N_\varepsilon(x) \subseteq \overline{A}$ ([[def-neighbourhood-r]]), that is,
that every $N_\varepsilon(x)$ meets $\mathbb{R} \setminus \overline{A}$. By
claim 1 of [[thm-closure-characterisations-r]] that says precisely that every
$x \in \mathbb{R}$ is adherent to $\mathbb{R} \setminus \overline{A}$, that is,
$\overline{\mathbb{R} \setminus \overline{A}} = \mathbb{R}$, which is density
([[def-limit-point-r]]).

**A closed set is nowhere dense exactly when its interior is empty**, since a
closed set equals its own closure (claim 4 of [[thm-closure-characterisations-r]],
[[def-open-and-closed-in-r]]). This is the form in which nowhere density is
verified nearly every time below. (The phrase *almost everywhere* is avoided
throughout this pair: it is a measure-theoretic term, and the only measure notion
defined here is measure zero.)

**Both classes are closed downwards.** If $B \subseteq A$ then
$\overline{B} \subseteq \overline{A}$ and hence
$(\overline{B})^{\circ} \subseteq (\overline{A})^{\circ}$
([[def-interior-closure-boundary-r]]), so a subset of a nowhere dense set is
nowhere dense. If $B \subseteq A = \bigcup_n A_n$ with each $A_n$ nowhere dense,
then $B = \bigcup_n (A_n \cap B)$ and each $A_n \cap B$ is nowhere dense by the
previous sentence, so a subset of a meager set is meager.

**A union of two meager sets is meager.** Let $M = \bigcup_n A_n$ and
$M' = \bigcup_n B_n$ with all $A_n$ and all $B_n$ nowhere dense; fixing one
witnessing sequence for $M$ and one for $M'$ is two instantiations of an
existential statement, not a choice principle. Let
$J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ be a bijection
([[thm-n-cross-n-countable]]) and define a sequence $(C_j)_{j \in \mathbb{N}}$ by

$$C_{J(m,n)} \;:=\; \begin{cases} A_n & m = 0, \\ B_n & m \ne 0. \end{cases}$$

This is a total definition because $J$ is a bijection, every $C_j$ is nowhere
dense, and $\bigcup_j C_j = M \cup M'$, since $A_n = C_{J(0,n)}$ and
$B_n = C_{J(1,n)}$ and every $C_j$ is one of the $A_n$ or one of the $B_n$.

## Remarks

- **The countably infinite version of the last observation is a different
  statement.** To show that $\bigcup_i M_i$ is meager for a sequence $(M_i)$ of
  meager sets one must select a witnessing sequence of nowhere dense sets for
  every $i$ at once, which is an application of countable choice
  ([[def-countable-choice]]); the two-set case above avoids it because two
  selections are two instantiations. Nothing on this page uses the countably
  infinite version, and every meager set met below is presented together with an
  explicit witnessing sequence.

- **Nowhere dense is strictly stronger than having empty interior.**
  $\mathbb{Q}$ has empty interior, since no neighbourhood consists of rationals
  alone, yet $\overline{\mathbb{Q}} = \mathbb{R}$ has interior $\mathbb{R}$, so
  $\mathbb{Q}$ is not nowhere dense. It is nevertheless meager, being a union of
  singletons; that computation is [[cor-q-is-meager-and-not-g-delta]].

- **First category, second category and residual are not a trichotomy.** A set
  is meager or of the second category, and those two are exhaustive and
  exclusive by definition. Residual is a separate condition on the complement: a
  residual set is of the second category once $\mathbb{R}$ is known not to be
  meager in itself ([[thm-baire-category-r]]), but before that theorem nothing
  rules out a set that is both meager and residual.

- **Category is a notion of topological smallness, and it is independent of
  smallness in the sense of measure.** Neither of the two implications between
  "nowhere dense" and "measure zero" ([[def-measure-zero-and-content-zero]])
  holds, and $\mathbb{R}$ itself splits into a meager set and a set of measure
  zero; the three items settling this are
  [[fs-nowhere-dense-implies-measure-zero]],
  [[fs-measure-zero-implies-nowhere-dense]] and
  [[cex-meager-set-of-full-measure]].
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

### `fs-cantor-set-countable`

````markdown
---
id: fs-cantor-set-countable
kind: false-statement
title: "FALSE: the Cantor set is countable because only countably many intervals were removed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cantor-set-properties, thm-cantor-set-ternary-description, def-cantor-set, def-countable, thm-cantor-powerset, lem-countable-iff-surjection-from-n, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
forward_refs: [cex-cantor-point-that-is-not-an-endpoint]
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Statement

**False claim:** the Cantor set $C$ ([[def-cantor-set]]) is at most countable
([[def-countable]]), because it is obtained from $[0,1]$ by removing at most
countably many intervals, and what survives such a removal is the at most
countable set of their endpoints.

The claim rests on two inferences and both fail. The count of removed intervals
itself is correct, and it is irrelevant: removing an at most countable family of intervals
from $[0,1]$ says nothing about the cardinality of the remainder. And the
endpoints do not exhaust $C$: the point $1/4$ belongs to $C$ and is the endpoint
of no removed interval, as the remarks below record.

## Facts & Assumptions

**Given:** The Cantor set $C$ of [[def-cantor-set]] and the set $\{0,1\}^{\mathbb{N}}$ of sequences with values in $\{0,1\}$.

[A1] The false claim: $C$ is at most countable.

[L1] $C$ is uncountable ([[thm-cantor-set-properties]], claim 4).

[L2] There is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $C$ ([[thm-cantor-set-ternary-description]], claim 3, [[def-injection-surjection-bijection]]).

[L3] There is no surjection from a set $A$ onto its power set $\mathcal{P}(A)$ ([[thm-cantor-powerset]]).

[L4] A nonempty at most countable set admits a surjection from $\mathbb{N}$, and "uncountable" means "not at most countable" ([[lem-countable-iff-surjection-from-n]], [[def-countable]], [[def-equinumerous]]).

## Refutation

**Proof technique:** direct.

1.1 $C$ is uncountable by [L1], which is the direct negation of [A1]. [A1, L1, L4]

1.2 A second and independent refutation, which does not go through perfect sets: the map $b \mapsto \{\, k \in \mathbb{N} : b_k = 1 \,\}$ is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $\mathcal{P}(\mathbb{N})$, its inverse sending a set to its indicator sequence, so composing with [L2] gives a bijection from $C$ onto $\mathcal{P}(\mathbb{N})$. If $C$ were at most countable it would be nonempty and admit a surjection $\mathbb{N} \to C$ by [L4], and composing with that bijection would give a surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$, contradicting [L3]. [L2, L3, L4]

2.1 So the claim [A1] is false. The premise about the removed intervals is not what fails; it is the inference from it, and step 1.2 shows why no counting of removed intervals could have settled the question: the surviving set is in bijection with the power set of $\mathbb{N}$. [step 1.1, step 1.2, A1] ∎

## Remarks

- **The correct statement about the removed intervals.** The number removed at each stage doubles and there are countably many stages, so the removed family is at most countable and its endpoints form an at most countable set. That much of the claim survives. What is false is that the endpoints exhaust $C$: an endpoint has an eventually constant digit sequence, and [[cex-cantor-point-that-is-not-an-endpoint]] exhibits a point of $C$ whose digits alternate for ever.

- **Length and cardinality are independent here.** $C$ has measure zero ([[thm-cantor-set-properties]]) and is in bijection with $\{0,1\}^{\mathbb{N}}$ (claim 3 of [[thm-cantor-set-ternary-description]]), hence uncountable ([[thm-cantor-powerset]]), while the Smith-Volterra-Cantor set is uncountable and is not null ([[thm-fat-cantor-set-has-positive-measure]]). Nothing about cardinality follows from a length computation, in either direction.

- **The named witness** is [[cex-cantor-point-that-is-not-an-endpoint]].
````

### `lem-countable-iff-surjection-from-n`

````markdown
---
id: lem-countable-iff-surjection-from-n
kind: lemma
title: "A nonempty set is at most countable iff it is a surjective image of $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, thm-well-ordering-principle, def-injection-surjection-bijection, lem-subset-of-countable, def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "countable iff enumerable by a surjection"
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if
and only if there is a surjection $s : \mathbb{N} \to A$
([[def-injection-surjection-bijection]]).

Moreover, from any such surjection an injection $A \to \mathbb{N}$ is obtained
explicitly, without any choice, by

$$j(a) := \min\{\, k \in \mathbb{N} : s(k) = a \,\}.$$

This is the working form of countability used everywhere below: to prove a
nonempty set countable it suffices to list its elements, repetitions and all.

**No choice principle is used.** The backward direction is where an appeal to
choice would be natural ("for each $a$ pick some $k$ with $s(k) = a$") and it is
avoided outright, because $\min$ is canonical: every nonempty set of naturals has
a *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by
$a$ and $s$ alone.

## Facts & Assumptions

**Given:** A nonempty set $A$. For $a \in A$ and a function $s : \mathbb{N} \to A$ write $s^{-1}(\{a\}) = \{\, k \in \mathbb{N} : s(k) = a \,\}$.

[L1] $A$ is at most countable when $A \approx n$ for some $n \in \mathbb{N}$ or $A \approx \mathbb{N}$; $A \approx 0 = \varnothing$ holds only for $A = \varnothing$ ([[def-countable]], [[def-natural-numbers]]).

[L2] Bijections, injections, surjections, images and the symmetry and transitivity of $\approx$; an injection is a bijection onto its image ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L5] For naturals, $k \in n \iff k < n$, so a natural number $n$ is the set $\{\, k \in \mathbb{N} : k < n \,\}$ of naturals below it; in particular $0 \in n$ whenever $n \ne 0$ ([[lem-nat-order-is-membership]], proved earlier on this page from the additive order of [[def-nat-order]] on the von Neumann naturals of [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $A$ is at most countable; since $A \ne \varnothing$ we have $A \approx \mathbb{N}$, or $A \approx n$ for some $n \in \mathbb{N}$ with $n \ne 0$, and in either case fix a bijection $\psi$ from $\mathbb{N}$, respectively from $n$, onto $A$. [assume-hyp, given, L1, L2]

1.2 For the converse implication assume a surjection $s : \mathbb{N} \to A$ is given. [assume-hyp]

2.1 If $\psi$ is defined on $\mathbb{N}$ it is itself a surjection $\mathbb{N} \to A$; if $\psi$ is defined on $n \ne 0$, then $0 \in n$ by [L5] and the function $s_\psi : \mathbb{N} \to A$ with $s_\psi(k) = \psi(k)$ for $k < n$ and $s_\psi(k) = \psi(0)$ for $k \ge n$ is a surjection, since every element of $A$ is $\psi(k)$ for some $k \in n$. In both cases a surjection $\mathbb{N} \to A$ exists. [step 1.1, L2, L5, construct]

2.2 For each $a \in A$ the set $s^{-1}(\{a\})$ is a nonempty subset of $\mathbb{N}$, because $s$ is surjective, so [L3] provides its least element and $j(a) := \min s^{-1}(\{a\})$ defines a function $j : A \to \mathbb{N}$; no selection is made, since the least element is uniquely determined. [step 1.2, L3, construct]

3.1 $j$ is injective: if $j(a) = j(a') = k$ then $s(k) = a$ and $s(k) = a'$, because $j(a) \in s^{-1}(\{a\})$ and $j(a') \in s^{-1}(\{a'\})$, so $a = a'$. [step 2.2, L2]

4.1 Hence $j$ is a bijection of $A$ onto $j[A] \subseteq \mathbb{N}$, so $A \approx j[A]$; the subset $j[A]$ of the at most countable set $\mathbb{N}$ is at most countable by [L4], and transitivity of $\approx$ transfers this to $A$. [step 3.1, L1, L2, L4]

5.1 The forward implication is step 2.1 and the converse is step 4.1, so for nonempty $A$ countability and the existence of a surjection $\mathbb{N} \to A$ are equivalent, with $j$ of step 2.2 the promised injection $A \to \mathbb{N}$. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

- The hypothesis $A \ne \varnothing$ cannot be dropped in the forward direction: $\varnothing$ is finite, hence at most countable, but no function $\mathbb{N} \to \varnothing$ exists at all. The converse direction needs no such hypothesis, since a surjection onto $A$ already forces $A \ne \varnothing$.

- Combining the two directions: a nonempty $A$ is at most countable if and only if $A \preceq \mathbb{N}$ ([[def-equinumerous]]). The forward direction of that reformulation is immediate, and the backward direction is step 4.1.

- The lemma is what licenses the informal phrase "enumerate $A$ as $a_0, a_1, a_2, \dots$, possibly with repetitions". Repetitions are exactly what distinguishes a surjection from a bijection, and allowing them is what makes the criterion easy to apply: the enumerations built in [[thm-product-of-countable]] and [[thm-countable-union-of-countable]] repeat.
````

### `lem-of-add-order`

````markdown
---
id: lem-of-add-order
kind: lemma
title: "Order is preserved by adding a constant and by adding inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c, d \in F$.

[L1] For $x, y \in F$, the relation $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L2] $P$ is closed under addition: if $u, v \in P$ then $u + v \in P$ (axiom O2 of [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a < b$; by the definition of the order this means $b - a \in P$. [assume-hyp, L1]

1.2 For every $c \in F$ the field identities give $(b + c) - (a + c) = b - a$. [algebra]

1.3 Assume moreover $c < d$; by the definition of the order this means $d - c \in P$. [assume-hyp, L1]

1.4 The field identities give $(b + d) - (a + c) = (b - a) + (d - c)$. [algebra]

2.1 Hence $(b + c) - (a + c) = b - a \in P$, which is exactly $a + c < b + c$, proving claim 1. [step 1.1, step 1.2, L1]

2.2 Since $b - a \in P$ and $d - c \in P$, closure under addition gives $(b - a) + (d - c) \in P$. [step 1.1, step 1.3, L2]

3.1 Therefore $(b + d) - (a + c) = (b - a) + (d - c) \in P$, which is exactly $a + c < b + d$, proving claim 2. [step 1.4, step 2.2, L1] ∎
````

### `lem-of-sign-rules`

````markdown
---
id: lem-of-sign-rules
kind: lemma
title: "Sign rules for products and monotonicity of multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-mult-neg, lem-of-zero-mult]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c \in F$.

1. If $a > 0$ and $b > 0$ then $ab > 0$.
2. If $a > 0$ and $b < 0$ then $ab < 0$.
3. If $a < 0$ and $b < 0$ then $ab > 0$.
4. If $c > 0$ then $a < b \iff ac < bc$.
5. If $c < 0$ then $a < b \iff bc < ac$ (multiplication by a negative reverses order).

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c \in F$.

[L1] For $x, y \in F$: $x < y \iff y - x \in P$; $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and (trichotomy) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds, so $0 \notin P$ and $x \in P \Rightarrow x \neq 0$ ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)v = -(uv)$ and $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

[L4] In any field, $0 \cdot u = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$ and $b > 0$, i.e. $a \in P$ and $b \in P$; closure gives $ab \in P$, so $ab > 0$, proving claim 1. [assume-hyp, L1, L2]

1.2 Assume $a > 0$ and $b < 0$, i.e. $a \in P$ and $-b \in P$; closure gives $a(-b) \in P$. [assume-hyp, L1, L2]

1.3 Assume $a < 0$ and $b < 0$, i.e. $-a \in P$ and $-b \in P$; closure gives $(-a)(-b) \in P$. [assume-hyp, L1, L2]

1.4 Assume $c > 0$ and $a < b$, i.e. $c \in P$ and $b - a \in P$; closure gives $(b - a)c \in P$. [assume-hyp, L1, L2]

1.5 Assume $c < 0$ and $a < b$, i.e. $-c \in P$ and $b - a \in P$; closure gives $(b - a)(-c) \in P$. [assume-hyp, L1, L2]

2.1 Since $a(-b) = -(ab)$ by L3, step 1.2 gives $-(ab) \in P$, so $ab < 0$, proving claim 2. [step 1.2, L3, L1]

2.2 Since $(-a)(-b) = ab$ by L3, step 1.3 gives $ab \in P$, so $ab > 0$, proving claim 3. [step 1.3, L3, L1]

2.3 By distributivity $(b - a)c = bc - ac$, so step 1.4 gives $bc - ac \in P$, i.e. $ac < bc$: this is the forward direction of claim 4. [step 1.4, algebra, L1]

2.4 By L3 and distributivity $(b - a)(-c) = -((b - a)c) = -(bc - ac) = ac - bc$, so step 1.5 gives $ac - bc \in P$, i.e. $bc < ac$: this is the forward direction of claim 5. [step 1.5, L3, algebra, L1]

3.1 Conversely, assume $c > 0$ and $ac < bc$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $ac < bc$; if $b < a$ then the argument of step 2.3 applied to the pair $b < a$ gives $bc < ac$, so $bc - ac \in P$ (from $ac < bc$) while $ac - bc \in P$ (from $bc < ac$), putting the element $bc - ac$ and its negative $ac - bc$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 4. [assume-hyp, step 2.3, L4, L1, algebra]

4.1 Conversely, assume $c < 0$ and $bc < ac$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $bc < ac$; if $b < a$ then the argument of step 2.4 applied to the pair $b < a$ gives $ac < bc$, so $ac - bc \in P$ (from $bc < ac$) while $bc - ac \in P$ (from $ac < bc$), putting the element $ac - bc$ and its negative $bc - ac$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 5. [assume-hyp, step 2.4, L4, L1, algebra] ∎
````

### `thm-baire-category-r`

````markdown
---
id: thm-baire-category-r
kind: theorem
title: "Baire category in $\\mathbb{R}$, by nested intervals with canonically chosen rational endpoints: a countable intersection of dense open sets is dense, so $\\mathbb{R}$ is not a countable union of nowhere dense sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nowhere-dense-meager, thm-nested-interval-property, def-interval, def-open-and-closed-in-r, def-limit-point-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-countable, def-equinumerous, def-injection-surjection-bijection, thm-rationals-countable, lem-rat-embeds-dense, thm-well-ordering-principle, thm-recursion, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
forward_refs: [ex-baire-reproves-r-uncountable, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable intersection of dense open sets is dense"
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
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Exercise 22) and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Baire theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Baire_theorem"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Statement

Let $(U_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each
open ([[def-open-and-closed-in-r]]) and dense ([[def-limit-point-r]]). Then

$$\bigcap_{n \in \mathbb{N}} U_n \quad \text{is dense in } \mathbb{R}.$$

Consequently, if $(A_n)_{n \in \mathbb{N}}$ is a sequence of nowhere dense
subsets of $\mathbb{R}$ ([[def-nowhere-dense-meager]]), then
$\bigcup_{n \in \mathbb{N}} A_n \ne \mathbb{R}$: no meager subset of
$\mathbb{R}$ exhausts $\mathbb{R}$, so $\mathbb{R}$ is of the second category in
itself.

**The selection is canonical, and the proof spends no choice principle.** The
textbook argument picks a nested interval at every stage in terms of the one
before it, which is the axiom of dependent choice ([[def-dependent-choice]]). The construction below
instead fixes one enumeration $e$ of the rationals ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval whose two
rational endpoints have **least index** among those meeting the requirements.
The requirements are met by some rational-endpoint interval, which is what the
refinement claim of the proof establishes, and the least such index is
determined by [[thm-well-ordering-principle]]; so the whole recursion is a
single application of [[thm-recursion]] to one total map. This is the device of
[[thm-perfect-set-uncountable-r]], transplanted from perfect sets to dense open
sets. What it does **not** settle is the strength of the theorem for general
complete metric spaces, which is recorded separately in
[[rem-baire-in-r-is-choice-free]].

## Facts & Assumptions

**Given:** A sequence $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $\mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$, and $G$ denotes the set of good pairs.

[A1] Each $U_n$ is open and dense in $\mathbb{R}$.

[L1] $A \subseteq \mathbb{R}$ is dense when $\overline{A} = \mathbb{R}$, and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$; so $A$ is dense if and only if $N_\varepsilon(x) \cap A \ne \varnothing$ for every $x \in \mathbb{R}$ and every real $\varepsilon > 0$ ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L2] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; every open interval $(p,q)$ is an open set, and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L3] The intersection of two open subsets of $\mathbb{R}$ is open, and the complement of a closed set is open ([[thm-open-set-algebra-r]], [[def-open-and-closed-in-r]]).

[L4] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$, and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L7] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection $\bigcap_k I_k$ is nonempty ([[thm-nested-interval-property]]).

[L8] $A$ is nowhere dense exactly when $\mathbb{R} \setminus \overline{A}$ is dense; $\overline{A}$ is a closed set containing $A$ ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] An at most countable family may always be presented as a sequence indexed by $\mathbb{N}$ ([[def-countable]], [[def-nowhere-dense-meager]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x_0 \in \mathbb{R}$ and a real $\varepsilon_0 > 0$; by [L1] it suffices to produce a point of $\bigcap_n U_n$ lying in $N_{\varepsilon_0}(x_0)$, since $x_0$ and $\varepsilon_0$ are then arbitrary. [given, L1, suffices: one point in each neighbourhood]

1.2 By [L4] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$, where $\iota(q) = \hat q$, so that $e$ is a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L4, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$ and every $n \in \mathbb{N}$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q) \cap U_n$. To see it, note first that $(p,q)$ is nonempty, since [L4] supplies an element of $\mathbb{Q}_{\mathbb{R}}$ strictly between $p$ and $q$, and that $(p,q)$ is open by [L2]; fix $y_1 \in (p,q)$ and, by [L2], a real $\rho_1 > 0$ with $N_{\rho_1}(y_1) \subseteq (p,q)$. Since $U_n$ is dense, [A1] and [L1] give $y \in N_{\rho_1}(y_1) \cap U_n$, so $y \in (p,q) \cap U_n$, and that set is open by [A1], [L2] and [L3], so there is a real $\rho > 0$ with $N_\rho(y) \subseteq (p,q) \cap U_n$. By [L4] fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $y - \rho < p' < y < q' < y + \rho$. Then $p' < q'$, so $(p',q')$ is good, and every $t \in [p',q']$ satisfies $y - \rho < p' \le t \le q' < y + \rho$, whence $|t - y| < \rho$ and $t \in N_\rho(y)$; thus $[p',q'] \subseteq N_\rho(y) \subseteq (p,q) \cap U_n$. [step 1.3, A1, L1, L2, L3, L4, choose]

3.1 **Successor rule.** For $(k, (p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $j$ makes $(e(m), e(j))$ good with $[e(m), e(j)] \subseteq (p,q) \cap U_k$, and let $j$ be the least natural with that property for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m), e(j)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $n = k$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$ by step 1.2, so both minima exist by [L5] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 1.2, step 2.1, L4, L5, construct]

4.1 **The recursion.** By [L4] fix $p_0, q_0 \in \mathbb{Q}_{\mathbb{R}}$ with $x_0 - \varepsilon_0 < p_0 < x_0 < q_0 < x_0 + \varepsilon_0$; then $(p_0,q_0)$ is good and, as in step 2.1, $[p_0,q_0] \subseteq N_{\varepsilon_0}(x_0)$ by [L2]. Apply [L6] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows that the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$, every $(p_k,q_k)$ being good. [step 1.1, step 1.3, step 3.1, L2, L4, L6, construct]

5.1 Write $I_k := [p_k, q_k]$, a nonempty closed bounded interval by [L2]. The rule of step 3.1 gives, for every $k \in \mathbb{N}$, that $I_{k+1} \subseteq (p_k,q_k) \cap U_k \subseteq I_k$; in particular the family $(I_k)$ is nested and $I_{k+1} \subseteq U_k$. [step 3.1, step 4.1, L2]

6.1 By [L7] applied to the nested family $(I_k)$ of nonempty closed bounded intervals, $\bigcap_{k} I_k \ne \varnothing$; fix $x$ in it. [step 5.1, L7, choose]

7.1 For every $n \in \mathbb{N}$ one has $x \in I_{n+1} \subseteq U_n$ by steps 5.1 and 6.1, so $x \in \bigcap_n U_n$; and $x \in I_0 \subseteq N_{\varepsilon_0}(x_0)$ by steps 4.1 and 6.1. So $N_{\varepsilon_0}(x_0)$ meets $\bigcap_n U_n$. [step 4.1, step 5.1, step 6.1]

8.1 Since $x_0 \in \mathbb{R}$ and the real $\varepsilon_0 > 0$ were arbitrary, every neighbourhood of every point of $\mathbb{R}$ meets $\bigcap_n U_n$, so that set is dense by [L1]. [step 1.1, step 7.1, L1]

9.1 For the consequence, let $(A_n)$ be a sequence of nowhere dense sets and put $U_n := \mathbb{R} \setminus \overline{A_n}$, which is open by [L3] and [L8] and dense by [L8]; by step 8.1 the set $\bigcap_n U_n$ is dense, hence nonempty, and any $x$ in it lies outside every $\overline{A_n}$ and so outside every $A_n$, giving $x \notin \bigcup_n A_n$ and therefore $\bigcup_n A_n \ne \mathbb{R}$. By [L9] the same conclusion covers a union of an at most countable family of nowhere dense sets, so no meager set is all of $\mathbb{R}$. [step 8.1, L1, L3, L8, L9, discharge-construct] ∎

## Remarks

- **What "dense" is doing at each end.** Density of the $U_n$ is used exactly once, in the refinement claim, to find a point of $U_n$ inside a given open interval; openness is used exactly once, immediately after, to fit a whole closed interval with rational endpoints around that point. Neither hypothesis can be dropped. Without openness the conclusion fails: the family consisting of $\mathbb{Q}$ together with all the sets $\mathbb{R} \setminus \{q\}$ for $q \in \mathbb{Q}$ is an at most countable family of dense sets, all but the first of them open, and its intersection is empty. Without density it fails too, for the constant sequence $U_n := (0,1)$ has intersection $(0,1)$, which is not dense in $\mathbb{R}$.

- **Only nonemptiness of the nested intersection is used.** The construction does not force the interval lengths to $0$ and does not need to: claim 1 of [[thm-nested-interval-property]] already produces a point, and one point is all the argument wants. That is why no Archimedean step appears anywhere above.

- **The consequence is the form used downstream.** Applying it to the sequence of singletons $\{x_n\}$ of a supposed enumeration of $\mathbb{R}$ reproves that $\mathbb{R}$ is uncountable ([[ex-baire-reproves-r-uncountable]]); applying it to a supposed presentation of $\mathbb{Q}$ as a $G_\delta$ set is what shows that no such presentation exists ([[cor-q-is-meager-and-not-g-delta]]).

- **Category is not measure.** The intersection produced above is dense but may be very small in the sense of [[def-measure-zero-and-content-zero]]; indeed $\mathbb{R}$ decomposes as a meager set together with a set of measure zero ([[cex-meager-set-of-full-measure]]), so this theorem says nothing whatever about size in measure.
````

### `thm-cantor-set-properties`

````markdown
---
id: thm-cantor-set-properties
kind: theorem
title: "The Cantor set is compact, perfect, uncountable, nowhere dense and of measure zero, and it contains no interval of positive length, so its only nonempty connected subsets are single points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set, thm-cantor-set-ternary-description, thm-heine-borel-characterisation-r, def-open-cover-r, def-perfect-set-r, thm-perfect-set-uncountable-r, def-nowhere-dense-meager, def-measure-zero-and-content-zero, lem-content-zero-implies-null, lem-nondegenerate-interval-is-not-null, def-connected-r, thm-connected-subsets-of-r-are-intervals, thm-open-set-algebra-r, def-countable, def-interval, def-integer-power, lem-power-laws, def-open-and-closed-in-r, def-limit-point-r, def-neighbourhood-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-series-linearity, def-series, lem-geometric-sequence-null, def-real-limit, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$C$ compact, perfect, uncountable, null"
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Statement

Let $C$ be the Cantor set ([[def-cantor-set]]). Then:

1. $C$ is closed and bounded, hence compact
   ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]);
2. $C$ has content zero, and therefore measure zero
   ([[def-measure-zero-and-content-zero]]);
3. $C$ is perfect ([[def-perfect-set-r]]);
4. $C$ is uncountable ([[def-countable]]);
5. $C$ contains no interval with two distinct endpoints, and is nowhere dense
   ([[def-nowhere-dense-meager]]);
6. every nonempty connected subset of $C$ ([[def-connected-r]]) is a single
   point.

Claim 6 is what the phrase "totally disconnected" names elsewhere; that phrase
is **not** used here, because no definition of total disconnectedness exists at
this point in the reading order. What is proved is exactly the displayed
statement, and it is obtained from claim 5 through
[[thm-connected-subsets-of-r-are-intervals]].

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], and the map $\Phi$ and the set $D$ of $\{0,2\}$-valued sequences of [[thm-cantor-set-ternary-description]].

[L1] $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n \subseteq C_m$ for every $m$, every $C_n \subseteq [0,1]$, $0 \in C$, and $3^{-n} = (3^{-1})^n$ ([[def-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $\Phi$ is a bijection from $D$ onto $C$, $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$, and convergent series add and scale termwise ([[thm-cantor-set-ternary-description]], [[lem-series-linearity]], [[def-series]]).

[L3] $[c,d]$ is a closed set and a bounded interval, $(c,d)$ is open, $N_\varepsilon(x) = (x-\varepsilon, x+\varepsilon)$, and every open set contains a neighbourhood of each of its points ([[def-interval]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Finite unions of closed sets are closed, and an intersection of a nonempty family of closed sets is closed ([[thm-open-set-algebra-r]]).

[L5] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L6] Content zero and measure zero as in [[def-measure-zero-and-content-zero]]; a set of content zero is null ([[lem-content-zero-implies-null]]); no null set contains an interval $[u,v]$ with $u < v$ ([[lem-nondegenerate-interval-is-not-null]]).

[L7] $P$ is perfect when it is closed and no point of it is isolated in it ([[def-perfect-set-r]], [[def-limit-point-r]]); every nonempty perfect subset of $\mathbb{R}$ is uncountable ([[thm-perfect-set-uncountable-r]], [[def-countable]]).

[L8] A set is nowhere dense exactly when the interior of its closure is empty, and a closed set equals its closure ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] A subset of $\mathbb{R}$ is connected exactly when it is order-convex ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]], [[def-interval]]).

[L10] $|r|^k \to 0$ for $|r| < 1$ ([[lem-geometric-sequence-null]]); convergence to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]]); $|z| \ge 0$, $|z| = z$ for $z \ge 0$, and $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L11] Induction on $\mathbb{N}$ ([[thm-induction-principle]]); finite sums split, scale and are monotone in their terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L12] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$, $3^{-1} > 0$ and $0 < 2 \cdot 3^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$C$ is compact, claim 1.** First, for $\lambda \ne 0$ and $c \in \mathbb{R}$ the set $\lambda S + c := \{\lambda s + c : s \in S\}$ is closed whenever $S$ is: if $x \notin \lambda S + c$ then $(x - c)\lambda^{-1} \notin S$, so by [L3] there is a real $\eta > 0$ with $N_\eta((x-c)\lambda^{-1}) \cap S = \varnothing$, and every $z$ with $|z - x| < |\lambda|\eta$ satisfies $|(z-c)\lambda^{-1} - (x-c)\lambda^{-1}| = |z-x| \cdot |\lambda|^{-1} < \eta$ by [L10] and [L12], hence $(z-c)\lambda^{-1} \notin S$ and $z \notin \lambda S + c$. Now every $C_n$ is closed, by induction on $n$ ([L11]): $C_0 = [0,1]$ is closed by [L3], and $C_{n+1}$ is the union of the two closed sets $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$, hence closed by [L4]. So $C = \bigcap_n C_n$ is closed by [L4], and $C \subseteq [0,1]$ is bounded by [L1] and [L3]; by [L5] it is compact. [L1, L3, L4, L5, L10, L11, L12]

1.2 **$C$ has content zero and measure zero, claim 2.** By induction on $n$ ([L11]) the following holds for every $n$: there are $m \in \mathbb{N}$ and reals $u_0 \le v_0, \dots, u_m \le v_m$ with $C_n \subseteq \bigcup_{j \le m}[u_j,v_j]$ and $\sum_{j \le m}(v_j - u_j) = (2 \cdot 3^{-1})^{n}$. At $n = 0$ take the single interval $[0,1]$, of total length $1 = (2 \cdot 3^{-1})^0$ by [L1]. Given such a list at $n$, define $2m + 2$ intervals by $[u_j 3^{-1},\, v_j 3^{-1}]$ for $j \le m$ and $[2 \cdot 3^{-1} + u_{j-m-1}3^{-1},\, 2 \cdot 3^{-1} + v_{j-m-1}3^{-1}]$ for $m < j \le 2m+1$; they cover $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$ respectively, hence cover $C_{n+1}$, and their total length is $3^{-1}(2 \cdot 3^{-1})^{n} + 3^{-1}(2 \cdot 3^{-1})^{n} = (2 \cdot 3^{-1})^{n+1}$ by [L11] and [L12]. Since $0 < 2 \cdot 3^{-1} < 1$ by [L12], [L10] gives, for every real $\varepsilon > 0$, an $n$ with $(2 \cdot 3^{-1})^{n} \le \varepsilon$; as $C \subseteq C_n$ by [L1], the corresponding finite list covers $C$ with total length at most $\varepsilon$. So $C$ has content zero by [L6], and hence measure zero by [L6]. [L1, L6, L10, L11, L12]

2.1 **$C$ is perfect, claim 3.** $C$ is closed by step 1.1. Let $x \in C$ and let the real $\varepsilon > 0$ be given. By [L2] write $x = \Phi(a)$ with $a \in D$. By [L10] and [L12] fix $k \in \mathbb{N}$ with $2 \cdot 3^{-k-1} < \varepsilon$, and define $b \in D$ by $b_j := a_j$ for $j \ne k$ and $b_k := 2 - a_k$, so $b_k \in \{0,2\}$ and $b \ne a$. Then $\Phi(b) \in C$ and $\Phi(b) \ne \Phi(a)$ by [L2], while $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1} = (b_k - a_k)3^{-k-1}$ by [L2], all other terms being $0$, so $|\Phi(b) - x| = 2 \cdot 3^{-k-1} < \varepsilon$ by [L10]. Thus $N_\varepsilon(x)$ contains a point of $C$ other than $x$, for every $\varepsilon$, so $x$ is not isolated in $C$; by [L7] $C$ is perfect. [step 1.1, L2, L7, L10, L12]

2.2 **$C$ contains no nondegenerate interval and is nowhere dense, claim 5.** By step 1.2 the set $C$ is null, so by [L6] it contains no $[u,v]$ with $u < v$; in particular it contains no interval of any of the four bounded forms with distinct endpoints, since such an interval contains a closed one with distinct endpoints by [L6] and [L12]. Its interior is therefore empty: if $N_\varepsilon(x) \subseteq C$ for some real $\varepsilon > 0$, then $[x - \varepsilon \cdot 2^{-1},\, x + \varepsilon \cdot 2^{-1}] \subseteq N_\varepsilon(x) \subseteq C$ by [L3] and [L12], an interval with distinct endpoints. Since $C$ is closed by step 1.1, it equals its closure, so [L8] gives that $C$ is nowhere dense. [step 1.1, step 1.2, L3, L6, L8, L12]

3.1 **$C$ is uncountable, claim 4.** $C$ is nonempty, since $0 \in C$ by [L1], and perfect by step 2.1, so [L7] applies. [step 2.1, L1, L7]

3.2 **Connected subsets, claim 6.** Let $E \subseteq C$ be connected and nonempty. By [L9] $E$ is order-convex, so if $u, v \in E$ with $u < v$ then $[u,v] \subseteq E \subseteq C$, contradicting step 2.2. Hence no two distinct elements of $E$ exist, and $E$, being nonempty, is a single point. [step 2.2, L9, L12]

4.1 Claims 1 to 6 are steps 1.1, 1.2, 2.1, 3.1, 2.2 and 3.2 respectively, so all six hold. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **Two independent proofs of uncountability.** The route above is [[thm-perfect-set-uncountable-r]] applied to a nonempty perfect set. The other is claim 3 of [[thm-cantor-set-ternary-description]]: $C$ is in bijection with $\{0,1\}^{\mathbb{N}}$, which is in bijection with the power set of $\mathbb{N}$, uncountable by [[thm-cantor-powerset]]. The two arguments share nothing, and the second is the one that makes the *size* of $C$ evident: $C$ is in bijection with the power set of $\mathbb{N}$, while having content zero. **It is deliberately not said here that $C$ has as many points as $\mathbb{R}$.** That would require a bijection between $\mathbb{R}$ and the power set of $\mathbb{N}$, and no such bijection is constructed anywhere at this point in the reading order; the two uncountability results available here are separate facts, one proved by the diagonal argument on power sets and one by nested intervals.

- **Claim 2 and claim 4 together are the point of the whole construction.** A set of measure zero may be uncountable, so nullity is not a cardinality condition; and a nowhere dense set need not be null, so it is not a category condition either ([[fs-nowhere-dense-implies-measure-zero]], [[thm-fat-cantor-set-has-positive-measure]]).

- **Why claim 5 is proved through measure and not by inspection.** The intervals making up $C_n$ have length $3^{-n}$, and one can see directly that a long interval cannot fit inside $C$. Doing that rigorously means keeping track of the $2^n$ component intervals of $C_n$ and their gaps; going through [[lem-nondegenerate-interval-is-not-null]] uses the estimate already made in step 1.2 and needs no such bookkeeping.

- **Every point of $C$ is a limit of other points of $C$, and the witnesses are explicit**: change one ternary digit far out, as step 2.1 does. This is also what shows $C$ has no isolated points without any appeal to the structure of its complement.
````

### `thm-cantor-set-ternary-description`

````markdown
---
id: thm-cantor-set-ternary-description
kind: theorem
title: "The Cantor set is exactly the set of $\\sum_{k \\ge 1} a_k 3^{-k}$ with every $a_k \\in \\{0,2\\}$, and this gives a bijection with $\\{0,1\\}^{\\mathbb{N}}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set, def-series, thm-geometric-series, def-injection-surjection-bijection, def-integer-power, lem-power-laws, thm-nonnegative-series-bounded-partial-sums, def-interval, lem-series-linearity, thm-recursion, thm-induction-principle, thm-well-ordering-principle, lem-geometric-sequence-null, def-real-limit, lem-limit-unique, def-sequence, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
forward_refs: [cex-cantor-point-that-is-not-an-endpoint]
aliases: []
landmark: true
short: "$C$ = ternary digits in $\\{0,2\\}$"
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Statement

Let $D$ be the set of sequences $a : \mathbb{N} \to \{0,2\}$
([[def-sequence]]), the two values being the real numbers $0$ and $2$. For
$a \in D$ the series $\sum_{k \ge 0} a_k 3^{-k-1}$ converges ([[def-series]]);
write

$$\Phi(a) \;:=\; \sum_{k=0}^{\infty} a_k 3^{-k-1} .$$

Then, with $C$ and $(C_n)$ as in [[def-cantor-set]]:

1. $\Phi(a) \in [0,1]$ for every $a \in D$, and $C = \{\, \Phi(a) : a \in D \,\}$;
2. $\Phi$ is injective, so $\Phi$ is a bijection from $D$ onto $C$
   ([[def-injection-surjection-bijection]]);
3. consequently $b \mapsto \Phi\big((2 b_k)_k\big)$ is a bijection from
   $\{0,1\}^{\mathbb{N}}$, the set of sequences with values in $\{0,1\}$, onto
   $C$;
4. $C = \tfrac13 C \cup \big(\tfrac23 + \tfrac13 C\big)$, and the two sets on the
   right are disjoint.

**On the indexing.** The digit $a_k$ carries the weight $3^{-k-1}$, so the
series starts at $k = 0$ with the term $a_0/3$; written with the classical
$1$-based index it reads $\sum_{k \ge 1} a_k 3^{-k}$, which is the form in the
title. Sequences in this library are functions on $\mathbb{N}$ and $\mathbb{N}$
contains $0$ ([[def-sequence]]), so the $0$-based form is the one used
throughout the proof.

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], the set $D$ of sequences with values in $\{0,2\}$, and for $a \in D$ the shifted sequence $\sigma a$ defined by $(\sigma a)_k := a_{k+1}$, which again lies in $D$.

[L1] The Cantor set: $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n = \bigcap_n C_{n+1}$, every $C_n \subseteq [0,1]$, the two halves of $C_{n+1}$ lie in $[0,\tfrac13]$ and in $[\tfrac23,1]$ respectively and are disjoint, and $3^{-n}$ denotes $(3^{-1})^n$ ([[def-cantor-set]], [[def-interval]]).

[L2] Series: partial sums $s_n = \sum_{k<n} t_k$, convergence of $(s_n)$, the sum as its limit, the tail clause $\sum_{k \ge m} t_k$ and the identity $\sum_{k<n+1} t_k = t_0 + \sum_{j<n} t_{j+1}$ ([[def-series]], [[def-sequence]]).

[L3] A series of nonnegative terms converges exactly when its partial sums are bounded above, its sum is then their supremum, every partial sum is at most the sum, and a convergent series of nonnegative terms has sum $\ge 0$ ([[thm-nonnegative-series-bounded-partial-sums]]).

[L4] $\sum_{k=0}^{\infty} 3^{-k} = 1/(1 - 3^{-1}) = 3 \cdot 2^{-1}$ ([[thm-geometric-series]], [[def-integer-power]], [[lem-power-laws]]).

[L5] Convergent series add and scale termwise ([[lem-series-linearity]]).

[L6] Recursion and induction on $\mathbb{N}$ ([[thm-recursion]], [[thm-induction-principle]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L8] $3^{-n} \to 0$ ([[lem-geometric-sequence-null]]); convergence is tested against rational $\varepsilon > 0$ and a convergent sequence has exactly one limit ([[def-real-limit]], [[lem-limit-unique]]); $|z| \ge 0$ and $|z| = z$ for $z \ge 0$ ([[lem-of-abs-value]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $3 > 0$ and $3^{-1} > 0$, and $3^{-1} < 2 \cdot 3^{-1}$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$\Phi$ is well defined and takes values in $[0,1]$.** For $a \in D$ every term $a_k 3^{-k-1}$ is $\ge 0$ by [L1] and [L9], and for every $n$ the partial sum satisfies $\sum_{k<n} a_k 3^{-k-1} \le \sum_{k<n} 2 \cdot 3^{-1} \cdot 3^{-k} = 2 \cdot 3^{-1} \sum_{k<n} 3^{-k} \le 2 \cdot 3^{-1} \cdot 3 \cdot 2^{-1} = 1$, by [L3], [L4] and [L9]. So by [L3] the series converges, its sum $\Phi(a)$ satisfies $0 \le \Phi(a) \le 1$, and $\Phi(a) \in [0,1]$ by [L1]. [given, L1, L3, L4, L9]

1.2 **Shift identity:** $\Phi(a) = a_0 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a)$ for every $a \in D$. Indeed by [L2] the partial sums satisfy $\sum_{k<n+1} a_k 3^{-k-1} = a_0 3^{-1} + \sum_{j<n} a_{j+1} 3^{-j-2} = a_0 3^{-1} + 3^{-1}\sum_{j<n} a_{j+1}3^{-j-1}$, using $3^{-j-2} = 3^{-1}\cdot 3^{-j-1}$ from [L1] and [L9]; letting $n$ grow and using [L5] and [L2] gives the identity. [given, L1, L2, L5, L9]

1.3 **Self-similarity of $C$**, claim 4. If $y \in C$ then $y \in C_n$ for every $n$, so $y \cdot 3^{-1} \in \tfrac13 C_n \subseteq C_{n+1}$ and $2 \cdot 3^{-1} + y \cdot 3^{-1} \in \tfrac23 + \tfrac13 C_n \subseteq C_{n+1}$ for every $n$, whence both lie in $\bigcap_n C_{n+1} = C$ by [L1]; this gives the inclusion $\supseteq$. Conversely let $x \in C$, so $x \in C_{n+1}$ for every $n$. By [L1] the first half of $C_{n+1}$ lies in $[0,\tfrac13]$ and the second in $[\tfrac23,1]$, and $\tfrac13 < \tfrac23$ by [L9]. If $x \le \tfrac13$ then $x \notin [\tfrac23,1]$, so for every $n$ one has $x \in \tfrac13 C_n$, that is $3x \in C_n$; hence $3x \in C$ and $x \in \tfrac13 C$. If $x > \tfrac13$ then $x \notin [0,\tfrac13]$, so for every $n$ one has $x \in \tfrac23 + \tfrac13 C_n$, that is $3x - 2 \in C_n$; hence $3x - 2 \in C$ and $x \in \tfrac23 + \tfrac13 C$. Disjointness is [L1] and [L9], since $\tfrac13 C \subseteq [0,\tfrac13]$ and $\tfrac23 + \tfrac13 C \subseteq [\tfrac23,1]$. [L1, L9]

2.1 **$\Phi(a) \in C$ for every $a \in D$.** By induction on $n$ ([L6]) the statement "for every $a \in D$, $\Phi(a) \in C_n$" holds for every $n$: at $n = 0$ it is step 1.1 and [L1]; and if it holds at $n$, then for $a \in D$ the value $a_0$ is $0$ or $2$, so step 1.2 gives $\Phi(a) = 3^{-1}\Phi(\sigma a) \in \tfrac13 C_n$ in the first case and $\Phi(a) = 2 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a) \in \tfrac23 + \tfrac13 C_n$ in the second, so $\Phi(a) \in C_{n+1}$ by [L1]. Hence $\Phi(a) \in \bigcap_n C_n = C$. [step 1.1, step 1.2, L1, L6]

2.2 **The digit recursion.** Fix $x \in C$ and let $T : \mathbb{R} \to \mathbb{R}$ be $T(y) := 3y$ for $y \le 3^{-1}$ and $T(y) := 3y - 2$ for $y > 3^{-1}$, a definition by cases on the total order ([L9]) and so a genuine function. By [L6] there is $y : \mathbb{N} \to \mathbb{R}$ with $y_0 = x$ and $y_{n+1} = T(y_n)$; put $a_n := 0$ when $y_n \le 3^{-1}$ and $a_n := 2$ otherwise, so that $a \in D$ and $y_{n+1} = 3 y_n - a_n$ for every $n$. Every $y_n$ lies in $C$, by induction on $n$: $y_0 = x \in C$; and if $y_n \in C$ then, by step 1.3, either $y_n \in \tfrac13 C \subseteq [0,\tfrac13]$ or $y_n \in \tfrac23 + \tfrac13 C \subseteq [\tfrac23,1]$, and these two cases are exactly $y_n \le \tfrac13$ and $y_n > \tfrac13$ by [L9]; in the first $y_n = z \cdot 3^{-1}$ with $z \in C$ and $y_{n+1} = 3y_n = z \in C$, in the second $y_n = 2 \cdot 3^{-1} + z \cdot 3^{-1}$ with $z \in C$ and $y_{n+1} = 3y_n - 2 = z \in C$. [step 1.3, L1, L6, L9]

2.3 **$\Phi$ is injective.** Let $a, b \in D$ with $a \ne b$; the set of $k$ with $a_k \ne b_k$ is a nonempty subset of $\mathbb{N}$, so by [L7] it has a least element $k$, and by symmetry we may take $a_k = 0$ and $b_k = 2$. By [L5], $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1}$, and the terms with $j < k$ vanish, so by [L2] this equals $2 \cdot 3^{-k-1} + R$ with $R := \sum_{j \ge k+1}(b_j - a_j)3^{-j-1}$. Every $b_j - a_j$ is at least $-2$, so the series $\sum_{j \ge k+1}\big((b_j - a_j) + 2\big)3^{-j-1}$ has nonnegative terms and hence nonnegative sum by [L3], giving $R \ge -\sum_{j \ge k+1} 2 \cdot 3^{-j-1} = -2 \cdot 3^{-k-2} \cdot 3 \cdot 2^{-1} = -3^{-k-1}$ by [L2], [L4], [L5] and [L9]. Therefore $\Phi(b) - \Phi(a) \ge 2 \cdot 3^{-k-1} - 3^{-k-1} = 3^{-k-1} > 0$ and $\Phi(a) \ne \Phi(b)$. [step 1.1, L2, L3, L4, L5, L7, L9]

3.1 **The value is recovered from the digits.** With $x$, $(y_n)$ and $a$ as in step 2.2, put $s_n := \sum_{k<n} a_k 3^{-k-1}$. Then $x = s_n + 3^{-n} y_n$ for every $n$, by induction on $n$ ([L6]): at $n = 0$ both sides are $x$, since $s_0 = 0$ by [L2] and $3^{0} = 1$; and if $x = s_n + 3^{-n}y_n$ then $s_{n+1} + 3^{-n-1}y_{n+1} = s_n + a_n 3^{-n-1} + 3^{-n-1}(3y_n - a_n) = s_n + 3^{-n}y_n = x$, using [L1], [L2] and [L9]. [step 2.2, L1, L2, L6, L9]

4.1 **Hence $x = \Phi(a)$, so $C \subseteq \Phi[D]$.** Every $y_n$ lies in $C \subseteq [0,1]$ by step 2.2 and [L1], so $0 \le x - s_n = 3^{-n}y_n \le 3^{-n}$ by step 3.1 and [L9]. Given a rational $\varepsilon > 0$, [L8] supplies $N$ with $3^{-n} < \varepsilon$ for all $n \ge N$, and then $|s_n - x| = x - s_n \le 3^{-n} < \varepsilon$ by [L8]; so $s_n \to x$. But $s_n \to \Phi(a)$ by [L2], since $(s_n)$ is the sequence of partial sums of the series defining $\Phi(a)$, and limits are unique by [L8]; therefore $x = \Phi(a)$ with $a \in D$. [step 2.2, step 3.1, L1, L2, L8, L9]

5.1 By steps 2.1 and 4.1 the image of $D$ under $\Phi$ is exactly $C$, which with step 1.1 is claim 1; step 2.3 is claim 2, so $\Phi$ is a surjection from $D$ onto $C$ that is injective, that is, a bijection ([[def-injection-surjection-bijection]]); the map $b \mapsto (2b_k)_k$ is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $D$, with inverse $a \mapsto (a_k \cdot 2^{-1})_k$ by [L9], and a composition of bijections is a bijection, which is claim 3; and step 1.3 is claim 4. [step 1.1, step 1.3, step 2.1, step 2.3, step 4.1, L9] ∎

## Remarks

- **The endpoints are the digit sequences that are eventually constant.** For
  instance $0 = \Phi(0,0,0,\dots)$, $1 = \Phi(2,2,2,\dots)$,
  $\tfrac13 = \Phi(0,2,2,2,\dots)$ and $\tfrac23 = \Phi(2,0,0,0,\dots)$, the
  first two by [[thm-geometric-series]] and the last two by the shift identity of
  step 1.2. That the eventually constant sequences do **not** exhaust $C$ is the
  content of [[cex-cantor-point-that-is-not-an-endpoint]], where $1/4$ is
  computed to be $\Phi(0,2,0,2,\dots)$.

- **No digit is ever $1$, and that is the whole point.** A real of $[0,1]$ with a
  ternary expansion using the digit $1$ at some place and not representable
  without it lies in one of the removed middle thirds. The theorem does not
  assert that every real has a ternary expansion, and it does not need to: the
  map $\Phi$ is constructed from the digits, and the converse direction extracts
  digits from a point of $C$ by the canonical recursion of step 2.2, never by
  invoking a general expansion theorem.

- **Where the choice-freeness lies.** The digit extraction is a definition by
  cases on a total order fed to [[thm-recursion]], so the whole passage from a
  point of $C$ to its digit sequence is a single function, not a sequence of
  selections. The same discipline governs [[thm-perfect-set-uncountable-r]] and
  [[thm-baire-category-r]].

- **Claim 3 is what makes $C$ uncountable.** $\{0,1\}^{\mathbb{N}}$ is in
  bijection with the power set of $\mathbb{N}$, which is uncountable by
  [[thm-cantor-powerset]]; that route and the perfect-set route are both recorded
  in [[thm-cantor-set-properties]].
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

### `thm-nested-interval-property`

````markdown
---
id: thm-nested-interval-property
kind: theorem
title: "A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-interval, def-monotone-sequence, thm-monotone-convergence, def-complete-ordered-field, lem-sup-unique, thm-infimum-property, def-bounded-set, def-real-limit, def-sequence, thm-algebra-of-limits, lem-limit-unique, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-nested-intervals-single-point, cex-nested-open-intervals-empty, cex-nested-unbounded-closed-empty]
aliases: []
landmark: true
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
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.38)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §1.4"
      url: "https://www.jirka.org/ra/"
---

## Statement

For each $k \in \mathbb{N}$ let $I_k = [a_k, b_k]$ be a closed bounded interval
with $a_k \le b_k$ ([[def-interval]]), and suppose the family is **nested**:

$$I_{k+1} \subseteq I_k \qquad (k \in \mathbb{N}).$$

Write $\ell_k = b_k - a_k \ge 0$ for the length of $I_k$. Then:

1. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is **nonempty**. More precisely,
   with $a = \sup\{a_k : k \in \mathbb{N}\}$ and
   $b = \inf\{b_k : k \in \mathbb{N}\}$, both of which exist, one has $a \le b$
   and $$\bigcap_{k \in \mathbb{N}} I_k = [a, b].$$
2. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is a **single point** if and only
   if $\ell_k \to 0$ ([[def-real-limit]]).

Every hypothesis is load bearing. Dropping closedness makes the intersection
empty; dropping boundedness does the same; and dropping nonemptiness of the
individual intervals is vacuously fatal.

## Facts & Assumptions

**Given:** Closed bounded intervals $I_k = [a_k, b_k]$ with $a_k \le b_k$ for every $k \in \mathbb{N}$ and $I_{k+1} \subseteq I_k$ for every $k$; the sequences $(a_k)$ and $(b_k)$ of reals ([[def-sequence]]); their ranges $A = \{a_k : k \in \mathbb{N}\}$ and $B = \{b_k : k \in \mathbb{N}\}$, both nonempty; and $\ell_k = b_k - a_k$.

[L1] Closed bounded intervals: $[a,b] = \{x \in \mathbb{R} : a \le x \le b\}$; it is nonempty exactly when $a \le b$, it is the singleton $\{a\}$ when $a = b$, it has two distinct elements $a$ and $b$ when $a < b$, and its length is $b - a$ ([[def-interval]]).

[L2] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded above has a unique supremum; the supremum is an upper bound and is $\le$ every upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L3] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded below has a unique infimum; the infimum is a lower bound and is $\ge$ every lower bound ([[thm-infimum-property]], [[lem-sup-unique]]).

[L4] Monotone sequences, and the fact that consecutive comparisons suffice: $x_k \le x_{k+1}$ for all $k$ makes $(x_k)$ nondecreasing, and $x_{k+1} \le x_k$ for all $k$ makes it nonincreasing ([[def-monotone-sequence]]).

[L5] Monotone convergence: a nondecreasing sequence whose range is bounded above converges to the supremum of its range, and a nonincreasing sequence whose range is bounded below converges to the infimum ([[thm-monotone-convergence]]).

[L6] Algebra of limits: if $u_k \to u$ and $v_k \to v$ then $u_k - v_k \to u - v$ ([[thm-algebra-of-limits]]).

[L7] A sequence of reals has at most one limit ([[lem-limit-unique]]).

[L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).

[L9] The order on $\mathbb{N}$ is total and transitive, so any two indices $k, l$ admit an index $m$ with $k \le m$ and $l \le m$, namely the larger of the two ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Nestedness read on the endpoints: since $a_{k+1} \le b_{k+1}$, both $a_{k+1}$ and $b_{k+1}$ lie in $I_{k+1} \subseteq I_k$, so $a_k \le a_{k+1}$ and $b_{k+1} \le b_k$ for every $k$. [given, L1]

2.1 Hence $(a_k)$ is nondecreasing and $(b_k)$ is nonincreasing. [step 1.1, L4]

3.1 For all indices $k$ and $l$: choosing $m$ with $k \le m$ and $l \le m$ gives $a_k \le a_m \le b_m \le b_l$, so $a_k \le b_l$. [step 2.1, given, L9]

4.1 Every $b_l$ is therefore an upper bound of $A$ and every $a_k$ a lower bound of $B$; both sets are nonempty, so $a := \sup A$ and $b := \inf B$ exist and are unique. [step 3.1, L2, L3, L8]

5.1 $a \le b$: each $b_l$ is an upper bound of $A$, so $a \le b_l$ for every $l$ by leastness of the supremum; thus $a$ is a lower bound of $B$, and $a \le b$ by greatestness of the infimum. [step 4.1, L2, L3]

5.2 By monotone convergence, $a_k \to a$ and $b_k \to b$. [step 2.1, step 4.1, L5]

5.3 The intersection is exactly $[a,b]$: a real $x$ lies in every $I_k$ exactly when $a_k \le x \le b_k$ for every $k$, that is exactly when $x$ is an upper bound of $A$ and a lower bound of $B$, and by leastness of $a$ and greatestness of $b$ that holds exactly when $a \le x \le b$. [step 4.1, L1, L2, L3]

6.1 $\ell_k = b_k - a_k \to b - a$ by the algebra of limits. [step 5.2, L6]

6.2 Since $a \le b$, the interval $[a,b]$ is nonempty, so the intersection is nonempty; together with step 5.3 this is claim 1. [step 5.1, step 5.3, L1]

7.1 If $\ell_k \to 0$ then $b - a = 0$ by uniqueness of limits, so $a = b$ and the intersection is $[a,a] = \{a\}$, a single point. [step 5.3, step 6.1, L1, L7]

7.2 Conversely, if the intersection is a single point then $a = b$: it equals $[a,b]$ with $a \le b$, and $a < b$ would give the two distinct elements $a$ and $b$. Hence $b - a = 0$ and $\ell_k \to 0$ by step 6.1. [step 5.1, step 5.3, step 6.1, L1]

8.1 Claim 1 is step 6.2 and claim 2 is the pair of implications in steps 7.1 and 7.2, so a nested sequence of nonempty closed bounded intervals has nonempty intersection, equal to $[a,b]$, and that intersection is a single point exactly when the lengths tend to $0$. [step 6.2, step 7.1, step 7.2] ∎

## Remarks

- **No Archimedean input is needed.** The lengths are handled entirely by the
  algebra of limits and the uniqueness of limits: $\ell_k$ always converges, to
  $b - a$, and the two directions of claim 2 are then the two directions of
  "$b - a = 0$". A proof that instead argues "if $b - a > 0$ then some $\ell_k$
  is smaller" does need the Archimedean property
  ([[cor-archimedean-reciprocal]]), and it is avoidable, so it is avoided.

- **Nestedness gives more than it is usually stated to give.** The intersection
  is not merely nonempty; it is the closed interval $[a,b]$, and $a$ and $b$ are
  the limits of the endpoint sequences. The single-point case is exactly the case
  in which those two limits agree, and that is what makes the nested interval
  property usable as a *construction* of a real number, as in
  [[ex-nested-intervals-single-point]].

- **This is one of the standard equivalents of completeness.** Nested intervals
  together with the Archimedean property imply the least-upper-bound property, so
  the implication proved here is not reversible for free: it is half of an
  equivalence whose other half needs the Archimedean hypothesis separately.
  [[rem-completeness-routes]] records where this library stands on those routes.

- **The witnesses for the two deleted hypotheses** are
  [[cex-nested-open-intervals-empty]], which keeps boundedness and drops
  closedness, and [[cex-nested-unbounded-closed-empty]], which keeps closedness
  and drops boundedness. Neither is used above; each shows that the corresponding
  hypothesis cannot be removed.
````

### `thm-perfect-set-uncountable-r`

````markdown
---
id: thm-perfect-set-uncountable-r
kind: theorem
title: "Every nonempty perfect subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-perfect-set-r, thm-nested-interval-property, def-countable, lem-countable-iff-surjection-from-n, thm-recursion, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-limit-point-r, lem-rat-embeds-dense, thm-rationals-countable, thm-well-ordering-principle, cor-archimedean-reciprocal, thm-of-archimedean, def-injection-surjection-bijection, def-equinumerous, def-real-limit, def-sequence, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, lem-finite-set-has-max, def-max-min, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [ex-closed-interval-is-perfect, cex-closed-set-with-an-isolated-point-is-not-perfect, ex-reciprocals-with-zero-are-compact]
aliases: []
landmark: true
short: "nonempty perfect $\\Rightarrow$ uncountable"
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Cantor-Bendixson theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%E2%80%93Bendixson_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.43)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "A. W. Miller, Tameness notes"
      url: "https://people.math.osu.edu/miller.1987/tameness.pdf"
pipeline_run: null
---

## Statement

Let $P \subseteq \mathbb{R}$ be nonempty and perfect ([[def-perfect-set-r]]).
Then $P$ is uncountable ([[def-countable]]).

**The selection is canonical, so that this proof spends no dependent choice.**
The textbook proof shrinks a neighbourhood at every stage by *choosing* a point
of $P$ and then a radius, a choice made infinitely often and each time depending
on the previous one: that is the axiom of dependent choice
([[def-dependent-choice]]), which is not available at this point in the reading
order; only the axiom of countable choice is, and it does not
licence a recursive selection. The construction below therefore fixes an
enumeration $e$ of the rationals once ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval with
**least-indexed rational endpoints** meeting the requirements. The requirements
are met by some rational-endpoint interval, which is what step 2.1 proves, and
the least such index is determined by [[thm-well-ordering-principle]], so the
whole recursion is a single application of [[thm-recursion]] to a total map and
no choice principle is used anywhere.

## Facts & Assumptions

**Given:** A nonempty perfect set $P \subseteq \mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ denotes the set of good pairs.

[L1] $P$ is perfect: $P$ is closed and every $x \in P$ is a limit point of $P$, so every punctured neighbourhood of $x$ meets $P$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] $\overline{A}$ is the set of points every neighbourhood of which meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisations-r]], [[def-open-and-closed-in-r]]).

[L3] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\}$; and $y \in N_\varepsilon(x)$ with $0 < \delta \le \varepsilon - |y - x|$ gives $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L4] Intervals: $(p,q)$ is an open set and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-interval]], [[def-open-and-closed-in-r]]).

[L5] A nonempty at most countable set admits a surjection from $\mathbb{N}$; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L6] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L8] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L9] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection is nonempty, and it is a single point exactly when the lengths $b_k - a_k$ tend to $0$ ([[thm-nested-interval-property]]).

[L10] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); canonical naturals are positive and increasing, and reciprocation of positives reverses the order ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L11] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]); $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant and multiplying by a positive preserve inequalities ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L12] Convergence of a sequence of reals to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L13] Absolute value: $|z| \ge 0$, and $|y - x| \le b - a$ whenever $x, y \in [a,b]$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the nonempty perfect set $P$ is at most countable; by [L5] fix a surjection $f : \mathbb{N} \to P$. [assume-contra, L5, choose]

1.2 By [L6] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$ with $\iota(q) = \hat q$, a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L6, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$, every $x \in \mathbb{R}$ and every real $\eta > 0$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q)$, $x \notin [p',q']$ and $q' - p' < \eta$. To see it, fix $y \in (p,q) \cap P$ and, $(p,q)$ being open, a real $\varepsilon > 0$ with $N_\varepsilon(y) \subseteq (p,q)$; since $y \in P$ is not isolated, [L1] gives $z \in N^{*}_\varepsilon(y) \cap P$, so $z \in P \cap (p,q)$ and $z \ne y$. At least one of $y, z$ differs from $x$; let $w$ be $y$ if $y \ne x$ and $z$ otherwise, so $w \in P \cap N_\varepsilon(y)$ and $w \ne x$. Put $\delta := \min\{\, \varepsilon - |w - y|,\ |w - x|,\ \eta \cdot 2^{-1} \,\}$, a positive real by [L11] since each entry is positive, and use [L6] to fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $w - \delta < p' < w < q' < w + \delta$. Then $[p',q'] \subseteq N_\delta(w) \subseteq N_\varepsilon(y) \subseteq (p,q)$ by [L3], the pair $(p',q')$ is good because $w \in (p',q') \cap P$, the point $x$ lies outside $N_\delta(w)$ because $|x - w| \ge \delta$, and $q' - p' < 2\delta \le \eta$. [step 1.3, L1, L3, L4, L6, L11, choose]

3.1 **Successor rule.** For $(k,(p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $n$ makes $(e(m),e(n))$ good with $[e(m),e(n)] \subseteq (p,q)$, $f(k) \notin [e(m),e(n)]$ and $e(n) - e(m) < 1/(k+1)$, and let $n$ be the least natural with those properties for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m),e(n)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $x = f(k)$ and $\eta = 1/(k+1) > 0$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$, so both minima exist by [L7] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 2.1, L6, L7, L10, construct]

4.1 **The recursion.** $P$ is nonempty, so fix $y_0 \in P$ and, by [L6], elements $p_0 < y_0 < q_0$ of $\mathbb{Q}_{\mathbb{R}}$; then $(p_0,q_0)$ is good. Apply [L8] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$ with every $(p_k,q_k)$ good. [step 1.3, step 3.1, L6, L8, construct]

5.1 Writing $I_k := [p_k,q_k]$ and $\ell_k := q_k - p_k > 0$, the rule of step 3.1 gives, for every $k \in \mathbb{N}$: $I_{k+1} \subseteq (p_k,q_k) \subseteq I_k$, so the intervals are nested and nonempty; $f(k) \notin I_{k+1}$; $\ell_{k+1} < 1/(k+1)$; and $I_k \cap P \ne \varnothing$, because $(p_k,q_k) \cap P \ne \varnothing$. [step 3.1, step 4.1, L4]

6.1 For every real $\varepsilon > 0$ there is $k \ge 1$ with $\ell_k < \varepsilon$, and moreover $\ell_k \to 0$: by step 5.1 one has $\ell_j < 1/j$ for every $j \ge 1$, since $\ell_j = \ell_{(j-1)+1} < 1/((j-1)+1) = 1/j$; given $\varepsilon > 0$, [L10] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and then every $k \ge n$ satisfies $k \ge 1$ and $|\ell_k - 0| = \ell_k < 1/k \le 1/n < \varepsilon$ by [L10] and [L13], which is both assertions, the second by [L12] since a rational $\varepsilon > 0$ is in particular a real one. [step 5.1, L10, L12, L13]

7.1 By [L9] the nested family $(I_k)$ of nonempty closed bounded intervals has an intersection that is a single point, since its lengths tend to $0$ by step 6.1; write $\{x\}$ for it, so $x \in I_k$ for every $k$. [step 5.1, step 6.1, L9]

8.1 $x \in P$: let $\varepsilon > 0$ be real and use step 6.1 to fix $k \ge 1$ with $\ell_k < \varepsilon$; by step 5.1 there is $y \in I_k \cap P$, and $x \in I_k$ by step 7.1, so $|y - x| \le \ell_k < \varepsilon$ by [L13] and $y \in N_\varepsilon(x) \cap P$. Every neighbourhood of $x$ therefore meets $P$, so $x \in \overline{P} = P$ by [L1] and [L2]. [step 5.1, step 6.1, step 7.1, L1, L2, L3, L13]

9.1 For every $k \in \mathbb{N}$ one has $x \in I_{k+1}$ by step 7.1 while $f(k) \notin I_{k+1}$ by step 5.1, so $x \ne f(k)$; thus the element $x$ of $P$ found in step 8.1 is not a value of $f$, contradicting the surjectivity of the $f$ fixed in step 1.1. The assumption is therefore untenable: a nonempty perfect subset of $\mathbb{R}$ is not at most countable, that is, it is uncountable. [step 1.1, step 5.1, step 7.1, step 8.1, L5, discharge-contradiction] ∎

## Remarks

- **Which hypothesis does what.** Closedness of $P$ is used exactly once, at the
  step that puts the limit point $x$ back into $P$; without it the construction
  still produces a point, but that point may lie outside $P$ and the
  contradiction evaporates. Having no isolated points is used exactly once, in
  the refinement claim, to produce a second point of $P$ inside a neighbourhood,
  which is what allows the excluded point $f(k)$ to be dodged. Nonemptiness is
  used to seed the recursion, and it cannot be dropped: $\varnothing$ is perfect
  and countable ([[def-perfect-set-r]]).

- **Why rational endpoints.** They are what make the construction canonical.
  The requirement "some good rational-endpoint interval inside $(p,q)$ misses
  $f(k)$ and is short" is a property of a pair of natural numbers, so it can be
  minimised by [[thm-well-ordering-principle]]; the same requirement stated for
  arbitrary real endpoints comes with no canonical least witness, and picking one
  would be a choice made afresh at every stage. This is the same device that
  keeps
  [[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]] choice
  free, transplanted from subsets of $\mathbb{N}$ to intervals.

- **The shrinking condition is $\ell_{k+1} < 1/(k+1)$ and not $1/k$.** Sequences
  and recursions here are indexed from $0$ ([[def-sequence]]), so the bound
  available at stage $k$ has to be positive at $k = 0$; $1/k$ is undefined
  there. The consequence, $\ell_j < 1/j$ for $j \ge 1$, is what step 6.1 uses,
  and it says nothing about $\ell_0$, which is not needed.

- **The result is sharp in both directions.** A nondegenerate closed interval is
  perfect and uncountable ([[ex-closed-interval-is-perfect]]), and deleting the
  no-isolated-points clause loses the conclusion: a closed set with an isolated
  point need not be perfect
  ([[cex-closed-set-with-an-isolated-point-is-not-perfect]]) and may be
  countable, as $\{\, 1/k : k \ge 1 \,\} \cup \{0\}$ is
  ([[ex-reciprocals-with-zero-are-compact]]). Applied to a
  nondegenerate closed interval, which [[ex-closed-interval-is-perfect]] shows
  to be perfect, the theorem reproves the uncountability of intervals
  ([[cor-interval-uncountable]]) by a different route; the two proofs share
  nothing but the completeness of $\mathbb{R}$, which
  [[cor-interval-uncountable]] spends as a supremum and the argument above
  spends through [[thm-nested-interval-property]].
````

### `thm-r-uncountable`

````markdown
---
id: thm-r-uncountable
kind: theorem
title: "$\\mathbb{R}$ is uncountable (Cantor's nested intervals, 1874)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, def-complete-ordered-field, thm-recursion, lem-sup-epsilon, lem-sup-unique, def-bounded-set, lem-countable-iff-surjection-from-n, lem-of-add-order, def-ordered-field, cor-of-one-positive, lem-of-inverse-positive, lem-of-sign-rules, thm-induction-principle, def-natural-numbers, def-nat-order, lem-nat-trichotomy, lem-nat-order-is-membership]
justified_by: []
aliases: [thm-reals-uncountable]
landmark: true
short: "no surjection $\\mathbb N\\to\\mathbb R$"
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Cantor's first set theory article (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_first_set_theory_article"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
Then $\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection
$\mathbb{N} \to \mathbb{R}$, so $\mathbb{R}$ is neither finite nor countably
infinite.

The proof is Cantor's original argument of 1874, not the decimal diagonal.
Assuming a surjection $f : \mathbb{N} \to \mathbb{R}$, one builds nested closed
intervals $[a_n, b_n]$ with $a_n < b_n$ and $f(n) \notin [a_{n+1}, b_{n+1}]$, and
then $\sup\{a_n\}$ is a real number that $f$ misses. **The decimal diagonal is
deliberately avoided**: decimal expansions are infinite series, which this
library has not yet constructed, so a diagonal proof here would rest on machinery
that does not exist. The diagonal argument survives in its non-circular form, on
power sets, as Cantor's theorem earlier on this page; see the remarks below.

**The construction uses no choice, and that is what the thirds are for.** Given
$[a_n, b_n]$ of length $d$, its three closed thirds
$[a_n, a_n + d/3]$, $[a_n + d/3, a_n + 2d/3]$, $[a_n + 2d/3, b_n]$ cannot all
contain $f(n)$, because the first and the third are disjoint; the rule takes the
**first one in that fixed order** which does not contain $f(n)$. That is a
definition by cases, so the whole construction is a single application of the
recursion theorem ([[thm-recursion]]) to one explicitly given function. A version
of the argument that says "pick a third avoiding $f(n)$" would be using dependent
choice, silently and unnecessarily.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$, with $0 \ne 1$ and the order of [[def-ordered-field]]. For $a \le b$ write $[a,b] = \{\, x \in \mathbb{R} : a \le x \le b \,\}$, and write $I = \{\, (a,b) \in \mathbb{R} \times \mathbb{R} : a < b \,\}$ for the set of pairs coding nondegenerate closed intervals.

[L1] Least-upper-bound property: every nonempty $S \subseteq \mathbb{R}$ that is bounded above has a least upper bound $\sup S$, an upper bound below every upper bound ([[def-complete-ordered-field]], [[def-bounded-set]]).

[L2] The least upper bound is unique when it exists ([[lem-sup-unique]]).

[L3] Epsilon characterisation: for a nonempty $S$ bounded above and an upper bound $u$ of $S$, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Order and arithmetic in an ordered field: $0 < 1$ ([[cor-of-one-positive]]); $a < b$ implies $a + c < b + c$, and $a < b$ with $c < d$ implies $a + c < b + d$ ([[lem-of-add-order]]); $a > 0$ implies $a^{-1} > 0$ ([[lem-of-inverse-positive]]); a product of positives is positive ([[lem-of-sign-rules]]); the order is transitive and satisfies trichotomy ([[def-ordered-field]]).

[L5] Recursion: for any set $X$, $x_0 \in X$ and $F : X \to X$ there is $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Induction ([[thm-induction-principle]]); any two naturals are comparable ([[lem-nat-trichotomy]]); the order of $\mathbb{N}$ is the additive one, $m \le n$ meaning $m + k = n$ for some $k$ ([[def-nat-order]], [[def-natural-numbers]]), and it satisfies $n < \sigma(n)$ and $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]]), so $m \le \sigma(n)$ holds exactly when $m \le n$ or $m = \sigma(n)$.

[L7] A nonempty set is at most countable if and only if some surjection from $\mathbb{N}$ onto it exists; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\mathbb{R}$ is at most countable. Since $0 \in \mathbb{R}$, it is nonempty, so [L7] provides a surjection $f : \mathbb{N} \to \mathbb{R}$. [assume-contra, given, L7]

1.2 Put $3 := 1 + 1 + 1$. Adding the inequality $0 < 1$ to itself twice gives $3 > 0$ by [L4], so $3 \ne 0$ and $3^{-1} > 0$; hence for $d > 0$ the element $d/3 := d \cdot 3^{-1}$ is positive, and $d/3 + d/3 + d/3 = d \cdot 3^{-1} \cdot 3 = d$. [L4, algebra]

2.1 Fix the trisection rule. Let $(a,b) \in I$ and $y \in \mathbb{R}$. Put $d = b - a > 0$, $p = a + d/3$ and $q = p + d/3$; then $a < p < q < b$ by step 1.2 and [L4], since $p - a = q - p = b - q = d/3 > 0$. The three pairs $(a,p)$, $(p,q)$, $(q,b)$ all lie in $I$ and their intervals are contained in $[a,b]$. Moreover $[a,p]$ and $[q,b]$ are disjoint, because $x \le p < q \le x$ is impossible; so $y$ fails to lie in at least one of the three. Define $T(a,b,y)$ to be the **first** of $(a,p)$, $(p,q)$, $(q,b)$, in that fixed order, whose interval does not contain $y$. This is a definition by cases on the three conditions $y \in [a,p]$, $y \in [p,q]$, $y \in [q,b]$, so $T : I \times \mathbb{R} \to I$ is a function and no choice is made. [step 1.2, L4, construct]

3.1 Apply [L5] with $X = \mathbb{N} \times I$, $x_0 = (0, (0,1))$, which lies in $X$ because $0 < 1$ by [L4], and $F(n, (a,b)) = (\sigma(n), T(a, b, f(n)))$: this yields $h : \mathbb{N} \to \mathbb{N} \times I$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$. An induction using [L6] shows the first coordinate of $h(n)$ is $n$, so we may write $h(n) = (n, (a_n, b_n))$ with $a_n < b_n$, $a_0 = 0$, $b_0 = 1$ and $(a_{\sigma(n)}, b_{\sigma(n)}) = T(a_n, b_n, f(n))$ for every $n$. By step 2.1 this gives $a_n \le a_{\sigma(n)}$, $b_{\sigma(n)} \le b_n$ and $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$. [step 1.1, step 2.1, L4, L5, L6, construct]

4.1 For $m \le n$ one has $a_m \le a_n$ and $b_n \le b_m$, by induction on $n$ using step 3.1 and transitivity; consequently $a_m \le b_n$ for all $m, n$: if $m \le n$ then $a_m \le a_n < b_n$, and if $n \le m$ then $a_m < b_m \le b_n$, and any two naturals are comparable by [L6]. [step 3.1, L4, L6]

5.1 The set $S = \{\, a_n : n \in \mathbb{N} \,\}$ is nonempty and bounded above by $b_0$ by step 4.1, so [L1] gives its least upper bound $x = \sup S$, unique by [L2]. [step 3.1, step 4.1, L1, L2]

6.1 For every $n$: $a_n \le x$, because $x$ is an upper bound of $S$; and $x \le b_n$, because otherwise $\varepsilon := x - b_n > 0$ and [L3] would produce $a_m \in S$ with $b_n = x - \varepsilon < a_m$, contradicting $a_m \le b_n$ from step 4.1. Hence $x \in [a_n, b_n]$ for every $n$. [step 4.1, step 5.1, L1, L3, L4]

7.1 Fix $n \in \mathbb{N}$. By step 6.1 applied to $\sigma(n)$, $x \in [a_{\sigma(n)}, b_{\sigma(n)}]$, whereas $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$ by step 3.1, so $x \ne f(n)$. As $n$ was arbitrary, the real number $x$ is not a value of $f$, contradicting the surjectivity of $f$ obtained in step 1.1. Therefore no surjection $\mathbb{N} \to \mathbb{R}$ exists and, $\mathbb{R}$ being nonempty, [L7] makes $\mathbb{R}$ uncountable. [step 1.1, step 3.1, step 6.1, L7, discharge-contradiction] ∎

## Remarks

- **What the proof actually uses.** Completeness enters once, at step 5.1, to produce $\sup\{a_n\}$; everything else is ordered-field arithmetic and the recursion theorem. The argument therefore applies verbatim to any ordered field with the least-upper-bound property, and it fails for $\mathbb{Q}$ exactly because the supremum of the left endpoints need not exist there, which is as it should be, since $\mathbb{Q}$ is countable ([[thm-rationals-countable]]).

- **Why thirds and not halves.** Two closed halves share the midpoint, so if $f(n)$ happens to be that midpoint then *both* halves contain it and the rule "take the first closed half not containing $f(n)$" has nothing to return. Three closed thirds fix this: the first and the third are disjoint, so at least one of the three always misses $f(n)$, and listing them in a fixed order makes the selection a definition by cases rather than a choice. Open intervals would avoid the overlap too, but closed intervals are what make step 6.1 work, since the point $\sup\{a_n\}$ must be allowed to be an endpoint.

- **The diagonal argument is not lost, only relocated.** [[thm-cantor-powerset]], proved earlier on this page, is Cantor's diagonal argument in a setting where it needs nothing but the Power Set and Separation axioms. What is unavailable here is only the *decimal* diagonal, and only because decimal expansions are infinite series.

- **The choice-freeness matters beyond tidiness.** It is what lets [[fs-countable-union-theorem-of-zf]] draw a conclusion about ZF: since this theorem is proved in ZF alone, any model of ZF in which $\mathbb{R}$ is a countable union of countable sets is a model in which the countable-union theorem fails.

- **The argument gives more than the statement does.** Nothing above depends on the starting interval being $(0,1)$, so re-seeding the recursion inside a given interval shows that every nondegenerate interval, open or closed, is uncountable. That extension is [[cor-interval-uncountable]], next on this page, where it is proved rather than asserted.
````

