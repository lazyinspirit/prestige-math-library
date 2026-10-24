---
id: lem-regular-immersion-koszul-ext-sheaf
kind: lemma
title: Koszul sheaf Ext of a smooth regular immersion is concentrated in codimension
status: published
origin: pipeline
landmark: false
deps:
  - lem-smooth-closed-immersion-regular-conormal-sequence
  - lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - def-sheaf-ext-for-coherent-modules
  - def-koszul-complex-of-a-sequence-with-coefficients
  - lem-koszul-differential-coordinate-formula
  - lem-exterior-algebra-basis-monomials
  - lem-koszul-complex-concatenation-tensor-isomorphism
  - cor-koszul-complex-resolves-a-regular-quotient
  - thm-basic-koszul-homology
  - thm-regular-sequences-give-acyclic-koszul-complexes
  - cor-local-koszul-acyclicity-iff-regular-sequence
  - lem-koszul-generator-matrix-chain-map
  - cor-koszul-complex-invariant-under-invertible-generator-change
  - cor-koszul-homology-flat-base-change
  - lem-ringed-space-module-sheaves-enough-injectives
  - thm-extension-by-zero-adjunction-exactness
  - def-extension-by-zero-abelian-sheaf
  - thm-exactness-of-sheaves-stalkwise
  - thm-affine-quasi-coherent-equivalence
  - thm-flatness-is-local
  - lem-acyclic-assembly-by-exact-columns
  - lem-acyclic-assembly-by-exact-rows
  - def-locally-free-sheaf-finite-rank
  - def-sheaf-hom
  - def-invertible-sheaf
  - def-sheaf-tensor-product
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Duality for Schemes"
      url: https://stacks.math.columbia.edu/download/duality.pdf
      locator: "§27, Lemmas 27.1, 27.4-27.5 and Remarks 27.2-27.3, 27.6 (Ext of a regular immersion via the Koszul complex)"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Classes 53-54"
      url: https://math.stanford.edu/~vakil/0506-216/216Cjun2807.pdf
      locator: "Class 53 §§1-5 and Class 54 §§7, 11"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $X$ be a smooth
finite-type $k$-scheme of pure dimension $n$, let
$i:X\hookrightarrow\mathbb P^N_k$ be a closed immersion over $k$ of pure
codimension $c=N-n$ with ideal sheaf $\mathcal I\subseteq\mathcal O_{\mathbb P^N}$,
and let $E$ be a finite locally free $\mathcal O_X$-module. Write
$E^\vee=\mathcal H om_{\mathcal O_X}(E,\mathcal O_X)$ and let $\omega_X$ and
$\omega_{\mathbb P^N}$ be the dualizing line bundles of
[[def-smooth-projective-dualizing-line-bundle-and-trace]]. Then there is for
every $q\ge0$ an isomorphism of $\mathcal O_{\mathbb P^N}$-modules
$$\mathcal Ext^q_{\mathcal O_{\mathbb P^N}}\bigl(i_*E,\omega_{\mathbb P^N}\bigr)\;\cong\;\begin{cases}0,&q\ne c,\\ i_*\bigl(E^\vee\otimes_{\mathcal O_X}\omega_X\bigr),&q=c,\end{cases}$$
and the isomorphism in degree $c$ is natural in $E$. Moreover, on an affine
open chart $U=\operatorname{Spec}A\subseteq\mathbb P^N$ with
$\mathcal I|_U=(f_1,\dots,f_c)$ and $\mathbf f=(f_1,\dots,f_c)$ locally regular at every point of
$X\cap U$ — a finite cover of $X$ by such charts exists — and with
$E|_{X\cap U}\cong\mathcal O_{X\cap U}^{\oplus r}$, the Koszul complex
$\widetilde{K(\mathbf f;A)^{\oplus r}}$ is a finite locally free resolution of $i_*E|_U$ and the
sheaf Ext is computed there by
$$\mathcal Ext^q_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})\big|_U\;\cong\;H^q\bigl(\mathcal Hom_{\mathcal O_U}(\widetilde{K(\mathbf f;A)^{\oplus r}},\omega_{\mathbb P^N}|_U)\bigr).$$

## Facts & Assumptions

**Given:** a field $k$, a smooth finite-type $k$-scheme $X$ of pure dimension $n$, a closed immersion $i:X\hookrightarrow\mathbb P^N_k$ of pure codimension $c=N-n$ with ideal sheaf $\mathcal I$, a finite locally free $\mathcal O_X$-module $E$, the normal bundle $\mathcal N=(\mathcal I/\mathcal I^2)^\vee$, the dualizing line bundles $\omega_X$ and $\omega_{\mathbb P^N}$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The conormal sheaf $\mathcal I/\mathcal I^2$ is a locally free $\mathcal O_X$-module of rank $c$; near every point of $X$ there are local generators $g_1,\dots,g_c$ of $\mathcal I$ whose germs form a regular sequence in $\mathcal O_{\mathbb P^N,x}$; and the conormal sequence is exact. ([[lem-smooth-closed-immersion-regular-conormal-sequence]])

[F2] There is a canonical isomorphism of invertible $\mathcal O_X$-modules $\omega_X\cong i^*\omega_{\mathbb P^N}\otimes_{\mathcal O_X}\det\mathcal N$ with $\det\mathcal N=\bigwedge^c(\mathcal I/\mathcal I^2)^\vee$, and $\omega_{\mathbb P^N}=\mathcal O(-N-1)$ is locally free of rank one. ([[lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction]], [[def-smooth-projective-dualizing-line-bundle-and-trace]])

[F3] For $\mathcal O_Y$-modules $\mathcal F,\mathcal G$ the sheaf Ext is $\mathcal Ext^q_{\mathcal O_Y}(\mathcal F,\mathcal G)=H^q(\mathcal Hom_{\mathcal O_Y}(\mathcal F,I^\bullet))$ for an $\mathcal O_Y$-injective resolution $\mathcal G\to I^\bullet$, is independent of that resolution up to canonical isomorphism, and satisfies $\mathcal Ext^0=\mathcal Hom$; if $\mathcal F$ admits a resolution by finite locally free $\mathcal O_Y$-modules then $\mathcal Ext^q_{\mathcal O_Y}(\mathcal F,\mathcal G)$ is computed by the complex $\mathcal Hom_{\mathcal O_Y}(F_\bullet,\mathcal G)$, a local computation whose proof is deferred to the present item. ([[def-sheaf-ext-for-coherent-modules]])

[F4] For a commutative unital ring $R$, a finite sequence $\mathbf x$ in $R$ and an $R$-module $M$ the Koszul complex $K(\mathbf x;M)=(\bigwedge R^n\otimes_RM,d)$ has degree-$p$ term $\bigwedge^pR^n\otimes_RM$ and differential $d(e_I\otimes m)=\sum_{j=1}^p(-1)^{j-1}e_{I\setminus i_j}\otimes x_{i_j}m$ on basis monomials; the monomials $e_I$ with $|I|=p$ form a basis of $\bigwedge^pR^n$; and for finite sequences $\mathbf x,\mathbf y$ there is a signed chain isomorphism $K(\mathbf x,\mathbf y;M)\cong K(\mathbf x;R)\otimes_RK(\mathbf y;M)$. ([[def-koszul-complex-of-a-sequence-with-coefficients]], [[lem-koszul-differential-coordinate-formula]], [[lem-exterior-algebra-basis-monomials]], [[lem-koszul-complex-concatenation-tensor-isomorphism]])

[F5] If $M$ is finite free and $\mathbf x$ is $M$-regular then $K(\mathbf x;M)$ is a finite free resolution of $M/(\mathbf x)M$; every finite $M$-regular sequence is $M$-Koszul-regular, $H_i(K(\mathbf x;M))=0$ for $i>0$; conversely over a Noetherian local ring, with $M/(\mathbf x)M\ne0$, vanishing of the positive Koszul homology characterises $M$-regularity; the matrix relation $y_i=\sum_ja_{ij}x_j$ induces a chain map $K(\mathbf y;M)\to K(\mathbf x;M)$, which is an isomorphism when $(a_{ij})$ is invertible; and Koszul homology commutes with flat base change. ([[cor-koszul-complex-resolves-a-regular-quotient]], [[thm-regular-sequences-give-acyclic-koszul-complexes]], [[cor-local-koszul-acyclicity-iff-regular-sequence]], [[lem-koszul-generator-matrix-chain-map]], [[cor-koszul-complex-invariant-under-invertible-generator-change]], [[cor-koszul-homology-flat-base-change]])

[F6] For a ringed space $(X,\mathcal O_X)$ the abelian category of $\mathcal O_X$-modules has enough injectives, and the construction supplies one injective resolution of every $\mathcal O_X$-module with no further selection; the Axiom of Choice enters exactly through the injective-embedding theorem. ([[lem-ringed-space-module-sheaves-enough-injectives]])

[F7] If a first-quadrant double complex has exact augmented columns respectively rows compatible with the horizontal respectively vertical differentials, then the edge complex maps quasi-isomorphically to the total complex. ([[lem-acyclic-assembly-by-exact-columns]], [[lem-acyclic-assembly-by-exact-rows]])

[F8] A finite locally free $\mathcal O_X$-module $\mathcal E$ of rank $r$ has invertible determinant $\bigwedge^r\mathcal E$, its dual $\mathcal E^\vee=\mathcal H om_{\mathcal O_X}(\mathcal E,\mathcal O_X)$ is finite locally free of the same rank, an isomorphism of finite locally free modules of the same rank is detected on exterior powers, and tensor products, duals and exterior powers of finite locally free modules are computed on local frames. ([[def-locally-free-sheaf-finite-rank]], [[def-sheaf-hom]], [[def-invertible-sheaf]], [[def-sheaf-tensor-product]])

[F9] On an affine scheme $U=\operatorname{Spec}A$, quasi-coherent sheaves are canonically associated to their $A$-modules of global sections; a module is flat if and only if all of its prime localisations are flat. Hence the module of sections of an invertible sheaf on $U$ is flat. ([[thm-affine-quasi-coherent-equivalence]], [[thm-flatness-is-local]])

[F10] For an open immersion $j:U\hookrightarrow Y$, abelian extension by zero $j_!$ is exact and left adjoint to restriction; its stalks are the original stalks on $U$ and zero outside $U$. Exactness of sheaves is detected on stalks. ([[thm-extension-by-zero-adjunction-exactness]], [[def-extension-by-zero-abelian-sheaf]], [[thm-exactness-of-sheaves-stalkwise]])

**Proof technique:** direct: resolve $i_*E$ locally by a Koszul complex on a regular sequence, compute the sheaf Ext from that finite locally free resolution by a double-complex comparison, identify the dual Koszul complex with a shift of a Koszul complex by Hodge-star duality so that only the top degree survives, and rewrite the surviving term as $i_*(E^\vee\otimes\omega_X)$ with the adjunction formula.

## Proof

1.1 A cover by charts with Koszul resolutions. By [F1] the conormal sheaf $\mathcal I/\mathcal I^2$ is locally free of rank $c$, so for every $y\in X$ the minimal number of generators of $\mathcal I_y$ is $c$ by Nakayama; hence two $c$-element systems of generators of $\mathcal I_y$ differ by an invertible matrix over $\mathcal O_{\mathbb P^N,y}$, and by [F1] one of them, the system $\mathbf g$ of that item, is a regular sequence at $y$. Fix a finite affine open cover of $X$ by charts $U=\operatorname{Spec}A\subseteq\mathbb P^N$ on which $\mathcal I|_U=(f_1,\dots,f_c)$ and $E|_{X\cap U}\cong\mathcal O_{X\cap U}^{\oplus r}$; near each $y\in X$ first shrink an ambient affine neighbourhood until the conormal generators extend and the frame of $E$ persists on $X\cap U$, then take a finite subcover by quasi-compactness of $X$. [F1, F8, given]

1.2 Hodge-star duality for the dual of a Koszul complex. Let $F=A^c$ have basis $e_1,\dots,e_c$ with image $\mathbf f$ in $A$, and let $N$ be an $A$-module. For $0\le p\le c$ define $$\Theta^p:\operatorname{Hom}_A(\Lambda^pF,N)\longrightarrow\Lambda^{c-p}F\otimes_A\Lambda^cF^\vee\otimes_AN$$ by the canonical perfect pairing $\Lambda^pF\otimes_A\Lambda^{c-p}F\to\det F$: if $\Theta^p(\phi)=\sum_j z_j\otimes\lambda_j\otimes n_j$, then $\phi(x)=\sum_j\lambda_j(x\wedge z_j)n_j$ for every $x\in\Lambda^pF$. By [F4] the wedge monomials form bases on both sides, so $\Theta^p$ is an isomorphism. To check the differential, take $x\in\Lambda^{p+1}F$ and $z\in\Lambda^{c-p}F$. Since $x\wedge z=0$ in degree $c+1$, the Koszul differential's signed Leibniz rule, obtained from its coordinate formula in [F4], gives $0=\partial(x\wedge z)=\partial x\wedge z+(-1)^{p+1}x\wedge\partial z$. Thus $\lambda(\partial x\wedge z)=(-1)^p\lambda(x\wedge\partial z)$, and the raw maps satisfy $\Theta^{p+1}(\phi\circ\partial)=(-1)^p\partial\Theta^p(\phi)$. Set $s_p=(-1)^{p(p-1)/2}$; then $s_{p+1}(-1)^p=s_p$, so the maps $s_p\Theta^p$ commute with the differentials and give an isomorphism of complexes $$\operatorname{Hom}_A(K(\mathbf f;A)_\bullet,N)\;\cong\;K(\mathbf f;\Lambda^cF^\vee\otimes_AN)_{c-\bullet}.$$ This also covers $c=0$, when both complexes have one term. [F4, algebra]

1.3 Extension by zero for modules. Give the abelian sheaf $j_!M$ of [F10] the $\mathcal O_Y$-action induced by restriction of functions to $U$: multiplication preserves sections with support closed in the ambient open. This defines $j_!^{\mathrm{mod}}M$, with stalks $M_y$ on $U$ and zero off $U$, so it is exact by [F10]. The abelian adjunction restricts to module morphisms: the adjoint of an $\mathcal O_U$-linear map is $\mathcal O_Y$-linear on stalks in $U$, while outside $U$ its source stalk is zero. Thus $j_!^{\mathrm{mod}}$ is left adjoint to module restriction. Given an injective $I$ upstairs and a monomorphism downstairs, exact $j_!^{\mathrm{mod}}$ carries it to a monomorphism; the adjunction and injectivity solve the corresponding extension problem. Therefore $I|_U$ is injective. [F10, construct]

2.1 The Koszul complex on each chart is a resolution. Fix such a chart and let $\mathbf f=(f_1,\dots,f_c)$. At a point $y\in X\cap U$ the systems $\mathbf f$ and $\mathbf g$ generate $\mathcal I_y$ and are minimal, so by step 1.1 the generator-matrix chain map of [F5] is an isomorphism $K(\mathbf f;A_{\mathfrak p_y})\cong K(\mathbf g;A_{\mathfrak p_y})$ and the right hand side is acyclic in positive degrees by [F5] since $\mathbf g$ is regular at $y$. Here $A_{\mathfrak p_y}/(\mathbf f)\ne0$, so the local converse in [F5] also makes $\mathbf f$ a regular sequence at every point of $X\cap U$, as asserted in the Statement. At a point $y\in U\setminus X$ some $f_i$ is a unit, and by [F4] the complex $K(\mathbf f;A_{\mathfrak p_y})$ is the tensor product of the contractible two-term complex of that unit with the Koszul complex of the remaining elements, hence is contractible and thus acyclic in positive degrees. The positive homology modules of the complex of finite free $A$-modules $K(\mathbf f;A)$ are finitely generated, and a finitely generated module over the Noetherian ring $A$ all of whose localisations are zero is zero; hence $H_i(K(\mathbf f;A))=0$ for $i>0$ and $H_0(K(\mathbf f;A))=A/(\mathbf f)$ by [F5]. Thus $K(\mathbf f;A)$ is a finite free resolution of $A/(\mathbf f)$, and its associated sheaf complex on $U$ resolves $i_*\mathcal O_X|_U$; after the chosen frame of $E|_{X\cap U}$, its $r$-fold direct sum resolves $i_*E|_U$. [F1, F4, F5, step 1.1, algebra]

3.1 The local computation of sheaf Ext. Fix a chart $U$ as in step 2.1 and write $\mathcal K_p=\widetilde{K(\mathbf f;A)_p^{\oplus r}}$ for the associated finite free $\mathcal O_U$-module. Choose an $\mathcal O_U$-injective resolution $\omega_{\mathbb P^N}|_U\to I^\bullet$, which exists by [F6], and form the first-quadrant double cochain complex $$C^{p,q}=\mathcal Hom_{\mathcal O_U}(\mathcal K_p,I^q),\qquad p,q\ge0,$$ whose horizontal differential is induced by $\mathcal K_{p+1}\to\mathcal K_p$ and whose vertical differential is induced by $I^q\to I^{q+1}$; every diagonal is finite because $\mathcal K_p=0$ for $p>c$. For fixed $q$ the augmented row $0\to\mathcal Hom(i_*E|_U,I^q)\to\mathcal Hom(\mathcal K_0,I^q)\to\cdots$ is exact as a sequence of sheaves: on each smaller open $V\subseteq U$, step 1.3 makes $I^q|_V$ injective, so $\operatorname{Hom}_{\mathcal O_V}(-,I^q|_V)$ sends the restricted resolution to an exact sequence; for fixed $p$ the augmented column $0\to\mathcal Hom(\mathcal K_p,\omega_{\mathbb P^N}|_U)\to\mathcal Hom(\mathcal K_p,I^0)\to\cdots$ is exact because $\mathcal K_p$ is finite free, so that $\mathcal Hom(\mathcal K_p,-)$ is exact. The two assembly lemmas [F7] (applied in the abelian category of $\mathcal O_U$-modules, whose arguments use only these two exactness statements) then make both edge complexes quasi-isomorphic to the total complex, so that $$H^q\bigl(\mathcal Hom_{\mathcal O_U}(\mathcal K_\bullet,\omega_{\mathbb P^N}|_U)\bigr)\cong H^q\bigl(\mathcal Hom_{\mathcal O_U}(i_*E|_U,I^\bullet)\bigr)=\mathcal Ext^q_{\mathcal O_U}(i_*E|_U,\omega_{\mathbb P^N}|_U),$$ the last term being $\mathcal Ext^q_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})|_U$ because restriction to the open $U$ is exact and commutes with $\mathcal Hom$ and, by step 1.3, preserves injectives: if $j_!^{\mathrm{mod}}$ is exact and left adjoint to restriction, every extension problem for the restricted injective adjoints to an extension problem upstairs. Thus the restricted injective resolution computes the same sheaf Ext. This proves the local computation asserted in [F3] and in the statement. [F3, F4, F6, F7, F10, step 2.1, step 1.3]

4.1 Concentration in the top degree. If $H_i(K(\mathbf f;N))=0$ for all $i>0$ then step 1.2 gives $$H^q\bigl(\operatorname{Hom}_A(K(\mathbf f;A)_\bullet,N)\bigr)\cong H_{c-q}\bigl(K(\mathbf f;\Lambda^cF^\vee\otimes_AN)\bigr),$$ which vanishes for $q\ne c$ and equals $\Lambda^cF^\vee\otimes_AN/(\mathbf f)N$ for $q=c$, by the description of $H_0$ in [F5]. Take $N=\omega_{\mathbb P^N}(U)^{\oplus r}$. By [F2] the sheaf $\omega_{\mathbb P^N}|_U$ is invertible; [F9] identifies its sections with an $A$-module whose prime localisations are free of rank one, hence $N$ is flat. Thus $K(\mathbf f;N)=K(\mathbf f;A)\otimes_A N$ is acyclic in positive degrees by the finite-free resolution of step 2.1 and flatness, with $H_0=N/(\mathbf f)N$. Since every $\mathcal K_p$ in step 3.1 is the associated sheaf of the finite free module $K(\mathbf f;A)_p^{\oplus r}$, affine quasi-coherent equivalence [F9] identifies $\mathcal Hom_{\mathcal O_U}(\mathcal K_p,\omega_{\mathbb P^N}|_U)$ with the associated sheaf of $\operatorname{Hom}_A(K(\mathbf f;A)_p^{\oplus r},\omega_{\mathbb P^N}(U))$. Combining with step 3.1, the sheaf $\mathcal Ext^q(i_*E,\omega_{\mathbb P^N})|_U$ vanishes for $q\ne c$, while for $q=c$ it is canonically the associated sheaf of $$\Lambda^cF^\vee\otimes_A\omega_{\mathbb P^N}(U)\otimes_A\bigl(A/(\mathbf f)\bigr)^{\oplus r}.$$ This module is killed by $(\mathbf f)=\mathcal I(U)$, so its associated sheaf is the pushforward from $X\cap U$. [F2, F4, F5, F9, step 1.2, step 2.1, step 3.1]

5.1 Identification with $E^\vee\otimes\omega_X$. The assignment $e_i\mapsto f_i\bmod\mathcal I^2$ is a surjection of $\mathcal O_{X\cap U}$-modules $F\otimes_A\mathcal O_{X\cap U}\to\mathcal I/\mathcal I^2$ between finite locally free modules of the same rank $c$, hence an isomorphism by [F8] and [F1]; taking $c$-th exterior powers and dualising gives a canonical isomorphism $\Lambda^cF^\vee\otimes_A\mathcal O_{X\cap U}\cong\det(\mathcal I/\mathcal I^2)^\vee|_{X\cap U}$. Substituting this into step 4.1, and using $i^*\omega_{\mathbb P^N}=\omega_{\mathbb P^N}|_{X\cap U}$ and $(A/(\mathbf f))^{\oplus r}$ being the local frame of $E^\vee|_{X\cap U}$, gives a canonical isomorphism $$\mathcal Ext^c(i_*E,\omega_{\mathbb P^N})\big|_U\;\cong\;i_*\bigl(E^\vee\otimes i^*\omega_{\mathbb P^N}\otimes\det(\mathcal I/\mathcal I^2)^\vee\bigr)\big|_U,$$ and by the adjunction formula [F2] the right hand side is $i_*(E^\vee\otimes\omega_X)|_U$. [F1, F2, F8, step 4.1]

6.1 Gluing and vanishing in the remaining degrees. Near each point of $X$ in the overlap, write the second regular-generator tuple as $\mathbf f'=B\mathbf f$. Both tuples give bases of $\mathcal I/\mathcal I^2$, so $\overline B$ is invertible modulo $\mathcal I$; its determinant is a unit after shrinking an ambient neighbourhood of that point. On this smaller neighbourhood the generator-matrix chain map of [F5] is an isomorphism. In top degree it acts by $\det B$, while dualizing the Koszul complex acts by the corresponding dual determinant; the identification in step 5.1 uses exactly the induced change of the conormal basis. Different lifts $B$ of the same conormal change have the same determinant modulo $\mathcal I$ and thus induce the same map on the top Ext module, which is killed by $\mathcal I$. A change of the chosen frame of $E$ similarly acts on the dual Koszul complex by the dual transition matrix and agrees with the transition of $E^\vee$. Hence the local isomorphisms of steps 4.1–5.1 agree after shrinking around every point of an overlap and therefore agree on the overlap itself; both sheaves vanish off $X$, so they glue to a global isomorphism $$\mathcal Ext^c_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})\cong i_*\bigl(E^\vee\otimes_{\mathcal O_X}\omega_X\bigr).$$ The same local computation gives $\mathcal Ext^q(i_*E,\omega_{\mathbb P^N})=0$ for $q\ne c$, on a cover of $X$ and on its open complement. [F3, F5, F8, step 1.2, step 4.1, step 5.1]

7.1 Naturality, degenerate cases and the Axiom of Choice. An $\mathcal O_X$-linear map $u:E\to E'$ between finite locally free modules induces a map from the Koszul resolution for $E$ to that for $E'$, and hence, after applying $\mathcal Hom(-,\omega_{\mathbb P^N})$, a map in the reverse direction between the complexes of steps 3.1, 4.1 and 5.1; the Hodge-star isomorphism, the identification of $\Lambda^cF^\vee$ with $\det(\mathcal I/\mathcal I^2)^\vee$ and the gluing of step 6.1 are natural, so in degree $c$ the resulting map from $\mathcal Ext^c(i_*E',\omega_{\mathbb P^N})$ to $\mathcal Ext^c(i_*E,\omega_{\mathbb P^N})$ is $i_*(u^\vee\otimes\operatorname{id}_{\omega_X})$, which is the asserted contravariant naturality in $E$. If $X=\varnothing$, then $i_*E=0$ and both sides of the claimed isomorphism are zero. For nonempty $X$ and $c=0$, the closed immersion identifies $X$ with $\mathbb P^N$ because $X$ is reduced and has full-dimensional closed support in the irreducible projective space; the empty Koszul complex is $\mathcal O_U$ in degree zero by [F4], $\det\mathcal N$ is trivial, $\omega_X=\omega_{\mathbb P^N}$, and the conclusion reads $\mathcal Ext^0(E,\omega_{\mathbb P^N})=\mathcal H om(E,\omega_{\mathbb P^N})=E^\vee\otimes\omega_{\mathbb P^N}$. Finally, the Axiom of Choice [A1] is assumed in the statement and is consumed exactly through the conormal supplier [F1], the enough-injectives theorem [F6] that supplies the injective resolution in the definition of sheaf Ext, and the Koszul-regularity input [F5]; the argument itself selects only finitely many charts, regular systems and frames on a fixed finite cover, and no further choice is made. This proves the statement. [A1, F1, F2, F4, F5, F6, step 6.1] ∎
