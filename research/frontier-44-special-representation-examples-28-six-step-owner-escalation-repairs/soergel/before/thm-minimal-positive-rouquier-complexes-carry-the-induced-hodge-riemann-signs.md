---
id: thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs
kind: theorem
title: "Minimal positive Rouquier complexes carry the induced Hodge-Riemann signs"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [thm-positive-rouquier-complexes-are-delta-split, def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category, thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction, lem-tensoring-with-b-s-preserves-hodge-riemann-signs, def-the-deformed-lefschetz-operator-on-b-x-b-s, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate, lem-hard-lefschetz-implies-primitive-decomposition, def-invariant-intersection-form-on-a-bott-samelson-bimodule, lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category, lem-family-signature-constancy-and-the-weak-lefschetz-substitute, def-bott-samelson-bimodule-of-a-word, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Proposition 6.13 and its full proof in Section 6.6, including display (6.3), the orthogonal decomposition (6.4), the use of Lemma 2.2 and Lemma 2.5 and of Proposition 6.12"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.5, Lemme 2.9 and its proof (relations de Hodge-Riemann pour les complexes de Rouquier)"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A symmetric group $S_n$, an element $x$ with a fixed reduced expression $\underline x=s_1\cdots s_m$ of length $m=\ell(x)$, the minimal Rouquier complex $F_x\subseteq^{\oplus}F_{s_1}\cdots F_{s_m}$ and its terms $^jF_x$ for $j\ge0$ ([[def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category]], [[def-bott-samelson-bimodule-of-a-word]]); for each $j$ the set $\pi(x,j)$ of subexpressions of $\underline x$ obtained by deleting $j$ letters and the direct sum $\bigoplus_{x'\in\pi(x,j)}\mathrm{BS}(x')$ with its intersection form; a tuple $\lambda=(\lambda_{x'})$ of strictly positive real numbers and the rescaled form $\langle b,b'\rangle_\lambda=\sum_{x'}\lambda_{x'}\langle b_{x'},b'_{x'}\rangle_{\mathrm{BS}(x')}$; the operator $L_0=\rho\cdot(-)$ of left multiplication by a strictly dominant $\rho$; the hypothesis $\mathrm S(\le x)$ and the ascent Hodge-Riemann statements $\mathrm{HR}(y,s)$ for all $y<x$ and simple $s$ with $ys>y$ ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]); and the embeddings $\Gamma_{\ge y}F_x/\Gamma_{>y}F_x$ of the $\Delta$-split complex ([[thm-positive-rouquier-complexes-are-delta-split]]).

[F1] Since $F_x$ is a direct summand of $F_{s_1}\cdots F_{s_m}=\bigoplus_{x'\in\pi(x,0)}\mathrm{BS}(\underline x')$ and $^j(F_{s_1}\cdots F_{s_m})=\bigoplus_{x'\in\pi(x,j)}\mathrm{BS}(x')(j)$, the term $^jF_x$ is a direct summand of $\bigoplus_{x'\in\pi(x,j)}\mathrm{BS}(x')(j)$; shifting by $(-j)$ gives the canonical inclusion $^jF_x(-j)\subseteq^{\oplus}\bigoplus_{x'\in\pi(x,j)}\mathrm{BS}(x')$ used throughout, and $^jF_x(-j)$ is a $\rho$-stable graded subspace with symmetric Betti numbers because it is a summand of a self-dual module ([[def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category]], [[lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate]]).

[F2] Under $\mathrm S(\le x)$ the linearity theorem gives $^0F_x=B_x$ and $^jF_x=\bigoplus_{z<x}B_z(j)^{m_{z,j}}$ for $j\ge1$; in particular every summand of $^jF_x(-j)$ is a normalized indecomposable $B_z$ with $z\le x$ and $\ell(z)\le m-j$ ([[thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction]]).

[F3] The tensoring lemma: if a self-dual $B=\bigoplus_zB_z^{R,m_z}$ with $m_z\ne0\Rightarrow\mathrm S(z)$ and $\mathrm{HR}(z,s)_\zeta$ carries an invariant non-degenerate form making it even or odd and satisfying HR with the standard sign for $\rho$, then $BB_s$ satisfies HR with the standard sign for $L_\zeta$ and the induced form; moreover the restriction of the form of $B$ to a $B_z$-summand is $(-1)^{(d-\ell(z))/2}$ times a positive multiple of the normalized form when the lowest degree of $B$ is $-d$ ([[lem-tensoring-with-b-s-preserves-hodge-riemann-signs]]).

[F4] The stable-subspace lemma: an $L_0$-stable graded subspace $V$ with symmetric Betti numbers of a space satisfying hL and HR inherits hL and HR with the ambient degree-by-degree signs; the standard global sign of $V$ agrees with the ambient standard sign when the lowest nonzero degrees agree, and in general the signature of the ambient Lefschetz form on the primitive subspaces of $V$ is the one induced by the ambient normalization ([[lem-family-signature-constancy-and-the-weak-lefschetz-substitute]], [[lem-hard-lefschetz-implies-primitive-decomposition]]).

[F5] Degenerate shifted case: if on a graded space with a possibly degenerate form the operator $L$ satisfies $L^i:H^{-d-i}\to H^{-d+i}$ isomorphically for all $i\ge0$ with $d>0$, then the Lefschetz form $(h,h')^{-i}_L=\langle h,L^ih'\rangle$ is identically zero ([[lem-family-signature-constancy-and-the-weak-lefschetz-substitute]]).

## Statement

Assume $\mathrm S(\le x)$ and $\mathrm{HR}(y,s)$ for every $y<x$ and simple $s$ with $ys>y$. Fix a reduced expression $\underline x$ of $x$. Then $F_x$ satisfies the Hodge-Riemann bilinear relations in the following sense: there exists an embedding as a direct summand $F_x\subseteq^{\oplus}F_{s_1}\cdots F_{s_m}$ such that for every tuple $\lambda=(\lambda_{x'})_{x'\in\pi(x,j)}$ of strictly positive real numbers and every $j\ge0$, the space $^jF_x(-j)$ embedded in $\bigoplus_{x'\in\pi(x,j)}\mathrm{BS}(x')$ carries the Hodge-Riemann bilinear relations with respect to the rescaled form $\langle-,-\rangle_\lambda$ and the Lefschetz operator given by left multiplication by $\rho$, with the global sign fixed so that the Lefschetz form is positive definite on the primitive subspaces in degrees congruent to $-m+j\pmod4$. Here $\pi(x,j)$ is the set of subexpressions of $\underline x$ obtained by deleting $j$ letters and $^jF_x(-j)\subseteq^{\oplus}\bigoplus_{x'\in\pi(x,j)}\mathrm{BS}(x')$ is the canonical summand inclusion of [F1]. The conclusion is independent of the choice of the reduced expression, since a different reduced expression changes the embedding but not the resulting intersection forms up to positive scalar.

## Proof

**Proof technique:** induction over the Bruhat order; the last letter splits the complex as a summand of $F_yF_s$, the two pieces of the decomposition (6.4) are compared with the induction hypothesis and the tensoring lemma, and the source inherits the relations as a stable summand.

1.1 **Base of the induction.** [base] For $x=e$ the complex is $F_e=S$, $m=0$, and for $j=0$ the space $^0F_e(0)=S$ satisfies hL and HR trivially: its lowest degree is $0$, the primitive subspace $P^0=\mathbb R$ carries the positive definite form $\langle1,1\rangle>0$, and $0\equiv-m+j\pmod4$, so the global sign is the standard one; there are no $j\ge1$ terms. [given, F1, F4]

2.1 **Induction hypothesis and the last letter.** [ih] Fix $x\ne e$ and assume the statement for every $y<x$. Write $\underline x=s_1\cdots s_m$, $y=s_1\cdots s_{m-1}$ and $s=s_m$, so that $x=ys$ with $\ell(x)=\ell(y)+1$ and $F_x$ is a summand of $F_yF_s$; fix an embedding $F_y\subseteq^{\oplus}F_{s_1}\cdots F_{s_{m-1}}$ witnessing the induction hypothesis and use it to embed $F_x\subseteq^{\oplus}F_yF_s\subset F_{s_1}\cdots F_{s_m}$. For every $j$ this gives the embedding chain of [F1], $^jF_x(-j)\subseteq^{\oplus}{}^jF_yB_s(-j)\oplus{}^{j-1}F_y(-j+1)$, and the induction hypothesis applies to ${}^jF_y(-j)$ and to ${}^{j-1}F_y(-j+1)$ with the global signs indexed by $y$; by [F2] the $j$-th term of $F_x$ is linear. [given, step 1.1, F1, F2]

3.1 **The decomposition of the middle term and orthogonality.** Under $\mathrm S(\le x)$ the comparison lemma gives a decomposition of the multiplicity space, so ${}^jF_y(-j)=\bigoplus_{z}V_z\otimes_\mathbb RB_z$ with degree-zero multiplicity spaces $V_z$; define $B^\uparrow=\bigoplus_{zs>z}V_z\otimes B_z$ and $B^\downarrow=\bigoplus_{zs<z}V_z\otimes B_z$, so that ${}^jF_y(-j)=B^\uparrow\oplus B^\downarrow$. The decomposition is orthogonal for the induced form because $\operatorname{Hom}(B^\uparrow,D B^\downarrow)=\operatorname{Hom}(B^\downarrow,DB^\uparrow)=0$ for non-isomorphic indecomposables under $\mathrm S$; character calculations give that $B^\uparrow B_s$ is perverse and that $B^\downarrow B_s\cong B^\downarrow(-1)\oplus B^\downarrow(1)$. [step 2.1, F2, F3]

4.1 **The shifted descent piece does not contribute.** In the decomposition $B^\downarrow B_s\cong B^\downarrow(1)\oplus B^\downarrow(-1)$ the restriction of the Lefschetz form to $B^\downarrow(1)$ is identically zero: left multiplication by $\rho$ satisfies hL on $B^\downarrow$ (each summand $B_z$ with $zs<z$ satisfies the induction hypothesis and hence HR, and the lowest degree shifts by one under tensoring), so [F5] applies to the shifted piece with $d>0$. Moreover the projection of ${}^jF_x(-j)$ to $B^\downarrow B_s$ lands entirely in $B^\downarrow(1)$: ${}^jF_x(-j)$ lives in perverse degree $0$ by the linearity theorem, and Hom-vanishing between perverse degrees $0$ and $-1$ forces the projection to the $B^\downarrow(-1)$-part to vanish. Hence the image of ${}^jF_x(-j)$ in $B^\downarrow B_s$ contributes nothing to the Lefschetz form. [step 3.1, F2, F5]

5.1 **The isometry into the surviving target.** By step 4.1 the projection of ${}^jF_x(-j)$ to the remaining factors is an isometry for the Lefschetz forms: the inclusion ${}^jF_x(-j)\subseteq^{\oplus}{}^jF_yB_s(-j)\oplus{}^{j-1}F_y(-j+1)$ restricts to a $\rho$-equivariant map $\jmath$ into $B^\uparrow B_s\oplus{}^{j-1}F_y(-j+1)$ with $\langle b,L_0b'\rangle=\langle\jmath(b),\jmath(b')\rangle$ for all $b,b'$. The map $\jmath$ is injective: applying the quotient functor $q$ to the split inclusion ${}^jF_x\hookrightarrow{}^j(F_yF_s)$ gives a split injection, while a nonzero map ${}^jF_x(-j)\to B^\downarrow(1)$ would be a map between perverse degrees $0$ and $-1$ and hence vanishes after $q$; therefore the induced map to the complement of $B^\downarrow(1)$ is a split injection after $q$ and so is injective. [step 4.1, F2]

6.1 **The codomain satisfies the relations with the global sign.** The two orthogonal summands of the codomain are handled as follows. The summand ${}^{j-1}F_y(-j+1)$ satisfies HR with the global sign of the induction hypothesis for $y$ and $j-1$, namely positivity on primitive degrees congruent to $-\ell(y)+(j-1)=-m+1+j-1=-m+j\pmod4$, which is the required global sign for $x,j$. The summand $B^\uparrow B_s$ satisfies HR by the tensoring lemma [F3]: $B^\uparrow$ is a self-dual direct sum of normalized $B_z$ with $zs>z$, each satisfying $\mathrm{HR}(z,s)$ by hypothesis and hence hL and HR with the standard sign; step 3.1 shows it is even or odd with the induced sign, so $B^\uparrow B_s$ satisfies HR with the global sign obtained by raising the degree by one, i.e. positivity on degrees congruent to $(-\ell(y)+j)-1=-m+j\pmod4$. Since the two summands are orthogonal and carry the same global sign, the codomain satisfies HR with the global sign fixed by $-m+j$. [step 5.1, step 2.1, F3]

7.1 **The source inherits the relations.** The map $\jmath$ of step 5.1 identifies ${}^jF_x(-j)$ isometrically with a $\rho$-stable graded subspace of a space satisfying hL and HR, and ${}^jF_x(-j)$ has symmetric Betti numbers by [F1]; by the stable-subspace lemma [F4] the space ${}^jF_x(-j)$ inherits hL and HR from the codomain, and the signature of the restricted Lefschetz form on its primitive subspaces is the one induced by the ambient normalization, which is the global sign fixed by $-m+j$. This holds for every $j$ and every tuple $\lambda$ of strictly positive rescalings, since the rescaling preserves definiteness and its sign; hence $F_x$ satisfies the Hodge-Riemann bilinear relations as stated. [step 6.1, step 5.1, F4, discharge-induction: step 2.1] ∎

## Remarks

- The sign normalization "positive in degrees congruent to $-m+j$ modulo $4$" is the one of Elias-Williamson Proposition 6.13; it is the standard sign relative to the generic lowest degree $-(m-j)$ of $^jF_x(-j)$ and is fixed once for all $j$ so that the orthogonal pieces in step 6.1 carry the same normalization.
- Step 4.1 is exactly the place where the degenerate shifted case is used; the zero-parameter hard-Lefschetz theorem later separates the kernel of $d_3$ for the same reason, and no step of this proof asserts HR for an unseparated shifted descent target.
