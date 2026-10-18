---
id: lem-temperley-lieb-link-state-gram-determinant
kind: lemma
title: "The Temperley–Lieb link-state Gram determinant"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-temperley-lieb-link-state-standard-modules
  - thm-temperley-lieb-link-state-dimension-formula
  - lem-temperley-lieb-link-state-gram-form-is-invariant
  - lem-temperley-lieb-link-state-restriction-filtration
  - cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules
  - thm-the-complex-numbers-are-algebraically-closed
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - thm-schurs-lemma-for-modules
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4, equations (4.6)–(4.20), PDF pp. 17–21: restriction splitting, local Gram blocks, recursion, determinant formula, and specialization."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §§1–2, printed pp. 9–16: cellular cell forms, their radicals, and simple heads."
---

## Statement

Let $q\in\mathbb C^\times$, $\delta=q+q^{-1}$, $n\ge0$, and $0\le p\le\lfloor n/2\rfloor$. Put $t=n-2p$, and let $G_{n,p}$ be the Gram matrix of the link-state form on $W_{n,t}(\mathbb C,\delta)$ in its link-state basis. Set

$$d_{n,r}=\binom nr-\binom n{r-1},\qquad \binom n{-1}=0.$$

Then

$$\det G_{n,p}=\prod_{j=1}^{p}\left(\frac{[n-2p+1+j]_q}{[j]_q}\right)^{d_{n,p-j}}.$$

The empty product for $p=0$ is $1$. The entire product is interpreted as the polynomial in $\delta$ represented by this rational expression; individual quotients need not specialize separately when their denominators vanish.

## Facts & Assumptions

**Given:** The complex Temperley–Lieb diagram algebra with loop value $\delta$, the link-state module $W_{n,t}$, its capping form, and $t=n-2p$.

[F1] The link-state basis has $d_{n,p}$ elements, is indexed by noncrossing partial matchings with $p$ arcs and $t$ defects, and its form is computed by reflection, capping, and one factor $\delta$ per closed loop ([[def-temperley-lieb-link-state-standard-modules]], [[thm-temperley-lieb-link-state-dimension-formula]], [[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

[F2] Restriction from rank $n$ to rank $n-1$ has the submodule of states with a rightmost defect and quotient obtained by cutting the arc ending at $n$ ([[lem-temperley-lieb-link-state-restriction-filtration]]).

[F3] For a finite-dimensional cellular algebra over a field, the nonzero cell-form quotients are absolutely simple, and a nondegenerate cell form makes the whole cell module equal to its absolutely simple quotient ([[cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules]]).

[F4] A nonzero homomorphism between simple modules is an isomorphism, so the endomorphism ring of a simple module is a division ring ([[thm-schurs-lemma-for-modules]]).

[F5] The field $\mathbb C$ is algebraically closed ([[thm-the-complex-numbers-are-algebraically-closed]]). Hence, for a finite-dimensional complex simple module $M$, each $T\in\operatorname{End}_A(M)$ has an eigenvalue $\lambda\in\mathbb C$ as a complex-linear operator. Then $T-\lambda I$ is noninvertible, so [F4] forces $T=\lambda I$ and $\operatorname{End}_A(M)=\mathbb C$. If $M$ has a fixed nondegenerate invariant form $\phi$, every other invariant form corresponds, via $\phi:M\to M^*$ with the dual action induced by the reflection anti-involution, to an endomorphism of $M$ and is therefore a scalar multiple of $\phi$.

[F6] The quantum integers obey $[r+1]_q=\delta[r]_q-[r-1]_q$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

## Proof

**Proof technique:** Induct on $n$ for $q^2$ not a root of unity, derive a determinant recurrence from the orthogonal restriction splitting, and then specialize the polynomial identity.

1.1 For $n=0$ and $n=1$, the only allowed arc count is $p=0$; the all-defect link state has Gram matrix $(1)$, agreeing with the empty product. [F1, given, base]

2.1 For any $n$, the $p=0$ module is spanned by the all-defect state and its form value is $1$. Now fix $n\ge2$ and assume inductively that the determinant formula holds at all smaller ranks; because no positive quantum integer vanishes when $q^2$ is not a root of unity, those smaller Gram forms are nondegenerate. [F1, step 1.1, ih]

3.1 Suppose $n>2p>0$. By [F2], restriction has the rightmost-defect submodule $U\cong W_{n-1,n-1-2p}$ and quotient $W_{n-1,n-1-2(p-1)}$. Deleting the rightmost defect preserves the reflected-and-capped matching graph and its loop count, so the restricted form on $U$ is exactly the standard form with matrix $G_{n-1,p}$; it is nondegenerate by induction. Invariance [F1] makes $U^\perp$ invariant, and nondegeneracy on $U$ gives $W_{n,n-2p}=U\oplus U^\perp$. The quotient map identifies $U^\perp$ with the quotient module. The quotient's standard form is nondegenerate by induction, so [F3] makes it absolutely simple and the form identifies it with its dual. The form induced from $U^\perp$ is invariant; by [F4, F5], its map to the dual is a scalar multiple of the standard form's map, say $\alpha_{n,p}$ times that map. Subtracting the submodule projection from each quotient lift is a block-triangular basis change with identity diagonal, so the Gram matrix in this basis is $G_{n-1,p}\oplus\alpha_{n,p}G_{n-1,p-1}$ and the change-of-basis determinant is $1$. [F1, F2, F3, F4, F5, step 2.1, algebra]

3.2 If $n=2p$ with $p>0$, deleting the rightmost endpoint and turning its partner into a defect bijects the link-state basis with that of $W_{2p-1,p-1}$. In the glued matching graph, the reduced pairing has one open path between the new defect ends; restoring the two terminal arcs closes exactly that path into one additional component and leaves every other component unchanged. Hence $G_{2p,p}=\delta G_{2p-1,p-1}$, which is the boundary scalar $\alpha_{2p,p}=\delta$. [F1, F2, step 2.1, algebra]

4.1 For $n>2p$, refine the ordered link states into four types: type 1 has $n$ and $n-1$ both defects; type 2 has $n$ a defect and $n-1$ on an earlier arc; type 3 joins $n-1$ to $n$; and type 4 has $n$ on an arc whose partner is earlier than $n-1$. The gluing rule gives $G^{12}_{n,p}=\begin{pmatrix}0&*\\G_{n-2,p-1}&*\end{pmatrix}$ and $G^{22}_{n,p}=\begin{pmatrix}\delta G_{n-2,p-1}&*\\ *&*\end{pmatrix}$: the type-1/type-3 pairing has unmatched defects and is zero, cutting a type-2/type-3 terminal arc leaves the same exterior matching, and a type-3/type-3 pairing creates one loop. Let $A=G_{n-2,p}$, $B=G_{n-2,p-1}$, and write the rank-$(n-1)$ form as $G_{n-1,p}=\begin{pmatrix}A&AV_0\\V_0^{\mathsf T}A&V_0^{\mathsf T}AV_0+\alpha_{n-1,p}B\end{pmatrix}$; at $n=2p+1$ the $A,V_0$ blocks are empty and their products are omitted. If $V=\begin{pmatrix}V^{11}&*\\V^{21}&*\end{pmatrix}$ is the off-diagonal block in the orthogonalizing basis change of step 3.1, then $G^{12}_{n,p}=G_{n-1,p}V$ gives $0=AV^{11}+AV_0V^{21}$ and $B=V_0^{\mathsf T}AV^{11}+(V_0^{\mathsf T}AV_0+\alpha_{n-1,p}B)V^{21}$. The induction hypothesis makes $A$ invertible when nonempty, so the first equation gives $V^{11}=-V_0V^{21}$; at $n=2p+1$ these blocks are omitted. Substitution in the second equation cancels the $A$-terms and yields $B=\alpha_{n-1,p}BV^{21}$. The induction hypothesis makes $B$ invertible for generic $q$, so multiplication by $B^{-1}$ gives $I=\alpha_{n-1,p}V^{21}$ and hence $\alpha_{n-1,p}\ne0$ and $V^{21}=\alpha_{n-1,p}^{-1}I$. [F1, F2, step 2.1, step 3.1, step 3.2, algebra]

5.1 The top-left block of $G^{22}_{n,p}=V^{\mathsf T}G_{n-1,p}V+\alpha_{n,p}G_{n-1,p-1}$ is $\delta B$. Its first term is $(V^{11})^{\mathsf T}AV^{11}+(V^{11})^{\mathsf T}AV_0V^{21}+(V^{21})^{\mathsf T}V_0^{\mathsf T}AV^{11}+(V^{21})^{\mathsf T}(V_0^{\mathsf T}AV_0+\alpha_{n-1,p}B)V^{21}$. Substituting $V^{11}=-V_0V^{21}$ makes the coefficients of $(V^{21})^{\mathsf T}V_0^{\mathsf T}AV_0V^{21}$ equal $1-1-1+1=0$ and leaves $\alpha_{n-1,p}(V^{21})^{\mathsf T}BV^{21}=\alpha_{n-1,p}^{-1}B$. The first block of $G_{n-1,p-1}$ is $B$, so cancelling invertible $B$ gives $\alpha_{n,p}=\delta-1/\alpha_{n-1,p}$. [F1, F2, step 3.2, step 4.1, algebra]

6.1 The quantum-integer recurrence [F6] solves this scalar recurrence as $\alpha_{n,p}=[n-2p+2]_q/[n-2p+1]_q$: the boundary value at $n=2p$ is $[2]_q/[1]_q=\delta$, and if $\alpha_{n-1,p}=[n-2p+1]_q/[n-2p]_q$, then $\delta-1/\alpha_{n-1,p}=\delta-[n-2p]_q/[n-2p+1]_q=[n-2p+2]_q/[n-2p+1]_q$. [F6, step 3.2, step 5.1, induction, algebra]

7.1 The determinant of the orthogonal block form in step 3.1 and its unit-determinant basis change gives $\det G_{n,p}=([n-2p+2]_q/[n-2p+1]_q)^{d_{n-1,p-1}}\det G_{n-1,p}\det G_{n-1,p-1}$ for $n>2p$, while step 3.2 gives $\det G_{2p,p}=\delta^{d_{2p-1,p-1}}\det G_{2p-1,p-1}$; also $\det G_{n,0}=1$ by step 2.1. [F1, step 2.1, step 3.1, step 3.2, step 6.1, algebra]

8.1 Let $P_{n,p}=\prod_{j=1}^p([n-2p+1+j]_q/[j]_q)^{d_{n,p-j}}$. For $n>2p$, put $h=n-2p+1$. If $p=1$, $P_{n,1}=([h+1]/[h])P_{n-1,1}$. If $p\ge2$, the numerator $[h+j]$ for $2\le j<p$ receives exponents $d_{n-1,p-j-1}$ and $d_{n-1,p-j}$ from the two lower-rank products, summing to $d_{n,p-j}$; at $j=1$ the missing exponent is supplied by $([h+1]/[h])^{d_{n-1,p-1}}$, whose denominator cancels the extra $[h]$, and at $j=p$ the second lower-rank product supplies exponent $d_{n,0}=1$. The denominator exponents add as $d_{n-1,p-j}+d_{n-1,p-j-1}=d_{n,p-j}$ (with the endpoint $j=p$ supplied by the first lower-rank product). Thus $P_{n,p}$ satisfies the recurrence in step 7.1 by Pascal's identity for $d_{n,r}$. [F1, step 6.1, step 7.1, algebra]

8.2 At $n=2p$, $P_{2,1}=[2]=\delta$ for $p=1$. For $p\ge2$, compare net exponents of each quantum integer in $P_{2p,p}$ and $[2]^{d_{2p-1,p-1}}P_{2p-1,p-1}$: for $2\le m<p$ the exponent is $d_{2p,p-m+1}-d_{2p,p-m}=d_{2p-1,p-m+1}-d_{2p-1,p-m-1}$ by Pascal's identity, exactly the exponent supplied by the latter product. At $m=p$, both exponents are $d_{2p,1}-d_{2p,0}=2p-2=d_{2p-1,1}$ (for $p=2$, the latter comes from the prefactor $[2]^{d_{3,1}}$); for $m=p+1$ both exponents are $d_{2p,0}=d_{2p-1,0}=1$, and $[1]=1$. Hence $P_{2p,p}=\delta^{d_{2p-1,p-1}}P_{2p-1,p-1}$, the boundary recurrence in step 7.1. [F1, step 3.2, step 7.1, algebra]

9.1 Induction using steps 7.1–8.2 now gives $\det G_{n,p}=P_{n,p}$ for every $q^2$ not a root of unity. Every Gram entry is polynomial in $\delta$, so its determinant is polynomial; the displayed product is rational in $q$ and agrees with that determinant on the infinite set where $q^2$ is not a root of unity. After putting the difference over a common denominator, its polynomial numerator has infinitely many zeros and is identically zero. Hence the entire product is the polynomial in $\delta$ represented by this rational-function identity, and the formula holds for every $q\in\mathbb C^\times$, including parameter values where separate factors are singular. [F1, step 7.1, step 8.1, step 8.2, algebra, discharge-induction] ∎
