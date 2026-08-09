## Selection reasons

- critical risk (14): 37 declared dependencies; 43 cited facts; 8 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language
- top-20 dependency-cone consumer (38 generated manifest edges)

## Target item — `thm-cantor-function-properties`

Normalized current SHA-256: `5b140e6569871003125872ed5fb280585ef37191c1073be632ea6d2228bc35b5`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-cantor-function-properties
kind: theorem
title: "The Cantor function is well defined, satisfies $c(x) \\le c(y)$ whenever $x \\le y$, is surjective onto $[0,1]$, and is constant on every interval removed from the Cantor set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-function, thm-cantor-set-ternary-description, thm-cantor-set-properties, def-cantor-set, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, def-interval, def-bounded-set, lem-sup-unique, lem-sup-epsilon, def-infimum, lem-inf-epsilon, thm-infimum-property, def-integer-power, lem-power-laws, thm-recursion, thm-induction-principle, thm-well-ordering-principle, lem-geometric-sequence-null, def-real-limit, lem-limit-unique, def-sequence, def-open-and-closed-in-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-injection-surjection-bijection, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [ex-cantor-function-values]
aliases: []
landmark: true
short: "Cantor function: monotone, onto, flat on gaps"
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
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Statement

Let $C$ be the Cantor set, $\gamma : C \to [0,1]$ and $c : [0,1] \to \mathbb{R}$
as in [[def-cantor-function]]. Then:

1. $c$ is well defined with values in $[0,1]$, and $c(t) = \gamma(t)$ for every
   $t \in C$, so $c$ extends $\gamma$;
2. $c(x) \le c(y)$ whenever $0 \le x \le y \le 1$;
3. $c$ is surjective onto $[0,1]$
   ([[def-injection-surjection-bijection]]), and $c(0) = 0$, $c(1) = 1$;
4. $c$ is constant on $[u,v]$ whenever $u < v$, $u, v \in C$ and
   $(u,v) \cap C = \varnothing$; and every $x \in [0,1] \setminus C$ lies in the
   open interval of such a pair, so $c$ is constant on a whole neighbourhood of
   every point of $[0,1]$ outside $C$.

Claim 2 is what "monotone" names for a function; that word is not used here,
because [[def-monotone-sequence]] is about sequences and no definition of a
monotone function is available at this point in the reading order. Claim 4 is
what "constant on every interval removed in the construction" means: the removed
intervals are gaps of $C$ in the sense of claim 4, as
$(\tfrac13, \tfrac23)$ illustrates. **No claim whatever is made here about
continuity**, for which no definition is available at this point in the reading
order.

## Facts & Assumptions

**Given:** The Cantor set $C$, the set $D$ of $\{0,2\}$-valued sequences, the bijection $\Phi : D \to C$, and the functions $\gamma$ and $c$ of [[def-cantor-function]]. For $x \in C$ write $\Phi^{-1}(x)$ for its digit sequence.

[L1] $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$ is a bijection from $D$ onto $C$, with two-sided inverse $\Phi^{-1}$; $\gamma(x) = \sum_{k \ge 0}(a_k 2^{-1})2^{-k-1}$ for $a = \Phi^{-1}(x)$, with values in $[0,1]$; $c(x) = \sup\{\gamma(t) : t \in C,\ t \le x\}$, the supremum of a nonempty set bounded above by $1$ and containing $\gamma(0)$ ([[thm-cantor-set-ternary-description]], [[def-cantor-function]], [[def-injection-surjection-bijection]], [[def-complete-ordered-field]], [[def-bounded-set]], [[lem-sup-unique]]).

[L2] $\sum_{k=0}^{\infty} r^{k} = 1/(1-r)$ for $|r|<1$, so $\sum_{k \ge m} 2^{-k-1} = 2^{-m}$ and $\sum_{k \ge m} 2 \cdot 3^{-k-1} = 3^{-m}$; convergent series add and scale termwise; a series of nonnegative terms has nonnegative sum and all partial sums at most the sum ([[thm-geometric-series]], [[lem-series-linearity]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-integer-power]], [[lem-power-laws]]).

[L3] $C$ is closed and $0, 1 \in C$; $\overline{A}$ is the set of points every neighbourhood of which meets $A$, and a closed set equals its closure ([[thm-cantor-set-properties]], [[def-cantor-set]], [[def-open-and-closed-in-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L4] Suprema: $u = \sup S$ exactly when $u$ is an upper bound and for every $\varepsilon > 0$ some $s \in S$ has $u - \varepsilon < s$; infima exist for nonempty sets bounded below, and $\ell = \inf S$ exactly when $\ell$ is a lower bound and for every $\varepsilon > 0$ some $s \in S$ has $s < \ell + \varepsilon$; both are unique; a supremum is monotone in the set, since an upper bound of a larger set bounds a smaller one ([[lem-sup-epsilon]], [[lem-inf-epsilon]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L5] Recursion and induction on $\mathbb{N}$; every nonempty subset of $\mathbb{N}$ has a least element ([[thm-recursion]], [[thm-induction-principle]], [[thm-well-ordering-principle]]).

[L6] $2^{-n} \to 0$; convergence is tested against rational $\varepsilon > 0$; a convergent sequence has exactly one limit; $|z| \ge 0$ and $|z| = z$ for $z \ge 0$ ([[lem-geometric-sequence-null]], [[def-real-limit]], [[lem-limit-unique]], [[def-sequence]], [[lem-of-abs-value]]).

[L7] Every nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] $[u,v]$ and $(u,v)$ are the intervals of [[def-interval]], and $N_\varepsilon(x) = (x-\varepsilon,x+\varepsilon)$ ([[def-neighbourhood-r]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$ and $2^{-1} > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **Comparison of two digit sequences.** Let $a \ne b$ in $D$ and let $k$ be the least index with $a_k \ne b_k$, which exists by [L5]; suppose $a_k = 0$ and $b_k = 2$. Then $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1}$ by [L2], the terms with $j < k$ vanish, and the tail $R := \sum_{j \ge k+1}(b_j - a_j)3^{-j-1}$ satisfies $|R| \le \sum_{j \ge k+1} 2 \cdot 3^{-j-1} = 3^{-k-1}$ by [L2], since $|b_j - a_j| \le 2$; hence $\Phi(b) - \Phi(a) \ge 2 \cdot 3^{-k-1} - 3^{-k-1} = 3^{-k-1} > 0$. The same computation with the halved digits gives $\gamma(\Phi(b)) - \gamma(\Phi(a)) = 2^{-k-1} + R'$ with $|R'| \le \sum_{j \ge k+1} 2^{-j-1} = 2^{-k-1}$, so $\gamma(\Phi(b)) \ge \gamma(\Phi(a))$. Consequently, for $s, t \in C$ with $s \le t$ one has $\gamma(s) \le \gamma(t)$: this is trivial if $s = t$, and otherwise the least index $k$ at which the digit sequences differ must have the digit of $t$ equal to $2$, by the first computation applied both ways. [given, L1, L2, L5, L9]

1.2 **Values at the endpoints.** The constant sequence $\bar 0$ has $\Phi(\bar 0) = 0$ and $\gamma(0) = 0$; the constant sequence $\bar 2$ has $\Phi(\bar 2) = \sum_{k \ge 0} 2 \cdot 3^{-k-1} = 1$ and $\gamma(1) = \sum_{k \ge 0} 2^{-k-1} = 1$, by [L2]. Both $0$ and $1$ lie in $C$ by [L3]. [L1, L2, L3]

2.1 **Claims 1 and 2.** For $x \in [0,1]$ the set $A_x := \{\gamma(t) : t \in C,\ t \le x\}$ is nonempty and bounded above by $1$ by [L1], so $c(x) = \sup A_x$ exists, is unique and lies in $[0,1]$ by [L1] and [L4]; that is claim 1 apart from the extension property. If $0 \le x \le y \le 1$ then $A_x \subseteq A_y$, so $c(x) \le c(y)$ by [L4], which is claim 2. And for $t \in C$: $\gamma(t) \in A_t$, while $\gamma(t)$ is an upper bound of $A_t$ by step 1.1, so $\gamma(t) = \sup A_t = c(t)$ by [L4]. [step 1.1, step 1.2, L1, L4]

2.2 **The two endpoints of a gap carry the same value of $\gamma$.** Let $u < v$ with $u, v \in C$ and $(u,v) \cap C = \varnothing$, and put $a := \Phi^{-1}(u)$, $b := \Phi^{-1}(v)$, with $k$ the least index where they differ; by step 1.1 and $u < v$ we have $a_k = 0$ and $b_k = 2$. If some $j > k$ had $a_j = 0$, let $a'$ agree with $a$ except that $a'_j = 2$; then $\Phi(a') \in C$, $\Phi(a') > u$ by step 1.1, and $a'$ still differs from $b$ first at $k$ with $a'_k = 0 < 2 = b_k$, so $\Phi(a') < v$ by step 1.1, putting $\Phi(a')$ in $(u,v) \cap C$, which is empty. Hence $a_j = 2$ for every $j > k$. Symmetrically, if some $j > k$ had $b_j = 2$, replacing it by $0$ gives $b'$ with $\Phi(b') < v$ and $\Phi(b') > u$, again impossible; hence $b_j = 0$ for every $j > k$. Writing $P := \sum_{j<k}(a_j 2^{-1})2^{-j-1} = \sum_{j<k}(b_j 2^{-1})2^{-j-1}$, [L2] now gives $\gamma(u) = P + 0 + \sum_{j \ge k+1} 2^{-j-1} = P + 2^{-k-1}$ and $\gamma(v) = P + 2^{-k-1} + 0 = P + 2^{-k-1}$, so $\gamma(u) = \gamma(v)$. [step 1.1, L1, L2, L9]

3.1 **Claim 4, first half.** Let $u < v$ with $u,v \in C$ and $(u,v) \cap C = \varnothing$, and let $x \in [u,v]$. Every $t \in C$ with $t \le x$ satisfies $t \le u$ or $t = v$: indeed if $t > u$ then $t \le x \le v$ and $t \notin (u,v)$ force $t = v$. In the first case $\gamma(t) \le \gamma(u)$ by step 1.1, and in the second $\gamma(t) = \gamma(v) = \gamma(u)$ by step 2.2. So $\gamma(u)$ is an upper bound of $A_x$ and belongs to it, whence $c(x) = \gamma(u)$ by [L4]: $c$ is constant on $[u,v]$, with the value $c(u)$ given by step 2.1. [step 1.1, step 2.1, step 2.2, L4, L9]

3.2 **Claim 3.** Let $s \in [0,1]$. Let $T : \mathbb{R} \to \mathbb{R}$ be $T(r) := 2r$ for $r < 2^{-1}$ and $T(r) := 2r - 1$ for $r \ge 2^{-1}$, a definition by cases on the total order, and by [L5] let $(r_n)$ satisfy $r_0 = s$ and $r_{n+1} = T(r_n)$; put $\beta_n := 0$ when $r_n < 2^{-1}$ and $\beta_n := 1$ otherwise, so $r_{n+1} = 2r_n - \beta_n$. An induction ([L5]) gives $r_n \in [0,1]$ for every $n$, since $0 \le r < 2^{-1}$ gives $0 \le 2r < 1$ and $2^{-1} \le r \le 1$ gives $0 \le 2r - 1 \le 1$ by [L9]; a second induction gives $s = \sum_{k<n}\beta_k 2^{-k-1} + 2^{-n} r_n$ for every $n$, the step being $\sum_{k<n+1}\beta_k2^{-k-1} + 2^{-n-1}r_{n+1} = \sum_{k<n}\beta_k2^{-k-1} + \beta_n 2^{-n-1} + 2^{-n-1}(2r_n - \beta_n) = \sum_{k<n}\beta_k2^{-k-1} + 2^{-n}r_n$. Hence $0 \le s - \sum_{k<n}\beta_k2^{-k-1} \le 2^{-n}$, so by [L6] the partial sums converge to $s$ and $s = \sum_{k \ge 0}\beta_k 2^{-k-1}$. Now $a := (2\beta_k)_k$ lies in $D$, the point $x := \Phi(a)$ lies in $C$ by [L1], and $\gamma(x) = \sum_k \beta_k 2^{-k-1} = s$; by step 2.1, $c(x) = \gamma(x) = s$. With step 1.2 and step 2.1 this also gives $c(0) = \gamma(0) = 0$ and $c(1) = \gamma(1) = 1$. [step 1.2, step 2.1, L1, L2, L5, L6, L9]

4.1 **Claim 4, second half.** Let $x \in [0,1] \setminus C$. The set $A := \{t \in C : t \le x\}$ is nonempty by [L3] and bounded above by $x$, so $u := \sup A$ exists by [L4]; by [L4] every $N_\varepsilon(u)$ meets $A \subseteq C$, so $u \in \overline{C} = C$ by [L3], and $u \le x$ with $u \ne x$, so $u < x$. The set $B := \{t \in C : t \ge x\}$ is nonempty by [L3], since $1 \in C$ and $x \le 1$, and is bounded below by $x$, so $v := \inf B$ exists by [L4]; likewise $v \in C$ and $v > x$. If $t \in C$ satisfied $u < t < v$, then $t \le x$ would put $t \in A$ and force $t \le u$, while $t \ge x$ would put $t \in B$ and force $t \ge v$, and one of the two holds by totality of the order ([L9]); so $(u,v) \cap C = \varnothing$. By step 3.1 the function $c$ is constant on $[u,v]$, and $N_\delta(x) \subseteq (u,v)$ for $\delta := \min\{x - u,\ v - x\} > 0$ by [L7], [L8] and [L9]. [step 3.1, L3, L4, L7, L8, L9]

5.1 Claims 1 and 2 are step 2.1, claim 3 is step 3.2, and claim 4 is steps 3.1 and 4.1 together; so all four hold. [step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **The gap $(\tfrac13,\tfrac23)$ worked out.** $\tfrac13 = \Phi(0,2,2,2,\dots)$
  and $\tfrac23 = \Phi(2,0,0,0,\dots)$, both in $C$, and
  $C \subseteq C_1 = [0,\tfrac13] \cup [\tfrac23,1]$ ([[def-cantor-set]]) shows
  $(\tfrac13,\tfrac23) \cap C = \varnothing$. Step 2.2 gives
  $\gamma(\tfrac13) = \gamma(\tfrac23) = \tfrac12$, so $c \equiv \tfrac12$ on
  $[\tfrac13, \tfrac23]$; this and three further values are computed in
  [[ex-cantor-function-values]].

- **Where each hypothesis is used.** Step 1.1 is the only place the ternary
  comparison is made, and everything else rests on it: monotonicity of $c$ comes
  from monotonicity of the set $A_x$, and the constancy across gaps comes from
  step 2.2, which is a statement about digit sequences and not about the topology
  of $C$.

- **What is deliberately absent.** Continuity, differentiability and any
  statement about the derivative of $c$ are outside the vocabulary available at
  this point in the reading order and none of them is asserted anywhere above.
  What is proved is that $c$ climbs from $0$ to $1$, never decreases, misses no
  value of $[0,1]$, and is locally constant off a set of measure zero
  ([[thm-cantor-set-properties]]). That combination is already the paradoxical
  content of the example.

- **Surjectivity is a binary expansion theorem in disguise.** Step 3.2 constructs
  the binary digits of an arbitrary $s \in [0,1]$ by the same canonical recursion
  that [[thm-cantor-set-ternary-description]] uses for ternary digits, so no
  general expansion theorem is presupposed and no choice is made.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-cantor-function-properties",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
  ],
  "rationale": "The Stanford exercise states that the Cantor function is well defined, continuous, monotone, onto, and constant on complementary intervals. The local theorem selects the monotonicity, surjectivity, and gap-constancy clauses and proves them from its supremum definition.",
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
      "source": "thm-cantor-set-ternary-description",
      "source_section": "Statement",
      "quote": "Let $D$ be the set of sequences $a : \\mathbb{N} \\to \\{0,2\\}$ ([[def-sequence]]), the two values being the real numbers $0$ and $2$. For $a \\in D$ the series $\\sum_{k \\ge 0} a_k 3^{-k-1}$ converges ([[def-series]]); write $$\\Phi(a) \\;:=\\; \\sum_{k=0}^{\\infty} a_k 3^{-k-1} .$$ Then, with $C$ and $(C_n)$ as in [[def-cantor-set]]: 1. $\\Phi(a) \\in [0,1]$ for every $a \\in D$, and $C = \\{\\, \\Phi(a) : a \\in D \\,\\}$; 2. $\\Phi$ is injective, so $\\Phi$ is a bijection from $D$ onto $C$ ([[def-injection-surjection-bijection]]); 3. consequently $b \\mapsto \\Phi\\big((2 b_k)_k\\big)$ is a bijection from $\\{0,1\\}^{\\mathbb{N}}$, the set of sequences with values in $\\{0,1\\}$, onto $C$; 4. $C = \\tfrac13 C \\cup \\big(\\tfrac23 + \\tfrac13 C\\big)$, and the two sets on the right are disjoint. **On the indexing.** The digit $a_k$ carries the weight $3^{-k-1}$, so the series starts at $k = 0$ with the term $a_0/3$; written with the classical $1$-based index it reads $\\sum_{k \\ge 1} a_k 3^{-k}$, which is the form in the title. Sequences in this library are functions on $\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), so the $0$-based form is the one used throughout the proof.",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-cantor-function",
      "source_section": "Definition",
      "quote": "Let $C$ be the Cantor set, $D$ the set of sequences with values in $\\{0,2\\}$ and $\\Phi : D \\to C$ the bijection $\\Phi(a) = \\sum_{k \\ge 0} a_k 3^{-k-1}$ of [[thm-cantor-set-ternary-description]]. Since $\\Phi$ is a bijection it has a two-sided inverse $\\Phi^{-1} : C \\to D$, and that inverse is a single function, determined and not selected ([[def-injection-surjection-bijection]]).",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "Let $A$ and $B$ be sets and let $f : A \\to B$ be a function ([[def-function]]).",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$. - $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is **bounded above** if it has an upper bound. - $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$ is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$. $F$ is a **complete ordered field** (equivalently, $F$ has the **least-upper-bound property**, or is **Dedekind complete**) if every nonempty $S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field ([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-sup-unique",
      "source_section": "Statement",
      "quote": "If $u_1$ and $u_2$ are both least upper bounds of $S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]), so that $r^0 = 1$ for every $r$, including $r = 0$. 1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$ 2. If $|r| \\ge 1$ then $\\sum r^k$ diverges. The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular $\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to $1$. Which starting index is meant has to be said, and it is said here.",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-series-linearity",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$, let $s_n = \\sum_{k<n} a_k$ be its partial sums and let $S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]). Then: 1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every $n$; 2. $\\sum a_k$ converges **if and only if** $S$ is bounded above ([[def-bounded-set]]), and in that case $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$ so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$; 3. if $S$ is not bounded above then $s_n \\to +\\infty$ ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges. This is the theorem that makes the nonnegative theory work: for terms of one sign, convergence is a boundedness question and no candidate limit is ever needed. Every comparison test on this page is an application of it.",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Convergence, the sum, divergence.** The **series** of $(a_k)$, written $\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges ([[def-real-limit]]), and then the **sum of the series** is",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "**Integer exponents.** Every integer $m$ ([[def-integers]]) is either",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-power-laws",
      "source_section": "Statement",
      "quote": "For all $m, n \\in \\mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-cantor-set-properties",
      "source_section": "Statement",
      "quote": "1. $C$ is closed and bounded, hence compact ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]); 2. $C$ has content zero, and therefore measure zero ([[def-measure-zero-and-content-zero]]); 3. $C$ is perfect ([[def-perfect-set-r]]); 4. $C$ is uncountable ([[def-countable]]); 5. $C$ contains no interval with two distinct endpoints, and is nowhere dense ([[def-nowhere-dense-meager]]); 6. every nonempty connected subset of $C$ ([[def-connected-r]]) is a single point.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-cantor-set",
      "source_section": "Definition",
      "quote": "For $S \\subseteq \\mathbb{R}$ write $$\\tfrac{1}{3} S \\;:=\\; \\{\\, x \\cdot 3^{-1} : x \\in S \\,\\}, \\qquad \\tfrac{2}{3} + \\tfrac{1}{3} S \\;:=\\; \\{\\, 2 \\cdot 3^{-1} + x \\cdot 3^{-1} : x \\in S \\,\\},$$ and let $F : \\mathcal{P}(\\mathbb{R}) \\to \\mathcal{P}(\\mathbb{R})$ be $$F(S) \\;:=\\; \\tfrac{1}{3} S \\ \\cup \\ \\big(\\tfrac{2}{3} + \\tfrac{1}{3} S\\big).$$ By the recursion theorem ([[thm-recursion]]), applied to the set $\\mathcal{P}(\\mathbb{R})$, the starting element $[0,1]$ ([[def-interval]]) and the function $F$, there is a unique family $(C_n)_{n \\in \\mathbb{N}}$ of subsets of $\\mathbb{R}$ with $$C_0 = [0,1], \\qquad C_{n+1} = F(C_n) = \\tfrac{1}{3}C_n \\cup \\big(\\tfrac{2}{3} + \\tfrac{1}{3}C_n\\big) \\quad (n \\in \\mathbb{N}).$$ The **Cantor middle-thirds set** is $$C \\;:=\\; \\bigcap_{n \\in \\mathbb{N}} C_n .$$ **The first step really is the removal of the open middle third.** Directly from the clauses, $$C_1 \\;=\\; \\tfrac{1}{3}[0,1] \\cup \\big(\\tfrac{2}{3} + \\tfrac{1}{3}[0,1]\\big) \\;=\\; [0, \\tfrac13] \\cup [\\tfrac23, 1] \\;=\\; [0,1] \\setminus (\\tfrac13, \\tfrac23),$$ the middle equality because $x \\mapsto x \\cdot 3^{-1}$ is an order isomorphism of $\\mathbb{R}$ onto itself with inverse $x \\mapsto 3x$ ([[def-ordered-field]], [[lem-of-sign-rules]]), and the last because $0 \\le x \\le 1$ splits, by totality of the order, into $x \\le \\tfrac13$, $\\tfrac13 < x < \\tfrac23$ and $x \\ge \\tfrac23$. The recursion then performs the same operation inside each of the two scaled copies, which is what \"removing the open middle thirds\" names. **Every $C_n$ lies in $[0,1]$**, by induction on $n$ ([[thm-induction-principle]]): $C_0 = [0,1]$; and if $C_n \\subseteq [0,1]$ then $\\tfrac13 C_n \\subseteq [0,\\tfrac13]$ and $\\tfrac23 + \\tfrac13 C_n \\subseteq [\\tfrac23, 1]$, so $C_{n+1} \\subseteq [0,1]$ ([[lem-of-add-order]], [[lem-of-sign-rules]]). The same computation shows that **the two halves of $C_{n+1}$ are disjoint**, the first lying in $[0,\\tfrac13]$ and the second in $[\\tfrac23,1]$, and $\\tfrac13 < \\tfrac23$ ([[cor-of-one-positive]]). **The family is nested**, $C_{n+1} \\subseteq C_n$ for every $n$, again by induction. For $n = 0$ this is $C_1 = [0,\\tfrac13] \\cup [\\tfrac23,1] \\subseteq [0,1]$. And $F$ is monotone, in the sense that $S \\subseteq T$ implies $F(S) \\subseteq F(T)$, directly from the displayed description of $F$; so $C_{n+1} \\subseteq C_n$ gives $C_{n+2} = F(C_{n+1}) \\subseteq F(C_n) = C_{n+1}$. Consequently $C = \\bigcap_n C_n \\subseteq C_m$ for every $m$, and $\\bigcap_n C_{n+1} = \\bigcap_n C_n = C$. **Powers.** Here $3^{-n}$ means $(3^{-1})^n$, the integer power of [[def-integer-power]], so that $3^{0} = 1$, $3^{-(n+1)} \\cdot 3 = 3^{-n}$ and $3^{-n} > 0$ for every $n$ ([[lem-power-laws]], [[def-complete-ordered-field]]).",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq U$. - $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open. - A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in [[def-interior-closure-boundary-r]] and derived set $A'$ as in [[def-limit-point-r]]. Write $$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$ for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then: 1. $\\overline{A} = E$. 2. $\\overline{A} = A \\cup A'$. 3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$. 4. $A$ is closed if and only if $A = \\overline{A}$, if and only if $A' \\subseteq A$. Claim 3 is the content of the definition of $\\overline{A}$ and is restated here so that the four descriptions stand together; claims 1, 2 and 4 are the ones that carry work.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "- The **interior** of $A$ is the union of all open subsets of $A$: $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$ - The **closure** of $A$ is the intersection of all closed supersets of $A$: $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$ - The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$. - The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "**A neighbourhood is an open interval.** For every $x$ and every $\\varepsilon > 0$,",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-sup-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded above, and let $u$ be an upper bound of $S$ ([[def-complete-ordered-field]]). Then",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-inf-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below, and let $\\ell$ be a lower bound of $S$ ([[def-bounded-set]]). Then",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-infimum-property",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below. Then $S$ has a greatest lower bound in $\\mathbb{R}$ ([[def-infimum]]), and it is given by $$\\inf S = -\\sup(-S), \\qquad \\text{where } -S = \\{-s : s \\in S\\}.$$ In particular the complete ordered field $\\mathbb{R}$ has the greatest-lower-bound property, which is therefore not an extra axiom: it is a consequence of the least-upper-bound property.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a **greatest lower bound**, or **infimum**, of $S$ if both of the following hold: - $\\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\\ell \\le s$ for every $s \\in S$; - $\\ell' \\le \\ell$ for every lower bound $\\ell'$ of $S$. Written out in one line: $$\\ell \\text{ is an infimum of } S \\iff \\big[(\\forall s \\in S)\\, \\ell \\le s\\big] \\text{ and } \\big[(\\forall \\ell' \\in \\mathbb{R})\\, \\big((\\forall s \\in S)\\, \\ell' \\le s\\big) \\Rightarrow \\ell' \\le \\ell\\big].$$ An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write $\\inf S$ for it.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-sup-unique",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$. If $u_1$ and $u_2$ are both least upper bounds of $S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$. If $\\ell_1$ and $\\ell_2$ are both greatest lower bounds of $S$ ([[def-infimum]]), then $\\ell_1 = \\ell_2$.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$. - $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is **bounded above** if it has an upper bound. - $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$ is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$. $F$ is a **complete ordered field** (equivalently, $F$ has the **least-upper-bound property**, or is **Dedekind complete**) if every nonempty $S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field ([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it. The notions **upper bound** and **bounded above** are already fixed by [[def-complete-ordered-field]] and are only recalled here, never redefined: $u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and $S$ is *bounded above* if it has at least one upper bound. The dual notions are: - $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$. - $S$ is **bounded below** if it has at least one lower bound. - $S$ is **bounded** if it is both bounded above and bounded below, that is, if there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-recursion",
      "source_section": "Statement",
      "quote": "Let $(N,0,\\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \\in A$, and any function $f : A \\to A$, there is a unique function $g : N \\to A$ such that $g(0) = a$ and $g(\\sigma(n)) = f(g(n))$ for all $n \\in N$.",
      "uses": [
        "1.1",
        "3.2"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.1",
        "3.2"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element",
      "uses": [
        "1.1",
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-geometric-sequence-null",
      "source_section": "Statement",
      "quote": "1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \\to 0$",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K$ with $|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-limit-unique",
      "source_section": "Statement",
      "quote": "A sequence therefore has at most one limit",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "**Convergence and Cauchyness are not defined here.** They are already fixed, for sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$ is *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the toolkit for those two notions and does not restate them. A sequence **converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the set $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "interval",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "**A neighbourhood is an open interval.** For every $x$ and every $\\varepsilon > 0$,",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L9",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity satisfies $0 < 1$;",
      "uses": [
        "1.1",
        "2.2",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c, d \\in F$. 1. **Translation invariance.** If $a < b$ then $a + c < b + c$. 2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.1",
        "2.2",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c \\in F$. 1. If $a > 0$ and $b > 0$ then $ab > 0$. 2. If $a > 0$ and $b < 0$ then $ab < 0$. 3. If $a < 0$ and $b < 0$ then $ab > 0$. 4. If $c > 0$ then $a < b \\iff ac < bc$. 5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "2.2",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1",
        "2.2",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "1.1",
        "2.2",
        "3.1",
        "3.2",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "**Comparison of two digit sequences.** Let $a \\ne b$ in $D$ and let $k$ be the least index with $a_k \\ne b_k$, which exists by [L5]; suppose $a_k = 0$ and $b_k = 2$. Then $\\Phi(b) - \\Phi(a) = \\sum_{j \\ge 0}(b_j - a_j)3^{-j-1}$ by [L2], the terms with $j < k$ v",
      "step": "1.1",
      "inputs": [
        "L5",
        "L2",
        "L1",
        "L9"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "**Values at the endpoints.** The constant sequence $\\bar 0$ has $\\Phi(\\bar 0) = 0$ and $\\gamma(0) = 0$; the constant sequence $\\bar 2$ has $\\Phi(\\bar 2) = \\sum_{k \\ge 0} 2 \\cdot 3^{-k-1} = 1$ and $\\gamma(1) = \\sum_{k \\ge 0} 2^{-k-1} = 1$, by [L2]. Both $0$ and",
      "step": "1.2",
      "inputs": [
        "L2",
        "L3",
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "**Claims 1 and 2.** For $x \\in [0,1]$ the set $A_x := \\{\\gamma(t) : t \\in C,\\ t \\le x\\}$ is nonempty and bounded above by $1$ by [L1], so $c(x) = \\sup A_x$ exists, is unique and lies in $[0,1]$ by [L1] and [L4]; that is claim 1 apart from the extension propert",
      "step": "2.1",
      "inputs": [
        "L1",
        "L4",
        "1.1",
        "1.2"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "**The two endpoints of a gap carry the same value of $\\gamma$.** Let $u < v$ with $u, v \\in C$ and $(u,v) \\cap C = \\varnothing$, and put $a := \\Phi^{-1}(u)$, $b := \\Phi^{-1}(v)$, with $k$ the least index where they differ; by step 1.1 and $u < v$ we have $a_k ",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L2",
        "L1",
        "L9"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "**Claim 4, first half.** Let $u < v$ with $u,v \\in C$ and $(u,v) \\cap C = \\varnothing$, and let $x \\in [u,v]$. Every $t \\in C$ with $t \\le x$ satisfies $t \\le u$ or $t = v$: indeed if $t > u$ then $t \\le x \\le v$ and $t \\notin (u,v)$ force $t = v$. In the firs",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.2",
        "L4",
        "2.1",
        "L9"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "**Claim 3.** Let $s \\in [0,1]$. Let $T : \\mathbb{R} \\to \\mathbb{R}$ be $T(r) := 2r$ for $r < 2^{-1}$ and $T(r) := 2r - 1$ for $r \\ge 2^{-1}$, a definition by cases on the total order, and by [L5] let $(r_n)$ satisfy $r_0 = s$ and $r_{n+1} = T(r_n)$; put $\\beta",
      "step": "3.2",
      "inputs": [
        "L5",
        "L9",
        "L6",
        "L1",
        "2.1",
        "1.2",
        "L2"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "**Claim 4, second half.** Let $x \\in [0,1] \\setminus C$. The set $A := \\{t \\in C : t \\le x\\}$ is nonempty by [L3] and bounded above by $x$, so $u := \\sup A$ exists by [L4]; by [L4] every $N_\\varepsilon(u)$ meets $A \\subseteq C$, so $u \\in \\overline{C} = C$ by ",
      "step": "4.1",
      "inputs": [
        "L3",
        "L4",
        "L9",
        "3.1",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Claims 1 and 2 are step 2.1, claim 3 is step 3.2, and claim 4 is steps 3.1 and 4.1 together; so all four hold.",
      "step": "5.1",
      "inputs": [
        "2.1",
        "3.2",
        "3.1",
        "4.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Step 2.1 proves every supremum set A_x is nonempty using the endpoint 0; step 4.1 likewise proves both left and right Cantor sets around x are nonempty."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.2 computes γ(0)=0, and step 3.2 preserves the binary endpoint 0."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.2 computes γ(1)=1, and step 3.2 proves c(1)=1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 1.1 treats s=t as the equality case of monotonicity; step 3.1 includes the closed gap endpoints."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.2 and 2.1 establish both domain endpoints, while steps 2.2–3.1 prove equal values at the two endpoints of each removed gap."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Steps 2.1 and 4.1 use unique suprema/infima after proving the defining sets nonempty; step 3.2 uses deterministic binary recursion."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `thm-cantor-function-properties` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `thm-cantor-function-properties` is not an equivalence, so it has no reverse iff direction."
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-cantor-function",
    "declared_target": "def-cantor-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-cantor-set-ternary-description",
    "declared_target": "thm-cantor-set-ternary-description",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-cantor-set-properties",
    "declared_target": "thm-cantor-set-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-cantor-set",
    "declared_target": "def-cantor-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-series-linearity",
    "declared_target": "lem-series-linearity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-sup-unique",
    "declared_target": "lem-sup-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-sup-epsilon",
    "declared_target": "lem-sup-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-infimum",
    "declared_target": "def-infimum",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-inf-epsilon",
    "declared_target": "lem-inf-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-infimum-property",
    "declared_target": "thm-infimum-property",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-power-laws",
    "declared_target": "lem-power-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-recursion",
    "declared_target": "thm-recursion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-geometric-sequence-null",
    "declared_target": "lem-geometric-sequence-null",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-limit-unique",
    "declared_target": "lem-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-cantor-function-properties",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "ex-cantor-function-values",
    "declared_target": "ex-cantor-function-values",
    "target_statement_provenance": "ai-generated",
    "targetPage": "cantor-set-baire-and-measure-zero-examples",
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

## Full text of every cited or declared item (39)

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

### `def-cantor-function`

````markdown
---
id: def-cantor-function
kind: definition
title: "The Cantor function on $[0,1]$, defined on the Cantor set through ternary digits and extended constantly across each removed interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-cantor-set-ternary-description, def-cantor-set, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, def-complete-ordered-field, def-bounded-set, lem-sup-unique, def-interval, def-injection-surjection-bijection, def-integer-power, lem-power-laws, def-sequence, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: [thm-cantor-function-properties]
aliases: [def-devils-staircase]
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
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Definition

Let $C$ be the Cantor set, $D$ the set of sequences with values in $\{0,2\}$ and
$\Phi : D \to C$ the bijection $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$ of
[[thm-cantor-set-ternary-description]]. Since $\Phi$ is a bijection it has a
two-sided inverse $\Phi^{-1} : C \to D$, and that inverse is a single function,
determined and not selected ([[def-injection-surjection-bijection]]).

**On the Cantor set.** For $x \in C$ write $a := \Phi^{-1}(x)$ and put

$$\gamma(x) \;:=\; \sum_{k=0}^{\infty} \big(a_k \cdot 2^{-1}\big)\, 2^{-k-1} .$$

Each coefficient $a_k \cdot 2^{-1}$ is $0$ or $1$, so all the terms are
nonnegative and every partial sum is at most
$\sum_{k<n} 2^{-k-1} \le \sum_{k=0}^{\infty} 2^{-k-1} = 1$
([[thm-geometric-series]], [[def-integer-power]], [[lem-power-laws]]); hence the
series converges and $\gamma(x) \in [0,1]$
([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]],
[[def-interval]]). In words: $\gamma$ halves each ternary digit of $x$ and reads
the result as a binary expansion.

**On all of $[0,1]$.** The **Cantor function** is
$c : [0,1] \to \mathbb{R}$,

$$c(x) \;:=\; \sup\{\, \gamma(t) : t \in C \text{ and } t \le x \,\} .$$

**The supremum exists and is a single real number.** The set on the right is
nonempty, because $0 \in C$ ([[def-cantor-set]]) and $0 \le x$, and it is bounded
above by $1$, because $\gamma$ takes values in $[0,1]$; so it has a least upper
bound by completeness ([[def-complete-ordered-field]], [[def-bounded-set]]), and
that bound is unique ([[lem-sup-unique]]). Since $0 \le \gamma(0) \le c(x) \le 1$,
the values of $c$ lie in $[0,1]$.

**That $c$ really extends $\gamma$**, that is, $c(t) = \gamma(t)$ for every
$t \in C$, is not an observation but a small theorem: it needs $\gamma$ to be
nondecreasing along $C$. It is claim 1 of [[thm-cantor-function-properties]],
recorded in this item's `justified_by`, and until it is proved the two symbols
are kept apart.

## Remarks

- **Why the extension is a supremum and not a case distinction.** Writing "$c$ is
  constant across each interval removed in the construction of $C$" presupposes a
  description of those intervals; the supremum formula presupposes nothing, is
  defined at every point of $[0,1]$ at once, and yields the constancy as a
  theorem (claim 4 of [[thm-cantor-function-properties]]). It also makes the
  monotonicity of $c$ immediate, since the set whose supremum is taken grows with
  $x$.

- **Nothing is claimed here about continuity.** No definition of continuity for a
  real function of a real variable is available at this point in the reading
  order, so no statement about it is made, in either direction; the properties
  proved on this page are well-definedness, monotonicity in the sense
  $c(x) \le c(y)$ for $x \le y$, surjectivity onto $[0,1]$ and constancy across
  the gaps of $C$.

- **The name.** The function is also called the *devil's staircase*, because it
  climbs from $0$ to $1$ while being constant across every gap of $C$, and the
  gaps fill up all of $[0,1]$ except a set of measure zero
  ([[thm-cantor-set-properties]]).

- **The digits are halved, not truncated.** $\gamma$ sends the ternary digit
  sequence $(a_k)$ with values in $\{0,2\}$ to the binary sequence $(a_k/2)$ with
  values in $\{0,1\}$, which is the bijection $D \to \{0,1\}^{\mathbb{N}}$ of
  claim 3 of [[thm-cantor-set-ternary-description]] read backwards. So $\gamma$ is
  the composition of $\Phi^{-1}$ with that bijection and with the binary
  summation, and its surjectivity onto $[0,1]$ is exactly the statement that
  every real of $[0,1]$ has a binary expansion, proved where it is used.
````

### `def-cantor-set`

````markdown
---
id: def-cantor-set
kind: definition
title: "The Cantor middle-thirds set as the intersection of the sets $C_n$ obtained by removing open middle thirds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval, thm-recursion, thm-induction-principle, def-integer-power, lem-power-laws, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: [def-cantor-middle-thirds-set]
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Definition

For $S \subseteq \mathbb{R}$ write

$$\tfrac{1}{3} S \;:=\; \{\, x \cdot 3^{-1} : x \in S \,\}, \qquad \tfrac{2}{3} + \tfrac{1}{3} S \;:=\; \{\, 2 \cdot 3^{-1} + x \cdot 3^{-1} : x \in S \,\},$$

and let $F : \mathcal{P}(\mathbb{R}) \to \mathcal{P}(\mathbb{R})$ be

$$F(S) \;:=\; \tfrac{1}{3} S \ \cup \ \big(\tfrac{2}{3} + \tfrac{1}{3} S\big).$$

By the recursion theorem ([[thm-recursion]]), applied to the set
$\mathcal{P}(\mathbb{R})$, the starting element $[0,1]$ ([[def-interval]]) and
the function $F$, there is a unique family $(C_n)_{n \in \mathbb{N}}$ of subsets
of $\mathbb{R}$ with

$$C_0 = [0,1], \qquad C_{n+1} = F(C_n) = \tfrac{1}{3}C_n \cup \big(\tfrac{2}{3} + \tfrac{1}{3}C_n\big) \quad (n \in \mathbb{N}).$$

The **Cantor middle-thirds set** is

$$C \;:=\; \bigcap_{n \in \mathbb{N}} C_n .$$

**The first step really is the removal of the open middle third.** Directly from
the clauses,

$$C_1 \;=\; \tfrac{1}{3}[0,1] \cup \big(\tfrac{2}{3} + \tfrac{1}{3}[0,1]\big) \;=\; [0, \tfrac13] \cup [\tfrac23, 1] \;=\; [0,1] \setminus (\tfrac13, \tfrac23),$$

the middle equality because $x \mapsto x \cdot 3^{-1}$ is an order isomorphism of
$\mathbb{R}$ onto itself with inverse $x \mapsto 3x$ ([[def-ordered-field]],
[[lem-of-sign-rules]]), and the last because $0 \le x \le 1$ splits, by
totality of the order, into $x \le \tfrac13$, $\tfrac13 < x < \tfrac23$ and
$x \ge \tfrac23$. The recursion then performs the same operation inside each of
the two scaled copies, which is what "removing the open middle thirds" names.

**Every $C_n$ lies in $[0,1]$**, by induction on $n$ ([[thm-induction-principle]]):
$C_0 = [0,1]$; and if $C_n \subseteq [0,1]$ then $\tfrac13 C_n \subseteq [0,\tfrac13]$
and $\tfrac23 + \tfrac13 C_n \subseteq [\tfrac23, 1]$, so
$C_{n+1} \subseteq [0,1]$ ([[lem-of-add-order]], [[lem-of-sign-rules]]). The same
computation shows that **the two halves of $C_{n+1}$ are disjoint**, the first
lying in $[0,\tfrac13]$ and the second in $[\tfrac23,1]$, and $\tfrac13 < \tfrac23$
([[cor-of-one-positive]]).

**The family is nested**, $C_{n+1} \subseteq C_n$ for every $n$, again by
induction. For $n = 0$ this is $C_1 = [0,\tfrac13] \cup [\tfrac23,1] \subseteq
[0,1]$. And $F$ is monotone, in the sense that $S \subseteq T$ implies
$F(S) \subseteq F(T)$, directly from the displayed description of $F$; so
$C_{n+1} \subseteq C_n$ gives $C_{n+2} = F(C_{n+1}) \subseteq F(C_n) = C_{n+1}$.
Consequently $C = \bigcap_n C_n \subseteq C_m$ for every $m$, and
$\bigcap_n C_{n+1} = \bigcap_n C_n = C$.

**Powers.** Here $3^{-n}$ means $(3^{-1})^n$, the integer power of
[[def-integer-power]], so that $3^{0} = 1$, $3^{-(n+1)} \cdot 3 = 3^{-n}$ and
$3^{-n} > 0$ for every $n$ ([[lem-power-laws]], [[def-complete-ordered-field]]).

## Remarks

- **Why the self-similar recursion rather than a description by digits.** The
  clause $C_{n+1} = F(C_n)$ is a single application of [[thm-recursion]] to one
  explicitly given function on $\mathcal{P}(\mathbb{R})$, so nothing is selected
  at any stage and no listing of the $2^n$ intervals making up $C_n$ has to be
  constructed. Every structural property below is then proved by induction on
  $n$ through $F$. The description by ternary digits is a theorem about $C$, not
  its definition, and it is [[thm-cantor-set-ternary-description]].

- **$C$ is not empty.** $0 \in C_n$ for every $n$, by induction:
  $0 \in [0,1]$, and $0 \in C_n$ gives $0 = 0 \cdot 3^{-1} \in \tfrac13 C_n
  \subseteq C_{n+1}$. Likewise $1 \in C$, since $1 \in C_n$ gives
  $1 = \tfrac23 + 1 \cdot \tfrac13 \in C_{n+1}$. So $C$ contains at least the two
  endpoints; that it is in fact uncountable is
  [[thm-cantor-set-properties]].

- **The construction with a different proportion.** Replacing "middle third" by
  an interval of length $4^{-n}$ removed at stage $n$ produces a set that is
  closed, has empty interior and is *not* of measure zero
  ([[def-fat-cantor-set]]). So none of the qualitative properties of $C$ proved
  on this page is a consequence of its being nowhere dense, and the two
  constructions are kept apart deliberately.
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

### `def-infimum`

````markdown
---
id: def-infimum
kind: definition
title: "Greatest lower bound (infimum)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-set]
justified_by: [lem-sup-unique]
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$. Then $\ell$ is a
**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:

- $\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\ell \le s$ for
  every $s \in S$;
- $\ell' \le \ell$ for every lower bound $\ell'$ of $S$.

Written out in one line:

$$\ell \text{ is an infimum of } S \iff \big[(\forall s \in S)\, \ell \le s\big] \text{ and } \big[(\forall \ell' \in \mathbb{R})\, \big((\forall s \in S)\, \ell' \le s\big) \Rightarrow \ell' \le \ell\big].$$

An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write
$\inf S$ for it.

## Remarks

- This is the exact dual of the least upper bound (supremum) of
  [[def-complete-ordered-field]]: reverse every inequality and swap "least" for
  "greatest". The two notions are related by reflection through $0$
  ([[lem-reflection]]).
- Existence is deliberately *not* part of the definition. That every nonempty
  subset of $\mathbb{R}$ which is bounded below actually has an infimum is a
  theorem, [[thm-infimum-property]], derived from the least-upper-bound property;
  it is not an axiom and it is not free.
- As with a supremum, an infimum need not belong to $S$; when it does, it is the
  minimum of $S$ ([[def-max-min]]).
- The usable form of the definition in later arguments is the epsilon
  characterisation [[lem-inf-epsilon]]: $\ell = \inf S$ exactly when $\ell$ is a
  lower bound that cannot be raised by any positive amount without losing that
  property.
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

### `def-monotone-sequence`

````markdown
---
id: def-monotone-sequence
kind: definition
title: "Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-complete-ordered-field, def-bounded-set, def-nat-order, thm-nat-linear-order, lem-nat-discrete, thm-induction-principle]
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Def. 3.13)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]], and with
$\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

- **nondecreasing** when $x_j \le x_k$ for all $j \le k$;
- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;
- **nonincreasing** when $x_j \ge x_k$ for all $j \le k$;
- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing;
- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
  monotone, that is when there is $K \in \mathbb{N}$ such that the restriction of
  the comparison to indices $\ge K$ is one-signed.

An increasing sequence is nondecreasing and a decreasing sequence is
nonincreasing, since $j \le k$ means $j < k$ or $j = k$ and the second case gives
equality. A sequence that is both nondecreasing and nonincreasing is constant.

**Consecutive comparisons suffice, and that is an induction.** The four
conditions above quantify over *all* pairs of indices, but what one checks in
practice, and what a recursive construction delivers, is the comparison of
consecutive terms. The two agree:

> $(x_k)$ is nondecreasing **if and only if** $x_k \le x_{\sigma(k)}$ for every
> $k \in \mathbb{N}$, and $(x_k)$ is increasing **if and only if**
> $x_k < x_{\sigma(k)}$ for every $k \in \mathbb{N}$; likewise, with the
> inequalities reversed, for nonincreasing and decreasing.

The forward implications are the instances $j = k$, $k = \sigma(k)$ of the
definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
suppose $x_i \le x_{\sigma(i)}$ for every $i$ and fix $k$; we show by induction
on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For
$k = 0$: $j \le 0$ forces $j = 0$, and $x_0 \le x_0$. Assume the statement for
$k$ and let $j \le \sigma(k)$. If $j = \sigma(k)$ then $x_j \le x_{\sigma(k)}$ by
reflexivity. Otherwise $j < \sigma(k)$, and then $j \le k$: were $k < j$ we would
have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by
totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction
hypothesis gives $x_j \le x_k$, and $x_k \le x_{\sigma(k)}$ by assumption, so
$x_j \le x_{\sigma(k)}$ by transitivity. This completes the induction. The three
remaining equivalences are the same argument with $\le$ replaced by $<$,
$\ge$ or $>$, transitivity of the strict order being used in the same place.

**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is
bounded below by its first term $x_0$, and a nonincreasing sequence is bounded
above by $x_0$, both immediately from the definition with $j = 0$. So for a
nondecreasing sequence the only substantive question is whether it is bounded
above, and for a nonincreasing sequence whether it is bounded below. The range of
$(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is
bounded above, bounded below or bounded in the sense of [[def-bounded-set]]
exactly when the sequence is.

## Remarks

- **The naming is the one that keeps "increasing" strict.** Some texts use
  *increasing* for what is called *nondecreasing* here and *strictly increasing*
  for what is called *increasing*. This library follows the convention in which
  the unqualified word is strict, and always writes *nondecreasing* when
  equality is allowed, so that no statement on this page depends on which
  convention a reader arrives with. Where a proof needs the weak form it says
  *nondecreasing*, and where it needs the strict form it says *increasing*.

- **Eventual monotonicity is exactly monotonicity of a tail**, and by
  [[lem-limit-of-tail]] a sequence and its tails converge to the same limits and
  are Cauchy together. So every convergence statement about monotone sequences on
  this page extends verbatim to eventually monotone sequences, with the limit
  unchanged; only statements about specific terms, such as the identification of
  the limit as the supremum of the *whole* range, need the hypothesis at every
  index. The monotone convergence theorem is a case in point: an eventually
  nondecreasing bounded sequence converges, but to the supremum of the range of
  the monotone tail, which may be smaller than the supremum of the whole range.

- **Monotone is strictly weaker than strictly monotone, and neither is generic.**
  A constant sequence is monotone and not strictly monotone; the sequence with
  terms $1$ and $-1$ alternating ([[lem-alternating-sequence]]) is not monotone
  and not eventually monotone, since every tail contains both values infinitely
  often. That sequence is bounded, so boundedness alone gives neither form of
  monotonicity; what it does give is a monotone *subsequence*
  ([[lem-peak-monotone-subsequence]]), and that is the route to
  Bolzano-Weierstrass.
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

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
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

### `ex-cantor-function-values`

````markdown
---
id: ex-cantor-function-values
kind: example
title: "The Cantor function takes the value $1/2$ on all of $[1/3, 2/3]$, and its values at $1/9$, $1/4$ and $7/9$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cantor-function-properties, def-cantor-function, ex-cantor-set-in-ternary, thm-cantor-set-ternary-description, def-cantor-set, thm-geometric-series, def-series, lem-series-linearity, thm-nonnegative-series-bounded-partial-sums, def-interval, def-integer-power, lem-power-laws, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
pipeline_run: null
---

## Example

Let $c$ be the Cantor function ([[def-cantor-function]]). Then

$$c(x) = \tfrac12 \ \text{ for every } x \in [\tfrac13, \tfrac23], \qquad c(\tfrac19) = \tfrac14, \qquad c(\tfrac14) = \tfrac13, \qquad c(\tfrac79) = \tfrac34 .$$

Each value is computed by halving the ternary digits and reading the result in
base two, which is what [[def-cantor-function]] prescribes on $C$, and by the
constancy across gaps of [[thm-cantor-function-properties]] off $C$.

## Facts & Assumptions

**Given:** The Cantor set $C$, the bijection $\Phi$ of [[thm-cantor-set-ternary-description]], and the functions $\gamma$ and $c$ of [[def-cantor-function]]. Write $\sigma a$ for the shifted sequence.

[L1] $\Phi(a) = \sum_{k \ge 0}a_k3^{-k-1}$ is a bijection from the $\{0,2\}$-valued sequences onto $C$, and $\gamma(\Phi(a)) = \sum_{k \ge 0}(a_k 2^{-1})2^{-k-1}$ ([[thm-cantor-set-ternary-description]], [[def-cantor-function]], [[def-series]]).

[L2] Geometric tails: $\sum_{k \ge m} 2 \cdot 3^{-k-1} = 3^{-m}$ and $\sum_{k \ge m} 2^{-k-1} = 2^{-m}$; convergent series add and scale termwise, and $\sum_{k \ge 0}t_k = t_0 + \sum_{k \ge 1}t_k$ ([[thm-geometric-series]], [[lem-series-linearity]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-integer-power]], [[lem-power-laws]]).

[L3] Digit sequences: $\tfrac13 = \Phi(0,2,2,2,\dots)$, $\tfrac23 = \Phi(2,0,0,0,\dots)$, $\tfrac19 = \Phi(0,0,2,2,2,\dots)$ and $\tfrac14 = \Phi(0,2,0,2,\dots)$, the alternating sequence ([[ex-cantor-set-in-ternary]]).

[L4] $c(t) = \gamma(t)$ for $t \in C$; $c$ is constant on $[u,v]$ whenever $u < v$, $u,v \in C$ and $(u,v) \cap C = \varnothing$ ([[thm-cantor-function-properties]], claims 1 and 4).

[L5] $C \subseteq C_1 = [0,\tfrac13] \cup [\tfrac23, 1]$ ([[def-cantor-set]], [[def-interval]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$, $4 > 0$ and $\tfrac13 < \tfrac23$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 **One more digit sequence.** $\tfrac79 = \Phi(2,0,2,2,2,\dots)$: by [L2] that value is $2 \cdot 3^{-1} + 0 + \sum_{k \ge 2} 2 \cdot 3^{-k-1} = \tfrac23 + 3^{-2} = \tfrac23 + \tfrac19 = \tfrac79$. [given, L1, L2, L6]

1.2 **The value of $\gamma$ at the alternating sequence.** Let $b$ be the $\{0,1\}$-valued sequence with $b_k = 0$ for even $k$ and $b_k = 1$ for odd $k$, and put $B := \sum_{k \ge 0} b_k 2^{-k-1}$, which converges by [L2]. Splitting off the first term twice as in [L2] gives $B = 0 \cdot 2^{-1} + 2^{-1}B'$ with $B' := \sum_{k \ge 0}b_{k+1}2^{-k-1}$, and $B' = 1 \cdot 2^{-1} + 2^{-1}B$, since shifting twice returns $b$. Hence $B = 2^{-1}(2^{-1} + 2^{-1}B) = 4^{-1} + 4^{-1}B$, so $(1 - 4^{-1})B = 4^{-1}$ and $B = \tfrac13$ by [L6]. [given, L2, L6]

2.1 **The five values of $\gamma$.** By [L1], [L2] and [L3]: $\gamma(\tfrac13) = \sum_{k \ge 1}2^{-k-1} = 2^{-1}$; $\gamma(\tfrac23) = 1 \cdot 2^{-1} = 2^{-1}$; $\gamma(\tfrac19) = \sum_{k \ge 2}2^{-k-1} = 2^{-2} = \tfrac14$; $\gamma(\tfrac14) = B = \tfrac13$ by step 1.2, the halved digits of the alternating ternary sequence being exactly $b$; and $\gamma(\tfrac79) = 2^{-1} + 0 + \sum_{k \ge 2}2^{-k-1} = \tfrac12 + \tfrac14 = \tfrac34$ by step 1.1. [step 1.1, step 1.2, L1, L2, L3, L6]

3.1 **The values of $c$.** All five points lie in $C$, so $c$ agrees with $\gamma$ there by [L4]: $c(\tfrac19) = \tfrac14$, $c(\tfrac14) = \tfrac13$, $c(\tfrac79) = \tfrac34$ and $c(\tfrac13) = c(\tfrac23) = \tfrac12$. Moreover $\tfrac13 < \tfrac23$ by [L6], both lie in $C$, and $(\tfrac13,\tfrac23) \cap C = \varnothing$ by [L5]; so [L4] gives that $c$ is constant on $[\tfrac13,\tfrac23]$, with the value $c(\tfrac13) = \tfrac12$. [step 2.1, L1, L3, L4, L5, L6] ∎

## Remarks

- **The staircase is visible in these five numbers.** $c$ rises from $c(\tfrac19) = \tfrac14$ to $c(\tfrac13) = \tfrac12$ across the second stage, stays at $\tfrac12$ across the whole middle third, and reaches $c(\tfrac79) = \tfrac34$; between those it is constant on each removed interval ([[thm-cantor-function-properties]]). All of the rise happens on $C$, a set of measure zero ([[thm-cantor-set-properties]]).

- **$c(1/4) = 1/3$ is the value at a non-endpoint.** $1/4$ lies in $C$ and is the endpoint of no removed interval ([[cex-cantor-point-that-is-not-an-endpoint]]), so $c$ is not constant on any neighbourhood of it; the computation of step 1.2 is the only one of the five that cannot be read off a finite digit string.

- **Halving digits is a bijection, not an approximation.** The value $\gamma(x)$ is the exact sum of the halved-digit series, and the two series are compared term by term, never numerically; this is why $c(\tfrac13)$ and $c(\tfrac23)$ come out equal, the sequences $(0,2,2,2,\dots)$ and $(2,0,0,0,\dots)$ halving to $(0,1,1,1,\dots)$ and $(1,0,0,0,\dots)$, both summing to $\tfrac12$.
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

### `lem-geometric-sequence-null`

````markdown
---
id: lem-geometric-sequence-null
kind: lemma
title: "For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, lem-power-laws, lem-bernoulli-inequality, lem-power-monotone, cor-archimedean-reciprocal, thm-of-archimedean, def-real-limit, def-sequence, def-divergence-to-infinity, lem-of-inverse-positive, lem-of-abs-value, def-abs-value, cor-of-one-positive, prop-of-reciprocal-order, thm-induction-principle, prop-of-multiply-inequalities, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-cauchy-rationals-no-rational-limit]
aliases: []
landmark: false
proof_strategy: cases
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
    - title: "Geometric progression (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_progression"
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.20(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5 (Lem 6.5.2)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).

1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \to 0$
   ([[def-real-limit]]).
2. If $|r| > 1$ then $(|r|^k)$ **diverges to $+\infty$**
   ([[def-divergence-to-infinity]]).

Claim 2 is stated for $|r|^k$ and not for $r^k$ on purpose: for $r < -1$ the
terms $r^k$ alternate in sign and are unbounded, so they neither converge nor
diverge to $+\infty$; what is true of them is the statement about their absolute
values.

Both claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and
the Archimedean property. Nothing here needs the least-upper-bound property
except through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].

## Facts & Assumptions

**Given:** A real $r$, with integer powers as in [[def-integer-power]]; for $n \in \mathbb{N}$, the symbol $n$ also denotes the canonical natural $n \cdot 1_{\mathbb{R}}$ where it occurs in an arithmetic expression.

[L1] Absolute value: $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x|\,|y|$; and $|x| = x$ when $x \ge 0$, so in particular $|1| = 1$ because $1 > 0$ ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]]).

[L2] Induction principle ([[thm-induction-principle]]), and the recursion clauses $a^0 = 1$, $a^{k+1} = a^k a$ defining integer powers ([[def-integer-power]]).

[L3] Bernoulli's inequality: $(1+x)^n \ge 1 + nx$ for $x \ge -1$ and $n \in \mathbb{N}$ ([[lem-bernoulli-inequality]]).

[L4] Power laws: $(ab)^n = a^n b^n$, and $a^n \ne 0$ when $a \ne 0$ ([[lem-power-laws]]).

[L5] Powers and order: $a \ge 0$ gives $a^n \ge 0$ and $a > 0$ gives $a^n > 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).

[L6] Reciprocals: $a > 0$ gives $a^{-1} > 0$; $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); and $0 < t < 1$ exactly when $1/t > 1$ ([[prop-of-reciprocal-order]]).

[L7] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n$ ([[thm-of-archimedean]]); and for every $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L8] Canonical naturals: $n > 0$ for $n \ge 1$, and $m \le n$ in $\mathbb{N}$ gives $m \le n$ in $\mathbb{R}$ ([[lem-of-naturals-positive]]).

[L9] Multiplying inequalities of nonnegatives: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$ ([[prop-of-multiply-inequalities]]).

[L10] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

## Proof

**Proof technique:** cases.

1.1 First, $|r^k| = |r|^k$ for every $k \in \mathbb{N}$, by induction: at $k = 0$ both sides are $|1| = 1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [given, L1, L2]

1.2 **Case zero.** Assume $r = 0$. [given, assume-case zero]

1.3 **Case small.** Assume $0 < |r| < 1$. [given, assume-case small]

1.4 **Case large.** Assume $|r| > 1$. [given, assume-case large]

2.1 In case zero, $r^k = 0$ for every $k \ge 1$: indeed $r^1 = r^0 r = 1 \cdot 0 = 0$, and if $r^k = 0$ then $r^{k+1} = r^k r = 0$, so induction gives the claim from $k = 1$ on. [step 1.2, L2]

2.2 In case small, put $s := 1/|r|$, which is defined since $|r| \ne 0$, and $h := s - 1$. Then $s > 1$ and $h > 0$. [step 1.3, L1, L6, choose]

2.3 In case large, put $h' := |r| - 1$, so $h' > 0$ and $|r| = 1 + h'$. [step 1.4, choose]

3.1 In case zero, for every rational $\varepsilon > 0$ and every $k \ge 1$ we have $|r^k - 0| = |0| = 0 < \varepsilon$, so $r^k \to 0$ and claim 1 holds. [step 2.1, L1, L11]

3.2 In case small, $|r|^k s^k = (|r| s)^k = 1^k = 1$, so $|r|^k = 1/s^k$, and $s^k > 0$. [step 2.2, L4, L5]

3.3 In case small, Bernoulli applied to $h > 0 \ge -1$ gives $s^k = (1+h)^k \ge 1 + kh > kh > 0$ for every $k \ge 1$, using $1 > 0$ and $kh > 0$. [step 2.2, L3, L8, L9]

3.4 In case large, Bernoulli applied to $h' > 0 \ge -1$ gives $|r|^k = (1 + h')^k \ge 1 + k h'$ for every $k \in \mathbb{N}$. [step 2.3, L3]

3.5 In case large, let $M \in \mathbb{R}$ be arbitrary and use [L7] to fix a natural $n \ge 1$ with $M/h' < n$; then $M \le n h'$, since multiplying $M/h' \le n$ by $h' > 0$ preserves the inequality. [step 2.3, L7, L9, choose]

3.6 In case small, let $\varepsilon > 0$ be rational; then $\varepsilon h > 0$, so [L7] supplies a natural $N \ge 1$ with $1/N < \varepsilon h$, whence $1/(Nh) \le \varepsilon$ on multiplying by $1/h > 0$. [step 2.2, L6, L7, L9, choose]

4.1 In case small, combining steps 3.2 and 3.3: $0 < kh < s^k$ gives $|r|^k = 1/s^k < 1/(kh)$ for every $k \ge 1$. [step 3.2, step 3.3, L6]

4.2 In case large, for every $k \ge n$ we have $k h' \ge n h' \ge M$, so $|r|^k \ge 1 + k h' \ge 1 + M > M$, the last step because $1 > 0$. [step 3.4, step 3.5, L1, L8, L9]

5.1 In case small, for every $k \ge N$ we have $kh \ge Nh > 0$, hence $1/(kh) \le 1/(Nh) \le \varepsilon$, and therefore $|r^k - 0| = |r^k| = |r|^k < 1/(kh) \le \varepsilon$. [step 1.1, step 4.1, step 3.6, L6, L8, L9]

5.2 In case large, an index $n$ has been produced for an arbitrary real $M$ with $|r|^k > M$ for all $k \ge n$, which is exactly divergence to $+\infty$: claim 2 holds. [step 4.2, L11]

6.1 In case small, the rational $\varepsilon > 0$ was arbitrary and the index $N$ was produced from it, so $r^k \to 0$ and claim 1 holds. [step 5.1, L11]

7.1 The hypothesis $|r| < 1$ of claim 1 is exhausted by cases zero and small, since $|r| \ge 0$ with $|r| = 0$ exactly when $r = 0$, so trichotomy leaves only $0 < |r| < 1$; the hypothesis $|r| > 1$ of claim 2 is case large. Both claims are therefore established. [step 3.1, step 5.2, step 6.1, L1, L10, cases: zero small or large, cases-exhaustive] ∎

## Remarks

- **The two claims are not one claim in disguise.** For $|r| > 1$ the sequence
  $(r^k)$ itself has no limiting behaviour to record when $r$ is negative: its
  terms alternate in sign and grow, so it neither converges nor diverges to
  $+\infty$ nor to $-\infty$. Stating claim 2 for $|r|^k$ is what makes it true
  as written.

- **The boundary $|r| = 1$ is excluded and is genuinely different.** For $r = 1$
  the sequence is constant $1$; for $r = -1$ it is the alternating sequence
  ([[lem-alternating-sequence]]), which is bounded and divergent
  ([[fs-bounded-implies-convergent]]). So neither claim extends to $|r| = 1$, and
  the two cases at the boundary do not even agree with each other.

- **Where this is used.** Claim 1 supplies the null sequence $c^{k}$ that makes a
  contractive sequence Cauchy ([[thm-contractive-implies-cauchy]]) and the null
  sequence $(1/10)^n$ that identifies the limit of the decimal truncations of
  $\sqrt 2$ ([[cex-cauchy-rationals-no-rational-limit]]).
````

### `lem-inf-epsilon`

````markdown
---
id: lem-inf-epsilon
kind: lemma
title: "Epsilon characterisation of the infimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-sup-epsilon, thm-infimum-property, lem-reflection, def-bounded-set,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below, and let $\ell$ be a
lower bound of $S$ ([[def-bounded-set]]). Then

$$\ell = \inf S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } s < \ell + \varepsilon.$$

In words: among the lower bounds of $S$, the infimum is exactly the one that
cannot be raised by any positive amount and still bound $S$ from below.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, a lower bound $\ell$ of $S$, and the reflection $T := -S = \{-s : s \in S\}$.

[L1] Reflection, at the level of sets: $S$ is nonempty exactly when $T$ is; $\ell$ is a lower bound of $S$ exactly when $-\ell$ is an upper bound of $T$; and $S$ is bounded below exactly when $T$ is bounded above ([[lem-reflection]]). Elementwise, negation reverses the order: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a < b$ exactly when $-b < -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns it back ([[lem-of-add-order]]).

[L2] Every nonempty $S \subseteq \mathbb{R}$ bounded below has an infimum, and $\inf S = -\sup(-S) = -\sup T$ ([[thm-infimum-property]]).

[L3] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $v$ of $X$, one has $v = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $v - \varepsilon < x$ ([[lem-sup-epsilon]]).

## Proof

**Proof technique:** direct.

1.1 Since $S$ is nonempty and bounded below and $\ell$ is a lower bound of $S$, the set $T$ is nonempty and $-\ell$ is an upper bound of $T$, so $T$ is nonempty and bounded above. [given, L1]

1.2 For $s \in \mathbb{R}$ and $\varepsilon > 0$, negation turns the inequality $(-\ell) - \varepsilon < -s$ into $s < \ell + \varepsilon$ and back, because $-(-s) = s$ and $-\big((-\ell) - \varepsilon\big) = \ell + \varepsilon$. [L1, algebra]

2.1 By [L2] the infimum of $S$ exists and equals $-\sup T$; hence $\ell = \inf S$ holds if and only if $\ell = -\sup T$, which by negating both sides holds if and only if $-\ell = \sup T$. [step 1.1, L2, L1]

3.1 Applying [L3] to the nonempty bounded-above set $T$ and its upper bound $-\ell$: $-\ell = \sup T$ if and only if for every $\varepsilon > 0$ there is $t \in T$ with $(-\ell) - \varepsilon < t$. [step 1.1, step 2.1, L3]

4.1 The elements of $T$ are exactly the $-s$ with $s \in S$, so by 1.2 the condition "there is $t \in T$ with $(-\ell) - \varepsilon < t$" is equivalent to "there is $s \in S$ with $s < \ell + \varepsilon$". [step 1.2, step 3.1, L1]

5.1 Chaining the equivalences, $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$. [step 2.1, step 3.1, step 4.1] ∎
````

### `lem-limit-unique`

````markdown
---
id: lem-limit-unique
kind: lemma
title: "A sequence has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, def-sequence, thm-of-archimedean, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits are unique"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and reals $x, y$ such that $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence: $(x_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in any ordered field, in particular in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|u| \ge 0$, and $|u| = 0$ if and only if $u = 0$, and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L4] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$. Either route gives this: density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) applied to the pair $0 < \eta$; or the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$, which yields a natural $n \ge 1$ with $1/\eta < n$ and hence $0 < 1/n < \eta$ ([[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$. Trichotomy, so $u \ne 0$ together with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; transitivity and irreflexivity of $<$; and, since $u \le v$ means $u < v$ or $u = v$, the mixed form $u \le v < w \Rightarrow u < w$ ([[def-complete-ordered-field]], [[def-ordered-field]]). Adding two strict inequalities: $a < b$ and $c < d$ give $a + c < b + d$ ([[lem-of-add-order]]). Multiplying by a positive: for $c > 0$, $a < b$ gives $ac < bc$ ([[lem-of-sign-rules]]). Halving a positive: $1 > 0$ ([[cor-of-one-positive]]), so $2 := 1 + 1 > 0$ because the positives are closed under addition ([[def-ordered-field]]), hence $2^{-1} > 0$ ([[lem-of-inverse-positive]]) and $\eta/2 = \eta \cdot 2^{-1} > 0$ whenever $\eta > 0$ ([[lem-of-sign-rules]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices $K_1, K_2$ admit an index $k$ with $k \ge K_1$ and $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $x \ne y$. [assume-contra]

2.1 Then $x - y \ne 0$, so $|x - y| \ne 0$ while $|x - y| \ge 0$; by trichotomy $|x - y| > 0$, and hence $|x - y|/2 > 0$. [step 1.1, L3, L5]

3.1 Choose a rational $\varepsilon$ with $0 < \varepsilon < |x - y|/2$; multiplying that inequality by $2 > 0$ and using $(|x - y|/2) \cdot 2 = |x - y|$ gives $2\varepsilon < |x - y|$. [step 2.1, L4, L5, algebra, choose]

4.1 Since $(x_k)$ converges to $x$ there is $K_1$ with $|x_k - x| < \varepsilon$ for all $k \ge K_1$, and since $(x_k)$ converges to $y$ there is $K_2$ with $|x_k - y| < \varepsilon$ for all $k \ge K_2$. [step 3.1, L1]

5.1 Fix an index $k$ with $k \ge K_1$ and $k \ge K_2$; then $|x - y| = |(x - x_k) + (x_k - y)| \le |x - x_k| + |x_k - y| = |x_k - x| + |x_k - y|$, while adding the two strict inequalities of step 4.1 gives $|x_k - x| + |x_k - y| < \varepsilon + \varepsilon = 2\varepsilon$; composing the non-strict inequality with the strict one yields $|x - y| < 2\varepsilon$. [step 4.1, L2, L3, L5, L6]

6.1 Combining, $2\varepsilon < |x - y| < 2\varepsilon$, so $2\varepsilon < 2\varepsilon$, which contradicts irreflexivity of the strict order. [step 3.1, step 5.1, L5]

7.1 The assumption $x \ne y$ is therefore untenable, so $x = y$: a sequence of reals has at most one limit. [step 6.1, discharge-contradiction] ∎

## Remarks

- Uniqueness is what licenses the notation $\lim_{k} x_k$ and the phrase *the* limit. Without it the symbol would not denote. This library writes $\lim_k x_k$ only for sequences already known to converge, exactly as it writes $\sup S$ only for sets already known to have a supremum ([[rem-sup-conventions]]).

- The proof uses only that $\mathbb{R}$ is an ordered field in which arbitrarily small positive rationals exist, that is, an Archimedean ordered field ([[thm-of-archimedean]]). Completeness is not needed: limits are unique in $\mathbb{Q}$ too, where many sequences fail to have one.

- The hypothesis is genuinely about a single sequence having two limits. Two *different* sequences may of course share a limit, and a sequence with no limit at all is not excluded by anything here.
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

### `lem-power-laws`

````markdown
---
id: lem-power-laws
kind: lemma
title: "Laws of integer exponents"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, thm-induction-principle, def-field, def-int-operations, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-nat-embeds-int, thm-int-comm-ring]
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
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in
[[def-integer-power]].

1. For all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.
2. If $a \ne 0$ then $a^n \ne 0$ for every $n \in \mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \in \mathbb{Z}$ ([[def-int-operations]]).
3. If $a \ne 0$ and $b \ne 0$ then all three identities of claim 1 hold for all $m, n \in \mathbb{Z}$.

## Facts & Assumptions

**Given:** Elements $a, b$ of a field $F$, naturals $m, n, p, q, k$ and integers ranged over by $m, n$ in claims 2 and 3.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$ for $n \in \mathbb{N}$; and $a^{-n} := (a^n)^{-1}$ for $a \ne 0$ and $n \ge 1$, the two clauses agreeing at $n = 0$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Field arithmetic: multiplication is associative and commutative with identity $1$, and every nonzero element has an inverse ([[def-field]]); inverses are unique ([[lem-of-inverse-unique]], which states uniqueness and nothing further), and HENCE, for $x, y \ne 0$, $(xy)^{-1} = x^{-1} y^{-1}$ and $(x^{-1})^{-1} = x$, since $(xy)(x^{-1}y^{-1}) = 1$ and $x^{-1}x = 1$ exhibit inverses that uniqueness then identifies.

[L4] A field has no zero divisors: $xy = 0$ implies $x = 0$ or $y = 0$ ([[lem-of-no-zero-divisors]]).

[L5] $\mathbb{Z}$ is a commutative ring in which every element is $\iota(k)$ or $-\iota(k)$ for a unique natural $k$ ([[thm-int-comm-ring]], [[lem-nat-embeds-int]], [[def-int-operations]]); we write $k$ for $\iota(k)$.

## Proof

**Proof technique:** induction.

1.1 Base cases at $n = 0$ for the addition law, the product law and nonvanishing: $a^{m+0} = a^m = a^m \cdot 1 = a^m a^0$ for every $m \in \mathbb{N}$; $(ab)^0 = 1 = 1 \cdot 1 = a^0 b^0$; and if $a \ne 0$ then $a^0 = 1 \ne 0$. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $a^{m+n} = a^m a^n$ for all $m \in \mathbb{N}$, $(ab)^n = a^n b^n$, and $a^n \ne 0$ whenever $a \ne 0$. The iterated-power law $(a^m)^n = a^{mn}$ is deliberately NOT carried in this hypothesis: its successor step needs the addition law at the exponent pair $(mn, m)$, whose second entry is not the current stage, so that law must be finished first and the iterated law proved afterwards. [ih]

1.3 For $a \ne 0$ and every integer $j$, $a^{-j} = (a^j)^{-1}$: for $j \ge 0$ this is the definition together with the agreement of the two clauses at $j = 0$, and for $j = -k$ with $k \ge 1$ it reads $a^{k} = (a^{-k})^{-1}$, which holds because $a^{-k} = (a^k)^{-1}$ and $(x^{-1})^{-1} = x$ at $x = a^{k}$. That last substitution needs $a^{k} \ne 0$, which is NOT free here and must not be read off the definition, since the definition of the negative clause is what is being justified; it is instead a self-contained induction on $k$, from $a^{0} = 1 \ne 0$ and the fact that $a^{k+1} = a^{k}a$ is a product of two nonzero elements of a field, hence nonzero. [L1, L2, L3, L4, L5]

2.1 Successor step for the addition law, the product law and nonvanishing: $a^{m+(n+1)} = a^{(m+n)+1} = a^{m+n} a = (a^m a^n) a = a^m (a^n a) = a^m a^{n+1}$ for every $m \in \mathbb{N}$; $(ab)^{n+1} = (ab)^n (ab) = (a^n b^n)(ab) = (a^n a)(b^n b) = a^{n+1} b^{n+1}$; and if $a \ne 0$ then $a^{n+1} = a^n a$ is a product of two nonzero elements, hence nonzero. [step 1.2, L1, L3, L4]

3.1 By the induction principle, for all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$ and $(ab)^n = a^n b^n$, and $a^n \ne 0$ whenever $a \ne 0$. The addition law is thereby available at EVERY pair of natural exponents, which is exactly what the iterated-power law needs. [step 1.1, step 2.1, L2]

4.1 The iterated-power law for natural exponents, $(a^m)^n = a^{mn}$, by a second induction on $n$ with $m \in \mathbb{N}$ fixed: at $n = 0$ both sides are $1$, since $(a^m)^0 = 1 = a^0 = a^{m \cdot 0}$; and if $(a^m)^n = a^{mn}$ then $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$, where the third equality is the addition law of step 3.1 at the pair $(mn, m)$, legitimate precisely because that law is by now proved for all pairs of naturals. This completes claim 1. [step 3.1, L1, L2, L3]

4.2 For $a \ne 0$ and every integer $j$, $a^{j+1} = a^j a$: for $j \ge 0$ this is the recursion clause, and for $j = -k$ with $k \ge 1$ we compute $a^{-k} a = (a^k)^{-1} a = (a^{k-1} a)^{-1} a = (a^{k-1})^{-1} a^{-1} a = (a^{k-1})^{-1} = a^{-(k-1)} = a^{-k+1}$. [step 3.1, step 1.3, L1, L3]

4.3 For $a, b \ne 0$ the product law holds for all integers $n$: for $n \ge 0$ it is step 3.1, and for $n = -k$ with $k \ge 1$ we get $(ab)^{-k} = ((ab)^k)^{-1} = (a^k b^k)^{-1} = (a^k)^{-1}(b^k)^{-1} = a^{-k} b^{-k}$. [step 3.1, step 1.3, L3, L5]

5.1 For $a \ne 0$, every integer $j$ and every natural $k$, $a^{j+k} = a^j a^k$, by induction on $k$: the case $k = 0$ is $a^j = a^j \cdot 1$, and if $a^{j+k} = a^j a^k$ then $a^{j+k+1} = a^{j+k} a = a^j a^k a = a^j a^{k+1}$ by step 4.2 applied to the integer $j+k$ and by the recursion clause. [step 4.2, L1, L2, L3]

6.1 For $a \ne 0$ the addition law holds for all integers $m, n$: writing $n = k$ or $n = -k$ with $k \in \mathbb{N}$, the case $n = k$ is step 5.1, while for $n = -k$ step 5.1 applied to the integer $m - k$ gives $a^m = a^{(m-k)+k} = a^{m-k} a^k$, hence $a^{m-k} = a^m (a^k)^{-1} = a^m a^{-k}$. [step 5.1, step 1.3, L3, L5]

7.1 For $a \ne 0$ the iterated-power law holds for all integers $m, n$: for $n \ge 0$ induction on $n$ gives $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$, the third equality by the integer addition law of step 6.1 at the pair $(mn, m)$, with base $(a^m)^0 = 1 = a^0$; and for $n = -q$ with $q \ge 1$, $(a^m)^{-q} = ((a^m)^q)^{-1} = (a^{mq})^{-1} = a^{-mq} = a^{m(-q)}$, using that $a^m \ne 0$ by step 3.1 and step 1.3. [step 6.1, step 3.1, step 1.3, L2, L3, L5]

8.1 Claims 1, 2 and 3 are therefore established: the addition, product and iterated-power laws for natural exponents together with nonvanishing by steps 3.1 and 4.1, the identity $a^{-m} = (a^m)^{-1}$ by step 1.3, and the three integer-exponent laws by steps 6.1, 4.3 and 7.1. [step 3.1, step 4.1, step 1.3, step 6.1, step 4.3, step 7.1, discharge-induction] ∎
````

### `lem-series-linearity`

````markdown
---
id: lem-series-linearity
kind: lemma
title: "Convergent series add and scale termwise"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, thm-algebra-of-limits, lem-finite-sum-laws, def-finite-sum]
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge
([[def-series]]), and let $c \in \mathbb{R}$. Then:

1. $\sum (a_k + b_k)$ converges, with
   $\displaystyle\sum_{k=0}^{\infty}(a_k + b_k) = \sum_{k=0}^{\infty} a_k + \sum_{k=0}^{\infty} b_k$;
2. $\sum c\,a_k$ converges, with
   $\displaystyle\sum_{k=0}^{\infty} c\,a_k = c \sum_{k=0}^{\infty} a_k$.

Moreover, for $c \ne 0$ and an arbitrary sequence $(a_k)$, whose series is not
assumed to converge:

3. $\sum c\,a_k$ converges **if and only if** $\sum a_k$ converges. Equivalently,
   $\sum a_k$ diverges if and only if $\sum c\,a_k$ diverges.

Claim 3 is the form used whenever a comparison is made against a constant
multiple of a known series.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $c \in \mathbb{R}$, with partial sums $s_n = \sum_{k<n} a_k$ and $t_n = \sum_{k<n} b_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Additivity and scaling of finite sums: $\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$ and $\sum_{k<n} c\,a_k = c \sum_{k<n} a_k$ ([[lem-finite-sum-laws]]).

[L2] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n + y_n \to x + y$ and $c\,x_n \to c\,x$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 The partial sums of $\sum (a_k + b_k)$ are $\sum_{k<n}(a_k + b_k) = s_n + t_n$, and those of $\sum c\,a_k$ are $\sum_{k<n} c\,a_k = c\,s_n$. [given, L1]

1.2 Assume $\sum a_k$ and $\sum b_k$ converge, say $s_n \to S$ and $t_n \to T$. [given]

2.1 Then $s_n + t_n \to S + T$, so $\sum(a_k + b_k)$ converges with sum $S + T$, which is claim 1. [step 1.2, step 1.1, L2]

2.2 Likewise $c\,s_n \to c\,S$, so $\sum c\,a_k$ converges with sum $c\,S$, which is claim 2. [step 1.2, step 1.1, L2]

3.1 For claim 3, let $c \ne 0$ and let $(a_k)$ be arbitrary. If $\sum a_k$ converges then $\sum c\,a_k$ converges by claim 2. [step 2.2]

3.2 Conversely, if $\sum c\,a_k$ converges then applying claim 2 to the sequence $(c\,a_k)$ and the scalar $1/c$, which exists since $c \ne 0$, shows that $\sum (1/c)(c\,a_k) = \sum a_k$ converges. [step 2.2, algebra]

4.1 The two implications are claim 3, and its contrapositive form is the statement about divergence. [step 3.1, step 3.2] ∎

## Remarks

- **There is no product rule here, and there is no rule for $\sum a_k b_k$.** The proof works because a finite sum is additive and homogeneous, and neither property has an analogue for products. Multiplying series is a genuinely harder question, requiring absolute convergence, and it is not treated on this page.

- **Claim 3 needs $c \ne 0$ and nothing else.** In particular it does not need either series to converge, which is what makes it usable in the divergence direction: scaling a divergent series by a nonzero constant leaves it divergent.
````

### `lem-sup-epsilon`

````markdown
---
id: lem-sup-epsilon
kind: lemma
title: "Epsilon characterisation of the supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-unique, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded above, and an upper bound $u$ of $S$; since $S$ is nonempty and bounded above, $\sup S$ exists.

[L1] Supremum: $u = \sup S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$; and every nonempty subset of $\mathbb{R}$ that is bounded above has such a least upper bound ([[def-complete-ordered-field]]).

[L2] The least upper bound is unique, so the equation $u = \sup S$ says precisely that $u$ is a least upper bound of $S$ ([[lem-sup-unique]]).

[L3] The order is total: for $a, b \in \mathbb{R}$ exactly one of $a < b$, $a = b$, $b < a$ holds, so the negation of $a \le b$ is $b < a$; and $a < b$ holds exactly when $b - a > 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]). (Translation invariance follows in one line from that last equivalence, since $(b + c) - (a + c) = b - a$, but no step below uses it and it is not claimed here as a quoted result.)

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $u = \sup S$, that is, $u$ is an upper bound of $S$ that is $\le$ every upper bound of $S$, and let $\varepsilon > 0$ be arbitrary. [assume-hyp, L1, L2]

1.2 For the converse implication assume that $u$ is an upper bound of $S$ such that for every $\varepsilon > 0$ there exists $s \in S$ with $u - \varepsilon < s$, and let $u'$ be an arbitrary upper bound of $S$. [assume-hyp]

2.1 Since $u - (u - \varepsilon) = \varepsilon > 0$, we have $u - \varepsilon < u$. [step 1.1, L3, algebra]

2.2 By totality either $u \le u'$ or $u' < u$; in the second case put $\varepsilon_0 := u - u'$, so that $\varepsilon_0 > 0$ and $u - \varepsilon_0 = u'$. [step 1.2, L3, algebra]

3.1 The element $u - \varepsilon$ is not an upper bound of $S$: if it were, the leastness of $u$ among upper bounds would give $u \le u - \varepsilon$, which contradicts $u - \varepsilon < u$ by trichotomy. [step 2.1, step 1.1, L1, L3]

3.2 In that second case the hypothesis applied to $\varepsilon_0$ yields $s_0 \in S$ with $u' = u - \varepsilon_0 < s_0$, so $s_0 \le u'$ fails, contradicting that $u'$ is an upper bound of $S$; the second case is therefore impossible and $u \le u'$. [step 2.2, step 1.2, L3]

4.1 Failing to be an upper bound of $S$ means precisely that some $s \in S$ does not satisfy $s \le u - \varepsilon$, and by totality that says $u - \varepsilon < s$; since $\varepsilon > 0$ was arbitrary, the forward implication is proved. [step 3.1, L3]

4.2 Since $u'$ was an arbitrary upper bound of $S$, we get $u \le u'$ for every upper bound $u'$; as $u$ is itself an upper bound, $u$ is a least upper bound of $S$, hence $u = \sup S$ by uniqueness, which proves the converse implication. [step 3.2, step 1.2, L1, L2]

5.1 Both implications hold, so for an upper bound $u$ of a nonempty set $S$ bounded above, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$. [step 4.1, step 4.2] ∎
````

### `lem-sup-unique`

````markdown
---
id: lem-sup-unique
kind: lemma
title: "Suprema and infima are unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-complete-ordered-field, def-infimum, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$. If $u_1$ and $u_2$ are both least upper bounds of
$S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$. If $\ell_1$ and $\ell_2$
are both greatest lower bounds of $S$ ([[def-infimum]]), then
$\ell_1 = \ell_2$.

Consequently a set has at most one supremum and at most one infimum, and the
notations $\sup S$ and $\inf S$ denote single, well-determined real numbers
whenever they exist.

## Facts & Assumptions

**Given:** A subset $S \subseteq \mathbb{R}$ of the complete ordered field $\mathbb{R}$, together with elements $u_1, u_2, \ell_1, \ell_2 \in \mathbb{R}$.

[L1] $u$ is a least upper bound of $S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$ ([[def-complete-ordered-field]]).

[L2] $\ell$ is a greatest lower bound of $S$ exactly when $\ell$ is a lower bound of $S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[L3] Antisymmetry of the order: for $a, b \in \mathbb{R}$, if $a \le b$ and $b \le a$ then $a = b$. This is trichotomy in the underlying ordered field, which says that exactly one of $a < b$, $a = b$, $b < a$ holds, so, reasoning by contradiction, $a \ne b$ would put both $a < b$ and $b < a$ in force, which trichotomy forbids ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $u_1$ and $u_2$ are both least upper bounds of $S$; in particular each of them is an upper bound of $S$ and each is $\le$ every upper bound of $S$. [assume-hyp, L1]

1.2 Assume $\ell_1$ and $\ell_2$ are both greatest lower bounds of $S$; in particular each of them is a lower bound of $S$ and each is $\ge$ every lower bound of $S$. [assume-hyp, L2]

2.1 Applying the leastness of $u_1$ to the upper bound $u_2$ gives $u_1 \le u_2$, and applying the leastness of $u_2$ to the upper bound $u_1$ gives $u_2 \le u_1$. [step 1.1, L1]

2.2 Applying the greatestness of $\ell_1$ to the lower bound $\ell_2$ gives $\ell_2 \le \ell_1$, and applying the greatestness of $\ell_2$ to the lower bound $\ell_1$ gives $\ell_1 \le \ell_2$. [step 1.2, L2]

3.1 By antisymmetry $u_1 = u_2$ and $\ell_1 = \ell_2$, so a least upper bound and a greatest lower bound of $S$ are each unique when they exist, which is what licenses writing $\sup S$ and $\inf S$. [step 2.1, step 2.2, L3] ∎
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

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-infimum-property`

````markdown
---
id: thm-infimum-property
kind: theorem
title: "Every nonempty set bounded below has an infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-reflection, def-infimum, lem-sup-unique, def-complete-ordered-field,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: true
short: "greatest-lower-bound property"
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "MIT 18.100A, Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, and its reflection $-S = \{-s : s \in S\}$.

[L1] The least-upper-bound property of $\mathbb{R}$: every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound in $\mathbb{R}$, namely an upper bound that is $\le$ every upper bound ([[def-complete-ordered-field]]).

[L2] Reflection: $-(-S) = S$; $S$ is nonempty exactly when $-S$ is; $u$ is an upper bound of a set $X$ exactly when $-u$ is a lower bound of $-X$; and $\ell$ is a lower bound of $X$ exactly when $-\ell$ is an upper bound of $-X$ ([[lem-reflection]]).

[L3] Greatest lower bound (infimum): $\ell$ is one for $S$ when $\ell$ is a lower bound of $S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[L4] A least upper bound and a greatest lower bound are unique when they exist, so the notations $\sup$ and $\inf$ are unambiguous ([[lem-sup-unique]]).

[L5] Negation reverses the order, elementwise: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a \le b$ if and only if $-b \le -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns $-b < -a$ back into $a < b$, while $a = b$ holds exactly when $-a = -b$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis $S \ne \emptyset$ and $S$ is bounded below; fix a lower bound $\ell_0$ of $S$, so $\ell_0 \le s$ for every $s \in S$. [given, choose]

1.2 Let $\ell'$ be an arbitrary lower bound of $S$; then $-\ell'$ is an upper bound of $-S$. [assume-hyp, L2]

2.1 Since $S$ is nonempty, so is $-S$, and since $\ell_0$ is a lower bound of $S$, its negative $-\ell_0$ is an upper bound of $-S$; hence $-S$ is a nonempty subset of $\mathbb{R}$ that is bounded above. [step 1.1, L2]

3.1 By the least-upper-bound property, $-S$ has a least upper bound in $\mathbb{R}$; write $u := \sup(-S)$, which is well defined by uniqueness. [step 2.1, L1, L4]

4.1 Define $\ell := -u$. [step 3.1, construct]

4.2 The element $u$ is the least of the upper bounds of $-S$ and $-\ell'$ is one of them, hence $u \le -\ell'$. [step 1.2, step 3.1, L1]

5.1 Apply the reflection fact to the set $-S$: since $u$ is an upper bound of $-S$, its negative $-u$ is a lower bound of $-(-S)$, and $-(-S) = S$; so $\ell = -u$ is a lower bound of $S$. [step 4.1, step 3.1, L2]

5.2 Negating the inequality $u \le -\ell'$ reverses it, giving $-(-\ell') \le -u$, that is $\ell' \le \ell$. [step 4.2, step 4.1, L5]

6.1 Thus $\ell$ is a lower bound of $S$ satisfying $\ell' \le \ell$ for every lower bound $\ell'$ of $S$, so $\ell$ is a greatest lower bound of $S$; it is the only one, so $\inf S$ exists and $\inf S = \ell = -\sup(-S)$. [step 5.1, step 5.2, L3, L4] ∎

## Remarks

- The theorem is not a restatement of the least-upper-bound property: it is proved from it, by transporting the problem across the order-reversing bijection $x \mapsto -x$ of [[lem-reflection]]. Nothing about $\mathbb{R}$ beyond the complete-ordered-field axioms is used.
- The hypotheses are both needed. The empty set is bounded below by every real and has no greatest lower bound, and a set unbounded below has no lower bound at all; the dual failures for suprema are recorded in [[fs-every-set-has-sup]].
- The identity $\inf S = -\sup(-S)$ is the standard device for turning any statement about suprema into its dual; [[lem-inf-epsilon]] is the first application on this page.
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

### `thm-recursion`

````markdown
---
id: thm-recursion
kind: theorem
title: "The recursion theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-peano-system, def-natural-numbers, thm-induction-principle]
aliases: [dedekind-recursion, recursion-theorem]
landmark: true
short: "$g(0)=a,\\ g(\\sigma n)=f(g n)$ unique"
proof_strategy: direct
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

## Facts & Assumptions

**Given:** a Peano system $(N,0,\sigma)$, a set $A$, an element $a \in A$, and a function $f : A \to A$. Call a set $R \subseteq N \times A$ **closed** when $(0,a) \in R$ and, for all $n \in N$ and $x \in A$, $(n,x) \in R$ implies $(\sigma(n),f(x)) \in R$.

[L1] Induction holds in $N$: any $S \subseteq N$ with $0 \in S$ that is closed under $\sigma$ equals $N$ (axiom P3, [[thm-induction-principle]]).

[L2] In a Peano system $\sigma(n) \ne 0$ (P1) and $\sigma$ is injective (P2) ([[def-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 The set $N \times A$ is closed, so the collection of closed subsets of $N \times A$ is nonempty; let $g := \bigcap \{ R : R \subseteq N \times A \text{ closed} \}$, which is itself closed, since if every closed $R$ contains $(0,a)$ then so does $g$, and if $(n,x) \in g$ then $(n,x) \in R$ for each closed $R$, whence $(\sigma(n),f(x)) \in R$ for each such $R$, so $(\sigma(n),f(x)) \in g$. [given, construct]

2.1 Let $D = \{ n \in N : \exists x \in A,\ (n,x) \in g \}$; then $0 \in D$ since $(0,a) \in g$, and if $n \in D$ with $(n,x) \in g$ then $(\sigma(n),f(x)) \in g$ by closure, so $\sigma(n) \in D$; by induction $D = N$, hence $g$ relates every $n$ to at least one $x$. [L1, step 1.1]

2.2 Suppose $(0,b) \in g$ with $b \ne a$; then $g \setminus \{(0,b)\}$ still contains $(0,a)$ and is closed, since any generated pair $(\sigma(m),f(z))$ has $\sigma(m) \ne 0$ by P1 and so is never equal to $(0,b)$; this contradicts the minimality of $g$, so $a$ is the unique second coordinate paired with $0$. [L2, step 1.1]

3.1 Let $U = \{ n \in N : \text{there is exactly one } x \text{ with } (n,x) \in g \}$; then $0 \in U$ by step 2.2. [step 2.2]

4.1 Assume $n \in U$ with unique value $x$, so $(n,x) \in g$ and $(\sigma(n),f(x)) \in g$ by closure; if $(\sigma(n),c) \in g$ with $c \ne f(x)$, then $g \setminus \{(\sigma(n),c)\}$ contains $(0,a)$ because $\sigma(n) \ne 0$, and is closed, because a generated pair $(\sigma(m),f(z))$ with $(m,z) \in g \setminus \{(\sigma(n),c)\}$ can equal $(\sigma(n),c)$ only if $\sigma(m) = \sigma(n)$ and $f(z) = c$, but $\sigma(m) = \sigma(n)$ forces $m = n$ by injectivity, then $z = x$ by uniqueness at $n$, giving $f(z) = f(x) \ne c$, a contradiction; hence $g \setminus \{(\sigma(n),c)\}$ is closed and smaller than $g$, contradicting minimality, so $f(x)$ is the unique value at $\sigma(n)$ and $\sigma(n) \in U$. [L2, step 3.1, step 1.1]

5.1 By induction $U = N$, so together with the totality from step 2.1 the relation $g$ is a function $g : N \to A$; it satisfies $g(0) = a$, and closure with uniqueness gives $g(\sigma(n)) = f(g(n))$ for all $n$. [L1, step 2.1, step 3.1, step 4.1]

6.1 If $h : N \to A$ also satisfies $h(0) = a$ and $h(\sigma(n)) = f(h(n))$, then the set $\{ n : g(n) = h(n) \}$ contains $0$ and is closed under $\sigma$, since $g(n) = h(n)$ implies $g(\sigma(n)) = f(g(n)) = f(h(n)) = h(\sigma(n))$, so by induction it equals $N$, that is $h = g$. [L1, step 5.1] ∎
````

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
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
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````

