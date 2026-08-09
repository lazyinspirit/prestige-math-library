# Audit proof-refuter brief — Wave 10, A6

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
For an `ai-generated` proof, actively search for a counterexample. A false
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

## Wave 10 target — `thm-fermat-interior-extremum`

Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).

Normalized current SHA-256: `fc3ed62e8e552d593929bf9510400a021c8585fe3000e919fbce85eee8af01ee`

## Complete current target

````markdown
---
id: thm-fermat-interior-extremum
kind: theorem
title: "Fermat's interior extremum theorem: if $f$ has a local extremum at a point $c$ interior to its domain and is differentiable at $c$, then $f'(c) = 0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, def-local-extremum, lem-sign-preservation-near-a-limit, def-function-limit, def-neighbourhood-r, def-interior-closure-boundary-r, def-limit-point-r, lem-of-sign-rules, def-ordered-field]
justified_by: []
forward_refs: [cex-fermat-fails-at-an-endpoint]
aliases: [thm-fermat-stationary-point, thm-interior-extremum]
landmark: true
short: "Fermat's interior extremum theorem"
proof_strategy: contradiction
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Fermat's theorem (stationary points) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fermat%27s_theorem_(stationary_points)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.8)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be
**interior to $A$** ([[def-local-extremum]],
[[def-interior-closure-boundary-r]]). Suppose $f$ has a local extremum at $c$
([[def-local-extremum]]) and is differentiable at $c$ ([[def-derivative]]).
Then

$$f'(c) \;=\; 0 .$$

The symbol $f'(c)$ is meaningful under these hypotheses because an interior
point of $A$ is a limit point of $A$, which is proved in
[[def-local-extremum]].

**Interiority is a hypothesis and not a convenience.** At a point of $A$ that is
not interior, the argument below cannot place points of $A$ on both sides of
$c$, and the conclusion genuinely fails: the companion page exhibits a function
on $[0,1]$ attaining both its greatest and its least value at points where the
derivative is $1$.

**No converse is asserted.** A vanishing derivative does not produce an
extremum. The witness is the cubic of
[[fs-vanishing-derivative-forbids-strict-increase]], which has $f'(0) = 0$ and
neither a local maximum nor a local minimum at $0$; that failure is recorded in
the remarks of that item, not as an item of its own.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ interior to $A$, at which $f$ has a local extremum and is differentiable ([[def-local-extremum]], [[def-derivative]]).

[A1] $c$ is interior to $A$: there is a real $\varepsilon_A > 0$ with $N_{\varepsilon_A}(c) \subseteq A$; and such a $c$ is a limit point of $A$, so $f'(c)$ is defined ([[def-local-extremum]], [[def-interior-closure-boundary-r]], [[def-limit-point-r]]).

[A2] $f$ has a local extremum at $c$: there is a real $\rho > 0$ such that either $f(x) \le f(c)$ for every $x \in A \cap N_{\rho}(c)$, or $f(x) \ge f(c)$ for every $x \in A \cap N_{\rho}(c)$ ([[def-local-extremum]]).

[L1] Derivative ([[def-derivative]]): the difference quotient $q(x) := (f(x)-f(c))/(x-c)$ is a function on $A \setminus \{c\}$, the point $c$ is a limit point of $A \setminus \{c\}$, and $\lim_{x \to c} q(x) = f'(c)$ ([[def-function-limit]]). In particular $f(x) - f(c) = q(x)(x - c)$ for every $x \in A$ with $x \ne c$.

[L2] Sign preservation ([[lem-sign-preservation-near-a-limit]]): if $h$ is a function on a set $D$ having $c$ as a limit point and $\lim_{x \to c} h(x) = L$ with $L \ne 0$, then there is a real $\delta > 0$ such that every $x \in D$ with $0 < |x - c| < \delta$ satisfies $h(x) > L/2 > 0$ when $L > 0$, and $h(x) < L/2 < 0$ when $L < 0$.

[L3] Neighbourhoods ([[def-neighbourhood-r]]): $N_{\varepsilon}(c) = \{ y : |y - c| < \varepsilon \}$, and of finitely many positive reals the smallest is positive.

[L4] Order arithmetic ([[lem-of-sign-rules]], [[def-ordered-field]]): a product of two positive reals is positive, a product of a positive and a negative real is negative, and trichotomy, so $f'(c) \ne 0$ means $f'(c) > 0$ or $f'(c) < 0$, exclusively.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f'(c) \ne 0$; by trichotomy either $f'(c) > 0$ or $f'(c) < 0$. [assume-contra, L4]

1.2 Fix a real $\varepsilon_A > 0$ with $N_{\varepsilon_A}(c) \subseteq A$. [A1, choose]

1.3 Fix a real $\rho > 0$ as in [A2], so that on $A \cap N_{\rho}(c)$ the function $f$ never exceeds $f(c)$, or never falls below it. [A2, choose]

2.1 Apply [L2] to $h := q$ on the domain $D := A \setminus \{c\}$, of which $c$ is a limit point by [L1], with $L := f'(c) \ne 0$: fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $q(x) > f'(c)/2 > 0$ if $f'(c) > 0$, and $q(x) < f'(c)/2 < 0$ if $f'(c) < 0$. The clause $0 < |x-c|$ makes the two descriptions of the range of $x$, over $A$ and over $A \setminus \{c\}$, the same. [step 1.1, L1, L2, choose]

3.1 Put $\eta := \min\{\varepsilon_A,\ \rho,\ \delta\}$, a positive real, and set $x_{+} := c + \eta/2$ and $x_{-} := c - \eta/2$. Each satisfies $|x_{\pm} - c| = \eta/2 < \eta$, so each lies in $N_{\varepsilon_A}(c) \subseteq A$, each lies in $N_{\rho}(c)$, and each satisfies $0 < |x_{\pm} - c| < \delta$. In particular $x_{+}, x_{-} \in A \cap N_{\rho}(c)$ and both differ from $c$. [step 1.2, step 1.3, step 2.1, L3]

4.1 Suppose $f'(c) > 0$. By step 2.1, $q(x_{+}) > 0$ and $q(x_{-}) > 0$. Since $x_{+} - c = \eta/2 > 0$, [L1] and [L4] give $f(x_{+}) - f(c) = q(x_{+})(x_{+}-c) > 0$; since $x_{-} - c = -\eta/2 < 0$, they give $f(x_{-}) - f(c) = q(x_{-})(x_{-}-c) < 0$. So $f(x_{+}) > f(c)$ and $f(x_{-}) < f(c)$. [step 2.1, step 3.1, L1, L4]

4.2 Suppose instead $f'(c) < 0$. By step 2.1, $q(x_{+}) < 0$ and $q(x_{-}) < 0$. The same two products, with the signs of the quotients reversed, give $f(x_{+}) - f(c) < 0$ and $f(x_{-}) - f(c) > 0$. So $f(x_{-}) > f(c)$ and $f(x_{+}) < f(c)$. [step 2.1, step 3.1, L1, L4]

5.1 In both cases of step 1.1 there is a point of $A \cap N_{\rho}(c)$ at which $f$ takes a value strictly greater than $f(c)$, and a point of $A \cap N_{\rho}(c)$ at which it takes a value strictly smaller: the two points are $x_{+}$ and $x_{-}$ in one order or the other, and both lie in $A \cap N_{\rho}(c)$ by step 3.1. [step 3.1, step 4.1, step 4.2, L4]

6.1 By step 1.3 one of two things holds on $A \cap N_{\rho}(c)$: either no value exceeds $f(c)$, or none falls below it. Step 5.1 produces a value of each kind, so both alternatives fail, and [A2] guarantees that one of them holds. The assumption of step 1.1 is therefore untenable, and $f'(c) = 0$. [step 1.3, step 5.1, A2, discharge-contradiction] ∎

## Remarks

- **What the proof actually uses.** Only that the difference quotient keeps the sign of its limit near $c$, and that $c$ has points of $A$ on both sides of it arbitrarily close. The first is [[lem-sign-preservation-near-a-limit]]; the second is exactly what interiority buys, and it is where the hypothesis is spent. No continuity of $f$ away from $c$, and no hypothesis on $A$ beyond containing a neighbourhood of $c$, is needed.

- **The one-sided reading.** At a point $c$ with points of $A$ on one side only, the argument still gives half of the conclusion: if $f$ has a local maximum there and only points to the right, then $f'(c) \le 0$. This page does not state that refinement, because it does not use it, and the companion page's witness at an endpoint is the same observation seen from outside ([[cex-fermat-fails-at-an-endpoint]]).

- **A stationary point is not an extremum.** The converse of this theorem is false, and the standard witness, $x \mapsto x^{3}$ at $0$, is the same function that this page uses to refute a different plausible claim about vanishing derivatives.
````

## Current Wave 10 provenance determination

```json
{
  "id": "thm-fermat-interior-extremum",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_mvt.html",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
  ],
  "rationale": "The sources state Fermat’s theorem that a derivative at an interior local extremum is zero. The proof expands the one-sided sign comparison in the repository’s relative-domain notation.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 10 proof contract

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-local-extremum",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) and neighbourhoods are those of\n[[def-neighbourhood-r]]. Let $A \\subseteq \\mathbb{R}$, let $f : A \\to\n\\mathbb{R}$ and let $c \\in A$.\n\n- $f$ has a **local maximum at $c$**, also called a *relative maximum*, when\n  there is a real $\\varepsilon > 0$ with\n  $$f(x) \\le f(c) \\qquad \\text{for every } x \\in A \\cap N_{\\varepsilon}(c) .$$\n- $f$ has a **local minimum at $c$** when there is a real $\\varepsilon > 0$\n  with $f(x) \\ge f(c)$ for every $x \\in A \\cap N_{\\varepsilon}(c)$.\n- $f$ has a **local extremum at $c$** when it has a local maximum or a local\n  minimum at $c$.\n- $f$ has a **strict local maximum at $c$** when there is a real\n  $\\varepsilon > 0$ with $f(x) < f(c)$ for every $x \\in A \\cap\n  N^{*}_{\\varepsilon}(c)$, the neighbourhood being **punctured**; and a\n  **strict local minimum at $c$** when $f(x) > f(c)$ for every such $x$.\n\nThe point $c$ is **interior to $A$** when $c \\in A^{\\circ}$\n([[def-interior-closure-boundary-r]]), equivalently when there is a real\n$\\varepsilon > 0$ with $N_{\\varepsilon}(c) \\subseteq A$; that equivalence is the\npointwise description of the interior proved in\n[[def-interior-closure-boundary-r]] and is not reproved here.\n\n**The strict forms must puncture, and the weak forms must not.** With an\nunpunctured neighbourhood the strict condition would read $f(c) < f(c)$ at\n$x = c$, which no function satisfies, so the notion would be empty. With a\npunctured neighbourhood the weak condition would say nothing at $c$, which is\nharmless but pointless, since $f(c) \\le f(c)$ holds anyway. So each form is\nstated with the quantifier that makes it a condition.\n\n**Four consequences, each an obligation this definition carries.**\n\n1. **The condition does not depend on which witness $\\varepsilon$ is produced.**\n   If it holds for $\\varepsilon$, it holds for every real $\\varepsilon'$ with\n   $0 < \\varepsilon' \\le \\varepsilon$, because $N_{\\varepsilon'}(c) \\subseteq\n   N_{\\varepsilon}(c)$ ([[def-neighbourhood-r]]). So the existential quantifier\n   may be read as \"for all sufficiently small $\\varepsilon$\", and two witnesses\n   can always be replaced by the smaller of them.\n\n2. **A local maximum really is a maximum, of a set.** $f$ has a local maximum at\n   $c$ exactly when there is a real $\\varepsilon > 0$ with\n   $f(c) = \\max f\\bigl[A \\cap N_{\\varepsilon}(c)\\bigr]$ ([[def-max-min]]).\n   Indeed $c \\in A \\cap N_{\\varepsilon}(c)$, since $c \\in A$ and\n   $|c - c| = 0 < \\varepsilon$ ([[def-neighbourhood-r]]), so $f(c)$ belongs to\n   that image; and the defining inequality says exactly that $f(c)$ bounds the\n   image above. Conversely a maximum of the image is an element of it bounding\n   it above, which is the defining inequality. The same argument with the order\n   reversed identifies a local minimum with a minimum of the same image.\n\n3. **A strict local extremum is a local extremum.** If $f(x) < f(c)$ for every\n   $x \\in A \\cap N^{*}_{\\varepsilon}(c)$, then $f(x) \\le f(c)$ for every\n   $x \\in A \\cap N_{\\varepsilon}(c)$: the points of the unpunctured\n   neighbourhood other than $c$ are covered by the hypothesis, and at $x = c$\n   the inequality $f(c) \\le f(c)$ is automatic.\n\n4. **A global extremum is a local one.** If $f(c) = \\max f[A]$ then $f$ has a\n   local maximum at $c$, with $\\varepsilon := 1$ serving, since\n   $A \\cap N_1(c) \\subseteq A$; and dually for the minimum.\n\n**An interior point of $A$ is a limit point of $A$.** Suppose\n$N_{\\varepsilon}(c) \\subseteq A$ with $\\varepsilon > 0$ real, and let a real\n$\\delta > 0$ be given. The punctured neighbourhood\n$N^{*}_{\\rho}(c)$ with $\\rho := \\min\\{\\delta, \\varepsilon\\} > 0$ is nonempty\n([[def-neighbourhood-r]]) and is contained both in $N^{*}_{\\delta}(c)$ and in\n$N_{\\varepsilon}(c) \\subseteq A$; so $N^{*}_{\\delta}(c) \\cap A \\ne \\varnothing$.\nAs $\\delta$ was arbitrary, $c$ is a limit point of $A$\n([[def-limit-point-r]]). **This is what makes an interior extremum a place where\na derivative can be spoken of at all**, and it is the reason the interiority\nhypothesis appears in Fermat's theorem below rather than being replaced by\nsomething weaker.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "A1",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with open and closed sets as in\n[[def-open-and-closed-in-r]].\n\n- The **interior** of $A$ is the union of all open subsets of $A$:\n  $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$\n- The **closure** of $A$ is the intersection of all closed supersets of $A$:\n  $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$.\n- The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.\n\n**Both operators are well defined and deliver what their names claim.** The\nfamily whose union defines $A^{\\circ}$ always contains $\\varnothing$, and the\nfamily whose intersection defines $\\overline{A}$ always contains $\\mathbb{R}$,\nso the second family is nonempty and both expressions denote subsets of\n$\\mathbb{R}$ without appeal to any convention about empty unions or\nintersections. Moreover:\n\n- $A^{\\circ}$ is **open**, being a union of open sets\n  ([[thm-open-set-algebra-r]], claim 1), and $A^{\\circ} \\subseteq A$, since\n  every set in the family is a subset of $A$. It is therefore the **largest**\n  open subset of $A$: any open $U \\subseteq A$ is a member of the family and so\n  $U \\subseteq A^{\\circ}$.\n- $\\overline{A}$ is **closed**, being an intersection of a nonempty family of\n  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \\subseteq\n  \\overline{A}$, since every set in the family contains $A$. It is therefore the\n  **smallest** closed superset of $A$: any closed $F \\supseteq A$ is a member of\n  the family and so $\\overline{A} \\subseteq F$.\n\n**Pointwise description of the interior.** For $x \\in \\mathbb{R}$,\n\n$$x \\in A^{\\circ} \\iff \\text{there is } \\varepsilon > 0 \\text{ with } N_\\varepsilon(x) \\subseteq A .$$\n\nIf $x \\in A^{\\circ}$ then, $A^{\\circ}$ being open and containing $x$, there is\n$\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq A^{\\circ} \\subseteq A$.\nConversely if $N_\\varepsilon(x) \\subseteq A$ then $N_\\varepsilon(x)$ is an open\nsubset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence\n$x \\in N_\\varepsilon(x) \\subseteq A^{\\circ}$ ([[def-neighbourhood-r]]).\n\nThe corresponding pointwise description of the closure is not a definitional\nmatter and is proved separately, as [[thm-closure-characterisations-r]].",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "A1",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "A2",
      "source": "def-local-extremum",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) and neighbourhoods are those of\n[[def-neighbourhood-r]]. Let $A \\subseteq \\mathbb{R}$, let $f : A \\to\n\\mathbb{R}$ and let $c \\in A$.\n\n- $f$ has a **local maximum at $c$**, also called a *relative maximum*, when\n  there is a real $\\varepsilon > 0$ with\n  $$f(x) \\le f(c) \\qquad \\text{for every } x \\in A \\cap N_{\\varepsilon}(c) .$$\n- $f$ has a **local minimum at $c$** when there is a real $\\varepsilon > 0$\n  with $f(x) \\ge f(c)$ for every $x \\in A \\cap N_{\\varepsilon}(c)$.\n- $f$ has a **local extremum at $c$** when it has a local maximum or a local\n  minimum at $c$.\n- $f$ has a **strict local maximum at $c$** when there is a real\n  $\\varepsilon > 0$ with $f(x) < f(c)$ for every $x \\in A \\cap\n  N^{*}_{\\varepsilon}(c)$, the neighbourhood being **punctured**; and a\n  **strict local minimum at $c$** when $f(x) > f(c)$ for every such $x$.\n\nThe point $c$ is **interior to $A$** when $c \\in A^{\\circ}$\n([[def-interior-closure-boundary-r]]), equivalently when there is a real\n$\\varepsilon > 0$ with $N_{\\varepsilon}(c) \\subseteq A$; that equivalence is the\npointwise description of the interior proved in\n[[def-interior-closure-boundary-r]] and is not reproved here.\n\n**The strict forms must puncture, and the weak forms must not.** With an\nunpunctured neighbourhood the strict condition would read $f(c) < f(c)$ at\n$x = c$, which no function satisfies, so the notion would be empty. With a\npunctured neighbourhood the weak condition would say nothing at $c$, which is\nharmless but pointless, since $f(c) \\le f(c)$ holds anyway. So each form is\nstated with the quantifier that makes it a condition.\n\n**Four consequences, each an obligation this definition carries.**\n\n1. **The condition does not depend on which witness $\\varepsilon$ is produced.**\n   If it holds for $\\varepsilon$, it holds for every real $\\varepsilon'$ with\n   $0 < \\varepsilon' \\le \\varepsilon$, because $N_{\\varepsilon'}(c) \\subseteq\n   N_{\\varepsilon}(c)$ ([[def-neighbourhood-r]]). So the existential quantifier\n   may be read as \"for all sufficiently small $\\varepsilon$\", and two witnesses\n   can always be replaced by the smaller of them.\n\n2. **A local maximum really is a maximum, of a set.** $f$ has a local maximum at\n   $c$ exactly when there is a real $\\varepsilon > 0$ with\n   $f(c) = \\max f\\bigl[A \\cap N_{\\varepsilon}(c)\\bigr]$ ([[def-max-min]]).\n   Indeed $c \\in A \\cap N_{\\varepsilon}(c)$, since $c \\in A$ and\n   $|c - c| = 0 < \\varepsilon$ ([[def-neighbourhood-r]]), so $f(c)$ belongs to\n   that image; and the defining inequality says exactly that $f(c)$ bounds the\n   image above. Conversely a maximum of the image is an element of it bounding\n   it above, which is the defining inequality. The same argument with the order\n   reversed identifies a local minimum with a minimum of the same image.\n\n3. **A strict local extremum is a local extremum.** If $f(x) < f(c)$ for every\n   $x \\in A \\cap N^{*}_{\\varepsilon}(c)$, then $f(x) \\le f(c)$ for every\n   $x \\in A \\cap N_{\\varepsilon}(c)$: the points of the unpunctured\n   neighbourhood other than $c$ are covered by the hypothesis, and at $x = c$\n   the inequality $f(c) \\le f(c)$ is automatic.\n\n4. **A global extremum is a local one.** If $f(c) = \\max f[A]$ then $f$ has a\n   local maximum at $c$, with $\\varepsilon := 1$ serving, since\n   $A \\cap N_1(c) \\subseteq A$; and dually for the minimum.\n\n**An interior point of $A$ is a limit point of $A$.** Suppose\n$N_{\\varepsilon}(c) \\subseteq A$ with $\\varepsilon > 0$ real, and let a real\n$\\delta > 0$ be given. The punctured neighbourhood\n$N^{*}_{\\rho}(c)$ with $\\rho := \\min\\{\\delta, \\varepsilon\\} > 0$ is nonempty\n([[def-neighbourhood-r]]) and is contained both in $N^{*}_{\\delta}(c)$ and in\n$N_{\\varepsilon}(c) \\subseteq A$; so $N^{*}_{\\delta}(c) \\cap A \\ne \\varnothing$.\nAs $\\delta$ was arbitrary, $c$ is a limit point of $A$\n([[def-limit-point-r]]). **This is what makes an interior extremum a place where\na derivative can be spoken of at all**, and it is the reason the interiority\nhypothesis appears in Fermat's theorem below rather than being replaced by\nsomething weaker.",
      "uses": [
        "1.3",
        "6.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), neighbourhoods are those of\n[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\n**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function\n\n$$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$\n\nThe division is legitimate at every point of the domain, since $x \\ne c$ gives\n$x - c \\ne 0$.\n\n**The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.**\nFor every real $\\varepsilon > 0$ the punctured neighbourhood\n$N^{*}_{\\varepsilon}(c)$ omits $c$, so\n\n$$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$\n\nand the left-hand side is nonempty because $c$ is a limit point of $A$. So\n$q_{f,c}$ is a function on a set having $c$ as a limit point, and\n$\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.\n\n$f$ is **differentiable at $c$** when that limit exists, and then the\n**derivative of $f$ at $c$** is\n\n$$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$\n\n**Two obligations are carried by that notation, and both are discharged here.**\n\n1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a\n   single real number. That is legitimate: $c$ is a limit point of the domain\n   $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the\n   $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to\n   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the\n   symbol denotes.\n2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not\n   decoration. At an **isolated** point of $A$ the punctured condition\n   $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the\n   $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at\n   once; this is why [[def-function-limit]] leaves the limit undefined there,\n   and it is why this library defines $f'(c)$ only at a limit point of $A$. At\n   an isolated point of its domain a function is neither differentiable nor\n   non-differentiable here: the question is not posed.\n\n**The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is\nextended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with\n$q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$.\nThen $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$.\nBoth conditions read: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that every point $x$ of the relevant domain with\n$0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$\n([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both\nquantifiers, so in both cases the points quantified over are exactly the\n$x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and\n$q_{f,c}$ take the same value. The two conditions are the same condition.\n\n**Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on\n$S$** when it is differentiable at every $c \\in S$; implicit in that phrase is\nthat every point of $S$ is a limit point of $A$. $f$ is **differentiable** when\nit is differentiable on the whole of $A$.\n\n**Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose\n$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the\nrestriction $f|_B : B \\to \\mathbb{R}$, and\n\n$$(f|_B)'(c) \\;=\\; f'(c) .$$\n\nIndeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity\nof punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit\npoint of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the\nrestriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and\nclaim 2 of [[lem-limit-is-local]] carries the limit to that restriction.\n\n**Every point of a nondegenerate interval is a limit point of it.** Let\n$J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two\nelements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real\n$\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$;\nthen $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and\norder-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$,\nthe point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same\nway. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real\n$\\varepsilon > 0$, that is, $p$ is a limit point of $J$\n([[def-limit-point-r]]).\n\nConsequently, for $f$ defined on a nondegenerate interval $I$, the symbol\n$f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint\nthe difference quotient is taken over the points of $I$ lying on the one side\nthat is available, so what other texts call a one-sided derivative is, here,\nsimply the derivative of $f$ on $I$.",
      "uses": [
        "2.1",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) with its order and absolute value\n([[def-real-order]]).\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$\nbe a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$.\nWe say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write\n\n$$\\lim_{x \\to c} f(x) = L ,$$\n\nwhen\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$\n\nwhere $\\varepsilon$ and $\\delta$ range over the **positive reals**.\n\nIn the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n\n$$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$\n\n$N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured\n$\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L +\n\\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because\n$|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and\n$0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$.\n\n**Three features of this definition are load bearing, not decoration.**\n\n1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that\n   says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$\n   the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is\n   nonempty. Drop the requirement and the implication can be satisfied\n   vacuously by *every* real $L$ at once, which is exactly what\n   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$\n   that is not a limit point of $A$ — an isolated point — the symbol\n   $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library.\n\n2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$\n   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This\n   is what allows a limit to be taken at a point where the function is not\n   defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$.\n\n3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis\n   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the\n   single point $c$ changes nothing. Equality of the limit with the value is an\n   extra condition, not a consequence: [[fs-limit-equals-value]].\n\n**The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats\nthe left-hand side as a name for a single real number, which is legitimate only\nbecause at a limit point at most one $L$ can satisfy the displayed condition.\nThat obligation is discharged by [[lem-function-limit-unique]], recorded in this\nitem's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and\n$\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function\nalready known to have a limit at $c$.\n\n**Real and rational $\\varepsilon$ define the same relation.** Above,\n$\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either\nquantifier to the positive rationals gives the same relation: every positive\nrational is a positive real, and below every positive real lies a positive\nrational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for\nall positive rationals is verified for an arbitrary positive real $\\eta$ by\nrunning it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a\n$\\delta$ produced as a real may be shrunk to a rational one below it. This is\nthe passage sanctioned in the remarks of [[def-sequence]], and it is what lets\nthis definition be compared with [[def-real-limit]], whose $\\varepsilon$ is\nrational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "2.1",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-sign-preservation-near-a-limit",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit point of $A$\n([[def-limit-point-r]]), let $f : A \\to \\mathbb{R}$ and suppose the limit of $f$\nat $c$ exists with $\\lim_{x \\to c} f(x) = L$ and $L \\ne 0$\n([[def-function-limit]]). Then there is a real $\\delta > 0$ such that every\n$x \\in A$ with $0 < |x - c| < \\delta$ satisfies\n\n$$|f(x)| \\;>\\; \\frac{|L|}{2} \\;>\\; 0 ;$$\n\nin particular $f(x) \\ne 0$ for every such $x$. Moreover:\n\n- if $L > 0$ then $f(x) > L/2 > 0$ for every such $x$;\n- if $L < 0$ then $f(x) < L/2 < 0$ for every such $x$.\n\nConsequently, writing\n\n$$A_0 := \\{\\, x \\in A \\ : \\ f(x) \\ne 0 \\,\\},$$\n\nthe point $c$ is a limit point of $A_0$.\n\n**The bound $|L|/2$, and not merely \"$f \\ne 0$\", is what later proofs need.** The\nquotient case of [[thm-algebra-of-function-limits]] estimates $1/|f|$ near $c$\nand therefore needs a *positive lower* bound on $|f|$ there, and the last claim\nis what lets a limit be taken on the smaller domain $A_0$ at all.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "4.1",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "4.1",
        "4.2",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-fermat-interior-extremum-step-1-1",
      "claim": "Suppose, for contradiction, that $f'(c) \\ne 0$; by trichotomy either $f'(c) > 0$ or $f'(c) < 0$. [assume-contra, L4]",
      "step": "1.1",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "thm-fermat-interior-extremum-step-1-2",
      "claim": "Fix a real $\\varepsilon_A > 0$ with $N_{\\varepsilon_A}(c) \\subseteq A$. [A1, choose]",
      "step": "1.2",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "thm-fermat-interior-extremum-step-1-3",
      "claim": "Fix a real $\\rho > 0$ as in [A2], so that on $A \\cap N_{\\rho}(c)$ the function $f$ never exceeds $f(c)$, or never falls below it. [A2, choose]",
      "step": "1.3",
      "inputs": [
        "A2"
      ]
    },
    {
      "id": "thm-fermat-interior-extremum-step-2-1",
      "claim": "Apply [L2] to $h := q$ on the domain $D := A \\setminus \\{c\\}$, of which $c$ is a limit point by [L1], with $L := f'(c) \\ne 0$: fix a real $\\delta > 0$ such that every $x \\in A$ with $0 < |x - c| < \\delta$ satisfies $q(x) > f'(c)/2 > 0$ if $f'(c) > 0$, and $q(x) < f'(c)/2 < 0$ if $f'(c) < 0$. The clause $0 < |x-c|$ makes the two descriptions of the range of $x$, over $A$ and over $A \\setminus \\{c\\}$, the same. [step 1.1, L1, L2, choose]",
      "step": "2.1",
      "inputs": [
        "L2",
        "L1",
        "1.1"
      ]
    },
    {
      "id": "thm-fermat-interior-extremum-step-3-1",
      "claim": "Put $\\eta := \\min\\{\\varepsilon_A,\\ \\rho,\\ \\delta\\}$, a positive real, and set $x_{+} := c + \\eta/2$ and $x_{-} := c - \\eta/2$. Each satisfies $|x_{\\pm} - c| = \\eta/2 < \\eta$, so each lies in $N_{\\varepsilon_A}(c) \\subseteq A$, each lies in $N_{\\rho}(c)$, and each satisfies $0 < |x_{\\pm} - c| < \\delta$. In particular $x_{+}, x_{-} \\in A \\cap N_{\\rho}(c)$ and both differ from $c$. [step 1.2, step 1.3, step 2.1, L3]",
      "step": "3.1",
      "inputs": [
        "1.2",
        "1.3",
        "2.1",
        "L3"
      ]
    },
    {
      "id": "thm-fermat-interior-extremum-step-4-1",
      "claim": "Suppose $f'(c) > 0$. By step 2.1, $q(x_{+}) > 0$ and $q(x_{-}) > 0$. Since $x_{+} - c = \\eta/2 > 0$, [L1] and [L4] give $f(x_{+}) - f(c) = q(x_{+})(x_{+}-c) > 0$; since $x_{-} - c = -\\eta/2 < 0$, they give $f(x_{-}) - f(c) = q(x_{-})(x_{-}-c) < 0$. So $f(x_{+}) > f(c)$ and $f(x_{-}) < f(c)$. [step 2.1, step 3.1, L1, L4]",
      "step": "4.1",
      "inputs": [
        "2.1",
        "L1",
        "L4",
        "3.1"
      ]
    },
    {
      "id": "thm-fermat-interior-extremum-step-4-2",
      "claim": "Suppose instead $f'(c) < 0$. By step 2.1, $q(x_{+}) < 0$ and $q(x_{-}) < 0$. The same two products, with the signs of the quotients reversed, give $f(x_{+}) - f(c) < 0$ and $f(x_{-}) - f(c) > 0$. So $f(x_{-}) > f(c)$ and $f(x_{+}) < f(c)$. [step 2.1, step 3.1, L1, L4]",
      "step": "4.2",
      "inputs": [
        "2.1",
        "3.1",
        "L1",
        "L4"
      ]
    },
    {
      "id": "thm-fermat-interior-extremum-step-5-1",
      "claim": "In both cases of step 1.1 there is a point of $A \\cap N_{\\rho}(c)$ at which $f$ takes a value strictly greater than $f(c)$, and a point of $A \\cap N_{\\rho}(c)$ at which it takes a value strictly smaller: the two points are $x_{+}$ and $x_{-}$ in one order or the other, and both lie in $A \\cap N_{\\rho}(c)$ by step 3.1. [step 3.1, step 4.1, step 4.2, L4]",
      "step": "5.1",
      "inputs": [
        "1.1",
        "3.1",
        "4.1",
        "4.2",
        "L4"
      ]
    },
    {
      "id": "thm-fermat-interior-extremum-step-6-1",
      "claim": "By step 1.3 one of two things holds on $A \\cap N_{\\rho}(c)$: either no value exceeds $f(c)$, or none falls below it. Step 5.1 produces a value of each kind, so both alternatives fail, and [A2] guarantees that one of them holds. The assumption of step 1.1 is therefore untenable, and $f'(c) = 0$. [step 1.3, step 5.1, A2, discharge-contradiction] ∎",
      "step": "6.1",
      "inputs": [
        "1.3",
        "5.1",
        "A2",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement fixes concrete points/functions and has no empty family or empty-domain branch."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 explicitly includes the zero-valued, vanishing, or zero-index case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.2 explicitly includes the unit, singleton, or first-index case."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement explicitly fixes a nondegenerate interval or assumes strict endpoint order."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement explicitly states the interval and endpoint convention used by the result."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 supplies each displayed witness by formula or by the cited existence premise before using it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-local-extremum",
    "declared_target": "def-local-extremum",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "lem-sign-preservation-near-a-limit",
    "declared_target": "lem-sign-preservation-near-a-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "thm-fermat-interior-extremum",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "cex-fermat-fails-at-an-endpoint",
    "declared_target": "cex-fermat-fails-at-an-endpoint",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems-examples",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (11)

### `cex-fermat-fails-at-an-endpoint`

````markdown
---
id: cex-fermat-fails-at-an-endpoint
kind: counterexample
title: "The identity on $[0,1]$ attains its maximum at $1$ and its minimum at $0$ with derivative $1$ at both, so Fermat's theorem genuinely needs the extremum to be at an interior point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fermat-interior-extremum, def-local-extremum, def-derivative, def-interior-closure-boundary-r, def-max-min, def-interval, def-neighbourhood-r, def-function-limit, cor-of-one-positive, def-limit-point-r]
justified_by: []
aliases: []
landmark: false
short: "Fermat needs an interior point"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Fermat's theorem (stationary points) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fermat%27s_theorem_(stationary_points)"
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and
let $c \in A$ be a limit point of $A$ at which $f$ has a local extremum
([[def-local-extremum]]) and is differentiable ([[def-derivative]]). Then
$f'(c) = 0$.

That is [[thm-fermat-interior-extremum]] with the hypothesis "$c$ is interior to
$A$" deleted and replaced by the weaker one needed for $f'(c)$ to be a defined
symbol at all. It is false: the identity on $[0,1]$ attains a greatest and a
least value, both at points of the domain that are not interior to it, and its
derivative is $1$ everywhere.

## Facts & Assumptions

**Given:** The set $A := [0,1]$ ([[def-interval]]) and the function $f : A \to \mathbb{R}$, $f(x) := x$.

[L1] Derivative of the identity ([[def-derivative]], [[def-function-limit]]): every point of the order-convex set $[0,1]$, which has at least two elements, is a limit point of it ([[def-limit-point-r]]); and the difference quotient of $f$ at any $c \in [0,1]$ is $(x-c)/(x-c) = 1$ at every $x \in [0,1]$ with $x \ne c$, a constant function whose limit at $c$ is $1$. So $f$ is differentiable at every $c \in [0,1]$ with $f'(c) = 1$.

[L2] Local extrema ([[def-local-extremum]]): $f$ has a local maximum at $c \in A$ when $f(x) \le f(c)$ for every $x \in A \cap N_{\varepsilon}(c)$ for some real $\varepsilon > 0$, and a local minimum with the inequality reversed; a value that is a greatest value of $f$ over the whole of $A$ is a local maximum, and a least value is a local minimum (claim 4 of its body); and $c$ is interior to $A$ exactly when $N_{\varepsilon}(c) \subseteq A$ for some real $\varepsilon > 0$ ([[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L3] Maximum and minimum of a set ([[def-max-min]]): $m$ is a maximum of $S$ when $m \in S$ and $s \le m$ for every $s \in S$, and a minimum when $m \in S$ and $m \le s$ for every $s \in S$.

[L4] Fermat's interior extremum theorem ([[thm-fermat-interior-extremum]]) additionally requires $c$ to be interior to $A$.

[L5] $0 \ne 1$, since $0 < 1$ ([[cor-of-one-positive]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the function $f$ is differentiable at every $c \in [0,1]$, and $f'(c) = 1$; in particular $f'(0) = f'(1) = 1$, and every point of $[0,1]$ is a limit point of $[0,1]$. [L1]

1.2 Every $x \in A$ satisfies $0 \le x \le 1$, so $f(x) = x \le 1 = f(1)$ and $f(x) = x \ge 0 = f(0)$; and $0, 1 \in A$. So $f(1)$ is a maximum of $f[A]$ and $f(0)$ is a minimum of $f[A]$ by [L3], and by [L2] the function $f$ has a local maximum at $1$ and a local minimum at $0$, hence a local extremum at each. [L2, L3]

1.3 Neither $1$ nor $0$ is interior to $A$: for every real $\varepsilon > 0$ the point $1 + \varepsilon/2$ lies in $N_{\varepsilon}(1)$ and not in $[0,1]$, and the point $-\varepsilon/2$ lies in $N_{\varepsilon}(0)$ and not in $[0,1]$. So no $N_{\varepsilon}$ around either point is contained in $A$. [L2]

2.1 The refuted claim therefore fails at $c := 1$: the point $1$ lies in $A$ and is a limit point of $A$ by step 1.1, $f$ has a local extremum there by step 1.2 and is differentiable there by step 1.1, and yet $f'(1) = 1 \ne 0$ by [L5]. The same holds at $c := 0$. [step 1.1, step 1.2, L5]

3.1 Nothing in [L4] is contradicted. By step 1.3 neither $0$ nor $1$ is interior to $A$, so the hypothesis of that theorem is not met at either point, and the deleted hypothesis is exactly the one that fails. Indeed no point of $A$ at all carries a vanishing derivative, and consistently with [L4] no interior point of $A$ carries a local extremum: by step 1.2 the only extrema of $f$ over $A$ sit at the two endpoints. [step 1.3, step 2.1, L4] ∎

## Remarks

- **What the endpoint case would need instead.** At $1$ the domain supplies points on the left only, and the difference quotient there is positive, so the most one can conclude is $f'(1) \ge 0$. That one-sided refinement is not stated at this point in the reading order, since nothing here uses it; the point of the witness is only that the two-sided conclusion $f'(c) = 0$ is unavailable.

- **The witness is not delicate.** Any function increasing on $[0,1]$ and differentiable there whose derivative vanishes at neither endpoint does the same job, and the identity is chosen for having a derivative that can be computed from [[def-derivative]] in one line. The nonvanishing clause has to be said and is not automatic: $x \mapsto x^{3}$ is increasing on $[0,1]$ and differentiable there, and attains its least value at $0$, yet $f'(0) = 0$, so it refutes nothing at the left endpoint. What removing interiority destroys is the *guarantee* that the derivative vanishes, not the possibility. So the failure at an endpoint is the generic situation and not an artefact.

- **Why this matters for Rolle's theorem.** [[thm-rolle]] produces an interior point precisely by ruling this case out: when both extrema sit at the endpoints, the hypothesis $f(a) = f(b)$ forces the function to be constant, and any interior point then serves. Without that hypothesis the endpoint case is exactly the one that survives, and the identity on $[0,1]$ is it.
````

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
````

### `def-function-limit`

````markdown
---
id: def-function-limit
kind: definition
title: "The $\\varepsilon$-$\\delta$ limit $\\lim_{x \\to c} f(x) = L$ of $f : A \\to \\mathbb{R}$ at a limit point $c$ of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-neighbourhood-r, def-interval, def-real-order, def-complete-ordered-field, lem-of-abs-value, lem-rat-embeds-dense]
justified_by: [lem-function-limit-unique]
aliases: [def-epsilon-delta-limit, def-limit-of-a-function]
landmark: true
short: "the $\\varepsilon$-$\\delta$ limit of a function"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) with its order and absolute value
([[def-real-order]]).

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in \mathbb{R}$
be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \in \mathbb{R}$.
We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write

$$\lim_{x \to c} f(x) = L ,$$

when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr],$$

where $\varepsilon$ and $\delta$ range over the **positive reals**.

In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:
for every real $\varepsilon > 0$ there is a real $\delta > 0$ with

$$f\bigl(A \cap N^{*}_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}(L),$$

$N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ being the punctured
$\delta$-neighbourhood of $c$ and $N_{\varepsilon}(L) = (L - \varepsilon,\ L +
\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because
$|f(x) - L| < \varepsilon$ says exactly $f(x) \in N_\varepsilon(L)$, and
$0 < |x - c| < \delta$ says exactly $x \in N^{*}_\delta(c)$.

**Three features of this definition are load bearing, not decoration.**

1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that
   says every punctured neighbourhood of $c$ meets $A$, so for every $\delta > 0$
   the set $A \cap N^{*}_\delta(c)$ over which the implication quantifies is
   nonempty. Drop the requirement and the implication can be satisfied
   vacuously by *every* real $L$ at once, which is exactly what
   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$
   that is not a limit point of $A$ — an isolated point — the symbol
   $\lim_{x \to c} f(x)$ is therefore **not defined** in this library.

2. **$c \in A$ is not required.** A limit point of $A$ need not belong to $A$
   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This
   is what allows a limit to be taken at a point where the function is not
   defined at all, as at $0$ for $x \mapsto x\,\psi(1/x)$.

3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis
   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the
   single point $c$ changes nothing. Equality of the limit with the value is an
   extra condition, not a consequence: [[fs-limit-equals-value]].

**The notation presumes uniqueness.** Writing $\lim_{x \to c} f(x) = L$ treats
the left-hand side as a name for a single real number, which is legitimate only
because at a limit point at most one $L$ can satisfy the displayed condition.
That obligation is discharged by [[lem-function-limit-unique]], recorded in this
item's `justified_by`. As with $\sup S$ ([[rem-sup-conventions]]) and
$\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function
already known to have a limit at $c$.

**Real and rational $\varepsilon$ define the same relation.** Above,
$\varepsilon$ and $\delta$ range over the positive reals. Restricting either
quantifier to the positive rationals gives the same relation: every positive
rational is a positive real, and below every positive real lies a positive
rational ([[lem-rat-embeds-dense]]), so an $\varepsilon$-condition verified for
all positive rationals is verified for an arbitrary positive real $\eta$ by
running it at a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and a
$\delta$ produced as a real may be shrunk to a rational one below it. This is
the passage sanctioned in the remarks of [[def-sequence]], and it is what lets
this definition be compared with [[def-real-limit]], whose $\varepsilon$ is
rational, in [[thm-sequential-criterion-for-function-limits]].

## Remarks

- **Terminology.** *Limit point* here is a property of the set $A$ and the point
  $c$, in the sense of [[def-limit-point-r]]; it has nothing to do with
  subsequential limits ([[def-subsequential-limit]]), and the distinction is the
  one that item records.

- **Why the punctured condition, and not $|x - c| < \delta$.** With the
  unpunctured condition the definition would force $f$ to be defined at $c$ and
  would force $|f(c) - L| < \varepsilon$ for every $\varepsilon$, that is,
  $L = f(c)$. The resulting notion is continuity at $c$, a strictly stronger
  condition, and conflating the two is the error catalogued in
  [[fs-limit-equals-value]].

- **One-sided and infinite variants.** Restricting the domain to one side of $c$
  gives the one-sided limits of [[def-one-sided-limits]]; replacing the
  conditions on $x$ or on $f(x)$ by unboundedness conditions gives the limits at
  and to infinity of [[def-limits-at-infinity]]. Both are built on this
  definition rather than beside it.
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

### `def-local-extremum`

````markdown
---
id: def-local-extremum
kind: definition
title: "Local (relative) maximum and minimum of $f : A \\to \\mathbb{R}$ at a point, the strict forms, and what it means for the point to be interior to $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-neighbourhood-r, def-max-min, def-interior-closure-boundary-r, def-complete-ordered-field, def-interval, def-limit-point-r]
justified_by: []
aliases: [def-local-maximum, def-local-minimum, def-relative-extremum]
landmark: true
short: "local maximum, local minimum, interior point"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) and neighbourhoods are those of
[[def-neighbourhood-r]]. Let $A \subseteq \mathbb{R}$, let $f : A \to
\mathbb{R}$ and let $c \in A$.

- $f$ has a **local maximum at $c$**, also called a *relative maximum*, when
  there is a real $\varepsilon > 0$ with
  $$f(x) \le f(c) \qquad \text{for every } x \in A \cap N_{\varepsilon}(c) .$$
- $f$ has a **local minimum at $c$** when there is a real $\varepsilon > 0$
  with $f(x) \ge f(c)$ for every $x \in A \cap N_{\varepsilon}(c)$.
- $f$ has a **local extremum at $c$** when it has a local maximum or a local
  minimum at $c$.
- $f$ has a **strict local maximum at $c$** when there is a real
  $\varepsilon > 0$ with $f(x) < f(c)$ for every $x \in A \cap
  N^{*}_{\varepsilon}(c)$, the neighbourhood being **punctured**; and a
  **strict local minimum at $c$** when $f(x) > f(c)$ for every such $x$.

The point $c$ is **interior to $A$** when $c \in A^{\circ}$
([[def-interior-closure-boundary-r]]), equivalently when there is a real
$\varepsilon > 0$ with $N_{\varepsilon}(c) \subseteq A$; that equivalence is the
pointwise description of the interior proved in
[[def-interior-closure-boundary-r]] and is not reproved here.

**The strict forms must puncture, and the weak forms must not.** With an
unpunctured neighbourhood the strict condition would read $f(c) < f(c)$ at
$x = c$, which no function satisfies, so the notion would be empty. With a
punctured neighbourhood the weak condition would say nothing at $c$, which is
harmless but pointless, since $f(c) \le f(c)$ holds anyway. So each form is
stated with the quantifier that makes it a condition.

**Four consequences, each an obligation this definition carries.**

1. **The condition does not depend on which witness $\varepsilon$ is produced.**
   If it holds for $\varepsilon$, it holds for every real $\varepsilon'$ with
   $0 < \varepsilon' \le \varepsilon$, because $N_{\varepsilon'}(c) \subseteq
   N_{\varepsilon}(c)$ ([[def-neighbourhood-r]]). So the existential quantifier
   may be read as "for all sufficiently small $\varepsilon$", and two witnesses
   can always be replaced by the smaller of them.

2. **A local maximum really is a maximum, of a set.** $f$ has a local maximum at
   $c$ exactly when there is a real $\varepsilon > 0$ with
   $f(c) = \max f\bigl[A \cap N_{\varepsilon}(c)\bigr]$ ([[def-max-min]]).
   Indeed $c \in A \cap N_{\varepsilon}(c)$, since $c \in A$ and
   $|c - c| = 0 < \varepsilon$ ([[def-neighbourhood-r]]), so $f(c)$ belongs to
   that image; and the defining inequality says exactly that $f(c)$ bounds the
   image above. Conversely a maximum of the image is an element of it bounding
   it above, which is the defining inequality. The same argument with the order
   reversed identifies a local minimum with a minimum of the same image.

3. **A strict local extremum is a local extremum.** If $f(x) < f(c)$ for every
   $x \in A \cap N^{*}_{\varepsilon}(c)$, then $f(x) \le f(c)$ for every
   $x \in A \cap N_{\varepsilon}(c)$: the points of the unpunctured
   neighbourhood other than $c$ are covered by the hypothesis, and at $x = c$
   the inequality $f(c) \le f(c)$ is automatic.

4. **A global extremum is a local one.** If $f(c) = \max f[A]$ then $f$ has a
   local maximum at $c$, with $\varepsilon := 1$ serving, since
   $A \cap N_1(c) \subseteq A$; and dually for the minimum.

**An interior point of $A$ is a limit point of $A$.** Suppose
$N_{\varepsilon}(c) \subseteq A$ with $\varepsilon > 0$ real, and let a real
$\delta > 0$ be given. The punctured neighbourhood
$N^{*}_{\rho}(c)$ with $\rho := \min\{\delta, \varepsilon\} > 0$ is nonempty
([[def-neighbourhood-r]]) and is contained both in $N^{*}_{\delta}(c)$ and in
$N_{\varepsilon}(c) \subseteq A$; so $N^{*}_{\delta}(c) \cap A \ne \varnothing$.
As $\delta$ was arbitrary, $c$ is a limit point of $A$
([[def-limit-point-r]]). **This is what makes an interior extremum a place where
a derivative can be spoken of at all**, and it is the reason the interiority
hypothesis appears in Fermat's theorem below rather than being replaced by
something weaker.

## Remarks

- **"The local maximum" is not a legitimate phrase.** A function may have local
  maxima at many points, and the definite article belongs only to the *value*
  $f(c)$ once the point $c$ is fixed. A global maximum value is unique when it
  exists ([[def-max-min]]); a local one is not, and neither is the point.

- **Local is a statement about $A$, not about $\mathbb{R}$.** The comparison
  runs over $A \cap N_{\varepsilon}(c)$, so a function on a small domain has
  local maxima easily: every point of $A$ at which $A \cap N_{\varepsilon}(c) =
  \{c\}$ for some $\varepsilon$, that is every isolated point of $A$
  ([[def-limit-point-r]]), carries both a strict local maximum and a strict
  local minimum, the punctured condition being vacuous there. Interiority is
  the hypothesis that rules that degenerate case out.

- **Endpoints are the case to keep in mind.** For $A = [a,b]$ with $a < b$
  ([[def-interval]]) the points $a$ and $b$ are not interior to $A$: any
  $N_{\varepsilon}(a)$ contains $a - \varepsilon/2$, which is not in $[a,b]$.
  A function may perfectly well attain its greatest value there, with no
  vanishing derivative anywhere, and the companion page works that case out.

- **Nothing here mentions a derivative.** The definition is purely about the
  order, and it applies to functions that are nowhere differentiable. What the
  next items add is the interaction, in one direction only: differentiability at
  an interior extremum forces the derivative to vanish, and the converse is
  false.
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

### `fs-vanishing-derivative-forbids-strict-increase`

````markdown
---
id: fs-vanishing-derivative-forbids-strict-increase
kind: false-statement
title: "FALSE: if $f'(c) = 0$ then $f$ is not increasing on any interval containing $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, def-monotone-function, lem-derivative-of-a-power, thm-monotonicity-from-the-derivative, def-integer-power, lem-power-monotone, def-interval, lem-of-sign-rules, thm-algebra-of-continuous-functions, def-continuity-real, def-canonical-natural, lem-of-naturals-positive, def-neighbourhood-r, def-interior-closure-boundary-r, def-ordered-field, def-limit-point-r]
justified_by: []
forward_refs: [ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative]
aliases: []
landmark: false
short: "FALSE: $f'(c)=0$ forbids strict increase"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Stationary point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stationary_point"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

**False claim:** let $I \subseteq \mathbb{R}$ be an interval
([[def-interval]]), let $f : I \to \mathbb{R}$ and let $c \in I$ be a point at
which $f$ is differentiable with

$$f'(c) \;=\; 0$$

([[def-derivative]]). Then $f$ is **not** increasing on $I$, in the strict sense
of [[def-monotone-function]].

**Why it is tempting.** [[thm-monotonicity-from-the-derivative]] proves that
$f' > 0$ at every interior point gives an increasing function, and one reads the
implication backwards: if strict increase comes from a strictly positive
derivative, surely a derivative that fails to be strictly positive somewhere
must destroy the strict increase there. It does not. Claim 5 of that theorem is
the true converse, and it is non-strict: an increasing $f$ has $f' \ge 0$
wherever it is differentiable, and nothing forbids equality at isolated points.

## Facts & Assumptions

**Given:** The interval $I := \mathbb{R}$, the point $c := 0$ and the function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := x^{3}$ ([[def-integer-power]], [[def-interval]]).

[L1] Power rule ([[lem-derivative-of-a-power]], claim 2): for a natural $n \ge 1$ the function $x \mapsto x^{n}$ is differentiable at every real $c$ with derivative $\iota(n)c^{\,n-1}$.

[L2] Canonical naturals ([[def-canonical-natural]], [[lem-of-naturals-positive]]): $\iota(n) > 0$ for every natural $n \ge 1$, so in particular $\iota(3) > 0$.

[L3] Powers ([[def-integer-power]]): $a^{0} = 1$, $a^{2} = a \cdot a$, and $0 \cdot a = 0$, so $0^{2} = 0$.

[L4] Order arithmetic ([[lem-of-sign-rules]], [[def-ordered-field]]): a product of two positive reals is positive and a product of two negative reals is positive; the order is total and transitive, and trichotomy holds.

[L5] Monotonicity from the derivative ([[thm-monotonicity-from-the-derivative]], claim 2): for $J$ order-convex and $h : J \to \mathbb{R}$ continuous on $J$ and differentiable at every interior point of $J$ with $h' > 0$ there, $h$ is increasing on $J$.

[L6] Continuity ([[thm-algebra-of-continuous-functions]], claim 5): $x \mapsto x^{n}$ is continuous at every point of its domain for every natural $n$; and continuity passes to a subset of the domain ([[def-continuity-real]]).

[L7] Restriction of the derivative ([[def-derivative]]): if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with the same derivative; every point of an order-convex set with at least two elements is a limit point of it ([[def-limit-point-r]]); and a point $p$ is interior to a set $S$ exactly when $N_{\varepsilon}(p) \subseteq S$ for some real $\varepsilon > 0$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]]).

[L8] Increasing on a set $J$ means $h(x) < h(y)$ for all $x, y \in J$ with $x < y$ ([[def-monotone-function]]).

[L9] A positive base has positive natural powers ([[lem-power-monotone]], claim 1).

## Refutation

**Proof technique:** direct.

1.1 By [L1] with $n := 3$, the function $f$ is differentiable at every real $c$ with $f'(c) = \iota(3)\,c^{2}$. In particular $f'(0) = \iota(3) \cdot 0^{2} = \iota(3) \cdot 0 = 0$ by [L3]. [L1, L3]

1.2 For every real $c \ne 0$ one has $c^{2} > 0$: if $c > 0$ this is [L9]; if $c < 0$ then $c^{2} = c \cdot c$ is a product of two negative reals, hence positive by [L3] and [L4]. Therefore $f'(c) = \iota(3)c^{2} > 0$ for every $c \ne 0$, being a product of two positive reals by [L2] and [L4]. [L2, L3, L4, L9]

1.3 Put $I_1 := (-\infty, 0]$ and $I_2 := [0,\infty)$, both order-convex with at least two elements ([[def-interval]]). Every real $x < 0$ is interior to $I_1$, since $N_{|x|}(x) \subseteq (-\infty,0) \subseteq I_1$; and $0$ is **not** interior to $I_1$, since every $N_{\varepsilon}(0)$ contains $\varepsilon/2 > 0$, which is not in $I_1$. As every interior point of $I_1$ lies in $I_1$ and so satisfies $x \le 0$, the interior points of $I_1$ are exactly the reals $x < 0$. The same argument gives that the interior points of $I_2$ are exactly the reals $x > 0$. [L4, L7]

2.1 By [L6] the function $f$ is continuous on $\mathbb{R}$, hence $f|_{I_1}$ is continuous on $I_1$ and $f|_{I_2}$ is continuous on $I_2$. At every interior point $x$ of $I_1$ one has $x < 0$ by step 1.3, so $x$ is a limit point of $I_1$ by [L7] and $f|_{I_1}$ is differentiable at $x$ with derivative $f'(x) = \iota(3)x^{2} > 0$ by step 1.2 and [L7]. So [L5] gives that $f|_{I_1}$ is increasing on $I_1$; the same argument on $I_2$ gives that $f|_{I_2}$ is increasing on $I_2$. [step 1.2, step 1.3, L5, L6, L7]

3.1 Let $a, b \in \mathbb{R}$ with $a < b$. If $b \le 0$ then $a, b \in I_1$ and step 2.1 gives $f(a) < f(b)$. If $a \ge 0$ then $a, b \in I_2$ and step 2.1 gives $f(a) < f(b)$. Otherwise $b > 0$ and $a < 0$, so $a, 0 \in I_1$ with $a < 0$ gives $f(a) < f(0)$, while $0, b \in I_2$ with $0 < b$ gives $f(0) < f(b)$, and transitivity gives $f(a) < f(b)$. The three cases are exhaustive, since failing both $b \le 0$ and $a \ge 0$ means $b > 0$ and $a < 0$. So $f$ is increasing on $\mathbb{R}$ by [L8]. [step 2.1, L4, L8]

4.1 The false claim fails on this witness: $\mathbb{R}$ is an interval, $f$ is differentiable at $c = 0$ with $f'(0) = 0$ by step 1.1, and yet $f$ is increasing on $\mathbb{R}$ by step 3.1. So a vanishing derivative forbids nothing of the kind, and the claim is false. [step 1.1, step 3.1] ∎

## Remarks

- **What survives.** Claim 5 of [[thm-monotonicity-from-the-derivative]] is the correct converse and is non-strict: an increasing function differentiable at a point of its interval has $f' \ge 0$ there. This witness saturates that inequality at exactly one point, and no more can be said in general.

- **How large the vanishing set can be is not settled here.** The witness has $f' = 0$ at a single point. Nothing on this page says how big the set $\{ f' = 0 \}$ may be for an increasing $f$, and nothing here should be read as suggesting that it must be small.

- **The same function is the standard witness for a second false reading**, that a vanishing derivative marks a local extremum: $f$ has neither a local maximum nor a local minimum at $0$, precisely because it is increasing. [[ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative]] on the companion page computes the derivative in full and draws the further consequence, through [[thm-derivative-of-an-inverse]], that the inverse of this function is not differentiable at $0$.
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

### `lem-sign-preservation-near-a-limit`

````markdown
---
id: lem-sign-preservation-near-a-limit
kind: lemma
title: "If $\\lim_{x \\to c} f(x) = L \\ne 0$ then $|f| > |L|/2$ on a punctured neighbourhood of $c$; in particular if $L > 0$ then $f > L/2 > 0$ there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, def-neighbourhood-r, def-limit-point-r, cor-of-reverse-triangle, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: [lem-sign-preservation-for-function-limits]
landmark: true
short: "sign preservation, $|f| > |L|/2$"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f : A \to \mathbb{R}$ and suppose the limit of $f$
at $c$ exists with $\lim_{x \to c} f(x) = L$ and $L \ne 0$
([[def-function-limit]]). Then there is a real $\delta > 0$ such that every
$x \in A$ with $0 < |x - c| < \delta$ satisfies

$$|f(x)| \;>\; \frac{|L|}{2} \;>\; 0 ;$$

in particular $f(x) \ne 0$ for every such $x$. Moreover:

- if $L > 0$ then $f(x) > L/2 > 0$ for every such $x$;
- if $L < 0$ then $f(x) < L/2 < 0$ for every such $x$.

Consequently, writing

$$A_0 := \{\, x \in A \ : \ f(x) \ne 0 \,\},$$

the point $c$ is a limit point of $A_0$.

**The bound $|L|/2$, and not merely "$f \ne 0$", is what later proofs need.** The
quotient case of [[thm-algebra-of-function-limits]] estimates $1/|f|$ near $c$
and therefore needs a *positive lower* bound on $|f|$ there, and the last claim
is what lets a limit be taken on the smaller domain $A_0$ at all.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, a function $f : A \to \mathbb{R}$ and a real $L \ne 0$ with $\lim_{x \to c} f(x) = L$; and $A_0 := \{\, x \in A : f(x) \ne 0 \,\}$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$; and for $t > 0$, $|u| < t$ is equivalent to $-t < u < t$ ([[lem-of-abs-value]]).

[L3] Reverse triangle inequality: $\bigl| |u| - |v| \bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]).

[L4] Limit point: for every real $\rho > 0$ there is $x \in A$ with $0 < |x - c| < \rho$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L5] Order arithmetic in $\mathbb{R}$: trichotomy, so $u \ne 0$ with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; $0 < 1$ ([[cor-of-one-positive]]), hence $2 > 0$ and $2^{-1} > 0$ ([[lem-of-inverse-positive]]), so $t/2 > 0$ and $t - t/2 = t/2$ for $t > 0$ ([[lem-of-sign-rules]]); adding a constant to an inequality ([[lem-of-add-order]]); and of two positive reals the smaller is positive, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $L \ne 0$ we have $|L| \ne 0$ while $|L| \ge 0$, so trichotomy gives $|L| > 0$, and $\varepsilon := |L|/2 > 0$ with $|L| - |L|/2 = |L|/2$. [given, L2, L5]

2.1 Apply [L1] with this $\varepsilon$: fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < |L|/2$. [step 1.1, L1, choose]

3.1 For every such $x$ the reverse triangle inequality gives $\bigl| |f(x)| - |L| \bigr| \le |f(x) - L| < |L|/2$, hence $|f(x)| - |L| > -|L|/2$ and so $|f(x)| > |L| - |L|/2 = |L|/2 > 0$; in particular $|f(x)| \ne 0$ and therefore $f(x) \ne 0$. [step 2.1, L2, L3, L5]

3.2 If $L > 0$ then $|L| = L$, and for every such $x$ the estimate $|f(x) - L| < L/2$ gives $-L/2 < f(x) - L$, that is $f(x) > L - L/2 = L/2 > 0$. [step 2.1, L2, L5]

3.3 If $L < 0$ then $|L| = -L$, and for every such $x$ the estimate $|f(x) - L| < -L/2$ gives $f(x) - L < -L/2$, that is $f(x) < L - L/2 = L/2 < 0$. [step 2.1, L2, L5]

4.1 Let $\eta > 0$ be an arbitrary real and let $\rho$ be the smaller of $\delta$ and $\eta$, so $\rho > 0$. Since $c$ is a limit point of $A$ there is $x \in A$ with $0 < |x - c| < \rho$; that $x$ satisfies $0 < |x - c| < \delta$, hence $f(x) \ne 0$ by step 3.1, so $x \in A_0$ and $0 < |x - c| < \eta$. As $\eta$ was arbitrary, $c$ is a limit point of $A_0$. [step 3.1, L4, L5]

5.1 So on $A \cap N^{*}_{\delta}(c)$ the function is bounded away from $0$ by $|L|/2$ and carries the sign of $L$, and $c$ remains a limit point of the set $A_0$ where $f$ does not vanish. [step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

- **Why $|L|/2$ and not some other fraction.** Any $\varepsilon$ strictly between $0$ and $|L|$ gives a positive lower bound $|L| - \varepsilon$; the choice $\varepsilon = |L|/2$ makes the bound $|L|/2$, which is the form used downstream and needs only that $2$ is invertible and positive ([[cor-of-one-positive]], [[lem-of-inverse-positive]]).

- **The last claim is the one that is easy to forget.** Restricting a quotient to the set where the denominator does not vanish is useless unless $c$ is still a limit point of that set, since [[def-function-limit]] is stated only at a limit point. Step 4.1 is exactly that check, and it is what [[thm-algebra-of-function-limits]] cites when it forms $A_0$.

- **Nothing here says anything about $f(c)$.** As always the point $c$ itself is excluded by $0 < |x - c|$, so $f(c)$ may be $0$ even when $L \ne 0$; the function of [[fs-limit-equals-value]], read with the roles of $0$ and $1$ exchanged, is such an example.
````

