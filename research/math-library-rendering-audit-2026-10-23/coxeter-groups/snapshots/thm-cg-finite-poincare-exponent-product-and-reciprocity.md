---
id: thm-cg-finite-poincare-exponent-product-and-reciprocity
kind: theorem
title: "The Poincare polynomial as a product of q-integers of the basic degrees, with longest-element reciprocity"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 21
axiom_use: "The Axiom of Choice is used only through the basic-degree existence and determination in def-cg-coxeter-basic-degrees-and-graded-coinvariants and thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees; the product comparison uses those degrees, while longest-element reciprocity and reducible factorization use no choice."
deps: [def-axiom-of-choice, def-cg-coxeter-basic-degrees-and-graded-coinvariants, def-cg-coxeter-diagram-components-and-finite-type, def-cg-length-series-descent-generating-polynomial, def-finite-cardinality, lem-cg-classical-type-poincare-products, lem-cg-diagram-products-and-invariant-form-comparison, lem-cg-exceptional-parabolic-orbit-length-certificates, thm-cg-finite-coxeter-classification-including-h-and-dihedral, thm-cg-finite-parabolic-longest-element-and-opposition, thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Björner and F. Brenti, Combinatorics of Coxeter Groups, GTM 231 (class-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Theorem 7.1.5, printed pp. 204-205: for every finite irreducible Coxeter system there are positive integers $e_1,\\dots,e_n$ with $W(q)=\\prod_i[e_i+1]_q$; the proof routes (classical families, direct use of Corollary 7.1.4, invariant theory) and the case-by-case verification of the exceptional types are described there."
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (author manuscript of the book)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Lemma 17.1.1, printed p. 316: the finite Poincare reciprocity identity, used as an independent comparison; the bijection proof is given locally."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used only through the degree determination below. Let $(W,S)$ be a finite Coxeter system with diagram as defined in [[def-cg-coxeter-diagram-components-and-finite-type]] and $n=|S|$, and let $d_1\le\cdots\le d_n$ be its basic degrees and $e_i:=d_i-1$ its exponents, as installed in [[def-cg-coxeter-basic-degrees-and-graded-coinvariants]] and independently determined, together with their complete type tables, in [[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]] (1)-(3). Write $[d]_t:=1+t+\cdots+t^{d-1}$ and let $P_W$ be the length generating series of [[def-cg-length-series-descent-generating-polynomial]]. Then:

For $n=0$, the Coxeter presentation has $W=\{1\}$, the degree and exponent families are empty, and $P_W(t)=1$; all empty products are $1$. This is the rank-zero case of the displayed product.

**(1) The Poincare product.** $P_W(t)=\prod_{i=1}^{n}[d_i]_t=\prod_{i=1}^{n}(1+t+\cdots+t^{e_i})$, a polynomial of degree $\sum_ie_i$ with $P_W(0)=1$ and $P_W(1)=|W|=\prod_id_i$. This includes $H_3$, $H_4$ and every $I_2(m)$, and every reducible type: if the diagram is disconnected with components on $S_1,\dots,S_k$, then $P_W=\prod_{j}P_{W_{S_j}}$ and the degree multiset is the concatenation of the components' multisets ([[lem-cg-diagram-products-and-invariant-form-comparison]] (1), [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (2)).

**(2) Reciprocity.** With $N:=|\Phi_+|=\ell(w_0)=\sum_{i=1}^ne_i$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(ii),(iii), [[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]] (1)),
$$t^{N}P_W(t^{-1})=P_W(t),$$
i.e. the coefficient sequence of $P_W$ is palindromic. This is proved directly from the longest-element bijection $w\mapsto w_0w$ and does not use (1).

**(3) Independence.** The degrees $d_i$ are not defined by (1) and are not inferred from it: they are supplied by the Molien/Jacobian/regular-eigenvector determination of [[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]], whose tables agree with the products of (1) by [[lem-cg-classical-type-poincare-products]] (3) and [[lem-cg-exceptional-parabolic-orbit-length-certificates]] (3). Neither (1) nor (2) is used to prove the other; in particular the exponent comparison $\sum_ie_i=N$ is not used to determine the degrees, and the degree product is not used to prove reciprocity.

## Facts & Assumptions

**Given:** A finite Coxeter system $(W,S)$ with $n=|S|$, length function $\ell$, its basic degrees $d_1\le\cdots\le d_n$ and exponents $e_i=d_i-1$ installed under the Axiom of Choice, its longest element $w_0$, and the series $P_A$ of [[def-cg-length-series-descent-generating-polynomial]].

[F1] The finite irreducible Coxeter systems are exactly the types listed in the Statement, and every reducible finite system decomposes into these components ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1)-(2), [[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] The basic degrees are the degrees of a minimal homogeneous generating family of the invariant ring, determined independently of the Poincare series, with the complete tables of [[thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees]] (1)-(3): $A_n:2,3,\dots,n+1$; $B_n:2,4,\dots,2n$; $D_n:2,4,\dots,2n-2$ together with $n$; $I_2(m):2,m$; $E_6:2,5,6,8,9,12$; $E_7:2,6,8,10,12,14,18$; $E_8:2,8,12,14,18,20,24,30$; $F_4:2,6,8,12$; $H_3:2,6,10$; $H_4:2,12,20,30$; for reducible systems the degree multiset is the concatenation of the components' multisets, and $\prod_id_i=|W|$ ([[def-cg-coxeter-basic-degrees-and-graded-coinvariants]], [[def-axiom-of-choice]]).

[F3] Classical products and exceptional products: $P_{A_n}=[n+1]_t!$, $P_{B_n}=\prod_{i=1}^n[2i]_t$, $P_{D_n}=[n]_t\prod_{i=1}^{n-1}[2i]_t$, $P_{I_2(m)}=[2]_t[m]_t$ ([[lem-cg-classical-type-poincare-products]] (3)), and $P_W=\prod_{d\in D(W)}[d]_t$ for $W$ of type $E_6,E_7,E_8,F_4,H_3,H_4$ ([[lem-cg-exceptional-parabolic-orbit-length-certificates]] (3)).

[F4] If the diagram is disconnected with nonempty components on $S_1,\dots,S_k$, then $W\cong W_{S_1}\times\cdots\times W_{S_k}$ and $\ell(w_1\cdots w_k)=\sum_i\ell(w_i)$, so $P_W=\prod_jP_{W_{S_j}}$ ([[lem-cg-diagram-products-and-invariant-form-comparison]] (1)).

[F5] If $W$ is finite, there is a unique $w_0\in W$ with $N:=\ell(w_0)=|\Phi_+|$ maximal, $w_0^2=1$, and $\ell(w_0w)=\ell(w_0)-\ell(w)$ for all $w\in W$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(ii),(iii),(iv)).

[F6] The series is $P_A(t)=\sum_{w\in A}t^{\ell(w)}$ with finite length fibers; for finite $W$ it is a polynomial, has constant coefficient $1$, and $P_W(1)=|W|$. If $S=\emptyset$, then $W=\{1\}$ and $P_W=1$. For a polynomial of degree $N$, $t^NP_W(t^{-1})=P_W(t)$ is equivalent by coefficient comparison to palindromicity ([[def-cg-length-series-descent-generating-polynomial]] (1),(4), [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 **Irreducible types.** If $(W,S)$ is irreducible, then by [F1] it is of one of the listed types. For $W=A_n$ the table of [F2] gives $\prod_i[d_i]_t=\prod_{k=2}^{n+1}[k]_t=[n+1]_t!=P_{A_n}$ by [F3]; for $B_n$ it gives $\prod_{i=1}^n[2i]_t=P_{B_n}$; for $D_n$ the multiset $\{2,4,\dots,2n-2\}\cup\{n\}$ gives $[n]_t\prod_{i=1}^{n-1}[2i]_t=P_{D_n}$; and for $I_2(m)$ it gives $[2]_t[m]_t=P_{I_2(m)}$. For the six exceptional types the same comparison is the content of [F3]. Hence $P_W=\prod_{i=1}^n[d_i]_t$ for every irreducible finite type. [F1, F2, F3, algebra]

1.2 **Reciprocity.** The map $w\mapsto w_0w$ is a bijection of $W$ with itself, and $\ell(w_0w)=\ell(w_0)-\ell(w)$ for all $w$ by [F5]. Summing $t^{\ell(w)}$ over $W$ and substituting $w_0w$ for $w$ gives $P_W(t)=\sum_{w\in W}t^{\ell(w_0w)}=\sum_{w\in W}t^{N-\ell(w)}=t^NP_W(t^{-1})$ as an identity of polynomials, since $\ell(w)\le N$ for all $w$; equivalently $[t^k]P_W=[t^{N-k}]P_W$ for every $k$, so the coefficient sequence is palindromic. [F5, F6, algebra]

2.1 **Reducible types and the numerical consequences.** If $n=0$, then $W=\{1\}$ and the degree and exponent lists are empty; [F6] gives $P_W=1$, so the product, constant-term and evaluation claims hold with empty products equal to $1$. For $n>0$, step 1.1 gives the product when the diagram is connected. If it is disconnected, let its nonempty components be $S_1,\dots,S_k$. By [F4], $P_W=\prod_jP_{W_{S_j}}$, and each component product equals $\prod_{d\in D(W_{S_j})}[d]_t$ by step 1.1. By [F2], the degree multiset of $W$ is the concatenation of the component multisets, so $P_W=\prod_{i=1}^n[d_i]_t$. In either positive-rank case, each $[d_i]_t$ has constant term $1$ and $d_i$ terms; therefore the product has degree $\sum_i(d_i-1)=\sum_ie_i$, constant term $1$, and value $\prod_i d_i=|W|$ at $t=1$ by [F2]. [step 1.1, F2, F4, F6, algebra]

3.1 **Independence.** The degrees $d_i$ are the degrees of a minimal homogeneous generating family of the invariant ring; the determination of [F2] uses the Molien identity, the invariant Jacobian and the regular Coxeter eigenvector, and never the series $P_W$; the tables it produces are compared with the products of [F3]. Hence (1) is proved from the independently given degrees and does not define them, and (2) is proved in step 1.2 without using (1). Finally, the exponent identity $\sum_ie_i=N$ follows by comparing degrees: step 2.1 shows that $\deg P_W=\sum_ie_i$ with leading coefficient $1$, while step 1.2 shows that $t^NP_W(t^{-1})=P_W(t)$ with $[t^N]P_W=[t^0]P_W=1$, so $\deg P_W=N$ and $\sum_ie_i=N$; this comparison is a consequence of (1) and (2), not an input to either. No choice beyond the AC premise of the degree determination of [F2] is used. [step 1.1, step 1.2, step 2.1, F2, F3, algebra] ∎
