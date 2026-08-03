# Wave 1 A8 published repairs

Repair round: A8-r1, 2026-08-02. Snapshot boundary: `pre-A8-r1` to
`post-A8-r1`. These are Alpha-authored repairs; independent-reader certification
is recorded separately before any refreshed `verification.verified` stamp. No id
was renamed or removed.

- `cex-a-list-of-length-mn-with-no-long-monotone-sublist` — confirmed nonfatal. Old: incomplete L1/L4 labels and natural-only pigeonhole transport. New: exact monotone inequalities, full sharp-bound statement, and finite-set cardinality transport. Derivation: an injection into a finite block composed with its cardinality bijection would inject into a smaller natural. Provenance unchanged.
- `cex-an-averaging-bound-that-is-not-attained` — confirmed nonfatal. Old L4 only named the principle; new L4 states the finite hypotheses and both fibre inequalities, exactly as `cor-the-averaging-principle`. Provenance unchanged.
- `cex-ring-homomorphism-not-preserving-identity` — confirmed nonfatal. Old L4 left $1\ne0$ in $\mathbb N$ unsupported; new L4 uses Peano P1, $1=\sigma(0)\ne0$, then injectivity of $\iota$. Provenance unchanged.
- `cex-subgroup-of-an-infinite-group-equinumerous-with-it` — confirmed nonfatal. Old two-coset classification was compressed; new text writes $a=2q+r$, proves $a+2\mathbb Z=r+2\mathbb Z$ by both inclusions, and separates the two residues. Provenance unchanged.
- `cex-zorn-hypothesis-fails` — confirmed nonfatal. Old Remark asserted $\sup\varnothing=0$ without leastness; new text derives $0\le u$ from $0+u=u$ using `lem-nat-add-identity` and `def-nat-order`. Provenance unchanged.
- `cor-index-one-iff-whole-group` — confirmed nonfatal. Old F1/F2 under-restated the infinite-index and singleton cases; new text includes both and derives cardinality one iff singleton via a bijection with $1=\{0\}$. Provenance unchanged.
- `cor-index-tower-finite` — confirmed nonfatal. Old proof treated $K\le G$ as implicit; new step checks containment and inherited operations from $K\le H\le G$. Provenance unchanged.
- `cor-prime-order-group-is-cyclic` — confirmed nonfatal. Old step used $\iota$ injectivity silently; new fact/step cites the injectivity clause of `lem-nat-embeds-int`. Provenance unchanged.
- `def-a-monotone-sublist-of-a-finite-list-of-reals` — confirmed nonfatal. Old injectivity used unstated trichotomy and the $L>N$ boundary used unstated pigeonhole; new Definition cites and declares both earlier lemmas. Provenance unchanged.
- `def-choice-function` — confirmed nonfatal. Old Remark attributed general finite-family choice to a list-only lemma; new Remark says “a family presented as the values of a function on a natural number.” Provenance: `literature-derived/not-applicable` to `ai-altered/not-applicable`, with the ledger changed from exact-source to semantic-source.
- `def-product-ring` — confirmed nonfatal. Old Remark unconditionally denied the standard injections were homomorphisms; new Remark qualifies failure by the other factor being nonzero, since in the zero-ring case $0_S=1_S$. Statement provenance changed from `literature-derived`/`exact-source` to `ai-altered`/`semantic-source` because the A8 repair materially changed a statement-component Remark.
- `def-quaternions` — confirmed fatal (`other`). Old title said multiplication was extended from the table; new title says the explicit coordinate formula matches the table. The Definition supplies no bilinear-extension rule. Provenance unchanged.
- `def-ring-characteristic` — confirmed nonfatal. Old uniqueness paragraph used uncited antisymmetry; new text cites the natural linear order, since mutually least naturals are mutually below and hence equal. Statement provenance changed from `literature-derived`/`exact-source` to `ai-altered`/`semantic-source` because the A8 repair materially changed the statement explanation.
- `def-upper-bound` — confirmed nonfatal. Old Remark falsely separated strict upper bounds from upper bounds outside $S$; new text states the equivalence: $s\le u$ and $u\notin S$ imply $s\ne u$, hence $s<u$. Statement provenance changed from `literature-derived`/`exact-source` to `ai-altered`/`semantic-source` because the A8 repair materially changed a statement-component Remark.
- `ex-a-ceiling-bound-from-the-strong-pigeonhole` — confirmed nonfatal. Old L2 was a label; new L2 states both counting and ceiling clauses with their hypotheses, exactly as the cited theorem. Provenance unchanged.
- `ex-a-three-set-and-a-four-set-sieve-computed` — confirmed nonfatal. Old L3 asserted the cardinality-level partition unsupported; new L3 derives unique $|J|\le|I|$ and identifies each subset with one $[I]^j$. Provenance unchanged.
- `ex-cauchy-sequences-as-a-commutative-ring` — confirmed nonfatal. Old L7 omitted the $ba=0$ alternative; new L7 gives both sides and then invokes commutativity. Provenance unchanged.
- `ex-every-divisor-is-a-subgroup-order-in-a-cyclic-group` — confirmed nonfatal. Old step used an inline wikilink in its tag; new L4 states least-positive-exponent minimality and the step cites L4. Provenance unchanged.
- `ex-integers-are-an-integral-domain-not-a-field` — confirmed nonfatal. Old prose named only the unit-group lemma and L5 over-attributed $\iota(0),\iota(1)$; new text cites `lem-units-of-z` and derives the identities from `def-int-operations`. Provenance unchanged.
- `ex-powerset-is-chain-complete` — confirmed nonfatal. Old final tag omitted the partial-order result; new tag includes step 1.1 before applying chain-completeness. Provenance unchanged.
- `ex-subring-that-is-not-a-subfield` — confirmed nonfatal. Old cancellation and two-sided-unit reasoning were under-cited; new text cites group cancellation and integer commutativity, explicitly deriving $m2=1$ from $2m=1$. Provenance unchanged.
- `ex-the-derangements-of-a-four-element-set-listed` — confirmed nonfatal. Old L3 merely named formula and recurrences; new L3 states all formulas and the $n\ge1$, $n\ge2$ ranges. Provenance unchanged.
- `ex-the-handshake-identity-by-double-counting` — confirmed nonfatal. Old L4 was a label; new L4 writes the bijection $2\to\{x,y\}$ and cardinality transport. Provenance unchanged.
- `ex-the-hat-check-ratio-as-a-quotient-of-counts` — confirmed nonfatal. Old step 1.2 used $\iota$ injectivity without L2; new tag includes L2. Provenance unchanged.
- `ex-the-onto-functions-from-a-five-set-to-a-three-set-counted-both-ways` — confirmed nonfatal. Old L3 only named the surjection theorem; new L3 states its finite hypotheses and full alternating formula. Provenance unchanged.
- `ex-two-elements-with-the-same-number-of-neighbours-in-a-finite-symmetric-relation` — confirmed nonfatal. Old proof left $|N-1|=N-1$ unstated; new L7 states natural cardinality and both pigeonhole steps cite it. Provenance unchanged.
- `ex-zorn-poset-of-chains` — confirmed nonfatal. Old L2 over-described a cited headline; new L2 directly proves that union is an upper bound and is contained in every other upper bound. Provenance unchanged.
- `fs-a-bonferroni-truncation-is-exact` — confirmed nonfatal. Old prose said exactness occurs only at depth $|I|$; new prose says it is guaranteed there but may occur earlier, as for disjoint families. Provenance unchanged.
- `fs-every-nonzero-element-is-a-unit-or-a-zero-divisor` — confirmed nonfatal. Old Remark called nonzero elements exactly all non-zero-divisors; new Remark says every nonzero domain element is a non-zero-divisor, respecting the convention that $0$ is not a zero divisor either. Provenance unchanged.
- `lem-characteristic-and-additive-order` — confirmed nonfatal. Old step used the zero-fold additive multiple without its source; new fact/step cites the additive-multiple base clause. Provenance unchanged.
- `lem-coset-equinumerous-with-subgroup` — confirmed nonfatal. Old proof compressed two bijections from $H$; new text explicitly composes $\rho_g\circ\lambda_g^{-1}:gH\to Hg$. Provenance unchanged.
- `lem-coset-partition` — confirmed nonfatal. Old step 1.1 omitted the given subgroup premise for $e\in H$; new tag includes `given`. Provenance unchanged.
- `lem-extremal-cut-closed-under-f` — confirmed nonfatal. Old L1 cited admissibility existence but not the definition supplying $f$-closure; new deps/L1 cite `def-admissible-set`. Provenance unchanged.
- `lem-extremal-cut-closed-under-sups` — confirmed nonfatal. Old L3 stated only leastness while step 2.2 used upper-boundhood; new L3 states both halves and the step cites it. Provenance unchanged.
- `lem-finite-choice` — confirmed fatal (`other`) for Terra and confirmed nonfatal for DeepSeek’s separate fidelity finding. Old title claimed every finite family and L3 compressed restriction/image facts; new title is exactly natural-number-indexed and L3 derives $F[\sigma(n)]=F[n]\cup\{F(n)\}$. Provenance unchanged.
- `lem-ordered-ring-cone-and-order-agree` — confirmed nonfatal. Old difference identities were under-sourced; new L2 cites group cancellation and derives $x-y=0\iff x=y$ by adding $y$. Provenance unchanged.
- `rem-sieve-pigeonhole-and-double-counting-conventions` — confirmed nonfatal. Old Remark attributed the equality to the incidence definition; new text assigns fibres/partitions to the definition and the equality to `thm-double-counting`. Provenance unchanged.
- `thm-double-counting` — confirmed nonfatal. Old L2 attributed slice finiteness to partition clause (c); new L2 uses clause (b) bijections for finiteness and clause (c) for disjoint union. Provenance unchanged.
- `thm-erdos-szekeres` — confirmed nonfatal. Old proof omitted $m=0$/$n=0$ and under-cited membership/order in L1; new step handles the one-term boundary and L1 cites $e\in\sigma(M)\iff e\le M$. Provenance unchanged.
- `thm-eulers-theorem` — confirmed nonfatal. Old F2 lacked the residue-class equality criterion; new deps/F2 cite `def-integers-modulo-n` and state class equality iff congruence. Provenance unchanged.
- `thm-the-bonferroni-inequalities` — confirmed nonfatal. Old L9 omitted $\binom n0=1$ used in step 1.3; new L9 includes the boundary clause of `def-binomial-coefficient`. Provenance unchanged.
- `thm-the-derangement-formula` — confirmed nonfatal. Old L4 only named complementary inclusion-exclusion; new L4 states its hypotheses, power-set index, and equality. Provenance unchanged.
- `thm-the-erdos-szekeres-bound-is-sharp` — confirmed nonfatal. Old L1 omitted $j<n\Rightarrow j+1\le n$ and step 4.2 omitted totality; new deps/L1 add `lem-nat-discrete` and the step cites L1. Provenance unchanged.
- `thm-the-number-of-surjections` — confirmed nonfatal. Old L4 only named complementary inclusion-exclusion; new L4 states the sieve hypotheses and full equality. Provenance unchanged.
- `thm-zorn-implies-ac` — confirmed fatal (`dependency_citation`). Old proof cited `thm-zorn`, which assumes AC, while deriving AC; new A2 is the explicit assumed Zorn principle and the circular dependency/citation is removed. Provenance unchanged.

## A8 targeted-rejudge round 2

The targeted paired rejudge produced 16 new exact-hash candidates on 15 items.
Both lanes' `ex-zorn-poset-of-chains` candidates are false positives: current
[L2] already writes the complete elementwise upper-bound/leastness derivation.
The other 14 candidates are confirmed nonfatal and receive the following
smallest repairs. All are elementary derivations from the named definitions or
theorems; component provenance was already `ai-altered` or `ai-generated` and
is unchanged.

- `cex-a-list-of-length-mn-with-no-long-monotone-sublist` — old L2 omitted the natural trichotomy used to order distinct indices and turn failure of $K<L$ into $L\le K$; new L2 and `deps` cite `lem-nat-trichotomy`, and after the independent reader flagged the remaining minor tag omission, steps 2.1 and 2.2 explicitly spend L2 at both uses.
- `cor-index-tower-finite` — old step 1.1 derived $K\le G$ from $K\le H\le G$ without citing the subgroup axioms; new F1 gives the subset/identity/product/inverse inheritance derivation from `def-subgroup`, and the step spends F1.
- `cor-prime-order-group-is-cyclic` — old final step inferred a nonidentity element directly from prime order; new F2 derives it from finite cardinality after L1 reflects $\iota(|G|)>\iota(1)$ back to $|G|>1$.
- `ex-a-ceiling-bound-from-the-strong-pigeonhole` — old L2 omitted the source theorem's $k\in\mathbb N$ hypothesis; new L2 restores it, while the application remains $k=3$.
- `ex-cauchy-sequences-as-a-commutative-ring` — old step 1.4 used $n\ge1\Rightarrow(n=1\lor n\ge2)$ without a source; new L8 derives it from `lem-nat-discrete` and is cited by the product check.
- `ex-the-handshake-identity-by-double-counting` — old optional extreme-case check asserted $d(x)=N-1$ without counting $V\setminus\{x\}$; new L3 derives $|V\setminus\{x\}|=N-1$ from the singleton/disjoint-union sum rule and step 3.1 identifies this as the neighbour set.
- `ex-the-hat-check-ratio-as-a-quotient-of-counts` — old step 2.1 attributed $r_0,r_1,r_2$ to step 1.2, which computed only $D_3$ through $D_6$; new text cites the base values in L3.
- `ex-the-onto-functions-from-a-five-set-to-a-three-set-counted-both-ways` — old step 1.2 used equality of canonical-natural images as equality of counts without its injectivity source; new derivation and tag spend L6.
- `fs-every-nonzero-element-is-a-unit-or-a-zero-divisor` — old L4 did not establish $0\le1$ in $\mathbb N$ before applying order preservation; new L4 gives the witness $0+1=1$ from the natural order/addition definitions.
- `lem-coset-partition` — old steps 1.1--1.3 spent subgroup identity, inverse, and product closure through `given` alone; new dependency/F2 cites `def-subgroup` and all three steps spend it.
- `lem-ordered-ring-cone-and-order-agree` — old step 2.1 placed the first-direction trichotomy subproof after the converse had rebound $P$, leaving its scope implicit; new opening explicitly returns to the ordered-ring order and positive cone of step 1.1.
- `rem-sieve-pigeonhole-and-double-counting-conventions` — old page-ledger phrase “every identity ... that carries a minus sign” accidentally included truncated natural differences; new wording says “uses a negative summand” and explicitly separates $n-1,n-2\in\mathbb N$.
- `thm-the-erdos-szekeres-bound-is-sharp` — old numbered proof did not discharge $m=0$ or $n=0$ and step 4.3 selected a common block for an empty sublist; new step 1.0 handles the zero boundary, and step 4.3 gives the empty injection separately.
- `thm-zorn-implies-ac` — old step 2.2 used pairwise comparability of a chain without the definition; new `def-chain` dependency/L5 and the overlap-agreement derivation license the union of partial functions.

## A8 targeted-rejudge round 3

- `cor-prime-order-group-is-cyclic` — confirmed nonfatal. Old round-2 L1 described `lem-nat-embeds-int` as reflecting order even though its Statement says only that it preserves order. The final proof needs no reflection: primality makes $\iota(|G|)\ne\iota(1)$, injectivity gives $|G|\ne1$, and if a group with identity had no nonidentity element it would be the singleton of cardinality $1$. Provenance unchanged.
- `ex-the-onto-functions-from-a-five-set-to-a-three-set-counted-both-ways` — confirmed nonfatal. Old round-2 step 1.2 used the surjection formula to show equal-size codomains have equal surjection counts, so the advertised direct-subtraction route was not independent. New L4 writes the bijection $u\mapsto\phi\circ u$ between the two surjection sets, and step 1.2 no longer cites L3 or L6. Provenance unchanged.

The separate current-hash `lem-finite-choice` rejection is a false positive and
causes no edit. L3 expressly distinguishes what comes from
`def-natural-numbers` from what it proves locally: after
`$\sigma(n)=n\cup\{n\}$` it says “Thus” for restriction, then “directly from
the definition of image” and gives the elementwise iff before concluding the
image equality. The judge treated that written derivation as though it were
merely attributed to the cited definition.

## A8 closing-sweep repair round 4

The frozen closing sweep produced 28 exact-hash candidates. Alpha adjudicated
22 as confirmed nonfatal and six as false positives. The 22 repairs below are
bounded by the dedicated `pre-A8-r4` / `post-A8-r4b` touch snapshots (the
intermediate `post-A8-r4` snapshot exposed and led to the dependency-to-forward-
reference correction on `def-commutative-ring`). All 19
proof-bearing pages passed mechanical precheck after reflow. No id was renamed
or removed, and component provenance is unchanged.

- `cex-2z-is-not-a-subring` — old L5 identified the canonical images of $0$ and $1$ with the distinguished integers without the defining source; new L5 cites `def-int-operations`.
- `cex-left-coset-that-is-not-a-right-coset` — old F3 asserted that $\{e,(12)\}$ is a subgroup from the subgroup definition alone; new F3 writes the complete two-element multiplication and inverse check under the published permutation convention.
- `cex-product-of-two-subgroups-not-a-subgroup` — old L1 erased the integer embedding from Lagrange's divisibility conclusion; new L1 and step 2.1 retain $\iota(|H|)\mid\iota(|G|)$ in $\mathbb Z$.
- `cex-ring-homomorphism-not-preserving-identity` — old L4 used the distinguished integer $0$ and $1$ identifications without their definition; new L4 cites `def-int-operations`.
- `def-commutative-ring` — old final Remark cited only the quaternion definition for ring structure and noncommutativity, although that page defers those proofs; new dependency/citation uses `thm-quaternions-form-a-division-ring`, whose claims 1 and 2 prove exactly both assertions.
- `def-ring` — old repeated-addition Remark falsely said an integer is not an element of an arbitrary ring; new text makes the actual typing distinction, namely that $m$ is an external scalar and $ma$ is not the ring product, even when the underlying set happens to contain integers.
- `def-ring-homomorphism` — old explanation said the multiplicative monoid of a ring is not a group, contradicted by the zero ring; new text says it need not be a group, which is the exact reason identity preservation is not automatic.
- `ex-a-three-set-and-a-four-set-sieve-computed` — old L2 merely named both inclusion-exclusion identities; new L2 states their exact ranges, signs and empty-index term before the numerical substitutions.
- `ex-every-divisor-is-a-subgroup-order-in-a-cyclic-group` — old L4 omitted the infinite-order alternative; new L4 says an identity-producing positive exponent makes the order finite and bounds its least such exponent, and step 1.1 spends that formulation.
- `ex-powerset-is-chain-complete` — old step 1.1 used set extensionality without a Fact; new F1 states the axiom and the step cites it after proving mutual inclusion.
- `ex-product-ring-has-zero-divisors` — old function-ring Remark omitted the coefficient-ring hypothesis; new comparison requires $1\ne0$, excluding the zero-ring counterexample.
- `ex-rationals-and-reals-as-fields` — old step 3.1 concluded ordered-field structure while tagging only the ordered-ring/cone half; new sentence and tag explicitly combine it with the field structure of step 1.1.
- `ex-subring-that-is-not-a-subfield` — old L8 identified the canonical images of $0$ and $1$ with the distinguished integers from `lem-nat-embeds-int` alone; new deps/L8 cite `def-int-operations`.
- `ex-the-derangements-of-a-four-element-set-listed` — old step 4.2 moved from $\iota(D_3)=2$ to $D_3=2$ without injectivity; new L7 and the rewritten computation identify the right side as $\iota(2)$ and spend injectivity before using the natural recurrence.
- `ex-two-elements-with-the-same-number-of-neighbours-in-a-finite-symmetric-relation` — old L3 cited only finite-subset rigidity while omitting the equal-cardinality derivation; new L3 obtains the subset from L1 and both cardinalities from L2 before invoking that clause.
- `lem-characteristic-and-additive-order` — old L7 inferred $0q=0$ in $\mathbb Z$ from ring structure alone; new L7 cites the existing `lem-ring-elementary-consequences` dependency for that consequence.
- `lem-domain-cancellation` — old L4 stated only absence of zero divisors although step 3.1 cited it for the full domain identification; new L4 states the commutative, $1\ne0$, no-zero-divisor conjunction.
- `lem-finite-choice` — old first Remark unqualifiedly said ZF cannot make infinitely many choices; new wording says arbitrary infinite families do not in general yield a choice function and explicitly preserves definable simultaneous-choice examples such as Russell's shoes.
- `lem-left-and-right-cosets-equinumerous` — old step 1.1 used subgroup inverse closure without a source; new `def-subgroup` dependency/L3 and step tag license the inversion move.
- `thm-fermats-little-theorem` — old F1 changed $\gcd(p,a)=1$ to $\gcd(a,p)=1$ without the symmetry source; new deps/F1 cite `lem-gcd-basic-values`.
- `thm-inclusion-exclusion` — old L1 used an unquantified $S$ in the assertion that every $[S]^j$ is finite, which is false for arbitrary infinite $S$; new L1 states the in-scope claim for the finite sieve index set $I$.
- `thm-the-erdos-szekeres-bound-is-sharp` — old L1 omitted transitivity while step 1.2 chained natural inequalities; new deps/L1 cite `thm-nat-linear-order` for transitivity.

The six no-edit false positives are `ex-zorn-poset-of-chains` in both lanes
(current L2 writes the full elementwise union upper-bound and leastness proof),
`fs-zorn-provable-in-zf` (the title/Statement are the false claim being refuted,
and the Given/conclusion are explicitly consistency-qualified),
`ex-russells-socks` (step 4.1 says an instance of the universal axiom, not an
equivalence, and step 5.1 warns that failure of one construction proves no
impossibility), `lem-commutative-division-ring-is-a-field` (the title and
Statement expressly pair this direction with a cited lemma whose claim 3 proves
the converse), and `lem-ring-elementary-consequences` (its Remark expressly
uses the field-to-commutative-ring bridge; the cited negative-product lemma has
both sides and commutativity supplies the opposite zero-product side).

Independent GPT-5.6 Sol xhigh reader `/root/wave1_alpha/wave1_aa_reader`
returned PASS on all 22 current-disk repairs and all six frozen false-positive
controls. Exact 28-verdict-line digest:
`3953be6303b3f0b444a71f59301f460754b0c2866a96ad039babbf4afaff2536`;
27-unique-target current-disk aggregate digest:
`99473c2ca3c9177d380f0a34e1441620e92b30efd6e77e1ebd70d6c272f96ebe`.

## A8 targeted-rejudge round 5

The 22-item r4 targeted sweep quiesced with five current-hash Terra
rejections. Alpha confirmed all five nonfatal and bounded the following repairs
by `pre-A8-r5` / `post-A8-r5`; all five pass reflow and mechanical precheck.

- `ex-every-divisor-is-a-subgroup-order-in-a-cyclic-group` — round-4 step 1.1 changed $qd$ to the Given $n=dq$ without spending multiplication commutativity; new tag cites existing L3.
- `ex-a-three-set-and-a-four-set-sieve-computed` — old title said every intersection was listed although the tables deliberately list only nonempty-index intersections and handle $A_\varnothing=X$ in the complementary formula; new title says every nonempty intersection.
- `ex-the-derangements-of-a-four-element-set-listed` — round-4 L7 stated only injectivity although step 4.2 also used preservation of sums and products; new L7 preserves clauses 0 and 7 of the already-cited canonical-embedding lemma.
- `thm-the-erdos-szekeres-bound-is-sharp` — round-4 L1 retained only $p<q\Rightarrow p+1\le q$ although step 1.2 uses the reverse direction; new L1 states the cited biconditional.
- `thm-inclusion-exclusion` — step 1.4 partitioned its finite sum into cardinality blocks but omitted the sum-splitting Fact from its tag; new tag includes L2.

Independent GPT-5.6 Sol xhigh reader `/root/wave1_alpha/wave1_aa_reader`
returned PASS on all five r5 current-disk repairs; exact five-verdict-line digest
`d6a1ebb8deac6f3254d84f3c6bca49fbdcde15e67ea16cf3f2054dd8596aac7d`.

## A8 targeted-rejudge round 6

The five-item r5 targeted rejudge quiesced with two current-hash Terra
rejections, both confirmed nonfatal and repaired between `pre-A8-r6` and
`post-A8-r6`:

- `ex-a-three-set-and-a-four-set-sieve-computed` — step 2.3 used the original three-set sizes and intersections as well as the newly computed $A_3$ intersections but tagged only steps 1.4 and 1.5; new tag also cites steps 1.1 and 1.2.
- `ex-the-derangements-of-a-four-element-set-listed` — L1 moved from the general bijection-count theorem to $4!$ without stating $|4|=4$; new L1 cites clause (a) of the existing `def-finite-cardinality` dependency before applying the theorem.

Independent GPT-5.6 Sol xhigh reader `/root/wave1_alpha/wave1_aa_reader`
returned PASS on both r6 current-disk repairs; exact two-verdict-line digest
`8480962936453d3a80ba47d1050a6f5da675252af1305322e5d29d7ff0c46647`.

## A8 targeted-rejudge round 7

The two-item r6 targeted rejudge quiesced with one current-hash Terra
rejection, confirmed nonfatal and repaired between `pre-A8-r7` and
`post-A8-r7`:

- `ex-the-derangements-of-a-four-element-set-listed` — step 3.1 concluded
  $D_4=9$ from the exhaustive nine-tuple enumeration but omitted the Fact that
  defines $D_4$ as the cardinality of the derangement set. The first bounded
  edit added L2 to the tag; the independent reader correctly observed that old
  L2 preserved only the fixed-point-free predicate, not the counting equation.
  A second bounded correction (`pre-A8-r7b` / `post-A8-r7b`) now preserves
  $|\operatorname{Der}(B)|=D_{|B|}$ and its $A$-specific consequence in L2.
  Step 3.1 cites that Fact; the enumeration and conclusion are unchanged.

The first independent reading correctly returned FAIL on the tag-only edit
(exact verdict digest
`08d9f759c73f1371a0067ad7d2c6234aa48bc169158a113bba2d1eb994562653`),
which triggered the L2 correction above. The same independent GPT-5.6 Sol
xhigh reader then returned PASS on the corrected current disk; exact verdict
digest `0bd1adeba25d36b64646bd0ea50afd1eb594932b953ab7289a48b6e4f4281248`.

## A8 closing-sweep fatal repair round 8

Under the 2026-08-03 owner amendment mirroring build Step 8, the frozen
closing-sweep set contained 18 current exact-hash rejections: one confirmed
fatal, 16 confirmed nonfatal and one false positive. Only the fatal item was
edited; all 17 other outcomes are ledger-only and triggered no polish, impact
run or rejudge.

- `fs-inclusion-and-exclusion-for-three-sets-without-the-triple-term` — the old
  title displayed subtraction between raw natural cardinalities, although this
  library has no natural subtraction and the Statement/refutation deliberately
  formulate the claim in $\mathbb R$ through $\iota$. The new title names the
  real-valued three-set identity with the triple-intersection term deleted, so
  it matches the exact proposition proved false. The stale
  `verification.judge` block was deleted. This repair is bounded by
  `pre-A8-r8fatal` / `post-A8-r8fatal`.

Independent GPT-5.6 Sol xhigh current-disk certification returned PASS; exact
verdict digest
`98213f797c2d75c6e55a105d5cbb4a731db583ea670c159714fedb43e1adfd6b`.
The dedicated fatal-only impact receipt computes one changed interface and the
single consumer `cex-a-sieve-computation-that-omits-a-term`, disposed
`still-licensed`; its gate passes. The cumulative A8 receipt through
`post-A8-r8fatal` now records 55 changed interfaces and the same 1,386 affected
items, all disposed `still-licensed`.
