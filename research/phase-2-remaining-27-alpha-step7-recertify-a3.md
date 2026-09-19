# Step 7 combined recertification — group a, batches 12 and 13

Run: `phase-2-remaining-27`  
Dispatch: `step7-a` / `alpha-adjudicate`  
Items:

- `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`
- `def-coadjoint-representation-of-a-lie-group`

## Verdicts

### `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`

Verified and re-issued with byte-identical mathematical content. The five-part
claim, hypotheses, dependency interfaces, boundary cases, numbered proof,
citations, and external locators are sound. The item and Batch-12 manifest still
carry the corrected locators left by the earlier targeted dispatch:

- Knapp, Chapter II §§4–5, especially Corollary 2.38 and Theorem 2.42;
- Kirillov, §§6.6–7.4, especially Theorems 6.45, 7.3, and 7.16.

The live proof-contract entry quotes the current supplier clauses and records
the genuine zero-Lie-algebra boundary case. Its derivations agree with the item.
In particular, the trace calculation gives
`B(H_alpha,H_alpha)=4/sum_beta beta(h_alpha)^2>0`; the real coroot span is a
real form; restriction identifies the real root span with its real dual; and
the Killing form transports to the asserted Euclidean inner product. Reflection
stability, integrality, reducedness, and the simple-root basis then give parts
(iv) and (v). For the zero semisimple algebra all spaces are zero and the root
set and simple base are empty, so no root-length denominator is formed.

The no-op reissue preserved both hashes exactly:

- `itemHashGuard`: `e67a3704df714f205f77f43744d9eb5233c389eb1141569f2a85dff8c10dbbdc`
- raw SHA-256: `a242ab5bb612c180e8683d9ee60b461ed8fe09228b670b92f5aedbe8ff84bda7`

No item, contract, manifest, dependency-ledger, or defect-ledger content was
changed.

Files read for this item:

- `items/prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system.md`
- `research/phase-2-remaining-27-batch-12.proof-contracts.json`
- `research/phase-2-remaining-27-batch-12.pages.json`
- `research/phase-2-remaining-27-audit-manifest.json`
- `research/phase-2-remaining-27-batch-12.cross-batch-dependencies.json`
- `research/phase-2-remaining-27-cross-batch-dependencies.json`
- `items/def-axiom-of-choice.md`
- `items/thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra.md`
- `items/def-root-and-root-space-relative-to-a-cartan-subalgebra.md`
- `items/thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional.md`
- `items/prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra.md`
- `items/prop-killing-form-orthogonality-of-root-spaces.md`
- `items/def-killing-dual-vector-of-a-root.md`
- `items/lem-killing-length-of-a-root-is-nonzero.md`
- `items/def-coroot-of-a-lie-algebra-root.md`
- `items/cor-cartan-integers-are-integral.md`
- `items/def-killing-form-of-a-finite-dimensional-lie-algebra.md`
- `items/def-toral-and-maximal-toral-subalgebra.md`
- `items/thm-trace-is-sum-of-eigenvalues.md`
- `items/thm-root-reflections-preserve-the-root-set.md`
- `items/def-root-reflection-from-a-coroot.md`
- `items/thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system.md`
- `items/cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root.md`
- `items/def-reduced-crystallographic-euclidean-root-system.md`
- `items/def-positive-system-and-base-of-simple-roots.md`
- `items/thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates.md`

Sources consulted:

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, digital second
  edition, <https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf>,
  Chapter II §§4–5. Corollary 2.38 proves the real-form, restriction, and
  positive-definiteness assertions; Proposition 2.41 and Theorem 2.42 give the
  reflection and reduced abstract-root-system assertions.
- Alexander Kirillov Jr., *An Introduction to Lie Groups and Lie Algebras*,
  <https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf>,
  §§6.6–7.4. Theorem 6.45 gives the coroot real form and positive Killing form,
  Theorem 7.3 identifies the reduced root system, and Theorem 7.16 and
  Corollary 7.18 give the simple-root basis and integral one-sign coordinates.

Blocker: none.

### `def-coadjoint-representation-of-a-lie-group`

Verified and re-issued with byte-identical mathematical content. The item still
declares `AC_omega`, the nine dependencies required by its smooth-action and
infinitesimal-field interface, and the exact use of countable choice. Its
Batch-13 manifest mirror has the same statement, dependency list, provenance,
locators, and `axiom_base: ZF+AC_omega`.

The definition is mathematically consistent with the library convention. From
`Ad*_g alpha = alpha o Ad_{g^{-1}}`, direct composition gives a smooth left
action. Under the library's fundamental-field convention
`t -> exp(-t xi) · alpha`, differentiation uses
`Ad_{exp(t xi)}=exp(t ad_xi)` and yields
`xi_{g*}(alpha)(eta)=alpha([xi,eta])`. This is the negative of the usual
derived coadjoint representation under the source convention, exactly as
required by the library's `exp(-t xi)` generator. The zero covector, abelian,
disconnected, and zero-dimensional cases are covered as stated.

Because this is a definition with `proof: not-applicable`, the Batch-13
proof-contract correctly has no entry owned by this item. All 47 proof-bearing
entries in that contract pass strict validation, including the current quoted
passages that use this definition.

The no-op reissue preserved both hashes exactly:

- `itemHashGuard`: `1d57eb9542cbcba5bb83e6d1d3bb1e8948154fb7681133cf48873a66865cbe3a`
- raw SHA-256: `469ae8585ecea27a49522a01338f09ece2f9121814e6e8970ad5e3408b175f09`

No item, contract, manifest, dependency-ledger, or defect-ledger content was
changed.

Files read for this item:

- `items/def-coadjoint-representation-of-a-lie-group.md`
- `research/phase-2-remaining-27-batch-13.proof-contracts.json`
- `research/phase-2-remaining-27-batch-13.pages.json`
- `research/phase-2-remaining-27-audit-manifest.json`
- `research/phase-2-remaining-27-batch-13.cross-batch-dependencies.json`
- `research/phase-2-remaining-27-cross-batch-dependencies.json`
- `items/def-countable-choice.md`
- `items/def-conjugation-and-the-adjoint-representation-of-a-lie-group.md`
- `items/prop-adjoint-is-a-smooth-lie-group-representation.md`
- `items/def-algebraic-dual-and-linear-functional.md`
- `items/def-smooth-left-action-of-a-lie-group.md`
- `items/def-orbit-stabilizer-and-orbit-map-of-a-smooth-action.md`
- `items/def-lie-group.md`
- `items/def-fundamental-vector-field-of-a-left-action.md`
- `items/prop-adjoint-exponential-identity.md`

Sources consulted:

- Eckhard Meinrenken, *Symplectic Geometry*,
  <https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf>,
  §7.1.4, Definition 7.5, Remark 7.6, and §7.3 Remark 7.13(b), printed
  pages 79–84. These passages give the group coadjoint action, its usual
  infinitesimal representation, and the `exp(-t xi)` generating-field
  convention needed for the sign conversion.
- Ana Cannas da Silva, *Lectures on Symplectic Geometry*,
  <https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf>, Lecture 21,
  §21.5, printed pages 131–132. This defines the coadjoint action with
  `g^{-1}`, explains that the inverse makes it a left representation, and
  records the composition law and orbit examples.

Blocker: none.

## Governing and continuity files read

- `CLAUDE.md`
- `README.md`
- `SCHEMA.md`
- `WORKFLOW.md`
- `briefs/tasks/frontier-dependency-ledger.md`
- `research/phase-2-remaining-27-alpha-groups.json`
- `research/phase-2-remaining-27-alpha-a-step7-recertify-3.task.md`
- `research/phase-2-remaining-27-step7-bundle-a.md`
- `research/phase-2-remaining-27-alpha-step7-recertify-a.md`
- `research/phase-2-remaining-27-alpha-step7-recertify-a2.md`
- `.autopilot/phase-2-remaining-27/status.md`

## Focused validation

- explicit item precheck: PASS (`1 checked, 0 failing`; the definition has no
  proof-bearing precheck unit)
- targeted rendercheck: PASS (`2 files`)
- strict Batch-12 proof contract for the proposition: PASS (`1/1`, 0 errors,
  0 warnings)
- strict Batch-13 proof contract: PASS (`47/47`, 0 errors, 0 warnings)
- Batch-12 and Batch-13 manifest dependency shape: PASS (`232 items`, 0 errors)
- targeted citecheck: PASS (`2 items`)
- Batch-12 content policy: PASS (`115 items`, 0 errors, 0 warnings)
- audit-manifest reconstruction: PASS (`8515 relationships`: 948 cross-batch,
  4386 published-backward, 3181 same-batch)
- manifest integrity: PASS (`54/54` pages, no scope drift)
- exact post-reissue hashes and focused `git diff --check`: PASS

Batch-13 content policy remains blocked by the unrelated existing
`notation-iota-applied` error in
`ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map`; neither
assigned item is named. Whole-repository depcheck likewise remains blocked by
the eight unrelated existing B-leaf/item-cycle/page-cycle errors. Those
out-of-scope failures do not leave uncertainty in either assigned carrier and
were not edited here.

