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

- critical risk (16): 15 declared dependencies; 13 cited facts; 16 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`

Normalized current SHA-256: `7b40a311c2f338cfedf59eac6ae31619aae83db78fe4d737eb17bd76abaa3a9c`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set
kind: theorem
title: "Under dependent choice a space is perfectly normal if and only if it is normal and every closed set is a zero set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-urysohn-lemma, lem-a-uniformly-approximable-real-valued-map-is-continuous,
       def-completely-normal-and-perfectly-normal-spaces, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-normal-and-t4-spaces,
       def-dependent-choice, def-countable-choice, def-series, thm-geometric-series,
       def-continuous-map-top, thm-continuity-characterisations-top, lem-of-abs-value,
       lem-of-sequence-basics, thm-nonnegative-series-bounded-partial-sums]
justified_by: []
aliases: []
landmark: true
short: "perfectly normal iff normal + closed sets are zero sets (DC)"
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
    - title: "Perfectly normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space#Perfectly_normal_spaces_and_completely_normal_spaces"
    - title: "J. Munkres, Topology, 2nd ed., §33, Exercise 6"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space. Then $X$ is perfectly normal
([[def-completely-normal-and-perfectly-normal-spaces]]) if and only if $X$ is
normal ([[def-normal-and-t4-spaces]]) and every closed subset of $X$ is a zero
set ([[def-zero-sets-and-cozero-sets]]).

**Only the forward direction spends a choice principle beyond the dependent
choice already inside Urysohn's lemma.** Producing a Urysohn function for
every level of a countable presentation $C = \bigcap_n U_n$, all at once, is in
form an application of the Axiom of Countable Choice ([[def-countable-choice]]);
the argument below performs it as a direct instance of dependent choice itself,
using a relation that does not depend on the previous term, so no hypothesis
beyond DC is added and none is hidden. The converse direction uses no choice
principle at all.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice; for the forward direction, $X$ perfectly normal; for the converse, $X$ normal with every closed subset a zero set.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$, and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0=a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[A2] $X$ is perfectly normal exactly when $X$ is normal and every closed subset of $X$ is a $G_\delta$ ([[def-completely-normal-and-perfectly-normal-spaces]]).

[L1] $A \subseteq X$ is a $G_\delta$ set when $A = \bigcap_{n \in \mathbb{N}} V_n$ for some open sets $V_n$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[L2] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$ and $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] For continuous $k : X \to \mathbb{R}$, $Z(k) := k^{-1}(\{0\})$; every zero set is closed and a $G_\delta$ ([[def-zero-sets-and-cozero-sets]]).

[L4] The geometric series: $\sum_{k \ge 0} r^k = 1/(1-r)$ for real $|r|<1$ ([[thm-geometric-series]]); in particular $\sum_{k=0}^{\infty} 2^{-(k+1)} = \tfrac12 \sum_{k=0}^{\infty} 2^{-k} = \tfrac12 \cdot \dfrac{1}{1-\frac12} = 1$, a convergent series of positive reals ([[def-series]]).

[L5] The $M$-test: if $(g_n)$ are continuous real-valued functions on $X$, $(M_n)$ nonnegative reals with $|g_n(x)| \le M_n$ for every $x$ and $n$, and $\sum M_n$ converges, then $\sum g_n(x)$ converges for every $x \in X$ and $F := \sum_n g_n$ is continuous on $X$ ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]], second clause).

[L6] Scalar multiple of a continuous map is continuous: for continuous $h : X \to \mathbb{R}$ and real $c > 0$, $x \mapsto c\, h(x)$ is continuous — given $x_0 \in X$ and real $\varepsilon>0$, continuity of $h$ at $x_0$ with tolerance $\varepsilon/c$ gives open $U \ni x_0$ with $|h(x)-h(x_0)| < \varepsilon/c$ on $U$, whence $|c\,h(x) - c\,h(x_0)| = c\,|h(x)-h(x_0)| < \varepsilon$ on $U$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[lem-of-abs-value]]).

[L7] Limits in $\mathbb{R}$ preserve non-strict order: if $a_k \to a$ and $a_k \ge c$ for all $k$ beyond some index, then $a \ge c$ ([[lem-of-sequence-basics]]).

[L8] For a series of nonnegative terms, the partial sums are nondecreasing ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is perfectly normal. [assume-hyp]

1.2 Assume instead that $X$ is normal and every closed subset of $X$ is a zero set. [assume-hyp]

2.1 Under step 1.1: by [A2], $X$ is normal and every closed subset of $X$ is a $G_\delta$; in particular $X$ is normal. [step 1.1, A2]

2.2 Under step 1.2: let $C \subseteq X$ be closed; by hypothesis $C$ is a zero set, hence $G_\delta$ by [L3]. Since $C$ was arbitrary, every closed subset of $X$ is $G_\delta$; with $X$ normal by hypothesis, $X$ is perfectly normal by [A2]. [step 1.2, L3, A2]

3.1 Under step 1.1: let $C \subseteq X$ be closed; by step 2.1, $C$ is $G_\delta$, so by [L1] fix open sets $(U_n)_{n \in \mathbb{N}}$ with $C = \bigcap_{n} U_n$. [step 2.1, L1, choose]

4.1 Under step 1.1: put $P := \{\, (n,h) : n \in \mathbb{N},\ h : X \to [0,1] \text{ continuous},\ C \subseteq h^{-1}(\{0\}),\ X \setminus U_n \subseteq h^{-1}(\{1\}) \,\}$, and for $(n,h), (n',h') \in P$ say $(n,h) \mathbin{R} (n',h')$ when $n'=n+1$. Since $C \subseteq U_0$ (step 3.1), $C$ and $X \setminus U_0$ are disjoint closed sets ($X \setminus U_0$ closed, $U_0$ being open); by [L2] and step 2.1, fix $h_0$ with $(0,h_0) \in P$. [step 2.1, step 3.1, L2, choose, construct]

4.2 Under step 1.1: for every $(n,h) \in P$: $C \subseteq U_{n+1}$ (step 3.1), so $C$ and $X \setminus U_{n+1}$ are disjoint closed sets; by [L2] and step 2.1 there is $h'$ with $(n+1,h') \in P$, so $(n,h) \mathbin{R} (n+1,h')$. Hence $R$ is entire on $P$. [step 2.1, step 3.1, L2, choose]

5.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 4.2; by [A1] applied with $a := (0,h_0)$, there is a sequence $\big((m_k,H_k)\big)_{k \in \mathbb{N}}$ with $(m_0,H_0) = (0,h_0)$ and $(m_k,H_k) \mathbin{R} (m_{k+1},H_{k+1})$ for every $k$. As $(n,h) \mathbin{R} (n',h')$ forces $n'=n+1$, induction gives $m_k = k$ for every $k$; so $H_k : X \to [0,1]$ is continuous with $C \subseteq H_k^{-1}(\{0\})$ and $X \setminus U_k \subseteq H_k^{-1}(\{1\})$, for every $k \in \mathbb{N}$. [step 4.1, step 4.2, A1, construct]

6.1 Under step 1.1: for $k \in \mathbb{N}$ put $g_k := 2^{-(k+1)} H_k$; by [L6] each $g_k$ is continuous, and $|g_k(x)| = 2^{-(k+1)} H_k(x) \le 2^{-(k+1)} =: M_k$ for every $x \in X$, since $H_k(x) \in [0,1]$; and $\sum M_k$ converges by [L4]. [step 5.1, L4, L6, construct]

7.1 Under step 1.1: by [L5] applied to $(g_k)$ and $(M_k)$ of step 6.1: for every $x \in X$ the series $\sum g_k(x)$ converges, and $f := \sum_{k=0}^{\infty} g_k$ is a continuous map $X \to \mathbb{R}$. [step 6.1, L5, construct]

7.2 Under step 1.1: for $x \notin C$: since $C = \bigcap_n U_n$ (step 3.1), there is a natural $m$ with $x \notin U_m$, so $x \in X \setminus U_m \subseteq H_m^{-1}(\{1\})$ (step 5.1), giving $H_m(x)=1$ and $g_m(x) = 2^{-(m+1)}$. [step 3.1, step 5.1, step 6.1, choose]

8.1 Under step 1.1: for $x \in C$: $H_k(x) = 0$ for every $k$ (step 5.1), so $g_k(x)=0$ for every $k$ (step 6.1), and $f(x) = \sum_k 0 = 0$. [step 5.1, step 6.1, step 7.1]

8.2 Under step 1.1, continuing from step 7.2: every term $g_k(x) \ge 0$, since $H_k(x) \in [0,1]$; so by [L8] the partial sums $s_N(x) := \sum_{k<N} g_k(x)$ satisfy $s_N(x) \ge g_m(x) = 2^{-(m+1)}$ for every $N > m$, and $s_N(x) \to f(x)$ by step 7.1; so [L7] gives $f(x) \ge 2^{-(m+1)} > 0$. [step 7.2, step 7.1, L7, L8]

9.1 Under step 1.1: steps 8.1 and 8.2 give $f(x)=0$ for $x \in C$ and $f(x) \ne 0$ for $x \notin C$, so $C = f^{-1}(\{0\}) = Z(f)$, a zero set by [L3]. Since $C$ was an arbitrary closed subset of $X$, every closed subset of $X$ is a zero set. [step 8.1, step 8.2, L3]

10.1 Steps 2.1 and 9.1 show that, under the hypothesis of step 1.1, $X$ is normal and every closed subset of $X$ is a zero set. [step 2.1, step 9.1]

11.1 Steps 10.1 and 2.2 establish the two directions of the stated equivalence. [step 10.1, step 2.2, discharge-construct] ∎

## Remarks

- **The construction of step 4.1–5.1 is exactly the standard proof that dependent choice implies countable choice**, specialised to the family of admissible Urysohn functions at each level: the relation $R$ never looks at the first coordinate's function, only at its index, so any admissible successor is accepted. This is why the theorem needs no hypothesis beyond DC, even though the step it performs — choosing one function per natural number, all at once — is the shape of $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

- **The series $\sum 2^{-(k+1)} H_k$, not $\sum 2^{-k} H_k$, is what starts at value $1$.** Indexing from $k=0$ with weight $2^{-(k+1)}$ makes the total weight exactly $1$ and keeps every weight strictly positive, which is what step 8.2 needs to conclude $f(x) > 0$ off $C$ from a single nonzero term.

- **The converse costs nothing beyond what is already on the separation-axioms page.** "Every zero set is a $G_\delta$" is proved as part of [[def-zero-sets-and-cozero-sets]]; step 2.2 only specialises it to the closed sets that the hypothesis already promises are zero sets.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Normal_space"
  ],
  "rationale": "The source states the zero-set characterization of perfect normality; the library adds explicit DC/countable-choice accounting and its own series proof.",
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
      "fact": "A1",
      "source": "def-dependent-choice",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and let $R \\subseteq X \\times X$ be a binary relation on $X$.\nCall $R$ **entire on $X$** when\n\n$$\\text{for every } x \\in X \\text{ there is } y \\in X \\text{ with } x \\mathbin{R} y .$$\n\nThe **Axiom of Dependent Choice**, written $\\mathrm{DC}$, is the following\nstatement.\n\n> For every nonempty set $X$, every relation $R$ entire on $X$, and every\n> $a \\in X$, there is a sequence $x : \\mathbb{N} \\to X$ ([[def-sequence]],\n> [[def-natural-numbers]]) with\n> $$x_0 = a \\qquad \\text{and} \\qquad x_n \\mathbin{R} x_{n+1} \\ \\text{ for every } n \\in \\mathbb{N}.$$\n\nAs everywhere in this library $\\mathbb{N}$ contains $0$, and the sequence is\nindexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every\nlater term is related to its predecessor.\n\n**What DC adds to what came before.** [[def-choice-function]] and\n[[def-axiom-of-choice]] select one element from each member of a family that is\nfixed in advance, and [[def-countable-choice]] does the same for a family indexed\nby $\\mathbb{N}$. In both, the family is given before any selection is made. DC is\nthe principle needed when the $n$-th set to select from is not known until the\nfirst $n$ selections have been made: here the admissible values of $x_{n+1}$ are\nexactly the $R$-successors of $x_n$, so the family being chosen from is built\nalong the choosing. That is precisely the situation $\\mathrm{AC}_\\omega$ does not\ncover, and it is why a construction \"pick $x_{n+1}$ depending on $x_n$, for every\n$n$ at once\" is not licensed by countable choice.\n\n**The starting point may be dropped.** The formally weaker statement obtained by\ndeleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there\nis a sequence with $x_n \\mathbin{R} x_{n+1}$ for all $n$ — is an immediate\nconsequence of the form above, since $X$ is nonempty and any of its elements may\nbe taken as $a$. The reverse derivation is standard and is not needed anywhere in\nthis library, so it is not carried out; every use below prescribes $x_0$.\n\n**$R$ need not be an order and the terms need not be distinct.** What DC delivers\nis a sequence, that is a function $\\mathbb{N} \\to X$, not a chain in the\norder-theoretic sense ([[def-chain]]). The relation may be symmetric, and the\nsequence may repeat a value or be constant; all that is asserted is\n$x_n \\mathbin{R} x_{n+1}$ at every index.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-completely-normal-and-perfectly-normal-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **completely normal** when any two **separated** sets can be put into\n  disjoint open sets: for all $A, B \\subseteq X$ that are separated\n  ([[def-separated-sets]]) there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n  $X$ is **$T_5$** when it is completely normal and $T_1$\n  ([[def-t0-and-t1-spaces]]).\n- $X$ is **perfectly normal** when $X$ is normal ([[def-normal-and-t4-spaces]])\n  **and** every closed subset of $X$ is a $G_\\delta$\n  ([[def-g-delta-and-f-sigma-in-a-topological-space]]). $X$ is **$T_6$** when it\n  is perfectly normal and $T_1$.\n\nAs with *regular* and *normal*, neither adjective carries a $T_1$ hypothesis in\nthis library, and the numerals name the conjunctions.\n\n**The $G_\\delta$ condition, restated by complementation.** Every closed subset of\n$X$ is a $G_\\delta$ if and only if every open subset of $X$ is an $F_\\sigma$,\nbecause complementation exchanges the two classes and exchanges open with closed\n([[def-g-delta-and-f-sigma-in-a-topological-space]]). Both forms are used below,\nand the second is the one the implication $T_6 \\Rightarrow T_5$ consumes.\n\n**Complete normality really is stronger than normality, on its face.** Disjoint\nclosed sets are separated ([[def-separated-sets]]), so the complete-normality\ncondition applies in particular to them; that is the whole proof of the next\nitem. What complete normality adds is the ability to separate sets that are not\nclosed, for instance the two sets $(0,1)$ and $(1,2)$ of $\\mathbb{R}$, which are\nseparated and neither of which is closed.\n\n**A competing definition of *perfectly normal*, and why this library does not\nuse it.** Some texts define a perfectly normal space to be a normal space in\nwhich every closed set is a **zero set** ([[def-zero-sets-and-cozero-sets]]).\nThat condition is equivalent to the one above, but the equivalence rests on\nUrysohn's lemma, which is not available at this point in the reading order; the\n$G_\\delta$ form is therefore the definition here, and no statement on this page\nasserts the equivalence. What *is* proved here is one direction in the metric\ncase, where the distance function exhibits every closed set simultaneously as a\nzero set and as a $G_\\delta$.",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-g-delta-and-f-sigma-in-a-topological-space",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$A \\subseteq X$.\n\n- $A$ is a **$G_\\delta$ set of $X$** when there is a sequence\n  $(V_n)_{n \\in \\mathbb{N}}$ of open subsets of $X$ with\n  $$A \\;=\\; \\bigcap_{n \\in \\mathbb{N}} V_n .$$\n- $A$ is an **$F_\\sigma$ set of $X$** when there is a sequence\n  $(F_n)_{n \\in \\mathbb{N}}$ of closed subsets of $X$ with\n  $$A \\;=\\; \\bigcup_{n \\in \\mathbb{N}} F_n .$$\n\nAs everywhere in this library $\\mathbb{N}$ contains $0$, so both indexings start\nat $0$. An at most countable *family* may always be presented as a sequence\n([[def-countable]]): a finite list $V_0, \\dots, V_m$ is extended by $V_n := V_m$\nfor $n > m$, which changes neither the intersection nor the union, so nothing is\nlost by indexing over $\\mathbb{N}$.\n\n**The two classes are exchanged by complementation.** $A$ is $F_\\sigma$ in $X$ if\nand only if $X \\setminus A$ is $G_\\delta$ in $X$. If $A = \\bigcup_n F_n$ with\neach $F_n$ closed then $X \\setminus A = \\bigcap_n (X \\setminus F_n)$ by De Morgan\nand each $X \\setminus F_n$ is open ([[def-topological-space]]); the converse is\nthe same computation read backwards.\n\n**Every open set is $G_\\delta$ and every closed set is $F_\\sigma$**, by the\nconstant sequence $V_n := A$, respectively $F_n := A$. **Neither converse\nholds**, and $\\mathbb{R}$ with its usual topology already refutes both. The\nsingleton $\\{0\\}$ is a $G_\\delta$ that is **not open**: it is\n$\\bigcap_{n \\in \\mathbb{N}} (-1/(n+1),\\ 1/(n+1))$, since $0$ lies in every one of\nthose intervals while a real $t \\ne 0$ is excluded at some index, the\nArchimedean property giving a natural $k \\ge 1$ with $1/k < |t|$ and $k$ being a\nsuccessor $n+1$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]],\n[[def-canonical-natural]]); and $\\{0\\}$ is not open because every bounded open\ninterval $(a,b)$ with $a < 0 < b$ contains the point $b/2 \\ne 0$\n([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,\n$\\mathbb{R} \\setminus \\{0\\}$ is an $F_\\sigma$ that is **not closed**, its\ncomplement $\\{0\\}$ not being open.\n\n**The condition that is a real restriction is the other pairing**, namely that\nevery **closed** set be a $G_\\delta$, equivalently that every **open** set be an\n$F_\\sigma$. That is not automatic in an arbitrary space, and it is exactly the\nsecond conjunct of perfect normality later on this page. It must not be confused\nwith the two automatic inclusions above: they hold everywhere and say nothing\nabout a space.\n\n**Agreement with the real-line notion, stated because a second notion of the\nsame name would be a defect.** [[def-f-sigma-g-delta]] defines $F_\\sigma$ and\n$G_\\delta$ subsets of $\\mathbb{R}$ by the same two displayed conditions, with\n\"open\" and \"closed\" read in the sense of [[def-open-and-closed-in-r]]. Those two\nwords name the same two collections of subsets of $\\mathbb{R}$ as the usual\ntopology of $\\mathbb{R}$ does, and the verification is one line of unfolding.\n[[def-open-and-closed-in-r]] calls $U$ open when every $x \\in U$ admits\n$\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$, where\n$N_\\varepsilon(x) = (x - \\varepsilon,\\ x + \\varepsilon)$\n([[def-neighbourhood-r]]); [[def-metric-topology]] calls $U$ open in\n$(\\mathbb{R}, d_{\\mathbb{R}})$ when every $x \\in U$ admits $r > 0$ with\n$B(x,r) \\subseteq U$, and $B(x,r) = (x-r,\\ x+r)$ by claim 2 of\n[[lem-real-line-is-a-metric-space]]. The two conditions are therefore the same\ncondition word for word, so the two collections of open subsets of $\\mathbb{R}$\nare one collection, and hence so are the two collections of closed subsets, each\nbeing the complements of the other collection. The usual topology of $\\mathbb{R}$\nis the metric topology of $d_{\\mathbb{R}}$ ([[def-metrizable-space]]). Since the\ntwo definitions quantify over one collection of open sets and one collection of\nclosed sets, a subset of $\\mathbb{R}$ is $G_\\delta$ in the sense above, for\n$\\mathbb{R}$ with its usual topology, if and only if it is $G_\\delta$ in the\nsense of [[def-f-sigma-g-delta]]; and likewise for $F_\\sigma$. **There is one\nnotion here, not two**, and every statement proved about $F_\\sigma$ or $G_\\delta$\nsubsets of $\\mathbb{R}$ elsewhere in this library may be quoted verbatim as a\nstatement about the topological space $\\mathbb{R}$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-urysohn-lemma",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let\n$(X, \\mathcal{T})$ be a topological space.\n\n1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \\subseteq X$ are\n   disjoint closed sets, there is a continuous $f : X \\to [0,1]$\n   ([[def-continuous-map-top]], [[def-interval]]) with\n   $A \\subseteq f^{-1}(\\{0\\})$ and $B \\subseteq f^{-1}(\\{1\\})$.\n2. Conversely, if every pair of disjoint closed subsets of $X$ admits a\n   continuous function into $[0,1]$ separating them in the sense of clause 1,\n   then $X$ is normal. **This direction uses no choice principle.**\n\n**Where the choice principle of clause 1 is spent, and why not less.** The\nconstruction below builds, for each $n \\in \\mathbb{N}$, an assignment of an\nopen set to every dyadic rational of level $n$, extending the level-$(n-1)$\nassignment; at each single level the finitely many new open sets are chosen at\nonce by [[lem-finite-choice]], a theorem of ZF, but stringing together\ninfinitely many such levels, each depending on the one before, is exactly the\nsituation dependent choice is for. The published\n[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that\n$\\mathrm{ZF}$ and even $\\mathrm{ZF}$ together with the Axiom of Countable\nChoice do not suffice, and that dependent choice does; nothing here claims\ndependent choice is *necessary* for clause 1, only that the construction given\nis carried out in $\\mathrm{ZF} + \\mathrm{DC}$.",
      "uses": [
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-zero-sets-and-cozero-sets",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$\\mathbb{R}$ carry its usual topology, the metric topology of\n$d_{\\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],\n[[def-metrizable-space]]). For a continuous $f : X \\to \\mathbb{R}$\n([[def-continuous-map-top]]) put\n\n$$Z(f) \\;:=\\; f^{-1}[\\{0\\}] \\;=\\; \\{\\, x \\in X : f(x) = 0 \\,\\}, \\qquad \\operatorname{coz}(f) \\;:=\\; X \\setminus Z(f) \\;=\\; \\{\\, x \\in X : f(x) \\ne 0 \\,\\} .$$\n\n$Z(f)$ is the **zero set** of $f$ and $\\operatorname{coz}(f)$ its **cozero set**.\nA subset of $X$ is *a zero set of $X$* when it is $Z(f)$ for some continuous\n$f : X \\to \\mathbb{R}$, and *a cozero set of $X$* when it is the complement of\none. Where the target is written $[0,1]$ ([[def-interval]]) with its subspace\ntopology ([[def-subspace-topology-top]]), a continuous map $X \\to [0,1]$ is the\nsame thing as a continuous map $X \\to \\mathbb{R}$ with all values in $[0,1]$, by\nthe characteristic property of a map into a subspace recorded in\n[[def-subspace-topology-top]]; so nothing below depends on which of the two\ntargets is written.\n\n**Every zero set is closed and every cozero set is open.** $\\{0\\}$ is closed in\n$\\mathbb{R}$: its complement $\\mathbb{R} \\setminus \\{0\\}$ is open, since a point\n$t \\ne 0$ has the bounded open interval $(t - |t|,\\ t + |t|)$ around it inside\n$\\mathbb{R} \\setminus \\{0\\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],\nclaim 3). The preimage of a closed set under a continuous map is closed\n([[thm-continuity-characterisations-top]], clause (c)).\n\n**Every zero set is a $G_\\delta$ and every cozero set an $F_\\sigma$**\n([[def-g-delta-and-f-sigma-in-a-topological-space]]). Writing $\\iota$ for the\ncanonical natural of $\\mathbb{R}$ ([[def-canonical-natural]]), so that $1/(n+1)$\nabbreviates the inverse of $\\iota(n+1)$, put\n\n$$V_n \\;:=\\; f^{-1}\\big[\\,(-1/(n+1),\\ 1/(n+1))\\,\\big] \\qquad (n \\in \\mathbb{N}).$$\n\nEach $V_n$ is open, being the preimage of an open interval\n([[thm-continuity-characterisations-top]], clause (b)). Clearly\n$Z(f) \\subseteq \\bigcap_n V_n$. Conversely, if $f(x) \\ne 0$ then\n$\\varepsilon := |f(x)| > 0$, and [[cor-archimedean-reciprocal]] gives a natural\n$k \\ge 1$ with $1/k < \\varepsilon$; since $k \\ne 0$ it is a successor,\n$k = n+1$ with $n \\in \\mathbb{N}$ ([[lem-nat-nonzero-is-successor]]), so\n$|f(x)| > 1/(n+1)$ and $x \\notin V_n$. Hence $Z(f) = \\bigcap_{n} V_n$ is a\n$G_\\delta$, and $\\operatorname{coz}(f)$ is an $F_\\sigma$ by complementation.\n\n**Both extremes occur.** The constant maps are continuous, since the preimage of\nany set under a constant map is $\\varnothing$ or $X$\n([[thm-continuity-characterisations-top]], clause (b)); so $X = Z(0)$ and\n$\\varnothing = Z(1)$ are zero sets of every space, where $0$ and $1$ denote the\ncorresponding constant maps.",
      "uses": [
        "2.2",
        "9.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),\nso that $r^0 = 1$ for every $r$, including $r = 0$.\n\n1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and\n   $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$\n2. If $|r| \\ge 1$ then $\\sum r^k$ diverges.\n\nThe series starts at $k = 0$ and its first term is $r^0 = 1$; in particular\n$\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to\n$1$. Which starting index is meant has to be said, and it is said here.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and\na **sequence of reals** is a function $a : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), written $(a_k)$; recall that $\\mathbb{N}$ contains $0$.\n\n**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial\nsums** is\n\n$$s_n \\;:=\\; \\sum_{k < n} a_k \\qquad (n \\in \\mathbb{N}),$$\n\nthe finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and\n$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses\nthat define the finite sum. Note that $s_n$ is the sum of the $n$ terms\n$a_0, \\dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last\none.\n\n**Convergence, the sum, divergence.** The **series** of $(a_k)$, written\n$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges\n([[def-real-limit]]), and then the **sum of the series** is\n\n$$\\sum_{k=0}^{\\infty} a_k \\;:=\\; \\lim_{n} s_n .$$\n\nThe series **diverges** when $(s_n)$ does not converge. A convergent sequence of\nreals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names\na single real number and nothing further has to be checked for it to be\nwell defined.\n\n**Series with a general starting index.** Let $m \\in \\mathbb{N}$ and let $a$ be a\nfunction on $\\{\\, k \\in \\mathbb{N} : k \\ge m \\,\\}$, which we call a **family from\n$m$** and write $(a_k)_{k \\ge m}$. The series\n\n$$\\sum_{k \\ge m} a_k$$\n\nis by definition the series of the sequence $b_j := a_{j + m}$,\n$j \\in \\mathbb{N}$, which is a genuine sequence of reals; it converges exactly\nwhen that series converges, and its sum is then written\n$\\sum_{k = m}^{\\infty} a_k$. Its partial sums are\n\n$$\\sum_{k=m}^{n-1} a_k \\;=\\; \\sum_{j < n-m} a_{m+j} \\qquad (n \\ge m),$$\n\nin the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum\n$0$. A sequence on $\\mathbb{N}$ is the case $m = 0$, and the two readings of\n$\\sum a_k$ agree there, since $b_j = a_j$.\n\n**This clause is not a convenience.** Sequences in this library are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the\nclassical series are built from expressions that are undefined at the index $0$:\n$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \\ge 1$. Writing such a series as\n$\\sum_{k \\ge 1} a_k$ names an honest object, whereas writing it as a sequence on\n$\\mathbb{N}$ would require a value at an index where the defining expression has\nnone. Every statement on this page says which starting index it uses.\n\n**Tail series.** For $N \\in \\mathbb{N}$, the **$N$-th tail series** of\n$\\sum a_k$ is $\\sum_{k \\ge N} a_k$, that is the series of the $N$-th tail\n$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The\n$0$-th tail series is the series itself.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$f : X \\to \\mathbb{R}$. If for every real $\\varepsilon > 0$ there is a\ncontinuous $g_\\varepsilon : X \\to \\mathbb{R}$ ([[def-continuous-map-top]]) with\n\n$$|f(x) - g_\\varepsilon(x)| < \\varepsilon \\qquad \\text{for every } x \\in X,$$\n\nthen $f$ is continuous.\n\n**In particular**, if $(g_n)_{n \\in \\mathbb{N}}$ are continuous real-valued\nfunctions on $X$ and $(M_n)_{n \\in \\mathbb{N}}$ are nonnegative reals with\n$|g_n(x)| \\le M_n$ for every $x \\in X$ and every $n$, and the series\n$\\sum M_n$ converges ([[def-series]]), then for every $x \\in X$ the series\n$\\sum g_n(x)$ converges, and\n\n$$F(x) \\;:=\\; \\sum_{n=0}^{\\infty} g_n(x)$$\n\ndefines a continuous function $F$ on $X$.",
      "uses": [
        "7.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-continuous-map-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T}_X)$ and $(Y, \\mathcal{T}_Y)$ be topological spaces\n([[def-topological-space]]), let $f : X \\to Y$ be a function and let $x \\in X$.\nNeighbourhoods are as in [[def-neighbourhood-top]].\n\n$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the\npreimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.\n\n$f$ is **continuous** if it is continuous at every point of $X$.\n\n**The same condition with open sets only.** $f$ is continuous at $x$ if and only\nif for every open $V \\subseteq Y$ with $f(x) \\in V$ there is an open\n$U \\subseteq X$ with $x \\in U$ and $f[U] \\subseteq V$. Indeed, if $f$ is\ncontinuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of\n$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \\ni x$,\nwhich satisfies $f[U] \\subseteq V$. Conversely, given the displayed condition and\na neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \\in V_0 \\subseteq V$ and\nthen open $U \\ni x$ with $f[U] \\subseteq V_0$; then $x \\in U \\subseteq f^{-1}[V_0] \\subseteq f^{-1}[V]$,\nso $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the\nsame statement written twice.\n\n**Preimage, not image.** $f^{-1}[V] = \\{\\, x \\in X : f(x) \\in V \\,\\}$\nis the preimage in the sense of [[def-injection-surjection-bijection]] and is\ndefined for every function, invertible or not; no inverse function is being\nasserted to exist. Continuity is a condition on preimages throughout, and the\ncorresponding conditions on images define the *open* and *closed* maps of a later\nitem, which are different notions.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-continuity-characterisations-top",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T}_X)$ and $(Y, \\mathcal{T}_Y)$ be topological spaces, let\n$f : X \\to Y$ be a function, and let $\\mathcal{S}$ be a subbasis for\n$\\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions\nare equivalent.\n\n- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).\n- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$.\n- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \\subseteq Y$.\n- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \\in \\mathcal{S}$.\n- **(e)** $f[\\overline{A}] \\subseteq \\overline{f[A]}$ for every $A \\subseteq X$,\n  closures being taken in $X$ and in $Y$ respectively\n  ([[def-interior-closure-boundary-top]]).\n\nCondition (d) is what makes continuity checkable against a generating family\nrather than against every open set, and it holds for a *basis* as well, a basis\nbeing in particular a subbasis for the topology it generates.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-sequence-basics",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $(x_k)$, $(y_k)$ be\nsequences in $F$, with convergence in $F$, Cauchyness in $F$, boundedness and\nsubsequences as in [[def-sequences-in-an-ordered-field]]. Then:\n\n1. **Limits are unique.** If $x_k \\to L$ and $x_k \\to L'$ in $F$, then $L = L'$.\n   A convergent sequence therefore has exactly one limit in $F$ and the notation\n   $\\lim_k x_k$ denotes it unambiguously. This is the licence under which the\n   remaining clauses are written as equations between limits, and it is not new\n   here: [[def-sequences-in-an-ordered-field]] already establishes it, in an\n   arbitrary ordered field and with no completeness or Archimedean hypothesis.\n   It is restated as clause 1 so that this lemma is self-contained as the\n   citation target of the whole abstract chain on this page.\n2. **Limits preserve non-strict inequalities.** If $(x_k)$ and $(y_k)$ both\n   converge in $F$ and $x_k \\le y_k$ for every $k$, then\n\n   $$\\lim_k x_k \\;\\le\\; \\lim_k y_k .$$\n\n3. **Convergent implies Cauchy.** If $(x_k)$ converges in $F$, it is Cauchy in\n   $F$.\n4. **Cauchy implies bounded.** If $(x_k)$ is Cauchy in $F$, it is bounded.\n5. **A Cauchy sequence with a convergent subsequence converges.** If $(x_k)$ is\n   Cauchy in $F$ and some subsequence $(x_{n_j})$ converges in $F$, then $(x_k)$\n   converges in $F$ as well, and\n\n   $$\\lim_k x_k \\;=\\; \\lim_j x_{n_j} .$$\n\n   Both sides are asserted to exist: the right-hand side by hypothesis, the\n   left-hand side as part of the conclusion.\n\n**Why this is a separate item.** Each of the five is proved in this library for\nsequences of *reals*, and none of those proofs may be cited here.\n[[rem-sequence-conventions]] is explicit about it: a theorem about sequences of\nreals is a theorem about $\\mathbb{R}$, and the fact that its argument would\ntransfer to an arbitrary ordered field is a statement about the argument, not a\nlicence to cite the result. The five are collected here, proved from the ordered\nfield axioms alone, so that the completeness equivalences of this page have one\nplace to cite instead of five inline reconstructions.",
      "uses": [
        "8.2"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$,\nlet $s_n = \\sum_{k<n} a_k$ be its partial sums and let\n$S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]).\nThen:\n\n1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every\n   $n$;\n2. $\\sum a_k$ converges **if and only if** $S$ is bounded above\n   ([[def-bounded-set]]), and in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$\n   so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$;\n3. if $S$ is not bounded above then $s_n \\to +\\infty$\n   ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges.\n\nThis is the theorem that makes the nonnegative theory work: for terms of one\nsign, convergence is a boundedness question and no candidate limit is ever\nneeded. Every comparison test on this page is an application of it.",
      "uses": [
        "8.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Assume $X$ is perfectly normal. [assume-hyp]",
      "step": "1.1",
      "inputs": [
        "assume-hyp"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Assume instead that $X$ is normal and every closed subset of $X$ is a zero set. [assume-hyp]",
      "step": "1.2",
      "inputs": [
        "assume-hyp"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Under step 1.1: by [A2], $X$ is normal and every closed subset of $X$ is a $G_\\delta$; in particular $X$ is normal. [step 1.1, A2]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "A2",
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Under step 1.2: let $C \\subseteq X$ be closed; by hypothesis $C$ is a zero set, hence $G_\\delta$ by [L3]. Since $C$ was arbitrary, every closed subset of $X$ is $G_\\delta$; with $X$ normal by hypothesis, $X$ is perfectly normal by [A2]. [step 1.2, L3, A2]",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "L3",
        "A2",
        "1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Under step 1.1: let $C \\subseteq X$ be closed; by step 2.1, $C$ is $G_\\delta$, so by [L1] fix open sets $(U_n)_{n \\in \\mathbb{N}}$ with $C = \\bigcap_{n} U_n$. [step 2.1, L1, choose]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L1",
        "choose",
        "1.1",
        "2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Under step 1.1: put $P := \\{\\, (n,h) : n \\in \\mathbb{N},\\ h : X \\to [0,1] \\text{ continuous},\\ C \\subseteq h^{-1}(\\{0\\}),\\ X \\setminus U_n \\subseteq h^{-1}(\\{1\\}) \\,\\}$, and for $(n,h), (n',h') \\in P$ say $(n,h) \\mathbin{R} (n',h')$ when $n'=n+1$. Since $C \\subseteq U_0$ (step 3.1), $C$ and $X \\setminus U_0$ are disjoint closed sets ($X \\setminus U_0$ closed, $U_0$ being open); by [L2] and step 2.1, fix $h_0$ with $(0,h_0) \\in P$. [step 2.1, step 3.1, L2, choose, construct]",
      "step": "4.1",
      "inputs": [
        "step 2.1",
        "step 3.1",
        "L2",
        "choose",
        "construct",
        "1.1",
        "3.1",
        "2.1"
      ]
    },
    {
      "id": "step-4.2",
      "claim": "Under step 1.1: for every $(n,h) \\in P$: $C \\subseteq U_{n+1}$ (step 3.1), so $C$ and $X \\setminus U_{n+1}$ are disjoint closed sets; by [L2] and step 2.1 there is $h'$ with $(n+1,h') \\in P$, so $(n,h) \\mathbin{R} (n+1,h')$. Hence $R$ is entire on $P$. [step 2.1, step 3.1, L2, choose]",
      "step": "4.2",
      "inputs": [
        "step 2.1",
        "step 3.1",
        "L2",
        "choose",
        "1.1",
        "3.1",
        "2.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 4.2; by [A1] applied with $a := (0,h_0)$, there is a sequence $\\big((m_k,H_k)\\big)_{k \\in \\mathbb{N}}$ with $(m_0,H_0) = (0,h_0)$ and $(m_k,H_k) \\mathbin{R} (m_{k+1},H_{k+1})$ for every $k$. As $(n,h) \\mathbin{R} (n',h')$ forces $n'=n+1$, induction gives $m_k = k$ for every $k$; so $H_k : X \\to [0,1]$ is continuous with $C \\subseteq H_k^{-1}(\\{0\\})$ and $X \\setminus U_k \\subseteq H_k^{-1}(\\{1\\})$, for every $k \\in \\mathbb{N}$. [step 4.1, step 4.2, A1, construct]",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "step 4.2",
        "A1",
        "construct",
        "1.1",
        "4.1",
        "4.2"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Under step 1.1: for $k \\in \\mathbb{N}$ put $g_k := 2^{-(k+1)} H_k$; by [L6] each $g_k$ is continuous, and $|g_k(x)| = 2^{-(k+1)} H_k(x) \\le 2^{-(k+1)} =: M_k$ for every $x \\in X$, since $H_k(x) \\in [0,1]$; and $\\sum M_k$ converges by [L4]. [step 5.1, L4, L6, construct]",
      "step": "6.1",
      "inputs": [
        "step 5.1",
        "L4",
        "L6",
        "construct",
        "1.1",
        "5.1"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "Under step 1.1: by [L5] applied to $(g_k)$ and $(M_k)$ of step 6.1: for every $x \\in X$ the series $\\sum g_k(x)$ converges, and $f := \\sum_{k=0}^{\\infty} g_k$ is a continuous map $X \\to \\mathbb{R}$. [step 6.1, L5, construct]",
      "step": "7.1",
      "inputs": [
        "step 6.1",
        "L5",
        "construct",
        "1.1",
        "6.1"
      ]
    },
    {
      "id": "step-7.2",
      "claim": "Under step 1.1: for $x \\notin C$: since $C = \\bigcap_n U_n$ (step 3.1), there is a natural $m$ with $x \\notin U_m$, so $x \\in X \\setminus U_m \\subseteq H_m^{-1}(\\{1\\})$ (step 5.1), giving $H_m(x)=1$ and $g_m(x) = 2^{-(m+1)}$. [step 3.1, step 5.1, step 6.1, choose]",
      "step": "7.2",
      "inputs": [
        "step 3.1",
        "step 5.1",
        "step 6.1",
        "choose",
        "1.1",
        "3.1",
        "5.1",
        "6.1"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "Under step 1.1: for $x \\in C$: $H_k(x) = 0$ for every $k$ (step 5.1), so $g_k(x)=0$ for every $k$ (step 6.1), and $f(x) = \\sum_k 0 = 0$. [step 5.1, step 6.1, step 7.1]",
      "step": "8.1",
      "inputs": [
        "step 5.1",
        "step 6.1",
        "step 7.1",
        "1.1",
        "5.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "id": "step-8.2",
      "claim": "Under step 1.1, continuing from step 7.2: every term $g_k(x) \\ge 0$, since $H_k(x) \\in [0,1]$; so by [L8] the partial sums $s_N(x) := \\sum_{k<N} g_k(x)$ satisfy $s_N(x) \\ge g_m(x) = 2^{-(m+1)}$ for every $N > m$, and $s_N(x) \\to f(x)$ by step 7.1; so [L7] gives $f(x) \\ge 2^{-(m+1)} > 0$. [step 7.2, step 7.1, L7, L8]",
      "step": "8.2",
      "inputs": [
        "step 7.2",
        "step 7.1",
        "L7",
        "L8",
        "1.1",
        "7.2",
        "7.1"
      ]
    },
    {
      "id": "step-9.1",
      "claim": "Under step 1.1: steps 8.1 and 8.2 give $f(x)=0$ for $x \\in C$ and $f(x) \\ne 0$ for $x \\notin C$, so $C = f^{-1}(\\{0\\}) = Z(f)$, a zero set by [L3]. Since $C$ was an arbitrary closed subset of $X$, every closed subset of $X$ is a zero set. [step 8.1, step 8.2, L3]",
      "step": "9.1",
      "inputs": [
        "step 8.1",
        "step 8.2",
        "L3",
        "1.1",
        "8.1",
        "8.2"
      ]
    },
    {
      "id": "step-10.1",
      "claim": "Steps 2.1 and 9.1 show that, under the hypothesis of step 1.1, $X$ is normal and every closed subset of $X$ is a zero set. [step 2.1, step 9.1]",
      "step": "10.1",
      "inputs": [
        "step 2.1",
        "step 9.1",
        "2.1",
        "9.1",
        "1.1"
      ]
    },
    {
      "id": "step-11.1",
      "claim": "Steps 10.1 and 2.2 establish the two directions of the stated equivalence. [step 10.1, step 2.2, discharge-construct] ∎",
      "step": "11.1",
      "inputs": [
        "step 10.1",
        "step 2.2",
        "discharge-construct",
        "10.1",
        "2.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 5.1: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.2: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 2.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 4.1: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 3.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "statement: the forward implication was followed through its numbered proof steps and its hypotheses were not reversed"
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "statement: the reverse implication was followed independently through its numbered proof steps"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-urysohn-lemma",
    "declared_target": "thm-urysohn-lemma",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "declared_target": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-completely-normal-and-perfectly-normal-spaces",
    "declared_target": "def-completely-normal-and-perfectly-normal-spaces",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-zero-sets-and-cozero-sets",
    "declared_target": "def-zero-sets-and-cozero-sets",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-g-delta-and-f-sigma-in-a-topological-space",
    "declared_target": "def-g-delta-and-f-sigma-in-a-topological-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "cross-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "cross-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-continuity-characterisations-top",
    "declared_target": "thm-continuity-characterisations-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-of-sequence-basics",
    "declared_target": "lem-of-sequence-basics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "cross-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "cross-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (15)

### `def-completely-normal-and-perfectly-normal-spaces`

````markdown
---
id: def-completely-normal-and-perfectly-normal-spaces
kind: definition
title: "Completely normal ($T_5$) and perfectly normal ($T_6$) spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-and-t4-spaces, def-separated-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-zero-sets-and-cozero-sets,
       def-t0-and-t1-spaces, def-topological-space]
justified_by: []
aliases: [def-completely-normal-space, def-perfectly-normal-space, def-t5-space, def-t6-space]
landmark: true
short: "completely normal, perfectly normal"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **completely normal** when any two **separated** sets can be put into
  disjoint open sets: for all $A, B \subseteq X$ that are separated
  ([[def-separated-sets]]) there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
  $X$ is **$T_5$** when it is completely normal and $T_1$
  ([[def-t0-and-t1-spaces]]).
- $X$ is **perfectly normal** when $X$ is normal ([[def-normal-and-t4-spaces]])
  **and** every closed subset of $X$ is a $G_\delta$
  ([[def-g-delta-and-f-sigma-in-a-topological-space]]). $X$ is **$T_6$** when it
  is perfectly normal and $T_1$.

As with *regular* and *normal*, neither adjective carries a $T_1$ hypothesis in
this library, and the numerals name the conjunctions.

**The $G_\delta$ condition, restated by complementation.** Every closed subset of
$X$ is a $G_\delta$ if and only if every open subset of $X$ is an $F_\sigma$,
because complementation exchanges the two classes and exchanges open with closed
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Both forms are used below,
and the second is the one the implication $T_6 \Rightarrow T_5$ consumes.

**Complete normality really is stronger than normality, on its face.** Disjoint
closed sets are separated ([[def-separated-sets]]), so the complete-normality
condition applies in particular to them; that is the whole proof of the next
item. What complete normality adds is the ability to separate sets that are not
closed, for instance the two sets $(0,1)$ and $(1,2)$ of $\mathbb{R}$, which are
separated and neither of which is closed.

**A competing definition of *perfectly normal*, and why this library does not
use it.** Some texts define a perfectly normal space to be a normal space in
which every closed set is a **zero set** ([[def-zero-sets-and-cozero-sets]]).
That condition is equivalent to the one above, but the equivalence rests on
Urysohn's lemma, which is not available at this point in the reading order; the
$G_\delta$ form is therefore the definition here, and no statement on this page
asserts the equivalence. What *is* proved here is one direction in the metric
case, where the distance function exhibits every closed set simultaneously as a
zero set and as a $G_\delta$.

## Remarks

- **Both axioms are about pairs of sets, not about points.** Neither implies
  $T_0$: the indiscrete topology on a two-point set is completely normal and
  perfectly normal, since its only separated pairs have an empty member and its
  only closed sets are open, and it is not $T_0$. That is why the numerals $T_5$
  and $T_6$ include $T_1$.

- **A frequently quoted equivalent of complete normality is not proved here.** A
  space is completely normal exactly when every subspace of it is normal, which
  is why *hereditarily normal* is the other common name. This page defines and
  uses only the separated-sets form; the hereditary characterisation belongs to a
  later page, and nothing here depends on it.

- **The chain at the top.** Perfectly normal implies completely normal, which
  implies normal; the second implication is immediate and the first is a real
  theorem, proved two items below.
````

### `def-continuous-map-top`

````markdown
---
id: def-continuous-map-top
kind: definition
title: "Continuity of a map of topological spaces at a point and globally"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
aliases: [def-continuity-top]
landmark: true
short: "continuous map of spaces"
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
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

## Remarks

- **This is the metric definition when both topologies are metric topologies.**
  For metric spaces, $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, and the balls around a point are a neighbourhood
  base there; the identification is carried out where metrizable spaces are
  defined later on this page. Nothing about a metric survives in the definition
  above: continuity is a relation between two topologies and a function, and it
  is meaningless to ask whether a function between bare sets is continuous.

- **Continuity depends on both topologies, and coarsening the target or refining
  the source only helps.** If $f$ is continuous and $\mathcal{T}_X$ is replaced
  by a finer topology, or $\mathcal{T}_Y$ by a coarser one, $f$ remains
  continuous, since each condition to be verified is weakened and each
  neighbourhood available in the source is still available. In particular every
  map out of a discrete space and every map into an indiscrete space is
  continuous ([[def-standard-topologies]]).

- **Continuity at a point is strictly weaker than continuity.** A function may be
  continuous at exactly one point, and the definition above is deliberately local
  so that the sequential criteria proved later can be stated pointwise.
````

### `def-countable-choice`

````markdown
---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
external_refs: [rem-feferman-levy-model, rem-cohen-first-model]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **$\mathrm{AC}_\omega$ is strictly weaker than the Axiom of Choice**
  ([[def-axiom-of-choice]]): AC implies it immediately, since AC applies to every
  family, while it is consistent with ZF that $\mathrm{AC}_\omega$ holds and AC
  fails. **It is also strictly stronger than what ZF proves**: it is consistent
  with ZF that $\mathrm{AC}_\omega$ fails, as Cohen's first model shows, since an
  infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]) is already a failure of $\mathrm{AC}_\omega$; the
  Feferman-Levy model ([[rem-feferman-levy-model]]) is a second witness. Both
  statements are conditional on the consistency of ZF and are external results,
  established by forcing and by permutation models; they are recorded here with
  references and are **not** proved in this library, which contains neither
  technique. Of the two, only the failure of $\mathrm{AC}_\omega$ is recorded in
  this library's catalogue of unproved results; the separation of
  $\mathrm{AC}_\omega$ from AC in the other direction is quoted from the
  references alone.

- **Dependent choice sits between them.** The Axiom of Dependent Choice
  (DC) says that if $R$ is a relation on a nonempty set $X$ such that every
  $x \in X$ has some $y$ with $x \mathbin{R} y$, then there is a sequence
  $(x_n)_{n \in \mathbb{N}}$ with $x_n \mathbin{R} x_{n+1}$ for all $n$. In ZF,
  $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$; both
  implications are theorems of ZF, and neither is proved here. That neither
  reverses is a pair of relative-consistency results of the same kind as in the
  previous bullet: if ZF is consistent, then so are ZF + DC + (not AC) and
  ZF + $\mathrm{AC}_\omega$ + (not DC). Both are established by forcing and by
  permutation models, are quoted here from the references rather than proved, and
  cannot be stated without the consistency hypothesis; so "DC is *strictly*
  between AC and $\mathrm{AC}_\omega$" is shorthand for those two conditional
  statements and is never used here as a standalone assertion. DC is the
  principle that legitimises "choose $x_0$, then choose $x_1$ depending on
  $x_0$, and so on"; $\mathrm{AC}_\omega$ only legitimises countably many
  *independent* choices made at once.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the exact
  step that spends it, and [[fs-countable-union-theorem-of-zf]] records that the
  assumption cannot be removed.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so. The false
  statements at the end of the page are not all of that kind, and the claim above
  does not cover them: two of the three refute a ZF-provability claim only under
  the hypothesis that ZF is consistent, quoting an external independence result
  rather than proving it, and they say so in their own Facts.
````

### `def-dependent-choice`

````markdown
---
id: def-dependent-choice
kind: definition
title: "The axiom of dependent choice: a relation in which every element is related to something admits an $\\mathbb{N}$-indexed chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable-choice, def-sequence, def-natural-numbers]
justified_by: []
aliases: [def-dc]
landmark: true
short: "dependent choice (DC)"
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
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a sequence $x : \mathbb{N} \to X$ ([[def-sequence]],
> [[def-natural-numbers]]) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** [[def-choice-function]] and
[[def-axiom-of-choice]] select one element from each member of a family that is
fixed in advance, and [[def-countable-choice]] does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense ([[def-chain]]). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

## Remarks

**Where DC sits among the choice principles.** It is a standard fact, proved in
the references and **not** in this library, that

$$\mathrm{AC} \;\Longrightarrow\; \mathrm{DC} \;\Longrightarrow\; \mathrm{AC}_\omega ,$$

and that neither implication reverses. The non-reversals are relative-consistency
results: what they establish is that ZF, if consistent, does not prove the
missing implications, never that those implications are false. This library
contains neither forcing nor permutation models and proves no independence
result, so all of that is quoted from the references and used nowhere.

**Nothing in this library proves DC, and nothing assumes it silently.** Like
[[def-axiom-of-choice]] and [[def-countable-choice]], DC is a statement that may
be assumed or not. Every theorem whose proof uses it says so in its own
statement, and the accounting for the compactness page is collected in
[[rem-compactness-choice-ledger-metric]].

**An upper bound, never a lower one.** When a later item records that its proof
uses DC, the claim made is that the argument given here is carried out in
$\mathrm{ZF} + \mathrm{DC}$. No item claims that DC is *necessary* for the
statement proved, because establishing necessity means separating the statement
from ZF, and that is an independence result of exactly the kind this library does
not prove.
````

### `def-g-delta-and-f-sigma-in-a-topological-space`

````markdown
---
id: def-g-delta-and-f-sigma-in-a-topological-space
kind: definition
title: "$G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-countable, def-f-sigma-g-delta,
       def-metrizable-space, def-open-and-closed-in-r, def-neighbourhood-r,
       def-metric-topology, lem-real-line-is-a-metric-space, def-interval,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-g-delta-top, def-f-sigma-top]
landmark: true
short: "$G_\\delta$ and $F_\\sigma$ in a space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F%CF%83_set"
    - title: "J. Munkres, Topology, 2nd ed., §30"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$A \subseteq X$.

- $A$ is a **$G_\delta$ set of $X$** when there is a sequence
  $(V_n)_{n \in \mathbb{N}}$ of open subsets of $X$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$
- $A$ is an **$F_\sigma$ set of $X$** when there is a sequence
  $(F_n)_{n \in \mathbb{N}}$ of closed subsets of $X$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$

As everywhere in this library $\mathbb{N}$ contains $0$, so both indexings start
at $0$. An at most countable *family* may always be presented as a sequence
([[def-countable]]): a finite list $V_0, \dots, V_m$ is extended by $V_n := V_m$
for $n > m$, which changes neither the intersection nor the union, so nothing is
lost by indexing over $\mathbb{N}$.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ in $X$ if
and only if $X \setminus A$ is $G_\delta$ in $X$. If $A = \bigcup_n F_n$ with
each $F_n$ closed then $X \setminus A = \bigcap_n (X \setminus F_n)$ by De Morgan
and each $X \setminus F_n$ is open ([[def-topological-space]]); the converse is
the same computation read backwards.

**Every open set is $G_\delta$ and every closed set is $F_\sigma$**, by the
constant sequence $V_n := A$, respectively $F_n := A$. **Neither converse
holds**, and $\mathbb{R}$ with its usual topology already refutes both. The
singleton $\{0\}$ is a $G_\delta$ that is **not open**: it is
$\bigcap_{n \in \mathbb{N}} (-1/(n+1),\ 1/(n+1))$, since $0$ lies in every one of
those intervals while a real $t \ne 0$ is excluded at some index, the
Archimedean property giving a natural $k \ge 1$ with $1/k < |t|$ and $k$ being a
successor $n+1$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]],
[[def-canonical-natural]]); and $\{0\}$ is not open because every bounded open
interval $(a,b)$ with $a < 0 < b$ contains the point $b/2 \ne 0$
([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,
$\mathbb{R} \setminus \{0\}$ is an $F_\sigma$ that is **not closed**, its
complement $\{0\}$ not being open.

**The condition that is a real restriction is the other pairing**, namely that
every **closed** set be a $G_\delta$, equivalently that every **open** set be an
$F_\sigma$. That is not automatic in an arbitrary space, and it is exactly the
second conjunct of perfect normality later on this page. It must not be confused
with the two automatic inclusions above: they hold everywhere and say nothing
about a space.

**Agreement with the real-line notion, stated because a second notion of the
same name would be a defect.** [[def-f-sigma-g-delta]] defines $F_\sigma$ and
$G_\delta$ subsets of $\mathbb{R}$ by the same two displayed conditions, with
"open" and "closed" read in the sense of [[def-open-and-closed-in-r]]. Those two
words name the same two collections of subsets of $\mathbb{R}$ as the usual
topology of $\mathbb{R}$ does, and the verification is one line of unfolding.
[[def-open-and-closed-in-r]] calls $U$ open when every $x \in U$ admits
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, where
$N_\varepsilon(x) = (x - \varepsilon,\ x + \varepsilon)$
([[def-neighbourhood-r]]); [[def-metric-topology]] calls $U$ open in
$(\mathbb{R}, d_{\mathbb{R}})$ when every $x \in U$ admits $r > 0$ with
$B(x,r) \subseteq U$, and $B(x,r) = (x-r,\ x+r)$ by claim 2 of
[[lem-real-line-is-a-metric-space]]. The two conditions are therefore the same
condition word for word, so the two collections of open subsets of $\mathbb{R}$
are one collection, and hence so are the two collections of closed subsets, each
being the complements of the other collection. The usual topology of $\mathbb{R}$
is the metric topology of $d_{\mathbb{R}}$ ([[def-metrizable-space]]). Since the
two definitions quantify over one collection of open sets and one collection of
closed sets, a subset of $\mathbb{R}$ is $G_\delta$ in the sense above, for
$\mathbb{R}$ with its usual topology, if and only if it is $G_\delta$ in the
sense of [[def-f-sigma-g-delta]]; and likewise for $F_\sigma$. **There is one
notion here, not two**, and every statement proved about $F_\sigma$ or $G_\delta$
subsets of $\mathbb{R}$ elsewhere in this library may be quoted verbatim as a
statement about the topological space $\mathbb{R}$.

## Remarks

- **The letters.** $F$ for *ferme* with $\sigma$ for *somme*, $G$ for *Gebiet*
  with $\delta$ for *Durchschnitt*, as [[def-f-sigma-g-delta]] records.

- **Neither class is closed under complementation**, which is why both names are
  needed; and neither is a topology, an arbitrary union of $G_\delta$ sets being
  no longer $G_\delta$ in general. What is true, and all that is used on this
  page, is the complementation duality above together with the fact that a finite
  intersection of $G_\delta$ sets and a finite union of $F_\sigma$ sets stay in
  their class, by rearranging a finite array of sequences.

- **In a metric space every closed set is $G_\delta$.** That is proved later on
  this page from the distance function, and it is the reason every metrizable
  space is perfectly normal. In a general space it can fail, so it is a genuine
  hypothesis and not a convenience.
````

### `def-normal-and-t4-spaces`

````markdown
---
id: def-normal-and-t4-spaces
kind: definition
title: "Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-separated-sets,
       def-standard-topologies, def-neighbourhood-top]
justified_by: []
aliases: [def-normal-space, def-t4-space]
landmark: true
short: "normal space, $T_4$ space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

## Remarks

- **Normality does not imply regularity**, and the failure is witnessed by
  Sierpinski space on the companion page, which is normal and not regular.
  Whether *regularity* implies normality is a question this page leaves open: any
  witness reachable from the material here would need cardinal arithmetic or the
  hereditary behaviour of regularity. This page's own prerequisites still supply
  neither: cardinal arithmetic and cofinality is now built, but *below* this
  one, and nothing here draws on it; the hereditary and productive behaviour of
  the separation axioms is developed later in the reading order. So nothing above
  asserts an answer and no false statement asserting
  one is planted here ([[rem-separation-axiom-conventions]]).

- **Normality is the axiom that behaves worst**, and the companion page shows
  one symptom: the deleted Tychonoff plank, a subspace of a product of two
  ordinal spaces each of which is $T_3$, is Hausdorff and not normal. Whether
  normality is inherited by subspaces or preserved by products is a question this
  page does not answer, and nothing here asserts an answer; the plank is
  presented only as a Hausdorff space that fails normality.

- **What the definition does *not* say.** It says nothing about separating a
  point from a closed set, because a point need not be closed; that is the
  content of the $T_1$ hypothesis in $T_4$, and the theorem two items below is
  where it is spent.
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

### `def-zero-sets-and-cozero-sets`

````markdown
---
id: def-zero-sets-and-cozero-sets
kind: definition
title: "Zero sets and cozero sets of continuous real-valued functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-continuous-map-top, thm-continuity-characterisations-top,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-interval,
       def-subspace-topology-top, def-g-delta-and-f-sigma-in-a-topological-space,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-zero-set-top, def-cozero-set-top]
landmark: false
short: "zero set, cozero set"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Zero set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_set"
    - title: "Cozero set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cozero_set"
    - title: "L. Gillman and M. Jerison, Rings of Continuous Functions, Ch. 1"
      url: "https://link.springer.com/book/10.1007/978-1-4615-7819-2"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathbb{R}$ carry its usual topology, the metric topology of
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]). For a continuous $f : X \to \mathbb{R}$
([[def-continuous-map-top]]) put

$$Z(f) \;:=\; f^{-1}[\{0\}] \;=\; \{\, x \in X : f(x) = 0 \,\}, \qquad \operatorname{coz}(f) \;:=\; X \setminus Z(f) \;=\; \{\, x \in X : f(x) \ne 0 \,\} .$$

$Z(f)$ is the **zero set** of $f$ and $\operatorname{coz}(f)$ its **cozero set**.
A subset of $X$ is *a zero set of $X$* when it is $Z(f)$ for some continuous
$f : X \to \mathbb{R}$, and *a cozero set of $X$* when it is the complement of
one. Where the target is written $[0,1]$ ([[def-interval]]) with its subspace
topology ([[def-subspace-topology-top]]), a continuous map $X \to [0,1]$ is the
same thing as a continuous map $X \to \mathbb{R}$ with all values in $[0,1]$, by
the characteristic property of a map into a subspace recorded in
[[def-subspace-topology-top]]; so nothing below depends on which of the two
targets is written.

**Every zero set is closed and every cozero set is open.** $\{0\}$ is closed in
$\mathbb{R}$: its complement $\mathbb{R} \setminus \{0\}$ is open, since a point
$t \ne 0$ has the bounded open interval $(t - |t|,\ t + |t|)$ around it inside
$\mathbb{R} \setminus \{0\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],
claim 3). The preimage of a closed set under a continuous map is closed
([[thm-continuity-characterisations-top]], clause (c)).

**Every zero set is a $G_\delta$ and every cozero set an $F_\sigma$**
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Writing $\iota$ for the
canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), so that $1/(n+1)$
abbreviates the inverse of $\iota(n+1)$, put

$$V_n \;:=\; f^{-1}\big[\,(-1/(n+1),\ 1/(n+1))\,\big] \qquad (n \in \mathbb{N}).$$

Each $V_n$ is open, being the preimage of an open interval
([[thm-continuity-characterisations-top]], clause (b)). Clearly
$Z(f) \subseteq \bigcap_n V_n$. Conversely, if $f(x) \ne 0$ then
$\varepsilon := |f(x)| > 0$, and [[cor-archimedean-reciprocal]] gives a natural
$k \ge 1$ with $1/k < \varepsilon$; since $k \ne 0$ it is a successor,
$k = n+1$ with $n \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]), so
$|f(x)| > 1/(n+1)$ and $x \notin V_n$. Hence $Z(f) = \bigcap_{n} V_n$ is a
$G_\delta$, and $\operatorname{coz}(f)$ is an $F_\sigma$ by complementation.

**Both extremes occur.** The constant maps are continuous, since the preimage of
any set under a constant map is $\varnothing$ or $X$
([[thm-continuity-characterisations-top]], clause (b)); so $X = Z(0)$ and
$\varnothing = Z(1)$ are zero sets of every space, where $0$ and $1$ denote the
corresponding constant maps.

## Remarks

- **A closed set need not be a zero set, and no witness for that is exhibited
  here.** The zero sets of $X$ are exactly the closed sets that a continuous
  real-valued function can see, and a space may have very few continuous
  real-valued functions: in the indiscrete topology on a set with at least two
  points, every continuous map to $\mathbb{R}$ is constant, because a nonconstant
  one would pull back two disjoint intervals to two disjoint nonempty open sets.
  So the only zero sets there are $\varnothing$ and $X$ — which in that space is
  also all of the closed sets and all of the $G_\delta$ sets, the only open sets
  being $\varnothing$ and $X$. That space therefore illustrates the scarcity of
  continuous functions without separating the two classes; a space with a closed
  set that is not a zero set is not constructed on this page.

- **Where zero sets are used on this page.** They are the vocabulary of complete
  regularity: the defining function separating a point from a closed set $C$
  places $C$ inside a zero set and the point in the corresponding cozero set.
  They also give the sharp form of the metric case, where *every* closed set is a
  zero set.

- **The name.** $\operatorname{coz}$ is the standard notation in the theory of
  rings of continuous functions, where the zero sets of $X$ are the closed sets
  the ring can detect; nothing of that theory is used here.
````

### `lem-a-uniformly-approximable-real-valued-map-is-continuous`

````markdown
---
id: lem-a-uniformly-approximable-real-valued-map-is-continuous
kind: lemma
title: "If for every $\\varepsilon > 0$ some continuous $g : X \\to \\mathbb{R}$ satisfies $\\lvert f(x) - g(x)\\rvert < \\varepsilon$ for all $x$, then $f$ is continuous; in particular a uniformly convergent series of continuous real functions has a continuous sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-topological-space, def-continuous-map-top, thm-continuity-characterisations-top,
       def-topology-basis-subbasis, lem-real-line-is-a-metric-space, def-metrizable-space,
       def-metric-topology, def-series, thm-direct-comparison-test,
       lem-absolute-convergence-implies-convergence, def-ordered-field, lem-of-abs-value,
       lem-of-triangle-inequality, thm-nonnegative-series-bounded-partial-sums,
       lem-of-sequence-basics]
justified_by: []
aliases: [lem-uniform-limit-real-valued]
landmark: true
short: "uniform approximation by continuous functions"
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
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "Weierstrass M-test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Weierstrass_M-test"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$f : X \to \mathbb{R}$. If for every real $\varepsilon > 0$ there is a
continuous $g_\varepsilon : X \to \mathbb{R}$ ([[def-continuous-map-top]]) with

$$|f(x) - g_\varepsilon(x)| < \varepsilon \qquad \text{for every } x \in X,$$

then $f$ is continuous.

**In particular**, if $(g_n)_{n \in \mathbb{N}}$ are continuous real-valued
functions on $X$ and $(M_n)_{n \in \mathbb{N}}$ are nonnegative reals with
$|g_n(x)| \le M_n$ for every $x \in X$ and every $n$, and the series
$\sum M_n$ converges ([[def-series]]), then for every $x \in X$ the series
$\sum g_n(x)$ converges, and

$$F(x) \;:=\; \sum_{n=0}^{\infty} g_n(x)$$

defines a continuous function $F$ on $X$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and $f : X \to \mathbb{R}$ such that for every real $\varepsilon>0$ there is a continuous $g_\varepsilon : X \to \mathbb{R}$ with $|f(x)-g_\varepsilon(x)| < \varepsilon$ for every $x \in X$; and, for the second clause, continuous $g_n : X \to \mathbb{R}$ and nonnegative reals $M_n$, $n \in \mathbb{N}$, with $|g_n(x)| \le M_n$ for every $x \in X, n \in \mathbb{N}$, and $\sum M_n$ convergent.

[A1] The main hypothesis: for every real $\varepsilon>0$ there is continuous $g_\varepsilon$ with $|f(x)-g_\varepsilon(x)|<\varepsilon$ for all $x \in X$.

[L1] $f$ is continuous at $x_0$ iff for every open $V \subseteq \mathbb{R}$ with $f(x_0) \in V$ there is open $U \subseteq X$ with $x_0 \in U$ and $f[U] \subseteq V$ ([[def-continuous-map-top]]).

[L2] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b)).

[L3] The bounded open intervals $(a-r,a+r)$, $r>0$, are a basis for the usual topology of $\mathbb{R}$, so for open $V \ni y_0$ there is real $r>0$ with $(y_0-r,y_0+r) \subseteq V$ ([[lem-real-line-is-a-metric-space]], claim 2 and 3, [[def-metrizable-space]], [[def-metric-topology]], [[def-topology-basis-subbasis]]).

[L4] Triangle inequality: $|u+v| \le |u|+|v|$, hence $|u-w| \le |u-v|+|v-w|$ for reals $u,v,w$ ([[lem-of-triangle-inequality]]).

[L5] Absolute value: $|u|<c$ iff $-c<u<c$, for real $c>0$; and $-c \le u \le c$ iff $|u| \le c$, for real $c \ge 0$ ([[lem-of-abs-value]]).

[L6] Finite triangle inequality along a finite index set, iterating [L4]: $\big|\sum_{k} u_k\big| \le \sum_k |u_k|$ ([[lem-of-abs-value]], [[def-ordered-field]]).

[L7] Comparison and absolute convergence: if $0 \le a_k \le b_k$ eventually and $\sum b_k$ converges then $\sum a_k$ converges ([[thm-direct-comparison-test]]); if $\sum |a_k|$ converges then $\sum a_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L8] For a series of nonnegative terms, the partial sums are nondecreasing, bounded above by the sum when the series converges, and converge to the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L9] Limits in $\mathbb{R}$ preserve non-strict order: if $a_k \to a$ and $a_k \le c$ for all $k$ beyond some index, then $a \le c$ ([[lem-of-sequence-basics]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x_0 \in X$ and an open $V \subseteq \mathbb{R}$ with $f(x_0) \in V$; by [L3] fix a real $r>0$ with $(f(x_0)-r, f(x_0)+r) \subseteq V$. [given, L3, choose]

1.2 Let $g, h : X \to \mathbb{R}$ be continuous, let $x_1 \in X$ and let real $\eta>0$; arguing directly from continuity of $g$ and of $h$ at $x_1$ (via [L1] and [L2]) separately, fix open $U_1, U_2 \ni x_1$ with $|g(x)-g(x_1)| < \eta/2$ on $U_1$ and $|h(x)-h(x_1)|<\eta/2$ on $U_2$. [given, L1, L2, choose]

1.3 Fix $x \in X$. The real sequence $(g_n(x))_{n \in \mathbb{N}}$ satisfies $0 \le |g_n(x)| \le M_n$ for every $n$, and $\sum M_n$ converges by hypothesis, so [L7] gives that $\sum |g_n(x)|$ converges, and hence $\sum g_n(x)$ converges; define $F(x) := \sum_{n=0}^{\infty} g_n(x)$ and $s_N(x) := \sum_{n<N} g_n(x)$, so $s_N(x) \to F(x)$ as $N \to \infty$. [given, L7, construct]

1.4 Write $\sigma_N := \sum_{n<N} M_n$ and $S := \sum_{n=0}^{\infty} M_n$; since $M_n \ge 0$ for every $n$, [L8] gives that $(\sigma_N)$ is nondecreasing with $\sigma_N \le S$ for every $N$, and $\sigma_N \to S$. So $S - \sigma_N \ge 0$ for every $N$ and $S-\sigma_N \to 0$; given a real $\varepsilon>0$, fix $N \in \mathbb{N}$ with $S - \sigma_N < \varepsilon$. [given, L8, choose]

2.1 By [A1] applied with $\varepsilon := r/3 > 0$, fix a continuous $g : X \to \mathbb{R}$ with $|f(x)-g(x)| < r/3$ for every $x \in X$. [step 1.1, A1, choose]

2.2 $U_1 \cap U_2$ is open, contains $x_1$, and for $x \in U_1 \cap U_2$: $|(g+h)(x)-(g+h)(x_1)| \le |g(x)-g(x_1)| + |h(x)-h(x_1)| < \eta$ by [L4]. [step 1.2, L4, algebra]

2.3 For every $x \in X$ and every $K > N$: $|s_K(x)-s_N(x)| = \big|\textstyle\sum_{N \le n < K} g_n(x)\big| \le \sum_{N \le n < K} |g_n(x)| \le \sum_{N \le n < K} M_n = \sigma_K - \sigma_N \le S - \sigma_N$, by [L6], the hypothesis $|g_n(x)| \le M_n$, and $\sigma_K \le S$ from step 1.4. [step 1.4, step 1.3, L6, algebra]

3.1 $U := g^{-1}\big[(g(x_0)-r/3,\, g(x_0)+r/3)\big]$ is open by [L2], since $g$ is continuous by step 2.1, and $x_0 \in U$, since $|g(x_0)-g(x_0)| = 0 < r/3$. [step 2.1, L2]

3.2 Since $x_1 \in X$ and real $\eta>0$ were arbitrary, $g+h$ is continuous on $X$; iterating this over finitely many further sums, any finite sum $g_0+\cdots+g_{N-1}$ of continuous real-valued functions on $X$ is continuous, for every $N \ge 1$, with the case $N=0$ (the zero function) continuous as a constant. [step 2.2]

3.3 By step 2.3, $|s_K(x)-s_N(x)| \le S-\sigma_N$ for every $K > N$; as $K \to \infty$, $s_K(x) \to F(x)$ by step 1.3, so [L9] applied to the two non-strict bounds $-(S-\sigma_N) \le s_K(x)-s_N(x) \le S-\sigma_N$ (equivalent to step 2.3 by [L5]) gives $-(S-\sigma_N) \le F(x)-s_N(x) \le S-\sigma_N$, that is $|F(x)-s_N(x)| \le S-\sigma_N < \varepsilon$ by [L5] and step 1.4, for every $x \in X$, with $N$ independent of $x$. [step 2.3, step 1.4, step 1.3, L5, L9]

4.1 For $x \in U$: $|f(x)-f(x_0)| \le |f(x)-g(x)| + |g(x)-g(x_0)| + |g(x_0)-f(x_0)| < r/3+r/3+r/3 = r$, by [L4] (twice), step 2.1 (the first and third terms) and the defining property of $U$ (step 3.1, the middle term). [step 2.1, step 3.1, L4, algebra]

4.2 For $N \in \mathbb{N}$, $s_N = g_0 + \cdots + g_{N-1}$ is a finite sum of continuous functions, hence continuous on $X$, by step 3.2. [step 3.2]

5.1 By step 4.1, $f(x) \in (f(x_0)-r,f(x_0)+r) \subseteq V$ for every $x \in U$ (step 1.1), so $f[U] \subseteq V$; with $U$ open and $x_0 \in U$ (step 3.1), and $V$ an arbitrary open set containing $f(x_0)$ (step 1.1), $f$ is continuous at $x_0$ by [L1]. [step 4.1, step 3.1, step 1.1, L1]

6.1 Since $x_0 \in X$ was arbitrary, $f$ is continuous on $X$; this proves the main clause. [step 5.1]

7.1 Since $s_N$ is continuous by step 4.2 and real $\varepsilon>0$ was arbitrary, the hypothesis of the main clause (steps 1.1–6.1) is met by $F$, taking $g_\varepsilon := s_N$; hence $F$ is continuous on $X$. This, with step 1.3, proves the second clause. [step 3.3, step 4.2, step 6.1, discharge-construct] ∎

## Remarks

- **The $\varepsilon/3$ split is the whole mechanism**, and it is exactly the triangle inequality read three ways: once to compare $f$ with an approximant, once to use continuity of that approximant, and once to compare back. Nothing about $X$ is used beyond the definition of continuity; the hypothesis never mentions a metric on $X$, only on the common target $\mathbb{R}$.

- **The second clause is the Weierstrass $M$-test, stated only as far as this page needs it.** It is not stated for a general metric or normed target, and it produces no rate of convergence beyond what step 1.4 already gives: a single $N$, working uniformly in $x$, for every tolerance $\varepsilon$.

- **No choice principle beyond what a single real number requires is used anywhere above.** Steps 1.1, 2.1 and 1.4 each fix one witness from a nonempty set of reals or a single continuous function, and no step selects simultaneously from an infinite family.
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

### `lem-of-sequence-basics`

````markdown
---
id: lem-of-sequence-basics
kind: lemma
title: "Sequence basics in an arbitrary ordered field: limits are unique, limits preserve non-strict inequalities, convergent sequences are Cauchy, Cauchy sequences are bounded, and a Cauchy sequence with a convergent subsequence converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-sequence-conventions, def-sequences-in-an-ordered-field, def-ordered-field, lem-of-abs-value, lem-of-triangle-inequality, lem-of-add-order, lem-index-map-grows, lem-of-inverse-positive, lem-of-naturals-positive, cor-of-one-positive, thm-induction-principle, thm-nat-linear-order]
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.1 and §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $(x_k)$, $(y_k)$ be
sequences in $F$, with convergence in $F$, Cauchyness in $F$, boundedness and
subsequences as in [[def-sequences-in-an-ordered-field]]. Then:

1. **Limits are unique.** If $x_k \to L$ and $x_k \to L'$ in $F$, then $L = L'$.
   A convergent sequence therefore has exactly one limit in $F$ and the notation
   $\lim_k x_k$ denotes it unambiguously. This is the licence under which the
   remaining clauses are written as equations between limits, and it is not new
   here: [[def-sequences-in-an-ordered-field]] already establishes it, in an
   arbitrary ordered field and with no completeness or Archimedean hypothesis.
   It is restated as clause 1 so that this lemma is self-contained as the
   citation target of the whole abstract chain on this page.
2. **Limits preserve non-strict inequalities.** If $(x_k)$ and $(y_k)$ both
   converge in $F$ and $x_k \le y_k$ for every $k$, then

   $$\lim_k x_k \;\le\; \lim_k y_k .$$

3. **Convergent implies Cauchy.** If $(x_k)$ converges in $F$, it is Cauchy in
   $F$.
4. **Cauchy implies bounded.** If $(x_k)$ is Cauchy in $F$, it is bounded.
5. **A Cauchy sequence with a convergent subsequence converges.** If $(x_k)$ is
   Cauchy in $F$ and some subsequence $(x_{n_j})$ converges in $F$, then $(x_k)$
   converges in $F$ as well, and

   $$\lim_k x_k \;=\; \lim_j x_{n_j} .$$

   Both sides are asserted to exist: the right-hand side by hypothesis, the
   left-hand side as part of the conclusion.

**Why this is a separate item.** Each of the five is proved in this library for
sequences of *reals*, and none of those proofs may be cited here.
[[rem-sequence-conventions]] is explicit about it: a theorem about sequences of
reals is a theorem about $\mathbb{R}$, and the fact that its argument would
transfer to an arbitrary ordered field is a statement about the argument, not a
licence to cite the result. The five are collected here, proved from the ordered
field axioms alone, so that the completeness equivalences of this page have one
place to cite instead of five inline reconstructions.

## Facts & Assumptions

**Given:** An ordered field $F$ and sequences $(x_k)$, $(y_k)$ in $F$. Each of the five claims is proved under its own stated hypotheses; nothing is assumed of $(x_k)$ or $(y_k)$ outside the claim being proved.

[L1] Sequences in an ordered field: $(x_k)$ converges to $L$ in $F$ when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with $|x_k - L| < \varepsilon$ for all $k \ge N$; $(x_k)$ is Cauchy in $F$ when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge N$; $(x_k)$ is bounded when there is $M \in F$ with $|x_k| \le M$ for every $k$; and a subsequence of $(x_k)$ is a sequence $(x_{n_j})_{j \in \mathbb{N}}$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ ([[def-sequences-in-an-ordered-field]]).

[L2] Triangle inequality: $|u + v| \le |u| + |v|$ for $u, v \in F$ ([[lem-of-triangle-inequality]]).

[L3] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $u \le |u|$ ([[lem-of-abs-value]]).

[L4] Order in $F$: exactly one of $u < v$, $u = v$, $v < u$ holds, so the order is total, and both $<$ and $\le$ are transitive; adding a constant preserves the strict order and two strict inequalities may be added ([[lem-of-add-order]]); the nonstrict forms of those two, used below, are the strict forms together with the equality cases, which trichotomy settles ([[def-ordered-field]]).

[L5] Halving: $0 < 1_F$ ([[cor-of-one-positive]]), so $2 \cdot 1_F = 1_F + 1_F > 0$ ([[lem-of-naturals-positive]]) and $2 \cdot 1_F$ is nonzero, hence invertible with $(2 \cdot 1_F)^{-1} > 0$ ([[lem-of-inverse-positive]]). Writing $\varepsilon/2$ for $\varepsilon \cdot (2 \cdot 1_F)^{-1}$, an $\varepsilon > 0$ gives $\varepsilon/2 > 0$ and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[def-ordered-field]]).

[L6] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] Growth of an index map: a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]).

[L8] The order on $\mathbb{N}$ is total and transitive, so of any two indices one is $\ge$ the other, and every index $k$ satisfies $k \le N$ or $k \ge N$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 If $d \in F$ satisfies $d < \varepsilon$ for every $\varepsilon > 0$ in $F$, then $d \le 0$: were $d > 0$, the instance $\varepsilon = d$ would give $d < d$, which trichotomy forbids, so $d > 0$ fails and totality leaves $d \le 0$. [L4, algebra]

1.2 For every $\varepsilon > 0$ in $F$ one has $\varepsilon/2 > 0$ and $\varepsilon/2 + \varepsilon/2 = \varepsilon$. [L5]

1.3 **Claim 1.** Assume $x_k \to L$ and $x_k \to L'$, and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N_1$ with $|x_k - L| < \varepsilon/2$ for $k \ge N_1$, choose $N_2$ with $|x_k - L'| < \varepsilon/2$ for $k \ge N_2$, and let $N$ be whichever of $N_1, N_2$ is the larger. [L1, L8, choose]

1.4 **Claim 2.** Assume $x_k \to L$, $y_k \to M$ and $x_k \le y_k$ for every $k$, and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N_1$ with $|x_k - L| < \varepsilon/2$ for $k \ge N_1$, choose $N_2$ with $|y_k - M| < \varepsilon/2$ for $k \ge N_2$, and let $N$ be the larger of the two. [L1, L8, choose]

1.5 **Claim 3.** Assume $x_k \to L$ and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N$ with $|x_k - L| < \varepsilon/2$ for all $k \ge N$. [L1, choose]

1.6 **Claim 4.** For every $n \in \mathbb{N}$ there is $B \in F$ with $|x_j| \le B$ for all $j \le n$, by induction on $n$: for $n = 0$ take $B = |x_0|$; and given such a $B$ for $n$, totality of the order on $F$ gives either $|x_{n+1}| \le B$, in which case the same $B$ serves for $n + 1$, or $B < |x_{n+1}|$, in which case $|x_{n+1}|$ serves for $n+1$ by transitivity. [L1, L4, L6]

1.7 **Claim 4, continued.** Assume $(x_k)$ is Cauchy; since $1_F > 0$, choose $N$ with $|x_k - x_l| < 1_F$ for all $k, l \ge N$, so that for $k \ge N$ one has $|x_k| = |(x_k - x_N) + x_N| \le |x_k - x_N| + |x_N| < 1_F + |x_N|$. [L1, L2, L4, L5, choose]

1.8 **Claim 5.** Assume $(x_k)$ is Cauchy and $x_{n_j} \to L$ along a strictly increasing $n$, and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N_1$ with $|x_k - x_l| < \varepsilon/2$ for $k, l \ge N_1$, choose $N_2$ with $|x_{n_j} - L| < \varepsilon/2$ for $j \ge N_2$, and let $N$ be the larger of the two, so that $n_N \ge N \ge N_1$ and $N \ge N_2$. [L1, L7, L8, choose]

2.1 For every $k \ge N$ in the situation of step 1.3: $|L - L'| = |(L - x_k) + (x_k - L')| \le |L - x_k| + |x_k - L'| = |x_k - L| + |x_k - L'| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.2, step 1.3, L2, L3, L4]

2.2 For every $k \ge N$ in the situation of step 1.4: $L - M = (L - x_k) + (x_k - y_k) + (y_k - M)$, where $L - x_k \le |L - x_k| < \varepsilon/2$ and $y_k - M \le |y_k - M| < \varepsilon/2$ and $x_k - y_k \le 0$; adding, $L - M < \varepsilon$. [step 1.2, step 1.4, L3, L4]

2.3 For all $k, l \ge N$ in the situation of step 1.5: $|x_k - x_l| = |(x_k - L) + (L - x_l)| \le |x_k - L| + |x_l - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.2, step 1.5, L2, L3, L4]

2.4 In the situation of steps 1.6 and 1.7, let $B$ be a bound for $|x_j|$ over $j \le N$ and set $M := B + 1_F + |x_N|$; then $B \ge |x_0| \ge 0$ and $1_F + |x_N| > 0$, so $M \ge B$ and $M \ge 1_F + |x_N|$, whence $|x_k| \le B \le M$ for $k \le N$ and $|x_k| < 1_F + |x_N| \le M$ for $k \ge N$; as every index satisfies $k \le N$ or $k \ge N$, $(x_k)$ is bounded. [step 1.6, step 1.7, L1, L3, L4, L8]

2.5 For every $k \ge N$ in the situation of step 1.8: $|x_k - L| = |(x_k - x_{n_N}) + (x_{n_N} - L)| \le |x_k - x_{n_N}| + |x_{n_N} - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$, the first summand being covered because $k \ge N \ge N_1$ and $n_N \ge N_1$. [step 1.2, step 1.8, L2, L4]

3.1 By step 2.1 the element $|L - L'|$ is below every $\varepsilon > 0$, so $|L - L'| \le 0$; with $|L - L'| \ge 0$ this forces $|L - L'| = 0$ and hence $L = L'$, which is claim 1. [step 1.1, step 2.1, L3, L4]

3.2 By step 2.2 the element $L - M$ is below every $\varepsilon > 0$, so $L - M \le 0$, that is $L \le M$, which is claim 2. [step 1.1, step 2.2, L4]

3.3 Step 2.3 produced, for an arbitrary $\varepsilon > 0$, an $N$ beyond which all pairs are within $\varepsilon$, so $(x_k)$ is Cauchy in $F$, which is claim 3. [step 2.3, L1]

4.1 Step 2.5 produced, for an arbitrary $\varepsilon > 0$, an $N$ beyond which $|x_k - L| < \varepsilon$, so $(x_k)$ converges in $F$ with $x_k \to L$; since also $x_{n_j} \to L$, step 3.1 identifies both limits as $L$ and gives $\lim_k x_k = \lim_j x_{n_j}$, which is claim 5. [step 2.5, step 3.1, L1]

5.1 Claims 1, 2, 3, 4 and 5 are steps 3.1, 3.2, 3.3, 2.4 and 4.1 respectively, so all five hold. [step 2.4, step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

- **Nothing above uses the Archimedean property, and nothing above uses
  completeness.** The five claims hold in every ordered field, including
  $\mathbb{R}(t)$ and $\mathbb{R}((t^{-1}))$. That is what makes them safe to
  use on both sides of every implication proved on this page.

- **Claim 2 is genuinely non-strict.** From $x_k < y_k$ at every index one gets
  only $L \le M$: the sequences $x_k = 0$ and $y_k = \varepsilon/(k+1)$ in an
  Archimedean $F$ have $x_k < y_k$ and equal limits. The real-number version of
  this warning is recorded at [[lem-limit-preserves-order]].

- **There is deliberately no arithmetic clause here.** Nothing above lets one
  add, multiply or divide two limits in a general ordered field, and no item in
  this library does: [[thm-algebra-of-limits]] is stated for sequences of reals,
  and by the rule recalled above it may not be cited for a general $F$. No proof
  on this page needs such a clause; every abstract argument here works with the
  defining $\varepsilon$ and $N$ directly, or with clauses 1 to 5.

- **Claim 4 avoids any appeal to a maximum of a finite set.** The library's
  finite-maximum lemma [[lem-finite-set-has-max]] is stated for $\mathbb{R}$,
  so it is unavailable here for the same reason the other four real-valued
  lemmas are; step 1.6 replaces it by an induction that uses nothing but
  totality of the order of $F$.
````

### `thm-continuity-characterisations-top`

````markdown
---
id: thm-continuity-characterisations-top
kind: theorem
title: "For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-map-top, thm-closure-characterisation-top, def-topology-basis-subbasis, thm-basis-criterion, def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "five equivalent forms of continuity"
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
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

## Facts & Assumptions

**Given:** Topological spaces $(X,\mathcal{T}_X)$ and $(Y,\mathcal{T}_Y)$, a function $f : X \to Y$, a subbasis $\mathcal{S}$ for $\mathcal{T}_Y$, subsets $A \subseteq X$ and $V, F \subseteq Y$. Preimages satisfy $f^{-1}[Y \setminus W] = X \setminus f^{-1}[W]$, $f^{-1}[\bigcup_i W_i] = \bigcup_i f^{-1}[W_i]$ and $f^{-1}[\bigcap_i W_i] = \bigcap_i f^{-1}[W_i]$ for every family, with $f^{-1}[Y] = X$ for the empty intersection.

[A1] $f$ is continuous at $x$ when for every open $V \ni f(x)$ there is an open $U \ni x$ with $f[U] \subseteq V$ ([[def-continuous-map-top]]).

[A2] A set is closed exactly when its complement is open; a set is open exactly when it is a union of open sets containing each of its points ([[def-topological-space]]).

[L1] The topology generated by $\mathcal{S}$ has as a basis the family $\mathcal{B}_{\mathcal{S}}$ of intersections of finitely many members of $\mathcal{S}$, the empty intersection being $Y$; every open set is a union of members of $\mathcal{B}_{\mathcal{S}}$ ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] $x \in \overline{A}$ if and only if every open set containing $x$ meets $A$ ([[thm-closure-characterisation-top]], clause (c)).

[L3] $\overline{A}$ is the smallest closed superset of $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): let $V \subseteq Y$ be open and let $x \in f^{-1}[V]$, so $f(x) \in V$; continuity at $x$ gives an open $U \ni x$ with $f[U] \subseteq V$, that is $U \subseteq f^{-1}[V]$. As $x$ was arbitrary, $f^{-1}[V]$ is a union of open sets, hence open. [A1, A2]

1.2 (b) implies (a): let $x \in X$ and let $V$ be open with $f(x) \in V$; then $U := f^{-1}[V]$ is open, contains $x$, and satisfies $f[U] \subseteq V$. [A1]

1.3 (b) and (c) are equivalent: $F \subseteq Y$ is closed exactly when $Y \setminus F$ is open, and $f^{-1}[Y \setminus F] = X \setminus f^{-1}[F]$, so $f^{-1}[F]$ is closed exactly when $f^{-1}[Y \setminus F]$ is open; as $F$ ranges over the closed sets, $Y \setminus F$ ranges over the open sets. [given, A2]

1.4 (b) implies (d): every $S \in \mathcal{S}$ is open, $\mathcal{S}$ being contained in the topology it generates. [L1]

1.5 (d) implies (b): let $V \subseteq Y$ be open; by [L1] $V$ is a union of sets of the form $S_1 \cap \dots \cap S_n$ with $n \ge 0$ and $S_i \in \mathcal{S}$, and $f^{-1}$ turns unions into unions and intersections into intersections, with $f^{-1}[Y] = X$ for $n = 0$; so $f^{-1}[V]$ is a union of finite intersections of the open sets $f^{-1}[S_i]$ together with $X$, hence open. [given, L1, A2]

1.6 (e) implies (c): let $F \subseteq Y$ be closed and put $A := f^{-1}[F]$; then $f[A] \subseteq F$, so $f[\overline{A}] \subseteq \overline{f[A]} \subseteq \overline{F} = F$ by (e), monotonicity of the closure and [L3]; hence $\overline{A} \subseteq f^{-1}[F] = A$, and with $A \subseteq \overline{A}$ this gives $A = \overline{A}$, so $A$ is closed. [L3]

2.1 (b) implies (e): let $A \subseteq X$ and $x \in \overline{A}$, and let $V$ be open with $f(x) \in V$; then $f^{-1}[V]$ is open and contains $x$, so it meets $A$ by [L2], say at $a$; then $f(a) \in V \cap f[A]$, so $V$ meets $f[A]$. As $V$ was arbitrary, $f(x) \in \overline{f[A]}$ by [L2]. [step 1.1, L2]

3.1 Steps 1.1 and 1.2 make (a) and (b) equivalent; step 1.3 makes (b) and (c) equivalent; steps 1.4 and 1.5 make (b) and (d) equivalent; step 2.1 gives (b) implies (e) and step 1.6 gives (e) implies (c), which closes the cycle through (c) and (b). Hence all five conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 1.6] ∎

## Remarks

- **Only (a) is pointwise.** Conditions (b) to (e) are global, and none of them has a pointwise version that is equivalent to continuity at a single point: the preimage of an open set containing $f(x)$ can fail to be open while still being a neighbourhood of $x$, which is exactly what continuity at $x$ asserts.

- **The inclusion in (e) may be strict for a continuous map.** For the inclusion of $(0,1)$ into $\mathbb{R}$ and $A = (0,1)$, the image of the closure is $(0,1)$ while the closure of the image is $[0,1]$. Equality for all $A$ is a strictly stronger condition, equivalent to $f$ being a closed map, and closed maps are defined three items below. Note that no map into a **discrete** space can witness strictness: there every subset is closed, so $f[\overline{A}] = f[A] = \overline{f[A]}$ always.

- **What the theorem does not say.** It says nothing about images of open sets: a continuous map need not carry open sets to open sets, and the failure is exactly what separates a continuous bijection from a homeomorphism. That separation is recorded on this page as a false statement with an explicit two-point witness.
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

### `thm-urysohn-lemma`

````markdown
---
id: thm-urysohn-lemma
kind: theorem
title: "Urysohn's lemma, under the axiom of dependent choice: in a normal space two disjoint closed sets are separated by a continuous function into $[0,1]$, and conversely such a space is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
       def-the-dyadic-rationals-of-the-unit-interval, def-normal-and-t4-spaces,
       lem-normality-via-shrinking, def-dependent-choice, lem-finite-choice,
       def-choice-function, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interior-closure-boundary-top, def-interval, def-topological-space,
       def-subspace-topology-top, lem-real-line-is-a-metric-space]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: [thm-urysohn]
landmark: true
short: "Urysohn's lemma (DC)"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \subseteq X$ are
   disjoint closed sets, there is a continuous $f : X \to [0,1]$
   ([[def-continuous-map-top]], [[def-interval]]) with
   $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.
2. Conversely, if every pair of disjoint closed subsets of $X$ admits a
   continuous function into $[0,1]$ separating them in the sense of clause 1,
   then $X$ is normal. **This direction uses no choice principle.**

**Where the choice principle of clause 1 is spent, and why not less.** The
construction below builds, for each $n \in \mathbb{N}$, an assignment of an
open set to every dyadic rational of level $n$, extending the level-$(n-1)$
assignment; at each single level the finitely many new open sets are chosen at
once by [[lem-finite-choice]], a theorem of ZF, but stringing together
infinitely many such levels, each depending on the one before, is exactly the
situation dependent choice is for. The published
[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that
$\mathrm{ZF}$ and even $\mathrm{ZF}$ together with the Axiom of Countable
Choice do not suffice, and that dependent choice does; nothing here claims
dependent choice is *necessary* for clause 1, only that the construction given
is carried out in $\mathrm{ZF} + \mathrm{DC}$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$ (every $p \in P$ has some $q \in P$ with $p \mathbin{R} q$), and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0 = a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[L1] Shrinking: if $X$ is normal, $C \subseteq X$ is closed and $O \subseteq X$ is open with $C \subseteq O$, then there is open $W$ with $C \subseteq W \subseteq \overline{W} \subseteq O$ ([[lem-normality-via-shrinking]]).

[L2] Finite choice: a function $F$ with domain a natural number $n$, all of whose values are nonempty sets, admits a choice function for the family $F[n]$ of its values ([[lem-finite-choice]], [[def-choice-function]]), a theorem of ZF.

[L3] The dyadic rationals $D = \bigcup_{n} D_n$ of $[0,1]$ are an increasing union of finite levels; for $n \in \mathbb{N}$, $D_{n+1} = D_n \cup \{\, t_j : 0 \le j < 2^n \,\}$, where $t_j$ is strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and $s_j := (j+1)/2^n$, the $2^n$ points $t_j$ are pairwise distinct and disjoint from $D_n$, and every two elements of $D$ lie together in some common $D_n$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L4] Chaining: if $V_0, \dots, V_k$ ($k \ge 0$) are subsets of $X$ with $\overline{V_i} \subseteq V_{i+1}$ for every $i < k$, then $\overline{V_0} \subseteq V_k$, since $V_i \subseteq \overline{V_i} \subseteq V_{i+1}$ for each $i$ ([[def-interior-closure-boundary-top]]) makes $\overline{V_0} \subseteq V_1 \subseteq V_2 \subseteq \cdots \subseteq V_k$ a chain of inclusions.

[L5] The generic construction: if $(U_r)_{r \in D}$ is a family of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r<s$ in $D$ and $U_1 = X$, then $g(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$ ([[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]]).

[L6] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L7] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L8] $A \subseteq \overline{A}$ for every $A \subseteq X$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal and $A, B \subseteq X$ are disjoint closed sets (the hypothesis of clause 1). [assume-hyp]

1.2 Assume instead that every pair of disjoint closed subsets of $X$ admits a continuous function into $[0,1]$ separating them as in clause 1 (the hypothesis of clause 2). [assume-hyp]

2.1 Under step 1.1: $A \subseteq X \setminus B$, since $A \cap B = \varnothing$, and $X \setminus B$ is open since $B$ is closed; by [L1] applied to the closed set $A$ and the open set $X \setminus B$, fix open $\Phi_0(0)$ with $A \subseteq \Phi_0(0) \subseteq \overline{\Phi_0(0)} \subseteq X \setminus B$, and put $\Phi_0(1) := X \setminus B$, defining $\Phi_0 : D_0 \to \mathcal{T}$ on $D_0 = \{0,1\}$. [step 1.1, L1, choose, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; fix a continuous $h : X \to [0,1]$ with $C \subseteq h^{-1}(\{0\})$ and $E \subseteq h^{-1}(\{1\})$. [step 1.2, choose]

3.1 Under step 1.1: $A \subseteq \Phi_0(0)$; $\overline{\Phi_0(0)} \subseteq \Phi_0(1)$; and $\Phi_0(1) = X \setminus B$. [step 2.1]

3.2 Under step 1.2, continuing: by [L6], $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in $[0,1]$, disjoint, with $0 \in [0,\tfrac12)$ and $1 \in (\tfrac12,1]$; put $O_1 := h^{-1}(\,[0,\tfrac12)\,)$ and $O_2 := h^{-1}(\,(\tfrac12,1]\,)$, open in $X$ by [L7]. [step 2.2, L6, L7]

4.1 Under step 1.1: for $n \in \mathbb{N}$, call $\Phi : D_n \to \mathcal{T}$ **admissible at level $n$** when (i) $\overline{\Phi(r)} \subseteq \Phi(s)$ for every $r < s$ in $D_n$; (ii) $A \subseteq \Phi(0)$; (iii) $\Phi(1) = X \setminus B$. Put $P := \{\, (n,\Phi) : n \in \mathbb{N},\ \Phi \text{ admissible at level } n \,\}$, and for $(n,\Phi), (n',\Phi') \in P$ say $(n,\Phi) \mathbin{R} (n',\Phi')$ when $n' = n+1$ and $\Phi'|_{D_n} = \Phi$. By step 3.1, $(0,\Phi_0) \in P$. [step 3.1, construct]

4.2 Under step 1.2: $C \subseteq O_1$, since $h \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $h \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = h^{-1}\big(\,[0,\tfrac12) \cap (\tfrac12,1]\,\big) = h^{-1}(\varnothing) = \varnothing$. [step 2.2, step 3.2, L6]

5.1 Under step 1.1: let $(n,\Phi) \in P$. For each $j$ with $0 \le j < 2^n$, with $r_j, s_j, t_j$ as in [L3]: since $r_j < s_j$ in $D_n$, admissibility (i) gives $\overline{\Phi(r_j)} \subseteq \Phi(s_j)$, so by [L1] the set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$ is nonempty. [step 4.1, L1, L3]

5.2 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [[def-normal-and-t4-spaces]]; this is clause 2, and no step of it used [A1]. [step 4.2]

6.1 Under step 1.1, continuing under step 5.1: by [L2] applied to the function assigning, to each $j < 2^n$, the nonempty set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$, fix a simultaneous choice, giving open $W_j$ with $\overline{\Phi(r_j)} \subseteq W_j \subseteq \overline{W_j} \subseteq \Phi(s_j)$ for every $0 \le j < 2^n$. [step 5.1, L2, choose]

7.1 Under step 1.1: define $\Phi' : D_{n+1} \to \mathcal{T}$ by $\Phi'|_{D_n} := \Phi$ and $\Phi'(t_j) := W_j$ for $0 \le j < 2^n$; this is well defined since $D_{n+1} = D_n \cup \{t_j : 0 \le j < 2^n\}$ with the $t_j$ pairwise distinct and disjoint from $D_n$ by [L3]. Then $(n,\Phi) \mathbin{R} (n+1,\Phi')$. [step 6.1, L3, construct]

8.1 Under step 1.1, with $\Phi, \Phi'$ as in step 7.1: for the $D_{n+1}$-consecutive pair $(r_j, t_j)$: $\overline{\Phi'(r_j)} = \overline{\Phi(r_j)} \subseteq W_j = \Phi'(t_j)$ by step 6.1; for the pair $(t_j, s_j)$: $\overline{\Phi'(t_j)} = \overline{W_j} \subseteq \Phi(s_j) = \Phi'(s_j)$ by step 6.1. [step 7.1, step 6.1]

9.1 Under step 1.1: for $x < y$ in $D_{n+1}$, the finitely many elements of $D_{n+1} \cap [x,y]$, listed increasingly as $x = u_0 < u_1 < \cdots < u_k = y$, are $D_{n+1}$-consecutive at each step $u_i < u_{i+1}$, and each such pair is one of the pairs of step 8.1 (every $D_{n+1}$-consecutive pair has at least one member among the new points $t_j$, since a new point was inserted into every $D_n$-consecutive gap); so $\overline{\Phi'(u_i)} \subseteq \Phi'(u_{i+1})$ at each step, and [L4] gives $\overline{\Phi'(x)} = \overline{\Phi'(u_0)} \subseteq \Phi'(u_k) = \Phi'(y)$. [step 8.1, L3, L4]

10.1 Under step 1.1: $A \subseteq \Phi'(0) = \Phi(0)$, since $0 \in D_n$ is unaffected by the extension; $\Phi'(1) = \Phi(1) = X \setminus B$, since $1 \in D_n$ is likewise unaffected; with step 9.1 this is admissibility of $\Phi'$ at level $n+1$, so $(n+1,\Phi') \in P$. [step 7.1, step 9.1, L3]

11.1 Under step 1.1: by steps 5.1, 6.1, 7.1 and 10.1, every $(n,\Phi) \in P$ has some $(n+1,\Phi') \in P$ with $(n,\Phi) \mathbin{R} (n+1,\Phi')$; so $R$ is entire on $P$. [step 7.1, step 10.1]

12.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 11.1; by [A1] applied with $a := (0,\Phi_0)$, there is a sequence $\big((m_k,\Psi_k)\big)_{k \in \mathbb{N}}$ with $(m_0,\Psi_0) = (0,\Phi_0)$ and $(m_k,\Psi_k) \mathbin{R} (m_{k+1},\Psi_{k+1})$ for every $k$. [step 4.1, step 11.1, A1, construct]

13.1 Under step 1.1: since $(n,\Phi) \mathbin{R} (n',\Phi')$ forces $n' = n+1$, and $m_0 = 0$, induction on $k$ gives $m_k = k$ for every $k \in \mathbb{N}$; so each $\Psi_k : D_k \to \mathcal{T}$ is admissible at level $k$, and $\Psi_{k+1}|_{D_k} = \Psi_k$ for every $k$. [step 12.1]

14.1 Under step 1.1: for $r \in D$, fix $n$ with $r \in D_n$ [L3] and define $V_r := \Psi_n(r)$; by step 13.1, for $n \le n'$ with $r \in D_n$, $\Psi_{n'}(r) = \Psi_n(r)$ (chaining $\Psi_{n'}|_{D_n} = \Psi_n$ through the intermediate levels), so $V_r$ does not depend on the level $n$ chosen. [step 13.1, L3, construct]

15.1 Under step 1.1: for $r < s$ in $D$, fix $n$ with $r, s \in D_n$ [L3]; then $\overline{V_r} = \overline{\Psi_n(r)} \subseteq \Psi_n(s) = V_s$ by admissibility (i) of $\Psi_n$. Also $A \subseteq V_0$ and $V_1 = X \setminus B$, by admissibility (ii) and (iii) of $\Psi_n$ for any $n$. [step 14.1, step 13.1, L3]

16.1 Under step 1.1: define $U_r := V_r$ for $r \in D$ with $r < 1$, and $U_1 := X$. For $r < s$ in $D$: if $s < 1$, $\overline{U_r} = \overline{V_r} \subseteq V_s = U_s$ by step 15.1; if $s = 1$, $\overline{U_r} = \overline{V_r} \subseteq V_1 = X \setminus B \subseteq X = U_1$ by step 15.1. So $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$. [step 15.1, construct]

17.1 Under step 1.1: by [L5] applied to $(U_r)_{r \in D}$ of step 16.1, $f(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$. [step 16.1, L5]

17.2 Under step 1.1: for $b \in B$ and $r \in D$ with $r < 1$: fix $n$ with $r \in D_n$ [L3]; since $1 \in D_n$ also, admissibility (i) of $\Psi_n$ applied to $r < 1$ gives $\overline{\Psi_n(r)} \subseteq \Psi_n(1) = X \setminus B$, that is $\overline{V_r} \subseteq X \setminus B$; since $V_r \subseteq \overline{V_r}$ by [L8] and $U_r = V_r$ by step 16.1, $U_r \cap B = \varnothing$, so $b \notin U_r$. [step 14.1, step 13.1, step 16.1, L3, L8]

18.1 Under step 1.1: for $a \in A$: $a \in V_0$ by step 15.1, and $U_0 = V_0$ by step 16.1 (as $0 < 1$), so $a \in U_0$ and $0 \in \{r \in D : a \in U_r\}$; hence $f(a) \le 0$, and $f(a) \ge 0$ since $f$ maps into $[0,1]$ by step 17.1, so $f(a) = 0$. [step 17.1, step 16.1, step 15.1]

18.2 Under step 1.1: for $b \in B$: by step 17.2, $b \notin U_r$ for every $r \in D$ with $r < 1$, and $b \in U_1 = X$ by step 16.1; so $\{r \in D : b \in U_r\} \cup \{1\} = \{1\}$, giving $f(b) = \inf\{1\} = 1$. [step 17.2, step 16.1]

19.1 Steps 17.1, 18.1 and 18.2 show that, under the hypothesis of step 1.1, $f$ is a continuous map $X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$, which is clause 1. [step 17.1, step 18.1, step 18.2]

20.1 Steps 19.1 and 5.2 establish clauses 1 and 2 respectively. [step 19.1, step 5.2, discharge-construct] ∎

## Remarks

- **The lemma is stated for a normal space, not a $T_4$ space.** $T_1$ is used nowhere above; it is needed only to turn a *point* into a closed set, which is the extra step the next corollary spends. The published [[rem-urysohn-lemma-not-a-zf-theorem]] states the classical $T_4$ form; the form proved here is the more general one, and the two are not in tension — the $T_4$ form follows by adding the $T_1$ hypothesis, which is not used in this proof at all.

- **Only clause 1 costs a choice principle**, and it is spent at exactly one place: the single application of dependent choice in step 12.1, which strings together the countably many admissible levels built one finite step at a time in steps 5.1–10.1. Every other existential instantiation above (steps 2.1, 2.2 and 6.1) draws from a single nonempty set or, in step 6.1, from a finite family of them via [[lem-finite-choice]], and neither costs anything beyond ZF.

- **Why the construction tracks $X \setminus B$ rather than $X$ at $r=1$.** Recording $\Phi_n(1) := X \setminus B$ throughout the recursion, rather than $X$, is what makes admissibility clause (i) alone carry the whole $B$-avoidance property: since $1 \in D_n$ for every $n$, clause (i) applied to any $r<1$ already gives $\overline{\Phi_n(r)} \subseteq \Phi_n(1) = X \setminus B$, with no separate bookkeeping. Only at the very end, in step 16.1, is the top value widened from $X \setminus B$ to $X$, which is exactly what [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] requires.
````

