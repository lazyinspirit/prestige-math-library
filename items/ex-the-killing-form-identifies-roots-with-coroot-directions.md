---
id: ex-the-killing-form-identifies-roots-with-coroot-directions
kind: example
title: The Killing form identifies roots with coroot directions
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-killing-dual-vector-of-a-root, def-coroot-of-a-lie-algebra-root, ex-diagonal-cartan-subalgebra-and-roots-of-sl-n, ex-the-root-sl-two-triple-inside-sl-n, prop-killing-form-orthogonality-of-root-spaces, lem-killing-length-of-a-root-is-nonzero, def-killing-form-of-a-finite-dimensional-lie-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, before Lemma 19.15"
landmark: false
proof_strategy: direct
---

## Example

In $\mathfrak{sl}_n(\mathbb C)$ with the diagonal Cartan subalgebra
$\mathfrak h$ of [[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]] and the
root $\alpha=\varepsilon_i-\varepsilon_j$, the Killing form
$B(X,Y)=2n\operatorname{tr}(XY)$ establishes the isomorphism
$$\mathfrak h\longrightarrow\mathfrak h^*,\qquad H\longmapsto B(H,\cdot),$$
and the root $\alpha$ corresponds to
$H_\alpha=\frac{1}{2n}(E_{ii}-E_{jj})$, while its coroot is
$$h_\alpha=\frac{2H_\alpha}{\alpha(H_\alpha)}=E_{ii}-E_{jj}.$$
Thus the coroot is the vector in $\mathfrak h$ whose direction is the
Killing-dual direction of the root, rescaled so that $\alpha(h_\alpha)=2$; the
scalars are $\alpha(H_\alpha)=B(H_\alpha,H_\alpha)=\frac1n$.

## Facts & Assumptions

**Given:** The algebra $\mathfrak{sl}_n(\mathbb C)$ with diagonal Cartan subalgebra and root $\alpha=\varepsilon_i-\varepsilon_j$ from [[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]], the Killing form of [[def-killing-form-of-a-finite-dimensional-lie-algebra]] with the nondegeneracy on $\mathfrak h$ of [[prop-killing-form-orthogonality-of-root-spaces]], and the dual vector and coroot of [[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]] and [[lem-killing-length-of-a-root-is-nonzero]].

## Verification

**Proof technique:** direct.

1.1 The Killing form of $\mathfrak{sl}_n(\mathbb C)$ is $B(X,Y)=2n\operatorname{tr}(XY)$, so for $H_\alpha=\frac{1}{2n}(E_{ii}-E_{jj})$ and a diagonal traceless $H$ with coordinates $x_k$ one gets $B(H_\alpha,H)=\operatorname{tr}((E_{ii}-E_{jj})H)=x_i-x_j=\alpha(H)$. Hence $H_\alpha$ is exactly the Killing-dual vector of $\alpha$ from [[def-killing-dual-vector-of-a-root]], and the map $H\mapsto B(H,\cdot)$ is an isomorphism onto $\mathfrak h^*$ because $B|_{\mathfrak h}$ is nondegenerate by [[prop-killing-form-orthogonality-of-root-spaces]]. [given, algebra]

2.1 Since $E_{ii}-E_{jj}$ is traceless diagonal, $\alpha(E_{ii}-E_{jj})=2$, and therefore $\alpha(H_\alpha)=\frac{1}{2n}\cdot2=\frac1n$, which is nonzero as required by [[lem-killing-length-of-a-root-is-nonzero]] and agrees with the direct computation $B(H_\alpha,H_\alpha)=2n\operatorname{tr}\left(\frac{(E_{ii}-E_{jj})^2}{4n^2}\right)=\frac{1}{n}$. [given, step 1.1, algebra]

3.1 Hence $h_\alpha=2H_\alpha/\alpha(H_\alpha)=2nH_\alpha=E_{ii}-E_{jj}$ by [[def-coroot-of-a-lie-algebra-root]], and the coroot triple $e_\alpha=E_{ij}$, $f_\alpha=E_{ji}$, $h_\alpha=E_{ii}-E_{jj}$ is the one computed in [[ex-the-root-sl-two-triple-inside-sl-n]]; in particular the coroot direction is the dual direction of the root under the Killing form, and the normalization is exactly $\alpha(h_\alpha)=2$. [given, step 2.1, algebra] ∎
