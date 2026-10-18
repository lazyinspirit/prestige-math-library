---
id: thm-affine-clifford-hopf-maps-are-highly-connected
kind: theorem
title: Affine Clifford–Hopf maps are highly connected
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- lem-iterated-suspension-and-winding-control-for-clifford-families
- lem-real-clifford-block-rotation-index-lower-bound
- lem-relative-path-shortening-connectivity
- prop-relative-cw-inclusions-are-cofibrations
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 5
---

## Statement

Assume AC. Let $k=4m-1$, $d\ge1$, and let $\rho$ be a positive orthogonal $C_k$ representation on $\mathbb R^p$. Let $s_k$ be the irreducible real dimension. If $p\ge p_0(d,k)$ and $s_kd\le\eta\le p/4$, then the inclusion
$$\operatorname{Hopf}_\rho(S^k,\mathrm{SO}(p))_\eta\hookrightarrow\operatorname{Map}_*(S^k,\mathrm{SO}(p))_\eta$$
is $d$-connected for finite CW pairs. Here the right-hand side is the union of mapping components of stable winding $\eta$. The left-hand side consists of $I$ on an invariant $L_0$ and $x_0I+\sum_{j=1}^kx_jJ_j$ on an invariant $L_1$, where $\mathbb R^p=L_0\oplus L_1$ and $\dim_{\mathbb C}L_1=\eta$ relative to $i=J_1\cdots J_{k-2}$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] The preceding suspensions are $d$-connected in the stated size range, and the last path winding is $w=p/4-\eta$. ([[lem-iterated-suspension-and-winding-control-for-clifford-families]]).

[F2] For $l=k-1$, $p-4|w|\ge4ds_l$ makes all nonminimal indices greater than $d$, giving relative path shortening. ([[lem-real-clifford-block-rotation-index-lower-bound]], [[lem-relative-path-shortening-connectivity]]).

[F3] Finite CW inclusions have the relative homotopy extension property. ([[prop-relative-cw-inclusions-are-cofibrations]]).

## Proof

**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

1.1 The terminal winding is $w=p/4-\eta\ge0$, and $s_l=s_k$, so $p-4|w|=4\eta\ge4ds_l$. Apply [F2] to shorten the variable second path, fixing the prescribed parameter boundary. A minimal second path is determined by an invariant splitting $\mathbb R^p=L_0\oplus L_1$, with midpoint $+J_k$ on $L_0$ and $-J_k$ on $L_1$. Its determinant winding gives $\dim_{\mathbb C}L_1=\eta$. Combining with [F1] yields a $d$-connected map from the splitting space into the sphere mapping space. [A1, F1, F2, algebra]


2.1 On $L_0$ the terminal loop is a path followed by its reverse. Contract it by replacing $\gamma(t)$ by $\gamma(st)$, $1\ge s\ge0$, before taking that concatenation. This is a based contraction continuous in the splitting projection. On $L_1$ the loop is the full positive Clifford circle. After the earlier suspensions the latter becomes the positive linear Hopf map, by expanding the cosine and sine suspension coordinates. [F1, step 1.1, construct]


3.1 There is an additional correction on $L_0$: iterated suspension of its constant loop is a folded hemisphere map, not literally a constant sphere map. Its image lies in the closed hemisphere of the great sphere spanned by $I,J_1,\ldots,J_l$, with nonnegative $J_l$ coefficient, a product of nonnegative suspension sine factors. Write a point as $(y,a)$ with $a\ge0$ and $|y|^2+a^2=1$. Stereographic projection from $-J_l$ gives $z=y/(1+a)$ in the closed unit ball, with $I$ at $e_0$. Set $z_s=(1-s)z+se_0$ and $y_s=\frac{2z_s}{1+|z_s|^2},\qquad a_s=\frac{1-|z_s|^2}{1+|z_s|^2}.$ This contracts the hemisphere to $I$ while fixing $I$. Every sphere point remains an orthogonal Clifford matrix. Apply this on $L_0$ and keep the Hopf map on $L_1$. The universal scalar formulas and invariant projections make the homotopy continuous in the splitting. [step 2.1, construct, algebra]


4.1 The invariant splitting space is a compact Grassmannian. Its projection $P_1$ is recovered from the affine map by $P_1=(I-\phi(-e_0))/2$. Thus splitting-to-affine-map is a homeomorphism onto the affine subspace. Steps 2.1–3.1 show that the $d$-connected map of step 1.1 is homotopic to that homeomorphism followed by the actual affine inclusion. Homotopy invariance of relative homotopy groups therefore makes the inclusion $d$-connected. Equivalently, extend the resulting relative disk homotopies over cells, using [F3]. This last argument keeps arbitrary prescribed affine boundary maps fixed; it does not infer connectivity merely from a set-theoretic image. [F3, step 1.1, step 2.1, step 3.1, construct] ∎
