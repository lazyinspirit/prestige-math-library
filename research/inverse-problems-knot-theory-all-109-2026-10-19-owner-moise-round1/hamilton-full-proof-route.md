# Hamilton full-proof route, independently read

Source: A. J. S. Hamilton, The triangulation of 3-manifolds, Quarterly Journal of Mathematics Oxford (2) 27 (1976), 63–70. Full eight-page PDF: https://www.maths.ed.ac.uk/~v1ranick/papers/hamiltontri.pdf . Entire text extracted and read. Source discovery came from Ranicki's actual Triangulation and Hauptvermutung bibliography, https://www.maths.ed.ac.uk/~v1ranick/haupt/index.htm . This is actual new full-proof evidence, not the former bibliographic lookup.

## Exact local target

Hamilton Theorem 1, printed p64: for k+n=3, an embedding h:B^k×R^n→R^3 that is PL near ∂B^k×R^n can be isotoped, fixed on that boundary and outside B^k×2B^n, to a map PL on B^k×B^n. Here B^j=[-1,1]^j. PL is the actual standard piecewise linear structure in the domain and target; it is not an abstract finite CW structure. This handle straightening result is the exact next genuine local approximation theorem. None of its k=0,1,2 cases has been proved locally in this lane.

## Source proof and its actual inputs

1. Case k=3, p66: pull the standard structure back along h, use PL Alexander/Schoenflies to recognize the resulting cube as a PL ball, extend a prescribed boundary identification by coning, and use the Alexander isotopy. The source invokes irreducibility of standard PL R^3 (Alexander 1924). The topological fact that h(B^3) is a ball does not supply a PL parametrization. Root's smooth Schoenflies alone does not supply this PL input. The existing local Alexander contraction is stated only in dimension two; its explicit radial formula does generalize immediately to a cube in every finite dimension, but adding this easy tail alone would leave the central PL-ball input unproved.

2. Cases k=0,1,2, pp66–67: immerse punctured T^n in R^n, keeping a central chart cube standard. Pull h's structure to B^k×(T^n minus point). Complete the boundary with a standard collar. Wall's end-capping lemma supplies a compact PL submanifold with one additional spherical boundary and containing the central cube. Brown's topological generalized Schoenflies permits topological coning of that sphere, creating a PL structure on B^k×T^n. This is not yet known to be irreducible in that PL structure.

3. Still p67: use PL Kneser decomposition and Milnor's prime/irreducible exception to discard nonstandard topological-sphere summands while preserving the central cube. For k=0, Wall's end lemma finds a sphere around that cube; for k=1,2 a generalized Dehn lemma produces the requisite separating surfaces. Standard PL R^3 irreducibility identifies the protected compact region as a PL ball. This is exactly where treating the held topological prime theorem as a supplier would make a cycle. A separately proved PL prime theorem on a supplied finite triangulated manifold could avoid that cycle, but does not eliminate the other prerequisites.

4. The resulting structure on B^k×T^n is irreducible. The identity to the standard B^k×T^n is replaced by a PL homotopy equivalence rel boundary. Hamilton Lemma 3 (p65), citing the actual proofs within Waldhausen Theorem6.1 or Scott Theorem2.1, turns this into a PL homeomorphism. Its hypotheses include connected compact orientable irreducible PL manifolds and a sufficiently large target, not merely matching fundamental group or a topological homeomorphism. This major PL rigidity result is still unsupplied locally.

5. pp67–68: lift to B^k×R^n; the lift is bounded in the Euclidean factor because its induced torus fundamental-group map is the identity. Compress R^n into the doubled cube using a PL homeomorphism fixed on the central cube, extend the conjugated bounded map by identity at the boundary, and apply Alexander isotopy. The bounded displacement, rather than a claimed PL extension at infinity, is what ensures topological continuity. This constructs the desired topological isotopy with final locally PL map.

6. Existence, pp68–69: first handle boundary with surface classification and collars. Finite chart gluing for compact M then follows by applying the handle theorem to successive skeleta in compact overlap regions. The source generalizes to locally finite charts and obtains a PL atlas. Uniqueness, pp68–69, successively straightens handles of a fine triangulation, respecting a protected closed region where the original comparison is already PL. The equivalence between a PL atlas and a locally finite simplicial triangulation is also a substantive supplied theorem, cited to Stallings in Hamilton rather than proved there. Compactness then gives finiteness by the elementary tail already recorded.

## Supplier inventory needed for this alternative

- Standard PL R^3 sphere Schoenflies/irreducibility (Alexander).
- PL immersion of punctured T^n into R^n for n=1,2,3 (a special case of Whitehead's Lemma1).
- Compact PL neighborhood bounded by the old compact boundary and a sphere in a PL3-manifold with one simply connected end (Wall's Lemma2).
- Topological locally flat generalized Schoenflies for capping (Brown), including tameness of the PL sphere in the underlying topological torus chart used by the proof.
- PL generalized Dehn lemma for the protected-cube construction.
- PL Kneser existence plus prime/irreducible exception, stated for a manifold already equipped with a PL triangulation.
- Waldhausen/Scott PL homotopy-equivalence rigidity in the exact sufficiently-large irreducible setting.
- PL atlas triangulation, boundary collars, and 2D compatibility.

No active item or local proof is asserted by this inventory. The next honest work is either to prove these inputs and the handle theorem (a much larger branch than the original draft recognized), or obtain Moise/Bing's direct proof and locally author its approximation/taming lemmas instead. The present work does not narrow the topological theorem, create an axiom, or relabel an established theorem an open problem.

## Coordination result

The normal-surface owner reports that its current finite-compatible-PL-surface rounding helper gives a smooth embedded surface replacement preserving topology, not an ambient finite piecewise smooth homeomorphism with controlled derivative fans and not a standard PL ball parameterization. Therefore it cannot yet bridge smooth Schoenflies to the required standard PL Schoenflies input. Root confirmed that its accepted sphere theorem is smooth with countable choice, not PL.
