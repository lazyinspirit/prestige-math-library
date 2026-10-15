# Step 3a Reader Report — batch 37

Run: physics-td-qft-rpm-62-2026-10-14  
Role: reader  
Scope: batch 37

The run remained active in 3a-read when checked; no worker was running for this
batch. This is a read-only reader assignment, so I made no edits to item or
page content. The unresolved findings below are recorded for owner disposition.

## Opened inventory

Assigned pages:

- library/quantum-field-theory-mathematics/qft-mf01.md
- library/quantum-field-theory-mathematics/qft-mf01-examples.md

Assigned item carriers, in logical supplier/consumer order:

1. items/def-qft-fock-and-test-spaces.md
2. items/lem-qft-hermite-graph-core-for-position.md
3. items/lem-qft-l2-product-tensor-identification.md
4. items/lem-qft-fock-ccr-car.md
5. items/lem-qft-fock-one-mode-splitting.md
6. items/lem-qft-second-quantized-spectrum.md
7. items/lem-qft-segal-weyl-domain.md
8. items/ex-qftmath-mode-domain.md

I opened the exact definitions or theorem statements for all 47 direct
mathematical dependencies named by the assigned items. All 47 are currently
published in the physics supplier workspace:

- Definitions: def-adjoint-of-a-densely-defined-unbounded-operator,
  def-completed-product-measure, def-complex-exponential,
  def-complex-l-two-inner-product, def-countable-choice,
  def-densely-defined-closed-and-closable-operator,
  def-finite-sigma-finite-and-semifinite-measures,
  def-fourier-transform-on-l-one-of-rn, def-hilbert-space,
  def-l-p-space-as-a-quotient-by-null-functions, def-lambda-system,
  def-measurable-rectangle, def-measure-space,
  def-orthogonality-and-orthogonal-complement, def-pi-system,
  def-product-measure-on-sigma-finite-spaces,
  def-product-sigma-algebra-and-finite-product-sigma-algebras,
  def-projection-valued-measure, def-real-and-complex-inner-product-space,
  def-schwartz-space-and-its-seminorms,
  def-symmetric-self-adjoint-and-essentially-self-adjoint,
  def-tempered-distribution, def-test-function-space-d-of-an-open-set,
  def-test-function-topology, and def-unbounded-linear-operator-domain-and-graph.
- Corollaries and lemmas: cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
  cor-uniqueness-of-the-l-one-fourier-transform,
  lem-cauchy-product-of-absolutely-convergent-complex-series,
  lem-complex-conjugation-and-modulus-laws,
  lem-complex-exponential-series-converges-everywhere,
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization,
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space,
  lem-nrqm-composites-bounded-tensor-maps,
  lem-nrqm-composites-hilbert-tensor-construction,
  lem-nrqm-composites-permutation-sector-projections, and
  lem-orthogonal-complement-is-closed.
- Theorems: thm-complex-exponential-addition-and-real-extension,
  thm-continuity-from-below-for-measures, thm-dominated-convergence,
  thm-double-orthogonal-complement-is-closure, thm-dynkin-pi-lambda,
  thm-fatou-lemma, thm-nrqm-oscillator-hermite-completeness,
  thm-nrqm-oscillator-hermite-recurrence,
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique,
  thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p,
  and thm-tonelli-and-fubini-for-completed-product-measures.

The manifest has no external in-run dependency; its cross-batch dependency record
is empty. Internal assigned dependencies are within the eight-item inventory.

I reviewed the seven proof-bearing item contracts' citation/step mappings and
risk summaries against the current carriers. I also read the batch notes,
author-check, cross-batch dependency record, and generated beta task as
context only; none was treated as a verdict. The stale beta task did not alter
the manifest scope. Both page summaries were checked against their item lists
and current contents.

## Source checks

I inspected relevant PDF passages through the web reader for these cited
author-hosted sources:

- Dereziński, Mathematical Introduction to Quantum Field Theory: §§5.2,
  5.4–5.5 (Hilbert direct sums, Fock sectors, and sector creation/annihilation
  formulas; PDF pp. 32–36); §5.9 (Fock-space factorization; pp. 39–40);
  §§7.4 and 7.7 (Weyl operators and the Fock vacuum; pp. 56–59); and §1.5
  (joint spectrum of strongly commuting self-adjoint operators; printed p. 7).
  https://www.fuw.edu.pl/~derezins/qft-lectures.pdf
- Teschl, Mathematical Methods in Quantum Mechanics, §8.3, printed pp. 178–179:
  oscillator ladder formulas and Hermite eigenfunctions.
  https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
- Tong, Quantum Field Theory, §2.4, printed pp. 29–30: multiparticle Fock
  states and the number operator.
  https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
- Dyatlov, Lecture Notes for MIT 18.155, §11.2.1, printed pp. 125–126:
  tempered distributions as continuous functionals on Schwartz space.
  https://math.mit.edu/~dyatlov/18.155/155-notes.pdf

The local graph-core, product-L2, Fock-domain, one-mode, multiplier,
Segal-field, Weyl, and example arguments were checked from their displayed
hypotheses and local proofs. The source-fetch record described in the batch
notes has no mutool fetch stamp; my direct PDF reading above is not a local
fetch stamp or a full-text audit of every cited source.

## Findings that I could not edit

1. **def-qft-fock-and-test-spaces — unlicensed tensor extension.** At the
   Definition, lines 93–98, the bosonic and fermionic annihilation maps use
   C_h tensor I and state that its bounded tensor extension is supplied by
   lem-nrqm-composites-bounded-tensor-maps. That supplier requires its input
   operator to be bounded. The definition does not prove or cite the needed
   bound for C_h(v)=⟨h,v⟩₂; Cauchy–Schwarz gives it, but it is not in the
   listed dependencies or a justified_by result. The later
   lem-qft-fock-ccr-car derives this bound at step 1.2, but depends on the
   definition that already uses the extension, so it does not license the
   original construction. The definition needs the estimate
   |C_h(v)| ≤ ||h|| ||v|| and the scalar-factor identification for
   C ⊗̂ H^{⊗(n−1)}, or an exact supplier establishing both.

2. **lem-qft-second-quantized-spectrum — overstrong title.** The title at
   frontmatter line 4 promises a “joint spectrum.” The body constructs a joint
   projection-valued measure and identifies coordinate multipliers, but does
   not define or characterize the set called the joint spectrum. Dereziński
   §1.5, printed p. 7, defines joint spectrum for strongly commuting
   self-adjoint operators using nonzero joint spectral projections of every
   coordinate-neighborhood box. The item neither states that criterion nor
   gives the resulting set. Retitle it to the joint spectral measure it
   actually constructs, or add the definition and proof of the spectrum claim.

No other defect was confirmed in the assigned items or page summaries. The
Hermite weighted-density argument, product-L2 surjectivity, creation and
annihilation domain calculations, one-mode normalization, second-quantized
multiplier and derivative calculations, Segal/Weyl formulas, and the
square-summable example witness follow from their stated premises. The source
and mathematics supplier statements directly needed for those checks were
consistent with their use.

## Edits, page verdicts, and blocker

- Item/page edits: none. This is a read-only reader dispatch.
- qft-mf01: the summary matches its seven assigned entries, but the A page has
  the unresolved definition-construction and title findings above.
- qft-mf01-examples: the summary and convergence/divergence witness are
  accurate. It has no independent prose or computation defect; final
  disposition remains contingent on the upstream Fock-definition finding in
  its dependency closure.
- No reflow, precheck, or proof-layout command was run because no item changed.
  No tests were run.
- Blocker: two fatal in-scope item findings remain for owner/repair disposition.

## Coverage note

I checked all eight assigned items, both pages, all 47 direct published
mathematical dependency statements, and the listed source passages. I did not
independently re-audit the transitive proofs beneath those published
mathematical suppliers, nor did I inspect every page of each cited book. No
cross-batch in-run dependency was present, so there is no observed in-run
dependency byte finding.
