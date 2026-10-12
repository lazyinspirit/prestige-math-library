---
id: lem-nrqm-composites-separable-partial-trace
kind: lemma
domain: mathematics
title: "Separable partial trace and its basic properties"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus, lem-nuclear-series-characterizes-trace-norm, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, def-trace-class-operator, def-hilbert-space, def-operator-norm, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Topics in Real and Functional Analysis (2017), §3.6 pp. 93-96 (trace-class operators and partial traces)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §3 pp. 9-12"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H,K$ be nonzero complex Hilbert spaces ([[def-hilbert-space]]) and let $H\widehat\otimes K$ be their completed tensor product ([[lem-nrqm-composites-hilbert-tensor-construction]]); write $T_{x,z}x'=\langle x',z\rangle x$ for rank-one operators ([[lem-nrqm-composites-rank-one-operator-calculus]]) and $\operatorname{tr}$ for the trace of a trace-class operator ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

(a) There is a unique linear map $\operatorname{Tr}_K:\mathcal S_1(H\widehat\otimes K)\to\mathcal S_1(H)$ with

$$\operatorname{tr}\bigl((\operatorname{Tr}_KT)A\bigr)=\operatorname{tr}\bigl(T(A\otimes I_K)\bigr)$$

for every trace-class $T$ and every $A\in\mathcal B(H)$; it satisfies $\|\operatorname{Tr}_KT\|_1\le\|T\|_1$ and is independent of any chosen orthonormal basis of $K$.

(b) $\operatorname{Tr}_K$ is positive (positive operators map to positive operators), trace preserving ($\operatorname{tr}\operatorname{Tr}_KT=\operatorname{tr}T$), and it maps density operators to density operators ([[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

(c) On rank-one operators, $\operatorname{Tr}_KT_{u\otimes v,u'\otimes v'}=\langle v,v'\rangle_K\,T_{u,u'}$.

The analogous map $\operatorname{Tr}_H$ satisfies $\operatorname{tr}((\operatorname{Tr}_HT)A)=\operatorname{tr}(T(I_H\otimes A))$ for $A\in\mathcal B(K)$. No claim is made about instruments or conditioning.

## Facts & Assumptions

**Given:** Nonzero complex Hilbert spaces $H,K$; vectors $u,u'\in H$, $v,v'\in K$; a trace-class $T$ on $H\widehat\otimes K$ with a nuclear representation $T=\sum_jT_{w_j,z_j}$, $w_j,z_j\in H\widehat\otimes K$; a bounded $A\in\mathcal B(H)$.

[F1] $T_{x,z}$ is trace class ([[def-trace-class-operator]]) with $\|T_{x,z}\|_1=\|x\|\,\|z\|$, $\operatorname{tr}(T_{x,z})=\langle x,z\rangle$, and $T_{x,z}B=T_{x,B^*z}$, $BT_{x,z}=T_{Bx,z}$ for bounded $B$; for trace-class $T$, $\operatorname{tr}(TB)=\operatorname{tr}(BT)$ and $\operatorname{tr}(T)=\sum_j\langle w_j,z_j\rangle$ for every nuclear representation ([[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F2] $T$ is trace class exactly when $T=\sum_jT_{w_j,z_j}$ with $\sum_j\|w_j\|\,\|z_j\|<\infty$ converging in operator norm ([[def-operator-norm]]), and then $\|T\|_1=\inf\sum_j\|w_j\|\,\|z_j\|$; $\mathcal S_1$ is complete in trace norm and a two-sided ideal with $\|BTB'\|_1\le\|B\|\,\|T\|_1\|B'\|$ ([[lem-nuclear-series-characterizes-trace-norm]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F3] If $S\in\mathcal S_1(H)$ and $x,y\in H$ then $\operatorname{tr}(ST_{x,y})=\langle Sx,y\rangle$; if $\operatorname{tr}(SA)=0$ for all bounded $A$ then $S=0$ ([[lem-nrqm-composites-nuclear-bounded-cyclicity]], [[lem-nrqm-composites-rank-one-operator-calculus]]).

## Proof

1.1 [The rank-one values] For $T_{u\otimes v,u'\otimes v'}$ and bounded $A$, $T(A\otimes I)=T_{u\otimes v,(A\otimes I)^*(u'\otimes v')}=T_{u\otimes v,A^*u'\otimes v'}$ by [F1], whose trace is $\langle u\otimes v,A^*u'\otimes v'\rangle=\langle u,A^*u'\rangle\langle v,v'\rangle=\langle Au,u'\rangle\langle v,v'\rangle$. On the other hand $\operatorname{tr}\bigl((\langle v,v'\rangle T_{u,u'})A\bigr)=\langle v,v'\rangle\operatorname{tr}(T_{u,u'}A)=\langle v,v'\rangle\langle Au,u'\rangle$ by [F1]. Hence the assignment $\operatorname{Tr}_KT_{u\otimes v,u'\otimes v'}:=\langle v,v'\rangle T_{u,u'}$ satisfies the defining identity on rank-one tensors, and $\|\operatorname{Tr}_KT_{u\otimes v,u'\otimes v'}\|_1\le\|v\|\,\|v'\|\,\|u\|\,\|u'\|=\|u\otimes v\|\,\|u'\otimes v'\|$ by [F1]. [given, F1, algebra]

2.1 [Extension to trace class and well-definedness] Let $T=\sum_jT_{w_j,z_j}$ be a nuclear representation. Define $\operatorname{Tr}_KT:=\sum_j\operatorname{Tr}_KT_{w_j,z_j}$, a trace-norm convergent series because $\sum_j\|\operatorname{Tr}_KT_{w_j,z_j}\|_1\le\sum_j\|w_j\|\,\|z_j\|<\infty$ and $\mathcal S_1(H)$ is complete [F2]; then $\|\operatorname{Tr}_KT\|_1\le\inf\sum_j\|w_j\|\,\|z_j\|=\|T\|_1$ by [F2]. The defining identity holds: by absolute convergence and [F1], $\operatorname{tr}\bigl((\sum_j\operatorname{Tr}_KT_{w_j,z_j})A\bigr)=\sum_j\operatorname{tr}\bigl(T_{w_j,z_j}(A\otimes I)\bigr)=\operatorname{tr}\bigl((\sum_jT_{w_j,z_j})(A\otimes I)\bigr)=\operatorname{tr}(T(A\otimes I))$, the sums being absolutely convergent because $|\operatorname{tr}(T_{w_j,z_j}(A\otimes I))|\le\|A\|\,\|w_j\|\,\|z_j\|$. Well-definedness: if $T=\sum_jT_{w_j,z_j}=\sum_iT_{w'_i,z'_i}$ are two nuclear representations, both images $S,S'$ satisfy $\operatorname{tr}(SA)=\operatorname{tr}(S'A)=\operatorname{tr}(T(A\otimes I))$ for every bounded $A$, so $S-S'$ has all trace pairings zero and vanishes by [F3]. Linearity and the bound are inherited from the series. This proves (a) and (c). [step 1.1, F1, F2, F3, algebra]

3.1 [Positivity and trace preservation] Let $T\ge0$ and $x\in H$. By the defining identity with $A=T_{x,x}$ and [F3], $\langle(\operatorname{Tr}_KT)x,x\rangle=\operatorname{tr}((\operatorname{Tr}_KT)T_{x,x})=\operatorname{tr}(T(T_{x,x}\otimes I_K))$, which is non-negative because $T\ge0$ and $T_{x,x}\otimes I_K\ge0$ (the tensor product of non-negative operators is non-negative: $\langle(u\otimes v),T_{x,x}\otimes I(u\otimes v)\rangle=\langle u,x\rangle^2\|v\|^2\ge0$, and the general case follows by bilinearity and density). Hence $\operatorname{Tr}_KT\ge0$. Taking $A=I_H$ gives $\operatorname{tr}\operatorname{Tr}_KT=\operatorname{tr}T$. Consequently a density operator $\rho$ maps to a positive trace-class operator of trace $1$, i.e. a density operator. [step 2.1, F1, F3, algebra]

4.1 [Uniqueness] If two linear maps $\operatorname{Tr}_K,\operatorname{Tr}_K'$ satisfy the defining identity for all $T$ and $A$, then for fixed $T$ the difference $S=\operatorname{Tr}_KT-\operatorname{Tr}_K'T$ satisfies $\operatorname{tr}(SA)=0$ for all bounded $A$, so $S=0$ by [F3]. Hence the map is unique and, in particular, independent of any basis; the symmetrically defined $\operatorname{Tr}_H$ has the stated identity. [step 2.1, F3] ∎
