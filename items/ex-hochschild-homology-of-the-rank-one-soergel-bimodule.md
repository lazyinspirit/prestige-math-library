---
id: ex-hochschild-homology-of-the-rank-one-soergel-bimodule
kind: example
title: "Hochschild homology of the rank-one Soergel bimodule"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-reduced-type-a-polynomial-ring-for-hhh, def-khovanovs-hhh-rouquier-generator-complexes, def-termwise-hochschild-homology-complex-of-a-rouquier-complex, def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3; the m=2 example, printed pp. 15-16"
      url: "https://arxiv.org/pdf/math/0510265"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice (used only in step 3.1, through the polynomial
Hochschild theorem). Take $m=2$, so that $R=\mathbb Q[y]$ with $y=x_1-x_2$,
$R^{s_1}=\mathbb Q[y^2]$ and $B_1=\mathbb Q[y]\otimes_{\mathbb Q[y^2]}\mathbb Q[y]$
([[def-reduced-type-a-polynomial-ring-for-hhh]]), with the left $R$-basis
$\{1\otimes1,\,1\otimes y\}$ of degrees $0$ and $2$. The one-variable diagonal
Koszul complex of
[[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]] for the single
element $u=y\otimes1-1\otimes y$ has terms
$$0\longrightarrow B_1\{2\}\xrightarrow{\ \delta\ }B_1\longrightarrow0, \qquad\delta(m)=ym-my,$$
of internal degrees $2$ and $0$. In the displayed basis
$$\delta(1\otimes1)=y\otimes1-1\otimes y,\qquad \delta(1\otimes y)=y\otimes y-1\otimes y^2,$$
so the matrix of $\delta$ is $\left(\begin{smallmatrix}y&-y^2\\-1&y\end{smallmatrix}\right)$
and the underlying multiplication on $B_1$ has internal degree $2$;
the displayed map $B_1\{2\}\to B_1$ therefore has degree $0$. Hence
$$HH_0(R,B_1)=\operatorname{coker}\delta=\mathbb Q[y]\cdot[1\otimes1]\cong R,$$
$$HH_1(R,B_1)=\ker\bigl(\delta:B_1\{2\}\to B_1\bigr) =\mathbb Q[y]\cdot\bigl[(y\otimes1+1\otimes y)\theta\bigr]\cong R\{4\},$$
and $HH_h(R,B_1)=0$ for $h\ge2$; the generator of $HH_1$ is the class of the
symbol times $rb_1(1)=y\otimes1+1\otimes y$ of
[[def-khovanovs-hhh-rouquier-generator-complexes]], of total internal degree
$2+2=4$ because the Koszul symbol $\theta$ has internal degree $2$. This is the
rank-one computation used by the source's two-strand example.

## Facts & Assumptions

**Given:** the reduced ring $R=\mathbb Q[y]$, the bimodule
$B_1=\mathbb Q[y]\otimes_{\mathbb Q[y^2]}\mathbb Q[y]$, its left $R$-basis
$\{1\otimes1,1\otimes y\}$ with degrees $0$ and $2$, the diagonal element
$u=y\otimes1-1\otimes y$, and AC.

[L1] $R=\mathbb Q[y]$, $R^{s_1}=\mathbb Q[y^2]$ and $B_1$ is free of rank two
on each side with $1\otimes1$ of degree $0$ and $1\otimes y$ of degree $2$; the
balancing relation is $y^2\otimes1=1\otimes y^2$
([[def-reduced-type-a-polynomial-ring-for-hhh]]).

[L2] The one-variable diagonal Koszul complex has degree-one term $B_1\{2\}$
and degree-zero term $B_1$, differential $m\mapsto ym-my$, and no other terms;
the symbol $\theta$ has internal degree $2$ and the differential is
internal-degree preserving
([[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[L3] Under AC, $HH_h(R,M)\cong H_h$ of the coefficient diagonal Koszul complex,
naturally in $M$ and internal-degree preserving
([[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]).

[L4] $rb_1(1)=y\otimes1+1\otimes y$ is the degree-zero bimodule map used for the
generator complex
([[def-khovanovs-hhh-rouquier-generator-complexes]]).

[L5] AC is the choice-function principle ([[def-axiom-of-choice]]), used only
to invoke [L3].



## Verification

**Proof technique:** direct.

1.1 Compute the differential in the displayed basis. [L1, L2, given, algebra] In the left $R$-basis $\{1\otimes1,1\otimes y\}$ one has $y\otimes1=y(1\otimes1)$ and $1\otimes y$ as the second basis vector, so $\delta(1\otimes1)=y\otimes1-1\otimes y$ has coordinates $(y,-1)$. Using the balancing relation $1\otimes y^2=y^2\otimes1=y^2(1\otimes1)$ and $y\otimes y=y(1\otimes y)$, $\delta(1\otimes y)=y\otimes y-1\otimes y^2$ has coordinates $(-y^2,y)$. The matrix is therefore $\left(\begin{smallmatrix}y&-y^2\\-1&y\end{smallmatrix}\right)$, with columns the images of the two basis vectors, and both columns are homogeneous of degree $2$ since $y$ has degree $2$. [L1, L2, given, algebra]

2.1 Compute kernel and cokernel. [step 1.1, algebra] An element $a(1\otimes1)+b(1\otimes y)$ lies in $\ker\delta$ exactly when $ay-b y^2=0$ and $-a+by=0$; since $R$ is a domain the second equation gives $a=by$, and the first is then automatic. Hence $\ker\delta=\mathbb Q[y]\cdot(y\otimes1+1\otimes y)$, free of rank one with generator of degree $2$. The first column $(y,-1)$ generates the image, because the second column $(-y^2,y)$ equals $-y$ times the first; the cokernel is therefore free of rank one and the class of $1\otimes1$ is a generator of degree $0$, so $\operatorname{coker}\delta\cong R$ with the class of $1\otimes1$ as basis element. [step 1.1, algebra]

3.1 Apply the diagonal theorem and read the Hochschild groups. [L1, L2, L3, L5, step 2.1, algebra] By [L3] applied to $M=B_1$, $HH_0(R,B_1)\cong H_0=\operatorname{coker}\delta\cong R$ in degree $0$, and $HH_1(R,B_1)\cong H_1=\ker(\delta:B_1\{2\}\to B_1)$. The kernel of $\delta$ has its generator in degree $2$ inside $B_1$; the shifted term $B_1\{2\}$ represents the coefficient together with its single Koszul symbol $\theta$, so its degree is $2+2=4$. Thus the class $[(y\otimes1+1\otimes y)\theta]$ has total internal degree $4$ and $H_1\cong R\{4\}$. For $h\ge2$ the complex has no terms, so $HH_h=0$. AC is used only here, in [L3]. [L2, L3, L5, step 2.1, algebra]

4.1 Record the normalization. [L1, L4, step 3.1] The generator of $HH_1$ is the class of $rb_1(1)$ times the symbol, so it is the degree-$2$ element $rb_1(1)$ shifted by the degree-$2$ symbol; the resulting degree is $4$, and no other normalization is asserted. The two other boundary cases are immediate: for $h=0$ there is no symbol and the degree is the degree of the class of $1\otimes1$, namely $0$; the complex is empty above $h=1$. [L1, L4, step 3.1] ∎ 