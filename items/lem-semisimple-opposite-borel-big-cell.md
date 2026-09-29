---
id: lem-semisimple-opposite-borel-big-cell
kind: lemma
title: The opposite-root big cell is an open chart
status: draft
origin: pipeline
landmark: false
deps:
  - lem-semisimple-borel-root-factorization
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - thm-etale-morphisms-open-and-quasi-finite
  - thm-etale-equivalent-flat-unramified-fp
  - thm-transitivity-sequence-schemes
  - thm-formally-unramified-differentials-zero
  - lem-ag-local-flatness-regular-parameters
  - lem-regular-system-of-parameters-equivalent-basis
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - thm-faithfully-flat-ring-map-characterisations
  - lem-regular-local-domain-induction
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 7.18, 17.3, 20.32, 21.68-21.91, 22.17-22.27, 23.59"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§§1.2, 1.4, especially Theorems 1.2.7, 1.4.12, Proposition 1.4.7 and Corollary 1.4.13"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with maximal torus $T$, root system $\Phi$
and positive system $\Phi^+$ of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]], and let
$U$, $B=T\ltimes U$, $U^-$, $B^-=T\ltimes U^-$ be the closed subgroups of
[[lem-semisimple-borel-root-factorization]], with
$\operatorname{Lie}U=\mathfrak n^+$,
$\operatorname{Lie}U^-=\mathfrak n^-$ and
$\operatorname{Lie}B^\pm=\mathfrak h\oplus\mathfrak n^\pm$. Let
$$m:U^-\times T\times U\longrightarrow G,\qquad (u^-,t,u)\longmapsto u^-tu$$
be the multiplication morphism. Then:

(i) $m$ is an open immersion: it is an isomorphism of varieties onto a
nonempty open subscheme $\Omega\subseteq G$;

(ii) $\Omega=U^-B=B^-U$, and $\Omega$ is dense in $G$;

(iii) the multiplication morphism $U^-\times B\to\Omega$,
$(u^-,b)\mapsto u^-b$, is an isomorphism, so the quotient $\Omega/B$ of
$\Omega$ by right translation by $B$ exists and is isomorphic to $U^-$;
in particular $\Omega/B\cong U^-\cong\mathbb A^{|\Phi^+|}$ through the
polynomial root coordinates of [[lem-semisimple-borel-root-factorization]].

## Facts & Assumptions

**Given:** the group $G$, the torus $T$, the root data $\Phi,\Phi^+$, the subgroups $U,B,U^-,B^-$ of [F1], and the multiplication morphism $m:U^-\times T\times U\to G$.

[F1] The product map $\prod_{i=1}^mU_{\alpha_i}\to G$ over an order of $\Phi^+$ compatible with heights is an isomorphism of varieties onto a closed connected unipotent subgroup $U$ with $\operatorname{Lie}U=\mathfrak n^+$; $T$ normalizes $U$, $T\cap U=1$, and $B=T\cdot U=T\ltimes U$; repeating the construction with the negative roots produces the closed connected unipotent subgroup $U^-$ with $\operatorname{Lie}U^-=\mathfrak n^-$ and $B^-=T\cdot U^-=T\ltimes U^-$. ([[lem-semisimple-borel-root-factorization]])

[F2] $G$ is an affine group scheme of finite type over $\mathbb C$ whose underlying scheme is connected and smooth, and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with $\mathfrak n^\pm=\bigoplus_{\alpha\in\Phi^\pm}\mathfrak g_\alpha$ and $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$, where $\Phi^-=-\Phi^+$. ([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]])

[F3] For morphisms $X\xrightarrow{f}Y\xrightarrow{h}S$ the sequence of $\mathcal O_X$-modules $f^*\Omega_{Y/S}\to\Omega_{X/S}\to\Omega_{X/Y}\to0$ is exact. ([[thm-transitivity-sequence-schemes]])

[F4] A morphism $f:X\to S$ of schemes is formally unramified if and only if $\Omega_{X/S}=0$. ([[thm-formally-unramified-differentials-zero]])

[F5] If $(R,\mathfrak m)\to(S,\mathfrak n)$ is a local homomorphism of Noetherian local rings and the images in $S$ of a regular system of parameters of $R$ extend to a regular system of parameters of $S$, then $S$ is flat over $R$. ([[lem-ag-local-flatness-regular-parameters]])

[F6] In a regular local ring every lift of a cotangent basis generates the maximal ideal and is a system of parameters. ([[lem-regular-system-of-parameters-equivalent-basis]])

[F7] A module $M$ is faithfully flat if a sequence of $R$-modules is exact exactly when its tensor with $M$ is exact. ([[def-flat-and-faithfully-flat-modules-and-ring-maps]])

[F8] A flat homomorphism $f:R\to S$ of commutative rings is faithfully flat if and only if the induced map $\operatorname{Spec}S\to\operatorname{Spec}R$ is surjective. ([[thm-faithfully-flat-ring-map-characterisations]])

[F9] Every regular local ring is an integral domain. ([[lem-regular-local-domain-induction]])

## Proof

1.1 The varieties $U^-\cong\mathbb A^m$, $T\cong\mathbb G_m^l$ and $U\cong\mathbb A^m$ are smooth over $\mathbb C$ by [F1], so $X:=U^-\times T\times U$ is smooth over $\mathbb C$ of dimension $2m+l=\dim G$; in particular the local rings of $X$ and of $G$ at closed points are regular local rings of the same dimension. At the origin $(1,1,1)$ the tangent space is the direct sum $\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+=\mathfrak g$ by [F2], and the differential $\mathrm dm_{(1,1,1)}$ is the sum map $(X,Y,Z)\mapsto X+Y+Z$; it is therefore a linear isomorphism. [F1, F2, given]

1.2 $m$ is injective on $R$-points for every $\mathbb C$-algebra $R$. First put $H=U^-\cap B$, a closed finite-type subgroup scheme. Its Lie algebra is $\mathfrak n^-\cap\mathfrak b=0$ by [F2]; hence its local ring at the identity has zero cotangent space and is a field by Nakayama. Translation gives the same at every closed point, so $H$ is zero-dimensional and reduced, hence finite étale over $\mathbb C$. Every element of $H(\mathbb C)$ is a finite-order element of the unipotent group $U^-$ from [F1]; in a faithful matrix representation a finite-order unipotent matrix in characteristic zero is the identity. Thus $H(\mathbb C)=\{1\}$, and reducedness gives $H=1$ as a group scheme. Now if $b\in(B\cap B^-)(R)$ for any $\mathbb C$-algebra $R$, write $b=tu^-$ with $t\in T(R)$ and $u^-\in U^-(R)$ using $B^-=T\ltimes U^-$; since $b,t\in B(R)$, the element $u^-$ lies in $H(R)=1$. Therefore $b=t$ and $B\cap B^-=T$ as closed subgroup schemes. Now let $x=(u^-,t,u)$ and $y=(u_1^-,t_1,u_1)$ in $G(R)$ with $x=y$ in $G(R)$, i.e. $u^-tu=u_1^-t_1u_1$. Then $(u_1^-)^{-1}u^-\cdot t=t_1\cdot u_1u^{-1}$; the left side is an $R$-point of $B^-$ and the right side an $R$-point of $B$, so both are $R$-points of $B\cap B^-=T$. Thus $(u_1^-)^{-1}u^-=t\,t'^{-1}\in T(R)$ for some $t'\in T(R)$ and also lies in $U^-(R)$, so $(u_1^-)^{-1}u^-=1$ because $T\cap U^-=1$ (the negative-root case of [F1]); and $u_1u^{-1}\in T(R)\cap U(R)=1$, so $u_1=u$, after which $t_1=t$ from the equation. Hence $m(R)$ is injective for every $R$. [F1, F2, given]

2.1 The differential of $m$ is invertible at every closed $\mathbb C$-point of $X$. Indeed $m(u^-\delta,t,yu)=u^-\cdot m(\delta,t,y)\cdot u$, so left and right translations reduce the assertion to $(1,t,1)$. There $m(\delta,t\tau,y)=t\cdot\operatorname{Ad}_{t^{-1}}(\delta)\cdot\tau\cdot y$, whose differential, after left translation by $t^{-1}$ in $G$, is the direct-sum map $\operatorname{Ad}_{t^{-1}}\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+\to\mathfrak g$. Since $T$ preserves each root space by [F1] and [F2], this map is an isomorphism by step 1.1. [F1, F2, step 1.1, algebra]

3.1 $m$ is flat. First let $p$ be a closed $\mathbb C$-point of $X$ and $q=m(p)$, also a closed $\mathbb C$-point. The local rings $\mathcal O_{G,q}$ and $\mathcal O_{X,p}$ are regular of the same dimension $\dim G$ by step 1.1; the map on their cotangent spaces is the dual of the isomorphism in step 2.1. Thus the images of a regular system of parameters at $q$ form a cotangent basis at $p$ and, by [F6], a regular system of parameters at $p$. The local flatness criterion [F5] gives $\mathcal O_{X,p}$ flat over $\mathcal O_{G,q}$. For an arbitrary prime $p\in X$, choose a closed point $p_0$ specializing from $p$ (possible because the affine finite-type $X$ is Jacobson). The map $\mathcal O_{G,m(p)}\to\mathcal O_{X,p}$ is a localization of the flat local map at $p_0$ and remains flat. Hence $m$ is flat at every point. [F5, F6, step 1.1, step 2.1]

3.2 $m$ is unramified. At every closed $\mathbb C$-point $p$ the cotangent map is an isomorphism by step 2.1, so the transitivity sequence [F3] gives $\Omega_{X/G}\otimes\kappa(p)=0$; Nakayama gives $\Omega_{X/G,p}=0$. This is a finite coherent module because $m$ is of finite presentation; if it were nonzero anywhere, its closed support in the affine Jacobson $X$ would contain a closed point, a contradiction. Thus $\Omega_{X/G}=0$ at all points, and [F4] makes $m$ formally unramified. [F3, F4, step 2.1]

4.1 $m$ is étale, hence open. The morphism $m$ is of finite type over the field $\mathbb C$, and a finitely generated algebra over a Noetherian ring is finitely presented, so $m$ is locally of finite presentation; it is flat by step 3.1 and unramified by step 3.2, hence étale by the in-run item `thm-etale-equivalent-flat-unramified-fp`; therefore $m$ is universally open by the in-run item `thm-etale-morphisms-open-and-quasi-finite`, so the image $\Omega=m(X)$ is an open subscheme of $G$, nonempty because $m(1,1,1)=1$. This proves the openness part of assertion (i); the remaining isomorphism claim is completed after the injectivity argument below. [step 3.1, step 3.2]

5.1 The morphism $m$ is an isomorphism onto $\Omega$. It is flat and locally of finite presentation, and surjective onto $\Omega$ by construction, and, since $G$ is affine and $\Omega\subseteq G$ is open, the principal opens $D_G(f)$ contained in $\Omega$ cover $\Omega$. For one such $D_G(f)=\operatorname{Spec}A$, its preimage is the principal open $D_X(m^*f)=\operatorname{Spec}B$ of the affine $X$; the restricted map is flat by step 3.1 and surjective because $D_G(f)\subseteq m(X)$, hence $A\to B$ is faithfully flat by [F8]. The two ring maps $b\mapsto b\otimes1$ and $b\mapsto1\otimes b$ from $B$ to $B\otimes_AB$ give two $(B\otimes_AB)$-points of $X$ whose images in $G$ coincide (both are the composite $\operatorname{Spec}(B\otimes_AB)\to\operatorname{Spec}A\to\Omega\subseteq G$), so by step 1.2 they are equal; that is, $b\otimes1=1\otimes b$ for every $b\in B$. Let $C=B/A$ as an $A$-module. Since $A\to B$ is faithfully flat, it is injective, and [F7] makes the natural map $C\to C\otimes_A B$, $c\mapsto c\otimes1$, injective: otherwise the nonzero map $A\to C$ taking $1$ to a nonzero kernel element would become zero after faithful tensoring. For $b\in B$, the equality $b\otimes1=1\otimes b$ puts the image of $b\otimes1$ in $(B\otimes_A B)/(A\otimes_A B)=C\otimes_A B$ equal to zero, because $1\otimes b$ belongs to the image of $A\otimes_A B$. Thus the class of $b$ in $C$ is zero; every $b\in B$ lies in $A$, and $A=B$. Thus $m$ is an isomorphism onto $\Omega$, completing (i). [F7, F8, step 4.1, step 1.2, discharge-construct]

5.2 The image is $\Omega=U^-TU=U^-B$ because every element of $U^-\times T\times U$ maps to $u^-tu$, and $TU=B$; it equals $B^-U=TU^-U$ because $T$ normalizes $U^-$ by [F1], so $TU^-=U^-T$. For assertion (ii) it remains to see that $\Omega$ is dense. By [F2] the group $G$ is smooth over $\mathbb C$, so all its local rings are regular, hence domains by [F9]; if two distinct irreducible components of $G$ met at a point $g$, the local ring $\mathcal O_{G,g}$ would have two distinct minimal primes and would not be a domain. Hence distinct irreducible components of the Noetherian scheme $G$ are disjoint, and connectedness of $G$ forces a single component: $G$ is irreducible. Since $\Omega$ is a nonempty open subset of the irreducible scheme $G$, it is dense, and (ii) follows. [F1, F2, F9, step 4.1]

6.1 For (iii), the isomorphism $m$ identifies $\Omega$ with $U^-\times T\times U$, and $(u^-,t,u)\mapsto(u^-,tu)$ is an isomorphism $U^-\times T\times U\to U^-\times B$ by $B=T\ltimes U$ [F1]; hence $\varphi:U^-\times B\to\Omega$, $\varphi(u^-,b)=u^-b$, is an isomorphism of varieties. It satisfies $\varphi(u^-,b)b'=\varphi(u^-,bb')$, so $\varphi$ is equivariant for right translation by $B$ on the second factor, and the composite $\Omega\xrightarrow{\varphi^{-1}}U^-\times B\to U^-$ is a $B$-invariant morphism with a section $u^-\mapsto(u^-,1)$; a morphism out of $\Omega$ that is constant on $B$-orbits therefore factors uniquely through this composite, which exhibits it as the quotient morphism for the $B$-action. So $\Omega/B\cong U^-$, and the root coordinates of [F1] give $U^-\cong\mathbb A^{|\Phi^+|}$, as claimed. [F1, step 5.1]

7.1 The Axiom of Choice is assumed in the statement and declared as the dependency [[def-axiom-of-choice]]; inside the argument it is used only through the cited suppliers: [F1] inherits it from the root-exponential and Baker-Campbell-Hausdorff constructions, the in-run items `thm-etale-morphisms-open-and-quasi-finite` and `thm-etale-equivalent-flat-unramified-fp` inherit it from the flat and unramified theory, and [F8] uses it to detect maximal ideals. After the group data and the single system of parameters in step 3.1 are fixed, no further arbitrary choice is made. [F1, F8, given, discharge-construct] ∎
