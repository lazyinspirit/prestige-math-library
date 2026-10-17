---
id: lem-qsm-fock-occupation-basis-and-car-relations
kind: lemma
title: "Occupation bases and actual CCR/CAR domains"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-identical-particle-fock-sectors
  - lem-nrqm-composites-permutation-sector-projections
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-densely-defined-closed-and-closable-operator
  - def-unbounded-linear-operator-domain-and-graph
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_roles:
  def-qsm-identical-particle-fock-sectors: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lecture 22, Hilbert Space of Identical Particles"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/7f26f530bdda5d69c399057bd4b1bd28_MIT8_333F13_Lec22.pdf"
    - title: "David Tong, Statistical Physics, §§3.5.1 and 3.6.1"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Statement

Let $I$ and $\mathcal F_\pm(\ell^2(I))$ be as in
[[def-qsm-identical-particle-fock-sectors]]. Define
$$
\Omega_B:=\{m:I\to\mathbb N_0:m\text{ has finite support}\},\qquad \Omega_F:=\{m:I\to\{0,1\}:m\text{ has finite support}\}.
$$
For either statistics choice, write $|m|=\sum_jm_j$. If $m\in\Omega_B$, choose the elementary tensor $x_m$ containing $m_j$ copies of each mode $j$ in the fixed order and set
$$
|m\rangle_B:=\sqrt{\frac{|m|!}{\prod_jm_j!}}\,P_+^{(|m|)}x_m.
$$
If $m\in\Omega_F$, list its occupied modes increasingly in the fixed enumeration, let $x_m$ be their elementary tensor and set
$$
|m\rangle_F:=\sqrt{|m|!}\,P_-^{(|m|)}x_m.
$$
For $|m|=0$, both vectors are the vacuum. These vectors form orthonormal bases and define unitary identifications $\mathcal F_+(\ell^2(I))\cong\ell^2(\Omega_B)$ and $\mathcal F_-(\ell^2(I))\cong\ell^2(\Omega_F)$.

On the finite-support span $\mathcal D_{\rm fin}$ of the bosonic basis, define
$$
a_j|m\rangle_B=\sqrt{m_j}|m-\mathbf1_j\rangle_B,\qquad a_j^\dagger|m\rangle_B=\sqrt{m_j+1}|m+\mathbf1_j\rangle_B,
$$
where the annihilation term is zero when $m_j=0$. Their maximal closed extensions have domains
$$
D(a_j)=\left\{c:\sum_{m\in\Omega_B}m_j|c_m|^2<\infty\right\},\qquad D(a_j^\dagger)=\left\{c:\sum_{m\in\Omega_B}(m_j+1)|c_m|^2<\infty\right\},
$$
and $a_j^\dagger=a_j^*$. On $\mathcal D_{\rm fin}$, they satisfy
$[a_i,a_j^\dagger]=\delta_{ij}I$, $[a_i,a_j]=0$, and $[a_i^\dagger,a_j^\dagger]=0$.

On the fermionic basis define
$$
c_j|m\rangle_F=(-1)^{\sum_{i<j}m_i}m_j|m-\mathbf1_j\rangle_F,\qquad c_j^\dagger|m\rangle_F=(-1)^{\sum_{i<j}m_i}(1-m_j)|m+\mathbf1_j\rangle_F.
$$
These operators are bounded on the full fermionic Fock space and satisfy
$\{c_i,c_j^\dagger\}=\delta_{ij}I$ and $\{c_i,c_j\}=\{c_i^\dagger,c_j^\dagger\}=0$. These are mathematical sector relations; they do not select a physical species or imply a spin-statistics theorem.

## Facts & Assumptions

**Given:** the Fock spaces, completed tensor powers, projections, coordinate basis and fixed enumeration in [[def-qsm-identical-particle-fock-sectors]].

[F1] [[def-qsm-identical-particle-fock-sectors]], Definition: the product tensors form a complete orthonormal family in each tensor power, the sector projections are orthogonal, and the Fock space is the square-summable direct sum of their ranges.

[F2] [[lem-nrqm-composites-permutation-sector-projections]], Statement (b)–(d): symmetrizing and antisymmetrizing by the finite permutation averages gives the indicated orthogonal sectors, and an antisymmetrized elementary tensor with a repeated factor is zero.

[F3] [[def-adjoint-of-a-densely-defined-unbounded-operator]]: a vector lies in the adjoint domain exactly when the adjoint pairing on the dense domain is bounded; testing on basis vectors determines its adjoint coordinates. [[def-densely-defined-closed-and-closable-operator]]: a closed operator is determined by its graph, and graph-norm truncations give a core.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the inner-product and square-sum pairings satisfy Cauchy–Schwarz.

## Proof



1.1 Let $n=|m|$. In the bosonic permutation average $P_+^{(n)}x_m$, each distinct product word with occupation profile $m$ occurs $\prod_jm_j!$ times out of $n!$ permutations. Therefore $$ P_+^{(n)}x_m=\frac{\prod_jm_j!}{n!}\sum_{w\in\mathcal W(m)}w, \qquad |\mathcal W(m)|=\frac{n!}{\prod_jm_j!}. $$ The product words are orthonormal by [F1], so the squared norm of this average is $\prod_jm_j!/n!$; the prefactor in $|m\rangle_B$ makes its norm one. Distinct occupation profiles have disjoint word supports, hence their vectors are orthogonal. [given, F1, algebra]

1.2 If a fermionic list repeats a mode, [F2] makes its antisymmetrization zero; $\Omega_F$ excludes these profiles. For distinct occupied modes, the $n!$ permuted product words are distinct orthonormal vectors with coefficients $\pm1/n!$, so $\|P_-^{(n)}x_m\|^2=1/n!$. The prefactor $\sqrt{n!}$ normalizes the vector. Distinct occupied subsets have disjoint product-word support and are orthogonal. [given, F1, F2, algebra]

1.3 The fixed enumeration identifies a finite-support configuration with a finite sequence of natural indices and finitely many nonnegative integer labels (or bits); the union over all finite sequence lengths is countable. Thus $\Omega_B$ and $\Omega_F$ are countable and their $\ell^2$ coordinate descriptions are well defined. [given, algebra]

1.4 On the bosonic basis, shifting the coordinate index gives $\|a_jc\|^2=\sum_m m_j|c_m|^2$ and $\|a_j^\dagger c\|^2=\sum_m(m_j+1)|c_m|^2$. Hence the stated weighted domains are exactly the domains on which the shifted coefficient sequences lie in $\ell^2$. If $c^{(r)}\to c$ and either shifted sequence converges in $\ell^2$, coordinate convergence shows the limiting output has the same weighted-shift coordinates; its square summability puts $c$ in the displayed domain. Thus both maximal shifts are closed. Testing the adjoint identity against each basis vector forces the reverse weighted shift [F3], while Cauchy--Schwarz gives the converse pairing bound [F4]. Truncating to finite initial sets of configurations makes the weighted tails tend to zero in graph norm, so $\mathcal D_{\rm fin}$ is a core for both shifts under the graph definition in [F3]. [given, F3, F4, algebra]

2.1 Product words span a dense subspace of each tensor power by [F1]. Applying the bounded projections $P_\pm^{(n)}$ to that dense span gives a dense subspace of each projected sector. Every projected product word is either zero or a scalar multiple of the corresponding occupation vector from steps 1.1–1.2. Thus the occupation vectors are complete in each sector and, after taking the direct sum over $n$, form orthonormal bases of the Fock spaces. [step 1.1, step 1.2, F1, algebra]

2.2 For $i=j$, direct action on $|m\rangle_B$ gives $a_ja_j^\dagger|m\rangle_B=(m_j+1)|m\rangle_B$ and $a_j^\dagger a_j|m\rangle_B=m_j|m\rangle_B$. For $i\ne j$, both orders of distinct coordinate shifts give the same coefficient and same occupation vector, so the shifts commute; the same direct coordinate calculation applies to two annihilators and two creators. This proves the CCR on $\mathcal D_{\rm fin}$, without asserting that unbounded commutators are defined on all Fock space. [step 1.4, algebra]

3.1 Each fermionic shift maps a subset of an orthonormal basis into another orthonormal subset with coefficients of modulus at most one, so it is a contraction on the finite span and extends boundedly. For distinct $i,j$, the two orders in any CAR anticommutator are either both zero or have equal magnitudes and opposite signs: toggling the earlier mode changes by one the number of occupied modes preceding the later index. For $i=j$, if $m_j=0$ then $c_jc_j^\dagger|m\rangle_F=|m\rangle_F$ and $c_j^\dagger c_j|m\rangle_F=0$; if $m_j=1$ the roles reverse. The other same-mode anticommutators vanish. Thus all CAR identities hold on the basis span and extend by boundedness to the whole Fock space. [given, step 1.2, algebra] ∎
