# ADHM GAGA A2: comparison in the approved family range

Date: 2026-10-23. This is a read-only mathematical investigation and proposed proof package, not an item repair, source-coverage stamp, gate receipt, or readiness decision. Only this dossier was authored. No item, source coverage, manifest, or state was changed.

## Finding

The approved family statement is sound. Its extra assumption [A2] is unnecessary once the absolute projective cohomology comparison has actually been proved. A canonical morphism

$$c_q:(R^qp_*\mathcal E)^{an}\longrightarrow R^qp^{an}_*\mathcal E^{an}$$

can be constructed using ordinary sheaf-cohomology functoriality and sheafification. Its compatibility with the specified fiber maps follows from composition of pullbacks of cohomology classes. The two locally free hypotheses and the two fiber-base-change hypotheses already in the current Statement then prove that this morphism is an isomorphism. No Grauert theorem, analytic cohomology perfect-complex theorem, or unrestricted relative GAGA theorem is needed to discharge precisely this [A2]. The nonproper parameter base causes no difficulty.

This does not discharge [A1]. In particular, the absolute cohomology comparison on every closed fiber remains an input from the separate [A1] repair. No absolute GAGA proof is claimed here.

## Exact inspected interface

The current `items/thm-qftx-projective-gaga-for-monad-data.md` has raw SHA256 `218b0f97778ba4b180e410e715bb1139d210b7320ac31aed9b211952e0de9de3` at inspection. Its family clause assumes:

- $X=\mathbb P^n_{\mathbb C}$, $n=2$ or $3$;
- a finite-type complex parameter scheme $S$;
- an **algebraic coherent** sheaf $\mathcal E$ on $Y=X\times S$, flat over $S$;
- for the degree $q$ being compared, both the algebraic $R^qp_*\mathcal E$ and the analytic $R^qp^{an}_*\mathcal E^{an}$ are locally free;
- the natural maps from their residue-field fibers to the respective fiber cohomology groups are isomorphisms.

Here “locally free” must have the ordinary coherent finite-rank meaning used in the item and its consumers. The proof below needs finite rank. The final claim identifies the direct images and their natural base-change maps; it does not algebraize arbitrary holomorphic families over $S^{an}$.

The approved scope in `scope-extension-7-pairs.json`, entry `thm-qftx-projective-gaga-for-monad-data`, explicitly asks for algebraic flat families over finite-type parameter schemes and only the exact projective/base-change hypotheses used. The current Beilinson consumer additionally states the relevant constant ranks and actual base-change isomorphisms. Thus retaining all of the displayed hypotheses preserves the complete approved family claim. It is unnecessary and unauthorized to retreat to a point base, a proper parameter base, a reduced base, a smooth base, or locally free $\mathcal E$.

The native Step-1 item record inspected says `escalated` and names unresolved [A1]/[A2]. The current batch-59 notes and contract agree that the family argument is conditional. The Step-1 record's stored hash is not the above raw-file hash; this dossier does not reinterpret or refresh native state.

## Current suppliers, and their exact limits

All five suppliers below were read as current on-disk files; their hashes match their `research/math-imports.json` pins. They remain read-only imported mathematical snapshots.

| Supplier | Actual usable statement | Limitation for A2 |
| --- | --- | --- |
| `lem-higher-direct-image-local-section-formula` | For a scheme map $f$, $R^qf_*F$ is the sheafification of $V\mapsto H^q(f^{-1}V,F)$, compatibly with restrictions and scalar actions. | Its **Statement says schemes**. Its full proof uses only ringed-space module injectives, flasque acyclicity, and sheafification, so the ringed-space extension must be stated and proved locally rather than silently attributed to its Statement. |
| `lem-cohomology-functoriality-sheaf-and-space` | For any continuous map $u$ and abelian-sheaf morphism $u^{-1}F\to G$, pullback on cohomology exists and is natural and compatible with compositions. | It does not assert an analytic direct-image isomorphism. It does supply exactly the pullback maps used below. |
| `def-base-change-map-cohomology` | Defines algebraic fiber/base-change maps by restriction/pullback of cohomology classes and scalar extension, with composition compatibility. | Its formulation is algebraic, not analytic. Use the same explicitly supplied construction on analytic ringed spaces. |
| `lem-proper-flat-fp-cohomology-perfect-complex` | For a proper finitely presented algebraic family and finitely presented base-flat sheaf over an affine base, gives a bounded finite projective complex computing cohomology after every coefficient-algebra change. | Entirely algebraic. It supplies no analytic cohomology computation and cannot alone prove relative GAGA. |
| `thm-cohomology-and-base-change` | For a proper finitely presented algebraic map and coherent base-flat sheaf, surjectivity of a fiber map implies a local arbitrary-base-change isomorphism; it gives the stated local-freeness criterion. | Entirely algebraic. It may justify algebraic base-change hypotheses in a consumer but does not supply analytic base change. |

`lem-higher-direct-image-affine-localization` was also read: it identifies algebraic direct images with the associated module sheaves over affine base opens for quasi-compact separated maps. It is useful for the algebraic side but is not an analytic theorem. `def-higher-direct-image-sheaf` already defines $R^qf_*$ for **ringed spaces**, so no new notion of analytic higher direct image is required.

Full AC implies the DC used in these sheaf-cohomology constructions. Preserve the item's AC qualification; no extra independent choice assumption is needed.

## Smallest missing local package and full proof

The economical package consists of a ringed-space local-section lemma and the following restricted comparison argument. They can be written explicitly in the GAGA proof, or supplied by a new local mathematical lemma if the owner wants reuse. This is a local authoring obligation for established mathematics, not an open problem.

### 1. Ringed-space local-section formula

For any morphism of ringed spaces $f:T\to B$ and module sheaf $F$, choose an injective module resolution $F\to I^\bullet$. Restriction of an injective module sheaf to an open $U\subset T$ remains injective: extension by zero $j_!$ is an exact left adjoint of restriction, so restriction preserves injectives. Equivalently, the current imported proof shows the injective module sheaves are flasque, hence their restrictions are acyclic for abelian-sheaf cohomology. Consequently $H^q(f^{-1}V,F)$ is the cohomology of $\Gamma(f^{-1}V,I^\bullet)$ for each open $V\subset B$. The sheaf $R^qf_*F$ is the cohomology sheaf of $f_*I^\bullet$, which is the sheafification of its presheaf cohomology. This gives

$$R^qf_*F=\bigl(V\longmapsto H^q(f^{-1}V,F)\bigr)^{\#}.$$

The identification respects restriction and scalar multiplication because every map in the construction comes from restriction or a module endomorphism of the same resolution. This proves the exact analytic generalization needed; it does not assert that presheaf cohomology is already a sheaf or that its values equal global sections of $R^qf_*F$.

### 2. Construct the comparison map without assuming an isomorphism

Write $\eta_Y:Y^{an}\to Y$ and $\eta_S:S^{an}\to S$ for the canonical maps of locally ringed spaces. The square with $p$ and $p^{an}$ commutes. For each algebraic open $V\subset S$, ordinary cohomology functoriality, applied to the canonical map $\eta_Y^{-1}\mathcal E\to\mathcal E^{an}$, gives

$$H^q(p^{-1}V,\mathcal E)\longrightarrow H^q((p^{an})^{-1}(\eta_S^{-1}V),\mathcal E^{an})\longrightarrow\Gamma(\eta_S^{-1}V,R^qp^{an}_*\mathcal E^{an}).$$

The last arrow is the presheaf-to-sheaf map from part 1. These maps commute with restrictions and are $\mathcal O_S(V)$-linear through the structural map to holomorphic functions. They therefore give a presheaf map into the sheaf $\eta_{S*}R^qp^{an}_*\mathcal E^{an}$. Sheafification in part 1 produces

$$R^qp_*\mathcal E\longrightarrow\eta_{S*}R^qp^{an}_*\mathcal E^{an}.$$

The module pullback/pushforward adjunction now gives $c_q$ as displayed at the start. Concretely its stalk sends a local pure tensor $a\otimes[\xi]$ to $a$ times the analytically pulled-back cohomology germ of $\xi$. This construction requires no proper direct-image comparison theorem and no flatness of $\eta_S$ or $\eta_Y$. Exactness of analytification is needed elsewhere for absolute GAGA, but not to define this individual degree-$q$ map.

### 3. Identify its fiber map

Let $t\in S^{an}$ correspond to the closed complex point $s\in S$. The residue fields of both local rings are $\mathbb C$. For every algebraic module sheaf $M$, tensor associativity gives

$$((\eta_S^*M)_t)\otimes_{\mathcal O_{S^{an},t}}\mathbb C\cong M_s\otimes_{\mathcal O_{S,s}}\mathbb C.$$

The analytic fiber of $Y^{an}=X^{an}\times S^{an}$ is canonically $(Y_s)^{an}=X^{an}$. On a standard affine chart this identifies the quotient by the maximal ideal of base parameters. Tensor associativity likewise identifies

$$\mathcal E^{an}|_{(p^{an})^{-1}(t)}\cong(\mathcal E_s)^{an}.$$

This is an **underived** restriction identity and does not require local freeness of $\mathcal E$ or the base. Base flatness remains among the approved hypotheses but need not be used for this identity.

The comparison square is

$$\begin{array}{ccc}(R^qp_*\mathcal E)(s)&\xrightarrow{\ c_q(t)\ }&(R^qp^{an}_*\mathcal E^{an})(t)\\\downarrow\varphi^{alg}_s&&\downarrow\varphi^{an}_t\\H^q(X,\mathcal E_s)&\xrightarrow{\ \gamma_s\ }&H^q(X^{an},(\mathcal E_s)^{an}).\end{array}$$

It commutes: represent a direct-image stalk by a class on $p^{-1}V$ using part 1. The two composites first restrict/pull back this class along the two factorizations of the same map from the analytic closed fiber into $p^{-1}V$. The maps of sheaves are equal by the tensor restriction identity above. Composition compatibility in `lem-cohomology-functoriality-sheaf-and-space` makes the cohomology maps equal. Multiplication by germs and reduction to $\mathbb C$ preserve the equality. Thus compatibility is proved and is not an additional [A2] assumption.

By the approved assumptions $\varphi^{alg}_s$ and $\varphi^{an}_t$ are isomorphisms. By the independently established absolute projective GAGA cohomology theorem, $\gamma_s$ is an isomorphism. Therefore $c_q(t)$ is an isomorphism for every analytic point $t$.

### 4. Deduce the sheaf isomorphism, including nonreduced bases

The source of $c_q$ is finite locally free because pullback preserves finite locally free sheaves; the target is finite locally free by hypothesis. At a point $t$ the fiber isomorphism proves their ranks agree. After trivializing on a neighborhood of $t$, $c_q$ is represented by a square matrix over the analytic local ring. Its determinant has nonzero residue, so is a unit. The adjugate matrix divided by this determinant is its inverse. Thus every stalk of $c_q$ is invertible and $c_q$ is an isomorphism.

This argument works over nonreduced and singular base local rings. It uses invertibility on fibers of an actual morphism between locally free sheaves, not the false claim that two vector bundles with isomorphic abstract fibers are isomorphic. Empty bases, zero sheaves, rank zero, and vanishing degrees are included.

### 5. Base-change compatibility

For an algebraic map $h:T\to S$ between finite-type complex parameter schemes, form the product family $p_T$ with pullback sheaf $\mathcal E_T$. Tensor associativity identifies $(\mathcal E_T)^{an}$ with $(h_Y^{an})^*\mathcal E^{an}$. The square with top map $(h^*R^qp_*\mathcal E)^{an}\to(R^qp_{T*}\mathcal E_T)^{an}$, bottom map $(h^{an})^*R^qp^{an}_*\mathcal E^{an}\to R^q(p_T)^{an}_*(\mathcal E_T)^{an}$, and vertical comparison maps commutes. Indeed all four maps are built from restriction/pullback of the same classes and scalar extension, so the same composition argument as in part 3 applies. This proves naturality of the comparison with the natural base-change maps; it does not assume the square commutes as a theorem package.

Whenever both families lie in the stated locally free/fiber-base-change range, parts 3–4 make both vertical comparisons isomorphisms, so the comparison identifies their base-change maps and preserves whether those maps are isomorphisms. In particular it identifies all the closed-fiber maps explicitly required in the current Statement. No analytification assertion is defined for arbitrary non-finite-type scheme bases, and no general analytic base-change theorem outside this range has been proved here.

## Authoritative full text actually read for this investigation

Retrieved directly with Python `urllib.request` and read the returned HTML mathematical text on 2026-10-23. No PDF or repository source-fetch stamp was generated.

- Stacks Project, Section 20.7, **full statements and proofs of Lemmas 20.7.1–20.7.4**, and Remark 20.7.5, `https://stacks.math.columbia.edu/tag/01E0`. In particular Lemma 20.7.3 explicitly states the local-section/sheafification formula for **ringed spaces**, and Lemma 20.7.4 gives restriction to a base open. This is the precise authoritative source for part 1.
- Stacks Project, **Lemma 20.17.1, full statement and proof**, `https://stacks.math.columbia.edu/tag/02N7`. For a commutative square of ringed spaces with both horizontal maps flat, it constructs the canonical derived base-change morphism by injective-resolution comparison and adjunction. This independently confirms that defining a comparison morphism is formal and does not already require proper GAGA. The no-flatness degreewise construction above is proved explicitly, not misquoted as this lemma's statement.
- Stacks Project, **Section 30.5, full statements and proofs of Lemmas 30.5.1–30.5.3**, `https://stacks.math.columbia.edu/tag/02KE`, and the separately retrieved **Lemma 30.5.2**, `https://stacks.math.columbia.edu/tag/02KH`. These are scheme-theoretic affine/flat/finite-locally-free base-change results; they are not analytification comparison theorems.
- Stacks Project, **Lemma 30.22.1, full statement and proof**, `https://stacks.math.columbia.edu/tag/07VK`. For Noetherian $A$, proper $f$, and coherent base-flat $F$, it proves algebraic perfectness and derived base change to arbitrary $A'$ via the bounded flat alternating Čech complex. It does not compute analytic cohomology.
- Stacks Project, **Lemma 20.54.2, full statement and proof**, `https://stacks.math.columbia.edu/tag/01E8`, also retrieved and read while evaluating a projection-formula route. The route is not needed for the economical proof above.

Serre's full text was not newly retrieved or read by this agent. Its batch-59 reported reading is historical evidence, not my reading claim. No Grauert source was retrieved, and no Grauert proof is claimed.

## Owner implementation recommendation

Retain the entire current family Statement. Replace [A2] and the conditional step 6.1 by parts 1–5 above in concise checked proof form, with actual local supplier dependencies for cohomology functoriality, higher-direct-image definition, sheafification, tensor pullback/adjunction, and the locally free determinant argument. Either explicitly prove the ringed-space extension in that proof or introduce its small local carrier before use. Do not cite the imported scheme-only local-section Statement as though it already covered analytic maps.

Remove the claim that an unresolved relative-GAGA isomorphism package must first be assumed once this construction is authored and checked. Continue to hold the item on its separately unresolved [A1] obligations until they are discharged. This dossier identifies no false overbroad mathematical hypothesis in the approved family statement. It identifies a circular/overstrong proof assumption: [A2] assumes the very relative isomorphism that the existing locally free and fiber-comparison hypotheses suffice to prove.
