## Selection reasons

- critical risk (11): 16 declared dependencies; 14 cited facts; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `thm-picard-iterates-for-exponential`

Normalized current SHA-256: `19944bf0e27e7f9d36383b704362cc5996b700fcc26ae30375a148436e297900`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-picard-iterates-for-exponential
kind: theorem
title: "Picard iteration from $1$ produces the exponential partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-oriented-integral, thm-linearity-of-the-integral, thm-ftc-first-part, thm-ftc-second-part, lem-derivative-of-a-power, thm-uniform-limit-interchanges-riemann-integration, thm-uniform-limit-continuous-real-functions, thm-continuous-implies-integrable, thm-algebra-of-continuous-functions, thm-power-series-uniform-on-compact-subintervals, lem-exponential-series-has-infinite-radius, def-real-exponential-function-and-e, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "J. Lebl, Basic Analysis, Picard's Theorem"
      url: "https://www.jirka.org/ra/html/sec_picard.html"
    - title: "University of Pennsylvania MATH 3600, Section 34"
      url: "https://www2.math.upenn.edu/~ancoop/3600/section-34.html"
pipeline_run: null
---

## Statement

Define $u_0(x)=1$ and $u_{r+1}(x)=1+\int_0^x u_r(t)\,dt$. Then
$$u_r(x)=\sum_{k=0}^{r}\frac{x^k}{\iota(k!)}$$
and $u_r\to\exp$ uniformly on every bounded interval.
Moreover,
$$\exp(x)=1+\int_0^x\exp(t)\,dt,$$
and differentiating this integral equation recovers $\exp' = \exp$ and $\exp(0)=1$.

## Facts & Assumptions

**Given:** The displayed recursion with the oriented integral of [[def-oriented-integral]].

[L1] For $k\in\mathbb N$, the derivative of $t^{k+1}/\iota(k+1)$ is $t^k$ ([[lem-derivative-of-a-power]]), so the second fundamental theorem evaluates its oriented integral ([[thm-ftc-second-part]], [[def-oriented-integral]]); the integral is linear over finite sums ([[thm-linearity-of-the-integral]]), and the factorial recurrence is [[def-factorial-and-falling-factorial]].

[L2] The exponential series has infinite radius ([[lem-exponential-series-has-infinite-radius]], [[def-real-exponential-function-and-e]]), and a power series converges uniformly on compact subintervals of its interval of convergence ([[thm-power-series-uniform-on-compact-subintervals]]).

[L3] Polynomial functions are continuous ([[thm-algebra-of-continuous-functions]]); uniform limits of continuous real functions are continuous ([[thm-uniform-limit-continuous-real-functions]]); continuous functions on compact intervals are integrable ([[thm-continuous-implies-integrable]]); uniform limits interchange with Riemann integration ([[thm-uniform-limit-interchanges-riemann-integration]]); and the first fundamental theorem differentiates an integral of a continuous function ([[thm-ftc-first-part]]).

## Proof

**Proof technique:** induction.

1.1 At $r=0$, $u_0=1$, the stated finite sum.  [base, given]

1.2 If the formula holds at $r$, integrate its finite sum termwise from $0$ to $x$. By [L1], the integral of $t^k/\iota(k!)$ is $x^{k+1}/\iota((k+1)!)$, giving the formula at $r+1$.   [ih, L1, given]

2.1 Hence the iterates are precisely the partial sums of the exponential series. Its infinite radius and [L2] give uniform convergence on every bounded interval.   [step 1.1, step 1.2, L2, given]

3.1 Fix $x$ and work on the compact interval with endpoints $0$ and $x$. The polynomial iterates are continuous and integrable there, and step 2.1 gives uniform convergence to $\exp$. Thus [L3] lets the integrals in $u_{r+1}(x)=1+\int_0^x u_r(t)\,dt$ pass to the limit, giving $\exp(x)=1+\int_0^x\exp(t)\,dt$, with the orientation supplied by [[def-oriented-integral]] when $x<0$.  [step 2.1, L3, given]

4.1 Step 2.1 and [L3] make $\exp$ continuous. The first fundamental theorem applied to step 3.1 gives $\exp'(x)=\exp(x)$, and setting $x=0$ gives $\exp(0)=1$.  [step 2.1, step 3.1, L3, discharge-induction] ∎
````

## Wave 14 provenance row

```json
{
  "id": "thm-picard-iterates-for-exponential",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_picard.html",
    "https://www2.math.upenn.edu/~ancoop/3600/section-34.html"
  ],
  "rationale": "Lebl's Picard example for y'=y, y(0)=1 gives the iterates 1+x+...+x^n/n! and their global limit exp. The item additionally records compact-uniform convergence and the limiting integral equation, so it is a faithful strengthened packaging; its induction and interchange proof adapt the standard construction.",
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
      "source": "lem-derivative-of-a-power",
      "source_section": "Statement",
      "quote": "Powers are those of [[def-integer-power]], and $\\iota : \\mathbb{N} \\to\n\\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that\n$\\iota(0) = 0$ and $\\iota(m+1) = \\iota(m) + 1$. Let $n \\in \\mathbb{N}$.\n\n1. The function $p_0 : \\mathbb{R} \\to \\mathbb{R}$, $p_0(x) = x^{0}$, is the\n   constant function $1$, and it is differentiable at every $c \\in \\mathbb{R}$\n   with $p_0'(c) = 0$ ([[def-derivative]]).\n2. For $n \\ge 1$ the function $p_n : \\mathbb{R} \\to \\mathbb{R}$,\n   $p_n(x) = x^{n}$, is differentiable at every $c \\in \\mathbb{R}$, and\n   $$p_n'(c) \\;=\\; \\iota(n)\\,c^{\\,n-1} .$$\n3. For $n \\ge 1$ put $A_0 := \\{\\, x \\in \\mathbb{R} : x \\ne 0 \\,\\}$. The function\n   $m_n : A_0 \\to \\mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every\n   $c \\in A_0$ as a function on $A_0$, and\n   $$m_n'(c) \\;=\\; -\\,\\iota(n)\\,c^{\\,-n-1} .$$\n4. Let $a : \\mathbb{N} \\to \\mathbb{R}$ with $a_j = 0$ for $j \\ge n$, and let\n   $P : \\mathbb{R} \\to \\mathbb{R}$ be the polynomial function\n   $P(x) = \\sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is\n   differentiable at every $c \\in \\mathbb{R}$, and, defining $e : \\mathbb{N}\n   \\to \\mathbb{R}$ by $e_0 := 0$ and $e_j := \\iota(j)\\,a_j\\,c^{\\,j-1}$ for\n   $j \\ge 1$,\n   $$P'(c) \\;=\\; \\sum_{j<n} e_j .$$\n\n**Claim 2 is stated for $n \\ge 1$ and not for $n \\ge 0$, and that is not\ntimidity.** At $n = 0$ its right-hand side reads $\\iota(0)\\,c^{-1}$, and\n$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is\nnot a statement about the whole line. Claim 1 is what covers $n = 0$, and it\nsays the derivative is $0$ there, which is what the informal reading\n\"$0 \\cdot c^{-1}$\" is reaching for. The same shift is why the term $e_0$ of\nclaim 4 is defined to be $0$ outright rather than by the formula.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-ftc-second-part",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $G : [a,b] \\to \\mathbb{R}$ be differentiable at every\npoint of $[a,b]$ as a function on $[a,b]$ ([[def-derivative]]; at $a$ and $b$\nthis is the one-sided derivative), let $f := G'$, and suppose $f$ is integrable\non $[a,b]$ ([[def-darboux-integral]]). Then\n\n$$\\int_a^b f \\;=\\; G(b) - G(a) .$$\n\n**Both hypotheses are needed and neither is removable.** A function may be\ndifferentiable everywhere with $G'$ not integrable — then the left-hand side does\nnot exist (an everywhere differentiable function with unbounded derivative) — and an\nintegrable $f$ need not be the derivative of anything\n(the sign function); both witnesses are on the\ncompanion page.\n\n**No continuity of $f$ is assumed**, which is what makes this the working form:\nthe theorem evaluates $\\int_a^b f$ for every integrable derivative, not only for\ncontinuous integrands.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-oriented-integral",
      "source_section": "Definition",
      "quote": "**Why this item is first.** The published definition of the integral does not\ncover this page. [[def-darboux-integral]] is stated for reals $a < b$, because\nthe partitions it quantifies over are those of [[def-partition-and-refinement]],\nwhose standing hypothesis is $a < b$: with $a = b$ the chain\n$a = t_0 < \\dots < t_n = b$ is unsatisfiable. So $\\int_a^b f$ is an undefined\nsymbol whenever $a \\ge b$, and every additivity statement below would be\nill-formed as it is usually written. This item extends the notation, and nothing\nelse: the object it names is still the Darboux integral of\n[[def-darboux-integral]].\n\nLet $u, v \\in \\mathbb{R}$ and write\n\n$$[u \\wedge v,\\ u \\vee v] \\;:=\\; \\text{the closed interval with endpoints } u \\text{ and } v$$\n\n([[def-interval]]). Let $f$ be a real-valued function whose domain contains that\ninterval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,\nor $u \\ne v$ and the restriction of $f$ to $[u \\wedge v,\\ u \\vee v]$ is bounded\n([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],\n[[def-darboux-sums]]). For such $f$ define\n\n$$\\int_u^v f \\;:=\\; \\begin{cases} \\text{the Darboux integral of } f \\text{ over } [u,v] & \\text{if } u < v, \\\\[2pt] 0 & \\text{if } u = v, \\\\[2pt] -\\displaystyle\\int_v^u f & \\text{if } u > v. \\end{cases}$$\n\n**There is nothing to check for consistency.** The three clauses are indexed by\nthe three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually\nexclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In\nparticular the first clause is untouched, so on $u < v$ this is the published\nintegral verbatim and every published theorem about it applies unchanged.\n\n**The middle clause is a stipulation, not a computation.** It is *not* claimed\nthat $0$ is a value forced by the $u < v$ definition in any limiting sense; that\ndefinition simply says nothing at $u = v$, and $\\int_u^u f := 0$ is what is\nwritten there. It is also unconditional: no hypothesis on $f$ beyond being\ndefined at $u$ is asked for, since the case $u = v$ never refers to a partition.\n\n### The two consequences used throughout the page\n\n**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable\nbetween them,\n\n$$\\int_u^v f \\;=\\; -\\int_v^u f .$$\n\nIndeed if $u < v$ then $v > u$ and the third clause reads\n$\\int_v^u f = -\\int_u^v f$, which rearranges to the display; if $u = v$ both\nsides are $0$; and if $u > v$ the third clause is the display itself.\n\n**Absolute values agree.** Consequently\n$\\bigl|\\int_u^v f\\bigr| = \\bigl|\\int_v^u f\\bigr|$ for every such pair.\n\n**An obligation recorded here and discharged elsewhere.** With this convention\nthe additivity identity\n\n$$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f$$\n\nholds for **every** arrangement of $u, v, w$ in an interval on which $f$ is\nintegrable, not only for $u < v < w$. That is a theorem and not part of this\ndefinition; it is proved as the last clause of\n[[thm-additivity-over-subintervals]], and nothing on this page uses it before it\nis proved there.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-linearity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]). Then:\n\n1. $f + g$ is integrable on $[a,b]$ and\n   $\\int_a^b (f+g) = \\int_a^b f + \\int_a^b g$;\n2. for every real $\\lambda$, $\\lambda f$ is integrable on $[a,b]$ and\n   $\\int_a^b \\lambda f = \\lambda \\int_a^b f$;\n3. consequently, for all reals $\\lambda, \\mu$ the function $\\lambda f + \\mu g$ is\n   integrable and\n   $$\\int_a^b(\\lambda f + \\mu g) \\;=\\; \\lambda\\int_a^b f \\;+\\; \\mu\\int_a^b g ;$$\n4. the same identity holds with oriented limits: if $u, v \\in [a,b]$ and $f, g$\n   are integrable between $u$ and $v$ ([[def-oriented-integral]]), then\n   $\\int_u^v(\\lambda f + \\mu g) = \\lambda\\int_u^v f + \\mu\\int_u^v g$.\n\n**Linearity of the integral is not linearity of the Darboux sums**, and the\nproof of claim 1 has to squeeze rather than compute. On a subinterval the\ninequality $\\sup(f+g) \\le \\sup f + \\sup g$ can be strict — take $f(x) = x$ and\n$g(x) = -x$ on $[0,1]$, where the left side is $0$ and the right side is $1$ —\nso $U(f+g,P)$ is in general strictly below $U(f,P) + U(g,P)$ and no identity\nbetween upper sums is available. Claim 2, by contrast, is an identity at the\nlevel of the sums, with the roles of $\\sup$ and $\\inf$ exchanged when\n$\\lambda < 0$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-factorial-and-falling-factorial",
      "source_section": "Definition",
      "quote": "**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the\nset $\\mathbb{N}\\times\\mathbb{N}$, the starting element $(0,1)$ and the function\n$f(k, v) = (\\sigma(k),\\, v \\cdot \\sigma(k))$, and by the same induction on the\nfirst coordinate as in [[def-nat-finite-sum-and-product]], there is a unique\n$F : \\mathbb{N} \\to \\mathbb{N}$ with\n\n$$F(0) = 1, \\qquad F(\\sigma(n)) = F(n)\\cdot\\sigma(n) \\quad (n \\in \\mathbb{N}).$$\n\nWe write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\\cdot 1 = 1$, $2! = 1!\\cdot 2 = 2$,\n$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.\n\n**$0! = 1$ is the base clause of this recursion**, not a convention imported from\nelsewhere. Nothing about empty products is presupposed; the agreement with the\nempty product is proved below, in clause (a), rather than assumed.\n\n**Truncated difference.** Throughout, $n - k$ is the operation fixed in\n[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when\n$k \\le n$, and $0$ when $n < k$.\n\n**The falling factorial.** For $n \\in \\mathbb{N}$ define $n^{\\underline{k}}$ by\nrecursion on $k$, by the recursion theorem applied to\n$\\mathbb{N}\\times\\mathbb{N}$ with starting element $(0,1)$ and\n$f(k, v) = (\\sigma(k),\\, v \\cdot (n-k))$:\n\n$$n^{\\underline{0}} = 1, \\qquad n^{\\underline{\\sigma(k)}} = n^{\\underline{k}}\\cdot(n-k) .$$\n\nSo $n^{\\underline{1}} = 1\\cdot(n-0) = n$ and $n^{\\underline{2}} = n\\,(n-1)$, and\nfor $k \\le n$ the value is the product $n(n-1)\\cdots(n-k+1)$ of the $k$ topmost\nfactors.\n\n**Four facts, proved here because the page uses each of them.**\n\n**(a) The factorial is the product of the first $n$ positive naturals.**\n$n! = \\prod_{j<n}\\sigma(j) = \\prod_{j<n}(j+1)$, the $\\mathbb{N}$-valued product of\n[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at\n$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and\n$\\prod_{j<\\sigma(n)}\\sigma(j) = \\big(\\prod_{j<n}\\sigma(j)\\big)\\cdot\\sigma(n) = n!\\cdot\\sigma(n) = \\sigma(n)!$.\n**So the empty-product reading and the base-clause reading are the same reading**,\nand neither was assumed.\n\n**(b) $n! \\ne 0$, and $\\iota(n!) = \\prod^{\\mathbb{R}}_{j<n}\\iota(j+1)$.** For the\nfirst, $0! = 1 \\ne 0$ ([[thm-omega-is-peano-system]]) and\n$\\sigma(n)! = n!\\cdot\\sigma(n)$ is a product of two nonzero naturals, which is\nnonzero: if $xy = 0$ with $y \\ne 0$ then $xy = 0\\cdot y$\n([[lem-nat-mult-identity]]) and cancellation gives $x = 0$\n([[lem-nat-mult-cancellative]]). So $n! \\ne 0$ for every $n$ by induction. For the second, apply the bridge clause\n6 of that lemma to clause (a) above. This is what makes the factorial of this\npage and the real-valued product $\\prod_{j<n}(j+1)$ used elsewhere in the library\n**one object seen twice**, rather than two unrelated notions.\n\n**(c) $n^{\\underline{k}}\\cdot(n-k)! = n!$ for $k \\le n$.** Induction on $k$, for\nall $n$ at once. At $k = 0$ this reads $1 \\cdot n! = n!$. Assume it at $k$ and\nlet $\\sigma(k) \\le n$; then $k \\le n$, and writing $d := n - k$ we have\n$k + d = n$ and $d \\ne 0$, since $k + 0 = k \\ne n$; so $d = \\sigma(e)$ for a\nunique $e$ ([[lem-nat-nonzero-is-successor]]), and $\\sigma(k) + e = n$, that is\n$e = n - \\sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore\n$n^{\\underline{\\sigma(k)}}\\cdot\\big(n-\\sigma(k)\\big)! = n^{\\underline{k}}\\cdot(n-k)\\cdot e! = n^{\\underline{k}}\\cdot\\big(e!\\cdot\\sigma(e)\\big) = n^{\\underline{k}}\\cdot\\sigma(e)! = n^{\\underline{k}}\\cdot(n-k)! = n!$,\nusing commutativity and associativity of multiplication\n([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion\nclause for the factorial.\n\n**(d) Boundary values.** $n^{\\underline{0}} = 1$ for every $n$, by the base\nclause; $n^{\\underline{n}} = n!$, since clause (c) at $k = n$ gives\n$n^{\\underline{n}}\\cdot 0! = n!$ and $0! = 1$; and\n$n^{\\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives\n$n^{\\underline{\\sigma(n)}} = n^{\\underline{n}}\\cdot 0 = 0$, the clause\n$x \\cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if\n$n^{\\underline{k}} = 0$ then\n$n^{\\underline{\\sigma(k)}} = 0$ as well, so $n^{\\underline{k}} = 0$ for every\n$k \\ge \\sigma(n)$ by induction.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-exponential-series-has-infinite-radius",
      "source_section": "Statement",
      "quote": "For every real $x$, the series $\\sum_{n\\ge0}x^n/\\iota(n!)$ converges absolutely. Its power-series radius is therefore $+\\infty$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-real-exponential-function-and-e",
      "source_section": "Definition",
      "quote": "For $x\\in\\mathbb R$, define\n$$\\exp(x):=\\sum_{n=0}^{\\infty}\\frac{x^n}{\\iota(n!)}, \\qquad e:=\\exp(1),$$\nprovided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\\in\\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].\n\nThis is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-power-series-uniform-on-compact-subintervals",
      "source_section": "Statement",
      "quote": "Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which\n\n$$r:=\\max\\{|u-c|,|v-c|\\}<R.$$\n\nThen the function series converges absolutely at every point of $[u,v]$ and converges uniformly there.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let\n$\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at\n$c$ ([[def-continuity-real]]). Then:\n\n1. $f + g$, $\\alpha f$ and $fg$ are continuous at $c$;\n2. $|f|$, the function $x \\mapsto |f(x)|$, is continuous at $c$;\n3. $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, defined pointwise by\n   $x \\mapsto \\max\\{f(x), g(x)\\}$ and $x \\mapsto \\min\\{f(x), g(x)\\}$\n   ([[def-max-min]]), are continuous at $c$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is continuous at\n   $c$ as a function on $A_0$.\n\nMoreover, with no hypothesis at all:\n\n5. every constant function $A \\to \\mathbb{R}$ and the identity\n   $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence\n   so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$\n   ([[def-integer-power]]), and hence so is every **polynomial function**\n   $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients.\n\nConsequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,\n$\\alpha f$, $fg$, $|f|$, $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, and\n$(f/g)|_{A_0}$ is continuous on $A_0$.\n\n**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,\nand $g$ may well vanish at points of $A$ far from $c$. The hypothesis is\n$g(c) \\ne 0$, not \"$g$ nowhere zero\"; what it buys is that $c$ itself lies in\nthe smaller domain, which is what makes continuity there mean anything.\n\n**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from\n[[thm-algebra-of-function-limits]], which is itself proved from $\\varepsilon$\nand $\\delta$, and claims 2, 3 and 5 are proved directly below. So no choice\nprinciple is used anywhere in this item.",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-uniform-limit-continuous-real-functions",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space and let $f_k:X\\to\\mathbb{R}$ be continuous for\nevery $k\\in\\mathbb{N}$, where $\\mathbb{R}$ has its usual metric\n$d_{\\mathbb{R}}(s,t)=|s-t|$. If $f_k\\to f$ uniformly on $X$, then\n$f:X\\to\\mathbb{R}$ is continuous.",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-continuous-implies-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be continuous on $[a,b]$\n([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann\nintegrable on $[a,b]$ ([[def-darboux-integral]]).\n\n**The proof gives more than integrability: it gives a partition that works.** For\nevery real $\\varepsilon > 0$ the uniform partition into $N$ parts already\nsatisfies $U(f,P) - L(f,P) < \\varepsilon$, as soon as $N$ is large enough that\n$(b-a)/\\iota(N)$ is below the $\\delta$ that uniform continuity supplies for\n$\\varepsilon/\\bigl(2(b-a)\\bigr)$. Uniform continuity is exactly what makes one\n$\\delta$ serve all $N$ subintervals at once, and it is the only place where the\ncompactness of $[a,b]$ is used.",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-uniform-limit-interchanges-riemann-integration",
      "source_section": "Statement",
      "quote": "Let $a<b$ be reals. Suppose every $f_k:[a,b]\\to\\mathbb{R}$ is Riemann\nintegrable and $f_k\\to f$ uniformly on $[a,b]$. Then $f$ is Riemann\nintegrable and\n\n$$\\int_a^b f_k\\longrightarrow\\int_a^b f.$$",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-ftc-first-part",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]), let $F$ be its integral function\n([[def-the-integral-function]]), and let $c \\in [a,b]$ be a point at which $f$ is\ncontinuous ([[def-continuity-real]]). Then $F$ is differentiable at $c$ as a\nfunction on $[a,b]$ ([[def-derivative]]) and\n\n$$F'(c) \\;=\\; f(c) .$$\n\nAt $c = a$ and $c = b$ this is the one-sided statement, which is what\n[[def-derivative]] means at those points: every point of a nondegenerate interval\nis a limit point of it, so $F'(c)$ is a meaningful symbol at every $c \\in [a,b]$,\nand the difference quotient is taken over $[a,b] \\setminus \\{c\\}$.\n\n**Consequently, if $f$ is continuous on the whole of $[a,b]$, then $F$ is a\nprimitive of $f$ there**: $F' = f$ at every point of $[a,b]$.\n\n**Continuity at $c$ is a hypothesis and it cannot be dropped.** For an integrable\n$f$ that is discontinuous at $c$, $F'(c)$ may fail to exist, and it may exist and\ndiffer from $f(c)$; both are exhibited on the companion page, by\nan integrable function with no primitive and by a false\nstatement about the integral function.",
      "uses": [
        "3.1",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "At $r=0$, $u_0=1$, the stated finite sum.  [base, given]",
      "step": "1.1",
      "inputs": [
        "base",
        "given"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "If the formula holds at $r$, integrate its finite sum termwise from $0$ to $x$. By [L1], the integral of $t^k/\\iota(k!)$ is $x^{k+1}/\\iota((k+1)!)$, giving the formula at $r+1$.   [ih, L1, given]",
      "step": "1.2",
      "inputs": [
        "L1",
        "ih",
        "given"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Hence the iterates are precisely the partial sums of the exponential series. Its infinite radius and [L2] give uniform convergence on every bounded interval.   [step 1.1, step 1.2, L2, given]",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.1",
        "1.2",
        "given"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Fix $x$ and work on the compact interval with endpoints $0$ and $x$. The polynomial iterates are continuous and integrable there, and step 2.1 gives uniform convergence to $\\exp$. Thus [L3] lets the integrals in $u_{r+1}(x)=1+\\int_0^x u_r(t)\\,dt$ pass to the limit, giving $\\exp(x)=1+\\int_0^x\\exp(t)\\,dt$, with the orientation supplied by [[def-oriented-integral]] when $x<0$.  [step 2.1, L3, given]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L3",
        "[def-oriented-integral",
        "given"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Step 2.1 and [L3] make $\\exp$ continuous. The first fundamental theorem applied to step 3.1 gives $\\exp'(x)=\\exp(x)$, and setting $x=0$ gives $\\exp(0)=1$.  [step 2.1, step 3.1, L3, discharge-induction] ∎",
      "step": "4.1",
      "inputs": [
        "2.1",
        "L3",
        "3.1",
        "discharge-induction"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The domain R and every bounded interval used are nonempty once a point is evaluated."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 checks u_0 and the integral from 0; step 4.1 yields exp(0)=1."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 covers the first iterate and the factorial recurrence at k=1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The oriented integral convention covers x=0, the collapsed interval, in step 1.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 2.1 and 3.1 work on each closed bounded interval [-M,M], including endpoints."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The iterates are recursively defined and no arbitrary selection occurs."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Steps 1.1–4.1 show the Picard construction yields exp and its integral equation."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Step 4.1 differentiates the integral equation back to the normalized ODE."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-ftc-first-part",
    "declared_target": "thm-ftc-first-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-ftc-second-part",
    "declared_target": "thm-ftc-second-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-uniform-limit-interchanges-riemann-integration",
    "declared_target": "thm-uniform-limit-interchanges-riemann-integration",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-uniform-limit-continuous-real-functions",
    "declared_target": "thm-uniform-limit-continuous-real-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-power-series-uniform-on-compact-subintervals",
    "declared_target": "thm-power-series-uniform-on-compact-subintervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-exponential-series-has-infinite-radius",
    "declared_target": "lem-exponential-series-has-infinite-radius",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-real-exponential-function-and-e",
    "declared_target": "def-real-exponential-function-and-e",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-factorial-and-falling-factorial",
    "declared_target": "def-factorial-and-falling-factorial",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
    "source": "thm-picard-iterates-for-exponential",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
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

## Full exact-current text of every cited or declared item (16)

### `def-factorial-and-falling-factorial`

````markdown
---
id: def-factorial-and-falling-factorial
kind: definition
title: "The factorial $n!$ and the falling factorial $n^{\\underline{k}}$, defined by recursion in $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-nat-multiplication,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-mult-identity,
       lem-nat-mult-cancellative, lem-nat-add-cancellative, def-nat-order,
       lem-nat-nonzero-is-successor, thm-omega-is-peano-system, def-canonical-natural]
justified_by: []
forward_refs: [lem-factorial-beats-geometric, def-monoid-finite-product]
aliases: []
landmark: true
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
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

## Definition

**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the
set $\mathbb{N}\times\mathbb{N}$, the starting element $(0,1)$ and the function
$f(k, v) = (\sigma(k),\, v \cdot \sigma(k))$, and by the same induction on the
first coordinate as in [[def-nat-finite-sum-and-product]], there is a unique
$F : \mathbb{N} \to \mathbb{N}$ with

$$F(0) = 1, \qquad F(\sigma(n)) = F(n)\cdot\sigma(n) \quad (n \in \mathbb{N}).$$

We write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\cdot 1 = 1$, $2! = 1!\cdot 2 = 2$,
$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.

**$0! = 1$ is the base clause of this recursion**, not a convention imported from
elsewhere. Nothing about empty products is presupposed; the agreement with the
empty product is proved below, in clause (a), rather than assumed.

**Truncated difference.** Throughout, $n - k$ is the operation fixed in
[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when
$k \le n$, and $0$ when $n < k$.

**The falling factorial.** For $n \in \mathbb{N}$ define $n^{\underline{k}}$ by
recursion on $k$, by the recursion theorem applied to
$\mathbb{N}\times\mathbb{N}$ with starting element $(0,1)$ and
$f(k, v) = (\sigma(k),\, v \cdot (n-k))$:

$$n^{\underline{0}} = 1, \qquad n^{\underline{\sigma(k)}} = n^{\underline{k}}\cdot(n-k) .$$

So $n^{\underline{1}} = 1\cdot(n-0) = n$ and $n^{\underline{2}} = n\,(n-1)$, and
for $k \le n$ the value is the product $n(n-1)\cdots(n-k+1)$ of the $k$ topmost
factors.

**Four facts, proved here because the page uses each of them.**

**(a) The factorial is the product of the first $n$ positive naturals.**
$n! = \prod_{j<n}\sigma(j) = \prod_{j<n}(j+1)$, the $\mathbb{N}$-valued product of
[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at
$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and
$\prod_{j<\sigma(n)}\sigma(j) = \big(\prod_{j<n}\sigma(j)\big)\cdot\sigma(n) = n!\cdot\sigma(n) = \sigma(n)!$.
**So the empty-product reading and the base-clause reading are the same reading**,
and neither was assumed.

**(b) $n! \ne 0$, and $\iota(n!) = \prod^{\mathbb{R}}_{j<n}\iota(j+1)$.** For the
first, $0! = 1 \ne 0$ ([[thm-omega-is-peano-system]]) and
$\sigma(n)! = n!\cdot\sigma(n)$ is a product of two nonzero naturals, which is
nonzero: if $xy = 0$ with $y \ne 0$ then $xy = 0\cdot y$
([[lem-nat-mult-identity]]) and cancellation gives $x = 0$
([[lem-nat-mult-cancellative]]). So $n! \ne 0$ for every $n$ by induction. For the second, apply the bridge clause
6 of that lemma to clause (a) above. This is what makes the factorial of this
page and the real-valued product $\prod_{j<n}(j+1)$ used elsewhere in the library
**one object seen twice**, rather than two unrelated notions.

**(c) $n^{\underline{k}}\cdot(n-k)! = n!$ for $k \le n$.** Induction on $k$, for
all $n$ at once. At $k = 0$ this reads $1 \cdot n! = n!$. Assume it at $k$ and
let $\sigma(k) \le n$; then $k \le n$, and writing $d := n - k$ we have
$k + d = n$ and $d \ne 0$, since $k + 0 = k \ne n$; so $d = \sigma(e)$ for a
unique $e$ ([[lem-nat-nonzero-is-successor]]), and $\sigma(k) + e = n$, that is
$e = n - \sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore
$n^{\underline{\sigma(k)}}\cdot\big(n-\sigma(k)\big)! = n^{\underline{k}}\cdot(n-k)\cdot e! = n^{\underline{k}}\cdot\big(e!\cdot\sigma(e)\big) = n^{\underline{k}}\cdot\sigma(e)! = n^{\underline{k}}\cdot(n-k)! = n!$,
using commutativity and associativity of multiplication
([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion
clause for the factorial.

**(d) Boundary values.** $n^{\underline{0}} = 1$ for every $n$, by the base
clause; $n^{\underline{n}} = n!$, since clause (c) at $k = n$ gives
$n^{\underline{n}}\cdot 0! = n!$ and $0! = 1$; and
$n^{\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives
$n^{\underline{\sigma(n)}} = n^{\underline{n}}\cdot 0 = 0$, the clause
$x \cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if
$n^{\underline{k}} = 0$ then
$n^{\underline{\sigma(k)}} = 0$ as well, so $n^{\underline{k}} = 0$ for every
$k \ge \sigma(n)$ by induction.

## Remarks

- **Why $0! = 1$ is not imported.** The empty-product convention of an arbitrary
  monoid is fixed in [[def-monoid-finite-product]], which comes later in the
  reading order, so citing it here would be a dependency pointing the wrong way.
  Taking $0! = 1$ as the base clause of the factorial's own recursion costs
  nothing and owes nothing, and clause (a) then records the agreement.

- **The library's other factorial.** [[lem-factorial-beats-geometric]], later in
  the reading order, works with a real-valued factorial defined as the product
  $\prod_{j<n}(j+1)$ in $\mathbb{R}$. Clause (b) says that this is exactly
  $\iota(n!)$, so the two agree and no second notion has been created. That
  pointer is orientation only.

- **Check every clause at $k = 0$ and at $k = n$.** The falling factorial is
  defined by two regimes, one for $k \le n$ and one beyond, and the recursion
  above covers both because the truncated difference is $0$ past the end. The
  two values that get used constantly are $n^{\underline{0}} = 1$ and
  $n^{\underline{n}} = n!$, and both are clause (d).
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

### `def-real-exponential-function-and-e`

````markdown
---
id: def-real-exponential-function-and-e
kind: definition
title: "The real exponential function and the number $e$ by a power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence, def-factorial-and-falling-factorial, def-integer-power, def-canonical-natural, lem-of-naturals-positive, def-series]
justified_by: [lem-exponential-series-has-infinite-radius]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Definition

For $x\in\mathbb R$, define
$$\exp(x):=\sum_{n=0}^{\infty}\frac{x^n}{\iota(n!)}, \qquad e:=\exp(1),$$
provided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\in\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].

This is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.
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

### `lem-exponential-series-has-infinite-radius`

````markdown
---
id: lem-exponential-series-has-infinite-radius
kind: lemma
title: "The exponential series converges absolutely for every real argument"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-exponential-function-and-e, thm-direct-comparison-test, thm-geometric-series, lem-absolute-convergence-implies-convergence, thm-of-archimedean, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

For every real $x$, the series $\sum_{n\ge0}x^n/\iota(n!)$ converges absolutely. Its power-series radius is therefore $+\infty$.

## Facts & Assumptions

**Given:** A real $x$.

[L1] Archimedes supplies a natural larger than any prescribed real ([[thm-of-archimedean]]).

[L2] A tail bounded termwise by a convergent geometric series converges ([[thm-direct-comparison-test]], [[thm-geometric-series]]), and absolute convergence implies convergence ([[lem-absolute-convergence-implies-convergence]]).

[L3] Factorials satisfy $(n+1)!=n!(n+1)$ and are nonzero naturals; every positive natural has a positive, hence nonzero, canonical real image ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 If $x=0$, the series is $1+0+0+\cdots$ and converges absolutely. Hence assume $x\ne0$. Choose $N\ge1$ with $\iota(N)>2|x|$. For $n\ge N$, the absolute terms $a_n=|x|^n/\iota(n!)$ are positive and satisfy $a_{n+1}/a_n=|x|/\iota(n+1)<1/2$.  [L1, L3, choose]

2.1 Thus $a_{N+j}\le a_N2^{-j}$ by induction, and the tail is dominated by a convergent geometric series.  [step 1.1, L2]

3.1 The zero case from step 1.1 and, when $x\ne0$, adding the finite initial segment to the convergent tail prove absolute convergence for arbitrary $x$. Hence every nonnegative radius works and the radius is $+\infty$.  [step 1.1, step 2.1, L2] ∎
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

### `thm-ftc-first-part`

````markdown
---
id: thm-ftc-first-part
kind: theorem
title: "The first fundamental theorem: if $f$ is integrable on $[a,b]$ and continuous at $c$, then $F'(c) = f(c)$; in particular a continuous $f$ has $F$ as a primitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-integral-function, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, lem-integral-elementary-bounds, lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-oriented-integral, def-derivative, def-function-limit, def-continuity-real, def-interval, def-darboux-integral, lem-of-abs-value, def-abs-value, def-ordered-field, def-complete-ordered-field, thm-of-archimedean, cor-archimedean-reciprocal]
forward_refs: [cex-an-integrable-function-with-no-primitive, fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: [thm-fundamental-theorem-of-calculus-first-part]
landmark: true
short: "first fundamental theorem"
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

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), let $F$ be its integral function
([[def-the-integral-function]]), and let $c \in [a,b]$ be a point at which $f$ is
continuous ([[def-continuity-real]]). Then $F$ is differentiable at $c$ as a
function on $[a,b]$ ([[def-derivative]]) and

$$F'(c) \;=\; f(c) .$$

At $c = a$ and $c = b$ this is the one-sided statement, which is what
[[def-derivative]] means at those points: every point of a nondegenerate interval
is a limit point of it, so $F'(c)$ is a meaningful symbol at every $c \in [a,b]$,
and the difference quotient is taken over $[a,b] \setminus \{c\}$.

**Consequently, if $f$ is continuous on the whole of $[a,b]$, then $F$ is a
primitive of $f$ there**: $F' = f$ at every point of $[a,b]$.

**Continuity at $c$ is a hypothesis and it cannot be dropped.** For an integrable
$f$ that is discontinuous at $c$, $F'(c)$ may fail to exist, and it may exist and
differ from $f(c)$; both are exhibited on the companion page, by
an integrable function with no primitive and by a false
statement about the integral function.

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, its integral function $F(x) = \int_a^x f$, a point $c \in [a,b]$ at which $f$ is continuous, and a real $\varepsilon > 0$.

[L1] $F(x) - F(c) = \int_c^x f$ for all $x, c \in [a,b]$, in either order ([[def-the-integral-function]], [[thm-additivity-over-subintervals]]).

[L2] Continuity at $c$: for every real $\eta > 0$ there is a real $\delta > 0$ such that every $t \in [a,b]$ with $|t - c| < \delta$ satisfies $|f(t) - f(c)| < \eta$ ([[def-continuity-real]]).

[L3] Every point of a nondegenerate interval is a limit point of it, so $F'(c) = \lim_{x\to c} \bigl(F(x)-F(c)\bigr)/(x-c)$ is a meaningful symbol, the limit being taken over $[a,b]\setminus\{c\}$ ([[def-derivative]], [[def-function-limit]], [[def-interval]]).

[L4] For $p < q$ in $[a,b]$: $f$ and $|f|$ and every constant are integrable on $[p,q]$; $\int_p^q \lambda = \lambda(q-p)$; sums and scalar multiples of integrable functions are integrable with the corresponding identity; and $\bigl|\int_p^q u\bigr| \le \int_p^q |u|$ ([[lem-integrability-on-a-subinterval]], [[lem-integral-elementary-bounds]], [[thm-linearity-of-the-integral]], [[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L5] If $u \le w$ pointwise on $[p,q]$ and both are integrable then $\int_p^q u \le \int_p^q w$ ([[thm-monotonicity-of-the-integral]]).

[L6] With oriented limits, $\int_q^p u = -\int_p^q u$ and $\int_p^p u = 0$ ([[def-oriented-integral]]).

[L7] Absolute value and ordered-field arithmetic: $|{-t}| = |t|$, $|t\,s| = |t||s|$, $|t| \le c$ follows from $-c \le t \le c$, a positive real has a positive inverse, and the order is total and transitive ([[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]). The nonstrict forms of the order facts follow from the strict ones by adjoining equality.

[L8] For every real $\eta > 0$ there is a real $\eta' > 0$ with $\eta' < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] with $\eta := \varepsilon \cdot 2^{-1}$, fix a real $\delta > 0$ such that $|f(t)-f(c)| < \varepsilon\cdot 2^{-1}$ for every $t \in [a,b]$ with $|t-c| < \delta$. [given, L2, L7, L8, choose]

1.2 For $x \in [a,b]$ with $x \ne c$, [L1] and [L4] give $F(x) - F(c) - f(c)(x-c) = \int_c^x f - \int_c^x f(c) = \int_c^x \bigl(f(t) - f(c)\bigr)\,\mathrm{d}t$, the constant $f(c)$ having integral $f(c)(x-c)$ over the oriented interval from $c$ to $x$ by [L4] and [L6]. [L1, L4, L6]

2.1 **The estimate for $c < x < c+\delta$.** Every $t \in [c,x]$ has $|t-c| < \delta$, so $-\varepsilon\cdot2^{-1} \le f(t)-f(c) \le \varepsilon\cdot 2^{-1}$ there by step 1.1, whence $\bigl|\int_c^x (f - f(c))\bigr| \le \varepsilon\cdot2^{-1}\,(x-c)$ by [L4] and [L5]. [step 1.1, step 1.2, L4, L5, L7]

2.2 **The estimate for $c-\delta < x < c$.** By [L6], $\int_c^x (f-f(c)) = -\int_x^c (f-f(c))$, and every $t \in [x,c]$ has $|t-c| < \delta$, so the same argument gives $\bigl|\int_c^x (f-f(c))\bigr| \le \varepsilon\cdot 2^{-1}\,(c-x)$. [step 1.1, step 1.2, L4, L5, L6, L7]

3.1 In both cases $\bigl|\int_c^x(f-f(c))\bigr| \le \varepsilon\cdot 2^{-1}\,|x-c|$, so dividing by the nonzero $|x-c|$ and using step 1.2 gives $\Bigl|\dfrac{F(x)-F(c)}{x-c} - f(c)\Bigr| \le \varepsilon\cdot 2^{-1} < \varepsilon$ for every $x \in [a,b]$ with $0 < |x-c| < \delta$. [step 1.2, step 2.1, step 2.2, L7]

4.1 Since $\varepsilon > 0$ was arbitrary, the limit of the difference quotient of $F$ at $c$ exists and equals $f(c)$ by [L3]; that is, $F'(c) = f(c)$. [step 1.1, step 3.1, L3]

5.1 If $f$ is continuous at every point of $[a,b]$ then step 4.1 applies at every $c \in [a,b]$, so $F' = f$ on $[a,b]$ and $F$ is a primitive of $f$. [step 4.1, L3] ∎

## Remarks

- **The estimate is written out for $x < c$ as well, and that is not redundancy.** For $x < c$ the factor $1/(x-c)$ is negative and the naive chain $m(x-c) \le \int_c^x \le M(x-c)$ reverses; what makes the argument uniform is taking absolute values *before* dividing, which is what steps 2.1, 2.2 and 3.1 do. This is the single most common error in this proof.

- **The route is the definition of the derivative, not the mean value theorem for integrals.** Deducing $F'(c) = f(c)$ from [[thm-first-mean-value-theorem-for-integrals]] would need $f$ continuous on a whole subinterval around $c$, which is a strictly stronger hypothesis than continuity at the single point $c$. The theorem as stated is the sharp one.

- **What is proved at a point is proved at a point.** Nothing here says $F$ is differentiable anywhere else, and nothing says $F' = f$ off the continuity set of $f$. Where $f$ is merely integrable, all that survives is [[thm-the-integral-function-is-lipschitz]].

- **Forward references, orientation only.** The two failures at a discontinuity are worked out on the companion page as [[cex-an-integrable-function-with-no-primitive]] and [[fs-the-integral-function-is-always-a-primitive]]; nothing above depends on either.
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
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
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

### `thm-power-series-uniform-on-compact-subintervals`

````markdown
---
id: thm-power-series-uniform-on-compact-subintervals
kind: theorem
title: "A power series converges absolutely and uniformly on every closed interval strictly inside its interval of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-power-series-convergence-dichotomy, thm-weierstrass-m-test-for-function-series, def-series-of-real-functions, def-interval]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

Let $\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which

$$r:=\max\{|u-c|,|v-c|\}<R.$$

Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly there.

## Facts & Assumptions

**Given:** A power series of radius $R$ and a closed interval $[u,v]$ satisfying the strict interior condition above ([[def-interval]], [[def-series-of-real-functions]]).

[L1] The power series converges absolutely at every point whose distance from $c$ is less than $R$ ([[cor-power-series-convergence-dichotomy]]).

[L2] If $|f_n(x)|\le M_n$ for all $n,x$ and $\sum M_n$ converges, the Weierstrass M-test gives absolute pointwise and uniform convergence of $\sum f_n$ ([[thm-weierstrass-m-test-for-function-series]]).

## Proof

**Proof technique:** direct.

1.1 Choose a real $\rho$ with $r<\rho<R$, or merely $\rho>r$ when $R=+\infty$. Then the scalar series $\sum |a_n|\rho^n$ converges by [L1], applied at $x=c+\rho$. [given, L1, choose]

1.2 For every $x\in[u,v]$, order-convexity gives $|x-c|\le\max\{|u-c|,|v-c|\}=r<\rho$, and hence $|a_n(x-c)^n|\le |a_n|\rho^n$ for every $n$. [given, algebra]

2.1 Apply [L2] to $f_n(x)=a_n(x-c)^n$ and $M_n=|a_n|\rho^n$. The series is absolutely convergent at each $x\in[u,v]$ and uniformly convergent on the whole interval. [step 1.1, step 1.2, L2] ∎
````

### `thm-uniform-limit-continuous-real-functions`

````markdown
---
id: thm-uniform-limit-continuous-real-functions
kind: theorem
title: "The uniform limit of continuous real-valued functions on a metric space is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-metric-continuity, lem-real-line-is-a-metric-space, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
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
    - title: "Stanford Math 63CM, Additional Lecture Notes, Theorem 1.16"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/lecture-notes-63cm-20-prelim.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space and let $f_k:X\to\mathbb{R}$ be continuous for
every $k\in\mathbb{N}$, where $\mathbb{R}$ has its usual metric
$d_{\mathbb{R}}(s,t)=|s-t|$. If $f_k\to f$ uniformly on $X$, then
$f:X\to\mathbb{R}$ is continuous.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, continuous functions $f_k:X\to\mathbb{R}$, and uniform convergence $f_k\to f$.

[A1] Uniform convergence gives, for every real $\eta>0$, one index $N$ such that $|f_k(x)-f(x)|<\eta$ for every $k\ge N$ and every $x\in X$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] Continuity of $f_N$ at $a$ means that for every real $\eta>0$ there is $\delta>0$ such that $d(x,a)<\delta$ implies $|f_N(x)-f_N(a)|<\eta$ ([[def-metric-continuity]], [[lem-real-line-is-a-metric-space]]).

[L1] For reals $u,v$, $|u+v|\le|u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in X$ and a real $\varepsilon>0$. By uniform convergence choose $N$ such that $|f_N(x)-f(x)|<\varepsilon/3$ for every $x\in X$. [A1, choose]

1.2 By continuity of $f_N$ at $a$, choose $\delta>0$ such that $d(x,a)<\delta$ implies $|f_N(x)-f_N(a)|<\varepsilon/3$. [A2, choose]

2.1 If $d(x,a)<\delta$, then $|f(x)-f(a)|\le |f(x)-f_N(x)|+|f_N(x)-f_N(a)|+|f_N(a)-f(a)|<\varepsilon$. [step 1.1, step 1.2, L1, algebra]

3.1 Thus $f$ is continuous at the arbitrary point $a$, and hence continuous on $X$. [step 2.1, A2] ∎
````

### `thm-uniform-limit-interchanges-riemann-integration`

````markdown
---
id: thm-uniform-limit-interchanges-riemann-integration
kind: theorem
title: "A uniform limit of Riemann-integrable functions is Riemann integrable, and its integral is the limit of their integrals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-riemann-criterion, lem-uniform-integral-error-bound, def-darboux-integral, def-darboux-sums, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
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
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ be reals. Suppose every $f_k:[a,b]\to\mathbb{R}$ is Riemann
integrable and $f_k\to f$ uniformly on $[a,b]$. Then $f$ is Riemann
integrable and

$$\int_a^b f_k\longrightarrow\int_a^b f.$$

## Facts & Assumptions

**Given:** Reals $a<b$, integrable functions $f_k:[a,b]\to\mathbb{R}$, and uniform convergence $f_k\to f$.

[A1] Uniform convergence means that for every real $\eta>0$ one index makes $|f_k(x)-f(x)|<\eta$ for every later $k$ and every $x\in[a,b]$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] An integrable function on $[a,b]$ is bounded; conversely, a bounded function $h$ there is Riemann integrable exactly when, for every real $\varepsilon>0$, some partition $P$ satisfies $U(h,P)-L(h,P)<\varepsilon$ ([[def-darboux-integral]], [[thm-riemann-criterion]]).

[L2] Darboux upper and lower sums are finite sums of the subinterval suprema and infima times the subinterval lengths; finite sums preserve inequalities and split and telescope in the usual way ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L3] If two integrable functions differ by at most $\eta$ uniformly, then their integrals differ by at most $\eta(b-a)$ ([[lem-uniform-integral-error-bound]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ be real, put $\eta:=\varepsilon/(4(b-a))>0$, and choose an index $j$ such that $|f_j(x)-f(x)|<\eta$ for every $x\in[a,b]$. [A1, choose]

1.2 By integrability of $f_j$ and [L1], choose a partition $P$ with $U(f_j,P)-L(f_j,P)<\varepsilon/2$. [L1, choose]

2.1 The integrable function $f_j$ is bounded, say $|f_j(x)|\le M$ on $[a,b]$; then $|f(x)|\le M+\eta$, so $f$ is bounded. [step 1.1, L1, algebra]

3.1 On each subinterval of $P$, step 1.1 gives $\sup f\le\sup f_j+\eta$ and $\inf f\ge\inf f_j-\eta$; these suprema and infima exist by step 2.1. Multiplying by the nonnegative subinterval lengths and summing gives $U(f,P)\le U(f_j,P)+\eta(b-a)$ and $L(f,P)\ge L(f_j,P)-\eta(b-a)$. [step 1.1, step 1.2, step 2.1, L2, algebra]

4.1 Therefore $U(f,P)-L(f,P)\le U(f_j,P)-L(f_j,P)+2\eta(b-a)<\varepsilon$, so [L1] makes $f$ integrable. [step 3.1, L1, algebra]

5.1 Now let $\varepsilon>0$ be real and choose $N$ such that $|f_k(x)-f(x)|<\varepsilon/(b-a+1)$ for every $k\ge N$ and every $x\in[a,b]$. [step 4.1, A1, choose]

6.1 For $k\ge N$, both functions are integrable, so [L3] gives $\left|\int_a^b f_k-\int_a^b f\right|\le \varepsilon(b-a)/(b-a+1)<\varepsilon$. [step 4.1, step 5.1, L3, algebra]

7.1 Step 6.1 proves $\int_a^b f_k\to\int_a^b f$, while step 4.1 proves integrability of $f$. [step 4.1, step 6.1] ∎
````

