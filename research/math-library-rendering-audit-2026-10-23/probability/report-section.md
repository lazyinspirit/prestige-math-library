## Probability

Completed visual review of **685 items across 50 pages**, with **1091 image tiles**. Findings: 8 confirmed, 1 unformatted-mathematical-notation-in-prose. Evidence: [manifest](math-library-rendering-audit-2026-10-23/probability/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/probability/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/probability/category-review-receipt.json).

### Confirmed rendering defects

#### probability / confirmed 001: `ex-successive-brownian-hits-restart-independent-copies`

- Location: **Verification**; source lines 68, 70, 72, 74, 76, 78.
- Pages: `brownian-motion-markov-properties-and-hitting-times-examples`.
- Visible defect: The body renders several inline mathematical expressions as ordinary text, leaving ASCII relations, underscores, braces, and the word “wedge” visible. The source has no math delimiters around these expressions; this is an authoring/markup defect rather than a KaTeX parse failure.
- Future repair: Wrap the mathematical expressions in math delimiters, preserving the existing definitions and claims.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/probability/screenshots/ex-successive-brownian-hits-restart-independent-copies--02.png), [tile 03](math-library-rendering-audit-2026-10-23/probability/screenshots/ex-successive-brownian-hits-restart-independent-copies--03.png); [frozen source](math-library-rendering-audit-2026-10-23/probability/snapshots/ex-successive-brownian-hits-restart-independent-copies.md).

Exact frozen source lines:

```text
68: 2.1 For w in C_0 define $\sigma(w)=\inf\{t\ge0:|w(t)|=1\}$. This is measurable: for t>=0, continuity gives $\{\sigma\le t\}=\{\sup_{0\le s\le t}|w(s)|\ge1\}$, and the supremum is over the countable set of rationals in [0,t] together with t. Continuity, the intermediate value property and attainment of the maximum on a compact interval prove this equality. It also shows sigma is strictly positive on C_0. For a continuous Brownian W, [F2] makes sigma(W) a stopping time. If sigma(W)>m, then |W_m|<1; hence [F1] gives $P(\sigma>m)\le P(|W_m|<1)\le2/\sqrt{2\pi m}$. Continuity from above in [F5] proves sigma finite almost surely. At a finite sigma, continuity gives $W_\sigma\in\{-1,1\}$. [F1, F2, F5, F6, step 1.1]
70: 3.1 Define the segment map $e(w)=(\sigma(w),(w(t\wedge\sigma(w)))_{t\ge0})$ into $[0,\infty]\times C$, and the remainder $r(w)(t)=w(\sigma(w)+t)-w(\sigma(w))$ if sigma is finite, and the zero path otherwise. Both are Borel maps. Indeed evaluation (w,s) maps to w(s) continuously for finite s: if w_j converges uniformly on compact sets and s_j tends to s, bound by the uniform error on one common compact interval plus continuity of w there. Compose with measurable sigma for each fixed coordinate, using t wedge infinity=t and the zero convention for r; then [F4] proves path-valued measurability. The duration sigma is measurable by step 2.1. [F4, step 2.1]
72: 4.1 For a continuous Brownian W and its sigma, e(W) is measurable for the stopped sigma-algebra. Sigma itself is measurable there by its defining tests. For a fixed t and u, on {sigma<=u} the value W_{t wedge sigma} equals W_{t wedge sigma wedge u}, which is measurable at time u: approximate t wedge sigma wedge u from below by a finite grid in [0,u], use adaptation and continuity. Thus the Borel inverse images of W_{t wedge sigma}, intersected with {sigma<=u}, lie in F_u. Rational coordinates and [F4] finish this claim. By [F3], r(W) is independent of F_sigma and has Brownian finite-dimensional laws. It is C_0-valued by construction; [F4] and the pi-lambda theorem identify its C_0 law with that of X and promote coordinate independence to independence of every Borel path event. Therefore e(W) and r(W) are independent, and r(W) again has the law of X. [F2, F3, F4, step 1.1, step 2.1, step 3.1]
74: 5.1 Set $W^0=X$, $W^{n+1}=r(W^n)$, $\sigma_n=\sigma(W^n)$, $E_n=e(W^n)$, and $S_n=\sum_{j<n}\sigma_j$. These are measurable by step 3.1. Inductively each W^n has the law of X by step 4.1, so each sigma_n is finite and strictly positive almost surely by step 2.1. Their countable intersection is a measurable full event by [F5]. On it, finite induction gives $W^n_t=X_{S_n+t}-X_{S_n}$ simultaneously for all t, and hence the formulas for S_n and E_n in the statement. Outside this event the just-defined measurable E_n provide the promised convention; S_n are extended sums, so subsequent times after infinity stay infinite. [F5, step 2.1, step 3.1, step 4.1]
76: 6.1 Prove by induction that W^n is independent of H_n=sigma(E_0,...,E_{n-1}) and that the preceding E_j are iid with law nu=law(e(X)). For n=0 this is vacuous. If it holds at n, the pair (e(W^n),r(W^n)) is independent of H_n, since it is a measurable function of W^n. Its components are independent by step 4.1. Thus for A in H_n and Borel segment and path sets D,L, $$P(A\cap\{E_n\in D\}\cap\{W^{n+1}\in L\})=P(A)\nu(D)P(X\in L).$$ For fixed L, the pi-lambda theorem extends this identity from intersections A intersect {E_n in D} to all of H_{n+1}. It follows that W^{n+1} is independent of H_{n+1}; taking L to be the whole path space also proves E_n independent of H_n with law nu. Induction proves mutual independence of every finite family of segments, hence the asserted iid sequence. It does not assert independence of the nested entire future processes W^n. [F4, step 3.1, step 4.1, step 5.1]
78: 7.1 Negation preserves the law of X on C_0: centered independent normal increments are unchanged jointly under sign reversal by the even normal density and reflection substitution in [F6], so finite-dimensional laws agree, and [F4] and pi-lambda give equality of path laws. The map d(w)=w(sigma(w)) on finite sigma, zero otherwise, is Borel by the evaluation argument in step 3.1. Also sigma(-w)=sigma(w) and d(-w)=-d(w). Step 2.1 makes its value a sign almost surely, so its two probabilities are equal and sum to one. Each displacement d(W^n) is a function of E_n: for finite duration it is the stopped path evaluated at that duration. Step 6.1 therefore makes these displacements independent fair signs, including the first d(W^0)=X_{S_1}. Telescoping gives X_{S_n}=sum_{j<n}d(W^j) on the full event in step 5.1, proving the embedded-walk claim. [F1, F4, F6, step 2.1, step 3.1, step 5.1, step 6.1]
```

#### probability / confirmed 002: `thm-brownian-markov-property`

- Location: **Proof**; source lines 58, 62.
- Pages: `brownian-motion-markov-properties-and-hitting-times`.
- Visible defect: Several inline formulas are plain text, so subscripts/braces and ASCII relations display literally in the proof instead of as math. The source omits math delimiters for these expressions; the KaTeX receipt reports no parse error.
- Future repair: Wrap the inline mathematical expressions in math delimiters; retain the proof text and hypotheses.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/probability/screenshots/thm-brownian-markov-property--01.png), [tile 02](math-library-rendering-audit-2026-10-23/probability/screenshots/thm-brownian-markov-property--02.png); [frozen source](math-library-rendering-audit-2026-10-23/probability/snapshots/thm-brownian-markov-property.md).

Exact frozen source lines:

```text
58: 1.1 First suppose t>0 and put Y=B_{s+t}-B_s. For any finite set of past times in [0,s], form their increasing union with {0,s,s+t}, delete repetitions, and apply [F1]. The past values differ almost surely from the cumulative sums of the increments up to s only by B_0=0; the final increment Y is independent of all those earlier increments by [F2]. For any Borel past cylinder its indicator agrees almost surely with the corresponding cylinder in those cumulative sums, so its joint probability with {Y in C} factors for every Borel C. This includes cylinders involving time zero and the case s=0, where all past cylinders have probability zero or one. Finite past cylinders generate the entire raw past; the pi-system criterion [F2] therefore makes sigma(Y) independent of that past. Finally Y has law N(0,t), also the law of B_t since B_0=0 almost surely. [F1, F2, given]
62: 3.1 Suppose $t>0$ and put $u_n=s+t/(n+2)$ for integers n>=0, so $u_n\downarrow s$ with $s<u_n<s+t$. Put $h_n=s+t-u_n>0$. Applying step 2.1 at the time pair $(u_n,h_n)$ and then completing the conditioning sigma-algebra as in [F6] gives $E[f(B_{s+t})\mid\overline{\mathcal F}{}^0_{u_n}]=P_{h_n}f(B_{u_n})$ almost surely. Indeed, bounded event integrals are unchanged when an event is replaced by a raw event differing by a null set. [F5, F6, step 2.1]
```

#### probability / confirmed 003: `ex-birth-and-death-chain-recurrence-criterion`

- Location: **ItemBody statement**; source lines 44.
- Pages: `recurrence-transience-and-hitting-times-for-markov-chains-examples`.
- Visible defect: The inline math source omits the backslash before mathbb. The renderer therefore shows the literal word “mathbb” followed by N₀ instead of the natural-number symbol ℕ₀.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/probability/screenshots/ex-birth-and-death-chain-recurrence-criterion--01.png), [tile 02](math-library-rendering-audit-2026-10-23/probability/screenshots/ex-birth-and-death-chain-recurrence-criterion--02.png), [tile 03](math-library-rendering-audit-2026-10-23/probability/screenshots/ex-birth-and-death-chain-recurrence-criterion--03.png), [tile 04](math-library-rendering-audit-2026-10-23/probability/screenshots/ex-birth-and-death-chain-recurrence-criterion--04.png); [frozen source](math-library-rendering-audit-2026-10-23/probability/snapshots/ex-birth-and-death-chain-recurrence-criterion.md).

Exact frozen source lines:

```text
44: Assume AC. Let $X$ be a Markov chain on $mathbb N_0$ whose only possible
```

#### probability / confirmed 004: `thm-discrete-strong-markov-property`

- Location: **Proof**; source lines 51.
- Pages: `markov-kernels-and-markov-chains`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Move the aligned identity into its own display-math paragraph, with explanatory prose before and after in separate paragraphs. Keep both conditional-expectation sides and the eventwise test unchanged.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/probability/screenshots/thm-discrete-strong-markov-property--01.png); [frozen source](math-library-rendering-audit-2026-10-23/probability/snapshots/thm-discrete-strong-markov-property.md).

Exact frozen source lines:

```text
51: 2.1 Fix $A\in\mathcal F_\tau$. For every finite $n$, [F2] and [F1] give [F1, F2, F4, step 1.1] $$ \begin{aligned} &\mathbb E[1_{A\cap\{\tau=n\}}H(X_n,X_{n+1},\ldots)]\\ &\qquad=\mathbb E[1_{A\cap\{\tau=n\}}h(X_n)]. \end{aligned} $$ Sum from $n=0$ to $N$. The partial sums on either side are bounded in absolute value by $\lVert H\rVert_\infty$ and converge pointwise to $1_AZ_H$ and $1_AR_h$. By [F4], letting $N\to\infty$ gives $\mathbb E[1_AZ_H]=\mathbb E[1_AR_h]$. Together with step 1.1 this is the defining event test for the displayed conditional expectation. Empty $A$, full $A$, $\tau=0$, and an almost-surely infinite $\tau$ require no separate argument. [F1, F2, F4, step 1.1]
```

#### probability / confirmed 005: `lem-characteristic-function-of-a-multivariate-normal-law`

- Location: **Facts & Assumptions**; source lines 34.
- Pages: `central-limit-theorems`.
- Visible defect: The scalar characteristic function is displayed as ordinary ASCII text (`exp(ims-sigma^2s^2/2`) while adjacent formulas render in math mode. The intended expression is not readable as typed mathematics.
- Future repair: Typeset the formula in math mode, using the intended variable names and standard notation (for example $\exp(ims-\sigma^2s^2/2)$).
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/probability/screenshots/lem-characteristic-function-of-a-multivariate-normal-law--01.png); [frozen source](math-library-rendering-audit-2026-10-23/probability/snapshots/lem-characteristic-function-of-a-multivariate-normal-law.md).

Exact frozen source lines:

```text
34: [F2] A scalar normal has transform exp(ims-sigma^2s^2/2). [[lem-characteristic-function-of-a-normal-law]].
```

#### probability / confirmed 006: `thm-lindeberg-feller-central-limit-theorem-sufficiency`

- Location: **Facts & Assumptions**; source lines 34, 42.
- Pages: `central-limit-theorems`.
- Visible defect: The scalar remainder bound and standard-normal characteristic transform appear as baseline ASCII (including raw caret and function text), unlike the surrounding rendered formulas.
- Future repair: Typeset both formula fragments in math mode, e.g. $\min(|u|^3/3,4u^2)$ and $\exp(-t^2/2)$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/probability/screenshots/thm-lindeberg-feller-central-limit-theorem-sufficiency--01.png), [tile 02](math-library-rendering-audit-2026-10-23/probability/screenshots/thm-lindeberg-feller-central-limit-theorem-sufficiency--02.png); [frozen source](math-library-rendering-audit-2026-10-23/probability/snapshots/thm-lindeberg-feller-central-limit-theorem-sufficiency.md).

Exact frozen source lines:

```text
34: [F2] The scalar remainder obeys min(|u|^3/3,4u^2), and the centered exponential increment is bounded by u^2. [[lem-second-order-characteristic-function-expansion]].
42: [F6] The standard-normal transform is exp(-t^2/2). [[lem-characteristic-function-of-a-normal-law]].
```

#### probability / confirmed 007: `ex-conditional-density-of-a-bivariate-normal-law`

- Location: **Facts & Assumptions**; source lines 42.
- Pages: `conditional-distributions-and-regular-conditional-probability-examples`.
- Visible defect: Fact [F2] presents the mathematical formula phi(t)=exp(-t^2/2)/sqrt(2pi) as un-delimited plain text. The local HTML and original screenshot render the ASCII identifier, caret, and slash expression instead of typeset mathematics. The surrounding item equations are typeset normally.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/probability/research/math-library-rendering-audit-2026-10-23/probability/screenshots/ex-conditional-density-of-a-bivariate-normal-law--01.png); [frozen source](math-library-rendering-audit-2026-10-23/probability/snapshots/ex-conditional-density-of-a-bivariate-normal-law.md).

Exact frozen source lines:

```text
42: [F2] Under AC phi(t)=exp(-t^2/2)/sqrt(2pi) is a positive normalized density. [[lem-normal-density-has-total-mass-one]].
```

#### probability / confirmed 008: `ex-empirical-laws-of-a-finite-valued-iid-sample`

- Location: **Verification**; source lines 48, 50.
- Pages: `weak-convergence-tightness-and-representation-examples`.
- Visible defect: The frequency symbol q_{n,j} and convergence arrow are emitted as literal ASCII text in the rendered proof, while neighboring p_j expressions are typeset. The rendered formula therefore has an unformatted subscript and -> arrow.
- Future repair: Typeset both frequency occurrences consistently, for example $q_{n,j}	o p_j$, including the sentence identifying the empirical integral.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/probability/screenshots/ex-empirical-laws-of-a-finite-valued-iid-sample--01.png); [frozen source](math-library-rendering-audit-2026-10-23/probability/snapshots/ex-empirical-laws-of-a-finite-valued-iid-sample.md).

Exact frozen source lines:

```text
48: 1.2 On such an outcome put $q_{n,j}=n^{-1}\#\{i\le n:X_i=a_j\}$. If each q_{n,j}->$p_j$, then for bounded continuous f, $\int f\,d\widehat\mu_n=\sum_jq_{n,j}f(a_j)\to\sum_jp_jf(a_j)=\int f\,d\mu$, proving weak convergence. [given, algebra]
50: 2.1 Conversely, for $m\ge2$ put $r_j=\frac12\min_{l\ne j}\|a_j-a_l\|>0$ and $f_j(x)=\max(0,1-\|x-a_j\|/r_j)$. This bounded continuous test is one at $a_j$ and zero at every other $a_l$. Its empirical integral is q_{n,j} and its $\mu$ integral is $p_j$, so weak convergence implies q_{n,j}->$p_j$. If $m=1$, both frequencies are identically one and the constant test suffices. [given, algebra] ∎
```

