---
id: cex-nrqm-composites-selective-conditioning-counterexample
aliases: [nrqm-composites-example-selective-conditioning-counterexample]
kind: counterexample
domain: mathematics
title: "Selective-conditioning counterexample"
status: draft
origin: pipeline
dependency_level: 5
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-nrqm-composites-finite-partial-trace-and-schmidt, lem-nrqm-composites-local-trace-preserving-no-signalling]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-nrqm-composites-finite-partial-trace-and-schmidt: mathematical-premise
  lem-nrqm-composites-local-trace-preserving-no-signalling: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §6.3 pp. 121-128"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4 'Dirac's Bra and Ket Notation'"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
---

## Statement refuted

**False claim:** for every density operator $\rho$ on a tensor product $H\otimes K$ of finite-dimensional complex inner product spaces and every finite local family $(M_a)$ on $K$ with $\sum_aM_a^*M_a=I_K$, the conditional reduced state on $H$ after the outcome $a$ is again $\operatorname{Tr}_K\rho$ whenever its probability is positive.

The claim confuses the *nonselective* identity $\operatorname{Tr}_K\bigl(\sum_a(I\otimes M_a)\rho(I\otimes M_a^*)\bigr)=\operatorname{Tr}_K\rho$ of [[lem-nrqm-composites-local-trace-preserving-no-signalling]] with the corresponding statement for one selected outcome. The Bell state of two qubits and one outcome of a Lüders measurement on the second factor refute the selective claim.
## Facts & Assumptions

**Given:** $H=K=\mathbb C^2$ with orthonormal bases $(e_+,e_-)$; the unit vector $\Psi=\frac{1}{\sqrt2}(e_+\otimes e_--e_-\otimes e_+)$; the density operator $\rho=T_{\Psi,\Psi}$ with $T_{u,v}x=\langle x,v\rangle u$; the rank-one projections $P_0:=T_{e_-,e_-}$ and $P_1:=T_{e_+,e_+}=I_K-P_0$ on $K$.

[L1] On $H\otimes K$ the pairing is $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle_H\langle v,v'\rangle_K$; the four tensors $e_\pm\otimes e_\pm$ form an orthonormal basis, $\|\Psi\|^2=1$, and $\rho=T_{\Psi,\Psi}$ is a density operator with $\operatorname{tr}\rho=1$ ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]](a)); a partial trace $\operatorname{Tr}_K$ is the unique linear map with $\operatorname{tr}((\operatorname{Tr}_KT)A)=\operatorname{tr}(T(A\otimes I_K))$, it is linear, and $\operatorname{Tr}_WT_{\Phi,\Phi}=CC^*$ for the coefficient map $C$ of $\Phi$ ([[thm-nrqm-composites-finite-partial-trace-and-schmidt]](a),(b)).

[L2] $\operatorname{Tr}_W$ is linear, and for endomorphisms $M_a$ of $W$ with $\sum_aM_a^*M_a=I_W$ the nonselective sum satisfies $\operatorname{Tr}_W\bigl(\sum_a(I\otimes M_a)R(I\otimes M_a^*)\bigr)=\operatorname{Tr}_WR$ for every endomorphism $R$; the lemma covers only the nonselective sum and says nothing about one selected summand ([[thm-nrqm-composites-finite-partial-trace-and-schmidt]](d), [[lem-nrqm-composites-local-trace-preserving-no-signalling]]).

[L3] The refuted claim: for every unit $\Psi$ and every outcome $a$ of a local family $(M_a)$ with $\sum_aM_a^*M_a=I$, the conditional reduced state $\operatorname{Tr}_K\bigl((I\otimes M_a)\rho(I\otimes M_a^*)\bigr)/\operatorname{tr}\bigl((I\otimes M_a)\rho(I\otimes M_a^*)\bigr)$ equals $\operatorname{Tr}_K\rho$ whenever the probability is positive.

## Counterexample

1.1 [The instrument] On $K$ take the self-adjoint projections $M_0:=P_0=T_{e_-,e_-}$ and $M_1:=P_1=T_{e_+,e_+}$, so that $M_a^*M_a=P_a$ for $a=0,1$ and $\sum_aM_a^*M_a=P_0+P_1=I_K$: this is the stipulated Lüders instrument for the sharp observable $P_0$. Its outcome-$0$ non-normalized conditional operator on $H\otimes K$ is $(I\otimes P_0)\rho(I\otimes P_0)$. [L1, algebra]

2.1 [The selected outcome] Since $I\otimes P_0$ keeps $e_+\otimes e_-$ and annihilates $e_-\otimes e_+$, one has $(I\otimes P_0)\Psi=\frac{1}{\sqrt2}e_+\otimes e_-$, so the outcome probability is $\operatorname{tr}\bigl((I\otimes P_0)\rho(I\otimes P_0)\bigr)=\|(I\otimes P_0)\Psi\|^2=\frac12>0$, and the non-normalized conditional operator is $\frac12\,T_{e_+,e_+}\otimes T_{e_-,e_-}$, whose coefficient map in the basis $(e_+,e_-)$ of the second factor has matrix $\frac{1}{\sqrt2}\begin{pmatrix}0&1\\0&0\end{pmatrix}$; normalizing, the conditional state on $H\otimes K$ is $T_{e_+,e_+}\otimes T_{e_-,e_-}$. [step 1.1, L1, algebra]

3.1 [The conditional reduced state differs] By [L1], the conditional reduced state on $H$ is $\operatorname{Tr}_K\bigl(T_{e_+,e_+}\otimes T_{e_-,e_-}\bigr)=T_{e_+,e_+}$, whereas the unconditional reduced state is $\operatorname{Tr}_K\rho=CC^*$ for the coefficient matrix $C=\frac{1}{\sqrt2}\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ of $\Psi$, that is $\operatorname{Tr}_K\rho=\frac12 I_H$; these differ, since $\langle T_{e_+,e_+}e_+,e_+\rangle=1\ne\frac12=\langle\frac12 I_He_+,e_+\rangle$. Hence the selective conditional reduced state is not the unconditional one, and the claim of [L3] fails for this unit vector and instrument. [step 2.1, L1, algebra]

4.1 [The nonselective identity still holds] The outcome-$1$ summand is $(I\otimes P_1)\rho(I\otimes P_1)=(I\otimes P_1)T_{\Psi,\Psi}(I\otimes P_1)$, and $(I\otimes P_1)\Psi=-\frac{1}{\sqrt2}e_-\otimes e_+$, so this summand equals $\frac12T_{e_-,e_-}\otimes T_{e_+,e_+}$ and its reduced state on $H$ is $\frac12T_{e_-,e_-}$; adding both summands and using the linearity of $\operatorname{Tr}_K$ [L2] gives $\operatorname{Tr}_K\bigl(\sum_a(I\otimes M_a)\rho(I\otimes M_a^*)\bigr)=\frac12T_{e_+,e_+}+\frac12T_{e_-,e_-}=\frac12 I_H=\operatorname{Tr}_K\rho$, in agreement with the nonselective identity of [L2]. The refuted claim is thus exactly the illegitimate replacement of that nonselective identity by its selective counterpart. [step 3.1, L2, algebra] ∎
