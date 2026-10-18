---
id: thm-graded-module-classification-from-even-subalgebra
kind: theorem
title: "Graded modules over an algebra with an invertible odd element"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 1
deps:
  - def-clifford-graded-algebra-module-and-tensor-product
  - thm-universal-property-of-module-tensor-products
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §5, Proposition 5.1"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §1.5"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Let $A=A^0\oplus A^1$ be a $\mathbb Z/2$-graded unital associative algebra over a field, and suppose it contains an invertible homogeneous element $u\in A^1$. For left modules, the rule $M\mapsto M^0$ gives a bijection between isomorphism classes of graded-simple $A$-modules (with even isomorphisms) and isomorphism classes of simple $A^0$-modules. An inverse sends a left $A^0$-module $N$ to the induced graded module $A\otimes_{A^0}N$.

## Facts & Assumptions

**Given:** A graded unital algebra $A=A^0\oplus A^1$, an invertible odd element $u$, and a left $A^0$-module $N$ or graded left $A$-module $M$.

[F1] The multiplication satisfies $A^iA^j\subseteq A^{i+j\pmod2}$, and a graded module satisfies $A^iM^j\subseteq M^{i+j\pmod2}$ ([[def-clifford-graded-algebra-module-and-tensor-product]]).

[F2] A graded-simple module is nonzero and has no proper nonzero graded submodule; even isomorphisms preserve both parity components ([[def-clifford-graded-algebra-module-and-tensor-product]]).

[F3] Every balanced map from a right module and a left module induces a unique homomorphism from their tensor product ([[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** induction and submodule correspondence.

1.1 Write $u^{-1}=x_0+x_1$ with $x_i\in A^i$. From $1=uu^{-1}=ux_0+ux_1$, the odd component $ux_0$ and even component $ux_1$ must be $0$ and $1$, respectively. Since $u$ is invertible, $x_0=0$ and $u^{-1}=x_1\in A^1$. Consequently $A^1=uA^0$: inclusion follows from [F1], and for $a\in A^1$, $u^{-1}a\in A^0$ gives $a=u(u^{-1}a)$. [given, F1, construct, algebra]

2.1 For any graded left $A$-module $M$, multiplication by $u$ maps $M^0$ bijectively onto $M^1$: it maps into $M^1$ by [F1], and its inverse $u^{-1}$ maps $M^1$ into $M^0$. Thus every homogeneous component of $M$ is generated from $M^0$ by the $A$-action. [given, F1, step 1.1, algebra]

3.1 Define $\mu:A\otimes_{A^0}M^0\to M$ by $\mu(a\otimes m)=am$. The multiplication map is balanced over $A^0$, so [F3] makes $\mu$ well defined; associativity makes it $A$-linear. Its even part $A^0\otimes_{A^0}M^0\to M^0$ is an isomorphism with inverse $m\mapsto1\otimes m$, by the balancing relation. By step 1.1, the map $M^0\to A^1\otimes_{A^0}M^0$, $m\mapsto u\otimes m$, is an isomorphism: its inverse is $a_1\otimes m\mapsto(u^{-1}a_1)m$, which is well defined because $u^{-1}a_1\in A^0$ and respects balancing. Under this identification, the odd part of $\mu$ is $m\mapsto um$, bijective by step 2.1. Hence $\mu$ is a graded $A$-module isomorphism. [given, F1, F3, step 1.1, step 2.1, construct]

3.2 If $L\subseteq M$ is a graded submodule, then $L^1=uL^0$ by invertibility of $u$ and the grading. Conversely, for any $A^0$-submodule $N\subseteq M^0$, the subspace $N\oplus uN$ is graded and is stable under $A$: for $a\in A^0$, $u^{-1}au\in A^0$, so $a(un)=u(u^{-1}au)n\in uN$; for $b\in A^1$, step 1.1 writes $b=ua_0$ with $a_0\in A^0$, whence $bN\subseteq uN$ and $b(uN)\subseteq N$ because $ua_0u\in A^0$. Thus it is an $A$-submodule. By the definition of graded-simple in [F2], $M$ has a proper nonzero graded submodule exactly when $M^0$ has a proper nonzero $A^0$-submodule. [given, F1, F2, step 1.1, step 2.1, algebra]

4.1 For any left $A^0$-module $N$, the induced module $A\otimes_{A^0}N$ splits as $A^0\otimes_{A^0}N\oplus A^1\otimes_{A^0}N$: the map $(a_0+a_1)\otimes n\mapsto(a_0\otimes n,a_1\otimes n)$ is well defined by balancing and has inverse given by addition. This is a grading because left multiplication respects the parity of $A$, while the balancing relations use only even elements. Its degree-zero part is isomorphic to $N$ by $a_0\otimes n\mapsto a_0n$, with inverse $n\mapsto1\otimes n$. If $N$ is simple, step 3.2 makes the induced module graded-simple. Conversely, step 3.1 identifies any graded $M$ with the module induced from $M^0$, and step 3.2 says $M$ is graded-simple exactly when $M^0$ is simple. Restriction to degree zero and induction are therefore inverse on isomorphism classes: even $A$-isomorphisms restrict to $A^0$-isomorphisms, and $A^0$-isomorphisms induce even $A$-isomorphisms. [F2, F3, step 3.1, step 3.2, algebra] ∎
