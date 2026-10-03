# DT-16 local prerequisite and source record — A547/B548

Run: `frontier-38-owner-30`. Exclusive author scope: the 15 A and 5 B item IDs in DT-16, `research/plan-differential-topology-track.md`, lines 928–972. All 20 were absent from disk when authoring began, and the A547/B548 plan item lists were empty. This author wrote only these item files and this note. Page inventories, manifests, plan-spec, scope ledger, shared tracks, tasks and autopilot state are integration-owned and were not edited. The resulting inventory is 15 A + 5 B, below the 100-item limit on each page.

## Sources actually inspected

- Stanford Math 215B notes: <https://web.stanford.edu/~lindrew/math215B.pdf>, Lectures 14–15, printed/PDF pp.44–46, Theorems 138–139 and the complete displayed argument through its final paragraph on p.46. The exact claimed formula on p.45 is `τ* u_S ∩ [M] = ι_*[S]`. The p.46 proof invokes compact-support duality and naturality to identify the middle map. It is a sketch of that identification, not a substitute for a local cap calculation. The authored proposition gives that calculation and fundamental-class uniqueness explicitly. The notes also use a cap-order convention different from the library's front-evaluation convention; this is addressed by the normal-first product orientation stated in the authored proposition. The nearby rational submanifold-representability remark and sphere-compactification smooth-chart assertion were not imported or used.
- May, *A Concise Course in Algebraic Topology*: <https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf>, Ch.23 §5, printed pp.194–196 (PDF pp.202–204), read in full: fiberwise compactification; disk/sphere quotient; trivial-bundle smash product; Thom diagonal; fiber normalization and Thom-isomorphism sketch; mod-two orientation. The beginning of §6 on p.196 gives the stabilization identity `T(ξ⊕ε) ≅ ΣT(ξ)`. The author also inspected printed pp.191–193 (PDF pp.199–201), tangent/normal complement identities and the explanation of stable normal independence via large ambient embeddings.
- Existing AT and DG suppliers were read on disk. Their source URLs/locators remain attached to the interface items. Hatcher *Vector Bundles & K-Theory*, Theorem 1.6 pp.20–21, is referenced as endpoint-transport context; this author does not claim to have independently read its external full text. Lee's tubular-neighborhood source is likewise cited through the actual published DG suppliers, rather than claimed as a newly read independent proof.

The temporary downloaded Stanford and May PDFs and extracted text were placed under `/tmp/dt16-sources/`; their temporary existence is not durable certification. Exact URLs and locators above are the source record.

## AT-18 reconciliation and ownership

DT preserves all contracted IDs while making overlapping A items explicit notation/interface wrappers. It neither replaces nor edits the published AT definitions or proofs.

| DT contract | Exact earlier supplier and use |
|---|---|
| disk/sphere/Thom definition and metric independence | `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`; identical based quotient and radial formulas |
| trivial rank-r target and rank-zero/empty conventions | `prop-thom-space-of-zero-and-trivial-bundles`; quotient computation and framed target |
| Thom-class/isomorphism interface | `def-thom-class-by-fiberwise-normalization`, `thm-thom-isomorphism-for-oriented-vector-bundles`, `thm-naturality-and-uniqueness-of-thom-classes`; exact scope, fiber normalization, naturality, orientation reversal and inherited AC |
| zero-section Euler example | `def-euler-class-by-zero-section-pullback-of-the-thom-class`; explicit relative-to-absolute map precedes zero-section pullback |
| collapse pulls back to PD | `thm-poincare-duality-for-oriented-topological-manifolds`, `def-relative-cap-product`, `prop-cap-product-naturality-and-projection-formula`, `lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls`; compact-support extension and local front-face cap computation |
| normal derivative and transverse preimages | `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient`, `def-pullback-vector-bundle-and-pullback-section`; quotient derivative glues by transition matrices |
| relative homotopy perturbation | `thm-relative-whitney-approximation-for-manifold-valued-maps`, `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`; smoothing and perturbation only near zero, endpoint collars fixed |
| stable normal comparison | `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`, `thm-smooth-dependence-of-ode-solutions-on-parameters`; global smooth orthogonal transport of complements along the common-ambient embedding path |

The B trivial-line example is retained as the specified framed-target calculation, although AT's `ex-thom-space-of-a-trivial-line-and-plane-bundle` already calculates the same homeomorphism. The Möbius example supplies the projective-plane quotient model, rather than repeating AT's `ex-mod-two-thom-class-of-the-mobius-line-bundle`. No B-only item is a dependency target.

## Proof obligations closed in the authored packet

1. Metric independence uses canonical radial maps, local norm bounds at zero, inverses, composition and metric interpolation.
2. Stable normal independence uses `j_t=(cos(πt/2)i_0,sin(πt/2)i_1)` in a common ambient space. Every time slice is an embedding. Orthogonal projections and the skew matrix `K=ṖP−PṖ` transport complements globally; their endpoint bundles are precisely the two claimed stabilizations. No unstable cancellation is asserted.
3. Collapse continuity is proved by closed pasting on a compact closed tube; the compact track controls continuity at a one-point compactification point. Smoothness is asserted on the nonbasepoint stratum and near regular values. Radial cutoff interpolation supplies the contracted smooth local representative.
4. Chart independence is proved for the specified normal-data class, using `ψ_t=δ_(1/t) ψ δ_t`. Taylor's integral formula extends it smoothly to the identity at zero time, and the same formula for its inverse gives a uniform compact-base neighborhood. The induced normal derivative remains the identity throughout. Radius/cutoff and metric interpolation supply based homotopies.
5. The derivative-to-normal-quotient map gives the pulled-back normal structure of a transverse preimage, including the neat-boundary version under boundary transversality.
6. A homotopy transverse near the zero section yields a compact normal cobordism. The continuous version is smoothed locally using the relative Euclidean embedding/retraction construction and a cutoff, then perturbed inside a smooth zero neighborhood. A compact zero-free buffer prevents new zeros; no global smooth structure on the Thom quotient is invented.
7. Collapse pullback equals compact-support extension of the Thom class. Relative cap localization in a normal-first product chart evaluates the normalized fiber generator and leaves the tangent orientation generator. Projection to S therefore gives the unique fundamental class. Open-extension naturality then proves `c* u_ν ∩ [M]=i_*[S]`. This is also proved mod two and in rank zero; integral orientation and ring assumptions remain explicit.
8. A max-norm disk model proves the stabilization/suspension homeomorphism, including zero rank and empty base.
9. All five contracted B applications remain, with proofs: trivial line suspension; Möbius/projective-plane quotient; equatorial explicit framed collapse; Euler pullback; point embeddings of different ambient ranks with distinct unsuspended Thom data.

## Tubular-chart correction: exact scope

No preexisting DT-16 item statement was changed: these files were absent before this authoring pass. The contract's unqualified phrase “independent of tubular neighbourhood” is mathematically false if “tubular chart” permits precomposition by an arbitrary normal automorphism while the normal identification is held fixed. Explicitly, for the point $S=\{0\}\subset\mathbb R$, the two zero-fixing charts $\Phi_+(t)=t$ and $\Phi_-(t)=-t$ give compactified collapses $S^1	o S^1$ of degrees $+1$ and $-1$, and hence are not based homotopic. Their induced normal derivatives are $+1$ and $-1$. The chosen specified normal identification is $\alpha=\operatorname{id}_{\mathbb R}$, so only $\Phi_+$ belongs to that compatibility class. The authored definition explicitly requires the induced derivative to be the specified normal identification; on the normal quotient bundle this is the identity. The lemma preserves the promised homotopy-independence result for precisely that conventional specified-data class and gives its full proof. This is an essential hypothesis correction to the unqualified prose, not deletion of the theorem. It must not be advertised as independence under normal-data changes. Normal framing changes remain geometric input changes.

## Local format evidence and limits

After the final item edits:

- `node tools/tsx-run.mjs tools/precheck.mts` followed by the explicit 20 item paths: exit 0, `14 checked, 0 failing — all clean`; definitions and remarks have no proof-like section. Only proof-bearing items record `verification.precheck: pass`.
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs` followed by the same explicit 20 paths: exit 0, `proof-layout: 20 items, 35 steps, 0 defects`.
- The direct canonical command without that environment initially failed before checking content because the fallback loader left JSX untransformed in the renderer's `ItemBody.tsx` (`Unexpected token '<'`, Node v22.22.1). The temporary app symlink setup supplied by the orchestrator used the installed JSX-capable tsx loader. No repository or app tooling was edited.

These are local format checks, not independent mathematical audits, source certifications, run gates, or publication approval. No unresolved mathematical blocker is asserted by this author; independent review and integration of the empty plan inventories are still owed by the orchestrator. The normal-first sign convention and the essential specified-normal-data restriction above should receive explicit review.

## Authored inventory
- A547: `items/def-disk-bundle-sphere-bundle-and-thom-space.md`
- A547: `items/lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism.md`
- A547: `items/prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product.md`
- A547: `items/rem-thom-space-empty-and-rank-zero-conventions.md`
- A547: `items/def-stable-normal-bundle-of-a-compact-smooth-manifold.md`
- A547: `items/thm-stable-normal-bundle-is-independent-of-the-embedding.md`
- A547: `items/def-pontryagin-thom-collapse-of-an-embedded-submanifold.md`
- A547: `items/lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint.md`
- A547: `items/lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy.md`
- A547: `items/prop-transverse-preimage-carries-a-pulled-back-normal-structure.md`
- A547: `items/lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms.md`
- A547: `items/def-thom-class-and-thom-isomorphism-interface.md`
- A547: `items/prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual.md`
- A547: `items/lem-stabilizing-a-normal-bundle-suspends-its-thom-space.md`
- A547: `items/rem-thom-spectrum-construction-is-not-minted-in-dt.md`
- B548: `items/ex-thom-space-of-a-trivial-line-bundle.md`
- B548: `items/ex-thom-space-of-the-mobius-line-bundle.md`
- B548: `items/ex-collapse-map-of-an-equatorial-sphere.md`
- B548: `items/ex-zero-section-pulls-back-the-thom-class-to-the-euler-class.md`
- B548: `items/cex-different-unstabilized-normal-bundles-can-have-nonisomorphic-thom-data.md`
