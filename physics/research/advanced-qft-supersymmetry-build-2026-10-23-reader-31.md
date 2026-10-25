# Step 3a reader report — batch 31

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Scope: batch `31`

## Opened inventory

Assigned pages:

- `qftx-susy-extended-actions` — `library/advanced-qft-and-supersymmetry/qftx-susy-extended-actions.md` (A page).
- `qftx-susy-extended-actions-examples` — `library/advanced-qft-and-supersymmetry/qftx-susy-extended-actions-examples.md` (B page).

Both files contain YAML frontmatter only, remain draft, preserve `page_layout: compact-v1`, and match the batch manifest. The A page lists four assigned items; its companion lists four assigned examples.

Assigned items, opened in dependency order:

- `lem-qftx-n2-hypermultiplet-gauge-invariant-couplings`
- `lem-qftx-n4-adjoint-cubic-gauge-invariance`
- `post-qftx-n2-vector-hypermultiplet-model`
- `post-qftx-n4-super-yang-mills-model`
- `ex-qftx-n2-hypermultiplet-gauge-invariants`
- `ex-qftx-n2-quadratic-prepotential`
- `ex-qftx-n4-adjoint-hyper-decomposition`
- `ex-qftx-n4-su2-noncommuting-scalar-potential`

Relevant direct suppliers opened:

- `def-qftx-n1-chiral-superfield`
- `def-qftx-superspace-grassmann-algebra`
- `def-qftx-physical-superspace-normalization`
- `def-qftx-super-poincare-algebra-4d`
- `def-qftx-n1-vector-superfield`
- `post-qftx-n1-gauge-matter-model`
- `post-qftx-nonabelian-yang-mills-model`
- `def-qftx-nonabelian-gauge-data`
- `lem-qftx-grassmann-coefficient-calculus`
- `lem-qftx-n1-chiral-superspace-identities`
- `lem-qftx-su2-compact-nonabelian-invariant-form`

After the N=4 interface clarification, I also checked its four current downstream consumers for compatibility: `ex-qftx-n4-su2-chiral-primary-dimension`, `ex-qftx-susy-round-s4-localization-data`, `post-qftx-rigid-supersymmetric-background`, and `def-qftx-scft-protected-data`. Their uses of the group, coupling, multiplet content, and canonical fields remain compatible; no out-of-batch edits were made.

## Review and repairs

The two algebra lemmas are correct. The N=2 bilinear proof uses closure of the even chiral coefficient ring, chirality of an inverse matrix, and cancellation of the supplied inverse actions. The N=4 cubic proof uses matrix conjugation and cyclicity of trace over the commutative even coefficient ring. Neither needs a physical premise or an extended-supersymmetry claim.

Four formulation/proof gaps were repaired in assigned items:

- `post-qftx-n2-vector-hypermultiplet-model`, in `## Postulate`: explicitly defined $SU(2)$, its Lie algebra, the principal-bundle action and local trivializations, unitary representations, the associated-bundle quotient, the dual Hermitian form, the representation differential, and the local matter covariant derivatives. It now states the isometric equivariant adjoint-to-dual map used in the $R=\mathrm{ad}$ specialization and specifies the Dirac pairing of the two Weyl fields. These definitions make the field types and the later kinetic-term comparison explicit.
- `post-qftx-n4-super-yang-mills-model`, in `## Postulate`: defined the real and complex adjoint-bundle quotients and the smooth local scalar sections. It now gives the precise relation between the scalar component $\phi_r$ of each chiral field and the six real fields $X^I$, including the $1/\sqrt2$ normalization, conjugation convention, transition law, and canonical rescaling. The earlier potential formula used $X^I$ without this map.
- `ex-qftx-n2-hypermultiplet-gauge-invariants`, in `## Example`: defined the fundamental representation by $\rho_{\mathrm{fund}}(u)=u$, so the matrix action used in the cancellation is explicit.
- `ex-qftx-n4-adjoint-hyper-decomposition`, in `## Example` and Verification step 1.1: specified the dual-Hermitian-form identification and proved it is equivariant and isometric. The proof now differentiates the group intertwining identity, extends it to the complexified Lie algebra, and passes to the represented exponentials before identifying the two D-terms.

The other assigned examples are correct as stated. The quadratic prepotential calculation gives $\mathcal F_{ab}=i\delta_{ab}/g^2$ and positive imaginary part for $g>0$. The noncommuting-field example correctly computes $[T_1,T_2]=T_3$ and the adopted potential $g^2a^2b^2/2$, with zero boundary cases.

The batch proof contracts were refreshed for the two changed postulates, for assigned citations quoting those postulates, and for the revised step 1.1 derivation contract. No stale `verification.judge` record was present on a repaired item.

## Source review

I read the relevant arXiv HTML sections, not the full PDFs:

- D’Hoker and Phong, [*Lectures on Supersymmetric Yang-Mills Theory and Integrable Systems*](https://arxiv.org/html/hep-th/9912271v1), §2.4 (the N=2/N=4 field content and N=4 as an N=2 vector plus an adjoint hypermultiplet); §2.9, Eqs. (2.58)–(2.60) (the renormalizable N=1 packaging and hypermultiplet superpotential form); §§3.5–3.7 (the low-energy prepotential and electric/magnetic duality qualifications).
- Martin, [*A Supersymmetry Primer*, version 7](https://arxiv.org/html/hep-ph/9709356v7), §4.9, Eqs. (4.9.1)–(4.9.13), including the gauge-matter D-term, canonical $\sqrt2g$ component couplings, and chiral field-strength transformation.

D’Hoker–Phong’s Eq. (2.60) displays the $H_1^T\Phi H_2+H_1mH_2$ superpotential form without the local $\sqrt2$ coefficient. Its variables are not identified with this postulate’s connection normalization. I treated the local $\sqrt2$ and connection/canonical rescalings as the adopted conventions stated in the assigned postulate, not as a verbatim coefficient transcription from Eq. (2.60). The N=2 and N=4 extended invariances remain explicit physical postulates; this review does not claim a supersymmetry-variation proof, a quantum construction, or empirical support.

## Page verdicts

- `qftx-susy-extended-actions`: pass. Its inventory, dependencies, draft status, and compact frontmatter-only layout match the manifest. No page prose or summary is present.
- `qftx-susy-extended-actions-examples`: pass. Its four examples, dependencies, draft status, and compact frontmatter-only layout match the manifest. No page prose or summary is present.

No TikZ or TikZ-CD diagrams occur in the eight assigned items. No uneditable defects or blockers remain.

## Required checks

- Reflow reported `unchanged` for all four repaired items.
- Precheck passed for all four repaired items (two nonproof structures and two direct examples).
- `node tools/physics-support/proof-layout.mjs` on all four repaired item paths reported `4 items, 7 steps, 0 defects`.
