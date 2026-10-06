---
id: thm-continuation-composition-law-on-homology
kind: theorem
title: "Composition of continuation maps on homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-continuation-chain-map, thm-continuation-count-is-a-chain-map, thm-homotopic-continuation-data-give-chain-homotopic-maps, def-two-parameter-continuation-homotopy, lem-gluing-continuation-solutions-gives-collar-ends, def-regular-continuation-datum-between-morse-smale-pairs, def-morse-homology-of-a-morse-smale-pair, def-axiom-of-choice, def-morse-smale-pair]
justified_by: []
dependency_level: 11
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (5): glue the reparametrized homotopies; for large S the continuation map of the glued homotopy equals the composite, PDF p. 92, with the compactness details on pp. 93-95"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, final step: the commutative triangle for three Morse--Smale pairs together with the chain homotopy between the two constructions, p. 4 of the lecture"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 8, Lemma 8.3: the composition rule obtained from the gluing bijection and the equality of characteristic signs, pp. 78-79"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.4, third step: the two-parameter family showing that Phi^G o Phi^F and Phi^H coincide in homology, printed pp. 75-78, PDF pp. 85-88"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f^{01}_s,g^{01}_s)$
and $(f^{12}_s,g^{12}_s)$ be regular continuation data from $(f^0,g^0)$ to
$(f^1,g^1)$ and from $(f^1,g^1)$ to $(f^2,g^2)$ on a closed manifold $M$,
with continuation maps $\Phi^{10}$ and $\Phi^{21}$
([[def-continuation-chain-map]], [[def-morse-smale-pair]]).

Then there exists a regular continuation datum $(f^{02}_s,g^{02}_s)$ from
$(f^0,g^0)$ to $(f^2,g^2)$, obtained by splicing the two data with a large
gluing window and then making an arbitrarily small generic perturbation fixing
the ends, such that
$$[\Phi^{20}]=[\Phi^{21}]\circ[\Phi^{10}]:HM_*(f^0,g^0;\Lambda)\longrightarrow HM_*(f^2,g^2;\Lambda).$$
In particular the canonical isomorphisms of Morse homology compose, and
$\Phi^{02}$ does not depend on the splicing choices on homology
([[def-morse-homology-of-a-morse-smale-pair]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, three Morse--Smale pairs, and regular continuation data from the first to the second and from the second to the third.

[F1] Splicing the two data with a large gluing window and perturbing generically in the interior of the window fixing the ends produces a continuation datum from the first pair to the third, and regularity is generic, so a regular spliced datum exists ([[def-regular-continuation-datum-between-morse-smale-pairs]], [[def-two-parameter-continuation-homotopy]]).

[F2] For a large gluing window there is a bijection between pairs of rigid continuation solutions of the two data with matching intermediate critical point and rigid solutions of the spliced datum; the bijection is the gluing analysis at the intermediate Morse--Smale pair ([[lem-gluing-continuation-solutions-gives-collar-ends]]).

[F3] Two regular continuation data between the same two pairs are joined by a regular two-parameter datum, and the corresponding continuation maps are chain homotopic, hence equal on homology ([[thm-homotopic-continuation-data-give-chain-homotopic-maps]], [[def-two-parameter-continuation-homotopy]]).

[F4] The continuation map is a chain map for every regular datum, so it induces a map on Morse homology ([[thm-continuation-count-is-a-chain-map]], [[def-continuation-chain-map]], [[def-morse-homology-of-a-morse-smale-pair]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] choose a regular spliced datum $(f^{02}_s,g^{02}_s)$ with gluing window of length $S\gg0$, obtained from the two given data by keeping the common middle pair fixed on the overlap and perturbing generically. [F1, given, construct]

2.1 By [F2] the rigid solutions of the spliced datum are in bijection with the pairs $(u^{01},u^{12})$ of rigid solutions of the two data whose intermediate critical point coincides, for $S$ large enough; consequently the chain-level continuation map of the spliced datum satisfies $\Phi^{02}=\Phi^{21}\circ\Phi^{10}$ on generators. [F2, step 1.1, algebra]

2.2 Any other regular spliced datum obtained with a different gluing window or a different small perturbation is joined to the chosen one by a regular two-parameter datum fixing the ends; by [F3] the two continuation maps are chain homotopic, hence induce the same map on homology. [F3, step 1.1]

3.1 By [F4] the map $\Phi^{02}$ descends to homology, and steps 2.1 and 2.2 give $[\Phi^{20}]=[\Phi^{21}]\circ[\Phi^{10}]$ independently of the splicing choices. [F4, step 2.1, step 2.2] ∎
