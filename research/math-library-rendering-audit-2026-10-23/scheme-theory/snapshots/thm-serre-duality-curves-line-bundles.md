---
id: thm-serre-duality-curves-line-bundles
kind: theorem
title: "Serre duality for line bundles on a smooth proper curve, and the residue realization"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-projective-embedding-every-smooth-proper-curve
  - def-axiom-of-choice
  - def-dependent-choice
  - def-canonical-line-bundle-curve
  - def-cech-cochain-complex-open-cover
  - def-closed-immersion-schemes
  - def-effective-cartier-divisor
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-free-sheaf-finite-rank
  - def-noetherian-topological-space
  - def-residue-pairing-principal-parts
  - def-residue-rational-differential-curve-point
  - def-scheme
  - def-sheaf-hom
  - def-sheaf-ext-for-coherent-modules
  - def-sheaf-cohomology-derived-global-sections
  - def-extension-by-zero-abelian-sheaf
  - def-flasque-sheaf
  - def-sheaf-tensor-product
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - lem-curve-closed-subsets-finite
  - lem-closed-immersion-cohomology-pushforward
  - lem-acyclic-assembly-by-exact-columns
  - lem-acyclic-assembly-by-exact-rows
  - lem-effective-cartier-divisor-exact-sequence
  - lem-principal-parts-cech-h1-presentation
  - lem-proper-cohomology-field-extension
  - lem-regular-immersion-local-to-global-ext-collapse
  - lem-ringed-space-module-sheaves-enough-injectives
  - lem-residue-pairing-descends-cohomology
  - lem-smooth-projective-embedding-gysin-trace-compatibility
  - lem-smooth-projective-rational-point-koszul-residue-normalization
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-cech-to-sheaf-cohomology-comparison
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-effective-cartier-divisor-closed-immersion
  - thm-flasque-sheaves-acyclic
  - thm-grothendieck-spectral-sequence
  - thm-local-ring-smooth-curve-dvr
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - thm-extension-by-zero-adjunction-exactness
  - prop-yoneda-product-is-composition-in-the-derived-category
  - thm-field-norm-and-trace-by-embeddings
  - thm-global-residue-theorem-algebraic-curve
  - thm-h0-structure-sheaf-proper-curve
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-trace-form-is-nondegenerate-iff-separable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the duality and residue
suppliers. Let $C$ be a smooth proper geometrically integral curve over a
field $k$ and let $\mathcal L$ be an invertible $\mathcal O_C$-module.

(1) Over an arbitrary field $k$, $C$ is projective
([[cor-projective-embedding-every-smooth-proper-curve]]), and specializing the
published Serre duality theorem for smooth projective varieties to $n=1$ and
$E=\mathcal L$ gives the fixed normalized Gysin trace
$t_C\colon H^1(C,\omega_C)\to k$, independent of the projective embedding,
and the functorial perfect pairing
$$H^1(C,\mathcal L)\times H^0(C,\omega_C\otimes\mathcal L^{-1})\to k,\qquad (c,s)\longmapsto t_C(c\cup s).$$
Here $\mathcal L^\vee\otimes\omega_C\cong\omega_C\otimes\mathcal L^{-1}$.

(2) Over a perfect field, the same fixed trace is the negative of the
positive residue-sum functional: if $\xi\in H^1(C,\omega_C)$ is represented
by finite-support principal parts $(\xi_p)$, then
$$t_C(\xi)=-\sum_p\operatorname{res}_p(\xi_p).$$
For every invertible $\mathcal L$ and
$s\in H^0(C,\omega_C\otimes\mathcal L^{-1})$, the fixed-trace pairing is
the negative of the positive residue pairing of
[[def-residue-pairing-principal-parts]]:
$$t_C(c\cup s)=-\langle c,s\rangle =-\sum_p\operatorname{res}_p(c_ps).$$
Consequently the residue pairing is perfect, bilinear and functorial in
$\mathcal L$, and
$h^1(C,\mathcal L)=h^0(C,\omega_C\otimes\mathcal L^{-1})$.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$; a smooth proper geometrically
integral curve $C$ over $k$; and an invertible $\mathcal O_C$-module
$\mathcal L$.

[F1] The Axiom of Choice: every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F2] Every smooth proper geometrically integral curve $C$ over a field $k$
admits a closed immersion over $k$ into $\mathbf P^N_k$, so
$C\to\operatorname{Spec}k$ is projective in the H-projective convention
([[cor-projective-embedding-every-smooth-proper-curve]]).

[F3] The canonical bundle of a smooth curve is
$\omega_C=\Omega^1_{C/k}=\bigwedge^1\Omega^1_{C/k}$. The normalized trace in
the published smooth-projective duality theorem is fixed by the Gysin map from
an embedding and the Laurent-coefficient trace on projective space; embedding
independence is part of that theorem. Thus the trace is not a freely chosen
functional ([[def-canonical-line-bundle-curve]],
[[def-smooth-projective-dualizing-line-bundle-and-trace]],
[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]).

[F4] An invertible $\mathcal O_C$-module $\mathcal L$ is locally free of rank
one; its dual $\mathcal L^\vee$ is again invertible,
$\mathcal L^\vee\otimes\mathcal L\cong\mathcal O_C$ canonically, and
$\mathcal L^{-1}$ denotes this dual. A rank-one locally free module is finite
locally free of rank one ([[def-invertible-sheaf]],
[[def-locally-free-sheaf-finite-rank]]).

[F5] Tensor products of $\mathcal O_C$-modules are the sheafifications of the
componentwise tensor presheaves, and the internal Hom is the sheaf of local
Hom modules. For invertible sheaves these constructions are compatible with
duals ([[def-sheaf-tensor-product]], [[def-sheaf-hom]]).

[F6] If $X$ is smooth projective of pure dimension $n$ over $k$ and $E$ is
finite locally free, then $\omega_X=\bigwedge^n\Omega^1_{X/k}$ has a
normalized trace $t_X\colon H^n(X,\omega_X)\to k$, independent of the chosen
projective embedding, and cup product, contraction and trace give a functorial
perfect pairing
$$H^q(X,E)\times H^{n-q}(X,E^\vee\otimes\omega_X)\to H^n(X,\omega_X)\xrightarrow{t_X}k$$
for $0\le q\le n$
([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]).

[F7] For this geometrically integral proper curve,
$H^0(C,\mathcal O_C)=k$. Applying [F6] to $E=\mathcal O_C$ and $q=0$ gives
$\dim_kH^1(C,\omega_C)=1$ and shows $t_C$ is nonzero
([[thm-h0-structure-sheaf-proper-curve]]).

[F8] Over a perfect field, the local coefficient-trace residue at each closed
point is independent of the uniformizer and the residue pairing is well
defined on cohomology and bilinear
([[def-residue-rational-differential-curve-point]],
[[lem-residue-pairing-descends-cohomology]]).

[F9] Over a perfect field, the sum of local residues of a rational
differential on $C$ is zero ([[thm-global-residue-theorem-algebraic-curve]]).
Together with the principal-parts presentation of $H^1$, this makes
$t_C^{\rm res}(\xi)=\sum_p\operatorname{res}_p(\xi_p)$ a well-defined
functional on $H^1(C,\omega_C)$
([[lem-principal-parts-cech-h1-presentation]]).

[F10] In the local resolution $A e_t\xrightarrow{t}A$ of a rational point,
the Cartier extension $0\to\omega_C\to\omega_C(p)\to\kappa(p)\to0$ with
quotient generator $t^{-1}dt$ has raw extension cocycle $e_t\mapsto+dt$.
The normalized trace-one point class is $e_t\mapsto-dt$; the passage from
the raw global extension class to that normalized class contributes the
factor $\sigma_1=-1$ exactly once. Its point-to-curve-to-ambient Gysin trace
is $+1$, so the original Cartier boundary has fixed trace $-1$. For a closed
point with finite separable residue field, the twisting sequence and its
connecting map commute with extension to an algebraic closure, and the fixed
Gysin trace also commutes with that extension
([[lem-smooth-projective-rational-point-koszul-residue-normalization]],
[[lem-regular-immersion-local-to-global-ext-collapse]],
[[lem-smooth-projective-embedding-gysin-trace-compatibility]],
[[lem-proper-cohomology-field-extension]]).

[F11] The ordered Čech complex has differential
$(\delta s)_{ij}=s_j|_{U_i\cap U_j}-s_i|_{U_i\cap U_j}$ for $i<j$, computes
quasi-coherent cohomology on a finite affine cover of a separated scheme, and
its comparison with sheaf cohomology is natural
([[def-cech-cochain-complex-open-cover]],
[[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]],
[[thm-cech-to-sheaf-cohomology-comparison]]).

[F12] A nonempty finite-type curve has a closed point; its residue field is
finite over $k$. If $k$ is perfect, that extension is separable. The cited
curve-topology lemma gives that the underlying space of $C_K$ is Noetherian;
by the definition of a scheme affine opens form a basis, and every open in a
Noetherian space is quasi-compact (otherwise successive finite subunions of
an open cover give a strictly increasing chain). Thus $C_K\setminus\{x\}$
has a finite affine cover. For a finite separable extension $L/k$, the trace
form is nondegenerate, so there is $a\in L$ with
$\operatorname{Tr}_{L/k}(a)\ne0$
([[lem-curve-closed-subsets-finite]], [[def-noetherian-topological-space]],
[[def-scheme]], [[thm-trace-form-is-nondegenerate-iff-separable]]).

[F13] If $L/k$ is finite separable and $K=\bar k$, choose a primitive element
$L=k[\alpha]$. Its minimal polynomial factors over $K$ into distinct linear
factors, and the Chinese remainder theorem gives
$L\otimes_kK\cong\prod_{\sigma:L\hookrightarrow K}K$. The trace is the sum
over these embeddings
([[thm-primitive-element-theorem-for-finite-separable-extensions]],
[[thm-field-norm-and-trace-by-embeddings]]).

[F14] Every class of $H^1(C,\mathcal L)$ is represented by a finite-support
family of local principal parts, equivalently by the connecting image of a
section of $\mathcal L(D)|_D$ for some effective divisor $D$ containing those
parts ([[lem-principal-parts-cech-h1-presentation]]).

[F15] For an effective Cartier point $x\hookrightarrow C$, the global Ext
group $\operatorname{Ext}^1_{\mathcal O_C}(\kappa(x),\omega_C)$ is naturally
identified with the stalk module Ext at $x$. Here is the needed support
argument. Under AC, $\operatorname{Mod}(\mathcal O_C)$ has enough injectives;
restriction of injectives to opens is injective by exact extension by zero,
and for an injective $I$ the sheaf $\mathcal Hom(\kappa(x),I)$ is flasque:
a morphism on an open $U$ transposes to $j_!(\kappa(x)|_U)\to I|_V$ and extends
across the monomorphism $j_!(\kappa(x)|_U)\hookrightarrow\kappa(x)|_V$ by
injectivity. Thus it is $\Gamma$-acyclic and the Grothendieck spectral
sequence has $E_2^{p,q}=H^p(C,\mathcal Ext^q(\kappa(x),\omega_C))$ and abuts
to global Ext. The locally free resolution
$0\to\mathcal O_C(-x)\to\mathcal O_C\to\kappa(x)\to0$ computes the sheaf
Ext: its Hom complex into $\omega_C$ is
$\omega_C\to\omega_C(x)$, so $\mathcal Ext^0=0$,
$\mathcal Ext^1=\iota_*(\omega_C(x)|_x)$, and higher sheaf Ext vanishes.
Its global sections are the local module Ext computed by
$0\to\mathcal O_{C,x}\xrightarrow{\pi}\mathcal O_{C,x}\to\kappa(x)\to0$,
where $\pi$ is a local equation of the Cartier point.
It is supported at the one affine point, so its positive cohomology vanishes.
The spectral sequence therefore collapses in total degree one, and its edge
is the natural isomorphism to the local module Ext. The sheaf-Ext computation
can be checked directly with the same resolution: take an injective resolution
$\omega_C\to I^\bullet$ and the double complex
$\mathcal Hom(P^{-r},I^s)$ for
$P=[\mathcal O_C(-x)\to\mathcal O_C]$ in degrees $-1,0$. For each $s$, the
augmented row
$0\to\mathcal Hom(\kappa(x),I^s)\to\mathcal Hom(\mathcal O_C,I^s)\to
\mathcal Hom(\mathcal O_C(-x),I^s)\to0$
is exact because $I^s$ is injective, also after restriction to opens. For
each term $P^{-r}$, local freeness makes
$0\to\mathcal Hom(P^{-r},\omega_C)\to\mathcal Hom(P^{-r},I^0)\to
\mathcal Hom(P^{-r},I^1)\to\cdots$
exact. The exact-row/column assembly lemmas identify the total cohomology
with both that of $\mathcal Hom(\kappa(x),I^\bullet)$ and that of
$\mathcal Hom(P^\bullet,\omega_C)$. The same extension-by-zero argument
with source $\mathcal O_C$ makes
$I\cong\mathcal Hom(\mathcal O_C,I)$ flasque, so the cited acyclic-resolution
theorem computes sheaf cohomology by this injective resolution. No
projective-space Ext-collapse statement is applied to $x\hookrightarrow C$.
([[def-effective-cartier-divisor]],
[[def-invertible-sheaf-of-cartier-divisor]],
[[def-sheaf-ext-for-coherent-modules]],
[[def-sheaf-cohomology-derived-global-sections]],
[[def-extension-by-zero-abelian-sheaf]], [[def-flasque-sheaf]],
[[lem-closed-immersion-cohomology-pushforward]],
[[lem-acyclic-assembly-by-exact-columns]],
[[lem-acyclic-assembly-by-exact-rows]],
[[lem-ringed-space-module-sheaves-enough-injectives]],
[[lem-effective-cartier-divisor-exact-sequence]],
[[thm-acyclic-resolution-theorem-for-right-derived-functors]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[thm-effective-cartier-divisor-closed-immersion]],
[[thm-extension-by-zero-adjunction-exactness]],
[[thm-flasque-sheaves-acyclic]], [[thm-grothendieck-spectral-sequence]],
[[thm-local-ring-smooth-curve-dvr]],
[[thm-qc-sheaf-affine-higher-cohomology-vanishes]]).

[F16] In the abelian category of $\mathcal O_C$-modules, with enough
injectives as in [F15], the class of a short exact sequence is sent to its
usual cone connecting morphism in the derived category; composing the
extension $0\to\omega_C\to\omega_C(x)\to\kappa(x)\to0$ with evaluation
$\mathcal O_C\to\kappa(x)$ is exactly its long-exact-sequence boundary in
$\operatorname{Ext}^1_{\mathcal O_C}(\mathcal O_C,\omega_C)=H^1(C,\omega_C)$.
The convention is the positive cone projection, with no additional shift
scalar ([[prop-yoneda-product-is-composition-in-the-derived-category]]).

## Proof

**Proof technique:** specialize the published smooth-projective theorem for
the arbitrary-field pairing, compare its fixed Gysin trace with the negative
of the positive residue sum using the local Koszul normalization, and compare
every Cartier-twist connecting map with cup product.

1.1 By [F2] the curve is projective; it is smooth of pure dimension one and $\omega_C=\Omega^1_{C/k}=\bigwedge^1\Omega^1_{C/k}$ by [F3]. Its trace $t_C$ is the fixed embedding-independent Gysin trace of [F3, F6], not a functional chosen after the residue formula is known. [F2, F3, F6]

1.2 Assume now that $k$ is perfect. By [F7] and [F6] applied to $E=\mathcal O_C$, $q=0$, the space $H^1(C,\omega_C)$ is one-dimensional and $t_C$ is nonzero. By [F9], residue sum defines another functional $t_C^{\rm res}\colon H^1(C,\omega_C)\to k$. We compare these functionals on one explicit connecting class. [F6, F7, F9]

1.3 Choose a closed point $p$ by [F12], put $L=\kappa(p)$, and choose a uniformizer $t$ at $p$. Then $L/k$ is finite separable; [F12] gives $a\in L$ with $\operatorname{Tr}_{L/k}(a)\ne0$. The exact sequence $$0\longrightarrow\omega_C\longrightarrow\omega_C(p) \longrightarrow\omega_C(p)|_p\longrightarrow0$$ has quotient generator represented locally by $t^{-1}dt$. Set $$\eta_p:=\delta_p(a\,t^{-1}dt)\in H^1(C,\omega_C).$$ By [F8] and the local coefficient-trace formula, $t_C^{\rm res}(\eta_p)=\operatorname{Tr}_{L/k}(a)$. [F8, F12]

1.4 We identify the global Cartier-extension class with the normalized point class without applying the projective-space collapse to $x\hookrightarrow C_K$. Let $x\in C_K(K)$, put $A=\mathcal O_{C_K,x}$, and choose a parameter $u$. Identify $\omega_{C_K}(x)|_x$ with $K$ by sending the class of $u^{-1}du$ to $1$, and let $$e_x:=\bigl[0\to\omega_{C_K}\to\omega_{C_K}(x)\to\kappa(x)\to0\bigr]\in\operatorname{Ext}^1_{\mathcal O_{C_K}}(\kappa(x),\omega_{C_K}).$$ The local resolution $$0\to A e_u\xrightarrow{\;u\;}A\to\kappa(x)\to0$$ and the lift $1\mapsto u^{-1}du$ compute its restriction as the raw module-Ext cocycle $e_u\mapsto+du$. Let $\epsilon_x$ be the global trace-one point class of [F10]; in this same local Koszul model it is $e_u\mapsto-du$. These are classes in global Ext, not only local cocycles. To justify that the local comparison determines them globally, use [F15]: the point has the locally free resolution $0\to\mathcal O_{C_K}(-x)\to\mathcal O_{C_K}\to\kappa(x)\to0$, so $\mathcal Hom(\kappa(x),\omega_{C_K})=0$, $\mathcal Ext^1(\kappa(x),\omega_{C_K})=\iota_*(\omega_{C_K}(x)|_x)$, and all other sheaf Exts vanish. The sheaf-Ext-to-global-Ext spectral sequence has no higher cohomology on this one-point support; its edge is the natural isomorphism from global $\operatorname{Ext}^1_{\mathcal O_{C_K}}(\kappa(x),\omega_{C_K})$ to the local module Ext. Since it is injective and $e_x$ and $-\epsilon_x$ both restrict to $+du$, $$e_x=-\epsilon_x$$ in global Ext. Now compose with evaluation $q_x:\mathcal O_{C_K}\to\kappa(x)$. By [F16], the positive Yoneda boundary identifies $$\delta_x(u^{-1}du)=e_x\circ q_x=-\epsilon_x\circ q_x\quad\text{in }\operatorname{Ext}^1_{\mathcal O_{C_K}}(\mathcal O_{C_K},\omega_{C_K})=H^1(C_K,\omega_{C_K}).$$ No second $\sigma_1$ is applied to this boundary. The point normalizer and embedding-Gysin compatibility [F10] give fixed trace $1$ on $\epsilon_x\circ q_x$, hence $$t_{C_K}(\delta_x(b\,u^{-1}du))=-b\qquad(b\in K).$$ The point-last ordered Čech lift has boundary coordinate $+u^{-1}du$ by [F11]; its comparison with the fixed Gysin model is precisely the single negative conversion above. On the standard ordered cover of $\mathbb P^1$ this same class is $-(x_0x_1)^{-1}$, agreeing with the fixed Laurent trace. [F10, F11, F15, F16, algebra]

1.5 Let $D$ be any effective Cartier divisor, and write $Q_{\mathcal L,D}:=\mathcal L(D)|_D$ and $Q_{\omega,D}:=\omega_C(D)|_D$. For $s\in H^0(C,\omega_C\otimes\mathcal L^{-1})$, multiplication by $s$ gives a commutative diagram of short exact sequences $$\begin{array}{ccccccccc} 0&\to&\mathcal L&\to&\mathcal L(D)&\to&Q_{\mathcal L,D}&\to&0\\ &&\downarrow s&&\downarrow s&&\downarrow s_D&&\\ 0&\to&\omega_C&\to&\omega_C(D)&\to&Q_{\omega,D}&\to&0. \end{array}$$ The induced connecting-map square commutes: $$\begin{array}{ccc} H^0(C,Q_{\mathcal L,D})&\xrightarrow{\delta_{\mathcal L,D}}&H^1(C,\mathcal L)\\ \downarrow s_D&&\downarrow(\,\cdot\,\cup s)\\ H^0(C,Q_{\omega,D})&\xrightarrow{\delta_{\omega,D}}&H^1(C,\omega_C). \end{array}$$ The right map is cup product with $s$ because it is induced by the sheaf map $\mathcal L\xrightarrow{s}\omega_C$. [F5, algebra]

2.1 The invertible sheaf $\mathcal L$ is finite locally free of rank one by [F4]. Apply [F6] with $X=C$, $n=1$, $E=\mathcal L$ and $q=1$. This gives the functorial perfect pairing $$H^1(C,\mathcal L)\times H^0(C,\mathcal L^\vee\otimes\omega_C) \xrightarrow{\cup}H^1(C,\omega_C)\xrightarrow{t_C}k.$$ The canonical identification $\mathcal L^\vee\otimes\omega_C\cong \omega_C\otimes\mathcal L^{-1}$ follows from [F4, F5]. This proves part (1) over an arbitrary field. [F4, F5, F6, step 1.1]

2.2 The finite separable extension splits after extension to $K$: by [F13], $L\otimes_kK\cong\prod_{\sigma:L\hookrightarrow K}K$, so the base change of $p$ is the disjoint union of rational points $x_\sigma$. Base change of the twisting sequence and naturality of its connecting homomorphism give $$\eta_p\otimes1=\sum_{\sigma:L\hookrightarrow K}\delta_{x_\sigma}\bigl(\sigma(a)\,t_\sigma^{-1}dt_\sigma\bigr).$$ By [F10] the extended fixed trace agrees with the trace on $C_K$. Applying Step 1.4 and then the separable trace formula of [F13] yields $$t_C(\eta_p)=-\sum_\sigma\sigma(a)=-\operatorname{Tr}_{L/k}(a)\ne0.$$ The residue-sum functional has value $+\operatorname{Tr}_{L/k}(a)$ by Step 1.3. Since $H^1(C,\omega_C)$ is one-dimensional by Step 1.2, $\eta_p$ spans it; hence $t_C=-t_C^{\rm res}$ as literal functionals. No scalar is chosen or left undetermined. [F10, F13, step 1.2, step 1.3, step 1.4]

3.1 For $g\in H^0(C,Q_{\mathcal L,D})$, choose local lifts $\widetilde g_p\in\mathcal L(D)_p$ for the finitely many $p\in\operatorname{supp}D$. The lower boundary class is represented by the principal parts $\widetilde g_ps$ of $\omega_C$. Therefore the fixed-trace/residue comparison already proved gives $$\begin{aligned} t_C\bigl(\delta_{\mathcal L,D}(g)\cup s\bigr) &=t_C\bigl(\delta_{\omega,D}(s_Dg)\bigr)\\ &=-\sum_{p\in\operatorname{supp}D}\operatorname{res}_p(\widetilde g_ps)\\ &=-\langle\delta_{\mathcal L,D}(g),s\rangle. \end{aligned}$$ Changing a lift adds a regular differential and leaves its residue unchanged. By [F14], every class of $H^1(C,\mathcal L)$ has such a finite principal-parts representative for some effective $D$, so the equality holds for every $c$. This proves the negative residue realization in part (2). [F8, F9, F14, step 1.2, step 1.3, step 1.4, step 2.2, step 1.5]

4.1 The residue pairing is perfect because it is the negative of the perfect fixed-trace pairing of Step 2.1; multiplication by $-1$ preserves perfectness, bilinearity and functoriality. The dimension identity follows from that pairing, and $\omega_C=\Omega^1_{C/k}$ by [F3]. The Axiom of Choice is used only through the declared suppliers [F1]. [F1, F3, step 2.1, step 3.1] ∎
