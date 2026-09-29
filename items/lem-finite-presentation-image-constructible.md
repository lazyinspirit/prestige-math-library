---
id: lem-finite-presentation-image-constructible
kind: lemma
title: "Constructible images for finite-presentation affine maps"
status: draft
origin: pipeline
deps:
  - def-constructible-subset-scheme
  - def-locally-finite-presentation-morphism
  - def-finitely-presented-module-and-algebra
  - def-affine-scheme-spectrum
  - def-axiom-of-choice
  - thm-monic-polynomial-division
  - def-determinant-of-a-square-matrix
  - def-characteristic-polynomial-of-a-matrix
  - thm-nilpotent-endomorphism-characterisations
  - prop-localisation-zero-equality-and-kernel-criteria
  - thm-proper-ideal-contained-in-maximal-ideal
  - cor-maximal-ideals-are-prime
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.29 (Theorem 10.29.10, tags 00F5-00F7)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.23"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
---

## Statement

Assume the Axiom of Choice. Let $A\to B$ be a finitely presented ring map and
let $b\in B$. Then the image of the basic open $D(b)\subseteq\operatorname{Spec}B$
under the induced map $\operatorname{Spec}B\to\operatorname{Spec}A$ is a
constructible subset of $\operatorname{Spec}A$
([[def-constructible-subset-scheme]]).

## Facts & Assumptions

**Given:** A finitely presented ring map $A\to B$ and an element $b\in B$; the reduction $\operatorname{Spec}B\to\operatorname{Spec}A$ of spectra.

[F1] For a ring $A$, the points of $\operatorname{Spec}A$ are the prime ideals, the basic opens are $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, and $V(f_1,\dots,f_m)=\{\mathfrak p:f_1,\dots,f_m\in\mathfrak p\}$ is the complement of $D(f_1)\cup\dots\cup D(f_m)$; for $A=0$ the spectrum is empty. ([[def-affine-scheme-spectrum]])

[F2] For a topological space $X$ an open $U\subseteq X$ is retrocompact when $U\cap V$ is quasi-compact for every quasi-compact open $V$, and a subset is constructible when it is a finite union of sets $U\cap(X\setminus V)$ with $U,V$ retrocompact open. On $\operatorname{Spec}A$ the retrocompact opens are exactly the quasi-compact opens, so a subset there is constructible exactly when it is a finite union of sets $D(f)\cap V(g_1,\dots,g_m)$. ([[def-constructible-subset-scheme]])

[F3] A commutative $R$-algebra $A$ is finitely presented when there are $n\in\mathbb N$ and a finitely generated ideal $\mathfrak a\subseteq R[x_1,\dots,x_n]$ with $A\cong R[x_1,\dots,x_n]/\mathfrak a$ as $R$-algebras. ([[def-finitely-presented-module-and-algebra]])

[F4] A morphism $f:X\to S$ is locally of finite presentation if it admits affine charts as in the locally finite-type definition for which $A\to B$ is a finitely presented $A$-algebra. ([[def-locally-finite-presentation-morphism]])

[F5] The Axiom of Choice (AC) states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F6] Let $R$ be a commutative ring and let $g\in R[x]$ be monic. For every $f\in R[x]$ there are unique $q,r\in R[x]$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$. ([[thm-monic-polynomial-division]])

[F7] For a commutative ring $R$ and $n\ge1$ the determinant of a square matrix over $R$ is given by the Leibniz formula, so it is a polynomial with integer coefficients in the matrix entries. ([[def-determinant-of-a-square-matrix]])

[F8] For $A\in M_n(F)$ over a field and $n\ge1$, the characteristic polynomial is $\chi_A(x)=\det(xI_n-A)$, and for the unique $0\times0$ matrix it is $1$. ([[def-characteristic-polynomial-of-a-matrix]])

[F9] Let $N$ be an endomorphism of a nonzero $n$-dimensional vector space over a field. Then $N$ is nilpotent if and only if its characteristic polynomial is $x^n$; in dimension zero the unique endomorphism is nilpotent with characteristic polynomial $1=x^0$. ([[thm-nilpotent-endomorphism-characterisations]])

[F10] Assume AC. If $r$ is a nonnilpotent element of a commutative ring $R$, then $R_r\ne0$: the multiplicative set $\{1,r,r^2,\ldots\}$ omits $0$, so the localization is nonzero by [[prop-localisation-zero-equality-and-kernel-criteria]]. The proper zero ideal of $R_r$ is contained in a maximal ideal by [[thm-proper-ideal-contained-in-maximal-ideal]], and that maximal ideal is prime by [[cor-maximal-ideals-are-prime]]. Its contraction to $R$ is a prime avoiding $r$, since $r$ is a unit in $R_r$.



## Proof

**Proof technique:** direct. Reduce the claim to the affine Chevalley theorem for polynomial rings, prove the one-variable case by a well-founded induction on the number and degrees of the equations, and settle the one-equation case with the characteristic polynomial of multiplication by $f$ on $R[x]/(g)$, exactly as in the cited Stacks argument.

1.1 By [F3] and [F4] write $B\cong P/I$ with $P=A[x_1,\dots,x_n]$ and $I=(h_1,\dots,h_m)$ a finitely generated ideal, and choose $f\in P$ mapping to $b$. Let $T=D(f)\cap V(h_1,\dots,h_m)\subseteq\operatorname{Spec}P$. Then $T$ is constructible in $\operatorname{Spec}P$ by [F2], because $D(f)$ is retrocompact open and $V(h_1,\dots,h_m)$ is the complement of the retrocompact open $D(h_1)\cup\dots\cup D(h_m)$. Let $\pi:\operatorname{Spec}P\to\operatorname{Spec}A$ be the induced map. [F1, F2, F3, F4]

1.2 We prove the following claim by induction on $k\ge0$: for every commutative ring $R$ and every constructible subset $E\subseteq\operatorname{Spec}R[x_1,\dots,x_k]$, the image of $E$ under the structure map $\operatorname{Spec}R[x_1,\dots,x_k]\to\operatorname{Spec}R$ is constructible. For $k=0$ the structure map is the identity, so the claim is immediate. [F2]

1.3 One-variable claim: for every commutative ring $R$, every $f\in R[x]$ and all $g_1,\dots,g_m\in R[x]$, the image of $D(f)\cap V(g_1,\dots,g_m)$ under $\operatorname{Spec}R[x]\to\operatorname{Spec}R$ is constructible. We prove this by well-founded induction on the pair $\mu=(m;\delta_1\le\dots\le\delta_m)$, where $\delta_1,\dots,\delta_m$ are the degrees of the nonzero polynomials among $g_1,\dots,g_m$ arranged in increasing order, ordered lexicographically with the empty tuple smallest. Dropping a zero polynomial decreases $m$, and replacing a polynomial by one of strictly smaller degree decreases the tuple of degrees with $m$ fixed, so $\mu$ strictly decreases in the reductions below. [F2]

1.4 Base case $m=0$: write $f=\sum_{i=0}^{N}a_ix^i$. For $\mathfrak p\in\operatorname{Spec}R$ the fibre of $\operatorname{Spec}R[x]\to\operatorname{Spec}R$ over $\mathfrak p$ is $\operatorname{Spec}\kappa(\mathfrak p)[x]$, and the fibre of $D(f)$ is $D(\overline f)$, which is nonempty exactly when some coefficient $a_i$ has nonzero image in $\kappa(\mathfrak p)$, that is, when $a_i\notin\mathfrak p$. Hence the image of $D(f)$ is $\bigcup_{i=0}^{N}D(a_i)$, a constructible set; for $f=0$ all the basic opens are empty and the image is empty. [F1, F2]

1.5 Fix $c\in R$ and a constructible set $T\subseteq D(f)\cap V(g_1,\dots,g_m)$ built from $f$ and the $g_i$. The space $\operatorname{Spec}R$ is the disjoint union of the closed subspace $V(c)=\operatorname{Spec}R/(c)$ and the open subspace $D(c)=\operatorname{Spec}R_c$. Accordingly the image of $T$ is the union of its parts over $V(c)$ and over $D(c)$: over $V(c)$ one computes in $R/(c)[x]$, over $D(c)$ in $R_c[x]$, and the images of these two parts are the corresponding subsets of $\operatorname{Spec}R$ because $\operatorname{Spec}R/(c)\to\operatorname{Spec}R$ is a closed immersion onto $V(c)$ and $\operatorname{Spec}R_c\to\operatorname{Spec}R$ is an open immersion onto $D(c)$. A subset of $V(c)$ of the form $\bigcup_j D(\overline f_j)\cap V(\overline g_{j1},\dots)$ corresponds in $\operatorname{Spec}R$ to $\bigcup_j D(f_j)\cap V(g_{j1},\dots,c)$, and similarly on $D(c)$ the images are themselves constructible subsets of $\operatorname{Spec}R$ described by the same expressions read in $R[x]$. [F1, F2]

1.6 Base case of the induction: $m=1$, $g\in R[x]$ with invertible leading coefficient $u$, and $f\in R[x]$. Multiplying $g$ by $u^{-1}$ we may assume $g$ monic of degree $d\ge0$. Let $S=R[x]/(g)$, a free $R$-module with basis the classes of $1,x,\dots,x^{d-1}$ by [F6]; let $M$ be the matrix of multiplication by $f$ on $S$ in this basis, and put $P(T)=\det(TI_d-M)=\sum_{i=0}^{d}r_iT^i\in R[T]$, a monic polynomial of degree $d$ with $r_d=1$, with the convention $P=1$ when $d=0$. [F6, F7, F8]

2.1 The quotient map $P\to B$ induces a closed immersion $\operatorname{Spec}B\to\operatorname{Spec}P$ whose image is exactly $V(I)$, and for the reduction $\overline f$ of $f$ the preimage of $D(\overline f)\subseteq\operatorname{Spec}B$ is $D(f)\cap V(I)=T$. Hence the image of $D(b)$ under $\operatorname{Spec}B\to\operatorname{Spec}A$ equals $\pi(T)$. [F1, step 1.1]

2.2 For the induction step from $k-1$ to $k$, put $R'=R[x_1,\dots,x_{k-1}]$, so that $R[x_1,\dots,x_k]=R'[x_k]$. By the one-variable claim of steps 1.3-3.1, applied over the ring $R'$, the image $E'$ of $E$ under $\operatorname{Spec}R'[x_k]\to\operatorname{Spec}R'$ is a constructible subset of $\operatorname{Spec}R'$. By the induction hypothesis for $k-1$ applied to the ring $R$ and the constructible subset $E'$, the image of $E'$ in $\operatorname{Spec}R$ is constructible. Since the image of $E$ in $\operatorname{Spec}R$ is the image of $E'$, this proves the claim for $k$. [step 1.2]

2.3 For the induction step assume $m\ge1$ and that the claim is known for all smaller $\mu$. If some $g_j=0$ then $V(g_1,\dots,g_m)=V(\text{the remaining }g_i)$, the pair's first entry drops, and the claim follows from the induction hypothesis. Hence assume all $g_i\ne0$, and reorder the $g_i$ so that $g_1$ has minimal degree $d$, with leading coefficient $c\in R$, $c\ne0$. [F1, step 1.3]

2.4 Over $V(c)$: in $R/(c)[x]$ the image of $g_1$ has degree $<d$ or is zero, while the images of $g_2,\dots,g_m$ have degrees at most their original degrees. Hence the pair $\mu'$ of the tuple in $R/(c)[x]$ is strictly smaller than $\mu$: either a polynomial has disappeared, or the smallest of the degrees strictly decreased. By the induction hypothesis applied over the ring $R/(c)$, the image of the part of $T$ over $V(c)$ inside $\operatorname{Spec}(R/(c))[x]$ is constructible, and by step 1.5 its image in $\operatorname{Spec}R$ is constructible. [step 1.3, step 1.5]

2.5 Over $D(c)$: the element $c$ becomes a unit, so after multiplying $g_1$ by the unit $c^{-1}$ we may assume $g_1$ is monic of degree $d$; this does not change the ideal $(g_1)$ nor its zero set. If $m=1$ the claim over $D(c)$ is the one-equation case treated below, whose constructibility is then moved back to $\operatorname{Spec}R$ by step 1.5. If $m\ge2$ and $d=0$, then $g_1=c$ is a unit in $R_c[x]$, so $V(g_1)=\varnothing$ over $D(c)$ and the part of the image over $D(c)$ is empty. [F2, step 1.5]

2.6 Over $D(c)$ with $m\ge2$ and $d\ge1$, apply [F6] to each $g_i$, $i\ge2$, and $g_1$: there are $q_i,r_i\in R_c[x]$ with $g_i=q_ig_1+r_i$ and $r_i=0$ or $\deg r_i<d$. Then $(g_1,g_2,\dots,g_m)=(g_1,r_2,\dots,r_m)$ as ideals, hence $V(g_1,\dots,g_m)=V(g_1,r_2,\dots,r_m)$ over $D(c)$. Every nonzero $r_i$ has degree $<d$, so the new pair $\mu''$ is strictly smaller than $\mu$: its smallest degree is $<d$ or the tuple is shorter. The induction hypothesis over the ring $R_c$ makes the image of this part constructible in $\operatorname{Spec}R_c$, and step 1.5 moves it to a constructible subset of $\operatorname{Spec}R$. [F6, step 1.3, step 1.5]

2.7 Claim: for $\mathfrak p\in\operatorname{Spec}R$, the element $f$ is nilpotent in $S\otimes_R\kappa(\mathfrak p)$ if and only if $\mathfrak p\supseteq(r_0,\dots,r_{d-1})$. Indeed $S\otimes_R\kappa(\mathfrak p)\cong\kappa(\mathfrak p)[x]/(\overline g)$ has $\kappa(\mathfrak p)$-basis the classes of $1,x,\dots,x^{d-1}$, and multiplication by the image of $f$ has matrix $\overline M$ obtained by reducing the entries of $M$; since the determinant is given by the Leibniz formula [F7], the characteristic polynomial of that multiplication is the reduction $\overline P(T)=T^d+\overline r_{d-1}T^{d-1}+\dots+\overline r_0$ of $P$ over $\kappa(\mathfrak p)$, in the sense of [F8]. When $d\ge1$ and the fibre algebra is nonzero, [F9] says that this multiplication is nilpotent exactly when $\overline P=T^d$, that is, exactly when all $\overline r_i=0$, i.e. $\mathfrak p\supseteq(r_0,\dots,r_{d-1})$; when $d=0$ the multiplication acts on the zero ring, is nilpotent, and the condition $\mathfrak p\supseteq\varnothing$ holds. [F7, F8, F9, step 1.6]

3.1 Claim: the image of $D(f)\cap V(g)$ in $\operatorname{Spec}R$ is $\bigcup_{i=0}^{d-1}D(r_i)$. For the inclusion $\subseteq$, let $\mathfrak q\in D(f)\cap V(g)$ lie over $\mathfrak p$. Then $\mathfrak q$ is a prime of the fibre algebra $S\otimes_R\kappa(\mathfrak p)$ containing the image of $g$ and avoiding the image of $f$, so multiplication by $f$ on that fibre algebra is not nilpotent: a nilpotent element lies in every prime ideal of its ring. By step 2.7 some $r_i\notin\mathfrak p$, that is, $\mathfrak p\in D(r_i)$ for some $i$. Conversely, if $r_i\notin\mathfrak p$ for some $i<d$, then by step 2.7 $f$ is not nilpotent in the fibre algebra $S\otimes_R\kappa(\mathfrak p)$. Fact [F10] supplies a prime ideal of that fibre algebra avoiding $f$. Its preimage under $R[x]\to S\otimes_R\kappa(\mathfrak p)$ is a prime of $R[x]$ lying in $D(f)\cap V(g)$ over $\mathfrak p$. [F2, F10, step 1.6, step 2.7]

4.1 This completes the induction of step 1.3 and hence the one-variable claim, which supplies step 2.2 and proves the induction claim of step 1.2 for every $k$. Applying step 1.2 with $R=A$, $k=n$ and the constructible set $T$ of step 1.1, the image $\pi(T)$ is constructible in $\operatorname{Spec}A$. By step 2.1 the image of $D(b)$ under $\operatorname{Spec}B\to\operatorname{Spec}A$ equals $\pi(T)$, so it is constructible. The Axiom of Choice [F5] is used only in step 3.1, to choose a prime ideal avoiding a non-nilpotent element; all other selections are finite. [F5, step 1.1, step 2.1, step 1.2, step 1.3, step 3.1] ∎
