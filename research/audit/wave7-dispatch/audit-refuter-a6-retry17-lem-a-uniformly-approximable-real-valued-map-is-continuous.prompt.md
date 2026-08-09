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

- critical risk (14): 15 declared dependencies; 15 cited facts; 15 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `lem-a-uniformly-approximable-real-valued-map-is-continuous`

Normalized current SHA-256: `a664b7c34641d6c7f89409829215c415cce2a99af4b9b41e17579abb70b7b3d6`

The complete current item follows, including frontmatter:

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

## Wave 7 provenance row for the target

```json
{
  "id": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Uniform_convergence",
    "https://en.wikipedia.org/wiki/Weierstrass_M-test"
  ],
  "rationale": "The uniform-limit theorem and Weierstrass M-test supply the two clauses; the library proves both for an arbitrary topological domain with explicit real-series dependencies.",
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
      "source": "def-continuous-map-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T}_X)$ and $(Y, \\mathcal{T}_Y)$ be topological spaces\n([[def-topological-space]]), let $f : X \\to Y$ be a function and let $x \\in X$.\nNeighbourhoods are as in [[def-neighbourhood-top]].\n\n$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the\npreimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.\n\n$f$ is **continuous** if it is continuous at every point of $X$.\n\n**The same condition with open sets only.** $f$ is continuous at $x$ if and only\nif for every open $V \\subseteq Y$ with $f(x) \\in V$ there is an open\n$U \\subseteq X$ with $x \\in U$ and $f[U] \\subseteq V$. Indeed, if $f$ is\ncontinuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of\n$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \\ni x$,\nwhich satisfies $f[U] \\subseteq V$. Conversely, given the displayed condition and\na neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \\in V_0 \\subseteq V$ and\nthen open $U \\ni x$ with $f[U] \\subseteq V_0$; then $x \\in U \\subseteq f^{-1}[V_0] \\subseteq f^{-1}[V]$,\nso $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the\nsame statement written twice.\n\n**Preimage, not image.** $f^{-1}[V] = \\{\\, x \\in X : f(x) \\in V \\,\\}$\nis the preimage in the sense of [[def-injection-surjection-bijection]] and is\ndefined for every function, invertible or not; no inverse function is being\nasserted to exist. Continuity is a condition on preimages throughout, and the\ncorresponding conditions on images define the *open* and *closed* maps of a later\nitem, which are different notions.",
      "uses": [
        "1.2",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-continuity-characterisations-top",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T}_X)$ and $(Y, \\mathcal{T}_Y)$ be topological spaces, let\n$f : X \\to Y$ be a function, and let $\\mathcal{S}$ be a subbasis for\n$\\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions\nare equivalent.\n\n- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).\n- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$.\n- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \\subseteq Y$.\n- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \\in \\mathcal{S}$.\n- **(e)** $f[\\overline{A}] \\subseteq \\overline{f[A]}$ for every $A \\subseteq X$,\n  closures being taken in $X$ and in $Y$ respectively\n  ([[def-interior-closure-boundary-top]]).\n\nCondition (d) is what makes continuity checkable against a generating family\nrather than against every open set, and it holds for a *basis* as well, a basis\nbeing in particular a subbasis for the topology it generates.",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "Define $d_{\\mathbb{R}} : \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}$ by\n$d_{\\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:\n\n1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is\n   called the **usual metric** of $\\mathbb{R}$.\n2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval\n   ([[def-interval]], [[def-metric-ball]])\n   $$B(x,r) = (x-r,\\ x+r),$$\n   and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$.\n3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of\n   $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$\n   there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the\n   **usual topology** of $\\mathbb{R}$.\n4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space\n   ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so\n   $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metrizable-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is\n**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose\nmetric topology is $\\mathcal{T}$, that is $\\mathcal{T} = \\mathcal{T}_d$\n([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**\n$\\mathcal{T}$.\n\n**The definition presupposes that $\\mathcal{T}_d$ is a topology in the sense of\n[[def-topological-space]], and it is.** By [[def-metric-topology]] both\n$\\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by\n[[thm-metric-open-set-algebra]] the family $\\mathcal{T}_d$ is closed under\narbitrary unions, which is (T2), and under intersections of $n \\ge 1$ members,\nwhich contains (T3). So every metric space is a topological space, and the\nmetric-space development of this library is a special case of the present one.\n\n**The standard local notions in the two developments agree after translating\ntheir neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the\ntopology $\\mathcal{T}_d$.\n\n- *Neighbourhoods and balls.* [[def-metric-topology]] uses \"neighbourhood\" for\n  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a\n  non-open superset of such a set. Thus the two collections are not literally\n  equal, but the open metric neighbourhoods are cofinal in the broader\n  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are\n  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:\n  any neighbourhood $N$ contains an open $U \\ni x$, hence a ball around $x$ by\n  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice\n  ([[lem-metric-ball-neighbourhood-base]]).\n- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines\n  them by the same conditions with balls in place of neighbourhoods, and the\n  previous bullet makes the two conditions equivalent; the metric closure is the\n  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the\n  definition used here ([[def-interior-closure-boundary-top]]). So the two\n  closures, the two interiors and the two boundaries are the same three\n  operations.\n- *Convergence.* $x_k \\to p$ in the sense of [[def-sequence-convergence-top]] is\n  \"eventually in every neighbourhood of $p$\", and by the first bullet this is\n  \"eventually in every ball around $p$\", which is [[def-metric-convergence]].\n- *Continuity.* $\\varepsilon$-$\\delta$ continuity at $a$\n  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball\n  around $a$ mapped into it, which by the first bullet is continuity at $a$ in\n  the sense of [[def-continuous-map-top]].\n\n- *Subspaces.* For $A \\subseteq X$ the subspace topology\n  $\\{\\, U \\cap A : U \\in \\mathcal{T}_d \\,\\}$ of [[def-subspace-topology-top]] is\n  exactly the metric topology of the subspace metric $d_A$\n  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase\n  *subspace topology* in this library name one thing. Indeed\n  $B_A(a,r) = B_X(a,r) \\cap A$: a trace $U \\cap A$ is $d_A$-open, since each of\n  its points $a$ has $B_X(a,r) \\subseteq U$ and hence $B_A(a,r) \\subseteq U \\cap A$;\n  and a $d_A$-open $W$ is the trace of\n  $U := \\bigcup \\{\\, B_X(a,r) : a \\in W,\\ r > 0,\\ B_X(a,r) \\cap A \\subseteq W \\,\\}$,\n  which is $d_X$-open, satisfies $U \\cap A = W$, and involves no choice principle,\n  the union being taken over a set of pairs rather than over a selection.\n\nConsequently the metric-space notions of interior, closure, boundary, density,\nconvergence, continuity and subspace agree with the topological notions here,\nand statements about them transfer once a metric is named. For neighbourhoods\nthe transfer uses the explicit convention change above: a metric-page\nneighbourhood is an open topological neighbourhood, while every topological\nneighbourhood contains one.\n\n**Metrizability is a topological property; the metric is not part of it.** If\n$h : X \\to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$\nmetrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on\n$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and\n$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\\mathcal{T}_d$ to a\nbasis of $\\mathcal{T}_{d'}$ and $\\mathcal{T}_{d'} = h[\\mathcal{T}_d] = \\mathcal{T}_Y$.\nHence $Y$ is metrizable. The metric itself, however, is **not** determined by the\ntopology: two metrics on one set may induce the same topology without agreeing,\nwhich is exactly topological equivalence ([[def-equivalent-metrics]]), and\nproperties of a metric that are not properties of its topology, boundedness among\nthem, are therefore not properties of a metrizable space.\n\n**Two things every metrizable space has.** It is **Hausdorff**: distinct points\nhave disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied\nto any metric inducing the topology. And it is **first countable**\n([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either\nfailure is therefore an obstruction to metrizability, and this page uses the\nfirst of them to exhibit a topology induced by no metric.\n\n**Sequential limits in a metrizable space are unique, so the notation\n$\\lim_k x_k$ is available there.** In a metric space a sequence has at most one\nlimit ([[lem-metric-limits-unique]]), and by the agreement of convergence above\nthat uniqueness is a statement about the topology alone; so within a metrizable\nspace, and only there, this page writes $\\lim_k x_k$ in the ordinary way. In a\ngeneral space the symbol is unavailable ([[def-sequence-convergence-top]]).\n\n**The usual topology of $\\mathbb{R}$.** The absolute value makes $\\mathbb{R}$ a\nmetric space under $d_{\\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded\nopen intervals, and the resulting metric topology is what claim 3 of\n[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\\mathbb{R}$.\nThat is the topology meant by the phrase throughout these two pages, and\n$\\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on\nthese two pages is proved from the metric $d_{\\mathbb{R}}$ and the bridge above,\nand no example re-derives any of it.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-topology",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]).\n\nA subset $U \\subseteq X$ is **open in $(X,d)$** if for every $x \\in U$ there is a\nreal $r > 0$ with $B(x,r) \\subseteq U$ ([[def-metric-ball]]). A subset\n$F \\subseteq X$ is **closed in $(X,d)$** if its complement $X \\setminus F$ is\nopen.\n\nThe collection\n\n$$\\mathcal{T}_d := \\{\\, U \\subseteq X : U \\text{ is open in } (X,d) \\,\\}$$\n\nof all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$\nthat is both open and closed is called **clopen**.\n\n**Two sets are open for trivial reasons.** $\\emptyset$ is open, because the\ndefining condition quantifies over no points; and $X$ is open, because\n$B(x,r) \\subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and\n$\\emptyset$ are also closed, and both are clopen.\n\n**A neighbourhood of a point $x$** is any open set containing $x$. The condition\nabove therefore reads: $U$ is open exactly when every point of $U$ has a ball\naround it inside $U$, and it is the balls alone that have to be tested.\n\n**The metric, not the set, determines $\\mathcal{T}_d$.** Two metrics on the same\nset may have different metric topologies, and two different metrics may have the\nsame one; the systematic comparison is [[def-equivalent-metrics]].",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-topology-basis-subbasis",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\nA family $\\mathcal{B} \\subseteq \\mathcal{T}$ is a **basis for $\\mathcal{T}$** if\nevery open set is a union of members of $\\mathcal{B}$: for every\n$U \\in \\mathcal{T}$ there is $\\mathcal{B}_U \\subseteq \\mathcal{B}$ with\n$U = \\bigcup \\mathcal{B}_U$. Equivalently, and this is the form used in proofs,\n\n$$\\text{for every } U \\in \\mathcal{T} \\text{ and every } x \\in U \\text{ there is } B \\in \\mathcal{B} \\text{ with } x \\in B \\subseteq U .$$\n\n*The two forms say the same thing.* If every open $U$ is such a union and\n$x \\in U$, then $x$ lies in one of the sets united, which is a member of\n$\\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then\n$U = \\bigcup \\{\\, B \\in \\mathcal{B} : B \\subseteq U \\,\\}$, since each such $B$ is\ncontained in $U$ and each $x \\in U$ lies in one of them. Note that\n$\\bigcup \\varnothing = \\varnothing$, so the empty open set is covered by the empty\nsubfamily and needs no member of $\\mathcal{B}$. The members of a basis are called\n**basic open sets**.\n\n**The topology generated by a family.** Let $\\mathcal{S} \\subseteq \\mathcal{P}(X)$\nbe *any* family of subsets of $X$. Then\n\n$$\\langle \\mathcal{S} \\rangle := \\bigcap \\{\\, \\mathcal{T}' : \\mathcal{T}' \\text{ is a topology on } X \\text{ with } \\mathcal{S} \\subseteq \\mathcal{T}' \\,\\}$$\n\nis a topology on $X$, it contains $\\mathcal{S}$, and it is contained in every\ntopology on $X$ that contains $\\mathcal{S}$. It is called the **topology\ngenerated by $\\mathcal{S}$**, and $\\mathcal{S}$ is a **subbasis** for a topology\n$\\mathcal{T}$ when $\\mathcal{T} = \\langle \\mathcal{S} \\rangle$.\n\n*This is well posed, and the obligation is discharged here.* The collection being\nintersected is nonempty, because $\\mathcal{P}(X)$ is a topology on $X$ containing\n$\\mathcal{S}$; so the intersection is an intersection of a nonempty family of\nsubsets of $\\mathcal{P}(X)$ and is a set. It is a topology: $\\varnothing$ and $X$\nlie in every topology on $X$, hence in the intersection, which is (T1); if\n$\\mathcal{S}' \\subseteq \\langle \\mathcal{S} \\rangle$ then $\\mathcal{S}'$ is a\nsubfamily of each $\\mathcal{T}'$ in the collection, so $\\bigcup \\mathcal{S}'$ lies\nin each $\\mathcal{T}'$ and hence in the intersection, which is (T2); and the same\nargument with $U \\cap V$ gives (T3). It contains $\\mathcal{S}$ because every\n$\\mathcal{T}'$ in the collection does, and it is contained in each such\n$\\mathcal{T}'$ because an intersection is contained in each of its members. So\n$\\langle \\mathcal{S} \\rangle$ is the coarsest topology on $X$ containing\n$\\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely\ndetermined by $\\mathcal{S}$.\n\n**Neither notion is intrinsic to the family alone.** \"$\\mathcal{B}$ is a basis\nfor $\\mathcal{T}$\" and \"$\\mathcal{S}$ is a subbasis for $\\mathcal{T}$\" are\nrelations between a family and a topology, not properties of the family. The\nquestion of which families are a basis *for some* topology, and how the topology\ngenerated by a subbasis is computed from it, is settled by the next item.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-triangle-inequality",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$. Then\n\n$$|x + y| \\le |x| + |y|.$$",
      "uses": [
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "3.3"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is\n$K \\in \\mathbb{N}$ with\n\n$$0 \\;\\le\\; a_k \\;\\le\\; b_k \\qquad \\text{for all } k \\ge K .$$\n\nThen:\n\n1. if $\\sum b_k$ converges then $\\sum a_k$ converges ([[def-series]]);\n2. if $\\sum a_k$ diverges then $\\sum b_k$ diverges.\n\nThe same statement holds verbatim for series with a general starting index $m$,\napplied to the shifted sequences of [[def-series]].\n\nThe hypothesis is on the terms from some index on, not on all of them: finitely\nmany terms of either sequence may violate it, or be negative, without affecting\nthe conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that\nindex on.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-absolute-convergence-implies-convergence",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals. If the series $\\sum |a_k|$ converges\n([[def-series]]) then the series $\\sum a_k$ converges.\n\nA series with the property that $\\sum |a_k|$ converges is called **absolutely\nconvergent**; the lemma says that absolute convergence implies convergence.\n\nThe same statement holds for a family from a general starting index $m$, being\nthis statement applied to the shifted sequence $j \\mapsto a_{j+m}$\n([[def-series]]).\n\n**The converse is false**, and the standard witness is the alternating harmonic\nseries. That witness is not available on this page: its convergence is the\nalternating series test, which is not proved here. Nothing below asserts a\nconverse, and no item on this page uses one.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$,\nlet $s_n = \\sum_{k<n} a_k$ be its partial sums and let\n$S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]).\nThen:\n\n1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every\n   $n$;\n2. $\\sum a_k$ converges **if and only if** $S$ is bounded above\n   ([[def-bounded-set]]), and in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$\n   so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$;\n3. if $S$ is not bounded above then $s_n \\to +\\infty$\n   ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges.\n\nThis is the theorem that makes the nonnegative theory work: for terms of one\nsign, convergence is a boundedness question and no candidate limit is ever\nneeded. Every comparison test on this page is an application of it.",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L8",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and\na **sequence of reals** is a function $a : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), written $(a_k)$; recall that $\\mathbb{N}$ contains $0$.\n\n**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial\nsums** is\n\n$$s_n \\;:=\\; \\sum_{k < n} a_k \\qquad (n \\in \\mathbb{N}),$$\n\nthe finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and\n$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses\nthat define the finite sum. Note that $s_n$ is the sum of the $n$ terms\n$a_0, \\dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last\none.\n\n**Convergence, the sum, divergence.** The **series** of $(a_k)$, written\n$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges\n([[def-real-limit]]), and then the **sum of the series** is\n\n$$\\sum_{k=0}^{\\infty} a_k \\;:=\\; \\lim_{n} s_n .$$\n\nThe series **diverges** when $(s_n)$ does not converge. A convergent sequence of\nreals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names\na single real number and nothing further has to be checked for it to be\nwell defined.\n\n**Series with a general starting index.** Let $m \\in \\mathbb{N}$ and let $a$ be a\nfunction on $\\{\\, k \\in \\mathbb{N} : k \\ge m \\,\\}$, which we call a **family from\n$m$** and write $(a_k)_{k \\ge m}$. The series\n\n$$\\sum_{k \\ge m} a_k$$\n\nis by definition the series of the sequence $b_j := a_{j + m}$,\n$j \\in \\mathbb{N}$, which is a genuine sequence of reals; it converges exactly\nwhen that series converges, and its sum is then written\n$\\sum_{k = m}^{\\infty} a_k$. Its partial sums are\n\n$$\\sum_{k=m}^{n-1} a_k \\;=\\; \\sum_{j < n-m} a_{m+j} \\qquad (n \\ge m),$$\n\nin the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum\n$0$. A sequence on $\\mathbb{N}$ is the case $m = 0$, and the two readings of\n$\\sum a_k$ agree there, since $b_j = a_j$.\n\n**This clause is not a convenience.** Sequences in this library are functions on\n$\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the\nclassical series are built from expressions that are undefined at the index $0$:\n$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \\ge 1$. Writing such a series as\n$\\sum_{k \\ge 1} a_k$ names an honest object, whereas writing it as a sequence on\n$\\mathbb{N}$ would require a value at an index where the defining expression has\nnone. Every statement on this page says which starting index it uses.\n\n**Tail series.** For $N \\in \\mathbb{N}$, the **$N$-th tail series** of\n$\\sum a_k$ is $\\sum_{k \\ge N} a_k$, that is the series of the $N$-th tail\n$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The\n$0$-th tail series is the series itself.",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-sequence-basics",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $(x_k)$, $(y_k)$ be\nsequences in $F$, with convergence in $F$, Cauchyness in $F$, boundedness and\nsubsequences as in [[def-sequences-in-an-ordered-field]]. Then:\n\n1. **Limits are unique.** If $x_k \\to L$ and $x_k \\to L'$ in $F$, then $L = L'$.\n   A convergent sequence therefore has exactly one limit in $F$ and the notation\n   $\\lim_k x_k$ denotes it unambiguously. This is the licence under which the\n   remaining clauses are written as equations between limits, and it is not new\n   here: [[def-sequences-in-an-ordered-field]] already establishes it, in an\n   arbitrary ordered field and with no completeness or Archimedean hypothesis.\n   It is restated as clause 1 so that this lemma is self-contained as the\n   citation target of the whole abstract chain on this page.\n2. **Limits preserve non-strict inequalities.** If $(x_k)$ and $(y_k)$ both\n   converge in $F$ and $x_k \\le y_k$ for every $k$, then\n\n   $$\\lim_k x_k \\;\\le\\; \\lim_k y_k .$$\n\n3. **Convergent implies Cauchy.** If $(x_k)$ converges in $F$, it is Cauchy in\n   $F$.\n4. **Cauchy implies bounded.** If $(x_k)$ is Cauchy in $F$, it is bounded.\n5. **A Cauchy sequence with a convergent subsequence converges.** If $(x_k)$ is\n   Cauchy in $F$ and some subsequence $(x_{n_j})$ converges in $F$, then $(x_k)$\n   converges in $F$ as well, and\n\n   $$\\lim_k x_k \\;=\\; \\lim_j x_{n_j} .$$\n\n   Both sides are asserted to exist: the right-hand side by hypothesis, the\n   left-hand side as part of the conclusion.\n\n**Why this is a separate item.** Each of the five is proved in this library for\nsequences of *reals*, and none of those proofs may be cited here.\n[[rem-sequence-conventions]] is explicit about it: a theorem about sequences of\nreals is a theorem about $\\mathbb{R}$, and the fact that its argument would\ntransfer to an arbitrary ordered field is a statement about the argument, not a\nlicence to cite the result. The five are collected here, proved from the ordered\nfield axioms alone, so that the completeness equivalences of this page have one\nplace to cite instead of five inline reconstructions.",
      "uses": [
        "3.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Fix $x_0 \\in X$ and an open $V \\subseteq \\mathbb{R}$ with $f(x_0) \\in V$; by [L3] fix a real $r>0$ with $(f(x_0)-r, f(x_0)+r) \\subseteq V$. [given, L3, choose]",
      "step": "1.1",
      "inputs": [
        "given",
        "L3",
        "choose"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $g, h : X \\to \\mathbb{R}$ be continuous, let $x_1 \\in X$ and let real $\\eta>0$; arguing directly from continuity of $g$ and of $h$ at $x_1$ (via [L1] and [L2]) separately, fix open $U_1, U_2 \\ni x_1$ with $|g(x)-g(x_1)| < \\eta/2$ on $U_1$ and $|h(x)-h(x_1)|<\\eta/2$ on $U_2$. [given, L1, L2, choose]",
      "step": "1.2",
      "inputs": [
        "given",
        "L1",
        "L2",
        "choose"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Fix $x \\in X$. The real sequence $(g_n(x))_{n \\in \\mathbb{N}}$ satisfies $0 \\le |g_n(x)| \\le M_n$ for every $n$, and $\\sum M_n$ converges by hypothesis, so [L7] gives that $\\sum |g_n(x)|$ converges, and hence $\\sum g_n(x)$ converges; define $F(x) := \\sum_{n=0}^{\\infty} g_n(x)$ and $s_N(x) := \\sum_{n<N} g_n(x)$, so $s_N(x) \\to F(x)$ as $N \\to \\infty$. [given, L7, construct]",
      "step": "1.3",
      "inputs": [
        "given",
        "L7",
        "construct"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "Write $\\sigma_N := \\sum_{n<N} M_n$ and $S := \\sum_{n=0}^{\\infty} M_n$; since $M_n \\ge 0$ for every $n$, [L8] gives that $(\\sigma_N)$ is nondecreasing with $\\sigma_N \\le S$ for every $N$, and $\\sigma_N \\to S$. So $S - \\sigma_N \\ge 0$ for every $N$ and $S-\\sigma_N \\to 0$; given a real $\\varepsilon>0$, fix $N \\in \\mathbb{N}$ with $S - \\sigma_N < \\varepsilon$. [given, L8, choose]",
      "step": "1.4",
      "inputs": [
        "given",
        "L8",
        "choose"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [A1] applied with $\\varepsilon := r/3 > 0$, fix a continuous $g : X \\to \\mathbb{R}$ with $|f(x)-g(x)| < r/3$ for every $x \\in X$. [step 1.1, A1, choose]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "A1",
        "choose",
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "$U_1 \\cap U_2$ is open, contains $x_1$, and for $x \\in U_1 \\cap U_2$: $|(g+h)(x)-(g+h)(x_1)| \\le |g(x)-g(x_1)| + |h(x)-h(x_1)| < \\eta$ by [L4]. [step 1.2, L4, algebra]",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "L4",
        "algebra",
        "1.2"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "For every $x \\in X$ and every $K > N$: $|s_K(x)-s_N(x)| = \\big|\\textstyle\\sum_{N \\le n < K} g_n(x)\\big| \\le \\sum_{N \\le n < K} |g_n(x)| \\le \\sum_{N \\le n < K} M_n = \\sigma_K - \\sigma_N \\le S - \\sigma_N$, by [L6], the hypothesis $|g_n(x)| \\le M_n$, and $\\sigma_K \\le S$ from step 1.4. [step 1.4, step 1.3, L6, algebra]",
      "step": "2.3",
      "inputs": [
        "step 1.4",
        "step 1.3",
        "L6",
        "algebra",
        "1.4",
        "1.3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "$U := g^{-1}\\big[(g(x_0)-r/3,\\, g(x_0)+r/3)\\big]$ is open by [L2], since $g$ is continuous by step 2.1, and $x_0 \\in U$, since $|g(x_0)-g(x_0)| = 0 < r/3$. [step 2.1, L2]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L2",
        "2.1"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "Since $x_1 \\in X$ and real $\\eta>0$ were arbitrary, $g+h$ is continuous on $X$; iterating this over finitely many further sums, any finite sum $g_0+\\cdots+g_{N-1}$ of continuous real-valued functions on $X$ is continuous, for every $N \\ge 1$, with the case $N=0$ (the zero function) continuous as a constant. [step 2.2]",
      "step": "3.2",
      "inputs": [
        "step 2.2",
        "2.2"
      ]
    },
    {
      "id": "step-3.3",
      "claim": "By step 2.3, $|s_K(x)-s_N(x)| \\le S-\\sigma_N$ for every $K > N$; as $K \\to \\infty$, $s_K(x) \\to F(x)$ by step 1.3, so [L9] applied to the two non-strict bounds $-(S-\\sigma_N) \\le s_K(x)-s_N(x) \\le S-\\sigma_N$ (equivalent to step 2.3 by [L5]) gives $-(S-\\sigma_N) \\le F(x)-s_N(x) \\le S-\\sigma_N$, that is $|F(x)-s_N(x)| \\le S-\\sigma_N < \\varepsilon$ by [L5] and step 1.4, for every $x \\in X$, with $N$ independent of $x$. [step 2.3, step 1.4, step 1.3, L5, L9]",
      "step": "3.3",
      "inputs": [
        "step 2.3",
        "step 1.4",
        "step 1.3",
        "L5",
        "L9",
        "2.3",
        "1.3",
        "1.4"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "For $x \\in U$: $|f(x)-f(x_0)| \\le |f(x)-g(x)| + |g(x)-g(x_0)| + |g(x_0)-f(x_0)| < r/3+r/3+r/3 = r$, by [L4] (twice), step 2.1 (the first and third terms) and the defining property of $U$ (step 3.1, the middle term). [step 2.1, step 3.1, L4, algebra]",
      "step": "4.1",
      "inputs": [
        "step 2.1",
        "step 3.1",
        "L4",
        "algebra",
        "2.1",
        "3.1"
      ]
    },
    {
      "id": "step-4.2",
      "claim": "For $N \\in \\mathbb{N}$, $s_N = g_0 + \\cdots + g_{N-1}$ is a finite sum of continuous functions, hence continuous on $X$, by step 3.2. [step 3.2]",
      "step": "4.2",
      "inputs": [
        "step 3.2",
        "3.2"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "By step 4.1, $f(x) \\in (f(x_0)-r,f(x_0)+r) \\subseteq V$ for every $x \\in U$ (step 1.1), so $f[U] \\subseteq V$; with $U$ open and $x_0 \\in U$ (step 3.1), and $V$ an arbitrary open set containing $f(x_0)$ (step 1.1), $f$ is continuous at $x_0$ by [L1]. [step 4.1, step 3.1, step 1.1, L1]",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "step 3.1",
        "step 1.1",
        "L1",
        "4.1",
        "1.1",
        "3.1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Since $x_0 \\in X$ was arbitrary, $f$ is continuous on $X$; this proves the main clause. [step 5.1]",
      "step": "6.1",
      "inputs": [
        "step 5.1",
        "5.1"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "Since $s_N$ is continuous by step 4.2 and real $\\varepsilon>0$ was arbitrary, the hypothesis of the main clause (steps 1.1–6.1) is met by $F$, taking $g_\\varepsilon := s_N$; hence $F$ is continuous on $X$. This, with step 1.3, proves the second clause. [step 3.3, step 4.2, step 6.1, discharge-construct] ∎",
      "step": "7.1",
      "inputs": [
        "step 3.3",
        "step 4.2",
        "step 6.1",
        "discharge-construct",
        "4.2",
        "1.1",
        "6.1",
        "1.3",
        "3.3"
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
      "evidence": "statement and step 1.2: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "statement and step 1.3: degenerate or equality case was inspected"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The statement has no distinguished endpoint and codomain-boundary behavior parameter or case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
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
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-topological-space",
    "declared_target": "def-topological-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
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
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
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
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-topology-basis-subbasis",
    "declared_target": "def-topology-basis-subbasis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-metrizable-space",
    "declared_target": "def-metrizable-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-metric-topology",
    "declared_target": "def-metric-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
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
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "cross-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-absolute-convergence-implies-convergence",
    "declared_target": "lem-absolute-convergence-implies-convergence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "cross-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
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
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
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
  },
  {
    "source": "lem-a-uniformly-approximable-real-valued-map-is-continuous",
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
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (15)

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

### `def-metric-topology`

````markdown
---
id: def-metric-topology
kind: definition
title: "The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-ball, def-metric-space]
justified_by: []
aliases: [def-open-set-metric, def-closed-set-metric]
landmark: true
short: "metric topology"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

## Remarks

- **What "topology" means here.** $\mathcal{T}_d$ is defined above as a
  collection of subsets of $X$; the abstract notion of a topological space, a
  collection of subsets closed under arbitrary unions and finite intersections
  taken as primitive data, is introduced on a later page and is not used
  here. What is proved
  here is that $\mathcal{T}_d$ has exactly those closure properties
  ([[thm-metric-open-set-algebra]]), which is what licenses the word.
- **Open and closed are not opposites.** A set may be neither ($[0,1)$ inside
  $\mathbb{R}$, once the usual metric is available from
  [[lem-real-line-is-a-metric-space]]) or both ($\emptyset$ and $X$ always, and
  in some spaces every subset at once, as the discrete metric on the companion
  page shows). "Not open" is never a synonym for "closed".
- **Closedness is complementation, and nothing else, at this stage.** The
  description of closed sets by limits of sequences, and the description of the
  closure as an infimum of distances, are theorems proved later on this page
  ([[thm-metric-closure-characterisation]], [[thm-metric-sequential-closure]]),
  not part of the definition.
````

### `def-metrizable-space`

````markdown
---
id: def-metrizable-space
kind: definition
title: "Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-metric-topology, def-metric-space, thm-metric-open-set-algebra, def-equivalent-metrics,
       def-subspace-topology-top, def-isometry-and-metric-embedding,
       def-metric-ball, def-neighbourhood-top, def-interior-closure-boundary-top, def-continuous-map-top,
       def-sequence-convergence-top, def-homeomorphism-and-open-maps, def-first-countable-top,
       lem-metric-ball-neighbourhood-base, thm-metric-hausdorff-separation, def-metric-convergence,
       def-metric-continuity, thm-metric-closure-characterisation, def-metric-interior-closure-boundary,
       lem-metric-limits-unique, lem-real-line-is-a-metric-space]
justified_by: []
aliases: [def-metrizable, def-usual-topology-of-r]
landmark: true
short: "metrizable space; the usual topology of $\\mathbb{R}$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 481fc46dfb5166d1c7254e753d62020d03b9c022b265f7afd686ea1f9dd7ff0a
    item_sha256: 36f4a57f6ea43198decefdca5ecb7883fa754f6a0fa1ef34d13dc55d3704c788
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The standard local notions in the two developments agree after translating
their neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the
topology $\mathcal{T}_d$.

- *Neighbourhoods and balls.* [[def-metric-topology]] uses "neighbourhood" for
  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a
  non-open superset of such a set. Thus the two collections are not literally
  equal, but the open metric neighbourhoods are cofinal in the broader
  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are
  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:
  any neighbourhood $N$ contains an open $U \ni x$, hence a ball around $x$ by
  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice
  ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

- *Subspaces.* For $A \subseteq X$ the subspace topology
  $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ of [[def-subspace-topology-top]] is
  exactly the metric topology of the subspace metric $d_A$
  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase
  *subspace topology* in this library name one thing. Indeed
  $B_A(a,r) = B_X(a,r) \cap A$: a trace $U \cap A$ is $d_A$-open, since each of
  its points $a$ has $B_X(a,r) \subseteq U$ and hence $B_A(a,r) \subseteq U \cap A$;
  and a $d_A$-open $W$ is the trace of
  $U := \bigcup \{\, B_X(a,r) : a \in W,\ r > 0,\ B_X(a,r) \cap A \subseteq W \,\}$,
  which is $d_X$-open, satisfies $U \cap A = W$, and involves no choice principle,
  the union being taken over a set of pairs rather than over a selection.

Consequently the metric-space notions of interior, closure, boundary, density,
convergence, continuity and subspace agree with the topological notions here,
and statements about them transfer once a metric is named. For neighbourhoods
the transfer uses the explicit convention change above: a metric-page
neighbourhood is an open topological neighbourhood, while every topological
neighbourhood contains one.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

## Remarks

- **The usual topology of $\mathbb{R}$ is not a second notion alongside the
  order-native development built earlier in this library.**
  [[rem-r-native-topology-scope]] records that the two collections of open subsets
  of $\mathbb{R}$ — the one defined from balls and the one defined from
  order-neighbourhoods — are literally the same collection, and hence that
  interior, closure, boundary, limit point, density and sequential convergence
  agree on the two sides. That identification is quoted here for orientation only;
  the order-topology example on the companion page is where the order-native
  description is used.

- **A metrizable space comes with many metrics and no canonical one.** The
  statement "$X$ is metrizable" asserts existence, and every argument that uses a
  metric must name one first. Where two metrics are compared, the vocabulary is
  that of [[def-equivalent-metrics]]: Lipschitz, uniform and topological
  equivalence, of which only the last is visible to the topology.

- **Metrization theorems are not proved here.** Necessary conditions are easy —
  Hausdorff, first countable — and sufficient ones require separation and
  countability axioms that this page does not develop. Nothing below asserts that
  a space *is* metrizable except by exhibiting a metric.

- **Not every topology is metrizable**, and the cheapest witness is the
  indiscrete topology on a two-point set, which is not Hausdorff. That is
  recorded on this page as a false statement and witnessed on the companion page.
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

### `def-topological-space`

````markdown
---
id: def-topological-space
kind: definition
title: "Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: [def-topology, def-open-set-top, def-closed-set-top]
landmark: true
short: "topology, open, closed, clopen"
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
    - title: "Topological space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topological_space"
    - title: "Comparison of topologies (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Comparison_of_topologies"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

## Remarks

- **The topology is part of the data.** Two different topologies on one set are
  two different topological spaces, exactly as two different metrics on one set
  are two different metric spaces. Every statement below that says "the space
  $X$" has a topology fixed in advance.

- **Nothing is assumed beyond (T1)–(T3).** In particular no separation property
  is built into the word *space* here: distinct points need not lie in disjoint
  open sets, singletons need not be closed, and both failures occur in the
  standard topologies defined on the next item. Where a separation property is
  used it is stated as a hypothesis.

- **This library always writes *coarser* and *finer*.** The synonyms
  *smaller/larger* are unambiguous, but *weaker/stronger* is used in both
  directions in the literature and is avoided here entirely.

- **Why "arbitrary unions, finite intersections" and not the reverse.** The
  asymmetry is not a convention: it is what makes the metric notion of open set
  ([[def-metric-topology]]) an instance, and an arbitrary intersection of open
  sets genuinely need not be open. The failure is recorded on this page as a
  false statement, with witnesses in two different spaces.
````

### `def-topology-basis-subbasis`

````markdown
---
id: def-topology-basis-subbasis
kind: definition
title: "Basis and subbasis for a topology, and the topology generated by a family of sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space]
justified_by: []
aliases: [def-basis-top, def-subbasis-top, def-generated-topology]
landmark: true
short: "basis, subbasis, generated topology"
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
    - title: "Base (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Base_(topology)"
    - title: "Subbase (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subbase"
    - title: "J. Munkres, Topology, 2nd ed., §13"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

## Remarks

- **Every topology is a basis for itself**, so a basis always exists; the point
  of a basis is to be smaller and more explicit than $\mathcal{T}$, and the point
  of a subbasis is to be smaller still at the cost of one round of finite
  intersections.

- **Two extremes of the generated topology.** $\langle \varnothing \rangle$ is
  the indiscrete topology, since $\{\varnothing, X\}$ is a topology containing the
  empty family and is contained in every topology. At the other end,
  $\langle \mathcal{P}(X) \rangle = \mathcal{P}(X)$ is the discrete topology.

- **Generation is monotone and idempotent.** If
  $\mathcal{S}_1 \subseteq \mathcal{S}_2$ then every topology containing
  $\mathcal{S}_2$ contains $\mathcal{S}_1$, so
  $\langle \mathcal{S}_1 \rangle \subseteq \langle \mathcal{S}_2 \rangle$; and
  $\langle \langle \mathcal{S} \rangle \rangle = \langle \mathcal{S} \rangle$
  because $\langle \mathcal{S} \rangle$ is itself a topology containing
  $\mathcal{S}$. Both are used silently below.
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

### `lem-of-triangle-inequality`

````markdown
---
id: lem-of-triangle-inequality
kind: lemma
title: "The triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-abs-value, lem-of-add-order, def-ordered-field]
aliases: []
landmark: true
short: "Triangle ineq."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
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

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] For every $u \in F$, $-|u| \le u \le |u|$, and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]]).

[L2] Order compatible with addition: if $a \le b$ and $c \le d$, then $a + c \le b + d$. [[lem-of-add-order]] states the STRICT forms and only those ($a < b \Rightarrow a + c < b + c$, and $a < b$ with $c < d$ giving $a + c < b + d$); the nonstrict form used here is those two together with the cases $a = b$ and $c = d$, settled by trichotomy, the order being total ([[def-ordered-field]]). Explicitly: if $a < b$ and $c < d$ the second strict form applies; if $a < b$ and $c = d$ the first gives $a + c < b + c = b + d$; if $a = b$ and $c < d$ the first gives $a + c < a + d = b + d$; and if $a = b$ and $c = d$ the two sides are equal.

[L3] Field and order arithmetic: $-(a + b) = -a + (-b)$, and $a \le b \iff -b \le -a$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $-|x| \le x \le |x|$ and $-|y| \le y \le |y|$. [L1]

2.1 Adding the two chains of [step 1.1] with [L2] and using $-(|x| + |y|) = -|x| + (-|y|)$ from [L3] gives $-(|x| + |y|) \le x + y \le |x| + |y|$. [step 1.1, L2, L3]

3.1 By [L1] the value $|x + y|$ equals $x + y$ or $-(x + y)$; both $x + y \le |x| + |y|$ and $-(x + y) \le |x| + |y|$ hold by [step 2.1] and [L3] (the latter from $-(|x| + |y|) \le x + y$), so $|x + y| \le |x| + |y|$. [step 2.1, L1, L3] ∎
````

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
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

