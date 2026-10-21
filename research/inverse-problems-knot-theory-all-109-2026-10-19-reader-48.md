# Reader report — batch 48

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Verdict: no unresolved batch-48 defects; one diagram repair recorded below.  
Blocker: none within the assigned batch.

## Opened inventory

Assigned pages:

- `library/inverse-problems/unrolled-inverse-solvers-and-generalization.md`
- `library/inverse-problems/unrolled-inverse-solvers-and-generalization-examples.md`

Assigned items, read in dependency order:

- `items/lem-ip-unrolled-finite-domain-and-output-are-borel.md`
- `items/def-ip-unrolled-regularization-architecture.md`
- `items/prop-ip-finite-unrolling-does-not-imply-regularization-convergence.md`
- `items/ex-ip-truncated-landweber-versus-learned-unrolling.md`
- `items/cex-ip-finite-training-fit-fails-under-operator-shift.md`

Direct item dependencies opened:

- Measurability: `def-measurable-function-between-measurable-spaces`, `def-measurable-space`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-composition-with-borel-functions-preserves-measurability`, and `thm-continuous-preimages-of-borel-sets-are-borel`.
- Differentiation: `def-finite-straight-line-computational-program`, `alg-forward-mode-automatic-differentiation`, `alg-differentiate-finite-fixed-point-iteration`, and `thm-forward-mode-computes-directional-derivative`.
- Proximal blocks: `def-proper-closed-convex-function-on-rn`, `def-proximal-mapping`, and `thm-proximal-operator-existence-resolvent-firm-nonexpansive`.
- In-run interfaces: `def-ip-learned-reconstruction-estimator` and `def-ip-inverse-risk-under-train-and-test-laws` (both batch 46).
- Landweber example: `alg-landweber-iteration-with-discrepancy-stopping` and `def-countable-choice`.

The A page's four required pages were also opened: `learned-reconstruction-targets-and-risk`, `iterative-regularization-and-early-stopping`, `automatic-differentiation-and-computational-graphs`, and `proximal-gradient-and-accelerated-composite-optimization`. The assigned pages contain YAML frontmatter only and have `page_layout: compact-v1`.

## Review and repair

The finite-domain lemma is valid. Its product-Borel identity follows from countable bases and the continuous coordinate projections. It then uses Borel pairing, continuity of the finite-dimensional correction, Borel preimages of the update domains, and composition with each update map. The induction covers the empty-depth boundary and every defined finite update; no choice principle is used.

The architecture's recursion, Borel-domain claim, proximal-block hypotheses, and finite-graph differentiation conditions are consistent with its suppliers. The proximal branch requires a proper closed convex penalty and positive scale, which are exactly the hypotheses of the opened existence-and-uniqueness theorem. The AD branch keeps a fixed finite graph, requires complete derivative rules and open `C^1` neighborhoods, and returns no derivative at a branch boundary. The displayed scalar recurrence computations in the proposition give divergence for `T(x)=2x`, zero residual with finite derivative `1-q^K != 1`, and a continuous scalar rule with zero empirical risk and unbounded shifted residual and test risk.

The Landweber example satisfies the supplier's compact nonzero operator and step-size conditions: in one dimension `A^*=A`, `||A||=a`, and `0<omega*a^2<1`. The residual stays positive at every finite step for `x^dagger != 0` and `delta=0`, so the procedure reaches budget exhaustion. The learned recurrence and product formula are correct. The counterexample's parameter `theta=1` gives training risk zero, shifted residual `t(t^2-1)`, and test risk `(t^2-1)^2`, both unbounded for `t>1`. Its empirical remarks remain explicitly limited to the cited experiments and methods.

### Edit

In `items/def-ip-unrolled-regularization-architecture.md`, the diagram previously showed a `U_{theta_1}` edge before an ellipsis and a `U_{theta_{N-1}}` edge after it without handling depths `N=1,2`. That drawing could imply a nonexistent layer at depth 1 and duplicate or misrepresent updates at depth 2. I labeled the diagram as a compressed chain for `N>=3`, made the compressed edge the exact composition `U_{theta_{N-2}}^(A,y) o ... o U_{theta_1}^(A,y)` ending at `x_{N-1}`, stated that at `N=3` this is the single update `U_{theta_1}`, and covered depths 1 and 2 by their corresponding one- and two-update recurrences above. The correction follows directly from the Definition's indexed recursion. No mathematical statement or proof contract changed; the item has no `verification.judge` record to remove.

Checks on the changed item:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-ip-unrolled-regularization-architecture.md` — completed, no formatting changes.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-ip-unrolled-regularization-architecture.md` — pass, 0 failures; no proof phase applies to the definition.
- `node tools/proof-layout.mjs items/def-ip-unrolled-regularization-architecture.md` — pass, 0 defects.

No other items or pages were edited.

## Source checks

- Tao, *An Introduction to Measure Theory*, Ch. 1, §1.4, Remark 1.4.33, printed p. 96 / PDF p. 111: composition of measurable morphisms is measurable. [Source](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf). This matches the finite Borel-domain proof's use of composition.
- Monga, Li, and Eldar, *Algorithm Unrolling*, §II-C and §IV-E: finite cascades may use layer-specific parameters, while the cited LISTA convergence discussion is conditional and distinct from finite evaluation. [Source](https://arxiv.org/pdf/1912.10557). Context only.
- Gregor and LeCun, *Learning Fast Approximations of Sparse Coding*, §3 and Algorithms 3–4: fixed-depth trainable predictors; the paper separately cautions against inferring convergence when running beyond the trained depth. [Source](https://icml.cc/2010/papers/449.pdf).
- Clason, *Regularization of Inverse Problems*, Ch. 7, §§7.1–7.2: Landweber finite-prefix identity and convergence/discrepancy results with their stated hypotheses. [Source](https://arxiv.org/pdf/2001.00617). The scalar example is calculated directly.
- Zheng et al., *InverseBench*, arXiv:2503.11043v2, §4.3 and Figure 5: the cited nine-cell versus one-to-six-cell inverse-scattering comparison and black-hole ring observation are as described, and remain empirical context only. [Source](https://arxiv.org/html/2503.11043v2).
- Daras et al., *A Survey on Diffusion Models for Inverse Problems*, §3.3 and conclusion: asymptotic exactness is scoped to infinite computation and method-specific assumptions; context only. [Source](https://arxiv.org/pdf/2410.00083v1).

## Defects and page verdicts

No uneditable defects were confirmed in the assigned items, required pages, or dependency interfaces used by batch 48. No withdrawals are proposed.

- `unrolled-inverse-solvers-and-generalization` — pass. Its three assigned items match the page inventory; frontmatter is valid and the body is empty.
- `unrolled-inverse-solvers-and-generalization-examples` — pass. Its two assigned examples match the page inventory; frontmatter is valid and the body is empty.

At the run-status check, the build was active at `3a-read` with batch 48 still listed among missing reader batches and no worker in flight. This reader did not change autopilot state or claim run-level closure.

## Coverage note

All assigned pages, assigned items, their direct item dependencies, required page carriers, and the cited passages used for the local arguments were opened. I did not audit unrelated branches of suppliers or entire external source texts beyond the cited passages; dependency-page prose outside batch 48 was not adjudicated.
