---
id: ex-the-rank-one-soergel-bimodule-its-intersection-form-and-hard-lefschetz
kind: example
title: "The rank-one Soergel bimodule: trace form, reduced module and hard Lefschetz"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-real-type-a-soergel-category-and-scalar-extension, def-reduced-soergel-module-and-dominant-lefschetz-operator, def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, lem-hard-lefschetz-implies-primitive-decomposition, thm-soergels-character-conjecture, def-type-a-soergel-bimodule-for-a-simple-reflection, def-bott-samelson-bimodule-of-a-word]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 3.4, formulas (3.2)-(3.6) and the trace and intersection form; Section 1.1, the rank-one case of Theorems 1.3 and 1.4"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Satz 6.14 and Bemerkung 6.15 for the rank-one case"
verification:
  precheck: pass
---

## Example

Take $n=2$, so $S_n=\{e,s\}$ and $B_s=B_s^R=S\otimes_{S^s}S(1)$ with $S=\mathbb R[x_1,x_2]$, $\deg x_i=2$ and $\alpha_s=x_1-x_2$. In the right $S$-basis $\{c_{\mathrm{id}},c_s\}$ of degrees $-1$ and $+1$ the multiplication relations are
$$c_{\mathrm{id}}c_{\mathrm{id}}=c_{\mathrm{id}},\qquad c_{\mathrm{id}}c_s=c_s,\qquad c_sc_s=c_s\alpha_s .$$
The trace is $\operatorname{Tr}(a\,c_{\mathrm{id}}+b\,c_s)=b$ for $a,b\in S$ and the intersection form has the Gram matrix
$$\begin{pmatrix}\langle c_{\mathrm{id}},c_{\mathrm{id}}\rangle&\langle c_{\mathrm{id}},c_s\rangle\\ \langle c_s,c_{\mathrm{id}}\rangle&\langle c_s,c_s\rangle\end{pmatrix}=\begin{pmatrix}0&1\\ 1&\alpha_s\end{pmatrix},$$
whose determinant is $-1$, so the form is non-degenerate, and the induced form on the reduced module is non-degenerate too. The reduced module has the real basis $(\overline{c_{\mathrm{id}}},\overline{c_s})$ with degrees $-1$ and $+1$, so $\dim(\overline{B_s})^{-1}=\dim(\overline{B_s})^{1}=1$; for $\rho=\alpha_s/2=x_1-x_2$, which is strictly dominant with $\rho(\alpha_s^\vee)=1$, one computes $\rho\cdot\overline{c_{\mathrm{id}}}=\overline{c_s}$ and $\rho\cdot\overline{c_s}=0$. Hence $\rho:(\overline{B_s})^{-1}\to(\overline{B_s})^{1}$ is an isomorphism, hard Lefschetz holds, the primitive subspace in degree $-1$ is all of $(\overline{B_s})^{-1}$, and the Lefschetz form $(a,b)=\langle a,\rho b\rangle$ is positive on it: $\langle\overline{c_{\mathrm{id}}},\overline{c_s}\rangle=1>0$, matching the Hodge-Riemann sign $(-1)^{(\ell(s)-1)/2}=+1$. Finally $\operatorname{ch}(B_s)=H_s+v=\underline H_s$, the Kazhdan-Lusztig basis element of the simple reflection, which is Soergel's conjecture at $s$, and the rational model over $\mathbb Q$ gives the same numbers.

## Verification
**Proof technique:** direct computation in the right basis of the rank-one bimodule.

**Given:** The rank-one data above: $B_s=S\otimes_{S^s}S(1)$ with right basis $c_{\mathrm{id}}=1\otimes1$ (degree $-1$) and $c_s=\tfrac12(\alpha_s\otimes1+1\otimes\alpha_s)$ (degree $+1$), the trace and intersection form of the Bott-Samelson bimodule ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], [[def-type-a-soergel-bimodule-for-a-simple-reflection]]), the reduced module and dominant operator ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]], [[def-real-type-a-soergel-category-and-scalar-extension]]), and the HR dictionary ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]).

[F1] The left action satisfies $r\cdot c_{\mathrm{id}}=c_{\mathrm{id}}\cdot s(r)+\partial_s(r)c_s$ and $r\cdot c_s=c_s\cdot r$; the products are $c_{\mathrm{id}}c_{\mathrm{id}}=c_{\mathrm{id}}$, $c_{\mathrm{id}}c_s=c_s$, $c_sc_s=c_s\alpha_s$; the trace is the coefficient of $c_s$ in the right basis, and $\langle b,b'\rangle=\operatorname{Tr}(bb')$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]).

[F2] The reduction $\overline M=M/MS_+$ kills right multiples by positive-degree elements; a non-degenerate invariant form descends to a non-degenerate form on the reduction, and the induced form on the reduced module is the one used in the HR dictionary ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]], [[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]).

[F3] For a graded space with lowest degree $-d$ hard Lefschetz requires $\rho^i:(\ )^{-i}\to(\ )^{i}$ to be isomorphisms, the primitive subspaces are $P^{-i}=\ker(\rho^{i+1})$ and the standard sign in degree $-i$ is $(-1)^{(d-i)/2}$ ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]], [[lem-hard-lefschetz-implies-primitive-decomposition]]).

1.1 **Products and the trace.** The relations are exactly those recalled in [F1] for $s$; from them, an element $a\,c_{\mathrm{id}}+b\,c_s$ multiplied on the right is again written in the basis, and its $c_s$-coefficient is $b$: $c_{\mathrm{id}}$ contributes nothing to the $c_s$-coefficient and $c_s$ contributes the coefficient of $c_s$ in the product, which for $bc_s$ is $b$ because $c_s^2=c_s\alpha_s$ stays in the $c_s$-line. Hence $\operatorname{Tr}(a\,c_{\mathrm{id}}+b\,c_s)=b$. [given, F1]

2.1 **The Gram matrix and non-degeneracy.** Using $\langle b,b'\rangle=\operatorname{Tr}(bb')$ and the products of step 1.1, $\langle c_{\mathrm{id}},c_{\mathrm{id}}\rangle=\operatorname{Tr}(c_{\mathrm{id}})=0$, $\langle c_{\mathrm{id}},c_s\rangle=\operatorname{Tr}(c_s)=1$ and $\langle c_s,c_s\rangle=\operatorname{Tr}(c_s\alpha_s)=\alpha_s$, so the Gram matrix in the basis $(c_{\mathrm{id}},c_s)$ is $\begin{pmatrix}0&1\\1&\alpha_s\end{pmatrix}$; its determinant is $-1$, hence the form is non-degenerate, and by [F2] so is the induced form on the reduced module. [step 1.1, F1, F2]

2.2 **The reduced action of $\rho$.** Let $\rho=\alpha_s/2$. Since $\rho$ is $s$-anti-invariant, $s(\rho)=-\rho$ and $\partial_s(\rho)=\rho$, so by [F1] we get $\rho\cdot c_{\mathrm{id}}=c_{\mathrm{id}}\cdot(-\rho)+c_s=c_s-c_{\mathrm{id}}\rho$; reducing kills the right multiple $c_{\mathrm{id}}\rho$ by [F2], so $\rho\cdot\overline{c_{\mathrm{id}}}=\overline{c_s}$. Similarly $\rho\cdot c_s=c_s\rho$ by [F1] and $c_s\rho$ is a right multiple by a positive-degree element, so $\rho\cdot\overline{c_s}=0$. Also $\rho(\alpha_s^\vee)=1>0$, so $\rho$ is strictly dominant. [step 1.1, F1, F2]

3.1 **Hard Lefschetz, primitivity and the sign.** The reduced module has real basis $\overline{c_{\mathrm{id}}}$ in degree $-1$ and $\overline{c_s}$ in degree $+1$, hence both graded pieces are one-dimensional; by step 2.2 the degree-one Lefschetz map $\rho:(\overline{B_s})^{-1}\to(\overline{B_s})^{1}$ sends a basis vector to a basis vector and is an isomorphism, which is hard Lefschetz by [F3]. The primitive subspace is $P^{-1}=\ker(\rho^{2}|_{(\overline{B_s})^{-1}})=(\overline{B_s})^{-1}$, since $\rho^2$ maps the one-dimensional space to the higher space in two steps and $\rho^2$ lands in degree $+3$, which is zero; the Lefschetz form on it is $\langle\overline{c_{\mathrm{id}}},\rho\overline{c_{\mathrm{id}}}\rangle=\langle\overline{c_{\mathrm{id}}},\overline{c_s}\rangle=1>0$, the reduction of the Gram entry $1$, and the standard sign in degree $-1$ is $(-1)^{(1-1)/2}=+1$, so HR holds with the standard sign and the bottom form is positive. [step 2.1, step 2.2, F3]

4.1 **The character.** By Soergel's character theorem $\operatorname{ch}(B_s)=\underline H_s$ for the simple reflection, and in the normalized Hecke algebra of the page $\underline H_s=H_s+v$; the two summands correspond to the two $\Delta$-layers of $B_s$ (the top graph layer and the shifted unit), whose degrees $-1$ and $+1$ reproduce the two basis degrees computed above, and the rational model over $\mathbb Q$ has the same Gram matrix and the same Lefschetz maps after scalar extension. [step 3.1] ∎

## Remarks

- This is the base case of the rank-one computations used both in the counterexample on the non-dominant element and in the base of the simultaneous induction; the two-dimensional reduced module has a one-dimensional primitive space in degree $-1$, and the sign $+1$ is the standard sign.
- The trace normalization is the one of the Bott-Samelson intersection form; no freedom remains after the normalizations of the page, since the form is unique up to scalar and the trace fixes the scalar by $\operatorname{Tr}(c_s)=1$.
