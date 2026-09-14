# Step 3b authoring checkpoint: solvable and nilpotent Lie algebras

- Run: `phase-2-next-18`
- Batch: 5
- Owned pages: `solvable-and-nilpotent-lie-algebras`, `solvable-and-nilpotent-lie-algebras-examples`
- Axiom base: ZF throughout. No argument uses the Axiom of Choice; all selections are from explicitly inhabited finite-dimensional objects inside finite proofs.

## Scaffold audit and repairs

The Step 3a scope decision was a sufficiency judgment, not proof approval. Before authoring, I re-read the owned manifest, coverage, DG-28 design section, direct dependencies, and the complete relevant arguments in Milne §§2–3 and Knapp Propositions 1.35–1.41. I also checked Maksimenko, *On action of outer derivations on nilpotent ideals of Lie algebras*, Theorem 1 and Lemmas 1–5 (pp. 74–82), because the original derivation-invariance strategy attributed a stronger statement to Knapp Proposition 1.40 than that proposition proves.

Repairs made before authoring:

- `prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras`: specified the nonempty-product maximum and the empty product's class-zero convention.
- `lem-engel-common-zero-vector`: supplied the missing normalizer argument, including why `ad_H=L_H-R_H` is nilpotent on `End(V)`.
- `cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra`: repaired the central-line case split.
- `thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero`: replaced unused radical dependencies by the solvability inputs actually used.
- `thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical`: replaced an unnecessarily indirect module filtration with the semidirect-product derivation proof and exact inputs.
- `prop-derivations-preserve-the-nilradical-in-characteristic-zero`: removed the unsupported stronger claim about `D(rad(g))`, cited Maksimenko's exact theorem, and retained the characteristic-zero combinatorial proof obligation.
- `ex-derived-and-lower-central-series-of-a-filiform-lie-algebra`: moved `n>=3` into the example's hypotheses.

No sibling-pair manifest entry was changed. No owner authoring direction file exists for this run.

## Published-content audit

No potentially defective published item has been confirmed so far. The false attribution was confined to this run's unpublished scaffold and has been repaired above. Published dependencies will be reported here if item-level authoring reveals a defect.

## Item checkpoints

- Scope refresh: `solvable-and-nilpotent-lie-algebras` was re-recorded `sufficient` at hash `85d66647f829d4b10f59227673a86a75a06c5358895db0da739fb1b6dc117686`; the pair hash includes the companion-page statement repair. No owner-held scope decision was overridden.

- `def-derived-series-and-solvable-lie-algebra` — authored and accepted at confidence 1. Claim and conventions: $\mathfrak g^{(0)}=\mathfrak g$, $\mathfrak g^{(r+1)}=[\mathfrak g^{(r)},\mathfrak g^{(r)}]$; solvable means a term is zero. The zero algebra terminates at index zero, a nonzero abelian algebra at index one, and no finite-dimensional or characteristic assumption is imposed. Source: Milne §3, definitions before Proposition 3.3 (printed p. 16). Dependencies examined: `def-lie-algebra-over-a-field`, `def-lie-subalgebra-ideal-and-center`. Local well-definedness: Jacobi proves each term is an ideal. Checks: explicit-path precheck (definition, zero proof items checked), rendercheck pass, strict proof-contract pass. Open gaps: none.

Next action: author `lem-derived-series-terms-are-characteristic-ideals`.

- `lem-derived-series-terms-are-characteristic-ideals` — authored and accepted at confidence 1. Exact claim: every automorphism preserves every derived term. Source: Milne §3, immediately after the definition (printed p. 16). Dependencies examined: `def-derived-series-and-solvable-lie-algebra`, `def-homomorphism-of-possibly-infinite-dimensional-lie-algebras`. Proof computes $f([A,A])=[f(A),f(A)]$ using surjectivity and performs finite induction, including zero and stabilized series. Checks: explicit-path canonical precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `def-solvable-length-of-a-lie-algebra`.

- `def-solvable-length-of-a-lie-algebra` — authored and accepted at confidence 1. The invariant is the least vanishing derived index, defined only for solvable algebras; $\operatorname{dl}(0)=0$ and a nonzero abelian algebra has length one. Source: Milne Definition 3.2 (printed p. 16). Dependency examined: `def-derived-series-and-solvable-lie-algebra`. Checks: explicit-path precheck (definition), rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `def-lower-central-series-and-nilpotent-lie-algebra`.

- `def-lower-central-series-and-nilpotent-lie-algebra` — authored and accepted at confidence 1. The lower series begins with $\gamma_1=\mathfrak g$ and continues by $\gamma_{r+1}=[\mathfrak g,\gamma_r]$; Jacobi supplies ideality and the ideal condition supplies descent. The zero and nonzero-abelian cases are explicit. Source: Milne Definition 2.1 (printed p. 11). Dependencies examined: `def-lie-algebra-over-a-field`, `def-lie-subalgebra-ideal-and-center`. Checks: explicit-path precheck (definition), rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `lem-lower-central-series-terms-are-characteristic-ideals`.

- `lem-lower-central-series-terms-are-characteristic-ideals` — authored and accepted at confidence 1. Exact claim: every automorphism preserves every $\gamma_r$. Source: Milne Definition 2.1 and Proposition 2.5 (printed pp. 11–12). Dependencies examined: `def-lower-central-series-and-nilpotent-lie-algebra`, `def-homomorphism-of-possibly-infinite-dimensional-lie-algebras`. The proof establishes $f([A,B])=[f(A),f(B)]$ and inducts from $\gamma_1$. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `def-nilpotency-class-of-a-lie-algebra`.

- `def-nilpotency-class-of-a-lie-algebra` — authored and accepted at confidence 1 after correcting an initially unanchored boundary-contract sentence. The class is the least $c\geq0$ with $\gamma_{c+1}=0$; zero has class zero and a nonzero algebra has class one iff abelian. Source: Milne Definition 2.1 (printed p. 11). Dependency examined: `def-lower-central-series-and-nilpotent-lie-algebra`. Checks: explicit-path precheck (definition), rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `def-upper-central-series-of-a-lie-algebra`.

- `def-upper-central-series-of-a-lie-algebra` — authored and accepted at confidence 1. Both the quotient-center and elementwise formulations are stated, with inverse-image ideality, $Z_0$, $Z_1$, and zero/stabilized cases explicit. Source: Milne Proposition 2.5 (printed p. 12). Dependencies examined: `def-lie-subalgebra-ideal-and-center`, `def-quotient-lie-algebra`. Checks: explicit-path precheck (definition), rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `thm-lower-and-upper-central-series-characterize-nilpotence`.

- `thm-lower-and-upper-central-series-characterize-nilpotence` — authored and accepted at confidence 1. The forward induction proves $\gamma_{c+1-r}\subseteq Z_r$ and the reverse induction proves $\gamma_{r+1}\subseteq Z_{c-r}$, with $c=0$ explicit. Source: Milne Proposition 2.5(a) (printed p. 12). Dependencies examined: `def-lower-central-series-and-nilpotent-lie-algebra`, `def-upper-central-series-of-a-lie-algebra`, `def-quotient-lie-algebra`. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `prop-nilpotent-lie-algebras-are-solvable`.

- `prop-nilpotent-lie-algebras-are-solvable` — authored and accepted at confidence 1. Jacobi induction proves $[\gamma_p,\gamma_q]\subseteq\gamma_{p+q}$, then $\mathfrak g^{(r)}\subseteq\gamma_{2^r}$; a supplied nilpotency bound gives termination without choice. Source: Kirillov §5.4 (printed pp. 101–102). Dependencies examined: the derived- and lower-central-series definitions. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras`.

- `prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras` — authored and accepted at confidence 1 after adopting the canonical proof-step numbering and anchoring every boundary entry. The proof compares subalgebra and quotient derived series and shows $\mathfrak g^{(m+n)}\subseteq\mathfrak i^{(n)}=0$. Source: Milne Proposition 3.4 (printed p. 16). Dependencies examined: `def-derived-series-and-solvable-lie-algebra`, `def-quotient-lie-algebra`, `prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras`. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

- Pre-item repair for `prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras`: added the already-authored local prerequisite `def-nilpotency-class-of-a-lie-algebra`, since the exact maximum-class assertion uses that invariant rather than merely lower-series termination. A fresh scope receipt is required before the item decision.

Next action: refresh scope and author `prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras`.

- Scope refresh after dependency repair: `sufficient`; scope hash remained unchanged because the correction affected prerequisite bookkeeping rather than promised claims.
- `prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras` — repaired, authored, and accepted at confidence 1. The proof treats subalgebra and quotient series, proves the product series formula componentwise, obtains exact class from an attaining factor for a nonempty finite family, and treats the empty product as class-zero separately. Source: Milne Proposition 2.5(b) (printed p. 12). Dependencies examined: lower central series, nilpotency class, quotient Lie algebra, direct products. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `prop-a-central-extension-of-a-nilpotent-lie-algebra-is-nilpotent`.

- `prop-a-central-extension-of-a-nilpotent-lie-algebra-is-nilpotent` — authored and accepted at confidence 1. The quotient image calculation puts $\gamma_{c+1}(\mathfrak g)$ in the central kernel, and one more bracket vanishes; the class-zero quotient is explicit. Source: Milne Proposition 2.5(b) (printed p. 12). Dependencies examined: lower central series, quotient Lie algebra, center. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center`.

- `prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center` — authored and accepted at confidence 1. The last nonzero lower-central term lies in the center; the zero algebra is explicitly excluded and no central element is selected. Source: Milne Proposition 2.5(c) (printed p. 12). Dependencies examined: lower central series and center. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `def-nilpotent-linear-transformation-and-nil-representation`.

- `def-nilpotent-linear-transformation-and-nil-representation` — authored and accepted at confidence 1. Nil means pointwise nilpotence of every represented operator, with exponent allowed to vary; source/image nilpotence and basiswise checking are explicitly distinguished. Source: Milne Theorem 2.8 and Corollary 2.11 (printed pp. 13–14). Dependencies examined: `def-nilpotent-endomorphism`, `def-representation-of-a-lie-algebra`. Checks: explicit-path precheck (definition), rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the repaired `lem-engel-common-zero-vector`.

- `lem-engel-common-zero-vector` — repaired, authored, and accepted at confidence 1. The induction proves $\operatorname{ad}_H=L_H-R_H$ nilpotent on endomorphisms, constructs a normalizing coset for a maximal proper subalgebra, proves that subalgebra is an ideal of codimension one, and obtains a common vector from the stable common kernel. Source: Milne Theorem 2.8 proof (printed p. 13). Dependencies examined: nil representation, quotient representation, rank-nullity. The dimension-zero, dimension-one, zero-restriction, and finite-existential-choice cases are explicit. Checks: canonical induction precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `thm-engels-triangularization-theorem`.

- `thm-engels-triangularization-theorem` — authored and accepted at confidence 1 after adopting canonical induction numbering. A common zero line is quotiented out, the nil action descends, and inverse images lift the quotient flag; both flag/basis directions and zero/one-dimensional endpoints are proved. Source: Knapp Theorem 1.35 (printed pp. 31–32). Dependencies examined: the common-zero lemma, quotient representations, quotient projection. Checks: canonical induction precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `thm-engels-theorem`.

- `thm-engels-theorem` — authored and accepted at confidence 1. The forward direction places iterated adjoints in $\gamma_{c+1}$; the reverse applies the Engel flag to the adjoint representation and bounds $\gamma_{n+1}$ by zero. Source: Milne Corollary 2.11 (printed p. 14). Dependencies examined: lower central series, Engel triangularization, inner derivations/adjoint representation. Both iff directions, zero, one-dimensional, and nonfaithful-adjoint cases are explicit. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `cor-a-lie-algebra-with-nilpotent-adjoint-representation-has-a-central-series`.

- `cor-a-lie-algebra-with-nilpotent-adjoint-representation-has-a-central-series` — authored and accepted at confidence 1. Reversing the Engel flag gives the requested central filtration, and induction places $A_{m-r}$ in $Z_r$; the zero-length case is explicit. Source: Milne Theorem 2.8 and Corollary 2.11 (printed pp. 13–14). Dependencies examined: Engel triangularization, Engel's theorem, upper central series. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

- Pre-item repair for `cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra`: replaced the unused central-extension proposition by the proved quotient-closure proposition and added the quotient definition used in the induction.

Next action: refresh scope and author the repaired codimension-one-ideal corollary.

- Scope refresh after prerequisite repair: `sufficient`; promised claims unchanged.
- `cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra` — repaired, authored, and accepted at confidence 1. The induction chooses a central line, treats $z\in\mathfrak h$, $z\notin\mathfrak h$ with $\mathfrak h+kz=\mathfrak g$, and the remaining proper-quotient case, then checks inverse-image ideality and codimension. Source: Milne Propositions 2.5–2.6 (printed pp. 12–13). Dependencies examined: nonzero center, nilpotent quotient closure, quotient construction, rank-nullity. Checks: canonical induction precheck, rendercheck, strict proof-contract pass without warnings. Open gaps: none.

Next action: author `lem-a-finite-dimensional-solvable-lie-algebra-has-a-codimension-one-ideal-over-an-algebraically-closed-characteristic-zero-field`.

- `lem-a-finite-dimensional-solvable-lie-algebra-has-a-codimension-one-ideal-over-an-algebraically-closed-characteristic-zero-field` — authored and accepted at confidence 1. Solvability makes the derived algebra proper; a hyperplane in the nonzero abelianization pulls back to a codimension-one ideal. Source: Knapp Proposition 1.23 proof (printed pp. 25–26). Dependencies examined: derived series, quotient construction, rank-nullity. The proof records that algebraic closure and characteristic zero are unused here and handles the zero exclusion, one-dimensional, and abelian cases. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `thm-lies-theorem`, including the exact characteristic-zero trace division and algebraic-closure eigenvalue use.

- `thm-lies-theorem` — authored and accepted at confidence 1 after canonical induction renumbering. The complete proof constructs the cyclic $\mathfrak h$-weight filtration, derives $d\lambda([x,h])=0$ by trace, proves $x$-stability of the weight space, and takes the final eigenvector. Source: Knapp Theorem 1.25 (printed pp. 26–28). Dependencies examined: codimension-one ideal, representation identity, algebraically closed eigenvalue theorem, trace cyclicity. Characteristic zero, algebraic closure, zero/one-dimensional cases, and no-AC use are located exactly. Checks: canonical induction precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations`.

- `cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations` — authored and accepted at confidence 1. Induction passes through a common eigenline and the quotient representation; inverse-image flags and both basis/flag directions are explicit. Source: Milne Theorem 3.7 (printed p. 17). Dependencies examined: Lie's theorem, quotient representation, quotient projection. Zero/one-dimensional and no-AC boundaries are checked. Checks: canonical induction precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional`.

- `cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional` — authored and accepted at confidence 1. Lie's theorem supplies a nonzero invariant eigenline and irreducibility makes it the whole module; zero-algebra and zero-module conventions are explicit. Source: Kirillov Theorem 5.24 (printed p. 103). Dependencies examined: Lie's theorem and irreducibility. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent`.

- `thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent` — authored and accepted at confidence 1. Upper-triangular commutators are strictly upper triangular, their finite span remains so, and Engel makes the derived algebra nilpotent; $V=0$, dimension one, and abelian cases are explicit. Source: Milne Corollary 3.8 (printed p. 17). Dependencies examined: simultaneous triangularization and Engel's theorem. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

- Pre-item repair for `cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero`: added scalar extension and first-isomorphism prerequisites. Replaced the unqualified algebraic-closure step by descent to the finitely generated coefficient field before taking its countable, explicitly constructible algebraic closure; this preserves the declared ZF axiom base.

Next action: refresh scope and author the repaired arbitrary-field corollary.

- Scope refresh after ZF/scalar-extension repair: `sufficient`; promised claim unchanged.
- `cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero` — repaired, authored, and accepted at confidence 1. A finite basis descends the algebra to its finitely generated coefficient field; a deterministic enumeration constructs that countable field's algebraic closure in ZF. The proof then applies the linear theorem to the adjoint image, lifts through the central kernel, and descends/extends lower-series vanishing faithfully. Source: Knapp Proposition 1.39 (printed pp. 32–33). Dependencies examined: linear theorem, central extensions, adjoint kernel, first isomorphism, scalar extension. Checks: explicit-path precheck, rendercheck, strict proof-contract pass without warnings. Open gaps: none.

Next action: author `thm-lies-criterion-for-solvability-by-the-derived-algebra`.

- `thm-lies-criterion-for-solvability-by-the-derived-algebra` — authored and accepted at confidence 1. The forward direction uses the arbitrary-field characteristic-zero corollary; the reverse uses nilpotent-implies-solvable and the abelian quotient extension, valid in every characteristic. Source: Milne Corollary 3.8 (printed p. 17). Dependencies examined: items 25, 9, and 10. Both iff directions and zero/abelian cases are explicit. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `def-radical-of-a-finite-dimensional-lie-algebra`, retaining its explicit well-definedness supplier.

- `def-radical-of-a-finite-dimensional-lie-algebra` — authored and accepted at confidence 1 with registered `justified_by` supplier `thm-sum-of-solvable-ideals-is-solvable`. The largest-ideal universal property, finite-dimensional well-definedness route, and zero/all/proper cases are explicit. Source: Milne Corollary 3.5 and Definition 3.6 (printed pp. 16–17). Dependencies examined: derived series, ideals, and the forward justification supplier. Checks: explicit-path precheck (definition), rendercheck, strict proof-contract pass. Open obligation: author the immediately following supplier before any consumer.

Next action: author `thm-sum-of-solvable-ideals-is-solvable` and close that well-definedness obligation.

- `thm-sum-of-solvable-ideals-is-solvable` — authored and accepted at confidence 1, closing the radical definition's well-definedness obligation. The proof identifies $(\mathfrak i+\mathfrak j)/\mathfrak i$ with $\mathfrak j/(\mathfrak i\cap\mathfrak j)$, applies solvable extension closure, and reduces the algebraic sum of all solvable ideals to finitely many using a finite basis. Source: Milne Corollary 3.5 (printed p. 16). Dependencies examined: radical definition and solvable closure. Empty/zero sums and the exact finite, choice-free reduction are explicit. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical`.

- `prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical` — authored and accepted at confidence 1. Automorphism invariance uses both $f$ and $f^{-1}$; every solvable ideal in the radical quotient pulls back to a solvable ideal of $\mathfrak g$ and hence is zero downstairs. Source: Etingof Proposition 14.6. Dependencies examined: radical definition/existence, solvable extension closure, quotient construction. The $\operatorname{rad}=0$ and $\operatorname{rad}=\mathfrak g$ cases are explicit. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `def-nilradical-of-a-finite-dimensional-lie-algebra`, retaining its immediate well-definedness supplier.

- `def-nilradical-of-a-finite-dimensional-lie-algebra` — authored and accepted at confidence 1 with registered `justified_by` supplier `thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero`. The characteristic-zero largest-ideal universal property, zero/nilpotent cases, and distinction from the ad-nilpotent set are explicit. Source: Milne Corollary 2.24 (printed p. 15). Dependencies examined: lower central series, ideals, and the immediate supplier. Checks: explicit-path precheck (definition), rendercheck, strict proof-contract pass. Open obligation: author the supplier next.

- Pre-item repair for `thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero`: added scalar extension explicitly. The ZF-safe coefficient-field construction used in item 25 will be repeated for the adjoint triangularization of a sum of two nilpotent ideals.

Next action: refresh scope and author the nilradical existence/characteristicity supplier.

- Scope refresh after scalar-extension repair: `sufficient`; promised claims remain unchanged.
- `thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero` — repaired, authored, and accepted at confidence 1, closing the nilradical definition's well-definedness obligation. An adapted basis descends two arbitrary nilpotent ideals to a finitely generated coefficient field; a fixed countable construction supplies an algebraic closure in ZF. Simultaneous adjoint triangularization then proves their sum nilpotent, faithful scalar descent returns the result to the original field, and finite dimensionality reduces the sum of all nilpotent ideals to a finite sum. Applying both an automorphism and its inverse proves characteristicity. Source: Knapp Proposition 1.40 and Corollary 1.41 (printed pp. 48–49). Dependencies examined: nilradical definition, nilpotent-implies-solvable, solvable quotient/extension closure, simultaneous triangularization, Engel's theorem, and scalar extension. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the repaired commutator-with-radical theorem, including its semidirect-product derivation lemma and the identification of the radical's nilradical with that of the ambient algebra.

- `thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical` — repaired, authored, and accepted at confidence 1. For a solvable algebra $\mathfrak s$ and derivation $D$, the semidirect product $kt\ltimes_D\mathfrak s$ is solvable, its derived algebra is a nilpotent ideal contained in $\mathfrak s$, and hence $D(\mathfrak s)$ lies in $\operatorname{nilrad}(\mathfrak s)$. Applying this to inner derivations on the radical proves ambient stability of its nilradical; maximality in both ambient and radical directions then identifies the two nilradicals and yields the stated containment. Source: Knapp Proposition 1.40 and Corollary 1.41 (printed pp. 48–49). Dependencies examined: radical and nilradical universal properties, nilradical existence, semidirect products, solvable extensions, nilpotence of a solvable algebra's derived algebra, and nilpotent-implies-solvable. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `cor-the-derived-algebra-of-the-radical-lies-in-the-nilradical`.

- `cor-the-derived-algebra-of-the-radical-lies-in-the-nilradical` — authored and accepted at confidence 1. Bracket-span monotonicity and the preceding theorem give the two containments directly; zero radical, radical equal to the ambient algebra, and the one-dimensional case are explicit. Source: Milne Theorem 6.9 (printed p. 36). Dependency examined: the commutator-with-radical theorem. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: reread Maksimenko's complete Lemmas 1–5 and Theorem 1 argument, then author the repaired derivation-invariance proposition only if the characteristic-zero combinatorial proof is fully recovered.

- Pre-item repair for `prop-derivations-preserve-the-nilradical-in-characteristic-zero`: added the local nilpotency-class definition because the proof explicitly fixes the class $c$ and uses the endpoint $I^{c+1}=0$. I re-read Maksimenko's generalized Leibniz formula, Lemmas 1–5, recurrence $f_c(m)=f_c(m-1)+c-m+1$, and Theorem 1 in full (journal pp. 75–82). The characteristic-zero divisions are by factorials and the integers through $c+1$; the theorem's bound is $c(c+1)(2c+1)/6+2c$.

Next action: refresh scope, then author the repaired proposition with the full filtration argument and its zero-nilradical boundary.

- Scope refresh after adding nilpotency class: `sufficient`; promised claim unchanged.
- `prop-derivations-preserve-the-nilradical-in-characteristic-zero` — repaired, authored, and accepted at confidence 1. The proof derives the generalized Leibniz formula, the estimate $D^q(I^s)\subseteq I^{s-q}$, the all-$D(I)$ and refined $[I,D(I),\ldots,D(I)]$ bounds, and Maksimenko's full filtration recurrence $f_c(m)=f_c(m-1)+c-m+1$. It obtains the explicit class bound $c(c+1)(2c+1)/6+2c$ for $I+D(I)$ and then uses nilradical maximality. The zero nilradical is separated before assigning a positive class. Source: Maksimenko, formula (1), Lemmas 2–5, and Theorem 1 (journal pp. 75–82); complete relevant proof read from the journal PDF. Dependencies examined: nilradical existence/maximality, nilpotency class, derivation identity. Characteristic-zero use: division by the displayed factorials and integers through $c+1$. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `def-semisimple-lie-algebra-by-vanishing-radical`.

- `def-semisimple-lie-algebra-by-vanishing-radical` — authored and accepted at confidence 1. The definition uses vanishing radical, explicitly includes the zero Lie algebra, excludes every nonzero solvable algebra, and does not smuggle in the later decomposition characterization. Source: Milne Definition 4.2 (printed p. 20). Dependency examined: radical definition. Checks: explicit-path definition precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center` with only the selected direct-sum convention.

- `def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center` — authored and accepted at confidence 1. The selected characteristic-zero convention is stated as an internal direct sum with semisimple derived summand; spanning, zero intersection, zero algebra, and abelian cases are explicit, while other equivalent characterizations are deferred. Source: Knapp §I.7 (printed pp. 55–57). Dependencies examined: semisimplicity, derived algebra, and center. Checks: explicit-path definition precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the first false-statement refutation, using an explicit affine Lie algebra witness to show solvable does not imply nilpotent.

- `fs-every-solvable-lie-algebra-is-nilpotent` — authored and accepted at confidence 1. The two-dimensional affine algebra $[x,y]=y$ is verified as a Lie algebra; its derived series is $\mathfrak a,ky,0$, while every lower-central term from $\gamma_2$ onward equals nonzero $ky$. Source: Milne Example 1.4(b) and the series definitions (printed pp. 5 and 11). Dependencies examined: derived and lower central series. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the nilpotent-by-nilpotent extension counterexample using the same affine algebra but checking the ideal and quotient explicitly.

- Pre-item repair for `fs-an-extension-of-a-nilpotent-lie-algebra-by-a-nilpotent-lie-algebra-is-always-nilpotent`: replaced the unrelated finite-product closure dependency by the lower-central-series definition actually used to verify nilpotence of the ideal and quotient and nonnilpotence of the extension.

Next action: refresh scope and author the repaired counterexample.

- Scope refresh after dependency repair: `sufficient`; promised refutation unchanged.
- `fs-an-extension-of-a-nilpotent-lie-algebra-by-a-nilpotent-lie-algebra-is-always-nilpotent` — repaired, authored, and accepted at confidence 1 after canonical step renumbering. In the affine algebra, $ky$ is an abelian ideal, the one-dimensional quotient is abelian, but the ambient lower central series stabilizes at nonzero $ky$. Source: Milne Aside 2.3 and the two-dimensional example (printed pp. 5 and 11). Dependencies examined: lower central series and quotient bracket. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the Engel-basis counterexample in $\mathfrak{sl}_2$, checking the three basis vectors, each adjoint nilpotence calculation, and the failed conclusion explicitly.

- `fs-it-is-enough-that-a-chosen-basis-act-nilpotently-in-engels-theorem` — authored and accepted at confidence 1 after canonical step renumbering. In $\mathfrak{sl}_2(k)$, $e,f,u=h+e-f$ are proved linearly independent and each adjoint is cube-zero by explicit bracket calculations, while $h=u-e+f$ satisfies $(\operatorname{ad}_h)^r(e)=2^r e\neq0$. Source: Knapp Theorem 1.35 and Corollary 1.38 (printed pp. 46–48). Dependencies examined: Engel's theorem and the definition of a nil representation. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the field-and-characteristic counterexamples to Lie's theorem, checking irreducibility/common-eigenvector failure in both examples.

- Pre-item repair for `fs-lies-theorem-holds-over-every-field-and-in-every-characteristic`: added the derived-series and representation definitions needed to verify that both witnesses satisfy the solvable-Lie-algebra and representation hypotheses before showing the conclusion fails.

Next action: refresh scope and author both independent obstructions.

- Scope refresh after dependency repair: `sufficient`; promised refutation unchanged.
- `fs-lies-theorem-holds-over-every-field-and-in-every-characteristic` — repaired, authored, and accepted at confidence 1 after canonical step renumbering. The real rotation representation of a one-dimensional abelian algebra is irreducible with no real eigenline. In characteristic $p$, the affine algebra acts on $v_0,\ldots,v_{p-1}$ by $Xv_i=iv_i$ and cyclic $Y$; the wraparound commutator is checked, Lagrange projections plus $Y$ prove irreducibility, and no common eigenvector exists. Source: Etingof Remark 13.2 and Lie's theorem hypotheses. Dependencies examined: Lie's theorem, solvability, and representation identity. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the real irreducible-representation counterexample as a focused extraction of the rotation obstruction.

- Pre-item repair for `fs-every-irreducible-representation-of-a-solvable-real-lie-algebra-is-one-dimensional`: added the solvability, Lie-representation, and Lie-irreducibility definitions used to verify the proposed counterexample, retaining the complex corollary as the precise contrast.

Next action: refresh scope and author the focused real counterexample.

- Scope refresh after dependency completion: `sufficient`; promised refutation unchanged.
- `fs-every-irreducible-representation-of-a-solvable-real-lie-algebra-is-one-dimensional` — repaired, authored, and accepted at confidence 1. A one-dimensional abelian real algebra acts by the rotation matrix on $\mathbb R^2$; the representation and solvability hypotheses are verified, and $T^2+1$ having no real root rules out every invariant line, proving irreducibility and dimension two. The two complex eigenlines after scalar extension explain why the complex corollary is not contradicted. Source: Knapp Theorem 1.25 and its field convention (printed pp. 26–28). Dependencies examined: complex irreducibility corollary, solvability, representation, and Lie irreducibility. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the final A-page false-statement refutation in $\mathfrak{sl}_2$, checking that the ad-nilpotent set is not closed under addition and distinguishing it from the nilradical.

- `fs-the-nilradical-is-defined-as-the-set-of-all-ad-nilpotent-elements` — authored and accepted at confidence 1. In $\mathfrak{sl}_2(k)$, $\operatorname{ad}_e$ and $\operatorname{ad}_f$ are cube-zero, while $(\operatorname{ad}_{e+f})^{2r}(h)=4^r h\neq0$. Thus the ad-nilpotent set is not additively closed and cannot equal the nilradical, which is an ideal and hence a subspace. Source: Milne §2.13 and Corollary 2.24 (printed pp. 14–15). Dependencies examined: nilradical definition and Engel's theorem. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

All 42 A-page items are now authored and individually checkpointed. Next action: begin the B page in listed order with `ex-abelian-lie-algebras-are-nilpotent-of-class-one`, preserving the zero algebra's class-zero convention.

- `ex-abelian-lie-algebras-are-nilpotent-of-class-one` — authored and accepted at confidence 1. For a nonzero abelian algebra, $\gamma_1\neq0$ and $\gamma_2=0$, giving exact class one; the zero algebra is separately assigned class zero. Source: Milne §2.1 (printed p. 11). Dependency examined: nilpotency class. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `ex-the-heisenberg-lie-algebra-is-two-step-nilpotent` with exact basis-bracket and sharpness calculations.

- `ex-the-heisenberg-lie-algebra-is-two-step-nilpotent` — authored and accepted at confidence 1. All brackets span $kz$, the bracket $[x,y]=z$ makes $\gamma_2=kz\neq0$, and centrality makes $\gamma_3=0$, establishing exact class two in every characteristic. Source: Milne Example 1.4(c) (printed p. 5). Dependency examined: nilpotency class. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the strictly upper-triangular example, including the filtration equality $\gamma_r=F_r$, the sharp matrix-unit chain, and the small-$n$ endpoints.

- Pre-item repair for `ex-strictly-upper-triangular-matrices-form-a-nilpotent-lie-algebra`: added nilpotency class as a direct prerequisite because the promised exact value $n-1$ is stronger than lower-series termination.

Next action: refresh scope and author the repaired example.

- Scope refresh after exact-class dependency repair: `sufficient`; promised example unchanged.
- `ex-strictly-upper-triangular-matrices-form-a-nilpotent-lie-algebra` — repaired, authored, and accepted at confidence 1. For the superdiagonal filtration $F_p$, matrix-unit multiplication gives $[F_p,F_q]\subseteq F_{p+q}$; induction in both directions gives $\gamma_r=F_r$. The chain $[E_{12},E_{23},\ldots,E_{n-1,n}]=E_{1n}$ proves sharp class $n-1$, with $n=2$ and the excluded $n=1$ endpoint recorded. Source: Milne §2.1 (printed pp. 11–12). Dependencies examined: lower central series and nilpotency class. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the upper-triangular solvable-but-nonnilpotent example, proving derived-series termination quantitatively and giving a persistent lower-central witness.

- `ex-upper-triangular-matrices-form-a-solvable-nonnilpotent-lie-algebra` — authored and accepted at confidence 1 after canonical step renumbering. Zero diagonals put the first derived algebra in $F_1$, and $[F_p,F_q]\subseteq F_{p+q}$ gives $\mathfrak b_n^{(r)}\subseteq F_{2^{r-1}}$, hence solvability. The relation $[E_{11},E_{12}]=E_{12}$ keeps $E_{12}$ in every lower-central term, proving nonnilpotence; $n=1$ is explicitly excluded. Source: Milne §§2–3 (printed pp. 11–17). Dependencies examined: derived and lower central series. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the two-dimensional affine example as an examples-page calculation of both series.

- `ex-the-two-dimensional-affine-lie-algebra-is-solvable-not-nilpotent` — authored and accepted at confidence 1. Basis brackets give derived terms $ky,0$ and the persistent lower-central formula $\gamma_r=ky$ for every $r\geq2$, valid in every characteristic. Source: Milne Example 1.4(b) (printed p. 5). Dependencies examined: derived and lower central series. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author the plane Euclidean-motion example, calculating both series from the infinitesimal rotation brackets.

- Pre-item repair for `ex-the-euclidean-motion-lie-algebra-is-solvable-in-dimension-two`: added solvable length and lower central series, which are required for the promised exact derived length and nonnilpotence conclusions.

Next action: refresh scope and author the repaired example.

- Scope refresh after the Euclidean-motion dependency repair: `sufficient`; the promised A/B inventory and claims remain unchanged.
- `ex-the-euclidean-motion-lie-algebra-is-solvable-in-dimension-two` — repaired, authored, and accepted at confidence 1. In the basis $R,P,Q$, the brackets $[R,P]=Q$, $[R,Q]=-P$, and $[P,Q]=0$ give first derived algebra the nonzero translation plane $T$ and second derived algebra zero, so the exact derived length is two. Since $[\mathfrak e(2),T]=T$, every lower-central term from $\gamma_2$ onward equals $T$, proving nonnilpotence. Source: Kirillov §5.4 (printed pp. 101–103). Dependencies examined: semidirect product, derived series, derived length, and lower central series. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `ex-derived-and-lower-central-series-of-a-filiform-lie-algebra`, checking that the displayed bracket is a Lie bracket and proving both series with their exact endpoints for every $n\geq3$.

- `ex-derived-and-lower-central-series-of-a-filiform-lie-algebra` — authored and accepted at confidence 1. The alternating basis rule is checked against Jacobi in arbitrary characteristic. It gives derived algebra $\operatorname{span}(e_3,\ldots,e_n)$ with zero second derived algebra, and induction gives $\gamma_r=\operatorname{span}(e_{r+1},\ldots,e_n)$ through $\gamma_{n-1}=ke_n\neq0$, followed by $\gamma_n=0$. Thus the exact class is $n-1$ and the derived length is two; the $n=3$ endpoint is explicit. Source: Kirillov Definitions 5.22, 5.25, and 5.27 (printed pp. 76–77), with the displayed example calculated locally. Dependencies examined: derived series, lower central series, and nilpotency class. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `ex-radical-and-nilradical-of-the-affine-lie-algebra`, proving the classification of nilpotent ideals rather than only exhibiting $ky$.

- `ex-radical-and-nilradical-of-the-affine-lie-algebra` — authored and accepted at confidence 1 after canonical step renumbering and a display-format repair. Solvability makes the entire affine algebra its radical. The line $ky$ is an abelian ideal; any ideal containing $ax+by$ with $a\neq0$ contains both $y$ and $x$, hence is the nonnilpotent ambient algebra. Therefore every nilpotent ideal lies in $ky$, proving the nilradical equality by its universal property. Source: Knapp Proposition 1.40 and its remark (printed p. 48). Dependencies examined: radical definition, nilradical definition, and the completed affine-series example. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `cex-a-nilpotent-by-nilpotent-extension-that-is-not-nilpotent`, displaying the exact quotient bracket and invoking the completed persistent lower-central calculation.

- Pre-item repair for `cex-a-nilpotent-by-nilpotent-extension-that-is-not-nilpotent`: added the completed abelian-class-one example as a direct dependency. The scaffold identified the ideal and quotient as abelian but lacked a registered supplier for the promised assertion that both are nilpotent.

Next action: refresh scope and author the repaired counterexample with the exact sequence maps and bracket on the quotient.

- Scope refresh after adding the abelian-nilpotence supplier: `sufficient`; the promised counterexample and pair inventory remain unchanged.
- `cex-a-nilpotent-by-nilpotent-extension-that-is-not-nilpotent` — repaired, authored, and accepted at confidence 1 after canonical step renumbering. The inclusion and quotient maps form a short exact sequence, and the kernel $ky$ and quotient $\mathfrak a/ky$ are each one-dimensional abelian, hence nilpotent. The completed affine calculation supplies $\gamma_r(\mathfrak a)=ky\neq0$ for every $r\geq2$, explicitly failing the proposed conclusion. Source: Milne's introductory affine extension (printed p. 9) and Aside 2.3 (printed p. 12). Dependencies examined: affine-series example, quotient Lie algebra, and abelian-class-one example. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: audit and author the real rotation-module counterexample, first adding the representation definition if the scaffold indeed uses it without a direct dependency.

- Pre-item repair for `cex-a-two-dimensional-irreducible-real-representation-of-an-abelian-lie-algebra`: added the Lie-representation definition. Irreducibility alone does not establish that the prescribed rotation action respects the Lie bracket.

Next action: refresh scope, then verify the representation identity and rule out every nonzero proper real invariant subspace.

- Scope refresh after the representation dependency repair: `sufficient`; the promised counterexample and pair inventory remain unchanged.
- `cex-a-two-dimensional-irreducible-real-representation-of-an-abelian-lie-algebra` — repaired, authored, and accepted at confidence 1. The map $\rho(at)=aJ$ is checked to respect the zero bracket of the one-dimensional abelian algebra. Any proper nonzero stable subspace of $\mathbb R^2$ would be a line $\mathbb Rv$ with $Jv=\lambda v$; $J^2=-I$ would then force $\lambda^2=-1$, impossible over $\mathbb R$. The two complex eigenlines record the precise field obstruction. Source: Knapp's representation convention and Theorem 1.25 (printed pp. 41–42). Dependencies examined: representation and irreducibility definitions. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: audit and author the positive-characteristic counterexample to Lie's theorem, including the wraparound commutator and an irreducibility proof valid for every prime $p$.

- Pre-item repair for `cex-positive-characteristic-failure-of-lies-theorem`: added the derived-series and Lie-representation definitions. The scaffold must prove that the acting affine algebra is solvable and that the displayed operators form a representation before using irreducibility to refute Lie's theorem. Etingof Remark 13.2 supplies the module but only says its irreducibility is easy; the full argument remains local work.

Next action: refresh scope and author the repaired counterexample, including the $i=p-1$ commutator and Lagrange projections.

- Scope refresh after the positive-characteristic dependency repair: `sufficient`; the witness and pair inventory remain unchanged.
- `cex-positive-characteristic-failure-of-lies-theorem` — repaired, authored, and accepted at confidence 1. The affine algebra has derived series $\mathfrak a,ky,0$. The operators $Xv_i=iv_i$ and cyclic $Yv_i=v_{i+1}$ satisfy $[X,Y]=Y$, including at $i=p-1$ and when $p=2$. For any nonzero invariant subspace, a finite Lagrange polynomial in $X$ extracts a basis vector and repeated $Y$ produces every basis vector, proving irreducibility and therefore the absence of a common eigenline. Source: Etingof Theorem 13.1 and Remark 13.2 (printed pp. 64–65); the source's omitted irreducibility calculation is supplied in full. Dependencies examined: Lie's theorem, derived series, representation, and irreducibility. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

Next action: author `ex-engels-theorem-on-strictly-upper-triangular-matrices`, checking the zero algebra endpoint $n=1$, the common kernel, elementwise nilpotence, and the exact standard flag convention.

- `ex-engels-theorem-on-strictly-upper-triangular-matrices` — authored and accepted at confidence 1 after canonical step renumbering. For the standard flag $V_i=\operatorname{span}(e_1,\ldots,e_i)$, a strictly upper triangular matrix sends $V_i$ into $V_{i-1}$, hence its $n$th power is zero. The same calculation gives the common zero vector $e_1$ and realizes exactly the Engel flag. The $n=1$ case is separated: $\mathfrak n_1=0$ and $0\subset ke_1$ works. Source: Milne's flag example and Theorem 2.8 (printed pp. 27–29). Dependencies examined: Engel triangularization and the completed strictly-upper-triangular example. Checks: explicit-path precheck, rendercheck, strict proof-contract pass. Open gaps: none.

All 12 B-page items and all 42 A-page items are now authored and individually checkpointed. Next action: audit page conventions, author both owned pages without touching the sibling pair, then register coverage and run pair-wide and containing-batch gates.

- Page assembly checkpoint: both owned page files were authored in manifest order and render successfully. The existing batch-5 coverage remains complete at two A pages and 44 harvested results with zero errors or warnings; no coverage source or sibling row was removed.
- Pair registration initially exposed four manifest/frontmatter mismatches. Exact-ID reconciliation removed an erroneous self-dependency from `def-nilpotency-class-of-a-lie-algebra`, removed misplaced solvability/representation dependencies from `cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional`, and placed the already audited nilpotency-class and solvability/representation dependencies on their intended consumers `ex-strictly-upper-triangular-matrices-form-a-nilpotent-lie-algebra` and `cex-positive-characteristic-failure-of-lies-theorem`. No item proof or sibling-pair entry changed in this reconciliation.

Next action: rerun registration, policy, dependency, decision-currentness, contract, rendering, and plan gates against the exact reconciled inventory.

## Final gate checkpoint

- Pair registration: 2 owned pages and 54 owned items, with manifest, frontmatter, page order, and file inventory reconciled.
- Step 3 decisions: owned scope closed; 54/54 item decisions are current, confidence 1, and closed.
- Explicit-path precheck: 44 proof-bearing items checked, 10 definitions skipped by the proof-shape gate, 0 failures.
- Explicit-path rendering: 54 items plus 2 pages checked by the renderer's YAML and real-KaTeX path, 0 errors.
- Strict proof contracts: 54/54 items checked, 0 errors, 0 warnings.
- Owned-pair content policy: 54 scoped items, 0 errors, 0 warnings.
- Coverage: 2 pages and 44 harvested results, 0 errors, 0 warnings.
- Manifest integrity: 36 pages owed by the run and 36 present, with no scope drift.
- Citation checks: 54 items scanned with no recognized elementary-move attribution warning; 126 contract citations had no missing quote or widening candidate.
- Boundary audit: 432 rows, including 136 item-specific `not_applicable` dispositions; no template cluster or contradicted disposition was detected.
- Repository dependency check: 18,807 items and 1,114 pages, 0 errors and 269 unrelated warnings; no finding names an owned item or page. Forward-reference check passed with 0 errors and 0 warnings.
- Cross-batch dependency refresh: `research/phase-2-next-18-batch-5.cross-batch-dependencies.json` remains an empty array; the owned pair has no same-run cross-batch edge. The sibling rows in `briefs/tasks/frontier-dependency-ledger.md` were preserved by the serial refresh tool.
- Plan validation: exit 0; declared page order and all currently asserted item lists are acyclic and consistent. Before Step 4 splicing, `research/plan-spec.json` still has empty item arrays for `solvable-and-nilpotent-lie-algebras` (batch manifest: 42) and `solvable-and-nilpotent-lie-algebras-examples` (batch manifest: 12).
- Containing-batch content policy: 112 scoped items, 58 `scope-item-missing` errors, 0 warnings. Every error belongs to the separately owned `semisimple-lie-algebras-cohomology-and-levi-theory` pair (46 A items and 12 B items); there are no owned-pair errors. This is reported, not hidden or repaired across ownership.

## Handoff

Completed IDs:

- A (42): `def-derived-series-and-solvable-lie-algebra`, `lem-derived-series-terms-are-characteristic-ideals`, `def-solvable-length-of-a-lie-algebra`, `def-lower-central-series-and-nilpotent-lie-algebra`, `lem-lower-central-series-terms-are-characteristic-ideals`, `def-nilpotency-class-of-a-lie-algebra`, `def-upper-central-series-of-a-lie-algebra`, `thm-lower-and-upper-central-series-characterize-nilpotence`, `prop-nilpotent-lie-algebras-are-solvable`, `prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras`, `prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras`, `prop-a-central-extension-of-a-nilpotent-lie-algebra-is-nilpotent`, `prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center`, `def-nilpotent-linear-transformation-and-nil-representation`, `lem-engel-common-zero-vector`, `thm-engels-triangularization-theorem`, `thm-engels-theorem`, `cor-a-lie-algebra-with-nilpotent-adjoint-representation-has-a-central-series`, `cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra`, `lem-a-finite-dimensional-solvable-lie-algebra-has-a-codimension-one-ideal-over-an-algebraically-closed-characteristic-zero-field`, `thm-lies-theorem`, `cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations`, `cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional`, `thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent`, `cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero`, `thm-lies-criterion-for-solvability-by-the-derived-algebra`, `def-radical-of-a-finite-dimensional-lie-algebra`, `thm-sum-of-solvable-ideals-is-solvable`, `prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical`, `def-nilradical-of-a-finite-dimensional-lie-algebra`, `thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero`, `thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical`, `cor-the-derived-algebra-of-the-radical-lies-in-the-nilradical`, `prop-derivations-preserve-the-nilradical-in-characteristic-zero`, `def-semisimple-lie-algebra-by-vanishing-radical`, `def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center`, `fs-every-solvable-lie-algebra-is-nilpotent`, `fs-an-extension-of-a-nilpotent-lie-algebra-by-a-nilpotent-lie-algebra-is-always-nilpotent`, `fs-it-is-enough-that-a-chosen-basis-act-nilpotently-in-engels-theorem`, `fs-lies-theorem-holds-over-every-field-and-in-every-characteristic`, `fs-every-irreducible-representation-of-a-solvable-real-lie-algebra-is-one-dimensional`, `fs-the-nilradical-is-defined-as-the-set-of-all-ad-nilpotent-elements`.
- B (12): `ex-abelian-lie-algebras-are-nilpotent-of-class-one`, `ex-the-heisenberg-lie-algebra-is-two-step-nilpotent`, `ex-strictly-upper-triangular-matrices-form-a-nilpotent-lie-algebra`, `ex-upper-triangular-matrices-form-a-solvable-nonnilpotent-lie-algebra`, `ex-the-two-dimensional-affine-lie-algebra-is-solvable-not-nilpotent`, `ex-the-euclidean-motion-lie-algebra-is-solvable-in-dimension-two`, `ex-derived-and-lower-central-series-of-a-filiform-lie-algebra`, `ex-radical-and-nilradical-of-the-affine-lie-algebra`, `cex-a-nilpotent-by-nilpotent-extension-that-is-not-nilpotent`, `cex-a-two-dimensional-irreducible-real-representation-of-an-abelian-lie-algebra`, `cex-positive-characteristic-failure-of-lies-theorem`, `ex-engels-theorem-on-strictly-upper-triangular-matrices`.

Local suppliers and assumptions:

- No post-baseline item ID was created. All necessary suppliers were assigned inventory and are now fully authored, registered, contracted, and accepted; repaired dependency links are recorded item-by-item above.
- The axiom base is ZF. AC is not invoked at any step, so no AC dependency is declared or propagated. Finite-dimensional basis choices and individual witness selections occur only inside explicitly inhabited finite constructions and require no choice principle.

Published-content concerns:

- None confirmed and none presently suspected. The only source-attribution defect found was in the unpublished scaffold for `prop-derivations-preserve-the-nilradical-in-characteristic-zero`; it was repaired using Maksimenko's exact theorem and complete supporting lemmas before authoring. No published supplier requires repair from this dispatch.

Open obligations:

- Step 4 must splice the two owned item arrays and their final dependency metadata into `research/plan-spec.json`; the current empty arrays are the explicit pre-splice mismatch.
- The sibling owner must complete the 58 files currently missing from the other batch-5 pair before the unfiltered containing-batch content-policy gate can pass.
- There is no owner-held escalation, unresolved mathematical prerequisite, unresolved source qualification, cross-group repair, shared-prose amendment, or owned-pair content obligation.
