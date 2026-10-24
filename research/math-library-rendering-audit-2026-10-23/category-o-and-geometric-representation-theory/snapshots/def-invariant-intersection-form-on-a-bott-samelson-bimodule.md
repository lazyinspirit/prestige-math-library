---
id: def-invariant-intersection-form-on-a-bott-samelson-bimodule
kind: definition
title: "The trace, the invariant intersection form on Bott-Samelson bimodules and its reduction"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds, def-real-type-a-soergel-category-and-scalar-extension, def-reduced-soergel-module-and-dominant-lefschetz-operator, def-bott-samelson-bimodule-of-a-word, def-type-a-soergel-bimodule-for-a-simple-reflection, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-definiteness-inertia-and-signature-data-over-the-reals]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 3.3 (invariant forms, duality, graded Nakayama); Section 3.4 (the elements c_id, c_s, the trace Tr, the intersection form on BS(x)); Section 3.6 (the induced form, formulas (3.8)-(3.10), Lemma 3.8 and Corollary 3.9); Lemma 3.10 (positive-definiteness on the lowest degree)"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Section 4, Lemma 4.5 (the rank-one splitting underlying the induced forms) and Satz 6.14(3) (self-duality of the B_x)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Lemma 2.5 (construction of invariant forms under tensor products) and Lemma 2.6 (non-degeneracy)"
verification:
  precheck: n/a
---

## Definition

**The Bott-Samelson bimodule and its subexpression basis.** Fix a finite word
$\underline x=s_1\cdots s_m$ in the simple reflections and let
$$\mathrm{BS}(\underline x):=B_{s_1}\otimes_S\cdots\otimes_SB_{s_m}$$
be the real Bott-Samelson bimodule
([[def-bott-samelson-bimodule-of-a-word]]), with $B_s=S\otimes_{S^s}S(1)$
([[def-type-a-soergel-bimodule-for-a-simple-reflection]]). In each factor put
$$c_{\mathrm{id}}:=1\otimes1,\qquad c_s:=\tfrac12\bigl(\alpha_s\otimes1+1\otimes\alpha_s\bigr),$$
of degrees $-1$ and $+1$; here $\alpha_s$ is the coordinate root of
[[def-real-type-a-soergel-category-and-scalar-extension]], so that
$\partial_s(r)=(r-sr)/\alpha_s$ is the coordinate Demazure operator. The
elements $\{c_{\mathrm{id}},c_s\}$ form a right (and a left) $S$-basis of $B_s$
and the multiplication rules
$$c_{\mathrm{id}}c_{\mathrm{id}}=c_{\mathrm{id}},\qquad c_{\mathrm{id}}c_s=c_s,\qquad c_sc_s=c_s\alpha_s$$
hold. For a subexpression $\varepsilon=(\varepsilon_1,\ldots,\varepsilon_m)$
with $\varepsilon_i\in\{\mathrm{id},s_i\}$ put
$$c_\varepsilon:=c_{\varepsilon_1}\cdots c_{\varepsilon_m}\in\mathrm{BS}(\underline x),$$
the tensor product of the chosen elements, and put
$$c_{\mathrm{top}}:=c_{s_1}\cdots c_{s_m}.$$
The elements $\{c_\varepsilon\}$ form a right (and a left) $S$-basis of
$\mathrm{BS}(\underline x)$; the bimodule is finite free of rank $2^m$ on each
side ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]).
Moreover $\mathrm{BS}(\underline x)\cong\bigl(S\otimes_{S^{s_1}}S\otimes_{S^{s_2}}\cdots\otimes_{S^{s_m}}S\bigr)(m)$,
so after the shift by $(-m)$ the termwise multiplication makes
$\mathrm{BS}(\underline x)(-m)$ a commutative ring with unit $c_{\mathrm{id}}\cdots c_{\mathrm{id}}$;
in particular it contains the powers of any degree-two element and products of
commuting elements.

**The trace and the intersection form.** Define the **trace**
$$\operatorname{Tr}:\mathrm{BS}(\underline x)\longrightarrow S$$
to be the coefficient of $c_{\mathrm{top}}$ when an element is written in the
right basis $\{c_\varepsilon\}$, and define the **intersection form** by
$$\langle b,b'\rangle:=\operatorname{Tr}(b\,b'),$$
the product being taken in the commutative ring $\mathrm{BS}(\underline x)(-m)$.
Then:

1. $\langle-,-\rangle$ is a graded symmetric form, $S$-bilinear for the right
   action, and invariant in the sense
   $\langle rb,b'\rangle=\langle b,rb'\rangle$ and
   $\langle br,b'\rangle=\langle b,b'r\rangle=\langle b,b'\rangle r$ for
   $r\in S$;
2. if $B$ is a direct summand of a finite direct sum of shifts of
   Bott-Samelson bimodules, then an invariant form on $B$ is obtained by
   restricting an invariant form of the ambient finite sum, and the restriction
   is determined up to the choices of the ambient forms;
3. for a self-dual bimodule $B$ with invariant form $\langle-,-\rangle_B$ the
   **induced form** on $BB_s$ is the unique invariant form satisfying, for all
   $b,b'\in B$,
   $$\langle\alpha(b),\alpha(b')\rangle=\partial_s(\langle b,b'\rangle_B),\qquad \langle\alpha(b),\beta(b')\rangle=\langle b,b'\rangle_B=\langle\beta(b),\alpha(b')\rangle,\qquad \langle\beta(b),\beta(b')\rangle=\langle b,b'\rangle_B\,\alpha_s,$$
   where $\alpha(b):=b\,c_{\mathrm{id}}$ and $\beta(b):=b\,c_s$;
4. the intersection form on a Bott-Samelson bimodule is non-degenerate as an
   $S$-valued form, and for a summand $B$ of a Bott-Samelson bimodule the
   restricted form is non-degenerate whenever $B$ has finite free right
   $S$-rank and the induced reduced form on $\overline B$ is non-degenerate
   (graded Nakayama);
5. the reduction of $\langle-,-\rangle$ is a graded symmetric $k$-valued form
   $\langle-,-\rangle_{\overline M}$ on $\overline M$
   ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]]), and for a
   finite right-free $M$ the $S$-valued form is non-degenerate if and only if
   the reduced form is graded non-degenerate;
6. Bott-Samelson bimodules and the indecomposable bimodules $B_w^R$ are
   self-dual, so
   $\dim(\overline{B_w^R})^{-i}=\dim(\overline{B_w^R})^{i}$ for all $i$
   (symmetric Betti numbers).

Additionally record the left/right asymmetry: the form is bilinear for the
right action and satisfies the two invariance identities displayed in (1); it is
not left $S$-bilinear in general, because $\langle rb,b'\rangle$ is defined
through the trace of a product while the two $S$-actions differ on
$\mathrm{BS}(\underline x)$.

## Remark

**Why the clauses hold.** (i) The product rules in each factor follow from
$c_{\mathrm{id}}=1\otimes1$, $\alpha_s\in S^{s}\oplus\alpha_sS^{s}$ and
$\partial_s(\alpha_sh)=2h$ for $h\in S^s$; termwise multiplication makes
$\mathrm{BS}(\underline x)(-m)$ commutative, and $\operatorname{Tr}$ is
$S$-linear on the right. Symmetry of $\langle-,-\rangle$ is commutativity of the
product combined with symmetry of $\operatorname{Tr}$ on products; the
invariance identities in (1) are the associativity of the commutative product:
$\operatorname{Tr}(rbb')=\operatorname{Tr}(brb')$ and
$\operatorname{Tr}(brb')=\operatorname{Tr}(bb'r)$. (ii) Restriction of the
ambient form is invariant because the embedding of a summand and the ambient
form are bimodule data, the precise scalar and multiplicity-space comparisons under the character hypotheses are proved in the uniqueness lemma later on this page. (iii) For (3), EW fix a basis
$e_1,\ldots,e_m$ of $B$ and note that
$\alpha(e_1),\ldots,\alpha(e_m),\beta(e_1),\ldots,\beta(e_m)$ is a basis of
$BB_s$; formulas (3.8)-(3.10) fix the form on this basis and one checks that
they are consistent for all $b,b'$ and left-invariant; the form is symmetric
if $\langle-,-\rangle_B$ is. (iv) For (4), with a basis $e_i$ and dual basis
$e_i^*$ for the non-degenerate form on $B$, the matrix of the induced form in
the bases $(\alpha(e_i),\beta(e_i))$ and $(\beta(e_i^*),\alpha(e_i^*))$ is
$\begin{pmatrix}I_m&0\\ \alpha_sI_m&I_m\end{pmatrix}$: the upper-right entry is
$\partial_s$ of the identity pairing, and $\partial_s(1)=0$. Its determinant is
$1$, so the induced form is non-degenerate (Lemma 3.8). Iterating this from the
multiplication form on $S$ gives Corollary 3.9, the non-degeneracy of the
intersection form on every $\mathrm{BS}(\underline x)$; the statement about
summands is the graded Nakayama criterion of (5). (v) For (5), an invariant
form on a finite right-free $M$ is the same as a bimodule map $M\to DM$; the
reduction functor and the graded Nakayama lemma show that this map is an
isomorphism if and only if its reduction is, and the reduced form is graded
symmetric because it is induced by a graded form. (vi) For (6), the
intersection form is non-degenerate on $\mathrm{BS}(\underline x)$, hence
gives an isomorphism $\mathrm{BS}(\underline x)\to D\,\mathrm{BS}(\underline x)$;
for the indecomposables $B_w^R$, normalized self-duality is proved directly from the unique top summand of a perfect self-dual word in [[lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds]]; an isomorphism $B\cong DB$
induces $\overline B\cong(\overline B)^*$ as graded real vector spaces: for a finite homogeneous right $S$-basis, right $S$-duality reverses its generator degrees, and right reduction turns that dual basis into the real dual basis. This proves the symmetry of the reduced Betti
numbers. All constructions are compatible with the dominant Lefschetz operator
$L_0=\rho\cdot(-)$ of
[[def-reduced-soergel-module-and-dominant-lefschetz-operator]] because the
commutative ring structure is spanned by the $c_\varepsilon$ and left
multiplication by $\rho$ is self-adjoint for every invariant form.
