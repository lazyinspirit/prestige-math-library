# Frontier 13, batch 2: Beta scaffold and authoring notes

Run: frontier-13  
Batch: 2, unit groups and split extensions  
Scope: steps 1–2 scaffold, with durable obligations for the returning Step-5 author

## Result and split decision

The scaffold contains four pages and 75 items:

| order | page | kind | items |
|---:|---|:---:|---:|
| 57.001 | primitive-roots-and-unit-groups-modulo-n | A | 26 |
| 57.002 | primitive-roots-and-unit-groups-modulo-n-examples | B | 11 |
| 68 | semidirect-products-and-automorphism-groups | A | 23 |
| 69 | semidirect-products-and-automorphism-groups-examples | B | 15 |

No split is proposed. The A pages have 26 and 23 items, both well below the 60-item ceiling, and each remains a coherent reading unit. The first keeps prime-field cyclicity, odd and two-power lifting, CRT structure, Carmichael exponent, classification, and index calculus together. The second keeps the semidirect-product construction, internal recognition, splitting, automorphism quotients, holomorphs, standard automorphism computations, and order-$pq$ classification together.

The B pages are leaves. No A-page item depends on a B-page item, and no B-page item depends on another B-page item. There is no dependency edge from semidirect-products-and-automorphism-groups to primitive-roots-and-unit-groups-modulo-n.

## Proposed page summaries

### primitive-roots-and-unit-groups-modulo-n

A primitive root modulo $n$ is a generator of the finite unit group $(\mathbb Z/n\mathbb Z)^\times$. This page develops the order and index calculus of a chosen generator, proves that the multiplicative group of every prime field is cyclic, and carries primitive roots from odd primes to all odd prime powers. It separately proves the exceptional two-power structure $(\mathbb Z/2^k\mathbb Z)^\times\cong C_2\times C_{2^{k-2}}$ for $k\ge3$, including the exact order of $5$.

The Chinese remainder theorem then assembles the prime-power factors into the full structure of the unit group modulo any positive integer. From that decomposition the page derives Carmichael's exponent and its prime-power/lcm formula, classifies exactly the moduli $1,2,4,p^k,2p^k$ that admit primitive roots, and counts their primitive roots. The companion page turns the structural results into generator tests, index tables, explicit decompositions, Carmichael calculations, square-root calculations, and counterexamples separating group order from exponent and cyclicity.

### semidirect-products-and-automorphism-groups

An action of $H$ on $N$ by automorphisms twists the direct-product law to form the external semidirect product $N\rtimes H$. This page proves the group law, identifies the canonical normal factor and complement, and proves the internal recognition theorem. It recasts the same structure as a split extension and proves the equivalence among a homomorphic section, a complement to the kernel, and a semidirect-product decomposition. It also records when the canonical decomposition is an internal direct product and when changed actions give isomorphic products.

The automorphism side builds the outer automorphism group, the characteristic-in-normal lemma, and the holomorph with its faithful affine action and regular-normal-subgroup recognition property. It computes $\operatorname{Aut}(C_n)$ and $\operatorname{Aut}(\mathbb Z^n)$, develops generalized and ordinary dihedral groups, and closes with a self-contained classification of groups of order $pq$. The companion supplies affine, dihedral, symmetric, holomorph, cyclic-extension, and small-order examples, together with the principal failures involving nonsplitting, nonnormal complements, characteristic subgroups, extension data, and nonabelian automorphism groups.

## Hard seam between the pairs

No Pair-B item cites Pair A. The only unit-group result Pair B needs is the elementary identification $\operatorname{Aut}(C_n)\cong(\mathbb Z/n\mathbb Z)^\times$, proved locally from the image of a cyclic generator and the published unit criterion. The order-$pq$ proof needs uniqueness of an order-$p$ subgroup in $U(q)$, so Pair B builds the focused lemma that $x^d=1$ has at most $d$ solutions modulo the prime $q$, using only the published field structure of $\mathbb Z/q\mathbb Z$. It does not cite Pair A's cyclicity or classification.

Accordingly, no new requires edge is recommended. Adding the Pair-A edge would be unnecessary coupling. Pair B's free-abelian automorphism theorem also avoids an illegal forward edge to the later matrix pages: it defines the integer coefficient-array notation $GL_n(\mathbb Z)$ inside the theorem and proves the composition dictionary directly from the free-abelian universal property.

## Canonical-coverage harvest

The gated artifact is research/frontier-13-batch-2.coverage.json. Its 96 source headings have these dispositions:

| A page | harvested | included | inline | already published | deferred | out of scope |
|---|---:|---:|---:|---:|---:|---:|
| primitive roots and unit groups | 46 | 27 | 12 | 2 | 0 | 5 |
| semidirect products and automorphisms | 50 | 36 | 6 | 3 | 0 | 5 |
| **total** | **96** | **63** | **18** | **5** | **0** | **10** |

The declines expected to receive scrutiny are:

- Hackman's two computations at modulus $40487$ are not dropped mathematics: the existence and lifting theorems are built, while the B page uses smaller hand-checkable moduli to expose the same tests.
- Hackman's decimal-period application belongs to numeral expansions rather than unit-group structure.
- Stein's two Sage transcripts are software demonstrations of root enumeration; their root-bound and primitive-root conclusions are proved symbolically and the B page uses independent arithmetic checks.
- Milne's $Q_8$ nonsplitting witness is a quaternion-specific alternate to the included cyclic-prime-square obstruction. The current Pair-B closure does not contain the quaternion page, so the scaffold neither cites nor reconstructs it.
- Milne's upper-triangular matrix example and Cameron's elementary-abelian $GL(n,p)$ example require the later matrix/vector-space interfaces. The requested integral free-abelian computation is nevertheless built locally.
- Cameron's two exercises about complete groups and iterated automorphism groups are specialised automorphism-classification results, not prerequisites for holomorph construction or recognition.

Every decline is individually explained in the coverage artifact. No missing local lemma was used as a reason to decline a canonical result.

## Source ledger and licensing

| key | source and exact range read | planned use | licensing note |
|---|---|---|---|
| HACK | Peter Hackman, *Elementary Number Theory*, Chapter C §§C.I–C.V, exact numbered results in the coverage file, https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf | primitive roots, binomial congruences, prime and prime-power lifting, two-power units, classification, index calculus, Carmichael exponent | University-hosted PDF; no licence is inferred. Citation only, with independently written statements and proofs. |
| STEIN | William Stein, *Elementary Number Theory*, §2.5, Definition 2.5.1 through Example 2.5.13, stopping before §2.5.3, https://wstein.org/ent/ent.pdf | independent prime-field cyclicity, root bound, primitive-root examples and generator counts | Publisher page labels a free legal PDF. Citation only; no source prose is copied. |
| CONRAD | Keith Conrad, *Semidirect Products*, §3 Definition 3.1–Theorem 3.11, §4 opening–Theorem 4.1, and all §6, https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf | external/internal products, recognition, action equivalences, affine and dihedral examples, order-$pq$ classification | Author-hosted lecture notes; no licence is inferred. Citation only and independent proof wording. |
| MILNE | J. S. Milne, *Group Theory*, selected exact Chapter-3 ranges enumerated in coverage, https://www.jmilne.org/math/CourseNotes/GT.pdf | automorphisms, characteristic subgroups, semidirect products, split extensions, outer automorphisms | Author-hosted course notes; no licence is inferred. Citation only and independent proof wording. |
| CAMERON | Peter J. Cameron, *Group Theory Notes*, §7.2 in full, https://webspace.maths.qmul.ac.uk/p.j.cameron/MTHM024/gn7.pdf | holomorph, affine action, regular-normal recognition, $\operatorname{Hol}(C_2^2)\cong S_4$ | University-hosted lecture notes; no licence is inferred. Citation only. |
| BV | Bridson–Vogtmann, *Automorphism Groups of Free Groups, Surface Groups and Free Abelian Groups*, abstract and first two introduction paragraphs, https://people.maths.ox.ac.uk/bridson/papers/karen05/karen06.pdf | independent source for the free-abelian $GL_n(\mathbb Z)$ identification | Author-hosted survey/preprint; no licence is inferred. Citation only. |

All URLs were opened and their locators checked against the displayed edition.

## Convention decisions and disagreements

- This library defines primitive roots for every positive modulus, so $n=1$ is included: its one-element unit group is cyclic and its unique class has order $\varphi(1)=1$. Several sources state the classification only for $n>1$.
- Carmichael's function is the group exponent and $\lambda(1)=1$. Hackman starts from maximal element order; the scaffold proves those descriptions equivalent rather than silently identifying them.
- The lift lemma uses the economical “one of $g$ and $g+p$” form. Sources also state the stronger affine family of $p$ lifts; the proof records why at most one lift is bad, but the theorem claims only what later items need.
- For $k=1$, the order of $1+pu$ modulo $p^k$ is one. The proof must not smuggle in a negative exponent.
- Direct-product cyclicity includes trivial factors and the empty CRT factorisation at $n=1$.
- Actions are left actions and the external multiplication is $(n,h)(n',h')=(n\alpha_h(n'),hh')$. Every inverse and comparison-map formula must follow this convention.
- $D_n$ means the dihedral group of order $2n$; some sources write $D_{2n}$. The title always states the order when ambiguity matters.
- $\operatorname{Dih}(A)$ is defined for abelian $A$, where inversion is an automorphism. It is not asserted for arbitrary nonabelian groups.
- A split extension includes the specified injection, quotient map, and section; an abstract isomorphism of the middle group is not by itself a splitting.
- $GL_n(\mathbb Z)$ is introduced here only as invertible finite integer coefficient arrays under the displayed finite-sum product. The later matrix page remains the canonical general matrix interface.
- In the order-$pq$ theorem $p<q$. The nonabelian type exists exactly when $p\mid(q-1)$, equivalently $q\equiv1\pmod p$.
- New text uses ordinary numerals in ambient algebraic structures and does not reproduce the legacy canonical-embedding-applied notation found in a few published dependencies.

No convention disagreement changes a theorem's truth value.

## Published dependency audit and confidence routes

All 62 direct published dependencies below were opened on disk through their exact Definition or Statement. Every one has status published; none has an ai-generated statement and none is legacy-unclassified. Proof provenance was not used to decide eligibility. No published dependency was found false. All homes were checked against the published library pages; none is homed on an examples page.

The following dependencies used the **established-from-knowledge** route after their exact on-disk domains, quantifiers, directions, and boundary conventions were inspected:

- def-common-divisor-and-gcd; def-congruence-modulo-an-integer; def-coprime; def-generated-subgroup; def-group; def-group-action; def-group-homomorphism; def-group-isomorphism-and-automorphism; def-lcm; def-order-in-a-group; def-subgroup; def-symmetric-group.
- lem-group-homomorphism-basic-properties; lem-group-power-laws; lem-order-characterisation; thm-induction-principle.

The following dependencies used the **source-checked** route. Their exact on-disk statements were compared with their cited references; the batch sources above independently check the number-theory and semidirect-product conventions:

- cor-euler-totient-is-multiplicative; cor-finite-subgroups-of-units-in-a-domain-are-cyclic; cor-order-of-a-quotient-group; cor-order-of-element-divides-group-order; cor-prime-order-group-is-cyclic; cor-totient-at-one-and-at-a-prime.
- def-binomial-coefficient; def-characteristic-subgroup; def-exponent-of-a-finite-group; def-external-direct-product-of-groups; def-factorial-and-falling-factorial; def-free-abelian-group; def-inner-automorphism-group; def-normal-subgroup; def-quotient-group; def-unit-group-modulo-n-and-euler-totient.
- lem-coprime-divides-product; lem-field-is-a-commutative-ring; lem-p-adic-valuation-additive; lem-p-adic-valuation-basic; lem-product-with-normal-subgroup.
- prop-canonical-quotient-map; prop-order-of-finite-direct-product.
- thm-automorphisms-form-a-group; thm-binomial-closed-formula; thm-canonical-prime-factorisation; thm-cauchys-theorem-for-finite-groups; thm-chinese-remainder-theorem; thm-classification-of-cyclic-groups; thm-conjugation-is-an-automorphism; thm-euclids-lemma; thm-external-direct-product-is-a-group; thm-first-isomorphism-theorem-groups; thm-group-actions-correspond-to-homomorphisms; thm-group-homomorphism-injective-iff-trivial-kernel; thm-image-subgroup-and-kernel-normal; thm-inner-automorphisms-normal-in-automorphism-group; thm-lagrange; thm-left-coset-action-and-its-kernel; thm-number-of-bijections-of-a-finite-set; thm-pascals-rule; thm-sign-is-a-homomorphism; thm-subgroups-of-cyclic-groups-are-cyclic; thm-totient-of-a-prime-power; thm-unit-criterion-modulo-n; thm-z-mod-p-is-a-field.

The primitive-root pair reaches its published dependencies through the companion-A interpretation of splitting-fields-examples; no item on that B page is cited. The semidirect-product pair reaches only the closure of its three declared prerequisites.

The prime-field cyclicity route is specifically:

1. thm-z-mod-p-is-a-field;
2. lem-field-is-a-commutative-ring, giving an integral domain;
3. cor-finite-subgroups-of-units-in-a-domain-are-cyclic, applied to the whole finite unit group.

This proves the load-bearing theorem rather than labelling it folklore.

## Planned component provenance

Every item in each group below receives the stated component values. The reason following each list applies separately to every listed item, and the relevant exact URL from the source ledger will appear in that item's sources.references.

### Primitive roots — A page

**statement literature-derived; proof not-applicable**

- def-primitive-root-modulo-n
- def-index-of-a-unit-relative-to-a-primitive-root
- def-carmichael-function

Reason for each: Hackman and Stein state the underlying definition or convention; the library fixes the $n=1$ and exponent conventions explicitly.

**statement literature-derived; proof ai-altered**

- prop-primitive-root-iff-unit-group-generator
- prop-index-calculus-modulo-n
- lem-order-of-a-power-in-a-finite-cyclic-group
- cor-generators-of-a-finite-cyclic-group
- lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime
- cor-unit-group-modulo-prime-is-cyclic
- cor-primitive-roots-modulo-prime
- cor-power-congruence-solution-count-modulo-a-prime
- lem-primitive-root-lift-to-prime-square
- lem-prime-power-binomial-congruence
- lem-order-of-one-plus-pu-modulo-prime-powers
- thm-unit-group-modulo-odd-prime-power-is-cyclic
- cor-number-of-primitive-roots-modulo-odd-prime-power
- lem-order-of-five-modulo-two-powers
- thm-unit-group-modulo-two-power-structure
- thm-unit-group-chinese-remainder-decomposition
- thm-structure-of-the-unit-group-modulo-n
- prop-carmichael-function-as-maximal-order
- thm-carmichael-function-formula
- cor-carmichael-exponent-theorem
- lem-primitive-roots-pass-between-odd-n-and-twice-n
- thm-classification-of-moduli-with-primitive-roots
- cor-number-of-primitive-roots-modulo-n

Reason for each: Hackman §§C.I, C.II, C.IV–C.V and Stein §2.5 supply the result. Proofs are reorganised to use the published domain-units theorem, local valuation lemmas, explicit CRT factorisation, and all library boundary conventions.

### Primitive roots — B page

**statement ai-altered; proof ai-altered**

- ex-primitive-roots-modulo-seventeen
- ex-index-table-modulo-seventeen
- ex-primitive-root-modulo-thirteen-by-prime-divisor-tests
- ex-lifting-a-primitive-root-through-powers-of-five
- ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine
- cex-unit-group-modulo-fifteen-is-not-cyclic
- cex-euler-totient-need-not-be-the-unit-group-exponent
- ex-square-roots-of-one-modulo-one-hundred-twenty-eight

Reason for each: the numerical witness is present in, or is a smallest faithful adaptation of, Hackman/Stein; Step 5 recomputes every residue and order rather than copying a transcript.

**statement ai-generated; proof ai-generated**

- ex-unit-group-modulo-two-hundred-forty
- ex-carmichael-function-of-five-hundred-sixty-one
- ex-moduli-below-twenty-with-primitive-roots

Reason for each: this is a checkable non-load-bearing example derived directly from the named A-page structure/formula/classification theorem. It remains a B-page leaf.

### Semidirect products — A page

**statement literature-derived; proof not-applicable**

- def-action-by-automorphisms
- def-external-semidirect-product
- def-internal-semidirect-product
- def-split-extension-of-groups
- def-outer-automorphism-group
- def-holomorph-of-a-group
- def-generalized-dihedral-group

Reason for each: Conrad, Milne, or Cameron supplies the standard definition; the action side and dihedral-order convention are made explicit.

**statement literature-derived; proof ai-altered**

- thm-external-semidirect-product-is-a-group
- prop-canonical-subgroups-of-an-external-semidirect-product
- prop-semidirect-product-is-direct-iff-action-is-trivial
- thm-internal-external-semidirect-product-equivalence
- thm-splitting-lemma-for-group-extensions
- lem-characteristic-subgroup-of-a-normal-subgroup-is-normal
- prop-holomorph-as-a-permutation-group
- prop-holomorph-recognises-regular-normal-subgroups
- thm-automorphisms-of-a-finite-cyclic-group
- thm-automorphisms-of-a-finite-rank-free-abelian-group
- lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products
- cor-dihedral-groups-as-semidirect-products
- lem-power-congruence-root-bound-modulo-a-prime
- lem-groups-of-order-pq-have-a-normal-q-subgroup
- lem-order-p-actions-on-a-cyclic-q-group
- thm-classification-of-groups-of-order-pq

Reason for each: Conrad §§3–4 and §6, Milne Chapter 3, Cameron §7.2, or Bridson–Vogtmann provides the result. Proofs are decomposed to respect the available quotient/action/free-abelian interfaces and to avoid Pair A and future matrix pages.

### Semidirect products — B page

**statement ai-altered; proof ai-altered**

- ex-dihedral-group-of-order-six-is-s-three
- ex-affine-group-of-the-real-line
- ex-symmetric-group-splits-over-the-alternating-group
- ex-affine-group-modulo-eight-as-a-holomorph
- ex-s-four-as-the-holomorph-of-the-klein-four-group
- ex-nonabelian-group-of-order-twenty-one
- cex-cyclic-prime-square-extension-does-not-split
- cex-a-complement-in-a-semidirect-product-need-not-be-normal
- cex-a-subgroup-of-an-abelian-group-need-not-be-characteristic
- fs-every-short-exact-sequence-of-groups-splits
- fs-kernel-and-quotient-determine-a-group-extension
- fs-an-abelian-group-has-an-abelian-automorphism-group

Reason for each: Conrad, Milne, or Cameron supplies the example or failure; the witness and proof are adapted to the precise local definitions and available prerequisites.

**statement ai-generated; proof ai-generated**

- ex-generalized-dihedral-group-of-the-klein-four-group
- ex-automorphism-group-of-the-cyclic-group-of-order-eight
- ex-two-automorphisms-of-z-squared

Reason for each: this is a finite, explicit, non-load-bearing calculation from a named A-page theorem and can be checked exhaustively at Step 5.

The six ai-generated examples are non-load-bearing B-page leaves. At Step 5 each receives a generation record naming its A-page parent and a checkable verification obligation: factor/product cardinality for $U(240)$, the lcm and totient arithmetic for $561$, exhaustive classification below $20$, triviality of inversion on $C_2^2$, the four unit multipliers modulo $8$, and explicit inverse/noncommuting integer coefficient arrays for the two automorphisms of $\mathbb Z^2$. No planned dependency targets any of them.

## Proof-obligation map

The machine obligation map is research/frontier-13-batch-2.proof-contracts.json. The high-risk decompositions to preserve are:

- prime cyclicity must use the finite-domain-units theorem with the field-to-domain bridge;
- the odd-prime lift must separate the prime-square dichotomy from the induction that raises the exact $p$-part of the order;
- the two-power theorem must prove exact order, trivial intersection, full cardinality, and uniqueness of $(-1)^\varepsilon5^j$;
- the general unit-group theorem must state all two-power boundary cases and the empty factorisation;
- Carmichael maximal order must construct a simultaneous tuple rather than assume every finite-group exponent is attained;
- primitive-root classification must prove both existence and necessity and retain $n=1$;
- semidirect associativity must spend the homomorphism law for the action, and the inverse formula must be checked on both sides;
- internal recognition must prove homomorphism, surjectivity, and injectivity separately;
- the splitting lemma must prove every advertised equivalence, not merely section implies complement;
- the holomorph recognition theorem must use normality of the regular translation subgroup to prove stabiliser elements are automorphisms;
- the free-abelian computation must prove coefficient uniqueness, composition, and invertibility, including rank zero;
- the normal-$q$ lemma must justify both divisibilities for the coset-action image and the kernel containment in $Q$;
- uniqueness of the order-$p$ action must not assume $U(q)$ cyclic: the local root bound rules out two distinct order-$p$ subgroups;
- the final order-$pq$ theorem must prove the product is all of $G$, classify trivial and nontrivial actions, and distinguish the two types.

## Prose-scaffold amendments for Step 4

The machine splice is exactly research/frontier-13-batch-2.pages.json. No edit to research/plan-spec.json is made by this Beta.

1. In research/plan-number-theory-track.md, replace the complete block beginning with the exact heading “### NT-1. Primitive roots and the structure of the unit groups modulo \(n\)” and ending immediately before the next NT heading. The old block begins with the stale four-entry Requires list and includes obsolete item ids lem-order-of-power-of-a-primitive-root, thm-unit-group-crt-decomposition, and thm-unit-group-modulo-n-structure. Replace it with the two-paragraph summary above, live requires splitting-fields-examples, and the exact item lists from the machine scaffold. In particular add index calculus, the general cyclic-generator lemmas, the odd-to-double-odd lemma, and the worked B-page items; use the final ids lem-order-of-a-power-in-a-finite-cyclic-group, thm-unit-group-chinese-remainder-decomposition, and thm-structure-of-the-unit-group-modulo-n.

2. In research/plan-algebra-track-expansion.md, replace the complete block beginning with the exact heading “## AG-3. Semidirect Products, Automorphism Groups and Split Extensions” and ending at the separator immediately before “## AG-4.” The old text says order 64, estimates A 17/B 12, proposes a quaternion construction outside the live closure, and defers the order-$pq$ classification to AG-4. Replace it with live order 68, the two-paragraph summary above, and the exact machine item lists. Delete the inaccessible $Q_8$ construction, retain nonsplitting through $C_{p^2}$, add $\operatorname{Aut}(\mathbb Z^n)$, the characteristic-in-normal lemma, both holomorph propositions, generalized dihedral groups, and the complete order-$pq$ proof chain.

3. Preserve the old prose warning that an action must be by automorphisms, but update its consequence: def-action-by-automorphisms precedes the construction and thm-external-semidirect-product-is-a-group proves the law. Preserve the geometric dihedral deferral. Remove the old claim that Pair B can cite the published quaternion A page: that page is not in the live requires closure.

## Split and dependency recommendations

No split. No new requires edge. No re-home, external fallback, or published-item repair is requested.

## Continuity checkpoint

Owned artifacts: the four research/frontier-13-batch-2 files only. Current substage: coverage and machine page scaffold complete; proof contracts and final mechanical checks remain. Completed checks: all source URLs and locators opened, all direct published dependencies opened through their exact Statement/Definition, item-id collision scan, missing-dependency scan, and coverage checklist (96 headings, zero errors/warnings). Open mathematical question: ensure the order-$pq$ proof contract explicitly derives uniqueness of the order-$p$ subgroup of $U(q)$ from the local root bound without assuming Pair A. Exact next action: generate and inspect the 65 proof-bearing contracts, then run the live and in-memory-spliced plan validators plus notation/prose checks.

## Final check record

The checkpoint question is resolved: the order-$p$ action lemma uses the locally scaffolded coefficient-array root bound, and the semidirect page has no dependency on the primitive-roots page. The scaffold-time proof-contract map covers all 65 proof-bearing items, cites every declared dependency, records all eight boundary classes per item, and has 132 exact published-source citation excerpts checked against disk. Planned-item title excerpts are placeholders until their Statement sections exist; the returning Step-5 author must replace them with exact Statement text while reconciling the contracts against the numbered proofs.

The coverage checklist passed with 96 headings and no errors or warnings. Manifest-only content policy passed for all 75 scoped items. Both the live plan and the in-memory splice passed `validate-plan`; the latter checked the four populated pages for undeclared prerequisites, forward references, cycles, and B-leaf violations. Prosecheck reported no errors; its count-in-prose warnings are the required batch/item ledger and the sources' numbered heading names. The owned-file notation scan found no canonical embedding applied to a natural number. All 62 direct published dependencies exist on disk, are published, have non-AI-generated statements, and are homed on A pages.

## 2026-08-15 — Step-3 Alpha scaffold repair

### F2.1 — Hackman §C.III and Euler's criterion

The Hackman read range now includes §C.III, *Binomial Congruences*. The coverage file disposes all four headings in that range: the section and C.III.1 are included as `thm-eulers-criterion-for-binomial-congruences`; C.III.2 and the Exercises heading are specifically out of scope. The numerical example adds no theorem beyond the included criterion, and its $m=2$ cases are specialisations homed on `quadratic-residues-and-the-legendre-symbol`. No Legendre-symbol item was pulled into this pair.

The source's preceding assumptions are retained explicitly: $n$ is positive and possesses a primitive root, $\gcd(a,n)=1$, and $m\ge1$. Thus the result is general in $m$ and in every modulus admitting a primitive root; it is not asserted for an arbitrary noncyclic unit group. The proof contract reduces both sides to the same condition on the index $k$: the linear congruence $my\equiv k\pmod{\varphi(n)}$ is solvable exactly when $\gcd(m,\varphi(n))\mid k$, and the displayed power of $a$ is $1$ exactly under the same divisibility condition.

Provenance rationale for the new item: `provenance.statement` is `literature-derived` because the exact biconditional, with the preceding primitive-root and unit hypotheses, is Hackman C.III.1. `provenance.proof` is `ai-altered` because the source's index-calculus proof is reorganised around the local index definition/proposition and the published linear-congruence theorem. The statement is not AI-generated and may therefore serve as a later dependency.

### F2.2 — published polynomial root bound

The approved `polynomial-rings-and-roots` prerequisite is mirrored in the batch manifest for `semidirect-products-and-automorphism-groups`. `lem-power-congruence-root-bound-modulo-a-prime` no longer rebuilds polynomial coefficient arrays or synthetic division. Its direct proof now cites that $\mathbb Z/q\mathbb Z$ is a field, every field is an integral domain, a nonzero degree-$d$ polynomial over an integral domain has at most $d$ roots, equality of residue classes is congruence, and polynomial roots are zeros under evaluation. Its contract was rebound to those five exact source clauses.

### Current census and checks

| page | kind | items |
|---|:---:|---:|
| `primitive-roots-and-unit-groups-modulo-n` | A | 27 |
| `primitive-roots-and-unit-groups-modulo-n-examples` | B | 11 |
| `semidirect-products-and-automorphism-groups` | A | 23 |
| `semidirect-products-and-automorphism-groups-examples` | B | 15 |

The proof-contract artifact now contains 66 scoped contracts, 66 contract records, 0 empty `citations` arrays, and 229 citation records.

The three requested commands all exited 0. Their terminal census/output was:

```text
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
coverage-checklist: 2 page(s), 100 harvested result(s), 0 error(s), 0 warning(s)
content-policy: 76 scoped item(s), 0 error(s), 0 warning(s)
```

The batch-wide dependency-closure audit covered all 76 items and returned:

```text
unresolved_ids: 0
out_of_closure_published_deps: 0
cross_pair_edges: 0
b_leaf_deps: 0
duplicate_ids: 0
```

No blocker was present at the scaffold-repair stage.

## 2026-08-15 — Authoritative final gate snapshot

This snapshot supersedes the repository-wide counts in the earlier Step-5
report. Other batches continued writing while Batch 2 was being checked; the
Batch-2 scoped results remained unchanged.

The final Batch-2 checks returned verbatim:

```text
67 checked, 0 failing — all clean
proof-contract: 0 error(s), 0 warning(s), 67/67 item(s) checked

OK — 81 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.
content-policy: 77 scoped item(s), 0 error(s), 0 warning(s)
coverage-checklist: 2 page(s), 100 harvested result(s), 0 error(s), 0 warning(s)
```

The final clean global gates returned verbatim:

```text
fwdcheck: 4567 items, 0 open forward reference(s), 399 closed, 34 load bearing
OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.
```

```text
extcheck: 4567 items, 116 recorded-not-proved, 119 resting on them
119 warning(s):
OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
```

```text
4837 file(s) checked. 0 error(s), 568 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 173

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.
```

The final bare precheck still has only out-of-scope failures. Its decisive
output is verbatim:

```text
REPAIR items/cor-cayley-hamilton-recurrences-for-matrix-powers.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/cor-eigenvalue-form-of-the-transfer-matrix-trace.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/cor-initial-values-determine-a-linear-recurrence-sequence.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/cor-minimal-recurrence-and-reduced-denominator.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/lem-binomial-series-for-a-repeated-pole.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/lem-derivative-of-det-i-minus-xa.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/lem-four-spaces-for-a-fixed-linear-recurrence.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/lem-partial-fractions-for-a-split-recurrence-denominator.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/prop-companion-matrix-iterates-a-linear-recurrence.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/prop-finite-modification-preserves-rationality-and-eventual-recurrence.md: passes only after auto-repair — adopt the canonical form:
FAIL items/prop-rational-series-are-closed-under-sums-and-products.md: untagged-steps
REPAIR items/prop-reciprocity-for-biinfinite-linear-recurrences.md: passes only after auto-repair — adopt the canonical form:
FAIL items/prop-ring-trace-agrees-with-the-published-field-trace.md: no-steps
REPAIR items/thm-closed-form-for-a-linear-recurrence-over-a-splitting-field.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/thm-hadamard-product-of-rational-series-is-rational.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/thm-linear-recurrence-iff-rational-generating-function.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/thm-transfer-matrix-cofactor-formula.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/thm-weighted-walks-are-entries-of-transfer-matrix-powers.md: passes only after auto-repair — adopt the canonical form:
3580 checked, 18 failing
```

The final bare dependency check ends with 24 `yaml-escape` errors, all in these
six out-of-scope files:

```text
items/cor-eigenvalue-form-of-the-transfer-matrix-trace.md
items/lem-binomial-series-for-a-repeated-pole.md
items/lem-derivative-of-det-i-minus-xa.md
items/lem-formal-matrix-geometric-series.md
items/rem-reciprocal-root-convention-for-recurrences.md
items/thm-transfer-matrix-cofactor-formula.md

24 ERROR(s):
FAIL
```

The later bare renderer invocation returned verbatim:

```text
  [frontmatter-unparsable] items/cor-eigenvalue-form-of-the-transfer-matrix-trace.md: frontmatter does not parse under the renderer's YAML parser, so the file is dropped from the corpus and every published page listing it 404s: Invalid escape sequence \g at line 3, column 31: title: "Let $K$ be a field, $p\ge1$, and $A\in M_p(K)$. If $\chi_A(t)=\
  [frontmatter-unparsable] items/lem-binomial-series-for-a-repeated-pole.md: frontmatter does not parse under the renderer's YAML parser, so the file is dropped from the corpus and every published page listing it 404s: Invalid escape sequence \l at line 3, column 47: title: "Repeated poles expand formally as $(1-\lambda x)^{-j}=\sum_{n\g
  [frontmatter-unparsable] items/lem-derivative-of-det-i-minus-xa.md: frontmatter does not parse under the renderer's YAML parser, so the file is dropped from the corpus and every published page listing it 404s: Invalid escape sequence \d at line 3, column 22: title: "$\frac{d}{dx}\det(I-xA)=-\operatorname{tr}(\operatorname{adj}(I
  [frontmatter-unparsable] items/lem-formal-matrix-geometric-series.md: frontmatter does not parse under the renderer's YAML parser, so the file is dropped from the corpus and every published page listing it 404s: Invalid escape sequence \s at line 3, column 32: title: "Formally, $(I-xA)^{-1}=\sum_{n\ge0}A^n x^n$ over every commutat
  [frontmatter-unparsable] items/rem-reciprocal-root-convention-for-recurrences.md: frontmatter does not parse under the renderer's YAML parser, so the file is dropped from the corpus and every published page listing it 404s: Invalid escape sequence \c at line 3, column 38: title: "Reciprocal-root convention: $\chi(t)=\prod_i(t-\lambda_i)^{m_i}
  [frontmatter-unparsable] items/thm-transfer-matrix-cofactor-formula.md: frontmatter does not parse under the renderer's YAML parser, so the file is dropped from the corpus and every published page listing it 404s: Invalid escape sequence \d at line 3, column 105: …hted-walk generating functions are cofactors of $I-xA$ divided by $\d

6 ERROR(s) across 4839 file(s)

FAIL
```

The sole blocker remains repository-wide gate contamination outside Batch 2's
write scope. No Batch-2 file occurs in a global error, and changing any listed
file would violate this dispatch.

## 2026-08-15 — Step-5 authoring report

### Items authored

All 77 spliced ids are authored with `status: draft`, `origin: session`, separate
statement/proof provenance, final dependency lists, exact-source fact citations,
and numbered proofs or verifications where applicable. The page census is:

| page | kind | authored items |
|---|:---:|---:|
| `primitive-roots-and-unit-groups-modulo-n` | A | 28 |
| `primitive-roots-and-unit-groups-modulo-n-examples` | B | 11 |
| `semidirect-products-and-automorphism-groups` | A | 23 |
| `semidirect-products-and-automorphism-groups-examples` | B | 15 |
| **total** |  | **77** |

The exact id ledger is `research/frontier-13-batch-2.pages.json`. Both B-page
bodies remain empty after frontmatter. Both A-page summaries are the binding
replacement prose from `research/frontier-13-splice-2.json`, byte-for-byte.

The late-added `cor-number-of-solutions-of-a-binomial-congruence` has a four-fact,
three-step proof-contract map; both provenance axes; and the Hackman C.III.1
coverage row whose `items` array names it together with
`thm-eulers-criterion-for-binomial-congruences`. Its dependency list deliberately
does not include the Euler criterion: the count proof uses the index bijection,
index calculus, the unit criterion, and the published linear-congruence count,
while the shared source heading is recorded in coverage. Adding the Euler
criterion as an unused edge would violate the dependency rule.

### Provenance rationale summary

The final component census is:

```text
literature-derived / not-applicable: 10
literature-derived / ai-altered:      41
ai-altered / ai-altered:              20
ai-generated / ai-generated:           6
```

The ten definitions are standard source-backed definitions from Hackman, Stein,
Conrad, Milne, or Cameron, with the library's boundary and convention choices
made explicit. The 41 mathematical results retain literature-derived Statements;
their proofs are `ai-altered` because they were decomposed into the library's
published interfaces and exact numbered obligations. The 20 source-based B-page
witnesses are adapted and recomputed rather than copied. The six `ai-generated`
items are finite, explicit B-page leaves. No `ai-generated` Statement is a
load-bearing dependency.

The authoring pass also removed overstated source claims: uniqueness of the
order-$p$ subgroup of a cyclic prime-square group is now proved inline from the
published cyclic-subgroup and order statements; regularity is explicitly defined
as free plus transitive; the direct-product commutator argument is proved from
normality; and totient, Bézout, gcd-quotient, Lagrange, and action-correspondence
facts are cited only where their published Statements actually supply the move.

### Batch-scoped validation

The scoped precheck, strict proof-contract check, and renderer check are clean.
Their terminal output is:

```text
67 checked, 0 failing — all clean
proof-contract: 0 error(s), 0 warning(s), 67/67 item(s) checked

OK — 81 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.
```

The scoped citation lint is also clean:

```text
citecheck: 77 item(s) scanned

OK — every recognised elementary move cites a home that states it.
```

Dependency/manifest reconciliation reports:

```text
mismatches=0 unlinked-deps=0
undeclared-links=0
```

### Prescribed global gate output

The prescribed commands were run exactly. The gates that are independent of
other in-flight batches returned:

```text
fwdcheck: 4556 items, 0 open forward reference(s), 399 closed, 34 load bearing

OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.
```

```text
extcheck: 4556 items, 116 recorded-not-proved, 119 resting on them

119 warning(s):

OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
```

```text
4826 file(s) checked. 0 error(s), 568 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 173

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.
```

```text
content-policy: 77 scoped item(s), 0 error(s), 0 warning(s)
```

```text
coverage-checklist: 2 page(s), 100 harvested result(s), 0 error(s), 0 warning(s)
```

Three global gates are presently blocked by files outside Batch 2's write scope.
The decisive precheck output is:

```text
REPAIR items/cor-cayley-hamilton-recurrences-for-matrix-powers.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/cor-initial-values-determine-a-linear-recurrence-sequence.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/cor-minimal-recurrence-and-reduced-denominator.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/lem-binomial-series-for-a-repeated-pole.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/lem-four-spaces-for-a-fixed-linear-recurrence.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/lem-partial-fractions-for-a-split-recurrence-denominator.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/prop-companion-matrix-iterates-a-linear-recurrence.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/prop-finite-modification-preserves-rationality-and-eventual-recurrence.md: passes only after auto-repair — adopt the canonical form:
FAIL items/prop-rational-series-are-closed-under-sums-and-products.md: untagged-steps
REPAIR items/prop-reciprocity-for-biinfinite-linear-recurrences.md: passes only after auto-repair — adopt the canonical form:
FAIL items/prop-ring-trace-agrees-with-the-published-field-trace.md: no-steps
REPAIR items/thm-closed-form-for-a-linear-recurrence-over-a-splitting-field.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/thm-hadamard-product-of-rational-series-is-rational.md: passes only after auto-repair — adopt the canonical form:
REPAIR items/thm-linear-recurrence-iff-rational-generating-function.md: passes only after auto-repair — adopt the canonical form:
3574 checked, 14 failing
```

The decisive `depcheck` output is:

```text
10 ERROR(s):
  [yaml-escape] items/lem-binomial-series-for-a-repeated-pole.md: title contains "\l" inside a double-quoted scalar — double the backslash ("\\l")
  [yaml-escape] items/lem-binomial-series-for-a-repeated-pole.md: title contains "\s" inside a double-quoted scalar — double the backslash ("\\s")
  [yaml-escape] items/lem-binomial-series-for-a-repeated-pole.md: title contains "\g" inside a double-quoted scalar — double the backslash ("\\g")
  [yaml-escape] items/lem-binomial-series-for-a-repeated-pole.md: title contains "\b" inside a double-quoted scalar — double the backslash ("\\b")
  [yaml-escape] items/lem-binomial-series-for-a-repeated-pole.md: title contains "\l" inside a double-quoted scalar — double the backslash ("\\l")
  [yaml-escape] items/rem-reciprocal-root-convention-for-recurrences.md: title contains "\c" inside a double-quoted scalar — double the backslash ("\\c")
  [yaml-escape] items/rem-reciprocal-root-convention-for-recurrences.md: title contains "\p" inside a double-quoted scalar — double the backslash ("\\p")
  [yaml-escape] items/rem-reciprocal-root-convention-for-recurrences.md: title contains "\l" inside a double-quoted scalar — double the backslash ("\\l")
  [yaml-escape] items/rem-reciprocal-root-convention-for-recurrences.md: title contains "\p" inside a double-quoted scalar — double the backslash ("\\p")
  [yaml-escape] items/rem-reciprocal-root-convention-for-recurrences.md: title contains "\l" inside a double-quoted scalar — double the backslash ("\\l")

FAIL
```

The renderer reports the same two out-of-scope frontmatter failures:

```text
  [frontmatter-unparsable] items/lem-binomial-series-for-a-repeated-pole.md: frontmatter does not parse under the renderer's YAML parser, so the file is dropped from the corpus and every published page listing it 404s: Invalid escape sequence \l at line 3, column 47: title: "Repeated poles expand formally as $(1-\lambda x)^{-j}=\sum_{n\g
  [frontmatter-unparsable] items/rem-reciprocal-root-convention-for-recurrences.md: frontmatter does not parse under the renderer's YAML parser, so the file is dropped from the corpus and every published page listing it 404s: Invalid escape sequence \c at line 3, column 38: title: "Reciprocal-root convention: $\chi(t)=\prod_i(t-\lambda_i)^{m_i}

2 ERROR(s) across 4826 file(s)

FAIL
```

### Blocker

Batch 2 itself is clean under the scoped versions of the structural and renderer
checks. The bare global `precheck`, `depcheck`, and `rendercheck` cannot be made
clean without editing another batch's recurrence and ring-trace files, which is
forbidden by this dispatch's write scope. No Batch-2 file appears in any global
error. This out-of-scope gate contamination is the sole blocker.

## 2026-08-15 — Third-pass F2.3 scaffold repair

Added `cor-number-of-solutions-of-a-binomial-congruence` immediately after
`thm-eulers-criterion-for-binomial-congruences`, at position 12 on
`primitive-roots-and-unit-groups-modulo-n`. Its dependencies are exactly:

- `thm-eulers-criterion-for-binomial-congruences`;
- `prop-index-calculus-modulo-n`;
- `def-index-of-a-unit-relative-to-a-primitive-root`;
- `thm-linear-congruence-solvability-and-solution-count`.

The first three are earlier on the same A page. The published linear-congruence
theorem is homed on `congruences-and-the-chinese-remainder-theorem`, inside the
declared `requires` closure of this page; no `requires` amendment was made. The
proof-obligation map first checks that every solution is a unit, then transfers
solutions bijectively to exponent classes and invokes the published theorem's
exact count clause. Its three numbered steps are each covered once, and all four
cited facts carry the complete planned or on-disk proposition rather than an
opening fragment.

Component-provenance rationale: `provenance.statement` is
`literature-derived` because Hackman C.III.1 states the exact count
$\gcd(\varphi(n),m)$ for a solvable binomial congruence under the primitive-root,
unit, and positive-exponent hypotheses. `provenance.proof` is `ai-altered`
because the source route is reorganised around the page's local index definition
and index-calculus proposition, the published linear-congruence count theorem,
and explicit $n=1$ and $m=1$ boundary checks.

The Hackman C.III.1 coverage row remains `included`, retains its primary `item`
as `thm-eulers-criterion-for-binomial-congruences`, and now names both results in
`items`:

```json
{
  "item": "thm-eulers-criterion-for-binomial-congruences",
  "items": [
    "thm-eulers-criterion-for-binomial-congruences",
    "cor-number-of-solutions-of-a-binomial-congruence"
  ]
}
```

The final page census is:

| page | kind | items |
|---|:---:|---:|
| `primitive-roots-and-unit-groups-modulo-n` | A | 28 |
| `primitive-roots-and-unit-groups-modulo-n-examples` | B | 11 |
| `semidirect-products-and-automorphism-groups` | A | 23 |
| `semidirect-products-and-automorphism-groups-examples` | B | 15 |

The proof-contract artifact contains 67 scoped ids, 67 contract records, zero
empty `citations` arrays, and 233 citation records. The three requested commands
all exited 0. Their exact census and terminal output was:

```text
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
coverage-checklist: 2 page(s), 100 harvested result(s), 0 error(s), 0 warning(s)
content-policy: 77 scoped item(s), 0 error(s), 0 warning(s)
```

The dependency-closure audit covered every item and dependency edge in Batch 2:

```text
dependency-closure audit: 77 item(s), 257 dependency edge(s), 157 published dependency edge(s)
unresolved_ids: 0
out_of_closure_published_deps: 0
cross_pair_edges: 0
b_leaf_deps: 0
duplicate_ids: 0
same_pair_order_violations: 0
```

No blocker was present at the third-pass scaffold-repair stage.

## 2026-08-15 — Final Step-5 disposition

The Step-5 authoring report and the authoritative concurrent gate snapshot above
are the final record for this dispatch. Batch 2 is fully authored and clean under
its scoped precheck, strict proof-contract, renderer, citation, content-policy,
coverage, and dependency-reconciliation checks. The bare repository precheck,
dependency check, and renderer remain blocked only by the explicitly listed
out-of-scope files from other batches. Editing those files is forbidden by this
dispatch, so the out-of-scope gate contamination is the sole final blocker.
