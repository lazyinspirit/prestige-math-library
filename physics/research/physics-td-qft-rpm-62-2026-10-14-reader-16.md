# Step 3a reader report — batch 16

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Batch: `16`

## Inventory and page verdicts

Opened both assigned pages:

- `td-irreversible-boundaries` — [library/thermodynamics/td-irreversible-boundaries.md](../library/thermodynamics/td-irreversible-boundaries.md)
- `td-irreversible-boundaries-examples` — [library/thermodynamics/td-irreversible-boundaries-examples.md](../library/thermodynamics/td-irreversible-boundaries-examples.md)

Opened all 11 assigned items:

- A page: `def-td-macro-versus-micro-entropy-claim`, `rem-td-empirical-evidence-contract`, `rem-td-fluctuation-model-hypotheses`, `rem-td-local-equilibrium-branch`, `pthm-td-unitary-entropy-invariance`, `rem-td-transport-branch`.
- B examples page: `ex-td-macrocell-and-gibbs-entropy`, `ex-td-mean-vs-trial-outcome`, `ex-td-local-equilibrium-profile`, `ex-td-transport-coefficient-model-input`, `ex-td-empty-evidence-record-template`.

**A page verdict:** its summary distinguishes the adopted macroscopic endpoint postulate from entropy quantities on different domains, and accurately scopes the fluctuation, local-equilibrium, and transport branches. No page-prose defect remains.

**B page verdict:** its summary accurately describes the finite examples as conditional model constructions and the final item as an empty evidence template. It does not present any example as an observation. No page-prose defect remains.

## Dependency inventory

Read the current-run thermodynamic suppliers needed by the assigned items: `def-td-si-quantities`, `def-td-system-and-permitted-exchanges`, `def-td-galilean-rest-frame`, `def-td-equilibrium-state-domain`, `def-td-finite-microstate-model`, `post-td-bulk-additivity`, `post-td-concave-fundamental-entropy`, `def-td-process-and-protocol`, `def-td-reversible-process`, `def-td-thermal-contact-constraints`, `def-td-isolated-compound-feasible-set`, and `post-td-macroscopic-second-law`.

Read the relevant published mathematical and physics suppliers, including `def-natural-logarithm`, `def-finite-sum`, `thm-natural-logarithm-laws`, `def-finite-cardinality`, `thm-induction-principle`, `def-function`, `def-subset-and-proper-subset`, `def-finite-probability-space-and-event`, `def-finite-real-random-variable-and-distribution`, `def-expectation-on-a-finite-probability-space`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `lem-expectation-by-distribution`, `def-countable-choice`, `def-axiom-of-choice`, `def-natural-numbers`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-convex-subset-of-euclidean-space`, `def-probability-measure`, `def-function-space`, `def-interval`, `def-ck-euclidean-maps-and-diffeomorphisms`, `def-directional-and-partial-derivatives`, `def-cartesian-product`, `def-metric-topology`, `def-matrix-space`, and `def-matrix-product-and-identity-matrix`.

For the finite-sector quantum theorem, read `def-nrqm-framework-quantities-and-units`, `def-nrqm-autonomous-dynamics-framework-evolution`, `def-nrqm-many-body-framework-declared-fixed-n-model`, `def-nrqm-many-body-framework-entropy-and-free-energy`, `post-nrqm-many-body-canonical-equilibrium-ensemble`, `post-nrqm-framework-state-and-composition`, `post-nrqm-framework-observable-and-probability`, `post-nrqm-framework-autonomous-dynamics`, `post-nrqm-framework-preparation-and-apparatus`, `pthm-nrqm-many-body-unitary-evolution-preserves-entropy`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `lem-nrqm-composites-rank-one-operator-calculus`, and `thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum`. The finite-dimensional proof follows from the unitary conjugation argument, the finite-sector eigenvalue definition of entropy, and the canonical state being a function of the self-adjoint generator. The normalized canonical-preparation premise excludes the zero sector, where the cited entropy definition assigns no canonical density operator.

## Source and empirical qualification checks

- Likharev, *Essential Graduate Physics: Statistical Mechanics*, Chapter 1 §1.2, states the phenomenological isolated-system entropy postulate and additivity for noninteracting composites (printed Chapter 1 pp. 5–6, Eq. 1.4–1.5). Chapter 5 §5.5 gives a fluctuation-dissipation relation (printed Chapter 5 pp. 24–25, Eq. 5.98). Chapter 6 §6.1 describes the relaxation-time approximation as phenomenological and notes possible unreasonable results (printed Chapter 6 p. 6, Eqs. 6.15–6.18); §6.5 identifies the Fourier law (printed Chapter 6 p. 34, Eq. 6.114). [Source](https://essentialgraduatephysics.org/Files/SM%20merged.pdf).
- Lieb and Yngvason, §II.F defines concavity on a convex state space and gives the entropy inequality (Eq. 2.21); its Theorem 2.8 derives concavity under additional axioms. The local postulate correctly says it is adopting a different formulation rather than claiming that this derivation proves its own assumptions. [Source](https://arxiv.org/pdf/cond-mat/9708200v2).
- Binney and Skinner, §6.3.2 defines density-operator Shannon entropy $s(\rho)=-\operatorname{Tr}(\rho\ln\rho)$ (Eq. 6.90); §6.4 gives the Gibbs density and $S=k_{\mathrm B}s$ (Eqs. 6.94, 6.98). [Source](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf).
- Burmistrov and Lunkin, §§1.1.1–1.1.3 gives density-operator unitary evolution and stationary-state commutation (Eq. 1.7), the Gibbs density (Eq. 1.8), and the von Neumann entropy (Eq. 1.9). [Source](http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf).
- BIPM, SI Brochure §2.3, states the exact Boltzmann constant value used for the kelvin definition (printed p. 130). [Source](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf).

The Arovas 2025 PDF cited by several items could not be retrieved by the web reader because its 29.8 MB response exceeded the fetch limit. The accessible Likharev and Lieb–Yngvason sections supported the source checks above. No measurement or experimental observation is asserted in this batch.

## Repairs and evidence

- `def-td-macro-versus-micro-entropy-claim`: added `def-finite-cardinality`, `thm-induction-principle`, `def-function`, and `def-subset-and-proper-subset`. The definition now explains why each coarse-graining fibre $M_m\subseteq\Omega$ is finite: induction on a finite ordinal gives a finite enumeration of every subset. This supplies the previously missing justification for $N_m=|M_m|$ and therefore for the domain of $\log N_m$. `def-finite-cardinality` defines cardinality only for finite sets; `thm-induction-principle` supplies the induction used by the local argument.
- `ex-td-mean-vs-trial-outcome`: replaced the unsupported probability-space triple with the finite probability model $(\Omega,w)$ and its event probabilities, and added `def-finite-probability-space-and-event` and `def-finite-real-random-variable-and-distribution`. The supplied weights are nonnegative and sum to one; the declared map $Y$ is a finite-valued real random variable. Updated the proof contract citations and step inputs. The arithmetic conclusions remain $\mathbb E[Y]=a>0$ and $P(Y<0)=1/4$, with no physical path law or measurement claim.
- `ex-td-transport-coefficient-model-input`: explicitly defined \(\mathbf e_1=(1,0,0)\) in the chosen Cartesian coordinates. Updated the model facts so the gradient convention is carried from the transport remark.
- `rem-td-local-equilibrium-branch`: added exact mathematical suppliers for functions, Euclidean coordinates, subsets, open sets, intervals, and partial derivatives. The field dimension is now $m\ge1$; physical coordinates use an explicit one-based display corresponding to the library's zero-based function indices; component coordinates and units are explicit; temperature is related to its declared component. The local-equilibrium assumption is a declared map $q:\mathcal Z\to\mathcal E_{\mathrm{eq}}$ assigned pointwise. Any finite cell partition and coarse-graining must be separately specified. Kinetic length and time scales are model-defined, with their construction and scale-separation criterion stated as model data.
- `rem-td-fluctuation-model-hypotheses`: added `def-function` and `def-interval` for the path and protocol maps and their time domain.
- `rem-td-transport-branch`: added exact suppliers for functions, coordinate vectors, partial derivatives, matrix spaces, and matrix products. It now defines the spatial gradient, its units, matrix action, identity matrix, and the one-based physical versus zero-based library indexing, as well as conductivity fields and diffusion coefficient types. It states explicitly that no kinetic operator or reciprocity law is adopted.
- `ex-td-local-equilibrium-profile`: instantiated the local-equilibrium map as the identity on the declared label set and now states the pointwise model assignment. Updated its proof-contract excerpts and facts.

The changed proof-bearing examples had no `verification.judge` records to remove. The proof-contracts file remains valid JSON.

## Findings outside edit scope

Four in-run dependency defects remain for their batch owners:

1. `def-td-equilibrium-state-domain`, Definition paragraph 2, the sentence beginning “The representation map π_c”: it cites `def-function-space` for a map into \(\mathbb R^{r+2}\), which is not a field. The exact general function definition `def-function` is not listed as a dependency. The assigned consumer is `def-td-macro-versus-micro-entropy-claim`.
2. `post-td-bulk-additivity`, Postulate paragraphs 1 and 3, the κ_AB and δ_λ map clauses: both cite `def-function-space` for maps into state domains, rather than functions into a field. Add `def-function` or construct the coordinate functions explicitly. The assigned consumer is `def-td-macro-versus-micro-entropy-claim`.
3. `def-td-process-and-protocol`, Definition paragraph 1: ξ_s and (z_P) map into the arbitrary sets (D_c) and (Z_s), but the only cited function-space item is scalar-field-valued. Add the exact general function prerequisite. The assigned consumer is `rem-td-fluctuation-model-hypotheses`.
4. `post-td-macroscopic-second-law`, Postulate paragraph 1, the endpoint association ρ_P:{-,+}→ℱ: it uses a map into an arbitrary feasible set without a general function definition. Its process dependency has only the scalar-valued `def-function-space` source, which does not supply that type. The assigned consumer is `rem-td-fluctuation-model-hypotheses`.

The current raw bytes of these four in-run carriers were still present at report time; their hashes are bound in the findings JSON. The affected suppliers belong to current-run batches 1 and 2, outside batch 16's edit scope.

## Checks and blockers

Reflow and precheck were run on all seven changed items. Reflow reported each unchanged; the three proof-bearing examples passed precheck, and the four definitions/remarks had zero numbered proof steps to check. The final proof-layout batch covered 7 items and 9 steps with 0 defects. The ordinary proof-layout invocation could not resolve the sibling web checkout's `@/` alias because its `tsx` package is absent; a temporary resolver hook in `/private/tmp` enabled the same renderer, and that temporary file was removed after the successful run. No content or helper in the web checkout was edited.

Batch 16 review is complete; the four uneditable supplier defects remain outstanding for their batch owners. The run is still in Step 3a with other batches outstanding. I did not edit the frozen batch manifest; item dependency metadata changed only in the assigned items as recorded above, so the normal owner/engine reconciliation must use the current item graph. I did not audit unrelated transitive foundations beneath the already-published mathematical and NRQM suppliers.
