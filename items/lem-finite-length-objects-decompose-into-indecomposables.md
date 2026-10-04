---
id: lem-finite-length-objects-decompose-into-indecomposables
kind: lemma
title: "Fitting decomposition in a finite-length abelian category"
status: published
origin: pipeline
deps:
  - def-composition-series-and-composition-factors-of-an-object
  - def-essential-epimorphism-and-projective-cover
  - def-projective-object
  - thm-jordan-holder-theorem-in-an-abelian-category
  - thm-projective-object-characterisations
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Proposition 16.2 and its proof"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§16.2, Proposition 16.2 and proof, printed pp. 85-87, including the quoted Krull-Schmidt statement and the argument that an indecomposable projective has a unique maximal proper subobject (full text read at harvest)"
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8, Theorem 4.4 and Appendix A"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
      locator: "Theorem 4.4(1)-(3) and Lemma A.1 with proofs, printed pp. 6-9 (full text read at harvest)"
---

## Statement

Let $\mathcal A$ be an abelian category in which every object has finite
length, and define an object to be **indecomposable** when it is nonzero and
every decomposition $X\cong Y\oplus Z$ has $Y=0$ or $Z=0$. Then:

1. every object of $\mathcal A$ is a finite direct sum of indecomposable
   objects;
2. the endomorphism ring of an indecomposable object is local, and for an
   endomorphism $f$ of an indecomposable object either $f$ is an isomorphism
   or $f$ is nilpotent;
3. the decomposition is unique up to isomorphism and permutation of the
   summands;
4. an indecomposable projective object $P$ of $\mathcal A$ has a unique
   maximal proper subobject $J(P)$, its quotient $P/J(P)$ is simple, and $P$
   is a projective cover of $P/J(P)$
   ([[def-projective-object]], [[def-essential-epimorphism-and-projective-cover]];
   projectivity here is relative to $\mathcal A$. In a full subcategory closed
   under submodules, essentiality is the superfluous-kernel condition of the
   cited module definition; projectivity in the ambient module category is
   not asserted).

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ in which every object has a finite composition series, and the notion of an indecomposable object as in the Statement.

[F1] Every object $X$ has a composition series, and by Jordan-Hölder the number of factors $\ell(X)$ is independent of the series; $\ell$ is additive on short exact sequences and strictly increases under proper inclusions, because a nonzero quotient has a composition factor. Hence every chain of subobjects of $X$ stabilizes and every nonzero object has a maximal proper subobject ([[def-composition-series-and-composition-factors-of-an-object]], [[thm-jordan-holder-theorem-in-an-abelian-category]]).

[F2] If $A,B\subseteq X$ are subobjects with $A\cap B=0$ and $A+B=X$, the canonical morphism $A\oplus B\to X$ is an isomorphism; and $X=0$ exactly when $\operatorname{id}_X=0$.

[F3] An object $P$ is projective exactly when $\operatorname{Hom}(P,-)$ is exact, equivalently when every epimorphism onto $P$ splits, equivalently when every epimorphism $E\twoheadrightarrow M$ induces a surjection $\operatorname{Hom}(P,E)\to\operatorname{Hom}(P,M)$ ([[def-projective-object]], [[thm-projective-object-characterisations]]). An epimorphism $\pi:P\to M$ is essential when $N+\ker\pi=P$ with $N\subseteq P$ forces $N=P$, and a projective cover of $M$ is an essential epimorphism from a projective object ([[def-essential-epimorphism-and-projective-cover]]).

## Proof

**Proof technique:** direct: Fitting decomposition for the stable powers of an endomorphism, local endomorphism rings, exchange and cancellation for the Krull-Schmidt uniqueness, and the unique maximal subobject of an indecomposable projective.

1.1 A proper inclusion $A\subsetneq B$ of subobjects of a finite-length object has $\ell(A)<\ell(B)$, because $B/A\ne0$ contributes at least one composition factor; consequently any ascending chain of subobjects stabilizes, and a nonzero object has a proper subobject of maximal length, hence a maximal proper subobject. [F1, given]

1.2 Every object $X$ is a finite direct sum of indecomposable objects, by induction on $\ell(X)$: for $X=0$ take the empty sum; if $X\ne0$ is indecomposable there is nothing to prove; otherwise $X\cong Y\oplus Z$ with $Y,Z\ne0$, and $\ell(Y),\ell(Z)<\ell(X)$, so the induction hypothesis applies to $Y$ and $Z$. [F1, F2, given]

2.1 For an endomorphism $f:X\to X$, the image and kernel chains stabilize by [F1]. Choose $N$ with $\operatorname{im}f^N=\operatorname{im}f^{2N}$ and $\ker f^N=\ker f^{2N}$, and put $I=\operatorname{im}f^N$, $K=\ker f^N$. The restriction $f^N|_I:I\to I$ is epic by image stabilization, hence is an isomorphism: length additivity makes its kernel zero. If $p:X\twoheadrightarrow I$ is the image factorization of $f^N$, then $(f^N|_I)^{-1}p:X\to I$ retracts the inclusion $I\hookrightarrow X$ and has kernel $K$. The split exact sequence therefore gives $X\cong I\oplus K$. [F1, F2, step 1.1, algebra]

3.1 If $X$ is indecomposable, step 2.1 forces $I=0$ or $K=0$. The first case gives $f^N=0$. In the second case $f^N$ is monic; length additivity makes its cokernel zero, so $f^N$ is an isomorphism. Since $f$ commutes with $f^N$ and its inverse, $f^{N-1}(f^N)^{-1}$ is an inverse of $f$. Thus every endomorphism of $X$ is either invertible or nilpotent. [F1, step 2.1, algebra]

4.1 Let $X$ be indecomposable and $f,g\in\operatorname{End}(X)$ with $f+g=u$ an isomorphism. If neither $f$ nor $g$ is an isomorphism, both are nilpotent by step 3.1; then $a:=u^{-1}f$ and $b:=u^{-1}g$ satisfy $a+b=\operatorname{id}_X$ and are non-units, hence nilpotent, and $a=\operatorname{id}_X-b$ gives $ab=b-b^2=ba$, so the commuting nilpotents $a,b$ have nilpotent sum: $\operatorname{id}_X=a+b$ is nilpotent, forcing $\operatorname{id}_X=0$ and $X=0$ by [F2], contrary to indecomposability. Hence $f$ or $g$ is an isomorphism. [F2, step 3.1, algebra]

5.1 More generally, if $f_1+\cdots+f_k=\operatorname{id}_X$ with $X$ indecomposable, then some $f_i$ is an isomorphism: induct on $k$, the cases $k=1$ and $k=2$ being trivial and step 4.1; for $k\ge3$ put $g=f_2+\cdots+f_k$, so that $f_1+g=\operatorname{id}_X$, and if $f_1$ is not an isomorphism then $g$ is an isomorphism by step 4.1, and $g^{-1}f_2+\cdots+g^{-1}f_k=\operatorname{id}_X$ has $k-1$ terms, so some $g^{-1}f_i$ is an isomorphism by induction and then $f_i=g(g^{-1}f_i)$ is an isomorphism. Consequently $\operatorname{End}(X)$ is local: in a ring $R$, locality is equivalent to the criterion that for every $a\in R$ either $a$ or $1-a$ is a unit, and here $a+(1-a)=\operatorname{id}_X$ is the identity, so the two-term case applies. Also, a nonzero idempotent in a local ring is the identity. [step 4.1, algebra]

6.1 Let $X=X_1\oplus A=Y_1\oplus\cdots\oplus Y_m$ with $X_1,Y_j$ indecomposable, and let $a_j:Y_j\to X_1$, $b_j:X_1\to Y_j$ be the composites of the inclusions and projections. Then $\sum_j a_jb_j=\operatorname{id}_{X_1}$; by step 5.1 some $a_{j_0}b_{j_0}$ is an isomorphism, and after relabelling $j_0=1$ and setting $\beta:=a_1b_1$ we obtain $\varepsilon:=b_1\beta^{-1}a_1\in\operatorname{End}(Y_1)$ with $\varepsilon^2=b_1\beta^{-1}(a_1b_1)\beta^{-1}a_1=\varepsilon$, so $\varepsilon$ is an idempotent; it is nonzero because $\beta^{-1}a_1$ is a left inverse of $b_1$ and $X_1\ne0$, and its image is $b_1(X_1)$. By the last sentence of step 5.1, $\varepsilon=\operatorname{id}_{Y_1}$; hence $\beta^{-1}a_1$ and $b_1$ are mutually inverse isomorphisms $X_1\cong Y_1$. [F2, step 5.1, algebra]

6.2 Let $P$ be an indecomposable projective object and let $Q,Q'\subseteq P$ be proper subobjects with $Q+Q'=P$. The addition morphism $Q\oplus Q'\to P$ is an epimorphism, so by [F3] the identity of $P$ lifts to $h:P\to Q\oplus Q'$; writing $h=(h_1,h_2)$ and $\varphi:=i_Qh_1$, $\psi:=i_{Q'}h_2$ in $\operatorname{End}(P)$, one has $\varphi+\psi=\operatorname{id}_P$, so $\varphi$ or $\psi$ is an isomorphism by the two-term case of step 5.1. If $\varphi$ is an isomorphism then $i_Q$ is a split monomorphism and an epimorphism, hence an isomorphism $Q\cong P$, contradicting the strictness $\ell(Q)<\ell(P)$ for the proper inclusion $Q\subsetneq P$ from step 1.1; the same argument applies to $\psi$. Hence proper subobjects of $P$ have proper sum. Now choose a proper subobject $M\subseteq P$ of maximal length, which exists by step 1.1. For any proper $Q$ the sum $M+Q$ is proper, so $\ell(M+Q)\le\ell(M)$, while $M\subseteq M+Q$ gives $\ell(M)\le\ell(M+Q)$; hence $M=M+Q$ and $Q\subseteq M$. Therefore $M$ is the unique maximal proper subobject $J(P)$, and $P/J(P)$ is simple, since a proper subobject of the quotient pulls back to a proper subobject of $P$ contained in $J(P)$. [F1, F3, step 1.1, step 5.1]

7.1 Keep the notation of step 6.1, put $B=\bigoplus_{j\ge2}Y_j$, and use the isomorphism $b_1:X_1\to Y_1$ to define $\Theta=i_{X_1}b_1^{-1}p_{Y_1}+i_Bp_B\in\operatorname{End}(X)$. Relative to $X=Y_1\oplus B$, its matrix is $\begin{pmatrix}1&0\\ w&1\end{pmatrix}$, where $w=p_Bi_{X_1}b_1^{-1}:Y_1\to B$, because $p_{Y_1}i_{X_1}=b_1$. Thus $\Theta$ is invertible with inverse $\begin{pmatrix}1&0\\ -w&1\end{pmatrix}$, sends $Y_1$ onto $X_1$, and fixes $B$. Therefore $X=X_1\oplus B$. Taking the quotient by $X_1$ in this decomposition and in $X=X_1\oplus A$ gives $A\cong X/X_1\cong B$, establishing cancellation. [F2, step 6.1, algebra]

8.1 Let $X=X_1\oplus\cdots\oplus X_n=Y_1\oplus\cdots\oplus Y_m$ with all $X_i,Y_j$ indecomposable, and induct on $n$. For $n=0$ we have $X=0$, so $m=0$ because the $Y_j$ are nonzero. For $n\ge1$, steps 6.1 and 7.1 applied with $A=\bigoplus_{i\ge2}X_i$ provide $j_0$ with $X_1\cong Y_{j_0}$ and $\bigoplus_{i\ge2}X_i\cong\bigoplus_{j\ne j_0}Y_j$; the left-hand side is a sum of $n-1$ indecomposables and the right-hand side of $m-1$, so the induction hypothesis gives $n-1=m-1$ and a bijection matching the remaining factors up to isomorphism, and $X_1\cong Y_{j_0}$ completes the correspondence. [step 6.1, step 7.1, step 1.2]

9.1 Collecting the results: step 1.2 gives the finite decomposition into indecomposables, step 5.1 the local endomorphism ring together with the finite-sum criterion, step 3.1 the dichotomy isomorphism-or-nilpotent, step 8.1 the uniqueness up to isomorphism and permutation, and step 6.2 the unique maximal proper subobject $J(P)$ of an indecomposable projective $P$ with simple quotient. Moreover the canonical epimorphism $\pi:P\to P/J(P)$ is essential: if $N\subseteq P$ satisfies $N+J(P)=P$ and $N$ were proper, then $N\subseteq J(P)$ by step 6.2 and $P=N+J(P)=J(P)$, a contradiction; hence $N=P$. With $P$ projective, $(P,\pi)$ is a projective cover of the simple object $P/J(P)$ in the sense of [F3]. [F3, step 1.2, step 3.1, step 5.1, step 6.2, step 8.1] ∎
