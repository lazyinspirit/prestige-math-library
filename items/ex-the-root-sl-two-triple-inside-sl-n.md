---
id: ex-the-root-sl-two-triple-inside-sl-n
kind: example
title: The root sl_2 triple inside sl_n
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, ex-diagonal-cartan-subalgebra-and-roots-of-sl-n, thm-root-sl-two-triple, def-coroot-of-a-lie-algebra-root, def-killing-dual-vector-of-a-root, def-killing-form-of-a-finite-dimensional-lie-algebra, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Lemma 19.16"
landmark: false
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the root-triple, Killing-dual and coroot suppliers."
---

## Example

Assume AC ([[def-axiom-of-choice]]). In $\mathfrak{sl}_n(\mathbb C)$ with the diagonal Cartan subalgebra
$\mathfrak h$ and the root $\alpha=\varepsilon_i-\varepsilon_j$ of
[[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]] ($i\ne j$), the triple
$$e_\alpha=E_{ij},\qquad f_\alpha=E_{ji},\qquad h_\alpha=E_{ii}-E_{jj}$$
satisfies $[e_\alpha,f_\alpha]=h_\alpha$,
$[h_\alpha,e_\alpha]=2e_\alpha$ and
$[h_\alpha,f_\alpha]=-2f_\alpha$, so it is a root $\mathfrak{sl}_2$ triple in
the sense of [[thm-root-sl-two-triple]]; moreover the Killing-dual vector is
$H_\alpha=\frac{1}{2n}(E_{ii}-E_{jj})$, consistently with
$h_\alpha=2H_\alpha/\alpha(H_\alpha)$
([[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]]).

## Facts & Assumptions

**Given:** AC; the algebra $\mathfrak{sl}_n(\mathbb C)$ with its diagonal Cartan subalgebra $\mathfrak h$ and root $\alpha=\varepsilon_i-\varepsilon_j$, $i\ne j$, as in [[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]], the matrix units $E_{ab}$, and the notions of Killing-dual vector and coroot from [[def-killing-dual-vector-of-a-root]] and [[def-coroot-of-a-lie-algebra-root]].

## Verification

**Proof technique:** direct.

1.1 The Killing form of $\mathfrak{sl}_n(\mathbb C)$ is $B(X,Y)=2n\operatorname{tr}(XY)$ on traceless matrices: on the basis of matrix units, $\operatorname{ad}_{E_{ab}}(E_{cd})=\delta_{bc}E_{ad}-\delta_{da}E_{cb}$, and summing the diagonal contributions of $\operatorname{ad}_{E_{ab}}\operatorname{ad}_{E_{cd}}$ over the basis gives $2n\delta_{ad}\delta_{bc}-2\delta_{ab}\delta_{cd}$, which is $2n\operatorname{tr}(E_{ab}E_{cd})$ on traceless elements because the correction term vanishes there. [given, algebra]

2.1 With this form, $B\left(\frac{1}{2n}(E_{ii}-E_{jj}),H\right)=\operatorname{tr}((E_{ii}-E_{jj})H)=x_i-x_j=\alpha(H)$ for $H=\operatorname{diag}(x_1,\dots,x_n)\in\mathfrak h$, so $H_\alpha=\frac{1}{2n}(E_{ii}-E_{jj})$. Since $H_\alpha$ is a multiple of the traceless diagonal matrix $E_{ii}-E_{jj}$, we get $\alpha(H_\alpha)=\frac{1}{2n}\alpha(E_{ii}-E_{jj})=\frac{2}{2n}=\frac1n$, and therefore $2H_\alpha/\alpha(H_\alpha)=2nH_\alpha=E_{ii}-E_{jj}$. [given, step 1.1, algebra]

3.1 The bracket relations are matrix multiplications: $[E_{ij},E_{ji}]=E_{ii}-E_{jj}$, $[E_{ii}-E_{jj},E_{ij}]=2E_{ij}$ and $[E_{ii}-E_{jj},E_{ji}]=-2E_{ji}$. Hence the displayed triple satisfies exactly the relations of [[def-special-linear-lie-algebra-sl-two]] with $h_\alpha$ in the role of $h$, which is the claim of [[thm-root-sl-two-triple]] realized concretely. [given, step 2.1, algebra] ∎
