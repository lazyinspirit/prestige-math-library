---
id: thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials
kind: theorem
title: "Singular category O multiplicities are parabolic Kazhdan–Lusztig values"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [thm-translation-to-the-wall-on-verma-simple-and-projective-objects,
       def-singular-integral-category-o-block-and-stabilizer,
       thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values,
       def-parabolic-kazhdan-lusztig-basis-and-polynomials,
       thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones,
       def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization,
       thm-bgg-reciprocity,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall,
       def-regular-integral-dot-orbit-labelling-convention,
       def-axiom-of-choice,
       thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis,
       lem-bruhat-order-basic-properties-for-permutations,
       thm-hh-parabolic-minimal-representatives-and-length-additivity,
       def-standard-and-costandard-objects-in-category-o,
       lem-facet-tensor-weight-exclusion,
       def-normalized-type-a-hecke-algebra-and-its-bar-involution]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9: standard filtrations, BGG reciprocity and translation functors (complete 7-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf"
      locator: "Theorem 3.12(1)-(2) (printed p. 6): translation on standard and simple objects, the engine of the multiplicity transport; complete passage read."
    - title: "Nicolas Libedinsky and Geordie Williamson, The anti-spherical category (author-hosted complete PDF of the article)"
      url: "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
      locator: "Section 2.7 (printed pp. 8-9): the spherical/antispherical polynomial families and Deodhar's relations; used for the normalization comparison; complete passage read."
    - title: "James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O, AMS Graduate Studies in Mathematics 94"
      url: null
      locator: "Section 7.6 and 8.4 (title-only locator): the classical statement that singular block multiplicities are computable from ordinary Kazhdan-Lusztig data; argument reproduced locally from the fetched treatments."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and work in the type-$A$
root datum $W=S_n$ of the page's Hecke module and ordinary multiplicity
theorem. Let $(\lambda,\mu)$ be as in [[lem-facet-tensor-weight-exclusion]]
with $J=J(\mu)$, so $\mathcal O_\mu$ is the singular integral block of
[[def-singular-integral-category-o-block-and-stabilizer]] with labels
normalized by the minimal right coset representatives $W^J$, and let $w_0$ be
the longest element of $W$. Then for all $y,w\in W^J$,
$$[M(y\cdot\mu):L(w\cdot\mu)]=(P(w\cdot\mu):\Delta(y\cdot\mu))=P_{yw_0,\,ww_0}(1),$$
the value at $q=1$ of the ordinary Kazhdan--Lusztig polynomial attached to the
pair $(yw_0,ww_0)$ in the classical normalization of
[[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]].
Equivalently, put $k(w)=w_0^Jw^{-1}w_0\in{}^JW$. Then
$$[M(y\cdot\mu):L(w\cdot\mu)]=m_{k(y),k(w)}(1).$$
This is the spherical family. The antispherical family instead governs the
genuine regular parabolic locally finite category with dominant labels;
changing to an opposite positive system does not identify the two families.
In particular all singular multiplicities are computable from the ordinary
Kazhdan--Lusztig coefficients of $S_n$, and no individual polynomial
coefficients beyond the value at one occur.

## Facts & Assumptions

**Given:** The facet data $(\lambda,\mu)$ with $J=J(\mu)$, $W_\mu=W_J$, the regular block $\mathcal O_\lambda$, the singular block $\mathcal O_\mu$ with labels $W^J$ ([[def-singular-integral-category-o-block-and-stabilizer]], [[thm-translation-to-the-wall-on-verma-simple-and-projective-objects]]), and the translation functor $T=T_\lambda^\mu$.

[F1] The block conventions: labels $w\cdot\mu$ depend only on the coset $wW_J$ and $W^J$ is a set of minimal representatives; BGG reciprocity $(P(w\cdot\mu):\Delta(y\cdot\mu))=[M(y\cdot\mu):L(w\cdot\mu)]$ holds; $\Delta(w\cdot\mu)=M(w\cdot\mu)$; restricted duality fixes label pairs; all objects have finite length ([[def-singular-integral-category-o-block-and-stabilizer]], [[thm-bgg-reciprocity]], [[def-standard-and-costandard-objects-in-category-o]]).

[F2] Wall translation: $T$ is exact, $T\Delta(z\cdot\lambda)\cong\Delta(z\cdot\mu)$ for all $z$, and $TL(z\cdot\lambda)\cong L(z\cdot\mu)$ for $z\in W^J$ while $TL(z\cdot\lambda)=0$ for $z\notin W^J$ ([[thm-translation-to-the-wall-on-verma-simple-and-projective-objects]] (1),(2)); [[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]] supplies exactness and the biadjunction.

[F3] Ordinary regular multiplicities: in a regular integral block of type $A$ with dominant regular base $\lambda_{\mathrm{dom}}$, $[M(y\cdot\lambda_{\mathrm{dom}}):L(w\cdot\lambda_{\mathrm{dom}})]=P_{y,w}(1)$ for $y,w\in W$, with vanishing unless $y\le w$ ([[thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values]], [[def-regular-integral-dot-orbit-labelling-convention]]).

[F4] Ordinary Kazhdan--Lusztig polynomial data: $P_{a,b}(1)$ is defined by the classical normalization, and simultaneous inversion gives $P_{a,b}=P_{a^{-1},b^{-1}}$ ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]], [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]). The latter supplier also gives uniqueness of the bar-fixed triangular basis; the quadratic/braid presentation and normalized standard elements are those of [[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], and the conjugation-by-$w_0$ symmetry needed below is proved from that uniqueness in step 1.3.

[F5] Spherical reduction: for $y,x\in{}^JW$, $m_{y,x}=p_{w_0^Jy,w_0^Jx}$ and $p_{a,b}=v^{\ell(b)-\ell(a)}P_{a,b}(v^{-2})$ with $P_{a,b}(1)$ the value at $q=1$ ([[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]] (2), [[def-parabolic-kazhdan-lusztig-basis-and-polynomials]]); the labelling $W^J=({}^JW)^{-1}$ is [[thm-hh-parabolic-minimal-representatives-and-length-additivity]].

## Proof

**Proof technique:** direct: push a composition series of the regular standard through the exact translation functor, count only the surviving minimal-representative simple, and translate the labels to the dominant base.

1.1 **Composition multiplicities on the wall.** Fix $y,w\in W^J$ and a composition series of $\Delta(y\cdot\lambda)$ with factors $L(z\cdot\lambda)$, $z\in W$. Exactness of $T$ [F2] turns it into a series of $T\Delta(y\cdot\lambda)\cong\Delta(y\cdot\mu)$ with factors $TL(z\cdot\lambda)$; by [F2] the only nonzero factors occur for $z\in W^J$, and then the factor is $L(z\cdot\mu)$, which can equal the simple $L(w\cdot\mu)$ only for $z=w$ since distinct $W^J$-labels have distinct dot translates [F1]. Hence $[\Delta(y\cdot\mu):L(w\cdot\mu)]=[\Delta(y\cdot\lambda):L(w\cdot\lambda)]$. [F1, F2, algebra]

1.2 **Translate to the dominant base.** Let $\lambda_{\mathrm{dom}}:=w_0\cdot\lambda$; since $\lambda$ is dot-antidominant regular, $\lambda_{\mathrm{dom}}$ is dominant regular and $\lambda=w_0\cdot\lambda_{\mathrm{dom}}$, so for every $z\in W$, $z\cdot\lambda=(zw_0)\cdot\lambda_{\mathrm{dom}}$. Applying [F3] in the regular block of $\lambda_{\mathrm{dom}}$ gives $[\Delta(y\cdot\lambda):L(w\cdot\lambda)]=[M(yw_0\cdot\lambda_{\mathrm{dom}}):L(ww_0\cdot\lambda_{\mathrm{dom}})]=P_{yw_0,ww_0}(1)$, the ordinary value supported on $yw_0\le ww_0$. [F3, algebra]

1.3 **The spherical dictionary.** Conjugation by $w_0$ permutes the type-$A$ simple reflections, so the assignment $H_z\mapsto H_{w_0zw_0}$, $v\mapsto v$ is an algebra automorphism: it preserves the quadratic and braid presentations, the bar, length and Bruhat order. It sends a bar-fixed triangular element with top $H_b$ to one with top $H_{w_0bw_0}$; uniqueness in [F4] therefore gives $p_{a,b}=p_{w_0aw_0,w_0bw_0}$. Now set $k(w)=w_0^Jw^{-1}w_0$. Inversion sends $W^J$ to ${}^JW$ [F5]. In type $A$, left-minimality means that the values in each consecutive $J$-block occur in increasing order: the left descent $s_i$ occurs exactly when $i+1$ precedes $i$ in one-line notation. Right multiplication by $w_0$ reverses all positions, making those values decrease; left multiplication by $w_0^J$ reverses the values inside each block, restoring increasing order. Thus $k(w)\in{}^JW$. The spherical reduction [F5] gives $m_{k(y),k(w)}=p_{w_0^Jk(y),w_0^Jk(w)}=p_{y^{-1}w_0,w^{-1}w_0}=p_{w_0y,w_0w}=p_{yw_0,ww_0}$, using simultaneous inversion from [F4] and the conjugation symmetry just proved. Evaluating at $v=1$ and applying the classical normalization yields $m_{k(y),k(w)}(1)=P_{yw_0,ww_0}(1)$. [F4, F5, algebra]

2.1 **The projective version.** By BGG reciprocity [F1], $(P(w\cdot\mu):\Delta(y\cdot\mu))=[M(y\cdot\mu):L(w\cdot\mu)]=P_{yw_0,ww_0}(1)$; this is the second displayed identity. [F1, step 1.2, algebra]

3.1 **Conclusion.** Combining the preceding steps, $[M(y\cdot\mu):L(w\cdot\mu)]=(P(w\cdot\mu):\Delta(y\cdot\mu))=P_{yw_0,ww_0}(1)=m_{k(y),k(w)}(1)$ for all $y,w\in W^J$, so the singular multiplicities are spherical parabolic values at one. The antispherical family is a different family (it is the sign-module normalization, used for the genuine regular parabolic category with dominant labels), and no change of positive system identifies the two; this is exactly the normalization distinction recorded in [[def-parabolic-kazhdan-lusztig-basis-and-polynomials]]. [F5, step 1.2, step 2.1, step 1.3] ∎

## Remarks

**Open obligation.** The proof uses the batch-14 interfaces `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values` and `def-regular-integral-dot-orbit-labelling-convention` through fact [F3], cited in step 1.2 for the single-term reduction $[M(yw_0\cdot\lambda_{\mathrm{dom}}):L(ww_0\cdot\lambda_{\mathrm{dom}})]=P_{yw_0,ww_0}(1)$; both were scaffolded but unwritten when this item was authored, and both are now written in `items/` with statements matching this use. The Step-3 decision remains escalated because only the owner may refresh an escalation receipt; the exact supplier IDs and the consuming step are recorded in the pair report. The labelling convention is used only through its explicitly quoted clauses (regular block data, Bruhat reversal and the Kazhdan--Lusztig normalization), not through its Soergel dictionary.
