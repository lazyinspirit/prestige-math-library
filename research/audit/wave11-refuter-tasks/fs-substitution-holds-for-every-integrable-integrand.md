## Selection reasons

- critical risk (16): 38 declared dependencies; 41 cited facts; 13 numbered proof steps; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (38 outgoing relationships)

## Target item — `fs-substitution-holds-for-every-integrable-integrand`

Normalized current SHA-256: `20661f7bdfeb5f62f76f2075a0e0de2f85435b9a6c7e8acd1cb53cb4bb8b3a89`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: fs-substitution-holds-for-every-integrable-integrand
kind: false-statement
title: "FALSE: in the substitution theorem the continuity of $f$ may be weakened to integrability, $f\\circ\\varphi$ still being integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-substitution, thm-ftc-first-part, thm-nonnegative-continuous-with-zero-integral-vanishes, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, thm-additivity-over-subintervals, def-the-integral-function, def-oriented-integral, def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, def-nowhere-dense-meager, def-interior-closure-boundary-r, lem-distance-to-set-is-lipschitz, def-metric-bounded-diameter, lem-real-line-is-a-metric-space, lem-real-and-metric-notions-agree, def-open-and-closed-in-r, thm-continuous-implies-integrable, thm-continuous-image-of-a-compact-set-r, thm-heine-borel-characterisation-r, def-open-cover-r, thm-lebesgue-criterion, def-measure-zero-and-content-zero, lem-content-zero-implies-null, def-finite-sum, lem-finite-sum-laws, def-canonical-natural, lem-of-naturals-positive, cor-archimedean-reciprocal, thm-of-archimedean, def-continuity-real, def-darboux-integral, def-bounded-set, def-infimum, def-complete-ordered-field, def-ordered-field, def-interval, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
short: "FALSE: substitution with a merely integrable integrand"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Integration by substitution (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integration_by_substitution"
    - title: "Smith–Volterra–Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Charles C. Pugh, Real Mathematical Analysis, 2nd ed., Chapter 3, Exercise 35"
      url: "https://link.springer.com/book/10.1007/978-3-319-17771-7"
    - title: "Charles C. Pugh, Real Mathematical Analysis, 2nd ed. (Lehman College faculty copy), Chapter 3, Exercise 35"
      url: "https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/Pugh_Real_Mathematical_Analysis.pdf"
pipeline_run: null
---

## Statement

**False claim:** let $c<d$ be reals, let $\varphi : [c,d] \to \mathbb{R}$ be
differentiable at every point of $[c,d]$ with $\varphi'$ integrable, and let $f$
be Riemann integrable on an interval $J$ containing $\varphi[\,[c,d]\,]$. Then
$f\circ\varphi$ is Riemann integrable on $[c,d]$ — so the hypothesis "$f$ is
continuous" in [[thm-substitution]] may be weakened to "$f$ is integrable"
without the right-hand side $\int_c^d (f\circ\varphi)\varphi'$ losing its
meaning.

The claim is false. Let $S \subseteq [0,1]$ be the Smith-Volterra-Cantor set
([[def-fat-cantor-set]]), which is compact, nowhere dense and **not** null
([[thm-fat-cantor-set-has-positive-measure]]), and let

$$d_S(u) \;:=\; \inf\{\, |u-s| \ : \ s \in S \,\} , \qquad \varphi(x) \;:=\; \int_0^x d_S \quad (x \in [0,1]) .$$

Then $\varphi$ is differentiable at every point of $[0,1]$ with
$\varphi' = d_S$ continuous, hence integrable; $\varphi$ is strictly increasing;
and $\varphi[S]$ has measure zero. Taking

$$f \;:=\; \mathbf{1}_{\varphi[S]} \quad \text{on } J := \bigl[0,\ \varphi(1)\bigr]$$

gives an integrable $f$, because its discontinuity set is contained in the null
closed set $\varphi[S]$, while

$$f\circ\varphi \;=\; \mathbf{1}_{S} \quad \text{on } [0,1] ,$$

whose discontinuity set is exactly $S$ and is **not** null. So $f\circ\varphi$ is
not Riemann integrable.

**What this does and does not show.** It shows that continuity of $f$ in
[[thm-substitution]] cannot simply be weakened to integrability: the composite in
the right-hand side need not be integrable. It does **not** exhibit a pair for
which both sides of the substitution identity exist and differ, and no such pair
is claimed here.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S \subseteq [0,1]$, the function $d_S$ and the function $\varphi$ above, a real $\varepsilon>0$ and a natural number $N \ge 1$.

[L1] $S$ is a compact, nowhere dense subset of $[0,1]$; it is nonempty; and no cover of $S$ by intervals has total length below $2^{-1}$, so $S$ does not have measure zero ([[def-fat-cantor-set]], [[thm-fat-cantor-set-has-positive-measure]], [[def-nowhere-dense-meager]], [[def-measure-zero-and-content-zero]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L2] Nowhere dense plus closed means empty interior: no nonempty open interval is contained in $S$ ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

[L3] $u \mapsto d_S(u)$ is defined for every real (the set is nonempty and bounded below by $0$) and is $1$-Lipschitz, hence continuous ([[lem-distance-to-set-is-lipschitz]], [[def-metric-bounded-diameter]], [[lem-real-line-is-a-metric-space]], [[lem-real-and-metric-notions-agree]], clauses 3 and 6, [[def-infimum]], [[def-continuity-real]]).

[L4] A continuous function on a closed bounded interval with distinct endpoints is integrable there ([[thm-continuous-implies-integrable]], [[def-darboux-integral]]).

[L5] First fundamental theorem: for $u$ integrable on $[p,q]$ and continuous at every point, $x \mapsto \int_p^x u$ is differentiable with derivative $u$ ([[thm-ftc-first-part]], [[def-the-integral-function]], [[thm-additivity-over-subintervals]], [[def-oriented-integral]]).

[L6] A continuous $w \ge 0$ on $[p,q]$ with $p<q$ and $\int_p^q w = 0$ vanishes identically ([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

[L7] If $\kappa \le w \le \mu$ on $[p,q]$ with $w$ integrable then $\kappa(q-p) \le \int_p^q w \le \mu(q-p)$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L8] The continuous image of a compact set is compact, and a compact subset of $\mathbb{R}$ is closed and bounded ([[thm-continuous-image-of-a-compact-set-r]], [[thm-heine-borel-characterisation-r]]).

[L9] Lebesgue's criterion: a bounded function on $[p,q]$ is integrable if and only if its discontinuity set has measure zero; a set of content zero has measure zero ([[thm-lebesgue-criterion]], [[lem-content-zero-implies-null]], [[def-measure-zero-and-content-zero]], [[def-bounded-set]]).

[L10] Finite sums: monotonicity in the terms and $\sum_{i<N}\lambda = \iota(N)\lambda$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 2 and 4); $\iota(N) \ge 1 > 0$ for $N \ge 1$, and for every real $\eta>0$ there is $N \ge 1$ with $1/\iota(N)<\eta$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L11] Ordered-field arithmetic and suprema: a nonempty bounded set has a supremum and an infimum; $\min\{s,t\}$ is at most the average of $s$ and $t$ when $s+t$ is fixed; multiplying inequalities by positive reals preserves them; the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]], [[def-infimum]], [[def-interval]], [[def-injection-surjection-bijection]]).

## Refutation

**Proof technique:** direct.

1.1 $d_S \ge 0$ everywhere, $d_S(u) = 0$ for $u \in S$, and $d_S(u) > 0$ for $u \notin S$: $S$ is closed by [L1], so some $\rho>0$ has $(u-\rho,u+\rho)\cap S = \varnothing$, whence $|u-s| \ge \rho$ for every $s \in S$ and $d_S(u) \ge \rho$. [given, L1, L3, L11]

2.1 $d_S$ is continuous by [L3], hence integrable on every $[0,x]$ with $x>0$ by [L4]; so $\varphi$ is defined on $[0,1]$, and by [L5] it is differentiable at every point of $[0,1]$ with $\varphi' = d_S$, which is integrable by [L4]. [step 1.1, L3, L4, L5]

3.1 **$\varphi$ is strictly increasing, hence injective.** For $0 \le x < y \le 1$, $\varphi(y)-\varphi(x) = \int_x^y d_S \ge 0$ by [L5] and [L7]; if it were $0$ then [L6] would force $d_S \equiv 0$ on $[x,y]$, so $[x,y] \subseteq S$ by step 1.1, contradicting [L2]. Hence $\varphi(x)<\varphi(y)$. In particular $\varphi(0)=0<\varphi(1)$. [step 1.1, step 2.1, L2, L5, L6, L7]

3.2 **A quadratic contraction on $S$.** Let $x<y$ both lie in $S$. For $u \in [x,y]$ one has $d_S(u) \le \min\{u-x,\ y-u\} \le (y-x)\cdot 2^{-1}$, since $x,y \in S$; so by [L5] and [L7], $0 \le \varphi(y)-\varphi(x) = \int_x^y d_S \le (y-x)^{2}\cdot 2^{-1}$. [step 2.1, L5, L7, L11]

4.1 **$\varphi[S]$ has content zero.** Fix $N \ge 1$ and for $i<N$ put $J_i := [\iota(i)/\iota(N),\ \iota(i+1)/\iota(N)]$, so the $J_i$ cover $[0,1]$ and each has length $1/\iota(N)$. If $S \cap J_i \ne \varnothing$ let $E_i := \varphi[S \cap J_i]$, a nonempty bounded set, and put $a_i := \inf E_i$, $b_i := \sup E_i$; otherwise put $a_i := b_i := 0$. [step 3.2, L10, L11, construct]

5.1 For $z,w \in E_i$ one has $|z-w| \le \bigl(1/\iota(N)\bigr)^{2}\cdot 2^{-1}$ by step 3.2, the two preimages lying in $S \cap J_i$; hence $b_i \le a_i + \bigl(1/\iota(N)\bigr)^{2}\cdot 2^{-1}$, since every $z \in E_i$ is at most $w + (1/\iota(N))^{2}2^{-1}$ for each fixed $w$, and then $w \ge b_i - (1/\iota(N))^{2}2^{-1}$ for every $w$. [step 3.2, step 4.1, L11]

6.1 Every point of $\varphi[S]$ lies in some $[a_i,b_i]$, because every point of $S$ lies in some $J_i$; and $\sum_{i<N}(b_i-a_i) \le \iota(N)\cdot \bigl(1/\iota(N)\bigr)^{2}\cdot 2^{-1} = 1/\bigl(2\,\iota(N)\bigr)$ by [L10]. [step 4.1, step 5.1, L10]

7.1 Given $\varepsilon>0$, [L10] supplies $N \ge 1$ with $1/(2\iota(N)) \le \varepsilon$; so $\varphi[S]$ has content zero and therefore measure zero by [L9]. [step 6.1, L9, L10]

8.1 **$f := \mathbf{1}_{\varphi[S]}$ is integrable on $J = [0,\varphi(1)]$.** It is bounded, with values in $\{0,1\}$. $S$ is compact by [L1] and $\varphi$ is continuous by [L5] and [L3], so $\varphi[S]$ is compact, hence closed, by [L8]; therefore at every $z \in J \setminus \varphi[S]$ some neighbourhood misses $\varphi[S]$ and $f$ vanishes on it, so $f$ is continuous there. The discontinuity set of $f$ is thus contained in $\varphi[S]$, which is null by step 7.1, so $f$ is integrable by [L9]. [step 2.1, step 7.1, L1, L3, L8, L9]

9.1 **$f\circ\varphi = \mathbf{1}_{S}$ on $[0,1]$.** For $x \in [0,1]$: if $x \in S$ then $\varphi(x) \in \varphi[S]$ and $f(\varphi(x)) = 1$; if $x \notin S$ then $\varphi(x) \notin \varphi[S]$, since $\varphi$ is injective by step 3.1, and $f(\varphi(x)) = 0$. Also $\varphi[\,[0,1]\,] \subseteq J$ by step 3.1. [step 3.1, step 8.1]

10.1 **$\mathbf{1}_{S}$ is discontinuous at every point of $S$.** Let $x \in S$ and $\rho>0$; the set $(x-\rho,x+\rho)\cap(0,1)$ contains a nonempty open interval, which by [L2] is not contained in $S$, so some $y$ in it has $\mathbf{1}_S(y) = 0$ while $\mathbf{1}_S(x)=1$; no $\delta$ works for $\varepsilon = 2^{-1}$. At $x \notin S$ the function vanishes on a neighbourhood, $S$ being closed, so it is continuous there. [step 9.1, L1, L2, L11]

11.1 The discontinuity set of $f\circ\varphi$ on $[0,1]$ is therefore exactly $S$, which is not null by [L1]; so $f\circ\varphi$ is bounded and **not** Riemann integrable, by [L9]. [step 9.1, step 10.1, L1, L9]

12.1 So $\varphi$ is differentiable on $[0,1]$ with $\varphi'$ integrable, $f$ is integrable on an interval containing $\varphi[\,[0,1]\,]$, and $f\circ\varphi$ is not integrable: the claim is false, and the continuity hypothesis on $f$ in [[thm-substitution]] cannot be weakened to integrability. [step 2.1, step 8.1, step 9.1, step 11.1] ∎

## Remarks

- **Why $\varphi$ has to be built and cannot be a familiar function.** The set on which $f\circ\varphi$ misbehaves is $\varphi^{-1}$ of a null set, and for a Lipschitz $\varphi$ with $\varphi'$ bounded away from $0$ that preimage is again null. What makes the witness work is that $\varphi' = d_S$ vanishes on the whole of $S$, so $\varphi$ crushes a set of positive measure onto a null set while remaining injective; step 3.2 is the quantitative form of that crushing.

- **The substitution identity itself is not refuted here, and that is stated rather than glossed over.** For this very pair one has $(f\circ\varphi)\varphi' = \mathbf{1}_S \cdot d_S$, which is the zero function because $d_S$ vanishes on $S$; so the right-hand side of the substitution formula does exist for this pair and equals $0$, as does the left-hand side. What fails is the intermediate claim that the composite $f\circ\varphi$ is integrable, which is what a proof of the identity with $f$ merely integrable would have to establish, and which is what [[thm-substitution]]'s continuity hypothesis delivers through [[thm-composition-with-a-continuous-function]]. No pair with both sides defined and unequal is exhibited anywhere on this page.

- **The fat Cantor set is doing exactly one job.** It supplies a closed set with empty interior that is not null. Any such set would serve; $S$ is the published one, and [[thm-fat-cantor-set-has-positive-measure]] is what supplies all three properties without reproving them.
````

## Wave 11 provenance row

```json
{
  "id": "fs-substitution-holds-for-every-integrable-integrand",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/Pugh_Real_Mathematical_Analysis.pdf",
    "https://link.springer.com/book/10.1007/978-3-319-17771-7"
  ],
  "rationale": "Charles C. Pugh, Real Mathematical Analysis, 2nd ed., Chapter 3, Exercise 35(a)--(d), gives the same construction from a fat Cantor set F, psi(x)=integral_0^x dist(t,F) dt, nullity of psi(F), and the Riemann-integrable indicator of psi(F) whose composite with psi is not Riemann integrable. The Lehman College faculty-hosted full text exposes the exact exercise, while Springer supplies the canonical publisher record. The repository's quantitative content-zero proof and dependency-explicit packaging are local.",
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
      "source": "def-fat-cantor-set",
      "source_section": "Definition",
      "quote": "**The lengths.** By the recursion theorem in the index-carrying form used by\n[[def-finite-sum]] ([[thm-recursion]], applied to $\\mathbb{N} \\times \\mathbb{R}$\nwith starting element $(0,1)$ and the map\n$(n,t) \\mapsto (n+1,\\, (t - 4^{-n-1}) \\cdot 2^{-1})$) there is a unique sequence\n$(\\lambda_n)_{n \\in \\mathbb{N}}$ of reals with\n\n$$\\lambda_0 = 1, \\qquad \\lambda_{n+1} = (\\lambda_n - 4^{-n-1}) \\cdot 2^{-1} \\quad (n \\in \\mathbb{N}),$$\n\npowers being those of [[def-integer-power]]. Put $g_n := \\lambda_n - \\lambda_{n+1}$.\n\n**The left endpoints.** Let $\\mathcal{F}$ be the set of pairs $(N, \\ell)$ with\n$N \\in \\mathbb{N}$, $N \\ge 1$, and $\\ell$ a function from\n$\\{\\, j \\in \\mathbb{N} : j < N \\,\\}$ to $\\mathbb{R}$; such a pair is a *finite\nlist of reals of length $N$*. Applying [[thm-recursion]] to\n$\\mathbb{N} \\times \\mathcal{F}$, the starting element $(0, (1, \\ell^{(0)}))$ with\n$\\ell^{(0)}_0 := 0$, and the map that sends $(n, (N,\\ell))$ to\n$(n+1, (N + N, \\ell'))$ where\n\n$$\\ell'_j := \\ell_j \\ \\ (j < N), \\qquad \\ell'_j := \\ell_{j - N} + g_n \\ \\ (N \\le j < N + N),$$\n\ngives a unique family $(N_n, \\ell^{(n)})_{n \\in \\mathbb{N}}$ of finite lists,\nwith $N_0 = 1$, $N_{n+1} = N_n + N_n$, and $\\ell^{(n+1)}$ the concatenation of\n$\\ell^{(n)}$ with its translate by $g_n$. Write $e^{(n)}_j := \\ell^{(n)}_j$.\n\n**The sets.** For $n \\in \\mathbb{N}$ put\n\n$$S_n \\;:=\\; \\bigcup_{j < N_n} \\big[\\, e^{(n)}_j,\\ e^{(n)}_j + \\lambda_n \\,\\big], \\qquad S \\;:=\\; \\bigcap_{n \\in \\mathbb{N}} S_n ,$$\n\nthe intervals being those of [[def-interval]]. $S$ is the\n**Smith-Volterra-Cantor set**, also called the *fat Cantor set*.\n\n**Counting.** For every $n$ and every real $c$ one has\n$\\sum_{j < N_n} c = 2^{n} c$, by induction on $n$ ([[thm-induction-principle]]):\nat $n = 0$ both sides are $c$; and $\\sum_{j<N_n + N_n} c = \\sum_{j<N_n} c +\n\\sum_{j<N_n} c = 2^{n}c + 2^{n}c = 2^{n+1}c$, by the splitting law\n([[lem-finite-sum-laws]], [[def-finite-sum]]) and\n$2^{n+1} = 2^{n} \\cdot 2 = 2^{n} + 2^{n}$ ([[def-integer-power]],\n[[def-ordered-field]]). So stage $n$ has \"$2^n$ intervals\" in exactly this sense,\nand no separate arithmetic of natural-number exponents is needed.\n\n**The lengths are positive and shrink.** By induction on $n$:\n$0 < \\lambda_{n+1} \\le \\lambda_n \\cdot 2^{-1}$ and $2^{n}\\lambda_n \\ge 2^{-1}$.\nIndeed $2^{n+1}\\lambda_{n+1} = 2^{n}(\\lambda_n - 4^{-n-1}) = 2^{n}\\lambda_n -\n4^{-1} \\cdot 2^{-n}$ by [[lem-power-laws]], so by induction\n$2^{n}\\lambda_n = 1 - 4^{-1}\\sum_{i<n} 2^{-i} \\ge 1 - 4^{-1} \\cdot 2 = 2^{-1}$,\nusing $\\sum_{i<n}2^{-i} \\le \\sum_{i=0}^{\\infty} 2^{-i} = 2$\n([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]],\n[[def-series]]). Hence $\\lambda_n \\ge 2^{-n-1} > 0$; and\n$\\lambda_{n+1} = (\\lambda_n - 4^{-n-1})\\cdot 2^{-1} \\le \\lambda_n \\cdot 2^{-1}$\ngives $\\lambda_n \\le 2^{-n}$ by a second induction, so the lengths tend to $0$.\n\n**Each stage removes an open middle interval of length $4^{-n-1}$.** From the\nrecursion, the two sub-intervals of $[e,\\, e + \\lambda_n]$ retained at stage\n$n+1$ are $[e,\\, e + \\lambda_{n+1}]$ and $[e + g_n,\\, e + g_n + \\lambda_{n+1}] =\n[e + g_n,\\, e + \\lambda_n]$, so what is dropped from that piece is the open\ninterval\n\n$$M \\;=\\; \\big(\\, e + \\lambda_{n+1},\\ e + g_n \\,\\big), \\qquad \\text{of length } \\ g_n - \\lambda_{n+1} \\;=\\; \\lambda_n - 2\\lambda_{n+1} \\;=\\; 4^{-n-1} .$$\n\nIn particular $\\lambda_{n+1} < g_n$, so $M$ is nonempty, and $g_n > 0$, so\n$[e + g_n, e + \\lambda_n] \\subseteq [e, e+\\lambda_n]$. Counting from $1$ as in\nthe title: at stage $n \\ge 1$ an open interval of length $4^{-n}$ is removed from\neach of the $2^{n-1}$ intervals then present.\n\n**The family is nested and lies in $[0,1]$.** Each retained sub-interval is\ncontained in the piece it came from, by the previous paragraph, so\n$S_{n+1} \\subseteq S_n$; and $S_0 = [0, 1]$ since $N_0 = 1$, $e^{(0)}_0 = 0$ and\n$\\lambda_0 = 1$. Hence $S \\subseteq S_m \\subseteq [0,1]$ for every $m$.",
      "uses": [
        "1.1",
        "8.1",
        "10.1",
        "11.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-fat-cantor-set-has-positive-measure",
      "source_section": "Statement",
      "quote": "Let $S$ be the Smith-Volterra-Cantor set ([[def-fat-cantor-set]]). Then:\n\n1. $S$ is closed and bounded, hence compact\n   ([[thm-heine-borel-characterisation-r]]);\n2. $S$ is perfect ([[def-perfect-set-r]]);\n3. $S$ is nowhere dense ([[def-nowhere-dense-meager]]);\n4. if $(a_k)$ and $(b_k)$ are sequences of reals with $a_k \\le b_k$,\n   $S \\subseteq \\bigcup_k [a_k,b_k]$ and $\\sum_{k<i}(b_k - a_k) \\le M$ for every\n   $i \\in \\mathbb{N}$, then $M \\ge 2^{-1}$.\n\nIn particular $S$ does **not** have measure zero\n([[def-measure-zero-and-content-zero]]): no cover of $S$ by intervals has total\nlength below $2^{-1}$, let alone below every positive $\\varepsilon$.\n\n**Claim 4 is the quantitative form**, and it is what claim 4 of the title asserts\nin the only vocabulary available here. This library defines no outer measure, so\n\"the measure of $S$ is $1/2$\" is not a statement it can make; what it can state,\nand what is proved below, is that $2^{-1}$ is a lower bound for the total length\nof every interval cover of $S$.",
      "uses": [
        "1.1",
        "8.1",
        "10.1",
        "11.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-nowhere-dense-meager",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with interior $A^{\\circ}$ and closure\n$\\overline{A}$ as in [[def-interior-closure-boundary-r]].\n\n- $A$ is **nowhere dense** when the interior of its closure is empty:\n  $$\\big(\\overline{A}\\big)^{\\circ} \\;=\\; \\varnothing .$$\n- $A$ is **meager**, or **of the first category**, when there is a sequence\n  $(A_n)_{n \\in \\mathbb{N}}$ of nowhere dense subsets of $\\mathbb{R}$ with\n  $$A \\;=\\; \\bigcup_{n \\in \\mathbb{N}} A_n .$$\n- $A$ is **of the second category** when it is not meager.\n- $A$ is **residual** (also *comeager*) when $\\mathbb{R} \\setminus A$ is meager.\n\n**Why a sequence, and why that is the same as \"an at most countable union\".**\nSequences here are indexed by $\\mathbb{N}$, which contains $0$. A finite family\n$A_0, \\dots, A_m$ of nowhere dense sets is turned into a sequence by setting\n$A_n := \\varnothing$ for $n > m$, and $\\varnothing$ is nowhere dense because\n$\\overline{\\varnothing} = \\varnothing$ has empty interior; the empty family is\nhandled the same way and gives $A = \\varnothing$. So \"a union of an at most\ncountable family of nowhere dense sets\" ([[def-countable]]) and the displayed\ncondition define the same class, and the sequence form is used below because it\ncarries an explicit index and needs no case split.\n\n**Nowhere dense means exactly that the complement of the closure is dense.**\nFor $A \\subseteq \\mathbb{R}$,\n\n$$\\big(\\overline{A}\\big)^{\\circ} = \\varnothing \\quad \\Longleftrightarrow \\quad \\mathbb{R} \\setminus \\overline{A} \\text{ is dense in } \\mathbb{R} .$$\n\nIndeed, by the pointwise description of the interior\n([[def-interior-closure-boundary-r]]), $(\\overline{A})^{\\circ} = \\varnothing$\nsays that no $x \\in \\mathbb{R}$ admits a real $\\varepsilon > 0$ with\n$N_\\varepsilon(x) \\subseteq \\overline{A}$ ([[def-neighbourhood-r]]), that is,\nthat every $N_\\varepsilon(x)$ meets $\\mathbb{R} \\setminus \\overline{A}$. By\nclaim 1 of [[thm-closure-characterisations-r]] that says precisely that every\n$x \\in \\mathbb{R}$ is adherent to $\\mathbb{R} \\setminus \\overline{A}$, that is,\n$\\overline{\\mathbb{R} \\setminus \\overline{A}} = \\mathbb{R}$, which is density\n([[def-limit-point-r]]).\n\n**A closed set is nowhere dense exactly when its interior is empty**, since a\nclosed set equals its own closure (claim 4 of [[thm-closure-characterisations-r]],\n[[def-open-and-closed-in-r]]). This is the form in which nowhere density is\nverified nearly every time below. (The phrase *almost everywhere* is avoided\nthroughout this pair: it is a measure-theoretic term, and the only measure notion\ndefined here is measure zero.)\n\n**Both classes are closed downwards.** If $B \\subseteq A$ then\n$\\overline{B} \\subseteq \\overline{A}$ and hence\n$(\\overline{B})^{\\circ} \\subseteq (\\overline{A})^{\\circ}$\n([[def-interior-closure-boundary-r]]), so a subset of a nowhere dense set is\nnowhere dense. If $B \\subseteq A = \\bigcup_n A_n$ with each $A_n$ nowhere dense,\nthen $B = \\bigcup_n (A_n \\cap B)$ and each $A_n \\cap B$ is nowhere dense by the\nprevious sentence, so a subset of a meager set is meager.\n\n**A union of two meager sets is meager.** Let $M = \\bigcup_n A_n$ and\n$M' = \\bigcup_n B_n$ with all $A_n$ and all $B_n$ nowhere dense; fixing one\nwitnessing sequence for $M$ and one for $M'$ is two instantiations of an\nexistential statement, not a choice principle. Let\n$J : \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{N}$ be a bijection\n([[thm-n-cross-n-countable]]) and define a sequence $(C_j)_{j \\in \\mathbb{N}}$ by\n\n$$C_{J(m,n)} \\;:=\\; \\begin{cases} A_n & m = 0, \\\\ B_n & m \\ne 0. \\end{cases}$$\n\nThis is a total definition because $J$ is a bijection, every $C_j$ is nowhere\ndense, and $\\bigcup_j C_j = M \\cup M'$, since $A_n = C_{J(0,n)}$ and\n$B_n = C_{J(1,n)}$ and every $C_j$ is one of the $A_n$ or one of the $B_n$.",
      "uses": [
        "1.1",
        "8.1",
        "10.1",
        "11.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-measure-zero-and-content-zero",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), intervals and their lengths are as in\n[[def-interval]], and a *sequence* is a function on $\\mathbb{N}$, which contains\n$0$. Let $A \\subseteq \\mathbb{R}$.\n\n- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real\n  $\\varepsilon > 0$ there are sequences $(a_k)_{k \\in \\mathbb{N}}$ and\n  $(b_k)_{k \\in \\mathbb{N}}$ of reals with $a_k \\le b_k$ for every $k$, such\n  that\n  $$A \\subseteq \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] \\qquad \\text{and} \\qquad \\sum_{k=0}^{\\infty} (b_k - a_k) \\text{ converges with sum } \\le \\varepsilon .$$\n- $A$ has **content zero** when for every real $\\varepsilon > 0$ there are\n  $n \\in \\mathbb{N}$ and reals $a_0 \\le b_0, \\dots, a_n \\le b_n$ with\n  $$A \\subseteq \\bigcup_{j \\le n} [a_j, b_j] \\qquad \\text{and} \\qquad \\sum_{j=0}^{n} (b_j - a_j) \\le \\varepsilon .$$\n\nThe number $b_k - a_k \\ge 0$ is the length of $[a_k,b_k]$ ([[def-interval]]), and\nthe sums are the series and the finite sums of [[def-series]] and\n[[def-finite-sum]].\n\n**Working form: only the partial sums have to be checked.** All the terms\n$b_k - a_k$ are $\\ge 0$, so by claim 2 of\n[[thm-nonnegative-series-bounded-partial-sums]] the series converges exactly when\nits partial sums are bounded above, and its sum is then their supremum.\nConsequently, for a fixed $\\varepsilon > 0$,\n\n$$\\sum_{k=0}^{\\infty}(b_k - a_k) \\text{ converges with sum} \\le \\varepsilon \\quad \\Longleftrightarrow \\quad \\sum_{k<n} (b_k - a_k) \\le \\varepsilon \\ \\text{ for every } n \\in \\mathbb{N},$$\n\nsince a supremum is $\\le \\varepsilon$ exactly when $\\varepsilon$ is an upper\nbound of the set it is the supremum of ([[def-complete-ordered-field]]). Every\nverification of nullity below checks the right-hand condition.\n\n**Closed intervals lose nothing.** A bounded interval with endpoints\n$a \\le b$ is contained in $[a,b]$ and has the same length ([[def-interval]]), so\na cover by intervals of any of the four bounded forms yields a cover by closed\nintervals with the same lengths. The definition is therefore stated with closed\nintervals once and for all. Covers by *open* intervals are a genuinely different\ndemand, and passing to one costs a little extra length: the enlargement\n$[a_k,b_k] \\subseteq (a_k - \\delta_k,\\ b_k + \\delta_k)$ is carried out where it is\nneeded, in [[lem-nondegenerate-interval-is-not-null]] and in\n[[thm-compact-null-is-content-zero]].\n\n**Both notions are inherited by subsets.** If $B \\subseteq A$ and $A$ is null,\nthen any cover of $A$ covers $B$, so $B$ is null; the same sentence with finite\ncovers shows a subset of a set of content zero has content zero.\n\n**A finite cover is a countable cover, so content zero implies measure zero.**\nPadding the list $[a_0,b_0], \\dots, [a_n,b_n]$ with the degenerate intervals\n$[0,0]$ for $k > n$ leaves the total length unchanged, by the splitting law for\nfinite sums ([[lem-finite-sum-laws]]). This is recorded as a lemma with its\nproof, [[lem-content-zero-implies-null]], because it is cited on its own.",
      "uses": [
        "1.1",
        "8.1",
        "10.1",
        "11.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-heine-borel-characterisation-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and\nonly if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded\n([[def-bounded-set]]).\n\nThis is the Heine-Borel theorem in the form used everywhere below. The forward\nimplication is [[lem-compact-implies-closed-and-bounded-r]] and spends no\ncompleteness, only the Archimedean property and the existence of maxima of\nfinite sets; the backward implication rests on\n[[thm-heine-borel-r]] and therefore on the completeness of $\\mathbb{R}$, and the\nremarks below record where it fails without completeness.",
      "uses": [
        "1.1",
        "8.1",
        "10.1",
        "11.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "Let $K \\subseteq \\mathbb{R}$, with open sets as in\n[[def-open-and-closed-in-r]].\n\n- An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of\n  $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$.\n- A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq\n  \\mathcal{U}$ that is still an open cover of $K$.\n- A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when\n  $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members\n  $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$;\n  repetitions in the list are allowed and harmless.\n- $K$ is **compact** when every open cover of $K$ has a finite subcover:\n  for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the\n  empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and\n  $U_0, \\dots, U_n \\in \\mathcal{U}$ with\n  $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$\n- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with\n  $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence\n  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every\n  such sequence has a subsequential limit ([[def-subsequential-limit]]) that\n  lies in $K$.\n\n**Compactness is a property of $K$ alone.** The covering families range over open\nsubsets of $\\mathbb{R}$, not over sets open in some other ambient space, so the\nnotion defined here is compactness of $K$ as a subset of $\\mathbb{R}$. Nothing\nbelow relativises it to a smaller ambient field; where an ordered field other\nthan $\\mathbb{R}$ is meant, as in\n[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set\nup again there for that field.\n\n**$\\varnothing$ is compact and sequentially compact.** The empty subfamily covers\nit, and there is no sequence with all terms in $\\varnothing$, so both conditions\nhold vacuously.",
      "uses": [
        "1.1",
        "8.1",
        "10.1",
        "11.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-nowhere-dense-meager",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with interior $A^{\\circ}$ and closure\n$\\overline{A}$ as in [[def-interior-closure-boundary-r]].\n\n- $A$ is **nowhere dense** when the interior of its closure is empty:\n  $$\\big(\\overline{A}\\big)^{\\circ} \\;=\\; \\varnothing .$$\n- $A$ is **meager**, or **of the first category**, when there is a sequence\n  $(A_n)_{n \\in \\mathbb{N}}$ of nowhere dense subsets of $\\mathbb{R}$ with\n  $$A \\;=\\; \\bigcup_{n \\in \\mathbb{N}} A_n .$$\n- $A$ is **of the second category** when it is not meager.\n- $A$ is **residual** (also *comeager*) when $\\mathbb{R} \\setminus A$ is meager.\n\n**Why a sequence, and why that is the same as \"an at most countable union\".**\nSequences here are indexed by $\\mathbb{N}$, which contains $0$. A finite family\n$A_0, \\dots, A_m$ of nowhere dense sets is turned into a sequence by setting\n$A_n := \\varnothing$ for $n > m$, and $\\varnothing$ is nowhere dense because\n$\\overline{\\varnothing} = \\varnothing$ has empty interior; the empty family is\nhandled the same way and gives $A = \\varnothing$. So \"a union of an at most\ncountable family of nowhere dense sets\" ([[def-countable]]) and the displayed\ncondition define the same class, and the sequence form is used below because it\ncarries an explicit index and needs no case split.\n\n**Nowhere dense means exactly that the complement of the closure is dense.**\nFor $A \\subseteq \\mathbb{R}$,\n\n$$\\big(\\overline{A}\\big)^{\\circ} = \\varnothing \\quad \\Longleftrightarrow \\quad \\mathbb{R} \\setminus \\overline{A} \\text{ is dense in } \\mathbb{R} .$$\n\nIndeed, by the pointwise description of the interior\n([[def-interior-closure-boundary-r]]), $(\\overline{A})^{\\circ} = \\varnothing$\nsays that no $x \\in \\mathbb{R}$ admits a real $\\varepsilon > 0$ with\n$N_\\varepsilon(x) \\subseteq \\overline{A}$ ([[def-neighbourhood-r]]), that is,\nthat every $N_\\varepsilon(x)$ meets $\\mathbb{R} \\setminus \\overline{A}$. By\nclaim 1 of [[thm-closure-characterisations-r]] that says precisely that every\n$x \\in \\mathbb{R}$ is adherent to $\\mathbb{R} \\setminus \\overline{A}$, that is,\n$\\overline{\\mathbb{R} \\setminus \\overline{A}} = \\mathbb{R}$, which is density\n([[def-limit-point-r]]).\n\n**A closed set is nowhere dense exactly when its interior is empty**, since a\nclosed set equals its own closure (claim 4 of [[thm-closure-characterisations-r]],\n[[def-open-and-closed-in-r]]). This is the form in which nowhere density is\nverified nearly every time below. (The phrase *almost everywhere* is avoided\nthroughout this pair: it is a measure-theoretic term, and the only measure notion\ndefined here is measure zero.)\n\n**Both classes are closed downwards.** If $B \\subseteq A$ then\n$\\overline{B} \\subseteq \\overline{A}$ and hence\n$(\\overline{B})^{\\circ} \\subseteq (\\overline{A})^{\\circ}$\n([[def-interior-closure-boundary-r]]), so a subset of a nowhere dense set is\nnowhere dense. If $B \\subseteq A = \\bigcup_n A_n$ with each $A_n$ nowhere dense,\nthen $B = \\bigcup_n (A_n \\cap B)$ and each $A_n \\cap B$ is nowhere dense by the\nprevious sentence, so a subset of a meager set is meager.\n\n**A union of two meager sets is meager.** Let $M = \\bigcup_n A_n$ and\n$M' = \\bigcup_n B_n$ with all $A_n$ and all $B_n$ nowhere dense; fixing one\nwitnessing sequence for $M$ and one for $M'$ is two instantiations of an\nexistential statement, not a choice principle. Let\n$J : \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{N}$ be a bijection\n([[thm-n-cross-n-countable]]) and define a sequence $(C_j)_{j \\in \\mathbb{N}}$ by\n\n$$C_{J(m,n)} \\;:=\\; \\begin{cases} A_n & m = 0, \\\\ B_n & m \\ne 0. \\end{cases}$$\n\nThis is a total definition because $J$ is a bijection, every $C_j$ is nowhere\ndense, and $\\bigcup_j C_j = M \\cup M'$, since $A_n = C_{J(0,n)}$ and\n$B_n = C_{J(1,n)}$ and every $C_j$ is one of the $A_n$ or one of the $B_n$.",
      "uses": [
        "3.1",
        "10.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with open and closed sets as in\n[[def-open-and-closed-in-r]].\n\n- The **interior** of $A$ is the union of all open subsets of $A$:\n  $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$\n- The **closure** of $A$ is the intersection of all closed supersets of $A$:\n  $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$.\n- The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.\n\n**Both operators are well defined and deliver what their names claim.** The\nfamily whose union defines $A^{\\circ}$ always contains $\\varnothing$, and the\nfamily whose intersection defines $\\overline{A}$ always contains $\\mathbb{R}$,\nso the second family is nonempty and both expressions denote subsets of\n$\\mathbb{R}$ without appeal to any convention about empty unions or\nintersections. Moreover:\n\n- $A^{\\circ}$ is **open**, being a union of open sets\n  ([[thm-open-set-algebra-r]], claim 1), and $A^{\\circ} \\subseteq A$, since\n  every set in the family is a subset of $A$. It is therefore the **largest**\n  open subset of $A$: any open $U \\subseteq A$ is a member of the family and so\n  $U \\subseteq A^{\\circ}$.\n- $\\overline{A}$ is **closed**, being an intersection of a nonempty family of\n  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \\subseteq\n  \\overline{A}$, since every set in the family contains $A$. It is therefore the\n  **smallest** closed superset of $A$: any closed $F \\supseteq A$ is a member of\n  the family and so $\\overline{A} \\subseteq F$.\n\n**Pointwise description of the interior.** For $x \\in \\mathbb{R}$,\n\n$$x \\in A^{\\circ} \\iff \\text{there is } \\varepsilon > 0 \\text{ with } N_\\varepsilon(x) \\subseteq A .$$\n\nIf $x \\in A^{\\circ}$ then, $A^{\\circ}$ being open and containing $x$, there is\n$\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq A^{\\circ} \\subseteq A$.\nConversely if $N_\\varepsilon(x) \\subseteq A$ then $N_\\varepsilon(x)$ is an open\nsubset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence\n$x \\in N_\\varepsilon(x) \\subseteq A^{\\circ}$ ([[def-neighbourhood-r]]).\n\nThe corresponding pointwise description of the closure is not a definitional\nmatter and is proved separately, as [[thm-closure-characterisations-r]].",
      "uses": [
        "3.1",
        "10.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "3.1",
        "10.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-distance-to-set-is-lipschitz",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ be\nnonempty and let $x, y \\in X$. Then\n\n$$|d(x,A) - d(y,A)| \\le d(x,y),$$\n\nwith $d(\\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).\nThus the real-valued function $u \\mapsto d(u,A)$ changes by at most $d(u,v)$\nbetween $u$ and $v$: it is **$1$-Lipschitz**.",
      "uses": [
        "1.1",
        "2.1",
        "8.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-bounded-diameter",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let\n$A, B \\subseteq X$.\n\n**Bounded subset.** $A$ is **bounded** if $A = \\emptyset$ or there are $x_0 \\in X$\nand a real $r > 0$ with $A \\subseteq B(x_0, r)$ ([[def-metric-ball]]). The space\n$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.\n\n**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and\nbounded, and put\n\n$$D(A) := \\{\\, d(a,b) : a, b \\in A \\,\\} \\subseteq \\mathbb{R}.$$\n\nThen $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and\n$r$ with $A \\subseteq B(x_0,r)$, every $a, b \\in A$ satisfy\n$d(a,b) \\le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry\n([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],\n[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$\n([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\\mathbb{R}$ by\nthe least-upper-bound property ([[def-complete-ordered-field]]), and that bound\nis unique ([[lem-sup-unique]]). Define\n\n$$\\operatorname{diam}(A) := \\sup D(A).$$\n\n**Distance from a point to a set, for nonempty $A$ only.** Let $x \\in X$ and let\n$A$ be nonempty, and put $E(x,A) := \\{\\, d(x,a) : a \\in A \\,\\}$. Then $E(x,A)$ is\nnonempty and bounded below by $0$, since a metric is nonnegative\n([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower\nbound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].\nDefine\n\n$$d(x,A) := \\inf E(x,A).$$\n\n**Distance between two sets, for nonempty $A$ and $B$ only.** Put\n$E(A,B) := \\{\\, d(a,b) : a \\in A,\\ b \\in B \\,\\}$, again nonempty and bounded\nbelow by $0$, and define\n\n$$d(A,B) := \\inf E(A,B).$$\n\n**Every one of the three scope restrictions is load bearing.** In this library\n$\\sup$ and $\\inf$ denote real numbers and are written only after existence has\nbeen established; the extended real line is introduced on a later page and is\nnot used for the suprema and infima taken here, and no convention\n$\\sup \\emptyset = -\\infty$ is in force in this development\n([[rem-sup-conventions]]). Accordingly:\n\n- $\\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**\n  bounded. It is not defined for $A = \\emptyset$, and it is not defined, not even\n  as an infinite value, for an unbounded $A$.\n- $d(x,A)$ is defined exactly when $A \\ne \\emptyset$, and $d(A,B)$ exactly when\n  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because\n  $0$ is always a lower bound.",
      "uses": [
        "1.1",
        "2.1",
        "8.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "Define $d_{\\mathbb{R}} : \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}$ by\n$d_{\\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:\n\n1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is\n   called the **usual metric** of $\\mathbb{R}$.\n2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval\n   ([[def-interval]], [[def-metric-ball]])\n   $$B(x,r) = (x-r,\\ x+r),$$\n   and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$.\n3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of\n   $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$\n   there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the\n   **usual topology** of $\\mathbb{R}$.\n4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space\n   ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so\n   $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "1.1",
        "2.1",
        "8.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-real-and-metric-notions-agree",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$ carry the subspace metric of the usual metric\n$d_{\\mathbb{R}}(x,y) = |x-y|$ of $\\mathbb{R}$, that is\n$d_A(x,y) = |x - y|$ for $x, y \\in A$\n([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),\nand let $f : A \\to \\mathbb{R}$, regarded also as a map of metric spaces\n$(A, d_A) \\to (\\mathbb{R}, d_{\\mathbb{R}})$. Then the $\\mathbb{R}$-native\nnotions of this page and the metric-space notions of the earlier pages are the\n**same notions**, in the following five senses.\n\n1. **Continuity.** For every $c \\in A$: $f$ is continuous at $c$ in the sense of\n   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense\n   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and\n   only if it is continuous as a map of metric spaces.\n2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of\n   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as\n   a map of metric spaces ([[def-metric-uniform-continuity]]).\n3. **Lipschitz.** For a real $L \\ge 0$: $f$ is Lipschitz with constant $L$ as a\n   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if\n   $$|f(x) - f(x')| \\le L\\,|x - x'| \\qquad \\text{for all } x, x' \\in A .$$\n   This displayed condition is what \"$f$ is Lipschitz with constant $L$\" means\n   for a real function on $A$ in this library; no second definition is made.\n4. **Hölder.** For a rational $\\alpha$ with $0 < \\alpha \\le 1$ and a real\n   $C \\ge 0$: $f$ is $\\alpha$-Hölder with constant $C$ as a map of metric spaces\n   if and only if\n   $$|f(x) - f(x')| \\le C\\,|x - x'|^{\\alpha} \\qquad \\text{for all } x, x' \\in A ,$$\n   the power being the rational power of a nonnegative base\n   ([[def-rational-power]]).\n5. **Compactness, in both senses used in this library.** For $K \\subseteq\n   \\mathbb{R}$ with the subspace metric $d_K$:\n   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every\n     family of open subsets of $\\mathbb{R}$ covering $K$ has a finite subfamily\n     covering $K$ — if and only if the metric space $(K, d_K)$ is compact\n     ([[def-metric-compactness]]);\n   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and\n     only if $(K, d_K)$ is sequentially compact as a metric space\n     ([[def-metric-compactness-variants]]).\n\nTwo consequences are recorded, since they are the reason the dictionary is\nstated as a lemma rather than as a remark.\n\n6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and\n   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \\to \\mathbb{R}$ is\n   uniformly continuous on $A$; an $\\alpha$-Hölder $f$ with rational\n   $0 < \\alpha \\le 1$ is uniformly continuous on $A$; a uniformly continuous $f$\n   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is\n   $\\alpha$-Hölder for every rational $\\alpha$ with $0 < \\alpha \\le 1$. No\n   strictness is claimed here, and none is claimed there.\n7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy\n   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a\n   sequence of reals ([[def-real-limit]]); so by clause 2 and\n   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous\n   $f : A \\to \\mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of\n   $\\mathbb{R}$.\n\n**Why this lemma exists, and why it is a lemma.** Three results of this page —\n[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and\n[[thm-heine-cantor-r]] — are stated a second time here, having already been\nproved metric-generally as\n[[thm-continuous-image-of-a-compact-space-is-compact]],\n[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is\ndeliberate: the $\\mathbb{R}$-native proofs run through\n[[thm-heine-borel-characterisation-r]] and\n[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the\nmetric proofs run through the cover machinery of metric spaces. **This item is\nthe single place in the library where that duplication is acknowledged**, and\nclauses 1 and 5 are what make the two families of statements literally the same\nstatements. It is a lemma, and not a remark, precisely so that later pages can\ncite it and move between the two vocabularies.\n\n**Clause 5 closes a second seam.** The phrase *compact subset of $\\mathbb{R}$*\nis defined twice in this library — metrically, as compactness of the metric\nsubspace ([[def-metric-compactness]]), and $\\mathbb{R}$-natively, by covers by\nopen subsets of $\\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no\nitem asserted that the two agree.",
      "uses": [
        "1.1",
        "2.1",
        "8.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a\n**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:\n\n- $\\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\\ell \\le s$ for\n  every $s \\in S$;\n- $\\ell' \\le \\ell$ for every lower bound $\\ell'$ of $S$.\n\nWritten out in one line:\n\n$$\\ell \\text{ is an infimum of } S \\iff \\big[(\\forall s \\in S)\\, \\ell \\le s\\big] \\text{ and } \\big[(\\forall \\ell' \\in \\mathbb{R})\\, \\big((\\forall s \\in S)\\, \\ell' \\le s\\big) \\Rightarrow \\ell' \\le \\ell\\big].$$\n\nAn infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write\n$\\inf S$ for it.",
      "uses": [
        "1.1",
        "2.1",
        "8.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and\nabsolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and\nneighbourhoods are those of [[def-neighbourhood-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **continuous at $c$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with\n\n$$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$\n\n$f$ is **continuous on $A$** when it is continuous at every point of $A$.\n\n**The point $c$ is required to lie in $A$, and the condition is unpunctured.**\nBoth differ from [[def-function-limit]], and deliberately. There the quantifier\nruns over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed,\nand at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is\nautomatic. So allowing $x = c$ costs nothing, and it is what lets the definition\nbe stated at every point of $A$, including the points where no limit exists.\n\n**Three clauses, and all three are part of the definition.**\n\n1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.\n\n2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$\n   ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real\n   $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take\n   $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$\n   itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.\n\n3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and\n   nothing more. It is not a condition relating $f$ to points outside $A$.\n\nEvery point of $A$ is either a limit point of $A$ or an isolated point of $A$,\nand never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe\ncontinuity at every point of $A$.\n\n**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.\n\n**Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$\n([[def-open-and-closed-in-r]]), then every $c \\in A$ has some\n$N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty\n([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and\nclause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate\ninterval ([[def-interval]]). Isolated points are what force clause 2 to exist at\nall, and they occur as soon as $A$ is allowed to be an arbitrary subset of\n$\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "uses": [
        "1.1",
        "2.1",
        "8.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-continuous-implies-integrable",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be continuous on $[a,b]$\n([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann\nintegrable on $[a,b]$ ([[def-darboux-integral]]).\n\n**The proof gives more than integrability: it gives a partition that works.** For\nevery real $\\varepsilon > 0$ the uniform partition into $N$ parts already\nsatisfies $U(f,P) - L(f,P) < \\varepsilon$, as soon as $N$ is large enough that\n$(b-a)/\\iota(N)$ is below the $\\delta$ that uniform continuity supplies for\n$\\varepsilon/\\bigl(2(b-a)\\bigr)$. Uniform continuity is exactly what makes one\n$\\delta$ serve all $N$ subintervals at once, and it is the only place where the\ncompactness of $[a,b]$ is used.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-darboux-integral",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Write $\\mathcal{P}$ for the set of all partitions of\n$[a,b]$ ([[def-partition-and-refinement]]) and put\n\n$$\\mathcal{L} \\;:=\\; \\{\\, L(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}, \\qquad \\mathcal{U} \\;:=\\; \\{\\, U(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}$$\n\nfor the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).\n\n### Both extrema exist\n\n**$\\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$\nfor $k \\ge 1$ is a partition of $[a,b]$, since $a < b$. So $\\mathcal{L}$ and\n$\\mathcal{U}$ are nonempty.\n\n**$\\mathcal{L}$ is bounded above and $\\mathcal{U}$ is bounded below.** Fix any\n$Q \\in \\mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],\n$L(f,P) \\le U(f,Q)$ for every $P \\in \\mathcal{P}$, so $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$; and $L(f,Q) \\le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower\nbound of $\\mathcal{U}$.\n\nHence a nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).\nThe **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real\nnumbers\n\n$$\\underline{\\int_a^b} f \\;:=\\; \\sup \\mathcal{L} \\;=\\; \\sup_{P} L(f,P), \\qquad \\overline{\\int_a^b} f \\;:=\\; \\inf \\mathcal{U} \\;=\\; \\inf_{P} U(f,P) .$$\n\n### The lower integral never exceeds the upper one\n\n$$\\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f .$$\n\nIndeed, for each fixed $Q \\in \\mathcal{P}$ the number $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$, so the least upper bound satisfies\n$\\underline{\\int_a^b} f \\le U(f,Q)$. As $Q$ was arbitrary, $\\underline{\\int_a^b}f$\nis a lower bound of $\\mathcal{U}$, and the greatest lower bound satisfies\n$\\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f$ ([[def-infimum]]).\n\nMoreover, for **every** partition $P$,\n\n$$L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) ,$$\n\nthe outer inequalities because a member of a set is at most its supremum and at\nleast its infimum.\n\n### Integrability\n\n$f$ is **Darboux integrable on $[a,b]$**, and on this page simply\n**integrable**, when\n\n$$\\underline{\\int_a^b} f \\;=\\; \\overline{\\int_a^b} f ,$$\n\nand then the common value is written\n\n$$\\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f(x)\\,\\mathrm{d}x ,$$\n\nthe **integral of $f$ over $[a,b]$**. It is a single well-determined real\nnumber, being the common value of two numbers each of which is unique\n([[lem-sup-unique]]). Without the displayed equality the symbol $\\int_a^b f$ is\nnot defined and is never written.\n\n**The inequality above is the whole difficulty.** By the previous paragraph\nintegrability is *never* a question of one integral exceeding the other, only of\nthe gap $\\overline{\\int_a^b} f - \\underline{\\int_a^b} f \\ge 0$ being $0$; and by\n[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be\nfound making $U(f,P) - L(f,P)$ small. Whether that is possible is settled\ncompletely, in terms of the discontinuities of $f$, by\n[[thm-lebesgue-criterion]].\n\n**\"Riemann integrable\" means the same thing here.** The definition above is\nDarboux's. Riemann's own definition, in terms of tagged partitions of small\nmesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same\nclass of functions with the same integral by [[thm-darboux-equals-riemann]].\nUntil that theorem is proved the two phrases are kept apart; after it they are\nused interchangeably, as they are throughout the literature.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-ftc-first-part",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]), let $F$ be its integral function\n([[def-the-integral-function]]), and let $c \\in [a,b]$ be a point at which $f$ is\ncontinuous ([[def-continuity-real]]). Then $F$ is differentiable at $c$ as a\nfunction on $[a,b]$ ([[def-derivative]]) and\n\n$$F'(c) \\;=\\; f(c) .$$\n\nAt $c = a$ and $c = b$ this is the one-sided statement, which is what\n[[def-derivative]] means at those points: every point of a nondegenerate interval\nis a limit point of it, so $F'(c)$ is a meaningful symbol at every $c \\in [a,b]$,\nand the difference quotient is taken over $[a,b] \\setminus \\{c\\}$.\n\n**Consequently, if $f$ is continuous on the whole of $[a,b]$, then $F$ is a\nprimitive of $f$ there**: $F' = f$ at every point of $[a,b]$.\n\n**Continuity at $c$ is a hypothesis and it cannot be dropped.** For an integrable\n$f$ that is discontinuous at $c$, $F'(c)$ may fail to exist, and it may exist and\ndiffer from $f(c)$; both are exhibited on the companion page, by\nan integrable function with no primitive and by a false\nstatement about the integral function.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "8.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-the-integral-function",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]). The **integral function of $f$ with base point $a$**\nis\n\n$$F : [a,b] \\to \\mathbb{R}, \\qquad F(x) \\;:=\\; \\int_a^x f .$$\n\n**It is a genuine function, and that has to be checked.** For $x \\in (a,b]$ the\nrestriction of $f$ to $[a,x]$ is integrable, by\n[[lem-integrability-on-a-subinterval]] applied with $c := a$ and $d := x$, so\n$\\int_a^x f$ names a single real number ([[def-darboux-integral]]). For $x = a$\nthe symbol $\\int_a^a f$ is $0$ by [[def-oriented-integral]]. So $F(x)$ is defined\nat every point of $[a,b]$ and\n\n$$F(a) \\;=\\; 0 .$$\n\nMore generally, for any base point $c \\in [a,b]$ the function\n$x \\mapsto \\int_c^x f$ is defined on the whole of $[a,b]$, the integral being the\noriented one of [[def-oriented-integral]] when $x < c$; the case $c = a$ is\nwritten $F$ above and is the one used unless another base point is named.\n\n### The two identities used throughout\n\n**Increments are integrals.** For all $x, y \\in [a,b]$, in either order,\n\n$$F(y) - F(x) \\;=\\; \\int_x^y f .$$\n\nThis is claim 3 of [[thm-additivity-over-subintervals]] applied to the three\npoints $a$, $x$, $y$: it gives $\\int_a^x f + \\int_x^y f = \\int_a^y f$, that is\n$F(x) + \\int_x^y f = F(y)$. No ordering of $x$ and $y$ is assumed, and the\ndegenerate cases $x = y$, $x = a$ and $y = a$ are included, since claim 3 is\nstated for arbitrary points.\n\n**Changing the base point changes $F$ by a constant.** If $c \\in [a,b]$ and\n$F_c(x) := \\int_c^x f$, then for every $x \\in [a,b]$\n\n$$F_c(x) \\;=\\; F(x) - F(c) ,$$\n\nagain by claim 3 of [[thm-additivity-over-subintervals]] at the points $a$, $c$,\n$x$. So the family of integral functions of $f$ is one function up to an\nadditive constant.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "8.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-additivity-over-subintervals",
      "source_section": "Statement",
      "quote": "Let $a < c < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Then:\n\n1. $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its\n   restrictions to $[a,c]$ and to $[c,b]$ are integrable;\n2. and in that case\n   $$\\int_a^b f \\;=\\; \\int_a^c f \\;+\\; \\int_c^b f .$$\n3. **Oriented form.** Let $\\alpha < \\beta$ be reals, let $f : [\\alpha,\\beta] \\to\n   \\mathbb{R}$ be integrable, and let $u, v, w \\in [\\alpha,\\beta]$ be arbitrary.\n   Then, with the convention of [[def-oriented-integral]],\n   $$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f .$$\n\nClaim 3 is where [[def-oriented-integral]] earns its place: it holds for every\narrangement of the three points, including the degenerate ones, and it is the\nform used everywhere below.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "8.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-oriented-integral",
      "source_section": "Definition",
      "quote": "**Why this item is first.** The published definition of the integral does not\ncover this page. [[def-darboux-integral]] is stated for reals $a < b$, because\nthe partitions it quantifies over are those of [[def-partition-and-refinement]],\nwhose standing hypothesis is $a < b$: with $a = b$ the chain\n$a = t_0 < \\dots < t_n = b$ is unsatisfiable. So $\\int_a^b f$ is an undefined\nsymbol whenever $a \\ge b$, and every additivity statement below would be\nill-formed as it is usually written. This item extends the notation, and nothing\nelse: the object it names is still the Darboux integral of\n[[def-darboux-integral]].\n\nLet $u, v \\in \\mathbb{R}$ and write\n\n$$[u \\wedge v,\\ u \\vee v] \\;:=\\; \\text{the closed interval with endpoints } u \\text{ and } v$$\n\n([[def-interval]]). Let $f$ be a real-valued function whose domain contains that\ninterval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,\nor $u \\ne v$ and the restriction of $f$ to $[u \\wedge v,\\ u \\vee v]$ is bounded\n([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],\n[[def-darboux-sums]]). For such $f$ define\n\n$$\\int_u^v f \\;:=\\; \\begin{cases} \\text{the Darboux integral of } f \\text{ over } [u,v] & \\text{if } u < v, \\\\[2pt] 0 & \\text{if } u = v, \\\\[2pt] -\\displaystyle\\int_v^u f & \\text{if } u > v. \\end{cases}$$\n\n**There is nothing to check for consistency.** The three clauses are indexed by\nthe three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually\nexclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In\nparticular the first clause is untouched, so on $u < v$ this is the published\nintegral verbatim and every published theorem about it applies unchanged.\n\n**The middle clause is a stipulation, not a computation.** It is *not* claimed\nthat $0$ is a value forced by the $u < v$ definition in any limiting sense; that\ndefinition simply says nothing at $u = v$, and $\\int_u^u f := 0$ is what is\nwritten there. It is also unconditional: no hypothesis on $f$ beyond being\ndefined at $u$ is asked for, since the case $u = v$ never refers to a partition.\n\n### The two consequences used throughout the page\n\n**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable\nbetween them,\n\n$$\\int_u^v f \\;=\\; -\\int_v^u f .$$\n\nIndeed if $u < v$ then $v > u$ and the third clause reads\n$\\int_v^u f = -\\int_u^v f$, which rearranges to the display; if $u = v$ both\nsides are $0$; and if $u > v$ the third clause is the display itself.\n\n**Absolute values agree.** Consequently\n$\\bigl|\\int_u^v f\\bigr| = \\bigl|\\int_v^u f\\bigr|$ for every such pair.\n\n**An obligation recorded here and discharged elsewhere.** With this convention\nthe additivity identity\n\n$$\\int_u^v f \\;+\\; \\int_v^w f \\;=\\; \\int_u^w f$$\n\nholds for **every** arrangement of $u, v, w$ in an interval on which $f$ is\nintegrable, not only for $u < v < w$. That is a theorem and not part of this\ndefinition; it is proved as the last clause of\n[[thm-additivity-over-subintervals]], and nothing on this page uses it before it\nis proved there.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "8.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-nonnegative-continuous-with-zero-integral-vanishes",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be continuous on $[a,b]$\n([[def-continuity-real]]) with $f(x) \\ge 0$ for every $x \\in [a,b]$ and\n\n$$\\int_a^b f \\;=\\; 0 .$$\n\nThen $f(x) = 0$ for every $x \\in [a,b]$.\n\n**This is the exact repair of a published false statement.** Without continuity\nthe conclusion fails: [[fs-nonnegative-integrable-with-zero-integral-vanishes]],\non the companion page of *The Riemann Integral*, exhibits a nonnegative\nintegrable function with integral $0$ that is positive at every rational point.\nThe remark there says that the continuous case is true and that its proof was\nnot available at that point in the reading order, because additivity over\nsubintervals had not been proved. It is proved now\n([[thm-additivity-over-subintervals]]), and this item is that proof.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-monotonicity-of-the-integral",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f, g : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]). Then:\n\n1. **Nonnegativity.** If $f(x) \\ge 0$ for every $x \\in [a,b]$ then\n   $\\int_a^b f \\ge 0$.\n2. **Monotonicity.** If $f(x) \\le g(x)$ for every $x \\in [a,b]$ then\n   $$\\int_a^b f \\;\\le\\; \\int_a^b g .$$\n3. **Two-sided bound.** If $m \\le f(x) \\le M$ for every $x \\in [a,b]$, with\n   $m, M$ real, then\n   $$m\\,(b-a) \\;\\le\\; \\int_a^b f \\;\\le\\; M\\,(b-a) .$$\n\n**Equality in claim 1 does not force $f$ to vanish.** A nonnegative integrable\nfunction with integral $0$ may be positive at infinitely many points; that is\n[[fs-nonnegative-integrable-with-zero-integral-vanishes]] on the previous page's\ncompanion. Under the additional hypothesis of continuity the conclusion does\nhold, and that is [[thm-nonnegative-continuous-with-zero-integral-vanishes]]\nbelow.\n\n**Claim 2 is stated for $a < b$ and is not orientation-invariant.** With the\nconvention of [[def-oriented-integral]], $f \\le g$ gives\n$\\int_u^v f \\le \\int_u^v g$ when $u \\le v$ and the reverse inequality when\n$u \\ge v$, since both sides change sign together.",
      "uses": [
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-integral-elementary-bounds",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ satisfy\n\n$$m \\;\\le\\; f(x) \\;\\le\\; M \\qquad \\text{for every } x \\in [a,b],$$\n\nwith $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums\nand integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and\nfor **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]])\n\n$$m(b-a) \\;\\le\\; L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) \\;\\le\\; M(b-a) .$$\n\nIn particular, taking $f$ to be the constant function with value $c$:\n\n$$\\int_a^b c \\;=\\; c\\,(b-a) ,$$\n\nthe constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for\nevery partition $P$.",
      "uses": [
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-continuous-image-of-a-compact-set-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ be continuous on $A$\n([[def-continuity-real]]) and let $K \\subseteq A$ be compact in the sense of\n[[def-open-cover-r]], that is, every family of open subsets of $\\mathbb{R}$\nwhose union contains $K$ has a finite subfamily whose union contains $K$. Then\nthe image\n\n$$f[K] \\;:=\\; \\{\\, f(x) : x \\in K \\,\\}$$\n\nis a compact subset of $\\mathbb{R}$.\n\n**This theorem is stated twice in this library, on purpose.** Its metric-space\ntwin is [[thm-continuous-image-of-a-compact-space-is-compact]], proved from the\ncover machinery of metric spaces; the proof below is $\\mathbb{R}$-native and\nuses only open subsets of $\\mathbb{R}$ and the definition of continuity of this\npage. The duplication is deliberate and is acknowledged in exactly one place,\n[[lem-real-and-metric-notions-agree]] later on this page, which proves that the\ntwo notions of \"compact subset of $\\mathbb{R}$\" and the two notions of\n\"continuous\" coincide, so that the two theorems really are the same statement in\ntwo vocabularies.\n\n**No choice principle is used.** The covering family built below is cut out by a\nproperty rather than selected point by point, and the only selection made is\nfrom a *finite* list, which needs no axiom.",
      "uses": [
        "8.1"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-heine-borel-characterisation-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and\nonly if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded\n([[def-bounded-set]]).\n\nThis is the Heine-Borel theorem in the form used everywhere below. The forward\nimplication is [[lem-compact-implies-closed-and-bounded-r]] and spends no\ncompleteness, only the Archimedean property and the existence of maxima of\nfinite sets; the backward implication rests on\n[[thm-heine-borel-r]] and therefore on the completeness of $\\mathbb{R}$, and the\nremarks below record where it fails without completeness.",
      "uses": [
        "8.1"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-lebesgue-criterion",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]) and let\n\n$$D \\;:=\\; \\{\\, x \\in [a,b] \\ : \\ f \\text{ is discontinuous at } x \\,\\}$$\n\n([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then\n\n$$f \\text{ is Riemann integrable on } [a,b] \\quad \\Longleftrightarrow \\quad D \\text{ has measure zero}$$\n\n([[def-darboux-integral]], [[def-measure-zero-and-content-zero]]).\n\n**The choice cost, named.** The implication from integrability to $D$ being null\nuses the Axiom of Countable Choice ([[def-countable-choice]]) exactly once,\nthrough [[thm-countable-union-of-null-is-null]] at step 7.1: $D$ is exhibited as\nthe union of a sequence of null sets. The converse implication, from $D$ null to\nintegrability, is a theorem of ZF: it uses no choice principle at all.\n\n**\"Measure zero\" here is the cover condition of\n[[def-measure-zero-and-content-zero]]**, namely that for every $\\varepsilon > 0$\nthere is a sequence of intervals covering $D$ of total length at most\n$\\varepsilon$. No outer measure, no measurable set and no Lebesgue integral is\nused or needed; the criterion is a statement about interval covers throughout.",
      "uses": [
        "7.1",
        "8.1",
        "11.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-content-zero-implies-null",
      "source_section": "Statement",
      "quote": "If $A \\subseteq \\mathbb{R}$ has content zero\n([[def-measure-zero-and-content-zero]]) then $A$ has measure zero.\n\nThe converse is false in general, and true for compact sets\n([[thm-compact-null-is-content-zero]]); the witness for its failure is named in\nthe remarks below.",
      "uses": [
        "7.1",
        "8.1",
        "11.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-measure-zero-and-content-zero",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), intervals and their lengths are as in\n[[def-interval]], and a *sequence* is a function on $\\mathbb{N}$, which contains\n$0$. Let $A \\subseteq \\mathbb{R}$.\n\n- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real\n  $\\varepsilon > 0$ there are sequences $(a_k)_{k \\in \\mathbb{N}}$ and\n  $(b_k)_{k \\in \\mathbb{N}}$ of reals with $a_k \\le b_k$ for every $k$, such\n  that\n  $$A \\subseteq \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] \\qquad \\text{and} \\qquad \\sum_{k=0}^{\\infty} (b_k - a_k) \\text{ converges with sum } \\le \\varepsilon .$$\n- $A$ has **content zero** when for every real $\\varepsilon > 0$ there are\n  $n \\in \\mathbb{N}$ and reals $a_0 \\le b_0, \\dots, a_n \\le b_n$ with\n  $$A \\subseteq \\bigcup_{j \\le n} [a_j, b_j] \\qquad \\text{and} \\qquad \\sum_{j=0}^{n} (b_j - a_j) \\le \\varepsilon .$$\n\nThe number $b_k - a_k \\ge 0$ is the length of $[a_k,b_k]$ ([[def-interval]]), and\nthe sums are the series and the finite sums of [[def-series]] and\n[[def-finite-sum]].\n\n**Working form: only the partial sums have to be checked.** All the terms\n$b_k - a_k$ are $\\ge 0$, so by claim 2 of\n[[thm-nonnegative-series-bounded-partial-sums]] the series converges exactly when\nits partial sums are bounded above, and its sum is then their supremum.\nConsequently, for a fixed $\\varepsilon > 0$,\n\n$$\\sum_{k=0}^{\\infty}(b_k - a_k) \\text{ converges with sum} \\le \\varepsilon \\quad \\Longleftrightarrow \\quad \\sum_{k<n} (b_k - a_k) \\le \\varepsilon \\ \\text{ for every } n \\in \\mathbb{N},$$\n\nsince a supremum is $\\le \\varepsilon$ exactly when $\\varepsilon$ is an upper\nbound of the set it is the supremum of ([[def-complete-ordered-field]]). Every\nverification of nullity below checks the right-hand condition.\n\n**Closed intervals lose nothing.** A bounded interval with endpoints\n$a \\le b$ is contained in $[a,b]$ and has the same length ([[def-interval]]), so\na cover by intervals of any of the four bounded forms yields a cover by closed\nintervals with the same lengths. The definition is therefore stated with closed\nintervals once and for all. Covers by *open* intervals are a genuinely different\ndemand, and passing to one costs a little extra length: the enlargement\n$[a_k,b_k] \\subseteq (a_k - \\delta_k,\\ b_k + \\delta_k)$ is carried out where it is\nneeded, in [[lem-nondegenerate-interval-is-not-null]] and in\n[[thm-compact-null-is-content-zero]].\n\n**Both notions are inherited by subsets.** If $B \\subseteq A$ and $A$ is null,\nthen any cover of $A$ covers $B$, so $B$ is null; the same sentence with finite\ncovers shows a subset of a set of content zero has content zero.\n\n**A finite cover is a countable cover, so content zero implies measure zero.**\nPadding the list $[a_0,b_0], \\dots, [a_n,b_n]$ with the degenerate intervals\n$[0,0]$ for $k > n$ leaves the total length unchanged, by the splitting law for\nfinite sums ([[lem-finite-sum-laws]]). This is recorded as a lemma with its\nproof, [[lem-content-zero-implies-null]], because it is cited on its own.",
      "uses": [
        "7.1",
        "8.1",
        "11.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "7.1",
        "8.1",
        "11.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "4.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L10",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "4.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "uses": [
        "4.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L10",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "4.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L10",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "4.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L10",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "4.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.1",
        "3.2",
        "4.1",
        "5.1",
        "10.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "3.2",
        "4.1",
        "5.1",
        "10.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a\n**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:\n\n- $\\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\\ell \\le s$ for\n  every $s \\in S$;\n- $\\ell' \\le \\ell$ for every lower bound $\\ell'$ of $S$.\n\nWritten out in one line:\n\n$$\\ell \\text{ is an infimum of } S \\iff \\big[(\\forall s \\in S)\\, \\ell \\le s\\big] \\text{ and } \\big[(\\forall \\ell' \\in \\mathbb{R})\\, \\big((\\forall s \\in S)\\, \\ell' \\le s\\big) \\Rightarrow \\ell' \\le \\ell\\big].$$\n\nAn infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write\n$\\inf S$ for it.",
      "uses": [
        "1.1",
        "3.2",
        "4.1",
        "5.1",
        "10.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.1",
        "3.2",
        "4.1",
        "5.1",
        "10.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "Let $A$ and $B$ be sets and let $f : A \\to B$ be a function ([[def-function]]).\n\n- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all\n  $x, y \\in A$.\n- $f$ is **surjective** (onto) if for every $b \\in B$ there is some $x \\in A$\n  with $f(x) = b$; equivalently, the image $f[A] := \\{ f(x) : x \\in A \\}$ equals\n  $B$.\n- $f$ is **bijective** if it is both injective and surjective.\n\nFor $S \\subseteq A$ we write $f[S] = \\{ f(x) : x \\in S \\}$ for the image of $S$,\nand for $T \\subseteq B$ we write $f^{-1}[T] = \\{ x \\in A : f(x) \\in T \\}$ for the\npreimage of $T$; these are the image and preimage of a set under $f$ read as a\nrelation ([[def-image-and-preimage-under-a-relation]]).",
      "uses": [
        "1.1",
        "3.2",
        "4.1",
        "5.1",
        "10.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-1-1",
      "claim": "$d_S \\ge 0$ everywhere, $d_S(u) = 0$ for $u \\in S$, and $d_S(u) > 0$ for $u \\notin S$: $S$ is closed by [L1], so some $\\rho>0$ has $(u-\\rho,u+\\rho)\\cap S = \\varnothing$, whence $|u-s| \\ge \\rho$ for every $s \\in S$ and $d_S(u) \\ge \\rho$. [given, L1, L3, L11]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "L3",
        "L11"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-2-1",
      "claim": "$d_S$ is continuous by [L3], hence integrable on every $[0,x]$ with $x>0$ by [L4]; so $\\varphi$ is defined on $[0,1]$, and by [L5] it is differentiable at every point of $[0,1]$ with $\\varphi' = d_S$, which is integrable by [L4]. [step 1.1, L3, L4, L5]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L3",
        "L4",
        "L5"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-3-1",
      "claim": "**$\\varphi$ is strictly increasing, hence injective.** For $0 \\le x < y \\le 1$, $\\varphi(y)-\\varphi(x) = \\int_x^y d_S \\ge 0$ by [L5] and [L7]; if it were $0$ then [L6] would force $d_S \\equiv 0$ on $[x,y]$, so $[x,y] \\subseteq S$ by step 1.1, contradicting [L2]. Hence $\\varphi(x)<\\varphi(y)$. In particular $\\varphi(0)=0<\\varphi(1)$. [step 1.1, step 2.1, L2, ",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 2.1",
        "L2",
        "L5",
        "L6",
        "L7"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-3-2",
      "claim": "**A quadratic contraction on $S$.** Let $x<y$ both lie in $S$. For $u \\in [x,y]$ one has $d_S(u) \\le \\min\\{u-x,\\ y-u\\} \\le (y-x)\\cdot 2^{-1}$, since $x,y \\in S$; so by [L5] and [L7], $0 \\le \\varphi(y)-\\varphi(x) = \\int_x^y d_S \\le (y-x)^{2}\\cdot 2^{-1}$. [step 2.1, L5, L7, L11]",
      "step": "3.2",
      "inputs": [
        "step 2.1",
        "L5",
        "L7",
        "L11"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-4-1",
      "claim": "**$\\varphi[S]$ has content zero.** Fix $N \\ge 1$ and for $i<N$ put $J_i := [\\iota(i)/\\iota(N),\\ \\iota(i+1)/\\iota(N)]$, so the $J_i$ cover $[0,1]$ and each has length $1/\\iota(N)$. If $S \\cap J_i \\ne \\varnothing$ let $E_i := \\varphi[S \\cap J_i]$, a nonempty bounded set, and put $a_i := \\inf E_i$, $b_i := \\sup E_i$; otherwise put $a_i := b_i := 0$. [step 3.2, ",
      "step": "4.1",
      "inputs": [
        "step 3.2",
        "L10",
        "L11",
        "construct"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-5-1",
      "claim": "For $z,w \\in E_i$ one has $|z-w| \\le \\bigl(1/\\iota(N)\\bigr)^{2}\\cdot 2^{-1}$ by step 3.2, the two preimages lying in $S \\cap J_i$; hence $b_i \\le a_i + \\bigl(1/\\iota(N)\\bigr)^{2}\\cdot 2^{-1}$, since every $z \\in E_i$ is at most $w + (1/\\iota(N))^{2}2^{-1}$ for each fixed $w$, and then $w \\ge b_i - (1/\\iota(N))^{2}2^{-1}$ for every $w$. [step 3.2, step 4.1, L",
      "step": "5.1",
      "inputs": [
        "step 3.2",
        "step 4.1",
        "L11"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-6-1",
      "claim": "Every point of $\\varphi[S]$ lies in some $[a_i,b_i]$, because every point of $S$ lies in some $J_i$; and $\\sum_{i<N}(b_i-a_i) \\le \\iota(N)\\cdot \\bigl(1/\\iota(N)\\bigr)^{2}\\cdot 2^{-1} = 1/\\bigl(2\\,\\iota(N)\\bigr)$ by [L10]. [step 4.1, step 5.1, L10]",
      "step": "6.1",
      "inputs": [
        "step 4.1",
        "step 5.1",
        "L10"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-7-1",
      "claim": "Given $\\varepsilon>0$, [L10] supplies $N \\ge 1$ with $1/(2\\iota(N)) \\le \\varepsilon$; so $\\varphi[S]$ has content zero and therefore measure zero by [L9]. [step 6.1, L9, L10]",
      "step": "7.1",
      "inputs": [
        "step 6.1",
        "L9",
        "L10"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-8-1",
      "claim": "**$f := \\mathbf{1}_{\\varphi[S]}$ is integrable on $J = [0,\\varphi(1)]$.** It is bounded, with values in $\\{0,1\\}$. $S$ is compact by [L1] and $\\varphi$ is continuous by [L5] and [L3], so $\\varphi[S]$ is compact, hence closed, by [L8]; therefore at every $z \\in J \\setminus \\varphi[S]$ some neighbourhood misses $\\varphi[S]$ and $f$ vanishes on it, so $f$ is co",
      "step": "8.1",
      "inputs": [
        "step 2.1",
        "step 7.1",
        "L1",
        "L3",
        "L8",
        "L9",
        "L5"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-9-1",
      "claim": "**$f\\circ\\varphi = \\mathbf{1}_{S}$ on $[0,1]$.** For $x \\in [0,1]$: if $x \\in S$ then $\\varphi(x) \\in \\varphi[S]$ and $f(\\varphi(x)) = 1$; if $x \\notin S$ then $\\varphi(x) \\notin \\varphi[S]$, since $\\varphi$ is injective by step 3.1, and $f(\\varphi(x)) = 0$. Also $\\varphi[\\,[0,1]\\,] \\subseteq J$ by step 3.1. [step 3.1, step 8.1]",
      "step": "9.1",
      "inputs": [
        "step 3.1",
        "step 8.1"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-10-1",
      "claim": "**$\\mathbf{1}_{S}$ is discontinuous at every point of $S$.** Let $x \\in S$ and $\\rho>0$; the set $(x-\\rho,x+\\rho)\\cap(0,1)$ contains a nonempty open interval, which by [L2] is not contained in $S$, so some $y$ in it has $\\mathbf{1}_S(y) = 0$ while $\\mathbf{1}_S(x)=1$; no $\\delta$ works for $\\varepsilon = 2^{-1}$. At $x \\notin S$ the function vanishes on a ne",
      "step": "10.1",
      "inputs": [
        "step 9.1",
        "L1",
        "L2",
        "L11"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-11-1",
      "claim": "The discontinuity set of $f\\circ\\varphi$ on $[0,1]$ is therefore exactly $S$, which is not null by [L1]; so $f\\circ\\varphi$ is bounded and **not** Riemann integrable, by [L9]. [step 9.1, step 10.1, L1, L9]",
      "step": "11.1",
      "inputs": [
        "step 9.1",
        "step 10.1",
        "L1",
        "L9"
      ]
    },
    {
      "id": "fs-substitution-holds-for-every-integrable-integrand-step-12-1",
      "claim": "So $\\varphi$ is differentiable on $[0,1]$ with $\\varphi'$ integrable, $f$ is integrable on an interval containing $\\varphi[\\,[0,1]\\,]$, and $f\\circ\\varphi$ is not integrable: the claim is false, and the continuity hypothesis on $f$ in [[thm-substitution]] cannot be weakened to integrability. [step 2.1, step 8.1, step 9.1, step 11.1] ∎",
      "step": "12.1",
      "inputs": [
        "step 2.1",
        "step 8.1",
        "step 9.1",
        "step 11.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "fs-substitution-holds-for-every-integrable-integrand concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
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
      "evidence": "Statement explicitly assumes distinct ordered endpoints, excluding the degenerate interval before step 1.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement specifies the closed or oriented interval convention; step 2.1 handles the endpoint data used by the argument."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of fs-substitution-holds-for-every-integrable-integrand is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of fs-substitution-holds-for-every-integrable-integrand is not a biconditional, so it has no reverse iff direction."
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-substitution",
    "declared_target": "thm-substitution",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-ftc-first-part",
    "declared_target": "thm-ftc-first-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "declared_target": "thm-nonnegative-continuous-with-zero-integral-vanishes",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-monotonicity-of-the-integral",
    "declared_target": "thm-monotonicity-of-the-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-integral-elementary-bounds",
    "declared_target": "lem-integral-elementary-bounds",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-additivity-over-subintervals",
    "declared_target": "thm-additivity-over-subintervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-the-integral-function",
    "declared_target": "def-the-integral-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-oriented-integral",
    "declared_target": "def-oriented-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-fat-cantor-set",
    "declared_target": "def-fat-cantor-set",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-fat-cantor-set-has-positive-measure",
    "declared_target": "thm-fat-cantor-set-has-positive-measure",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-nowhere-dense-meager",
    "declared_target": "def-nowhere-dense-meager",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-distance-to-set-is-lipschitz",
    "declared_target": "lem-distance-to-set-is-lipschitz",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-metric-bounded-diameter",
    "declared_target": "def-metric-bounded-diameter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-real-and-metric-notions-agree",
    "declared_target": "lem-real-and-metric-notions-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-continuous-image-of-a-compact-set-r",
    "declared_target": "thm-continuous-image-of-a-compact-set-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-lebesgue-criterion",
    "declared_target": "thm-lebesgue-criterion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-measure-zero-and-content-zero",
    "declared_target": "def-measure-zero-and-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-content-zero-implies-null",
    "declared_target": "lem-content-zero-implies-null",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
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
  },
  {
    "source": "fs-substitution-holds-for-every-integrable-integrand",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
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
    "source": "fs-substitution-holds-for-every-integrable-integrand",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
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

## Full exact-current text of every cited or declared item (39)

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

### `def-fat-cantor-set`

````markdown
---
id: def-fat-cantor-set
kind: definition
title: "The Smith-Volterra-Cantor set: the same construction removing, at stage $n \\ge 1$, an open middle interval of length $4^{-n}$ from each of the $2^{n-1}$ remaining intervals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cantor-set, def-interval, thm-recursion, thm-induction-principle, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, def-series, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: [def-smith-volterra-cantor-set]
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Definition

**The lengths.** By the recursion theorem in the index-carrying form used by
[[def-finite-sum]] ([[thm-recursion]], applied to $\mathbb{N} \times \mathbb{R}$
with starting element $(0,1)$ and the map
$(n,t) \mapsto (n+1,\, (t - 4^{-n-1}) \cdot 2^{-1})$) there is a unique sequence
$(\lambda_n)_{n \in \mathbb{N}}$ of reals with

$$\lambda_0 = 1, \qquad \lambda_{n+1} = (\lambda_n - 4^{-n-1}) \cdot 2^{-1} \quad (n \in \mathbb{N}),$$

powers being those of [[def-integer-power]]. Put $g_n := \lambda_n - \lambda_{n+1}$.

**The left endpoints.** Let $\mathcal{F}$ be the set of pairs $(N, \ell)$ with
$N \in \mathbb{N}$, $N \ge 1$, and $\ell$ a function from
$\{\, j \in \mathbb{N} : j < N \,\}$ to $\mathbb{R}$; such a pair is a *finite
list of reals of length $N$*. Applying [[thm-recursion]] to
$\mathbb{N} \times \mathcal{F}$, the starting element $(0, (1, \ell^{(0)}))$ with
$\ell^{(0)}_0 := 0$, and the map that sends $(n, (N,\ell))$ to
$(n+1, (N + N, \ell'))$ where

$$\ell'_j := \ell_j \ \ (j < N), \qquad \ell'_j := \ell_{j - N} + g_n \ \ (N \le j < N + N),$$

gives a unique family $(N_n, \ell^{(n)})_{n \in \mathbb{N}}$ of finite lists,
with $N_0 = 1$, $N_{n+1} = N_n + N_n$, and $\ell^{(n+1)}$ the concatenation of
$\ell^{(n)}$ with its translate by $g_n$. Write $e^{(n)}_j := \ell^{(n)}_j$.

**The sets.** For $n \in \mathbb{N}$ put

$$S_n \;:=\; \bigcup_{j < N_n} \big[\, e^{(n)}_j,\ e^{(n)}_j + \lambda_n \,\big], \qquad S \;:=\; \bigcap_{n \in \mathbb{N}} S_n ,$$

the intervals being those of [[def-interval]]. $S$ is the
**Smith-Volterra-Cantor set**, also called the *fat Cantor set*.

**Counting.** For every $n$ and every real $c$ one has
$\sum_{j < N_n} c = 2^{n} c$, by induction on $n$ ([[thm-induction-principle]]):
at $n = 0$ both sides are $c$; and $\sum_{j<N_n + N_n} c = \sum_{j<N_n} c +
\sum_{j<N_n} c = 2^{n}c + 2^{n}c = 2^{n+1}c$, by the splitting law
([[lem-finite-sum-laws]], [[def-finite-sum]]) and
$2^{n+1} = 2^{n} \cdot 2 = 2^{n} + 2^{n}$ ([[def-integer-power]],
[[def-ordered-field]]). So stage $n$ has "$2^n$ intervals" in exactly this sense,
and no separate arithmetic of natural-number exponents is needed.

**The lengths are positive and shrink.** By induction on $n$:
$0 < \lambda_{n+1} \le \lambda_n \cdot 2^{-1}$ and $2^{n}\lambda_n \ge 2^{-1}$.
Indeed $2^{n+1}\lambda_{n+1} = 2^{n}(\lambda_n - 4^{-n-1}) = 2^{n}\lambda_n -
4^{-1} \cdot 2^{-n}$ by [[lem-power-laws]], so by induction
$2^{n}\lambda_n = 1 - 4^{-1}\sum_{i<n} 2^{-i} \ge 1 - 4^{-1} \cdot 2 = 2^{-1}$,
using $\sum_{i<n}2^{-i} \le \sum_{i=0}^{\infty} 2^{-i} = 2$
([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]],
[[def-series]]). Hence $\lambda_n \ge 2^{-n-1} > 0$; and
$\lambda_{n+1} = (\lambda_n - 4^{-n-1})\cdot 2^{-1} \le \lambda_n \cdot 2^{-1}$
gives $\lambda_n \le 2^{-n}$ by a second induction, so the lengths tend to $0$.

**Each stage removes an open middle interval of length $4^{-n-1}$.** From the
recursion, the two sub-intervals of $[e,\, e + \lambda_n]$ retained at stage
$n+1$ are $[e,\, e + \lambda_{n+1}]$ and $[e + g_n,\, e + g_n + \lambda_{n+1}] =
[e + g_n,\, e + \lambda_n]$, so what is dropped from that piece is the open
interval

$$M \;=\; \big(\, e + \lambda_{n+1},\ e + g_n \,\big), \qquad \text{of length } \ g_n - \lambda_{n+1} \;=\; \lambda_n - 2\lambda_{n+1} \;=\; 4^{-n-1} .$$

In particular $\lambda_{n+1} < g_n$, so $M$ is nonempty, and $g_n > 0$, so
$[e + g_n, e + \lambda_n] \subseteq [e, e+\lambda_n]$. Counting from $1$ as in
the title: at stage $n \ge 1$ an open interval of length $4^{-n}$ is removed from
each of the $2^{n-1}$ intervals then present.

**The family is nested and lies in $[0,1]$.** Each retained sub-interval is
contained in the piece it came from, by the previous paragraph, so
$S_{n+1} \subseteq S_n$; and $S_0 = [0, 1]$ since $N_0 = 1$, $e^{(0)}_0 = 0$ and
$\lambda_0 = 1$. Hence $S \subseteq S_m \subseteq [0,1]$ for every $m$.

## Remarks

- **What is different from [[def-cantor-set]].** There the removed middle is a
  fixed *proportion* of each piece, so the construction is self-similar and the
  total removed length is $1$. Here the removed middle has a fixed *length*
  $4^{-n-1}$, chosen to shrink faster than the pieces multiply, and the total
  removed length is only $2^{-1}$. Everything topological survives the change:
  the set is still compact, perfect and nowhere dense
  ([[thm-fat-cantor-set-has-positive-measure]]). Everything metric fails: $S$ is
  not of measure zero.

- **Why the construction is written with explicit lists.** The set $S_n$ is a
  union of $2^n$ intervals, and both the estimate of the removed length and the
  finite covers used later need those intervals as a *list*, indexed by naturals
  below $N_n$. Building the list by recursion, rather than asserting its
  existence at each stage, is also what keeps the construction free of any
  choice: $(N_n, \ell^{(n)})$ is a single function of $n$.

- **The name.** The set was described by Smith in 1875, by Volterra in 1881 and
  by Cantor in 1883; "fat Cantor set" is the informal name, and the two names are
  used interchangeably below.

- **$0$ and $1$ belong to $S$.** Both are instances of the general fact that
  every $e^{(n)}_j$ and every $e^{(n)}_j + \lambda_n$ lies in $S$, proved where it
  is used, in [[thm-fat-cantor-set-has-positive-measure]]: take $n = 0$ and
  $j = 0$, where $e^{(0)}_0 = 0$ and $e^{(0)}_0 + \lambda_0 = 1$.
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

### `def-measure-zero-and-content-zero`

````markdown
---
id: def-measure-zero-and-content-zero
kind: definition
title: "Measure zero (a countable cover by intervals of total length below every $\\varepsilon$) and content zero (a finite such cover)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-series, def-countable, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: [def-null-set]
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), intervals and their lengths are as in
[[def-interval]], and a *sequence* is a function on $\mathbb{N}$, which contains
$0$. Let $A \subseteq \mathbb{R}$.

- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real
  $\varepsilon > 0$ there are sequences $(a_k)_{k \in \mathbb{N}}$ and
  $(b_k)_{k \in \mathbb{N}}$ of reals with $a_k \le b_k$ for every $k$, such
  that
  $$A \subseteq \bigcup_{k \in \mathbb{N}} [a_k, b_k] \qquad \text{and} \qquad \sum_{k=0}^{\infty} (b_k - a_k) \text{ converges with sum } \le \varepsilon .$$
- $A$ has **content zero** when for every real $\varepsilon > 0$ there are
  $n \in \mathbb{N}$ and reals $a_0 \le b_0, \dots, a_n \le b_n$ with
  $$A \subseteq \bigcup_{j \le n} [a_j, b_j] \qquad \text{and} \qquad \sum_{j=0}^{n} (b_j - a_j) \le \varepsilon .$$

The number $b_k - a_k \ge 0$ is the length of $[a_k,b_k]$ ([[def-interval]]), and
the sums are the series and the finite sums of [[def-series]] and
[[def-finite-sum]].

**Working form: only the partial sums have to be checked.** All the terms
$b_k - a_k$ are $\ge 0$, so by claim 2 of
[[thm-nonnegative-series-bounded-partial-sums]] the series converges exactly when
its partial sums are bounded above, and its sum is then their supremum.
Consequently, for a fixed $\varepsilon > 0$,

$$\sum_{k=0}^{\infty}(b_k - a_k) \text{ converges with sum} \le \varepsilon \quad \Longleftrightarrow \quad \sum_{k<n} (b_k - a_k) \le \varepsilon \ \text{ for every } n \in \mathbb{N},$$

since a supremum is $\le \varepsilon$ exactly when $\varepsilon$ is an upper
bound of the set it is the supremum of ([[def-complete-ordered-field]]). Every
verification of nullity below checks the right-hand condition.

**Closed intervals lose nothing.** A bounded interval with endpoints
$a \le b$ is contained in $[a,b]$ and has the same length ([[def-interval]]), so
a cover by intervals of any of the four bounded forms yields a cover by closed
intervals with the same lengths. The definition is therefore stated with closed
intervals once and for all. Covers by *open* intervals are a genuinely different
demand, and passing to one costs a little extra length: the enlargement
$[a_k,b_k] \subseteq (a_k - \delta_k,\ b_k + \delta_k)$ is carried out where it is
needed, in [[lem-nondegenerate-interval-is-not-null]] and in
[[thm-compact-null-is-content-zero]].

**Both notions are inherited by subsets.** If $B \subseteq A$ and $A$ is null,
then any cover of $A$ covers $B$, so $B$ is null; the same sentence with finite
covers shows a subset of a set of content zero has content zero.

**A finite cover is a countable cover, so content zero implies measure zero.**
Padding the list $[a_0,b_0], \dots, [a_n,b_n]$ with the degenerate intervals
$[0,0]$ for $k > n$ leaves the total length unchanged, by the splitting law for
finite sums ([[lem-finite-sum-laws]]). This is recorded as a lemma with its
proof, [[lem-content-zero-implies-null]], because it is cited on its own.

## Remarks

- **The two notions genuinely differ.** $\mathbb{Q} \cap [0,1]$ is null and does
  not have content zero ([[cex-null-set-not-of-content-zero]]), so the two
  quantifier patterns, "a sequence of intervals" and "a finite list of
  intervals", are not interchangeable. They do agree for compact sets
  ([[thm-compact-null-is-content-zero]]), and the compact case is the only one in
  which content zero is used anywhere on this pair of pages. Nothing is claimed
  about what later pages will do with it.

- **Why "content" and not "measure" for the finite version.** The finite-cover
  notion is the vanishing of the Jordan outer content, and the countable-cover
  notion is the vanishing of the Lebesgue outer measure. Neither outer quantity
  is defined in this library, and no item here assigns a nonzero size to any set:
  every statement is of the shape "can, or cannot, be covered by intervals of
  total length below such and such a bound". That is a deliberate restriction of
  scope at this point in the reading order, not a claim that the general notions
  are unavailable in mathematics.

- **Measure zero is not vacuous and not universal.** No interval with two
  distinct endpoints is null ([[lem-nondegenerate-interval-is-not-null]]), while
  every at most countable set is ([[lem-countable-sets-are-null]]) and so is the
  uncountable Cantor set ([[thm-cantor-set-properties]]). The three facts
  together are what make the notion worth having.
````

### `def-metric-bounded-diameter`

````markdown
---
id: def-metric-bounded-diameter
kind: definition
title: "Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-ball, def-bounded-set, def-infimum,
       thm-infimum-property, lem-sup-unique, def-complete-ordered-field,
       lem-metric-nonnegativity, rem-sup-conventions, lem-of-add-order,
       def-ordered-field]
justified_by: []
aliases: [def-metric-diameter, def-distance-to-set]
landmark: false
short: "bounded, $\\operatorname{diam}$, $d(x,A)$"
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
    - title: "Bounded set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_set"
    - title: "Diameter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Diameter"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

## Remarks

- **Diameter and the distance functions are nonnegative.** For nonempty bounded
  $A$ and any $a \in A$ we have $0 = d(a,a) \in D(A)$, so
  $\operatorname{diam}(A) \ge 0$; and $d(x,A) \ge 0$, $d(A,B) \ge 0$ because $0$
  is a lower bound of the sets they are infima of
  ([[lem-metric-nonnegativity]], [[def-infimum]]).
- **$d(A,B)$ is not a metric on the nonempty subsets of $X$.** It is symmetric
  and vanishes on $A = B$, but two distinct disjoint sets can be at distance $0$,
  so the separation axiom (M1) of [[def-metric-space]] fails; the witness is on
  the companion page. The letter $d$ is reused for three different functions
  here, the metric, the point-to-set distance and the set-to-set distance, only
  because the arguments make the intended one unambiguous.
- **$d(x,A)$ is the special case $d(\{x\},A)$**, since
  $E(\{x\},A) = E(x,A)$, and the two infima therefore agree by uniqueness
  ([[lem-sup-unique]]).
````

### `def-nowhere-dense-meager`

````markdown
---
id: def-nowhere-dense-meager
kind: definition
title: "Nowhere dense, meager (first category), residual, and second category subsets of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interior-closure-boundary-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-limit-point-r, def-countable, def-neighbourhood-r, thm-n-cross-n-countable, def-countable-choice]
justified_by: []
forward_refs: [cex-meager-set-of-full-measure]
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
    - title: "Nowhere dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nowhere_dense_set"
    - title: "Meagre set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Meagre_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
    - title: "Meager set (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Meager_set"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with interior $A^{\circ}$ and closure
$\overline{A}$ as in [[def-interior-closure-boundary-r]].

- $A$ is **nowhere dense** when the interior of its closure is empty:
  $$\big(\overline{A}\big)^{\circ} \;=\; \varnothing .$$
- $A$ is **meager**, or **of the first category**, when there is a sequence
  $(A_n)_{n \in \mathbb{N}}$ of nowhere dense subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} A_n .$$
- $A$ is **of the second category** when it is not meager.
- $A$ is **residual** (also *comeager*) when $\mathbb{R} \setminus A$ is meager.

**Why a sequence, and why that is the same as "an at most countable union".**
Sequences here are indexed by $\mathbb{N}$, which contains $0$. A finite family
$A_0, \dots, A_m$ of nowhere dense sets is turned into a sequence by setting
$A_n := \varnothing$ for $n > m$, and $\varnothing$ is nowhere dense because
$\overline{\varnothing} = \varnothing$ has empty interior; the empty family is
handled the same way and gives $A = \varnothing$. So "a union of an at most
countable family of nowhere dense sets" ([[def-countable]]) and the displayed
condition define the same class, and the sequence form is used below because it
carries an explicit index and needs no case split.

**Nowhere dense means exactly that the complement of the closure is dense.**
For $A \subseteq \mathbb{R}$,

$$\big(\overline{A}\big)^{\circ} = \varnothing \quad \Longleftrightarrow \quad \mathbb{R} \setminus \overline{A} \text{ is dense in } \mathbb{R} .$$

Indeed, by the pointwise description of the interior
([[def-interior-closure-boundary-r]]), $(\overline{A})^{\circ} = \varnothing$
says that no $x \in \mathbb{R}$ admits a real $\varepsilon > 0$ with
$N_\varepsilon(x) \subseteq \overline{A}$ ([[def-neighbourhood-r]]), that is,
that every $N_\varepsilon(x)$ meets $\mathbb{R} \setminus \overline{A}$. By
claim 1 of [[thm-closure-characterisations-r]] that says precisely that every
$x \in \mathbb{R}$ is adherent to $\mathbb{R} \setminus \overline{A}$, that is,
$\overline{\mathbb{R} \setminus \overline{A}} = \mathbb{R}$, which is density
([[def-limit-point-r]]).

**A closed set is nowhere dense exactly when its interior is empty**, since a
closed set equals its own closure (claim 4 of [[thm-closure-characterisations-r]],
[[def-open-and-closed-in-r]]). This is the form in which nowhere density is
verified nearly every time below. (The phrase *almost everywhere* is avoided
throughout this pair: it is a measure-theoretic term, and the only measure notion
defined here is measure zero.)

**Both classes are closed downwards.** If $B \subseteq A$ then
$\overline{B} \subseteq \overline{A}$ and hence
$(\overline{B})^{\circ} \subseteq (\overline{A})^{\circ}$
([[def-interior-closure-boundary-r]]), so a subset of a nowhere dense set is
nowhere dense. If $B \subseteq A = \bigcup_n A_n$ with each $A_n$ nowhere dense,
then $B = \bigcup_n (A_n \cap B)$ and each $A_n \cap B$ is nowhere dense by the
previous sentence, so a subset of a meager set is meager.

**A union of two meager sets is meager.** Let $M = \bigcup_n A_n$ and
$M' = \bigcup_n B_n$ with all $A_n$ and all $B_n$ nowhere dense; fixing one
witnessing sequence for $M$ and one for $M'$ is two instantiations of an
existential statement, not a choice principle. Let
$J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ be a bijection
([[thm-n-cross-n-countable]]) and define a sequence $(C_j)_{j \in \mathbb{N}}$ by

$$C_{J(m,n)} \;:=\; \begin{cases} A_n & m = 0, \\ B_n & m \ne 0. \end{cases}$$

This is a total definition because $J$ is a bijection, every $C_j$ is nowhere
dense, and $\bigcup_j C_j = M \cup M'$, since $A_n = C_{J(0,n)}$ and
$B_n = C_{J(1,n)}$ and every $C_j$ is one of the $A_n$ or one of the $B_n$.

## Remarks

- **The countably infinite version of the last observation is a different
  statement.** To show that $\bigcup_i M_i$ is meager for a sequence $(M_i)$ of
  meager sets one must select a witnessing sequence of nowhere dense sets for
  every $i$ at once, which is an application of countable choice
  ([[def-countable-choice]]); the two-set case above avoids it because two
  selections are two instantiations. Nothing on this page uses the countably
  infinite version, and every meager set met below is presented together with an
  explicit witnessing sequence.

- **Nowhere dense is strictly stronger than having empty interior.**
  $\mathbb{Q}$ has empty interior, since no neighbourhood consists of rationals
  alone, yet $\overline{\mathbb{Q}} = \mathbb{R}$ has interior $\mathbb{R}$, so
  $\mathbb{Q}$ is not nowhere dense. It is nevertheless meager, being a union of
  singletons; that computation is [[cor-q-is-meager-and-not-g-delta]].

- **First category, second category and residual are not a trichotomy.** A set
  is meager or of the second category, and those two are exhaustive and
  exclusive by definition. Residual is a separate condition on the complement: a
  residual set is of the second category once $\mathbb{R}$ is known not to be
  meager in itself ([[thm-baire-category-r]]), but before that theorem nothing
  rules out a set that is both meager and residual.

- **Category is a notion of topological smallness, and it is independent of
  smallness in the sense of measure.** Neither of the two implications between
  "nowhere dense" and "measure zero" ([[def-measure-zero-and-content-zero]])
  holds, and $\mathbb{R}$ itself splits into a meager set and a set of measure
  zero; the three items settling this are
  [[fs-nowhere-dense-implies-measure-zero]],
  [[fs-measure-zero-implies-nowhere-dense]] and
  [[cex-meager-set-of-full-measure]].
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

### `def-the-integral-function`

````markdown
---
id: def-the-integral-function
kind: definition
title: "The integral function $F(x) := \\int_a^x f$ of an integrable $f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-oriented-integral, def-darboux-integral, def-interval, def-bounded-set]
forward_refs: [cex-an-integrable-function-with-no-primitive, fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: [def-integral-function]
landmark: true
short: "integral function $F(x) = \\int_a^x f$"
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
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). The **integral function of $f$ with base point $a$**
is

$$F : [a,b] \to \mathbb{R}, \qquad F(x) \;:=\; \int_a^x f .$$

**It is a genuine function, and that has to be checked.** For $x \in (a,b]$ the
restriction of $f$ to $[a,x]$ is integrable, by
[[lem-integrability-on-a-subinterval]] applied with $c := a$ and $d := x$, so
$\int_a^x f$ names a single real number ([[def-darboux-integral]]). For $x = a$
the symbol $\int_a^a f$ is $0$ by [[def-oriented-integral]]. So $F(x)$ is defined
at every point of $[a,b]$ and

$$F(a) \;=\; 0 .$$

More generally, for any base point $c \in [a,b]$ the function
$x \mapsto \int_c^x f$ is defined on the whole of $[a,b]$, the integral being the
oriented one of [[def-oriented-integral]] when $x < c$; the case $c = a$ is
written $F$ above and is the one used unless another base point is named.

### The two identities used throughout

**Increments are integrals.** For all $x, y \in [a,b]$, in either order,

$$F(y) - F(x) \;=\; \int_x^y f .$$

This is claim 3 of [[thm-additivity-over-subintervals]] applied to the three
points $a$, $x$, $y$: it gives $\int_a^x f + \int_x^y f = \int_a^y f$, that is
$F(x) + \int_x^y f = F(y)$. No ordering of $x$ and $y$ is assumed, and the
degenerate cases $x = y$, $x = a$ and $y = a$ are included, since claim 3 is
stated for arbitrary points.

**Changing the base point changes $F$ by a constant.** If $c \in [a,b]$ and
$F_c(x) := \int_c^x f$, then for every $x \in [a,b]$

$$F_c(x) \;=\; F(x) - F(c) ,$$

again by claim 3 of [[thm-additivity-over-subintervals]] at the points $a$, $c$,
$x$. So the family of integral functions of $f$ is one function up to an
additive constant.

## Remarks

- **$F$ exists for every integrable $f$, whether or not $f$ has a primitive.**
  Nothing in the definition asks $f$ to be continuous anywhere, and nothing here
  claims $F' = f$. The two statements about $F'$ that this page does prove are: $F$ is
  always Lipschitz ([[thm-the-integral-function-is-lipschitz]]), and $F'(c) = f(c)$
  at every point $c$ where $f$ is continuous ([[thm-ftc-first-part]]).

- **$F$ need not be a primitive of $f$.** At a discontinuity of $f$ the
  derivative $F'$ may fail to exist, or may exist and differ from $f$; both
  possibilities are exhibited on the companion page, by
  [[cex-an-integrable-function-with-no-primitive]] and
  [[fs-the-integral-function-is-always-a-primitive]]. That is the honest content
  of the phrase "the integral function", and it is why it is not called "the
  primitive" here.

- **Why the base point is part of the data and the notation suppresses it.** The
  symbol $F$ hides its dependence on $a$, as is customary; the identity
  $F_c = F - F(c)$ above is what makes the suppression harmless, since every
  statement below about $F$ is about its increments, which do not see the base
  point at all.
````

### `lem-content-zero-implies-null`

````markdown
---
id: lem-content-zero-implies-null
kind: lemma
title: "A set of content zero has measure zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-measure-zero-and-content-zero, def-finite-sum, lem-finite-sum-laws, def-series, def-interval, def-complete-ordered-field, def-ordered-field, lem-of-add-order]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: []
landmark: false
short: "content zero $\\Rightarrow$ null"
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
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement

If $A \subseteq \mathbb{R}$ has content zero
([[def-measure-zero-and-content-zero]]) then $A$ has measure zero.

The converse is false in general, and true for compact sets
([[thm-compact-null-is-content-zero]]); the witness for its failure is named in
the remarks below.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ of content zero and a real $\varepsilon > 0$.

[L1] $A$ has content zero when for every real $\eta > 0$ there are $n \in \mathbb{N}$ and reals $a_0 \le b_0, \dots, a_n \le b_n$ with $A \subseteq \bigcup_{j \le n}[a_j,b_j]$ and $\sum_{j \le n}(b_j - a_j) \le \eta$; $A$ is null when for every real $\eta > 0$ there are sequences with the analogous properties and $\sum_{k<i}(b_k - a_k) \le \eta$ for every $i \in \mathbb{N}$ ([[def-measure-zero-and-content-zero]]).

[L2] $[c,c] = \{c\}$ is an interval of length $0$, and $[c,d]$ has length $d - c \ge 0$ for $c \le d$ ([[def-interval]]).

[L3] Finite sums: $\sum_{k<i} t_k = \sum_{k<n+1} t_k + \sum_{k=n+1}^{i-1} t_k$ for $n + 1 \le i$, a sum of nonnegative terms is nonnegative and is monotone in the number of nonnegative terms adjoined, and $\sum_{k<i} t_k \le \sum_{k<n+1} t_k$ whenever $i \le n+1$ and the terms are nonnegative ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-series]]).

[L4] Ordered-field arithmetic: adding a nonnegative quantity does not decrease a value, and the order is transitive ([[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let the real $\varepsilon > 0$ be given; since $A$ has content zero, [L1] supplies $n \in \mathbb{N}$ and reals $a_0 \le b_0, \dots, a_n \le b_n$ with $A \subseteq \bigcup_{j \le n}[a_j,b_j]$ and $\sum_{j \le n}(b_j - a_j) \le \varepsilon$. [given, L1, choose]

2.1 Extend the finite list to sequences by putting $a_k := 0$ and $b_k := 0$ for $k > n$; then $a_k \le b_k$ for every $k \in \mathbb{N}$, the added intervals $[0,0]$ have length $0$ by [L2], and $A \subseteq \bigcup_{j \le n}[a_j,b_j] \subseteq \bigcup_{k \in \mathbb{N}}[a_k,b_k]$. [step 1.1, L2]

3.1 For every $i \in \mathbb{N}$ one has $\sum_{k<i}(b_k - a_k) \le \varepsilon$: all the terms are nonnegative by [L2], so for $i \le n+1$ the sum is at most $\sum_{k<n+1}(b_k - a_k) = \sum_{j \le n}(b_j - a_j) \le \varepsilon$ by [L3] and step 1.1, and for $i > n+1$ the sum equals $\sum_{k<n+1}(b_k - a_k)$ plus a sum of terms all equal to $0$, hence is again at most $\varepsilon$, by [L3] and [L4]. [step 1.1, step 2.1, L2, L3, L4]

4.1 So for every real $\varepsilon > 0$ there is a sequence of closed intervals covering $A$ with every partial total length at most $\varepsilon$, which by [L1] is exactly the statement that $A$ has measure zero. [step 2.1, step 3.1, L1] ∎

## Remarks

- **All that is used is that a finite list can be padded.** The definition of
  measure zero asks for a sequence, and a finite family becomes one at the cost
  of degenerate intervals, which are intervals of length $0$
  ([[def-interval]]). No estimate is involved and no completeness of $\mathbb{R}$
  is used.

- **The implication is strict.** $\mathbb{Q} \cap [0,1]$ is null and bounded and
  does not have content zero ([[fs-null-implies-content-zero]],
  [[cex-null-set-not-of-content-zero]]), so the two notions are genuinely
  different even for bounded sets. What closes the gap is compactness, not
  boundedness ([[thm-compact-null-is-content-zero]]).
````

### `lem-distance-to-set-is-lipschitz`

````markdown
---
id: lem-distance-to-set-is-lipschitz
kind: lemma
title: "$|d(x,A) - d(y,A)| \\le d(x,y)$, so the distance to a fixed nonempty set is $1$-Lipschitz"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-bounded-diameter, lem-metric-reverse-triangle, thm-infimum-property,
       def-metric-space, def-infimum, lem-of-abs-value, def-abs-value,
       lem-of-add-order, def-ordered-field, def-complete-ordered-field,
       lem-metric-nonnegativity]
justified_by: []
aliases: []
landmark: false
short: "$d(\\cdot,A)$ is $1$-Lipschitz"
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
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a nonempty $A \subseteq X$, and points $x, y \in X$; write $E(u) := \{\, d(u,a) : a \in A \,\}$ for $u \in X$.

[A1] The triangle inequality (M3) of [[def-metric-space]]: $d(u,a) \le d(u,v) + d(v,a)$ for all $u, v \in X$ and $a \in A$.

[L1] For nonempty $A$ the real number $d(u,A) = \inf E(u)$ exists, because $E(u)$ is nonempty and bounded below by $0$ ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]], [[thm-infimum-property]]).

[L2] The infimum is a lower bound of its set and is the greatest such: $\inf S \le s$ for every $s \in S$, and $\ell \le \inf S$ for every lower bound $\ell$ of $S$ ([[def-infimum]]).

[L3] Adding a constant to an inequality: if $a \le b$ then $a + c \le b + c$. [[lem-of-add-order]] states the strict form only; the nonstrict form used here is that form together with the case $a = b$, settled by totality of the order ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] For every real $u$, $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]], [[def-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Both $d(x,A)$ and $d(y,A)$ are defined real numbers, since $A$ is nonempty. [given, L1]

1.2 For every $a \in A$: $d(x,a) \le d(x,y) + d(y,a)$. [A1]

1.3 For every $a \in A$: $d(y,a) \le d(y,x) + d(x,a)$, and $d(y,x) = d(x,y)$ by symmetry (M2), so $d(y,a) \le d(x,y) + d(x,a)$. [A1]

2.1 For every $a \in A$: $d(x,A) \le d(x,a)$, since $d(x,A)$ is a lower bound of $E(x)$ and $d(x,a) \in E(x)$; combining with step 1.2 gives $d(x,A) \le d(x,y) + d(y,a)$, hence $d(x,A) - d(x,y) \le d(y,a)$. [step 1.1, step 1.2, L2, L3]

2.2 For every $a \in A$: $d(y,A) \le d(y,a) \le d(x,y) + d(x,a)$ by the same reasoning with the roles of $x$ and $y$ exchanged, hence $d(y,A) - d(x,y) \le d(x,a)$. [step 1.1, step 1.3, L2, L3]

3.1 The real number $d(x,A) - d(x,y)$ is therefore a lower bound of $E(y)$, so it is at most the greatest lower bound: $d(x,A) - d(x,y) \le d(y,A)$, that is $d(x,A) - d(y,A) \le d(x,y)$. [step 2.1, L2, L3]

3.2 Symmetrically $d(y,A) - d(x,y)$ is a lower bound of $E(x)$, so $d(y,A) - d(x,A) \le d(x,y)$. [step 2.2, L2, L3]

4.1 By [L4] the value $|d(x,A) - d(y,A)|$ is $d(x,A) - d(y,A)$ or its negative $d(y,A) - d(x,A)$, and steps 3.1 and 3.2 bound both by $d(x,y)$; hence $|d(x,A) - d(y,A)| \le d(x,y)$. [step 3.1, step 3.2, L4] ∎

## Remarks

- **Where the nonemptiness is used.** Twice, and both times essentially: it is
  what makes $d(x,A)$ and $d(y,A)$ exist at all
  ([[def-metric-bounded-diameter]]), and it is what makes $E(x)$ and $E(y)$
  nonempty so that "greatest lower bound" has content. For $A = \emptyset$ the
  statement has no meaning in this library, since $\inf \emptyset$ is undefined.
- **The point case is [[lem-metric-reverse-triangle]]**: taking $A = \{z\}$ gives
  $E(u) = \{d(u,z)\}$, whose infimum is $d(u,z)$, and the conclusion becomes
  $|d(x,z) - d(y,z)| \le d(x,y)$.
- The constant $1$ is best possible in general: on $\mathbb{R}$ with
  $A = \{0\}$ the function is $u \mapsto |u|$, and $\big||x| - |y|\big| = |x-y|$
  whenever $x$ and $y$ have the same sign.
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

### `lem-integral-elementary-bounds`

````markdown
---
id: lem-integral-elementary-bounds
kind: lemma
title: "If $m \\le f \\le M$ on $[a,b]$ then $m(b-a) \\le L(f,P) \\le \\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f \\le U(f,P) \\le M(b-a)$ for every partition $P$; in particular every constant function is integrable, with $\\int_a^b c = c(b-a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-infimum, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, def-max-min, lem-of-abs-value, def-interval]
justified_by: []
aliases: []
landmark: false
short: "elementary bounds on the integral"
proof_strategy: direct
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

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ satisfy

$$m \;\le\; f(x) \;\le\; M \qquad \text{for every } x \in [a,b],$$

with $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums
and integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and
for **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]])

$$m(b-a) \;\le\; L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) \;\le\; M(b-a) .$$

In particular, taking $f$ to be the constant function with value $c$:

$$\int_a^b c \;=\; c\,(b-a) ,$$

the constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for
every partition $P$.

## Facts & Assumptions

**Given:** Reals $a < b$, reals $m \le M$, and $f : [a,b] \to \mathbb{R}$ with $m \le f(x) \le M$ for every $x \in [a,b]$. Let $P = (n,t)$ be a partition of $[a,b]$, with subintervals $I_i$ and lengths $\Delta_i$ for $i < n$.

[L1] $\sum_{i<n}\Delta_i = b - a$, every $\Delta_i > 0$, and $n \ge 1$; each $I_i$ is a nonempty subset of $[a,b]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$ exist, $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$, and $m_i \le f(x) \le M_i$ for $x \in I_i$ ([[def-darboux-sums]]).

[L3] $L(f,P) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le U(f,P)$ for every partition $P$; $f$ is integrable exactly when the two integrals are equal, and then $\int_a^b f$ is their common value ([[def-darboux-integral]]).

[L4] An infimum is the greatest lower bound and a supremum the least upper bound; a set with a single element has that element as both ([[def-infimum]], [[def-complete-ordered-field]], [[def-max-min]]).

[L5] Finite sums: scaling, monotonicity in the terms, and $\sum_{i<n}\lambda\,\Delta_i = \lambda\sum_{i<n}\Delta_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: multiplying an inequality by a positive quantity preserves it, adding a constant preserves it, and the order is transitive; $|x| \le \max\{|m|,|M|\}$ whenever $m \le x \le M$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded: $|f(x)| \le \max\{|m|,|M|\}$ for every $x \in [a,b]$ by [L6], so the Darboux sums and integrals of [L2] and [L3] are defined. [given, L6]

1.2 For every $i < n$: $m$ is a lower bound of $f[I_i]$ and $M$ an upper bound, since $I_i \subseteq [a,b]$; the set $f[I_i]$ is nonempty by [L1]. Hence $m \le m_i$ and $M_i \le M$ by [L4]. [given, L1, L2, L4]

1.3 **The constant case, treated on its own.** Suppose in addition that $f$ is the constant function with value $c$, that is $f(x) = c$ for every $x \in [a,b]$; the general argument below does not use this supposition. Then $f[I_i] = \{c\}$ for every $i < n$ by [L1], so $m_i = M_i = c$ by [L4], and $L(f,P) = U(f,P) = \sum_{i<n} c\,\Delta_i = c(b-a)$ by [L5] and [L1]. [L1, L2, L4, L5]

2.1 $L(f,P) \ge m(b-a)$: by step 1.2 and $\Delta_i > 0$ one has $m_i\Delta_i \ge m\Delta_i$ for every $i < n$, so monotonicity and scaling in [L5] give $L(f,P) \ge \sum_{i<n} m\,\Delta_i = m\sum_{i<n}\Delta_i = m(b-a)$ by [L1]. [step 1.2, L1, L5, L6]

2.2 $U(f,P) \le M(b-a)$: the same argument with $M_i \le M$ gives $U(f,P) \le \sum_{i<n}M\,\Delta_i = M(b-a)$. [step 1.2, L1, L5, L6]

3.1 Combining steps 2.1 and 2.2 with the chain of [L3] gives the displayed five-term inequality for every partition $P$. [step 2.1, step 2.2, L3]

4.1 Hence, still under the supposition of step 1.3 that $f$ is constant with value $c$, the set of lower sums and the set of upper sums are both $\{c(b-a)\}$, so $\underline{\int_a^b} f = \overline{\int_a^b} f = c(b-a)$ by [L4], $f$ is integrable, and $\int_a^b c = c(b-a)$ by [L3]. [step 1.3, L3, L4] ∎

## Remarks

- **The five-term chain is the only estimate most of this page needs.** Every integrability proof below produces one partition and controls $U(f,P) - L(f,P)$; the chain then locates both integrals inside an interval of that length, and [[thm-riemann-criterion]] turns the observation into an equivalence.

- **The bounds are sharp, but equality does not characterize constants.** Constant functions show that neither outer coefficient can be improved. Nonconstant functions can also attain equality: for the Dirichlet indicator on $[0,1]$, every partition has $L(f,P) = 0$ and $U(f,P) = 1$, so both outer bounds are equalities.

- **Nonnegativity, as a special case.** If $f \ge 0$ on $[a,b]$ then $m$ may be taken to be $0$, so $\int_a^b f \ge 0$ whenever the integral exists. A nonnegative integrand with vanishing integral need not vanish, however; that is [[fs-nonnegative-integrable-with-zero-integral-vanishes]].
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

### `lem-real-and-metric-notions-agree`

````markdown
---
id: lem-real-and-metric-notions-agree
kind: lemma
title: "Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, def-uniform-continuity-real, def-metric-continuity, def-metric-uniform-continuity, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, thm-uniform-continuity-preserves-cauchy, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-metric-space, def-metric-ball, def-metric-topology, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-compactness-variants, def-metric-convergence, def-cauchy-in-metric, def-open-cover-r, def-open-and-closed-in-r, def-real-limit, def-sequence, def-rational-power, lem-of-abs-value, lem-metric-nonnegativity]
justified_by: []
aliases: [lem-metric-dictionary-for-r]
forward_refs: [ex-x-to-the-beta-separates-the-holder-classes, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]
landmark: true
short: "real and metric notions agree"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ carry the subspace metric of the usual metric
$d_{\mathbb{R}}(x,y) = |x-y|$ of $\mathbb{R}$, that is
$d_A(x,y) = |x - y|$ for $x, y \in A$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and let $f : A \to \mathbb{R}$, regarded also as a map of metric spaces
$(A, d_A) \to (\mathbb{R}, d_{\mathbb{R}})$. Then the $\mathbb{R}$-native
notions of this page and the metric-space notions of the earlier pages are the
**same notions**, in the following five senses.

1. **Continuity.** For every $c \in A$: $f$ is continuous at $c$ in the sense of
   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense
   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and
   only if it is continuous as a map of metric spaces.
2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of
   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as
   a map of metric spaces ([[def-metric-uniform-continuity]]).
3. **Lipschitz.** For a real $L \ge 0$: $f$ is Lipschitz with constant $L$ as a
   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if
   $$|f(x) - f(x')| \le L\,|x - x'| \qquad \text{for all } x, x' \in A .$$
   This displayed condition is what "$f$ is Lipschitz with constant $L$" means
   for a real function on $A$ in this library; no second definition is made.
4. **Hölder.** For a rational $\alpha$ with $0 < \alpha \le 1$ and a real
   $C \ge 0$: $f$ is $\alpha$-Hölder with constant $C$ as a map of metric spaces
   if and only if
   $$|f(x) - f(x')| \le C\,|x - x'|^{\alpha} \qquad \text{for all } x, x' \in A ,$$
   the power being the rational power of a nonnegative base
   ([[def-rational-power]]).
5. **Compactness, in both senses used in this library.** For $K \subseteq
   \mathbb{R}$ with the subspace metric $d_K$:
   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every
     family of open subsets of $\mathbb{R}$ covering $K$ has a finite subfamily
     covering $K$ — if and only if the metric space $(K, d_K)$ is compact
     ([[def-metric-compactness]]);
   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and
     only if $(K, d_K)$ is sequentially compact as a metric space
     ([[def-metric-compactness-variants]]).

Two consequences are recorded, since they are the reason the dictionary is
stated as a lemma rather than as a remark.

6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and
   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \to \mathbb{R}$ is
   uniformly continuous on $A$; an $\alpha$-Hölder $f$ with rational
   $0 < \alpha \le 1$ is uniformly continuous on $A$; a uniformly continuous $f$
   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is
   $\alpha$-Hölder for every rational $\alpha$ with $0 < \alpha \le 1$. No
   strictness is claimed here, and none is claimed there.
7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy
   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a
   sequence of reals ([[def-real-limit]]); so by clause 2 and
   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous
   $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of
   $\mathbb{R}$.

**Why this lemma exists, and why it is a lemma.** Three results of this page —
[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] — are stated a second time here, having already been
proved metric-generally as
[[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is
deliberate: the $\mathbb{R}$-native proofs run through
[[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the
metric proofs run through the cover machinery of metric spaces. **This item is
the single place in the library where that duplication is acknowledged**, and
clauses 1 and 5 are what make the two families of statements literally the same
statements. It is a lemma, and not a remark, precisely so that later pages can
cite it and move between the two vocabularies.

**Clause 5 closes a second seam.** The phrase *compact subset of $\mathbb{R}$*
is defined twice in this library — metrically, as compactness of the metric
subspace ([[def-metric-compactness]]), and $\mathbb{R}$-natively, by covers by
open subsets of $\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no
item asserted that the two agree.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ with the subspace metric $d_A(x,y) = |x-y|$, a function $f : A \to \mathbb{R}$, and a set $K \subseteq \mathbb{R}$ with the subspace metric $d_K$.

[L1] The usual metric: $d_{\mathbb{R}}(x,y) = |x-y|$ is a metric on $\mathbb{R}$; its open balls are the intervals $B(x,r) = (x-r, x+r)$; and a set $U \subseteq \mathbb{R}$ is open in the metric topology of $d_{\mathbb{R}}$ exactly when it is open in the sense of [[def-open-and-closed-in-r]] ([[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] Subspace metric: for $S \subseteq \mathbb{R}$ the restriction $d_S$ of $d_{\mathbb{R}}$ to $S \times S$ is a metric on $S$, so $d_S(x,y) = |x-y|$ for $x, y \in S$ ([[def-isometry-and-metric-embedding]]).

[L3] Metric continuity at $a \in X$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in X$ with $d_X(x,a) < \delta$ satisfies $d_Y(f(x), f(a)) < \varepsilon$ ([[def-metric-continuity]]).

[L4] Metric uniform continuity: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in X$ with $d_X(x,x') < \delta$ satisfy $d_Y(f(x), f(x')) < \varepsilon$ ([[def-metric-uniform-continuity]]).

[L5] Continuity and uniform continuity of a real function on $A$, in the forms of [[def-continuity-real]] and [[def-uniform-continuity-real]].

[L6] Lipschitz and Hölder for a map of metric spaces: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$, respectively $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for a rational $\alpha$ with $0 < \alpha \le 1$, the power being that of [[def-rational-power]] with the convention $0^{\alpha} = 0$ ([[def-lipschitz-holder-contraction]]).

[L7] The regularity hierarchy for maps of metric spaces: Lipschitz implies uniformly continuous, uniformly continuous implies continuous, $\alpha$-Hölder implies uniformly continuous, and on a nonempty bounded space Lipschitz implies $\alpha$-Hölder for every rational $\alpha \in (0,1]$ ([[thm-metric-regularity-hierarchy]]).

[L8] Intrinsic character of compactness: a subset $K$ of a metric space $X$ is a compact metric space in its own right, with the subspace metric, exactly when every family of open subsets of $X$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L9] Compactness and sequential compactness of $K \subseteq \mathbb{R}$ in the $\mathbb{R}$-native sense ([[def-open-cover-r]]), and sequential compactness of a metric space ([[def-metric-compactness-variants]]).

[L10] Metric convergence: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$ ([[def-metric-convergence]]); convergence and the Cauchy condition for real sequences are those of [[def-real-limit]] and [[def-sequence]]; a metric is nonnegative ([[lem-metric-nonnegativity]]); and $|u| \ge 0$ with $\bigl||u|\bigr| = |u|$ ([[lem-of-abs-value]]).

[L11] Cauchy in a metric space: $(x_k)$ is Cauchy in $(X,d)$ when for every rational $\varepsilon > 0$ there is $N$ with $d(x_m,x_n) < \varepsilon$ for all $m,n \ge N$ ([[def-cauchy-in-metric]]).

[L12] A uniformly continuous map of metric spaces sends Cauchy sequences to Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]).

## Proof

**Proof technique:** direct.

1.1 **The two distances are the two absolute values.** By [L1] and [L2], for $x, x' \in A$ we have $d_A(x,x') = |x - x'|$, and for $u, v \in \mathbb{R}$ we have $d_{\mathbb{R}}(u,v) = |u - v|$; in particular $d_{\mathbb{R}}(f(x), f(x')) = |f(x) - f(x')|$. [L1, L2]

1.2 **Clause 5, the cover half.** Take the ambient metric space to be $(\mathbb{R}, d_{\mathbb{R}})$ and $K \subseteq \mathbb{R}$ with $d_K$. By [L8], $(K,d_K)$ is a compact metric space exactly when every family of sets open in $(\mathbb{R}, d_{\mathbb{R}})$ whose union contains $K$ has a finite subfamily whose union contains $K$. By [L1] the sets open in $(\mathbb{R}, d_{\mathbb{R}})$ are exactly the open subsets of $\mathbb{R}$ in the sense of [[def-open-and-closed-in-r]]. So the displayed condition is word for word the definition of compactness of $K$ in [L9]. [L1, L8, L9]

2.1 **Clause 1.** Fix $c \in A$. Substituting the identities of step 1.1 into [L3], with $X := (A,d_A)$, $Y := (\mathbb{R}, d_{\mathbb{R}})$ and $a := c$, turns metric continuity at $c$ into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$. That is verbatim the condition of [L5] defining continuity of $f$ at $c$ in the sense of [[def-continuity-real]]. The two conditions are therefore the same condition, and each holds at every point of $A$ exactly when the other does. [step 1.1, L3, L5]

2.2 **Clause 2.** The same substitution in [L4] turns metric uniform continuity into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in A$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$, which is verbatim [[def-uniform-continuity-real]] as recorded in [L5]. [step 1.1, L4, L5]

2.3 **Clauses 3 and 4.** The same substitution in [L6] turns the Lipschitz condition into $|f(x) - f(x')| \le L\,|x-x'|$ for all $x,x' \in A$, and the $\alpha$-Hölder condition into $|f(x) - f(x')| \le C\,|x-x'|^{\alpha}$, the power being that of [[def-rational-power]] and defined at $x = x'$ by the convention $0^{\alpha} = 0$ recorded in [L6]. Since this library gives no other definition of the two conditions for a real function on $A$, the displayed inequalities are what those words mean here. [step 1.1, L6]

2.4 **Clause 5, the sequential half: convergence first.** Let $(x_j)$ be a sequence with terms in $K$ and let $p \in K$. By [L10] and step 1.1, convergence of $(x_j)$ to $p$ in $(K,d_K)$ says $d_K(x_j,p) = |x_j - p| \to 0$ in $\mathbb{R}$; and $|x_j - p| \to 0$ says that for every rational $\varepsilon > 0$ there is $J$ with $\bigl||x_j - p| - 0\bigr| = |x_j - p| < \varepsilon$ for $j \ge J$, which is verbatim the statement $x_j \to p$ of [L10]. So the two convergences are the same relation. [step 1.1, L10]

3.1 **Clause 5, the sequential half.** A sequence in $(K,d_K)$ is exactly a sequence of reals with all terms in $K$, and by step 2.4 a subsequence of it converges to a point of $K$ in $(K,d_K)$ exactly when it converges to that point in $\mathbb{R}$. Hence "every sequence in $K$ has a subsequence converging in $(K,d_K)$ to a point of $K$" and "every sequence of reals with terms in $K$ has a subsequence converging in $\mathbb{R}$ to a point of $K$" are the same statement, which is the assertion of [L9] and [[def-metric-compactness-variants]]. [step 2.4, L9, L10]

3.2 **Clause 6.** By clauses 1 to 4, the four $\mathbb{R}$-native conditions are the corresponding metric conditions for the map $(A,d_A) \to (\mathbb{R},d_{\mathbb{R}})$, so the implications of [L7] hold between them verbatim; the boundedness hypothesis in the last of them is boundedness of the metric space $(A,d_A)$, which for $A \subseteq \mathbb{R}$ is boundedness of $A$ as a set of reals, since $d_A(x,x') = |x-x'|$. [step 2.1, step 2.2, step 2.3, L7]

3.3 **Clause 7.** By step 1.1 and [L11], a sequence $(x_k)$ with terms in $A$ is Cauchy in $(A,d_A)$ exactly when for every rational $\varepsilon > 0$ there is $N$ with $|x_m - x_n| < \varepsilon$ for all $m,n \ge N$, which is verbatim the Cauchy condition of [L10] for a sequence of reals. Combining this with clause 2 and [L12] gives that a uniformly continuous $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of reals. [step 1.1, step 2.2, L10, L11, L12]

4.1 Clauses 1 to 7 are proved, each by rewriting one definition into the other along the identity $d_A(x,x') = |x-x'|$ or, for clause 5, along [L8] and the agreement of the two notions of open subset of $\mathbb{R}$. [step 2.1, step 2.2, step 2.3, step 1.2, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Nothing here is a new theorem, and that is the point.** Every clause is an identification of two forms of words, and the only clause with any content beyond substitution is 5, which needs [[lem-compactness-is-intrinsic]] to move between covers by relatively open sets and covers by open subsets of $\mathbb{R}$, and needs [[lem-real-line-is-a-metric-space]] to know that the metric topology of $\mathbb{R}$ is the topology of [[def-open-and-closed-in-r]]. A reader who takes those two identifications for granted is taking for granted exactly what this library refuses to leave unsaid.

- **The hierarchy of clause 6 is not strict by fiat, and the witnesses live on the companion page.** [[thm-metric-regularity-hierarchy]] asserts the four implications and claims no converse. That none of them reverses for real functions is witnessed here: [[ex-x-to-the-beta-separates-the-holder-classes]] gives, for rationals $0 < \beta < \alpha \le 1$, a function on $[0,1]$ that is $\beta$-Hölder and not $\alpha$-Hölder, and in particular ($\alpha = 1$) is uniformly continuous and not Lipschitz; and [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] gives a continuous function that is not uniformly continuous. Those two items are links, not dependencies: they are examples on the companion page, and nothing on this page rests on them.

- **What the dictionary does *not* say.** It does not say that the two proofs of a duplicated theorem are the same proof, and they are not: the $\mathbb{R}$-native ones use the order of $\mathbb{R}$ and spend no choice beyond what is named in each item, while the metric ones use covers and, where the equivalence of the compactness variants is invoked, countable or dependent choice. What the dictionary establishes is that the two *statements* coincide, so that a later page may use whichever proof it prefers and cite whichever form it needs.
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

### `thm-additivity-over-subintervals`

````markdown
---
id: thm-additivity-over-subintervals
kind: theorem
title: "For $a<c<b$: $f$ is integrable on $[a,b]$ if and only if it is integrable on $[a,c]$ and on $[c,b]$, and then $\\int_a^b f = \\int_a^c f + \\int_c^b f$; with the oriented form for arbitrary $a,b,c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-integrability-on-a-subinterval, def-oriented-integral, def-darboux-integral, def-darboux-sums, thm-riemann-criterion, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-integral-additive-in-the-interval]
landmark: true
short: "additivity over subintervals"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < c < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Then:

1. $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its
   restrictions to $[a,c]$ and to $[c,b]$ are integrable;
2. and in that case
   $$\int_a^b f \;=\; \int_a^c f \;+\; \int_c^b f .$$
3. **Oriented form.** Let $\alpha < \beta$ be reals, let $f : [\alpha,\beta] \to
   \mathbb{R}$ be integrable, and let $u, v, w \in [\alpha,\beta]$ be arbitrary.
   Then, with the convention of [[def-oriented-integral]],
   $$\int_u^v f \;+\; \int_v^w f \;=\; \int_u^w f .$$

Claim 3 is where [[def-oriented-integral]] earns its place: it holds for every
arrangement of the three points, including the degenerate ones, and it is the
form used everywhere below.

## Facts & Assumptions

**Given:** Reals $a < c < b$ and a bounded $f : [a,b] \to \mathbb{R}$; and, for claim 3, reals $\alpha < \beta$, an integrable $f : [\alpha,\beta] \to \mathbb{R}$ and points $u,v,w \in [\alpha,\beta]$. Let a real $\varepsilon > 0$ be given.

[L1] Riemann's criterion on any closed bounded interval with distinct endpoints ([[thm-riemann-criterion]]).

[L2] A function integrable on $[p,q]$ is integrable on every $[p',q'] \subseteq [p,q]$ with $p' < q'$ ([[lem-integrability-on-a-subinterval]]).

[L3] For a partition $R = (n,t)$ and bounded $h$: $L(h,R) = \sum_{i<n}m_i\Delta_i$, $U(h,R) = \sum_{i<n}M_i\Delta_i$, and $L(h,R) \le \underline{\int} h \le \overline{\int} h \le U(h,R)$, the integral being the common value of the two when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L4] A partition of $[p,q]$ is a pair $(n,t)$ with $n \ge 1$, $t_0 = p$, $t_i < t_{i+1}$ for $i < n$ and $t_k = q$ for $k \ge n$; its subintervals are $[t_i,t_{i+1}]$ for $i<n$ ([[def-partition-and-refinement]], [[def-interval]]).

[L5] Finite sums split at an intermediate index, with $\sum_{k=p}^{q-1}x_k = \sum_{j<q-p}x_{p+j}$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clause 3).

[L6] With oriented limits, $\int_v^u h = -\int_u^v h$ and $\int_u^u h = 0$ ([[def-oriented-integral]]).

[L7] Ordered-field arithmetic: adding a constant preserves an inequality, the order is total and transitive, and a real of absolute value below every positive real is $0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **Claim 1, forward.** If $f$ is integrable on $[a,b]$ then, since $a < c$ and $c < b$, [L2] gives integrability on $[a,c]$ and on $[c,b]$. [L2]

1.2 **The splice.** Let $P_1 = (n_1,t^1)$ be a partition of $[a,c]$ and $P_2 = (n_2,t^2)$ one of $[c,b]$. Define $P := (n_1+n_2,\ t)$ by $t_i := t^1_i$ for $i \le n_1$, $t_{n_1+j} := t^2_j$ for $j \le n_2$, and $t_k := b$ for $k \ge n_1+n_2$. The two prescriptions agree at $i = n_1$, where $t^1_{n_1} = c = t^2_0$; and $t_0 = a$, $t_{n_1+n_2} = t^2_{n_2} = b$, with $t_i < t_{i+1}$ for every $i < n_1+n_2$. So $P$ is a partition of $[a,b]$. [L4, construct]

1.3 **Claim 1, converse.** Suppose $f$ is integrable on $[a,c]$ and on $[c,b]$, and use [L1] on each to fix $P_1$ with $U(f,P_1)-L(f,P_1) < \varepsilon\cdot 2^{-1}$ and $P_2$ with $U(f,P_2)-L(f,P_2) < \varepsilon\cdot 2^{-1}$. [L1, choose]

2.1 The first $n_1$ subintervals of $P$ are those of $P_1$ and the last $n_2$ are those of $P_2$, with the matching lengths, so by [L3] and the splitting law [L5], $L(f,P) = L(f,P_1) + L(f,P_2)$ and $U(f,P) = U(f,P_1) + U(f,P_2)$. [step 1.2, L3, L4, L5]

3.1 For the splice $P$ of those two, step 2.1 gives $U(f,P) - L(f,P) < \varepsilon$; as $\varepsilon > 0$ was arbitrary and $f$ is bounded, [L1] makes $f$ integrable on $[a,b]$. [step 1.2, step 2.1, step 1.3, L1, L7]

4.1 **Claim 2.** With $P_1$, $P_2$ and $P$ as above, [L3] puts $\int_a^b f$ between $L(f,P)$ and $U(f,P)$, that is between $L(f,P_1)+L(f,P_2)$ and $U(f,P_1)+U(f,P_2)$ by step 2.1; and [L3] applied on $[a,c]$ and on $[c,b]$ puts $\int_a^c f + \int_c^b f$ between the same two numbers. [step 2.1, step 1.3, step 3.1, L3]

5.1 Those two numbers differ by less than $\varepsilon$ by step 1.3, so $\bigl|\int_a^b f - \int_a^c f - \int_c^b f\bigr| < \varepsilon$; as $\varepsilon > 0$ was arbitrary the difference is $0$, which is claim 2. [step 1.3, step 4.1, L7]

6.1 **Claim 3, first the sorted case.** Let $x \le y$ in $[\alpha,\beta]$. Then $\int_\alpha^y f = \int_\alpha^x f + \int_x^y f$. Indeed if $\alpha < x < y$ this is claim 2 applied on $[\alpha,y]$, where $f$ is integrable by [L2]; if $x = \alpha$ the middle term is $0$ by [L6] and the identity is trivial; and if $x = y$ the last term is $0$ by [L6] and the identity is again trivial. [step 5.1, L2, L6]

7.1 Put $F(x) := \int_\alpha^x f$ for $x \in [\alpha,\beta]$, which is defined by [L2] and [L6]. Then $\int_x^y f = F(y) - F(x)$ for **all** $x,y \in [\alpha,\beta]$: for $x < y$ this is step 6.1 rearranged; for $x = y$ both sides are $0$ by [L6]; and for $x > y$ the case already proved gives $\int_y^x f = F(x)-F(y)$, and [L6] negates both sides. [step 6.1, L2, L6, construct]

8.1 **Claim 3.** For arbitrary $u,v,w \in [\alpha,\beta]$, step 7.1 gives $\int_u^v f + \int_v^w f = \bigl(F(v)-F(u)\bigr) + \bigl(F(w)-F(v)\bigr) = F(w)-F(u) = \int_u^w f$. [step 7.1, algebra] ∎

## Remarks

- **The oriented form is not proved by listing six orderings.** Step 7.1 shows that the oriented integral between two points is a *difference of values of one function of one variable*, after which claim 3 is the cancellation $(F(v)-F(u))+(F(w)-F(v)) = F(w)-F(u)$, valid however the three points are arranged and however many of them coincide. The case analysis is confined to the two lines of step 7.1, and no appeal to symmetry is made anywhere.

- **The function $F$ of step 7.1 is the integral function**, and it is given its own item, [[def-the-integral-function]], because the rest of the page is about it. Nothing there re-proves step 7.1; it cites this theorem.

- **Boundedness on the whole of $[a,b]$ is a hypothesis of claim 1 in both directions.** Boundedness on $[a,c]$ and on $[c,b]$ separately does give boundedness on the union, so the converse could be stated with the hypothesis split; it is stated globally because [[def-darboux-sums]] needs it globally to make $U(f,P)$ meaningful for a partition of $[a,b]$.
````

### `thm-composition-with-a-continuous-function`

````markdown
---
id: thm-composition-with-a-continuous-function
kind: theorem
title: "If $f$ is integrable on $[a,b]$ with values in $[m,M]$ and $\\varphi$ is continuous on $[m,M]$, then $\\varphi \\circ f$ is integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-criterion, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, def-continuity-real, thm-heine-cantor-r, cor-boundedness-theorem-r, def-uniform-continuity-real, thm-heine-borel-r, def-open-cover-r, lem-finite-sum-laws, def-finite-sum, def-oscillation, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field, lem-of-abs-value, thm-of-archimedean, cor-archimedean-reciprocal]
forward_refs: [cex-a-composition-of-integrable-functions-that-is-not-integrable]
justified_by: []
aliases: [thm-continuous-after-integrable]
landmark: true
short: "continuous after integrable is integrable"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Springer article on compositions of Riemann-integrable functions"
      url: "https://link.springer.com/article/10.1007/s00591-022-00318-x"
pipeline_run: null
---

## Statement

Let $a < b$ and $m \le M$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]) with

$$m \;\le\; f(x) \;\le\; M \qquad \text{for every } x \in [a,b],$$

and let $\varphi : [m,M] \to \mathbb{R}$ be continuous on $[m,M]$
([[def-continuity-real]]). Then the composite
$\varphi \circ f : [a,b] \to \mathbb{R}$ is integrable on $[a,b]$.

**The order of the hypotheses is the whole content, and it does not reverse.**
What is assumed is *continuous after integrable*: the outer function is the
continuous one. Weakening the outer function to a merely integrable $\varphi$
makes the statement **false**, and the witness is on the companion page. The
remaining variant — $\varphi$ merely integrable with $f$ *continuous* — is
neither proved nor refuted anywhere on this page, and the companion page's
witness does not bear on it, its inner function being discontinuous at every
rational. Nothing here asserts anything about that variant.

## Facts & Assumptions

**Given:** Reals $a < b$ and $m \le M$, an integrable $f : [a,b] \to \mathbb{R}$ with values in $[m,M]$, a continuous $\varphi : [m,M] \to \mathbb{R}$, and a real $\varepsilon > 0$. Write $h := \varphi \circ f$.

[L1] Riemann's criterion: a bounded $u$ on $[a,b]$ is integrable if and only if for every real $\eta > 0$ there is a partition $P$ with $U(u,P) - L(u,P) < \eta$ ([[thm-riemann-criterion]], [[def-darboux-integral]]).

[L2] For a partition $P = (n,t)$ of $[a,b]$ and bounded $u$: $U(u,P) - L(u,P) = \sum_{i<n}\bigl(M_i(u) - m_i(u)\bigr)\Delta_i$ with $\Delta_i > 0$ and $\sum_{i<n}\Delta_i = b - a$, and $M_i(u) - m_i(u) = \omega_u(I_i) = \sup\{\,|u(x)-u(y)| : x,y \in I_i\,\}$ ([[def-darboux-sums]], [[def-oscillation]], [[def-partition-and-refinement]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] $[m,M]$ with $m \le M$ and $[a,b]$ are closed bounded intervals, hence compact ([[thm-heine-borel-r]], [[def-open-cover-r]], [[def-interval]]).

[L4] A continuous real function on a compact subset of $\mathbb{R}$ is bounded there ([[cor-boundedness-theorem-r]], [[def-bounded-set]]).

[L5] Heine-Cantor: a continuous real function on a compact $K \subseteq \mathbb{R}$ is uniformly continuous on $K$, so for every real $\eta > 0$ there is a real $\delta_0 > 0$ with $|\varphi(s)-\varphi(t)| < \eta$ for all $s,t \in K$ with $|s-t| < \delta_0$ ([[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L6] Finite sums: additivity, scaling and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1, 2 and 4).

[L7] Ordered-field arithmetic and the absolute value: multiplying an inequality by a nonnegative quantity and adding constants preserve it, the order is total and transitive, a positive real has a positive inverse, and $|u| \le c$ follows from $-c \le u \le c$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[lem-of-abs-value]]). The nonstrict forms follow from the strict ones by adjoining the case of equality.

[L8] For every real $\eta > 0$ there is a real $\eta' > 0$ with $\eta' < \eta$, for instance $\eta' = \eta \cdot 2^{-1}$; and the Archimedean property in reciprocal form ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 $[m,M]$ is compact, so $\varphi$ is bounded there: fix a real $K \ge 0$ with $|\varphi(s)| \le K$ for every $s \in [m,M]$. Hence $|h(x)| \le K$ for every $x \in [a,b]$ and $h$ is bounded. [given, L3, L4, choose]

1.2 By [L5] applied on the compact $[m,M]$ with $\eta := \varepsilon$, fix a real $\delta_0 > 0$ with $|\varphi(s)-\varphi(t)| < \varepsilon$ whenever $s,t \in [m,M]$ and $|s-t| < \delta_0$; then put $\delta := \min\{\delta_0 \cdot 2^{-1},\ \varepsilon \cdot 2^{-1}\}$, a positive real with $\delta < \delta_0$ and $\delta < \varepsilon$. [given, L3, L5, L7, L8, choose]

2.1 So $|\varphi(s)-\varphi(t)| \le \varepsilon$ whenever $s,t \in [m,M]$ satisfy $|s-t| \le \delta$, since $\delta < \delta_0$. [step 1.2, L7]

2.2 Since $\delta > 0$, so is $\delta^{2}$, and [L1] supplies a partition $P = (n,t)$ of $[a,b]$ with $U(f,P) - L(f,P) < \delta^{2}$. [step 1.2, given, L1, L7, choose]

3.1 Fix $i < n$ and write $\Omega_i := M_i(f) - m_i(f) \ge 0$. If $\Omega_i \le \delta$ then any $x,y \in I_i$ have $|f(x)-f(y)| \le \Omega_i \le \delta$ with $f(x),f(y) \in [m,M]$, so $|h(x)-h(y)| \le \varepsilon$ by step 2.1, whence $M_i(h) - m_i(h) \le \varepsilon$ by [L2]. [step 2.1, step 2.2, L2, L7]

3.2 If instead $\Omega_i > \delta$ then $\Omega_i/\delta > 1$, while $M_i(h) - m_i(h) \le 2K$ always, by [L2] and step 1.1. [step 1.1, step 2.2, L2, L7]

4.1 In both cases $\bigl(M_i(h)-m_i(h)\bigr)\Delta_i \le \varepsilon\,\Delta_i + \bigl(2K/\delta\bigr)\Omega_i\Delta_i$: in the first case the second summand is nonnegative and the first alone dominates, and in the second case $(2K/\delta)\Omega_i\Delta_i \ge 2K\Delta_i$ dominates by itself. [step 3.1, step 3.2, L7]

5.1 Summing over $i < n$ with [L6] and using $\sum_{i<n}\Delta_i = b-a$ and [L2] gives $U(h,P)-L(h,P) \le \varepsilon(b-a) + (2K/\delta)\bigl(U(f,P)-L(f,P)\bigr)$. [step 4.1, L2, L6, L7]

6.1 By step 2.2 the second summand is below $(2K/\delta)\delta^{2} = 2K\delta$, and $\delta < \varepsilon$ by step 1.2, so $U(h,P)-L(h,P) < \varepsilon\,(b-a+2K)$. [step 2.2, step 5.1, L7]

7.1 Let a real $\eta > 0$ be given. Running steps 1.2 to 6.1 with $\varepsilon := \eta/(b-a+2K+1)$, a positive real since $b-a+2K+1 > 0$, produces a partition $P$ with $U(h,P)-L(h,P) < \eta\,(b-a+2K)/(b-a+2K+1) < \eta$. [step 6.1, L7, L8]

8.1 As $\eta > 0$ was arbitrary and $h$ is bounded by step 1.1, [L1] makes $h = \varphi\circ f$ integrable on $[a,b]$. [step 1.1, step 7.1, L1] ∎

## Remarks

- **Step 4.1 is what replaces the usual split of the index range.** The classical proof separates the indices into a good set $G$ and a bad set $B$ and sums over each; the finite-sum toolkit used here is that of [[lem-finite-sum-laws]], stated for $\sum_{i<n}$ and carrying no clause that splits a range into a subset and its complement, so the split is carried instead by a single inequality valid at *every* index, whose two summands are exactly the two contributions. The bound obtained is the same one.

- **The hypothesis $f[\,[a,b]\,] \subseteq [m,M]$ is what makes $\varphi\circ f$ defined at all**, and $m,M$ exist because an integrable $f$ is bounded ([[def-darboux-sums]]). Taking $[m,M]$ to be any interval containing the range of $f$ is legitimate and changes nothing, since a continuous function on a larger compact interval restricts to a continuous one.

- **What the theorem does not say.** It does not say that $\varphi\circ f$ is integrable when $\varphi$ is merely integrable, and it does not say that $\int_a^b \varphi\circ f$ can be computed from $\int_a^b f$. The first is refuted on the companion page. For the second, take $\varphi(t) = t^{2}$ on $[0,1]$ with $f$ the constant $1/2$ and with $g$ the indicator of $[0,1/2]$: both are integrable with integral $1/2$, while $\int_0^1 \varphi\circ f = 1/4$ and $\int_0^1 \varphi\circ g = 1/2$, so $\int_a^b \varphi\circ f$ is not a function of $\int_a^b f$.

- **Forward reference, orientation only.** The reversal refuted on the companion page is [[cex-a-composition-of-integrable-functions-that-is-not-integrable]]; nothing above depends on it.
````

### `thm-continuous-image-of-a-compact-set-r`

````markdown
---
id: thm-continuous-image-of-a-compact-set-r
kind: theorem
title: "The image of a compact subset of $\\mathbb{R}$ under a continuous real function is compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, def-open-cover-r, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "continuous image of a compact set"
proof_strategy: direct
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ be continuous on $A$
([[def-continuity-real]]) and let $K \subseteq A$ be compact in the sense of
[[def-open-cover-r]], that is, every family of open subsets of $\mathbb{R}$
whose union contains $K$ has a finite subfamily whose union contains $K$. Then
the image

$$f[K] \;:=\; \{\, f(x) : x \in K \,\}$$

is a compact subset of $\mathbb{R}$.

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-continuous-image-of-a-compact-space-is-compact]], proved from the
cover machinery of metric spaces; the proof below is $\mathbb{R}$-native and
uses only open subsets of $\mathbb{R}$ and the definition of continuity of this
page. The duplication is deliberate and is acknowledged in exactly one place,
[[lem-real-and-metric-notions-agree]] later on this page, which proves that the
two notions of "compact subset of $\mathbb{R}$" and the two notions of
"continuous" coincide, so that the two theorems really are the same statement in
two vocabularies.

**No choice principle is used.** The covering family built below is cut out by a
property rather than selected point by point, and the only selection made is
from a *finite* list, which needs no axiom.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ continuous on $A$, and a compact set $K \subseteq A$; $f[K] = \{\, f(x) : x \in K \,\}$.

[L1] Continuity of $f$ at $x \in A$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(y) - f(x)| < \varepsilon$ for every $y \in A$ satisfying $|y - x| < \delta$; equivalently $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x))$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Open sets: $V \subseteq \mathbb{R}$ is open when every point of $V$ has a neighbourhood inside $V$, and every neighbourhood $N_{\delta}(x)$ is itself an open set containing $x$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] Compactness of $K$: for every family $\mathcal{W}$ of open subsets of $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{W}$, either $K = \varnothing$ and the empty subfamily covers it, or there are $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{W}$ with $K \subseteq W_0 \cup \dots \cup W_n$ ([[def-open-cover-r]]).

## Proof

**Proof technique:** direct.

1.1 If $K = \varnothing$, then $f[K] = \varnothing$, which is compact by [L3]. Hence suppose $K \ne \varnothing$ for the rest of the proof. [L3, cases]

1.2 Let $\mathcal{V}$ be a family of open subsets of $\mathbb{R}$ with $f[K] \subseteq \bigcup \mathcal{V}$. Define $$\mathcal{W} \;:=\; \bigl\{\, N_{\delta}(x) \ : \ x \in K,\ \delta \in \mathbb{R},\ \delta > 0,\ \text{and } f\bigl(K \cap N_{\delta}(x)\bigr) \subseteq V \text{ for some } V \in \mathcal{V} \,\bigr\}.$$ This family is cut out by a property of the pair $(x,\delta)$, so it is a set and nothing is selected in forming it; every member is an open subset of $\mathbb{R}$ by [L2]. [L2]

2.1 **$\mathcal{W}$ covers $K$.** Let $x \in K$. Then $x \in A$ and $f(x) \in f[K] \subseteq \bigcup \mathcal{V}$, so $f(x) \in V$ for some $V \in \mathcal{V}$. As $V$ is open, [L2] gives a real $\varepsilon > 0$ with $N_{\varepsilon}(f(x)) \subseteq V$, and [L1] gives a real $\delta > 0$ with $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x)) \subseteq V$. Since $K \subseteq A$ we get $f\bigl(K \cap N_{\delta}(x)\bigr) \subseteq V$, so $N_{\delta}(x) \in \mathcal{W}$, and $x \in N_{\delta}(x)$ by [L2]. Hence $K \subseteq \bigcup \mathcal{W}$. [step 1.2, L1, L2]

3.1 By [L3] there are $n \in \mathbb{N}$ and members $W_0, \dots, W_n$ of $\mathcal{W}$ with $K \subseteq W_0 \cup \dots \cup W_n$. For each $i \le n$ the membership $W_i \in \mathcal{W}$ asserts the existence of some $V \in \mathcal{V}$ with $f(K \cap W_i) \subseteq V$; naming one such $V_i$ for each of the finitely many indices $i \le n$ requires no choice principle. [step 1.1, step 1.2, step 2.1, L3, choose]

4.1 **The finite subfamily works.** Let $z \in f[K]$, say $z = f(x)$ with $x \in K$. By step 3.1 there is $i \le n$ with $x \in W_i$, hence $x \in K \cap W_i$ and $z = f(x) \in V_i$. Therefore $f[K] \subseteq V_0 \cup \dots \cup V_n$, a union of finitely many members of $\mathcal{V}$. [step 3.1]

5.1 Every family of open subsets of $\mathbb{R}$ covering $f[K]$ thus has a finite subfamily covering $f[K]$, so $f[K]$ is compact. [step 1.1, step 1.2, step 4.1, L3] ∎

## Remarks

- **The proof is the preimage characterisation, made canonical.** [[thm-continuity-preimage-characterisation]] says that $f^{-1}(V)$ is the trace on $A$ of an open set; the textbook argument pulls back each $V \in \mathcal{V}$ to such an open set and covers $K$ with those. Doing it that way selects one open set per member of $\mathcal{V}$, a family that may be arbitrarily large. Uniting all admissible balls instead, as above, reaches the same cover with no selection, and the only naming step left is over a finite index set.

- **The image of a compact set is closed and bounded**, by [[thm-heine-borel-characterisation-r]]. That is what the next two items use, and it is the shortest route to both boundedness and the attainment of extrema.

- **Compactness cannot be weakened to closedness or to boundedness.** The image of a closed set need not be closed ([[fs-continuous-image-of-a-closed-set-is-closed]]), and the image of a bounded set need not be bounded, since $x \mapsto 1/x$ carries the bounded set $(0,1)$ onto $(1,\infty)$.
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

### `thm-fat-cantor-set-has-positive-measure`

````markdown
---
id: thm-fat-cantor-set-has-positive-measure
kind: theorem
title: "The Smith-Volterra-Cantor set is compact, perfect and nowhere dense, and does not have measure zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fat-cantor-set, def-measure-zero-and-content-zero, def-nowhere-dense-meager, thm-heine-borel-characterisation-r, def-open-cover-r, def-bounded-set, def-perfect-set-r, lem-nondegenerate-interval-is-not-null, thm-n-cross-n-countable, def-injection-surjection-bijection, def-finite-sum, lem-finite-sum-laws, def-series, def-interval, def-integer-power, lem-power-laws, thm-open-set-algebra-r, def-open-and-closed-in-r, def-limit-point-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-neighbourhood-r, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, thm-induction-principle, thm-well-ordering-principle, lem-nat-trichotomy, def-nat-order, lem-geometric-sequence-null, def-real-limit, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-nowhere-dense-with-positive-measure, cex-dense-set-of-measure-zero, ex-fat-cantor-measure-computed]
aliases: []
landmark: true
short: "fat Cantor set: nowhere dense, not null"
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Statement

Let $S$ be the Smith-Volterra-Cantor set ([[def-fat-cantor-set]]). Then:

1. $S$ is closed and bounded, hence compact
   ([[thm-heine-borel-characterisation-r]]);
2. $S$ is perfect ([[def-perfect-set-r]]);
3. $S$ is nowhere dense ([[def-nowhere-dense-meager]]);
4. if $(a_k)$ and $(b_k)$ are sequences of reals with $a_k \le b_k$,
   $S \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le M$ for every
   $i \in \mathbb{N}$, then $M \ge 2^{-1}$.

In particular $S$ does **not** have measure zero
([[def-measure-zero-and-content-zero]]): no cover of $S$ by intervals has total
length below $2^{-1}$, let alone below every positive $\varepsilon$.

**Claim 4 is the quantitative form**, and it is what claim 4 of the title asserts
in the only vocabulary available here. This library defines no outer measure, so
"the measure of $S$ is $1/2$" is not a statement it can make; what it can state,
and what is proved below, is that $2^{-1}$ is a lower bound for the total length
of every interval cover of $S$.

## Facts & Assumptions

**Given:** The lengths $(\lambda_n)$, the gaps $g_n = \lambda_n - \lambda_{n+1}$, the finite lists $(N_n, \ell^{(n)})$ with entries $e^{(n)}_j$, and the sets $S_n$, $S$ of [[def-fat-cantor-set]]. For $n \in \mathbb{N}$ and $j < N_n$ write $M^{(n)}_j := \big(e^{(n)}_j + \lambda_{n+1},\ e^{(n)}_j + g_n\big)$ for the open interval removed from the $j$-th piece at stage $n$.

[A1] The negation of claim 4: sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $S \subseteq \bigcup_k [a_k,b_k]$, all partial sums $\sum_{k<i}(b_k - a_k) \le M$, and $M < 2^{-1}$.

[L1] The construction: $N_0 = 1$, $e^{(0)}_0 = 0$, $\lambda_0 = 1$, $N_{n+1} = N_n + N_n$, $e^{(n+1)}_j = e^{(n)}_j$ for $j < N_n$ and $e^{(n+1)}_{N_n + j} = e^{(n)}_j + g_n$ for $j < N_n$; $S_n = \bigcup_{j<N_n}[e^{(n)}_j, e^{(n)}_j + \lambda_n]$; $S = \bigcap_n S_n \subseteq S_m \subseteq [0,1]$; $0 < \lambda_{n+1} < g_n < \lambda_n \le 2^{-n}$; $g_n + \lambda_{n+1} = \lambda_n$; $\lambda_n - 2\lambda_{n+1} = 4^{-n-1}$; and $\sum_{j<N_n} c = 2^{n}c$ for every real $c$ ([[def-fat-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $[c,d]$ is a closed set, $(c,d)$ is open, $N_\varepsilon(x) = (x-\varepsilon,x+\varepsilon)$, a closed bounded interval is bounded, finite unions of closed sets are closed and an intersection of a nonempty family of closed sets is closed ([[def-interval]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-bounded-set]], [[thm-open-set-algebra-r]]).

[L3] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L4] Perfect means closed with no isolated point; nowhere dense means the interior of the closure is empty, and a closed set equals its closure ([[def-perfect-set-r]], [[def-limit-point-r]], [[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L5] If $[u,v] \subseteq \bigcup_k [c_k,d_k]$ with $u \le v$, $c_k \le d_k$ and $\sum_{k<i}(d_k - c_k) \le M'$ for every $i$, then $M' \ge v - u$ ([[lem-nondegenerate-interval-is-not-null]]).

[L6] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]).

[L7] Finite sums: splitting, scaling, monotonicity in the terms; a finite sum of nonnegative terms indexed injectively inside a finite rectangle is at most the sum over the rectangle ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] $\sum_{n=0}^{\infty} 2^{-n} = 2$, every partial sum of a nonnegative series is at most its sum, and $2^{-n} \to 0$ ([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[lem-geometric-sequence-null]], [[def-real-limit]]).

[L9] Induction on $\mathbb{N}$; every nonempty subset of $\mathbb{N}$ has a least element; every finite list of naturals has an upper bound in $\mathbb{N}$, the order of $\mathbb{N}$ being total ([[thm-induction-principle]], [[thm-well-ordering-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L10] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $4 > 0$ and $2^{-1} > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that claim 4 fails, and fix $(a_k)$, $(b_k)$ and $M$ as in [A1], so that $M < 2^{-1}$. [assume-contra, given, A1, choose]

1.2 **$S$ is compact, claim 1.** Each $S_n$ is the union of the finite list of closed sets $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$, $j < N_n$, hence closed by [L2]; so $S = \bigcap_n S_n$ is closed by [L2], and $S \subseteq [0,1]$ is bounded by [L1] and [L2]; by [L3] it is compact. [L1, L2, L3]

1.3 **Separation.** For every $n$ and all $i \ne j$ below $N_n$ one has $|e^{(n)}_i - e^{(n)}_j| > \lambda_n$, by induction on $n$ ([L9]). At $n = 0$ there is nothing to prove, since $N_0 = 1$. Assume it at $n$ and let $i \ne j$ below $N_{n+1} = N_n + N_n$. If both indices are $< N_n$, or both are $\ge N_n$, the two entries are $e^{(n)}_{i'}$ and $e^{(n)}_{j'}$ with $i' \ne j'$, possibly both shifted by the same $g_n$, so the difference has absolute value $> \lambda_n > \lambda_{n+1}$ by [L1]. Otherwise the entries are $e^{(n)}_{i'}$ and $e^{(n)}_{j'} + g_n$; if $i' = j'$ the difference is $g_n > \lambda_{n+1}$ by [L1]; if $e^{(n)}_{i'} - e^{(n)}_{j'} > \lambda_n$ then $e^{(n)}_{i'} - e^{(n)}_{j'} - g_n > \lambda_n - g_n = \lambda_{n+1}$, and if $e^{(n)}_{j'} - e^{(n)}_{i'} > \lambda_n$ then $e^{(n)}_{j'} + g_n - e^{(n)}_{i'} > \lambda_n > \lambda_{n+1}$, in each case by [L1] and [L10]. Consequently the pieces $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$, $j < N_n$, are pairwise disjoint. [L1, L9, L10]

1.4 **Every endpoint lies in $S$.** Fix $n$ and $j < N_n$. For $m \le n$ one has $e^{(n)}_j$ and $e^{(n)}_j + \lambda_n$ in $S_n \subseteq S_m$ by [L1]. For $m \ge n$, an induction on $m$ ([L9]) gives indices $j', j'' < N_m$ with $e^{(m)}_{j'} = e^{(n)}_j$ and $e^{(m)}_{j''} + \lambda_m = e^{(n)}_j + \lambda_n$: at $m = n$ take $j' = j'' = j$; and if they exist at $m$, then $e^{(m+1)}_{j'} = e^{(m)}_{j'}$ works for the left endpoint, while $e^{(m+1)}_{N_m + j''} + \lambda_{m+1} = e^{(m)}_{j''} + g_m + \lambda_{m+1} = e^{(m)}_{j''} + \lambda_m$ works for the right one, by [L1]. So both points lie in every $S_m$, hence in $S$. [L1, L9]

1.5 **The complement decomposes over the stages.** $[0,1] \setminus S = \bigcup_{n}(S_n \setminus S_{n+1})$. The inclusion $\supseteq$ holds because $S_n \subseteq S_0 = [0,1]$ and $S \subseteq S_{n+1}$ by [L1]. For $\subseteq$, let $x \in [0,1] \setminus S$; then $x \in S_0$ and, $S$ being $\bigcap_m S_m$, the set of $m$ with $x \notin S_m$ is nonempty, so by [L9] it has a least element $m_0$, and $m_0 \ge 1$ since $x \in S_0$. Put $n := m_0 - 1$; then $x \in S_n$ by minimality and $x \notin S_{n+1}$. [L1, L9]

2.1 **The removed pieces.** Fix $n$ and $j < N_n$. By [L1] the pieces $[e^{(n)}_j, e^{(n)}_j + \lambda_{n+1}]$ and $[e^{(n)}_j + g_n,\ e^{(n)}_j + \lambda_n]$ both occur among the pieces of $S_{n+1}$, so a point $x$ of $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$ outside $S_{n+1}$ satisfies $\lambda_{n+1} < x - e^{(n)}_j < g_n$, that is $x \in M^{(n)}_j$; hence $S_n \setminus S_{n+1} \subseteq \bigcup_{j<N_n} M^{(n)}_j$. Conversely $M^{(n)}_j \cap S_{n+1} = \varnothing$: a piece of $S_{n+1}$ coming from $i \ne j$ lies in $[e^{(n)}_i, e^{(n)}_i + \lambda_n]$, which is disjoint from $[e^{(n)}_j, e^{(n)}_j + \lambda_n] \supseteq M^{(n)}_j$ by step 1.3, while the two pieces coming from $j$ itself are disjoint from the open interval $M^{(n)}_j$ by [L10]. Finally each $M^{(n)}_j$ has length $g_n - \lambda_{n+1} = \lambda_n - 2\lambda_{n+1} = 4^{-n-1}$, so $\sum_{j<N_n} 4^{-n-1} = 2^{n} \cdot 4^{-n-1} = 4^{-1} \cdot 2^{-n}$ by [L1]. [step 1.3, L1, L10]

2.2 **$S$ is perfect, claim 2.** $S$ is closed by step 1.2. Let $x \in S$ and let the real $\varepsilon > 0$ be given; by [L1] and [L8] fix $n$ with $\lambda_n \le 2^{-n} < \varepsilon$. Since $x \in S_n$ there is $j < N_n$ with $x \in [e^{(n)}_j, e^{(n)}_j + \lambda_n]$; the two endpoints of that piece lie in $S$ by step 1.4, are distinct because $\lambda_n > 0$, and each is within $\lambda_n < \varepsilon$ of $x$ by [L10]. So at least one of them is a point of $S \cap N_\varepsilon(x)$ different from $x$, and $x$ is not isolated in $S$; by [L4], $S$ is perfect. [step 1.2, step 1.4, L1, L4, L8, L10]

3.1 **$S$ is nowhere dense, claim 3.** $S$ is closed by step 1.2, so it equals its closure, and by [L4] it suffices that its interior be empty. Suppose $N_\varepsilon(x) \subseteq S$ for some $x$ and some real $\varepsilon > 0$; fix $n$ with $\lambda_n \le 2^{-n} < \varepsilon$ by [L1] and [L8], and $j < N_n$ with $x \in [e^{(n)}_j, e^{(n)}_j + \lambda_n]$. The point $w := e^{(n)}_j + (\lambda_{n+1} + g_n) \cdot 2^{-1}$ lies in $M^{(n)}_j$, since $\lambda_{n+1} < g_n$, and hence in $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$, so $|w - x| \le \lambda_n < \varepsilon$ and $w \in N_\varepsilon(x) \subseteq S \subseteq S_{n+1}$; but $M^{(n)}_j \cap S_{n+1} = \varnothing$ by step 2.1, which is impossible. So no neighbourhood is contained in $S$ and $S$ is nowhere dense. [step 1.2, step 2.1, L1, L4, L8, L10]

3.2 **A cover of $[0,1]$ built from [A1] and the removed pieces.** By [L6] fix a bijection $J$ and define sequences $(c_i)$, $(d_i)$ as follows: for $i \in \mathbb{N}$ write $(m, t) := J^{-1}(i)$; if $m = 0$ put $(c_i, d_i) := (a_t, b_t)$; if $m \ge 1$ and $t < N_{m-1}$ put $(c_i,d_i) := \big(e^{(m-1)}_t + \lambda_{m}, \ e^{(m-1)}_t + g_{m-1}\big)$; and otherwise put $(c_i,d_i) := (0,0)$. Then $c_i \le d_i$ for every $i$ by [L1], and $\bigcup_i [c_i,d_i]$ contains $S$ by [A1] and contains $[0,1] \setminus S$ by steps 1.5 and 2.1, hence contains $[0,1]$. For a partial sum, fix $i_0$; the pairs $J^{-1}(i)$ with $i < i_0$ are distinct, so by [L9] there is $P$ bounding both of their coordinates, and since all the terms are nonnegative [L7] gives $\sum_{i<i_0}(d_i - c_i) \le \sum_{t \le P}(b_t - a_t) + \sum_{n \le P}\sum_{t < N_n} 4^{-n-1} \le M + \sum_{n\le P} 4^{-1}2^{-n} \le M + 4^{-1} \cdot 2 = M + 2^{-1}$, using [A1], step 2.1, [L7] and [L8]. [step 1.1, step 1.5, step 2.1, A1, L1, L6, L7, L8, L9]

4.1 By [L5] applied to $[0,1]$ and the cover of step 3.2, $M + 2^{-1} \ge 1 - 0 = 1$, so $M \ge 2^{-1}$, contradicting step 1.1. Claim 4 therefore holds; and $S$ is not null, since nullity would give, at $\varepsilon := 4^{-1}$, a cover of $S$ with all partial total lengths $\le 4^{-1} < 2^{-1}$, which claim 4 forbids. With steps 1.2, 2.2 and 3.1 all four claims are proved. [step 1.1, step 1.2, step 2.2, step 3.1, step 3.2, L5, L10, discharge-contradiction] ∎

## Remarks

- **Nowhere dense and null are independent.** $S$ is nowhere dense and not null;
  $\mathbb{Q}$ is null and not nowhere dense ([[lem-countable-sets-are-null]],
  [[lem-q-and-irrationals-dense-r]]). The two false statements recording this are
  [[fs-nowhere-dense-implies-measure-zero]] and
  [[fs-measure-zero-implies-nowhere-dense]], with witnesses
  [[cex-nowhere-dense-with-positive-measure]] and
  [[cex-dense-set-of-measure-zero]].

- **Where the construction differs from the Cantor set, and where it does not.**
  Steps 1.2, 1.3, 1.4, 2.2 and 3.1 use only that the pieces shrink to $0$ in
  length, double in number and stay separated, which the middle-thirds
  construction also satisfies; so $S$ and $C$ are indistinguishable at that level.
  The difference is entirely in step 2.1: the removed length at stage $n$ is
  $4^{-1}2^{-n}$ here and $2^{n}3^{-n-1}$ there, and only the first is summable to
  less than $1$. The removed lengths are added up in
  [[ex-fat-cantor-measure-computed]], where they total exactly $2^{-1}$.

- **Compactness is not what is used against nullity.** The proof of claim 4 never
  extracts a finite subcover: it combines the given countable cover of $S$ with
  the countably many removed pieces and appeals to
  [[lem-nondegenerate-interval-is-not-null]], whose own proof is where the
  compactness of $[0,1]$ is spent. Passing through
  [[thm-compact-null-is-content-zero]] would work too and would be longer.
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

### `thm-nonnegative-continuous-with-zero-integral-vanishes`

````markdown
---
id: thm-nonnegative-continuous-with-zero-integral-vanishes
kind: theorem
title: "A continuous $f \\ge 0$ on $[a,b]$ with $\\int_a^b f = 0$ is identically $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-additivity-over-subintervals, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, thm-continuous-implies-integrable, lem-integrability-on-a-subinterval, def-continuity-real, def-darboux-integral, def-oriented-integral, def-max-min, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "zero integral forces vanishing, for continuous $f \\ge 0$"
proof_strategy: contradiction
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.100, problem-set solutions on the Riemann integral"
      url: "https://math.mit.edu/~rbm/18.100-F02.HMW/HMW7s.pdf"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]) with $f(x) \ge 0$ for every $x \in [a,b]$ and

$$\int_a^b f \;=\; 0 .$$

Then $f(x) = 0$ for every $x \in [a,b]$.

**This is the exact repair of a published false statement.** Without continuity
the conclusion fails: [[fs-nonnegative-integrable-with-zero-integral-vanishes]],
on the companion page of *The Riemann Integral*, exhibits a nonnegative
integrable function with integral $0$ that is positive at every rational point.
The remark there says that the continuous case is true and that its proof was
not available at that point in the reading order, because additivity over
subintervals had not been proved. It is proved now
([[thm-additivity-over-subintervals]]), and this item is that proof.

## Facts & Assumptions

**Given:** Reals $a<b$ and a continuous $f : [a,b] \to \mathbb{R}$ with $f \ge 0$ on $[a,b]$ and $\int_a^b f = 0$.

[A1] There is $c \in [a,b]$ with $f(c) > 0$.

[L1] $f$ is integrable on $[a,b]$ and on every closed subinterval with distinct endpoints ([[thm-continuous-implies-integrable]], [[lem-integrability-on-a-subinterval]], [[def-darboux-integral]]).

[L2] Continuity at $c$: for every real $\eta>0$ there is a real $\delta>0$ such that every $x \in [a,b]$ with $|x-c|<\delta$ satisfies $|f(x)-f(c)| < \eta$ ([[def-continuity-real]]).

[L3] Additivity: for $a \le p \le q \le b$, $\int_a^b f = \int_a^p f + \int_p^q f + \int_q^b f$, the degenerate pieces being $0$ ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]]).

[L4] If $u \ge 0$ is integrable on $[p,q]$ with $p<q$ then $\int_p^q u \ge 0$; and if $u \ge \kappa$ there then $\int_p^q u \ge \kappa(q-p)$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L5] Ordered-field arithmetic and minima: the order is total and transitive, $\min\{s,t\}$ and $\max\{s,t\}$ are reals lying appropriately, a product of two positive reals is positive, and adding constants preserves inequalities ([[def-max-min]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f$ does not vanish identically; since $f \ge 0$, this gives $c \in [a,b]$ with $f(c) > 0$, which is [A1]. [assume-contra, given]

1.2 By [L2] with $\eta := f(c)\cdot 2^{-1} > 0$, fix a real $\delta > 0$ such that every $x \in [a,b]$ with $|x-c| < \delta$ satisfies $|f(x)-f(c)| < f(c)\cdot 2^{-1}$, hence $f(x) > f(c)\cdot 2^{-1}$. [A1, L2, L5, choose]

2.1 Put $p := \max\{a,\ c - \delta\cdot 2^{-1}\}$ and $q := \min\{b,\ c + \delta\cdot2^{-1}\}$. Then $a \le p \le c \le q \le b$, and $[p,q] \subseteq [a,b]$. [step 1.2, A1, L5, construct]

3.1 $p < q$: indeed $p \le c \le q$, and $p = q$ would force $p = c = q$, hence $c = \max\{a, c-\delta\cdot2^{-1}\}$ and $c = \min\{b, c+\delta\cdot 2^{-1}\}$, so $c = a$ and $c = b$, contradicting $a<b$. [step 2.1, L5]

3.2 Every $x \in [p,q]$ satisfies $|x - c| \le \delta\cdot 2^{-1} < \delta$, so $f(x) > f(c)\cdot2^{-1}$ there by step 1.2. [step 1.2, step 2.1, L5]

4.1 Hence $\int_p^q f \ge f(c)\cdot 2^{-1}\,(q-p) > 0$ by [L4] and step 3.1. [step 3.1, step 3.2, L1, L4, L5]

5.1 By [L3] and [L4], $\int_a^b f = \int_a^p f + \int_p^q f + \int_q^b f \ge \int_p^q f > 0$, the first and third pieces being $\ge 0$ because $f \ge 0$ there, or $0$ when degenerate. [step 4.1, L1, L3, L4, L5]

6.1 This contradicts the hypothesis $\int_a^b f = 0$, so no such $c$ exists and $f(x) = 0$ for every $x \in [a,b]$. [step 5.1, given, discharge-contradiction] ∎

## Remarks

- **The nonnegativity on the two outer pieces is cited, not assumed away.** The usual one-line version writes "so $\int_a^b f \ge \int_p^q f$" without saying why; what makes that step legitimate is that $f \ge 0$ on $[a,p]$ and on $[q,b]$ too, so both of those integrals are $\ge 0$ ([[thm-monotonicity-of-the-integral]]). Without a sign hypothesis outside $[p,q]$ the argument would fail.

- **The case where $c$ is an endpoint is covered by the construction, not by a case split.** Taking $p$ and $q$ as a maximum and a minimum with $a$ and $b$ makes $[p,q]$ a one-sided neighbourhood of $c$ when $c = a$ or $c = b$, and step 3.1 is what checks that it is still nondegenerate.

- **Continuity is used only at the single point $c$.** The proof needs no uniform continuity and no continuity anywhere else, so the statement could be sharpened to: a nonnegative integrable $f$ with $\int_a^b f = 0$ vanishes at every point of continuity. That sharpening is not asserted as a separate clause because nothing on this page uses it.
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

### `thm-substitution`

````markdown
---
id: thm-substitution
kind: theorem
title: "Substitution: if $\\varphi$ is differentiable on $[c,d]$ with $\\varphi'$ integrable and $f$ is continuous on an interval containing $\\varphi([c,d])$, then $\\int_{\\varphi(c)}^{\\varphi(d)} f = \\int_c^d (f\\circ\\varphi)\\,\\varphi'$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-primitives-of-a-continuous-function, thm-ftc-second-part, thm-chain-rule, thm-composition-with-a-continuous-function, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-continuous-implies-integrable, cor-continuous-image-of-an-interval-is-an-interval, def-oriented-integral, def-derivative, def-continuity-real, cor-differentiable-implies-continuous, def-interval, def-limit-point-r, def-darboux-integral, def-max-min]
forward_refs: [fs-substitution-holds-for-every-integrable-integrand]
justified_by: []
aliases: [thm-change-of-variables-one-dimensional]
landmark: true
short: "substitution"
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
    - title: "Integration by substitution (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integration_by_substitution"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $c < d$ be reals and let $\varphi : [c,d] \to \mathbb{R}$ be differentiable
at every point of $[c,d]$ as a function on $[c,d]$ ([[def-derivative]]), with
$\varphi'$ integrable on $[c,d]$ ([[def-darboux-integral]]). Let
$J \subseteq \mathbb{R}$ be order-convex with at least two elements
([[def-interval]]) with $\varphi[\,[c,d]\,] \subseteq J$, and let $f : J \to
\mathbb{R}$ be continuous on $J$ ([[def-continuity-real]]).

Then $(f\circ\varphi)\,\varphi'$ is integrable on $[c,d]$ and

$$\int_{\varphi(c)}^{\varphi(d)} f \;=\; \int_c^d (f\circ\varphi)\,\varphi' ,$$

the left-hand integral being the oriented one of [[def-oriented-integral]].

**Neither injectivity nor monotonicity of $\varphi$ is assumed**, and that is
exactly why the left-hand side is written with oriented limits: $\varphi(d)$ may
lie below $\varphi(c)$, and $\varphi$ may return to the same value many times.
The proof runs through a primitive of $f$ and the chain rule, and no inverse
function is ever formed.

**Continuity of $f$ is a hypothesis and cannot be weakened to integrability.**
With $f$ merely integrable the composite $f \circ \varphi$ need not be
integrable at all, so the right-hand side need not exist; that is
the false statement that weakens it on the companion page.

## Facts & Assumptions

**Given:** Reals $c < d$, a differentiable $\varphi : [c,d] \to \mathbb{R}$ with $\varphi'$ integrable, an order-convex $J$ with at least two elements containing $\varphi[\,[c,d]\,]$, and a continuous $f : J \to \mathbb{R}$.

[L1] A function differentiable at every point of $[c,d]$ is continuous there, and a continuous function on $[c,d]$ is integrable ([[cor-differentiable-implies-continuous]], [[thm-continuous-implies-integrable]], [[def-continuity-real]]).

[L2] For a continuous $u$ on $[c,d]$ with $c \le d$, $u[\,[c,d]\,] = [m,M]$ with $m = \min u[\,[c,d]\,]$ and $M = \max u[\,[c,d]\,]$ ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 2, [[def-max-min]]).

[L3] A continuous function on an order-convex set with at least two elements has a primitive there, two primitives differ by a constant, and $\int_p^q f = G(q)-G(p)$ for $p<q$ in that set and any primitive $G$ ([[cor-primitives-of-a-continuous-function]]).

[L4] Chain rule: if $\psi$ is differentiable at $t$, $\psi(t)$ is a limit point of the domain of $H$ and $H$ is differentiable at $\psi(t)$, then $H\circ\psi$ is differentiable at $t$ with $(H\circ\psi)'(t) = H'(\psi(t))\psi'(t)$; every point of a nondegenerate order-convex set is a limit point of it ([[thm-chain-rule]], [[def-limit-point-r]], [[def-interval]], [[def-derivative]]).

[L5] If $w$ is integrable on $[c,d]$ with values in $[m,M]$ and $g$ is continuous on $[m,M]$ then $g\circ w$ is integrable ([[thm-composition-with-a-continuous-function]]); a restriction of a continuous function is continuous ([[def-continuity-real]]).

[L6] A product of two integrable functions on $[c,d]$ is integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L7] If $H$ is differentiable at every point of $[c,d]$ with $H'$ integrable there, then $\int_c^d H' = H(d)-H(c)$ ([[thm-ftc-second-part]]).

[L8] With oriented limits, $\int_q^p f = -\int_p^q f$ and $\int_p^p f = 0$ ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 $\varphi$ is continuous on $[c,d]$ and integrable there by [L1]. [given, L1]

1.2 By [L3] fix a primitive $F : J \to \mathbb{R}$ of $f$, so $F$ is differentiable at every point of $J$ with $F' = f$ there. [given, L3, choose]

2.1 By [L2], $\varphi[\,[c,d]\,] = [m,M]$ with $m \le M$, and $[m,M] \subseteq J$ by hypothesis. [step 1.1, given, L2]

2.2 **The left-hand side is the same increment.** If $\varphi(c) < \varphi(d)$ then both lie in $J$, so $[\varphi(c),\varphi(d)] \subseteq J$ and [L3] gives $\int_{\varphi(c)}^{\varphi(d)} f = F(\varphi(d))-F(\varphi(c))$. If $\varphi(c) = \varphi(d)$ both sides are $0$ by [L8]. If $\varphi(c) > \varphi(d)$ then the case already treated gives $\int_{\varphi(d)}^{\varphi(c)} f = F(\varphi(c))-F(\varphi(d))$, and [L8] negates both sides. [step 1.2, L3, L8]

3.1 For every $t \in [c,d]$ the point $\varphi(t)$ lies in $J$, which is a nondegenerate order-convex set, so $\varphi(t)$ is a limit point of $J$ and [L4] applies: $F\circ\varphi$ is differentiable at $t$ with $(F\circ\varphi)'(t) = F'(\varphi(t))\varphi'(t) = f(\varphi(t))\,\varphi'(t)$. [step 2.1, step 1.2, given, L4]

3.2 $f$ restricted to $[m,M]$ is continuous, so by [L5] applied to $w := \varphi$ the composite $f\circ\varphi$ is integrable on $[c,d]$. [step 1.1, step 2.1, given, L5]

4.1 Hence $(f\circ\varphi)\varphi'$ is integrable on $[c,d]$ by [L6], $\varphi'$ being integrable by hypothesis. [step 3.2, given, L6]

5.1 By [L7] applied to $H := F\circ\varphi$, whose derivative is $(f\circ\varphi)\varphi'$ by step 3.1 and is integrable by step 4.1, $\int_c^d (f\circ\varphi)\varphi' = F(\varphi(d)) - F(\varphi(c))$. [step 3.1, step 4.1, L7]

6.1 Comparing steps 5.1 and 2.2 gives $\int_{\varphi(c)}^{\varphi(d)} f = \int_c^d (f\circ\varphi)\varphi'$. [step 5.1, step 2.2] ∎

## Remarks

- **[[def-oriented-integral]] is what makes step 2.2 legal.** Without the orientation convention the symbol $\int_{\varphi(c)}^{\varphi(d)} f$ would be undefined whenever $\varphi(d) \le \varphi(c)$, and the theorem would have to carry a monotonicity hypothesis it does not need.

- **Two integrability facts are checked, not assumed.** That $f\circ\varphi$ is integrable is [[thm-composition-with-a-continuous-function]] with the hypotheses in the order that theorem requires — the continuous function is the outer one — and that the product with $\varphi'$ is integrable is the product clause of [[cor-integrability-of-absolute-values-products-and-lattice-operations]]. Neither is automatic, and the companion page's false statement is exactly the claim that the first of them survives weakening $f$ to an integrable function.

- **Where the more familiar hypotheses sit.** If $\varphi$ is continuously differentiable then $\varphi'$ is integrable automatically, and if $\varphi$ is in addition strictly monotone then the substitution can be read in either direction; neither refinement is needed above, and neither is claimed.

- **Forward reference, orientation only.** The false statement that weakens the continuity of $f$ to integrability is [[fs-substitution-holds-for-every-integrable-integrand]] on the companion page; nothing above depends on it.
````

