---
id: lem-finite-frobenius-functional-determines-coproduct
kind: lemma
title: "A Frobenius functional determines a unique Frobenius coproduct"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-frobenius-object-and-knowledgeable-sewing-data, def-hh-frobenius-functional-and-associative-pairing, thm-dual-family-is-a-basis-in-finite-dimension]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "Choice-free finite-dimensional linear algebra over an arbitrary field k."
sources:
  references:
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§2.1–2.2, PDF pp. 4–11, Frobenius functional and algebra/coalgebra data."
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories, complete minicourse notes"
      url: "https://mat.uab.cat/~kock/TQFT/FS.pdf"
      locator: "§2.4.2–2.4.12, PDF pp. 26–30; the local proof expands the graphical contractions."
---

## Statement

Let $k$ be any field, let $A$ be a finite-dimensional unital associative $k$-algebra, and let $\epsilon:A\to k$ be a Frobenius functional, so $\beta(a,b):=\epsilon(ab)$ is nondegenerate in both variables. Then there is a unique tensor
$$
e=\sum_i x_i\otimes y_i\in A\otimes A
$$
such that, for every $a\in A$,
$$
\sum_i\epsilon(a x_i)y_i=a
\qquad\text{and}\qquad
\sum_i x_i\epsilon(y_i a)=a.
$$
It is independent of the basis used to construct it and satisfies
$$
(a\otimes1)e=e(1\otimes a).
$$
The map $\Delta:A\to A\otimes A$ defined by $\Delta(a):=(a\otimes1)e$ is coassociative, has counit $\epsilon$, and satisfies both Frobenius identities. Conversely, every finite-dimensional Frobenius object $(A,\mu,\eta,\Delta,\epsilon)$ in $\mathrm{Vect}_{\mathrm{fd}}(k)$ has nondegenerate functional pairing $\epsilon(ab)$, and this $\Delta$ is the unique coproduct with that counit and Frobenius identities.

Symmetry of $\beta$ is not assumed. If it holds, the Frobenius object is symmetric; if $\mu$ is commutative, then $\beta$ is symmetric, but neither condition is identified with the other.

## Facts & Assumptions

**Given:** A field $k$, a finite-dimensional unital associative $k$-algebra $A$, and a linear functional $\epsilon:A\to k$ for which $\beta(a,b)=\epsilon(ab)$ is nondegenerate in each variable.

[F1] A Frobenius functional on a finite-dimensional unital algebra is exactly a functional whose associative form $(a,b)\mapsto\epsilon(ab)$ is nondegenerate ([[def-hh-frobenius-functional-and-associative-pairing]]).

[F2] For a finite basis $(u_1,\ldots,u_n)$, the ordinary dual family $(u_1^*,\ldots,u_n^*)$ is a basis of $A^*$ and $u_j^*(u_i)=\delta_{ji}$ ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[F3] The Frobenius-object conventions are the algebra, coalgebra, and two typed Frobenius identities of [[def-frobenius-object-and-knowledgeable-sewing-data]].

## Proof

1.1 Choose a basis $(u_1,\ldots,u_n)$ of $A$. The map $\Theta:A\to A^*$ given by $\Theta(v)(a)=\epsilon(av)$ is an isomorphism by [F1]. Define $v_i:=\Theta^{-1}(u_i^*)$. Then $\epsilon(u_jv_i)=\delta_{ji}$, and [F2] gives
$$
a=\sum_i\epsilon(av_i)u_i,\qquad
a=\sum_i v_i\epsilon(u_i a).
$$
For the second identity, applying each functional $u_j^*\circ\Theta$ to its right side gives $\epsilon(u_j a)$; the nondegeneracy in the first variable then identifies that side with $a$. Set $e:=\sum_i v_i\otimes u_i$. [given, F1, F2, construct]

1.2 The first displayed dual-basis identity gives $\sum_i\epsilon(a v_i)u_i=a$, and the second gives $\sum_i v_i\epsilon(u_i a)=a$, so this $e$ has the required two contraction properties. If another tensor has the first property, contracting its first factor against every functional $a\mapsto\epsilon(a x)$ gives the same vector for every $a$; these functionals range over all of $A^*$ by nondegeneracy. Hence the tensors are equal. The contraction map $A\otimes A\to\operatorname{Hom}_k(A^*,A)$ is an isomorphism in finite dimension, so the tensor is intrinsically defined and independent of the basis. [step 1.1, F1, algebra]

2.1 To prove $(a\otimes1)e=e(1\otimes a)$, test the two tensors against arbitrary $\phi\otimes\psi\in A^*\otimes A^*$. Nondegeneracy supplies $c,d\in A$ with $\phi(z)=\epsilon(cz)$ and $\psi(z)=\epsilon(zd)$. The first contraction is
$$
\sum_i\epsilon(cav_i)\epsilon(u_i d)=\epsilon(cad)
$$
by the second dual-basis identity applied to $d$. The second is
$$
\sum_i\epsilon(cv_i)\epsilon(u_iad)=\epsilon(cad)
$$
by the same identity applied to $ad$. Since such product functionals separate tensors, the two tensors agree. [step 1.1, F1, algebra]

2.2 Define $\Delta(a)=(a\otimes1)e$. Then $(\epsilon\otimes1)\Delta(a)=\sum_i\epsilon(av_i)u_i=a$. Also $(1\otimes\epsilon)\Delta(a)=a\sum_i v_i\epsilon(u_i)=a$ by the second identity in step 1.1 at $a=1$. The central relation of step 2.1 gives
$$
\Delta(ab)=(a\otimes1)\Delta(b)=\Delta(a)(1\otimes b).
$$
Expanding these two equalities with the associator is exactly the pair of Frobenius identities in [F3]. [step 1.1, step 2.1, F3, algebra]

3.1 The defining contraction also yields, for all $x,y,a\in A$,
$$
(\beta\otimes\beta)(x\otimes y,\Delta(a))
=\sum_i\epsilon(xav_i)\epsilon(yu_i)
=\epsilon(yxa)=\beta(yx,a).
$$
Use the tensor-product pairing $\beta^{\otimes3}$ to test coassociativity. For any $x,y,z,a\in A$, step 3.1 gives
$$
\langle x\otimes y\otimes z,(\Delta\otimes1)\Delta(a)\rangle
=\beta(zyx,a)
=\langle x\otimes y\otimes z,(1\otimes\Delta)\Delta(a)\rangle.
$$
The pairing $\beta^{\otimes3}$ is nondegenerate: in any basis its matrix is the Kronecker product of three invertible matrices for $\beta$. Thus the two tensors are equal, proving coassociativity. [step 3.1, F1, algebra]

3.2 If $\Delta'$ is another coproduct with counit $\epsilon$ and the two Frobenius identities, write $e'=\Delta'(1)=\sum_jx'_j\otimes y'_j$. Applying the counit identities to $\Delta'(a)$ and using each Frobenius identity gives
$$
\sum_j\epsilon(ax'_j)y'_j=a,\qquad \sum_jx'_j\epsilon(y'_j a)=a.
$$
Step 1.2 therefore gives $e'=e$. The Frobenius identity then gives $\Delta'(a)=(a\otimes1)e'=(a\otimes1)e=\Delta(a)$, so the coproduct is unique. [step 1.2, step 2.2, F3, algebra]

4.1 Conversely, suppose $(A,\mu,\eta,\Delta,\epsilon)$ satisfies [F3], and put $d:=\Delta\circ\eta:k\to A\otimes A$. With the canonical associators and unitors, the two snake composites are
$$
S_L:=\rho_A\circ(1_A\otimes\beta)\circ\alpha_{A,A,A}\circ(d\otimes1_A)\circ\lambda_A^{-1}:A\to A
$$
and
$$
S_R:=\lambda_A\circ(\beta\otimes1_A)\circ\alpha^{-1}_{A,A,A}\circ(1_A\otimes d)\circ\rho_A^{-1}:A\to A.
$$
For $S_L$, replace $\beta$ by $\epsilon\mu$ and use the Frobenius identity $(1_A\otimes\mu)\alpha(\Delta\otimes1_A)=\Delta\mu$; naturality of $\alpha$ moves $\eta$ to the first input. The left unit equation reduces the composite to $\rho_A(1_A\otimes\epsilon)\Delta$, which is $1_A$ by the right counit. For $S_R$, use $(\mu\otimes1_A)\alpha^{-1}(1_A\otimes\Delta)=\Delta\mu$; the right unit equation reduces it to $\lambda_A(\epsilon\otimes1_A)\Delta$, which is $1_A$ by the left counit. Thus both snake composites are identities. [F3, algebra]

4.2 The two snake identities exhibit inverse maps between $A$ and $A^*$ for the left and right pairings, respectively; hence $\beta$ is nondegenerate in both variables. It follows that $\epsilon$ is a Frobenius functional by [F1], and step 3.2 gives uniqueness of $\Delta$. Symmetry of $\beta$ and commutativity of $\mu$ remain the separate properties defined in [F3]. [F1, F3, step 3.2, step 4.1, algebra] ∎
