---
id: thm-cft-hlz-braided-tensor-category
kind: theorem
title: "Braided monoidal structure from HLZ analytic hypotheses"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-pz-compatibility-subspace
  - thm-cft-strongly-graded-contragredient-duality
  - thm-cft-strongly-graded-pz-dual-representation
  - lem-cft-real-exponential-polynomial-uniqueness
  - lem-cft-rational-current-actions-and-partial-evaluation
  - lem-cft-strong-local-grading-and-cyclic-module-admission
  - lem-cft-weak-partial-evaluation-expansions-are-compatible
  - lem-cft-spectral-expansion-product-iterate-factorization
  - lem-cft-real-weight-nested-tensor-spanning
  - lem-cft-three-intertwiner-tree-expansions-and-local-moves
  - lem-cft-logarithmic-skew-symmetry-and-unit-maps
  - lem-cft-pz-parallel-transport
  - def-cft-pz-tensor-product
  - def-cft-logarithmic-intertwining-operator
  - def-cft-hlz-strongly-graded-generalized-module
  - def-monoidal-category
  - def-braiding
dependency_roles:
  def-cft-pz-compatibility-subspace: mathematical-premise
  thm-cft-strongly-graded-contragredient-duality: mathematical-premise
  thm-cft-strongly-graded-pz-dual-representation: mathematical-premise
  lem-cft-real-exponential-polynomial-uniqueness: mathematical-premise
  lem-cft-rational-current-actions-and-partial-evaluation: mathematical-premise
  lem-cft-strong-local-grading-and-cyclic-module-admission: mathematical-premise
  lem-cft-weak-partial-evaluation-expansions-are-compatible: mathematical-premise
  lem-cft-spectral-expansion-product-iterate-factorization: mathematical-premise
  lem-cft-real-weight-nested-tensor-spanning: mathematical-premise
  lem-cft-three-intertwiner-tree-expansions-and-local-moves: mathematical-premise
  lem-cft-logarithmic-skew-symmetry-and-unit-maps: mathematical-premise
  lem-cft-pz-parallel-transport: mathematical-premise
  "def-cft-pz-tensor-product": mathematical-premise
  "def-cft-logarithmic-intertwining-operator": mathematical-premise
  "def-cft-hlz-strongly-graded-generalized-module": mathematical-premise
  "def-monoidal-category": mathematical-premise
  "def-braiding": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part VI, Assumption 10.1, Definition 9.28, Theorem 9.27 and Theorem 10.3"
      url: "https://arxiv.org/pdf/1012.4202v3"
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part VIII, Assumptions 12.1–12.2, Theorem 12.15, Corollary 12.16 and Remark 12.17"
      url: "https://arxiv.org/pdf/1110.1931v2"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 7
---

## Statement

Let $V$ be a strongly graded Möbius or conformal vertex algebra and let $\mathcal C$ be a full category of strongly graded generalized $V$-modules. Assume the category hypotheses in [A1], that $V\in\mathcal C$ as in [A2], and the convergence, expansion and triple-operator analytic hypotheses in [A3]. Then the $P(1)$-tensor-product bifunctor, the unit object $V$, and the HLZ associativity, unit and braiding isomorphisms form an additive braided monoidal category. If $\mathcal C$ is abelian, it is abelian braided monoidal. HLZ calls the latter a braided tensor category; its Remark 12.17 states that rigidity is not obtained in this generality, so no rigidity conclusion is made here.

## Statement references

[[def-cft-pz-tensor-product]]

[[lem-cft-pz-parallel-transport]]

[[def-cft-logarithmic-intertwining-operator]]

[[def-cft-hlz-strongly-graded-generalized-module]]

[[def-monoidal-category]]

[[def-braiding]]

## Facts & Assumptions

**Given:** The strongly graded module and morphism conventions in [[def-cft-hlz-strongly-graded-generalized-module]], the representing $P(z)$-products in [[def-cft-pz-tensor-product]], and the endpoint logarithms and universal maps used by [[lem-cft-pz-parallel-transport]].

[F1] [[def-cft-pz-tensor-product]] defines a $P(z)$-product by the natural representing bijection from module maps out of its representing object to the vector space of $P(z)$-intertwining maps.

[F2] [[lem-cft-pz-parallel-transport]] defines the transport map by evaluating the reconstructed universal intertwining operator at the logarithm reached by lifting the reversed path from the chosen terminal logarithm; the map is natural and respects composition, inverses and endpoint-fixed homotopy with those lifts fixed.

[F3] [[def-cft-hlz-strongly-graded-generalized-module]] defines the strong gradings on $V$ and its modules, the degree of each mode, and the grading-preserving morphisms.

[F4] [[def-monoidal-category]] and [[def-braiding]] specify the monoidal and braided monoidal structures and the pentagon, triangle and two hexagon coherence equations in the local convention.

[A1] The hypotheses collected as Huang–Lepowsky–Zhang Part VI Assumption 10.1 hold. Explicitly, $V$ is strongly $A$-graded for abelian groups $A\subseteq\widetilde A$; every module considered is strongly $\widetilde A$-graded; the intertwining operators considered are grading-compatible; $\mathcal C$ is full in the category of such modules; every object has real generalized $L(0)$-weights and, for each $W\in\mathcal C$, some integer $K_W\ge1$ satisfies $(L_W(0)-L_W(0)_s)^{K_W}=0$ on $W$; and $\mathcal C$ is closed under images, restricted contragredients, finite direct sums, and $P(z)$-tensor products for at least one $z\in\mathbb C^\times$. This is the combined assumption including the category, grading, and nilpotence hypotheses from Part VI Assumptions 4.1, 5.30, and 7.11.

[A2] Huang–Lepowsky–Zhang Part VIII Assumption 12.1 is $V\in\mathcal C$ as a $V$-module.

[A3] The expansion and triple-operator hypotheses hold, with the following explicit two-point meaning of the expansion condition. For the product of $P(z_1)$- and $P(z_2)$-maps, put $z_0=z_1-z_2$, $|z_1|>|z_2|>|z_0|>0$, and $\lambda(w_1,w_2,w_3)=\langle w'_4,I_1(w_1,I_2(w_2,w_3))\rangle$. Fixing $w_3$ gives $\mu^{(2)}(w_1,w_2)=\lambda(w_1,w_2,w_3)$. Use the EXACT two-point residue field $Y'_{P(z_0)}$ and operators $L'_{P(z_0)}(j)$ of [[def-cft-pz-compatibility-subspace]] on $(W_1\otimes W_2)^*$, and write $D_2=L'_{P(z_0)}(0)$. Require a series $\mu^{(2)}=\sum_{h\in\mathbb R}\lambda_h^{(2)}$, each term a finite sum of auxiliary-homogeneous generalized $D_2$-weight-$h$ vectors, with one $N\geq0$ and one complex neighborhood of $s=0$, independent of $w_1,w_2$, such that $(D_2-h)^{N+1}\lambda_h^{(2)}=0$ and $\sum_he^{hs}\sum_{j=0}^Ns^j(D_2-h)^j\lambda_h^{(2)}/j!$ is weakly absolutely convergent there, equal to $\mu^{(2)}$ at zero. The smallest doubly graded subspace containing ALL these terms and stable under the transported field modes and $L'_{P(z_0)}(-1),L'_{P(z_0)}(0),L'_{P(z_0)}(1)$ has finite-dimensional $(\beta,h)$ components and is lower truncated in every fixed $(\beta,h+\mathbb Z)$ string. For each individual term its generated transported submodule embeds as a generalized submodule in an object of $\mathcal C$ included in $(W_1\otimes W_2)^*$. For an iterate of $P(z_2)$- and $P(z_0)$-maps, fix $w_1$ instead and impose precisely these conditions on $\mu^{(1)}(w_2,w_3)=\lambda(w_1,w_2,w_3)$, using the two-point field $Y'_{P(z_2)}$ and $D_1=L'_{P(z_2)}(0)$ on $(W_2\otimes W_3)^*$. The same all-terms grading restriction, uniform neighborhood and nilpotence bound, and individual ambient-module embedding are required. This is a weak infinite expansion of partial evaluations; the full trilinear $\lambda$ is not asserted to be a finite sum of generalized eigenvectors. In addition, for any $W_1,W_2,W_3,W_4,W_5,M_1,M_2\in\mathcal C$, grading-compatible logarithmic intertwining operators $\mathcal Y_1,\mathcal Y_2,\mathcal Y_3$ of types $\binom{W_5}{W_1\ M_1}$, $\binom{M_1}{W_2\ M_2}$, $\binom{M_2}{W_3\ W_4}$, and nonzero $z_1,z_2,z_3$ with $|z_1|>|z_2|>|z_3|>0$, the scalar series
$$\sum_{m,n\in\mathbb R}\left\langle w'_5,\mathcal Y_1(w_1,z_1)\pi_m\!\left(\mathcal Y_2(w_2,z_2)\pi_n(\mathcal Y_3(w_3,z_3)w_4)\right)\right\rangle$$
is absolutely convergent for all $w_i\in W_i$ and $w'_5\in W'_5$, and its sum has multivalued analytic continuation to $z_i\ne0$, $z_i\ne z_j$ for $i\ne j$. Near any permitted collection of boundary divisors $z_i=0$, $z_i=\infty$, or $z_i=z_j$, its local expansion is a sum of complex powers of local coordinates times nonnegative integral powers of their logarithms and convergent power series, with the local forms specified for regular-singular systems in HLZ Part VIII Assumption 12.2 (following Knapp, Appendix B). Given $V\in\mathcal C$, HLZ notes that this triple condition supplies the convergence condition for intertwining maps required in the expansion condition. All of these are hypotheses, not conclusions of the theorem.

[F5] HLZ VIII Theorem12.15, Corollary12.16 and Remark12.17 are literature comparison and attribution for the Statement. They are NOT a logical premise of the local proof below.

[F6] [[thm-cft-strongly-graded-contragredient-duality]] and [[thm-cft-strongly-graded-pz-dual-representation]] give actual strong duals, the canonical $P(z)$ products as duals of image sums, and binary component spanning. Here closed under images in A1 has its exact ambient meaning: for $M\in\mathcal C$, any generalized module $N$ and a module map $M\to N$, its image belongs to $\mathcal C$; this is HLZ IV Definition5.35, not a new quotient-closure assumption.

[F7] [[lem-cft-real-exponential-polynomial-uniqueness]], [[lem-cft-rational-current-actions-and-partial-evaluation]], [[lem-cft-strong-local-grading-and-cyclic-module-admission]] and [[lem-cft-weak-partial-evaluation-expansions-are-compatible]] prove the finite rational actions, both analytic partial-evaluation compatibility passages, actual module actions and real spectral uniqueness in full strong scope. [[lem-cft-spectral-expansion-product-iterate-factorization]] then proves full outer Jacobi and unique binary factorization in BOTH directions.

[F8] [[lem-cft-real-weight-nested-tensor-spanning]] proves generic real-weight nested component spanning, with no finite-coset restriction. [[lem-cft-three-intertwiner-tree-expansions-and-local-moves]] proves the all-index absolute convergence and continuation identities for all five four-leaf trees from the stipulated triple regular-singular hypothesis. The boundary-chart convention in A3 is the regular-singular finite power/log form at each permitted collection: on the nested-cluster chart it is finite complex powers of its boundary coordinates times finite log polynomials and convergent power series after finite integral shifts, as in the preceding local lemma. This specifies the original regular-singular hypothesis; it is not derived from binary convergence alone.

[F9] [[lem-cft-logarithmic-skew-symmetry-and-unit-maps]] proves the algebraic skew transformation, its inverse and the two vacuum-unit intertwiner descriptions, including their full Jacobi identities in Möbius scope.

## Proof

1.1 Fix the canonical restricted-dual models of the $P(z)$-products. F2 gives them at every nonzero $z$ with the fixed endpoint logarithms, from the one-point existence in A1. F6 realizes each as $S_z'$, where $S_z$ is the sum of images of transposed maps into the two-input dual. To check its category membership, universality identifies $S_z$ with the image of the canonical map's transpose from an object of $\mathcal C$; ambient-image closure puts that image in $\mathcal C$, and contragredient closure puts its dual there. Thus no undeclared globally grading-restricted or CFT-type theorem is used. F6 also proves that the homogeneous components of each universal tensor value span its representing object. The bifunctor on morphisms is the unique one obtained by applying universality to the two input maps and the universal map; identity and composition follow from uniqueness. [given, F1, F2, F3, F6, A1, algebra]

2.1 The triple clause of A3, with the third intertwiner a module action and its input the vacuum, supplies convergence and continuation for binary products, since $Y_W(\mathbf1,z)$ is the identity. For an iterate let $\mathcal U=\Omega_{-r-1}(\mathcal Y^1)$ be the inverse skew transform of its outer operator, so $\mathcal Y^1=\Omega_r(\mathcal U)$. F9 gives, coefficientwise with the matching odd-$\pi i$ branch,
$$\left\langle f,\mathcal Y^1(\mathcal Y^2(w_1,z_0)w_2,z_2)w_3\right\rangle=\left\langle e^{z_2L'(1)}f,\mathcal U(w_3,e^{(2r+1)\pi i}z_2)\mathcal Y^2(w_1,z_0)w_2\right\rangle.$$
The exterior exponential is a finite sum: $L'(1)$ lowers weight in each of the finitely many fixed auxiliary-degree integer strings supporting $f$. The expression on the right is an actual binary product in its radial region $|z_2|>|z_0|>0$. Its intermediate weight projections are the original iterate's projections, by the coefficientwise skew identity before summation. Thus its finite sum of absolute product bounds proves absolute iterate convergence on the entire required region, with no sector extension. The same identities with finitely many leaf or exterior nilpotent components and the real-exponential normality estimates in F7 give analytic branches and legitimate derivatives. Continuation fixes the matching branches on common overlaps. [F2, F7, F9, A2, A3, step 1.1, algebra]

2.2 Take the unit object $V$ from A2. F9 gives $P(z)$-maps with types $(W;V,W)$ and $(W;W,V)$ from the module action and its skew transform. Universality gives $l_z:V\boxtimes_zW\to W$ and $r_z:W\boxtimes_zV\to W$. In the first case the universal intertwiner on $\mathbf1$ is constant in its sewing coordinate by the derivative identity, so $k_L(w)=\mathbf1\boxtimes_z w$ is an actual vector, not only a completion. F9 gives $Y_{V\boxtimes W}(v,x)k_L(w)=\mathcal Y(v,x)w$, so $k_L$ is a module map and $l_zk_L=1$; binary component spanning gives $k_Ll_z=1$. For the right unit F9 gives $\mathcal Y(w,x)\mathbf1=e^{xL(-1)}k_R(w)$ with an actual constant coefficient $k_R(w)$, and comparison with the skew module action gives $r_zk_R=1$ and $k_Rr_z=1$ on spanning components. Thus both maps are isomorphisms. Their naturality follows directly from their pairings, and $l=l_1,r=r_1$ are the desired unitors. [F1, F6, F9, A2, step 1.1, algebra]

2.3 F9 also gives a $P(z)$-map to $W_2\boxtimes_{-z}W_1$ by $w_1,w_2\mapsto e^{zL(-1)}(w_2\boxtimes_{-z}w_1)$, with the odd-$\pi i$ logarithm chosen to match the fixed endpoint evaluation. It gives a natural map $R_z:W_1\boxtimes_zW_2\to W_2\boxtimes_{-z}W_1$. Use the inverse odd-$\pi i$ branch in the reversed skew transformation; the two translation factors cancel and F9's inverse skew identity makes the two composites fix universal values. Binary spanning proves invertibility. Define $c_{X,Y}=T_{\gamma^-_1}R_1$, where $\gamma^-_1$ is the path from $-1$ to1 in the closed upper half-plane avoiding0, with the backwards logarithmic lift prescribed by F2. This is the HLZ upper-half-plane braiding convention; fixed endpoint logarithms, rather than a new unrecorded branch at $-1$, determine its evaluation. Naturality and invertibility follow from those of $R_z$ and transport. [F1, F2, F6, F9, step 1.1, algebra]

3.1 Apply F7 to each corrected partial expansion in A3. The finite rational Ward identity comes from the actual two intertwiner Jacobi identities, not an assumed conformal-block theorem. Its precise scale reindex and the all-terms grading restriction give one functional lower cutoff; geometric-binomial majorants justify multiplication by the full compatibility delta before real spectral uniqueness. Thus every term is fully compatible in both directions. Its given ambient cyclic realization and the local grading lemma give an actual strongly graded cyclic module $E$ injected in $X\in\mathcal C$. Full compatibility propagates from its generating term to $E$, as follows. In opposite coordinates let $\tau(v,f)$ be F7's finite rational-current anti-action on the two-input dual, and let $\sigma(v,f)=\operatorname{Res}_t(\iota_\infty f)(t)Y_E^o(v,t)$ be the actual module's anti-action. The latter residue is finite, since $f$ has finitely many positive powers at infinity and the opposite field is upper truncated. Compatibility on the generating term says $\tau(v,f)\lambda=\sigma(v,f)\lambda$ for every rational $f$ with poles at0 and$z$: the delta coefficients give the principal parts at$z$, and Laurent monomials give the rest by partial fractions. The two anti-actions agree identically on Laurent generators by the definition of the transported field. Their common rational-current commutator is the finite sum of state products and derivatives of $f$. If they agree on a vector for every rational current, commuting one Laurent generator past that current proves they agree on the next generated vector; induction on word length proves equality on $E$. The same Möbius commutators handle the three additional generators. Thus every vector of $E$ is fully compatible, with its lower truncation supplied by its actual strong grading. The embedding $E\hookrightarrow X$ has a restricted transpose $X'\twoheadrightarrow E'$: every finite-component functional extends to the corresponding finite-dimensional component of $X$, proving surjectivity. Strong duality makes $E'$ an actual generalized module; ambient-image closure puts it in $\mathcal C$. No membership of an arbitrary ungenerated ambient subspace is inferred. Transpose the fully compatible inclusion $E\hookrightarrow(W_1\otimes W_2)^*$ to its $P(z)$-map with target $E'\in\mathcal C$. Consequently every term belongs to the actual image sum $S_z$. All hypotheses of F7's spectral factorization theorem are now satisfied. It supplies the outer $P(z_2)$-map for a product and the outer $P(z_1)$-map for an iterate, with full Jacobi and all three Möbius identities. This is the actual local product-iterate comparison; neither formal universality nor path transport alone is being used to create it. [F6, F7, A1, A3, step 1.1, step 2.1, algebra]

4.1 For $|z_1|>|z_2|>|z_0|>0$, let $L=(W_1\boxtimes_{z_0}W_2)\boxtimes_{z_2}W_3$ and $R=W_1\boxtimes_{z_1}(W_2\boxtimes_{z_2}W_3)$. Apply the product factorization of step 3.1 to the two universal maps defining $R$; outer universality gives a module morphism $A^{-1}_{z_1,z_2}:L\to R$ sending the nested iterate universal value to the product universal value. Apply reverse factorization to the universal iterate defining $L$; universality gives $A_{z_1,z_2}:R\to L$ with the reverse characterization. Both compositions fix the relevant nested universal values. Binary convergence from step 2.1 and generic real-weight spanning in F8 make their homogeneous components spanning in $L$ and $R$, so both compositions are identities. Naturality follows from the unique factorization, checked on those same spanning values. This constructs the associativity isomorphism itself. [F1, F6, F7, F8, step 2.1, step 3.1, algebra]

5.1 Set $\boxtimes=\boxtimes_1$. To define the usual left-to-right associator $\alpha_{X,Y,Z}:(X\boxtimes Y)\boxtimes Z\to X\boxtimes(Y\boxtimes Z)$, use geometric parameters $(z_1,z_2,z_0)=(3,2,1)$: transport the outer product on the left from1 to2, apply $A^{-1}_{3,2}$, then transport its inner product from2 to1 and its outer product from3 to1 along positive-real segments. The inner left product already has parameter1. F2 naturality makes these transports commute with the input maps. Different positive geometric parameters give the same morphism after those transports: on the common radial overlap step 4.1 preserves the scalar analytic germ, and continuation through the connected positive chamber preserves equality; the positive paths have unique fixed logarithmic lifts. Thus this definition is compatible with every local comparison used below, not just the chosen numbers3,2,1. [F2, F7, F8, step 4.1, algebra]

6.1 We prove the pentagon on actual four-leaf universal values. Choose positions $(z_1,z_2,z_3,0)=(7,6,4,0)$, so $z_{12}=1,z_{23}=2,z_{13}=3$. All five regions in F8's tree-expansion lemma hold: $7>6>4$, $4>2$ and $7>4+2$, $4>3>2$, $2>1$ and $4>2+1$, and $6>1+4$. By that lemma their double projection sums converge absolutely, and every adjacent binary comparison remains its actual analytic equality when its third input is a completed inner universal value. Following either route around the geometric pentagon therefore gives the same fully reassociated universal value, with the same leaf positions and continued branches. The homogeneous components of the source tree span by F8, so the two composite morphisms are equal. Transporting all edge lengths to1 along positive-real segments gives the exact pentagon for $\alpha$ in F4: the local comparison/transport squares commute by step 5.1. This proves the pentagon without invoking an external coherence theorem. [F2, F4, F8, step 4.1, step 5.1, algebra]

6.2 The triangle follows from the vacuum and translation, with an explicit geometric check. For the triple $X,V,Y$ use positions3,2,0. Its left tree is $(x\boxtimes_1\mathbf1)\boxtimes_2y$. First applying the right unit to its inner factor gives $e^{L(-1)}x$ in the outer $P(2)$ map. The derivative identity makes this exactly the continued value of the outer universal intertwiner with input $x$ at position3. The other route first applies $A^{-1}_{3,2}$ to get $x\boxtimes_3(\mathbf1\boxtimes_2y)$, then the left unit gives the same value at position3. The exponential input substitution is legitimate after pairing with the actual restricted dual: its translation identity is the convergent Taylor identity on a small overlap, and then analytic continuation; no unrestricted vector-space exponential is used. Nested spanning proves equality of morphisms. Positive transport to1 therefore gives $(1_X\boxtimes l_Y)\alpha_{X,V,Y}=r_X\boxtimes1_Y$, exactly F4's triangle. [F2, F4, F8, F9, step 4.1, step 5.1, step 2.2, algebra]

7.1 We next explain rigorously why the maps just constructed are the maps of their insertion paths. The local associativity map in step 4.1 preserves the binary scalar germ by construction; step 6.1's local-move lemma extends this to a spectator intertwiner with all absolute sums controlled. F9's skew identity is exactly interchange of the two labeled insertions followed by translation of the origin, and F2 is the stated logarithmic path continuation. On a small coordinate neighborhood these characterizations determine the maps on spanning universal components. Along any finite path cover use finitely many overlapping coordinate neighborhoods and analytic uniqueness to compose them. Endpoint-fixed homotopic paths give the same continued scalar germs: subdivide a homotopy square into sufficiently small rectangles landing in such neighborhoods; continuation round each small rectangle is identity by local uniqueness, and the interior edges cancel. Spanning then gives equality of the corresponding module maps. This proves the needed path rule for the two- and three-insertion configurations from local analytic continuation itself, rather than assuming that binary logarithm transport already knows multivariable coherence. [F2, F8, F9, step 4.1, step 2.3, step 6.1, algebra]

8.1 The two hexagons are block-exchange path equalities for three labeled inputs. We first fix the orientation from step 2.3, rather than inferring it from the word upper. At two normalized positions, a representative from $(p_X,p_Y)=(1,0)$ to $(0,1)$ is
$$p_X(t)=\frac{1+e^{-\pi it}}2,\qquad p_Y(t)=\frac{1-e^{-\pi it}}2,\qquad 0\le t\le1.$$
The relative coordinate $p_Y-p_X=-e^{-\pi it}$ traverses the upper semicircle from $-1$ to $1$, exactly $\gamma^-_1$; the first label $X$ therefore passes below the second label $Y$. Translation of the common origin does not change these relative coordinates. For $c_{X,Y\boxtimes Z}$, the block path passes $X$ below both $Y,Z$; the successive path passes it below $Y$ and then below $Z$. Choose both representatives, after harmless small spectator displacements, with $\operatorname{Im}p_X<\operatorname{Im}p_Y<\operatorname{Im}p_Z$ at every interior time. For $c_{X\boxtimes Y,Z}$, both representatives pass $X,Y$ below $Z$ and can use the same strict height order. Such representatives are obtained by lifting the labels to three distinct heights, moving their real coordinates to the required distinct final positions while retaining those heights, then lowering them. The lifts and lowering keep distinct real coordinates until the heights separate or after the real coordinates have reached their distinct endpoints. Dividing the real-coordinate motions into the successive exchanges gives the individual-braiding representative; doing them together gives the block representative. Any auxiliary displacement of a spectator pair whose real order is unchanged is contractible without collision, so it introduces no spectator braid. For fixed endpoints, the pointwise linear interpolation of the two representatives stays in the convex region of this strict imaginary order at every interior time, and hence gives an endpoint-fixed collision-free homotopy. If a leaf is used as the coordinate origin, translate the entire homotopy by its position; distinctness and relative heights are preserved. Step 7.1 equates the associated module maps. Reading the three binary regroupings along each path gives precisely $$\alpha_{Y,Z,X}\,c_{X,Y\boxtimes Z}\,\alpha_{X,Y,Z}=(1_Y\boxtimes c_{X,Z})\,\alpha_{Y,X,Z}\,(c_{X,Y}\boxtimes1_Z)$$ and $$\alpha_{Z,X,Y}^{-1}\,c_{X\boxtimes Y,Z}\,\alpha_{X,Y,Z}^{-1}=(c_{X,Z}\boxtimes1_Y)\,\alpha_{X,Z,Y}^{-1}\,(1_X\boxtimes c_{Y,Z}).$$ Composition is read right to left. These are the exact two equations in F4. The relative-coordinate check above makes every crossing agree with the upper-half-plane convention in step 2.3; no unjustified cancellation of a double braiding is used. [F2, F4, F8, F9, step 5.1, step 2.3, step 7.1, algebra]

9.1 Finally $\mathcal C$ is additive: fullness makes each hom-set a complex vector space with bilinear composition, and A1 supplies zero and finite direct sums. The $P(1)$ bifunctor is additive in each input, because a map from a direct sum of inputs to a completed output is a pair of $P(1)$-maps and universality represents this pair by the direct sum of the two representing products; uniqueness identifies the comparison maps and proves preservation of sums of morphisms. The preceding constructions and coherence checks give the natural associator, unitors, braiding and all required coherence identities, so F4's definition is satisfied. If $\mathcal C$ is additionally abelian this is an abelian braided monoidal category, by that same definition. No step constructs evaluation/coevaluation maps or their triangle identities, so no rigidity conclusion has been added. This proves the entire preserved Statement by local constructions. [F1, F3, F4, A1, step 5.1, step 2.2, step 2.3, step 6.1, step 6.2, step 8.1, algebra] ∎
