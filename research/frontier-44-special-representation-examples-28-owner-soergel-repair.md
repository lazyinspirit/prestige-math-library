# Owner Soergel scaffold repair

Run `frontier-44-special-representation-examples-28`, batch 12. This is a focused Step-1 source/strategy repair,
not authored-item acceptance. Original carriers and 30 native decisions are
preserved in `frontier-44-special-representation-examples-28-owner-soergel-preimages/index.json`.
Owner reviewed CLAUDE.md fully, README.md and SCHEMA.md, and the Step-1/build
controls in WORKFLOW.md before writing. The current engine remains root-owned;
this repair did not retry gates, transition stages, change runtime state,
commit, edit published material, or edit sibling manifests.

## Actual source evidence

The owner independently fetched the full PDFs with curl from the exact URLs
`https://arxiv.org/pdf/1212.0791v2`, `https://arxiv.org/pdf/1711.02464`, and
`https://arxiv.org/pdf/1010.1283`. PyMuPDF opened them and extracted their
complete bodies: respectively 45, 37 and 71 pages. pdftotext was unavailable;
no successful pdftotext run is claimed. The EW/Riche fetched hashes agree
with the native source stamps. Temporary extracted bodies are under
`/tmp/owner-soergel-review/`. Fetches:

- EW: 440331 bytes, SHA-256 `01039f543cdd06f13ed72d56899077a239e3d1d4b43d77f69aa448d792932ddf`.
- Riche: 419945 bytes, SHA-256 `752ac675671a7b18c518d755f1a63ba707440e1efffa94899f7847875021ff45`.
- Williamson: 623350 bytes, SHA-256 `90c658c6c94bea743abc4a5f0b379ac444ed593ab6eccd0bed2dd247b36d5675`.

Read the full relevant arguments in EW Sections 1.2.2–1.2.5, Section 2
(Lemmas 2.1–2.5), Sections 3.3/3.5/3.6 (grading, Hom formula, forms),
Section 5 (Theorem 5.1, Lemma 5.2 and Corollary 5.3), Section 6.4
(Lemma 6.4) and Section 6.8 (Theorems 6.19–6.21). Read Riche Sections
1.5 and 2.2–2.6, especially Proposition 2.8 and its proof, display (7),
Proposition 2.11 and the complete zero/positive-parameter argument.
For the suspected imported singular-descent seam, read Williamson's
Proposition 7.4.3 and its proof, with Theorem 7.4.2 context (pp.60–62).
That general classification proof has further singular prerequisites; it is
not used as an unproved local supplier. The owner does not claim to have
read every argument in all three papers or the other native sources.

## Confirmed defects and focused corrections

1. EW's zero-descent parenthetical is correct. With ell=ell(x), the bottom
   class of B_xbar lies in degree -ell-1 of B_x(1)bar. The diagonal L_0 has
   (ell+1)-st power zero there; the matching positive total degree is nonzero.
   Each copy has shifted center, so hL(B_x) does not establish centered
   hL(B_x(1)⊕B_x(-1)). The incorrect source-error/open-case note is replaced
   with this full argument in the contract and current report.
2. The deformed Definition wrongly restricted arbitrary L_zeta to a chosen
   bimodule summand. Middle multiplication need not commute with its
   projector. Restriction is now a proved local undeformed lemma, with
   explicit L_0 stability, symmetric Betti numbers, primitive decomposition,
   positive form normalization, and S(<xs) for the unshifted converse.
   Induction deforms back to zero before restriction. The strong all-embedding
   form comparison is applied after S(xs), when invariant forms are unique.
3. The scalar-extension supplier wrongly asserted graded Hom(B_w,B_w)=R
   of rank one and degree-zero End=R before S(w). Its absolute
   indecomposability route is repaired without invoking S(w): End^0 over Q
   is finite dimensional and local, the rank-one top-support restriction
   has residue Q, its radical is nilpotent by the elementary minimal-generator
   Nakayama argument, and after real extension the quotient is R and the
   radical stays nilpotent. Thus the real end algebra is local. End^0=R is
   asserted only under S(w); full Hom has rank (H_w,H_w).
4. The detection theorem confused full graded Hom rank with the KL
   multiplication coefficient. Under S(<xs), negative-degree Hom vanishing
   and self-duality remove shifts from lower summands. The constant-term Hom
   formula gives dim Hom^0(B_y,B_xB_s)=mu_y. The composition pairing has rank
   a_y, the actual unshifted multiplicity: a nonzero scalar composite through
   another indecomposable would split off B_y, a contradiction. Nondegeneracy
   is therefore equivalent to a_y=mu_y, and character additivity proves S(xs).
5. The Rouquier supplier confused bimodule cohomology with right/reduced
   cohomology, called F_xF_s minimal, and misattributed negative-degree
   injectivity to HR. Its local right-module split retraction onto R(-ell(x))
   survives reduction; the only reduced degree-zero cohomology is in internal
   degree ell(xs). The first reduced differential is therefore injective
   in degrees ≤ell(x). F_xF_s need not be minimal. The factorization and HR
   target are independent additional hypotheses; the zero-descent target is
   split and the kernel-of-d_3 argument is retained.
6. The descent matrix previously depended on imported singular
   classification. A second local supplier closes this under S(x), precisely
   the hypothesis already available for lower induction subjects. Character
   and Krull-Schmidt give M B_s=M(1)⊕M(-1); its multiplication counit splits
   on M(1), as its bottom-degree component is a nonzero scalar. For the section
   sigma:M→M⊗_{R^s}R compose with b⊗r↦b s(r) to get right-s-semilinear t.
   It fixes the one-dimensional bottom degree; t² is a scalar endomorphism
   under S(x), hence t²=1. The two counits differ by right alpha_s multiples,
   so t≡1 modulo M alpha_s. Right freeness makes alpha_s injective. Every
   anti-invariant vector is alpha_s times an invariant one, proving
   M=N⊗_{R^s}R for N=M^t. Explicit inclusions/projections then give the
   four-entry middle-multiplication matrix, whose positive polynomial entries
   vanish on right reduction. The remaining scalar coupling is positive.
   An explicit binomial power computation on each primitive string proves
   centered HL, with middle determinant 1 and extreme multiplier m+1.
   This pre-induction theorem assumes S(x). The original stronger
   hL(x)-only descent statement remains in the downstream character theorem
   after S(all) is proved, with no dependency back from its suppliers.
7. The tensoring sign uses lowest degree -d explicitly; the summand scalar
   is (-1)^((d-ell(z))/2) and the tensor primitive sign becomes
   (-1)^((d+1-i)/2). The large-deformation signature comparison uses P^1=0.
8. The S3 HR example incorrectly claimed P^-1=0 and treated positive
   degrees as HR primitives. The repaired example has dimensions 1,2,2,1,
   primitive dimensions 1 in degrees -3 and -1, and two centered strings.
   In C=R[x,y]/(x²+xy+y²,x³), T=x²y, dominant rho=ax+by means a>b>0.
   Its middle determinant is D=a²-ab+b²>0, rho³=3ab(a-b)T>0. For
   p=a(a-2b)x-b(2a-b)y, rho²p=0 and Tr(p rho p)=-3ab(a-b)D<0.
   Exact dictionary-polynomial arithmetic independently verified both final
   identities. For a=2,b=1 the primitive is y, with Tr(y rho y)=-2.

## Current inventory and consumer obligations

All 30 native IDs remain; three necessary A-page suppliers give 28 A plus
5 B items (33 total), below the cap of 100. Maximum dependency level is 12.
The manifest is ordered by levels, and its dependency graph has no cycle.
The corrected original claims were neither dropped nor treated as unproved
citation fallbacks. The three new suppliers have literature-derived statements,
full local strategies, source locators and coverage entries. No actual item
file is written at Step 1.

All 33 current contracts, including the 8 initially unchanged foundation contracts, were reviewed in dependency order and amended as needed. The exact current IDs and hashes are in the owner repair inputs JSON. All 33 are in the final affected closure.

No currently populated sibling manifest declares a direct item dependency on
these changed/affected IDs. Batch13's declared page `requires` edge is an
inbound future consumer obligation: when authored, it must use the repaired
character theorem, degree-zero Hom/local-form clauses, and the undeformed
restriction result; its actual consumer items are not yet populated. No
sibling or published file was edited. The original empty batch12 consumer-side
cross-batch input remains correct and byte-identical.

## Checks actually run on the amended scaffold

- manifest-deps: 33 items, zero errors.
- content-policy --manifest-only: 33 scoped items, zero errors/warnings.
- coverage-checklist: 2 pages, 74 harvested results, zero errors/warnings.
- source-backing with the native batch-scoped URL-liveness receipt:
  33 authored results backed by an openable source or documented argument;
  no reharvest needed. The liveness receipt is historical native evidence;
  the independent owner downloads above establish current EW/Riche access.
- item-dependency-levels check --run: no batch12 discrepancy; exits 1 on
  still-empty sibling inventories. This is not a passing run-wide gate.
- Independent exact polynomial arithmetic: primitive kernel identity and
  negative primitive-form polynomial identity each have zero residual.

Root owns the full stable Step-1 gate pass and shared ledger refresh. Current
readiness is recorded only after these strategy and hypothesis edits stabilize,
using actual current dependency closure. No unresolved mathematical supplier
remains in the repaired descent/restriction route. This evidence does not
claim a proof audit of future authored item files.

## Stable downstream repair supplement

The supplier-first consumer examination additionally repaired these exact uses:

- Invariant-form uniqueness uses Hom^0(B_x,D B_x), dimension one under S(x),
  rather than the false full graded rank-one claim. The positivity proof uses
  the deleted-word computation; nondegenerate symmetric multiplicity pairings
  are distinguished from definite ones.
- The radical Definition now uses the categorical invertibility criterion,
  and perverse means a nonnegative constant KL-basis character. The previous
  standard-basis parenthetical and unconditional radical-zero claim were
  wrong. A third local proof-bearing supplier,
  `lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category`,
  establishes radical quotient, isomorphism reflection, finite cancellation,
  minimal-model uniqueness, intrinsic filtration and cone extension closure.
  The Definition is discharged by this lemma, never by an unproved assertion.
- The local-form Definition is explicitly on degree-zero Hom; dimension and
  multiplicity detection are retained in the proved detection supplier.
- The embedding strategy gives only the degree-zero restriction isomorphism.
  Hom-formula graded Hilbert-series equality plus left exactness proves
  surjectivity degree by degree; raw rank equality alone is not used. Its
  support-layer evaluation is reduced at the top degree, then hard Lefschetz
  on B_y transports injectivity to bottom evaluation. The annihilation by
  rho^(ell(y)+1) is on the reduced module, not on the raw bimodule.
- The Rouquier HR source proves existence of a suitable embedding for every
  reduced expression, with all positive rescalings working simultaneously;
  the native every-embedding quantifier was unsupported and is corrected.
  All uses in the hard-Lefschetz theorem choose the supplied embedding.
- The inverse-KL coefficient expansion is a standard element expanded in the
  KL basis, not a KL element expanded in the standard basis. The longest S3
  invariant tensor product is not the structure sheaf of a single graph.
- The Delta-split proof now supplies the s-stable support-cut/tensor
  commutation itself: split standard flags give right-free quotients, fraction-
  field graph support plus torsion-freeness eliminates undesired supports.
  The paired extension splits over R^s because its two graph actions agree
  there; this is the local rank-one argument for LW (17), not an imported
  Williamson result. Read LW Proposition 3.5, Corollary 3.6, Proposition 3.7
  and the complete proof, and Lemma 3.8 in its 25-page native fetched body
  `/tmp/soergel-src/LW.txt`. This is an actual full-argument reading of the
  available native source body, not a claim of an independent LW download.

The stable inventory is 33 items, maximum level 12. No native promised sound
claim is lost; structural claims moved from Definition commentary now have
an explicit local proof supplier. The incorrect full-Hom, arbitrary-embedding
and shifted-HL clauses are replaced by the mathematically correct versions.

## Foundation review and final stable boundary

The eight untouched native foundation readiness hashes were already stale when
first checked. They were reviewed mathematically before refreshing, exposing
these further actual errors:

- The published realization supplies coordinate roots beta_i=x_i-x_{i+1}
  AND alternating balanced diagrammatic roots eps_i beta_i. The native Hodge
  scaffold silently used the latter in EW positivity and claimed a false
  descent criterion. This Hodge page now explicitly sets alpha_i=beta_i and
  alpha_i^vee=beta_i^vee throughout, with the descending coefficient chamber.
  The invariant rings and tensor bimodules remain identical; the diagrammatic
  root convention in published files is not changed. The direct inversion
  formula (w rho)(alpha_i^vee)=c_{w^{-1}(i)}-c_{w^{-1}(i+1)} proves the
  left-descent criterion; w=x^{-1} gives the needed right-descent instance.
  Source: EW Section 3.1 and the complete current published two-normalization
  Definition, read independently on disk.
- Standard HR primitive signs depend on the lowest degree -d, namely
  (-1)^((d-i)/2), not just the parity index j with bottom positivity imposed
  independently. Orthogonal summands inherit the ambient signs. The primitive
  lemma now gives H^{-i}=⊕_{k≥0}L^kP^{-(i+2k)} and the correct signature sum;
  the literal unresolved question marks and incorrect primitive recursion
  were removed. Its complete decomposition and converse-sign proof are now
  specified, directly from the full EW Section 2 argument.
- The Hecke trace is A-bilinear, so its KL coefficient formula is
  Σ h_{u,x}h_{u,y}, with no bar conjugation. Symmetric generator multiplication
  matrices establish the standard orthonormality and trace formula locally.
- The unit polynomial ring is graded, not concentrated in internal degree
  zero. The intersection form is right-S-bilinear and left invariant, not
  left-S-bilinear. The deleted-word factorization and pairing identity apply
  after right reduction; the nonzero right-rho remainder is retained in the
  raw identity. The invariant rank-one counterexample now has a complete
  balanced-tensor computation without an unfinished equality.

All current proof routes use coordinate Hodge roots consistently. Foundation
review was followed by another stable manifest-deps/policy/coverage pass;
results remain 33/33/74 with zero errors. All 33 readiness records are refreshed
only on this final stable content; earlier owner records made before the
foundation review are superseded and do not certify the intermediate state.

Final stable native readiness check: 33 batch12 records ready, zero batch12 work rows. Run-wide check at this boundary had 283 items and 145 ready; unrelated work remains and the root owns the final gate. All preserved preimage hashes and current owner-input hashes verified without mismatch. Also read the complete EW Section 6.7 proof (Lemmas 6.14–6.15, Remarks 6.16–6.17) when checking the reduced factorization boundary. No current sibling item-ID consumer was found in the final manifest rescan.
