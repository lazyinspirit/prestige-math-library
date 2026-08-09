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

- critical risk (11): 10 declared dependencies; 5 cited facts; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language
- Wave 7 ai-generated statement seed

## Target item — `cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension`

Normalized current SHA-256: `4f35564b013645e9731fce37520b3f8be6bdc7eaccdd21e306977d3a74388169`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension
kind: counterexample
title: "The reciprocal on $(0,1]$ is continuous and extends to no continuous function on $\\mathbb{R}$, so closedness of the subspace is not decoration in the $\\mathbb{R}$-valued Tietze extension"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends,
       thm-tietze-extension-theorem, cor-tietze-for-unbounded-and-open-interval-valued-maps, def-continuity-real, thm-algebra-of-continuous-functions,
       cor-boundedness-theorem-r, cor-archimedean-reciprocal, def-interval,
       def-subspace-topology-top, thm-heine-borel-r]
justified_by: []
aliases: []
landmark: false
short: "reciprocal on $(0,1]$, no continuous extension"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
pipeline_run: null
---

## Statement refuted

The continuous function $f : (0,1] \to \mathbb{R}$, $f(x) := 1/x$, extends to a
continuous function $F : \mathbb{R} \to \mathbb{R}$.

This is the single witness behind
[[fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends]],
presented on its own as the counterexample it is: it shows that dropping the
hypothesis "$A$ closed" from
[[cor-tietze-for-unbounded-and-open-interval-valued-maps]] is not a minor
loosening but breaks that extension statement outright, on the very space
$\mathbb{R}$ where it is otherwise available.

**Which statement this witness refutes, and which it does not.** The corollary is
the $\mathbb{R}$-valued form, and $f$ meets every one of its hypotheses except
closedness of $A$, so it isolates that hypothesis exactly. It does **not** refute
[[thm-tietze-extension-theorem]] itself with the closedness hypothesis removed:
that theorem is stated for maps into a bounded interval $[a,b]$, and $f$ is
unbounded, so $f$ fails its codomain hypothesis as well. A witness violating two
hypotheses cannot isolate one.

## Facts & Assumptions

**Given:** $A := (0,1] \subseteq \mathbb{R}$ and $f : A \to \mathbb{R}$, $f(x) := 1/x$.

[L1] Quotients of continuous real functions with nonvanishing denominator are continuous ([[thm-algebra-of-continuous-functions]], clause 4).

[L2] Continuity passes to subsets of the domain ([[def-continuity-real]]).

[L3] $[0,1]$ is compact ([[thm-heine-borel-r]]); a continuous real function on a compact subset of its domain is bounded there ([[cor-boundedness-theorem-r]]).

[L4] For every real $\varepsilon>0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $f$ is continuous on $A$ by [L1], with $0 \notin A$. [given, L1]

1.2 For every real $M$ there is $x \in A$ with $f(x)>M$: for $M \le 0$ take $x:=1$; for $M>0$, [L4] with $\varepsilon := 1/(M+1)$ gives a natural $n \ge 1$ with $1/n < 1/(M+1)$, hence $n>M$, and $x := 1/n \in (0,1]=A$ has $f(x)=n>M$. [given, L4, algebra, choose]

1.3 Suppose, toward a contradiction, that a continuous $F : \mathbb{R} \to \mathbb{R}$ extends $f$. [assume-contra]

2.1 Under step 1.3: $F|_{[0,1]}$ is continuous by [L2]; by [L3], $[0,1]$ is compact and $F|_{[0,1]}$ is therefore bounded: fix real $M_0 \ge 0$ with $|F(x)| \le M_0$ for every $x \in [0,1]$. [step 1.3, L2, L3, choose]

3.1 Under step 1.3: for $x \in A \subseteq [0,1]$, $F(x)=f(x)$, so $f(x) \le M_0$ for every $x \in A$ by step 2.1; but step 1.2 with $M:=M_0$ gives $x_0 \in A$ with $f(x_0)>M_0$, a contradiction. [step 1.3, step 2.1, step 1.2, discharge-contradiction] ∎

## Remarks

- **The only hypothesis of the $\mathbb{R}$-valued extension statement that fails here is closedness of $A$.** $\mathbb{R}$ is normal and $f$ is continuous on $A$; the closure of $A$ in $\mathbb{R}$ is $[0,1]$, and it is exactly the missing point $0$ where $f$ has nowhere finite to go. Against [[thm-tietze-extension-theorem]] itself the witness fails a second hypothesis, since that theorem takes values in a bounded interval and $f$ does not, which is why the statement refuted above is framed against [[cor-tietze-for-unbounded-and-open-interval-valued-maps]].

- **The obstruction is boundedness, not the existence of a limit.** Step 1.2 shows $f$ is unbounded on every neighbourhood of the missing point directly from the reciprocal's growth, with no appeal to $\lim_{x \to 0^+} f(x)$ failing to exist as a real number.
````

## Wave 7 provenance row for the target

```json
{
  "id": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "Direct verification: 1/x is continuous on (0,1] and unbounded near zero, whereas any continuous extension would be bounded on compact [0,1].",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let\n$\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at\n$c$ ([[def-continuity-real]]). Then:\n\n1. $f + g$, $\\alpha f$ and $fg$ are continuous at $c$;\n2. $|f|$, the function $x \\mapsto |f(x)|$, is continuous at $c$;\n3. $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, defined pointwise by\n   $x \\mapsto \\max\\{f(x), g(x)\\}$ and $x \\mapsto \\min\\{f(x), g(x)\\}$\n   ([[def-max-min]]), are continuous at $c$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is continuous at\n   $c$ as a function on $A_0$.\n\nMoreover, with no hypothesis at all:\n\n5. every constant function $A \\to \\mathbb{R}$ and the identity\n   $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence\n   so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$\n   ([[def-integer-power]]), and hence so is every **polynomial function**\n   $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients.\n\nConsequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,\n$\\alpha f$, $fg$, $|f|$, $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, and\n$(f/g)|_{A_0}$ is continuous on $A_0$.\n\n**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,\nand $g$ may well vanish at points of $A$ far from $c$. The hypothesis is\n$g(c) \\ne 0$, not \"$g$ nowhere zero\"; what it buys is that $c$ itself lies in\nthe smaller domain, which is what makes continuity there mean anything.\n\n**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from\n[[thm-algebra-of-function-limits]], which is itself proved from $\\varepsilon$\nand $\\delta$, and claims 2, 3 and 5 are proved directly below. So no choice\nprinciple is used anywhere in this item.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and\nabsolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and\nneighbourhoods are those of [[def-neighbourhood-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **continuous at $c$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with\n\n$$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$\n\n$f$ is **continuous on $A$** when it is continuous at every point of $A$.\n\n**The point $c$ is required to lie in $A$, and the condition is unpunctured.**\nBoth differ from [[def-function-limit]], and deliberately. There the quantifier\nruns over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed,\nand at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is\nautomatic. So allowing $x = c$ costs nothing, and it is what lets the definition\nbe stated at every point of $A$, including the points where no limit exists.\n\n**Three clauses, and all three are part of the definition.**\n\n1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.\n\n2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$\n   ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real\n   $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take\n   $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$\n   itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.\n\n3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and\n   nothing more. It is not a condition relating $f$ to points outside $A$.\n\nEvery point of $A$ is either a limit point of $A$ or an isolated point of $A$,\nand never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe\ncontinuity at every point of $A$.\n\n**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.\n\n**Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$\n([[def-open-and-closed-in-r]]), then every $c \\in A$ has some\n$N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty\n([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and\nclause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate\ninterval ([[def-interval]]). Isolated points are what force clause 2 to exist at\nall, and they occur as soon as $A$ is allowed to be an arbitrary subset of\n$\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-heine-borel-r",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a \\le b$. Then the closed bounded interval\n$[a,b]$ ([[def-interval]]) is compact ([[def-open-cover-r]]): every family of\nopen subsets of $\\mathbb{R}$ whose union contains $[a,b]$ has a finite subfamily\nwhose union already contains $[a,b]$.\n\nThe proof is by repeated bisection. Supposing some open cover admits no finite\nsubcover, one halves the interval, keeps a half that still admits none, and\niterates; the halves shrink to a point, which the cover does reach, and a single\nmember of the cover then swallows a whole late-stage half. **The halving rule is\ncanonical**, taking the left half whenever the left half works, so the recursion\nuses [[thm-recursion]] and no choice principle.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-boundedness-theorem-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ be continuous on $A$\n([[def-continuity-real]]) and let $K \\subseteq A$ be compact\n([[def-open-cover-r]]). Then $f$ is **bounded on $K$**: there is a real\n$M \\ge 0$ with\n\n$$|f(x)| \\le M \\qquad \\text{for every } x \\in K .$$\n\nEquivalently, $f[K]$ is a bounded subset of $\\mathbb{R}$\n([[def-bounded-set]]).\n\n**The hypothesis is compactness of $K$, not of $A$**, and it cannot be relaxed\nto boundedness of $K$ or to closedness of $K$ alone: the identity is unbounded\non the closed set $[0,\\infty)$, and $x \\mapsto 1/x$ is unbounded on the bounded\nset $(0,1)$. The general statement of that is\n[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this\npage.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$f$ is continuous on $A$ by [L1], with $0 \\notin A$. [given, L1]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "For every real $M$ there is $x \\in A$ with $f(x)>M$: for $M \\le 0$ take $x:=1$; for $M>0$, [L4] with $\\varepsilon := 1/(M+1)$ gives a natural $n \\ge 1$ with $1/n < 1/(M+1)$, hence $n>M$, and $x := 1/n \\in (0,1]=A$ has $f(x)=n>M$. [given, L4, algebra, choose]",
      "step": "1.2",
      "inputs": [
        "given",
        "L4",
        "algebra",
        "choose"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Suppose, toward a contradiction, that a continuous $F : \\mathbb{R} \\to \\mathbb{R}$ extends $f$. [assume-contra]",
      "step": "1.3",
      "inputs": [
        "assume-contra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Under step 1.3: $F|_{[0,1]}$ is continuous by [L2]; by [L3], $[0,1]$ is compact and $F|_{[0,1]}$ is therefore bounded: fix real $M_0 \\ge 0$ with $|F(x)| \\le M_0$ for every $x \\in [0,1]$. [step 1.3, L2, L3, choose]",
      "step": "2.1",
      "inputs": [
        "step 1.3",
        "L2",
        "L3",
        "choose",
        "1.3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Under step 1.3: for $x \\in A \\subseteq [0,1]$, $F(x)=f(x)$, so $f(x) \\le M_0$ for every $x \\in A$ by step 2.1; but step 1.2 with $M:=M_0$ gives $x_0 \\in A$ with $f(x_0)>M_0$, a contradiction. [step 1.3, step 2.1, step 1.2, discharge-contradiction] ∎",
      "step": "3.1",
      "inputs": [
        "step 1.3",
        "step 2.1",
        "step 1.2",
        "discharge-contradiction",
        "1.3",
        "2.1",
        "1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement has no distinguished empty-set or empty-family case parameter or case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 2.1: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.2: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends",
    "declared_target": "fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-tietze-extension-theorem",
    "declared_target": "thm-tietze-extension-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "cor-tietze-for-unbounded-and-open-interval-valued-maps",
    "declared_target": "cor-tietze-for-unbounded-and-open-interval-valued-maps",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": null,
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": null,
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "cor-boundedness-theorem-r",
    "declared_target": "cor-boundedness-theorem-r",
    "target_statement_provenance": null,
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-heine-borel-r",
    "declared_target": "thm-heine-borel-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
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

## Full text of every cited or declared item (10)

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

### `cor-boundedness-theorem-r`

````markdown
---
id: cor-boundedness-theorem-r
kind: corollary
title: "A continuous real function on a compact subset of $\\mathbb{R}$ is bounded"
status: published
origin: session
deps: [thm-continuous-image-of-a-compact-set-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-bounded-set, def-continuity-real, def-max-min, lem-finite-set-has-max, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [cor-continuous-on-compact-is-bounded]
landmark: false
short: "boundedness theorem"
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
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.15)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be compact
([[def-open-cover-r]]). Then $f$ is **bounded on $K$**: there is a real
$M \ge 0$ with

$$|f(x)| \le M \qquad \text{for every } x \in K .$$

Equivalently, $f[K]$ is a bounded subset of $\mathbb{R}$
([[def-bounded-set]]).

**The hypothesis is compactness of $K$, not of $A$**, and it cannot be relaxed
to boundedness of $K$ or to closedness of $K$ alone: the identity is unbounded
on the closed set $[0,\infty)$, and $x \mapsto 1/x$ is unbounded on the bounded
set $(0,1)$. The general statement of that is
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this
page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a compact set $K \subseteq A$.

[L1] The image $f[K]$ is compact ([[thm-continuous-image-of-a-compact-set-r]], [[def-continuity-real]], [[def-open-cover-r]]).

[L2] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded ([[thm-heine-borel-characterisation-r]]).

[L3] A set $S \subseteq \mathbb{R}$ is bounded when there are reals $\ell, u$ with $\ell \le s \le u$ for every $s \in S$ ([[def-bounded-set]]).

[L4] A nonempty finite set of reals has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]), and the order of $\mathbb{R}$ is total ([[def-ordered-field]]).

[L5] Absolute value: $|u| \ge 0$; $|u| = u$ when $u \ge 0$ and $|u| = -u$ when $u \le 0$; and $t \le |t|$ for every real $t$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the set $f[K]$ is compact, and by [L2] it is therefore closed and bounded. [L1, L2]

2.1 By [L3] fix reals $\ell$ and $u$ with $\ell \le z \le u$ for every $z \in f[K]$, and put $M := \max\{\,|\ell|,\ |u|\,\}$, which exists by [L4] and satisfies $M \ge 0$ by [L5]. [step 1.1, L3, L4, L5, choose]

3.1 Let $x \in K$ and put $z := f(x) \in f[K]$, so $\ell \le z \le u$. If $z \ge 0$ then $|z| = z \le u \le |u| \le M$; if $z < 0$ then $|z| = -z \le -\ell \le |\ell| \le M$, using $\ell \le z$ and $-\ell \le |{-\ell}| = |\ell|$. In both cases $|f(x)| \le M$. [step 2.1, L4, L5]

4.1 So $|f(x)| \le M$ for every $x \in K$, with $M \ge 0$ a real; equivalently $f[K]$ is bounded, which is what step 1.1 already recorded. [step 2.1, step 3.1, L3] ∎

## Remarks

- **Boundedness is the weak half of the extreme value theorem.** What compactness gives in addition is that the two bounds are *attained*, which is [[thm-extreme-value-r]]; the supremum of $f[K]$ exists as soon as $f[K]$ is nonempty and bounded above, and the work is entirely in showing that it belongs to $f[K]$.

- **Boundedness of the domain is not what is used.** The proof never looks at $K$ after the first line: the whole content is that the *image* is compact, hence bounded. That is why the same one-line argument gives boundedness of a continuous function on any compact set, however complicated.
````

### `cor-tietze-for-unbounded-and-open-interval-valued-maps`

````markdown
---
id: cor-tietze-for-unbounded-and-open-interval-valued-maps
kind: corollary
title: "Under dependent choice, a continuous real-valued map on a closed subspace of a normal space extends to the whole space, and a map into an open interval extends into that same open interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tietze-extension-theorem, thm-urysohn-lemma, def-normal-and-t4-spaces,
       def-subspace-topology-top, def-continuous-map-top, thm-algebra-of-continuous-functions,
       def-continuity-real, lem-real-and-metric-notions-agree, def-interval,
       def-dependent-choice, def-ordered-field, lem-continuity-is-local-and-pastes,
       lem-of-abs-value, thm-continuity-characterisations-top, def-metrizable-space]
justified_by: []
aliases: []
landmark: true
short: "Tietze into $\\mathbb{R}$ and into an open interval"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §35"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X,\mathcal{T})$ be normal ([[def-normal-and-t4-spaces]]) and let
$A \subseteq X$ be closed ([[def-subspace-topology-top]]).

1. Every continuous $f : A \to \mathbb{R}$ extends to a continuous
   $F : X \to \mathbb{R}$ with $F|_A = f$.
2. For reals $a<b$, every continuous $f : A \to (a,b)$ extends to a continuous
   $F : X \to (a,b)$ with $F|_A = f$.

**Scope.** The two one-sided open interval forms of [[def-interval]],
$(a,\infty)$ and $(-\infty,b)$, are not treated by clause 2 above; extending it to them would
need an explicit order-homeomorphism between a ray and $\mathbb{R}$, which is
not built here.

## Facts & Assumptions

**Given:** Dependent choice, a normal $(X,\mathcal{T})$, a closed $A \subseteq X$; for clause 1, continuous $f : A \to \mathbb{R}$; for clause 2, reals $a<b$ and continuous $f : A \to (a,b)$.

[L1] Tietze's extension theorem, clause 1: assuming DC, if $X$ is normal, $A$ closed and $p \le q$ reals, every continuous $h : A \to [p,q]$ extends to continuous $H : X \to [p,q]$ with $H|_A = h$ ([[thm-tietze-extension-theorem]]).

[L2] Urysohn's lemma, clause 1: assuming DC, disjoint closed $P,Q \subseteq X$ admit continuous $\varphi : X \to [0,1]$ with $P \subseteq \varphi^{-1}(\{0\})$, $Q \subseteq \varphi^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] Product of two continuous real-valued maps on $X$ is continuous: for continuous $g,h:X\to\mathbb{R}$ and $x_0 \in X$, fix (continuity of $g$) open $U_0 \ni x_0$ with $|g(x)-g(x_0)|<1$ on $U_0$, so $|g(x)| < |g(x_0)|+1 =: B$ there; for real $\varepsilon>0$ fix open $U_1 \ni x_0$ with $|g(x)-g(x_0)| < \varepsilon/(2(|h(x_0)|+1))$ and open $U_2 \ni x_0$ with $|h(x)-h(x_0)|<\varepsilon/(2B)$; on $U_0 \cap U_1 \cap U_2$, $|g(x)h(x)-g(x_0)h(x_0)| \le |g(x)||h(x)-h(x_0)| + |h(x_0)||g(x)-g(x_0)| < B \cdot \varepsilon/(2B) + |h(x_0)|\cdot \varepsilon/(2(|h(x_0)|+1)) < \varepsilon$, so $gh$ is continuous at $x_0$ ([[def-continuous-map-top]], [[lem-of-abs-value]]).

[L4] Algebra of continuous real functions on $A \subseteq \mathbb{R}$: sums, scalar multiples, products, absolute values and quotients with nonvanishing denominator of continuous functions are continuous, as are constants and the identity ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L5] For $S,T \subseteq \mathbb{R}$, a map $h : S \to T$ is continuous in the sense of [[def-continuity-real]] if and only if it is continuous as a map of topological spaces (subspace topologies of $\mathbb{R}$), by [[lem-real-and-metric-notions-agree]] clause 1 (real $\Leftrightarrow$ metric continuity) together with [[def-metrizable-space]] (metric $\Leftrightarrow$ topological continuity for a metrizable space).

[L6] Preimages of closed (open) sets under a continuous map are closed (open) ([[thm-continuity-characterisations-top]]).

[L7] Composites of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]], clause 1).

## Proof

**Proof technique:** constructive.

1.1 Fix reals $a<b$. Define $\alpha : (a,b) \to (-1,1)$ by $\alpha(t) := (2t-a-b)/(b-a)$ and $\beta : (-1,1) \to (a,b)$ by $\beta(s) := ((b-a)s+a+b)/2$; both are continuous real functions by [L4], the denominators $b-a$ and $2$ being nonzero. Direct substitution gives $\beta(\alpha(t))=t$ for $t\in(a,b)$ and $\alpha(\beta(s))=s$ for $s\in(-1,1)$. [given, L4, algebra, construct]

1.2 Let $g : A \to (-1,1)$ be continuous, regarded as a map $A \to [-1,1]$; by [L1] with $p=-1,q=1$ fix continuous $G : X \to [-1,1]$ with $G|_A = g$. [given, L1, choose, construct]

1.3 Define $\psi : (-1,1) \to \mathbb{R}$ by $\psi(t) := t/(1-|t|)$ and $\chi : \mathbb{R} \to (-1,1)$ by $\chi(s) := s/(1+|s|)$; both are continuous real functions by [L4], the denominators $1-|t|$ (on $(-1,1)$) and $1+|s|$ (everywhere) being positive. For $t \ge 0$ in $(-1,1)$: $\psi(t)=t/(1-t) \ge 0$ and $\chi(\psi(t)) = \frac{t/(1-t)}{1+t/(1-t)} = \frac{t/(1-t)}{1/(1-t)} = t$; for $t<0$ the same computation with $|t|=-t$ gives $\chi(\psi(t))=t$. Likewise $\psi(\chi(s))=s$ for every real $s$, splitting on the sign of $s$. [given, L4, algebra, construct]

2.1 By [L5], $\alpha$ and $\beta$ of step 1.1 are continuous as maps of topological spaces $(a,b) \to (-1,1)$ and $(-1,1) \to (a,b)$. [step 1.1, L5]

2.2 Put $D := G^{-1}(\{-1,1\})$, closed by [L6]; $D \cap A = \varnothing$, since $G|_A = g$ takes values in $(-1,1)$. By [L2], fix continuous $\varphi : X \to [0,1]$ with $D \subseteq \varphi^{-1}(\{0\})$ and $A \subseteq \varphi^{-1}(\{1\})$. [step 1.2, L2, L6, choose]

2.3 By [L5], $\psi$ and $\chi$ of step 1.3 are continuous as maps of topological spaces $(-1,1) \to \mathbb{R}$ and $\mathbb{R} \to (-1,1)$. [step 1.3, L5]

3.1 Define $\tilde{G} : X \to \mathbb{R}$ by $\tilde{G}(x) := \varphi(x)G(x)$, continuous by [L3]. For $x \in A$: $\varphi(x)=1$, so $\tilde G(x)=G(x)=g(x)$. For $x \notin D$: $|G(x)|<1$ and $\varphi(x)\in[0,1]$, so $|\tilde G(x)| = \varphi(x)|G(x)| \le |G(x)| < 1$. For $x \in D$: $\varphi(x)=0$, so $\tilde G(x)=0$. So $\tilde G : X \to (-1,1)$ and $\tilde G|_A = g$. [step 2.2, step 1.2, L3, construct]

4.1 [Clause 2.] With $\alpha,\beta$ as in steps 1.1–2.1: $g := \alpha \circ f : A \to (-1,1)$ is continuous by [L7]; by step 3.1 fix continuous $\tilde G : X \to (-1,1)$ with $\tilde G|_A = g$; define $F := \beta \circ \tilde G : X \to (a,b)$, continuous by [L7]. For $x \in A$: $F(x) = \beta(\tilde G(x)) = \beta(g(x)) = \beta(\alpha(f(x))) = f(x)$ by step 1.1. So $F$ extends $f$ into $(a,b)$. [step 2.1, step 3.1, step 1.1, L7, algebra, construct]

4.2 [Clause 1.] Let $f : A \to \mathbb{R}$ be continuous. With $\psi,\chi$ as in steps 1.3 and 2.3: $g := \chi \circ f : A \to (-1,1)$ is continuous by [L7]; by step 3.1 fix continuous $\tilde G : X \to (-1,1)$ with $\tilde G|_A = g$; define $F := \psi \circ \tilde G : X \to \mathbb{R}$, continuous by [L7]. For $x \in A$: $F(x) = \psi(\tilde G(x)) = \psi(g(x)) = \psi(\chi(f(x))) = f(x)$ by step 1.3. So $F$ extends $f$ into $\mathbb{R}$. [step 2.3, step 3.1, step 1.3, L7, algebra, construct]

5.1 Steps 4.1 and 4.2 establish clauses 2 and 1 respectively. [step 4.1, step 4.2, discharge-construct] ∎

## Remarks

- **The affine maps of step 1.1 and the rational maps of step 1.3 play the same role**: each turns a target interval into $(-1,1)$ or back, so that the single boundary-avoidance construction of steps 1.2, 2.2 and 3.1 need be proved once and reused for both clauses. Neither clause repeats that construction.

- **The product fact [L3] is the only piece of "algebra of continuous functions" this page needs for a map out of a general topological space**; the sum and scalar-multiple facts used elsewhere on this page are proved where they are first needed, by the same style of argument.

- **Choice is spent only through [L1] and [L2]**, that is, only through the two cited results; nothing in steps 1.1–5.1 performs a further selection from an infinite family.
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
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

### `def-subspace-topology-top`

````markdown
---
id: def-subspace-topology-top
kind: definition
title: "Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis, def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-subspace-top, def-relative-topology]
landmark: true
short: "subspace topology"
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
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## Remarks

- **The subspace topology is what makes a subset a space.** Before it, a statement
  such as "the restriction of $f$ to $C$ is continuous" has no meaning, because
  $C$ carries no topology. Every restriction below is taken with respect to the
  subspace topology and with no other convention available.

- **Openness and closedness are not absolute.** $[0,1)$ is open in $[0,2)$ and is
  neither open nor closed in $\mathbb{R}$; the interval $(0,1)$ is closed in
  itself. A sentence of the form "$A$ is open" is incomplete unless the space is
  named, and this library names it whenever more than one is in play.

- **Transitivity.** If $S \subseteq T \subseteq X$ then the subspace topology $S$
  inherits from $(T, \mathcal{T}_T)$ is the subspace topology it inherits from
  $X$, since $(U \cap T) \cap S = U \cap S$ for $U \in \mathcal{T}$. So no
  ambiguity arises from the route by which a subset is reached.
````

### `fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends`

````markdown
---
id: fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends
kind: false-statement
title: "FALSE: Every continuous real-valued function on a subspace of a normal space extends continuously to the whole space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tietze-extension-theorem, cor-tietze-for-unbounded-and-open-interval-valued-maps,
       def-subspace-topology-top, def-continuity-real, thm-algebra-of-continuous-functions,
       cor-boundedness-theorem-r, def-continuous-map-top, def-interval,
       cor-archimedean-reciprocal, thm-metric-spaces-are-completely-normal,
       def-normal-and-t4-spaces, thm-heine-borel-r]
justified_by: []
aliases: []
landmark: false
short: "closedness of the subspace is not decoration in Tietze"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement

**FALSE.** Every continuous real-valued function on a subspace of a normal
space extends continuously to the whole space.

This shows that the hypothesis "$A$ closed" in
[[thm-tietze-extension-theorem]] and [[cor-tietze-for-unbounded-and-open-interval-valued-maps]]
is not decoration: the witness below is a continuous function on a subspace
of a normal space that has no continuous extension at all, and the only
hypothesis it fails is closedness of the subspace.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the subspace $A := (0,1] \subseteq \mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]]), and $f : A \to \mathbb{R}$, $f(x) := 1/x$.

[L1] $\mathbb{R}$ is normal, being metrizable ([[thm-metric-spaces-are-completely-normal]]).

[L2] Quotients of continuous real functions with nonvanishing denominator are continuous ([[thm-algebra-of-continuous-functions]], clause 4); in particular $x \mapsto 1/x$ is continuous on $\{x \in \mathbb{R} : x \ne 0\} \supseteq A$.

[L3] Continuity passes to subsets of the domain: if $B \subseteq C \subseteq \mathbb{R}$ and $g : C \to \mathbb{R}$ is continuous, then $g|_B$ is continuous ([[def-continuity-real]]).

[L4] $[0,1]$ is compact ([[thm-heine-borel-r]]).

[L5] A continuous real function on a compact subset $K$ of its domain is bounded on $K$: there is real $M \ge 0$ with $|g(x)| \le M$ for every $x \in K$ ([[cor-boundedness-theorem-r]]).

[L6] For every real $\varepsilon>0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]).

## Refutation

**Proof technique:** contradiction.

1.1 $f$ is continuous on $A$, by [L2] with $0 \notin A$; and $\mathbb{R}$ is normal, by [L1]. [given, L1, L2]

1.2 For every real $M$, there is $x \in A$ with $f(x) > M$: if $M \le 0$, take $x:=1$, so $f(1)=1>0\ge M$; if $M>0$, [L6] applied to $\varepsilon := 1/(M+1) > 0$ gives a natural $n \ge 1$ with $1/n < 1/(M+1)$, hence $n > M+1 > M$; taking $x := 1/n \in (0,1] = A$ gives $f(x) = 1/x = n > M$. [given, L6, algebra, choose]

1.3 Suppose, toward a contradiction, that a continuous $F : \mathbb{R} \to \mathbb{R}$ exists with $F|_A = f$. [assume-contra]

1.4 $[0,1]$ is compact, by [L4]. [L4]

2.1 Under step 1.3: $F|_{[0,1]}$ is continuous, by [L3] applied to $F$ on $\mathbb{R} \supseteq [0,1]$. [step 1.3, L3]

3.1 Under step 1.3: by [L5] applied to $F|_{[0,1]}$ (step 2.1) and $K := [0,1]$ (step 1.4), fix a real $M_0 \ge 0$ with $|F(x)| \le M_0$ for every $x \in [0,1]$. [step 2.1, step 1.4, L5, choose]

4.1 Under step 1.3: for $x \in A$, $F(x) = f(x)$ (step 1.3) and $x \in [0,1]$, so $f(x) \le |F(x)| \le M_0$ by step 3.1; but step 1.2 applied with $M := M_0$ gives $x_0 \in A$ with $f(x_0) > M_0$, contradicting $f(x_0) \le M_0$. [step 1.3, step 3.1, step 1.2, discharge-contradiction] ∎

## Remarks

- **No property but closedness fails.** $\mathbb{R}$ is normal (step 1.1), $f$ is continuous on $A$ (step 1.1), and the target is all of $\mathbb{R}$, so every hypothesis of [[thm-tietze-extension-theorem]] holds except that $A$ is not closed in $\mathbb{R}$ — its closure is $[0,1]$, one point larger.

- **The obstruction is unboundedness near the missing point, not discontinuity.** $f$ itself is continuous at every point of its own domain $A$; nothing about $f$ is badly behaved on $A$. What blocks an extension is that $f$ has no finite value it could sensibly take at the boundary point $0 \notin A$, and step 1.2 makes that failure of boundedness explicit rather than appealing to a limit that does not exist.
````

### `thm-algebra-of-continuous-functions`

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
deps: [def-continuity-real, thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-reverse-triangle, def-max-min, lem-finite-set-has-max, def-integer-power, def-ordered-field, def-field]
justified_by: []
aliases: [thm-continuity-algebra]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "algebra of continuous functions"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4, 4.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, a point $c \in A$ at which $f$ and $g$ are continuous, and, for claim 4, the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; at an isolated point of its domain every function is continuous; at a limit point $c$ of $A$, continuity of $f$ at $c$ is exactly the statement that the limit of $f$ at $c$ exists and equals $f(c)$ ([[def-continuity-real]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-function-limit]]).

[L3] Algebra of function limits at a limit point $c$ of $A$: if the limits of $f$ and $g$ at $c$ exist with values $L$ and $M$, then the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist with values $L+M$, $\alpha L$ and $LM$; and if $M \ne 0$ then $c$ is a limit point of $A_0$, and the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L4] Sign preservation: if the limit of $g$ at a limit point $c$ of $A$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{\, x \in A : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L5] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]); and $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L6] Maximum and minimum of a two-element set of reals exist ([[lem-finite-set-has-max]], [[def-max-min]]), and for all reals $u, v$ one has $\max\{u,v\} = \tfrac{1}{2}\bigl(u + v + |u-v|\bigr)$ and $\min\{u,v\} = \tfrac{1}{2}\bigl(u + v - |u-v|\bigr)$.

[L7] Ordered-field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, the field identities, and $0 < 1$ so that $2 \ne 0$ and $t/2$ is defined ([[def-ordered-field]], [[def-field]]).

[L8] Integer powers: $a^{0} = 1$ and $a^{n+1} = a^{n} \cdot a$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 **Justification of the identity in [L6].** Let $u, v \in \mathbb{R}$. By totality either $u \ge v$ or $v \ge u$. If $u \ge v$ then $u - v \ge 0$, so $|u-v| = u-v$ and $\tfrac{1}{2}(u+v+|u-v|) = \tfrac{1}{2}(2u) = u = \max\{u,v\}$, while $\tfrac{1}{2}(u+v-|u-v|) = v = \min\{u,v\}$. If $v \ge u$ the same computation with the roles exchanged applies, since $|u-v| = v-u$ there. [L5, L6, L7]

1.2 **The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\eta}(c) \cap A = \{c\}$ with $\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \ne 0$; then $c \in A_0$, and $N_{\eta}(c) \cap A_0 \subseteq N_{\eta}(c) \cap A = \{c\}$ with $c$ in the left-hand side, so $c$ is an isolated point of $A_0$ and every function on $A_0$, in particular $(f/g)|_{A_0}$, is continuous at $c$. [L2]

1.3 **Claim 2, at any point of $A$.** Let a real $\varepsilon > 0$ be given and let $\delta > 0$ be as in [L1] for $f$ and this $\varepsilon$. For $x \in A$ with $|x - c| < \delta$ the reverse triangle inequality gives $\bigl||f(x)| - |f(c)|\bigr| \le |f(x) - f(c)| < \varepsilon$. So $|f|$ is continuous at $c$, and no case distinction was needed. [L1, L5]

1.4 **Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$, so any $\delta > 0$ serves. For the identity, given a real $\varepsilon > 0$ take $\delta := \varepsilon$: every $x \in A$ with $|x - c| < \delta$ has $|\mathrm{id}(x) - \mathrm{id}(c)| = |x - c| < \varepsilon$. Both are continuous at every point of $A$. [L1, L5, L7]

1.5 **The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\alpha f(c)$ and $f(c)g(c)$, which are exactly the values of those three functions at $c$; by [L2] again, each of them is continuous at $c$. [L2, L3]

1.6 **The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \ne 0$. Then $c \in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/g)|_{A_0}$ at $c$; by [L2] applied on the domain $A_0$, that function is continuous at $c$. [L2, L3, L4]

2.1 **Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated. [step 1.2, step 1.5, step 1.6, L2]

3.1 **Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \mapsto \max\{f(x), g(x)\}$, so the maximum is continuous at $c$; the same argument with $-|f-g|$ gives the minimum. [step 1.1, step 1.3, step 2.1, L6, L7]

3.2 **Claim 5, powers and polynomials.** The map $x \mapsto x^{0}$ is the constant $1$ and $x \mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \mapsto x^{n}$ is continuous on $A$ then so is $x \mapsto x^{n+1} = x^{n} \cdot x$, being a product of two functions continuous on $A$ by step 2.1. By induction on $n$, $x \mapsto x^{n}$ is continuous on $A$ for every $n \in \mathbb{N}$. A polynomial function $a_0 + a_1x + \dots + a_nx^{n}$ is obtained from these by finitely many scalar multiplications and additions, each of which preserves continuity by step 2.1. [step 1.4, step 2.1, L8]

4.1 Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used. [step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the two-case shape, and why it is not an inconvenience.** Continuity is defined at every point of the domain, including isolated points, where no limit exists ([[def-continuity-real]]). The algebra of limits therefore cannot be applied blindly; but at an isolated point every function is continuous, so the case is settled before it is opened. Claims 2 and 5 are proved directly from $\varepsilon$ and $\delta$ and need no case distinction at all.

- **Absolute value, maximum and minimum are not in [[thm-algebra-of-function-limits]]**, and the reason is that they are not needed there. They are needed here: the extreme value theorem and the one-dimensional fixed point theorem both build auxiliary functions out of maxima, minima and differences, and [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] builds its witnesses out of $|x - x_0|$ and quotients.

- **The converse of claim 2 is false**: $|f|$ may be continuous while $f$ is continuous nowhere. The function equal to $1$ on $\mathbb{Q}$ and to $-1$ elsewhere has constant absolute value; that it is nowhere continuous follows from the argument of [[cex-dirichlet-is-nowhere-continuous]] applied verbatim, since that argument uses only that the two values are distinct.
````

### `thm-heine-borel-r`

````markdown
---
id: thm-heine-borel-r
kind: theorem
title: "Heine-Borel by bisection: every closed bounded interval $[a,b]$ is compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-open-cover-r, def-interval, thm-nested-interval-property, def-complete-ordered-field, thm-recursion, cor-archimedean-reciprocal, thm-of-archimedean, def-neighbourhood-r, def-open-and-closed-in-r, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$[a,b]$ is compact"
proof_strategy: contradiction
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.40)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$. Then the closed bounded interval
$[a,b]$ ([[def-interval]]) is compact ([[def-open-cover-r]]): every family of
open subsets of $\mathbb{R}$ whose union contains $[a,b]$ has a finite subfamily
whose union already contains $[a,b]$.

The proof is by repeated bisection. Supposing some open cover admits no finite
subcover, one halves the interval, keeps a half that still admits none, and
iterates; the halves shrink to a point, which the cover does reach, and a single
member of the cover then swallows a whole late-stage half. **The halving rule is
canonical**, taking the left half whenever the left half works, so the recursion
uses [[thm-recursion]] and no choice principle.

## Facts & Assumptions

**Given:** Reals $a \le b$ and an open cover $\mathcal{U}$ of $[a,b]$; the set $X := \{\, (u,v) \in \mathbb{R} \times \mathbb{R} : u \le v \,\}$; and the following terminology: a pair $(u,v) \in X$ is **bad** when there are no $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $[u,v] \subseteq U_0 \cup \dots \cup U_n$, that is, when the interval $[u,v]$ admits no finite subcover from $\mathcal{U}$.

[L1] Open cover, subcover, finite subfamily and compactness ([[def-open-cover-r]]).

[L2] Closed bounded intervals: $[u,v] = \{\, z : u \le z \le v \,\}$ is nonempty exactly when $u \le v$; and for $u \le m \le v$ one has $[u,v] = [u,m] \cup [m,v]$, since $z \in [u,v]$ satisfies $z \le m$ or $m < z$ by trichotomy ([[def-interval]], [[def-ordered-field]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, and $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $G : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(k+1) = G(h(k))$ for every $k$ ([[thm-recursion]]).

[L5] Nested interval property: if $[a_k,b_k]$ with $a_k \le b_k$ satisfy $[a_{k+1},b_{k+1}] \subseteq [a_k,b_k]$ for every $k \in \mathbb{N}$, then $\bigcap_{k} [a_k,b_k] \ne \varnothing$ ([[thm-nested-interval-property]]).

[L6] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L7] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing, and $(n+1) \cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1$ ([[lem-of-naturals-positive]]); a positive element has a positive inverse and $0 < c \le d$ gives $0 < 1/d \le 1/c$ ([[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L8] Ordered-field arithmetic: $0 < 1$, hence $2 := 1 + 1 > 0$ and $2^{-1} > 0$; adding a constant preserves an inequality and multiplying by a positive preserves it ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L9] Absolute value: $|y - x| \le v - u$ whenever $x, y \in [u,v]$, because $|y - x|$ equals $y - x$ or $x - y$ and each is at most $v - u$ ([[lem-of-abs-value]], [[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $[a,b]$ is not compact: some open cover $\mathcal{U}$ of $[a,b]$ has no finite subcover, that is, the pair $(a,b) \in X$ is bad. [assume-contra, L1]

1.2 Bisection rule: for $(u,v) \in X$ put $m := (u+v) \cdot 2^{-1}$, so that $u \le m \le v$ by [L8], and define $G(u,v) := (u,m)$ if $(u,m)$ is bad and $G(u,v) := (m,v)$ otherwise. This is a definition by cases on one condition, so $G : X \to X$ is a function and nothing is selected. [L2, L8, construct]

1.3 If $(u,v)$ is bad then $G(u,v)$ is bad: were both $(u,m)$ and $(m,v)$ not bad, concatenating the two finite lists of members of $\mathcal{U}$ would give a finite subfamily whose union contains $[u,m] \cup [m,v] = [u,v]$ by [L2], so $(u,v)$ would not be bad; hence at least one half is bad, and the rule returns the left half when it is bad and otherwise the right half, which must then be bad. [L1, L2]

2.1 Apply [L4] with $Y = X$, seed $(a,b)$ and map $G$: there is $h : \mathbb{N} \to X$ with $h(0) = (a,b)$ and $h(k+1) = G(h(k))$. Write $h(k) = (a_k,b_k)$, so $a_k \le b_k$ for every $k$, $(a_0,b_0) = (a,b)$, and $(a_{k+1},b_{k+1})$ is one of the two halves of $(a_k,b_k)$. [step 1.2, L2, L4, construct]

3.1 Every $(a_k,b_k)$ is bad, by induction on $k$: the case $k = 0$ is step 1.1, and if $(a_k,b_k)$ is bad then $(a_{k+1},b_{k+1}) = G(a_k,b_k)$ is bad by step 1.3. [step 1.1, step 1.3, step 2.1]

3.2 Writing $\ell_k := b_k - a_k \ge 0$, the intervals are nested and the lengths halve: $[a_{k+1},b_{k+1}]$ is $[a_k,m_k]$ or $[m_k,b_k]$ with $m_k = (a_k+b_k) \cdot 2^{-1}$, and each of these is contained in $[a_k,b_k]$ by [L2], while $m_k - a_k = b_k - m_k = \ell_k \cdot 2^{-1}$, so $\ell_{k+1} = \ell_k \cdot 2^{-1}$. [step 2.1, L2, L8]

4.1 For every $k \in \mathbb{N}$ one has $\ell_k \cdot (k+1) \le \ell_0$, by induction on $k$: at $k = 0$ this reads $\ell_0 \cdot 1 \le \ell_0$; and if it holds at $k$ then $\ell_{k+1} \cdot (k+2) = \ell_k \cdot 2^{-1} \cdot (k+2) \le \ell_k \cdot (k+1) \le \ell_0$, using $\ell_k \ge 0$ and $(k+2) \cdot 2^{-1} \le k+1$, which is $k + 2 \le 2k+2$, that is $0 \le k$. [step 3.2, L7, L8]

4.2 By [L5] the nested family $[a_k,b_k]$ of nonempty closed bounded intervals has a common point $x$; since $x \in [a_0,b_0] = [a,b]$ and $\mathcal{U}$ covers $[a,b]$, fix $U \in \mathcal{U}$ with $x \in U$ and then, $U$ being open, a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$. [step 3.2, L1, L2, L3, L5, choose]

5.1 There is $k \in \mathbb{N}$ with $\ell_k < \varepsilon$: the real $\varepsilon/(\ell_0+1)$ is positive because $\ell_0 + 1 > 0$, so [L6] supplies a natural $n \ge 1$ with $1/n < \varepsilon/(\ell_0+1)$; put $k := n-1$, a natural number, so that $k+1 = n$ and step 4.1 with [L7] gives $\ell_k \le \ell_0 \cdot (1/n) \le \ell_0 \cdot \varepsilon/(\ell_0+1) < \varepsilon$, the last step because $\ell_0 < \ell_0 + 1$ forces $\ell_0/(\ell_0+1) < 1$ and $\varepsilon > 0$. [step 4.1, step 4.2, L6, L7, L8, choose]

6.1 For that $k$ one has $x \in [a_k,b_k]$, and every $y \in [a_k,b_k]$ satisfies $|y - x| \le \ell_k < \varepsilon$ by [L9], so $[a_k,b_k] \subseteq N_\varepsilon(x) \subseteq U$; hence the one-member subfamily $\{U\}$ of $\mathcal{U}$ covers $[a_k,b_k]$ and $(a_k,b_k)$ is not bad, contradicting step 3.1. The assumption of step 1.1 is therefore untenable and $[a,b]$ is compact. [step 3.1, step 4.2, step 5.1, L1, L3, L9, discharge-contradiction] ∎

## Remarks

- **What each hypothesis buys.** Closedness enters through [L5]: the nested
  interval property is stated for closed intervals and fails for open ones
  ([[cex-nested-open-intervals-empty]]). Boundedness enters through the same
  fact and through the length computation of step 3.2. Completeness of
  $\mathbb{R}$ enters only inside [[thm-nested-interval-property]] and, through
  [[cor-archimedean-reciprocal]], in step 5.1.

- **Why the lengths are handled without powers.** The obvious route is
  $\ell_k = \ell_0 \cdot 2^{-k}$ together with the nullity of a geometric
  sequence, which is available ([[lem-geometric-sequence-null]]). The route
  taken instead, the one-line induction of step 4.1, gives the weaker bound
  $\ell_k \le \ell_0/(k+1)$, which is all step 5.1 needs, and it avoids
  integer powers and the algebra of limits entirely.

- **The recursion is over pairs, not over sets.** The state carried from stage
  to stage is the pair of endpoints, so [L4] applies with $Y = X$ and a total
  map $G$; had the rule been "choose a bad half", the state would have been
  chosen rather than computed and the argument would have needed dependent
  choice, which this library does not have.

- **The converse direction is a separate result.** That a compact subset of
  $\mathbb{R}$ must be closed and bounded is
  [[lem-compact-implies-closed-and-bounded-r]], and the two together give
  [[thm-heine-borel-characterisation-r]].
````

### `thm-tietze-extension-theorem`

````markdown
---
id: thm-tietze-extension-theorem
kind: theorem
title: "Tietze's extension theorem, under dependent choice: a continuous map from a closed subspace of a normal space into $[a,b]$ extends continuously to the whole space, and this property characterises normality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-urysohn-lemma, lem-a-uniformly-approximable-real-valued-map-is-continuous,
       def-normal-and-t4-spaces, def-dependent-choice, def-subspace-topology-top,
       def-continuous-map-top, thm-continuity-characterisations-top, def-interval,
       def-series, thm-geometric-series,
       def-interior-closure-boundary-top, def-ordered-field, lem-of-abs-value,
       lem-of-sequence-basics, lem-continuity-is-local-and-pastes,
       def-topological-space, lem-geometric-sequence-null,
       lem-real-line-is-a-metric-space]
justified_by: []
aliases: [thm-tietze]
landmark: true
short: "Tietze extension theorem (DC)"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §35"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]), $A \subseteq X$ is closed
   ([[def-subspace-topology-top]]) and $a \le b$ are reals, then every
   continuous $f : A \to [a,b]$ ([[def-interval]]) extends to a continuous
   $F : X \to [a,b]$ with $F|_A = f$.
2. Conversely, if for every closed $A \subseteq X$ and every reals $a \le b$
   every continuous $f : A \to [a,b]$ extends to a continuous $F : X \to [a,b]$
   with $F|_A = f$, then $X$ is normal. **This direction uses no choice
   principle.**

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice; for clause 1, $X$ normal, $A \subseteq X$ closed, reals $a \le b$, and continuous $f : A \to [a,b]$; for clause 2, $X$ such that the extension property of clause 1 holds for every closed subspace and every $a \le b$.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R$ entire on $P$, and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0=a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[A2] Normal: disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[L1] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$, $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L2] If $A$ is closed in $X$ and $C \subseteq A$ is closed in the subspace $A$, then $C$ is closed in $X$: by [[def-subspace-topology-top]] $C = F \cap A$ for some closed $F \subseteq X$, and an intersection of two closed sets of $X$ is closed ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L3] Preimages of closed sets under a continuous map are closed ([[thm-continuity-characterisations-top]], clause (c)); preimages of open sets are open (clause (b)).

[L4] The geometric series: $\sum_{n \ge 0} (2/3)^n = 1/(1-2/3) = 3$ ([[thm-geometric-series]]), so $\sum_{n\ge0} M_n/3 = r$ for $M_n := r(2/3)^n$ and any real $r$; and $(2/3)^n \to 0$ as $n \to \infty$ (the same theorem's proof, [[lem-geometric-sequence-null]]).

[L5] The $M$-test: continuous $(g_n)$ on $X$, nonnegative reals $(N_n)$ with $|g_n(x)|\le N_n$ for all $x,n$ and $\sum N_n$ convergent, give $\sum g_n(x)$ convergent for every $x$ and $\sum_n g_n$ continuous on $X$ ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]], second clause).

[L6] Finite triangle inequality $|\sum_k u_k| \le \sum_k |u_k|$ ([[lem-of-abs-value]]); a real sequence has at most one limit, and limits preserve non-strict order ([[lem-of-sequence-basics]]).

[L7] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L8] $A$ and $B$ open in a subspace $S$, with $A \cup B = S$ and $A \cap B = \varnothing$: a function on $S$ constant on $A$ and constant on $B$ is continuous ([[lem-continuity-is-local-and-pastes]], clause 2).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal, $A \subseteq X$ is closed, $a \le b$ are reals, and $f : A \to [a,b]$ is continuous. [assume-hyp]

1.2 Assume instead that $X$ is such that every continuous $g : C \to [p,q]$ on a closed $C \subseteq X$, $p \le q$ reals, extends continuously to $X \to [p,q]$. [assume-hyp]

2.1 Under step 1.1: if $a=b$ the constant map $F : X \to \{a\} \subseteq [a,b]$, $F \equiv a$, is continuous and $F|_A = f$, since $f : A \to \{a\}$ forces $f \equiv a$. Assume from here that $a<b$. [step 1.1, assume-hyp, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; $C \cup E$ is closed, and $C, E$ are each open in the subspace $C \cup E$, being the complement there of the other, which is closed. Define $k : C \cup E \to \{0,1\} \subseteq [0,1]$ by $k \equiv 0$ on $C$ and $k \equiv 1$ on $E$; $k$ is constant, hence continuous, on each of $C$ and $E$, so $k$ is continuous on $C \cup E$ by [L8]. [step 1.2, L8, choose, construct]

3.1 Under steps 1.1 and 2.1: put $c := (a+b)/2$ and $r := (b-a)/2 > 0$, and define $f_0 : A \to \mathbb{R}$ by $f_0(x) := f(x)-c$; $f_0$ is continuous, being $f$ minus a constant, and $f_0[A] \subseteq [-r,r]$, since $f[A] \subseteq [a,b] = [c-r,c+r]$. [step 1.1, step 2.1, algebra, construct]

3.2 Under step 1.2: by hypothesis applied to the closed set $C \cup E$ and $p:=0, q:=1$, fix a continuous $K : X \to [0,1]$ with $K|_{C\cup E} = k$. [step 1.2, step 2.2, choose]

4.1 Under step 1.1: for $n \in \mathbb{N}$ put $M_n := r(2/3)^n$. Call a pair $(f_n,g_n)$, with $f_n : A \to \mathbb{R}$ and $g_n : X \to \mathbb{R}$ continuous, **admissible at level $n$** when $|f_n(x)| \le M_n$ for $x \in A$; $|g_n(x)| \le M_n/3$ for $x \in X$; $g_n(x) = -M_n/3$ for $x \in A$ with $f_n(x) \le -M_n/3$; and $g_n(x) = M_n/3$ for $x \in A$ with $f_n(x) \ge M_n/3$. [step 3.1, construct]

4.2 Under step 1.2: by [L7], put $O_1 := K^{-1}(\,[0,\tfrac12)\,)$, $O_2 := K^{-1}(\,(\tfrac12,1]\,)$, open by [L3]. $C \subseteq O_1$, since $K \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $K \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = \varnothing$, the two target sets being disjoint. [step 3.2, L7, L3]

5.1 Under step 1.1: put $A_0^- := \{x \in A : f_0(x) \le -M_0/3\}$, $A_0^+ := \{x \in A : f_0(x) \ge M_0/3\}$; both closed in $A$ by [L3] and hence in $X$ by [L2], and disjoint since $-M_0/3 < M_0/3$. By [L1] fix continuous $h_0 : X \to [0,1]$ with $A_0^- \subseteq h_0^{-1}(\{0\})$ and $A_0^+ \subseteq h_0^{-1}(\{1\})$, and put $g_0 := (M_0/3)(2h_0-1)$, continuous. [step 3.1, step 4.1, L1, L2, L3, choose, construct]

5.2 Under step 1.1: let $n \in \mathbb{N}$ and let $(f_n,g_n)$ be admissible at level $n$; define $f_{n+1} : A \to \mathbb{R}$ by $f_{n+1}(x) := f_n(x)-g_n(x)$, continuous. [step 4.1, construct]

5.3 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [A2]; this is clause 2, and it uses [A1] nowhere. [step 4.2, A2]

6.1 Under step 1.1: $(f_0,g_0)$ is admissible at level $0$: $|f_0| \le M_0$ on $A$ by step 3.1; $|g_0(x)| = (M_0/3)|2h_0(x)-1| \le M_0/3$ for every $x$, since $h_0(x) \in [0,1]$; $g_0(x) = -M_0/3$ for $x \in A_0^-$, where $h_0(x)=0$; and $g_0(x)=M_0/3$ for $x \in A_0^+$, where $h_0(x)=1$. [step 5.1, algebra]

6.2 Under step 1.1, continuing under step 5.2: for $x \in A$ with $f_n(x) \le -M_n/3$: $g_n(x)=-M_n/3$ (admissibility), so $f_{n+1}(x) = f_n(x)+M_n/3 \in [-2M_n/3,\,0]$, using $-M_n \le f_n(x) \le -M_n/3$; for $x \in A$ with $f_n(x) \ge M_n/3$: $f_{n+1}(x) = f_n(x)-M_n/3 \in [0,\,2M_n/3]$; for $x \in A$ with $-M_n/3 < f_n(x) < M_n/3$: $|g_n(x)| \le M_n/3$ gives $f_{n+1}(x) \in (-2M_n/3,\,2M_n/3)$. In every case $|f_{n+1}(x)| \le 2M_n/3 = M_{n+1}$. [step 5.2, step 4.1, algebra]

6.3 Under step 1.1: put $A_{n+1}^- := \{x\in A: f_{n+1}(x)\le -M_{n+1}/3\}$, $A_{n+1}^+ := \{x\in A: f_{n+1}(x)\ge M_{n+1}/3\}$; closed in $X$ by [L2], [L3], and disjoint. By [L1] fix continuous $h_{n+1}:X\to[0,1]$ with $A_{n+1}^- \subseteq h_{n+1}^{-1}(\{0\})$, $A_{n+1}^+ \subseteq h_{n+1}^{-1}(\{1\})$, and put $g_{n+1} := (M_{n+1}/3)(2h_{n+1}-1)$. [step 5.2, step 4.1, L1, L2, L3, choose, construct]

7.1 Under step 1.1: $(f_{n+1},g_{n+1})$ is admissible at level $n+1$, by step 6.2 and the same computation as step 6.1 with $h_{n+1}, g_{n+1}, M_{n+1}$ in place of $h_0,g_0,M_0$. So every admissible pair at level $n$ has an admissible successor at level $n+1$. [step 6.2, step 6.3]

8.1 Under step 1.1: put $P := \{\, (n,f_n,g_n) : n \in \mathbb{N},\ (f_n,g_n) \text{ admissible at level } n \,\}$, and for $(n,f,g),(n',f',g') \in P$ say $(n,f,g) \mathbin{R} (n',f',g')$ when $n'=n+1$ and $f' = (f-g)|_A$ pointwise. $P$ is nonempty by step 6.1, and $R$ is entire on $P$ by steps 5.2, 6.2, 6.3 and 7.1 (the pair produced there has $f_{n+1} = (f_n-g_n)|_A$ exactly as step 5.2 defines it). By [A1] with $a := (0,f_0,g_0)$, fix a sequence $\big((n_k,F_k,G_k)\big)_{k \in \mathbb{N}}$ with $(n_0,F_0,G_0)=(0,f_0,g_0)$ and $(n_k,F_k,G_k) \mathbin{R} (n_{k+1},F_{k+1},G_{k+1})$ for every $k$; as $R$ forces $n'=n+1$, induction gives $n_k=k$, so $(F_k,G_k)$ is admissible at level $k$ for every $k$, with $F_{k+1} = (F_k-G_k)|_A$. [step 6.1, step 7.1, step 5.2, A1, construct]

9.1 Under step 1.1: by [L4], $\sum_n M_n/3 = r$, convergent; by [L5] applied to $(G_n)$ and $(M_n/3)$ (each $|G_n(x)| \le M_n/3$ for all $x$, by admissibility), for every $x \in X$ the series $\sum_n G_n(x)$ converges, and $F := \sum_{n=0}^{\infty} G_n$ is a continuous map $X \to \mathbb{R}$. [step 8.1, L4, L5, construct]

9.2 Under step 1.1: for $x \in A$ and $N \in \mathbb{N}$: by the telescoping of step 8.1, $\sum_{n<N} G_n(x) = F_0(x) - F_N(x) = f_0(x)-F_N(x)$, since $F_0=f_0$. [step 8.1, algebra]

10.1 Under step 1.1: for every $x \in X$ and $N \in \mathbb{N}$, $\big|\sum_{n<N} G_n(x)\big| \le \sum_{n<N}|G_n(x)| \le \sum_{n<N} M_n/3 \le r$, by [L6] and admissibility; letting $N \to \infty$, since $\sum_{n<N}G_n(x) \to F(x)$ (step 9.1) and order is preserved in the limit ([L6]), $|F(x)| \le r$. [step 9.1, L4, L6, algebra]

10.2 Under step 1.1: for $x \in A$: $|F_N(x)| \le M_N = r(2/3)^N \to 0$ as $N \to \infty$, by admissibility of $F_N$ (step 8.1) and [L4]; so by step 9.2, $\sum_{n<N} G_n(x) = f_0(x)-F_N(x) \to f_0(x)-0 = f_0(x)$. [step 9.2, step 8.1, L4]

11.1 Under step 1.1: for $x \in A$: $\sum_{n<N} G_n(x) \to F(x)$ by step 9.1 and $\to f_0(x)$ by step 10.2; since a real sequence has at most one limit ([L6]), $F(x) = f_0(x)$. [step 9.1, step 10.2, L6]

12.1 Under step 1.1: define $\hat F : X \to \mathbb{R}$ by $\hat F(x) := F(x)+c$, continuous; for $x \in X$, $\hat F(x) \in [c-r,c+r] = [a,b]$ by step 10.1; for $x \in A$, $\hat F(x) = F(x)+c = f_0(x)+c = f(x)$ by step 11.1 and the definition of $f_0$ in step 3.1. [step 10.1, step 11.1, step 3.1, algebra, construct]

13.1 Steps 2.1 and 12.1 show that, under the hypothesis of step 1.1, a continuous $F : X \to [a,b]$ with $F|_A=f$ exists — either the constant map of step 2.1 when $a=b$, or $\hat F$ of step 12.1 when $a<b$ — which is clause 1. [step 2.1, step 12.1]

14.1 Steps 13.1 and 5.3 establish clauses 1 and 2 respectively. [step 13.1, step 5.3, discharge-construct] ∎

## Remarks

- **The bound after $n$ stages is $M_n = r(2/3)^n$, with $M_0 = r$, not $r(2/3)^{n-1}$.** Indexing from $n=0$ is what makes step 6.1 the base case rather than a special first step, and it is why the geometric series of [L4] is summed from $n=0$.

- **Choice is spent once more here, genuinely as dependent choice and not in disguise.** Unlike the countable-choice step inside the previous item, the function $g_{n+1}$ chosen in step 6.3 depends on $f_{n+1}$, which is computed from $f_n$ and the *particular* $g_n$ retained in the state $(n,f_n,g_n) \in P$ of step 8.1 — not merely on the index $n$. So the relation $R$ genuinely cannot be replaced by one that ignores its first argument, and this is exactly the situation dependent choice, rather than countable choice alone, is for.

- **The target $[a,b]$ is handled by a shift, not a rescaling.** Working with $f_0 = f - c$ keeps every bound in the construction a plain multiple of $r$, and the final translation $\hat F = F + c$ is the only place $c$ reappears; no affine change of variable on $X$ or on $g_n$ is needed elsewhere.
````

