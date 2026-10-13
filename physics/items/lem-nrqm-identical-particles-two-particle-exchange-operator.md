---
id: lem-nrqm-identical-particles-two-particle-exchange-operator
aliases: [nrqm-identical-particles-two-particle-exchange-operator]
kind: lemma
domain: mathematics
title: "The two-particle exchange operator and the symmetric and antisymmetric combinations"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, def-countable-choice, def-hilbert-orthogonal-projection, lem-orthogonal-projection-is-linear-self-adjoint-contractive, def-hilbert-space, def-real-and-complex-inner-product-space, def-bounded-linear-operator, def-hilbert-space-adjoint, def-operator-norm]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  lem-orthogonal-projection-is-linear-self-adjoint-contractive: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-operator-norm: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1 printed pages 226-228 (PDF pages 234-236): exchange symmetry of a two-slot amplitude and the symmetric/antisymmetric alternative for the wavefunction"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 7 'Identical Particles', pp. 1-4: the exchange operator, its square, and the symmetric and antisymmetric combinations of a product state; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
      url: "https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space with inner product linear in the first argument
([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]), let
$H\widehat\otimes H$ be its completed tensor square with inclusion $\kappa$
([[lem-nrqm-composites-hilbert-tensor-construction]]), and for $n=2$ let
$(U_\pi)_{\pi\in S_2}$ and the projections $P_\pm^{(2)}$ be those of
[[lem-nrqm-composites-permutation-sector-projections]]. Write
$\tau:=U_{(0\,1)}$ for the **exchange operator**, so that
$\tau\bigl(\kappa(u\otimes v)\bigr)=\kappa(v\otimes u)$ for $u,v\in H$; in the
sequel the inclusion is suppressed and $u\otimes v$ denotes
$\kappa(u\otimes v)$. Then:

(a) $\tau$ is self-adjoint and $\tau^2=I$; consequently $\tau$ is an isometry
with $\tau^{-1}=\tau=\tau^{*}$ ([[def-hilbert-space-adjoint]],
[[def-bounded-linear-operator]]);

(b) $P_+^{(2)}=\tfrac12(I+\tau)$ and $P_-^{(2)}=\tfrac12(I-\tau)$, and
$$\operatorname{ran}P_+^{(2)}=\{x\in H\widehat\otimes H:\tau x=x\},\qquad \operatorname{ran}P_-^{(2)}=\{x\in H\widehat\otimes H:\tau x=-x\};$$

(c) for all $u,v\in H$,
$$\|u\otimes v+v\otimes u\|^{2}=2\bigl(\|u\|^{2}\|v\|^{2}+|\langle u,v\rangle|^{2}\bigr), \qquad \|u\otimes v-v\otimes u\|^{2}=2\bigl(\|u\|^{2}\|v\|^{2}-|\langle u,v\rangle|^{2}\bigr);$$
in particular, if $u,v$ are orthonormal, then
$s:=\tfrac1{\sqrt2}(u\otimes v+v\otimes u)$ and
$a:=\tfrac1{\sqrt2}(u\otimes v-v\otimes u)$ are orthonormal, $\tau s=s$ and
$\tau a=-a$, and both $\operatorname{ran}P_\pm^{(2)}$ are nonzero;

(d) whenever $u,v\in H$ are orthonormal,
$\tau\kappa(u\otimes v)\ne\kappa(u\otimes v)$. Consequently, if $H$
contains an orthonormal pair (equivalently, $\dim H\ge2$), both exchange
eigenspaces contain nonzero vectors and $\tau\ne I$. If $H=\{0\}$ or
$\dim H=1$, then $\tau=I$, $P_+^{(2)}=I$ and $P_-^{(2)}=0$; for $H=\{0\}$
the tensor square and both ranges are zero.

## Facts & Assumptions

**Given:** The complex Hilbert space $H$ with inner product linear in the first argument, the completed tensor square $H\widehat\otimes H$ with inclusion $\kappa$, the permutation unitaries $U_\pi$ for $n=2$ and the projections $P_\pm^{(2)}$, and vectors $u,v\in H$.

[F1] **Tensor square.** $\kappa:H\odot H\to H\widehat\otimes H$ is a linear isometry with dense image, $\kappa(u\otimes v)$ is bilinear in $(u,v)$, $\|\kappa(u\otimes v)\|=\|u\|\,\|v\|$ and $\langle\kappa(u\otimes v),\kappa(u'\otimes v')\rangle=\langle u,u'\rangle\langle v,v'\rangle$ ([[lem-nrqm-composites-hilbert-tensor-construction]] clauses (a)-(d), [[def-real-and-complex-inner-product-space]]).

[F2] **Permutation unitaries.** $U_{(0\,1)}\in\mathcal B(H\widehat\otimes H)$ is the unique bounded operator with $U_{(0\,1)}\kappa(u\otimes v)=\kappa(v\otimes u)$; it is unitary with $U_\pi U_\sigma=U_{\pi\sigma}$ and $U_\pi^{*}=U_{\pi^{-1}}$. For every $\pi\in S_2$, $U_\pi P_+^{(2)}=P_+^{(2)}U_\pi=P_+^{(2)}$ and $U_\pi P_-^{(2)}=P_-^{(2)}U_\pi=\operatorname{sgn}(\pi)P_-^{(2)}$. The orthogonal projections are $P_+^{(2)}=\frac12\sum_{\pi\in S_2}U_\pi$ and $P_-^{(2)}=\frac12\sum_{\pi\in S_2}\operatorname{sgn}(\pi)U_\pi$ ([[lem-nrqm-composites-permutation-sector-projections]] clauses (a)-(c), [[def-countable-choice]]).

[F3] **Orthogonal projections.** An orthogonal projection $P$ satisfies $P^2=P=P^{*}$, and its range is a closed subspace ([[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[F4] **Adjoint and operator norm.** For $T\in\mathcal B(H\widehat\otimes H)$ the Hilbert adjoint $T^{*}$ is the unique bounded operator with $\langle Tx,y\rangle=\langle x,T^{*}y\rangle$, and $T$ is an isometry exactly when $T^{*}T=I$; $\|Tx\|\le\|T\|\,\|x\|$ ([[def-hilbert-space-adjoint]], [[def-operator-norm]], [[def-bounded-linear-operator]]).

## Proof

1.1 [The exchange operator is a self-adjoint involution] By [F2] with $\pi=\sigma=(0\,1)$ one has $\tau^2=U_{(0\,1)(0\,1)}=U_e=I$, and $\tau^{*}=U_{(0\,1)^{-1}}=U_{(0\,1)}=\tau$; hence $\tau^{-1}=\tau=\tau^{*}$ and $\tau$ is an isometry, which is (a). [F2, F4, algebra]

1.2 [The projections in terms of the exchange operator] Since $S_2=\{e,(0\,1)\}$ and $\operatorname{sgn}(e)=1$, $\operatorname{sgn}((0\,1))=-1$, the formulas of [F2] give $P_+^{(2)}=\frac12(U_e+U_{(0\,1)})=\frac12(I+\tau)$ and $P_-^{(2)}=\frac12(U_e-U_{(0\,1)})=\frac12(I-\tau)$, which is the first assertion of (b). [F2, algebra]

2.1 [Eigenspaces as ranges] Let $x\in H\widehat\otimes H$. If $\tau x=x$, then $\frac12(I+\tau)x=x$, so $x\in\operatorname{ran}\frac12(I+\tau)$; conversely if $x=\frac12(I+\tau)y$ for some $y$, then $\tau x=\frac12(\tau y+\tau^2y)=\frac12(\tau y+y)=x$ by step 1.1. Hence the fixed space of $\tau$ is $\operatorname{ran}\frac12(I+\tau)=\operatorname{ran}P_+^{(2)}$ by step 1.2; the same substitution with $x=\frac12(I-\tau)y$ gives $\tau x=-x$, and conversely $\tau x=-x$ implies $x=\frac12(I-\tau)x$, so the $(-1)$-eigenspace is $\operatorname{ran}P_-^{(2)}$. This completes (b). [step 1.1, step 1.2, F3, algebra]

2.2 [Norm identities on products] By [F1] the elementary tensors satisfy $\|u\otimes v\|^{2}=\|u\|^{2}\|v\|^{2}$ and $\langle u\otimes v,v\otimes u\rangle=\langle u,v\rangle\langle v,u\rangle=|\langle u,v\rangle|^{2}$; expanding $\|u\otimes v\pm v\otimes u\|^{2}=\|u\otimes v\|^{2}+\|v\otimes u\|^{2}\pm2\operatorname{Re}\langle u\otimes v,v\otimes u\rangle$ and using that the last number is the real number $|\langle u,v\rangle|^{2}$ gives the two identities of (c). If $u,v$ are orthonormal then $\|u\|=\|v\|=1$ and $\langle u,v\rangle=0$, so $s$ and $a$ have norm one; moreover $\tau s=\frac1{\sqrt2}(v\otimes u+u\otimes v)=s$ and $\tau a=\frac1{\sqrt2}(v\otimes u-u\otimes v)=-a$ by [F2]; and $\langle s,a\rangle=\frac12(\|u\otimes v\|^{2}-\|v\otimes u\|^{2})=0$, so $s,a$ are orthonormal and $s\ne0\ne a$. This proves (c). [F1, F2, step 1.1, algebra]

3.1 [Nonvanishing of the swapped product] Let $u,v$ be orthonormal. Then $u\otimes v$ and $v\otimes u$ are orthonormal in $H\widehat\otimes H$: both have norm one by [F1], and $\langle u\otimes v,v\otimes u\rangle=\langle u,v\rangle\langle v,u\rangle=0$. Hence $v\otimes u\ne u\otimes v$, so $\tau(u\otimes v)\ne u\otimes v$ by [F2]; taking $x:=u\otimes v$ and $x':=s$ and $x'':=a$ from step 2.2 gives nonzero vectors with $\tau x'=x'$ and $\tau x''=-x''$, so $\tau\ne I$. This proves (d). [F1, F2, step 2.2, algebra, construct]

4.1 [Zero and one-dimensional spaces] If $H=\{0\}$, all elementary tensors are zero and their completion is zero, so $\tau=I$ on that space. If $H$ is one-dimensional, fix a unit spanning vector $e$. Every elementary tensor has the form $(\alpha e)\otimes(\beta e)=\alpha\beta(e\otimes e)$ and its swap is $\beta\alpha(e\otimes e)$, the same vector. Hence $\tau=I$ on the dense algebraic tensor space and, by boundedness, on its completion. Step 1.2 then gives $P_+^{(2)}=I$ and $P_-^{(2)}=0$ in both cases. If $\dim H\ge2$, normalize a nonzero vector $u$ and choose $w$ outside its span; the nonzero vector $w-\langle w,u\rangle u$ normalizes to a unit $v$ orthogonal to $u$, so step 3.1 applies. This proves all branches of (d). [F1, F2, step 1.2, step 3.1, choose, algebra]

5.1 [Assembly] Step 1.1 proves (a), steps 1.2 and 2.1 prove (b), step 2.2 proves (c) and steps 3.1 and 4.1 prove (d). Only the cited tensor and permutation mathematics and the Countable Choice hypothesis of [F2] were used; no physical reading of the exchange operator is asserted. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **Why the letter $\tau$.** The operator is the $n=2$ instance of the
  permutation unitaries; the notation $\tau$ matches the exchange operator of
  the source treatments and is used on this pair's pages for the two-particle
  swap.
- **Scope.** The lemma concerns a single Hilbert space and its tensor square;
  it asserts nothing about particles, spin, statistics or dynamics. The
  physical reading of $\tau$ as the exchange of two labelled factors is fixed
  in [[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]
  on the page for the identical-particle model.
