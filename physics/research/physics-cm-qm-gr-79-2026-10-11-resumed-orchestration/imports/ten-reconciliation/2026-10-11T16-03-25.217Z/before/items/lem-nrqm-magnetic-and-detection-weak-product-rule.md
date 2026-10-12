---
id: lem-nrqm-magnetic-and-detection-weak-product-rule
aliases: [nrqm-magnetic-and-detection-weak-product-rule]
kind: lemma
domain: mathematics
title: "Weak product rule for a bounded coefficient with bounded weak derivative"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivatives-are-unique-almost-everywhere, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-classical-derivatives-are-weak-derivatives, thm-algebra-of-derivatives, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
dependency_roles:
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-weak-derivatives-are-unique-almost-everywhere: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes), Chapter 2, Lemma 2.1 and its proof, printed pp. 26-28 (product with a bounded coefficient)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Chapter 8 pp. 201-214 (weak derivatives, Leibniz type computations and density of smooth functions)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $d\ge1$
and let $a\in L^\infty(\mathbb R^d;\mathbb C)$ be a class having weak first
derivatives $D_ja\in L^\infty(\mathbb R^d;\mathbb C)$ for every
$j\in\{1,\dots,d\}$, in the sense of
[[def-weak-derivative-of-a-locally-integrable-function]]. Let
$u\in W^{1,2}(\mathbb R^d;\mathbb C)$ ([[def-sobolev-space-wkp-and-its-norm]]).
Then $au\in W^{1,2}(\mathbb R^d;\mathbb C)$ and, for every $j$,
$$D_j(au)=a\,D_ju+(D_ja)\,u \qquad\text{as }L^2\text{ classes,}$$
with pointwise products of chosen representatives. No boundedness of $u$ is
assumed.

## Facts & Assumptions

**Given:** a class $a\in L^\infty$ with weak derivatives $D_ja\in L^\infty$, and a class $u\in W^{1,2}$.

[F1] $u\in W^{1,2}$ means $u\in L^2$ and each weak derivative $D_ju$ is an $L^2$ class satisfying $\int u\,D_j\varphi=-\int(D_ju)\varphi$ for every $\varphi\in C_c^\infty$; the pairing is bilinear and the weak derivative class is unique ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]], [[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F2] The same identity $\int a\,D_j\psi=-\int(D_ja)\psi$ holds for every $\psi\in C_c^\infty$ because $D_ja$ is the weak derivative of $a$; both sides are finite since $a$ and $D_ja$ are bounded and $\psi$ is compactly supported.

[F3] $C_c^\infty(\mathbb R^d;\mathbb C)$ is dense in $W^{1,2}(\mathbb R^d;\mathbb C)$ in the $W^{1,2}$ norm ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F4] Classical partial derivatives of smooth functions are weak derivatives, and the classical product rule applies to products of smooth functions ([[lem-classical-derivatives-are-weak-derivatives]], [[thm-algebra-of-derivatives]]).

## Proof

1.1 [Compactly supported smooth case] Let $v\in C_c^\infty(\mathbb R^d)$ and fix a test function $\varphi\in C_c^\infty(\mathbb R^d)$. By [F4] the product $v\varphi$ is compactly supported smooth with classical derivative $D_j(v\varphi)=(D_jv)\varphi+vD_j\varphi$, and this is its weak derivative, so [F2] with $\psi:=v\varphi$ gives $\int a\bigl((D_jv)\varphi+vD_j\varphi\bigr)=-\int(D_ja)v\varphi$. Rearranging, $\int av\,D_j\varphi=-\int\bigl(aD_jv+(D_ja)v\bigr)\varphi$, an identity between finite integrals. Since $av\in L^2$ and $aD_jv+(D_ja)v\in L^2$ (both products of an $L^\infty$ with an $L^2$ class, the first term using [F1]), the class $av$ has $L^2$ weak derivative $aD_jv+(D_ja)v$, and $av\in W^{1,2}$. [given, F1, F2, F4, algebra]

1.2 [Approximation] By [F3] choose $v_n\in C_c^\infty(\mathbb R^d)$ with $\|v_n-u\|_{W^{1,2}}\to0$; then $v_n\to u$ and $D_jv_n\to D_ju$ in $L^2$. Put $M:=\max\{\|a\|_\infty,\|D_ja\|_\infty\}<\infty$. Then $\|av_n-au\|_2\le M\|v_n-u\|_2\to0$, $\|aD_jv_n-aD_ju\|_2\le M\|D_jv_n-D_ju\|_2\to0$, and $\|(D_ja)v_n-(D_ja)u\|_2\le M\|v_n-u\|_2\to0$: all three convergences hold in $L^2$. [given, F1, F3, algebra]

2.1 [Passage to the limit] Fix $\varphi\in C_c^\infty(\mathbb R^d)$. By step 1.1, $\int av_nD_j\varphi=-\int\bigl(aD_jv_n+(D_ja)v_n\bigr)\varphi$ for every $n$. As $n\to\infty$, the left side tends to $\int au\,D_j\varphi$ and the right side to $-\int\bigl(aD_ju+(D_ja)u\bigr)\varphi$, because $av_n\to au$, $aD_jv_n\to aD_ju$ and $(D_ja)v_n\to(D_ja)u$ in $L^2$ by step 1.2 while $D_j\varphi$ and $\varphi$ are bounded with compact support. Hence $\int au\,D_j\varphi=-\int\bigl(aD_ju+(D_ja)u\bigr)\varphi$ for every test function $\varphi$. The class $aD_ju+(D_ja)u$ lies in $L^2$ by step 1.2's estimates, so by [F1] the class $au$ has weak $j$-derivative $aD_ju+(D_ja)u$ and $au\in W^{1,2}$. [step 1.1, step 1.2, F1, algebra] ∎
