# frontier-33 batch 7 — scaffold and source record

Only the batch pages, coverage, and notes files are task-authorized. No published items, plan, workflow state, or other batch files were edited. This is a scaffold, not step-5 authoring or an independent proof review.

## Current status

60 A items and 18 B items; every record has explicit deps. Coverage harvest has 116 entries across 13 source URLs, including three full lecture-note sets and the independent Stacks treatment. Each record carries a full-text fetch stamp, and the latest Step-3 pass reports `source-fetch-check --stamp` as 13/13 verified with no new stamp needed. The older transport observations in the initial receipt are historical; the Step-3 fix-pass receipt below is the current record for this batch.

## Instructions and design reconciliation

Read CLAUDE.md fully, README.md, SCHEMA.md, the generated beta-7 task and generic beta-batch task. Read the original CA-18 design at research/plan-commutative-algebra-track.md lines 1420–1478 and all additions at lines 3813–3865. Current spec order 365.905/365.906 and A requires depth-and-cohen-macaulay-modules-examples plus tor-flatness-and-global-dimension are retained exactly. The older design lists a broader prerequisite family (CA-8, CA-10–13, CA-16–17, HA-5/8/9/10) and no numerical order in the section. Record this prerequisite representation difference for stage-1 drift adjudication; no local plan edit. The temporary validation overlay changes only this pair's item lists/manifest metadata in /tmp, never the repository plan.

The design's duplicate consequences are carried by the exact items below, not reminted under additional IDs. No mathematical result was dropped for size. The resulting A page is exactly the 60-item limit; no split is needed for this dependency-closed scope. If authoring reveals another independent prerequisite, propose a split instead of hiding that obligation.

| Design ID consolidated | Carrier IDs |
|---|---|
| thm-betti-numbers-and-minimal-free-resolutions | cor-betti-number-is-rank-in-minimal-resolution; lem-projective-dimension-from-last-nonzero-betti-number; lem-minimal-free-resolutions-unique-up-to-chain-isomorphism |
| lem-dimension-embedding-dimension-inequality-via-height | thm-dimension-at-most-embedding-dimension |
| cor-regular-local-maximal-ideal-generated-by-parameters | lem-regular-system-of-parameters-equivalent-basis |
| cor-associated-graded-of-regular-local-ring-polynomial | thm-associated-graded-ring-of-a-regular-local-ring |
| cor-regular-local-ring-is-cohen-macaulay | thm-regular-local-rings-are-domains-and-cohen-macaulay |
| cor-one-dimensional-regular-local-domain-dvr | thm-one-dimensional-regular-local-rings-are-dvrs |
| cor-betti-numbers-well-defined | lem-minimal-free-resolutions-unique-up-to-chain-isomorphism; cor-betti-number-is-rank-in-minimal-resolution |
| cor-auslander-buchsbaum-by-induction | thm-auslander-buchsbaum-formula |
| cor-auslander-buchsbaum-serre-local-equivalences | thm-auslander-buchsbaum-serre-regularity-criterion |
| cor-regular-local-global-dimension-equals-dimension | thm-auslander-buchsbaum-serre-regularity-criterion |
| lem-localisation-of-regular-local-ring-embedding-bound | cor-localisations-of-regular-local-rings-are-regular |
| cor-polynomial-extension-of-a-regular-ring-is-regular | thm-localisation-and-polynomial-extension-of-regular-rings |
| cor-completion-preserves-regularity-two-directions | thm-completion-preserves-regular-local-rings |
| lem-regular-local-height-one-localisations-are-dvrs | cor-regular-local-ring-satisfies-r-one |
| cor-regular-local-rings-are-normal-via-serre | thm-regular-local-rings-are-normal |

## Source reading and qualifications

- Mustaţă, Math 614 Fall 2022, https://websites.umich.edu/~mmustata/CAnotes.pdf: 145-page PDF, TOC pp.v–vi; all of §§12.1–12.4, 12.1–12.41, printed pp.115–125, including proof endings and exercises. Supplementary §8.3 read through 8.41; harvest specifically uses 8.40–8.41 pp.56–58. Restore finite nonzero M in 12.31 and NORMAL domain in 8.40: the printed statements omit qualifications used by their proofs. The source is not a summary substituted for the design.
- Stacks full HTML result/proof texts: 00NN §10.106.1–6; 090U §10.111.1; 031O §10.157.1–6; 030C 10.37.16; 02LX 10.25.4; 0BHZ 10.119.2; 00O8 10.109.13; 00O9 10.110.2; 00OC 10.110.5; 00OF 10.110.9. Full HTTPS URLs, exact locators, and individual dispositions are in coverage. The classification in 0BHZ was read through its last paragraph, not inferred from its statement.
- Wenqi Li https://www.math.columbia.edu/~wenqili/commalg_notes.pdf: actual course is 2023, not the design catalog's 2016. TOC and entire Lecture 25, printed pp.66–69, through the final coefficient-field/Cohen statement were read. Reharvest reflects this actual document. Its smoothness language is not imported as a criterion over arbitrary imperfect fields; B uses only the elementary rational-point hypersurface derivative test.
- Jeffries https://jack-jeffries.github.io/UM/LCnotes.pdf: full 111-page Math 615 Winter 2018 set, TOC §1.6 “Auslander, Buchsbaum, and Serre”; pp.23–27, 1.49–1.63 read. The pd=1 Ext proof of 1.53 supplies the exceptional induction case. Its final induction includes pd=2 (despite the displayed >2); in 1.59 the regularity hypothesis is on M, as its proof requires, not the printed m.
- The design's RG6 https://mreid.warwick.ac.uk/MA4J8/Groutides6.pdf was fetched, but no AB treatment was verified there. It is not retained as mathematical backing or harvested as if read. Mustaţă and Jeffries support AB at the exact locators above; the independent comparison is actual reading rather than an unverified Huneke/Stone citation. No recorded backing URL has been replaced, so no original_url provenance is lost.

Browser full-text retrieval succeeded for every recorded URL. An earlier initial-scaffold command-line source-fetch attempt returned EAI_AGAIN for all 13, while a later successful full-text harvest supplied the durable stamps now present in coverage. The current Step-3 `source-fetch-check --stamp --timeout-sec 10` reports all 13 verified and 0 newly stamped; direct web retrieval rechecked the same original URLs. The initial curl-based URL-sweep observation (exit 6, including recovery) was therefore a transport observation, not evidence that a reader-facing source had failed. No source was replaced merely to clear a gate, no harvest row was attributed to unread replacement text, and no `original_url` provenance is needed.

## Conventions and dependency rationale

Unless a record explicitly says otherwise, local R is a nonzero commutative Noetherian local ring with identity, maximal ideal m and residue field k; finite means finitely generated. Local dimension is finite by the finite generator/height bound. Fields are regular of dimension zero; DVR excludes fields. Global regular/normal definitions include the zero ring vacuously; Q(0)=0, and global gldim=Krull dimension is stated only for nonzero rings to avoid the empty-spectrum convention. AB excludes M=0; depth(0)=+infinity and an empty support use the existing conventions. Maximal Cohen–Macaulay means nonzero finite M with depth M=dim R.

Published dependency statements were checked against their actual files, not inferred from IDs. Nakayama and maximal-radical criteria explicitly inherit AC; comparison maps/Ext constructions and unbounded recursive resolution choices retain their DC ledgers; Baer/module injective existence retain AC. Thus no blanket ZF assertion is made for a proof consuming those published items, even though finite supplied algebraic calculations and the numerical induction itself introduce no additional choice. Authoring must propagate these ledgers to each claim.

The existing def-minimal-free-resolution-over-a-local-ring is bounded finite-free terminology: the existence lemma extends it to degreewise finite unbounded resolutions without duplicating the definition. Existing def-koszul-betti-numbers-over-a-local-ring only defines Koszul ranks; the new Tor definition extends it and the rank theorem proves compatibility. The published DVR equivalence requires a local PID: the new DVR theorem explicitly proves all ideals are powers of the principal maximal ideal by separatedness before applying it. The published nth-syzygy criterion requires n≥1; the global dimension-zero case uses the module itself.

The graded-map proof uses cumulative Hilbert–Samuel growth of a polynomial quotient by a nonzero homogeneous relation, then separated initial forms give the domain and parameter sequence. It does not assume regular local factoriality. AB proceeds by projective-dimension induction with a separate minimal-matrix Ext pd=1 argument. ABS's hard converse uses prime avoidance with one nonprime ideal, regular-element Tor vanishing, and a split residue-field summand in m/xm. The design's vague top-Tor phrase is realized through this verified minimal-resolution argument; no unsupported lower bound is asserted.

The prime-avoidance lemma first discards contained associated primes, then constructs the separating product; it does not assume an infinite residue field. Localization resolves R/p before localizing, avoiding the false claim that any prime is generated by part of a fixed parameter system. Polynomial ascent uses flat transport of injective multiplication, not the earlier closed-fibre criterion with its finite-as-base-module hypothesis. Flat descent has its own minimal-resolution proof. Completion uses separately identified exactness, scalar-extension, Noetherianity and invariant theorems.

Serre's domain argument reconstructs denominator membership using associated primes of a principal quotient and primary decomposition, with a determinant/colon proof of normal⇒S2. The full ring theorem additionally proves reducedness, total-fraction product/idempotent decomposition and finite-extension rigidity. In the normal-component lemma the regular-product corollary is postponed to the final regular⇒normal theorem, avoiding a forward dependency. Scope exclusions (UFD, coefficient-field structure, fractional-divisorial refinement, the unrelated determinantal example) have result-specific reasons in coverage and supply no hidden premises.

## Per-item current checkpoints

Every entry below is the current scaffold claim, conventions, source locator, dependency list and proof plan after repair. Status for all: scaffolded; step-5 proof authoring and proof validation remain future work, not claimed complete. Source rows describe exact support; B calculations marked ai-generated are explicit specializations, not assertions that the source uses identical coordinates.

### def-embedding-dimension-and-regular-local-ring

Claim: For nonzero Noetherian local (R,m,k), edim(R)=dim_k(m/m²); R is regular iff edim(R)=dim(R).

Dependencies: def-local-ring, def-noetherian-ring, def-krull-dimension-of-a-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.3–12.5, p.115.

Proof plan: Intrinsic cotangent-space definition; no selected generators enter the invariant.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-embedding-dimension-is-minimal-maximal-ideal-generator-number

Claim: edim(R) equals the least number of generators of m.

Dependencies: def-embedding-dimension-and-regular-local-ring, cor-minimal-generators-over-a-local-ring, cor-nakayama-generators-modulo-an-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.3, p.115.

Proof plan: Lift a residue basis, apply Nakayama; every generating set spans the cotangent space.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-dimension-at-most-embedding-dimension

Claim: dim(R) ≤ edim(R) for every Noetherian local ring.

Dependencies: lem-embedding-dimension-is-minimal-maximal-ideal-generator-number, thm-krull-height-theorem.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Remark 12.4, p.115.

Proof plan: Apply height to m. If edim=0, Nakayama gives m=0 and R is a field, treating the n=0 case separately.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### def-regular-system-of-parameters

Claim: In a regular local ring of dimension d, an ordered minimal set of generators of m is a regular system of parameters.

Dependencies: def-embedding-dimension-and-regular-local-ring, def-system-of-parameters-and-parameter-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.5, p.115.

Proof plan: Regular system of parameters does not mean an arbitrary parameter ideal or a regular sequence by definition.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-regular-system-of-parameters-equivalent-basis

Claim: A d-tuple in m, d=dim R, is a regular system of parameters iff its classes form a k-basis of m/m². Every lift of such a basis generates m and is a system of parameters.

Dependencies: def-regular-system-of-parameters, lem-embedding-dimension-is-minimal-maximal-ideal-generator-number, cor-nakayama-generators-modulo-an-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.3–12.5, p.115.

Proof plan: Generation follows from Nakayama; equality of the length and dimension establishes regularity and the parameter property.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-associated-graded-polynomial-surjection

Claim: For a Noetherian local ring and lifts x_1,...,x_e of a basis of m/m², X_i ↦ in(x_i) gives a surjective graded k-algebra map k[X_1,...,X_e] → gr_m R.

Dependencies: lem-embedding-dimension-is-minimal-maximal-ideal-generator-number, def-associated-graded-ring-and-module.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.1, first proof paragraph.

Proof plan: The degree-zero action factors through k; products of generators span each m^n/m^(n+1). Verify multiplicative grading and map independence once lifts are fixed.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-regular-local-graded-surjection-has-zero-kernel

Claim: When e=dim R, the polynomial map to gr_m R is injective.

Dependencies: lem-associated-graded-polynomial-surjection, thm-hilbert-samuel-dimension-theorem, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.1 proof; Li Proposition 25.6.

Proof plan: If a nonzero homogeneous relation f has degree a>0, multiplication by f in the polynomial domain is injective. Cumulative quotient dimensions are binom(n+e,e)-binom(n-a+e,e), of degree e-1, contradicting Hilbert–Samuel degree e. e=0 is immediate.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-associated-graded-ring-of-a-regular-local-ring

Claim: For regular local R of dimension d, gr_m R is the polynomial algebra on any cotangent basis; conversely gr_m R ≅ k[X_1,...,X_d] as graded k-algebras implies regularity and dimension d.

Dependencies: lem-associated-graded-polynomial-surjection, lem-regular-local-graded-surjection-has-zero-kernel, thm-hilbert-samuel-dimension-theorem.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Proposition 25.6, p.67.

Proof plan: Combine injectivity and surjectivity; conversely use degree one for edim and cumulative binomial growth for dimension.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### cor-regular-local-hilbert-samuel-multiplicity-one

Claim: The maximal-ideal Hilbert–Samuel function of a d-dimensional regular local ring is length(R/m^(n+1))=binom(n+d,d), and e_m(R)=1.

Dependencies: thm-associated-graded-ring-of-a-regular-local-ring, def-hilbert-samuel-multiplicity.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.1, monomial-count consequence.

Proof plan: Sum monomial counts, including d=0 where the length is one.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-regular-local-domain-induction

Claim: Every regular local ring is a domain.

Dependencies: thm-associated-graded-ring-of-a-regular-local-ring, thm-krull-intersection-theorem.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.2.

Proof plan: Use separatedness to take first nonzero initial forms of two nonzero elements. Their product cannot vanish in the graded polynomial domain. This is the design’s initial-form route, despite the historical id ending induction.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-regular-local-parameter-is-nonzerodivisor

Claim: Every member of a regular system of parameters in positive dimension is a nonzerodivisor.

Dependencies: lem-regular-system-of-parameters-equivalent-basis, lem-regular-local-domain-induction.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.2–10.106.3.

Proof plan: Its nonzero cotangent class makes the element nonzero; apply domain property. Equivalently lift injectivity of its initial form through separatedness.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-regular-local-quotient-by-parameter-is-regular

Claim: If R is regular local of dimension d and x∈m\m², R/(x) is regular of dimension and embedding dimension d-1.

Dependencies: lem-regular-system-of-parameters-equivalent-basis, thm-dimension-at-most-embedding-dimension, thm-dimension-as-minimal-number-of-radical-generators.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.7, p.115.

Proof plan: Remaining cotangent generators bound edim by d-1; lifting a parameter ideal from R/(x) shows dim R ≤ dim R/(x)+1. Thus both inequalities are equalities.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-quotient-and-lifting-regularity-across-a-regular-element

Claim: If x∈m is a nonzerodivisor, R/(x) regular implies R regular and x∉m². If R is regular and 0≠x∈m, R/(x) is regular iff x∉m².

Dependencies: lem-regular-local-quotient-by-parameter-is-regular, thm-dimension-at-most-embedding-dimension, thm-dimension-as-minimal-number-of-radical-generators, thm-zero-divisors-on-a-module.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.8 and Exercise 12.16, pp.116–117.

Proof plan: Prove dim R/(x)=dim R-1: lift parameters for lower bound and extend quotient prime chains below a minimal prime containing x for upper bound. Lift maximal-ideal generators; count cotangent dimensions. This includes the needed dimension-drop argument locally.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-regular-local-rings-are-domains-and-cohen-macaulay

Claim: A regular local ring is a domain and Cohen–Macaulay. Every regular system of parameters is a regular sequence and each initial quotient has the expected dimension.

Dependencies: lem-regular-local-domain-induction, lem-regular-local-parameter-is-nonzerodivisor, lem-regular-local-quotient-by-parameter-is-regular, def-cohen-macaulay-local-module-and-ring, def-regular-sequence-on-a-module, thm-depth-bounded-by-support-dimension.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.2–10.106.3.

Proof plan: Induct through parameter quotients, retaining nonzero terminal residue field. The full sequence has length dim R, so depth equals dimension.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-one-dimensional-regular-local-rings-are-dvrs

Claim: A Noetherian local ring of dimension one is regular iff it is a DVR; fields are excluded from DVR.

Dependencies: lem-regular-local-domain-induction, lem-embedding-dimension-is-minimal-maximal-ideal-generator-number, thm-equivalent-characterisations-of-a-dvr, thm-krull-intersection-theorem.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Example 12.10, p.116.

Proof plan: Regularity makes m principal; use the local-domain DVR criterion. Conversely a DVR has principal nonzero maximal ideal. The published criterion requires a local PID, not merely principal maximal ideal: if m=(t), separatedness gives each nonzero a=t^n u with u a unit; choosing least valuation in a nonzero ideal shows it is generated by t^n. This supplies the missing PID bridge before applying that criterion.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-regular-local-regular-quotient-ideal-is-parameter-generated

Claim: For regular local R and I⊂m, R/I is regular iff I is generated by an initial part of a regular system of parameters. Equivalently, dim_k((I+m²)/m²)=dim R−dim(R/I).

Dependencies: lem-regular-local-quotient-by-parameter-is-regular, lem-regular-local-domain-induction, lem-regular-system-of-parameters-equivalent-basis.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.13, pp.116–117.

Proof plan: Choose a cotangent basis for (I+m²)/m², quotient by its lifts, and compare dimensions. A nonzero ideal in the resulting finite-dimensional local domain strictly lowers dimension, by extending every quotient chain with (0).

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-finite-local-modules-admit-minimal-free-resolutions

Claim: Every finite module over a Noetherian local ring has an augmented resolution by finite-rank free modules with differential images in m times the previous term; the resolution need not terminate.

Dependencies: def-minimal-free-resolution-over-a-local-ring, cor-minimal-generators-over-a-local-ring, thm-nakayama-lemma, thm-equivalent-characterizations-of-noetherian-modules.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Construction before Proposition 12.27, p.120.

Proof plan: Recursively choose minimal generators of each finite kernel. State degreewise finite versus bounded explicitly; extend the published finite-resolution terminology without redefining its finite case. DC suffices for infinite recursive choices.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-minimal-free-resolution-differentials-land-in-maximal-ideal

Claim: A degreewise finite free resolution is minimal exactly when all positive differential matrices have entries in m; a unit entry splits off a two-term identity summand.

Dependencies: lem-finite-local-modules-admit-minimal-free-resolutions.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Definition 1.49 and discussion after Lemma 1.50, pp.23–24.

Proof plan: Pivot the unit to 1 and clear its row and column. Adjacent differentials vanish on that summand because d²=0. Conversely matrix entries in m cannot admit an identity summand.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-minimal-free-resolution-reduces-to-zero-differential

Claim: Tensoring a minimal free resolution with k makes all differentials zero.

Dependencies: lem-minimal-free-resolution-differentials-land-in-maximal-ideal, def-balanced-tor-bifunctor.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.27 proof, p.121.

Proof plan: Every coefficient in m maps to zero in k.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### def-betti-numbers-of-a-finite-local-module

Claim: For finite M over Noetherian local (R,m,k), β_i^R(M)=dim_k Tor_i^R(k,M), for i≥0.

Dependencies: def-balanced-tor-bifunctor, lem-finite-local-modules-admit-minimal-free-resolutions, def-koszul-betti-numbers-over-a-local-ring.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Unnumbered Betti-number definition after Lemma 1.50, p.24.

Proof plan: The scalar action factors through k; the chosen finite free resolution makes the vector-space dimension finite. Definition uses resolution-independent Tor. This extends the existing Koszul-only rank notation; the rank theorem identifies β with β^K whenever a minimal Koszul resolution exists.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### cor-betti-number-is-rank-in-minimal-resolution

Claim: β_i(M)=rank_R F_i for any minimal free resolution F of M.

Dependencies: def-betti-numbers-of-a-finite-local-module, lem-minimal-free-resolution-reduces-to-zero-differential.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.27, pp.120–121.

Proof plan: The zero-differential residue complex computes Tor.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-minimal-free-resolutions-unique-up-to-chain-isomorphism

Claim: Any two minimal free resolutions of a finite local module are chain-isomorphic, noncanonically; their ranks are independent of choices.

Dependencies: cor-betti-number-is-rank-in-minimal-resolution, thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-nakayama-lemma.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Remark 12.28, p.121.

Proof plan: Comparison maps lifting the identity become inverse degreewise over k since residue homotopies have zero differentials. Nakayama gives surjectivity of each lift; equal finite ranks give invertibility by determinant.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-projective-dimension-from-last-nonzero-betti-number

Claim: For nonzero finite M, pd_R M=sup{i:β_i(M)≠0}; for q≥0, pd M≤q iff Tor_(q+1)(k,M)=0.

Dependencies: cor-betti-number-is-rank-in-minimal-resolution, def-projective-dimension-of-an-object, thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective, thm-finite-flat-modules-over-local-rings-are-free, lem-projective-modules-are-flat-over-an-arbitrary-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.29, p.121.

Proof plan: A vanishing F_(q+1) terminates the resolution; exactness and Nakayama prevent a later restart. A finite projective syzygy is free, so a finite projective resolution bounds Tor vanishing.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-auslander-buchsbaum-syzygy-projective-dimension

Claim: For a minimal presentation 0→K→F→M→0 with finite nonzero M and 0<pd M<∞, pd K=pd M-1.

Dependencies: lem-projective-dimension-from-last-nonzero-betti-number.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.31 proof, Case 3, p.122.

Proof plan: Truncate the minimal resolution; its last nonzero free module stays nonzero.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-auslander-buchsbaum-base-case-free-module

Claim: A nonzero finite module with pd M=0 is free and has depth equal to depth R.

Dependencies: def-projective-dimension-of-an-object, thm-finite-flat-modules-over-local-rings-are-free, lem-projective-modules-are-flat-over-an-arbitrary-ring, cor-depth-as-first-nonzero-ext.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53, pd=0 case, p.24.

Proof plan: Finite projective is flat and hence free; a positive finite direct sum of copies of R has the same first nonzero Ext degree.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-minimal-free-matrix-induces-zero-on-residue-ext

Claim: If α:R^s→R^t has entries in m, Ext_R^i(k,α)=0 for all i≥0.

Dependencies: def-balanced-ext-bifunctor, thm-module-categories-have-enough-injectives.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53 proof, Claim, p.25.

Proof plan: Take an injective resolution I of R; finite sums resolve both free modules and α acts on Hom_R(k,I) through its entries, each of which annihilates that Hom complex.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-auslander-buchsbaum-projective-dimension-one

Claim: If finite nonzero M has pd M=1, depth M=depth R-1.

Dependencies: lem-minimal-free-matrix-induces-zero-on-residue-ext, lem-projective-dimension-from-last-nonzero-betti-number, cor-depth-as-first-nonzero-ext, thm-long-exact-ext-sequence-in-the-second-variable.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53, pp.24–25.

Proof plan: Use a minimal 0→R^s→R^t→M→0 with s>0. Depth R=0 contradicts injectivity on Hom(k,-); otherwise the first nonzero Ext term for M occurs one degree earlier. This is the exceptional case the Depth Lemma alone does not settle.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-auslander-buchsbaum-first-syzygy-depth

Claim: For 0→K→F→M→0 minimal with n=pd M≥2, if depth K=depth R-(n-1), then depth M=depth K-1.

Dependencies: lem-auslander-buchsbaum-syzygy-projective-dimension, thm-depth-lemma.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53, final induction step, p.25.

Proof plan: This is an induction-step lemma: its displayed depth equality is an explicit hypothesis, not an appeal to AB. Since depth K<depth F, use the unequal-depth conclusion; depth K=0 would contradict the left inequality.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-auslander-buchsbaum-formula

Claim: For nonzero finite M of finite projective dimension over Noetherian local R, pd M+depth M=depth R. Consequently, such a module with depth M=depth R is free.

Dependencies: lem-auslander-buchsbaum-base-case-free-module, lem-auslander-buchsbaum-projective-dimension-one, lem-auslander-buchsbaum-syzygy-projective-dimension, lem-auslander-buchsbaum-first-syzygy-depth.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53, pp.24–25; Mustata 12.31.

Proof plan: Induct on projective dimension, with zero and one handled separately. Apply the induction hypothesis to K and then the conditional syzygy-depth lemma.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-global-dimension-is-detected-on-cyclic-modules

Claim: For a ring R, global dimension is sup_I pd_R(R/I), where I ranges over left ideals; in the commutative Noetherian case these are finite modules. This also equals the supremum of injective dimensions of all left modules.

Dependencies: def-left-and-right-global-dimension-of-a-ring, thm-baer-criterion-for-injective-modules, thm-injective-dimension-at-most-n-iff-higher-ext-vanishes, thm-projective-dimension-at-most-n-iff-higher-ext-vanishes, thm-ext-dimension-shifting-in-the-second-variable, thm-module-categories-have-enough-injectives.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Propositions 12.24–12.25, p.120.

Proof plan: For any N dimension-shift Ext^(n+1)(R/I,N) to Ext^1(R/I,C) for the nth injective cosyzygy C. Baer makes C injective, giving vanishing for arbitrary first arguments and hence all module projective dimensions ≤n.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-local-global-dimension-equals-residue-field-projective-dimension

Claim: For Noetherian local R, gldim R=pd_R k, allowing infinity. If pd k=n<∞ then pd M≤n for every finite module M and every R-module has pd≤n.

Dependencies: lem-global-dimension-is-detected-on-cyclic-modules, lem-projective-dimension-from-last-nonzero-betti-number, thm-tor-symmetry-over-a-commutative-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.30, p.121.

Proof plan: Compute Tor(k,M) using the finite resolution of k; minimal resolutions bound finite M, and cyclic detection passes the bound to arbitrary modules.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-positive-depth-ring-has-regular-minimal-generator

Claim: If depth R>0, there is a nonzerodivisor x∈m\m², without assuming k infinite.

Dependencies: thm-depth-zero-associated-prime-criterion, thm-finiteness-of-associated-primes, thm-zero-divisors-on-a-module, lem-finite-prime-avoidance, thm-nakayama-lemma.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 proof, p.123; Lemma 5.1 variant.

Proof plan: Prove the one-arbitrary-ideal prime-avoidance variant locally: choose a∈m outside all associated primes. If a∈m², choose b∈m\m². For each associated prime containing b choose c outside all those primes and inside every associated prime not containing b, using products and prime avoidance; then b+ac avoids all primes and remains outside m². First retain only maximal-by-inclusion associated primes, an antichain. If b already avoids them take b. Otherwise obtain c as a product of elements in each prime not containing b and outside every prime containing b; antichain incomparability and prime avoidance justify the choices.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-regular-element-reduction-preserves-minimal-resolution

Claim: If x∈m is regular on R and on finite M, reducing a minimal resolution modulo x is a minimal resolution of M/xM over R/(x), and projective dimensions are equal, including infinity.

Dependencies: lem-finite-local-modules-admit-minimal-free-resolutions, lem-projective-dimension-from-last-nonzero-betti-number, def-balanced-tor-bifunctor, thm-tor-symmetry-over-a-commutative-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Lemma 12.32 and proof of 12.31 Case 2, p.122.

Proof plan: Resolve R/(x) by the two-term multiplication complex. Its tensor with M has no positive homology, so the reduced resolution is exact. Ranks and minimality are unchanged.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-residue-field-splits-off-reduced-maximal-ideal

Claim: For x∈m\m² regular on R, 0→(x)/(xm)→m/xm→m/(x)→0 splits over R/(x), with (x)/(xm)≅k. Hence finite pd_R k implies finite pd_(R/(x)) k.

Dependencies: lem-regular-element-reduction-preserves-minimal-resolution, lem-auslander-buchsbaum-syzygy-projective-dimension, thm-projective-dimension-at-most-n-iff-higher-ext-vanishes.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 proof, p.123; Jeffries 1.60.

Proof plan: A k-linear functional on m/m² sending x to 1, composed with m/xm→m/m², retracts the injection k→m/xm. Reduce a finite resolution of m; direct summands preserve finite pd by Ext.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension

Claim: If pd_R k<∞, R is regular and depth R=dim R=edim R.

Dependencies: thm-auslander-buchsbaum-formula, lem-positive-depth-ring-has-regular-minimal-generator, lem-residue-field-splits-off-reduced-maximal-ideal, thm-quotient-and-lifting-regularity-across-a-regular-element, thm-regular-local-rings-are-domains-and-cohen-macaulay, lem-depth-quotient-by-regular-element.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33, p.123.

Proof plan: Induct on depth R. At depth zero AB makes k projective and finite free, forcing m=0. Otherwise choose x as above, use the split residue-field summand over R/(x), lower depth by one, and lift regularity. Do not replace this with a claim of unspecified top Koszul nonvanishing. Regard depth over R/(x) as depth of the same annihilated module over R: regular sequences act through their images, lift termwise, and preserve quotient nonvanishing.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-regular-local-residue-field-koszul-resolution

Claim: The Koszul complex on a regular system of d parameters is a minimal free resolution of k of length d.

Dependencies: thm-regular-local-rings-are-domains-and-cohen-macaulay, cor-koszul-complex-resolves-a-regular-quotient, lem-minimal-free-resolution-differentials-land-in-maximal-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 forward proof, p.123.

Proof plan: Regular sequence gives exactness; quotient is k; each differential coefficient lies in m. Exterior degree d has rank one, including the empty sequence d=0.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### cor-regular-local-residue-field-projective-dimension-dimension

Claim: For regular local R of dimension d, pd_R k=d and β_i(k)=binom(d,i), zero outside 0≤i≤d.

Dependencies: lem-regular-local-residue-field-koszul-resolution, lem-projective-dimension-from-last-nonzero-betti-number, cor-betti-number-is-rank-in-minimal-resolution, cor-complete-intersection-betti-numbers-binomial.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.27 and 12.33, pp.121–123.

Proof plan: Compute exterior ranks, with nonzero top rank ensuring equality.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-auslander-buchsbaum-serre-regularity-criterion

Claim: For Noetherian local R: regularity, finite pd k, finite global dimension, and finite pd for every finite module are equivalent. When they hold gldim R=pd k=dim R. In particular, a nonzero finite module over a regular local ring is maximal Cohen–Macaulay iff it is free.

Dependencies: lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension, cor-regular-local-residue-field-projective-dimension-dimension, lem-local-global-dimension-equals-residue-field-projective-dimension.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 and Corollary 12.30, pp.121–123.

Proof plan: Forward Koszul and arbitrary-module bound; converse from the finite-residue-field lemma. Include maximal Cohen–Macaulay finite modules being free by AB. Inline freeness-lifting check (Stacks 10.106.5): if x∈m is regular on R and finite M and M/xM is free over R/(x), lift a basis to a surjection F→M. Tor_1(M,R/(x))=0 makes its finite kernel K satisfy K/xK=0; Nakayama gives K=0.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### cor-localisations-of-regular-local-rings-are-regular

Claim: Every prime localization of a regular local ring is regular; its embedding dimension is ht p.

Dependencies: thm-auslander-buchsbaum-serre-regularity-criterion, thm-localisation-of-modules-is-exact, lem-height-equals-local-dimension.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.34, p.123.

Proof plan: Resolve the finite module R/p, localize the resolution at p, and apply ABS to the resulting residue field. This proves the design’s embedding bound without any adapted-parameter assumption.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### def-regular-noetherian-ring

Claim: A Noetherian ring is regular if every prime localization is regular local.

Dependencies: def-embedding-dimension-and-regular-local-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Definition 12.14 and Corollary 12.34.

Proof plan: The zero ring satisfies this vacuously. The equivalent maximal-localization test is proved in the polynomial/localization theorem, using the preceding localization result.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-flat-local-ascent-of-regularity

Claim: For a flat local map (R,m)→(S,n) of Noetherian local rings, if R and S/mS are regular, S is regular. Conversely, regularity of S implies regularity of R (without a regular-fibre assertion).

Dependencies: thm-regular-local-rings-are-domains-and-cohen-macaulay, thm-quotient-and-lifting-regularity-across-a-regular-element, def-flat-and-faithfully-flat-modules-and-ring-maps, thm-auslander-buchsbaum-serre-regularity-criterion, lem-finite-local-modules-admit-minimal-free-resolutions, lem-projective-dimension-from-last-nonzero-betti-number.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.40(i), p.124; https://stacks.math.columbia.edu/tag/00OF — Lemma 10.110.9 full proof (minimal-resolution version of its syzygy argument).

Proof plan: Flatness transports injectivity successively along a regular parameter sequence of R, since all source exact sequences remain exact after tensoring. Quotient S by their images to obtain the regular closed fibre, then repeatedly lift regularity. No finite-as-R-module assumption. For descent tensor a minimal resolution of k_R with S. Flatness preserves exactness and locality makes every differential entry lie in n, so this is a minimal resolution of S/mS. Finite global dimension of S forces its terms to vanish above dim S. A finite free R-module whose scalar extension is zero has rank zero; the original resolution terminates and ABS gives regular R.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-polynomial-local-regularity-fibre-step

Claim: At a prime q of R[t] over p, the closed fibre of R_p→R[t]_q is k(p)[t] localized at its zero prime or at a nonzero irreducible polynomial; it is respectively a field or a DVR.

Dependencies: thm-one-dimensional-regular-local-rings-are-dvrs, thm-euclidean-domain-is-a-pid, cor-polynomial-ring-over-a-field-is-euclidean.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.36 proof, p.124.

Proof plan: Identify the localization/quotient explicitly. A polynomial ring in one variable over a field has Euclidean division; prove the principal maximal-ideal description in this proof if not reached by the cited PID result.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-localisation-and-polynomial-extension-of-regular-rings

Claim: Localizations and finite polynomial extensions of regular Noetherian rings are regular; it suffices to test regularity at maximal ideals. For any nonzero regular Noetherian ring R, gldim R=dim R, allowing infinity.

Dependencies: cor-localisations-of-regular-local-rings-are-regular, def-regular-noetherian-ring, lem-flat-local-ascent-of-regularity, lem-polynomial-local-regularity-fibre-step, cor-finite-variable-polynomial-ring-noetherian, thm-localisation-of-modules-is-exact, cor-finite-flat-noetherian-modules-are-projective, thm-flatness-is-local, thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective, lem-global-dimension-is-detected-on-cyclic-modules, lem-dedekind-localisation-at-nonzero-prime-is-dvr, lem-projective-modules-are-flat-over-an-arbitrary-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.34 and Proposition 12.36, pp.123–124; https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.35, pp.123–124.

Proof plan: For localization use a maximal ideal above a given prime and transitivity. Polynomial rings are free and hence flat; localize and apply regular-fibre ascent, then iterate variables. No finite-dimensional assumption on the global regular ring. For the global-dimension conclusion, pd_R(R/p) is at least pd_Rp(k(p))=ht p. For finite d=dim R, a finite module has finite syzygies; its d-th syzygy is projective at every prime by the local bound, hence flat locally and globally, hence finite projective. Cyclic detection extends the bound to arbitrary modules. If dimension is infinite the lower bounds suffice. The finite-module local projective-dimension equality holds for every Noetherian R, by exactly the finite-syzygy localization argument just given. For d=0 use M itself as the locally projective module rather than invoke the n≥1 syzygy theorem. Dedekind domains are regular because their nonzero prime localizations are DVRs and their zero-prime localization is a field, so their finite polynomial extensions supply the other source example.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-completion-preserves-embedding-dimension

Claim: The maximal-adic completion of Noetherian local R has the same residue field and cotangent space, hence the same embedding dimension.

Dependencies: def-embedding-dimension-and-regular-local-ring, thm-completion-of-a-noetherian-local-ring, cor-completion-commutes-with-finite-quotients-and-submodules.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, completion properties (1), (5), (6), pp.68–69.

Proof plan: Identify the quotients by m and m² and the induced maximal ideals, so the cotangent-space isomorphism is canonical.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-completion-preserves-regular-local-rings

Claim: A Noetherian local ring is regular iff its maximal-adic completion is regular.

Dependencies: lem-completion-preserves-embedding-dimension, thm-completion-preserves-dimension-and-hilbert-samuel-data.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, property (6), p.69.

Proof plan: Compare the two intrinsic dimensions using the published completion theorem.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### def-normal-noetherian-ring

Claim: A Noetherian ring is normal when each localization at a prime is an integrally closed domain.

Dependencies: def-integral-closure-and-integrally-closed-domain.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Definition 8.34 and Remarks 8.35–8.36, p.56.

Proof plan: This includes finite products of normal domains and the zero ring; it does not mean the original ring is a domain.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### def-serre-r-k-and-s-k-conditions

Claim: For k≥0, R_k means R_p is regular whenever ht p≤k; S_k means depth R_p≥min(k,dim R_p) for every prime p. For finite modules use local support dimension in the S_k condition.

Dependencies: def-embedding-dimension-and-regular-local-ring, def-depth-with-respect-to-an-ideal, def-height-of-a-prime-ideal.

Sources: https://stacks.math.columbia.edu/tag/031O — Definition 10.157.1.

Proof plan: Quantify over all primes; preserve zero-module depth infinity and empty support convention.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### cor-regular-local-ring-satisfies-r-one

Claim: A regular local ring has R_1; its height-one localizations are DVRs and height-zero localizations are fields.

Dependencies: def-serre-r-k-and-s-k-conditions, cor-localisations-of-regular-local-rings-are-regular, thm-one-dimensional-regular-local-rings-are-dvrs.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.5, R1 implication.

Proof plan: Use dimension=height, the zero-dimensional regular case, and DVR equivalence.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### cor-regular-local-ring-satisfies-s-two

Claim: A regular local ring satisfies S_k for every k≥0, in particular S_2.

Dependencies: def-serre-r-k-and-s-k-conditions, cor-localisations-of-regular-local-rings-are-regular, thm-regular-local-rings-are-domains-and-cohen-macaulay.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.5, S2 implication.

Proof plan: Each localized ring is regular and Cohen–Macaulay, so local depth equals local dimension.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-normal-domain-implies-r-one

Claim: Every Noetherian integrally closed domain satisfies R_1.

Dependencies: def-serre-r-k-and-s-k-conditions, thm-height-one-localisation-of-normal-noetherian-domain-is-dvr, thm-one-dimensional-regular-local-rings-are-dvrs.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.4 forward implication.

Proof plan: Height-one localizations are DVRs; height zero is the fraction field.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-normal-domain-implies-s-two

Claim: Every Noetherian normal domain satisfies S_2.

Dependencies: def-serre-r-k-and-s-k-conditions, thm-normality-is-local-for-domains, thm-depth-zero-associated-prime-criterion, lem-depth-quotient-by-regular-element, thm-krull-height-theorem.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Lemma 8.40 proof, pp.56–57 (normal hypothesis required); 8.41.

Proof plan: At height at least two choose nonzero a. If depth=1 choose b with m=(a:b), so u=b/a∉R and um⊂R. If um⊂m, apply the determinant trick on the finite faithful ideal m to make u integral, a contradiction. Otherwise some ut is a unit, making m=(t), contradicting height≥2. Include the finite-matrix determinant argument explicitly.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-r-one-s-two-intersection-of-height-one-localisations

Claim: For a Noetherian S_2 domain R, R=intersection_(ht p=1) R_p inside Frac R; for fields the empty intersection is the fraction field.

Dependencies: def-serre-r-k-and-s-k-conditions, thm-lasker-noether-primary-decomposition, lem-associated-primes-from-a-minimal-primary-decomposition, lem-depth-quotient-by-regular-element, thm-depth-zero-associated-prime-criterion, thm-associated-primes-localise.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 8.41 proof, pp.57–58; Stacks 10.157.6(1)–(2).

Proof plan: For nonzero denominator a, every associated prime of R/(a) has height one: local depth drop excludes heights≥2, and a excludes height zero. A primary decomposition of (a) tests numerator membership at these primes.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-r-one-s-two-integral-element-membership

Claim: An S_2 Noetherian domain whose height-one localizations are DVRs is integrally closed.

Dependencies: lem-r-one-s-two-intersection-of-height-one-localisations, thm-valuation-ring-is-integrally-closed.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 8.41 final proof paragraph, p.58.

Proof plan: An integral fraction belongs to each DVR and hence to the intersection.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### cor-serre-normality-criterion-two-directions

Claim: A Noetherian domain is normal iff it satisfies R_1 and S_2.

Dependencies: lem-normal-domain-implies-r-one, lem-normal-domain-implies-s-two, lem-r-one-s-two-integral-element-membership, thm-one-dimensional-regular-local-rings-are-dvrs, thm-normality-is-local-for-domains.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 8.41 and Lemma 8.40, pp.56–58.

Proof plan: Combine the forward conditions with the height-one intersection converse.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-serre-r-zero-s-one-characterises-reducedness

Claim: For a Noetherian ring, S_1 is equivalent to having no embedded associated primes; R_0 together with S_1 is equivalent to reducedness. For any finite R-module M, S_1 equivalently says every associated prime is minimal in Supp M.

Dependencies: def-serre-r-k-and-s-k-conditions, thm-depth-zero-associated-prime-criterion, thm-zero-divisors-on-a-module, thm-existence-of-associated-primes, thm-noetherian-ring-has-finitely-many-minimal-primes, cor-radical-ideals-as-intersections-of-minimal-primes-noetherian, thm-associated-primes-localise, lem-finite-prime-avoidance.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.2–10.157.3.

Proof plan: Localize associated primes. Under R0 and S1 a nonzero nilpotent ideal has an associated prime which must be minimal, but localization there is a field, contradiction. Conversely a reduced ring embeds in its minimal-prime domains and has no embedded associated primes; verify this via a finite product of separating elements. The module version follows because an associated prime p is embedded exactly when Supp(M_p) has positive dimension; the localized associated-prime criterion identifies this with a depth-zero violation of S1.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### def-total-ring-of-fractions

Claim: Q(R) is localization at all nonzerodivisors; the natural map R→Q(R) is injective. Set Q(0)=0 separately.

Dependencies: def-multiplicative-subset-and-localisation.

Sources: https://stacks.math.columbia.edu/tag/030C — 10.37.16 proof, total fraction ring used there.

Proof plan: Nonzerodivisors form a multiplicative set; the localization zero criterion gives injectivity. This is distinct from the fraction field for domains.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-reduced-noetherian-total-fractions-and-normal-components

Claim: For reduced Noetherian R with minimal primes p_i, Q(R)≅product_i Frac(R/p_i). Such R is normal iff it is integrally closed in Q(R), equivalently a finite product of normal domains.

Dependencies: def-total-ring-of-fractions, def-normal-noetherian-ring, thm-noetherian-ring-has-finitely-many-minimal-primes, cor-radical-ideals-as-intersections-of-minimal-primes-noetherian, thm-normality-is-local-for-domains, thm-chinese-remainder-theorem-for-comaximal-ideals, lem-finite-prime-avoidance.

Sources: https://stacks.math.columbia.edu/tag/030C — 10.37.16, full proof; https://stacks.math.columbia.edu/tag/02LX — Lemma 10.25.4, full proof.

Proof plan: Prove zero divisors are the union of minimal primes using separating products; primes surviving localization are precisely those minimal primes by prime avoidance. The reduced zero-dimensional localization is a finite product of fields by CRT. If integrally closed it contains coordinate idempotents (roots of T²-T) and splits. Conversely normal localizations force disjoint minimal components; CRT and domain local normality finish. Treat R=0 as the empty-product case directly.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### lem-depth-two-excludes-finite-punctured-extension

Claim: For reduced Noetherian local R with depth R≥2, any finite intermediate R⊂B⊂Q(R) with B/R supported only at m equals R.

Dependencies: def-total-ring-of-fractions, thm-depth-lemma, thm-depth-zero-associated-prime-criterion, thm-support-and-annihilator-of-a-finite-module.

Sources: https://stacks.math.columbia.edu/tag/0BHZ — 10.119.2 last proof paragraph, restricted finite-extension rigidity.

Proof plan: Choose an R-regular element in m, which also acts injectively on Q(R) and B. Thus depth B≥1, and the Depth Lemma gives depth(B/R)≥1 unless zero. A nonzero finite module supported only at m has finite length and depth zero; prove by annihilator radical and a last nonzero power of m.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-serre-normality-criterion

Claim: For every Noetherian ring, including rings with zero divisors, normality is equivalent to R_1 and S_2.

Dependencies: def-normal-noetherian-ring, cor-serre-normality-criterion-two-directions, lem-serre-r-zero-s-one-characterises-reducedness, lem-reduced-noetherian-total-fractions-and-normal-components, lem-depth-two-excludes-finite-punctured-extension.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.4 complete proof, with 030C and 0BHZ.

Proof plan: Forward apply the domain criterion to localizations. Reverse first get reducedness. In a local ring induct on dimension: dimensions zero/one are field/DVR by R1. For integral u∈Q(R), B=R[u] is finite; every proper localization is normal by induction, so B/R is supported at m; rigidity gives B=R. Total-fraction idempotents now force the local ring to be a normal domain. Explain localized integral fractions in Q(R_p) by nonzerodivisor localization.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### thm-regular-local-rings-are-normal

Claim: Every regular local ring is integrally closed; every regular Noetherian ring is normal.

Dependencies: lem-regular-local-domain-induction, cor-regular-local-ring-satisfies-r-one, cor-regular-local-ring-satisfies-s-two, thm-serre-normality-criterion, thm-localisation-and-polynomial-extension-of-regular-rings.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.5.

Proof plan: Apply Serre locally and the global definitions. No factoriality assertion is made. Applied after regular⇒normal, this also splits a regular Noetherian ring into regular domains, since every localization of a component is a localization of the product.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-finite-regular-local-base-cohen-macaulay-freeness

Claim: For an injective finite local map A→B of nonzero Noetherian local rings, with A regular, B is Cohen–Macaulay iff B is free as an A-module.

Dependencies: thm-auslander-buchsbaum-formula, thm-auslander-buchsbaum-serre-regularity-criterion, cor-dimension-preserved-by-integral-extensions, cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module, cor-one-regular-system-of-parameters-implies-cohen-macaulay, thm-regular-local-rings-are-domains-and-cohen-macaulay, thm-depth-bounded-by-support-dimension, thm-nakayama-lemma.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.41, p.125; https://jack-jeffries.github.io/UM/LCnotes.pdf — Corollary 1.63, p.27.

Proof plan: Let d=dim A=dim B by integral dimension invariance. A regular parameter sequence generates m_A; its images are parameters in B since B/m_A B is finite-dimensional and local over k_A, hence Artinian with nilpotent maximal ideal (justify by the descending chain and Nakayama). If B is CM these parameters are B-regular, yielding depth_A B≥d; depth bound and AB over regular A give pd_A B=0, hence free. If B is free they are B-regular directly, so the parameter criterion gives CM. This exercise proves the full criterion and does not assume equality of depths under arbitrary ring maps.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-fields-as-regular-local-rings

Claim: Every field is regular local of dimension and embedding dimension zero; conversely a zero-dimensional regular local ring is a field.

Dependencies: def-embedding-dimension-and-regular-local-ring, thm-nakayama-lemma.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Example 12.6, p.115.

Proof plan: For the converse m/m²=0 implies m=0 by Nakayama. The empty regular system and length-zero resolution include dimension zero.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-dvrs-as-regular-local-rings

Claim: A DVR with uniformizer t is regular local of dimension one and gr_m R≅k[T].

Dependencies: thm-one-dimensional-regular-local-rings-are-dvrs, thm-associated-graded-ring-of-a-regular-local-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Example 12.10, p.116.

Proof plan: Use m=(t), t∉m²; compute each graded piece by t-powers.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-localised-polynomial-ring-regular

Claim: For every field k and 0≤r≤n, R=k[x1,…,xn]_(x1,…,xr) is regular local of dimension r, residue field k(x_(r+1),…,xn), and regular parameters x1,…,xr.

Dependencies: thm-localisation-and-polynomial-extension-of-regular-rings, thm-dimension-at-most-embedding-dimension.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Example 12.37, p.124.

Proof plan: The chain of coordinate primes gives height at least r, the r generators give at most r. Identify residue by inverting all nonzero polynomials in remaining variables.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-formal-power-series-ring-regular

Claim: For every field k and n≥0, the coefficientwise formal series ring k[[x1,…,xn]] is Noetherian regular local of dimension n, with maximal ideal generated by the variables.

Dependencies: ex-localised-polynomial-ring-regular, thm-completion-of-a-noetherian-local-ring, thm-completion-preserves-regular-local-rings.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Example 25.1 and completion properties (1),(5),(6), pp.68–69.

Proof plan: Define multivariable series as coefficients indexed by N^n and convolution (each coefficient is a finite sum); compatible degree truncations identify this ring with the maximal-adic completion of the coordinate local polynomial ring. This builds the multivariable construction rather than assuming the published univariate definition covers it.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-dual-numbers-not-regular

Claim: R=k[ε]/(ε²) is local, has dim R=0 and edim R=1, so is not regular.

Dependencies: def-embedding-dimension-and-regular-local-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Definitions 12.3–12.5 and Example 12.6, p.115.

Proof plan: Every prime contains ε; a+bε is a unit iff a≠0. Thus m=(ε), m²=0, and the cotangent dimension is one.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-cusp-local-ring-not-regular

Claim: For every field k, R=(k[x,y]/(y²−x³))_(x,y) has dimension one and embedding dimension two, hence is singular.

Dependencies: ex-localised-polynomial-ring-regular, def-embedding-dimension-and-regular-local-ring, cor-dimension-preserved-by-integral-extensions.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Propositions 25.6–25.8, pp.67–68.

Proof plan: The affine quotient is finite free over k[x] with basis 1,y, hence integral of dimension one. The map to k[t], x↦t²,y↦t³ is injective: even and odd t-degrees in a(x)+yb(x) cannot cancel. Thus the chain (0)⊊m shows local dimension one. Since the defining equation is in (x,y)², both cotangent classes survive independently.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-betti-numbers-from-a-koszul-resolution

Claim: For R=k[x,y]_(x,y), the complex 0→R→R²→R→k→0 with maps c↦(−yc,xc) and (a,b)↦xa+yb is minimal and β(k)=(1,2,1).

Dependencies: ex-localised-polynomial-ring-regular, lem-regular-local-residue-field-koszul-resolution, cor-betti-number-is-rank-in-minimal-resolution.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 proof, p.123.

Proof plan: Write the two Koszul differentials and verify composition zero; parameter regularity gives exactness. All entries are in m, so tensoring with k yields the ranks.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-residue-field-infinite-projective-dimension-singular

Claim: For the dual numbers R, the residue field has an infinite minimal resolution with every differential multiplication by ε and β_i(k)=1 for every i≥0.

Dependencies: ex-dual-numbers-not-regular, lem-projective-dimension-from-last-nonzero-betti-number, cor-betti-number-is-rank-in-minimal-resolution.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.27 and Corollary 12.29, p.121.

Proof plan: Kernel and image of multiplication by ε are both (ε); the augmentation kernel is also (ε). Thus the infinite complex is exact and minimal, and Tor never vanishes.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-embedding-dimension-versus-dimension-node

Claim: The split nodal local ring (k[x,y]/(xy))_(x,y) has dimension one and embedding dimension two over any field. It is reduced, is not a domain, and is not regular.

Dependencies: ex-localised-polynomial-ring-regular, def-embedding-dimension-and-regular-local-ring.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Propositions 25.6–25.8, pp.67–68.

Proof plan: Primes contain x or y, so branches have dimension one; (xy)=(x)∩(y) is radical. The quadratic equation produces no linear cotangent relation.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-associated-graded-polynomial-map-singular-kernel

Claim: For the cusp local ring, gr_m R≅k[X,Y]/(Y²); the degree-one polynomial surjection has kernel (Y²).

Dependencies: ex-cusp-local-ring-not-regular, lem-associated-graded-polynomial-surjection, thm-associated-graded-ring-of-a-regular-local-ring.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Proposition 25.6 and its graded-map proof, p.67.

Proof plan: In the ambient coordinate regular local ring, initial(fg)=initial(f)initial(g) because its graded ring is a domain. For f=y²−x³ the initial form is Y², so the initial ideal of the principal ideal is (Y²), including localized multipliers whose denominators are units. Quotient graded pieces give the asserted kernel.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-minimal-resolution-unit-cancellation

Claim: Over R=k[x]_(x), the resolution R²→R²→R/(x), with differential diag(x,1) and augmentation (a,b)↦a mod x, contracts to the minimal resolution R→R with differential x.

Dependencies: ex-localised-polynomial-ring-regular, lem-minimal-free-resolution-differentials-land-in-maximal-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — §12.2 minimal-resolution construction and Remark 12.28, pp.120–121.

Proof plan: The second-coordinate complex R --1→ R is contractible. Remove it; the first-coordinate map is injective and its image is the augmentation kernel.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-betti-numbers-residue-field-regular-ring

Claim: For R=k[x,y,z]_(x,y,z), the residue field has Betti numbers (1,3,3,1) and projective dimension three.

Dependencies: ex-localised-polynomial-ring-regular, lem-regular-local-residue-field-koszul-resolution, cor-betti-number-is-rank-in-minimal-resolution.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33, p.123.

Proof plan: Use exterior bases in Koszul degrees 0,…,3; all three variables belong to m, so this is minimal and the top rank is nonzero.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-auslander-buchsbaum-first-syzygy

Claim: For R=k[x,y]_(x,y), the first syzygy m of k has pd_R m=1 and depth_R m=1, while pd_R k=2 and depth_R k=0.

Dependencies: ex-betti-numbers-from-a-koszul-resolution, lem-auslander-buchsbaum-syzygy-projective-dimension, thm-auslander-buchsbaum-formula.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.31 and Theorem 12.33, pp.121–123.

Proof plan: Truncate the explicit two-variable Koszul resolution to resolve m. Its length-one resolution is minimal; AB gives depth m=2−1. The socle criterion gives depth k=0.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-completion-regularity-invariance

Claim: R=k[x,y]_(x,y) and its completion k[[x,y]] both have dimension and embedding dimension two, with identical quotients by every positive power of their maximal ideals.

Dependencies: ex-formal-power-series-ring-regular, lem-completion-preserves-embedding-dimension, thm-completion-preserves-dimension-and-hilbert-samuel-data.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Example 25.1 and property (6), pp.68–69.

Proof plan: Identify the quotient basis by monomials of total degree below q; for q=2 this identifies the cotangent basis; Hilbert–Samuel dimension or the completion theorem establishes dimension independently.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-hypersurface-regularity-at-a-rational-point

Claim: For 0≠f∈k[x1,…,xn] vanishing at a k-rational point a, the local hypersurface ring at a is regular iff some partial derivative of f at a is nonzero, over any field k.

Dependencies: ex-localised-polynomial-ring-regular, thm-quotient-and-lifting-regularity-across-a-regular-element.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.17, p.117; rational-point calculation removes the unnecessary algebraic-closure hypothesis.

Proof plan: Translate a to zero. The nonzero polynomial is a nonzerodivisor in the ambient regular local domain. Its linear part represents f mod m²; this is nonzero precisely when one formal partial derivative is nonzero. Apply the regular-element quotient criterion. This is only the rational-point hypersurface calculation, not a general smoothness criterion.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-regular-local-ambient-cover-minimal-dimension

Claim: If a Noetherian local ring A is a quotient of some regular local ring, the least dimension of a regular local ring surjecting onto A equals edim A.

Dependencies: lem-regular-local-regular-quotient-ideal-is-parameter-generated, lem-regular-local-quotient-by-parameter-is-regular, lem-embedding-dimension-is-minimal-maximal-ideal-generator-number.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.18, p.117.

Proof plan: For R→A=R/I, cotangent surjectivity gives dim R≥edim A. Lift a basis of (I+m²)/m² to elements of I and extend it to parameters of R. Quotient by just those parameter lifts to obtain a regular local cover of dimension edim A; no claim that A itself is regular.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

### ex-regular-flat-local-map-with-singular-closed-fibre

Claim: The map k[s]_(s)→k[t]_(t), s↦t², is finite free of rank two and local between regular DVRs, but its closed fibre k[t]/(t²) is singular.

Dependencies: ex-localised-polynomial-ring-regular, ex-dual-numbers-not-regular.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.40(iii), pp.124–125.

Proof plan: k[t] is free with basis 1,t over k[s]. After localizing the base at (s), it has unique maximal ideal (t): modulo s the quotient is local, and finite integrality forces maximal ideals to contract to (s). It therefore equals k[t]_(t). Freeness gives flatness and the fibre is the dual numbers in every characteristic.

Checkpoint: record complete; next obligation is authoring this exact claim with these hypotheses and dependency statements after the run's required source gates pass.

## Initial scaffold validation receipt (historical)

Checked during the original scaffold pass on 2026-09-07. Its source and
whole-run-policy observations are retained as history; the later `Step-3 fix
pass` receipt below supersedes them for the current batch state. All commands
ran without permission prompts.

| Check | Result |
|---|---|
| coverage-checklist --require-destination, batch 7 | PASS: 1 page, 116 harvest entries, 0 errors/warnings. |
| content-policy --manifest-only, batch 7 | PASS: 78 items, 0 errors/warnings. |
| manifest-deps, batch 7 | PASS: 78 items, 0 normalized, 0 errors. |
| manifest-deps, whole run earlier in this dispatch | PASS: 856 items at that snapshot, 0 normalized, 0 errors. |
| validate-plan research/plan-spec.json | PASS: repository plan unchanged by this dispatch; this alone does not inspect unspliced batch items. |
| validate-plan temporary spec overlay with batch 7 | PASS: 846 populated pages; no item cycles, forward references, B-leaf violations, unresolved IDs, undeclared prerequisites, or size errors. A=60/B=18. Temporary file /tmp/frontier-33-batch-7-plan-check.json is validation scratch only. |
| whole-run content-policy --manifest-only | FAIL: 920 items at final snapshot, 2 errors outside batch 7. thm-kernel-range-annihilator-identities lacks def-weak-star-topology and thm-bipolar-closure-for-linear-subspaces. Do not edit their owner’s artifacts. |
| source-fetch-check --coverage batch7 --stamp --timeout-sec 5 | FAIL: 0/13 fetch-verified, every URL returned EAI_AGAIN. No stamps written. |
| url-sweep --coverage batch7 --recover --fail-on-dead --timeout-ms 3000 | FAIL: 0/13 live, all curl exit 6 DNS failures; archive recovery also failed under the same network restriction. Browser read the original full texts. Temporary diagnostic /tmp/frontier-33-batch-7-url-liveness.json. |
| git diff --check, authorized files | PASS (these new files are untracked, so this is only a tracked-diff whitespace check; JSON parsing and content validators provide the substantive file checks). |

Remaining obligations: Stage 1 adjudicates the prerequisite-representation drift, and Step 5 must author and validate proofs with the listed source qualifications and choice ledgers. The Step-3 pass has no batch-local source, coverage, manifest-only content-policy, or plan-validation blocker; it does not alter workflow state or claim publication, an independent review, or exact-hash approval.

Artifact hashes (content identity only, not approval receipts):

- research/frontier-33-batch-7.pages.json: SHA-256 b803e68190e2449da59294310afc4092d577ca0016f0faf8c5a80081d1e754ae
- research/frontier-33-batch-7.coverage.json: SHA-256 02e1101851f74a7945117f1638a66bae6869abe94cfbd441d19da43dc51f44a2

## Step-3 fix pass

### Finding id: none issued — third, unnumbered bullet under `Direct repairs applied` in Alpha-c's Step-3 review

- **Disposition:** applied and confirmed. The review's batch-7 finding was that
  the established B companion was represented twice. The current manifest has
  exactly one `regular-local-rings-and-homological-dimension-examples` object;
  repeating the merge would create the very duplicate the finding removes.
- **Evidence:** `research/frontier-33-alpha-c-step3-scaffold-review.md`,
  "Direct repairs applied", third bullet (the review explicitly requires one
  existing B object, order `365.906`, all eighteen item ids, and their
  encounter order). The current `frontier-33-batch-7.pages.json` has two page
  objects total: the A object at `365.905` with 60 items and that sole B object
  at `365.906` with 18 items. The 78 ids are unique, and each item object has
  an explicit `deps` array.
- **Changed scaffold record:** `frontier-33-batch-7.pages.json`, B object
  `id: regular-local-rings-and-homological-dimension-examples`, field `items`.
  It is the merged record retained by this pass: the finite-regular-base
  example precedes the other 17 examples, and no page, item, dependency,
  prerequisite, source harvest, or plan record was added, removed, renamed,
  or reordered.
- **Source recheck:** all 13 recorded URLs were fetched through the web reader
  on 2026-09-07. In particular, Mustaţă's Chapter 12 TOC and §§12.1--12.4
  (including Theorems 12.31 and 12.33, Proposition 12.38), the full Stacks
  records 00NN, 090U, 031O, 030C, 02LX, 00O8, 00O9, 00OC, 00OF, and 0BHZ, and
  the recorded Li Lecture 25 and Jeffries §1.6 were available at their
  existing URLs and support the preserved regularity, AB, normality,
  completion, and example routes. No replacement source, `original_url`, or
  harvest disposition is needed.

**Validation on the final bytes (2026-09-07):**

- `node tools/coverage-checklist.mjs research/frontier-33-batch-7.coverage.json --require-destination` — PASS: 1 A page, 116 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` — PASS: 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — PASS: declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 844 planned pages with item lists. Its 511 page-level-only records are outside this batch and reported as the validator's normal note, not a batch-7 defect.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-7.coverage.json --stamp --timeout-sec 10` — PASS: 13/13 source records fetch-verified; 0 newly stamped.

## Step-5 authoring

Authoring in progress. Required inputs and group-c review read; all 76 external dependencies exist and their exact current statements were read. No existing contracts or assigned item files were present. Sources are being re-read through the web reader at the existing coverage URLs; shell download attempts failed with DNS resolution errors. No source stamp, independent review, plan, or workflow state is changed. All new content remains draft.

### Authored def-embedding-dimension-and-regular-local-ring

Claim and conventions: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated.

Dependencies: def-local-ring, def-noetherian-ring, def-krull-dimension-of-a-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.3–12.5, p.115.

Decision: retained planned scope; definition written; no proof contract required. Provenance: {"statement": "literature-derived", "proof": "not-applicable"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-embedding-dimension-is-minimal-maximal-ideal-generator-number

Claim and conventions: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{edim}R$ is the least number of generators of $\mathfrak m$.

Dependencies: def-embedding-dimension-and-regular-local-ring, cor-minimal-generators-over-a-local-ring, cor-nakayama-generators-modulo-an-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.3, p.115.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-dimension-at-most-embedding-dimension

Claim and conventions: Every nonzero commutative Noetherian local ring $R$ satisfies $\dim R\le\operatorname{edim}R<\infty$.

Dependencies: lem-embedding-dimension-is-minimal-maximal-ideal-generator-number, thm-krull-height-theorem.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Remark 12.4, p.115.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored def-regular-system-of-parameters

Claim and conventions: In a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, an ordered minimal generating tuple $(x_1,\ldots,x_d)$ of $\mathfrak m$ is a **regular system of parameters**. The tuple is empty when $d=0$. This definition concerns generators of the maximal ideal; the regular-sequence property is a theorem, not part of the definition.

Dependencies: def-embedding-dimension-and-regular-local-ring, def-system-of-parameters-and-parameter-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.5, p.115.

Decision: retained planned scope; definition written; no proof contract required. Provenance: {"statement": "literature-derived", "proof": "not-applicable"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-regular-system-of-parameters-equivalent-basis

Claim and conventions: Let $(R,\mathfrak m,k)$ be a nonzero Noetherian local ring of dimension $d$, and let $\mathbf x=(x_1,\ldots,x_d)\in\mathfrak m^d$. Then $\mathbf x$ is a regular system of parameters if and only if its classes form a $k$-basis of $\mathfrak m/\mathfrak m^2$. In particular every lift of a cotangent basis in a regular local ring generates $\mathfrak m$ and is a system of parameters.

Dependencies: def-regular-system-of-parameters, lem-embedding-dimension-is-minimal-maximal-ideal-generator-number, cor-nakayama-generators-modulo-an-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.3–12.5, p.115.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-associated-graded-polynomial-surjection

Claim and conventions: Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and let $x_1,\ldots,x_e$ lift a basis of $\mathfrak m/\mathfrak m^2$. There is a surjective graded $k$-algebra map $\phi:k[X_1,\ldots,X_e]\to\operatorname{gr}_{\mathfrak m}R$, determined by $X_i\mapsto x_i+\mathfrak m^2$, with every variable of degree one.

Dependencies: lem-embedding-dimension-is-minimal-maximal-ideal-generator-number, def-associated-graded-ring-and-module.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.1, first proof paragraph.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-regular-local-graded-surjection-has-zero-kernel

Claim and conventions: For the graded map $\phi:k[X_1,\ldots,X_e]\twoheadrightarrow\operatorname{gr}_{\mathfrak m}R$ defined by a cotangent basis in a nonzero Noetherian local ring, if $e=\dim R$, then $\ker\phi=0$.

Dependencies: lem-associated-graded-polynomial-surjection, thm-hilbert-samuel-dimension-theorem, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.1 proof; Li Proposition 25.6.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-associated-graded-ring-of-a-regular-local-ring

Claim and conventions: If $(R,\mathfrak m,k)$ is regular local of dimension $d$, any cotangent basis induces a graded isomorphism $k[X_1,\ldots,X_d]\cong\operatorname{gr}_{\mathfrak m}R$. Conversely, if the associated graded ring of a nonzero Noetherian local ring is isomorphic as a graded $k$-algebra to $k[X_1,\ldots,X_d]$ with standard grading, then $R$ is regular of dimension $d$.

Dependencies: lem-associated-graded-polynomial-surjection, lem-regular-local-graded-surjection-has-zero-kernel, thm-hilbert-samuel-dimension-theorem.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Proposition 25.6, p.67.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored cor-regular-local-hilbert-samuel-multiplicity-one

Claim and conventions: For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$ and every integer $n\ge0$, $\ell_R(R/\mathfrak m^{n+1})=\binom{n+d}{d}$. Consequently $e_{\mathfrak m}(R)=1$.

Dependencies: thm-associated-graded-ring-of-a-regular-local-ring, def-hilbert-samuel-multiplicity.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.1, monomial-count consequence.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-regular-local-domain-induction

Claim and conventions: Every regular local ring is an integral domain.

Dependencies: thm-associated-graded-ring-of-a-regular-local-ring, thm-krull-intersection-theorem.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.2.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-regular-local-parameter-is-nonzerodivisor

Claim and conventions: In a positive-dimensional regular local ring, every member of a regular system of parameters is a nonzerodivisor.

Dependencies: lem-regular-system-of-parameters-equivalent-basis, lem-regular-local-domain-induction.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.2–10.106.3.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-regular-local-quotient-by-parameter-is-regular

Claim and conventions: Let $(R,\mathfrak m,k)$ be regular local of dimension $d$, and let $x\in\mathfrak m\setminus\mathfrak m^2$. Then $R/(x)$ is regular local, of dimension and embedding dimension $d-1$.

Dependencies: lem-regular-system-of-parameters-equivalent-basis, thm-dimension-at-most-embedding-dimension, thm-dimension-as-minimal-number-of-radical-generators.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.7, p.115.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-quotient-and-lifting-regularity-across-a-regular-element

Claim and conventions: Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. If $R$ is regular and $0\ne x\in\mathfrak m$, then $R/(x)$ is regular if and only if $x\notin\mathfrak m^2$.

Dependencies: lem-regular-local-quotient-by-parameter-is-regular, thm-dimension-at-most-embedding-dimension, thm-dimension-as-minimal-number-of-radical-generators, thm-zero-divisors-on-a-module.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.8 and Exercise 12.16, pp.116–117.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-regular-local-rings-are-domains-and-cohen-macaulay

Claim and conventions: A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

Dependencies: lem-regular-local-domain-induction, lem-regular-local-parameter-is-nonzerodivisor, lem-regular-local-quotient-by-parameter-is-regular, def-cohen-macaulay-local-module-and-ring, def-regular-sequence-on-a-module, thm-depth-bounded-by-support-dimension.

Sources: https://stacks.math.columbia.edu/tag/00NN — 10.106.2–10.106.3.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-one-dimensional-regular-local-rings-are-dvrs

Claim and conventions: A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR.

Dependencies: lem-regular-local-domain-induction, lem-embedding-dimension-is-minimal-maximal-ideal-generator-number, thm-equivalent-characterisations-of-a-dvr, thm-krull-intersection-theorem.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Example 12.10, p.116.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-regular-local-regular-quotient-ideal-is-parameter-generated

Claim and conventions: Let $(R,\mathfrak m,k)$ be regular local of dimension $d$ and $I\subseteq\mathfrak m$. The following are equivalent: $R/I$ is regular; $I$ is generated by an initial part of a regular system of parameters; and $\dim_k((I+\mathfrak m^2)/\mathfrak m^2)=d-\dim(R/I)$.

Dependencies: lem-regular-local-quotient-by-parameter-is-regular, lem-regular-local-domain-induction, lem-regular-system-of-parameters-equivalent-basis.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.13, pp.116–117.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-finite-local-modules-admit-minimal-free-resolutions

Claim and conventions: Every finite module $M$ over a nonzero Noetherian local ring $(R,\mathfrak m,k)$ has an augmented resolution $\cdots\to F_1\to F_0\to M\to0$ by finite-rank free modules, with $d_i(F_i)\subseteq\mathfrak mF_{i-1}$ for $i>0$. Such a resolution is called minimal; it need not be bounded. This extends the bounded terminology without changing it.

Dependencies: def-minimal-free-resolution-over-a-local-ring, cor-minimal-generators-over-a-local-ring, thm-nakayama-lemma, thm-equivalent-characterizations-of-noetherian-modules.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Construction before Proposition 12.27, p.120.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-minimal-free-resolution-differentials-land-in-maximal-ideal

Claim and conventions: For an augmented degreewise finite free resolution over a nonzero Noetherian local ring $(R,\mathfrak m)$, minimality means that every positive differential matrix has entries in $\mathfrak m$. Equivalently no positive differential admits a unit pivot, or a nonzero two-term identity direct summand. A unit pivot can be cancelled without changing the resolved module.

Dependencies: lem-finite-local-modules-admit-minimal-free-resolutions.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Definition 1.49 and discussion after Lemma 1.50, pp.23–24.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-minimal-free-resolution-reduces-to-zero-differential

Claim and conventions: If $F_\bullet\to M$ is a minimal degreewise finite free resolution over $(R,\mathfrak m,k)$, every differential of the unaugmented complex $k\otimes_RF_\bullet$ is zero.

Dependencies: lem-minimal-free-resolution-differentials-land-in-maximal-ideal, def-balanced-tor-bifunctor.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.27 proof, p.121.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored def-betti-numbers-of-a-finite-local-module

Claim and conventions: For a finite module $M$ over a nonzero Noetherian local ring $(R,\mathfrak m,k)$ and an integer $i\ge0$, its **Betti number** is $\beta_i^R(M)=\dim_k\operatorname{Tor}_i^R(k,M)$. The action factors through $k$, and a degreewise finite free resolution makes this dimension finite. Tor is resolution-independent. This extends the Koszul rank notation: whenever a minimal Koszul resolution exists, the rank formula identifies these numbers with its Koszul Betti numbers. For $M=0$ all Betti numbers are zero.

Dependencies: def-balanced-tor-bifunctor, lem-finite-local-modules-admit-minimal-free-resolutions, def-koszul-betti-numbers-over-a-local-ring.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Unnumbered Betti-number definition after Lemma 1.50, p.24.

Decision: retained planned scope; definition written; no proof contract required. Provenance: {"statement": "literature-derived", "proof": "not-applicable"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored cor-betti-number-is-rank-in-minimal-resolution

Claim and conventions: For every minimal degreewise finite free resolution $F_\bullet\to M$ of a finite module over a nonzero Noetherian local ring, $\beta_i^R(M)=\operatorname{rank}_RF_i$ for all $i\ge0$.

Dependencies: def-betti-numbers-of-a-finite-local-module, lem-minimal-free-resolution-reduces-to-zero-differential.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.27, pp.120–121.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-minimal-free-resolutions-unique-up-to-chain-isomorphism

Claim and conventions: Any two minimal degreewise finite free resolutions of a finite module over a nonzero Noetherian local ring are augmentation-preservingly chain-isomorphic, in general noncanonically. In particular their ranks agree in every degree.

Dependencies: cor-betti-number-is-rank-in-minimal-resolution, thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-nakayama-lemma.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Remark 12.28, p.121.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-projective-dimension-from-last-nonzero-betti-number

Claim and conventions: For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

Dependencies: cor-betti-number-is-rank-in-minimal-resolution, def-projective-dimension-of-an-object, thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective, thm-finite-flat-modules-over-local-rings-are-free, lem-projective-modules-are-flat-over-an-arbitrary-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.29, p.121.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-auslander-buchsbaum-syzygy-projective-dimension

Claim and conventions: Let $0\to K\to F_0\to M\to0$ be the initial minimal presentation of a nonzero finite module over a nonzero Noetherian local ring. If $0<n=\operatorname{pd}M<\infty$, then $K\ne0$ and $\operatorname{pd}K=n-1$.

Dependencies: lem-projective-dimension-from-last-nonzero-betti-number.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.31 proof, Case 3, p.122.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-auslander-buchsbaum-base-case-free-module

Claim and conventions: If a nonzero finite module $M$ over a nonzero Noetherian local ring $R$ has projective dimension zero, then it is finite free of positive rank and $\operatorname{depth}_RM=\operatorname{depth}R$.

Dependencies: def-projective-dimension-of-an-object, thm-finite-flat-modules-over-local-rings-are-free, lem-projective-modules-are-flat-over-an-arbitrary-ring, cor-depth-as-first-nonzero-ext.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53, pd=0 case, p.24.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-minimal-free-matrix-induces-zero-on-residue-ext

Claim and conventions: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, let $\alpha:R^s\to R^t$ be a map between finite free modules all of whose matrix entries lie in $\mathfrak m$. Then $\operatorname{Ext}^i_R(k,\alpha)=0$ for every $i\ge0$.

Dependencies: def-balanced-ext-bifunctor, thm-module-categories-have-enough-injectives.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53 proof, Claim, p.25.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-auslander-buchsbaum-projective-dimension-one

Claim and conventions: If $M$ is a nonzero finite module of projective dimension one over a nonzero Noetherian local ring $R$, then $\operatorname{depth}R\ge1$ and $\operatorname{depth}M=\operatorname{depth}R-1$.

Dependencies: lem-minimal-free-matrix-induces-zero-on-residue-ext, lem-projective-dimension-from-last-nonzero-betti-number, cor-depth-as-first-nonzero-ext, thm-long-exact-ext-sequence-in-the-second-variable.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53, pp.24–25.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-auslander-buchsbaum-first-syzygy-depth

Claim and conventions: In a minimal presentation $0\to K\to F\to M\to0$ of a nonzero finite module over a nonzero Noetherian local ring, let $n=\operatorname{pd}M\ge2$ be finite. If $\operatorname{depth}K=\operatorname{depth}R-(n-1)$, then $\operatorname{depth}M=\operatorname{depth}K-1$.

Dependencies: lem-auslander-buchsbaum-syzygy-projective-dimension, thm-depth-lemma.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53, final induction step, p.25.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-auslander-buchsbaum-formula

Claim and conventions: For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Consequently such an $M$ with $\operatorname{depth}M=\operatorname{depth}R$ is free.

Dependencies: lem-auslander-buchsbaum-base-case-free-module, lem-auslander-buchsbaum-projective-dimension-one, lem-auslander-buchsbaum-syzygy-projective-dimension, lem-auslander-buchsbaum-first-syzygy-depth.

Sources: https://jack-jeffries.github.io/UM/LCnotes.pdf — Theorem 1.53, pp.24–25; Mustata 12.31.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-global-dimension-is-detected-on-cyclic-modules

Claim and conventions: For a unital ring $R$, its left global dimension equals $\sup_I\operatorname{pd}_R(R/I)$ over all left ideals $I$, and equals the supremum of the injective dimensions of all left modules. The equalities allow infinity; in the commutative Noetherian case the cyclic modules are finite.

Dependencies: def-left-and-right-global-dimension-of-a-ring, thm-baer-criterion-for-injective-modules, thm-injective-dimension-at-most-n-iff-higher-ext-vanishes, thm-projective-dimension-at-most-n-iff-higher-ext-vanishes, thm-ext-dimension-shifting-in-the-second-variable, thm-module-categories-have-enough-injectives.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Propositions 12.24–12.25, p.120.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-local-global-dimension-equals-residue-field-projective-dimension

Claim and conventions: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{gldim}R=\operatorname{pd}_Rk$, allowing infinity. If this common value is $n<\infty$, every $R$-module has projective dimension at most $n$.

Dependencies: lem-global-dimension-is-detected-on-cyclic-modules, lem-projective-dimension-from-last-nonzero-betti-number, thm-tor-symmetry-over-a-commutative-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.30, p.121.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-positive-depth-ring-has-regular-minimal-generator

Claim and conventions: If a nonzero Noetherian local ring $(R,\mathfrak m,k)$ has positive depth, then some $x\in\mathfrak m\setminus\mathfrak m^2$ is a nonzerodivisor. The residue field need not be infinite.

Dependencies: thm-depth-zero-associated-prime-criterion, thm-finiteness-of-associated-primes, thm-zero-divisors-on-a-module, lem-finite-prime-avoidance, thm-nakayama-lemma.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 proof, p.123; Lemma 5.1 variant.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-regular-element-reduction-preserves-minimal-resolution

Claim and conventions: Let $(R,\mathfrak m,k)$ be nonzero Noetherian local, let $M$ be a nonzero finite module, and let $x\in\mathfrak m$ be a nonzerodivisor on both $R$ and $M$. Reducing a minimal free resolution of $M$ modulo $x$ gives a minimal free resolution of $M/xM$ over $S=R/(x)$. Moreover $\operatorname{pd}_S(M/xM)=\operatorname{pd}_RM$, including infinity. For $M=0$ the zero-complex assertion also holds, with both projective dimensions zero.

Dependencies: lem-finite-local-modules-admit-minimal-free-resolutions, lem-projective-dimension-from-last-nonzero-betti-number, def-balanced-tor-bifunctor, thm-tor-symmetry-over-a-commutative-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Lemma 12.32 and proof of 12.31 Case 2, p.122.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-residue-field-splits-off-reduced-maximal-ideal

Claim and conventions: Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and $x\in\mathfrak m\setminus\mathfrak m^2$ a nonzerodivisor. Over $S=R/(x)$ the sequence $0\to(x)/(x\mathfrak m)\to\mathfrak m/x\mathfrak m\to\mathfrak m/(x)\to0$ splits, and $(x)/(x\mathfrak m)\cong k$. Consequently finite $\operatorname{pd}_Rk$ implies finite $\operatorname{pd}_Sk$.

Dependencies: lem-regular-element-reduction-preserves-minimal-resolution, lem-auslander-buchsbaum-syzygy-projective-dimension, thm-projective-dimension-at-most-n-iff-higher-ext-vanishes.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 proof, p.123; Jeffries 1.60.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension

Claim and conventions: If the residue field of a nonzero Noetherian local ring $R$ has finite projective dimension, then $R$ is regular and $\operatorname{depth}R=\dim R=\operatorname{edim}R$.

Dependencies: thm-auslander-buchsbaum-formula, lem-positive-depth-ring-has-regular-minimal-generator, lem-residue-field-splits-off-reduced-maximal-ideal, thm-quotient-and-lifting-regularity-across-a-regular-element, thm-regular-local-rings-are-domains-and-cohen-macaulay, lem-depth-quotient-by-regular-element.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33, p.123.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-regular-local-residue-field-koszul-resolution

Claim and conventions: For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, the Koszul complex on any regular system of parameters is a minimal free resolution of $k$ of length $d$.

Dependencies: thm-regular-local-rings-are-domains-and-cohen-macaulay, cor-koszul-complex-resolves-a-regular-quotient, lem-minimal-free-resolution-differentials-land-in-maximal-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 forward proof, p.123.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored cor-regular-local-residue-field-projective-dimension-dimension

Claim and conventions: For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, $\operatorname{pd}_Rk=d$ and $\beta_i^R(k)=\binom di$ for $0\le i\le d$, with $\beta_i^R(k)=0$ for $i>d$.

Dependencies: lem-regular-local-residue-field-koszul-resolution, lem-projective-dimension-from-last-nonzero-betti-number, cor-betti-number-is-rank-in-minimal-resolution, cor-complete-intersection-betti-numbers-binomial.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — 12.27 and 12.33, pp.121–123.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-auslander-buchsbaum-serre-regularity-criterion

Claim and conventions: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$ the following are equivalent: $R$ is regular; $\operatorname{pd}_Rk<\infty$; $\operatorname{gldim}R<\infty$; and every finite $R$-module has finite projective dimension. When these hold, $\operatorname{gldim}R=\operatorname{pd}_Rk=\dim R$. A nonzero finite module over regular local $R$ is maximal Cohen–Macaulay (depth $\dim R$) if and only if it is free.

Dependencies: lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension, cor-regular-local-residue-field-projective-dimension-dimension, lem-local-global-dimension-equals-residue-field-projective-dimension, thm-auslander-buchsbaum-formula, thm-regular-local-rings-are-domains-and-cohen-macaulay, thm-nakayama-lemma.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 and Corollary 12.30, pp.121–123.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored cor-localisations-of-regular-local-rings-are-regular

Claim and conventions: Every prime localization $R_{\mathfrak p}$ of a regular local ring $R$ is regular, and $\operatorname{edim}R_{\mathfrak p}=\operatorname{ht}\mathfrak p$.

Dependencies: thm-auslander-buchsbaum-serre-regularity-criterion, thm-localisation-of-modules-is-exact, lem-height-equals-local-dimension.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.34, p.123.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored def-regular-noetherian-ring

Claim and conventions: A commutative Noetherian ring $R$ is **regular** if for every prime ideal $\mathfrak p$, the local ring $R_{\mathfrak p}$ is regular local. This includes the zero ring vacuously. The maximal-localization test is proved in the localization and polynomial-extension theorem.

Dependencies: def-embedding-dimension-and-regular-local-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Definition 12.14 and Corollary 12.34.

Decision: retained planned scope; definition written; no proof contract required. Provenance: {"statement": "literature-derived", "proof": "not-applicable"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-flat-local-ascent-of-regularity

Claim and conventions: For a flat local map $(R,\mathfrak m)\to(S,\mathfrak n)$ of nonzero Noetherian local rings: if $R$ and $S/\mathfrak mS$ are regular, then $S$ is regular. Conversely, regularity of $S$ implies regularity of $R$; it need not imply regularity of the closed fibre.

Dependencies: thm-regular-local-rings-are-domains-and-cohen-macaulay, thm-quotient-and-lifting-regularity-across-a-regular-element, def-flat-and-faithfully-flat-modules-and-ring-maps, thm-auslander-buchsbaum-serre-regularity-criterion, lem-finite-local-modules-admit-minimal-free-resolutions, lem-projective-dimension-from-last-nonzero-betti-number.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.40(i), p.124; https://stacks.math.columbia.edu/tag/00OF — Lemma 10.110.9 full proof (minimal-resolution version of its syzygy argument).

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-polynomial-local-regularity-fibre-step

Claim and conventions: For a prime $\mathfrak q\subset R[t]$ with contraction $\mathfrak p\subset R$, the closed fibre of $R_{\mathfrak p}\to R[t]_{\mathfrak q}$ is $k(\mathfrak p)[t]$ localized at a prime. That prime is either zero, giving a field, or generated by an irreducible polynomial, giving a DVR. In both cases the fibre is regular.

Dependencies: thm-one-dimensional-regular-local-rings-are-dvrs, thm-euclidean-domain-is-a-pid, cor-polynomial-ring-over-a-field-is-euclidean.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.36 proof, p.124.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-localisation-and-polynomial-extension-of-regular-rings

Claim and conventions: Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. More generally, for a finite module over any commutative Noetherian ring, projective dimension is the supremum of its prime-local projective dimensions. Dedekind domains and their finite polynomial extensions are regular.

Dependencies: cor-localisations-of-regular-local-rings-are-regular, def-regular-noetherian-ring, lem-flat-local-ascent-of-regularity, lem-polynomial-local-regularity-fibre-step, cor-finite-variable-polynomial-ring-noetherian, thm-localisation-of-modules-is-exact, cor-finite-flat-noetherian-modules-are-projective, thm-flatness-is-local, thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective, lem-global-dimension-is-detected-on-cyclic-modules, lem-dedekind-localisation-at-nonzero-prime-is-dvr, lem-projective-modules-are-flat-over-an-arbitrary-ring, thm-auslander-buchsbaum-serre-regularity-criterion.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.34 and Proposition 12.36, pp.123–124; https://websites.umich.edu/~mmustata/CAnotes.pdf — Corollary 12.35, pp.123–124.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-completion-preserves-embedding-dimension

Claim and conventions: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, its maximal-adic completion $\widehat R$ has maximal ideal $\widehat{\mathfrak m}=\mathfrak m\widehat R$, residue field $k$, and a canonical isomorphism $\mathfrak m/\mathfrak m^2\cong\widehat{\mathfrak m}/\widehat{\mathfrak m}^{,2}$. In particular their embedding dimensions agree.

Dependencies: def-embedding-dimension-and-regular-local-ring, thm-completion-of-a-noetherian-local-ring, cor-completion-commutes-with-finite-quotients-and-submodules.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, completion properties (1), (5), (6), pp.68–69.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-completion-preserves-regular-local-rings

Claim and conventions: A nonzero Noetherian local ring $R$ is regular if and only if its maximal-adic completion $\widehat R$ is regular.

Dependencies: lem-completion-preserves-embedding-dimension, thm-completion-preserves-dimension-and-hilbert-samuel-data.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, property (6), p.69.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored def-normal-noetherian-ring

Claim and conventions: A commutative Noetherian ring $R$ is **normal** if every prime localization $R_{\mathfrak p}$ is an integrally closed domain. This is a local condition and does not require $R$ itself to be a domain. The zero ring satisfies it vacuously. For a domain, integrally closed means that every element of its fraction field integral over it belongs to it.

Dependencies: def-integral-closure-and-integrally-closed-domain.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Definition 8.34 and Remarks 8.35–8.36, p.56.

Decision: retained planned scope; definition written; no proof contract required. Provenance: {"statement": "literature-derived", "proof": "not-applicable"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored def-serre-r-k-and-s-k-conditions

Claim and conventions: For a commutative Noetherian ring $R$ and an integer $j\ge0$, condition $(R_j)$ means that $R_{\mathfrak p}$ is regular whenever $\operatorname{ht}\mathfrak p\le j$. Condition $(S_j)$ means that $\operatorname{depth}R_{\mathfrak p}\ge\min\{j,\dim R_{\mathfrak p}\}$ for every prime $\mathfrak p$. A finite module $M$ satisfies $(S_j)$ if $\operatorname{depth}_{R_{\mathfrak p}}M_{\mathfrak p}\ge\min\{j,\dim\operatorname{Supp}_{R_{\mathfrak p}}M_{\mathfrak p}\}$ for every prime in its support. Outside the support the condition is vacuous, consistent with depth of the zero module being $+\infty$ and the empty support having no nonnegative dimension. Thus the zero module satisfies all $(S_j)$ conditions, and the zero ring satisfies both families vacuously.

Dependencies: def-embedding-dimension-and-regular-local-ring, def-depth-with-respect-to-an-ideal, def-height-of-a-prime-ideal.

Sources: https://stacks.math.columbia.edu/tag/031O — Definition 10.157.1.

Decision: retained planned scope; definition written; no proof contract required. Provenance: {"statement": "literature-derived", "proof": "not-applicable"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored cor-regular-local-ring-satisfies-r-one

Claim and conventions: Every regular local ring satisfies $(R_1)$. Its height-zero localizations are fields, and its height-one localizations are DVRs.

Dependencies: def-serre-r-k-and-s-k-conditions, cor-localisations-of-regular-local-rings-are-regular, thm-one-dimensional-regular-local-rings-are-dvrs.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.5, R1 implication.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored cor-regular-local-ring-satisfies-s-two

Claim and conventions: Every regular local ring satisfies $(S_j)$ for every integer $j\ge0$, in particular $(S_2)$.

Dependencies: def-serre-r-k-and-s-k-conditions, cor-localisations-of-regular-local-rings-are-regular, thm-regular-local-rings-are-domains-and-cohen-macaulay.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.5, S2 implication.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-normal-domain-implies-r-one

Claim and conventions: Every commutative Noetherian integrally closed domain satisfies $(R_1)$.

Dependencies: def-serre-r-k-and-s-k-conditions, thm-height-one-localisation-of-normal-noetherian-domain-is-dvr, thm-one-dimensional-regular-local-rings-are-dvrs.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.4 forward implication.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-normal-domain-implies-s-two

Claim and conventions: Every commutative Noetherian integrally closed domain satisfies $(S_2)$.

Dependencies: def-serre-r-k-and-s-k-conditions, thm-normality-is-local-for-domains, thm-depth-zero-associated-prime-criterion, lem-depth-quotient-by-regular-element, thm-krull-height-theorem.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Lemma 8.40 proof, pp.56–57 (normal hypothesis required); 8.41.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-r-one-s-two-intersection-of-height-one-localisations

Claim and conventions: If $R$ is a commutative Noetherian domain satisfying $(S_2)$, then inside its fraction field $K$ one has $R=\bigcap_{\operatorname{ht}\mathfrak p=1}R_{\mathfrak p}$. For a field the empty intersection is interpreted as $K=R$.

Dependencies: def-serre-r-k-and-s-k-conditions, thm-lasker-noether-primary-decomposition, lem-associated-primes-from-a-minimal-primary-decomposition, lem-depth-quotient-by-regular-element, thm-depth-zero-associated-prime-criterion, thm-associated-primes-localise.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 8.41 proof, pp.57–58; Stacks 10.157.6(1)–(2).

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-r-one-s-two-integral-element-membership

Claim and conventions: A commutative Noetherian $(S_2)$ domain whose height-one localizations are DVRs is integrally closed.

Dependencies: lem-r-one-s-two-intersection-of-height-one-localisations, thm-valuation-ring-is-integrally-closed.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 8.41 final proof paragraph, p.58.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored cor-serre-normality-criterion-two-directions

Claim and conventions: A commutative Noetherian domain is normal if and only if it satisfies $(R_1)$ and $(S_2)$. Equivalently its integral closedness is characterized by these two conditions.

Dependencies: lem-normal-domain-implies-r-one, lem-normal-domain-implies-s-two, lem-r-one-s-two-integral-element-membership, thm-one-dimensional-regular-local-rings-are-dvrs, thm-normality-is-local-for-domains.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 8.41 and Lemma 8.40, pp.56–58.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-serre-r-zero-s-one-characterises-reducedness

Claim and conventions: For a finite module $M$ over a commutative Noetherian ring, $(S_1)$ is equivalent to every associated prime being minimal in $\operatorname{Supp}M$. For the ring itself, this means no embedded associated primes. A commutative Noetherian ring is reduced if and only if it satisfies $(R_0)$ and $(S_1)$.

Dependencies: def-serre-r-k-and-s-k-conditions, thm-depth-zero-associated-prime-criterion, thm-zero-divisors-on-a-module, thm-existence-of-associated-primes, thm-noetherian-ring-has-finitely-many-minimal-primes, cor-radical-ideals-as-intersections-of-minimal-primes-noetherian, thm-associated-primes-localise, lem-finite-prime-avoidance, thm-minimal-support-primes-are-associated.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.2–10.157.3.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored def-total-ring-of-fractions

Claim and conventions: For a nonzero commutative ring $R$, let $S$ be the set of its nonzerodivisors, meaning elements whose multiplication maps on $R$ are injective. Its **total ring of fractions** is $Q(R)=S^{-1}R$. The set $S$ is multiplicative since composites of injective multiplication maps are injective. The natural map $R\to Q(R)$ is injective: $a/1=0$ implies $sa=0$ for some $s\in S$, hence $a=0$. Set $Q(0)=0$. For a domain this recovers the fraction field; for a ring with zero divisors it need not be a field.

Dependencies: def-multiplicative-subset-and-localisation.

Sources: https://stacks.math.columbia.edu/tag/030C — 10.37.16 proof, total fraction ring used there.

Decision: retained planned scope; definition written; no proof contract required. Provenance: {"statement": "literature-derived", "proof": "not-applicable"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-reduced-noetherian-total-fractions-and-normal-components

Claim and conventions: For a reduced commutative Noetherian ring $R$ with minimal primes $\mathfrak p_1,\ldots,\mathfrak p_s$, there is a canonical isomorphism $Q(R)\cong\prod_{i=1}^s\operatorname{Frac}(R/\mathfrak p_i)$. The following are equivalent: $R$ is normal; $R$ is integrally closed in $Q(R)$; and $R$ is a finite product of normal domains. For $R=0$ this is the empty product.

Dependencies: def-total-ring-of-fractions, def-normal-noetherian-ring, thm-noetherian-ring-has-finitely-many-minimal-primes, cor-radical-ideals-as-intersections-of-minimal-primes-noetherian, thm-normality-is-local-for-domains, thm-chinese-remainder-theorem-for-comaximal-ideals, lem-finite-prime-avoidance.

Sources: https://stacks.math.columbia.edu/tag/030C — 10.37.16, full proof; https://stacks.math.columbia.edu/tag/02LX — Lemma 10.25.4, full proof.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored lem-depth-two-excludes-finite-punctured-extension

Claim and conventions: Let $(R,\mathfrak m)$ be reduced Noetherian local with $\operatorname{depth}R\ge2$. If $R\subseteq B\subseteq Q(R)$ is a finite intermediate ring and $\operatorname{Supp}_R(B/R)\subseteq\{\mathfrak m\}$, then $B=R$.

Dependencies: def-total-ring-of-fractions, thm-depth-lemma, thm-depth-zero-associated-prime-criterion, thm-support-and-annihilator-of-a-finite-module.

Sources: https://stacks.math.columbia.edu/tag/0BHZ — 10.119.2 last proof paragraph, restricted finite-extension rigidity.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-serre-normality-criterion

Claim and conventions: For every commutative Noetherian ring $R$, including rings with zero divisors and the zero ring, $R$ is normal if and only if it satisfies $(R_1)$ and $(S_2)$.

Dependencies: def-normal-noetherian-ring, cor-serre-normality-criterion-two-directions, lem-serre-r-zero-s-one-characterises-reducedness, lem-reduced-noetherian-total-fractions-and-normal-components, lem-depth-two-excludes-finite-punctured-extension.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.4 complete proof, with 030C and 0BHZ.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-regular-local-rings-are-normal

Claim and conventions: Every regular local ring is an integrally closed domain. Every commutative regular Noetherian ring is normal and is a finite product of regular domains, with the zero ring corresponding to the empty product.

Dependencies: lem-regular-local-domain-induction, cor-regular-local-ring-satisfies-r-one, cor-regular-local-ring-satisfies-s-two, thm-serre-normality-criterion, thm-localisation-and-polynomial-extension-of-regular-rings.

Sources: https://stacks.math.columbia.edu/tag/031O — 10.157.5.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-finite-regular-local-base-cohen-macaulay-freeness

Claim and conventions: Let $A\hookrightarrow B$ be an injective finite local map of nonzero Noetherian local rings, with $A$ regular. Then $B$ is Cohen–Macaulay if and only if it is free as an $A$-module.

Dependencies: thm-auslander-buchsbaum-formula, thm-auslander-buchsbaum-serre-regularity-criterion, cor-dimension-preserved-by-integral-extensions, cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module, cor-one-regular-system-of-parameters-implies-cohen-macaulay, thm-regular-local-rings-are-domains-and-cohen-macaulay, thm-depth-bounded-by-support-dimension, thm-nakayama-lemma.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.41, p.125; https://jack-jeffries.github.io/UM/LCnotes.pdf — Corollary 1.63, p.27.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-fields-as-regular-local-rings

Claim and conventions: Every field $k$ is regular local with dimension and embedding dimension zero. Conversely every zero-dimensional regular local ring is a field. Its regular system is empty and its residue field has a free resolution concentrated in degree zero.

Dependencies: def-embedding-dimension-and-regular-local-ring, thm-nakayama-lemma.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Example 12.6, p.115.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-dvrs-as-regular-local-rings

Claim and conventions: A DVR $R$ with uniformizer $t$ and residue field $k$ is regular local of dimension one, with regular system $(t)$ and $\operatorname{gr}_{(t)}R\cong k[T]$.

Dependencies: thm-one-dimensional-regular-local-rings-are-dvrs, thm-associated-graded-ring-of-a-regular-local-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Example 12.10, p.116.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-localised-polynomial-ring-regular

Claim and conventions: For a field $k$ and integers $0\le r\le n$, the ring $R=k[x_1,\ldots,x_n]_{(x_1,\ldots,x_r)}$ is regular local of dimension $r$, with residue field $k(x_{r+1},\ldots,x_n)$ and regular system $(x_1,\ldots,x_r)$.

Dependencies: thm-localisation-and-polynomial-extension-of-regular-rings, thm-dimension-at-most-embedding-dimension.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Example 12.37, p.124.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-formal-power-series-ring-regular

Claim and conventions: For every field $k$ and integer $n\ge0$, $k[[x_1,\ldots,x_n]]$ is a Noetherian regular local ring of dimension $n$, with maximal ideal generated by the variables and residue field $k$.

Dependencies: thm-localisation-and-polynomial-extension-of-regular-rings, thm-completion-preserves-regular-local-rings, lem-completion-preserves-embedding-dimension, thm-completion-of-a-noetherian-local-ring, thm-completion-preserves-dimension-and-hilbert-samuel-data.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Example 25.1 and completion properties (1),(5),(6), pp.68–69.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-dual-numbers-not-regular

Claim and conventions: For every field $k$, the dual-number ring $R=k[\varepsilon]/(\varepsilon^2)$ is local with $\dim R=0$ and $\operatorname{edim}R=1$, so is not regular.

Dependencies: def-embedding-dimension-and-regular-local-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Definitions 12.3–12.5 and Example 12.6, p.115.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-cusp-local-ring-not-regular

Claim and conventions: For every field $k$, the cusp local ring $R=(k[x,y]/(y^2-x^3))_{(x,y)}$ has dimension one and embedding dimension two, hence is not regular.

Dependencies: thm-quotient-and-lifting-regularity-across-a-regular-element, lem-associated-graded-polynomial-surjection.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Propositions 25.6–25.8, pp.67–68.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-betti-numbers-from-a-koszul-resolution

Claim and conventions: For $R=k[x,y]_{(x,y)}$, the augmented complex $0\to R\xrightarrow{c\mapsto(-yc,xc)}R^2\xrightarrow{(a,b)\mapsto xa+yb}R\to k\to0$ is a minimal free resolution. Thus $\beta(k)=(1,2,1)$, with all higher Betti numbers zero.

Dependencies: lem-regular-local-residue-field-koszul-resolution, cor-betti-number-is-rank-in-minimal-resolution, thm-localisation-and-polynomial-extension-of-regular-rings.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33 proof, p.123.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-residue-field-infinite-projective-dimension-singular

Claim and conventions: For $R=k[\varepsilon]/(\varepsilon^2)$, its residue field $k$ has an infinite minimal free resolution with one copy of $R$ in every degree and every positive differential multiplication by $\varepsilon$. Consequently $\beta_i^R(k)=1$ for all $i\ge0$ and $\operatorname{pd}_Rk=\infty$.

Dependencies: lem-projective-dimension-from-last-nonzero-betti-number, cor-betti-number-is-rank-in-minimal-resolution.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.27 and Corollary 12.29, p.121.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-embedding-dimension-versus-dimension-node

Claim and conventions: For every field $k$, the split node $R=(k[x,y]/(xy))_{(x,y)}$ is reduced and has dimension one and embedding dimension two. It is neither a domain nor regular.

Dependencies: thm-dimension-at-most-embedding-dimension, def-embedding-dimension-and-regular-local-ring.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Propositions 25.6–25.8, pp.67–68.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-associated-graded-polynomial-map-singular-kernel

Claim and conventions: For the cusp local ring $R=(k[x,y]/(y^2-x^3))_{(x,y)}$ with maximal ideal $\mathfrak m$, the associated graded ring is $k[X,Y]/(Y^2)$. Thus the polynomial map defined by the cotangent classes has kernel exactly $(Y^2)$.

Dependencies: lem-associated-graded-polynomial-surjection, thm-associated-graded-ring-of-a-regular-local-ring.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Proposition 25.6 and its graded-map proof, p.67.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-minimal-resolution-unit-cancellation

Claim and conventions: Over $R=k[x]_{(x)}$, the free resolution $0\to R^2\xrightarrow{\operatorname{diag}(x,1)}R^2\to R/(x)\to0$, with augmentation $(a,b)\mapsto a\bmod x$, contracts to the minimal resolution $0\to R\xrightarrow{x}R\to R/(x)\to0$.

Dependencies: lem-minimal-free-resolution-differentials-land-in-maximal-ideal.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — §12.2 minimal-resolution construction and Remark 12.28, pp.120–121.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-betti-numbers-residue-field-regular-ring

Claim and conventions: For $R=k[x,y,z]_{(x,y,z)}$, the residue field has Betti numbers $(1,3,3,1)$ and projective dimension three.

Dependencies: lem-regular-local-residue-field-koszul-resolution, cor-betti-number-is-rank-in-minimal-resolution, cor-regular-local-residue-field-projective-dimension-dimension.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.33, p.123.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-auslander-buchsbaum-first-syzygy

Claim and conventions: For $R=k[x,y]_{(x,y)}$ with maximal ideal $\mathfrak m$, $\operatorname{pd}_Rk=2$, $\operatorname{depth}_Rk=0$, and its first syzygy satisfies $\operatorname{pd}_R\mathfrak m=1$ and $\operatorname{depth}_R\mathfrak m=1$.

Dependencies: lem-auslander-buchsbaum-syzygy-projective-dimension, thm-auslander-buchsbaum-formula, cor-regular-local-residue-field-projective-dimension-dimension, thm-localisation-and-polynomial-extension-of-regular-rings.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Theorem 12.31 and Theorem 12.33, pp.121–123.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-completion-regularity-invariance

Claim and conventions: The ring $R=k[x,y]_{(x,y)}$ and its completion $k[[x,y]]$ both have dimension and embedding dimension two. For every $q\ge1$, their quotients by the $q$th powers of the maximal ideals agree and have basis the monomials of total degree less than $q$.

Dependencies: lem-completion-preserves-embedding-dimension, thm-completion-preserves-regular-local-rings, thm-completion-of-a-noetherian-local-ring, thm-completion-preserves-dimension-and-hilbert-samuel-data.

Sources: https://www.math.columbia.edu/~wenqili/commalg_notes.pdf — Lecture 25, Example 25.1 and property (6), pp.68–69.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-hypersurface-regularity-at-a-rational-point

Claim and conventions: Let $k$ be any field, $a\in k^n$, and $0\ne f\in k[x_1,\ldots,x_n]$ with $f(a)=0$. The local hypersurface ring at $a$ is regular if and only if at least one formal partial derivative $\partial f/\partial x_i$ is nonzero at $a$.

Dependencies: thm-localisation-and-polynomial-extension-of-regular-rings, thm-quotient-and-lifting-regularity-across-a-regular-element.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.17, p.117; rational-point calculation removes the unnecessary algebraic-closure hypothesis.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-regular-local-ambient-cover-minimal-dimension

Claim and conventions: If a nonzero Noetherian local ring $A$ is a quotient of at least one regular local ring, then the least dimension of a regular local ring surjecting onto $A$ is $\operatorname{edim}A$.

Dependencies: lem-regular-local-regular-quotient-ideal-is-parameter-generated, lem-regular-local-quotient-by-parameter-is-regular, lem-embedding-dimension-is-minimal-maximal-ideal-generator-number.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.18, p.117.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored ex-regular-flat-local-map-with-singular-closed-fibre

Claim and conventions: For every field $k$, the local map $k[s]_{(s)}\to k[t]_{(t)}$, $s\mapsto t^2$, is finite free of rank two between regular DVRs. Its closed fibre is $k[t]/(t^2)$ and is not regular.

Dependencies: thm-localisation-and-polynomial-extension-of-regular-rings, def-embedding-dimension-and-regular-local-ring.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Exercise 12.40(iii), pp.124–125.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "ai-generated", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

### Authored thm-quotient-and-lifting-regularity-across-a-regular-element

Claim and conventions: Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. If $R$ is regular and $0\ne x\in\mathfrak m$, then $R/(x)$ is regular if and only if $x\notin\mathfrak m^2$.

Dependencies: lem-regular-local-quotient-by-parameter-is-regular, thm-dimension-at-most-embedding-dimension, thm-dimension-as-minimal-number-of-radical-generators, thm-zero-divisors-on-a-module, lem-regular-local-domain-induction, thm-minimal-support-primes-are-associated.

Sources: https://websites.umich.edu/~mmustata/CAnotes.pdf — Proposition 12.8 and Exercise 12.16, pp.116–117.

Decision: retained planned scope; local proof and item-specific contract written. Provenance: {"statement": "literature-derived", "proof": "ai-altered"}. Validation: pending focused batch checks. Next action: continue the assigned dependency order, then run required validators. 

Repair checkpoint — thm-quotient-and-lifting-regularity-across-a-regular-element: clarified the exact hypothesis/citation boundary and supplied direct dependencies . Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — lem-projective-dimension-from-last-nonzero-betti-number: clarified the exact hypothesis/citation boundary and supplied direct dependencies thm-nakayama-lemma, def-balanced-tor-bifunctor. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — lem-regular-element-reduction-preserves-minimal-resolution: clarified the exact hypothesis/citation boundary and supplied direct dependencies thm-nakayama-lemma. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — cor-regular-local-ring-satisfies-r-one: clarified the exact hypothesis/citation boundary and supplied direct dependencies lem-embedding-dimension-is-minimal-maximal-ideal-generator-number. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — lem-r-one-s-two-intersection-of-height-one-localisations: clarified the exact hypothesis/citation boundary and supplied direct dependencies thm-existence-of-associated-primes. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — lem-depth-two-excludes-finite-punctured-extension: clarified the exact hypothesis/citation boundary and supplied direct dependencies thm-nakayama-lemma. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — thm-serre-normality-criterion: clarified the exact hypothesis/citation boundary and supplied direct dependencies thm-one-dimensional-regular-local-rings-are-dvrs, thm-valuation-ring-is-integrally-closed, lem-embedding-dimension-is-minimal-maximal-ideal-generator-number, thm-dimension-at-most-embedding-dimension. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — thm-regular-local-rings-are-normal: clarified the exact hypothesis/citation boundary and supplied direct dependencies lem-reduced-noetherian-total-fractions-and-normal-components. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — ex-formal-power-series-ring-regular: clarified the exact hypothesis/citation boundary and supplied direct dependencies thm-dimension-at-most-embedding-dimension. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — ex-cusp-local-ring-not-regular: clarified the exact hypothesis/citation boundary and supplied direct dependencies thm-dimension-at-most-embedding-dimension. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — ex-betti-numbers-residue-field-regular-ring: clarified the exact hypothesis/citation boundary and supplied direct dependencies thm-dimension-at-most-embedding-dimension. Current item body is authoritative; contracts and focused validators are being refreshed.

Repair checkpoint — ex-completion-regularity-invariance: clarified the exact hypothesis/citation boundary and supplied direct dependencies thm-dimension-at-most-embedding-dimension. Current item body is authoritative; contracts and focused validators are being refreshed.

### Step-5 completion and validation

Completed all 78 manifest IDs (the 60 A items and 18 B items individually checkpointed above) and both planned pages at `library/commutative-algebra/regular-local-rings-and-homological-dimension.md` and `library/commutative-algebra/regular-local-rings-and-homological-dimension-examples.md`. The final manifest records the exact authored claims and dependencies. All 80 item/page files have `status: draft`; none contains a judge record. The 71 proof-bearing items have completed proof contracts; the seven definitions need no proof contract. Earlier “pending” checkpoint statuses are superseded by the results below.

Provenance rationale: sourced statements retain literature-derived provenance, while independently written/reorganized proofs are marked ai-altered. The 17 generated illustrative examples retain ai-generated statement provenance and explicit `generation.role: example`; the finite regular-base Cohen–Macaulay/freeness example remains literature-derived. Generated example statements are not dependency targets. Scaffold references between generated examples were replaced by the exact A-page results actually used, with the coordinate calculations written in each example. Full facts reproduce the cited target's hypotheses and conclusion, and contracts retain exact source-section quotations and actual proof-step uses. Canonical phase repairs were adopted and contract step references updated with them. Power-series brackets use render-safe TeX spacing.

Claim decisions: no planned ID was dropped and no page was split. The regular-element quotient theorem explicitly includes the dimension-drop equality used by its examples; Auslander–Buchsbaum retains the nonzero finite-module hypothesis, and the zero module is treated separately where appropriate. Normal-domain arguments retain normality (including the missing normal hypothesis in the printed Mustaţă Lemma 8.40 wording); the intersection lemma only needs S2, and full Serre normality includes reduced rings with multiple components and the zero ring. Fields are excluded from “DVR.” Direct dependencies were supplied for Nakayama, associated primes, dimension bounds, the valuation criterion, and the normal-component argument where the written proofs use them. No finite smoke calculation is presented as proof.

Source verification: the current original coverage URLs were read through the web reader, including Mustaţă Chapters 8 (§§8.40–8.41) and 12, Jeffries §1.6, Li Lecture 25, and Stacks tags 00NN, 090U, 031O, 030C, 02LX, 0BHZ, 00O8, 00O9, 00OC and 00OF. Exact item locators remain in the manifest and individual checkpoints. The shell DNS failures did not prevent these web reads. Coverage stamps and independent alpha reviews were preserved.

Checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 78 explicit `items/ID.md` arguments from this manifest: final exit 0; 71 proof-bearing items checked, 0 failing. Initial canonical-repair findings were applied before rerunning.
- `node tools/validate-plan.mjs`: bare invocation reports usage because this CLI requires a plan argument. The concrete invocation `node tools/validate-plan.mjs research/plan-spec.json` exited 0: no item cycles, forward references, B-page dependencies, or unresolved IDs among 892 populated pages. Existing redundant-prerequisite warnings and the note about 463 unpopulated planned pages remain; no plan was edited.
- `node tools/content-policy.mjs research/frontier-33-batch-7.pages.json`: final exit 0; 78 scoped items, 0 errors, 0 warnings. Initial provenance-parser findings were corrected by using block-style nested YAML.
- `node tools/proof-contract.mjs research/frontier-33-batch-7.proof-contracts.json --strict`: final exit 0; 71/71 checked, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs` with the 78 explicit item paths and both page paths: final exit 0; 80 files, all math parsed with real KaTeX and all frontmatter parsed with the renderer's YAML parser. Delimiter and power-series bracket findings were repaired before the final run.
- Explicit status/judge-record inspection: 80/80 draft, zero judge records.

Unresolved authoring obligations and blockers: none identified. Step-5 authoring is complete; subsequent review and publication remain owner/workflow actions. No judgment, verification stamp, plan transition, or publication was performed.

### Gate repair checkpoint

`thm-completion-preserves-regular-local-rings` F1 now reproduces the completed maximal-ideal square as `\widehat{\mathfrak m}^2`, closing the refuter and proof-contract citation mismatch. The theorem and the two dependent example citation quotations match `lem-completion-preserves-embedding-dimension` exactly. Reflow was unchanged; focused precheck/render, strict contract, citation fidelity, content policy, and the refreshed author receipt pass.
