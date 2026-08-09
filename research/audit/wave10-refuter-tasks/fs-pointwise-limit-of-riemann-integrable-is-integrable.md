## Wave 10 target — `fs-pointwise-limit-of-riemann-integrable-is-integrable`

Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).

Normalized current SHA-256: `9fb461c58b3bf0864186a42e0779353985e35286544813adc343d37e01f0e12f`

## Complete current target

````markdown
---
id: fs-pointwise-limit-of-riemann-integrable-is-integrable
kind: false-statement
title: "FALSE: a pointwise limit of a sequence of Riemann integrable functions on $[a,b]$ is Riemann integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finitely-many-discontinuities-integrable, fs-bounded-implies-riemann-integrable, def-dirichlet-and-thomae-functions, thm-rationals-countable, lem-subset-of-countable, lem-countable-iff-surjection-from-n, def-countable, def-real-limit, def-sequence, def-continuity-real, def-darboux-integral, def-bounded-set, lem-finite-set-has-max, def-max-min, def-neighbourhood-r, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
short: "FALSE: pointwise limits preserve integrability"
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
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "E. Schechter, Gauge Integral"
      url: "https://math.vanderbilt.edu/schectex/ccc/gauge/"
pipeline_run: null
---

## Statement

**False claim:** if $(f_n)_{n \in \mathbb{N}}$ is a sequence of Riemann
integrable functions on $[a,b]$ ([[def-darboux-integral]], [[def-sequence]])
and $f : [a,b] \to \mathbb{R}$ satisfies

$$f_n(x) \longrightarrow f(x) \qquad \text{for every } x \in [a,b]$$

([[def-real-limit]]), then $f$ is Riemann integrable on $[a,b]$.

The witness below is the standard one: an increasing sequence of indicators of
finite sets of rationals, each integrable because it has only finitely many
discontinuities, whose pointwise limit is the Dirichlet function, which is not
integrable at all. Every $f_n$ takes values in $\{0,1\}$, so no unboundedness is
involved, and the convergence is even monotone.

## Facts & Assumptions

**Given:** The set $E := \mathbb{Q} \cap [0,1]$, a surjection $s : \mathbb{N} \to E$, the finite sets $F_n := \{\, s(k) : k < n \,\}$ for $n \in \mathbb{N}$, and the indicators $f_n : [0,1] \to \mathbb{R}$ with $f_n(x) = 1$ for $x \in F_n$ and $f_n(x) = 0$ otherwise.

[A1] The false claim: a pointwise limit of Riemann integrable functions on a closed bounded interval with distinct endpoints is Riemann integrable.

[L1] $\mathbb{Q}$ is countably infinite and every subset of an at most countable set is at most countable, so $E$ is at most countable; $E$ is nonempty, since $0 \in E$; and a nonempty at most countable set admits a surjection from $\mathbb{N}$ ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]], [[lem-countable-iff-surjection-from-n]]).

[L2] A bounded function on $[a,b]$ that is continuous at every point other than $r$ listed points is Riemann integrable ([[thm-finitely-many-discontinuities-integrable]], [[def-bounded-set]]).

[L3] The Dirichlet function restricted to $[0,1]$, that is $g : [0,1] \to \mathbb{R}$ with $g(x) = 1$ for rational $x$ and $g(x) = 0$ for irrational $x$, is bounded and **not** Riemann integrable: its lower Darboux integral is $0$ and its upper Darboux integral is $1$ ([[fs-bounded-implies-riemann-integrable]], [[def-dirichlet-and-thomae-functions]]).

[L4] A sequence of reals converges to $x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$; an eventually constant sequence converges to that constant ([[def-real-limit]], [[def-sequence]], [[lem-of-abs-value]]).

[L5] Every nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Continuity at a point: for every real $\varepsilon > 0$ there must be a real $\delta > 0$ with $|h(y) - h(x)| < \varepsilon$ for every $y$ in the domain with $|y - x| < \delta$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L7] Ordered-field arithmetic: the order is total and transitive, $|u - v| > 0$ for $u \ne v$, and $0 < 1$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 By [L1] fix a surjection $s : \mathbb{N} \to E$ and define $F_n$ and $f_n$ as in the Given. Each $f_n$ takes only the values $0$ and $1$, so it is bounded. [given, L1, choose, construct]

2.1 **Each $f_n$ is continuous at every point of $[0,1]$ outside the $n$ listed points $s(0), \dots, s(n-1)$.** Let $x \in [0,1]$ with $x \ne s(k)$ for all $k < n$, so $f_n(x) = 0$. If $n = 0$ put $\delta := 1$; otherwise put $\delta := \min\{\, |x - s(k)| : k < n \,\}$, which exists by [L5] and is positive by [L7]. Every $y \in [0,1]$ with $|y - x| < \delta$ then differs from each $s(k)$ with $k < n$, so $f_n(y) = 0$ and $|f_n(y) - f_n(x)| = 0 < \varepsilon$ for every $\varepsilon > 0$. [step 1.1, L5, L6, L7]

2.2 **$(f_n)$ converges pointwise to $g$ on $[0,1]$.** Let $x \in [0,1]$. If $x$ is rational then $x \in E$, so $x = s(k)$ for some $k \in \mathbb{N}$ by surjectivity, and then $x \in F_n$ and $f_n(x) = 1$ for every $n > k$; the sequence is eventually constant with value $1 = g(x)$, so it converges to $g(x)$ by [L4]. If $x$ is irrational then $x \notin E$ and hence $x \notin F_n$ for any $n$, so $f_n(x) = 0 = g(x)$ for every $n$ and again the sequence converges to $g(x)$. [step 1.1, L1, L3, L4]

3.1 By [L2], applied with the $n$ listed points $s(0),\dots,s(n-1)$, each $f_n$ is Riemann integrable on $[0,1]$. [step 1.1, step 2.1, L2]

4.1 So $(f_n)$ is a sequence of Riemann integrable functions on $[0,1]$, an interval with $0 < 1$, converging pointwise to $g$, and $g$ is not Riemann integrable by [L3]. Hence [A1] fails at this sequence and the claim is false. [step 3.1, step 2.2, A1, L3] ∎

## Remarks

- **Monotone convergence does not help either.** The sequence above is nondecreasing in $n$ at every point, since $F_n \subseteq F_{n+1}$, and uniformly bounded by $1$. So no monotonicity or boundedness hypothesis on the sequence rescues the claim; what rescues it is uniform convergence, or a wider notion of integral, and neither is developed here.

- **What actually degrades in the limit.** Each $f_n$ is discontinuous at $n$ points at most, so its discontinuity set is null and [[thm-lebesgue-criterion]] passes it. The union of those finite sets is $E = \mathbb{Q}\cap[0,1]$, which is still null; but the discontinuity set of the **limit** is all of $[0,1]$ ([[thm-dirichlet-and-thomae-continuity-sets]]), which is not null ([[lem-nondegenerate-interval-is-not-null]]). Discontinuity sets do not pass to pointwise limits, and that is the whole failure.

- **The refutation incurs no choice of its own; what it costs is inherited.** [[lem-countable-iff-surjection-from-n]] produces a single surjection $s$, and every $f_n$ is defined from it by a formula; the $\delta$ of step 2.1 is a minimum of a finite set, not a selection. The one countable choice behind this item is the one inside [[thm-heine-cantor-r]], reached through [[thm-finitely-many-discontinuities-integrable]] at step 3.1, and that is how [[rem-riemann-integral-choice-ledger]] records it.
````

## Current Wave 10 provenance determination

```json
{
  "id": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.vanderbilt.edu/schectex/ccc/gauge/"
  ],
  "rationale": "The source gives finite rational-point indicators converging pointwise to the non-Riemann-integrable Dirichlet function. The item adapts the construction to a fixed enumeration and verifies each approximant’s integrability.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 10 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-rationals-countable",
      "source_section": "Statement",
      "quote": "$\\mathbb{Q} \\approx \\mathbb{N}$ ([[def-equinumerous]]): the rationals are\ncountably infinite ([[def-countable]]).\n\n**No choice principle is used.** The one place where a reader expects a choice,\n\"pick a representative $a/b$ of each rational\", is exactly where\n[[lem-rat-positive-denominator]] applies: every rational *has* a representative\nwith positive denominator, so the map $(a,b) \\mapsto [(a,b)]$ defined on\n$\\mathbb{Z} \\times \\mathbb{Z}_{>0}$ is already **surjective** onto $\\mathbb{Q}$,\nand countability follows from a surjection without ever selecting a\nrepresentative. The same device handles $\\mathbb{Z}$, which is a surjective image\nof $\\mathbb{N} \\times \\mathbb{N}$ by construction ([[def-integers]]).",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-subset-of-countable",
      "source_section": "Statement",
      "quote": "Let $A$ be at most countable ([[def-countable]]) and let $B \\subseteq A$. Then\n$B$ is at most countable.\n\nThe proof establishes the sharper statement about subsets of $\\mathbb{N}$ from\nwhich this follows: **a subset $S \\subseteq \\mathbb{N}$ is finite if it is\nbounded above, and countably infinite if it is not.**\n\n**No choice principle is used.** This is the point of the lemma rather than a\nfootnote to it. The enumeration of an unbounded $S \\subseteq \\mathbb{N}$ is built\nby always taking the *least* element of $S$ above the previous one, and the least\nelement of a nonempty set of naturals is canonical\n([[thm-well-ordering-principle]]): it is determined by $S$, not selected from it.\nReplacing \"least\" by \"some\" would turn the construction into an appeal to\ndependent choice.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "Recall that a natural number is a von Neumann natural\n([[def-natural-numbers]]): $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$, so\nthat\n\n$$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$$\n\nis itself the set of its predecessors. Here $<$ is the order of\n[[def-nat-order]], which is defined additively, so the displayed identity is a\ntheorem and not a convention: it is [[lem-nat-order-is-membership]], proved\nimmediately above. Let $A$ be a set, and let $\\approx$ be equinumerosity\n([[def-equinumerous]]).\n\n- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$.\n- $A$ is **countably infinite** if $A \\approx \\mathbb{N}$.\n- $A$ is **at most countable** if it is finite or countably infinite.\n- $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-countable-iff-surjection-from-n",
      "source_section": "Statement",
      "quote": "Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if\nand only if there is a surjection $s : \\mathbb{N} \\to A$\n([[def-injection-surjection-bijection]]).\n\nMoreover, from any such surjection an injection $A \\to \\mathbb{N}$ is obtained\nexplicitly, without any choice, by\n\n$$j(a) := \\min\\{\\, k \\in \\mathbb{N} : s(k) = a \\,\\}.$$\n\nThis is the working form of countability used everywhere below: to prove a\nnonempty set countable it suffices to list its elements, repetitions and all.\n\n**No choice principle is used.** The backward direction is where an appeal to\nchoice would be natural (\"for each $a$ pick some $k$ with $s(k) = a$\") and it is\navoided outright, because $\\min$ is canonical: every nonempty set of naturals has\na *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by\n$a$ and $s$ alone.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-finitely-many-discontinuities-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Suppose there are $r \\in \\mathbb{N}$ and points\n$d_0, \\dots, d_{r-1} \\in [a,b]$ such that $f$ is continuous\n([[def-continuity-real]]) at every point of $[a,b]$ other than\n$d_0, \\dots, d_{r-1}$; that is, every discontinuity of $f$\n([[def-classification-of-discontinuities]]) occurs among those $r$ listed\npoints. Then $f$ is Riemann integrable on $[a,b]$ ([[def-darboux-integral]]).\n\nFor $r = 0$ the hypothesis says $f$ is continuous on $[a,b]$ and the conclusion\nis [[thm-continuous-implies-integrable]]; the argument below covers that case\nwithout a separate treatment. Repetitions in the list are allowed and harmless,\nand no claim is made that the listed points **are** discontinuities: the\nhypothesis is one-sided, so a finite superset of the discontinuity set is enough.\n\n**Nothing is said about the kind of the discontinuities.** They may be\nremovable, jumps, or essential ([[def-classification-of-discontinuities]]); only\ntheir number matters. Boundedness is a genuine hypothesis, since an unbounded\nfunction has no Darboux sums at all ([[def-darboux-sums]]).",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "fs-bounded-implies-riemann-integrable",
      "source_section": "Statement",
      "quote": "**False claim:** every bounded function $f : [a,b] \\to \\mathbb{R}$\n([[def-bounded-set]]) is Riemann integrable on $[a,b]$\n([[def-darboux-integral]]).\n\nBoundedness is exactly what is needed for the Darboux sums to **exist**\n([[def-darboux-sums]]), and the claim above confuses that with their two extrema\nagreeing. The witness below is bounded, takes only the values $0$ and $1$, and\nhas lower Darboux integral $0$ and upper Darboux integral $1$: as far apart as\nthe values allow.",
      "uses": [
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-dirichlet-and-thomae-functions",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq\n\\mathbb{R}$ denotes the chain of canonical embeddings\n([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), and\neach set is identified with its image in $\\mathbb{R}$, as elsewhere in this\nlibrary; for a natural $q$ the real $\\iota(q) = q \\cdot 1_{\\mathbb{R}}$ is the\ncanonical natural ([[def-canonical-natural]]), and $\\iota(q) > 0$ for $q \\ge 1$\n([[lem-of-naturals-positive]]). A real is **rational** when it lies in\n$\\mathbb{Q}$ and **irrational** otherwise; both sets are dense in $\\mathbb{R}$\n([[lem-q-and-irrationals-dense-r]]).\n\n### The Dirichlet function\n\n$$\\mathbf{1}_{\\mathbb{Q}} : \\mathbb{R} \\to \\mathbb{R}, \\qquad \\mathbf{1}_{\\mathbb{Q}}(x) := \\begin{cases} 1 & \\text{if } x \\in \\mathbb{Q},\\\\ 0 & \\text{if } x \\notin \\mathbb{Q}.\\end{cases}$$\n\nThis is the indicator of the rationals. It is a function because every real\neither lies in $\\mathbb{Q}$ or does not, and the two clauses are exclusive.\n\n### The least denominator of a rational\n\nLet $x \\in \\mathbb{Q}$ and put\n\n$$Q(x) \\;:=\\; \\{\\, q \\in \\mathbb{N} \\;:\\; q \\ge 1 \\ \\text{ and } \\ \\iota(q)\\,x \\in \\mathbb{Z} \\,\\}.$$\n\n**$Q(x)$ is nonempty.** Every rational is $a/b$ with $a \\in \\mathbb{Z}$ and $b$ a\npositive integer ([[lem-int-embeds-rat]]), and a positive integer is $\\iota(q)$\nfor a unique natural $q \\ge 1$ ([[lem-nat-embeds-int]]); then\n$\\iota(q)\\,x = a \\in \\mathbb{Z}$, so $q \\in Q(x)$.\n\nBy the well-ordering principle ([[thm-well-ordering-principle]]) the nonempty\nsubset $Q(x) \\subseteq \\mathbb{N}$ has a least element. Write\n\n$$q(x) \\;:=\\; \\min Q(x) \\;\\ge\\; 1,$$\n\nthe **least denominator** of $x$, and $p(x) := \\iota(q(x))\\,x \\in \\mathbb{Z}$,\nso that\n\n$$x \\;=\\; \\frac{p(x)}{\\iota(q(x))} .$$\n\nNothing is selected here: $q(x)$ is the least element of a set determined by\n$x$, so it is a function of $x$ alone.\n\n**The least denominator is the denominator in lowest terms.** The integers\n$p(x)$ and $q(x)$ are coprime ([[def-coprime]]). Indeed put\n$d := \\gcd(p(x), q(x))$, which satisfies $d \\ge 1$ because $q(x) \\ge 1$ makes the\npair different from $(0,0)$ ([[lem-gcd-basic-values]],\n[[def-common-divisor-and-gcd]]). Then $d$ divides $q(x)$, so $q(x)/d$ is a\nnatural number $\\ge 1$, and $\\iota(q(x)/d) = \\iota(q(x))/d$ because $\\iota$\ncarries products of naturals to products ([[lem-of-naturals-positive]]); hence\n\n$$\\iota(q(x)/d)\\,x \\;=\\; \\frac{\\iota(q(x))\\,x}{d} \\;=\\; \\frac{p(x)}{d} \\;\\in\\; \\mathbb{Z},$$\n\nso $q(x)/d \\in Q(x)$ and therefore $q(x)/d \\ge q(x)$, which forces $d = 1$.\n**Conversely, a lowest-terms denominator is the least one, so the description is\nunambiguous.** Suppose $x = p/\\iota(q)$ with $q \\ge 1$ a natural, $p \\in \\mathbb{Z}$\nand $\\gcd(p,q) = 1$. Then $q \\in Q(x)$, so $q_{0} := q(x) \\le q$; and from\n$p/\\iota(q) = p(x)/\\iota(q_{0})$ we get $q_{0}p = q\\,p(x)$ in $\\mathbb{Z}$, so\n$q \\mid q_{0}p$, and $\\gcd(p,q) = 1$ gives $q \\mid q_{0}$\n([[lem-coprime-divides-product]], claim 1), hence $q \\le q_{0}$. So $q = q(x)$:\nwriting $x = p/q$ \"in lowest terms with $q \\ge 1$\" and taking $q = q(x)$ describe\nthe same integer, and [[cor-gcd-quotients-coprime]] is what produces such a\nrepresentation from an arbitrary one.\n\n### Thomae's function\n\n$$t : \\mathbb{R} \\to \\mathbb{R}, \\qquad t(x) := \\begin{cases} 1/\\iota(q(x)) & \\text{if } x \\in \\mathbb{Q},\\\\ 0 & \\text{if } x \\notin \\mathbb{Q}.\\end{cases}$$\n\nIt is also called the **popcorn function** or the **ruler function**. The value\nis well defined because $q(x)$ is, and $\\iota(q(x)) \\ge 1 > 0$ is invertible.\n\n**Boundary values, stated rather than left to the reader.**\n\n- $t(0) = 1$. Indeed $\\iota(1)\\cdot 0 = 0 \\in \\mathbb{Z}$, so $1 \\in Q(0)$ and\n  $q(0) = 1$; the representation is $0 = 0/1$.\n- $t(m) = 1$ for every integer $m$, by the same computation with $1 \\in Q(m)$.\n- $0 < t(x) \\le 1$ for every rational $x$, since $\\iota(q(x)) \\ge 1$; and\n  $t(x) = 0$ exactly at the irrationals.\n\n**On the range.** The values of $t$ are $0$ and the reciprocals\n$1/\\iota(q)$ of the canonical naturals $q \\ge 1$; every such value is attained,\n$1/\\iota(q)$ being the value at the rational $1/\\iota(q)$ itself, whose least\ndenominator is $q$ because $\\iota(k)/\\iota(q) \\in \\mathbb{Z}$ with\n$1 \\le k < q$ would give a positive integer smaller than $1$.",
      "uses": [
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the\nset $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$.\n\nThe usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and\nabsolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and\nneighbourhoods are those of [[def-neighbourhood-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **continuous at $c$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with\n\n$$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$\n\n$f$ is **continuous on $A$** when it is continuous at every point of $A$.\n\n**The point $c$ is required to lie in $A$, and the condition is unpunctured.**\nBoth differ from [[def-function-limit]], and deliberately. There the quantifier\nruns over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed,\nand at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is\nautomatic. So allowing $x = c$ costs nothing, and it is what lets the definition\nbe stated at every point of $A$, including the points where no limit exists.\n\n**Three clauses, and all three are part of the definition.**\n\n1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.\n\n2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$\n   ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real\n   $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take\n   $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$\n   itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.\n\n3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and\n   nothing more. It is not a condition relating $f$ to points outside $A$.\n\nEvery point of $A$ is either a limit point of $A$ or an isolated point of $A$,\nand never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe\ncontinuity at every point of $A$.\n\n**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.\n\n**Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$\n([[def-open-and-closed-in-r]]), then every $c \\in A$ has some\n$N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty\n([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and\nclause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate\ninterval ([[def-interval]]). Isolated points are what force clause 2 to exist at\nall, and they occur as soon as $A$ is allowed to be an arbitrary subset of\n$\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "fs-pointwise-limit-of-riemann-integrable-is-integrable-step-1-1",
      "claim": "By [L1] fix a surjection $s : \\mathbb{N} \\to E$ and define $F_n$ and $f_n$ as in the Given. Each $f_n$ takes only the values $0$ and $1$, so it is bounded. [given, L1, choose, construct]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "fs-pointwise-limit-of-riemann-integrable-is-integrable-step-2-1",
      "claim": "**Each $f_n$ is continuous at every point of $[0,1]$ outside the $n$ listed points $s(0), \\dots, s(n-1)$.** Let $x \\in [0,1]$ with $x \\ne s(k)$ for all $k < n$, so $f_n(x) = 0$. If $n = 0$ put $\\delta := 1$; otherwise put $\\delta := \\min\\{\\, |x - s(k)| : k < n \\,\\}$, which exists by [L5] and is positive by [L7]. Every $y \\in [0,1]$ with $|y - x| < \\delta$ then differs from each $s(k)$ with $k < n$, so $f_n(y) = 0$ and $|f_n(y) - f_n(x)| = 0 < \\varepsilon$ for every $\\varepsilon > 0$. [step 1.1, L5, L6, L7]",
      "step": "2.1",
      "inputs": [
        "L5",
        "L7",
        "1.1",
        "L6"
      ]
    },
    {
      "id": "fs-pointwise-limit-of-riemann-integrable-is-integrable-step-2-2",
      "claim": "**$(f_n)$ converges pointwise to $g$ on $[0,1]$.** Let $x \\in [0,1]$. If $x$ is rational then $x \\in E$, so $x = s(k)$ for some $k \\in \\mathbb{N}$ by surjectivity, and then $x \\in F_n$ and $f_n(x) = 1$ for every $n > k$; the sequence is eventually constant with value $1 = g(x)$, so it converges to $g(x)$ by [L4]. If $x$ is irrational then $x \\notin E$ and hence $x \\notin F_n$ for any $n$, so $f_n(x) = 0 = g(x)$ for every $n$ and again the sequence converges to $g(x)$. [step 1.1, L1, L3, L4]",
      "step": "2.2",
      "inputs": [
        "L4",
        "1.1",
        "L1",
        "L3"
      ]
    },
    {
      "id": "fs-pointwise-limit-of-riemann-integrable-is-integrable-step-3-1",
      "claim": "By [L2], applied with the $n$ listed points $s(0),\\dots,s(n-1)$, each $f_n$ is Riemann integrable on $[0,1]$. [step 1.1, step 2.1, L2]",
      "step": "3.1",
      "inputs": [
        "L2",
        "1.1",
        "2.1"
      ]
    },
    {
      "id": "fs-pointwise-limit-of-riemann-integrable-is-integrable-step-4-1",
      "claim": "So $(f_n)$ is a sequence of Riemann integrable functions on $[0,1]$, an interval with $0 < 1$, converging pointwise to $g$, and $g$ is not Riemann integrable by [L3]. Hence [A1] fails at this sequence and the claim is false. [step 3.1, step 2.2, A1, L3] ∎",
      "step": "4.1",
      "inputs": [
        "L3",
        "A1",
        "3.1",
        "2.2"
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
      "evidence": "Step 1.1 explicitly includes the unit, singleton, or first-index case."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is local or algebraic and has no interval-length or repeated-endpoint boundary."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 2.1 explicitly keeps endpoints/interior points within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 supplies each displayed witness by formula or by the cited existence premise before using it."
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "thm-finitely-many-discontinuities-integrable",
    "declared_target": "thm-finitely-many-discontinuities-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "fs-bounded-implies-riemann-integrable",
    "declared_target": "fs-bounded-implies-riemann-integrable",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-dirichlet-and-thomae-functions",
    "declared_target": "def-dirichlet-and-thomae-functions",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "thm-rationals-countable",
    "declared_target": "thm-rationals-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "lem-subset-of-countable",
    "declared_target": "lem-subset-of-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-darboux-integral",
    "declared_target": "def-darboux-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-pointwise-limit-of-riemann-integrable-is-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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

## Complete current text of every declared or cited item (26)

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

### `def-dirichlet-and-thomae-functions`

````markdown
---
id: def-dirichlet-and-thomae-functions
kind: definition
title: "The Dirichlet function $1_{\\mathbb{Q}}$, and Thomae's function $t$ with $t(x) = 1/q$ at a rational $x = p/q$ in lowest terms with $q \\ge 1$ and $t(x) = 0$ at every irrational $x$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
  evidence: exact-source
deps: [lem-coprime-divides-product, lem-rat-embeds-dense, lem-int-embeds-rat, lem-nat-embeds-int, def-coprime, cor-gcd-quotients-coprime, lem-gcd-basic-values, def-common-divisor-and-gcd, thm-well-ordering-principle, def-complete-ordered-field, def-canonical-natural, lem-of-naturals-positive, lem-q-and-irrationals-dense-r]
justified_by: []
aliases: [def-thomae-function, def-dirichlet-function, def-popcorn-function]
landmark: true
short: "Dirichlet and Thomae functions"
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
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq
\mathbb{R}$ denotes the chain of canonical embeddings
([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), and
each set is identified with its image in $\mathbb{R}$, as elsewhere in this
library; for a natural $q$ the real $\iota(q) = q \cdot 1_{\mathbb{R}}$ is the
canonical natural ([[def-canonical-natural]]), and $\iota(q) > 0$ for $q \ge 1$
([[lem-of-naturals-positive]]). A real is **rational** when it lies in
$\mathbb{Q}$ and **irrational** otherwise; both sets are dense in $\mathbb{R}$
([[lem-q-and-irrationals-dense-r]]).

### The Dirichlet function

$$\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}, \qquad \mathbf{1}_{\mathbb{Q}}(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}.\end{cases}$$

This is the indicator of the rationals. It is a function because every real
either lies in $\mathbb{Q}$ or does not, and the two clauses are exclusive.

### The least denominator of a rational

Let $x \in \mathbb{Q}$ and put

$$Q(x) \;:=\; \{\, q \in \mathbb{N} \;:\; q \ge 1 \ \text{ and } \ \iota(q)\,x \in \mathbb{Z} \,\}.$$

**$Q(x)$ is nonempty.** Every rational is $a/b$ with $a \in \mathbb{Z}$ and $b$ a
positive integer ([[lem-int-embeds-rat]]), and a positive integer is $\iota(q)$
for a unique natural $q \ge 1$ ([[lem-nat-embeds-int]]); then
$\iota(q)\,x = a \in \mathbb{Z}$, so $q \in Q(x)$.

By the well-ordering principle ([[thm-well-ordering-principle]]) the nonempty
subset $Q(x) \subseteq \mathbb{N}$ has a least element. Write

$$q(x) \;:=\; \min Q(x) \;\ge\; 1,$$

the **least denominator** of $x$, and $p(x) := \iota(q(x))\,x \in \mathbb{Z}$,
so that

$$x \;=\; \frac{p(x)}{\iota(q(x))} .$$

Nothing is selected here: $q(x)$ is the least element of a set determined by
$x$, so it is a function of $x$ alone.

**The least denominator is the denominator in lowest terms.** The integers
$p(x)$ and $q(x)$ are coprime ([[def-coprime]]). Indeed put
$d := \gcd(p(x), q(x))$, which satisfies $d \ge 1$ because $q(x) \ge 1$ makes the
pair different from $(0,0)$ ([[lem-gcd-basic-values]],
[[def-common-divisor-and-gcd]]). Then $d$ divides $q(x)$, so $q(x)/d$ is a
natural number $\ge 1$, and $\iota(q(x)/d) = \iota(q(x))/d$ because $\iota$
carries products of naturals to products ([[lem-of-naturals-positive]]); hence

$$\iota(q(x)/d)\,x \;=\; \frac{\iota(q(x))\,x}{d} \;=\; \frac{p(x)}{d} \;\in\; \mathbb{Z},$$

so $q(x)/d \in Q(x)$ and therefore $q(x)/d \ge q(x)$, which forces $d = 1$.
**Conversely, a lowest-terms denominator is the least one, so the description is
unambiguous.** Suppose $x = p/\iota(q)$ with $q \ge 1$ a natural, $p \in \mathbb{Z}$
and $\gcd(p,q) = 1$. Then $q \in Q(x)$, so $q_{0} := q(x) \le q$; and from
$p/\iota(q) = p(x)/\iota(q_{0})$ we get $q_{0}p = q\,p(x)$ in $\mathbb{Z}$, so
$q \mid q_{0}p$, and $\gcd(p,q) = 1$ gives $q \mid q_{0}$
([[lem-coprime-divides-product]], claim 1), hence $q \le q_{0}$. So $q = q(x)$:
writing $x = p/q$ "in lowest terms with $q \ge 1$" and taking $q = q(x)$ describe
the same integer, and [[cor-gcd-quotients-coprime]] is what produces such a
representation from an arbitrary one.

### Thomae's function

$$t : \mathbb{R} \to \mathbb{R}, \qquad t(x) := \begin{cases} 1/\iota(q(x)) & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}.\end{cases}$$

It is also called the **popcorn function** or the **ruler function**. The value
is well defined because $q(x)$ is, and $\iota(q(x)) \ge 1 > 0$ is invertible.

**Boundary values, stated rather than left to the reader.**

- $t(0) = 1$. Indeed $\iota(1)\cdot 0 = 0 \in \mathbb{Z}$, so $1 \in Q(0)$ and
  $q(0) = 1$; the representation is $0 = 0/1$.
- $t(m) = 1$ for every integer $m$, by the same computation with $1 \in Q(m)$.
- $0 < t(x) \le 1$ for every rational $x$, since $\iota(q(x)) \ge 1$; and
  $t(x) = 0$ exactly at the irrationals.

**On the range.** The values of $t$ are $0$ and the reciprocals
$1/\iota(q)$ of the canonical naturals $q \ge 1$; every such value is attained,
$1/\iota(q)$ being the value at the rational $1/\iota(q)$ itself, whose least
denominator is $q$ because $\iota(k)/\iota(q) \in \mathbb{Z}$ with
$1 \le k < q$ would give a positive integer smaller than $1$.
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

### `fs-bounded-implies-riemann-integrable`

````markdown
---
id: fs-bounded-implies-riemann-integrable
kind: false-statement
title: "FALSE: every bounded function on $[a,b]$ is Riemann integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-darboux-sums, def-darboux-integral, def-partition-and-refinement, def-dirichlet-and-thomae-functions, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-bounded-set, lem-finite-sum-laws, def-finite-sum, def-interval, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
short: "FALSE: bounded $\\Rightarrow$ integrable"
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
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
    - title: "MIT 18.013A, Nonintegrable Functions"
      url: "https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter20/section04.html"
pipeline_run: null
---

## Statement

**False claim:** every bounded function $f : [a,b] \to \mathbb{R}$
([[def-bounded-set]]) is Riemann integrable on $[a,b]$
([[def-darboux-integral]]).

Boundedness is exactly what is needed for the Darboux sums to **exist**
([[def-darboux-sums]]), and the claim above confuses that with their two extrema
agreeing. The witness below is bounded, takes only the values $0$ and $1$, and
has lower Darboux integral $0$ and upper Darboux integral $1$: as far apart as
the values allow.

## Facts & Assumptions

**Given:** The Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ restricted to $[0,1]$, that is $g : [0,1] \to \mathbb{R}$ with $g(x) = 1$ for rational $x$ and $g(x) = 0$ for irrational $x$ ([[def-dirichlet-and-thomae-functions]]).

[A1] The false claim: every bounded function on a closed bounded interval with distinct endpoints is Riemann integrable.

[L1] Both $\mathbb{Q}$ and $\mathbb{R}\setminus\mathbb{Q}$ are dense in $\mathbb{R}$, and a set is dense exactly when every neighbourhood of every real meets it ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L2] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $t_i < t_{i+1}$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = 1 - 0 = 1$, and $I_i = [t_i,t_{i+1}]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L3] $m_i = \inf g[I_i]$, $M_i = \sup g[I_i]$, $L(g,P) = \sum_{i<n}m_i\Delta_i$, $U(g,P) = \sum_{i<n}M_i\Delta_i$; $\underline{\int_0^1} g$ is the supremum of the lower sums and $\overline{\int_0^1} g$ the infimum of the upper sums; $g$ is integrable exactly when these agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L4] A set with a least element has it as its infimum, and one with a greatest element has it as its supremum; the supremum and infimum of $\{c\}$ are both $c$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L5] Finite sums: scaling and $\sum_{i<n}0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: the midpoint $(u+v)\cdot 2^{-1}$ of $u < v$ satisfies $u < (u+v)\cdot 2^{-1} < v$, and $N_\rho(c) \subseteq (u,v)$ for $c$ the midpoint and $\rho := (v-u)\cdot 2^{-1}$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-neighbourhood-r]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $g$ is bounded: $0 \le g(x) \le 1$ for every $x \in [0,1]$, since $g$ takes only the values $0$ and $1$. So its Darboux sums and integrals are defined by [L3]. [given, L3]

1.2 Every subinterval of every partition of $[0,1]$ contains both a rational and an irrational. Let $P = (n,t)$ be a partition and $i < n$; then $t_i < t_{i+1}$ by [L2], so with $c := (t_i + t_{i+1})\cdot 2^{-1}$ and $\rho := (t_{i+1}-t_i)\cdot 2^{-1}$ one has $N_\rho(c) \subseteq (t_i,t_{i+1}) \subseteq I_i$ by [L6], and $N_\rho(c)$ meets $\mathbb{Q}$ and meets $\mathbb{R}\setminus\mathbb{Q}$ by [L1]. [L1, L2, L6]

2.1 Hence $g[I_i] = \{0,1\}$ for every $i < n$, so $m_i = 0$ and $M_i = 1$ by [L4]. [step 1.2, given, L4]

3.1 Therefore $L(g,P) = \sum_{i<n}0\cdot\Delta_i = 0$ and $U(g,P) = \sum_{i<n}1\cdot\Delta_i = \sum_{i<n}\Delta_i = 1$, for **every** partition $P$ of $[0,1]$, by [L3], [L5] and [L2]. [step 2.1, L2, L3, L5]

4.1 The set of lower sums is $\{0\}$ and the set of upper sums is $\{1\}$, so $\underline{\int_0^1} g = 0$ and $\overline{\int_0^1} g = 1$ by [L4] and [L3]. Since $0 \ne 1$, $g$ is not Riemann integrable on $[0,1]$. [step 3.1, L3, L4]

5.1 $g$ is a bounded function on $[0,1]$, an interval with $0 < 1$, and it is not Riemann integrable; so [A1] fails at $g$ and the claim is false. [step 1.1, step 4.1, A1] ∎

## Remarks

- **What the true statement is.** Boundedness is necessary and not sufficient; the exact condition is that the discontinuity set have measure zero ([[thm-lebesgue-criterion]]). The Dirichlet function is discontinuous at **every** point of $[0,1]$ ([[thm-dirichlet-and-thomae-continuity-sets]]), and $[0,1]$ is not null ([[lem-nondegenerate-interval-is-not-null]]), so the criterion refuses it for the strongest possible reason.

- **The gap is maximal for the values available.** A function with values in $\{0,1\}$ can have upper minus lower integral at most $1$, and this one attains that. Halving the function halves the gap and changes nothing else, so no bound on the size of the failure can be extracted from boundedness alone.

- **The support is not what decides.** Thomae's function is nonzero at exactly the same points as the Dirichlet function, namely the rationals, and differs from it only in the *values* it takes there; yet it **is** integrable, with integral $0$ ([[fs-nonnegative-integrable-with-zero-integral-vanishes]]). What matters is not where a function is nonzero but where it is discontinuous.
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

### `lem-nondegenerate-interval-is-not-null`

````markdown
---
id: lem-nondegenerate-interval-is-not-null
kind: lemma
title: "A sequence of intervals covering $[a,b]$ has total length at least $b - a$, so no interval of positive length has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-interval-cover-total-length, def-measure-zero-and-content-zero, def-interval, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-bounded-set, thm-geometric-series, def-series, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-integer-power, thm-induction-principle, lem-nat-trichotomy, def-nat-order, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: []
landmark: true
short: "countable cover of $[a,b]$ has total length $\\ge b-a$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $(a_k)_{k \in \mathbb{N}}$ and
$(b_k)_{k \in \mathbb{N}}$ be sequences of reals with $a_k \le b_k$ for every
$k$, and suppose

$$[a,b] \;\subseteq\; \bigcup_{k \in \mathbb{N}} [a_k, b_k] .$$

If $M \in \mathbb{R}$ satisfies $\sum_{k < n} (b_k - a_k) \le M$ for every
$n \in \mathbb{N}$, then

$$M \;\ge\; b - a .$$

Consequently, if $a < b$ then **no subset of $\mathbb{R}$ containing $[a,b]$ has
measure zero** ([[def-measure-zero-and-content-zero]]); in particular none of
the four bounded intervals $[a,b]$, $(a,b)$, $[a,b)$, $(a,b]$ with $a < b$ has
measure zero, so measure zero is not a vacuous notion.

This is the countable strengthening of
[[lem-finite-interval-cover-total-length]], and it is what compactness is spent
on: the countable cover is enlarged to an open one at an arbitrarily small cost
in total length, and [[thm-heine-borel-characterisation-r]] reduces it to a
finite cover, where the finite lemma applies.

## Facts & Assumptions

**Given:** Reals $a \le b$, sequences $(a_k)$ and $(b_k)$ with $a_k \le b_k$ for every $k$ and $[a,b] \subseteq \bigcup_k [a_k,b_k]$, and a real $M$ with $\sum_{k<n}(b_k - a_k) \le M$ for every $n \in \mathbb{N}$. Throughout, $\theta := 2^{-1}$.

[L1] Measure zero: $A$ is null when for every real $\varepsilon > 0$ there is a sequence of closed intervals covering $A$ all of whose partial total lengths are $\le \varepsilon$; a subset of a null set is null ([[def-measure-zero-and-content-zero]]).

[L2] $[c,d] = \{\, x : c \le x \le d \,\}$ has length $d - c \ge 0$ when $c \le d$; $(c,d)$ is the open interval; a closed bounded interval is bounded ([[def-interval]], [[def-bounded-set]]).

[L3] Every open interval $(c,d)$ is an open set and every interval $[c,d]$ is a closed set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L4] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]]); from every family of open sets whose union contains a compact set, either the set is empty and the empty subfamily covers it, or one can extract $m \in \mathbb{N}$ and members $U_0, \dots, U_m$ of the family whose union already contains it ([[def-open-cover-r]]).

[L5] If $[a,b] \subseteq \bigcup_{j \le n}[c_j,d_j]$ with $c_j \le d_j$ and $a \le b$, then $\sum_{j \le n}(d_j - c_j) \ge b - a$; the same holds for covering intervals of any bounded form with those endpoints ([[lem-finite-interval-cover-total-length]]).

[L6] Powers and the geometric series: $\theta^0 = 1$ and $\theta^{k+1} = \theta^k \theta$, all $\theta^k > 0$ for $\theta > 0$, and $\sum_{k=0}^{\infty} \theta^k = 1/(1-\theta) = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L7] Finite sums: additivity, scaling by a constant, splitting, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] Every finite list $k_0, \dots, k_m$ of naturals has an upper bound $K \in \mathbb{N}$: by induction on $m$, taking $K = 0$ for the empty case and replacing $K$ by whichever of $K$ and $k_{m+1}$ is the larger, the order of $\mathbb{N}$ being total ([[thm-induction-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $0 < t \cdot 2^{-1} < t$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $M < b - a$. Since $\sum_{k<0}(b_k - a_k) = 0$ by [L7], we have $M \ge 0$, so $b - a > 0$ and $a < b$. Put $\varepsilon := (b - a - M) \cdot 2^{-1}$, a positive real by [L9]. [assume-contra, given, L7, L9]

2.1 For $k \in \mathbb{N}$ put $\delta_k := \varepsilon \cdot 4^{-1} \cdot \theta^{k}$, a positive real by [L6] and [L9], and $J_k := (a_k - \delta_k,\ b_k + \delta_k)$. Each $J_k$ is an open set by [L3], and $[a_k,b_k] \subseteq J_k$ because $a_k - \delta_k < a_k \le x \le b_k < b_k + \delta_k$ for $x \in [a_k,b_k]$, by [L2] and [L9]. Hence $[a,b] \subseteq \bigcup_k [a_k,b_k] \subseteq \bigcup_k J_k$, so $\{\, J_k : k \in \mathbb{N} \,\}$ is a family of open sets whose union contains $[a,b]$. The length of the interval with endpoints $a_k - \delta_k$ and $b_k + \delta_k$ is $(b_k - a_k) + 2\delta_k = (b_k - a_k) + \varepsilon \cdot 2^{-1} \cdot \theta^{k}$, by [L2] and [L9]. [step 1.1, given, L2, L3, L6, L9]

3.1 $[a,b]$ is closed and bounded by [L2] and [L3], hence compact by [L4]; so there are $m \in \mathbb{N}$ and members $J_{k_0}, \dots, J_{k_m}$ of the family with $[a,b] \subseteq J_{k_0} \cup \dots \cup J_{k_m}$. By [L8] fix $K \in \mathbb{N}$ with $k_t \le K$ for every $t \le m$; then every $J_{k_t}$ occurs among $J_0, \dots, J_K$, so $[a,b] \subseteq \bigcup_{k \le K} J_k$. [step 2.1, L2, L3, L4, L8, choose]

4.1 By [L5], applied to the $K+1$ intervals $J_k$ with endpoints $a_k - \delta_k \le b_k + \delta_k$, one gets $\sum_{k \le K} \big( (b_k - a_k) + \varepsilon \cdot 2^{-1} \cdot \theta^{k} \big) \ge b - a$. [step 2.1, step 3.1, L5]

5.1 The left-hand side is at most $M + \varepsilon$: by [L7] it splits as $\sum_{k < K+1}(b_k - a_k) + \varepsilon \cdot 2^{-1} \sum_{k < K+1} \theta^{k}$, the first sum is $\le M$ by hypothesis, and the second is $\le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$ by [L6]. So $b - a \le M + \varepsilon = (b - a + M) \cdot 2^{-1} < b - a$ by [L9], which is impossible; the assumption of step 1.1 is untenable and $M \ge b - a$. For the consequence, let $a < b$ and let $A \supseteq [a,b]$ be null; taking $\varepsilon_1 := (b-a) \cdot 2^{-1} > 0$ in [L1] gives a sequence of closed intervals covering $A$, hence covering $[a,b]$, with every partial total length $\le \varepsilon_1$, so what has just been proved gives $(b-a) \cdot 2^{-1} \ge b - a$ and hence $b - a \le 0$ by [L9], contradicting $a < b$. Finally each of $(a,b)$, $[a,b)$, $(a,b]$ and $[a,b]$ with $a < b$ contains $[a', b']$ for $a' := a + (b-a) \cdot 4^{-1}$ and $b' := b - (b-a) \cdot 4^{-1}$, which satisfy $a < a' < b' < b$ by [L9], so none of them is null. [step 1.1, step 2.1, step 4.1, given, L1, L6, L7, L9, discharge-contradiction] ∎

## Remarks

- **What the hypothesis $\sum_{k<n}(b_k - a_k) \le M$ says.** It is the working form of "the total length is at most $M$" recorded in [[def-measure-zero-and-content-zero]]: for nonnegative terms, having all partial sums below $M$ is the same as convergence with sum below $M$. Stating the lemma with partial sums avoids assuming convergence, and the conclusion is therefore also the statement that a cover of $[a,b]$ whose total length diverges is no counterexample.

- **The $\varepsilon$ is spent on making the cover open, not on the estimate.** Enlarging $[a_k,b_k]$ to $(a_k - \delta_k, b_k + \delta_k)$ adds $2\delta_k$ to the $k$-th length, and the geometric choice $\delta_k = \varepsilon \theta^k/4$ makes the whole added amount at most $\varepsilon$, however many intervals are used. This is the standard device and it recurs in [[thm-compact-null-is-content-zero]].

- **Compactness is not optional here.** Without it the finite lemma cannot be reached, and the countable statement is genuinely stronger than the finite one: $\mathbb{Q} \cap [0,1]$ is covered by countably many intervals of total length below any $\varepsilon$, and by no finite family of total length below $1$ ([[cex-null-set-not-of-content-zero]]).
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

### `lem-subset-of-countable`

````markdown
---
id: lem-subset-of-countable
kind: lemma
title: "Every subset of an at most countable set is at most countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, thm-well-ordering-principle, thm-recursion, thm-strong-induction, def-equinumerous, def-injection-surjection-bijection, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-nat-transitive-irreflexive, lem-nat-discrete, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "subsets of countable sets are countable"
proof_strategy: cases
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

Let $A$ be at most countable ([[def-countable]]) and let $B \subseteq A$. Then
$B$ is at most countable.

The proof establishes the sharper statement about subsets of $\mathbb{N}$ from
which this follows: **a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above, and countably infinite if it is not.**

**No choice principle is used.** This is the point of the lemma rather than a
footnote to it. The enumeration of an unbounded $S \subseteq \mathbb{N}$ is built
by always taking the *least* element of $S$ above the previous one, and the least
element of a nonempty set of naturals is canonical
([[thm-well-ordering-principle]]): it is determined by $S$, not selected from it.
Replacing "least" by "some" would turn the construction into an appeal to
dependent choice.

## Facts & Assumptions

**Given:** An at most countable set $A$ and a subset $B \subseteq A$. Throughout, a natural number is the von Neumann natural, so that $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]); that $n = \{\, m \in \mathbb{N} : m < n \,\}$, and in particular that every element of a natural number is a natural number, is [[lem-nat-order-is-membership]], proved earlier on this page from the additive order of [[def-nat-order]].

[L1] $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$, countably infinite when $A \approx \mathbb{N}$, and at most countable when one of the two holds ([[def-countable]]).

[L2] $\approx$ is symmetric and transitive, an injection is a bijection onto its image, and the restriction of a bijection to a subset is a bijection onto the image of that subset ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L3] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Strong induction: if for every $n$ the truth of $P(m)$ for all $m < n$ implies $P(n)$, then $P(n)$ holds for every $n$ ([[thm-strong-induction]]).

[L5] Recursion: for any set $X$, any $x_0 \in X$ and any $F : X \to X$ there is a function $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Order facts in $\mathbb{N}$: $m \in n \iff m < n$, $m \le n \iff m \subseteq n$, $n < \sigma(n)$, and $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]]); exactly one of $m < n$, $m = n$, $n < m$ holds, so $<$ is irreflexive and any two naturals are comparable ([[lem-nat-trichotomy]]); $\le$ is reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]), whence $<$ is transitive, because $m < n < p$ gives $m \le p$ while $m = p$ would force $m = n$ by antisymmetry; $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]).

[L7] Every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L8] Membership is irreflexive on $\mathbb{N}$: $k \notin k$ for every $k \in \mathbb{N}$, and every natural number is a transitive set ([[lem-nat-transitive-irreflexive]]).

## Proof

**Proof technique:** cases.

1.1 Since $A$ is at most countable there is a bijection $\varphi : A \to N_0$ where $N_0 = n$ for some $n \in \mathbb{N}$ or $N_0 = \mathbb{N}$; in either case $N_0 \subseteq \mathbb{N}$, and restricting $\varphi$ to $B$ gives a bijection of $B$ onto $S := \varphi[B] \subseteq \mathbb{N}$, so $B \approx S$. It therefore suffices to prove that every subset of $\mathbb{N}$ is at most countable, since then $S \approx n'$ or $S \approx \mathbb{N}$ and transitivity carries the conclusion back to $B$. [given, L1, L2, L6, suffices: every subset of N is at most countable]

1.2 Every subset of a natural number is finite: by strong induction on $n$, assume every subset of every $m < n$ is finite. If $n = 0$ then a subset $T \subseteq 0 = \varnothing$ is empty and $T \approx 0$. Otherwise $n = \sigma(m)$ by [L7], with $m < n$; given $T \subseteq \sigma(m) = m \cup \{m\}$, the set $T \setminus \{m\}$ is a subset of $m$, so the hypothesis at $m$ gives a bijection $u : T \setminus \{m\} \to k$ for some $k \in \mathbb{N}$. If $m \notin T$ then $T = T \setminus \{m\} \approx k$. If $m \in T$, extend $u$ by $u(m) := k$; since $k \notin k$ by irreflexivity of membership, the value $k$ is not already taken and the extension is a bijection $T \to k \cup \{k\} = \sigma(k)$. In both cases $T$ is finite, so the claim holds for $n$ and hence for all $n$. [L1, L2, L4, L6, L7, L8]

1.3 Case $S$ bounded: assume there is $b_0 \in \mathbb{N}$ with $s \le b_0$ for every $s \in S$. Then $s < \sigma(b_0)$ for every $s \in S$ by [L6], that is, $S \subseteq \sigma(b_0)$. [assume-case bounded, L6]

1.4 Case $S$ unbounded: assume that for every $b \in \mathbb{N}$ there is $s \in S$ with $b < s$. Then $S \ne \varnothing$, and for each $s \in S$ the set $\{\, t \in S : s < t \,\}$ is nonempty, so [L3] makes $\nu(s) := \min \{\, t \in S : s < t \,\}$ a well-defined element of $S$ with $s < \nu(s)$; this defines a function $\nu : S \to S$ with no arbitrary choices. [assume-case unbounded, L3, construct]

2.1 In the bounded case $S$ is a subset of the natural number $\sigma(b_0)$, hence finite by step 1.2, hence at most countable. [step 1.2, step 1.3, L1]

2.2 In the unbounded case apply [L5] with $X = S$, $x_0 = \min S$ (available by [L3] since $S \ne \varnothing$) and $F = \nu$: there is $e : \mathbb{N} \to S$ with $e(0) = \min S$ and $e(\sigma(n)) = \nu(e(n)) = \min \{\, t \in S : e(n) < t \,\}$ for every $n$. [step 1.4, L3, L5, construct]

3.1 For every $n$, $e(n) < e(\sigma(n))$ by the defining property of $\nu$; consequently $m < n$ implies $e(m) < e(n)$, by strong induction on $n$ (for $n = \sigma(j)$ and $m < n$ one has $m \le j$ by [L6], so either $m = j$, giving $e(m) < e(\sigma(j))$ directly, or $m < j$, giving $e(m) < e(j) < e(\sigma(j))$ by the hypothesis at $j$ and transitivity). Hence $e$ is injective: if $m \ne n$ then $m < n$ or $n < m$ by comparability, and irreflexivity forbids $e(m) = e(n)$. [step 2.2, L4, L6, L7]

3.2 For every $k$, $k \le e(k)$: again by strong induction, at $k = 0$ this is immediate, and for $k = \sigma(j)$ the hypothesis at $j$ gives $j \le e(j) < e(\sigma(j))$, so $j < e(k)$ and therefore $\sigma(j) \le e(k)$ by [L6], that is $k \le e(k)$. [step 2.2, L4, L6, L7]

4.1 $e$ is surjective onto $S$: let $t \in S$. The set $K = \{\, k \in \mathbb{N} : t \le e(k) \,\}$ contains $t$ by step 3.2, so $k^\ast := \min K$ exists by [L3]. If $k^\ast = 0$ then $e(0) = \min S \le t$ because $t \in S$, and $t \le e(0)$, so $e(0) = t$. Otherwise $k^\ast = \sigma(j)$ by [L7], and $j \notin K$ by minimality, so $e(j) < t$; then $t$ belongs to $\{\, u \in S : e(j) < u \,\}$, whence $e(k^\ast) = \min \{\, u \in S : e(j) < u \,\} \le t$, and with $t \le e(k^\ast)$ this gives $e(k^\ast) = t$. In both cases $t$ is a value of $e$. [step 2.2, step 3.2, L3, L6, L7]

5.1 In the unbounded case $e : \mathbb{N} \to S$ is therefore a bijection, so $S \approx \mathbb{N}$ and $S$ is countably infinite, hence at most countable. [step 3.1, step 4.1, L1, L2]

6.1 Every $S \subseteq \mathbb{N}$ is either bounded above or not, so steps 2.1 and 5.1 cover all cases and every subset of $\mathbb{N}$ is at most countable; by the reduction of step 1.1 the subset $B$ of the at most countable set $A$ is at most countable. [step 1.1, step 2.1, step 5.1, cases-exhaustive, L1, L2] ∎

## Remarks

- A subset of a countably infinite set may perfectly well be finite: $\{0, 1\}$ and $\varnothing$ are subsets of $\mathbb{N}$. This is exactly why the conclusion is "at most countable" and not "countably infinite", and it is why the library's convention that "countable" means "at most countable" ([[def-countable]]) keeps the statement free of case distinctions.

- The dichotomy proved here, bounded subsets of $\mathbb{N}$ are finite and unbounded ones are copies of $\mathbb{N}$, is the only structural fact about $\mathbb{N}$ the rest of the page needs. The enumeration $e$ built in the unbounded case is the increasing one, and it is unique with that property.

- The bounded case rests on the von Neumann encoding: "bounded by $b_0$" is literally "a subset of the set $\sigma(b_0)$", which is what makes the induction of step 1.2 an induction on a natural number rather than on an informal count. That translation is not a convention but a theorem, [[lem-nat-order-is-membership]], since the library's order on $\mathbb{N}$ is defined additively ([[def-nat-order]]) and not by membership.
````

### `rem-riemann-integral-choice-ledger`

````markdown
---
id: rem-riemann-integral-choice-ledger
kind: remark
title: "What this page costs in choice: Riemann's criterion, the Darboux-Riemann equivalence and integrability of a monotone function are theorems of ZF; integrability of a continuous function inherits the single use of countable choice inside Heine-Cantor; and only the forward half of the Lebesgue criterion spends countable choice, once, at the countable union of null sets"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-lebesgue-criterion, thm-countable-union-of-null-is-null, def-countable-choice, thm-riemann-criterion, thm-darboux-equals-riemann, thm-continuous-implies-integrable, thm-monotone-implies-integrable, thm-finitely-many-discontinuities-integrable, cor-countably-many-discontinuities-integrable, thm-heine-cantor-r, rem-heine-criterion-choice-cost, thm-compact-iff-sequentially-compact-r, lem-finite-choice, lem-countable-sets-are-null, thm-compact-null-is-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, lem-oscillation-superlevel-sets-are-closed, def-tagged-partition-and-riemann-sum]
justified_by: []
aliases: []
landmark: false
short: "choice ledger for the Riemann integral"
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
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

This page develops the Riemann integral over ZF except at the points recorded
below. The only choice principle that appears anywhere on it is the Axiom of
Countable Choice ([[def-countable-choice]]); the full Axiom of Choice is never
used, and no claim is made anywhere that a use recorded here is *necessary*.

## The ledger, item by item

| item | choice used | where it enters |
|---|---|---|
| [[def-partition-and-refinement]] | none | recursion only, over a totally defined map |
| [[def-darboux-sums]] | none | suprema and infima are canonical |
| [[lem-refinement-inequalities]] | none | one induction on the coarse index |
| [[def-darboux-integral]] | none | $\sup$ and $\inf$ over a set of partitions |
| [[lem-integral-elementary-bounds]] | none | — |
| [[thm-riemann-criterion]] | none | finitely many existential instantiations |
| [[def-tagged-partition-and-riemann-sum]] | none | a tagging is exhibited by a formula |
| [[thm-darboux-equals-riemann]] | none | see the note on finite choice below |
| [[thm-continuous-implies-integrable]] | $\mathrm{AC}_\omega$, once | inherited from [[thm-heine-cantor-r]] |
| [[thm-monotone-implies-integrable]] | none | the partition is a formula in $N$ |
| [[thm-finitely-many-discontinuities-integrable]] | $\mathrm{AC}_\omega$, once | inherited from [[thm-heine-cantor-r]] |
| [[thm-lebesgue-criterion]] | $\mathrm{AC}_\omega$, once, in the forward half only | [[thm-countable-union-of-null-is-null]] |
| [[cor-countably-many-discontinuities-integrable]] | none | see below |
| [[fs-bounded-implies-riemann-integrable]] | none | — |
| [[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]] | none | refuted from the interval-cover bound directly, not through the criterion |
| [[fs-nonnegative-integrable-with-zero-integral-vanishes]] | none | rests on the corollary, which is choice-free |
| [[fs-pointwise-limit-of-riemann-integrable-is-integrable]] | $\mathrm{AC}_\omega$, once | inherited through [[thm-finitely-many-discontinuities-integrable]] |

## The four entries that are easy to get wrong

**Selecting a tag in every subinterval is not countable choice.**
[[thm-darboux-equals-riemann]] picks, for a *single fixed* partition, one point
in each of its $n$ subintervals subject to a supremum condition. That family is
listed by the index $i < n$, and a family of nonempty sets listed by a natural
number has a choice function outright, by
[[lem-finite-choice]], which is a theorem of ZF proved by induction. (That
lemma is careful to state only the listed form, since no definition of
finiteness is available where it is proved; the listed form is what is used
here.) The
temptation to read this as a choice principle comes from the phrase "for each
$i$ pick a point"; the number of picks is what matters, and it is finite.

**"For each $n$ pick a partition" would be countable choice, and the page never
does it.** Both directions of [[thm-riemann-criterion]] and the whole of
[[thm-darboux-equals-riemann]] instantiate an existential a fixed, finite number
of times, once per $\varepsilon$ under consideration; no proof on this page ever
forms a sequence of partitions indexed by $\mathbb{N}$ and reasons about it. The
one place where a sequence of sets does appear is step 7.1 of
[[thm-lebesgue-criterion]], and that is exactly where the ledger records a cost.

**Only the forward half of [[thm-lebesgue-criterion]] costs anything.** The
implication "integrable $\Rightarrow$ the discontinuity set is null" exhibits
that set as $\bigcup_k E_{1/(k+1)}$ and applies
[[thm-countable-union-of-null-is-null]], which assumes $\mathrm{AC}_\omega$ and
names its own single use. The converse, "null $\Rightarrow$ integrable", is a
theorem of ZF: [[lem-oscillation-superlevel-sets-are-closed]] and
[[thm-heine-borel-characterisation-r]] are choice-free,
[[thm-compact-null-is-content-zero]] and [[lem-content-zero-implies-null]] are
choice-free, and the partition is built by Cousin's supremum construction, which
uses the completeness of $\mathbb{R}$ and nothing else. This asymmetry is why
[[cor-countably-many-discontinuities-integrable]] appears in the table with no
cost at all: it uses the converse half only, together with
[[lem-countable-sets-are-null]], whose own statement records that no choice
principle is used there.

**Heine-Cantor is the page's other source, and it is a single use.**
[[thm-heine-cantor-r]] states that its proof invokes $\mathrm{AC}_\omega$ exactly
once, to select one bad pair of points from each of countably many nonempty sets,
and that the implication it borrows from
[[thm-compact-iff-sequentially-compact-r]] — compact implies sequentially
compact — spends nothing. So [[thm-continuous-implies-integrable]] and
[[thm-finitely-many-discontinuities-integrable]] each inherit that one use and
add none of their own. The neighbouring ledger for the same expenditure on the
continuity page is [[rem-heine-criterion-choice-cost]].

## What is deliberately not claimed

Nothing here says that $\mathrm{AC}_\omega$ is **necessary** for any of the three
theorems that use it. The independence questions for the Heine-Cantor theorem
and for the countable additivity of nullity over $\mathbb{R}$ are not settled in
this library, and no item on this page asserts anything about them. What the
table records is what the proofs on disk actually spend, and it is meant to be
checked against them rather than believed.

The one further caution is that a *later* proof of a result stated here could
spend less. The direct argument for [[thm-monotone-implies-integrable]] is kept
alongside the shorter route through
[[cor-countably-many-discontinuities-integrable]] precisely for that reason: the
direct one is elementary and quantitative, and both are choice-free, so nothing
is lost by keeping the pair.
````

### `thm-dirichlet-and-thomae-continuity-sets`

````markdown
---
id: thm-dirichlet-and-thomae-continuity-sets
kind: theorem
title: "The Dirichlet function is continuous at no point of $\\mathbb{R}$, and Thomae's function is continuous at every irrational and at no rational, so its set of continuity points is exactly the set of irrationals and its oscillation at $c$ equals $t(c)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-dirichlet-and-thomae-functions, def-continuity-real, lem-q-and-irrationals-dense-r, def-oscillation, thm-continuity-iff-oscillation-zero, cor-archimedean-reciprocal, lem-integer-part, def-canonical-natural, lem-of-naturals-positive, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-neighbourhood-r, thm-closure-characterisations-r, lem-rat-embeds-dense, def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: [thm-thomae-continuity-set]
landmark: true
short: "Thomae is continuous exactly at the irrationals"
proof_strategy: cases
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
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Statement

Let $\mathbf{1}_{\mathbb{Q}}$ and $t$ be the Dirichlet and Thomae functions
([[def-dirichlet-and-thomae-functions]]), and write $q(x)$ for the least
denominator of a rational $x$, so that $t(x) = 1/\iota(q(x))$ there and
$t(x) = 0$ at every irrational $x$. Then:

1. $\mathbf{1}_{\mathbb{Q}}$ is continuous at **no** point of $\mathbb{R}$
   ([[def-continuity-real]]);
2. $\omega_{t}(c) = t(c)$ for **every** real $c$ ([[def-oscillation]]);
3. $t$ is continuous at every irrational and discontinuous at every rational, so
   its set of continuity points is exactly $\mathbb{R} \setminus \mathbb{Q}$.

**Claim 1 restates, on this page, what
[[cex-dirichlet-is-nowhere-continuous]] already proves.** That item is homed on
the examples page of *Continuity, the intermediate and extreme value theorems,
and uniform continuity*, and an examples page is a leaf of this library: nothing
outside it may depend on an item that lives there. The claim is needed here, and
on later pages, as a citable statement, so it is proved again rather than
quoted. The two statements are the same statement, and neither is stronger than
the other; the proof below is the same argument, and no originality is claimed
for it. This is the pattern
[[ex-distance-to-the-integers-is-1-lipschitz]] follows.

## Facts & Assumptions

**Given:** The Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ and Thomae's function $t$, and a real $c$; $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$ are the canonical copies and $\iota(q) = q \cdot 1_{\mathbb{R}}$.

[A1] $\mathbf{1}_{\mathbb{Q}}(x) = 1$ for $x \in \mathbb{Q}$ and $0$ otherwise; $t(x) = 1/\iota(q(x)) \in (0,1]$ for $x \in \mathbb{Q}$ and $t(x) = 0$ otherwise, where $q(x) = \min\{q \ge 1 : \iota(q)x \in \mathbb{Z}\}$ ([[def-dirichlet-and-thomae-functions]]).

[L1] Both $\mathbb{Q}$ and $\mathbb{R} \setminus \mathbb{Q}$ are dense in $\mathbb{R}$, so every $N_\delta(y)$ contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]], [[lem-rat-embeds-dense]]).

[L2] For every real $x$ there is exactly one integer $m$ with $m \le x < m+1$, written $\lfloor x \rfloor$ ([[lem-integer-part]]); consequently no integer lies strictly between two consecutive integers.

[L3] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; and $\iota$ is positive and strictly increasing on the naturals $\ge 1$, so $1 \le q \le N$ gives $\iota(q) \le \iota(N)$ and $1/\iota(N) \le 1/\iota(q)$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A nonempty finite set of reals presented as $\{a_{0}, \dots, a_{n}\}$ has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] $\omega_{f}(S) = \sup\{|f(x)-f(y)| : x,y \in S\}$ and $\omega_{f}(c) = \inf\{\omega_{f}(N_\delta(c)) : \delta > 0\}$ for $f$ defined on all of $\mathbb{R}$, both computed in $\overline{\mathbb{R}}$, where every set has a supremum and an infimum; $f$ is continuous at $c$ if and only if $\omega_{f}(c) = 0$ ([[def-oscillation]], [[def-extended-reals]], [[lem-extended-reals-complete]], [[thm-continuity-iff-oscillation-zero]]).

[L6] $|u| \ge 0$, $|u - v| \le |u| + |v|$, and if $0 \le u \le M$ and $0 \le v \le M$ then $|u - v| \le M$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** cases.

1.1 Claim 1. Let $c$ be real and let $\delta > 0$ be real. The neighbourhood $N_\delta(c)$ contains a rational $u$ and an irrational $v$, and $\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(v) = 1 - 0 = 1$; since $\mathbf{1}_{\mathbb{Q}}(c)$ is $0$ or $1$, one of $|\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(c)|$ and $|\mathbf{1}_{\mathbb{Q}}(v) - \mathbf{1}_{\mathbb{Q}}(c)|$ equals $1$. So the continuity condition at $c$ fails for $\varepsilon = 1$, no $\delta$ witnessing it, and $\mathbf{1}_{\mathbb{Q}}$ is continuous at no point. [A1, L1]

1.2 **A separation estimate.** For a real $c$ and a natural $q \ge 1$ put $m := \lfloor \iota(q)c \rfloor$ and define $d_{q}(c) := 1/\iota(q)$ if $\iota(q)c = m$, and $d_{q}(c) := \min\{\iota(q)c - m,\ m + 1 - \iota(q)c\}/\iota(q)$ otherwise. In both cases $d_{q}(c) > 0$. [L2, L3, construct]

1.3 **A lower bound.** For every real $\delta > 0$ the neighbourhood $N_\delta(c)$ contains an irrational $v$, and $c \in N_\delta(c)$, so $\omega_{t}(N_\delta(c)) \ge |t(c) - t(v)| = t(c)$; taking the infimum over $\delta$ gives $\omega_{t}(c) \ge t(c)$. [A1, L1, L5]

2.1 With $d_{q}(c)$ as in step 1.2: for every integer $p$ with $p/\iota(q) \ne c$ one has $|c - p/\iota(q)| \ge d_{q}(c)$. If $\iota(q)c = m$ then $p \ne m$, so $|\iota(q)c - p| = |m - p| \ge 1$; otherwise $m < \iota(q)c < m+1$, and $p \le m$ gives $\iota(q)c - p \ge \iota(q)c - m$ while $p \ge m+1$ gives $p - \iota(q)c \ge m+1-\iota(q)c$. Dividing by $\iota(q) > 0$ gives the claim. [step 1.2, L2, L3]

2.2 For a real $c$ and a natural $N \ge 1$ put $\delta_{N}(c) := \min\{d_{1}(c), \dots, d_{N}(c)\}$, the minimum of a nonempty finite set of positive reals, so $\delta_{N}(c) > 0$. [step 1.2, L4, construct]

3.1 If $x$ is rational with $0 < |x - c| < \delta_{N}(c)$ then $q(x) > N$ and hence $t(x) < 1/\iota(N)$. Indeed $x = p/\iota(q)$ with $q := q(x)$ and $p := \iota(q)x$; if $q \le N$ then $p/\iota(q) = x \ne c$, so step 2.1 gives $|c - x| \ge d_{q}(c) \ge \delta_{N}(c)$, contrary to the hypothesis. So $q(x) > N$, and $t(x) = 1/\iota(q(x)) < 1/\iota(N)$ because $\iota$ is strictly increasing. [step 2.1, step 2.2, A1, L3]

4.1 **An upper bound for $t$ near $c$.** Let $\varepsilon > 0$ be real, take $N \ge 1$ with $1/\iota(N) < \varepsilon$ and put $\delta := \delta_{N}(c)$. Every $x \in N_\delta(c)$ satisfies $0 \le t(x) \le M$ where $M := \max\{t(c), \varepsilon\}$: for $x = c$ this is $t(c) \le M$; for $x \ne c$ rational it is $t(x) < 1/\iota(N) < \varepsilon \le M$ by step 3.1; and for $x$ irrational it is $t(x) = 0$. [step 3.1, A1, L3, L6]

5.1 Hence $\omega_{t}(N_\delta(c)) \le M$ with $\delta$ and $M$ as in step 4.1, since $|t(x) - t(y)| \le M$ for all $x, y \in N_\delta(c)$, so $M$ is an upper bound of the set whose supremum $\omega_{t}(N_\delta(c))$ is; and therefore $\omega_{t}(c) \le M = \max\{t(c), \varepsilon\}$. [step 4.1, L5, L6]

6.1 Claim 2 now follows in the two cases of the value $t(c)$, which are exactly the two cases of the position of $c$. If $c$ is rational then $t(c) > 0$, and applying step 5.1 with the admissible choice $\varepsilon := t(c)$ gives $\omega_{t}(c) \le \max\{t(c), t(c)\} = t(c)$; with step 1.3 this gives $\omega_{t}(c) = t(c)$. [step 5.1, step 1.3, A1, assume-case rat]

6.2 If $c$ is irrational then $t(c) = 0$, and step 5.1 gives $\omega_{t}(c) \le \max\{0, \varepsilon\} = \varepsilon$ for every real $\varepsilon > 0$; since also $\omega_{t}(c) \ge 0$, an extended real that is $\le \varepsilon$ for every positive real $\varepsilon$ and $\ge 0$ must be $0$, so $\omega_{t}(c) = 0 = t(c)$. [step 5.1, step 1.3, A1, L5, assume-case irr]

7.1 Every real is rational or irrational and not both, so steps 6.1 and 6.2 establish claim 2 for every real $c$. [step 6.1, step 6.2, cases-exhaustive]

8.1 Claim 3 follows from claim 2: $t$ is continuous at $c$ exactly when $\omega_{t}(c) = 0$, that is exactly when $t(c) = 0$, that is exactly when $c$ is irrational. So the continuity set of $t$ is $\mathbb{R} \setminus \mathbb{Q}$ and its discontinuity set is $\mathbb{Q}$. [step 7.1, A1, L5] ∎

## Remarks

- **What claim 2 adds beyond claim 3.** Continuity at a point is the vanishing of the oscillation there, so claim 3 is the special case of claim 2 recording where the value is $0$. The value itself is used on the companion page, where the oscillation of $t$ is computed at particular points, and it shows that the failure of continuity at a rational is exactly as large as the value of $t$ there: small denominators are the bad points.

- **The continuity set of $t$ is $G_\delta$, as it must be.** The irrationals form a $G_\delta$ set ([[cor-q-is-meager-and-not-g-delta]]), in agreement with [[thm-discontinuity-set-is-f-sigma]]. The reverse arrangement is impossible: no function is continuous at every rational and discontinuous at every irrational, because $\mathbb{Q}$ is not $G_\delta$ ([[cor-no-function-is-continuous-exactly-on-q]]).

- **No choice principle is spent.** The separation estimate of step 1.2 is written down from $\lfloor \iota(q)c \rfloor$, the minimum of step 2.1 is the minimum of an explicitly listed finite set, and the least denominator $q(x)$ is a least element. Density supplies points, and it is used only in the form "every neighbourhood meets the set", never to build a sequence.
````

### `thm-finitely-many-discontinuities-integrable`

````markdown
---
id: thm-finitely-many-discontinuities-integrable
kind: theorem
title: "A bounded function on $[a,b]$ that is continuous except at finitely many points is Riemann integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, def-continuity-real, def-classification-of-discontinuities, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, def-bounded-set, thm-heine-cantor-r, def-uniform-continuity-real, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, thm-open-set-algebra-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, thm-well-ordering-principle, thm-induction-principle, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "finitely many discontinuities $\\Rightarrow$ integrable"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Functions with finitely many discontinuities (University of Pennsylvania)"
      url: "https://www2.math.upenn.edu/~gressman/analysis/07-integrationfuncs.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Suppose there are $r \in \mathbb{N}$ and points
$d_0, \dots, d_{r-1} \in [a,b]$ such that $f$ is continuous
([[def-continuity-real]]) at every point of $[a,b]$ other than
$d_0, \dots, d_{r-1}$; that is, every discontinuity of $f$
([[def-classification-of-discontinuities]]) occurs among those $r$ listed
points. Then $f$ is Riemann integrable on $[a,b]$ ([[def-darboux-integral]]).

For $r = 0$ the hypothesis says $f$ is continuous on $[a,b]$ and the conclusion
is [[thm-continuous-implies-integrable]]; the argument below covers that case
without a separate treatment. Repetitions in the list are allowed and harmless,
and no claim is made that the listed points **are** discontinuities: the
hypothesis is one-sided, so a finite superset of the discontinuity set is enough.

**Nothing is said about the kind of the discontinuities.** They may be
removable, jumps, or essential ([[def-classification-of-discontinuities]]); only
their number matters. Boundedness is a genuine hypothesis, since an unbounded
function has no Darboux sums at all ([[def-darboux-sums]]).

## Facts & Assumptions

**Given:** Reals $a < b$; a bounded $f : [a,b] \to \mathbb{R}$; a real $M_{+} > 0$ with $|f(x)| \le M_{+}$ for every $x \in [a,b]$; and $r \in \mathbb{N}$ with points $d_0, \dots, d_{r-1} \in [a,b]$ such that $f$ is continuous at every $x \in [a,b]$ with $x \ne d_k$ for all $k < r$.

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, $\Delta_i \le \|P\|$, no $t_j$ with $j \le n$ lies strictly between $t_i$ and $t_{i+1}$, inserting a point does not increase the mesh and adds that point to $\operatorname{pts}(P)$, and the uniform partition $U_N$ has mesh $(b-a)/\iota(N)$ ([[def-partition-and-refinement]]).

[L2] $U(f,P) - L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$, $M_i - m_i = \sup\{|f(x)-f(y)| : x,y \in I_i\}$, and $0 \le M_i - m_i \le 2M_{+}$ ([[def-darboux-sums]]).

[L3] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P)-L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L4] A closed bounded subset of $\mathbb{R}$ is compact, and a continuous real function on a compact subset $K$ of $\mathbb{R}$ is uniformly continuous on $K$: for every real $\eta > 0$ there is a real $\delta > 0$ with $|g(x)-g(y)| < \eta$ for all $x,y \in K$ with $|x-y| < \delta$. This holds for $K = \varnothing$ as well, the condition being vacuous there ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L5] Every open interval is an open set, an arbitrary union of open sets is open, a complement of an open set is closed, an intersection of closed sets is closed, and $[a,b]$ is closed and bounded ([[def-interval]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]], [[def-neighbourhood-r]], [[def-bounded-set]]).

[L6] For $u < v$ the endpoints $u$ and $v$ are adherent to $(u,v)$, so every closed set containing $(u,v)$ contains $[u,v]$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L7] If $g : A \to \mathbb{R}$ is continuous at $c \in A$ and $c \in B \subseteq A$, then the restriction $g|_B$ is continuous at $c$ as a function on $B$: the same $\delta$ works, the condition quantifying over fewer points ([[def-continuity-real]]).

[L8] Finite sums: splitting, additivity, scaling, monotonicity in the terms, and telescoping ([[def-finite-sum]], [[lem-finite-sum-laws]]). Also the interchange of two finite sums, $\sum_{i<n}\sum_{k<r}c_{i,k} = \sum_{k<r}\sum_{i<n}c_{i,k}$ for any doubly indexed family of reals. That identity is **not** one of the six clauses of [[lem-finite-sum-laws]] and is therefore proved here, by induction on $r$ ([[thm-induction-principle]]). At $r = 0$ each inner sum $\sum_{k<0}c_{i,k}$ is $0$ by the recursion clause of [[def-finite-sum]], so the left side is $\sum_{i<n}0 = 0$ by clause 2 of [[lem-finite-sum-laws]] taken with $\lambda = 0$, while the right side is an empty sum and so is $0$ as well. Passing from $r$ to $r+1$, the recursion clause and clause 1 of [[lem-finite-sum-laws]] give $\sum_{i<n}\sum_{k<r+1}c_{i,k} = \sum_{i<n}\bigl(\sum_{k<r}c_{i,k} + c_{i,r}\bigr) = \sum_{i<n}\sum_{k<r}c_{i,k} + \sum_{i<n}c_{i,r}$, which by the induction hypothesis is $\sum_{k<r}\sum_{i<n}c_{i,k} + \sum_{i<n}c_{i,r} = \sum_{k<r+1}\sum_{i<n}c_{i,k}$, again by the recursion clause. Note that $n$ is fixed throughout the induction and only $r$ varies.

[L9] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L10] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; $\iota(N) > 0$ for $N \ge 1$ and $\iota(r) \ge 0$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L11] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $x,y \in [c,d]$ gives $|x-y| \le d-c$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let a real $\varepsilon > 0$ be given. Put $\theta := \varepsilon \cdot \bigl(4(b-a)\bigr)^{-1}$ and $\eta := \varepsilon \cdot \bigl(16\,M_{+}(\iota(r)+1)\bigr)^{-1}$, both positive reals by [L10] and [L11]. [given, L10, L11]

2.1 Put $V := \bigcup_{k<r}\,(d_k - \eta,\ d_k + \eta)$, an open set by [L5], and $K := [a,b] \setminus V = [a,b] \cap (\mathbb{R}\setminus V)$, an intersection of two closed sets, hence closed by [L5], and bounded since $K \subseteq [a,b]$; so $K$ is compact by [L4]. [step 1.1, L4, L5, construct]

3.1 $f$ is continuous at every point of $K$: a point $x \in K$ is not any $d_k$, since $d_k \in (d_k-\eta, d_k+\eta) \subseteq V$ and $K$ misses $V$. Hence the restriction $f|_K$ is continuous on $K$ by [L7]. [step 2.1, given, L7, L11]

4.1 By [L4] applied to $f|_K$ on the compact set $K$ with the value $\theta$, fix a real $\delta > 0$ such that $|f(x)-f(y)| < \theta$ for all $x,y \in K$ with $|x-y| < \delta$. [step 2.1, step 3.1, L4, choose]

5.1 By [L10] fix a natural $N \ge 1$ with $1/\iota(N) < \delta \cdot (b-a)^{-1}$, so that the uniform partition $U_N$ has mesh $(b-a)/\iota(N) < \delta$ by [L1] and [L11]. Let $P = (n,t)$ be the partition obtained from $U_N$ by inserting, one after another, those of the $2r$ points $d_k - \eta$ and $d_k + \eta$ with $k < r$ that lie in $[a,b]$. By [L1] each insertion leaves the mesh no larger, so $\|P\| < \delta$, and $\operatorname{pts}(P)$ contains every one of those points that lies in $[a,b]$. [step 4.1, L1, L10, L11, choose, construct]

6.1 **A dichotomy for each subinterval and each $k$.** Fix $i < n$ and $k < r$, and write $c^{-} := d_k - \eta$ and $c^{+} := d_k + \eta$. Neither $c^{-}$ nor $c^{+}$ lies in the open interval $(t_i,t_{i+1})$: if such a point lies in $[a,b]$ it is a member of $\operatorname{pts}(P)$ by step 5.1, hence is some $t_j$ with $j \le n$, and no $t_j$ lies strictly between $t_i$ and $t_{i+1}$ by [L1]; and if it lies outside $[a,b]$ it is outside $[t_i,t_{i+1}]$ altogether. [step 5.1, L1, L11]

7.1 Consequently either $(t_i,t_{i+1}) \cap (c^{-},c^{+}) = \varnothing$, or $I_i \subseteq [c^{-},c^{+}]$. Suppose the intersection contains a point $z$ and let $w \in (t_i,t_{i+1})$. If $w \le c^{-}$ then $c^{-}$ lies between $w$ and $z$, both in the order-convex set $(t_i,t_{i+1})$, so $c^{-} \in (t_i,t_{i+1})$, contradicting step 6.1; likewise $w \ge c^{+}$ is impossible. So $(t_i,t_{i+1}) \subseteq (c^{-},c^{+})$. Then $c^{-} < z < t_{i+1}$ with $c^{-} \notin (t_i,t_{i+1})$ forces $c^{-} \le t_i$, and symmetrically $c^{+} \ge t_{i+1}$, that is $I_i \subseteq [c^{-},c^{+}]$. [step 6.1, L11, given]

8.1 Call $i < n$ **bad** when $I_i \subseteq [d_k-\eta, d_k+\eta]$ for some $k < r$, and **good** otherwise. If $i$ is good then by step 7.1 the open interval $(t_i,t_{i+1})$ meets no $(d_k-\eta,d_k+\eta)$, hence $(t_i,t_{i+1}) \subseteq K$; since $K$ is closed, [L6] gives $I_i = [t_i,t_{i+1}] \subseteq K$. [step 2.1, step 7.1, L6]

9.1 For a good $i$: all $x,y \in I_i$ lie in $K$ and satisfy $|x-y| \le \Delta_i \le \|P\| < \delta$ by [L1] and [L11], so $|f(x)-f(y)| < \theta$ by step 4.1; therefore $\theta$ bounds the set whose supremum is $M_i - m_i$, and $M_i - m_i \le \theta$ by [L2]. [step 4.1, step 5.1, step 8.1, L1, L2, L11]

9.2 **Bounding the bad lengths.** For $k < r$ put $J_k := \{\, i < n : d_k - \eta \le t_i \text{ and } t_{i+1} \le d_k + \eta \,\}$, so that $i$ is bad exactly when $i \in J_k$ for some $k < r$, and put $h^{k}_i := \Delta_i$ for $i \in J_k$ and $h^{k}_i := 0$ otherwise. Each $J_k$ is a set of consecutive indices: if $i < i' < i''$ with $i, i'' \in J_k$ then $d_k - \eta \le t_i \le t_{i'}$ and $t_{i'+1} \le t_{i''+1} \le d_k + \eta$, so $i' \in J_k$. [step 8.1, L1, L11, construct]

10.1 $\sum_{i<n} h^{k}_i \le 2\eta$ for each $k < r$. If $J_k = \varnothing$ the sum is $0$. Otherwise let $p := \min J_k$ and let $q$ be the least natural with $q > p$ and $q \notin J_k$, which exists by [L9] because $n \notin J_k$; by step 9.2 then $J_k = \{\, i : p \le i < q \,\}$, since an $i \in J_k$ with $i \ge q$ together with $p \in J_k$ and $p < q \le i$ would put $q \in J_k$. Splitting the sum at $p$ and at $q$ and discarding the vanishing outer parts ([L8]) gives $\sum_{i<n}h^{k}_i = \sum_{i=p}^{q-1}\Delta_i = t_q - t_p$ by telescoping, and $p \in J_k$, $q-1 \in J_k$ give $t_p \ge d_k-\eta$ and $t_q \le d_k+\eta$, whence $t_q - t_p \le 2\eta$. [step 9.2, L8, L9, L11]

11.1 Put $\beta_i := \Delta_i$ for $i$ bad and $\beta_i := 0$ for $i$ good. Then $\beta_i \le \sum_{k<r}h^{k}_i$ for every $i < n$, all terms being nonnegative and a bad $i$ lying in some $J_k$; so by [L8], $\sum_{i<n}\beta_i \le \sum_{i<n}\sum_{k<r}h^{k}_i = \sum_{k<r}\sum_{i<n}h^{k}_i \le \sum_{k<r}2\eta = 2\eta\,\iota(r)$, using step 10.1. [step 9.2, step 10.1, L8, L11]

12.1 For every $i < n$ one has $(M_i - m_i)\Delta_i \le \theta\,\Delta_i + 2M_{+}\,\beta_i$: for good $i$ this is step 9.1 together with $\beta_i \ge 0$, and for bad $i$ it follows from $M_i - m_i \le 2M_{+}$ in [L2] and $\beta_i = \Delta_i$, together with $\theta\Delta_i \ge 0$. [step 9.1, step 11.1, L2, L11]

13.1 Summing step 12.1 over $i < n$ and using [L8], [L1] and step 11.1: $U(f,P) - L(f,P) \le \theta\sum_{i<n}\Delta_i + 2M_{+}\sum_{i<n}\beta_i \le \theta(b-a) + 4M_{+}\eta\,\iota(r) \le \varepsilon\cdot 4^{-1} + \varepsilon\cdot 4^{-1} < \varepsilon$, the last estimate because $4M_{+}\eta\,\iota(r) \le 4M_{+}\eta(\iota(r)+1) = \varepsilon\cdot 4^{-1}$ by step 1.1. [step 1.1, step 11.1, step 12.1, L1, L2, L8, L10, L11]

14.1 The real $\varepsilon > 0$ of step 1.1 was arbitrary and step 13.1 produced a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$, so [L3] applies and $f$ is Riemann integrable on $[a,b]$. [step 1.1, step 13.1, L3] ∎

## Remarks

- **Where the two budgets go.** The $\varepsilon/4$ of step 13.1 that is spent on the good subintervals buys uniform continuity away from the bad points; the $\varepsilon/4$ spent on the bad ones buys nothing but their total length, and it is affordable only because there are finitely many of them and $\eta$ may be chosen after $r$ is known. Both halves survive verbatim when "finitely many points" is replaced by "a set of measure zero", and that replacement is [[thm-lebesgue-criterion]].

- **The listing form of the hypothesis is deliberate.** Saying "the set of discontinuities is finite" would require a notion of finiteness and a listing theorem to use it; saying "every discontinuity is among $d_0,\dots,d_{r-1}$" is what the proof consumes and is what every application supplies. The same device is used by [[lem-finite-set-has-max]].

- **The result is genuinely weaker than what is true.** Thomae's function has infinitely many discontinuities and is integrable, and so is the indicator of the Cantor set, whose discontinuity set is uncountable. What survives is that a *finite* discontinuity set never obstructs integrability, whatever the function does at those points.

- **Choice.** The proof selects nothing from an infinite family; the only countable choice behind it is the single use inside [[thm-heine-cantor-r]], invoked at step 4.1. See [[rem-riemann-integral-choice-ledger]].
````

### `thm-heine-cantor-r`

````markdown
---
id: thm-heine-cantor-r
kind: theorem
title: "Heine-Cantor in $\\mathbb{R}$: a continuous real function on a compact subset of $\\mathbb{R}$ is uniformly continuous, proved $\\mathbb{R}$-natively from sequential compactness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-continuity-real, def-continuity-real, lem-real-and-metric-notions-agree, thm-sequential-criterion-for-continuity, thm-compact-iff-sequentially-compact-r, def-open-cover-r, def-real-limit, def-sequence, lem-index-map-grows, def-countable-choice, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, def-ordered-field]
justified_by: []
aliases: [thm-uniform-continuity-on-compact-r]
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "Heine-Cantor in R"
proof_strategy: contradiction
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
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.19)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]) and let
$f : K \to \mathbb{R}$ be continuous on $K$ ([[def-continuity-real]]). Then $f$
is uniformly continuous on $K$ ([[def-uniform-continuity-real]]).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-heine-cantor-metric]], proved there from the cover machinery of
metric spaces; the proof below is $\mathbb{R}$-native and runs through
[[thm-compact-iff-sequentially-compact-r]], which is order-based. That the two
statements are the same statement in two vocabularies is
[[lem-real-and-metric-notions-agree]], clauses 1, 2 and 5, immediately above.

**The choice cost, named.** The proof invokes the axiom of countable choice
([[def-countable-choice]]) exactly once, at step 3.1, to select one bad pair of
points from each of countably many nonempty sets. The backward implication of
[[thm-compact-iff-sequentially-compact-r]] also spends countable choice, and
that item names its own uses; the forward implication used here, from compact to
sequentially compact, does not. No claim is made that the axiom is necessary
for either.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$ and a function $f : K \to \mathbb{R}$ continuous on $K$.

[L1] Uniform continuity on $K$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in K$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$. Its negation: there is a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ some pair $x, x' \in K$ has $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] A compact subset of $\mathbb{R}$ is sequentially compact: every sequence with all terms in $K$ has a subsequence converging to a point of $K$ ([[thm-compact-iff-sequentially-compact-r]], [[def-open-cover-r]], [[def-sequence]], [[def-real-limit]]).

[L3] Countable choice: for a family $(P_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function on $\mathbb{N}$ picking an element of each ([[def-countable-choice]]).

[L4] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]], [[def-sequence]]).

[L5] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; and $0 < s \le t$ implies $1/t \le 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L6] Sequential criterion, the choice-free direction: if $f$ is continuous at $p \in K$ and $(z_j)$ has terms in $K$ with $z_j \to p$, then $f(z_j) \to f(p)$ ([[thm-sequential-criterion-for-continuity]], [[def-continuity-real]]).

[L7] Triangle inequality and absolute value: $|u + v| \le |u| + |v|$, $|{-u}| = |u|$, $|u| \ge 0$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

[L8] Convergence of real sequences is tested at rational $\varepsilon > 0$, and below every positive real lies a positive rational, so the test may equally be run at every real $\varepsilon > 0$ ([[def-real-limit]], [[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $f$ is not uniformly continuous on $K$. By [L1] fix a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ there are $x, x' \in K$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$. [L1, assume-contra]

2.1 For $k \in \mathbb{N}$ put $P_k := \{\, (x,x') \in K \times K \ : \ |x - x'| < 1/(k+1) \text{ and } |f(x) - f(x')| \ge \varepsilon_0 \,\}$. Since $1/(k+1) > 0$, step 1.1 makes every $P_k$ nonempty. [step 1.1, L5]

3.1 By [L3] applied to the family $(P_k)_{k \in \mathbb{N}}$ fix a function $k \mapsto (x_k, x'_k)$ with $(x_k, x'_k) \in P_k$ for every $k$. **This is the single use of countable choice in this proof.** [step 2.1, L3, choose]

4.1 $(x_k)$ is a sequence of reals with all terms in $K$, so by [L2] there are a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and $p \in K$ with $x_{n_j} \to p$. [step 3.1, L2, choose]

5.1 **The second sequence converges to $p$ as well.** Let a rational $\varepsilon > 0$ be given. By [L5] and [L8] fix $J_1$ with $1/(j+1) < \varepsilon/2$ for every $j \ge J_1$, and by step 4.1 fix $J_2$ with $|x_{n_j} - p| < \varepsilon/2$ for every $j \ge J_2$. For $j \ge \max\{J_1, J_2\}$, using $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ and $n_j \ge j$ from [L4], we get $|x'_{n_j} - x_{n_j}| < 1/(n_j+1) \le 1/(j+1) < \varepsilon/2$, hence $|x'_{n_j} - p| \le |x'_{n_j} - x_{n_j}| + |x_{n_j} - p| < \varepsilon$ by [L7]. So $x'_{n_j} \to p$. [step 3.1, step 4.1, L4, L5, L7, L8]

6.1 The point $p$ lies in $K$ and $f$ is continuous at $p$, so [L6] applied to the two sequences of steps 4.1 and 5.1, both with terms in $K$, gives $f(x_{n_j}) \to f(p)$ and $f(x'_{n_j}) \to f(p)$. [step 4.1, step 5.1, L6]

7.1 By [L8] fix a rational $\varepsilon$ with $0 < \varepsilon < \varepsilon_0/2$, and by step 6.1 fix $J$ with $|f(x_{n_j}) - f(p)| < \varepsilon$ and $|f(x'_{n_j}) - f(p)| < \varepsilon$ for every $j \ge J$. For such $j$, [L7] gives $|f(x_{n_j}) - f(x'_{n_j})| \le |f(x_{n_j}) - f(p)| + |f(p) - f(x'_{n_j})| < 2\varepsilon < \varepsilon_0$. [step 6.1, L7, L8, choose]

8.1 But $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ gives $|f(x_{n_j}) - f(x'_{n_j})| \ge \varepsilon_0$ for every $j$, which contradicts step 7.1. The assumption of step 1.1 is therefore false, and $f$ is uniformly continuous on $K$. [step 3.1, step 7.1, discharge-contradiction] ∎

## Remarks

- **Where compactness is used, and where continuity is used.** Compactness is used once, in step 4.1, to extract a convergent subsequence; continuity is used once, in step 6.1, at the single point $p$ that the extraction produces. Neither can be weakened: $x \mapsto 1/x$ on $(0,1)$ is continuous on a bounded non-closed set and not uniformly continuous ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]), and $x \mapsto x^{2}$ on $\mathbb{R}$ is continuous on a closed unbounded set and not uniformly continuous ([[cex-x-squared-is-not-uniformly-continuous-on-r]]).

- **The converse is sharp.** For every noncompact $E \subseteq \mathbb{R}$ that is bounded there is a continuous function on $E$ that is not uniformly continuous, and for every noncompact $E$ there is an unbounded continuous function and a bounded continuous one with no greatest value. That is [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this page, and together with this theorem it says that compactness is exactly the hypothesis these results need.

- **The pairs, not the points, are what is chosen.** A common presentation selects two sequences separately and then extracts twice. Selecting the pair once, as above, keeps the count of choice applications at one and makes the second sequence's convergence a consequence rather than a second extraction.
````

### `thm-lebesgue-criterion`

````markdown
---
id: thm-lebesgue-criterion
kind: theorem
title: "Lebesgue's criterion for Riemann integrability: a bounded $f$ on $[a,b]$ is Riemann integrable if and only if its set of discontinuities has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, def-measure-zero-and-content-zero, thm-countable-union-of-null-is-null, thm-compact-null-is-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, def-open-cover-r, def-countable-choice, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r, def-bounded-set, def-interval, def-continuity-real, def-classification-of-discontinuities, def-extended-reals, def-sequence, thm-well-ordering-principle, thm-induction-principle, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
aliases: [thm-lebesgue-integrability-criterion]
landmark: true
short: "Lebesgue's criterion"
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
    - title: "Lebesgue's criterion for Riemann integrability (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral#Integrability"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
    - title: "M. Wodzicki, The Riemann Integral"
      url: "https://math.berkeley.edu/~wodzicki/H104.F10/Integral.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]) and let

$$D \;:=\; \{\, x \in [a,b] \ : \ f \text{ is discontinuous at } x \,\}$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then

$$f \text{ is Riemann integrable on } [a,b] \quad \Longleftrightarrow \quad D \text{ has measure zero}$$

([[def-darboux-integral]], [[def-measure-zero-and-content-zero]]).

**The choice cost, named.** The implication from integrability to $D$ being null
uses the Axiom of Countable Choice ([[def-countable-choice]]) exactly once,
through [[thm-countable-union-of-null-is-null]] at step 7.1: $D$ is exhibited as
the union of a sequence of null sets. The converse implication, from $D$ null to
integrability, is a theorem of ZF: it uses no choice principle at all.

**"Measure zero" here is the cover condition of
[[def-measure-zero-and-content-zero]]**, namely that for every $\varepsilon > 0$
there is a sequence of intervals covering $D$ of total length at most
$\varepsilon$. No outer measure, no measurable set and no Lebesgue integral is
used or needed; the criterion is a statement about interval covers throughout.

## Facts & Assumptions

**Given:** Reals $a < b$, a bounded $f : [a,b] \to \mathbb{R}$, a real $M_{+} > 0$ with $|f(x)| \le M_{+}$ for every $x \in [a,b]$, and $D$ as in the Statement.

[A1] The Axiom of Countable Choice, used only where [L11] is invoked ([[def-countable-choice]]).

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, $I_i = [t_i,t_{i+1}] \subseteq [a,b]$, and appending a point $y > t_n$ to a partition of $[a,t_n]$ gives a partition of $[a,y]$ whose subintervals are the old ones together with $[t_n,y]$ ([[def-partition-and-refinement]]).

[L2] $U(f,P) - L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$, $M_i - m_i = \omega_f(I_i)$, and $0 \le M_i - m_i \le 2M_{+}$ ([[def-darboux-sums]], [[def-oscillation]]).

[L3] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P)-L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L4] Oscillation: $\omega_f(S) \le \omega_f(T)$ for $S \subseteq T \subseteq [a,b]$; $0 \le \omega_f(x) \le \omega_f([a,b] \cap N_\rho(x))$ for every real $\rho > 0$ and every $x \in [a,b]$; $\omega_f(x)$ is the infimum of those values over $\rho > 0$; and since $f$ is bounded every one of these values is a real number in $[0, 2M_{+}]$ ([[def-oscillation]], [[def-extended-reals]], [[def-neighbourhood-r]]).

[L5] $f$ is continuous at $x \in [a,b]$ if and only if $\omega_f(x) = 0$; hence $D = \{x \in [a,b] : \omega_f(x) > 0\}$ ([[thm-continuity-iff-oscillation-zero]], [[def-continuity-real]]).

[L6] For every real $\sigma > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in [a,b] : \omega_f(x) \ge \sigma\} = [a,b] \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L7] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded; $[a,b]$ is closed and bounded; an intersection of closed sets is closed; every open interval is an open set ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]], [[def-interval]], [[def-bounded-set]]).

[L8] $A$ has content zero when for every real $\tau > 0$ there are $m \in \mathbb{N}$ and reals $c_0 \le e_0, \dots, c_m \le e_m$ with $A \subseteq \bigcup_{j \le m}[c_j,e_j]$ and $\sum_{j \le m}(e_j - c_j) \le \tau$; $A$ has measure zero when the same holds with a sequence of intervals and every partial total length at most $\tau$; a subset of a null set is null ([[def-measure-zero-and-content-zero]]).

[L9] A set of content zero has measure zero ([[lem-content-zero-implies-null]]), and for a **compact** set the two notions coincide ([[thm-compact-null-is-content-zero]]).

[L10] For every real $\eta > 0$ there is a natural $k \ge 1$ with $1/\iota(k) < \eta$; $\iota(k) > 0$ for $k \ge 1$, $\iota$ is nonnegative and nondecreasing on $\mathbb{N}$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L11] Assuming [A1], the union of a sequence of null subsets of $\mathbb{R}$ is null ([[thm-countable-union-of-null-is-null]], [[def-sequence]]).

[L12] Finite sums: splitting, additivity, scaling, monotonicity in the terms, and telescoping ([[def-finite-sum]], [[lem-finite-sum-laws]]). Also the interchange of two finite sums, $\sum_{i<n}\sum_{j<p}c_{i,j} = \sum_{j<p}\sum_{i<n}c_{i,j}$ for any doubly indexed family of reals; below it is applied with $p := m+1$, since $\sum_{j \le m}$ abbreviates $\sum_{j<m+1}$. That identity is **not** one of the six clauses of [[lem-finite-sum-laws]] and is therefore proved here, by induction on $p$ with $n$ held fixed ([[thm-induction-principle]]). At $p = 0$ each inner sum $\sum_{j<0}c_{i,j}$ is $0$ by the recursion clause of [[def-finite-sum]], so the left side is $\sum_{i<n}0 = 0$ by clause 2 of [[lem-finite-sum-laws]] taken with $\lambda = 0$, while the right side is an empty sum and so is $0$ as well. Passing from $p$ to $p+1$, the recursion clause and clause 1 of [[lem-finite-sum-laws]] give $\sum_{i<n}\sum_{j<p+1}c_{i,j} = \sum_{i<n}\bigl(\sum_{j<p}c_{i,j} + c_{i,p}\bigr) = \sum_{i<n}\sum_{j<p}c_{i,j} + \sum_{i<n}c_{i,p}$, which by the induction hypothesis is $\sum_{j<p}\sum_{i<n}c_{i,j} + \sum_{i<n}c_{i,p} = \sum_{j<p+1}\sum_{i<n}c_{i,j}$, again by the recursion clause.

[L13] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); every nonempty subset of $\mathbb{R}$ bounded above has a supremum ([[def-complete-ordered-field]]).

[L14] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; an open interval is order-convex ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 For a real $\sigma > 0$ put $E_\sigma := \{\, x \in [a,b] : \omega_f(x) \ge \sigma \,\}$. By [L5], $E_\sigma \subseteq D$ for every $\sigma > 0$. [L4, L5, construct]

2.1 **Each $E_\sigma$ has content zero, assuming $f$ integrable.** Let $\sigma > 0$ and $\tau > 0$ be real. By [L3] fix a partition $P = (n,t)$ with $U(f,P) - L(f,P) < \sigma\tau \cdot 2^{-1}$. Let $B := \{\, i < n : (t_i,t_{i+1}) \cap E_\sigma \ne \varnothing \,\}$ and put $\chi_i := 1$ for $i \in B$ and $\chi_i := 0$ otherwise. [step 1.1, L3, L14, choose, construct]

2.2 **The exhaustion of $D$.** Put $\sigma_k := 1/\iota(k+1)$ for $k \in \mathbb{N}$, a positive real by [L10]. Then $D = \bigcup_{k \in \mathbb{N}} E_{\sigma_k}$. For the inclusion from left to right, let $x \in D$, so $\omega_f(x) > 0$ by [L5] and $\omega_f(x)$ is a real by [L4]; if $\omega_f(x) \ge 1 = \sigma_0$ then $x \in E_{\sigma_0}$, and otherwise [L10] gives a natural $k+1 \ge 1$ with $1/\iota(k+1) < \omega_f(x)$, so $x \in E_{\sigma_k}$. For the reverse inclusion, $x \in E_{\sigma_k}$ gives $\omega_f(x) \ge \sigma_k > 0$, hence $x \in D$ by [L5]. [step 1.1, L4, L5, L10, L14]

2.3 **The converse; this half of the proof is steps 2.3, 3.2, 4.2, 5.2, 6.2, 7.2, 8.1, 9.1, 10.1, 11.1, 12.1 and 13.1, and its symbols are its own.** Assume $D$ null and let a real $\varepsilon > 0$ be given. Put $\sigma' := \varepsilon \cdot \bigl(2(b-a)\bigr)^{-1}$ and $\tau' := \varepsilon \cdot \bigl(8M_{+}\bigr)^{-1}$, both positive by [L14]. By step 1.1 and [L8], $E_{\sigma'} \subseteq D$ is null. [step 1.1, given, L8, L14]

3.1 For $i \in B$ one has $M_i - m_i \ge \sigma$: fix $x \in (t_i,t_{i+1}) \cap E_\sigma$; since $(t_i,t_{i+1})$ is open there is a real $\rho > 0$ with $N_\rho(x) \subseteq (t_i,t_{i+1})$, so $[a,b] \cap N_\rho(x) \subseteq I_i$ and [L4] gives $\sigma \le \omega_f(x) \le \omega_f([a,b] \cap N_\rho(x)) \le \omega_f(I_i) = M_i - m_i$ by [L2]. [step 2.1, L1, L2, L4, L7, choose]

3.2 $E_{\sigma'}$ is compact: by [L6] there is a closed $G$ with $E_{\sigma'} = [a,b] \cap G$, an intersection of two closed sets, hence closed; and $E_{\sigma'} \subseteq [a,b]$ is bounded. So [L7] applies. [step 2.3, L6, L7]

4.1 Hence $\sigma\chi_i\Delta_i \le (M_i - m_i)\Delta_i$ for every $i < n$, the case $i \notin B$ because both $M_i - m_i \ge 0$ and $\Delta_i > 0$. Summing and using [L12] and [L2]: $\sigma \sum_{i<n}\chi_i\Delta_i \le U(f,P) - L(f,P) < \sigma\tau \cdot 2^{-1}$, so $\lambda := \sum_{i<n}\chi_i\Delta_i < \tau \cdot 2^{-1}$. [step 2.1, step 3.1, L2, L12, L14]

4.2 By [L9] applied to the compact null set $E_{\sigma'}$, it has content zero, so by [L8] there are $m \in \mathbb{N}$ and reals $c_0 \le e_0, \dots, c_m \le e_m$ with $E_{\sigma'} \subseteq \bigcup_{j \le m}[c_j,e_j]$ and $\sum_{j\le m}(e_j-c_j) \le \tau' \cdot 2^{-1}$. Put $\mu := \tau' \cdot \bigl(4(\iota(m)+1)\bigr)^{-1} > 0$ and $O_j := (c_j - \mu,\ e_j + \mu)$, an open interval containing $[c_j,e_j]$, of length $(e_j - c_j) + 2\mu$. Then $\sum_{j\le m}\bigl((e_j-c_j)+2\mu\bigr) \le \tau' \cdot 2^{-1} + 2\mu(\iota(m)+1) = \tau' \cdot 2^{-1} + \tau' \cdot 2^{-1} = \tau'$, by [L12] and [L10]. [step 2.3, step 3.2, L8, L9, L10, L12, L14, construct]

5.1 $E_\sigma$ is covered by the finite list of $2n+1$ closed intervals $[p_j,q_j]$, $j \le 2n$, defined by $[p_j,q_j] := [t_j,t_{j+1}]$ for $j < n$ with $j \in B$, $[p_j,q_j] := [a,a]$ for $j < n$ with $j \notin B$, and $[p_j,q_j] := [t_{j-n},t_{j-n}]$ for $n \le j \le 2n$: indeed a point of $E_\sigma$ lies in $[a,b]$, hence is one of $t_0,\dots,t_n$ or lies in some $(t_i,t_{i+1})$, and in the latter case $i \in B$. Its total length is $\sum_{j \le 2n}(q_j - p_j) = \sum_{i<n}\chi_i\Delta_i + 0 = \lambda < \tau$, by splitting the sum at $n$ ([L12]). [step 2.1, step 4.1, L1, L12, L14, construct]

5.2 **The family of good intervals.** Let $\mathcal{W}$ be the set of all open intervals $(u,v)$ with $u < v$ such that either $(u,v) \subseteq O_j$ for some $j \le m$, or $\omega_f([a,b]\cap(u,v)) < \sigma'$. Every $x \in [a,b]$ lies in a member: if $x \in E_{\sigma'}$ then $x \in [c_j,e_j] \subseteq O_j$ for some $j \le m$ by step 4.2, and $O_j$ is itself a member; and if $x \notin E_{\sigma'}$ then $\omega_f(x) < \sigma'$, so by [L4] some real $\rho > 0$ has $\omega_f([a,b]\cap N_\rho(x)) < \sigma'$, and $N_\rho(x) = (x-\rho,x+\rho)$ is a member containing $x$. [step 4.2, L4, L7, L14, construct]

6.1 As $\tau > 0$ was arbitrary, $E_\sigma$ has content zero by [L8], hence measure zero by [L9]; this used only that $f$ is integrable. [step 2.1, step 5.1, L8, L9]

6.2 **Cousin's construction: a partition each of whose subintervals lies in a member of $\mathcal{W}$.** Let $S$ be the set of $y \in (a,b]$ such that some partition of $[a,y]$ has every subinterval contained in a member of $\mathcal{W}$. $S$ is nonempty: by step 5.2 fix $(\alpha,\beta) \in \mathcal{W}$ with $a \in (\alpha,\beta)$ and put $y_0 := \min\{(a+b)\cdot 2^{-1},\ (a+\beta)\cdot 2^{-1}\}$, so $a < y_0 \le b$, $y_0 < \beta$ and $\alpha < a$; the one-subinterval partition of $[a,y_0]$ has $[a,y_0] \subseteq (\alpha,\beta)$, so $y_0 \in S$. Also $S$ is bounded above by $b$, so $s := \sup S$ exists by [L13] and $a < y_0 \le s \le b$. [step 5.2, L1, L13, L14, choose]

7.1 **Integrability implies $D$ null.** Assume $f$ integrable. By step 6.1 each $E_{\sigma_k}$ is null, and $k \mapsto E_{\sigma_k}$ is a sequence of subsets of $\mathbb{R}$, so [L11] applies and $\bigcup_k E_{\sigma_k} = D$ is null by step 2.2. This is the only use of [A1] in the proof. [step 6.1, step 2.2, A1, L11]

7.2 $s = b$. By step 5.2 fix $(\alpha',\beta') \in \mathcal{W}$ with $s \in (\alpha',\beta')$. Since $\sup S = s > \alpha'$ there is $x \in S$ with $x > \alpha'$, and $x \le s$. Suppose $s < b$ and choose a real $y$ with $s < y < \min\{b, \beta'\}$, possible because $s < b$ and $s < \beta'$. Then $\alpha' < x \le s < y < \beta'$, so $[x,y] \subseteq (\alpha',\beta')$, and appending $y$ to a partition of $[a,x]$ witnessing $x \in S$ gives one for $[a,y]$ by [L1]; hence $y \in S$ with $y > \sup S$, which is impossible. [step 6.2, L1, L13, L14, choose]

8.1 $b \in S$. By step 5.2 fix $(\alpha'',\beta'') \in \mathcal{W}$ with $b \in (\alpha'',\beta'')$. Since $\sup S = b > \alpha''$ there is $x \in S$ with $x > \alpha''$ and $x \le b$. If $x = b$ there is nothing to prove; otherwise $\alpha'' < x < b < \beta''$ gives $[x,b] \subseteq (\alpha'',\beta'')$, and appending $b$ as in step 7.2 puts $b$ in $S$. So there is a partition $P' = (n',t')$ of $[a,b]$, with subintervals $I'_i$ and lengths $\Delta'_i$ for $i < n'$, every subinterval of which lies in a member of $\mathcal{W}$. [step 5.2, step 7.2, L1, L13, L14, choose]

9.1 **Good and bad subintervals.** Write $M'_i := \sup f[I'_i]$ and $m'_i := \inf f[I'_i]$. Call $i < n'$ **good** when $I'_i \subseteq W$ for some $W = (u,v) \in \mathcal{W}$ with $\omega_f([a,b]\cap(u,v)) < \sigma'$, and **bad** otherwise. For a good $i$, $I'_i \subseteq [a,b] \cap W$, so $M'_i - m'_i = \omega_f(I'_i) \le \omega_f([a,b]\cap W) < \sigma'$ by [L2] and [L4]. For a bad $i$, step 8.1 supplies a member containing $I'_i$, and it is not of the second kind, so $I'_i \subseteq O_j$ for some $j \le m$. [step 8.1, L1, L2, L4]

10.1 **Bounding the bad lengths.** For $j \le m$ put $J_j := \{\, i < n' : c_j - \mu \le t'_i \text{ and } t'_{i+1} \le e_j + \mu \,\}$ and $h^{j}_i := \Delta'_i$ for $i \in J_j$, $h^{j}_i := 0$ otherwise; a bad $i$ lies in some $J_j$ by step 9.1. Each $J_j$ consists of consecutive indices, since $i < i^{\dagger} < i^{\ddagger}$ with $i,i^{\ddagger} \in J_j$ gives $c_j - \mu \le t'_i \le t'_{i^{\dagger}}$ and $t'_{i^{\dagger}+1} \le t'_{i^{\ddagger}+1} \le e_j + \mu$. [step 9.1, L1, L14, construct]

11.1 $\sum_{i<n'}h^{j}_i \le (e_j - c_j) + 2\mu$ for each $j \le m$: the sum is $0$ when $J_j = \varnothing$; otherwise let $p := \min J_j$ and let $q$ be the least natural with $q > p$ and $q \notin J_j$, which exists by [L13] since $n' \notin J_j$, so that $J_j = \{\, i : p \le i < q \,\}$ by step 10.1. Splitting the sum at $p$ and at $q$ and discarding the vanishing outer parts, then telescoping ([L12]), gives $\sum_{i<n'}h^{j}_i = \sum_{i=p}^{q-1}\Delta'_i = t'_q - t'_p \le (e_j+\mu) - (c_j-\mu)$, using $p \in J_j$ and $q-1 \in J_j$. [step 10.1, L12, L13, L14]

12.1 Put $\beta_i := \Delta'_i$ for bad $i$ and $\beta_i := 0$ for good $i$. Then $\beta_i \le \sum_{j \le m}h^{j}_i$ pointwise by step 10.1, all terms being nonnegative, so by [L12] and step 11.1, $\sum_{i<n'}\beta_i \le \sum_{j\le m}\sum_{i<n'}h^{j}_i \le \sum_{j\le m}\bigl((e_j-c_j)+2\mu\bigr) \le \tau'$, the last step by step 4.2. [step 4.2, step 10.1, step 11.1, L12, L14]

13.1 For every $i < n'$, $(M'_i-m'_i)\Delta'_i \le \sigma'\Delta'_i + 2M_{+}\beta_i$: for good $i$ by step 9.1 and $\beta_i \ge 0$, for bad $i$ by $M'_i - m'_i \le 2M_{+}$ from [L2] and $\beta_i = \Delta'_i$. Summing over $i < n'$ and using [L12], [L1] and step 12.1: $U(f,P')-L(f,P') \le \sigma'(b-a) + 2M_{+}\tau' = \varepsilon\cdot 2^{-1} + \varepsilon \cdot 4^{-1} < \varepsilon$. [step 2.3, step 9.1, step 12.1, L1, L2, L12, L14]

14.1 The real $\varepsilon > 0$ of step 2.3 was arbitrary and step 13.1 produced a partition with $U - L < \varepsilon$, so $f$ is integrable by [L3]. With step 7.1 this proves both implications, and the criterion is established; the forward half is steps 1.1, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1 and 7.1, working with $\sigma, \tau, P, B, \chi, \lambda$, and the converse half is the steps named in step 2.3, working with $\sigma', \tau', P', \mathcal{W}, S$. [step 7.1, step 2.3, step 13.1, L3] ∎

## Remarks

- **What the two halves cost.** The forward half is a single application of Riemann's criterion for each threshold $\sigma$, plus the countable union; the backward half is where all the work is, and it is entirely a covering argument: the bad set is compact and null, hence of content zero, hence coverable by finitely many open intervals of small total length, and the rest of $[a,b]$ is chopped up by Cousin's construction into pieces of oscillation below $\sigma$.

- **Why Cousin's construction and not a Lebesgue number.** Step 6.2 to step 8.1 build the partition directly from the completeness of $\mathbb{R}$: the set of right endpoints reachable by a good partition is nonempty and bounded, and its supremum is shown to be $b$ and to be attained. This uses no sequence, no subsequence and no choice, whereas the usual Lebesgue-number argument selects a bad interval for each $n$ and then extracts a convergent subsequence, which costs countable choice. Since the whole point of this item's choice ledger is that the backward implication is a ZF theorem, the choice-free route is the one taken.

- **The superlevel sets, not the discontinuity set, are what is covered.** $D$ itself is in general not closed, so [[thm-compact-null-is-content-zero]] does not apply to it; each $E_\sigma$ **is** closed in $[a,b]$ ([[lem-oscillation-superlevel-sets-are-closed]]) and bounded, and that is exactly the hypothesis needed. The passage back from the $E_{\sigma_k}$ to $D$ is step 2.2, and it is where the countable union appears.

- **The exhaustion $D = \bigcup_k E_{1/\iota(k+1)}$ is derived here, and it is also claim 1 of [[thm-discontinuity-set-is-f-sigma]].** When this proof was written that theorem stated only the descriptive form — $D$ as the trace on the domain of an $F_\sigma$ subset of $\mathbb{R}$ — which is not the pointwise identity step 2.2 needs, so the identity was derived inline from [[thm-continuity-iff-oscillation-zero]] and the Archimedean property. The exhaustion has since been stated there as claim 1, precisely because several items were quoting it from a theorem that did not assert it. The inline derivation is retained because it is three lines and keeps this item's choice ledger readable in one place; citing claim 1 instead would be equally correct.

- **Both directions are sharp in the obvious sense.** The indicator of the Cantor set is discontinuous on an uncountable null set and is integrable; the indicator of the Smith-Volterra-Cantor set is discontinuous on a nowhere dense set that is not null and is not integrable ([[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]]). So neither cardinality nor category decides integrability; only measure does.
````

### `thm-rationals-countable`

````markdown
---
id: thm-rationals-countable
kind: theorem
title: "$\\mathbb{Q}$ is countably infinite"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-n-cross-n-countable, thm-product-of-countable, def-rationals, lem-rat-positive-denominator, def-countable, lem-subset-of-countable, def-integers, lem-countable-iff-surjection-from-n, thm-schroder-bernstein, def-equinumerous, def-injection-surjection-bijection, lem-nat-embeds-int, lem-int-embeds-rat, def-int-order, thm-int-ordered-ring, thm-omega-is-peano-system, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{Q}\\approx\\mathbb{N}$"
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
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

$\mathbb{Q} \approx \mathbb{N}$ ([[def-equinumerous]]): the rationals are
countably infinite ([[def-countable]]).

**No choice principle is used.** The one place where a reader expects a choice,
"pick a representative $a/b$ of each rational", is exactly where
[[lem-rat-positive-denominator]] applies: every rational *has* a representative
with positive denominator, so the map $(a,b) \mapsto [(a,b)]$ defined on
$\mathbb{Z} \times \mathbb{Z}_{>0}$ is already **surjective** onto $\mathbb{Q}$,
and countability follows from a surjection without ever selecting a
representative. The same device handles $\mathbb{Z}$, which is a surjective image
of $\mathbb{N} \times \mathbb{N}$ by construction ([[def-integers]]).

## Facts & Assumptions

**Given:** $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/\sim$ with quotient map $(a,b) \mapsto [(a,b)]$ ([[def-integers]]), and $\mathbb{Q}$ the set of classes $[(a,b)]$ of pairs of integers with $b \ne 0$ ([[def-rationals]]). Write $\mathbb{Z}_{>0} = \{\, b \in \mathbb{Z} : b > 0 \,\}$ ([[def-int-order]]).

[L1] Finite, countably infinite, at most countable, uncountable ([[def-countable]]).

[L2] Bijections, injections, surjections, composition; $\approx$ and $\preceq$ ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] A nonempty $X$ is at most countable iff there is a surjection $\mathbb{N} \to X$; and from such a surjection $s$ the map $x \mapsto \min\{\, k : s(k) = x \,\}$ is an injection $X \to \mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]]).

[L5] A product of two at most countable sets is at most countable ([[thm-product-of-countable]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L6] Every rational is $[(a,b)]$ for some integers $a$ and $b$ with $b > 0$ ([[lem-rat-positive-denominator]]).

[L7] $\mathbb{N}$ embeds injectively in $\mathbb{Z}$ by $n \mapsto [(n,0)]$ ([[lem-nat-embeds-int]]) and $\mathbb{Z}$ embeds injectively in $\mathbb{Q}$ by $k \mapsto [(k,1)]$ ([[lem-int-embeds-rat]]).

[L8] $\preceq$ in both directions gives $\approx$ ([[thm-schroder-bernstein]]).

[L9] The relation of [[def-int-order]] is a total order on $\mathbb{Z}$ compatible with the ring structure ([[thm-int-ordered-ring]]), and $\mathbb{Z}_{>0} \ne \varnothing$: on representatives $0 < [(a,b)]$ holds exactly when $b < a$ in $\mathbb{N}$ ([[def-int-order]]), and $0 < 1$ in $\mathbb{N}$, since $1 = \sigma(0) \ne 0$ ([[thm-omega-is-peano-system]]) while $0 < n$ for every nonzero natural $n$ (claim 4 of [[lem-nat-order-is-membership]]); so the integer $[(1,0)]$ is positive.

## Proof

**Proof technique:** direct.

1.1 The quotient map $\pi : \mathbb{N} \times \mathbb{N} \to \mathbb{Z}$, $\pi(a,b) = [(a,b)]$, is surjective, since every integer is by definition such a class; hence $\pi \circ \beta : \mathbb{N} \to \mathbb{Z}$ is a surjection, and $\mathbb{Z} \ne \varnothing$, so $\mathbb{Z}$ is at most countable by [L3]. [given, L2, L3, L4]

1.2 The composite $\iota : \mathbb{N} \to \mathbb{Q}$, $n \mapsto [([(n,0)],1)]$, of the two embeddings of [L7] is injective, so $\mathbb{N} \preceq \mathbb{Q}$. [L2, L7]

2.1 $\mathbb{Z}_{>0}$ is a subset of $\mathbb{Z}$, hence at most countable by [L5], and it is nonempty by [L9]; therefore $\mathbb{Z} \times \mathbb{Z}_{>0}$ is at most countable by [L5] and nonempty, so [L3] provides a surjection $u : \mathbb{N} \to \mathbb{Z} \times \mathbb{Z}_{>0}$. [step 1.1, L3, L5, L9]

3.1 The map $\rho : \mathbb{Z} \times \mathbb{Z}_{>0} \to \mathbb{Q}$, $\rho(a,b) = [(a,b)]$, is well defined because $b > 0$ gives $b \ne 0$, and it is surjective by [L6]; hence $\rho \circ u : \mathbb{N} \to \mathbb{Q}$ is a surjection, $\mathbb{Q}$ is at most countable, and [L3] turns that surjection into an injection $j : \mathbb{Q} \to \mathbb{N}$, so $\mathbb{Q} \preceq \mathbb{N}$. [step 2.1, given, L2, L3, L6]

4.1 From $\mathbb{N} \preceq \mathbb{Q}$ and $\mathbb{Q} \preceq \mathbb{N}$, the Schröder-Bernstein theorem [L8] yields a bijection $\mathbb{Q} \to \mathbb{N}$; hence $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{Q}$ is countably infinite. [step 1.2, step 3.1, L1, L8] ∎

## Remarks

- **Why Schröder-Bernstein rather than a count.** The usual last line is "countable, and infinite because $\mathbb{N}$ injects into it". Turning that into a proof requires knowing that a set containing an injective copy of $\mathbb{N}$ is not finite, which is the pigeonhole principle, [[lem-pigeonhole]], proved earlier on this page. That route is now available, but it is a detour: [[thm-schroder-bernstein]] gets the bijection directly from the two injections already in hand, and it is choice free, so nothing is lost.

- **Lowest terms are not needed and are not available.** A frequent presentation injects $\mathbb{Q}$ into $\mathbb{Z} \times \mathbb{N}$ by sending each rational to its representative in lowest terms. That map needs greatest common divisors, which this library has not developed. Working with a surjection instead of an injection avoids the issue entirely: repetitions in an enumeration are harmless ([[lem-countable-iff-surjection-from-n]]).

- The proof shows in passing that $\mathbb{Z} \approx \mathbb{N}$, by the same two-injection argument applied to [L7] and step 1.1, and that $\mathbb{Q} \times \mathbb{Q}$, $\mathbb{Q}^3$ and so on are countable ([[thm-product-of-countable]]). The contrast with [[thm-r-uncountable]] is the point of the page: adding all limits of rational approximations to $\mathbb{Q}$ changes the size of the set, not merely its arithmetic.
````

