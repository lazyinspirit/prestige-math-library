---
id: ex-geometric-sequences-all-real-ratios
kind: example
title: "Geometric sequences: the complete classification for every real ratio"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, lem-power-laws, lem-power-monotone, lem-bernoulli-inequality, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-abs-value, lem-of-zero-mult, def-field, def-ordered-field, lem-of-sign-rules, lem-of-add-order, cor-of-one-positive, thm-induction-principle, lem-nat-discrete, def-sequence, def-real-limit, def-divergence-to-infinity, lem-convergent-implies-bounded, lem-subsequence-inherits-limit, lem-index-map-grows, fs-bounded-implies-convergent, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§3.5 Proposition 3.31, printed pp. 49-50: positive-ratio geometric limits. Its small-ratio proof uses monotone convergence, so that route is replaced here by the earlier Bernoulli/Archimedean reciprocal estimate; boundary and negative-ratio cases are fully verified locally."
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.2.5 Proposition 2.2.11, printed p. 68: c^n tends to zero for 0<c<1 and is unbounded for c>1. Source proof uses monotone convergence; no later theorem is consumed here."
---

## Example

For every real $r$, let $a_k = r^k$ for natural $k \ge 0$, using the integer
powers of [[def-integer-power]], so $a_0 = 1$ even when $r = 0$, and
$a_{k+1} = a_k r$. This notation is valid for negative real ratios and is not
rational exponentiation of a negative base. The complete classification is: if
$|r| < 1$, then $r^k \to 0$; if $r = 1$, the sequence is constantly $1$ and
converges to $1$; if $r = -1$, its even and odd subsequences are constantly $1$
and $-1$, so it is bounded but divergent; if $r > 1$, then $r^k \to +\infty$;
if $r < -1$, then $|r^k| \to +\infty$, while the even subsequence diverges to
$+\infty$ and the odd subsequence to $-\infty$, and the whole sequence neither
converges nor diverges to either signed infinity. Consequently $(r^k)$
converges exactly when $-1 < r \le 1$. Here signed-infinity assertions mean
[[def-divergence-to-infinity]], not a finite limit value. Quantitative checks:
if $0 < |r| < 1$ and $h = |r|^{-1} - 1 > 0$, then
$|r^k| \le (1+kh)^{-1}$ for every natural $k$, and for $k \ge 1$ one has
$|r^k| < (kh)^{-1}$; if $|r| > 1$ and $d = |r| - 1 > 0$, then
$|r^k| \ge 1 + kd$. The weak Bernoulli estimates have equality for $k = 0, 1$
and are strict for $k \ge 2$. Thus $(1/2)^k$ and $(-1/2)^k$ are both null,
$2^k$ diverges positively, and $(-2)^k$ grows in absolute value while
alternating sign.

## Facts & Assumptions

**Given:** A real $r$, the sequence $a_k := r^k$ with integer powers ([[def-integer-power]], [[def-sequence]]), the alternating sequence $(s_k)$ with $s_0 = 1$, $s_{\sigma(k)} = -s_k$ and its index map $n$ with $n_0 = 0$, $n_{\sigma(j)} = \sigma(\sigma(n_j))$ ([[fs-bounded-implies-convergent]]), and $m_j := \sigma(n_j)$.

[F1] Integer powers: $a^0 = 1$ and $a^{j+1} = a^j a$ for every real $a$ and every natural $j$ ([[def-integer-power]]).

[F2] Power laws: $a^{i+j} = a^i a^j$, $(a^i)^j = a^{ij}$ and $(ab)^j = a^j b^j$ for all naturals $i, j$; and if $a \ne 0$ then $a^j \ne 0$ for every $j$ ([[lem-power-laws]]).

[F3] Signs of powers: if $a \ge 0$ then $a^j \ge 0$, and if $a > 0$ then $a^j > 0$ ([[lem-power-monotone]]).

[F4] Bernoulli's inequality: for $x \ge -1$ and every natural $j$, $(1+x)^j \ge 1 + jx$, with equality if and only if $j \le 1$ or $x = 0$ ([[lem-bernoulli-inequality]]).

[F5] Archimedean property: for every real $x$ there is a natural number $j \ge 1$ with $x < j \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[F6] Inverses of positives: $a > 0$ implies $a^{-1} > 0$; and $0 < a < b$ implies $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]).

[F7] Canonical naturals: $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing, hence preserves non-strict order, on $\{1, 2, 3, \dots\}$ ([[lem-of-naturals-positive]]).

[F8] $0 < 1$ and $1 \ne 0$ ([[cor-of-one-positive]]).

[F9] Absolute value: $|uv| = |u|\,|v|$, $|-u| = |u|$, $|u| \ge 0$, $|u| = 0$ if and only if $u = 0$, and $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[F10] A product with a zero factor vanishes: $0 \cdot a = 0$ ([[lem-of-zero-mult]]).

[F11] The alternating sequence: $(s_k)$ is the unique sequence with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$ ([[fs-bounded-implies-convergent]]).

[F25] The index map $n$ of the same item satisfies $n_0 = 0$, $n_{\sigma(j)} = \sigma(\sigma(n_j))$, is strictly increasing, and has $s_{n_j} = 1$ for every $j$ ([[fs-bounded-implies-convergent]]).

[F12] Growth of index maps: if $p$ is strictly increasing then $p_j \ge j$ for every $j$ ([[lem-index-map-grows]]).

[F13] Consecutive comparisons suffice: if $p_i < p_{\sigma(i)}$ for every $i$ then $p$ is strictly increasing ([[lem-index-map-grows]]).

[F14] Discreteness: for naturals $a, b$, $a < b \iff \sigma(a) \le b$ ([[lem-nat-discrete]]).

[F15] Subsequences inherit limits, and the divergence test: if a sequence converges to $x$ and $p$ is strictly increasing, then the subsequence along $p$ converges to $x$; consequently, if two subsequences converge to different limits the sequence does not converge ([[lem-subsequence-inherits-limit]]).

[F16] Every convergent sequence is bounded ([[lem-convergent-implies-bounded]]).

[F17] Divergence to $+\infty$ and to $-\infty$ means, respectively, that for every real $M$ one has $x_k > M$ eventually and $x_k < M$ eventually ([[def-divergence-to-infinity]]).

[F18] Trichotomy, and $u \le v < w$ implies $u < w$ ([[def-ordered-field]]).

[F19] Scaling a strict inequality by a positive factor: if $c > 0$ then $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[F20] Convergence: $(z_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K$ with $|z_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[F21] Field arithmetic: multiplication is associative and commutative, it distributes over addition, and every nonzero element has a multiplicative inverse ([[def-field]]).

[F22] Adding a constant preserves the strict order: $a < b$ implies $a + c < b + c$ ([[lem-of-add-order]]).

[F23] Induction principle: if a property $P$ satisfies $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[F24] Boundedness: $(z_k)$ is bounded when there is a real $M$ with $|z_k| \le M$ for every $k \in \mathbb{N}$; it is unbounded otherwise ([[def-sequence]]).

## Verification

**Proof technique:** cases.

1.1 Absolute values of powers: for every real $r$ and every $k$ one has $|r^k| = |r|^k$, by induction. The base case is $|r^0| = |1| = 1 = |r|^0$ by [F1], [F8] and [F9]; and assuming $|r^k| = |r|^k$ for a fixed $k$, the recursion [F1] and multiplicativity [F9] give $|r^{\sigma(k)}| = |r^k r| = |r^k|\,|r| = |r|^k |r| = |r|^{\sigma(k)}$. Hence by the induction principle [F23] the identity holds for every $k$; in particular $|(-b)^k| = |{-b}|^k = b^k$ for every real $b$ and every $k$. [base, ih, discharge-induction, given, F1, F8, F9, F23]

1.2 Growth for bases above $1$: let $b > 1$ be real and put $d := b - 1 > 0$. Bernoulli [F4] gives $b^k = (1+d)^k \ge 1 + kd$ for every $k$, with equality exactly when $k \le 1$, since $d \ne 0$. Given any real $M$, apply [F5] to the real $1 + |M/d|$ to get a natural $N \ge 1$ with $N > 1 + |M/d|$; then $Nd > d + |M| \ge |M|$, so for every $k \ge N$ the order preservation [F7] and scaling by $d > 0$ [F19] give $kd \ge Nd > |M| \ge M$, hence $b^k \ge 1 + kd > M$. Therefore $b^k \to +\infty$ in the sense of [F17]. [given, F4, F5, F6, F7, F9, F17, F19, algebra]

1.3 The case $r = 0$: here $r^0 = 1$ by [F1], and $r^k = 0$ for every $k \ge 1$ by induction, since $r^{\sigma(k)} = r^k r$ and a product with a zero factor vanishes [F10]. Given a rational $\varepsilon > 0$, for every $k \ge 1$ we have $|r^k - 0| = |0| = 0 < \varepsilon$ by [F9], so $r^k \to 0$ by [F20] with threshold $K = 1$. [assume-case zero, given, F1, F9, F10, F20]

1.4 Constant sequences converge to their values: for every real $c$, given a rational $\varepsilon > 0$ one has $|c - c| = |0| = 0 < \varepsilon$ at every index by [F9], so the threshold $K = 0$ witnesses [F20]. [F9, F20]

1.5 Alternating powers: for every positive real $b$ and every $k$, $(-b)^k = s_k b^k$ by induction: the base case is $(-b)^0 = 1 = s_0 b^0$, and if $(-b)^k = s_k b^k$ then $(-b)^{\sigma(k)} = (-b)^k(-b) = s_k b^k (-b) = (-s_k) b^k b = s_{\sigma(k)} b^{\sigma(k)}$ by [F1], [F2], [F11] and field arithmetic [F21]. Alongside, $|s_k| = 1$ for every $k$ by induction: $|s_0| = |1| = 1$, and $|s_{\sigma(k)}| = |-s_k| = |s_k| = 1$ by [F9] and [F11]. [base, ih, discharge-induction, given, F1, F2, F9, F11, F21, F23]

1.6 The index maps: $n$ is strictly increasing with $n_0 = 0$ and $s_{n_j} = 1$ [F11], so $n_j \ge j$ [F12]; the map $m_j = \sigma(n_j)$ is strictly increasing, because $n_j < n_{\sigma(j)}$ gives $m_j = \sigma(n_j) \le n_{\sigma(j)} < \sigma(n_{\sigma(j)}) = m_{\sigma(j)}$ by [F14] and [F13], and then $m_j \ge j$ by [F12]; moreover $s_{m_j} = s_{\sigma(n_j)} = -s_{n_j} = -1$ by [F11]. [given, F11, F12, F13, F14, F25]

2.1 The case $0 < |r| < 1$: put $b := |r| \in (0,1)$ and $h := b^{-1} - 1 > 0$, positive by [F6]. Bernoulli [F4] applied to $h \ge -1$ gives $(b^{-1})^k = (1+h)^k \ge 1 + kh$ for every $k$, with equality exactly when $k \le 1$; since $b^k (b^{-1})^k = (b b^{-1})^k = 1^k = 1$ by [F2], uniqueness of inverses [F21] gives $b^k = \big((b^{-1})^k\big)^{-1} \le (1+kh)^{-1}$ by the reciprocal reversal [F6], both sides positive by [F3]; for $k \ge 1$ also $1 + kh > kh > 0$, so $(1+kh)^{-1} < (kh)^{-1}$ and $|r^k| = b^k < (kh)^{-1}$ by step 1.1. Now let a rational $\varepsilon > 0$ be given; [F5] applied to $1/(h\varepsilon)$ supplies a natural $N \ge 1$ with $N > 1/(h\varepsilon)$, so $(Nh)^{-1} < \varepsilon$; for every $k \ge N$ the order preservation [F7] and scaling by $h > 0$ [F19] give $kh \ge Nh$, hence $(kh)^{-1} \le (Nh)^{-1} < \varepsilon$ by [F6], and therefore $|r^k - 0| = |r^k| < \varepsilon$ by [F9]. So $r^k \to 0$. [assume-case small, step 1.1, given, F2, F3, F4, F5, F6, F7, F9, F19, F20, F21, algebra]

2.2 The case $r = 1$: then $r^k = 1$ for every $k$, by induction from $1^0 = 1$ and $1^{\sigma(k)} = 1^k \cdot 1 = 1$ by [F1]; hence $r^k \to 1$ by step 1.4. [assume-case unit, step 1.4, given, F1]

2.3 The case $r = -1$: by step 1.5 with $b = 1$ one has $r^k = (-1)^k = s_k$ for every $k$. The even subsequence along $n$ is constantly $1$ and the odd subsequence along $m$ is constantly $-1$: $r^{n_j} = s_{n_j} = 1$ and $r^{m_j} = s_{m_j} = -1$ by step 1.6, and both index maps are strictly increasing by step 1.6, so these are subsequences in the sense of [F15] converging to $1$ and to $-1$ respectively. The limits differ: $-1 < 1$ since $0 < 1$ by [F8] and adding $-1$ preserves the order by [F22], so $1 \ne -1$ by [F18], and the divergence test [F15] shows that $(r^k)$ does not converge. It is bounded in the sense of [F24], since $|r^k| = |r|^k = 1$ for every $k$ by step 1.1, and it diverges to neither signed infinity: at the bound $M = 1$ the condition $x_k > 1$ of [F17] fails at every index, and at $M = -1$ the condition $x_k < -1$ fails at every index. [assume-case negunit, step 1.1, step 1.4, step 1.5, step 1.6, given, F8, F15, F17, F18, F22, F24]

2.4 The case $r > 1$: with $b := r > 1$, step 1.2 gives $b^k \to +\infty$, and $r^k = b^k$ for every $k$; hence $r^k \to +\infty$ in the sense of [F17]. [assume-case big, step 1.2, given, F17]

2.5 The case $r < -1$: put $b := |r| > 1$. By step 1.5, $r^k = s_k b^k$ for every $k$, so $|r^k| = |s_k| b^k = b^k \to +\infty$ by step 1.1, step 1.2 and [F9]; since $b^k$ exceeds every real eventually, no real $M$ satisfies $|r^k| \le M$ for all $k$, so $(r^k)$ is unbounded in the sense of [F24] and therefore not convergent by [F16]. Along the even index map, $r^{n_j} = s_{n_j} b^{n_j} = b^{n_j}$ by step 1.6: given a real $M$, step 1.2 gives $K$ with $b^k > M$ for all $k \ge K$, while $n_j \ge j \ge K$ for $j \ge K$ by step 1.6, so $r^{n_j} = b^{n_j} > M$ for all $j \ge K$, which is divergence of that subsequence to $+\infty$ by [F17]. Along the odd index map, $r^{m_j} = s_{m_j} b^{m_j} = -b^{m_j}$ by step 1.6: applying the even-index statement to the real $-M$ gives $-b^{m_j} < M$ eventually, so the odd subsequence diverges to $-\infty$ by [F17]. Finally the whole sequence fails both signed-infinity tests at $M = 0$: the condition $x_k > 0$ eventually fails because $r^{m_j} = -b^{m_j} < 0$ at the arbitrarily large indices $m_j \ge j$, and the condition $x_k < 0$ eventually fails because $r^{n_j} = b^{n_j} > 0$ at the arbitrarily large indices $n_j \ge j$; so it neither converges nor diverges to either signed infinity. [assume-case negbig, step 1.1, step 1.2, step 1.5, step 1.6, given, F9, F16, F17, F24]

3.1 The cases are exhaustive: by trichotomy [F18] every real $r$ satisfies exactly one of $r < -1$, $r = -1$, $-1 < r < 1$, $r = 1$, $r > 1$, and these have been disposed of in steps 2.5, 2.3, 2.1 and 1.3 (for $-1 < r < 1$, splitting at $r = 0$), 2.2 and 2.4 respectively. So $(r^k)$ converges exactly when $-1 < r \le 1$: to $0$ for $-1 < r < 1$ by steps 1.3 and 2.1, and to $1$ for $r = 1$ by step 2.2, while it diverges for $r = -1$, for $r > 1$ and for $r < -1$. The quantitative bounds are those derived in steps 1.2 and 2.1 — $|r^k| \le (1+kh)^{-1}$ and $|r^k| < (kh)^{-1}$ for $k \ge 1$ when $0 < |r| < 1$, and $|r^k| \ge 1+kd$ when $|r| > 1$ — and the displayed numerical instances $(1/2)^k$, $(-1/2)^k$ (null), $2^k$ (diverging to $+\infty$) and $(-2)^k$ (absolute values diverging, signs alternating) are the substitutions $r = \pm 1/2$ and $r = \pm 2$ into the proved clauses. [cases-exhaustive, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, given, F18] ∎
