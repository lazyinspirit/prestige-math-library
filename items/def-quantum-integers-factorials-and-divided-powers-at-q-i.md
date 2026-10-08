---
id: def-quantum-integers-factorials-and-divided-powers-at-q-i
kind: definition
title: "Quantum integers, factorials, Gaussian binomials and divided powers at $q_i$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-symmetrizable-cartan-datum-for-a-quantum-group
  - def-q-integer-q-factorial-and-q-multinomial
aliases: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed p. 5, display (1.1): the definitions of [n]_i, [n]_i! and the Gaussian binomial with q_i=q^{s_i}; display (1.5): the divided powers."
    - title: "Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum Current Algebras, Journal of Lie Theory 13 (2003), 21–64"
      url: "https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf"
      locator: "§1.1, printed p. 22, display (1): the symmetric q-integers [k]_q=(q^k−q^{−k})/(q−q^{−1}) and Gaussian binomials used for the quantum Serre relations."
pipeline_run: frontier-43-complex-representation-15
---

## Definition

Let $(I,A,D,P,P^{\vee},q)$ be a symmetrizable Cartan datum for a quantum group ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]) and put $q_i=q^{d_i}$. For $m\in\mathbb N$, define the **$q_i$-integer**

$$[m]_i:=\frac{q_i^m-q_i^{-m}}{q_i-q_i^{-1}},\qquad [0]_i:=0,$$

and the **$q_i$-factorial**

$$[m]_i!:=\prod_{k=1}^m[k]_i,\qquad [0]_i!:=1.$$

For $0\le r\le m$, define the **Gaussian binomial** $\binom{m}{r}_i:=[m]_i!/([r]_i![m-r]_i!)$, and set it to $0$ when $r<0$ or $r>m$. In the published one-parameter convention, write $\binom{m}{r}_t:=\binom{m}{r,m-r}_t$ for the two-part $q$-multinomial coefficient of [[def-q-integer-q-factorial-and-q-multinomial]].

For an element $x$ of a unital $\mathbb Q(q)$-algebra and $m\ge0$, define its **divided power at $q_i$** by $x^{(m)}:=x^m/[m]_i!$, so $x^{(0)}=1$ and $x^{(1)}=x$.

The symmetric convention and the published asymmetric convention are related, for $m\ge0$ and $0\le r\le m$, by

$$[m]_i=q_i^{-(m-1)}[m]_{q_i^2},\qquad \binom{m}{r}_i=q_i^{-r(m-r)}\binom{m}{r}_{q_i^2}.$$

In particular $[m]_i$ is invariant under $q_i\mapsto q_i^{-1}$. These quantities depend on the symmetrizer only through $q_i=q^{d_i}$.

## Facts & Assumptions

**Given:** A symmetrizable Cartan datum with $q$ indeterminate over $\mathbb Q$, and an element $x$ of a unital $\mathbb Q(q)$-algebra.

[F1] The datum has $q_i=q^{d_i}$ with positive integer $d_i$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F2] The asymmetric $q$-integer and $q$-factorial are $[m]_t=1+t+\cdots+t^{m-1}$ and $[m]_t!=\prod_{j=1}^m[j]_t$, with $[0]_t=0$ and $[0]_t!=1$; the $q$-multinomial is the factorial quotient ([[def-q-integer-q-factorial-and-q-multinomial]]).

## Verification

**Proof technique:** Expand the symmetric $q_i$-integer and multiply the resulting finite product.

1.1 For $m\ge1$, cancel the nonzero factors $q_i-q_i^{-1}=q_i^{-1}(q_i^2-1)$ to obtain $[m]_i=q_i^{-(m-1)}(q_i^{2m}-1)/(q_i^2-1)=q_i^{-(m-1)}\sum_{j=0}^{m-1}q_i^{2j}=q_i^{-(m-1)}[m]_{q_i^2}$. At $m=0$ the same identity holds by the zero convention. For $m\ge1$ the quotient is nonzero because its numerator and denominator are nonzero in $\mathbb Q(q)$ by [F1]. [given, F1, F2, algebra]

2.1 Multiplying the identity of step 1.1 for $j=1,\ldots,m$ gives $[m]_i!=q_i^{-m(m-1)/2}[m]_{q_i^2}!$; for $m=0$ this is the equality of empty products. Hence for $0\le r\le m$, division by the nonzero factorials is valid and $\binom{m}{r}_i=q_i^{-m(m-1)/2+r(r-1)/2+(m-r)(m-r-1)/2}\binom{m}{r}_{q_i^2}=q_i^{-r(m-r)}\binom{m}{r}_{q_i^2}$, since $-m(m-1)+r(r-1)+(m-r)(m-r-1)=-2r(m-r)$. [step 1.1, F1, F2, algebra]

3.1 Since every $[j]_i$ for $j\ge1$ is nonzero, $[m]_i!$ is a nonzero scalar and therefore invertible in $\mathbb Q(q)$; this makes $x^{(m)}$ well-defined. Replacing $q_i$ by $q_i^{-1}$ negates numerator and denominator in $[m]_i$, so $[m]_i$ is invariant, as are its factorials and Gaussian quotients. [step 1.1, step 2.1, F1, algebra] ∎
