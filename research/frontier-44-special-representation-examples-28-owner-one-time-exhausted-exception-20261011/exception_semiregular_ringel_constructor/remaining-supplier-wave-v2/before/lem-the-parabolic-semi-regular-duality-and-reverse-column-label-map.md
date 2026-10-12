---
id: lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map
kind: lemma
title: "Parabolic semi-regular duality and the reverse-column label map"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-standard-parabolic-and-levi-subalgebras-from-simple-roots,
       def-parabolic-category-o-for-a-standard-parabolic,
       thm-parabolic-category-o-is-a-highest-weight-category,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-root-sl-two-triple,
       prop-trace-forms-are-symmetric-and-invariant,
       prop-brackets-of-root-spaces,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       def-axiom-of-choice,
       def-higher-level-wedge-tensor-fock-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Character formulas for tilting modules over Kac-Moody algebras (complete 22-page author English preprint; some later additions absent)"
      url: "https://home.mathematik.uni-freiburg.de/soergel/PReprints/CharKippengl.ps"
      locator: "Sections1–2 (pp1–6), Sections5–6 (pp10–15) and Section7 parabolic grading and Lemma7.4 (pp16–19); actual full body read via converted PDF/OCR, with local correction of the nonzero-Levi PBW dimension shortcut."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$\mathfrak g=\mathfrak{gl}_n$, with Cartan $\mathfrak h$, Borel
$\mathfrak b$, root system $\Phi$, positive roots $\Phi^+$, and let
$\mathfrak p=\mathfrak l_J\oplus\mathfrak u_J$ be a standard parabolic.
For a lower-bounded Fock tableau shape set $n_j=m_j+1-\inf(I)$,
$n=\sum_j n_j$, use the column readings $a_j$ of a tableau $A$ and put
$\lambda_{A,j}=a_j+j-1$; these data define the genuine finite integral
parabolic **central summands** by the structural category of
[[thm-parabolic-category-o-is-a-highest-weight-category]]. No connectedness
of the block is assumed.

Let $\bar{\mathfrak p}=\mathfrak l_{\bar J}\oplus\bar{\mathfrak u}$ be the
**reversed-block** standard parabolic in $\mathfrak{gl}_n$
([[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]]), and grade
$\mathfrak g$ by putting the simple Levi roots of $\bar{\mathfrak l}$ in degree
$0$ and all outside simple roots in degree $1$, so that
$\mathfrak g_0=\bar{\mathfrak l}$,
$\mathfrak g_{<0}=\bar{\mathfrak u}^-$ and
$\gamma:=2\rho_{\mathfrak g}-2\rho_{\bar{\mathfrak l}}$ is a Levi character
extended by zero on $\bar{\mathfrak u}$.

Then:

(1) **(Semi-regular bimodule.)** The space
$$S_{\bar{\mathfrak u},\gamma}:=U(\bar{\mathfrak u}^-)^{\#}\otimes U(\bar{\mathfrak p})$$
carries the structure of a $U(\mathfrak g)$-$U(\mathfrak g)$-bimodule whose left
and right actions commute, with the two PBW module identifications (right action
from $N^{\#}\otimes_N U$ and left action from
$\operatorname{Hom}_{U(\bar{\mathfrak p})}(U(\mathfrak g),\mathbb C_\gamma\otimes U(\bar{\mathfrak p}))$,
$N=U(\bar{\mathfrak u}^-)$); no completed series occurs.

(2) **(Free/cofree adjunction.)** On modules that are free of finite graded
$N$-rank the tensor functor $T=S\otimes_{U(\mathfrak g)}(-)$ produces
$N$-cofree modules of the same rank, and its right adjoint
$H=\operatorname{Hom}_{U(\mathfrak g)}(S,-)$ (restricted homogeneous maps) takes
finite cofree modules to free ones; unit and counit are isomorphisms, both
functors are exact, and $\operatorname{End}_N(N^{\#})\cong N^{\mathrm{op}}$.

(3) **(Contravariant equivalence.)** The restricted contragredient dual
$\Phi(M):=(S\otimes_{U(\mathfrak g)}M)^{\#}$ is an exact contravariant
equivalence from finite generalized-standard flags for $\bar{\mathfrak p}$ to
finite generalized-standard flags for $\mathfrak p$, and on a finite Levi
simple $E$
$$\Phi(\Delta^{\bar J}(E))\cong\Delta^{J}(\mathbb C_{-\gamma}\otimes E^{*}),$$
with the displayed highest Levi weight of the action of $\mathfrak l_{\bar J}$
on the top space.

(4) **(Label map.)** Let $c(X)=-w_0X^{\mathrm{tw}}w_0$ be the Chevalley
automorphism interchanging the two parabolics, and put
$\Psi=c^{*}\Phi$. The Levi highest weight of $\bar E^{*}$ is
$-w_{\bar J}\lambda_{\bar A}$; $\Phi$ sends its label to
$\nu=-w_{\bar J}\lambda_{\bar A}-2\rho_{\bar{\mathfrak u}}$, and $c^{*}$ sends
$\nu$ to $-w_0\nu$. If a target column has length $r$ and starts at offset
$b$, its reversed source block starts at $b'=n-b-r$, $w_0w_{\bar J}$ preserves
the position inside each column, and the scalar
$2w_0\rho_{\bar{\mathfrak u}}$ on that block equals $b-b'$. Consequently
$$-w_0\nu=w_0w_{\bar J}\lambda_{\bar A}+2w_0\rho_{\bar{\mathfrak u}}\quad\text{has }i\text{-th coordinate }a_i+i-1,$$
so $\Psi(\bar\Delta(A))\cong\Delta(A)$: the tableau label, its scalar central
$\mathfrak{gl}_n$ coordinate and its matching central-character block are
unchanged. The Harish-Chandra shift used here is
$\rho_j=(n+1-2j)/2$, so that $\lambda_j+\rho_j=a_j+(n-1)/2$. The reverse-column
Bruhat order is the reverse of the original order.

(5) **(Covariance.)** Let $D$ be the restricted BGG transpose duality of
category $\mathcal O$ ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]).
Then $F=D\Psi$ is a **covariant** exact equivalence from opposite standard
flags to target costandard flags, with $F(\bar\Delta(A))=\nabla(A)$; it
preserves the corresponding central blocks and reverses the label order.

All assertions are exact filtered-category statements on the finite
generalized-standard flag categories; no equivalence on all objects of
category $\mathcal O$ and no unchanged underived full-longest Borel twisting
functor is asserted.

## Facts & Assumptions

**Given:** The type-$A$ Lie algebra $\mathfrak{gl}_n$ with its root datum, a standard parabolic $\mathfrak p$ and the reversed-block parabolic $\bar{\mathfrak p}$, the degree grading $\mathfrak g=\bigoplus_{k\in\mathbb Z}\mathfrak g_k$ with $\mathfrak g_0=\bar{\mathfrak l}$, $\mathfrak g_1=\bar{\mathfrak u}$, $\mathfrak g_{-1}=\bar{\mathfrak u}^-$ and $\gamma=2\rho_{\mathfrak g}-2\rho_{\bar{\mathfrak l}}$, the Fock reading $a_j\mapsto\lambda_{A,j}=a_j+j-1$, and the structural category of [[thm-parabolic-category-o-is-a-highest-weight-category]].

[F1] PBW, root $\mathfrak{sl}_2$-triples, root-space brackets, and symmetry and invariance of the trace form ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[thm-root-sl-two-triple]], [[prop-brackets-of-root-spaces]], [[prop-trace-forms-are-symmetric-and-invariant]]): the ordered PBW monomials form a basis of $U(\mathfrak g)$; for each root $\alpha$ the elements $e_\alpha,f_\alpha,H_\alpha$ span a copy of $\mathfrak{sl}_2$; root spaces bracket into root spaces or the Cartan; $\operatorname{tr}(\operatorname{ad}X\operatorname{ad}Y)$ is a symmetric invariant bilinear form with $\operatorname{tr}(\operatorname{ad}e_\alpha\operatorname{ad}f_\alpha)=\operatorname{tr}(\operatorname{ad}H_\alpha\operatorname{ad}H_\alpha)/2\ne0$.

[F2] Parabolic structure ([[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]], [[def-parabolic-category-o-for-a-standard-parabolic]], [[thm-parabolic-category-o-is-a-highest-weight-category]]): $\bar{\mathfrak u}$ is the sum of the positive root spaces outside $\Phi_{\bar J}$ and is the nilradical of $\bar{\mathfrak p}$, $\bar{\mathfrak u}^-$ is the opposite radical, $\bar{\mathfrak p}=\bar{\mathfrak l}\oplus\bar{\mathfrak u}$, the Levi is reductive with Weyl group $W_{\bar J}$ and half-sum of positive roots $\rho_{\bar{\mathfrak l}}$, and the generalized standards, costandards and their finite flag categories are as in the structural theorem. The grading element $\zeta\in\mathfrak z(\bar{\mathfrak l})$ has $\alpha_i(\zeta)=0$ for $i\in\bar J$ and $\alpha_i(\zeta)=1$ otherwise, and gives the degree grading.

[F3] Restricted Chevalley duality $D$ is an exact contravariant equivalence of $\mathcal O$ preserving weights and sending standards to costandards ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]).

[F4] Fock labels ([[def-higher-level-wedge-tensor-fock-module]]): a lower-bounded tableau reading has columns $a_j$, shape entries $n_j=m_j+1-\inf(I)$ and shifted labels $\lambda_{A,j}=a_j+j-1$; the reversed block is obtained by reversal of the prefix partial weights at fixed total weight.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The trace identity on the graded pieces.** The bilinear forms $(X,Y)\mapsto\operatorname{tr}(\operatorname{ad}X\operatorname{ad}Y)$ and $(X,Y)\mapsto\gamma([X,Y])$ on $\mathfrak g_1\times\mathfrak g_{-1}$ are $\bar{\mathfrak l}$-invariant: invariance of the trace form follows from the invariance of the bracket, and $\gamma$ is a character of $\bar{\mathfrak l}$ vanishing on Levi coroots. The $\bar{\mathfrak l}$-module $\mathfrak g_1$ is generated by the simple outside root vectors under Levi brackets, so a $\bar{\mathfrak l}$-invariant form is determined by its values on the opposite pairs $(e_\alpha,f_\alpha)$. For such a pair, $[e_\alpha,f_\alpha]=H_\alpha$ (up to the fixed normalization of [F1]) and $\gamma(H_\alpha)=2\rho_{\mathfrak g}(H_\alpha)-2\rho_{\bar{\mathfrak l}}(H_\alpha)$; on the other hand $\operatorname{tr}(\operatorname{ad}e_\alpha\operatorname{ad}f_\alpha)$ equals the same number, because the involved space is spanned by the root spaces $\mathfrak g_{\pm\alpha}$, the Cartan, and the Levi root spaces, and each contributes its root pairing value. All other weight pairs contribute $0$ on both sides. Hence $\gamma([X,Y])=\operatorname{tr}_{\bar{\mathfrak l}}(\operatorname{ad}X\operatorname{ad}Y)$ for all $X\in\mathfrak g_1$, $Y\in\mathfrak g_{-1}$. [F1, F2, algebra]

1.2 **The bimodule and its right action.** Put $N:=U(\bar{\mathfrak u}^-)$, $B:=U(\bar{\mathfrak p})$, and let $N^{\#}$ be the restricted graded dual (finite-dimensional on each homogeneous piece, since the homogeneous pieces of $N$ are finite dimensional). Because $N^{\#}$ is a right $N$-module via the transpose of left multiplication, the tensor product $N^{\#}\otimes_N U(\mathfrak g)$ is a well-defined right $U(\mathfrak g)$-module, and the PBW basis identifies it with $S=N^{\#}\otimes B$: the multiplication map $N\otimes B\to U(\mathfrak g)$ is an isomorphism of $N$-modules by PBW. [F1, F2, construct]

1.3 **The left action formulas.** Let $H\in\bar{\mathfrak l}$ and $X\in\mathfrak g_1$. Decompose the product $nX$ for $n\in N$ by PBW as $nX=Xn+\sum_i H_i\,H_i^X(n)+F_X(n),$ with $H_i$ a basis of $\bar{\mathfrak l}$ and $H_i^X,F_X$ linear maps $N\to N$; this is the finite PBW reordering of the product. Using the left action on $N^{\#}\otimes B$ induced by left multiplication on $U(\mathfrak g)$ (equivalently by $\operatorname{Hom}_B(U(\mathfrak g),\mathbb C_\gamma\otimes B)$) gives $H\cdot(f\otimes1)=-(f\operatorname{ad}H)\otimes1+f\otimes(H+\gamma(H)),\qquad X\cdot(f\otimes1)=f\otimes X+\sum_i(f\,H_i^X)\otimes(H_i+\gamma(H_i))+(fF_X)\otimes1,$ with the sign in the first display coming from the transpose in the dual. These formulas are finite and use only the PBW decomposition of [F1]. [F1, F2, algebra]

2.1 **The left PBW identification.** Order PBW monomials of $U(\mathfrak g)=U(\bar{\mathfrak u}^-)\,U(\bar{\mathfrak p})$ first by positive $\zeta$-degree and then by the PBW degree inside $U(\bar{\mathfrak l})$; this is a well-founded lexicographic order. The formulas of step 1.3 move a left $H$ or $X$ across $f$ with leading term $f\otimes H$, respectively $f\otimes X$, and all correction terms are strictly lower in this order. Induction over the order therefore proves that the left $U(\mathfrak g)$-multiplication map produces a spanning set with triangular leading symbols, hence is surjective; the same triangularity gives linear independence of the leading symbols, hence injectivity. Every expression is a finite sum with bounded filtration, so no completed infinite series is used, and the possibly infinite-dimensional degree-zero piece is never compared as a finite-dimensional space. [F1, F2, step 1.3, algebra]

3.1 **Commutation of the actions.** The left and right actions on $S$ are built from left multiplication and right multiplication on $U(\mathfrak g)$; their commutator on an element $f\otimes1$ is a sum of terms of the same PBW type, and the terms involving $[X,Y]$ for $X\in\mathfrak g_1$, $Y\in\mathfrak g_{-1}$ reduce, by the explicit formulas of steps 1.3 and 2.1 and the identity $[L_X,L_Y]=L_{[X,Y]}$ on $N$, exactly to $\gamma([X,Y])-\operatorname{tr}_{\bar{\mathfrak l}}(\operatorname{ad}X\operatorname{ad}Y)=0$ by step 1.1. For $H\in\bar{\mathfrak l}$ and $Y\in\mathfrak g_{-1}$ one has $[\operatorname{ad}H,L_Y]=L_{[H,Y]}$, so the $H$-terms close into the Levi action; left $N$ already commutes with right $U(\mathfrak g)$, and right $B$ with left $U(\mathfrak g)$. Since the algebra is generated by $\mathfrak g_0,\mathfrak g_{\pm1}$, the two actions commute on all of $S$. [F1, F2, F5, step 1.1, step 1.3, step 2.1, algebra]

4.1 **The free/cofree adjunction.** For a module $M$ free of finite graded $N$-rank, $T(M)=S\otimes_{U(\mathfrak g)}M$ is $N$-cofree of the same rank: tensoring the free $N$-basis with the defining identification of $S$ realizes it as a finite direct sum of copies of the cofree module $\operatorname{Hom}_{\mathbb C}(N,\mathbb C)$ with its restricted grading. Its right adjoint $H=\operatorname{Hom}_{U(\mathfrak g)}(S,-)$, formed with restricted homogeneous maps, takes finite cofree modules to free modules; $\operatorname{End}_N(N^{\#})\cong N^{\mathrm{op}}$ by transpose, with the augmentation and finite homogeneous pieces ruling out completions. The unit and counit reduce to the evaluation maps of free and cofree modules, hence are isomorphisms, and both functors preserve exact sequences in these exact categories (which split over $N$). restricted dual of the cofree module is free via the principal antipode. [F1, F2, step 1.2, step 3.1]

5.1 **The contravariant equivalence.** Let $(-)^{\#}$ be the restricted graded contragredient dual. Since $S\otimes_{U(\mathfrak g)}(-)$ is exact and takes finite free to finite cofree objects, the functor $\Phi(M)=(S\otimes_{U(\mathfrak g)}M)^{\#}$ sends finite free $N$-modules to finite free $N$-modules; it is an exact contravariant functor, and the natural biduality $M^{\#\#}\cong M$ together with the unit and counit of step 4.1 makes it involutive on these objects. Hence $\Phi$ is an exact contravariant equivalence on the finite free-graded-$N$ modules. [F1, step 4.1]

6.1 **Action on generalized standards.** Let $E$ be a finite Levi simple with highest weight $\eta$ and let $\Delta^{\bar J}(E)=U(\mathfrak g)\otimes_{U(\bar{\mathfrak p})}E$ be the corresponding generalized standard. As a graded $N$-module, $M=\Delta^{\bar J}(E)$ is free on the negative outside monomials applied to $E$, so that $T(M)=N^{\#}\otimes E$ with the top Levi space $\mathbb C_{-\gamma}\otimes E^{*}$; the $H$-action of step 1.3 on the top space is $\eta-\gamma$, so the highest Levi weight of the source factor is $-\gamma+\eta$ before dualization, and dualizing gives the displayed $\mathbb C_{-\gamma}\otimes E^{*}$. The negative outside PBW action stays free and the positive action annihilates the top space; hence $\Phi(\Delta^{\bar J}(E))$ is a generalized standard for $\mathfrak p$ with the displayed top Levi space. This restricts both functors to the categories of objects with finite generalized-standard flags by induction on the flag length, and preserves exactness on those flag categories. [F1, F2, step 1.3, step 5.1, induction]

7.1 **The reverse-column label computation.** For a tableau $A$ let $a_{\mathrm{rev}}$ be its reverse-column reading, with components $a_{\mathrm{rev},j}$, and put $\lambda_{\bar A,j}=a_{\mathrm{rev},j}+j-1$. The Levi highest weight of the appropriate simple factor $E$ is $-w_{\bar J}\lambda_{\bar A}$, and step 6.1 gives the label $\nu=-w_{\bar J}\lambda_{\bar A}-2\rho_{\bar{\mathfrak u}}$. Let $c(X)=-w_0X^{\mathrm{tw}}w_0$; it preserves an upper Borel, reverses the Levi block order, and sends highest weights to $-w_0$ of them, so $\Psi=c^{*}\Phi$ is again an exact contravariant equivalence, from finite standard flags for $\bar{\mathfrak p}$ to finite standard flags for $\mathfrak p$. If a target column has length $r$ and starts at offset $b$, its reversed source block starts at $b'=n-b-r$, and $w_0w_{\bar J}$ sends the $k$-th source coordinate to the $k$-th target coordinate, preserving the position inside the column; the constant $2w_0\rho_{\bar{\mathfrak u}}$ on that target block equals $b-b'$. Therefore the $i$-th coordinate of $w_0w_{\bar J}\lambda_{\bar A}+2w_0\rho_{\bar{\mathfrak u}}=-w_0\nu$ is $a_i+(b'+k-1)+(b-b')=a_i+i-1$, which is exactly $\lambda_{A,i}$. Hence $\Psi(\bar\Delta(A))\cong\Delta(A)$, including the scalar central $\mathfrak{gl}_n$ coordinate; the shifted-coordinate multiset is preserved, so the matching central-character blocks correspond. [F2, F4, step 6.1, algebra]

8.1 **The Harish-Chandra shift and the Bruhat order.** With the half-sum normalization $\rho_j=(n+1-2j)/2$ one has $\lambda_j+\rho_j=a_j+(n-1)/2$, so the shifted labels used in the central-character identification are the ones just computed; on $\mathfrak{gl}_n$ the trace-centre scalar is unchanged. The reverse-column Bruhat order is the reverse of the original order, because reversal of prefix partial weights at fixed total weight reverses the order. [F4, step 7.1, algebra]

9.1 **Covariance and conclusion.** Let $D$ be the restricted BGG transpose duality of [F3]. It is an exact contravariant equivalence sending standards to costandards and fixing the central blocks; hence $F=D\Psi$ is a covariant exact equivalence from finite standard flags for the opposite parabolic to finite costandard flags for the target, with $F(\bar\Delta(A))=\nabla(A)$. The label order is reversed because $D$ reverses the flag direction. All statements concern the finite generalized-standard flag categories only; no equivalence on all of $\mathcal O$ and no unchanged full-longest Borel twisting is asserted. [F2, F3, step 6.1, step 7.1, step 8.1] ∎
