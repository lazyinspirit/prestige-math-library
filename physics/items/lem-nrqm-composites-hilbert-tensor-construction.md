---
id: lem-nrqm-composites-hilbert-tensor-construction
aliases: [nrqm-composites-hilbert-tensor-construction]
kind: lemma
domain: mathematics
title: "Hilbert tensor construction: inner product, completion and product bases"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-tensor-product-of-modules-by-generators-and-relations, thm-completion-of-an-inner-product-space-is-hilbert, def-completion-of-a-normed-space, def-real-and-complex-inner-product-space, def-hilbert-space, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthogonality-and-orthogonal-complement, cor-inner-product-induces-a-norm, def-countable-choice]
dependency_roles:
  def-tensor-product-of-modules-by-generators-and-relations: mathematical-premise
  thm-completion-of-an-inner-product-space-is-hilbert: mathematical-premise
  def-completion-of-a-normed-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §1.4 pp. 45-47 (tensor construction and product bases)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', PDF pp. 1-12"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H,K$ be complex Hilbert spaces with the pairing linear in the first argument ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]). Regard $H$ as a right $\mathbb C$-module by $u\cdot c:=cu$ and $K$ as a left $\mathbb C$-module by $c\cdot v:=cv$. Write $H\odot K$ for the complex vector space of [[def-tensor-product-of-modules-by-generators-and-relations]] applied to these modules: its underlying abelian group is the quotient $F/H_0$ of that definition, the class of $e_{(u,v)}$ is written $u\otimes v$, every element of $H\odot K$ is a finite sum of elementary tensors $u\otimes v$, and the defining relations make $(u,v)\mapsto u\otimes v$ $\mathbb C$-bilinear. Define, for finite sums,

$$\Bigl\langle\sum_i u_i\otimes v_i,\ \sum_j u'_j\otimes v'_j\Bigr\rangle:=\sum_{i,j}\langle u_i,u'_j\rangle_H\,\langle v_i,v'_j\rangle_K .$$

Then:

(a) *well-definedness and sesquilinearity*: the displayed value is independent of the representatives of its two arguments and defines a Hermitian sesquilinear form on $H\odot K$, linear in the first argument and conjugate-linear in the second;

(b) *positive definiteness and orthonormal coordinates*: $\langle z,z\rangle\ge0$ for every $z\in H\odot K$, with $\langle z,z\rangle=0$ exactly for $z=0$; more precisely, if $U_0\subseteq H$ and $V_0\subseteq K$ are finite-dimensional subspaces with orthonormal bases $e_1,\dots,e_p$ and $f_1,\dots,f_q$, then every $z$ in the span of the elementary tensors from $U_0\times V_0$ has a unique expansion $z=\sum_{a,b}c_{ab}\,e_a\otimes f_b$ and $\langle z,z\rangle=\sum_{a,b}|c_{ab}|^2$; in particular the assignment is an inner product on $H\odot K$;

(c) *completion*: the norm completion $(\widehat{H\odot K},\kappa)$ of $H\odot K$ ([[def-completion-of-a-normed-space]]) exists and, with the unique inner product extending the given one, is a complex Hilbert space; $\kappa$ is a linear isometry with dense image, $\|\kappa(u\otimes v)\|=\|u\|\,\|v\|$, and any two completions of $H\odot K$ are identified by a unique surjective linear isometry fixing $H\odot K$ pointwise;

(d) *product bases*: if $(e_a)_{a\in A}$ and $(f_b)_{b\in B}$ are orthonormal families in $H$ and $K$ whose closed linear spans are $H$ and $K$, then $(\kappa(e_a\otimes f_b))_{(a,b)\in A\times B}$ is an orthonormal family in $\widehat{H\odot K}$ whose closed linear span is $\widehat{H\odot K}$; if $A$ and $B$ are countable then $\widehat{H\odot K}$ is separable.

The notation $H\widehat{\otimes}K:=\widehat{H\odot K}$ is used in the rest of this pair. More precisely, if $(Y,\iota)$ and $(Z,j)$ are any two norm completions of $H\odot K$, there is a unique surjective linear isometry $U:Y\to Z$ with $U\circ\iota=j$. No assertion is made about unbounded operators or algebraic sums of non-completed tensor products.

## Facts & Assumptions

**Given:** Complex Hilbert spaces $H,K$ with pairing linear in the first argument; the algebraic tensor product $H\odot K$ of [[def-tensor-product-of-modules-by-generators-and-relations]] over $R=\mathbb C$; the displayed sesquilinear form; finite sums of elementary tensors.

[F1] The tensor product $M\otimes_RN$ is the quotient of the free $\mathbb Z$-module $F=\mathbb Z^{(M\times N)}$ by the subgroup generated by $e_{(m+m',n)}-e_{(m,n)}-e_{(m',n)}$, $e_{(m,n+n')}-e_{(m,n)}-e_{(m,n')}$ and $e_{(mr,n)}-e_{(m,rn)}$; its elements are the cosets $m\otimes n$, every tensor is a finite sum of elementary tensors, the relations $(m+m')\otimes n=m\otimes n+m'\otimes n$, $m\otimes(n+n')=m\otimes n+m\otimes n'$ and $(mr)\otimes n=m\otimes(rn)$ hold, and $0\otimes n=0=m\otimes0$ ([[def-tensor-product-of-modules-by-generators-and-relations]]).

[F2] A completion of a normed space $X$ is a pair $(\widehat X,\iota)$ with $\widehat X$ Banach, $\iota:X\to\widehat X$ a linear isometry and $\iota[X]$ dense; and if $X$ is an inner product space, its norm completion carries a unique inner product extending the given one whose induced length is the completion norm, making it a Hilbert space ([[def-completion-of-a-normed-space]], [[thm-completion-of-an-inner-product-space-is-hilbert]]).

[F3] The inner product conventions of the library are: linear in the first argument, conjugate-linear in the second, positive definite, and the induced length is $\|v\|=\langle v,v\rangle^{1/2}$ ([[def-real-and-complex-inner-product-space]], [[cor-inner-product-induces-a-norm]]).

[F4] Every finite-dimensional complex inner product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F5] For an orthonormal family $(g_i)_{i\in I}$ in a Hilbert space the finite partial sums $P_Fx=\sum_{i\in F}\langle x,g_i\rangle g_i$ converge to $x$ for every $x$ exactly when the closed linear span of the family is the whole space ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F6] In a complex inner product space, $|\langle x,y\rangle|\le\|x\|\,\|y\|$, and $\|x\|=0$ implies $x=0$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-orthogonality-and-orthogonal-complement]]).

## Proof

**Proof technique:** direct: descend the coordinate functionals through the defining relations, verify the sesquilinear form and its positive definiteness in orthonormal coordinates of the finite-dimensional factor spans, complete, and extend the product-basis density by the norm estimate for elementary products.

1.1 [The quotient is a complex vector space] Since $\mathbb C$ is commutative, for each $c\in\mathbb C$ the $\mathbb Z$-linear self-map $L_c$ of $F$ induced by $e_{(u,v)}\mapsto e_{(cu,v)}$ maps every defining generator of $H_0$ to a defining generator: $L_c(e_{(u+u',v)}-e_{(u,v)}-e_{(u',v)})=e_{(cu+cu',v)}-e_{(cu,v)}-e_{(cu',v)}$ is the first relation at $(cu,cu',v)$, the second family is preserved in the same way, and $L_c(e_{(ur,v)}-e_{(u,rv)})=e_{(c(ur),v)}-e_{(cu,rv)}$ is the third relation at $(cu,r,v)$ because $c(ur)=(cu)r$. Hence $L_c[H_0]\subseteq H_0$ and $L_c$ descends to a $\mathbb Z$-linear map of $F/H_0$; because $L_cL_{c'}=L_{cc'}$ and the actions distribute over the abelian group, $F/H_0$ becomes a $\mathbb C$-vector space with $c\cdot(u\otimes v)=(cu)\otimes v$; the third relation gives $(cu)\otimes v=u\otimes(cv)$, so the quotient is the $\mathbb C$-bilinear tensor product $H\odot K$. [given, F1, algebra]

1.2 [Well-definedness and sesquilinearity] For fixed $(u_0,v_0)$ the map $(u,v)\mapsto\langle u,u_0\rangle_H\langle v,v_0\rangle_K$ is $\mathbb C$-linear on $H\times K$ (both factors are linear in their first argument by [F3]) and vanishes on each generating relation of $H_0$: for the additive relations by bilinearity of the pairings, and for $(ur,v)-(u,rv)$ because $\langle ur,u_0\rangle\langle v,v_0\rangle=\langle u,u_0\rangle\langle rv,v_0\rangle$ holds in the commutative field $\mathbb C$ with the $\mathbb C$-module structures. Hence it descends to a $\mathbb C$-linear functional of the first tensor argument, and the two-variable form descends in its first argument; interchanging the roles and using conjugate symmetry of both pairings gives that it also descends in the second argument and is conjugate-linear there. Finally $\langle z,w\rangle=\overline{\langle w,z\rangle}$ because both factor pairings have this property and complex conjugation is multiplicative. [given, F1, F3, algebra]

2.1 [Positive definiteness and unique orthonormal coordinates] Let $z=\sum_{i=1}^n u_i\otimes v_i$, let $U_0=\operatorname{span}\{u_i\}$ and $V_0=\operatorname{span}\{v_i\}$, and choose orthonormal bases $e_1,\dots,e_p$ of $U_0$ and $f_1,\dots,f_q$ of $V_0$ by [F4]. Write $u_i=\sum_a\alpha_{ia}e_a$ and $v_i=\sum_b\beta_{ib}f_b$; bilinearity of $\otimes$ (step 1.1) gives $z=\sum_{a,b}c_{ab}e_a\otimes f_b$ with $c_{ab}=\sum_i\alpha_{ia}\beta_{ib}$. By the defining formula of the Statement and orthonormality, $\langle z,z\rangle=\sum_{a,b,c,d}c_{ab}\overline{c_{cd}}\langle e_a,e_c\rangle\langle f_b,f_d\rangle=\sum_{a,b}|c_{ab}|^2\ge0$. If $z=0$, then this same displayed formula gives $\sum_{a,b}|c_{ab}|^2=\langle z,z\rangle=0$, so every $c_{ab}=0$, because a sum of nonnegative real numbers vanishes only if every term does; conversely, if $c_{ab}=0$ for all $a,b$ then bilinearity gives $z=\sum_{a,b}0\cdot e_a\otimes f_b=0$. Hence $\langle z,z\rangle=0$ exactly when $z=0$, and applying the same argument to the difference of two expansions shows that the coefficients relative to orthonormal families are unique. [step 1.1, step 1.2, F4, F6, algebra]

3.1 [Completion and the norm of elementary tensors] By steps 1.2 and 2.1, $(H\odot K,\langle\cdot,\cdot\rangle)$ is a complex inner product space with induced norm $\|z\|=\langle z,z\rangle^{1/2}$ by [F3]. Its norm completion $(\widehat{H\odot K},\kappa)$ exists by [F2], and by [F2] it carries a unique inner product extending the given one whose induced length is the completion norm; with it $\widehat{H\odot K}$ is a Hilbert space and $\kappa$ is a linear isometry with dense image. The norm of an elementary tensor is $\|\kappa(u\otimes v)\|^2=\langle u\otimes v,u\otimes v\rangle=\langle u,u\rangle_H\langle v,v\rangle_K=\|u\|^2\|v\|^2$, hence $\|\kappa(u\otimes v)\|=\|u\|\,\|v\|$. To prove the completion uniqueness asserted above, let $(Y,\iota)$ and $(Z,j)$ be completions. The rule $\iota(z)\mapsto j(z)$ is a well-defined linear isometry on the dense subspace $\iota[H\odot K]$. For $y\in Y$, choose $z_n\in H\odot K$ with $\iota(z_n)\to y$ and define $U(y):=\lim_n j(z_n)$; the isometry makes $(j(z_n))$ Cauchy and makes this limit independent of the approximating sequence. Thus $U$ is a linear isometry with $U\circ\iota=j$. Its image is closed because $Y$ is complete and contains the dense set $j[H\odot K]$, so it is onto; any two such continuous extensions agree on a dense subspace and hence everywhere. [step 2.1, F2, F3, construct, algebra]

4.1 [Orthonormal family of products] Let $(e_a)_{a\in A}$, $(f_b)_{b\in B}$ be orthonormal with closed linear spans $H$ and $K$. For pairs $(a,b)\ne(a',b')$ at least one index differs, so $\langle\kappa(e_a\otimes f_b),\kappa(e_{a'}\otimes f_{b'})\rangle=\langle e_a,e_{a'}\rangle_H\langle f_b,f_{b'}\rangle_K=0$, and for equal pairs the value is $1$; hence the products are orthonormal in $\widehat{H\odot K}$. [step 3.1, F1, algebra]

5.1 [Density of the product span] Fix $\varepsilon>0$ and $z=\sum_{i=1}^n u_i\otimes v_i\in H\odot K$. By [F5] applied to $(e_a)$ and to $(f_b)$ there are finite sets $A_i\subseteq A$, $B_i\subseteq B$ with $\|u_i-\sum_{a\in A_i}\langle u_i,e_a\rangle e_a\|<\varepsilon/(n(\|v_i\|+1))$ and $\|v_i-\sum_{b\in B_i}\langle v_i,f_b\rangle f_b\|<\varepsilon/(n(\|u_i\|+1))$; write $u_i',v_i'$ for the finite sums and $z'=\sum_i u_i'\otimes v_i'$. Then $z-z'=\sum_i\bigl((u_i-u_i')\otimes v_i+u_i'\otimes(v_i-v_i')\bigr)$, and by the triangle inequality, $\|u_i'\|\le\|u_i\|$ (Bessel, [F5]) and the norm formula of step 3.1, $\|z-z'\|\le\sum_i\bigl(\|u_i-u_i'\|\,\|v_i\|+\|u_i\|\,\|v_i-v_i'\|\bigr)<2\varepsilon$. Hence every element of the dense subspace $\kappa[H\odot K]$ is approximated by finite sums $\sum c_{ab}\kappa(e_a\otimes f_b)$, so the closed linear span of the product family contains $\kappa[H\odot K]$ and therefore coincides with $\widehat{H\odot K}$; by [F5] the family is a complete orthonormal system. If $A$ and $B$ are countable, then $A\times B$ is countable and the closed span of a countable family is separable, so $\widehat{H\odot K}$ is separable. [step 3.1, step 4.1, F5, F6, algebra] ∎
