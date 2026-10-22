---
id: def-qftx-wzw-conformal-block-interface
kind: definition
title: "Integrable affine modules and conformal-block completion contract"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - thm-qftx-kz-flatness
  - def-qftx-kz-connection
  - def-qftx-loop-current-cocycle
  - prop-qftx-loop-cocycle-jacobi
  - def-qftx-braided-line-model
  - lem-qftx-basic-form-scale
  - thm-a-braided-rigid-category-has-a-drinfeld-morphism
  - def-modular-ribbon-category-and-hopf-link-data
  - thm-su2-root-unity-ribbon-category-is-modular
dependency_roles:
  thm-qftx-kz-flatness: mathematical-premise
  def-qftx-kz-connection: mathematical-premise
  def-qftx-loop-current-cocycle: mathematical-premise
  prop-qftx-loop-cocycle-jacobi: mathematical-premise
  def-qftx-braided-line-model: mathematical-premise
  lem-qftx-basic-form-scale: mathematical-premise
  thm-a-braided-rigid-category-has-a-drinfeld-morphism: mathematical-premise
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  thm-su2-root-unity-ribbon-category-is-modular: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the scale conversion and central-extension check use finite sums and complexification of a Lie bracket."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Pavel I. Etingof, Igor B. Frenkel, and Alexander A. Kirillov Jr., Lectures on Representation Theory and Knizhnik-Zamolodchikov Equations"
      url: "https://djvu.online/file/elCdJNnaapAuA"
      locator: "Lecture 1, §§1.2–1.4; Lecture 2, §§2.5–2.8; Lecture 3, §3.5; Lecture 8, §8.1."
    - title: "Toshitake Kohno, Monodromy representations of braid groups and Yang-Baxter equations"
      url: "https://www.numdam.org/item/10.5802/aif.1114.pdf"
      locator: "§§1.1–1.2, printed pp. 141–143, for the distinction between KZ monodromy and its quantum-group description."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

A **chiral Wess–Zumino–Witten (WZW) / vertex-operator-algebra (VOA) completion record** concerns one holomorphic current-algebra sector, not a full left-right theory; it is additional mathematical data and theorems that make a comparison with the finite-dimensional Casimir KZ connection precise. This definition is a contract for such a comparison; it asserts no existence or equivalence theorem.

Fix a compact, connected, simply connected Lie group $G$ with finite-dimensional simple real Lie algebra $\mathfrak g_{\mathbb R}$, and put $\mathfrak g:=\mathfrak g_{\mathbb R}\otimes_{\mathbb R}\mathbb C$. Choose a Cartan subalgebra $\mathfrak h$ and positive roots $\Phi^+$, let $\theta$ be the highest root, and put $\rho:=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$. Use the induced-root-form convention of [[lem-qftx-basic-form-scale]]: for each $\lambda\in\mathfrak h^*$, $H_{\lambda,\mathrm{Kill}}$ is determined by $B_{\mathrm{Kill}}(H_{\lambda,\mathrm{Kill}},H)=\lambda(H)$ for all $H\in\mathfrak h$, and $(\lambda,\mu)_{\mathrm{Kill}}:=B_{\mathrm{Kill}}(H_{\lambda,\mathrm{Kill}},H_{\mu,\mathrm{Kill}})$. Let $c:=2/(\theta,\theta)_{\mathrm{Kill}}$ and $B_{\mathrm{bas}}:=B_{\mathrm{Kill}}/c$, which is the normalized form $B_0$ of [[lem-qftx-basic-form-scale]]. For each $\lambda\in\mathfrak h^*$ define $H_{\lambda,\mathrm{bas}}$ by $B_{\mathrm{bas}}(H_{\lambda,\mathrm{bas}},H)=\lambda(H)$ and $(\lambda,\mu)_{\mathrm{bas}}:=B_{\mathrm{bas}}(H_{\lambda,\mathrm{bas}},H_{\mu,\mathrm{bas}})$; then $(\theta,\theta)_{\mathrm{bas}}=2$. Put $\theta^\vee:=2H_{\theta,\mathrm{bas}}/(\theta,\theta)_{\mathrm{bas}}=H_{\theta,\mathrm{bas}}\in\mathfrak h$ and $h^\vee:=1+\rho(\theta^\vee)$. The scale lemma gives $B_{\mathrm{Kill}}=2h^\vee B_{\mathrm{bas}}$. Let $\Omega_{\mathrm{bas}}$ and $\Omega_{\mathrm{Kill}}$ denote the pairwise Casimir tensors for these two forms, as in the KZ definition. For a positive integer level $k$, the standard basic-form WZW parameter is $\kappa_{\mathrm{bas}}:=k+h^\vee$. The KZ definition on this page uses the Killing-form tensor, whose tensor is $\Omega_{\mathrm{Kill}}=(2h^\vee)^{-1}\Omega_{\mathrm{bas}}$; therefore its parameter must be $\kappa_{\mathrm{Kill}}:=(k+h^\vee)/(2h^\vee)$ to give the same connection. This is a normalization conversion, not an identification of affine conformal blocks with the finite-dimensional KZ fibers.

Restrict $B_{\mathrm{bas}}$ to the compact real form and use that real invariant symmetric form as $\kappa$ in the smooth-current central extension defined by the cocycle $\omega(X,Y)=(2\pi)^{-1}\int_0^{2\pi}\kappa(X(\theta),Y'(\theta))\,d\theta$. Complexify the extension and restrict its loop algebra to Laurent modes $J_m(x):=xe^{-im\theta}$, $m\in\mathbb Z$. If $K$ is the central generator from the smooth-current extension, set $K_{\mathrm{aff}}:=iK$; then the fixed convention is $[J_m(x),J_n(y)]=J_{m+n}([x,y])+m\delta_{m+n,0}B_{\mathrm{bas}}(x,y)K_{\mathrm{aff}}$. The derivation $d:=i\partial_\theta$ satisfies $[d,J_m(x)]=mJ_m(x)$ and $[d,K_{\mathrm{aff}}]=0$. The resulting central extension with degree derivation is the affine Lie algebra used here. A representation is at level $k$ when $K_{\mathrm{aff}}$ acts as $kI$. After choosing affine Cartan and positive-root data, an **affine highest-weight module** is generated by a vector annihilated by the positive-root subalgebra and on which the Cartan acts by a specified weight whose central coordinate is $k$ and whose degree coordinate is recorded; it is **integrable** when each simple-root Chevalley generator $e_i,f_i$ acts locally nilpotently, meaning that each vector is killed by some positive power of that generator. These are input modules; this definition does not prove their existence or any classification.

For the genus-zero marked curve $\mathbb P^1$ with distinct ordered points $z_1,\ldots,z_n$ and level-$k$ modules $M_1,\ldots,M_n$, put $\mathcal A_{\mathbf z}:=\mathfrak g\otimes\mathcal O(\mathbb P^1\setminus\{z_1,\ldots,z_n\})$, where $\mathcal O$ denotes rational functions with poles only at the marked points. An interface must specify the action of $\mathcal A_{\mathbf z}$ on $M_1\otimes\cdots\otimes M_n$, including the compatible central-extension lift. Given that action, the **coinvariant space** is the quotient of the tensor product by the linear span of all action vectors; its algebraic dual (or a specified continuous dual if a completion is used) is the conformal-block space. A top-level $\mathfrak g$-module is the specified grade-zero subspace relative to the chosen highest-vector degree, with the action of the constant-loop subalgebra; an interface must state that grading convention and prove finite dimensionality before using it as a KZ fiber. Its identification with these varying conformal-block spaces and the analytic continuation maps must be specified rather than inferred from the word “WZW.”

A **sewing datum** specifies, for a curve obtained by joining marked local coordinates, the source and target conformal-block spaces, the intermediate modules, the linear gluing map, and any completion topology and convergence condition. Factorization is a theorem about that datum, not part of this definition. On a module where the current modes act as operators, fix normal ordering of their compositions by

$$:J_m(x)J_n(y):=\begin{cases}J_m(x)J_n(y),&m<0,\\J_n(y)J_m(x),&m\ge0.\end{cases}$$

A **Sugawara datum** is a proposed mode-indexed family of quadratic current operators formed with this ordering. An existence theorem must state its exact coefficients, operator domains, meaning and convergence of any infinite sums, and central charge, and prove the Virasoro relations.

For a quantum-group comparison, specify the category with the exact interface of [[def-qftx-braided-line-model]]: it is a locally finite $\mathbb k$-linear abelian rigid monoidal category over a field $\mathbb k$, its tensor product is $\mathbb k$-bilinear, and $\operatorname{End}(\mathbf1)\cong\mathbb k$; rigid means left and right duals with evaluation and coevaluation maps satisfying the two snake identities. Its braiding $c_{Y,Z}:Y\otimes Z\to Z\otimes Y$ is a natural isomorphism satisfying both hexagon identities with the associator $\alpha_{X,Y,Z}:(X\otimes Y)\otimes Z\to X\otimes(Y\otimes Z)$, which satisfies the pentagon identity. For $X$ put $P_0(X)=\mathbf1$, $P_1(X)=X$, and $P_{m+1}(X)=P_m(X)\otimes X$; the positive braid generator acts by the supplier's rebracketed adjacent $c_{X,X}$, with the right input passing over the left. These category and coherence hypotheses are part of the input, not consequences of WZW data.

For a ribbon-fusion comparison, use the exact convention of [[def-modular-ribbon-category-and-hopf-link-data]]: $\mathcal C$ is a complex finite semisimple rigid tensor category with simple unit and finitely many simple-object classes, equipped with a braiding and ribbon twist $\theta$. The induced pivotal map is $j_X=u_X\theta_X:X\to X^{\vee\vee}$, where $u$ is the Drinfeld morphism supplied by [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]], and the associated spherical pivotal structure is part of the data. Its trace is $\operatorname{tr}_j(f):=\operatorname{Tr}_L(j_X\circ f)$ for $f\in\operatorname{End}(X)$, with the left-trace convention of the same supplier. With simple labels $i,j$, the unnormalized Hopf-link entry is $s_{ij}=\operatorname{tr}_j(c_{j,i}c_{i,j})$, and modularity means this matrix is invertible. No positivity of general quantum dimensions is assumed.

Let $N$ be an oriented smooth $3$-manifold and let $L=\bigsqcup_{a=1}^r S^1\hookrightarrow N$ be a smooth embedding of a finite disjoint union of oriented circles. Its normal bundle is $\nu L:=TN|_L/TL$. A **framing** of $L$ is a homotopy class of smooth nowhere-zero sections of $\nu L$. The orientations of $N$ and of each component orient the rank-two normal bundle; a positive unit twist changes the framing by one positive full $2\pi$ rotation as each oriented core circle is traversed, and the ribbon twist specifies its operator. If a semisimplification is used, state the category and quotient ideal: a morphism $f:X\to Y$ is negligible when $\operatorname{tr}(g\circ f)=0$ for every $g:Y\to X$, using the declared pivotal trace. A claimed equivalence must be a specified monoidal equivalence with coherent structure maps preserving the braiding and twist, together with a proof under its exact hypotheses.

The finite-dimensional KZ flatness theorem concerns finite-dimensional $\mathfrak g$-modules and does not by itself establish finite-dimensionality of affine conformal blocks, Sugawara well-definedness, sewing/factorization, or a Drinfeld–Kohno or rational-VOA ribbon-category equivalence. The modularity theorem for the stated $\mathfrak{sl}_2$ root-of-unity quotient establishes modularity of that quotient only; it does not identify its exchanges with WZW monodromy. No generic monodromy unitarity follows.

## Definition references

[[thm-qftx-kz-flatness]]

[[def-qftx-loop-current-cocycle]]

[[prop-qftx-loop-cocycle-jacobi]]

[[def-qftx-braided-line-model]]

[[lem-qftx-basic-form-scale]]

[[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]

[[def-modular-ribbon-category-and-hopf-link-data]]

[[thm-su2-root-unity-ribbon-category-is-modular]]

## Facts & Assumptions

**Given:** The compact simple group and root normalization, positive integer level $k$, the smooth-current cocycle extension, the Killing-form KZ connection, and the stated categorical input interfaces.

[F1] [[lem-qftx-basic-form-scale]]: with long roots normalized to squared length $2$, $B_{\mathrm{Kill}}=2h^\vee B_{\mathrm{bas}}$.

[F2] [[def-qftx-kz-connection]]: the local KZ connection uses dual bases of $B_{\mathrm{Kill}}$ and coefficient $\kappa_{\mathrm{Kill}}^{-1}$.

[F3] [[def-qftx-loop-current-cocycle]]: for a real Lie algebra with invariant symmetric form $\kappa$, the smooth-loop cocycle is $\omega(X,Y)=(2\pi)^{-1}\int_0^{2\pi}\kappa(X,Y')\,d\theta$ and defines a candidate central-term bracket.

[F4] [[prop-qftx-loop-cocycle-jacobi]]: that candidate bracket is a Lie bracket and gives a one-dimensional central extension.

[F5] [[def-qftx-braided-line-model]]: for a field $\mathbb k$ and a locally finite $\mathbb k$-linear abelian rigid monoidal category with $\mathbb k$-bilinear tensor and $\operatorname{End}(\mathbf1)\cong\mathbb k$, a natural braiding satisfying both hexagons with the associator gives the rebracketed adjacent $c_{X,X}$ morphisms; the canonical rebracketing independence and braid-group homomorphism are its stated conditional interface.

[F6] [[def-modular-ribbon-category-and-hopf-link-data]]: for a complex finite semisimple rigid tensor category with simple unit and finitely many simple classes, the specified braiding and ribbon twist induce the declared spherical pivotal trace, and the category is modular exactly when $s_{ij}=\operatorname{tr}_j(c_{j,i}c_{i,j})$ is invertible.

[F7] [[thm-su2-root-unity-ribbon-category-is-modular]]: for $\ell\ge3$, $q=e^{\pi i/\ell}$ and the standard positive-trace ribbon semisimplification of finite-dimensional integrable type-1 tilting modules for Lusztig divided-power $U_q(\mathfrak{sl}_2)$, the theorem gives the stated simple labels, dimensions, twists, Hopf-link entries, and modularity.

[F8] [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]: in a braided rigid monoidal category the Drinfeld morphism is a natural isomorphism $u_X:X\to X^{\vee\vee}$, with the supplier's stated chosen-dual and braiding convention.

## Proof

**Given:** [F1]–[F8], the basic-form shift convention $\kappa_{\mathrm{bas}}=k+h^\vee$, and the definition's contract data.

1.1 Let $(x_a),(x^a_{\mathrm{bas}})$ be $B_{\mathrm{bas}}$-dual bases. By [F1], $(x_a,(2h^\vee)^{-1}x^a_{\mathrm{bas}})$ are $B_{\mathrm{Kill}}$-dual, so their Casimir tensors satisfy $\Omega_{\mathrm{Kill}}=(2h^\vee)^{-1}\Omega_{\mathrm{bas}}$. [F1, given, algebra]

1.2 The current extension in [F3] satisfies Jacobi and has central kernel by [F4]. Extending its real bracket complex-bilinearly preserves skew-symmetry and Jacobi, since each is a finite polynomial identity in the structure constants; restriction to the Laurent-mode subalgebra preserves the same identities. Thus the central extension used for the affine module input is a Lie algebra. [F3, F4, given, algebra]

1.3 For $J_m(x)=xe^{-im\theta}$, the cocycle in [F3] gives $\omega(J_m(x),J_n(y))=-in\delta_{m+n,0}B_{\mathrm{bas}}(x,y)=im\delta_{m+n,0}B_{\mathrm{bas}}(x,y)$. Replacing $K$ by $K_{\mathrm{aff}}=iK$ yields the stated mode bracket. Also $d=i\partial_\theta$ sends $J_m(x)$ to $mJ_m(x)$. On noncentral terms the derivation identity is the equality $m+n=m+n$; on the central term both sides agree because it is supported on $m+n=0$, where the total degree is zero. Thus $d$ is a derivation and $[d,K_{\mathrm{aff}}]=0$, fixing the affine mode and central-level conventions used by the Definition. [F3, F4, given, algebra]

1.4 [F5] supplies the braid-action interface only under its stated rigid monoidal category and coherence hypotheses. [F8] identifies the Drinfeld morphism used in the pivotal map of [F6], which separately fixes the ribbon and modular data conventions. These inputs specify what a comparison must preserve; neither statement asserts an equivalence with the KZ local system, so the Definition reserves an equivalence proof as a separate theorem obligation. [F2, F5, F6, F8]

2.1 The two KZ one-form coefficients agree exactly when $\kappa_{\mathrm{Kill}}^{-1}(2h^\vee)^{-1}=\kappa_{\mathrm{bas}}^{-1}$. Substituting [F2] and $\kappa_{\mathrm{bas}}=k+h^\vee$ gives $\kappa_{\mathrm{Kill}}=(k+h^\vee)/(2h^\vee)$, the conversion recorded in the Definition. [F1, F2, step 1.1, given, algebra]

3.1 The actual theorem [F7] proves modularity only for its stated $\mathfrak{sl}_2$ quotient and conventions. That category-specific result supplies the concrete modular input named in the Definition, but does not identify its ribbon exchanges with the WZW/KZ monodromy or establish factorization. [F7, step 1.4, algebra] ∎

