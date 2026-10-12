---
id: lem-nrqm-composites-marker-overlap-contraction
kind: lemma
domain: mathematics
title: "Marker overlap contraction of the two-path cross term"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-separable-partial-trace, lem-nrqm-composites-nuclear-bounded-cyclicity, def-l-p-space-as-a-quotient-by-null-functions, cor-cauchy-schwarz-inequality-for-l-two, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-hilbert-space, def-countable-choice]
dependency_roles:
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

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $(D,\mathcal A,dx)$ be a $\sigma$-finite measure space with $L^2(D)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]), let $K$ be a complex Hilbert space ([[def-hilbert-space]]) with unit vectors $e_1,e_2$, let $a,b\in L^2(D)$ be unit vectors, and let $\alpha,\beta\in\mathbb C$ with $|\alpha|^2+|\beta|^2=1$. Put

$$\Psi:=\alpha\,a\otimes e_1+\beta\,b\otimes e_2\in L^2(D)\widehat\otimes K .$$

Then:

(a) the reduced state $\rho:=\operatorname{Tr}_KT_{\Psi,\Psi}$ on $L^2(D)$ is

$$\rho=|\alpha|^2T_{a,a}+|\beta|^2T_{b,b}+\alpha\overline\beta\,\langle e_1,e_2\rangle\,T_{a,b}+\overline\alpha\beta\,\langle e_2,e_1\rangle\,T_{b,a};$$

(b) for every measurable $B\subseteq D$ with finite measure, writing $P_B$ for the multiplication operator by $\mathbf 1_B$,

$$\operatorname{tr}(\rho P_B)=\int_B\Bigl(|\alpha|^2|a|^2+|\beta|^2|b|^2+2\operatorname{Re}\bigl(\alpha\overline\beta\langle e_1,e_2\rangle\,a(x)\overline{b(x)}\bigr)\Bigr)dx ;$$

(c) the marker overlap contracts the cross term: $|\langle e_1,e_2\rangle|\le1$, and if $e_1\perp e_2$ the cross term in (b) vanishes, leaving the incoherent weight $|\alpha|^2|a|^2+|\beta|^2|b|^2$.

These are identities for the specified model state; they assert no measured detector law and cover no selective conditioning.

## Facts & Assumptions

**Given:** $D,K,e_1,e_2,a,b,\alpha,\beta,\Psi$ as in the Statement; a measurable $B\subseteq D$ with finite measure.

[F1] The completed tensor product $L^2(D)\widehat\otimes K$ carries the inner product $\langle f\otimes u,f'\otimes u'\rangle=\langle f,f'\rangle\langle u,u'\rangle$ and $\|f\otimes u\|=\|f\|\,\|u\|$ ([[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] $\operatorname{Tr}_K$ is linear with $\operatorname{Tr}_KT_{f\otimes u,f'\otimes u'}=\langle u,u'\rangle T_{f,f'}$; $T_{f,f'}g=\langle g,f'\rangle f$; and $\operatorname{tr}(T_{f,f'}P_B)=\langle f,P_Bf'\rangle=\int_Bf\overline{f'}$ for the self-adjoint multiplication operator $P_B$ ([[lem-nrqm-composites-separable-partial-trace]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]]).

[F3] $|\langle e_1,e_2\rangle|\le1$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]); the functions $a\overline b$, $|a|^2$, $|b|^2$ are integrable on $B$ of finite measure by Cauchy-Schwarz ([[cor-cauchy-schwarz-inequality-for-l-two]]).

## Proof

1.1 [The reduced state] Expanding $T_{\Psi,\Psi}$ into its four rank-one summands and applying the rank-one rule [F2] termwise gives $\operatorname{Tr}_KT_{\Psi,\Psi}=|\alpha|^2T_{a,a}+|\beta|^2T_{b,b}+\alpha\overline\beta\langle e_1,e_2\rangle T_{a,b}+\overline\alpha\beta\langle e_2,e_1\rangle T_{b,a}$, which is (a). [given, F1, F2, algebra]

2.1 [The bin weight] By [F2], $\operatorname{tr}(\rho P_B)=|\alpha|^2\int_B|a|^2+|\beta|^2\int_B|b|^2+\alpha\overline\beta\langle e_1,e_2\rangle\int_Ba\overline b+\overline\alpha\beta\langle e_2,e_1\rangle\int_Bb\overline a$; since the last two integrals are conjugates of one another (because $\langle e_2,e_1\rangle=\overline{\langle e_1,e_2\rangle}$ and $\int_Bb\overline a=\overline{\int_Ba\overline b}$), their sum is $2\operatorname{Re}(\alpha\overline\beta\langle e_1,e_2\rangle\int_Ba\overline b)$, giving (b). [step 1.1, F2, F3, algebra]

3.1 [Contraction] By [F3], $|\langle e_1,e_2\rangle|\le1$; the cross term in (b) is $\langle e_1,e_2\rangle$ times the unmarked cross term $2\operatorname{Re}(\alpha\overline\beta\int_Ba\overline b)$ and therefore is bounded in modulus by the modulus of that unmarked term; if $\langle e_1,e_2\rangle=0$ the cross term vanishes identically, leaving the diagonal weights, which is (c). [step 2.1, F3, algebra] ∎
