# frontier-17 — step 8, lead Alpha: adjudication of the paired-judge verdicts

Run: `frontier-17` · role: lead Alpha · label: `step8-lead` · covers: all
Baseline: `pre-step8` (2026-08-23T04:44:51Z, taken by the engine before this dispatch; not re-snapped).

## 1. What was on the table

`research/frontier-17-judge.jsonl` carries 1,249 rows over the level's 440 scoped
items under `JUDGE_LINEUP=deepseek+opus`. Of those rows, **150 are rejections**
over **131 distinct items** — 127 from DeepSeek V4 Pro, 23 from Claude Opus 5.
The 369 `null` rows are capacity refusals from the Opus lane; they are not
verdicts and none was adjudicated. Every one of the 440 items ended with a real
Opus verdict, so no item is short a lane for want of capacity.

**Every rejection is adjudicated.** `research/frontier-17-judge-adjudications.jsonl`
carries 150 rows, one per rejection row, each with the model, the frozen
`context_sha256`, and the `item_sha256` of the normalized item text **as it
stood at adjudication time** (guard form: whole `verification:` block excluded).
The regenerated closure receipt reports `unadjudicated: 0`.

| outcome | rows | distinct items |
|---|---:|---:|
| `confirmed_fatal` | 60 | 48 |
| `confirmed_nonfatal` | 86 | 79 |
| `false_positive` | 4 | 4 |

48 items were repaired. `open_fatal` is empty: no confirmed fatal defect was
left unrepaired, and there is no step-8 blocker.

## 2. The standard I applied

Step 8 is fatal-only (R1). Only a `confirmed_fatal` licenses an edit; a nonfatal
or false-positive closes its row with no content, page, frontmatter, contract,
impact or judge mutation. Within that, I used one line consistently, and state it
here because it is what the counts above mean:

**Fatal** when any of these holds.

1. Something the item asserts — in the Statement, the title, a definition, or a
   proof step — is false, or is not established and is not something a competent
   reader closes in thirty seconds.
2. A hypothesis of a theorem the item applies is neither satisfied by the item's
   own setting nor verified in it.
3. A cited Fact misstates its source — inflated, truncated, misattributed — **in a
   way that changes what the proof is licensed to conclude**, and the missing
   content is not a thirty-second standard fact.
4. The item's central mathematical move rests on an input that is neither cited
   nor thirty-second standard.

**Nonfatal** otherwise: a fact present in the Facts block but missing from one
step's bracket; a dependency declared in `deps` but never lifted into the Facts
block, where the step it licenses is routine; a hypothesis dropped from a
quotation that the item's own setting plainly supplies; a missing citation for a
standard bookkeeping identity. These are what `briefs/judge-conventions.txt`
already exempts as "minor citational quirks" and "logical gaps between proof
steps that a competent reader closes within 30 SECONDS", and the great majority
of the DeepSeek rejections are of exactly this shape.

**False positive** when the judge's factual premise is wrong about the text on
disk.

## 3. Reading the two lanes

| lane | rejections | confirmed fatal | nonfatal | false positive |
|---|---:|---:|---:|---:|
| DeepSeek V4 Pro | 127 | 46 | 78 | 3 |
| Claude Opus 5 (1M) | 23 | 14 | 8 | 1 |

| overlap | items | of which fatal |
|---|---:|---:|
| both lanes rejected | 19 | 13 |
| DeepSeek only | 108 | 33 |
| Opus only | 4 | 2 |

Two things in that table are worth saying plainly rather than leaving to be
inferred.

**DeepSeek earned its isolation.** It is the only cross-family reader in this run
(`CLAUDE.md`, 2026-08-23), and 33 of the 48 repairs rest on a finding no other
lane produced. Its rejection rate is high and its confirmed-fatal rate inside
that is 36%, but the fatal findings it alone caught include the false clause in
`lem-maximal-divisor-pivot-for-pid-submodules` (with a counterexample), the false
Given in `thm-galois-group-of-a-compositum-as-a-fibre-product`, the vacuous
local clause in `def-biholomorphic-map`, and the missing regular-value hypothesis
in `thm-lagrange-multipliers-for-regular-level-set-constraints` (also with a
counterexample). Discounting the lane for its volume would have cost every one of
those.

**Opus and I are the same model.** Its 23 rejections and my adjudications are two
reads by `claude-opus-5[1m]`, so agreement between them is not corroboration. I
gave the one Opus rejection I was inclined to dismiss —
`fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability` —
a full pass against `SCHEMA.md` §7 rather than a same-family nod, and it is a
false positive for a reason the section states explicitly (§5 below). The Opus
lane rejected five times less often than DeepSeek and confirmed fatal at 61%;
that is a lane with a higher bar, not a better one, and on this run it was silent
on 33 items whose defects were real.

## 4. Confirmed fatal — the repairs

48 items, grouped by defect type. Each names the lanes that raised it, where the
defect sat, what was wrong, and what changed. The pre-edit `item_sha256` of each
is the `adjudication_ref` of its `research/defect-ledger.jsonl` row
(`f17-step8-001` … `f17-step8-048`).

### arithmetic-error (1)

**`lem-product-of-content-zero-set-and-interval-has-content-zero`** — DeepSeek, proof-step.  
Step 2.1 asserted a strict inequality that the item's own step 1.2 contradicts: N_i l_i is at most L + l_i with equality whenever L/l_i is an integer. The chain's conclusion survives because the final bound is strict. Repaired by replacing the first strict sign with the correct one and naming the two bounds it uses.


### citation-inflated (1)

**`thm-rational-canonical-form-existence-and-uniqueness`** — DeepSeek, facts-block.  
[L1] said a finitely generated PID module is classified by its invariant factors alone, dropping the free rank the cited theorem carries — false as written, since Z and Z^2 have no invariant factors and differ — and step 1.1 used the uniqueness theorem for the existence of the decomposition. Repaired by restoring the free rank to [L1] and adding the existence theorem as [L3], with step 1.1 deriving the absence of a free summand from torsion.


### citation-misattributed (1)

**`def-invariant-factors-and-elementary-divisors-of-an-endomorphism`** — DeepSeek, definition.  
The definition attributed both existence and uniqueness of the invariant factors and elementary divisors to the uniqueness theorem, which asserts only uniqueness. Repaired by attributing existence to the invariant-factor and primary-decomposition theorems and declaring both.


### citation-missing (19)

**`cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set`** — DeepSeek, facts-block.  
Step 1.1 extends a singleton inside P/Phi(P) through the elementary-abelian basis-extension lemma without establishing that the quotient is elementary abelian; the quotient theorem was absent from deps. Repaired by declaring and citing it as [L3].

**`cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`** — Opus+DeepSeek, facts-block.  
Step 3.1 drew the free summand and both decompositions from [L5], the uniqueness theorem, which asserts only uniqueness and the isomorphism criterion; neither existence theorem was in deps. Repaired by declaring thm-invariant-factor-decomposition-over-a-pid and thm-primary-decomposition-and-elementary-divisor-form-over-a-pid, stating them as [L6] and splitting the step's appeal into existence from [L6] and uniqueness from [L5].

**`cor-unit-n-ball-volume-is-maximal-in-dimension-five`** — Opus+DeepSeek, proof-step.  
Step 2.2's values V5=8 pi^2/15 and V6=pi^3/6 decide the theorem, and evaluating Gamma(7/2) needs Gamma(1/2)=sqrt(pi), which was absent from the facts and deps, while [F3] dropped the Gamma(1)=1 clause needed for Gamma(4)=6. Repaired by declaring cor-real-gamma-one-half-is-root-pi as [F4], restoring Gamma(1)=1 to [F3], and writing out both evaluations.

**`def-topology-induced-by-an-ultrafilter-algebra`** — DeepSeek, definition.  
The definition speaks of an algebra for the ultrafilter monad while citing only the endofunctor, unit and multiplication; the monad laws are a separate theorem and thm-the-ultrafilter-monad-is-a-monad was absent from deps, so the hypothesis was not well formed. Repaired by declaring and naming it.

**`ex-closed-cylinder-as-a-finitely-patched-oriented-surface`** — DeepSeek, facts-block.  
Steps 1.1, 2.1 and 2.2 use the patch area and flux formulas, which [L2] does not supply; the two definitions were absent from the facts and deps. Repaired by declaring them and stating them as [L3].

**`ex-orientation-reversal-preserves-area-and-negates-flux`** — Opus+DeepSeek, facts-block.  
Step 2.1 computes the area and the two fluxes with the tag [step 1.1, algebra] while neither the patch-area definition nor the flux definition appeared in the facts or deps, so the defining parameter integrals rested on no fact. Repaired by declaring them and stating them as [L3].

**`ex-sphere-and-hemisphere-surface-integrals`** — Opus+DeepSeek, facts-block.  
Step 1.1 equates the area density with the norm of the parameter cross product, and neither thm-surface-area-density-is-cross-product-norm nor def-cross-product-in-r3 was in the facts or deps. Repaired by declaring both and stating them as [L3]; the prose citation typo in step 3.1, which named step 2.2 twice instead of 2.3, was corrected in the same pass.

**`ex-the-comparison-functor-for-the-free-group-adjunction`** — DeepSeek, proof-step.  
Step 1.1 described the comparison structure map as word evaluation, which neither cited fact supplies, and step 1.2 attributed to [L1] a characterisation of the comparison morphisms it does not state. Repaired by deriving the counit from the free-group adjunction and by proving the homomorphism characterisation from the algebra-homomorphism equation.

**`ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic`** — DeepSeek+Opus, facts-block.  
The example concludes monadicity and the failure of strict monadicity while neither the definition of a monadic functor nor the comparison functor theorem appeared in its facts or deps. Repaired by declaring both, stating them as [L4] and [L5], and citing them at the steps that use them.

**`ex-torus-surface-area`** — DeepSeek, facts-block.  
Step 2.1 integrates the cross-product norm as the area density, while [L2] gives only that area is the integral of the density; thm-surface-area-density-is-cross-product-norm was absent from the facts and deps. Repaired by declaring it and stating it as [L3].

**`fs-becks-theorem-characterises-strict-monadicity`** — DeepSeek, proof-step.  
Step 3.1 concluded that a fully faithful and essentially surjective comparison is an equivalence, and read monadicity out of [L1], which stated only that strict monadicity implies monadicity. Repaired by restoring the definition of monadic to [L1] and citing thm-fully-faithful-split-essentially-surjective-characterises-equivalence, with the tag splitting supplied explicitly.

**`fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas`** — Opus+DeepSeek, proof-step.  
Step 2.1 compares the unbounded polyhedral supremum with the finite value 2 pi r H, which no cited fact establishes; the only dependency was the Schwarz-lantern counterexample. Repaired by declaring cor-surface-area-of-revolution-formula and computing the lateral area from the constant profile.

**`lem-bohr-mollerup-factorial-squeeze`** — DeepSeek, proof-step.  
Step 1.1 is the secant-slope monotonicity of a convex function, the whole content of the squeeze, and lem-three-slope-inequality-for-convex-functions was in neither the facts nor deps. Repaired by declaring it, stating it as [F3], and applying it at the two triples with the x=1 case treated separately.

**`thm-burnside-basis-theorem`** — DeepSeek, facts-block.  
[L2] supplies bases only for finite elementary abelian p-groups and steps 1.1 and 1.2 apply it to P/Phi(P), which nothing in the item establishes to be one; thm-frattini-quotient-is-the-largest-elementary-abelian-quotient was absent from deps. Repaired by declaring it, stating it as [L3] and citing it at both steps.

**`thm-caratheodory-domain-is-the-completion-under-sigma-finiteness`** — DeepSeek, proof-step.  
Step 1.1 needs the Caratheodory restriction to extend mu, which is the extension theorem; thm-caratheodory-extension-theorem was declared in deps but carried no fact label and was cited by no step, while [L3] gives only completeness. Repaired by stating it as [L5] and citing it at step 1.1.

**`thm-finite-galois-extension-characterizations`** — Opus+DeepSeek, proof-step.  
Step 1.2 asserted the separable-degree equality for the splitting field of a separable polynomial, which presupposes that K/F is separable; the theorem that an extension generated by separable elements is separable was in neither the facts nor deps. Repaired by declaring and stating it as [L3] and deriving separability of the generators from the divisibility of their minimal polynomials.

**`thm-fundamental-theorem-of-finite-galois-theory`** — Opus+DeepSeek, proof-step.  
Steps 1.2 and 2.1 rest on the equality of the order of a finite Galois group with the degree of the extension, which nothing cited supplies; thm-finite-galois-extension-characterizations was absent from deps. Repaired by declaring it and stating it as [L2], then citing it at both steps.

**`thm-real-gamma-endpoint-behaviour-and-unique-minimum`** — Opus+DeepSeek, proof-step.  
Step 2.1 rests on the claim that a differentiable strictly convex function has strictly increasing derivative, which was neither cited nor in deps and carries the uniqueness of the minimiser; step 1.2 likewise invoked the mean value theorem with no fact. Repaired by declaring thm-differentiable-convex-functions-and-monotone-derivatives, stating it and the mean value theorem as [F5] and [F6], and deriving strict increase from strict convexity.

**`thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse`** — Opus, proof-step.  
Clause 2 of the Statement and step 1.1 need the topology induced by an ultrafilter algebra to be compact Hausdorff; lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology was declared in deps but carried no fact label and was cited by no step. Repaired by stating it as [L4] and citing it at step 1.1.


### citation-truncated (9)

**`cor-volume-under-a-continuous-graph-over-a-jordan-base`** — DeepSeek, facts-block.  
[F1] named an undefined symbol K, dropped the cited theorem's hypotheses and did not display the formula that step 2.1 specialises. Repaired by stating the cited theorem in full and making the specialisation explicit.

**`ex-maximal-subgroups-as-frattini-hyperplanes`** — DeepSeek, facts-block.  
[L1] quoted only the order of Phi(D) and the shape of the Frattini quotient, while step 1.1 attributes to it the explicit equality Phi(D)=<r^2>; the cited example does display that equality. Repaired by restoring it to [L1].

**`lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers`** — DeepSeek, facts-block.  
[L2] listed the ring axioms without commutativity of addition, which def-ring requires, and step 3.1 verifies exactly the axioms listed in [L2]. Repaired by restoring commutativity.

**`thm-becks-strict-monadicity-theorem`** — DeepSeek, facts-block.  
[L3] restated strict creation without the clause that the lifted fork is a coequalizer, and step 1.2 uses exactly that clause to obtain the coequalizer whose underlying map is the algebra structure. Repaired by restoring the clause.

**`thm-holomorphic-inverse-function-theorem`** — DeepSeek, facts-block.  
[L3] restated the zero-order factorisation without saying that the cofactor q is holomorphic, and step 1.1 differentiates q. Repaired by restoring the clause.

**`thm-invariant-factor-decomposition-over-a-pid`** — DeepSeek, facts-block.  
[L1] quoted only the vague first sentence of the simultaneous-basis theorem and omitted its 'more precisely' existence clause, which step 2.1 needs to produce the aligned bases. Repaired by quoting the existence form.

**`thm-regular-level-surfaces-have-local-regular-parametrizations`** — DeepSeek, facts-block.  
[L1] dropped the normalisations g(0)=0 and Dg(0)=0 from the cited local-graph corollary, which steps 1.1 and 3.1 use to identify the patch derivative with the linear isomorphism and the base point with phi(0). Repaired by restoring them.

**`thm-regular-outer-measures-are-continuous-from-below`** — DeepSeek, facts-block.  
[L2] restated the Caratheodory theorem as the sigma-algebra clause only, dropping that the restriction is a complete measure; step 2.1 applies continuity from below to that restriction, which needs it to be a measure. Repaired by restoring the clause.

**`thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs`** — DeepSeek, facts-block.  
[L1] restated strict creation without the clause that the lifted fork is a coequalizer, which step 6.1 invokes. Repaired by restoring the clause.


### false-or-overstrong-statement (4)

**`cor-torsion-splits-from-the-free-part-over-a-pid`** — DeepSeek, statement.  
The Statement asserts that a free complement need not be canonical and the proof established only the splitting. Repaired by proving the assertion: over a PID with a nonzero nonunit a, the module R + R/(a) has the two distinct free complements R(1,0) and R(1,1+(a)).

**`lem-maximal-divisor-pivot-for-pid-submodules`** — DeepSeek, proof-step.  
Step 4.1 ended with the false clause that a unit a makes N a direct summand of M. For R=Z, M=Z^2, N=Z(1,0)+Z(0,2) and psi the first coordinate, psi(N)=Z is maximal among value ideals containing (2) and a=1 is a unit, yet Z^2/N is Z/2 and a direct summand would be torsion-free. Repaired by replacing the clause with the true statement that a unit a makes v and e_1 generate the same submodule, so N splits along the pivot.

**`thm-galois-group-of-a-compositum-as-a-fibre-product`** — DeepSeek, facts-block.  
The Given asserted that the compositum is the splitting field of the product of the two separable splitting polynomials and is therefore Galois. The product of two separable polynomials need not be separable — E1=E2 makes it a square — and step 3.1 explicitly treats that case. Repaired by taking the product of the distinct irreducible factors, which has the same roots and no repeated one.

**`thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras`** — DeepSeek, statement.  
The Statement concludes that the presentation need not be split in the algebra category, while the proof showed only that the canonical splittings are not algebra homomorphisms; another section was not ruled out. Repaired by adding step 2.3, which rules out every section: the free monoid has only the empty word as an idempotent, so the idempotent two-element monoid admits no algebra section at all.


### ill-typed-construction (1)

**`def-finitely-patched-regular-surface-and-integrals`** — Opus+DeepSeek, definition.  
The flux compatibility clause required induced normals to agree away from the excluded overlap preimages, which is exactly where no two patches both have a normal, so it constrained nothing and admitted opposite normals on patches whose interiors meet along a curve. The definition also credited the parameter-boundary exception lemma with controlling the overlap preimages, which that lemma does not cover. Repaired by stating the agreement on the overlap at images of interior parameter points, and by separating the content-zero overlap condition from the boundary lemma.


### invalid-inference (5)

**`ex-volume-of-a-solid-of-revolution-by-cylindrical-shells`** — DeepSeek+Opus, proof-step.  
Step 1.1 applied the cylindrical-shell theorem, stated for the region below a single nonnegative profile, to the region between two profiles by taking the shell height as their difference; the cited theorem licenses no such thing. The value is right and the item's washer computation corroborates it. Repaired by applying the theorem twice, to the profiles 1 and (x-1)^2, showing that the two revolved solids differ by the example's solid up to a content-zero graph, and subtracting by finite additivity of Jordan content.

**`lem-local-holomorphic-logarithm-nonvanishing-function-on-disc`** — Opus, facts-block.  
The Given asserted that h'/h is holomorphic citing the algebra of complex derivatives, whose quotient rule needs a holomorphic numerator; that h' is holomorphic is the nontrivial higher-derivative theorem and was not cited, yet step 1.1 feeds h'/h to a primitive theorem needing a holomorphic integrand. Repaired by citing thm-cauchy-integral-formula-higher-derivatives for the holomorphy of h'.

**`prop-fraction-field-dimension-recovers-pid-module-rank`** — DeepSeek, proof-step.  
Step 1.1 took an arbitrary torsion-free splitting from cor-torsion-splits, whose own Statement warns that a free complement is not canonical, and step 3.1 then equated its rank r with rank_R M, which is defined by the invariant-factor decomposition. Repaired by taking the splitting from the invariant-factor decomposition itself, so that r is the free rank by definition.

**`thm-groups-are-monadic-over-sets`** — DeepSeek, proof-step.  
Step 1.1 asserted that the isomorphism of [L1] is the comparison functor. The cited theorem states only that the Eilenberg-Moore category is isomorphic over Set to the category of groups, which does not identify the isomorphism, so strict monadicity was not established. Repaired by proving directly that the comparison is bijective on objects and morphisms: the counit is identified as word evaluation from the free-group adjunction, commuting with word evaluation is characterised as being a homomorphism, and every algebra is shown to be the comparison image of the group its structure map defines.

**`thm-monoids-and-rings-are-monadic-over-sets`** — DeepSeek+Opus, proof-step.  
The monoid half asserted that the isomorphism over Set of [L1] is the comparison functor, which the cited theorem does not say; the ring half already went through strict Beck and was sound. Repaired by identifying the free-monoid counit as word evaluation and proving the comparison bijective on objects and morphisms.


### missing-hypothesis (7)

**`def-biholomorphic-map`** — DeepSeek, definition.  
The local clause required only that the restricted complex domains lie inside the two neighbourhoods, not that they contain a and f(a). Under that wording z^2 is biholomorphic between neighbourhoods of 0 and 0 by restricting to a disc avoiding the origin, which would collapse clause 4 of thm-holomorphic-inverse-function-theorem into triviality. Repaired by requiring a in U' and f(a) in V'.

**`ex-biquadratic-galois-correspondence-lattice`** — DeepSeek, proof-step.  
Step 3.1 applies the fundamental theorem of Galois theory, whose hypothesis is that the extension is finite Galois; the item established only the degree and four automorphisms. Repaired by declaring thm-finite-galois-extension-characterizations, stating it as [L2] and using the splitting field of the separable (x^2-2)(x^2-3) to conclude Galois with group of order four.

**`ex-d-four-galois-correspondence-for-x-four-minus-two`** — DeepSeek, statement.  
The Example fixed a only by a^4=2, while step 1.1 needs Q(a) to be real; a nonreal fourth root breaks that argument. The defining display also carried qquad without its backslash, which renders as literal text. Repaired by naming a as the positive real fourth root, restoring the escape, and adding the separable-splitting-field justification that the fundamental theorem needs.

**`ex-quartic-x-four-minus-x-minus-one-has-galois-group-s-four`** — DeepSeek, proof-step.  
Step 2.1 applies the resolvent theorem, which requires the quartic to be monic irreducible separable in characteristic not two; separability and the characteristic were never established. Repaired by adding step 1.4 and the separability criterion cor-irreducible-polynomial-is-separable-iff-derivative-nonzero as [L2].

**`ex-s-three-galois-correspondence-for-x-cubed-minus-two`** — DeepSeek, proof-step.  
Step 2.1 concluded that six exhibited automorphisms exhaust the automorphism group from the degree alone, and the later steps apply the fundamental theorem without establishing that L/Q is finite Galois. Repaired by declaring the characterization theorem, noting that x^3-2 has three distinct roots, and deducing that the order of the Galois group is the degree six.

**`thm-graph-of-continuous-function-on-a-compact-set-has-content-zero`** — DeepSeek, proof-step.  
The Statement admits m=0 under the library convention that the naturals contain zero, and step 2.1 divides by the square root of m. Repaired by discharging the m=0 case in step 1.1, where the domain has at most one point and the graph is a single point, so the remaining argument may assume m at least one.

**`thm-lagrange-multipliers-for-regular-level-set-constraints`** — Opus+DeepSeek, facts-block.  
[L1] cited the curve-velocity theorem without its hypothesis that c is a regular value, which surjectivity of DG at the single point a does not give: G(x)=x^2(x-1) at a=1 has DG(1)=1 while 0 is a critical value. Repaired by restricting to the open submersion locus through rank lower semicontinuity, on which c is a regular value, and applying the theorem there.


## 5. False positives — 4 items

**`cex-a-reflexive-pair-whose-coequalizer-is-not-preserved`** — DeepSeek.  
DeepSeek reads g = [1,1] as the constant map with value 1 rather than the copairing of two identities. With g(i_0(m)) = m and f(i_0(m)) = m+1 the coordinate difference is exactly 1, so step 2.2's 0-or-1 bound and the zigzag argument in 3.1 stand. No defect.

**`cor-surface-area-of-revolution-formula`** — DeepSeek.  
The title is a YAML single-quoted scalar, in which '' is the escape for a single quote; it decodes to $2\pi\int_a^b r(s)\sqrt{1+r'(s)^2}\,ds$, the same formula as the Statement and the proof. The doubled character is frontmatter quoting read as a second prime, not a wrong exponent, and the rendered title a reader sees carries r'(s).

**`ex-rational-and-jordan-forms-of-one-matrix-over-q-and-c`** — DeepSeek.  
DeepSeek's characteristic-2 counterexample requires reading A over F_2. A is the explicit rational matrix of ex-rational-canonical-form-of-an-explicit-four-by-four-matrix, stated 'Over Q'; every field containing it has characteristic 0, so x^2+1 = (x-i)(x+i) has distinct roots and the coprimality used in step 2.1 holds. No defect.

**`fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability`** — Opus.  
The Remark's reason is correct under SCHEMA section 7: examples pages are leaves, so nothing may depend on an item that lives only on one. cex-one-existing-iterated-integral-does-not-give-riemann-integrability is homed on library/real-analysis/fubini-and-change-of-variables-examples.md, a different B page, so it cannot be a dependency here. The sibling Opus cites, fs-every-compact-solid-has-a-volume citing cex-compact-solid-without-jordan-volume, is a SAME-B-page citation, which the same section explicitly permits as local exposition. No defect.


## 6. Confirmed nonfatal — 79 items, closed without an edit

Each row below is a real observation about the text; none of them is
publish-blocking, and R1 forbids repairing them here. They fall into five
shapes, and the shape matters more than the individual entries: **61** are a
missing or unlifted citation for a routine step, **7** a hypothesis dropped from
a quotation that the setting supplies, **4** a truncated quotation whose missing
clause is a term definition, **2** a misattribution with thirty-second content,
and **5** are neither — two duplicated-argument pairs and one interpretive-filler
Fact. Every one is recorded in `research/defect-ledger.jsonl` as
`f17-step8-n001` … `f17-step8-n083` with `disposition: nonfatal-recorded`, so
none of them is lost by not being fixed.

Two entries deserve to be read rather than skimmed, because they are the only
nonfatal findings that are about content rather than citation:

- `fs-premeasure-extensions-are-always-unique` and
  `cex-nonsigma-finite-premeasure-has-distinct-extensions` carry **one argument
  between them** — same half-open-interval algebra, same zero-or-infinity
  premeasure, same facts, same three steps. So do
  `cex-critical-value-can-have-a-smooth-level-set` and
  `fs-a-critical-value-has-a-singular-level-set`, on the same B page. Nothing
  false is asserted, which is why they are nonfatal; but the owner rule of
  2026-08-20 welcomes a second proof only when it is a genuinely different route,
  and these are not. Withdrawing or re-routing one of each pair is a content
  decision for step 9 or the owner, not a step-8 repair.

**`cex-compact-solid-without-jordan-volume`** — DeepSeek.  
Step 1.1 asserts that S x [0,1]^2 is closed and bounded hence compact, citing only F3 (about S). thm-heine-borel-rn is a declared dep and a product of closed bounded sets is closed and bounded; 30-second.

**`cex-critical-value-can-have-a-smooth-level-set`** — Opus+DeepSeek.  
This item and its same-page sibling fs-a-critical-value-has-a-singular-level-set run the identical argument on the identical map F(x,y) = x^2. Nothing false is asserted; the duplication is a richness defect whose repair (withdraw one, or have the later cite the earlier) is step-6 content work, not a step-8 fatal repair.

**`cex-flat-smooth-function-has-no-holomorphic-extension`** — DeepSeek.  
Step 3.1 equates the complex derivatives of F at 0 with the real derivatives of psi without a cited fact. Restricting the complex difference quotient to real increments gives the real derivative, and the induction is one line; 30-second.

**`cex-nonsigma-finite-premeasure-has-distinct-extensions`** — DeepSeek+Opus.  
Same finding as its counterpart fs-premeasure-extensions-are-always-unique: one argument, two items. Recorded; not repaired at step 8.

**`cor-euclidean-submersions-are-open-maps`** — DeepSeek.  
L2 attributes 'homeomorphisms are open maps' to def-homeomorphism-and-open-maps, which explicitly defers that equivalence to the next item. The content is one line from the definition (h[U] = (h^{-1})^{-1}[U] and h^{-1} is continuous); citation-misattributed, 30-second.

**`cor-finite-premeasure-extension-is-unique`** — DeepSeek.  
Step 1.1 needs X in the algebra, which follows from def-algebra-of-subsets (not in deps) in one step from empty-set membership and complement closure; 30-second.

**`cor-gautschi-inequality-for-the-real-gamma-function`** — DeepSeek.  
Step 1.2 uses monotonicity of t -> t^(1-s) on the positives, which thm-real-power-laws does not state. Routine; 30-second.

**`cor-lagrange-multiplier-rule-for-one-regular-constraint`** — DeepSeek.  
L1 draws 'DG(a) surjective iff grad G(a) nonzero' as a consequence of the Jacobian definition, which does not state the total-derivative representation. A nonzero linear functional into R is surjective and DG(a)v = <grad G(a), v> is the gradient representation the parent theorem cites; 30-second.

**`cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one`** — DeepSeek.  
Step 1.2's tag omits a citation for 'minimally generating' and for <empty set> = 1. The term is spelled out inside L1's quoted statement of the Burnside basis theorem and def-generated-subgroup (F2's source, in deps) gives the empty-generation fact; both are 30-second closures.

**`cor-premeasure-induced-set-function-is-an-outer-measure`** — DeepSeek.  
Step 1.1 uses mu_0(empty) = 0 from the premeasure definition, which is not in deps. That clause is part of the definition of the object the Statement is about; missing definitional citation, nonfatal.

**`cor-regular-level-set-local-graph-theorem`** — DeepSeek.  
Step 2.1 differentiates the normal-form slice without citing the chain rule and applies the inverse function theorem to a projection defined on the slice rather than on an open chart domain. Working in the normal-form coordinates makes the domain open and the differentiation routine; a precision gap between steps, 30-second.

**`cor-three-closed-sets-covering-s2-contain-an-antipodal-pair`** — DeepSeek.  
Step 2.1 forms delta = (delta_1, delta_2) and applies Borsuk-Ulam without citing that a pair of continuous real functions is continuous into R^2. Routine componentwise continuity; 30-second.

**`cor-volume-of-a-radius-r-n-ball`** — DeepSeek.  
Step 1.2 substitutes t = ru without an [F#] for thm-substitution, a declared dep. Routine; 30-second.

**`cor-volume-of-a-right-circular-cone`** — DeepSeek.  
Step 2.1 differentiates a cubic citing only F2 and algebra while lem-derivative-of-a-power is a declared dep with no [F#]. Routine; 30-second.

**`cor-volume-of-a-right-circular-cylinder`** — Opus+DeepSeek.  
Step 2.1 evaluates the integral of a constant with the tag [step 1.1, algebra]; lem-integral-elementary-bounds is a declared dep that is never lifted into the Facts block. The integral of a constant over an interval of length h is the most routine evaluation there is; 30-second.

**`cor-volume-of-the-unit-n-ball`** — DeepSeek.  
Step 1.2 substitutes u = t^2 and names the result B(1/2,(n+1)/2) without an [F#] for thm-substitution-for-improper-integrals (a declared dep) or for def-real-beta-integral (not in deps). Routine substitution plus a definitional identification; 30-second.

**`cor-washer-method-for-solids-of-revolution`** — DeepSeek.  
Step 2.1 splits the outer disc into the annulus and the inner disc without separately arguing that the annulus is Jordan measurable and the overlap circle content zero. Both follow in one step from F2 and F4, which the item already uses that way in step 1.1; 30-second.

**`def-euclidean-submersions-and-immersions`** — DeepSeek.  
The immersion clause asserts 'Df(a) injective iff rank_a f = m' with only thm-linear-kernel-image-and-injectivity and def-differential-rank cited; rank-nullity is the missing link and is not in deps. Routine linear algebra; 30-second.

**`def-oriented-unit-normal-and-flux-of-a-surface-patch`** — DeepSeek.  
Orthogonality of phi_u x phi_v to the tangent plane is attributed to def-tangent-plane-of-a-regular-surface-patch, which only says the plane is the span of the two partials. That a cross product is orthogonal to both factors is a one-line computation; 30-second.

**`def-surface-area-and-scalar-surface-integral-of-a-patch`** — DeepSeek.  
The closing sentence asserts that changing the integrand on the content-zero parameter boundary leaves the integral unchanged, citing only the integrability theorem. The assertion is the published lem-riemann-integral-unchanged-by-content-zero-modification, the integrands here are continuous on a compact region hence bounded, and no proof in the item rests on the sentence. Missing citation, nonfatal.

**`def-surface-reparametrization-and-orientation`** — DeepSeek.  
The invertibility of Dh for a C^1 diffeomorphism, and 'invertible implies nonzero determinant', are asserted with only the Jacobian-determinant definition cited. Both are routine; 30-second.

**`ex-abelian-groups-of-order-three-hundred-sixty-in-both-canonical-forms`** — DeepSeek.  
Step 1.1's enumeration of partition combinations is elementary arithmetic and the item does not assert a classification theorem beyond it; step 2.1's regrouping of coprime prime-power factors is the standard coprime splitting, available on the page as lem-coprime-cyclic-pid-quotients-split. Missing citations, both 30-second.

**`ex-counting-outer-measure-is-metric-on-the-real-line`** — DeepSeek.  
Same shape: additivity on positively separated (hence disjoint) sets follows from [L1]'s outer-measure-plus-all-subsets-measurable clause; 30-second.

**`ex-counting-premeasure-on-the-finite-cofinite-algebra`** — DeepSeek.  
Step 1.1 infers countable additivity of the restricted counting function without citing that counting measure is a measure. [L2] gives that counting outer measure is an outer measure with every subset Caratheodory measurable, from which additivity on disjoint sets is immediate; 30-second.

**`ex-gabriels-horn-has-unbounded-truncated-lateral-area`** — DeepSeek.  
Step 3.1 concludes A(T) is unbounded as T -> infinity from L being unbounded above. L(b) = integral from 1 to b of dx/x is nonpositive for b <= 1, so any b with L(b) > 0 automatically exceeds 1; 30-second.

**`ex-graph-as-a-regular-level-set`** — DeepSeek.  
L1 attributes DG(x,y)(v,w) = w - Dpsi(x)v to thm-algebra-of-total-derivatives, which covers only sums and scalar multiples; the projection and composite derivatives need the chain rule. Routine differentiation; 30-second.

**`ex-hall-burnside-detects-a-nontrivial-coprime-automorphism`** — DeepSeek.  
L2 drops thm-hall-burnside-automorphism-theorem's 'P a finite p-group' and 'A finite of order prime to p' hypotheses, and DeepSeek's C_4 x C_3 counterexample shows the fact is false as literally written. The item applies it only to P = C_3 with A of order 2, where both hypotheses plainly hold, so nothing the proof concludes is affected. Citation-inflated, nonfatal.

**`ex-lateral-area-of-a-right-circular-cone`** — DeepSeek.  
L1 omits the C^1-on-a-neighbourhood hypothesis that cor-surface-area-of-revolution-formula inherits. The profile is r(s) = Rs/H, linear and smooth on all of R, so the hypothesis plainly holds; citation-inflated, nonfatal.

**`ex-local-mapping-of-complex-squaring-at-zero-and-one`** — DeepSeek.  
Steps 1.1 and 1.2 read the local degree off the factorisations z^2 and (z-1)(z+1) citing only [L1], which defines the degree as the order of vanishing. Reading the order off an explicit factorisation with nonvanishing cofactor is the definition unfolded; 30-second.

**`ex-positive-convex-function-that-is-not-log-convex`** — DeepSeek.  
F2 quotes only strict monotonicity of log from thm-natural-logarithm-laws, while step 1.2 also uses log 1 = 0 and log 4 = 2 log 2 from the same theorem. Citation-truncated; the omitted clauses are routine and live in the cited item. 30-second.

**`ex-positive-non-log-convex-solution-of-gamma-functional-equation`** — DeepSeek.  
Step 1.2 uses sin(2 pi s) at s = 1, 5/4, 3/2 while F2 quotes only periodicity; thm-quarter-turn-values-and-shift-formulas is a declared dep with no [F#]. Routine; 30-second.

**`ex-real-quarter-turn-has-rational-form-but-no-real-jordan-form`** — DeepSeek.  
L1 omits the finite-dimensionality hypothesis of thm-jordan-form-exists-iff-the-characteristic-polynomial-splits. The hypothesis is presupposed by the very notion of characteristic polynomial that L1 names, and the application is to a 2-dimensional space. Nonfatal.

**`ex-torus-volume-by-washers`** — Opus+DeepSeek.  
Step 3.1 reads the semicircle integral as half the disc content; prop-riemann-graph-area-equals-jordan-content is a declared dep with no [F#] and the halving is by reflection symmetry. F1 also omits the washer corollary's continuity and g <= f hypotheses, both plainly satisfied by R +- q(y). 30-second.

**`ex-two-square-representations-from-prime-factorisation`** — DeepSeek.  
F1 quotes only the ordered-pair clause of def-sum-of-two-squares-representation and omits its 'essentially different' clause, which step 3.1 uses. The omitted clause is the definition of the term, stated in the item F1 names, and the displayed argument (unordered absolute-coordinate sets differ) is exactly the definition's negation. Citation-truncated, nonfatal.

**`ex-unit-ball-volumes-through-five-from-slicing`** — DeepSeek.  
Step 1.1 uses the semicircle area and FTC without [F#] tags (both declared deps) and step 2.1 substitutes t = sin theta and silently replaces the Wallis sine integral by the equal cosine integral. Both are routine; 30-second.

**`ex-unit-n-ball-volumes-through-eight-from-gamma`** — DeepSeek.  
F2 omits Gamma(1) = 1 from the cited functional equation, which steps 1.1 and 1.2 need for the even dimensions. The omitted value is part of the theorem F2 names and F3 already supplies the half-integer seed; 30-second.

**`ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin`** — DeepSeek.  
L1 asserts continuity of the polynomial Jacobian entries without a cited continuity fact. Routine; 30-second.

**`fs-a-critical-value-has-a-singular-level-set`** — Opus+DeepSeek.  
Same finding as its same-page sibling cex-critical-value-can-have-a-smooth-level-set: one argument, two items. Recorded; not repaired at step 8.

**`fs-boundary-maximum-modulus-principle-on-unbounded-domains`** — DeepSeek.  
Step 1.1 calls exp(-iz) entire without a fact for the entirety of z -> -iz. Routine; 30-second.

**`fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup`** — DeepSeek.  
The refutation needs only C_{A5}(F(A5)) = A5 not-subset-of F(A5) = 1, i.e. A5 nontrivial; that is uncited but immediate. The non-solvability sentence in step 2.1 is explanatory and carries no weight in the refutation.

**`fs-characteristic-and-minimal-polynomials-determine-similarity`** — DeepSeek.  
Step 2.1 asserts the invariant factors of the two nilpotent Jordan forms without citing the Jordan-block-to-module dictionary. J_k(0) is the cyclic module F[x]/(x^k) by definition of a Jordan block, so the computation is a 30-second unfolding; the item also gives the independent rank check (2 versus 1).

**`fs-every-level-set-of-a-smooth-map-is-a-graph`** — DeepSeek.  
Step 1.2 uses that curve velocities in a local C^1 graph lie in its tangent plane, citing only given and algebra. Routine chain rule; 30-second.

**`fs-finite-volume-implies-finite-lateral-surface-area`** — DeepSeek.  
The refutation exhibits finite improper volume together with compact-truncation lateral areas that are unbounded, and does not separately define the noncompact horn's lateral area. Any reading of 'lateral surface area' for the full horn is the limit or supremum of A(T), which step 1.2 shows is infinite, and the item states its compact-truncation scope explicitly. Scope caveat, nonfatal.

**`fs-flux-is-independent-of-the-parametrization`** — DeepSeek.  
L1 omits the C^1-on-a-neighbourhood clause of the regular-patch definition. Both parametrizations are linear, so the hypothesis plainly holds; citation-inflated, nonfatal.

**`fs-induced-outer-measures-always-agree-with-finitely-additive-data`** — DeepSeek.  
F1 states the covering-infimum formula without the cited definition's premeasure hypothesis, and the refutation applies it to a merely finitely additive set function. F1 displays the formula in full, so the object the refutation computes with is on the page and the refutation is unaffected; citation-truncated, nonfatal.

**`fs-premeasure-extensions-are-always-unique`** — Opus.  
This item and cex-nonsigma-finite-premeasure-has-distinct-extensions carry the same argument: same half-open-interval algebra, same zero-or-infinity premeasure, same F1/L1/L2, same counting-measure-versus-nu comparison at a singleton. Nothing false is asserted and the two live on different pages (A-page examples list versus the B page), so neither can cite the other under SCHEMA section 7. Duplicated argument, recorded not repaired: withdrawing or re-routing one is a step-6 content decision, not a step-8 fatal repair.

**`fs-spherical-coordinates-are-globally-injective`** — DeepSeek.  
Step 2.1 differentiates products and composites citing only L1 and L5; the product and chain rules are not separately stated. Routine; 30-second.

**`lem-bounded-strip-maximum-principle`** — DeepSeek.  
Step 1.1 forms the product g(z)exp(eps(z^2-1)) and step 3.1 feeds it to [L1] as a holomorphic function; closure of holomorphy under products is neither cited nor in deps. Routine; 30-second.

**`lem-closure-in-an-ultrafilter-algebra-topology`** — DeepSeek.  
Step 2.1 extends a family with the finite-intersection property to an ultrafilter through [L2], which is stated for filters. The filter generated by a family with the FIP is the family of supersets of its finite intersections; 30-second.

**`lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`** — DeepSeek.  
Steps 3.2 and 3.3 need 'a split coequalizer is a coequalizer' to apply creation and [L4]; thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute is neither cited nor in deps. The fact is immediate from the split-coequalizer equations the item already carries through [L3]; 30-second.

**`lem-fixed-point-free-disk-map-produces-a-retraction`** — DeepSeek.  
L4 derives continuity of the square root as the inverse of the square map without a fact for the continuity of squaring, which L3 supplies for products. Routine; 30-second.

**`lem-free-word-rings-are-unital-rings`** — DeepSeek.  
Step 1.1 needs Z to be a ring for the free-module citation; thm-int-comm-ring is declared in deps but carries no [L#]. Background structural fact, 30-second.

**`lem-parameter-boundary-exceptions-do-not-affect-surface-integrals`** — DeepSeek.  
Step 3.1 extends the conclusion to flux integrands without def-oriented-unit-normal-and-flux-of-a-surface-patch in deps. The content used is only that a dot product of continuous vector functions is a scalar function; missing definitional citation, nonfatal.

**`lem-prime-one-mod-four-powers-have-primitive-two-square-representations`** — DeepSeek.  
Step 1.2's tag omits [L4] (Euclid's lemma), but L4 is stated in the item's own Facts block and the inference p|b^2 => p|b is immediate from it. Tag-level omission only.

**`lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets`** — DeepSeek.  
[L2] describes what def-image-and-preimage-under-a-relation is for instead of stating it, which the house citation-voice rule forbids. The membership unfoldings in steps 1.1 and 1.2 are the standard meanings of image and preimage and no step is mathematically unsupported.

**`lem-root-free-polynomial-circle-loops-are-nullhomotopic`** — DeepSeek.  
L3 omits the norm-continuity clause of thm-componentwise-limits-and-continuity that step 2.1 uses for radial normalization. Continuity of the modulus is routine; 30-second.

**`lem-stirling-formula-up-to-a-positive-constant`** — DeepSeek.  
Step 4.1 exponentiates a convergent sequence without citing continuity of exp. Routine; 30-second.

**`lem-transitive-subgroups-of-s-four-and-the-resolvent-action`** — DeepSeek.  
Step 3.1 computes |theta(H)| = |H|/|H cap V_4| without citing the first isomorphism theorem. Standard order bookkeeping from a kernel the step has already computed; 30-second.

**`prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator`** — DeepSeek.  
The module-torsion and module-annihilator notions used in the Statement have no declared definitional dependency, but both are defined earlier on the same page (def-primary-component-of-a-module-over-a-domain, prop-torsion-and-primary-components-are-submodules-over-a-domain) and the proof's use of them is definitional. Missing definitional citation, nonfatal.

**`prop-real-beta-symmetry-and-trigonometric-form`** — DeepSeek.  
Step 1.2 uses the derivative of sin^2 and the Pythagorean identity, both declared deps carrying no [F#]. Routine; 30-second.

**`thm-crude-monadicity-the-reflexive-tripleability-theorem`** — DeepSeek.  
def-monadic-and-strictly-monadic-functor is absent from deps although the conclusion uses the term. The definition is on the same page earlier and step 5.1 states the defining condition (K an equivalence) explicitly, so nothing mathematical is unsupported. Missing definitional citation, nonfatal.

**`thm-cylindrical-shell-formula-for-solids-of-revolution`** — DeepSeek.  
Step 1.1 identifies the solid built over the (x,z)-annulus with vertical coordinate y with S_y(f), whose tuple order is (x,y,z), without citing permutation invariance of Jordan content. The two sets differ by a coordinate transposition, which preserves content; 30-second.

**`thm-galois-closures-exist-and-are-minimal`** — DeepSeek.  
Step 3.1 attributes the intersection description of the normal closure to [L1], which states only finiteness and the splitting-field form. The description is the definition of N_Omega(K/F) in def-normal-closure-of-an-algebraic-extension, reached in one link from def-galois-closure-of-a-finite-separable-extension, which the item declares and names in its Given. Citation-misattributed, nonfatal.

**`thm-galois-group-of-an-irreducible-cubic-by-discriminant`** — DeepSeek.  
Step 1.1 takes G <= S_3 without citing thm-galois-group-embeds-in-the-symmetric-group-on-the-roots. The Galois group of a separable polynomial acts faithfully on its roots because the splitting field is generated by them; that is a 30-second closure and the named theorem sits earlier on the same page.

**`thm-hadamard-three-lines`** — DeepSeek+Opus.  
Step 2.1 uses |exp(x+iy)| = e^x, which neither the Given nor L1-L3 supplies and which is not in deps. It is a routine computational identity that follows in a line from the exponential addition law the Given does carry; 30-second.

**`thm-no-retraction-of-the-closed-disk-onto-the-circle`** — DeepSeek.  
L2 drops the n >= 1 hypothesis of thm-convex-subsets-have-trivial-fundamental-group. The item applies it to the disc in R^2; citation-inflated, nonfatal.

**`thm-plane-not-homeomorphic-to-other-euclidean-spaces`** — DeepSeek.  
L3 states that a pointed homeomorphism induces an isomorphism while thm-induced-fundamental-group-map-functoriality gives homomorphisms and functoriality. The isomorphism follows from functoriality applied to h after h-inverse and its converse; 30-second.

**`thm-real-beta-integral-convergence`** — DeepSeek.  
Steps 1.1 and 1.2 evaluate primitives and substitute without [F#] tags for thm-ftc-second-part and thm-monotone-change-of-variable-for-riemann-integrals, both declared deps. Routine; 30-second.

**`thm-real-gamma-euler-integral-convergence`** — DeepSeek.  
Step 1.1 evaluates a primitive without an [F#] for thm-ftc-second-part and step 1.3 chooses a natural m without citing Archimedes; both theorems are declared deps and both moves are routine. 30-second.

**`thm-real-gamma-functional-equation`** — DeepSeek.  
Step 4.1 evaluates the improper integral of exp(-t) by a primitive without citing thm-ftc-second-part, which is a declared dep. Routine; 30-second.

**`thm-real-gamma-is-log-convex`** — DeepSeek.  
Step 1.1 passes from a pointwise inequality, strict off one point, to a strict inequality of improper integrals without citing monotonicity or linearity, both declared deps. For a continuous integrand strict on a nondegenerate interval this is standard; 30-second.

**`thm-real-gamma-is-smooth`** — DeepSeek.  
Step 1.1 substitutes u = -log t and concludes integrability from a majorant citing only F2; thm-substitution-for-improper-integrals and thm-comparison-test-for-improper-integrals are declared deps. Routine; 30-second.

**`thm-real-gamma-one-half-wallis-proof`** — DeepSeek.  
Step 1.2 writes n! for Gamma(n+1); F4 quotes only the recurrence and omits Gamma(1) = 1 from the same cited theorem. Given the recurrence and that value the factorial identity is one induction; 30-second.

**`thm-solid-between-continuous-graphs-fubini-formula`** — DeepSeek.  
Step 2.1 invokes the Jordan boundary criterion in prose while its tag cites only [F1]; thm-jordan-boundary-criterion is a declared dep. Tag-level omission; 30-second.

**`thm-sum-of-two-squares-characterisation`** — DeepSeek.  
L4 states the canonical factorisation without the source's 'injective list of primes covering every prime divisor' hypothesis, so it asserts the existence the source conditions on. The existence of that finite injective list (prime divisors of n are bounded by n) is standard and published as thm-prime-factorisation-exists; a competent reader supplies it. Citation-inflated, nonfatal.

**`thm-surface-area-and-scalar-integrals-are-reparametrization-invariant`** — DeepSeek.  
L2 omits the boundedness and integrability hypothesis of thm-change-of-variables-for-compact-jordan-sets. The item applies it only to k = (q after phi) J_phi, continuous on a compact Jordan region and therefore bounded and integrable, so nothing the proof concludes is affected. Citation-inflated, nonfatal.

**`thm-surface-integrals-over-c-one-graphs`** — DeepSeek.  
L2 states that a nonzero parameter cross product makes a regular patch, omitting the injectivity clause of the cited definition. Step 1.1 separately establishes injectivity from the first two coordinates, so the omission changes nothing the proof concludes; citation-inflated, nonfatal.

**`thm-volume-of-a-solid-of-revolution-by-discs`** — DeepSeek.  
Step 1.1 composes the continuous square root with (x,y) -> f(x)^2 - y^2 while the Facts block carries sums and products but no composition fact. Routine; 30-second.

**`thm-volume-recursion-for-closed-euclidean-balls`** — DeepSeek.  
Step 1.1 asserts that [-r,r] is Jordan measurable of content 2r citing only compactness. That is the content of an interval, immediate from the definition of Jordan content; 30-second.


## 7. What must rejudge

The closure receipt names **48** ids in `needs_rejudge`, and they are exactly the
48 repaired items — no unedited page-mate is swept in, even though several share
a page context hash with a repaired item. I did not run the rejudge; the
engine's `8-rejudge` stage reads
`research/frontier-17-judge-closure.json`.

No `verification.judge` block was deleted, because none exists yet: the stamps
are written at `10-stamps-v2` and no item in the level carries one.

## 8. Gates

| gate | result |
|---|---|
| `step8-guard --baseline pre-step8` | **OK** — 48 changed, 0 created, 0 deleted; 48/48 licensed by a confirmed_fatal adjudication |
| `precheck` on every changed item | 44 proof-bearing items checked, 0 failing (the other 4 are definitions) |
| `depcheck` | OK — no cycles, all references resolve, no draft items on published pages |
| `citecheck` | clean; no new warning on any changed item |
| `fwdcheck` / `extcheck` | OK |
| `merge-proof-contracts` + `proof-contract --strict` | 0 errors over 381 items (1 pre-existing shotgun-bracket warning on `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`, an item no fatal finding licensed me to touch) |
| `citation-fidelity` | 1,351 citations, no quote-not-found, no widening candidate |
| `boundary-audit --fail-on-template` | 3,048 rows, no template reuse, no contradicted disposition |
| `defect-ledger check` | 312 rows for the run, 0 errors |
| `level-coverage --judge-only --verify-current-context` | `unadjudicated: 0`, `open_fatal: 0`, `needs_rejudge: 48` |

**Contracts were updated in the owning batch files**, never only in the merged
one: `research/frontier-17-batch-{1,3,4,5,6,8,9}.proof-contracts.json` carry the
new citation quotes, `uses` lists, step inputs and the derivation entries for
every step I added, and the merged file was rebuilt from them afterwards.

One consequence worth recording because it is not obvious: editing a **definition**
invalidates quotations of it in *other* items' contracts. Repairing
`def-topology-induced-by-an-ultrafilter-algebra` broke the `L1` quote in
`lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology`'s contract
entry, which `proof-contract --strict` caught. That entry's quote was refreshed;
its item was not touched.

## 9. Honest remaining gaps

1. **Nothing is open.** No confirmed fatal defect was left unrepaired and no
   blocker is declared. `open_fatal` is empty and the ledger has no `open` row
   for this run.
2. **The 48 repairs are unjudged.** They cleared the mechanical gates and my own
   reading, and nothing else. Two of them —
   `thm-groups-are-monadic-over-sets` and
   `thm-monoids-and-rings-are-monadic-over-sets` — carry proof material I wrote
   at step 8 rather than a restored citation, and
   `cor-torsion-splits-from-the-free-part-over-a-pid`,
   `thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras`
   and `ex-volume-of-a-solid-of-revolution-by-cylindrical-shells` carry new
   arguments of a paragraph each. Those five are where the rejudge is doing real
   work rather than confirming a citation.
3. **Two duplicated arguments survive**, recorded above and in the ledger. They
   are not defects of correctness and I did not spend a step-8 edit on them.
4. **The Opus judge lane is still unproven at this prompt.** `tools/judge.mts`
   records an injection test as the adoption bar for a new judge model and none
   has been run for Opus. Its low rejection count on this run is not evidence
   either way, and I have read its 23 findings on their merits rather than on
   their rate.
5. **The nonfatal cluster is a signal about the brief, not only about the text.**
   61 of 79 nonfatal closures are one shape: a dependency is declared in `deps`,
   the step that uses it is routine, and no `[F#]` lifts it into the Facts block.
   The judges are told to ignore exactly this, and one lane flagged it 100+ times
   anyway. Whether that is a judge-prompt problem or an authoring-convention
   problem is a step-10 question; the rows are in the ledger so it can be asked
   as a query.

---

# Round 1 — adjudication of the `8-rejudge` verdicts

Run: `frontier-17` · role: lead Alpha · label: `adjudicate-rejudge-round-1` · covers: all
Baseline: **still `pre-step8`** (2026-08-23T04:44:51Z). It was deliberately not
re-snapped: re-snapping would have baselined round 0's 48 repairs in, and the
guard would then have stopped checking them. Keeping the original snapshot keeps
the whole step-8 window under the guard, this round's edits included.

Everything above this line is round 0 and is unchanged.

## R1.1 What round 1 put on the table

The engine's `8-rejudge` stage swept the 48 items round 0 repaired. Both lanes
returned verdicts; the Opus lane passed every one of the 48, and **DeepSeek V4
Pro returned 11 new rejections**, on 11 distinct items. `frontier-17-judge.jsonl`
now carries 1,345 rows, 161 of them rejections; the 150 round-0 rejections were
already adjudicated, and these 11 were the whole of `unadjudicated_rows` on the
closure receipt.

**All 11 are DeepSeek-only, and every one lands on text an Opus verdict has just
passed.** Under the 2026-08-23 lineup that is the one configuration where lane
agreement carries no information: Opus shares the Anthropic family with the
authors, with the round-0 repairs, and with me. So none of these 11 was
discounted for being a single lane's finding — a DeepSeek-only rejection is the
only reading in this run that no other lane could have produced. Four are fatal.

| outcome | rows | items |
|---|---:|---:|
| `confirmed_fatal` | 4 | 4 |
| `confirmed_nonfatal` | 7 | 7 |
| `false_positive` | 0 | 0 |

No verdict was a capacity refusal; none of the 369 nulls in the ledger belongs to
this sweep, and none was adjudicated. Adjudication rows now total **161**, one per
rejection row.

## R1.2 The four confirmed-fatal findings and their repairs

**`ex-s-three-galois-correspondence-for-x-cubed-minus-two`** — `logic`, statement.
The Example fixed $a$ only by $a^3=2$, which admits the two nonreal cube roots,
and step 1.1 then asserts "This field is real" and derives $[L:\mathbb Q]=6$ from
that. For either nonreal choice the assertion is simply false, so this is a false
claim in a proof step rather than a gap between two of them, and the thirty-second
rule does not reach it. **Repair (3), the Statement:** $a$ is now the real cube
root of $2$, which is what Conrad's Examples 4.6 and 5.8 and Milne's Chapter 3
take it to be. Nothing else moved — I re-derived the whole fixed-field table
under the pinned $a$ and every row still holds, including $srs=r^{-1}$ and the
assignments of $\langle rs\rangle$ and $\langle r^2s\rangle$ to
$\mathbb Q(\omega^2a)$ and $\mathbb Q(\omega a)$.

**`thm-finite-galois-extension-characterizations`** — `dependency_citation`,
facts-block. Step 2.1 applies Artin's theorem [L1] to $G=\operatorname{Aut}(K/F)$
under condition 4 alone. [L1] requires a **finite** group of automorphisms, and
condition 4 — $K^G=F$ — supplies no finiteness; the step then appeals to an
uncited "separable-degree bound" for the passage to separability. The library has
the theorem that closes both, `thm-relative-automorphism-group-and-separable-degree-bound`
($\operatorname{Aut}(K/F)$ is a group and $|\operatorname{Aut}(K/F)|\le[K:F]_s\le[K:F]$
for finite $K/F$, in particular finite), and it was in neither `deps` nor the
Facts block. This is not the citation-quirk shape: the hypothesis of the applied
theorem was neither satisfied by anything written nor verified, and the bound is
a real theorem carrying a choice cost through the embedding-extension theorem,
not a thirty-second move. **Repair (1):** declared it and `def-separable-degree`,
stated the bound as [L4], anchored step 1.2's embedding count in the Given, and
rewrote step 2.1 to get $|G|=[K:F]$ from [L4]+[L1] and then
$[K:F]=|G|\le[K:F]_s\le[K:F]$, hence $[K:F]_s=[K:F]$. The bound sits earlier on
`the-galois-correspondence` than this theorem, so the new edge is backward and
`fwdcheck` is unaffected.

**`lem-maximal-divisor-pivot-for-pid-submodules`** — `logic`, proof-step.
Step 4.1 asserted that "finite Bezout row operations extend $e_1$ to a basis"
under the bare tag `[step 3.1, algebra]`. That is the unimodular-extension
theorem over a PID, and no fact or dependency supplied it. It is **load-bearing
outside this item**: `thm-simultaneous-basis-theorem-for-pid-submodules` step 1.3
applies its induction hypothesis to $M_1=\ker\psi$ precisely because "$\ker\psi$
is free of rank $n-1$", and that freeness cannot be borrowed from
`cor-submodules-of-finite-free-pid-modules-are-free`, which is downstream of the
simultaneous-basis theorem and so of this lemma — the shortcut is circular.
**Repairs (1) and (4):** step 4.1 now carries the argument. The coordinate ideal
of $e_1$ is basis-independent, being $\{\varphi(e_1):\varphi\in M^*\}$, and
$\psi(e_1)=1$ makes it $R$; a determinant-one Bézout change of basis on each pair
$(f_1,f_j)$ sends the coordinate pair to $(d,0)$, and running $j=2,\ldots,n$
leaves $e_1=cg_1$ with $c$ a unit. A new step 5.1 then exhibits
$u_j=g_j-\psi(g_j)e_1$ as a basis of $\ker\psi$, giving both direct sums and the
rank, and handles $n=1$ and the unit-$a$ endpoint. The Statement now says what
the proof delivers: $e_1$ belongs to a basis of $M$ and $\ker\psi$ is free of
rank one less. Repairing the Statement staled the `[L1]` quote in
`thm-simultaneous-basis-theorem-for-pid-submodules`'s contract entry, which
`proof-contract --strict` caught; that quote was refreshed and its item was not
touched.

**`ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic`**
— `dependency_citation`, proof-step. This one was **introduced by round 0's own
repair**, and it is worth stating plainly. Round 0 answered a citation gap by
adding [L5], the comparison-functor theorem, which gives $K(d)=(Ud,U\varepsilon_d)$.
Step 2.1 then reads off $K(X)=(T(X),\mu_X)$ — but that needs $U_T\varepsilon_X=\mu_X$
for the *Kleisli* adjunction, which the item never sets up, and the example's own
subject, "the Kleisli right adjoint", rested on an undeclared theorem. The
library has both: `thm-the-kleisli-adjunction-induces-the-given-monad` and
`thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras`,
the second of which states the object formula verbatim. **Repair (1):** declared
both, stated them as [L6] and [L7], and cited them at 2.1, 3.1 and 4.1 — [L7]
also supplies the free-algebra strict image that step 4.1 uses to refute strict
monadicity. Both live on `monads-comonads-and-their-algebras`, upstream of the
examples page.

## R1.3 The seven nonfatal closures, and why each is nonfatal

Every one is real as an observation; none changes what its item concludes. Under
R1 each closes its ledger row with **no content, page, frontmatter, contract,
impact or judge mutation**.

**`ex-maximal-subgroups-as-frattini-hyperplanes`** — [L2] drops the "finite
$p$-group" hypothesis of the cited corollary. The item applies it only to
$D=\operatorname{Dih}(C_4)$ of order eight, which the Given supplies and which is
a finite 2-group. A hypothesis dropped from a quotation that the item's own
setting plainly supplies.

**`ex-closed-cylinder-as-a-finitely-patched-oriented-surface`** — no step verifies
that the side and cap parametrizations are regular patches before [L3] is applied
to them. They are: step 1.1 computes the cross products, of norms $R$ and $\rho$,
nonzero on each region's interior, and interior injectivity is the standard check
on $(0,2\pi)\times(0,H)$ and on the punctured slit disc $(0,R)\times(0,2\pi)$.
Satisfied by the item's own setting; I checked it rather than assuming it, and
the area $2\pi RH+2\pi R^2$ and flux $2\pi R^2H$ both recompute.

**`def-finitely-patched-regular-surface-and-integrals`** — "regular surface
patches" is used without citing `def-admissible-regular-parametrized-surface-patch`.
The notion is fixed one hop away through a *declared* dependency:
`def-surface-area-and-scalar-surface-integral-of-a-patch` is in `deps` and opens
"Let $(D,\varphi)$ be a regular surface patch" with that link. No clause is
ambiguous, and a definition concludes nothing.

**`thm-lagrange-multipliers-for-regular-level-set-constraints`** — [L2] cites a
definition of the *unconstrained* local extremum for the constrained notion in
the Statement. The unpacking [L2] does quote is the one step 1.1 uses; the
remaining move is continuity of a $C^1$ curve into $G^{-1}(c)$ through $a$, which
puts $\gamma(t)$ in the constraining neighbourhood for small $|t|$. Thirty-second.

**`thm-real-gamma-endpoint-behaviour-and-unique-minimum`** — step 2.1 gets $s_0$
from the sign change by the intermediate value theorem, uncited, and reads
continuity of $g'$ off [F3], which gives smoothness of $\Gamma$ rather than of
$(\log\Gamma)'$. The Given supplies $\Gamma$ positive and smooth, so $g=\log\Gamma$
is smooth by composition; the IVT step is standard. I re-derived the rest of the
proof — $g(1)=g(2)=0$, the two mean-value points, strict increase of $g'$, and
$b_{n+1}/b_n=n(n+1)/(n+2)>2$ for $n\ge3$ in step 3.1 — and found nothing else.

**`thm-becks-strict-monadicity-theorem`** — steps 1.1 and 2.1 use $U^TK=U$ and
$K(\varepsilon_d)=\varepsilon^T_{Kd}$ without `thm-the-comparison-functor-exists-and-is-unique`
in `deps` or the Facts block. Those identities are the *defining* equations of the
object the Given names, and the item's own [L1], `def-monadic-and-strictly-monadic-functor`,
introduces $K$ as "the comparison functor of
[[thm-the-comparison-functor-exists-and-is-unique]]" — so the theorem is one
declared hop away and $U^TK(d)=U^T(Ud,U\varepsilon_d)=Ud$ is immediate. This is
the distinction that separates it from the Kleisli item, which was fatal: there
the needed formula was *not* definitional but a separate theorem's content.

**`thm-monoids-and-rings-are-monadic-over-sets`** — [L5] attributes to the
free-monoid adjunction theorem the bijection $\varphi\mapsto U(\varphi)i_X$,
which its `## Statement` does not spell out. The cited item does establish it: its
[L1] is the universal property of $i_X$, its step 1.2 says restriction to letters
and extension are mutually inverse, and its step 3.1 concludes $(X^*,i_X)$ is a
universal arrow, of which that bijection is the transposition. The Fact reaches
past the Statement line into the source's proof, which is why this is recorded
rather than dismissed — but it states nothing the source does not give. While
here I re-derived step 2.3's algebra-to-monoid construction from
$a\eta_A=1_A$ and $aT(a)=a\mu_A$, including associativity from $[[x,y],[z]]$
against $[[x],[y,z]]$ and the unit from $[[\,],[x]]$; it is sound.

## R1.4 What must rejudge

Exactly the four repaired ids:

- `ex-s-three-galois-correspondence-for-x-cubed-minus-two`
- `thm-finite-galois-extension-characterizations`
- `lem-maximal-divisor-pivot-for-pid-submodules`
- `ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic`

The regenerated closure receipt names those four in `needs_rejudge` and nothing
else — no unedited page-mate is swept in, though several share a context hash
with a repaired item. I did not run the rejudge; the engine's `8-rejudge` stage
reads `research/frontier-17-judge-closure.json`. No `verification.judge` block
was deleted, because none of the four carries one; the stamps are written at
`10-stamps-v2`.

Contracts were updated in the **owning batch files** —
`research/frontier-17-batch-3.proof-contracts.json` (three items, plus the two
consumer quotes refreshed) and `research/frontier-17-batch-9.proof-contracts.json`
(one item) — and the merged file was rebuilt from them afterwards.

## R1.5 Gates

| gate | result |
|---|---|
| `precheck` on the 4 changed items | PASS, 4/4 |
| `step8-guard --baseline pre-step8` | **OK** — 48 changed, 0 created, 0 deleted; 48/48 licensed |
| `depcheck` | OK — no cycles, all references resolve, no draft items on published pages; no new warning on any of the 4 |
| `citecheck` | no finding on any of the 4 |
| `fwdcheck` / `extcheck` | OK |
| `merge-proof-contracts` + `proof-contract --strict` | 0 errors over 381 items, after refreshing the 2 consumer quotes my edits staled (1 pre-existing shotgun-bracket warning on `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`, unlicensed to touch) |
| `citation-fidelity` | 1,354 citations, no quote-not-found, no widening candidate |
| `boundary-audit --fail-on-template` | 3,048 rows, no template reuse, no contradicted disposition |
| `defect-ledger check` | 331 rows for the run, 0 errors |
| `level-coverage --judge-only --verify-current-context` | `unadjudicated: 0`, `open_fatal: 0`, `needs_rejudge: 4` |

`content-policy --manifest-only` is **not** a step-8 gate and was not counted as
one: it reports `batch-item-already-exists` once per authored item on every
batch, touched or not (batch 2: 10 scoped, 10 errors), because it checks a
pre-authoring manifest. Nothing there is a finding about this round.

## R1.6 Honest remaining gaps

1. **Nothing is open.** `open_fatal` is empty, no confirmed fatal defect was left
   unrepaired, and the ledger carries no `open` row for this run.
2. **The four repairs are unjudged**, and two of them carry new mathematics
   rather than a restored citation: `lem-maximal-divisor-pivot-for-pid-submodules`
   gained a written-out Bézout basis extension, a whole new step, and two clauses
   in its Statement, and `thm-finite-galois-extension-characterizations` gained a
   rewritten step 2.1. Those two are where the round-2 rejudge is doing real work.
3. **Round 0's own repair produced one of round 1's fatal defects.** The Kleisli
   example's [L5] was added at step 8 and did not supply what step 2.1 read off
   it. That is recorded in the ledger as `introduced_at_stage: 8-adjudicate`, and
   it is the honest reading of what a repair round costs: a citation added under
   a frozen verdict gets no reader before the next sweep.
4. **The convergence question is now askable, not answered.** Round 0 repaired 48
   items and the rejudge of those 48 produced 11 rejections and 4 fatals — a
   lower yield, on a smaller and harder-worked set, but a second round of real
   fatal defects all the same. Whether round 2 empties is a fact about the next
   sweep, not something this report can assert.
5. **The Opus lane remains unproven at this prompt.** No injection test has been
   run against it, and it passed all 48 rejudged items. That is consistent with
   the repairs being good and consistent with a lane that is not screening hard;
   this round gives no evidence either way, which is exactly why the four fatal
   findings were read on their merits and not on their lane's rate.


---

# Round 3 — adjudication of the second `8-rejudge` sweep

Run: `frontier-17` · role: lead Alpha · label: `adjudicate-rejudge-round-3` · covers: all
Baseline: `pre-step8`, **re-snapped at 2026-08-23T07:32:30Z** as the dispatch
directs. Round 1 deliberately kept round 0's snapshot; this round's task file
opens with the `touchlog snap` command, so the window the guard now checks is
"everything changed since round 1 closed". Round 0's 48 and round 1's 4 repairs
were licensed and verified under the earlier snapshots and those results stand in
§8 and §R1.5 above; nothing in this round re-opens them.

Everything above this line is rounds 0 and 1 and is unchanged.

## R3.1 What round 3 put on the table

The engine's second `8-rejudge` sweep took the four items round 1 repaired and
sent them to both lanes — 8 rows, `frontier-17-judge.jsonl` now 1,353. **The Opus
lane passed all four. DeepSeek passed three and rejected one**, so the whole of
this round is a single rejection:

| id | model | context | outcome |
|---|---|---|---|
| `ex-s-three-galois-correspondence-for-x-cubed-minus-two` | `deepseek-v4-pro` | `97e8ca83…` | **`confirmed_fatal`** (`dependency_citation`) |

No capacity refusal was in the sweep; none of the ledger's 369 nulls belongs to
it and none was adjudicated. Adjudication rows now total **162**, one per
rejection row in the ledger. `unadjudicated` on the closure receipt is empty.

DeepSeek's verdict, verbatim: *"Step 1.1 computes the degree of Q(a,omega) as 6
by multiplying the degree of Q(a) by 2, which uses the tower law for finite field
extensions, but that law is not cited in the facts or dependencies and the cited
degree formulas do not yield the product; the step is unlicensed."*

## R3.2 The twice-touched escalation, and why it fired here

This is the **third** fatal defect on this one item — `f17-step8-015` at round 0,
`f17-step8-r1-f001` at round 1, and now `f17-step8-r3-f001` — and the third
consecutive DeepSeek rejection of the same two steps. `WORKFLOW.md`
§"Twice-touched proofs" trigger 2 fires on exactly this shape: *refuted again
after step 6 — the lead Alpha audits the proof personally, not a subagent and not
another repair cycle.* That is what this round is, and the rule asks for two
things in writing.

**The nature of the problem: an incorrectly licensed step, not a false claim.**
I recomputed the whole example from disk before touching it. The mathematics is
right at every point: `x^3-2` is Eisenstein at 2; `a` real puts `Q(a)` inside
`R` while `omega, omega^2` are nonreal, so `x^2+x+1` survives irreducible over
`Q(a)` and `[L:Q(a)]=2`; `[L:Q]=6`; `L` is generated by the three cube roots
because `omega=(omega·a)a^{-1}`; the relations `r^3=s^2=1` and `srs=r^{-1}` hold;
the fixed-field table is correct row by row under right-to-left composition
(`rs` fixes `omega^2 a`, `r^2s` fixes `omega a`); and the four degrees `3,3,3,2`
match the subgroup indices `3,3,3,2`. What was wrong is that step 1.1 reached
`[L:Q]=6` through the tower law while the tower law appeared in neither `deps`
nor the Facts block, so the step's only licences were the Given and a bare
`algebra` tag — and the Given's other clause, *the degree formulas in
`thm-fundamental-theorem-of-finite-galois-theory`*, cannot license it, because
that theorem presupposes `L/Q` Galois, which step 2.1 derives **from** step 1.1's
degree. A landmark theorem was carrying a step under the label `algebra`.

**Why fatal rather than thirty-second.** The 30-second threshold is about gaps
*between proof steps*, and `3 × 2 = 6` is certainly closed in thirty seconds. The
line this run has drawn twice already is different and I applied it unchanged:
round 0 closed 61 findings as nonfatal where **the dependency was declared and
the step merely failed to lift it** (`cex-compact-solid-without-jordan-volume` is
the model), and confirmed 19 as fatal `citation-missing` where **a load-bearing
result was absent from `deps` altogether** (`cor-every-nonfrattini-element-…`,
`def-topology-induced-by-an-ultrafilter-algebra`, and so on). The tower law was
absent from `deps`. This finding is the second category, and calling it the first
would have been a new standard invented for the item that had already cost two
repairs.

Two further facts settled it. The gap is load-bearing **twice**: `[L2]`'s
finite-extension hypothesis at step 2.1 is supplied by exactly this degree, so an
unlicensed 1.1 leaves 2.1's appeal to the Galois characterisation unlicensed too.
And the page-mate `ex-biquadratic-galois-correspondence-lattice` — same B page,
same author, same move — **already declares
`thm-tower-law-for-finite-field-extensions` and names it in its Given**. So the
omission was an inconsistency inside one B page, not a page convention I would
have been overriding.

**The ramification of dropping the item**, which the escalation requires me to
state even though I did not drop it: two items cite it —
`fs-every-galois-subgroup-corresponds-to-a-normal-subextension`, whose `[L1]` is
the sentence about the three non-normal cubic fields, and
`ex-cubic-x-cubed-minus-two-has-galois-group-s-three`, which uses "the explicit
splitting-field generators" as its Given. Both would lose their concrete witness,
and the page would lose the only worked `S_3` correspondence backing its
`A_3`-versus-order-two normality discussion. Withdrawal was never the right
disposition here: the statement is true, source-backed (Conrad 4.6, Milne ch. 3)
and standard, and the defect was in what the proof was permitted to use.

## R3.3 The repair

Licensed by the `confirmed_fatal` row against pre-edit
`item_sha256 bb406678…`. Because the item had already cost two return visits, I
closed **the whole licensing chain of the degree computation in one pass** rather
than only the clause DeepSeek named — the brief's "batch your repairs per item,
not per visit", and the point of the escalation is to stop the treadmill, not to
take one more step along it.

- **`deps` gained three published items**, each used: 
  `thm-evaluation-kernel-and-minimal-polynomial`,
  `thm-simple-algebraic-extension-quotient-power-basis-and-degree`,
  `thm-tower-law-for-finite-field-extensions`. All three are `published`,
  `literature-derived` in statement, and on pages earlier in reading order
  (`field-extensions-and-the-complex-numbers`, order 96
  `algebraic-extensions-degree-and-finite-fields`) than this one at order 100.
- **`[L3]`, `[L4]`, `[L5]` state them**, each the smallest faithful shortening of
  its source Statement with domain, hypotheses and conclusion intact.
- **Step 1.1 was rewritten** to run the route explicitly: Eisenstein gives
  irreducibility, `[L3]` identifies `x^3-2` as the minimal polynomial of `a`,
  `[L4]` gives `[Q(a):Q]=3`; `a` real and `omega, omega^2` nonreal give
  irreducibility of `x^2+x+1` over `Q(a)` and `[L:Q(a)]=2` by `[L3]`/`[L4]`;
  `[L5]` gives `[L:Q]=2·3=6`; and the splitting-field claim now says why the
  three roots generate `L`.
- **Step 3.1 was licensed the same way.** Its four intermediate-field degrees
  `3,3,3,2` were asserted under `[step 2.1, given]` — the identical defect, one
  step later, which a fourth round would have found. It now names which
  irreducible polynomial each generator satisfies, draws the degrees from
  `[L3]`/`[L4]`, and spells out the containment-plus-equal-degree argument that
  turns "fixes its displayed field" into "is the full fixed field".
- **The Example now declares its composition convention** — *products of
  automorphisms read right to left*. This is not polish: under the other reading
  `rs` maps `omega^2 a` to `a`, so two rows of the published table are false, and
  the table's truth-value depended on a convention the item never stated. The
  relation `srs=r^{-1}` holds under both readings and so does not disambiguate it.

Nothing else in the item changed; the Statement's mathematical content, the
table, `provenance` and `verification` are as they were. Post-repair
`item_sha256` is `ff0e1343…`.

## R3.4 What must rejudge

Exactly one id: **`ex-s-three-galois-correspondence-for-x-cubed-minus-two`**. The
regenerated closure receipt names it in `needs_rejudge` and nothing else; its
fourteen page-mates on `the-galois-correspondence-examples` share the moved
context hash and are correctly spared, none of them having been edited. I did not
run the rejudge — the engine's `8-rejudge` stage reads
`research/frontier-17-judge-closure.json`. No `verification.judge` block was
deleted because the item carries none; stamps are written at `10-stamps-v2`.

The contract was updated in the **owning batch file**,
`research/frontier-17-batch-3.proof-contracts.json` — three new citations with
their exact source quotes and `uses` lists, refreshed `claim` and `inputs` for
steps 1.1 and 3.1 — and the merged file was rebuilt from the nine batch files
afterwards, never edited directly.

One consumer quote went stale as a side effect and was refreshed in the same
batch file: `fs-every-galois-subgroup-corresponds-to-a-normal-subextension`'s
`[L1]` quotes this item's entire Example section, so the added convention clause
broke the exact match. That is a contract record, not an item edit; the consumer
item's own text is untouched and its `[L1]` sentence is unchanged. Both consumers
are **still-licensed**: neither uses the degree computation or the two table rows
whose reading the convention clause pins down.

## R3.5 Risk tier — the item is now CRITICAL

The three added dependencies and facts lift it from its earlier tier to
**CRITICAL 11** on `risk-report.mjs`. Its `risk_review` was written by Alpha-b at
step 6 about text that no longer exists, and `--require-reviewed` would have gone
green on that stale record without noticing. I appended a dated addendum instead:
what the tier now is, that three fatal repairs have landed since, and exactly
what my personal re-audit traced. The addendum states plainly that **this is a
same-model read and therefore not corroboration** — I am Claude Opus 5, as is the
lane that passed this item three times — and that the cross-family check is the
scheduled rejudge, which returns it to DeepSeek. I did not dispatch a fresh
refuter: the `8-rejudge` stage already sends this item to both lanes, and a
same-family refuter ahead of it would have added a fourth Anthropic read, not a
check.

## R3.6 Gates

| gate | result |
|---|---|
| `precheck` on the changed item | PASS (direct), 1/1 |
| `step8-guard --baseline pre-step8` | **OK** — 6,148 items at baseline; 1 changed, 0 created, 0 deleted; 1/1 licensed by a confirmed-fatal row |
| `depcheck` | exit 0 — no cycles, all references resolve, no draft items on published pages; **no finding naming the changed item** |
| `citecheck` | exit 0; no finding naming the changed item |
| `merge-proof-contracts` + `proof-contract --strict` | 0 errors, 381/381 items, after refreshing the one consumer quote my Example edit staled (the pre-existing `shotgun-bracket` warning on `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor` is untouched — unlicensed this round) |
| `citation-fidelity --fail-on-missing-quote` | no quote-not-found; no widening candidate |
| `boundary-audit --fail-on-contradicted --fail-on-template` | 3,048 rows, no template reuse at or above 3 members, no contradicted disposition |
| `finite-smoke` | 0 errors, 3 checks over the 3 items carrying obligations |
| `risk-report --require-reviewed` | 0 errors, 381 items routed |
| `defect-ledger check --run frontier-17` | 332 rows, 0 errors |
| `level-coverage --judge-only --verify-current-context` | `unadjudicated: 0`, `open_fatal: 0`, **`needs_rejudge: 1`** — exit 1, and that red is correct |

The closure gate's exit 1 is the pending rejudge of the item I just repaired, and
it should stay red until `8-rejudge` runs. Its other output is 20-odd
`judge-verdict-adjudicated-nonfatal` warnings, all of them rounds 0 and 1
closures already on the ledger.

`content-policy --manifest-only` is not a step-8 gate and was not run as one, for
the reason recorded in §R1.5.

## R3.7 Honest remaining gaps

1. **Nothing is open.** `open_fatal` is empty, no confirmed fatal defect was left
   unrepaired, and the run's ledger carries no `open` row.
2. **The repair is unjudged.** It is a citation-and-licensing repair rather than
   new mathematics — no claim was added, narrowed or withdrawn, and the table and
   Statement content are unchanged — so it is a lighter target than round 1's
   `lem-maximal-divisor-pivot-for-pid-submodules` was. But it is the fourth pass
   over this item, and the honest position is that three of the last three
   DeepSeek reads of it found something real.
3. **This item's boundary rows are still template prose.** The seven rows in its
   contract carry generated evidence text ("This is where a vanishing element,
   scalar, degree, rank, or coefficient is handled…") that restates step 4.1 for
   five of the seven cases. `boundary-audit --fail-on-template` does not fire on
   them and my own reading found no boundary defect the example can actually
   have — it has no parameters, no empty case and no iff — but I am recording
   that these rows are not real dispositions rather than letting a green gate
   imply they are. Repairing them is contract work for a step-6 pass, and R1 does
   not license it here.
4. **The convention clause is a Statement edit made under a citation licence.**
   It is licensed — the item carries a `confirmed_fatal` row, and inside that all
   four repairs are open — and I judged it correctness rather than polish because
   two table rows are false under the other reading. A stricter reading of R1
   would have left it. I am naming it so the owner can see the call rather than
   find it in a diff.

---

# Round 4 — `tau-adjudicate-round-2` (post-Tau rejudge)

Run: `frontier-17` · role: lead Alpha · label: `tau-adjudicate-round-2` · covers: all
Stage: `10-tau-rejudge-v2`, gate-failure repair round.
Baseline: **`post-tau-v2`** (2026-08-23T14:17:29Z) — the baseline this stage's
`step8-guard` gate actually names in `tools/autopilot/stages/mathlib.mts:2082`.
**`pre-step8` was deliberately NOT re-snapped.** The dispatch prompt is the
generic `alpha-step8.task.md` template and instructs a `pre-step8` snap; taking
one now would have compared the working tree against itself and turned the
step-8 window green by construction, hiding step 9's three created items and
the Tau render repairs. The real `pre-step8` chain is left intact.

## R4.1 What was on the table

Exactly **one** unadjudicated rejection, and I recomputed that independently of
the closure receipt rather than trusting it: over the 1,373 rows now in
`research/frontier-17-judge.jsonl` there are **164 rejections**, of which 163
already carried an adjudication row keyed `(id, model, context_sha256)`. The 369
`null` rows remain Opus capacity refusals — null verdicts, not verdicts, none
adjudicated.

The open row:

| id | lane | context | item hash (judge form) |
|---|---|---|---|
| `lem-stirling-formula-up-to-a-positive-constant` | `deepseek-v4-pro` | `799380229fb3…` | `1e52620e4c62…` |

This is the **cross-family** lane — the one reading no other lane in this run
could have produced — so it got the weight its isolation earns, not a fast close.

The paired Opus row at the same context is `keep: true`, so there was nothing to
adjudicate on that lane. Its own confirmation is *same-model* agreement with the
Beta that authored the text and with me, and I did not treat it as corroboration.

**The verdict is about the current text.** `itemHashJudge` of the file on disk is
`1e52620e4c6263bf45871bce82ba7c214da446376d12abbddc12d89b9448ac9b`, byte-equal to
the `item_sha256` on DeepSeek's row. The rejudge was triggered because Tau's
S-003 repair (the aliased wikilink in [F1]) moved the item hash from `085d3f61…`;
the mathematics was untouched by that repair.

## R4.2 The verdict, and what it actually alleges

> Step 3.1 cites F3, which only says log'(x)=1/x, for the primitive t log t - t;
> F3 does not provide that primitive. Step 4.1 exponentiates the limit using
> continuity of exp, but no cited fact establishes continuity.

Two distinct allegations. The second is a re-raise: the identical exp-continuity
finding was adjudicated `confirmed_nonfatal` at the previous context
(`24dfe5d2…`, adjudication row 67). The first is **new** — the earlier DeepSeek
read did not mention step 3.1 — so it was adjudicated on its merits, not closed
by reference to the earlier disposition.

**Both allegations are factually correct.** I am not calling this a
`false_positive`. [F3] states exactly `for x>0, log'(x)=1/x` and nothing more, so
it does not by itself hand you the primitive `t log t - t`; and neither
[F1]–[F3] nor the `deps` list contains any statement of the continuity of `exp`.
The dependency the author evidently reached for, `thm-exponential-limits-and-range`,
gives the limits at ±∞ and the range — it genuinely does **not** cover continuity,
exactly as DeepSeek says. DeepSeek read the dependency before alleging it was too
weak, which is the standard the brief asks of a refuter.

## R4.3 Why it is nonfatal, and not by deference to the earlier round

The question R1 asks is not whether the citation is loose but whether the
mathematics is wrong or rests on something the library has not established. I
checked both ends.

**The missing facts are established, published library content — this is a
citation gap, not a hole.**

- `items/thm-ftc-second-part.md` is the evaluation form and is stated without a
  continuity hypothesis on the integrand: *"let G be differentiable at every
  point of [a,b], let f := G', and suppose f is integrable on [a,b]. Then
  ∫ₐᵇ f = G(b) − G(a)."* With `F3` and the product rule,
  `(t log t − t)' = log t + t·(1/t) − 1 = log t`, and `log` is continuous hence
  integrable on `[1/2, n+1/2] ⊂ (0,∞)`. Both hypotheses hold.
- `items/thm-derivative-of-exponential.md` states *"The real exponential function
  is C^∞ … In particular (exp)' = exp"* — differentiable, hence continuous, which
  is what step 4.1 needs to pass `a_n → c` to `e^{a_n} → e^c`.

So no step rests on a result the library has not established, and the
self-contained-scope rule is not breached. What is missing is that neither result
is named at the step that uses it.

**Each gap is well inside the 30-second threshold**, and both are gaps *between
proof steps*, not defects in the Statement — the case the threshold explicitly
does not cover. Differentiating `t log t − t` is one product-rule line;
"exp is continuous, so exponentiate the limit" is a single standard move.

**The mathematics is sound. I verified it rather than assuming it.** Working from
the item's own definitions:

- Step 1.1's bound. With `t = r+u`, `e_r = −∫_{−1/2}^{1/2} log(1+u/r) du`. For
  `r ≥ 1` the argument satisfies `|u/r| ≤ 1/2`, so [F1]'s series converges
  uniformly there (Weierstrass, `M_j = 2^{−j}/j`) and integrates termwise; odd
  powers vanish on the symmetric interval, and the even ones leave the closed form
  `e_r = Σ_{m≥1} 1/(2m(2m+1)(2r)^{2m})`, which is `≤ K/r²` for an absolute `K`
  since `r ≥ 1`. Checked numerically: that closed form reproduces the direct
  computation of `log r − ∫_{r−1/2}^{r+1/2} log t dt` to machine precision
  (residual `< 5e−16` at `r = 1, 2, 5, 10`), and `e_r·r²` is bounded, decreasing
  to `1/24 ≈ 0.0416667`. The step's claim of odd-power cancellation and an
  absolutely convergent even remainder is exactly right.
- Step 3.1's limit. The telescoping and the `n+1/2` versus `n` comparison give
  `log(n!) − ((n+1/2) log n − n) → c` with `c` real. Checked numerically: the
  sequence runs `0.927269 (n=10) → 0.919772 → 0.919022 → 0.918947 → 0.918939
  (n=10⁵)`, converging to `log√(2π) = 0.9189385332…`.
- Step 4.1's algebra. `exp((n+1/2) log n − n) = n^{n+1/2} e^{−n} = √n (n/e)^n`, so
  `C = e^c = √(2π) > 0` and `n! ∼ C√n(n/e)^n` is exactly what the Statement
  claims. The Statement asserts no more than the proof delivers.

DeepSeek found no false claim, no unlicensed inference, no missing hypothesis and
no scope or quantifier error. Its two observations are true and are about which
result is *named*, not about whether the argument holds.

**Disposition: `confirmed_nonfatal`. No edit made.** Under R1 a nonfatal closes
the rejection and changes nothing — no content, page, frontmatter, contract,
impact or judge mutation. Adding `[F4] thm-ftc-second-part` and
`[F5] thm-derivative-of-exponential` with their citations is real improvement and
I would have made it at step 6; making it here would void `verification.judge`,
force another rejudge of a fourth-pass item, and resample a refuter. That is the
loop R1 exists to stop.

Row appended to `research/frontier-17-judge-adjudications.jsonl`:

```
{"id":"lem-stirling-formula-up-to-a-positive-constant","model":"deepseek-v4-pro",
 "context_sha256":"799380229fb37d372eb19d275fc6c4357ebf86be19ed4459358dadb615701354",
 "item_sha256":"e9176abb2f4a992c6801aed147b471876270410e893ff1e8f350f1b34c7f9cb4",
 "outcome":"confirmed_nonfatal"}
```

`item_sha256` is the **guard** form (`itemHashGuard`, whole `verification:` block
excluded), which is the form `step8-guard` matches against a touchlog baseline —
not the judge-ledger form, which would read as an unlicensed edit.

No defect-ledger row: the ledger gate demands one row per `confirmed_fatal`, and
this round produced none. `defect-ledger check` passes at 333 rows, 0 errors.

## R4.4 Items changed, and the rejudge set

**None, and none.** No item was created, edited or deleted this round.
`step8-guard` against `post-tau-v2` reports `0 changed, 0 created, 0 deleted` over
6,151 items. **The rejudge target set is empty** — correctly, because nothing was
touched, not because nothing was checked.

## R4.5 Gate results — every stage gate, run and read

| gate | result |
|---|---|
| `step8-guard` (baseline `post-tau-v2`) | **OK** — 0 changed / 0 created / 0 deleted; every step-8 edit licensed |
| `judge-closure` (`level-coverage --judge-only --verify-current-context`) | **`closed: true`** — scope 443, pairs_complete 443, `unadjudicated: []`, `open_fatal: []`, `needs_rejudge: []`, both allowances `false` |
| `defect-ledger check` | OK — 333 rows, 0 errors |
| `precheck` | OK — 4,924 checked, 0 failing |
| `depcheck` · `fwdcheck` · `extcheck` · `rendercheck` | OK (rendercheck 6,517 files) |
| `prosecheck` · `depsource` | OK — 0 unresolved deps |
| `merge-contracts` | OK — 384 items from 9 batch contracts |
| `proof-contract --strict` | OK — 384/384, 0 errors, 1 pre-existing shotgun-bracket warning |
| `finite-smoke` · `boundary-audit --fail-on-contradicted --fail-on-template` | OK — no contradicted or template dispositions found |
| `risk-report --require-reviewed` | OK — 0 errors, 384 routed |
| `citation-fidelity --fail-on-missing-quote` | OK |
| `gate-liveness --min-checks 1` | OK — proof-contract 384, coverage-checklist 710, precheck 4,924 all live |

The closure receipt closed with **no allowance flags set**: `unadjudicated` and
`pending_rejudge` are both `false`, so it is closed on the merits.

## R4.6 Honest remaining gaps

1. **Nothing is open.** `open_fatal: []`, `unadjudicated: []`, `needs_rejudge: []`.
   No confirmed fatal defect is unrepaired and the ledger carries no `open` row.
2. **`lem-stirling-formula-up-to-a-positive-constant` would be a better item with
   two more Facts.** [F3] does not state the primitive it is credited with in step
   3.1, and no fact names the continuity of `exp` that step 4.1 uses. Both results
   are published (`thm-ftc-second-part`, `thm-derivative-of-exponential`) and both
   belong in `deps` and in the Facts block. R1 forbids the edit here and I did not
   make it. Recorded so it is a known deferral, not an oversight.
3. **`thm-exponential-limits-and-range` is a dead `deps` edge on that item**, and
   `thm-linearity-of-the-integral` and `thm-algebra-of-limits` are declared but
   carry no `[F#]`. The first is the more interesting one: it is the dependency
   the author reached for to license step 4.1 and it does not do that job. Same
   R1 position — named, not edited.
4. **The DeepSeek lane has now found something real on this item on two
   consecutive reads**, both citation-level and neither fatal. That is a signal
   about the item's Facts block, and it is the reason item 2 above is written as a
   deferral with named replacements rather than as a closed matter.
