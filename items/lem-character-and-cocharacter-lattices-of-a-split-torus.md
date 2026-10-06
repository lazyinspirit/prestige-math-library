---
id: lem-character-and-cocharacter-lattices-of-a-split-torus
kind: lemma
title: Character and cocharacter lattices of a split torus
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-group-of-multiplicative-type-and-torus, def-diagonalizable-group-and-character-module, lem-diagonalizable-character-antiequivalence, cor-dimension-of-a-finite-polynomial-ring-over-a-field]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 12 (12.7)-(12.8) and (12.11)-(12.12); Appendix C (C.3)-(C.5)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S6.5, Definitions 177"
---

## Statement

Let $T$ be a split torus over $k$, so that $T\cong D_k(M)$ for a free abelian group $M$ of finite rank ([[def-group-of-multiplicative-type-and-torus]], [[def-diagonalizable-group-and-character-module]]). Then the character group $X(T)=\operatorname{Hom}_k(T,\mathbf G_m)$ is canonically isomorphic to $M$, the cocharacter group $X_*(T)=\operatorname{Hom}_k(\mathbf G_m,T)$ is canonically isomorphic to the dual lattice $M^\vee=\operatorname{Hom}(M,\mathbb Z)$, and the pairing $X(T)\times X_*(T)\to\mathbb Z$, $(\chi,\lambda)\mapsto\langle\chi,\lambda\rangle$, defined by $\chi\circ\lambda\in\operatorname{Hom}_k(\mathbf G_m,\mathbf G_m)=\mathbb Z$, is a perfect $\mathbb Z$-bilinear pairing identifying $X_*(T)$ with $X(T)^\vee$. Both lattices are free of finite rank equal to $\dim T$, and the identifications and the pairing commute with extension of scalars. In particular $X(T)\otimes_{\mathbb Z}\mathbb Q$ and $X_*(T)\otimes_{\mathbb Z}\mathbb Q$ are $\mathbb Q$-vector spaces in perfect duality.

## Facts & Assumptions

**Given:** A field $k$, a free abelian group $M$ of finite rank, and a split torus $T$ with an isomorphism $T\cong D_k(M)$ over $k$.

[F1] The diagonalizable group $D_k(M)=\operatorname{Spec}k[M]$ has $D_k(M)(R)=\operatorname{Hom}(M,R^\times)$ and $\mathbf G_m=D_k(\mathbb Z)$, and characters are the homomorphisms $X(G)=\operatorname{Hom}_{k\text{-groups}}(G,\mathbf G_m)$ ([[def-diagonalizable-group-and-character-module]]).

[F2] For abelian groups $M,N$ there are natural identifications $X(D_k(M))=M$, via $m\mapsto e_m$, and $\operatorname{Hom}_k(D_k(M),D_k(N))=\operatorname{Hom}(N,M)$ ([[lem-diagonalizable-character-antiequivalence]]).

[F3] A torus is split when it is isomorphic over $k$ to $\mathbf G_m^r$ for some $r\ge0$ ([[def-group-of-multiplicative-type-and-torus]]). Its coordinate ring is $k[t_1,\ldots,t_r,(t_1\cdots t_r)^{-1}]$; it has dimension $r$ by [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]: localization cannot increase prime-chain length, and the chain $(0)\subsetneq(t_1-1)\subsetneq\cdots\subsetneq(t_1-1,\ldots,t_r-1)$ survives this localization.

## Proof

1.1 By [F3] the split torus $T$ is isomorphic over $k$ to $\mathbf G_m^r$ with $r=\dim T$, and $\mathbf G_m^r=D_k(\mathbb Z^r)$ by [F1]; the given isomorphism $T\cong D_k(M)$ and [F2] therefore identify $M$ with $\mathbb Z^r$. Applying [F2] to $M$ and to $\mathbb Z$ gives $X(T)=\operatorname{Hom}_k(D_k(M),D_k(\mathbb Z))=\operatorname{Hom}(\mathbb Z,M)\cong M$ and $X_*(T)=\operatorname{Hom}_k(D_k(\mathbb Z),D_k(M))=\operatorname{Hom}(M,\mathbb Z)=M^\vee$. Both are free abelian of rank $r=\dim T$; the identifications are induced by the anti-equivalence and are compatible with any change of the splitting isomorphism, which only renames $M$ by the induced automorphism. [F1, F2, F3, algebra]

2.1 For $\chi\in X(T)$ and $\lambda\in X_*(T)$ the composite $\chi\circ\lambda:\mathbf G_m\to\mathbf G_m$ is a homomorphism, and [F1] identifies $\operatorname{Hom}_k(\mathbf G_m,\mathbf G_m)=\operatorname{Hom}_k(D_k(\mathbb Z),D_k(\mathbb Z))=\operatorname{Hom}(\mathbb Z,\mathbb Z)=\mathbb Z$ by [F2]; so $\langle\chi,\lambda\rangle:=\chi\circ\lambda$ is an integer and composition of homomorphisms is $\mathbb Z$-bilinear. Under the identifications of step 1.1, an element of $X(T)$ is an element $m\in M$ and an element of $X_*(T)$ is a homomorphism $\mu:M\to\mathbb Z$, and the corresponding composite is $\mu(m)$: $\chi\circ\lambda$ is evaluation of the character at the cocharacter. Therefore the map $X_*(T)\to X(T)^\vee$, $\lambda\mapsto(\chi\mapsto\langle\chi,\lambda\rangle)$, is exactly the identity $\operatorname{Hom}(M,\mathbb Z)\to\operatorname{Hom}(M,\mathbb Z)$ and hence an isomorphism, so the pairing is perfect and identifies $X_*(T)$ with $X(T)^\vee$. [F1, F2, step 1.1, algebra]

3.1 Let $k'\supseteq k$ be a field extension. Base change of group algebras identifies $D_{k'}(M)=D_k(M)_{k'}$, and [F2] applied over the field $k'$ gives $X(T_{k'})=X(D_{k'}(M))=M$ and $X_*(T_{k'})=M^\vee$ with the same evaluation pairing, so the two identifications of step 1.1 commute with extension of scalars. For free lattices of finite rank the dual of a base change is the base change of the dual, so tensoring the perfect pairing of step 2.1 with $\mathbb Q$ exhibits $(X(T)\otimes\mathbb Q)^\vee=X_*(T)\otimes\mathbb Q$ and gives a perfect $\mathbb Q$-bilinear pairing of $X(T)\otimes\mathbb Q$ with $X_*(T)\otimes\mathbb Q$. [F2, step 1.1, step 2.1, algebra] ∎
