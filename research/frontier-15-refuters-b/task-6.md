## Your assignment — batch 5, the A page: the fundamental group of the circle

Run `frontier-15`, batch 5. The pair is
`library/topology/the-fundamental-group-of-the-circle.md` (A page, 21 items) and
`library/topology/the-fundamental-group-of-the-circle-examples.md` (B page, 7 items).
All items are at `items/<id>.md`, `status: draft`. The batch proof contract is
`research/frontier-15-batch-5.proof-contracts.json`.

Read these items in full, every numbered step against every cited item on disk:

- def-circle-as-real-line-mod-integers
- rem-circle-quotient-model-agrees-with-published-examples
- lem-open-quotient-arcs-in-real-line-mod-integers
- thm-real-line-covers-real-line-mod-integers
- prop-real-line-mod-integers-is-compact-and-path-connected
- prop-real-line-mod-integers-is-hausdorff
- def-standard-integer-loops-in-the-circle
- def-degree-of-a-circle-loop
- thm-degree-is-invariant-under-path-homotopy
- cor-degree-descends-to-circle-loop-classes
- prop-standard-circle-loops-have-their-integer-degrees
- lem-lifts-of-circle-loop-concatenation-and-reversal
- prop-degree-laws-for-circle-loops
- thm-degree-map-on-the-circle-is-a-homomorphism
- lem-circle-loops-of-equal-degree-are-path-homotopic
- thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree
- cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero
- thm-fundamental-group-of-the-circle
- cor-real-line-mod-integers-is-not-simply-connected
- thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
- cor-geometric-unit-circle-has-fundamental-group-z

**Focus for this group. `\pi_1(S^1)\cong\mathbb Z` is the run's most-cited standard
theorem, and its usual proof rests on two results — path lifting and homotopy lifting —
that are easy to *assert* and hard to *prove*. The single most valuable thing you can do
is establish exactly which lifting facts this page has and whether they are proved or
imported.**

1. **Where do path lifting and homotopy lifting come from?** `def-degree-of-a-circle-loop`
   is well defined only if every loop at the basepoint has a lift to `\mathbb R`
   starting at `0`, and that lift is **unique**. `thm-degree-is-invariant-under-path-
   homotopy` needs homotopy lifting. Open the cited dependency for each and check its
   on-disk Statement genuinely supplies what is used: the right space, the right
   covering map, uniqueness as well as existence, and the endpoint/basepoint condition.
   If a lifting fact is stated for a general covering space, check the hypotheses (e.g.
   the homotopy's domain being a square, the base being locally path-connected or the
   cover being evenly covered) are supplied here. **If a lift's existence or uniqueness
   is used but never established or cited, that is fatal and it is the defect this
   assignment exists to find.**
2. **Well-definedness of degree.** `\deg(\gamma) = \tilde\gamma(1)` requires
   `\tilde\gamma(1)\in\mathbb Z` (the loop condition) and independence of the choice of
   lift once the starting point is fixed. Check both are proved, and check the
   uniqueness argument's connectedness input (`[0,1]` connected, the fibre discrete).
3. **The homomorphism and the isomorphism.** `thm-degree-map-on-the-circle-is-a-
   homomorphism` needs `\deg(\gamma\cdot\delta) = \deg\gamma + \deg\delta`, which needs
   the concatenation-lift lemma; check that lemma's lift of the concatenation is
   continuous at the join (the pasting lemma on the two closed halves) and that the
   second piece is **translated** by the first's endpoint. Then check
   `thm-fundamental-group-of-the-circle` proves both injectivity (degree zero implies
   nullhomotopic) and surjectivity (every integer is realised), and that the Statement
   says an isomorphism onto `\mathbb Z` — not merely a bijection, and not merely a
   homomorphism.
4. **`thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`** carries 17
   declared dependencies. The map `[x]\mapsto(\cos 2\pi x,\sin 2\pi x)` is well defined,
   continuous (via the quotient's universal property), bijective, and a homeomorphism
   because the domain is **compact** and the codomain **Hausdorff**. Check all four,
   check the compactness of `\mathbb R/\mathbb Z` is proved and not assumed, and check
   the periodicity and injectivity computations. `2\pi` versus `\pi` or a dropped
   surjectivity argument is a false statement.
5. **`prop-real-line-mod-integers-is-hausdorff` and `lem-open-quotient-arcs…`.** The
   quotient map `q:\mathbb R\to\mathbb R/\mathbb Z` is **open**; check that is proved
   (`q^{-1}(q(U)) = \bigcup_{n}(U+n)`) and used correctly, since Hausdorffness of the
   quotient does not follow from Hausdorffness of the source without it. Instantiate
   equal endpoints in every interval and both the empty and singleton degenerate cases.
6. **The Remark.** `rem-circle-quotient-model-agrees-with-published-examples` is prose
   asserting agreement with two published items. Open both published items and check
   every asserted agreement literally — a Remark claiming an agreement that does not
   hold symbol-for-symbol is a false claim, and one was already found here.
7. **Titles.** Check each title against what its proof delivers, especially
   `cor-real-line-mod-integers-is-not-simply-connected` and
   `cor-geometric-unit-circle-has-fundamental-group-z`.
