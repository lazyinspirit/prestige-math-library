---
id: lem-heisenberg-group-lagrangian-splitting-and-dual-orbit
kind: lemma
title: Heisenberg group polarization and the fixed-central-character orbit
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-heisenberg-group-of-a-symplectic-vector-space
  - def-symplectic-vector-space
  - prop-symplectic-vector-spaces-have-even-dimension
  - def-group
  - def-action-by-automorphisms
  - def-external-semidirect-product
  - def-product-topology
  - def-locally-compact-space
  - def-second-countable-space
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - lem-duals-of-finite-products-and-discrete-direct-sums
  - def-pontryagin-dual-and-compact-open-topology
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
    - title: "Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem"
      url: "https://arxiv.org/pdf/0912.0574"
---
## Statement



Let $(V,\omega)$ be a finite-dimensional real symplectic vector space, let
$H(V,\omega)$ be [[def-heisenberg-group-of-a-symplectic-vector-space]], and
write $n=\frac12\dim V$. For a symplectic basis, write
$v=(q,p)\in\mathbb R^n\times\mathbb R^n$ so that
$\omega((q,p),(q',p'))=q\cdot p'-p\cdot q'$. Set

$$N:=\{(0,p,t):p\in\mathbb R^n,t\in\mathbb R\},\qquad K:=\{(q,0,0):q\in\mathbb R^n\}.$$
Then $H(V,\omega)$ is a second-countable locally compact group and $H(V,\omega)\cong N\rtimes_\alpha K$, where
$$\alpha_q(p,t)=(p,t-q\cdot p).$$
Its center is $\{(0,0,t):t\in\mathbb R\}$. Every continuous character of $N$ has the form
$$\chi_{a,\mu}(p,t)=e^{i(a\cdot p+\mu t)}\quad(a\in\mathbb R^n,\mu\in\mathbb R).$$
For $\lambda\ne0$, the dual action $q\cdot\chi=\chi\circ\alpha_{-q}$ is free and transitive on
$$\widehat N_\lambda:=\{\chi_{a,\lambda}:a\in\mathbb R^n\};$$
the stabilizer of $\chi_{0,\lambda}$ is trivial and $q\mapsto\chi_{\lambda q,\lambda}$ identifies $K$ with this orbit.

## Facts & Assumptions

**Given:** The finite-dimensional symplectic vector space, its Heisenberg group, and a symplectic basis as above.

[F1] A symplectic form is alternating, bilinear, and nondegenerate ([[def-symplectic-vector-space]]).

[F2] There is a basis $e_1,f_1,\ldots,e_n,f_n$ with $\omega(e_i,f_j)=\delta_{ij}$ and all other cross-pairings zero; in particular $\dim V=2n$ ([[prop-symplectic-vector-spaces-have-even-dimension]]).

[F3] Each continuous character of the additive line is uniquely $t\mapsto e^{2\pi i\xi t}$, and the Pontryagin dual of a finite product of locally compact abelian groups is the product of their duals, with the product topology ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[lem-duals-of-finite-products-and-discrete-direct-sums]]).

[F4] The external semidirect product has multiplication $(n,k)(n',k')=(n\alpha_k(n'),kk')$, and an action by automorphisms obeys $\alpha_{k+k'}=\alpha_k\alpha_{k'}$ ([[def-external-semidirect-product]], [[def-action-by-automorphisms]]).

[F5] The topology on the character group is the compact-open topology, with basic identity conditions of uniform containment on compact sets ([[def-pontryagin-dual-and-compact-open-topology]]).

## Proof



**Proof technique:** direct.

**Given:** The hypotheses in the Statement.

1.1 In coordinates from [F2], bilinearity gives $\omega((q,p),(q',p'))=q\cdot p'-p\cdot q'$. For three vectors $v,w,u$,$\omega(v,w)+\omega(v+w,u)=\omega(v,w)+\omega(v,u)+\omega(w,u) =\omega(w,u)+\omega(v,w+u).$Thus $c(v,w)=-\frac12\omega(v,w)$ satisfies the normalized 2-cocycle identity $c(v,w)+c(v+w,u)=c(w,u)+c(v,w+u)$. Substitution in the group law proves associativity; $\omega(v,0)=\omega(0,v)=0$ gives identity $(0,0)$, and $\omega(v,-v)=0$ gives inverse $(-v,-t)$. Addition and $\omega$ are continuous, so multiplication and inverse are continuous. The underlying finite-dimensional Euclidean space $V\times\mathbb R$ is locally compact and second countable. [F1, F2, algebra]

2.1 An element $(v,t)$ commutes with every $(w,0)$ exactly when $\omega(v,w)=0$ for all $w$. Nondegeneracy in [F1] forces $v=0$, and each $(0,t)$ is central by the product formula. Hence the center is the displayed central coordinate. The projection $(v,t)\mapsto v$ is onto with kernel $\{(0,t):t\in\mathbb R\}$, proving exactness of the central extension in the definition. [F1, step 1.1]

2.2 For $q\in K$ and $(p,t)\in N$, direct multiplication gives $(q,0,0)(0,p,t)(-q,0,0)=(0,p,t-q\cdot p)$; thus $\alpha_q(p,t)=(p,t-q\cdot p)$. This is an automorphism because it is additive, has inverse $\alpha_{-q}$, and $\alpha_{q+q'}=\alpha_q\alpha_{q'}$. Every group element has the unique factorization$(q,p,z)=(0,p,z-q\cdot p/2)(q,0,0).$Therefore $(n,q)\mapsto n(q,0,0)$ is a bijection from the semidirect product of [F4] to $H(V,\omega)$; the conjugation computation makes it a homomorphism. Its coordinate formula and inverse are continuous, so it is a topological group isomorphism. [F2, F4, step 1.1]

3.1 Apply [F3] to $N\cong\mathbb R^{n+1}$. Rescaling the coordinates by $2\pi$ gives every character exactly once as $\chi_{a,\mu}(p,t)=e^{i(a\cdot p+\mu t)}$. Since $\alpha_{-q}(p,t)=(p,t+q\cdot p)$, composition yields$q\cdot\chi_{a,\mu}=\chi_{a+\mu q,\mu}.$ [F3, step 2.2]

4.1 The frequency parametrization in step 3.1 is a homeomorphism for the compact-open topology of [F5]. First consider $\beta_b(t)=e^{ibt}$ on $\mathbb R$. On any nonempty compact set $C\subset\mathbb R$, put $M=\max_{t\in C}|t|$; the estimate $|e^{ibt}-e^{ib_0t}|\le |b-b_0|M$ proves continuity uniformly on $C$. Conversely, for any $\delta>0$, require uniform distance less than $1$ from $\beta_{b_0}$ on the compact interval $[-\pi/\delta,\pi/\delta]$. If $|b-b_0|\ge\delta$, then $t=\pi/(b-b_0)$ lies in that interval and $|e^{i(b-b_0)t}-1|=2$, a contradiction. This compact-open neighborhood therefore forces $|b-b_0|<\delta$ and proves inverse continuity. The finite-product dual homeomorphism in [F3] now proves the full parameter map $(a,\mu)\mapsto\chi_{a,\mu}$ is a homeomorphism $\mathbb R^{n+1}\to\widehat N$; the rescaling by $2\pi$ is a Euclidean homeomorphism. Restricting to $\mu=\lambda$ gives the corresponding orbit subspace topology, including $n=0$, where the fixed-central-character orbit is a singleton. [F3, F5, step 3.1, algebra]

5.1 When $\mu=\lambda\ne0$, the map $q\mapsto a+\lambda q$ is a bijection of $\mathbb R^n$ with itself. It is continuous with continuous inverse $a\mapsto(a-a_0)/\lambda$, so the orbit through $(a_0,\lambda)$ is all of $\widehat N_\lambda$ and its stabilizer is $\{0\}$. This proves the free transitive orbit and stabilizer claims. [step 3.1, step 4.1, algebra]

6.1 Steps 1.1–5.1 establish the group, topological, central, semidirect, and dual-orbit assertions, including the zero-dimensional case $n=0$ where the Lagrangian subgroup $K$ is trivial. [step 1.1, step 2.1, step 2.2, step 3.1, step 5.1] ∎
