---
id: lem-nrqm-composites-separable-partial-trace
aliases: [nrqm-composites-separable-partial-trace]
kind: lemma
domain: mathematics
title: "Separable partial trace and its basic properties"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-cauchy-schwarz-in-an-inner-product-space, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus, lem-nuclear-series-characterizes-trace-norm, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, def-trace-class-operator, def-hilbert-space, def-operator-norm, def-countable-choice]
dependency_roles:
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-separable-hilbert-space-has-a-countable-orthonormal-basis: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
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

[F4] Algebraic tensors are dense in the completed product, with the orthogonal coordinate norm formula; a closed span of a given countable sequence has a finite/countable orthonormal basis by Gram–Schmidt. Bounded tensor maps extend and satisfy the adjoint and norm identities; Cauchy–Schwarz bounds scalar coefficient sums ([[lem-nrqm-composites-hilbert-tensor-construction]], [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[lem-nrqm-composites-bounded-tensor-maps]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 [The rank-one values] For $T_{u\otimes v,u'\otimes v'}$ and bounded $A$, $T(A\otimes I)=T_{u\otimes v,(A\otimes I)^*(u'\otimes v')}=T_{u\otimes v,A^*u'\otimes v'}$ by [F1], whose trace is $\langle u\otimes v,A^*u'\otimes v'\rangle=\langle u,A^*u'\rangle\langle v,v'\rangle=\langle Au,u'\rangle\langle v,v'\rangle$. On the other hand $\operatorname{tr}\bigl((\langle v,v'\rangle T_{u,u'})A\bigr)=\langle v,v'\rangle\operatorname{tr}(T_{u,u'}A)=\langle v,v'\rangle\langle Au,u'\rangle$ by [F1]. Hence the assignment $\operatorname{Tr}_KT_{u\otimes v,u'\otimes v'}:=\langle v,v'\rangle T_{u,u'}$ satisfies the defining identity on rank-one tensors, and $\|\operatorname{Tr}_KT_{u\otimes v,u'\otimes v'}\|_1\le\|v\|\,\|v'\|\,\|u\|\,\|u'\|=\|u\otimes v\|\,\|u'\otimes v'\|$ by [F1]. [given, F1, algebra]

2.1 [Arbitrary rank-one vectors] Fix $w,z\in H\widehat\otimes K$. By density and Countable Choice choose sequences of finite algebraic tensors converging to these two vectors; collect their countably many second-factor vectors and let $K_0$ be their closed linear span. Finite rational complex combinations form an explicit dense sequence in $K_0$, so [F4] provides a finite/countable orthonormal basis $(f_b)$ of $K_0$. The maps taking $\sum_i u_i\otimes v_i$ to $\sum_i\langle v_i,f_b\rangle u_i$ have norm at most one by orthogonal coordinates and extend to the completion. Their values $w_b,z_b\in H$ satisfy $w=\sum_bw_b\otimes f_b$, $z=\sum_bz_b\otimes f_b$ and $\sum_b\|w_b\|^2=\|w\|^2$, $\sum_b\|z_b\|^2=\|z\|^2$: the finite-coordinate projections are contractions, converge on algebraic tensors in $H\odot K_0$, and hence converge on its closure, which contains $w,z$. Define $Q(w,z):=\sum_bT_{w_b,z_b}$. By [F1], [F2] and Cauchy–Schwarz, this converges in trace norm and $\|Q(w,z)\|_1\le\sum_b\|w_b\|\|z_b\|\le\|w\|\|z\|$. Finite-coordinate truncations and step 1.1 give $\operatorname{tr}(Q(w,z)A)=\langle(A\otimes I)w,z\rangle=\operatorname{tr}(T_{w,z}(A\otimes I))$; rank-one trace-norm continuity and bounded tensor maps [F4] pass this identity to limits. The identity uniquely determines $Q(w,z)$ by [F3], so it is independent of the supports, basis and approximants, is sesquilinear in $w,z$, and agrees with the elementary assignment. [step 1.1, F1, F2, F3, F4, choose, construct, algebra]

3.1 [Extension to trace class] For a nuclear representation $T=\sum_jT_{w_j,z_j}$, define $\operatorname{Tr}_KT:=\sum_jQ(w_j,z_j)$. Step 2.1 and [F2] give trace-norm convergence and the bound $\|\operatorname{Tr}_KT\|_1\le\inf\sum_j\|w_j\|\|z_j\|=\|T\|_1$. The defining trace pairing follows by summing that of step 2.1, using trace-norm continuity and $\|A\otimes I\|\le\|A\|$. If two nuclear representations are used, both images have the same pairings against every bounded $A$, and their difference vanishes by [F3]. Thus the definition is independent of representation. The same uniqueness proves linearity, since the sum and scalar multiple of images satisfy the pairing for the sum and scalar multiple of inputs. This proves (a) and the elementary formula (c). [step 2.1, F1, F2, F3, F4, algebra]

4.1 [Positivity and trace preservation] Step 2.1 gives $Q(w,w)=\sum_bT_{w_b,w_b}\ge0$, since $\langle T_{w_b,w_b}x,x\rangle=|\langle x,w_b\rangle|^2\ge0$ and trace-norm convergence implies operator-norm convergence. Every positive trace-class input has a positive spectral rank-one expansion by [[lem-nrqm-composites-density-and-scalar-spectral-probability]]; the same proof applies when its trace is not one, by scaling when nonzero, and the zero input is immediate. The bounded map of step 3.1 carries its partial sums to positive sums of these $Q(w,w)$ and thus carries its limit to a positive operator. Taking $A=I_H$ in the defining pairing gives $\operatorname{tr}\operatorname{Tr}_KT=\operatorname{tr}T$. Hence density operators map to density operators. [step 2.1, step 3.1, F1, F2, algebra]

5.1 [Uniqueness] If two linear maps $\operatorname{Tr}_K,\operatorname{Tr}_K'$ satisfy the defining identity for all $T$ and $A$, then for fixed $T$ the difference $S=\operatorname{Tr}_KT-\operatorname{Tr}_K'T$ satisfies $\operatorname{tr}(SA)=0$ for all bounded $A$, so $S=0$ by [F3]. Hence the map is unique and, in particular, independent of any basis; the symmetrically defined $\operatorname{Tr}_H$ has the stated identity. [step 3.1, F3] ∎
