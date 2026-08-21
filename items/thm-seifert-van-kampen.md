---
id: thm-seifert-van-kampen
kind: theorem
title: "Seifert–van Kampen identifies the fundamental group with a group pushout"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-open-cover-loop-generation, lem-van-kampen-factorization-invariance,
       thm-group-pushout-as-an-amalgamated-quotient,
       def-pushout-of-group-homomorphisms,
       def-induced-homomorphism-on-fundamental-groups,
       thm-fundamental-group-laws, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 1.20"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $X=U\cup V$, where $U$ and $V$ are open path-connected subsets of $X$, let $U\cap V$ be path-connected, and fix $x_0\in U\cap V$. For the inclusion-induced maps in the diagram

$$\pi_1(U,x_0)\longleftarrow\pi_1(U\cap V,x_0)\longrightarrow\pi_1(V,x_0),$$

the group $\pi_1(X,x_0)$, together with the two inclusion-induced homomorphisms, is a pushout ([[def-pushout-of-group-homomorphisms]]). Equivalently, the canonical homomorphism from any pushout $P$ of the displayed diagram to $\pi_1(X,x_0)$ is an isomorphism. No injectivity of either map from the overlap group is assumed.

## Facts & Assumptions

**Given:** The cover and basepoint in the Statement, a pushout $P$ with factor maps $i_U,i_V$, and the inclusion-induced maps to $\pi_1(X,x_0)$.

[L1] Every loop class in $\pi_1(X,x_0)$ has a finite factorization by inclusion-images of loop classes from $U$ and $V$ ([[lem-open-cover-loop-generation]]).

[L2] All subordinate factorizations of homotopic based loops have one common value in $P$ ([[lem-van-kampen-factorization-invariance]]).

[L3] For arbitrary group homomorphisms $K\to G$ and $K\to H$, the quotient of $G*H$ by the normal closure of the amalgamating relations is a pushout, so a pushout of the displayed diagram exists ([[thm-group-pushout-as-an-amalgamated-quotient]]).

[F1] Every compatible pair of homomorphisms out of the two factors of a group pushout factors through a unique homomorphism from the pushout ([[def-pushout-of-group-homomorphisms]]).

[F2] Pointed inclusions induce group homomorphisms on fundamental groups ([[def-induced-homomorphism-on-fundamental-groups]]).

## Proof

**Proof technique:** direct.

1.1 Choose the pushout $P$ supplied by [L3]. The two inclusion-induced homomorphisms from $\pi_1(U,x_0)$ and $\pi_1(V,x_0)$ to $\pi_1(X,x_0)$ agree on $\pi_1(U\cap V,x_0)$, since both composites are induced by the same inclusion. By [F1], they therefore define a unique homomorphism $\Phi:P\to\pi_1(X,x_0)$ satisfying $\Phi i_U=(j_U)_*$ and $\Phi i_V=(j_V)_*$. [L3, F1, F2, choose]

1.2 For $c\in\pi_1(X,x_0)$, let $\Psi(c)$ be the element of $P$ that is the value of some subordinate factorization of some loop representing $c$. Such a factorization exists by [L1], and [L2] says that all representatives and all their factorizations give the same value. Thus exactly one such element exists for each $c$, so this rule defines a function without selecting factorizations globally. Concatenating two factorizations concatenates their words, hence $\Psi$ is a homomorphism. [L1, L2, construct]

2.1 If $c$ is represented by a factorized loop, applying $\Phi$ to its pushout word restores the same product of inclusion-images, which is $c$ by [L1]. Hence $\Phi\Psi=\operatorname{id}_{\pi_1(X,x_0)}$. [step 1.1, step 1.2, L1]

2.2 For $a\in\pi_1(U,x_0)$, the one-factor factorization of its image gives $\Psi((j_U)_*a)=i_U(a)$, and similarly on the $V$ factor. Thus $\Psi\Phi:P\to P$ agrees with the identity after composition with both factor maps. Uniqueness in [F1] makes $\Psi\Phi=\operatorname{id}_P$. [step 1.1, step 1.2, F1]

3.1 The homomorphisms $\Phi$ and $\Psi$ are inverse, so $\Phi$ is an isomorphism and $\pi_1(X,x_0)$ has the asserted pushout property. [step 2.1, step 2.2] ∎
