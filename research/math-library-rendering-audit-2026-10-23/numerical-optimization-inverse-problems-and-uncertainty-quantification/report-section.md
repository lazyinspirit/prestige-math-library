## Numerical Optimization Inverse Problems and Uncertainty Quantification

Completed visual review of **727 items across 70 pages**, with **1020 image tiles**. Findings: 5 confirmed, 1 uncertain, 2 source-parse-blocker. Evidence: [manifest](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/category-review-receipt.json).

Coverage uses recovered body previews for 2 items. Their exact source bytes and parse failures are recorded in [frontmatter parse blockers](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/frontmatter-parse-blockers.json); this is not successful canonical source parsing or native loader coverage.

### Confirmed rendering defects

#### numerical-optimization-inverse-problems-and-uncertainty-quantification / confirmed 001: `thm-fista-o1k2-objective-bound`

- Location: **Item body**; source lines 4.
- Pages: `proximal-gradient-and-accelerated-composite-optimization`.
- Visible defect: The title visibly displays O(1/k^2) with literal caret/slash notation instead of a typeset rate.
- Future repair: Typeset the rate in the title, e.g. $O(1/k^2)$ or an equivalent title-safe math form.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/screenshots/thm-fista-o1k2-objective-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/snapshots/thm-fista-o1k2-objective-bound.md).

Exact frozen source lines:

```text
4: title: "FISTA has an O(1/k^2) objective bound"
```

#### numerical-optimization-inverse-problems-and-uncertainty-quantification / confirmed 002: `lem-finite-sum-gradient-is-average`

- Location: **Statement**; source lines 36, 66, 67, 68, 70.
- Pages: `variance-reduced-finite-sum-and-adaptive-gradient-optimization`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Mark each mathematical expression with inline or display math delimiters while preserving the current formulas and proof.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/screenshots/lem-finite-sum-gradient-is-average--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/screenshots/lem-finite-sum-gradient-is-average--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/snapshots/lem-finite-sum-gradient-is-average.md).

Exact frozen source lines:

```text
36: Let U be open in R^d, let x in U, let n>=1, and let f_1,...,f_n:U->R be totally differentiable at x. Put F=n^{-1}sum_{i=1}^n f_i. Then F is totally differentiable at x and
66: 1.1 For 0<=m<=n define S_m:U->R by S_m(y)=sum_{i<m}f_{i+1}(y), using [F1]. The base S_0 is the zero function, whose total derivative is the zero linear map directly from [F7]. If S_m is totally differentiable at x with derivative sum_{i<m}Df_{i+1}(x), then S_{m+1}=S_m+f_{m+1}; [F2] makes it differentiable with derivative sum_{i<m}Df_{i+1}(x)+Df_{m+1}(x)=sum_{i<m+1}Df_{i+1}(x). Induction [F5] proves this formula through m=n. [F1, F2, F5, F7, given, algebra, induction]
67: 
68: 2.1 Since the canonical real image of n is positive by [F8], it is nonzero; the field structure in [F1] therefore supplies its inverse n^{-1}. The scalar-multiple rule [F2] gives DF(x)=n^{-1}sum_{i<n}Df_{i+1}(x). [F1, F2, F8, step 1.1, given, algebra]
70: 3.1 For each coordinate j, [F3] gives partial_j F(x)=DF(x)e_j=n^{-1}sum_{i<n}Df_{i+1}(x)e_j=n^{-1}sum_{i<n}partial_j f_{i+1}(x). By [F4] these are exactly the coordinates of n^{-1}sum_{i=1}^n grad f_i(x); [F6] then identifies the vectors. Hence the displayed gradient formula holds. [F3, F4, F6, step 2.1, given, algebra] ∎
```

#### numerical-optimization-inverse-problems-and-uncertainty-quantification / confirmed 003: `def-product-hoeffding-anova-components`

- Location: **Definition**; source lines 26.
- Pages: `global-sensitivity-anova-and-sobol-estimation`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Recheck the ItemBody paragraph boundary/layout in the renderer; the source text already contains the complete word.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/screenshots/def-product-hoeffding-anova-components--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/snapshots/def-product-hoeffding-anova-components.md).

Exact frozen source lines:

```text
26: Let $f\in L^2(\mu)$ on the finite product probability space of
```

#### numerical-optimization-inverse-problems-and-uncertainty-quantification / confirmed 004: `lem-saga-estimator-and-table-recurrence`

- Location: **Statement; Facts & Assumptions**; source lines 38, 56, 58, 70, 72, 74.
- Pages: `variance-reduced-finite-sum-and-adaptive-gradient-optimization`.
- Visible defect: The original-resolution screenshot prints these notation-heavy expressions as plain text with ASCII arrows, `sum_`, `grad`, underscores, and `||`; nearby display equations are typeset. These are legible but visibly untypeset source formulas, not KaTeX runtime errors.
- Future repair: Wrap each notation-bearing expression in the appropriate inline math delimiters and render operators with LaTeX, for example `$f_i:\mathbb{R}^d\to\mathbb{R}$`, `$F=n^{-1}\sum_i f_i$`, and `$\nabla F(x^*)=0$`; likewise typeset the raw ASCII formulas in the cited fact lines.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/screenshots/lem-saga-estimator-and-table-recurrence--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/snapshots/lem-saga-estimator-and-table-recurrence.md).

Exact frozen source lines:

```text
38: Let f_i:R^d->R be convex and continuously differentiable with L-Lipschitz gradients, set F=n^{-1}sum_i f_i, and let x* satisfy grad F(x*)=0. Conditional on the current iterate x_k and table alpha_i^k, assume an independent uniform index I_k and finite second moments. Put
56: [F1] [[alg-saga-finite-sum-method]]: v_k uses the old table; after the step, only alpha_{I_k} is replaced by grad f_{I_k}(x_k).
58: [F2] [[lem-convex-smooth-component-gradient-cocoercivity]]: n^{-1}sum_i||grad f_i(x)-grad f_i(y)||_2^2<=2L(F(x)-F(y)-<grad F(y),x-y>).
70: [F8] [[def-euclidean-inner-product]]: the inner product is bilinear and ||z||_2^2=<z,z>.
72: [F9] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: |<u,v>|<=||u||_2||v||_2.
74: [F10] [[lem-finite-sum-gradient-is-average]]: grad F is the finite average of component gradients.
```

#### numerical-optimization-inverse-problems-and-uncertainty-quantification / confirmed 005: `thm-fem-control-proximal-gradient-residual-distance-bound`

- Location: **Statement**; source lines 33, 51, 69, 73.
- Pages: `finite-element-pde-constrained-optimization`.
- Visible defect: The source-authored LaTeX command \texttt{...} appears literally in rendered prose instead of formatting the status tokens as code. The occurrence is visible in the Statement and Facts & Assumptions on tile 01 and in the Proof on tile 02.
- Future repair: Use Markdown code spans (`inconclusive`, `budget-exhausted`, `certified`) for prose status names, or wrap each LaTeX command in inline math only if mathematical roman text is intended.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/screenshots/thm-fem-control-proximal-gradient-residual-distance-bound--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/screenshots/thm-fem-control-proximal-gradient-residual-distance-bound--02.png), [tile 03](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/screenshots/thm-fem-control-proximal-gradient-residual-distance-bound--03.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/snapshots/thm-fem-control-proximal-gradient-residual-distance-bound.md).

Exact frozen source lines:

```text
33: Assume Countable Choice. Let $U_h$ be a finite-dimensional cellwise-constant control space with nonempty box $Q_h$, and restrict the exact reduced objective $\widehat J$ of [[def-linear-elliptic-pde-constrained-control-problem]] to $Q_h$. Let $q_h^*$ be its minimizer and let $L_h\ge\|S|_{U_h}\|^2+\alpha$, where $S$ is the linear part of the continuous state-to-observation map and $\alpha>0$. Assume the residual- and projection-evaluation routines satisfy the finite-return admissibility conditions in [[alg-fem-control-proximal-gradient-certified-residual]]. Then that finite-budget algorithm terminates in finite time after at most $N$ iterations and at most $N$ calls to each routine, returning \texttt{inconclusive}, \texttt{budget-exhausted}, or \texttt{certified}. Every \texttt{certified} return at $q\in Q_h$ with reported bound $\rho=\tilde\rho+\delta/L_h$ satisfies $\|q-P_{Q_h}(q-\nabla\widehat J(q)/L_h)\|_U\le\rho\le\tau$, and consequently $\|q-q_h^*\|_U\le(L_h/\alpha)\rho=(L_h/\alpha)\tilde\rho+\delta/\alpha$. This bounds distance to the control-mesh minimizer of the exact PDE objective; it is not an error estimate between that minimizer and the unrestricted PDE optimum.
51: [F7] The algorithm issues \texttt{certified} only when the computed residual plus the adjoint-gradient error bound is at most $\tau$ ([[alg-fem-control-proximal-gradient-certified-residual]]).
69: 2.1 By [F7], a \texttt{certified} return is issued only when $\rho_k\le\tau$, so step 1.1 proves the reported bound for the exact mapping residual. By [F8], each residual and projection call returns in finite time, and each is called at most $N$ times; the projection routine supplies the exact cell values and step norm used in step 1.1, and all remaining steps are finite scalar arithmetic and comparisons, so the algorithm terminates with one of its stated statuses. [F7, F8, step 1.1, given, algebra]
73: 3.1 On a \texttt{certified} return, step 1.1 gives $r\le\rho=\tilde\rho+\delta/L_h$; substituting into step 2.2 proves both displayed distance bounds. [step 1.1, step 2.2, algebra] ∎
```

### Uncertain observations

#### numerical-optimization-inverse-problems-and-uncertainty-quantification / uncertain 001: `alg-amsgrad-update`

- Location: **Definition**; source lines 48, 54.
- Pages: `variance-reduced-finite-sum-and-adaptive-gradient-optimization`.
- Visible defect: The original-resolution tile visibly prints the literal backslash commands \odot and \widehat in prose instead of typeset inline mathematics. The surrounding update formulas render correctly. These are source text outside math delimiters, so the visible output is supported by the frozen source.
- Future repair: Wrap the mathematical symbols in inline math delimiters or replace them with plain-language wording.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/screenshots/alg-amsgrad-update--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/snapshots/alg-amsgrad-update.md).

Exact frozen source lines:

```text
48: where \odot and max are coordinatewise. Update
54: coordinatewise. Each coordinate of v_t and \widehat v^{\max}_t is nonnegative, and the denominator is at least epsilon>0, so every finite update is defined.
```

### Source metadata parse blockers

#### numerical-optimization-inverse-problems-and-uncertainty-quantification / source-parse-blocker 001: `cex-finite-support-makes-high-degree-moment-gram-singular`

- Location: frontmatter lines 18.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: YAML strict parse rejects malformed `proof_strategy` metadata at source line 18, column 17. Because the two local preview entry points slice frontmatter differently, the parser reports line 17 for the regex-extracted m[1] value used by prepare-category, and line 18 for raw.split('---')[1].. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/snapshots/cex-finite-support-makes-high-degree-moment-gram-singular.md).

Exact frozen source lines:

```text
18: proof_strategy: directverification: {}
```

#### numerical-optimization-inverse-problems-and-uncertainty-quantification / source-parse-blocker 002: `ex-total-degree-versus-tensor-product-work`

- Location: frontmatter lines 20.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: YAML strict parse rejects malformed `proof_strategy` metadata at source line 20, column 17. Because the two local preview entry points slice frontmatter differently, the parser reports line 19 for the regex-extracted m[1] value used by prepare-category, and line 20 for raw.split('---')[1].. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-optimization-inverse-problems-and-uncertainty-quantification/snapshots/ex-total-degree-versus-tensor-product-work.md).

Exact frozen source lines:

```text
20: proof_strategy: directverification: {}
```

