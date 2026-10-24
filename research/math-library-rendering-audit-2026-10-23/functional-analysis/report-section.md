## Functional Analysis

Completed visual review of **938 items across 70 pages**, with **1633 image tiles**. Findings: 40 confirmed, 2 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/functional-analysis/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/functional-analysis/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/functional-analysis/category-review-receipt.json).

### Confirmed rendering defects

#### functional-analysis / confirmed 001: `lem-composition-operator-norm-inequality`

- Location: **frontmatter title**; source lines 4.
- Pages: `bounded-linear-operators-and-quotient-spaces`.
- Visible defect: The item heading visibly prints the TeX commands and delimiters literally as `|ST|\le|S|\,|T|` instead of typesetting the norm inequality.
- Future repair: Put the formula in math delimiters in the title, or use a math-free title such as “Composition of bounded operators is bounded.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-composition-operator-norm-inequality--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-composition-operator-norm-inequality.md).

Exact frozen source lines:

```text
4: title: "Composition satisfies \\|ST\\|\\le\\|S\\|\\,\\|T\\|"
```

#### functional-analysis / confirmed 002: `ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm`

- Location: **Facts & Assumptions / L4 linked reference title**; source lines 54.
- Pages: `bounded-linear-operators-and-quotient-spaces-examples`.
- Visible defect: The linked title for `def-quotient-seminorm` is printed with literal `\(`, `\|`, `\inf`, and `\operatorname` commands in the original screenshot. The assigned item’s own sentence and formula are otherwise typeset.
- Future repair: Retitle the linked definition with math-free prose, or update title rendering so title math is parsed.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm.md).

Exact frozen source lines:

```text
54: [L4] The quotient seminorm is the infimum over representatives ([[def-quotient-seminorm]]).
```

#### functional-analysis / confirmed 003: `thm-schauder-compact-adjoint-theorem`

- Location: **Facts & Assumptions / A2 linked reference title**; source lines 40.
- Pages: `compact-operators-and-riesz-schauder-theory`.
- Visible defect: The linked title for `thm-bounded-operator-space-is-banach` is printed literally as `If \(Y\) is Banach then \(\mathcal B(X,Y)\) is Banach`; title math is not parsed in the preview.
- Future repair: Use a math-free linked title such as “Bounded operators into a Banach space form a Banach space,” or parse title math.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-schauder-compact-adjoint-theorem--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-schauder-compact-adjoint-theorem.md).

Exact frozen source lines:

```text
40: [A2] If $X$ is Banach then $X^*=\mathcal B(X,\mathbb K)$ is Banach ([[thm-bounded-operator-space-is-banach]], [[def-dual-space-of-a-normed-space]], [[cor-finite-dimensional-normed-spaces-are-banach]]), and a closed subset of a Banach space is complete (claim 2 of [[thm-complete-subspace-iff-closed]], [[def-banach-space]]).
```

#### functional-analysis / confirmed 004: `ex-choice-free-discontinuous-functional-on-c00`

- Location: **Title**; source lines 4.
- Pages: `finite-dimensional-normed-spaces-and-riesz-lemma-examples`.
- Visible defect: The rendered title exposes the literal underscore in c_00, rather than typesetting the subscript or spelling the notation out.
- Future repair: Use renderer-supported math delimiters for c_{00}, or write the space name in words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/ex-choice-free-discontinuous-functional-on-c00--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/ex-choice-free-discontinuous-functional-on-c00.md).

Exact frozen source lines:

```text
4: title: "A choice-free discontinuous linear functional on c_00"
```

#### functional-analysis / confirmed 005: `thm-c-zero-is-not-complemented-in-ell-infinity`

- Location: **Title**; source lines 4.
- Pages: `geometric-hahn-banach-and-convex-separation-examples`.
- Visible defect: The rendered title exposes the literal underscore in c_0 instead of a subscript.
- Future repair: Use renderer-supported math delimiters for c_0, or write “the space of sequences converging to zero” in words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-c-zero-is-not-complemented-in-ell-infinity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-c-zero-is-not-complemented-in-ell-infinity.md).

Exact frozen source lines:

```text
4: title: c_0 is not complemented in ell-infinity
```

#### functional-analysis / confirmed 006: `cor-separable-reflexive-space-has-separable-dual`

- Location: **Proof technique**; source lines 49.
- Pages: `reflexivity-and-eberlein-smulian`.
- Visible defect: The uppercase technique banner prints the dollar delimiters and caret notation literally (`$X^*$`). Uppercase technique banners are expected; the raw math inside is the rendering defect.
- Future repair: Spell out “the dual space” in this banner, or render its formula with supported markup.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/cor-separable-reflexive-space-has-separable-dual--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/cor-separable-reflexive-space-has-separable-dual.md).

Exact frozen source lines:

```text
49: **Proof technique:** transport a dense set through the canonical isometry and apply the preceding theorem to $X^*$.
```

#### functional-analysis / confirmed 007: `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`

- Location: **Proof technique**; source lines 59.
- Pages: `tempered-distributions-and-the-fourier-transform`.
- Visible defect: The uppercase technique banner prints `$L^2$` literally, including dollar delimiters and the caret.
- Future repair: Replace the formula with “square-integrable approximation” or use supported markup.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms.md).

Exact frozen source lines:

```text
59: **Proof technique:** Fubini followed by $L^2$ approximation.
```

#### functional-analysis / confirmed 008: `ex-fredholm-determinant-of-a-finite-rank-operator`

- Location: **Verification, final step**; source lines 128.
- Pages: `fredholm-determinants-and-the-lidskii-trace-formula-examples`.
- Visible defect: The final proof line displays the literal `\qed` command after the citation tags.
- Future repair: Use the schema-supported QED glyph `∎` after the trailing tags.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/ex-fredholm-determinant-of-a-finite-rank-operator--03.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/ex-fredholm-determinant-of-a-finite-rank-operator.md).

Exact frozen source lines:

```text
128: 4.1 At $z=0$ both sides of the finite-rank identity and rank-one formula equal $1$. The zero-rank case, the zero vector and zero Hilbert space, and the nilpotent rank-one case are covered in steps 2.1, 3.1, and 3.2; nonzero $\alpha$ gives the scalar factor $1+z\alpha$ in step 3.2. There is no interval endpoint parameter. The only assumption is AC [A1]; no choices are made in the finite-dimensional rank-one calculation, and both conclusions are equalities rather than iff claims. [A1, A5, A6, A8, A9, step 2.1, step 3.1, step 3.2] \qed 
```

#### functional-analysis / confirmed 009: `lem-fredholm-determinant-zeros-and-algebraic-multiplicities`

- Location: **Proof, final step**; source lines 164.
- Pages: `fredholm-determinants-and-the-lidskii-trace-formula`.
- Visible defect: The final proof line displays the literal `\qed` command after the citation tags.
- Future repair: Use the schema-supported QED glyph `∎` after the trailing tags.
- Image evidence: [tile 04](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-fredholm-determinant-zeros-and-algebraic-multiplicities--04.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-fredholm-determinant-zeros-and-algebraic-multiplicities.md).

Exact frozen source lines:

```text
164: 7.1 The zero operator and zero Hilbert space are covered by step 1.1; on $H=\mathbb C$ with $T=tI$, the determinant is $1+zt$, so for $t\ne0$ its zero is simple and $m_{\mathrm{alg}}(t;T)=1$, while $t=0$ has no zero and every $I+zT$ is invertible. An empty nonzero spectrum yields no noninvertible $I+zT$ by step 5.1. There is no interval parameter or one-sided endpoint. The exact assumption is AC [A1]; it is used through the Riesz–Schauder, Riesz-projection, and algebraic-multiplicity suppliers, and AC supplies the AC$_\omega$ required by the local determinant and trace-class suppliers through [A15]. The finite Jordan-string argument makes no additional choice. Both iff directions were proved in step 6.1; the multiplicity assertion is a factorization claim, not an iff. [A1, A4, A15, step 1.1, step 4.1, step 5.1, step 6.1] \qed 
```

#### functional-analysis / confirmed 010: `lem-quasinilpotent-trace-class-operator-has-zero-trace`

- Location: **Proof, final step**; source lines 155.
- Pages: `fredholm-determinants-and-the-lidskii-trace-formula`.
- Visible defect: The final proof line displays the literal `\qed` command after the citation tags.
- Future repair: Use the schema-supported QED glyph `∎` after the trailing tags.
- Image evidence: [tile 04](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-quasinilpotent-trace-class-operator-has-zero-trace--04.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-quasinilpotent-trace-class-operator-has-zero-trace.md).

Exact frozen source lines:

```text
155: 8.1 Step 6.1 with $a=0$ gives $D_Q(z)=1$ for every $z$; step 7.1 gives $\operatorname{tr}(Q)=0$. This proves both conclusions. [step 6.1, step 7.1, step 7.2] \qed 
```

#### functional-analysis / confirmed 011: `def-hilbert-exterior-power-and-induced-operator`

- Location: **Statement or Facts & Assumptions**; source lines 103.
- Pages: `fredholm-determinants-and-the-lidskii-trace-formula`.
- Visible defect: The linked titles expose literal TeX such as \mathcal B(X,Y) instead of typeset mathematics.
- Future repair: Correct or escape the linked item title so its mathematical notation is rendered by the title renderer; preserve the linked item identity and claim.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/def-hilbert-exterior-power-and-induced-operator--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/def-hilbert-exterior-power-and-induced-operator.md).

Exact frozen source lines:

```text
103: [L1] The bounded operator space $\mathcal B(X,\mathbb C)$ has the unit-ball operator norm and is Banach because $\mathbb C$ is complete ([[def-space-of-bounded-linear-operators]], [[def-operator-norm]], [[thm-bounded-operator-space-is-banach]], [[thm-complex-plane-is-complete]]). The proof uses uniquely determined pointwise limits, not a family of arbitrary choices.
```

#### functional-analysis / confirmed 012: `def-transpose-of-a-bounded-operator`

- Location: **Statement or Facts & Assumptions**; source lines 25.
- Pages: `dual-spaces-adjoint-operators-and-annihilators`.
- Visible defect: The linked title exposes literal \le markup in the rendered sentence.
- Future repair: Correct or escape the linked item title so its mathematical notation is rendered by the title renderer; preserve the linked item identity and claim.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/def-transpose-of-a-bounded-operator--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/def-transpose-of-a-bounded-operator.md).

Exact frozen source lines:

```text
25: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $$T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$$ The duals are [[def-dual-space-of-a-normed-space]]. Composition is bounded by [[lem-composition-operator-norm-inequality]], so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.
```

#### functional-analysis / confirmed 013: `lem-quotient-seminorm-is-representative-independent`

- Location: **Statement or Facts & Assumptions**; source lines 38, 44.
- Pages: `bounded-linear-operators-and-quotient-spaces`.
- Visible defect: The linked title prints raw TeX commands and untypeset subscript syntax, including \inf and \operatorname{dist}.
- Future repair: Correct or escape the linked item title so its mathematical notation is rendered by the title renderer; preserve the linked item identity and claim.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-quotient-seminorm-is-representative-independent--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-quotient-seminorm-is-representative-independent.md).

Exact frozen source lines:

```text
38: Therefore the quotient seminorm of [[def-quotient-seminorm]] is well defined.
44: [L1] The quotient seminorm is defined by $\|x+M\|_{X/M} := \inf_{m \in M}\|x+m\|$ ([[def-quotient-seminorm]]).
```

#### functional-analysis / confirmed 014: `thm-bounded-borel-pvm-integral`

- Location: **Statement or Facts & Assumptions**; source lines 51.
- Pages: `spectral-measures-and-borel-functional-calculus`.
- Visible defect: The linked title exposes literal \mathcal B(X,Y) markup.
- Future repair: Correct or escape the linked item title so its mathematical notation is rendered by the title renderer; preserve the linked item identity and claim.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-bounded-borel-pvm-integral--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-bounded-borel-pvm-integral.md).

Exact frozen source lines:

```text
51: [A4] $\mathcal B(H)$ is complete for the operator norm ([[thm-bounded-operator-space-is-banach]], [[def-hilbert-space]]).
```

#### functional-analysis / confirmed 015: `thm-continuous-functional-calculus-for-bounded-self-adjoint-operators`

- Location: **Statement or Facts & Assumptions**; source lines 39.
- Pages: `continuous-functional-calculus-for-self-adjoint-and-normal-operators`.
- Visible defect: The linked title exposes literal \mathcal B(X,Y) markup.
- Future repair: Correct or escape the linked item title so its mathematical notation is rendered by the title renderer; preserve the linked item identity and claim.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-continuous-functional-calculus-for-bounded-self-adjoint-operators--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-continuous-functional-calculus-for-bounded-self-adjoint-operators.md).

Exact frozen source lines:

```text
39: [A6] $\mathcal B(H)$ is a complex Banach space with submultiplicative norm for composition, so operator-norm Cauchy sequences converge and multiplication is continuous ([[thm-bounded-operator-space-is-banach]], [[lem-bounded-hilbert-operators-form-a-c-star-algebra]]).
```

#### functional-analysis / confirmed 016: `thm-fredholm-index-is-additive`

- Location: **Statement or Facts & Assumptions**; source lines 38.
- Pages: `compact-operators-and-riesz-schauder-theory`.
- Visible defect: The linked title exposes literal \to markup in the quotient-map formula.
- Future repair: Correct or escape the linked item title so its mathematical notation is rendered by the title renderer; preserve the linked item identity and claim.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-fredholm-index-is-additive--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-fredholm-index-is-additive.md).

Exact frozen source lines:

```text
38: [A3] For a bounded $T$ the cokernel is the quotient $\operatorname{coker}T=Y/\operatorname{ran}T$ with cosets written $y+\operatorname{ran}T$ ([[def-quotient-vector-space-coset-notation]], [[def-fredholm-operator-cokernel-and-index]]); $\mathrm{AC}$ supplies DC ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-dependent-choice]], [[def-banach-space]]).
```

#### functional-analysis / confirmed 017: `thm-hilbert-spaces-are-reflexive-by-riesz-representation`

- Location: **Statement or Facts & Assumptions**; source lines 47.
- Pages: `banach-valued-integration-and-the-radon-nikodym-property`.
- Visible defect: The linked title exposes literal \mathcal B(X,Y) markup.
- Future repair: Correct or escape the linked item title so its mathematical notation is rendered by the title renderer; preserve the linked item identity and claim.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-hilbert-spaces-are-reflexive-by-riesz-representation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-hilbert-spaces-are-reflexive-by-riesz-representation.md).

Exact frozen source lines:

```text
47: [L4] Completeness for the inner-product norm is the Banach condition ([[def-banach-space]]). The continuous dual uses the operator norm ([[def-dual-space-of-a-normed-space]]) and is Banach because its scalar target is Banach ([[thm-bounded-operator-space-is-banach]]).
```

#### functional-analysis / confirmed 018: `thm-min-max-principle-below-essential-spectrum`

- Location: **Statement and proof**; source lines 24, 26, 46, 48, 50, 52, 53, 54, 56, 58, 60.
- Pages: `unbounded-self-adjoint-operators-and-stones-theorem`.
- Visible defect: Several mathematical expressions in the Statement and Proof are un-delimited plain text, so operators and symbols appear as source-style ASCII instead of mathematics. Visible examples include “n>=1”, “inf(empty)=+infinity”, “A>=c”, “alpha_n”, “dim F<=n-1”, “F-perp”, “sigma(A) intersect [c,r]”, and “E_n=Lambda”. The displayed variational equation on source line 25 is typeset, isolating this to surrounding expressions.
- Future repair: Typeset the mathematical identifiers, inequalities, subscripts, and set operations in the affected prose while preserving the complete statement and argument.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-min-max-principle-below-essential-spectrum--01.png), [tile 02](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-min-max-principle-below-essential-spectrum--02.png), [tile 03](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-min-max-principle-below-essential-spectrum--03.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-min-max-principle-below-essential-spectrum.md).

Exact frozen source lines:

```text
24: Assume the Axiom of Choice. Let A be a self-adjoint operator on a complex Hilbert space H, bounded below by c, with form domain Q(A) and form q_A of [[lem-spectral-form-domain-and-core-of-a-semibounded-operator]]. Put $\Lambda=\inf\sigma_{\rm ess}(A)$, with inf(empty)=+infinity. List the eigenvalues below Lambda in nondecreasing order with multiplicity as E_1,E_2,..., setting E_n=Lambda after the list is exhausted. Then for every integer n>=1,
26: All infima over empty sets are +infinity. Finite dimensions here are ordinary linear dimensions, equivalently Hilbert dimensions for these finite-dimensional subspaces. The second outer family is always nonempty, since it contains {0}. Whenever Q(A) contains an (n-1)-dimensional subspace, the same value is obtained by requiring dim F=n-1. The at-most convention includes the exhausted finite-dimensional case for all n without taking a supremum over an empty outer family.
46: **Given:** A>=c, its spectral measure E, and the variational quantities in the statement.
48: 1.1 Suppose first H is nonzero. For any real r<Lambda with r>=c, each point of [c,r] has a finite-rank interval neighborhood by [A1]. Use the family of all such intervals and the finite subcover property [A4]. Each chosen interval contains finitely many spectral points, so sigma(A) intersect [c,r] is finite. These points are discrete eigenvalues of finite multiplicity by [A1]. Since E is carried by sigma(A) intersect [c,infinity), $E((-\infty,r])$ is the finite sum of their singleton projections. For r<c it is zero. In particular the total multiplicity below each r<Lambda is finite. The eigenvalues below Lambda can therefore be ordered from below: if any remain, choose one such u; the nonempty finite set of remaining values <=u has a smallest member, which is the smallest remaining value altogether. Repeat with its finite multiplicity. No value can be omitted forever, since only finitely many terms lie below any fixed u<Lambda. A countable increasing sequence of bounds r approaching Lambda (or infinity) covers all values; [A5] licenses the associated orthonormal eigenvector choices. [A1, A2, A3, A4, A5]
50: 1.2 Write alpha_n for the first outer value over Q(A), beta_n for the second (dim F<=n-1), and alpha_n^D for the first over D(A). If dim L=n and dim F=r<=n-1, choose finite bases and impose the r equations $\langle x,f_j\rangle=0$ on x in L. Finite-dimensional elimination gives a nonzero solution, since there are fewer equations than unknowns. Normalize it to obtain a unit vector in L intersect F-perp. Thus the supremum on L is at least the infimum on Q(A) intersect F-perp. For each F take the infimum over L, then the supremum over F, giving beta_n<=alpha_n; this remains true when there is no L because alpha_n=+infinity. The trial-space inclusion gives alpha_n<=alpha_n^D. [A3, A4]
52: 2.1 If Lambda is finite, it belongs to the essential spectrum: that set is nonempty in this case, bounded below by c, and closed; for every positive integer m choose a point between its infimum and Lambda+1/m and use closedness. Hence every interval around Lambda has infinite-rank projection by [A1]. If Lambda=+infinity and only k eigenvalues with multiplicity occur, there is no other spectrum: every finite spectral point lies below Lambda and is one of these eigenvalues. Support then makes their eigenspaces sum to all of H, so dim H=k and D(A)=Q(A)=H. The same last assertion holds directly with k=0 for H={0}. [A1, A2, A3, A5, step 1.1]
53: 
54: 2.2 If E_n<Lambda, choose orthonormal eigenvectors phi_1,...,phi_n ordered with multiplicity as in step 1.1. Distinct eigenspaces are orthogonal because symmetry gives $(E_j-E_k)\langle\varphi_j,\varphi_k\rangle=0$; within each eigenspace choose an orthonormal basis by finite Gram-Schmidt. For $L_0=\operatorname{span}\{\varphi_1,\ldots,\varphi_n\}$, contained in D(A), $q_A[\sum_j a_j\varphi_j]=\sum_j E_j|a_j|^2$, so its unit-sphere supremum is E_n. For $F_0=\operatorname{span}\{\varphi_1,\ldots,\varphi_{n-1}\}$, all eigenspaces strictly below E_n are contained in F_0. The projection E((-infinity,E_n)) therefore annihilates every x in F_0-perp; repetitions of E_n need not be removed. Its scalar measure is carried on [E_n,infinity), so q_A[x]>=E_n for unit x in Q(A) intersect F_0-perp. Equality holds at phi_n. Consequently E_n<=beta_n<=alpha_n<=alpha_n^D<=E_n by step 1.2. This proves the formulas, the D(A) version and both attainments in this case. [A1, A2, A3, A4, step 1.1, step 1.2]
56: 3.1 If E_n=Lambda is finite, exactly k<n eigenvalues occur below Lambda with multiplicity. Let F_0 be the span of all their orthonormal eigenvectors (zero if k=0). It is an admissible space of dimension k<=n-1. By support, vectors perpendicular to it have no spectral mass below Lambda, so the inner infimum is at least Lambda and beta_n>=Lambda. For any epsilon>0, the range of E((Lambda-epsilon,Lambda+epsilon)) is infinite dimensional by step 2.1. Choose n independent vectors there and use finite Gram-Schmidt to get an n-dimensional subspace L_epsilon in the same range. Bounded spectral support puts it in D(A) and gives q_A[x]<=Lambda+epsilon on its unit sphere. Hence alpha_n^D<=Lambda+epsilon. Let epsilon decrease to zero in the inequalities of step 1.2 to conclude beta_n=alpha_n=alpha_n^D=Lambda. No form-cross-term estimate or Weyl-sequence approximation is needed. [A1, A2, A3, A4, step 2.1, step 1.2]
58: 3.2 If E_n=Lambda=+infinity, step 2.1 gives dim H=k<n, D(A)=Q(A)=H, with k the exhausted total multiplicity. There is no n-dimensional trial space, so alpha_n=alpha_n^D=+infinity. F=H has dimension k<=n-1 and is admissible for beta_n. Its orthogonal complement contains no unit vector, so its inner infimum is +infinity and beta_n=+infinity. This includes the zero Hilbert space for every n>=1. [A4, step 2.1, step 1.2]
60: 4.1 Finally suppose Q(A) has a subspace of dimension n-1. Any finite-dimensional F contained in Q(A) with dim F<n-1 can be enlarged inside Q(A) to dimension n-1: as long as its dimension is smaller, choose a vector from the given (n-1)-dimensional subspace not in the current span and adjoin it. Enlarging F shrinks Q(A) intersect F-perp, so its inner infimum cannot decrease. Taking suprema shows that restricting the second outer family to exact dimension n-1 leaves beta_n unchanged; the reverse inequality is family inclusion. When n=1 the only space is F={0}. When H is finite dimensional and n exceeds dim H+1, the at-most convention remains necessary. The real lower bound c was never shifted away, so negative eigenvalues and threshold zero require no special argument. AC is used exactly in [A5] and the infimum-approaching sequence in step 2.1. [A4, A5, step 2.1, step 2.2, step 3.1, step 3.2] ∎
```

#### functional-analysis / confirmed 019: `thm-kato-rellich`

- Location: **Statement and proof**; source lines 36, 38, 50, 52, 54, 56, 58, 60, 62.
- Pages: `unbounded-self-adjoint-operators-and-stones-theorem`.
- Visible defect: Plain-text formula notation remains visibly untypeset in the Statement support and multiple Proof steps. Examples include “a,b>=0 with a<1”, “0<=a<1 and b>=0”, “H={0}”, “plus or minus i mu”, “r_z(v)”, “A>=gamma”, “lambda+gamma=d>0”, “v>=gamma”, and “A+B”. Nearby expressions already wrapped in dollar delimiters render correctly.
- Future repair: Wrap and typeset the formula fragments consistently, including the zero-space case, nonreal shifts, resolvent notation, and lower-bound inequalities.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-kato-rellich--01.png), [tile 02](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-kato-rellich--02.png), [tile 03](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-kato-rellich--03.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-kato-rellich.md).

Exact frozen source lines:

```text
36: [A1] Relative boundedness supplies finite a,b>=0 with a<1 and $\|Bx\|\le a\|Ax\|+b\|x\|$ on D(A). The graph norm is $(\|x\|^2+\|Ax\|^2)^{1/2}$; graph closure defines the operator closure. [[def-relative-boundedness-with-respect-to-an-operator]] [[def-unbounded-linear-operator-domain-and-graph]] [[def-densely-defined-closed-and-closable-operator]]
38: [A2] Symmetry is the identity $\langle Tx,y\rangle=\langle x,Ty\rangle$ on the domain; self-adjoint operators are closed and densely defined. A densely defined symmetric S is self-adjoint if both ranges of S plus and minus i mu equal H for some mu>0. Nonreal points are resolvent points of a self-adjoint operator. The convention is R_T(z)=(z-T)^{-1}. [[def-symmetric-self-adjoint-and-essentially-self-adjoint]] [[thm-self-adjointness-range-criterion]] [[thm-self-adjoint-resolvent-estimate]] [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]
50: **Given:** the operators and admissible pair (a,b) in the statement, with 0<=a<1 and b>=0.
52: 1.1 If H={0}, all domains and graphs are zero and all conclusions hold directly. Otherwise use [A4]. For z=plus or minus i mu, mu>0, put r_z(v)=(z-v)^{-1}. The bounds |r_z(v)|<=1/mu and |v r_z(v)|<=1 show that r_z(A) maps H into D(A), that $\|r_z(A)\|\le1/\mu$, and that $\|A r_z(A)\|\le1$. The product rule gives (z-A)r_z(A)=I on H and r_z(A)(z-A)=I on D(A), so this is R_A(z). Thus $\|BR_A(z)\|\le a+b/\mu<1$ when, for example, $\mu=1+2b/(1-a)$. [A1, A2, A4, given]
54: 1.2 For any nonzero-space self-adjoint T and real c, the spectral-measure equivalence $T\ge c$ if and only if $E(( -\infty,c))=0$ follows directly. If T>=c and $J_n=[-(n+1),c-1/(n+1)]$ has a nonzero projection, a nonzero x in its range belongs to D(T), has E_x carried by J_n, and satisfies $\langle Tx,x\rangle\le(c-1/(n+1))\|x\|^2$, a contradiction. These increasing sets exhaust (-infinity,c), so countable additivity gives zero projection. Conversely zero projection below c gives $\langle Tx,x\rangle=\int v\,dE_x\ge c\|x\|^2$ for every x in D(T). Also if every real t<c is a resolvent point, the essential-range characterization in [A4] supplies a zero-projection open neighborhood of each t. The rational intervals contained in such neighborhoods form a countable cover of (-infinity,c); their union has zero projection by countable subadditivity of each E_x. Therefore again T>=c. This does not require a finite spectral infimum or any resolvent-distance formula. [A4]
56: 2.1 Put S=A+B on exactly D(A). For z=plus or minus i mu the identity $z-S=(I-BR_A(z))(z-A)$ holds on D(A), since R_A(z)(z-A)x=x there. The first factor is boundedly invertible by [A3], and z-A is bijective D(A) to H. Hence both nonreal shifts of S are onto. S is symmetric by summing the two symmetry identities and densely defined because D(A) is dense. The range criterion makes S self-adjoint. No second-resolvent identity with a previously closed S is assumed. [A1, A2, A3, step 1.1]
58: 3.1 Suppose A>=gamma and let lambda+gamma=d>0. By step 1.2 E_A is carried by [gamma,infinity). Define r(v)=(-lambda-v)^{-1} on that half-line and zero outside. For v>=gamma, $|r(v)|\le1/d$ and $|v r(v)|\le\max(1,|\gamma|/d)$: for v>=0 the ratio v/(v+lambda) is monotone with its maximum at an endpoint or its limiting value 1; for gamma<=v<0, (-v)/(v+lambda) decreases with v since lambda>0 in that case. The spectral product rule shows r(A)=R_A(-lambda), exactly as in step 1.1, and hence $\|BR_A(-\lambda)\|\le a\max(1,|\gamma|/d)+b/d$. Put $C=\max\{a|\gamma|+b,b/(1-a)\}$. For every d>C this last bound is strictly below one: if d>=|gamma| it equals a+b/d<1 (also when b=0); if d<|gamma| it equals (a|gamma|+b)/d<1. The factorization of step 2.1 therefore proves that every real number t<gamma-C is in rho(S), with bounded inverse $R_A(t)(I-BR_A(t))^{-1}$. Apply step 1.2 to the already self-adjoint S to obtain S>=gamma-C, the stated bound including its endpoint. [A1, A3, A4, step 1.1, step 2.1, step 1.2]
60: 4.1 If A is essentially self-adjoint, put T=closure(A). For each x in D(T) choose x_n in D(A) with x_n to x and Ax_n to Tx, using [A5]. The inequality in [A1] applied to x_n-x_m makes Bx_n Cauchy. Define Btilde x as its limit. Two such approximations give the same limit by the same inequality applied to their difference. Approximating x and y and their linear combinations proves linearity, $\|\widetilde Bx\|\le a\|Tx\|+b\|x\|$, and symmetry by passing to the limit in $\langle Bx_n,y_n\rangle=\langle x_n,By_n\rangle$. It extends B restricted to D(A); no extension of B's possibly larger domain is claimed. Step 2.1 makes T+Btilde self-adjoint. The inclusion A+B subset T+Btilde and closedness give closure(A+B) subset T+Btilde. Conversely the same approximating sequences satisfy (A+B)x_n to (T+Btilde)x, giving the reverse graph inclusion. This proves essential self-adjointness and the exact closure formula. If A>=gamma in this case, taking limits of its quadratic inequality gives T>=gamma; step 3.1 then gives the bound for the closure and its restriction A+B. [A1, A2, A5, step 2.1, step 3.1]
62: 5.1 The choice use is exactly [A5]. The cases B=0 or a=b=0 are admitted by the same estimates and return the original lower bound. Dimension one requires no change. The strict hypothesis a<1 is used in the positive choice of mu and in b/(1-a); no conclusion at a=1 is asserted. The endpoint gamma-C is included by the zero-projection argument, without asserting that the spectrum is nonempty on the zero space. [A1, A5, step 1.1, step 3.1, step 4.1] ∎
```

#### functional-analysis / confirmed 020: `lem-quotient-seminorm-triangle-inequality`

- Location: **Facts & Assumptions**; source lines 39.
- Pages: `bounded-linear-operators-and-quotient-spaces`.
- Visible defect: The linked display title of def-quotient-seminorm leaks TeX markup into the rendered body: its visible link label contains raw “\operatorname{dist}” and underscore/subscript source. The cited target title uses \(…\) delimiters, which the link-title rendering path leaves literal. In the compact-remainder item, the adjacent source fact at line 45 is already properly delimited; the leak is in the linked target title.
- Future repair: Use math delimiters supported by the item-title link renderer for the target title, or provide a plain-text short label for these links.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-quotient-seminorm-triangle-inequality--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-quotient-seminorm-triangle-inequality.md).

Exact frozen source lines:

```text
39: [L1] The quotient seminorm is $\|x+M\|_{X/M} = \inf_{m \in M}\|x+m\|$ ([[def-quotient-seminorm]]).
```

#### functional-analysis / confirmed 021: `lem-a-compact-remainder-estimate-forces-closed-range`

- Location: **Facts & Assumptions**; source lines 45.
- Pages: `compact-operators-and-riesz-schauder-theory`.
- Visible defect: The linked display title of def-quotient-seminorm leaks TeX markup into the rendered body: its visible link label contains raw “\operatorname{dist}” and underscore/subscript source. The cited target title uses \(…\) delimiters, which the link-title rendering path leaves literal. In the compact-remainder item, the adjacent source fact at line 45 is already properly delimited; the leak is in the linked target title.
- Future repair: Use math delimiters supported by the item-title link renderer for the target title, or provide a plain-text short label for these links.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-a-compact-remainder-estimate-forces-closed-range--01.png), [tile 02](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-a-compact-remainder-estimate-forces-closed-range--02.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-a-compact-remainder-estimate-forces-closed-range.md).

Exact frozen source lines:

```text
45: [A3] Under DC, $\operatorname{ran}T$ is closed exactly when there is a real $C'>0$ with $\operatorname{dist}(x,\ker T)\le C'\|Tx\|$ for every $x$ ([[lem-closed-range-iff-quotient-estimate]], [[def-quotient-seminorm]]); the distance scales, $\operatorname{dist}(\lambda x,\ker T)=|\lambda|\operatorname{dist}(x,\ker T)$, because $\ker T$ is a subspace, and $\operatorname{dist}(u,M)\le\|u\|$ for nonempty $M\ni0$.
```

#### functional-analysis / confirmed 022: `def-hilbert-schmidt-operator`

- Location: **Facts & Assumptions**; source lines 27.
- Pages: `square-integrable-kernels-and-hilbert-schmidt-compactness`.
- Visible defect: A linked reference title is emitted as literal TeX-like source, including “\mathcal B(X,Y)” rather than typeset mathematics. This repeated leak comes from the referenced title “The spaces \(\mathcal B(X,Y)\) and \(\mathcal B(X)\) of bounded linear operators.” Rendered anchor text: “The spaces (\mathcal B(X,Y)) and (\mathcal B(X)) of bounded linear operators”.
- Future repair: Repair the referenced title or the local reference-title rendering so mathematical notation remains readable.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/def-hilbert-schmidt-operator--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/def-hilbert-schmidt-operator.md).

Exact frozen source lines:

```text
27: ([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]) of
```

#### functional-analysis / confirmed 023: `ex-bounded-operators-form-a-noncommutative-banach-algebra`

- Location: **Facts & Assumptions**; source lines 46.
- Pages: `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples`.
- Visible defect: A linked reference title is emitted as literal TeX-like source, including “\mathcal B(X,Y)” rather than typeset mathematics. This repeated leak comes from the referenced title “The spaces \(\mathcal B(X,Y)\) and \(\mathcal B(X)\) of bounded linear operators.” Rendered anchor text: “If (Y) is Banach then (\mathcal B(X,Y)) is Banach”.
- Future repair: Repair the referenced title or the local reference-title rendering so mathematical notation remains readable.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/ex-bounded-operators-form-a-noncommutative-banach-algebra--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/ex-bounded-operators-form-a-noncommutative-banach-algebra.md).

Exact frozen source lines:

```text
46: [L2] If $Y$ is a Banach space then $\mathcal B(X,Y)$ is Banach for the operator norm ([[thm-bounded-operator-space-is-banach]]).
```

#### functional-analysis / confirmed 024: `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual`

- Location: **Facts & Assumptions**; source lines 49.
- Pages: `reflexivity-and-eberlein-smulian`.
- Visible defect: A linked reference title is emitted as literal TeX-like source, including “\mathcal B(X,Y)” rather than typeset mathematics. This repeated leak comes from the referenced title “The spaces \(\mathcal B(X,Y)\) and \(\mathcal B(X)\) of bounded linear operators.” Rendered anchor text: “If (Y) is Banach then (\mathcal B(X,Y)) is Banach”.
- Future repair: Repair the referenced title or the local reference-title rendering so mathematical notation remains readable.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-eberlein-smulian-countable-compactness-closes-in-the-bidual--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-eberlein-smulian-countable-compactness-closes-in-the-bidual.md).

Exact frozen source lines:

```text
49: [F5] Assuming DC, a pointwise bounded family of bounded operators on a Banach space is uniformly norm bounded ([[thm-uniform-boundedness-principle]]).  If the target is Banach, the bounded-operator space is Banach ([[thm-bounded-operator-space-is-banach]]).
```

#### functional-analysis / confirmed 025: `thm-minimal-c-star-unitization`

- Location: **Facts & Assumptions**; source lines 57.
- Pages: `gelfand-theory-and-commutative-c-star-algebras`.
- Visible defect: A linked reference title is emitted as literal TeX-like source, including “\mathcal B(X,Y)” rather than typeset mathematics. This repeated leak comes from the referenced title “The spaces \(\mathcal B(X,Y)\) and \(\mathcal B(X)\) of bounded linear operators.” Rendered anchor text: “If (Y) is Banach then (\mathcal B(X,Y)) is Banach”.
- Future repair: Repair the referenced title or the local reference-title rendering so mathematical notation remains readable.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-minimal-c-star-unitization--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-minimal-c-star-unitization.md).

Exact frozen source lines:

```text
57: [L3] The bounded operators on a Banach space form a Banach space under the operator norm ([[thm-bounded-operator-space-is-banach]]). Composition is submultiplicative: $\|STb\|\le\|S\|\|T\|\|b\|$ for each $b$, and taking the unit-ball supremum gives $\|ST\|\le\|S\|\|T\|$. The required normalization for a nonzero unital Banach algebra is $\|1\|=1$ ([[def-unital-banach-algebra]]).
```

#### functional-analysis / confirmed 026: `thm-weakly-convergent-sequences-are-norm-bounded`

- Location: **Facts & Assumptions**; source lines 36.
- Pages: `weak-and-weak-star-topologies`.
- Visible defect: A linked reference title is emitted as literal TeX-like source, including “\mathcal B(X,Y)” rather than typeset mathematics. This repeated leak comes from the referenced title “The spaces \(\mathcal B(X,Y)\) and \(\mathcal B(X)\) of bounded linear operators.” Rendered anchor text: “If (Y) is Banach then (\mathcal B(X,Y)) is Banach”.
- Future repair: Repair the referenced title or the local reference-title rendering so mathematical notation remains readable.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-weakly-convergent-sequences-are-norm-bounded--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-weakly-convergent-sequences-are-norm-bounded.md).

Exact frozen source lines:

```text
36: [F3] If the target is Banach, its bounded-operator space from any normed domain is Banach ([[thm-bounded-operator-space-is-banach]]).
```

#### functional-analysis / confirmed 027: `lem-generalized-eigenspace-trace-decomposition`

- Location: **Facts & Assumptions**; source lines 116.
- Pages: `fredholm-determinants-and-the-lidskii-trace-formula`.
- Visible defect: A linked quotient-seminorm title exposes literal TeX commands and braces (“\inf”, “\in”, “\operatorname{dist}”) in the rendered link text. Rendered anchor text: “The quotient seminorm (|x+M|{X/M}=\inf{m\in M}|x+m|=\operatorname{dist}(x,M))”.
- Future repair: Repair the referenced title or the local reference-title rendering so mathematical notation remains readable.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-generalized-eigenspace-trace-decomposition--02.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-generalized-eigenspace-trace-decomposition.md).

Exact frozen source lines:

```text
116: when $W$ is closed ([[def-quotient-seminorm]],
```

#### functional-analysis / confirmed 028: `thm-atkinson`

- Location: **Facts & Assumptions**; source lines 40.
- Pages: `compact-operators-and-riesz-schauder-theory`.
- Visible defect: A linked quotient-space title leaks the literal source “q:X\to X/M” in its reference text. Rendered anchor text: “The quotient vector space (X/M), its cosets, and the quotient map (q:X\to X/M)”.
- Future repair: Repair the referenced title or the local reference-title rendering so mathematical notation remains readable.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-atkinson--02.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-atkinson.md).

Exact frozen source lines:

```text
40: [A4] For a bounded $T$, $(\operatorname{ran}T)^\perp=\ker T^*$ and $\overline{\operatorname{ran}T}={}^\perp(\ker T^*)$ ([[lem-elementary-kernel-range-annihilator-identities]]); for closed $M\le Y$ the map $(Y/M)^*\to M^\perp$, $h\mapsto h\circ q$, is a linear isometric bijection ([[thm-dual-of-a-quotient-is-the-annihilator]], [[def-quotient-vector-space-coset-notation]]).
```

#### functional-analysis / confirmed 029: `def-kuratowski-distance-map`

- Location: **Facts & Assumptions**; source lines 33.
- Pages: `finite-dimensional-normed-spaces-and-riesz-lemma`.
- Visible defect: Linked titles containing compact formulas are rendered as malformed repeated/plain characters rather than readable formula text (examples include F^X/F^n and the square-root formula). Rendered anchor text: “The vector space FXFX of all functions X→FX→F with pointwise operations, and FnFn as the case X=n={0,1,…,n−1}X=n={0,1,…,n−1}”.
- Future repair: Repair the referenced title or the local reference-title rendering so mathematical notation remains readable.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/def-kuratowski-distance-map--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/def-kuratowski-distance-map.md).

Exact frozen source lines:

```text
33: [[def-function-space]], write $C_b(M)$ for the set of bounded continuous
```

#### functional-analysis / confirmed 030: `def-square-summable-family-on-an-arbitrary-index-set`

- Location: **Facts & Assumptions**; source lines 142.
- Pages: `orthonormal-bases-parseval-and-fourier-series`.
- Visible defect: Linked titles containing compact formulas are rendered as malformed repeated/plain characters rather than readable formula text (examples include F^X/F^n and the square-root formula).
- Future repair: Repair the referenced title or the local reference-title rendering so mathematical notation remains readable.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/def-square-summable-family-on-an-arbitrary-index-set--03.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/def-square-summable-family-on-an-arbitrary-index-set.md).

Exact frozen source lines:

```text
142: $Q(a):=\sum_{i\in I}|a_i|^2$. If $Q(a)$ is finite, set $\|a\|_2:=\sqrt{Q(a)}$, using the nonnegative real square root of [[thm-of-square-roots]]; if $Q(a)=+\infty$, set $\|a\|_2:=+\infty$. This is a case definition, not exponentiation of an extended real. Let
```

#### functional-analysis / confirmed 031: `ex-c-mod-constants-and-oscillation-norm`

- Location: **Facts & Assumptions**; source lines 49.
- Pages: `bounded-linear-operators-and-quotient-spaces-examples`.
- Visible defect: The quotient seminorm formula in the source body is typeset, but its linked def-quotient-seminorm title is printed as raw LaTeX source (including \(...\), \|, and \operatorname) in the Facts & Assumptions reference block.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/research/math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/ex-c-mod-constants-and-oscillation-norm--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/ex-c-mod-constants-and-oscillation-norm.md).

Exact frozen source lines:

```text
49: [L1] The quotient seminorm is $\|f+M\|=\inf_{c \in \mathbb R}\|f-c\|_\infty$ ([[def-quotient-seminorm]]).
```

#### functional-analysis / confirmed 032: `lem-range-of-identity-minus-compact-is-closed`

- Location: **Statement**; source lines 37, 41.
- Pages: `compact-operators-and-riesz-schauder-theory`.
- Visible defect: The distance identity is typeset correctly. Its references to def-quotient-seminorm display that linked item title as raw LaTeX source (including \(...\), \|, and \operatorname) in the statement and Facts & Assumptions blocks.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/research/math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-range-of-identity-minus-compact-is-closed--01.png), [tile 02](math-library-rendering-audit-2026-10-23/functional-analysis/research/math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-range-of-identity-minus-compact-is-closed--02.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-range-of-identity-minus-compact-is-closed.md).

Exact frozen source lines:

```text
37: the distance being the quotient seminorm of [[def-quotient-seminorm]].
41: [A1] $\operatorname{ran}A$ is closed if and only if there is a real $C>0$ with $\operatorname{dist}(x,\ker A)\le C\|Ax\|$ for every $x$, under DC for the bounded linear map $A$ between Banach spaces ([[lem-closed-range-iff-quotient-estimate]]); here $\operatorname{dist}(x,M)=\|x+M\|_{X/M}$ is the quotient seminorm ([[def-quotient-seminorm]]).
```

#### functional-analysis / confirmed 033: `cex-uniform-boundedness-fails-on-an-incomplete-domain`

- Location: **title**; source lines 4.
- Pages: `the-baire-principles-of-functional-analysis-examples`.
- Visible defect: The title renders the sequence-space notation c_00 as literal baseline underscores instead of mathematical subscripts.
- Future repair: Use title wording that renders the sequence-space notation, such as c₀₀ or “the finitely supported sequence space”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/cex-uniform-boundedness-fails-on-an-incomplete-domain--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/cex-uniform-boundedness-fails-on-an-incomplete-domain.md).

Exact frozen source lines:

```text
4: title: "Uniform boundedness fails on the incomplete space c_00"
```

#### functional-analysis / confirmed 034: `def-quotient-seminorm`

- Location: **title**; source lines 4.
- Pages: `bounded-linear-operators-and-quotient-spaces`.
- Visible defect: The title displays raw LaTeX delimiters, braces, underscores, and \operatorname instead of formatting the quotient seminorm and distance.
- Future repair: Use a plain text display title and leave the complete formula in the rendered Definition body.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/def-quotient-seminorm--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/def-quotient-seminorm.md).

Exact frozen source lines:

```text
4: title: "The quotient seminorm \\(\\|x+M\\|_{X/M}=\\inf_{m\\in M}\\|x+m\\|=\\operatorname{dist}(x,M)\\)"
```

#### functional-analysis / confirmed 035: `lem-c-zero-is-a-closed-subspace-of-ell-infinity`

- Location: **title**; source lines 4.
- Pages: `geometric-hahn-banach-and-convex-separation`.
- Visible defect: The title renders c_0 with a literal underscore and does not identify ell-infinity in mathematical typography.
- Future repair: Use a display title such as “c₀ is a closed subspace of ℓ∞” or plain-text wording with no raw formula syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-c-zero-is-a-closed-subspace-of-ell-infinity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-c-zero-is-a-closed-subspace-of-ell-infinity.md).

Exact frozen source lines:

```text
4: title: c_0 is a closed subspace of ell-infinity
```

#### functional-analysis / confirmed 036: `def-space-of-bounded-linear-operators`

- Location: **Item body**; source lines 4.
- Pages: `bounded-linear-operators-and-quotient-spaces`.
- Visible defect: The frontmatter title uses \( ... \) and raw \mathcal commands. The captured title shows the backslash commands literally rather than typesetting the operator-space notation. The body uses supported $...$ delimiters and renders correctly. Use the title renderer's supported $...$ syntax or plain-text notation.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/def-space-of-bounded-linear-operators--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/def-space-of-bounded-linear-operators.md).

Exact frozen source lines:

```text
4: title: "The spaces \\(\\mathcal B(X,Y)\\) and \\(\\mathcal B(X)\\) of bounded linear operators"
```

#### functional-analysis / confirmed 037: `def-quotient-vector-space-coset-notation`

- Location: **Item body**; source lines 4.
- Pages: `bounded-linear-operators-and-quotient-spaces`.
- Visible defect: The frontmatter title uses \( ... \), including \to. The captured title prints the delimiters and command literally. Use supported $...$ delimiters or plain-text notation.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/def-quotient-vector-space-coset-notation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/def-quotient-vector-space-coset-notation.md).

Exact frozen source lines:

```text
4: title: "The quotient vector space \\(X/M\\), its cosets, and the quotient map \\(q:X\\to X/M\\)"
```

#### functional-analysis / confirmed 038: `thm-bounded-operator-space-is-banach`

- Location: **Item body**; source lines 4.
- Pages: `bounded-linear-operators-and-quotient-spaces`.
- Visible defect: The frontmatter title uses \( ... \) and \mathcal. The captured title prints those commands literally. Use supported $...$ delimiters or plain-text notation.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/thm-bounded-operator-space-is-banach--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/thm-bounded-operator-space-is-banach.md).

Exact frozen source lines:

```text
4: title: "If \\(Y\\) is Banach then \\(\\mathcal B(X,Y)\\) is Banach"
```

#### functional-analysis / confirmed 039: `def-measurable-and-decomposable-operator-fields`

- Location: **Proof**; source lines 177.
- Pages: `measurable-hilbert-fields-and-direct-integral-operators`.
- Visible defect: The source places `## Boundary cases` on the same Markdown paragraph line as the final proof sentence. The preview renders the hashes as literal text after the proof-ending mark. Put the heading on its own line with a preceding blank line. Confirmed in the standalone fourth tile.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 04](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/def-measurable-and-decomposable-operator-fields--04.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/def-measurable-and-decomposable-operator-fields.md).

Exact frozen source lines:

```text
177: 4.1 Since step 3.1 proves $\|T_x\|$ measurable and nonnegative, [F10] defines $\operatorname*{ess\,sup}_x\|T_x\|$ and the field is essentially bounded exactly when that value is finite. By [F4], $S\in\mathcal B(\mathcal H)$ is decomposable when there is such a field for which each pointwise action $T\xi$ belongs to the square-integrable section space and $S[\xi]=[T\xi]$ for every class. This states the well-definedness required by the formula; it does not presume the next theorem's existence result. If two fields agree off a measurable null set, their pointwise actions agree there, so they give the same direct-integral class. The definition and measurable-field arguments use no axiom of choice. [F4,F5,F10,step 3.1,construct] ∎ ## Boundary cases
```

#### functional-analysis / confirmed 040: `lem-fredholm-determinant-spectral-product-from-power-traces`

- Location: **Proof**; source lines 144.
- Pages: `fredholm-determinants-and-the-lidskii-trace-formula`.
- Visible defect: The body ends with the literal source command `\qed`; the captured final tile visibly prints `\qed` rather than a proof-ending mark. Remove it or replace it with the renderer-supported proof closure.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 05](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/lem-fredholm-determinant-spectral-product-from-power-traces--05.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/lem-fredholm-determinant-spectral-product-from-power-traces.md).

Exact frozen source lines:

```text
144: \qed
```

### Optional typography

#### functional-analysis / typography 001: `ex-explicit-equivalence-constants-for-standard-norms-on-kn`

- Location: **Item body**; source lines 4.
- Pages: `finite-dimensional-normed-spaces-and-riesz-lemma-examples`.
- Visible defect: The title uses plain K^n rather than mathematical superscript typesetting; source title itself uses ASCII caret.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/ex-explicit-equivalence-constants-for-standard-norms-on-kn--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/ex-explicit-equivalence-constants-for-standard-norms-on-kn.md).

Exact frozen source lines:

```text
4: title: "Explicit comparison constants for the standard norms on K^n"
```

#### functional-analysis / typography 002: `ex-sequential-uniform-boundedness-for-coordinate-partial-sums`

- Location: **Item body**; source lines 4.
- Pages: `sequential-uniform-boundedness-with-countable-choice-examples`.
- Visible defect: The title uses plain c_0 rather than subscript typesetting; source title itself uses ASCII underscore.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/functional-analysis/screenshots/ex-sequential-uniform-boundedness-for-coordinate-partial-sums--01.png); [frozen source](math-library-rendering-audit-2026-10-23/functional-analysis/snapshots/ex-sequential-uniform-boundedness-for-coordinate-partial-sums.md).

Exact frozen source lines:

```text
4: id: ex-sequential-uniform-boundedness-for-coordinate-partial-sums
```

