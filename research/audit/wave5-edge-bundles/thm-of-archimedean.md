# Citation-precision audit — everything that cites `thm-of-archimedean`

## The target, as it actually stands on disk

`items/thm-of-archimedean.md` — theorem — Every complete ordered field is Archimedean

#### Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## The 16 citing use(s), quoted verbatim from the citing items

### `cex-closed-unbounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $\\mathbb{R}^n$ is closed and unbounded and is not compact for $n\\ge1$

- [L3] For every real radius there is a natural number larger than it ([[thm-of-archimedean]]).

### `cex-nested-open-intervals-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested open intervals $(0, 1/k)$ have empty intersection

- [L3] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

### `cex-nested-unbounded-closed-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested closed unbounded sets $[k, \\infty)$ have empty intersection, so boundedness cannot be dropped

- [L3] Archimedean property: for every real $x$ there is a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L5] Archimedean property, both forms ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L4] Canonical naturals: positive for $n \ge 1$, and strictly increasing in the index ([[lem-of-naturals-positive]]); the Archimedean property ([[thm-of-archimedean]]).

### `cex-unbounded-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

- [L3] Canonical naturals: positive for $m \ge 1$ and strictly increasing in the index ([[lem-of-naturals-positive]]); the Archimedean property ([[thm-of-archimedean]]).

### `cor-rn-is-locally-compact-and-sigma-compact` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}^n$ is locally compact and $\\sigma$-compact

- [L3] For every real $M$ there is a natural $k\ge1$ with $M<k\cdot1_{\mathbb R}$ ([[thm-of-archimedean]]).

### `ex-nested-intervals-single-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

- [L5] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L3] For every real $x$ there is a natural $m \ge 1$ with $x < \iota(m)$, and $\iota$ is strictly increasing with $\iota(m) > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L6] For every real $x$ there is a natural $m \ge 1$ with $|x| + 1 < \iota(m)$, and $\iota(m) \ge 1 > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L6] Archimedean property, in both forms: for every real $x$ there is a natural $n \ge 1$ with $x < n$, and for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

### `fs-convergent-subsequence-implies-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)

- [L3] Archimedean property: for every real $x$ there is a natural $m \ge 1$ with $x < m \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

### `fs-nested-open-intervals-nonempty` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- [L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- except through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].
- [L7] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n$ ([[thm-of-archimedean]]); and for every $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[cor-archimedean-reciprocal]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- [L3] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$; every nonzero natural is a successor; and for every real $x$ there is a natural $k \ge 1$ with $x < k$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[thm-of-archimedean]]).
