---
id: thm-normalization-glues-integral-finite-type-curves
kind: theorem
title: "Normalization of an integral finite-type curve by gluing affine integral closures"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian
  - def-affine-open-subscheme
  - def-axiom-of-choice
  - def-birational-morphism-schemes
  - def-field-of-fractions
  - def-finite-morphism-schemes
  - def-integral-closure-and-integrally-closed-domain
  - def-integral-scheme
  - def-morphism-of-schemes
  - def-normal-noetherian-ring
  - def-weil-divisor-normal-noetherian-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-principal-distinguished-subset-of-spectrum
  - def-separated-morphism-schemes
  - lem-distinguished-open-refinement-at-a-point
  - lem-finite-morphism-affine
  - lem-finite-normalization-compatible-with-principal-opens
  - lem-integral-finite-type-scheme-function-field
  - lem-morphism-schemes-local-on-source-target
  - thm-affine-scheme-ring-anti-equivalence
  - thm-gluing-affine-schemes
  - thm-integral-closure-finite-finite-type-domain-over-field
  - thm-integral-closure-is-integrally-closed
  - thm-normality-is-local-for-domains
  - thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian
  - thm-finite-morphism-integral-closed
  - thm-separatedness-gluing-overlap-criterion
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14, 2019), Ch. 7"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
---

## Statement

Assume the Axiom of Choice. It is inherited through the normality-locality
criterion and the finite-morphism criteria for finiteness and integrality used
in the proof. Let $C$ be an integral separated finite-type curve over a field
$k$ with function field $K=k(C)$, and let
$C=U_1\cup\cdots\cup U_n$ be a finite affine cover with
$U_i=\operatorname{Spec}(A_i)$. The integral closures $B_i$ of $A_i$ in $K$ are
finite $A_i$-modules and their formation commutes with principal localisation.
On each overlap $U_i\cap U_j$, common principal-open refinements give
identifications of the corresponding localizations inside $K$, so the
$\operatorname{Spec}(B_i)$ glue over the overlaps to a scheme
$C^{\mathrm{nu}}$ and a morphism
$\nu:C^{\mathrm{nu}}\to C$. Then $C^{\mathrm{nu}}$ is integral and normal, $\nu$
is finite, affine and birational, $k(C^{\mathrm{nu}})=K$, and
$(C^{\mathrm{nu}},\nu)$ is the normalization of $C$: it is initial among
normal integral schemes finite and birational over $C$, hence unique up to
unique isomorphism over $C$.

## Facts & Assumptions

**Given:** An integral separated finite-type $k$-scheme $C$ of chain dimension one, the function field $K=k(C)$, and a finite affine open cover $C=U_1\cup\cdots\cup U_n$ with $U_i=\operatorname{Spec}(A_i)$.

[F1] If $A$ is a finite-type integral domain over a field, then the integral closure of $A$ in $\operatorname{Frac}(A)$ is a finite $A$-module. ([[thm-integral-closure-finite-finite-type-domain-over-field]])

[F2] For a finite-type integral domain $A$ over a field with integral closure $B$ in $\operatorname{Frac}(A)$ and $0\ne f\in A$, the integral closure of $A_f$ in $\operatorname{Frac}(A)$ is exactly $B_f$, and $B_f$ is a finite $A_f$-module. ([[lem-finite-normalization-compatible-with-principal-opens]])

[F3] Affine schemes equipped with open subschemes and isomorphisms on overlaps satisfying the identity and cocycle conditions glue to a scheme, uniquely up to unique isomorphism, and the given affine schemes become an open affine cover. ([[thm-gluing-affine-schemes]])

[F4] For an integral finite-type $k$-scheme $X$, the stalk $K(X)=\mathcal O_{X,\eta}$ at the generic point is canonically $\operatorname{Frac}\Gamma(U,\mathcal O_X)$ for every nonempty affine open $U=\operatorname{Spec}A\subseteq X$. ([[lem-integral-finite-type-scheme-function-field]])

[F5] If $f:X\to S$ is separated and $U=\operatorname{Spec}R$, $V=\operatorname{Spec}T$ are affine opens mapping into the same affine open $W=\operatorname{Spec}A\subseteq S$, then $U\cap V$ is affine and the natural map $R\otimes_AT\to\Gamma(U\cap V,\mathcal O_X)$ is surjective. In particular, for $S=\operatorname{Spec}k$, the map $R\otimes_kT\to\Gamma(U\cap V,\mathcal O_X)$ is surjective. ([[thm-separatedness-gluing-overlap-criterion]])

[F6] Compatible morphisms of schemes on an open cover of a scheme glue uniquely; two morphisms out of a scheme are equal if their restrictions to an open cover are equal. ([[lem-morphism-schemes-local-on-source-target]])

[F7] Every finite morphism is affine. Assuming the Axiom of Choice, a morphism $f:X\to S$ is finite if and only if there is an affine open cover $S=\bigcup_iU_i$ such that each $f^{-1}(U_i)$ is affine and $\Gamma(f^{-1}(U_i),\mathcal O_X)$ is a finite module over $\Gamma(U_i,\mathcal O_S)$. ([[lem-finite-morphism-affine]])

[F8] Every algebra of finite type over a principal ideal domain is a Noetherian ring; a field is a principal ideal domain under the library's convention, so the field case is included. ([[cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian]])

[F9] For a domain $A$ with fraction field $\operatorname{Frac}(A)$, the integral closure of $A$ in a field extension $K$ is the set of elements of $K$ integral over $A$, and $A$ is integrally closed when every element of $\operatorname{Frac}(A)$ integral over $A$ lies in $A$. ([[def-integral-closure-and-integrally-closed-domain]])

[F10] A Noetherian commutative ring $R$ is normal when every prime localisation $R_{\mathfrak p}$ is an integrally closed domain; for a domain this means that every element of its fraction field integral over it belongs to it. ([[def-normal-noetherian-ring]])

[F11] A morphism $f:X\to Y$ of integral finite-type $k$-schemes is birational when $f(\eta_X)=\eta_Y$ and the induced map $K(Y)\to K(X)$ on function fields is an isomorphism. ([[def-birational-morphism-schemes]])

[F12] For commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ is a natural bijection $\operatorname{Hom}(A,B)\cong\operatorname{Hom}(\operatorname{Spec}B,\operatorname{Spec}A)$; hence $\operatorname{Spec}$ is a contravariant equivalence with quasi-inverse global sections. ([[thm-affine-scheme-ring-anti-equivalence]])

[F13] For a commutative ring $R$, a Zariski-open $U\subseteq\operatorname{Spec}(R)$ and $\mathfrak p\in U$ there is $f\in R$ with $\mathfrak p\in D(f)\subseteq U$. ([[lem-distinguished-open-refinement-at-a-point]])

[F14] A morphism $f:X\to S$ is finite if for every affine open $U=\operatorname{Spec}A\subseteq S$ the inverse image is affine, $f^{-1}(U)=\operatorname{Spec}B$, with $B$ module-finite over $A$. ([[def-finite-morphism-schemes]])

[F15] A nonempty scheme is integral exactly when every nonempty affine open is the spectrum of a domain; the criterion is independent of the chosen affine cover. ([[def-integral-scheme]])

[F16] For a commutative ring $R$ and $f\in R$, the principal distinguished subset is $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$. ([[def-principal-distinguished-subset-of-spectrum]])

[F17] The integral closure of a domain $A$ in a field extension of its fraction field is an integrally closed domain. ([[thm-integral-closure-is-integrally-closed]])

[F18] Assuming the Axiom of Choice, a domain is integrally closed if and only if all of its prime localizations are integrally closed; equivalently it is enough that all maximal localizations be integrally closed. The implication from integral closedness to local integral closedness and the converse are both included. ([[thm-normality-is-local-for-domains]])

[F19] A module-finite algebra over a Noetherian ring is Noetherian. ([[thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian]])

[F20] A Noetherian scheme has a finite affine open cover by spectra of Noetherian rings, and a scheme is normal when all of its local rings are integrally closed domains; on an affine chart this is the local normality condition for its Noetherian coordinate ring. ([[def-locally-noetherian-and-noetherian-scheme]], [[def-weil-divisor-normal-noetherian-scheme]])

[F21] Assuming the Axiom of Choice, every ring map induced by a finite morphism on affine charts is integral. ([[thm-finite-morphism-integral-closed]])



**Proof technique:** direct, by gluing the affine normalisations of a finite affine cover and checking the universal property chartwise.

## Proof

1.1 Delete empty members of the finite cover. Each remaining $A_i$ is a domain, since $U_i$ is a nonempty affine open of the integral scheme $C$ [F15], and $A_i$ is a finitely generated $k$-algebra because $C$ is of finite type over $k$. By [F4] the fraction field $\operatorname{Frac}(A_i)$ is canonically identified with $K=\mathcal O_{C,\eta}$, and these identifications are compatible on overlaps, so all of them may be regarded as subfields of one copy of $K$. Each $U_i\cap U_j$ is affine by [F5], since $C$ is separated over $\operatorname{Spec}k$ and all affine opens of $C$ lie over the single affine open $\operatorname{Spec}k$. [F4, F5, F15, given]

1.2 Let $B_i\subseteq K$ be the integral closure of $A_i$ in $K$ [F9]. By [F1], $B_i$ is a finite $A_i$-module and a domain with fraction field $K$. The integral-closure theorem [F17] makes $B_i$ integrally closed. Since $k$ is a principal ideal domain, [F8] makes each finite-type $A_i$ Noetherian; [F19] then makes the module-finite $A_i$-algebra $B_i$ Noetherian. Applying both directions of [F18] to $B_i$, all of its prime localizations are integrally closed, so $B_i$ is normal in the Noetherian-ring sense [F10]. [F1, F8, F9, F10, F17, F18, F19]

1.3 For $0\ne f\in A_i$ the integral closure of the principal localisation $(A_i)_f$ in $K$ is exactly $(B_i)_f$ and $(B_i)_f$ is a finite $(A_i)_f$-module, by [F2]. Consequently the ring $B_i$ attached to the chart is determined on each principal open $D(f)\subseteq U_i$ by that open alone, namely as $(B_i)_f$ inside $K$. [F2]

1.4 Gluing data. Fix $i,j$ and put $W=U_i\cap U_j$, which is affine by [F5]. Let $V_{ij}$ be the inverse image of $W$ in $\operatorname{Spec}(B_i)$. We construct compatible identifications locally on $W$. For each point $w\in W$, choose principal opens $D(f)\subseteq U_i$ and $D(g)\subseteq U_j$ containing $w$ and contained in $W$; such choices exist by [F13]. On $D(f)$ the restriction of $g$ is a regular function, hence is represented by an element of $(A_i)_f$; write it as $c/f^r$. Then $D(f)\cap D(g)=D(fc)$ as an open of $U_i$. Similarly, on $D(g)$ the restriction of $f$ is represented by $d/g^s$ in $(A_j)_g$, so the same intersection is $D(gd)$ as an open of $U_j$. Thus $D(fc)=D(gd)$ is a common principal-open neighborhood of $w$ in $W$. Its coordinate rings, computed in either chart, are the same subring of $K$, since both are $\Gamma(D(fc),\mathcal O_C)$. By [F2], the integral closures of this ring in $K$ are respectively $(B_i)_{fc}$ and $(B_j)_{gd}$, so these localizations are equal inside $K$. The identity of that ring induces an isomorphism between the corresponding opens in the two normalization charts. These common opens cover $W$; the isomorphisms agree on further intersections because every ring map is the identity inside $K$. They therefore glue to an isomorphism $V_{ij}\to V_{ji}$ over $W$. The same identity-in-$K$ argument gives inverse maps and the cocycle condition on triple overlaps. No single distinguished open of $U_i$ is assumed to be represented by one element of $A_j$. [F2, F12, F13, F16]

2.1 Gluing. By [F3] the affine schemes $\operatorname{Spec}(B_i)$, equipped with the open subschemes $V_{ij}$ and the compatible isomorphisms $\varphi_{ij}$, glue to a scheme $C^{\mathrm{nu}}$ on which the charts $\operatorname{Spec}(B_i)$ form an open affine cover. [F3, step 1.4]

2.2 The morphism $\nu$. Each inclusion $A_i\subseteq B_i$ induces a $k$-morphism $\operatorname{Spec}(B_i)\to U_i$ by [F12]. On the common principal-open refinements from step 1.4, the chart isomorphism is induced by the identity of the localized integral-closure ring inside $K$; both composites to $C$ are therefore the same map to the overlap $W$. The chart morphisms agree on the open overlaps and glue by [F6] to $\nu:C^{\mathrm{nu}}\to C$. The transition maps are these normalization-chart isomorphisms over $W$, not inclusions of one chart into the other. [F6, F12, step 1.4]

2.3 $C^{\mathrm{nu}}$ is integral, normal and has function field $K$. Every chart $\operatorname{Spec}(B_i)$ is integral and has generic point with local ring $K$. Any two remaining $U_i,U_j$ meet in a nonempty open because $C$ is irreducible. The inverse image of that overlap contains the generic point of each normalization chart, and the transition maps identify those generic points by the identity of $K$. They therefore give one point $\eta$ lying in every chart. It is dense in each chart because each $B_i$ is a domain, hence dense in $C^{\mathrm{nu}}$; this proves global irreducibility. The charts are reduced, so the glued scheme is reduced and therefore integral. Their finite affine cover has Noetherian coordinate rings by step 1.2, so $C^{\mathrm{nu}}$ is Noetherian; [F18] makes every local ring integrally closed, hence the scheme is normal by [F20]. The common generic local ring is $K$, so $k(C^{\mathrm{nu}})=K$. [F4, F15, F18, F20, step 1.2]

3.1 Finiteness. For each $i$ we have $\nu^{-1}(U_i)=\operatorname{Spec}(B_i)$ by construction, and $B_i$ is a finite $A_i$-module by [F1]. The cover $C=\bigcup_iU_i$ is a finite affine open cover of the target, so the local criterion [F7] shows that $\nu$ is finite; in particular $\nu$ is affine by the choice-free first half of [F7]. [F1, F7, F14, step 2.2, step 1.2]

3.2 Birationality. The map $\nu$ sends the common generic point $\eta$ of step 2.3 to the generic point of $C$ and induces the identity map $K\to K$ on function fields. It is therefore dominant and birational by [F11]. [F4, F11, step 2.2, step 2.3]

4.1 Initiality. Let $h:Z\to C$ be finite and birational, with $Z$ normal and integral. For each $i$, $h^{-1}(U_i)=\operatorname{Spec}(D_i)$ and $D_i$ is a finite $A_i$-algebra by [F7, F14]. The preimage contains the generic point, so $D_i$ is a domain. Birationality and [F4] identify $\operatorname{Frac}(D_i)$ with $K$; under these identifications the map $A_i\to D_i$ is injective, so regard it as an inclusion. The finite affine covers and [F8], [F19] make $C$ and $Z$ Noetherian; normality of $Z$ says every localization $(D_i)_{\mathfrak q}$ is an integrally closed domain [F20]. By the converse direction of [F18], $D_i$ itself is integrally closed in $K$. The finite-morphism theorem [F21] makes every element of $D_i$ integral over $A_i$, so $D_i\subseteq B_i$. Conversely, each $b\in B_i$ is integral over $A_i\subseteq D_i$ and lies in $K$, so integral closedness of $D_i$ gives $b\in D_i$. Thus $D_i=B_i$ as subrings of $K$ for every $i$. The identity ring maps on these equal chart algebras induce chart isomorphisms in both directions, and they glue by [F6] to morphisms $\phi:C^{\mathrm{nu}}\to Z$ and $\psi:Z\to C^{\mathrm{nu}}$ over $C$. They are inverse because their restrictions on each affine chart are identities. Any morphism $C^{\mathrm{nu}}\to Z$ over $C$ induces the identity on the generic function field $K$; its chart ring maps are therefore the identity on $D_i=B_i\subseteq K$, so it equals $\phi$. The same argument for a morphism $Z\to C^{\mathrm{nu}}$ makes it equal to $\psi$. Thus both maps are unique, and in particular $\phi$ proves initiality in the stated direction. [F4, F6, F7, F14, F18, F20, F21, step 1.2, step 2.3, step 3.2]

5.1 Uniqueness of the normalization. Let $(C',\nu')$ be another normal integral scheme finite and birational over $C$. Step 4.1 gives unique maps $u:C^{\mathrm{nu}}\to C'$ and $v:C'\to C^{\mathrm{nu}}$ over $C$. Uniqueness forces $v\circ u$ and $u\circ v$ to be the identity maps. Hence $u$ and $v$ are inverse isomorphisms, unique over $C$. [step 4.1]

6.1 Conclusion and Choice accounting. Steps 1.2 and 1.3 prove finiteness of the affine integral closures and compatibility with principal localization; steps 1.4, 2.1 and 2.2 construct the glued scheme and morphism; steps 3.1 and 3.2 prove that the morphism is finite, affine and birational; step 2.3 proves integrality, normality and the function-field identity; and steps 4.1 and 5.1 prove initiality and uniqueness. The Axiom of Choice is inherited through the normality-locality criterion [F18], the local criterion for finiteness [F7], and the finite-morphism integrality theorem [F21]; these are used in steps 1.2, 3.1, and 4.1. [F7, F18, F21, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, step 4.1, step 5.1] ∎
