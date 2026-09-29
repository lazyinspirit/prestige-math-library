---
id: lem-regular-immersion-local-to-global-ext-collapse
kind: lemma
title: Local-to-global Ext collapse for a regular immersion
status: draft
origin: pipeline
landmark: false
deps:
  - lem-regular-immersion-koszul-ext-sheaf
  - def-sheaf-ext-for-coherent-modules
  - def-sheaf-hom
  - thm-hom-is-left-exact-in-each-variable
  - thm-grothendieck-spectral-sequence
  - lem-closed-immersion-cohomology-pushforward
  - lem-ringed-space-module-sheaves-enough-injectives
  - thm-abelian-sheaves-have-enough-injectives
  - thm-choice-implies-dependent-implies-countable-choice
  - def-extension-by-zero-abelian-sheaf
  - thm-extension-by-zero-adjunction-exactness
  - def-flasque-sheaf
  - thm-flasque-sheaves-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-ext-is-hom-in-the-derived-category
  - def-sheaf-cohomology-derived-global-sections
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Duality for Schemes"
      url: https://stacks.math.columbia.edu/download/duality.pdf
      locator: "§27, Lemmas 28.1, 27.4-27.5 and Remarks 27.2-27.3, 27.6 (local-to-global spectral sequence for sheaf Ext)"
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "§§20.8, 20.12-20.13, 20.27 (flasque acyclicity and the acyclic-resolution comparison)"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $X$ be a smooth finite-type
$k$-scheme of pure dimension $n$, let $i:X\hookrightarrow\mathbb P^N_k$ be a
closed immersion over $k$ of pure codimension $c=N-n$ with ideal sheaf
$\mathcal I$, and let $E$ be a finite locally free $\mathcal O_X$-module with
dual $E^\vee=\mathcal H om_{\mathcal O_X}(E,\mathcal O_X)$. Let $\omega_X$ and
$\omega_{\mathbb P^N}$ be the dualizing line bundles of
[[def-smooth-projective-dualizing-line-bundle-and-trace]]. Then for every
$j\ge0$ there is a canonical isomorphism of abelian groups
$$\operatorname{Ext}^{c+j}_{\mathcal O_{\mathbb P^N}}\bigl(i_*E,\omega_{\mathbb P^N}\bigr)\;\cong\;H^j\bigl(X,\,E^\vee\otimes_{\mathcal O_X}\omega_X\bigr),$$
natural in $E$, where $\operatorname{Ext}$ is the global Ext of
[[def-sheaf-ext-for-coherent-modules]] and $H^j$ is sheaf cohomology. In
particular $\operatorname{Ext}^{q}_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})=0$
for every $q<c$. The displayed isomorphism has the **normalized orientation**:
the one-row local-to-global Ext edge followed by the Koszul determinant
identification of [[lem-regular-immersion-koszul-ext-sheaf]] is multiplied
exactly once by $\sigma_c=(-1)^{c(c+1)/2}$. This fixes the comparison with
the ordered Laurent trace on projective space.

## Facts & Assumptions

**Given:** a field $k$, a smooth finite-type $k$-scheme $X$ of pure dimension $n$, a closed immersion $i:X\hookrightarrow\mathbb P^N_k$ over $k$ of pure codimension $c=N-n$ with ideal sheaf $\mathcal I$, a finite locally free $\mathcal O_X$-module $E$, the dualizing line bundles $\omega_X$ and $\omega_{\mathbb P^N}$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The internal Hom sheaf is $\mathcal Hom_{\mathcal O_Y}(\mathcal F,\mathcal G)(U)=\operatorname{Hom}_{\mathcal O_Y|_U}(\mathcal F|_U,\mathcal G|_U)$ with restriction of morphisms and the $\mathcal O_Y$-module structure given by pre- and post-composition; in particular $\mathcal Hom_{\mathcal O_Y}(\mathcal F,\mathcal G)(Y)=\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,\mathcal G)$. Since a morphism of sheaves is zero, and lands in a subsheaf, exactly when its germs are so, while $\operatorname{Hom}$ is additive and left exact in each variable, the functor $\mathcal Hom_{\mathcal O_Y}(\mathcal F,-)$ is additive and left exact. ([[def-sheaf-hom]], [[thm-hom-is-left-exact-in-each-variable]])

[F2] With an $\mathcal O_Y$-injective resolution $\mathcal G\to I^\bullet$ one defines $\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F,\mathcal G)=H^q(\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,I^\bullet))$ and $\mathcal Ext^q_{\mathcal O_Y}(\mathcal F,\mathcal G)=H^q(\mathcal Hom_{\mathcal O_Y}(\mathcal F,I^\bullet))$, both independent of the chosen resolution up to canonical isomorphism, with $\operatorname{Ext}^0=\operatorname{Hom}$ and $\mathcal Ext^0=\mathcal Hom$. ([[def-sheaf-ext-for-coherent-modules]])

[F3] In the situation of the statement, $\mathcal Ext^q_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})=0$ for $q\ne c$ and $\mathcal Ext^c_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})\cong i_*(E^\vee\otimes_{\mathcal O_X}\omega_X)$, and the isomorphism in degree $c$ is natural in $E$. ([[lem-regular-immersion-koszul-ext-sheaf]])

[F4] Grothendieck spectral sequence: for additive left exact functors $F:\mathcal A\to\mathcal B$ and $G:\mathcal B\to\mathcal C$ with enough injectives in $\mathcal A$ and $\mathcal B$, such that $F$ carries injectives to $G$-acyclic objects, and with supplied injective and Cartan-Eilenberg resolutions and compatible comparison data, there is a natural first-quadrant spectral sequence $E_2^{p,q}=R^pG(R^qF(A))\Rightarrow R^{p+q}(GF)(A)$, with differentials of bidegree $(r,1-r)$, strong convergence and finite decreasing filtration $\operatorname{gr}^pH^n=E_\infty^{p,n-p}$. ([[thm-grothendieck-spectral-sequence]])

[F5] For a closed immersion $i:Z\to W$ of schemes and a quasi-coherent $\mathcal O_Z$-module $\mathcal F$ there is for every $q\ge0$ a canonical isomorphism $H^q(Z,\mathcal F)\cong H^q(W,i_*\mathcal F)$. ([[lem-closed-immersion-cohomology-pushforward]])

[F6] Under the Axiom of Choice the abelian category $\mathrm{Mod}(\mathcal O_Y)$ on a ringed space $Y$ has enough injectives and one supplied functorial injective resolution of every module; likewise $\mathrm{Ab}(X)$ has enough injectives with a supplied injective resolution datum; and in ZF the Axiom of Choice implies the Axiom of Dependent Choice, the choice principle used by the acyclic-resolution comparison of [F9]. ([[lem-ringed-space-module-sheaves-enough-injectives]], [[thm-abelian-sheaves-have-enough-injectives]], [[thm-choice-implies-dependent-implies-countable-choice]])

[F7] Extension by zero: for an open inclusion $o:U\hookrightarrow X$ of topological spaces and an abelian sheaf $\mathcal F$ on $U$, $(o_!\mathcal F)(V)=\{s\in\mathcal F(V\cap U):\operatorname{Supp}(s)\text{ is closed in }V\}$; there is a natural bijection $\operatorname{Hom}_X(o_!\mathcal F,\mathcal G)\cong\operatorname{Hom}_U(\mathcal F,o^{-1}\mathcal G)$, and $o_!$ is exact on sheaves of abelian groups. ([[def-extension-by-zero-abelian-sheaf]], [[thm-extension-by-zero-adjunction-exactness]])

[F8] A sheaf of abelian groups is flasque when every restriction $\mathcal F(V)\to\mathcal F(U)$ for open $U\subseteq V$ is surjective, and a flasque abelian sheaf on a space $X$ satisfies $H^q(U,\mathcal F|_U)=0$ for every open $U\subseteq X$ and every $q>0$. ([[def-flasque-sheaf]], [[thm-flasque-sheaves-acyclic]])

[F9] Acyclic-resolution theorem: if $F:\mathcal A\to\mathcal B$ is additive and left exact, $I$ is a supplied injective resolution datum on a class $\mathcal D$, and $0\to A\to J^0\to J^1\to\cdots$ is an $F$-acyclic resolution of $A$ with $A$ and the cycles $Z^q$ lying in $\mathcal D$, then under the Axiom of Dependent Choice there is a canonical isomorphism $R_I^nF(A)\cong H^n(F(J^\bullet_{\mathrm{del}}))$ for every $n\ge0$. ([[thm-acyclic-resolution-theorem-for-right-derived-functors]])

[F10] Sheaf cohomology $H^q(X,-)$ is the right derived functor of the additive left exact global-sections functor relative to the supplied injective resolution datum of [F6], independent of that datum up to a canonical natural isomorphism whose comparison uses the Axiom of Dependent Choice, which follows from AC. ([[def-sheaf-cohomology-derived-global-sections]])

[F11] Under DC, classical Ext computed from supplied projective or injective resolutions is naturally isomorphic to derived Hom; when both resolutions exist the two comparisons agree through the mixed Hom complex. The signs needed below are calculated in step 1.3, rather than asserted as part of this supplier's Statement. ([[thm-ext-is-hom-in-the-derived-category]])

**Proof technique:** direct: form the composite of the internal-Hom functor $\mathcal Hom(i_*E,-)$ with global sections, verify the acyclicity hypothesis of the Grothendieck spectral sequence by showing that internal Hom into an injective module is flasque (via extension by zero for module sheaves), apply the spectral sequence, and combine its degeneration, forced by the Koszul concentration of the sheaf Ext in codimension $c$, with the closed-immersion pushforward isomorphism for cohomology.

## Proof

1.1 The functors and their derived objects. Let $F=\mathcal Hom_{\mathcal O_{\mathbb P^N}}(i_*E,-)$ and $G=\Gamma(\mathbb P^N,-)$. By [F1] the functor $F$ is additive and left exact, and by [F10] the global-sections functor $G$ is additive and left exact; the composite $GF$ sends an $\mathcal O_{\mathbb P^N}$-module $\mathcal M$ to $\operatorname{Hom}_{\mathcal O_{\mathbb P^N}}(i_*E,\mathcal M)$, because global sections of the internal Hom are the Hom group. With the supplied injective resolution datum of [F6] in $\mathrm{Mod}(\mathcal O_{\mathbb P^N})$, the definitions of [F2] identify $R^qF(\mathcal M)=\mathcal Ext^q_{\mathcal O_{\mathbb P^N}}(i_*E,\mathcal M)$ and $R^q(GF)(\omega_{\mathbb P^N})=\operatorname{Ext}^q_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})$ for every $q\ge0$. [F1, F2, F6, F10, given]

1.2 Extension by zero for $\mathcal O$-modules and its adjunction. Let $o:W\hookrightarrow T$ be an open immersion of ringed spaces and let $\mathcal G$ be an $\mathcal O_W$-module. Define $o_!\mathcal G$ by the formula of [F7] applied to the underlying abelian sheaf, that is $(o_!\mathcal G)(V)=\{s\in\mathcal G(V\cap W):\operatorname{Supp}(s)\text{ is closed in }V\}$ for open $V\subseteq T$, with the $\mathcal O_T(V)$-module structure induced by the ring map $\mathcal O_T(V)\to\mathcal O_W(V\cap W)$. The support condition is stable under multiplication by functions and compatible with restrictions, so $o_!\mathcal G$ is a sheaf of $\mathcal O_T$-modules whose underlying abelian sheaf is exactly the extension by zero of the underlying abelian sheaf of $\mathcal G$. Consequently $o_!$ is exact on $\mathcal O$-modules: the forgetful functor from $\mathcal O_T$-modules to abelian sheaves preserves kernels and cokernels, so a short exact sequence of $\mathcal O$-modules has a short exact underlying sequence of abelian sheaves, exact by [F7]. The transposition of [F7] preserves $\mathcal O$-linearity in both directions: it sends an $\mathcal O_T$-linear morphism to the family of its components over opens inside $W$, which are $\mathcal O_W$-linear, and it sends an $\mathcal O_W$-linear morphism $\Psi$ to the morphism whose section over an open $V\subseteq T$ is the gluing of $\Psi(s|_{V\cap W})$ with the zero sections near $V\setminus W$, which is $\mathcal O_T(V)$-linear because on $V\cap W$ it is the $\mathcal O_W(V\cap W)$-linear map $\Psi$ and near $V\setminus W$ both sides vanish. Hence there is a natural bijection $\operatorname{Hom}_{\mathcal O_T}(o_!\mathcal G,\mathcal H)\cong\operatorname{Hom}_{\mathcal O_W}(\mathcal G,\mathcal H|_W)$. Finally, the transpose of the identity of $\mathcal G=\mathcal H|_W$ is the $\mathcal O_T$-linear map $u_{\mathcal H}:o_!(\mathcal H|_W)\to\mathcal H$ that glues a section $s\in\mathcal H(V\cap W)$ with closed support in $V$ to the zero sections on a cover of $V$ by neighbourhoods of the points of $V\setminus W$; its section maps are injective because a section of $\mathcal H$ over $V$ restricts to its given values on $V\cap W$, so $u_{\mathcal H}$ is a monomorphism. [F7, algebra]

1.3 Calculate the local comparison signs. Regard a homological Koszul resolution $K_p$ as $K^{-p}$, with differential $\partial$. The classical dual differential in degree $p$ is $h(\phi)=\phi\partial$, whereas the cochain Hom differential into a module in degree zero is $(-1)^{p+1}\phi\partial$. With $\sigma_0=1$, the recurrence $\sigma_{p+1}=(-1)^{p+1}\sigma_p$ gives $\sigma_p=(-1)^{p(p+1)/2}$. This also fixes the injective comparison: in bidegree $(p,q)$, the classical mixed complex $\operatorname{Hom}(K_p,I^q)$ has total differential $h+(-1)^p v$, while the cochain Hom complex has $v+(-1)^{p+q+1}h$. Multiplication by $\sigma_p(-1)^{pq}$ intertwines both differentials, equals $\sigma_p$ on the projective edge, and equals $1$ on the injective edge. Thus [F11] carries a raw degree-$c$ Koszul cochain to $\sigma_c$ times its cochain-derived representative. For the Hodge identification, let $\Theta^p(\phi)$ be characterized by $\phi(x)=\lambda(x\wedge z)$ in the determinant pairing. The Koszul Leibniz rule on $x\wedge z=0$ gives $\Theta^{p+1}(\phi\partial)=(-1)^p\partial\Theta^p(\phi)$. Hence $s_p\Theta^p$ with $s_p=(-1)^{p(p-1)/2}$ is a chain map, and in degree $c$ it sends the raw top cochain to $s_c$ times its determinant frame. This is the local map constructed in the proof of [F3], and its scalar depends only on $c$, so it survives restriction and changes of generators. [F3, F11, algebra]

2.1 Injective modules restrict to injective modules, and internal Hom into an injective is flasque. (i) Let $I$ be an injective $\mathcal O_T$-module and let $W\subseteq T$ be open. Then $I|_W$ is injective in $\mathrm{Mod}(\mathcal O_W)$: given a monomorphism $\alpha:\mathcal A\rightarrowtail\mathcal B$ of $\mathcal O_W$-modules and a morphism $\beta:\mathcal A\to I|_W$, step 1.2 transposes $\beta$ into a morphism $\beta^\sharp:o_!\mathcal A\to I$, the morphism $o_!\alpha$ is a monomorphism because $o_!$ is exact, injectivity of $I$ extends $\beta^\sharp$ over $o_!\alpha$ to $o_!\mathcal B\to I$, and transposing back gives $\mathcal B\to I|_W$ whose composite with $\alpha$ is $\beta$ by the functoriality of the transposition. (ii) Let $\mathcal F$ be an $\mathcal O_T$-module and let $U\subseteq V\subseteq T$ be open. A section $\phi\in\operatorname{Hom}_{\mathcal O_U}(\mathcal F|_U,I|_U)$ transposes by step 1.2, applied to the open immersion $m:U\hookrightarrow V$, to a morphism $m_!(\mathcal F|_U)\to I|_V$. The monomorphism used to extend it by injectivity of $I|_V$ is $u_{\mathcal F|_V}:m_!(\mathcal F|_U)\rightarrowtail\mathcal F|_V$ from step 1.2. The extension is a morphism $\tilde\phi:\mathcal F|_V\to I|_V$; restricting it to opens inside $U$ recovers $\phi$, because there $m_!$ and $u_{\mathcal F|_V}$ are the identity. Hence every section of the abelian sheaf underlying $\mathcal Hom_{\mathcal O_T}(\mathcal F,I)$ over $U$ extends to $V$, so that abelian sheaf is flasque. (iii) Taking $\mathcal F=\mathcal O_T$ in (ii), and using that the canonical evaluation $\mathcal Hom_{\mathcal O_T}(\mathcal O_T,I)\to I$, which sends a morphism to its value at the section $1$, is an isomorphism over every open, an injective $\mathcal O_T$-module is flasque as an abelian sheaf. [F8, step 1.2, algebra]

3.1 Derived global sections agree with sheaf cohomology. On $T=\mathbb P^N$ and for every $\mathcal O_T$-module $\mathcal M$ one has $R^qG(\mathcal M)\cong H^q(T,\mathcal M)$ for all $q\ge0$. Indeed, take the injective resolution $\mathcal M\to J^\bullet$ supplied by [F6]; each $J^p$ is flasque by step 2.1(iii), hence $H^q(T,J^p)=0$ for every $q>0$ by [F8], so the underlying abelian complex is a $\Gamma(T,-)$-acyclic resolution of the underlying abelian sheaf of $\mathcal M$. With the Axiom of Dependent Choice, which holds by [F6], and with the class of all abelian sheaves on $T$, on which the supplied datum of [F6] is defined, the acyclic-resolution theorem [F9] gives $H^q(T,\mathcal M)\cong H^q(\Gamma(T,J^\bullet))$; the right hand side is $R^qG(\mathcal M)$ computed from the same resolution, by [F10]. [F6, F8, F9, F10, step 2.1]

4.1 The acyclicity hypothesis of the spectral sequence. Let $I$ be an injective $\mathcal O_{\mathbb P^N}$-module. By step 2.1(ii) the abelian sheaf underlying $\mathcal Hom_{\mathcal O_{\mathbb P^N}}(i_*E,I)$ is flasque, so $H^q(\mathbb P^N,\mathcal Hom_{\mathcal O_{\mathbb P^N}}(i_*E,I))=0$ for every $q>0$ by [F8], and step 3.1 identifies these groups with $R^qG(\mathcal Hom_{\mathcal O_{\mathbb P^N}}(i_*E,I))$. Hence $F$ carries injective objects to $G$-acyclic objects in the sense of the hypothesis of [F4]. [F4, F8, step 2.1, step 3.1]


5.1 The local-to-global spectral sequence. Apply [F4] to the pair of additive left exact functors $(F,G)$ of step 1.1: both source and target categories have enough injectives by [F6], the injective and Cartan-Eilenberg resolutions and comparison data are supplied under the Axiom of Choice [A1], and step 4.1 verifies the acyclicity hypothesis. The resulting natural first-quadrant spectral sequence is $$E_2^{p,q}=R^pG\bigl(R^qF(\omega_{\mathbb P^N})\bigr)\Longrightarrow R^{p+q}(GF)(\omega_{\mathbb P^N}),$$ with differentials of bidegree $(r,1-r)$ and a finite decreasing filtration of the abutment. By steps 1.1 and 3.1 its $E_2$-page and abutment are $$E_2^{p,q}=H^p\bigl(\mathbb P^N,\mathcal Ext^q_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})\bigr),\qquad E_\infty^{p,q}\Rightarrow\operatorname{Ext}^{p+q}_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N}).$$ [A1, F2, F4, step 1.1, step 3.1, step 4.1]

6.1 Degeneration. By [F3] the sheaf $\mathcal Ext^q_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})$ vanishes unless $q=c$, where it is $i_*(E^\vee\otimes_{\mathcal O_X}\omega_X)$. Thus $E_2^{p,q}=0$ unless $q=c$. Each differential has bidegree $(r,1-r)$ for $r\ge2$, changing the second index, so no differential can meet the single nonzero row and $E_2=E_\infty$. In total degree $m\ge c$ the abutment filtration has just the graded piece $(m-c,c)$; its one-row edge $e_m$ is an isomorphism from $\operatorname{Ext}^{m}_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})$ to $H^{m-c}(\mathbb P^N,\mathcal Ext^c(i_*E,\omega_{\mathbb P^N}))$. For $m<c$ every piece vanishes, hence the Ext group vanishes. [F3, F4, step 5.1]

7.1 Normalize the edge orientation. Let $h:\mathcal Ext^c(i_*E,\omega_{\mathbb P^N})\xrightarrow{\sim}i_*(E^\vee\otimes\omega_X)$ be the local Koszul/Hodge identification of [F3]. The ordered top Koszul cochain is carried by the Hodge chain map calculated in step 1.3 to $s_c=(-1)^{c(c-1)/2}$ times its determinant frame. On each affine Koszul chart the classical-projective to derived/injective Ext comparison calculated in step 1.3 uses the factor $\sigma_c=(-1)^{c(c+1)/2}$ in degree $c$; we make no global-projective-resolution claim for $\mathrm{Mod}(\mathcal O_{\mathbb P^N})$. Therefore we **define** the normalized collapse in total degree $c+j$ by $D_j:=\sigma_c\,H^j(h)\circ e_{c+j}$, inserting this factor once rather than assuming it is implicit in the Grothendieck edge. Equivalently, its inverse sends the ordered determinant frame to $\sigma_c s_c=(-1)^c$ times the raw ordered top Koszul cochain. This convention is independent of $j$, commutes with restriction and changes of regular generators because both signs depend only on $c$, and is the one used for Gysin/Yoneda composition. Since $\sigma_c$ is a unit, $D_j$ is still a natural isomorphism. [F3, F4, F11, step 6.1, step 1.3]

8.1 Identification of the cohomology. The $\mathcal O_X$-module $E^\vee\otimes_{\mathcal O_X}\omega_X$ is finite locally free, hence quasi-coherent, so [F5] applied to the closed immersion $i$ gives a canonical isomorphism $H^j(\mathbb P^N,i_*(E^\vee\otimes_{\mathcal O_X}\omega_X))\cong H^j(X,E^\vee\otimes_{\mathcal O_X}\omega_X)$. Composing the normalized map $D_j$ of step 7.1 with this pushforward comparison proves the isomorphism of the statement. [F5, step 7.1]

9.1 Naturality, boundary cases and the Axiom of Choice. A morphism $u:E\to E'$ of finite locally free $\mathcal O_X$-modules induces a morphism of functors $\mathcal Hom(i_*E',-)\to\mathcal Hom(i_*E,-)$ and hence, by the naturality assertions of [F4], a morphism of the spectral sequences of step 5.1 compatible with the abutments and their filtrations; the degeneration of step 6.1 and the fixed sign of step 7.1 are natural in these data, the identification of the row $q=c$ is the natural-in-$E$ isomorphism of [F3], and the isomorphism of [F5] is natural in the sheaf argument, so the isomorphism of step 8.1 is natural in $E$. The boundary cases are consistent: for $X=\varnothing$ or $E=0$ both sides vanish; for $c=0$, [F3] reads $\mathcal Ext^0(i_*E,\omega_{\mathbb P^N})\cong i_*(E^\vee\otimes\omega_X)$ and $\mathcal Ext^q=0$ for $q\ne0$, so steps 6.1–8.1 give $\operatorname{Ext}^j(i_*E,\omega_{\mathbb P^N})\cong H^j(X,E^\vee\otimes\omega_X)$ directly; for $j=0$ the statement reads $\operatorname{Ext}^c(i_*E,\omega_{\mathbb P^N})\cong H^0(X,E^\vee\otimes_{\mathcal O_X}\omega_X)$; for total degree below $c$, the Ext group vanishes by step 6.1. The Axiom of Choice [A1] is assumed in the statement and is used exactly through the injective-resolution data of [F6] for modules and for abelian sheaves, through the Dependent Choice instance of [F6] in step 3.1, and through the resolution and comparison data of [F4] used in step 5.1. This proves the lemma. [A1, F3, F4, F5, F6, F11, step 3.1, step 5.1, step 6.1, step 7.1, step 8.1] ∎
