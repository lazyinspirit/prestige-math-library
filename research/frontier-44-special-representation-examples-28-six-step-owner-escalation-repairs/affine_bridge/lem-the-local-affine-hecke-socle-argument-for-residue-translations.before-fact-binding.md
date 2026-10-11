---
id: lem-the-local-affine-hecke-socle-argument-for-residue-translations
kind: lemma
title: "The local affine-Hecke socle argument for residue translations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 25
deps:
  - lem-finite-type-a-full-tensor-source-upper-charts-and-string-leading-terms
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

1.3 **The height filtration.** Fix one residue, write $E,F$ for its biadjoint functors and $e,f$ for their class operators, and put $h_+(b)=\max\{j:e^jb\ne0\}$, $h_-(b)=\max\{j:f^jb\ne0\}$ and $d(b)=h_+(b)+h_-(b)+1$ for a simple class $b$. These are finite by [F1]; at weight $\lambda$, ordinary $\mathfrak{sl}_2$ string theory gives $d(b)=2h_+(b)+\lambda+1=2h_-(b)-\lambda+1$. Positivity implies that every simple constituent $c$ of $eb$ has $h_+(c)\le h_+(b)-1$, so $d(c)\le d(b)$; the $f$ argument is identical. Hence the Serre subcategory generated by simples with $d\le r$ is stable under $E,F$. If $T$ is a simple subobject of $E^jM$, adjunction gives a nonzero map $F^jT\to M$; its image contains a simple subobject $S$ of $M$, and the preceding bound gives $d(S)\le d(T)$. The dual argument applies to simple quotients. Consequently translates of an object of height at most $r$ whose simple head and socle constituents all have height $r$ have the same property. [F1, algebra]

1.4 **The full source upper chart and simple classes.** The independent construction [[lem-finite-type-a-full-tensor-source-upper-charts-and-string-leading-terms]] applies to every finite cut of the complete minuscule tensor module, in both factor orders. It dualizes the entire reverse lower tensor construction through $H(x,y)=C(\widetilde\psi x,y)$, whose raw monomial Gram matrix is $I$ and whose coefficient conjugation exchanges $A_0(s^{-1})$ with $A_0(s)$. This produces the actual balanced source-upper triple with lifts $L_A$, rather than inferring upper crystal hypotheses from triangularity alone. Its endpoint divided-power argument proves $\ker E_i^{n+1}=\operatorname{span}\{L_A:\varepsilon_i(A)\le n\}$ and the corresponding $F_i$ statement, so the maximal nonzero iteration heights of $L_A$ are precisely $\varepsilon_i(A),\varphi_i(A)$. The KL theorem of [F4] identifies the genuine standard/simple composition matrix with $M_B=\sum_A d_{A,B}(1)L_A$. Since both matrices are unitriangular, their inverses identify the simple class $[L(A)]$ with the actual source vector $L_A$ at $1$. The standard-class translation action of [F1] therefore carries this simple-class identification through every residue iteration. [F1, F4, algebra]

2.1 **Matrix units and the completed fibre.** The invariant-ring freeness basis together with the longest divided difference gives a perfect relative trace pairing whose reduction is the coinvariant top-degree pairing of [F3]; complete-local Nakayama makes the Gram matrix invertible over the complete invariant ring, and multiplication followed by the trace realizes every matrix unit. The completed fibre is therefore $\mathrm{Mat}_{r!}(\mathbb C)$, with its unique simple module of dimension $r!$. [F2, F3, F5, step 1.1, construct]

2.2 **The partial ring and the idempotent restriction.** The monomial basis $x_1^{a_1}\cdots x_i^{a_i}$, $0\le a_j\le r-j$, obtained by successively adjoining a distinguished root, shows that the ordered partial ring is free of rank $i!$ over $Z_{i,r}$ of dimension $r!/(r-i)!$, and the image of the first-$i$ algebra is $\mathrm{Mat}_{i!}(Z_{i,r})$. Averaging with the trivial or sign symmetric-group idempotent realizes the divided functors $E^{(i)}$ with $E^i\cong i!E^{(i)}$; the completed trivial/sign idempotents have rank $1$ over the complete invariant centre because the divided-difference corrections strictly lower degree and the diagonal group character is the regular coinvariant character of [F3], so their projective images are free of rank $1$. Applying the full idempotent to the free restriction identifies the complementary-idempotent restriction of the completed algebra with the unique indecomposable projective over $\mathrm{Mat}_{i!}(Z_{i,r})$, which by Frobeniusness has simple head and socle. [F2, F3, step 1.2, construct]

3.1 **An extremal simple.** Suppose $FS=0$ and put $n=h_+([S])$. Positivity and $\mathfrak{sl}_2$ string theory imply $[E^{(n)}S]=m[T]$ for a single simple $T$ and an integer $m>0$: the positive extremal classes give a bijection between the lowest and highest simple classes. Indeed $f^ne^n[S]=(n!)^2[S]$; each positive summand of $e^n[S]$ must return to a multiple of $[S]$, and $e^nf^n$ is the same nonzero scalar on the highest weight space, forcing all these summands to be the same simple class. Since $[F^{(n)}E^{(n)}S]=[S]$, integrality and positivity force $m=1$. Thus $E^{(n)}S$ is simple. The full Hecke multiplicity module in $E^nS\cong n!E^{(n)}S$ is the unique simple module $K_n$ of the central fibre, of dimension $n!$, by step 2.1. [F1, step 2.1, step 2.2, step 1.3, algebra]

3.2 **Head, socle and the maximal-height constituent.** More generally suppose $E^{(n)}S$ is simple, where $n=h_+([S])$, and let $0\le j\le n$. The complement-idempotent restriction of $K_n$ in step 2.2 has simple head and socle over the remaining $(n-j)$-step algebra. Applying $E^{n-j}$ to $\operatorname{soc}E^{(j)}S$ embeds its image in that restriction tensored with the extremal simple. Step 1.3 ensures that each simple socle summand has height $d([S])$ and survives this translate. Two such summands, or two copies of one, would give a direct sum of two nonzero submodules inside a module with simple socle. Thus $E^{(j)}S$ has simple socle $T_j$; the opposite-category argument gives a simple head. Its socle multiplicity module in $E^jS\cong j!E^{(j)}S$ is $K_j$. Applying $\operatorname{Hom}(-,E^{(j)}S)$ along a composition series bounds the endomorphism dimension by the composition multiplicity of $T_j$, since Hom from a simple to this object is one-dimensional for $T_j$ and zero otherwise. This multiplicity is at most $\binom nj$, since $E^{(n-j)}E^{(j)}S\cong\binom nj E^{(n)}S$. On the other hand the Hecke action has dimension at least $(j!)^2\binom nj$: its kernel lies in the intersection of the first-$j$ algebra with the maximal central ideal of the full completed matrix algebra. Step 2.2 identifies the corresponding quotient as $\mathrm{Mat}_{j!}(Z_{j,n})$, of precisely that dimension. The two bounds force equality and show that $T_j$ occurs $\binom nj$ times and is the only constituent surviving $E^{n-j}$. The head has the same height and survives, so it is also $T_j$. All other constituents have strictly smaller height. [F1, step 2.1, step 2.2, step 1.3, algebra]

4.1 **A general simple.** Put $r=h_-([S])$ and choose a simple quotient $L$ of $F^{(r)}S$. Positivity implies $FL=0$, and adjunction embeds $S$ into $E^{(r)}L$. Step 3.1 makes $E^{(n+r)}L=T$ simple for $n=h_+([S])$. The divided-functor composition, obtained by the idempotent ranks of step 2.2, gives $E^{(n)}E^{(r)}L\cong\binom{n+r}{r}T$. Exactness therefore makes $E^{(n)}S$ a nonzero semisimple sum $mT$. Since $ET=0$, the $F$ version of step 3.2 applies to $T$ and gives $F^{(n)}T$ simple socle. Adjunction yields $m=\dim\operatorname{Hom}(E^{(n)}S,T)=\dim\operatorname{Hom}(S,F^{(n)}T)\le1$. Thus $E^{(n)}S$ is simple, and step 3.2 applies to every simple $S$. Interchanging $E,F$ gives both residue directions. A nonzero one-step translate has simple isomorphic head and socle and is indecomposable, since a nontrivial direct sum would have at least two simple head constituents. This proves the categorical conclusion before assigning tableau labels. [F1, step 2.2, step 3.1, step 3.2, algebra]

5.1 **Associated strings identify the head and socle labels.** At fixed weight the helper's adapted kernel basis identifies the filtration by root-string dimension with the span of $L_A$ with $r_i(A)=\varepsilon_i(A)+\varphi_i(A)+1$ bounded. Its associated upper string has $E_iL_A=[\varepsilon_i(A)]_sL_{\tilde e_iA}$ and $F_iL_A=[\varphi_i(A)]_sL_{\tilde f_iA}$ modulo strictly shorter strings. At $1$ the nonzero leading multiplicity is $\varepsilon_i(A)$, respectively $\varphi_i(A)$; positivity of the genuine class action and step 1.4 identify these string dimensions with the categorical heights of step 1.3. The categorical unique maximal-height factor of step 3.2 must therefore be $L(\tilde e_iA)$, respectively $L(\tilde f_iA)$, including its stated multiplicity. Step 4.1 makes it the simple isomorphic head and socle. Vanishing is equivalent to height zero, which by step 1.4 is precisely the absence of the crystal edge. Finally [F1]'s commutation with restricted duality and self-duality of the input simple make each nonzero translate self-dual, and its simple head makes it indecomposable. This compares actual balanced associated strings with actual categorical heights on the full tensor; it does not use a highest-constituent basis comparison. [F1, F4, step 1.3, step 3.2, step 4.1, step 1.4, algebra]

6.1 **Conclusion.** The completed affine-Hecke algebra, its partial centres $Z_{i,r}$, the divided functors and the complementary-idempotent restriction give the complete categorical crystal head/socle claim: each nonzero residue translate of a simple is a self-dual indecomposable with simple isomorphic head and socle at the stated crystal label, and vanishing corresponds exactly to a missing crystal edge. [step 1.1, step 2.1, step 1.2, step 2.2, step 4.1, step 1.4, step 5.1] ∎
