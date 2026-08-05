# Citation-precision audit — everything that cites `thm-product-universal-property`

## The target, as it actually stands on disk

`items/thm-product-universal-property.md` — theorem — A map into a product is continuous iff each of its components is; the projections are continuous and open; and each projection is surjective when every factor is nonempty, which for an infinite index set uses the Axiom of Choice

#### Statement

Let $(X_i, \mathcal{T}_i)_{i \in I}$ be topological spaces and let
$P := \prod_{i \in I} X_i$ carry the product topology, with projections $\pi_j$
([[def-product-topology]]). Then:

1. **The projections are continuous**, and the product topology is the coarsest
   topology on $P$ making all of them continuous.
2. **Characteristic property.** For every space $Z$ and every function
   $h : Z \to P$,
   $$h \text{ is continuous } \iff \pi_i \circ h \text{ is continuous for every } i \in I .$$
   The functions $\pi_i \circ h$ are the **components** of $h$, and every family
   of functions $h_i : Z \to X_i$ arises from exactly one $h$, namely
   $h(z)(i) := h_i(z)$.
3. **The projections are open maps** ([[def-homeomorphism-and-open-maps]]), for
   the product topology and for the box topology alike. They need not be closed;
   that failure is recorded on this page as a false statement.
4. **Surjectivity.** If every $X_i$ is nonempty then every $\pi_j$ is surjective.
   For $I$ a natural number this is a theorem of ZF ([[lem-finite-choice]]); for
   an arbitrary $I$ it is the Axiom of Choice ([[def-axiom-of-choice]]), and this
   is the only place in the item where a choice principle is used.

## The 6 citing use(s), quoted verbatim from the citing items

### `def-evaluation-map` (published-backward, page function-space-topologies)

Title: The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$

- ([[thm-product-universal-property]]). This page always writes the function

### `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence` (published-backward, page nets-and-filters-examples)

Title: The coordinate-reading sequence in a compact binary cube has a convergent subnet but no convergent subsequence

- [L4] Each coordinate projection from a product is continuous, so it sends a convergent net to a convergent coordinate net ([[thm-product-universal-property]], [[thm-continuity-characterised-by-nets]]).

### `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- [L1] A map $h$ into a product is continuous exactly when each of its components is, the components being the composites with the projections; the projections are continuous ([[thm-product-universal-property]], claims 1 and 2, [[def-product-topology]]).

### `thm-radial-straight-line-map-on-punctured-rn` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$

- [L2] Coordinate projections and the map into a product are continuous as stated by the product universal property ([[thm-product-universal-property]], [[def-product-topology]]).

### `thm-the-exponential-law` (published-backward, page function-space-topologies)

Title: The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology

- [L3] A map into a product is continuous exactly when both its components are, and the projections of a product are continuous ([[thm-product-universal-property]], claims 1 and 2, [[def-product-topology]]).
