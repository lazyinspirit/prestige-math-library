---
id: lem-nrqm-composites-permutation-sector-projections
aliases: [nrqm-composites-permutation-sector-projections]
kind: lemma
domain: mathematics
title: "Permutation sector projections on the n-fold tensor power"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, def-finite-symmetric-group-and-permutation-notation, thm-sign-is-a-homomorphism, def-alternating-group, cor-sign-is-the-unique-nontrivial-homomorphism-to-signs, cor-finite-iterated-tensor-products-represent-multilinear-maps, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  def-finite-symmetric-group-and-permutation-notation: mathematical-premise
  thm-sign-is-a-homomorphism: mathematical-premise
  def-alternating-group: mathematical-premise
  cor-sign-is-the-unique-nontrivial-homomorphism-to-signs: mathematical-premise
  cor-finite-iterated-tensor-products-represent-multilinear-maps: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 7 'Identical Particles', pp. 1-10"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products'"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space, $n\ge1$, and $H^{\otimes n}$ the $n$-fold completed tensor power ($H^{\otimes1}:=H$, $H^{\otimes(k+1)}:=H^{\otimes k}\widehat\otimes H$ as in [[lem-nrqm-composites-hilbert-tensor-construction]]). For $v_1,\dots,v_n\in H$ write $v_1\otimes\cdots\otimes v_n\in H^{\otimes n}$ for the iterated elementary tensor.

(a) For every $\pi$ in the symmetric group $S_n$ ([[def-finite-symmetric-group-and-permutation-notation]]) there is a unique unitary $U_\pi\in\mathcal B(H^{\otimes n})$ with

$$U_\pi(v_1\otimes\cdots\otimes v_n)=v_{\pi^{-1}(1)}\otimes\cdots\otimes v_{\pi^{-1}(n)},$$

and $U_\pi U_\sigma=U_{\pi\sigma}$, $U_{\pi}^*=U_{\pi^{-1}}$.

(b) The operators

$$P_+:=\frac1{n!}\sum_{\pi\in S_n}U_\pi,\qquad P_-:=\frac1{n!}\sum_{\pi\in S_n}\operatorname{sgn}(\pi)U_\pi$$

(with $\operatorname{sgn}$ the sign homomorphism, [[thm-sign-is-a-homomorphism]]) are orthogonal projections.

(c) $U_\pi P_+=P_+U_\pi=P_+$ and $U_\pi P_-=P_-U_\pi=\operatorname{sgn}(\pi)P_-$ for every $\pi$; consequently the range of $P_+$ is the subspace of vectors fixed by every $U_\pi$, and the range of $P_-$ is the subspace of vectors transforming by $\operatorname{sgn}$.

(d) If $v_1,\dots,v_n$ are not pairwise distinct in the sense that $v_i=v_j$ for some $i\ne j$, then $P_-(v_1\otimes\cdots\otimes v_n)=0$; in particular, for $n\ge2$, $P_-(u\otimes u\otimes w_3\otimes\cdots\otimes w_n)=0$ for all $u,w_k\in H$.

Selecting the symmetric or antisymmetric sector for a particle species is a physical postulate, not a theorem of this construction; no spin-statistics statement is proved here.

## Facts & Assumptions

**Given:** A complex Hilbert space $H$; $n\ge1$; the tensor powers $H^{\otimes k}$; the symmetric group $S_n$ and its sign homomorphism.

[F1] The completed tensor product construction provides: the algebraic tensor product with bilinear elementary tensors, the inner product with $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle\langle v,v'\rangle$, the dense inclusion, unique orthonormal-coordinate expansions and $\|u\otimes v\|=\|u\|\,\|v\|$ ([[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] Bounded operators $S,T$ extend uniquely to $S\otimes T$ with $\|S\otimes T\|\le\|S\|\,\|T\|$, the adjoint is $S^*\otimes T^*$, and compositions multiply; unitary factors have unitary tensor product ([[lem-nrqm-composites-bounded-tensor-maps]]).

[F3] Any parenthesized iterated tensor product represents multilinear maps: for a multilinear map $\Phi:H^n\to Z$ there is a unique linear $L$ with $L(v_1\otimes\cdots\otimes v_n)=\Phi(v_1,\dots,v_n)$ and different parenthesizations agree ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[F4] $\operatorname{sgn}:S_n\to\{+1,-1\}$ is a homomorphism with $\operatorname{sgn}(\pi\sigma)=\operatorname{sgn}(\pi)\operatorname{sgn}(\sigma)$ and $\operatorname{sgn}(\pi^{-1})=\operatorname{sgn}(\pi)$; $A_n=\ker\operatorname{sgn}$ consists of the even permutations ([[thm-sign-is-a-homomorphism]], [[def-alternating-group]], [[cor-sign-is-the-unique-nontrivial-homomorphism-to-signs]]).

## Proof

1.1 [Permutation isometries on the dense algebraic core] The span of iterated elementary tensors is dense in $H^{\otimes n}$, by induction on the completion construction [F1]. On the algebraic iterated tensor product, the multilinear assignment $(v_1,\ldots,v_n)\mapsto v_{\pi^{-1}(1)}\otimes\cdots\otimes v_{\pi^{-1}(n)}$ induces a linear map by [F3]. It descends isometrically to its image in the completed tensor power: for elementary tensors $v=v_1\otimes\cdots\otimes v_n$ and $w=w_1\otimes\cdots\otimes w_n$, the inner product of their permuted images is $\prod_{k=1}^n\langle v_{\pi^{-1}(k)},w_{\pi^{-1}(k)}\rangle=\prod_{k=1}^n\langle v_k,w_k\rangle=\langle v,w\rangle$ by [F1]. Sesquilinearity gives the same identity for finite linear combinations, so any algebraic relation with zero norm has zero-norm image. The isometry therefore extends uniquely by continuity to $U_\pi$ on the completion. For $n=1$ it is the identity, and the zero Hilbert space is included. [given, F1, F3, construct, algebra]

2.1 [Group law and unitarity] Direct substitution of indices in the elementary formula gives $U_\pi U_\sigma=U_{\pi\sigma}$ and $U_e=I$ on the dense algebraic core; continuity gives these equalities on the whole completion. Thus $U_{\pi^{-1}}U_\pi=I=U_\pi U_{\pi^{-1}}$, so the isometry of step 1.1 is surjective and unitary, with $U_\pi^*=U_{\pi^{-1}}$. Any bounded operator with the same elementary action agrees with this one on a dense span and hence everywhere, proving uniqueness. No choice of permutation word or zeroth tensor power is needed. [step 1.1, F1, F2, algebra]

3.1 [The projections are orthogonal projections] With coefficients $c_+(\pi)=1$ and $c_-(\pi)=\operatorname{sgn}(\pi)$, write $P_\pm:=\frac1{n!}\sum_\pi c_\pm(\pi)U_\pi$ as in the Statement, use $U_\pi U_\sigma=U_{\pi\sigma}$ and reindex $\tau=\pi\sigma$: for $P_+$ this gives $P_+^2=\frac1{(n!)^2}\sum_{\pi,\sigma}U_{\pi\sigma}=\frac1{(n!)^2}\sum_\tau n!\,U_\tau=P_+$, and for $P_-$, since $\sigma=\pi^{-1}\tau$ and by [F4] $\operatorname{sgn}(\pi)\operatorname{sgn}(\sigma)=\operatorname{sgn}(\tau)$, it gives $P_-^2=\frac1{(n!)^2}\sum_{\pi,\sigma}\operatorname{sgn}(\pi)\operatorname{sgn}(\sigma)U_{\pi\sigma}=\frac1{(n!)^2}\sum_\tau n!\,\operatorname{sgn}(\tau)U_\tau=P_-$; moreover $P_\pm^*=\frac1{n!}\sum_\pi c_\pm(\pi)U_{\pi^{-1}}=\frac1{n!}\sum_\tau c_\pm(\tau)U_\tau=P_\pm$ because $U_\pi^*=U_{\pi^{-1}}$ and $\operatorname{sgn}(\pi^{-1})=\operatorname{sgn}(\pi)$ [F4]. Hence $P_\pm$ are orthogonal projections. [step 2.1, F4, algebra]

4.1 [Ranges and transformation laws] For every $\pi$, $U_\pi P_+=\frac1{n!}\sum_\sigma U_{\pi\sigma}=\frac1{n!}\sum_\tau U_\tau=P_+$ and $U_\pi P_-=\frac1{n!}\sum_\sigma\operatorname{sgn}(\sigma)U_{\pi\sigma}=\operatorname{sgn}(\pi)\frac1{n!}\sum_\tau\operatorname{sgn}(\tau)U_\tau=\operatorname{sgn}(\pi)P_-$, using $\operatorname{sgn}(\sigma)\operatorname{sgn}(\pi\sigma)=\operatorname{sgn}(\pi)$ [F4]; by self-adjointness of the projections these identities also hold with the order reversed. Consequently, if $u\in\operatorname{ran}P_+$ then $U_\pi u=P_+u=u$ for all $\pi$, and if $u\in\operatorname{ran}P_-$ then $U_\pi u=\operatorname{sgn}(\pi)u$; conversely $U_\pi u=u$ for all $\pi$ gives $P_+u=u$, and $U_\pi u=\operatorname{sgn}(\pi)u$ for all $\pi$ gives $P_-u=\frac1{n!}\sum_\pi\operatorname{sgn}(\pi)^2u=u$. [step 2.1, step 3.1, F4, algebra]

5.1 [Vanishing on repeated factors] Suppose $v_i=v_j$ for $i\ne j$ and let $\tau$ be the transposition swapping the positions $i,j$. Then $U_\tau(v_1\otimes\cdots\otimes v_n)=v_1\otimes\cdots\otimes v_n$ because the swap exchanges equal vectors. Pairing the terms of the sum defining $n!P_-$ as $\{\pi,\pi\tau\}$ over a set of coset representatives of the subgroup $\{e,\tau\}$ gives, for each pair, $\operatorname{sgn}(\pi)U_\pi v+\operatorname{sgn}(\pi\tau)U_{\pi\tau}v=\operatorname{sgn}(\pi)U_\pi v-\operatorname{sgn}(\pi)U_\pi U_\tau v=0$ by $U_{\pi\tau}=U_\pi U_\tau$ and $U_\tau v=v$. Hence $P_-v=0$ for $v=v_1\otimes\cdots\otimes v_n$ with a repeated factor. [step 2.1, step 3.1, F4, algebra] ∎
