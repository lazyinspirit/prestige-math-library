## Wave 10 target — `fs-bounded-implies-riemann-integrable`

Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).

Normalized current SHA-256: `998aa51a5c5a9acf2ed29090b40b0f75764a13b520f7ed5047e5fc70da87b6de`

## Complete current target

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

## Current Wave 10 provenance determination

```json
{
  "id": "fs-bounded-implies-riemann-integrable",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf",
    "https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter20/section04.html"
  ],
  "rationale": "The sources use the bounded Dirichlet indicator to show boundedness alone does not imply Riemann integrability. The item formulates and refutes that standard false statement via Darboux sums.",
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
      "source": "lem-q-and-irrationals-dense-r",
      "source_section": "Statement",
      "quote": "Write $\\mathbb{Q}_{\\mathbb{R}}$ for the image of $\\mathbb{Q}$ in $\\mathbb{R}$\nunder the canonical embedding $q \\mapsto \\hat q$ ([[lem-rat-embeds-dense]]), the\nset usually written $\\mathbb{Q}$ once the identification is made, and put\n$X := \\mathbb{R} \\setminus \\mathbb{Q}_{\\mathbb{R}}$ for the irrationals. Then:\n\n1. $\\mathbb{Q}_{\\mathbb{R}}$ is dense in $\\mathbb{R}$, that is,\n   $\\overline{\\mathbb{Q}_{\\mathbb{R}}} = \\mathbb{R}$ ([[def-limit-point-r]]);\n2. $X$ is dense in $\\mathbb{R}$;\n3. every nonempty open subset of $\\mathbb{R}$ is uncountable\n   ([[def-countable]]).\n\nClaim 2 is not a symmetry of claim 1: the rationals are dense because they are\n*constructed* to approximate, whereas the irrationals are dense because there are\ntoo many points in any interval for a countable set to exhaust it, which is why\nclaim 3 is proved alongside and used for it.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in\n[[def-interior-closure-boundary-r]] and derived set $A'$ as in\n[[def-limit-point-r]]. Write\n\n$$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$\n\nfor the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:\n\n1. $\\overline{A} = E$.\n2. $\\overline{A} = A \\cup A'$.\n3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it\n   contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$.\n4. $A$ is closed if and only if $A = \\overline{A}$, if and only if\n   $A' \\subseteq A$.\n\nClaim 3 is the content of the definition of $\\overline{A}$ and is restated here\nso that the four descriptions stand together; claims 1, 2 and 4 are the ones\nthat carry work.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with open and closed sets as in\n[[def-open-and-closed-in-r]].\n\n- The **interior** of $A$ is the union of all open subsets of $A$:\n  $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$\n- The **closure** of $A$ is the intersection of all closed supersets of $A$:\n  $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$.\n- The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.\n\n**Both operators are well defined and deliver what their names claim.** The\nfamily whose union defines $A^{\\circ}$ always contains $\\varnothing$, and the\nfamily whose intersection defines $\\overline{A}$ always contains $\\mathbb{R}$,\nso the second family is nonempty and both expressions denote subsets of\n$\\mathbb{R}$ without appeal to any convention about empty unions or\nintersections. Moreover:\n\n- $A^{\\circ}$ is **open**, being a union of open sets\n  ([[thm-open-set-algebra-r]], claim 1), and $A^{\\circ} \\subseteq A$, since\n  every set in the family is a subset of $A$. It is therefore the **largest**\n  open subset of $A$: any open $U \\subseteq A$ is a member of the family and so\n  $U \\subseteq A^{\\circ}$.\n- $\\overline{A}$ is **closed**, being an intersection of a nonempty family of\n  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \\subseteq\n  \\overline{A}$, since every set in the family contains $A$. It is therefore the\n  **smallest** closed superset of $A$: any closed $F \\supseteq A$ is a member of\n  the family and so $\\overline{A} \\subseteq F$.\n\n**Pointwise description of the interior.** For $x \\in \\mathbb{R}$,\n\n$$x \\in A^{\\circ} \\iff \\text{there is } \\varepsilon > 0 \\text{ with } N_\\varepsilon(x) \\subseteq A .$$\n\nIf $x \\in A^{\\circ}$ then, $A^{\\circ}$ being open and containing $x$, there is\n$\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq A^{\\circ} \\subseteq A$.\nConversely if $N_\\varepsilon(x) \\subseteq A$ then $N_\\varepsilon(x)$ is an open\nsubset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence\n$x \\in N_\\varepsilon(x) \\subseteq A^{\\circ}$ ([[def-neighbourhood-r]]).\n\nThe corresponding pointwise description of the closure is not a definitional\nmatter and is proved separately, as [[thm-closure-characterisations-r]].",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-partition-and-refinement",
      "source_section": "Definition",
      "quote": "**Standing hypothesis for this page.** Throughout, $\\mathbb{R}$ is the complete\nordered field ([[def-complete-ordered-field]], [[def-ordered-field]]),\n$\\mathbb{N}$ is the set of natural numbers and **contains $0$**\n([[def-natural-numbers]], [[def-nat-order]]), $\\iota : \\mathbb{N} \\to \\mathbb{R}$\nis the canonical natural ([[def-canonical-natural]]), and $a, b$ are reals with\n\n$$a \\;<\\; b .$$\n\nIntervals and their lengths are those of [[def-interval]]; finite sums are those\nof [[def-finite-sum]], indexed as $\\sum_{i<n}$ over $i \\in \\mathbb{N}$.\n\n### Partitions\n\nA **partition of $[a,b]$** is a pair $P = (n, t)$ consisting of a natural number\n$n \\ge 1$ and a sequence $t : \\mathbb{N} \\to \\mathbb{R}$ ([[def-sequence]]) with\n\n$$t_0 = a, \\qquad t_i < t_{i+1} \\ \\text{ for every } i < n, \\qquad t_k = b \\ \\text{ for every } k \\ge n .$$\n\nThe tail convention on the third clause is bookkeeping only: it makes $t$ a\ngenuine sequence, so that the finite-sum laws of [[lem-finite-sum-laws]] apply to\nit verbatim, and it costs nothing because no index above $n$ is ever read. The\nfirst two clauses say exactly that\n\n$$a \\;=\\; t_0 \\;<\\; t_1 \\;<\\; \\dots \\;<\\; t_n \\;=\\; b ,$$\n\nthe last equality because $t_n = b$ by the third clause. In particular\n$i \\mapsto t_i$ is strictly increasing, hence injective, on\n$\\{\\, i \\in \\mathbb{N} : i \\le n \\,\\}$ ([[def-injection-surjection-bijection]]),\nand $a \\le t_i \\le b$ for every $i \\le n$.\n\nThe **point set** of $P$ is the finite set\n\n$$\\operatorname{pts}(P) \\;:=\\; \\{\\, t_i \\ : \\ i \\le n \\,\\} \\;\\subseteq\\; [a,b], \\qquad a, b \\in \\operatorname{pts}(P) .$$\n\nThe **subintervals** of $P$ are\n\n$$I_i \\;:=\\; [\\,t_i,\\ t_{i+1}\\,] \\qquad (i < n),$$\n\nand their **lengths** are $\\Delta_i := t_{i+1} - t_i$. Each $\\Delta_i > 0$, so\neach $I_i$ is a nondegenerate closed bounded interval ([[def-interval]]). There\nare $n$ of them and they are indexed from $i = 0$, not from $i = 1$: the first\nsubinterval is $[t_0, t_1] = [a, t_1]$.\n\n**The lengths sum to $b - a$.** By the telescoping law, clause 5 of\n[[lem-finite-sum-laws]],\n\n$$\\sum_{i<n} \\Delta_i \\;=\\; \\sum_{i<n} (t_{i+1} - t_i) \\;=\\; t_n - t_0 \\;=\\; b - a .$$\n\n**The mesh.** The set $\\{\\, \\Delta_i : i < n \\,\\}$ is a nonempty finite set of\nreals, nonempty because $n \\ge 1$, so it has a maximum\n([[lem-finite-set-has-max]], [[def-max-min]]). The **mesh** of $P$ is\n\n$$\\|P\\| \\;:=\\; \\max\\{\\, \\Delta_i \\ : \\ i < n \\,\\} \\;>\\; 0 ,$$\n\nand $\\Delta_i \\le \\|P\\|$ for every $i < n$.\n\n**The uniform partition.** For a natural $N \\ge 1$, the **uniform partition of\n$[a,b]$ into $N$ parts** is $U_N := (N, t)$ with\n\n$$t_i \\;:=\\; a + \\iota(i)\\,\\frac{b-a}{\\iota(N)} \\quad (i \\le N), \\qquad t_k := b \\quad (k \\ge N).$$\n\nThis is a partition: $t_0 = a$; $t_N = a + (b-a) = b$; and $t_{i+1} - t_i =\n(b-a)/\\iota(N) > 0$ for $i < N$, because $\\iota(N) > 0$ and $\\iota(i+1) =\n\\iota(i) + 1$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]). Its\nsubinterval lengths are all equal to $(b-a)/\\iota(N)$, so\n\n$$\\|U_N\\| \\;=\\; \\frac{b-a}{\\iota(N)} .$$\n\n### A partition is determined by its point set\n\n**Claim.** If $P = (n,t)$ and $P' = (n', t')$ are partitions of $[a,b]$ with\n$\\operatorname{pts}(P) = \\operatorname{pts}(P')$, then $n = n'$ and $t_i = t'_i$\nfor every $i \\le n$.\n\n*Proof.* First, $t_i = t'_i$ for every $i \\le \\min\\{n,n'\\}$, by induction on $i$\n([[thm-induction-principle]]). For $i = 0$ both equal $a$. Suppose $t_j = t'_j$\nfor all $j \\le i$ and $i + 1 \\le \\min\\{n,n'\\}$. The set\n$S := \\{\\, x \\in \\operatorname{pts}(P) : x > t_i \\,\\}$ has $t_{i+1}$ as its least\nelement: $t_{i+1} \\in S$, and any $x \\in S$ is $t_j$ for some $j \\le n$ with\n$t_j > t_i$, which forces $j > i$ because $t$ is increasing on indices $\\le n$,\nhence $j \\ge i+1$ and $x = t_j \\ge t_{i+1}$. The same argument in $P'$ makes\n$t'_{i+1}$ the least element of\n$\\{\\, x \\in \\operatorname{pts}(P') : x > t'_i \\,\\}$, which is the same set $S$,\nsince the point sets agree and $t'_i = t_i$. A set has at most one least element\n([[def-max-min]]), so $t_{i+1} = t'_{i+1}$.\n\nSecond, $n = n'$. If $n < n'$ then $t'_n = t_n = b$ by the previous paragraph,\nwhile $t'_n < t'_{n'} = b$ because $t'$ is increasing on indices $\\le n'$ and\n$n < n'$; that is impossible. Exchanging the roles of $P$ and $P'$ rules out\n$n' < n$. $\\square$\n\nSo the map $P \\mapsto \\operatorname{pts}(P)$ is injective, and a partition may be\nnamed by its point set whenever one is exhibited.\n\n### Inserting a point\n\nLet $P = (n,t)$ be a partition of $[a,b]$ and let $c \\in [a,b]$. Define a\npartition $P + c$ of $[a,b]$ as follows.\n\n- If $c \\in \\operatorname{pts}(P)$, put $P + c := P$.\n- Otherwise $c \\ne a$ and $c \\ne b$, so $a < c < b$. The set\n  $T := \\{\\, t_i : i \\le n \\text{ and } t_i < c \\,\\}$ is a nonempty finite set of\n  reals, nonempty because $t_0 = a < c$, so it has a maximum\n  ([[lem-finite-set-has-max]]); let $i_0 \\le n$ be the unique index with\n  $t_{i_0} = \\max T$, unique because $t$ is injective on indices $\\le n$. Then\n  $i_0 < n$, since $t_n = b > c$ puts $t_n \\notin T$; and\n  $$t_{i_0} \\;<\\; c \\;<\\; t_{i_0+1},$$\n  the right inequality because $t_{i_0+1} \\ne c$ (as $c \\notin \\operatorname{pts}(P)$)\n  and $t_{i_0+1} < c$ would put $t_{i_0+1} \\in T$ with $t_{i_0+1} > t_{i_0} = \\max T$.\n  Put $P + c := (n+1, s)$ with\n  $$s_i := t_i \\ (i \\le i_0), \\qquad s_{i_0+1} := c, \\qquad s_i := t_{i-1} \\ (i_0 + 2 \\le i \\le n+1), \\qquad s_k := b \\ (k \\ge n+1).$$\n\nIn both cases $P + c$ is a partition of $[a,b]$ and\n\n$$\\operatorname{pts}(P + c) \\;=\\; \\operatorname{pts}(P) \\cup \\{c\\}, \\qquad \\|P+c\\| \\;\\le\\; \\|P\\| .$$\n\nThe displayed identity is immediate from the two cases. For the mesh: in the\nfirst case nothing changes; in the second the list of subinterval lengths of\n$P + c$ is that of $P$ with $\\Delta_{i_0}$ replaced by the two numbers\n$c - t_{i_0}$ and $t_{i_0+1} - c$, each of which is smaller than\n$\\Delta_{i_0} = (c - t_{i_0}) + (t_{i_0+1} - c)$ because the other is positive.\nSo every length of $P + c$ is at most a length of $P$, and the maximum cannot\nincrease. Finally the index count grows by exactly $1$ in the second case and\nnot at all in the first.\n\n### Refinement and the common refinement\n\n$P'$ **refines** $P$, and is a **refinement** of $P$, when\n\n$$\\operatorname{pts}(P) \\;\\subseteq\\; \\operatorname{pts}(P') .$$\n\nLet $P = (n,t)$ and $Q = (m,s)$ be partitions of $[a,b]$. Applying the recursion\ntheorem ([[thm-recursion]]) to the set $\\mathbb{N} \\times \\mathcal{P}_{[a,b]}$,\nwhere $\\mathcal{P}_{[a,b]}$ is the set of partitions of $[a,b]$, with starting\nelement $(0, P)$ and the map $(j, R) \\mapsto (j+1,\\ R + s_j)$ — legitimate\nbecause $s_j \\in [a,b]$ for every $j \\in \\mathbb{N}$ — gives a unique family\n$(R_j)_{j \\in \\mathbb{N}}$ of partitions with $R_0 = P$ and $R_{j+1} = R_j + s_j$.\nThe **common refinement** of $P$ and $Q$ is\n\n$$P \\vee Q \\;:=\\; R_{m+1} .$$\n\n**Its point set is the union.** By induction on $j$ ([[thm-induction-principle]]),\n$\\operatorname{pts}(R_j) = \\operatorname{pts}(P) \\cup \\{\\, s_l : l < j \\,\\}$;\ntaking $j = m+1$ gives\n\n$$\\operatorname{pts}(P \\vee Q) \\;=\\; \\operatorname{pts}(P) \\cup \\operatorname{pts}(Q).$$\n\nHence $P \\vee Q$ refines both $P$ and $Q$; by the uniqueness claim above it is\nthe **only** partition with that point set, so $P \\vee Q = Q \\vee P$, and\n\n$$P' \\text{ refines } P \\quad \\Longrightarrow \\quad P \\vee P' = P' ,$$\n\nsince then $\\operatorname{pts}(P) \\cup \\operatorname{pts}(P') =\n\\operatorname{pts}(P')$.\n\n**Two size bounds, both used later.** Writing $n_R$ for the first component of a\npartition $R$:\n\n$$\\|P \\vee Q\\| \\;\\le\\; \\|P\\|, \\qquad n_{P \\vee Q} \\;\\le\\; n_P + n_Q - 1 .$$\n\nThe first is the mesh bound above applied $m+1$ times. For the second, each\ninsertion raises the index count by at most $1$, and the two insertions of\n$s_0 = a$ and $s_m = b$ raise it by $0$, since $a$ and $b$ already lie in\n$\\operatorname{pts}(P)$ and hence in $\\operatorname{pts}(R_j)$ for every $j$; so\nat most $m - 1$ of the $m+1$ insertions increase it.\n\n### The index map of a refinement\n\nLet $P' = (n',t')$ refine $P = (n,t)$. For each $i \\le n$ the point $t_i$ lies in\n$\\operatorname{pts}(P')$, so there is exactly one $\\varphi(i) \\le n'$ with\n$t'_{\\varphi(i)} = t_i$, uniqueness because $t'$ is injective on indices $\\le n'$.\nThe resulting map $\\varphi$ satisfies\n\n$$\\varphi(0) = 0, \\qquad \\varphi(n) = n', \\qquad \\varphi(i) < \\varphi(i+1) \\ \\ (i < n),$$\n\nthe first two because $t'_0 = a = t_0$ and $t'_{n'} = b = t_n$ together with\ninjectivity, and the third because $t_i < t_{i+1}$ and $t'$ is increasing on\nindices $\\le n'$. In particular $n \\le n'$. Moreover, for $i < n$ and\n$\\varphi(i) \\le j < \\varphi(i+1)$,\n\n$$I'_j \\;=\\; [\\,t'_j,\\ t'_{j+1}\\,] \\;\\subseteq\\; [\\,t_i,\\ t_{i+1}\\,] \\;=\\; I_i ,$$\n\nbecause $t_i = t'_{\\varphi(i)} \\le t'_j$ and $t'_{j+1} \\le t'_{\\varphi(i+1)} = t_{i+1}$.\n\n**The blocks are counted by telescoping.** By clause 5 of\n[[lem-finite-sum-laws]],\n$\\sum_{i<n}\\big(\\varphi(i+1) - \\varphi(i)\\big) = \\varphi(n) - \\varphi(0) = n'$,\nso, subtracting $\\sum_{i<n} 1 = n$,\n\n$$\\sum_{i<n} \\big(\\varphi(i+1) - \\varphi(i) - 1\\big) \\;=\\; n' - n ,$$\n\na sum of $n$ nonnegative integers, one for each block, which vanishes exactly at\nthe blocks consisting of a single index. This identity is the whole content of\nthe quantitative bound in [[lem-refinement-inequalities]], and it is also why\n$n \\le n'$.\n\nFinally, the lengths inside a block sum to the length of the block:\n\n$$\\sum_{j = \\varphi(i)}^{\\varphi(i+1)-1} \\Delta'_j \\;=\\; t'_{\\varphi(i+1)} - t'_{\\varphi(i)} \\;=\\; t_{i+1} - t_i \\;=\\; \\Delta_i \\qquad (i < n),$$\n\nagain by telescoping, applied to the sequence $l \\mapsto t'_{\\varphi(i)+l}$ and\nread through the index-shift convention of [[def-finite-sum]].",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-darboux-sums",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be **bounded**\n([[def-bounded-set]]), so that there is a real $M \\ge 0$ with $|f(x)| \\le M$ for\nevery $x \\in [a,b]$, and let $P = (n,t)$ be a partition of $[a,b]$ with\nsubintervals $I_i = [t_i, t_{i+1}]$ and lengths $\\Delta_i = t_{i+1} - t_i$ for\n$i < n$ ([[def-partition-and-refinement]]).\n\n### The two extreme values on a subinterval\n\nFor $i < n$ put\n\n$$m_i \\;:=\\; \\inf f[I_i], \\qquad M_i \\;:=\\; \\sup f[I_i], \\qquad f[I_i] \\;=\\; \\{\\, f(x) : x \\in I_i \\,\\} .$$\n\n**Both exist.** The set $f[I_i]$ is nonempty, because $t_i < t_{i+1}$ makes $I_i$\nnonempty ([[def-interval]]), and it is bounded, because $|f(x)| \\le M$ for every\n$x$ ([[def-bounded-set]]). A nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]); each is unique, so the notations\n$\\inf f[I_i]$ and $\\sup f[I_i]$ name single real numbers ([[lem-sup-unique]]).\n\n**They bracket the values, and each other.** For $x \\in I_i$,\n\n$$-M \\;\\le\\; m_i \\;\\le\\; f(x) \\;\\le\\; M_i \\;\\le\\; M ,$$\n\nthe outer inequalities because $-M$ is a lower bound and $M$ an upper bound of\n$f[I_i]$, and the middle ones by the definitions of infimum and supremum. In\nparticular $m_i \\le M_i$ and $M_i - m_i \\le 2M$.\n\nThe dependence of $m_i$ and $M_i$ on $f$ and on $P$ is suppressed in the\nnotation, as is customary; where two partitions are in play the sums below carry\nthe partition and the extreme values are written out.\n\n### The two Darboux sums\n\n$$L(f,P) \\;:=\\; \\sum_{i<n} m_i \\,\\Delta_i, \\qquad U(f,P) \\;:=\\; \\sum_{i<n} M_i \\,\\Delta_i ,$$\n\nthe finite sums of [[def-finite-sum]], indexed by $i \\in \\mathbb{N}$ with\n$i < n$. Both are real numbers, being finite sums of reals, and\n\n$$L(f,P) \\;\\le\\; U(f,P) ,$$\n\nby monotonicity of finite sums, clause 4 of [[lem-finite-sum-laws]], since\n$m_i \\Delta_i \\le M_i \\Delta_i$ for every $i < n$: multiplying $m_i \\le M_i$ by\n$\\Delta_i > 0$ preserves the inequality ([[def-ordered-field]]).\n\n### The gap on a subinterval is the oscillation there\n\nFor every $i < n$,\n\n$$M_i - m_i \\;=\\; \\omega_f(I_i) \\;=\\; \\sup\\{\\, |f(x) - f(y)| \\ : \\ x, y \\in I_i \\,\\} ,$$\n\nthe oscillation of $f$ on the set $I_i$ ([[def-oscillation]]). The supremum is a\nreal number here rather than an extended one, because $f$ is bounded\n([[def-oscillation]], [[def-extended-reals]]). The identity is proved in two\ninequalities.\n\n*The oscillation is at most the gap.* For $x, y \\in I_i$ both $f(x)$ and $f(y)$\nlie in $[m_i, M_i]$, so $f(x) - f(y) \\le M_i - m_i$ and\n$f(y) - f(x) \\le M_i - m_i$, whence $|f(x) - f(y)| \\le M_i - m_i$\n([[lem-of-abs-value]]). So $M_i - m_i$ is an upper bound of the set whose\nsupremum is $\\omega_f(I_i)$.\n\n*The gap is at most the oscillation.* Let $\\varepsilon > 0$ be real. By the\n$\\varepsilon$-characterisations of the supremum and the infimum\n([[lem-sup-epsilon]], [[lem-inf-epsilon]]) there are $x, y \\in I_i$ with\n$f(x) > M_i - \\varepsilon/2$ and $f(y) < m_i + \\varepsilon/2$; then\n\n$$|f(x) - f(y)| \\;\\ge\\; f(x) - f(y) \\;>\\; (M_i - m_i) - \\varepsilon ,$$\n\nso $\\omega_f(I_i) > (M_i - m_i) - \\varepsilon$. As $\\varepsilon > 0$ was\narbitrary, $\\omega_f(I_i) \\ge M_i - m_i$: otherwise\n$\\varepsilon := (M_i - m_i) - \\omega_f(I_i)$ would be positive and give\n$\\omega_f(I_i) > \\omega_f(I_i)$.\n\nThis identity is what connects the Darboux machinery to the pointwise\noscillation of [[def-oscillation]], and it is the hinge of\n[[thm-lebesgue-criterion]].",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-darboux-integral",
      "source_section": "Definition",
      "quote": "Let $a < b$ be reals and let $f : [a,b] \\to \\mathbb{R}$ be bounded\n([[def-bounded-set]]). Write $\\mathcal{P}$ for the set of all partitions of\n$[a,b]$ ([[def-partition-and-refinement]]) and put\n\n$$\\mathcal{L} \\;:=\\; \\{\\, L(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}, \\qquad \\mathcal{U} \\;:=\\; \\{\\, U(f,P) \\ : \\ P \\in \\mathcal{P} \\,\\}$$\n\nfor the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).\n\n### Both extrema exist\n\n**$\\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$\nfor $k \\ge 1$ is a partition of $[a,b]$, since $a < b$. So $\\mathcal{L}$ and\n$\\mathcal{U}$ are nonempty.\n\n**$\\mathcal{L}$ is bounded above and $\\mathcal{U}$ is bounded below.** Fix any\n$Q \\in \\mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],\n$L(f,P) \\le U(f,Q)$ for every $P \\in \\mathcal{P}$, so $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$; and $L(f,Q) \\le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower\nbound of $\\mathcal{U}$.\n\nHence a nonempty set bounded above has a supremum\n([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum\n([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).\nThe **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real\nnumbers\n\n$$\\underline{\\int_a^b} f \\;:=\\; \\sup \\mathcal{L} \\;=\\; \\sup_{P} L(f,P), \\qquad \\overline{\\int_a^b} f \\;:=\\; \\inf \\mathcal{U} \\;=\\; \\inf_{P} U(f,P) .$$\n\n### The lower integral never exceeds the upper one\n\n$$\\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f .$$\n\nIndeed, for each fixed $Q \\in \\mathcal{P}$ the number $U(f,Q)$ is an upper bound\nof $\\mathcal{L}$, so the least upper bound satisfies\n$\\underline{\\int_a^b} f \\le U(f,Q)$. As $Q$ was arbitrary, $\\underline{\\int_a^b}f$\nis a lower bound of $\\mathcal{U}$, and the greatest lower bound satisfies\n$\\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f$ ([[def-infimum]]).\n\nMoreover, for **every** partition $P$,\n\n$$L(f,P) \\;\\le\\; \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f \\;\\le\\; U(f,P) ,$$\n\nthe outer inequalities because a member of a set is at most its supremum and at\nleast its infimum.\n\n### Integrability\n\n$f$ is **Darboux integrable on $[a,b]$**, and on this page simply\n**integrable**, when\n\n$$\\underline{\\int_a^b} f \\;=\\; \\overline{\\int_a^b} f ,$$\n\nand then the common value is written\n\n$$\\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f(x)\\,\\mathrm{d}x ,$$\n\nthe **integral of $f$ over $[a,b]$**. It is a single well-determined real\nnumber, being the common value of two numbers each of which is unique\n([[lem-sup-unique]]). Without the displayed equality the symbol $\\int_a^b f$ is\nnot defined and is never written.\n\n**The inequality above is the whole difficulty.** By the previous paragraph\nintegrability is *never* a question of one integral exceeding the other, only of\nthe gap $\\overline{\\int_a^b} f - \\underline{\\int_a^b} f \\ge 0$ being $0$; and by\n[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be\nfound making $U(f,P) - L(f,P)$ small. Whether that is possible is settled\ncompletely, in terms of the discontinuities of $f$, by\n[[thm-lebesgue-criterion]].\n\n**\"Riemann integrable\" means the same thing here.** The definition above is\nDarboux's. Riemann's own definition, in terms of tagged partitions of small\nmesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same\nclass of functions with the same integral by [[thm-darboux-equals-riemann]].\nUntil that theorem is proved the two phrases are kept apart; after it they are\nused interchangeably, as they are throughout the literature.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a\n**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:\n\n- $\\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\\ell \\le s$ for\n  every $s \\in S$;\n- $\\ell' \\le \\ell$ for every lower bound $\\ell'$ of $S$.\n\nWritten out in one line:\n\n$$\\ell \\text{ is an infimum of } S \\iff \\big[(\\forall s \\in S)\\, \\ell \\le s\\big] \\text{ and } \\big[(\\forall \\ell' \\in \\mathbb{R})\\, \\big((\\forall s \\in S)\\, \\ell' \\le s\\big) \\Rightarrow \\ell' \\le \\ell\\big].$$\n\nAn infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write\n$\\inf S$ for it.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "fs-bounded-implies-riemann-integrable-step-1-1",
      "claim": "$g$ is bounded: $0 \\le g(x) \\le 1$ for every $x \\in [0,1]$, since $g$ takes only the values $0$ and $1$. So its Darboux sums and integrals are defined by [L3]. [given, L3]",
      "step": "1.1",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "fs-bounded-implies-riemann-integrable-step-1-2",
      "claim": "Every subinterval of every partition of $[0,1]$ contains both a rational and an irrational. Let $P = (n,t)$ be a partition and $i < n$; then $t_i < t_{i+1}$ by [L2], so with $c := (t_i + t_{i+1})\\cdot 2^{-1}$ and $\\rho := (t_{i+1}-t_i)\\cdot 2^{-1}$ one has $N_\\rho(c) \\subseteq (t_i,t_{i+1}) \\subseteq I_i$ by [L6], and $N_\\rho(c)$ meets $\\mathbb{Q}$ and meets $\\mathbb{R}\\setminus\\mathbb{Q}$ by [L1]. [L1, L2, L6]",
      "step": "1.2",
      "inputs": [
        "L2",
        "L6",
        "L1"
      ]
    },
    {
      "id": "fs-bounded-implies-riemann-integrable-step-2-1",
      "claim": "Hence $g[I_i] = \\{0,1\\}$ for every $i < n$, so $m_i = 0$ and $M_i = 1$ by [L4]. [step 1.2, given, L4]",
      "step": "2.1",
      "inputs": [
        "L4",
        "1.2"
      ]
    },
    {
      "id": "fs-bounded-implies-riemann-integrable-step-3-1",
      "claim": "Therefore $L(g,P) = \\sum_{i<n}0\\cdot\\Delta_i = 0$ and $U(g,P) = \\sum_{i<n}1\\cdot\\Delta_i = \\sum_{i<n}\\Delta_i = 1$, for **every** partition $P$ of $[0,1]$, by [L3], [L5] and [L2]. [step 2.1, L2, L3, L5]",
      "step": "3.1",
      "inputs": [
        "L3",
        "L5",
        "L2",
        "2.1"
      ]
    },
    {
      "id": "fs-bounded-implies-riemann-integrable-step-4-1",
      "claim": "The set of lower sums is $\\{0\\}$ and the set of upper sums is $\\{1\\}$, so $\\underline{\\int_0^1} g = 0$ and $\\overline{\\int_0^1} g = 1$ by [L4] and [L3]. Since $0 \\ne 1$, $g$ is not Riemann integrable on $[0,1]$. [step 3.1, L3, L4]",
      "step": "4.1",
      "inputs": [
        "L4",
        "L3",
        "3.1"
      ]
    },
    {
      "id": "fs-bounded-implies-riemann-integrable-step-5-1",
      "claim": "$g$ is a bounded function on $[0,1]$, an interval with $0 < 1$, and it is not Riemann integrable; so [A1] fails at $g$ and the claim is false. [step 1.1, step 4.1, A1] ∎",
      "step": "5.1",
      "inputs": [
        "A1",
        "1.1",
        "4.1"
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
      "evidence": "Step 1.1 explicitly keeps endpoints/interior points within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof introduces no witness selected from a merely asserted nonempty family."
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
    "source": "fs-bounded-implies-riemann-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-darboux-sums",
    "declared_target": "def-darboux-sums",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-bounded-implies-riemann-integrable",
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
    "source": "fs-bounded-implies-riemann-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "def-partition-and-refinement",
    "declared_target": "def-partition-and-refinement",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-bounded-implies-riemann-integrable",
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
    "source": "fs-bounded-implies-riemann-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
    "target": "lem-q-and-irrationals-dense-r",
    "declared_target": "lem-q-and-irrationals-dense-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-bounded-implies-riemann-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-bounded-implies-riemann-integrable",
    "sourcePage": "the-riemann-integral",
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
    "source": "fs-bounded-implies-riemann-integrable",
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
    "source": "fs-bounded-implies-riemann-integrable",
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
    "source": "fs-bounded-implies-riemann-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-bounded-implies-riemann-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-bounded-implies-riemann-integrable",
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
    "source": "fs-bounded-implies-riemann-integrable",
    "sourcePage": "the-riemann-integral",
    "batch": "wave10-real-analysis",
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
    "source": "fs-bounded-implies-riemann-integrable",
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
    "source": "fs-bounded-implies-riemann-integrable",
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
    "source": "fs-bounded-implies-riemann-integrable",
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
    "source": "fs-bounded-implies-riemann-integrable",
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
    "source": "fs-bounded-implies-riemann-integrable",
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

## Complete current text of every declared or cited item (22)

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

### `def-partition-and-refinement`

````markdown
---
id: def-partition-and-refinement
kind: definition
title: "Partition of $[a,b]$ as a finite strictly increasing list $a = t_0 < t_1 < \\dots < t_n = b$, its subintervals and their lengths, its mesh, refinement, and the common refinement of two partitions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-finite-sum, lem-finite-sum-laws, def-max-min, lem-finite-set-has-max, def-natural-numbers, def-nat-order, def-complete-ordered-field, def-ordered-field, def-sequence, def-injection-surjection-bijection, thm-recursion, thm-induction-principle, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: [def-partition-of-an-interval, def-mesh-of-a-partition]
landmark: true
short: "partition, mesh, refinement"
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
    - title: "Partition of an interval (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partition_of_an_interval"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

**Standing hypothesis for this page.** Throughout, $\mathbb{R}$ is the complete
ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]),
$\mathbb{N}$ is the set of natural numbers and **contains $0$**
([[def-natural-numbers]], [[def-nat-order]]), $\iota : \mathbb{N} \to \mathbb{R}$
is the canonical natural ([[def-canonical-natural]]), and $a, b$ are reals with

$$a \;<\; b .$$

Intervals and their lengths are those of [[def-interval]]; finite sums are those
of [[def-finite-sum]], indexed as $\sum_{i<n}$ over $i \in \mathbb{N}$.

### Partitions

A **partition of $[a,b]$** is a pair $P = (n, t)$ consisting of a natural number
$n \ge 1$ and a sequence $t : \mathbb{N} \to \mathbb{R}$ ([[def-sequence]]) with

$$t_0 = a, \qquad t_i < t_{i+1} \ \text{ for every } i < n, \qquad t_k = b \ \text{ for every } k \ge n .$$

The tail convention on the third clause is bookkeeping only: it makes $t$ a
genuine sequence, so that the finite-sum laws of [[lem-finite-sum-laws]] apply to
it verbatim, and it costs nothing because no index above $n$ is ever read. The
first two clauses say exactly that

$$a \;=\; t_0 \;<\; t_1 \;<\; \dots \;<\; t_n \;=\; b ,$$

the last equality because $t_n = b$ by the third clause. In particular
$i \mapsto t_i$ is strictly increasing, hence injective, on
$\{\, i \in \mathbb{N} : i \le n \,\}$ ([[def-injection-surjection-bijection]]),
and $a \le t_i \le b$ for every $i \le n$.

The **point set** of $P$ is the finite set

$$\operatorname{pts}(P) \;:=\; \{\, t_i \ : \ i \le n \,\} \;\subseteq\; [a,b], \qquad a, b \in \operatorname{pts}(P) .$$

The **subintervals** of $P$ are

$$I_i \;:=\; [\,t_i,\ t_{i+1}\,] \qquad (i < n),$$

and their **lengths** are $\Delta_i := t_{i+1} - t_i$. Each $\Delta_i > 0$, so
each $I_i$ is a nondegenerate closed bounded interval ([[def-interval]]). There
are $n$ of them and they are indexed from $i = 0$, not from $i = 1$: the first
subinterval is $[t_0, t_1] = [a, t_1]$.

**The lengths sum to $b - a$.** By the telescoping law, clause 5 of
[[lem-finite-sum-laws]],

$$\sum_{i<n} \Delta_i \;=\; \sum_{i<n} (t_{i+1} - t_i) \;=\; t_n - t_0 \;=\; b - a .$$

**The mesh.** The set $\{\, \Delta_i : i < n \,\}$ is a nonempty finite set of
reals, nonempty because $n \ge 1$, so it has a maximum
([[lem-finite-set-has-max]], [[def-max-min]]). The **mesh** of $P$ is

$$\|P\| \;:=\; \max\{\, \Delta_i \ : \ i < n \,\} \;>\; 0 ,$$

and $\Delta_i \le \|P\|$ for every $i < n$.

**The uniform partition.** For a natural $N \ge 1$, the **uniform partition of
$[a,b]$ into $N$ parts** is $U_N := (N, t)$ with

$$t_i \;:=\; a + \iota(i)\,\frac{b-a}{\iota(N)} \quad (i \le N), \qquad t_k := b \quad (k \ge N).$$

This is a partition: $t_0 = a$; $t_N = a + (b-a) = b$; and $t_{i+1} - t_i =
(b-a)/\iota(N) > 0$ for $i < N$, because $\iota(N) > 0$ and $\iota(i+1) =
\iota(i) + 1$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]). Its
subinterval lengths are all equal to $(b-a)/\iota(N)$, so

$$\|U_N\| \;=\; \frac{b-a}{\iota(N)} .$$

### A partition is determined by its point set

**Claim.** If $P = (n,t)$ and $P' = (n', t')$ are partitions of $[a,b]$ with
$\operatorname{pts}(P) = \operatorname{pts}(P')$, then $n = n'$ and $t_i = t'_i$
for every $i \le n$.

*Proof.* First, $t_i = t'_i$ for every $i \le \min\{n,n'\}$, by induction on $i$
([[thm-induction-principle]]). For $i = 0$ both equal $a$. Suppose $t_j = t'_j$
for all $j \le i$ and $i + 1 \le \min\{n,n'\}$. The set
$S := \{\, x \in \operatorname{pts}(P) : x > t_i \,\}$ has $t_{i+1}$ as its least
element: $t_{i+1} \in S$, and any $x \in S$ is $t_j$ for some $j \le n$ with
$t_j > t_i$, which forces $j > i$ because $t$ is increasing on indices $\le n$,
hence $j \ge i+1$ and $x = t_j \ge t_{i+1}$. The same argument in $P'$ makes
$t'_{i+1}$ the least element of
$\{\, x \in \operatorname{pts}(P') : x > t'_i \,\}$, which is the same set $S$,
since the point sets agree and $t'_i = t_i$. A set has at most one least element
([[def-max-min]]), so $t_{i+1} = t'_{i+1}$.

Second, $n = n'$. If $n < n'$ then $t'_n = t_n = b$ by the previous paragraph,
while $t'_n < t'_{n'} = b$ because $t'$ is increasing on indices $\le n'$ and
$n < n'$; that is impossible. Exchanging the roles of $P$ and $P'$ rules out
$n' < n$. $\square$

So the map $P \mapsto \operatorname{pts}(P)$ is injective, and a partition may be
named by its point set whenever one is exhibited.

### Inserting a point

Let $P = (n,t)$ be a partition of $[a,b]$ and let $c \in [a,b]$. Define a
partition $P + c$ of $[a,b]$ as follows.

- If $c \in \operatorname{pts}(P)$, put $P + c := P$.
- Otherwise $c \ne a$ and $c \ne b$, so $a < c < b$. The set
  $T := \{\, t_i : i \le n \text{ and } t_i < c \,\}$ is a nonempty finite set of
  reals, nonempty because $t_0 = a < c$, so it has a maximum
  ([[lem-finite-set-has-max]]); let $i_0 \le n$ be the unique index with
  $t_{i_0} = \max T$, unique because $t$ is injective on indices $\le n$. Then
  $i_0 < n$, since $t_n = b > c$ puts $t_n \notin T$; and
  $$t_{i_0} \;<\; c \;<\; t_{i_0+1},$$
  the right inequality because $t_{i_0+1} \ne c$ (as $c \notin \operatorname{pts}(P)$)
  and $t_{i_0+1} < c$ would put $t_{i_0+1} \in T$ with $t_{i_0+1} > t_{i_0} = \max T$.
  Put $P + c := (n+1, s)$ with
  $$s_i := t_i \ (i \le i_0), \qquad s_{i_0+1} := c, \qquad s_i := t_{i-1} \ (i_0 + 2 \le i \le n+1), \qquad s_k := b \ (k \ge n+1).$$

In both cases $P + c$ is a partition of $[a,b]$ and

$$\operatorname{pts}(P + c) \;=\; \operatorname{pts}(P) \cup \{c\}, \qquad \|P+c\| \;\le\; \|P\| .$$

The displayed identity is immediate from the two cases. For the mesh: in the
first case nothing changes; in the second the list of subinterval lengths of
$P + c$ is that of $P$ with $\Delta_{i_0}$ replaced by the two numbers
$c - t_{i_0}$ and $t_{i_0+1} - c$, each of which is smaller than
$\Delta_{i_0} = (c - t_{i_0}) + (t_{i_0+1} - c)$ because the other is positive.
So every length of $P + c$ is at most a length of $P$, and the maximum cannot
increase. Finally the index count grows by exactly $1$ in the second case and
not at all in the first.

### Refinement and the common refinement

$P'$ **refines** $P$, and is a **refinement** of $P$, when

$$\operatorname{pts}(P) \;\subseteq\; \operatorname{pts}(P') .$$

Let $P = (n,t)$ and $Q = (m,s)$ be partitions of $[a,b]$. Applying the recursion
theorem ([[thm-recursion]]) to the set $\mathbb{N} \times \mathcal{P}_{[a,b]}$,
where $\mathcal{P}_{[a,b]}$ is the set of partitions of $[a,b]$, with starting
element $(0, P)$ and the map $(j, R) \mapsto (j+1,\ R + s_j)$ — legitimate
because $s_j \in [a,b]$ for every $j \in \mathbb{N}$ — gives a unique family
$(R_j)_{j \in \mathbb{N}}$ of partitions with $R_0 = P$ and $R_{j+1} = R_j + s_j$.
The **common refinement** of $P$ and $Q$ is

$$P \vee Q \;:=\; R_{m+1} .$$

**Its point set is the union.** By induction on $j$ ([[thm-induction-principle]]),
$\operatorname{pts}(R_j) = \operatorname{pts}(P) \cup \{\, s_l : l < j \,\}$;
taking $j = m+1$ gives

$$\operatorname{pts}(P \vee Q) \;=\; \operatorname{pts}(P) \cup \operatorname{pts}(Q).$$

Hence $P \vee Q$ refines both $P$ and $Q$; by the uniqueness claim above it is
the **only** partition with that point set, so $P \vee Q = Q \vee P$, and

$$P' \text{ refines } P \quad \Longrightarrow \quad P \vee P' = P' ,$$

since then $\operatorname{pts}(P) \cup \operatorname{pts}(P') =
\operatorname{pts}(P')$.

**Two size bounds, both used later.** Writing $n_R$ for the first component of a
partition $R$:

$$\|P \vee Q\| \;\le\; \|P\|, \qquad n_{P \vee Q} \;\le\; n_P + n_Q - 1 .$$

The first is the mesh bound above applied $m+1$ times. For the second, each
insertion raises the index count by at most $1$, and the two insertions of
$s_0 = a$ and $s_m = b$ raise it by $0$, since $a$ and $b$ already lie in
$\operatorname{pts}(P)$ and hence in $\operatorname{pts}(R_j)$ for every $j$; so
at most $m - 1$ of the $m+1$ insertions increase it.

### The index map of a refinement

Let $P' = (n',t')$ refine $P = (n,t)$. For each $i \le n$ the point $t_i$ lies in
$\operatorname{pts}(P')$, so there is exactly one $\varphi(i) \le n'$ with
$t'_{\varphi(i)} = t_i$, uniqueness because $t'$ is injective on indices $\le n'$.
The resulting map $\varphi$ satisfies

$$\varphi(0) = 0, \qquad \varphi(n) = n', \qquad \varphi(i) < \varphi(i+1) \ \ (i < n),$$

the first two because $t'_0 = a = t_0$ and $t'_{n'} = b = t_n$ together with
injectivity, and the third because $t_i < t_{i+1}$ and $t'$ is increasing on
indices $\le n'$. In particular $n \le n'$. Moreover, for $i < n$ and
$\varphi(i) \le j < \varphi(i+1)$,

$$I'_j \;=\; [\,t'_j,\ t'_{j+1}\,] \;\subseteq\; [\,t_i,\ t_{i+1}\,] \;=\; I_i ,$$

because $t_i = t'_{\varphi(i)} \le t'_j$ and $t'_{j+1} \le t'_{\varphi(i+1)} = t_{i+1}$.

**The blocks are counted by telescoping.** By clause 5 of
[[lem-finite-sum-laws]],
$\sum_{i<n}\big(\varphi(i+1) - \varphi(i)\big) = \varphi(n) - \varphi(0) = n'$,
so, subtracting $\sum_{i<n} 1 = n$,

$$\sum_{i<n} \big(\varphi(i+1) - \varphi(i) - 1\big) \;=\; n' - n ,$$

a sum of $n$ nonnegative integers, one for each block, which vanishes exactly at
the blocks consisting of a single index. This identity is the whole content of
the quantitative bound in [[lem-refinement-inequalities]], and it is also why
$n \le n'$.

Finally, the lengths inside a block sum to the length of the block:

$$\sum_{j = \varphi(i)}^{\varphi(i+1)-1} \Delta'_j \;=\; t'_{\varphi(i+1)} - t'_{\varphi(i)} \;=\; t_{i+1} - t_i \;=\; \Delta_i \qquad (i < n),$$

again by telescoping, applied to the sequence $l \mapsto t'_{\varphi(i)+l}$ and
read through the index-shift convention of [[def-finite-sum]].

## Remarks

- **Why $a < b$ is a standing hypothesis and not a case.** With $a = b$ the
  displayed chain $a = t_0 < \dots < t_n = b$ is unsatisfiable for $n \ge 1$, and
  admitting $n = 0$ would give a partition with no subintervals, an empty mesh
  set and no maximum. Every statement on this page is about a nondegenerate
  closed bounded interval, and the convention $\int_a^a f := 0$ is not adopted
  here because nothing below needs it.

- **The subintervals overlap at their shared endpoints, and that is harmless.**
  $I_i \cap I_{i+1} = \{t_{i+1}\}$, so the union $\bigcup_{i<n} I_i = [a,b]$ is
  not disjoint. Every quantity attached to a partition below is a sum over $i<n$
  of a number times $\Delta_i$, and a single point contributes length $0$, so no
  statement on this page is sensitive to the double counting of the $n-1$
  interior points.

- **Refinement is a relation between point sets, not between lists.** Defining it
  as "$P'$ is obtained from $P$ by inserting points" would be the same relation,
  by the uniqueness claim above, but it would make every proof carry an
  insertion order. The index map $\varphi$ recovers the list-level picture when
  it is wanted, and it is what [[lem-refinement-inequalities]] actually uses.
````

### `fs-nonnegative-integrable-with-zero-integral-vanishes`

````markdown
---
id: fs-nonnegative-integrable-with-zero-integral-vanishes
kind: false-statement
title: "FALSE: a nonnegative Riemann integrable function on $[a,b]$ with $\\int_a^b f = 0$ is identically zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-darboux-integral, def-darboux-sums, def-partition-and-refinement, def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, cor-countably-many-discontinuities-integrable, thm-rationals-countable, lem-subset-of-countable, def-countable, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-continuity-real, lem-finite-sum-laws, def-finite-sum, def-interval, def-bounded-set, def-infimum, def-max-min, def-canonical-natural, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
short: "FALSE: zero integral forces vanishing"
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
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "MAT 125B Discussion 3 (UC Davis)"
      url: "https://www.math.ucdavis.edu/~gravner/MAT125B/materials/disc3.pdf"
pipeline_run: null
---

## Statement

**False claim:** if $f : [a,b] \to \mathbb{R}$ is Riemann integrable
([[def-darboux-integral]]) with $f(x) \ge 0$ for every $x \in [a,b]$ and
$\int_a^b f = 0$, then $f(x) = 0$ for every $x \in [a,b]$.

The claim is true under the additional hypothesis that $f$ is continuous, and
that is the version worth remembering; without it the integral simply cannot see
a function that is positive on a null set. Thomae's function on $[0,1]$
([[def-dirichlet-and-thomae-functions]]) is nonnegative, integrable, has
integral $0$, and is positive at **every** rational point of $[0,1]$, of which
there are infinitely many.

## Facts & Assumptions

**Given:** Thomae's function restricted to $[0,1]$, that is $t : [0,1] \to \mathbb{R}$ with $t(x) = 1/\iota(q(x))$ at a rational $x$ with least denominator $q(x) \ge 1$, and $t(x) = 0$ at an irrational $x$ ([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]]).

[A1] The false claim: a nonnegative Riemann integrable function on a closed bounded interval with distinct endpoints whose integral is $0$ vanishes identically.

[L1] $t(x) = 1/\iota(q(x))$ with $\iota(q(x)) \ge 1 > 0$ at a rational $x$, and $t(x) = 0$ at an irrational $x$; hence $0 \le t(x) \le 1$ everywhere and $t(x) > 0$ at every rational $x$ ([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] Thomae's function on $\mathbb{R}$ is continuous at every irrational and discontinuous at every rational ([[thm-dirichlet-and-thomae-continuity-sets]]); a restriction of a function continuous at a point of the smaller domain is continuous there, the same $\delta$ serving a condition quantified over fewer points ([[def-continuity-real]]).

[L3] $\mathbb{Q}$ is countably infinite, and every subset of an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

[L4] A bounded function on $[a,b]$ with an at most countable set of discontinuities is Riemann integrable ([[cor-countably-many-discontinuities-integrable]], [[def-bounded-set]]).

[L5] The irrationals are dense in $\mathbb{R}$, so every nonempty open interval contains an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L6] For a partition $P = (n,t^{P})$ of $[0,1]$: $n \ge 1$, $t^{P}_i < t^{P}_{i+1}$, $\Delta_i > 0$, and $I_i = [t^{P}_i, t^{P}_{i+1}] \subseteq [0,1]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L7] $L(t,P) = \sum_{i<n}m_i\Delta_i$ with $m_i = \inf t[I_i]$; $\underline{\int_0^1} t$ is the supremum of the lower sums, $\overline{\int_0^1} t$ the infimum of the upper sums, and the integral is their common value when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L8] A set with a least element has it as its infimum; the supremum of $\{0\}$ is $0$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L9] Finite sums: $\sum_{i<n}0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L10] Ordered-field arithmetic: the order is total and transitive; a reciprocal of a positive quantity is positive; $0 < 1$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $t$ is nonnegative and bounded on $[0,1]$, with $0 \le t(x) \le 1$ for every $x$, by [L1]. [given, L1, L10]

1.2 $t$ is continuous at every irrational point of $[0,1]$ by [L2], so its set of discontinuities in $[0,1]$ is contained in $\mathbb{Q} \cap [0,1]$, which is at most countable by [L3]; every subset of it is then at most countable by [L3] as well. [given, L2, L3]

1.3 Separately, and independently of everything below, $t$ does not vanish identically: $2^{-1}$ is a rational point of $[0,1]$, so $t(2^{-1}) > 0$ by [L1] and [L10]. [L1, L10]

2.1 By [L4] applied to $[0,1]$, with $0 < 1$, the function $t$ is Riemann integrable on $[0,1]$. [step 1.1, step 1.2, L4]

2.2 Every lower Darboux sum of $t$ is $0$: let $P$ be a partition of $[0,1]$ and $i < n$; the open interval $(t^{P}_i, t^{P}_{i+1})$ is nonempty by [L6] and contains an irrational $y$ by [L5], and $y \in I_i \subseteq [0,1]$, so $t(y) = 0$ by [L1]. Since $t \ge 0$ by [L1], the value $0$ is the least element of $t[I_i]$ and $m_i = 0$ by [L8]. Hence $L(t,P) = \sum_{i<n}0\cdot\Delta_i = 0$ by [L7] and [L9]. [step 1.1, L1, L5, L6, L7, L8, L9]

3.1 The set of lower sums is therefore $\{0\}$, so $\underline{\int_0^1} t = 0$ by [L8], and since $t$ is integrable by step 2.1 its integral is $\int_0^1 t = 0$ by [L7]. [step 2.1, step 2.2, L7, L8]

4.1 So $t$ is a nonnegative Riemann integrable function on $[0,1]$ with $\int_0^1 t = 0$ that is not identically zero; [A1] fails at $t$ and the claim is false. [step 1.1, step 3.1, step 1.3, A1] ∎

## Remarks

- **The correct statement, and the hypothesis that repairs it.** If $f$ is continuous on $[a,b]$, nonnegative and $\int_a^b f = 0$, then $f \equiv 0$: a point with $f(c) > 0$ would, by continuity, force $f > f(c)\cdot 2^{-1}$ on a whole subinterval, and $\int_a^b f$ would then be at least $f(c)\cdot 2^{-1}$ times the length of that subinterval, by [[lem-integral-elementary-bounds]] applied there. That argument is not carried out here, because the additivity of the integral over subintervals is not available at this point in the reading order; what is asserted by this item is only that the hypothesis of continuity cannot simply be dropped.

- **The exceptional set is exactly the rationals.** $t$ is positive precisely on $\mathbb{Q}\cap[0,1]$, a countable dense set, which is null ([[lem-countable-sets-are-null]]). The integral is blind to a null set of positive values, and the Lebesgue criterion explains why: what governs integrability, and here the value, is the size of the set where the function misbehaves, measured by interval covers ([[thm-lebesgue-criterion]]).

- **Every upper sum, by contrast, is positive.** Each subinterval contains a rational, so $M_i > 0$ for every $i$ and $U(t,P) > 0$ for every partition $P$; the upper integral is nevertheless $0$, since the infimum of a set of positive numbers may be $0$. That is the one place where this example is worth pausing over, and it is the reason the lower sums, not the upper ones, are what step 2.2 computes.
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

### `lem-q-and-irrationals-dense-r`

````markdown
---
id: lem-q-and-irrationals-dense-r
kind: lemma
title: "Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-rat-embeds-dense, def-limit-point-r, def-open-and-closed-in-r, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, cor-interval-uncountable, lem-subset-of-countable, def-countable, thm-rationals-countable, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
forward_refs: [ex-closure-interior-boundary-of-q]
aliases: []
landmark: false
short: "$\\mathbb{Q}$ and its complement are dense"
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
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is,
   $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[def-limit-point-r]]);
2. $X$ is dense in $\mathbb{R}$;
3. every nonempty open subset of $\mathbb{R}$ is uncountable
   ([[def-countable]]).

Claim 2 is not a symmetry of claim 1: the rationals are dense because they are
*constructed* to approximate, whereas the irrationals are dense because there are
too many points in any interval for a countable set to exhaust it, which is why
claim 3 is proved alongside and used for it.

## Facts & Assumptions

**Given:** The canonical embedding $q \mapsto \hat q$ of $\mathbb{Q}$ into $\mathbb{R}$, its image $\mathbb{Q}_{\mathbb{R}}$, and the complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\overline{A}$ is the set of points every neighbourhood of which meets $A$; $A$ is dense in $\mathbb{R}$ when $\overline{A} = \mathbb{R}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ for real $\varepsilon > 0$, and $x - \varepsilon < x + \varepsilon$ ([[def-neighbourhood-r]], [[def-interval]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ ([[def-open-and-closed-in-r]]).

[L4] Strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$, and $q \mapsto \hat q$ is injective ([[lem-rat-embeds-dense]]).

[L5] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); an injection is a bijection onto its image, and $\approx$ is symmetric and transitive ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L6] Every subset of an at most countable set is at most countable, and uncountable means not at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[L7] For $a < b$ the interval $(a,b)$ is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; by [L2] one has $x - \varepsilon < x + \varepsilon$, so [L4] supplies $\hat q$ with $x - \varepsilon < \hat q < x + \varepsilon$, that is $\hat q \in N_\varepsilon(x) \cap \mathbb{Q}_{\mathbb{R}}$. Every real is therefore an adherent point of $\mathbb{Q}_{\mathbb{R}}$ and claim 1 follows from [L1]. [L1, L2, L4]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is at most countable: the embedding is an injection of $\mathbb{Q}$ with image $\mathbb{Q}_{\mathbb{R}}$, hence a bijection onto it, so $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q} \approx \mathbb{N}$. [L4, L5]

1.3 For all reals $a < b$ the interval $(a,b)$ is uncountable. [L7]

2.1 For all reals $a < b$ the interval $(a,b)$ contains an irrational: if it did not, then $(a,b) \subseteq \mathbb{Q}_{\mathbb{R}}$, so $(a,b)$ would be a subset of an at most countable set by step 1.2 and hence at most countable by [L6], contradicting step 1.3. So some $z \in (a,b)$ lies in $X$. [step 1.2, step 1.3, L6]

2.2 Every nonempty open $U \subseteq \mathbb{R}$ is uncountable: fix $x \in U$ and, by [L3], a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; by [L2] the set $N_\varepsilon(x)$ is the interval $(x - \varepsilon, x + \varepsilon)$ with $x - \varepsilon < x + \varepsilon$, hence uncountable by step 1.3. Were $U$ at most countable, its subset $N_\varepsilon(x)$ would be at most countable by [L6], which it is not; so $U$ is uncountable, which is claim 3. [step 1.3, L2, L3, L6, choose]

3.1 $X$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; applying step 2.1 with $a = x - \varepsilon$ and $b = x + \varepsilon$ gives $z \in (x - \varepsilon, x + \varepsilon) \cap X$, which is $N_\varepsilon(x) \cap X$ by [L2]. Every real is therefore an adherent point of $X$, so $\overline{X} = \mathbb{R}$ by [L1], which is claim 2. [step 2.1, L1, L2]

4.1 Claims 1, 2 and 3 are steps 1.1, 3.1 and 2.2, so both $\mathbb{Q}_{\mathbb{R}}$ and its complement are dense in $\mathbb{R}$ and every nonempty open subset of $\mathbb{R}$ is uncountable. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **Two dense sets can be disjoint.** $\mathbb{Q}_{\mathbb{R}}$ and $X$ partition
  $\mathbb{R}$ and both are dense, so density says nothing about size: one of
  them is countable and the other is not
  ([[cor-irrationals-uncountable]]). What density does say is that neither has
  interior: a set whose complement is dense has empty interior, which is the
  computation carried out for $\mathbb{Q}$ in
  [[ex-closure-interior-boundary-of-q]].

- **Claim 3 is a statement about open sets, not about intervals.** It follows
  from the uncountability of intervals ([[cor-interval-uncountable]]) only
  because openness supplies an interval inside the set at each of its points.
  A nonempty set with empty interior can perfectly well be countable, as
  $\mathbb{Q}_{\mathbb{R}}$ shows.

- **An explicit irrational is not produced here.** Step 2.1 is a counting
  argument and exhibits nothing. The library does exhibit one separately,
  $\sqrt 2$ ([[thm-of-square-roots]], [[fs-sqrt2-rational]]), and an explicit
  irrational in a given interval $(a,b)$ can be built from it as
  $q_1 + (q_2 - q_1)/\sqrt 2$ for suitable rationals $q_1 < q_2$ in the
  interval; that route is longer and is not the one taken above.
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

