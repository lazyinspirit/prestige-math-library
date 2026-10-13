---
id: lem-nrqm-composites-marker-overlap-contraction
aliases: [nrqm-composites-marker-overlap-contraction]
kind: lemma
domain: mathematics
title: "Marker overlap contraction of the two-path cross term"
status: published
origin: pipeline
dependency_level: 3
deps: [lem-complex-lp-completeness-density-and-inner-product, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-separable-partial-trace, lem-nrqm-composites-nuclear-bounded-cyclicity, def-l-p-space-as-a-quotient-by-null-functions, cor-cauchy-schwarz-inequality-for-l-two, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-complex-lp-completeness-density-and-inner-product: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §6.3 pp. 121-128 (reduced states and marker-induced loss of coherence)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §3"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $(D,\mathcal A,\mu)$ be a $\sigma$-finite measure space, let $L^2(D,\mu)$ denote the quotient of square-integrable measurable functions modulo almost-everywhere equality ([[def-l-p-space-as-a-quotient-by-null-functions]]), let $K$ be a complex Hilbert space ([[def-hilbert-space]]) with unit vectors $e_1,e_2$, let $a,b\in L^2(D,\mu)$ be unit vectors, and let $\alpha,\beta\in\mathbb C$ with $|\alpha|^2+|\beta|^2=1$. Choose measurable representatives of $a,b$; all displayed pointwise expressions are understood almost everywhere, and the integrals below are independent of the representatives. Put

$$\Psi:=\alpha\,a\otimes e_1+\beta\,b\otimes e_2\in L^2(D)\widehat\otimes K .$$

Then:

(a) the reduced positive trace-class weight $\rho:=\operatorname{Tr}_KT_{\Psi,\Psi}$ on $L^2(D)$ is

$$\rho=|\alpha|^2T_{a,a}+|\beta|^2T_{b,b}+\alpha\overline\beta\,\langle e_1,e_2\rangle\,T_{a,b}+\overline\alpha\beta\,\langle e_2,e_1\rangle\,T_{b,a};$$

(b) for every measurable $B\subseteq D$ with finite measure, writing $P_B$ for the multiplication operator by $\mathbf 1_B$,

$$\operatorname{tr}(\rho P_B)=\int_B\Bigl(|\alpha|^2|a|^2+|\beta|^2|b|^2+2\operatorname{Re}\bigl(\alpha\overline\beta\langle e_1,e_2\rangle\,a(x)\overline{b(x)}\bigr)\Bigr)d\mu ;$$

(c) the marker overlap contracts the cross term: $|\langle e_1,e_2\rangle|\le1$, and if $e_1\perp e_2$ the cross term in (b) vanishes, leaving the incoherent weight $|\alpha|^2|a|^2+|\beta|^2|b|^2$.

The weight satisfies $\operatorname{tr}\rho=\|\Psi\|^2=1+2\operatorname{Re}(\alpha\overline\beta\langle a,b\rangle\langle e_1,e_2\rangle)$; it is a density operator precisely when $\|\Psi\|=1$. The stated assumptions do not force this normalization. These are identities for the specified vector and its unnormalized weight; they assert no measured detector law and cover no selective conditioning.

## Facts & Assumptions

**Given:** $D,K,e_1,e_2,a,b,\alpha,\beta,\Psi$ as in the Statement; a measurable $B\subseteq D$ with finite measure.

[F0] Under the assumed Countable Choice, complex $L^2(D,\mu)$ is complete for its $L^2$ norm and has the first-variable-linear inner product $\langle f,g\rangle=\int_Df\overline g\,d\mu$ inducing that norm ([[lem-complex-lp-completeness-density-and-inner-product]]). Thus it is a complex Hilbert space. The given unit vectors $a,b$ make it nonzero; the unit $e_1$ makes $K$ nonzero, so both tensor and partial-trace suppliers apply.

[F1] The completed tensor product $L^2(D)\widehat\otimes K$ carries the inner product $\langle f\otimes u,f'\otimes u'\rangle=\langle f,f'\rangle\langle u,u'\rangle$ and $\|f\otimes u\|=\|f\|\,\|u\|$ ([[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] $\operatorname{Tr}_K$ is linear with $\operatorname{Tr}_KT_{f\otimes u,f'\otimes u'}=\langle u,u'\rangle T_{f,f'}$; $T_{f,f'}g=\langle g,f'\rangle f$; and $\operatorname{tr}(T_{f,f'}P_B)=\langle f,P_Bf'\rangle=\int_Bf\overline{f'}\,d\mu$ for the self-adjoint multiplication operator $P_B$ ([[lem-nrqm-composites-separable-partial-trace]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]]).

[F3] $|\langle e_1,e_2\rangle|\le1$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]); the functions $a\overline b$, $|a|^2$, $|b|^2$ are integrable on $B$ of finite measure by Cauchy-Schwarz ([[cor-cauchy-schwarz-inequality-for-l-two]]).

## Proof

1.1 [The reduced state] Expanding $T_{\Psi,\Psi}$ into its four rank-one summands and applying the rank-one rule [F2] termwise gives $\operatorname{Tr}_KT_{\Psi,\Psi}=|\alpha|^2T_{a,a}+|\beta|^2T_{b,b}+\alpha\overline\beta\langle e_1,e_2\rangle T_{a,b}+\overline\alpha\beta\langle e_2,e_1\rangle T_{b,a}$, which is (a). The trace-preserving partial trace [F2] gives $\operatorname{tr}\rho=\|\Psi\|^2$; expanding the tensor norm by [F1] gives the displayed normalization formula. Positivity follows from positivity of $T_{\Psi,\Psi}$ and the positive partial trace [F2], so trace one is exactly the density condition. [given, F0, F1, F2, algebra]

2.1 [The bin weight] By [F2], $\operatorname{tr}(\rho P_B)=|\alpha|^2\int_B|a|^2+|\beta|^2\int_B|b|^2+\alpha\overline\beta\langle e_1,e_2\rangle\int_Ba\overline b+\overline\alpha\beta\langle e_2,e_1\rangle\int_Bb\overline a$; since the last two integrals are conjugates of one another (because $\langle e_2,e_1\rangle=\overline{\langle e_1,e_2\rangle}$ and $\int_Bb\overline a=\overline{\int_Ba\overline b}$), their sum is $2\operatorname{Re}(\alpha\overline\beta\langle e_1,e_2\rangle\int_Ba\overline b)$, giving (b). [step 1.1, F2, F3, algebra]

3.1 [The overlap bound] By [F3], $|\langle e_1,e_2\rangle|\le1$. Thus the modulus of the complex cross-term coefficient $\alpha\overline\beta\langle e_1,e_2\rangle$ is at most $|\alpha\beta|$, and the real cross-term contribution at $x$ is bounded in magnitude by $2|\alpha\beta|\,|a(x)b(x)|$. A complex phase may rotate that contribution, so no comparison of its real part with the real part for overlap one is asserted. When $e_1\perp e_2$, the overlap is zero and the cross term vanishes, leaving exactly the diagonal sum, as claimed in (c). [step 2.1, F3, algebra] ∎
