---
page: heaps-commutation-classes-and-fully-commutative-elements
title: "Heaps, Commutation Classes, and Fully Commutative Elements"
status: published
items: [def-cg-linear-extension-of-a-finite-poset,
        lem-cg-finite-poset-linear-extensions-and-connectivity,
        def-cg-labeled-word-heap-and-fully-commutative-element,
        lem-cg-convex-chains-consecutive-in-a-linear-extension,
        thm-cg-heaps-classify-commutation-classes,
        thm-cg-fully-commutative-forbidden-chain-criterion,
        thm-cg-fully-commutative-weak-intervals-are-distributive]
examples: []
---

Fix a finite Coxeter matrix and its presented group with length function, and let commutation of adjacent commuting generators be the only rewriting admitted between words. Commutation classes then admit a finite poset model: the heap of a word records each position and orders two positions when they are forced, and its labeled linear extensions are exactly the words in the commutation class. This is proved from a choice-free theory of finite posets: linear extensions exist, a prescribed order ideal can be made an initial segment, any two linear extensions are connected by adjacent interchanges of incomparable elements, and a convex chain — in particular a covering pair — occurs consecutively in some linear extension.

With the heap classification in hand, full commutativity has two equivalent forms. The braid-factor form forbids a full alternating factor of length $m(u,v)\ge3$ in a reduced word; the heap form forbids the corresponding convex alternating chains and covering pairs carrying equal labels. The heap statement does not assume that the word is reduced: reducedness is a consequence of the two forbidden-configuration conditions, via the Tits deletion route through Matsumoto's theorem. Pairs with $m(u,v)=\infty$ impose no condition.

The resulting invariant has an order-theoretic payoff. For a fully commutative element, the right weak order interval below it is isomorphic to the lattice of order ideals of its heap; meets and joins correspond to intersection and union of ideals, so the interval is a finite distributive lattice. Only the right weak interval is identified, and nothing is claimed for elements that are not fully commutative.

The page uses the presented Coxeter group and its reduced-word calculus from [[coxeter-presentations-exchange-and-reduced-word-theorems]], the right weak order and its prefix and cover properties from [[weak-order-inversions-and-lattice-operations]], and the finite order-ideal lattice from [[chains-antichains-sperner-and-dilworth]]. The interval theorem constructs its distributive structure through the heap's order ideals. The companion [[heaps-commutation-classes-and-fully-commutative-elements-examples]] works the two smallest heaps and contrasts distributive with nondistributive weak intervals.
