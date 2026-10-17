---
id: alg-validated-periodic-orbit-corrector
kind: algorithm
title: "Finite-budget phase-fixed periodic-orbit correction and validation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-newton-correction-for-vector-residuals
  - def-certified-ivp-approximation-and-sensitivity-interface
  - def-phase-bordered-periodic-orbit-bvp
  - def-phase-bordered-multiple-shooting-and-midpoint-collocation
  - def-validated-periodic-shooting-jet-enclosure
  - alg-single-shooting-for-nonlinear-bvps
  - alg-multiple-shooting-for-nonlinear-bvps
  - alg-midpoint-collocation-for-nonlinear-bvps
  - alg-finite-budget-newton-for-vector-residuals
  - alg-krawczyk-root-certification
  - def-verified-flow-variational-range-oracle
  - lem-real-interval-arithmetic-preserves-enclosure
justified_by:
  - thm-validated-periodic-orbit-certificate-soundness
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
    - title: "R. B. Kearfott, Interval Computations: Introduction, Uses, and Resources, Euromath Bulletin 2(1) (1996)"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
      locator: "Full PDF retrieved and verified as 23 pages; inspected §§1–2 on interval sets, outward enclosure, Brouwer, and interval Newton/Krawczyk."
---

## Definition

For a state dimension $d\ge1$, the vector-field input is a $C^2$ map $f:U\to\mathbb R^d$ in fixed-parameter mode or a $C^2$ one-parameter family $f:U\times V\to\mathbb R^d$ with scalar parameter $\mu\in V\subset\mathbb R$ in section mode, where $U\subset\mathbb R^d$ and $V\subset\mathbb R$ are open. Also supply an affine phase with rational covector and reference point, a compact convex validation tube, and the sound range provider of [[def-verified-flow-variational-range-oracle]]. Supply positive finite step counts for each requested validated jet run, finite arithmetic and candidate-update budgets, a rational initial candidate, a dyadic point preconditioner $C$, a rational inverse witness $W$, a positive rational minimum box width $\eta$, and a finite Krawczyk box budget. In fixed-parameter mode the rational candidate box is $Z=X\times\Theta\subset U\times(0,\infty)$ with the parameter held fixed, so both the variable $z=(x,\theta)$ and residual $F=G$ have dimension $d+1$. In section mode require exactly one scalar continuation parameter $\mu\in\mathbb R$ (the $p=1$ case of [[def-validated-periodic-shooting-jet-enclosure]]), take $Z=X\times\Theta\times\Lambda$ with rational $\Lambda\subset V\subset\mathbb R$, and set $z=(x,\theta,\mu)$. Then $G$ has dimension $d+1$, the affine section adds one scalar equation, and both $z$ and $F$ have dimension $d+2$. All rational point and matrix operations below are exact or return an explicit arithmetic-failure status within the supplied cap.

Write $F=G$ in fixed-parameter mode. In **section mode**, used for continuation, require one scalar continuation parameter $\mu\in\mathbb R$ and write $z=(x,\theta,\mu)$ and $F(z)=(G(x,\theta,\mu),\tau^\top(z-z_p))$, where $G$ is the parameterized map in [[def-validated-periodic-shooting-jet-enclosure]], $\tau$ is a supplied unit normal, and $z_p$ is a supplied predictor. Supply certified rational enclosures for the coefficients and constant term of this affine row at every requested accuracy; if they are rational use their exact values, and otherwise use outward interval arithmetic. If a finite row enclosure cannot be obtained within the arithmetic cap, return inconclusive. For the one-parameter field use the static-parameter augmentation $g(x,\mu)=(f(x,\mu),0)$ in that definition and supply its sound augmented range provider and tube. Append a sound outward enclosure of the affine section row to every residual and Jacobian enclosure (the exact row when its data are rational). In fixed-parameter mode, $z=(x,\theta)$ and $F=G$ both have dimension $d+1$; in section mode, $z=(x,\theta,\mu)$ and $F=(G,\tau^\top(z-z_p))$ both have dimension $d+2$.

The procedure retains the following candidate modes; candidate generation alone never validates a root.

1. **Enclosure-guided single shooting:** this mode needs only the supplied range provider, not a pointwise differentiable numerical IVP evaluator. Start at the supplied rational $z_0\in Z$. At each of at most the supplied number of updates, run the validated shooting-jet procedure of [[def-validated-periodic-shooting-jet-enclosure]] on the singleton $\{z_k\}$, using its validated Euler method and the supplied finite caps. If a tube, range, domain or arithmetic check fails, return its inconclusive status and the last candidate. Otherwise let $r_k$ and $A_k$ be the coordinatewise rational midpoints of the returned boxes for $F(z_k)$ and $DF(z_k)$. Record $z_k$ as a candidate and attempt the independent validation below. If it does not validate and updates remain, call [[alg-newton-correction-for-vector-residuals]] on $(A_k,r_k)$. A singular matrix returns singular-jacobian; otherwise its rational correction $u_k$ proposes $z_{k+1}=z_k+u_k$. Reject a proposal outside $Z$ with invalid-trial. The midpoint matrix is only a proposal matrix: it is not claimed to be the exact derivative of a numerical residual map. Exhaustion returns the last candidate and candidate-budget-exhausted.
2. **Differentiable single shooting:** supply, as an additional input for this mode, a certified differentiable evaluator satisfying [[def-certified-ivp-approximation-and-sensitivity-interface]] for the augmented BVP, including its approximate trajectories, $C^1$ endpoint map, exact numerical-map derivative, and uniform trajectory-error bound. Run [[alg-single-shooting-for-nonlinear-bvps]] on the phase-bordered BVP. In section mode augment the state by the constant parameter and append the affine section condition to its boundary residual. An interval jet alone is not this additional evaluator; if it is absent, return evaluator-unavailable without making the call.
3. **Discretized candidate:** either run [[alg-multiple-shooting-for-nonlinear-bvps]] on the augmented segment BVP with separately supplied certified differentiable segment evaluators satisfying the same interface, or run [[alg-midpoint-collocation-for-nonlinear-bvps]] using the pointwise field/boundary values and their exact derivatives required by its residual. Use the residuals of [[def-phase-bordered-multiple-shooting-and-midpoint-collocation]]; in section mode include the constant parameter and affine section row. Missing pointwise/segment evaluation data returns evaluator-unavailable. Use the last finite tuple's first physical state and positive period (and parameter in section mode) as a shooting candidate. Reject a candidate outside $Z$ or a nonrational candidate without a supplied rational proposal; rationalization is only a new candidate, not a trajectory or residual certificate.

All modes propagate evaluator-failure, invalid-endpoint-pair, invalid-trial, singular-jacobian, inconclusive and exhausted-budget statuses. No candidate mode is assumed to succeed from arbitrary data. In particular, the first mode composes the available interval-enclosure provider directly; it does not infer a $C^1$ point evaluator from interval boxes.

**Independent validation:** run [[alg-krawczyk-root-certification]] on $F$ and $Z$ with $C,W,\eta$ and the supplied box budget. First its exact check $WC=I$ must succeed. For every processed subbox $Y\subseteq Z$, let $m_Y$ be its rational midpoint. The residual callback runs the validated shooting jet on $\{m_Y\}$ and returns its $F(m_Y)$ enclosure as $F_0$; the Jacobian callback runs it on $Y$ and returns its $DF(Y)$ enclosure as $J(Y)$. Both append the sound outward section-row enclosures in section mode. This uses the actual midpoint of the current Krawczyk box, even when it differs from the candidate center. A failed query or tube inclusion marks that box unresolved. All interval operations are outward under [[lem-real-interval-arithmetic-preserves-enclosure]]. Retain only a box $Y$ with strict Krawczyk inclusion and its separately certified contraction bound below one. Over its physical-state projection $X_Y$ (over $X_Y\times\Lambda_Y$ in section mode), use the supplied field range query to require at least one component interval excluding zero. Finally require a successful full-box jet run on $Y$ to enclose the entire trajectory and monodromy; a failed query or tube check returns inconclusive.

Return `validated-root` only for such a box $Y$, and report it as the output box together with the actual midpoint residual enclosure, Jacobian enclosure, inverse witness, strict inequalities, field component excluding zero, trajectory tube and monodromy enclosure. If subdivision was used the output box is $Y$, not the original larger $Z$. Otherwise return inconclusive or the precise finite candidate failure status. A validated root is unique only within its reported box. Candidate midpoints and correction residuals never replace the independently validated callback enclosures.
