# ra-enrich-01 phase 1b — author the seven approved items

**You are an expert of real analysis.**

The owner approved `research/ra-enrich-01-PLAN.md` on 2026-08-14 with the words
*"build the seven items, judge, audit, then publish."* You do the **build** and
nothing after it. Judging, auditing and publishing belong to other agents and to
the owner, and you are excluded from all three because you are the author:
authors never judge, and no author certifies its own work.

## No permission prompts, ever

Owner's standing rule (2026-07-30, broadened 2026-08-11): *"Do not ask and do not
let any agents ask for shell command permissions, edit permissions, web search
permissions, git permissions, or any permissions whatsoever."* No segment of an
`&&` chain may prompt either. You already hold every permission you need. If
something genuinely cannot be done without new authority, **record a blocker** —
that is the escape hatch, never a prompt.

## 1. What to author — exactly seven items, no more and no fewer

`research/ra-enrich-01-PLAN.md` Table A is the specification, and
`research/ra-enrich-01-placement.json` is its machine-readable twin. Author
exactly these ids:

1. `def-taylor-and-maclaurin-series`
2. `thm-taylor-series-representation-by-remainder`
3. `cex-smooth-function-not-equal-to-its-maclaurin-series`
4. `thm-euler-mascheroni-constant-and-harmonic-asymptotic`
5. `def-radian-angle-by-unit-circle-arc-length`
6. `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`
7. `thm-standard-maclaurin-expansions`

**Author them in that order** — it is dependency order.
`def-taylor-and-maclaurin-series` is a dependency of items 2, 3 and 7, and
`def-radian-angle-by-unit-circle-arc-length` is a dependency of item 6.

The plan gives each item its exact statement, its `deps` with the published
status of each, its source backing, and the gap it closes. **Do not restate a
theorem more strongly than the plan does, and do not add an eighth item.** If
authoring reveals that a planned statement is false or unprovable from the
declared dependencies, stop on that item, record it, and author the rest — do not
silently weaken or strengthen it.

## 2. Status and placement — read this before writing frontmatter

Every item is `status: draft`. **Do not edit any file under `library/`**, do not
edit `research/plan-spec.json`, and do not set any status to `published`.

A published page may not list a draft item (`depcheck.mjs`,
`draft-on-published-page`), so the placement recorded in `placement.json` is
applied at publication by the owner, not by you. Your output is seven files under
`items/` and nothing else there.

## 3. The five authorability controls the plan committed to

These came out of the source research and are binding:

- **Provenance is `statement: literature-derived`** for all seven — none is
  AI-generated, and none may change a source hypothesis, domain, endpoint or
  direction. Expected `proof: ai-altered`: adapt the cited proof to the exact
  published dependency graph and record why in your report.
- **`thm-standard-maclaurin-expansions` must not claim generalized-binomial
  endpoint behaviour.** Only $|x|<1$ is authorised for the $(1+x)^\alpha$ family.
- **`thm-taylor-series-representation-by-remainder` must keep the $M_{n+1}$ index
  and the compact interval explicit.** No hidden global derivative bound.
- **`thm-analytic-sine-cosine-agree-with-right-triangle-ratios` is acute-angle
  only.** Axis and quadrantal endpoints are unit-circle values, not nondegenerate
  right triangles; note that rather than forcing an undefined side-ratio
  convention.
- **`cex-smooth-function-not-equal-to-its-maclaurin-series` is a B-page leaf** and
  must not become a dependency target for later A-page mathematics.

## 4. House standard

`SCHEMA.md` is the item contract. `items/lem-cauchy-bounded.md` is the approved
exemplar of proof style. `briefs/authoring.md` carries the house authoring
discipline — read it for proof layout, the stratified numbering, and the defect
classes this library ships. In particular:

- **Citation fidelity.** In every `[F#]`/`[A#]`/`[L#]` fact, state the cited
  definition or theorem itself — quoted exactly where practical, otherwise the
  smallest faithful shortening, with no changed domain, quantifier, hypothesis,
  direction or conclusion and no invented converse. Never replace a proposition
  with a synthetic summary of what it is "for".
- **Natural mathematical voice.** No AI-sounding labels or interpretive filler.
- **Boundary pass.** Empty, zero, one, degenerate, endpoint, nonempty-choice, and
  both directions of every iff. The representation theorem is an iff; prove both
  directions.
- **Self-contained scope.** Every step uses an explicit fact, an earlier step, a
  hypothesis, or elementary algebra. If a proof will not close honestly against
  the published dependencies, say so rather than patching it with an overstated
  citation.
- **`sources.references`** needs a real title and a working URL for each.
- **No applied `\iota(n)`** around a natural number.
- Open every published dependency you cite before citing it. They are listed
  per-item in the plan and every one is `status: published` today.

## 5. Gates you run

```
node tools/tsx-run.mjs tools/precheck.mts items/<each-new-file>.md
```

Adopt the printed canonical stratification into the file and re-run until clean —
the repo stores the strictly stratified form, so a step citing phase-k steps sits
in phase k+1. Then record `verification.precheck: pass`.

Leave `verification.judge` and `verification.audited` **absent**. They are not
yours to write, and writing them would forge a review that has not happened.

Run no other gate: no `depcheck`, no `validate-plan`, no level-build gate.

## 6. Report and stop

Write `research/ra-enrich-01-author-report.md`: each item, its provenance
rationale, the proof route you took and why it differs from the source if it
does, every boundary case you disposed of, and any place the plan's statement had
to be adjusted (with the reason). Then stop — no judging, no auditing, no
publishing, no page edits.


---

# This dispatch

# Real-analysis enrichment plan (`ra-enrich-01`)

Date: 2026-08-13  
Decision requested: approve, amend, or reject this plan before any item is
authored.

## One-minute summary

This plan proposes **7 new items on 5 existing published pages**, plus **4 new
A/B pairs** for a later build cycle. No item, page, judge scope, or publication
state has been created or changed on this run.

The three highest-value outcomes are:

1. an honest geometric bridge from the library's power-series sine and cosine
   to radian arc length and the right-triangle ratios
   \(\cos\theta=A/H,\ \sin\theta=O/H\);
2. a precise separation of “has a Taylor series” from “is represented by that
   series,” including a uniform remainder criterion and the canonical
   \(e^{-1/x^2}\) counterexample;
3. a small, nonduplicative Maclaurin layer and the missing harmonic asymptotic
   \(H_n=\log n+\gamma+o(1)\), while leaving the already-complete finite Taylor
   and harmonic convergence theory alone.

The phase-2 proposals are Fourier/Fejér theory, Picard–Lindelöf ODEs,
constant-rank/regular-level-set theory, and classical surface
integrals/divergence/Stokes. They are proposals only.

## Table A — items proposed for existing pages

Every dependency marked “published” exists with `status: published` today.
“Planned earlier in this manifest” means it is part of this same seven-item
scope and must be authored/published first; it is not being treated as an
existing result.

### `power-series-and-real-analytic-functions`

**Page-size note:** 30 entries now (27 items and 3 false statements); **32**
after these 2 additions.

| Proposed id | Kind | Exact statement in one sentence | Follow this existing item | Dependencies and present status | Source backing | Gap closed |
|---|---|---|---|---|---|---|
| `def-taylor-and-maclaurin-series` | definition | If \(I\) is an open interval, \(f\in C^\infty(I)\), and \(a\in I\), its Taylor series at \(a\) is \(\sum_{n=0}^{\infty} f^{(n)}(a)(x-a)^n/n!\), called its Maclaurin series when \(a=0\), and this definition by itself asserts neither convergence nor equality with \(f\). | `cor-power-series-sums-are-smooth-with-coefficient-formula` | `def-higher-derivatives-and-smoothness` — published; `def-taylor-polynomial-and-remainder` — published; `def-real-power-series-and-radius-of-convergence` — published; `def-factorial-and-falling-factorial` — published. | Trench §4.5, Taylor/Maclaurin definitions; Hunter §§10.7.1–10.7.2; MIT 18.100C Lecture 23. | Supplies the absent standard names without confusing smoothness, convergence, and representation. |
| `thm-taylor-series-representation-by-remainder` | theorem | Let \(I\) be open, \(f\in C^\infty(I)\), and \(a\in I\): for each \(x\in I\), \(f(x)\) equals its Taylor series at \(a\) iff \(R_{n,a}f(x)\to0\), and if \(r>0\), \([a-r,a+r]\subset I\), and \(M_{n+1}:=\max_{\lvert t-a\rvert\le r}\lvert f^{(n+1)}(t)\rvert\) satisfies \(M_{n+1}r^{n+1}/(n+1)!\to0\), then the convergence to \(f\) is uniform on \([a-r,a+r]\). | `def-real-analytic-function` | `def-taylor-and-maclaurin-series` — planned earlier in this manifest; `def-taylor-polynomial-and-remainder` — published; `cor-taylor-remainder-bound` — published; `thm-extreme-value-r` — published; `def-pointwise-uniform-and-uniformly-cauchy-convergence` — published. | Trench §4.5, pp. 265–266, equality-via-remainder discussion and the following uniform theorem; Hunter §10.7.1. | Gives the missing theorem that says when the infinite Taylor series actually represents the function, rather than repeating finite Taylor's theorem. |

### `the-exponential-function-examples`

**Page-size note:** 6 examples now; **7** after this addition.

| Proposed id | Kind | Exact statement in one sentence | Follow this existing item | Dependencies and present status | Source backing | Gap closed |
|---|---|---|---|---|---|---|
| `cex-smooth-function-not-equal-to-its-maclaurin-series` | counterexample | The function \(\psi(x)=e^{-1/x^2}\) for \(x\ne0\) and \(\psi(0)=0\) lies in \(C^\infty(\mathbb R)\), has \(\psi^{(n)}(0)=0\) for every \(n\), and hence has the everywhere-convergent zero Maclaurin series although \(\psi(x)>0\) for every \(x\ne0\). | `ex-flat-exponential-function` | `ex-flat-exponential-function` — published; `thm-chain-rule` — published; `thm-algebra-of-derivatives` — published; `def-taylor-and-maclaurin-series` — planned earlier in this manifest. | Hunter Example 10.31 and Corollary 10.30; Trench §4.5 flat-function example. | Supplies the owner-named canonical counterexample and makes “the series converges” visibly weaker than “the series converges to \(f\).” |

### `the-logarithm-and-general-powers`

**Page-size note:** 25 items now; **26** after this addition.

| Proposed id | Kind | Exact statement in one sentence | Follow this existing item | Dependencies and present status | Source backing | Gap closed |
|---|---|---|---|---|---|---|
| `thm-euler-mascheroni-constant-and-harmonic-asymptotic` | theorem | For \(H_n=\sum_{k=1}^{n}1/k\), the sequence \(\gamma_n=H_n-\log n\) is strictly decreasing and bounded below by \(1-\log 2\), so it converges to a constant \(0<\gamma<1\) and \(H_n=\log n+\gamma+o(1)\) (hence \(H_n/\log n\to1\)). | `thm-logarithm-derivative-and-integral` | `thm-logarithm-derivative-and-integral` — published; `thm-monotonicity-of-the-integral` — published; `thm-additivity-over-subintervals` — published; `thm-monotone-convergence` — published. | Trench Exercise 4.3.14, supplemented by the standard integral comparison on successive unit intervals. | Adds the genuinely missing harmonic-series asymptotic without duplicating the published divergence, condensation, or \(p\)-series results. |

### `pi-the-equivalent-characterizations`

**Page-size note:** 14 items now; **16** after these 2 additions.

| Proposed id | Kind | Exact statement in one sentence | Follow this existing item | Dependencies and present status | Source backing | Gap closed |
|---|---|---|---|---|---|---|
| `def-radian-angle-by-unit-circle-arc-length` | definition | For \(\gamma(t)=(\cos t,\sin t)\) and \(0\le t\le2\pi\), the counterclockwise angle swept from \(\gamma(0)=(1,0)\) to \(\gamma(t)\) is defined to have radian measure \(L(\gamma\!\upharpoonright_{[0,t]})\), and that measure is \(t\) because \(\lVert\gamma'(u)\rVert_2=1\) (so a full turn is \(2\pi\) radians). | `thm-circle-circumference-diameter-ratio-is-pi` | `def-circular-arcs-circumference-and-diameter` — published; `thm-c1-paths-have-length-equal-to-the-integral-of-speed` — published; `thm-sine-and-cosine-derivatives` — published; `cor-trigonometric-parity-and-pythagorean-identity` — published; `thm-circle-circumference-diameter-ratio-is-pi` — published. | Lebl §11.4.3; OpenStax §7.3, “The Unit Circle” and “Defining Sine and Cosine Functions from the Unit Circle”; the proof is licensed by the library's existing speed-integral theorem. | Establishes, rather than assumes, that the analytic parameter is geometric radian arc length. |
| `thm-analytic-sine-cosine-agree-with-right-triangle-ratios` | theorem | Given \(A,O>0\), put \(H=\sqrt{A^2+O^2}\) and \(P=(A,O)\): there is a unique \(\theta\in(0,\pi/2)\) with \((A/H,O/H)=(\cos\theta,\sin\theta)\), the unit-circle arc from \((1,0)\) to \((A/H,O/H)\) has radian measure \(\theta\), and the coordinate right triangle with vertices \((0,0),(A,0),P\) therefore satisfies \(\cos\theta=A/H\) and \(\sin\theta=O/H\). | `thm-circle-circumference-diameter-ratio-is-pi` | `def-radian-angle-by-unit-circle-arc-length` — planned immediately before it at the same anchor; `def-p-norms-on-rn` — published; `thm-of-square-roots` — published; `cor-trigonometric-parity-and-pythagorean-identity` — published; `thm-sine-cosine-signs-monotonicity-and-ranges` — published. | Lebl §11.4.3; OpenStax §§7.2–7.3, right-triangle ratios and unit-circle coordinates. | Closes the corpus-wide zero-“hypotenuse” gap for an arbitrary nondegenerate standard-position right triangle, rather than merely constructing one from analytic coordinates. |

The placement schema requires `after` to name an existing item, so both
geometric rows use the circumference theorem as their anchor. They must be
spliced in manifest/Table-A order — definition, then bridge — before the
existing polygon theorem. That order closes the geometric calibration and
right-triangle-ratio seam before the polygon proof uses its sine and tangent
formulas.

### `further-trigonometric-identities-and-inverses`

**Page-size note:** 5 items now; **6** after this addition.

| Proposed id | Kind | Exact statement in one sentence | Follow this existing item | Dependencies and present status | Source backing | Gap closed |
|---|---|---|---|---|---|---|
| `thm-standard-maclaurin-expansions` | theorem | The standard Maclaurin expansions are \((1-x)^{-1}=\sum_{n\ge0}x^n\) for \(\lvert x\rvert<1\); \(e^x=\sum_{n\ge0}x^n/n!\), \(\sin x=\sum_{n\ge0}(-1)^n x^{2n+1}/(2n+1)!\), and \(\cos x=\sum_{n\ge0}(-1)^n x^{2n}/(2n)!\) for every real \(x\); \(\log(1+x)=\sum_{n\ge1}(-1)^{n+1}x^n/n\) for \(-1<x\le1\); \(\arctan x=\sum_{n\ge0}(-1)^n x^{2n+1}/(2n+1)\) for \(\lvert x\rvert<1\), with value \(\pi/4\) at \(x=1\); and \((1+x)^\alpha=\sum_{n\ge0}\binom{\alpha}{n}x^n\) for real \(\alpha\) and \(\lvert x\rvert<1\), where \(\binom{\alpha}{0}=1\) and \(\binom{\alpha}{n+1}=\binom{\alpha}{n}(\alpha-n)/(n+1)\). | `thm-principal-inverse-tangent-calculus` | `def-taylor-and-maclaurin-series` — planned earlier in this manifest; `thm-geometric-series` — published; `def-real-exponential-function-and-e` — published; `def-sine-and-cosine-by-power-series` — published; `thm-log-one-plus-x-power-series` — published; `thm-principal-inverse-tangent-calculus` — published; `thm-real-power-continuity-and-derivatives` — published; `def-factorial-and-falling-factorial` — published; `thm-binomial-theorem` — published; `thm-ratio-test` — published; `thm-termwise-differentiation-of-a-real-power-series` — published; `thm-algebra-of-derivatives` — published; `cor-zero-derivative-implies-constant` — published. | Trench §4.5, pp. 265–267, sine/cosine, exponential, and generalized-binomial examples; MIT 18.100C Lecture 23; the already-published library statements for the five non-binomial families. | Closes the Maclaurin naming/synthesis gap once, at the first dependency-legal page, while the generalized binomial family supplies the only genuinely new expansion proof. |

### Provenance and authorability controls for Table A

- Every proposed statement is **literature-derived**. None is to be declared
  `ai-generated`, and none changes a source hypothesis, domain, endpoint, or
  direction.
- Expected proof provenance is **ai-altered**: the next authoring run should
  adapt the cited proof to the exact published dependency graph and record why.
- The expansion theorem must not claim generalized-binomial endpoint behavior;
  only \(|x|<1\) is proposed.
- The Taylor representation theorem must keep the \(M_{n+1}\) index and compact
  interval explicit; no hidden global derivative bound is intended.
- The right-triangle theorem is acute-angle only. Axis/quadrantal endpoints are
  unit-circle values, not nondegenerate right triangles, and should be noted
  rather than forced into an undefined side-ratio convention.
- The flat counterexample is a B-page leaf and is not a dependency target for
  later A-page mathematics.

## Table B — proposed new A/B pairs (phase 2)

These rows are proposals for a later standard build cycle. No page, item, id
inventory, judge scope, or draft is authorized by this table.

| Working A/B title | Why it cannot be one item on an existing page | Place in reading order | Results the pair would carry | Principal sources |
|---|---|---|---|---|
| **Fourier Series and Fejér Summation / Examples and Counterexamples** | It needs new definitions (periodic functions, Fourier coefficients, trigonometric polynomials, Dirichlet and Fejér kernels), orthogonality/Bessel machinery, several distinct convergence theorems, and a counterexample suite; putting this into `approximation-and-compactness-in-ck` or `uniform-convergence-of-functions` would turn one page item into a hidden chapter. | Follow `the-complex-exponential-and-eulers-formula`: uniform convergence, Riemann integration, approximation, trigonometry, and complex exponentials are then all published, and the Fourier pair can use \(e^{inx}\) without a forward reference. | A: periodic/trigonometric-polynomial definitions; coefficient formulas and uniqueness; orthogonality and finite Bessel inequality; Dirichlet kernel and localization; Dirichlet–Jordan/Lipschitz pointwise convergence with midpoint values; Fejér kernel and uniform convergence of Cesàro means for continuous periodic functions; trigonometric-polynomial density. B: square/sawtooth/absolute-value waves, Gibbs behavior, coefficient decay/smoothness examples, du Bois-Reymond divergence note. Full \(L^2\) Parseval/Riesz–Fischer, Kolmogorov, and Carleson remain measure/functional-analysis work. | Lebl §11.8; Saito, “A Brief Introduction to Fourier Analysis on the Circle,” Theorems 1–5; existing deferred note `rem-du-bois-reymond-divergent-fourier`. |
| **Picard–Lindelöf and First-Order ODEs / Examples and Counterexamples** | A general ODE theorem is not a corollary-sized extension of the exponential IVP: it needs an integral-equation equivalence, a complete function space, a contraction interval, iteration estimates, continuation boundaries, and sharp failures of the hypotheses. | Follow `the-fundamental-theorems-of-calculus`: FTC and parameter integration are then available, while Banach's contraction theorem and exponential Picard iterates are already earlier prerequisites. | A: IVP/integral-equation equivalence; local Picard–Lindelöf for continuous \(F(t,y)\) locally Lipschitz in \(y\); Picard iterates and quantitative error; uniqueness on overlaps; Grönwall estimate and continuous dependence; maximal continuation criterion; first-order linear integrating-factor formula. B: \(y'=y\), finite-time blow-up \(y'=y^2\), nonuniqueness without Lipschitz, no solution for a discontinuous right-hand side, and endpoint/continuation examples. Carathéodory weak solutions remain with measure/absolute-continuity theory. | Lebl §6.3, Theorem 6.3.2 and Examples 6.3.3–6.3.6. |
| **Constant-Rank Normal Forms and Regular Level Sets / Examples and Counterexamples** | The existing inverse/implicit page has only five core items. Constant rank requires rank/submersion/immersion definitions, coordinate normal forms, and regular-value consequences; examples then need a companion. This was named in the original RA-36 scaffold but is not on the published page. | Follow `inverse-and-implicit-function-theorems`: its Euclidean inverse and implicit theorems are the direct proof engines; the pair then precedes later constrained-extrema and vector-calculus applications. | A: rank of a derivative; constant-rank theorem in Euclidean coordinates; submersions and immersions; regular points/values; Euclidean regular-level-set theorem and tangent-kernel description; local normal forms and a clean link to Lagrange multipliers. B: spheres, graphs, surfaces of revolution, rank-drop singularities (crossing/cusp), a map of nonconstant rank, and failures when regularity is dropped. General embedded-manifold theory remains out of scope. | Lee, `Introduction to Smooth Manifolds`, Theorem 4.12/Corollary 4.13 and Theorem 5.12/Corollaries 5.13–5.14, Examples 5.15 and 5.17. |
| **Surface Integrals, the Divergence Theorem, and Stokes’ Theorem / Examples and Counterexamples** | No current page defines regular parametrized surfaces, surface measure elements, orientation, boundary orientation, or flux. Those prerequisites plus two major theorems cannot honestly be an extra item on the line-integral page; Green's theorem itself is already there. | Follow `line-integrals-and-the-gradient-theorem`: total derivatives, multivariable Riemann/Jordan integration, change of variables, arc length, line integrals, curl/conservative fields, and planar Green are all then available. | A: regular parametrized surfaces and reparametrization; surface area and scalar surface integrals; orientations and flux; divergence/curl; divergence theorem for a precisely proved piecewise-\(C^1\) elementary/Jordan class; oriented boundary of a surface; classical Stokes theorem for finitely parametrized surfaces; Green's circulation/flux forms as planar corollaries. B: sphere/hemisphere/cylinder/torus computations, orientation reversal, spherical shell, flux of singular inverse-square fields away from the singularity, Stokes on several spanning surfaces, and parametrization degeneracies. Differential forms and general manifold Stokes remain deferred. | Poonen, MIT 18.02 notes, §§17.3–21; existing `rem-de-rham-and-stokes-on-manifolds` for the explicit boundary between classical Euclidean and manifold Stokes. |

## Approval boundary

Approval of this file would authorize a later dispatch to author exactly the
seven Table-A items as drafts and nothing else. It would not publish them, add
them to pages, judge them, audit them, or begin any Table-B pair. The exact
future judge/audit scope is duplicated in
`research/ra-enrich-01-placement.json`.
