# Audit proof-refuter brief — Wave 12, A6

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

- critical risk (11): 28 declared dependencies; 30 cited facts; 11 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (28 outgoing relationships)

## Target item — `ex-componentwise-convergence-and-a-vector-valued-integral-computed`

Normalized current SHA-256: `7e746831d1ce084f70f1660d4eb82777595b176635a31dfa046e847878061762`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: ex-componentwise-convergence-and-a-vector-valued-integral-computed
kind: example
title: "A convergent sequence in $\\mathbb{R}^{3}$ and the integral $\\int_0^1 (1, t, t^{2})$, computed componentwise"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-componentwise-convergence-and-completeness, thm-componentwise-limits-and-continuity, thm-norm-inequality-for-the-vector-valued-integral, cor-primitives-of-a-continuous-function, thm-continuous-implies-integrable, thm-monotonicity-of-the-integral, thm-linearity-of-the-integral, lem-derivative-of-a-power, thm-algebra-of-continuous-functions, def-p-norms-on-rn, def-euclidean-inner-product, def-norm-and-normed-space, def-oriented-integral, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, thm-of-square-roots, lem-of-square-monotone, def-integer-power, def-metric-convergence, def-sequence, lem-standard-basis-of-f-n, def-interval, lem-finite-sum-laws, def-finite-sum]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "J. Lebl, Basic Analysis I, Section 7.3"
      url: "https://www.jirka.org/ra/html/sec_metseqs.html"
    - title: "APEX Calculus, Section 12.2"
      url: "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"
pipeline_run: null
---

## Example

Both halves of [[def-vector-valued-derivative-and-integral]] are exercised here,
in $\mathbb{R}^{3}$.

**A convergent sequence.** For $k \in \mathbb{N}$ put

$$x^{(k)} \;:=\; \Bigl(\tfrac{1}{\iota(k+1)},\ 1 - \tfrac{1}{\iota(k+1)},\ 2\Bigr) \;\in\; \mathbb{R}^{3},$$

with $\iota$ the canonical natural ([[def-canonical-natural]]); the shift by one
is there because $\mathbb{N}$ contains $0$ and $\iota(0) = 0$. Then
$x^{(k)} \to (0,1,2)$ in $(\mathbb{R}^{3}, d_2)$.

**An integral.** Let $f : [0,1] \to \mathbb{R}^{3}$ be $f(t) := (1,\ t,\ t^{2})$.
Then $f$ is integrable and

$$\int_0^1 f \;=\; \Bigl(1,\ \tfrac{1}{\iota(2)},\ \tfrac{1}{\iota(3)}\Bigr).$$

**The norm inequality is strict here.**
$\bigl\lVert\int_0^1 f\bigr\rVert_2 = \iota(7)/\iota(6)$, while
$\int_0^1\lVert f\rVert_2 \ge \iota(53)/\iota(45) > \iota(7)/\iota(6)$. The exact
value of $\int_0^1\sqrt{1+t^{2}+t^{4}}\,dt$ is not computed: it needs machinery
this page does not have, and a crude lower bound is enough to separate the two
sides of [[thm-norm-inequality-for-the-vector-valued-integral]].

## Facts & Assumptions

**Given:** The sequence $\bigl(x^{(k)}\bigr)$ and the function $f$ above; the abbreviation $g(t) := \lVert f(t)\rVert_2 = \sqrt{1+t^{2}+t^{4}}$ ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]]).

[L1] Convergence in $\mathbb{R}^{n}$ for $n \ge 1$ is componentwise ([[thm-componentwise-convergence-and-completeness]] clause 1, [[def-metric-convergence]], [[def-sequence]], [[lem-standard-basis-of-f-n]]).

[L2] For every real $\varepsilon>0$ there is $K$ with $1/\iota(K+1) < \varepsilon$; $\iota(k+1)>0$; and $0<u\le v$ gives $0 < 1/v \le 1/u$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-canonical-natural]]).

[L3] The vector-valued integral is componentwise, and $f$ is integrable exactly when each $f_i$ is ([[def-vector-valued-derivative-and-integral]], [[def-oriented-integral]], [[def-interval]]).

[L4] A continuous function on $[a,b]$ is integrable, and $\int_a^b h = G(b)-G(a)$ for any primitive $G$ of a continuous $h$ ([[thm-continuous-implies-integrable]], [[cor-primitives-of-a-continuous-function]]); polynomial functions are continuous ([[thm-algebra-of-continuous-functions]]) and $x \mapsto x^{p}$ has derivative $\iota(p)x^{\,p-1}$ for $p \ge 1$ ([[lem-derivative-of-a-power]], [[def-integer-power]]).

[L5] Monotonicity and linearity of the integral ([[thm-monotonicity-of-the-integral]], [[thm-linearity-of-the-integral]], [[lem-finite-sum-laws]], [[def-finite-sum]]).

[L6] $\lVert f(t)\rVert_2$ is integrable on $[0,1]$ and $\bigl\lVert\int_0^1 f\bigr\rVert_2 \le \int_0^1\lVert f\rVert_2$ ([[thm-norm-inequality-for-the-vector-valued-integral]], [[def-norm-and-normed-space]]).

[L7] Square roots and squaring: $\sqrt{c}$ is the unique nonnegative $s$ with $s^{2} = c$, and for $a,b \ge 0$, $a \le b$ exactly when $a^{2} \le b^{2}$ ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

[L8] Canonical naturals carry sums to sums and products to products and are strictly increasing and positive ([[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L9] Continuity of a vector-valued function is componentwise ([[thm-componentwise-limits-and-continuity]] clause 1, [[def-vector-valued-functions-limits-and-continuity]]).

## Verification

**Proof technique:** direct.

1.1 The three coordinate sequences of $\bigl(x^{(k)}\bigr)$ are $k \mapsto 1/\iota(k+1)$, $k \mapsto 1 - 1/\iota(k+1)$ and the constant $2$. Given a rational $\varepsilon>0$, take $K$ with $1/\iota(K+1)<\varepsilon$; then for $k \ge K$ one has $0 < 1/\iota(k+1) \le 1/\iota(K+1) < \varepsilon$, so the first converges to $0$, the second to $1$ and the third to $2$. [L2]

1.2 Each component of $f$ is a polynomial function, hence continuous on $[0,1]$ and integrable there; so $f$ is integrable, and $f$ is continuous. [L3, L4, L9]

1.3 The function $t \mapsto t^{\,p+1}/\iota(p+1)$ is a primitive of $t \mapsto t^{p}$ for $p \in \mathbb{N}$, so $\int_0^1 t^{p}\,dt = 1/\iota(p+1)$; at $p = 0,1,2$ this gives $1$, $1/\iota(2)$ and $1/\iota(3)$. [L4, L8]

1.4 For $t \in [0,1]$ put $u := t^{2}+t^{4}$, so $0 \le u \le \iota(2) \le \iota(3)$ and $g(t) = \sqrt{1+u}$. Since $(1+u/\iota(3))^{2} = 1 + \iota(2)u/\iota(3) + u^{2}/\iota(9) \le 1+u$ exactly when $u^{2}/\iota(9) \le u/\iota(3)$, that is exactly when $u \le \iota(3)$, and both $1+u/\iota(3)$ and $\sqrt{1+u}$ are nonnegative, monotonicity of squaring gives $g(t) \ge 1 + \bigl(t^{2}+t^{4}\bigr)/\iota(3)$. [L7, L8]

1.5 Finally $\iota(53)/\iota(45) > \iota(7)/\iota(6)$, since cross-multiplying by the positive $\iota(45)\iota(6)$ turns the claim into $\iota(318) > \iota(315)$, which holds because $\iota$ is strictly increasing. [L8]

2.1 Hence $x^{(k)} \to (0,1,2)$ in $(\mathbb{R}^{3},d_2)$, the $\varepsilon$ for the vector being obtained from the three coordinate tolerances exactly as in the proof of [L1]. [step 1.1, L1]

2.2 Therefore $\int_0^1 f = \bigl(1,\ 1/\iota(2),\ 1/\iota(3)\bigr)$, the coordinates of the vector integral being the integrals of the coordinates. [step 1.2, step 1.3, L3]

2.3 The right-hand side of step 1.4 is continuous, hence integrable, and by step 1.3 and linearity $\int_0^1\bigl(1+(t^{2}+t^{4})/\iota(3)\bigr)dt = 1 + \bigl(1/\iota(3)+1/\iota(5)\bigr)/\iota(3) = 1 + \iota(8)/\iota(45) = \iota(53)/\iota(45)$. [step 1.3, L4, L5, L8]

3.1 Its Euclidean norm satisfies $\bigl\lVert\int_0^1 f\bigr\rVert_2^{2} = 1 + 1/\iota(4) + 1/\iota(9) = \iota(49)/\iota(36)$, so $\bigl\lVert\int_0^1 f\bigr\rVert_2 = \iota(7)/\iota(6)$, since $\bigl(\iota(7)/\iota(6)\bigr)^{2} = \iota(49)/\iota(36)$ and both numbers are nonnegative. [step 2.2, L7, L8]

3.2 By monotonicity of the integral, using that $g$ is integrable, $\int_0^1 g \ge \iota(53)/\iota(45)$. [step 1.4, step 2.3, L5, L6]

4.1 So $\bigl\lVert\int_0^1 f\bigr\rVert_2 = \iota(7)/\iota(6) < \iota(53)/\iota(45) \le \int_0^1\lVert f\rVert_2$: the inequality of [L6] holds on this example and is **strict**. [step 3.1, step 3.2, step 1.5, L6] ∎

## Remarks

- **Why the inequality is strict here.** Equality in [[thm-norm-inequality-for-the-vector-valued-integral]] would require the integrand to point in a fixed direction, and $f(t) = (1,t,t^{2})$ changes direction as $t$ runs over $[0,1]$. That heuristic is not what is proved above: the proof separates the two sides by an explicit numerical bound, which is the only argument available at this point in the reading order.

- **The lower bound is deliberately crude.** The inequality $\sqrt{1+u} \ge 1 + u/\iota(3)$ used in step 1.4 holds for $0 \le u \le \iota(3)$ and is far from sharp; it is chosen because it is polynomial, so that step 2.3 is an application of [[cor-primitives-of-a-continuous-function]] and nothing more. The exact value of $\int_0^1\sqrt{1+t^{2}+t^{4}}\,dt$ is not a value this page can name.

- **The sequence and the integral are independent computations**, put in one item because they exercise the two halves of [[def-vector-valued-derivative-and-integral]] on the same space. Neither uses the other.
````

## Wave 12 provenance row

```json
{
  "id": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_metseqs.html",
    "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"
  ],
  "rationale": "Lebl, Section 7.3.2, Proposition 7.3.9 states that convergence of a sequence in Euclidean space is equivalent to coordinatewise convergence; APEX Calculus, Theorem 12.2.32, defines the definite integral of a vector-valued function componentwise. The item combines those standard interfaces in a zero-indexed R^3 example, computes the polynomial Riemann integral locally through the library's scalar FTC interfaces, and proves its strict Euclidean-norm estimate locally. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
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
      "source": "thm-componentwise-convergence-and-completeness",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the Euclidean metric $d_2$ of [[lem-metrics-on-rn]], and let $\\bigl(x^{(j)}\\bigr)_{j\\in\\mathbb{N}}$ be a sequence in $\\mathbb{R}^{n}$ ([[def-metric-convergence]]). For $k < n$ write $\\bigl(x^{(j)}_k\\bigr)_{j\\in\\mathbb{N}}$ for the $k$-th **coordinate sequence**, a sequence of reals ([[def-sequence]]). Then: 1. **Convergence is componentwise.** For $x \\in \\mathbb{R}^{n}$, $x^{(j)} \\to x$ in $(\\mathbb{R}^{n}, d_2)$ if and only if $x^{(j)}_k \\to x_k$ in $\\mathbb{R}$ for every $k<n$ ([[def-real-limit]]). 2. **Cauchyness is componentwise.** $\\bigl(x^{(j)}\\bigr)$ is Cauchy in $(\\mathbb{R}^{n},d_2)$ ([[def-cauchy-in-metric]]) if and only if every coordinate sequence is Cauchy in $\\mathbb{R}$. 3. **Completeness in every norm.** For every norm $N$ on $\\mathbb{R}^{n}$ ([[def-norm-and-normed-space]]) the metric space $(\\mathbb{R}^{n}, d_N)$ is complete ([[def-complete-metric-space]]). **Clause 3 is obtained by citation and is not reproved here.** [[thm-euclidean-space-complete]] clause 2 states that $(\\mathbb{R}^{n},d_2)$ is complete, **for $n \\ge 1$ only**, and this theorem carries that hypothesis forward without weakening it; what is added is the passage from $d_2$ to an arbitrary norm, through [[thm-all-norms-on-rn-are-equivalent]] and the dictionary of [[def-equivalent-norms]].",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-convergence",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]). A **sequence in $X$** is a function $x : \\mathbb{N} \\to X$, written $(x_k)$ with $x_k := x(k)$. As everywhere in this library, $\\mathbb{N}$ contains $0$ ([[def-natural-numbers]]) and a sequence is indexed from $0$ ([[def-sequence]]); an index range copied from a text that starts at $1$ must be shifted before it is used here. Let $(x_k)$ be a sequence in $X$ and $p \\in X$. The function $k \\mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$ ([[def-abs-value]]). Define $$x_k \\longrightarrow p \\text{ in } (X,d) \\quad :\\Longleftrightarrow \\quad d(x_k,p) \\longrightarrow 0 \\text{ in } \\mathbb{R},$$ the convergence on the right being that of [[def-real-limit]]. Unwound, this says: for every **rational** $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $d(x_k, p) < \\varepsilon$ for every $k \\ge K$. We then call $p$ a **limit** of $(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit. **Rational and real $\\varepsilon$ agree here, as they do on the real line.** [[def-real-limit]] tests convergence against rational $\\varepsilon$ only, and its own remark, restated for sequences in [[def-sequence]], records that nothing is lost: below any real $\\eta > 0$ lies a positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for $\\eta$. So a proof may establish convergence by producing an index for every real $\\varepsilon > 0$, and may use a convergence hypothesis at a real $\\varepsilon$ by first passing to a rational below it. Both moves are used on this page and are always cited. **Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the composite $x \\circ n$ for a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and $p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence converges to $p$, which is the metric-space form of [[def-subsequential-limit]].",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and $\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]). A **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write $x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or $(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is the subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$. Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices. - $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for every $k \\in \\mathbb{N}$; it is **unbounded** otherwise. - $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds for every $k \\ge K$. - $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some $k \\ge K$ for which $P(k)$ holds. - For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is again a sequence of reals. - A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$ along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$; it is again a sequence of reals. **Convergence and Cauchyness are not defined here.** They are already fixed, for sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$ is *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the toolkit for those two notions and does not restate them. A sequence **converges** if it converges to some real, and **diverges** if it does not.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-standard-basis-of-f-n",
      "source_section": "Statement",
      "quote": "Let $F$ be a field ([[def-field]]), let $n \\in \\mathbb{N}$ and let $F^{n}$ be the function space on the von Neumann natural $n = \\{0, \\dots, n-1\\}$, with the pointwise operations ([[def-function-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector** $e_i \\in F^{n}$ by $$e_i(i) = 1_F, \\qquad e_i(j) = 0_F \\ \\text{ for } j < n \\text{ with } j \\ne i .$$ Then: 1. **Finite sums in a function space are pointwise.** For every set $X$, every $p \\in \\mathbb{N}$, every list $u : p \\to F^{X}$ and every $j \\in X$, $$\\Bigl(\\sum_{k<p} u_k\\Bigr)(j) \\;=\\; \\sum_{k<p} u_k(j),$$ the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary $X$ because the companion page needs it at $X = \\mathbb{N}$.) 2. $e : n \\to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in particular $e$ is injective and its image $e[n] = \\{\\, e_i : i < n \\,\\}$ is a basis of $F^{n}$ with $e[n] \\approx n$ ([[def-equinumerous]]); 3. for every $\\lambda : n \\to F$ and every $j < n$, $\\bigl(\\sum_{i<n}\\lambda_i e_i\\bigr)(j) = \\lambda_j$; equivalently the coordinate list of $x \\in F^{n}$ with respect to the ordered basis $e$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is $i \\mapsto x(i)$; 4. $F^{n}$ is finite-dimensional over $F$ with $\\dim_F F^{n} = n$ ([[def-dimension]]); 5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function, so $F^{0}$ is the zero space, the empty list is its ordered basis, $\\varnothing$ is its basis and $\\dim_F F^{0} = 0$. Every index runs from $0$, so the coordinates of an element of $F^{n}$ are $x_0, \\dots, x_{n-1}$ and no statement above is restricted to $n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let $\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number $n \\ge 1$ such that $$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$ where $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and $1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard we abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$. This is the **reciprocal form** of the Archimedean property. [[thm-of-archimedean]] on its own delivers only the assertion that the canonical naturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that the reciprocals of the naturals get below every positive bound, is the statement above, and it is recorded separately so that no proof has to reconstruct the inversion step in passing.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for $n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number $\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$ and $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$: - $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$; - the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$; - $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b \\in F$. 1. If $a > 0$ then $a^{-1} > 0$. 2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-vector-valued-derivative-and-integral",
      "source_section": "Definition",
      "quote": "Throughout, $m \\in \\mathbb{N}$ with $m \\ge 1$, and vector-valued functions, their components and their limits are as in [[def-vector-valued-functions-limits-and-continuity]]. ### The derivative Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}^{m}$ and let $c \\in A$ be a **limit point of $A$** ([[def-limit-point-r]]). The **difference quotient of $f$ at $c$** is the vector-valued function $$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}^{m}, \\qquad q_{f,c}(x) \\;:=\\; \\frac{1}{x - c}\\,\\bigl(f(x) - f(c)\\bigr),$$ the scalar multiple being that of the vector space $\\mathbb{R}^{m}$ ([[def-function-space]]); the division is legitimate because $x \\ne c$ gives $x - c \\ne 0$. As in [[def-derivative]], $c$ is a limit point of $A \\setminus \\{c\\}$ as well, since a punctured neighbourhood of $c$ omits $c$. $f$ is **differentiable at $c$** when $\\lim_{x \\to c} q_{f,c}(x)$ exists in $\\mathbb{R}^{m}$, and then the **derivative** is $$f'(c) \\;:=\\; \\lim_{x\\to c} q_{f,c}(x) \\;\\in\\; \\mathbb{R}^{m}.$$ **The notation denotes a single vector.** At most one $L \\in \\mathbb{R}^{m}$ satisfies the limit condition, as proved in [[def-vector-valued-functions-limits-and-continuity]]; this is the vector-valued form of the obligation [[lem-function-limit-unique]] discharges for real-valued functions and [[lem-metric-limits-unique]] for sequences. **The intrinsic form is the definition; the componentwise form is a theorem.** For $i < m$ the $i$-th component of $q_{f,c}(x)$ is $\\bigl(f_i(x)-f_i(c)\\bigr)/(x-c)$, which is the real difference quotient of $f_i$ at $c$ ([[def-derivative]]). So by [[thm-componentwise-limits-and-continuity]] clause 2: > $f$ is differentiable at $c$ **if and only if** every $f_i$ is differentiable > at $c$, and then $f'(c)_i = f_i'(c)$ for every $i<m$. Nothing below reverses this order of presentation: the intrinsic limit is what is defined, and the coordinates are read off it. **Algebra of derivatives.** If $f, g : A \\to \\mathbb{R}^{m}$ are differentiable at $c$ and $\\lambda \\in \\mathbb{R}$, then $f + g$ and $\\lambda f$ are differentiable at $c$ with $(f+g)'(c) = f'(c)+g'(c)$ and $(\\lambda f)'(c) = \\lambda f'(c)$: read componentwise through the displayed equivalence, these are clauses 1 and 2 of the published [[thm-algebra-of-derivatives]]. ### The integral Let $a, b \\in \\mathbb{R}$ with $a < b$ and let $f : [a,b] \\to \\mathbb{R}^{m}$ ([[def-interval]]). $f$ is **integrable on $[a,b]$** when every component $f_i : [a,b] \\to \\mathbb{R}$ is bounded ([[def-bounded-set]]) and Darboux integrable in the sense of [[def-darboux-integral]], and then $$\\int_a^b f \\;:=\\; \\text{the function } m \\to \\mathbb{R} \\text{ sending } i \\mapsto \\int_a^b f_i .$$ **That really is an element of $\\mathbb{R}^{m}$.** In this library $\\mathbb{R}^{m}$ is the set of functions $m \\to \\mathbb{R}$ ([[def-function-space]]), not a set of tuples, so the displayed assignment is literally an element of it; each value $\\int_a^b f_i$ is a single real by [[def-darboux-integral]]. In the standard basis ([[lem-standard-basis-of-f-n]]) the same object is $\\int_a^b f = \\sum_{i<m}\\bigl(\\int_a^b f_i\\bigr)e_i$. **Oriented limits.** Following [[def-oriented-integral]] componentwise, set $$\\int_a^a f \\;:=\\; 0 \\in \\mathbb{R}^{m}, \\qquad \\int_b^a f \\;:=\\; -\\int_a^b f \\quad (a < b),$$ so that $\\int_u^v f = -\\int_v^u f$ for all $u,v$ in an interval on which $f$ is integrable. The clauses do not overlap with the case $a<b$, so nothing has to be checked for consistency, exactly as in [[def-oriented-integral]]. **Linearity.** If $f, g : [a,b] \\to \\mathbb{R}^{m}$ are integrable and $\\lambda,\\mu \\in \\mathbb{R}$ then $\\lambda f + \\mu g$ is integrable with $$\\int_a^b (\\lambda f + \\mu g) \\;=\\; \\lambda\\int_a^b f + \\mu\\int_a^b g ,$$ since each side has $i$-th coordinate $\\int_a^b(\\lambda f_i + \\mu g_i)$ and $\\lambda\\int_a^b f_i + \\mu\\int_a^b g_i$ respectively, and those agree by [[thm-linearity-of-the-integral]]. **Restriction and splitting.** If $f$ is integrable on $[a,b]$ then it is integrable on every closed subinterval, and for $a<c<b$, $\\int_a^b f = \\int_a^c f + \\int_c^b f$; both are the componentwise readings of [[lem-integrability-on-a-subinterval]] and [[thm-additivity-over-subintervals]], applied to each $f_i$ and reassembled coordinate by coordinate.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-oriented-integral",
      "source_section": "Definition",
      "quote": "**Why this item is first.** The published definition of the integral does not cover this page. [[def-darboux-integral]] is stated for reals $a < b$, because the partitions it quantifies over are those of [[def-partition-and-refinement]], whose standing hypothesis is $a < b$: with $a = b$ the chain $a = t_0 < \\dots < t_n = b$ is unsatisfiable. So $\\int_a^b f$ is an undefined symbol whenever $a \\ge b$, and every additivity statement below would be ill-formed as it is usually written. This item extends the notation, and nothing else: the object it names is still the Darboux integral of [[def-darboux-integral]]. Let $u, v \\in \\mathbb{R}$ and write $$[u \\wedge v,\\ u \\vee v] \\;:=\\; \\text{the closed interval with endpoints } u \\text{ and } v$$ ([[def-interval]]). Let $f$ be a real-valued function whose domain contains that interval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$, or $u \\ne v$ and the restriction of $f$ to $[u \\wedge v,\\ u \\vee v]$ is bounded ([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]], [[def-darboux-sums]]). For such $f$ define $$\\int_u^v f \\;:=\\; \\begin{cases} \\text{the Darboux integral of } f \\text{ over } [u,v] & \\text{if } u < v, \\\\[2pt] 0 & \\text{if } u = v, \\\\[2pt] -\\displaystyle\\int_v^u f & \\text{if } u > v. \\end{cases}$$ **There is nothing to check for consistency.** The three clauses are indexed by the three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually exclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In particular the first clause is untouched, so on $u < v$ this is the published integral verbatim and every published theorem about it applies unchanged. **The middle clause is a stipulation, not a computation.** It is *not* claimed that $0$ is a value forced by the $u < v$ definition in any limiting sense; that definition simply says nothing at $u = v$, and $\\int_u^u f := 0$ is what is written there. It is also unconditional: no hypothesis on $f$ beyond being defined at $u$ is asked for, since the case $u = v$ never refers to a partition. ### The two consequences used throughout the page **Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable between them, $$\\int_u^v f \\;=\\; -\\int_v^u f .$$ Indeed if $u < v$ then $v > u$ and the third clause reads $\\int_v^u f = -\\int_u^v f$, which rearranges to the display; if $u = v$ both sides are $0$; and if $u > v$ the third clause is the display itself. **Absolute values agree.** Consequently $\\bigl|\\int_u^v f\\bigr| = \\bigl|\\int_v^u f\\bigr|$ for every such pair. **An obligation recorded here and discharged elsewhere.** With this convention the additivity identity $$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f$$ holds for **every** arrangement of $u, v, w$ in an interval on which $f$ is integrable, not only for $u < v < w$. That is a theorem and not part of this definition; it is proved as the last clause of [[thm-additivity-over-subintervals]], and nothing on this page uses it before it is proved there.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]) with its order ([[def-real-order]]). A subset $I \\subseteq \\mathbb{R}$ is **order-convex** when $$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$ The **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where $a, b \\in \\mathbb{R}$: | | bounded forms | | one-sided and full forms | |---|---|---|---| | $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ | | $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ | | $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ | | $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ | | | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ | An interval is **open** when both of its written endpoints are excluded, that is for the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is **closed** when both written endpoints are included, that is for $[a,b]$, $[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and $(a,b]$ are **half-open**. **The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They mark which side carries no endpoint condition at all; the five forms in the right column are defined by the displayed conditions on $x$ alone, and no arithmetic is ever performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$ silently that [[rem-sup-conventions]] records for suprema. **Every one of the nine forms is order-convex.** Each is defined by a conjunction of at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or $x \\le b$, and each such condition is inherited by an intermediate point: if $a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$, by transitivity of the order ([[def-ordered-field]]). Applying this to whichever one or two conditions define the form in question gives $z \\in I$ whenever $x, y \\in I$ and $x \\le z \\le y$. **Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly when it is of one of the four forms in the left column: for those, $a$ is a lower bound and $b$ an upper bound. The other five forms are unbounded, on the side or sides written with $\\infty$; the verification is in the remarks below. **Nondegeneracy.** An interval is **degenerate** when it has at most one element, and **nondegenerate** when it has at least two. For the four bounded forms with endpoints $a$ and $b$: - $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly when $a < b$. It is the singleton $\\{a\\}$ when $a = b$. - $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each is nondegenerate. The only assertion here that is not immediate from the defining conditions is that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because $a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to both sides and halving ([[def-ordered-field]]); repeating the halving inside $(a, (a+b)/2)$ produces a second point. **Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is exactly the condition making them nonempty. They are the intervals the nested interval property is stated for, and the phrase *closed bounded interval* always carries the hypothesis $a \\le b$ in this library. **Length.** The **length** of a bounded interval presented by its endpoints $a \\le b$ is $$\\ell = b - a \\;\\ge\\; 0 .$$ Length is attached to the presentation by endpoints and is not recovered from the set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is $(c,c)$ for any other $c$, while each of these presentations has length $0$, so nothing inconsistent arises; but the endpoints are named explicitly at every point where a length is used in this library, and never inferred from the set. Unbounded intervals are assigned no length.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-continuous-implies-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be continuous on $[a,b]$ ([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann integrable on $[a,b]$ ([[def-darboux-integral]]). **The proof gives more than integrability: it gives a partition that works.** For every real $\\varepsilon > 0$ the uniform partition into $N$ parts already satisfies $U(f,P) - L(f,P) < \\varepsilon$, as soon as $N$ is large enough that $(b-a)/\\iota(N)$ is below the $\\delta$ that uniform continuity supplies for $\\varepsilon/\\bigl(2(b-a)\\bigr)$. Uniform continuity is exactly what makes one $\\delta$ serve all $N$ subintervals at once, and it is the only place where the compactness of $[a,b]$ is used.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-primitives-of-a-continuous-function",
      "source_section": "Statement",
      "quote": "Let $I \\subseteq \\mathbb{R}$ be order-convex with at least two elements ([[def-interval]]) and let $f : I \\to \\mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]). Call $G : I \\to \\mathbb{R}$ a **primitive of $f$ on $I$** when $G$ is differentiable at every point of $I$ as a function on $I$ with $G' = f$ there ([[def-derivative]]). Then: 1. **Existence.** Fix $c_0 \\in I$. The function $$F : I \\to \\mathbb{R}, \\qquad F(x) \\;:=\\; \\int_{c_0}^x f$$ is defined at every $x \\in I$ ([[def-oriented-integral]], [[def-the-integral-function]]) and is a primitive of $f$ on $I$. 2. **Uniqueness up to a constant.** If $G_1$ and $G_2$ are primitives of $f$ on $I$ then there is a real $k$ with $G_1(x) = G_2(x) + k$ for every $x \\in I$. 3. **Evaluation.** If $a, b \\in I$ with $a < b$ and $G$ is any primitive of $f$ on $I$, then $$\\int_a^b f \\;=\\; G(b) - G(a) .$$ **The scope is exactly the continuous case, and that is not a limitation of the proof.** An integrable function need not have a primitive, and a function with a primitive need not be integrable; this corollary is precisely the intersection where both fundamental theorems apply, and both witnesses are on the companion page.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let $\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at $c$ ([[def-continuity-real]]). Then: 1. $f + g$, $\\alpha f$ and $fg$ are continuous at $c$; 2. $|f|$, the function $x \\mapsto |f(x)|$, is continuous at $c$; 3. $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, defined pointwise by $x \\mapsto \\max\\{f(x), g(x)\\}$ and $x \\mapsto \\min\\{f(x), g(x)\\}$ ([[def-max-min]]), are continuous at $c$; 4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the point $c$ lies in $A_0$ and the quotient $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is continuous at $c$ as a function on $A_0$. Moreover, with no hypothesis at all: 5. every constant function $A \\to \\mathbb{R}$ and the identity $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$ ([[def-integer-power]]), and hence so is every **polynomial function** $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients. Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$, $\\alpha f$, $fg$, $|f|$, $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, and $(f/g)|_{A_0}$ is continuous on $A_0$. **Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**, and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is $g(c) \\ne 0$, not \"$g$ nowhere zero\"; what it buys is that $c$ itself lies in the smaller domain, which is what makes continuity there mean anything. **Nothing here is proved through a sequence.** Claims 1 and 4 are read off from [[thm-algebra-of-function-limits]], which is itself proved from $\\varepsilon$ and $\\delta$, and claims 2, 3 and 5 are proved directly below. So no choice principle is used anywhere in this item.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-derivative-of-a-power",
      "source_section": "Statement",
      "quote": "Powers are those of [[def-integer-power]], and $\\iota : \\mathbb{N} \\to \\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that $\\iota(0) = 0$ and $\\iota(m+1) = \\iota(m) + 1$. Let $n \\in \\mathbb{N}$. 1. The function $p_0 : \\mathbb{R} \\to \\mathbb{R}$, $p_0(x) = x^{0}$, is the constant function $1$, and it is differentiable at every $c \\in \\mathbb{R}$ with $p_0'(c) = 0$ ([[def-derivative]]). 2. For $n \\ge 1$ the function $p_n : \\mathbb{R} \\to \\mathbb{R}$, $p_n(x) = x^{n}$, is differentiable at every $c \\in \\mathbb{R}$, and $$p_n'(c) \\;=\\; \\iota(n)\\,c^{\\,n-1} .$$ 3. For $n \\ge 1$ put $A_0 := \\{\\, x \\in \\mathbb{R} : x \\ne 0 \\,\\}$. The function $m_n : A_0 \\to \\mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every $c \\in A_0$ as a function on $A_0$, and $$m_n'(c) \\;=\\; -\\,\\iota(n)\\,c^{\\,-n-1} .$$ 4. Let $a : \\mathbb{N} \\to \\mathbb{R}$ with $a_j = 0$ for $j \\ge n$, and let $P : \\mathbb{R} \\to \\mathbb{R}$ be the polynomial function $P(x) = \\sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is differentiable at every $c \\in \\mathbb{R}$, and, defining $e : \\mathbb{N} \\to \\mathbb{R}$ by $e_0 := 0$ and $e_j := \\iota(j)\\,a_j\\,c^{\\,j-1}$ for $j \\ge 1$, $$P'(c) \\;=\\; \\sum_{j<n} e_j .$$ **Claim 2 is stated for $n \\ge 1$ and not for $n \\ge 0$, and that is not timidity.** At $n = 0$ its right-hand side reads $\\iota(0)\\,c^{-1}$, and $c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is not a statement about the whole line. Claim 1 is what covers $n = 0$, and it says the derivative is $0$ there, which is what the informal reading \"$0 \\cdot c^{-1}$\" is reaching for. The same shift is why the term $e_0$ of claim 4 is defined to be $0$ outright rather than by the formula.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field ([[def-ordered-field]], [[def-field]]). **Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to the set $\\mathbb{R}$, the starting element $1$ and the function $f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$, written $n \\mapsto a^n$, with $$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$ Thus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for **every** $a$, including $a = 0$. **Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set $$a^{-n} := (a^n)^{-1}.$$ **Why that is legitimate.** The right-hand side presupposes that $a^n$ is invertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$ in a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on $n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]). That lemma is a statement *about* the operation introduced here, so it depends on this definition and is recorded in this item's `justified_by` rather than in its `deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single well-determined element, because multiplicative inverses in a field are unique ([[lem-of-inverse-unique]]). **Integer exponents.** Every integer $m$ ([[def-integers]]) is either $\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the embedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]], [[def-int-operations]]). This too is a citation and not a slogan: the order on $\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the image of $\\iota$ is exactly the set of nonnegative integers, and each of them is $\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then $-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]), so $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is injective. The two clauses above therefore define $a^m$ for every $m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for arbitrary $a$. The clauses are consistent where they overlap: the only overlap is $m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3",
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-monotonicity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]). Then: 1. **Nonnegativity.** If $f(x) \\ge 0$ for every $x \\in [a,b]$ then $\\int_a^b f \\ge 0$. 2. **Monotonicity.** If $f(x) \\le g(x)$ for every $x \\in [a,b]$ then $$\\int_a^b f \\;\\le\\; \\int_a^b g .$$ 3. **Two-sided bound.** If $m \\le f(x) \\le M$ for every $x \\in [a,b]$, with $m, M$ real, then $$m\\,(b-a) \\;\\le\\; \\int_a^b f \\;\\le\\; M\\,(b-a) .$$ **Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable function with integral $0$ may be positive at infinitely many points; that is [[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's companion. Under the additional hypothesis of continuity the conclusion does hold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]] below. **Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the convention of [[def-oriented-integral]], $f \\le g$ gives $\\int_u^v f \\le \\int_u^v g$ when $u \\le v$ and the reverse inequality when $u \\ge v$, since both sides change sign together.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.3",
        "3.2"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-linearity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable ([[def-darboux-integral]]). Then: 1. $f + g$ is integrable on $[a,b]$ and $\\int_a^b (f+g) = \\int_a^b f + \\int_a^b g$; 2. for every real $\\lambda$, $\\lambda f$ is integrable on $[a,b]$ and $\\int_a^b \\lambda f = \\lambda \\int_a^b f$; 3. consequently, for all reals $\\lambda, \\mu$ the function $\\lambda f + \\mu g$ is integrable and $$\\int_a^b(\\lambda f + \\mu g) \\;=\\; \\lambda\\int_a^b f \\;+\\; \\mu\\int_a^b g ;$$ 4. the same identity holds with oriented limits: if $u, v \\in [a,b]$ and $f, g$ are integrable between $u$ and $v$ ([[def-oriented-integral]]), then $\\int_u^v(\\lambda f + \\mu g) = \\lambda\\int_u^v f + \\mu\\int_u^v g$. **Linearity of the integral is not linearity of the Darboux sums**, and the proof of claim 1 has to squeeze rather than compute. On a subinterval the inequality $\\sup(f+g) \\le \\sup f + \\sup g$ can be strict — take $f(x) = x$ and $g(x) = -x$ on $[0,1]$, where the left side is $0$ and the right side is $1$ — so $U(f+g,P)$ is in general strictly below $U(f,P) + U(g,P)$ and no identity between upper sums is available. Claim 2, by contrast, is an identity at the level of the sums, with the roles of $\\sup$ and $\\inf$ exchanged when $\\lambda < 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.3",
        "3.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.3",
        "3.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), in particular an ordered field ([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set of natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$ ([[def-nat-addition]]). Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for $a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the upper index**, which is legitimate because of the recursion theorem ([[thm-recursion]]). That theorem produces a function of one variable, so the running index has to be carried along inside the value: applying it to the set $A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function $f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique $g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with $$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$ Write $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates. **The first coordinate is the index itself, and that is a small induction, not an observation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if $\\pi_1(g(n)) = n$, then $g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$, so $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every $n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed clauses be read off, and doing so gives $$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$ $\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those two properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies the two clauses defining $g$, hence equals $g$ by the uniqueness clause of [[thm-recursion]], so $\\Sigma' = \\Sigma$. We write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting element $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same induction on the first coordinate and the same uniqueness argument, gives the unique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with $$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$ and we write $\\prod_{k < n} a_k := \\Pi_n$. **Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate $$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$ and, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$ for the number of terms, $$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$ When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while the empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is notation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of $\\mathbb{N}$ and is only a way of writing \"no terms\". Only finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list $a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the list to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.3",
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-norm-inequality-for-the-vector-valued-integral",
      "source_section": "Statement",
      "quote": "Let $m \\in \\mathbb{N}$ with $m \\ge 1$, let $a, b \\in \\mathbb{R}$ with $a \\le b$ and let $f : [a,b] \\to \\mathbb{R}^{m}$ be integrable ([[def-vector-valued-derivative-and-integral]]). Then: 1. if $a < b$, the real-valued function $t \\mapsto \\lVert f(t)\\rVert_2$ is integrable on $[a,b]$ ([[def-darboux-integral]], [[def-p-norms-on-rn]]); 2. $$\\Bigl\\lVert \\int_a^b f \\Bigr\\rVert_2 \\;\\le\\; \\int_a^b \\lVert f\\rVert_2 .$$ **The hypothesis $a \\le b$ is not decoration.** With the orientation convention of [[def-oriented-integral]] and [[def-vector-valued-derivative-and-integral]], interchanging the limits changes the sign of the right-hand side but not of the left, so for $b < a$ the correct statement is $\\bigl\\lVert\\int_a^b f\\bigr\\rVert_2 \\le \\bigl|\\int_a^b \\lVert f\\rVert_2\\bigr|$; the displayed inequality as written is false in that case. This is the same trap the scalar inequality of [[cor-integrability-of-absolute-values-products-and-lattice-operations]] carries. **Clause 1 is a genuine obligation and is discharged before the estimate.** That each $f_i$ is integrable does not by itself say that $\\sqrt{\\sum_{i<m} f_i^{2}}$ is; the square root has to be brought in through [[thm-composition-with-a-continuous-function]].",
      "quote_selection": "full-source-section",
      "uses": [
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-of-square-roots",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every $a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$; we write $s = \\sqrt{a}$. Consequently the positive elements of $F$ are exactly the nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \\neq 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.4",
        "3.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-square-monotone",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field. For $a, b \\ge 0$: $$a < b \\iff a^2 < b^2, \\qquad a \\le b \\iff a^2 \\le b^2.$$ More generally, for arbitrary $a, b \\in F$, $a^2 < b^2 \\iff |a| < |b|$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.4",
        "3.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for $n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number $\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$ and $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$: - $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$; - the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$; - $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4",
        "1.5",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.3",
        "1.4",
        "1.5",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-componentwise-limits-and-continuity",
      "source_section": "Statement",
      "quote": "Let $m \\in \\mathbb{N}$ with $m \\ge 1$, with vector-valued functions, their components $f_i = \\pi_i \\circ f$, their limits and their continuity as in [[def-vector-valued-functions-limits-and-continuity]]. 1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \\subseteq X$, $f : A \\to \\mathbb{R}^{m}$ and $a \\in A$. Then $f$ is continuous at $a$ if and only if every component $f_i : A \\to \\mathbb{R}$ $(i<m)$ is continuous at $a$. 2. **Limits are componentwise.** Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit point of $A$ ([[def-limit-point-r]]), let $f : A \\to \\mathbb{R}^{m}$ and let $L \\in \\mathbb{R}^{m}$. Then $\\lim_{x\\to c} f(x) = L$ if and only if $\\lim_{x\\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]). 3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let $f, g : A \\to \\mathbb{R}^{m}$ be continuous at $a$ and let $\\lambda \\in \\mathbb{R}$. Then $f + g$ and $\\lambda f$ (defined pointwise) are continuous at $a$; the real-valued function $x \\mapsto \\langle f(x), g(x)\\rangle$ is continuous at $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on $\\mathbb{R}^{m}$ the real-valued function $x \\mapsto N(f(x))$ is continuous at $a$ ([[def-norm-and-normed-space]]). **Where $m \\ge 1$ is spent.** The \"if\" direction of clauses 1 and 2 divides $\\varepsilon$ by $\\iota(m)$, which requires $\\iota(m) \\ne 0$; and clause 3's last part quotes a bound available only for $m \\ge 1$. The \"only if\" directions hold for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L9",
      "source": "def-vector-valued-functions-limits-and-continuity",
      "source_section": "Definition",
      "quote": "Throughout, $m \\in \\mathbb{N}$ with $m \\ge 1$, and $\\mathbb{R}^{m}$ carries the Euclidean norm $\\lVert\\cdot\\rVert_2$ of [[def-euclidean-inner-product]] and [[def-p-norms-on-rn]], whose induced metric is the published $d_2$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-metrics-on-rn]]). A function into $\\mathbb{R}^{m}$ is called **vector-valued**. ### Continuity Let $(X, d_X)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ carry the restricted metric $d_A$ ([[def-isometry-and-metric-embedding]]), let $f : A \\to \\mathbb{R}^{m}$ and let $a \\in A$. Then $f$ is **continuous at $a$** when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ d_X(x,a) < \\delta \\ \\Longrightarrow\\ \\lVert f(x) - f(a)\\rVert_2 < \\varepsilon\\ \\bigr],$$ with $\\varepsilon, \\delta$ ranging over the positive reals, and **continuous on $A$** when it is continuous at every point of $A$. **This is not a new notion, and that is the point of writing it down.** Since $\\lVert f(x)-f(a)\\rVert_2 = d_2\\bigl(f(x),f(a)\\bigr)$ and $d_A$ is the restriction of $d_X$, the displayed condition is **verbatim** the condition of [[def-metric-continuity]] for the map of metric spaces $f : (A,d_A) \\to (\\mathbb{R}^{m}, d_2)$. So every theorem about continuous maps of metric spaces applies to vector-valued functions with no translation, and this library has exactly one notion of continuity here. The same move was made once before, between the $\\mathbb{R}$-native and the metric notions, in [[lem-real-and-metric-notions-agree]]; this item is that move one dimension up in the codomain. The two cases used below are $X = \\mathbb{R}$ with $d_{\\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]) and $X = \\mathbb{R}^{n}$ with $d_2$, for $n \\ge 1$. ### Limits, for a real domain Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}^{m}$, let $c$ be a limit point of $A$ ([[def-limit-point-r]]) and let $L \\in \\mathbb{R}^{m}$. We say $f(x)$ **tends to $L$ as $x$ tends to $c$**, and write $\\lim_{x\\to c} f(x) = L$, when $$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ \\lVert f(x) - L\\rVert_2 < \\varepsilon\\ \\bigr].$$ This is the condition of [[def-function-limit]] with the absolute value in the codomain replaced by $\\lVert\\cdot\\rVert_2$; as there, the puncture $0 < |x-c|$ is what makes $c$ a point the function need not be defined at, and the hypothesis that $c$ is a limit point of $A$ is what stops the condition from being satisfied vacuously. **The notation denotes: at most one $L$ satisfies the condition.** Suppose $L$ and $L'$ both do and $L \\ne L'$. Then $\\varepsilon := \\lVert L-L'\\rVert_2 / 2 > 0$ by (N1) for $\\lVert\\cdot\\rVert_2$ ([[def-norm-and-normed-space]]). Take $\\delta$ and $\\delta'$ for this $\\varepsilon$ and put $\\eta := \\min\\{\\delta,\\delta'\\} > 0$. Since $c$ is a limit point of $A$ there is $x \\in A$ with $0 < |x-c| < \\eta$ ([[def-limit-point-r]]), and then $$\\lVert L - L'\\rVert_2 \\;\\le\\; \\lVert L - f(x)\\rVert_2 + \\lVert f(x) - L'\\rVert_2 \\;<\\; \\varepsilon + \\varepsilon \\;=\\; \\lVert L-L'\\rVert_2$$ by (N3) and (N2), which trichotomy forbids. So $L = L'$. ### Components For $i < m$ define the $i$-th **coordinate projection** $\\pi_i : \\mathbb{R}^{m} \\to \\mathbb{R}$ by $\\pi_i(y) := y_i = y(i)$, and for $f : A \\to \\mathbb{R}^{m}$ the $i$-th **component** $f_i := \\pi_i \\circ f$, a real-valued function on $A$. **Each $\\pi_i$ is $1$-Lipschitz** ([[def-lipschitz-holder-contraction]]): for $y, z \\in \\mathbb{R}^{m}$, $$\\bigl|\\pi_i(y) - \\pi_i(z)\\bigr| \\;=\\; |y_i - z_i| \\;\\le\\; \\lVert y - z\\rVert_2 \\;=\\; d_2(y,z),$$ the middle inequality being $|w_i| \\le \\lVert w\\rVert_2$ at $w := y-z$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, or directly because $w_i^{2}$ is one term of the sum $\\sum_{k<m}w_k^{2}$). Written in coordinates, $f(x)$ is the vector whose $i$-th coordinate is $f_i(x)$, and $f(x) = \\sum_{i<m} f_i(x)\\,e_i$ in the standard basis ([[lem-standard-basis-of-f-n]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The three coordinate sequences of $\\bigl(x^{(k)}\\bigr)$ are $k \\mapsto 1/\\iota(k+1)$, $k \\mapsto 1 - 1/\\iota(k+1)$ and the constant $2$. Given a rational $\\varepsilon>0$, take $K$ with $1/\\iota(K+1)<\\varepsilon$; then for $k \\ge K$ one has $0 < 1/\\iota(k+1) \\le 1/\\iota(K+1) < \\varepsilon$, so the first converges to $0$, the second to $1$ and the third to $2$.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Each component of $f$ is a polynomial function, hence continuous on $[0,1]$ and integrable there; so $f$ is integrable, and $f$ is continuous.",
      "step": "1.2",
      "inputs": [
        "L3",
        "L4",
        "L9"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "The function $t \\mapsto t^{\\,p+1}/\\iota(p+1)$ is a primitive of $t \\mapsto t^{p}$ for $p \\in \\mathbb{N}$, so $\\int_0^1 t^{p}\\,dt = 1/\\iota(p+1)$; at $p = 0,1,2$ this gives $1$, $1/\\iota(2)$ and $1/\\iota(3)$.",
      "step": "1.3",
      "inputs": [
        "L4",
        "L8"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "For $t \\in [0,1]$ put $u := t^{2}+t^{4}$, so $0 \\le u \\le \\iota(2) \\le \\iota(3)$ and $g(t) = \\sqrt{1+u}$. Since $(1+u/\\iota(3))^{2} = 1 + \\iota(2)u/\\iota(3) + u^{2}/\\iota(9) \\le 1+u$ exactly when $u^{2}/\\iota(9) \\le u/\\iota(3)$, that is exactly when $u \\le \\iota(3)$, and both $1+u/\\iota(3)$ and $\\sqrt{1+u}$ are nonnegative, monotonicity of squaring gives $g(t) \\ge 1 + \\bigl(t^{2}+t^{4}\\bigr)/\\iota(3)$.",
      "step": "1.4",
      "inputs": [
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-1.5",
      "claim": "Finally $\\iota(53)/\\iota(45) > \\iota(7)/\\iota(6)$, since cross-multiplying by the positive $\\iota(45)\\iota(6)$ turns the claim into $\\iota(318) > \\iota(315)$, which holds because $\\iota$ is strictly increasing.",
      "step": "1.5",
      "inputs": [
        "L8"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Hence $x^{(k)} \\to (0,1,2)$ in $(\\mathbb{R}^{3},d_2)$, the $\\varepsilon$ for the vector being obtained from the three coordinate tolerances exactly as in the proof of [L1].",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Therefore $\\int_0^1 f = \\bigl(1,\\ 1/\\iota(2),\\ 1/\\iota(3)\\bigr)$, the coordinates of the vector integral being the integrals of the coordinates.",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "step 1.3",
        "L3"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "The right-hand side of step 1.4 is continuous, hence integrable, and by step 1.3 and linearity $\\int_0^1\\bigl(1+(t^{2}+t^{4})/\\iota(3)\\bigr)dt = 1 + \\bigl(1/\\iota(3)+1/\\iota(5)\\bigr)/\\iota(3) = 1 + \\iota(8)/\\iota(45) = \\iota(53)/\\iota(45)$.",
      "step": "2.3",
      "inputs": [
        "step 1.3",
        "L4",
        "L5",
        "L8",
        "1.4"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Its Euclidean norm satisfies $\\bigl\\lVert\\int_0^1 f\\bigr\\rVert_2^{2} = 1 + 1/\\iota(4) + 1/\\iota(9) = \\iota(49)/\\iota(36)$, so $\\bigl\\lVert\\int_0^1 f\\bigr\\rVert_2 = \\iota(7)/\\iota(6)$, since $\\bigl(\\iota(7)/\\iota(6)\\bigr)^{2} = \\iota(49)/\\iota(36)$ and both numbers are nonnegative.",
      "step": "3.1",
      "inputs": [
        "step 2.2",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "By monotonicity of the integral, using that $g$ is integrable, $\\int_0^1 g \\ge \\iota(53)/\\iota(45)$.",
      "step": "3.2",
      "inputs": [
        "step 1.4",
        "step 2.3",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "So $\\bigl\\lVert\\int_0^1 f\\bigr\\rVert_2 = \\iota(7)/\\iota(6) < \\iota(53)/\\iota(45) \\le \\int_0^1\\lVert f\\rVert_2$: the inequality of [L6] holds on this example and is **strict**.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "step 3.2",
        "step 1.5",
        "L6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "ex-componentwise-convergence-and-a-vector-valued-integral-computed: the Statement introduces no possibly empty family requiring a witness; its sequence domains are N or its displayed witness has a fixed nonempty domain."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: The three coordinate sequences of $\\bigl(x^{(k)}\\bigr)$ are $k \\mapsto 1/\\iota(k+1)$, $k \\mapsto 1 - 1/\\iota(k+1)$ and the constant $2$. Given a rational $\\varepsilon>0$, take $K$ with $1/\\iota(K+1)<\\varepsilon$; then for $k \\ge K$ one has $0 < 1/\\iota(k+1) \\le 1/\\iota(K+1) < \\va"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "ex-componentwise-convergence-and-a-vector-valued-integral-computed: there is no cardinal, dimension, or exponent parameter with a separate value-one branch in this claim."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.1: The three coordinate sequences of $\\bigl(x^{(k)}\\bigr)$ are $k \\mapsto 1/\\iota(k+1)$, $k \\mapsto 1 - 1/\\iota(k+1)$ and the constant $2$. Given a rational $\\varepsilon>0$, take $K$ with $1/\\iota(K+1)<\\varepsilon$; then for $k \\ge K$ one has $0 < 1/\\iota(k+1) \\le 1/\\iota(K+1) < \\va"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.2: Each component of $f$ is a polynomial function, hence continuous on $[0,1]$ and integrable there; so $f$ is integrable, and $f$ is continuous."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "ex-componentwise-convergence-and-a-vector-valued-integral-computed: the proof makes no choice from a family whose nonemptiness is not already supplied; any witness used is explicit or uniquely determined."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "ex-componentwise-convergence-and-a-vector-valued-integral-computed: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "ex-componentwise-convergence-and-a-vector-valued-integral-computed: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the A2 contract. Alpha assigns the independent proof-refuter route at A5/A6."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-vector-valued-derivative-and-integral",
    "declared_target": "def-vector-valued-derivative-and-integral",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-vector-valued-functions-limits-and-continuity",
    "declared_target": "def-vector-valued-functions-limits-and-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-componentwise-convergence-and-completeness",
    "declared_target": "thm-componentwise-convergence-and-completeness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-componentwise-limits-and-continuity",
    "declared_target": "thm-componentwise-limits-and-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-norm-inequality-for-the-vector-valued-integral",
    "declared_target": "thm-norm-inequality-for-the-vector-valued-integral",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "cor-primitives-of-a-continuous-function",
    "declared_target": "cor-primitives-of-a-continuous-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-continuous-implies-integrable",
    "declared_target": "thm-continuous-implies-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-monotonicity-of-the-integral",
    "declared_target": "thm-monotonicity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-linearity-of-the-integral",
    "declared_target": "thm-linearity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-derivative-of-a-power",
    "declared_target": "lem-derivative-of-a-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-p-norms-on-rn",
    "declared_target": "def-p-norms-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-euclidean-inner-product",
    "declared_target": "def-euclidean-inner-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-norm-and-normed-space",
    "declared_target": "def-norm-and-normed-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-oriented-integral",
    "declared_target": "def-oriented-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
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
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
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
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
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
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "thm-of-square-roots",
    "declared_target": "thm-of-square-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-of-square-monotone",
    "declared_target": "lem-of-square-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-metric-convergence",
    "declared_target": "def-metric-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
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
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
    "sourcePage": "rn-as-a-normed-space-examples",
    "batch": "wave12-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
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

## Full exact-current text of every cited or declared item (28)

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

### `cor-primitives-of-a-continuous-function`

````markdown
---
id: cor-primitives-of-a-continuous-function
kind: corollary
title: "Every continuous function on an interval has a primitive; two primitives differ by a constant; and $\\int_a^b f = G(b)-G(a)$ for any primitive $G$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ftc-first-part, thm-ftc-second-part, def-the-integral-function, cor-zero-derivative-implies-constant, thm-continuous-implies-integrable, thm-additivity-over-subintervals, cor-differentiable-implies-continuous, def-oriented-integral, def-derivative, def-function-limit, def-continuity-real, def-interval, def-max-min, def-darboux-integral, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-an-integrable-function-with-no-primitive, cex-a-function-with-a-primitive-that-is-not-integrable]
justified_by: []
aliases: [cor-existence-of-primitives]
landmark: true
short: "primitives of a continuous function"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Antiderivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Antiderivative"
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex with at least two elements
([[def-interval]]) and let $f : I \to \mathbb{R}$ be continuous on $I$
([[def-continuity-real]]). Call $G : I \to \mathbb{R}$ a **primitive of $f$ on
$I$** when $G$ is differentiable at every point of $I$ as a function on $I$ with
$G' = f$ there ([[def-derivative]]). Then:

1. **Existence.** Fix $c_0 \in I$. The function
   $$F : I \to \mathbb{R}, \qquad F(x) \;:=\; \int_{c_0}^x f$$
   is defined at every $x \in I$ ([[def-oriented-integral]],
   [[def-the-integral-function]]) and is a primitive of $f$ on $I$.
2. **Uniqueness up to a constant.** If $G_1$ and $G_2$ are primitives of $f$ on
   $I$ then there is a real $k$ with $G_1(x) = G_2(x) + k$ for every $x \in I$.
3. **Evaluation.** If $a, b \in I$ with $a < b$ and $G$ is any primitive of $f$
   on $I$, then
   $$\int_a^b f \;=\; G(b) - G(a) .$$

**The scope is exactly the continuous case, and that is not a limitation of the
proof.** An integrable function need not have a primitive, and a function with a
primitive need not be integrable; this corollary is precisely the intersection
where both fundamental theorems apply, and both witnesses are on the companion
page.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ with at least two elements, a continuous $f : I \to \mathbb{R}$, a base point $c_0 \in I$, and a real $\varepsilon > 0$.

[L1] A continuous function on a closed bounded interval with distinct endpoints is integrable there; a restriction of a continuous function is continuous ([[thm-continuous-implies-integrable]], [[def-continuity-real]], [[def-darboux-integral]]).

[L2] Order-convexity: if $p, q \in I$ then every real between $p$ and $q$ lies in $I$, so the closed interval with endpoints $p$ and $q$ is contained in $I$ ([[def-interval]]).

[L3] $\int_p^p u = 0$, $\int_q^p u = -\int_p^q u$, and for $u$ integrable on a closed bounded interval containing $p,q,r$ one has $\int_p^q u + \int_q^r u = \int_p^r u$ ([[def-oriented-integral]], [[thm-additivity-over-subintervals]], claim 3).

[L4] First fundamental theorem: if $u$ is integrable on $[p,q]$ with $p<q$ and continuous at $c \in [p,q]$, then $x \mapsto \int_p^x u$ has derivative $u(c)$ at $c$ as a function on $[p,q]$; written out, for every real $\varepsilon>0$ there is a real $\delta>0$ with $\bigl|\bigl(\int_p^x u - \int_p^c u\bigr)/(x-c) - u(c)\bigr| < \varepsilon$ for every $x \in [p,q]$ with $0<|x-c|<\delta$ ([[thm-ftc-first-part]], [[def-derivative]], [[def-function-limit]]).

[L5] Second fundamental theorem: if $H$ is differentiable at every point of $[p,q]$ with $H'$ integrable there, then $\int_p^q H' = H(q)-H(p)$ ([[thm-ftc-second-part]]).

[L6] If $u$ is continuous on an order-convex $I$ and differentiable with $u' = 0$ at every interior point of $I$, then $u$ is constant on $I$ ([[cor-zero-derivative-implies-constant]]).

[L7] A differentiable function is continuous, and the restriction of a function differentiable at $c$ to a subset still having $c$ as a limit point is differentiable at $c$ with the same derivative; every point of a nondegenerate interval is a limit point of it ([[cor-differentiable-implies-continuous]], [[def-derivative]], [[def-interval]]).

[L8] Ordered-field arithmetic and minima of two reals: the order is total and transitive, and $\min\{s,t\}$ is a real that is $\le$ both ([[def-max-min]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **$F$ is defined.** For $x \in I$ the closed interval with endpoints $c_0$ and $x$ lies in $I$ by [L2], $f$ is continuous there, hence integrable when $x \ne c_0$ by [L1], and $\int_{c_0}^{c_0} f = 0$ by [L3]; so $F(x)$ names a real for every $x \in I$. [given, L1, L2, L3]

1.2 **A closed neighbourhood inside $I$.** Fix $c \in I$. If some element of $I$ is $< c$, choose $u \in I$ with $u < c$; otherwise put $u := c$. If some element of $I$ is $> c$, choose $v \in I$ with $v > c$; otherwise put $v := c$. Not both $u = c$ and $v = c$, since $I$ would then have $c$ as its only element; so $u < v$, and $[u,v] \subseteq I$ by [L2]. [given, L2, choose]

1.3 **Claim 2.** Let $G_1, G_2$ be primitives of $f$ on $I$ and put $u := G_1 - G_2$. Then $u$ is differentiable at every point of $I$ with $u' = f - f = 0$ there, in particular at every interior point of $I$, and $u$ is continuous on $I$ by [L7]; so [L6] gives a real $k$ with $u \equiv k$. [L6, L7]

2.1 Put $\eta := \min\{\,c-u,\ v-c\,\}$ if $u<c$ and $c<v$, $\eta := v-c$ if $u = c$, and $\eta := c-u$ if $v = c$; in every case $\eta > 0$. [step 1.2, L8, construct]

2.2 $f$ is integrable on $[u,v]$ by [L1], and for $x \in [u,v]$, [L3] applied to the points $c_0, u, x$ inside the closed interval with endpoints $\min\{c_0,u\}$ and $\max\{c_0,v\}$, which lies in $I$ by [L2], gives $F(x) = F(u) + \int_u^x f$. [step 1.1, step 1.2, L1, L2, L3]

3.1 **Every point of $I$ within $\eta$ of $c$ lies in $[u,v]$.** Let $x \in I$ with $|x-c| < \eta$. If $x < c$ then $I$ has an element below $c$, so $u < c$ and $\eta \le c-u$, whence $x > c-\eta \ge u$. If $x > c$ then symmetrically $x < c+\eta \le v$. And $u \le c \le v$ covers $x = c$. So $u \le x \le v$. [step 1.2, step 2.1, L8]

3.2 Hence for $x \in [u,v]$ with $x \ne c$, $\bigl(F(x)-F(c)\bigr)/(x-c) = \bigl(\int_u^x f - \int_u^c f\bigr)/(x-c)$, the constant $F(u)$ cancelling. [step 2.2, algebra]

3.3 By [L4] applied on $[u,v]$ at the point $c$, fix a real $\delta > 0$ with $\bigl|\bigl(\int_u^x f - \int_u^c f\bigr)/(x-c) - f(c)\bigr| < \varepsilon$ for every $x \in [u,v]$ with $0<|x-c|<\delta$, and put $\delta' := \min\{\delta,\eta\} > 0$. [step 2.2, given, L1, L4, L8, choose]

4.1 Every $x \in I$ with $0 < |x-c| < \delta'$ lies in $[u,v]$ by step 3.1, so by step 3.2 and step 3.3, $\bigl|\bigl(F(x)-F(c)\bigr)/(x-c) - f(c)\bigr| < \varepsilon$. [step 3.1, step 3.2, step 3.3]

5.1 As $\varepsilon > 0$ was arbitrary and $c$ is a limit point of $I$ by [L7], $F$ is differentiable at $c$ with $F'(c) = f(c)$; since $c \in I$ was arbitrary, $F$ is a primitive of $f$ on $I$, which is claim 1. [step 1.2, step 4.1, L7]

6.1 **Claim 3.** Let $a<b$ in $I$ and let $G$ be a primitive of $f$ on $I$. Then $[a,b] \subseteq I$ by [L2], the restriction of $G$ to $[a,b]$ is differentiable at every point of $[a,b]$ with derivative $f$ there by [L7], and $f$ is integrable on $[a,b]$ by [L1]; so [L5] gives $\int_a^b f = G(b)-G(a)$. [L1, L2, L5, L7] ∎

## Remarks

- **Steps 1.2, 2.1 and 3.1 are the only work beyond citing the two fundamental theorems.** [[thm-ftc-first-part]] is stated on a closed bounded interval, while $I$ here may be open, half-open or unbounded, so the derivative it produces is the derivative of a *restriction*. What those steps supply is a closed subinterval $[u,v] \subseteq I$ that contains all points of $I$ within $\eta$ of $c$, after which the difference quotients of $F$ and of the restriction agree on a punctured neighbourhood and the $\varepsilon$-$\delta$ statement transfers verbatim.

- **"Two primitives differ by a constant" is not re-minted here.** [[cor-zero-derivative-implies-constant]] already states exactly that, in its second clause, for functions with equal derivatives on an order-convex domain; claim 2 is that statement applied to $G_1 - G_2$.

- **Order-convexity of $I$ is essential to claim 2 and harmless elsewhere.** On a domain in two pieces a function may be constant on each with different constants, which is why [[cor-zero-derivative-implies-constant]] carries the same hypothesis. Claims 1 and 3 use it only to know that closed subintervals spanned by points of $I$ lie in $I$.

- **Forward references, orientation only.** The two witnesses bounding the scope of this corollary are [[cex-an-integrable-function-with-no-primitive]] and [[cex-a-function-with-a-primitive-that-is-not-integrable]] on the companion page; nothing above depends on either.
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `def-euclidean-inner-product`

````markdown
---
id: def-euclidean-inner-product
kind: definition
title: "The Euclidean inner product $\\langle x,y\\rangle = \\sum_{k<n} x_k y_k$ on $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-function-space, def-vector-space, lem-standard-basis-of-f-n, def-finite-sum, lem-finite-sum-laws, lem-metrics-on-rn, lem-of-square-positive, thm-of-square-roots, def-natural-numbers, lem-nat-order-is-membership, def-integer-power, lem-power-laws]
justified_by: []
aliases: []
landmark: false
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
    - title: "Dot product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dot_product"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$. A natural number is a von Neumann natural, that is a set,
and $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]],
[[lem-nat-order-is-membership]]), so

$$\mathbb{R}^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to \mathbb{R} \,\}$$

is the function space of [[def-function-space]] at $F = \mathbb{R}$ and $X = n$,
a vector space over $\mathbb{R}$ under the pointwise operations
([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of
$\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the
same set that [[lem-metrics-on-rn]] calls $\mathbb{R}^{n}$.

The **Euclidean inner product** of $x, y \in \mathbb{R}^{n}$ is the real number

$$\langle x, y\rangle \;:=\; \sum_{k<n} x_k\,y_k ,$$

the finite sum of [[def-finite-sum]] applied to the list $k \mapsto x_k y_k$
(extended by $0$ beyond $n$, as every finite list in this library is). The
**Euclidean norm** of $x$ is

$$\lVert x\rVert_2 \;:=\; \sqrt{\langle x, x\rangle},$$

which is defined because $\langle x,x\rangle = \sum_{k<n} x_k^{2} \ge 0$ (a sum
of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and
[[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by
[[def-integer-power]]) and every nonnegative real has a unique nonnegative square
root ([[thm-of-square-roots]]).

### Both are defined for every $n$, including $n = 0$

At $n = 0$ the set $\mathbb{R}^{0}$ has exactly one element, the empty function,
and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum
above is the empty sum, so $\langle x,y\rangle = 0$ and $\lVert x\rVert_2 = 0$.
**This is the first place on this page where the two index regimes diverge, and
the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\infty$ of
[[lem-metrics-on-rn]] are defined only for $n \ge 1$, because $d_\infty$ would
otherwise be a maximum over the empty index set; the algebra above needs no such
restriction. The boundary in this page runs between the algebra and the metric,
not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists
exactly which items inherit $n \ge 1$.

### The algebra of the inner product

For all $x, y, z \in \mathbb{R}^{n}$ and $\lambda \in \mathbb{R}$:

1. **Symmetry.** $\langle x,y\rangle = \langle y,x\rangle$, since $x_ky_k = y_kx_k$
   termwise.
2. **Additivity in the first argument.**
   $\langle x + y, z\rangle = \langle x,z\rangle + \langle y,z\rangle$: the list
   $k \mapsto (x_k+y_k)z_k$ is the termwise sum of $k \mapsto x_kz_k$ and
   $k \mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies.
3. **Homogeneity in the first argument.**
   $\langle \lambda x, y\rangle = \lambda\langle x,y\rangle$, by
   [[lem-finite-sum-laws]] clause 2.
4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws
   in the second argument.
5. **Positive definiteness.** $\langle x,x\rangle \ge 0$, and
   $\langle x,x\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of
   nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so
   $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square
   ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$.
6. **Agreement with the published Euclidean metric.** For $n \ge 1$ and
   $x, y \in \mathbb{R}^{n}$,
   $\lVert x - y\rVert_2 = \sqrt{\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two
   sides being the same expression ([[lem-metrics-on-rn]]). In particular
   $\lVert x\rVert_2 = d_2(x, 0)$.

That $\lVert\cdot\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]]
is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle
inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed
here.

## Remarks

- **Scope: the concrete form only.** What is defined above is the Euclidean inner
  product on $\mathbb{R}^{n}$ and nothing more. The general theory of inner
  product spaces — abstract inner products, orthonormal bases, Gram-Schmidt,
  orthogonal projection and orthogonal complements of arbitrary subspaces — is
  planned for a page of this library that comes **earlier in the plan order** and
  is not yet built. No item on this page claims anything about abstract inner
  product spaces, and no item on this page introduces the general notion.

- **The standard basis and coordinates.** For $i < n$ the standard unit vector
  $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$
  ([[lem-standard-basis-of-f-n]]). Then $\langle x, e_i\rangle = x_i$: the list
  $k \mapsto x_k (e_i)_k$ vanishes except at $k = i$, where its value is $x_i$,
  and a list vanishing off one index sums to its value there
  ([[lem-finite-sum-laws]] clause 3, splitting the range at $i$). So the
  coordinates of $x$ are recovered by testing against the standard basis, which
  is the form used repeatedly below.

- **Powers here are integer powers.** $x_k^{2}$ means the integer power of
  [[def-integer-power]], and $\lVert x\rVert_2^{2} = \langle x,x\rangle$ by
  [[thm-of-square-roots]] and [[lem-power-laws]].
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

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
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

### `def-metric-convergence`

````markdown
---
id: def-metric-convergence
kind: definition
title: "Convergence of a sequence in a metric space: $x_k \\to x$ iff $d(x_k, x) \\to 0$ in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-sequence, def-real-limit, def-subsequential-limit,
       lem-metric-nonnegativity, lem-rat-embeds-dense, def-natural-numbers,
       def-abs-value]
justified_by: []
aliases: [def-metric-limit]
landmark: true
short: "$x_k \\to x$ in $(X,d)$"
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
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library, $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here.

Let $(x_k)$ be a sequence in $X$ and $p \in X$. The function
$k \mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is
nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$
([[def-abs-value]]). Define

$$x_k \longrightarrow p \text{ in } (X,d) \quad :\Longleftrightarrow \quad d(x_k,p) \longrightarrow 0 \text{ in } \mathbb{R},$$

the convergence on the right being that of [[def-real-limit]]. Unwound, this
says: for every **rational** $\varepsilon > 0$ there is $K \in \mathbb{N}$ with
$d(x_k, p) < \varepsilon$ for every $k \ge K$. We then call $p$ a **limit** of
$(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit.

**Rational and real $\varepsilon$ agree here, as they do on the real line.**
[[def-real-limit]] tests convergence against rational $\varepsilon$ only, and its
own remark, restated for sequences in [[def-sequence]], records that nothing is
lost: below any real $\eta > 0$ lies a positive rational
([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for
$\eta$. So a proof may establish convergence by producing an index for every
real $\varepsilon > 0$, and may use a convergence hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the
composite $x \circ n$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$,
written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and
$p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence
converges to $p$, which is the metric-space form of [[def-subsequential-limit]].

## Remarks

- **A limit is a point of $X$, and uniqueness is a theorem.** Nothing in the
  definition rules out two limits; that a sequence in a metric space has at most
  one is [[lem-metric-limits-unique]], and its proof is where the separation
  axiom (M1) is spent. Reading the same definition with a pseudometric
  ([[def-metric-space]]) that is not a metric, that is one with $p(a,b) = 0$ for
  some $a \ne b$, limits are genuinely not unique: the constant sequence at $a$
  converges to $b$ as well.
- **Convergence is defined from the metric but determined by the topology.**
  It can be restated as "every open set containing $p$ contains $x_k$ for all
  large $k$", which follows from [[lem-metric-ball-neighbourhood-base]]; so it is
  unchanged by passing to a topologically equivalent metric
  ([[def-equivalent-metrics]]). That restatement is not made part of the
  definition, because the metric form is what every proof on this page uses.
- **The relation between convergence and closure** is
  [[thm-metric-sequential-closure]]: a point lies in the closure of $A$ exactly
  when some sequence in $A$ converges to it.
````

### `def-norm-and-normed-space`

````markdown
---
id: def-norm-and-normed-space
kind: definition
title: "A norm on a real vector space, the induced metric, and the dictionary with the metric axioms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-function-space, def-linear-map, def-metric-space, lem-metric-nonnegativity, def-metric-topology, lem-bounded-remetrisation, rem-metric-axiom-conventions, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Normed vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normed_vector_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

## Remarks

- **Why (N1) is stated as an equivalence.** The direction $N(0_V) = 0$ is forced
  by (N2) with $\lambda = 0$, since $0\,v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) gives $N(0_V) = |0|\,N(v) = 0$.
  Only the direction "$N(v) = 0$ implies $v = 0_V$" is a genuine assumption, and
  dropping it gives what is usually called a seminorm, a notion this library does
  not use. The situation is exactly the one [[rem-metric-axiom-conventions]]
  describes for (M1) and the pseudometric.

- **The zero space carries exactly one norm.** If $V = \{0_V\}$ then the only
  function $V \to \mathbb{R}$ satisfying (N1) is the one with value $0$, and it
  satisfies (N2) and (N3) trivially. In particular $\mathbb{R}^{0}$, the function
  space on the empty index set ([[def-function-space]]), is a normed space,
  although the metrics of the published metric theory on $\mathbb{R}^n$ are
  defined only for $n \ge 1$.

- **What is not defined here.** This item does not define linear maps; their
  published definition is [[def-linear-map]]. It also does not define operator
  norms, dual spaces, or abstract inner product spaces.
  [[rem-rn-conventions-and-scope]] records the remaining scope boundaries and
  what each later development would license.
````

### `def-oriented-integral`

````markdown
---
id: def-oriented-integral
kind: definition
title: "The integral with oriented limits: $\\int_a^a f := 0$ and $\\int_b^a f := -\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-integral, def-partition-and-refinement, def-darboux-sums, def-bounded-set, def-interval]
justified_by: []
aliases: [def-oriented-limits-of-integration]
landmark: true
short: "oriented limits $\\int_b^a f = -\\int_a^b f$"
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: n/a
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Definition

**Why this item is first.** The published definition of the integral does not
cover this page. [[def-darboux-integral]] is stated for reals $a < b$, because
the partitions it quantifies over are those of [[def-partition-and-refinement]],
whose standing hypothesis is $a < b$: with $a = b$ the chain
$a = t_0 < \dots < t_n = b$ is unsatisfiable. So $\int_a^b f$ is an undefined
symbol whenever $a \ge b$, and every additivity statement below would be
ill-formed as it is usually written. This item extends the notation, and nothing
else: the object it names is still the Darboux integral of
[[def-darboux-integral]].

Let $u, v \in \mathbb{R}$ and write

$$[u \wedge v,\ u \vee v] \;:=\; \text{the closed interval with endpoints } u \text{ and } v$$

([[def-interval]]). Let $f$ be a real-valued function whose domain contains that
interval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,
or $u \ne v$ and the restriction of $f$ to $[u \wedge v,\ u \vee v]$ is bounded
([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],
[[def-darboux-sums]]). For such $f$ define

$$\int_u^v f \;:=\; \begin{cases} \text{the Darboux integral of } f \text{ over } [u,v] & \text{if } u < v, \\[2pt] 0 & \text{if } u = v, \\[2pt] -\displaystyle\int_v^u f & \text{if } u > v. \end{cases}$$

**There is nothing to check for consistency.** The three clauses are indexed by
the three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually
exclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In
particular the first clause is untouched, so on $u < v$ this is the published
integral verbatim and every published theorem about it applies unchanged.

**The middle clause is a stipulation, not a computation.** It is *not* claimed
that $0$ is a value forced by the $u < v$ definition in any limiting sense; that
definition simply says nothing at $u = v$, and $\int_u^u f := 0$ is what is
written there. It is also unconditional: no hypothesis on $f$ beyond being
defined at $u$ is asked for, since the case $u = v$ never refers to a partition.

### The two consequences used throughout the page

**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable
between them,

$$\int_u^v f \;=\; -\int_v^u f .$$

Indeed if $u < v$ then $v > u$ and the third clause reads
$\int_v^u f = -\int_u^v f$, which rearranges to the display; if $u = v$ both
sides are $0$; and if $u > v$ the third clause is the display itself.

**Absolute values agree.** Consequently
$\bigl|\int_u^v f\bigr| = \bigl|\int_v^u f\bigr|$ for every such pair.

**An obligation recorded here and discharged elsewhere.** With this convention
the additivity identity

$$\int_u^v f \;+\; \int_v^w f \;=\; \int_u^w f$$

holds for **every** arrangement of $u, v, w$ in an interval on which $f$ is
integrable, not only for $u < v < w$. That is a theorem and not part of this
definition; it is proved as the last clause of
[[thm-additivity-over-subintervals]], and nothing on this page uses it before it
is proved there.

## Remarks

- **This is notation, and it is a real notation.** Without it the substitution
  theorem could not be stated with the limits $\varphi(c)$ and $\varphi(d)$ in
  the order the map produces them, since a differentiable $\varphi$ need be
  neither injective nor monotone; and the integral function $x \mapsto \int_a^x f$
  would be undefined at $x = a$.

- **One published inequality is not orientation-invariant, and that is a trap.**
  The estimate $\bigl|\int_u^v f\bigr| \le \int_u^v |f|$ is guaranteed only
  for $u \le v$: at $u > v$ the right-hand side is $-\int_v^u |f| \le 0$ while
  the left-hand side is $\ge 0$, so the inequality fails whenever
  $\int_v^u |f| > 0$. The form valid for every pair is
  $\bigl|\int_u^v f\bigr| \le \bigl|\int_u^v |f|\bigr|$, and this is stated where
  it is proved ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

- **Integrability is a property of the unordered pair.** By construction, $f$ is
  integrable between $u$ and $v$ if and only if it is integrable between $v$ and
  $u$, since both refer to the same closed interval; only the sign of the value
  remembers the order.
````

### `def-p-norms-on-rn`

````markdown
---
id: def-p-norms-on-rn
kind: definition
title: "The $p$-norms $\\lVert x\\rVert_p$ for rational $p \\ge 1$, and $\\lVert x\\rVert_\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-euclidean-inner-product, def-rational-power, lem-rational-power-well-defined, lem-rational-power-laws, lem-rational-power-monotone, rem-real-exponents-deferred, thm-minkowski-finite, def-finite-sum, lem-finite-sum-laws, lem-finite-set-has-max, def-max-min, lem-metrics-on-rn, def-abs-value, lem-of-abs-value, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
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
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ and let $\mathbb{R}^{n}$ be the function space of
[[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$.

### The $p$-norm, for a rational exponent $p \ge 1$

Let $p \in \mathbb{Q}$ with $p \ge 1$. For $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_p \;:=\; \Bigl(\sum_{k<n} |x_k|^{p}\Bigr)^{1/p},$$

where $|\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite
sum of [[def-finite-sum]], and both powers are the **rational** powers of
[[def-rational-power]].

**Every power written here is defined.** Each base $|x_k|$ is a nonnegative real
and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$
and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these
nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and
$1/p$ is a positive rational, so the outer power is defined for the same two
reasons. The value does not depend on which representative of $p$ or of $1/p$ is
used ([[lem-rational-power-well-defined]]).

**The exponent is a rational, and that is not a matter of taste.**
[[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational**
exponent only; real exponents do not exist at this point in the reading order,
and [[rem-real-exponents-deferred]] records exactly why. This is also why the
published Minkowski inequality [[thm-minkowski-finite]], which is what makes the
triangle inequality work below, is itself stated for rational $p \ge 1$. **No
statement on this page is written for $p$ ranging over a real interval.**

### The maximum norm

For $n \ge 1$ and $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_\infty \;:=\; \max\{\, |x_k| \;:\; k < n \,\},$$

the maximum of a nonempty finite set of reals, which exists and is one of its
elements ([[lem-finite-set-has-max]], [[def-max-min]]).

**The hypothesis $n \ge 1$ is required and propagates.** At $n = 0$ the set
$\{|x_k| : k<n\}$ is empty and has no maximum ([[def-max-min]]). This is the same
restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and
**every statement on this page that mentions $\lVert\cdot\rVert_\infty$ inherits
it**. The $p$-norms for rational $p \ge 1$ carry no such restriction: at $n = 0$
each is the empty sum raised to a positive rational power, hence $0$.

### The three cases the rest of the page uses

- $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \ge 0$
  ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause).
- $\lVert x\rVert_2 = \bigl(\sum_{k<n}|x_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}x_k^{2}}$,
  which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the
  exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$
  ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of
  $t$, which is $\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]).
  **The two notations denote the same function and no second Euclidean norm is
  introduced.**
- $\lVert x\rVert_\infty$ as above, for $n \ge 1$.

That each of these is a norm in the sense of [[def-norm-and-normed-space]], and
that the metrics they induce are exactly the published $d_1$, $d_2$ and
$d_\infty$ of [[lem-metrics-on-rn]], is
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there
and is not assumed here.

## Remarks

- **Why $p \ge 1$.** The triangle inequality for $\lVert\cdot\rVert_p$ is
  Minkowski's inequality, and [[thm-minkowski-finite]] is stated for rational
  $p \ge 1$. For $0 < p < 1$ the displayed expression is still defined but is not
  a norm on $\mathbb{R}^{n}$ for $n \ge 2$; nothing on this page asserts anything
  about that range, and the expression is never written with such an exponent.

- **Monotonicity in the base is what makes the comparisons below work.** For a
  fixed positive rational $r$ the map $a \mapsto a^{r}$ is strictly increasing on
  the positive reals ([[lem-rational-power-monotone]] clause 2), so an inequality
  between nonnegative sums passes through the outer power. That is the only
  property of rational powers used in the comparison chain of
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]].

- **The subscript $\infty$ is a name, not a number.** No arithmetic is performed
  with it, and $\lVert\cdot\rVert_\infty$ is not $\lVert\cdot\rVert_p$ for any
  exponent; it is a separately defined function that happens to sit at the end of
  the family. This is the same refusal to extend $\mathbb{R}$ silently that
  [[def-interval]] records for the interval notation.
````

### `def-sequence`

````markdown
---
id: def-sequence
kind: definition
title: "Sequences of reals: bounded, eventually, frequently, tails, subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-natural-numbers, def-nat-order, def-real-limit, def-real-order, def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "$(x_k)$, bounded, eventually, subsequence"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

## Remarks

- **Identification of $\mathbb{Q}$ with its image.** The map $q \mapsto \hat q$
  is an embedding of ordered fields ([[lem-rat-embeds-dense]]), and as is
  standard we write $q$ for $\hat q$, so that a rational may be compared with a
  real without further comment. [[def-real-limit]] is stated with the hat; every
  rational $\varepsilon$ occurring on this page is its image under this
  embedding.

- **Rational and real $\varepsilon$ agree.** [[def-real-limit]] tests convergence
  against every *rational* $\varepsilon > 0$, and its own remark records that
  this loses nothing. Spelled out: suppose that for every rational
  $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all
  $k \ge K$, and let $\eta > 0$ be an arbitrary *real*. Since $0 < \eta$,
  density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) supplies a
  rational $\varepsilon$ with $0 < \varepsilon < \eta$, and the index $K$
  belonging to that $\varepsilon$ satisfies $|x_k - x| < \varepsilon < \eta$ for
  all $k \ge K$. The converse implication is immediate, since every positive
  rational is a positive real. So the two formulations define the same relation,
  and the same two lines apply verbatim to the Cauchy condition and to any
  condition of the shape "for every $\varepsilon > 0$, eventually
  $\cdots < \varepsilon$". Proofs on this page therefore run the test with a real
  $\varepsilon$ wherever that is more convenient, and say so by citing this
  remark; nothing is smuggled in.

- **Constant sequences converge.** For $c \in \mathbb{R}$ the constant sequence
  $x_k := c$ converges to $c$, because $|x_k - c| = |0| = 0 < \varepsilon$ for
  every $\varepsilon > 0$ and every $k$; it is bounded by $|c|$.

- **Eventually and frequently are dual.** $P$ holds frequently exactly when
  $\lnot P$ does not hold eventually, and $P$ holds eventually exactly when
  $\lnot P$ does not hold frequently. So the two quantifier patterns are
  negations of one another applied to the complementary property, and there is no
  third pattern hiding between them.

- **A sequence is not its range.** $(x_k)$ is a function, not a set, and the
  range does not determine the function: the sequence $x_0 = 0$, $x_k = 1$ for
  $k \ge 1$ and the sequence $y_0 = y_1 = 0$, $y_k = 1$ for $k \ge 2$ have the
  same range $\{0, 1\}$, yet they differ at $k = 1$, so they are different
  sequences. Order and repetition are part of the data and the range forgets
  both. Boundedness, on the other hand, depends only on the range.

- **Indexing.** Sequences here start at $k = 0$ because $\mathbb{N}$ contains
  $0$ ([[def-natural-numbers]]). Texts that index from $1$ describe the same
  objects up to a shift, and the shift changes nothing about convergence, by
  [[lem-limit-of-tail]].
````

### `def-vector-valued-derivative-and-integral`

````markdown
---
id: def-vector-valued-derivative-and-integral
kind: definition
title: "The derivative and the Riemann integral of a function $[a,b] \\to \\mathbb{R}^m$, defined componentwise and characterised intrinsically"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-derivative, def-darboux-integral, def-oriented-integral, thm-linearity-of-the-integral, thm-algebra-of-derivatives, lem-metric-limits-unique, def-function-limit, lem-function-limit-unique, def-function-space, lem-standard-basis-of-f-n, def-interval, lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-limit-point-r, def-p-norms-on-rn, def-euclidean-inner-product, def-bounded-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Definition

Throughout, $m \in \mathbb{N}$ with $m \ge 1$, and vector-valued functions, their
components and their limits are as in
[[def-vector-valued-functions-limits-and-continuity]].

### The derivative

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}^{m}$ and let $c \in A$ be
a **limit point of $A$** ([[def-limit-point-r]]). The **difference quotient of
$f$ at $c$** is the vector-valued function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}^{m}, \qquad q_{f,c}(x) \;:=\; \frac{1}{x - c}\,\bigl(f(x) - f(c)\bigr),$$

the scalar multiple being that of the vector space $\mathbb{R}^{m}$
([[def-function-space]]); the division is legitimate because $x \ne c$ gives
$x - c \ne 0$. As in [[def-derivative]], $c$ is a limit point of
$A \setminus \{c\}$ as well, since a punctured neighbourhood of $c$ omits $c$.

$f$ is **differentiable at $c$** when $\lim_{x \to c} q_{f,c}(x)$ exists in
$\mathbb{R}^{m}$, and then the **derivative** is

$$f'(c) \;:=\; \lim_{x\to c} q_{f,c}(x) \;\in\; \mathbb{R}^{m}.$$

**The notation denotes a single vector.** At most one $L \in \mathbb{R}^{m}$
satisfies the limit condition, as proved in
[[def-vector-valued-functions-limits-and-continuity]]; this is the vector-valued
form of the obligation [[lem-function-limit-unique]] discharges for real-valued
functions and [[lem-metric-limits-unique]] for sequences.

**The intrinsic form is the definition; the componentwise form is a theorem.**
For $i < m$ the $i$-th component of $q_{f,c}(x)$ is
$\bigl(f_i(x)-f_i(c)\bigr)/(x-c)$, which is the real difference quotient of
$f_i$ at $c$ ([[def-derivative]]). So by
[[thm-componentwise-limits-and-continuity]] clause 2:

> $f$ is differentiable at $c$ **if and only if** every $f_i$ is differentiable
> at $c$, and then $f'(c)_i = f_i'(c)$ for every $i<m$.

Nothing below reverses this order of presentation: the intrinsic limit is what is
defined, and the coordinates are read off it.

**Algebra of derivatives.** If $f, g : A \to \mathbb{R}^{m}$ are differentiable at
$c$ and $\lambda \in \mathbb{R}$, then $f + g$ and $\lambda f$ are differentiable
at $c$ with $(f+g)'(c) = f'(c)+g'(c)$ and $(\lambda f)'(c) = \lambda f'(c)$: read
componentwise through the displayed equivalence, these are clauses 1 and 2 of the
published [[thm-algebra-of-derivatives]].

### The integral

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f : [a,b] \to \mathbb{R}^{m}$
([[def-interval]]). $f$ is **integrable on $[a,b]$** when every component
$f_i : [a,b] \to \mathbb{R}$ is bounded ([[def-bounded-set]]) and Darboux
integrable in the sense of [[def-darboux-integral]], and then

$$\int_a^b f \;:=\; \text{the function } m \to \mathbb{R} \text{ sending } i \mapsto \int_a^b f_i .$$

**That really is an element of $\mathbb{R}^{m}$.** In this library
$\mathbb{R}^{m}$ is the set of functions $m \to \mathbb{R}$
([[def-function-space]]), not a set of tuples, so the displayed assignment is
literally an element of it; each value $\int_a^b f_i$ is a single real by
[[def-darboux-integral]]. In the standard basis
([[lem-standard-basis-of-f-n]]) the same object is
$\int_a^b f = \sum_{i<m}\bigl(\int_a^b f_i\bigr)e_i$.

**Oriented limits.** Following [[def-oriented-integral]] componentwise, set

$$\int_a^a f \;:=\; 0 \in \mathbb{R}^{m}, \qquad \int_b^a f \;:=\; -\int_a^b f \quad (a < b),$$

so that $\int_u^v f = -\int_v^u f$ for all $u,v$ in an interval on which $f$ is
integrable. The clauses do not overlap with the case $a<b$, so nothing has to be
checked for consistency, exactly as in [[def-oriented-integral]].

**Linearity.** If $f, g : [a,b] \to \mathbb{R}^{m}$ are integrable and
$\lambda,\mu \in \mathbb{R}$ then $\lambda f + \mu g$ is integrable with

$$\int_a^b (\lambda f + \mu g) \;=\; \lambda\int_a^b f + \mu\int_a^b g ,$$

since each side has $i$-th coordinate $\int_a^b(\lambda f_i + \mu g_i)$ and
$\lambda\int_a^b f_i + \mu\int_a^b g_i$ respectively, and those agree by
[[thm-linearity-of-the-integral]].

**Restriction and splitting.** If $f$ is integrable on $[a,b]$ then it is
integrable on every closed subinterval, and for $a<c<b$,
$\int_a^b f = \int_a^c f + \int_c^b f$; both are the componentwise readings of
[[lem-integrability-on-a-subinterval]] and
[[thm-additivity-over-subintervals]], applied to each $f_i$ and reassembled
coordinate by coordinate.

## Remarks

- **The two halves are independent.** The derivative clause needs no integral and
  the integral clause needs no derivative; they are collected in one item because
  they are the two constructions of the one-dimensional theory that transfer to
  $\mathbb{R}^{m}$ by the same move, and because
  [[cor-vector-valued-ftc-and-lipschitz-bound]] is what joins them.

- **Why the intrinsic derivative is stated first.** The componentwise formula is
  the one used in computations, but it is tied to the standard basis, whereas the
  limit of the difference quotient is not. The intrinsic form is the one that
  survives when the domain is enlarged from an interval to a subset of
  $\mathbb{R}^{n}$, which is a later page of this track.

- **No norm appears in either definition.** The derivative is a limit in
  $(\mathbb{R}^{m}, d_2)$, and by [[thm-all-norms-on-rn-are-equivalent]] the same
  limits are obtained from any other norm, so the notion does not depend on the
  choice ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]]). The integral
  is defined coordinatewise and mentions no metric at all.

- **Integrability of $\lVert f\rVert_2$ is a separate matter** and is not part of
  this definition: it is proved, together with the inequality it belongs to, in
  [[thm-norm-inequality-for-the-vector-valued-integral]].
````

### `def-vector-valued-functions-limits-and-continuity`

````markdown
---
id: def-vector-valued-functions-limits-and-continuity
kind: definition
title: "Vector-valued functions $f : A \\to \\mathbb{R}^m$, their limits and continuity, with the dictionary to the metric notions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-euclidean-inner-product, def-norm-and-normed-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-metric-space, def-metric-continuity, def-metric-convergence, lem-metrics-on-rn, lem-real-and-metric-notions-agree, def-continuity-real, def-function-limit, def-limit-point-r, def-metric-ball, lem-standard-basis-of-f-n, def-lipschitz-holder-contraction, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Definition

Throughout, $m \in \mathbb{N}$ with $m \ge 1$, and $\mathbb{R}^{m}$ carries the
Euclidean norm $\lVert\cdot\rVert_2$ of [[def-euclidean-inner-product]] and
[[def-p-norms-on-rn]], whose induced metric is the published $d_2$
([[lem-p-norms-are-norms-and-induce-the-published-metrics]],
[[lem-metrics-on-rn]]). A function into $\mathbb{R}^{m}$ is called
**vector-valued**.

### Continuity

Let $(X, d_X)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$
carry the restricted metric $d_A$ ([[def-isometry-and-metric-embedding]]), let
$f : A \to \mathbb{R}^{m}$ and let $a \in A$. Then $f$ is **continuous at $a$**
when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ d_X(x,a) < \delta \ \Longrightarrow\ \lVert f(x) - f(a)\rVert_2 < \varepsilon\ \bigr],$$

with $\varepsilon, \delta$ ranging over the positive reals, and **continuous on
$A$** when it is continuous at every point of $A$.

**This is not a new notion, and that is the point of writing it down.** Since
$\lVert f(x)-f(a)\rVert_2 = d_2\bigl(f(x),f(a)\bigr)$ and $d_A$ is the
restriction of $d_X$, the displayed condition is **verbatim** the condition of
[[def-metric-continuity]] for the map of metric spaces
$f : (A,d_A) \to (\mathbb{R}^{m}, d_2)$. So every theorem about continuous maps
of metric spaces applies to vector-valued functions with no translation, and
this library has exactly one notion of continuity here. The same move was made
once before, between the $\mathbb{R}$-native and the metric notions, in
[[lem-real-and-metric-notions-agree]]; this item is that move one dimension up in
the codomain.

The two cases used below are $X = \mathbb{R}$ with $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]]) and $X = \mathbb{R}^{n}$ with $d_2$, for
$n \ge 1$.

### Limits, for a real domain

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}^{m}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $L \in \mathbb{R}^{m}$. We say
$f(x)$ **tends to $L$ as $x$ tends to $c$**, and write
$\lim_{x\to c} f(x) = L$, when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ \lVert f(x) - L\rVert_2 < \varepsilon\ \bigr].$$

This is the condition of [[def-function-limit]] with the absolute value in the
codomain replaced by $\lVert\cdot\rVert_2$; as there, the puncture $0 < |x-c|$ is
what makes $c$ a point the function need not be defined at, and the hypothesis
that $c$ is a limit point of $A$ is what stops the condition from being satisfied
vacuously.

**The notation denotes: at most one $L$ satisfies the condition.** Suppose $L$
and $L'$ both do and $L \ne L'$. Then $\varepsilon := \lVert L-L'\rVert_2 / 2 > 0$
by (N1) for $\lVert\cdot\rVert_2$ ([[def-norm-and-normed-space]]). Take $\delta$
and $\delta'$ for this $\varepsilon$ and put $\eta := \min\{\delta,\delta'\} > 0$.
Since $c$ is a limit point of $A$ there is $x \in A$ with $0 < |x-c| < \eta$
([[def-limit-point-r]]), and then

$$\lVert L - L'\rVert_2 \;\le\; \lVert L - f(x)\rVert_2 + \lVert f(x) - L'\rVert_2 \;<\; \varepsilon + \varepsilon \;=\; \lVert L-L'\rVert_2$$

by (N3) and (N2), which trichotomy forbids. So $L = L'$.

### Components

For $i < m$ define the $i$-th **coordinate projection**
$\pi_i : \mathbb{R}^{m} \to \mathbb{R}$ by $\pi_i(y) := y_i = y(i)$, and for
$f : A \to \mathbb{R}^{m}$ the $i$-th **component** $f_i := \pi_i \circ f$, a
real-valued function on $A$.

**Each $\pi_i$ is $1$-Lipschitz** ([[def-lipschitz-holder-contraction]]): for
$y, z \in \mathbb{R}^{m}$,

$$\bigl|\pi_i(y) - \pi_i(z)\bigr| \;=\; |y_i - z_i| \;\le\; \lVert y - z\rVert_2 \;=\; d_2(y,z),$$

the middle inequality being $|w_i| \le \lVert w\rVert_2$ at $w := y-z$
([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, or
directly because $w_i^{2}$ is one term of the sum $\sum_{k<m}w_k^{2}$). Written
in coordinates, $f(x)$ is the vector whose $i$-th coordinate is $f_i(x)$, and
$f(x) = \sum_{i<m} f_i(x)\,e_i$ in the standard basis
([[lem-standard-basis-of-f-n]]).

## Remarks

- **The codomain $\mathbb{R}^{0}$ is excluded by the standing hypothesis
  $m \ge 1$, and nothing is lost.** $\mathbb{R}^{0}$ has exactly one element, so
  every function into it is constant and every ball condition holds trivially;
  every such map is continuous and every limit is the unique point. That case is
  true, uninteresting, and not what this page is about. It is also outside the
  reach of [[lem-metrics-on-rn]], which defines the metrics only for $m \ge 1$.

- **The domain may be any metric space, and this matters twice below.** The
  derivative of [[def-vector-valued-derivative-and-integral]] needs a real
  domain, so it uses the limit clause; the companion page's function of two real
  variables needs the domain $\mathbb{R}^{2}$, so it uses the continuity clause.
  Both are instances of the same definition, and neither introduces a second
  notion.

- **When $m = 1$ the codomain is $\mathbb{R}^{1}$, not $\mathbb{R}$.** These are
  different sets, $\mathbb{R}^{1}$ being a set of functions $1 \to \mathbb{R}$.
  The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function
  with value $t$ at $0$ is an isometric bijection for $d_2$
  ([[def-isometry-and-metric-embedding]]), and under it the notions above become
  those of [[def-continuity-real]] and [[def-function-limit]]. Every comparison
  on this page between the vector-valued theory and the one-dimensional theory
  goes through that identification, stated explicitly each time.

- **Convergence of sequences in $\mathbb{R}^{m}$ is not redefined here.** It is
  [[def-metric-convergence]] for $(\mathbb{R}^{m},d_2)$, with balls as in
  [[def-metric-ball]], and its componentwise characterisation is
  [[thm-componentwise-convergence-and-completeness]].
````

### `lem-derivative-of-a-power`

````markdown
---
id: lem-derivative-of-a-power
kind: lemma
title: "For a natural $n \\ge 1$ the function $x \\mapsto x^{n}$ is differentiable everywhere with derivative $\\iota(n)\\,x^{\\,n-1}$; for $n = 0$ it is the constant $1$, with derivative $0$; for a natural $n \\ge 1$ the function $x \\mapsto x^{-n}$ is differentiable at every $x \\ne 0$ with derivative $-\\iota(n)\\,x^{-n-1}$; consequently every polynomial function is differentiable at every real, with the derivative computed term by term"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derivative, thm-algebra-of-derivatives, def-integer-power, lem-power-laws, def-canonical-natural, thm-induction-principle, def-finite-sum, def-function-limit, def-limit-point-r, def-neighbourhood-r]
justified_by: []
aliases: [lem-power-rule]
landmark: true
short: "the power rule"
proof_strategy: induction
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
    - title: "Power rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Statement

Powers are those of [[def-integer-power]], and $\iota : \mathbb{N} \to
\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that
$\iota(0) = 0$ and $\iota(m+1) = \iota(m) + 1$. Let $n \in \mathbb{N}$.

1. The function $p_0 : \mathbb{R} \to \mathbb{R}$, $p_0(x) = x^{0}$, is the
   constant function $1$, and it is differentiable at every $c \in \mathbb{R}$
   with $p_0'(c) = 0$ ([[def-derivative]]).
2. For $n \ge 1$ the function $p_n : \mathbb{R} \to \mathbb{R}$,
   $p_n(x) = x^{n}$, is differentiable at every $c \in \mathbb{R}$, and
   $$p_n'(c) \;=\; \iota(n)\,c^{\,n-1} .$$
3. For $n \ge 1$ put $A_0 := \{\, x \in \mathbb{R} : x \ne 0 \,\}$. The function
   $m_n : A_0 \to \mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every
   $c \in A_0$ as a function on $A_0$, and
   $$m_n'(c) \;=\; -\,\iota(n)\,c^{\,-n-1} .$$
4. Let $a : \mathbb{N} \to \mathbb{R}$ with $a_j = 0$ for $j \ge n$, and let
   $P : \mathbb{R} \to \mathbb{R}$ be the polynomial function
   $P(x) = \sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is
   differentiable at every $c \in \mathbb{R}$, and, defining $e : \mathbb{N}
   \to \mathbb{R}$ by $e_0 := 0$ and $e_j := \iota(j)\,a_j\,c^{\,j-1}$ for
   $j \ge 1$,
   $$P'(c) \;=\; \sum_{j<n} e_j .$$

**Claim 2 is stated for $n \ge 1$ and not for $n \ge 0$, and that is not
timidity.** At $n = 0$ its right-hand side reads $\iota(0)\,c^{-1}$, and
$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is
not a statement about the whole line. Claim 1 is what covers $n = 0$, and it
says the derivative is $0$ there, which is what the informal reading
"$0 \cdot c^{-1}$" is reaching for. The same shift is why the term $e_0$ of
claim 4 is defined to be $0$ outright rather than by the formula.

## Facts & Assumptions

**Given:** A natural $n$, a real $c$, and the functions $p_n$, $m_n$ and $P$ of the statement.

[L1] Powers ([[def-integer-power]]): $a^{0} = 1$ and $a^{m+1} = a^{m}a$ for every $a \in \mathbb{R}$ and $m \in \mathbb{N}$; $a^{-m} := (a^{m})^{-1}$ for $a \ne 0$ and $m \ge 1$; and $0^{m} = 0$ for $m \ge 1$.

[L2] Canonical naturals ([[def-canonical-natural]]): $\iota(0) = 0$, $\iota(m+1) = \iota(m) + 1$, and hence $\iota(1) = 1$.

[L3] Algebra of derivatives ([[thm-algebra-of-derivatives]]): at a limit point $c$ of the common domain, sums, scalar multiples and products of functions differentiable at $c$ are differentiable at $c$ with the four stated formulas, and if the denominator is nonzero at $c$ then the quotient, restricted to the set where the denominator does not vanish, is differentiable at $c$ with the quotient formula; that restricted set has $c$ as a limit point.

[L4] Derivative and difference quotient ([[def-derivative]]): $f$ is differentiable at a limit point $c$ of its domain $D$ exactly when the difference quotient $x \mapsto (f(x)-f(c))/(x-c)$, a function on $D \setminus \{c\}$, has a limit at $c$, and $f'(c)$ is that limit. A constant function $h \equiv K$ on a set having $c$ as a limit point has $\lim_{x \to c} h(x) = K$: given a real $\varepsilon > 0$, any real $\delta > 0$ serves, since $|K - K| = 0 < \varepsilon$ ([[def-function-limit]]).

[L5] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] Finite sums ([[def-finite-sum]]): $\sum_{j<0} b_j = 0$ and $\sum_{j<m+1} b_j = \bigl(\sum_{j<m} b_j\bigr) + b_m$.

[L7] Integer exponent laws for a nonzero base ([[lem-power-laws]]): $a^{k} \ne 0$ for every $k \in \mathbb{N}$ when $a \ne 0$; and for integers $j, k$ one has $a^{j}a^{k} = a^{j+k}$, $(a^{j})^{k} = a^{jk}$ and $a^{-k} = (a^{k})^{-1}$.

[L8] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods in $\mathbb{R}$ being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Proof

**Proof technique:** induction.

1.1 **Base case, claim 2 at $n = 1$.** By [L1], $x^{1} = x^{0}x = 1 \cdot x = x$, so $p_1$ is the identity. Fix $c \in \mathbb{R}$; for every $x \ne c$ the difference quotient is $(x - c)/(x - c) = 1$, so it is the constant function $1$ on $\mathbb{R} \setminus \{c\}$, and by [L4] and [L8] its limit at $c$ is $1$. Since $\iota(1)c^{0} = 1 \cdot 1 = 1$ by [L1] and [L2], claim 2 holds at $n = 1$. [base, L1, L2, L4, L8]

1.2 **Inductive hypothesis.** Fix a natural $n \ge 1$ and assume that $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$. [ih]

1.3 **Claim 1.** By [L1] the function $p_0$ is the constant function $1$. Fix $c \in \mathbb{R}$; for every $x \ne c$ its difference quotient is $(1-1)/(x-c) = 0$, the constant function $0$ on $\mathbb{R}\setminus\{c\}$, whose limit at $c$ is $0$ by [L4] and [L8]. So $p_0$ is differentiable at every $c$ with $p_0'(c) = 0$. [L1, L4, L8]

2.1 **Successor step.** Let $c \in \mathbb{R}$. By [L1], $p_{n+1}(x) = x^{n+1} = x^{n}x = p_n(x)\,p_1(x)$ for every $x$. Both factors are differentiable at $c$, by step 1.2 and step 1.1, so the product rule of [L3] gives that $p_{n+1}$ is differentiable at $c$ with $p_{n+1}'(c) = p_n'(c)p_1(c) + p_n(c)p_1'(c) = \iota(n)c^{\,n-1}c + c^{n} \cdot 1$. Now $c^{\,n-1}c = c^{\,(n-1)+1} = c^{n}$ by [L1], so the right-hand side is $\iota(n)c^{n} + c^{n} = \bigl(\iota(n)+1\bigr)c^{n} = \iota(n+1)c^{n}$ by [L2]. [step 1.1, step 1.2, L1, L2, L3]

3.1 **Claim 2.** Steps 1.1 and 2.1 are the base case and the successor step of an induction over the naturals $n \ge 1$, so by [L5] the function $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$, for every natural $n \ge 1$. [step 1.1, step 2.1, L5]

4.1 **Claim 3.** Let $n \ge 1$. The set $\{\, x \in \mathbb{R} : p_n(x) \ne 0 \,\}$ is exactly $A_0$: a nonzero $x$ has $x^{n} \ne 0$ by [L7], and $0^{n} = 0$ by [L1]. Fix $c \in A_0$. The constant function $1$ on $\mathbb{R}$ is differentiable at $c$ with derivative $0$ by step 1.3, and $p_n$ is differentiable at $c$ with derivative $\iota(n)c^{\,n-1}$ by step 3.1, with $p_n(c) = c^{n} \ne 0$. So the quotient rule of [L3] applies: the function $x \mapsto 1/x^{n}$ on $A_0$, which by [L1] and [L7] is $m_n$, is differentiable at $c$ with derivative $\bigl(0 \cdot c^{n} - 1 \cdot \iota(n)c^{\,n-1}\bigr)/(c^{n})^{2} = -\iota(n)\,c^{\,n-1}\bigl(c^{\,2n}\bigr)^{-1} = -\iota(n)\,c^{\,n-1-2n} = -\iota(n)\,c^{\,-n-1}$, where $(c^{n})^{2} = c^{\,2n}$ and $c^{\,n-1}c^{\,-2n} = c^{\,-n-1}$ are [L7]. [step 1.3, step 3.1, L1, L3, L7]

4.2 **Claim 4, by a second induction on $n$.** Fix $c \in \mathbb{R}$ and the sequence $a$. At $n = 0$ the sum $P(x) = \sum_{j<0} a_j x^{j}$ is $0$ for every $x$ by [L6], so $P$ is the constant function $0$ and, as in step 1.3, $P'(c) = 0 = \sum_{j<0} e_j$. Suppose the claim holds at $n$, and let $P_{n+1}(x) := \sum_{j<n+1} a_j x^{j}$. By [L6], $P_{n+1}(x) = P_n(x) + a_n x^{n}$ for every $x$, where $P_n(x) = \sum_{j<n} a_j x^{j}$. The function $x \mapsto a_n x^{n}$ is differentiable at $c$ with derivative $e_n$: for $n = 0$ it is the constant $a_n$, of derivative $0 = e_0$, by step 1.3 and the scalar rule of [L3]; for $n \ge 1$ it is the scalar multiple $a_n p_n$, of derivative $a_n \iota(n)c^{\,n-1} = e_n$, by step 3.1 and the scalar rule of [L3]. The inductive hypothesis gives $P_n'(c) = \sum_{j<n} e_j$, so the sum rule of [L3] gives that $P_{n+1}$ is differentiable at $c$ with $P_{n+1}'(c) = \sum_{j<n} e_j + e_n = \sum_{j<n+1} e_j$ by [L6]. By [L5] claim 4 holds for every $n \in \mathbb{N}$. [step 1.3, step 3.1, L3, L5, L6]

5.1 All four claims are established: claim 1 by step 1.3, claim 2 by step 3.1, claim 3 by step 4.1 and claim 4 by step 4.2. [step 1.3, step 3.1, step 4.1, step 4.2, discharge-induction] ∎

## Remarks

- **Why the induction starts at $n = 1$ and not at $n = 0$.** The successor step multiplies by the identity, and the identity is $p_1$; starting at $n = 0$ would require the formula of claim 2 to hold at $n = 0$, which it does not, since $c^{-1}$ is undefined at $c = 0$. The two statements are therefore kept apart, and claim 1 is proved on its own from the definition. This is the same index care that [[def-canonical-natural]] records for families of reciprocals: $\mathbb{N}$ contains $0$, and a formula written for "$n$" is a claim about $n = 0$ unless it says otherwise.

- **The negative exponents cost nothing extra.** Claim 3 is the quotient rule of [[thm-algebra-of-derivatives]] applied with numerator the constant $1$, and the domain it produces, the set where $x^{n}$ does not vanish, is exactly $\mathbb{R} \setminus \{0\}$; no separate argument and no separate limit is needed. Rational exponents are a different matter, resting on [[thm-nth-roots-exist]], and are treated on the companion page rather than here.

- **Claim 4 is a statement about a finite sum, not about an infinite one.** Nothing here says anything about differentiating a series term by term; that is a separate question, needing hypotheses about convergence that this page does not have and does not assume.
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

### `lem-of-square-monotone`

````markdown
---
id: lem-of-square-monotone
kind: lemma
title: "Squaring is monotone on the nonnegatives"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-sign-rules, lem-of-zero-mult, lem-of-abs-value]
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
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field. For $a, b \ge 0$:

$$a < b \iff a^2 < b^2, \qquad a \le b \iff a^2 \le b^2.$$

More generally, for arbitrary $a, b \in F$, $a^2 < b^2 \iff |a| < |b|$.

## Facts & Assumptions

**Given:** Elements $a, b$ of an ordered field $F$.

[L1] For a positive factor $s > 0$ and any $t$: $t > 0 \iff st > 0$; this is [[lem-of-sign-rules]] (the rule $c > 0 \Rightarrow (x < y \iff xc < yc)$ taken at $x = 0$, $y = t$, $c = s$, using $0 \cdot s = 0$, [[lem-of-zero-mult]]).

[L2] Trichotomy: for $a, b$ exactly one of $a < b$, $a = b$, $a > b$ holds; and a sum of two nonnegatives with at least one positive is positive ([[def-ordered-field]]).

[L3] $|x| \ge 0$ and $|x|^2 = x^2$ for every $x$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 The difference factors as $b^2 - a^2 = (b - a)(b + a)$. [algebra]

2.1 If $a, b \ge 0$ and $a < b$, then $b > 0$, so $b + a > 0$ by [L2], and $b - a > 0$; by [L1] with $s = b + a$ and $t = b - a$, $(b - a)(b + a) > 0$, i.e. $a^2 < b^2$. [L1, L2, step 1.1]

2.2 If $a, b \ge 0$ and $a^2 < b^2$, then $b^2 - a^2 > 0$, so $a, b$ are not both zero and $b + a > 0$ by [L2]; by [L1] with $s = b + a$, from $(b - a)(b + a) = b^2 - a^2 > 0$ we get $b - a > 0$, i.e. $a < b$. [L1, L2, step 1.1]

3.1 Hence for $a, b \ge 0$, $a < b \iff a^2 < b^2$. [step 2.1, step 2.2]

4.1 The $\le$ form follows by trichotomy: for $a, b \ge 0$, applying step 3.1 to the nonnegatives $b, a$ gives $a \le b \iff \lnot(b < a) \iff \lnot(b^2 < a^2) \iff a^2 \le b^2$. [step 3.1, L2]

5.1 For arbitrary $a, b$, [L3] gives $|a|, |b| \ge 0$ with $|a|^2 = a^2$ and $|b|^2 = b^2$; applying step 3.1 to $|a|, |b|$ yields $a^2 < b^2 \iff |a|^2 < |b|^2 \iff |a| < |b|$. [step 3.1, L3] ∎
````

### `lem-standard-basis-of-f-n`

````markdown
---
id: lem-standard-basis-of-f-n
kind: lemma
title: "The standard list $e : n \\to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \\ne i$ is an ordered basis of $F^{n}$; hence $\\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\\varnothing$ and dimension $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-basis, def-dimension, def-linear-independence, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-function-space, def-linear-combination-and-span, def-sum-of-linear-subspaces, def-monoid-finite-product, lem-restriction-of-scalars, def-vector-space, def-field, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection, def-equinumerous, def-countable]
justified_by: []
aliases: [lem-standard-basis, def-standard-unit-vectors]
landmark: true
short: "$\\dim_F F^{n} = n$"
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
    - title: "Standard basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Standard_basis"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]), let $n \in \mathbb{N}$ and let $F^{n}$ be the
function space on the von Neumann natural $n = \{0, \dots, n-1\}$, with the
pointwise operations ([[def-function-space]], [[def-natural-numbers]],
[[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector**
$e_i \in F^{n}$ by

$$e_i(i) = 1_F, \qquad e_i(j) = 0_F \ \text{ for } j < n \text{ with } j \ne i .$$

Then:

1. **Finite sums in a function space are pointwise.** For every set $X$, every
   $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$,
   $$\Bigl(\sum_{k<p} u_k\Bigr)(j) \;=\; \sum_{k<p} u_k(j),$$
   the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary
   $X$ because the companion page needs it at $X = \mathbb{N}$.)
2. $e : n \to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in
   particular $e$ is injective and its image $e[n] = \{\, e_i : i < n \,\}$ is a
   basis of $F^{n}$ with $e[n] \approx n$ ([[def-equinumerous]]);
3. for every $\lambda : n \to F$ and every $j < n$,
   $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$; equivalently the
   coordinate list of $x \in F^{n}$ with respect to the ordered basis $e$
   ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is
   $i \mapsto x(i)$;
4. $F^{n}$ is finite-dimensional over $F$ with $\dim_F F^{n} = n$
   ([[def-dimension]]);
5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function,
   so $F^{0}$ is the zero space, the empty list is its ordered basis,
   $\varnothing$ is its basis and $\dim_F F^{0} = 0$.

Every index runs from $0$, so the coordinates of an element of $F^{n}$ are
$x_0, \dots, x_{n-1}$ and no statement above is restricted to $n \ge 1$.

## Facts & Assumptions

**Given:** A field $F$, a natural number $n$, the vector space $F^{n}$ with pointwise operations, and the vectors $e_i$ for $i < n$.

[L1] $F^{X}$ is a vector space over $F$ with $(x+y)(j) = x(j)+y(j)$, $(\lambda x)(j) = \lambda\,x(j)$ and zero the constant function at $0_F$; two elements are equal exactly when they agree at every point; and $F^{0}$ has exactly one element, the empty function, which is $0_{F^{0}}$ ([[def-function-space]], [[def-vector-space]]).

[L2] Finite sums: $\sum_{k<0}u_k$ is the zero vector and $\sum_{k<\sigma(p)}u_k = \bigl(\sum_{k<p}u_k\bigr) + u_p$, in any vector space ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] $F$ is a vector space over itself, with the field addition and multiplication ([[lem-restriction-of-scalars]], claim 1), so the finite sums of $\mathbb{N}$-indexed lists of scalars are available in $(F,+,0_F)$ and satisfy (F1) and (F3); in particular a list of scalars vanishing off a single index sums to its value at that index ([[def-sum-of-linear-subspaces]]).

[L4] In $F$: $\lambda 1_F = \lambda$ and $\lambda 0_F = 0_F$ for every $\lambda \in F$ ([[def-field]], [[lem-vector-space-elementary-consequences]]).

[L5] A list $v : n \to V$ is an ordered basis of $V$ if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$; an ordered basis is injective and its image is a basis with $v[n] \approx n$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-linear-independence]], [[def-injection-surjection-bijection]]).

[L6] $\dim_F V$ is the unique $p \in \mathbb{N}$ with a basis $B \approx p$, defined when $V$ has a finite basis ([[def-dimension]], [[def-countable]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1, that a finite sum in $F^{X}$ is computed pointwise: for every $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$, $\bigl(\sum_{k<p}u_k\bigr)(j) = \sum_{k<p}u_k(j)$, the right-hand sum being taken in $(F,+,0_F)$. By induction on $p$: at $p = 0$ the left side is the value at $j$ of the constant function $0_F$ and the right side is the empty sum $0_F$; and if it holds at $p$, then $\bigl(\sum_{k<\sigma(p)}u_k\bigr)(j) = \bigl(\sum_{k<p}u_k + u_p\bigr)(j) = \bigl(\sum_{k<p}u_k\bigr)(j) + u_p(j) = \sum_{k<p}u_k(j) + u_p(j) = \sum_{k<\sigma(p)}u_k(j)$, using pointwise addition and the recursion. [L1, L2, L3, L7]

2.1 Evaluating a combination of the $e_i$. Let $\lambda : n \to F$ and $j < n$. By step 1.1 and pointwise scalar multiplication, $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \sum_{i<n}(\lambda_i e_i)(j) = \sum_{i<n}\lambda_i\, e_i(j)$. The list of scalars $i \mapsto \lambda_i\,e_i(j)$ takes the value $\lambda_i 0_F = 0_F$ at every $i \ne j$ and the value $\lambda_j 1_F = \lambda_j$ at $i = j$, so it vanishes off the single index $j$ and therefore sums to $\lambda_j$. Hence $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$ for every $j < n$. [step 1.1, L1, L3, L4]

3.1 Existence and uniqueness of coordinates. Given $x \in F^{n}$, put $\lambda_i := x(i)$; by step 2.1 the vectors $\sum_{i<n}\lambda_i e_i$ and $x$ agree at every $j < n$, hence are equal. And if $\sum_{i<n}\lambda_i e_i = \sum_{i<n}\mu_i e_i$, then evaluating both sides at $j$ and using step 2.1 gives $\lambda_j = \mu_j$ for every $j < n$. So every $x \in F^{n}$ is $\sum_{i<n}\lambda_i e_i$ for exactly one $\lambda : n \to F$. [step 2.1, L1]

4.1 Claims 2 and 3. Step 2.1 is claim 3, and by the coordinate characterisation of an ordered basis, step 3.1 says exactly that $e$ is an ordered basis of $F^{n}$; hence $e$ is injective, $e[n]$ is a basis of $F^{n}$, and $e[n] \approx n$. [step 2.1, step 3.1, L5]

5.1 Claims 4 and 5. By step 4.1 the space $F^{n}$ has a basis with $n$ elements, so it is finite-dimensional and $\dim_F F^{n} = n$. At $n = 0$ the space $F^{0}$ has exactly one element, the empty function, which is its zero vector, so $F^{0}$ is the zero space; the list $e$ is then the empty list, its image is $\varnothing$, and $\dim_F F^{0} = 0$. [step 4.1, L1, L6] ∎

## Remarks

- **The indices start at $0$ because a natural number is the set of its predecessors.** $F^{n}$ is the function space $F^{X}$ at $X = n = \{0,\dots,n-1\}$ ([[def-function-space]], [[lem-nat-order-is-membership]]), so an element of $F^{n}$ is a function on $\{0,\dots,n-1\}$ and there is no $e_n$. Reading the standard basis off a $1$-indexed source would put a vector outside the space at one end and lose one at the other.

- **Step 1.1 is not a triviality to be skipped.** That a finite sum of functions is the pointwise finite sum is a statement about the recursion defining [[def-monoid-finite-product]] in two different monoids, and it is proved by induction. Every evaluation argument on this page and on the companion page rests on it.

- **This is the concrete counterweight to [[cor-every-vector-space-has-a-basis]].** Here a basis is written down and no choice principle is used anywhere; there a basis is produced by Zorn's lemma and none is exhibited. The companion page carries both extremes for infinite-dimensional spaces as well: an explicit infinite basis for the eventually zero families, and a basis of $\mathbb{R}$ over $\mathbb{Q}$ that no argument exhibits.
````

### `thm-algebra-of-continuous-functions`

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
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
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
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

### `thm-componentwise-convergence-and-completeness`

````markdown
---
id: thm-componentwise-convergence-and-completeness
kind: theorem
title: "For $n \\ge 1$ a sequence in $\\mathbb{R}^n$ converges iff each coordinate sequence converges, is Cauchy iff each coordinate sequence is Cauchy, and $\\mathbb{R}^n$ is complete in every norm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, lem-p-norms-are-norms-and-induce-the-published-metrics, def-p-norms-on-rn, thm-euclidean-space-complete, def-complete-metric-space, def-metric-convergence, def-cauchy-in-metric, lem-metric-limits-unique, lem-metric-convergent-implies-cauchy, lem-metrics-on-rn, lem-standard-basis-of-f-n, def-sequence, def-real-limit, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-real-line-is-a-metric-space, def-norm-and-normed-space, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the Euclidean
metric $d_2$ of [[lem-metrics-on-rn]], and let $\bigl(x^{(j)}\bigr)_{j\in\mathbb{N}}$
be a sequence in $\mathbb{R}^{n}$ ([[def-metric-convergence]]). For $k < n$ write
$\bigl(x^{(j)}_k\bigr)_{j\in\mathbb{N}}$ for the $k$-th **coordinate sequence**,
a sequence of reals ([[def-sequence]]). Then:

1. **Convergence is componentwise.** For $x \in \mathbb{R}^{n}$,
   $x^{(j)} \to x$ in $(\mathbb{R}^{n}, d_2)$ if and only if
   $x^{(j)}_k \to x_k$ in $\mathbb{R}$ for every $k<n$
   ([[def-real-limit]]).
2. **Cauchyness is componentwise.** $\bigl(x^{(j)}\bigr)$ is Cauchy in
   $(\mathbb{R}^{n},d_2)$ ([[def-cauchy-in-metric]]) if and only if every
   coordinate sequence is Cauchy in $\mathbb{R}$.
3. **Completeness in every norm.** For every norm $N$ on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]) the metric space $(\mathbb{R}^{n}, d_N)$ is
   complete ([[def-complete-metric-space]]).

**Clause 3 is obtained by citation and is not reproved here.**
[[thm-euclidean-space-complete]] clause 2 states that $(\mathbb{R}^{n},d_2)$ is
complete, **for $n \ge 1$ only**, and this theorem carries that hypothesis
forward without weakening it; what is added is the passage from $d_2$ to an
arbitrary norm, through [[thm-all-norms-on-rn-are-equivalent]] and the dictionary
of [[def-equivalent-norms]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$; the space $\mathbb{R}^{n}$ with the norms of [[def-p-norms-on-rn]] and the metric $d_2$; a sequence $\bigl(x^{(j)}\bigr)$ in $\mathbb{R}^{n}$; a point $x \in \mathbb{R}^{n}$; a norm $N$ on $\mathbb{R}^{n}$; and a rational $\varepsilon > 0$.

[L1] The comparison chain for $n \ge 1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3): $\lVert y\rVert_\infty \le \lVert y\rVert_2 \le \lVert y\rVert_1 \le \iota(n)\lVert y\rVert_\infty$ for every $y \in \mathbb{R}^{n}$, where $\lVert y\rVert_\infty = \max\{|y_k| : k<n\}$ ([[def-p-norms-on-rn]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L2] The dictionary $d_2(u,v) = \lVert u-v\rVert_2$, and $(u-v)_k = u_k - v_k$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-standard-basis-of-f-n]]).

[L3] Convergence and Cauchyness in a metric space, and their agreement on $\mathbb{R}$ with the real notions ([[def-metric-convergence]], [[def-cauchy-in-metric]], [[def-real-limit]], [[lem-real-line-is-a-metric-space]]); rational and real $\varepsilon$ may be used interchangeably in both.

[L4] $(\mathbb{R}^{n}, d_2)$ is complete for $n \ge 1$ ([[thm-euclidean-space-complete]] clause 2, [[def-complete-metric-space]]).

[L5] All norms on $\mathbb{R}^{n}$ are equivalent for $n \ge 1$ ([[thm-all-norms-on-rn-are-equivalent]]), and equivalent norms have the same convergent sequences with the same limits and the same Cauchy sequences ([[def-equivalent-norms]]).

[L6] Limits in a metric space are unique, and every convergent sequence is Cauchy ([[lem-metric-limits-unique]], [[lem-metric-convergent-implies-cauchy]]).

[L7] $\iota(n) > 0$ for $n \ge 1$, and $u > 0$ gives $u^{-1} > 0$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L8] A nonempty finite set of naturals has a greatest element, and every nonempty set of naturals has a least element ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 For every $y \in \mathbb{R}^{n}$ and every $k<n$: $|y_k| \le \lVert y\rVert_\infty \le \lVert y\rVert_2$, the first inequality because $\lVert y\rVert_\infty$ bounds the set it is the maximum of. [L1]

1.2 For every $y \in \mathbb{R}^{n}$: $\lVert y\rVert_2 \le \iota(n)\lVert y\rVert_\infty$, and $\lVert y\rVert_\infty = |y_{k_0}|$ for some $k_0 < n$. [L1]

1.3 Conversely suppose $x^{(j)}_k \to x_k$ for every $k<n$. Given a rational $\varepsilon > 0$, the real $\varepsilon/\iota(n)$ is positive, so for each $k<n$ the set of indices $K$ such that $|x^{(j)}_k - x_k| < \varepsilon/\iota(n)$ for all $j \ge K$ is a nonempty set of naturals; let $K_k$ be its least element, a determination rather than a selection, and put $K := \max\{K_0,\dots,K_{n-1}\}$, a maximum of a nonempty finite set of naturals. [L3, L7, L8]

1.4 $(\mathbb{R}^{n},d_2)$ is complete, by citation and for $n \ge 1$ only. [L4]

1.5 Let $N$ be any norm on $\mathbb{R}^{n}$. By [L5], $N$ and $\lVert\cdot\rVert_2$ are equivalent, so $d_N$ and $d_2$ have the same Cauchy sequences and the same convergent sequences with the same limits. [L5]

2.1 For all $u,v \in \mathbb{R}^{n}$ and $k<n$: $|u_k - v_k| \le d_2(u,v) \le \iota(n)\max\{|u_k-v_k| : k<n\}$, by steps 1.1 and 1.2 applied to $y := u - v$. [step 1.1, step 1.2, L2]

2.2 Hence a Cauchy sequence in $(\mathbb{R}^{n},d_N)$ is Cauchy in $(\mathbb{R}^{n},d_2)$, converges there by step 1.4, and therefore converges in $(\mathbb{R}^{n},d_N)$ to the same point; so $(\mathbb{R}^{n},d_N)$ is complete, which is clause 3. [step 1.4, step 1.5, L5, L6]

3.1 Suppose $x^{(j)} \to x$ in $(\mathbb{R}^{n},d_2)$ and fix $k<n$. Given a rational $\varepsilon > 0$, take $K$ with $d_2(x^{(j)},x) < \varepsilon$ for $j \ge K$; then $|x^{(j)}_k - x_k| \le d_2(x^{(j)},x) < \varepsilon$ for $j \ge K$, so $x^{(j)}_k \to x_k$. [step 2.1, L3]

3.2 For $j \ge K$ and every $k<n$ we have $|x^{(j)}_k - x_k| < \varepsilon/\iota(n)$; the maximum of these $n$ numbers is one of them, so $\max\{|x^{(j)}_k - x_k| : k<n\} < \varepsilon/\iota(n)$ and hence $d_2(x^{(j)},x) < \iota(n)\cdot\varepsilon/\iota(n) = \varepsilon$ by step 2.1. Therefore $x^{(j)} \to x$. [step 2.1, step 1.3, L1, L7]

3.3 The same two estimates prove clause 2 with $x$ replaced by $x^{(l)}$ throughout: if $d_2(x^{(j)},x^{(l)}) < \varepsilon$ for $j,l \ge K$ then $|x^{(j)}_k - x^{(l)}_k| < \varepsilon$ for $j,l \ge K$ and every $k<n$; and conversely, choosing for each $k<n$ the least $K_k$ beyond which $|x^{(j)}_k - x^{(l)}_k| < \varepsilon/\iota(n)$ for $j,l \ge K_k$ and taking $K := \max\{K_0,\dots,K_{n-1}\}$ gives $d_2(x^{(j)},x^{(l)}) < \varepsilon$ for $j,l \ge K$. [step 2.1, L3, L7, L8]

4.1 Steps 3.1 and 3.2 are the two directions of clause 1. [step 3.1, step 3.2]

5.1 Clauses 1, 2 and 3 are steps 4.1, 3.3 and 2.2. [step 4.1, step 3.3, step 2.2] ∎

## Remarks

- **No choice principle is used.** The only place a family of indices is produced is steps 1.3 and 3.3, where finitely many indices are obtained, each as the **least** element of a nonempty set of naturals ([[thm-well-ordering-principle]]). A least element is determined by the set, not selected from it.

- **What happens at $n = 0$, stated separately because the theorem does not cover it.** $\mathbb{R}^{0}$ has exactly one element, the empty function, and is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); by [[def-norm-and-normed-space]] it carries exactly one norm, the zero function, whose induced metric is constantly $0$. Every sequence in a one-point metric space is Cauchy and converges to that point, so $(\mathbb{R}^{0}, d_N)$ is complete. **That statement is proved here from scratch in this remark and is not obtained from [[thm-euclidean-space-complete]]**, which is stated for $n \ge 1$ only because $d_\infty$ is a maximum over an empty index set at $n = 0$. Clauses 1 and 2 are vacuous at $n = 0$, there being no index $k<0$.

- **Clause 1 is the reason the rest of this page can work coordinatewise.** Every later item that reduces a statement about $\mathbb{R}^{n}$ or $\mathbb{R}^{m}$ to $n$ or $m$ statements about $\mathbb{R}$ passes through it, and each such item therefore carries the hypothesis $n \ge 1$ or $m \ge 1$ in its own statement.
````

### `thm-componentwise-limits-and-continuity`

````markdown
---
id: thm-componentwise-limits-and-continuity
kind: theorem
title: "A vector-valued function has a limit, or is continuous, if and only if each of its components does; with the algebra of continuous vector-valued functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-convergence-and-completeness, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, def-metric-continuity, def-function-limit, def-limit-point-r, lem-finite-sum-laws, def-finite-sum, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-finite-choice, lem-of-abs-value, def-metric-space, lem-real-line-is-a-metric-space, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "MAT237 Multivariable Calculus, Section 1.2: Limits and continuity"
      url: "https://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter1/S1.2.html"
    - title: "APEX Calculus, Section 12.2: Calculus and Vector-Valued Functions"
      url: "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, with vector-valued functions, their
components $f_i = \pi_i \circ f$, their limits and their continuity as in
[[def-vector-valued-functions-limits-and-continuity]].

1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \subseteq X$,
   $f : A \to \mathbb{R}^{m}$ and $a \in A$. Then $f$ is continuous at $a$ if and
   only if every component $f_i : A \to \mathbb{R}$ $(i<m)$ is continuous at $a$.
2. **Limits are componentwise.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
   point of $A$ ([[def-limit-point-r]]), let $f : A \to \mathbb{R}^{m}$ and let
   $L \in \mathbb{R}^{m}$. Then $\lim_{x\to c} f(x) = L$ if and only if
   $\lim_{x\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]).
3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let
   $f, g : A \to \mathbb{R}^{m}$ be continuous at $a$ and let $\lambda \in \mathbb{R}$.
   Then $f + g$ and $\lambda f$ (defined pointwise) are continuous at $a$; the
   real-valued function $x \mapsto \langle f(x), g(x)\rangle$ is continuous at
   $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on
   $\mathbb{R}^{m}$ the real-valued function $x \mapsto N(f(x))$ is continuous at
   $a$ ([[def-norm-and-normed-space]]).

**Where $m \ge 1$ is spent.** The "if" direction of clauses 1 and 2 divides
$\varepsilon$ by $\iota(m)$, which requires $\iota(m) \ne 0$; and clause 3's last
part quotes a bound available only for $m \ge 1$. The "only if" directions hold
for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.

## Facts & Assumptions

**Given:** A natural $m \ge 1$; a metric space $(X,d_X)$, a subset $A \subseteq X$, a point $a \in A$ and functions $f, g : A \to \mathbb{R}^{m}$; a real $\lambda$; and a real $\varepsilon > 0$.

[L1] Continuity and limits of vector-valued functions in the $\varepsilon$-$\delta$ form, the coordinate projections $\pi_i$, and $|y_i| \le \lVert y\rVert_2$ for $i<m$ ([[def-vector-valued-functions-limits-and-continuity]], [[def-metric-continuity]], [[def-metric-space]], [[lem-real-line-is-a-metric-space]]).

[L2] The comparison $\lVert y\rVert_2 \le \lVert y\rVert_1 = \sum_{i<m}|y_i|$, and $N(y) \le C\lVert y\rVert_1 \le C\sqrt{\iota(m)}\lVert y\rVert_2$ with $C := \max\{N(e_i) : i<m\} \ge 0$, together with $|N(y)-N(z)| \le N(y-z)$, all for $m \ge 1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 1, 2, 3, [[def-p-norms-on-rn]], [[lem-standard-basis-of-f-n]]).

[L3] The norm axioms for $\lVert\cdot\rVert_2$ ([[def-norm-and-normed-space]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and $\lVert u-v\rVert_2 = d_2(u,v)$.

[L4] Cauchy-Schwarz: $|\langle u,v\rangle| \le \lVert u\rVert_2\lVert v\rVert_2$, together with bilinearity and symmetry of the inner product ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

[L5] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{i<m}\mu = \iota(m)\mu$, a sum of nonnegative terms is nonnegative, and each single term is at most such a sum.

[L6] $\iota(m) > 0$ for $m \ge 1$, and $u>0$ gives $u^{-1}>0$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L7] A nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]); and a family of nonempty sets indexed by a natural number has a choice function, this being a theorem of ZF ([[lem-finite-choice]]), which is what licenses picking one $\delta_i$ for each $i<m$.

[L8] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|st| = |s||t|$, and $|s+t| \le |s|+|t|$.

## Proof

**Proof technique:** direct.

1.1 For every $y \in \mathbb{R}^{m}$: $|y_i| \le \lVert y\rVert_2$ for each $i<m$, and $\lVert y\rVert_2 \le \sum_{i<m}|y_i|$. [L1, L2]

1.2 If $a_i < b_i$ for every $i<m$ and $m \ge 1$, then $\sum_{i<m}a_i < \sum_{i<m}b_i$: the list $i \mapsto b_i - a_i$ has positive terms, so its sum is at least its term at index $0$, hence positive, and additivity gives the strict inequality. [L5, L6]

1.3 For each $i<m$ the set of positive reals $\delta$ witnessing continuity of $f_i$ at $a$ for a given tolerance is nonempty whenever $f_i$ is continuous at $a$, so a choice function on the family indexed by $m$ produces $\delta_0,\dots,\delta_{m-1}$ simultaneously, with no choice principle used. [L7]

1.4 For $f+g$: given $\varepsilon > 0$, pick $\delta_1, \delta_2 > 0$ for the tolerance $\varepsilon/\iota(2)$ at $f$ and at $g$ and put $\delta := \min\{\delta_1,\delta_2\}$; then for $d_X(x,a) < \delta$, $\lVert (f+g)(x)-(f+g)(a)\rVert_2 = \lVert (f(x)-f(a)) + (g(x)-g(a))\rVert_2 \le \lVert f(x)-f(a)\rVert_2 + \lVert g(x)-g(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L7]

1.5 For $\lambda f$: if $\lambda = 0$ then $\lambda f$ is constant and every $\delta$ serves; otherwise $|\lambda| > 0$, and a $\delta$ for the tolerance $\varepsilon/|\lambda|$ at $f$ gives $\lVert \lambda f(x) - \lambda f(a)\rVert_2 = |\lambda|\,\lVert f(x)-f(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L8]

1.6 For $N \circ f$: by [L2], $|N(f(x)) - N(f(a))| \le N\bigl(f(x)-f(a)\bigr) \le C\sqrt{\iota(m)}\,\lVert f(x)-f(a)\rVert_2$; so a $\delta$ for the tolerance $\varepsilon/(C\sqrt{\iota(m)}+1)$ at $f$ serves for $N\circ f$. [L1, L2, L6]

1.7 For $\langle f,g\rangle$: first take $\delta_0 > 0$ with $\lVert g(x)-g(a)\rVert_2 < 1$ for $d_X(x,a) < \delta_0$, so that $\lVert g(x)\rVert_2 \le \lVert g(x)-g(a)\rVert_2 + \lVert g(a)\rVert_2 < B := \lVert g(a)\rVert_2 + 1$ there. [L1, L3]

2.1 Suppose $f$ is continuous at $a$ and fix $i<m$. Given $\varepsilon > 0$, take $\delta$ from the definition; for $x \in A$ with $d_X(x,a) < \delta$, step 1.1 gives $|f_i(x)-f_i(a)| \le \lVert f(x)-f(a)\rVert_2 < \varepsilon$. So $f_i$ is continuous at $a$. [step 1.1, L1]

2.2 Conversely suppose every $f_i$ is continuous at $a$. Given $\varepsilon > 0$, the real $\varepsilon/\iota(m)$ is positive; by step 1.3 choose $\delta_i > 0$ for each $i<m$ with $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$ whenever $x \in A$ and $d_X(x,a) < \delta_i$, and put $\delta := \min\{\delta_0,\dots,\delta_{m-1}\} > 0$. [step 1.3, L1, L6, L7]

2.3 By bilinearity, $\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle = \langle f(x)-f(a),\, g(x)\rangle + \langle f(a),\, g(x)-g(a)\rangle$, so Cauchy-Schwarz and step 1.7 give $\bigl|\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle\bigr| \le B\,\lVert f(x)-f(a)\rVert_2 + \lVert f(a)\rVert_2\,\lVert g(x)-g(a)\rVert_2$ for every $x \in A$ with $d_X(x,a) < \delta_0$. [step 1.7, L4, L8]

3.1 For $x \in A$ with $d_X(x,a) < \delta$: each $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$, so by steps 1.1 and 1.2, $\lVert f(x)-f(a)\rVert_2 \le \sum_{i<m}|f_i(x)-f_i(a)| < \sum_{i<m}\varepsilon/\iota(m) = \varepsilon$. Hence $f$ is continuous at $a$, and clause 1 is proved. [step 1.1, step 1.2, step 2.2, L5, L6]

3.2 Clause 2 is the same two estimates with $f(a)$ replaced by $L$, $f_i(a)$ by $L_i$, and the condition $d_X(x,a) < \delta$ by $0 < |x-c| < \delta$: step 1.1 gives $|f_i(x)-L_i| \le \lVert f(x)-L\rVert_2$ for the forward direction, and steps 1.1, 1.2 give $\lVert f(x)-L\rVert_2 \le \sum_{i<m}|f_i(x)-L_i| < \varepsilon$ for the converse, with $\delta$ the minimum of $m$ radii obtained as in step 2.2. [step 1.1, step 1.2, step 1.3, L1, L5, L6, L7]

3.3 Put $P := B + \lVert f(a)\rVert_2 + 1 > 0$ and take $\delta \le \delta_0$ positive with both $\lVert f(x)-f(a)\rVert_2 < \varepsilon/P$ and $\lVert g(x)-g(a)\rVert_2 < \varepsilon/P$ for $d_X(x,a) < \delta$; then step 2.3 bounds the difference by $(B + \lVert f(a)\rVert_2)\varepsilon/P < \varepsilon$, so $\langle f,g\rangle$ is continuous at $a$. [step 1.7, step 2.3, L1, L6, L7]

4.1 Steps 1.4, 1.5, 1.6 and 3.3 are clause 3, and with steps 3.1 and 3.2 all three clauses are proved. [step 3.1, step 3.2, step 1.4, step 1.5, step 1.6, step 3.3] ∎

## Remarks

- **Why the algebra is proved here rather than quoted.** The published [[thm-algebra-of-continuous-functions]] and [[thm-algebra-of-function-limits]] are stated for real-valued functions on a subset of $\mathbb{R}$, and the domain in clause 3 is a subset of an arbitrary metric space; quoting them for a metric domain would be a citation to an item for a claim it does not make. The estimates in steps 1.4 to 3.3 are the same ones, written out. When the domain **is** a subset of $\mathbb{R}$, clause 1 and [[lem-real-and-metric-notions-agree]] identify the two readings, and the published theorems may then be used on the components.

- **Clause 3 is what makes the mean value inequality work.** The auxiliary function $t \mapsto \langle u, f(t)\rangle$ of [[thm-mean-value-inequality]] is continuous exactly by the inner-product part of clause 3, applied with the constant function $u$.

- **Nothing here is a sequential argument, so no choice principle is used** beyond the finitely many simultaneous selections of steps 1.3, 2.2 and 3.3, which are covered by [[lem-finite-choice]], a theorem of ZF.
````

### `thm-continuous-implies-integrable`

````markdown
---
id: thm-continuous-implies-integrable
kind: theorem
title: "A continuous function on $[a,b]$ is Riemann integrable, by Heine-Cantor and Riemann's criterion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, thm-heine-cantor-r, def-uniform-continuity-real, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-continuity-real, cor-boundedness-theorem-r, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-interval, def-bounded-set, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "continuous $\\Rightarrow$ integrable"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann
integrable on $[a,b]$ ([[def-darboux-integral]]).

**The proof gives more than integrability: it gives a partition that works.** For
every real $\varepsilon > 0$ the uniform partition into $N$ parts already
satisfies $U(f,P) - L(f,P) < \varepsilon$, as soon as $N$ is large enough that
$(b-a)/\iota(N)$ is below the $\delta$ that uniform continuity supplies for
$\varepsilon/\bigl(2(b-a)\bigr)$. Uniform continuity is exactly what makes one
$\delta$ serve all $N$ subintervals at once, and it is the only place where the
compactness of $[a,b]$ is used.

## Facts & Assumptions

**Given:** Reals $a < b$ and a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$.

[L1] $[a,b]$ is closed and bounded, hence compact ([[def-interval]], [[def-open-and-closed-in-r]], [[def-bounded-set]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L2] A continuous real function on a compact subset of $\mathbb{R}$ is bounded there ([[cor-boundedness-theorem-r]]).

[L3] Heine-Cantor: a continuous real function on a compact subset $K$ of $\mathbb{R}$ is uniformly continuous on $K$, that is, for every real $\eta > 0$ there is a real $\delta > 0$ with $|f(x) - f(y)| < \eta$ for all $x, y \in K$ with $|x - y| < \delta$ ([[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L4] For a partition $P = (n,t)$ of $[a,b]$: $\Delta_i = t_{i+1} - t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, and the uniform partition $U_N$ into $N \ge 1$ parts has every $\Delta_i$ equal to $(b-a)/\iota(N)$ ([[def-partition-and-refinement]]).

[L5] $U(f,P) - L(f,P) = \sum_{i<n}(M_i - m_i)\Delta_i$ and $M_i - m_i = \sup\{|f(x)-f(y)| : x, y \in I_i\}$ for bounded $f$ ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L6] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L7] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L8] Finite sums: scaling and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L9] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $x, y \in [c,d]$ gives $|x - y| \le d - c$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 $[a,b]$ is compact by [L1], so $f$ is bounded on $[a,b]$ by [L2] and its Darboux sums and integrals are defined. [given, L1, L2]

1.2 Let a real $\varepsilon > 0$ be given and put $\eta := \varepsilon \cdot \bigl(2(b-a)\bigr)^{-1}$, a positive real by [L9] since $b - a > 0$. [given, L9]

2.1 By [L3] applied to the compact set $[a,b]$ with this $\eta$, fix a real $\delta > 0$ such that $|f(x) - f(y)| < \eta$ for all $x, y \in [a,b]$ with $|x - y| < \delta$. [step 1.1, step 1.2, L1, L3, choose]

3.1 By [L7] fix a natural $N \ge 1$ with $1/\iota(N) < \delta \cdot (b-a)^{-1}$, and put $P := U_N = (N,t)$, the uniform partition of $[a,b]$ into $N$ parts. Then every $\Delta_i$ equals $(b-a)/\iota(N) < \delta$ by [L4] and [L9]. [step 2.1, L4, L7, L9, choose]

4.1 For each $i < N$ and all $x, y \in I_i = [t_i, t_{i+1}]$ one has $|x-y| \le \Delta_i < \delta$ by [L9], hence $|f(x) - f(y)| < \eta$ by step 2.1. So $\eta$ is an upper bound of the set $\{|f(x)-f(y)| : x,y \in I_i\}$, and therefore $M_i - m_i \le \eta$ by [L5]. [step 2.1, step 3.1, L5, L9]

5.1 Consequently $U(f,P) - L(f,P) = \sum_{i<N}(M_i - m_i)\Delta_i \le \sum_{i<N}\eta\,\Delta_i = \eta\,(b-a) = \varepsilon \cdot 2^{-1} < \varepsilon$, using [L5], step 4.1, $\Delta_i > 0$, [L8], [L4] and [L9]. [step 4.1, L4, L5, L8, L9]

6.1 Since the real $\varepsilon > 0$ of step 1.2 was arbitrary and step 5.1 produced a partition with $U(f,P) - L(f,P) < \varepsilon$, criterion [L6] applies and $f$ is Riemann integrable on $[a,b]$; it is bounded by step 1.1. [step 1.1, step 1.2, step 5.1, L6] ∎

## Remarks

- **Continuity is sufficient and very far from necessary.** A monotone function may have infinitely many discontinuities and is still integrable ([[thm-monotone-implies-integrable]]); Thomae's function is discontinuous at every rational and integrable ([[cor-countably-many-discontinuities-integrable]]); and the indicator of the Cantor set is discontinuous at uncountably many points and integrable. The exact frontier is [[thm-lebesgue-criterion]].

- **Where compactness enters, and what it buys.** Only through [L1], and then twice: [[cor-boundedness-theorem-r]] to know that the Darboux sums exist at all, and [[thm-heine-cantor-r]] to get one $\delta$ for the whole interval. On a non-compact interval both can fail: $x \mapsto 1/x$ is continuous on $(0,1)$ and unbounded there, so it has no Darboux sums at all.

- **The choice cost is inherited, not incurred.** Nothing in the proof above selects anything from an infinite family; the single use of countable choice behind this theorem sits inside [[thm-heine-cantor-r]], which names it in its own statement. See [[rem-riemann-integral-choice-ledger]].
````

### `thm-linearity-of-the-integral`

````markdown
---
id: thm-linearity-of-the-integral
kind: theorem
title: "Integrable functions on $[a,b]$ form a set closed under sums and scalar multiples, and $\\int_a^b(\\lambda f+\\mu g) = \\lambda\\int_a^b f + \\mu\\int_a^b g$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-darboux-integral, def-darboux-sums, thm-riemann-criterion, lem-refinement-inequalities, def-partition-and-refinement, lem-integral-elementary-bounds, def-oriented-integral, lem-reflection, def-infimum, lem-sup-unique, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [thm-integral-is-linear]
landmark: true
short: "linearity of the integral"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f, g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). Then:

1. $f + g$ is integrable on $[a,b]$ and
   $\int_a^b (f+g) = \int_a^b f + \int_a^b g$;
2. for every real $\lambda$, $\lambda f$ is integrable on $[a,b]$ and
   $\int_a^b \lambda f = \lambda \int_a^b f$;
3. consequently, for all reals $\lambda, \mu$ the function $\lambda f + \mu g$ is
   integrable and
   $$\int_a^b(\lambda f + \mu g) \;=\; \lambda\int_a^b f \;+\; \mu\int_a^b g ;$$
4. the same identity holds with oriented limits: if $u, v \in [a,b]$ and $f, g$
   are integrable between $u$ and $v$ ([[def-oriented-integral]]), then
   $\int_u^v(\lambda f + \mu g) = \lambda\int_u^v f + \mu\int_u^v g$.

**Linearity of the integral is not linearity of the Darboux sums**, and the
proof of claim 1 has to squeeze rather than compute. On a subinterval the
inequality $\sup(f+g) \le \sup f + \sup g$ can be strict — take $f(x) = x$ and
$g(x) = -x$ on $[0,1]$, where the left side is $0$ and the right side is $1$ —
so $U(f+g,P)$ is in general strictly below $U(f,P) + U(g,P)$ and no identity
between upper sums is available. Claim 2, by contrast, is an identity at the
level of the sums, with the roles of $\sup$ and $\inf$ exchanged when
$\lambda < 0$.

## Facts & Assumptions

**Given:** Reals $a < b$, integrable $f, g : [a,b] \to \mathbb{R}$, reals $\lambda, \mu$, and a real $\varepsilon > 0$.

[L1] Riemann's criterion: a bounded $h$ on $[a,b]$ is integrable if and only if for every real $\eta > 0$ there is a partition $P$ with $U(h,P) - L(h,P) < \eta$ ([[thm-riemann-criterion]]).

[L2] For every partition $P$ and bounded $h$: $L(h,P) \le \underline{\int_a^b} h \le \overline{\int_a^b} h \le U(h,P)$, and $h$ is integrable exactly when the two integrals agree, their common value being $\int_a^b h$; the lower integral is $\sup_P L(h,P)$ and the upper is $\inf_P U(h,P)$ ([[def-darboux-integral]], [[lem-sup-unique]]).

[L3] $L(h,P) = \sum_{i<n} m_i(h)\Delta_i$ and $U(h,P) = \sum_{i<n}M_i(h)\Delta_i$, where $m_i(h) = \inf h[I_i]$ and $M_i(h) = \sup h[I_i]$ over the subintervals $I_i$ of $P = (n,t)$, with $\Delta_i > 0$; an integrable function is bounded, and a sum of two bounded functions and a scalar multiple of a bounded function are bounded ([[def-darboux-sums]], [[def-partition-and-refinement]], [[def-bounded-set]]).

[L4] If $P'$ refines $P$ then $L(h,P) \le L(h,P') \le U(h,P') \le U(h,P)$; the common refinement $P_1 \vee P_2$ refines both ([[lem-refinement-inequalities]], [[def-partition-and-refinement]]).

[L5] Finite sums are additive and homogeneous: $\sum_{i<n}(x_i + y_i) = \sum_{i<n}x_i + \sum_{i<n}y_i$ and $\sum_{i<n}\lambda x_i = \lambda\sum_{i<n}x_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1 and 2).

[L6] A supremum is the least upper bound and an infimum the greatest lower bound; both exist for a nonempty bounded set and are unique ([[def-complete-ordered-field]], [[def-infimum]], [[lem-sup-unique]]).

[L7] Reflection: writing $-S = \{-s : s \in S\}$, a real $u$ is an upper bound of $S$ exactly when $-u$ is a lower bound of $-S$, and conversely; hence $\sup(-S) = -\inf S$ and $\inf(-S) = -\sup S$ for nonempty bounded $S$, by [L6] ([[lem-reflection]]).

[L8] The constant function $0$ is integrable with $\int_a^b 0 = 0$ ([[lem-integral-elementary-bounds]]).

[L9] Ordered-field arithmetic: adding a constant and multiplying by a positive quantity preserve an inequality, the order is total and transitive, and a real $x$ with $|x| < \eta$ for every real $\eta > 0$ is $0$ ([[def-ordered-field]], [[def-complete-ordered-field]]). These order facts are used in their nonstrict form as well, obtained by adjoining the case of equality.

[L10] With oriented limits, $\int_v^u h = -\int_u^v h$ and $\int_u^u h = 0$ ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 $f$, $g$, $f+g$ and $\lambda f$ are bounded on $[a,b]$, so all their Darboux sums and integrals are defined. [given, L3]

1.2 For every partition $P = (n,t)$ and every $i < n$: $f(x) + g(x) \le M_i(f) + M_i(g)$ for $x \in I_i$, so $M_i(f) + M_i(g)$ is an upper bound of $(f+g)[I_i]$ and $M_i(f+g) \le M_i(f) + M_i(g)$ by [L6]; dually $m_i(f+g) \ge m_i(f) + m_i(g)$. [L3, L6]

1.3 Fix partitions $P_1$ and $P_2$ with $U(f,P_1) - L(f,P_1) < \varepsilon \cdot 2^{-1}$ and $U(g,P_2) - L(g,P_2) < \varepsilon \cdot 2^{-1}$, and put $P := P_1 \vee P_2$. [given, L1, L4, choose]

1.4 **Claim 2, the case $\lambda = 0$.** Then $\lambda f$ is the constant function $0$, integrable with integral $0 = 0 \cdot \int_a^b f$. [L8]

1.5 **Claim 2, the case $\lambda > 0$.** For every partition $P$ and every $i < n$, $\lambda M_i(f)$ is an upper bound of $(\lambda f)[I_i]$, and any upper bound $w$ of $(\lambda f)[I_i]$ gives the upper bound $w/\lambda$ of $f[I_i]$, whence $M_i(f) \le w/\lambda$ and $\lambda M_i(f) \le w$; so $M_i(\lambda f) = \lambda M_i(f)$ by [L6], and dually $m_i(\lambda f) = \lambda m_i(f)$. [L3, L6, L9]

1.6 **Claim 2, the case $\lambda = -1$.** For every $P$ and $i < n$, $(-f)[I_i] = -\bigl(f[I_i]\bigr)$, so $M_i(-f) = -m_i(f)$ and $m_i(-f) = -M_i(f)$ by [L7]. [L3, L7]

2.1 By [L4], $U(f,P) - L(f,P) < \varepsilon\cdot 2^{-1}$ and $U(g,P) - L(g,P) < \varepsilon \cdot 2^{-1}$. [step 1.3, L4]

2.2 Summing the inequalities of step 1.2 over $i < n$ against the positive weights $\Delta_i$ and using [L5] gives $L(f,P) + L(g,P) \le L(f+g,P) \le U(f+g,P) \le U(f,P) + U(g,P)$. [step 1.2, L3, L5, L9]

2.3 With step 1.5 and [L5], $U(\lambda f,P) = \lambda U(f,P)$ and $L(\lambda f, P) = \lambda L(f,P)$ for $\lambda > 0$; hence $U(\lambda f,P)-L(\lambda f,P) = \lambda\bigl(U(f,P)-L(f,P)\bigr)$, which [L1] makes smaller than any prescribed positive number by choosing $P$ suitably, so $\lambda f$ is integrable. [step 1.5, L1, L3, L5, L9]

2.4 With step 1.6 and [L5], $U(-f,P) = -L(f,P)$ and $L(-f,P) = -U(f,P)$, so $U(-f,P)-L(-f,P) = U(f,P)-L(f,P)$ and $-f$ is integrable by [L1]; and by [L7] applied to the sets of Darboux sums, $\overline{\int_a^b}(-f) = -\underline{\int_a^b} f$ and $\underline{\int_a^b}(-f) = -\overline{\int_a^b} f$, so $\int_a^b(-f) = -\int_a^b f$. [step 1.6, L1, L2, L5, L7]

3.1 Hence $U(f+g,P) - L(f+g,P) \le \bigl(U(f,P)-L(f,P)\bigr) + \bigl(U(g,P)-L(g,P)\bigr) < \varepsilon$, so $f+g$ is integrable by [L1], $\varepsilon > 0$ having been arbitrary. [step 1.1, step 2.1, step 2.2, L1, L9]

3.2 Moreover the set of lower sums of $\lambda f$ is $\lambda$ times the set of lower sums of $f$, and a supremum scales by a positive factor, by the argument of step 1.5 applied to that set; so $\underline{\int_a^b}\lambda f = \lambda \underline{\int_a^b} f$, and likewise for the upper integrals, giving $\int_a^b \lambda f = \lambda\int_a^b f$. [step 1.5, step 2.3, L2, L6, L9]

4.1 Both $\int_a^b(f+g)$ and $\int_a^b f + \int_a^b g$ lie in the interval from $L(f,P)+L(g,P)$ to $U(f,P)+U(g,P)$: the first by [L2] and step 2.2, the second by [L2] applied to $f$ and to $g$ separately. [step 2.1, step 2.2, step 3.1, L2]

4.2 **Claim 2 for $\lambda < 0$.** Then $-\lambda > 0$ and $\lambda f = (-\lambda)(-f)$, so steps 2.3, 2.4 and 3.2 give integrability and the required identities and $\int_a^b \lambda f = (-\lambda)\int_a^b(-f) = (-\lambda)\bigl(-\int_a^b f\bigr) = \lambda\int_a^b f$. [step 2.3, step 3.2, step 2.4, L9]

5.1 That interval has length less than $\varepsilon$ by step 2.1, so $\bigl|\int_a^b(f+g) - \int_a^b f - \int_a^b g\bigr| < \varepsilon$; as $\varepsilon > 0$ was arbitrary the difference is $0$, which is claim 1. [step 2.1, step 4.1, L9]

5.2 Claim 2 is now proved in all three cases $\lambda = 0$, $\lambda > 0$ and $\lambda < 0$, which are exhaustive by trichotomy. [step 1.4, step 2.3, step 3.2, step 4.2, L9]

6.1 **Claim 3.** By claim 2 the functions $\lambda f$ and $\mu g$ are integrable with integrals $\lambda\int_a^b f$ and $\mu\int_a^b g$, and by claim 1 their sum is integrable with the sum of those integrals. [step 5.1, step 5.2]

7.1 **Claim 4.** If $u < v$ then $u, v \in [a,b]$ and claim 3 applies verbatim on $[u,v]$; if $u = v$ both sides are $0$ by [L10]; and if $u > v$ then applying the case $u < v$ to the pair $(v,u)$ and multiplying by $-1$ gives the identity, by [L10]. [step 6.1, L10] ∎

## Remarks

- **Why claim 1 cannot be an identity of Darboux sums.** The example in the statement shows $\sup(f+g) < \sup f + \sup g$ is possible on a single subinterval, so $U(f+g,P) = U(f,P)+U(g,P)$ is false in general. What survives is the pair of inequalities of step 1.2, and they are enough because the gap between them is squeezed to $0$ by [[thm-riemann-criterion]].

- **The two scalar cases really are different.** For $\lambda > 0$ the extreme values scale; for $\lambda < 0$ they are exchanged, because multiplying by a negative reverses the order ([[lem-reflection]]). Merging the cases and writing $U(\lambda f, P) = \lambda U(f,P)$ for all $\lambda$ would be false at $\lambda = -1$, where the correct identity is $U(-f,P) = -L(f,P)$.

- **The set of integrable functions on $[a,b]$ is closed under the operations named here and under more.** Products, absolute values and the lattice operations are also integrable, but none of them is obtained from linearity alone: the proofs of [[cor-integrability-of-absolute-values-products-and-lattice-operations]] all pass through [[thm-composition-with-a-continuous-function]], with linearity used only to recombine the pieces.
````

### `thm-monotonicity-of-the-integral`

````markdown
---
id: thm-monotonicity-of-the-integral
kind: theorem
title: "If $f \\le g$ on $[a,b]$ and both are integrable then $\\int_a^b f \\le \\int_a^b g$; and $m(b-a) \\le \\int_a^b f \\le M(b-a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-linearity-of-the-integral, def-darboux-integral, def-darboux-sums, lem-integral-elementary-bounds, lem-finite-sum-laws, def-finite-sum, def-oriented-integral, def-infimum, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [thm-integral-is-monotone]
landmark: true
short: "monotonicity of the integral"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f, g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). Then:

1. **Nonnegativity.** If $f(x) \ge 0$ for every $x \in [a,b]$ then
   $\int_a^b f \ge 0$.
2. **Monotonicity.** If $f(x) \le g(x)$ for every $x \in [a,b]$ then
   $$\int_a^b f \;\le\; \int_a^b g .$$
3. **Two-sided bound.** If $m \le f(x) \le M$ for every $x \in [a,b]$, with
   $m, M$ real, then
   $$m\,(b-a) \;\le\; \int_a^b f \;\le\; M\,(b-a) .$$

**Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable
function with integral $0$ may be positive at infinitely many points; that is
[[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's
companion. Under the additional hypothesis of continuity the conclusion does
hold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]]
below.

**Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the
convention of [[def-oriented-integral]], $f \le g$ gives
$\int_u^v f \le \int_u^v g$ when $u \le v$ and the reverse inequality when
$u \ge v$, since both sides change sign together.

## Facts & Assumptions

**Given:** Reals $a < b$ and integrable $f, g : [a,b] \to \mathbb{R}$, with reals $m \le M$ where claim 3 is concerned.

[A1] $f(x) \ge 0$ for every $x \in [a,b]$.

[A2] $f(x) \le g(x)$ for every $x \in [a,b]$.

[A3] $m \le f(x) \le M$ for every $x \in [a,b]$.

[L1] If $m' \le h \le M'$ on $[a,b]$ then $m'(b-a) \le L(h,P) \le \underline{\int_a^b} h \le \overline{\int_a^b} h \le U(h,P) \le M'(b-a)$ for every partition $P$ ([[lem-integral-elementary-bounds]], [[def-darboux-sums]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] If $h$ is integrable then $\int_a^b h$ is the common value of the lower and upper integrals ([[def-darboux-integral]], [[def-infimum]]).

[L3] Sums and scalar multiples of integrable functions are integrable, and $\int_a^b(\lambda h + \nu k) = \lambda\int_a^b h + \nu\int_a^b k$ ([[thm-linearity-of-the-integral]]).

[L4] Ordered-field arithmetic: adding a constant to both sides of an inequality preserves it, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]). The nonstrict forms follow from the strict ones by adjoining the case of equality.

## Proof

**Proof technique:** direct.

1.1 **Claim 1.** Under [A1] the constant $0$ is a lower bound of $f$ on $[a,b]$, so [L1] applies with $m' := 0$ and gives $\underline{\int_a^b} f \ge 0$. [A1, L1]

1.2 **Claim 2.** Under [A2] the function $h := g - f$ satisfies $h(x) \ge 0$ for every $x \in [a,b]$, and $h$ is integrable with $\int_a^b h = \int_a^b g - \int_a^b f$ by [L3]. [A2, L3, L4]

2.1 Since $f$ is integrable, $\int_a^b f = \underline{\int_a^b} f \ge 0$ by [L2]. [step 1.1, L2]

3.1 By claim 1 applied to $h$, $\int_a^b g - \int_a^b f \ge 0$, that is $\int_a^b f \le \int_a^b g$. [step 2.1, step 1.2, L4]

4.1 **Claim 3.** Under [A3], [L1] applied to $f$ with $m' := m$ and $M' := M$ gives $m(b-a) \le \underline{\int_a^b} f$ and $\overline{\int_a^b} f \le M(b-a)$, and both integrals equal $\int_a^b f$ by [L2]. [A3, L1, L2] ∎

## Remarks

- **Claim 3 is cited, not reproved.** [[lem-integral-elementary-bounds]] already proves the five-term chain for every partition, and it is the item that also computes the integral of a constant, $\int_a^b c = c(b-a)$. Claim 3 is that chain read at an integrable $f$; nothing new is established here.

- **Claim 2 is proved through claim 1 and linearity, and not by comparing Darboux sums.** Comparing sums works too, since $f \le g$ gives $m_i(f) \le m_i(g)$ and $M_i(f) \le M_i(g)$ on every subinterval, but the route through $g - f$ is shorter and uses only results already available. Either way the hypothesis is a pointwise inequality on the *whole* of $[a,b]$; an inequality holding off a finite set gives the same conclusion, by [[lem-changing-a-function-at-finitely-many-points]], and that is a separate statement.

- **What claim 2 is for.** It is what turns a pointwise estimate on an integrand into an estimate on the integral, and every estimate of that shape on this page and its companion is an application of it. No count of those applications is asserted here; the dependency graph of the page is where that is read off.
````

### `thm-norm-inequality-for-the-vector-valued-integral`

````markdown
---
id: thm-norm-inequality-for-the-vector-valued-integral
kind: theorem
title: "For $a \\le b$ and integrable $f : [a,b] \\to \\mathbb{R}^m$, $\\lVert f\\rVert_2$ is integrable and $\\bigl\\lVert\\int_a^b f\\bigr\\rVert_2 \\le \\int_a^b \\lVert f\\rVert_2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn, def-norm-and-normed-space, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-composition-with-a-continuous-function, def-oriented-integral, def-darboux-integral, thm-of-square-roots, thm-continuous-inverse, def-continuity-real, lem-of-inverse-positive, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-bounded-set, lem-of-square-monotone, def-interval, thm-algebra-of-continuous-functions, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Cauchy-Schwarz inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality"
    - title: "Stephen Semmes, Some Basic Topics in Analysis, Sections 8.1.2–8.1.3"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, let $a, b \in \mathbb{R}$ with $a \le b$
and let $f : [a,b] \to \mathbb{R}^{m}$ be integrable
([[def-vector-valued-derivative-and-integral]]). Then:

1. if $a < b$, the real-valued function $t \mapsto \lVert f(t)\rVert_2$ is
   integrable on $[a,b]$ ([[def-darboux-integral]], [[def-p-norms-on-rn]]);
2. $$\Bigl\lVert \int_a^b f \Bigr\rVert_2 \;\le\; \int_a^b \lVert f\rVert_2 .$$

**The hypothesis $a \le b$ is not decoration.** With the orientation convention
of [[def-oriented-integral]] and
[[def-vector-valued-derivative-and-integral]], interchanging the limits changes
the sign of the right-hand side but not of the left, so for $b < a$ the correct
statement is $\bigl\lVert\int_a^b f\bigr\rVert_2 \le \bigl|\int_a^b \lVert f\rVert_2\bigr|$;
the displayed inequality as written is false in that case. This is the same trap
the scalar inequality of
[[cor-integrability-of-absolute-values-products-and-lattice-operations]] carries.

**Clause 1 is a genuine obligation and is discharged before the estimate.** That
each $f_i$ is integrable does not by itself say that
$\sqrt{\sum_{i<m} f_i^{2}}$ is; the square root has to be brought in through
[[thm-composition-with-a-continuous-function]].

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a \le b$, an integrable $f : [a,b] \to \mathbb{R}^{m}$ with components $f_0,\dots,f_{m-1}$, and the vector $v := \int_a^b f \in \mathbb{R}^{m}$; write $g(t) := \sum_{i<m} f_i(t)^{2}$, so that $\lVert f(t)\rVert_2 = \sqrt{g(t)}$ ([[def-euclidean-inner-product]], [[def-p-norms-on-rn]]).

[L1] The vector-valued integral is componentwise: $f$ is integrable exactly when every $f_i$ is bounded and Darboux integrable, and then $\bigl(\int_a^b f\bigr)_i = \int_a^b f_i$; $\int_a^a f = 0$ ([[def-vector-valued-derivative-and-integral]], [[def-darboux-integral]], [[def-oriented-integral]], [[def-bounded-set]]).

[L2] Linearity of the integral: integrable functions on $[a,b]$ are closed under sums and scalar multiples, and $\int_a^b(\lambda u + \mu w) = \lambda\int_a^b u + \mu\int_a^b w$ ([[thm-linearity-of-the-integral]]).

[L3] Monotonicity of the integral: for $a<b$ and integrable $u \le w$ on $[a,b]$, $\int_a^b u \le \int_a^b w$; and an integrable $u \ge 0$ has $\int_a^b u \ge 0$ ([[thm-monotonicity-of-the-integral]]).

[L4] Products and squares: if $u,w$ are integrable on $[a,b]$ then so are $|u|$, $u^{2}$ and $uw$ ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L5] Composition: if $u$ is integrable on $[a,b]$ with values in $[\alpha,\beta]$ and $\varphi$ is continuous on $[\alpha,\beta]$, then $\varphi\circ u$ is integrable on $[a,b]$ ([[thm-composition-with-a-continuous-function]], [[def-continuity-real]]).

[L6] Square roots ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt c)^{2} = c$, and $s \mapsto s^{2}$ is strictly increasing on the nonnegatives, hence injective there.

[L7] Continuous inverse theorem: a continuous injective function on an order-convex subset of $\mathbb{R}$ is a bijection onto its order-convex image, whose inverse is continuous ([[thm-continuous-inverse]], [[def-interval]]); and $s \mapsto s^{2}$ is continuous ([[thm-algebra-of-continuous-functions]]).

[L8] Cauchy-Schwarz and the inner product: $\langle u,w\rangle = \sum_{i<m}u_iw_i$ is bilinear and symmetric, $\lVert u\rVert_2 = \sqrt{\langle u,u\rangle}$, $\lVert u\rVert_2 \ge 0$, and $|\langle u,w\rangle| \le \lVert u\rVert_2\lVert w\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-norm-and-normed-space]]).

[L9] Laws of finite sums and induction ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]).

[L10] Order arithmetic: $u > 0$ gives $u^{-1} > 0$, a product of nonnegatives is nonnegative, and $t \le |t|$ ([[lem-of-inverse-positive]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 If $a = b$ then $\int_a^b f = 0$ and $\int_a^b\lVert f\rVert_2 = 0$ by the oriented convention, so clause 2 reads $0 \le 0$ and holds, while clause 1 says nothing in that case; assume $a < b$ from here on. [L1]

1.2 Each component $f_i$ is bounded and integrable on $[a,b]$, so each $f_i^{2}$ is integrable. [L1, L4]

1.3 The map $s \mapsto s^{2}$ is continuous and injective on the order-convex set $[0,\sqrt K]$, with image $[0,K]$; by the continuous inverse theorem its inverse $\varphi : [0,K] \to [0,\sqrt K]$, $\varphi(u) = \sqrt u$, is continuous on $[0,K]$. [L6, L7]

1.4 Pointwise, $\langle v, f(t)\rangle \le \bigl|\langle v,f(t)\rangle\bigr| \le \lVert v\rVert_2\,\lVert f(t)\rVert_2$ by Cauchy-Schwarz. [L8, L10]

2.1 By induction on $p \le m$, every finite sum $\sum_{i<p} f_i^{2}$ is integrable, the empty sum being the constant $0$ and each successor step adding one integrable function. Hence $g = \sum_{i<m}f_i^{2}$ is integrable. [step 1.2, L2, L9]

2.2 The real-valued function $t \mapsto \langle v, f(t)\rangle = \sum_{i<m}v_i f_i(t)$ is integrable, being a finite sum of scalar multiples of the integrable $f_i$, and by linearity applied $m$ times $\int_a^b \langle v,f\rangle = \sum_{i<m} v_i\int_a^b f_i = \sum_{i<m}v_i\,v_i = \langle v,v\rangle = \lVert v\rVert_2^{2}$. [step 1.2, L1, L2, L8, L9]

3.1 $g(t) \ge 0$ for every $t$, being a finite sum of squares, and $g$ is bounded above: each $|f_i|$ is bounded by some $B_i$, so $g(t) \le \sum_{i<m}B_i^{2} =: K$. Thus $g$ takes its values in $[0,K]$. [step 2.1, L1, L9, L10]

4.1 $\lVert f(t)\rVert_2 = \sqrt{g(t)} = \varphi(g(t))$ for every $t \in [a,b]$, so $\lVert f\rVert_2 = \varphi \circ g$ is integrable on $[a,b]$; this is clause 1. [step 2.1, step 3.1, step 1.3, L5, L8]

5.1 Both sides of step 1.4 are integrable on $[a,b]$, so monotonicity and linearity give $\lVert v\rVert_2^{2} = \int_a^b\langle v,f\rangle \le \int_a^b \lVert v\rVert_2\lVert f\rVert_2 = \lVert v\rVert_2\int_a^b\lVert f\rVert_2$. [step 4.1, step 2.2, step 1.4, L2, L3]

5.2 If $v = 0$ then $\lVert v\rVert_2 = 0$, while $\int_a^b\lVert f\rVert_2 \ge 0$ because $\lVert f\rVert_2 \ge 0$ pointwise and $a<b$; so clause 2 holds in this case. [step 4.1, L3, L8]

6.1 If $v \ne 0$ then $\lVert v\rVert_2 > 0$, so multiplying the inequality of step 5.1 by the positive $1/\lVert v\rVert_2$ gives $\lVert v\rVert_2 \le \int_a^b\lVert f\rVert_2$, which is clause 2 in this case. [step 5.1, L8, L10]

7.1 The two cases of steps 5.2 and 6.1 exhaust the possibilities for $v$, so clause 2 holds; with step 4.1 both clauses are proved. [step 4.1, step 5.2, step 6.1] ∎

## Remarks

- **The case split at $v = 0$ is mandatory.** Step 5.1 delivers only $\lVert v\rVert_2^{2} \le \lVert v\rVert_2 \int_a^b\lVert f\rVert_2$, and dividing by $\lVert v\rVert_2$ is illegitimate when that number is $0$. Many textbook presentations divide without comment; the missing case is genuinely separate, and it is the one where the right-hand side has to be shown nonnegative on its own.

- **Why the inner-product route rather than a componentwise estimate.** Bounding each coordinate of $\int_a^b f$ separately and reassembling gives a constant depending on $m$; the argument above gives the sharp inequality with no constant, and it uses only bilinearity, Cauchy-Schwarz and monotonicity of the integral. The companion page checks the inequality numerically on an explicit curve and shows it is strict there.

- **Clause 1 is where the hypotheses of [[thm-composition-with-a-continuous-function]] are checked, one by one:** $g$ is integrable, its values lie in a closed bounded interval, and the outer function is continuous on that interval. The order of that theorem's hypotheses matters — continuous **after** integrable — and it is respected here.
````

### `thm-of-square-roots`

````markdown
---
id: thm-of-square-roots
kind: theorem
title: "Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-sign-rules, lem-of-square-monotone, lem-of-square-positive, prop-of-multiply-inequalities, def-ordered-field]
aliases: []
landmark: true
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Colorado analysis notes: The real numbers"
      url: "https://spot.colorado.edu/~baggett/chap1.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

## Facts & Assumptions

**Given:** A complete ordered field $F$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property, and an element $a \in F$ with $a \ge 0$.

[L1] Every nonempty subset of $F$ that is bounded above has a least upper bound in $F$ ([[def-complete-ordered-field]]).

[L2] Sign and scaling rules: a product of positives is positive, and for $c > 0$ one has $x < y \iff cx < cy$ ([[lem-of-sign-rules]]).

[L3] Squaring is strictly monotone on the nonnegatives: if $0 \le x < y$ then $x^2 < y^2$; in particular squaring is injective on $\{x : x \ge 0\}$ ([[lem-of-square-monotone]]).

[L4] A nonzero square is positive: if $y \neq 0$ then $y^2 > 0$ ([[lem-of-square-positive]]).

[L5] Multiplying inequalities of positives: if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$, then $s = 0$ satisfies $s \ge 0$ and $s^2 = 0 = a$, so existence holds; assume henceforth $a > 0$. [given, algebra]

1.2 Uniqueness holds once a root exists: if $u, v \ge 0$ satisfy $u^2 = v^2$, then strict monotonicity of squaring on nonnegatives [L3] rules out both $u < v$ and $u > v$, forcing $u = v$; so at most one $s \ge 0$ has $s^2 = a$. [L3, given]

1.3 Define $S = \{ t \in F : t \ge 0 \text{ and } t^2 \le a \}$; then $0 \in S$ because $0 \ge 0$ and $0^2 = 0 \le a$, so $S \neq \emptyset$. [given, algebra]

1.4 The element $1 + a$ is an upper bound of $S$: since $a > 0$ we have $1 + a > 1$, so any $t > 1 + a$ has $t > 1$ and $t > 0$, whence $t^2 = t \cdot t > 1 \cdot t = t > 1 + a > a$, giving $t \notin S$. [given, L2]

2.1 By completeness [L1], $s := \sup S$ exists in $F$; and since $0 \in S$ we have $s \ge 0$. [L1, step 1.3, step 1.4]

3.1 Assume, for contradiction, that $s^2 \neq a$; by trichotomy either $s^2 < a$ or $s^2 > a$. [assume-contra, step 2.1]

4.1 (Case $s^2 < a$.) Choose $h$ with $0 < h < 1$ and $h < \dfrac{a - s^2}{2s + 1}$, possible since $a - s^2 > 0$ and $2s + 1 \ge 1 > 0$; then $h^2 = h \cdot h < h \cdot 1 = h$ and $h(2s+1) < a - s^2$, so $(s+h)^2 = s^2 + 2sh + h^2 < s^2 + 2sh + h = s^2 + h(2s+1) < a$, whence $s + h \in S$ with $s + h > s$, contradicting that $s$ is an upper bound of $S$. [assume-case low, step 3.1, step 2.1, L2, L5, choose]

4.2 (Case $s^2 > a$.) Here $s > 0$ since $s^2 > a \ge 0$; choose $h$ with $0 < h < s$ and $h < \dfrac{s^2 - a}{2s}$, so $2sh < s^2 - a$ and $(s-h)^2 = s^2 - 2sh + h^2 \ge s^2 - 2sh > a$, hence every $t \in S$ has $t^2 \le a < (s-h)^2$ with $t \ge 0$ and $s - h > 0$, so $t < s - h$ by [L3]; thus $s - h$ is an upper bound of $S$ with $s - h < s$, contradicting that $s$ is the least upper bound. [assume-case high, step 3.1, step 2.1, L3, choose]

5.1 Both cases of the disjunction in step 3.1 give a contradiction, so the assumption fails and $s^2 = a$: a unique (by step 1.2) $s = \sqrt{a} \ge 0$ with $s^2 = a$ exists, and applying this to any $x > 0$ writes $x = (\sqrt{x})^2$ with $\sqrt{x} \neq 0$ while conversely any nonzero square is positive by [L4], so the positive elements of $F$ are exactly the nonzero squares. [step 4.1, step 4.2, step 3.1, step 1.2, L4, cases, discharge-contradiction] ∎
````

