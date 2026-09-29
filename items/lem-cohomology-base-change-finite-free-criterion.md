---
id: lem-cohomology-base-change-finite-free-criterion
kind: lemma
title: Finite-free local criterion for cohomology and base change
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-nakayama-lemma
  - cor-nakayama-generators-modulo-an-ideal
  - def-cohomology-object-of-a-cochain-complex
  - thm-right-exactness-of-tensor-products
  - def-local-ring
  - def-localisation-at-a-prime-ideal
  - def-multiplicative-subset-and-localisation
  - def-jacobson-radical-of-a-ring
  - cor-residue-field-of-a-localisation-at-a-prime
  - def-tensor-product-of-modules-by-generators-and-relations
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), §28.2, in particular 28.2.10–28.2.11"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Derived Categories of Schemes, §§36.26–36.32"
      url: "https://stacks.math.columbia.edu/download/perfect.pdf"
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, §§30.2–30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
---

## Statement

Assume the Axiom of Choice. It is used only through the Nakayama lemma and its
corollary [F2], whose proof needs the Jacobson-radical unit characterisation.

Let $A$ be a ring, let $\mathfrak m\subseteq A$ be a maximal ideal with residue
field $\kappa=A/\mathfrak m$, and let $K^\bullet$ be a bounded complex of
finite free $A$-modules ([[def-cohomology-object-of-a-cochain-complex]]) with
differentials $d^q:K^q\to K^{q+1}$. Fix $q\in\mathbb Z$, put
$e=d^{q-1}$ and $d=d^q$, and let
$$\varphi^q:H^q(K)\otimes_A\kappa\longrightarrow H^q(K\otimes_A\kappa)$$
be the natural map induced by tensoring representatives. Then:

1. $\varphi^q$ is surjective if and only if there is $s\in A\setminus\mathfrak m$
   such that over $A_s$ there are bases of $K^q_s$ and $K^{q+1}_s$ in which the
   matrix of $d^q$ is
   $$\begin{pmatrix}I_r&0\\0&0\end{pmatrix}$$
   (a split form of constant rank $r$, where $r$ is the rank of $d^q\otimes_A\kappa$).
2. If this holds, then $H^q(K)_s$ is a finitely generated $A_s$-module and the
   natural map
   $$H^q(K)_s\otimes_{A_s}A'\longrightarrow H^q(K\otimes_AA')$$
   is an isomorphism for every $A_s$-algebra $A'$.
3. Given 1, $H^q(K)_s$ is a finite projective $A_s$-module for some
   $s\in A\setminus\mathfrak m$ if and only if, after shrinking further, the
   analogous map $\varphi^{q-1}$ is also surjective. If $K^{q-1}=0$ then
   $H^{q-1}(K)=H^{q-1}(K\otimes_A\kappa)=0$ and the condition on
   $\varphi^{q-1}$ is automatic.

No Noetherian hypothesis is used.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), a ring $A$, a maximal ideal $\mathfrak m\subseteq A$, $\kappa=A/\mathfrak m$, a bounded complex $K^\bullet$ of finite free $A$-modules, and an integer $q$.

[F1] $H^q(K)=\ker(d^q)/\operatorname{im}(d^{q-1})$ as a quotient of submodules of $K^q$. ([[def-cohomology-object-of-a-cochain-complex]])

[F2] Let $R$ be a commutative ring and $I\trianglelefteq R$ with $I\subseteq J(R)$. If $M$ is a finitely generated $R$-module with $IM=M$, then $M=0$; if $x_1,\dots,x_t\in M$ generate $M/IM$, then they generate $M$. ([[thm-nakayama-lemma]], [[cor-nakayama-generators-modulo-an-ideal]])

[F3] If $C\to D\to E\to0$ is exact, then $C\otimes_AN\to D\otimes_AN\to E\otimes_AN\to0$ is exact for every $R$-module $N$. ([[thm-right-exactness-of-tensor-products]])

[F4] For a prime $\mathfrak p$ of a commutative ring $R$, the localisation $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$ is a local ring whose residue field is $R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}$, and the class $s/1$ of every $s\in R\setminus\mathfrak p$ is a unit in $R_{\mathfrak p}$. ([[def-localisation-at-a-prime-ideal]], [[cor-residue-field-of-a-localisation-at-a-prime]], [[def-multiplicative-subset-and-localisation]])

[F5] For a commutative ring $R$ the Jacobson radical is $J(R)=\bigcap_{\mathfrak m\text{ maximal}}\mathfrak m$; for a local ring $(R,\mathfrak n)$ this intersection has the single member $\mathfrak n$, so $J(R)=\mathfrak n$. ([[def-jacobson-radical-of-a-ring]], [[def-local-ring]])

[F6] The Axiom of Choice is the statement that every family of nonempty sets has a choice function. It enters this proof only through the AC-conditional Nakayama lemma and its corollary [F2], applied in steps 1.3 and 3.1. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct: rewrite surjectivity of $\varphi^q$ as a lifting condition on $d^q$ at the closed fibre, put $d^q$ into split block form over the local ring $A_{\mathfrak m}$ by elementary basis changes, and read off the base-change and freeness statements.

1.1 Let $B=A_{\mathfrak m}$, a local ring with maximal ideal $\mathfrak n=\mathfrak mA_{\mathfrak m}$ and residue field $\kappa=B/\mathfrak n$, and put $J(B)=\mathfrak n$ [F4, F5]. Since $K^\bullet$ consists of finite free modules, $K^\bullet_{\mathfrak m}\otimes_B\kappa=K^\bullet\otimes_A\kappa$, so $H^q(K_{\mathfrak m})\otimes_B\kappa=H^q(K)\otimes_A\kappa$ and $H^q(K_{\mathfrak m}\otimes_B\kappa)=H^q(K\otimes_A\kappa)$; the map $\varphi^q$ is unchanged. Every $s\in A\setminus\mathfrak m$ maps to a unit of $B$ [F4], so any basis change over $A_s$ is a basis change over $B$; conversely, a computation over $B$ has finitely many matrix entries $a_i/s_i$ with $s_i\in A\setminus\mathfrak m$, and with $s=s_1\cdots s_t\in A\setminus\mathfrak m$ it is a computation over $A_s$. It therefore suffices to prove statements 1–3 with $(A,\mathfrak m)$ replaced by the local ring $B$. [F4, F5, given]

1.2 The image of $\varphi^q$ is the image of $\ker d$ in $\ker(d\otimes\kappa)/\operatorname{im}(e\otimes\kappa)$, so $\varphi^q$ is surjective if and only if $$d^{-1}(\mathfrak mK^{q+1})=\ker d+\operatorname{im}e+\mathfrak mK^q.$$ Indeed, by [F1] and [F3] the target is $d^{-1}(\mathfrak mK^{q+1})/(\operatorname{im}e+\mathfrak mK^q)$, while the image is $(\ker d+\operatorname{im}e+\mathfrak mK^q)/(\operatorname{im}e+\mathfrak mK^q)$. Since $\operatorname{im}e\subseteq\ker d$, equality of these two quotients is equivalent to the displayed equality of their numerator submodules. [F1, F3, algebra]

1.3 Under AC [F6] put $r=\dim_\kappa\operatorname{im}(d\otimes\kappa)$. Choose a $B$-basis $g_1,\dots,g_{n}$ of $K^{q+1}$ such that $g_1,\dots,g_r$ reduce modulo $\mathfrak n$ to a basis of $\operatorname{im}(d\otimes\kappa)$; this is possible because any $\kappa$-basis of $\operatorname{im}(d\otimes\kappa)$ extends to one of $K^{q+1}\otimes\kappa$ and any basis of the finite free module $K^{q+1}\otimes\kappa$ lifts to a $B$-basis of $K^{q+1}$ [F2, F5]. For $i\le r$ pick $f_i^0\in K^q$ with $d(f_i^0)\equiv g_i \pmod{\mathfrak nK^{q+1}}$, which exists by the choice of the $g_i$. Replacing $g_i$ by $d(f_i^0)$ for $i\le r$ leaves a $B$-basis of $K^{q+1}$ [F2, F5], and the elements $f_1^0,\dots,f_r^0$ are linearly independent modulo $\mathfrak nK^q$; extend them to a basis $f_1,\dots,f_m$ of $K^q$ [F2, F5]. In these bases the matrix of $d$ has the block form $$M=\begin{pmatrix}I_r&C\\0&D\end{pmatrix},\qquad D\equiv0\pmod{\mathfrak n},$$ the congruence for $D$ holding because $r$ was defined as the rank of $d\otimes\kappa$. [F2, F5, F6, algebra, construct]

2.1 Replacing $f_j$ by $f_j-\sum_{i\le r}c_{ij}f_i$ for $j>r$ (an invertible change of basis) removes the block $C$: if $d(f_j)=\sum_{i\le r}c_{ij}g_i+d_j$ with $d_j$ in the span of $g_{r+1},\dots,g_n$, then $d(f_j-\sum_{i\le r}c_{ij}f_i)=d_j$. Hence, after this change of the basis of $K^q$ alone, the matrix of $d$ is $$\begin{pmatrix}I_r&0\\0&D\end{pmatrix},\qquad D\equiv0\pmod{\mathfrak n},$$ and $\ker d$ consists of the vectors $(0,x)$ with $Dx=0$. Writing $K^q=F'\oplus F''$ for the spans of $f_1,\dots,f_r$ and $f_{r+1},\dots,f_m$, we have $d^{-1}(\mathfrak mK^{q+1})=\mathfrak mF'\oplus F''$ and $\ker d=\{0\}\oplus\ker D$, while $\operatorname{im}e\subseteq\ker d\subseteq F''$ because $d\circ e=0$. [F2, step 1.3, algebra]

3.1 We evaluate step 1.2 in the block form of step 2.1. The condition becomes $\mathfrak mF'\oplus F''=\mathfrak mF'\oplus(\ker D+\operatorname{im}e+\mathfrak mF'')$, i.e. $F''=\ker D+\mathfrak mF''$; by Nakayama [F2, F6] applied to the finitely generated module $F''/\ker D$ with the ideal $\mathfrak n=J(B)$ [F5] this is equivalent to $F''=\ker D$, i.e. to $D=0$. Thus $\varphi^q$ is surjective if and only if, after the constructions of steps 1.3–2.1, the block $D$ vanishes, which is exactly the split form with matrix $\operatorname{diag}(I_r,0)$; this proves statement 1, the basis changes being the ones constructed in steps 1.3–2.1 and the transition between $B$ and $A_s$ being as in step 1.1. [F1, F2, F5, F6, step 1.2, step 2.1, algebra]

4.1 Assume now that over some $A_s$ the differential $d^q$ has matrix $\operatorname{diag}(I_r,0)$ with respect to bases of $K^q_s$ and $K^{q+1}_s$; write $K^q_s=F'\oplus F''$ accordingly, so that $\ker d^q=F''$ and $\operatorname{im}e\subseteq F''$. Then $H^q(K_s)=F''/\operatorname{im}e$ is finitely generated, and for every $A_s$-algebra $A'$ the differentials of $K^\bullet\otimes_AA'$ are $\operatorname{diag}(I_r,0)$ and $e\otimes1$, so $$H^q(K\otimes_AA')=\ker(d^q\otimes1)/\operatorname{im}(e\otimes1)=(F''\otimes_{A_s}A')/\operatorname{im}(e\otimes1)=H^q(K_s)\otimes_{A_s}A',$$ the last equality by right exactness of the tensor product [F3]. This proves statement 2. [F1, F3, step 3.1, algebra]

5.1 It remains to discuss finite projectivity. Keep the split form of step 4.1, so that $H^q(K_s)=\operatorname{coker}(e':K^{q-1}_s\to F'')$ with $e'$ the composite of $e$ with the projection onto $F''$. Right exactness [F3] shows that $\operatorname{coker}(e')$ commutes with every base change if $e'$ can be written as $\operatorname{diag}(I_{r'},0)$ in suitable bases of $K^{q-1}_s$ and $F''$: then the cokernel is the free module on the remaining basis vectors. [F3, step 4.1]

6.1 Suppose $H^q(K_s)=\operatorname{coker}(e')$ is finite projective over $A_s$. The surjection $F''\to H^q(K_s)$ splits, so $\operatorname{im}(e')$ is a finite projective direct summand of $F''$; the surjection $K^{q-1}_s\to\operatorname{im}(e')$ then splits, and its kernel is also finite projective. Localize at $\mathfrak m$: all these finite projective summands, including the complementary copy of $H^q(K_s)$ in $F''$, become finite free over the local ring $B=A_{\mathfrak m}$ by the basis-lifting and Nakayama argument of [F2]. Bases of the summands and their inclusions and projections involve finitely many matrix entries and inverse determinants in $B$; clear their denominators and the finitely many matrix equalities over a further $A_{s'}$ with $s'\notin\mathfrak m$ (as in step 1.1). The resulting bases of $K^{q-1}_{s'}$ and $F''_{s'}$ exhibit $e'$ as $\operatorname{diag}(I_{r'},0)$ on that neighbourhood, as required for the converse to step 5.1. [F2, F4, step 1.1, step 5.1, algebra]

7.1 Finally, the criterion of statement 1 applied with $q$ replaced by $q-1$ to the map $e=d^{q-1}:K^{q-1}\to K^q$ says that $\varphi^{q-1}$ is surjective if and only if, after shrinking, $e$ has split form $\operatorname{diag}(I_{r'},0)$ with respect to bases of $K^{q-1}$ and $K^q$. If $K^{q-1}=0$ then $H^{q-1}(K)=0=H^{q-1}(K\otimes_A\kappa)$ and $\varphi^{q-1}$ is the zero map of the zero module, hence surjective; this covers the degree $-1$ convention. Combining with steps 5.1 and 6.1, finite projectivity of $H^q(K_s)$ is equivalent to surjectivity of $\varphi^{q-1}$ after shrinking: if $e'=\operatorname{diag}(I_{r'},0)$ in bases of $K^{q-1}_s$ and $F''$, then adjoining the basis of $F'$ puts the matrix of $e$ into $\operatorname{diag}(I_{r'},0)$ after reordering the basis of $K^q_s$, which is the criterion for $\varphi^{q-1}$; conversely $\varphi^{q-1}$ surjectivity produces such bases and step 6.1 gives projectivity. This proves statement 3 and completes the proof. [F1, F3, step 3.1, step 5.1, step 6.1, algebra] ∎
