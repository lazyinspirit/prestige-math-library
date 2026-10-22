# Original Step4 concern confirmation — packet7

Read-only FIRST. All six original concerns are confirmed required corrections; five are nonfatal accuracy/presentation defects and the disconnected/empty Spin-c relation is a genuine defining-relation defect. No original native keep verdict is rewritten or accepted by this report. All six complete current sources equal their root-provided current captures byte-for-byte; existing root digests are copied, never recalculated.

## 1. ex-ip-visible-conormal-under-bolker

**Disposition:** confirmed_defect. Confirmed required presentation correction. F1 and the actual Radon Definition fix theta-perp=(-theta2,theta1). The upward drawn theta is (0,1) in the TikZ Euclidean chart, so theta-perp is (-1,0), whereas the current arrow points right. Proof1.2 and2.2 use the stated convention correctly; only the explicit convention-fixing drawing is wrong. Reverse the perpendicular arrow, not the canonical-relation signs or the richest visibility claim.

Unique literal excerpt: `  \draw[->] (-0.4,0) -- (4.0,0) node[right] {$\theta^\perp$};`

Proposed replacement: `  \draw[->] (0.4,0) -- (-2.0,0) node[left] {$\theta^\perp$};`

## 2. lem-ip-local-bolker-positive-packet-estimate

**Disposition:** confirmed_defect. Confirmed kernel-identity/normalization defect in the precise Statement, not a failure of the qualitative Gaussian-regularity implication. The actual Gaussian Definition has exp(i lambda(q-z)·p), hence its transpose contains exp(i lambda q·p). Proof2.2 explicitly removes this scalar and defines Psi=-z·p+i|z-q|²/2, so the stationary value of that NORMALIZED kernel is -q·p. The unnormalized transpose has centered phase value0 instead. Proof6.1 restores exp(i lambda q·p). Explicitly define K as e^{-i lambda q·p} times the true transpose; this preserves every proved phase estimate and the full conclusion. The factor has modulus1 for real data parameters and cannot be absorbed into a classical analytic amplitude as a symbol with lambda-independent factorial coefficients.

Unique literal excerpt: `The transpose localized data Gaussian has the form`

Proposed replacement: `Writing $T_\lambda(x,v)$ for the transpose localized data Gaussian, define the phase-normalized kernel $K_\lambda(x,v)=e^{-i\lambda q\cdot p}T_\lambda(x,v)$. It has the form`

## 3. thm-ip-analytic-stationary-phase-with-exponential-remainder

**Disposition:** confirmed_defect. Confirmed notation collision that literally restricts the claimed amplitude incorrectly. The same c_0 is required positive as a quadratic phase lower bound and later equated to a(0). A real smooth cutoff amplitude equal to -1 near0, with Phi=i|x|²/2, meets the intended phase/amplitude hypotheses but has leading coefficient-1; zero or complex leading values are also allowed. Rename only the positive quadratic constant and the separate contour-margin constant, retaining c_0=a(0) for the expansion. No amplitude positivity hypothesis or truncation weakening is appropriate.

Unique literal excerpt: `Assume there are $r,c_0,d_0>0$ such that`

Proposed replacement: `Assume there are $r,c_{\rm quad},d_0>0$ such that`

Unique literal excerpt: `\operatorname{Im}(\Phi(x)-\Phi_0)\ge c_0|x|^2`

Proposed replacement: `\operatorname{Im}(\Phi(x)-\Phi_0)\ge c_{\rm quad}|x|^2`

Unique literal excerpt: `\operatorname{Re}(w\cdot w)\ge c_0|u|^2`

Proposed replacement: `\operatorname{Re}(w\cdot w)\ge c_{\rm contour}|u|^2`

## 4. thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch

**Disposition:** confirmed_defect. Confirmed typed constant-integral error in F9. In Proof1.1 the measure is delta(y,·) on Q, so mu(Y) need not be defined and cannot represent its total mass. In Proof2.1 the outer measure is P on Y. The actual simple-integral Definition and probability Definition give Delta mu(S)=Delta on the measure’s own underlying space S. State that generic identity so both actual applications are typed. The original risk Statement, extended-risk/infinity case and choice-free argument remain sound.

Unique literal excerpt: `the constant function $a\mapsto\Delta$ is simple, so its integral under a probability measure $\mu$ is $\Delta\mu(\mathsf Y)=\Delta$.`

Proposed replacement: `for a probability measure $\mu$ on a measurable space $(S,\mathcal S)$, the constant function $z\mapsto\Delta$ is simple and has integral $\Delta\mu(S)=\Delta$.`

## 5. prop-ip-bounded-posterior-functional-error

**Disposition:** confirmed_defect. Confirmed false signed equality in Proof1.2. The actual ledger Definition fixes later-minus-earlier differences and the cited pathwise theorem telescopes to returned-minus-target. For the ordered references mu_star(f) through fbar, the signed sum is fbar-mu_star(f). Absolute value is unchanged, so the proposition’s full quantitative bounds and weak-choice distinctions need no change; reverse only the signed expression in this proof sentence.

Unique literal excerpt: `signed adjacent differences whose sum is $\mu_\star(f)-\bar f_{b,N}$`

Proposed replacement: `signed adjacent differences whose sum is $\bar f_{b,N}-\mu_\star(f)$`

## 6. def-knot-relative-spinc-structure

**Disposition:** confirmed_defect. Confirmed genuine equivalence-relation defect at the full approved balanced-manifold scope. The balanced Definition explicitly permits compact disconnected and empty M. On two disjoint standard product balls, normalize a reference nonzero field and make an interior Hopf modification in the first, then another in the second. Consecutive fields are related by deleting the appropriate one ball, but the first and last are not: deleting a connected ball leaves the nonzero relative pi_3(S²) Hopf difference in the other component. For empty M, even reflexivity fails because there is no ball witnessing the existential condition. The cached Juhasz2006§4 explicitly assumes connectedness before Definition4.2. Preserve the broad manifold scope by using the existing connected relation COMPONENTWISE, with the empty condition vacuous; do not narrow M to connected. Compact manifolds have finitely many components, so this is a finite product of equivalence relations and adds no choice assumption.

Unique literal excerpt: `Two such fields are homologous when, outside some open ball in $\operatorname{int}M$, they are homotopic through nowhere-zero fields fixed on $\partial M$.`

Proposed replacement: `Two such fields are homologous when, in every connected component $M_i$ of $M$, their restrictions outside some open ball in $\operatorname{int}M_i$ are homotopic through nowhere-zero fields fixed on $\partial M_i$; for $M=\varnothing$ this condition is vacuous.`

## Actual interface consumers

The phase-label correction preserves the Gaussian regularity implication used by wavefront recovery, the visible example and one-sided local support. The stationary-phase correction renames only positive margins; its eight dependency descendants use the unchanged expansion/remainder interface. No downstream source correction is needed for those cases.

The componentwise Spin-c correction preserves all connected knot/exterior/fiber cases and treats disconnected cuts by the finite product of their connected relations; the empty manifold has its unique empty-field class. All fourteen actual dependency descendants were examined at their current complete Statements/Definitions and relevant relation/Chern/cut clauses. One necessary proof wording correction is proposed in the general taut-hierarchy helper: Proof1.2 must refer to one ball per connected component and their finite union. Proof1.3 already supplies a one-component homotopy, which implies the new relation; no other consumer source change is required. The full per-consumer dispositions and unique consumer replacement are in report-7.json. No connectedness narrowing or extra choice assumption is proposed.

## Reading limits and workflow

All six assigned sources were read in full, including their Facts, proofs and diagrams. Read the exact actual supplier Statements/Definitions and usage clauses listed per case. Read only the cached Juhasz2006§4 opening/Definitions4.2–4.5 for the connected convention, not that entire primary paper anew. No fresh primary acquisition, foundation reconstruction, full-corpus audit, source/ledger/native edit, gate, hash, certification or coverage claim occurred. Scope consumer checks concern only the actual proposed interface delta. Production sources remain read-only; root must revalidate current bytes at the paused/drained boundary and alone decide admission and native instructions.
