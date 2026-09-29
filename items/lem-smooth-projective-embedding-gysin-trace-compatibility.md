---
id: lem-smooth-projective-embedding-gysin-trace-compatibility
kind: lemma
title: Embedding compatibility of smooth-projective Gysin traces
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-regular-immersion-local-to-global-ext-collapse
  - thm-serre-duality-projective-space-coherent-sheaves
  - lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction
  - lem-smooth-projective-rational-point-koszul-residue-normalization
  - lem-proper-cohomology-field-extension
  - thm-proper-pushforward-coherent
  - lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-cech-to-sheaf-cohomology-comparison
  - thm-ext-is-hom-in-the-derived-category
  - prop-yoneda-product-is-composition-in-the-derived-category
  - lem-differentials-commute-base-change-schemes
  - def-cup-product-sheaf-cohomology
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Duality for Schemes"
      url: "https://stacks.math.columbia.edu/download/duality.pdf"
      locator: "§27, Lemmas 27.1, 27.4–27.5 and Remarks 27.2–27.3, 27.6"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry Classes 53–54"
      url: "https://math.stanford.edu/~vakil/0506-216/216Cjun2807.pdf"
      locator: "Class 53 §§1–5 and Class 54 §§7, 11"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a smooth projective $k$-scheme
of pure dimension $n$, with two closed projective embeddings
$i:X\hookrightarrow\mathbb P^N_k$ and
$j:X\hookrightarrow\mathbb P^M_k$. The scalar maps
$$t_i,t_j:H^n(X,\omega_X)\longrightarrow k$$
obtained by the regular-immersion local-to-global Ext collapse,
projective-space coherent duality, evaluation at
$1\in H^0(X,\mathcal O_X)$ and the normalized Laurent trace are equal.
The comparison is compatible with the cup/evaluation pairings for every
finite locally free $\mathcal O_X$-module $E$, naturally in bundle maps on
the fixed $X$ and in isomorphisms of the embedded data, and with extension
of the base field.

## Facts & Assumptions

**Given:** $X,k,n,i,j$ as in the statement.

[F1] For any finite locally free $E$ on $X$ and an embedding of
codimension $c$, regular-immersion collapse gives
$\operatorname{Ext}^{c+r}_{\mathbb P^N}(i_*E,\omega_{\mathbb P^N})
\cong H^r(X,E^\vee\otimes\omega_X)$, natural in $E$; adjunction
identifies the local Koszul determinant factor with $\omega_X$.
([[lem-regular-immersion-local-to-global-ext-collapse]],
[[lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction]])

[F2] Projective-space coherent duality makes
$\operatorname{Ext}^{N-q}_{\mathbb P^N}(i_*E,\omega_{\mathbb P^N})$
the dual of $H^q(X,E)$ by Yoneda evaluation followed by the normalized
Laurent trace. ([[thm-serre-duality-projective-space-coherent-sheaves]])

[F3] For each rational point $x$ of a smooth embedded $X$, the intrinsic
Koszul class of $x$ composed with the immersion class has ambient
Laurent trace $1$, independently of the embedding and local parameters.
([[lem-smooth-projective-rational-point-koszul-residue-normalization]])

[F4] Proper coherent cohomology is finite over the field; for a field
extension $k\to K$, the natural map on coherent cohomology of a proper
scheme is an isomorphism in every degree. Its construction is natural
in morphisms of coherent sheaves.
([[thm-proper-pushforward-coherent]],
[[lem-proper-cohomology-field-extension]])

[F5] Cup products are natural in the sheaf arguments and in morphisms
of sheaves. ([[def-cup-product-sheaf-cohomology]])

[F6] The Axiom of Choice is [[def-axiom-of-choice]].

[F7] Every coherent sheaf on projective space has a finite resolution by finite sums of twisting line bundles. On a finite affine cover of a separated scheme with affine intersections, the ordered Čech complex of a quasi-coherent sheaf computes its sheaf cohomology, naturally in the sheaf and the cover. ([[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]], [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]])

[F8] The Čech-to-sheaf-cohomology comparison is natural in the coefficient sheaf; global Ext classes are morphisms in the derived category, and their Yoneda product is composition of those morphisms. We use the published projective-Hom sign comparison only on affine or stalk module categories carrying finite free Koszul resolutions. ([[thm-cech-to-sheaf-cohomology-comparison]], [[thm-ext-is-hom-in-the-derived-category]], [[prop-yoneda-product-is-composition-in-the-derived-category]])

[F9] Relative differentials commute with scheme base change; taking top exterior powers on a smooth pure-dimensional scheme therefore identifies $\omega_{X_K}$ with the pullback of $\omega_X$. ([[lem-differentials-commute-base-change-schemes]])

## Proof

1.1 For an embedding $i$ of codimension $c=N-n$, combine [F1] in degree $c+n=N$ for $E=\mathcal O_X$ with [F2] in degree $N$. This gives a perfect pairing $$H^0(X,\mathcal O_X)\times H^n(X,\omega_X)\longrightarrow k,$$ whose value at $(1,\eta)$ defines $t_i(\eta)$. The same construction defines $t_j$. Naturality of the Ext collapse and of Yoneda evaluation shows that the pairing is $(f,\eta)\mapsto t_i(f\eta)$; in particular $H^n(X,\omega_X)$ has dimension $\dim_kH^0(X,\mathcal O_X)$. This uses only the already proved projective-space duality and collapse; no smooth-projective duality is assumed. [F1, F2]

2.1 First suppose $k$ is algebraically closed. By [F4], the algebra $A=H^0(X,\mathcal O_X)$ is finite-dimensional over $k$. It is reduced: if $f^m=0$ as a global section, then every germ $f_x$ is nilpotent, so $f_x=0$ because smooth $X$ is reduced, and hence $f=0$. A finite reduced commutative $k$-algebra over algebraically closed $k$ is a product $k^s$: it is Artinian, its distinct maximal ideals have zero intersection, and the Chinese remainder theorem gives the product of their finite field quotients, each equal to $k$. The primitive idempotents cut out the nonempty open-and-closed connected components $X_1,\ldots,X_s$. Choose a rational point $x_a\in X_a$ for each component; it exists because a nonempty finite-type $k$-scheme has a closed point, and a closed point has residue field $k$ here. Evaluations $\operatorname{ev}_{x_a}:A\to k$ are the coordinate projections and form a basis of $A^\vee$. If $X=\varnothing$, then $A=0$ and both traces are zero, so the conclusion is immediate. [F4, step 1.1, algebra]

3.1 For each chosen $x_a$ let $\epsilon_{x_a}$ be the normalized class in $\operatorname{Ext}^n_X(k_{x_a},\omega_X)$ of [F3]. The quotient $\mathcal O_X\to k_{x_a}$ induces a class $\eta_{x_a}\in\operatorname{Ext}^n_X(\mathcal O_X,\omega_X) =H^n(X,\omega_X)$. Naturality of Yoneda composition and [F3] give $$t_i(f\eta_{x_a})=f(x_a),\qquad t_j(f\eta_{x_a})=f(x_a)\quad(f\in A).$$ In particular $t_i(\eta_{x_a})=t_j(\eta_{x_a})=1$. The perfect pairing of 1.1 sends $\eta_{x_a}$ to $\operatorname{ev}_{x_a}\in A^\vee$, so the $s$ classes $\eta_{x_a}$ form a basis of $H^n(X,\omega_X)$ by 2.1. The two linear forms agree on this basis, hence $t_i=t_j$ when $k$ is algebraically closed. This point-basis argument avoids presuming duality for arbitrary coherent sheaves. [F1, F2, F3, step 1.1, step 2.1]


4.1 To extend the algebraically closed comparison of step 3.1 to a general field $k$, choose an algebraic closure $K$ and use [F4] to identify $H^n(X,\omega_X)\otimes_kK$ with $H^n(X_K,\omega_{X_K})$. Let $\mathcal I$ be the coherent ideal of $i(X)$ in $\mathbb P^N_k$. Resolve $\mathcal I$ by [F7] and splice its finite twisted locally free resolution with $\mathcal O_{\mathbb P^N}\twoheadrightarrow i_*\mathcal O_X$. This gives a finite locally free resolution $P^\bullet\to i_*\mathcal O_X$ with $P^0=\mathcal O_{\mathbb P^N}$. On the finite standard affine cover form the bicomplex $C^{p,q}=\check C^q(\mathcal H om(P^{-p},\omega_{\mathbb P^N}))$, with internal Hom degree $p$ first, Čech degree $q$ second, total differential $D=d_{\mathcal H om}+(-1)^p\delta_{\check C}$, and the ordered Alexander–Whitney Čech product. This is the Koszul/Hom-first convention used in the rational-point normalization [F3] and in the local comparison below. [F3, F4, F7, step 1.1, step 3.1]

5.1 Every Hom term in the bicomplex of step 4.1 is a finite sum of twists, and its higher cohomology on each affine intersection vanishes by [F7]. Comparing with an injective resolution of $\omega_{\mathbb P^N}$ therefore identifies $H^m(\operatorname{Tot}C)$ with $\operatorname{Ext}^m_{\mathbb P^N}(i_*\mathcal O_X,\omega_{\mathbb P^N})$. Filter by Čech degree and first take internal Hom cohomology on each affine intersection; this gives local sheaf Ext, and the next page takes its sheaf cohomology, yielding the **raw Hom-first** local-to-global Ext edge $e_m$ of [F1]. To identify an intrinsic class with this global Ext group, apply the normalized inverse $D_j^{-1}$ of [F1], which inserts $\sigma_c=(-1)^{c(c+1)/2}$ exactly once after the raw edge and Hodge identification. The chain map $\mathcal O_{\mathbb P^N}\to P^\bullet$ equal to the identity in degree zero makes precomposition a map of these bicomplexes to $\check C^\bullet(\omega_{\mathbb P^N})$, representing the Gysin map used in step 1.1. [F1, F7, step 4.1]

6.1 Tensor the finite locally free resolution $P^\bullet$ of step 4.1 with $K$; because $K/k$ is flat, it remains exact and resolves $i_{K*}\mathcal O_{X_K}$. On every standard affine intersection, sections of a twisting bundle and all maps of the finite bicomplex in step 5.1 commute termwise with $k\to K$. Flatness carries its cohomology, filtration and raw edge maps to those for $i_K$, and preserves the fixed scalar $\sigma_c$ in the normalized collapse. By [F9], $\Omega^1_{X_K/K}\cong\Omega^1_{X/k}\otimes_kK$ on affine charts; since $X$ is smooth of pure dimension $n$, taking $\bigwedge^n$ identifies $\omega_{X_K}\cong\omega_X\otimes_kK$, so the cohomology comparison of [F4] has the required coefficient. On a local regular-sequence chart the degree-$c$ sheaf-Ext identification is the dual Koszul determinant map of [F1]; its fixed integer signs, generator matrices and determinant adjunction commute with extension of scalars. The Laurent coefficient trace sends the same ordered monomial to $1$ over $K$. Thus the whole embedding trace $t_i$, and similarly $t_j$, commutes with $k\to K$, beyond the cohomology comparison of [F4]. By step 3.1 their extensions to $K$ agree, so faithful flatness gives $t_i=t_j$ over $k$. [F1, F3, F4, F7, F9, step 3.1, step 5.1]

7.1 Let $E$ be finite locally free. Choose an injective $\mathcal O_{\mathbb P^N}$-module resolution $\omega_{\mathbb P^N}\to I^\bullet$ as in the proof of [F1]. For every ambient open $V$ and $e\in(i_*E)(V)$, multiplication by $e$ is the canonical $\mathcal O_V$-linear map $u_e:i_*\mathcal O_X|_V\to i_*E|_V$. Precomposition defines, without a frame or lift, a restriction-compatible map of sheaf complexes $i_*E\otimes\mathcal Hom(i_*E,I^\bullet)\to\mathcal Hom(i_*\mathcal O_X,I^\bullet)$, $e\otimes\phi\mapsto\phi\circ u_e$. The extension-by-zero/injectivity argument in [F1, proof 2.1(ii)] makes every sheaf $\mathcal Hom(i_*E,I^p)$ and $\mathcal Hom(i_*\mathcal O_X,I^p)$ flasque; their ordered Čech bicomplexes on the common finite affine cover therefore compute global Ext, while the ordered Čech complex of the quasi-coherent $i_*E$ computes $H^q(X,E)$ by [F7]. Apply the Alexander–Whitney cup to this **strict global map**: for a Čech $q$-cochain $a$ and a Čech $(n-q)$-cochain $b$ of internal Hom degree $c$, the total tensor convention of 4.1 evaluates their product as $(-1)^{cq}\,b\circ u_a$ on the ordered intersection. The injective-resolution lane of the shifted derived composition in [F8] uses this same total tensor rule, so the strict map computes the ambient Yoneda product in [F2]; it is restriction-compatible and requires no coherent choices of lifted frames on triple overlaps. For the Hom-first differential of 4.1, the internal-Hom-degree $c$ row has horizontal differential $(-1)^c\delta_{\check C}$. Its comparison with ordinary Čech cohomology in degree $j$ therefore multiplies a row cocycle by $T_j=(-1)^{cj}$. For an Ext class with row Čech degree $r=n-q$, the two routes through the product square differ in edge conversion by $T_{q+r}/T_r=(-1)^{cq}$, exactly the graded interchange factor in the strict total evaluation; their product is $1$. This calculates the arbitrary-degree sign rather than importing a projective-resolution cochain convention. The strict map acts on the entire Čech–Hom total complexes, including every correction component of an Ext cocycle. It respects the filtration by Čech degree; taking internal Hom cohomology first as in 5.1 leaves only the sheaf-Ext row $c$ for both targets by [F1]. The induced product on this one row determines the product on the abutments, without choosing a pure-degree-$c$ representative. To identify its internal-Hom-degree $c$ local sheaf-Ext row, take an ambient affine chart $U=\operatorname{Spec}A$ with regular ideal $I=(f_1,\ldots,f_c)$, choose a frame $E|_{X\cap U}\cong(A/I)^r$, and put $F_U=A^r$ as its ambient free lift. The finite free complexes $K(f;A)$ and $K(f;A)\otimes_A F_U$ resolve $i_*\mathcal O_X|_U$ and $i_*E|_U$; on their top Hom cochains precomposition by a lift $\widetilde e\in F_U$ is ordinary evaluation. If two lifts differ by $\sum f_i e_i$, exterior multiplication with the $i$th Koszul basis vector gives a chain homotopy for multiplication by $f_i$, so the induced local Ext map is independent of lifts. The Hodge determinant identification and adjunction of [F1] carry it to contraction $E\otimes E^\vee\otimes\omega_X\to\omega_X$. In the Čech–Hom comparison, moving the local Hom degree $c$ past the Čech degree $q$ gives precisely the $(-1)^{cq}$ already displayed; hence the local contraction square and the strict global evaluation square agree with the intrinsic Čech cup of [F5] after the natural comparison of [F8]. The normalized collapse for $E$ and for $\mathcal O_X$ is $D=\sigma_c$ times the **raw** edge in both cases [F1, step 5.1]; the same fixed factor occurs once on each route of this square, so no second sign is applied. Thus for every $q$ the ambient Yoneda pairing is the intrinsic cup/contraction pairing followed by $t_i$. Replacing $i$ by $j$ changes only that final trace, equal by 6.1. The strict map commutes with restriction to local charts and is natural under bundle maps on the fixed $X$ and isomorphisms of the embedded data; field-extension compatibility is 6.1. AC is inherited through the cited injective and cohomology suppliers. [F1, F2, F5, F6, F7, F8, step 4.1, step 5.1, step 6.1] ∎
