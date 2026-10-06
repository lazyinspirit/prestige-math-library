---
id: thm-tits-deformation-for-the-type-a-hecke-algebra
kind: theorem
title: "Tits deformation for the type-A Hecke algebra"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - thm-standard-basis-of-the-generic-type-a-hecke-algebra
  - prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra
  - lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra
  - lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras
  - lem-formal-triviality-of-one-parameter-semisimple-algebras
  - def-principal-open-classical-variety
  - def-classical-affine-variety-morphism
  - thm-chevalley-constructible-image-varieties
  - thm-affine-nullstellensatz-correspondence
  - def-axiom-of-choice
  - thm-unit-isomorphisms-for-module-tensor-products
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Theorem 2.6, Corollary 2.7 and the six-step proof, PDF pp. 5-6"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Proposition 11.5 and Remark 11.6 (Tits' deformation theorem), printed p. 47"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Theorem 5.18 (Tits's Deformation Theorem) and Corollary 5.19, printed p. 45"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Charles W. Curtis, Representations of Hecke Algebras (Asterisque 168) - Proposition (3.1), Corollaries (3.2)-(3.3) (numerical invariants and $\\mathbb C W\\cong H(G^F,B^F)$), printed pp. 25-26"
      url: "https://www.numdam.org/article/AST_1988__168__13_0.pdf"
    - title: "J. S. Milne, Algebraic Geometry, Theorem 2.16 and Theorem 9.7 with proofs, printed pp. 42-43 and 199-201"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $X=D(f)\subseteq\mathbb A^1_{\mathbb C}$ be a
nonempty principal open, let $A$ be a unital associative
$\mathbb C[z,1/f]$-algebra free of finite rank, and let $x,y\in X$ have
semisimple fibers. Then $A_x\cong A_y$ as $\mathbb C$-algebras. In particular,
for every prime power $q$,
$$H_q(S_n)\cong e_B\mathbb C[\operatorname{GL}_n(\mathbb F_q)]e_B\cong\mathbb C[S_n],$$
preserving the number and dimensions of simple modules. AC is used through the
published Chevalley constructibility and strong Nullstellensatz suppliers, not
in the formal lifting or determinant argument.

## Facts & Assumptions

**Given:** A nonempty principal open $X=D(f)\subseteq\mathbb A^1_{\mathbb C}$ ([[def-principal-open-classical-variety]]), a unital associative $\mathbb C[z,1/f]$-algebra $A$ free of finite rank $N$ with basis $e_1,\dots,e_N$ and structure constants $c^k_{ij}\in\mathbb C[z,1/f]$ defined by $e_ie_j=\sum_kc^k_{ij}e_k$, points $x,y\in X$ with semisimple fibers $A_x=A\otimes_{\mathbb C[z,1/f]}\mathbb C_x$ and $A_y=A\otimes_{\mathbb C[z,1/f]}\mathbb C_y$, where $\mathbb C_x$ is evaluation at $x$, and the Axiom of Choice AC ([[def-axiom-of-choice]]).

[F1] For a finite-dimensional associative unital $\mathbb C$-algebra $B$ the trace form $(a,b)=\operatorname{tr}(L_{ab})$ is symmetric and associative, it is nondegenerate precisely when $B$ is semisimple, and a nonzero semisimple $B$ is a product of matrix algebras over $\mathbb C$ ([[lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras]]).

[F2] For $R=\mathbb C[\![t]\!]$, a unital associative $R$-algebra free of finite rank with $A/tA\cong\prod_i\operatorname M_{d_i}(\mathbb C)$ is isomorphic to $\prod_i\operatorname M_{d_i}(R)$; and an $R$-linear endomorphism of a finite free $R$-module whose reduction modulo $t$ is an isomorphism is an isomorphism ([[lem-formal-triviality-of-one-parameter-semisimple-algebras]]).

[F3] Every morphism of classical varieties over an algebraically closed field sends constructible subsets to constructible subsets; this statement assumes AC ([[thm-chevalley-constructible-image-varieties]]).

[F4] Assume AC. For every ideal $J\subseteq\mathbb C[x_1,\dots,x_m]$, $I(V(J))=\sqrt J$. Indeed $V(J)=V(\sqrt J)$, and the radical-ideal correspondence gives $I(V(\sqrt J))=\sqrt J$. Thus a polynomial vanishing on $V(J)$ has a positive power in the original equation ideal $J$ ([[thm-affine-nullstellensatz-correspondence]]).

[F5] $H_v(n)$ is free over $\mathbb Z[v^{\pm1}]$ with basis the standard elements $T_w$, $w\in S_n$, so its rank is $n!$; extension of scalars sends free modules to free modules with the images of a basis as a basis ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]], [[thm-unit-isomorphisms-for-module-tensor-products]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[F6] The specializations $v\mapsto1$ and $v\mapsto q$ of $H_v(n)$ are $\mathbb C[S_n]$ and $e_B\mathbb C[\operatorname{GL}_n(\mathbb F_q)]e_B$ respectively, and both are semisimple over $\mathbb C$ ([[prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra]], [[lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra]]).

[F7] The only place AC is invoked is [F3] and [F4]; the trace-form characterization and the formal triviality statement are choice-free ([[lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras]], [[lem-formal-triviality-of-one-parameter-semisimple-algebras]]).



## Proof

**Proof technique:** direct.

1.1 If $N=0$ then $A=0$ and all fibers are the zero algebra, whose trace form is nondegenerate on the zero space, so $A_x\cong A_y$ trivially by [F1]. Assume $N\ge1$. The structure constants $c^k_{ij}$ are regular on $D(f)$; clearing denominators in the identity expressing the associativity of $A$ is unnecessary, but for any $z\in D(f)$ the fiber $A_z$ is the $\mathbb C$-algebra with basis $e_i(z)$ and structure constants $c^k_{ij}(z)$. [F1, given, algebra]

1.2 Let $G(z)$ be the $N\times N$ matrix with entries $\operatorname{tr}(L_{e_ie_j})$, computed over the ring $\mathbb C[z,1/f]$; its determinant $\Delta\in\mathbb C[z,1/f]$ is a rational function regular on $D(f)$, so $\Delta=d/f^m$ for some $d\in\mathbb C[z]$ and $m\ge0$. For $z\in D(f)$ the fiber of $G$ at $z$ is the trace-form matrix of $A_z$ in the basis $e_i(z)$, because base change preserves the structure constants and hence the matrices of the operators $L_{e_ie_j}$. By [F1], $A_z$ is semisimple exactly when $\det G(z)\ne0$, that is exactly when $d(z)\ne0$; thus the semisimple locus is $Y=D(fd)$. Since $x,y$ have semisimple fibers, $x,y\in Y$ and $Y\ne\varnothing$; also $d\ne0$ in this case, and $Y=\mathbb A^1\setminus V(fd)$ is infinite because a nonzero polynomial has finitely many roots. [F1, given, algebra]

1.3 Put $B=\mathbb C[z,1/(fd)]$ and $A_Y=B\otimes_{\mathbb C[z,1/f]}A$, free of rank $N$ over $B$. For $x\in Y$, evaluation $z\mapsto x+t$ defines $\varphi_x:B\to R=\mathbb C[\![t]\!]$, because $(fd)(x+t)$ has nonzero constant term and is a unit. The algebra $A_x^{\mathrm{form}}=R\otimes_{B,\varphi_x}A_Y$ is finite free with reduction $A_x$ modulo $t$. By [F1] and [F2], it is isomorphic to $R\otimes_{\mathbb C}A_x$. Write this isomorphism in the chosen bases as $P\in\operatorname{GL}_N(R)$ and put $h=(\det P)^{-1}$, $u=(fd)(x+t)^{-1}$. [F1, F2, given, algebra]

2.1 Let $J_x$ be the ideal in $\mathbb C[z,(p_{ai}),h,u]$ generated by $h\det P-1$, $u(fd)(z)-1$, and the cleared multiplication equations $$ (fd)(z)^M\left(\sum_k c^k_{ij}(z)p_{ak}-\sum_{b,c}p_{bi}p_{cj}c^a_{bc}(x)\right)=0 $$ for all $a,i,j$, with $M$ large enough to clear denominators. Let $Z_x=V(J_x)$. Its projection to the $z$ coordinate has image $E_x=\{z\in Y:A_z\cong A_x\}$: the equations force $P$ invertible and multiplicative, hence unital because a surjective multiplicative map sends the identity to the identity; conversely each algebra isomorphism satisfies them with the indicated $h,u$. Chevalley [F3] makes $E_x$ constructible. The formal matrix of step 1.3 satisfies these same polynomial equations at $z=x+t$. [F3, step 1.3, given, algebra]

2.2 We show that $E_x$ is infinite. It contains $x$, through $P=1$, $h=1$, $u=(fd)(x)^{-1}$. Suppose $E_x$ were finite and put $g(z):=\prod_{a\in E_x}(z-a)$, a nonzero polynomial with the simple root $x$; then $g$ vanishes on $\pi(Z_x)$. By the strong Nullstellensatz [F4], vanishing on $Z_x=V(J_x)$ gives $g\in\sqrt{J_x}$, so some power $g^N$ lies in the defining equation ideal $J_x$. On the other hand step 1.3 supplies the point $\bigl(z=x+t,\ P(t),\ h(t),\ u(t)\bigr)$ of $Z_x$ with coordinates in the $\mathbb C$-algebra $R=\mathbb C[\![t]\!]$: the intertwining equations hold because $P$ is an isomorphism, and the two normalizing equations hold by construction. Evaluating the identity $g^N=\sum A_i\,\text{generator}_i$ at this point gives $g(x+t)^N=0$ in the power-series ring. But $g(z)=(z-x)q(z)$ with $q(x)\ne0$, so $g(x+t)=t\,q(x+t)$ with $q(x+t)$ a unit of $R$, and $t^Nq(x+t)^N\ne0$: a contradiction. Hence $E_x$ is infinite. [F2, F4, step 1.3, algebra]

3.1 A constructible subset of the line is a finite union of locally closed subsets; a locally closed subset is $U\cap V(J)$ with $U$ open and $V(J)$ closed in $\mathbb A^1$, and an infinite one among them has $V(J)$ infinite, hence $V(J)=\mathbb A^1$ and the piece contains the nonempty open $U$. Therefore an infinite constructible subset of $Y$ is cofinite in $Y$: its complement lies in the complement of a nonempty open subset of $\mathbb A^1$, a finite set. By steps 2.2 and this observation $E_x$ is cofinite in $Y$, and applying the same argument with $y$ in place of $x$ makes $E_y$ cofinite in $Y$ as well. Since $Y$ is infinite, $E_x\cap E_y\ne\varnothing$; for $z\in E_x\cap E_y$ one has $A_x\cong A_z\cong A_y$, proving the general assertion. [step 2.2, algebra]

4.1 Apply the general assertion to $A=\mathbb C[z,1/z]\otimes_{\mathbb Z[v^{\pm1}]}H_v(n)$ with $f=z$, $x=1$ and $y=q$: by [F5] this is free of finite rank $n!$ over $\mathbb C[z,1/z]$, and its fibers at $1$ and $q$ are $H_1(S_n)\cong\mathbb C[S_n]$ and $H_q(S_n)\cong e_B\mathbb C[\operatorname{GL}_n(\mathbb F_q)]e_B$, both semisimple by [F6]. Hence $H_q(S_n)\cong\mathbb C[S_n]$ as $\mathbb C$-algebras. An algebra isomorphism carries the set of simple modules to the set of simple modules and preserves dimensions, so the number and dimensions of the simple modules agree; in particular, by [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], the simple modules of the finite Hecke algebra are parametrized by partitions of $n$, after choosing an isomorphism. [F5, F6, step 3.1, algebra]

5.1 Steps 1.1 and 1.2 reduce to the semisimple locus and identify it as a principal open, steps 1.3 and 2.1 set up the formal solution and the constructible incidence image, steps 2.2 and 3.1 prove the image cofinite and obtain $A_x\cong A_y$, and step 4.1 applies this to the Hecke family. AC enters only through [F3] and [F4], as recorded in [F7]; the formal-lifting and trace-form arguments are choice-free. [F7, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 4.1] ∎
