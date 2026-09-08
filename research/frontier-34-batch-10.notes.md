# frontier-34 · beta · batch-10


**BLOCKED — not ready for authoring or publication.** Scope: the PDE-5 A/B pair at orders 458.007/458.008. This is a substantive scaffold and source harvest, not a mathematical closure certificate. All 26 A and 9 B design/addition IDs are retained; eight local A prerequisites and one B regularity counterexample bring the inventory to 34 A / 10 B. The 60-item A-page ceiling is respected.


## Authorization and run evidence

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the generated dispatch, research/frontier-34-beta-batch.task.md, the complete PDE-5 section at research/plan-pde-track.md:747–815, PDE-5 additions at 3014–3027, the track conventions, current plan and owned scaffold. The task restricts repo writes to this batch’s pages.json, coverage.json and notes.md. Only those three repo artifacts were written; scratch scripts and receipts are under /tmp/frontier34-b10. The current plan and published content were not edited by this beta. Other workers are active: git status shows changes outside the owned files, including plan-spec.json; these are not this beta’s changes.

Active-run evidence: node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run frontier-34 --state-dir .autopilot/frontier-34 reported running/scaffold, with drift and drift-apply complete, at 2026-09-07T14:00:57Z. Git HEAD observed 4501527a0 (autopilot author-model change), preceded by ee067e69c and frontier-33 publication f854a7b88. No RESUME file was used as an active-run authority.


## Fatal open obligations

**F1 — dependency closure is not ready.** The current-plan page closure has 290 pages. The current item graph, using published statements in preference to scaffold versions and following deps/justified_by/forward_refs, contains 4988 item IDs. No resolving-ID-only success is claimed: the complete transitive statement/hypothesis/direction/convention/axiom review of this graph has NOT been completed. 66 inherited pages lack both a published page under library/ and an item inventory in the plan or scanned manifests. Their exact titles, placement, category and immediate prerequisites appear below. They are existing planned A/B pairs, not authorized mathematics that can be invented or bypassed by this beta. The consumer remains blocked until those inventories/proofs and the semantic review are available. No new A/B pair is currently necessary for the local PDE-5 additions: they fit inside the owned pair. No plan/extra-pair write is authorized.

**F2 — required full-document fetch receipts are missing.** Browser full-text PDF extraction succeeded for Hunter, Simon, Stanford and Gantumur, and the complete relevant text of the claimed ranges was read. The shell URL sweep returned curl error 6 (could not resolve host) for every URL; source-fetch-check --stamp returned EAI_AGAIN for all four. No byte length, hash or fetch_verified stamp was fabricated. The source-backing gate consequently reports all 44 included items as lacking mechanically openable backing. This is an environment retrieval failure, not evidence that all four academic URLs are dead. An authorized environment with working retrieval must fetch-verify them before readiness.

**F3 — the lower-regularity Green target is false as an unqualified ordinary Lebesgue-integral assertion.** The design asks u in C2(Omega) intersect C1(closure Omega). A bounded gradient at the boundary does not imply integrability of Delta u, even after multiplication by the Green kernel. The target and zero-Dirichlet corollary are retained with an explicit blocker; their C2(closure) starting case is separated, not silently substituted. Symmetry at merely C1 boundary regularity likewise needs a proved limiting Green identity, since the available local identity is currently proved for C2(closure) data.

Concrete witness (`cex-c-one-boundary-regularity-does-not-ensure-absolute-green-volume-integrability`): on B1, set t=1-r in a boundary collar and u=chi(t) integral_0^t s sin(s^-3) ds, with a smooth cutoff equal to one near t=0 and zero away from the collar. Extend u by zero near the centre. Then u and its gradient extend continuously with zero boundary values, while u_tt=sin(t^-3)-3t^-3 cos(t^-3). For the central pole, G(0,y)=Phi(|y|)-Phi(1) is comparable to t. Hence the absolute Green volume integral dominates a divergent multiple of integral_0^epsilon t^-2 |cos(t^-3)|dt, modulo an integrable remainder. Substitution z=t^-3 gives integral z^-2/3 |cos z|dz. The cutoff, FTC and explicit radial kernel prove the witness locally; no later ball-kernel theorem is used. Before authoring the design target, define and prove an appropriate boundary-exhaustion improper integral, including independence within a stated exhaustion class, or have the scope owner explicitly correct its hypotheses. Keeping only C2(closure) would weaken the target and is not treated as completion.


## Design/plan/source conflicts and mathematical decisions

- Current plan keeps A requires maximum-principles-harnack-and-liouville-in-rn-examples and smooth-partitions-of-unity-and-exhaustions; B requires A. Titles, categories, orders and companions match the dispatch. The prose requires PDE-3–4, MT-8/11/15, FA-24 and multivariable integration/partition machinery. Most are reached indirectly, but the inherited probability/functional-analysis chain contains the missing inventories in F1. The plan is controlling; no requires edge was removed to shorten that chain.

- The design calls the divergence theorem unpublished/nonexistent. There is now a published the-divergence-theorem-and-classical-stokes page, but its elementary-solid/finite-gluing theorem is three-dimensional. It does not supply the arbitrary-dimensional bounded-C1-domain result. The local graph-patch proof is preserved.

- A merely C1 boundary is not a smooth manifold to which the published smooth-manifold partition theorem directly applies. The local finite partition uses smooth ambient Euclidean bumps. Chart measure is bridged explicitly to the previously defined cone/polar sphere measure before flux normalization.

- Hunter’s actual sections are 2.5 Green identities, 2.6 fundamental solution, 2.7 Newtonian potential, 2.8 singular integrals. The design’s supplementary references to Green functions in Hunter and to convolution in §3.4 are not exact backing. Domain Green kernels use Simon and Stanford; distribution topology/derivatives use Hunter §3.3. Teschl’s design URL was unavailable as full text; a same-text archive attempt was also inaccessible. Simon is a different reharvested treatment with original_url retained, not a mirror or an assertion that Teschl was read. Evans is credited through the independently read Stanford treatment, not as a directly read full textbook.

- Adopt outward normal, -Delta Phi=delta_0, n>=2, s_n=|S^(n-1)|. DPhi has outward flux -1; minus DPhi has +1. The 2D logarithm and epsilon|log epsilon| term are computed separately. Simon/Gantumur use the opposite Delta kernel; Simon also uses inward normals. All such formulas are converted rather than copied.

- Normalizations are derived from the kernel, avoiding apparent source typos: Hunter’s printed Hessian homogeneity exponent/field-sign and far-field big-O inconsistencies; Stanford’s reversed small-ball containment inequality and omitted (n-2) in one displayed higher-dimensional kernel. Gantumur’s logarithmic comparison is obtained from actual boundary extrema rather than copying its inequality. None is used as an unproved supplier.

- Compact Lp data are treated for every 1<=p<=infinity as L1 on their compact essential support. The potential is an L1_local class and exists almost everywhere; only bounded compact data get everywhere absolute convergence. Borel representatives and product measurability precede Tonelli/Fubini. The locally integrable kernel is not incorrectly assumed globally L1.

- The Hessian is not absolutely locally integrable. The proof subtracts f(x), keeps the -delta_ij f(x)/n spherical term and integrates r^(alpha-1). Holder exponents are real 0<alpha<=1: the older metric Holder definition has rational exponents, so def-real-power is an explicit extra dependency. Mollification uses a common support, uniform convergence and bounded Holder seminorms, not false density in the same Holder norm. The FTC identifies locally uniform derivative limits.

- Green functions are conditional objects. The harmonic correction extends through the pole; uniqueness follows for its difference. Positivity uses a punctured-domain minimum principle and a polygonal-path perturbation to establish connectedness. The punctured-ball counterexample concerns continuous zero values at every boundary point, not potential-theoretic Green functions with weaker traces. Neumann compatibility is necessity only; uniqueness is componentwise.


## Source evidence and harvest

The coverage artifact contains 97 disposition rows. Source headings and local consequences are explicitly distinguished; each included/inline result names its item, each deferral has a resolvable destination, and each out-of-scope row gives a mathematical scope reason. Browser extraction is read evidence only; it does not override F2.

- [John K. Hunter, Notes on Partial Differential Equations (242-page full lecture-note set)](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf): §1.3 pp.2–3; §1.9.2 Theorem 1.31 pp.12–13; §§1.10–1.12 pp.13–18; §§2.5–2.7 pp.32–43; §3.3 pp.51–53. Named results and discussions within these selected sections; printed page numbers. Not a claim to have read the entire 242-page book.

- [Leon Simon, Lectures on PDE (118-page full lecture-note set)](https://math.stanford.edu/~lms/lecs-on-pde.pdf): Chapter 4, printed pp.34–36: Green identities, fundamental solution, punctured-domain representation, corrected Green function and smooth-source convolution. Complete relevant text through the smooth-source convolution equation (**) at the end of printed p.36. Simon uses inward normals and Delta K=delta, converted explicitly to outward normals and Phi=-K.

- [Stanford Math 220B, 4 Green’s Functions](https://web.stanford.edu/class/math220b/handouts/greensfcns.pdf): §4.1 pp.1–5 (claims 1–2, equations (4.1)–(4.9), Theorem 3 and Corollary 4); Lemma 13 pp.12–14. Complete formal motivation and its rigorous once-punctured proof, plus complete symmetry proof with both poles removed. Other examples in this handout are not claimed as a full harvested range.

- [Tsogtgerel Gantumur, Harmonic functions (28 October 2012)](https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf): §7 pp.9–12 through equation (66) and Exercise 13; §8 pp.12–14, Theorem 15 through Theorem 17 and Exercise 14. Complete Green-family discussion and explicit examples, ball Poisson derivation, boundary-limit proof and removable-singularity proof. Delta convention E=-Phi reverses G signs. Remark 12 is not used as a substitute for the symmetry proof.

Independence: Hunter and Simon are separate full lecture-note treatments by different authors; Stanford and Gantumur provide additional checks. The complete selected proofs were read, not just search snippets. Teschl recovery attempted https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf and https://web.archive.org/web/20240000000000/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf; neither yielded readable full text in this session. It is not credited as read. Browser reads also exposed neighboring material outside the claimed source ranges; those incidental extracts are not represented as complete sections.


## Direct dependency interface audit

- **Euclidean differentiability and total chain rule:** Open-domain total differentiability, not scalar differentiation alone; used for graph transitions and radial kernels.

- **Compactness and compact Euclidean bumps:** Heine–Borel supplies finite subcovers in ZF; the bump construction is ambient and can be made compactly supported by choosing a bounded intermediate open set.

- **Change of variables and polar measure:** Both published statements explicitly assume Countable Choice. Chart overlaps use dimension n-1; the sphere bridge uses dimension n and uniqueness of polar sigma. No least-axiom claim is inferred for the full inherited graph.

- **Tonelli, Fubini, completion representatives:** Tonelli requires nonnegative product measurability; Fubini requires an absolute L1 bound. Borel representatives ensure the former, and compact-source/local-kernel estimates prove the latter. The existing L1*L1 representative lemma is not applied to globally non-L1 Phi.

- **FTC and differentiation on a compact rectangle:** The published FTC is Riemann. The explicit Riemann/Lebesgue agreement dependency bridges continuous compact-interval integrands. Variable graph bounds are handled by FTC plus the total chain rule; h is never twice differentiated.

- **Dominated convergence and Holder inequality:** An explicit near-pole radial majorant precedes each limit. Finite-measure compact supports justify Lp subset L1, including both endpoint exponents.

- **Distributions and Taylor:** Published def-distributional-harmonicity-and-poisson-equation-in-rn defines fixed-compact-support convergence in every derivative. Translation/difference quotients stay on one compact set, and Taylor bounds each seminorm. General distribution convolution is not inferred from the narrower published mollified-Laplacian lemma.

- **Maximum principles:** Weak form accepts bounded open sets without smoothness or connectedness; strong form needs a connected domain. Those hypotheses are checked separately on punctured domains.

- **Mean value and removability:** Published sphere mean uses polar sigma, hence the local surface-measure bridge. Published removable-singularity corollary allows every n>=2 and bounded isolated singularities, giving the punctured-ball obstruction.

- **Zero derivative on connected open sets:** The multivariable theorem, not the one-variable constant-derivative corollary alone, closes Neumann uniqueness. Components are treated separately.

- **Real Holder powers:** The older metric definition permits rational alpha only. def-real-power supplies the explicitly real exponent used in this page; no endpoint alpha=0 is asserted.

These are direct-interface findings. They do not certify all 4988 transitive proofs. The manifest has explicit deps arrays for every item, including local proof helpers. No A item depends on the B companion; its shell example precedes the radial example that uses it.


## Graph audit: current records versus concluded-run records

Scanned 376 research/*.pages.json manifests, current plan items/requires, all published items/*.md frontmatter and library/**/*.md page frontmatter. The all-version union has 291 pages / 5119 item IDs. Unioning obsolete variants is conservative and can introduce cycles that are not present in the current graph; it is not a current-plan certificate.

The all-version catalogue page path is: fundamental-solutions-newtonian-potentials-and-green-functions -> smooth-partitions-of-unity-and-exhaustions -> smooth-manifolds-and-smooth-maps -> compactness -> filters-and-ultrafilters -> deferred-set-theory-beyond-choice. The current plan page graph does not contain that path. Exact records for its edges:

- fundamental-solutions-newtonian-potentials-and-green-functions -> smooth-partitions-of-unity-and-exhaustions: plan, research/frontier-34-batch-10.pages.json

- smooth-partitions-of-unity-and-exhaustions -> smooth-manifolds-and-smooth-maps: plan, research/frontier-24-batch-9.pages.json

- smooth-manifolds-and-smooth-maps -> compactness: plan, research/frontier-23-batch-9.pages.json

- compactness -> filters-and-ultrafilters: plan

- filters-and-ultrafilters -> deferred-set-theory-beyond-choice: research/frontier-5-batch-1.pages.json

The current aggregate item graph reaches catalogue remarks through two inherited analytic remarks:

- Page the-analytic-hahn-banach-theorem; item path rem-choice-strength-of-hahn-banach -> rem-halpern-levy-bpi-not-ac. First edge is {"from": "rem-choice-strength-of-hahn-banach", "to": "rem-halpern-levy-bpi-not-ac", "versions": [{"source": "items/rem-choice-strength-of-hahn-banach.md", "fields": ["deps"]}]}.

- Page finite-dimensional-normed-spaces-and-riesz-lemma; item path rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost -> rem-baire-category-choice-strength. First edge is {"from": "rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost", "to": "rem-baire-category-choice-strength", "versions": [{"source": "items/rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost.md", "fields": ["deps"]}]}.

- Page the-analytic-hahn-banach-theorem; item path rem-choice-strength-of-hahn-banach -> rem-halpern-levy-bpi-not-ac -> rem-feferman-no-free-ultrafilter-in-zf. First edge is {"from": "rem-choice-strength-of-hahn-banach", "to": "rem-halpern-levy-bpi-not-ac", "versions": [{"source": "items/rem-choice-strength-of-hahn-banach.md", "fields": ["deps"]}]}.

- Page the-analytic-hahn-banach-theorem; item path rem-choice-strength-of-hahn-banach -> rem-halpern-levy-bpi-not-ac -> rem-cohen-forcing-ac-independent. First edge is {"from": "rem-choice-strength-of-hahn-banach", "to": "rem-halpern-levy-bpi-not-ac", "versions": [{"source": "items/rem-choice-strength-of-hahn-banach.md", "fields": ["deps"]}]}.

- Page the-analytic-hahn-banach-theorem; item path rem-choice-strength-of-hahn-banach -> rem-halpern-levy-bpi-not-ac -> rem-cohen-forcing-ac-independent -> rem-godel-constructible-universe. First edge is {"from": "rem-choice-strength-of-hahn-banach", "to": "rem-halpern-levy-bpi-not-ac", "versions": [{"source": "items/rem-choice-strength-of-hahn-banach.md", "fields": ["deps"]}]}.

These are actual deps edges in published analytic remarks, not orientation-only external_refs. They must not be copied into a Foundations proof. extcheck returned no current Foundations-policy errors; this beta does not relabel the analytic pages as Foundations or treat the historical union as proof of a current Foundations violation. A future restoration of the historical filters-and-ultrafilters -> catalogue requires edge would violate the contract. No owned item cites the catalogue, external_refs, justified_by or forward_refs as a supplier. Full inherited semantic/axiom certification remains open under F1.

Historical-only missing IDs: [{"id": "lem-closed-subspace-of-a-compact-space-is-compact", "path": ["thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain", "lem-closed-subspace-of-a-compact-space-is-compact"]}, {"id": "thm-birkhoff-ergodic-theorem", "path": ["cor-birkhoff-strong-law-for-iid-coordinate-shifts", "thm-birkhoff-ergodic-theorem"]}]. Current resolution has 0 missing item IDs. Current deps-only cycles: 0; cycles when every justified_by and forward_refs record is indiscriminately added: 506. The latter include statement/refutation relationships and require semantic classification; they are not asserted to be proof cycles. The all-version union has 611 such cycles. Whole-run manifest-deps and validate-plan independently pass their narrower ordering/resolution checks.


## Existing missing prerequisite pages

Correction to the preliminary count: 70 pages had empty current-plan inventories; reading published pages from their actual library/ location and checking all manifests reduced the unresolved set to 66. Four already scaffolded historical supplier pages are not classified as absent. Each row below gives placement, category, title and exact immediate prerequisites; all belong to the inherited transitive chain, not to this beta’s writable scope. A/B inventories are currently absent rather than silently presumed adequate.

| Order | Category | Page/title | Requires |
|---|---|---|---|

| 288.063 | functional-analysis | `banach-alaoglu-goldstine-and-krein-milman` — Banach Alaoglu Goldstine and Krein Milman | `weak-and-weak-star-topologies-examples` |

| 288.064 | functional-analysis | `banach-alaoglu-goldstine-and-krein-milman-examples` — Banach Alaoglu Goldstine and Krein Milman — Examples | `banach-alaoglu-goldstine-and-krein-milman` |

| 288.065 | functional-analysis | `reflexivity-and-eberlein-smulian` — Reflexivity and Eberlein Smulian | `banach-alaoglu-goldstine-and-krein-milman-examples` |

| 288.066 | functional-analysis | `reflexivity-and-eberlein-smulian-examples` — Reflexivity and Eberlein Smulian — Examples | `reflexivity-and-eberlein-smulian` |

| 288.067 | functional-analysis | `schauder-bases-approximation-and-banach-space-pathologies` — Schauder Bases Approximation and Banach Space Pathologies | `reflexivity-and-eberlein-smulian-examples` |

| 288.068 | functional-analysis | `schauder-bases-approximation-and-banach-space-pathologies-examples` — Schauder Bases Approximation and Banach Space Pathologies — Examples | `schauder-bases-approximation-and-banach-space-pathologies` |

| 288.069 | functional-analysis | `banach-valued-integration-and-the-radon-nikodym-property` — Banach Valued Integration and the Radon Nikodym Property | `schauder-bases-approximation-and-banach-space-pathologies-examples` |

| 288.07 | functional-analysis | `banach-valued-integration-and-the-radon-nikodym-property-examples` — Banach Valued Integration and the Radon Nikodym Property — Examples | `banach-valued-integration-and-the-radon-nikodym-property` |

| 288.071 | functional-analysis | `hilbert-space-geometry-and-riesz-representation` — Hilbert Space Geometry and Riesz Representation | `banach-valued-integration-and-the-radon-nikodym-property-examples` |

| 288.072 | functional-analysis | `hilbert-space-geometry-and-riesz-representation-examples` — Hilbert Space Geometry and Riesz Representation — Examples | `hilbert-space-geometry-and-riesz-representation` |

| 288.073 | functional-analysis | `orthonormal-bases-parseval-and-fourier-series` — Orthonormal Bases Parseval and Fourier Series | `hilbert-space-geometry-and-riesz-representation-examples` |

| 288.074 | functional-analysis | `orthonormal-bases-parseval-and-fourier-series-examples` — Orthonormal Bases Parseval and Fourier Series — Examples | `orthonormal-bases-parseval-and-fourier-series` |

| 288.075 | functional-analysis | `compact-operators-and-riesz-schauder-theory` — Compact Operators and Riesz Schauder Theory | `orthonormal-bases-parseval-and-fourier-series-examples` |

| 288.076 | functional-analysis | `compact-operators-and-riesz-schauder-theory-examples` — Compact Operators and Riesz Schauder Theory — Examples | `compact-operators-and-riesz-schauder-theory` |

| 288.077 | functional-analysis | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` — Compact Self Adjoint Hilbert Schmidt and Trace Class Operators | `compact-operators-and-riesz-schauder-theory-examples` |

| 288.078 | functional-analysis | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` — Compact Self Adjoint Hilbert Schmidt and Trace Class Operators — Examples | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |

| 288.079 | functional-analysis | `banach-algebras-spectrum-and-holomorphic-functional-calculus` — Banach Algebras Spectrum and Holomorphic Functional Calculus | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` |

| 288.08 | functional-analysis | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` — Banach Algebras Spectrum and Holomorphic Functional Calculus — Examples | `banach-algebras-spectrum-and-holomorphic-functional-calculus` |

| 288.081 | functional-analysis | `gelfand-theory-and-commutative-c-star-algebras` — Gelfand Theory and Commutative C Star Algebras | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` |

| 288.082 | functional-analysis | `gelfand-theory-and-commutative-c-star-algebras-examples` — Gelfand Theory and Commutative C Star Algebras — Examples | `gelfand-theory-and-commutative-c-star-algebras` |

| 288.083 | functional-analysis | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` — Continuous Functional Calculus for Self Adjoint and Normal Operators | `gelfand-theory-and-commutative-c-star-algebras-examples` |

| 288.084 | functional-analysis | `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` — Continuous Functional Calculus for Self Adjoint and Normal Operators — Examples | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` |

| 288.085 | functional-analysis | `spectral-measures-and-borel-functional-calculus` — Spectral Measures and Borel Functional Calculus | `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` |

| 288.086 | functional-analysis | `spectral-measures-and-borel-functional-calculus-examples` — Spectral Measures and Borel Functional Calculus — Examples | `spectral-measures-and-borel-functional-calculus` |

| 288.087 | functional-analysis | `unbounded-self-adjoint-operators-and-stones-theorem` — Unbounded Self Adjoint Operators and Stones Theorem | `spectral-measures-and-borel-functional-calculus-examples` |

| 288.088 | functional-analysis | `unbounded-self-adjoint-operators-and-stones-theorem-examples` — Unbounded Self Adjoint Operators and Stones Theorem — Examples | `unbounded-self-adjoint-operators-and-stones-theorem` |

| 288.089 | functional-analysis | `fourier-transform-convolution-and-approximate-identities` — Fourier Transform Convolution and Approximate Identities | `unbounded-self-adjoint-operators-and-stones-theorem-examples` |

| 288.09 | functional-analysis | `fourier-transform-convolution-and-approximate-identities-examples` — Fourier Transform Convolution and Approximate Identities — Examples | `fourier-transform-convolution-and-approximate-identities` |

| 288.091 | functional-analysis | `schwartz-space-and-the-plancherel-theorem` — Schwartz Space and the Plancherel Theorem | `fourier-transform-convolution-and-approximate-identities-examples` |

| 288.092 | functional-analysis | `schwartz-space-and-the-plancherel-theorem-examples` — Schwartz Space and the Plancherel Theorem — Examples | `schwartz-space-and-the-plancherel-theorem` |

| 288.093 | functional-analysis | `distributions-test-functions-and-differentiation` — Distributions Test Functions and Differentiation | `schwartz-space-and-the-plancherel-theorem-examples` |

| 288.094 | functional-analysis | `distributions-test-functions-and-differentiation-examples` — Distributions Test Functions and Differentiation — Examples | `distributions-test-functions-and-differentiation` |

| 288.095 | functional-analysis | `tempered-distributions-and-the-fourier-transform` — Tempered Distributions and the Fourier Transform | `distributions-test-functions-and-differentiation-examples` |

| 288.096 | functional-analysis | `tempered-distributions-and-the-fourier-transform-examples` — Tempered Distributions and the Fourier Transform — Examples | `tempered-distributions-and-the-fourier-transform` |

| 288.109 | probability | `weak-convergence-tightness-and-representation` — Weak Convergence Tightness and Representation | `strong-laws-of-large-numbers-examples` |

| 288.11 | probability | `weak-convergence-tightness-and-representation-examples` — Weak Convergence Tightness and Representation — Examples | `weak-convergence-tightness-and-representation` |

| 288.111 | probability | `characteristic-functions-inversion-and-continuity` — Characteristic Functions Inversion and Continuity | `weak-convergence-tightness-and-representation-examples` |

| 288.112 | probability | `characteristic-functions-inversion-and-continuity-examples` — Characteristic Functions Inversion and Continuity — Examples | `characteristic-functions-inversion-and-continuity` |

| 288.113 | probability | `central-limit-theorems` — Central Limit Theorems | `characteristic-functions-inversion-and-continuity-examples` |

| 288.114 | probability | `central-limit-theorems-examples` — Central Limit Theorems — Examples | `central-limit-theorems` |

| 288.115 | probability | `conditional-expectation` — Conditional Expectation | `central-limit-theorems-examples` |

| 288.116 | probability | `conditional-expectation-examples` — Conditional Expectation — Examples | `conditional-expectation` |

| 288.117 | probability | `conditional-distributions-and-regular-conditional-probability` — Conditional Distributions and Regular Conditional Probability | `conditional-expectation-examples` |

| 288.118 | probability | `conditional-distributions-and-regular-conditional-probability-examples` — Conditional Distributions and Regular Conditional Probability — Examples | `conditional-distributions-and-regular-conditional-probability` |

| 288.119 | probability | `discrete-time-martingales` — Discrete Time Martingales | `conditional-distributions-and-regular-conditional-probability-examples` |

| 288.12 | probability | `discrete-time-martingales-examples` — Discrete Time Martingales — Examples | `discrete-time-martingales` |

| 288.121 | probability | `martingale-inequalities-and-convergence` — Martingale Inequalities and Convergence | `discrete-time-martingales-examples` |

| 288.122 | probability | `martingale-inequalities-and-convergence-examples` — Martingale Inequalities and Convergence — Examples | `martingale-inequalities-and-convergence` |

| 288.123 | probability | `stopping-times-and-optional-stopping` — Stopping Times and Optional Stopping | `martingale-inequalities-and-convergence-examples` |

| 288.124 | probability | `stopping-times-and-optional-stopping-examples` — Stopping Times and Optional Stopping — Examples | `stopping-times-and-optional-stopping` |

| 288.125 | probability | `markov-kernels-and-markov-chains` — Markov Kernels and Markov Chains | `stopping-times-and-optional-stopping-examples` |

| 288.126 | probability | `markov-kernels-and-markov-chains-examples` — Markov Kernels and Markov Chains — Examples | `markov-kernels-and-markov-chains` |

| 288.127 | probability | `recurrence-transience-and-hitting-times-for-markov-chains` — Recurrence Transience and Hitting Times for Markov Chains | `markov-kernels-and-markov-chains-examples` |

| 288.128 | probability | `recurrence-transience-and-hitting-times-for-markov-chains-examples` — Recurrence Transience and Hitting Times for Markov Chains — Examples | `recurrence-transience-and-hitting-times-for-markov-chains` |

| 288.129 | probability | `stationary-markov-chains-and-ergodic-limits` — Stationary Markov Chains and Ergodic Limits | `recurrence-transience-and-hitting-times-for-markov-chains-examples` |

| 288.13 | probability | `stationary-markov-chains-and-ergodic-limits-examples` — Stationary Markov Chains and Ergodic Limits — Examples | `stationary-markov-chains-and-ergodic-limits` |

| 288.131 | probability | `brownian-motion-construction-and-continuity` — Brownian Motion Construction and Continuity | `stationary-markov-chains-and-ergodic-limits-examples` |

| 288.132 | probability | `brownian-motion-construction-and-continuity-examples` — Brownian Motion Construction and Continuity — Examples | `brownian-motion-construction-and-continuity` |

| 288.133 | probability | `brownian-motion-markov-properties-and-hitting-times` — Brownian Motion Markov Properties and Hitting Times | `brownian-motion-construction-and-continuity-examples` |

| 288.134 | probability | `brownian-motion-markov-properties-and-hitting-times-examples` — Brownian Motion Markov Properties and Hitting Times — Examples | `brownian-motion-markov-properties-and-hitting-times` |

| 288.135 | probability | `brownian-path-properties` — Brownian Path Properties | `brownian-motion-markov-properties-and-hitting-times-examples` |

| 288.136 | probability | `brownian-path-properties-examples` — Brownian Path Properties — Examples | `brownian-path-properties` |

| 288.137 | probability | `the-ito-integral-with-respect-to-brownian-motion` — The Ito Integral with Respect to Brownian Motion | `brownian-path-properties-examples` |

| 288.138 | probability | `the-ito-integral-with-respect-to-brownian-motion-examples` — The Ito Integral with Respect to Brownian Motion — Examples | `the-ito-integral-with-respect-to-brownian-motion` |

| 288.139 | probability | `itos-formula-and-brownian-martingales` — Itos Formula and Brownian Martingales | `the-ito-integral-with-respect-to-brownian-motion-examples` |

| 288.14 | probability | `itos-formula-and-brownian-martingales-examples` — Itos Formula and Brownian Martingales — Examples | `itos-formula-and-brownian-martingales` |

A complete example of the transitive path to the missing analysis spine is:

```text
fundamental-solutions-newtonian-potentials-and-green-functions
 -> maximum-principles-harnack-and-liouville-in-rn-examples
 -> maximum-principles-harnack-and-liouville-in-rn
 -> harmonic-functions-and-mean-values-in-rn-examples
 -> harmonic-functions-and-mean-values-in-rn
 -> quasilinear-characteristics-and-cauchy-kovalevskaya-examples
 -> quasilinear-characteristics-and-cauchy-kovalevskaya
 -> partial-differential-equations-and-characteristics-examples
 -> partial-differential-equations-and-characteristics
 -> itos-formula-and-brownian-martingales-examples
 -> itos-formula-and-brownian-martingales
 -> the-ito-integral-with-respect-to-brownian-motion-examples
 -> the-ito-integral-with-respect-to-brownian-motion
 -> brownian-path-properties-examples
 -> brownian-path-properties
 -> brownian-motion-markov-properties-and-hitting-times-examples
 -> brownian-motion-markov-properties-and-hitting-times
 -> brownian-motion-construction-and-continuity-examples
 -> brownian-motion-construction-and-continuity
 -> stationary-markov-chains-and-ergodic-limits-examples
 -> stationary-markov-chains-and-ergodic-limits
 -> recurrence-transience-and-hitting-times-for-markov-chains-examples
 -> recurrence-transience-and-hitting-times-for-markov-chains
 -> markov-kernels-and-markov-chains-examples
 -> markov-kernels-and-markov-chains
 -> stopping-times-and-optional-stopping-examples
 -> stopping-times-and-optional-stopping
 -> martingale-inequalities-and-convergence-examples
 -> martingale-inequalities-and-convergence
 -> discrete-time-martingales-examples
 -> discrete-time-martingales
 -> conditional-distributions-and-regular-conditional-probability-examples
 -> conditional-distributions-and-regular-conditional-probability
 -> conditional-expectation-examples
 -> conditional-expectation
 -> central-limit-theorems-examples
 -> central-limit-theorems
 -> characteristic-functions-inversion-and-continuity-examples
 -> characteristic-functions-inversion-and-continuity
 -> weak-convergence-tightness-and-representation-examples
 -> weak-convergence-tightness-and-representation
 -> strong-laws-of-large-numbers-examples
 -> strong-laws-of-large-numbers
 -> weak-laws-and-series-of-independent-random-variables-examples
 -> weak-laws-and-series-of-independent-random-variables
 -> modes-of-convergence-for-random-variables-examples
 -> modes-of-convergence-for-random-variables
 -> infinite-product-measures-and-kolmogorov-extension-examples
 -> infinite-product-measures-and-kolmogorov-extension
 -> independence-borel-cantelli-and-zero-one-laws-examples
 -> independence-borel-cantelli-and-zero-one-laws
 -> probability-spaces-random-variables-and-expectation-examples
 -> probability-spaces-random-variables-and-expectation
 -> tempered-distributions-and-the-fourier-transform-examples
 -> tempered-distributions-and-the-fourier-transform
 -> distributions-test-functions-and-differentiation-examples
 -> distributions-test-functions-and-differentiation
 -> schwartz-space-and-the-plancherel-theorem-examples
 -> schwartz-space-and-the-plancherel-theorem
 -> fourier-transform-convolution-and-approximate-identities-examples
 -> fourier-transform-convolution-and-approximate-identities
 -> unbounded-self-adjoint-operators-and-stones-theorem-examples
 -> unbounded-self-adjoint-operators-and-stones-theorem
 -> spectral-measures-and-borel-functional-calculus-examples
 -> spectral-measures-and-borel-functional-calculus
 -> continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples
 -> continuous-functional-calculus-for-self-adjoint-and-normal-operators
 -> gelfand-theory-and-commutative-c-star-algebras-examples
 -> gelfand-theory-and-commutative-c-star-algebras
 -> banach-algebras-spectrum-and-holomorphic-functional-calculus-examples
 -> banach-algebras-spectrum-and-holomorphic-functional-calculus
 -> compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples
 -> compact-self-adjoint-hilbert-schmidt-and-trace-class-operators
 -> compact-operators-and-riesz-schauder-theory-examples
 -> compact-operators-and-riesz-schauder-theory
 -> orthonormal-bases-parseval-and-fourier-series-examples
 -> orthonormal-bases-parseval-and-fourier-series
 -> hilbert-space-geometry-and-riesz-representation-examples
 -> hilbert-space-geometry-and-riesz-representation
 -> banach-valued-integration-and-the-radon-nikodym-property-examples
 -> banach-valued-integration-and-the-radon-nikodym-property
 -> schauder-bases-approximation-and-banach-space-pathologies-examples
 -> schauder-bases-approximation-and-banach-space-pathologies
 -> reflexivity-and-eberlein-smulian-examples
 -> reflexivity-and-eberlein-smulian
 -> banach-alaoglu-goldstine-and-krein-milman-examples
 -> banach-alaoglu-goldstine-and-krein-milman
```


## Exact owned inventory in proof order


### A — 34 items


1. `def-c-one-boundary-domain-outward-normal-and-surface-integral` — Bounded C1 domains, outward normals and chart surface integrals

2. `lem-finite-ambient-smooth-partition-near-a-compact-set` — A finite smooth partition near a compact set

3. `lem-surface-integral-is-independent-of-boundary-charts` — Chart independence of the surface integral

4. `lem-chart-surface-measure-agrees-with-polar-sphere-measure` — Chart surface measure equals the polar sphere measure

5. `lem-divergence-flux-identity-on-a-c-one-graph-patch` — The flux identity on a C1 graph patch

6. `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` — Divergence theorem on bounded C1 Euclidean domains

7. `cor-first-green-identity` — First Green identity

8. `cor-second-green-identity` — Second Green identity

9. `def-fundamental-solution-of-a-constant-coefficient-operator` — Fundamental solutions and translated poles

10. `def-laplace-fundamental-solution-with-positive-minus-laplacian-sign` — The Laplace kernel for the positive minus-Laplacian

11. `lem-laplace-fundamental-solution-is-harmonic-off-its-pole` — Radial derivatives and harmonicity off the pole

12. `lem-laplace-fundamental-kernel-is-locally-integrable` — Local integrability of the kernel and its gradient

13. `lem-small-sphere-limits-for-the-laplace-fundamental-solution` — Small-sphere flux and vanishing boundary terms

14. `thm-minus-laplacian-of-the-fundamental-solution-is-dirac` — Minus the Laplacian of Phi is the Dirac distribution

15. `lem-distributional-derivatives-commute-with-convolution-against-test-functions` — Distributional convolution with a test function

16. `def-newtonian-potential` — Newtonian potentials and their admissibility classes

17. `lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data` — Pointwise well-definedness for bounded compact sources

18. `lem-newtonian-potential-of-a-compact-l-one-source-is-locally-integrable` — Local integrability for compact L1 sources

19. `thm-newtonian-potential-solves-poisson-distributionally` — Newtonian potentials solve Poisson distributionally

20. `lem-newtonian-potentials-of-test-functions-are-smooth` — Smooth source differentiation on the source factor

21. `lem-cancelled-hessian-formula-for-newtonian-potentials` — The cancelled Hessian formula and its spherical term

22. `def-compactly-supported-holder-data-for-newtonian-potentials` — Compactly supported Holder data

23. `thm-newtonian-potential-for-holder-data-is-classical` — Holder sources give classical Newtonian potentials

24. `thm-decay-of-the-newtonian-potential-of-compactly-supported-data` — Far-field asymptotics and the zero-mass improvement

25. `def-dirichlet-green-function-for-minus-laplacian` — A Dirichlet Green function is a conditional object

26. `lem-dirichlet-green-function-is-unique-and-positive` — Conditional uniqueness and positivity of Green functions

27. `thm-green-function-symmetry` — Symmetry of a boundary-regular Green family

28. `def-poisson-kernel-from-a-green-function` — The Poisson kernel with the outward normal sign

29. `thm-green-representation-formula` — Green representation with explicit regularity obligations

30. `cor-zero-dirichlet-green-representation-for-poisson-data` — Zero boundary data give the Green volume operator

31. `lem-neumann-compatibility-from-the-divergence-theorem` — Necessary compatibility for the Neumann problem

32. `cor-neumann-solutions-are-unique-modulo-componentwise-constants` — Neumann uniqueness modulo componentwise constants

33. `cor-classical-dirichlet-and-poisson-problems-are-unique` — Uniqueness for classical Dirichlet and Poisson boundary problems

34. `rem-euclidean-divergence-versus-general-stokes` — Euclidean C1 divergence and the manifold Stokes seam


### B — 10 items


1. `ex-flux-of-the-laplace-fundamental-solution` — The unit outward flux is the flux of minus DPhi

2. `ex-two-dimensional-logarithmic-kernel-has-unit-normalised-flux` — The separate logarithmic flux check

3. `ex-newtons-shell-theorem-from-the-mean-property` — The Newtonian potential of a spherical shell

4. `ex-newtonian-potential-of-a-radial-density` — One-dimensional integrals for a radial source

5. `cex-second-derivatives-of-the-fundamental-solution-are-not-locally-integrable-absolutely` — The Hessian kernel is not absolutely locally integrable

6. `cex-green-functions-need-not-exist-with-the-naive-boundary-regularity` — An isolated boundary point obstructs pointwise-zero Green data

7. `cex-neumann-poisson-problem-needs-the-compatibility-condition` — Constant positive source and zero Neumann trace are incompatible

8. `ex-one-dimensional-green-function-on-an-interval` — The interval Green kernel and its derivative jump

9. `ex-adding-a-harmonic-function-preserves-a-fundamental-solution` — Adding an entire harmonic function preserves a fundamental solution

10. `cex-c-one-boundary-regularity-does-not-ensure-absolute-green-volume-integrability` — C1 boundary regularity does not ensure absolute Green volume integrability


All original design IDs are retained. Added local A IDs are the finite ambient partition, chart/polar measure agreement, graph flux identity, small-sphere limits, compact-L1 local integrability, smooth-test-source potentials, cancelled Hessian formula, and real-exponent compact Holder-data definition. Added B ID is the explicit C1-boundary/absolute-integrability counterexample. The B shell/radial examples were reordered into proof order. Exact statements, dependencies and proof strategies are in pages.json; exact source dispositions are in coverage.json.


## Checks actually run

Final receipts are appended below after the final owned-file changes. Earlier successful checks were rerun only because the manifest/coverage changed. A gate pass is not a closure pass. No authoring, publication, npm build, theorem checker or external judge was run.

| Check | Exit | Result |
|---|---:|---|
| `node tools/coverage-checklist.mjs research/frontier-34-batch-10.coverage.json --require-destination` | 0 | PASS: 1 A page, 97 harvest rows; 0 errors, 0 warnings. |
| `node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json` | 0 | PASS: 865 whole-run items; 0 normalized, 0 errors. Other batches were changing during this run. |
| `node tools/content-policy.mjs --manifest-only research/frontier-34-batch-10.pages.json` | 0 | PASS: 44 scoped items; 0 errors, 0 warnings. |
| `node tools/validate-plan.mjs research/plan-spec.json` | 0 | PASS with repository-wide warnings; 1476 pages, 15116 planned items. 579 planned pages still have no item inventory; the check explicitly validates those only at page level. |
| `node tools/extcheck.mjs --quiet` | 0 | PASS: quiet mode, exit 0; no current Foundations-policy error reported. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-10.coverage.json` | 1 | FAIL: 4 fetch-check-unstamped errors, one for each source URL. |
| `node tools/source-backing.mjs --coverage research/frontier-34-batch-10.coverage.json --liveness /tmp/frontier34-b10/url-liveness.json --reharvest-plan /tmp/frontier34-b10/reharvest-plan.json` | 1 | FAIL: 44 backing-lost authored result IDs — every included item in the inventory above, because all four URL-sweep rows failed DNS. |
| `node tools/url-sweep.mjs --coverage research/frontier-34-batch-10.coverage.json --out /tmp/frontier34-b10/url-liveness.json --timeout-ms 10000 --fail-on-dead` | 1 | FAIL: 0/4 live, all curl error 6 / could not resolve host. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-10.coverage.json --stamp --timeout-sec 10` | 1 | FAIL: 0/4 verified, 0 stamped, all EAI_AGAIN. |

The URL sweep and stamp attempt preceded the last coverage edits; those edits changed harvest rows only, not the four URLs. The final check and source-backing commands used the final coverage. No gate was rerun with weaker flags to turn a failure into a pass. Exact failing URLs: Hunter https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf; Simon https://math.stanford.edu/~lms/lecs-on-pde.pdf; Stanford https://web.stanford.edu/class/math220b/handouts/greensfcns.pdf; Gantumur https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf. The notes and inventory retain all affected mathematics.

Receipts: /tmp/frontier34-b10/final-{coverage,deps,policy,plan,external,fetch,backing}.log, liveness.log, fetch-stamp.log, url-liveness.json and reharvest-plan.json. Structural graph audit: audit.py, audit.log and closure.json in the same scratch directory. These are not published artifacts; the durable findings and complete unresolved-page table are recorded above.

Earlier mechanical issues were corrected before these final receipts: five guessed calculus dependency names were replaced with actual published IDs; direct interface review then added real-power, Riemann/Lebesgue agreement, Borel representative and polygonal-connectivity dependencies. A preliminary scratch page lookup used pages/ instead of library/; the corrected recursive published-page scan is the source of the final 66-page count. Complete statements were read for the direct external interfaces listed above. No transitive semantic certificate is inferred from their names or the successful graph gates.

Final artifact fingerprints (SHA-256; notes excluded because it records these):

- `research/plan-spec.json`: `7c49c68b8da41a09b47e4184e65e5d971c71faf4384c70e61431e54c8ef26ec3`
- `research/frontier-34-batch-10.pages.json`: `8b99f57b9fd1a826018dddc25798e537418cee25586e288925f17d2894d6e65c`
- `research/frontier-34-batch-10.coverage.json`: `bcfca618c8f06bee1c20c6cdd0370cea5b7dd1d9721d00ccd8182810b3f2db9d`
