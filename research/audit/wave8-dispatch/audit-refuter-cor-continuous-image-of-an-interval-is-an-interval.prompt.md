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

- critical risk (10): 11 declared dependencies; 12 cited facts; biconditional / both-direction claim; boundary-sensitive language

## Target item — `cor-continuous-image-of-an-interval-is-an-interval`

Normalized current SHA-256: `835b8db7bb29764dc3a9da0ebf2ee3d34177a5a32977212fb119634213356f71`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-continuous-image-of-an-interval-is-an-interval
kind: corollary
title: "The image of an interval under a continuous real function is order-convex, hence an interval, and the image of a closed bounded interval is a closed bounded interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-intermediate-value, thm-extreme-value-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-interval, def-connected-r, thm-connected-subsets-of-r-are-intervals, def-continuity-real, def-bounded-set, def-max-min, def-open-and-closed-in-r]
justified_by: []
aliases: []
forward_refs: [ex-ivt-gives-nth-roots]
landmark: true
short: "continuous image of an interval"
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
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $I \subseteq A$ be order-convex
([[def-interval]]). Then:

1. $f[I]$ is order-convex, hence connected
   ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]);
2. if $I = [a,b]$ with $a \le b$, then $f[I] = [m, M]$ where
   $m = \min f[I]$ and $M = \max f[I]$ ([[def-max-min]]) — a **closed bounded
   interval**, degenerate exactly when $f$ is constant on $[a,b]$.

**"Interval" means "order-convex" here.** As [[thm-connected-subsets-of-r-are-intervals]]
records, this library proves that the connected subsets of $\mathbb{R}$ are
exactly the order-convex ones, and does **not** prove that every order-convex
subset is one of the nine written forms of [[def-interval]]. Claim 1 is
therefore stated as order-convexity, which is what the intermediate value
theorem delivers; claim 2 identifies the written form in the one case where the
extreme value theorem supplies the endpoints.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and an order-convex set $I \subseteq A$.

[L1] Intermediate value theorem: if $u \le v$ in $\mathbb{R}$, if $f$ is continuous on $[u,v]$ and if $w$ lies between $f(u)$ and $f(v)$ in either order, then $f(t) = w$ for some $t \in [u,v]$ ([[thm-intermediate-value]]).

[L2] Continuity passes to subsets of the domain: if $B \subseteq A$ then $f|_B$ is continuous on $B$, since the defining condition quantifies over fewer points ([[def-continuity-real]]).

[L3] Order-convexity: $x, z \in S$ and $x \le w \le z$ imply $w \in S$; every closed bounded interval $[u,v]$ with $u \le v$ is order-convex and is a subset of any order-convex set containing $u$ and $v$ ([[def-interval]]).

[L4] Connectedness: a subset of $\mathbb{R}$ is connected if and only if it is order-convex ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]).

[L5] $[a,b]$ with $a \le b$ is nonempty, closed and bounded ([[def-interval]], [[def-open-and-closed-in-r]], [[def-bounded-set]]), hence compact ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L6] Extreme value theorem: a continuous real function on a nonempty compact subset of $\mathbb{R}$ attains a greatest and a least value on it ([[thm-extreme-value-r]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 **Claim 1.** Let $u', v' \in f[I]$ and let $w$ satisfy $u' \le w \le v'$. Write $u' = f(p)$ and $v' = f(q)$ with $p, q \in I$, and let $[s,t]$ be the closed bounded interval with $\{s,t\} = \{p,q\}$ and $s \le t$; by [L3] and order-convexity of $I$ we have $[s,t] \subseteq I \subseteq A$. [L3, choose]

1.2 **Claim 2, the endpoints.** Suppose $I = [a,b]$ with $a \le b$. By [L5] the set $[a,b]$ is nonempty and compact, so by [L6] there are $q, p \in [a,b]$ with $f(q) \le f(x) \le f(p)$ for every $x \in [a,b]$; put $m := f(q)$ and $M := f(p)$, so $m = \min f[I]$ and $M = \max f[I]$ and $m \le M$. [L5, L6, choose]

2.1 By [L2] the restriction of $f$ to $[s,t]$ is continuous on $[s,t]$, and $w$ lies between $f(s)$ and $f(t)$ in one order or the other, since $\{f(s), f(t)\} = \{u', v'\}$ and $u' \le w \le v'$. By [L1] there is $c \in [s,t] \subseteq I$ with $f(c) = w$, so $w \in f[I]$. [step 1.1, L1, L2]

3.1 So $f[I]$ is order-convex, and by [L4] it is connected. This is claim 1. [step 2.1, L4]

4.1 **Claim 2, the two inclusions.** Every $z \in f[I]$ satisfies $m \le z \le M$ by step 1.2, so $f[I] \subseteq [m,M]$. Conversely, $m$ and $M$ lie in $f[I]$ and $f[I]$ is order-convex by step 3.1, so every $w$ with $m \le w \le M$ lies in $f[I]$; hence $[m,M] \subseteq f[I]$. Therefore $f[I] = [m,M]$, a closed bounded interval, and it is the single point $\{m\}$ exactly when $m = M$, that is exactly when $f$ is constant on $[a,b]$. [step 3.1, step 1.2, L3] ∎

## Remarks

- **The two halves come from the two theorems.** Order-convexity of the image is the intermediate value theorem and needs nothing else; that the image of a *closed bounded* interval is again closed and bounded is the extreme value theorem, and it fails for other interval forms: the continuous image of $(0,1)$ under $x \mapsto 1/x$ is $(1,\infty)$, and under $x \mapsto x$ it is $(0,1)$, neither closed.

- **The converse of claim 1 is false.** A function whose image on every subinterval is order-convex need not be continuous; this is the intermediate value property without continuity, and the witness for it is not available at this point in the reading order. What *is* true, and is proved on this page, is that a function which is monotone and has an order-convex image is continuous ([[lem-monotone-with-interval-image-is-continuous]]).

- **Claim 2 is the shape the $n$-th-root example uses.** Applying it to $x \mapsto x^{n}$ on $[0, a+1]$ gives an interval containing $0$ and $(a+1)^{n} \ge a$, hence containing $a$; that is the second proof of the existence of $n$-th roots recorded in [[ex-ivt-gives-nth-roots]] on the companion page.
````

## Wave 8 provenance row for the target

```json
{
  "id": "cor-continuous-image-of-an-interval-is-an-interval",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
  ],
  "rationale": "The source identifies the Darboux property with interval images. The local corollary derives order-convexity from IVT and adds the closed-bounded-image conclusion via compactness.",
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
      "source": "thm-intermediate-value",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a \\le b$, let $f : [a,b] \\to \\mathbb{R}$ be continuous on the closed bounded interval $[a,b]$ ([[def-interval]], [[def-continuity-real]]), and let $y \\in \\mathbb{R}$ satisfy",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$ ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the limit of $f$ at $c$ exists and $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$ ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$ witnessing continuity witnesses the limit condition, because the limit condition quantifies over a subset of the points continuity quantifies over; and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses continuity, because the one point it omits, $x = c$, satisfies $|f(c) - f(c)| < \\varepsilon$ anyway.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "A subset $I \\subseteq \\mathbb{R}$ is **order-convex** when $$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-connected-subsets-of-r-are-intervals",
      "source_section": "Statement",
      "quote": "**On the word \"interval\".** Order-convexity is exactly the defining property that [[def-interval]] proves for each of its nine forms, and in that sense the theorem says that the connected subsets of $\\mathbb{R}$ are the intervals. The converse classification, that every order-convex subset of $\\mathbb{R}$ is empty or one of the nine forms, is true and is explicitly **not proved anywhere in this library**; [[def-interval]] records that omission in its own remarks. So the statement proved below is the equivalence with order-convexity, and the phrase \"is an interval\" is to be read as \"is order-convex\" throughout this page.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-connected-r",
      "source_section": "Definition",
      "quote": "Let $A, B, E \\subseteq \\mathbb{R}$, with closure as in [[def-interior-closure-boundary-r]]. - $A$ and $B$ are **separated** when $$\\overline{A} \\cap B = \\varnothing \\quad \\text{and} \\quad A \\cap \\overline{B} = \\varnothing .$$ - A **disconnection** of $E$ is a pair $(A,B)$ of nonempty separated sets with $E = A \\cup B$. - $E$ is **disconnected** when it admits a disconnection, and **connected** when it does not. **Separated is strictly stronger than disjoint.** Since $A \\subseteq \\overline{A}$ ([[def-interior-closure-boundary-r]]), the first displayed condition already gives $A \\cap B \\subseteq \\overline{A} \\cap B = \\varnothing$, so separated sets are disjoint. The converse fails: $(0,1)$ and $[1,2)$ are disjoint, yet every neighbourhood of $1$ meets $(0,1)$, so $1$ is an adherent point of $(0,1)$ and lies in $\\overline{(0,1)}$ ([[thm-closure-characterisations-r]]), while $1 \\in [1,2)$; hence $\\overline{(0,1)} \\cap [1,2) \\ne \\varnothing$ and the pair is not separated. What separation adds to disjointness is exactly this: **neither set of a separated pair may contain a point adherent to the other**, which is what makes a disconnection a genuine splitting rather than a bookkeeping partition. **Separation does not ask the two closures to be disjoint.** Each condition tests one closure against the *other set*, never closure against closure. The pair $(0,1)$, $(1,2)$ illustrates the difference and is separated: $[0,1]$ is a closed set containing $(0,1)$, so $\\overline{(0,1)} \\subseteq [0,1]$ ([[def-open-and-closed-in-r]], [[def-interior-closure-boundary-r]]) and $\\overline{(0,1)} \\cap (1,2) = \\varnothing$; symmetrically $\\overline{(1,2)} \\subseteq [1,2]$ and $(0,1) \\cap \\overline{(1,2)} = \\varnothing$. The two closures nevertheless share the point $1$, so a definition demanding $\\overline{A} \\cap \\overline{B} = \\varnothing$ would be a different and strictly stronger condition, and it is not the one used here.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "bounded",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-heine-borel-characterisation-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded ([[def-bounded-set]]).",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "Let $K \\subseteq \\mathbb{R}$, with open sets as in [[def-open-and-closed-in-r]]. - An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is still an open cover of $K$. - A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$; repetitions in the list are allowed and harmless. - $K$ is **compact** when every open cover of $K$ has a finite subcover: for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$ - $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence converging ([[def-real-limit]]) to some point of $K$; equivalently, when every such sequence has a subsequential limit ([[def-subsequential-limit]]) that lies in $K$. **Compactness is a property of $K$ alone.** The covering families range over open subsets of $\\mathbb{R}$, not over sets open in some other ambient space, so the notion defined here is compactness of $K$ as a subset of $\\mathbb{R}$. Nothing below relativises it to a smaller ambient field; where an ordered field other than $\\mathbb{R}$ is meant, as in [[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set up again there for that field. **$\\varnothing$ is compact and sequentially compact.** The empty subfamily covers it, and there is no sequence with all terms in $\\varnothing$, so both conditions hold vacuously.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-extreme-value-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ be continuous on $A$ ([[def-continuity-real]]) and let $K \\subseteq A$ be **nonempty** and compact ([[def-open-cover-r]]). Then $\\sup f[K]$ and $\\inf f[K]$ exist and are **attained**: there are $p, q \\in K$ with",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$ for every $s \\in S$. - $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "**Claim 1.** Let $u', v' \\in f[I]$ and let $w$ satisfy $u' \\le w \\le v'$. Write $u' = f(p)$ and $v' = f(q)$ with $p, q \\in I$, and let $[s,t]$ be the closed bounded interval with $\\{s,t\\} = \\{p,q\\}$ and $s \\le t$; by [L3] and order-convexity of $I$ we have $[s",
      "step": "1.1",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "**Claim 2, the endpoints.** Suppose $I = [a,b]$ with $a \\le b$. By [L5] the set $[a,b]$ is nonempty and compact, so by [L6] there are $q, p \\in [a,b]$ with $f(q) \\le f(x) \\le f(p)$ for every $x \\in [a,b]$; put $m := f(q)$ and $M := f(p)$, so $m = \\min f[I]$ an",
      "step": "1.2",
      "inputs": [
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By [L2] the restriction of $f$ to $[s,t]$ is continuous on $[s,t]$, and $w$ lies between $f(s)$ and $f(t)$ in one order or the other, since $\\{f(s), f(t)\\} = \\{u', v'\\}$ and $u' \\le w \\le v'$. By [L1] there is $c \\in [s,t] \\subseteq I$ with $f(c) = w$, so $w \\",
      "step": "2.1",
      "inputs": [
        "L2",
        "L1",
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "So $f[I]$ is order-convex, and by [L4] it is connected. This is claim 1.",
      "step": "3.1",
      "inputs": [
        "L4",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "**Claim 2, the two inclusions.** Every $z \\in f[I]$ satisfies $m \\le z \\le M$ by step 1.2, so $f[I] \\subseteq [m,M]$. Conversely, $m$ and $M$ lie in $f[I]$ and $f[I]$ is order-convex by step 3.1, so every $w$ with $m \\le w \\le M$ lies in $f[I]$; hence $[m,M] \\",
      "step": "4.1",
      "inputs": [
        "1.2",
        "3.1",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "For I=∅, the order-convex conclusion is vacuous: step 1.1 begins with arbitrary u',v'∈f[I], and step 3.1 closes the universal argument. Claim 2 separately assumes I=[a,b]."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No scalar, exponent, or index parameter in the Statement has a zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "For a one-point closed interval [a,a], step 1.2 applies EVT and step 4.1 yields f[I]=[m,m]."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 4.1 explicitly states that the image interval is the singleton {m} exactly when m=M, i.e. f is constant."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.1–2.1 restrict to the closed subinterval between preimages, and steps 1.2 and 4.1 retain attained endpoint values m and M."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 fixes preimages only after u',v'∈f[I] establish existence; step 1.2 uses the two extrema supplied by EVT."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The principal Statement is not a biconditional; the singleton characterization in step 4.1 is an ancillary exact clause."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "No reverse implication from interval images to continuity is asserted."
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
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-intermediate-value",
    "declared_target": "thm-intermediate-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-extreme-value-r",
    "declared_target": "thm-extreme-value-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-heine-borel-characterisation-r",
    "declared_target": "thm-heine-borel-characterisation-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-cover-r",
    "declared_target": "def-open-cover-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-connected-r",
    "declared_target": "def-connected-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-connected-subsets-of-r-are-intervals",
    "declared_target": "thm-connected-subsets-of-r-are-intervals",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
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
    "source": "cor-continuous-image-of-an-interval-is-an-interval",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "ex-ivt-gives-nth-roots",
    "declared_target": "ex-ivt-gives-nth-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (13)

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
justified_by: []
aliases: []
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
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
````

### `def-connected-r`

````markdown
---
id: def-connected-r
kind: definition
title: "Separated sets, disconnection, and connected subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-interval, def-neighbourhood-r]
justified_by: []
forward_refs: [cex-rationals-in-an-interval-are-disconnected]
aliases: [def-separated-sets-r, def-disconnection-r]
landmark: false
short: "separated, connected"
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.45)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.5"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A, B, E \subseteq \mathbb{R}$, with closure as in
[[def-interior-closure-boundary-r]].

- $A$ and $B$ are **separated** when
  $$\overline{A} \cap B = \varnothing \quad \text{and} \quad A \cap \overline{B} = \varnothing .$$
- A **disconnection** of $E$ is a pair $(A,B)$ of nonempty separated sets with
  $E = A \cup B$.
- $E$ is **disconnected** when it admits a disconnection, and **connected** when
  it does not.

**Separated is strictly stronger than disjoint.** Since $A \subseteq
\overline{A}$ ([[def-interior-closure-boundary-r]]), the first displayed
condition already gives $A \cap B \subseteq \overline{A} \cap B = \varnothing$,
so separated sets are disjoint. The converse fails: $(0,1)$ and $[1,2)$ are
disjoint, yet every neighbourhood of $1$ meets $(0,1)$, so $1$ is an adherent
point of $(0,1)$ and lies in $\overline{(0,1)}$
([[thm-closure-characterisations-r]]), while $1 \in [1,2)$; hence
$\overline{(0,1)} \cap [1,2) \ne \varnothing$ and the pair is not separated.
What separation adds to disjointness is exactly this: **neither set of a
separated pair may contain a point adherent to the other**, which is what makes
a disconnection a genuine splitting rather than a bookkeeping partition.

**Separation does not ask the two closures to be disjoint.** Each condition
tests one closure against the *other set*, never closure against closure. The
pair $(0,1)$, $(1,2)$ illustrates the difference and is separated: $[0,1]$ is a
closed set containing $(0,1)$, so $\overline{(0,1)} \subseteq [0,1]$
([[def-open-and-closed-in-r]], [[def-interior-closure-boundary-r]]) and
$\overline{(0,1)} \cap (1,2) = \varnothing$; symmetrically
$\overline{(1,2)} \subseteq [1,2]$ and $(0,1) \cap \overline{(1,2)} =
\varnothing$. The two closures nevertheless share the point $1$, so a definition
demanding $\overline{A} \cap \overline{B} = \varnothing$ would be a different and
strictly stronger condition, and it is not the one used here.

## Remarks

- **Why separation and not "both pieces open".** For a subset $E$ of
  $\mathbb{R}$ the pieces of a splitting are rarely open as subsets of
  $\mathbb{R}$: in the disconnection of $\mathbb{Q} \cap [0,2]$ used by
  [[cex-rationals-in-an-interval-are-disconnected]] neither piece is open in
  $\mathbb{R}$. Rudin's separated-sets formulation avoids introducing a second
  topology relative to $E$, and it is the only formulation this page uses.
  Nothing below refers to sets open "in $E$".

- **Every one-point set and the empty set are connected.** A disconnection
  requires two nonempty pieces with union $E$, and if $E$ has at most one point
  no two nonempty disjoint sets have union $E$.

- **Connectedness of a subset of $\mathbb{R}$ turns out to be an order
  property**: $E$ is connected exactly when it is order-convex
  ([[thm-connected-subsets-of-r-are-intervals]]). That is a theorem about
  $\mathbb{R}$ and uses its completeness; the definition above mentions no order
  at all.
````

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

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
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

### `def-open-cover-r`

````markdown
---
id: def-open-cover-r
kind: definition
title: "Open cover, subcover, compact subset of $\\mathbb{R}$ (every open cover has a finite subcover), and sequentially compact subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-sequence, def-subsequential-limit, def-real-limit]
justified_by: []
aliases: [def-compact-in-r, def-sequentially-compact-in-r]
landmark: true
short: "open cover, compact, sequentially compact"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.31, 2.32)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $K \subseteq \mathbb{R}$, with open sets as in
[[def-open-and-closed-in-r]].

- An **open cover** of $K$ is a family $\mathcal{U}$ of open subsets of
  $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{U}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq
  \mathcal{U}$ that is still an open cover of $K$.
- A subfamily $\mathcal{V} \subseteq \mathcal{U}$ is **finite** when
  $\mathcal{V} = \varnothing$ or there are $n \in \mathbb{N}$ and members
  $U_0, \dots, U_n$ of $\mathcal{U}$ with $\mathcal{V} = \{U_0, \dots, U_n\}$;
  repetitions in the list are allowed and harmless.
- $K$ is **compact** when every open cover of $K$ has a finite subcover:
  for every open cover $\mathcal{U}$ of $K$, either $K = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$K \subseteq U_0 \cup \dots \cup U_n .$$
- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with
  $x_k \in K$ for all $k \in \mathbb{N}$ ([[def-sequence]]) has a subsequence
  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every
  such sequence has a subsequential limit ([[def-subsequential-limit]]) that
  lies in $K$.

**Compactness is a property of $K$ alone.** The covering families range over open
subsets of $\mathbb{R}$, not over sets open in some other ambient space, so the
notion defined here is compactness of $K$ as a subset of $\mathbb{R}$. Nothing
below relativises it to a smaller ambient field; where an ordered field other
than $\mathbb{R}$ is meant, as in
[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set
up again there for that field.

**$\varnothing$ is compact and sequentially compact.** The empty subfamily covers
it, and there is no sequence with all terms in $\varnothing$, so both conditions
hold vacuously.

## Remarks

- **Why "finite" is spelled out by listing.** A finite subfamily is described
  here as one that can be written $\{U_0, \dots, U_n\}$ with $n \in \mathbb{N}$,
  which is exactly the form every proof on this page produces or consumes: the
  bisection argument of [[thm-heine-borel-r]] produces a one-member list, and
  the arguments of [[lem-compact-implies-closed-and-bounded-r]] consume a list by
  taking a maximum over it ([[lem-finite-set-has-max]]). Since $\mathbb{N}$
  contains $0$, the shortest nonempty list is $\{U_0\}$.

- **The two notions are not defined to be equivalent, and their equivalence is a
  theorem.** For subsets of $\mathbb{R}$ it is
  [[thm-compact-iff-sequentially-compact-r]]; both of its implications run
  through the characterisation of compactness by closed and bounded, and its
  forward implication additionally uses Bolzano-Weierstrass. Neither implication
  is formal.

- **Compactness is not inherited by subsets, but by closed subsets.** A closed
  subset of a compact set is compact, which is immediate from
  [[thm-heine-borel-characterisation-r]] once that is available, whereas
  $(0,1) \subseteq [0,1]$ shows that an arbitrary subset of a compact set need
  not be compact.

- **The empty cover.** If $K \ne \varnothing$ then no open cover of $K$ is
  empty, so the case distinction in the definition of compactness only ever
  matters for $K = \varnothing$; it is written out so that the definition does
  not quietly assume $K$ nonempty.
````

### `ex-ivt-gives-nth-roots`

````markdown
---
id: ex-ivt-gives-nth-roots
kind: example
title: "The intermediate value theorem gives a second proof that every nonnegative real has an $n$-th root, applied to $x^n$ on a closed bounded interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-intermediate-value, cor-continuous-image-of-an-interval-is-an-interval, thm-nth-roots-exist, thm-algebra-of-continuous-functions, def-continuity-real, def-integer-power, lem-power-monotone, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "IVT gives $n$-th roots"
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
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Example

Let $a \in \mathbb{R}$ with $a \ge 0$ and let $n \in \mathbb{N}$ with $n \ge 1$.
Put $M := a + 1$ and consider

$$f : [0, M] \to \mathbb{R}, \qquad f(x) := x^{n}$$

([[def-integer-power]], [[def-interval]]). Then $f$ is continuous on $[0,M]$,
$f(0) = 0 \le a \le M^{n} = f(M)$, and the intermediate value theorem
([[thm-intermediate-value]]) supplies $c \in [0,M]$ with

$$c^{n} = a .$$

Moreover $c$ is the **only** nonnegative real with this property, so
$c = a^{1/n}$ in the notation of [[thm-nth-roots-exist]].

**This is a second proof of an existing theorem, not a new one.**
[[thm-nth-roots-exist]] already proves existence and uniqueness of $n$-th roots,
by an argument that runs directly from the least-upper-bound property and the
factorisation of $b^{n} - a^{n}$; it is the item the rest of the library cites,
and no second identifier is minted for the same statement. What is recorded here
is that the intermediate value theorem gives the existence half in three lines
once continuity of $x \mapsto x^{n}$ is available, which is the standard modern
route and the reason the theorem is usually met in this form.

**No circularity.** [[thm-intermediate-value]] rests on
[[thm-nested-interval-property]], on the algebra of continuous functions and on
the sequential criterion, none of which uses $n$-th roots; and the uniqueness
half below is [[lem-power-monotone]], which is pure ordered-field arithmetic. So
this argument could have been the library's definition of $a^{1/n}$; it is not,
only because the roots were needed at order $16$, long before continuity
existed.

## Facts & Assumptions

**Given:** A real $a \ge 0$, a natural $n \ge 1$, and $M := a + 1$; the function $f(x) = x^{n}$ on $[0,M]$.

[L1] Polynomial functions, in particular $x \mapsto x^{n}$, are continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[def-integer-power]]).

[L2] Intermediate value theorem: for $u \le v$, a function continuous on $[u,v]$ takes every value between $f(u)$ and $f(v)$ ([[thm-intermediate-value]]).

[L3] Powers and order: $0^{n} = 0$ for $n \ge 1$; if $t \ge 1$ and $n \ge 1$ then $t^{n} \ge t$; and $x \mapsto x^{n}$ is strictly increasing on the nonnegative reals for $n \ge 1$, hence injective there ([[lem-power-monotone]], [[def-integer-power]]).

[L4] Existence and uniqueness of $n$-th roots: for $a \ge 0$ and $n \ge 1$ there is a unique $s \ge 0$ with $s^{n} = a$, written $a^{1/n}$ ([[thm-nth-roots-exist]]).

[L5] Ordered-field arithmetic: $a \ge 0$ gives $M = a + 1 \ge 1 > 0$ and $M > a$; and $0 \le M$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $M = a + 1 \ge 1 > 0$ by [L5], so $[0,M]$ is a nonempty closed bounded interval, and $f$ is continuous on it by [L1]. [L1, L5]

1.2 $f(0) = 0^{n} = 0 \le a$ by [L3] and the hypothesis $a \ge 0$; and $f(M) = M^{n} \ge M = a + 1 > a$ by [L3] and [L5]. So $f(0) \le a \le f(M)$. [L3, L5]

2.1 By [L2] applied on $[0,M]$ with the value $a$, there is $c \in [0,M]$ with $c^{n} = a$; in particular $c \ge 0$. [step 1.1, step 1.2, L2, choose]

3.1 $c$ is the only nonnegative real with $c^{n} = a$: by [L3] the map $t \mapsto t^{n}$ is injective on the nonnegative reals, so two nonnegative solutions would coincide. Hence $c = a^{1/n}$ in the notation of [L4], and the existence half of [L4] has been re-proved from the intermediate value theorem. [step 2.1, L3, L4] ∎

## Remarks

- **Why $M = a + 1$ and not $M = a$.** For $0 \le a < 1$ the value $a^{n}$ is at most $a$, so $[0,a]$ need not reach $a$ at its right endpoint; adding $1$ makes $M \ge 1$, and then $M^{n} \ge M > a$ by [[lem-power-monotone]]. Taking $M := \max\{1, a\}$ works equally well and is the usual textbook choice; $a+1$ avoids naming a maximum.

- **The same argument through the image.** [[cor-continuous-image-of-an-interval-is-an-interval]] says $f\bigl[\,[0,M]\,\bigr]$ is a closed bounded interval containing $f(0) = 0$ and $f(M) = M^{n}$, hence containing $a$; that is the intermediate value theorem repackaged, and it is the form in which the statement generalises to other continuous increasing functions.

- **What this does not give.** The argument produces a root but no way to compute it, and no rate: it is a pure existence proof, exactly like the bisection that underlies [[thm-intermediate-value]]. The companion example [[ex-fixed-point-from-the-ivt]] identifies the same number, for $n = 2$ and $a = 2$, as the fixed point of $x \mapsto (x + 2/x)/2$ on $[1,2]$.
````

### `lem-monotone-with-interval-image-is-continuous`

````markdown
---
id: lem-monotone-with-interval-image-is-continuous
kind: lemma
title: "A function on an interval satisfying $f(x) \\le f(y)$ whenever $x \\le y$, whose image is order-convex, is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, def-interval, thm-connected-subsets-of-r-are-intervals, def-connected-r, def-neighbourhood-r, def-max-min, lem-finite-set-has-max, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [lem-monotone-darboux-implies-continuous]
landmark: true
short: "monotone with order-convex image is continuous"
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ satisfy

$$f(x) \le f(y) \qquad \text{whenever } x, y \in I \text{ and } x \le y .$$

If the image $f[I]$ is order-convex, then $f$ is continuous on $I$
([[def-continuity-real]]).

**No definition of a monotone function is used, and none is available at this
point in the reading order.** The hypothesis is written out as the displayed
inequality; the classification of monotone functions and their discontinuities
comes later in the library. Equivalently, by
[[thm-connected-subsets-of-r-are-intervals]], the hypothesis on the image is
that $f[I]$ is connected ([[def-connected-r]]).

**The hypothesis on the image cannot be dropped.** Define $f$ on $I = [0,1]$ by
$f(x) := x$ for $x < 1$ and $f(1) := 2$. It satisfies the displayed inequality,
its image is $[0,1) \cup \{2\}$, which is not order-convex, and it is not
continuous at $1$: no $\delta$ works for $\varepsilon = 1/2$, since points of
$[0,1)$ arbitrarily close to $1$ have values close to $1$, at distance close to
$1$ from $f(1) = 2$.

**This is a genuine converse to the intermediate value property, in the presence
of the inequality.** It does not need one-sided limits of monotone functions,
which are not available at this point in the reading order; the entire proof is
the two paragraphs below, which read the required $\delta$ off the image.

## Facts & Assumptions

**Given:** An order-convex set $I \subseteq \mathbb{R}$ and a function $f : I \to \mathbb{R}$ with $f(x) \le f(y)$ whenever $x, y \in I$ and $x \le y$, such that $f[I]$ is order-convex; and a point $c \in I$ together with a real $\varepsilon > 0$.

[L1] Continuity of $f$ at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in I$ satisfying $|x - c| < \delta$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Order-convexity of $f[I]$: if $u, v \in f[I]$ and $u \le w \le v$ then $w \in f[I]$ ([[def-interval]]); equivalently $f[I]$ is connected ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]).

[L3] Order and field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, so any two reals are comparable and exactly one of $r < c$, $r = c$, $r > c$ holds; $\varepsilon > 0$ gives $\varepsilon/2 > 0$ and $f(c) - \varepsilon < f(c) - \varepsilon/2 < f(c)$ ([[def-ordered-field]]).

[L4] The minimum of a two-element set of reals exists and is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] Absolute value: for $s > 0$, $|t| < s$ holds exactly when $-s < t < s$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 **A point of $I$ below $c$ with a value close to $f(c)$, when one exists at all.** Suppose some $p \in I$ has $p < c$. We claim there is $q \in I$ with $q < c$ and $f(q) > f(c) - \varepsilon$. If there were none, then $f(q) \le f(c) - \varepsilon$ for every $q \in I$ with $q < c$, and in particular $f(p) \le f(c) - \varepsilon$. Put $w := f(c) - \varepsilon/2$, so $f(p) \le f(c) - \varepsilon < w < f(c)$ by [L3]. Since $f(p), f(c) \in f[I]$, [L2] gives $r \in I$ with $f(r) = w$. By [L3] exactly one of $r < c$, $r = c$, $r > c$ holds: the first gives $w = f(r) \le f(c) - \varepsilon < w$, the second gives $w = f(c)$, and the third gives $w = f(r) \ge f(c)$ by the monotonicity hypothesis; each contradicts $f(c) - \varepsilon < w < f(c)$. So the claimed $q$ exists. [L2, L3]

2.1 **The left radius.** If some $p \in I$ has $p < c$, fix $q$ as in step 1.1 and put $\delta_1 := c - q > 0$; then every $x \in I$ with $c - \delta_1 < x \le c$ satisfies $q < x \le c$, hence $f(q) \le f(x) \le f(c)$ by monotonicity, hence $f(c) - \varepsilon < f(x) \le f(c)$. If no point of $I$ lies below $c$, put $\delta_1 := 1$; then the only $x \in I$ with $c - \delta_1 < x \le c$ is $x = c$, for which $f(c) - \varepsilon < f(c) = f(x) \le f(c)$ holds as well. In both cases $\delta_1 > 0$ and every $x \in I$ with $c - \delta_1 < x \le c$ satisfies $f(c) - \varepsilon < f(x) \le f(c)$. [step 1.1, L3, choose]

2.2 **The right radius, symmetrically.** Suppose some $p \in I$ has $p > c$. If every $s \in I$ with $s > c$ had $f(s) \ge f(c) + \varepsilon$, then with $w' := f(c) + \varepsilon/2$ we would have $f(c) < w' < f(c) + \varepsilon \le f(p)$, so [L2] would give $r \in I$ with $f(r) = w'$; but by [L3] exactly one of $r > c$, $r = c$, $r < c$ holds, and the first gives $w' = f(r) \ge f(c) + \varepsilon > w'$, the second gives $w' = f(c)$, and the third gives $w' = f(r) \le f(c)$ by the monotonicity hypothesis, each contradicting $f(c) < w' < f(c) + \varepsilon$. So there is $s \in I$ with $s > c$ and $f(s) < f(c) + \varepsilon$; put $\delta_2 := s - c > 0$. If no point of $I$ lies above $c$, put $\delta_2 := 1$. In both cases $\delta_2 > 0$ and every $x \in I$ with $c \le x < c + \delta_2$ satisfies $f(c) \le f(x) < f(c) + \varepsilon$. [step 1.1, L2, L3, choose]

3.1 **Combining.** Put $\delta := \min\{\delta_1, \delta_2\}$, which is a positive real by [L4]. Let $x \in I$ with $|x - c| < \delta$, so $c - \delta < x < c + \delta$ by [L5]. By totality either $x \le c$, and then $c - \delta_1 \le c - \delta < x \le c$, so step 2.1 gives $f(c) - \varepsilon < f(x) \le f(c)$; or $x \ge c$, and then $c \le x < c + \delta \le c + \delta_2$, so step 2.2 gives $f(c) \le f(x) < f(c) + \varepsilon$. In either case $-\varepsilon < f(x) - f(c) < \varepsilon$, that is $|f(x) - f(c)| < \varepsilon$ by [L5]. [step 2.1, step 2.2, L3, L4, L5]

4.1 The point $c \in I$ and the real $\varepsilon > 0$ were arbitrary, so by [L1] the function $f$ is continuous at every point of $I$, that is, continuous on $I$. [step 3.1, L1] ∎

## Remarks

- **Where order-convexity of the image is used, and where it is not.** It is used exactly twice, in steps 1.1 and 2.2, each time to convert a value strictly between two attained values into an attained value. Nothing else in the argument looks at the image. In particular, no continuity of $f$ is assumed anywhere, which is what makes the lemma a converse rather than a reformulation.

- **The endpoint cases are not a technicality.** If $c$ is the left endpoint of $I$ there is no point of $I$ below it, and the left half of the estimate is vacuous; the same at the right. Handling them by the fixed radius $1$ keeps the proof free of any hypothesis that $I$ be open or nondegenerate.

- **What this lemma is for.** It is the standard route to continuity of a function defined by a monotone construction whose image is known independently — the Cantor function is the classical instance, its image being all of $[0,1]$ — and it is stated here as a standalone lemma so that a later page may cite it rather than repeat the argument.
````

### `thm-connected-subsets-of-r-are-intervals`

````markdown
---
id: thm-connected-subsets-of-r-are-intervals
kind: theorem
title: "A subset of $\\mathbb{R}$ is connected if and only if it is order-convex, that is, an interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-connected-r, def-interval, def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, def-open-and-closed-in-r, def-bounded-set, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-ordered-field, lem-of-add-order, cor-of-one-positive, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-rationals-in-an-interval-are-disconnected]
aliases: []
landmark: true
short: "connected $\\iff$ order-convex"
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.47)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.5"
      url: "https://www.jirka.org/ra/"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$. Then $E$ is connected ([[def-connected-r]]) if and
only if $E$ is **order-convex** ([[def-interval]]), that is, if and only if

$$x, z \in E \text{ and } x \le w \le z \;\Longrightarrow\; w \in E .$$

**On the word "interval".** Order-convexity is exactly the defining property
that [[def-interval]] proves for each of its nine forms, and in that sense the
theorem says that the connected subsets of $\mathbb{R}$ are the intervals. The
converse classification, that every order-convex subset of $\mathbb{R}$ is empty
or one of the nine forms, is true and is explicitly **not proved anywhere in
this library**; [[def-interval]] records that omission in its own remarks. So
the statement proved below is the equivalence with order-convexity, and the
phrase "is an interval" is to be read as "is order-convex" throughout this page.

## Facts & Assumptions

**Given:** A subset $E \subseteq \mathbb{R}$.

[L1] Separated sets, disconnection, connectedness; separated sets are disjoint ([[def-connected-r]]).

[L2] $\overline{A}$ is the smallest closed superset of $A$, so $A \subseteq B$ gives $\overline{A} \subseteq \overline{B}$ and $\overline{A} \subseteq F$ for every closed $F \supseteq A$; and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]]).

[L3] Order-convexity, and the interval forms: $(-\infty,w]$ and $[w,\infty)$ are closed sets, $(-\infty,w)$ and $(w,\infty)$ are open sets, and the order is total and transitive ([[def-interval]], [[def-open-and-closed-in-r]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a unique least upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).

[L5] Epsilon characterisation: for nonempty $S$ bounded above and $c = \sup S$, every $\varepsilon > 0$ admits $s \in S$ with $c - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L6] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]]).

[L7] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] Ordered-field arithmetic: $0 < 1$, so $2 := 1+1 > 0$ and $2^{-1} > 0$; for $d > 0$ one has $0 < d \cdot 2^{-1} < d$; adding a constant preserves an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Suppose $E$ is not order-convex: there are $x, z \in E$ and $w \in \mathbb{R}$ with $x \le w \le z$ and $w \notin E$; then $w \ne x$ and $w \ne z$, so $x < w < z$. Put $A := E \cap (-\infty,w)$ and $B := E \cap (w,\infty)$; then $x \in A$ and $z \in B$, so both are nonempty, and $A \cup B = E$ because no element of $E$ equals $w$. [assume-hyp, L3]

1.2 Suppose instead that $E$ is order-convex and that $(A,B)$ is a disconnection of $E$; fix $p \in A$ and $q \in B$. Separated sets are disjoint by [L1], so $p \ne q$, and interchanging the names $A$ and $B$ if necessary, which is legitimate because the hypotheses on the pair are symmetric, we may assume $p < q$. [assume-hyp, L1, choose]

1.3 For a nonempty $S \subseteq \mathbb{R}$ bounded above, $\sup S \in \overline{S}$: for every real $\varepsilon > 0$ the fact [L5] supplies $s \in S$ with $\sup S - \varepsilon < s \le \sup S$, so $|s - \sup S| < \varepsilon$ and $s \in N_\varepsilon(\sup S) \cap S$; thus every neighbourhood of $\sup S$ meets $S$, and [L2] gives $\sup S \in \overline{S}$. [L2, L4, L5, L6]

2.1 In the situation of step 1.1 the pair $(A,B)$ is a disconnection: $(-\infty,w]$ is a closed set containing $A$, so $\overline{A} \subseteq (-\infty,w]$ by [L2], whence $\overline{A} \cap B \subseteq (-\infty,w] \cap (w,\infty) = \varnothing$; symmetrically $\overline{B} \subseteq [w,\infty)$ and $A \cap \overline{B} = \varnothing$. So $A$ and $B$ are separated, nonempty, and their union is $E$, and $E$ is disconnected. [step 1.1, L1, L2, L3]

2.2 In the situation of step 1.2 put $S := A \cap [p,q]$; it is nonempty because $p \in A$ and $p \le p \le q$, and it is bounded above by $q$, so $c := \sup S$ exists by [L4], and $p \le c \le q$ since $p \in S$ and $q$ is an upper bound. [step 1.2, L3, L4]

3.1 $c \in A$: from $S \subseteq A$ and [L2] we get $\overline{S} \subseteq \overline{A}$, and $c \in \overline{S}$ by step 1.3, so $c \in \overline{A}$ and hence $c \notin B$ because $\overline{A} \cap B = \varnothing$; on the other hand $p \le c \le q$ with $p, q \in E$ and $E$ order-convex gives $c \in E = A \cup B$, so $c \in A$. [step 1.2, step 1.3, step 2.2, L1, L2]

4.1 $c < q$, since $c \in A$ and $q \in B$ are distinct by [L1] while $c \le q$; and every $v$ with $c < v \le q$ lies in $B$: such a $v$ satisfies $p \le c < v \le q$, so $v \in E$ by order-convexity, and $v \notin A$, for otherwise $v \in A \cap [p,q] = S$ would force $v \le c$. [step 1.2, step 2.2, step 3.1, L1, L3]

5.1 $c \in \overline{B}$, which is impossible: given a real $\varepsilon > 0$, put $t := \min\{\varepsilon \cdot 2^{-1},\ (q - c) \cdot 2^{-1}\}$, a positive real by [L7] and [L8] since $q - c > 0$, and $v := c + t$; then $c < v$ and $v \le c + (q-c) \cdot 2^{-1} < q$, so $v \in B$ by step 4.1, while $|v - c| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$, so $v \in N_\varepsilon(c) \cap B$. Hence every neighbourhood of $c$ meets $B$ and $c \in \overline{B}$ by [L2]; but $c \in A$ by step 3.1 and $A \cap \overline{B} = \varnothing$ by [L1]. So the assumed disconnection cannot exist and an order-convex $E$ is connected. [step 3.1, step 4.1, L1, L2, L6, L7, L8]

6.1 Step 2.1 shows that a set which is not order-convex is disconnected, hence a connected set is order-convex; step 5.1 shows that an order-convex set admits no disconnection, hence is connected. The two together are the asserted equivalence. [step 2.1, step 5.1] ∎

## Remarks

- **Where completeness is spent.** Only in step 2.2, which produces
  $\sup(A \cap [p,q])$; no other step uses the least-upper-bound property, and
  the rest is the order, ordered-field arithmetic and the definition of
  separation. The obstruction over an incomplete ordered field is traceable to
  the failure of that supremum to exist, and it is visible in
  [[cex-rationals-in-an-interval-are-disconnected]]: the set
  $\mathbb{Q} \cap [0,2]$ contains all the rationals between its endpoints and is
  nevertheless disconnected as a subset of $\mathbb{R}$, split at an irrational
  point that $\mathbb{Q}$ does not see.

- **The two directions are of different characters.** "Not order-convex implies
  disconnected" is a construction, step 1.1, and needs nothing beyond the order.
  "Order-convex implies connected" is where the work sits, and the supremum
  $c$ produced in step 2.2 is the point at which the two pieces would have to
  meet; the contradiction is that it is adherent to both.

- **The theorem is about subsets of $\mathbb{R}$ and its statement is written in
  order vocabulary**, so it cannot even be stated where no order is present;
  [[rem-r-native-topology-scope]] collects the results on this page with that
  feature.
````

### `thm-extreme-value-r`

````markdown
---
id: thm-extreme-value-r
kind: theorem
title: "Extreme value theorem: a continuous real function on a nonempty compact subset of $\\mathbb{R}$ attains a greatest and a least value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuous-image-of-a-compact-set-r, cor-boundedness-theorem-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-continuity-real, def-bounded-set, def-infimum, thm-infimum-property, lem-sup-epsilon, lem-inf-epsilon, def-max-min, def-complete-ordered-field, thm-closure-characterisations-r, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: [thm-evt-r]
forward_refs: [cex-evt-fails-on-the-open-interval-and-on-the-half-line]
landmark: true
short: "extreme value theorem"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.16)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "Compact space (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Compact_space"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be **nonempty** and compact
([[def-open-cover-r]]). Then $\sup f[K]$ and $\inf f[K]$ exist and are
**attained**: there are $p, q \in K$ with

$$f(q) \;=\; \inf f[K] \;\le\; f(x) \;\le\; \sup f[K] \;=\; f(p) \qquad \text{for every } x \in K .$$

Equivalently, the set $f[K]$ has a maximum and a minimum
([[def-max-min]]), namely $\max f[K] = f(p)$ and $\min f[K] = f(q)$.

**Nonemptiness of $K$ is a hypothesis, not an oversight.** For $K = \varnothing$
the set $f[K]$ is empty, and neither a supremum nor a maximum of the empty set
exists in this library ([[def-complete-ordered-field]] supplies suprema of
nonempty sets bounded above only).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-extreme-value-metric]], proved from the cover machinery of metric
spaces; the proof below is $\mathbb{R}$-native, running through Heine-Borel for
$\mathbb{R}$ and the order-completeness of $\mathbb{R}$, and it uses no cover
argument beyond the one already spent in
[[thm-continuous-image-of-a-compact-set-r]]. That the two statements are the
same statement in two vocabularies is proved in
[[lem-real-and-metric-notions-agree]], later on this page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a nonempty compact set $K \subseteq A$; write $S := f[K]$.

[L1] $S = f[K]$ is compact ([[thm-continuous-image-of-a-compact-set-r]]), and it is nonempty because $K$ is.

[L2] $S$ is bounded: there is a real $M \ge 0$ with $|z| \le M$ for every $z \in S$, so $-M$ is a lower bound and $M$ an upper bound of $S$ ([[cor-boundedness-theorem-r]], [[def-bounded-set]]).

[L3] A compact subset of $\mathbb{R}$ is closed ([[thm-heine-borel-characterisation-r]], [[def-open-and-closed-in-r]]).

[L4] Least upper bounds: a nonempty subset of $\mathbb{R}$ bounded above has a supremum ([[def-complete-ordered-field]]); a nonempty subset bounded below has an infimum ([[thm-infimum-property]], [[def-infimum]]).

[L5] Epsilon characterisations: for nonempty $S$ bounded above and $u = \sup S$, every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$; dually for $\ell = \inf S$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L6] Closure: $\overline{S}$ is the set of points every neighbourhood of which meets $S$, and $S$ is closed exactly when $S = \overline{S}$ ([[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L7] A maximum of a set is an element of it that bounds it above, and a minimum is an element that bounds it below ([[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the set $S = f[K]$ is nonempty and compact, and by [L2] it is bounded; by [L3] it is closed. [L1, L2, L3]

2.1 By [L4] the supremum $u := \sup S$ and the infimum $\ell := \inf S$ exist. [step 1.1, L4]

3.1 **$u$ is adherent to $S$.** Let a real $\varepsilon > 0$ be given. By [L5] there is $s \in S$ with $u - \varepsilon < s$, and $s \le u < u + \varepsilon$ since $u$ bounds $S$ above; hence $|s - u| < \varepsilon$, that is $s \in N_{\varepsilon}(u) \cap S$. So every neighbourhood of $u$ meets $S$. [step 2.1, L5, L6]

3.2 **$\ell$ is adherent to $S$.** Symmetrically, [L5] gives $s \in S$ with $s < \ell + \varepsilon$, and $\ell \le s$ since $\ell$ bounds $S$ below; hence $s \in N_{\varepsilon}(\ell) \cap S$ for every real $\varepsilon > 0$. [step 2.1, L5, L6]

4.1 By [L6] the two steps above say $u \in \overline{S}$ and $\ell \in \overline{S}$; and $S$ is closed by step 1.1, so $\overline{S} = S$ and therefore $u \in S$ and $\ell \in S$. [step 1.1, step 3.1, step 3.2, L6]

5.1 Since $u \in S = f[K]$ there is $p \in K$ with $f(p) = u$, and since $\ell \in S$ there is $q \in K$ with $f(q) = \ell$. [step 4.1, choose]

6.1 For every $x \in K$ the value $f(x)$ lies in $S$, so $\ell \le f(x) \le u$, that is $f(q) \le f(x) \le f(p)$. Hence $u = \sup f[K] = f(p)$ is a maximum of $f[K]$ and $\ell = \inf f[K] = f(q)$ is a minimum of it, both attained at points of $K$. [step 2.1, step 4.1, step 5.1, L7] ∎

## Remarks

- **The two ingredients, kept apart.** Compactness of $K$ enters only through the compactness of the image; order-completeness of $\mathbb{R}$ enters only in the existence of $\sup S$ and $\inf S$. The bridge between them is closedness of $S$: a closed set contains the adherent points of itself, and the supremum of a nonempty bounded set is always adherent to it, by [[lem-sup-epsilon]]. Neither ingredient can be dropped: over $\mathbb{Q}$ the supremum need not exist, and on a noncompact domain the supremum exists and is not attained ([[cex-evt-fails-on-the-open-interval-and-on-the-half-line]]).

- **Attainment is exactly what the epsilon characterisation cannot give on its own.** [[lem-sup-epsilon]] produces points of $S$ arbitrarily close to $\sup S$ for any nonempty bounded $S$; nothing there says one of them equals $\sup S$. What closedness adds is that the limiting value is not lost.

- **The converse.** If every continuous real function on a set $E$ attains a greatest value, then $E$ is compact. That is the content of [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], which exhibits, for every noncompact $E$, a bounded continuous function on $E$ with no greatest value.
````

### `thm-heine-borel-characterisation-r`

````markdown
---
id: thm-heine-borel-characterisation-r
kind: theorem
title: "A subset of $\\mathbb{R}$ is compact if and only if it is closed and bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-heine-borel-r, lem-compact-implies-closed-and-bounded-r, def-open-cover-r, def-interval, def-bounded-set, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-unbounded-closed-set-not-compact, cex-closed-bounded-in-q-not-compact]
aliases: []
landmark: true
short: "compact $\\iff$ closed and bounded"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.41)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and
only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded
([[def-bounded-set]]).

This is the Heine-Borel theorem in the form used everywhere below. The forward
implication is [[lem-compact-implies-closed-and-bounded-r]] and spends no
completeness, only the Archimedean property and the existence of maxima of
finite sets; the backward implication rests on
[[thm-heine-borel-r]] and therefore on the completeness of $\mathbb{R}$, and the
remarks below record where it fails without completeness.

## Facts & Assumptions

**Given:** A subset $K \subseteq \mathbb{R}$.

[L1] Open cover, finite subfamily and compactness; the empty subfamily covers $\varnothing$ ([[def-open-cover-r]]).

[L2] A compact subset of $\mathbb{R}$ is closed and bounded ([[lem-compact-implies-closed-and-bounded-r]]).

[L3] Every closed bounded interval $[\ell,u]$ with $\ell \le u$ is compact ([[thm-heine-borel-r]]).

[L4] $K$ is closed exactly when $\mathbb{R} \setminus K$ is open ([[def-open-and-closed-in-r]]).

[L5] $K$ is bounded exactly when there are $\ell, u \in \mathbb{R}$ with $\ell \le y \le u$ for every $y \in K$ ([[def-bounded-set]]).

[L6] $[\ell,u] = \{\, z \in \mathbb{R} : \ell \le z \le u \,\}$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 If $K$ is compact then $K$ is closed and bounded, which is [L2]; this is the forward implication. [L2]

1.2 For the backward implication assume $K$ is closed and bounded. If $K = \varnothing$ then every open cover of $K$ admits the empty subfamily as a finite subcover, so $K$ is compact. [assume-hyp, L1]

1.3 Assume moreover $K \ne \varnothing$; fix $s \in K$ and, by [L5], reals $\ell, u$ with $\ell \le y \le u$ for every $y \in K$. Then $\ell \le s \le u$, so $\ell \le u$, and $K \subseteq [\ell,u]$ by [L6]. [assume-hyp, L5, L6, choose]

2.1 Let $\mathcal{U}$ be an open cover of $K$ and put $\mathcal{W} := \mathcal{U} \cup \{\mathbb{R} \setminus K\}$. Every member of $\mathcal{W}$ is open, since $\mathbb{R} \setminus K$ is open by [L4], and $\mathcal{W}$ covers $[\ell,u]$: a point of $[\ell,u]$ either lies in $K$, hence in some member of $\mathcal{U}$, or lies outside $K$, hence in $\mathbb{R} \setminus K$. [step 1.3, L1, L4]

3.1 By [L3] the interval $[\ell,u]$ is compact, so some finite subfamily $\{W_0, \dots, W_p\}$ of $\mathcal{W}$ covers $[\ell,u]$, where the case of an empty subfamily is possible only when $[\ell,u] = \varnothing$, which is excluded by $\ell \le u$. Put $\mathcal{V} := \{\, W_i : W_i \in \mathcal{U} \,\}$, a finite subfamily of $\mathcal{U}$. Then $K \subseteq \bigcup \mathcal{V}$: a point $y \in K \subseteq [\ell,u]$ lies in some $W_i$, and $W_i$ cannot be a member of $\mathcal{W}$ outside $\mathcal{U}$, because the only such member is $\mathbb{R} \setminus K$ and $y \in K$; so $W_i \in \mathcal{U}$ and $W_i \in \mathcal{V}$. [step 2.1, L1, L3, L6]

4.1 Every open cover of a nonempty closed bounded $K$ therefore has a finite subcover, so such a $K$ is compact; together with the empty case of step 1.2 this proves the backward implication, and step 1.1 is the forward one. [step 1.1, step 1.2, step 3.1, L1] ∎

## Remarks

- **A closed subset of a compact set is compact.** If $C \subseteq K$ with $K$
  compact and $C$ closed, then $C$ is bounded, being a subset of a bounded set,
  and closed by hypothesis, so it is compact by the theorem. The corresponding
  statement for arbitrary subsets is false: $(0,1) \subseteq [0,1]$ is bounded
  and not compact ([[cex-unbounded-closed-set-not-compact]]).

- **Both hypotheses are needed and neither implies the other.**
  [[cex-unbounded-closed-set-not-compact]] exhibits a closed set that is not
  bounded and a bounded set that is not closed, and neither is compact.

- **What the theorem is not.** It characterises compactness *for subsets of
  $\mathbb{R}$*. The two halves are of very different strengths: the forward
  half is elementary and general, while the backward half rests on the
  completeness of $\mathbb{R}$ and fails over $\mathbb{Q}$
  ([[fs-closed-bounded-compact-without-completeness]], witnessed by
  [[cex-closed-bounded-in-q-not-compact]]). Nothing here licenses "closed and
  bounded implies compact" in any other setting.
````

### `thm-intermediate-value`

````markdown
---
id: thm-intermediate-value
kind: theorem
title: "Intermediate value theorem, by bisection with a canonical left-half rule: a continuous function on $[a,b]$ takes every value between $f(a)$ and $f(b)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-continuous-functions, thm-sequential-criterion-for-continuity, thm-nested-interval-property, def-interval, def-complete-ordered-field, thm-recursion, lem-geometric-sequence-null, thm-algebra-of-limits, lem-limit-preserves-order, def-real-limit, def-sequence, def-integer-power, lem-power-laws, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-ivt]
landmark: true
short: "intermediate value theorem"
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
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.23)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $f : [a,b] \to \mathbb{R}$ be
continuous on the closed bounded interval $[a,b]$ ([[def-interval]],
[[def-continuity-real]]), and let $y \in \mathbb{R}$ satisfy

$$f(a) \le y \le f(b) \qquad \text{or} \qquad f(b) \le y \le f(a) .$$

Then there is $c \in [a,b]$ with $f(c) = y$.

**The construction is canonical, so no choice principle is used.** The bisection
below tests the left half first and takes the right half only when the left one
has been ruled out, so the passage from one interval to the next is a *function*
of that interval, and [[thm-recursion]] applies with nothing selected. This is
the same discipline the library uses wherever a sequence is built one term at a
time.

**Completeness of $\mathbb{R}$ is what does the work.** The bisection produces a
nested sequence of closed bounded intervals whose lengths tend to $0$, and it is
[[thm-nested-interval-property]] — hence the least-upper-bound property — that
supplies the point. Over an ordered field that is not complete the theorem
fails; the witness for that, stated for an arbitrary ordered field and worked
over $\mathbb{Q}$, is
[[cex-evt-and-ivt-fail-over-a-non-complete-field]], which states its own
$\varepsilon$-$\delta$ continuity inline and is not an instance of this page's
definition.

## Facts & Assumptions

**Given:** Reals $a \le b$, a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$, and a real $y$ with $f(a) \le y \le f(b)$ or $f(b) \le y \le f(a)$.

[L1] Scalar multiples of continuous functions are continuous, so $(-1)f$ is continuous on $[a,b]$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] Recursion: for a set $X$, an element $x_0 \in X$ and a function $F : X \to X$ there is a unique $g : \mathbb{N} \to X$ with $g(0) = x_0$ and $g(k+1) = F(g(k))$ for every $k$ ([[thm-recursion]]).

[L3] Nested intervals: if $I_k = [a_k,b_k]$ with $a_k \le b_k$ and $I_{k+1} \subseteq I_k$ for every $k \in \mathbb{N}$, then $\bigcap_{k} I_k$ is nonempty, and it is a single point exactly when the lengths $b_k - a_k$ tend to $0$ ([[thm-nested-interval-property]], [[def-interval]], [[def-real-limit]]).

[L4] Null geometric sequences: $|r| < 1$ implies $r^{k} \to 0$; and a constant multiple of a null sequence is null, while a constant sequence converges to that constant ([[lem-geometric-sequence-null]], [[thm-algebra-of-limits]], [[def-integer-power]], [[def-sequence]]).

[L5] Powers: $(2^{-1})^{k} = (2^{k})^{-1}$ for every $k \in \mathbb{N}$ ([[lem-power-laws]], [[def-integer-power]]).

[L6] Sequential criterion, the choice-free direction: if $f$ is continuous at $c$ and $x_k \in [a,b]$ with $x_k \to c$, then $f(x_k) \to f(c)$ ([[thm-sequential-criterion-for-continuity]], [[def-continuity-real]]).

[L7] Limits preserve non-strict inequalities ([[lem-limit-preserves-order]]).

[L8] Order and field arithmetic in $\mathbb{R}$: trichotomy and totality, so exactly one of $f(m) \ge y$ and $f(m) < y$ holds; halving and the ordered-field identities ([[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| \le s$ whenever $-s \le t \le s$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** constructive.

1.1 **Reduction.** It is enough to prove the theorem under the hypothesis $f(a) \le y \le f(b)$. Indeed, in the remaining case $f(b) \le y \le f(a)$, put $h := (-1)f$ and $z := -y$; then $h$ is continuous on $[a,b]$ by [L1] and $h(a) = -f(a) \le -y = z \le -f(b) = h(b)$, so a point $c \in [a,b]$ with $h(c) = z$ is a point with $f(c) = y$. [L1, L8, suffices: assume f(a) le y le f(b)]

1.2 **The bisection map.** Assume $f(a) \le y \le f(b)$ and put $$X \;:=\; \bigl\{\, (u,v) \in \mathbb{R} \times \mathbb{R} \ : \ a \le u \le v \le b,\ f(u) \le y \le f(v) \,\bigr\},$$ so $(a,b) \in X$. For $(u,v) \in X$ write $m := (u+v)/2$, which satisfies $a \le u \le m \le v \le b$ and so lies in $[a,b]$, and define $$F(u,v) \;:=\; \begin{cases} (u,\ m) & \text{if } f(m) \ge y,\\ (m,\ v) & \text{if } f(m) < y. \end{cases}$$ By trichotomy exactly one clause applies, so $F$ is a function on $X$; and $F(u,v) \in X$ in both clauses, since in the first $f(u) \le y \le f(m)$ and in the second $f(m) \le y \le f(v)$. **The left half is tested first and the right half is taken only when the left is excluded, so nothing is selected.** [L8, construct]

2.1 **The nested sequence.** By [L2] applied to $X$, the element $(a,b)$ and the map $F$, there is a unique $g : \mathbb{N} \to X$ with $g(0) = (a,b)$ and $g(k+1) = F(g(k))$. Write $g(k) = (a_k,b_k)$ and $I_k := [a_k,b_k]$. Then for every $k$: $a \le a_k \le b_k \le b$ and $f(a_k) \le y \le f(b_k)$, because $g(k) \in X$; and $I_{k+1} \subseteq I_k$, since in either clause of the definition of $F$ the new endpoints lie in $[a_k,b_k]$ and the new interval is $[a_k,m_k]$ or $[m_k,b_k]$ with $m_k = (a_k+b_k)/2$. [step 1.2, L2, L8]

3.1 **The lengths.** In both clauses the new length is $m_k - a_k = (b_k - a_k)/2$ or $b_k - m_k = (b_k - a_k)/2$, so $b_{k+1} - a_{k+1} = (b_k - a_k)/2$; with $b_0 - a_0 = b - a$ an induction on $k$ gives $b_k - a_k = (b-a)\,(2^{-1})^{k}$ for every $k \in \mathbb{N}$, that is $(b-a)/2^{k}$ by [L5]. Since $|2^{-1}| < 1$, [L4] gives $(2^{-1})^{k} \to 0$ and hence $b_k - a_k \to 0$. [step 2.1, L4, L5, L8]

4.1 **The point.** By [L3] applied to the nested family $(I_k)$, whose lengths tend to $0$ by step 3.1, the intersection $\bigcap_k I_k$ is a single point; call it $c$. Then $c \in I_0 = [a,b]$ and $a_k \le c \le b_k$ for every $k$. [step 2.1, step 3.1, L3, construct]

5.1 **The endpoints converge to $c$.** Let a rational $\varepsilon > 0$ be given. By step 3.1 there is $K$ with $b_k - a_k < \varepsilon$ for all $k \ge K$. For such $k$, from $a_k \le c \le b_k$ we get $-(b_k - a_k) \le a_k - c \le 0$ and $0 \le b_k - c \le b_k - a_k$, so $|a_k - c| \le b_k - a_k < \varepsilon$ and $|b_k - c| \le b_k - a_k < \varepsilon$ by [L8]. Hence $a_k \to c$ and $b_k \to c$. [step 3.1, step 4.1, L8]

6.1 **Passing to the limit.** The point $c$ lies in $[a,b]$, so $f$ is continuous at $c$, and [L6] applied to the two sequences of step 5.1 gives $f(a_k) \to f(c)$ and $f(b_k) \to f(c)$. [step 4.1, step 5.1, L6]

7.1 By step 2.1, $f(a_k) \le y$ for every $k$; the constant sequence with value $y$ converges to $y$ by [L4], so [L7] gives $f(c) \le y$. Likewise $y \le f(b_k)$ for every $k$ gives $y \le f(c)$. Hence $f(c) = y$. [step 2.1, step 6.1, L4, L7, L8]

8.1 A point $c \in [a,b]$ with $f(c) = y$ has therefore been constructed, under the reduction of step 1.1 and hence in both cases of the hypothesis. [step 1.1, step 4.1, step 7.1, discharge-construct: c is the unique point of the nested intersection] ∎

## Remarks

- **Why the left half is tested first.** The bisection has to choose one of two halves at every stage, and if the rule were "choose a half in which the sign change persists" the construction would be a dependent choice, not a recursion. Testing $f(m) \ge y$ and taking the left half in that case makes the successor a function of its predecessor, so [[thm-recursion]] applies verbatim. The same device is used in [[thm-perfect-set-uncountable-r]] and in the bisection proof of Heine-Borel.

- **What the theorem does *not* say.** It does not say that $c$ is unique, and it does not say that the set of solutions is an interval; $f$ may take the value $y$ on a complicated set. It also does not say that a function with the intermediate value property is continuous — that converse is false, and the witness for it needs machinery that is not available at this point in the reading order.

- **Only the choice-free direction of the sequential criterion is used.** Step 6.1 turns a convergent sequence into a convergent image sequence, which is the implication proved in ZF ([[thm-sequential-criterion-for-continuity]]); the converse, which spends countable choice, is never invoked here.
````

