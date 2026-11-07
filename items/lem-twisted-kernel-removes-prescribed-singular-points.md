---
id: lem-twisted-kernel-removes-prescribed-singular-points
kind: lemma
title: "A twisted kernel removes prescribed singular points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-nakayama-lemma
  - cor-noetherian-modules-are-hopfian
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the declared Nakayama supplier."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. J. de Jong, A result of Gabber"
      url: "https://www.math.columbia.edu/~dejong/papers/2-gabber.pdf"
      locator: "§3.10–3.19, the local kernel construction; the supplied-map local argument is reconstructed below."
verification: {}
---

## Statement

Assume AC. Let $X$ be Noetherian, let $c$ be a multiplicative Čech $2$-cocycle on an étale cover, and suppose a specified Čech $1$-cochain trivializes $c^n$ for some $n\ge1$. Let $F_1,\dots,F_{n+1}$ be coherent $c$-twisted modules which are locally free of the same positive rank $r$ on an open set $U$. Form the $c$-twisted modules
$$G_1=\bigoplus_{i=1}^{n+1}F_i^{\oplus r^n},\qquad G_2=F_1\otimes\cdots\otimes F_{n+1},$$
using the specified cochain to identify the twisting $c^{n+1}$ of $G_2$ with $c$. Let $L$ be an invertible sheaf on $X$. Suppose a morphism $\psi:G_1\to G_2\otimes L$ is surjective on $U$. Let $T_i$ be finitely many points at which every $F_j$ with $j\ne i$ is locally free of rank $r$, and suppose that, in an étale-local trivialization of the twisting, of those other modules, and of $L$, the component $F_i^{\oplus r^n}\to G_2\otimes L\cong F_i^{\oplus r^n}$ induces an isomorphism after tensoring with the residue field at each point of $T_i$. Then $\ker\psi$ is a coherent $c$-twisted module, locally free of rank $nr^{n+1}$ on $U$ and in a neighborhood of every point of every $T_i$. The Statement assumes the morphism $\psi$; it does not assert that such a morphism exists.

## Facts & Assumptions

**Given:** The Noetherian scheme, Čech twisting data, coherent twisted modules, line bundle, morphism and points in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] A finite module over a local ring whose quotient by the maximal ideal is zero is zero. [[thm-nakayama-lemma]]

[F2] A surjective endomorphism of a Noetherian module is an automorphism. [[cor-noetherian-modules-are-hopfian]]

## Proof

**Proof technique:** compute the kernel where all inputs are free and invert the distinguished component at each prescribed point.

1.1 On each member of the étale cover, $G_1$, $G_2\otimes L$ and $\psi$ are ordinary coherent modules and a module map. The specified trivialization of $c^n$ makes both twists equal to $c$, so transition maps carry local kernels into one another and satisfy the same scalar-twisted cocycle. Kernels of maps of finite modules over Noetherian rings are finite, hence these kernels form a coherent $c$-twisted module. [given, construct, algebra]

2.1 Over $U$, each $F_i$ is locally free of rank $r$. Thus $G_1$ and $G_2\otimes L$ are locally free of ranks $(n+1)r^{n+1}$ and $r^{n+1}$. A surjection onto a free module locally splits after choosing finitely many preimages of a basis, so its kernel is locally free of the difference rank $nr^{n+1}$. [step 1.1, choose, construct, algebra]

3.1 At a point of $T_i$, work in the stipulated étale-local chart and set $M=F_i^{\oplus r^n}$; all other summands of $G_1$ form a free module $P$ of rank $nr^{n+1}$, while $G_2\otimes L\cong M$ after trivializing $L$. The component $a:M\to M$ is surjective modulo the maximal ideal. Its finite cokernel is zero by [F1], so $a$ is surjective; the Noetherian module $M$ is Hopfian by [F2], hence $a$ is an automorphism. Locally $\psi$ has the form $(a,b):M\oplus P\to M$, whose kernel is the graph $\{(-a^{-1}b(p),p):p\in P\}$ and is free of the stated rank. The kernels and cokernels of the coherent component map have closed support, so this invertibility and the kernel description hold on an open neighborhood of the point. [A1, F1, F2, step 1.1, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 prove local freeness of the descended twisted kernel on $U$ and near all prescribed points, with the same rank. Empty $T_i$ and $n=r=1$ are included. No global section satisfying the hypotheses has been constructed. [step 2.1, step 3.1, algebra] ∎
