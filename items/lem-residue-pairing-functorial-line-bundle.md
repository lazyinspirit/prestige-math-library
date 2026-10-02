---
id: lem-residue-pairing-functorial-line-bundle
kind: lemma
title: "Functoriality of the residue pairing under line-bundle maps and connecting homomorphisms"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-effective-cartier-divisor
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-residue-pairing-principal-parts
  - def-sheaf-hom
  - def-sheaf-tensor-product
  - cor-derived-long-exact-sequence
  - lem-local-residue-annihilator-regular-sections
  - lem-principal-parts-cech-h1-presentation
  - lem-residue-pairing-descends-cohomology
  - lem-smooth-curve-coherent-torsion-free-locally-free
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the residue suppliers. Let $C$
be a smooth proper geometrically integral curve over a perfect field $k$ and
let $\mathcal L$ be an invertible $\mathcal O_C$-module. The residue pairing
of [[def-residue-pairing-principal-parts]] is functorial in the following
sense.

(1) *Multiplicativity in the line bundle.* Let $\mathcal M$ be an invertible
$\mathcal O_C$-module and let $t\in H^0(C,\mathcal M)$ be a nonzero global
section. Multiplication of representatives by $t$ induces a $k$-linear map
$$\mu_t\colon H^1(C,\mathcal L)\longrightarrow H^1(C,\mathcal L\otimes\mathcal M);$$
if $s\in H^0(C,\omega_C\otimes\mathcal L^{-1})$ is a global section whose
associated meromorphic section $s\otimes t^{-1}$ of
$\omega_C\otimes(\mathcal L\otimes\mathcal M)^{-1}$ is regular at every closed
point, then
$$\bigl\langle\mu_t(c),\,s\otimes t^{-1}\bigr\rangle_{\mathcal L\otimes\mathcal M} =\langle c,s\rangle_{\mathcal L}$$
for every $c\in H^1(C,\mathcal L)$. If $t$ is nowhere vanishing, then
$s\otimes t^{-1}$ is a global section of
$\omega_C\otimes(\mathcal L\otimes\mathcal M)^{-1}$ for every $s$ and $\mu_t$
is an isomorphism that identifies the two residue pairings.

(2) *Adjunction with the connecting homomorphism.* Let $D$ be an effective
Cartier divisor on $C$, put $\mathcal L'=\mathcal L(D)\cong
\mathcal L\otimes\mathcal O_C(D)$, and let
$$0\longrightarrow\mathcal L\longrightarrow\mathcal L'\longrightarrow i_*(\mathcal L'|_D)\longrightarrow 0$$
be the associated exact sequence, obtained locally from an equation of $D$,
with quotient supported on $D$ and connecting homomorphism
$\delta\colon H^0(C,i_*(\mathcal L'|_D))\to H^1(C,\mathcal L)$. Then for
every $g\in H^0(C,i_*(\mathcal L'|_D))$ and every
$s\in H^0(C,\omega_C\otimes\mathcal L^{-1})$ one has
$$\langle\delta(g),s\rangle_{\mathcal L} =\sum_{p\in\operatorname{supp}D}\operatorname{res}_p(\tilde g_ps),$$
where $\tilde g_p\in\mathcal L'_p$ is any local lift of the germ $g_p$ of $g$
at $p$. The right-hand side is independent of the lifts and defines a
restriction map
$\rho_D\colon H^0(C,\omega_C\otimes\mathcal L^{-1})\to
H^0(C,i_*(\mathcal L'|_D))^*$ by
$\rho_D(s)(g)=\sum_p\operatorname{res}_p(\tilde g_ps)$. The connecting map
$\delta$ is adjoint to $\rho_D$ under the residue pairing. Moreover,
$\ker\rho_D$ is the image of the natural inclusion
$H^0(C,\omega_C\otimes\mathcal L'^{-1})\hookrightarrow
H^0(C,\omega_C\otimes\mathcal L^{-1})$.
Together with (1) this is the compatibility with the standard exact sequences
that pins down the pairing once the trace normalization on $\omega_C$ is
fixed.

## Facts & Assumptions

**Given:** a perfect field $k$; a smooth proper geometrically integral curve
$C$ over $k$; an invertible $\mathcal O_C$-module $\mathcal L$; an invertible
sheaf $\mathcal M$ with a nonzero global section $t$; an effective Cartier
divisor $D$ on $C$ with $\mathcal L'=\mathcal L(D)$ and exact sequence
$0\to\mathcal L\to\mathcal L'\to i_*(\mathcal L'|_D)\to0$; and global
sections $s$ of $\omega_C\otimes\mathcal L^{-1}$ as required.

[F1] Local principal parts of $\mathcal L$ are the classes in
$\mathcal L_\eta/\mathcal L_p$ at the closed points $p$; the classes of
$H^1(C,\mathcal L)$ are represented by finite-support families $(c_p)$ of such
principal parts, the principal parts of a global meromorphic section of
$\mathcal L$ are the coboundaries, and the residue pairing is
$$\langle c,s\rangle=\sum_p\operatorname{res}_p(c_ps)\in k,$$
a finite sum which depends only on the class of $c$ in $H^1(C,\mathcal L)$ and
is $k$-bilinear in the class and in the global section
$s\in H^0(C,\omega_C\otimes\mathcal L^{-1})$
([[def-residue-pairing-principal-parts]],
[[lem-residue-pairing-descends-cohomology]]).

[F2] Tensor products of $\mathcal O_C$-modules are associative and
commutative with the canonical isomorphisms
$(\mathcal L\otimes\mathcal M)\otimes(\omega_C\otimes\mathcal L^{-1}\otimes
\mathcal M^{-1})\cong\omega_C\otimes(\mathcal M\otimes\mathcal M^{-1})\cong
\omega_C$; the evaluation
$\mathcal M\otimes\mathcal M^{-1}\to\mathcal O_C$ is the duality pairing
$\mathcal Hom_{\mathcal O_C}(\mathcal M,\mathcal O_C)$, and for a nonzero
rational section $t$ of $\mathcal M$ the product $t\otimes t^{-1}$ maps to
$1$. A global section of $\mathcal M$ multiplied by a local section of
$\mathcal L$ is a local section of $\mathcal L\otimes\mathcal M$
([[def-sheaf-tensor-product]], [[def-sheaf-hom]],
[[def-invertible-sheaf]]).

[F3] For an effective Cartier divisor $D$ and an invertible
$\mathcal O_C$-module $\mathcal L'=\mathcal L(D)$ tensoring the inclusion
$\mathcal L=\mathcal L'(-D)\hookrightarrow\mathcal L'$ with the quotient
$\mathcal O_C\to\mathcal O_D$ yields a short exact sequence
$0\to\mathcal L\to\mathcal L'\to i_*(\mathcal L'|_D)\to0$; the quotient
$i_*(\mathcal L'|_D)$ is a finite-length skyscraper supported on
$\operatorname{supp}D$, so its space of global sections is
$\bigoplus_{p\in\operatorname{supp}D}\mathcal L'_p/\mathcal L_p$. The exact
sequence is seen locally: if $D$ has equation $d$ and $e$ is a frame of
$\mathcal L$, then $\mathcal L'$ is generated in the rational fiber by $e/d$
and $\mathcal L$ by $e$; the quotient is generated by $e/d$ modulo $e$ and
annihilated by $d$, which is $\mathcal L'|_D$. Its connecting map is supplied
by the derived long exact sequence
([[cor-derived-long-exact-sequence]]). To identify $\delta$, include
$\mathcal L'$ into the rational sheaf $\mathcal L_\eta$ and its quotient
$i_*(\mathcal L'|_D)$ into the principal-parts sheaf
$\mathcal P(\mathcal L)=\mathcal L_\eta/\mathcal L$. Naturality of the
connecting maps sends $g$ to its family of local classes
$([\widetilde g_p])_{p\in\operatorname{supp}D}$ in
$\bigoplus_p\mathcal L_\eta/\mathcal L_p$; by
[[lem-principal-parts-cech-h1-presentation]], the connecting map for the
principal-parts sequence is exactly the quotient presentation of
$H^1(C,\mathcal L)$. Equivalently, local lifts of $g$ in $\mathcal L'$ and
zero lifts off $D$ differ on overlaps by sections of $\mathcal L$, giving the
same Cech cocycle and principal-part family. The support is finite on the
Noetherian proper curve ([[def-effective-cartier-divisor]],
[[def-invertible-sheaf-of-cartier-divisor]],
[[cor-derived-long-exact-sequence]],
[[lem-principal-parts-cech-h1-presentation]]).

[F4] The canonical bundle $\omega_C=\Omega^1_{C/k}$ is invertible, so
$\omega_C\otimes\mathcal L^{-1}$ and
$\omega_C\otimes(\mathcal L\otimes\mathcal M)^{-1}$ are invertible
$\mathcal O_C$-modules ([[def-canonical-line-bundle-curve]],
[[def-invertible-sheaf]]).

[F5] An invertible $\mathcal O_C$-module is finite locally free of rank one
and torsion-free, so a global section of $\mathcal L$ or of
$\omega_C\otimes\mathcal L^{-1}$ whose germ vanishes at the generic point is
zero; a regular family of principal parts multiplied by a global section of
$\mathcal M$ is a regular family of principal parts of
$\mathcal L\otimes\mathcal M$
([[lem-smooth-curve-coherent-torsion-free-locally-free]],
[[def-invertible-sheaf]]).

[F6] The Axiom of Choice is [[def-axiom-of-choice]].

[F7] At every closed point $p$, the residue field $\kappa(p)$ is finite
separable over the perfect field $k$. In a uniformizer $t$ and local frames
for $\mathcal L$ and $\omega_C$, the residue of a finite principal part is
the coefficient trace
$\operatorname{Tr}_{\kappa(p)/k}([t^{-1}])$, and the trace form of
$\kappa(p)/k$ is nondegenerate. The local residue formula and detection of
nonzero Laurent coefficients by finite tests are established in
[[lem-local-residue-annihilator-regular-sections]] and its cited suppliers.

## Proof

**Proof technique:** direct; compute both pairings on explicit finite-support
families of local principal parts, using the canonical tensor identifications
for (1) and the local lifting description of the connecting homomorphism for
(2).

1.1 The multiplication map $\mu_t$ is well defined: if the finite-support families $(c_p)$ and $(c'_p)$ both represent the class $c\in H^1(C,\mathcal L)$, then $(c_p-c'_p)$ is a sum of the principal parts of a global meromorphic section $\theta\in\mathcal L_\eta$ and of a family with $c_p\in\mathcal L_p$ for all $p$, by [F1]; multiplying by the global section $t$ gives the principal parts of $\theta\otimes t\in(\mathcal L\otimes\mathcal M)_\eta$ together with a family with $tc_p\in(\mathcal L\otimes\mathcal M)_p$, so $(tc_p)$ is again a finite-support family representing a class of $H^1(C,\mathcal L\otimes\mathcal M)$ independent of the representative; the Axiom of Choice is used only as inherited from the residue suppliers of [F1], and $\mu_t$ is $k$-linear because multiplication by $t$ is $k$-linear. [F1, F2, F5, F6]

1.2 Multiplicativity on representatives: for a finite-support family $(c_p)$ representing $c$ and the global section $s$ of $\omega_C\otimes\mathcal L^{-1}$ with $s\otimes t^{-1}$ regular, the family $(c_p\otimes t)$ represents $\mu_t(c)$ and $(c_p\otimes t)\cdot(s\otimes t^{-1})=c_p\cdot s\otimes(t\otimes t^{-1})$ inside $(\mathcal L\otimes\mathcal M)_\eta\otimes(\omega_C\otimes(\mathcal L\otimes\mathcal M)^{-1})_\eta$; under the canonical identification of [F2] with $\omega_C\otimes(\mathcal M\otimes\mathcal M^{-1})_\eta$ and then with $\omega_{C,\eta}$, the factor $t\otimes t^{-1}$ becomes $1$, so $c_p\otimes t\cdot s\otimes t^{-1}$ and $c_p s$ have the same image in $\omega_{C,\eta}=\Omega^1_{K/k}$, hence the same residue at every closed point $p$. [F2, F5]

1.3 The twist sequence and its connecting map: by [F3] the sequence $0\to\mathcal L\to\mathcal L'\to i_*(\mathcal L'|_D)\to0$ is exact, its quotient is a finite-length skyscraper with global sections $\bigoplus_{p\in\operatorname{supp}D}\mathcal L'_p/\mathcal L_p$, and the connecting homomorphism $\delta\colon H^0(C,i_*(\mathcal L'|_D))\to H^1(C,\mathcal L)$ is computed by local lifting; the support $\operatorname{supp}D$ is finite because it is a closed subset of the one-dimensional Noetherian curve $C$ different from $C$. [F3, F5]

2.1 Therefore $\langle\mu_t(c),s\otimes t^{-1}\rangle_{\mathcal L\otimes\mathcal M}=\sum_p\operatorname{res}_p(c_p\otimes t\cdot s\otimes t^{-1})=\sum_p\operatorname{res}_p(c_p s)=\langle c,s\rangle_{\mathcal L}$, since the sums are finite by [F1] and the residues agree term by term by step 1.2; this is the asserted commutativity of the diagram. [F1, step 1.2]

2.2 Description of $\delta(g)$ by lifts: put $Q:=i_*(\mathcal L'|_D)$ and $\mathcal P(\mathcal L):=\mathcal L_\eta/\mathcal L$. The inclusion $\mathcal L'\hookrightarrow\mathcal L_\eta$ and quotient maps give a commutative diagram of short exact sequences with identity on $\mathcal L$ and the induced map $Q\hookrightarrow\mathcal P(\mathcal L)$ on the right. Naturality of the connecting homomorphisms in the long exact cohomology sequences [F3] sends $\delta(g)$ to the boundary class of the image of $g$ in $H^0(C,\mathcal P(\mathcal L))$. By the principal-parts presentation [F1], that image is the finite-support family whose component at each $p\in\operatorname{supp}D$ is $\widetilde g_p+\mathcal L_p$ and whose other components are zero, and its boundary class is represented by precisely this family in $H^1(C,\mathcal L)$. Thus the chosen local lifts represent $\delta(g)$ under [F1]; changing a lift changes it by a regular element and does not change its principal-part class. [F1, F3, step 1.3]

3.1 If the global section $t$ is nowhere vanishing, then $t^{-1}$ is a global section of $\mathcal M^{-1}$, so $s\otimes t^{-1}$ is a global section of $\omega_C\otimes\mathcal L^{-1}\otimes\mathcal M^{-1}=\omega_C\otimes(\mathcal L\otimes\mathcal M)^{-1}$ for every global section $s$ of $\omega_C\otimes\mathcal L^{-1}$; moreover $\mu_{t}$ and $\mu_{t^{-1}}$ are mutually inverse because $t\otimes t^{-1}=1$ under the duality pairing and $\mu_{t}\mu_{t^{-1}}=\mu_{t\otimes t^{-1}}=\mathrm{id}$ on classes, so $\mu_t$ is an isomorphism identifying the pairings by step 2.1. [F1, F2, step 1.1, step 2.1]

3.2 Evaluation of the pairing: for $s\in H^0(C,\omega_C\otimes\mathcal L^{-1})$, step 2.2 and [F1] give $\langle\delta(g),s\rangle_{\mathcal L}=\sum_{p\in\operatorname{supp}D}\operatorname{res}_p(\tilde g_ps)$, the sum being finite by step 1.3. [F1, step 1.3, step 2.2]

4.1 Independence of the lifts: if $\tilde g_p$ and $\tilde g'_p$ both lift $g_p$, then $\tilde g_p-\tilde g'_p\in\mathcal L_p$, so $(\tilde g_p-\tilde g'_p)s\in\mathcal L_p\cdot(\omega_C\otimes\mathcal L^{-1})_p=\omega_{C,p}$ is a regular differential and has residue zero. Thus the sum in step 3.2 is independent of the lifts and defines the map $\rho_D$ in the statement. [F2, F4, step 3.2]

5.1 (Adjunction and the annihilator of the local restriction.) Step 3.2 identifies $\langle\delta(g),s\rangle_{\mathcal L}$ with $\rho_D(s)(g)$ for every $g$ and $s$, so $\delta$ is adjoint to $\rho_D$. To compute its kernel, fix $p\in\operatorname{supp}D$, choose a uniformizer $t$, and trivialize $\mathcal L$ by $\ell$ and $\omega_C$ by $\mathrm dt$. If the multiplicity of $D$ at $p$ is $e$, then $\mathcal L_p=\mathcal O_{C,p}\ell$ and $\mathcal L'_p=t^{-e}\mathcal O_{C,p}\ell$ up to a unit, so $\mathcal L'_p/\mathcal L_p$ is spanned over $\kappa(p)$ by the classes $t^{-j-1}\ell$ for $0\le j<e$. Write the regular section $s$ as $u(t)\ell^{-1}\mathrm dt$ in the completion, with $u(t)=\sum_{m\ge0}u_mt^m$. For each $j$ and $a\in\kappa(p)$, lift $a$ to $\widetilde a\in\mathcal O_{C,p}$ and test against the class of $t^{-j-1}\widetilde a\ell$. Inductively, if $u_0=\cdots=u_{j-1}=0$, the coefficient of $t^{-1}\mathrm dt$ in this product is $a u_j$: terms of positive order in $\widetilde a$ multiply only coefficients $u_m$ with $m<j$. By nondegeneracy of the trace form in [F7], if $u_j\ne0$ one can choose $a$ with $\operatorname{Tr}_{\kappa(p)/k}(a u_j)\ne0$. Thus all residue tests against $\mathcal L'_p/\mathcal L_p$ vanish exactly when $u_0=\cdots=u_{e-1}=0$, that is, when $s$ lies in $(\omega_C\otimes\mathcal L'^{-1})_p=(\omega_C\otimes\mathcal L^{-1})(-D)_p$. The quotient sheaf is a direct sum over the support, so these tests at each $p$ show that $\ker\rho_D$ is the image of $H^0(C,\omega_C\otimes\mathcal L'^{-1})$. [F1, F3, F7, step 3.2, step 4.1]

6.1 Combining steps 2.1, 3.2, 4.1 and 5.1 proves the connecting-map formula, lift independence, adjunction and kernel statement in (2); steps 1.2 and 2.1 prove (1), including the nowhere-vanishing case. [step 2.1, step 3.2, step 4.1, step 5.1] ∎
