# Step 3a reader report — batch 35

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `35`

## Inventory opened

Assigned pages:

- `library/quantum-field-theory-mathematics/qft-mc02.md` (A page)
- `library/quantum-field-theory-mathematics/qft-mc02-examples.md` (B page)

Assigned items, read in dependency order:

- `def-qft-positive-tempered-moments`
- `def-qft-weak-operator-valued-tempered-distribution`
- `def-qft-poincare-test-action`
- `def-qft-minkowski-fourier-transform`
- `lem-qft-poincare-pullback-continuity-on-schwartz`
- `thm-qft-tempered-field-reconstruction`
- `cex-qft-yukawa-source-power`

Page prerequisites opened: `qft-mc01` and the published mathematics pages
`tempered-distributions-and-the-fourier-transform`,
`schwartz-space-and-the-plancherel-theorem`,
`density-separability-and-convolution-in-lp`,
`countability-and-uncountability`, and
`poisson-summation-sampling-and-lattice-duality`.

Dependency items opened: `def-schwartz-space-and-its-seminorms`,
`def-schwartz-topology-and-convergence`, `def-tempered-distribution`,
`def-complex-lp-and-euclidean-test-function-conventions`,
`def-ck-and-multi-index-notation-in-several-variables`,
`def-c-c-and-c-c-infinity-on-rn`, `def-real-and-complex-inner-product-space`,
`def-hilbert-space`, `def-countable-choice`, `def-test-function-space-d-of-an-open-set`,
`def-fourier-transform-of-a-tempered-distribution`,
`cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`,
`lem-invertible-linear-substitutions-preserve-schwartz-space`,
`lem-test-function-inclusion-in-schwartz-space-is-continuous`,
`def-qft-involutive-algebra-state`, `lem-qft-positive-state-cauchy-schwarz`,
`thm-completion-of-an-inner-product-space-is-hilbert`,
`thm-qft-algebraic-gns-domain`, `lem-qft-state-symmetry-implementer`, and
`thm-polynomial-growth-functions-define-tempered-distributions`.

## Review and page verdicts

**`qft-mc02` — pass after two local repairs.** The page summary accurately
distinguishes the supplied positive moments from existence claims and makes
covariance, locality, tested relations, and the matrix-coefficient spectrum
conditional on their displayed identities. The mathematical definitions fix
the Schwartz, tensor-algebra, pairing, Poincaré, Fourier, and support
conventions needed by the theorem. The reconstruction proof correctly uses
the first-variable-linear Hilbert pairing: matrix coefficients are continuous
moment evaluations, the GNS adjoint restriction gives the conjugation identity
and closability, the degree-zero moment is included, and the covariance,
locality, and translation-spectrum conclusions retain their additional
hypotheses. The polynomial-growth step is applied only after boundedness and
continuity of the translation coefficient are established.

The pullback lemma's affine seminorm bounds and identity-neighborhood estimate
support its stated Schwartz and group-parameter continuity. Its group action
and algebraic tensor extension are consistent with the declared semidirect
product and involution.

**`qft-mc02-examples` — pass.** The counterexample differentiates on
`r=|x|>0`, computes
`(Delta-mu^2)(e^{-mu r}/r^2)=2e^{-mu r}(mu/r^3+1/r^4)>0` for every `mu>=0`,
and separately verifies the `r^-1` comparison off the origin. It makes no
unsupported distributional normalization claim.

## Repairs

1. In `items/def-qft-weak-operator-valued-tempered-distribution.md`, corrected
   the Fewster–Rejzner locator. Their §2.3 GNS pairing is
   `⟨[A]|[B]⟩=ω(A*B)`, conjugate-linear in the first slot; the item itself
   adopts the opposite, first-variable-linear convention. The updated locator
   now distinguishes the source's GNS construction from the convention stated
   locally. Evidence: Fewster–Rejzner, arXiv:1904.04051v2, §2.3, printed
   pp. 7–9, especially the quotient pairing on printed p. 8; the Mund notes
   give the relevant common-domain matrix-element construction on PDF pp. 15–17.

2. In `items/def-qft-minkowski-fourier-transform.md`, replaced the identity
   that reflected the integration variable with the directly verified output
   composition
   `F_M psi(z)=(F_{2pi} psi)(eta z/(2pi))`. This follows from
   `p·z=(eta z)·_E p` in the defining integrals and uses the listed
   invertible-linear-substitution lemma to establish continuity and
   invertibility, without an unlisted change-of-variables premise. I checked
   its assigned consumer `thm-qft-tempered-field-reconstruction` and the
   `qft-mc02` page; their cited transposition, cone-support convention, and
   summary remain unchanged. No proof contract or `verification.judge` record
   exists for either edited definition; the reconstruction contract's F7
   excerpt is unchanged.

For both changed items, reflow reported `unchanged`; precheck reported
`0 checked, 0 failing`. The required final batched proof-layout invocation on
both paths failed during renderer startup because Node could not resolve
`@/components` imported from
`/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`.
This is a tooling limitation; the edited definitions contain no numbered proof
steps.

## Uneditable finding

The batch proof-contract bundle has stale finite-check step locations for
`lem-qft-poincare-pullback-continuity-on-schwartz`. Its item proof has only
steps `1.1`, `2.1`, and `3.1`; the contract's first finite check points to
nonexistent step `1.2`, and the second assigns the group-action calculation to
`2.1` although it is in `3.1`. The contract should point the identity check to
the definition fact and step `2.1`, and the group-action check to step `3.1`.
The item proof itself is sound. I left the
contract unchanged because this dispatch authorizes repairs to assigned items
and A-page prose, not direct proof-contract editing absent an item repair that
requires it. The finding is in the JSON artifact.

## Source checks and coverage limits

Opened [Mund's lecture notes](https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf)
at Theorem 2.6 and its reconstruction proof (PDF pp. 15–17);
[Fewster–Rejzner](https://arxiv.org/pdf/1904.04051) at the GNS construction
(§2.3, printed pp. 7–9) and invariant-state implementation (Theorem 23,
printed p. 23); the cited [Bastianelli notes](https://www-th.bo.infn.it/people/bastianelli/1-Relativistic-quantum-mechanics-21-22.pdf)
static-source calculation (PDF pp. 7–8); and [Littlejohn's notes](https://bohr.physics.berkeley.edu/classes/221/notes/tdpt.pdf)
Yukawa potential calculation (§20, equations (116)–(119)). Fewster–Rejzner
equation (12) does print an
`r^-2` Yukawa kernel, while equation (14) describes its convolution as a
formal field-equation solution. The assigned counterexample accurately
isolates and refutes the off-origin homogeneous claim for that printed power;
Bastianelli and Littlejohn give the `r^-1` profile. The claimed distributional
source at the origin is deliberately not used in the counterexample.

The [Schmüdgen text](https://dokumen.pub/an-invitation-to-unbounded-representations-of-algebras-on-hilbert-space-1nbsped-3030463656-9783030463656.html)
was accessible through the cited online mirror rather than the DOI endpoint;
its Definition 2.32 and §4.4 GNS passages were checked, and
the relevant algebraic claims were independently compared with the author
lecture notes and the current local GNS proof. No unresolved mathematical
claim remains in the reviewed item arguments. The only outstanding items are
the uneditable proof-contract metadata issue and the renderer startup failure
recorded above.
