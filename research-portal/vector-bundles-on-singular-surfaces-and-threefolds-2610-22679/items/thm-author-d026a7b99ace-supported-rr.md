---
id: thm-author-d026a7b99ace-supported-rr
kind: theorem
title: External actual supported Riemann–Roch in codimension three
status: published
domain: mathematics
deps:
  - thm-author-d026a7b99ace-integral-field-model
  - math:def-axiom-of-choice
  - lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-closed-immersion-schemes
  - math:def-regular-sequence-on-a-module
  - math:def-locally-free-sheaf-finite-rank
  - math:def-perfect-field
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-affine-scheme
  - def-scheme-sites-and-sheafification
  - def-cohomology-with-support
  - math:lem-dual-locally-free-and-base-change
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:cor-algebraic-extensions-of-perfect-fields-are-separable
  - lem-author-59b1a831fe59-neighborhood
  - lem-koszul-point-support-class
  - math:def-finite-type-and-module-finite-algebras
  - math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - math:thm-noetherian-ring-quotients-and-localisations
  - thm-author-fc2380accb47-finite-type-geometric-input
dependency_roles:
  thm-author-d026a7b99ace-integral-field-model: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-regular-sequence-on-a-module: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  math:lem-dual-locally-free-and-base-change: mathematical-premise
  lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs: mathematical-premise
  math:cor-algebraic-extensions-of-perfect-fields-are-separable: mathematical-premise
  lem-author-59b1a831fe59-neighborhood: mathematical-premise
  lem-koszul-point-support-class: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct: mathematical-premise
  math:thm-noetherian-ring-quotients-and-localisations: mathematical-premise
  thm-author-fc2380accb47-finite-type-geometric-input: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Alberto Navarro, On the higher Riemann–Roch without denominators,
        arXiv:1901.09337v1
      url: https://arxiv.org/pdf/1901.09337v1
      locator: §1 pp.2–3, especially Example 1.1; §§2.1–2.2 p.4; Theorem 2.3 p.5,
        Definition 2.4 and §2.6 p.6, Theorem 2.7 p.7; Theorem 3.1 and Lemmas
        3.2–3.3 pp.7–8; §3.5 p.9
      statement: Example 1.1 and §§2.1–2.2 supply the represented KH/motivic objects,
        ordinary-to-KH comparison and positive-index supported Chern maps.
        Theorem 3.1 imports the general integral supported RR identity for a
        regular immersion and a in K_r(Z); the polynomial operation is
        interpreted before passage to higher homotopy groups. Theorem 2.3,
        Definition 2.4 and §2.6 supply the refined Gysin, forget-support,
        normalization and Thom constructions. The universal computations remain
        imported.
      hypotheses: Finite-dimensional noetherian schemes; a regular closed immersion of
        constant codimension d; q>0 and r≥0; a in ordinary K_r(Z), mapped to
        KH_r(Z) to evaluate the represented operations. HZ is the integral
        absolute motivic coefficient theory used in the paper, not a newly
        asserted singular-scheme Bloch comparison. The EM application is only to
        smooth finite-type pairs over a perfect field of arbitrary
        characteristic, under the separately declared Choice and universe
        hypotheses. The point application has pure ambient dimension three and
        q=d=3,r=0; the field need not be algebraically closed. No resolution
        hypothesis is added to Navarro’s imported theorem.
      reading_limits: "Retained prior authored source-reading record: opened the
        primary v1 PDF and read its finite-dimensional noetherian convention,
        Example 1.1, §§2.1–2.2, Theorem 2.3, Definition 2.4, §2.6, Theorem 2.7,
        Theorem 3.1 and its deformation argument including Lemmas 3.2–3.3, and
        the pointed-map/vanishing discussion in §3.5 (printed pp.2–9). This
        checks statements, types and the present application, not the deeper
        cited constructions or Jouanolou/Kondo–Yasuda computations. No
        whole-paper reading, reconstruction, fresh source-defect audit or
        acceptance is claimed. Fresh reading for adjudicate-f7b19ad2e4a5 was
        limited to the live v1 PDF §1 finite-dimensional Noetherian convention
        (printed p.2) and Theorem 3.1 with its opening ordinary-K-to-KH
        reduction (printed p.7). The generated item and the current local
        supplier interfaces were checked for the assigned Noetherian-scheme
        application gap. Earlier broader reading records above remain historical
        and confer no fresh reading or independent acceptance. Current
        adjudicate-4578f643487a reading checked the live v1 PDF convention in
        §1, Example 1.1, §§2.1–2.2, Theorem 2.3 and Theorem 3.1 with its opening
        K-to-KH reduction. The assigned repair adds an existing finite-type
        geometry supplier for ambient point codimension. No fresh reconstruction
        of the universal computations, independent acceptance or
        prerequisite-source defect audit is claimed."
    - title: Masanori Asakura and Kanetomo Sato, Chern Class and Riemann–Roch Theorem
        for Cohomology Theory without Homotopy Invariance, J. Math. Sci. Univ.
        Tokyo 26 (2019), 249–334
      url: https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf
      locator: §5, (5.3.1) and Definition 5.4(2), pp.270–271; opening of §6 and
        (6.0.1), p.272; §8 opening and Definition 8.3, pp.282–284; opening of §9
        before Theorem 9.1, p.285
      statement: The universal rank and Chern maps define a polynomial morphism into
        the weight object before applying higher homotopy. Formula (6.0.1) gives
        the 2j−r grading. The opening of §9 makes this map-level evaluation
        explicit and sets negative weight to zero. Section 8 allows
        integer-valued rank coefficients. Only this formal convention is used,
        retaining Navarro’s polynomial and normal-bundle signs.
      hypotheses: A graded cohomology theory and its actual universal rank/Chern maps
        and products must already be supplied. Here those are Navarro’s pointed
        motivic maps, with normal coefficients fixed on Z. This imports the
        formal map-level evaluation convention only. It neither imports
        Asakura–Sato Theorem 9.1 into a new scheme domain nor asserts
        unrestricted motivic admissibility or resolution of singularities in
        positive characteristic. Its polynomial indexing and odd-normal-variable
        signs are not silently identified with Navarro’s.
      reading_limits: "Retained prior authored source-reading record: read the primary
        PDF text at (5.3.1), Definition 5.4(2), the opening of §6 and (6.0.1),
        the coefficient convention at the opening of §8, Definition 8.3, and the
        polynomial morphism before Theorem 9.1 (printed pp.271–272,282–285);
        also read that theorem’s hypotheses to delimit the import. No
        application of their RR theorem, new motivic admissibility claim or
        reconstruction of its foundations is made. No identity of its
        odd-normal-variable signs with Navarro’s is asserted. Current
        adjudicate-4578f643487a reading checked Definition 5.4(2), the opening
        of §6 including (6.0.1), and the polynomial-map definition before
        Theorem 9.1 with that theorem’s scope. Only this formal map-level
        convention is used; earlier broader reading remains historical."
    - title: The Stacks Project, Regular ideal sheaves and regular immersions
      url: https://stacks.math.columbia.edu/tag/063M
      locator: Definition 31.21.2 (063D); Lemmas 31.21.3–31.21.4 (063E,063H);
        Definition 31.22.1 (063J); Lemmas 31.22.2 and 31.22.5 (063K,063M)
      statement: Regular immersions are locally defined by regular sequences and are
        quasi-regular. Their conormal sheaves are finite locally free. The proof
        of Lemma 31.21.4 identifies a basis of I/I² with the classes of the
        local defining sequence, giving rank d for a length-d regular sequence.
        The normal sheaf is its dual, with dual local freeness supplied
        separately.
      hypotheses: An immersion of schemes; regularity as defined by a locally regular
        ideal sheaf. Here the immersion is closed and the schemes are
        noetherian; constant codimension d means the local regular sequences
        have length d. The conormal conclusion uses regular⇒quasi-regular and
        Lemma 31.22.5.
      reading_limits: "Retained prior authored source-reading record: opened and read
        the listed primary Stacks definitions and lemmas, including the local
        conormal-basis argument in 063H and the reduction in 063M. The
        regular-sequence algebra is imported, not reconstructed. No audit of
        these prerequisite sources is claimed. Current adjudicate-4578f643487a
        reading checked the statements of 063E, 063H and 063M and the
        conormal-basis paragraph in 063H, solely for the current construction
        and rank application; no independent source audit is claimed."
dependency_level: 28
formulation_deps:
  - thm-author-d026a7b99ace-integral-field-model
  - math:def-axiom-of-choice
  - lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-closed-immersion-schemes
  - math:def-regular-sequence-on-a-module
  - math:def-locally-free-sheaf-finite-rank
  - math:def-perfect-field
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-affine-scheme
  - def-scheme-sites-and-sheafification
  - def-cohomology-with-support
  - math:lem-dual-locally-free-and-base-change
argument_deps:
  - thm-author-d026a7b99ace-integral-field-model
  - math:def-axiom-of-choice
  - lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport
  - def-cohomology-with-support
  - math:lem-dual-locally-free-and-base-change
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:cor-algebraic-extensions-of-perfect-fields-are-separable
  - lem-author-59b1a831fe59-neighborhood
  - lem-koszul-point-support-class
  - math:def-finite-type-and-module-finite-algebras
  - math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-perfect-field
  - math:def-smooth-morphism-schemes
  - math:def-closed-immersion-schemes
  - math:def-regular-sequence-on-a-module
  - thm-author-fc2380accb47-finite-type-geometric-input
---

## Statement
Let $i:Z\hookrightarrow V$ be a regular closed immersion of constant codimension $d$ between finite-dimensional noetherian schemes. Here finite-dimensional means that the lengths of strict chains of nonempty irreducible closed subsets are bounded. Regularity means that the ideal sheaf $I$ is locally generated near $Z$ by a regular sequence of length $d$. Its conormal sheaf $I/I^2$, regarded on $Z$, is finite locally free of rank $d$ by the imported regular-immersion input. Write $E^\vee=\mathcal H om_{\mathcal O_Z}(E,\mathcal O_Z)$ for the sheaf dual. The normal bundle $N=N_{Z/V}=(I/I^2)^\vee$ is finite locally free of rank $d$ by the dual-bundle supplier. Throughout this formulation a vector bundle is expressed by its finite locally free sheaf of sections; its geometric normal-bundle construction in the deformation argument is part of the cited input.

Write $K_r(S)$ for ordinary algebraic K-theory, $KH_r(S)$ for homotopy invariant K-theory, and $\kappa_r:K_r(S)\to KH_r(S)$ for the canonical comparison. Supported ordinary K-theory uses perfect complexes acyclic off the closed support; perfect means locally quasi-isomorphic to a bounded complex of finite locally free modules, and acyclic means that every cohomology sheaf is zero there. These are the ordinary K-theory objects of the imported construction, not an identification inferred from the notation for an EM restriction fiber. Write $H^{a,b}_{\mathrm M,T}(S,\mathbb Z)$ for cohomology with closed support $T$ represented by the integral absolute motivic coefficient spectrum $\mathbf H\mathbb Z$ used by Navarro; without a support subscript use ordinary represented cohomology. This does not assert a Bloch-complex comparison on singular schemes. The actual supported Chern maps $c^Z_{q,r}$ are induced by the pointed universal Chern maps and the comparison from ordinary supported K-theory. Distinguish the refined ordinary K pushforward $\bar i_K:K_r(Z)\to K_{r,Z}(V)$ from the refined motivic Gysin map $\bar i_H$, whose bidegree is $(2d,d)$.

For $d>0$ and $j=q-d\geq0$, let $p_N:\mathcal K_Z\to\mathcal E_j$ denote Navarro’s universal RR polynomial evaluated as a pointed map, where $\mathcal K_Z=\Omega^\infty KGL_Z$ represents $KH$ and $\mathcal E_j=\Omega^\infty\mathbf H\mathbb Z_Z(j)[2j]$. Form this map from the universal rank and positive Chern maps, with the ordinary classes $c_l(N)$ as fixed coefficients, using products in represented motivic cohomology. Rank-dependent coefficients are evaluated on the integer-valued rank map, componentwise; no division of a motivic class is intended. The polynomial has weighted degree $j$ and vanishes at the zero K-class, so the resulting map is pointed. Work in the pointed motivic homotopy category $\mathcal H_\bullet(Z)$ on the smooth Nisnevich site over $Z$, with $\mathbb A^1$ localization. Write $S^r$ for the $r$th simplicial sphere, the $r$-fold smash power of $\Delta^1/\partial\Delta^1$, with $S^0$ the pointed unit. Define $\mathcal P^d_{q,r}(a,N)$ by postcomposition of the class $\kappa_r(a)\in[S^r,\mathcal K_Z]_{\mathcal H_\bullet(Z)}$ with $p_N$. Its target $[S^r,\mathcal E_j]_{\mathcal H_\bullet(Z)}$ is $H^{2(q-d)-r,q-d}_{\mathrm M}(Z,\mathbb Z)$. For $q<d$ take this operation to be the zero element of $H^{2(q-d)-r,q-d}_{\mathrm M}(Z,\mathbb Z)$; for $d=0$ use $p_N=c_q$. For $r=0$ it is the usual evaluation $P_q^d(\operatorname{rk}(a),c_1(a),\ldots;c_1(N),\ldots)$. For $r>0$ the products are formed at the space level before passing to homotopy groups; the notation does not assign an integer rank to a higher K-class or multiply higher classes as though they had degree zero.

For every integer $q>0$, integer $r\geq0$ and $a\in K_r(Z)$, the imported supported Riemann–Roch identity is
$$c^Z_{q,r}(\bar i_K(a))=\bar i_H\bigl(\mathcal P^d_{q,r}(a,N)\bigr)\quad\text{in }H^{2q-r,q}_{\mathrm M,Z}(V,\mathbb Z).$$
Thus the shift by $-r$ occurs once, followed by Gysin’s shift $(2d,d)$.

For the EM application assume the Axiom of Choice and the compatible small scheme sites and universe bounds of the supplied constructions. Take $V$ smooth affine of pure dimension three and of finite type over a perfect field $k$, and let $Z=x$ be a smooth closed point. Pure dimension three means that every irreducible component has dimension three, and the point scheme is $\operatorname{Spec}k(x)$ with its residue field. With $q=d=3$ and $r=0$, the polynomial has no positive Chern or normal variables and is $P^3_3(\operatorname{rk}(a))$. Refined K pushforward of $1=[\mathcal O_x]$ is the positive residue-sheaf class; refined motivic pushforward of $1$ is the normalized fundamental point class, with divisor normalization and composition as in the source. Over the perfect field this denotes the refined Gysin image itself. Its literal reduced-cycle coordinate $+1$ in the EM model is used only in the algebraically closed specialization supplied by the Gysin-transport lemma. Forget-support maps commute with the positive-index universal Chern maps, and ordinary $K\to KH$ is compatible with them; on a regular pair it is an equivalence, also on support fibers.

## Statement references

[[thm-author-d026a7b99ace-integral-field-model]]

[[math:def-axiom-of-choice]]

[[lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:def-closed-immersion-schemes]]

[[math:def-regular-sequence-on-a-module]]

[[math:def-locally-free-sheaf-finite-rank]]

[[math:def-perfect-field]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-affine-scheme]]

[[def-scheme-sites-and-sheafification]]

[[def-cohomology-with-support]]

[[math:lem-dual-locally-free-and-base-change]]

## External input
Import Navarro’s Theorem 3.1, its represented K/motivic objects, positive-index supported Chern operations, and actual refined pushforwards with the hypotheses and reading limits in the first citation. The notation $\mathcal P^d_{q,r}$ makes the theorem’s higher operation explicit. Asakura–Sato supplies only the formal convention of evaluating the polynomial as a map before inducing the higher operation; its separate RR/admissibility hypotheses and normal-variable signs are not transferred. The regular-immersion/conormal input is the precise Stacks citation. These constructions and the supported identity remain external inputs, with no local proof claimed.

The numerical specialization of the universal polynomial belongs to the downstream coefficient helper, which uses this input and its projective-space calculation; that calculation is not a premise of this item. In the restricted smooth-point application described below, the retained workaround avoids the source’s defective Key formula, printed Thom expansion and unequal-rank stabilization sentence. The main supported RR theorem is an established input, not claimed reconstructed here. No counterexample to it follows from the separate background-display findings.

## Exact impact of the retained background errors
The deformation argument in Theorem3.1 uses the correctly printed general excess formula2′ of Theorem2.3, with its top excess Chern factor; this is the applicable version of the malformed Key formula. The argument uses the actual Thom top class $c_d(H)$ and its uniquely refined support class, not the inhomogeneous polynomial expansion in §2.6. Finally our closed support is a smooth point, so its normal bundle is a three-dimensional vector space, and its pullback along the deformation is trivial. The needed zero-section normalization is therefore the trivial-bundle case of Theorem2.7: compose the three Cartier zero sections and apply the correctly stated divisor normalization and functoriality. The false general unequal-free-rank stabilization criterion is not needed for that case. Thus the exact inputs to this restricted deformation/RR application are specified without reproducing any of those three false printed steps. The deeper Kondo–Yasuda/Jouanolou universal computations remain explicit external inputs, not locally reconstructed proofs.

## Exact EM application
For the smooth-point specialization, first check the geometric premises rather than infer regularity from the notation $x\hookrightarrow V$. Under the stated Choice assumption, [[lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs]] verifies the qcqs domain for $V$ and its opens. To check scheme-theoretic Noetherianity, take a finite affine open cover $V=\bigcup_{\alpha=1}^m\operatorname{Spec}A_\alpha$ with each $A_\alpha$ finitely generated over $k$, as provided by finite type and quasi-compactness. By [[math:def-finite-type-and-module-finite-algebras]], each $A_\alpha$ has a presentation $k[t_1,\ldots,t_{n_\alpha}]/J_\alpha$. The polynomial ring is Noetherian by [[math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]], and its quotient is Noetherian by [[math:thm-noetherian-ring-quotients-and-localisations]]. Thus this finite affine cover makes $V$ a Noetherian scheme by [[math:def-locally-noetherian-and-noetherian-scheme]]. The perfect-field convention of [[math:def-perfect-field]] implies the all-algebraic-extensions convention used by the Koszul supplier, by [[math:cor-algebraic-extensions-of-perfect-fields-are-separable]]. Apply [[lem-author-59b1a831fe59-neighborhood]] to the pure-three-dimensional smooth $V$ at $x$: the residue field $L=\kappa(x)$ is finite separable over $k$. Its Proof 2.1 also verifies that $\operatorname{Spec}L$ is smooth of finite type over $k$. For codimension in the original ambient $V$, apply the componentwise finite-type dimension input [[thm-author-fc2380accb47-finite-type-geometric-input]], specifically its imported Stacks Lemma 33.20.3(4). For each irreducible component $C$ of $V$ containing $x$, extend the chain $\{x\}\subseteq C$ to a maximal irreducible-closed chain. As $x$ is closed, this chain starts at $\{x\}$, and every such maximal chain has length $\dim C=3$. Here codimension in a component is the supremum of lengths of these chains. Thus $\{x\}$ has codimension three in every containing component of the original $V$. The local-ring dimension form of the same input gives $\dim\mathcal O_{V,x}=3$: chains through the closed point lie in containing components, and their prime chains compute this local dimension. This applies directly to the stated finite-type ambient $V$. The field $L$ is Noetherian by the same polynomial-ring lemma with field $L$ and zero variables. Its one-chart affine scheme $\operatorname{Spec}L$ is therefore Noetherian by the declared scheme definition. Apply [[lem-koszul-point-support-class]] to $V$: the ideal of $x$ is locally generated by a regular sequence whose germs form a regular system of parameters in $\mathcal O_{V,x}$, and its residue sheaf is the parameter-independent perfect object resolved by that Koszul complex. A regular system of parameters has length equal to the local-ring dimension, so this sequence has length three. Thus this is a regular closed immersion of codimension three between smooth finite-type schemes. The ambient dimension is three by purity, and the point scheme has dimension zero; scheme-theoretic Noetherianity of both was checked above. These checks discharge the geometric hypotheses of the imported RR theorem and of the declared smooth coefficient and Gysin comparisons, with no algebraic-closedness restriction added to this specialization.

[[thm-author-d026a7b99ace-integral-field-model]] identifies the actual positive-index Chern maps before taking support fibers, and [[lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport]] identifies the refined smooth Gysin map and positive point class under that specified integral coefficient comparison. The EM supported group is the actual restriction fiber $H^{6,3}_{\mathrm{mot},x}(V,\mathbb Z)$ of [[def-cohomology-with-support]]. The inherited Choice premise, [[math:def-axiom-of-choice]], and the compatible site and universe conventions of [[def-scheme-sites-and-sheafification]] belong to this EM/smooth-model application; Navarro’s general theorem retains its stated hypotheses. All background-source qualifications above remain in force.
