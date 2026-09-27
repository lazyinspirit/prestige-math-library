---
id: lem-bounded-finite-projective-model-for-khovanov-seidel-modules
kind: lemma
title: "The bounded projective comparison for the derived category"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-the-khovanov-seidel-algebra-has-finite-homological-dimension, def-graded-khovanov-seidel-module-category-and-projectives, def-finitely-generated-graded-projective-module, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules, def-homotopy-category-of-chain-complexes, def-chain-homotopy, def-derived-category-of-an-abelian-category, def-shift-of-a-chain-complex, prop-bounded-derived-localizations-embed-fully-faithfully, def-homotopically-projective-bounded-above-complex, prop-morphisms-from-a-homotopically-projective-complex-need-no-roof, def-mapping-cone-of-a-chain-map, thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact, def-triangulated-category, def-triangulated-category-axiom-tr-two, def-triangulated-category-axiom-tr-three, thm-the-homotopy-category-of-an-abelian-category-is-triangulated, prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third, def-small-locally-small-and-large-category, thm-projective-complexes-model-the-bounded-above-derived-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles Weibel, An Introduction to Homological Algebra, ch. 10 §10.4, pp. 387-390"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §§2a-2c, printed pp. 9-11"
      url: "https://arxiv.org/pdf/math/0006056"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Fix $m\ge1$ and let $A_m\text{-mod}$ be the abelian category of
[[def-graded-khovanov-seidel-module-category-and-projectives]]. Let
$K(A_m\text{-mod})$ be the homotopy category of cochain complexes of
[[def-homotopy-category-of-chain-complexes]], let $K^b(A_m\text{-mod})$ be its
full subcategory of bounded complexes, and let
$K^b(\operatorname{proj}^{gr}A_m)$ be the full subcategory of
$K^b(A_m\text{-mod})$ whose objects are the bounded complexes $P$ with every
term $P^n$ a finite graded projective left $A_m$-module. Let
$$\Theta:K^b(\operatorname{proj}^{gr}A_m)\longrightarrow D^b(A_m\text{-mod})$$
be the composite of this inclusion with the localization $Q$ of
$D^b(A_m\text{-mod})$ at the quasi-isomorphisms of
[[def-derived-category-of-an-abelian-category]]. Then:

1. $\Theta$ is **full and faithful**: for all objects $P,Q$ the map
   $\operatorname{Hom}_{K^b}(P,Q)\to\operatorname{Hom}_{D^b}(P,Q)$ is bijective.
2. $\Theta$ is **essentially surjective in the explicit sense**: for every
   bounded complex $X$ of finitely generated graded left $A_m$-modules one can
   construct a bounded complex $P$ of finite graded projectives and an
   isomorphism $X\cong\Theta(P)$ in $D^b(A_m\text{-mod})$ from the finite
   resolutions of [[thm-the-khovanov-seidel-algebra-has-finite-homological-dimension]]
   by a finite induction on the length of $X$, choosing at each of its finitely
   many stages one lift and one cone.

The comparison $\Theta$ is exact for the two triangulations, and the two claims
above give full faithfulness and an explicit objectwise replacement for every
bounded complex. The Hom-collections of $D^b(A_m\text{-mod})$ are sets. This is
the bounded form of
[[thm-projective-complexes-model-the-bounded-above-derived-category]], in which
the bounded-above projective replacements and the successive homotopy lifts are
no longer hypotheses: the finite homological dimension of $A_m\text{-mod}$
supplies the replacements, and the finitely many stages of the construction
supply the lifts, so no choice principle and no dependent choice are used.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the abelian category $A_m\text{-mod}$ of finitely generated graded left $A_m$-modules, its homotopy category of cochain complexes and the bounded derived category $D^b(A_m\text{-mod})$.

[L1] Every object $M$ of $A_m\text{-mod}$ has a finite graded projective resolution $0\to P_L\to\cdots\to P_0\to M\to0$ with all $P_n$ finite graded projective, $L\le2m+1$, and the construction is explicit and uses only finitely many choices ([[thm-the-khovanov-seidel-algebra-has-finite-homological-dimension]]).

[F2] $K(\mathcal A)$ has the cochain complexes of an additive category $\mathcal A$ as objects and the homotopy classes of chain maps as morphisms, with composition induced by composition of representatives ([[def-homotopy-category-of-chain-complexes]], [[def-chain-homotopy]]).

[F3] $D(\mathcal A)=K(\mathcal A)[\mathrm{qis}^{-1}]$ with localization functor $Q$, and $D^b$ is the localization of the bounded variant; the cone convention is $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$, $d(y,x)=(d_Yy+fx,-d_Xx)$, ending in $X[1]$; the roof calculus is available under the standing size hypothesis of a small category of complexes or supplied small cofinal denominator families ([[def-derived-category-of-an-abelian-category]], [[def-shift-of-a-chain-complex]]).

[L4] The canonical functors $D^b(\mathcal A)\to D(\mathcal A)$ are fully faithful and exact, and their essential images consist exactly of the complexes whose cohomology is bounded on both sides ([[prop-bounded-derived-localizations-embed-fully-faithfully]]).

[F5] A complex $P$ is homotopically projective, or K-projective, when $\operatorname{Hom}_K(P,A[r])=0$ for every acyclic complex $A$ and every integer $r$ ([[def-homotopically-projective-bounded-above-complex]]).

[L6] For a K-projective complex $P$ and any complex $X$ the localization map $\operatorname{Hom}_K(P,X)\to\operatorname{Hom}_D(P,X)$ is bijective, under the size convention of [F3] ([[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]]).

[L7] For a chain map $f:X\to Y$ the cone is $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$ with $d(y,x)=(d_Yy+fx,-d_Xx)$, and the canonical sequence $0\to Y\to\operatorname{Cone}(f)\to X[1]\to0$ is a degreewise split short exact sequence of complexes ([[def-mapping-cone-of-a-chain-map]], [[thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]]).

[L8] $K(\mathcal A)$ is a triangulated category in which the distinguished triangles are those isomorphic to cone triangles, with TR1, TR2 (rotation) and TR3 (completion of a morphism of triangles from its first arrow and two object components) holding ([[thm-the-homotopy-category-of-an-abelian-category-is-triangulated]], [[def-triangulated-category]], [[def-triangulated-category-axiom-tr-two]], [[def-triangulated-category-axiom-tr-three]]).

[L9] In a morphism of distinguished triangles, if any two object components are isomorphisms, then the third is an isomorphism ([[prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third]]).

[L10] A category is small when both its object and morphism collections are sets ([[def-small-locally-small-and-large-category]]).

[L11] A graded left $A_m$-module $P$ is finite graded projective exactly when it is graded projective and generated by finitely many homogeneous elements, where graded projectivity is the lifting property against degree-zero epimorphisms; a finitely generated graded module is a quotient of a finite direct sum of internal shifts of $A_m$ by a graded submodule ([[def-finitely-generated-graded-projective-module]]).

[L12] A graded left $A$-module $P$ is finite graded projective if and only if it is a degree-zero direct summand of a finite direct sum of internal shifts $A\{r_1\}\oplus\cdots\oplus A\{r_n\}$ ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

[L13] With supplied bounded-above projective replacements and DC or supplied homotopy lifts, $K^-(\operatorname{Proj}\mathcal A)\to D^-(\mathcal A)$ is an equivalence of triangulated categories ([[thm-projective-complexes-model-the-bounded-above-derived-category]]).



## Proof

**Proof technique:** direct.

1.1 *The bounded localization has a small family of roofs.* For each finite list of integers $\mathbf r=(r_1,\dots,r_s)$ put $F_{\mathbf r}:=\bigoplus_{j=1}^s A_m\{r_j\}$. By [L11], every object of $A_m\text{-mod}$ is a quotient $F_{\mathbf r}/N$ for some graded submodule $N\subseteq F_{\mathbf r}$. The finite lists $\mathbf r$ form a set and, for each one, the graded submodules of $F_{\mathbf r}$ form a set. Thus the pairs $(\mathbf r,N)$ are a set of presentation codes. Let $\mathcal M_m^{\mathrm{code}}$ have these codes as objects and all degree-zero $A_m$-module maps between their quotient modules as morphisms. Its object collection is a set, and its morphism collection is a union of sets of maps between fixed quotient modules, hence a set by [L10]. Every finitely generated graded module is isomorphic to the quotient of one of these codes. A bounded complex has only finitely many nonzero terms, so finite choice of a code and an isomorphism for each such term, followed by transport of its differentials, gives an isomorphic bounded complex over $\mathcal M_m^{\mathrm{code}}$. The category of these coded bounded complexes is small: its objects are finite-support sequences of codes with differentials from the set of code morphisms, and its morphisms and homotopy classes are sets. Every bounded complex is isomorphic to one of them, and a quasi-isomorphism remains one after transport. For fixed bounded endpoints $X,Y$, the maps from each coded middle complex to $X$ and $Y$ form sets, since they are families of functions between fixed underlying sets; taking their union over the set of coded middle complexes still gives a set. Replacing the middle complex of any bounded roof or comparison by an isomorphic code complex therefore gives small cofinal denominator families as required by [F3]. The bounded roof calculus and the bounded instance of [L6] apply, and $D^b(A_m\text{-mod})$ has Hom sets. This construction uses only finitely many choices for each bounded complex; it selects no skeleton of the large category. [L10, L11, F3]

1.2 *Bounded projective complexes are K-projective, without dependent choice.* Let $P$ be a complex with every $P^n$ projective and $P^n=0$ for $n\notin[a,b]$, and let $f:P\to A$ be a chain map into an acyclic complex $A$. We construct maps $h^n:P^n\to A^{n-1}$ with $d_Ah^n+h^{n+1}d_P=f^n$ by descending induction on $n\le b$: put $h^{b+1}=0$, and given $h^{n+1}$ the map $g:=f^n-h^{n+1}d_P:P^n\to A^n$ satisfies $d_Ag=d_Af^n-d_Ah^{n+1}d_P=f^{n+1}d_P-(f^{n+1}-h^{n+2}d_P)d_P=0$, so $g$ lands in $\ker d_A^n=\operatorname{im}(d_A^{n-1})$ by acyclicity of $A$ at $A^n$, the map $d_A^{n-1}:A^{n-1}\to\ker d_A^n$ is an epimorphism, and the projective lifting property of [L11] applied to the projective $P^n$ supplies $h^n$ with $d_Ah^n=g$. The induction has finitely many stages and each stage chooses one lift, so $f$ is null-homotopic and $\operatorname{Hom}_K(P,A[r])=0$ for all $r$ after shifting; hence $P$ is K-projective by [F5], with no countable or dependent choice. [F5, L11]

1.3 *Degreewise split extensions give distinguished triangles.* Let $0\to X'\xrightarrow{i}X\xrightarrow{q}X''\to0$ be a degreewise split short exact sequence of bounded cochain complexes. Choose degreewise maps $k:X\to X'$ and $j:X''\to X$ with $ki=1$, $qj=1$, $kj=0$ and $1_X=ik+jq$; these need not be chain maps. Set $\eta:=k(d_Xj-jd_{X''}):X''\to X'[1]$. Since $q(d_Xj-jd_{X''})=0$, one has $d_Xj-jd_{X''}=i\eta$, and the cochain identity $d_X^2j=jd_{X''}^2=0$ gives $d_{X'}\eta+\eta d_{X''}=0$. Thus $\psi:X''\to\operatorname{Cone}(i)$, $\psi(z)=(jz,-\eta z)$, is a chain map. The projection $\varphi:\operatorname{Cone}(i)\to X''$, $\varphi(x,x')=q(x)$, is also a chain map, and $\varphi\psi=1_{X''}$. For $H(x,x'):=(0,kx)$ one computes $dH+Hd=1_{\operatorname{Cone}(i)}-\psi\varphi$, so $\varphi$ and $\psi$ are inverse isomorphisms in $K(A_m\text{-mod})$. The canonical cone triangle ends with the projection $\operatorname{Cone}(i)\to X'[1]$; composing that projection with $\psi$ gives the connecting map $\delta=-\eta:X''\to X'[1]$. Consequently $X'\xrightarrow{i}X\xrightarrow{q}X''\xrightarrow{\ \delta\ }X'[1]$ is distinguished by the isomorphism-closure clause of [L8]. [L7, L8]

1.4 *The base of the replacement induction.* Let $X=M[-a]$ be a complex concentrated in degree $a$. By [L1] choose a finite graded projective resolution $0\to Q_L\to\cdots\to Q_0\xrightarrow{\varepsilon}M\to0$ with $Q_k=0$ for $k>L$. Put $P^{a-k}=Q_k$ for $0\le k\le L$ and $P^n=0$ otherwise, with $d_P^{a-k}:Q_k\to Q_{k-1}$ the resolution differential for $k\ge1$; its differential raises cohomological degree by one. The augmentation $P^a=Q_0\xrightarrow{\varepsilon}X^a=M$ and zero maps in other degrees give a quasi-isomorphism $P\to X$, since the resolution is exact below degree $a$ and has cohomology $M$ in degree $a$. The complex $P$ is bounded and has finite graded projective terms, so $X\cong\Theta(P)$ in $D^b$ by [F2] and [F3]. If $X=0$, use the zero complex. [L1, F2, F3]

2.1 *$\Theta$ is full and faithful.* Let $P,Q$ be bounded complexes of finite graded projectives. The complex $P$ is K-projective by step 1.2 and [F5]. Apply the bounded roof statement [L6] using the small coded denominator families of step 1.1: localization sends $\operatorname{Hom}_{K^b}(P,Q)$ bijectively to $\operatorname{Hom}_{D^b}(P,Q)$. The morphisms of $K^b$ are the same homotopy classes as in $K(A_m\text{-mod})$, so this is exactly the map induced by $\Theta$. [step 1.1, step 1.2, F2, L6, F5]

2.2 *The inductive step.* Let $X$ be bounded with $X^n=0$ for $n\notin[a,b]$ and $X^a\ne0$, and suppose $b>a$. Let $X'$ be the upper brutal subcomplex, with $X'^n=0$ for $n\le a$ and $X'^n=X^n$ for $n>a$, and let $X'':=X^a[-a]$ have its only nonzero term in degree $a$. Since the differential raises degree, $X'$ really is a subcomplex, $X''$ is the quotient complex, and $0\to X'\xrightarrow{i}X\xrightarrow{q}X''\to0$ is degreewise split. Both pieces have fewer nonzero terms than $X$, and step 1.3 gives a connecting map $\delta:X''\to X'[1]$ making the triangle distinguished. By induction and step 1.4 choose quasi-isomorphisms $p':P'\to X'$ and $p'':P''\to X''$ from bounded complexes of finite graded projectives. The complex $P''$ is K-projective by step 1.2, so the bounded form of [L6] represents $Q(p'[1])^{-1}Q(\delta)Q(p'')$ by a chain map $w:P''\to P'[1]$; injectivity in [L6] gives $p'[1]w=\delta p''$ in $K^b(A_m\text{-mod})$. Put $P:=\operatorname{Cone}(-w[-1])$. This is bounded, and each term is a finite direct sum of finite graded projectives, hence finite graded projective by [L12]. The minus sign ensures that the rotated cone triangle has connecting map $w$. [step 1.2, step 1.3, step 1.4, L6, L12]

3.1 *The comparison of triangles and the induction closes.* The cone triangle of $-w[-1]:P''[-1]\to P'$ is distinguished and, after one rotation by TR2 of [L8], reads $P'\xrightarrow{\ f\ }P\xrightarrow{\ g\ }P''\xrightarrow{\ w\ }P'[1]$: rotation changes the sign of the shifted first arrow, so $-(-w[-1])[1]=w$. Rotating twice more gives the distinguished triangle $P''\xrightarrow{\ w\ }P'[1]\xrightarrow{\ -f[1]\ }P[1]\xrightarrow{\ -g[1]\ }P''[1]$. Rotating the triangle of step 1.3 in the same way gives $X''\xrightarrow{\ \delta\ }X'[1]\to X[1]\to X''[1]$. The first arrows commute with $p''$ and $p'[1]$ in $K$ by step 2.2, so TR3 of [L8] completes them to a morphism of triangles with third component represented by a chain map $u[1]:P[1]\to X[1]$. After applying the bounded localization $Q$, the components $p''$ and $p'[1]$ are isomorphisms, so [L9] makes $Q(u[1])$, and therefore $Q(u)$, an isomorphism in $D^b(A_m\text{-mod})$. Thus $X\cong\Theta(P)$, closing the finite induction. [step 1.1, step 1.3, step 1.4, step 2.2, L4, L8, L9]

4.1 *Conclusion.* Claims 1 and 2 are steps 2.1 and 3.1. The functor $\Theta$ is exact for the triangulations because $K^b(\operatorname{proj}^{gr}A_m)$ is closed under shifts and under cones of its maps $w[-1]$, which are again bounded complexes of finite graded projectives by step 2.2, and the distinguished triangles of $K^b(A_m\text{-mod})$ formed by bounded projective complexes are carried to distinguished triangles by the triangulated localization of [L8]. Thus $\Theta$ is exact and fully faithful, and step 3.1 gives an objectwise replacement for each bounded complex. The bounded-above result [L13] includes supplied replacements and lifts as hypotheses; here finite homological dimension supplies a replacement for each bounded complex and the finite induction supplies the lifts needed for that object. No choice principle, and in particular no dependent choice, was used: step 1.2 is a finite induction with one lift per stage, step 1.4 uses the explicit resolution of [L1], and step 2.2 makes one lift and one cone per stage of a finite induction on the span. [step 1.1, step 2.1, step 3.1, L1, L8, L13] ∎
