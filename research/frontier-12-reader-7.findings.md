# Reader 7 findings — `frontier-12`, step 6

Assignment: audit batch 1, pages 53.2, 53.4, 56, and 57. This was a read-only independent-reader pass.

Summary: **0 fatal findings; 21 nonfatal findings.** No title misrepresents what its item proves or refutes; the positive Statements and the false-statement classifications are correct. I found no proof that establishes only a special case of its Statement. The nonfatal findings below are four short omitted inferences, four proof-contract defects, and thirteen inaccurate reader-visible source references.

## Fatal findings

None.

## Nonfatal findings

### `thm-local-ring-unit-characterisations`

**N1 — proof-contract boundary row points to the wrong implication step.**

- **Location:** `research/frontier-12-batch-1.proof-contracts.json`, boundary `iff-forward`.
- **What is wrong:** the evidence says step 1.1 proves local $\Rightarrow$ nonunits ideal and step 2.1 proves the next implication. The implication nonunits ideal $\Rightarrow$ “$x$ or $1-x$ is a unit” is actually step 1.2. Step 2.1 belongs to the reverse direction: under condition 3 it proves closure of the nonunits under addition.
- **Evidence:** compare the boundary row with proof steps 1.2 and 2.1 on disk. The strict contract gate accepts the row because the named step exists, but the named step does not do the claimed work.
- **Severity:** nonfatal. The proof itself gives both directions correctly; only the contract mapping is false.

### `cor-every-local-ring-is-its-localisation-at-its-maximal-ideal`

**N2 — the proof uses prime localisation before establishing that the maximal ideal is prime.**

- **Location:** Facts [F1]–[F2] and proof step 1.1.
- **What is wrong:** [F2] cites `def-localisation-at-a-prime-ideal`, whose definition begins with a **prime** ideal, but the item has established only that $\mathfrak m$ is the unique maximal ideal. Neither a Fact nor a proof step states that a maximal ideal in a commutative ring is prime.
- **Evidence:** `thm-local-ring-unit-characterisations` supplies uniqueness/maximality and the nonunit characterization, not primality. The needed result exists on disk as `cor-maximal-ideals-are-prime`, but it is not a dependency and is not invoked.
- **Severity:** nonfatal. A competent reader supplies maximal $\Rightarrow$ prime immediately, but the displayed dependency chain is incomplete.

### `thm-ideal-correspondence-for-localisation`

**N3 — the proof contract omits both literature-labelled Facts.**

- **Location:** Facts [L1] and [L2], proof steps 3.1 and 5.1, and the item's `citations` array in `research/frontier-12-batch-1.proof-contracts.json`.
- **What is wrong:** the proof cites [L1] and [L2], and its derivation rows list `L1` and `L2` as inputs, but the contract's citation array contains entries only for [F1] and [F2]. Thus the contract contains no source section, quotation, or use mapping for either external citation.
- **Evidence:** [L1] is the ideal extension/contraction statement attributed to Stacks Lemma 10.9.16; [L2] is the prime correspondence attributed to Stacks Lemma 10.17.5. Both statements are faithful to the named results, so this is not a mathematical citation defect. It is a completeness defect in the artifact that is supposed to contract every `[F#]`/`[A#]`/`[L#]` input. The strict gate nevertheless passes.
- **Severity:** nonfatal. The item proves the two claims locally; the missing records do not create a proof gap.

### `cex-total-quotient-ring-of-a-nondomain-need-not-be-a-field`

**N4 — the universal-property argument establishes only one inverse identity before calling the map an inverse.**

- **Location:** proof step 2.1.
- **What is wrong:** applying the localisation universal property to $\operatorname{id}_R$ yields $g:S^{-1}R\to R$ with $g\lambda=\operatorname{id}_R$. Step 2.1 immediately calls $g$ an inverse to $\lambda$ without establishing $\lambda g=\operatorname{id}_{S^{-1}R}$.
- **Evidence:** the omitted identity follows from the uniqueness clause already included in [F1]: $\lambda g$ and the identity have the same composite with $\lambda$. This is precisely the extra argument written out in step 2.1 of `cor-every-local-ring-is-its-localisation-at-its-maximal-ideal`.
- **Severity:** nonfatal. The gap is a one-line use of the cited uniqueness clause.

### `thm-splitting-fields-exist-for-nonzero-polynomials`

**N5 — the Judson source locator is inaccurate.**

- **Location:** frontmatter `sources.references`, title “T. Judson … Theorem 21.11”.
- **What is wrong:** the theorem at the cited splitting-fields URL is not Theorem 21.11. Alpha's settled C3 numbering for that HTML edition is Theorem 21.2.3; the currently rendered continuous numbering is Theorem 21.31. Both identify the same existence theorem, while “Theorem 21.11” identifies neither.
- **Evidence:** `research/frontier-12-alpha-step3-scaffold-review.md` C3 and `research/frontier-12-batch-1.notes.md` C3 settle the URL-specific locator; the [cited Judson page](https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html) renders the existence result under Theorem 21.31.
- **Severity:** nonfatal. The local proof is complete and Milne is also cited.

### `lem-an-isomorphism-extends-across-a-simple-root-adjunction`

**N6 — the Judson source gives the wrong result number and kind.**

- **Location:** frontmatter `sources.references`, title “T. Judson … Theorem 21.13”.
- **What is wrong:** the source result for extension across a chosen simple root is a lemma, not Theorem 21.13: it is Lemma 21.2.4 under Alpha's settled HTML numbering and Lemma 21.32 in the current continuous rendering. The current page invokes Theorem 21.13 only for the power-basis representation inside that lemma.
- **Evidence:** the batch notes map this item to Judson Lemma 21.2.4; the [cited Judson page](https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html) renders it as Lemma 21.32.
- **Severity:** nonfatal. The local proof uses on-disk algebra dependencies correctly.

### `thm-isomorphisms-extend-to-splitting-fields`

**N7 — the induction decrease uses an uncited degree fact.**

- **Location:** Fact [F6] and proof step 2.1 at “$\deg g=n-1$”.
- **What is wrong:** [F6]'s cited `cor-factor-theorem-over-a-commutative-ring` proves the existence and uniqueness of $g$ in $f=(x-\alpha)g$, but its on-disk Statement does not state the degree of $g$. Step 2.1 needs $\deg g=n-1$ to invoke strong induction.
- **Evidence:** the missing conclusion follows immediately by comparing leading terms, or by citing the on-disk `thm-polynomial-degree-of-a-product-over-a-domain`, which is used elsewhere in this batch but is not a dependency here.
- **Severity:** nonfatal. This is a standard one-line degree calculation.

**N8 — the Judson source locator names a different theorem.**

- **Location:** frontmatter `sources.references`, title “T. Judson … Theorem 21.13”.
- **What is wrong:** the splitting-field isomorphism-extension theorem is Theorem 21.2.6 under Alpha's settled HTML numbering and Theorem 21.34 in the current continuous rendering. Theorem 21.13 on the rendered page is the power-basis theorem used inside the preceding simple-adjunction lemma.
- **Evidence:** the batch notes map this item to Judson Theorem 21.2.6; the [cited Judson page](https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html) renders the target as Theorem 21.34.
- **Severity:** nonfatal. Milne Proposition 2.11 is separately cited and the local proof is otherwise sound.

### `cor-splitting-fields-are-unique-up-to-base-isomorphism`

**N9 — two proof-contract boundary rows point to step 1.1 for a case handled in step 2.1.**

- **Location:** contract boundaries `empty` and `zero`.
- **What is wrong:** both rows say step 1.1 explicitly handles nonzero constants and their empty root sets. Step 1.1 only applies the general extension theorem. The explicit constant/empty-root discussion is step 2.1.
- **Evidence:** compare both boundary rows with the two proof steps on disk. The strict gate checks the quoted step labels only syntactically.
- **Severity:** nonfatal. The boundary case is correctly handled in the proof.

**N10 — the Judson source locator is inaccurate.**

- **Location:** frontmatter `sources.references`, title “T. Judson … Corollary 21.14”.
- **What is wrong:** the uniqueness-up-to-base-isomorphism result is Corollary 21.2.8 under Alpha's settled HTML numbering and Corollary 21.36 in the current continuous rendering, not Corollary 21.14.
- **Evidence:** C3 in the scaffold review and batch notes gives Corollary 21.2.8; the [cited Judson page](https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html) renders it as Corollary 21.36.
- **Severity:** nonfatal. The corollary follows correctly from [F1].

### `thm-factorial-coordinate-bound-for-a-splitting-field`

**N11 — the Judson reference does not support the factorial bound.**

- **Location:** frontmatter `sources.references`, title “T. Judson … Theorem 21.12”.
- **What is wrong:** the cited splitting-fields page has no factorial-bound theorem. In its continuous numbering, Proposition 21.12 is the quotient/simple-extension result used by the simple-adjunction lemma, and the page contains no factorial statement.
- **Evidence:** the batch's own provenance table attributes this item to Milne Proposition 2.7, and Milne is also present in the frontmatter. The [Judson URL](https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html) is therefore an inaccurate additional source reference.
- **Severity:** nonfatal. The Milne reference and the self-contained induction support the claim.

### `prop-splitting-field-of-x-n-minus-a`

**N12 — step 2.1 applies group power laws to $\beta$ without first placing $\beta$ in the multiplicative group.**

- **Location:** proof step 2.1 and Fact [F2].
- **What is wrong:** [F2] is a power law in a commutative group. Step 2.1 writes $\zeta=\beta\alpha^{-1}$ and applies that law to $\beta$, but has not stated $\beta\ne0$.
- **Evidence:** from $\beta^n=a$ and step 1.1's $a\ne0$, one immediately gets $\beta\ne0$; otherwise $\beta^n=0$. That puts $\beta$ in $E^\times$ and licenses [F2].
- **Severity:** nonfatal. The omitted inference is elementary and takes one sentence.

### `prop-endomorphisms-of-a-splitting-field-permute-its-roots`

**N13 — the contract quote and section do not support [F1].**

- **Location:** Fact [F1] and its citation record in `research/frontier-12-batch-1.proof-contracts.json`.
- **What is wrong:** [F1] says every unital homomorphism between fields is injective. Its contract record names the `Definition` section of `def-field-homomorphism` and quotes only the definitions of homomorphism, embedding, and isomorphism. It stops before the injectivity claim.
- **Evidence:** the needed claim does occur on disk, but in the second bullet of `## Remarks`: “Every field homomorphism is automatically injective”. The contract should name that section and quote the supporting clause. The current quote is a valid substring yet does not entail the Fact.
- **Severity:** nonfatal. The item-level citation is faithful; the defect is confined to contract evidence.

### `prop-normality-descends-to-intermediate-fields`

**N14 — the Stacks source title disagrees with its stable tag.**

- **Location:** frontmatter `sources.references`, title “The Stacks Project, Lemma 9.15.6” at URL tag `09HN`.
- **What is wrong:** stable tag [09HN](https://stacks.math.columbia.edu/tag/09HN) is Lemma 9.15.2, the exact descent result used here, not Lemma 9.15.6.
- **Evidence:** Alpha's scaffold verdict explicitly identifies `09HN` as Lemma 9.15.2, and the batch notes do the same. The URL is correct; its human-readable title is not.
- **Severity:** nonfatal. The source proposition itself matches the Statement and proof.

### `prop-nonempty-intersections-of-normal-subextensions-are-normal`

**N15 — the Stacks source title disagrees with its stable tag.**

- **Location:** frontmatter `sources.references`, title “The Stacks Project, Lemma 9.15.8” at URL tag `09HP`.
- **What is wrong:** stable tag [09HP](https://stacks.math.columbia.edu/tag/09HP) is Lemma 9.15.3, the intersection result, not Lemma 9.15.8.
- **Evidence:** Alpha's scaffold verdict and the batch notes both identify `09HP` as Lemma 9.15.3.
- **Severity:** nonfatal. The stable URL lands on the intended intersection proposition, and the local item supplies the necessary nonempty-family boundary explicitly.

### `prop-algebraic-splitting-extensions-are-normal`

**N16 — the Stacks source title is wrong and the tagged lemma is not the stated splitting-field theorem.**

- **Location:** frontmatter `sources.references`, title “The Stacks Project, Lemma 9.15.9” at URL tag `09HQ`.
- **What is wrong:** stable tag [09HQ](https://stacks.math.columbia.edu/tag/09HQ) is Lemma 9.15.5, an embedding-image characterization of normality, not Lemma 9.15.9 and not directly the Statement “an algebraic splitting field is normal.”
- **Evidence:** the batch notes classify this item as a standard derived result and do not assign it a Stacks lemma. The second frontmatter reference, Milne Proposition 2.12, is the relevant direct literature support.
- **Severity:** nonfatal. The local four-step proof is valid and the Milne source remains.

### `thm-normality-generation-criterion`

**N17 — the Stacks source title disagrees with its stable tag.**

- **Location:** frontmatter `sources.references`, title “The Stacks Project, Lemma 9.15.11” at URL tag `0BR3`.
- **What is wrong:** stable tag [0BR3](https://stacks.math.columbia.edu/tag/0BR3) is Lemma 9.15.6, the generation criterion, not Lemma 9.15.11.
- **Evidence:** Alpha's required-addition ruling and the batch notes both identify `0BR3` as Lemma 9.15.6.
- **Severity:** nonfatal. The URL's proposition is faithful to the item.

### `ex-splitting-field-of-x-squared-minus-two`

**N18 — the sole frontmatter source does not identify the example used.**

- **Location:** frontmatter `sources.references`, title “T. Judson … Example 21.10”.
- **What is wrong:** the cited splitting-fields page has no standalone Example 21.10 for $x^2-2$. Its only nearby occurrence of $x^2-2$ is as a factor in the quartic example (Example 21.2.1 under the settled HTML numbering; Example 21.29 in the continuous rendering).
- **Evidence:** the batch provenance table says this item comes from Milne Example 2.5, but that source is absent from the item's frontmatter, which instead contains the inaccurate Judson reference.
- **Severity:** nonfatal. The local verification is self-contained.

### `ex-splitting-field-of-x-cubed-minus-two`

**N19 — the sole frontmatter source does not identify the example used.**

- **Location:** frontmatter `sources.references`, title “T. Judson … Example 21.15”.
- **What is wrong:** the cited Judson page has no Example 21.15 establishing the splitting field of $x^3-2$. Its cubic example is the different $x^3-3$ root-field counterexample.
- **Evidence:** the batch provenance table assigns this item to Milne Example 2.6, but the Milne reference is absent from the item's frontmatter.
- **Severity:** nonfatal. The roots and generated field are checked directly in the item.

### `cex-a-root-field-need-not-be-a-splitting-field`

**N20 — the Judson example number is inaccurate.**

- **Location:** frontmatter `sources.references`, title “T. Judson … Example 21.15”.
- **What is wrong:** the analogous source counterexample at the cited URL is Example 21.2.2 under Alpha's settled numbering and Example 21.30 in the continuous rendering. It uses $x^3-3$. The item's change to $x^3-2$ is deliberate and is documented in the batch notes; “Example 21.15” still names no supporting result at the URL.
- **Evidence:** `research/frontier-12-batch-1.notes.md` records both the intended example and the intentional witness change; the [Judson page](https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html) renders the analogous example as 21.30.
- **Severity:** nonfatal. The adapted counterexample is proved directly.

### `fs-isomorphism-between-splitting-fields-is-unique`

**N21 — the frontmatter source neither has the stated locator nor supports the nonuniqueness refutation.**

- **Location:** frontmatter `sources.references`, title “T. Judson … Corollary 21.14”.
- **What is wrong:** the existence/uniqueness-up-to-isomorphism result at the cited URL is Corollary 21.2.8 under the settled HTML numbering and Corollary 21.36 in the continuous rendering. It does not provide the separate warning that a base-fixing isomorphism need not itself be unique.
- **Evidence:** the batch provenance table assigns this false-statement item to Milne Warning 2.16, but the item frontmatter omits Milne and cites the misnumbered Judson corollary instead.
- **Severity:** nonfatal. The explicit $\sqrt2\mapsto-\sqrt2$ automorphism gives a complete local refutation.

## Coverage

I read **all 56 assigned items fully**; no item was sampled. By page, the complete coverage was:

- `the-field-of-fractions-and-localisation` (22): `def-multiplicative-subset-and-localisation`, `thm-localisation-equivalence-and-ring-laws`, `prop-localisation-zero-equality-and-kernel-criteria`, `thm-universal-property-of-localisation`, `cor-localisation-is-unique-up-to-unique-isomorphism`, `prop-units-in-a-localisation`, `def-principal-localisation`, `prop-iterated-localisation`, `def-field-of-fractions`, `thm-field-of-fractions-is-a-field-and-the-domain-embeds`, `thm-universal-property-of-the-field-of-fractions`, `cor-fields-of-fractions-are-unique-over-the-domain`, `cor-rational-function-field-as-a-fraction-field`, `def-local-ring`, `thm-local-ring-unit-characterisations`, `def-localisation-at-a-prime-ideal`, `thm-localisation-at-a-prime-is-local`, `cor-every-local-ring-is-its-localisation-at-its-maximal-ideal`, `cor-local-rings-have-only-trivial-idempotents`, `thm-ideal-correspondence-for-localisation`, `thm-localisation-commutes-with-quotients`, `cor-residue-field-of-a-localisation-at-a-prime`.
- `the-field-of-fractions-and-localisation-examples` (8): `ex-fraction-field-of-the-integers-is-the-rationals`, `ex-inverting-six-in-the-integers`, `ex-the-local-ring-z-at-p-and-its-residue-field`, `ex-the-local-ring-of-polynomials-at-x`, `cex-localising-at-a-set-containing-zero-gives-the-zero-ring`, `cex-nonzero-elements-of-a-ring-need-not-form-a-multiplicative-set`, `cex-localisation-map-can-kill-a-nonzero-element`, `cex-total-quotient-ring-of-a-nondomain-need-not-be-a-field`.
- `splitting-fields` (18): `def-polynomials-that-split-and-splitting-fields`, `lem-adjoining-one-root-reduces-the-unsplit-degree`, `thm-splitting-fields-exist-for-nonzero-polynomials`, `cor-splitting-fields-exist-for-finite-families`, `cor-splitting-field-of-a-product-is-the-composite-of-splitting-fields`, `lem-polynomials-and-roots-transport-along-field-isomorphisms`, `lem-an-isomorphism-extends-across-a-simple-root-adjunction`, `thm-isomorphisms-extend-to-splitting-fields`, `cor-splitting-fields-are-unique-up-to-base-isomorphism`, `thm-factorial-coordinate-bound-for-a-splitting-field`, `prop-splitting-field-of-x-n-minus-a`, `prop-endomorphisms-of-a-splitting-field-permute-its-roots`, `def-normal-algebraic-extension`, `prop-normality-descends-to-intermediate-fields`, `prop-nonempty-intersections-of-normal-subextensions-are-normal`, `prop-algebraic-splitting-extensions-are-normal`, `thm-normality-generation-criterion`, `prop-finitely-generated-normal-extensions-are-splitting-fields`.
- `splitting-fields-examples` (8): `ex-base-field-is-splitting-field-of-empty-family`, `ex-splitting-field-of-x-squared-minus-two`, `ex-splitting-field-of-x-cubed-minus-two`, `ex-splitting-field-of-x-four-plus-two-x-squared-minus-eight`, `ex-splitting-field-of-two-quadratics`, `ex-repeated-root-polynomial-over-f-two`, `cex-a-root-field-need-not-be-a-splitting-field`, `fs-isomorphism-between-splitting-fields-is-unique`.

I also read all four page files, all 49 proof contracts (including every citation, derivation, and boundary row), the batch notes, and the batch's settled scaffold decisions. I compared every local dependency citation with its on-disk source; I checked the two `[L#]` propositions and the challenged reader-visible references against their stable official sources. Nothing in the assigned scope was uncheckable.
