# Audit proof-refuter brief — Wave 11, A6

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
For an `ai-generated` Statement or counterexample, actively search for a
counterexample to the public claim or a failure in the witness. A false public
claim, invalid proof, missing necessary hypothesis, circularity, or materially
inaccurate load-bearing citation is fatal; a quickly closable gap is nonfatal.

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

- critical risk (16): 25 declared dependencies; 30 cited facts; 20 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language
- top-20 manifest-edge consumer (25 outgoing relationships)

## Target item — `cex-a-function-with-a-primitive-that-is-not-integrable`

Normalized current SHA-256: `584d5df7391f997c9c491a73e856b94feed33651d87655427359e679acc5c0b3`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-a-function-with-a-primitive-that-is-not-integrable
kind: counterexample
title: "A function differentiable on $[0,1]$ whose derivative is unbounded, hence not Riemann integrable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-derivative, thm-algebra-of-derivatives, thm-chain-rule, lem-derivative-of-a-power, thm-algebra-of-continuous-functions, thm-two-sided-limit-iff-both-one-sided, def-one-sided-limits, def-function-limit, lem-limit-is-local, def-darboux-sums, def-darboux-integral, def-bounded-set, def-integer-power, lem-power-monotone, def-canonical-natural, lem-of-naturals-positive, thm-of-archimedean, cor-archimedean-reciprocal, thm-ftc-second-part, def-max-min, lem-finite-set-has-max, def-interval, def-limit-point-r, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "a primitive whose derivative is not integrable"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Antiderivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Antiderivative"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "J. M. H. Olmsted, Counterexamples in Analysis: Differentiation"
      url: "https://people.math.sc.edu/girardi/m555/10S/diff-counterexs.pdf"
pipeline_run: null
---

## Statement refuted

**False claim:** if $G : [0,1] \to \mathbb{R}$ is differentiable at every point of
$[0,1]$ ([[def-derivative]]), then $G'$ is Riemann integrable on $[0,1]$ (so that
$\int_0^1 G' = G(1)-G(0)$ makes sense).

The claim is false. Put

$$\phi(t) \;:=\; t^{2}(1-t)^{2} \qquad (t \in \mathbb{R}),$$

a polynomial with $\phi(0)=\phi(1)=0$ and $\phi'(0)=\phi'(1)=0$, and for
$n \in \mathbb{N}$ set

$$\alpha_n := \frac{1}{\iota(n+2)}, \qquad h_n := \frac{1}{\iota(n+2)^{4}}, \qquad c_n := \frac{1}{\iota(n+2)^{2}}, \qquad \beta_n := \alpha_n + h_n, \qquad I_n := [\alpha_n,\beta_n]$$

([[def-canonical-natural]], [[def-integer-power]]). The intervals $I_n$ are
pairwise disjoint and lie in $(0,1]$, and

$$G : [0,1] \to \mathbb{R}, \qquad G(x) \;:=\; \begin{cases} c_n\,\phi\!\left(\dfrac{x-\alpha_n}{h_n}\right) & x \in I_n \text{ for some } n, \\[6pt] 0 & \text{otherwise} \end{cases}$$

is differentiable at **every** point of $[0,1]$, while

$$G'\!\left(\alpha_n + \tfrac{1}{4}h_n\right) \;=\; \frac{3}{16}\,\iota(n+2)^{2} ,$$

so $G'$ is unbounded on $[0,1]$ and therefore has no Darboux sums at all
([[def-darboux-sums]]) and is not Riemann integrable.

**The construction is entirely polynomial, and deliberately so.** The classical
witness is $x^{2}\sin(1/x^{2})$; the trigonometric functions are built on a later
page of this library, so a bump glued from a single quartic is used instead. Only
one bump is nonzero near any point of $(0,1]$, so no series converges anywhere in
the argument and no limit function is formed.

## Facts & Assumptions

**Given:** The polynomial $\phi(t) = t^{2}(1-t)^{2}$, the numbers $\alpha_n, h_n, c_n, \beta_n$ and intervals $I_n$ above, the function $G$ above, and a real $\varepsilon>0$.

[L1] Polynomial calculus: every polynomial function is differentiable at every real and continuous there, with $(t^{n})' = \iota(n)t^{\,n-1}$ for $n \ge 1$, and sums, scalar multiples and products differentiate by the usual rules ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[thm-algebra-of-continuous-functions]], [[def-derivative]], [[def-integer-power]]).

[L2] Chain rule, and the derivative of an affine reparametrisation: $y \mapsto \psi((y-\alpha)/h)$ has derivative $\psi'((y-\alpha)/h)/h$ for $h \ne 0$ ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L3] $\iota(n+2) \ge 2 > 1$, $\iota$ is increasing on $\mathbb{N}$, $\iota(m) < \iota(n)$ for $m<n$, and for every real $w$ there is a natural $n$ with $w < \iota(n+2)$; also $\iota(n)^{k} \ge \iota(n)$ for $k \ge 1$ when $\iota(n)\ge 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[lem-power-monotone]], claims 3 and 4).

[L4] If both one-sided limits of a function at $c$ exist and are equal to $L$, the two-sided limit exists and equals $L$ ([[thm-two-sided-limit-iff-both-one-sided]], [[def-one-sided-limits]], [[def-function-limit]]).

[L5] Locality of limits: two functions on $A$ agreeing on a punctured neighbourhood of $c$ have the same limit behaviour at $c$; and a derivative survives restricting the domain provided the smaller domain still accumulates at the point ([[lem-limit-is-local]], [[def-derivative]], [[def-limit-point-r]]).

[L6] Every point of a nondegenerate interval is a limit point of it ([[def-derivative]], [[def-interval]], [[def-limit-point-r]]).

[L7] Darboux sums, and therefore Riemann integrability, require a bounded function ([[def-darboux-sums]], [[def-bounded-set]], [[def-darboux-integral]]).

[L8] A nonempty finite set of reals has a least element ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Ordered-field arithmetic: $t(1-t) \le 1/4$ for every real $t$, since $(t - 1/2)^{2} \ge 0$; a positive real has a positive inverse; multiplying an inequality by a positive real preserves it; the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]], [[lem-power-monotone]], claim 1).

[L10] If $H$ is differentiable at every point of $[p,q]$ with $H'$ integrable there, then $\int_p^q H' = H(q)-H(p)$ ([[thm-ftc-second-part]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], $\phi$ is differentiable everywhere with $\phi'(t) = 2t(1-t)^{2} - 2t^{2}(1-t) = 2t(1-t)(1-2t)$; in particular $\phi(0)=\phi(1)=0$ and $\phi'(0)=\phi'(1)=0$, and $\phi'(1/4) = 2\cdot\tfrac14\cdot\tfrac34\cdot\tfrac12 = \tfrac{3}{16}$. [L1, L9]

1.2 For $t \in [0,1]$, $0 \le \phi(t) = \bigl(t(1-t)\bigr)^{2} \le (1/4)^{2} = 1/16$, by [L9]. [L9]

1.3 Each $\alpha_n, h_n, c_n$ is a positive real, $h_n \le \alpha_n$ and $c_n \le \alpha_n$ because $\iota(n+2) > 1$, and $\alpha_n \le 1/2$; so $I_n \subseteq (0,1]$, since $\beta_n = \alpha_n + h_n \le 2\alpha_n \le 1$. [given, L3, L9]

2.1 **The $I_n$ are pairwise disjoint.** For $n \ge 1$, $\alpha_{n-1}-\alpha_n = 1/\bigl(\iota(n+1)\iota(n+2)\bigr)$ while $h_n = 1/\iota(n+2)^{4}$, and $\iota(n+2)^{4} > \iota(n+1)\iota(n+2)$ because $\iota(n+2)^{3} \ge 2\,\iota(n+2) > \iota(n+1)$ by [L3]; so $\beta_n < \alpha_{n-1}$. Since $(\alpha_n)$ is strictly decreasing, $m < n$ gives $\beta_n < \alpha_{n-1} \le \alpha_m$, and $I_n$ lies strictly below $I_m$. [step 1.3, L3, L9]

2.2 For each $n$ define the polynomial $\Phi_n(y) := c_n\,\phi\bigl((y-\alpha_n)/h_n\bigr)$ on $\mathbb{R}$. By [L1] and [L2] it is differentiable everywhere with $\Phi_n'(y) = (c_n/h_n)\,\phi'\bigl((y-\alpha_n)/h_n\bigr)$, and $\Phi_n(\alpha_n)=\Phi_n(\beta_n)=0$, $\Phi_n'(\alpha_n)=\Phi_n'(\beta_n)=0$ by step 1.1. [step 1.1, L1, L2, construct]

2.3 **Differentiability at a point of $(0,1]$ outside every $I_n$.** Let $x \in (0,1]$ with $x \notin I_m$ for every $m$. By [L3] fix $N$ with $2/x < \iota(N+2)$, so $2/\iota(N+2) < x$; for $m \ge N$, $\beta_m \le 2\alpha_m = 2/\iota(m+2) \le 2/\iota(N+2) < x$ by step 1.3 and [L3]. [step 1.3, L3, L9, choose]

3.1 So $G$ is a well-defined function on $[0,1]$, no $x$ lying in two of the $I_n$. [step 2.1, given]

3.2 **Gaps around the endpoints.** For each $n$, $(\beta_{n+1}, \alpha_n)$ meets no $I_m$: for $m \le n$ one has $\alpha_m \ge \alpha_n$ by step 2.1, and for $m \ge n+1$ one has $\beta_m \le \beta_{n+1}$, again by step 2.1. Likewise $(\beta_n, \alpha_{n-1})$ meets no $I_m$ for $n \ge 1$, and $(\beta_0, 1]$ meets none. [step 2.1, L3]

3.3 The finitely many closed intervals $I_0,\dots,I_{N-1}$ do not contain $x$, so each of the positive reals $|x-\alpha_m|$ and $|x-\beta_m|$ for $m<N$, together with $x - 2/\iota(N+2)$, forms a nonempty finite set of positive reals; let $\rho$ be its least element, which is positive by [L8]. [step 2.3, L8, L9, choose]

4.1 $G$ agrees with $\Phi_n$ on $I_n$ and with the zero function off $\bigcup_m I_m$; in particular $G(\alpha_n) = G(\beta_n) = 0$ and $G \ge 0$ everywhere. [step 3.1, step 2.2, L9]

5.1 **Differentiability at an interior point of a bump.** Let $x \in (\alpha_n,\beta_n)$. The difference quotients of $G$ and of $\Phi_n$ at $x$ agree on the punctured neighbourhood $0 < |y-x| < \min\{x-\alpha_n,\ \beta_n-x\}$ inside $[0,1]$, so by [L5] and step 2.2, $G$ is differentiable at $x$ with $G'(x) = \Phi_n'(x)$. [step 2.2, step 4.1, L5, L6, L8]

5.2 **Differentiability at a left endpoint $\alpha_n$.** On the right, $G$ agrees with $\Phi_n$ on $[\alpha_n,\beta_n]$ and $G(\alpha_n) = \Phi_n(\alpha_n)$, so the right-hand limit of the difference quotient is $\Phi_n'(\alpha_n) = 0$ by [L5] and step 2.2. On the left, $G$ vanishes on $(\beta_{n+1},\alpha_n]$ by step 3.2 and step 4.1, so the quotient is identically $0$ there and its left-hand limit is $0$. By [L4], $G'(\alpha_n) = 0$. [step 2.2, step 4.1, step 3.2, L4, L5, L6]

5.3 **Differentiability at a right endpoint $\beta_n$.** Symmetrically: on the left $G$ agrees with $\Phi_n$, giving limit $\Phi_n'(\beta_n) = 0$; on the right $G$ vanishes on $[\beta_n,\alpha_{n-1})$ when $n \ge 1$ and on $[\beta_0,1]$ when $n = 0$, by step 3.2, giving limit $0$. By [L4], $G'(\beta_n) = 0$. [step 2.2, step 4.1, step 3.2, L4, L5, L6]

5.4 Then $G$ vanishes on $(x-\rho,x+\rho)\cap[0,1]$, so its difference quotient at $x$ is identically $0$ there and $G'(x) = 0$ by [L5] and [L6]. [step 2.3, step 3.3, step 4.1, L5, L6]

5.5 **Differentiability at $0$.** For $y \in (0,1]$: if $y \notin \bigcup_m I_m$ then $G(y)/y = 0$; and if $y \in I_m$ then $0 \le G(y) \le c_m/16$ by step 1.2 and step 4.1 and $y \ge \alpha_m$, so $0 \le G(y)/y \le c_m/(16\,\alpha_m) = 1/\bigl(16\,\iota(m+2)\bigr)$. [step 1.2, step 4.1, L9]

6.1 Given $\varepsilon>0$, fix by [L3] a natural $N$ with $1/\varepsilon < \iota(N+2)$ and put $\delta := \alpha_N > 0$. If $0 < y < \delta$ and $y \in I_m$ then $\alpha_m \le y < \alpha_N$, so $\iota(N+2) < \iota(m+2)$ by [L3], and step 5.5 gives $|G(y)/y| \le 1/\bigl(16\,\iota(m+2)\bigr) < \varepsilon$; otherwise $G(y)/y = 0$. [step 5.5, L3, L9, choose]

6.2 **$G'$ is unbounded.** Put $u_n := \alpha_n + h_n/4$, an interior point of $I_n$; by step 5.1 and step 2.2, $G'(u_n) = (c_n/h_n)\phi'(1/4) = \iota(n+2)^{2}\cdot\tfrac{3}{16}$, using $c_n/h_n = \iota(n+2)^{4}/\iota(n+2)^{2} = \iota(n+2)^{2}$. Given a real $M \ge 0$, [L3] supplies $n$ with $\tfrac{16}{3}M < \iota(n+2) \le \iota(n+2)^{2}$, so $G'(u_n) > M$. [step 1.1, step 2.2, step 5.1, L3, L9]

7.1 So the difference quotient of $G$ at $0$, which is $y \mapsto G(y)/y$ on $(0,1]$, tends to $0$; hence $G$ is differentiable at $0$ with $G'(0) = 0$ by [L6]. [step 6.1, L6]

8.1 By steps 5.1, 5.2, 5.3, 5.4 and 7.1, $G$ is differentiable at every point of $[0,1]$: every $x$ is either $0$, or an interior point of some $I_n$, or an endpoint of some $I_n$, or a point of $(0,1]$ outside every $I_n$. [step 5.1, step 5.2, step 5.3, step 5.4, step 7.1, L9]

9.1 Hence $G'$ is a function on $[0,1]$ that is not bounded, so it has no Darboux sums and is not Riemann integrable on $[0,1]$ by [L7]; the claim is false, and $\int_0^1 G'$ is an undefined symbol, so [L10] gives nothing here. [step 8.1, step 6.2, L7, L10] ∎

## Remarks

- **Only one bump is active near any point of $(0,1]$, and that is what makes every step finite.** The intervals $I_n$ accumulate only at $0$, so a point of $(0,1]$ has a neighbourhood meeting at most one of them (steps 3.2 and 3.3), and the only place where infinitely many bumps are seen at once is the origin, where step 5.5 controls all of them by a single estimate. No series is summed anywhere.

- **The two exponents are what the construction turns on.** Differentiability at $0$ needs $c_n/\alpha_n \to 0$, and unboundedness of $G'$ needs $c_n/h_n \to \infty$; with $\alpha_n = 1/\iota(n+2)$ the choices $c_n = \alpha_n^{2}$ and $h_n = \alpha_n^{4}$ give $c_n/\alpha_n = \alpha_n \to 0$ and $c_n/h_n = \alpha_n^{-2} \to \infty$. Any pair of exponents with the same two properties would do; these are verified explicitly in steps 6.1 and 6.2 because the construction is only as good as those two inequalities.

- **What this refutes and what it does not.** It refutes the claim that every derivative is Riemann integrable, hence the naive reading of [[thm-ftc-second-part]] with its integrability hypothesis deleted. It says nothing about whether $G'$ has a primitive — it does, namely $G$ — and nothing about the sharp class of functions for which $\int_a^b G' = G(b)-G(a)$ holds, which this library records but does not prove ([[rem-integral-conventions-and-scope]]).
````

## Wave 11 provenance row

```json
{
  "id": "cex-a-function-with-a-primitive-that-is-not-integrable",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.math.sc.edu/girardi/m555/10S/diff-counterexs.pdf"
  ],
  "rationale": "Olmsted's university-hosted differentiation counterexamples give the classical function x^2 sin(1/x^2), differentiable on a closed interval with an explicitly unbounded derivative. The published item names that classical witness and replaces its trigonometric oscillations by disjoint quartic bumps because trigonometric functions occur later in the library. The exact polynomial realization and its seam proof are local, but the mathematical counterexample is a recoverable source-backed alteration rather than an invented proposition.",
  "alpha_concurred": false,
  "at": "2026-08-10"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-derivative-of-a-power",
      "source_section": "Statement",
      "quote": "Powers are those of [[def-integer-power]], and $\\iota : \\mathbb{N} \\to\n\\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that\n$\\iota(0) = 0$ and $\\iota(m+1) = \\iota(m) + 1$. Let $n \\in \\mathbb{N}$.\n\n1. The function $p_0 : \\mathbb{R} \\to \\mathbb{R}$, $p_0(x) = x^{0}$, is the\n   constant function $1$, and it is differentiable at every $c \\in \\mathbb{R}$\n   with $p_0'(c) = 0$ ([[def-derivative]]).\n2. For $n \\ge 1$ the function $p_n : \\mathbb{R} \\to \\mathbb{R}$,\n   $p_n(x) = x^{n}$, is differentiable at every $c \\in \\mathbb{R}$, and\n   $$p_n'(c) \\;=\\; \\iota(n)\\,c^{\\,n-1} .$$\n3. For $n \\ge 1$ put $A_0 := \\{\\, x \\in \\mathbb{R} : x \\ne 0 \\,\\}$. The function\n   $m_n : A_0 \\to \\mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every\n   $c \\in A_0$ as a function on $A_0$, and\n   $$m_n'(c) \\;=\\; -\\,\\iota(n)\\,c^{\\,-n-1} .$$\n4. Let $a : \\mathbb{N} \\to \\mathbb{R}$ with $a_j = 0$ for $j \\ge n$, and let\n   $P : \\mathbb{R} \\to \\mathbb{R}$ be the polynomial function\n   $P(x) = \\sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is\n   differentiable at every $c \\in \\mathbb{R}$, and, defining $e : \\mathbb{N}\n   \\to \\mathbb{R}$ by $e_0 := 0$ and $e_j := \\iota(j)\\,a_j\\,c^{\\,j-1}$ for\n   $j \\ge 1$,\n   $$P'(c) \\;=\\; \\sum_{j<n} e_j .$$\n\n**Claim 2 is stated for $n \\ge 1$ and not for $n \\ge 0$, and that is not\ntimidity.** At $n = 0$ its right-hand side reads $\\iota(0)\\,c^{-1}$, and\n$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is\nnot a statement about the whole line. Claim 1 is what covers $n = 0$, and it\nsays the derivative is $0$ there, which is what the informal reading\n\"$0 \\cdot c^{-1}$\" is reaching for. The same shift is why the term $e_0$ of\nclaim 4 is defined to be $0$ outright rather than by the formula.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-algebra-of-derivatives",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c \\in A$ be a limit point of $A$\n([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ be differentiable at $c$\n([[def-derivative]]) and let $\\alpha \\in \\mathbb{R}$. Then:\n\n1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;\n2. $\\alpha f$ is differentiable at $c$ and $(\\alpha f)'(c) = \\alpha f'(c)$;\n3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is differentiable\n   at $c$ as a function on $A_0$, and\n   $$\\bigl((f/g)|_{A_0}\\bigr)'(c) \\;=\\; \\frac{f'(c)\\,g(c) - f(c)\\,g'(c)}{g(c)^{2}} .$$\n\nEach claim asserts two things: that the derivative on the left exists, and that\nit has the stated value. Both are proved.\n\n**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$\nvanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$\nis forced. That the restriction still has $c$ as a limit point, so that a\nderivative there means anything at all, is not free either, and it is the last\nclaim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis\nis $g(c) \\ne 0$, not \"$g$ vanishes nowhere\".\n\n**Everything is proved through\n[[thm-caratheodory-characterisation]].** No difference quotient is estimated and\nno limit theorem beyond continuity is used, so no choice principle is spent.\nThe four identities are four algebraic rearrangements of an increment, each\nfollowed by a reading of [[thm-algebra-of-continuous-functions]].",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let\n$\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at\n$c$ ([[def-continuity-real]]). Then:\n\n1. $f + g$, $\\alpha f$ and $fg$ are continuous at $c$;\n2. $|f|$, the function $x \\mapsto |f(x)|$, is continuous at $c$;\n3. $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, defined pointwise by\n   $x \\mapsto \\max\\{f(x), g(x)\\}$ and $x \\mapsto \\min\\{f(x), g(x)\\}$\n   ([[def-max-min]]), are continuous at $c$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is continuous at\n   $c$ as a function on $A_0$.\n\nMoreover, with no hypothesis at all:\n\n5. every constant function $A \\to \\mathbb{R}$ and the identity\n   $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence\n   so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$\n   ([[def-integer-power]]), and hence so is every **polynomial function**\n   $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients.\n\nConsequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,\n$\\alpha f$, $fg$, $|f|$, $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, and\n$(f/g)|_{A_0}$ is continuous on $A_0$.\n\n**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,\nand $g$ may well vanish at points of $A$ far from $c$. The hypothesis is\n$g(c) \\ne 0$, not \"$g$ nowhere zero\"; what it buys is that $c$ itself lies in\nthe smaller domain, which is what makes continuity there mean anything.\n\n**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from\n[[thm-algebra-of-function-limits]], which is itself proved from $\\varepsilon$\nand $\\delta$, and claims 2, 3 and 5 are proved directly below. So no choice\nprinciple is used anywhere in this item.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), neighbourhoods are those of\n[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\n**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function\n\n$$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$\n\nThe division is legitimate at every point of the domain, since $x \\ne c$ gives\n$x - c \\ne 0$.\n\n**The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.**\nFor every real $\\varepsilon > 0$ the punctured neighbourhood\n$N^{*}_{\\varepsilon}(c)$ omits $c$, so\n\n$$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$\n\nand the left-hand side is nonempty because $c$ is a limit point of $A$. So\n$q_{f,c}$ is a function on a set having $c$ as a limit point, and\n$\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.\n\n$f$ is **differentiable at $c$** when that limit exists, and then the\n**derivative of $f$ at $c$** is\n\n$$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$\n\n**Two obligations are carried by that notation, and both are discharged here.**\n\n1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a\n   single real number. That is legitimate: $c$ is a limit point of the domain\n   $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the\n   $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to\n   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the\n   symbol denotes.\n2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not\n   decoration. At an **isolated** point of $A$ the punctured condition\n   $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the\n   $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at\n   once; this is why [[def-function-limit]] leaves the limit undefined there,\n   and it is why this library defines $f'(c)$ only at a limit point of $A$. At\n   an isolated point of its domain a function is neither differentiable nor\n   non-differentiable here: the question is not posed.\n\n**The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is\nextended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with\n$q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$.\nThen $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$.\nBoth conditions read: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that every point $x$ of the relevant domain with\n$0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$\n([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both\nquantifiers, so in both cases the points quantified over are exactly the\n$x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and\n$q_{f,c}$ take the same value. The two conditions are the same condition.\n\n**Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on\n$S$** when it is differentiable at every $c \\in S$; implicit in that phrase is\nthat every point of $S$ is a limit point of $A$. $f$ is **differentiable** when\nit is differentiable on the whole of $A$.\n\n**Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose\n$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the\nrestriction $f|_B : B \\to \\mathbb{R}$, and\n\n$$(f|_B)'(c) \\;=\\; f'(c) .$$\n\nIndeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity\nof punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit\npoint of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the\nrestriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and\nclaim 2 of [[lem-limit-is-local]] carries the limit to that restriction.\n\n**Every point of a nondegenerate interval is a limit point of it.** Let\n$J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two\nelements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real\n$\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$;\nthen $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and\norder-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$,\nthe point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same\nway. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real\n$\\varepsilon > 0$, that is, $p$ is a limit point of $J$\n([[def-limit-point-r]]).\n\nConsequently, for $f$ defined on a nondegenerate interval $I$, the symbol\n$f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint\nthe difference quotient is taken over the points of $I$ lying on the one side\nthat is available, so what other texts call a one-sided derivative is, here,\nsimply the derivative of $f$ on $I$.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-chain-rule",
      "source_section": "Statement",
      "quote": "Let $A, B \\subseteq \\mathbb{R}$, let $g : A \\to \\mathbb{R}$ with\n$g[A] \\subseteq B$ and let $f : B \\to \\mathbb{R}$, so that the composite\n$f \\circ g : A \\to \\mathbb{R}$ is defined. Let $c \\in A$ be a limit point of\n$A$ ([[def-limit-point-r]]) at which $g$ is differentiable\n([[def-derivative]]), put $b := g(c)$, and suppose $b$ is a limit point of $B$\nat which $f$ is differentiable. Then $f \\circ g$ is differentiable at $c$ and\n\n$$(f \\circ g)'(c) \\;=\\; f'\\bigl(g(c)\\bigr)\\,g'(c) .$$\n\n**Both limit-point hypotheses are needed, and neither is automatic.** That $c$\nis a limit point of $A$ is what makes $g'(c)$ and $(f \\circ g)'(c)$ defined\nsymbols; that $b = g(c)$ is a limit point of $B$ is what makes $f'(b)$ one.\nNothing forces the second: $g$ may be differentiable at $c$ and send $c$ to an\nisolated point of $B$, and there $f'(b)$ is not defined and the formula asserts\nnothing.\n\n**No case analysis appears anywhere.** The naive difference-quotient proof\nwrites $\\frac{f(g(x)) - f(g(c))}{g(x) - g(c)} \\cdot \\frac{g(x) - g(c)}{x - c}$\nand then has to say what happens where $g(x) = g(c)$, which may occur at points\narbitrarily close to $c$. Carathéodory's factorisation never divides by the\ninner increment, so the difficulty does not arise.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-algebra-of-derivatives",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c \\in A$ be a limit point of $A$\n([[def-limit-point-r]]), let $f, g : A \\to \\mathbb{R}$ be differentiable at $c$\n([[def-derivative]]) and let $\\alpha \\in \\mathbb{R}$. Then:\n\n1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;\n2. $\\alpha f$ is differentiable at $c$ and $(\\alpha f)'(c) = \\alpha f'(c)$;\n3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is differentiable\n   at $c$ as a function on $A_0$, and\n   $$\\bigl((f/g)|_{A_0}\\bigr)'(c) \\;=\\; \\frac{f'(c)\\,g(c) - f(c)\\,g'(c)}{g(c)^{2}} .$$\n\nEach claim asserts two things: that the derivative on the left exists, and that\nit has the stated value. Both are proved.\n\n**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$\nvanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$\nis forced. That the restriction still has $c$ as a limit point, so that a\nderivative there means anything at all, is not free either, and it is the last\nclaim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis\nis $g(c) \\ne 0$, not \"$g$ vanishes nowhere\".\n\n**Everything is proved through\n[[thm-caratheodory-characterisation]].** No difference quotient is estimated and\nno limit theorem beyond continuity is used, so no choice principle is spent.\nThe four identities are four algebraic rearrangements of an increment, each\nfollowed by a reading of [[thm-algebra-of-continuous-functions]].",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "uses": [
        "1.3",
        "2.1",
        "2.3",
        "3.2",
        "6.1",
        "6.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.3",
        "2.1",
        "2.3",
        "3.2",
        "6.1",
        "6.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "1.3",
        "2.1",
        "2.3",
        "3.2",
        "6.1",
        "6.2"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "1.3",
        "2.1",
        "2.3",
        "3.2",
        "6.1",
        "6.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let\n$a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in\n[[def-integer-power]].\n\n1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$.\n2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$.\n3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$.\n4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "uses": [
        "1.3",
        "2.1",
        "2.3",
        "3.2",
        "6.1",
        "6.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-two-sided-limit-iff-both-one-sided",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in\n\\mathbb{R}$ be a limit point of **both** $A^{-} = A \\cap (-\\infty, c)$ and\n$A^{+} = A \\cap (c, \\infty)$ ([[def-limit-point-r]], [[def-interval]]), so that\nboth one-sided limits at $c$ are well posed ([[def-one-sided-limits]]). Then $c$\nis a limit point of $A$, and for every $L \\in \\mathbb{R}$:\n\n$$\\lim_{x \\to c} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to c^{-}} f(x) = L \\ \\text{ and } \\ \\lim_{x \\to c^{+}} f(x) = L$$\n\n([[def-function-limit]]). Consequently the limit of $f$ at $c$ **exists** if and\nonly if both one-sided limits exist and are equal, and in that case\n\n$$\\lim_{x \\to c} f(x) \\;=\\; \\lim_{x \\to c^{-}} f(x) \\;=\\; \\lim_{x \\to c^{+}} f(x) .$$\n\n**The hypothesis on both sides is what makes the statement an equivalence.** If\n$c$ is a limit point of only one of the two sets — as $1$ is for\n$\\{0\\} \\cup [1,2]$ — then the one-sided limit on that side and the two-sided\nlimit are the same condition, and the symbol on the other side is not defined at\nall ([[def-one-sided-limits]]).",
      "uses": [
        "5.2",
        "5.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-one-sided-limits",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in\n\\mathbb{R}$. Put\n\n$$A^{-} := A \\cap (-\\infty, c), \\qquad A^{+} := A \\cap (c, \\infty)$$\n\n([[def-interval]]), and write $f^{-} := f|_{A^{-}}$ and $f^{+} := f|_{A^{+}}$\nfor the restrictions of $f$ to those sets.\n\n**Right limit.** Suppose $c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).\nFor $L \\in \\mathbb{R}$ we write\n\n$$\\lim_{x \\to c^{+}} f(x) = L \\quad :\\Longleftrightarrow \\quad \\lim_{x \\to c} f^{+}(x) = L$$\n\nin the sense of [[def-function-limit]]. Written out: for every real\n$\\varepsilon > 0$ there is a real $\\delta > 0$ such that\n\n$$|f(x) - L| < \\varepsilon \\qquad \\text{for every } x \\in A \\text{ with } c < x < c + \\delta .$$\n\n**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \\in \\mathbb{R}$\nwe write $\\lim_{x \\to c^{-}} f(x) = L$ when $\\lim_{x \\to c} f^{-}(x) = L$; written\nout, for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n$|f(x) - L| < \\varepsilon$ for every $x \\in A$ with $c - \\delta < x < c$.\n\n**The written-out forms agree with the definitions.** For $x \\in A^{+}$ the two\nconditions $0 < |x - c| < \\delta$ and $c < x < c + \\delta$ are the same: $x > c$\ngives $x - c > 0$, so $|x - c| = x - c$ and $0 < |x - c| < \\delta$ reads\n$0 < x - c < \\delta$ ([[lem-of-abs-value]]). Symmetrically on the left, where\n$x < c$ gives $|x - c| = c - x$.\n\n**Well-posedness is inherited, not reproved.** A one-sided limit *is* a limit,\nnamely the limit of a restriction, so:\n\n- **Uniqueness.** At most one $L$ can occur, by [[lem-function-limit-unique]]\n  applied to $f^{+}$ on the domain $A^{+}$ (respectively to $f^{-}$ on\n  $A^{-}$), which is legitimate exactly because $c$ was required to be a limit\n  point of that set. This is what makes the notation $\\lim_{x \\to c^{+}} f(x)$\n  denote a single real.\n- **Locality and restriction.** Both claims of [[lem-limit-is-local]] apply\n  verbatim to $f^{+}$ and $f^{-}$.\n\n**When the symbols are defined.** If $c$ is not a limit point of $A^{+}$ — for\ninstance if $A$ contains no point to the right of $c$, or only points bounded\naway from $c$ on that side — then $\\lim_{x \\to c^{+}} f(x)$ is **not defined**\nhere, for the reason given in [[def-function-limit]]: the\n$\\varepsilon$-$\\delta$ condition would be satisfied vacuously by every real at\nonce. The same applies on the left.",
      "uses": [
        "5.2",
        "5.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) with its order and absolute value\n([[def-real-order]]).\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$\nbe a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$.\nWe say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write\n\n$$\\lim_{x \\to c} f(x) = L ,$$\n\nwhen\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$\n\nwhere $\\varepsilon$ and $\\delta$ range over the **positive reals**.\n\nIn the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n\n$$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$\n\n$N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured\n$\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L +\n\\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because\n$|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and\n$0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$.\n\n**Three features of this definition are load bearing, not decoration.**\n\n1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that\n   says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$\n   the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is\n   nonempty. Drop the requirement and the implication can be satisfied\n   vacuously by *every* real $L$ at once, which is exactly what\n   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$\n   that is not a limit point of $A$ — an isolated point — the symbol\n   $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library.\n\n2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$\n   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This\n   is what allows a limit to be taken at a point where the function is not\n   defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$.\n\n3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis\n   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the\n   single point $c$ changes nothing. Equality of the limit with the value is an\n   extra condition, not a consequence: [[fs-limit-equals-value]].\n\n**The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats\nthe left-hand side as a name for a single real number, which is legitimate only\nbecause at a limit point at most one $L$ can satisfy the displayed condition.\nThat obligation is discharged by [[lem-function-limit-unique]], recorded in this\nitem's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and\n$\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function\nalready known to have a limit at $c$.\n\n**Real and rational $\\varepsilon$ define the same relation.** Above,\n$\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either\nquantifier to the positive rationals gives the same relation: every positive\nrational is a positive real, and below every positive real lies a positive\nrational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for\nall positive rationals is verified for an arbitrary positive real $\\eta$ by\nrunning it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a\n$\\delta$ produced as a real may be shrunk to a rational one below it. This is\nthe passage sanctioned in the remarks of [[def-sequence]], and it is what lets\nthis definition be compared with [[def-real-limit]], whose $\\varepsilon$ is\nrational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "5.2",
        "5.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-limit-is-local",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and let $c$ be a limit point of $A$\n([[def-limit-point-r]]).\n\n1. **Locality.** Let $f, g : A \\to \\mathbb{R}$ and $L \\in \\mathbb{R}$, and\n   suppose there is a real $\\eta > 0$ with $f(x) = g(x)$ for every $x \\in A$\n   satisfying $0 < |x - c| < \\eta$. Then\n   $$\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c} g(x) = L$$\n   ([[def-function-limit]]).\n\n2. **Restriction.** Let $B \\subseteq A$ with $c$ a limit point of $B$, let\n   $f : A \\to \\mathbb{R}$ and suppose $\\lim_{x \\to c} f(x) = L$. Then $c$ is a\n   limit point of $A$ as well, and $\\lim_{x \\to c} f|_B(x) = L$, where\n   $f|_B : B \\to \\mathbb{R}$ is the restriction of $f$.\n\nSo the limit at $c$ sees only the values of $f$ on an arbitrarily small\npunctured neighbourhood of $c$, and it survives shrinking the domain, provided\nthe smaller domain still accumulates at $c$. Together with\n[[lem-function-limit-unique]] this is what makes the phrase *the* limit at $c$ a\nlocal notion.\n\n**The converse of claim 2 is false in general**: a restriction may have a limit\nwhere the function has none, as the one-sided limits of the sign function on the\ncompanion page show.",
      "uses": [
        "5.1",
        "5.2",
        "5.3",
        "5.4"
      ]
    },
    {
      "fact": "L5",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), neighbourhoods are those of\n[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\n**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function\n\n$$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$\n\nThe division is legitimate at every point of the domain, since $x \\ne c$ gives\n$x - c \\ne 0$.\n\n**The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.**\nFor every real $\\varepsilon > 0$ the punctured neighbourhood\n$N^{*}_{\\varepsilon}(c)$ omits $c$, so\n\n$$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$\n\nand the left-hand side is nonempty because $c$ is a limit point of $A$. So\n$q_{f,c}$ is a function on a set having $c$ as a limit point, and\n$\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.\n\n$f$ is **differentiable at $c$** when that limit exists, and then the\n**derivative of $f$ at $c$** is\n\n$$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$\n\n**Two obligations are carried by that notation, and both are discharged here.**\n\n1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a\n   single real number. That is legitimate: $c$ is a limit point of the domain\n   $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the\n   $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to\n   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the\n   symbol denotes.\n2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not\n   decoration. At an **isolated** point of $A$ the punctured condition\n   $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the\n   $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at\n   once; this is why [[def-function-limit]] leaves the limit undefined there,\n   and it is why this library defines $f'(c)$ only at a limit point of $A$. At\n   an isolated point of its domain a function is neither differentiable nor\n   non-differentiable here: the question is not posed.\n\n**The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is\nextended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with\n$q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$.\nThen $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$.\nBoth conditions read: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that every point $x$ of the relevant domain with\n$0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$\n([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both\nquantifiers, so in both cases the points quantified over are exactly the\n$x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and\n$q_{f,c}$ take the same value. The two conditions are the same condition.\n\n**Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on\n$S$** when it is differentiable at every $c \\in S$; implicit in that phrase is\nthat every point of $S$ is a limit point of $A$. $f$ is **differentiable** when\nit is differentiable on the whole of $A$.\n\n**Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose\n$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the\nrestriction $f|_B : B \\to \\mathbb{R}$, and\n\n$$(f|_B)'(c) \\;=\\; f'(c) .$$\n\nIndeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity\nof punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit\npoint of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the\nrestriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and\nclaim 2 of [[lem-limit-is-local]] carries the limit to that restriction.\n\n**Every point of a nondegenerate interval is a limit point of it.** Let\n$J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two\nelements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real\n$\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$;\nthen $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and\norder-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$,\nthe point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same\nway. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real\n$\\varepsilon > 0$, that is, $p$ is a limit point of $J$\n([[def-limit-point-r]]).\n\nConsequently, for $f$ defined on a nondegenerate interval $I$, the symbol\n$f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint\nthe difference quotient is taken over the points of $I$ lying on the one side\nthat is available, so what other texts call a one-sided derivative is, here,\nsimply the derivative of $f$ on $I$.",
      "uses": [
        "5.1",
        "5.2",
        "5.3",
        "5.4"
      ]
    },
    {
      "fact": "L5",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "5.1",
        "5.2",
        "5.3",
        "5.4"
      ]
    },
    {
      "fact": "L6",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), neighbourhoods are those of\n[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\n**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function\n\n$$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$\n\nThe division is legitimate at every point of the domain, since $x \\ne c$ gives\n$x - c \\ne 0$.\n\n**The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.**\nFor every real $\\varepsilon > 0$ the punctured neighbourhood\n$N^{*}_{\\varepsilon}(c)$ omits $c$, so\n\n$$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$\n\nand the left-hand side is nonempty because $c$ is a limit point of $A$. So\n$q_{f,c}$ is a function on a set having $c$ as a limit point, and\n$\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.\n\n$f$ is **differentiable at $c$** when that limit exists, and then the\n**derivative of $f$ at $c$** is\n\n$$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$\n\n**Two obligations are carried by that notation, and both are discharged here.**\n\n1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a\n   single real number. That is legitimate: $c$ is a limit point of the domain\n   $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the\n   $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to\n   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the\n   symbol denotes.\n2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not\n   decoration. At an **isolated** point of $A$ the punctured condition\n   $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the\n   $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at\n   once; this is why [[def-function-limit]] leaves the limit undefined there,\n   and it is why this library defines $f'(c)$ only at a limit point of $A$. At\n   an isolated point of its domain a function is neither differentiable nor\n   non-differentiable here: the question is not posed.\n\n**The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is\nextended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with\n$q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$.\nThen $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$.\nBoth conditions read: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that every point $x$ of the relevant domain with\n$0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$\n([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both\nquantifiers, so in both cases the points quantified over are exactly the\n$x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and\n$q_{f,c}$ take the same value. The two conditions are the same condition.\n\n**Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on\n$S$** when it is differentiable at every $c \\in S$; implicit in that phrase is\nthat every point of $S$ is a limit point of $A$. $f$ is **differentiable** when\nit is differentiable on the whole of $A$.\n\n**Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose\n$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the\nrestriction $f|_B : B \\to \\mathbb{R}$, and\n\n$$(f|_B)'(c) \\;=\\; f'(c) .$$\n\nIndeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity\nof punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit\npoint of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the\nrestriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and\nclaim 2 of [[lem-limit-is-local]] carries the limit to that restriction.\n\n**Every point of a nondegenerate interval is a limit point of it.** Let\n$J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two\nelements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real\n$\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$;\nthen $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and\norder-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$,\nthe point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same\nway. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real\n$\\varepsilon > 0$, that is, $p$ is a limit point of $J$\n([[def-limit-point-r]]).\n\nConsequently, for $f$ defined on a nondegenerate interval $I$, the symbol\n$f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint\nthe difference quotient is taken over the points of $I$ lying on the one side\nthat is available, so what other texts call a one-sided derivative is, here,\nsimply the derivative of $f$ on $I$.",
      "uses": [
        "5.1",
        "5.2",
        "5.3",
        "5.4",
        "7.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "5.1",
        "5.2",
        "5.3",
        "5.4",
        "7.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "5.1",
        "5.2",
        "5.3",
        "5.4",
        "7.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-darboux-sums",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be **bounded**\n([[def-bounded-set]]), so that there is a real $M \\ge 0$ with $|f(x)| \\le M$ for\nevery $x \\in [a,b]$, and let $P = (n,t)$ be a partition of $[a,b]$ with\nsubintervals $I_i = [t_i, t_{i+1}]$ and lengths $\\Delta_i = t_{i+1} - t_i$ for\n$i < n$ ([[def-partition-and-refinement]]).\n\n### The two extreme values on a subinterval\n\nFor $i < n$ put\n\n$$m_i \\;:=\\; \\inf f[I_i], \\qquad M_i \\;:=\\; \\sup f[I_i], \\qquad f[I_i] \\;=\\; \\{\\, f(x) : x \\in I_i \\,\\} .$$\n\n**Both exist.** The set $f[I_i]$ is nonempty, because $t_i < t_{i+1}$ makes $I_i$\nnonempty ([[def-interval]]), and it is bounded, because $|f(x)| \\le M$ for every\n$x$ ([[def-bounded-set]]). A nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]); each is unique, so the notations\n$\\inf f[I_i]$ and $\\sup f[I_i]$ name single real numbers ([[lem-sup-unique]]).\n\n**They bracket the values, and each other.** For $x \\in I_i$,\n\n$$-M \\;\\le\\; m_i \\;\\le\\; f(x) \\;\\le\\; M_i \\;\\le\\; M ,$$\n\nthe outer inequalities because $-M$ is a lower bound and $M$ an upper bound of\n$f[I_i]$, and the middle ones by the definitions of infimum and supremum. In\nparticular $m_i \\le M_i$ and $M_i - m_i \\le 2M$.\n\nThe dependence of $m_i$ and $M_i$ on $f$ and on $P$ is suppressed in the\nnotation, as is customary; where two partitions are in play the sums below carry\nthe partition and the extreme values are written out.\n\n### The two Darboux sums\n\n$$L(f,P) \\;:=\\; \\sum_{i<n} m_i \\,\\Delta_i, \\qquad U(f,P) \\;:=\\; \\sum_{i<n} M_i \\,\\Delta_i ,$$\n\nthe finite sums of [[def-finite-sum]], indexed by $i \\in \\mathbb{N}$ with\n$i < n$. Both are real numbers, being finite sums of reals, and\n\n$$L(f,P) \\;\\le\\; U(f,P) ,$$\n\nby monotonicity of finite sums, clause 4 of [[lem-finite-sum-laws]], since\n$m_i \\Delta_i \\le M_i \\Delta_i$ for every $i < n$: multiplying $m_i \\le M_i$ by\n$\\Delta_i > 0$ preserves the inequality ([[def-ordered-field]]).\n\n### The gap on a subinterval is the oscillation there\n\nFor every $i < n$,\n\n$$M_i - m_i \\;=\\; \\omega_f(I_i) \\;=\\; \\sup\\{\\, |f(x) - f(y)| \\ : \\ x, y \\in I_i \\,\\} ,$$\n\nthe oscillation of $f$ on the set $I_i$ ([[def-oscillation]]). The supremum is a\nreal number here rather than an extended one, because $f$ is bounded\n([[def-oscillation]], [[def-extended-reals]]). The identity is proved in two\ninequalities.\n\n*The oscillation is at most the gap.* For $x, y \\in I_i$ both $f(x)$ and $f(y)$\nlie in $[m_i, M_i]$, so $f(x) - f(y) \\le M_i - m_i$ and\n$f(y) - f(x) \\le M_i - m_i$, whence $|f(x) - f(y)| \\le M_i - m_i$\n([[lem-of-abs-value]]). So $M_i - m_i$ is an upper bound of the set whose\nsupremum is $\\omega_f(I_i)$.\n\n*The gap is at most the oscillation.* Let $\\varepsilon > 0$ be real. By the\n$\\varepsilon$-characterisations of the supremum and the infimum\n([[lem-sup-epsilon]], [[lem-inf-epsilon]]) there are $x, y \\in I_i$ with\n$f(x) > M_i - \\varepsilon/2$ and $f(y) < m_i + \\varepsilon/2$; then\n\n$$|f(x) - f(y)| \\;\\ge\\; f(x) - f(y) \\;>\\; (M_i - m_i) - \\varepsilon ,$$\n\nso $\\omega_f(I_i) > (M_i - m_i) - \\varepsilon$. As $\\varepsilon > 0$ was\narbitrary, $\\omega_f(I_i) \\ge M_i - m_i$: otherwise\n$\\varepsilon := (M_i - m_i) - \\omega_f(I_i)$ would be positive and give\n$\\omega_f(I_i) > \\omega_f(I_i)$.\n\nThis identity is what connects the Darboux machinery to the pointwise\noscillation of [[def-oscillation]], and it is the hinge of\n[[thm-lebesgue-criterion]].",
      "uses": [
        "9.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "9.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-darboux-integral",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Write $\\mathcal{P}$ for the set of all partitions of\n$[a,b]$ ([[def-partition-and-refinement]]) and put\n\n$$\\mathcal{L} \\;:=\\; \\{\\, L(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}, \\qquad \\mathcal{U} \\;:=\\; \\{\\, U(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}$$\n\nfor the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).\n\n### Both extrema exist\n\n**$\\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$\nfor $k \\ge 1$ is a partition of $[a,b]$, since $a < b$. So $\\mathcal{L}$ and\n$\\mathcal{U}$ are nonempty.\n\n**$\\mathcal{L}$ is bounded above and $\\mathcal{U}$ is bounded below.** Fix any\n$Q \\in \\mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],\n$L(f,P) \\le U(f,Q)$ for every $P \\in \\mathcal{P}$, so $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$; and $L(f,Q) \\le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower\nbound of $\\mathcal{U}$.\n\nHence a nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).\nThe **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real\nnumbers\n\n$$\\underline{\\int_a^b} f \\;:=\\; \\sup \\mathcal{L} \\;=\\; \\sup_{P} L(f,P), \\qquad \\overline{\\int_a^b} f \\;:=\\; \\inf \\mathcal{U} \\;=\\; \\inf_{P} U(f,P) .$$\n\n### The lower integral never exceeds the upper one\n\n$$\\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f .$$\n\nIndeed, for each fixed $Q \\in \\mathcal{P}$ the number $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$, so the least upper bound satisfies\n$\\underline{\\int_a^b} f \\le U(f,Q)$. As $Q$ was arbitrary, $\\underline{\\int_a^b}f$\nis a lower bound of $\\mathcal{U}$, and the greatest lower bound satisfies\n$\\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f$ ([[def-infimum]]).\n\nMoreover, for **every** partition $P$,\n\n$$L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) ,$$\n\nthe outer inequalities because a member of a set is at most its supremum and at\nleast its infimum.\n\n### Integrability\n\n$f$ is **Darboux integrable on $[a,b]$**, and on this page simply\n**integrable**, when\n\n$$\\underline{\\int_a^b} f \\;=\\; \\overline{\\int_a^b} f ,$$\n\nand then the common value is written\n\n$$\\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f(x)\\,\\mathrm{d}x ,$$\n\nthe **integral of $f$ over $[a,b]$**. It is a single well-determined real\nnumber, being the common value of two numbers each of which is unique\n([[lem-sup-unique]]). Without the displayed equality the symbol $\\int_a^b f$ is\nnot defined and is never written.\n\n**The inequality above is the whole difficulty.** By the previous paragraph\nintegrability is *never* a question of one integral exceeding the other, only of\nthe gap $\\overline{\\int_a^b} f - \\underline{\\int_a^b} f \\ge 0$ being $0$; and by\n[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be\nfound making $U(f,P) - L(f,P)$ small. Whether that is possible is settled\ncompletely, in terms of the discontinuities of $f$, by\n[[thm-lebesgue-criterion]].\n\n**\"Riemann integrable\" means the same thing here.** The definition above is\nDarboux's. Riemann's own definition, in terms of tagged partitions of small\nmesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same\nclass of functions with the same integral by [[thm-darboux-equals-riemann]].\nUntil that theorem is proved the two phrases are kept apart; after it they are\nused interchangeably, as they are throughout the literature.",
      "uses": [
        "9.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the\nset $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$.\n\nThe usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "3.3",
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "3.3",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.3",
        "3.3",
        "4.1",
        "5.5",
        "6.1",
        "6.2",
        "8.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.3",
        "3.3",
        "4.1",
        "5.5",
        "6.1",
        "6.2",
        "8.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let\n$a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in\n[[def-integer-power]].\n\n1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$.\n2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$.\n3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$.\n4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.3",
        "3.3",
        "4.1",
        "5.5",
        "6.1",
        "6.2",
        "8.1"
      ]
    },
    {
      "fact": "L10",
      "source": "thm-ftc-second-part",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $G : [a,b] \\to \\mathbb{R}$ be differentiable at every\npoint of $[a,b]$ as a function on $[a,b]$ ([[def-derivative]]; at $a$ and $b$\nthis is the one-sided derivative), let $f := G'$, and suppose $f$ is integrable\non $[a,b]$ ([[def-darboux-integral]]). Then\n\n$$\\int_a^b f \\;=\\; G(b) - G(a) .$$\n\n**Both hypotheses are needed and neither is removable.** A function may be\ndifferentiable everywhere with $G'$ not integrable — then the left-hand side does\nnot exist (an everywhere differentiable function with unbounded derivative) — and an\nintegrable $f$ need not be the derivative of anything\n(the sign function); both witnesses are on the\ncompanion page.\n\n**No continuity of $f$ is assumed**, which is what makes this the working form:\nthe theorem evaluates $\\int_a^b f$ for every integrable derivative, not only for\ncontinuous integrands.",
      "uses": [
        "9.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-1-1",
      "claim": "By [L1], $\\phi$ is differentiable everywhere with $\\phi'(t) = 2t(1-t)^{2} - 2t^{2}(1-t) = 2t(1-t)(1-2t)$; in particular $\\phi(0)=\\phi(1)=0$ and $\\phi'(0)=\\phi'(1)=0$, and $\\phi'(1/4) = 2\\cdot\\tfrac14\\cdot\\tfrac34\\cdot\\tfrac12 = \\tfrac{3}{16}$. [L1, L9]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L9"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-1-2",
      "claim": "For $t \\in [0,1]$, $0 \\le \\phi(t) = \\bigl(t(1-t)\\bigr)^{2} \\le (1/4)^{2} = 1/16$, by [L9]. [L9]",
      "step": "1.2",
      "inputs": [
        "L9"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-1-3",
      "claim": "Each $\\alpha_n, h_n, c_n$ is a positive real, $h_n \\le \\alpha_n$ and $c_n \\le \\alpha_n$ because $\\iota(n+2) > 1$, and $\\alpha_n \\le 1/2$; so $I_n \\subseteq (0,1]$, since $\\beta_n = \\alpha_n + h_n \\le 2\\alpha_n \\le 1$. [given, L3, L9]",
      "step": "1.3",
      "inputs": [
        "given",
        "L3",
        "L9"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-2-1",
      "claim": "**The $I_n$ are pairwise disjoint.** For $n \\ge 1$, $\\alpha_{n-1}-\\alpha_n = 1/\\bigl(\\iota(n+1)\\iota(n+2)\\bigr)$ while $h_n = 1/\\iota(n+2)^{4}$, and $\\iota(n+2)^{4} > \\iota(n+1)\\iota(n+2)$ because $\\iota(n+2)^{3} \\ge 2\\,\\iota(n+2) > \\iota(n+1)$ by [L3]; so $\\beta_n < \\alpha_{n-1}$. Since $(\\alpha_n)$ is strictly decreasing, $m < n$ gives $\\beta_n < \\alpha_{n",
      "step": "2.1",
      "inputs": [
        "step 1.3",
        "L3",
        "L9"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-2-2",
      "claim": "For each $n$ define the polynomial $\\Phi_n(y) := c_n\\,\\phi\\bigl((y-\\alpha_n)/h_n\\bigr)$ on $\\mathbb{R}$. By [L1] and [L2] it is differentiable everywhere with $\\Phi_n'(y) = (c_n/h_n)\\,\\phi'\\bigl((y-\\alpha_n)/h_n\\bigr)$, and $\\Phi_n(\\alpha_n)=\\Phi_n(\\beta_n)=0$, $\\Phi_n'(\\alpha_n)=\\Phi_n'(\\beta_n)=0$ by step 1.1. [step 1.1, L1, L2, construct]",
      "step": "2.2",
      "inputs": [
        "step 1.1",
        "L1",
        "L2",
        "construct"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-2-3",
      "claim": "**Differentiability at a point of $(0,1]$ outside every $I_n$.** Let $x \\in (0,1]$ with $x \\notin I_m$ for every $m$. By [L3] fix $N$ with $2/x < \\iota(N+2)$, so $2/\\iota(N+2) < x$; for $m \\ge N$, $\\beta_m \\le 2\\alpha_m = 2/\\iota(m+2) \\le 2/\\iota(N+2) < x$ by step 1.3 and [L3]. [step 1.3, L3, L9, choose]",
      "step": "2.3",
      "inputs": [
        "step 1.3",
        "L3",
        "L9",
        "choose"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-3-1",
      "claim": "So $G$ is a well-defined function on $[0,1]$, no $x$ lying in two of the $I_n$. [step 2.1, given]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "given"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-3-2",
      "claim": "**Gaps around the endpoints.** For each $n$, $(\\beta_{n+1}, \\alpha_n)$ meets no $I_m$: for $m \\le n$ one has $\\alpha_m \\ge \\alpha_n$ by step 2.1, and for $m \\ge n+1$ one has $\\beta_m \\le \\beta_{n+1}$, again by step 2.1. Likewise $(\\beta_n, \\alpha_{n-1})$ meets no $I_m$ for $n \\ge 1$, and $(\\beta_0, 1]$ meets none. [step 2.1, L3]",
      "step": "3.2",
      "inputs": [
        "step 2.1",
        "L3"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-3-3",
      "claim": "The finitely many closed intervals $I_0,\\dots,I_{N-1}$ do not contain $x$, so each of the positive reals $|x-\\alpha_m|$ and $|x-\\beta_m|$ for $m<N$, together with $x - 2/\\iota(N+2)$, forms a nonempty finite set of positive reals; let $\\rho$ be its least element, which is positive by [L8]. [step 2.3, L8, L9, choose]",
      "step": "3.3",
      "inputs": [
        "step 2.3",
        "L8",
        "L9",
        "choose"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-4-1",
      "claim": "$G$ agrees with $\\Phi_n$ on $I_n$ and with the zero function off $\\bigcup_m I_m$; in particular $G(\\alpha_n) = G(\\beta_n) = 0$ and $G \\ge 0$ everywhere. [step 3.1, step 2.2, L9]",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "step 2.2",
        "L9"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-5-1",
      "claim": "**Differentiability at an interior point of a bump.** Let $x \\in (\\alpha_n,\\beta_n)$. The difference quotients of $G$ and of $\\Phi_n$ at $x$ agree on the punctured neighbourhood $0 < |y-x| < \\min\\{x-\\alpha_n,\\ \\beta_n-x\\}$ inside $[0,1]$, so by [L5] and step 2.2, $G$ is differentiable at $x$ with $G'(x) = \\Phi_n'(x)$. [step 2.2, step 4.1, L5, L6, L8]",
      "step": "5.1",
      "inputs": [
        "step 2.2",
        "step 4.1",
        "L5",
        "L6",
        "L8"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-5-2",
      "claim": "**Differentiability at a left endpoint $\\alpha_n$.** On the right, $G$ agrees with $\\Phi_n$ on $[\\alpha_n,\\beta_n]$ and $G(\\alpha_n) = \\Phi_n(\\alpha_n)$, so the right-hand limit of the difference quotient is $\\Phi_n'(\\alpha_n) = 0$ by [L5] and step 2.2. On the left, $G$ vanishes on $(\\beta_{n+1},\\alpha_n]$ by step 3.2 and step 4.1, so the quotient is identic",
      "step": "5.2",
      "inputs": [
        "step 2.2",
        "step 4.1",
        "step 3.2",
        "L4",
        "L5",
        "L6"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-5-3",
      "claim": "**Differentiability at a right endpoint $\\beta_n$.** Symmetrically: on the left $G$ agrees with $\\Phi_n$, giving limit $\\Phi_n'(\\beta_n) = 0$; on the right $G$ vanishes on $[\\beta_n,\\alpha_{n-1})$ when $n \\ge 1$ and on $[\\beta_0,1]$ when $n = 0$, by step 3.2, giving limit $0$. By [L4], $G'(\\beta_n) = 0$. [step 2.2, step 4.1, step 3.2, L4, L5, L6]",
      "step": "5.3",
      "inputs": [
        "step 2.2",
        "step 4.1",
        "step 3.2",
        "L4",
        "L5",
        "L6"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-5-4",
      "claim": "Then $G$ vanishes on $(x-\\rho,x+\\rho)\\cap[0,1]$, so its difference quotient at $x$ is identically $0$ there and $G'(x) = 0$ by [L5] and [L6]. [step 2.3, step 3.3, step 4.1, L5, L6]",
      "step": "5.4",
      "inputs": [
        "step 2.3",
        "step 3.3",
        "step 4.1",
        "L5",
        "L6"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-5-5",
      "claim": "**Differentiability at $0$.** For $y \\in (0,1]$: if $y \\notin \\bigcup_m I_m$ then $G(y)/y = 0$; and if $y \\in I_m$ then $0 \\le G(y) \\le c_m/16$ by step 1.2 and step 4.1 and $y \\ge \\alpha_m$, so $0 \\le G(y)/y \\le c_m/(16\\,\\alpha_m) = 1/\\bigl(16\\,\\iota(m+2)\\bigr)$. [step 1.2, step 4.1, L9]",
      "step": "5.5",
      "inputs": [
        "step 1.2",
        "step 4.1",
        "L9"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-6-1",
      "claim": "Given $\\varepsilon>0$, fix by [L3] a natural $N$ with $1/\\varepsilon < \\iota(N+2)$ and put $\\delta := \\alpha_N > 0$. If $0 < y < \\delta$ and $y \\in I_m$ then $\\alpha_m \\le y < \\alpha_N$, so $\\iota(N+2) < \\iota(m+2)$ by [L3], and step 5.5 gives $|G(y)/y| \\le 1/\\bigl(16\\,\\iota(m+2)\\bigr) < \\varepsilon$; otherwise $G(y)/y = 0$. [step 5.5, L3, L9, choose]",
      "step": "6.1",
      "inputs": [
        "step 5.5",
        "L3",
        "L9",
        "choose"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-6-2",
      "claim": "**$G'$ is unbounded.** Put $u_n := \\alpha_n + h_n/4$, an interior point of $I_n$; by step 5.1 and step 2.2, $G'(u_n) = (c_n/h_n)\\phi'(1/4) = \\iota(n+2)^{2}\\cdot\\tfrac{3}{16}$, using $c_n/h_n = \\iota(n+2)^{4}/\\iota(n+2)^{2} = \\iota(n+2)^{2}$. Given a real $M \\ge 0$, [L3] supplies $n$ with $\\tfrac{16}{3}M < \\iota(n+2) \\le \\iota(n+2)^{2}$, so $G'(u_n) > M$. [st",
      "step": "6.2",
      "inputs": [
        "step 1.1",
        "step 2.2",
        "step 5.1",
        "L3",
        "L9"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-7-1",
      "claim": "So the difference quotient of $G$ at $0$, which is $y \\mapsto G(y)/y$ on $(0,1]$, tends to $0$; hence $G$ is differentiable at $0$ with $G'(0) = 0$ by [L6]. [step 6.1, L6]",
      "step": "7.1",
      "inputs": [
        "step 6.1",
        "L6"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-8-1",
      "claim": "By steps 5.1, 5.2, 5.3, 5.4 and 7.1, $G$ is differentiable at every point of $[0,1]$: every $x$ is either $0$, or an interior point of some $I_n$, or an endpoint of some $I_n$, or a point of $(0,1]$ outside every $I_n$. [step 5.1, step 5.2, step 5.3, step 5.4, step 7.1, L9]",
      "step": "8.1",
      "inputs": [
        "step 5.1",
        "step 5.2",
        "step 5.3",
        "step 5.4",
        "step 7.1",
        "L9"
      ]
    },
    {
      "id": "cex-a-function-with-a-primitive-that-is-not-integrable-step-9-1",
      "claim": "Hence $G'$ is a function on $[0,1]$ that is not bounded, so it has no Darboux sums and is not Riemann integrable on $[0,1]$ by [L7]; the claim is false, and $\\int_0^1 G'$ is an undefined symbol, so [L10] gives nothing here. [step 8.1, step 6.2, L7, L10] ∎",
      "step": "9.1",
      "inputs": [
        "step 8.1",
        "step 6.2",
        "L7",
        "L10"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cex-a-function-with-a-primitive-that-is-not-integrable concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement includes the zero boundary, and step 1.1 treats or preserves that case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement includes the unit/first-index boundary, and step 1.1 treats or preserves that case."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement fixes the concrete interval, and step 1.1 uses that nondegenerate domain."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement specifies the closed or oriented interval convention; step 1.2 handles the endpoint data used by the argument."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.3 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of cex-a-function-with-a-primitive-that-is-not-integrable is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of cex-a-function-with-a-primitive-that-is-not-integrable is not a biconditional, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the published A2 contract; independent risk routing occurs after A3."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-chain-rule",
    "declared_target": "thm-chain-rule",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-two-sided-limit-iff-both-one-sided",
    "declared_target": "thm-two-sided-limit-iff-both-one-sided",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-one-sided-limits",
    "declared_target": "def-one-sided-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-limit-is-local",
    "declared_target": "lem-limit-is-local",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-darboux-sums",
    "declared_target": "def-darboux-sums",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-darboux-integral",
    "declared_target": "def-darboux-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-power-monotone",
    "declared_target": "lem-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-ftc-second-part",
    "declared_target": "thm-ftc-second-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
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

## Full exact-current text of every cited or declared item (26)

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

### `def-darboux-integral`

````markdown
---
id: def-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals of a bounded $f$ on $[a,b]$ as $\\sup_P L(f,P)$ and $\\inf_P U(f,P)$, Darboux integrability as their equality, and the notation $\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-sums, lem-refinement-inequalities, def-partition-and-refinement, def-bounded-set, def-complete-ordered-field, def-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-interval]
justified_by: []
aliases: [def-riemann-integrable, def-lower-and-upper-integral]
landmark: true
short: "Darboux integral $\\int_a^b f$"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Write $\mathcal{P}$ for the set of all partitions of
$[a,b]$ ([[def-partition-and-refinement]]) and put

$$\mathcal{L} \;:=\; \{\, L(f,P) \ : \ P \in \mathcal{P} \,\}, \qquad \mathcal{U} \;:=\; \{\, U(f,P) \ : \ P \in \mathcal{P} \,\}$$

for the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).

### Both extrema exist

**$\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$
for $k \ge 1$ is a partition of $[a,b]$, since $a < b$. So $\mathcal{L}$ and
$\mathcal{U}$ are nonempty.

**$\mathcal{L}$ is bounded above and $\mathcal{U}$ is bounded below.** Fix any
$Q \in \mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],
$L(f,P) \le U(f,Q)$ for every $P \in \mathcal{P}$, so $U(f,Q)$ is an upper bound
of $\mathcal{L}$; and $L(f,Q) \le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower
bound of $\mathcal{U}$.

Hence a nonempty set bounded above has a supremum
([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum
([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).
The **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real
numbers

$$\underline{\int_a^b} f \;:=\; \sup \mathcal{L} \;=\; \sup_{P} L(f,P), \qquad \overline{\int_a^b} f \;:=\; \inf \mathcal{U} \;=\; \inf_{P} U(f,P) .$$

### The lower integral never exceeds the upper one

$$\underline{\int_a^b} f \;\le\; \overline{\int_a^b} f .$$

Indeed, for each fixed $Q \in \mathcal{P}$ the number $U(f,Q)$ is an upper bound
of $\mathcal{L}$, so the least upper bound satisfies
$\underline{\int_a^b} f \le U(f,Q)$. As $Q$ was arbitrary, $\underline{\int_a^b}f$
is a lower bound of $\mathcal{U}$, and the greatest lower bound satisfies
$\underline{\int_a^b} f \le \overline{\int_a^b} f$ ([[def-infimum]]).

Moreover, for **every** partition $P$,

$$L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) ,$$

the outer inequalities because a member of a set is at most its supremum and at
least its infimum.

### Integrability

$f$ is **Darboux integrable on $[a,b]$**, and on this page simply
**integrable**, when

$$\underline{\int_a^b} f \;=\; \overline{\int_a^b} f ,$$

and then the common value is written

$$\int_a^b f \qquad \text{or} \qquad \int_a^b f(x)\,\mathrm{d}x ,$$

the **integral of $f$ over $[a,b]$**. It is a single well-determined real
number, being the common value of two numbers each of which is unique
([[lem-sup-unique]]). Without the displayed equality the symbol $\int_a^b f$ is
not defined and is never written.

**The inequality above is the whole difficulty.** By the previous paragraph
integrability is *never* a question of one integral exceeding the other, only of
the gap $\overline{\int_a^b} f - \underline{\int_a^b} f \ge 0$ being $0$; and by
[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be
found making $U(f,P) - L(f,P)$ small. Whether that is possible is settled
completely, in terms of the discontinuities of $f$, by
[[thm-lebesgue-criterion]].

**"Riemann integrable" means the same thing here.** The definition above is
Darboux's. Riemann's own definition, in terms of tagged partitions of small
mesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same
class of functions with the same integral by [[thm-darboux-equals-riemann]].
Until that theorem is proved the two phrases are kept apart; after it they are
used interchangeably, as they are throughout the literature.

## Remarks

- **The supremum is over all partitions, and nothing is selected.** Both
  $\mathcal{L}$ and $\mathcal{U}$ are sets determined by $f$ and $[a,b]$ alone,
  and $\sup$ and $\inf$ are canonical, so no choice principle is involved in
  forming either integral. Where a choice does enter on this page is recorded in
  [[rem-riemann-integral-choice-ledger]].

- **Why the lower integral is a supremum and not an infimum.** Refining a
  partition can only increase a lower sum and decrease an upper sum
  ([[lem-refinement-inequalities]]), so the lower sums push up towards the
  integral and the upper sums push down towards it. Taking $\inf \mathcal{L}$
  would return the sum over the coarsest partition and would carry no
  information about $f$ beyond its infimum on $[a,b]$.

- **A bounded $f$ always has both integrals; only their equality can fail.** The
  Dirichlet function on $[0,1]$ has lower integral $0$ and upper integral $1$
  ([[fs-bounded-implies-riemann-integrable]]), which is the standard witness that
  the definition above is not vacuous in either direction.
````

### `def-darboux-sums`

````markdown
---
id: def-darboux-sums
kind: definition
title: "For bounded $f$ on $[a,b]$ and a partition $P$: the infimum $m_i$ and supremum $M_i$ of $f$ on the $i$-th subinterval, and the lower and upper Darboux sums $L(f,P) = \\sum_i m_i \\Delta_i$ and $U(f,P) = \\sum_i M_i \\Delta_i$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partition-and-refinement, def-bounded-set, def-complete-ordered-field, def-ordered-field, def-infimum, thm-infimum-property, def-finite-sum, lem-finite-sum-laws, def-interval, lem-sup-unique, lem-sup-epsilon, lem-inf-epsilon, def-oscillation, def-extended-reals, lem-of-abs-value]
justified_by: []
aliases: [def-lower-and-upper-darboux-sum]
landmark: true
short: "Darboux sums $L(f,P)$, $U(f,P)$"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be **bounded**
([[def-bounded-set]]), so that there is a real $M \ge 0$ with $|f(x)| \le M$ for
every $x \in [a,b]$, and let $P = (n,t)$ be a partition of $[a,b]$ with
subintervals $I_i = [t_i, t_{i+1}]$ and lengths $\Delta_i = t_{i+1} - t_i$ for
$i < n$ ([[def-partition-and-refinement]]).

### The two extreme values on a subinterval

For $i < n$ put

$$m_i \;:=\; \inf f[I_i], \qquad M_i \;:=\; \sup f[I_i], \qquad f[I_i] \;=\; \{\, f(x) : x \in I_i \,\} .$$

**Both exist.** The set $f[I_i]$ is nonempty, because $t_i < t_{i+1}$ makes $I_i$
nonempty ([[def-interval]]), and it is bounded, because $|f(x)| \le M$ for every
$x$ ([[def-bounded-set]]). A nonempty set bounded above has a supremum
([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum
([[thm-infimum-property]], [[def-infimum]]); each is unique, so the notations
$\inf f[I_i]$ and $\sup f[I_i]$ name single real numbers ([[lem-sup-unique]]).

**They bracket the values, and each other.** For $x \in I_i$,

$$-M \;\le\; m_i \;\le\; f(x) \;\le\; M_i \;\le\; M ,$$

the outer inequalities because $-M$ is a lower bound and $M$ an upper bound of
$f[I_i]$, and the middle ones by the definitions of infimum and supremum. In
particular $m_i \le M_i$ and $M_i - m_i \le 2M$.

The dependence of $m_i$ and $M_i$ on $f$ and on $P$ is suppressed in the
notation, as is customary; where two partitions are in play the sums below carry
the partition and the extreme values are written out.

### The two Darboux sums

$$L(f,P) \;:=\; \sum_{i<n} m_i \,\Delta_i, \qquad U(f,P) \;:=\; \sum_{i<n} M_i \,\Delta_i ,$$

the finite sums of [[def-finite-sum]], indexed by $i \in \mathbb{N}$ with
$i < n$. Both are real numbers, being finite sums of reals, and

$$L(f,P) \;\le\; U(f,P) ,$$

by monotonicity of finite sums, clause 4 of [[lem-finite-sum-laws]], since
$m_i \Delta_i \le M_i \Delta_i$ for every $i < n$: multiplying $m_i \le M_i$ by
$\Delta_i > 0$ preserves the inequality ([[def-ordered-field]]).

### The gap on a subinterval is the oscillation there

For every $i < n$,

$$M_i - m_i \;=\; \omega_f(I_i) \;=\; \sup\{\, |f(x) - f(y)| \ : \ x, y \in I_i \,\} ,$$

the oscillation of $f$ on the set $I_i$ ([[def-oscillation]]). The supremum is a
real number here rather than an extended one, because $f$ is bounded
([[def-oscillation]], [[def-extended-reals]]). The identity is proved in two
inequalities.

*The oscillation is at most the gap.* For $x, y \in I_i$ both $f(x)$ and $f(y)$
lie in $[m_i, M_i]$, so $f(x) - f(y) \le M_i - m_i$ and
$f(y) - f(x) \le M_i - m_i$, whence $|f(x) - f(y)| \le M_i - m_i$
([[lem-of-abs-value]]). So $M_i - m_i$ is an upper bound of the set whose
supremum is $\omega_f(I_i)$.

*The gap is at most the oscillation.* Let $\varepsilon > 0$ be real. By the
$\varepsilon$-characterisations of the supremum and the infimum
([[lem-sup-epsilon]], [[lem-inf-epsilon]]) there are $x, y \in I_i$ with
$f(x) > M_i - \varepsilon/2$ and $f(y) < m_i + \varepsilon/2$; then

$$|f(x) - f(y)| \;\ge\; f(x) - f(y) \;>\; (M_i - m_i) - \varepsilon ,$$

so $\omega_f(I_i) > (M_i - m_i) - \varepsilon$. As $\varepsilon > 0$ was
arbitrary, $\omega_f(I_i) \ge M_i - m_i$: otherwise
$\varepsilon := (M_i - m_i) - \omega_f(I_i)$ would be positive and give
$\omega_f(I_i) > \omega_f(I_i)$.

This identity is what connects the Darboux machinery to the pointwise
oscillation of [[def-oscillation]], and it is the hinge of
[[thm-lebesgue-criterion]].

## Remarks

- **Boundedness is a hypothesis of the definition, not of the theorems.** Without
  it $f[I_i]$ may fail to have a supremum in $\mathbb{R}$ and $U(f,P)$ is not
  defined at all. Every statement on this page that mentions $L$ or $U$ therefore
  carries "bounded $f$" in its hypotheses, and none of them is a restriction that
  could be lifted: an unbounded function has no Darboux sums to compare.

- **Why the infimum and the supremum, and not a value of $f$.** Replacing $m_i$
  by $f(\xi_i)$ for a point $\xi_i \in I_i$ gives the Riemann sums of
  [[def-tagged-partition-and-riemann-sum]], which depend on a choice of points
  and are not extremal. The Darboux sums are canonical functions of $f$ and $P$
  alone, which is what makes the supremum and infimum over all partitions in
  [[def-darboux-integral]] well posed without any selection.

- **The empty sum does not occur.** A partition has $n \ge 1$
  ([[def-partition-and-refinement]]), so $L(f,P)$ and $U(f,P)$ are sums of at
  least one term. The first term is $m_0 \Delta_0$, over the subinterval
  $[a, t_1]$; the indexing starts at $i = 0$ throughout this page.
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

### `def-one-sided-limits`

````markdown
---
id: def-one-sided-limits
kind: definition
title: "The left and right limits of $f$ at $c$, as limits of the restrictions of $f$ to $A \\cap (-\\infty, c)$ and $A \\cap (c, \\infty)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-interval, lem-limit-is-local, lem-function-limit-unique, lem-of-abs-value]
justified_by: []
aliases: [def-left-limit, def-right-limit]
landmark: true
short: "one-sided limits"
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
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in
\mathbb{R}$. Put

$$A^{-} := A \cap (-\infty, c), \qquad A^{+} := A \cap (c, \infty)$$

([[def-interval]]), and write $f^{-} := f|_{A^{-}}$ and $f^{+} := f|_{A^{+}}$
for the restrictions of $f$ to those sets.

**Right limit.** Suppose $c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).
For $L \in \mathbb{R}$ we write

$$\lim_{x \to c^{+}} f(x) = L \quad :\Longleftrightarrow \quad \lim_{x \to c} f^{+}(x) = L$$

in the sense of [[def-function-limit]]. Written out: for every real
$\varepsilon > 0$ there is a real $\delta > 0$ such that

$$|f(x) - L| < \varepsilon \qquad \text{for every } x \in A \text{ with } c < x < c + \delta .$$

**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \in \mathbb{R}$
we write $\lim_{x \to c^{-}} f(x) = L$ when $\lim_{x \to c} f^{-}(x) = L$; written
out, for every real $\varepsilon > 0$ there is a real $\delta > 0$ with
$|f(x) - L| < \varepsilon$ for every $x \in A$ with $c - \delta < x < c$.

**The written-out forms agree with the definitions.** For $x \in A^{+}$ the two
conditions $0 < |x - c| < \delta$ and $c < x < c + \delta$ are the same: $x > c$
gives $x - c > 0$, so $|x - c| = x - c$ and $0 < |x - c| < \delta$ reads
$0 < x - c < \delta$ ([[lem-of-abs-value]]). Symmetrically on the left, where
$x < c$ gives $|x - c| = c - x$.

**Well-posedness is inherited, not reproved.** A one-sided limit *is* a limit,
namely the limit of a restriction, so:

- **Uniqueness.** At most one $L$ can occur, by [[lem-function-limit-unique]]
  applied to $f^{+}$ on the domain $A^{+}$ (respectively to $f^{-}$ on
  $A^{-}$), which is legitimate exactly because $c$ was required to be a limit
  point of that set. This is what makes the notation $\lim_{x \to c^{+}} f(x)$
  denote a single real.
- **Locality and restriction.** Both claims of [[lem-limit-is-local]] apply
  verbatim to $f^{+}$ and $f^{-}$.

**When the symbols are defined.** If $c$ is not a limit point of $A^{+}$ — for
instance if $A$ contains no point to the right of $c$, or only points bounded
away from $c$ on that side — then $\lim_{x \to c^{+}} f(x)$ is **not defined**
here, for the reason given in [[def-function-limit]]: the
$\varepsilon$-$\delta$ condition would be satisfied vacuously by every real at
once. The same applies on the left.

## Remarks

- **Neither one-sided limit requires $c \in A$, and neither looks at $f(c)$.**
  Both properties are inherited from [[def-function-limit]], since $c \notin
  A^{-} \cup A^{+}$: the point $c$ belongs to neither $(-\infty, c)$ nor
  $(c, \infty)$.

- **The two one-sided limits and the two-sided limit.** When $c$ is a limit
  point of both $A^{-}$ and $A^{+}$, the two-sided limit exists exactly when
  both one-sided limits exist and agree, and then all three coincide:
  [[thm-two-sided-limit-iff-both-one-sided]]. When $c$ is a limit point of only
  one of the two sets, that one-sided limit and the two-sided limit are the same
  condition, again by claim 2 of [[lem-limit-is-local]] together with the
  observation that $A$ and that one side have the same points in a small enough
  punctured neighbourhood of $c$.

- **Notation.** Some texts write $f(c+)$ and $f(c-)$ for these values. This
  library writes only $\lim_{x \to c^{+}} f(x)$ and $\lim_{x \to c^{-}} f(x)$,
  because the shorter notation looks like an evaluation of $f$ and these
  quantities are not values of $f$: they are defined without reference to
  $f(c)$, which may not even exist.
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

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
````

### `lem-limit-is-local`

````markdown
---
id: lem-limit-is-local
kind: lemma
title: "The limit at $c$ depends only on the restriction of $f$ to a punctured neighbourhood of $c$, and passes to any subset of the domain having $c$ as a limit point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, def-neighbourhood-r, def-limit-point-r, lem-function-limit-unique, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [lem-locality-of-function-limits]
landmark: false
short: "locality and restriction"
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
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $c$ be a limit point of $A$
([[def-limit-point-r]]).

1. **Locality.** Let $f, g : A \to \mathbb{R}$ and $L \in \mathbb{R}$, and
   suppose there is a real $\eta > 0$ with $f(x) = g(x)$ for every $x \in A$
   satisfying $0 < |x - c| < \eta$. Then
   $$\lim_{x \to c} f(x) = L \iff \lim_{x \to c} g(x) = L$$
   ([[def-function-limit]]).

2. **Restriction.** Let $B \subseteq A$ with $c$ a limit point of $B$, let
   $f : A \to \mathbb{R}$ and suppose $\lim_{x \to c} f(x) = L$. Then $c$ is a
   limit point of $A$ as well, and $\lim_{x \to c} f|_B(x) = L$, where
   $f|_B : B \to \mathbb{R}$ is the restriction of $f$.

So the limit at $c$ sees only the values of $f$ on an arbitrarily small
punctured neighbourhood of $c$, and it survives shrinking the domain, provided
the smaller domain still accumulates at $c$. Together with
[[lem-function-limit-unique]] this is what makes the phrase *the* limit at $c$ a
local notion.

**The converse of claim 2 is false in general**: a restriction may have a limit
where the function has none, as the one-sided limits of the sign function on the
companion page show.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ and a limit point $c$ of $A$; for claim 1 functions $f, g : A \to \mathbb{R}$, a real $L$ and a real $\eta > 0$ with $f(x) = g(x)$ for every $x \in A$ satisfying $0 < |x - c| < \eta$; for claim 2 a subset $B \subseteq A$ having $c$ as a limit point, a function $f : A \to \mathbb{R}$ and a real $L$ with $\lim_{x \to c} f(x) = L$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Limit point: $c$ is a limit point of a set $S$ when for every real $\delta > 0$ there is $x \in S$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Order arithmetic: of two positive reals the smaller is positive, the order being total; and $u < v \le w$ gives $u < w$ ([[def-ordered-field]]).

[L4] Absolute value ([[lem-of-abs-value]]); and uniqueness of the limit at a limit point ([[lem-function-limit-unique]]), which is what makes the phrase "the limit" in the statement denote.

## Proof

**Proof technique:** direct.

1.1 For claim 1, assume $\lim_{x \to c} f(x) = L$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

1.2 For claim 2, $B \subseteq A$ and $c$ is a limit point of $B$; hence $c$ is a limit point of $A$, since for every real $\delta > 0$ a point $x \in B$ with $0 < |x - c| < \delta$ is also a point of $A$ with $0 < |x - c| < \delta$. [L2]

1.3 For claim 2, assume $\lim_{x \to c} f(x) = L$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

2.1 By [L1] fix a real $\delta_0 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_0$ satisfies $|f(x) - L| < \varepsilon$, and put $\delta$ to be the smaller of $\delta_0$ and $\eta$, so $\delta > 0$. [step 1.1, L1, L3, choose]

2.2 By [L1] fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$. [step 1.3, L1, choose]

3.1 Every $x \in A$ with $0 < |x - c| < \delta$ satisfies both $0 < |x - c| < \delta_0$ and $0 < |x - c| < \eta$, so $g(x) = f(x)$ and $|g(x) - L| = |f(x) - L| < \varepsilon$; as $\varepsilon > 0$ was arbitrary, $\lim_{x \to c} g(x) = L$. [step 2.1, L1, L3, L4]

3.2 Every $x \in B$ with $0 < |x - c| < \delta$ lies in $A$ and satisfies $0 < |x - c| < \delta$, so $f|_B(x) = f(x)$ and therefore $|f(x) - L| < \varepsilon$; as $\varepsilon > 0$ was arbitrary, and $c$ is a limit point of $B$, $\lim_{x \to c} f|_B(x) = L$. [step 2.2, L1, L4]

4.1 The hypothesis of claim 1 is symmetric in $f$ and $g$, so interchanging their roles in steps 1.1, 2.1 and 3.1 gives the implication in the other direction, and claim 1 is proved; claim 2 is steps 1.2 and 3.2. [step 1.2, step 3.1, step 3.2] ∎

## Remarks

- **What claim 1 is used for.** It is the licence to modify a function outside a punctured neighbourhood of $c$, or at $c$ itself, without changing the limit; the change at $c$ alone is already invisible to [[def-function-limit]], since the condition $0 < |x - c|$ excludes that point.

- **What claim 2 is used for.** It is the step that lets a statement proved on $A$ be transported to a smaller domain: the one-sided limits of [[def-one-sided-limits]] are exactly limits of restrictions, and the quotient case of [[thm-algebra-of-function-limits]] is proved on the smaller domain where the denominator does not vanish.

- **Both claims are choice free.** Only the $\varepsilon$-$\delta$ definition is used; no sequence is constructed anywhere in the proof.
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

### `lem-power-monotone`

````markdown
---
id: lem-power-monotone
kind: lemma
title: "Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, cor-of-one-positive, lem-of-sign-rules, prop-of-multiply-inequalities, thm-induction-principle, def-ordered-field, def-nat-order, lem-nat-discrete]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

## Facts & Assumptions

**Given:** An ordered field $\mathbb{R}$, elements $a, b \in \mathbb{R}$ and naturals $m, n$.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Sign and scaling rules: a product of positives is positive, and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-sign-rules]]); the positives are closed under addition and satisfy trichotomy ([[def-ordered-field]]); and $1 > 0$ ([[cor-of-one-positive]], which is where that fact is proved: neither of the two items just named states it).

[L4] Multiplying inequalities of nonnegatives: if $0 \le x \le y$ and $0 \le u \le v$ then $xu \le yv$, and if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

[L5] Trichotomy and transitivity of the order: for $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds, and $<$ and $\le$ are transitive ([[def-ordered-field]]).

[L6] The order on the exponents: $m \le n$ holds exactly when $n = m + k$ for some natural $k$ ([[def-nat-order]]), and $m < n$ holds exactly when $m + 1 \le n$ ([[lem-nat-discrete]]); combining the two, $m < n$ holds exactly when $n = m + d$ for some natural $d \ge 1$.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: $a^0 = 1 > 0$, so claim 1 holds; claim 2 is vacuous at $n = 0$; $a^0 = 1 \ge 1$ and $a^0 = 1 \le 1$, so claim 3 holds at $n = 0$ in the nonstrict readings. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume, for all $a, b$: $a \ge 0 \Rightarrow a^n \ge 0$ and $a > 0 \Rightarrow a^n > 0$; and $0 \le a \le b \Rightarrow a^n \le b^n$, with $a^n < b^n$ when moreover $a < b$ and $n \ge 1$. [ih]

2.1 Signs at $n+1$: if $a \ge 0$ then $a^{n+1} = a^n a$ is a product of two nonnegatives, hence $\ge 0$, and if $a > 0$ it is a product of two positives, hence $> 0$. [step 1.2, L1, L3, L4]

3.1 Strict monotonicity at $n+1$, assuming $0 \le a < b$: then $b > 0$, and the hypothesis gives $0 \le a^n \le b^n$ with $b^n > 0$ by step 2.1; if $a = 0$ then $a^{n+1} = 0 < b^{n+1}$ since $b^{n+1} = b^n b > 0$; if $a > 0$ then $a^{n+1} = a^n a \le b^n a$ by multiplying $a^n \le b^n$ by $a > 0$, and $b^n a < b^n b$ by multiplying $a < b$ by $b^n > 0$, so $a^{n+1} < b^{n+1}$ by transitivity; and in either case $0 \le a \le b$ gives $a^{n+1} \le b^{n+1}$ by [L4]. [step 1.2, step 2.1, L1, L3, L4, L5]

4.1 By the induction principle, claims 1 and 2 hold for every $n$, in the form: $a \ge 0 \Rightarrow a^n \ge 0$; $a > 0 \Rightarrow a^n > 0$; and $0 \le a < b$ with $n \ge 1$ gives $a^n < b^n$. [step 1.1, step 2.1, step 3.1, L2]

5.1 The equivalences of claim 2 follow by trichotomy: for $a, b \ge 0$ and $n \ge 1$, if $a^n < b^n$ then neither $a = b$ (which would give $a^n = b^n$) nor $b < a$ (which would give $b^n < a^n$) is possible, so $a < b$; the $\le$ form is the negation of the $<$ form with $a$ and $b$ exchanged; and injectivity is the case $a^n = b^n$, where $a < b$ and $b < a$ are both excluded. [step 4.1, L5]

5.2 Claim 4: for $a > 1$ we have $a^{n+1} = a^n a > a^n \cdot 1 = a^n$, multiplying $1 < a$ by $a^n > 0$, so $a^n$ is strictly increasing in $n$, and hence $a^m < a^n$ whenever $m < n$: writing $n = m + d$ with $d \ge 1$ and inducting on $d$, the case $d = 1$ is that one-step inequality and the passage from $d$ to $d+1$ is $a^m < a^{m+d} < a^{m+d+1}$ by transitivity; for $a = 1$ an induction gives $1^n = 1$ for all $n$; and for $0 < a < 1$ we have $a^{n+1} = a^n a < a^n \cdot 1 = a^n$, so $a^n$ is strictly decreasing in $n$ and the same induction on the gap $d$ gives $a^m > a^n$ for $m < n$. [step 4.1, L1, L2, L3, L5, L6]

6.1 Claim 3: if $a \ge 1$ and $n \ge 1$ then applying step 4.1 to $1 \le a$ gives $1 = 1^n \le a^n$, and $a^n = a^{n-1} a \ge 1 \cdot a = a$ since $a^{n-1} \ge 1$ by the same argument and $a > 0$; if $a > 1$ the same computation gives $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1^n = 1$. [step 4.1, step 5.1, L1, L3, L4]

7.1 All four claims are proved: signs and strict monotonicity in the base by the induction of steps 1.1 and 3.1, the order equivalences and injectivity by trichotomy, and the comparisons with the base and the behaviour in the exponent by steps 6.1 and 5.2. [step 4.1, step 5.1, step 6.1, step 5.2, discharge-induction] ∎
````

### `rem-integral-conventions-and-scope`

````markdown
---
id: rem-integral-conventions-and-scope
kind: remark
title: "Conventions of this page, and which sharpenings of the integral are taken up later in the reading order"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-oriented-integral, def-darboux-integral, thm-darboux-equals-riemann, thm-ftc-first-part, thm-ftc-second-part, thm-substitution, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-integral-test-for-series, thm-second-mean-value-theorem-for-integrals, def-the-integral-function, thm-additivity-over-subintervals]
external_refs: [rem-ftc-absolutely-continuous, rem-dominated-convergence-theorem]
forward_refs: [cex-spikes-with-integral-one-converging-pointwise-to-zero, cex-an-integrable-function-with-no-primitive, cex-a-function-with-a-primitive-that-is-not-integrable]
justified_by: []
aliases: []
landmark: false
short: "conventions and scope of this page"
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
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
pipeline_run: null
---

This item is the ledger of the page: what "integrable" means here, what the
orientation convention costs, what the page spends in choice, and which
sharpenings of the integral belong to later pages rather than to this one. It
establishes nothing and is cited by nothing.

## 1. One integral, under two names

"Integrable" on this page means **Darboux integrable** in the sense of
[[def-darboux-integral]], and $\int_a^b f$ is the common value of the lower and
upper Darboux integrals. By [[thm-darboux-equals-riemann]] that is the same class
of functions with the same value as Riemann's own definition by tagged partitions
of small mesh, so the two words are used interchangeably, as they are in the
literature. No other integral appears anywhere on this page or its companion.

## 2. The orientation convention, and the statements whose form depends on it

[[def-oriented-integral]] extends the notation by $\int_u^u f := 0$ and
$\int_u^v f := -\int_v^u f$ for $u > v$. It is notation, not a new integral: the
published definition is stated under the standing hypothesis $a < b$ and simply
says nothing outside it.

Several statements on this page take their shape from that convention; three are worth naming, and no claim is made that they are the only ones.

- **Additivity holds for every arrangement of three points.** Claim 3 of
  [[thm-additivity-over-subintervals]] is $\int_u^v f + \int_v^w f = \int_u^w f$
  with no ordering assumed, and it is what makes
  [[def-the-integral-function]]'s identity $F(y)-F(x) = \int_x^y f$ available in
  either order.
- **Substitution keeps the limits in the order the map produces them.**
  [[thm-substitution]] writes $\int_{\varphi(c)}^{\varphi(d)} f$ without assuming
  $\varphi$ monotone or injective, and $\varphi(d) < \varphi(c)$ is allowed.
- **One inequality is not orientation-invariant, and that is a trap.** The
  estimate $\bigl|\int_u^v f\bigr| \le \int_u^v |f|$ of
  [[cor-integrability-of-absolute-values-products-and-lattice-operations]] is
  guaranteed only for $u \le v$; at $u > v$ its right-hand side is $\le 0$ while
  its left-hand side is $\ge 0$. The form valid
  for every pair is $\bigl|\int_u^v f\bigr| \le \bigl|\int_u^v |f|\,\bigr|$, and
  that item states both.

## 3. What the page spends in choice

**Nothing on this page introduces a new use of a choice principle.** Every step
that instantiates an existential statement does so finitely many times, which is
ordinary first-order reasoning. The one place where a reader might expect a
selection is [[thm-ftc-second-part]]: the classical proof picks a mean-value
point $\xi_i$ in each subinterval of a partition and assembles a Riemann sum, and
the proof given here does not, deriving instead the per-index inequality
$m_i\Delta_i \le G(t_{i+1})-G(t_i) \le M_i\Delta_i$ and summing it. The same
discipline is followed in [[thm-second-mean-value-theorem-for-integrals]], where
the approximating sums are built from the values of the integral function at the
partition points and no tags are chosen.

Choice does enter through published items that name their own cost, and those
costs are inherited unchanged, not added to: [[thm-heine-cantor-r]] spends
countable choice once, and every item here that rests on
[[thm-continuous-implies-integrable]] or on
[[thm-composition-with-a-continuous-function]] inherits that single use.
[[thm-lebesgue-criterion]] spends countable choice once in the half that goes
from integrability to the discontinuity set being null, and the companion page
uses that half; that use too is inherited and not new. The choice ledger of the
previous page, [[rem-riemann-integral-choice-ledger]], records the costs of the
published items themselves.

## 4. Index conventions

$\mathbb{N}$ contains $0$; a sequence is a function on $\mathbb{N}$; and a
partition of $[a,b]$ is indexed from $i = 0$, its first subinterval being
$[t_0,t_1]$. Consequently [[thm-integral-test-for-series]] is stated with both
the sum and the integral beginning at $0$, and its bracket carries the term
$f(0)$; the classical form beginning at $1$ is a statement about a tail, and this
page does not silently substitute one for the other. A natural number multiplying
or dividing a real always stands for its canonical natural.

## 5. What is taken up later in the reading order

Stated as reading order, and as no claim at all about what this library
currently proves.

- **Higher derivatives, and Taylor's theorem with the integral remainder.** The
  integral remainder is an application of [[thm-integration-by-parts]], but it
  needs derivatives of order $n$, which are introduced on the page of the
  analysis track devoted to Darboux's theorem, l'Hopital's rule and Taylor
  expansion. The scaffold for this build records that it belongs there, next to
  the Lagrange and Cauchy forms, and it is deliberately absent here; that is a
  statement about where the plan puts it, not about anything the library has
  proved.
- **Bounded variation and the Riemann-Stieltjes integral.** The integrator
  $\mathrm{d}\alpha$ generalises everything on this page, and the sharpened
  second mean value theorem belongs with it. That is a later page of the same
  track, and it is not built.
- **Improper integrals.** $\int_0^{\infty} f$ is not defined anywhere in this
  library at this point in the reading order, which is why
  [[thm-integral-test-for-series]] concludes with the boundedness of the sequence
  $\bigl(\int_0^N f\bigr)_N$ instead. Identifying the two is what that later
  page is for.
- **Interchanging a limit with an integral.** Pointwise convergence licenses
  nothing: the companion page's
  [[cex-spikes-with-integral-one-converging-pointwise-to-zero]] exhibits
  continuous $f_n \to 0$ pointwise on $[0,1]$ with $\int_0^1 f_n = 1$ for every
  $n$. What repairs it — uniform convergence, or a domination hypothesis — is not
  proved on this page and nothing here asserts any version of it.

## 6. Two results a reader will want next, which this library records but does not prove

Both are recorded elsewhere as results the library does **not** establish, and
they are mentioned here for orientation only; nothing on this page or its
companion rests on either.

- [[rem-ftc-absolutely-continuous]] — the sharp form of the fundamental theorem,
  in which the class of functions $G$ with $\int_a^b G' = G(b)-G(a)$ is
  identified exactly. The two counterexamples on the companion page,
  [[cex-an-integrable-function-with-no-primitive]] and
  [[cex-a-function-with-a-primitive-that-is-not-integrable]], are precisely the
  two ways the naive form fails, and that sharp form is the answer.
- [[rem-dominated-convergence-theorem]] — the theorem that licenses interchanging
  a limit with an integral under a domination hypothesis, and the natural sequel
  to the spike counterexample above.
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

### `thm-algebra-of-derivatives`

````markdown
---
id: thm-algebra-of-derivatives
kind: theorem
title: "Sums, scalar multiples, products and quotients: $(f+g)'(c) = f'(c) + g'(c)$, $(\\alpha f)'(c) = \\alpha f'(c)$, $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$, and $(f/g)'(c) = \\bigl(f'(c)g(c) - f(c)g'(c)\\bigr)/g(c)^{2}$ when $g(c) \\ne 0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, def-function-limit, def-limit-point-r, lem-sign-preservation-near-a-limit, def-integer-power, lem-of-no-zero-divisors]
justified_by: []
aliases: [thm-differentiation-rules, thm-product-rule, thm-quotient-rule]
landmark: true
short: "algebra of derivatives"
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
    - title: "Product rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_rule"
    - title: "Quotient rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.3)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c \in A$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ be differentiable at $c$
([[def-derivative]]) and let $\alpha \in \mathbb{R}$. Then:

1. $f + g$ is differentiable at $c$ and $(f+g)'(c) = f'(c) + g'(c)$;
2. $\alpha f$ is differentiable at $c$ and $(\alpha f)'(c) = \alpha f'(c)$;
3. $fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is differentiable
   at $c$ as a function on $A_0$, and
   $$\bigl((f/g)|_{A_0}\bigr)'(c) \;=\; \frac{f'(c)\,g(c) - f(c)\,g'(c)}{g(c)^{2}} .$$

Each claim asserts two things: that the derivative on the left exists, and that
it has the stated value. Both are proved.

**Why claim 4 is stated on $A_0$.** The function $f/g$ is not defined where $g$
vanishes, and $g$ may vanish at points of $A$ far from $c$; restricting to $A_0$
is forced. That the restriction still has $c$ as a limit point, so that a
derivative there means anything at all, is not free either, and it is the last
claim of [[lem-sign-preservation-near-a-limit]] applied to $g$. The hypothesis
is $g(c) \ne 0$, not "$g$ vanishes nowhere".

**Everything is proved through
[[thm-caratheodory-characterisation]].** No difference quotient is estimated and
no limit theorem beyond continuity is used, so no choice principle is spent.
The four identities are four algebraic rearrangements of an increment, each
followed by a reading of [[thm-algebra-of-continuous-functions]].

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a point $c \in A$ that is a limit point of $A$, functions $f, g : A \to \mathbb{R}$ differentiable at $c$, and a real $\alpha$; for claim 4 also the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$ ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for a set $B \subseteq \mathbb{R}$, a point $p \in B$ that is a limit point of $B$ and a function $h : B \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : B \to \mathbb{R}$, continuous at $p$, with $h(x) - h(p) = \eta(x)(x - p)$ for every $x \in B$, and then $\eta(p) = h'(p)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point are continuous there (claim 1); every constant function and the identity are continuous everywhere on the domain (claim 5); and if $u, v$ are continuous at a point $p$ of their common domain $D$ with $v(p) \ne 0$, then $p$ lies in $D_0 := \{x \in D : v(x) \ne 0\}$ and $(u/v)|_{D_0}$ is continuous at $p$ as a function on $D_0$ (claim 4).

[L3] Continuity passes to a subset of the domain: if $B \subseteq A$, if $p \in B$ and if $\psi : A \to \mathbb{R}$ is continuous at $p$, then $\psi|_B$ is continuous at $p$, the condition on the restriction quantifying over fewer points ([[def-continuity-real]]).

[L4] A function differentiable at $c$ is continuous at $c$ ([[cor-differentiable-implies-continuous]]); in particular $g$ is.

[L5] At a limit point $c$ of $A$, continuity of $g$ at $c$ says exactly that $\lim_{x \to c} g(x)$ exists and equals $g(c)$ ([[def-continuity-real]], clause 1, [[def-function-limit]]).

[L6] Sign preservation ([[lem-sign-preservation-near-a-limit]]): if $c$ is a limit point of $A$ and $\lim_{x \to c} g(x)$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{x \in A : g(x) \ne 0\}$.

[L7] A product of two nonzero reals is nonzero ([[lem-of-no-zero-divisors]]), and $g(c)^{2} = g(c)\,g(c)$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applied to $f$ and to $g$ on $A$ at $c$, fix $\varphi, \psi : A \to \mathbb{R}$, both continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ and $g(x) - g(c) = \psi(x)(x - c)$ for every $x \in A$, and with $\varphi(c) = f'(c)$ and $\psi(c) = g'(c)$. [L1, choose]

1.2 Assume $g(c) \ne 0$. Then $c \in A_0$ by the definition of $A_0$; $g$ is continuous at $c$ by [L4], so $\lim_{x \to c} g(x) = g(c) \ne 0$ by [L5]; and therefore $c$ is a limit point of $A_0$ by [L6]. [L4, L5, L6]

2.1 **Sum.** For every $x \in A$, $(f+g)(x) - (f+g)(c) = \bigl(f(x)-f(c)\bigr) + \bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x) + \psi(x)\bigr)(x-c)$. The function $\varphi + \psi$ is continuous at $c$ by [L2], and $(\varphi+\psi)(c) = f'(c) + g'(c)$. So [L1] gives claim 1. [step 1.1, L1, L2]

2.2 **Scalar multiple.** For every $x \in A$, $(\alpha f)(x) - (\alpha f)(c) = \alpha\bigl(f(x)-f(c)\bigr) = \bigl(\alpha\varphi(x)\bigr)(x-c)$. The function $\alpha\varphi$ is continuous at $c$ by [L2], with value $\alpha f'(c)$ there. So [L1] gives claim 2. [step 1.1, L1, L2]

2.3 **Product.** For every $x \in A$, $f(x)g(x) - f(c)g(c) = \bigl(f(x)-f(c)\bigr)g(x) + f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(x) + f(c)\psi(x)\bigr)(x-c)$. Put $\chi := \varphi\,g + f(c)\,\psi$; it is continuous at $c$ by [L2], since $\varphi$, $\psi$ and (by [L4]) $g$ are, and constants are; and $\chi(c) = \varphi(c)g(c) + f(c)\psi(c) = f'(c)g(c) + f(c)g'(c)$. So [L1] gives claim 3. [step 1.1, L1, L2, L4]

2.4 **Quotient, the rearrangement.** Assume $g(c) \ne 0$ and let $x \in A_0$, so $g(x) \ne 0$ and $g(c) \ne 0$. Then $f(x)/g(x) - f(c)/g(c) = \bigl(f(x)g(c) - f(c)g(x)\bigr)/\bigl(g(x)g(c)\bigr)$, and $f(x)g(c) - f(c)g(x) = \bigl(f(x)-f(c)\bigr)g(c) - f(c)\bigl(g(x)-g(c)\bigr) = \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)(x-c)$. So, defining $\theta : A_0 \to \mathbb{R}$ by $\theta(x) := \bigl(\varphi(x)g(c) - f(c)\psi(x)\bigr)/\bigl(g(x)g(c)\bigr)$, one has $(f/g)|_{A_0}(x) - (f/g)|_{A_0}(c) = \theta(x)(x-c)$ for every $x \in A_0$. [step 1.1, L1, L7]

2.5 **Quotient, continuity of the factor.** Assume $g(c) \ne 0$. The restrictions of $\varphi$, $\psi$ and $g$ to $A_0$ are continuous at $c \in A_0$ by [L3] and [L4], so by [L2] the numerator $u(x) := \varphi(x)g(c) - f(c)\psi(x)$ and the denominator $v(x) := g(x)g(c)$ are continuous at $c$ as functions on $A_0$. By [L7] the denominator vanishes at no point of $A_0$, so $\{x \in A_0 : v(x) \ne 0\} = A_0$, and $v(c) = g(c)^{2} \ne 0$; hence claim 4 of [L2] gives that $\theta = (u/v)|_{A_0}$ is continuous at $c$, with $\theta(c) = \bigl(\varphi(c)g(c) - f(c)\psi(c)\bigr)/g(c)^{2} = \bigl(f'(c)g(c) - f(c)g'(c)\bigr)/g(c)^{2}$. [step 1.1, step 1.2, L2, L3, L4, L7]

3.1 **Quotient, conclusion.** Assume $g(c) \ne 0$. By step 1.2 the point $c$ lies in $A_0$ and is a limit point of $A_0$; by steps 2.4 and 2.5 the function $\theta : A_0 \to \mathbb{R}$ is continuous at $c$ and factors the increment of $(f/g)|_{A_0}$. So [L1], applied on the domain $A_0$ at the point $c$, gives that $(f/g)|_{A_0}$ is differentiable at $c$ with derivative $\theta(c)$: claim 4. [step 1.2, step 2.4, step 2.5, L1]

4.1 Claims 1 to 4 are proved, by steps 2.1, 2.2, 2.3 and 3.1 respectively, each by exhibiting the Carathéodory factor of the new function and reading its continuity at $c$ off the algebra of continuous functions. [step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **The product rearrangement in one line.** The identity $fg - f(c)g(c) = (f - f(c))\,g + f(c)\,(g - g(c))$ splits the increment of a product into two increments, one multiplied by $g$ and one by a constant. It is the same identity that carries the product case of [[thm-algebra-of-function-limits]], read at the level of increments rather than of $\varepsilon$; here the factor $g$ has to be continuous at $c$ rather than merely bounded near it, and [[cor-differentiable-implies-continuous]] is what supplies that.

- **The reciprocal is the case $f \equiv 1$.** Claim 4 then reads $\bigl((1/g)|_{A_0}\bigr)'(c) = -g'(c)/g(c)^{2}$, since $f'(c) = 0$ for a constant $f$; nothing separate has to be proved, and the derivative of a negative integer power on this page is obtained exactly this way.

- **Two hypotheses that look removable and are not.** In claim 4 the hypothesis $g(c) \ne 0$ cannot be weakened to "$g$ is nonzero somewhere near $c$", because $c$ itself must lie in the smaller domain for a derivative there to be a statement about $c$; and the conclusion is about $(f/g)|_{A_0}$, not about any extension of it to $A$, since no such extension is canonical.
````

### `thm-chain-rule`

````markdown
---
id: thm-chain-rule
kind: theorem
title: "The chain rule, in one line from Carathéodory: if $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $f \\circ g$ is differentiable at $c$ with $(f \\circ g)'(c) = f'(g(c))\\,g'(c)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, thm-composition-of-continuous-functions, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
short: "the chain rule"
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
    - title: "Chain rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Chain_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.5)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g[A] \subseteq B$ and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c \in A$ be a limit point of
$A$ ([[def-limit-point-r]]) at which $g$ is differentiable
([[def-derivative]]), put $b := g(c)$, and suppose $b$ is a limit point of $B$
at which $f$ is differentiable. Then $f \circ g$ is differentiable at $c$ and

$$(f \circ g)'(c) \;=\; f'\bigl(g(c)\bigr)\,g'(c) .$$

**Both limit-point hypotheses are needed, and neither is automatic.** That $c$
is a limit point of $A$ is what makes $g'(c)$ and $(f \circ g)'(c)$ defined
symbols; that $b = g(c)$ is a limit point of $B$ is what makes $f'(b)$ one.
Nothing forces the second: $g$ may be differentiable at $c$ and send $c$ to an
isolated point of $B$, and there $f'(b)$ is not defined and the formula asserts
nothing.

**No case analysis appears anywhere.** The naive difference-quotient proof
writes $\frac{f(g(x)) - f(g(c))}{g(x) - g(c)} \cdot \frac{g(x) - g(c)}{x - c}$
and then has to say what happens where $g(x) = g(c)$, which may occur at points
arbitrarily close to $c$. Carathéodory's factorisation never divides by the
inner increment, so the difficulty does not arise.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g[A] \subseteq B$ and $f : B \to \mathbb{R}$, a point $c \in A$ that is a limit point of $A$ at which $g$ is differentiable, and the point $b := g(c) \in B$, a limit point of $B$ at which $f$ is differentiable ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for $D \subseteq \mathbb{R}$, a point $p \in D$ that is a limit point of $D$ and $h : D \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : D \to \mathbb{R}$, continuous at $p$, with $h(y) - h(p) = \eta(y)(y - p)$ for every $y \in D$, and then $\eta(p) = h'(p)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]], claim 1): a product of two functions continuous at a point of their common domain is continuous there.

[L3] Composition of continuous functions ([[thm-composition-of-continuous-functions]]): if $g : A \to \mathbb{R}$ has $g[A] \subseteq B$ and is continuous at $c \in A$, and if $\eta : B \to \mathbb{R}$ is continuous at $g(c)$, then $\eta \circ g$ is continuous at $c$ ([[def-continuity-real]]).

[L4] A function differentiable at a point is continuous there ([[cor-differentiable-implies-continuous]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applied to $g$ on $A$ at $c$, fix $\psi : A \to \mathbb{R}$, continuous at $c$, with $g(x) - g(c) = \psi(x)(x - c)$ for every $x \in A$ and $\psi(c) = g'(c)$. [L1, choose]

1.2 By [L1], applied to $f$ on $B$ at $b$, fix $\varphi : B \to \mathbb{R}$, continuous at $b$, with $f(y) - f(b) = \varphi(y)(y - b)$ for every $y \in B$ and $\varphi(b) = f'(b)$. [L1, choose]

2.1 **The factorisation.** Let $x \in A$. Then $g(x) \in B$, so taking $y := g(x)$ in step 1.2 gives $f(g(x)) - f(b) = \varphi(g(x))\bigl(g(x) - b\bigr)$, and $g(x) - b = g(x) - g(c) = \psi(x)(x-c)$ by step 1.1. Since $(f \circ g)(c) = f(g(c)) = f(b)$, this reads $(f \circ g)(x) - (f \circ g)(c) = \chi(x)(x - c)$ for every $x \in A$, where $\chi : A \to \mathbb{R}$ is the pointwise product $\chi := (\varphi \circ g)\,\psi$. [step 1.1, step 1.2]

2.2 **The outer factor is continuous at $c$.** By [L4] the function $g$ is continuous at $c$; by step 1.2 the function $\varphi$ is continuous at $b = g(c)$; and $g[A] \subseteq B$. So $\varphi \circ g$ is continuous at $c$ by [L3]. [step 1.2, L3, L4]

3.1 **The factor is continuous at $c$, with the right value.** $\chi$ is the product of $\varphi \circ g$, continuous at $c$ by step 2.2, with $\psi$, continuous at $c$ by step 1.1, so $\chi$ is continuous at $c$ by [L2]; and $\chi(c) = \varphi(g(c))\,\psi(c) = \varphi(b)\,\psi(c) = f'(b)\,g'(c)$. [step 1.1, step 2.2, L2]

4.1 By step 2.1 the function $\chi : A \to \mathbb{R}$ factors the increment of $f \circ g$ at $c$, and by step 3.1 it is continuous at $c$. So [L1], applied to $f \circ g$ on $A$ at the limit point $c$, gives that $f \circ g$ is differentiable at $c$ with $(f \circ g)'(c) = \chi(c) = f'(g(c))\,g'(c)$. [step 2.1, step 3.1, L1] ∎

## Remarks

- **Where the classical proof goes wrong, precisely.** It divides by $g(x) - g(c)$, which may vanish at points arbitrarily close to $c$ even when $g$ is differentiable at $c$ with $g'(c) = 0$; the usual repair defines an auxiliary function equal to the outer quotient off the bad set and to $f'(b)$ on it, and then proves that auxiliary function continuous. That auxiliary function is $\varphi \circ g$, and [[thm-caratheodory-characterisation]] is the observation that it exists before any repair is attempted.

- **What is composed is continuity, not differentiability.** The only theorem about composites used above is [[thm-composition-of-continuous-functions]], and it needs no side hypothesis, unlike the corresponding statement for limits. That is the whole reason the proof has no cases.

- **The formula is about the point $g(c)$, not about $g$ near $c$.** Both derivatives on the right are taken at single points, and the theorem says nothing about $f$ on the image of any neighbourhood of $c$. In particular no hypothesis is placed on $g[A]$ beyond its lying in $B$.
````

### `thm-ftc-second-part`

````markdown
---
id: thm-ftc-second-part
kind: theorem
title: "The second fundamental theorem: if $G$ is differentiable on $[a,b]$ with $G' = f$ and $f$ is integrable, then $\\int_a^b f = G(b)-G(a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-darboux-integral, def-partition-and-refinement, def-darboux-sums, cor-mean-value-theorem, def-derivative, cor-differentiable-implies-continuous, lem-finite-sum-laws, def-finite-sum, def-interval, def-continuity-real, def-bounded-set, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-a-function-with-a-primitive-that-is-not-integrable, cex-an-integrable-function-with-no-primitive]
justified_by: []
aliases: [thm-fundamental-theorem-of-calculus-second-part, thm-newton-leibniz]
landmark: true
short: "second fundamental theorem"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $G : [a,b] \to \mathbb{R}$ be differentiable at every
point of $[a,b]$ as a function on $[a,b]$ ([[def-derivative]]; at $a$ and $b$
this is the one-sided derivative), let $f := G'$, and suppose $f$ is integrable
on $[a,b]$ ([[def-darboux-integral]]). Then

$$\int_a^b f \;=\; G(b) - G(a) .$$

**Both hypotheses are needed and neither is removable.** A function may be
differentiable everywhere with $G'$ not integrable — then the left-hand side does
not exist (an everywhere differentiable function with unbounded derivative) — and an
integrable $f$ need not be the derivative of anything
(the sign function); both witnesses are on the
companion page.

**No continuity of $f$ is assumed**, which is what makes this the working form:
the theorem evaluates $\int_a^b f$ for every integrable derivative, not only for
continuous integrands.

## Facts & Assumptions

**Given:** Reals $a < b$, a function $G : [a,b] \to \mathbb{R}$ differentiable at every point of $[a,b]$, $f := G'$ integrable on $[a,b]$, and a partition $P = (n,t)$ of $[a,b]$.

[L1] For a partition $P = (n,t)$ of $[a,b]$: $t_0 = a$, $t_n = b$, $t_i < t_{i+1}$ for $i < n$, $\Delta_i = t_{i+1}-t_i > 0$, and $I_i = [t_i,t_{i+1}] \subseteq [a,b]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$, so $m_i \le f(\xi) \le M_i$ for every $\xi \in I_i$ ([[def-darboux-sums]], [[def-bounded-set]]).

[L3] $\underline{\int_a^b} f = \sup_P L(f,P)$ and $\overline{\int_a^b} f = \inf_P U(f,P)$, and $f$ integrable means the two agree, their common value being $\int_a^b f$ ([[def-darboux-integral]]).

[L4] Mean value theorem: if $u$ is continuous on $[p,q]$ with $p<q$ and differentiable at every point of $(p,q)$, there is $\xi \in (p,q)$ with $u(q)-u(p) = u'(\xi)(q-p)$ ([[cor-mean-value-theorem]]).

[L5] A function differentiable at a point is continuous there, and the restriction of a differentiable function to a subinterval is differentiable with the same derivative at every point of that subinterval which is a limit point of it ([[cor-differentiable-implies-continuous]], [[def-derivative]], [[def-continuity-real]]).

[L6] Finite sums: telescoping $\sum_{i<n}(c_{i+1}-c_i) = c_n - c_0$, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 4 and 5).

[L7] Ordered-field arithmetic: multiplying an inequality by a positive real preserves it, the order is total and transitive, and a number that is an upper bound of a set and also a lower bound of another set lies between their supremum and infimum ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $P = (n,t)$ be an arbitrary partition of $[a,b]$ and let $i < n$. The restriction of $G$ to $I_i = [t_i,t_{i+1}]$ is continuous on $I_i$ and differentiable at every point of $(t_i,t_{i+1})$, with the same derivative $f$ there, by [L5] and [L1]. [given, L1, L5]

2.1 By [L4] applied on $I_i$ there is $\xi_i \in (t_i,t_{i+1})$ with $G(t_{i+1}) - G(t_i) = f(\xi_i)\,\Delta_i$; since $\xi_i \in I_i$ and $\Delta_i > 0$, [L2] gives $m_i\Delta_i \le G(t_{i+1})-G(t_i) \le M_i\Delta_i$. [step 1.1, L1, L2, L4, L7]

3.1 Step 2.1 holds for every $i < n$, so monotonicity of finite sums applies to the three families and gives $\sum_{i<n}m_i\Delta_i \le \sum_{i<n}\bigl(G(t_{i+1})-G(t_i)\bigr) \le \sum_{i<n}M_i\Delta_i$. [step 2.1, L6]

4.1 The middle sum telescopes to $G(t_n) - G(t_0) = G(b) - G(a)$ by [L6] and [L1], so $L(f,P) \le G(b)-G(a) \le U(f,P)$ by [L2]. [step 3.1, L1, L2, L6]

5.1 Step 4.1 holds for **every** partition $P$, so $G(b)-G(a)$ is an upper bound of the set of lower sums and a lower bound of the set of upper sums; hence $\underline{\int_a^b} f \le G(b)-G(a) \le \overline{\int_a^b} f$ by [L3] and [L7]. [step 4.1, L3, L7]

6.1 Since $f$ is integrable the two integrals coincide with $\int_a^b f$, so $\int_a^b f = G(b)-G(a)$. [step 5.1, L3] ∎

## Remarks

- **No choice principle is spent, and no sequence of tags is ever formed.** The usual proof selects one $\xi_i$ per subinterval and assembles the Riemann sum $\sum_i f(\xi_i)\Delta_i$, which is a choice from finitely many nonempty sets. The proof above never forms that family: step 2.1 proves, for an arbitrary fixed $i$, the *inequality* $m_i\Delta_i \le G(t_{i+1})-G(t_i) \le M_i\Delta_i$, which is a universally quantified statement about $i$ and needs no selection, and step 3.1 then sums the inequality. The telescoping identity supplies the middle term without any tags at all.

- **The hypothesis is differentiability at every point of the closed interval.** It is not enough to be differentiable on $(a,b)$ and continuous on $[a,b]$ in the argument as written, because step 2.1 uses the derivative only on open subintervals but the definition $f = G'$ has to name a function on all of $[a,b]$ for $\int_a^b f$ to mean anything. Changing $f$ at the two endpoints changes neither its integrability nor its integral ([[lem-changing-a-function-at-finitely-many-points]]), so the reader who prefers the weaker hypothesis loses nothing.

- **This is the half of the fundamental theorem that computes.** The other half, [[thm-ftc-first-part]], produces a primitive; this one evaluates an integral once a primitive is known, and it is the tool the companion page reaches for whenever a primitive is available. Where no primitive is at hand the companion page computes instead by splitting at a jump and using the integral of a constant; no claim is made here about how many of its computations take which route.

- **Forward references, orientation only.** The two witnesses showing neither hypothesis is removable are [[cex-a-function-with-a-primitive-that-is-not-integrable]] and [[cex-an-integrable-function-with-no-primitive]] on the companion page; nothing above depends on either.
````

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

### `thm-two-sided-limit-iff-both-one-sided`

````markdown
---
id: thm-two-sided-limit-iff-both-one-sided
kind: theorem
title: "If $c$ is a limit point of the domain from both sides, the limit exists iff both one-sided limits exist and agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-one-sided-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-interval, lem-limit-is-local, lem-function-limit-unique, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "two-sided iff both one-sided"
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
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in
\mathbb{R}$ be a limit point of **both** $A^{-} = A \cap (-\infty, c)$ and
$A^{+} = A \cap (c, \infty)$ ([[def-limit-point-r]], [[def-interval]]), so that
both one-sided limits at $c$ are well posed ([[def-one-sided-limits]]). Then $c$
is a limit point of $A$, and for every $L \in \mathbb{R}$:

$$\lim_{x \to c} f(x) = L \quad \Longleftrightarrow \quad \lim_{x \to c^{-}} f(x) = L \ \text{ and } \ \lim_{x \to c^{+}} f(x) = L$$

([[def-function-limit]]). Consequently the limit of $f$ at $c$ **exists** if and
only if both one-sided limits exist and are equal, and in that case

$$\lim_{x \to c} f(x) \;=\; \lim_{x \to c^{-}} f(x) \;=\; \lim_{x \to c^{+}} f(x) .$$

**The hypothesis on both sides is what makes the statement an equivalence.** If
$c$ is a limit point of only one of the two sets — as $1$ is for
$\{0\} \cup [1,2]$ — then the one-sided limit on that side and the two-sided
limit are the same condition, and the symbol on the other side is not defined at
all ([[def-one-sided-limits]]).

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a real $c$ that is a limit point of both $A^{-} = A \cap (-\infty, c)$ and $A^{+} = A \cap (c, \infty)$, and a real $L$ ([[def-limit-point-r]], [[def-interval]], [[def-one-sided-limits]]).

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$.

[L2] Limit point: $c$ is a limit point of $S$ when for every real $\delta > 0$ there is $x \in S$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Intervals: $A^{-} = \{\, x \in A : x < c \,\}$ and $A^{+} = \{\, x \in A : x > c \,\}$ ([[def-interval]]).

[L4] Absolute value and order: $|x - c| = 0$ exactly when $x = c$; the order is total, so every $x \ne c$ satisfies $x < c$ or $x > c$; and $0 < |x - c| < \delta$ is equivalent to $c - \delta < x < c$ for $x < c$ and to $c < x < c + \delta$ for $x > c$ ([[lem-of-abs-value]], [[def-ordered-field]]). Of two positive reals the smaller is positive.

[L5] Restriction: if $B \subseteq A$ has $c$ as a limit point and $\lim_{x \to c} f(x) = L$, then $\lim_{x \to c} f|_B(x) = L$ (claim 2 of [[lem-limit-is-local]]).

[L6] One-sided limits are by definition the limits of the restrictions $f|_{A^{-}}$ and $f|_{A^{+}}$ at $c$ ([[def-one-sided-limits]]).

[L7] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]); applied to $f|_{A^{-}}$ and to $f|_{A^{+}}$ it makes each one-sided limit a single real, and applied to $f$ it does the same for the two-sided limit.

## Proof

**Proof technique:** direct.

1.1 $c$ is a limit point of $A$: it is one of $A^{+}$ by hypothesis, and $A^{+} \subseteq A$, so every point of $A^{+}$ found in a punctured neighbourhood of $c$ is a point of $A$ there. [L2, L3]

1.2 For $x \in A$ the condition $0 < |x - c|$ says exactly $x \ne c$, and then $x < c$ or $x > c$, that is $x \in A^{-}$ or $x \in A^{+}$; moreover for $x \in A^{-}$ the condition $0 < |x - c| < \delta$ reads $c - \delta < x < c$ and for $x \in A^{+}$ it reads $c < x < c + \delta$. [L3, L4]

2.1 Suppose $\lim_{x \to c} f(x) = L$. Both $A^{-}$ and $A^{+}$ are subsets of $A$ having $c$ as a limit point, so [L5] gives $\lim_{x \to c} f|_{A^{-}}(x) = L$ and $\lim_{x \to c} f|_{A^{+}}(x) = L$, which by [L6] is exactly $\lim_{x \to c^{-}} f(x) = L$ and $\lim_{x \to c^{+}} f(x) = L$. [step 1.1, step 1.2, L5, L6]

2.2 Suppose conversely that both one-sided limits equal $L$, and let $\varepsilon > 0$ be an arbitrary real. By [L6] and [L1] fix reals $\delta_1, \delta_2 > 0$ such that every $x \in A^{-}$ with $0 < |x - c| < \delta_1$ and every $x \in A^{+}$ with $0 < |x - c| < \delta_2$ satisfies $|f(x) - L| < \varepsilon$; let $\delta$ be the smaller of the two. Every $x \in A$ with $0 < |x - c| < \delta$ lies in $A^{-}$ or in $A^{+}$ by step 1.2, and in either case $|f(x) - L| < \varepsilon$. As $\varepsilon$ was arbitrary, $\lim_{x \to c} f(x) = L$. [step 1.2, L1, L4, L6, choose]

3.1 The displayed equivalence is steps 2.1 and 2.2. For the consequence: if the limit of $f$ at $c$ exists, say with value $L$, then step 2.1 gives that both one-sided limits exist with the same value $L$, so they agree; and if both one-sided limits exist and are equal, to the common value $L$, then step 2.2 gives that the limit of $f$ at $c$ exists and equals $L$. Each of the three symbols denotes a single real by [L7], so the three are equal. [step 2.1, step 2.2, L7] ∎

## Remarks

- **The two directions are not symmetric in difficulty.** From the two-sided limit to the one-sided ones is pure restriction, [[lem-limit-is-local]]; the converse has to glue two estimates, and the gluing is legitimate precisely because every point of $A$ other than $c$ lies strictly on one side of $c$, which is the totality of the order.

- **The typical failure** is a function whose two one-sided limits exist and differ: the sign function at $0$, on the companion page. Then the two-sided limit cannot exist, since by step 2.1 it would force both one-sided values to equal it.

- **A function may also have no two-sided limit for a different reason**, namely that a one-sided limit fails to exist rather than that the two disagree. The theorem covers that case too, since its right-hand side asserts the existence of both one-sided values, so its failure on one side alone already blocks the two-sided limit. The companion page exhibits both patterns.
````

