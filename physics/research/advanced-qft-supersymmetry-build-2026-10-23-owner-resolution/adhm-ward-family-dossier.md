# Ward family and first-neighbourhood connection dossier

Date: 2026-10-24. Investigation for the actual batch-60 Ward escalation. This file is the only authored artifact. No items, sources, manifests, or native state were changed. The statements below are mathematical repair proposals with explicit proof details, not native acceptance or readiness receipts. The complete framed correspondence is retained.

## Conclusions

1. Once absolute projective GAGA on $\mathbb P^3$ is genuinely proved, the universal-line family has a local degree-zero base-change theorem near every real twistor line, with evaluation an isomorphism on an entire complex neighborhood of that line. This follows from **algebraic** cohomology/base change, then elementary holomorphic functions on $\mathbb P^1$. It does not require a new broad Grauert theorem or the circular use of the restricted family clause of batch-59 GAGA to establish its own hypotheses.
2. The extra analytic degree-zero surjectivity hypothesis in the current Ward statement follows from this argument. It can be retained harmlessly, but it is not a necessary new analytic input. The forward construction must be shown to satisfy it, so simply listing it as Ward-side data does not by itself prove the claimed bijection.
3. Unique extension from a line to its first infinitesimal neighborhood is correctly justified by $H^0(\mathcal O(-1))=H^1(\mathcal O(-1))=0$. The sentence “differentiating these extensions gives a connection” still omits a substantial local lemma. A precise economical construction uses the incidence distribution $D=\ker de$ and the isomorphism $\Omega^1_U\simeq p_*D^*$. This gives a holomorphic connection on the complex line-space neighborhood and proves smooth dependence, coordinate independence, the Leibniz rule, and the required incidence compatibility.
4. This dossier does not establish Koszul–Malgrange, the metric/reality implication, the spinor/orientation convention, the raw ADHM matrix calculation, or charge normalization. Those remain separately assigned obligations. The family argument alone does not manufacture a smoothly varying Hermitian form or prove that it is parallel.

## Exact current carriers inspected

| File | Raw SHA256 at inspection |
| --- | --- |
| `items/thm-qftx-framed-penrose-ward-correspondence-on-s4.md` | `33650efbc41621e4ea948c07a2d9f5e817326c719d2ce6ef7d26ffa1032d949d` |
| `items/lem-qftx-twistor-line-section-direct-image.md` | `b7a042e4cce3e22d05f1e40999dd0fdd7861117de3fd5459986e3967bd545fbe` |
| `items/def-qftx-zero-fi-regular-adhm-and-twistor-data.md` | `c0ea86b69ba45222ad20b7a904c8d4cfc1ad12adf16255c5c35cfab88494066c` |

The direct-image lemma currently starts with a holomorphic bundle, applies an algebraic proper base-change theorem under conditional GAGA, and assumes analytic degree-zero surjectivity. Its [A1] does not noncircularly identify the analytic direct image with the algebraic one: the current GAGA family clause already assumes local freeness and fiber-base-change isomorphisms on both sides. The corrected route below proves the needed identification in degree zero without that clause.

The Ward theorem's step 1.3 proves individual first-neighborhood extension but not smooth variation of that extension, the definition of its derivative in an identified target, or the equality of the resulting horizontal Dolbeault operator with the original holomorphic bundle. Step 2.1 and the second inverse identity in step 3.1 need that latter equality. The final Remarks also point to nonexistent step 4.1; this is a minor cross-reference defect, not the substantive issue.

## Package F: local algebraic universal-line family and analytic degree zero

### Precise statement to establish

Let $E$ be a holomorphic finite-rank vector bundle on $Z=\mathbb P^3_{\mathbb C}$. Assume absolute GAGA on $Z$, including exact tensor compatibility and coherent cohomology comparison, has been proved. Let $G=\operatorname{Gr}(2,4)$ and

$$F=\{(P,[v]):P\in G,\ [v]\in\mathbb P(P)\},\qquad p:F\to G,\qquad e:F\to Z.$$

If $E|_{L_0}$ is holomorphically trivial on one line $L_0$, then there is an algebraic Zariski open neighborhood $U$ of $[L_0]$, a finite locally free algebraic bundle $H$ of the same rank on $U$, and compatible isomorphisms

$$H\cong p_*e^*E_{alg}|_U,\qquad p^*H\cong e^*E_{alg}|_{p^{-1}U},\qquad H^{an}\cong p^{an}_*(e^{an})^*E|_{U^{an}}.$$

The evaluation isomorphism and the analytic direct-image identification commute with degree-zero fiber restriction and base change. In particular the analytic degree-zero base-change maps are isomorphisms on $U^{an}$. Applying this at every real twistor line gives a complex open neighborhood of the entire real line locus, without requiring every complex line in $G$ to be trivial.

### Proof and actual supplier use

**F1: Algebraization and geometry.** Absolute GAGA on $\mathbb P^3$ algebraizes $E$ to a coherent $E_{alg}$. It is a vector bundle: an exact tensor equivalence preserves dualizable objects, and a finite coherent module possessing duality evaluation/coevaluation is locally free of finite rank. Equivalently prove this using faithfully flat analytic local maps and descent of finite local freeness. This small implication should be stated explicitly if the repaired GAGA carrier only says “coherent equivalence.”

Let $S_G\subset\mathbb C^4\otimes\mathcal O_G$ be the tautological rank-two **subbundle**. In the library's quotient convention the incidence variety is $F=\mathbb P_G(S_G^*)$, not $\mathbb P_G(S_G)$. It has fiber $\mathbb P(P)$ in the line convention. On a graph chart $\mathbb C^4=A\oplus B$, a plane is the graph of $X\in\operatorname{Hom}(A,B)$, and incidence is explicitly

$$p^{-1}U\cong U\times\mathbb P(A),\qquad e(X,[\lambda])=[\lambda,X\lambda].$$

These charts show that $p$ is a projective-line bundle, smooth, flat and finitely presented. It is proper by the projective-bundle construction and projective-properness. The bundle $K=e^*E_{alg}$ is coherent and flat over $G$: it is locally free over $F$ and $p$ is flat. The Grassmannian graph charts are finite-type smooth affine spaces, so the base is Noetherian.

Actual usable carriers include `lem-grassmannian-standard-affine-charts`, `def-projective-bundle-scheme`, `thm-projective-bundle-represents-line-quotients`, and `thm-projective-morphism-proper`. The current example `ex-grassmannian-lines-in-projective-three-space` identifies lines with $\operatorname{Gr}(2,4)$ but is not itself the proof of the universal-family properties. Do not treat the Ward data definition as a supplier proving these properties.

**F2: Fiber cohomology using only $\mathbb P^3$ GAGA.** For the closed immersion $i:L_0\hookrightarrow\mathbb P^3$, apply coherent cohomology comparison to $i_*(E_{alg}|_{L_0})$. Closed-immersion pushforward is exact and preserves coherent cohomology, and its analytification agrees with analytic closed-immersion pushforward: on a local chart this is the tensor identity for a module annihilated by the defining ideal. Thus

$$H^q(L_0,E_{alg}|_{L_0})\cong H^q(L_0^{an},E|_{L_0}).$$

By holomorphic triviality these groups have dimension $N$ in degree zero and vanish in positive degree. This avoids an unsupported extension of the current GAGA Statement to $G\subset\mathbb P^5$, the incidence variety, or arbitrary projective varieties. One may alternatively prove the $\mathbb P^1$ instance of the same absolute comparison argument; that is a small local consequence, not broad relative GAGA.

**F3: Derive algebraic degree-zero surjectivity; do not assume it.** Since $H^1(L_0,K|_{L_0})=0$, the algebraic fiber map $\varphi^1_{[L_0]}$ is surjective. Apply `thm-cohomology-and-base-change` in degree 1. Its part (c) makes this fiber map an isomorphism, hence the residue fiber of $R^1p_*K$ is zero. The higher direct image is finite coherent near the point: on a Noetherian affine base this follows directly from `lem-proper-flat-fp-cohomology-perfect-complex` and `lem-higher-direct-image-affine-localization`, since the cohomology of a finite projective complex is finite over a Noetherian ring. Nakayama gives vanishing of its stalk, and finite generation gives vanishing on a smaller open neighborhood. Thus $R^1p_*K$ is locally free of rank zero there. Part (b) of the base-change theorem in degree 1 now implies surjectivity of $\varphi^0_{[L_0]}$. Applying the theorem in degree zero gives finite local freeness of $H=p_*K$ and arbitrary algebraic degree-zero base change near $[L_0]$. Its rank is $N$.

An equally economical finite-matrix proof works directly with the universal finite projective cohomology complex: because every positive fiber cohomology group vanishes on $\mathbb P^1$, cancel the last differential using an invertible maximal minor and continue downwards to a free degree-zero complex after shrinking. Every cancellation survives tensoring. This is the exact local argument in `lem-hilbert-relative-regularity-and-base-change`, proof step 1.1, but that lemma's global Statement assumes fiberwise regularity on the entire base; one must actually perform the local argument rather than cite that stronger hypothesis as already satisfied.

**F4: Evaluation is an isomorphism on an entire neighboring family.** By F3, algebraic evaluation $p^*H\to K$ is a map of rank-$N$ bundles near $L_0$. Its analytification on $L_0$ is evaluation of all constant sections of the trivial holomorphic bundle, hence an isomorphism. It is therefore already algebraically invertible on $L_0$: its determinant has no zero at any complex point of that projective line. The nonisomorphism locus of evaluation is algebraically closed; its image under proper $p$ is closed. Remove that image from the base. On the remaining neighborhood of $[L_0]$, evaluation is an isomorphism everywhere. This argument proves all nearby lines are trivial, not just the original real line.

**F5: Analytic identification without Grauert or relative GAGA.** Analytify the actual algebraic evaluation isomorphism. Ordinary pullback/tensor functoriality gives

$$ (e^{an})^*E\cong(p^{an})^*H^{an}.$$

On a local trivialization $p^{-1}U\cong U\times\mathbb P^1$, holomorphic functions on $V\times\mathbb P^1$ are constant on each compact connected projective-line fiber. The remaining function on $V$ is holomorphic by evaluation at a fixed point of $\mathbb P^1$. Hence $p^{an}_*\mathcal O=\mathcal O$ as sheaves. Trivialize $H^{an}$ locally; coefficientwise the same calculation gives

$$p^{an}_*(p^{an})^*H^{an}\cong H^{an}.$$

This is exactly the analytic direct image in the statement. It identifies evaluation and all degree-zero fiber maps, which are now visibly the identity on the vector-bundle fiber. Pulling back the evaluation isomorphism to another analytic base preserves this calculation on local projective-line products, so the degree-zero comparison is compatible with analytic and algebraic base change wherever considered. No higher analytic direct-image result is asserted or needed. No generalized Grauert or formal-functions theorem has been smuggled into this step.

The theorem's extra degree-zero surjectivity condition is therefore automatic for both arbitrary Ward bundles and the holomorphic bundles produced by the forward ASD construction. The latter fact closes the current forward-map landing obligation. All arguments are local near the real locus; no claim is made that $E$ is trivial on every line of $\mathbb P^3$.

## Package R: real incidence and the smooth underlying bundle

The following geometry should be supplied explicitly, rather than reading “$S^4\subset G$” as a proved smooth embedding.

The quaternionic structure $j$ induces an antiholomorphic involution $\tau(P)=jP$ on $G$. Its fixed points are the $j$-invariant complex two-planes, precisely the quaternionic lines in $\mathbb H^2$, so the fixed locus is $M=\mathbb H\mathbb P^1$. In a splitting $\mathbb C^4=A\oplus B$ into $j$-invariant complex two-planes, the graph involution is

$$X\longmapsto j_BXj_A^{-1}.$$

This is a conjugate-linear involution on $\operatorname{Hom}_{\mathbb C}(A,B)$. Its fixed subspace is $\operatorname{Hom}_{\mathbb H}(A,B)\cong\mathbb H$, real dimension four, and its complexification is the full four-dimensional complex tangent space of $G$. These explicit charts prove that $M$ is smoothly embedded and totally real, with $T_xM\otimes\mathbb C\cong T_xG$. They also provide its real-analytic smooth structure without appealing to a general fixed-locus theorem.

Set $F_M=p^{-1}M$ as a smooth real submanifold of $F^{an}$. The map

$$e_M:F_M\longrightarrow\mathbb P^3,\qquad(P,[v])\longmapsto[v]$$

is a diffeomorphism. Its inverse sends $[v]$ to $(\operatorname{span}_{\mathbb C}\{v,jv\},[v])$. The span has dimension two because $j^2=-1$ forbids a complex eigenline of $j$. Smoothness follows from the graph/projective charts (or the explicit orthogonal projection onto the span). Under this diffeomorphism $p|_{F_M}$ is the twistor projection $\pi$.

Restrict $H^{an}$ from Package F to $M$: its transition matrices are restrictions of holomorphic matrices, hence smooth, so it is a smooth complex rank-$N$ bundle with fiber $H^0(L_x,E|_{L_x})$. Analytic evaluation, transported by $e_M$, gives a smooth bundle isomorphism $\pi^*\widehat E\cong E$ on $Z$, holomorphic along each twistor fiber. The framing is carried by ordinary evaluation on $L_\infty$.

This proves the **complex bundle**, smooth dependence, and evaluation assertions. Smoothness/positivity of a chosen Hermitian form and preservation by the Ward connection are separate reality/metric claims; the current direct-image proof's final sentence must not infer them from linewise triviality alone. The present definition already assumes smooth positive forms. Its precise relation to the holomorphic reality isomorphism remains for the metric assignment.

## Package W: precise first-neighborhood derivative lemma

### Exact local statement needed

Let $U\subset G^{an}$ be a complex open set on whose entire universal-line family $E$ is trivial, and let $H=p_*e^*E$ with evaluation $p^*H\simeq e^*E$. There is a unique holomorphic connection $\nabla$ on $H$ such that evaluation identifies its restriction to the incidence distribution $D=\ker(de)$ with the canonical flat relative connection on $e^*E$ along $e$-fibers. This connection agrees with differentiation of the unique first-neighborhood extensions. Its restriction to $M\cap U$ is smooth; its curvature vanishes on the planes $dp(D_z)$. Evaluation on real incidence identifies the induced vertical/horizontal Dolbeault operator with the original holomorphic structure of $E$.

The last claim requires the already chosen twistor identification of $dp(D_z)$ with the appropriate horizontal $(0,1)$ planes. The spinor/orientation assignment owns that identification; this dossier does not infer its sign from notation.

### W1: Explicit incidence distribution and cotangent isomorphism

Use the graph coordinates of F1. Because $e(X,[\lambda])=[\lambda,X\lambda]$, a tangent vector lies in $D$ precisely when its $\mathbb P(A)$ component is zero and its matrix variation $v$ satisfies $v\lambda=0$. Thus $dp$ embeds $D$ into $p^*TU$ with

$$D_{(X,[\lambda])}=\operatorname{Hom}(A/\ell,B),\qquad\ell=\mathbb C\lambda.$$

Along each projective-line fiber $D\cong\mathcal O(-1)^{\oplus2}$ and $D^*\cong\mathcal O(1)^{\oplus2}$. More precisely the quotient $p^*TU/D$ is $\operatorname{Hom}(\ell,B)=B\otimes\mathcal O(1)$, so the kernel of the restriction map $p^*\Omega_U^1\to D^*$ is $B^*\otimes\mathcal O(-1)$. The relative Euler sequence and $H^0(\mathcal O(-1))=H^1(\mathcal O(-1))=0$ show

$$\Omega_U^1\xrightarrow{\sim}p_*D^*.$$

There is also a direct coefficient proof: a linear covector on $\operatorname{Hom}(A,B)$ restricts to each subspace $v\lambda=0$; the resulting $\mathcal O(1)^{\oplus2}$ section determines that covector uniquely, and both vector spaces have dimension four. The coefficient calculation varies holomorphically with $X$, so gives the asserted sheaf isomorphism. This avoids invoking higher analytic base change for $D^*$.

The map $e$ is a submersion in these charts and $D$ is involutive, being tangent to its fibers. One should verify this actual distribution rather than invoke the unrelated Bott connection on the normal bundle of a foliation: `lem-the-bott-partial-connection-is-well-defined-and-flat-in-leaf-directions` does not establish the pullback-$E$ connection or the isomorphism above.

### W2: Construct the full connection and prove its properties

The pullback bundle $e^*E$ has a canonical partial connection $\delta$ along $D$: in a pulled-back holomorphic local frame of $E$, differentiate only the coefficient functions in the $e$-vertical directions. A change of frame is pulled back from $Z$ and has zero derivative along $D$, so this definition is independent of that frame. Its curvature is zero because derivatives along the fibers satisfy the vector-field bracket identity. Transfer $\delta$ through evaluation to $p^*H$.

For a holomorphic section $s$ of $H$, $\delta(p^*s)$ is a holomorphic section of $D^*\otimes p^*H$. Locally trivializing $H$ identifies its direct image with $(p_*D^*)\otimes H$. Use W1 to define

$$\nabla s\in\Omega_U^1\otimes H.$$

For a holomorphic scalar $f$, the partial Leibniz rule gives $\delta(p^*(fs))=(dp|_D)^*(df)\,p^*s+p^*f\,\delta(p^*s)$. Under W1 this is exactly $\nabla(fs)=df\otimes s+f\nabla s$. The construction is holomorphic, hence its restriction to real graph charts is a smooth connection. By construction the pullback of $\nabla$ agrees with $\delta$ on sections pulled back from $H$; the partial Leibniz rule extends equality to every local section of $p^*H$. Uniqueness follows from W1: the difference of two connections is an $\operatorname{End}(H)$-valued one-form whose restriction to all $D_z$ is zero, hence the one-form itself is zero.

Since $D$ is involutive, restricting the full curvature of $p^*\nabla$ to $D$ equals the curvature of its partial restriction. That restriction is $\delta$, which is flat. Thus $F_\nabla$ vanishes on every plane $dp(D_z)$. This supplies the actual missing flatness input for the Ward curvature argument; applying the separately checked alpha-plane/orientation identity gives the desired ASD equation.

### W3: Identify this construction with the first-neighborhood prescription

For a fixed line $L$, its ideal is generated by two independent linear homogeneous equations, hence $I/I^2\cong\mathcal O_L(-1)^{\oplus2}$. For locally free $E$, tensoring the defining square-zero sequence gives

$$0\longrightarrow E|_L\otimes(I/I^2)\longrightarrow E|_{L^{(1)}}\longrightarrow E|_L\longrightarrow0.$$

Both end cohomology groups in degrees zero and one of the left term vanish. Therefore every holomorphic section over $L$ has a unique extension to $L^{(1)}$. A basis extends to a trivialization because a matrix invertible modulo a square-zero ideal is invertible. This establishes the individual extension claim exactly.

The remaining identification is a local jet calculation, not the assertion that uniqueness by itself supplies smooth dependence. In graph coordinates, a tangent $v\in T_XU=\operatorname{Hom}(A,B)$ deforms the point $[\lambda,X\lambda]$ normally by $v\lambda$. Its kernel is exactly $D_{(X,[\lambda])}$. Choose a local holomorphic section $s$ of $H$ with prescribed value at $X$ and $\nabla s(X)=0$; any prescribed first jet of a holomorphic section of a locally trivial bundle is realized by an affine-linear coefficient function, so such $s$ exists.

By W2 the derivative of $\operatorname{ev}(p^*s)$ along the parameter directions vanishes on the kernel $v\lambda=0$, when measured in a local frame pulled from $E$. Hence its normal first derivative factors through $v\mapsto v\lambda$. These factorizations are holomorphic in $[\lambda]$ and agree on the two projective charts; together with $s(X)$ they are precisely a section of $E|_{L^{(1)}}$. It must be the unique extension just proved. For an arbitrary local $s$, subtract a section with the same value and a horizontal first jet at $X$. The remaining first derivative is exactly $\nabla s(X)$. Consequently differentiation relative to the unique ambient first-neighborhood extension recovers the connection of W2.

This argument provides both a well-defined target for the derivative and the required independence of graph charts. Equivariance under bundle isomorphisms and projective transformations follows from uniqueness of the partial-connection characterization; overlap connections agree for the same reason. It also includes flat summands and reducible bundles without any irreducibility hypothesis.

### W4: Evaluation and inverse identities

To finish the Ward proof, explicitly check the twistor differential statement: on $F_M\cong Z$, the complexified tangent distribution mapping to $T^{0,1}Z$ is generated by the vertical $(0,1)$ tangent to $\mathbb P^1$ and the complex lift of $D$. Its image under $dp$ is the chosen alpha-plane at the point. Evaluation is holomorphic vertically by construction, and W2 identifies its derivative along $D$ with the original pulled-back holomorphic structure. Therefore evaluation intertwines the full Dolbeault operators, not merely the underlying vector bundles. This is what the current proof must use in step 2.1 and its second inverse identity.

For a forward ASD transform, the smooth bundle $\pi^*E_0$ has constant holomorphic sections on each real fiber, so Package F applies to it. Under evaluation those sections recover $E_0$. The first-neighborhood/partial-connection characterization then identifies the recovered connection with the original one because their alpha-plane restrictions agree; W1 proves uniqueness. This avoids any appeal to real-analytic regularity of a smooth ASD connection or an unproved holomorphic extension of that connection to a complexification. Metric preservation, the reality datum, charge and framing normalization still require their assigned proofs.

## Actual source reading and limits

For this continuation I retrieved the complete 15-page PDF `https://arxiv.org/pdf/2205.08639` into memory and read PDF/printed pages **4–6**, including all of §3. It has 162,255 bytes and SHA256 `f7f8ac49b9a5e09985c7e0b507f32f22c8a52d5f1ab21f9b20571383083a9de0`. No source file or coverage stamp was written. An initial attempt to use absent `pdftotext` failed; in-memory PyMuPDF extraction succeeded and is the text actually read.

Donaldson p. 5 states the unique first-formal-neighborhood trivialization argument and says that this defines the connection. It then explains that fixed-point evaluation trivializations along the surfaces of lines through a point are parallel, yielding curvature vanishing and inverse constructions. It does **not** provide the full local derivative, direct-image, or smooth-parameter proof required by the current items. Packages F/R/W above identify and supply the missing local route rather than treating the source's roadmap as a locally completed proof. Donaldson p. 6 also distinguishes the smooth twistor pullback approach from the route through elliptic real analyticity and complexification; the former is the route retained here.

For the existing algebraic arguments I read the actual current `thm-cohomology-and-base-change`, `lem-proper-flat-fp-cohomology-perfect-complex`, `lem-cohomology-base-change-finite-free-criterion`, `lem-hilbert-relative-regularity-and-base-change`, the Grassmannian chart/example and projective-bundle definition, and the relevant conormal/Bott supplier statements and proof portions. The earlier A2 dossier records the actual authoritative Stacks full-text reading for algebraic perfect complexes and base-change construction; that reading is not expanded here into a Grauert reading claim. No new general analytic cohomology theorem is claimed.

## Economical repair order

First finish the absolute $\mathbb P^3$ GAGA package from batch 59. Next author/check Package F and the short explicit real-incidence charts in R as the substantive direct-image repair. Then supply W1–W4 as an explicit local Ward derivative lemma or as the actual connection proof in the Ward item, with the spinor differential identification cross-checked by its assigned owner. Finally reconcile the forward landing and both inverse identities against the independent Koszul–Malgrange, reality/metric, orientation and charge proofs. This preserves the full smooth framed correspondence and all reducible/flat-summand cases while discharging concrete prerequisites instead of retaining them as unexplained assumptions.
