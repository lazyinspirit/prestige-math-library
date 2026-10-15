---
id: cex-hh-nondegenerate-symmetrizing-trace-does-not-imply-semisimplicity
kind: counterexample
title: "A rank-one Hecke algebra with a perfect symmetrizing form and degenerate regular trace"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-algebra-over-a-commutative-ring, def-field, def-hh-specialization-and-regular-trace-determinant, def-hh-universal-coxeter-hecke-parameters-and-presentation, def-semisimple-module, def-simple-module, def-trace-of-an-endomorphism, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://www.math.ru.nl/~solleveld/surveyHecke.pdf"
      locator: "§1.1, equation (1.7), PDF p. 6: the rank-one finite Hecke algebra at unnormalized parameter q=−1 and its repeated-root nonsemisimple specialization; the local proof computes both trace forms explicitly."
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, EPFL course notes"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "§2 and §4.1, PDF pp. 6–7 and 15–16: canonical Hecke trace and finite specialization conventions; the local proof independently verifies the rank-one example."
---

## Statement refuted

A finite-dimensional Hecke algebra over a characteristic-zero field is semisimple whenever it admits a nondegenerate symmetrizing trace pairing.

## Facts & Assumptions

**Given:** The rank-one Coxeter group $W=\{1,s\}$, coefficient field $K=\mathbb C$, parameter $v=i$, and the specialized normalized Hecke algebra $H=K[T]/((T-i)(T+i^{-1}))$.

[F1] The normalized quadratic relation is $(T_s-v_s)(T_s+v_s^{-1})=0$ ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]]).

[F2] For every commutative specialization, the elements $(1\otimes T_w)_{w\in W}$ form a basis ([[thm-hh-generic-coxeter-hecke-standard-basis]]).

[F3] The regular-trace Gram matrix has entries $\operatorname{Tr}_K(L_{T_xT_y})$ and its determinant is the regular-trace determinant ([[def-hh-specialization-and-regular-trace-determinant]]).

[F4] A simple left module is nonzero and has no proper nonzero submodule ([[def-simple-module]]).

[F5] A semisimple module is an internal direct sum of simple submodules ([[def-semisimple-module]]).

## Counterexample


**Given:** The data above and the regular left action of $H$ on itself.

1.1 Since $i^{-1}=-i$, the defining polynomial is $(T-i)^2$, and the standard basis is $(1,T)$ by [F2]. Expanding the relation gives $T^2=1+2iT$. [given, F1, F2, algebra]

1.2 Let $\epsilon:=T-i$. The basis $(1,T)$ implies $\epsilon\ne0$, while the defining polynomial gives $\epsilon^2=0$. For any simple left $H$-module $S$, $\epsilon S$ is a submodule because $H$ is commutative. If $\epsilon S\ne0$, simplicity [F4] gives $\epsilon S=S$, and applying $\epsilon$ again yields $0=\epsilon^2S=\epsilon S=S$, a contradiction. Thus $\epsilon$ annihilates every simple module. [given, F2, F4, algebra]

2.1 In the basis $(1,T)$, the columns of $L_T$ are $(0,1)^{\mathsf T}$ and $(1,2i)^{\mathsf T}$, so $[L_T]=\begin{pmatrix}0&1\\1&2i\end{pmatrix}$. Hence the regular-trace Gram matrix is $G=\begin{pmatrix}\operatorname{Tr}(L_1)&\operatorname{Tr}(L_T)\\\operatorname{Tr}(L_T)&\operatorname{Tr}(L_{T^2})\end{pmatrix}=\begin{pmatrix}2&2i\\2i&-2\end{pmatrix}$. Its determinant is $-4-(2i)^2=0$, so the regular-trace pairing is degenerate and the regular-trace determinant vanishes. [step 1.1, F3, algebra]

2.2 Define $\tau(1)=1$ and $\tau(T)=0$. From $T^2=1+2iT$, for $x=a+bT$ and $y=c+dT$ one obtains $\tau(xy)=ac+bd=\tau(yx)$. Its Gram matrix in $(1,T)$ is $\begin{pmatrix}1&0\\0&1\end{pmatrix}$, so the pairing $\tau(xy)$ is nondegenerate and perfect. [step 1.1, algebra]

3.1 If the regular module $H$ were semisimple, it would be a direct sum of simple submodules by [F5], each annihilated by $\epsilon$ by step 1.2; then $\epsilon$ would annihilate all of $H$. But $\epsilon\cdot1=\epsilon\ne0$. Therefore $H$ is not semisimple, despite the perfect symmetrizing pairing in step 2.2. This refutes the statement. [step 1.2, step 2.2, F5, algebra] ∎
