# Frontier 15 batch 3 — Beta scaffold notes

Run: `frontier-15`

Batch: algebraic closure, embeddings, and separability
Role: Beta-3, steps 1–2; returning Step-5 author

## Continuity checkpoint

- **Current substage:** the item manifest, coverage harvest, and version-1 proof contracts are written; the remaining action is to run the artifact gates, record their exact results below, and hand the batch to Step-3 Alpha.
- **Owned artifacts:** `research/frontier-15-batch-3.pages.json`, `research/frontier-15-batch-3.notes.md`, `research/frontier-15-batch-3.coverage.json`, and `research/frontier-15-batch-3.proof-contracts.json`.
- **Completed checks:** all governing files and the GA-1 design were read; Clark, Milne, and Thiel were harvested over the locators in the coverage file; all published dependencies were opened from disk; proposed ids were searched in both `items/` and `research/plan-spec.json`; the internal dependency order was checked; the coverage and manifest-only content-policy gates pass at the checkpoint recorded below.
- **Open mathematical/dependency constraint:** the A page has exactly the maximum permitted item load. The mathematics closes as written, but any Alpha addition requires the split described in Finding F1 rather than a deletion.
- **Exact next action:** run JSON, prose, URL, content-policy, and coverage checks; do not run or claim the authoritative spliced-plan gates before Step 4.

## Outcome and architecture

The scaffold retains the owner-authorised algebraic closure. It begins with the arbitrary-family polynomial ring and the required finite-family dictionary, develops relative field embeddings and conjugates, builds the separability/perfectness and primitive-element machinery needed by the one-step theorem, and then gives Artin's proper-ideal calculation, the simultaneous root extension, the separate perfect and characteristic-$p$ halves of the one-step argument, closure existence, the Zorn embedding theorem, noncanonical closure isomorphism, and finite normal closures.

The second half develops separable degree without circularity: the simple-extension root count and restriction fibres precede multiplicativity; the full-degree criterion precedes transitivity; the separable elements form an intermediate field; pure inseparability, exponent-one $p$-bases, and the purely inseparable quotient over the separable closure then prove $[K:F]_s=[K_s:F]$, divisibility, and the inseparable-degree factorization. The B page supplies explicit closure, embedding, imperfect-field, perfect-closure, and nonsimple purely inseparable witnesses, plus the four required false statements.

No ambient-normal-extension fallback, omega-iteration, use of $\mathbb C$ as algebraically closed, or applied canonical-embedding notation is planned.

## Findings for Step-3 Alpha

### F1 — approve the contingency split if any item is added

**Problem.** The A manifest is at the hard 60-item ceiling after faithful harvest of separable closures, pure-inseparability stability, and exponent-one $p$-bases. It passes the size rule now, but has no capacity for an Alpha-added prerequisite or result.

**Recommendation.** Keep the current pair if Alpha makes no addition. If any A item is added, approve this exact split instead of pruning:

- existing `algebraic-closure-embeddings-and-separability`, order 98: current A items 1–35, ending with `thm-finite-normal-closures-exist-and-are-finite`;
- existing companion `algebraic-closure-embeddings-and-separability-examples`, order 99: B items 1–4 and 12;
- new `separable-degree-perfect-and-purely-inseparable-extensions`, inserted immediately after order 99: current A items 36–60;
- new `separable-degree-perfect-and-purely-inseparable-extensions-examples`, immediately after that A page: B items 5–11.

The second A page must require the first B page, and `the-galois-correspondence` plus the waiting number-theory and commutative-algebra consumers must require the new second B page. Both A pages need their own two-paragraph summaries. If declined while an item is added, `validate-plan` fails `size`; deleting a harvested result instead would violate the richness rule.

### F2 — declined: do not add a direct Zorn prerequisite edge

**Corrected finding.** The plan object directly requires `algebraic-extensions-degree-and-finite-fields-examples`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, and `the-field-of-fractions-and-localisation`. Its transitive prerequisite closure already contains `order-zorn-and-the-axiom-of-choice`, so both uses of `thm-zorn` resolve without another direct edge.

**Authoring instruction.** Keep the manifest's three direct prerequisites exactly as repaired under B3-1. Do not add `order-zorn-and-the-axiom-of-choice`: that edge would be redundant and would disagree with the plan at Step 4.

### F3 — approve the source-exact primitive-element statement

**Problem.** The design asks only for the finite-separable special case, while Milne Theorem 5.1 proves the useful stronger statement: a finite extension generated by elements all but possibly one of which are separable is simple. The stronger hypothesis is exactly what the perfect-case one-step proof can consume without losing fidelity to the source.

**Recommendation.** Author `thm-primitive-element-theorem-for-finite-separable-extensions` with Milne's stronger statement and state the finite-separable theorem as its immediate special case. If declined, no downstream proof becomes false, but the harvest would knowingly weaken a named source result for no dependency reason.

### F4 — approve the corrected proof order for separable degree

**Problem.** A tempting proof of $[K:F]_s=[K_s:F]$ says prematurely that $K/K_s$ has one embedding, before pure inseparability has been established. A tempting proof of the full-degree criterion also invokes separability transitivity before that theorem is available.

**Recommendation.** Preserve the manifest order and proof contracts: prove the full-degree criterion from multiplicativity, the ordinary tower law, and the upper bounds on both separable-degree factors; prove pure-inseparability characterizations and $K/K_s$ purely inseparable; only then identify separable degree with $[K_s:F]$. If declined, the central degree development becomes circular.

### F5 — approve the one-step statement with its explicit algebraicity hypothesis

**Problem.** “Every base polynomial has a root” alone does not say the ambient extension is an algebraic closure. Milne Proposition 6.5 assumes the extension is algebraic over the base, and the Artin quotient must prove that algebraicity rather than merely assert it.

**Recommendation.** Keep `thm-one-step-simultaneous-root-extension` responsible for algebraicity of the quotient and keep `thm-one-step-algebraic-root-extension-is-algebraically-closed` stated for algebraic $L/F$. If declined, the construction's final inference is not licensed.

No published dependency opened during this audit contains an unambiguous mathematical falsehood requiring the owner-delegated repair protocol.

## Exact applyable scaffold edits

### Edit E1 — required page edge

File: `research/plan-algebra-track.md`

Section: `### GA-1. Algebraic Closure, Embeddings and Separable Extensions`

Exact old text:

> - **`requires`** `algebraic-extensions-degree-and-finite-fields`,
>   `order-zorn-and-the-axiom-of-choice`

Exact new text:

> - **`requires`** `algebraic-extensions-degree-and-finite-fields-examples`,
>   `eigenvalues-eigenvectors-and-the-characteristic-polynomial`,
>   `the-field-of-fractions-and-localisation`

### Edit E2 — primitive-element theorem

File: `research/plan-algebra-track.md`

Section: `### GA-1. Algebraic Closure, Embeddings and Separable Extensions`, paragraph beginning `*Primitive element.*`

Exact old text:

> **the primitive element theorem: a finite separable extension is simple**

Exact new text:

> **the primitive element theorem: a finite extension generated by elements all but possibly one of which are separable is simple; in particular, every finite separable extension is simple**

### Edit E3 — characteristic-$p$ structural paragraph

File: `research/plan-algebra-track.md`

Section: `### GA-1. Algebraic Closure, Embeddings and Separable Extensions`, immediately after the sentence ending `an extension that is both separable and purely inseparable is trivial.`

Exact old text: the empty insertion point after that sentence.

Exact new text:

> Pure inseparability is transitive in towers and stable under composita. For a finite exponent-one purely inseparable extension, a minimal generating family is a $p$-basis: its restricted $p$-monomials form a basis and a family of size $r$ gives degree $p^r$. This is the structural calculation used by the two-variable rational-function counterexample.

### Edit E4 — exact two-paragraph A-page summary

File: `research/plan-algebra-track.md`

Section: `page-summary` field for GA-1 at Step 4

Exact old text: the current empty page-summary placeholder for `algebraic-closure-embeddings-and-separability`.

Exact new text:

> Polynomial rings on arbitrary families of indeterminates are built from finitely supported monomials and reconciled with the finite iterated construction. Artin's proper-ideal calculation then adjoins roots of every base polynomial in one algebraic extension. The primitive element theorem handles the perfect case of the one-step criterion, and a perfect intermediate subfield handles positive characteristic, proving that every field has an algebraic closure.
>
> Base embeddings extend across algebraic extensions by Zorn's lemma, so algebraic and separable closures exist and are isomorphic over the base without a uniqueness claim. Embeddings of simple extensions count distinct conjugate roots; their restriction fibres make separable degree multiplicative. Perfect and purely inseparable extensions, $p$-bases, the separable closure, and inseparable degree give the decomposition $[K:F]=[K:F]_s[K:F]_i$ and the primitive-element criterion.

If F1 is approved, replace E4 by separate two-paragraph summaries for the two A pages following the cut described there; do not reuse the combined summary.

## Per-page item lists

### `algebraic-closure-embeddings-and-separability`

Recounted manifest size: 60.

1. `def-monomials-on-an-index-set` — definition — Monomials on an index set as finitely supported exponent families
2. `def-polynomial-ring-on-a-family-of-indeterminates` — definition — The polynomial ring on a family of indeterminates
3. `thm-polynomial-ring-on-a-family-is-a-commutative-ring` — theorem — Finite convolution gives a commutative ring
4. `thm-universal-property-of-a-polynomial-ring-on-a-family` — theorem — Universal property for an arbitrary family
5. `cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction` — corollary — Finite-family dictionary
6. `def-f-homomorphisms-and-embeddings-of-field-extensions` — definition — Relative field homomorphisms and embeddings
7. `def-conjugate-elements-over-a-field` — definition — Conjugate algebraic elements
8. `prop-base-field-embeddings-carry-elements-to-conjugates` — proposition — Embeddings carry elements to conjugates
9. `thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots` — theorem — Simple-extension embeddings and distinct roots
10. `def-separable-elements-and-separable-extensions` — definition — Separable elements and extensions
11. `thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core` — theorem — Unique separable core in characteristic $p$
12. `lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power` — lemma — Pure $p$-power irreducibility
13. `def-perfect-field` — definition — Perfect fields
14. `thm-perfect-field-characterizations` — theorem — Perfectness and Frobenius
15. `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect` — corollary — Standard perfect fields
16. `cor-algebraic-extensions-of-perfect-fields-are-separable` — corollary — Algebraic extensions of perfect fields
17. `lem-simple-finite-extension-has-finitely-many-intermediate-fields` — lemma — Simple implies finitely many intermediate fields
18. `lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces` — lemma — Finite-union subspace obstruction
19. `lem-finite-extension-with-finitely-many-intermediate-fields-is-simple` — lemma — Finitely many intermediate fields implies simple
20. `thm-steinitz-primitive-element-criterion` — theorem — Simple iff finitely many intermediate fields
21. `thm-primitive-element-theorem-for-finite-separable-extensions` — theorem — Generalized primitive element theorem
22. `cor-finite-separable-extension-has-finitely-many-intermediate-fields` — corollary — Finite separable extensions have finitely many intermediate fields
23. `cor-finite-extension-of-a-perfect-field-is-simple` — corollary — Finite extensions of perfect fields are simple
24. `def-algebraic-closure` — definition — Algebraic closure
25. `lem-artin-simultaneous-root-ideal-is-proper` — lemma — Artin's generated ideal is proper
26. `thm-one-step-simultaneous-root-extension` — theorem — One-step simultaneous root extension
27. `lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed` — lemma — Perfect-case one-step criterion
28. `lem-perfect-subfield-of-a-one-step-root-extension-in-positive-characteristic` — lemma — Positive-characteristic perfect subfield
29. `thm-one-step-algebraic-root-extension-is-algebraically-closed` — theorem — One-step algebraic root extension is closed
30. `thm-existence-of-algebraic-closures` — theorem — Existence of algebraic closures
31. `thm-algebraic-embedding-extension` — theorem — Algebraic embedding extension by Zorn
32. `cor-algebraic-closures-are-isomorphic-over-the-base` — corollary — Noncanonical base isomorphism of closures
33. `cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure` — corollary — Conjugates and closure automorphisms
34. `def-normal-closure-of-an-algebraic-extension` — definition — Normal closure of an algebraic extension
35. `thm-finite-normal-closures-exist-and-are-finite` — theorem — Finite normal closures
36. `def-separable-degree` — definition — Separable degree
37. `thm-separable-degree-is-independent-of-the-algebraic-closure` — theorem — Well-definedness of separable degree
38. `lem-restriction-fibres-for-embeddings-in-a-finite-tower` — lemma — Restriction fibres of embeddings
39. `thm-multiplicativity-of-separable-degree` — theorem — Multiplicativity of separable degree
40. `cor-separable-degree-is-at-most-extension-degree` — corollary — Separable-degree bound
41. `cor-separable-degree-of-a-simple-extension-counts-distinct-roots` — corollary — Simple-extension root count
42. `thm-finite-extension-is-separable-iff-separable-degree-is-full` — theorem — Full-degree separability criterion
43. `thm-separability-is-transitive` — theorem — Transitivity of separability
44. `thm-extension-generated-by-separable-elements-is-separable` — theorem — Generation by separable elements
45. `thm-separable-elements-form-an-intermediate-field` — theorem — Field of separable elements
46. `def-separable-closure-in-an-algebraic-extension` — definition — Relative separable closure
47. `def-purely-inseparable-extension` — definition — Purely inseparable extension
48. `thm-purely-inseparable-extension-characterizations` — theorem — Purely inseparable characterizations
49. `thm-pure-inseparability-is-transitive-and-stable-under-composita` — theorem — Pure towers and composita
50. `def-p-basis-of-an-exponent-one-purely-inseparable-extension` — definition — Exponent-one $p$-basis
51. `thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions` — theorem — $p$-bases, generators, and degree
52. `cor-finite-purely-inseparable-extensions-have-prime-power-degree` — corollary — Pure extensions have $p$-power degree
53. `cor-purely-inseparable-extensions-are-normal` — corollary — Pure extensions are normal
54. `thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure` — theorem — Pure quotient over the separable closure
55. `thm-separable-closures-exist-and-are-isomorphic-over-the-base` — theorem — Separable closures exist and are base-isomorphic
56. `thm-separable-degree-is-the-degree-of-the-separable-closure` — theorem — Separable degree equals $[K_s:F]$
57. `thm-separable-degree-divides-extension-degree` — theorem — Divisibility of separable degree
58. `def-inseparable-degree` — definition — Inseparable degree
59. `cor-degree-factors-into-separable-and-inseparable-degrees` — corollary — Degree factorization and $p$-power factor
60. `cor-separable-and-purely-inseparable-extension-is-trivial` — corollary — Separable and pure implies trivial

### `algebraic-closure-embeddings-and-separability-examples`

Recounted manifest size: 12.

1. `ex-algebraic-closure-of-the-rationals-and-real-algebraic-subfield` — example — $\overline{\mathbb Q}$ and real algebraic numbers
2. `ex-algebraic-closure-of-a-finite-field` — example — $\overline{\mathbb F_p}$ as a union of finite fields
3. `ex-cube-root-extension-has-three-embeddings-and-one-automorphism` — example — Three embeddings and one automorphism
4. `ex-biquadratic-extension-has-four-embeddings` — example — Four biquadratic embeddings
5. `ex-x-p-minus-t-is-irreducible-and-inseparable` — example — $x^p-t$ over $\mathbb F_p(t)$
6. `ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p` — example — Degree-$p$ pure extension with separable degree one
7. `cex-degree-p-squared-purely-inseparable-extension-is-not-simple` — counterexample — Degree-$p^2$ nonsimple pure extension
8. `ex-perfect-closure-of-fp-t-is-an-infinite-perfect-field` — example — An infinite perfect field of characteristic $p$
9. `fs-every-irreducible-polynomial-is-separable` — false statement — Irreducible does not imply separable
10. `fs-separable-degree-always-equals-extension-degree` — false statement — Separable degree need not be full
11. `fs-every-algebraic-extension-is-simple` — false statement — Algebraic need not be simple
12. `fs-algebraic-closure-is-unique-up-to-unique-isomorphism` — false statement — Closure isomorphism need not be unique

## Richness report

Both the long-proof decomposition pass and the corollary pass were performed for this pair.

The arbitrary-family polynomial construction is decomposed into monomials, the coefficient-family definition, the commutative-ring theorem, the universal property, and the finite-family dictionary. The closure existence proof is decomposed into Artin's proper-ideal computation, the quotient root extension, the perfect case, the positive-characteristic perfect-subfield lemma, the one-step theorem, and closure existence. The primitive-element criterion is decomposed into its two implications plus the finite-union-of-subspaces lemma. Separable-degree multiplicativity is decomposed through the restriction-fibre lemma. The pure-inseparability development separates elementwise characterizations, tower/compositum stability, exponent-one $p$-bases, $p$-power degree, the pure quotient over $K_s$, and the final degree factorization.

The corollary pass adds the finite-family dictionary, standard perfect-field examples, separability of algebraic extensions over perfect fields, finiteness of intermediate fields for finite separable extensions, simplicity over perfect fields, closure isomorphism, the conjugate-automorphism criterion, the separable-degree bound and simple-root count, normality and $p$-power degree of pure extensions, and triviality of extensions that are both separable and pure.

The A page is at the ceiling, so F1 records the exact cut that must be used if Alpha adds material. No result was pruned to obtain the current size.

## Forward references and cross-batch dependencies

There are no load-bearing forward references. The coverage file defers Galois equivalences and balanced normal decompositions by naming `the-galois-correspondence`; those are scope dispositions, not `deps`. The authored `def-algebraic-closure` may contain a non-load-bearing orientation remark naming `the-fundamental-theorem-of-algebra`, but no manifest dependency or mathematical step may use it.

There are no dependencies on another batch of run `frontier-15`, and this batch supplies no item specifically requested by another batch in the run. Outside this run, commutative algebra and number theory are known consumers of algebraic closure; after any approved split they must be pointed to the page containing `thm-existence-of-algebraic-closures` and, when separability is needed, to the second companion.

## New-id search

Every current manifest id was checked with the equivalent of:

```sh
test -e "items/$id.md" || rg -q --fixed-strings "\"$id\"" research/plan-spec.json
```

against the full published pool and the plan. The search returned no collision for any of the 72 proposed ids. The exact ids are the two ordered lists above; the split-only ids in F1 are proposals for Alpha and are not present in the current manifest.

## Web research ledger and convention audit

- Pete L. Clark, *Field Theory*: `https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf`. Read the exact Chapter 3–5 ranges in the coverage file. Supports algebraic closures, the Magic Mapping Theorem, conjugates, separable and purely inseparable structure, separable degree, $p$-bases, the primitive-element criterion, and Gilmer's one-step theorem.
- J. S. Milne, *Fields and Galois Theory*: `https://www.jmilne.org/math/Books/FT0.pdf`. Read the exact Chapter 2, 3, 5, and 6 ranges in the coverage file. Independently supports separability/perfectness, the generalized primitive-element theorem, the one-step criterion, all three closure constructions, Zorn embedding extension, nonuniqueness, and separable closures.
- Ulrich Thiel, *Commutative Algebra*: `https://ulthiel.com/math/files/Commutative-Algebra.pdf`. Read §1.4, printed pages 23–27. Supports the finite-support arbitrary-variable polynomial ring, its universal property, subfamily iteration, and the finite-family dictionary.
- The Stacks Project, §9.15, Normal extensions: `https://stacks.math.columbia.edu/tag/09HL`. Verified the exact normality convention, intersections of normal subextensions, generation criteria, and extension of embeddings used in the normal-closure design.

The Milne, Thiel, and Stacks URLs were opened directly. The Clark author-hosted URL and PDF contents were verified during the harvest; a later repeat safe-open was rejected by the web tool's URL-safety layer rather than by the host.

Convention disagreements and resolutions:

- The published library declares the zero polynomial nonseparable and nonzero constants separable. Clark and Milne formulate separability for nonzero polynomials; the scaffold preserves the library convention and never applies the criterion to zero.
- Clark defines perfectness through separability of irreducibles, while Milne uses characteristic zero or surjectivity of Frobenius. The scaffold uses the former as `def-perfect-field` and proves the latter as `thm-perfect-field-characterizations`.
- Separable degree is defined here only for finite algebraic extensions, so it is an ordinary natural-number count. No infinite-cardinal arithmetic is smuggled into the tower formula.
- Natural-number exponents begin at zero in this library. The pure-power irreducibility lemma explicitly assumes $n\ge1$; $e=0$, an empty generating family, a rank-zero $p$-basis, and the identity extension are separately discharged.
- An algebraic closure is unique only up to a generally nonunique base-field isomorphism. No universal-property language implying uniqueness appears.
- Thiel's arbitrary-variable polynomial ring uses finite-support exponent tuples. The finite-family corollary proves agreement with the library's recursive `def-multivariate-polynomial-ring-by-iteration`; there is no silent second polynomial-ring notion.

## Published dependency closure

Every one of the 57 external dependency ids in the manifest was opened from `items/` and checked for `status: published`, exact Statement or Definition, domain, quantifiers, hypotheses, conclusion, and direction. Every external dependency is on a strictly earlier published page. Every other dependency is an earlier item on the same A page or an A-page item consumed by its B companion.

No external dependency is legacy-unclassified. Literature-derived statements were used directly. The AI-altered statement targets were read rather than trusted by title: `def-countable`, `def-field`, `def-field-homomorphism`, `def-finite-cardinality`, `def-finite-sum-in-a-commutative-monoid`, `def-linear-basis`, `def-repeated-root-and-separable-polynomial`, `def-ring-homomorphism`, `def-subfield`, `def-vector-space`, `cor-splitting-fields-exist-for-finite-families`, `prop-algebraic-splitting-extensions-are-normal`, `prop-nonempty-intersections-of-normal-subextensions-are-normal`, `thm-nth-roots-exist`, `thm-reals-ordered-field`, and `thm-universal-property-of-adjoining-an-irreducible-root`. Their exact claims match the planned uses; where conventions were material, they were source-checked against Clark, Milne, Thiel, or the Stacks URL above.

The proof-contract file contains exact on-disk clauses for every published dependency cited in its planned first proof step, with uses anchored to `1.1`. Planned same-batch dependencies do not yet have on-disk Statement text; they are recorded as `planned:<id>` inputs. At Step 5, after each source item is authored, those inputs must be replaced or supplemented with exact `[F#]`/`[L#]` citation entries and exact Statement clauses before the strict proof-contract gate.

## Proof-obligation and boundary pass

- **Family polynomial ring:** prove product support is finite, coefficient convolutions are finite, constants embed, the empty index set returns $R$, and the finite ordered family agrees in both directions with the recursive construction.
- **Artin ideal:** any alleged expression of $1$ uses only finitely many generators; the finite product is nonzero; one splitting field supplies all required roots; the evaluation homomorphism sends unused variables somewhere defined; the contradiction is exactly $1=0$.
- **Root quotient:** the generated ideal is proper before a maximal ideal is chosen; the quotient is a field; every base polynomial has a root; every quotient element uses finitely many algebraic residue generators, proving the whole extension algebraic.
- **One-step theorem:** the perfect case uses the generalized primitive-element theorem without assuming normality; the characteristic-$p$ subfield contains $F$, is a field, has surjective Frobenius, inherits the root property, and leaves $L$ algebraic over it. Characteristic zero and positive characteristic are separate exhaustive branches.
- **Zorn embedding extension:** the poset is nonempty, a chain union is a well-defined compatible embedding, an omitted algebraic element has a transported minimal polynomial with a root, and maximality forces the whole domain. The Statement exposes the choice cost.
- **Closure isomorphism:** extension gives injectivity; algebraic closedness of the source proves surjectivity; no step asserts uniqueness. The B-page witness extends $a\mapsto-a$ from a root of $x^2+1$ and produces a genuinely nonidentity closure automorphism without using $\mathbb C$.
- **Primitive elements:** finite and infinite base fields are separate; the finite-union lemma handles the zero-dimensional and empty-family cases; the collision set in the infinite-field proof is finite; gcd stability is applied over the correct coefficient extension.
- **Separable degree:** well-definedness uses postcomposition by a closure isomorphism; restriction fibres are nonempty and equinumerous; the full-degree reverse implication compares the two factors in $F\subseteq F(\alpha)\subseteq K$ using multiplicativity and the degree bounds, without transitivity. For separability transitivity itself, the finite coefficient field is built by a simple tower and polynomial-gcd stability is applied over the exact coefficient extension before multiplicativity. Both tower products are finite.
- **Pure structure:** $x^{p^n}-a$ assumes $n\ge1$ and $a$ not a $p$th power; pure characterizations cover the identity extension and characteristic zero; rank-zero $p$-bases give degree one; the $p$-power degree proof never divides by separable degree before divisibility is proved.
- **Two-variable witness:** $c$ ranges over the infinite base field $\mathbb F_p(s^p,t^p)$, not merely the finite prime field. Equality of two intermediate fields would put both $s$ and $t$ in a degree-$p$ field, contradicting the degree-$p^2$ basis.
- **Examples:** $\overline{\mathbb F_p}$ uses nested $\mathbb F_{p^{n!}}$ to avoid a non-nested union; the cube-root automorphism count uses the ordered real subfield only to prove a unique internal real root; the perfect-closure union starts at $n=0$ and obtains pth roots in the next stage.

All eight boundary dispositions appear in every proof-bearing contract. No registered finite-smoke test models these field-theoretic claims, so every `finite_smoke` array is empty rather than pretending that a graph, group, or poset test applies.

## Per-item expected component provenance

The table below records the final Step-5 classification. Every literature-derived or AI-altered statement carries the Clark, Milne, Thiel, or Stacks URL named in its rationale in `sources.references`. Definitions have `proof: not-applicable`; all other source-backed proofs are locally adapted and therefore `ai-altered`. The source-backed false statements are non-load-bearing leaves, and their locally generated refutations use the exact witnesses checked below.

| Item | statement | proof | Rationale and Step-5 reference route |
|---|---|---|---|
| `def-monomials-on-an-index-set` | `literature-derived` | `not-applicable` | Thiel §1.4 (https://ulthiel.com/math/files/Commutative-Algebra.pdf); the finite-family corollary also cites the published recursive construction. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-polynomial-ring-on-a-family-of-indeterminates` | `literature-derived` | `not-applicable` | Thiel §1.4 (https://ulthiel.com/math/files/Commutative-Algebra.pdf); the finite-family corollary also cites the published recursive construction. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-polynomial-ring-on-a-family-is-a-commutative-ring` | `literature-derived` | `ai-altered` | Thiel §1.4 (https://ulthiel.com/math/files/Commutative-Algebra.pdf); the finite-family corollary also cites the published recursive construction. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-universal-property-of-a-polynomial-ring-on-a-family` | `literature-derived` | `ai-altered` | Thiel §1.4 (https://ulthiel.com/math/files/Commutative-Algebra.pdf); the finite-family corollary also cites the published recursive construction. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction` | `literature-derived` | `ai-altered` | Thiel §1.4 (https://ulthiel.com/math/files/Commutative-Algebra.pdf); the finite-family corollary also cites the published recursive construction. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-f-homomorphisms-and-embeddings-of-field-extensions` | `literature-derived` | `not-applicable` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-conjugate-elements-over-a-field` | `literature-derived` | `not-applicable` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `prop-base-field-embeddings-carry-elements-to-conjugates` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-separable-elements-and-separable-extensions` | `literature-derived` | `not-applicable` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power` | `literature-derived` | `ai-altered` | Clark Chapter 3/5 and Milne Chapter 6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-perfect-field` | `ai-altered` | `not-applicable` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement combines or narrows source clauses to the library convention; no quantifier, hypothesis, direction, or conclusion may be widened at authoring. |
| `thm-perfect-field-characterizations` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-algebraic-extensions-of-perfect-fields-are-separable` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `lem-simple-finite-extension-has-finitely-many-intermediate-fields` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `lem-finite-extension-with-finitely-many-intermediate-fields-is-simple` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-steinitz-primitive-element-criterion` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-primitive-element-theorem-for-finite-separable-extensions` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-finite-separable-extension-has-finitely-many-intermediate-fields` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-finite-extension-of-a-perfect-field-is-simple` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-algebraic-closure` | `literature-derived` | `not-applicable` | Clark Chapter 3/5 and Milne Chapter 6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `lem-artin-simultaneous-root-ideal-is-proper` | `literature-derived` | `ai-altered` | Clark Chapter 3/5 and Milne Chapter 6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-one-step-simultaneous-root-extension` | `literature-derived` | `ai-altered` | Clark Chapter 3/5 and Milne Chapter 6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `lem-perfect-subfield-of-a-one-step-root-extension-in-positive-characteristic` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-one-step-algebraic-root-extension-is-algebraically-closed` | `literature-derived` | `ai-altered` | Clark Chapter 3/5 and Milne Chapter 6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-existence-of-algebraic-closures` | `literature-derived` | `ai-altered` | Clark Chapter 3/5 and Milne Chapter 6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-algebraic-embedding-extension` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-algebraic-closures-are-isomorphic-over-the-base` | `literature-derived` | `ai-altered` | Clark Chapter 3/5 and Milne Chapter 6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-normal-closure-of-an-algebraic-extension` | `literature-derived` | `not-applicable` | Milne Chapter 6 (https://www.jmilne.org/math/Books/FT0.pdf) and Stacks §9.15 (https://stacks.math.columbia.edu/tag/09HL). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-finite-normal-closures-exist-and-are-finite` | `literature-derived` | `ai-altered` | Milne Chapter 6 (https://www.jmilne.org/math/Books/FT0.pdf) and Stacks §9.15 (https://stacks.math.columbia.edu/tag/09HL). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-separable-degree` | `literature-derived` | `not-applicable` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-separable-degree-is-independent-of-the-algebraic-closure` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `lem-restriction-fibres-for-embeddings-in-a-finite-tower` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The source theorem gives the restriction-fibre description directly; the proof is locally adapted to the chosen algebraic closure and library notation. |
| `thm-multiplicativity-of-separable-degree` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-separable-degree-is-at-most-extension-degree` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-separable-degree-of-a-simple-extension-counts-distinct-roots` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-finite-extension-is-separable-iff-separable-degree-is-full` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-separability-is-transitive` | `literature-derived` | `ai-altered` | Clark Chapter 3/5 and Milne Chapter 6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-extension-generated-by-separable-elements-is-separable` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-separable-elements-form-an-intermediate-field` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-separable-closure-in-an-algebraic-extension` | `literature-derived` | `not-applicable` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-purely-inseparable-extension` | `literature-derived` | `not-applicable` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-purely-inseparable-extension-characterizations` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-pure-inseparability-is-transitive-and-stable-under-composita` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-p-basis-of-an-exponent-one-purely-inseparable-extension` | `ai-altered` | `not-applicable` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement combines or narrows source clauses to the library convention; no quantifier, hypothesis, direction, or conclusion may be widened at authoring. |
| `thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-finite-purely-inseparable-extensions-have-prime-power-degree` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-purely-inseparable-extensions-are-normal` | `literature-derived` | `ai-altered` | Milne Chapter 6 (https://www.jmilne.org/math/Books/FT0.pdf) and Stacks §9.15 (https://stacks.math.columbia.edu/tag/09HL). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-separable-closures-exist-and-are-isomorphic-over-the-base` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-separable-degree-is-the-degree-of-the-separable-closure` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `thm-separable-degree-divides-extension-degree` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `def-inseparable-degree` | `literature-derived` | `not-applicable` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-degree-factors-into-separable-and-inseparable-degrees` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cor-separable-and-purely-inseparable-extension-is-trivial` | `literature-derived` | `ai-altered` | Clark Chapters 3–5 and Milne Chapters 2, 3, and 5 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf). The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `ex-algebraic-closure-of-the-rationals-and-real-algebraic-subfield` | `ai-altered` | `ai-altered` | Clark Corollary 3.4 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf) combined with the published real-algebraic subfield construction. The statement combines or narrows source clauses to the library convention; no quantifier, hypothesis, direction, or conclusion may be widened at authoring. |
| `ex-algebraic-closure-of-a-finite-field` | `literature-derived` | `ai-altered` | Milne finite-field and closure treatments (https://www.jmilne.org/math/Books/FT0.pdf), specialized through the published finite-field lattice. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `ex-cube-root-extension-has-three-embeddings-and-one-automorphism` | `literature-derived` | `ai-altered` | Clark Chapter 4 or Milne Chapters 2–6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf), using the explicit witness named in the manifest. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `ex-biquadratic-extension-has-four-embeddings` | `ai-altered` | `ai-altered` | Milne/Clark embedding count (https://www.jmilne.org/math/Books/FT0.pdf; https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf) applied to the published biquadratic example. The statement combines or narrows source clauses to the library convention; no quantifier, hypothesis, direction, or conclusion may be widened at authoring. |
| `ex-x-p-minus-t-is-irreducible-and-inseparable` | `literature-derived` | `ai-altered` | Clark Chapter 4 or Milne Chapters 2–6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf), using the explicit witness named in the manifest. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p` | `literature-derived` | `ai-altered` | Clark Chapter 4 or Milne Chapters 2–6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf), using the explicit witness named in the manifest. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `cex-degree-p-squared-purely-inseparable-extension-is-not-simple` | `literature-derived` | `ai-altered` | Clark Chapter 4 or Milne Chapters 2–6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf), using the explicit witness named in the manifest. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `ex-perfect-closure-of-fp-t-is-an-infinite-perfect-field` | `literature-derived` | `ai-altered` | Clark Chapter 4 or Milne Chapters 2–6 (https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf; https://www.jmilne.org/math/Books/FT0.pdf), using the explicit witness named in the manifest. The statement is the named source result or explicit source example; the proof is adapted to the declared dependencies and boundary conventions rather than copied. |
| `fs-every-irreducible-polynomial-is-separable` | `ai-altered` | `ai-generated` | Clark and Milne explicitly supply the irreducible inseparable phenomenon; the universal false claim is a source-backed reformulation in library notation. The local refutation uses the checked $x^p-t$ witness and is not a dependency target. |
| `fs-separable-degree-always-equals-extension-degree` | `ai-altered` | `ai-generated` | Clark and Milne explicitly distinguish ordinary and separable degree; the universal false claim is a source-backed reformulation in library notation. The local refutation uses the checked $\mathbb F_p(t)/\mathbb F_p(t^p)$ witness and is not a dependency target. |
| `fs-every-algebraic-extension-is-simple` | `ai-altered` | `ai-generated` | Milne's treatments of finite fields and algebraic closures support the obstruction; the universal false claim is a source-backed reformulation in library notation. The local refutation uses the checked algebraic closure of a finite field and is not a dependency target. |
| `fs-algebraic-closure-is-unique-up-to-unique-isomorphism` | `ai-altered` | `ai-generated` | Clark's algebraic-closure uniqueness result asserts existence rather than uniqueness; the universal false claim is a source-backed reformulation in library notation. The local refutation uses the checked conjugate roots of $x^2+1$ and is not a dependency target. |

## False-statement witness checks

- `fs-every-irreducible-polynomial-is-separable`: the source-backed false claim is refuted by $x^p-t$ over $\mathbb F_p(t)$. The reduced-fraction UFD argument proves that $t$ is not a pth power, and the derivative is zero.
- `fs-separable-degree-always-equals-extension-degree`: the source-backed false claim is refuted by $\mathbb F_p(t)/\mathbb F_p(t^p)$. The valuation argument gives ordinary degree $p$, while the purely inseparable characterization gives separable degree one.
- `fs-every-algebraic-extension-is-simple`: the source-backed false claim is refuted by $\overline{\mathbb F_p}/\mathbb F_p$. The authored finite-field closure example proves that the extension is algebraic and infinite, whereas a simple algebraic extension is finite.
- `fs-algebraic-closure-is-unique-up-to-unique-isomorphism`: the source-backed false claim is refuted in an algebraic closure of $\mathbb Q$ by the distinct roots $a$ and $-a$ of $x^2+1$. Embedding extension supplies a map carrying $a$ to $-a$, and the image is shown algebraically closed and algebraic over $\mathbb Q$, hence is the whole closure; the resulting automorphism is not the identity.

No Statement or Construction in this batch is `ai-generated`. The false statements are `ai-altered` source-backed reformulations, their refutations are `ai-generated`, and none is a dependency target. The source-backed examples and counterexample are literature-derived or AI-altered specializations, not scraped prose.

## Gate record

- `jq -e . research/frontier-15-batch-3.pages.json`: pass.
- `jq -e . research/frontier-15-batch-3.coverage.json`: pass.
- `jq -e . research/frontier-15-batch-3.proof-contracts.json`: pass.
- Internal same-batch order check over every declared dependency: pass, with no same-page forward edge. Published-home reconstruction from the page frontmatter resolves all external dependencies to orders below 98.
- Current-id collision search with `rg` against `items/` frontmatter and `research/plan-spec.json`: pass; no planned id is already present.
- Exact contract-source substring check against each published item's named Statement or Definition section: pass. `citation-fidelity.mjs` itself correctly skips these contracts until the citing items are authored at Step 5, so no authored-item citation-fidelity pass is claimed now.
- `node tools/content-policy.mjs --manifest-only research/frontier-15-batch-3.pages.json`: pass; 72 scoped items, no errors or warnings.
- `node tools/coverage-checklist.mjs research/frontier-15-batch-3.coverage.json`: pass; 108 harvested results, no errors or warnings.
- `node tools/prosecheck.mjs ... --warnings`: pass; no errors or warnings across the batch artifacts.
- `node tools/boundary-audit.mjs research/frontier-15-batch-3.proof-contracts.json --fail-on-template`: pass; rows=472, no template cluster and no mechanically contradicted disposition. The contradiction detector notes that the in-flight items are not authored yet, as expected at Step 2.
- `git diff --check` on the batch artifacts: pass. Applied-canonical-embedding search: no occurrence.
- `url-sweep.mjs --recover --fail-on-dead` was executed through a no-write stdout adaptation because the namespaced write boundary excludes a liveness receipt. This shell cannot resolve DNS (`curl` exit 6 for every coverage host), so the liveness gate did not pass and is not claimed. Each exact URL was separately opened and read with the web research tool during the harvest; the engine must rerun the canonical liveness gate in its networked Step-2 environment.
- Authoritative `validate-plan.mjs` and `depsource.mjs` against the spliced spec: not run and not claimed at Step 2. The engine must run them after Step 4.

## Confidence and unverified matters

Confidence is high on the mathematical architecture, source coverage, and current dependency closure. The highest-risk proofs—the Artin ideal calculation, positive-characteristic one-step reduction, generalized primitive-element theorem, full-degree criterion, separable-closure quotient, and two-variable nonsimple witness—have explicit decomposition and boundary obligations in the contracts.

I did not verify the eventual authored prose, citations to same-batch items that do not yet exist on disk, Step-4 splice output, downstream consumer rewrites after a possible split, or the independent Alpha/judge verdicts. I did not run a finite-smoke model because the registered checks do not model these field-theoretic claims. Shell DNS prevented a canonical URL-liveness receipt even though the same exact URLs were opened through the web research path. I did not claim either spliced-plan gate or the URL-liveness gate.

## Step-3 fix pass

- **B3-1 — applied.** Alpha's manifest repair is present: `algebraic-closure-embeddings-and-separability` requires exactly `algebraic-extensions-degree-and-finite-fields-examples`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, and `the-field-of-fractions-and-localisation`, matching the current `plan-spec.json`. Edit E1 above now carries the same three-edge replacement, so the prose-scaffold instruction no longer drops the two load-bearing pages.
- **B3-2 — applied.** Alpha's decline is accepted. The stale F2 recommendation has been replaced with the disk-verified fact that `order-zorn-and-the-axiom-of-choice` is already in the transitive prerequisite closure; no direct Zorn edge remains in the manifest or corrected E1.
- **B3-3 — applied.** Alpha's manifest repair is present: `lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed` declares `thm-transitivity-of-algebraicity`, and its strategy names the transitivity step. The proof contract now records the exact published Statement as fact P4, assigns its use to planned step 3.1, and lists P4 in that step's input map.

Fix-pass gate rerun:

- `node tools/coverage-checklist.mjs research/frontier-15-batch-3.coverage.json`: pass; the coverage page has 108 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-15-batch-3.pages.json`: pass; 72 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass for the current unspliced plan. This does not claim the Step-4 splice or validate the manifest's item list as spliced plan content.
- `node tools/prosecheck.mjs research/frontier-15-batch-3.pages.json research/frontier-15-batch-3.notes.md research/frontier-15-batch-3.proof-contracts.json --warnings`: final re-run pass; 0 errors, 0 warnings.
- `node tools/boundary-audit.mjs research/frontier-15-batch-3.proof-contracts.json --fail-on-template`: pass; 472 rows, no template-reuse cluster, no contradicted disposition.
- B3-3 contract synchronization check: pass; the manifest dependency, source id, exact source substring, use at step 3.1, and P4 input all match disk.

## Continuity checkpoint

- **Current substage:** Step-5 prose is drafted for every scaffolded A- and B-page item; page manifests, proof-contract regeneration, final provenance ledger, and gates remain.
- **Owned artifacts:** the item ids in the namespaced batch manifest; the algebraic-closure A and examples page files under `library/abstract-algebra/`; and the namespaced notes, coverage, and proof-contract files.
- **Completed gates:** no Step-5 gate is yet claimed. Step-2 and Step-3 scaffold checks recorded above remain historical only.
- **Frozen presentation:** item prose follows the existing Facts/Phases format; definitions use forward justification only where existence or independence requires it. The A-page summary and both page files have not yet been written.
- **Open mathematical constraints:** verify every final dependency against the prose, add the earlier same-page inseparability example if the $\mathbb F_p(t)/\mathbb F_p(t^p)$ proof retains that citation, and reconcile all final boundary rows and exact excerpts. The four false-statement items use source-backed `ai-altered` statements rather than prohibited `ai-generated` false statements; this reclassification must be recorded in the Step-5 ledger.
- **Exact next action:** compare the scaffold id set with files on disk, write both page manifests, then run reflow and precheck before adding any `verification.precheck: pass` field.

## Step-5 authoring

Both declared pages and every scaffolded item were authored. The A-page summary was written last from the final dependency graph; the B page has no authored summary body. No item was dropped, renamed, merged, or added, and the coverage dispositions therefore remain unchanged.

### Per-item precheck record

The component-provenance values shown here match the exhaustive source/edit rationales in **Per-item expected component provenance** above, corrected there to their final Step-5 values.

#### `algebraic-closure-embeddings-and-separability`

- `def-monomials-on-an-index-set` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `def-polynomial-ring-on-a-family-of-indeterminates` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `thm-polynomial-ring-on-a-family-is-a-commutative-ring` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-universal-property-of-a-polynomial-ring-on-a-family` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `def-f-homomorphisms-and-embeddings-of-field-extensions` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `def-conjugate-elements-over-a-field` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `prop-base-field-embeddings-carry-elements-to-conjugates` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `def-separable-elements-and-separable-extensions` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `def-perfect-field` — precheck `n/a`; provenance `ai-altered` / `not-applicable`.
- `thm-perfect-field-characterizations` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-algebraic-extensions-of-perfect-fields-are-separable` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `lem-simple-finite-extension-has-finitely-many-intermediate-fields` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `lem-finite-extension-with-finitely-many-intermediate-fields-is-simple` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-steinitz-primitive-element-criterion` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-primitive-element-theorem-for-finite-separable-extensions` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-finite-separable-extension-has-finitely-many-intermediate-fields` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-finite-extension-of-a-perfect-field-is-simple` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `def-algebraic-closure` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `lem-artin-simultaneous-root-ideal-is-proper` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-one-step-simultaneous-root-extension` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `lem-perfect-subfield-of-a-one-step-root-extension-in-positive-characteristic` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-one-step-algebraic-root-extension-is-algebraically-closed` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-existence-of-algebraic-closures` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-algebraic-embedding-extension` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-algebraic-closures-are-isomorphic-over-the-base` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `def-normal-closure-of-an-algebraic-extension` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `thm-finite-normal-closures-exist-and-are-finite` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `def-separable-degree` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `thm-separable-degree-is-independent-of-the-algebraic-closure` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `lem-restriction-fibres-for-embeddings-in-a-finite-tower` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-multiplicativity-of-separable-degree` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-separable-degree-is-at-most-extension-degree` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-separable-degree-of-a-simple-extension-counts-distinct-roots` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-finite-extension-is-separable-iff-separable-degree-is-full` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-separability-is-transitive` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-extension-generated-by-separable-elements-is-separable` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-separable-elements-form-an-intermediate-field` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `def-separable-closure-in-an-algebraic-extension` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `def-purely-inseparable-extension` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `thm-purely-inseparable-extension-characterizations` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-pure-inseparability-is-transitive-and-stable-under-composita` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `def-p-basis-of-an-exponent-one-purely-inseparable-extension` — precheck `n/a`; provenance `ai-altered` / `not-applicable`.
- `thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-finite-purely-inseparable-extensions-have-prime-power-degree` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-purely-inseparable-extensions-are-normal` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-separable-closures-exist-and-are-isomorphic-over-the-base` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-separable-degree-is-the-degree-of-the-separable-closure` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `thm-separable-degree-divides-extension-degree` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `def-inseparable-degree` — precheck `n/a`; provenance `literature-derived` / `not-applicable`.
- `cor-degree-factors-into-separable-and-inseparable-degrees` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cor-separable-and-purely-inseparable-extension-is-trivial` — precheck `pass`; provenance `literature-derived` / `ai-altered`.

#### `algebraic-closure-embeddings-and-separability-examples`

- `ex-algebraic-closure-of-the-rationals-and-real-algebraic-subfield` — precheck `pass`; provenance `ai-altered` / `ai-altered`.
- `ex-algebraic-closure-of-a-finite-field` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `ex-cube-root-extension-has-three-embeddings-and-one-automorphism` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `ex-biquadratic-extension-has-four-embeddings` — precheck `pass`; provenance `ai-altered` / `ai-altered`.
- `ex-x-p-minus-t-is-irreducible-and-inseparable` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `cex-degree-p-squared-purely-inseparable-extension-is-not-simple` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `ex-perfect-closure-of-fp-t-is-an-infinite-perfect-field` — precheck `pass`; provenance `literature-derived` / `ai-altered`.
- `fs-every-irreducible-polynomial-is-separable` — precheck `pass`; provenance `ai-altered` / `ai-generated`.
- `fs-separable-degree-always-equals-extension-degree` — precheck `pass`; provenance `ai-altered` / `ai-generated`.
- `fs-every-algebraic-extension-is-simple` — precheck `pass`; provenance `ai-altered` / `ai-generated`.
- `fs-algebraic-closure-is-unique-up-to-unique-isomorphism` — precheck `pass`; provenance `ai-altered` / `ai-generated`.

### Scaffold-change ledger

No title or mathematical statement was changed from the approved scaffold. The final proofs use the following dependency-list changes; each added edge is cited in the prose, and each dropped edge is absent because its exact statement was not used.

- `thm-polynomial-ring-on-a-family-is-a-commutative-ring`: added `def-monomials-on-an-index-set` for the finite-support and empty-index clauses used in the convolution construction.
- `lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power`: added the preceding separable-core theorem for the irreducible-factor form used in the proof.
- `lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed`: added `thm-finitely-generated-algebraic-extensions-are-finite` for the finite splitting extension to which the primitive-element theorem is applied.
- `cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure`: added `def-algebraic-closure` and `thm-evaluation-kernel-and-minimal-polynomial`; dropped `cor-algebraic-closures-are-isomorphic-over-the-base`, whose exact Statement gives existence but does not make an arbitrary extended embedding surjective. Surjectivity is proved from the algebraically closed image.
- `thm-finite-normal-closures-exist-and-are-finite`: added `def-extension-degree-and-finite-extension` for the finiteness conclusion; dropped `prop-finitely-generated-normal-extensions-are-splitting-fields` because the proof constructs the splitting field directly.
- `def-separable-degree`: added algebraic-closure existence, the simple-extension embedding theorem, and `def-finite-cardinality` to discharge existence and finiteness in the definition itself.
- `cor-separable-degree-is-at-most-extension-degree`: added `def-extension-degree-and-finite-extension` for the dimension bound and dropped the unused finite-generation theorem.
- `thm-separability-is-transitive`: added the separability definition because its exact elementwise condition is used directly.
- `thm-separable-elements-form-an-intermediate-field`: dropped the unused finite-generation theorem; the proof uses the generated-by-separable-elements theorem directly.
- `ex-algebraic-closure-of-a-finite-field`: added algebraic embedding extension to place each finite field in the chosen closure.
- `ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p`: added the polynomial-ring UFD theorem for the local valuation argument.
- `cex-degree-p-squared-purely-inseparable-extension-is-not-simple`: added the polynomial-ring UFD theorem and dropped the same B-page one-variable example, the tower law, and the product-basis lemma. Local $s$- and $t$-adic valuation arguments establish the exponent-one hypotheses, and the A-page $p$-basis theorem supplies the basis and degree without violating the leaf rule.
- `fs-algebraic-closure-is-unique-up-to-unique-isomorphism`: added `def-algebraic-closure` and `thm-evaluation-kernel-and-minimal-polynomial` for the local surjectivity argument after extending the nontrivial embedding.

The exact-citation pass also narrowed descriptive Facts to the propositions actually stated on disk: algebraic-closure isomorphism is cited only for existence; closure-independence of separable degree is cited only for its equality; the rational-function fraction-field result is not made to assert infinitude; and the restriction-fibre lemma proves its base-realization transport inline. These are proof-text repairs, not changes to the scaffolded claims.

### Final provenance and truth-risk disposition

The exhaustive table above is the per-item source/edit ledger. Literature-derived Statements reproduce or faithfully shorten the cited Clark, Milne, Thiel, or Stacks result; their proofs are locally adapted and marked `ai-altered`. `def-perfect-field` and `def-p-basis-of-an-exponent-one-purely-inseparable-extension` are `ai-altered` source combinations with no proof component. The rational/real closure and biquadratic examples are `ai-altered` specializations whose witnesses are proved locally. The false statements were reclassified from the scaffold expectation to `ai-altered` because each is a source-backed false universal claim reformulated in library notation; only the local refutation is `ai-generated`. The witness checks above record the scope and outcome. No `ai-generated` Statement or Construction was retained.

No published dependency was edited. Every added or retained published target was opened at its actual Statement or Definition, and no load-bearing target has an `ai-generated` Statement. No legacy-unclassified load-bearing dependency remained.

### Escalations and confidence

There is no mathematical or scope escalation for this batch. Confidence is high in the authored statements, dependency fidelity, boundary handling, and the explicitly checked positive-characteristic witnesses. I did not run a Step-7 judge, did not set `verification.audited`, did not perform an independent Alpha audit, and did not obtain a new shell URL-liveness receipt; source URLs and excerpts are those harvested and read during scaffolding. The final gate results follow after the rerun below.

### Final Step-5 gate record

- `tools/reflow.mts` over every scoped item: pass; every file was unchanged.
- `tools/precheck.mts` over every proof-bearing scoped item: pass; `59 checked, 0 failing`. Definitions retain `verification.precheck: n/a`, while every proof-bearing item records `verification.precheck: pass` only after this successful run.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass; the declared page order is acyclic and the pages with item lists have no item-level cycle, forbidden forward edge, B-page dependency, or unresolved id.
- `node tools/content-policy.mjs research/frontier-15-batch-3.pages.json`: pass; `72` scoped items, no errors or warnings.
- `node tools/proof-contract.mjs research/frontier-15-batch-3.proof-contracts.json --strict`: pass; every proof-bearing item checked with no error or warning. Each direct citation has an exact source excerpt and uses, and every numbered step has one input-map entry.
- `node tools/citation-fidelity.mjs research/frontier-15-batch-3.proof-contracts.json --fail-on-missing-quote`: pass; `222` citations over the authored proofs, no missing quote and no widening candidate from the registered detectors.
- `node tools/boundary-audit.mjs research/frontier-15-batch-3.proof-contracts.json --fail-on-template --fail-on-contradiction`: pass; `472` boundary rows, no template-reuse cluster and no contradicted disposition.
- `node tools/coverage-checklist.mjs research/frontier-15-batch-3.coverage.json`: pass; `108` harvested results, no error or warning. Every `included` id exists in the authored set.
- `node tools/prosecheck.mjs` on the scoped items, page files, and namespaced artifacts with `--warnings`: pass; no error or warning.
- `node tools/audit-manifest.mjs research/frontier-15-batch-3.pages.json`: pass; `259` classified relationships over the batch, no defect.
- Global `depcheck.mjs`, `fwdcheck.mjs`, `extcheck.mjs`, `citecheck.mjs`, and `depsource.mjs`: each exited successfully. The global checkers retain advisory corpus warnings, but report no hard failure; `depsource.mjs` reports no unresolved dependency provenance.
- `rendercheck.mjs`: pass on every scoped item, both page files, and the full current corpus. Math spans parse with the renderer's KaTeX and frontmatter parses with its YAML parser.
- Final ownership audit over the scoped items, pages, and namespaced artifacts: no applied canonical embedding, no `verification.audited`, and no trailing whitespace. The A-page summary has exactly two nonempty paragraphs and each remains below the word limit.

This completes Step 5 only. No judge verdict is claimed.
