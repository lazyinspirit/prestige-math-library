---
id: lem-large-projectives-split-and-cancel-over-infinite-field-algebras
kind: lemma
title: "Large projectives split and cancel over infinite-field algebras"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-algebraic-k0-and-k1-of-a-ring
  - cor-dimension-of-image-plus-generic-fibre
  - cor-dimension-affine-and-projective-space
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the algebraic fibre-dimension supplier."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. Bass, K-theory and stable algebra"
      url: "https://www.numdam.org/article/PMIHES_1964__22__5_0.pdf"
      locator: "§8–9, splitting and cancellation; the infinite-field incidence proof below is reconstructed at the narrower finite-type scope."
verification: {}
---

## Statement

Assume AC. Let $k$ be an infinite field, let $A$ be a nonzero finite-type commutative $k$-algebra of dimension $d$, and let $P$ be a finite projective $A$-module of constant rank $r>d$. Then $P$ has a free direct summand of rank one. Moreover, if $P\oplus A^m\cong Q\oplus A^m$ for a finite projective $Q$ and $m\ge0$, then $P\cong Q$. Consequently two finite projectives of constant rank greater than $d$ with the same $K_0(A)$ class are isomorphic.

## Facts & Assumptions

**Given:** The infinite field, finite-type algebra, dimension and projective modules in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Affine-space dimension and the componentwise generic-fibre dimension formula hold over an algebraically closed field. [[cor-dimension-of-image-plus-generic-fibre]] [[cor-dimension-affine-and-projective-space]]

[F2] $K_0$ is the group completion of finite projective modules under direct sum. [[def-algebraic-k0-and-k1-of-a-ring]]

## Proof

**Proof technique:** avoid the zero section by a finite-dimensional incidence argument, then use triangular transvections.

1.1 Let $(a,u)\in A\oplus P$ be unimodular, and choose finite generators $p_1,\dots,p_h$ of $P$. For parameters $\lambda\in\mathbb A_k^h$, put $v_\lambda=u+a\sum_i\lambda_i p_i$. On the open $D(a)\subset\operatorname{Spec}A$, the condition $v_\lambda(x)=0$ in the geometric fibre of $P$ imposes $r$ independent affine-linear equations on $\lambda$, because $a(x)\ne0$ and the generators span the fibre. Its incidence locus has dimension at most $h+d-r<h$ by [F1], after base change to an algebraic closure and passage to reduced components. Its image closure is therefore a proper closed subset of $\mathbb A_k^h$. Since $k$ is infinite, a nonzero polynomial cannot vanish on every $k$-point; choose $\lambda$ outside that closure. On $V(a)$ the original unimodular pair forces $u$ nonzero in every residue fibre, so $v=v_\lambda$ is nonzero in every geometric fibre on all of $\operatorname{Spec}A$. [A1, F1, given, choose, construct, algebra]

2.1 The order ideal $\{\phi(v):\phi\in P^*\}\subseteq A$ is the unit ideal: at every maximal ideal the projective module is free and the nonzero fibre vector has a dual functional taking a nonzero value. Hence there is $\phi\in P^*$ with $\phi(v)=1$, obtained by a finite linear combination. Apply the invertible triangular maps $(a,u)\mapsto(a,u+aw)$, $(a,v)\mapsto(a+(1-a)\phi(v),v)$, and $(1,v)\mapsto(1,v-v)$, where $w=\sum_i\lambda_ip_i$. Their composite sends any unimodular element of $A\oplus P$ to $(1,0)$. Taking $(a,u)=(1,0)$ in step 1.1 supplies a unimodular $v\in P$, and $\phi(v)=1$ gives the splitting $P\cong A\oplus\ker\phi$. [step 1.1, construct, algebra]

3.1 If $A\oplus P\cong A\oplus Q$, transport the standard generator of the free summand on the right to a unimodular element of $A\oplus P$. Step 2.1 sends it to $(1,0)$ by an automorphism, so quotienting by the two corresponding free lines identifies $Q$ with $P$. For $m>1$, cancel one free summand at a time; the module left beside it has rank at least $r>d$. If $[P]=[Q]$ in $K_0(A)$, [F2] gives a finite projective $W$ with $P\oplus W\cong Q\oplus W$; adjoining a finite projective complement of $W$ turns $W$ into a finite free summand, which cancels by the preceding argument. The case $m=0$ is immediate. [F2, step 2.1, algebra] ∎
