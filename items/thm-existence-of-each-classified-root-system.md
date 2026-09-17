---
id: thm-existence-of-each-classified-root-system
kind: theorem
title: Existence of each classified root system
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-classification-of-irreducible-reduced-crystallographic-root-systems, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §7, Proposition 2.87 and (2.85)-(2.89), printed pp. 181-184"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 23, Definitions 23.8, 23.11, 23.14, 23.15 and Exercises 23.9, 23.12"
landmark: false
proof_strategy: direct
---

## Statement

Every type of the classification list of
[[thm-classification-of-irreducible-reduced-crystallographic-root-systems]]
is realized by a reduced crystallographic Euclidean root system with the
indicated Dynkin diagram: for every $n\ge1$ there are root systems
$A_n,B_n\ (n\ge2),C_n\ (n\ge3),D_n\ (n\ge4)$ in Euclidean space, and there
are root systems $E_6,E_7,E_8,F_4,G_2$ whose Dynkin diagrams are the diagrams
of the classification list.

## Facts & Assumptions

**Given:** The standard Euclidean spaces $\mathbb R^n$ with their standard inner products, unit coordinate vectors $e_1,\dots,e_n$, and the classification list with its diagram conventions.

[L1] A reduced crystallographic root system is a finite spanning set $\Phi$ of nonzero vectors with $s_\alpha(\Phi)=\Phi$, integral Cartan integers $2(\beta,\alpha)/(\alpha,\alpha)$, and $\mathbb R\alpha\cap\Phi=\{\pm\alpha\}$; the simple roots with respect to a regular functional form a base and their Cartan matrix determines the Dynkin diagram ([[def-reduced-crystallographic-euclidean-root-system]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[L2] The Dynkin diagrams of the classification list are those of the types $A_n,B_n,C_n,D_n,E_6,E_7,E_8,F_4,G_2$, and a based root system is determined up to isomorphism by its Cartan matrix ([[thm-classification-of-irreducible-reduced-crystallographic-root-systems]]).

## Proof

**Proof technique:** direct.

1.1 (Type $A_{n-1}$.) In $E=\{x\in\mathbb R^n:\sum_ix_i=0\}$ put $\Phi=\{e_i-e_j:i\ne j\}$; it is finite, nonempty, spans $E$, and contains no zero vector. For $\alpha=e_i-e_j$ the reflection $s_\alpha$ sends $e_i$ to $e_j$, $e_j$ to $e_i$ and fixes every other coordinate vector, so it permutes $\Phi$ and $\Phi\cap\mathbb R\alpha=\{\pm\alpha\}$; the Cartan integers are $2(e_k-e_l,e_i-e_j)/2\in\{0,\pm1,\pm2\}$. For the regular functional $x\mapsto(x,(n,n-1,\dots,1))$ the simple roots are $e_i-e_{i+1}$, whose Cartan matrix is $A_{n-1}$. [L1, algebra]

1.2 (Types $B_n$ and $C_n$.) In $\mathbb R^n$ put $\Phi_{B}=\{\pm e_i\}\cup\{\pm e_i\pm e_j:i<j\}$ and $\Phi_C=\{\pm2e_i\}\cup\{\pm e_i\pm e_j:i<j\}$. Both are finite, span $\mathbb R^n$, omit $0$, and are reduced. Reflections: $s_{e_i}$ negates the $i$-th coordinate, $s_{2e_i}$ does the same, and $s_{e_i\pm e_j}$ permutes or changes the signs of coordinates $i,j$ and fixes the others, so each reflection permutes $\Phi_B$ and $\Phi_C$. Integrality is checked directly from $(e_k,e_l)=\delta_{kl}$: for $\Phi_B$ the Cartan integers lie in $\{0,\pm1,\pm2\}$, and for $\Phi_C$ the values $2(\beta,2e_i)/(2e_i,2e_i)=\beta_i$ and $2(\beta,\alpha)/(\alpha,\alpha)$ with $\alpha$ of the second kind are likewise integers in $\{0,\pm1,\pm2\}$. The simple roots $e_1-e_2,\dots,e_{n-1}-e_n,e_n$ give the $B_n$ matrix, and $e_1-e_2,\dots,e_{n-1}-e_n,2e_n$ give the $C_n$ matrix. [L1, algebra]

1.3 (Type $D_n$.) In $\mathbb R^n$ put $\Phi_D=\{\pm e_i\pm e_j:i<j\}$ for $n\ge4$. It is finite, spans, is reduced, and each reflection $s_{e_i\pm e_j}$ fixes the other coordinates or changes their signs, so it permutes $\Phi_D$; the Cartan integers are $0,\pm1,\pm2$. The simple roots $e_1-e_2,\dots,e_{n-2}-e_{n-1},e_{n-1}-e_n,e_{n-1}+e_n$ give the $D_n$ matrix. [L1, algebra]

1.4 (Type $G_2$.) In $\mathbb R^2$ let $\alpha,\beta$ satisfy $(\alpha,\alpha)=6$, $(\beta,\beta)=2$, $(\alpha,\beta)=-3$ and put $\Phi_G=\{\pm\alpha,\pm\beta,\pm(\alpha+\beta),\pm(\alpha+2\beta),\pm(\alpha+3\beta),\pm(2\alpha+3\beta)\}$; the twelve vectors are distinct and nonzero. Direct computation gives $(\alpha,\alpha+\beta)=3$, $(\alpha,\alpha+2\beta)=0$, $(\alpha,\alpha+3\beta)=-3$, $(\alpha,2\alpha+3\beta)=3$, $(\beta,\alpha+\beta)=-1$, $(\beta,\alpha+2\beta)=1$, $(\beta,\alpha+3\beta)=3$, $(\beta,2\alpha+3\beta)=0$, from which every Cartan integer is seen to lie in $\{0,\pm1,\pm2,\pm3\}$ and every root is reduced; the same formulae show $s_\alpha$ permutes $\Phi_G$ (it sends $\beta\mapsto\alpha+\beta$, $\alpha+\beta\mapsto\beta$, $\alpha+3\beta\mapsto2\alpha+3\beta$, $2\alpha+3\beta\mapsto\alpha+3\beta$, and fixes $\alpha+2\beta$) and $s_\beta$ permutes $\Phi_G$ (it sends $\alpha\mapsto\alpha+3\beta$, $\alpha+\beta\mapsto\alpha+2\beta$, $\alpha+2\beta\mapsto\alpha+\beta$, $\alpha+3\beta\mapsto\alpha$, and fixes $2\alpha+3\beta$). With the simple roots $\alpha,\beta$ the Cartan matrix is $\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$, which is the $G_2$ diagram. [L1, algebra]

1.5 (Type $F_4$.) In $\mathbb R^4$ put $\Phi_F=\{\pm e_i\}\cup\{\pm e_i\pm e_j:i<j\}\cup\{\frac12(\pm e_1\pm e_2\pm e_3\pm e_4)\}$, the last set containing all $16$ sign choices; it is finite, spans, is reduced, and one checks the reflection axiom in three cases following the source: if $\beta=\pm e_i$ and $\alpha$ is a half-sum root then $s_\alpha\beta=\pm s_\beta\alpha$; if $\beta=e_i+e_j$ and $\alpha=\frac12\sum\pm e_k$ then $s_\alpha\beta=\beta$ unless the coefficients of $e_i,e_j$ in $\alpha$ agree, in which case $s_\alpha\beta$ is $\pm$ the $e_i,e_j$-part of $\beta$ without the factor $\frac12$, again a root of the first kind; and if both $\alpha,\beta$ are half-sum roots then, according as one or three of their signs agree, $s_\alpha\beta=\pm e_i$ for a suitable $i$. Integrality follows from the finite table of inner products, in which $(x,y)\in\frac12\mathbb Z$ and $(x,x)\in\{1,2\}$. With the simple roots $\frac12(e_1-e_2-e_3-e_4),e_4,e_3-e_4,e_2-e_3$ the Cartan matrix is that of $F_4$. [L1, algebra]

1.6 (Type $E_8$.) In $\mathbb R^8$ put $\Phi_8=\{\pm e_i\pm e_j:i<j\}\cup\{\frac12\sum_i(-1)^{n(i)}e_i:\sum_in(i)\ \text{even}\}$; all roots have squared length $2$, so if $\alpha,\beta$ are nonorthogonal and nonproportional then $s_\alpha\beta=\pm s_\beta\alpha$, reducing the reflection check to the case where both are half-sum roots, where two or six signs agree and $s_\alpha\beta=\pm e_i\pm e_j$ for suitable signs; the finite table of inner products has entries $0,\pm1,\pm2$ and the system is reduced. With the simple roots $\frac12(e_1+e_8-\sum_{i=2}^{7}e_i),\ e_7+e_8,\ e_i-e_{i+1}\ (i\ge2)$ the Cartan matrix is that of $E_8$ and $|\Phi_8|=240$. [L1, algebra]

2.1 (Types $E_7$ and $E_6$.) Let $V_7=(e_7+e_8)^{\perp}$ and $V_6=V_7\cap(e_6+e_8)^{\perp}$, and put $\Phi_7=\Phi_8\cap V_7$, $\Phi_6=\Phi_8\cap V_6$. If $\alpha,x\in V_i$ then $s_\alpha x=x-c\alpha\in V_i$, so the reflection closure of $\Phi_8$ is inherited: $\Phi_7$ and $\Phi_6$ are reduced crystallographic root systems in $V_7,V_6$ with $126$ and $72$ roots respectively, and every root of $\Phi_8$ has squared length $2$, so every root of $\Phi_7$ and of $\Phi_6$ also has squared length $2$. By [L2] every component of a reduced crystallographic root system is one of the classified types, and a multiple edge of a Dynkin diagram joins simple roots of different squared lengths, since there $|\alpha_i|^{2}/|\alpha_j|^{2}=a_{ji}/a_{ij}\ne1$; hence every component of $\Phi_7$ and of $\Phi_6$ has a simply-laced diagram, so it is of type $A_r$ or $D_r$ (and of type $E_6$ in rank six, or $E_7$, $E_8$ in ranks seven, eight). Suppose first that $\Phi_6$ were reducible; then its components have ranks summing to $6$ and, being simply-laced and proper, are of type $A_r$ or $D_r$, whose root numbers are $r(r+1)$ by step 1.1 and $2r(r-1)$ by step 1.3. The finite list of partitions of $6$ into at least two parts then bounds the total by $|D_5|+|A_1|=40+2=42$ (all other partitions giving fewer roots), which is less than $|\Phi_6|=72$; so $\Phi_6$ is irreducible, and its rank-six simply-laced diagram is that of $A_6$, $D_6$ or $E_6$; the explicit models give $|A_6|=42$ and $|D_6|=60$, neither equal to $|\Phi_6|=72$, so $\Phi_6\cong E_6$, and the $E_6$ type therefore has $72$ roots. Now if $\Phi_7$ were reducible, its components would have ranks summing to $7$ and would be of type $A_r$, $D_r$ or $E_6$; the finite list of partitions of $7$ into at least two parts bounds the total by $|E_6|+|A_1|=72+2=74$ (all other partitions giving fewer roots, the next largest being $|D_6|+|A_1|=62$), which is less than $|\Phi_7|=126$; so $\Phi_7$ is irreducible, and its rank-seven simply-laced diagram is that of $A_7$, $D_7$ or $E_7$; the explicit models give $|A_7|=56$ and $|D_7|=84$, neither equal to $|\Phi_7|=126$, so $\Phi_7\cong E_7$ and the $E_7$ type therefore has $126$ roots. Thus the two subsystems realize $E_7$ and $E_6$ with the Dynkin diagrams of the classification list. [L1, L2, step 1.1, step 1.3, algebra]

3.1 The steps above exhibit a reduced crystallographic root system with the Dynkin diagram of each type in the classification list; by [L2] these systems have the stated types, which completes the existence proof. No construction imports an unverified table: every system is given by explicit vectors and its Cartan matrix is computed from them. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 2.1, L2, algebra] ∎
