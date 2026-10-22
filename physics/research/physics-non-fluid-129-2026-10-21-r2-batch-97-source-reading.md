# Batch 97 source reading

This is the source-reading record for the single A/B pair. Full-text retrieval is checked separately; a fetch stamp establishes document access, not mathematical proof or independent acceptance.

## Beffara and Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1

URL: https://arxiv.org/pdf/1006.5073

Retrieved the complete 27-page article. Read Sections 1–4, including finite FK and infinite-volume interfaces, Theorem 5 and Lemmas 6–7 and Proposition 8 for periodic-torus RSW, Theorems 12–13 for influence and sharp threshold, Propositions 14–16 for wired crossing and path construction, and the proof of Theorem 2 for subcritical decay. The full article cites the deepest BKKKL and greedy-lattice-animal inputs; those citations are not local proofs.

Supported/disposition by item:

- def-csm-frontier-fk-real-boundaries: included; finite real-q FK weights, boundary wiring, and self-dual parameter.
- def-csm-frontier-fk-infinite-volume-states: included; free/wired limits and the wired critical-threshold convention.
- lem-csm-frontier-fk-fkg-spatial-markov: included; component-count lattice condition, finite association, conditional edge law, and monotonicity are derived locally.
- lem-csm-frontier-fk-planar-duality: included; Euler component count and p-star relation, with the exterior-face factor derived locally.
- lem-csm-frontier-grid-crossings-intersect: included; the rectangular path-intersection fact used in RSW gluing is proved locally from polygonal Jordan separation.
- lem-csm-frontier-fk-free-wired-limits: included; finite-volume stochastic comparison and thermodynamic-limit construction.
- thm-csm-frontier-fk-torus-rsw: owner-escalation; the source proof is inspected, but the local torus-sector comparison and mixed-boundary reflection/surgery remain unresolved inputs [A1] and [A2].
- lem-csm-frontier-fk-influence-threshold: owner-escalation; the local transfer is conditional on the unproved continuous-cube BKKKL inequality [A1].
- lem-csm-frontier-fk-crossing-amplification: owner-escalation; finite differential amplification is local, while wired path construction, subcritical finite-size/greedy-animal argument, and free/wired threshold input remain unresolved.
- thm-csm-frontier-fk-square-critical-point: owner-escalation for those exact upstream arguments; full scope is retained conditionally.
- thm-csm-frontier-potts-square-critical-temperature: owner-escalation through the FK threshold; pinned finite Edwards–Sokal extension and parameter conversion are derived locally.
- ex-csm-frontier-ising-coupling-conversion: included conditionally; the delta identity and additive constant are computed directly.

Fetch stamp: 27 pages, 478,292 bytes, SHA-256 prefix 256dafca389c0915.

## Grimmett, The Random-Cluster Model, second edition

URL: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf

Retrieved the complete 388-page book. Read Chapter 1 §§1.2–1.4 for finite FK and Potts coupling; Chapter 3 §§3.2–3.3 for FKG association and the differential formula; Chapter 4 for free/wired infinite-volume construction; and Chapter 6 §§6.1–6.2 for planar duality and the historical square-lattice route. This 2006 edition predates the later exact q >= 1 theorem and is not current theorem-status evidence.

Supported/disposition:

- def-csm-frontier-fk-real-boundaries: included; finite FK weights and boundary convention, with real-q extension stated locally.
- lem-csm-frontier-fk-fkg-spatial-markov: included; lattice condition, association, conditional probabilities, and boundary comparison; local arguments are explicit.
- lem-csm-frontier-fk-planar-duality: included; dual parameter and Euler relation; the exact exterior-face convention is local.
- def-csm-frontier-fk-infinite-volume-states and lem-csm-frontier-fk-free-wired-limits: included for free/wired limit context.
- torus RSW, FK influence, crossing amplification, and exact square threshold: context only; this source does not close the local RSW, BKKKL, or subcritical proof obligations.
- Potts temperature and Ising conversion: included for interaction conventions; exact parameter algebra is local.

Fetch stamp: 388 pages, 4,232,359 bytes, SHA-256 prefix 16a94374735c5ef0.

## Graham and Grimmett, Influence and sharp-threshold theorems for monotonic measures

URL: https://arxiv.org/pdf/math/0505057

Retrieved the complete 23-page paper. Read Theorem 2.10 and its proof, Sections 3–5 on monotone measures, the FK specialization, and the finite derivative formula. It transfers from a continuous product cube and cites BKKKL; it does not prove the cube inequality.

Disposition: lem-csm-frontier-fk-influence-threshold remains owner-escalated at [A1]. The local sequential FK transfer is conditional, not a completed entropy/hypercontractive proof.

Fetch stamp: 23 pages, 248,959 bytes, SHA-256 prefix ae8f689f13a72574.

## Grimmett, Janson, and Norris, Influence in Product Spaces

URL: https://arxiv.org/pdf/1207.1780

Retrieved the complete 9-page paper. Read Theorem 1.1, Theorems 2.2–2.4, and their proofs, especially the Lebesgue-cube reduction and the general product-space conditional-fiber interface.

Disposition: the article gives the product-space reduction but reduces to BKKKL instead of proving the continuous-cube inequality. lem-csm-frontier-fk-influence-threshold remains owner-escalated on that input.

Fetch stamp: 9 pages, 183,954 bytes, SHA-256 prefix 41ddf34f46d0b8b0.

## Failed or partial retrieval routes

- Friedgut, Influences in Product Spaces: KKL and BKKKL Revisited: the ResearchGate route for Theorem 1.2 and Claim 2.1 returned HTTP 403 on its initial fetch and five recorded recovery retries. It remains owner-escalation; it is not marked dropped because no complete alternative proof or exact current supplier was found. Grimmett–Janson–Norris gives only the product-space reduction.
- Cox, Gandolfi, Griffin, and Kesten, Greedy lattice animals I: upper bounds: the source's Section 4 uses a greedy-lattice-animal estimate in the subcritical proof. Project Euclid routes returned inaccessible responses or a 1,161-byte HTML error body, and ResearchGate full-text/PDF requests returned HTTP 403. A complete 46-page Hammond arXiv:math/0411459 article was retrieved (544,532 bytes, SHA-256 prefix e6d21582aecb95f5), but only the introduction and beginning of Theorem 1.2's proof were inspected. It is not adopted as the exact upper-tail proof source; lem-csm-frontier-fk-crossing-amplification retains the missing argument as [A2].

## Inspected mathematical supplier interfaces

The current batch-90 carriers def-csm-frontier-finite-potts-fk and thm-csm-frontier-edwards-sokal were read at their complete Statements/Definition and Proof. Both now have current ready Step-1 records. The finite definition supplies integer-Q weights and positive normalizers; Edwards–Sokal proves finite marginals, component coloring, and the correlation/connectivity identity. The Potts consumer conditions the joint law on the positive event that all boundary spins equal color 1 and derives the wired law by finite summation.

The imported suppliers def-finite-simple-graph, def-multigraph-loop-and-digraph, cor-euler-formula-for-disconnected-plane-graphs, def-plane-graph-face-and-boundary, def-plane-dual-multigraph, lem-plane-edge-face-incidence, lem-polygonal-arc-does-not-separate-the-plane, and thm-polygonal-jordan-curve were inspected at the complete relevant statements/proofs. The disconnected-plane Euler corollary states |V|-|E|+|F|=1+c including isolated vertices and the null graph; the local duality proof applies its connected nonempty case.
