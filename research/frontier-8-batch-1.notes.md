# Frontier 8 batch 1 — Beta Steps 1–2 notes

Scope: exactly two A/B pairs:

- `group-homomorphisms-and-the-isomorphism-theorems` / `group-homomorphisms-and-the-isomorphism-theorems-examples`
- `ideals-and-quotient-rings` / `ideals-and-quotient-rings-examples`

No item or page has been authored. The sibling page manifest is the proposed
Step-3 scope of record. The sibling proof-contract file is the durable Step-5
obligation map. This packet plans 55 new items: 20 and 5 on the group A/B pair,
and 24 and 6 on the ideal A/B pair. Neither A page approaches the 100-item
review ceiling.

## 1. Step-3 recommendations, in decision order

### R1 — reject the proposed monoid counterexample as impossible

The AA-4 prose asks for “a bijective homomorphism of monoids that is not a
monoid isomorphism.” Under the published `def-group-homomorphism`, a monoid
homomorphism preserves multiplication and the identity. A bijective such map
has an inverse that preserves multiplication, and identity preservation for the
inverse follows immediately. The proposed counterexample cannot exist. Drop it.
If declined, the companion page would be required to author a false witness.

### R2 — add the group-homomorphism page to the ideal page's `requires`

The kernel of a ring homomorphism is the kernel of its additive group
homomorphism; the quotient-ring universal property and the first ring
isomorphism theorem also reuse the corresponding group results. Add
`group-homomorphisms-and-the-isomorphism-theorems` to AA-9's page requirements.
The dependency is backward (order 36 to order 48) and is the only cross-pair
seam in this batch. Declining it would force duplicate kernel and quotient
factorisation machinery and leave the declared page prerequisites incomplete.

### R3 — add the prime-number and Zorn pages to the ideal page's `requires`

Prime ideals use the published integer-prime convention and the integer example
uses the Euclid-property characterisation. Existence of maximal ideals cites the
published `thm-zorn` exactly. Add
`primes-and-the-fundamental-theorem-of-arithmetic` and
`order-zorn-and-the-axiom-of-choice`. Both are strictly earlier. Declining this
would leave direct load-bearing dependencies undeclared at page level.

### R4 — retain the current machine-spec deferral of the characteristic theorem

AA-9's prose says the characteristic of a domain is zero or prime belongs here,
but the current `plan-spec.json` records explicitly that the obligation belongs
to `euclidean-domains-pids-and-unique-factorisation` at order 50. Preserve that
machine-spec decision and remove the claim from AA-9. The result is neither used
by ideal theory nor needed by this pair. Declining this would create two planned
homes for one theorem and contradict the current spec note.

### R5 — state quotient-ring well-definedness with the correct converse domain

The multiplication rule on additive cosets is representative-independent if
and only if the additive subgroup is a two-sided ideal. The converse must start
from an additive subgroup, not from an arbitrary subset, because otherwise the
quotient set and its addition are not defined. Keep this as the dedicated
`thm-quotient-ring-multiplication-well-defined-iff-ideal`, and let
`def-quotient-ring` be justified by it and `thm-quotient-ring-laws`. Declining
this would either overstate the iff or hide the central well-definedness proof.

### R6 — use the unital form of the second ring isomorphism theorem

This library calls only rings with identity “rings,” and a general ideal is not
a subring because it need not contain the ambient identity. The second theorem
is therefore stated for a unital subring $S\subseteq R$ and an ideal $I$ of
$R$: $S+I$ is a subring, $I$ is an ideal of $S+I$,
$S\cap I$ is an ideal of $S$, and
$S/(S\cap I)\cong(S+I)/I$. The focused lemma
`lem-subring-plus-ideal-and-intersection` discharges those structural claims.
Declining this formulation would silently switch ring conventions.

### R7 — drop the determinant orientation item at this stage

The determinant lies on a later, unbuilt page. The prose permits only an
orientation-only forward mention, but a B page has no authored summary body and
no mathematical result here should depend on determinant properties. No
`rem-` item is minted merely to carry a forward pointer; generated mathematical
remarks are prohibited and the fact is not part of this pair's proof closure.
It may be linked back from the determinant page when that theorem exists.

### R8 — replace the forward polynomial example by the zero ideal of $\mathbb Z$

The proposed prime-not-maximal witness $(x)\subset\mathbb Z[x]$ requires the
later polynomial-ring page. Use the source-backed earlier witness $(0)$ in
$\mathbb Z$: it is prime because the integers have no zero divisors, and is not
maximal because $(0)\subsetneq2\mathbb Z\subsetneq\mathbb Z$. This keeps the B
page dependency-closed without weakening the distinction.

## 2. Applyable prose-scaffold amendments

### 2.1 `research/plan-algebra-track.md`, replace AA-4

Exact old text:

```text
## AA-4. Group Homomorphisms and the Isomorphism Theorems  (order 32)

`requires`: `normal-subgroups-and-quotient-groups`

Homomorphism; image and **kernel**; a homomorphism is injective iff its kernel is
trivial; **the kernel is normal**, and conversely every normal subgroup is a
kernel; **the first isomorphism theorem** $G/\ker f \cong \operatorname{im} f$;
the second (diamond) isomorphism theorem; the third; the correspondence theorem;
isomorphism; automorphism group; inner automorphisms; conjugation.

B page: $\det$ is a homomorphism (**forward reference, orientation only**, since
determinants are order 78 and this is 26); $\exp$ is not available yet, do not use
it; $\mathbb{Z} \to \mathbb{Z}/n$; a bijective homomorphism of monoids that is not
a monoid isomorphism.

Traps. This is the page the owner named. The first isomorphism theorem must be
proved, not asserted, and the well-definedness of the induced map
$G/\ker f \to \operatorname{im} f$ is its own step.
```

Exact new text:

```text
## AA-4. Group Homomorphisms and the Isomorphism Theorems  (order 36)

`requires`: `normal-subgroups-and-quotient-groups`

DEFS: group isomorphisms and automorphisms; $\operatorname{Aut}(G)$; the image
and kernel of a group homomorphism; inner automorphisms and
$\operatorname{Inn}(G)$.

THMS: the inverse of a bijective homomorphism is a homomorphism; images are
subgroups and kernels are normal; a homomorphism is injective iff its kernel is
trivial; normal subgroups are exactly kernels; equal images are exactly equal
kernel cosets; the quotient universal property; the first isomorphism theorem,
with representative-independence of $g\ker f\mapsto f(g)$ proved explicitly;
the product-with-a-normal-subgroup lemma and the second isomorphism theorem;
the nested-normal-subgroup lemma and third theorem; the subgroup correspondence
theorem, including preservation of normality. Automorphisms form a group;
conjugation is an automorphism; $g\mapsto(x\mapsto gxg^{-1})$ is a homomorphism
with kernel $Z(G)$ and image $\operatorname{Inn}(G)$; hence
$G/Z(G)\cong\operatorname{Inn}(G)$; and $\operatorname{Inn}(G)$ is normal in
$\operatorname{Aut}(G)$.

B: reduction $\mathbb Z\to\mathbb Z/n$ and the first isomorphism theorem; the
doubling endomorphism as an injective non-surjective map; the kernel and image
of the trivial homomorphism; inner automorphisms of an abelian group; and an
explicit conjugation calculation in $\operatorname{Sym}(\{1,2,3\})$.

DROP: the determinant orientation-only mention until determinant is built, and
the impossible request for a bijective monoid homomorphism that is not a monoid
isomorphism. A bijective monoid homomorphism is automatically an isomorphism.

Traps. The quotient-factor map is defined on cosets only after representative
independence is proved. The second and third theorems keep every normality and
containment hypothesis explicit. Function composition acts right-to-left, and
conjugation is $x\mapsto gxg^{-1}$, matching the published convention.
```

### 2.2 `research/plan-algebra-track.md`, replace AA-9

Exact old text:

```text
## AA-9. Ideals, Quotient Rings and the Isomorphism Theorems for Rings  (order 44)

`requires`: `rings-subrings-and-integral-domains`, `normal-subgroups-and-quotient-groups`

**Ideal** (left, right, two-sided); the ideal generated by a set; **principal
ideal**; sum and product of ideals; **the quotient ring $R/I$** (well-definedness
#5, and the "iff" direction: the induced product is representative-independent
exactly when $I$ absorbs multiplication); the canonical projection; the first,
second and third isomorphism theorems for rings; the correspondence theorem;
**prime ideal** and **maximal ideal**; **$R/P$ is a domain iff $P$ is prime**;
**`thm-quotient-by-maximal-is-a-field`: $R/M$ is a field iff $M$ is maximal**; a
maximal ideal is prime; in a commutative ring with identity, maximal ideals exist
(Zorn, cited from `order-zorn-and-the-axiom-of-choice`); and **the characteristic
of an integral domain is $0$ or prime**, deferred here from AA-8 at level-8
batch 1 because the word *prime* is defined nowhere below order 42 — its home is
NT-2 at order 24, which requires NT-1 and so cannot publish before level 9,
whereas AA-8 was on the level-8 frontier. This page requires AA-3, so it cannot
be built before level 13, by which time NT-2 is published and the citation is an
ordinary backward one. AA-8 keeps `def-ring-characteristic` and
`lem-characteristic-and-additive-order` ("$n \cdot 1_R = 0$ exactly when
$\operatorname{char}(R) \mid n$", and in a domain every nonzero element has the
additive order of $1_R$), which is the primality-free half and reduces the proof
here to two lines: a factorisation $\operatorname{char}(R) = km$ with $k, m \ge 2$
gives $(k \cdot 1_R)(m \cdot 1_R) = 0$ with both factors nonzero by minimality.

B page: `ex-null-sequences-as-a-maximal-ideal` and
**`ex-the-reals-as-a-quotient-by-a-maximal-ideal`**, the payoff item, citing
`thm-cauchy-ring`, `lem-null-ideal`, `lem-null-maximal` and the new theorem, and
observing that `thm-reals-field` proved by hand at order 7 what order 44 explains;
$n\mathbb{Z}$ is maximal iff $n$ is prime; a prime ideal that is not maximal
($(x)$ in $\mathbb{Z}[x]$, so this item comes after AA-11 or uses $\{0\}$ in
$\mathbb{Z}$); an ideal that is not a subring with identity.

Traps. The Zorn application needs the union of a chain of proper ideals to be
proper, which is where $1 \notin I$ does the work. Do not skip it. The quotient
set underlying $R/I$ cites `def-equivalence-relation` and
`lem-equivalence-classes-partition` from AA-1 (batch-1 audit note 1), not
machinery of its own.
```

Exact new text:

```text
## AA-9. Ideals, Quotient Rings and the Isomorphism Theorems for Rings  (order 48)

`requires`: `rings-subrings-and-integral-domains`,
`normal-subgroups-and-quotient-groups`,
`group-homomorphisms-and-the-isomorphism-theorems`,
`primes-and-the-fundamental-theorem-of-arithmetic`,
`order-zorn-and-the-axiom-of-choice`

DEFS: left, right and two-sided ideals; the ideal generated by a subset and
principal ideals; sums and products of ideals; the quotient ring $R/I$; prime
and maximal ideals in a commutative ring.

THMS: ideal criteria and intersections; in a commutative ring, $(S)$ is the set
of finite sums $\sum r_i s_i$ and $(a)=Ra$; sums and products are ideals;
kernels of ring homomorphisms are ideals; multiplication of additive cosets is
well defined iff the additive subgroup is a two-sided ideal; the quotient-ring
laws and canonical projection; $\mathbb Z/n$ is literally the quotient ring
$\mathbb Z/n\mathbb Z$ for every natural $n$; the quotient-ring universal
property and first isomorphism theorem. The subring-plus-ideal lemma proves
$S+I$ is a subring, $I$ is an ideal of $S+I$, and $S\cap I$ is an ideal of $S$;
it supports $S/(S\cap I)\cong(S+I)/I$ without treating a nonunital ideal as a ring; the
nested-ideal lemma supports the third theorem; ideals above $I$ correspond to
ideals of $R/I$. For commutative $R$, $R/P$ is a domain iff $P$ is prime and
$R/M$ is a field iff $M$ is maximal; maximal ideals are prime. In a nonzero
commutative ring, every proper ideal lies in a maximal ideal, with
the chain-union properness step written explicitly before applying Zorn.

B: null sequences as a maximal ideal; the reals as the corresponding quotient;
$n\mathbb Z$ maximal iff $n$ is prime for $n>1$; $(0)$ in $\mathbb Z$ prime but
not maximal; $2\mathbb Z$ an ideal but not a unital subring; and the coordinate
projection $(R\times S)/(R\times\{0\})\cong S$.

DEFER: the characteristic of an integral domain is $0$ or prime remains on
`euclidean-domains-pids-and-unique-factorisation`, as the current machine spec
records. The polynomial witness $(x)\subset\mathbb Z[x]$ is replaced here by
the dependency-closed zero-ideal witness in $\mathbb Z$.

Traps. The quotient-ring iff starts with an additive subgroup. The second ring
theorem respects the library's unital-ring convention. In the Zorn proof the
union of a chain is proper because if it contained $1$, one chain member would
contain $1$ and would be the whole ring. The additive quotient set and group
law are reused from the published quotient-group construction.
```

## 3. Per-page item lists

The JSON manifest is authoritative for exact titles, kinds, order and deps.
The following list makes the reading order reviewable.

### 3.1 Group A (20)

1. `def-group-isomorphism-and-automorphism` — definition
2. `lem-inverse-of-bijective-group-homomorphism` — lemma
3. `def-kernel-and-image-of-group-homomorphism` — definition
4. `thm-image-subgroup-and-kernel-normal` — theorem
5. `thm-group-homomorphism-injective-iff-trivial-kernel` — theorem
6. `cor-normal-subgroups-are-exactly-kernels` — corollary
7. `lem-equal-images-iff-same-kernel-coset` — lemma
8. `thm-quotient-group-universal-property` — theorem
9. `thm-first-isomorphism-theorem-groups` — theorem
10. `lem-product-with-normal-subgroup` — lemma
11. `thm-second-isomorphism-theorem-groups` — theorem
12. `lem-nested-normal-subgroups-and-quotients` — lemma
13. `thm-third-isomorphism-theorem-groups` — theorem
14. `thm-correspondence-theorem-groups` — theorem
15. `thm-automorphisms-form-a-group` — theorem
16. `thm-conjugation-is-an-automorphism` — theorem
17. `def-inner-automorphism-group` — definition
18. `thm-conjugation-homomorphism` — theorem
19. `cor-group-mod-center-is-inner-automorphism-group` — corollary
20. `thm-inner-automorphisms-normal-in-automorphism-group` — theorem

### 3.2 Group B (5)

1. `ex-reduction-modulo-n-first-isomorphism` — example
2. `cex-trivial-kernel-does-not-imply-surjective` — counterexample
3. `ex-trivial-homomorphism-kernel-and-image` — example
4. `ex-inner-automorphisms-of-an-abelian-group` — example
5. `ex-conjugation-in-symmetric-group-three` — example

### 3.3 Ideal A (24)

1. `def-left-right-and-two-sided-ideal` — definition
2. `lem-ideal-criterion-and-intersections` — lemma
3. `def-generated-and-principal-ideals` — definition
4. `thm-generated-ideal-description-in-a-commutative-ring` — theorem
5. `def-sum-and-product-of-ideals` — definition
6. `thm-sum-and-product-of-ideals-are-ideals` — theorem
7. `thm-ring-homomorphism-kernel-is-an-ideal` — theorem
8. `def-quotient-ring` — definition
9. `thm-quotient-ring-multiplication-well-defined-iff-ideal` — theorem
10. `thm-quotient-ring-laws` — theorem
11. `prop-canonical-quotient-ring-map` — proposition
12. `prop-integers-modulo-n-as-a-quotient-ring` — proposition
13. `thm-quotient-ring-universal-property` — theorem
14. `thm-first-isomorphism-theorem-rings` — theorem
15. `lem-subring-plus-ideal-and-intersection` — lemma
16. `thm-second-isomorphism-theorem-rings` — theorem
17. `lem-nested-ideals-and-quotients` — lemma
18. `thm-third-isomorphism-theorem-rings` — theorem
19. `thm-correspondence-theorem-ideals` — theorem
20. `def-prime-and-maximal-ideals` — definition
21. `thm-quotient-is-domain-iff-ideal-prime` — theorem
22. `thm-quotient-is-field-iff-ideal-maximal` — theorem
23. `cor-maximal-ideals-are-prime` — corollary
24. `thm-proper-ideal-contained-in-maximal-ideal` — theorem

### 3.4 Ideal B (6)

1. `ex-null-sequences-as-a-maximal-ideal` — example
2. `ex-reals-as-a-quotient-by-a-maximal-ideal` — example
3. `ex-nz-maximal-iff-prime` — example
4. `cex-zero-ideal-prime-not-maximal-in-z` — counterexample
5. `ex-two-z-ideal-not-a-unital-subring` — example
6. `ex-product-ring-coordinate-ideal-and-quotient` — example

## 4. Richness, decomposition and cheap-corollary pass

Both passes were performed separately for both pairs.

For the group pair, the first theorem is decomposed by
`lem-equal-images-iff-same-kernel-coset` and the quotient universal property;
the second by `lem-product-with-normal-subgroup`; the third by
`lem-nested-normal-subgroups-and-quotients`; the automorphism development by the
inverse-homomorphism and conjugation lemmas. Cheap useful consequences retained
are normal-subgroups-exactly-kernels, $G/Z(G)\cong\operatorname{Inn}(G)$, and
normality of `Inn(G)` in `Aut(G)`. No proof is left as a monolithic chain.

For the ideal pair, the generated-ideal description, sum/product closure,
quotient well-definedness and quotient laws are separate obligations. The first
ring theorem uses the quotient universal property; the second uses the
subring-plus-ideal lemma; the third uses the nested-ideals lemma. Cheap useful
consequences retained are the literal quotient-ring identification of
$\mathbb Z/n$, maximal-implies-prime, and the coordinate-projection quotient.
No structural split is warranted.

## 5. Proof-obligation map and boundary lock

`research/frontier-8-batch-1.proof-contracts.json` contains one version-1
contract for every proof-bearing manifest item (47 contracts). Every planned
direct dependency has a source-section clause and planned uses, and each planned
numbered step is covered exactly once. Step 5 must preserve the clause and step
ids or update the contract in the same edit.

Load-bearing proof routes:

- group first theorem: kernel normality; equal-image/coset equivalence; define
  $g\ker f\mapsto f(g)$; representative independence; homomorphism; onto the
  image; injectivity;
- group second theorem: prove $HN\le G$ and $H\cap N\trianglelefteq H$; compute
  the kernel and image of $h\mapsto hN$;
- group third theorem: prove $N/K\trianglelefteq G/K$; compute the kernel of
  $gK\mapsto gN$;
- group correspondence: prove image and preimage assignments land in the stated
  classes, are inverse, and preserve normality in both directions;
- ring quotient iff: for sufficiency expand $(r+i)(s+j)-rs$; for necessity
  compare $(r+J)(0+J)$ with alternate representatives to obtain both $rJ\subseteq J$
  and $Jr\subseteq J$;
- ring first theorem: construct the quotient factor, prove both operation laws,
  then biject onto the image;
- ring second theorem: keep $S$ unital, establish $S+I$, $I\trianglelefteq S+I$,
  and $S\cap I\trianglelefteq S$, then use the map $s\mapsto s+I$;
- maximal ideal existence: the poset is nonempty because it contains the given
  proper ideal; the union of a chain is an ideal; if $1$ lay in the union it
  would lie in a chain member, contradicting properness; only then apply Zorn.

Boundary cases explicitly retained in contracts: trivial groups; total and
trivial kernels; $K=N$ and $N=G$ in nested quotients; empty generating set and
empty finite sum; zero ring excluded exactly where `proper`, `prime`, `maximal`,
`domain`, or `field` requires it; $n=0$ and $n=1$ in the literal quotient-ring
proposition; $n=2$ as the first case of the maximal-ideal example; both
directions of every iff; representative choices and their independence.

No registered `finite-smoke.mjs` check type matches these quotient/isomorphism
claims. All `finite_smoke` arrays are deliberately empty. Useful manual
authoring-time countermodel probes are: groups of orders 1–6 for the kernel and
correspondence edges; rings $\mathbb Z/n$ for $n=1,2,4,6$ for prime/maximal and
quotient degeneracies; and the zero ring. These are bounded sanity checks, not
proofs, and are not mislabelled as one of the four registered smoke types.

## 6. Web source ledger (all URLs opened successfully)

### Groups

- <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/07%3A_Homomorphisms_and_the_Isomorphism_Theorems/7.01%3A_Homomorphisms>
  — image, kernel, kernel normality, trivial kernel criterion, canonical
  projection, trivial homomorphism and same-image/coset theorem.
- <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.02%3A_The_Isomorphism_Theorms>
  — first, second, third and correspondence theorems, including the $HN$ proof
  route and the normal-subgroup correspondence.
- <https://math.libretexts.org/Workbench/Group_Theory_4e_%28Milne%29/01%3A_Basic_Definitions_and_Results/1.08%3A_Kernels_and_quotients>
  — quotient universal property and kernel normality.
- <https://math.libretexts.org/Workbench/Group_Theory_4e_%28Milne%29/01%3A_Basic_Definitions_and_Results/1.09%3A_Theorems_concerning_homomorphisms>
  — factorisation through the quotient, first/second theorem and correspondence.
- <https://math.libretexts.org/Workbench/Group_Theory_4e_%28Milne%29/03%3A_Automorphisms_and_Extensions/3.01%3A_Automorphisms_of_groups>
  — automorphism group, conjugation, the map to `Aut(G)`, kernel $Z(G)$, image
  `Inn(G)`, $G/Z(G)\cong Inn(G)`, and normality of inner automorphisms.

Convention check: the sources use $x\mapsto gxg^{-1}$ for conjugation, matching
the planned convention. Some texts use its inverse; the authored definition
must display the chosen formula. Composition is right-to-left, matching the
published `def-symmetric-group`.

### Ideals and quotient rings

- <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Rings_with_Inquiry_%28Janssen_and_Lindsey%29/04%3A_Ideals_and_Homomorphisms_and_test/4.01%3A_Ideals_in_general>
  — ideal intersections, generated and principal ideals, sum and finite-sum
  product of ideals.
- <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.03%3A_Ideals_and_Quotient_Rings>
  — quotient-ring multiplication iff ideal, quotient ring, canonical projection,
  kernel ideal and first ring isomorphism theorem.
- <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.05%3A_Ring_Homomorphisms_and_Ideals>
  — quotient well-definedness and first, unital second, and third ring
  isomorphism theorems.
- <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals>
  — maximal ideals via fields, prime ideals via domains, maximal implies prime,
  $n\mathbb Z$ maximal iff $n$ prime, $(0)$ prime in a domain, and existence of
  maximal ideals.
- <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf>
  — modular ring operations and the prime-modulus field result.
- <https://terrytao.wordpress.com/books/analysis-i/>
  — Cauchy/null-sequence construction of the reals used by the two payoff
  examples; the exact local claims are also already published on disk.

Convention check: some sources call a nonunital additive-and-multiplicative
subobject a subring, or define ideals as subrings. This library requires a
subring to contain the ambient identity, so ideals are defined as additive
subgroups with absorption and the second theorem uses a genuine unital subring.
The ideal product uses finite sums; the empty sum is included so the zero element
and empty-boundary are explicit.

Every source-backed Step-5 item must carry the applicable URL above in
`sources.references`; this ledger is support, not copied prose or a scraped
source claim.

## 7. Component-provenance plan

All definitions on both A pages are `provenance.statement:
literature-derived`, `provenance.proof: not-applicable`, supported by the group
or ring sources above.

All A-page lemmas, propositions, theorems and corollaries are
`statement: literature-derived`, `proof: ai-altered`: the exact classical
statement is in the cited open textbook, while the local proof is decomposed,
phase-stratified and adapted to the library's already-published conventions.
This applies to every proof-bearing A id in §3.1 and §3.3. None is
`ai-generated`, and none relies on a generated dependency.

Group B component plan:

- `ex-reduction-modulo-n-first-isomorphism`,
  `ex-trivial-homomorphism-kernel-and-image`,
  `ex-inner-automorphisms-of-an-abelian-group`, and
  `ex-conjugation-in-symmetric-group-three`: `statement: ai-altered`,
  `proof: ai-altered`; each is a specialised, explicitly checkable instance of
  the cited group sources.
- `cex-trivial-kernel-does-not-imply-surjective`: `statement: ai-generated`,
  `proof: ai-generated`, with `generation.role: counterexample`. Truth-risk
  search: direct integer arithmetic confirms $2n=0\Rightarrow n=0$ and $1$ is
  not in the image. It is non-load-bearing and no item depends on it.

Ideal B component plan:

- `ex-null-sequences-as-a-maximal-ideal` and
  `ex-reals-as-a-quotient-by-a-maximal-ideal`: `statement:
  literature-derived`, `proof: ai-altered`, supported by Tao and by the exact
  published construction on disk.
- `ex-nz-maximal-iff-prime` and
  `cex-zero-ideal-prime-not-maximal-in-z`: `statement:
  literature-derived`, `proof: ai-altered`, stated explicitly in the Ernst
  maximal/prime-ideal source.
- `ex-two-z-ideal-not-a-unital-subring` and
  `ex-product-ring-coordinate-ideal-and-quotient`: `statement: ai-altered`,
  `proof: ai-altered`; they specialise the ideal/subring and first-isomorphism
  sources to the published unital convention and product-ring construction.

No generated remark, definition, theorem, proposition, lemma or false statement
is planned. The sole generated construction is the checkable, non-load-bearing
doubling counterexample.

## 8. Published-dependency audit and confidence routes

Every proposed published dependency was opened from `items/<id>.md`; every one
has `status: published`. No target has `provenance.statement: ai-generated`.

AI-altered/literature-derived targets source-checked against their recorded open
references: `def-normal-subgroup`, `thm-normal-subgroup-characterisations`,
`def-quotient-group`, `thm-quotient-group-laws`,
`prop-canonical-quotient-map`, `def-center-of-a-group`,
`cor-subgroups-of-abelian-groups-are-normal`, and
`prop-integers-modulo-n-as-a-quotient-group`. Their exact statements and
conventions agree with the uses planned here.

Legacy-unclassified targets checked from disk and against the group sources
above (`source-checked`): `def-group-homomorphism`,
`lem-group-homomorphism-basic-properties`,
`def-injection-surjection-bijection`, `def-group`, `def-subgroup`,
`lem-subgroup-criterion`, `def-coset`,
`lem-coset-membership-and-equality`, `lem-group-inverse-laws`,
`def-symmetric-group`, and `lem-symmetric-group-is-a-group`.

Legacy-unclassified ring/order/number targets checked from disk and against the
ring, Conrad, and Ernst sources above (`source-checked`): `def-ring`,
`def-commutative-ring`, `lem-ring-elementary-consequences`, `def-subring`,
`lem-subring-criterion`, `def-ring-homomorphism`,
`lem-ring-homomorphism-basic-properties`,
`def-zero-divisor-and-integral-domain`,
`lem-field-is-a-commutative-ring`, `def-field`, `def-product-ring`,
`thm-zorn`, `def-chain`, `def-maximal-element`, `def-prime`,
`cor-prime-iff-euclid-property`, `def-integers-modulo-n`,
`def-addition-and-multiplication-modulo-n`,
`thm-integers-modulo-n-basic-algebra`, `thm-z-mod-p-is-a-field`,
`thm-int-comm-ring`, and `lem-int-cancellation`.

Legacy-unclassified real-construction targets checked from disk and against Tao
(`source-checked`): `thm-cauchy-ring`, `lem-null-ideal`, `lem-null-maximal`,
`def-real-numbers`, and `thm-reals-field`. Their use here is explanatory and
example-only, not part of the A-page proof backbone.

No published dependency contained an unambiguous false load-bearing statement,
so no published-dependency repair is proposed. The older real-construction
items use “ideal” and “quotient ring” before the abstract definitions now being
built, but their exact algebraic claims are correct and this pair supplies the
later dictionary; this is not a repair case.

## 9. Dependency closure, leaf rule and omissions

- Every A-page dependency is published on a strictly earlier page or earlier in
  the same A item list. The sole cross-pair edge is group A to ideal A.
- Each B item depends only on its A page or on published earlier A-page content.
  No A item and no later planned item depends on a B-only item.
- No forward reference, `external_refs` mention, or `proved_here: false`
  fallback remains. There is no unbuilt load-bearing machinery.
- All 55 proposed ids were searched in `items/` and `plan-spec.json`; no id or
  statement collision was found.
- Dropped/rescoped material: impossible bijective-monoid counterexample dropped;
  determinant orientation deferred; characteristic theorem left at order 50;
  polynomial prime-not-maximal witness replaced by $(0)\subset\mathbb Z$.

The exact page orders used here were read from the current machine spec:
36/37 and 48/49. The stale orders printed in the old prose blocks are corrected
only in the applyable replacement text above.

## 10. Checks and honest confidence

Completed before handoff: normative documents and full scaffold brief read;
both exact prose blocks read; all 55 ids collision-searched; all proposed
published dependencies opened from disk; source URLs above opened; manifest JSON
and proof-contract JSON parsed; page/item/contract scope compared; companion and
requires directions reviewed; B-leaf and forward-reference pass performed.

I have high confidence in the statement-level mathematics, source support,
order legality and the absence of a load-bearing forward reference. I have not
authored or prechecked final proofs; exact contract quotes for planned, not-yet-
authored local targets are promises that Step 5 must place in the corresponding
Statement/Definition or update synchronously. The orchestrator must still splice
the manifest before the authoritative `validate-plan` and `depsource` gates can
classify the new local edges.

Exact next action: orchestrator Step 3 should approve or decline R1–R8 from
disk, then splice the approved manifest and run the authoritative plan/source
gates. Do not author content before Step 4.

## Step 5 authoring record

All 55 approved items and the four draft page-composition files were authored
from the spliced manifest. The group and ring statements are
`literature-derived` and their local proofs `ai-altered`; this is the
source-and-adaptation route recorded in §§6–8. Definitions use
`proof: not-applicable`. The specialised B examples are `ai-altered` in both
components except `cex-trivial-kernel-does-not-imply-surjective`, whose
checkable doubling witness remains the sole `ai-generated` construction with
`generation.role: counterexample`; direct integer arithmetic finds no
counterexample to the counterexample.

The authoring changes from the final scaffold are limited to the justified-by
links on `def-quotient-ring`, which point to its two later well-definedness and
law proofs, the explicit clause $I\trianglelefteq S+I$ in the focused second
ring-theorem lemma, and `direct` phase strategy for the two universal-property
proofs so their completed factor maps fit the canonical precheck stratification.
No title, mathematical scope, dependency, or B-leaf decision was changed.

Step-5 gates run on the scoped item set: reflow clean; precheck 47/47
proof-bearing items clean; content-policy 55 items with no errors or warnings;
proof-contract strict 47/47 with no errors; finite-smoke no registered checks;
page prosecheck clean; fwdcheck, extcheck, and citecheck clean for the owned
scope. The full-repository depcheck and rendercheck retain unrelated errors in
other concurrent batches; scoped filtering found no error in these four pages or
their 55 items. Exact next action: independent Step-6 readers audit this batch;
do not author or repair it without an Alpha request.
