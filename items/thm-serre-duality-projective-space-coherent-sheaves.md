---
id: thm-serre-duality-projective-space-coherent-sheaves
kind: theorem
title: Serre duality for coherent sheaves on projective space
status: draft
origin: pipeline
landmark: true
deps:
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - lem-projective-space-top-cohomology-residue-pairing
  - thm-serre-duality-projective-space-twisting-sheaves
  - thm-cohomology-projective-space-twisting-sheaves
  - lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space
  - lem-eventual-global-generation-coherent-twists
  - def-sheaf-ext-for-coherent-modules
  - lem-global-sheaf-ext-long-exact-in-first-variable
  - lem-injective-modules-flasque-and-ext-of-structure-sheaf
  - lem-ringed-space-module-sheaves-enough-injectives
  - thm-flasque-sheaves-acyclic
  - def-sheaf-cohomology-derived-global-sections
  - cor-derived-long-exact-sequence
  - thm-right-derived-functors-form-a-cohomological-delta-functor
  - thm-effaceable-cohomological-delta-functors-are-universal
  - cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-ext-is-hom-in-the-derived-category
  - prop-yoneda-product-is-composition-in-the-derived-category
  - lem-sheaf-cohomology-classes-as-derived-morphisms
  - def-cup-product-sheaf-cohomology
  - def-derived-category-of-an-abelian-category
  - def-invertible-sheaf
  - def-sheaf-hom
  - def-globally-generated-sheaf
  - def-coherent-module-scheme
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - lem-projective-coherent-cohomology-finite-and-vanishing
  - thm-cohomological-dimension-projective-n-space
  - def-very-ample-invertible-sheaf-relative
  - lem-very-ample-implies-ample
  - def-relative-projective-space-standard-charts
  - cor-affine-scheme-quasi-compact
  - def-projective-morphism-pre-proj
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Project, Duality for Schemes"
      url: https://stacks.math.columbia.edu/download/duality.pdf
      locator: "Section 27, Lemmas 27.1, 27.4-27.5 and Remarks 27.2-27.3, 27.6"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry Classes 53-54"
      url: https://math.stanford.edu/~vakil/0506-216/216Cjun2807.pdf
      locator: "Class 53 Sections 1-5 and Class 54 Sections 7, 11; the omitted connecting-morphism computation is supplied here through the derived-category description"
    - title: "R. Hartshorne, Algebraic Geometry"
      url: https://doi.org/10.1007/978-1-4757-3849-0
      locator: "Chapter III, Theorems 7.1, 7.2 and Section 5"
    - title: "J. Schreyer, Sheaves on Schemes (WS 2018/19), Week 9"
      url: https://www.math.uni-sb.de/ag/schreyer/images/PDFs/teaching/ws1819_sheaves/LectureNotes/Week9.pdf
      locator: "Theorem 185: (2) five-lemma argument for Hom(F,omega) x H^n; (3) coeffaceable delta-functor comparison for Ext^i(F,omega) = H^{n-i}(X,F)^dual"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and $n\ge0$, let
$X=\mathbb P^n_k$ with dualizing line bundle $\omega_X=\mathcal O(-n-1)$ and
residue trace $t_X:H^n(X,\omega_X)\to k$
([[def-smooth-projective-dualizing-line-bundle-and-trace]]), and let
$\operatorname{Ext}^q_{\mathcal O_X}$ be the global sheaf Ext of
[[def-sheaf-ext-for-coherent-modules]].

1. **(The pairing.)** For every coherent $\mathcal O_X$-module $F$, every
   $q\in\{0,\dots,n\}$, $\alpha\in\operatorname{Ext}^{n-q}_{\mathcal O_X}(F,\omega_X)$
   and $\eta\in H^q(X,F)$ set
   $$\langle\alpha,\eta\rangle_F\;:=\;t_X\Bigl(\chi^n_{\omega_X}\bigl(\alpha\cdot\chi^q_F{}^{-1}(\eta)\bigr)\Bigr),$$
   where $\chi^q_F:\operatorname{Ext}^q_{\mathcal O_X}(\mathcal O_X,F)\xrightarrow{\ \sim\ }H^q(X,F)$
   is the canonical isomorphism of
   [[lem-injective-modules-flasque-and-ext-of-structure-sheaf]],
   $\chi^q_F{}^{-1}(\eta)$ is the corresponding class in
   $\operatorname{Ext}^q_{\mathcal O_X}(\mathcal O_X,F)$, and
   $\alpha\cdot\beta\in\operatorname{Ext}^n_{\mathcal O_X}(\mathcal O_X,\omega_X)$
   is the Yoneda product of
   $\alpha\in\operatorname{Ext}^{n-q}_{\mathcal O_X}(F,\omega_X)$ with
   $\beta=\chi^q_F{}^{-1}(\eta)$, i.e. composition
   $\alpha\circ\beta$ of derived morphisms under
   $\operatorname{Ext}^{\bullet}_{\mathcal O_X}(-,-)\cong\operatorname{Hom}_{D(\mathrm{Mod}(\mathcal O_X))}(-,-[\bullet])$
   ([[thm-ext-is-hom-in-the-derived-category]],
   [[prop-yoneda-product-is-composition-in-the-derived-category]]). This
   **Serre duality pairing** is $k$-bilinear and natural in $F$.

2. **(Perfectness.)** For every coherent $\mathcal O_X$-module $F$ and every
   $q\in\{0,\dots,n\}$ the pairing
   $$\langle-,-\rangle_F:\operatorname{Ext}^{n-q}_{\mathcal O_X}(F,\omega_X)\times H^q(X,F)\longrightarrow k$$
   is a perfect pairing of $k$-vector spaces, i.e. both adjoint maps
   $\operatorname{Ext}^{n-q}_{\mathcal O_X}(F,\omega_X)\to H^q(X,F)^\vee$ and
   $H^q(X,F)\to\operatorname{Ext}^{n-q}_{\mathcal O_X}(F,\omega_X)^\vee$ are
   isomorphisms.

The case $q=n$ of clause 2 is the classical statement that
$\operatorname{Hom}_{\mathcal O_X}(F,\omega_X)\to H^n(X,F)^\vee$,
$\varphi\mapsto(\eta\mapsto t_X(H^n(\varphi)(\eta)))$, is an isomorphism, and
for $F=\mathcal O_X$ clause 2 recovers $H^{n-q}(X,\omega_X)\cong H^q(X,\mathcal O_X)^\vee$.

## Facts & Assumptions

**Given:** a field $k$, an integer $n\ge0$, the projective space $X=\mathbb P^n_k$ with its twisting sheaves $\mathcal O(e)$, the dualizing line bundle $\omega_X=\mathcal O(-n-1)$, the residue trace $t_X$, the supplied functorial injective resolution data on $\mathrm{Mod}(\mathcal O_X)$ and on $\mathrm{Ab}(X)$ with the induced cohomology functors $H^q(X,-)$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] For every $\mathcal O_X$-module $\mathcal G$ and every $q\ge0$ there is a canonical isomorphism $\chi^q_{\mathcal G}:\operatorname{Ext}^q_{\mathcal O_X}(\mathcal O_X,\mathcal G)\to H^q(X,\mathcal G)$, natural in $\mathcal G$; in degree zero it is evaluation at the unit section. ([[lem-injective-modules-flasque-and-ext-of-structure-sheaf]])

[F2] For a short exact sequence $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ of $\mathcal O_X$-modules and any $\mathcal G$ the injective-resolution Ext fits into a natural long exact sequence $\cdots\to\operatorname{Ext}^q(\mathcal F'',\mathcal G)\to\operatorname{Ext}^q(\mathcal F,\mathcal G)\to\operatorname{Ext}^q(\mathcal F',\mathcal G)\xrightarrow{\partial^q}\operatorname{Ext}^{q+1}(\mathcal F'',\mathcal G)\to\cdots$, natural in the sequence. ([[lem-global-sheaf-ext-long-exact-in-first-variable]])

[F3] For the additive left exact global-sections functor $\Gamma(X,-)$ on abelian sheaves with the supplied injective resolution datum, every short exact sequence $0\to\mathcal A'\to\mathcal A\to\mathcal A''\to0$ of abelian sheaves yields a natural long exact sequence $0\to H^0(\mathcal A')\to H^0(\mathcal A)\to H^0(\mathcal A'')\xrightarrow{\partial}H^1(\mathcal A')\to\cdots$ of the derived functors $H^q(X,-)=R^q\Gamma(X,-)$. ([[cor-derived-long-exact-sequence]], [[def-sheaf-cohomology-derived-global-sections]])

[F4] Under DC and the supplied injective resolution data, $\operatorname{Ext}^n_{\mathcal O_X}(M,N)\cong\operatorname{Hom}_{D(\mathrm{Mod}(\mathcal O_X))}(M,N[n])$ naturally, and the Yoneda splice product of extension classes corresponds to composition of the corresponding derived morphisms, $\beta[p]\circ\alpha$ for $\alpha\in\operatorname{YExt}^p(M,L)$ and $\beta\in\operatorname{YExt}^q(L,N)$; the identification is additive and compatible with identities. ([[thm-ext-is-hom-in-the-derived-category]], [[prop-yoneda-product-is-composition-in-the-derived-category]])

[F5] For $X=\mathbb P^n_k$ and every integer $d$ and every $q$ the evaluation pairing $H^q(X,\mathcal O(d))\times H^{n-q}(X,\mathcal O(-d-n-1))\to k$, $(\alpha,\eta)\mapsto t_X(\alpha\cup\eta)$, formed with the cup product for $\mathcal O(d)\otimes_{\mathbb Z}\mathcal O(-d-n-1)\to\omega_X$, is a perfect pairing; for $q=0$ and $d\ge0$ it is the residue pairing of monomials, i.e. the coefficient of $(x_0\cdots x_n)^{-1}$, and it is compatible with multiplication by homogeneous polynomials. ([[thm-serre-duality-projective-space-twisting-sheaves]], [[lem-projective-space-top-cohomology-residue-pairing]], [[def-cup-product-sheaf-cohomology]])

[F6] For $n\ge1$, $H^q(X,\mathcal O(e))=0$ unless $q=0$ or $q=n$; $H^0(X,\mathcal O(e))=0$ for $e<0$; and $H^n(X,\mathcal O(e))=0$ for $e\ge-n$, while $H^n(X,\mathcal O(e))$ has as a basis the Laurent monomials $x_0^{f_0}\cdots x_n^{f_n}$ with all $f_i<0$ and $\sum_if_i=e$ when $e\le-n-1$. In particular $H^n(X,\mathcal O(e))=0$ for every $e\ge-n$ and $H^q(X,\mathcal O(e))=0$ for $1\le q\le n-1$ and every $e$. For $n=0$, every twist has $H^0=k$ and all positive cohomology is zero. ([[thm-cohomology-projective-space-twisting-sheaves]])

[F7] Every coherent $\mathcal O_X$-module $F$ admits a resolution $0\to F_{n+1}\to\cdots\to F_0\to F\to0$ whose terms $F_i$ are finite direct sums $\bigoplus_j\mathcal O(d_{ij})$ of twisting sheaves, with $F_i=0$ allowed; in particular the last two terms give a presentation $E_1\to E_0\to F\to0$ with $E_0,E_1$ finite direct sums of twisting sheaves whose kernel is coherent. ([[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]])

[F8] The scheme $X=\mathbb P^n_k$ is projective over $k$ in the H-projective convention, the identity being the closed immersion $X\hookrightarrow\mathbb P^n_k$, and it is quasi-compact because the finitely many standard charts $U_0,\dots,U_n$ are affine, hence quasi-compact, and cover it; the twisting sheaf $\mathcal O(1)$ is ample on $X$, since the identity morphism is a quasi-compact immersion exhibiting $X$ as closed H-very ample relative to $\operatorname{Spec}k$ with $\mathcal O(1)\cong\operatorname{id}^*\mathcal O(1)$, so that $\mathcal O(1)$ is ample by [lem-very-ample-implies-ample]. Consequently for every coherent $\mathcal O_X$-module $F$ there is $m_0$ such that $F\otimes_{\mathcal O_X}\mathcal O(m)$ is globally generated for all $m\ge m_0$, and global generation means that the evaluation map $\Gamma(X,F(m))\otimes_{\mathbb Z}\mathcal O_X\to F(m)$, $f\otimes g\mapsto g\cdot f|_U$, is surjective. ([[def-projective-morphism-pre-proj]], [[def-relative-projective-space-standard-charts]], [[cor-affine-scheme-quasi-compact]], [[def-very-ample-invertible-sheaf-relative]], [[lem-very-ample-implies-ample]], [[lem-eventual-global-generation-coherent-twists]], [[def-globally-generated-sheaf]])

[F9] For $\mathcal O_X$-modules, $\mathcal Hom_{\mathcal O_X}(L,M)(U)=\operatorname{Hom}_{\mathcal O_X|_U}(L|_U,M|_U)$ is the internal Hom and $\operatorname{Hom}_{\mathcal O_X}(L,M)=\Gamma(X,\mathcal Hom_{\mathcal O_X}(L,M))$; for an invertible $\mathcal O_X$-module $L$ with dual $L^\vee=\mathcal Hom_{\mathcal O_X}(L,\mathcal O_X)$ there is a canonical isomorphism $\mathcal Hom_{\mathcal O_X}(L,M)\cong L^\vee\otimes_{\mathcal O_X}M$, and tensor product with an invertible sheaf is exact and preserves injective objects. ([[def-sheaf-hom]], [[def-invertible-sheaf]])

[F10] Under the Axiom of Choice the abelian categories $\mathrm{Mod}(\mathcal O_X)$ and $\mathrm{Ab}(X)$ have enough injectives with supplied functorial injective resolutions; every injective $\mathcal O_X$-module is flasque as an abelian sheaf; and a flasque abelian sheaf $\mathcal G$ satisfies $H^q(X,\mathcal G)=0$ for all $q>0$ and is $\Gamma(X,-)$-acyclic. ([[lem-ringed-space-module-sheaves-enough-injectives]], [[lem-injective-modules-flasque-and-ext-of-structure-sheaf]], [[thm-flasque-sheaves-acyclic]], [[cor-derived-long-exact-sequence]])

[F11] Acyclic-resolution theorem and comparison: if $J^\bullet$ is an exact coaugmented complex of $\Gamma(X,-)$-acyclic abelian sheaves resolving $\mathcal G$ with all cycles in the domain of the supplied datum, then under DC there are canonical isomorphisms $H^n(X,\mathcal G)\cong H^n(\Gamma(X,J^\bullet_{\mathrm{del}}))$ for all $n\ge0$; and two injected resolutions give the same derived objects up to canonical natural isomorphism. In ZF, AC implies DC. ([[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]], [[thm-choice-implies-dependent-implies-countable-choice]])

[F12] Sheaf cohomology classes in degree $p$ on a topological space correspond bijectively to derived morphisms $\mathbb Z_X[-p]\to\mathcal F$ in $D(\mathrm{Ab}(X))$, naturally in $\mathcal F$ and additively; the cup product with respect to a tensor pairing is defined by composition of these derived morphisms with the canonical isomorphism $\kappa(p,q)$, the derived tensor product and the pairing. ([[lem-sheaf-cohomology-classes-as-derived-morphisms]], [[def-cup-product-sheaf-cohomology]])

[F13] On a Noetherian scheme the coherent $\mathcal O_X$-modules form an abelian subcategory of the quasi-coherent modules: kernels, cokernels and images of maps of coherent modules are coherent. ([[thm-coherent-sheaves-abelian-noetherian-scheme]])

[F14] Let $A$ be a Noetherian commutative ring, let $X=\mathbb P^n_A$ and let $\mathcal G$ be a coherent $\mathcal O_X$-module. Then $H^q(X,\mathcal G)$ is a finite $A$-module for every $q\ge0$, and for every $q>0$ there is an integer $m_0(\mathcal G,q)$ with $H^q(X,\mathcal G(m))=0$ for all $m\ge m_0$. Every quasi-coherent module on $\mathbb P^n_A$ has $H^q=0$ for $q>n$. In particular, for $A=k$ a field every $H^q(X,\mathcal G)$ is a finite-dimensional $k$-vector space, and every space of global sections $\Gamma(X,\mathcal G)=H^0(X,\mathcal G)$ of a coherent $\mathcal G$ is finite-dimensional over $k$. ([[lem-projective-coherent-cohomology-finite-and-vanishing]], [[thm-cohomological-dimension-projective-n-space]])

[F15] On the category $\mathrm{Mod}(\mathcal O_X)$, both $G\mapsto\operatorname{Ext}^q_{\mathcal O_X}(\mathcal O_X,G)$ and the restriction of $G\mapsto H^q(X,G)$ from abelian sheaves are cohomological delta functors. The former is effaced by injective $\mathcal O_X$-modules by its injective-resolution construction; the latter is effaced by the same modules because they are flasque as abelian sheaves [F10]. Both are therefore universal, and their degree-zero functors are the same global-sections functor. The unique comparison extending the degree-zero identity is a morphism of delta functors, so it commutes with the connecting maps; the maps $\chi^q_G$ of [F1], computed on the same $\mathcal O_X$-injective resolutions by the identical complexes $\Gamma(X,I_G^\bullet)$ using [F10,F11], are this comparison. ([[thm-right-derived-functors-form-a-cohomological-delta-functor]], [[thm-effaceable-cohomological-delta-functors-are-universal]], [[cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic]])

**Given:** additionally a coherent $\mathcal O_X$-module $F$ and the functorial $\mathcal O_X$-injective resolutions used to form the Ext groups.

## Proof

1.1 If $n=0$, then $X=\operatorname{Spec}k$ and every twist is a one-dimensional trivial bundle by [F6]. A coherent sheaf is a finite-dimensional vector space $V$, $\omega_X\cong k$ and the stated trace is the identity. The only asserted degree is $q=0$, and the pairing is $\operatorname{Hom}_k(V,k)\times V\to k$, $(\varphi,v)\mapsto\varphi(v)$. It is natural and perfect by a basis and its dual basis, including $V=0$. This proves the complete statement for $n=0$. In steps 1.2–8.1 assume $n\ge1$. [F1, F6, given, algebra]

1.2 The pairing is well defined and bilinear. By [F1] the maps $\chi^q_{\mathcal G}$ are canonical isomorphisms, so $\chi^q_F{}^{-1}(\eta)$ is a well-defined class in $\operatorname{Ext}^q_{\mathcal O_X}(\mathcal O_X,F)$; by [F4] the Yoneda product with $\alpha$ is the composition of derived morphisms and is additive in each variable, so $\alpha\cdot\chi^q_F{}^{-1}(\eta)$ is a well-defined class in $\operatorname{Ext}^n_{\mathcal O_X}(\mathcal O_X,\omega_X)$; applying $\chi^n_{\omega_X}$ and the $k$-linear trace $t_X$ gives an element of $k$. These maps are additive, and multiplication by any $\lambda\in k$ on $F$ or $\omega_X$ commutes with the Yoneda composition by naturality [F4]; because $t_X$ is $k$-linear, the pairing is $k$-bilinear. Naturality in $F$: a morphism $u:F\to F'$ of coherent modules induces $H^q(X,u):H^q(X,F)\to H^q(X,F')$ and the pullback $u^*:\operatorname{Ext}^{n-q}(F',\omega_X)\to\operatorname{Ext}^{n-q}(F,\omega_X)$ given by precomposition, and the square expressing $\langle u^*\alpha,\eta\rangle_F=\langle\alpha,H^q(u)\eta\rangle_{F'}$ commutes because $\chi^q$ is natural in the sheaf variable by [F1] and composition of derived morphisms is associative by [F4]. [F1, F4, A1, construct]

1.3 Relative local computation for a line bundle. Let $L$ be an invertible $\mathcal O_X$-module with dual $L^\vee$ and let $\omega_X\to I^\bullet$ be the functorial $\mathcal O_X$-injective resolution. By [F9] there is a canonical isomorphism $\operatorname{Hom}_{\mathcal O_X}(L,M)\cong\Gamma(X,L^\vee\otimes M)$ for every $\mathcal O_X$-module $M$, so degreewise $$\operatorname{Hom}_{\mathcal O_X}(L,I^p)\cong\Gamma(X,L^\vee\otimes I^p).$$ Each $L^\vee\otimes I^p$ is injective in $\mathrm{Mod}(\mathcal O_X)$ because tensor product with the invertible sheaf $L^\vee$ is exact with exact inverse and carries injectives to injectives [F9], and the complex $L^\vee\otimes I^\bullet$ is the coaugmented exact complex $\omega_X\otimes L^\vee\to L^\vee\otimes I^\bullet$; from [F10] and [F11] applied to the underlying abelian sheaves (injective $\mathcal O_X$-modules are flasque, and flasque sheaves are $\Gamma$-acyclic) it computes the cohomology of $\omega_X\otimes L^\vee$. Hence $$\operatorname{Ext}^j_{\mathcal O_X}(L,\omega_X)\cong H^j\bigl(X,\omega_X\otimes L^\vee\bigr)\qquad(j\ge0),$$ canonically. For $L=\mathcal O(e)$ and $e=-d$ this reads $\operatorname{Ext}^j_{\mathcal O_X}(\mathcal O(-d),\omega_X)\cong H^j(X,\mathcal O(d-n-1))$, which vanishes for every $j\ge1$ and every $d\ge1$ by [F6]. [F6, F9, F10, F11, construct]

2.1 Description by composition in the derived category. Under the identifications of [F4] the pairing reads as follows: $\alpha$ corresponds to a morphism $\tilde\alpha:F\to\omega_X[n-q]$ in $D(\mathrm{Mod}(\mathcal O_X))$ and $\chi^q_F{}^{-1}(\eta)$ corresponds to a morphism $\tilde\eta:\mathcal O_X\to F[q]$; their Yoneda product corresponds to the composite $\tilde\alpha[q]\circ\tilde\eta:\mathcal O_X\to\omega_X[n]$; applying the identification $\operatorname{Ext}^n_{\mathcal O_X}(\mathcal O_X,\omega_X)\cong H^n(X,\omega_X)$ of [F1] and the trace gives $$\langle\alpha,\eta\rangle_F=t_X\circ\chi^n_{\omega_X}\bigl(\tilde\alpha[q]\circ\tilde\eta\bigr).$$ In particular the pairing depends only on the two classes and not on the choices of resolutions, and it is natural in $F$ in the sense of step 1.2. [F1, F4, step 1.2]

2.2 Adjoint maps. For $j\in\{0,\dots,n\}$ and a coherent $F$ let $$\Phi^j_F:\operatorname{Ext}^j_{\mathcal O_X}(F,\omega_X)\longrightarrow H^{n-j}(X,F)^\vee,\qquad \Phi^j_F(\alpha)(\eta):=\langle\alpha,\eta\rangle_F,$$ be the first adjoint map of the pairing in degree $q=n-j$. By step 1.2 these are $k$-linear, and for $j=0$ the identifications $\operatorname{Ext}^0=\operatorname{Hom}$ and $\chi^n_{\omega_X}$ show that $$\Phi^0_F(\varphi)(\eta)=t_X\bigl(H^n(X,\varphi)(\eta)\bigr),$$ the trace map of the classical statement: a morphism $\varphi:F\to\omega_X$ induces $H^n(X,\varphi)$ on cohomology by [F3] and therefore the stated functional. [F1, F3, step 1.2, construct]

3.1 The case of a single twisting sheaf. Let $e\in\mathbb Z$ and put $d=-e-n-1$, so that $\omega_X(-e)=\mathcal O(-n-1-e)=\mathcal O(d)$ and $\mathcal O(-d-n-1)=\mathcal O(e)$. Under the canonical isomorphism $\operatorname{Hom}_{\mathcal O_X}(\mathcal O(e),\omega_X)\cong\Gamma(X,\omega_X(-e))=H^0(X,\mathcal O(d))$ of [F9] a morphism $\varphi:\mathcal O(e)\to\omega_X$ corresponds to the global section $s$ giving multiplication by $s$, and the induced map $H^n(X,\varphi):H^n(X,\mathcal O(e))\to H^n(X,\omega_X)$ is the cup product $H^0(X,\mathcal O(d))\times H^n(X,\mathcal O(e))\to H^n(X,\omega_X)$ of [F12] with the global section $s$; this is the composite $H^n(X,\mathcal O(e))\to H^n(X,\mathcal O(d)\otimes\mathcal O(e))=H^n(X,\omega_X)$ under the canonical isomorphism $\mathcal O(d)\otimes\mathcal O(e)\cong\omega_X$. Therefore $\Phi^0_{\mathcal O(e)}$ is, under these identifications, the pairing of [F5] in degree $q=0$ and with twist $e$, namely $H^0(X,\mathcal O(d))\times H^n(X,\mathcal O(-d-n-1))\to k$, which is perfect: for $d\ge0$ it is the residue pairing of [F5], and for $d<0$ both spaces are zero by [F6]. Hence $\Phi^0_{\mathcal O(e)}$ is an isomorphism for every $e$. [F5, F6, F9, F12, step 2.2]

3.2 Compatibility with connecting maps. Let $0\to K\to P\to F\to0$ be a short exact sequence of coherent $\mathcal O_X$-modules, with connecting maps $\partial^j:\operatorname{Ext}^j(K,\omega_X)\to\operatorname{Ext}^{j+1}(F,\omega_X)$ from [F2] and $\delta^m:H^m(X,F)\to H^{m+1}(X,K)$ from [F3]. For $j\ge0$ and $m=n-j-1\ge0$, the identity is $$\langle\partial^j\alpha,\eta\rangle_F=\langle\alpha,\delta^m\eta\rangle_K\qquad(\alpha\in\operatorname{Ext}^j(K,\omega_X),\ \eta\in H^m(X,F));$$ when $m<0$ both sides are vacuous. To prove it, work throughout in $D(\mathrm{Mod}(\mathcal O_X))$, where the short exact sequence gives a triangle $K\to P\to F\xrightarrow{\gamma}K[1]$. Under [F4] the Ext boundary sends $\tilde\alpha:K\to\omega_X[j]$ to $\tilde\alpha[1]\circ\gamma:F\to\omega_X[j+1]$. Put $\tilde\eta=\chi_F^m{}^{-1}(\eta)$, viewed by [F4] as a morphism $\mathcal O_X\to F[m]$. The comparison [F15] commutes with connecting maps, so $\chi_K^{m+1}{}^{-1}(\delta^m\eta)$ is represented by $\gamma[m]\circ\tilde\eta:\mathcal O_X\to K[m+1]$. The left Yoneda product in the pairing is therefore $(\tilde\alpha[1]\circ\gamma)[m]\circ\tilde\eta=\tilde\alpha[m+1]\circ\gamma[m]\circ\tilde\eta$, which is exactly the right Yoneda product. Applying $\chi^n_{\omega_X}$ and $t_X$ proves the identity without mixing derived categories of modules and abelian sheaves. [F1, F2, F3, F4, F15, step 2.1]

4.1 Finite sums of twists. For a finite direct sum $P=\bigoplus_{i}\mathcal O(e_i)$ the Hom module is the direct sum $\bigoplus_i\operatorname{Hom}(\mathcal O(e_i),\omega_X)$, cohomology is the direct sum $\bigoplus_iH^n(X,\mathcal O(e_i))$, and the pairing is the orthogonal sum of the pairings of step 3.1, so $\Phi^0_P$ is an isomorphism as a direct sum of isomorphisms; the same isomorphisms of steps 1.3 and [F6] give $$\operatorname{Ext}^j_{\mathcal O_X}(P,\omega_X)=0\quad(j\ge1)\qquad\text{and}\qquad H^{n-j}(X,P)=0\quad(1\le j\le n)$$ whenever every $\mathcal O(e_i)$ satisfies $e_i\le-1$, in particular for $P=\bigoplus_i\mathcal O(-d_i)$ with all $d_i\ge1$. [F6, step 1.3, step 3.1]

4.2 The compatibility square. With the notation of step 3.2 and $0\le j<n$, the connecting map relevant to the pairing is $\delta^{n-j-1}:H^{n-j-1}(X,F)\to H^{n-j}(X,K)$. Its linear dual has the direction $(\delta^{n-j-1})^\vee:H^{n-j}(X,K)^\vee\to H^{n-j-1}(X,F)^\vee$. The identity of step 3.2 says that the square $$\begin{matrix}\operatorname{Ext}^{j}(K,\omega_X)&\xrightarrow{\ \partial^j\ }&\operatorname{Ext}^{j+1}(F,\omega_X)\\ \downarrow\scriptstyle{\Phi^j_K}&&\downarrow\scriptstyle{\Phi^{j+1}_F}\\ H^{n-j}(X,K)^\vee&\xrightarrow{\ (\delta^{n-j-1})^\vee\ }&H^{n-j-1}(X,F)^\vee\end{matrix}$$ commutes. This step asserts commutativity only; additional vanishing hypotheses are needed to make the horizontal maps isomorphisms. [step 2.2, step 3.2]

5.1 Degree zero for all coherent modules. By [F7] choose a right-exact presentation $E_1\xrightarrow{\psi}E_0\to F\to0$ with $E_0,E_1$ finite sums of twists. Put $K=\ker(E_0\to F)$ and $L=\ker(E_1\to K)$; both are coherent by [F13], and the presentation splits into the two genuine short exact sequences $0\to K\to E_0\to F\to0$ and $0\to L\to E_1\to K\to0$. Contravariant left exactness gives $$0\to\operatorname{Hom}(F,\omega_X)\to\operatorname{Hom}(E_0,\omega_X)\xrightarrow{\psi^*}\operatorname{Hom}(E_1,\omega_X),$$ exact because a map $E_0\to\omega_X$ killed by precomposition with $\psi$ kills $K=\operatorname{im}\psi$ and therefore factors uniquely through $F$. By [F14], $H^{n+1}(X,L)=H^{n+1}(X,K)=0$. The long exact sequence of $0\to L\to E_1\to K\to0$ thus makes $H^n(E_1)\to H^n(K)$ surjective; that of $0\to K\to E_0\to F\to0$ makes $H^n(E_0)\to H^n(F)$ surjective. Composing the two exact segments proves $$H^n(X,E_1)\xrightarrow{H^n(\psi)}H^n(X,E_0)\to H^n(X,F)\to0$$ is exact. Dualizing over $k$ yields $$0\to H^n(X,F)^\vee\to H^n(X,E_0)^\vee\xrightarrow{H^n(\psi)^\vee}H^n(X,E_1)^\vee.$$ Naturality of $\Phi^0$ from step 1.2 gives a commutative diagram between these two left-exact rows. The vertical maps for $E_0,E_1$ are isomorphisms by step 4.1, so the induced map between their kernels, $\Phi^0_F$, is an isomorphism. This argument uses the two short exact sequences above and never treats $E_1\to E_0\to F\to0$ as short exact. [F3, F7, F13, F14, step 1.2, step 4.1]

5.2 Effacing presentations. Let $F$ be coherent. By [F8] there is $m\ge1$ with $F(m)$ globally generated, so that the evaluation map $\Gamma(X,F(m))\otimes_{\mathbb Z}\mathcal O_X\to F(m)$ is surjective. By [F14] the $k$-vector space $\Gamma(X,F(m))$ is finite-dimensional; choose a $k$-basis $s_1,\dots,s_N$. Since every $f\in\Gamma(X,F(m))$ is a $k$-linear combination $f=\sum_ic_is_i$ with $c_i\in k$, the evaluation map factors through the morphism $\sigma:\mathcal O_X^{\oplus N}\to F(m)$, $(g_1,\dots,g_N)\mapsto\sum_ig_is_i$, and $f\otimes g\mapsto\sigma((c_1g,\dots,c_Ng))$ on $U$; as the evaluation map is surjective, so is $\sigma$. Twisting by the invertible sheaf $\mathcal O_X(-m)$ is exact by [F9], so $\sigma\otimes\mathcal O_X(-m)$ is a surjection $P:=\mathcal O_X(-m)^{\oplus N}\to F$ with $m\ge1$. Its kernel $K$ is coherent by [F13], so $K$ is again of the kind considered. By step 1.3 with $d=m\ge1$ and [F6], $\operatorname{Ext}^j_{\mathcal O_X}(\mathcal O(-m),\omega_X)\cong H^j(X,\mathcal O(m-n-1))=0$ for every $j\ge1$ since $m-n-1\ge-n$, and $H^0(X,\mathcal O(-m))=0$ since $-m<0$; hence by step 4.1, $P$ has $$\operatorname{Ext}^j_{\mathcal O_X}(P,\omega_X)=0\quad(j\ge1)\qquad\text{and}\qquad H^{n-j}(X,P)=0\quad(1\le j\le n).$$ [F6, F8, F9, F13, F14, step 1.3, step 4.1, construct]

6.1 Degree-one case from an effacing presentation, with $n\ge1$. Let $0\to K\to P\xrightarrow{\pi}F\to0$ be as in step 5.2. From the long exact sequences of [F2] and [F3] and the vanishing of step 5.2 we obtain exact sequences $$\operatorname{Hom}(P,\omega_X)\xrightarrow{\ \pi^*\ }\operatorname{Hom}(K,\omega_X)\xrightarrow{\ \partial^0\ }\operatorname{Ext}^1(F,\omega_X)\to0,$$ $$H^{n-1}(X,K)\to H^{n-1}(X,P)=0\to H^{n-1}(X,F)\xrightarrow{\ \delta^{n-1}\ }H^n(X,K)\to H^n(X,P),$$ where the vanishing $\operatorname{Ext}^1(P,\omega_X)=0$ and $H^{n-1}(X,P)=0$ are those of step 5.2. Dualizing the second gives the exact sequence $$H^n(X,P)^\vee\to H^n(X,K)^\vee\xrightarrow{\ (\delta^{n-1})^\vee\ }H^{n-1}(X,F)^\vee\to0.$$ By step 4.2 the square relating $\partial^0$ and $\delta^{n-1}$ commutes, and both $\Phi^0_P$ and $\Phi^0_K$ are isomorphisms by step 5.1; passing to cokernels, $\Phi^1_F$ is the induced isomorphism $$\operatorname{Ext}^1(F,\omega_X)\cong\operatorname{coker}(\pi^*)\xrightarrow{\ \sim\ }\operatorname{coker}\bigl(H^n(X,P)^\vee\to H^n(X,K)^\vee\bigr)\cong H^{n-1}(X,F)^\vee,$$ so $\Phi^1_F$ is an isomorphism. [F2, F3, step 4.2, step 5.1, step 5.2]

6.2 Higher degrees by the dimension shift. Let $2\le j\le n$ and let $0\to K\to P\to F\to0$ be as in step 5.2. Since $\operatorname{Ext}^{j-1}(P,\omega_X)=\operatorname{Ext}^j(P,\omega_X)=0$ by step 5.2 and $H^{n-j}(X,P)=H^{n-j+1}(X,P)=0$ because $n-j+1\le n-1$, the exact sequences of [F2] and [F3] give isomorphisms $$\partial^{j-1}:\operatorname{Ext}^{j-1}(K,\omega_X)\xrightarrow{\ \sim\ }\operatorname{Ext}^j(F,\omega_X),\qquad \delta^{n-j}:H^{n-j}(X,F)\xrightarrow{\ \sim\ }H^{n-j+1}(X,K).$$ By the compatibility square of step 4.2 the diagram $$\begin{matrix}\operatorname{Ext}^{j-1}(K,\omega_X)&\xrightarrow{\ \sim\ }&\operatorname{Ext}^{j}(F,\omega_X)\\ \downarrow\scriptstyle{\Phi^{j-1}_K}&&\downarrow\scriptstyle{\Phi^{j}_F}\\ H^{n-j+1}(X,K)^\vee&\xrightarrow{\ \sim\ }&H^{n-j}(X,F)^\vee\end{matrix}$$ commutes with isomorphisms in the horizontal directions; hence $\Phi^j_F$ is an isomorphism if and only if $\Phi^{j-1}_K$ is. [F2, F3, step 4.2, step 5.2]

7.1 Induction. We prove by induction on $j=0,\dots,n$ that $\Phi^j_F$ is an isomorphism for every coherent $\mathcal O_X$-module $F$. The case $j=0$ is step 5.1. Assume the statement known for $j-1$ and let $F$ be coherent; if $F=0$ both sides vanish, and otherwise step 5.2 supplies an effacing presentation $0\to K\to P\to F\to0$ with $K$ coherent. For $j=1$ the claim is step 6.1, and for $j\ge2$ it is step 6.2 combined with the induction hypothesis applied to the coherent module $K$. [step 5.1, step 6.1, step 6.2]

8.1 Perfectness. Let $F$ be coherent and $q\in\{0,\dots,n\}$, and put $j=n-q$, so that $\Phi^{n-q}_F:\operatorname{Ext}^{n-q}(F,\omega_X)\to H^q(X,F)^\vee$ is an isomorphism by step 7.1. By [F14] the $k$-vector space $H^q(X,F)$ is finite-dimensional, so the transpose $\Phi^{n-q\vee}_F$ is an isomorphism and the second adjoint map $H^q(X,F)\to\operatorname{Ext}^{n-q}(F,\omega_X)^\vee$ is the composite of $\Phi^{n-q\vee}_F$ with the double-duality isomorphism of finite-dimensional vector spaces, which is an isomorphism; hence both adjoint maps of the pairing are isomorphisms and the pairing is perfect. For $q=n$ this is the classical $j=0$ case of step 5.1; for $q=0$ it is the dual statement that $\operatorname{Ext}^n(F,\omega_X)\cong H^0(X,F)^\vee$, and for $F=\mathcal O_X$ it specializes by step 1.3 to $\operatorname{Ext}^{n-q}(\mathcal O_X,\omega_X)\cong H^{n-q}(X,\omega_X)\cong H^q(X,\mathcal O_X)^\vee$. [F1, F14, step 1.3, step 5.1, step 7.1]

9.1 Boundary cases and the Axiom of Choice. If $F=0$ both sides of the pairing are zero for every $q$, so the pairing is perfect vacuously, in agreement with step 7.1. If $n=0$ then $X=\operatorname{Spec}k$, $\omega_X=\mathcal O_X$ and $t_X$ is the identity $k\to k$ under the convention of [[def-smooth-projective-dualizing-line-bundle-and-trace]]; a coherent $\mathcal O_X$-module is a finite-dimensional $k$-vector space $V$, $\operatorname{Ext}^0(V,\mathcal O_X)=V^\vee$ and the pairing is the evaluation $V^\vee\times V\to k$, which is perfect, and [F6] gives $H^q=0$ for $q>0$. If $q=0$ and $n\ge1$ clause 2 reads $\operatorname{Ext}^n(F,\omega_X)\cong H^0(X,F)^\vee$, and if $q=n$ it reads $\operatorname{Hom}(F,\omega_X)\cong H^n(X,F)^\vee$; both are the two ends of the same comparison by step 7.1. If $F$ is a finite direct sum of twisting sheaves the statement is step 3.1 with step 4.1, and the general coherent case is obtained from it by the effacing presentations of step 5.2, so no hypothesis on $F$ beyond coherence is used. Finally, the Axiom of Choice [A1] is assumed in the statement and is used exactly through the functorial injective resolution data of [F10] for modules and abelian sheaves, through the Dependent Choice instances of [F11] used in step 1.3, through the DC hypotheses of the derived-category identifications [F4] used in steps 2.1, 2.2 and 3.2, and through [F12]; the only selection made beyond the functorial data is the finite $k$-basis of $\Gamma(X,F(m))$ chosen in step 5.2, which is finite choice and hence available in ZF, all other constructions being canonical from the fixed data. The comparison of the connecting maps is proved within the module derived category in step 3.2 using the delta-functor compatibility established in [F15]. [A1, F4, F10, F11, F12, step 1.3, step 3.2, step 5.2, step 8.1] ∎
