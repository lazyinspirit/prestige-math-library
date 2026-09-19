# Step-7 evidence bundle — group a (run `phase-2-remaining-27`)
Every block below is verbatim: each item's own claim section, its Facts section, and the
recorded quote of every cited fact. Nothing here is a summary, so the bundle is evidence
for exactly what it quotes and no more. Open `items/<id>.md` when you need any other part,
when a cap marker names a file, or when the contract records no quote.
The bundle is an entry point, never a fence. You keep full access to: web search
(`tools.web_search=true`, with shell network access) for any source check; the entire
published library under `library/`; and every item of this frontier under `items/`,
including items owned by other groups (needed for seams and cross-group alerts).
Read each file once, in the order given, and do not re-read one already in your context —
but read whatever else the mathematics requires.
## Rejection queue (grouped by item)
### `ex-two-sphere-as-a-coadjoint-orbit-of-so-three` — 1 rejection(s)
- `gpt-5.6-terra` (context `69915b37bcf42491`): Step 2.1 is ill-typed: \(\omega_{S^2}\) is on the unit sphere, but \(\xi_{\mathcal O}(\alpha),\eta_{\mathcal O}(\alpha)\in T_\alpha S_r^2\). One must apply the inverse-dilation differential before evaluating the unit-sphere area form.

### `ex-vogan-diagrams-for-real-forms-of-sl-three-c` — 1 rejection(s)
- `gpt-5.6-terra` (context `d0db550f7b1b601c`): Step 2.1 falsely asserts E12∈k0 and E23∈p0. Neither matrix belongs to the real algebra su(2,1): E12 is not skew-Hermitian and E23 is not in its p0. Only their root spaces lie in the complexifications k and p, which the proof does not state.

### `ex-weighted-circle-actions-and-weighted-projective-singular-quotients` — 1 rejection(s)
- `gpt-5.6-terra` (context `56832536ffca21f0`): Fatal level mismatch: with μ(z)=−½∑w_j|z_j|²+c, the stated level μ⁻¹(c) is {0}, not an ellipsoid, and contains no point having only a nonzero j-th coordinate. Thus steps 3–4 and the weighted-projective quotient conclusion do not apply to that level.

### `fs-a-plain-dynkin-diagram-classifies-real-forms` — 1 rejection(s)
- `gpt-5.6-terra` (context `c88509715eefca24`): L4 unconditionally invokes classification by Vogan diagrams, but the cited classification theorem explicitly assumes AC. Neither the facts nor proof assumes AC, so this dependency restatement (and step 3's reliance on it) is not licensed.

### `fs-every-symplectic-action-is-hamiltonian` — 1 rejection(s)
- `gpt-5.6-terra` (context `289c3161f74c64c7`): F1 inaccurately attributes differential/symplectic facts to def-two-dimensional-torus, whose supplied interface only defines T² as a pointed product topological space. Thus dx, dy, ω, ∂x, and the nonzero-period claim are unlicensed.

### `fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k` — 1 rejection(s)
- `gpt-5.6-terra` (context `712712173536fff7`): [L3] materially misstates its cited interface: it asserts closed subgroups are embedded and gives an exponential Lie-algebra criterion, while the supplied theorem only gives uniqueness/existence of connected immersed subgroups. Steps 1.2 and 3.1 rely on this unlicensed claim.

### `fs-moment-maps-are-unique-without-normalization` — 1 rejection(s)
- `gpt-5.6-terra` (context `b5abea1c15c79e55`): [F1] inaccurately restates its cited cotangent-lift proposition: that interface proves the component moment equations but says coadjoint equivariance is verified in a separate companion lemma. No such lemma is cited, so 1.1 and the use of F3 lack an equivariant moment map.

### `fs-restricted-root-systems-are-always-reduced` — 1 rejection(s)
- `gpt-5.6-terra` (context `0de75d9b9e6dffe1`): L3 applies prop-restricted-root-systems-may-be-nonreduced and thm-restricted-root-space-decomposition while omitting their explicit AC hypothesis. Listing def-axiom-of-choice as a dependency does not assume AC; the item never states it.

### `fs-the-cotangent-lift-moment-map-has-a-plus-sign-under-the-library-fundamental-field-convention` — 1 rejection(s)
- `gpt-5.6-terra` (context `7bf9a710f322dcd9`): Step 2.1 reverses the test: step 1 requires dμ=dp, so coordinate p—not −p—works. Since ξ_Q=−∂q, −p(ξ_Q)=p, whereas +p(ξ_Q)=−p. The claimed identification and inference are false.

### `fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g` — 1 rejection(s)
- `gpt-5.6-terra` (context `81238af834f59eeb`): [F1] is not licensed by its citations: the SU(2)/SO(3) item only states a double cover and Lie-algebra isomorphism, while the cross-product and coadjoint items merely define notions. None establishes the asserted cross-product Lie-algebra and coadjoint-rotation identifications.

### `lem-characteristic-kernel-on-a-regular-moment-level` — 1 rejection(s)
- `gpt-5.6-terra` (context `77812c1224f5fefb`): Step 2.1 misuses F4: it makes \(\eta_M(p)\) tangent to the level only for \(\eta\in\mathfrak g_\alpha\), not every \(\eta\in\mathfrak g\). Thus constancy of \(\mu^\xi\) on the level does not prove the claimed vanishing.

### `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k` — 1 rejection(s)
- `gpt-5.6-terra` (context `b6938e50f18d3a8d`): Step 3.1 invokes nonexistent G-invariant vector fields with arbitrary value X∈p at eK: such a value must be K-fixed. Thus its Koszul computation is invalid, and the later identification of the canonical transport with the Levi-Civita connection is unsupported.

### `prop-classical-real-forms-of-the-classical-complex-lie-algebras` — 1 rejection(s)
- `gpt-5.6-terra` (context `e3f4d4ea413a3c14`): Step 1.3’s map X↦−I_{p,q}X^T I_{p,q} is complex-linear, not conjugate-linear. Its fixed locus therefore cannot be justified by L1 as a real form (and is not the real algebra so(p,q)); this fatally breaks the orthogonal construction and 3.2.

### `prop-compact-group-moment-map-can-be-averaged-to-an-equivariant-one-when-the-affine-obstruction-vanishes` — 1 rejection(s)
- `gpt-5.6-terra` (context `587c6f53e396faaf`): Step 4.1 wrongly applies F4: μ was assumed only infinitesimal, not equivariant. Thus μ̄−μ need not be coadjoint-fixed (e.g. shift an equivariant O(2) moment map by a reflection-nonfixed constant), contradicting the stated conclusion.

### `prop-dimension-of-a-regular-nonzero-reduced-space` — 1 rejection(s)
- `gpt-5.6-terra` (context `577a8d14a66e6fce`): Missing nonempty-level hypothesis: the supplied regularity criterion is vacuous on an empty level. E.g. a trivial S^1-action on a point with constant moment map and α≠0 satisfies all assumptions, but M_α is empty and cannot have the asserted dimension −2.

### `prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity` — 1 rejection(s)
- `gpt-5.6-terra` (context `d83cc74a30509334`): The unqualified title is false for disconnected G. For G=O(2) acting trivially on a point and nonzero μ∈so(2)*, the bracket identity holds (g is abelian) but a reflection sends μ to −μ, so μ is not equivariant.

### `prop-equivariant-symplectomorphisms-preserve-moment-maps-up-to-a-coadjoint-fixed-covector` — 1 rejection(s)
- `gpt-5.6-terra` (context `0a59601f689c27b7`): Step 4.1 is false: replacing μ by any constant normalization μ+c leaves (μ+c)∘φ−(μ+c)=μ∘φ−μ=δ. E.g. on T*R, a fiber translation commutes with the translation action and shifts its moment map nontrivially.

### `prop-infinitesimal-generator-of-a-symplectic-action-is-symplectic` — 1 rejection(s)
- `gpt-5.6-terra` (context `ddbbb2d96b74adbb`): [F3] inaccurately attributes the formula \(\mathcal L_XT=\left.\frac d{dt}\right|_0\Phi_t^*T\) to its cited proposition, whose supplied interface states only flow-invariance iff vanishing. Step 4 relies on this unsupported restatement.

### `prop-invariant-hamiltonians-descend-to-reduced-hamiltonians` — 1 rejection(s)
- `gpt-5.6-terra` (context `c26f41b04f0516ae`): [F4] inaccurately restates its dependency: that proposition requires both source and target to be free proper G-manifolds and descends to N/G. A trivially acted-on R is not free for nontrivial G, so it does not license descent of H|level to h.

### `prop-real-cartan-subalgebras-need-not-be-conjugate` — 1 rejection(s)
- `gpt-5.6-terra` (context `78670ac4cf8633ec`): Step 3.1 contradicts step 2.1: it writes -B(e-f,e-f)=B(e-f,e-f)=8, whereas step 2.1 proves B(e-f,e-f)=B(k,k)=-8. Thus the displayed verification of positivity contains a false equality.

### `prop-reduction-commutes-with-products` — 1 rejection(s)
- `gpt-5.6-terra` (context `6afb74146c83d322`): F4 inaccurately attributes product freeness/properness and the product-quotient identification to its cited dependencies: neither supplied interface states these facts. Step 1.3 and especially 3.1 rely on that unsupported restatement.

### `prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness` — 1 rejection(s)
- `gpt-5.6-terra` (context `cb76ab7048d94b74`): Step 1.2 is not licensed: F2 identifies \(\mathfrak g_p=T_eG_p\) but does not establish that the stabilizer is a closed embedded Lie subgroup. F3 only relates discreteness to being such a zero-dimensional subgroup, so the claimed equivalence needs the omitted closed-stabilizer th

### `prop-restricted-root-systems-may-be-nonreduced` — 1 rejection(s)
- `gpt-5.6-terra` (context `a3d1218bd4f60eda`): Step 9.1 reverses the supplied Cartan-integer convention: it writes n_{γβ}=2(γ,β)/(β,β), whereas the dependency defines n_{γβ}=2(β,γ)/(γ,γ). Thus its rank-two and Cartan-matrix inference is not licensed.

### `prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction` — 1 rejection(s)
- `gpt-5.6-terra` (context `072c05f0ac7e30e1`): Item 3 asserts an unconditional diffeomorphism, but no regularity, freeness, or properness is assumed, so the quotients need not be smooth manifolds. Step 3.1 wrongly invokes F4’s conditional free/proper reduction hypotheses.

### `prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition` — 1 rejection(s)
- `gpt-5.6-terra` (context `bd9d9745bb4e92ce`): Step 1.5 falsely claims exp is injective on n(Σ+)⊕n(-Σ+) by L1, which only covers n(Σ+). In SL₂(R), exp(2π(E−F))=1=exp(0), while E−F lies in that sum. Its deduction N(Σ+)≠N(-Σ+) is unsupported.

### `prop-whitehead-two-removes-the-infinitesimal-equivariance-obstruction-for-semisimple-actions` — 1 rejection(s)
- `gpt-5.6-terra` (context `d607c562ab27315b`): [A1] falsely says ACω is used only through F1 and F5: F5’s supplied Poisson-bracket interface contains neither fundamental-field nor exponential material, while step 5 applies F6, whose interface independently assumes ACω.

### `rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds` — 1 rejection(s)
- `gpt-5.6-terra` (context `96e70c8ecc2c8e03`): The first bullet attributes the exact identity im(dμ_p)=ann(g_p) to the regularity/local-freeness proposition, but its supplied interface states only surjectivity iff g_p=0. That stronger differential-image formula is an inaccurate dependency restatement/unlicensed inference.

### `rem-representation-theory-of-noncompact-real-reductive-groups` — 1 rejection(s)
- `gpt-5.6-terra` (context `313a1e7ca61b3f1a`): False as stated: the noncompact reductive Lie group R has a faithful finite-dimensional unitary representation t↦diag(e^{it},e^{i√2t}) into U(2). Its image is dense, not compact; finite-dimensional unitarity alone does not force G to be compact.

### `thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification` — 1 rejection(s)
- `gpt-5.6-terra` (context `845ef52546261a11`): Step 4.1 is false: with [Z,Eβ]=2iEβ and Wβ=π/4(σEβ−Eβ), [Wβ,Z]=iπ/2(Eβ+σEβ), not −iπ/2(Eβ−σEβ), and ad_Wβ²Z≠0. Its Cayley-transform computation is invalid.

### `thm-classification-of-real-forms-by-vogan-diagrams` — 1 rejection(s)
- `gpt-5.6-terra` (context `a027f8df1a1ab400`): Step 7.1 falsely infers |a_α|=1 from a_αa_{-α}=1 (e.g. 2 and 1/2). No stated normalization relates compact conjugation to Y_{±α} to supply this. Thus step 8.1 cannot obtain H,H' in the compact Cartan, breaking injectivity.

### `thm-classification-of-real-semisimple-lie-algebras` — 1 rejection(s)
- `gpt-5.6-terra` (context `ab22be88a8971f21`): Step 2.3 falsely says D_n has one nontrivial-involution diagram, omitting e.g. so(1,2n-1), whose Vogan diagram has the nontrivial D_n involution. Step 2.2 allows only even q, so the claimed enumeration and completeness fail.

### `thm-coadjoint-orbits-are-symplectic-manifolds` — 1 rejection(s)
- `gpt-5.6-terra` (context `f86f5804d96d55a7`): F4 inaccurately attributes bracket preservation of Ad_h to its cited interfaces: those state only exponential intertwining and that Ad is a smooth group representation. This unlicensed fact is essential to step 2.3's invariance calculation.

### `thm-complexification-dichotomy-for-a-real-simple-lie-algebra` — 1 rejection(s)
- `gpt-5.6-terra` (context `aad31ddeb924f4a4`): [L6] inaccurately restates its interfaces: the supplied root-space theorem assumes a chosen Cartan and does not assert Cartan existence or one-dimensional root spaces. Step 5.1 relies on the unlicensed existence claim.

### `thm-conjugacy-of-compact-real-forms` — 1 rejection(s)
- `gpt-5.6-terra` (context `8dcb849a9cd49487`): Step 5.2 asserts \(2\rho\tau_1=\omega^2\tau_1\), while \(\rho=\omega^2\); this says \(2\rho\tau_1=\rho\tau_1\), false since \(\rho\tau_1\) is invertible. It is the stated justification for the key conjugation relation.

### `thm-existence-of-a-compact-real-form` — 1 rejection(s)
- `gpt-5.6-terra` (context `4b2293d542473e47`): The proof never establishes or cites existence of a Cartan subalgebra (and base) for arbitrary g. Every supplied root-space/Chevalley/Serre interface assumes such data, so L1 cannot be fixed for the stated universal claim.

### `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group` — 1 rejection(s)
- `gpt-5.6-terra` (context `7865fe22abdc6815`): [L2] inaccurately restates its dependencies: neither supplied exponential interface says every one-parameter subgroup is t↦exp(tX). This unlicensed claim, used with L3’s unsupported exponential Lie-algebra characterization, is essential to steps 1.2 and 2.1.

### `thm-global-iwasawa-decomposition` — 1 rejection(s)
- `gpt-5.6-terra` (context `45da2bb7d2ab16a8`): Step 2.1 assumes every n∈N is exp X with X∈𝔫. The Facts likewise list N=exp(𝔫), a conclusion. The cited exponential theorem requires N simply connected, which is proved only using this injectivity, so the argument is circular.

### `thm-marsden-weinstein-meyer-symplectic-reduction` — 1 rejection(s)
- `gpt-5.6-terra` (context `59711950b53931e4`): Regular values may have empty fibres, but the cited regular-level-set theorem requires a nonempty fibre. The hypotheses do not require μ⁻¹(α)≠∅, so [F1] and hence the asserted quotient smooth structure are not licensed in the empty-level case.

### `thm-reduction-in-stages-for-free-proper-regular-actions` — 1 rejection(s)
- `gpt-5.6-terra` (context `fcfac9b2f434ea94`): [F4] inaccurately restates its descent dependency: that proposition requires both source and target to be free proper H-manifolds, but h^0 is given the trivial H-action (not free unless H is trivial). Thus step 2.1 is not licensed by F4.

### `thm-restricted-root-space-decomposition` — 1 rejection(s)
- `gpt-5.6-terra` (context `a2d0d1c31737718a`): L1 attributes invariance, nondegeneracy, and theta-invariance of B to the supplied proposition, whose interface states none of them. Step 1.1 crucially uses B-invariance, so self-adjointness is unlicensed; its displayed sign chain is also false.

## Item evidence
### [[ex-two-sphere-as-a-coadjoint-orbit-of-so-three]]

Identify $\mathfrak{so}(3)$ with $\mathbb R^3$ by $v\mapsto(u\mapsto v\times u)$,
so that the bracket becomes the cross product, the adjoint and coadjoint
actions become the standard rotation action of $SO(3)$ on $\mathbb R^3$, and
$\mathfrak{so}(3)^*$ is identified with $\mathbb R^3$ compatibly. Then the
coadjoint orbits are the origin and the spheres $S^2_r=\{v:|v|=r\}$ of radius
$r>0$, and on the sphere the KKS form is $r$ times the standard area form:

$$\omega_\alpha(\xi_{\mathcal O},\eta_{\mathcal O}) =\alpha\cdot(\xi\times\eta)=r\,\omega_{S^2}(\xi_{\mathcal O},\eta_{\mathcal O}), \qquad |\alpha|=r,$$

and the inclusion $S^2_r\hookrightarrow\mathbb R^3$ is an equivariant moment
map for the rotation action.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, the identification of $\mathfrak{so}(3)$ and $\mathfrak{so}(3)^*$ with $\mathbb R^3$, and a covector $\alpha\ne0$.

[F1] $SO(3)$ is an embedded Lie group with Lie algebra $\mathfrak{so}(3)$; under the identification, the bracket is the cross product and the coadjoint action is the standard rotation action of $SO(3)$ on $\mathbb R^3$. [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]], [[def-cross-product-in-r3]], [[def-coadjoint-representation-of-a-lie-group]].

[F2] Coadjoint orbits carry the KKS form $\omega_\beta(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta))=\beta([\xi,\eta])$, which is symplectic and $G$-invariant, and the orbit inclusion is an equivariant moment map. [[thm-coadjoint-orbits-are-symplectic-manifolds]], [[prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map]].

[F3] The standard area form of the unit sphere satisfies $\omega_{S^2}(u,v)=\hat\alpha\cdot(u\times v)$ at the point $\hat\alpha$, where $u,v$ are tangent vectors, and it is rotation invariant. [[def-cross-product-in-r3]], [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]].

**Cited clauses (verbatim quotes from the proof contract).**

- `F1` → [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]] (Example)
  > Conjugation on imaginary quaternions defines a twofold covering $$q:\operatorname{SU}(2)\longrightarrow\operatorname{SO}(3)$$ with kernel $\{\pm I\}$. Its diffe
- `F1` → [[def-cross-product-in-r3]] (Definition)
  > For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, define $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$. This is the right-handed **cro
- `F1` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F2` → [[thm-coadjoint-orbits-are-symplectic-manifolds]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $\mathcal O\subseteq\mathfrak g^*$ be a coadjoint orbit with its canonical immersed homogeneous-space structure and let $\omega
- `F2` → [[prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Equip the coadjoint orbit $\mathcal O\subseteq \mathfrak g^*$ with its canonical structure and the KKS form $\omega$, and let $\Phi
- `F3` → [[def-cross-product-in-r3]] (Definition)
  > For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, define $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$. This is the right-handed **cro
- `F3` → [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]] (Example)
  > Conjugation on imaginary quaternions defines a twofold covering $$q:\operatorname{SU}(2)\longrightarrow\operatorname{SO}(3)$$ with kernel $\{\pm I\}$. Its diffe

### [[ex-vogan-diagrams-for-real-forms-of-sl-three-c]]

Assume the Axiom of Choice. Let $\mathfrak g=\mathfrak{sl}_3(\mathbb C)$ with
Dynkin diagram $A_2$ and simple roots $\alpha_1=\varepsilon_1-\varepsilon_2$,
$\alpha_2=\varepsilon_2-\varepsilon_3$ relative to the diagonal Cartan
subalgebra. Then the compact, the intermediate and the split real form of
$\mathfrak g$ are pairwise non-isomorphic and are distinguished by their Vogan
data
([[def-vogan-diagram]],
[[thm-classification-of-real-forms-by-vogan-diagrams]],
[[prop-classical-real-forms-of-the-classical-complex-lie-algebras]]):

$$\mathfrak{su}(3):\ \text{trivial involution, no painted vertex},$$

$$\mathfrak{su}(2,1):\ \text{trivial involution, exactly one painted vertex (}\alpha_2,\ \text{equivalently}\ \alpha_1),$$

$$\mathfrak{sl}_3(\mathbb R):\ \text{the nontrivial involution of }A_2\text{, no painted vertex},$$

and these three classes are pairwise distinct, so on $A_2$ the Vogan data
distinguish the compact, the intermediate and the split real form.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; the complex Lie algebra $\mathfrak g=\mathfrak{sl}_3(\mathbb C)$ with diagonal Cartan subalgebra $\mathfrak h$ ([[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]]); the three real forms $\mathfrak{su}(3)$, $\mathfrak{su}(2,1)$ and $\mathfrak{sl}_3(\mathbb R)$ of $\mathfrak g$ ([[ex-unitary-and-special-unitary-lie-groups]], [[ex-general-and-special-linear-lie-groups]], [[def-classical-complex-matrix-lie-algebras]]).

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the conjugacy and classification statements used in [L4] and [L5].

[L1] The Killing form of $\mathfrak{sl}_3(\mathbb C)$ is $B(X,Y)=6\operatorname{tr}(XY)$, and a real form $\mathfrak g_0$ is compact exactly when $B$ is negative definite on it ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[def-cartan-involution-of-a-real-semisimple-lie-algebra]]).

[L2] For $\mathfrak g_0=\mathfrak{sl}_3(\mathbb R)$ the map $\theta(X)=-X^{\mathsf T}$ is a Cartan involution with $\mathfrak k_0=\mathfrak{so}(3)$ and $\mathfrak p_0$ the symmetric traceless matrices ([[ex-cartan-involution-and-k-plus-p-for-sl-n-r]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

[L3] A $\theta$-stable Cartan subalgebra $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ of a real semisimple Lie algebra has compact part $\mathfrak t_0=\mathfrak h_0\cap\mathfrak k_0$ and split part $\mathfrak a_0=\mathfrak h_0\cap\mathfrak p_0$; it is maximally compact exactly when $\mathfrak t_0$ is a maximal abelian subspace of $\mathfrak k_0$, and for a maximally compact $\theta$-stable Cartan there are no real roots ([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]], [[def-cartan-subalgebra-of-a-lie-algebra]]).

[L4] The Vogan diagram of a triple $(\mathfrak g_0,\mathfrak h_0,\Sigma^{+})$, with $\mathfrak h_0$ maximally compact and $\Sigma^{+}$ a compatible positive system, is the Dynkin diagram of $\Sigma^{+}$ with the two-element orbits under the involution induced by $\theta$ labelled and the one-element orbits painted or not according as the corresponding imaginary simple root is noncompact or compact; two real forms are isomorphic exactly when their Vogan diagrams are equivalent ([[def-vogan-diagram]]).

[L5] The assignment sending a real form of a complex semisimple Lie algebra to the equivalence class of its Vogan diagram is well defined up to equivalence and injective: real forms with equivalent Vogan diagrams are isomorphic, and the class does not depend on the chosen maximally compact Cartan or compatible positive system; these are the two directions established in the cited items ([[thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence]], [[thm-classification-of-real-forms-by-vogan-diagrams]]). The classical list contains, for type $A_2$, the entries $\mathfrak{su}(3,0)=\mathfrak{su}(3)$ (the compact entry with $q=0$) and $\mathfrak{su}(2,1)$ among the algebras $\mathfrak{su}(p,q)$ with $p+q=3$, together with the split form $\mathfrak{sl}_3(\mathbb R)$ ([[prop-classical-real-forms-of-the-classical-complex-lie-algebras]]); its exhaustive-enumeration direction is recorded there as an open obligation and is not used here.





**Proof technique:** direct computation in each real form.

1.1 The compact form $\mathfrak{su}(3)$: the identity is a Cartan involution, since $\mathfrak{su}(3)$ is a compact real form by [L1], so $\mathfrak k_0=\mathfrak{su}(3)$ and $\mathfrak p_0=0$. The diagonal traceless skew-Hermitian matrices $\mathfrak t_0$ form a maximal abelian subspace of $\mathfrak k_0$, hence a maximally compact $\theta$-stable Cartan subalgebra $\mathfrak h_0=\mathfrak t_0$ with $\mathfrak a_0=0$ by [L3]; all roots of $(\mathfrak g,\mathfrak h)$ are therefore imaginary, and each of them is compact because the root spaces lie in the complexification of $\mathfrak k_0$, which is all of $\mathfrak g$. The Vogan diagram has the trivial involution, no complex roots, and no painted vertex. [given, L1, L3, L4, algebra]

1.2 The intermediate form $\mathfrak{su}(2,1)$: with $I=\operatorname{diag}(1,1,-1)$ the map $\theta(X)=-X^{*}$ is a Cartan involution of $\{X:X^{*}I+IX=0\}$ and $\mathfrak k_0=\mathfrak{su}(2)\oplus\mathfrak u(1)$ consists of the matrices whose off-diagonal block vanishes; the diagonal traceless skew-Hermitian matrices form a maximally compact $\theta$-stable Cartan subalgebra with $\mathfrak a_0=0$, so again all roots are imaginary. [given, L3, L4, algebra]

1.3 The split form $\mathfrak{sl}_3(\mathbb R)$: let $H_1=\begin{pmatrix}0&-1&0\\ 1&0&0\\ 0&0&0\end{pmatrix}\in\mathfrak k_0$ and $H_2=\operatorname{diag}(1,1,-2)\in\mathfrak p_0$, so that $\mathfrak h_0=\mathbb RH_1\oplus\mathbb RH_2$ is a $2$-dimensional abelian subalgebra of $\mathfrak{sl}_3(\mathbb R)$ with $\theta H_1=H_1$ and $\theta H_2=-H_2$. It is a Cartan subalgebra: conjugating by the invertible complex matrix $Q=\operatorname{diag}\left(\begin{pmatrix}1&1\\ -i&i\end{pmatrix},1\right)$ turns $H_1$ into $\operatorname{diag}(i,-i,0)$ and fixes $H_2$, so $\operatorname{ad}_H$ is diagonalizable over $\mathbb C$ for every $H\in\mathfrak h_0$, and the centralizer of $\mathfrak h_0$ in $\mathfrak{sl}_3(\mathbb C)$ is the diagonal Cartan algebra, of the same dimension $2$, so $\mathfrak h_0$ is abelian, self-normalizing and of maximal dimension among abelian subalgebras. The same conjugation shows that the roots of $(\mathfrak g,\mathfrak h)$ take on $H=xH_1+yH_2$ the values $\pm 2ix$, $\pm(ix+3y)$ and $\pm(-ix+3y)$, so that with $\beta_1=\varepsilon_1-\varepsilon_2$ and $\beta_2=\varepsilon_2-\varepsilon_3$ the values are $\beta_1(H)=2ix$, $\beta_2(H)=-ix+3y$ and $(\beta_1+\beta_2)(H)=ix+3y$. Finally $\dim\mathfrak t_0=1$ is maximal because two independent elements of $\mathfrak k_0=\mathfrak{so}(3)\cong\mathbb R^3$ do not commute under the cross product, so $\mathfrak h_0$ is maximally compact by [L3]. [given, L2, L3, algebra]

2.1 The simple roots of $\mathfrak{su}(2,
… [truncated at 6000 characters by the bundle cap — open `items/ex-vogan-diagrams-for-real-forms-of-sl-three-c.md` for the rest; nothing below this cut is evidence]

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[ex-weighted-circle-actions-and-weighted-projective-singular-quotients]]

Fix integers $w_1,\dots,w_n\ge1$ and let the circle act on
$\mathbb C^n$ with the standard form $\omega_0$ by

$$e^{i\theta}\mathbin{\cdot}(z_1,\dots,z_n) =\bigl(e^{iw_1\theta}z_1,\dots,e^{iw_n\theta}z_n\bigr).$$

This action is Hamiltonian with
$\mu(z)=-\frac12\sum_jw_j|z_j|^2+c$, and if some weight satisfies $w_j\ge2$
then the circle acts **not freely** on every level: the point with only the
$j$-th coordinate nonzero has stabilizer the group of $w_j$-th roots of unity.
The quotient of the level is then a weighted projective space
$\mathbb{CP}(w_1,\dots,w_n)$, an orbifold with cyclic quotient singularities
rather than the smooth manifold produced by the reduction theorem. This
exhibits why freeness cannot be erased from the theorem of this page.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, weights $w_1,\dots,w_n\ge1$, the weighted circle action on $\mathbb C^n$ with $\omega_0=\sum_jdx_j\wedge dy_j$, and a level constant.

[F1] The scalar case shows how to contract the fundamental field; for the weighted action and $\xi=1$ the fundamental field is $\xi_M=\sum_jw_j(y_j\partial_{x_j}-x_j\partial_{y_j})$. [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F2] The component equation is $d\mu^\xi=-\iota_{\xi_M}\omega_0$ and the coadjoint action of the circle is trivial. [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]].

[F3] The reduction theorem applies only when the value is regular and the stabilizer action on the level is free and proper; otherwise the quotient need not be a smooth manifold. [[thm-marsden-weinstein-meyer-symplectic-reduction]], [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]], [[rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds]].

**Cited clauses (verbatim quotes from the proof contract).**

- `F1` → [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]] (Example)
  > Identify $\mathbb C^n$ with $\mathbb R^{2n}$ by $z_j=x_j+iy_j$ and equip it
  > with the standard symplectic form
  > $\omega_0=\sum_{j=1}^n dx_j\wedge dy_j$; let the circle act by scalar
  > multiplication, $e^{i\theta}\mathbin{\cdot}z=e^{i\theta}z$. This action is
  > Hamiltonian, and with the library's fundamental-field convention
  > $\xi_M=\frac d{dt}\big|_0\exp(-t\xi)\mathbin{\cdot}p$ the moment map is the
  > **negative** quadratic function
  > 
  > $$\mu(z)=-\frac12|z|^2+c,\qquad c\in\mathbb R,$$
  > 
  > where the displayed real number denotes the corresponding covector under the
  > standard identification $(\mathfrak s^1)^*\cong\mathbb R$. The constant is a
  > normalization. The positive quadratic
  > $+\frac12|z|^2$ belongs to the opposite generator convention.
- `F1` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth
  > manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The
  > **fundamental vector field** associated with $X$ is
  > 
  > $$X_M(x):=\left.\frac{d}{dt}\right|_{t=0}\exp_G(-tX)\mathbin{\cdot}x\in T_xM.$$
  > 
  > The minus sign is part of the standing convention. With it, the assignment
  > $X\mapsto X_M$ is a Lie-algebra homomorphism for a left action; without it,
  > the usual left-action infinitesimal generator is an antihomomorphism. The
  > following theorem proves the bracket claim rather than building it into this
  > definition.
  > 
  > The exponential map is smooth by
  > [[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]],
  > so $(t,x)\mapsto\exp_G(-tX)\cdot x$ is smooth. In local coordinates,
  > differentiating this smooth map in the $t$-variable at $0$ gives coefficients
  > that depend smoothly on $x$. Thus $x\mapsto X_M(x)$ is a smooth tangent-bundle
  > section in the sense of
  > [[def-smooth-vector-field-as-a-tangent-bundle-section]].
  > 
  > Here $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is
  > used through both the supplied exponential-map construction and the canonical
  > smooth tangent-bundle structure underlying the smooth-section interface. For
  > $X=0$ the field is zero. The definition applies to disconnected $G$ and $M$,
  > and makes no effectiveness, freeness, or properness assumption on the action.
- `F2` → [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]] (Example)
  > Identify $\mathbb C^n$ with $\mathbb R^{2n}$ by $z_j=x_j+iy_j$ and equip it
  > with the standard symplectic form
  > $\omega_0=\sum_{j=1}^n dx_j\wedge dy_j$; let the circle act by scalar
  > multiplication, $e^{i\theta}\mathbin{\cdot}z=e^{i\theta}z$. This action is
  > Hamiltonian, and with the library's fundamental-field convention
  > $\xi_M=\frac d{dt}\big|_0\exp(-t\xi)\mathbin{\cdot}p$ the moment map is the
  > **negative** quadratic function
  > 
  > $$\mu(z)=-\frac12|z|^2+c,\qquad c\in\mathbb R,$$
  > 
  > where the displayed real number denotes the corresponding covector under the
  > standard identification $(\mathfrak s^1)^*\cong\mathbb R$. The constant is a
  > normalization. The positive quadratic
  > $+\frac12|z|^2$ belongs to the opposite generator convention.
- `F3` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
  > let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the
  > coadjoint stabilizer $G_\alpha$ acts freely and properly on the level
  > $\mu^{-1}(\alpha)$. Put
  > 
  > $$M_\alpha:=\mu^{-1}(\alpha)/G_\alpha,\qquad \pi:\mu^{-1}(\alpha)\longrightarrow M_\alpha,$$
  > 
  > with the quotient structure, and let $\iota:\mu^{-1}(\alpha)\hookrightarrow M$
  > be the inclusion. Then $M_\alpha$ is a smooth manifold and there is a unique
  > symplectic form $\omega_\alpha$ on $M_\alpha$ satisfying
  > 
  > $$\pi^*\omega_\alpha=\iota^*\omega .$$
  > 
  > The pair $(M_\alpha,\omega_\alpha)$ is the **symplectic reduction** of
  > $(M,\omega,\mu)$ at $\alpha$.
- `F3` → [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a Hamiltonian $G$-space with moment map
  > $\mu$ and a point $p\in M$, the differential $d\mu_p:T_pM\to\mathfrak g^*$ is
  > surjective if and only if the infinitesimal stabilizer $\mathfrak g_p$ is
  > zero. Consequently a covector $\alpha\in\mathfrak g^*$ is a regular value of
  > $\mu$ if and only if $\mathfrak g_p=0$ for every $p\in\mu^{-1}(\alpha)$, that
  > is, if and only if the action is locally free along the level
  > $\mu^{-1}(\alpha)$.
- `F3` → [[rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds]] (Remark)
  > The reduction theorem of this page assumes that the value of the moment map is
  > regular and that the stabilizer acts freely and properly on the level
  > ([[thm-marsden-weinstein-meyer-symplectic-reduction]]). Both hypotheses are
  > load-bearing, and nothing on this page asserts a smooth quotient without them:
  > 
  > * if the value is not regular, the image of the differential is only
  >   $\operatorname{ann}(\mathfrak g_p)$ and the level need not be a submanifold
  >   of the ambient symplectic manifold at all
  >   ([[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]]);
  > * if the action on the level is not free, the quotient is only an orbifold or
  >   a stratified space in general. For the weighted circle actions
  >   $e^{i\theta}\cdot(z_1,z_2)=(e^{ik\theta}z_1,e^{i\ell\theta}z_2)$ the quotient
  >   of a level is a weighted projective space, and the stabilizers of the
  >   coordinate axes produce cone points of orders $k$ and $\ell$; the classical
  >   teardrop and football orbifolds arise this way (da Silva, §24.5).
  > 
  > The counterexample `cex-zero-angular-momentum-level-with-nonfree-points-is-singular`
  > on the companion examples page exhibits the failure of freeness on the zero
  > angular-momentum level. Singular reduction, slice normal forms, orbifold
  > structures and the stratified symplectic category are deferred to later
  > development; they are named here as boundaries of the present theorem and are
  > not used as suppliers anywhere on this page.

### [[fs-a-plain-dynkin-diagram-classifies-real-forms]]

False: the plain Dynkin diagram of the complexification classifies the real
forms of a complex semisimple Lie algebra, so that no additional decoration is
needed.

**Facts & Assumptions (verbatim).**

**Given:** The complex simple Lie algebra $\mathfrak{sl}_2(\mathbb C)$ with its real forms $\mathfrak{su}(2)=\{X:X^{*}=-X\}$ and $\mathfrak{sl}_2(\mathbb R)$, and the Dynkin diagram conventions of [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]].

[L1] $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$ are real forms of $\mathfrak{sl}_2(\mathbb C)$: the unitary algebra is the fixed locus of the conjugate-linear involution $X\mapsto-X^{*}$, and the real basis $h,e,f$ of $\mathfrak{sl}_2(\mathbb R)$ is a complex basis of $\mathfrak{sl}_2(\mathbb C)$ ([[prop-real-cartan-subalgebras-need-not-be-conjugate]], [[def-special-linear-lie-algebra-sl-two]], [[def-classical-complex-matrix-lie-algebras]]).

[L2] The Killing form of $\mathfrak{sl}_2(\mathbb C)$ restricts to a negative definite form on $\mathfrak{su}(2)$ and takes the value $B(h,h)=8>0$ on the nonzero element $h=\operatorname{diag}(1,-1)\in\mathfrak{sl}_2(\mathbb R)$, so the two real forms are not isomorphic: an isomorphism preserves the Killing form, since $\operatorname{ad}_{\varphi X}=\varphi\operatorname{ad}_X\varphi^{-1}$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-real-cartan-subalgebras-need-not-be-conjugate]]).

[L3] The complex simple Lie algebra $\mathfrak{sl}_2(\mathbb C)$ has Dynkin diagram $A_1$, the single-vertex diagram with no edges, and the Dynkin diagram is determined by the Cartan matrix of the root system of the complexification ([[prop-classical-types-correspond-to-sl-so-and-sp]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[L4] The extra data beyond the plain Dynkin diagram that classify real forms are recorded by the Vogan diagram of a maximally compact Cartan subalgebra — the induced involution of the simple roots together with the painting of the fixed vertices — and equivalently by the Satake diagram of a maximally split Cartan subalgebra with its colouring and arrow pairing ([[def-vogan-diagram]], [[def-satake-diagram]], [[thm-classification-of-real-forms-by-vogan-diagrams]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[fs-every-symplectic-action-is-hamiltonian]]

Every symplectic Lie-group action is Hamiltonian. **This is false.**

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, the two-torus $T^2=\mathbb R^2/\mathbb Z^2$ with $\omega=dx\wedge dy$, and the translation action of $G=\mathbb R$ in the first coordinate.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface.

[F1] On $T^2$ the one-forms $dx$ and $dy$ are well defined, $\omega=dx\wedge dy$ is symplectic, and the vector field $\partial_x$ is symplectic but not Hamiltonian: $\iota_{\partial_x}\omega=dy$ has nonzero period and is not exact. [[def-two-dimensional-torus]].

[F2] The action $t\cdot[(x,y)]:=[(x+t,y)]$ is a smooth left action of $\mathbb R$ on $T^2$, and its fundamental field for $\xi=1$ is $\xi_{T^2}=\left.\frac d{dt}\right|_0(-t)\cdot p=-\partial_x$. [[def-fundamental-vector-field-of-a-left-action]], [[def-two-dimensional-torus]].

[F3] A Hamiltonian action admits a map whose component for $\xi$ satisfies $d\mu^\xi=-\iota_{\xi_{T^2}}\omega$. [[def-symplectic-and-hamiltonian-lie-group-action]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[def-two-dimensional-torus]] (Definition)
  > Let $Q=\mathbb R/\mathbb Z$ be the quotient circle of [[def-circle-as-real-line-mod-integers]]. The **two-dimensional torus** is the product space $$T^2:=Q\time
- `F2` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F2` → [[def-two-dimensional-torus]] (Definition)
  > Let $Q=\mathbb R/\mathbb Z$ be the quotient circle of [[def-circle-as-real-line-mod-integers]]. The **two-dimensional torus** is the product space $$T^2:=Q\time
- `F3` → [[def-symplectic-and-hamiltonian-lie-group-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$, let $(M,\omega)$ be a symplectic manifold ([[de

### [[fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k]]

False: the global Cartan and Iwasawa decompositions, as stated for connected
semisimple groups with finite center and compact $K$, hold verbatim for every
nonlinear cover with the same compact $K$, so that no modification of $K$ is
needed.

**Facts & Assumptions (verbatim).**

**Given:** The group $G=\operatorname{SL}_2(\mathbb R)$, its maximal compact subgroup $K=\operatorname{SO}(2)$, the Cartan involution $\theta(X)=-X^{T}$ of $\mathfrak{sl}_2(\mathbb R)$ with $\mathfrak k_0=\mathfrak{so}(2)=\mathbb Rk$, $k=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, and the universal covering homomorphism $\pi\colon\widetilde G\to G$.

[L1] For a connected semisimple Lie group with finite center and a global Cartan involution with differential $\theta$, the fixed group $K$ is a closed compact subgroup with Lie algebra $\mathfrak k_0$ and $K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a diffeomorphism; moreover $G=KAN$ with $A=\exp\mathfrak a$, $N$ the connected subgroup with Lie algebra $\mathfrak n$, and the multiplication map $K\times A\times N\to G$ is a diffeomorphism ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[thm-global-iwasawa-decomposition]]).

[L2] Every connected real Lie group $G$ is isomorphic to $\widetilde G/\Gamma$ for its simply connected covering group and a discrete central subgroup $\Gamma$, and a covering homomorphism is a surjective homomorphism and a covering map ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

[L3] Closed subgroups of a Lie group are embedded Lie subgroups whose Lie algebra is $\{X:\exp(tX)\in H$ for all $t\}$, and connected subgroups with equal Lie algebras coincide ([[thm-lie-subgroup-lie-subalgebra-correspondence]]).

[L4] The map $\theta(X)=-X^{T}$ is a Cartan involution of $\mathfrak{sl}_2(\mathbb R)$, the group $G=\operatorname{SL}_2(\mathbb R)$ is connected semisimple with finite center $\{\pm I\}$ and Lie algebra $\mathfrak{sl}_2(\mathbb R)$, and the involutive automorphism $\Theta(g)=(g^{-1})^{T}$ of $G$ has differential $\theta$ and fixed group $K=\operatorname{SO}(2)$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-special-linear-lie-algebra-sl-two]], [[prop-real-cartan-subalgebras-need-not-be-conjugate]]).

[L5] The universal cover $\widetilde G$ of $G$ is connected and simply connected, and every loop in $G$ lifts; the lifted one-parameter subgroups of $\widetilde G$ project to the corresponding one-parameter subgroups of $G$ ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]], [[thm-lie-subgroup-lie-subalgebra-correspondence]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[fs-moment-maps-are-unique-without-normalization]]

A moment map for a Hamiltonian action is unique without any normalization
condition. **This is false.**

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, the cotangent bundle $T^*\mathbb R=\mathbb R^2$ with canonical coordinates $(q,p)$, the translation action of $G=\mathbb R$ lifted to the cotangent bundle, and the tautological moment map.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and cotangent suppliers.

[F1] For the lifted action of a group acting on $Q$, the tautological moment map has components $\mu^\xi(q,p)=-p(\xi_Q(q))$, and it is an equivariant moment map. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F2] For $Q=\mathbb R$ with the translation action, the fundamental field of $\xi=1$ is the constant field $\xi_Q=-\partial_q$, the lifted action is $t\cdot(q,p)=(q+t,p)$, and the tautological moment map is $\mu(q,p)=p$. [[def-fundamental-vector-field-of-a-left-action]], [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F3] The coadjoint action of an abelian group is trivial, and for connected $M$ every translate $\mu+\delta$ of an equivariant moment map by a coadjoint-fixed covector is again an equivariant moment map. [[def-coadjoint-representation-of-a-lie-group]], [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a smooth manifold $Q$ be given and let $\mu_0:G\times Q\to Q$ denote it. Define the **cotangent-
- `F2` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F2` → [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a smooth manifold $Q$ be given and let $\mu_0:G\times Q\to Q$ denote it. Define the **cotangent-
- `F3` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F3` → [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]] (Statement)
  > Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Fix a symplectic left action of $G$ on $(M,\omega)$. If $\mu_1,\mu_2:M\to\mathfrak g^*$ are two equivarian

### [[fs-restricted-root-systems-are-always-reduced]]

False: the restricted-root system of a real semisimple Lie algebra is always a
reduced root system.

**Facts & Assumptions (verbatim).**

**Given:** The real semisimple Lie algebra $\mathfrak{su}(2,1)$ with $J=\operatorname{diag}(1,1,-1)$, the Cartan involution $\theta(X)=-X^{*}$, the maximal abelian subspace $\mathfrak a=\mathbb RH\subseteq\mathfrak p_0$ for $H=E_{13}+E_{31}$, and its restricted-root system $\Sigma\subseteq\mathfrak a^{*}$ with the functionals $f$ given by $f(H)=1$.

[L1] Restricted roots and restricted-root spaces are the nonzero functionals $\lambda\in\mathfrak a^{*}$ with $\mathfrak g_0^{\lambda}=\{X:[H,X]=\lambda(H)X$ for all $H\in\mathfrak a\}\ne0$, and the multiplicity $m_\lambda$ is $\dim_{\mathbb R}\mathfrak g_0^{\lambda}$ ([[def-restricted-root-and-restricted-root-space]]).

[L2] A reduced crystallographic root system satisfies, in addition to the reflection and integrality conditions, the reducedness condition $\mathbb R\alpha\cap\Phi=\{\alpha,-\alpha\}$ for every $\alpha\in\Phi$ ([[def-reduced-crystallographic-euclidean-root-system]]).

[L3] For $\mathfrak g_0=\mathfrak{su}(2,1)=\{X\in M_3(\mathbb C):X^{*}J+JX=0,\ \operatorname{tr}X=0\}$ with $J=\operatorname{diag}(1,1,-1)$, $\theta(X)=-X^{*}$ and $\mathfrak a=\mathbb RH$, $H=E_{13}+E_{31}$, the restricted-root system is $\Sigma=\{\pm f,\pm2f\}$ with $f(H)=1$ and multiplicities $m_{\pm f}=2$, $m_{\pm2f}=1$; moreover $\mathfrak{su}(2,1)$ is a real form of $\mathfrak{sl}_3(\mathbb C)$, hence a real semisimple Lie algebra ([[prop-restricted-root-systems-may-be-nonreduced]], [[thm-restricted-root-space-decomposition]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[fs-the-cotangent-lift-moment-map-has-a-plus-sign-under-the-library-fundamental-field-convention]]

For the cotangent-lifted action on $T^*Q$ and the library fundamental-field
convention $\xi_M=\frac d{dt}\big|_0\exp(-t\xi)\cdot p$, the moment map
component is $+p(\xi_Q(q))$ rather than $-p(\xi_Q(q))$. **This is false.**

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, the manifold $Q=\mathbb R$ with the translation action of $G=\mathbb R$, the lifted action on $T^*Q$ with canonical coordinates $(q,p)$, and the two candidate component functions $p(\xi_Q(q))$ and $-p(\xi_Q(q))$ for $\xi=1$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and cotangent suppliers.

[F1] The library fundamental field of the lifted action is $\xi_{T^*Q}=\left.\frac d{dt}\right|_0\widehat{a_{\exp(-t\xi)}}$. [[def-fundamental-vector-field-of-a-left-action]].

[F2] For the translation action on $\mathbb R$ the fundamental field of $\xi=1$ is the constant vector field $\xi_Q=-\partial_q$; the lifted action satisfies $\widehat t(q,p)=(q+t,p)$, so its fundamental field is $\xi_{T^*Q}=-\partial_q$ as well. [[def-fundamental-vector-field-of-a-left-action]], [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F3] The canonical form is $\omega_{\mathrm{can}}=dq\wedge dp$ in cotangent coordinates, and the component equation of the library convention is $d\mu^\xi=-\iota_{\xi_{T^*Q}}\omega_{\mathrm{can}}$. [[def-tautological-one-form-on-a-cotangent-bundle]], [[def-hamiltonian-vector-field-and-hamiltonian-function]], [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F4] The tautological moment map of [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]] is $\langle\mu(q,p),\xi\rangle=-p(\xi_Q(q))$. [given]

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F2` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F2` → [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a smooth manifold $Q$ be given and let $\mu_0:G\times Q\to Q$ denote it. Define the **cotangent-
- `F3` → [[def-tautological-one-form-on-a-cotangent-bundle]] (Definition)
  > Assume $\mathrm{AC}_\omega$. For a smooth $n$-manifold $Q$, [[thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]] supplies the smooth cotang
- `F3` → [[def-hamiltonian-vector-field-and-hamiltonian-function]] (Definition)
  > For $H\in C^\infty(M)$, its **Hamiltonian vector field** is the vector field $X_H$ determined by the library sign convention $$\iota_{X_H}\omega=dH.$$ A vector 
- `F3` → [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a smooth manifold $Q$ be given and let $\mu_0:G\times Q\to Q$ denote it. Define the **cotangent-
- `F4` → [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a smooth manifold $Q$ be given and let $\mu_0:G\times Q\to Q$ denote it. Define the **cotangent-

### [[fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g]]

For a regular nonzero value the reduced dimension is
$\dim M-2\dim G$. **This is false**; the general formula subtracts
$\dim G+\dim G_\alpha$, and the two differ as soon as the coadjoint stabilizer
is proper.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, the group $G=SO(3)$ acting on $M=T^*\mathbb R^3$ by cotangent lifts of rotations, and a nonzero covector $\alpha\in\mathfrak{so}(3)^*$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and cotangent suppliers.

[F1] $SO(3)$ is an embedded Lie group with Lie algebra $\mathfrak{so}(3)$; the map sending $v\in\mathbb R^3$ to the endomorphism $u\mapsto v\times u$ is a Lie-algebra isomorphism onto $\mathfrak{so}(3)$ under which $\operatorname{Ad}_g$ corresponds to the rotation $v\mapsto gv$, and the trace pairing identifies $\mathfrak{so}(3)^*\simeq\mathbb R^3$ compatibly, so that the coadjoint action is again the standard rotation action. [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]], [[def-cross-product-in-r3]], [[def-coadjoint-representation-of-a-lie-group]].

[F2] The rotation action is the cotangent lift of a smooth action on $Q=\mathbb R^3$, so it is Hamiltonian with tautological moment map. For $\xi\in\mathbb R^3$ the fundamental field on $Q$ is $\xi_Q(q)=-\xi\times q$, hence $\mu^\xi(q,p)=-p(\xi_Q(q))=p\cdot(\xi\times q)=\xi\cdot(q\times p)$ and $\mu(q,p)=q\times p$ under the identification. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F3] The coadjoint stabilizer of a nonzero $\alpha$ is the circle of rotations about the axis $\alpha$, of dimension $1$. [[def-coadjoint-representation-of-a-lie-group]].

[F4] The dimension of a regular reduced space at $\alpha$ is $\dim M-\dim G-\dim G_\alpha$. [[prop-dimension-of-a-regular-nonzero-reduced-space]].

[F5] A value of the moment map is regular exactly when the stabilizers of points on its level have zero Lie algebra. [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]] (Example)
  > Conjugation on imaginary quaternions defines a twofold covering $$q:\operatorname{SU}(2)\longrightarrow\operatorname{SO}(3)$$ with kernel $\{\pm I\}$. Its diffe
- `F1` → [[def-cross-product-in-r3]] (Definition)
  > For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, define $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$. This is the right-handed **cro
- `F1` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F2` → [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a smooth manifold $Q$ be given and let $\mu_0:G\times Q\to Q$ denote it. Define the **cotangent-
- `F2` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F3` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F4` → [[prop-dimension-of-a-regular-nonzero-reduced-space]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value, and suppose that $G_\alpha$ act
- `F5` → [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a Hamiltonian $G$-space with moment map $\mu$ and a point $p\in M$, the differential $d\mu_p:T_pM\to\mathfrak g^*$ is surjectiv

### [[lem-characteristic-kernel-on-a-regular-moment-level]]

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, let
$\iota:\mu^{-1}(\alpha)\hookrightarrow M$ be the inclusion, and let
$p\in\mu^{-1}(\alpha)$. Then the kernel of the restricted form at $p$ is
exactly the tangent space of the coadjoint-stabilizer orbit:

$$\ker(\iota^*\omega)_p=T_p(G_\alpha\cdot p).$$

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with equivariant moment map $\mu$, a regular value $\alpha$, and $p\in\mu^{-1}(\alpha)$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interfaces cited below.

[F1] $\ker d\mu_p=(T_p(G\cdot p))^\omega$ and $T_p\mu^{-1}(\alpha)=\ker d\mu_p$. [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

[F2] $(W^\omega)^\omega=W$ for subspaces of a symplectic vector space. [[prop-symplectic-double-orthogonal-and-dimension-identities]].

[F3] $X_{\mu^\xi}=-\xi_M$ for all $\xi$. [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]].

[F4] $G_\alpha$ preserves $\mu^{-1}(\alpha)$, so $\eta_M(p)$ is tangent to the level for every $\eta\in\mathfrak g_\alpha$. [[prop-moment-level-is-invariant-under-the-coadjoint-stabilizer]], [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]].

[F5] The moment map is equivariant, so the bracket identity $\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}$ holds for all $\xi,\eta$. [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]].

[F6] The infinitesimal orbit map of the $G_\alpha$-action on $M$ has image $T_p(G_\alpha\cdot p)$, and $\xi\in\mathfrak g_\alpha$ if and only if $\alpha([\xi,\cdot])=0$. [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]], [[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a Hamiltonian action of $G$ on $(M,\omega)$ have moment map $\mu$, and let $p\in M$. Then $$\ker d\mu_p=\bigl(T_p(G\cdot p)\big
- `F1` → [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]] (Statement)
  > Let $F:M\to N$ be smooth, let $q$ be a regular value, and let $p\in F^{-1}(q)$. Then $$T_p\bigl(F^{-1}(q)\bigr)=\ker dF_p.$$
- `F2` → [[prop-symplectic-double-orthogonal-and-dimension-identities]] (Statement)
  > If $W$ is a subspace of the finite-dimensional symplectic vector space $(V,\omega)$, then $$\dim W+\dim W^\omega=\dim V,\qquad (W^\omega)^\omega=W.$$
- `F3` → [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a Hamiltonian action of $G$ on $(M,\omega)$ have moment map $\mu$, and let $p\in M$. Then $$\ker d\mu_p=\bigl(T_p(G\cdot p)\big
- `F4` → [[prop-moment-level-is-invariant-under-the-coadjoint-stabilizer]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ and let $G_\alpha=\{g\in G:g\cdot\alpha=\alpha\}$ b
- `F4` → [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a smooth left action of $G$ on $M$ and $x\in M$, the linear infinitesimal orbit map $$\mathfrak g\longrightarrow T_xM,\qquad X\
- `F5` → [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a symplectic left action of $G$ on a symplectic manifold $(M,\omega)$ be given, and let $\mu:M\to\mathfrak g^*$ satisfy the com
- `F6` → [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a smooth left action of $G$ on $M$ and $x\in M$, the linear infinitesimal orbit map $$\mathfrak g\longrightarrow T_xM,\qquad X\
- `F6` → [[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g$ and let $\mathcal O=G\cdot\alpha\subseteq \mathfrak g

### [[prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k]]

Let $(G,K)$ be a Riemannian symmetric pair of noncompact type with
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ and inner product
$B_{\theta_*}$ on $\mathfrak p_0$
([[def-riemannian-symmetric-pair-of-noncompact-type]]). Then:

1. $B_{\theta_*}$ is $\operatorname{Ad}(K)$-invariant on $\mathfrak p_0$, so
   the formula $\langle V,W\rangle_{gK}:=B_{\theta_*}(\Pi(dL_{g^{-1}}V),
   \Pi(dL_{g^{-1}}W))$, where $\Pi:\mathfrak g_0\to\mathfrak p_0$ is the
   projection along $\mathfrak k_0$, defines a $G$-invariant Riemannian metric
   on $G/K$, whose value at the origin is $B_{\theta_*}$ under the
   identification $T_{eK}(G/K)\cong\mathfrak p_0$;
2. for the Levi-Civita connection of this metric and all
   $X,Y,Z\in\mathfrak p_0$ the curvature at the origin is
   $$R(X,Y)Z=-\lbrack\lbrack X,Y\rbrack,Z\rbrack,$$ so for $B_{\theta_*}$-orthonormal independent $X,Y\in\mathfrak p_0$ the sectional curvature of the two-plane they span is $K(\sigma)=-B_{\theta_*}([X,Y],[X,Y])\le0$, and for arbitrary independent $X,Y$ the same formula holds with the normalising factor $B_{\theta_*}(X,X)B_{\theta_*}(Y,Y)-B_{\theta_*}(X,Y)^2$ in the denominator; by $G$-invariance the curvature
   is nonpositive at every point.

**Facts & Assumptions (verbatim).**

**Given:** A Riemannian symmetric pair $(G,K)$ with Lie algebra $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Cartan involution $\theta_*$, inner product $B_{\theta_*}(X,Y)=-B(X,\theta_*Y)$ on $\mathfrak g_0$, and the projection $\Pi:\mathfrak g_0\to\mathfrak p_0$ along $\mathfrak k_0$.

[L1] $B_{\theta_*}$ is positive definite, $B$ is negative definite on $\mathfrak k_0$, positive definite on $\mathfrak p_0$, the summands are $B$-orthogonal and $B_{\theta_*}$-orthogonal, and $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]], [[def-riemannian-symmetric-pair-of-noncompact-type]]).

[L2] $G$ acts smoothly and transitively on $G/K$, $K$ is the isotropy group of the origin $eK$, $T_{eK}(G/K)$ is identified with $\mathfrak g_0/\mathfrak k_0\cong\mathfrak p_0$ by the differential of the quotient map, and the isotropy action at the origin is induced by $\operatorname{Ad}$: for $k\in K$ the differential of $hK\mapsto khK$ at $eK$ corresponds to $\Pi\circ\operatorname{Ad}_k$ ([[def-homogeneous-space-of-a-lie-group]], [[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h]]).

[L3] A Riemannian metric has a unique Levi-Civita connection, characterized among affine connections by metric compatibility and vanishing torsion, and it is computed by the Koszul formula; the curvature is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ ([[def-levi-civita-connection]], [[thm-the-koszul-formula-defines-an-affine-connection]], [[def-curvature-of-an-affine-connection]], [[def-sectional-curvature]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[prop-classical-real-forms-of-the-classical-complex-lie-algebras]]

Assume the Axiom of Choice. Let $\mathfrak g$ be a complex simple Lie algebra
of classical type $A_n$ $(n\ge1)$, $B_n$ $(n\ge2)$, $C_n$ $(n\ge3)$ or $D_n$
$(n\ge4)$, realized as $\mathfrak{sl}_{n+1}(\mathbb C)$,
$\mathfrak{so}_{2n+1}(\mathbb C)$, $\mathfrak{sp}_{2n}(\mathbb C)$ or
$\mathfrak{so}_{2n}(\mathbb C)$
([[prop-classical-types-correspond-to-sl-so-and-sp]],
[[def-classical-complex-matrix-lie-algebras]]). Then, up to isomorphism and
up to the admissible ranges and low-rank coincidences stated below, the real
forms of $\mathfrak g$ are:

1. for $A_n$: $\mathfrak{sl}_{n+1}(\mathbb R)$ and
   $\mathfrak{su}(p,q)$ with $p+q=n+1$, $p\ge q\ge0$; and
   $\mathfrak{su}^{*}(2m)=\mathfrak{sl}_m(\mathbb H)$ with $n+1=2m$;
2. for $B_n$: $\mathfrak{so}(p,q)$ with $p+q=2n+1$, $p\ge q\ge0$;
3. for $C_n$: $\mathfrak{sp}_{2n}(\mathbb R)$ and $\mathfrak{sp}(p,q)$ with
   $p+q=n$, $p\ge q\ge0$;
4. for $D_n$: $\mathfrak{so}(p,q)$ with $p+q=2n$, $p\ge q\ge0$, and
   $\mathfrak{so}^{*}(2n)$.

The compact form occurs in each list at the signature $q=0$, and the split
form is $\mathfrak{sl}_{n+1}(\mathbb R)$ for type $A_n$,
$\mathfrak{so}(n+1,n)$ for $B_n$, $\mathfrak{sp}_{2n}(\mathbb R)$ for $C_n$
and $\mathfrak{so}(n,n)$ for $D_n$; within the inner families
$\mathfrak{su}(p,q)$ and $\mathfrak{sp}(p,q)$ the real rank $\min(p,q)$ is
maximal exactly when $|p-q|\le1$ (for type $A_n$ the corresponding painted
root is the middle one). The
low-rank coincidences are $\mathfrak{sl}_2\cong\mathfrak{so}_3\cong
\mathfrak{sp}_2$, $\mathfrak{sp}_4\cong\mathfrak{so}_5$,
$\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$,
$\mathfrak{so}_6\cong\mathfrak{sl}_4$, together with
$\mathfrak{su}(1,1)\cong\mathfrak{sl}_2(\mathbb R)$,
$\mathfrak{so}(2,1)\cong\mathfrak{su}(1,1)$,
$\mathfrak{sp}(1,1)\cong\mathfrak{so}(4,1)$,
$\mathfrak{so}^{*}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(1,1)$ and
$\mathfrak{so}^{*}(6)\cong\mathfrak{su}(3,1)$.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; the classical complex matrix Lie algebras of [[def-classical-complex-matrix-lie-algebras]] with their types as in [[prop-classical-types-correspond-to-sl-so-and-sp]]; and the correspondence between real forms and conjugate-linear involutions of [[thm-real-forms-correspond-to-conjugate-linear-involutions]].

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the classification theorem of [L4] and the matrix realizations of [L5].

[L1] A real Lie subalgebra $\mathfrak g_0$ of a complex Lie algebra $\mathfrak g$ is a real form if and only if it is the fixed locus of a conjugate-linear involution of $\mathfrak g$ ([[thm-real-forms-correspond-to-conjugate-linear-involutions]], [[def-real-form-of-a-complex-lie-algebra]]).

[L2] The classical complex Lie algebras $\mathfrak{sl}_m(\mathbb C)$, $\mathfrak{so}_{2n+1}(\mathbb C)$, $\mathfrak{sp}_{2n}(\mathbb C)$ and $\mathfrak{so}_{2n}(\mathbb C)$ are simple in the indicated ranges, with the low-rank coincidences listed in [[prop-classical-types-correspond-to-sl-so-and-sp]], and $\mathfrak{su}(p,q)$, $\mathfrak{so}(p,q)$, $\mathfrak{sp}(p,q)$, $\mathfrak{sp}_{2n}(\mathbb R)$, $\mathfrak{so}^{*}(2n)$, $\mathfrak{sl}_n(\mathbb R)$ and $\mathfrak{sl}_n(\mathbb H)$ are the real matrix algebras defined by real, Hermitian, quaternionic-Hermitian, symplectic, quaternionic-skew-Hermitian or quaternionic structures in [[def-classical-complex-matrix-lie-algebras]].

[L3] The compact real form of a complex semisimple Lie algebra is the real form whose Killing form is negative definite, and the split real form is the real form containing a Cartan subalgebra with simultaneously real-diagonalizable adjoint action; a form is compact exactly when it is the fixed locus of a conjugation with $\sigma(X)=-X$ for suitable matrix realizations ([[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[def-split-real-form]]).

[L4] The real forms of a complex simple Lie algebra are classified by their Vogan diagrams, well defined up to equivalence, and two real forms are isomorphic exactly when their Vogan diagrams are equivalent; the Satake diagrams give the same classification; and the classification theorem lists, for each classical complex simple type $A_n$, $B_n$, $C_n$, $D_n$, all of its real forms up to isomorphism in the admissible ranges, together with the exceptional types ([[thm-classification-of-real-semisimple-lie-algebras]], [[thm-classification-of-real-forms-by-vogan-diagrams]], [[thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications]], [[def-vogan-diagram]]).

[L5] The source records, for each classical complex simple type, the identifications of the real forms with the classical matrix algebras: $\mathfrak{su}(p,q)$ for $\mathfrak{sl}_m(\mathbb C)$ at the painted root $\alpha_{m-p}$, $\mathfrak{so}(p,q)$ for $\mathfrak{so}_m(\mathbb C)$, $\mathfrak{sp}(p,q)$ and $\mathfrak{sp}(n,\mathbb R)$ for $\mathfrak{sp}_{2n}(\mathbb C)$, $\mathfrak{so}(p,q)$ and $\mathfrak{so}^{*}(2n)$ for $\mathfrak{so}_{2n}(\mathbb C)$, $\mathfrak{sl}_m(\mathbb R)$ for $\mathfrak{sl}_m(\mathbb C)$, and $\mathfrak{sl}(m,\mathbb H)$ for $\mathfrak{sl}_{2m}(\mathbb C)$ (Source, §10, Figure 6.1, printed pp. 413-415, and §11, tables (6.107) and (6.110), printed pp. 424 and 426).

[L6] Bidimensional and structural facts for the classical algebras: $\mathfrak{su}(p,q)\cong\mathfrak{su}(q,p)$, $\mathfrak{so}(p,q)\cong\mathfrak{so}(q,p)$ and $\mathfrak{sp}(p,q)\cong\mathfrak{sp}(q,p)$ by conjugation with the permutation of the two blocks of the form; $\mathfrak{sl}_m(\mathbb R)$ is the split form of $\mathfrak{sl}_m(\mathbb C)$ and $\mathfrak{sp}_{2n}(\mathbb R)$ that of $\mathfrak{sp}_{2n}(\mathbb C)$; and the low-rank isomorphisms $\mathfrak{sl}_2\cong\mathfrak{so}_3\cong\mathfrak{sp}_2$, $\mathfrak{sp}_4\cong\mathfrak{so}_5$, $\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$, $\mathfrak{so}_6\cong\mathfrak{sl}_4$, $\mathfrak{su}(1,1)\cong\mathfrak{sl}_2(\mathbb R)$, $\mathfrak{so}(2,1)\cong\mathfrak{su}(1,1)$, $\mathfrak{sp}(1,1)\cong\mathfrak{so}(4,1)$, $\mathfrak{so}^{*}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(1,1)$ and $\mathfrak{so}^{*}(6)\cong\mathfrak{su}(3,1)$ hold ([[def-classical-complex-matrix-lie-algebras]], [[prop-classical-types-correspond-to-sl-so-and-sp]], [[def-split-real-form]], [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[prop-compact-group-moment-map-can-be-averaged-to-an-equivariant-one-when-the-affine-obstruction-vanishes]]

Assume the Axiom of Choice and $\mathrm{AC}_\omega$. Let a compact Lie group $G$
act symplectically on a connected symplectic manifold $(M,\omega)$, and suppose
that an infinitesimal moment map $\mu:M\to\mathfrak g^*$ is supplied, so that
its components satisfy $d\mu^\xi=-\iota_{\xi_M}\omega$ and depend linearly on
$\xi$. Then the Haar average

$$\bar\mu(p):=\int_G g^{-1}\cdot\mu(g\cdot p)\,d\mu_G(g)$$

is a coadjoint-equivariant moment map for the action. It differs from $\mu$ by
a constant coadjoint-fixed covector, so the constant affine non-equivariance
cocycle of $\mu$ is a coboundary. The averaging uses the supplied component
Hamiltonians and does not produce one when none is given: the existence of an
infinitesimal moment map remains an assumption, and no component one-form
$\iota_{\xi_M}\omega$ is proved exact here.

**Facts & Assumptions (verbatim).**

**Given:** the Axiom of Choice, $\mathrm{AC}_\omega$, a compact Lie group acting symplectically on connected $(M,\omega)$, and a supplied infinitesimal moment map $\mu$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]] and $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]].

[A2] AC provides the normalized Haar measure; $\mathrm{AC}_\omega$ is inherited from the fundamental-field interface; the supplied moment map is an assumption, not a consequence of the averaging.

[F1] $G$ carries a normalized Haar probability measure invariant under left and right translations and inversion, and integrals of integrable functions are invariant under these substitutions. [[cor-normalized-haar-measure-on-a-compact-lie-group]], [[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]].

[F2] $\mu$ is an infinitesimal moment map: $d\mu^\xi=-\iota_{\xi_M}\omega$ for all $\xi$, and $\mu(g\cdot p)$ is smooth in $(g,p)$. [[def-moment-map-and-component-hamiltonian]].

[F3] Fundamental fields are equivariant: $(\operatorname{Ad}_g\xi)_M(g\cdot p)=d(a_g)_p\xi_M(p)$, and the action preserves $\omega$. [[prop-adjoint-intertwines-the-exponential-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F4] On a connected manifold, two equivariant moment maps for one action differ by a constant element of $(\mathfrak g^*)^G$. [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]].

[F5] The defect $c(\xi,\eta)=\{\mu^\xi,\mu^\eta\}-\mu^{[\xi,\eta]}$ of an infinitesimal moment map on connected $M$ is constant and is a two-cocycle; it vanishes exactly when $\mu$ is equivariant. [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-axiom-of-choice]] (Definition)
  > The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > ([[def-choice-function]]). Written out: for eve
- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[cor-normalized-haar-measure-on-a-compact-lie-group]] (Statement)
  > Assume the Axiom of Choice. Every compact Lie group has a unique regular Borel probability measure invariant under left and right translations and inversion.
- `F1` → [[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]] (Statement)
  > Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar measure $\mu$, so that $\mu$ is the unique regular Borel probability measure tha
- `F2` → [[def-moment-map-and-component-hamiltonian]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic manifold $(M,\omega)$ be given, with fundamental fields $\xi_M$ as in [[def-symplec
- `F3` → [[prop-adjoint-intertwines-the-exponential-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g$. For every $g\in G$ and $X\in\mathfrak g$, $$g\exp_G(
- `F3` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F4` → [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]] (Statement)
  > Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Fix a symplectic left action of $G$ on $(M,\omega)$. If $\mu_1,\mu_2:M\to\mathfrak g^*$ are two equivarian
- `F5` → [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]] (Statement)
  > Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Let a symplectic left action of $G$ on $(M,\omega)$ be given and let $\mu:M\to\mathfrak g^*$ satisfy the c

### [[prop-dimension-of-a-regular-nonzero-reduced-space]]

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $\alpha\in\mathfrak g^*$ be a regular value, and suppose that $G_\alpha$
acts freely and properly on $\mu^{-1}(\alpha)$. Then the reduced space
$M_\alpha=\mu^{-1}(\alpha)/G_\alpha$ has dimension

$$\dim M_\alpha=\dim M-\dim G-\dim G_\alpha .$$

In particular the value $\alpha$ enters the formula only through the dimension
of its coadjoint stabilizer, and at $\alpha=0$, where $G_\alpha=G$, the formula
specialises to $\dim M-2\dim G$.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space, a regular value $\alpha$, and a free proper $G_\alpha$-action on the level.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the reduction and fundamental-field suppliers.

[F1] $M_\alpha$ is the quotient of $\mu^{-1}(\alpha)$ by the free proper $G_\alpha$-action. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F2] Regularity of $\alpha$ means $d\mu_p$ is surjective at every $p$ in the level, so $\dim\mu^{-1}(\alpha)=\dim M-\dim\mathfrak g$. [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]], [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]].

[F3] Quotienting a manifold by a free proper $G_\alpha$-action lowers the dimension by $\dim G_\alpha$. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F4] The coadjoint stabilizer of $0$ is $G$, and $\dim G_\alpha=\dim\mathfrak g_\alpha$. [[def-coadjoint-representation-of-a-lie-group]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the c
- `F2` → [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a Hamiltonian $G$-space with moment map $\mu$ and a point $p\in M$, the differential $d\mu_p:T_pM\to\mathfrak g^*$ is surjectiv
- `F2` → [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a Hamiltonian action of $G$ on $(M,\omega)$ have moment map $\mu$, and let $p\in M$. Then $$\ker d\mu_p=\bigl(T_p(G\cdot p)\big
- `F3` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the c
- `F4` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d

### [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]]

Assume $\mathrm{AC}_\omega$. Let a symplectic left action of $G$ on a symplectic
manifold $(M,\omega)$ be given, and let $\mu:M\to\mathfrak g^*$ satisfy the
component moment equations $d\mu^\xi=-\iota_{\xi_M}\omega$ for every
$\xi\in\mathfrak g$.

1. If $\mu$ is coadjoint equivariant, then
   $\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}$ on all of $M$ for all
   $\xi,\eta\in\mathfrak g$.
2. Conversely, if $G$ is connected and
   $\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}$ on all of $M$ for all
   $\xi,\eta$, then $\mu$ is coadjoint equivariant.

Thus, for connected $G$ and connected $M$, coadjoint equivariance of a map
satisfying the component moment equations is equivalent to the moment-map
Poisson bracket identity. For a general group the bracket identity is
equivalent to equivariance under the identity component $G^0$, and
equivariance under all of $G$ requires in addition equivariance under one
representative of each coset of $G/G^0$. Connectivity of $M$ is not used by
either implication; it is used only when the bracket identity is to be checked
at a single point, because the nonequivariance defect is then constant on $M$
by the companion lemma below.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a symplectic action of $G$ on $(M,\omega)$, and a map $\mu:M\to\mathfrak g^*$ satisfying the component moment equations.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and exponential interfaces cited in [F1]--[F7], and no further choice is made.

[F1] The component moment equations read $d\mu^\xi=-\iota_{\xi_M}\omega$. [[def-moment-map-and-component-hamiltonian]].

[F2] $X_{\mu^\xi}=-\xi_M$ for every $\xi$. [[prop-moment-map-components-generate-the-negative-infinitesimal-action]].

[F3] $\{F,G\}=\omega(X_F,X_G)$ and the Poisson bracket is bilinear and alternating, so $\omega(\xi_M,\eta_M)=\{\mu^\xi,\mu^\eta\}$ by [F2]. [[def-poisson-bracket-on-a-symplectic-manifold]].

[F4] The coadjoint action is $(g\cdot\alpha)(\zeta)=\alpha(\operatorname{Ad}_{g^{-1}}\zeta)$, and $\left.\frac d{dt}\right|_0\langle\exp_G(-t\xi)\cdot\alpha,\zeta\rangle=\langle\alpha,[\xi,\zeta]\rangle$. [[def-coadjoint-representation-of-a-lie-group]].

[F5] $\left.\frac d{dt}\right|_0\operatorname{Ad}_{\exp_G(t\xi)}\zeta=[\xi,\zeta]$, and $\operatorname{Ad}_g[\xi,\zeta]=[\operatorname{Ad}_g\xi,\operatorname{Ad}_g\zeta]$. [[thm-the-differential-of-adjoint-is-ad]], [[prop-adjoint-is-a-smooth-lie-group-representation]].

[F6] $\exp_G(\operatorname{Ad}_g\zeta)=g\exp_G(\zeta)g^{-1}$. Consequently $h\exp_G(s\xi_0)=\exp_G(s\operatorname{Ad}_h\xi_0)h$ and $\left.\frac d{ds}\right|_0\exp_G(s\zeta)\cdot x=-\zeta_M(x)$ for the library fundamental field. [[prop-adjoint-intertwines-the-exponential-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F7] The image of $\exp_G$ contains an open neighborhood of $e$, and a subgroup containing an open neighborhood of the identity is open and closed; a connected space has no clopen subsets other than $\varnothing$ and itself. [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]], [[thm-connectedness-characterisations]].

[F8] A curve in $\mathbb R^n$ solving a linear ODE $v'(s)=B(s)v(s)$ with continuous coefficients and vanishing at one point is identically zero on its interval. [[cor-lipschitz-ode-uniqueness-and-stability-estimate]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[def-moment-map-and-component-hamiltonian]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic manifold $(M,\omega)$ be given, with fundamental fields $\xi_M$ as in [[def-symplec
- `F2` → [[prop-moment-map-components-generate-the-negative-infinitesimal-action]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $\mu:M\to\mathfrak g^*$ be an infinitesimal moment map for a symplectic action, so that $d\mu^\xi=-\iota_{\xi_M}\omega$ for eve
- `F3` → [[def-poisson-bracket-on-a-symplectic-manifold]] (Definition)
  > For $F,G\in C^\infty(M)$, the **Poisson bracket** in the library convention is $$\{F,G\}:=\omega(X_F,X_G)=dF(X_G)=X_G(F)=-X_F(G).$$ All four formulas use $\iota
- `F4` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F5` → [[thm-the-differential-of-adjoint-is-ad]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g$. Under the canonical open-subset identification $$T_I
- `F5` → [[prop-adjoint-is-a-smooth-lie-group-representation]] (Statement)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g$. Its adjoint map is a group homomorphism $$\operatorname{Ad}:G\longrightarrow\oper
- `F6` → [[prop-adjoint-intertwines-the-exponential-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g$. For every $g\in G$ and $X\in\mathfrak g$, $$g\exp_G(
- `F6` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F7` → [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with identity $e$ and Lie algebra $\mathfrak g$. There are open neighborhoods $V\sub
- `F7` → [[thm-connectedness-characterisations]] (Statement)
  > Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let $\mathbf{2} = \{0,1\}$ carry the discrete topology ([[def-standard-topologies]
- `F8` → [[cor-lipschitz-ode-uniqueness-and-stability-estimate]] (Statement)
  > Let $F:D\to\mathbb R^n$ be continuous on an open ODE domain, let $I\subseteq\mathbb R$ be an order-convex interval with at least two elements, and let $x,y:I\to

### [[prop-equivariant-symplectomorphisms-preserve-moment-maps-up-to-a-coadjoint-fixed-covector]]

Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Let $(M,\omega,G,\mu)$ be
a Hamiltonian $G$-space with equivariant moment map $\mu$, and let
$\phi:M\to M$ be a $G$-equivariant symplectomorphism, so that
$\phi(g\cdot p)=g\cdot\phi(p)$ and $\phi^*\omega=\omega$ for all $g,p$. Then

$$\mu\circ\phi-\mu=\delta$$

for a constant coadjoint-fixed covector $\delta\in(\mathfrak g^*)^G$. In
particular, after a normalization of the moment map that fixes the affine
ambiguity of the previous proposition, an equivariant symplectomorphism
preserves the moment map literally: $\mu\circ\phi=\mu$.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a connected Hamiltonian $G$-space $(M,\omega,G,\mu)$ with equivariant moment map, and a $G$-equivariant symplectomorphism $\phi$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface cited in [F1].

[F1] $\mu$ is coadjoint equivariant and its components satisfy $d\mu^\xi=-\iota_{\xi_M}\omega$; the action satisfies $\phi^*\omega=\omega$. [[def-symplectic-and-hamiltonian-lie-group-action]], [[def-moment-map-and-component-hamiltonian]].

[F2] $\xi_M(p)=\left.\frac d{dt}\right|_0\exp_G(-t\xi)\cdot p$ and $d\phi$ intertwines the differentials of the action maps. [[def-fundamental-vector-field-of-a-left-action]], [[def-smooth-left-action-of-a-lie-group]].

[F3] The coadjoint action is $(g\cdot\alpha)(\zeta)=\alpha(\operatorname{Ad}_{g^{-1}}\zeta)$. [[def-coadjoint-representation-of-a-lie-group]].

[F4] Two equivariant moment maps for the same action on a connected symplectic manifold differ by a constant element of $(\mathfrak g^*)^G$. [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[def-symplectic-and-hamiltonian-lie-group-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$, let $(M,\omega)$ be a symplectic manifold ([[de
- `F1` → [[def-moment-map-and-component-hamiltonian]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic manifold $(M,\omega)$ be given, with fundamental fields $\xi_M$ as in [[def-symplec
- `F2` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F2` → [[def-smooth-left-action-of-a-lie-group]] (Definition)
  > Let $G$ be a Lie group and $M$ a smooth manifold. A **smooth left action** of $G$ on $M$ is a jointly smooth map $$a:G\times M\longrightarrow M,\qquad (g,x)\lon
- `F3` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F4` → [[prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors]] (Statement)
  > Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Fix a symplectic left action of $G$ on $(M,\omega)$. If $\mu_1,\mu_2:M\to\mathfrak g^*$ are two equivarian

### [[prop-infinitesimal-generator-of-a-symplectic-action-is-symplectic]]

Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic
manifold $(M,\omega)$ be symplectic. Then every fundamental vector field
$\xi_M$ of the action has vanishing Lie derivative on $\omega$:

$$\mathcal L_{\xi_M}\omega=0 .$$

Consequently each $\xi_M$ is a symplectic vector field, and the flow of
$\xi_M$ consists of symplectomorphisms.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a symplectic action of $G$ on $(M,\omega)$ and $\xi\in\mathfrak g$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through [F1].

[F1] $\xi_M(p)=\left.\frac d{dt}\right|_0\exp_G(-t\xi)\mathbin{\cdot}p$, and $\xi_M$ is a smooth vector field. [[def-fundamental-vector-field-of-a-left-action]].

[F2] The action law is $g\mathbin{\cdot}(h\mathbin{\cdot}p)=(gh)\mathbin{\cdot}p$ and $e\mathbin{\cdot}p=p$, and each $a_g(p)=g\mathbin{\cdot}p$ is a diffeomorphism with $(a_g)^*\omega=\omega$. [[def-smooth-left-action-of-a-lie-group]], [[def-symplectic-and-hamiltonian-lie-group-action]].

[F3] On every common flow domain, $\Phi_t^*T=T$ for all defined $t$ if and only if $\mathcal L_XT=0$, and $\mathcal L_XT=\left.\frac d{dt}\right|_0\Phi_t^*T$ for the local flow $\Phi_t$ of $X$. [[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]].

[F4] Through each point there is a unique maximal integral curve of a smooth vector field. [[thm-unique-maximal-integral-curve-through-each-point]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F2` → [[def-smooth-left-action-of-a-lie-group]] (Definition)
  > Let $G$ be a Lie group and $M$ a smooth manifold. A **smooth left action** of $G$ on $M$ is a jointly smooth map $$a:G\times M\longrightarrow M,\qquad (g,x)\lon
- `F2` → [[def-symplectic-and-hamiltonian-lie-group-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$, let $(M,\omega)$ be a symplectic manifold ([[de
- `F3` → [[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]] (Statement)
  > On every common local flow domain, $\Phi_t^*T=T$ for all defined $t$ if and only if $\mathcal L_XT=0$.
- `F4` → [[thm-unique-maximal-integral-curve-through-each-point]] (Statement)
  > For every point $p\in M$ and every smooth vector field $X$ on $M$, there is a unique maximal integral curve $\gamma_p:I_p\to M$ of $X$ with $\gamma_p(0)=p$.

### [[prop-invariant-hamiltonians-descend-to-reduced-hamiltonians]]

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space
with a $G$-invariant Hamiltonian $H\in C^\infty(M)^G$, let $\alpha$ be a
regular value of $\mu$, and suppose $G_\alpha$ acts freely and properly on the
level $\mu^{-1}(\alpha)$, with reduction $(M_\alpha,\omega_\alpha)$ and quotient
map $\pi$. Then:

1. $X_H$ is tangent to the level $\mu^{-1}(\alpha)$ and is $G_\alpha$-invariant,
   so it pushes forward to a smooth vector field $Y=d\pi(X_H|_{\mu^{-1}(\alpha)})$
   on $M_\alpha$;
2. $H|_{\mu^{-1}(\alpha)}$ is $G_\alpha$-invariant and descends to a unique
   smooth $h\in C^\infty(M_\alpha)$ with $\pi^*h=\iota^*H$;
3. $Y=X_h$; consequently every integral curve of $X_H$ that lies in the level
   projects under $\pi$ to an integral curve of the flow of $h$ on
   $M_\alpha$.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with invariant Hamiltonian $H$, a regular value $\alpha$, and a free proper $G_\alpha$-action on the level.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the reduction, fundamental-field and descent suppliers cited below.

[F1] If $H$ is $G$-invariant then $\{\mu^\xi,H\}=0$ for all $\xi$, and $\mu$ is constant along the flow of $X_H$. [[thm-noether-conservation-law-for-hamiltonian-actions]].

[F2] $X_H$ is the unique field with $\iota_{X_H}\omega=dH$, and $X_G(F)=\{F,G\}$ for the Poisson bracket. [[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]], [[def-poisson-bracket-on-a-symplectic-manifold]].

[F3] $\pi^*\omega_\alpha=\iota^*\omega$ and $M_\alpha$ is a smooth manifold with $\pi$ a surjective submersion. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F4] A smooth $G_\alpha$-equivariant map from the free proper $G_\alpha$-manifold $\mu^{-1}(\alpha)$ to a manifold with trivial $G_\alpha$-action descends to a unique smooth map on $M_\alpha$; in particular $H|_{\mu^{-1}(\alpha)}$ descends to $h$ with $\pi^*h=\iota^*H$. [[prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients]], [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F5] Integral curves of a smooth vector field through a given initial point are unique. [[thm-unique-maximal-integral-curve-through-each-point]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[thm-noether-conservation-law-for-hamiltonian-actions]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, and let $H\in C^\infty(M)$ be $G$-invariant: $H(g\cdot p)=H(p)$ for all $g\in G$
- `F2` → [[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]] (Statement)
  > For every $H\in C^\infty(M)$ on a symplectic manifold $(M,\omega)$, there is a unique smooth vector field $X_H$ satisfying $\iota_{X_H}\omega=dH$.
- `F2` → [[def-poisson-bracket-on-a-symplectic-manifold]] (Definition)
  > For $F,G\in C^\infty(M)$, the **Poisson bracket** in the library convention is $$\{F,G\}:=\omega(X_F,X_G)=dF(X_G)=X_G(F)=-X_F(G).$$ All four formulas use $\iota
- `F3` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the c
- `F4` → [[prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients]] (Statement)
  > Let $M$ and $N$ be smooth free proper $G$-manifolds. Every smooth $G$-equivariant map $f:M\to N$ induces a unique smooth map $\overline f:M/G\to N/G$ such that 
- `F4` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the c
- `F5` → [[thm-unique-maximal-integral-curve-through-each-point]] (Statement)
  > For every point $p\in M$ and every smooth vector field $X$ on $M$, there is a unique maximal integral curve $\gamma_p:I_p\to M$ of $X$ with $\gamma_p(0)=p$.

### [[prop-real-cartan-subalgebras-need-not-be-conjugate]]

Let $\mathfrak g_0=\mathfrak{sl}_2(\mathbb R)$ be the real Lie algebra of
traceless real $2\times2$ matrices with the commutator bracket, with its
standard basis

$$h=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad e=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad f=\begin{pmatrix}0&0\\1&0\end{pmatrix}, \qquad [h,e]=2e,\quad [h,f]=-2f,\quad [e,f]=h$$
([[def-special-linear-lie-algebra-sl-two]]). Put
$k:=e-f=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, so that
$\mathbb Rk=\mathbb R\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.
Then $\mathbb Rk\subseteq\mathfrak k_0$ is a compact Cartan subalgebra and
$\mathbb Rh\subseteq\mathfrak p_0$ is a split Cartan subalgebra for the Cartan
involution $\theta(X)=-X^{\mathsf T}$ of $\mathfrak{sl}_2(\mathbb R)$, and no
automorphism of $\mathfrak{sl}_2(\mathbb R)$ carries $\mathbb Rh$ onto
$\mathbb Rk$. In particular the compact and the split Cartan subalgebras of
$\mathfrak{sl}_2(\mathbb R)$ are not conjugate by any real inner
automorphism.

**Facts & Assumptions (verbatim).**

**Given:** The real Lie algebra $\mathfrak g_0=\mathfrak{sl}_2(\mathbb R)$ with the basis $h,e,f$ and the bracket relations above, the element $k=e-f$, and the Cartan involution $\theta(X)=-X^{\mathsf T}$ with Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

[L1] $\{h,e,f\}$ is a basis of the traceless real $2\times2$ matrices, with $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$; the bracket relations determine the bracket completely ([[def-special-linear-lie-algebra-sl-two]], [[def-lie-algebra-over-a-field]]).

[L2] The Killing form of $\mathfrak g_0$ is the trace form of the adjoint representation, $B(X,Y)=\operatorname{tr}(\operatorname{ad}_X\operatorname{ad}_Y)$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[def-trace-form-of-a-finite-dimensional-representation]]).

[L3] Traces satisfy $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ and are invariant under conjugation, $\operatorname{tr}(PAP^{-1})=\operatorname{tr}(A)$ ([[thm-trace-of-ab-equals-trace-of-ba]], [[cor-trace-is-invariant-under-similarity]]).

[L4] A finite-dimensional Lie algebra over a field of characteristic $0$ is semisimple if and only if its Killing form is nondegenerate ([[thm-cartans-semisimplicity-criterion]]).

[L5] A Cartan subalgebra of a Lie algebra is a nilpotent subalgebra equal to its own normalizer ([[def-cartan-subalgebra-of-a-lie-algebra]]); a one-dimensional abelian subalgebra is nilpotent, and a $\theta$-stable Cartan subalgebra has compact part $\mathfrak h_0\cap\mathfrak k_0$ and split part $\mathfrak h_0\cap\mathfrak p_0$ ([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[prop-reduction-commutes-with-products]]

Assume $\mathrm{AC}_\omega$. Let $(M,\omega_M,\mu_M)$ be a Hamiltonian
$G$-space, let $(N,\omega_N,\mu_N)$ be a Hamiltonian $H$-space, and let the
product group $G\times H$ act componentwise on $M\times N$ with the product
form $\Omega=\operatorname{pr}_M^*\omega_M+\operatorname{pr}_N^*\omega_N$ and the
product moment map

$$\mu_{M\times N}(p,q)=\mu_M(p)\oplus\mu_N(q)\in\mathfrak g^*\oplus\mathfrak h^* \simeq(\mathfrak g\oplus\mathfrak h)^*.$$

Then $\mu_{M\times N}$ is an equivariant moment map. If $\alpha$ is a regular
value of $\mu_M$ with $G_\alpha$ acting freely and properly on
$\mu_M^{-1}(\alpha)$, and $\beta$ is a regular value of $\mu_N$ with $H_\beta$
acting freely and properly on $\mu_N^{-1}(\beta)$, then $(\alpha,\beta)$ is a
regular value with $G_\alpha\times H_\beta$ acting freely and properly on the
product level, and the product of the canonical diffeomorphisms

$$M_\alpha\times N_\beta\longrightarrow \mu_{M\times N}^{-1}(\alpha,\beta)/(G_\alpha\times H_\beta)$$

is a symplectomorphism onto the reduced product, the form being
$\omega_\alpha\oplus\omega_\beta$ on the left and the reduced form on the
right.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, Hamiltonian $G$-spaces and $H$-spaces as above, and regular values $\alpha,\beta$ with the stated free proper stabilizer actions.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and reduction suppliers.

[F1] The product form $\Omega$ is symplectic and the fundamental field of the product action at $(p,q)$ is the pair $(\xi_M(p),\eta_N(q))$ for $(\xi,\eta)\in\mathfrak g\oplus\mathfrak h$. [[prop-products-and-opposites-of-symplectic-manifolds]], [[prop-product-and-opposite-symplectic-moment-maps]].

[F2] $\mu_M,\mu_N$ satisfy the component equations $d\mu_M^\xi=-\iota_{\xi_M}\omega_M$ and $d\mu_N^\eta=-\iota_{\eta_N}\omega_N$, and are equivariant. [[def-moment-map-and-component-hamiltonian]].

[F3] The dual of a direct sum is the direct sum of the duals, and the coadjoint action of a product group is componentwise, with stabilizer $(\alpha,\beta)$ equal to $G_\alpha\times H_\beta$. [[def-coadjoint-representation-of-a-lie-group]].

[F4] The product of free actions is free and the product of proper actions is proper; the quotient of a product by a product group is the product of the quotients. [[thm-marsden-weinstein-meyer-symplectic-reduction]], [[prop-product-and-opposite-symplectic-moment-maps]].

[F5] Under the stated regularity, freeness and properness hypotheses the reduction theorem gives a unique symplectic form on each reduced space, characterised by the pullback identity. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[prop-products-and-opposites-of-symplectic-manifolds]] (Statement)
  > If $(M,\omega)$ and $(N,\eta)$ are symplectic, then $M^-=(M,-\omega)$ is symplectic and $$\Omega=\operatorname{pr}_M^*\omega+\operatorname{pr}_N^*\eta$$ is symp
- `F1` → [[prop-product-and-opposite-symplectic-moment-maps]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega_M)$ and $(N,\omega_N)$ be Hamiltonian $G$-spaces with equivariant moment maps $\mu_M$ and $\mu_N$. 1. On the product
- `F2` → [[def-moment-map-and-component-hamiltonian]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic manifold $(M,\omega)$ be given, with fundamental fields $\xi_M$ as in [[def-symplec
- `F3` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F4` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the c
- `F4` → [[prop-product-and-opposite-symplectic-moment-maps]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega_M)$ and $(N,\omega_N)$ be Hamiltonian $G$-spaces with equivariant moment maps $\mu_M$ and $\mu_N$. 1. On the product
- `F5` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the c

### [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]]

Assume $\mathrm{AC}_\omega$. For a Hamiltonian $G$-space with moment map
$\mu$ and a point $p\in M$, the differential $d\mu_p:T_pM\to\mathfrak g^*$ is
surjective if and only if the infinitesimal stabilizer $\mathfrak g_p$ is
zero. Consequently a covector $\alpha\in\mathfrak g^*$ is a regular value of
$\mu$ if and only if $\mathfrak g_p=0$ for every $p\in\mu^{-1}(\alpha)$, that
is, if and only if the action is locally free along the level
$\mu^{-1}(\alpha)$.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with moment map $\mu$, and a point $p\in M$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface cited in [F1] and [F2].

[F1] $\operatorname{im}d\mu_p=\operatorname{ann}(\mathfrak g_p)$. [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]].

[F2] The infinitesimal orbit map has kernel exactly the stabilizer Lie algebra $\mathfrak g_p=T_eG_p$, so $\mathfrak g_p$ is the Lie algebra of the stabilizer subgroup $G_p$. [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]].

[F3] A subgroup of a finite-dimensional real Lie group is discrete in the subspace topology if and only if it is a closed embedded zero-dimensional Lie subgroup; a Lie group is zero-dimensional exactly when its Lie algebra is zero. [[cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups]].

[F4] A value of a smooth map is regular when the differential is surjective at every point of its fibre. [[def-regular-and-critical-points-and-values]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a Hamiltonian action of $G$ on $(M,\omega)$ have moment map $\mu$, and let $p\in M$. Then $$\ker d\mu_p=\bigl(T_p(G\cdot p)\big
- `F2` → [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a smooth left action of $G$ on $M$ and $x\in M$, the linear infinitesimal orbit map $$\mathfrak g\longrightarrow T_xM,\qquad X\
- `F3` → [[cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups]] (Statement)
  > Assume $\mathrm{AC}_\omega$. A subgroup $\Gamma$ of a finite-dimensional real Lie group $G$ is discrete in its subspace topology if and only if it is a closed e
- `F4` → [[def-regular-and-critical-points-and-values]] (Definition)
  > Let $F:M\to N$ be a smooth map. - A point $p\in M$ is a **regular point** of $F$ when $F$ is a submersion at $p$, and a **critical point** otherwise ([[def-imme

### [[prop-restricted-root-systems-may-be-nonreduced]]

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with Cartan involution $\theta$, Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Killing form $B$, inner
product $B_\theta(X,Y)=-B(X,\theta Y)$, and a maximal abelian subspace
$\mathfrak a\subseteq\mathfrak p_0$, with restricted-root system
$\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$
([[def-restricted-root-and-restricted-root-space]],
[[thm-restricted-root-space-decomposition]]). Let $G$ be a connected
semisimple Lie group with finite center and Lie algebra $\mathfrak g_0$, let
$\Theta$ be a global Cartan involution of $G$ with $d\Theta_e=\theta$, and put
$K=G^\Theta$, a closed compact subgroup with Lie algebra $\mathfrak k_0$
([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).
Write $\operatorname{Ad}$ for the adjoint representation of $G$ and put
$$N_K(\mathfrak a)=\{k\in K:\operatorname{Ad}(k)\mathfrak a=\mathfrak a\},\qquad Z_K(\mathfrak a)=\{k\in K:\operatorname{Ad}(k)|_{\mathfrak a}=\mathrm{id}_{\mathfrak a}\};$$
the assertions below depend only on the restriction of $\operatorname{Ad}$
to $K$. Write
$(\,\cdot\,,\,\cdot\,)$
for the restriction of $B_\theta$ to $\mathfrak a$. For
$\lambda\in\mathfrak a^*$ let $H_\lambda\in\mathfrak a$ be the vector with
$(H_\lambda,H)=\lambda(H)$ for every $H\in\mathfrak a$, and put
$\langle\lambda,\mu\rangle=(H_\lambda,H_\mu)$ and
$|\lambda|^2=\langle\lambda,\lambda\rangle$, so that
$\langle\,\cdot\,,\,\cdot\,\rangle$ is an inner product on
$\mathfrak a^*$ with $|\lambda|^2>0$ for $\lambda\ne0$. For $\lambda\ne0$ let
$s_\lambda$ be the orthogonal reflection
$$s_\lambda(\mu)=\mu-2\langle\mu,\lambda\rangle|\lambda|^{-2}\lambda .$$
Call $\Sigma$ **reducible** if there are nonzero orthogonal subspaces
$E_1,E_2\subseteq\mathfrak a^*$ with $\Sigma\subseteq E_1\cup E_2$ and
$\Sigma\cap E_i\ne\emptyset$ for $i=1,2$, and **irreducible** otherwise. Put
$\Sigma_s=\{\alpha\in\Sigma:\alpha/2\notin\Sigma\}$ and
$\Psi=\{\alpha\in\Sigma_s:2\alpha\in\Sigma\}$. Then:

(a) $\Sigma$ is finite, spans $\mathfrak a^*$, and satisfies
$s_\lambda(\Sigma)=\Sigma$ as well as
$2\langle\mu,\lambda\rangle|\lambda|^{-2}\in\mathbb Z$ for all
$\mu,\lambda\in\Sigma$; moreover for every $\lambda\in\Sigma$ there is
$k\in N_K(\mathfrak a)$
such that the dual action of $\operatorname{Ad}(k)$ on $\mathfrak a^*$ is
$s_\lambda$. Thus $\Sigma$ is a finite abstract root system in
$\mathfrak a^*$ with the reflections $s_\lambda$ realised inside
$N_K(\mathfrak a)$.

(b) Restricted-root systems need not be reduced: both a functional and its
double can occur. Explicitly, for
$\mathfrak g_0=\mathfrak{su}(2,1)=\{X\in M_3(\mathbb C):X^*J+JX=0,\
\operatorname{tr}X=0\}$ with $J=\operatorname{diag}(1,1,-1)$,
$\theta(X)=-X^*$ and $\mathfrak a=\mathbb RH$,
$H=E_{13}+E_{31}$, the functional $f\in\mathfrak a^*$ with $f(H)=1$ satisfies
$$\Sigma=\{\pm f,\pm2f\},\qquad m_{\pm f}=2,\qquad m_{\pm2f}=1 .$$

(c) Let $\Sigma$ be irreducible and nonreduced. Then with
$r=\dim\mathfrak a\ge1$ there is a linear isomorphism
$\varphi:\mathfrak a^*\to\mathbb R^r$ with $\varphi(\Sigma)=BC_r$, where
$$BC_r=\{\pm e_i\}\cup\{\pm e_i\pm e_j:1\le i<j\le r\}\cup\{\pm2e_i\}$$
for the standard orthonormal basis $e_1,\dots,e_r$, and $\varphi$ preserves all
Cartan integers: $2\langle\varphi(\mu),\varphi(\lambda)\rangle
|\varphi(\lambda)|^{-2}=2\langle\mu,\lambda\rangle|\lambda|^{-2}$ for all
$\mu,\lambda\in\Sigma$. In particular the irreducible nonreduced restricted-root
systems are exactly the systems of type $BC_r$: the doubled roots form the
$B_r$-part $\{\pm e_i\}$ and the reduced part of $\Sigma$ is the type-$B_r$
system $\{\pm e_i\}\cup\{\pm e_i\pm e_j\}$.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; a real semisimple $\mathfrak g_0$ with Cartan involution $\theta$, Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Killing form $B$, inner product $B_\theta(X,Y)=-B(X,\theta Y)$, maximal abelian $\mathfrak a\subseteq\mathfrak p_0$, and restricted-root system $\Sigma$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the finite-dimensional representation theory of [L6] used for the integrality of the Cartan integers.

[L1] $\Sigma$ is finite, $\mathfrak g_0=\mathfrak g_0^0\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda$ with $\mathfrak g_0^0=Z_{\mathfrak g_0}(\mathfrak a)=\mathfrak a\oplus\mathfrak m$, $\mathfrak m=Z_{\mathfrak k_0}(\mathfrak a)$, $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$ and $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$, and for $H\in\mathfrak a$ with $\lambda(H)\ne0$ for all $\lambda\in\Sigma$ one has $Z_{\mathfrak g_0}(H)=\mathfrak g_0^0$ ([[thm-restricted-root-space-decomposition]], [[def-restricted-root-and-restricted-root-space]]).

[L2] $B$ is invariant and nondegenerate, $B_\theta$ is positive definite, $B(\theta X,\theta Y)=B(X,Y)$, $B$ is negative definite on $\mathfrak k_0$ and positive definite on $\mathfrak p_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L3] $\Sigma_s$ and $2\Psi$ behave as follows at the level of subsets of $\mathfrak a^*$: the definitions above give $\Sigma_s\subseteq\Sigma$ and $2\Psi\subseteq\Sigma$, and $\mathbb R\alpha\cap\Sigma_s=\{\pm\alpha\}$ will follow from the computation of step 5.2.

[L4] Rank-two facts for a reduced crystallographic root system $\Phi$ with nonproportional roots $\alpha,\beta$: $n_{\alpha\beta}n_{\beta\alpha}=4\cos^2\theta\in\{0,1,2,3\}$ with the listed length-ratio alternatives; $(\alpha,\beta)>0$ implies $\alpha-\beta\in\Phi$; distinct simple roots satisfy $(\alpha,\beta)\le0$; and the irreducible rank-two systems are $A_2$, $B_2\cong C_2$ and $G_2$ ([[thm-rank-two-root-system-classification]]). Moreover the simple roots of a positive system form a basis and every root is a signed integral combination of them ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L5] If $\Gamma$ is the Dynkin diagram of an irreducible reduced crystallographic root system, then $\Gamma$ is a tree, has at most one multiple edge, and in the case of a multiple edge the underlying graph is a path with a double edge at an end, a double edge in the middle of a four-vertex path, or a two-vertex triple edge ([[lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching]]); a based root system is determined up to isomorphism by its Cartan matrix ([[thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix]]), and the irreducible reduced crystallographic root systems are $A_n,B_n,C_n,D_n,E_6,E_7,E_8,F_4,G_2$ with the low-rank coincidences $B_1=C_1=A_1$, $B_2=C_2$ ([[thm-classification-of-irreducible-reduced-crystallographic-root-systems]]). The standard systems $B_r=\{\pm e_i\}\cup\{\pm e_i\pm e_j\}$ and $C_r=\{\pm2e_i\}\cup\{\pm e_i\pm e_j\}$ are reduced crystallographic root systems with their standard simple roots and Dynkin diagrams ([[ex-classical-root-systems-in-euclidean-coordinates]]), and $W(B_r)$ is the group of signed permutations of the coordinates, which acts transitively on $\{\pm e_i\}$ and on $\{\pm e_i\pm e_j\}$ ([[ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups]]).

[L6] A finite-dimensional module over a copy of $\mathfrak{sl}_2$ has the standard diagonal element acting diagonalisably with integer eigenvalues ([[thm-finite-dimensional-representations-of-sl-two]]).

[L7] A real finite-dimensional Lie algebra is semisimple if and only if its complexification is ([[prop-complexification-preserves-semisimplicity]]), and the Killing form of $\mathfrak{sl}_3(\mathbb C)$ is nondegenerate ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[def-classical-complex-matrix-lie-algebras]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction]]

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $\alpha\in\mathfrak g^*$ and let $\mathcal O=G\cdot\alpha$ be its coadjoint
orbit with the KKS form $\omega_{\mathcal O}$; write
$\mathcal O^-=(\mathcal O,-\omega_{\mathcal O})$ and equip
$M\times\mathcal O^-$ with the diagonal $G$-action, the product form
$\Omega=\operatorname{pr}_M^*\omega-\operatorname{pr}_{\mathcal O}^*\omega_{\mathcal O}$
and

$$\Psi(m,\beta):=\mu(m)-\beta\in\mathfrak g^*.$$

Then:

1. $\Psi$ is a coadjoint-equivariant moment map for the diagonal action.
2. The zero set $\Psi^{-1}(0)$ consists of the pairs $(m,\mu(m))$ with
   $\mu(m)\in\mathcal O$, and $m\mapsto(m,\mu(m))$ identifies it
   $G$-equivariantly with the saturated level $\mu^{-1}(G\cdot\alpha)$.
3. Every $G$-orbit in $\Psi^{-1}(0)$ meets the slice
   $\mu^{-1}(\alpha)\times\{\alpha\}$ in exactly one $G_\alpha$-orbit, so the
   inclusion of the slice induces a canonical bijection
   $M_\alpha=\mu^{-1}(\alpha)/G_\alpha\to\Psi^{-1}(0)/G$, which is a
   diffeomorphism.
4. The pullbacks of the reduced form of $M_\alpha$ and of the zero-reduced form
   of $M\times\mathcal O^-$ to $\mu^{-1}(\alpha)$ agree, both being
   $\iota^*\omega$. Hence, whenever $0$ is a regular value of $\Psi$ and $G$
   acts freely and properly on $\Psi^{-1}(0)$, the shift map of item 3 is a
   symplectomorphism $M_\alpha\to\Psi^{-1}(0)/G$. Moreover $0$ is a regular
   value of $\Psi$ if and only if $\alpha$ is a regular value of $\mu$, and
   the $G$-action on $\Psi^{-1}(0)$ is free if and only if the $G_\alpha$-action
   on $\mu^{-1}(\alpha)$ is free.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space, a covector $\alpha$, and the orbit $\mathcal O$ with the opposite KKS form.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field, orbit and reduction suppliers.

[F1] The orbit inclusion $\Phi:\mathcal O\hookrightarrow\mathfrak g^*$ is an equivariant moment map for the coadjoint action with the KKS form. [[prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map]], [[thm-coadjoint-orbits-are-symplectic-manifolds]].

[F2] On a product with the diagonal action the moment maps add, and on the opposite symplectic manifold the moment map changes sign; the product form is symplectic. [[prop-product-and-opposite-symplectic-moment-maps]].

[F3] $\mu$ is equivariant with $\mu(g\cdot m)=g\cdot\mu(m)$, and the coadjoint action is linear in the second variable: $g\cdot(\beta_1-\beta_2)=g\cdot\beta_1-g\cdot\beta_2$. [[def-moment-map-and-component-hamiltonian]], [[def-coadjoint-representation-of-a-lie-group]].

[F4] If $\alpha$ is regular for $\mu$ and $G_\alpha$ acts freely and properly on $\mu^{-1}(\alpha)$, then the reduction $(M_\alpha,\omega_\alpha)$ exists with $\pi_\alpha^*\omega_\alpha=\iota^*\omega$. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F5] Regularity of a value for a moment map is equivalent to local freeness of the action along the level. [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]].

[F6] The product form restricted to the slice $M\times\{\alpha\}$ pulls back to $\omega$, because the second factor contributes zero on vectors tangent to the slice. [[prop-product-and-opposite-symplectic-moment-maps]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Equip the coadjoint orbit $\mathcal O\subseteq \mathfrak g^*$ with its canonical structure and the KKS form $\omega$, and let $\Phi
- `F1` → [[thm-coadjoint-orbits-are-symplectic-manifolds]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $\mathcal O\subseteq\mathfrak g^*$ be a coadjoint orbit with its canonical immersed homogeneous-space structure and let $\omega
- `F2` → [[prop-product-and-opposite-symplectic-moment-maps]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega_M)$ and $(N,\omega_N)$ be Hamiltonian $G$-spaces with equivariant moment maps $\mu_M$ and $\mu_N$. 1. On the product
- `F3` → [[def-moment-map-and-component-hamiltonian]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic manifold $(M,\omega)$ be given, with fundamental fields $\xi_M$ as in [[def-symplec
- `F3` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F4` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the c
- `F5` → [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a Hamiltonian $G$-space with moment map $\mu$ and a point $p\in M$, the differential $d\mu_p:T_pM\to\mathfrak g^*$ is surjectiv
- `F6` → [[prop-product-and-opposite-symplectic-moment-maps]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega_M)$ and $(N,\omega_N)$ be Hamiltonian $G$-spaces with equivariant moment maps $\mu_M$ and $\mu_N$. 1. On the product

### [[prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition]]

Assume the Axiom of Choice. Let $G$ be a connected real semisimple Lie group
with finite center and Lie algebra $\mathfrak g_0$, let $\Theta$ be a global
Cartan involution of $G$ with $d\Theta_e=\theta$, put $K=G^\Theta$, and let
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ be the Cartan decomposition
attached to $\theta$, so that $K\times\mathfrak p_0\to G$,
$(k,X)\mapsto k\exp X$, is a diffeomorphism and $K$ is a closed compact
subgroup with Lie algebra $\mathfrak k_0$
([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).
Let $\mathfrak a\subseteq\mathfrak p_0$ be a maximal abelian subspace with
restricted-root system $\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$
([[def-restricted-root-and-restricted-root-space]]), let $\Sigma^+$ be a
positive system of $\Sigma$ with associated subalgebra
$\mathfrak n=\mathfrak n(\Sigma^+)=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$
([[def-positive-restricted-roots-and-nilpotent-n-algebra]]), and put
$A=\exp(\mathfrak a)$ and $N=\exp(\mathfrak n)$, so that the multiplication map
$$K\times A\times N\longrightarrow G,\qquad (k,a,n)\longmapsto kan ,$$
is a diffeomorphism onto $G$ ([[thm-global-iwasawa-decomposition]]). For
another maximal abelian subspace $\mathfrak a'\subseteq\mathfrak p_0$ and an
element $k\in K$ with $\operatorname{Ad}(k)\mathfrak a=\mathfrak a'$ write
$\operatorname{Ad}(k)\lambda=\lambda\circ\operatorname{Ad}(k)^{-1}$ for
$\lambda\in\mathfrak a^*$, so that
$\operatorname{Ad}(k)\lambda\in(\mathfrak a')^*$, and put
$\operatorname{Ad}(k)\Sigma^+=\{\operatorname{Ad}(k)\lambda:\lambda\in\Sigma^+\}$.
Then:

(a) **Uniqueness for fixed data.** If $k_1a_1n_1=k_2a_2n_2$ with $k_i\in K$,
$a_i\in A$ and $n_i\in N$, then $k_1=k_2$, $a_1=a_2$ and $n_1=n_2$; that is,
the decomposition of an element of $G$ as a product $kan$ with $k\in K$,
$a\in A$, $n\in N$ is unique.

(b) **Dependence on the choices.** $A=\exp(\mathfrak a)$ determines and is
determined by $\mathfrak a$, and $N=\exp(\mathfrak n(\Sigma^+))$ depends on the
positive system: for the opposite positive system $-\Sigma^+$ one has
$\mathfrak n(-\Sigma^+)=\theta\mathfrak n(\Sigma^+)$ and
$N(-\Sigma^+)=\Theta(N(\Sigma^+))$, and $N(-\Sigma^+)\ne N(\Sigma^+)$ whenever
$\mathfrak n(\Sigma^+)\ne0$, that is, whenever $\mathfrak a\ne0$. In
particular different choices of $(\mathfrak a,\Sigma^+)$ do in general give
different pairs $(A,N)$.

(c) **Change of maximal abelian subspace.** If $\mathfrak a,\mathfrak a'\subseteq\mathfrak p_0$
are maximal abelian, then there is $k\in K$ with
$\operatorname{Ad}(k)\mathfrak a=\mathfrak a'$
([[thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]]); for every positive
system $\Sigma^+$ of $\Sigma(\mathfrak g_0,\mathfrak a)$ the set
$\operatorname{Ad}(k)\Sigma^+$ is a positive system of
$\Sigma(\mathfrak g_0,\mathfrak a')=\operatorname{Ad}(k)\Sigma(\mathfrak g_0,\mathfrak a)$,
one has $\operatorname{Ad}(k)\mathfrak n(\Sigma^+)=\mathfrak n(\operatorname{Ad}(k)\Sigma^+)$
computed with respect to $\mathfrak a'$, and conjugation by $k$ carries
$A=\exp(\mathfrak a)$ and $N=\exp(\mathfrak n(\Sigma^+))$ onto
$\exp(\mathfrak a')$ and $\exp(\mathfrak n(\operatorname{Ad}(k)\Sigma^+))$.

(d) **Change of positive system.** For fixed $\mathfrak a$, and for any two
positive systems $\Sigma^+,\Sigma^{+'}$ of $\Sigma$, there is
$k\in N_K(\mathfrak a)$ with
$\operatorname{Ad}(k)\mathfrak n(\Sigma^+)=\mathfrak n(\Sigma^{+'})$; the
element $w=\operatorname{Ad}(k)|_{\mathfrak a}$ lies in
$W(\mathfrak g_0,\mathfrak a)=W(\Sigma)$ and satisfies
$w(\Sigma^+)=\Sigma^{+'}$. Moreover, for a fixed positive system $\Sigma^+$
the assignment
$$W(\Sigma)\longrightarrow\{\text{positive systems of }\Sigma\},\qquad w\longmapsto w(\Sigma^+) ,$$
is a bijection, so the restricted Weyl group permutes the positive systems
simply transitively; the element $k$ realising a given $w$ is unique up to
multiplication by an element of $Z_K(\mathfrak a)$.

(e) **Simultaneous change.** For any two pairs $(\mathfrak a,\Sigma^+)$ and
$(\mathfrak a',\Sigma^{+'})$ as above there is $k\in K$ with
$\operatorname{Ad}(k)\mathfrak a=\mathfrak a'$,
$\operatorname{Ad}(k)\Sigma^+=\Sigma^{+'}$ and
$\operatorname{Ad}(k)\mathfrak n(\Sigma^+)=\mathfrak n(\Sigma^{+'})$; in this
sense all Iwasawa data are conjugate by $K$.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; a connected semisimple Lie group $G$ with finite center and Lie algebra $\mathfrak g_0$, a global Cartan involution $\Theta$ with $d\Theta_e=\theta$, the subgroup $K=G^\Theta$, the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, a maximal abelian subspace $\mathfrak a\subseteq\mathfrak p_0$, the restricted-root system $\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$, a positive system $\Sigma^+$ of $\Sigma$, the subalgebra $\mathfrak n=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$, and the subgroups $A=\exp(\mathfrak a)$ and $N=\exp(\mathfrak n)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is declared as part of the ZFC interface of the Iwasawa chain and is inherited through [L1] and [L2]. No selection is made in the argument below.

[L1] $K$ is a closed compact subgroup of $G$ with Lie algebra $\mathfrak k_0$; $K\times\mathfrak p_0\to G$ and $K\times A\times N\to G$ are diffeomorphisms; $A=\exp(\mathfrak a)$ and $N=\exp(\mathfrak n)$ are closed simply connected subgroups with Lie algebras $\mathfrak a$ and $\mathfrak n$, and $\exp\colon\mathfrak n\to N$ is a diffeomorphism ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[thm-global-iwasawa-decomposition]]).

[L2] Any two maximal abelian subspaces $\mathfrak a,\mathfrak a'$ of $\mathfrak p_0$ satisfy $\operatorname{Ad}(k)\mathfrak a'=\mathfrak a$ for some $k\in K$ ([[thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]]).

[L3] $\Sigma$ is finite, spans $\mathfrak a^*$, satisfies $s_\lambda(\Sigma)=\Sigma$ and $2\langle\mu,\lambda\rangle|\lambda|^{-2}\in\mathbb Z$ for all $\mu,\lambda\in\Sigma$; the set $\Sigma_s=\{\alpha\in\Sigma:\alpha/2\notin\Sigma\}$ is a reduced crystallographic root system in $\mathfrak a^*$ with $W(\Sigma_s)=W(\Sigma)=\langle s_\lambda:\lambda\in\Sigma\rangle$, the hyperplanes of $\Sigma_s$ are exactly the hyperplanes $\lambda^{\perp}$ with $\lambda\in\Sigma$, and every reflection $s_\lambda$ is realised by an element of $N_K(\mathfrak a)$ ([[prop-restricted-root-systems-may-be-nonreduced]]).

[L4] $W(\mathfrak g_0,\mathfrak a)=N_K(\mathfrak a)/Z_K(\mathfrak a)=W(\Sigma)$ as groups of linear transformations of $\mathfrak a$ and of $\mathfrak a^*$, and $W(\Sigma)$ is finite; the quotient map $N_K(\mathfrak a)\to W(\mathfrak g_0,\mathfrak a)$ is surjective with kernel $Z_K(\mathfrak a)$ ([[def-restricted-weyl-group]], [[thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system]]).

[L5] $W(\Sigma)$ acts simply transitively on the open chambers of the arrangement of hyperplanes $\lambda^{\perp}$, $\lambda\in\Sigma$, and every chamber is the set of solutions of a system of strict homogeneous linear inequalities ([[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]], [[def-open-and-closed-weyl-chambers]]).

[L6] $\mathfrak g_0=\mathfrak g_0^0\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda$ is a direct sum, $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$ and $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$ for all $\lambda,\mu\in\mathfrak a^*$ ([[thm-restricted-root-space-decomposition]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[prop-whitehead-two-removes-the-infinitesimal-equivariance-obstruction-for-semisimple-actions]]

Assume $\mathrm{AC}_\omega$, connected $G$, connected $M$, and suppose an
infinitesimal moment map $\mu:M\to\mathfrak g^*$ is supplied for the action:
that is, each closed one-form $-\iota_{\xi_M}\omega$ has a chosen Hamiltonian
function $\mu^\xi$, depending linearly on $\xi$. If $\mathfrak g$ is
finite-dimensional real semisimple, then there is a covector
$b\in\mathfrak g^*$ such that

$$\mu-b:\ M\longrightarrow\mathfrak g^*,\qquad (\mu-b)^\xi=\mu^\xi-b(\xi),$$

is a coadjoint-equivariant moment map. Thus constants can be added to a
supplied infinitesimal moment map to make it equivariant. The argument
assumes the linear choice of Hamiltonians and does not prove that the
component one-forms $\iota_{\xi_M}\omega$ are exact; it removes only the
obstruction to equivariance.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, connected $G$ and $M$, an infinitesimal moment map $\mu$ for the action, and a finite-dimensional real semisimple $\mathfrak g$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and exponential interfaces cited in [F1] and [F5].

[F1] The components satisfy $d\mu^\xi=-\iota_{\xi_M}\omega$ for all $\xi$. [[def-moment-map-and-component-hamiltonian]].

[F2] The nonequivariance defect $c(\xi,\eta)=\{\mu^\xi,\mu^\eta\}-\mu^{[\xi,\eta]}$ is a constant on $M$ and is a Chevalley--Eilenberg two-cocycle with trivial coefficients. [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]].

[F3] For a finite-dimensional semisimple $\mathfrak g$ over a characteristic-zero field, $H^2(\mathfrak g,M)=0$ for every finite-dimensional module $M$, in particular $H^2(\mathfrak g,\mathbb R)=0$ for the trivial module. [[thm-second-whitehead-lemma]], [[def-lie-algebra-cohomology]], [[def-simple-semisimple-and-reductive-lie-algebras]].

[F4] With the zero-based convention, the Chevalley--Eilenberg differential of a one-cochain $b$ is $(db)(\xi,\eta)=-b([\xi,\eta])$; hence $c=db$ means $c(\xi,\eta)=-b([\xi,\eta])$. [[def-chevalley-eilenberg-differential]].

[F5] Constants are Poisson-central: adding a constant to a function changes no Hamiltonian vector field and the Poisson bracket of a constant with any function vanishes. [[def-poisson-bracket-on-a-symplectic-manifold]].

[F6] The defect vanishes identically on the connected manifold $M$ if and only if $\mu$ is coadjoint equivariant, and for connected $G$ the bracket identity is equivalent to equivariance. [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]], [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[def-moment-map-and-component-hamiltonian]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic manifold $(M,\omega)$ be given, with fundamental fields $\xi_M$ as in [[def-symplec
- `F2` → [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]] (Statement)
  > Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Let a symplectic left action of $G$ on $(M,\omega)$ be given and let $\mu:M\to\mathfrak g^*$ satisfy the c
- `F3` → [[thm-second-whitehead-lemma]] (Statement)
  > If $\mathfrak g$ is finite-dimensional semisimple over a characteristic-zero field and $M$ is a finite-dimensional $\mathfrak g$-module, then $H^2(\mathfrak g,M
- `F3` → [[def-lie-algebra-cohomology]] (Definition)
  > The **Lie algebra cohomology** of $\mathfrak g$ with coefficients in the $\mathfrak g$-module $M$ is the cohomology of its Chevalley–Eilenberg cochain complex: 
- `F3` → [[def-simple-semisimple-and-reductive-lie-algebras]] (Definition)
  > Let $\mathfrak g$ be a finite-dimensional Lie algebra over a field $k$. - It is **simple** if it is nonabelian and its only ideals are $0$ and $\mathfrak g$. - 
- `F4` → [[def-chevalley-eilenberg-differential]] (Definition)
  > For $f\in C^n(\mathfrak g,M)$ define $df\in C^{n+1}(\mathfrak g,M)$ by $$\begin{aligned}(df)(x_0,\ldots,x_n)={}&\sum_{i=0}^n(-1)^i x_i f(x_0,\ldots,\widehat{x_i
- `F5` → [[def-poisson-bracket-on-a-symplectic-manifold]] (Definition)
  > For $F,G\in C^\infty(M)$, the **Poisson bracket** in the library convention is $$\{F,G\}:=\omega(X_F,X_G)=dF(X_G)=X_G(F)=-X_F(G).$$ All four formulas use $\iota
- `F6` → [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]] (Statement)
  > Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Let a symplectic left action of $G$ on $(M,\omega)$ be given and let $\mu:M\to\mathfrak g^*$ satisfy the c
- `F6` → [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a symplectic left action of $G$ on a symplectic manifold $(M,\omega)$ be given, and let $\mu:M\to\mathfrak g^*$ satisfy the com

### [[rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds]]

*This item carries no Statement/Definition/Construction/Example section — open `items/rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds.md`.*

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[rem-representation-theory-of-noncompact-real-reductive-groups]]

*This item carries no Statement/Definition/Construction/Example section — open `items/rem-representation-theory-of-noncompact-real-reductive-groups.md`.*

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]]

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with Cartan involution $\theta$, and let $\mathfrak h_0$
be a $\theta$-stable Cartan subalgebra with compact part $\mathfrak t_0$ and
split part $\mathfrak a_0$
([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]],
[[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]]). Then:

1. if $\mathfrak h_0$ has a real root $\alpha$, the real-root Cayley transform
   attached to a normalized root vector $E_\alpha$ gives a $\theta$-stable
   Cartan subalgebra
   $\mathfrak g_0\cap d_\alpha(\mathfrak h)=\ker(\alpha|_{\mathfrak h_0})\oplus\mathbb R(E_\alpha+\theta E_\alpha)$
   whose compact dimension is $\dim\mathfrak t_0+1$ and whose noncompact
   dimension is $\dim\mathfrak a_0-1$;
2. if $\mathfrak h_0$ has a noncompact imaginary root $\beta$, the
   noncompact-imaginary Cayley transform attached to a normalized root vector
   $E_\beta$ gives a $\theta$-stable Cartan subalgebra
   $\mathfrak g_0\cap c_\beta(\mathfrak h)=\ker(\beta|_{\mathfrak h_0})\oplus\mathbb R(E_\beta+\sigma E_\beta)$
   whose noncompact dimension is $\dim\mathfrak a_0+1$ and whose compact
   dimension is $\dim\mathfrak t_0-1$;
3. the two kinds of transforms are inverse to one another on the Cartan
   subalgebras: for a real root $\alpha$ the Cartan subalgebra produced in 1
   has the noncompact imaginary root $\alpha'=d_\alpha(\alpha)$, and with the
   compatible choice $E_{\alpha'}=-i\,d_\alpha(E_\alpha)$ of normalized root
   vector the noncompact-imaginary transform returns $\mathfrak h_0$;
4. consequently every $\theta$-stable Cartan subalgebra is carried by a finite
   sequence of real-root Cayley transforms to a maximally compact one and by a
   finite sequence of noncompact-imaginary Cayley transforms to a maximally
   noncompact one, and the maximally compact representatives, as well as the
   maximally noncompact ones, are mutually conjugate by real inner
   automorphisms.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; a real semisimple Lie algebra $\mathfrak g_0$ with Killing form $B_0$ and Cartan involution $\theta$; the complexification $\mathfrak g$ with Killing form $B$, conjugation $\sigma$ and $\mathbb C$-linear extension of $\theta$; a $\theta$-stable Cartan subalgebra $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ with complexification $\mathfrak h$ and root system $\Phi$; and the positive definite form $B_\theta(Z,W)=-B(Z,\theta\sigma W)$ with Killing-dual vectors $H_\alpha$ and coroots $h_\alpha$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the global Cartan decomposition and the conjugacy of maximal tori in part 4.

[L1] The Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ satisfies $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$, and $B_0$ is negative definite on $\mathfrak k_0$, positive definite on $\mathfrak p_0$, the summands being orthogonal; for $X\in\mathfrak k_0$ the operator $\operatorname{ad}_X$ is skew-adjoint and for $X\in\mathfrak p_0$ it is self-adjoint for $B_\theta$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]], [[def-self-adjoint-and-normal-endomorphism]]).

[L2] $B$ is symmetric, invariant and nondegenerate, $B|_{\mathfrak h}$ is nondegenerate, $H_\alpha$ is characterized by $B(H_\alpha,H)=\alpha(H)$ and satisfies $\alpha(H_\alpha)=B(H_\alpha,H_\alpha)$, and $h_\alpha=2H_\alpha/\alpha(H_\alpha)$ satisfies $\alpha(h_\alpha)=2$ and $B(h_\alpha,h_\alpha)=4/|H_\alpha|^2$ with $|H_\alpha|^2=B(H_\alpha,H_\alpha)$; for a real root $H_\alpha\in\mathfrak a_0$ and for an imaginary root $H_\alpha\in i\mathfrak t_0$ ([[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]], [[prop-trace-forms-are-symmetric-and-invariant]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L3] The roots of $(\mathfrak g,\mathfrak h)$ are the nonzero weights of the adjoint action of $\mathfrak h$, one has $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with $\theta(\mathfrak g_\alpha)=\mathfrak g_{\theta\alpha}$, and the centralizer of a subspace of $\mathfrak h$ in $\mathfrak g$ is the sum of $\mathfrak h$ and the root spaces whose roots vanish on it ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

[L4] A Cartan subalgebra is nilpotent and equal to its own normalizer, and for a nilpotent Lie algebra $\mathfrak n$ one has $\operatorname{ad}_X^k(\mathfrak n)\subseteq\gamma_k(\mathfrak n)$, so that $\operatorname{ad}_X$ is nilpotent on $\mathfrak n$ for every $X\in\mathfrak n$; a real subspace of $\mathfrak g_0$ whose complexification is a Cartan subalgebra of $\mathfrak g$ and which is nilpotent is a Cartan subalgebra of $\mathfrak g_0$, because a normalizer in $\mathfrak g_0$ normalizes the complexification ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]], [[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L5] The real rank is the common dimension of the maximal abelian subspaces of $\mathfrak p_0$, every abelian subspace of $\mathfrak p_0$ is contained in a maximal one, and any two maximal abelian subspaces of $\mathfrak p_0$ are conjugate by $\operatorname{Ad}(K)$ for the compact group $K$ of [L6] ([[def-maximal-split-abelian-subspace-and-real-rank]], [[thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]]).

[L6] Let $G$ be a connected real semisimple Lie group with finite center and global Cartan involution $\Theta$ with $d\Theta_e=\theta$, and let $K=G^\Theta$. Then $K$ is a compact subgroup with Lie algebra $\mathfrak k_0$, $\operatorname{Ad}(K)\subseteq\operatorname{Int}(\mathfrak g_0)$, a maximal abelian subspace of $\mathfrak k_0$ is the Lie algebra of a maximal torus of $K$, and any two maximal tori of $K$ are conjugate; consequently any two maximal abelian subspaces of $\mathfrak k_0$ have the same dimension ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[thm-conjugacy-of-maximal-tori]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

[L7] The real-root and noncompact-imaginary Cayley transforms $d_\alpha$ and $c_\beta$ are the automorphisms of $\mathfrak g$ defined in [[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]], for normalized root vectors $E_\alpha\in\mathfrak g_\alpha\cap\mathfrak g_0$ and $E_\beta\in\mathfrak g_\beta$; here $\mathfrak g_\alpha$ is $\sigma$-stable for a real root, $\sigma(\mathfrak g_\beta)=\mathfrak g_{-\beta}$ and $\theta\sigma=\sigma\theta$ for an imaginary root ([[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]], [[def-complexification-of-a-real-lie-algebra]]).

[L8] $\mathfrak g_0$ is a finite-dimensional real semisimple Lie algebra, so a connected Lie group $G$ with Lie algebra $\mathfrak g_0$ and a global Cartan involution $\Theta$ with $d\Theta_e=\theta$ exist; the roots of $(\mathfrak g,\mathfrak h)$ are related to $\theta$ by $\theta\alpha=\alpha\circ\theta^{-1}$, an imaginary root is compact or noncompact according to whether $\mathfrak g_\alpha\subseteq\mathfrak k$ or $\mathfrak g_\alpha\subseteq\mathfrak p$, and every root vanishing on $\mathfrak t_0$ is real ([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]], [[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]], [[thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[thm-classification-of-real-forms-by-vogan-diagrams]]

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra. Then the assignment that sends a real form
$\mathfrak g_0$ of $\mathfrak g$ to the equivalence class of its Vogan diagram,
formed with the help of a Cartan involution, a maximally compact $\theta$-stable
Cartan subalgebra and a compatible positive system
([[def-vogan-diagram]]), is a bijection from the isomorphism classes of real
forms of $\mathfrak g$ onto the equivalence classes of abstract Vogan diagrams
over the root system of $\mathfrak g$.

The proof below establishes that the assignment is well defined and injective
(steps 1.1-10.1) and surjective (steps 11.1-16.1): every abstract Vogan diagram
over the root system of $\mathfrak g$ is realized by a real form of
$\mathfrak g$.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Cartan subalgebra $\mathfrak h$ and root system $\Phi$; the equivalence relation on abstract Vogan diagrams of [[def-vogan-diagram]]; and, when the surjectivity direction is under discussion, an abstract Vogan diagram $D=(\Phi,\tau,\varepsilon)$ over $\Phi$, where $\tau$ is an isometry of $\operatorname{span}_{\mathbb R}\Phi$ with $\tau(\Phi)=\Phi$, $\tau^2=\mathrm{id}$ and $\tau(\Delta)=\Delta$ for a base $\Delta$, and $\varepsilon$ is the multiplicative marking determined by the painting of the $\tau$-fixed simple roots.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the structure theory quoted in [L1]-[L4] and through the existence and conjugacy theorems of [L5].

[L1] The Vogan diagram of a real form depends only on the form up to equivalence: [[thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence]]; and Cartan involutions of a real form are all conjugate by inner automorphisms, so the class in question is independent of the Cartan involution as well ([[thm-conjugacy-of-cartan-involutions]]).

[L2] Every real semisimple Lie algebra has a Cartan involution, maximally compact $\theta$-stable Cartan subalgebras exist and are mutually conjugate by inner automorphisms, and the real-root and noncompact-imaginary Cayley transforms have the effect recorded in [[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]] ([[thm-existence-of-a-cartan-involution]], [[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]], [[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]).

[L3] Every complex semisimple Lie algebra is presented by the Serre generators and relations of its Cartan matrix, and complex semisimple Lie algebras with isomorphic based root systems are isomorphic ([[thm-serre-presentation-theorem]], [[thm-isomorphism-theorem-for-complex-semisimple-lie-algebras]]); every reduced crystallographic root system is the root system of a complex semisimple Lie algebra ([[thm-existence-theorem-for-complex-semisimple-lie-algebras]]).

[L4] Every complex semisimple Lie algebra has a compact real form, any two compact real forms are conjugate by an inner automorphism, and it has a split real form, unique up to isomorphism ([[thm-existence-of-a-compact-real-form]], [[thm-conjugacy-of-compact-real-forms]], [[thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form]], [[def-split-real-form]]).

[L5] For the compact group $K$ of the global Cartan decomposition of a real semisimple Lie algebra, $\operatorname{Ad}(K)\subseteq\operatorname{Int}(\mathfrak g_0)$, any two maximal tori of $K$ are conjugate, and the analytic Weyl group of $K$ agrees with the Weyl group of the root system ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[thm-conjugacy-of-maximal-tori]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]], [[thm-analytic-and-root-system-weyl-groups-agree]]).

[L6] Positive systems and bases of a root system are related as in [[prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers]]; the Killing form $B$ is symmetric, invariant and nondegenerate, $B|_{\mathfrak h}$ is nondegenerate, $H_\alpha$ is the Killing-dual vector with $\alpha(H_\alpha)=B(H_\alpha,H_\alpha)$ and $h_\alpha=2H_\alpha/\alpha(H_\alpha)$ ([[prop-trace-forms-are-symmetric-and-invariant]], [[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]); and every Cartan subalgebra of the complex semisimple $\mathfrak g$ is abelian and self-normalizing, $N_{\mathfrak g}(\mathfrak h)=\mathfrak h$ ([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]], [[def-cartan-subalgebra-of-a-lie-algebra]]).

[L8] In the root system $\Phi$ with base $\Delta$: the simple roots are linearly independent, and every root is a unique integral combination of them whose nonzero coefficients all have the same sign ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]); for $\alpha\in\Phi$ and $\beta\in\Phi\cup\{0\}$ the set $\{k\in\mathbb Z:\mathfrak g_{\beta+k\alpha}\ne0\}$ is a nonempty interval of consecutive integers $\{-p,\dots,q\}$ with $p\ge0$, $q\ge0$ and $p-q=\beta(h_\alpha)$ ([[thm-root-string-property]]); and the inner product $(\lambda,\mu)=B(H_\lambda,H_\mu)$ on $\operatorname{span}_{\mathbb R}\Phi$ is positive definite ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]).

[L7] The root-vector basis of $\mathfrak g$ relative to $\mathfrak h$ can be chosen as $X_\alpha\in\mathfrak g_\alpha$ with $[X_\alpha,X_{-\alpha}]=H_\alpha$ and $B(X_\alpha,X_{-\alpha})=1$ for every root, and with constants $C_{\alpha\beta}\in\mathbb R$, defined by $[X_\alpha,X_\beta]=C_{\alpha\beta}X_{\alpha+\beta}$, that satisfy $C_{\alpha\beta}=-C_{-\alpha,-\beta}$ ([[lem-chevalley-basis-and-real-structure-constants]]). The underlying vectors are rescalings $X_\alpha=\lambda_\alpha e_\alpha$ of a basis with $[e_\alpha,e_{-\alpha}]=h_\alpha$ and $N_{\alpha\beta}=\pm(p+1)$, where $\lambda_\alpha=((\alpha,\alpha)/2)^{1/2}>0$ and $\beta+n\alpha$, $-p\le n\le q$, is the $\alpha$-string through $\beta$, so that $$C_{\alpha\beta}=\frac{\lambda_\alpha\lambda_\beta}{\lambda_{\alpha+\beta}}N_{\alpha\beta},\qquad C_{\alpha\beta}^2=\frac{(\alpha,\alpha)(\beta,\beta)}{2(\alpha+\beta,\alpha+\beta)}(p+1)^2 .$$

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[thm-classification-of-real-semisimple-lie-algebras]]

Assume the Axiom of Choice. Every finite-dimensional real semisimple Lie
algebra $\mathfrak g_0$ is a direct sum of real simple ideals
([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]]),
and each of those simple ideals is either

1. a complex simple Lie algebra regarded as a real Lie algebra, or
2. a noncomplex simple Lie algebra whose complexification is a complex simple
   Lie algebra, and then it is a real form of that complexification
   ([[def-real-form-of-a-complex-lie-algebra]],
   [[thm-complexification-dichotomy-for-a-real-simple-lie-algebra]]);

in case 2 the isomorphism class of the form is one of the classes in the
Vogan/Satake list of the complex simple Lie algebra: the compact real form,
the split real form, the classical intermediate forms
$\mathfrak{su}(p,q)$, $\mathfrak{so}(p,q)$, $\mathfrak{sp}(p,q)$,
$\mathfrak{sp}_{2n}(\mathbb R)$, $\mathfrak{so}^{*}(2n)$,
$\mathfrak{sl}_n(\mathbb R)$, $\mathfrak{sl}_n(\mathbb H)$ in their admissible
ranges, and the twelve exceptional noncompact noncomplex forms; the classical
families are recorded in the source in Figure 6.1 (Knapp, printed pp. 413-415)
and the exceptional ones in Figures 6.2 and 6.3 (Knapp, printed pp. 416 and
420). This list is complete up to isomorphism, and the
directions of the rest of this page identify its entries by their Vogan and
Satake diagrams ([[thm-classification-of-real-forms-by-vogan-diagrams]],
[[thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications]]).

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; a finite-dimensional real semisimple Lie algebra $\mathfrak g_0$ with its decomposition into simple ideals; the classification of complex simple Lie algebras by connected Dynkin diagrams; and the two diagram classifications of real forms.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the decomposition into simple ideals, through the classification of real forms by diagrams and through the isomorphism theorem for complex semisimple Lie algebras used to identify the complexifications.

[L1] A finite-dimensional semisimple real Lie algebra is a finite direct sum of simple ideals, and simple means nonabelian with no nonzero proper ideal while semisimple means zero radical ([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]], [[def-simple-semisimple-and-reductive-lie-algebras]]).

[L2] The complexification of a real simple Lie algebra is either complex simple or the direct sum of two isomorphic simple ideals interchanged by the conjugation, and in the latter case the real algebra is a complex simple algebra regarded as real ([[thm-complexification-dichotomy-for-a-real-simple-lie-algebra]]).

[L3] Every real form of a complex semisimple Lie algebra determines a Vogan diagram, well defined up to equivalence, and two real forms with equivalent Vogan diagrams are isomorphic; the Satake diagrams determine the same real-form isomorphism classes as the Vogan diagrams ([[thm-classification-of-real-forms-by-vogan-diagrams]], [[thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications]], [[def-vogan-diagram]], [[def-satake-diagram]]).

[L4] The compact real form is characterized by negative definiteness of the Killing form, the split real form by a real Cartan subalgebra with simultaneously diagonalizable adjoint action, and the classical forms $\mathfrak{su}(p,q),\mathfrak{so}(p,q),\mathfrak{sp}(p,q),\mathfrak{sp}_{2n}(\mathbb R),\mathfrak{so}^{*}(2n),\mathfrak{sl}_n(\mathbb R),\mathfrak{sl}_n(\mathbb H)$ are the real forms of the classical complex simple Lie algebras, in admissible ranges, with the stated low-rank coincidences; the identifications of the classical families with these matrix algebras are recorded in Knapp, §10, Figure 6.1 (printed pp. 413-415) ([[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[def-split-real-form]]).

[L5] Root-space data: for a complex semisimple Lie algebra with Cartan subalgebra and root system there are root vectors $X_\alpha$ with $[X_\alpha,X_{-\alpha}]=H_\alpha$, $[X_\alpha,X_\beta]=N_{\alpha\beta}X_{\alpha+\beta}$ when $\alpha+\beta$ is a root and $[X_\alpha,X_\beta]=0$ otherwise for $\alpha+\beta\ne0$, $B(X_\alpha,X_{-\alpha})=1$, $N_{\alpha\beta}=-N_{-\alpha,-\beta}$ and $N_{\alpha\beta}^{2}=\tfrac12q(1+p)|\alpha|^{2}$ for the $\alpha$-string through $\beta$; the Cartan matrix, its simple coroots $h_i$, the root system, and the existence and isomorphism theorems for complex semisimple Lie algebras are available ([[lem-chevalley-basis-and-real-structure-constants]], [[def-cartan-matrix-of-a-based-root-system]], [[def-coroot-of-a-lie-algebra-root]], [[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]], [[thm-existence-theorem-for-complex-semisimple-lie-algebras]], [[thm-isomorphism-theorem-for-complex-semisimple-lie-algebras]]).

[L6] The Borel-de Siebenthal theorem and its two lemmas are recorded in the source with proofs: the set of elements of $i\mathfrak t_0$ with the stated integrality and parity properties is nonempty and discrete, its least-norm element can be made dominant, and the painting can be reduced to at most one simple root, with the numerical restriction of step 2.4 on which vertex may be painted (Source, Chapter VI, Theorem 6.96 with Lemmas 6.97-6.98, printed pp. 409-412).

[L7] The classification theorem of the source lists the simple real Lie algebras as the complex simple algebras regarded as real, the compact and split forms, the classical matrix algebras in admissible ranges, and the twelve exceptional noncompact noncomplex forms of Figures 6.2 and 6.3, with $\mathfrak{so}^{*}(8)\cong\mathfrak{so}(6,2)$ the only isomorphism among the entries (Source, Theorem 6.105 and its remark, printed pp. 421-422; Figures 6.1-6.3, printed pp. 413-420).


**Proof technique:** direct.

1.1 By [L1] write $\mathfrak g_0=\mathfrak g_1\oplus\cdots\oplus\mathfrak g_m$ with each $\mathfrak g_i$ a real simple ideal; applying [L2] to each summand, every $\mathfrak g_i$ is either a complex simple Lie algebra regarded as a real Lie algebra, or a noncomplex simple Lie algebra whose complexification $(\mathfrak g_i)_{\mathbb C}$ is complex simple, in which case $\mathfrak g_i$ is a real form of $(\mathfrak g_i)_{\mathbb C}$. [L1, L2]

1.2 For the summands of the second kind the classification problem is therefore to classify the real forms of a complex simple Lie algebra $\mathfrak g$ up to isomorphism; by [L3] that classification is given by the equivalence classes of Vogan diagrams over the root system of $\mathfrak g$, equivalently by the equivalence classes of Satake diagrams over the same root system, and the two classifications determine the same real-form isomorphism classes. [L3]

1.3 Realization of an abstract Vogan diagram. Let an abstract diagram over the root system $\Phi$ of a complex simple Lie algebra be given, that is, an order-two automorphism $\tau$ of a base $\Delta$ together with a painting of the $\tau$-fixed simple roots ([[def-vogan-diagram]]). There are a complex semisimple Lie algebra $\mathfrak g$ with Cartan subalgebra $\mathfrak h$, a positive system $\Phi^{+}$ with base $\Delta$, and normalized root vectors $X_\alpha$ as in [L5]; then $$\mathfrak u_0=\sum_{\alpha\in\Phi}\mathbb R\, iH_\alpha+\sum_{\alpha\in\Phi}\mathbb R\,(X_\alpha-X_{-\alpha})+\sum_{\alpha\in\Phi}\mathbb R\, i(X_\alpha+X_{-\alpha})$$ is a compact real form of $\mathfrak g$ with $\mathfrak g=\mathfrak u_0\oplus i\mathfrak u_0$. [L4, L5, algebr
… [truncated at 6000 characters by the bundle cap — open `items/thm-classification-of-real-semisimple-lie-algebras.md` for the rest; nothing below this cut is evidence]

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[thm-coadjoint-orbits-are-symplectic-manifolds]]

Assume $\mathrm{AC}_\omega$. Let $\mathcal O\subseteq\mathfrak g^*$ be a
coadjoint orbit with its canonical immersed homogeneous-space structure and let
$\omega$ be the KKS form of
[[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]]. Then $\omega$ is a
smooth, closed, nondegenerate two-form on $\mathcal O$, so $(\mathcal O,\omega)$
is a symplectic manifold. It is $G$-invariant, and the inclusion
$\Phi:\mathcal O\hookrightarrow\mathfrak g^*$ satisfies the component moment
equations $d\langle\Phi,\xi\rangle=-\iota_{\xi_{\mathcal O}}\omega$ for the
coadjoint action. It is the unique two-form on $\mathcal O$ for which the
inclusion is an infinitesimal moment map, hence in particular the unique
$G$-invariant symplectic form with that property.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a coadjoint orbit $\mathcal O$ with its canonical structure, and the KKS form $\omega$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the orbit and fundamental-field suppliers cited below.

[F1] The KKS form is defined by $\omega_\beta(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta))=\beta([\xi,\eta])$ and is independent of representatives. [[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]], [[lem-kks-form-is-independent-of-lie-algebra-representatives]].

[F2] The infinitesimal orbit map $\xi\mapsto\xi_{\mathcal O}(\beta)$ has image all of $T_\beta\mathcal O$ and kernel $\mathfrak g_\beta$, and $\xi_{\mathcal O}$ is smooth. [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]], [[thm-every-orbit-is-an-injectively-immersed-homogeneous-space]].

[F3] The fundamental field of the coadjoint action satisfies $\xi_{\mathfrak g^*}(\beta)(\eta)=\beta([\xi,\eta])$. [[def-coadjoint-representation-of-a-lie-group]].

[F4] Fundamental fields are equivariant: $d(a_h)_\beta\xi_{\mathcal O}(\beta)=(\operatorname{Ad}_h\xi)_{\mathcal O}(h\cdot\beta)$, and $\operatorname{Ad}_h$ preserves brackets. [[prop-adjoint-intertwines-the-exponential-map]], [[prop-adjoint-is-a-smooth-lie-group-representation]], [[def-fundamental-vector-field-of-a-left-action]].

[F5] Cartan's magic formula $\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega)$ holds, and $\mathcal L_X\omega=0$ whenever the flow of $X$ preserves $\omega$. [[thm-cartans-magic-formula]], [[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]].

[F6] The inclusion $\Phi(\beta)=\beta$ is smooth, and its components $\Phi^\xi(\beta)=\langle\beta,\xi\rangle$ are linear on the vector space $\mathfrak g^*$, so $d\Phi^\xi_\beta(v)=v(\xi)$ for $v\in T_\beta\mathfrak g^*\simeq\mathfrak g^*$. [[thm-every-orbit-is-an-injectively-immersed-homogeneous-space]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g$ and let $\mathcal O=G\cdot\alpha\subseteq \mathfrak g
- `F1` → [[lem-kks-form-is-independent-of-lie-algebra-representatives]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $\mathcal O$ be a coadjoint orbit and let $\beta\in\mathcal O$. If $\xi,\xi'\in\mathfrak g$ satisfy $\xi_{\mathcal O}(\beta)=\x
- `F2` → [[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a smooth left action of $G$ on $M$ and $x\in M$, the linear infinitesimal orbit map $$\mathfrak g\longrightarrow T_xM,\qquad X\
- `F2` → [[thm-every-orbit-is-an-injectively-immersed-homogeneous-space]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a smooth action of $G$ on $M$ and $x\in M$, the map $$\overline\Phi_x:G/G_x\longrightarrow M,\qquad gG_x\longmapsto g\cdot x,$$
- `F3` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F4` → [[prop-adjoint-intertwines-the-exponential-map]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g$. For every $g\in G$ and $X\in\mathfrak g$, $$g\exp_G(
- `F4` → [[prop-adjoint-is-a-smooth-lie-group-representation]] (Statement)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g$. Its adjoint map is a group homomorphism $$\operatorname{Ad}:G\longrightarrow\oper
- `F4` → [[def-fundamental-vector-field-of-a-left-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ act smoothly on the left of a smooth manifold $M$, let $\mathfrak g=T_eG$, and let $X\in\mathfrak g$. The **fundamental vec
- `F5` → [[thm-cartans-magic-formula]] (Statement)
  > For every vector field $X$ and differential form $\omega$, $$\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).$$
- `F5` → [[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]] (Statement)
  > On every common local flow domain, $\Phi_t^*T=T$ for all defined $t$ if and only if $\mathcal L_XT=0$.
- `F6` → [[thm-every-orbit-is-an-injectively-immersed-homogeneous-space]] (Statement)
  > Assume $\mathrm{AC}_\omega$. For a smooth action of $G$ on $M$ and $x\in M$, the map $$\overline\Phi_x:G/G_x\longrightarrow M,\qquad gG_x\longmapsto g\cdot x,$$

### [[thm-complexification-dichotomy-for-a-real-simple-lie-algebra]]

Let $\mathfrak g_0$ be a finite-dimensional real simple Lie algebra
([[def-simple-semisimple-and-reductive-lie-algebras]]) with complexification
$\mathfrak g=\mathfrak g_0\otimes_{\mathbb R}\mathbb C$
([[def-complexification-of-a-real-lie-algebra]]). Then exactly one of the
following holds:

1. $\mathfrak g$ is a complex simple Lie algebra;
2. $\mathfrak g=\mathfrak s\oplus\sigma(\mathfrak s)$ is a direct sum of two
   simple ideals interchanged by the canonical conjugation $\sigma$ of
   $\mathfrak g$ over $\mathfrak g_0$
   ([[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]]),
   and the two ideals are isomorphic complex Lie algebras. In this case
   $\mathfrak g_0$ is isomorphic, as a real Lie algebra, to the complex simple
   Lie algebra $\mathfrak s$ regarded as a real Lie algebra.

In particular a real simple Lie algebra is either a complex simple Lie algebra
viewed as a real Lie algebra, or a noncomplex simple Lie algebra whose
complexification is simple.

**Facts & Assumptions (verbatim).**

**Given:** A finite-dimensional real simple Lie algebra $\mathfrak g_0$ that is nonabelian with no nonzero proper ideal, with complexification $\mathfrak g=\mathfrak g_0\otimes_{\mathbb R}\mathbb C$ and canonical conjugation $\sigma$; and the notation of [[def-simple-semisimple-and-reductive-lie-algebras]], [[def-complexification-of-a-real-lie-algebra]] and [[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]].

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters only through the isomorphism theorem of [L6], which is used in step 5.1 to identify the complex Lie algebra $\mathfrak s$ with its complex conjugate.

[L1] A Lie algebra is simple if it is nonabelian and has no nonzero proper ideal, and semisimple if its radical is zero; a solvable ideal of a semisimple algebra is zero ([[def-simple-semisimple-and-reductive-lie-algebras]]).

[L2] The complexification $\mathfrak g_{\mathbb C}$ of a finite-dimensional real Lie algebra $\mathfrak g_0$ carries the bracket $[X\otimes z,Y\otimes w]=[X,Y]\otimes zw$, every element has a unique expression $X\otimes1+i\,Y\otimes1$ with $X,Y\in\mathfrak g_0$, and $\mathfrak g_0$ embeds as a real form ([[def-complexification-of-a-real-lie-algebra]]).

[L3] The canonical conjugation $\sigma(X\otimes z)=X\otimes\bar z$ is a well-defined conjugate-linear bracket-preserving involution of $\mathfrak g$ with fixed locus $\mathfrak g_0\otimes1$, so it is additive and real-linear, $\sigma^2=\mathrm{id}$, and $\sigma(iz)=-i\,\sigma(z)$ for $z\in\mathfrak g$ ([[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]]).

[L4] $\mathfrak g_0$ is semisimple if and only if $\mathfrak g$ is semisimple ([[prop-complexification-preserves-semisimplicity]]).

[L5] Every finite-dimensional semisimple Lie algebra over a characteristic-zero field is a finite direct sum of simple ideals, and the simple ideals are nonabelian with trivial center and satisfy $[\mathfrak l,\mathfrak l]=\mathfrak l$ ([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L6] Two finite-dimensional complex semisimple Lie algebras with isomorphic based root systems are isomorphic, and every complex semisimple Lie algebra has a Cartan subalgebra with a root-space decomposition with one-dimensional root spaces ([[thm-isomorphism-theorem-for-complex-semisimple-lie-algebras]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[def-cartan-subalgebra-of-a-lie-algebra]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[thm-conjugacy-of-compact-real-forms]]

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra and let $\mathfrak u_1,\mathfrak u_2$ be two compact real
forms of $\mathfrak g$. Then there is an inner automorphism $\varphi$ of
$\mathfrak g$ with $\varphi(\mathfrak u_1)=\mathfrak u_2$; here an automorphism
is called inner when it is a finite product of factors
$\exp(\operatorname{ad}W)$, $W\in\mathfrak g$. In particular any two compact
real forms of $\mathfrak g$ are isomorphic as real Lie algebras.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Killing form $B$; two compact real forms $\mathfrak u_1,\mathfrak u_2$ with associated conjugations $\tau_1,\tau_2$; and the real Lie algebra $\mathfrak g_{\mathbb R}$ underlying $\mathfrak g$, with Killing form $B_{\mathbb R}$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited from the compact-form theory of [L1].

[L1] Each $\mathfrak u_i$ is a real form of $\mathfrak g$ whose Killing form is negative definite, and the associated conjugation $\tau_i(X+iY)=X-iY$ ($X,Y\in\mathfrak u_i$) is a conjugate-linear Lie-algebra involution with fixed locus $\mathfrak u_i$, so that $\mathfrak u_i=\{Z:\tau_iZ=Z\}$ and $\mathfrak g=\mathfrak u_i\oplus i\mathfrak u_i$ ([[thm-real-forms-correspond-to-conjugate-linear-involutions]], [[def-real-form-of-a-complex-lie-algebra]], [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[thm-existence-of-a-compact-real-form]]).

[L2] The Killing form $B$ is symmetric, invariant and nondegenerate; a finite-dimensional Lie algebra over a characteristic-zero field is semisimple if and only if its Killing form is nondegenerate, and for such an algebra every derivation is inner with $\operatorname{Der}=\operatorname{ad}$ and $Z(\mathfrak g)=0$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]], [[thm-cartans-semisimplicity-criterion]], [[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L3] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors with real eigenvalues, and every self-adjoint endomorphism is normal ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[thm-existence-of-a-compact-real-form]]

Assume the Axiom of Choice. Every finite-dimensional complex semisimple Lie
algebra $\mathfrak g$ has a compact real form
([[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]): a real form
$\mathfrak k_0$ whose Killing form $B|_{\mathfrak k_0\times\mathfrak k_0}$ is
negative definite.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice and a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Killing form $B$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Cartan and root data of [L1] and through the normalization statement [L3], whose statements carry the assumption.

[L1] With a Cartan subalgebra $\mathfrak h$, the root system $\Phi$ is finite, $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with one-dimensional root spaces, and for every root $\alpha$ there are $e_\alpha\in\mathfrak g_\alpha$, $f_\alpha\in\mathfrak g_{-\alpha}$ and $H_\alpha\in\mathfrak h$ with $[e_\alpha,f_\alpha]=H_\alpha$, $\alpha(H_\alpha)=2$, $[H_\alpha,e_\alpha]=2e_\alpha$, $[H_\alpha,f_\alpha]=-2f_\alpha$ and $\beta(H_\alpha)\in\mathbb Z$ for every root $\beta$; also $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ and the Cartan integers are rational ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[thm-root-sl-two-triple]], [[thm-serre-presentation-theorem]]).

[L2] $B$ is symmetric, invariant and nondegenerate, the center of $\mathfrak g$ is zero, the pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}$ induced by $B$ is nondegenerate, and in the triple above the trace formula gives $B(H_\alpha,H_\alpha)=2B(e_\alpha,f_\alpha)$ ([[thm-cartans-semisimplicity-criterion]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[cor-opposite-root-spaces-pair-nondegenerately]]).

[L3] The root-vector basis of [L1] can be rescaled so that, in the notation of [L1], $[e_\alpha,f_\alpha]=H_\alpha$ for every root $\alpha$ and the structure constants $N_{\alpha\beta}$, defined by $[e_\alpha,e_\beta]=N_{\alpha\beta}e_{\alpha+\beta}$ when $\alpha+\beta\in\Phi$ and $N_{\alpha\beta}:=0$ when $\alpha+\beta\notin\Phi\cup\{0\}$, are integers satisfying $N_{\alpha\beta}=-N_{-\alpha,-\beta}$ for all $\alpha,\beta\in\Phi$ with $\alpha+\beta\ne0$; in this normalization the coroots $H_{\alpha_1},\dots,H_{\alpha_r}$ attached to any base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ form a basis of $\mathfrak h$ ([[lem-chevalley-basis-and-real-structure-constants]]).

**Proof technique:** direct.

1.1 Fix the data of [L1]. For every root $\alpha$, invariance of $B$ and $[e_\alpha,f_\alpha]=H_\alpha$ give $B(H_\alpha,H_\alpha)=B([e_\alpha,f_\alpha],H_\alpha)=B(e_\alpha,[f_\alpha,H_\alpha])=2B(e_\alpha,f_\alpha)$, so $B(e_\alpha,f_\alpha)=\tfrac12B(H_\alpha,H_\alpha)$. The trace formula computes $B$ on $\mathfrak h$: in a basis consisting of a basis $H_1,\dots,H_r$ of $\mathfrak h$ together with one nonzero vector $e_\gamma\in\mathfrak g_\gamma$ for each root $\gamma$, the operator $\operatorname{ad}_H$ has eigenvalues $0$ on $\mathfrak h$ and $\gamma(H)$ on the one-dimensional space $\mathfrak g_\gamma$, so the trace of $\operatorname{ad}_H\operatorname{ad}_{H'}$ is $$\sum_{\gamma\in\Phi}\gamma(H)\gamma(H')$$ and $B(H,H')$ equals that sum for $H,H'\in\mathfrak h$. For $H=\sum_\alpha t_\alpha H_\alpha$ with real $t_\alpha$ every $\gamma(H)\in\mathbb R$ by the integrality $\gamma(H_\alpha)\in\mathbb Z$ recorded in [L1], and the two terms $\gamma=\pm\alpha$ give $B(H_\alpha,H_\alpha)=\sum_{\gamma\in\Phi}\gamma(H_\alpha)^2\ge 8>0$. Hence $$B(e_\alpha,f_\alpha)=\tfrac12B(H_\alpha,H_\alpha)>0\qquad\text{for every root }\alpha;$$ no rescaling is needed for this, and the inverse rescaling $(\lambda_\alpha e_\alpha,\lambda_\alpha^{-1}f_\alpha)$, $\lambda_\alpha>0$, preserves $[e_\alpha,f_\alpha]$ and leaves $B(e_\alpha,f_\alpha)$ unchanged. [A1, L1, L2, algebra]

2.1 By the trace formula of step 1.1, $B(H,H')=\sum_{\gamma\in\Phi}\gamma(H)\gamma(H')$ for $H,H'\in\mathfrak h$. For $H=\sum_\alpha t_\alpha H_\alpha$ with real $t_\alpha$ all values $\gamma(H)$ are real by [L1]; if $H\ne0$ then $\gamma(H)\ne0$ for some root $\gamma$, because an element of $\mathfrak h$ commuting with every root vector commutes with all of $\mathfrak g$ and so lies in the zero center recorded in [L2]. Hence $B(H,H)=\sum_\gamma\gamma(H)^2>0$ for $H\ne0$, that is, the restriction of $B$ to $\mathfrak h_{\mathbb R}:=\sum_\alpha\mathbb RH_\alpha$ is positive definite. [L1, L2, step 1.1, algebra]

2.2 (Normalized basis and closure of $\mathfrak k_0$) Choose the root vectors as in [L3], so that $[e_\alpha,f_\alpha]=H_\alpha$, the structure constants $N_{\alpha\beta}$ are real and $N_{\alpha\beta}=-N_{-\alpha,-\beta}$ whenever $\alpha+\beta\ne0$; write $f_\gamma=e_{-\gamma}$ and abbreviate $A_\alpha:=e_\alpha-f_\alpha$, $B_\alpha:=i(e_\alpha+f_\alpha)$, $T_\alpha:=iH_\alpha$. Define $$\mathfrak k_0:=\operatorname{span}_{\mathbb R}\Bigl(\{T_\alpha:\alpha\in\Phi\}\cup\{A_\alpha:\alpha\in\Phi\}\cup\{B_\alpha:\alpha\in\Phi\}\Bigr).$$ Since these vectors span $\mathfrak k_0$ and the bracket is bilinear, it suffices to show that the bracket of any two of them again lies in $\mathfrak k_0$. For the Cartan brackets $[T_\alpha,T_\beta]=0$, while $[H_\alpha,e_\beta-f_\beta]=\beta(H_\alpha)(e_\beta+f_\beta)$ and $[H_\alpha,e_\beta+f_\beta]=\beta(H_\alpha)(e_\beta-f_\beta)$ give $$[T_\alpha,A_\beta]=\beta(H_\alpha)B_\beta\in\mathfrak k_0,\qquad [T_\alpha,B_\beta]=-\beta(H_\alpha)A_\beta\in\mathfrak k_0,$$ with real coefficients because $\beta(H_\alpha)\in\mathbb Z\subseteq\mathbb R$ by [L1]. For the root-root brackets let $\alpha\ne\pm\beta$. Expanding and using $N_{-\alpha,\beta}=-N_{\alpha,-\beta}$ (the relation of [L3] with $(\alpha,\beta)$ replaced by $(-\alpha,\beta)$, legitimate here because $\beta\ne\alpha$) together with $N_{-\alpha,-\beta}=-N_{\alpha\beta}$ gives $$[A_\alpha,A_\beta]=N_{\alpha\beta}A_{\alpha+\beta}-N_{\alpha,-\beta}A_{\alpha-\beta},\qquad [A_\alpha,B_\beta]=N_{\alpha\beta}B_{\alpha+\beta}+N_{\alpha,-\beta}B_{\alpha-\beta},$$ $$[B_\alpha,B_\beta]=-N_{\alpha\beta}A_{\alpha+\beta}-N_{\alpha,-\beta}A_{\alpha-\beta},$$ where a term with vanishing structure constant is abs
… [truncated at 6000 characters by the bundle cap — open `items/thm-existence-of-a-compact-real-form.md` for the rest; nothing below this cut is evidence]

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]

Assume the Axiom of Choice. Let $G$ be a connected real semisimple Lie group
with finite center and Lie algebra $\mathfrak g_0$, and let $\Theta$ be a
**global Cartan involution** of $G$: an involutive Lie-group automorphism of
$G$ whose differential $\theta_*:=d\Theta_e$ is a Cartan involution of
$\mathfrak g_0$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]],
[[thm-existence-of-a-cartan-involution]]) and which fixes the center $Z(G)$
pointwise. Let $K=G^\Theta=\{g:\Theta(g)=g\}$ and let
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ be the Cartan decomposition
attached to $\theta_*$ ([[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).
Then:

1. $K$ is a closed subgroup of $G$ with Lie algebra $\mathfrak k_0$, and $K$ is
   compact;
2. the map $K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a
   diffeomorphism.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; a connected real semisimple Lie group $G$ with finite center $Z:=Z(G)$, Lie algebra $\mathfrak g_0$, Killing form $B$, a global Cartan involution $\Theta$ with differential $\theta_*$, the subgroup $K=G^\Theta$, and the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through the closed-subgroup, exponential and adjoint interfaces of [L2] and [L3].

[L1] $\theta_*$ is an involutive automorphism of $\mathfrak g_0$ and $B_{\theta_*}(X,Y)=-B(X,\theta_*Y)$ is a positive definite inner product; $B$ is invariant under every automorphism of $\mathfrak g_0$, negative definite on $\mathfrak k_0$, positive definite on $\mathfrak p_0$, and $\mathfrak k_0,\mathfrak p_0$ are $B$-orthogonal, with $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]], [[prop-trace-forms-are-symmetric-and-invariant]]).

[L2] The exponential map $\exp\colon\mathfrak g_0\to G$ is smooth with invertible differential at $0$, is natural for Lie-group homomorphisms: $F(\exp X)=\exp(dF_eX)$ for every homomorphism $F$ of Lie groups, and every one-parameter subgroup is of the form $t\mapsto\exp(tX)$ ([[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]], [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]]).

[L3] Every closed subgroup $H$ of $G$ is an embedded Lie subgroup whose Lie algebra is $\{X:\exp(tX)\in H\text{ for all }t\}$, and connected subgroups with equal Lie algebras coincide; the adjoint map $\operatorname{Ad}\colon G\to\operatorname{GL}(\mathfrak g_0)$, $\operatorname{Ad}_g=d(C_g)_e$, is a smooth homomorphism with $d\operatorname{Ad}_e=\operatorname{ad}$, with $\operatorname{Ad}_{\exp X}=e^{\operatorname{ad}_X}$ and $g\exp(X)g^{-1}=\exp(\operatorname{Ad}_gX)$, and $\ker\operatorname{Ad}=Z$ for connected $G$; the automorphism group $\operatorname{Aut}(\mathfrak g_0)$ is a closed Lie subgroup of $\operatorname{GL}(\mathfrak g_0)$ with Lie algebra $\operatorname{Der}(\mathfrak g_0)$ ([[thm-cartans-closed-subgroup-theorem]], [[thm-lie-subgroup-lie-subalgebra-correspondence]], [[cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra]], [[def-conjugation-and-the-adjoint-representation-of-a-lie-group]], [[prop-adjoint-is-a-smooth-lie-group-representation]], [[thm-the-differential-of-adjoint-is-ad]], [[prop-adjoint-exponential-identity]], [[prop-adjoint-intertwines-the-exponential-map]]).

[L4] Since $\mathfrak g_0$ is semisimple, $Z(\mathfrak g_0)=0$ and every derivation of $\mathfrak g_0$ is inner: $\operatorname{Der}(\mathfrak g_0)=\operatorname{ad}(\mathfrak g_0)$ with $\operatorname{ad}$ injective ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]], [[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]]).

[L5] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors with real eigenvalues, and self-adjointness is being self-adjoint for the inner product at hand ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[thm-global-iwasawa-decomposition]]

Assume the Axiom of Choice. Let $G$ be a connected real semisimple Lie group
with finite center, let $\Theta$ be a global Cartan involution of $G$ with
fixed group $K=G^{\Theta}$, and let $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
be the Cartan decomposition attached to $\theta_*=d\Theta_e$, so that
$K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a diffeomorphism and
$K$ is compact
([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).
Let $\mathfrak a\subseteq\mathfrak p_0$ be a maximal abelian subspace, let
$\Sigma^+$ be a positive system of the restricted-root system $\Sigma$, and let
$\mathfrak n=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$ be the
associated nilpotent subalgebra
([[def-positive-restricted-roots-and-nilpotent-n-algebra]]). Put
$$A=\exp(\mathfrak a),\qquad N=\text{the connected subgroup of }G\text{ with Lie algebra }\mathfrak n .$$
Then the multiplication map
$$K\times A\times N\longrightarrow G,\qquad (k,a,n)\longmapsto kan ,$$
is a diffeomorphism onto $G$. Moreover $A$ and $N$ are simply connected closed
subgroups of $G$ with Lie algebras $\mathfrak a$ and $\mathfrak n$, and
$N$ is the exponential image $\exp(\mathfrak n)$.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; a connected semisimple Lie group $G$ with finite center $Z=Z(G)$, global Cartan involution $\Theta$, $K=G^{\Theta}$, the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ with $\theta_*=d\Theta_e$, a maximal abelian $\mathfrak a\subseteq\mathfrak p_0$, a positive system $\Sigma^+$, the nilpotent subalgebra $\mathfrak n=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$, and $A=\exp(\mathfrak a)$, $N=\exp(\mathfrak n)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the global Cartan decomposition of [L1] and through the Lie-algebra decomposition of [L2].

[L1] $K$ is a closed compact subgroup of $G$ with Lie algebra $\mathfrak k_0$, $\Theta$ fixes $Z$ pointwise so $Z\subseteq K$, and $(k,X)\mapsto k\exp X$ is a diffeomorphism $K\times\mathfrak p_0\to G$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).

[L2] $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak a\oplus\mathfrak n$ is a vector-space direct sum, $\mathfrak a$ is abelian, $\mathfrak n$ is nilpotent, $\mathfrak a\oplus\mathfrak n$ is a solvable subalgebra with $[\mathfrak a\oplus\mathfrak n,\mathfrak a\oplus\mathfrak n]=\mathfrak n$, and $[\mathfrak a,\mathfrak n]=\mathfrak n$ ([[thm-iwasawa-decomposition-on-the-lie-algebra-level]], [[def-positive-restricted-roots-and-nilpotent-n-algebra]]).

[L3] $\mathfrak g_0=\mathfrak g_0^0\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda$ with $\mathfrak g_0^0=\mathfrak a\oplus\mathfrak m$, $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$, $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$, and $B_\theta$ is a positive definite inner product on $\mathfrak g_0$ for which $\operatorname{ad}X$ is skew for $X\in\mathfrak k_0$ ([[thm-restricted-root-space-decomposition]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L4] For a connected simply connected nilpotent Lie group the exponential map is a diffeomorphism ([[thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism]]); closed subgroups of $G$ are embedded Lie subgroups whose Lie algebra is $\{X:\exp(tX)\in H$ for all $t\}$, and connected subgroups with equal Lie algebras coincide ([[thm-lie-subgroup-lie-subalgebra-correspondence]]).

[L5] For a semisimple Lie algebra every derivation is inner, $\operatorname{Der}(\mathfrak g_0)=\operatorname{ad}(\mathfrak g_0)$, and $\operatorname{Aut}(\mathfrak g_0)$ is a closed Lie subgroup of $\operatorname{GL}(\mathfrak g_0)$ with Lie algebra $\operatorname{Der}(\mathfrak g_0)$ ([[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]], [[cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*


### [[thm-marsden-weinstein-meyer-symplectic-reduction]]

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the
coadjoint stabilizer $G_\alpha$ acts freely and properly on the level
$\mu^{-1}(\alpha)$. Put

$$M_\alpha:=\mu^{-1}(\alpha)/G_\alpha,\qquad \pi:\mu^{-1}(\alpha)\longrightarrow M_\alpha,$$

with the quotient structure, and let $\iota:\mu^{-1}(\alpha)\hookrightarrow M$
be the inclusion. Then $M_\alpha$ is a smooth manifold and there is a unique
symplectic form $\omega_\alpha$ on $M_\alpha$ satisfying

$$\pi^*\omega_\alpha=\iota^*\omega .$$

The pair $(M_\alpha,\omega_\alpha)$ is the **symplectic reduction** of
$(M,\omega,\mu)$ at $\alpha$.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space with moment map $\mu$, a regular value $\alpha$, and a free proper $G_\alpha$-action on the level.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field, level-set and quotient suppliers cited below.

[F1] $\mu^{-1}(\alpha)$ is an embedded submanifold with $T_p\mu^{-1}(\alpha)=\ker d\mu_p$, and $\iota^*\omega$ is a smooth two-form on it. [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

[F2] Since $G_\alpha$ acts freely and properly on $\mu^{-1}(\alpha)$, the quotient $M_\alpha$ is a smooth manifold and $\pi$ is a smooth surjective submersion. [[thm-free-proper-action-quotient-manifold]].

[F3] $G_\alpha$ preserves the level and acts by restrictions of the symplectic action, which preserves $\omega$. [[prop-moment-level-is-invariant-under-the-coadjoint-stabilizer]], [[def-symplectic-and-hamiltonian-lie-group-action]].

[F4] On the level, $\ker(\iota^*\omega)_p=T_p(G_\alpha\cdot p)$ for every $p$, and the image of this subspace under $d\pi_p$ is zero. [[lem-characteristic-kernel-on-a-regular-moment-level]], [[prop-tangent-space-of-a-free-proper-quotient]].

[F5] A $G_\alpha$-invariant horizontal form on the free proper $G_\alpha$-manifold $\mu^{-1}(\alpha)$ descends to a unique form on $M_\alpha$; a form on $M_\alpha$ with zero pullback is zero. [[lem-invariant-horizontal-form-on-a-free-proper-quotient-descends-uniquely]].

[F6] $\omega$ is closed. [[def-symplectic-form-and-symplectic-manifold]], [[def-symplectic-and-hamiltonian-lie-group-action]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[thm-a-regular-level-set-is-an-embedded-submanifold]] (Statement)
  > Let $F:M^m\to N^n$ be smooth, let $q\in N$ be a regular value, and assume $F^{-1}(q)$ is nonempty. Then $F^{-1}(q)$ is an embedded submanifold of codimension $n
- `F1` → [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]] (Statement)
  > Let $F:M\to N$ be smooth, let $q$ be a regular value, and let $p\in F^{-1}(q)$. Then $$T_p\bigl(F^{-1}(q)\bigr)=\ker dF_p.$$
- `F2` → [[thm-free-proper-action-quotient-manifold]] (Statement)
  > If a Lie group $G$ acts smoothly, freely, and properly on a smooth manifold $M$, then the orbit space $M/G$ with its quotient topology is a Hausdorff second-cou
- `F3` → [[prop-moment-level-is-invariant-under-the-coadjoint-stabilizer]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ and let $G_\alpha=\{g\in G:g\cdot\alpha=\alpha\}$ b
- `F3` → [[def-symplectic-and-hamiltonian-lie-group-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$, let $(M,\omega)$ be a symplectic manifold ([[de
- `F4` → [[lem-characteristic-kernel-on-a-regular-moment-level]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, let $\iota:\mu^{-1}(\a
- `F4` → [[prop-tangent-space-of-a-free-proper-quotient]] (Statement)
  > For a smooth free proper action and $x\in M$, the quotient differential is surjective and $$\ker(dq_x)=T_x(G\cdot x).$$ Consequently it induces a canonical line
- `F5` → [[lem-invariant-horizontal-form-on-a-free-proper-quotient-descends-uniquely]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let a Lie group $G$ act smoothly, freely and properly on a smooth manifold $M$ with quotient map $\pi:M\to M/G$. A smooth $k$-form 
- `F6` → [[def-symplectic-form-and-symplectic-manifold]] (Definition)
  > A **symplectic form** on a smooth manifold $M$ is a smooth two-form $\omega$ such that 1. $d\omega=0$, and 2. $(T_pM,\omega_p)$ is a [[def-symplectic-vector-spa
- `F6` → [[def-symplectic-and-hamiltonian-lie-group-action]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$, let $(M,\omega)$ be a symplectic manifold ([[de

### [[thm-reduction-in-stages-for-free-proper-regular-actions]]

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $H\trianglelefteq G$ be a closed normal subgroup with Lie algebra
$\mathfrak h$, and put $\mu_H:=\mu|_{\mathfrak h}:M\to\mathfrak h^*$. Assume:

* $0\in\mathfrak h^*$ is a regular value of $\mu_H$ and $H$ acts freely and
  properly on $\mu_H^{-1}(0)$, so that $M_0^H:=\mu_H^{-1}(0)/H$ is defined;

* $0\in(\mathfrak g/\mathfrak h)^*$ is a regular value of the residual map
  $$\bar\mu:M_0^H\longrightarrow(\mathfrak g/\mathfrak h)^*,\qquad \bar\mu([p])(\xi+\mathfrak h):=\mu(p)(\xi),$$
  and $G/H$ acts freely and properly on $\bar\mu^{-1}(0)$;

* the one-stage hypotheses hold: $0$ is a regular value of $\mu$ and $G$ acts
  freely and properly on $\mu^{-1}(0)$.

Then $\bar\mu$ is a well-defined smooth equivariant moment map for the induced
$G/H$-action on $M_0^H$, and the canonical identification
$$(M_0^H)_0:=\bar\mu^{-1}(0)/(G/H)\;\longrightarrow\;\mu^{-1}(0)/G=M_0^G$$
is a symplectomorphism, where the left side carries the two-stage reduced form
and the right side the one-stage reduced form.

**Facts & Assumptions (verbatim).**

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space, a closed normal subgroup $H$, and the three sets of hypotheses above.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the reduction, fundamental-field and quotient suppliers cited below.

[F1] $\mu$ is coadjoint equivariant and its components satisfy $d\mu^\xi=-\iota_{\xi_M}\omega$; for $p\in\mu_H^{-1}(0)$ the covector $\mu(p)$ annihilates $\mathfrak h$. [[def-moment-map-and-component-hamiltonian]].

[F2] The first-stage reduction gives the rule $\pi_H^*\omega_H=\iota_H^*\omega$ for the unique form $\omega_H$ on $M_0^H$, with $\pi_H:\mu_H^{-1}(0)\to M_0^H$ the quotient map; and the one-stage reduction gives $\pi_G^*\omega_G=\iota_G^*\omega$ on $M_0^G$. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F3] $G/H$ is a Lie group with Lie algebra $\mathfrak g/\mathfrak h$, the quotient homomorphism $q:G\to G/H$ is smooth with differential the quotient map, and the adjoint action of $G/H$ is induced by $\operatorname{Ad}$ on $\mathfrak g$; its coadjoint action on $(\mathfrak g/\mathfrak h)^*$ corresponds under $(\mathfrak g/\mathfrak h)^*\simeq\mathfrak h^0$ to the restriction of the coadjoint action of $G$ on $\mathfrak h^0$. [[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]], [[thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism]], [[def-coadjoint-representation-of-a-lie-group]].

[F4] $H$ preserves the level $\mu_H^{-1}(0)$ and $G$-equivariant maps constant on $H$-orbits descend to smooth maps on $M_0^H$. [[prop-moment-level-is-invariant-under-the-coadjoint-stabilizer]], [[prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients]].

[F5] The double quotient $\mu^{-1}(0)/G$ is canonically $(\mu^{-1}(0)/H)/(G/H)$ because $H\trianglelefteq G$; and forms on a quotient with equal pullback to the total space coincide. [[thm-marsden-weinstein-meyer-symplectic-reduction]], [[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]].

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets inde
- `F1` → [[def-moment-map-and-component-hamiltonian]] (Definition)
  > Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic manifold $(M,\omega)$ be given, with fundamental fields $\xi_M$ as in [[def-symplec
- `F2` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the c
- `F3` → [[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]] (Statement)
  > Assume $\mathrm{AC}_\omega$. If $N$ is a closed normal subgroup of a finite-dimensional real Lie group $G$, the quotient manifold $G/N$ has unique Lie-group ope
- `F3` → [[thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $F:G\to H$ be a homomorphism of finite-dimensional real Lie groups, with Lie algebras $\mathfrak g=T_eG$ and $\mathfrak h=T_{e_
- `F3` → [[def-coadjoint-representation-of-a-lie-group]] (Definition)
  > Let $G$ be a finite-dimensional real Lie group with Lie algebra $\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ ([[def-algebraic-d
- `F4` → [[prop-moment-level-is-invariant-under-the-coadjoint-stabilizer]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ and let $G_\alpha=\{g\in G:g\cdot\alpha=\alpha\}$ b
- `F4` → [[prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients]] (Statement)
  > Let $M$ and $N$ be smooth free proper $G$-manifolds. Every smooth $G$-equivariant map $f:M\to N$ induces a unique smooth map $\overline f:M/G\to N/G$ such that 
- `F5` → [[thm-marsden-weinstein-meyer-symplectic-reduction]] (Statement)
  > Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space, let $\alpha\in\mathfrak g^*$ be a regular value of $\mu$, and suppose that the c
- `F5` → [[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]] (Statement)
  > Assume $\mathrm{AC}_\omega$. If $N$ is a closed normal subgroup of a finite-dimensional real Lie group $G$, the quotient manifold $G/N$ has unique Lie-group ope

### [[thm-restricted-root-space-decomposition]]

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with Cartan involution $\theta$, Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Killing form $B$ and inner
product $B_\theta(X,Y)=-B(X,\theta Y)$
([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]). Let
$\mathfrak a\subseteq\mathfrak p_0$ be a maximal abelian subspace, and let
$\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$ and the spaces
$\mathfrak g_0^\lambda$ be as in
[[def-restricted-root-and-restricted-root-space]]. Then:

1. $\mathfrak g_0$ is the direct sum
$$\mathfrak g_0=\mathfrak g_0^0\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda ,$$
the summands are pairwise orthogonal for $B_\theta$, and
$\mathfrak g_0^0=Z_{\mathfrak g_0}(\mathfrak a)$; the index set $\Sigma$ is
finite and every multiplicity $m_\lambda=\dim_{\mathbb R}\mathfrak g_0^\lambda$
is a finite positive integer;
2. $\mathfrak g_0^0=\mathfrak a\oplus\mathfrak m$ with
$\mathfrak m=Z_{\mathfrak k_0}(\mathfrak a)=\mathfrak k_0\cap\mathfrak g_0^0$,
an orthogonal direct sum, and $\mathfrak a=\mathfrak p_0\cap\mathfrak g_0^0$;
3. $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$
for all $\lambda,\mu\in\mathfrak a^*$, where $\mathfrak g_0^\nu$ is understood
as in [[def-restricted-root-and-restricted-root-space]] (so that
$[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]=0$ whenever
$\lambda+\mu\notin\{0\}\cup\Sigma$);
4. $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$ for every
$\lambda\in\mathfrak a^*$; in particular $\lambda\in\Sigma$ if and only if
$-\lambda\in\Sigma$;
5. if $H\in\mathfrak a$ satisfies $\lambda(H)\ne0$ for every
$\lambda\in\Sigma$, then $Z_{\mathfrak g_0}(H)=\mathfrak g_0^0$.

**Facts & Assumptions (verbatim).**

**Given:** The Axiom of Choice; a real semisimple $\mathfrak g_0$ with Cartan involution $\theta$, Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Killing form $B$, inner product $B_\theta(X,Y)=-B(X,\theta Y)$, and a maximal abelian subspace $\mathfrak a\subseteq\mathfrak p_0$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]. It is declared here as part of the ZFC interface of the restricted-root chain, which every consumer of this decomposition propagates; the argument below performs no selection beyond the cited finite-dimensional linear algebra of [L2] and [L3].

[L1] $B$ is invariant and nondegenerate, $B(\theta X,\theta Y)=B(X,Y)$, the summands $\mathfrak k_0,\mathfrak p_0$ are $B$-orthogonal, $B$ is negative definite on $\mathfrak k_0$ and positive definite on $\mathfrak p_0$, and $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L2] A finite family of pairwise commuting diagonalisable endomorphisms of a finite-dimensional real vector space is simultaneously diagonalisable: there is a basis consisting of common eigenvectors ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L3] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors, hence is diagonalisable with real eigenvalues, and its eigenspaces for distinct eigenvalues are orthogonal for the inner product ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*
