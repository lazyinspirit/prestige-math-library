---
id: def-standard-intertwining-operators-for-finite-principal-series
kind: definition
title: "Standard intertwining operators for the finite principal series"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - lem-principal-series-endomorphisms-as-the-chi-idempotent-corner
  - def-principal-series-module-for-finite-gl-n
  - def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
  - prop-cardinality-of-a-finite-bruhat-cell
  - def-weyl-group-and-length-for-finite-gl-n
  - def-diagonal-torus-characters-and-weyl-action
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - The operators $B_n:ge\\,U^F\\otimes x\\mapsto ge\\,U^Fne\\,U^F\\otimes\\gamma_n(x)$ and Lemma 11.8, printed p. 48"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Proposition 2.3 and Corollary 2.4 (the normalization $T_w$ of the Hecke generators), PDF p. 4"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - The standard basis elements $\\bar T_w=|B|^{-1}\\sum_{x\\in B\\dot wB}x$, printed p. 44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with upper triangular Borel $B$, diagonal torus $T$ and unipotent radical $U$,
let $W=S_n$ be the Weyl group with inversion length $\ell$ and canonical
permutation matrix $\dot w$ for $w\in W$
([[def-weyl-group-and-length-for-finite-gl-n]]), let $\chi\in\widehat T$ be a
character with Weyl stabiliser $W_\chi=\{w\in W:w\cdot\chi=\chi\}$
([[def-diagonal-torus-characters-and-weyl-action]]), and let
$$e_\chi=\frac{1}{|B|}\sum_{b\in B}\widetilde\chi(b)^{-1}b$$
be the idempotent of $\widetilde\chi$ in the corner
$e_\chi\mathbb C[G]e_\chi$, whose elements
$e_\chi\dot we_\chi$, $w\in W_\chi$, form a $\mathbb C$-basis, with
$\mathbb C[G]e_\chi\cong I(\chi)$ as left $\mathbb C[G]$-modules
([[lem-principal-series-endomorphisms-as-the-chi-idempotent-corner]],
[[def-principal-series-module-for-finite-gl-n]]).

For $w\in W_\chi$ put
$$\Theta_w\;:=\;q^{\ell(w)}\,e_\chi\dot w\,e_\chi\;\in\;e_\chi\mathbb C[G]e_\chi,$$
the normalization by $q^{\ell(w)}$ being the one of the Bruhat double-coset
basis of the finite Hecke algebra
([[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]]), where
$|B\dot wB|/|B|=q^{\ell(w)}$
([[prop-cardinality-of-a-finite-bruhat-cell]]). The **standard intertwining
operator** attached to $w\in W_\chi$ is the endomorphism
$$B_w\;:=\;R_{\Theta_{w^{-1}}}\;\in\;\operatorname{End}_{\mathbb C[G]}\bigl(\mathbb C[G]e_\chi\bigr)\;\cong\;\operatorname{End}_G\bigl(I(\chi)\bigr),$$
where $R_a(xe_\chi):=xe_\chi a$ is right multiplication by $a$, the operators
being transported to $\operatorname{End}_G(I(\chi))$ along the isomorphism of
[[lem-principal-series-endomorphisms-as-the-chi-idempotent-corner]]. The index
$w^{-1}$ is forced by the reversal of composition in the identification of the
endomorphism algebra with the opposite of the corner: $R_aR_b=R_{ba}$. In
particular $\Theta_1=q^0e_\chi=e_\chi$ and $B_1=\mathrm{id}$, and since
$\Theta_w$, $w\in W_\chi$, is a $\mathbb C$-basis of the corner, the operators
$B_w$, $w\in W_\chi$, form a $\mathbb C$-basis of
$\operatorname{End}_G(I(\chi))$.

**Representative independence.** Let $w\in W_\chi$ and $g=b_1\dot wb_2$ with
$b_1,b_2\in B$. Because $e_\chi b=\widetilde\chi(b)e_\chi$ for $b\in B$ one has
$$e_\chi ge_\chi=\widetilde\chi(b_1)\widetilde\chi(b_2)\,e_\chi\dot we_\chi,$$
so the compensated element
$\widetilde\chi(b_1)^{-1}\widetilde\chi(b_2)^{-1}e_\chi ge_\chi$ equals
$e_\chi\dot we_\chi$. If $g=b_1'\dot wb_2'$ is a second decomposition, the two
compensated elements agree: comparing the decompositions gives
$b_1^{-1}b_1'=\dot w\,b_2b_2'^{-1}\dot w^{-1}\in B$, and
$\widetilde\chi(b_1^{-1}b_1')=\widetilde\chi(b_2b_2'^{-1})$, so
$\widetilde\chi(b_1)\widetilde\chi(b_2)=\widetilde\chi(b_1')\widetilde\chi(b_2')$.
For a monomial representative $n_w=t\dot w$ with $t\in T$, the torus
factor is $\widetilde\chi(t)=\chi(t)$, and
$$\chi(t)^{-1}e_\chi n_we_\chi=e_\chi\dot we_\chi,$$
the special case $b_1=t$, $b_2=1$ displayed in the normalization. Thus the
compensated corner element, and hence $B_w$, is independent of the choice of
double-coset representatives; the uncompensated element $e_\chi ge_\chi$
generally is not. This is the one-dimensional case of the simultaneous
representative and $\gamma_n$ convention of Dudas-Michel, Section 11.3.

**Remarks on indexing.** For $\chi=1$ this is the usual spherical basis with
inverse index in the endomorphism model. Raw basis elements for characters that
have not been sorted out by the Weyl stabiliser use the ambient length
$\ell(w)$ of the permutation matrix; the Hecke-algebra basis after Weyl sorting
is specified later in this page. All constructions use finite sums, the explicit
permutation matrices $\dot w$ and the fixed idempotent $e_\chi$, so no choice
principle is used.
