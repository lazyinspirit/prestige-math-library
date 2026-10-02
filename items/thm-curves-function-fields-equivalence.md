---
id: thm-curves-function-fields-equivalence
kind: theorem
title: "Smooth proper curves, dominant morphisms and function fields"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-field-finite-type-over-a-field-is-a-finite-extension
  - cor-finite-extension-of-a-perfect-field-is-simple
  - lem-tensor-ring-presentations-for-base-change
  - cor-morphisms-equal-on-dense-open-reduced-source
  - def-algebraic-closure
  - def-affine-scheme
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-birational-morphism-schemes
  - def-extension-degree-and-finite-extension
  - def-finitely-generated-field-extension
  - def-geometric-fibre
  - def-geometrically-reduced-integral-connected-fibre
  - def-integral-closure-and-integrally-closed-domain
  - def-finite-type-and-module-finite-algebras
  - def-finite-morphism-schemes
  - def-normal-noetherian-ring
  - def-integral-scheme
  - def-perfect-field
  - def-prime-spectrum-and-vanishing-sets
  - def-quasi-compact-and-quasi-separated-morphism
  - def-rational-map-integral-schemes
  - def-relative-algebraic-closure
  - def-separated-morphism-schemes
  - def-smooth-morphism-to-field-classical
  - def-very-ample-invertible-sheaf-relative
  - lem-composite-finite-proper-morphism-proper
  - lem-integral-finite-type-scheme-function-field
  - lem-morphism-schemes-local-on-source-target
  - lem-noetherian-space-has-finitely-many-irreducible-components
  - lem-finite-morphism-affine
  - lem-proper-cohomology-field-extension
  - lem-rational-map-smooth-curve-to-proper-scheme-extends
  - prop-modules-over-a-field-are-projective-flat-and-injective
  - lem-regular-local-domain-induction
  - thm-affine-domain-dimension-transcendence-degree
  - thm-affine-scheme-ring-anti-equivalence
  - thm-equivalent-characterisations-of-a-dvr
  - thm-global-functions-proper-integral-variety
  - thm-integral-closure-finite-finite-type-domain-over-field
  - thm-integral-closure-is-integrally-closed
  - thm-normality-is-local-for-domains
  - thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian
  - cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian
  - def-locally-noetherian-and-noetherian-scheme
  - thm-irreducible-components-and-minimal-primes
  - thm-prime-spectrum-of-a-localisation-bijection
  - thm-noetherian-ring-has-noetherian-spectrum
  - thm-morphisms-into-affine-scheme-global-sections
  - thm-normalization-glues-integral-finite-type-curves
  - thm-projective-morphism-proper
  - thm-projective-space-proper-over-base
  - lem-base-extension-field-coordinate-ring
  - thm-regular-equals-smooth-over-perfect-field
  - thm-smooth-morphisms-stable-base-change-composition
  - thm-subspace-closure-and-interior
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Lemma 10.47.8, relative algebraic closure and geometric irreducibility"
      url: "https://stacks.math.columbia.edu/tag/00I2"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14, 2019), Ch. 7"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice.

(1) For smooth proper geometrically integral curves $C$ and $D$ over a field
$k$, the assignment $f\mapsto f^*$ is a bijection from the set of dominant
$k$-morphisms $C\to D$ onto the set of injective $k$-algebra homomorphisms
$k(D)\hookrightarrow k(C)$.

(2) Let $k$ be a perfect field and let $K/k$ be a finitely generated field
extension of transcendence degree one in which $k$ is relatively algebraically
closed. Then there exists a smooth proper geometrically integral curve $C$ over
$k$ together with a $k$-algebra isomorphism $\varphi:K\to k(C)$. If
$(C,\varphi)$ and $(C',\varphi')$ are two such models, there is a unique
$k$-isomorphism $\psi:C'\to C$ with $\varphi'=\psi^*\circ\varphi$.
Equivalently, over perfect $k$ the category of smooth proper geometrically
integral $k$-curves with dominant morphisms is contravariantly equivalent to the
category of finitely generated transcendence-degree-one field extensions of $k$
in which $k$ is relatively algebraically closed, with $k$-embeddings as
morphisms.

## Facts & Assumptions
**Given:** A field $k$; for (1) smooth proper geometrically integral curves $C,D$ over $k$; for (2) a perfect field $k$ and a finitely generated transcendence-degree-one extension $K/k$ in which $k$ is relatively algebraically closed.

[F1] A curve over $k$ is a nonempty geometrically integral, separated, finite-type $k$-scheme of chain dimension one; a smooth proper curve is additionally smooth and proper over $k$. For an integral finite-type $k$-scheme $W$ the function field is $k(W)=\operatorname{Frac}(A)$ for every nonempty affine open $\operatorname{Spec}A\subseteq W$, and $k(W)$ is the stalk $\mathcal O_{W,\eta}$ at the generic point. ([[def-algebraic-curve-over-field]], [[lem-integral-finite-type-scheme-function-field]])

[F2] A morphism of integral $k$-schemes is dominant if and only if it maps the generic point of the source to the generic point of the target; the pullback of functions is then the stalk map $\mathcal O_{D,\eta_D}\to\mathcal O_{C,\eta_C}$, a homomorphism of fields, and a map of fields is injective. Conversely, if the comorphism on function fields is injective, the morphism is dominant: a non-dominant morphism has image closure a proper closed subset, on some affine chart cut out by a nonzero function pulled back to $0$. ([[def-rational-map-integral-schemes]], [[lem-integral-finite-type-scheme-function-field]])

[F3] Under Choice, every rational map from a smooth curve to a proper $k$-scheme is represented by a unique morphism. ([[lem-rational-map-smooth-curve-to-proper-scheme-extends]])

[F4] Two $k$-morphisms from a reduced finite-type $k$-scheme to a separated $k$-scheme agreeing on a dense open subscheme are equal; a closed subscheme of a reduced scheme with the same underlying space is the whole scheme. ([[cor-morphisms-equal-on-dense-open-reduced-source]])

[F5] Compatible morphisms on an open cover glue uniquely. ([[lem-morphism-schemes-local-on-source-target]])

[F6] For a finite-type integral domain $A$ over $k$ the integral closure of $A$ in $\operatorname{Frac}(A)$ is a finite $A$-module; the integral closure is the set of elements integral over $A$. ([[thm-integral-closure-finite-finite-type-domain-over-field]], [[def-integral-closure-and-integrally-closed-domain]])

[F7] If $A$ is a finite-type $k$-domain then $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$; hence a finitely generated $k$-subalgebra of $K$ whose fraction field is $K$ has dimension one in the case of (2). ([[thm-affine-domain-dimension-transcendence-degree]])

[F8] For a ring $R$ and a scheme $X$, taking global sections induces a bijection $\operatorname{Hom}(X,\operatorname{Spec}R)\cong\operatorname{Hom}_{\mathrm{CRing}}(R,\Gamma(X,\mathcal O_X))$; equivalently $\operatorname{Spec}$ is a contravariant equivalence, so a surjection of $k$-algebras presents a closed immersion. ([[thm-morphisms-into-affine-scheme-global-sections]], [[thm-affine-scheme-ring-anti-equivalence]])

[F9] $\mathbb P^n_S\to S$ is proper for every scheme $S$; a morphism factoring as a closed immersion into $\mathbb P^n_S$ followed by the projection is proper; composition of a finite morphism with a proper morphism is proper. ([[thm-projective-space-proper-over-base]], [[thm-projective-morphism-proper]], [[lem-composite-finite-proper-morphism-proper]])

[F10] Under Choice, the normalization construction applies to a geometrically integral separated finite-type $k$-curve: it gives an integral normal scheme with the same function field, finite and birational over the source, and the universal uniqueness property. ([[thm-normalization-glues-integral-finite-type-curves]])

[F11] A one-dimensional Noetherian local domain is integrally closed if and only if it is a discrete valuation ring, and a discrete valuation ring is a one-dimensional regular local ring. ([[thm-equivalent-characterisations-of-a-dvr]])

[F12] Let $k$ be a perfect field and $X$ a finite-type $k$-scheme. Then $X$ is regular (all local rings regular) if and only if $X\to\operatorname{Spec}k$ is smooth. ([[thm-regular-equals-smooth-over-perfect-field]], [[def-perfect-field]], [[def-smooth-morphism-to-field-classical]])





[F15] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F16] A field is a principal ideal domain, and every finite-type algebra over a principal ideal domain is Noetherian. ([[cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian]])

[F17] A module-finite algebra over a Noetherian ring is Noetherian. ([[thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian]])

[F18] The integral closure of a domain in a field extension of its fraction field is an integrally closed domain. ([[thm-integral-closure-is-integrally-closed]])

[F19] A Noetherian ring is normal when all of its prime localizations are integrally closed domains. ([[def-normal-noetherian-ring]])

[F20] Under Choice, a domain is integrally closed if and only if all of its prime localizations are integrally closed; the theorem includes both implications. ([[thm-normality-is-local-for-domains]])









[F25] A field extension base change pulls every affine chart $\operatorname{Spec}R$ back to $\operatorname{Spec}(R\otimes_k\bar k)$, and these charts cover the base changed scheme. ([[lem-base-extension-field-coordinate-ring]])

[F26] If $A$ is finite type over $k$ and $B$ is module-finite over $A$, then generators of $A$ as a $k$-algebra together with a finite $A$-module generating set of $B$ generate $B$ as a $k$-algebra. This is the finite-type/module-finite convention of [[def-finite-type-and-module-finite-algebras]].

[F27] Geometrically integral means that the fibre after extension to an algebraic closure is integral (nonempty, reduced and irreducible). ([[def-geometric-fibre]], [[def-geometrically-reduced-integral-connected-fibre]])

[F28] A finite morphism pulls an affine open $\operatorname{Spec}A$ back to an affine $\operatorname{Spec}B$ with $B$ module-finite over $A$; in particular, the inverse images of a finite affine cover form a finite affine cover. ([[def-finite-morphism-schemes]], [[lem-finite-morphism-affine]])

[F29] For a curve $C$, chain dimension one gives a strict chain $Z_0\subsetneq Z_1$ of nonempty irreducible closed subsets; irreducibility of $C$ forces $Z_1=C$. Choose an affine open $U=\operatorname{Spec}A$ meeting $Z_0$. It contains the generic point, so $Z_0\cap U\subsetneq U$; hence $U$ has dimension at least one. By the closure formula for an open subspace, strict chains in $U$ remain strict when closed up in $C$, so $U$ has dimension at most one. The prime-spectrum correspondence identifies this chain dimension with $\dim A=1$. Since $\operatorname{Frac}(A)=k(C)$, [F7] gives $\operatorname{trdeg}_k k(C)=1$. ([[def-algebraic-curve-over-field]], [[def-prime-spectrum-and-vanishing-sets]], [[thm-subspace-closure-and-interior]], [F7])

[F30] If $C$ is geometrically integral and $K=k(C)$, then $K\otimes_k\bar k$ is a domain by [F1]. If an algebraic $\alpha\in K$ were not in $k$, the finite simple extension $L=k(\alpha)$ would have degree greater than one. Writing $L=k[T]/(m_\alpha)$ for its minimal polynomial, $L\otimes_k\bar k\cong\bar k[T]/(m_\alpha)$ is not a domain: over $\bar k$, the polynomial $m_\alpha$ factors as $uv$ with both factors nonconstant, so their nonzero residue classes multiply to zero. But the injection $L\hookrightarrow K$ remains injective after tensoring with the flat $k$-module $\bar k$, contradicting that $K\otimes_k\bar k$ is a domain. ([[def-algebraic-closure]], [[prop-modules-over-a-field-are-projective-flat-and-injective]], [F1])

[F31] Every finite extension of a perfect field is simple. For a field extension $L/k$, coefficient base change gives $(k[T]/(m))\otimes_kL\cong L[T]/(m)$. Tensoring injections of $k$-vector spaces with a field preserves injectivity. ([[def-relative-algebraic-closure]], [[cor-finite-extension-of-a-perfect-field-is-simple]], [[lem-tensor-ring-presentations-for-base-change]], [[prop-modules-over-a-field-are-projective-flat-and-injective]])





## Proof

**Proof technique:** direct; part (1) compares dominant morphisms with their pullbacks and uses the extension lemma; part (2) builds the model as the normalization of the projective closure of a finitely generated normal affine chart and verifies smoothness and geometric integrality.

1.1 Part (1), injectivity of the pullback. Let $f:C\to D$ be a dominant $k$-morphism of smooth proper geometrically integral $k$-curves. Then $f(\eta_C)=\eta_D$ [F2], and the pullback $f^*:k(D)=\mathcal O_{D,\eta_D}\to\mathcal O_{C,\eta_C}=k(C)$ is a homomorphism of fields [F1, F2]; being a map of fields into a nonzero field it is injective. [F1, F2, given]

1.2 Part (1), an injective homomorphism gives a dominant rational map. Let $\varphi:k(D)\hookrightarrow k(C)$ be an injective $k$-algebra homomorphism. Choose a finite affine cover $D=\bigcup_i\operatorname{Spec}A_i$ (possible because $D$ is proper, hence quasi-compact [F1]). For each $i$, choose algebra generators $a_{i1},\ldots,a_{ir_i}$ of $A_i$. Choose a nonempty affine open $U_i=\operatorname{Spec}R_i\subset C$; each rational function $\varphi(a_{ij})$ is a fraction in $\operatorname{Frac}(R_i)$, so after choosing a common nonzero denominator $g_i\in R_i$, all these images lie in the actual localization $(R_i)_{g_i}$. The induced $k$-algebra map $A_i\to(R_i)_{g_i}$ therefore defines a morphism $D(g_i)=\operatorname{Spec}((R_i)_{g_i})\to\operatorname{Spec}(A_i)\subseteq D$. These nonempty source opens are dense in the integral curve $C$. On a pairwise overlap $V$, the two maps agree at its generic point because they induce the same function-field map $\varphi$. The equalizer is the pullback of the closed diagonal of the separated scheme $D$, so it is a closed subscheme of $V$. Its underlying closed subset contains the generic point, hence is all of the irreducible space $V$; since $V$ is reduced, [F4] makes the equalizer all of $V$. Thus the maps agree on overlaps and [F5] glues them on their union, a dense open subscheme of $C$, to a rational map $C\dashrightarrow D$. Its induced map on function fields is $\varphi$, which is injective, so the rational map is dominant by [F2]. [F1, F2, F4, F5, given]

1.3 Part (2), the affine normal model. Let $A\subseteq K$ be the $k$-subalgebra generated by a finite generating set of $K$ over $k$; then $A$ is a finite-type $k$-domain with $\operatorname{Frac}(A)=K$ and $\dim A=\operatorname{trdeg}_kK=1$ [F1, F7]. Let $B\subseteq K$ be the integral closure of $A$ in $K=\operatorname{Frac}(A)$. It is finite over $A$ [F6] and thus a finite-type $k$-algebra [F26]. By [F16], $A$ is Noetherian; [F17] makes $B$ Noetherian, and [F18] makes it integrally closed. The normality-locality criterion [F20] and definition [F19] therefore make $B$ a normal Noetherian domain. Also $\operatorname{Frac}(B)=K$, so [F7] gives $\dim B=1$. Thus $\operatorname{Spec}B$ is an integral, dimension-one affine $k$-scheme; geometric integrality is not asserted at this stage. [F1, F6, F7, F16, F17, F18, F19, F20, F26, given]

1.4 Part (2), geometric integrality of the function field. Fix a finite subextension $l/k$ of $\bar k/k$. By [F31], write $l=k(\alpha)$ with irreducible minimal polynomial $m\in k[T]$. If $m$ factored over $K$, take monic factors in $K[T]$ and split $m$ in an algebraic closure of $K$. Every coefficient of either factor is a symmetric expression in roots algebraic over $k$, hence is algebraic over $k$. Relative algebraic closedness forces these coefficients into $k$, contradicting irreducibility of $m$ over $k$. Therefore $K\otimes_kl\cong K[T]/(m)$ is a field. The inclusions for finite subextensions remain injective by [F31]. Every finite family of elements of $K\otimes_k\bar k$ belongs to one such tensor product, since its finitely many coefficients generate a finite subextension. Thus $K\otimes_k\bar k$ is a domain. [F31, given, algebra]

2.1 Part (1), extension and uniqueness. By [F3] and Choice [F15] the rational map of step 1.2 extends to a unique morphism $F:C\to D$; its pullback is $\varphi$. If $f_1,f_2:C\to D$ have the same pullback on function fields, they agree at the generic point. Because $D$ is separated, their equalizer is a closed subscheme of $C$; its underlying closed subset contains the generic point and therefore is all of the irreducible space $C$. Since $C$ is reduced, a closed subscheme with the same underlying space is $C$ itself [F4], so $f_1=f_2$. [F1, F3, F4, F15, step 1.2]

2.2 Part (2), projective closure. Starting from the affine normal model constructed in step 1.3, choose $k$-algebra generators $b_1,\ldots,b_m$ of $B$ and let $I=\ker(k[y_1,\ldots,y_m]\twoheadrightarrow B)$; this gives a closed immersion $\operatorname{Spec}B\hookrightarrow\mathbf A^m_k$ [F8]. Put $S=k[x_0,\ldots,x_m]$, identify $k[y_1,\ldots,y_m]$ with the degree-zero subring of $S[x_0^{-1}]$ by $y_i\mapsto x_i/x_0$, and define the homogeneous ideal $$J=(I\cdot S[x_0^{-1}])\cap S.$$ Because $I$ is prime, its extension to $S[x_0^{-1}]$ is prime, and its contraction $J$ is homogeneous and prime; moreover $x_0\notin J$. Thus $\bar X=\operatorname{Proj}(S/J)$ is an integral closed subscheme of $\mathbb P^m_k$. Its standard chart $D_+(x_0)$ has coordinate ring $k[y_1,\ldots,y_m]/I=B$, so $\operatorname{Spec}B$ is an open dense subscheme of $\bar X$, with function field $K$. Every nonempty affine open of $\bar X$ is an integral finite-type $k$-scheme with function field $K$, so [F7] gives dimension one. Since $\bar X$ is closed in projective space, it is proper over $k$ by [F9]. At this point we use only that $\bar X$ is an integral, separated, finite-type dimension-one $k$-scheme; geometric integrality is established next. [F1, F7, F8, F9, step 1.3]

3.1 Part (2), the projective closure is a curve. Each nonempty affine chart $\operatorname{Spec}R$ of $\bar X$ embeds its coordinate ring in $K$. By [F31] this gives an injection $R\otimes_k\bar k\hookrightarrow K\otimes_k\bar k$, whose target is a domain by step 1.4. These nonzero domains are the charts of $\bar X_{\bar k}$ by [F25]. Any two charts meet after base change: their original nonempty intersection contains a nonempty affine open, whose coordinate algebra also remains a nonzero domain after tensoring. The charts are irreducible and have nonempty open intersections, so their union is irreducible; it is also reduced and nonempty. Hence $\bar X$ is geometrically integral. Together with step 2.2, this makes it a curve in [F1], so the hypothesis of [F10] is satisfied. [F1, F25, F31, step 1.4, step 2.2]

3.2 Part (1), bijectivity. By steps 1.1 and 2.1 the assignment $f\mapsto f^*$ is a well-defined map from dominant $k$-morphisms $C\to D$ to injective $k$-algebra homomorphisms $k(D)\hookrightarrow k(C)$; it is injective by step 2.1 and surjective by steps 1.2 and 2.1, hence a bijection onto its image, which is the set of all injective homomorphisms by step 1.2. This proves (1). [step 1.1, step 1.2, step 2.1]

4.1 Part (2), normalization. Let $\nu:X\to\bar X$ be the normalization [F10], applied to the geometrically integral curve established in steps 2.2 and 3.1. Then $X$ is integral and normal, $\nu$ is finite and birational, and $k(X)=K$. Since $\bar X$ is proper over $k$ and $\nu$ is finite, the composite $X\to\bar X\to\operatorname{Spec}k$ is proper by [F9]. [F9, F10, step 2.2, step 3.1]

5.1 Part (2), dimension and smoothness. The finite morphism $X\to\bar X$ and the finite standard affine cover of the projective scheme $\bar X$ give a finite affine cover of $X$ by [F28]; on each chart its ring is module-finite over a finite-type $k$-algebra, hence is finite type over $k$ by [F26]. Thus $X$ is finite type. For every nonempty affine open $V=\operatorname{Spec}R\subseteq X$, [F1] identifies $\operatorname{Frac}(R)$ with $k(X)=K$; [F7] then gives $\dim R=\operatorname{trdeg}_kK=1$. This gives chain dimension one on $X$: any chain in $X$ restricts to an affine chart containing the generic point of its smallest member, and the strict inclusions persist after restriction; conversely each affine chart is open, so its chains give chains in $X$ by taking closures. If $x$ is not the generic point, choose an affine neighborhood $V=\operatorname{Spec}R$ and let $\mathfrak p$ correspond to $x$. Then $\mathfrak p\ne(0)$, so $R_{\mathfrak p}$ has dimension at least one, while the chain-dimension bound makes it at most one. The local ring is Noetherian because $R$ is finite type over the field [F16], and integrally closed because $X$ is normal. It is therefore a one-dimensional Noetherian local integrally closed domain, hence a DVR by [F11], and thus regular. The generic local ring is the field $k(X)$ [F1], regular of dimension zero. So all local rings of $X$ are regular; as $X$ is finite type over perfect $k$, [F12] makes $X\to\operatorname{Spec}k$ smooth. This argument does not call $X$ a curve before geometric integrality is proved. [F1, F7, F11, F12, F16, F26, F28, step 4.1]

5.2 Part (2), geometric integrality of the normalization. Every nonempty affine coordinate ring $R$ of $X$ embeds in its function field $K$ [F1]. As in step 3.1, [F25] and [F31] identify its base-changed chart with the spectrum of the nonzero domain $R\otimes_k\bar k\subseteq K\otimes_k\bar k$. Nonempty intersections remain nonempty by the same argument applied to an affine open in the intersection. Thus $X_{\bar k}$ is nonempty, reduced and irreducible, and $X$ is geometrically integral by [F27]. [F1, F25, F27, F31, step 1.4, step 3.1, step 4.1]

6.1 Part (2), existence and uniqueness. Steps 2.2–5.2 establish that $X$ is a smooth proper geometrically integral curve, and along the construction $k(X)=K$, giving a model $(X,\varphi)$ with $\varphi:K\to k(X)$ the identity identification. For uniqueness let $(C,\varphi)$ and $(C',\varphi')$ be two models. Then $\alpha:=\varphi'\circ\varphi^{-1}:k(C)\to k(C')$ is an isomorphism. By part (1), it determines a unique dominant morphism $\psi:C'\to C$ whose pullback is $\psi^*=\alpha$; thus $\varphi'=\psi^*\circ\varphi$. Applying part (1) to $\alpha^{-1}$ gives $\psi':C\to C'$ with $(\psi')^*=\alpha^{-1}$. The pullback of $\psi'\circ\psi:C'\to C'$ is $\psi^*\circ(\psi')^*=\alpha\circ\alpha^{-1}=\mathrm{id}_{k(C')}$, so uniqueness in part (1) gives $\psi'\circ\psi=\mathrm{id}_{C'}$; similarly $\psi\circ\psi'=\mathrm{id}_C$. Hence $\psi$ is the unique $k$-isomorphism $C'\to C$ satisfying the stated relation. [step 3.2, step 4.1, step 5.1, step 5.2]

7.1 Conclusion and object correspondence. Steps 1.3–6.1 prove that every field object in (2) has a smooth proper geometrically integral curve model, unique up to the stated unique isomorphism; step 3.2 proves full faithfulness for every field $k$. Conversely, for any smooth proper geometrically integral curve $C$ over $k$, its function field $K=k(C)$ is finitely generated over $k$ by [F1], has transcendence degree one by [F29], and has $k$ relatively algebraically closed by [F30]. Thus its function field is an object of the stated field category. The object assignments and the contravariant bijection of morphisms from step 3.2 give the claimed equivalence. The Axiom of Choice is inherited from the extension, normalization, properness, and geometric-integrality suppliers cited at their uses. [F1, F29, F30, step 3.2, step 6.1] ∎
