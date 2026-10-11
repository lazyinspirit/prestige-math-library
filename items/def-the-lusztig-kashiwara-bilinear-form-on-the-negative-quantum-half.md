---
id: def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half
kind: definition
title: "The Lusztig-Kashiwara bilinear form on the negative half: the recursion"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kashiwara-skew-derivations-on-the-negative-quantum-half, def-positive-negative-and-toral-quantum-subalgebras, def-tensor-algebra-of-a-vector-space]
justified_by: [thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]
aliases: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§6, printed p. 23, display (6.5): the unique nondegenerate symmetric bilinear form on $U_q^-(\\mathfrak g)$ with $(1,1)=1$ and $(f_iP,Q)=(P,e_i'Q)$; display (6.6) for its behaviour under the anti-involution."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 1, §1.2.3 (existence, uniqueness and symmetry of the inner product on the free algebra with $(1,1)=1$ and prescribed values on the generators), §1.2.10, §1.2.12 (the descended form on $\\mathbf f$), §1.2.13(a) (the mixed adjunction against $r_i$)."
---

## Definition

Let $U_q^-=\bigoplus_{\nu\in Q_+}U_q^-[-\nu]$ be the negative half of the
Drinfeld–Jimbo algebra with its skew derivations $e_i'$
([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]],
[[def-positive-negative-and-toral-quantum-subalgebras]]), and let
$\varepsilon\colon U_q^-\to\mathbb Q(q)$ be the **augmentation**, the projection
onto the degree-zero component $U_q^-[0]=\mathbb Q(q)\cdot1$ (so
$\varepsilon(Q)=0$ on all positive-height components and $\varepsilon(1)=1$).

The **normalized Lusztig–Kashiwara form** on $U_q^-$ is a bilinear form
$B\colon U_q^-\times U_q^-\to\mathbb Q(q)$ such that

(H) $B$ is **homogeneous**: $B\bigl(U_q^-[-\nu],U_q^-[-\mu]\bigr)=0$ whenever
$\nu\ne\mu$;

(N) $B(1,1)=1$;

(R) $B(F_iP,Q)=B(P,e_i'Q)$ for all $i\in I$ and all $P,Q\in U_q^-$.

Equivalently, axioms (H) and (N) may be replaced by the single **counit
normalization**

(C) $B(1,Q)=\varepsilon(Q)$ for all $Q\in U_q^-$,

in the presence of (R) (Verification, step 1.1).

Axioms (H) and (N) (equivalently (C)) are essential and not redundant: the
recursion (R) together with $B(1,1)=1$ alone neither forces symmetry nor
uniqueness, as the rank-one witness of step 2.2 shows.

The axioms determine $B$ uniquely: peeling first letters in the first argument
writes every positive-height $P$ as a finite sum $P=\sum_iF_iP_i$ and evaluates
$B(P,Q)=\sum_iB(P_i,e_i'Q)$, reducing the height; the base of the induction is
(C) (Verification, step 2.1). The **existence, symmetry and nondegeneracy** of
$B$ on $U_q^-$ for the actual quotient by the Serre ideal are not proved here:
they are the content of the negative-half form theorem
`thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`,
the declared justification of this definition, which also settles the exact
integrality normalization ($A$-valuedness on the word lattice and the
Gaussian-factorial denominators on the divided-power lattice). That theorem
is proved on this page, and its statement is the declared supplier of
existence, symmetry and nondegeneracy; this definition itself claims only that
(H), (N) and (R) determine $B$ and that the normalization cannot be relaxed.

## Facts & Assumptions

**Given:** The negative half with its root grading and the skew derivations $e_i'$, the augmentation $\varepsilon$, and a bilinear form $B$ on $U_q^-$.

[F1] Each $U_q^-[-\nu]$ is a $\mathbb Q(q)$-subspace and $U_q^-=\bigoplus_{\nu}U_q^-[-\nu]$ is a direct sum; every word in the $F_i$ lies in the component of its degree, and for $\nu\ne0$ every such word begins with some letter $F_i$, so every $P\in U_q^-[-\nu]$ is a finite sum $P=\sum_iF_iP_i$ with $P_i\in U_q^-[ -(\nu-\alpha_i)]$ ([[def-positive-negative-and-toral-quantum-subalgebras]]).

[F2] $e_i'(U_q^-[-\nu])\subseteq U_q^-[ -(\nu-\alpha_i)]$, and $e_i'$ is $\mathbb Q(q)$-linear with $e_i'(1)=0$ ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]]).

[F3] The augmentation $\varepsilon$ is $\mathbb Q(q)$-linear and vanishes on every $U_q^-[-\nu]$ with $\nu\ne0$; $\varepsilon(1)=1$ ([[def-positive-negative-and-toral-quantum-subalgebras]]).

[F4] The free algebra on one generator $F$ is the tensor algebra of a one-dimensional space; it has the word basis $1,F,F^2,\dots$ ([[def-tensor-algebra-of-a-vector-space]]).



## Verification

**Proof technique:** reduce the normalizations to each other by peeling, prove uniqueness by height induction, and exhibit the failure of the unnormalized recursion in rank one.

1.1 Equivalence of the normalizations. Assume (H) and (N); if $Q\in U_q^-[-\mu]$ with $\mu\ne0$ then $Q=\varepsilon(Q)1+Q'$ with $Q'\in\bigoplus_{\nu\ne0}U_q^-[-\nu]$ and $B(1,Q)=B(1,\varepsilon(Q)1)+B(1,Q')=\varepsilon(Q)B(1,1)+0$ by (H), so (C) holds. Conversely assume (C) and (R); then (N) is immediate, and (H) is proved by induction on $\operatorname{ht}(\nu)$ for $P\in U_q^-[-\nu]$, $Q\in U_q^-[-\mu]$: for $\nu=0$ one gets $B(1,Q)=\varepsilon(Q)$, which vanishes unless $\mu=0$; for $\nu\ne0$ write $P=\sum_iF_iP_i$ as in [F1] and compute $B(P,Q)=\sum_iB(P_i,e_i'Q)$ by (R), where $e_i'Q\in U_q^-[ -(\mu-\alpha_i)]$ by [F2]; by induction each term vanishes unless $\nu-\alpha_i=\mu-\alpha_i$, i.e. unless $\nu=\mu$. Hence (H), (N) and (R) hold. [given, F1, F2, F3, algebra]

2.1 Uniqueness: let $B,B'$ satisfy (H), (N) and (R). We prove $B(P,Q)=B'(P,Q)$ by induction on $\operatorname{ht}(\nu)$ for $P\in U_q^-[-\nu]$, all $Q$ simultaneously. For $\nu=0$, $P=c1$ and $B(P,Q)=c\,\varepsilon(Q)=B'(P,Q)$ by step 1.1. For $\nu\ne0$, choose a decomposition $P=\sum_iF_iP_i$ as in [F1]; then $B(P,Q)=\sum_iB(P_i,e_i'Q)=\sum_iB'(P_i,e_i'Q)=B'(P,Q)$, the middle equality by the induction hypothesis applied to the lower-height elements $P_i$ and to the arguments $e_i'Q$. Hence at most one form satisfies the axioms, and it is uniquely reconstructed from $\varepsilon$ by the recursion. [step 1.1, F1, F2, algebra]

2.2 The normalization is essential. Work in the free algebra $\mathbb Q(q)\langle F\rangle$ on one generator [F4], and let $\tilde e\,'$ be the word recursion of [[def-kashiwara-skew-derivations-on-the-negative-quantum-half]] transported to it, so $\tilde e\,'(1)=0$ and $\tilde e\,'(F^m)=[m]_{q^{-2}}F^{m-1}$ (the free-algebra analogue of the deletion rule). Fix any sequence $(c_m)_{m\ge0}$ with $c_0=1$ and define a bilinear form by $B(1,F^m):=c_m$, and recursively $B(Fu,Q):=B(u,\tilde e\,'Q)$. Then $B(1,1)=1$ and the recursion hold by construction. Taking $c_1=1$ gives $B(1,F)=1$, while $B(F,1)=B(1,\tilde e\,'(1))=B(1,0)=0$; hence this $B$ is not symmetric, and the values $c_m$ are exactly the freedom left by the recursion and $B(1,1)=1$. Thus the counit normalization (C), equivalently the homogeneity (H), is what removes the freedom, and the normalized form is the case $c_m=0$ for $m\ge1$. [step 1.1, F4, algebra]

3.1 The remaining claims are the declared content of the negative-half form theorem: on the quotient $U_q^-$ of the free algebra by the Serre ideal, `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` proves that the values forced by (C) and (R) descend (existence), that the resulting form is symmetric and nondegenerate, and it states the exact integrality normalization on the divided-power lattice; by step 2.1 this descended form is the unique one satisfying (H), (N) and (R). Accordingly this definition is complete modulo that supplier, and no transposed or rescaled variant of the recursion is used anywhere. [step 1.1, step 2.1, step 2.2, given] ∎
