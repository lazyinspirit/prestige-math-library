---
id: lem-nrqm-composites-bounded-tensor-maps
aliases: [nrqm-composites-bounded-tensor-maps]
kind: lemma
domain: mathematics
title: "Bounded tensor maps: extension, norm estimate, adjoint and commutation"
status: draft
origin: pipeline
dependency_level: 1
deps: [lem-nrqm-composites-hilbert-tensor-construction, thm-extension-of-a-bounded-map-from-a-dense-subspace, def-bounded-linear-operator, def-operator-norm, def-hilbert-space-adjoint, thm-hilbert-adjoint-properties, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §1.4 pp. 45-47 (tensor products of operators)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §1 pp. 1-4"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H,H',K,K'$ be complex Hilbert spaces and let $S\in\mathcal B(H,H')$, $T\in\mathcal B(K,K')$ be bounded linear operators ([[def-bounded-linear-operator]]). Write $H\widehat\otimes K$ for the completion of the algebraic tensor product constructed in [[lem-nrqm-composites-hilbert-tensor-construction]], with inclusion $\kappa$.

(a) There is a unique bounded linear operator $S\otimes T: H\widehat\otimes K\to H'\widehat\otimes K'$ with $(S\otimes T)\kappa(u\otimes v)=\kappa'(Su\otimes Tv)$ for all $u\in H$, $v\in K$, and it satisfies $\|S\otimes T\|\le\|S\|\,\|T\|$ ([[def-operator-norm]]).

(b) For Hilbert spaces $H'',K''$ and bounded $S':H''\to H$, $T':K''\to K$, one has $(S\otimes T)(S'\otimes T')=(SS')\otimes(TT')$. In particular, for endomorphisms $S:H\to H$, $T:K\to K$, the endomorphisms $S\otimes I_K$ and $I_H\otimes T$ commute and their composite is $S\otimes T$.

(c) The Hilbert adjoint ([[def-hilbert-space-adjoint]]) is $(S\otimes T)^*=S^*\otimes T^*$.

(d) If $S,T$ are unitary, then so is $S\otimes T$. No extension of unbounded maps, and no algebraic manipulation of domains of unbounded operators, is asserted.

## Facts & Assumptions

**Given:** Complex Hilbert spaces $H,H',K,K'$; bounded operators $S\in\mathcal B(H,H')$, $T\in\mathcal B(K,K')$; in (b), composable $S':H''\to H$, $T':K''\to K$; the completions $H\widehat\otimes K$, $H'\widehat\otimes K'$ of [[lem-nrqm-composites-hilbert-tensor-construction]] with inclusions $\kappa,\kappa'$; the elementary tensors $u\otimes v$.

[F1] The construction of [[lem-nrqm-composites-hilbert-tensor-construction]] gives: the algebraic tensor product $H\odot K$ with $u\otimes v$ bilinear; a positive definite inner product with $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle_H\langle v,v'\rangle_K$; the completion $H\widehat\otimes K$ with dense inclusion $\kappa$; unique orthonormal-coordinate expansions with $\|\sum_{a,b}c_{ab}e_a\otimes f_b\|^2=\sum_{a,b}|c_{ab}|^2$ for orthonormal families $(e_a)\subseteq H$, $(f_b)\subseteq K$ spanning finite-dimensional subspaces; and $\|\kappa(u\otimes v)\|=\|u\|\,\|v\|$.

[F2] If $X$ is a normed space, $D\subseteq X$ a dense normed subspace, $Y$ a Banach space and $L:D\to Y$ bounded linear, then $L$ has a unique bounded linear extension to $X$ of the same norm ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

[F3] A linear map is bounded exactly when it admits a finite bound $\|Lx\|\le C\|x\|$, and the operator norm is the least such bound ([[def-bounded-linear-operator]], [[def-operator-norm]]).

[F4] The Hilbert adjoint $L^*$ of a bounded operator $L\in\mathcal B(X,Y)$ is the unique bounded operator with $\langle Lx,y\rangle_Y=\langle x,L^*y\rangle_X$ for all $x\in X$, $y\in Y$; it satisfies $(L_1L_2)^*=L_2^*L_1^*$, $L^{**}=L$ and $\|L^*\|=\|L\|$ ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

## Proof

1.1 [The bilinear extension on the algebraic tensor product] Put $R_0(u\otimes v):=\kappa'(Su\otimes Tv)$ and extend $\mathbb C$-linearly to finite sums. This is well defined and $\mathbb C$-linear on $H\odot K$ because $(u,v)\mapsto Su\otimes Tv$ is $\mathbb C$-bilinear, composition of the linear maps $S,T$ with the bilinear tensor map; thus $R_0$ is the unique linear map on $H\odot K$ with $R_0(u\otimes v)=\kappa'(Su\otimes Tv)$. [given, F1, algebra]

2.1 [One-sided norm estimates] Let $z=\sum_{i=1}^n u_i\otimes v_i\in H\odot K$. Let $V_0=\operatorname{span}\{v_i\}$ and let $f_1,\dots,f_q$ be an orthonormal basis of $V_0$; grouping the expansion of each $v_i$ in this basis gives $z=\sum_{b=1}^q u_b\otimes f_b$ with $u_b\in\operatorname{span}\{u_i\}$. By the norm formula of [F1] and $\|Su_b\|\le\|S\|\,\|u_b\|$, $\|(S\otimes I)z\|^2=\sum_{b}\|Su_b\|^2\le\|S\|^2\sum_b\|u_b\|^2=\|S\|^2\|z\|^2$, so the map $S\otimes I_K$ on elementary tensors is bounded with norm at most $\|S\|$; symmetrically $\|(I_H\otimes T)z\|\le\|T\|\,\|z\|$. Hence $\|R_0z\|\le\|S\|\,\|T\|\,\|z\|$ for all $z\in H\odot K$, because $R_0$ is the composite of the two one-sided maps on elementary tensors and the estimates compose. [step 1.1, F1, F3, algebra]

3.1 [Extension to the completions] By [F2] applied to the dense subspace $H\odot K$ of $H\widehat\otimes K$ and the Banach space $H'\widehat\otimes K'$, the map $R_0$ has a unique bounded linear extension $S\otimes T:H\widehat\otimes K\to H'\widehat\otimes K'$ of the same norm; by step 2.1 its norm is at most $\|S\|\,\|T\|$, and uniqueness also shows that $(S\otimes T)\kappa=R_0$. This is clause (a). [step 1.1, step 2.1, F2]

4.1 [Products and commutation] For $u\otimes v$ one has $(S\otimes T)(S'\otimes T')(u\otimes v)=\kappa'(SS'u\otimes TT'v)=(SS'\otimes TT')(u\otimes v)$; the two maps are bounded and agree on the dense subspace $H\prime\prime\odot K\prime\prime$, hence everywhere by uniqueness of bounded extensions, giving the first identity of (b) for elementary tensors in $H\prime\prime\odot K\prime\prime$. In the endomorphism case, taking $T'=I_K$, $S'=I_H$ and using $I\otimes I=I$ shows $(S\otimes I_K)(I_H\otimes T)=S\otimes T$; applying the same identity with the roles exchanged gives $(I_H\otimes T)(S\otimes I_K)=S\otimes T$, since $SI_H=S$ and $I_K T=T$. [step 3.1, F2, algebra]

4.2 [Adjoint] For $u\in H$, $u'\in H'$ and $v\in K$, $v'\in K'$, $\langle (S\otimes T)\kappa(u\otimes v),\kappa'(u'\otimes v')\rangle=\langle Su,u'\rangle_{H'}\langle Tv,v'\rangle_{K'}=\langle u,S^*u'\rangle_H\langle v,T^*v'\rangle_K=\langle\kappa(u\otimes v),(S^*\otimes T^*)\kappa'(u'\otimes v')\rangle$, using [F4] and the pairing formula of [F1]. Both sides are sesquilinear in the elementary tensors and continuous in each argument, and the elementary tensors span a dense subspace, so the identity holds on all of $H\widehat\otimes K\times H'\widehat\otimes K'$; by the uniqueness in [F4], $(S\otimes T)^*=S^*\otimes T^*$. [step 3.1, F1, F4, algebra]

5.1 [Unitary case] If $S,T$ are unitary then $S^*S=I$, $SS^*=I$, $T^*T=I$, $TT^*=I$, so by steps 4.1 and 4.2 $(S\otimes T)^*(S\otimes T)=S^*S\otimes T^*T=I\otimes I=I$ and likewise $(S\otimes T)(S\otimes T)^*=I$, whence $S\otimes T$ is unitary. [step 4.1, step 4.2, algebra] ∎
