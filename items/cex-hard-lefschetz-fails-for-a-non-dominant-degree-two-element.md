---
id: cex-hard-lefschetz-fails-for-a-non-dominant-degree-two-element
kind: counterexample
title: "Hard Lefschetz fails for a non-dominant degree-two element: the rank-one case"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-reduced-soergel-module-and-dominant-lefschetz-operator, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, def-real-type-a-soergel-category-and-scalar-extension, def-type-a-soergel-bimodule-for-a-simple-reflection, def-bilinear-symmetric-skew-and-alternating-forms, def-invariant-intersection-form-on-a-bott-samelson-bimodule]
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
      locator: "Section 3.1, display (3.1) '(w rho)(alpha_s^vee) > 0 iff sw > w' and the requirement that rho be strictly positive on every simple coroot; Section 1.1, Theorem 1.3"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Section 2, the definition of a reflection faithful representation and the strict positivity requirement on rho"
verification:
  precheck: pass
---

## Statement refuted

In the rank-one case $n=2$ the element $\rho':=x_1+x_2$ is a degree-two element
of $S$ with $\rho'(\alpha_s^\vee)=0$, so it is not strictly dominant. Its action
on the reduced rank-one Soergel module is zero: $\rho'=e_1=x_1+x_2$ is
$s$-invariant and of positive degree, and $x_1+x_2=1\cdot e_1$ acts on the right
basis element $\overline{c_{\mathrm{id}}}$ as the right action by an element of
$S_+$, hence $\rho'\cdot\overline{c_{\mathrm{id}}}=0$; a fortiori it cannot map
$(\overline{B_s})^{-1}=\mathbb R\,\overline{c_{\mathrm{id}}}$ isomorphically to
$(\overline{B_s})^{1}$. Therefore for $\rho'$ the hard Lefschetz property fails
(the map on the $-1$ degree is the zero map), even though $\rho'$ is a symmetric
degree-two endomorphism of the reduced module; the same failure occurs for every
degree-two element with $\rho'(\alpha_s^\vee)=0$. Consequently the hard Lefschetz and Hodge-Riemann conclusions do not hold
for arbitrary degree-two elements when strict dominance is omitted. This does
not assert that every Lefschetz element is strictly dominant.

## Facts & Assumptions

**Given:** The rank-one setting $n=2$, $S=\mathbb R[x_1,x_2]$ with $\deg x_i=2$, the simple reflection $s=s_1$ with coordinate root $\alpha=\alpha_s=x_1-x_2$, the generator $B_s=S\otimes_{S^s}S(1)$ with right basis $c_{\mathrm{id}}=1\otimes1$ of degree $-1$ and $c_s=\tfrac12(\alpha\otimes1+1\otimes\alpha)$ of degree $+1$, its reduced module $\overline{B_s}=B_s/B_sS_+$ with the induced basis $\overline{c_{\mathrm{id}}},\overline{c_s}$, and the degree-two element $\rho'=x_1+x_2$ ([[def-type-a-soergel-bimodule-for-a-simple-reflection]], [[def-real-type-a-soergel-category-and-scalar-extension]], [[def-reduced-soergel-module-and-dominant-lefschetz-operator]]).

[F1] The left and right actions on $B_s$ satisfy $r\cdot c_{\mathrm{id}}=c_{\mathrm{id}}\cdot sr+\partial_s(r)c_s$ and $r\cdot c_s=c_s\cdot r$, and $c_sc_s=c_s\alpha$, $c_{\mathrm{id}}$ is the unit of the commutative ring $B_s(-1)$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], [[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

[F2] The reduction functor kills right multiplication by $S_+$: $\overline{M}=M/MS_+$, and $m r+MS_+=MS_+$ for $r\in S_+$ ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]]).

[F3] Hard Lefschetz for a degree-two symmetric operator $L$ on a graded space with lowest degree $-d$ requires $L:(\ )^{-1}\to(\ )^{1}$ to be an isomorphism in the case $d=1$; definiteness and symmetry conventions as in [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]] and [[def-bilinear-symmetric-skew-and-alternating-forms]].

## Counterexample

**Proof technique:** direct computation in the rank-one reduced module.

1.1 **Non-dominance.** The reflection $s$ exchanges $x_1$ and $x_2$, so $\rho'=x_1+x_2$ is $s$-invariant and $\rho'(\alpha^\vee)=(x_1+x_2,x_1-x_2)=1-1=0$ in the standard form of the coordinate normalization; in particular $\rho'$ is not strictly dominant. [given, F1]

2.1 **The left action of $\rho'$ equals its right action.** Since $\rho'\in S^{s}$, the balanced tensor relation gives $\rho'\otimes1=1\otimes\rho'$ in $B_s$; hence for every $b\in B_s$ the left multiplication $\rho'\cdot b$ equals the right multiplication $b\cdot\rho'$: indeed both actions are $S$-linear and the identity holds on the two basis elements $c_{\mathrm{id}}$ (where $\rho'\cdot c_{\mathrm{id}}=\rho'\otimes1=1\otimes\rho'=c_{\mathrm{id}}\cdot\rho'$) and $c_s$ (where both equal $c_s\rho'$ by [F1]). [step 1.1, given, F1]

3.1 **The operator vanishes on the reduced module.** By step 2.1, $\rho'\cdot c_{\mathrm{id}}=c_{\mathrm{id}}\cdot\rho'=1\otimes\rho'$ lies in $B_sS_+$, since it is the right product of $c_{\mathrm{id}}=1\otimes1$ with $\rho'\in S_+$; by [F2] its class in $\overline{B_s}$ is zero, so $\rho'\cdot\overline{c_{\mathrm{id}}}=0$. Similarly $\rho'\cdot c_s=c_s\cdot\rho'=c_s\rho'$ lies in $B_sS_+$ and reduces to zero. Since $\overline{c_{\mathrm{id}}}$ and $\overline{c_s}$ span $\overline{B_s}$, the induced operator $L=\rho'\cdot(-)$ is the zero endomorphism of $\overline{B_s}$. [step 2.1, F1, F2]

4.1 **Failure of hard Lefschetz.** The reduced module has $\dim(\overline{B_s})^{-1}=\dim(\overline{B_s})^{1}=1$ with bases $\overline{c_{\mathrm{id}}}$ and $\overline{c_s}$. The degree-one Lefschetz map $L:(\overline{B_s})^{-1}\to(\overline{B_s})^{1}$ is zero by step 3.1, hence not an isomorphism, and hard Lefschetz fails for $L$ in the sense of [F3]. The bottom Lefschetz form $\langle-,L(-)\rangle$ is likewise identically zero, so the Hodge-Riemann relations with any nonzero sign also fail. [step 3.1, F3]

5.1 **The general degree-two case.** Let $\rho''=ax_1+bx_2$ satisfy $\rho''(\alpha^\vee)=a-b=0$; then $a=b$ and $\rho''=a\rho'$ is a scalar multiple of $\rho'$. If $a=0$ the operator is trivially zero; if $a\ne0$ the same computation as in steps 2.1-4.1 applies because invariance and positivity of degree are unaffected by the scalar. Hence every degree-two element with vanishing evaluation on $\alpha_s^\vee$ yields the zero operator on the reduced rank-one module and fails hard Lefschetz. This proves the claimed failure and shows that allowing arbitrary degree-two elements invalidates the conclusion; no choice principle is used. [step 4.1] ∎

## Remark

The counterexample isolates the hypothesis at the very bottom of the induction: the strict dominance of $\rho$ is used on this page exactly through the positivity of the scaling factors $(w\rho)(\alpha_s^\vee)$ for reduced prefixes, and at the simple reflection itself the vanishing of the coroot evaluation makes the operator vanish on the whole reduced module. Since $\rho'$ is still symmetric of degree two, the failure is not an artifact of a badly normalized form.
