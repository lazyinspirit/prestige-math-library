# Step 8 — fatal-only adjudication of the paired-judge verdicts, run `frontier-15`

Lead Alpha (Claude Opus 5, `xhigh`, 1M window). 2026-08-17.

Baseline `pre-step8` (2026-08-17T03:13:01.925Z). Every rejection in
`research/frontier-15-judge.jsonl` under the current `deepseek+sonnet` lineup was
read against the frozen verdict and the text on disk, and adjudicated. The
machine-readable record is `research/frontier-15-judge-adjudications.jsonl`, one
row per (id, model).

## Outcome

| | |
|---|---|
| current rejections adjudicated | **145 / 145** (115 distinct items) |
| `confirmed_fatal` | **6 rows / 5 distinct defects** (4.1% of rejections) |
| `confirmed_nonfatal` | 137 |
| `false_positive` | 2 |
| items edited | **5**, all licensed |
| defect-ledger rows written | 5 (`frontier-15-S8-01` … `-05`) |

Rejections are not the finding, and neither is the rate. DeepSeek raised 92 and
sonnet 53; **five** were defects that had to be repaired. Both lanes independently
found one of them (`thm-extension-generated-by-separable-elements-is-separable`);
the other four came from DeepSeek alone, and sonnet found none that DeepSeek
missed. Lane overlap was 30 items of 115.

Since sonnet shares the Anthropic family with me, I weighted its findings for
same-family agreement as CLAUDE.md requires. It made no difference to the
outcome: no sonnet-only rejection was fatal, and the one sonnet fatal was also
DeepSeek's.

## The rule I applied, stated so it can be checked

Only a `confirmed_fatal` licenses an edit, and the owner's 30-second threshold
decides what is fatal. I read it as follows, and applied it uniformly:

**Fatal** — (a) a title, Statement or Definition that is false or claims more
than the proof delivers; (b) an inference that does not follow, or a case not
covered; (c) an `[L#]` restatement asserting something its source does **not**
establish, where the surplus is load-bearing and is not itself closable in
30 seconds; (d) a missing hypothesis or an unavailable choice principle; (e) an
invalid witness.

**Nonfatal** — anything a competent reader closes in 30 seconds, which on this
level is overwhelmingly citation bookkeeping: a step whose tag omits a fact
printed in the item's own Facts block; an `[L#]` that *shortens* its source and
drops a clause the source does contain; a named library result used without
being declared in `deps`. The owner's rule covers gaps *between steps*, and that
is what these are. The four-way split the ledger's own enum makes —
`citation-inflated` / `-truncated` / `-missing` / `-misattributed` — is the same
distinction: fabrication is a defect in the text, abbreviation is a gap in it.

The calibration check: `frontier-13`/`14` resolved 41%/31%/33% rejection rates to
2.7%/7% confirmed fatal. 4.1% here sits inside that band, which is weak evidence
that the threshold was applied at the same place as before.

## The five fatal defects, and what changed

### S8-01 · `cor-algebraic-closures-are-isomorphic-over-the-base` — overstrong title
*deepseek-v4-pro; `false-or-overstrong-title`, location title.*

The title read "…are base-isomorphic, **generally nonuniquely**" and the
Statement repeated it as "Such an isomorphism generally need not be unique."
Step 3.1 says the opposite about its own reach: "The argument proves existence
only and makes no uniqueness assertion." The item is `landmark: true`, so the
false half of the claim was reader-facing on the flowchart. This is the owner's
named fatal shape — a title asserting more than the proof gives, which the
judges cannot see because they read Statements.

**Repair (narrow, owner repair 3).** Title now ends at "base-isomorphic";
Statement now says "No uniqueness of the isomorphism is asserted."

**The claim is not lost.** `fs-algebraic-closure-is-unique-up-to-unique-isomorphism`,
on the same pair, actually *proves* nonuniqueness: it exhibits a nonidentity
ℚ-automorphism of an algebraic closure of ℚ carrying a root of $x^2+1$ to its
negative. Its own `[L4]` already restated this corollary as existence only, so
the narrowed Statement and its one consumer now agree exactly — I checked that
consumer before editing, and the repair improved rather than broke it.

### S8-02 · `thm-separable-closures-exist-and-are-isomorphic-over-the-base` — overstrong Statement
*deepseek-v4-pro; `false-or-overstrong-statement`.*

Same shape, same page: "Any two separable closures are $F$-isomorphic, generally
nonuniquely", against step 2.2's "The construction does not assert uniqueness."
The proof builds one $F$-embedding and shows it is onto. Unlike S8-01 the
scaffold title was clean, so this clause was added at authoring.

**Repair.** Statement narrowed to "…are $F$-isomorphic. No uniqueness of the
isomorphism is asserted."

### S8-03 · `thm-extension-generated-by-separable-elements-is-separable` — circular inference
*deepseek-v4-pro **and** claude-sonnet-5; `invalid-inference`, location proof-step.*
*The only defect both lanes found, and both stated it precisely.*

Step 1.2 built the tower $F\subseteq F(s_1)\subseteq\cdots$, showed only that
each generator $s_j$ has separable minimal polynomial over the preceding field,
and then applied `[L1]` (`thm-separability-is-transitive`) to conclude the whole
subextension is separable over $F$. Transitivity needs each adjacent extension to
be separable **elementwise**; getting that from "the generator is separable" is
the one-generator case of the very theorem being proved. The proof did not
establish its claim.

**Repair (write the proof afresh, owner repair 2).** The structure was wrong, not
the wording, so I replaced the argument with the separable-degree route the
library already supports — and which its sibling `thm-separability-is-transitive`
uses for the identical move, on the same page: each step's relative minimal
polynomial divides a separable one and so has as many distinct roots as its
degree, giving $[E_j:E_{j-1}]_s=[E_j:E_{j-1}]$; multiplicativity and the tower law
give $[E:F]_s=[E:F]$; `thm-finite-extension-is-separable-iff-separable-degree-is-full`
concludes.

Checks I owed on this one and ran: the six added dependencies are acyclic with
respect to this theorem (verified by transitive closure over all `deps`, not by
inspection); the three published ones precede it in reading order, so no forward
reference is created; `thm-separability-is-transitive` was **removed** from `deps`
because the corrected proof does not use it, an unused edge being a defect in its
own right. `precheck` returned a REPAIR stratification, which I adopted verbatim
(my 1.3/2.1/3.1 became 2.1/3.1/4.1) and re-ran to clean.

### S8-04 · `cor-cokleisli-and-coeilenberg-moore-…` — the duality is inverted
*deepseek-v4-pro; `false-or-overstrong-statement`.*

The Statement dualised **both** universal properties the wrong way round: it made
co-Eilenberg–Moore the adjunction that factors into every adjunction inducing the
comonad, and every adjunction factor into co-Kleisli — that is, co-EM initial and
co-Kleisli terminal. Both are backwards.

The evidence is on the item's own page. Its `[L3]` states the monad case
correctly ("a unique morphism of adjunctions **from** the Kleisli adjunction and a
unique morphism of adjunctions **to** the Eilenberg–Moore adjunction"), and the
sibling `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties`
says the same. Step 2.1's justification — that passing to opposite categories
"reverses the two comparison directions" — is false: an adjunction $L\dashv R$
inducing $G$ on $\mathcal C$ becomes $R^{\mathrm{op}}\dashv L^{\mathrm{op}}$
inducing $G^{\mathrm{op}}$ on $\mathcal C^{\mathrm{op}}$, and a morphism of
adjunctions $K$ becomes $K^{\mathrm{op}}$ between the same two adjunctions in the
same order. Directions are preserved. Riehl's Proposition 5.2.13, the item's own
cited source, dualises to co-Kleisli initial and co-EM terminal — which is also
what the cofree comparison $\mathcal C_G\to\mathcal C^G$ exhibits.

**Repair.** Statement corrected to mirror the sibling's exact shape; step 2.1's
false sentence replaced by the explicit translation, including why the directions
are preserved.

### S8-05 · `fs-subgroups-of-equal-p-power-order-are-conjugate` — invalid witness
*deepseek-v4-pro; `invalid-witness`, location proof-step.*

The refutation's two witnesses were the subgroups of $S_4$ generated by $(12)$ and
$(12)(34)$. The item's own `[L2]` quotes
`def-finite-symmetric-group-and-permutation-notation`, which fixes
$S_n=\operatorname{Sym}(\{0,\dots,n-1\})$ — so the symbol 4 is not in the domain
and $(12)(34)$ names no element of the group. The item contradicted a fact printed
on its own page, and since a false-statement item *is* its counterexample, the
refutation had no second witness.

**Repair.** Relabelled into the library's 0-based, thin-space cycle notation:
$(0\,1)$ and $(0\,1)(2\,3)$ — different cycle types, both in
$\operatorname{Sym}(\{0,1,2,3\})$.

**I checked this was an instance, not a class.** A detector over all 392 items of
the level found exactly one out-of-range permutation symbol, this one, so the
repair leaves the level internally consistent rather than half-converted. The same
detector, pointed at matrix indices, found the opposite result — see the residue
section.

## The two false positives, with the evidence that refutes them

**`thm-sylow-characterizations-of-finite-nilpotence`** (deepseek): "L6 asserts
Cauchy's theorem yields a subgroup of order p, but the cited item only gives an
element." L6 reads "contains an element, **and hence** a subgroup, of order $p$".
The "hence" marks the subgroup clause as a derivation, not an attribution, and
$\langle g\rangle$ is that subgroup. Nothing is attributed to the source that the
source lacks.

**`thm-goursat-theorem-one-exceptional-point`** (deepseek): "if $p$ is a vertex of
$T$ the three subtriangle boundaries do not cancel to $\partial T$." I computed
the vertex case $p=a$ directly. The three integrals sum to
$2I(\ell_{ab})+I(\ell_{ba})+I(\ell_{bc})+2I(\ell_{ca})+I(\ell_{ac})+2I(\ell_{aa})$,
which reduces by `[L2]` to $I(\ell_{ab})+I(\ell_{bc})+I(\ell_{ca})=I_f(T)$: the
duplicated edges do cancel. The same computation works for $p$ on an edge and for
$p$ interior. In any case step 3.1 already discharges every nondegenerate triangle
having $p$ as a vertex, so step 4.1 is redundant there rather than circular.

## The 137 nonfatal rejections

Per page, with every id named. Full per-rejection rows, including each
`context_sha256` and the pre-edit `item_sha256`, are in
`research/frontier-15-judge-adjudications.jsonl`.

**abstract-algebra/algebraic-closure-embeddings-and-separability** — 31 rejection(s), 20 nonfatal item(s), 3 fatal

  nonfatal: cor-finite-purely-inseparable-extensions-have-prime-power-degree, cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction, cor-separable-and-purely-inseparable-extension-is-trivial, cor-separable-degree-is-at-most-extension-degree, cor-separable-degree-of-a-simple-extension-counts-distinct-roots, def-inseparable-degree, def-separable-degree, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed, lem-restriction-fibres-for-embeddings-in-a-finite-tower, lem-simple-finite-extension-has-finitely-many-intermediate-fields, prop-base-field-embeddings-carry-elements-to-conjugates, thm-algebraic-embedding-extension, thm-finite-extension-is-separable-iff-separable-degree-is-full, thm-finite-normal-closures-exist-and-are-finite, thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions, thm-perfect-field-characterizations, thm-pure-inseparability-is-transitive-and-stable-under-composita, thm-separable-degree-is-independent-of-the-algebraic-closure, thm-universal-property-of-a-polynomial-ring-on-a-family
  fatal: cor-algebraic-closures-are-isomorphic-over-the-base, thm-extension-generated-by-separable-elements-is-separable, thm-separable-closures-exist-and-are-isomorphic-over-the-base

**abstract-algebra/chain-conditions-and-semisimple-modules-examples** — 7 rejection(s), 6 nonfatal item(s)

  nonfatal: ex-infinite-binary-product-ring-is-not-noetherian, ex-length-of-z-modulo-p-to-the-k, ex-matrix-ring-decomposition-into-minimal-left-ideals, ex-product-of-two-fields-is-semisimple, ex-quadratic-algebraic-integers-and-one-half, fs-right-noetherian-rings-are-left-noetherian

**abstract-algebra/chain-conditions-and-semisimple-modules** — 16 rejection(s), 13 nonfatal item(s)

  nonfatal: cor-finite-direct-sums-preserve-chain-conditions, cor-length-is-additive-in-short-exact-sequences, cor-semisimple-rings-are-noetherian-and-artinian, def-noetherian-ring, def-semisimple-module, thm-chain-conditions-in-short-exact-sequences, thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices, thm-finite-length-semisimple-module-characterizations, thm-matrix-rings-over-division-rings-are-semisimple, thm-schurs-lemma-for-modules, thm-socle-is-the-largest-semisimple-submodule, thm-submodules-and-quotients-of-semisimple-modules, thm-wedderburn-artin-theorem

**abstract-algebra/sylow-theorems-and-nilpotent-groups-examples** — 11 rejection(s), 7 nonfatal item(s)

  nonfatal: ex-fitting-and-frattini-subgroups-of-s-three, ex-groups-of-order-thirty, ex-p-cores-fitting-and-frattini-subgroups-of-s-four, ex-sylow-data-for-groups-of-order-at-most-fifteen, ex-sylow-subgroups-of-affine-group-modulo-five, ex-sylow-subgroups-of-gl-two-over-a-finite-prime-field, ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared

**abstract-algebra/sylow-theorems-and-nilpotent-groups** — 34 rejection(s), 22 nonfatal item(s), 1 fatal, 1 false positive

  nonfatal: cor-classification-of-groups-of-order-one-hundred-five, cor-frattini-subgroup-is-contained-in-the-fitting-subgroup, def-fitting-subgroup-of-a-finite-group, def-p-complement, fs-converse-of-lagrange-for-finite-groups, fs-finite-nilpotent-and-solvable-groups-coincide, fs-groups-of-order-forty-two-have-a-normal-sylow-two-subgroup, fs-unique-sylow-subgroup-forces-a-direct-product, lem-distinct-normal-sylow-subgroups-commute, lem-finite-nilpotence-via-normal-sylow-subgroups, lem-frattini-subgroup-nongenerator-characterization, lem-wielandt-sylow-binomial-valuation, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, thm-fitting-subgroup-of-the-frattini-quotient, thm-frattini-argument, thm-groups-of-order-forty-five-are-abelian, thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup, thm-groups-of-order-thirty-have-a-normal-sylow-subgroup, thm-maximal-subgroups-of-finite-nilpotent-groups, thm-nilpotence-is-detected-modulo-the-frattini-subgroup, thm-normalizer-condition-for-finite-nilpotent-groups, thm-normalizer-of-a-sylow-normalizer
  fatal: fs-subgroups-of-equal-p-power-order-are-conjugate
  false positive: thm-sylow-characterizations-of-finite-nilpotence

**category-theory/monads-comonads-and-their-algebras-examples** — 6 rejection(s), 5 nonfatal item(s)

  nonfatal: cex-an-algebra-that-is-not-free, ex-the-closure-operator-monad-on-a-topological-space, ex-the-double-contravariant-power-set-monad, ex-the-free-abelian-group-monad, ex-the-ultrafilter-monad-on-a-finite-set

**category-theory/monads-comonads-and-their-algebras** — 15 rejection(s), 13 nonfatal item(s), 1 fatal

  nonfatal: cor-comonads-on-a-preorder-are-interior-operators, cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad, fs-every-functor-with-a-left-adjoint-is-monadic, lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural, lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial, thm-a-monadic-functor-is-conservative, thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory, thm-the-covariant-power-set-monad, thm-the-eilenberg-moore-adjunction-induces-the-given-monad, thm-the-free-monoid-monad-and-its-algebras-are-monoids, thm-the-inclusion-of-a-reflective-subcategory-is-monadic, thm-the-kleisli-adjunction-induces-the-given-monad, thm-the-ultrafilter-monad-is-a-monad
  fatal: cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties

**complex-analysis/goursat-and-cauchys-theorem-in-a-convex-domain-examples** — 1 rejection(s), 1 nonfatal item(s)

  nonfatal: cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral

**complex-analysis/goursat-and-cauchys-theorem-in-a-convex-domain** — 6 rejection(s), 5 nonfatal item(s), 1 false positive

  nonfatal: cor-cauchy-theorem-star-shaped-domain, def-oriented-complex-triangle-and-boundary, lem-cauchy-difference-quotient-exceptional-extension, thm-cauchy-integral-formula-higher-derivatives, thm-goursat-triangle-theorem
  false positive: thm-goursat-theorem-one-exceptional-point

**measure-theory/sigma-algebras-and-borel-sets-examples** — 1 rejection(s), 1 nonfatal item(s)

  nonfatal: ex-closed-rays-form-a-borel-generating-pi-system

**measure-theory/sigma-algebras-and-borel-sets** — 5 rejection(s), 5 nonfatal item(s)

  nonfatal: thm-generated-sigma-algebra-exists-and-is-minimal, thm-infinite-sigma-algebra-has-continuum-many-members, thm-seven-generators-of-the-borel-sigma-algebra-on-r, thm-sigma-algebra-generated-by-a-countable-partition, thm-trace-is-a-sigma-algebra

**number-theory/quadratic-reciprocity-and-the-jacobi-symbol-examples** — 4 rejection(s), 3 nonfatal item(s)

  nonfatal: cex-jacobi-symbol-one-does-not-imply-a-square, ex-primes-dividing-x-squared-plus-three, ex-square-roots-modulo-a-composite-by-crt

**number-theory/quadratic-reciprocity-and-the-jacobi-symbol** — 4 rejection(s), 4 nonfatal item(s)

  nonfatal: def-jacobi-symbol, lem-gauss-lower-half-lattice-count, prop-jacobi-symbol-well-defined, thm-jacobi-map-kernel-and-square-subgroup

**topology/the-fundamental-group-of-the-circle-examples** — 1 rejection(s), 1 nonfatal item(s)

  nonfatal: ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop

**topology/the-fundamental-group-of-the-circle** — 3 rejection(s), 2 nonfatal item(s)

  nonfatal: cor-degree-descends-to-circle-loop-classes, thm-degree-map-on-the-circle-is-a-homomorphism

### What the class actually is

Nearly all 137 are one defect shape wearing four hats. The dominant one, and the
one worth a mechanism, is the **citation-tag pattern**: step 1.1 carries every
`[L#]` the item declares, and steps 2.1 onward carry only
`[step 1.1, given, algebra]` even where they use a specific named fact printed
three lines above. Both lanes flagged it independently on
`cor-classification-of-groups-of-order-one-hundred-five`,
`thm-groups-of-order-thirty-…`, `thm-frattini-argument`,
`thm-fitting-subgroup-of-the-frattini-quotient`, `thm-wedderburn-artin-theorem`,
`thm-socle-…`, `thm-submodules-and-quotients-…` and a dozen more. It is nonfatal
item by item — the fact is on the page — and it is the single largest reason this
level drew 145 rejections. It is mechanically detectable and was not detected.

## Honest residue — what I found and did not repair

Step 8 is fatal-only, so everything below is recorded, not fixed. It is real work
for step 9, a later pass, or an owner decision.

**1. Twenty-six items are missing a real `deps` edge.** A judge named an existing
library id that appears in neither the item's `deps` nor its Facts block. These are
candidates, not a total — three of the twenty-six name a *sibling that cites the
fact* rather than the missing dependency itself (`lem-reciprocity-rectangle-lattice-count`,
`cor-finite-extension-of-a-perfect-field-is-simple`, and
`thm-sylow-characterizations-of-finite-nilpotence` in the maximal-subgroups row).
The list is `/tmp` scratch reproduced here because it is the actionable part:

`cor-polynomial-ring-on-a-finite-family-…` → `thm-polynomial-ring-on-a-family-is-a-commutative-ring`;
`cor-separable-degree-is-at-most-extension-degree` and `lem-simple-finite-extension-…` → `thm-simple-algebraic-extension-quotient-power-basis-and-degree`;
`def-fitting-subgroup-of-a-finite-group` → `lem-product-with-normal-subgroup`;
`def-inseparable-degree` → `def-separable-degree`;
`ex-closed-rays-form-a-borel-generating-pi-system` → `thm-generated-sigma-algebra-comparison-criterion`;
`ex-groups-of-order-thirty` → `lem-distinct-normal-sylow-subgroups-commute`, `thm-internal-external-semidirect-product-equivalence`;
`ex-infinite-binary-product-ring-is-not-noetherian` → `def-noetherian-module`;
`ex-the-closure-operator-monad-…` → `def-interior-closure-boundary-top`;
`fs-groups-of-order-forty-two-…` → `cor-sylow-subgroup-normal-iff-unique`;
`fs-right-noetherian-rings-are-left-noetherian` → `cor-finite-direct-sums-preserve-chain-conditions`;
`fs-unique-sylow-subgroup-forces-a-direct-product` → `prop-canonical-subgroups-of-an-external-semidirect-product`;
`lem-frattini-subgroup-nongenerator-characterization` → `def-maximal-subgroup-of-a-group`;
`lem-gauss-lower-half-lattice-count` → `thm-euclids-lemma`;
`lem-one-step-root-extension-…` and `lem-restriction-fibres-…` → `thm-finite-field-extensions-are-algebraic` (and `thm-evaluation-kernel-and-minimal-polynomial`);
`prop-jacobi-symbol-well-defined` → `thm-generalised-associativity`;
`thm-chain-conditions-in-short-exact-sequences` → `thm-third-isomorphism-theorem-modules` (and the first isomorphism theorem, which both lanes named);
`thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup` → `thm-sylow-first-theorem`;
`thm-matrix-rings-over-division-rings-are-semisimple` → `def-semisimple-module`;
`thm-seven-generators-…` → `lem-subset-of-countable`;
`thm-the-eilenberg-moore-adjunction-…` and `thm-the-free-monoid-monad-…` → `def-t-algebra-and-algebra-homomorphism`;
`thm-the-inclusion-of-a-reflective-subcategory-is-monadic` → `thm-fully-faithful-split-essentially-surjective-characterises-equivalence`;
`thm-the-kleisli-adjunction-…` → `thm-equivalent-encodings-of-an-adjunction`;
`thm-degree-map-on-the-circle-is-a-homomorphism` → `thm-fundamental-group-laws` (both lanes: the Statement calls `Deg` a group homomorphism, and nothing cited makes $\pi_1(S^1,[0])$ a group; `def-based-loops-and-fundamental-group` calls it a "fundamental group **set**" with a "**proposed**" multiplication).

Each is nonfatal — the target exists and a reader closes the step — but together
they are a dependency graph that understates what the level rests on, which is
what `depcheck`, the flowchart and the reader-facing `requires` are built from.

**2. A matrix-index convention drift across three items, not one.** DeepSeek
flagged `ex-matrix-ring-decomposition-into-minimal-left-ideals` for using
$e_{jj}$, $j=1,\dots,n$, when `def-matrix-units` fixes $i<m$, $j<n$ — so $e_{nn}$
is undefined and $e_{00}$ omitted. I ran the detector across the level rather than
fixing the instance: **`ex-matrix-ring-decomposition-into-minimal-left-ideals`,
`thm-matrix-rings-over-division-rings-are-semisimple` and
`fs-semisimple-rings-are-commutative` all use 1-based matrix indexing**, agreeing
with each other and disagreeing with the published definition. Only one was
judged. Repairing that one would have fixed an instance and shipped the class,
so I repaired none: this is a convention decision over a coherent cluster, and
`def-matrix-units` or the three items should move together.

**3. Precision residue worth a step-6-grade pass, recorded but untouched.**
- `thm-trace-is-a-sigma-algebra` — step 2.1 starts from a sequence already written
  as $(A_n\cap Y)$, i.e. it selects preimages; that is $\mathrm{AC}_\omega$, and
  the item declares no choice hypothesis while three siblings on the level declare
  theirs in their titles. Nonfatal because countable choice is an adopted axiom of
  this library, so the proof is licensed; the missing declaration is a precision
  defect, not a licence defect.
- `def-oriented-complex-triangle-and-boundary` — "Reversing the order of two
  vertices reverses the orientation" is loose under the item's own "up to
  increasing reparametrization": $\partial\Delta[b,a,c]$ is a cyclic rotation of
  the reversal, not the reversal, and DeepSeek's degenerate case $a=b$ is a real
  instance. It is true in the sense anything uses (integrals negate), and I
  confirmed **no item in the library consumes the sentence**.
- `ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop` — the Facts block
  jumps from `[L1]` to `[L3]`; there is no `[L2]`. Not a judge finding; noticed
  while reading.
- `ex-sylow-data-for-groups-of-order-at-most-fifteen` — the order-1 row says "no
  Sylow subgroup", which is true of what the table lists (primes dividing $|G|$)
  and false read literally, since the trivial subgroup is a Sylow $p$-subgroup of
  the trivial group for every $p$ under `def-sylow-p-subgroup` with $a=0$.

## Blocker — the `defect-ledger check` gate is red for a pre-existing reason

`node tools/defect-ledger.mjs check --run frontier-15 --adjudications … --closure …`
fails with two errors, **both predating this stage**. I confirmed that by re-running
the check against the ledger with my five rows removed: the same two errors, same
text.

```
frontier-15-B41 is open in the ledger but rem-plane-star-shaped-and-convex-dictionary,
  Lebl ca.pdf archive snapshot is not open in the closure receipt — one of them is stale
f15-a-rr-005 is open in the ledger but 518 boundary rows across 88 batch-2 items … is
  not open in the closure receipt — one of them is stale
```

Both rows are `severity: nonfatal, disposition: open`, caught at `6b-adjudicate`.
Clause (d) of the gate cross-checks **every** `disposition: open` row against
`closure.open_fatal`, but that field is populated only from `confirmed_fatal`
adjudications. A nonfatal open row therefore can never satisfy it: the gate is
permanently red while any nonfatal defect is left open.

This is not mine to decide at step 8, and the gate runs at `8-adjudicate`,
`8-rejudge`, `9-scope` and `10-report`, so the engine will block on it. Two
remedies, and they are genuinely different decisions:

1. **Narrow the predicate** — filter clause (d) on `severity === 'fatal'`, matching
   the field's name and the comment above it ("two blockers once lived only in
   markdown" is about fatal blockers). One line plus a test.
2. **Close the two rows** — decide that a nonfatal defect should never be left
   `open`, and dispose of the archive-snapshot and the batch-2 boundary-row
   findings properly. That is step-6/9 work on those two specific defects.

I did not do either. Changing a gate that governs my own stage in order to make it
green is the anti-pattern the brief warns about, and choosing between these two is
an owner call about what `open` is supposed to mean.

**Secondary, smaller:** `defect-ledger.mjs`'s `caught_by_role` enum has
`judge-deepseek` and `judge-terra` but **no `judge-sonnet`**, from the mid-run lane
switch. It did not bite here — all five fatals were DeepSeek's — but the next
sonnet-only fatal cannot be attributed honestly.

## Gates run, and their results

| gate | result |
|---|---|
| `step8-guard --baseline pre-step8` | **OK** — 5 changed, 5/5 licensed by a `confirmed_fatal` against the pre-edit state |
| `precheck` (5 repaired items) | **pass** — 5 checked, 0 failing, after adopting precheck's canonical stratification on S8-03 |
| `depcheck` | **OK** — no cycles, all references resolve, no draft items on published pages; none of the 5 flagged |
| `merge-proof-contracts` | 324 scoped items from 7 batch contracts |
| `proof-contract --strict` | **0 errors**, 324/324 |
| `citation-fidelity` (7 touched items) | **0** — every recorded quote appears in its cited item; no widening candidates |
| `boundary-audit` (3 repaired items) | **0** — no template reuse, no contradicted dispositions |
| `defect-ledger check` | **FAIL, 2 pre-existing errors** — see blocker above |

Contracts were updated in the **owning batch** files, not only the merged one:
batch 2 (`fs-subgroups-…`), batch 3 (`cor-algebraic-closures-…`,
`thm-separable-closures-…`, `thm-extension-generated-…`, plus the two consumers
whose citation quotes the repaired Statements —
`fs-algebraic-closure-is-unique-up-to-unique-isomorphism` and
`thm-separable-elements-form-an-intermediate-field`) and batch 7
(`cor-cokleisli-…`), then re-merged. The five boundary rows on S8-03 quoted proof
text that no longer exists after the rewrite; I replaced them with dispositions
written against the new steps rather than leaving the stale quotes, and verified
by re-scan that no boundary quote on any repaired item is absent from disk.

### One correction to my own work

My first adjudication ledger recorded `item_sha256` as
`sha256(itemHashGuard(text))` — a double hash, since `itemHashGuard` already
returns the digest. `step8-guard` rejected all five edits as unlicensed, correctly.
I recovered the pre-edit text from `HEAD` (all five were clean there) and verified
the reconstruction rather than assuming it: `shortHash(itemHashGuard(HEAD))` equals
the `pre-step8` baseline hash for each of the five. The regenerated ledger now
agrees with the baseline on **all 145 rows**, not just the five — a stricter check
than the guard performs.

## Rejudge targets

Exactly the five edited items. Their unedited page-mates are spared even though
the pair context hashes moved.

```
fs-subgroups-of-equal-p-power-order-are-conjugate
cor-algebraic-closures-are-isomorphic-over-the-base
thm-separable-closures-exist-and-are-isomorphic-over-the-base
thm-extension-generated-by-separable-elements-is-separable
cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties
```

None carried a `verification.judge` block, so there was none to delete; step 7's
verdicts live in the ledger and the stamps are applied later. I did not run the
rejudge — `8-rejudge` sweeps from `research/frontier-15-judge-closure.json`.

## Twice-touched

None. All five items were touched once, in a single pass each, and no item was
repaired twice. No item repaired here was also repaired at step 6 under a
different finding.

## Leakage — the part worth carrying to step 10

Three of the five fatal defects were **already present in the step-3 scaffold**,
in the `title` or the `strategy`, before any proof existed:

| defect | what the scaffold already said |
|---|---|
| S8-01 | title read "…base-isomorphic, generally nonuniquely" verbatim |
| S8-03 | strategy read "Iteratively adjoining separable elements and using transitivity" — the route that does not close |
| S8-05 | strategy named "(12) and (12)(34)" verbatim |

That is a direct hit on the stage I ran at step 3, and on the three questions its
brief asks by name — does the title claim more than the strategy delivers, do the
`deps` carry the route, and is the witness real. Each would have cost a scaffold
edit there; here each cost an adjudication, a repair and a rejudge. The remaining
two (S8-02, S8-04) entered at authoring and were on disk, unflagged, through the
readers and 6b. S8-04's scaffold `strategy` was the single word `formal-duality`,
which the step-3 brief itself calls a finding.

---

# Round 1 — adjudicating the rejudge of the five repairs

Dispatch `adjudicate-rejudge-round-1`, 2026-08-17. The `8-rejudge` stage swept the
five items repaired above; both lanes returned a verdict on each. This section
adjudicates what came back. Baseline is unchanged (`pre-step8`,
2026-08-17T03:13:01.925Z) — a round does not get its own baseline, or the round
before it would stop being licensed.

## Outcome

| | |
|---|---|
| rejudge verdicts read | 10 (5 items × 2 lanes) |
| items clearing **both** lanes | **3 of 5** |
| new rejections | **3**, on 2 items |
| `confirmed_fatal` | **0** |
| `confirmed_nonfatal` | 3 |
| items edited | **0** |
| defect-ledger rows written | 0 (the gate demands one per fatal; there were none) |
| rejudge targets from this round | **none** |

### The three that cleared

`fs-subgroups-of-equal-p-power-order-are-conjugate` (S8-05),
`cor-algebraic-closures-are-isomorphic-over-the-base` (S8-01) and
`thm-extension-generated-by-separable-elements-is-separable` (S8-03) passed
**both** lanes on the repaired text. S8-03 is the one worth naming: it was the
proof I replaced outright rather than edited, on the one defect both lanes had
found and stated precisely, and the rewritten separable-degree argument now
satisfies both of the lanes that rejected the original. That is the strongest
evidence available here that repair (2) was the right instrument.

## R1-01 · `thm-separable-closures-exist-and-are-isomorphic-over-the-base` — `confirmed_nonfatal` (both lanes)

*deepseek-v4-pro and claude-sonnet-5, context `1ee7b42d…`. This is the judgement
call of the round, so the reasoning is written out in full rather than asserted.*

Both lanes made the same point, independently and correctly. Step 2.1 establishes
that each root $a$ is separable **over $E$** — an elementwise statement — and then
cites `[L3]`, whose Statement is the tower form: "Let $F\subseteq K\subseteq L$ be
algebraic field extensions. If $K/F$ and $L/K$ are separable, then $L/F$ is
separable." Instantiating it at $L=E(a)$ needs $E(a)/E$ **separable**, which the
step never states. The `[L3]` restatement itself is faithful; what is missing is
the hypothesis on the way in.

**The bridge, named exactly.** $E(a)/E$ is separable because it is generated by
the separable element $a$ — `thm-extension-generated-by-separable-elements-is-separable`,
instantiated at $S=\{a\}$, with no side conditions to check. That item sits at
position 48 in `library/abstract-algebra/algebraic-closure-embeddings-and-separability.md`;
this one is at 59. It precedes, so no forward reference would be created, and I
verified by transitive closure over `deps` that it does not depend on this theorem
— the edge is available and acyclic. It is simply not declared.

**Why nonfatal, against the strongest case for fatal.** The case for fatal is real:
both lanes, cross-family, agreed, and `deps` is a public interface. What decides it
the other way is the owner's 30-second threshold, applied where I already applied
it 137 times in this same stage:

- **Both refuters closed the gap themselves, inside the sentence objecting to it.**
  DeepSeek wrote "…which the generated-by-separable-elements theorem would
  require"; sonnet wrote "(L3's actual hypothesis)". A gap that two adversarial
  readers bridge by name while complaining about it is, on the evidence in front
  of me, closable in well under thirty seconds.
- **It is exactly the class I closed as nonfatal throughout round 0** — "a named
  library result used without being declared in `deps`", the twenty-six-item
  residue below. Reversing the threshold for one item would make this level's
  adjudication incoherent, and an inconsistent threshold is itself a defect.
- **The mathematics is not in doubt.** The theorem is true, the route is the
  standard one, and every other step of the item survives a suspicious reading; I
  re-read 1.2 and 2.2 line by line for the same shape and found the separably-closed
  arguments sound (an irreducible separable polynomial that splits over a separably
  closed field is linear, so the element lands in the field).

**The distinction from S8-03, which was fatal on a move that looks identical.**
There, the proof got "each adjacent step is separable" from "the generator is
separable" — and the theorem that licenses that step *was the theorem being
proved*. No reader could close it, at any speed, because closing it assumed the
conclusion. Here the licensing theorem is a different, already-proved result
eleven items earlier on the same page. Circular versus undeclared is the whole
difference, and it is why one cost a rewrite and this one costs a ledger row.

**Recorded, not repaired.** The honest fix is one edit — declare
`thm-extension-generated-by-separable-elements-is-separable`, add it to the Facts
block, and route 2.1 through it — and step 8 is fatal-only, so it is not mine to
make here. It is listed in the residue below.

## R1-02 · `cor-cokleisli-and-coeilenberg-moore-…` — `confirmed_nonfatal` (deepseek only)

*deepseek-v4-pro, context `54b085de…`; **sonnet passed this item on the same
context**.*

Two objections, both citation-granularity:

1. "Step 1.1 uses that a comonad is a monad on the opposite category but cites only
   L3, which does not state this." The fact is true and is stated verbatim in the
   level's own `def-comonad`, last line: "Equivalently, a comonad on $\mathcal C$ is
   a monad on the opposite category $\mathcal C^{\mathrm{op}}$, with every arrow
   reversed." `def-comonad` is item 7 on this page; the corollary is item 59. This
   is a definitional unwinding of the object the corollary is about, undeclared in
   `deps` — the same class as R1-01, one tier cheaper because the bridge is a
   definition rather than a theorem.
2. "Step 2.1 … asserts without citing any fact that an adjunction inducing $G$
   becomes one inducing the opposite monad under opposites." Step 2.1 states the
   translation explicitly and it is correct: for $L\dashv R$ with $R:\mathcal
   C\to\mathcal D$, passing to opposites gives $R^{\mathrm{op}}\dashv
   L^{\mathrm{op}}$ with $R^{\mathrm{op}}$ now the left adjoint, and the induced
   monad on $\mathcal C^{\mathrm{op}}$ is $L^{\mathrm{op}}R^{\mathrm{op}} =
   (LR)^{\mathrm{op}} = G^{\mathrm{op}}$, the counit $\varepsilon:LR\Rightarrow1$
   becoming the unit $1\Rightarrow G^{\mathrm{op}}$. I checked this rather than
   accepting it, because it is the sentence I rewrote at S8-04.

**What this item demonstrates about the stage.** S8-04 was a genuine fatal — the
Statement had both universal properties backwards. I repaired it, and the same lane
returned with a different, nonfatal objection to the repaired text. That is the
resample the fatal-only rule exists to stop, observed directly: one turn of the
loop cost two judge calls and this adjudication, and produced nothing to fix. I
re-verified the round-0 repair while I was here — the comparison functors
$\mathcal C_G\to\mathcal D$ and $\mathcal D\to\mathcal C^G$ do put co-Kleisli
initial and co-Eilenberg–Moore terminal, matching the corrected Statement and
Riehl's Proposition 5.2.13 under duality.

## Residue this round adds

Both R1-01 and R1-02 join **residue item 1** above: the missing-`deps`-edge list
grows from twenty-six items to twenty-eight.

- `thm-separable-closures-exist-and-are-isomorphic-over-the-base` →
  `thm-extension-generated-by-separable-elements-is-separable` (needed at step 2.1
  to supply `[L3]`'s hypothesis).
- `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties`
  → `def-comonad` (needed at step 1.1 for the duality it is built on).

Both were surfaced by a judge on repaired text, which is worth noting for step 10:
the class was already the largest nonfatal category of round 0, and a rejudge of
five items produced two more instances of it. That is a step-6 shape — declaring
an edge is free before the text freezes — and it is now the level's most-repeated
finding.

## Twice-touched

`thm-separable-closures-…` and `cor-cokleisli-…` have each now been *rejected*
twice, but each was **touched once**: the round-1 findings are nonfatal and
neither item was edited. No item on this level has been repaired twice, so the
`WORKFLOW.md` escalation does not trigger.

## Gates run, and their results

| gate | result |
|---|---|
| `step8-guard --baseline pre-step8` | **OK** — 5378 items at baseline, 5 changed, 5/5 still licensed by a `confirmed_fatal` against the pre-edit state; **0 changed this round** |
| `judge-closure` (`level-coverage --judge-only --verify-current-context`) | **OK, exit 0** — 392/392 pairs complete, `needs_rejudge: []`, `unadjudicated: []`, `open_fatal: []`, **`closed: true`**, both allowances `false` |

The closure gate closed with **no allowances taken**: neither
`--allow-unadjudicated` nor `--allow-pending-rejudge` was passed, so it cleared on
its own terms rather than on the step-8 dispensation. Its 30 warnings are all
`judge-verdict-adjudicated-nonfatal` — the expected visible trace of a
`confirmed_nonfatal` or `false_positive` clearing a current rejection, including
the two new rows on `thm-separable-closures-…`.

Adjudication ledger totals across both rounds: **148 rows** — 6 `confirmed_fatal`,
140 `confirmed_nonfatal`, 2 `false_positive`.

No content, page, frontmatter, contract, impact or judge mutation was made this
round, which is what a round of three nonfatal adjudications is supposed to cost.
The `defect-ledger check` blocker recorded above is unchanged — I wrote no rows,
so nothing about it moved either way.

## Where the level stands after this round

Step 8 is complete on the judge verdicts: every rejection under the current
`deepseek+sonnet` lineup, in both rounds, has been read and adjudicated, and no
`confirmed_fatal` is open. Nothing here is a publish blocker. The one gate still
red is the pre-existing `defect-ledger check` failure recorded above, which is an
owner call about what an `open` row means and not a mathematical defect.
