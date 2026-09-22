---
id: ex-square-integrable-separable-product-kernel
kind: example
title: A square-integrable separable product kernel
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-l-two-kernels-give-hilbert-schmidt-operators, def-hilbert-schmidt-operator, def-finite-sigma-finite-and-semifinite-measures, def-completed-product-measure, thm-completion-of-a-measure-space, thm-tonelli-and-fubini-for-completed-product-measures, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-nonnegative-lebesgue-integral, def-l-p-space-as-a-quotient-by-null-functions, def-linear-basis, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-operator-norm, def-bounded-linear-operator, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-completion-of-a-measure-space, def-integral-of-a-nonnegative-simple-function]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Roe, Lectures on Analysis — Lecture 13, the rank-one model preceding Proposition 13.5, printed p. 67"
      url: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/1/4020/files/2017/12/analysis-slides-278829v.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, examples of finite-rank Hilbert–Schmidt operators, printed pp. 93–95"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(X,\mathcal A,\mu)$
and $(Y,\mathcal B,\nu)$ be sigma-finite measure spaces
([[def-finite-sigma-finite-and-semifinite-measures]]), let
$\overline{\mu\times\nu}$ be the completed product measure
([[def-completed-product-measure]]), let $a\in L^2(\mu;\mathbb C)$ and
$b\in L^2(\nu;\mathbb C)$, and let $k$ be the class in
$L^2(\overline{\mu\times\nu};\mathbb C)$ of the product function

$$k(x,y):=a(x)\overline{b(y)} .$$

Then $k$ is square integrable with
$\|k\|_{L^2(\overline{\mu\times\nu})}=\|a\|_{L^2(\mu)}\|b\|_{L^2(\nu)}$, the
kernel operator of [[thm-l-two-kernels-give-hilbert-schmidt-operators]] is the
rank-one form

$$(T_kf)(x)=a(x)\,\langle f,b\rangle_{L^2(\nu)}\qquad\text{for }\mu\text{-almost every }x\in X\text{ and every }f\in L^2(\nu;\mathbb C),$$

its range is contained in the subspace of dimension at most one $\mathbb C\cdot a$
(so the range admits an ordered basis of length at most one, and $T_k$ is
finite rank, [[def-linear-basis]]), and

$$\|T_k\|=\|T_k\|_{HS}=\|a\|_{L^2(\mu)}\|b\|_{L^2(\nu)}$$

with the operator norm of [[def-operator-norm]] and the Hilbert–Schmidt norm of
[[def-hilbert-schmidt-operator]]. If $a=0$ or $b=0$ then $k=0$ and $T_k$ is the
zero operator, so both displayed formulas still hold.

## Facts & Assumptions

**Given:** The Axiom of Choice, sigma-finite $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, the completed product $\overline{\mu\times\nu}$, complex $L^2$ classes $a$ of $\mu$ and $b$ of $\nu$, and $k=(x,y)\mapsto a(x)\overline{b(y)}$.

[F1] Completed-product Tonelli applies to nonnegative $(\mathcal A\otimes\mathcal B)$-measurable functions: the section integrals are measurable and $\int g\,d\overline{\mu\times\nu}=\int_X\bigl(\int_Yg_x\,d\overline\nu\bigr)d\mu$ ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-completed-product-measure]]).

[F2] Completion extends the measure ([[thm-completion-of-a-measure-space]]). Each completed measurable set is $C\cup N$ with $C$ originally measurable and $N$ contained in an original null set; its measure is that of $C$ ([[def-completion-of-a-measure-space]]). For an original measurable $h\ge0$, original simple minorants are also completed simple minorants. Conversely, write a completed nonnegative simple minorant $s\le h$ on its disjoint nonzero level sets $E_j=C_j\cup N_j$. Since $C_j\subseteq E_j$, the $C_j$ are disjoint and $t=\sum_jc_j\mathbf1_{C_j}$ is an original simple minorant with $0\le t\le s\le h$ and exactly the same integral as $s$. The simple-integral formula and taking suprema therefore give $\int h\,d\nu=\int h\,d\overline\nu$ ([[def-integral-of-a-nonnegative-simple-function]], [[def-nonnegative-lebesgue-integral]]).

[F3] The complex $L^2$ pairing is $\langle f,g\rangle=\int f\overline g$, linear in the first variable and conjugate-linear in the second, with $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$ and $\|g\|_2^2=\langle g,g\rangle$ ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] The kernel theorem supplies the well-defined kernel operator and its exact norm: $T_k$ is bounded and Hilbert–Schmidt with $\|T_k\|_{HS}=\|k\|_{L^2(\overline{\mu\times\nu})}$ ([[thm-l-two-kernels-give-hilbert-schmidt-operators]], [[def-hilbert-schmidt-operator]], [[def-bounded-linear-operator]]).

[F5] An orthonormal family is linearly independent, and the one-term list $(a)$ is an ordered basis of $\mathbb C\cdot a$ when $a\ne0$, while the empty list is an ordered basis of $\{0\}$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-linear-basis]]).

[F6] Choice implies Countable Choice ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

## Verification

**Proof technique:** direct.

**Given:** The objects and hypotheses above, and the classes $A:=\mathbb C\cdot a\subseteq L^2(\mu;\mathbb C)$ and the pairing $\beta(f):=\langle f,b\rangle$.

1.1 Choose finite-valued measurable representatives of $a,b$. The function $(x,y)\mapsto a(x)\overline{b(y)}$ is $(\mathcal A\otimes\mathcal B)$-measurable, and [F1] applied to its squared modulus gives $\|k\|_{L^2(\overline{\mu\times\nu})}^2=\int_X\bigl(\int_Y|a(x)|^2|b(y)|^2\,d\overline\nu(y)\bigr)d\mu(x)=\int_X|a(x)|^2\bigl(\int_Y|b(y)|^2\,d\overline\nu(y)\bigr)d\mu(x)$; [F2] rewrites the inner integral as $\|b\|_{L^2(\nu)}^2$, so the value is $\|a\|_{L^2(\mu)}^2\|b\|_{L^2(\nu)}^2$, finite because both factors are $L^2$ classes. The product is measurable because its factors are measurable coordinate pullbacks and scalar multiplication and conjugation are continuous. Replacing representatives by $a\prime,b\prime$ changes the product by $(a-a\prime)\overline b+a\prime\overline{(b-b\prime)}$; applying the same squared-norm factorization to the two terms gives zero, so the product class is well defined. [F1, F2, F6]

1.2 For $f\in L^2(\nu;\mathbb C)$ the integrand $y\mapsto\overline{b(y)}f(y)$ is $\nu$-integrable with $\int_Y|\overline bf|\,d\nu\le\|b\|_{L^2(\nu)}\|f\|_{L^2(\nu)}$ by [F3] applied to the real nonnegative functions $|b|,|f|$, which are complex $L^2$ functions with the same norms. Hence the product representative has section integral $a(x)\int_Y\overline{b(y)}f(y)\,d\nu(y)=a(x)\langle f,b\rangle$ wherever its sections represent the completed-product class, and [F4] identifies this function with the $L^2(\mu)$ class $T_kf$. Thus $(T_kf)(x)=a(x)\beta(f)$ for $\mu$-almost every $x$. [F3, F4]

2.1 Hence the range of $T_k$ is contained in $\mathbb C\cdot a$. If $a\ne0$ and $b\ne0$, then $\beta(b/\|b\|_{L^2(\nu)}^2)=1$, so the range equals $\mathbb C\cdot a$ and $(a)$ is an ordered basis. If $a=0$ or $b=0$, then [step 1.2] makes $T_k$ the zero operator, so its range has the empty ordered basis. Thus the range always has dimension at most one. [step 1.2, F3, F5]

2.2 **Operator norm.** By [step 1.2], $\|T_kf\|_{L^2(\mu)}=\|a\|_{L^2(\mu)}|\langle f,b\rangle|\le\|a\|_{L^2(\mu)}\|b\|_{L^2(\nu)}\|f\|_{L^2(\nu)}$; if $b\ne0$ then $f_0:=b/\|b\|_{L^2(\nu)}$ has norm one and $T_kf_0=\|b\|_{L^2(\nu)}a$, so $\|T_k\|=\|a\|_{L^2(\mu)}\|b\|_{L^2(\nu)}$, while if $b=0$ both sides are zero; the computation also covers $a=0$. [step 1.2, F3]

3.1 **Hilbert–Schmidt norm.** Since $k$ lies in $L^2(\overline{\mu\times\nu};\mathbb C)$ by [step 1.1], [F4] gives $\|T_k\|_{HS}=\|k\|_{L^2(\overline{\mu\times\nu})}$, which is $\|a\|_{L^2(\mu)}\|b\|_{L^2(\nu)}$ by [step 1.1]; this agrees with the operator norm of [step 2.2]. [step 1.1, step 2.2, F4]

4.1 The displayed square-integrability, the rank-at-most-one form of the operator, and the two norm identities are [step 1.1], [step 1.2] with [step 2.1], and [step 2.2] with [step 3.1]; the degenerate cases $a=0$, $b=0$, and $X\times Y$ of measure zero are included in these computations, the empty-list basis of [F5] covering the zero range. [step 2.1, step 2.2, step 3.1, F5] ∎
