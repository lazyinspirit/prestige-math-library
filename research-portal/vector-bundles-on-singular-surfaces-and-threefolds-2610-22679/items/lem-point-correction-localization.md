---
id: lem-point-correction-localization
kind: lemma
title: Removing isolated points from the support
status: published
domain: mathematics
deps:
  - lem-bertini-support-reduction
  - prop-smooth-point-excision-purity
  - lem-smooth-point-motivic-purity
  - lem-smooth-point-filtration
  - def-smooth-point-filtration
  - def-motivic-filtration
  - def-cohomology-with-support
  - prop-motivic-graded-spectral-sequence
  - lem-filtered-support-exactness
  - prop-perfect-k-localization-input
  - lem-open-excision-for-support-fibers
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-80f982ded420-clopen-filtered-products
  - lem-author-80f982ded420-dimension-weight-scope
  - math:def-axiom-of-choice
  - def-article-conventions
  - def-nonconnective-k-spectrum-interface
  - def-stable-spectra-interface
  - math:def-open-immersion-schemes
  - lem-fiber-sequence-homotopy-exactness
  - lem-adjudicate-febd1cc3219d-finite-type-field-qcqs
  - lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points
  - lem-author-80f982ded420-normal-point-strata
  - lem-adjudicate-d5306176fce5-coherent-realization
  - def-nisnevich-covering-interface
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:def-morphism-of-schemes
  - math:def-sheaf-on-topological-space
dependency_roles:
  lem-bertini-support-reduction: mathematical-premise
  prop-smooth-point-excision-purity: mathematical-premise
  lem-smooth-point-motivic-purity: mathematical-premise
  lem-smooth-point-filtration: mathematical-premise
  def-smooth-point-filtration: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  prop-motivic-graded-spectral-sequence: mathematical-premise
  lem-filtered-support-exactness: mathematical-premise
  prop-perfect-k-localization-input: mathematical-premise
  lem-open-excision-for-support-fibers: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  lem-author-80f982ded420-clopen-filtered-products: mathematical-premise
  lem-author-80f982ded420-dimension-weight-scope: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-article-conventions: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  lem-fiber-sequence-homotopy-exactness: mathematical-premise
  lem-adjudicate-febd1cc3219d-finite-type-field-qcqs: mathematical-premise
  lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points: mathematical-premise
  lem-author-80f982ded420-normal-point-strata: mathematical-premise
  lem-adjudicate-d5306176fce5-coherent-realization: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF pp. 15–16, proof of Theorem 6.7, cocartesian square and point
        correction
      reading_limits: Read the frozen extraction and inspected the supplied PDF images
        of pp. 15–16, including the diagrams, purity assertion and correction.
        The componentwise extension and stage comparison below are local
        compositions of declared suppliers. Their external foundational proofs
        were not reread or reconstructed.
      statement: The localization diagram for the finite smooth points outside the
        curve has integer point generators, and exactness gives a point-class
        correction whose restriction to the curve complement vanishes while
        remaining in the third motivic image piece.
      hypotheses: The proof of Theorem 6.7 considers a normal affine threefold over an
        algebraically closed field, its rank-three representative, and the
        curve-and-point support from the two Bertini applications. The
        disconnected extension and explicit Choice/size contract here are local
        adaptations.
    - title: Jacob Lurie, Higher Topos Theory (Princeton University Press, 2009)
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Corollaries 5.1.2.3–5.1.2.4, printed p. 319; Section 5.1.5 opening and
        Lemmas 5.1.5.2–5.1.5.3, printed pp. 324–326 (PDF indices 336, 341–343).
      statement: Space-valued presheaves admit pointwise colimits; Yoneda represents
        evaluation; every presheaf is the canonical colimit of representables
        over its category of elements.
      hypotheses: A small source category, spaces in a compatible larger universe, and
        diagrams small there. Apply to the size-bounded scheme category and a
        set-valued covering sieve viewed in spaces.
      reading_limits: Freshly read these primary PDF passages, including the displayed
        proofs of the two lemmas. Antecedent model-category and Kan-extension
        foundations remain imported. The binary-open and filtered applications
        here are local.
dependency_level: 33
formulation_deps:
  - lem-bertini-support-reduction
  - def-smooth-point-filtration
  - def-motivic-filtration
  - def-cohomology-with-support
  - lem-author-80f982ded420-dimension-weight-scope
  - math:def-axiom-of-choice
  - def-article-conventions
  - def-nonconnective-k-spectrum-interface
  - def-stable-spectra-interface
  - math:def-open-immersion-schemes
argument_deps:
  - lem-bertini-support-reduction
  - prop-smooth-point-excision-purity
  - lem-smooth-point-motivic-purity
  - lem-smooth-point-filtration
  - def-smooth-point-filtration
  - def-motivic-filtration
  - def-cohomology-with-support
  - prop-motivic-graded-spectral-sequence
  - lem-filtered-support-exactness
  - prop-perfect-k-localization-input
  - lem-open-excision-for-support-fibers
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-80f982ded420-clopen-filtered-products
  - lem-author-80f982ded420-dimension-weight-scope
  - math:def-axiom-of-choice
  - def-article-conventions
  - def-nonconnective-k-spectrum-interface
  - def-stable-spectra-interface
  - lem-fiber-sequence-homotopy-exactness
  - lem-adjudicate-febd1cc3219d-finite-type-field-qcqs
  - lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points
  - lem-author-80f982ded420-normal-point-strata
  - lem-adjudicate-d5306176fce5-coherent-realization
  - def-nisnevich-covering-interface
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:def-open-immersion-schemes
  - math:def-morphism-of-schemes
  - math:def-sheaf-on-topological-space
---

## Statement
Assume the Axiom of Choice and the site and universe bounds of the cited filtration and support constructions. Let $k$ be algebraically closed, let $X$ be a normal affine finite-type $k$-scheme of dimension three, and let $\alpha\in F^3_{\mathrm{mot}}K_0(X)$. Choose $P,S,C,T$ as in the curve-and-point support reduction: $\alpha=[P]-[\mathcal O_X^3]$, $S$ is a finite set of smooth closed points on the three-dimensional components, $C$ is the reduced closure of the componentwise curve constructed there, $T=C\cup S$, and $\alpha$ restricts to zero on $X\setminus T$. Put $D=S\setminus C=\{y_1,\ldots,y_r\}$, allowing $D=\varnothing$.

The square of open immersions
$$\begin{matrix}X\setminus T&\longrightarrow&X\setminus C\\\downarrow&&\downarrow\\X\setminus D&\longrightarrow&X\end{matrix}$$
is cartesian and cocartesian. The actual localization and restriction maps form a commutative diagram with exact rows
$$\begin{matrix} \bigoplus_{i=1}^r\mathbb Z&\xrightarrow{f}&K_0(X)&\longrightarrow&K_0(X\setminus D)\\ \Vert&&\downarrow i&&\downarrow\\ \bigoplus_{i=1}^r\mathbb Z&\xrightarrow{g}&K_0(X\setminus C)&\xrightarrow{j}&K_0(X\setminus T). \end{matrix}$$
The two copies of the direct sum identify with the respective supported $K_0$ groups by actual restriction and point dévissage; the $i$th basis vector maps under $f$ to $[\kappa(y_i)]$. Moreover, for both pairs the actual map from the third supported filtration stage to supported $K$ induces an isomorphism on $\pi_0$.

There is $a\in\bigoplus_i\mathbb Z$ with $i(\alpha)=g(a)$. Thus $\beta=\alpha-f(a)$ restricts to zero in $K_0(X\setminus C)$, and $f(a)$ belongs to the zero-extended top-dimensional smooth-point subgroup $F^3_{\mathrm{sm,top}}K_0(X)\subseteq F^3_{\mathrm{mot}}K_0(X)$. Consequently $\beta$ belongs to the kernel of the natural restriction $F^3_{\mathrm{mot}}K_0(X)\to F^3_{\mathrm{mot}}K_0(X\setminus C)$. If $X$ is pure three-dimensional, the top-dimensional subgroup is the smooth-point subgroup $F^3_{\mathrm{sm}}K_0(X)$ defined by smooth-point classes.

Here $K_0$ is zeroth homotopy of nonconnective perfect-complex $K$-theory, and $K(A/B)$ is the fiber of restriction $K(A)\to K(B)$. Its supported third stage is the corresponding fiber at stage $F^3_{\mathrm{mot}}K$. The image filtration $F^3_{\mathrm{mot}}K_0$ is the image of that stage in $K_0$. The top-dimensional smooth-point subgroup is generated by the residue-sheaf classes of smooth closed points on the three-dimensional clopen components, extended by zero to $X$. No point on a lower-dimensional component is included merely because it is smooth.

Here algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$. Normal means that every local ring is an integrally closed domain. Affine finite type means $X=\operatorname{Spec}A$ for a finitely generated $k$-algebra $A$. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets; irreducible means nonempty and not the union of two proper closed subsets. Pure dimension three means that every irreducible component has dimension three. Clopen means open and closed. A smooth point has a neighbourhood smooth over $k$; a closed point has closed singleton. A vector bundle of rank three is locally $\mathcal O_X^3$, and a perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves. The residue field is $\kappa(y)=\mathcal O_{X,y}/\mathfrak m_y$, and its residue sheaf is supported at $y$. A finite direct sum of copies of $\mathbb Z$ is the group of integer tuples with coordinatewise addition. An open immersion identifies its source with an open subscheme carrying the restricted structure sheaf. Cartesian means a fiber product of schemes; cocartesian means a pushout characterized by unique gluing of compatible morphisms. All spectral fibers and diagrams are coherent homotopy fibers and diagrams in the specified stable category. Choice means that every family of nonempty sets admits a choice function; sufficiently large compatible universes for the supplied constructions are separately assumed.

## Statement references
[[lem-bertini-support-reduction]]

[[def-smooth-point-filtration]]

[[def-article-conventions]]

[[def-nonconnective-k-spectrum-interface]]

[[def-stable-spectra-interface]]

[[math:def-open-immersion-schemes]]

## Facts & Assumptions
**Given:** The field, scheme, class, support data, Choice and size bounds in the statement. All opens and support complements used below carry the restricted scheme structures; their qcqs hypotheses and the perfectness of the field are checked in [F5].

**Goal:** Establish the actual finite-support localization diagram, the supported third-stage comparison, and the correction without assuming either support-to-global map injective.

[F1] [[lem-bertini-support-reduction]] supplies the stated data, including $T=C\cup S$, the location of $S$ on three-dimensional components, and $\alpha|_{X\setminus T}=0$. Its componentwise construction applies to disconnected $X$ and uses Choice.

[F2] [[prop-perfect-k-localization-input]] gives natural localization, Mayer–Vietoris and supported open excision for these qcqs schemes and opens. [[prop-smooth-point-excision-purity]] identifies the actual supported $K_0$ at each smooth closed point with $\mathbb Z$, with positive generator the supported residue-sheaf class and with its stated global image.

[F3] [[def-motivic-filtration]], [[def-cohomology-with-support]], [[prop-motivic-graded-spectral-sequence]] and [[lem-filtered-support-exactness]] give the natural supported tower, stage-zero $K$, and its graded restriction fibers. [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies the derived Nisnevich sheaves underlying each motivic graded term, with the covering-sieve descent condition. [[lem-adjudicate-d5306176fce5-coherent-realization]] realizes whole coherent derived diagrams, preserving limits, zero objects, fibers and shifts. It is the same underlying-spectrum realization as in the graded comparison, up to the specified natural equivalence of inverse data. [[lem-open-excision-for-support-fibers]] then applies once the relevant stage square is proved cartesian. [[lem-smooth-point-motivic-purity]] makes every homotopy group of each supported graded term of weight $0,1,2$ vanish at a smooth point of a pure three-dimensional scheme.

[F4] [[lem-author-80f982ded420-clopen-filtered-products]] gives the actual stagewise finite clopen product decomposition. [[lem-smooth-point-filtration]] gives the point-supported stage-three surjection in the pure case. [[lem-author-80f982ded420-dimension-weight-scope]] identifies the zero-extended top-dimensional point subgroup and its containment in the third image filtration; [[def-smooth-point-filtration]] gives the pure-dimensional convention. The filtration is natural for restriction by [[def-motivic-filtration]]. [[lem-author-80f982ded420-normal-point-strata]] supplies the finite clopen dimension strata, with the nonempty three-dimensional stratum pure of dimension three.

[F5] [[lem-adjudicate-febd1cc3219d-finite-type-field-qcqs]] makes every open of this finite-type scheme quasi-compact and qcqs. [[math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]] makes $k$ perfect. [[lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points]] verifies that clopen unions such as $X_3$ remain normal affine finite type and qcqs. [[def-article-conventions]] supplies the field, scheme, dimension, bundle and residue-field conventions; normality and the other stated conventions are also defined inline. [[def-nonconnective-k-spectrum-interface]] fixes the perfect-complex spectrum and its object classes.

[F6] [[def-stable-spectra-interface]] supplies coherent limits, fibers, cofibers, shifts, the homotopy groups, and detection of equivalences by all integer homotopy groups. [[lem-fiber-sequence-homotopy-exactness]] gives the natural long exact sequences. Finite limits commute by their mapping-space universal properties. Mapping a shifted sphere into a product identifies its homotopy groups with the products of the homotopy groups; for finitely many abelian groups a product is their direct sum.

[F7] [[math:def-open-immersion-schemes]] identifies open immersions with restricted open subschemes. [[math:def-morphism-of-schemes]] defines scheme maps by continuous maps and sheaf maps local on stalks, and [[math:def-sheaf-on-topological-space]] gives unique gluing. [[def-nisnevich-covering-interface]], Justification 2.1, makes every open cover a Nisnevich cover. For the size-bounded category $\mathcal C_k$ of [F3], let $h_A(B)=\operatorname{Hom}_k(B,A)$, viewed as a discrete-space presheaf. Reference 1 supplies pointwise presheaf colimits, Yoneda evaluation and presheaf density. In particular for a sieve $R$ and space-valued presheaf $Q$ it gives $\operatorname{Map}(R,Q)\simeq\lim_{(B\to X)\in R^{\mathrm{op}}}Q(B)$. The category of elements consists of the arrows in $R$, with commuting triangles as morphisms; its nerve and diagrams are small in the fixed larger universes.

## External input
Reference 0 records the original localization-and-correction passage; the nonpure extension and the proof below are local applications of declared suppliers. Reference 1 imports only the presheaf facts in [F7]. The derivation of binary-open descent and its application to the actual graded and filtered spectra are proved locally below. No reconstruction of the imported categorical or motivic foundations is claimed.

## Proof
1.1 Since $D=S\setminus C$ and $T=C\cup S=C\cup D$, the upper-left open is $(X\setminus C)\cap(X\setminus D)$ and the other two opens cover $X$. An arbitrary scheme map whose image lies in an open factors uniquely through that restricted open subscheme, giving the fiber-product universal property for the intersection. Compatible maps from two covering opens glue their continuous underlying maps; for every target open, their sheaf maps glue uniquely on the corresponding open preimages by the sheaf axiom. The stalk maps remain local since they are the given local maps on either neighbourhood. This gives a unique scheme map, proving the pushout universal property. Thus the displayed square is cartesian and cocartesian. All four opens are qcqs by [F5]. [F1, F5, F7, given]

2.1 Apply localization to $D\subset X$ and to the same closed set $D\subset X\setminus C$. It is closed in the latter because $D$ is a finite set of closed points and is disjoint from $C$. Open excision identifies the two supported spectra by actual restriction, compatibly with their maps to the ambient spectra. The long exact homotopy sequences of [F6] give the two exact rows and the commutative square of maps. [F2, F6, step 1.1]

3.1 For disjoint finite closed subsets $A,B\subset X$, apply Mayer–Vietoris to $X=(X\setminus A)\cup(X\setminus B)$ with intersection $V=X\setminus(A\cup B)$. Taking the fiber of its pullback over the zero of $K(V)$ gives the product of the fibers of $K(X\setminus A)\to K(V)$ and $K(X\setminus B)\to K(V)$. By open excision these are respectively the $B$- and $A$-support fibers on $X$. The universal properties identify their coordinate maps with the natural inclusions of supports. Iterating, including the empty case whose support fiber is the fiber of an identity, identifies $K_D(X)$ with the finite product of its one-point support spectra. By [F6], its $\pi_0$ is the direct sum of their $\pi_0$ groups. Point dévissage in [F2] makes each group $\mathbb Z$, with inverse generator mapping to the residue-sheaf class. Open excision gives the same identification on $X\setminus C$ and preserves the generators and global maps. This proves the displayed diagram and its normalization. [F2, F6, step 2.1]

4.1 We first prove binary-open descent for each weight complex $M_q$ in [F3]. For any cover $A=U\cup V$ by the opens used here, put $W=U\cap V$ and let $R\subset h_A$ be the generated sieve. By [F7], $R(B)$ is the union of $h_U(B)$ and $h_V(B)$ inside $h_A(B)$, with intersection $h_W(B)$. This union is their homotopy pushout in spaces: a common element gives a single interval connecting its two copies, and an element on only one side gives a point; every component is contractible. Pointwise colimits in [F7] therefore identify $R=h_U\sqcup_{h_W}h_V$ as presheaves. For any test complex $L$, the presheaf $Q_L(B)=\operatorname{Map}(L,M_q(B))$ has covering-sieve descent by [F3], since mapping out preserves limits. The formula in [F7] and Yoneda evaluation identify $Q_L(A)$ with $Q_L(U)\times_{Q_L(W)}Q_L(V)$. For every $L$ this is the mapping-space universal property of the derived pullback, so the actual derived restriction square is cartesian. The realization and shift in [F3] preserve this pullback, giving binary-open descent for the actual graded spectra. Stage zero has it by [F2]. For any coherent square of spectra, define its total fiber as the fiber of the map from the upper-left vertex to the pullback of the other three; it is zero exactly when the square is cartesian. Finite-limit commutation in [F6] shows that total fibers carry a triangle of squares to a fiber sequence. Apply this to the natural stage triangle in [F3]: if the total fibers at stage $q$ and weight $q$ vanish, so does that at stage $q+1$. Induction for $q=0,1,2$ proves the required stagewise Mayer–Vietoris. Its fiber constructions, with conditional excision from [F3], repeat step 3.1 and split the supported stages and their actual augmentations into the one-point factors. [F2, F3, F6, F7, step 1.1, step 3.1]

5.1 Let $y\in D$. The repaired interface [F1] puts it on a three-dimensional clopen component. The dimension-stratum interface [F4] makes their union $X_3$ pure three-dimensional, and [F5] verifies its normal affine finite-type and qcqs hypotheses over the perfect field. The stagewise clopen product equivalence identifies the support tower at $y$ on $X$ with that on $X_3$: the other component contributes the fiber of an identity map. On $X_3$, [F3] makes the supported graded spectra in weights $0,1,2$ contractible by [F6], since all their integer homotopy groups vanish. The shifted support indexing is the convention in [F3], so the every-degree vanishing applies to every spectral homotopy group. The supported graded triangles therefore make the transitions from stage three to stage zero equivalences. Stage zero is supported $K$. Thus the actual one-point stage-three map is an equivalence. By step 4.1, so is the map for the finite set $D$ on $X$; the analogous map on $X\setminus C$ follows by stagewise open excision from its Mayer–Vietoris square. Taking $\pi_0$ proves the two stated isomorphisms. [F1, F3, F4, F5, F6, step 4.1]

6.1 By [F1], $j(i(\alpha))=\alpha|_{X\setminus T}=0$. Exactness of the lower row gives an element $a$ with $i(\alpha)=g(a)$. Commutativity gives $i(f(a))=g(a)$, hence $i(\beta)=0$. By step 3.1, $f(a)$ is a finite integral combination of residue classes at points of $D$; every such point is smooth and lies on a three-dimensional component. Therefore [F4] puts $f(a)$ in $F^3_{\mathrm{sm,top}}K_0(X)$ and hence in $F^3_{\mathrm{mot}}K_0(X)$. Since this is a subgroup, $\beta$ lies in it too. Natural restriction of the image filtration then makes its vanishing in ambient $K_0(X\setminus C)$ exactly the asserted kernel condition. For pure $X$, [F4] identifies the point subgroup with $F^3_{\mathrm{sm}}$. No injectivity of $f$ or $g$ is used. [F1, F4, step 3.1, step 5.1] ∎

## Reading limits
Read the assigned current body, the necessary supplier and direct-consumer bodies, and the added exact local/library interfaces. The point-location statement repair uses the supplier’s existing step 2.2. The assigned statement gains explicit conventions and reference placement while preserving its claims; thm-smooth-point-generation and lem-lift-curve-supported-filtration remain compatible with that interface. The supplier’s direct consumers are these same two items and the assigned item. Historical external readings in unchanged suppliers were not repeated. This is a generated-content repair proposal, without independent rejudgment, audit or publication credit.
