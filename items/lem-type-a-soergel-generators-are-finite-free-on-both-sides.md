---
id: lem-type-a-soergel-generators-are-finite-free-on-both-sides
kind: lemma
title: "Soergel generators and Bott–Samelson products are finite free on both sides"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-type-a-soergel-bimodule-for-a-simple-reflection, def-type-a-reflection-realization-and-polynomial-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §§3, 5–7"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Soergel, Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln, §§5–6"
      url: "https://arxiv.org/pdf/math/0403496"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

For each simple reflection $s_i$ the graded $(R,R)$-bimodule $B_i$ is free of
rank two as a left $R$-module and free of rank two as a right $R$-module, with
left basis $\{1\otimes1,\,1\otimes\alpha_i\}$ and right basis
$\{1\otimes1,\,\alpha_i\otimes1\}$, both of degrees $-1$ and $1$; and every
Bott–Samelson tensor product $B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$ is finite
free as a left $R$-module and finite free as a right $R$-module.

## Facts & Assumptions

**Given:** The ring $R=\mathbb Q[x_1,\ldots,x_n]$ graded by $\deg x_i=2$, a simple
reflection $s_i$ with invariant ring $R^{s_i}$, the *anti-invariant* element
$\alpha_i$ of the balanced normalization of
[[def-type-a-reflection-realization-and-polynomial-ring]], so that
$s_i(\alpha_i)=-\alpha_i$ and $\alpha_i=\pm(x_i-x_{i+1})$, and the bimodule
$B_i=R\otimes_{R^{s_i}}R(1)$. Replacing $\alpha_i$ by $-\alpha_i$ negates the
displayed basis elements and changes nothing else, so every statement below is
also true with the coordinate root $x_i-x_{i+1}$ in place of $\alpha_i$.

[F1] $B_i=R\otimes_{R^{s_i}}R(1)$ is a graded $(R,R)$-bimodule with left action
$r'(r\otimes r'')=r'r\otimes r''$, right action $(r\otimes r'')r'=r\otimes r''r'$,
shifted so that $(B_i)_d=(R\otimes_{R^{s_i}}R)_{d+1}$, and $2$ is invertible in
$\mathbb Q$, so that $R=R^{s_i}\oplus\alpha_iR^{s_i}$
([[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

## Proof

1.1 The decomposition $R=R^{s_i}\oplus\alpha_iR^{s_i}$ is a direct sum of graded $(R^{s_i},R^{s_i})$-submodules, because the averaging idempotent $e=\tfrac12(1+s_i)$ satisfies $e^2=e$, $s_ie=es_i=e$ and $\ker e=(1-e)R=R(1-e)$ with $1-e=\tfrac12(1-s_i)$; applied to any $f$ this gives $f=e(f)+(1-e)(f)$ with $e(f)\in R^{s_i}$ and $(1-e)(f)=\tfrac12(f-s_i(f))=\tfrac12\alpha_i\partial_i(f)=\delta_i\partial_i(f)\in\alpha_iR^{s_i}$, by the formula $\partial_i(f)=\alpha_i^{-1}(f-s_i(f))$ and $\delta_i=\alpha_i/2$. [F1]

2.1 Left side: tensoring the decomposition of step 1.1 over $R^{s_i}$ in the *right* tensor slot gives the decomposition $R\otimes_{R^{s_i}}R=(R\otimes_{R^{s_i}}R^{s_i})\oplus(R\otimes_{R^{s_i}}\alpha_iR^{s_i})$ of graded left $R$-modules (the left action multiplies the first slot), with summands $\{r\otimes1:r\in R\}$ and $\{r\otimes\alpha_ir':r\in R,\ r'\in R^{s_i}\}$: the first is isomorphic to $R$ as a graded left $R$-module through $r\otimes1\mapsto r$ with inverse $r\mapsto r\otimes1$, and the second is free of rank one as a left $R$-module with generator $1\otimes\alpha_i$, hence isomorphic to $R$ through $r\otimes\alpha_ir'\mapsto rr'$ (well defined by the balanced relation $r\otimes\alpha_ir'=(rr')\otimes\alpha_i$ for $r'\in R^{s_i}$, and left $R$-linear because $r''(r\otimes\alpha_ir')=r''r\otimes\alpha_ir'$), with inverse $t\mapsto t\otimes\alpha_i$. Hence the elements $1\otimes1$ and $1\otimes\alpha_i$ form a graded left $R$-basis, of degrees $0$ and $2$ before the shift. [F1, step 1.1]

2.2 Right side: since $\alpha_iR^{s_i}\subseteq R$ is also an $(R^{s_i},R^{s_i})$-sub-bimodule, tensoring the decomposition of step 1.1 in the *left* tensor slot gives the decomposition $R\otimes_{R^{s_i}}R=(R^{s_i}\otimes_{R^{s_i}}R)\oplus(\alpha_iR^{s_i}\otimes_{R^{s_i}}R)$ of graded right $R$-modules (the right action multiplies the second slot); the first summand is the set of elements $r'\otimes r$ with $r'\in R^{s_i}$ and is isomorphic to $R$ through $1\otimes r\mapsto r$ with inverse $r\mapsto1\otimes r$, and the second summand is the set of elements $\alpha_ir'\otimes r=\alpha_i\otimes r'r$ with $r'\in R^{s_i}$, free of rank one as a right $R$-module with generator $\alpha_i\otimes1$ and isomorphic to $R$ through $\alpha_i\otimes r\mapsto r$. Hence $1\otimes1$ and $\alpha_i\otimes1$ form a graded right $R$-basis, again of degrees $0$ and $2$; note that $1\otimes\alpha_i=(1\otimes1)\cdot\alpha_i$ is $\alpha_i$ times the first basis element and is not a right-basis element. [F1, step 1.1]

3.1 Applying the external shift $(1)$, which lowers degrees by one and preserves freeness with the same ranks, gives $B_i\cong R(-1)\oplus R(1)$ as a graded left $R$-module and as a graded right $R$-module, with left basis $1\otimes1$ of degree $-1$ and $1\otimes\alpha_i$ of degree $1$ and right basis $1\otimes1$ of degree $-1$ and $\alpha_i\otimes1$ of degree $1$; in particular $B_i$ is finite free of rank two on each side. [F1, step 2.1, step 2.2]

4.1 Tensor products: if $M$ is finite free as a left $R$-module with basis $m_1,\ldots,m_a$ and $N$ is finite free as a left $R$-module with basis $n_1,\ldots,n_b$, expand the *second* factor in its left basis first: $N\cong\bigoplus_q Rn_q$ as a left $R$-module, hence $M\otimes_RN\cong\bigoplus_q M$ as a left $R$-module via $m\otimes\sum_q r_qn_q\mapsto(mr_q)_q$. Expanding each copy of $M$ in its left basis gives the left basis $m_p\otimes n_q$; the inverse sends the $(p,q)$-th basis vector to that tensor. For right freeness, expand the *first* factor in its right basis and then the second factor in its right basis. These side-correct identifications respect homogeneous degrees, so an iterated tensor product of the $B_i$ is finite free of rank $2^r$ on each side. [F1, step 3.1]

5.1 Therefore $B_i$ is free of rank two on both sides and every Bott–Samelson product $B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$ is finite free on both sides, with left and right bases obtained by tensoring the two-element bases of the factors and with degrees the sums of the factor degrees. [step 3.1, step 4.1] ∎
