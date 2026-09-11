# Frontier-22 published collapse and Skolem audit

Date: 2026-09-11

## Scope

This is a bounded, item-exact audit of three published interfaces used by the
active large-cardinal work and of their proof-critical direct suppliers. It is
not a certification of their whole transitive dependency closure or an
exhaustive published-item audit. No published item or workflow artifact was
edited.

Before classification, the canonical index and the whole ledger were searched
for every target ID, title/mechanism and the supplier IDs below. None of these
eleven published IDs had a classification row. The nearby ordinal Mostowski
collapse and setlike-recursion records concern distinct items and mechanisms.

## Bounded no-repair-needed dispositions

| Item | SHA-256 | Exact disposition |
|---|---|---|
| `def-extensional-relation-and-collapse-map` | `c1799fc29d6013b06330bc6b39d78f09b7df37bba00a8a1a5ecb069832ef58ba` | The relation is required to be setlike, so every predecessor domain is a set. The displayed range rule is total and set-valued by Replacement, and the published setlike-recursion theorem supplies the unique definable class map without ambient Foundation. Extensionality is correctly reserved for injectivity rather than existence. |
| `lem-extensional-collapse-is-injective` | `60b9e937ac5373eb49cce1f46d233a202901491cc1ee32f1ea8e5dc6aa415f9a` | Induction on the maximum of the two ordinal ranks is valid: matched predecessors have ranks strictly below their respective parents, hence their maximum is below the current maximum. Equality of collapse values gives both predecessor-set inclusions, and extensionality then gives equality, including rank zero. |
| `thm-mostowski-collapse-for-extensional-relations` | `141e6d75b30ae95fa665a2a20300f4b2e002ba0dd6a08a63d39116452674a527` | The collapse equation makes the range transitive; injectivity gives membership reflection; and any isomorphism onto a transitive class satisfies the same setlike recursion, proving uniqueness. For a set domain, Replacement supplies the graph and image as sets. The active ultrapower consumer separately establishes setlikeness, external well-foundedness and extensionality before invoking this theorem. |
| `def-elementary-set-structure-embedding` | `33a9638f1666e3e0565a1864109815382a9399d4bd3f6fe220b90675c3153f2b` | Formula preservation/reflection includes equality and therefore injectivity; the atomic formulas give preservation of constants/functions and preservation/reflection of relations. Nonempty carriers and the empty-chain boundary are explicit. This is the exact interface needed for the elementary membership-submodel collapse. |
| `prop-isomorphism-invariance-of-satisfaction` | `99172a6649d69a90030e7a2d1ff8a4fa2b2963909fdfd4c555bcd6c0043e2825` | Constructor induction proves term transport and atomic truth transfer. Strongness handles relation reflection, injectivity handles equality, and surjectivity handles the reverse existential-witness direction. This supplies the exact transfer across the collapse isomorphism. |
| `thm-collapse-of-elementary-membership-submodels` | `18803943676b095beba939bbc82378598d097884adef44ee559797aa9a21af02` | Ambient Foundation proves external well-foundedness of membership restricted to the set `X`. Internal Extensionality plus elementarity returns a distinguishing member inside `X`, proving extensionality of the restriction. Mostowski collapse and isomorphism invariance then make the inverse collapse followed by inclusion elementary. The displayed injection proves the countability direction used by the active submodel construction; bijectivity also gives the converse. |
| `def-skolem-witness-hull` | `014e233f4f9e35e88e78fb2e46855db228cbcd876cd364cbcee4fe3f749853b2` | A supplied witness family is separate from its existence. When a well-order is supplied, least satisfying witnesses define the whole family by Separation and Replacement without another choice step. Natural-number recursion defines the stages, and the fixed default element handles empty parameter and constant sets. |
| `thm-tarski-vaught-set-structure-test` | `4b8e200e660536ae18032a67d8c64c009e7a0a94417399f04f0bfa8f3fd2842f` | Term induction gives agreement in a substructure; formula induction handles the Boolean clauses; and the stated witness condition supplies exactly the reverse existential direction. Empty tuples, repeated parameters and vacuous quantifiers are covered. No family of witnesses is selected in this pointwise equivalence. |
| `lem-skolem-hull-size-and-elementarity` | `bee81b84ff36729c74c143f326549f960851a58970f751d368132809eee106cf` | The item states ZFC and directly declares `def-axiom-of-choice`. It uses AC first to well-order the carrier and obtain a uniform witness family, and again to select injections of the countably many stages into `kappa`; both uses are explicit. Finite-word coding and cardinal absorption bound the operation indices and tuples, while Tarski--Vaught proves elementarity. |
| `cor-cardinal-absorption` | `99f4bc49cba8170e8e7fc47dde2334d36bf419e9d105676e4d1abe2ee55321e1` | The tagged-sum injection into `kappa x kappa`, monotonicity, the unit law and the choice-free Hessenberg square theorem give both absorption laws for well-orderable cardinal representatives in ZF. The nonzero condition for multiplication and the zero exception are explicit. |
| `thm-downward-lowenheim-skolem-with-parameters` | `db9500011a5d3bea288162b1f3e0c43341e1dddcc689b5289bb288c85c60ceca` | The theorem states ZFC, declares `def-axiom-of-choice`, and invokes the explicitly AC-scoped Skolem-hull supplier. An injection of `kappa` into `M` enlarges the parameter set to size exactly `kappa`; absorption gives the upper bound and containment gives the lower bound after taking the hull. The active PMEA consistency use has the same AC context. |

## Frontier impact and limits

These clauses supply the active well-founded-ultrapower collapse and the
countable elementary-submodel/collapse route. No live frontier blocker or new
Phase-2 supplier follows from this audit. This receipt does not reassess the
draft large-cardinal arguments themselves, the entire syntax/satisfaction
closure, or every use of these published items.

No fresh external source retrieval was needed: the issue under review was the
exact hypothesis and proof interface, and the complete local items provide the
relevant arguments and identify their published textbook references.
