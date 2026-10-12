---
id: ex-nrqm-orbital-and-spin-example-coupled-triplet-and-singlet
aliases: [nrqm-orbital-and-spin-example-coupled-triplet-and-singlet]
kind: example
domain: mathematics
title: "Coupled triplet and singlet"
status: draft
origin: pipeline
dependency_level: 3
deps: [prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-nrqm-orbital-and-spin-tensor-spin-composition, lem-nrqm-composites-hilbert-tensor-construction, def-matrix-product-and-identity-matrix, def-linear-map, def-linear-subspace, def-inner-product-space, def-hilbert-space, cor-inner-product-induces-a-norm, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-self-adjoint-and-normal-endomorphism, def-countable-choice]
dependency_roles:
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-orbital-and-spin-tensor-spin-composition: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Tensor product' (addition of angular momenta; the 1/2 x 1/2 example with triplet and singlet)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7, §7.4.2 (addition of angular momenta and the two spin-half example)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $V=\mathbb C^2$ carry the orthonormal basis
$(e_+,e_-)$ and let $(J^{(1/2)}_x,J^{(1/2)}_y,J^{(1/2)}_z)$ be the spin-$\tfrac12$ operators of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]], so that $J^{(1/2)}_i=\tfrac12\sigma_i$ and
$J^{(1/2)}_\pm=J^{(1/2)}_x\pm iJ^{(1/2)}_y$ satisfy $J^{(1/2)}_+e_+=0$, $J^{(1/2)}_+e_-=e_+$,
$J^{(1/2)}_-e_+=e_-$ and $J^{(1/2)}_-e_-=0$. On $V\widehat\otimes V$ (inner product of
[[lem-nrqm-composites-hilbert-tensor-construction]]) put, as in
[[thm-nrqm-orbital-and-spin-tensor-spin-composition]],
$$J^{\mathrm{tot}}_i:=J^{(1/2)}_i\otimes I_2+I_2\otimes J^{(1/2)}_i,\qquad J^{\mathrm{tot}}_\pm:=J^{\mathrm{tot}}_x\pm iJ^{\mathrm{tot}}_y,\qquad J^{\mathrm{tot}\,2}:=(J^{\mathrm{tot}}_x)^2+(J^{\mathrm{tot}}_y)^2+(J^{\mathrm{tot}}_z)^2,$$
and define
$$w_{1,1}:=e_+\otimes e_+,\quad w_{1,0}:=\frac{e_+\otimes e_-+e_-\otimes e_+}{\sqrt2},\quad w_{1,-1}:=e_-\otimes e_-,\quad w_{0,0}:=\frac{e_+\otimes e_--e_-\otimes e_+}{\sqrt2}.$$
Then:

(a) $(w_{1,1},w_{1,0},w_{1,-1},w_{0,0})$ is an orthonormal basis of $V\widehat\otimes V$;

(b) the triplet vectors satisfy $J^{\mathrm{tot}}_zw_{1,m}=m\,w_{1,m}$ and $J^{\mathrm{tot}\,2}w_{1,m}=2\,w_{1,m}$
for $m\in\{1,0,-1\}$, while the singlet satisfies $J^{\mathrm{tot}}_iw_{0,0}=0$ for each $i\in\{x,y,z\}$ and
$J^{\mathrm{tot}\,2}w_{0,0}=0$;

(c) the ladder actions on the triplet are $J^{\mathrm{tot}}_+w_{1,1}=0$, $J^{\mathrm{tot}}_+w_{1,0}=\sqrt2\,w_{1,1}$
and $J^{\mathrm{tot}}_+w_{1,-1}=\sqrt2\,w_{1,0}$, together with the adjoint relations
$J^{\mathrm{tot}}_-w_{1,-1}=0$, $J^{\mathrm{tot}}_-w_{1,0}=\sqrt2\,w_{1,-1}$ and
$J^{\mathrm{tot}}_-w_{1,1}=\sqrt2\,w_{1,0}$; hence the correspondence $e_m\leftrightarrow w_{1,m}$ is a unitary
isomorphism of the spin-$1$ model of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] onto the triplet span,
so the orthogonal decomposition of
[[thm-nrqm-orbital-and-spin-tensor-spin-composition]] (b) is here
$V\widehat\otimes V=\operatorname{span}\{w_{1,1},w_{1,0},w_{1,-1}\}\oplus\operatorname{span}\{w_{0,0}\}$
with parameters $j=1$ and $j=0$ and dimensions $3+1=4$, summing to $(2\cdot\tfrac12+1)^2$.

All claims are finite-dimensional linear-algebra statements; no physical interpretation of the vectors as particle
states is asserted.

## Facts & Assumptions

**Given:** the spin-half operators on $V=\mathbb C^2$ with basis $(e_+,e_-)$, the tensor product and the total operators $J^{\mathrm{tot}}_i,J^{\mathrm{tot}}_\pm$, and the four vectors $w_{1,1},w_{1,0},w_{1,-1},w_{0,0}$.

[F1] Spin-half data ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]]): $J^{(1/2)}_z e_\pm=\pm\tfrac12e_\pm$, $J^{(1/2)}_+e_+=0$, $J^{(1/2)}_+e_-=e_+$, $J^{(1/2)}_-e_+=e_-$, $J^{(1/2)}_-e_-=0$, $J^{(1/2)}_\pm=J^{(1/2)}_x\pm iJ^{(1/2)}_y$, the operators $J^{(1/2)}_i$ are self-adjoint, and $J^{(1/2)2}=J^{(1/2)2}_x+J^{(1/2)2}_y+J^{(1/2)2}_z=\tfrac34I_2$.

[F2] Tensor calculus ([[lem-nrqm-composites-hilbert-tensor-construction]], [[def-linear-map]]): $(S\otimes T)(u\otimes v)=(Su)\otimes(Tv)$ on elementary tensors, operators are extended linearly, and $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle\langle v,v'\rangle$; hence the four displayed vectors are pairwise orthogonal with $\|w_{1,1}\|=\|w_{1,-1}\|=1$ and $\|w_{1,0}\|=\|w_{0,0}\|=1$ by direct expansion of the two-term sums; four orthonormal vectors in the four-dimensional space $V\widehat\otimes V$ form an orthonormal basis ([[cor-inner-product-induces-a-norm]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F3] The total operators satisfy $J^{\mathrm{tot}}_z=J^{(1/2)}_z\otimes I_2+I_2\otimes J^{(1/2)}_z$ and $J^{\mathrm{tot}}_\pm=J^{(1/2)}_\pm\otimes I_2+I_2\otimes J^{(1/2)}_\pm$ by bilinearity of the tensor product, and $J^{\mathrm{tot}\,2}=J^{\mathrm{tot}}_-J^{\mathrm{tot}}_++(J^{\mathrm{tot}}_z)^2+J^{\mathrm{tot}}_z=J^{\mathrm{tot}}_+J^{\mathrm{tot}}_-+(J^{\mathrm{tot}}_z)^2-J^{\mathrm{tot}}_z$ by the algebraic identities of [[thm-nrqm-orbital-and-spin-tensor-spin-composition]] (a) (or, directly, of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] (b),(c) applied to the sums).

[F4] Composition theorem ([[thm-nrqm-orbital-and-spin-tensor-spin-composition]] (b),(e)): for $s=t=\tfrac12$ the space $V\widehat\otimes V$ decomposes orthogonally into $J^{\mathrm{tot}}$-invariant summands of dimensions $2j+1$ for $j=0,1$, on each of which the total operators are unitarily equivalent to the spin-$j$ model; the summand with $j=1$ contains the unique (up to phase) unit vector of $J^{\mathrm{tot}}_z$-eigenvalue $1$, and the summand with $j=0$ is the kernel of all three $J^{\mathrm{tot}}_i$.



## Verification

1.1 [(a) orthonormality] By [F2], $\langle w_{1,1},w_{1,0}\rangle=(\langle e_+,e_+\rangle\langle e_+,e_-\rangle+\langle e_+,e_-\rangle\langle e_+,e_+\rangle)/\sqrt2=0$, and similarly for all pairs: the tensors $e_+\otimes e_+$, $e_-\otimes e_-$, $(e_+\otimes e_-+e_-\otimes e_+)/\sqrt2$ and $(e_+\otimes e_--e_-\otimes e_+)/\sqrt2$ are mutually orthogonal of norm $1$ because the four tensors $e_\pm\otimes e_\pm$ are orthonormal and the two combined vectors are orthogonal to them and to each other. Since $\dim(V\widehat\otimes V)=4$ ([[lem-nrqm-composites-hilbert-tensor-construction]]), these four vectors form an orthonormal basis. [F2, algebra]

1.2 [(b) triplet] By [F1] and [F3]: $J^{\mathrm{tot}}_zw_{1,1}=(J^{(1/2)}_ze_+)\otimes e_++e_+\otimes(J^{(1/2)}_ze_+)=\tfrac12w_{1,1}+\tfrac12w_{1,1}=w_{1,1}$; $J^{\mathrm{tot}}_zw_{1,0}=(e_+\otimes\tfrac12e_-+\tfrac12e_-\otimes e_++(-\tfrac12)e_+\otimes e_-+e_-\otimes(-\tfrac12)e_+)/\sqrt2=0$; and $J^{\mathrm{tot}}_zw_{1,-1}=-w_{1,-1}$. Moreover $J^{\mathrm{tot}}_+w_{1,1}=0$ (both terms vanish by [F1]), so $J^{\mathrm{tot}}_-J^{\mathrm{tot}}_+w_{1,1}=0$; hence $J^{\mathrm{tot}\,2}w_{1,1}=0+1+1=2w_{1,1}$ by [F3]. [F1, F3, algebra]

1.3 [(b) singlet] $J^{\mathrm{tot}}_zw_{0,0}=\bigl(\tfrac12e_+\otimes e_-+\tfrac12e_-\otimes e_+-\tfrac12e_+\otimes e_- - \tfrac12e_-\otimes e_+\bigr)/\sqrt2=0$; moreover $J^{\mathrm{tot}}_+w_{0,0}=\bigl(J^{(1/2)}_+e_+\otimes e_-+e_+\otimes J^{(1/2)}_+e_- - J^{(1/2)}_+e_-\otimes e_+ - e_-\otimes J^{(1/2)}_+e_+\bigr)/\sqrt2=(0+e_+\otimes e_+ - e_+\otimes e_+ -0)/\sqrt2=0$ and $J^{\mathrm{tot}}_-w_{0,0}=\bigl(J^{(1/2)}_-e_+\otimes e_-+e_+\otimes J^{(1/2)}_-e_- - J^{(1/2)}_-e_-\otimes e_+ - e_-\otimes J^{(1/2)}_-e_+\bigr)/\sqrt2=(e_-\otimes e_-+0-0-e_-\otimes e_-)/\sqrt2=0$ by [F1] and [F3]. Hence $J^{\mathrm{tot}}_iw_{0,0}=0$ for all $i$, since $J^{\mathrm{tot}}_x=\tfrac12(J^{\mathrm{tot}}_++J^{\mathrm{tot}}_-)$ and $J^{\mathrm{tot}}_y=\tfrac1{2i}(J^{\mathrm{tot}}_+-J^{\mathrm{tot}}_-)$, and consequently $J^{\mathrm{tot}\,2}w_{0,0}=0$. [F1, F3, algebra]

2.1 [(c) ladder] Using [F1] and [F3]: $J^{\mathrm{tot}}_+w_{1,1}=(J^{(1/2)}_+e_+)\otimes e_++e_+\otimes(J^{(1/2)}_+e_+)=0$; $J^{\mathrm{tot}}_+w_{1,0}=[(J^{(1/2)}_+e_+)\otimes e_-+e_+\otimes(J^{(1/2)}_+e_-)+(J^{(1/2)}_+e_-)\otimes e_++e_-\otimes(J^{(1/2)}_+e_+)]/\sqrt2=(0+e_+\otimes e_++e_+\otimes e_++0)/\sqrt2=\sqrt2\,w_{1,1}$; and $J^{\mathrm{tot}}_+w_{1,-1}=[(J^{(1/2)}_+e_-)\otimes e_-+e_-\otimes(J^{(1/2)}_+e_-)]/\sqrt2=(e_+\otimes e_-+e_-\otimes e_+)/\sqrt2=\sqrt2\,w_{1,0}$. Since $J^{\mathrm{tot}}_-=(J^{\mathrm{tot}}_+)^*$ ([F1] self-adjointness and [F3]), the adjoint relations follow: $J^{\mathrm{tot}}_-w_{1,-1}=0$, $J^{\mathrm{tot}}_-w_{1,0}=\sqrt2w_{1,-1}$, $J^{\mathrm{tot}}_-w_{1,1}=\sqrt2w_{1,0}$ (each verified by pairing with the orthonormal basis vectors of step 1.1). Together with step 1.2 this shows that sending $e_m\mapsto w_{1,m}$ carries the spin-$1$ operators of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] to $J^{\mathrm{tot}}_x,J^{\mathrm{tot}}_y,J^{\mathrm{tot}}_z$ on the triplet: the spin-$1$ model has $J_+e_0=\sqrt2e_1$, $J_+e_{-1}=\sqrt2e_0$, $J_+e_1=0$ and $J_ze_m=m e_m$, matching steps 1.2 and this step, and $J_x,J_y$ are recovered from $J_\pm$; the singlet span is orthogonal to the triplet by step 1.1 and is annihilated by all $J^{\mathrm{tot}}_i$ by step 1.3, so this is exactly the decomposition of [F4] for $s=t=\tfrac12$. [step 1.1, step 1.2, step 1.3, F1, F2, F3, F4, algebra] ∎
