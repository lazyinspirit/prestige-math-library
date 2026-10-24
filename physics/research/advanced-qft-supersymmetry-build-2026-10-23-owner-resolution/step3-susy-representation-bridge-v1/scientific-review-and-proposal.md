# Scientific owner proposal: abstract translation and operator bridge

Read-only proposal; no live item, native state, workflow, import, contract, manifest, decision or ledger writes. This is scientific evidence, not native review credit or closure. The original refuter34 finding remains preserved. Source hashes and the dependency inventory are in `consumer-inventory.json`.

## Decision

Confirm the narrower nonfatal presentation defect. The last Definition paragraph equates the abstract basis T with a bispinor formed from represented Hermitian momenta without naming the representation or first defining abstract momentum coordinates. This can be resolved without changing the algebra, real form, central-charge scope, or operator assumptions.

Alpha30's actual decision rejects the different claim that each T must be tau-fixed. That rejection is correct: tau(T11)=-T11, while tau(iT11)=iT11. It does not supply the explicit representation map requested by the later original refuter34 finding. Alpha1 accepted unpacking of unitary representation terms and removed an unbound rest calculation from the Jacobi proof; neither decision adds this bridge. Alpha29 checks finite rest-algebra examples and deliberately asserts no full Poincare representation. Those decisions remain intact.

## Exact proposed source changes, pending Root's drained-boundary authorization

In `items/def-qftx-super-poincare-algebra-4d.md`, replace only the final sentence of the paragraph defining tau:

> Hermitian physical momenta are obtained by multiplying those real translation generators by $-i$ in a unitary representation.

with:

> The star-fixed translation coordinates defined below are abstract elements of the complex algebra; their multiples by $i$ form a real basis of the tau-fixed translation space.

Replace only the first two sentences of its final Definition paragraph, ending before “In a massive rest fiber”, with:

> Define abstract translation coordinates $p_0=(T_{1\dot1}+T_{2\dot2})/2$, $p_1=(T_{1\dot2}+T_{2\dot1})/2$, $p_2=(T_{2\dot1}-T_{1\dot2})/(2i)$, and $p_3=(T_{1\dot1}-T_{2\dot2})/2$. Then $T_{\alpha\dot\beta}=\sigma^\mu_{\alpha\dot\beta}p_\mu$, $p_\mu^*=p_\mu$, and $\tau(ip_\mu)=ip_\mu$. A representation of the complex supertranslation algebra $\mathfrak t=V\oplus C_N\oplus\mathfrak g_{\bar1}$ on a graded complex vector space $\mathcal D$ means a parity-preserving complex-linear map $\rho:\mathfrak t\to\operatorname{End}_{\mathbb C}(\mathcal D)$ preserving the bracket, where the target bracket is the operator supercommutator. Write $P_\mu=\rho(p_\mu)$ and use the charge symbols for their images. Thus $\rho(T_{\alpha\dot\beta})=\sigma^\mu_{\alpha\dot\beta}P_\mu$ and the represented mixed relation is $\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J$, with $P_\mu=\eta_{\mu\nu}P^\nu$. In a unitary realization the images $P_\mu$ are restrictions of the self-adjoint physical momenta to their common invariant domain; $\rho(ip_\mu)=iP_\mu$, so $-i\rho(ip_\mu)=P_\mu$.

In `items/def-qftx-unitary-super-poincare-representation.md`, insert immediately after the existing sentence “The domain $\mathcal D$ is invariant under those generators and under $U(\mathcal P)$.”:

> Explicitly, these restrictions define the complex-linear supertranslation representation $\rho_{\mathcal D}:\mathfrak t\to\operatorname{End}_{\mathbb C}(\mathcal D)$: it sends the abstract $p_\mu$ to $P_\mu|_{\mathcal D}$ and each abstract supercharge or central generator to its named operator restricted to $\mathcal D$. Invariance of $\mathcal D$ makes these endomorphisms, and the assumed bracket identities make $\rho_{\mathcal D}$ bracket-preserving. In particular, $\rho_{\mathcal D}(T_{\alpha\dot\beta})=\sigma^\mu_{\alpha\dot\beta}P_\mu|_{\mathcal D}$ and $-i\rho_{\mathcal D}(ip_\mu)=P_\mu|_{\mathcal D}$.

This uses the existing Hilbert/PVM/unbounded-operator representation library. It does not introduce a second representation definition or claim a full infinitesimal Lorentz action on an unspecified differentiable domain. The definition of rho in the algebra item is the elementary algebraic supertranslation representation; the existing unitary definition gives its physical-domain realization. No new prerequisite item is required.

## Local mathematics checked

The coordinate formulas invert the four Pauli coefficients entry by entry; e.g. p1-i p2=T12 and p1+i p2=T21. Conjugate-linearity and T_ab*=T_ba give p_mu*=p_mu, including p2 because conjugation changes the denominator 2i as well as exchanging T12,T21. Hence tau(i p_mu)=-(-i)p_mu=i p_mu. These four independent complex coordinates give the full real tau-fixed translation space by the standard real/imaginary decomposition in the Jacobi supplier. Applying a complex-linear rho to the unchanged abstract mixed bracket yields the stated operator bracket. At rest P0=-MI and Pj=0, hence -2 sigma.P=+2MI. The same-chirality central brackets, arbitrary N, antisymmetry, and zero N=1 scalar charges remain unchanged.

The actual Jacobi proof was read in full: parity cases use only the bracket table, tensor/fundamental actions, alternating forms, and the given star. Its real-form and Pauli/determinant calculations do not use the formerly ambiguous operator equality. No Jacobi proof or Statement repair is needed.

## Consumer dispositions

All 14 actual direct consumers were inspected in their source bodies. This is focused affected-use review, not whole-item/source audit. The only proposed changed consumer is the existing unitary representation definition, as above.

- `lem-qftx-super-poincare-graded-jacobi`: unchanged; exclusively abstract bracket/star/Pauli calculations, already rigorously typed.
- `def-qftx-unitary-super-poincare-representation`: add explicit rho_D to identify its already supplied PVM momentum operators and domain restrictions.
- `thm-qftx-n-extended-central-charge-bounds`: unchanged; Facts F1–F2 and Proof 1.1 explicitly combine algebra with the adjoint representation on the common product domain. The proposed bridge makes this existing combination explicit and leaves every rest/CAR/positivity coefficient unchanged.
- `def-qftx-n1-chiral-superfield`, `lem-qftx-n1-chiral-superspace-identities`: unchanged; use numerical sigma matrices and smooth superspace differential operators, without identifying abstract T with Hilbert operators. This is a classical smooth domain, not a unitary Hilbert representation.
- `ex-qftx-n1-supercharge-oscillator`, `ex-qftx-n2-shortened-rest-fiber`, `ex-qftx-n2-short-rest-fiber-algebra`, `ex-qftx-n2-long-rest-fiber-algebra`: unchanged; explicitly supplied finite matrices represent the supertranslation algebra at P0=-MI. Their verified CAR equations realize rho with D equal to the full finite-dimensional space. They retain their explicit exclusion of a full spacetime representation. Checked the displayed charge formulas and all corresponding Verification arguments; no numeric-check execution is claimed here.
- `post-qftx-n2-vector-hypermultiplet-model`, `post-qftx-n4-super-yang-mills-model`, `post-qftx-n2-pure-su2-ultraviolet-model`: unchanged; sigma/metric and N counts are fixed, extended symmetry is adopted as a model premise, and these items do not deduce a Hilbert operator identity from an unrepresented T. No classical action or field normalization changes.
- `def-qftx-global-susy-vacuum-state`, `pthm-qftx-global-susy-vacuum-energy`: unchanged; actual unitary representation, common product domain and Hilbert adjoints are explicit hypotheses. The trace of the unchanged represented mixed relation remains 4N P^0 and gives the same sum of norms. No central-charge neutrality premise is introduced.

The eight direct consumers of the proposed clarified unitary definition were also read for their actual affected uses: the two vacuum items and central-charge theorem above; `thm-qftx-supermultiplet-mass-degeneracy` uses unchanged PVM covariance and charge-domain reduction; `pthm-qftx-n2-bps-central-charge-mass` and `pthm-qftx-n2-bps-saturation-kernel-equivalence` use unchanged positive rest-fiber algebra and actual adjoints; `def-qftx-bps-state-and-saturation` uses unchanged rest momentum and null pair; `def-qftx-physical-bps-charge-data` uses unchanged group/Lorentz action, rest stabilizer, selected BPS sector and spin trace. All remain unchanged for this bridge correction.

The complete discovered transitive deps closure has 67 descendants, archived as an inventory. Propagation stops at unchanged interfaces of the direct consumers other than the clarified unitary definition; its eight direct affected-use checks above likewise require no further interface edits. The remaining descendants are dependency context only, not claimed as fully read or audited. No imported mathematical supplier is changed.

## Reading and execution limits

Read the live supplier and Jacobi proof, existing unitary definition, the actual direct consumer bodies, and the named additional unitary-definition consumers. Read actual Alpha1/29/30 decisions as historical evidence; their external source-reading claims are not adopted as this review's own reading. No external source full text was retrieved for this elementary local coordinate/map clarification. No live source patch, item validator, gate, native transition, rehash, recertification, metadata mirror, or commit has been performed. Root must authorize application only after overlapping native writers drain, then bind actual current inputs and perform required metadata/gate work. This is the first review/proposal cycle.
