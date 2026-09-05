# Frontier-30 Step-8 adjudication — group a

## Summary

All 50 exact rejection tuples for batches 1, 16, and 17 were adjudicated: 27
`confirmed_fatal`, 17 `confirmed_nonfatal`, and 6 `false_positive`. Only the 27
confirmed-fatal items were edited. Every repaired item has an exact corrected
`frontier-30-A8-a-hash-*` defect-ledger owner and is a rejudge target.

All eight owned pages, all 129 owned items, and the 28 published dependencies
recorded in the Step-7 digest were opened. There were no incoming alerts,
outgoing cross-group findings, or published-item repairs.

## Sources consulted

- J. Miquel Martínez, [*Modular Representation Theory of Finite
  Groups*](https://www.uv.es/jomimar8/pdfs/course%20notes.pdf), Proposition 1.5,
  Theorem 1.9, and Sections 1.3–1.4: irreducible Brauer characters are linearly
  independent and form a basis on the regular classes; decomposition numbers
  are nonnegative integral multiplicities; the Cartan relation is
  $C=D^{\mathsf T}D$; and projective indecomposable characters have the stated
  decomposition coefficients. These statements support the Brauer-basis,
  decomposition-map, reciprocity-coefficient, and Cartan adjudications.
- Peter Webb, [*A Course in Finite Group Representation
  Theory*](https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf),
  Sections 7.3 and 9.4: projective modules are represented by idempotents and
  idempotents lift over a complete discrete valuation ring. This is the exact
  lifting input used to construct the projective $\mathcal OG$-lattice in the
  repaired reciprocity proof.
- Clara Löh, [*Group Cohomology, SS
  2019*](https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf),
  Theorem 1.5.10 and its factor-set construction: $H^2(Q;A)$ is naturally in
  bijection with extensions inducing the prescribed abelian action, and the
  group law on a chosen section is
  $(a,q)(a',q')=(a+q\cdot a'+F(q,q'),qq')$. This supports the normalized
  twisted-product repair and the exact pullback/pushout interpretation retained
  in the five-term item.
- Pavel Etingof, [*Lie Groups and Lie Algebras
  I*](https://math.mit.edu/~etingof/lnlg.pdf), Theorem 11.2, Proposition 17.4,
  Lemmas 17.8–17.9, Corollary 17.11, Theorem 17.12, Lemma 18.5,
  Proposition 18.6, and Theorem 18.10: ordered PBW monomials form a basis;
  opposite root spaces pair nondegenerately; normalized root vectors form
  $\mathfrak{sl}_2$ triples; root spaces are one-dimensional; root strings give
  integrality and reflections; regular loci are open and dense; and Cartan
  subalgebras are conjugate. These are the exact claims used in the PBW,
  root-system, Casimir, regular-semisimple, and Cartan repairs.
- Pavel Etingof, [*Representations of Lie
  Groups*](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf),
  Theorem 10.1, Theorem 13.5, and Section 14.1: Chevalley restriction is a
  graded algebra isomorphism, equivariant symmetrization gives
  $\operatorname{gr}Z(U(\mathfrak g))=S(\mathfrak g)^{\mathfrak g}$,
  $U(\mathfrak g)$ is free over its center, and the Harish–Chandra map is a
  filtered algebra isomorphism whose associated graded map is restriction.
  These statements support the Chevalley, center, and Harish–Chandra repairs.
- Tammo tom Dieck, [*Representation
  Theory*](https://www.uni-math.gwdg.de/tammo/d01.pdf), Theorems 4.5.2–4.5.3:
  Artin induction expresses the controlled multiple through cyclic
  restrictions, and cyclic-subgroup fixed dimensions determine rational
  representations. This confirms that the fixed-point-detection rejection is
  a false positive and that the cyclic-group example needed only its $n=1$
  specialization narrowed.

## Exact adjudications

| item | outcome | basis and disposition |
|---|---|---|
| `cex-unshifted-weyl-orbits-do-not-classify-central-characters` | `confirmed_fatal` | Step 3 reversed the refinement: ordinary orbits are finer and separate two weights with one central character. Corrected. Defect `frontier-30-A8-a-hash-001`; rejudge. |
| `cor-cyclic-fixed-points-detect-rational-representations` | `false_positive` | The Artin theorem's construction uses $\operatorname{Res}_C^Gx\in R_{\mathbb Q}(C)$, exactly the class handled in step 5; it is also an element of $R(C)$. No edit. |
| `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators` | `confirmed_fatal` | The center is filtered, not graded, so “homogeneous central generators” was ill typed. Replaced this with algebraically independent generators having definite PBW filtration degrees. Defect `frontier-30-A8-a-hash-002`; rejudge. |
| `def-central-character-of-a-lie-algebra-module` | `confirmed_fatal` | The complex Lie algebra and complex module hypotheses were absent. Added them and typed the induced action in $\operatorname{End}_{\mathbb C}(M)$. Defect `frontier-30-A8-a-hash-003`; rejudge. |
| `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups` | `confirmed_fatal` | Lattice independence was an undeclared later obligation. Added the independence theorem through `justified_by` and cited it in the definition. Defect `frontier-30-A8-a-hash-004`; rejudge. |
| `def-decomposition-numbers-and-decomposition-matrix` | `confirmed_fatal` | A complex basis does not supply integer coefficients. The definition now obtains integral coefficients from the simple-class basis of $R_k(G)$ and derives the character identity by additivity. Defect `frontier-30-A8-a-hash-005`; rejudge. |
| `def-projective-indecomposable-characters-and-cartan-invariants` | `confirmed_fatal` | “Lifting” a projective module was undefined. The definition now specifies a projective $\mathcal OG$-lattice lift and routes existence and character independence through the repaired reciprocity theorem. Defect `frontier-30-A8-a-hash-006`; rejudge. |
| `def-twisted-product-extension-from-a-two-cocycle` | `confirmed_fatal` | The titled construction assumed only a normalized function. It now requires $f\in Z^2(G,M)$, so associativity, identity, and the group notation are justified. Defect `frontier-30-A8-a-hash-007`; rejudge. |
| `ex-a-block-with-one-ordinary-and-one-brauer-character` | `confirmed_nonfatal` | The displayed block-ordered matrix already proves the one-by-one sector. The p-group citation is only an ancillary contrast and its omitted ordinary-character sentence is locally closable. No edit. |
| `ex-artin-induction-for-a-cyclic-group` | `confirmed_fatal` | The $n=1$ display incorrectly specialized arbitrary $x$ to $1_{C_1}$. It is now explicitly the trivial-character instance. Defect `frontier-30-A8-a-hash-008`; rejudge. |
| `ex-baer-sum-of-two-factor-sets` | `confirmed_nonfatal` | For a normalized cochain on $C_2$ with trivial $C_2$-action, $(\delta u)(t,t)=2u(t)=0$ in $C_2$, so the displayed $f$ is not a coboundary. This is an immediate omitted check; no edit. |
| `ex-decomposition-matrix-of-s-three-in-characteristic-two` | `confirmed_nonfatal` | The natural two-dimensional $\mathbb F_2S_3\cong\mathbb F_2\operatorname{GL}_2(\mathbb F_2)$ module is simple, and a $3$-cycle has lifted eigenvalue sum $-1$. The finite computation closes step 2.1 immediately; no edit. |
| `ex-sl2-casimir-and-its-highest-weight-eigenvalue` | `false_positive` | “Highest vector” already includes annihilation by $e$, and the cyclic submodule generated by that vector meets the cited proposition's hypothesis. The displayed claim is about $Cv_\lambda$ and is licensed. No edit. |
| `ex-sl3-harish-chandra-center-generators` | `confirmed_nonfatal` | The preceding corollary's proof invokes the Harish–Chandra isomorphism, and adding that direct theorem citation would close the stated preimage step without changing the calculation. No edit. |
| `ex-the-cp-squared-extension-as-a-nonzero-two-cocycle` | `confirmed_nonfatal` | The classification construction sends the zero cocycle to the split semidirect product, so “coboundary implies split” is an immediate specialization. No edit. |
| `fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character` | `confirmed_nonfatal` | Every nonzero finite-dimensional block has a simple module; with one Brauer simple, the p-group has one block, and its $p$ ordinary characters lie there. This is an immediate finite-algebra bridge. No edit. |
| `fs-every-function-g-times-g-to-m-is-a-factor-set` | `confirmed_nonfatal` | The constant witness fails normalization outright. The only defect is that [F1] compresses the later factor-set terminology into the cocycle definition. No edit. |
| `fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel` | `confirmed_nonfatal` | The cited remark itself supplies the prescribed outer action and the groups $H^3(Q,Z(N))$ and $H^2(Q,Z(N))$. Step 2's shorthand is imprecise but does not affect the valid refutation. No edit. |
| `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction` | `confirmed_fatal` | The statement lacked the complex semisimple and Cartan hypotheses required by its dependency. Added them to the Statement and Given data. Defect `frontier-30-A8-a-hash-009`; rejudge. |
| `lem-associated-graded-symbol-of-a-central-element-is-invariant` | `confirmed_fatal` | The old proof falsely put $[F_1,F_m]$ in $F_{m-1}$. It now uses the induced degree-$m$ adjoint action and identifies that action with the symmetric-algebra derivation. Defect `frontier-30-A8-a-hash-010`; rejudge. |
| `lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation` | `false_positive` | Compatible residue-field identifications induce a unique transport of prime-to-$p$ Teichmüller roots by reduction and inverse lifting. The statement assumes exactly this compatibility. No edit. |
| `lem-decomposition-numbers-are-nonnegative-integers` | `false_positive` | Its dependency explicitly expands the reduced lattice in the simple-module basis of the Grothendieck group; those coefficients are precisely Jordan–Hölder multiplicities. No edit. |
| `lem-normalized-two-cocycles-and-coboundaries-form-groups` | `confirmed_nonfatal` | Substituting the coboundary formula gives normalization and $d^2\delta u=0$ by direct cancellation. The omitted computation is immediate. No edit. |
| `lem-regular-semisimple-elements-form-a-dense-open-subset` | `confirmed_fatal` | Density and openness did not follow from the Cartan hyperplane complement alone. Added the adjoint-orbit submersion, dominance, rank-dimension, and Cartan-conjugacy argument. Defect `frontier-30-A8-a-hash-011`; rejudge. |
| `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions` | `confirmed_nonfatal` | The dot-action formula is explicitly part of the Given data, and both directions are direct substitutions. Only [F1]'s attribution is compressed. No edit. |
| `lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle` | `confirmed_nonfatal` | The forward implication uses steps 1.1 and 1.2 together; omitting `step 1.1` from the final tag is a local proof-reference gap. No edit. |
| `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants` | `confirmed_fatal` | The previous character/Jacobian assertions assumed the surjectivity being proved. Replaced them with the trace-power, orbit-sum, polarization, density, and averaging proof. Defect `frontier-30-A8-a-hash-012`; rejudge. |
| `prop-casimir-eigenvalue-on-a-highest-weight-module` | `confirmed_fatal` | The displayed Casimir expansion needed one-dimensional root spaces and a full pair of dual root bases. Added the repaired root-system dependency and made that justification explicit. Defect `frontier-30-A8-a-hash-013`; rejudge. |
| `prop-centralizer-of-a-cartan-element-from-its-vanishing-roots` | `confirmed_fatal` | Without complex semisimplicity the Cartan summand need not be abelian. Added the missing hypothesis to the Statement and Given data. Defect `frontier-30-A8-a-hash-014`; rejudge. |
| `prop-decomposition-matrix-is-block-diagonal-after-block-ordering` | `confirmed_nonfatal` | If the block idempotent acts as $1$ on the ordinary module, it preserves the stable lattice and still acts as $1$ after reduction; every composition factor stays in that block. This is an immediate bridge. No edit. |
| `prop-harish-chandra-projection-is-multiplicative-on-the-center` | `confirmed_fatal` | The projection kernel is not multiplicatively closed. The new proof uses centrality to show only the required products remain in the kernel, avoiding the false $aa'$ inference. Defect `frontier-30-A8-a-hash-015`; rejudge. |
| `prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra` | `confirmed_fatal` | The Killing radical is not generally the solvable radical. Replaced that false claim with Cartan's semisimplicity criterion. Defect `frontier-30-A8-a-hash-016`; rejudge. |
| `prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra` | `confirmed_nonfatal` | Replacing “restriction to $\mathfrak g\subset U(\mathfrak g)$” by composition with the canonical map is an immediate notational closure; the universal-property construction is correct. No edit. |
| `prop-opposite-root-spaces-bracket-to-the-killing-dual-line` | `confirmed_nonfatal` | Global nondegeneracy plus orthogonality to all non-opposite summands makes the pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}$ nondegenerate. This one-line bridge supplies the chosen pair. No edit. |
| `prop-root-space-brackets-add-their-roots` | `false_positive` | The full cited root-decomposition item identifies the zero-weight eigenspace with $C_{\mathfrak g}(\mathfrak h)=\mathfrak h$. Step 2 uses exactly that interface. No edit. |
| `prop-the-quadratic-casimir-element-is-central` | `confirmed_fatal` | $\operatorname{ad}_x$ need not be invertible and does not send bases to bases. The proof now uses invariance to annihilate the canonical dual-basis tensor under the diagonal adjoint action. Defect `frontier-30-A8-a-hash-017`; rejudge. |
| `thm-baer-sum-agrees-with-addition-in-h-two` | `false_positive` | The classification proof explicitly constructs $M\times_fG$, and direct pullback followed by the addition pushout sends $(f_1,f_2)$ to $f_1+f_2$. Step 1.1 is the elementary calculation, not an inflated citation. No edit. |
| `thm-blocks-partition-ordinary-and-brauer-irreducible-characters` | `confirmed_nonfatal` | “Irreducible Brauer character” conventionally means the character of a simple module, and the cited basis proof uses exactly that correspondence. The compact interface omits the terminology sentence only. No edit. |
| `thm-brauer-reciprocity` | `confirmed_fatal` | [F3] was the theorem itself. Replaced it with an idempotent-lifting and Hom base-change proof comparing the ordinary multiplicity with the modular composition multiplicity. Defect `frontier-30-A8-a-hash-018`; rejudge. |
| `thm-cartan-matrix-is-d-transpose-d` | `confirmed_nonfatal` | Once the repaired reciprocity theorem supplies a projective lattice whose reduction is $P_\varphi$, reduction and additivity give the displayed sum immediately. The target item required no independent edit. |
| `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra` | `confirmed_fatal` | The old regularity bridge lacked $\dim\mathfrak h=\operatorname{rank}\mathfrak g$. Replaced the route with the maximal-torus correspondence and maximal-torus conjugacy in the connected adjoint group. Defect `frontier-30-A8-a-hash-019`; rejudge. |
| `thm-decomposition-map-is-independent-of-the-stable-lattice` | `confirmed_fatal` | Filtration factors of $L'/L$ do not appear in both endpoint reductions. The repaired proof compares the actual kernel and cokernel and uses $[A[\pi]]=[A/\pi A]$. Defect `frontier-30-A8-a-hash-020`; rejudge. |
| `thm-enveloping-algebra-is-free-over-its-center` | `confirmed_fatal` | Harish–Chandra alone does not identify $\operatorname{gr}Z$. The proof now uses equivariant PBW symmetrization to obtain $\operatorname{gr}Z=S(\mathfrak g)^{\mathfrak g}$ before applying Kostant harmonic decomposition. Defect `frontier-30-A8-a-hash-021`; rejudge. |
| `thm-factor-set-model-agrees-with-derived-second-group-cohomology` | `confirmed_nonfatal` | [F1]'s shorthand omits “normalized,” but steps 1.2–3.1 explicitly impose the two normalization equations and correctly normalize arbitrary representatives. No edit. |
| `thm-five-term-exact-sequence-as-extension-and-transgression-data` | `confirmed_fatal` | The old proof invented an unconstructed obstruction extension. The statement now makes only the exact kernel-image extension criterion and the explicitly checked pullback/pushout interpretation. Defect `frontier-30-A8-a-hash-022`; rejudge. |
| `thm-harish-chandra-isomorphism-for-the-center` | `confirmed_fatal` | Invariant leading symbols yield only one inclusion. Added equivariant PBW symmetrization to lift every invariant symbol centrally before identifying the graded map with Chevalley restriction. Defect `frontier-30-A8-a-hash-023`; rejudge. |
| `thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions` | `confirmed_fatal` | Linear independence was simply assumed. [F5] now states the exact cited Proposition 1.5 and its modular trace-function basis; the remaining proof supplies spanning. Defect `frontier-30-A8-a-hash-024`; rejudge. |
| `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra` | `confirmed_fatal` | [F1] assumed PBW. The replacement is a terminating ordered-word rewrite whose only overlap is resolved by Jacobi, giving unique normal forms and linear independence. Defect `frontier-30-A8-a-hash-025`; rejudge. |
| `thm-symmetric-invariants-restrict-to-weyl-invariants` | `confirmed_fatal` | The theorem omitted the complex semisimple Lie algebra, Cartan subalgebra, and corresponding Weyl group hypotheses. Added all three. Defect `frontier-30-A8-a-hash-026`; rejudge. |
| `thm-the-root-set-is-a-reduced-crystallographic-root-system` | `confirmed_fatal` | The pairing existence and all root-string conclusions were unsupported. Added the nondegenerate opposite-root pairing, $\mathfrak{sl}_2$ triple, one-dimensional root spaces, integrality, reflection, reducedness, spanning, and positive real form. Defect `frontier-30-A8-a-hash-027`; rejudge. |

## Rejudge targets

1. `cex-unshifted-weyl-orbits-do-not-classify-central-characters`
2. `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`
3. `def-central-character-of-a-lie-algebra-module`
4. `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups`
5. `def-decomposition-numbers-and-decomposition-matrix`
6. `def-projective-indecomposable-characters-and-cartan-invariants`
7. `def-twisted-product-extension-from-a-two-cocycle`
8. `ex-artin-induction-for-a-cyclic-group`
9. `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction`
10. `lem-associated-graded-symbol-of-a-central-element-is-invariant`
11. `lem-regular-semisimple-elements-form-a-dense-open-subset`
12. `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants`
13. `prop-casimir-eigenvalue-on-a-highest-weight-module`
14. `prop-centralizer-of-a-cartan-element-from-its-vanishing-roots`
15. `prop-harish-chandra-projection-is-multiplicative-on-the-center`
16. `prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra`
17. `prop-the-quadratic-casimir-element-is-central`
18. `thm-brauer-reciprocity`
19. `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`
20. `thm-decomposition-map-is-independent-of-the-stable-lattice`
21. `thm-enveloping-algebra-is-free-over-its-center`
22. `thm-five-term-exact-sequence-as-extension-and-transgression-data`
23. `thm-harish-chandra-isomorphism-for-the-center`
24. `thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions`
25. `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`
26. `thm-symmetric-invariants-restrict-to-weyl-invariants`
27. `thm-the-root-set-is-a-reduced-crystallographic-root-system`

## Append-only hash correction

The first 50 adjudication rows accidentally applied SHA-256 a second time to
the already computed guard digest. Neither shared ledger was rewritten. Fifty
corrected adjudication rows were appended using the full pre-Step-8 guard
digests frozen in `research/frontier-30-step6-closure.json`, and 27 exact
`frontier-30-A8-a-hash-*` correction rows were appended through
`tools/defect-ledger.mjs append`. The original wrong-hash adjudication and
defect rows remain append-only evidence. The Step-8 guard recognizes every
group-a repair as licensed.

## Alerts and retained observations

- Incoming alerts: none.
- Cross-group findings raised: none. No rejection exposed a defect in another
  group's item.
- Published-item repairs: none.
- The eight Step-7 concerns coincided with the fatal dispositions on the
  Brauer-basis theorem, Brauer reciprocity, five-term interpretation, PBW,
  root-system theorem, Harish–Chandra multiplicativity, Chevalley surjectivity,
  and the Harish–Chandra isomorphism.

## Checks and blockers

- Exact group-a join: 50/50 rejection tuples answered; latest exact outcomes
  are 27 fatal, 17 nonfatal, and 6 false positives, with no missing tuple.
- Group-local fatal-only audit: exactly 27 of 129 owned items changed from the
  `pre-step8` baseline; every one has a corrected confirmed-fatal row matching
  the full frozen guard digest, and no nonfatal or false-positive item changed.
- Focused precheck: all 22 repaired proof-bearing items pass; the five repaired
  definitions have no proof-format obligation.
- Focused render check: all 27 repaired files pass YAML, delimiter, wikilink,
  and KaTeX checks.
- Dependency check: exit 0, with 434 standing whole-corpus warnings.
- Defect-ledger validation and exact adjudication linkage: 497 current
  Frontier-30 rows checked, zero errors.
- `node tools/step8-scope.mjs check --run frontier-30`: passed with seven
  groups, 694 items, zero open routed rejections, and zero cross-group alerts.
- The required whole-run Step-8 guard was run with the published-repair ledger
  after the hash correction. It recognized all 175 changed items as licensed
  and reported zero errors and zero warnings.

There is no unresolved group-a rejection, alert, published repair, or
mathematical repair blocker.
