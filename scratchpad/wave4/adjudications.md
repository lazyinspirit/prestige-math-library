# Wave 4 A6 — Alpha adjudication of Sol refuter findings (running record)

Classification key. CONFIRMED-FATAL: the published text is false as written, or
cites a target for a proposition that target does not state and that is not a
one-line consequence of it. CONFIRMED-NONFATAL: a real but sub-30-second defect;
repaired at A6 where cheap (A6 is the licensed place for polish), recorded
otherwise. REFUTED: no defect; evidence given.

## r1-limits-basics (7 items) — 5 findings

| # | item | verdict | action |
|---|---|---|---|
| 1 | lem-convergent-implies-cauchy [L1] | CONFIRMED-NONFATAL (citation fidelity: Fact was a topic label, not the proposition) | repaired: L1 now states def-real-limit's convergence and Cauchy conditions verbatim |
| 2 | lem-null-times-bounded [L1] | CONFIRMED-NONFATAL, same class | repaired |
| 3 | lem-convergent-implies-bounded Remark | **CONFIRMED-FATAL** — "Bolzano-Weierstrass is not proved anywhere in this library as things stand" is false: `library/real-analysis/monotone-sequences-and-cauchy-completeness.md` is `status: published` and carries `thm-bolzano-weierstrass` | repaired to a reading-order statement |
| 4 | lem-convergent-implies-cauchy Remark | **CONFIRMED-FATAL** ×2 — page "planned and not yet written" (false), and "on that page it is the engine behind the monotone convergence theorem and Bolzano-Weierstrass" (false: that page derives monotone convergence from the lub property, Bolzano-Weierstrass from it, and the Cauchy criterion last) | both repaired |
| 5 | rem-sequence-conventions | **CONFIRMED-FATAL** — same false "proved nowhere" claim for monotone convergence and Bolzano-Weierstrass | repaired |

## r2-algebra-of-limits (6 items) — 1 finding

| # | item | verdict | action |
|---|---|---|---|
| 1 | thm-squeeze Remark | CONFIRMED-NONFATAL — "follows from lem-null-times-bounded whenever $x_k$ is presented as a product" overstates the cited lemma, which needs a null factor and a **bounded** factor | repaired: "as a product of a null sequence and a bounded one" |

## r3-subsequences-fs (5 items) — 6 findings

All six are the same citation-fidelity class as r1 #1/#2: a Fact naming a theorem
or a topic instead of stating the proposition its steps consume. CONFIRMED-NONFATAL.
Repaired all six (lem-subsequence-inherits-limit L1; fs-bounded-implies-convergent
L1/L5/L8; fs-limit-preserves-strict-inequality L1/L7), plus the decay Remarks in
fs-bounded-implies-convergent and fs-subsequence-convergence-implies-convergence
(**CONFIRMED-FATAL**, same false "planned and not yet written" class).

## f1-cardinal-core (5 items) — 1 finding

| # | item | verdict | action |
|---|---|---|---|
| 1 | lem-cardinal-operations-are-well-defined Remark | **CONFIRMED-FATAL** — "cardinal exponentiation is stated with the Axiom of Choice throughout this page" is false: the exponential unit laws (lem-cardinal-arithmetic-basic-laws) and the finite case (thm-cardinal-arithmetic-agrees-with-finite-counting, "Work in ZF; no choice principle is used") are choice-free | repaired, naming both choice-free cases |

## f2-cantor-hessenberg (5 items) — 6 findings

| # | item | verdict | action |
|---|---|---|---|
| 1 | thm-cardinal-power-set-and-cantor Remark | **CONFIRMED-FATAL** — "The hypothesis is used exactly twice ... at $\mathcal{P}(\kappa)$ and at ${}^{\kappa}2$" omits the arbitrary-$A$ uses in step 2.1's general form of clause (a) | repaired to "only to know that a set has a cardinality", naming all four sites |
| 2 | cor-cardinal-absorption `short` | **CONFIRMED-FATAL** — reader-visible `short` asserted $\kappa \otimes \lambda = \kappa$ unconditionally; the item's own Statement says $\kappa \otimes 0 = 0$ | repaired; the title was already correct |
| 3 | cor-cardinal-absorption [L4] | CONFIRMED-NONFATAL — dropped the cited lemma's well-orderability hypothesis inside an explicitly ZF item | repaired ("For a well-orderable set $X$") |
| 4 | cor-cardinal-absorption Remark | **CONFIRMED-FATAL** — a ZF item cited thm-cardinal-power-set-and-cantor for "a strict increase at every cardinal" without its AC hypothesis; in ZF $2^\kappa$ need not be a cardinal at all | repaired |
| 5 | lem-successor-cardinal-exists Statement prose | **REFUTED** — the sentence is scoped to "the axioms in use here", and the item is explicitly ZF-with-no-choice. In ZF the comparison with $2^\kappa$ is genuinely undecided and often not even well-formed; under ZFC the remaining question, whether $\kappa^+ = 2^\kappa$, is exactly what the sentence calls undecided. No change |
| 6 | thm-every-infinite-cardinal-is-an-aleph Remark | **CONFIRMED-FATAL** — "$2^{\aleph_0}$ is an aleph by clause (a)" presupposes AC, which the item is careful to attach to clause (b) only | repaired |

## f3-hierarchies-ac (5 items) — 3 findings

| # | item | verdict | action |
|---|---|---|---|
| 1 | cor-the-aleph-and-beth-hierarchies-are-well-defined [L7] | CONFIRMED-NONFATAL (well-orderability hypothesis) | repaired |
| 2 | same item [L4] | CONFIRMED-NONFATAL — "$\bigcup A$ is the least upper bound" attributed to targets that state only "$\bigcup A$ is an ordinal" | repaired: the clause is kept but marked as the immediate consequence it is, with its two-line derivation |
| 3 | thm-tarski-square [L4] | **CONFIRMED-FATAL** (citation) — the infinite-cardinal criterion $\omega \le \kappa$ is stated by `def-cardinal-arithmetic`, not by the cited theorem | repaired, contract updated |

## f4-cofinality (7 items) — 5 findings

| # | item | verdict | action |
|---|---|---|---|
| 1 | lem-cofinality-is-well-defined [L3] | CONFIRMED-NONFATAL (least-upper-bound attribution, as f3 #2) | recorded, not repaired — see the class note below |
| 2 | thm-cofinality-basics [L8] | **CONFIRMED-FATAL** — "A composition of a function with a bijection has the same range" is false as written; the step uses **pre**composition, $g \circ h$ with $h : \mu \to \beta$ onto | repaired, with the one-line image computation |
| 3 | thm-regularity-of-the-alephs [L4] | **CONFIRMED-FATAL** (citation) — same misattribution as f3 #3 | repaired, contract entry added |
| 4 | thm-regularity-of-the-alephs [L9] | CONFIRMED-NONFATAL (least-upper-bound and strictly-increasing-implies-injective attributions) | recorded, not repaired |
| 5 | thm-konig [L6] | CONFIRMED-NONFATAL — "a composition of injections is an injection" attributed to the injection definition, and unused | recorded, not repaired |

## f5/f6/t2–t7

Pending — lanes still running at the time of writing.

## The class note: attribution of one-line consequences

The single most common refuter finding across the foundations batch is a Fact
that states a **true, immediate consequence** of its cited target (the union of a
set of ordinals is its least upper bound; a strictly increasing ordinal map is
injective; a composition of injections is an injection) while citing the
definition or lemma that supplies the ingredients rather than the consequence.

Alpha's ruling: **nonfatal**, and repaired only where the consequence is not
one line (f3 #2, where the derivation is now written out) or where the claim is
false as written (f4 #2). Three reasons. The 30-second threshold is binding and
these close instantly. A3 already adjudicated this exact pattern when it approved
the Beta's B2/B3/B5/B6/B7 repairs, which *added* such clauses as strictly more
honest than a Fact that cited a definition for nothing. And rewriting them
corpus-wide would void every judge stamp in the batch for a defect at the level
of the letter. The class is recorded here and goes to the A10 report as a policy
question for the owner, because it is the dominant refuter finding and the rule
that governs it ("state the cited Definition or Statement itself") could be read
either way.


## t1-compactness-core (5 items) — 7 findings

| # | item | verdict | action |
|---|---|---|---|
| 1 | def-compactness-variants title | **CONFIRMED-FATAL** — the title advertised "relatively compact **spaces**" while the Definition defines relative compactness only for a subset inside an ambient and says explicitly it is "the exception and is deliberately not of that form" | title repaired to "... and $\sigma$-compact spaces, and relatively compact subsets" |
| 2 | lem-compactness-of-a-subspace-is-ambient Remark | CONFIRMED-NONFATAL — the metric analogue's claims 2 and 3 quantify over open subsets of the ambient metric space, not over balls | repaired |
| 3 | thm-compactness-variants-hierarchy Remark | **CONFIRMED-FATAL** — three separation claims stated with no choice hypothesis in an item whose Statement promises "every hypothesis is stated where it is spent"; each cited witness declares AC or AC-omega | repaired, naming the principle each witness spends |
| 4 | same Remark | **CONFIRMED-FATAL** — "None of the reverse implications holds in general" is contradicted by claim 1(b) of the same theorem | repaired |
| 5 | rem-compactness-conventions-and-choice-ledger | **CONFIRMED-FATAL** — the ledger said thm-compact-subset-of-a-hausdorff-space-is-closed avoids even finite selection; that item's own text makes finitely many selections through lem-finite-choice. What it avoids is the arbitrary selection | repaired |
| 6 | same item | **CONFIRMED-FATAL** — the metric-ledger bridge was carried by thm-compactness-agrees-with-metric-compactness alone, which covers compactness only; the variants' agreement is in def-compactness-variants | repaired, both cited |
| 7 | same item | **CONFIRMED-FATAL** — the title promises what each result on the page costs in choice, and the ledger omitted two of the five false statements | repaired: both added to the ZF list, verified from disk (neither refutation mentions a choice principle) |

## t2-compactness-theorems (5 items) — 1 finding

thm-compactness-under-continuous-maps [L8] cites def-real-order and
def-complete-ordered-field for "the order of R is a total order", which those
definitions do not prove (thm-reals-ordered-field does). **CONFIRMED-NONFATAL and
NOT repaired**: this is a corpus-wide convention — dozens of published items name
R as "the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]])" — and the same finding arrived independently as f6 #2 on
ex-the-cardinality-of-the-continuum. Repairing two items would be inconsistent
and repairing the convention corpus-wide is a separate owner-scale decision. It
goes to A10 as a recorded observation with both instances named.

## t3-products-tychonoff (5 items) — 4 findings, all CONFIRMED-FATAL, all repaired

1. lem-tube-lemma-for-a-compact-factor: "the union of finitely many basic boxes over a non-compact K need not contain any tube" is false — a finite union containing the slice always contains a tube (intersect the finitely many second factors through z_0). Repaired to say an arbitrary open set need not, and that finiteness, produced by compactness, is what does the work.
2. thm-tychonoff: "An arbitrary open cover of P mixes finitely many coordinates in each member" is false — a member is a union of basic sets and need not be determined by any finite coordinate set. Repaired.
3. cor-heine-borel-in-the-product-topology: the "second route" was said to reach compactness of a box "without any appeal to bisection", but it applies claim 2 at n = 1, which is thm-heine-borel-rn, proved by bisection. Repaired to "only the one-dimensional bisection".
4. cor-heine-borel-in-the-product-topology: "a metrizable space carries metrics of every diameter inducing the same topology" is false at a one-point space. Repaired with the at-least-two-points hypothesis and positive finite diameter.

## t4-local-baire-onepoint (7 items) — 1 finding, CONFIRMED-FATAL, repaired

def-locally-compact-space asserted that the product topology on R^n is the metric
topology of d_infinity, citing lem-metrics-on-rn (which only proves the three are
metrics) and cor-heine-borel-in-the-product-topology (which is stated for the
Euclidean d_2), and then applied Heine-Borel to d_infinity-boundedness. The claim
is true but uncited, and the compactness inference was licensed for the wrong
metric. Repaired by working in d_2 throughout the passage, which is exactly the
metric the cited corollary uses; the contract quote in
fs-local-compactness-is-hereditary [L2] was updated with it.

## t5-ordinal-spaces (4 items) — 3 findings, all CONFIRMED-FATAL, all repaired

1. lem-the-order-topology-on-an-ordinal: "(alpha,beta] are exactly the basic sets that stay clopen" — false, the initial segments [0,beta] of the same basis are clopen too. Repaired to "the convenient basic sets that always stay clopen".
2. thm-the-long-line-is-countably-compact-and-not-compact: the title's punctuation confined "assuming countable choice" to countable compactness, leaving non-Lindelofness unqualified although claim 4 declares the hypothesis. Title repaired.
3. thm-quasicomponents-equal-components-in-a-compact-hausdorff-space: the closing Remark denied that singleton components give total disconnectedness (that is the library's definition) and identified open components with local connectedness (strictly weaker, as the cited item's own Remark says). Repaired.

## Certifier round 1 — 6 lanes, 52 items, 43 certified / 9 refused

Every refusal adjudicated by Alpha from disk and repaired; details in
`wave4-alpha.md` §8. Two of the nine were defects in repairs Alpha itself had
authored (`thm-quasicomponents-...` citation, `lem-convergent-implies-cauchy`
availability claim), which is the no-self-certification rule working.

## Certifier round 2 — 9 items, 8 certified / 1 refused

`ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not` refused a second time,
on an independent Fact: [L3] takes the totality of the order of R, the Archimedean
property and rational density from `def-real-order` and `def-complete-ordered-field`,
which define but do not prove them for the constructed reals. Same class as the
two instances repaired at round 1. Repaired: `thm-reals-ordered-field` and
`cor-cauchy-reals-lub-complete` declared and cited. Round 3 re-certifies it.
