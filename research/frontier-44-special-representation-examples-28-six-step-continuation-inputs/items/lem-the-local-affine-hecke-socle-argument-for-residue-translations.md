---
id: lem-the-local-affine-hecke-socle-argument-for-residue-translations
kind: lemma
title: "The local affine-Hecke socle argument for residue translations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 25
deps:
  - lem-residue-casimir-operators-give-local-affine-hecke-actions
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
  - thm-fundamental-theorem-of-symmetric-polynomials
  - thm-polynomial-extension-of-cohen-macaulay-rings
  - thm-parameters-and-regular-sequences-in-cohen-macaulay-modules
  - cor-koszul-complex-resolves-a-regular-quotient
  - thm-classical-affine-nullstellensatz-correspondence
  - lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle
  - thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Chuang and Raphael Rouquier, Derived equivalences for symmetric groups and sl2-categorification (complete45-page arXiv0407205)"
      url: "https://arxiv.org/pdf/math/0407205"
      locator: "Sections3.2–3.3 (pp5–10),4.3 (pp13–14),5.1–5.4 (pp14–21), especially Lemma3.6 and Proposition5.20 full proofs; Grassmannian duality replaced by the explicit local partial-coinvariant complete-intersection proof."
    - title: "Masaki Kashiwara, Global crystal bases of quantum groups, Duke Math. J.69 (1993)455–485 (complete33-page author PDF)"
      url: "https://www.kurims.kyoto-u.ac.jp/~kenkyubu/kashiwara/global-crystal.pdf"
      locator: "Printedpp462–474, Sections3.1–3.2 upper/lower operators and Sections5.1–5.3 balanced kernel/string filtrations and Proposition5.3.1 with complete proof; Section5 explicitly concerns upper crystal charts."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras (complete109-page arXiv0508003)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Sections4.2–4.4 (printedpp38–45), especially equations4.3/4.6/4.8/4.34–4.37 and Theorems4.4–4.5 with their actual CR dependency; full needed passages read."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the positive biadjoint
residue $\mathfrak{sl}_2$ action of
[[lem-residue-casimir-operators-give-local-affine-hecke-actions]].

At a coincident eigenvalue the completed degenerate affine Hecke algebra on $r$
steps is $\mathrm{Mat}_{r!}$ over the completed symmetric polynomial centre.
The first-$i$ image in its central fibre is $\mathrm{Mat}_{i!}(Z_{i,r})$, where
$$Z_{i,r}=\mathbb C[c_1,\dots,c_i]/(h_{r-i+1},\dots,h_r)$$
(with $c_j$ the elementary symmetric functions of $x_1,\dots,x_i$ and
$\sum_jh_jz^j=(1-c_1z+\cdots+(-1)^ic_iz^i)^{-1}$) is a finite local
complete-intersection Frobenius ring of dimension $\binom{r}{i}$ with
one-dimensional socle. Divided residue functors and the complementary-idempotent
restriction have the corresponding simple head and socle.

Consequently $e_iL(A)$ and $f_iL(A)$ are either $0$ or self-dual
indecomposables with simple isomorphic head and socle labelled
$\tilde e_iA$, respectively $\tilde f_iA$. Vanishing is exactly the absence of
the corresponding crystal edge. This retains the complete residue-translation
crystal claim, not only its $K_0$ action.

## Facts & Assumptions

**Given:** The residue functors $e_i,f_i$ with their positive biadjoint structure, the local degenerate affine Hecke algebra on $r$ steps with generators $s_j,x_j$, and the completed symmetric polynomial centre at a coincident eigenvalue.

[F1] Local affine-Hecke action ([[lem-residue-casimir-operators-give-local-affine-hecke-actions]]): the relations $T_j^2=1$, braid/distant commutation, commuting $x_j$, $T_jx_j-x_{j+1}T_j=-1$, local nilpotence of $x_j-i$, and biadjoint mates on the dual functors.

[F2] Commutative algebra ([[thm-fundamental-theorem-of-symmetric-polynomials]], [[thm-polynomial-extension-of-cohen-macaulay-rings]], [[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]], [[cor-koszul-complex-resolves-a-regular-quotient]], [[thm-classical-affine-nullstellensatz-correspondence]]): symmetric functions, polynomial rings as Cohen-Macaulay, regular sequences and Koszul resolutions, and the Nullstellensatz.

[F3] Coinvariants ([[lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]], [[thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation]]): the coinvariant algebra is Gorenstein with one-dimensional socle and is the regular representation; these supply the trace-reduction pairing and the rank-one idempotent image.

[F4] Fock and parabolic structure ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], [[thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix]]): the source upper chart, its two positive coefficient charts and the typed reverse pairing, and the label dictionary $A\mapsto\tilde e_iA,\tilde f_iA$.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Polynomial model and completion.** On $P_r=\mathbb C[x_1,\dots,x_r]$ the operators $T_j=s_j-\partial_j$ with $\partial_j=(1-s_j)/(x_j-x_{j+1})$ satisfy the degenerate affine Hecke relations of [F1]; PBW spanning follows by ordered monomials and independence of the leading permutation operators after localizing away from the root differences. At the coincident eigenvalue, $x_i-x_{i+1}+1$ is a unit, so $\partial_i=(x_i-x_{i+1}+1)^{-1}(1-T_i)$ with the inverse on the left; hence the completed algebra is the polynomial/divided-difference endomorphism algebra $\mathrm{End}_{P_r^{S_r}}(P_r)$. [F1, algebra]

1.2 **The partial centre.** For the first $i$ variables, eliminating the elementary coefficients of the remaining $r-i$ variables from the identity of the total elementary polynomial with $1$ gives exactly the relations $h_{r-i+1}=\cdots=h_r=0$; their only common zero is $0$, since the vanishing of $i$ consecutive $h$'s makes the reciprocal elementary series polynomial, hence constant. The Nullstellensatz makes $Z_{i,r}$ finite; it is a homogeneous system of parameters in the weighted polynomial ring, which is Cohen-Macaulay, so [F2] supplies regularity; the Koszul Euler series gives $\dim Z_{i,r}=\prod_{j=r-i+1}^{r}j/\prod_{j=1}^{i}j=\binom{r}{i}$, and the two-Koszul socle computation gives a unique socle in degree $i(r-i)$, hence a local Frobenius ring. [F2, algebra]

2.1 **Matrix units and the completed fibre.** The invariant-ring freeness basis together with the longest divided difference gives a perfect relative trace pairing whose reduction is the coinvariant top-degree pairing of [F3]; complete-local Nakayama makes the Gram matrix invertible over the complete invariant ring, and multiplication followed by the trace realizes every matrix unit. The completed fibre is therefore $\mathrm{Mat}_{r!}(\mathbb C)$, with its unique simple module of dimension $r!$. [F2, F3, F5, step 1.1, construct]

2.2 **The partial ring and the idempotent restriction.** The monomial basis $x_1^{a_1}\cdots x_i^{a_i}$, $0\le a_j\le r-j$, obtained by successively adjoining a distinguished root, shows that the ordered partial ring is free of rank $i!$ over $Z_{i,r}$ of dimension $r!/(r-i)!$, and the image of the first-$i$ algebra is $\mathrm{Mat}_{i!}(Z_{i,r})$. Averaging with the trivial or sign symmetric-group idempotent realizes the divided functors $E^{(i)}$ with $E^i\cong i!E^{(i)}$; the completed trivial/sign idempotents have rank $1$ over the complete invariant centre because the divided-difference corrections strictly lower degree and the diagonal group character is the regular coinvariant character of [F3], so their projective images are free of rank $1$. Applying the full idempotent to the free restriction identifies the complementary-idempotent restriction of the completed algebra with the unique indecomposable projective over $\mathrm{Mat}_{i!}(Z_{i,r})$, which by Frobeniusness has simple head and socle. [F2, F3, step 1.2, construct]

3.1 **Categorical string argument.** In the simple-class basis positivity of the residue functors preserves the string-height filtration; biadjunction prevents a socle or head summand of $E^jS$ from having smaller maximal string height than $S$. If $FS=0$, finite-dimensional $\mathfrak{sl}_2$ string theory makes $E^{(r)}S$ a single simple at the opposite extremum, with Hecke multiplicity module the unique simple of step 2.2; for general $S$ take an extremal simple quotient of $F^{(h_-)}S$ and use adjunction to embed $S$ into its divided translate, whose opposite extremal translation is a single simple with a simple socle, bounding the multiplicity by $1$. Hence $e_iL(A)$ and $f_iL(A)$ are $0$ or have simple head and socle at the extremal labels, and vanishing is exactly the absence of the crystal edge. [F1, step 2.2, algebra]

4.1 **Self-duality and labels.** Commuting restricted duality exchanges head and socle and preserves indecomposability; a module with simple isomorphic head and socle and finite length forced by the string argument is self-dual indecomposable. The source-upper Chevalley leading-term argument of Kashiwara's string theory, with its balanced kernel and string decompositions checked against the two source-positive coefficient charts and the typed reverse pairing, gives $fG=[\varphi]G(\tilde f)$ and $eG=[\varepsilon]G(\tilde e)$ in each associated string, and comparing at $1$ with the categorical unique maximal-height factors of step 3.1 identifies the labels $\tilde e_iA$ and $\tilde f_iA$ of [F4]. [F1, F4, step 3.1]

5.1 **Conclusion.** The completed affine-Hecke algebra, its partial centres $Z_{i,r}$, the divided functors and the complementary-idempotent restriction give the complete categorical crystal head/socle claim: each nonzero residue translate of a simple is a self-dual indecomposable with simple isomorphic head and socle at the stated crystal label, and vanishing corresponds exactly to a missing crystal edge. [step 1.1, step 2.1, step 1.2, step 2.2, step 3.1, step 4.1] ∎
