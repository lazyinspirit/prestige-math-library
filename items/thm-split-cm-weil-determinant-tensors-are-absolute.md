---
id: thm-split-cm-weil-determinant-tensors-are-absolute
kind: theorem
title: Split CM Weil determinant tensors are absolute
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- thm-holomorphic-implicit-function-theorem
- thm-weierstrass-preparation-theorem
- thm-weierstrass-division-theorem
- thm-completion-of-a-noetherian-local-ring
- thm-flatness-of-noetherian-completion
- thm-hilbert-basis-theorem
- lem-hilbert-uniform-regularity-fixed-polynomial
- lem-hilbert-regularity-propagation
- lem-hilbert-projective-space-construction
- thm-hilbert-scheme-represents-projective-flat-families
- lem-hilbert-family-vanishing-locus
- cor-quasi-finite-locus-open-finite-type-algebra
- thm-proper-quasi-finite-is-finite
- thm-smooth-locus-open
- thm-proper-morphism-closed-image
- thm-cohomology-and-base-change
- thm-resolution-of-singularities-in-characteristic-zero
- thm-identity-theorem-in-several-complex-variables
- def-axiom-of-choice
- def-dependent-choice
- thm-serre-vanishing
- thm-projectively-embedded-complex-torus-has-an-abelian-variety-model
- thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
- lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set
- cor-segre-veronese-embedding
- thm-primitive-element-theorem-for-finite-separable-extensions
- lem-finite-birational-to-normal-is-isomorphism
- thm-nakayama-lemma
- thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
- thm-weak-embedded-desingularization
- thm-blowup-projective
- lem-balanced-hermitian-period-domain-is-connected
- lem-balanced-hermitian-domain-carries-analytic-torus-family
- lem-hermitian-torus-family-locally-has-theta-embedding
- lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations
- thm-principle-b-for-positive-first-cohomology-tensors
- thm-product-cm-determinant-tensors-are-absolute
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: P. Deligne, Hodge Cycles on Abelian Varieties, Theorem 4.8
    url: https://www.jmilne.org/math/Documents/Deligne82.pdf
    locator: Theorem 4.8 and its proof, printed pp. 32–34, read. The local proof below constructs the split Hermitian product endpoint and algebraic theta-family connection, and uses the separately reconstructed positive-tensor Principle B.
verification: {}
---

## Statement

Assume AC and DC. Let $A/\mathbb C$ be a positive-dimensional abelian variety with a faithful rational action of a CM field $E$, and put $H=H_1(A,\mathbb Q)$. Suppose an algebraic polarization has Riemann form $\psi(x,y)=\operatorname{Tr}_{E/\mathbb Q}(f h(x,y))$, where $\bar f=-f$ and $h$ is a split nondegenerate $E$-Hermitian form on $H$. Then $d=\dim_E H=2m$ with $m\ge1$, and every tensor in $\bigwedge_E^{2m}H^1(A,\mathbb Q)(m)$ is an absolute Hodge tensor in the first-cohomology realizations. No general absolute-Hodge theorem for arbitrary abelian varieties is asserted.

## Facts & Assumptions

**Given:** AC, DC, the abelian variety, rational $E$-action, polarization, purely imaginary $f$ and split Hermitian form of the Statement.

[F1] Holomorphic submersions have local projection coordinates; Weierstrass preparation and division hold for convergent germs; Noetherian local completions are Noetherian and faithfully flat, and Noetherian ideal-adic completions are flat; polynomial rings over Noetherian rings are Noetherian ([[thm-holomorphic-implicit-function-theorem]], [[thm-weierstrass-preparation-theorem]], [[thm-weierstrass-division-theorem]], [[thm-completion-of-a-noetherian-local-ring]], [[thm-flatness-of-noetherian-completion]], [[thm-hilbert-basis-theorem]]).

[F2] A uniform regularity degree exists for each fixed Hilbert polynomial, and regularity gives the required cohomological vanishing ([[lem-hilbert-uniform-regularity-fixed-polynomial]], [[lem-hilbert-regularity-propagation]]).

[F3] Fixed-polynomial projective Hilbert functors are represented by finite-type schemes with flat universal families; the Grassmann construction reconstructs them from the uniform-degree quotient ([[thm-hilbert-scheme-represents-projective-flat-families]], [[lem-hilbert-projective-space-construction]]).

[F4] On a projective family over a Noetherian base, vanishing of a coherent homomorphism into a base-flat coherent sheaf is a universal closed condition ([[lem-hilbert-family-vanishing-locus]]).

[F5] The quasi-finite locus is open, proper quasi-finite maps are finite, smooth loci are open and proper images are closed ([[cor-quasi-finite-locus-open-finite-type-algebra]], [[thm-proper-quasi-finite-is-finite]], [[thm-smooth-locus-open]], [[thm-proper-morphism-closed-image]]).

[F6] Degree-zero proper cohomology and base change provides a locally free direct image and arbitrary base change near a point where the degree-zero fibre map is surjective ([[thm-cohomology-and-base-change]]).

[F7] Integral closed subschemes of smooth projective space admit embedded desingularization by blowups of regular centers, and these blowups are projective; holomorphic functions vanishing on a nonempty open of a connected domain vanish identically ([[thm-weak-embedded-desingularization]], [[thm-blowup-projective]], [[thm-identity-theorem-in-several-complex-variables]]).

[F8] A projectively embedded complex torus admits a biholomorphic group identification with the analytification of an abelian variety, and holomorphic group homomorphisms of complex abelian varieties are algebraic ([[thm-projectively-embedded-complex-torus-has-an-abelian-variety-model]], [[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]]).

[F9] The reduced Zariski closure of a compact connected holomorphically embedded projective manifold is integral, has the same dimension and has exactly its underlying complex points; products of projective spaces have Segre embeddings ([[lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set]], [[cor-segre-veronese-embedding]]).

[F10] The quasi-finite locus is open, a proper quasi-finite map is finite, and finite separable extensions are simple ([[cor-quasi-finite-locus-open-finite-type-algebra]], [[thm-proper-quasi-finite-is-finite]], [[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[F11] A finite birational morphism to an integral normal scheme is an isomorphism; a finite module over a local ring vanishes if it equals the maximal ideal times itself ([[lem-finite-birational-to-normal-is-isomorphism]], [[thm-nakayama-lemma]]).

[F12] Locally uniformly convergent holomorphic series in several variables have holomorphic sums and derivatives ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F13] Sufficiently positive twists of a coherent sheaf on a projective scheme have no higher cohomology ([[thm-serre-vanishing]]).

[F14] The compatible balanced Hermitian period domain is a connected product of matrix balls, and both complex-structure eigenspaces have the same rank. ([[lem-balanced-hermitian-period-domain-is-connected]]).

[F15] The balanced Hermitian period domain carries the analytic torus family with the fixed lattice, group law and positive Riemann form. ([[lem-balanced-hermitian-domain-carries-analytic-torus-family]]).

[F16] Over a connected neighbourhood of a compact path, a common theta power embeds every fibre. ([[lem-hermitian-torus-family-locally-has-theta-embedding]]).

[F17] Smooth projective families have integral Betti local systems, polarizable rational Hodge variations and their tensor constructions. ([[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]]).

[F18] Positive type-(0,0) first-cohomology tensor subsystems carry absolute tensors on every fibre once they do so on one fibre. ([[thm-principle-b-for-positive-first-cohomology-tensors]]).

[F19] The determinant tensors at a product point are absolute. ([[thm-product-cm-determinant-tensors-are-absolute]]).

## Proof

**Proof technique:** connect the split Hermitian fibre to an absolute product point by an algebraic family and apply tensor Principle B.

1.1 Let $\mathcal O\subset E$ be an order stabilizing a full lattice $\Lambda=H_1(A,\mathbb Z)$, and scale $f$ by a positive integer so the fixed Riemann form $\psi=\operatorname{Tr}_{E/\mathbb Q}(fh)$ is integral on $\Lambda$. Splitness makes $d=\dim_E H=2m$ and gives signature $(m,m)$ at every real place. At each place choose either complex embedding $\sigma$ above it and set $h_\sigma^\prime=-\operatorname{Im}(\sigma f)h_\sigma$. Then $2\operatorname{Im}h_\sigma^\prime=\operatorname{Tr}_{\mathbb C/\mathbb R}(\sigma f\,h_\sigma)$, and scaling by this nonzero real factor preserves the balanced signature. By [F14] the compatible $E$-linear complex structures form a connected product of matrix balls, and both eigenranks are $m$. The original complex structure defines a point $J_1$ in this domain. [F14, given, construct, algebra]

2.1 Choose a complex abelian variety $B$ of dimension $m$ with rational first homology $W$ and positive rational Riemann form $\psi_0$; when $m>0$, a product of standard elliptic curves provides one. On $W_E=W\otimes_\mathbb QE$ put $h_0(x\otimes a,y\otimes b)=\psi_0(x,y)a\bar b/f$, with the Hermitian linearity convention fixed throughout. Its trace form is $\psi_0(x,y)\operatorname{Tr}_{E/\mathbb Q}(a\bar b)$, so the product complex structure is positive. A rational symplectic basis of $W$ gives an $m$-dimensional totally isotropic $E$-subspace; hence $h_0$ is split. Hyperbolic bases identify $(W_E,h_0)$ and $(H,h)$ by an $E$-linear isometry, so the product structure gives a second point $J_0$ of the same domain. The transported product lattice and $\Lambda$ are commensurable; multiplication by a positive integer gives an $E$-linear isogeny $B\otimes_\mathbb Z\mathcal O\to(H_\mathbb R,J_0)/\Lambda$. By [F8] it is algebraic. [F8, given, step 1.1, choose, construct, algebra]

3.1 Join $J_0$ to $J_1$ by a compact path in the connected domain. By [F15] the domain carries the analytic torus family with fixed integral lattice form and group law, and by [F16] a connected neighbourhood $U$ of the path admits a common theta-power embedding of all fibres. A finite $\mathbb Z$-basis of $\mathcal O$ acts on $\Lambda$ by fixed integral matrices; the finitely many multiplication, addition and unit relations give the fixed ring identities required below. We now construct a smooth connected quasiprojective algebraic family with the two marked endpoint fibres and these operations. Temporary symbols in the following construction are local to it. [F15, F16, given, step 2.1, choose, construct, algebra]

4.1 If $g=0$, take $S=\operatorname{Spec}\mathbb C$ with its one-point group and the unique endomorphisms. Assume $g\ge1$. Fix a parameter $u$ and one specified operation; write $T$ for its torus fibre and $f$ for the operation. By [F8], choose a complex abelian variety $A$ and a biholomorphic group isomorphism $\phi:A^{\mathrm{an}}\to T$. Choose an algebraic projective embedding $A\hookrightarrow\mathbb P^M$. The graph of $i\circ\phi$ is a holomorphic embedding of the compact connected manifold $A^{\mathrm{an}}$ into $\mathbb P^M\times\mathbb P^N$, and by the Segre embedding in [F9] it is projectively embedded. Let $G$ be its reduced Zariski closure. By [F9], $G$ is integral of dimension $\dim A$ and its complex points are precisely that graph. It lies algebraically in $A\times\mathbb P^N$, since the equations of $A$ vanish on a dense set of $G$. The first projection $p:G\to A$ is proper and bijective on complex points. [F8, F9, given, choose, construct, algebra, step 3.1]

4.2 The theta bundle on $T_u$ has automorphy factor $j_{D\ell+\tau n}(z)=e^{-\pi iM n^t\tau n-2\pi iM n^tz}$. Its integral alternating form on marked lattice vectors is $\psi((\ell,n),(\ell',n'))=M(\ell^tDn'-n^tD\ell')$, and its associated real form $\psi(v,J_uv)$ is positive. The Segre hyperplane line on the graph pulls back to the tensor product of the $r$ source theta bundles and the pullback along $F_u$ of the target theta bundle. Its fixed integral lattice form is $$\Psi(v,w)=\sum_{k=1}^r\psi(v_k,w_k)+\psi(Fv,Fw).$$ Since $F_u$ is complex-linear, $\Psi(v,J_uv)$ is a sum of nonnegative terms and is positive for $v\ne0$. An elementary integral symplectic elimination gives a basis $x_i,y_i$ of the product lattice with $\Psi(x_i,x_j)=\Psi(y_i,y_j)=0$ and $\Psi(x_i,y_j)=q_i\delta_{ij}$ for positive integers $q_i$: choose a pair with least positive pairing, divide all its cross-pairings by that integer using minimality, split its integral orthogonal complement, and induct. [given, choose, construct, algebra, step 3.1]

4.3 Construct an algebraic parameter space as follows. By [F3], form the product of the fixed-polynomial Hilbert schemes for the fibre and each graph, with $\mathbb P^N$ for the zero section. The universal candidates are projective and flat over this finite-type base. Require every graph to lie in the appropriate universal fibre product and the point to lie in the fibre: [F4] makes these universal vanishing conditions closed. For a graph projection $p:Z\to X^r$, remove from the target the proper image of its closed non-quasi-finite locus. By [F5], the map is finite on the complement. There the open locus where $\mathcal O\to p_*\mathcal O_Z$ is an isomorphism is exactly its isomorphism locus. The closed complement has closed image in the parameter base by properness. Removing that image makes the graph projection an isomorphism and defines the corresponding universal operation. [F3, F4, F5, given, construct, algebra, step 3.1]

5.1 Every closed fibre of $p$ consists of one point and is zero-dimensional, so all closed points of $G$ lie in the quasi-finite locus. This locus is open by [F10], and its complement is a closed subset of a finite-type complex scheme with no closed points; it is empty. Hence $p$ is proper and quasi-finite, and therefore finite by [F10]. Its function-field extension is separable in characteristic zero. If its degree were $d>1$, [F10] gives a primitive element; after shrinking an affine open and inverting its discriminant, every complex fibre over that open would contain $d$ distinct points. This contradicts bijectivity on complex points, so the degree is one and $p$ is birational. The abelian variety $A$ is smooth and integral, hence normal; [F11] makes $p$ an isomorphism. The second projection of $G$ is therefore an algebraic map $a:A\to\mathbb P^N$ whose analytification is $i\circ\phi$. [F10, F11, given, step 4.1, construct, algebra, step 3.1]

5.2 The real span of the $x_i$ is isotropic. It meets its $J_u$-image only at zero by positivity, so the $x_i$ form a complex basis of the fibre. Their images and those of the $y_i$ depend holomorphically on $u$ in the quotient Lie bundle; use the $x_i$ as a holomorphic frame normalized to $E\mathbf e_i$, with $E=\operatorname{diag}(q_i)$ and $\mathbf e_i$ the standard basis. The $y_i$ then have columns of a holomorphic matrix $\sigma=X+iY$. As in the Riemann bilinear calculation, $\Psi(Jv,Jw)=\Psi(v,w)$ forces $X,Y$ symmetric, and positivity forces $Y>0$. Thus $\sigma:U\to\mathfrak H_{gr}$ is holomorphic and the graph-source lattice is $E\mathbb Z^{gr}+\sigma\mathbb Z^{gr}$. The coordinate changes from these graph coordinates to all source and target coordinates are holomorphic and complex-linear. [given, step 4.2, construct, algebra, step 3.1]

5.3 The graph-isomorphism open contains each point whose graph fibre is a genuine morphism. To see this, at such a point first use properness to obtain a neighbourhood on which the projection is finite. The cokernel of its finite algebra map vanishes on the fibre and hence vanishes locally by Nakayama. Its kernel also has zero fibre: the source and target of the graph projection are both flat over the parameter base, so tensoring the resulting exact sequence preserves the kernel. Nakayama then kills the kernel near the fibre, and properness gives a common base neighbourhood. Impose each group or ring identity as the vanishing of the pullback of the diagonal ideal under the two corresponding universal composites; [F4] makes this a closed condition because the source is a flat projective fibre power. By [F5], remove the proper image of the nonsmooth locus. At a smooth geometrically connected fibre, $H^0(\mathcal O)$ is one-dimensional and the unit makes the degree-zero base-change map surjective; [F6] gives a neighbourhood where this dimension remains one after all base changes. Smooth proper geometric fibres with one-dimensional $H^0$ are connected. Thus the smooth connected-fibre locus is open. The resulting finite-type scheme $S$ carries a smooth projective group family and the required endomorphisms and identities. [F4, F5, F6, given, step 4.3, construct, algebra, step 3.1]

6.1 The map $a$ is proper and injective on complex points, so the quasi-finite-locus argument of step 5.1 makes it finite. At a complex point $z$ of its image, write $R=\mathcal O_{\mathbb P^N,z}$ and $B=(a_*\mathcal O_A)_z$. This is a finite $R$-algebra with exactly one maximal ideal $\mathfrak n$ and residue field $\mathbb C$, because the finite fibre contains one complex point. Its analytic differential is injective since $i\circ\phi$ is an immersion; algebraic coordinate functions have the same derivatives, so the induced map on cotangent spaces is surjective. Hence $\mathfrak n=\mathfrak m_RB+\mathfrak n^2$, and Nakayama in [F11] gives $\mathfrak n=\mathfrak m_RB$. The residue map then shows $B=R+\mathfrak m_RB$, so the finite $R$-module cokernel of $R\to B$ is zero by [F11]. Outside the image the same map is trivially surjective. Its cokernel is coherent and vanishes at every closed point, hence vanishes everywhere. A finite morphism with $\mathcal O_{\mathbb P^N}\twoheadrightarrow a_*\mathcal O_A$ is a closed immersion. [F10, F11, given, step 5.1, construct, algebra, step 3.1]

6.2 In the graph coordinates $w$, the graph hyperplane bundle has generator factors $j_{x_i}=e^{a_i(u)^tw+b_i(u)}$ and $j_{y_j}=e^{c_j(u)^tw+d'_j(u)}$, with holomorphic coefficients. Indeed each is a product of the source and target theta factors from step 4.2, evaluated after a holomorphic linear coordinate map; the integer lattice coefficients are fixed by hypothesis. For lattice vectors $v,w$, subtracting logarithms of the two compositions gives exactly $2\pi i\Psi(v,w)$: the terms involving $\tau$ cancel by symmetry, leaving $2\pi iM(\ell_v^tDn_w-n_v^tD\ell_w)$ for each factor. Consequently $$a_i^tx_j-a_j^tx_i=0,\quad c_j^tx_i-a_i^ty_j=-2\pi i q_i\delta_{ij},\quad c_i^ty_j-c_j^ty_i=0.$$ The factors for $\mathcal O(R)$ have all these logarithms multiplied by $R$. [given, step 4.2, step 5.2, construct, algebra, step 3.1]

7.1 Transport $f:T^r\to T$ through $\phi$ to a holomorphic group homomorphism $(A^r)^{\mathrm{an}}\to A^{\mathrm{an}}$. By [F8] it is the analytification of an algebraic group homomorphism $F:A^r\to A$. Its algebraic graph is closed because $A$ is separated. The product of the algebraic closed immersions from step 6.1 is a closed immersion into $(\mathbb P^N)^{r+1}$, so the image of that graph is a closed algebraic subvariety. Its analytification is exactly the graph of $f$ under $i^{r+1}$. Transporting the group law along the closed immersion identifies $i(T)$ with a smooth projective abelian variety. If $T$ is a point or $r=0$, the same argument reduces to the corresponding point graph. This proves the Statement. [F8, given, step 6.1, construct, algebra, step 3.1]

7.2 Normalize these factors holomorphically. With columns $Ra_i$, put $C=(Ra_1,\ldots,Ra_{gr})E^{-1}$; the first identity makes $C$ symmetric. Set $\ell_i=Rb_i/q_i-q_iC_{ii}/2$ and $Q(w)=\tfrac12w^tCw+\ell^tw$. The gauge $e^Q$ makes all $x_i$ factors equal to $1$. The mixed identity makes the $w$-linear coefficient of the transformed $y_j$ factor $-2\pi iR\mathbf e_j$; write its remaining holomorphic constant as $\gamma_j$ and put $\beta_j=(-\gamma_j-\pi iR\sigma_{jj})/(2\pi iR)$. For $a\in(RE)^{-1}\mathbb Z^{gr}/\mathbb Z^{gr}$ the series $$\Theta_a(u,w)=\sum_{m\in\mathbb Z^{gr}}e^{\pi iR(m+a)^t\sigma(u)(m+a)+2\pi iR(m+a)^t(w+\beta(u))}$$ has the normalized factors. On compact sets the imaginary part of $\sigma$ is uniformly positive, so the series and all derivatives converge locally uniformly; [F12] makes them holomorphic. [F12, given, step 5.2, step 6.2, construct, algebra, step 3.1]

8.1 On each fibre, a normalized holomorphic section is periodic under $E\mathbb Z^{gr}$. Fourier–Laurent expansion on products of annuli gives coefficients $c_q$, $q\in E^{-1}\mathbb Z^{gr}$; the $y_j$ factors give $$c_{q+Rn}=c_qe^{\pi iR n^t\sigma n+2\pi iq^t\sigma n+2\pi iR n^t\beta}.$$ Thus one coefficient per coset of $R\mathbb Z^{gr}$ determines the section, and the $R^{gr}\det E$ theta series from step 7.2 form a basis. For a holomorphic family of sections, each coefficient is a Cauchy integral over a fixed compact period contour, hence varies holomorphically; the initial coefficients of the theta basis are nonzero. Ambient degree-$R$ monomials restrict to holomorphic graph sections, so their coefficients in this basis form a holomorphic matrix. For the original fibre take $F=0$ and one source factor; the zero-section graph is a point with the evident one-dimensional frame. The graph fibre is a smooth algebraic variety by step 7.1, and its Segre line bundle is algebraic. Every holomorphic section of its analytification is algebraic: its graph is a compact holomorphic submanifold of the projective bundle $\mathbb P(\mathcal O\oplus\mathcal L^R)$, and the same reduced-closure, finite-birational-to-normal argument of steps 4.1 and 5.1 makes its projection to the smooth graph fibre an algebraic isomorphism; the image avoids the infinity divisor because it does so on all complex points. Thus the theta-basis dimension is the algebraic $h^0$. Each graph has a fixed Hilbert polynomial: for sufficiently large $R$, [F13] kills higher coherent cohomology, so the Hilbert polynomial equals the theta-basis dimension $R^{gr}\det E$ computed above. The lattice form and $E$ are fixed on $U$, so this polynomial is independent of the parameter. The same reasoning covers the fibre itself, and the point has constant polynomial $1$. [F9, F10, F11, F13, given, step 4.1, step 5.1, step 6.1, step 7.1, step 6.2, step 7.2, construct, algebra, step 3.1]

9.1 Each specified graph is a closed complex submanifold of the relevant product of projective spaces over $U$: projection to the source identifies it with a fibre power of $\mathcal A$. Each source is proper and holomorphically submersive over $U$, as is the original family. We prove these submersions flat. By [F1], local coordinates reduce their stalk maps to $A=\mathbb C\{t_1,\ldots,t_m\}\to B=\mathbb C\{t_1,\ldots,t_m,z_1,\ldots,z_q\}$. Both rings are Noetherian: induct on the number of variables, take a nonzero ideal element regular in the last coordinate after a linear change, use [F1] to divide by its Weierstrass polynomial, and lift finitely many generators of the remainder module over the smaller germ ring. Their maximal-ideal completions are the formal power-series rings, because quotienting by each power retains precisely the finite Taylor jet. By [F1], $A\to\widehat A$ is flat and $B\to\widehat B$ faithfully flat. The Noetherian polynomial ring $\widehat A[z_1,\ldots,z_q]$ is flat over $\widehat A$, and its flat $(z_1,\ldots,z_q)$-adic completion is $\widehat B$. Hence $\widehat B$ is flat over $A$, and faithful flatness of $B\to\widehat B$ descends flatness to $B$ over $A$. Thus the analytic families are flat. For each fixed Hilbert polynomial choose a uniform regularity degree as in [F2]; step 8.1 supplies local holomorphic frames and restriction matrices in every positive degree. [F1, F2, given, step 8.1, construct, algebra, step 3.1]

10.1 For any one of these embedded families, [F2] gives surjectivity of the regular-degree restriction map and target dimension $P(r)$. Its holomorphic matrix therefore has constant rank. Around any parameter a nonzero maximal minor gives a holomorphic kernel graph and hence a holomorphic map to the Grassmannian of quotients. The maps glue because the kernel is independent of the target frame. By [F3], at every point this quotient is the Grassmann representative of the actual algebraic fibre supplied by step 7.1 in its fixed-polynomial Hilbert scheme. Pullbacks of the defining equations of that scheme vanish pointwise on the reduced manifold $U$, so the Grassmann map factors holomorphically through the Hilbert-scheme analytification. [F2, F3, given, step 7.1, step 9.1, construct, algebra, step 3.1]

11.1 The pulled-back universal Hilbert family agrees with the given analytic family as an analytic subspace. Indeed each local section of its ideal vanishes on every point of the smooth actual family, so its restriction there is zero and $I_H\subseteq I_X$. The quotient $Q=I_X/I_H$ is coherent. In the exact sequence of structure sheaves $0\to Q\to\mathcal O_H\to\mathcal O_X\to0$, [F1] makes $\mathcal O_X$ flat over $U$. Tensoring with a base residue field and using equality of the algebraic fibre ideals gives $Q\otimes k(u)=0$. Analytic Nakayama implies $Q=0$ at every point. Apply this to the fibre and each graph family. [F1, F3, given, step 9.1, step 10.1, algebra, step 3.1]

12.1 The Hilbert maps of step 10.1 and the holomorphic zero section give a holomorphic map from $U$ to the product used in step 4.3. Each analytic fibre and graph satisfies incidence, graph-isomorphism, group and ring equations, smoothness and connectedness. The defining equations of the closed loci thus pull back to holomorphic functions vanishing pointwise on reduced $U$, and the open conditions hold at every point; the map factors through $S^{\mathrm{an}}$. By step 11.1 the pulled-back universal fibre and graph families are precisely the analytic fibre family and operation graphs, so the universal group operations and endomorphisms pull back to the specified ones. [given, step 10.1, step 11.1, step 4.3, step 5.3, construct, algebra, step 3.1]

13.1 Let $Y$ be the reduced Zariski closure of the image of $U$ in $S$. It is irreducible. If $Y=Y_1\cup Y_2$ with both closed and proper, their preimages are closed analytic subsets of $U$. If neither were all of $U$, [F7] and analytic continuation would give each empty interior, and two closed subsets with empty interior cannot cover the nonempty manifold. Thus one contains the whole image, contradicting the definition of the closure. The graph parameter is locally closed in the product of projective Hilbert schemes and projective spaces by [F3], so $Y$ is quasiprojective. Embed its projective closure into a smooth projective space and use the embedded desingularization in [F7]. The strict transform is smooth and projective because each ambient blowup is projective and the strict transform is closed. Restrict it to the preimage of $Y$; the resulting smooth scheme $T$ is quasiprojective and maps properly and surjectively to $Y$. Take its connected component containing the birational open. Each of the two selected image points has a complex lift to this component. Pull back the universal group family and endomorphisms to $T$. By step 12.1 the two fibres and their operations are the originally specified ones, and all group and ring identities persist under base change. This completes the construction of the connecting family. [F3, F7, given, step 5.3, step 12.1, choose, construct, algebra, step 3.1]

14.1 The finite ring identities give an algebraic rational action of $E$ on the pulled-back family over $T$. It preserves the locally free Hodge bundle $F^1H^1_{dR}$, since it acts by algebraic endomorphisms. After $E\otimes_\mathbb Q\mathbb C=\prod_{\sigma:E\hookrightarrow\mathbb C}\mathbb C$, the primitive idempotents split this Hodge bundle into direct-summand vector bundles. Their ranks are locally constant and hence constant on connected $T$. At $J_1$ every rank is $m$ by [F14], so the $E$-determinant of the rational $H^1$ local system, after Tate twist by $m$, has Hodge type $(0,0)$ at every point of $T$. The projective family has a rational polarization and [F17] supplies a monodromy-invariant positive form on this type-$(0,0)$ subsystem. [F14, F17, given, step 13.1, construct, algebra]

15.1 At the point $J_0$, the $E$-linear algebraic isogeny in step 2.1 identifies rational first-cohomology tensor realizations with those of $B\otimes_\mathbb Z\mathcal O$. By [F19] its determinant tensors are absolute; pullback and inverse rational isogeny transport them naturally under every field automorphism. Apply [F18] to the positive determinant subsystem from step 14.1: absoluteness at $J_0$ propagates to $J_1$, which is the original $A$. Thus every element of $\bigwedge_E^{2m}H^1(A,\mathbb Q)(m)$ is absolute. [F18, F19, given, step 2.1, step 14.1, construct, algebra] ∎
