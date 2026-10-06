---
id: ex-an-sl3-weight-with-cohomology-in-degree-one
kind: example
title: An sl3 weight with cohomology in degree one
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps:
- thm-borel-weil-bott
- cor-borel-weil-bott-euler-character-is-the-weyl-character
- thm-weyl-dimension-formula
- prop-highest-weight-of-the-dual-representation
- def-length-and-longest-element-of-a-finite-weyl-group
- thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
- prop-weyl-vector-is-the-sum-of-fundamental-weights
- def-root-reflections-and-the-weyl-group-action
- def-classical-complex-matrix-lie-algebras
- prop-root-systems-of-the-classical-complex-lie-algebras
- def-fundamental-weights-for-a-chosen-simple-root-system
- def-weyl-vector-rho
- def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
  generation:
    role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: "https://www.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Printed p. 3, Lemma 4 and Theorem 5 with a single nonvanishing degree"
    - title: "Xiong Rui, Borel-Weil and Borel-Weil-Bott, Lecture 1"
      url: "https://cubicbear.github.io/doc/BorelWeil.pdf"
      locator: "Sections 1.19-1.20, printed pp. 5-6: the degree-one block and the Euler-character check"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$G=SL_3(\mathbb C)$ with standard Borel, simple roots $\alpha_1,\alpha_2$,
fundamental weights $\omega_1,\omega_2$ and $\rho=\omega_1+\omega_2$, and put
$\lambda=s_1\cdot\rho=\rho-2\alpha_1=-3\omega_1+3\omega_2$. Then
$\lambda+\rho=s_1(2\rho)$ is regular with Weyl element $w=s_1$ and
$s_1\cdot\lambda=\rho$, so [[thm-borel-weil-bott]] gives
$H^1(X,\mathcal L_\lambda)\cong L(\rho)^*$ and
$H^i(X,\mathcal L_\lambda)=0$ for $i\neq1$. Since $L(\rho)$ is
eight-dimensional by the Weyl dimension formula, $H^1$ is eight-dimensional
and the Euler-characteristic formula reads
$\mathrm{ch}\,H^0-\mathrm{ch}\,H^1=-\mathrm{ch}\,L(\rho)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_3(\mathbb C)$ with standard Cartan and Borel, simple roots $\alpha_1,\alpha_2$, fundamental weights $\omega_1,\omega_2$, $\rho=\omega_1+\omega_2$, the simple reflection $s_1$, the longest element $w_0$ of the Weyl group, and $\lambda=s_1\cdot\rho=\rho-2\alpha_1=-3\omega_1+3\omega_2$.

[F1] In $A_2$ the simple roots are $\alpha_1,\alpha_2$, the positive roots are $\alpha_1,\alpha_2,\alpha_1+\alpha_2$, and $\rho=\omega_1+\omega_2$ satisfies $\langle\rho,\alpha_i^\vee\rangle=1$; the simple reflection acts by $s_1(\nu)=\nu-\langle\nu,\alpha_1^\vee\rangle\alpha_1$, and the dot action is $w\cdot\nu=w(\nu+\rho)-\rho$ with $\ell(s_1)=1$ ([[def-classical-complex-matrix-lie-algebras]], [[prop-root-systems-of-the-classical-complex-lie-algebras]], [[def-fundamental-weights-for-a-chosen-simple-root-system]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]], [[def-weyl-vector-rho]], [[def-root-reflections-and-the-weyl-group-action]]).

[F2] Borel-Weil-Bott: if $\nu+\rho$ is regular with Weyl element $v$, then $H^{\ell(v)}(X,\mathcal L_\nu)\cong L(v\cdot\nu)^*$ and all other cohomology vanishes ([[thm-borel-weil-bott]]).

[F3] The Weyl dimension formula gives $\dim L(\rho)=\prod_{\beta\in\Phi^+}(2\rho,\beta)/(\rho,\beta)=2^{|\Phi^+|}=2^3=8$, since $(2\rho,\beta)=2(\rho,\beta)$ and $(\rho,\beta)>0$ for the three positive roots; in particular $H^1\cong L(\rho)^*$ is eight-dimensional ([[thm-weyl-dimension-formula]], [[prop-root-systems-of-the-classical-complex-lie-algebras]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]]).

[F4] Euler-characteristic form of Borel-Weil-Bott: $\sum_i(-1)^i\mathrm{ch}\,H^i(X,\mathcal L_\nu)=(-1)^{\ell(v)}\mathrm{ch}\,L(v\cdot\nu)^*$ when $\nu+\rho$ is regular with Weyl element $v$ ([[cor-borel-weil-bott-euler-character-is-the-weyl-character]]).

[F5] For a dominant integral weight $\nu$ the dual $L(\nu)^*$ is irreducible of highest weight $-w_0\nu$; since $w_0$ maps $\Phi^+$ onto $\Phi^-$, it sends $2\rho=\sum_{\alpha>0}\alpha$ to $-2\rho$, so $w_0\rho=-\rho$ and $-w_0\rho=\rho$, hence $L(\rho)^*$ is irreducible of highest weight $\rho$ and therefore $L(\rho)^*\cong L(\rho)$ by the classification of finite-dimensional irreducibles, with $\mathrm{ch}\,L(\rho)^*=\mathrm{ch}\,L(\rho)$ ([[prop-highest-weight-of-the-dual-representation]], [[def-length-and-longest-element-of-a-finite-weyl-group]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

## Verification

**Proof technique:** direct.

1.1 Compute in $A_2$: $\lambda=s_1\cdot\rho=s_1(2\rho)-\rho=2\rho-2\alpha_1-\rho=\rho-2\alpha_1$ by [F1] and $\langle\rho,\alpha_1^\vee\rangle=1$. Since $\rho=\omega_1+\omega_2$ and $\alpha_1=2\omega_1-\omega_2$ (the $A_2$ Cartan entry is $\langle\alpha_1,\alpha_2^\vee\rangle=-1$, read off from the $\varepsilon$-coordinates of [F1], so $\alpha_1=\langle\alpha_1,\alpha_1^\vee\rangle\omega_1+\langle\alpha_1,\alpha_2^\vee\rangle\omega_2$), this is $\omega_1+\omega_2-4\omega_1+2\omega_2=-3\omega_1+3\omega_2$. Moreover $\lambda+\rho=s_1(2\rho)$, which is regular because $2\rho$ is regular and $W$ preserves regularity, and $s_1\cdot\lambda=s_1(\lambda+\rho)-\rho=2\rho-\rho=\rho$, so the Weyl element is $w=s_1$ with $\ell(w)=1$. [F1, given, algebra]

2.1 By [F2] applied to $\lambda$ and step 1.1, $H^1(X,\mathcal L_\lambda)\cong L(\rho)^*$ and $H^i(X,\mathcal L_\lambda)=0$ for $i\ne1$; by [F3] this group is eight-dimensional. [F2, F3, step 1.1]

3.1 The Euler-characteristic formula of [F4] at this weight reads $\mathrm{ch}\,H^0-\mathrm{ch}\,H^1=(-1)^1\mathrm{ch}\,L(\rho)^*=-\mathrm{ch}\,L(\rho)^*$, and by [F5] $L(\rho)^*\cong L(\rho)$, so this equals $-\mathrm{ch}\,L(\rho)$; since $H^0=0$ by step 2.1 the formula is precisely the alternating class of the group $H^1\cong L(\rho)^*$. [F4, F5, step 2.1, algebra]

4.1 Steps 1.1-3.1 give a weight whose cohomology is concentrated in degree one with $H^1\cong L(\rho)^*\cong L(\rho)$ of dimension eight and whose Euler characteristic is $-\mathrm{ch}\,L(\rho)$, as asserted. [step 1.1, step 2.1, step 3.1] ∎ 
