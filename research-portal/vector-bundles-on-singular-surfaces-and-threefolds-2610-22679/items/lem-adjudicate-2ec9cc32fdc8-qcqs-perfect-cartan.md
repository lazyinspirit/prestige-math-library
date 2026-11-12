---
id: lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan
kind: lemma
title: Coefficientwise perfect Cartan on every qcqs field-scheme
status: published
domain: mathematics
deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - thm-author-3cde9692a7e9-universal-grass-input
  - prop-chern-whitney-identities
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-motivic-cohomology
  - math:def-field
  - math:def-scheme-over-base
  - lem-consumer-da2bbd48d3ba-binary-k-stack-detection
  - lem-adjudicate-f8fe44ed7b70-binary-affine-extension
  - thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input
dependency_roles:
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  thm-author-3cde9692a7e9-universal-grass-input: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  lem-author-32887006bdff-actual-orientation: mathematical-premise
  lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  lem-consumer-da2bbd48d3ba-binary-k-stack-detection: mathematical-premise
  lem-adjudicate-f8fe44ed7b70-binary-affine-extension: mathematical-premise
  thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 25
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated 14 April 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Conventions 2.1–2.2, pp. 14–15; Lemma 3.2.3, p. 23; Definition 4.4.1,
        Lemmas 4.4.3–4.4.4, Corollary 4.4.5, Theorem 4.4.6 and Corollary 4.4.7,
        pp. 30–32; Lemmas 3.3.4–3.3.5, p. 24; §5.1.1–5.1.4, pp. 33–34,
        especially the displayed mapping equivalences in the proof of Theorem
        5.1.4
      source_sha256: ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
      hypotheses: Qcqs derived base and compatible universes; a multiplicative
        presentable coefficient category defined over that base, retaining
        compact generation and preservation of filtered colimits by
        projective-line cotensor where fundamental stability is used; a
        homotopy-commutative oriented motivic E1-ring satisfying PBF, and a
        homotopy-cocommutative coring for the coring formulas. Theorem 4.4.6
        uses elementary-excision localization. The declared actual EM model,
        orientation and universal-coordinate supplier discharge the application
        conditions; the latter separately proves the EM bounded-weight and
        rank-limit assertions. No A1-invariance, transfer or resolution
        hypothesis is added. For the K-stack mapping comparison, M is an
        E-module in the elementary-blowup-excision localization. Here M is the
        weight-i shift of the actual oriented PBF spectrum; F7 verifies excision
        and the coefficient compactness and multiplicativity hypotheses using
        the declared suppliers.
      reading_limits: "Historical reading record from the incoming generated item (not
        fresh credit for this repair): Fresh reading in this assignment: live
        author PDF extraction at Lemma 3.2.3; Definition 4.4.1, Lemmas
        4.4.3–4.4.4, Corollary 4.4.5, Theorem 4.4.6 and its displayed proof,
        Corollary 4.4.7; also §§2.2.6–2.2.10, §§3.3.1–3.3.5 and §5.1.1–5.1.4
        with the displayed mapping-space argument. The original declared
        supplier bodies and the ordinary binary comparison were read for their
        exact applications. The recorded cached digest is historical and is not
        freshly authenticated. The coordinate and stabilization premises remain
        supplied by the declared items; AI22, lifting and categorical
        foundations are not reconstructed or independently accepted. Current
        repair: read the live PDF text at §§2.1–2.2.6, §§3.3.1–3.3.5 and
        §5.1.1–5.1.4 for the newly explicit PBF-to-excision and rank-reduction
        applications. Page-image requests did not provide inspectable images.
        All current direct supplier interfaces and relevant argument passages
        were checked; no independent acceptance is claimed."
      statement: For an oriented motivic ring with PBF over a qcqs derived base, the
        projective-bundle relation defines higher Chern classes on stacks. Lemma
        4.4.3 gives Whitney on smooth test schemes. Lemma 4.4.4 gives the finite
        Grassmannian class-power equivalence indexed by sum(alpha_j)<=N-n, with
        Chern weight sum(j alpha_j). Corollaries 4.4.5 and 4.4.7 identify
        infinite Grassmannian and vector-bundle-stack cohomology with completed
        Chern coordinates, also with homotopy-cocommutative coring coefficients.
        Theorem 4.4.6 is a comparison after elementary-excision localization.
        These are used through the declared actual-model and
        universal-coordinate suppliers; perfect Cartan and EM rank stabilization
        are local consequences, not statements attributed to this source. Lemmas
        3.3.4–3.3.5 give the oriented PBF/excision equivalence; the proof of
        Theorem 5.1.4 gives the reduced K-stack mapping comparison. These
        additional premises are used through the mapping-and-extension supplier
        in F7.
formulation_deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - thm-author-3cde9692a7e9-universal-grass-input
  - prop-chern-whitney-identities
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-motivic-cohomology
  - math:def-field
  - math:def-scheme-over-base
  - lem-consumer-da2bbd48d3ba-binary-k-stack-detection
  - lem-adjudicate-f8fe44ed7b70-binary-affine-extension
argument_deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - thm-author-3cde9692a7e9-universal-grass-input
  - prop-chern-whitney-identities
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-motivic-cohomology
  - lem-consumer-da2bbd48d3ba-binary-k-stack-detection
  - lem-adjudicate-f8fe44ed7b70-binary-affine-extension
  - thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input
---

## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds of the supplied constructions. Let $k$ be any field and $X$ any qcqs $k$-scheme. Write $P$ for the actual perfect K-space presheaf and $P^{\rm sh}$ for its ordinary sheafification on the smooth qcqs Nisnevich site. Put $D_i=\mathbb Z(i)_{\rm mot}$ and $Y_i(T)=\Omega^\infty H(D_i(T)[2i])$. The specified universal operations $C_i^{\rm ord}:P^{\rm sh}\to Y_i$ are those of the actual universal construction before hypercompletion. Their further stalkwise localizations are $C_i:\mathcal K\to K(D_i,2i)$, where here $\mathcal K$ and $K(D_i,2i)$ denote the corresponding hypercompleted source and coefficient target. Put $C_0^{\rm ord}=C_0=1$. For every $i\geq1$, the ordinary operations satisfy the coefficientwise Cartan identity, and so do their localizations:
$$C_i^{\rm ord}\circ\mu\simeq\sum_{a+b=i}\cup\circ(C_a^{\rm ord}\times C_b^{\rm ord}),\qquad C_i\circ\mu\simeq\sum_{a+b=i}\cup\circ(C_a\times C_b).$$
Here $\mu$ is K-space addition and the sum and cup products are those of the respective supplied coefficient targets. Compose the ordinary operations with the canonical source unit from the global perfect K-space and take components in the original coefficient values. The series
$$c_t^{\rm perf}(x)=1+\sum_{i\geq1}c_i(x)t^i$$
is a natural group homomorphism from $K_0(X)=\pi_0K_{\rm Perf}(X)$ to multiplicative formal series with coefficient of $t^i$ in $H^{2i,i}_{\rm mot}(X,\mathbb Z)$. This asserts coefficientwise homotopies and formal-series identities, without claiming a chosen coherent map of total-series objects. The scope includes nonnoetherian and nonseparated qcqs schemes, with no dimension bound.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the compatible size bounds in the Statement. They are used through the actual universal, coefficient, comparison and extension constructions in [F1]–[F4] and [F7]–[F8] at steps 1.1–2.1; finite coefficient algebra adds no further choice principle.

[F1] [[thm-author-d026a7b99ace-universal-chern-space]] supplies the actual stable universal projective-relation classes and their coherent perfect operations on all qcqs schemes over the prime field. Its Proof 1.1 constructs each positive operation by composing a reduced K-stack map with rank reduction, then extending from smooth affines; thus it is independent of trivial rank before localization. Its ordinary sheafified source unit gives the original global coefficients. Further hypercompletion gives its separately specified local-model operation.

[F2] [[thm-author-3cde9692a7e9-universal-grass-input]] supplies the actual Vect/Grass coordinate comparison on one and two classifying stacks. For the supplied EM model it proves stabilization of mapping homotopy degrees zero and one at each fixed target weight, using all-degree negative-weight vanishing. Its current proof explicitly covers arbitrary qcqs field bases.

[F3] [[prop-chern-whitney-identities]] supplies Whitney for actual bundles on every qcqs field-scheme, including each finite Grassmannian product over $X$. [[lem-author-32887006bdff-em-p1-model]] and [[lem-author-32887006bdff-actual-orientation]] supply the same actual product, linear Picard orientation and PBF over $X$ used in [F1]–[F2].

[F4] [[lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection]] supplies the actual qcqs local free-class arrow, its product, compatibility with addition, and detection for maps to the actual derived Eilenberg targets. Its target is the further localized coefficient model. It is used to identify the local-model convention, not to identify hypercompleted sections with the original coefficient values. No global bundle-presentation assumption is used.

[F5] Formulation conventions are fixed as follows. The field has the meaning of [[math:def-field]]. The qcqs condition means quasi-compact and quasi-separated, in the sense of [[math:def-quasi-compact-and-quasi-separated-scheme]], and $X/k$ includes its specified morphism to $\operatorname{Spec}k$, as in [[math:def-scheme-over-base]]. The complexes and groups are those of [[def-motivic-cohomology]]: $D_i=\mathbb Z(i)_{\rm mot}$ and $H^{a,i}_{\rm mot}(Y,\mathbb Z)=H^a(D_i(Y))$ for $i\geq0$. The local source $\mathcal K$, its perfect-space unit and the rank translation are exactly those of [F1] and [F4] on the smooth qcqs Nisnevich site, with their common stalkwise local homotopy convention. Before hypercompletion the target is the actual sheaf $Y_i=\Omega^\infty H(D_i[2i])$ of [F1], with $\pi_0Y_i(T)=H^{2i}(D_i(T))$. The notation $K(D_i,2i)$ in the Statement denotes its further stalkwise local replacement. The ordinary and hypercomplete targets are kept distinct. In [F2], $BGL_n=\mathrm{Vect}_{n,X}$ is the stack of rank-$n$ bundles and isomorphisms; its universal bundle pulls back to the classified bundle, $G(n,N)$ classifies rank-$n$ quotients of $\mathcal O_X^N$, and $BGL=\operatorname{colim}_nBGL_n$ uses addition of a trivial line. Block sum classifies direct sum. These are the actual classifying objects and maps of [F2], rather than their sets of components.

[F6] Write $R_X=\bigoplus_{i\geq0}H^{2i,i}_{\rm mot}(X,\mathbb Z)$, with the unit and products supplied in [F3]; it is commutative in these even cohomological degrees, as in [[prop-chern-whitney-identities]]. The target group consists of formal series $1+\sum_{i\geq1}a_it^i$ with $a_i\in H^{2i,i}_{\rm mot}(X,\mathbb Z)$ and $t$ an indeterminate. Set $a_0=1$. Multiplication is $(ab)_n=\sum_{r+s=n}a_rb_s$. Its identity has all positive coefficients zero. For an inverse set $b_0=1$ and $b_n=-\sum_{r=1}^na_rb_{n-r}$; induction gives a unique inverse with $b_n\in H^{2n,n}_{\rm mot}(X,\mathbb Z)$. Every sum is finite. Associativity and commutativity follow coefficientwise from those in $R_X$. In Cartan, the terms with $a=0$ or $b=0$ use the unpointed constant unit $C_0=1$ of [F1]; only the positive operations are pointed.

[F7] [[lem-consumer-da2bbd48d3ba-binary-k-stack-detection]] supplies two-variable detection on the ordinary rank-zero K-stack by $BGL\times BGL$, without assuming additivity of the tested map. [[thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input]] supplies the implication from PBF to elementary-blowup excision for oriented spectra, permits shifts of the actual oriented PBF coefficient spectrum, and fixes the trivial-bundle rank section and rank reduction. Apply these interfaces over the prime field $F$ with $E=\mathcal E_F$ from [F3] and $M=\Sigma_{\mathbb P^1}^iE$. Its evaluated target is the original $Y_i$ by [F1] and [F3]. The actual model and orientation in [F3] discharge orientation, PBF and the multiplicative coefficient-category hypotheses, including compact generation and preservation of filtered colimits by projective-line cotensor; the orientation supplier verifies the latter two in its [F3] and Proof 3.1. Thus $M$ is an excisive $E$-module, as required by binary detection. All these interfaces use the same ordinary source-native smooth Zariski stack category, before hypercompletion.

[F8] [[lem-adjudicate-f8fe44ed7b70-binary-affine-extension]] supplies the two-variable affine restriction equivalence and extension of a single specified homotopy to all qcqs schemes through ordinary sheafification with the original coefficient target. It applies to the same extension of operations used in [F1], and respects source addition, sums and cup-product composites.

## Proof
**Given:** $k,X$, the specified actual Chern operations and coefficient model, Choice and the stated size bounds.

**Goal:** Prove Cartan in the original coefficient values before applying any further localization.

1.1 Work first on the source-native smooth Zariski site over the prime field $F$ used in [F1]. Fix $i\geq1$. On $BGL_n\times BGL_m$, subtract the proposed Cartan expression from the class of the universal direct sum, as a map to the actual additive target $Y_i$. Pull back to every product of finite Grassmannians over $F$. These are smooth qcqs field-schemes with the projective-relation bundle classes of [F1]–[F3]. Bundle Whitney in [F3] makes the difference zero, and [F2]'s actual two-factor coordinate comparison makes it zero on the classifying-stack product. For fixed target weight $i$, a Chern monomial of weight $w>i$ has coefficient in weight $i-w<0$, zero in every cohomological degree by [F2]. Its finite-basis calculation therefore gives eventual isomorphisms of both mapping $\pi_0$ and $\pi_1$ as the ranks grow. Its Milnor calculation kills the resulting $\lim^1\pi_1$, so the identity holds on the actual stable $BGL\times BGL$ with no undetected limit class. The ordinary operations of [F1] factor through the rank reduction supplied in [F7] $r(z)=z-s(\mathrm{rk}(z))$, where $s$ is the trivial-bundle rank section. Both rank and $s$ preserve addition, hence so does $r$. Restriction of $r$ along the stable bundle arrow is the reduced stable universal bundle, and its sum is reduced block sum. Thus the two maps on the ordinary reduced K-stack whose difference is the Cartan expression restrict to the identity just proved on $BGL\times BGL$. The PBF-to-excision interface and shift identification in [F7], with the actual model and orientation of [F3], verify the excisive-module hypothesis for the target $Y_i$. Apply [F7]'s binary detection to conclude equality there, then precompose with $r\times r$ to obtain the Cartan homotopy on the full ordinary K-stack. This uses actual mapping spaces on the smooth site, so it supplies a homotopy of the whole restricted natural operations. [A1, F1, F2, F3, F5, F7]

2.1 Restrict the homotopy in step 1.1 to smooth affine $F$-schemes and apply [F8]. The two endpoints on all affine schemes are the Cartan expressions in the specified actual operations: [F1] uses precisely the affine extension of [F8], and that mapping-space equivalence extends the homotopy between those specified endpoints. Its ordinary sheafification and affine-basis extension then give the identity with the original target $Y_i$ on every qcqs $F$-scheme. Restrict this one coherent transformation to qcqs $k$-schemes and to the smooth qcqs Nisnevich site of $X$. It gives the displayed identity for $C_i^{\rm ord}$, because [F1]'s operation is that ordinary extension. Evaluate the source-unit composite at $X$. Its target components are exactly $\pi_0Y_i(X)=H^{2i}(D_i(X))=H^{2i,i}_{\rm mot}(X,\mathbb Z)$ by [F3] and [F5], so taking components gives $c_t^{\rm perf}(x+y)=c_t^{\rm perf}(x)c_t^{\rm perf}(y)$ in the original groups. The source unit respects addition by naturality and preservation of finite products in [F8]. Positive operations are pointed, giving value one at zero. The finite convolution product and recursive inverse in [F6] make the target an abelian group, proving the stated natural homomorphism for all perfect classes. For the separately displayed local-model identity, [F1] identifies restriction along the local free-class comparison of [F4] with the same stable classes as step 1.1, for every locally constant rank pair. Block sum and rank translation correspond to K-space addition by [F4], whose two-variable detection therefore makes the local Cartan difference zero. No injectivity from hypercompleted coefficient sections back to original values, global bundle-difference presentation, convergence or polynomiality is needed. [A1, F1, F3, F4, F5, F6, F8, step 1.1] ∎


## External input
Source record 0 documents the projective-relation classes, smooth-test-scheme Whitney identity, finite Grassmannian formula and actual Vect/Grass coordinate comparison at the stated Annala–Iwasa locators. These premises are used through [F1]–[F3], retaining the elementary-excision qualification of Theorem 4.4.6 and the PBF hypotheses of Corollary 4.4.7. Their application to the actual EM model and the rank-limit calculation are supplied by the declared items; the coefficientwise perfect Cartan argument above is a local composition, not an imported theorem. The PBF-to-excision implication and rank-reduced K-stack interface in [F7] are supplied by its declared mapping-and-extension theorem, using Annala–Iwasa Lemmas 3.3.4–3.3.5 and the displayed mapping equivalences in the proof of Theorem 5.1.4. The module, shift and coefficient-category hypotheses are checked in [F7] before binary detection is applied.

## Source scope and reading limits
This repair read the complete current assigned body, the current interfaces of all thirteen original direct suppliers, and the complete mapping-and-extension input newly declared in [F7]. Relevant supplier arguments were checked for the actual model and orientation, universal rank-reduced operations, Grassmannian stabilization, binary detection, affine extension and local free-class detection. Fresh primary-source reading was the live Annala–Iwasa PDF text at §§2.1–2.2.6, §§3.3.1–3.3.5 and §5.1.1–5.1.4, including the excision lemma and displayed K-stack mapping argument. The page-image requests did not provide inspectable images; no fresh cached-byte authentication, foundational reconstruction or independent acceptance is claimed. Earlier broader readings in source record 0 are historical.

The four current direct-consumer uses were inspected: lem-exterior-square-chern-calculation [F3] and Proof 2.1; lem-author-d026a7b99ace-supported-chern-map [F11] and Proof 2.1; lem-author-3cde9692a7e9-actual-total-cartan [F6] and Proof 3.1–4.1; and lem-author-3cde9692a7e9-first-class-and-coefficients [F1] and Proof 1.1–4.1. They use the retained ordinary Cartan identity, global formal-series homomorphism or corresponding local identity. The Statement is verbatim unchanged, and the added argument edge introduces no new assumption. No consumer edit or changed-interface propagation is proposed. The engine owns independent changed-item rejudgment and central rendering. This repairs generated content and makes no original-author defect claim or change to historical article reports.
