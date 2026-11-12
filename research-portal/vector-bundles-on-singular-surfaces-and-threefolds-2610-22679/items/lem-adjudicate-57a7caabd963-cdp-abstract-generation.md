---
id: lem-adjudicate-57a7caabd963-cdp-abstract-generation
kind: lemma
title: Completely decomposed proper maps are abstract-blowup covers
status: published
domain: mathematics
deps:
  - def-cdh-topology-interface
  - thm-adjudicate-57a7caabd963-birational-dense-open-input
  - math:def-reduction-of-scheme
  - thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-irreducible-component-scheme
  - math:def-generic-point-irreducible-closed-subset
  - math:def-integral-scheme
  - math:def-birational-morphism-schemes
  - math:lem-integral-finite-type-scheme-function-field
  - math:lem-field-valued-points-of-schemes
dependency_roles:
  def-cdh-topology-interface: mathematical-premise
  thm-adjudicate-57a7caabd963-birational-dense-open-input: mathematical-premise
  math:def-reduction-of-scheme: mathematical-premise
  thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-irreducible-component-scheme: mathematical-premise
  math:def-generic-point-irreducible-closed-subset: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-birational-morphism-schemes: mathematical-premise
  math:lem-integral-finite-type-scheme-function-field: mathematical-premise
  math:lem-field-valued-points-of-schemes: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Mazza–Voevodsky–Weibel, Lecture notes on motivic cohomology, December
        2005 author PDF
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Definitions 12.21 and 12.23, Examples 12.24–12.25, Lemma 12.26 and its
        proof; printed pp. 96–97, PDF pages 107–108 (one-based)
      statement: In the topology defined using reduced open complements, a proper
        morphism is a cdh cover exactly when every target point has a lift with
        isomorphic residue field.
      hypotheses: Finite-type schemes over a field in the source category. Definition
        12.21 requires an isomorphism only after reducing the open complements.
        This is context for the proof pattern, not a premise asserting the
        actual-complement variant.
      reading_limits: Read the listed definitions, examples and complete displayed
        proof in the primary PDF text during this repair. The source convention
        differs from the Statement. The local induction proves the
        actual-complement assertion; SV00 and the book’s other descent results
        were not reconstructed. No PDF-image check or source-defect judgment is
        claimed.
    - title: The Stacks Project, finite-type morphisms preserve Noetherianity
      url: https://stacks.math.columbia.edu/tag/01T6
      locator: Lemma 29.15.6, statement and proof
      statement: A finite-type morphism with Noetherian target has Noetherian source.
      hypotheses: Apply the finite-type branch to each structure morphism to Spec(k);
        a field is Noetherian. No reducedness or separatedness is required for
        this input.
      reading_limits: Read the complete tag statement and short proof. Its cited
        algebra theorem was not reconstructed; this imports Noetherianity only.
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Lemmas 28.5.5 and 28.5.7, statements and displayed proofs
      statement: A Noetherian scheme has Noetherian underlying space and finitely many
        irreducible components.
      hypotheses: Apply after tag 01T6 to the finite-type k-schemes in this item.
      reading_limits: Read the two statements and displayed proofs on the section
        page, also checking tags 01OZ and 0BA8. Their earlier topological
        results were not reconstructed. No other lemma in the section is
        imported.
    - title: The Stacks Project, dimension of locally algebraic schemes
      url: https://stacks.math.columbia.edu/tag/0A21
      locator: Lemma 33.20.3(6),(8), and their displayed proofs
      statement: For a locally finite-type scheme over a field, dimension is the
        supremum of the transcendence degrees over that field of the residue
        fields at the generic points of its irreducible components.
      hypotheses: Here there are finitely many components by tag 0BA8. Their generic
        fields are finitely generated over k by the function-field supplier, so
        the displayed supremum is a finite integer for a nonempty finite-type
        scheme.
      reading_limits: Read clauses (6),(8) and their displayed proofs on the tag page.
        The affine dimension results cited there were not reconstructed. The use
        here is finite-dimensionality, not a dimension-difference or catenarity
        theorem.
    - title: The Stacks Project, zero-dimensional algebraic schemes
      url: https://stacks.math.columbia.edu/tag/06LH
      locator: Lemma 33.20.2, complete statement and displayed proof
      statement: A zero-dimensional finite-type scheme over a field is a finite
        disjoint union of spectra of finite-dimensional local Artinian algebras
        over that field.
      hypotheses: Apply to a nonempty zero-dimensional finite-type k-scheme.
        Reducedness is added locally to identify these local algebras with their
        residue fields.
      reading_limits: Read the statement and complete proof. Noether normalization and
        the cited Artinian structure results were not reconstructed. Only the
        finite disjoint-union conclusion is imported.
    - title: The Stacks Project, nilpotence in Artinian rings
      url: https://stacks.math.columbia.edu/tag/00J4
      locator: Definition 10.53.1 and Lemma 10.53.4, statement and displayed proof
      statement: The Jacobson radical of an Artinian ring is nilpotent; for a local
        ring this is its unique maximal ideal.
      hypotheses: Use only for the commutative local Artinian algebras in tag 06LH. If
        the algebra is reduced, nilpotence makes its maximal ideal zero, so it
        equals its residue field. Artinian means descending chain condition for
        ideals.
      reading_limits: Read the definition and Lemma 10.53.4 with its proof. The linked
        simple-module result was not reconstructed; no other structure theorem
        is imported from this section.
    - title: The Stacks Project, factorization from a reduced scheme
      url: https://stacks.math.columbia.edu/tag/0356
      locator: Lemma 26.12.7, statement and displayed proof
      statement: A morphism from a reduced scheme into a scheme factors through a
        closed subscheme whenever its set-theoretic image lies in that closed
        subscheme.
      hypotheses: Apply with reduced source Y_i and closed target subscheme X_i of X
        in step 1.3. Neither the ambient target nor the closed subscheme needs
        to be reduced for the cited theorem.
      reading_limits: Read the exact statement and displayed affine proof. Its
        ideal-sheaf factorization and nilradical prerequisites were not
        reconstructed. The local application identifies the image containment
        before invoking the theorem.
    - title: The Stacks Project, generic points of schemes
      url: https://stacks.math.columbia.edu/tag/01IS
      locator: Lemma 26.11.1, statement and displayed proof
      statement: Every nonempty irreducible closed subset of a scheme has a unique
        generic point.
      hypotheses: Apply to the irreducible components of X and the point closures in
        Y. Generic means that the closure of the singleton is the specified
        closed subset.
      reading_limits: Read the complete statement and affine-chart proof. No other
        sober-space results or sources are imported.
    - title: The Stacks Project, proper-morphism calculus
      url: https://stacks.math.columbia.edu/tag/01W0
      locator: Lemmas 29.42.4–29.42.7; tags 01W3, 01W4, 01W5, 01W6
      statement: Proper morphisms are stable under composition and base change, and
        closed immersions are proper. If P is proper over S and Q is separated
        over S, every S-morphism P to Q is proper.
      hypotheses: For base change use p:Y to X. For composition use the closed
        immersions Y_i to Y followed by p. For the last clause take P=Y_i,
        Q=X_i, S=X; X_i to X is a closed immersion and hence separated. No
        Noetherian, reducedness or arbitrary-index choice hypothesis is imposed
        by these cited statements.
      reading_limits: Read all four statements and displayed proofs on the individual
        tag pages 01W3, 01W4, 01W5 and 01W6. Their cited structural lemmas were
        not reconstructed. The read-only library properness lemmas have extra AC
        hypotheses, so those lemmas are not silently used to strengthen this
        choice-free item.
    - title: The Stacks Project, finite presentation over a Noetherian target
      url: https://stacks.math.columbia.edu/tag/01TX
      locator: Lemma 29.22.9(2), statement and displayed proof; Definition 29.22.1 on
        tag 01TO
      statement: A finite-type morphism with locally Noetherian target is of finite
        presentation.
      hypotheses: The targets here are finite-type k-schemes and hence Noetherian.
        Closed immersions are finite type by tag 01W5. Finite presentation means
        quasi-compact, quasi-separated and affine-locally given by finitely many
        generators and relations.
      reading_limits: Read the definition, clause (2) and its displayed proof. Its
        cited algebra finite-presentation theorem was not reconstructed. This
        retains the original finite-presentation observation; it is not needed
        for the induction itself.
    - title: The Stacks Project, finite-generator transcendence-basis comparison
      url: https://stacks.math.columbia.edu/tag/030D
      locator: Definition 9.26.1, Lemma 9.26.3 (finite-generator specialization and
        finite-basis comparison in its proof), Definition 9.26.4
      statement: For a field extension generated by a finite list G, maximal
        algebraically independent sublists give finite transcendence bases,
        whose cardinalities agree; every finite algebraically independent subset
        has cardinality at most the length of G.
      hypotheses: Only finitely generated field extensions and finite independent
        subsets are used. A basis is an independent set over whose generated
        field the extension is algebraic. For a finite independent subset A,
        apply the maximal-subset construction inside the finite generating set G
        union A. Transcendence degree here is the supremum of finite independent
        cardinalities.
      reading_limits: Read Definitions 9.26.1 and 9.26.4 and the complete displayed
        proof of Lemma 9.26.3. Only its finite-subset construction and
        finite-basis comparison are imported. Replace its general Zorn selection
        by choosing a maximal subset of a finite set; no arbitrary-index basis
        selection or cardinal arithmetic is used. Deeper field-theory
        prerequisites were not reconstructed.
dependency_level: 8
---

## Statement
Let $k$ be a field. On the category of separated finite-type $k$-schemes let $J$ be the topology generated by Nisnevich covering families and abstract blowup families whose proper map is an actual isomorphism on the open complement of the closed center. Every completely decomposed proper morphism is a $J$-cover. Consequently $J$ is the cdh topology generated by Nisnevich covering families and singleton completely decomposed proper morphisms. No reducedness hypothesis on the schemes is imposed.

## Facts & Assumptions

**Given:** The field, category and generated topology in the statement, and a completely decomposed proper morphism $p:Y\to X$.

**Goal:** Prove the reverse generation implication with actual open-complement isomorphisms.

[F1] The meanings of complete decomposition, properness, abstract blowup family, fibre products and generated topology, and the fact that every actual abstract blowup family is a Nisnevich-plus-cdp cover, are supplied by [[def-cdh-topology-interface]]. Its Justification supplies proper finite disjoint unions and the covering-sieve argument, and its scheme category contains the closed subschemes and finite disjoint unions used below. A map with a section generates the maximal sieve: the identity factors through it, and all other arrows then do so by precomposition.

[F2] A proper birational map of integral finite-type $k$-schemes is an isomorphism over a dense open of its target, with its entire inverse image. [[thm-adjudicate-57a7caabd963-birational-dense-open-input]] Here integral means reduced, nonempty and irreducible; birationality of the specified morphism means that it maps generic point to generic point and induces an isomorphism of their local fields. [[math:def-integral-scheme]] [[math:def-birational-morphism-schemes]] For an integral finite-type scheme its generic local ring is its function field, canonically the fraction field of a nonempty affine chart, and is finitely generated over $k$. Only these clauses, which do not assume AC, of [[math:lem-integral-finite-type-scheme-function-field]] are used.

[F3] Finite-type schemes over a field are noetherian of finite dimension, with finitely many irreducible components, by the imported inputs below. Noetherian schemes have finite affine covers by spectra of Noetherian rings; dimension is chain dimension of their underlying Noetherian spaces, with $\dim\varnothing=-\infty$. [[math:def-locally-noetherian-and-noetherian-scheme]] [[math:def-dimension-noetherian-topological-space]] A closed subset omitting all component generic points has smaller dimension: any nonempty irreducible closed chain in it ends in a proper closed subset of some component, so appending that component increases the chain length by one. Thus if $d$ is the ambient finite dimension, every such chain has length at most $d-1$.

[F4] The reduction $X_{\mathrm{red}}\hookrightarrow X$ is a reduced closed subscheme with unchanged underlying space. [[math:def-reduction-of-scheme]] Every closed subset has a unique reduced induced closed subscheme structure. [[thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input]] Components are equipped with this structure. [[math:def-irreducible-component-scheme]] A generic point has singleton closure equal to the indicated irreducible closed set. [[math:def-generic-point-irreducible-closed-subset]] Existence and uniqueness of such points and factorization from a reduced source through a closed subscheme containing its image are imported below. Closed immersions preserve residue fields, as proved in the suppliers of F1.

[F5] A point $x$ has a canonical morphism $\operatorname{Spec}\kappa(x)\to X$; more generally a morphism $\operatorname{Spec}K\to X$ is a point together with an embedding of its residue field into $K$, compatibly with scheme morphisms. Only these choice-free clauses of [[math:lem-field-valued-points-of-schemes]] are used. In particular a $\kappa(x)$-valued point of an $X$-scheme lying over the canonical point at $x$ has residue field exactly $\kappa(x)$: its field embedding into $\kappa(x)$ is a $\kappa(x)$-algebra map and hence surjective as well as injective.

[F6] Properness survives base change and composition; closed immersions are proper. If $P$ is proper over $S$, $Q$ is separated over $S$ and $P\to Q$ is an $S$-morphism, then $P\to Q$ is proper. These are explicit imported premises below, without the additional AC hypotheses of the available library properness lemmas. Finite disjoint unions are handled by F1.

[F7] A zero-dimensional finite-type $k$-scheme is a finite disjoint union of spectra of local Artinian $k$-algebras. Artinian means descending chain condition for ideals. The maximal ideal of a local Artinian ring is nilpotent. These are imported below. If the scheme is reduced, each such maximal ideal is zero, so each local algebra equals its residue field. Hence a reduced zero-dimensional finite-type scheme is a finite disjoint union of spectra of fields.

[F8] All closed immersions and finite-type maps here are finitely presented: their targets are Noetherian by F3, so the imported finite-presentation theorem below applies. Finite presentation means quasi-compact and quasi-separated, with affine-local presentations by finitely many algebra generators and relations. This retains the original observation without using it in the dimension induction.

## External input

The [MVW definitions and Lemma 12.26](https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf), printed pp. 96–97, give the related proper-cover characterization using reduced open complements. They provide context for the induction pattern; the actual-complement conclusion here is proved locally.

For F3 import Noetherianity from [Stacks 01T6](https://stacks.math.columbia.edu/tag/01T6), and the Noetherian underlying space and finite component count from [Stacks 01OU, Lemmas 28.5.5 and 28.5.7](https://stacks.math.columbia.edu/tag/01OU). [Stacks 0A21(8)](https://stacks.math.columbia.edu/tag/0A21) expresses dimension by generic residue-field transcendence degrees. Here transcendence degree is the supremum of the sizes of finite algebraically independent subsets, meaning subsets satisfying no nonzero polynomial relation over the base field. The finitely many generic fields are finitely generated by F2. For the needed finite bound use the finite-generator specialization of [Stacks 030D, Lemma 9.26.3](https://stacks.math.columbia.edu/tag/030D): choose a maximal independent sublist of a finite generating list. For any other finite independent set, extend it inside its union with that generating list, again a finite set. Finite-basis comparison bounds its size by the length of the original list. This uses only finite selection and gives finite dimension.

For F7 import the zero-dimensional decomposition from [Stacks 06LH](https://stacks.math.columbia.edu/tag/06LH), and nilpotence of the maximal ideal from [Stacks 00J4, Lemma 10.53.4](https://stacks.math.columbia.edu/tag/00J4). Reducedness then identifies each local factor with its residue field.

For F4 import closed-subscheme factorization from [Stacks 0356](https://stacks.math.columbia.edu/tag/0356), and existence and uniqueness of generic points from [Stacks 01IS](https://stacks.math.columbia.edu/tag/01IS). The reduced closed subscheme construction itself is the declared local supplier in F4.

For F6 import [Stacks 01W0, Lemmas 29.42.4–29.42.7](https://stacks.math.columbia.edu/tag/01W0), checked at tags 01W3–01W6. For F8 import [Stacks 01TX(2)](https://stacks.math.columbia.edu/tag/01TX), with the finite-presentation definition on tag 01TO. The source records specify hypotheses and actual reading limits. These premises are imported; the covering argument below is locally authored.

## Proof

1.1 For every $X$, the reduction $X_{\mathrm{red}}\to X$ is a $J$-cover: take the abstract blowup family with closed center $X_{\mathrm{red}}$ and proper member $\varnothing$. Both open complements are empty, so the required actual isomorphism holds. Properness survives base change by F6. Complete decomposition also survives base change: given $x'\in X'$ above $x\in X$, a residue-field-preserving lift over $x$ gives a morphism $\operatorname{Spec}\kappa(x)\to Y$ over $X$ by F5. Compose with $\operatorname{Spec}\kappa(x')\to\operatorname{Spec}\kappa(x)$ and pair it with the canonical point of $X'$. The fibre-product property gives a $\kappa(x')$-valued point of $Y\times_X X'$ above $x'$, whose image has residue field $\kappa(x')$ by F5. Thus, once the assertion is proved for reduced targets, apply it to $Y\times_X X_{\mathrm{red}}\to X_{\mathrm{red}}$ and use local character along the reduction cover. It suffices to treat reduced targets. [F1, F4, F5, F6, construct]

1.2 Prove the assertion for reduced targets by induction on the finite integer $d=\dim X$. The empty case is immediate: the abstract blowup family with empty target and both members empty contains the identity of the empty scheme, and any map to the empty scheme is that identity. If $d=0$, F7 writes $X$ as a finite disjoint union of spectra of its residue fields. Complete decomposition and F5 give a section of $p$ on each of these components. The component sections glue over the disjoint union to a section over $X$. By F1 a map with a section covers, proving the base case. [F1, F3, F5, F7, given]

1.3 For the induction step, choose, for each of the finitely many generic points $\eta_i$ of reduced $X$, a lift $y_i\in Y$ whose induced residue-field map is an isomorphism. Let $X_i$ be the reduced component with generic point $\eta_i$, and $Y_i$ the reduced closed subscheme on $\overline{\{y_i\}}$. By continuity its image in $X$ is contained in $\overline{\{\eta_i\}}=|X_i|$, so the reduced-source factorization in F4 gives a morphism $Y_i\to X_i$. The closed immersion $Y_i\to Y$ followed by $p$ is proper by F6. Since $X_i\to X$ is a closed immersion and therefore separated, the relative properness clause of F6 makes $Y_i\to X_i$ proper. Both schemes are integral by F2 and F4. Their generic points are $y_i$ and $\eta_i$, and closed immersions preserve their residue fields by F4; the induced generic-field map is therefore the given isomorphism. Thus the morphism is birational in the precise sense of F2. Choose dense opens $V_i\subseteq X_i$ over which the entire inverse images are isomorphic by F2. Delete from $X$ the finite union of the closed sets $X_i\setminus V_i$ and $X_i\cap X_j$ for $i\ne j$, and call the remaining open $U$. It contains every $\eta_i$. Its intersections with the components are a disjoint clopen partition of $U$; their scheme structures agree with the restrictions of the $X_i$ because $U$ is reduced and reduced induced structures are unique by F4. Consequently $Y'=\coprod_iY_i\to X$ is an actual isomorphism over $U$, and is proper by F1 and F6. Let $Z$ be the reduced closed complement of $U$, supplied by F4. By the chain argument in F3, $\dim Z<d$. Thus $\{Y'\to X,Z\to X\}$ is an actual abstract blowup family. [F1, F2, F3, F4, F6, construct]

2.1 The base change $Y\times_XZ\to Z$ is completely decomposed proper by step 1.1 and covers by induction, since $Z$ is reduced of smaller dimension. For the sieve $R$ generated by $p$, its pullback to $Y'$ is maximal because $Y'\to X$ factors through $Y$. Its pullback to $Z$ is covering because it contains the covering sieve generated by $Y\times_XZ\to Z$. Local character along the abstract blowup family in step 1.3 makes $R$ covering. This proves the induction; step 1.1 then supplies all nonreduced targets. [F1, step 1.1, step 1.2, step 1.3]

3.1 Every generator of $J$ covers for the Nisnevich-plus-cdp topology by F1; conversely every cdp generator covers for $J$ by step 2.1, and the Nisnevich generators are common. Minimality of the two generated topologies proves equality. Only finitely many lifts and dense opens are selected in each finite-dimensional induction, so this local argument adds no arbitrary-index choice assumption; the imported inputs are used with their recorded hypotheses. [F1, step 2.1] ∎
