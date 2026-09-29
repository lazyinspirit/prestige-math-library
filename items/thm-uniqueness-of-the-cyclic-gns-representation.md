---
id: thm-uniqueness-of-the-cyclic-gns-representation
kind: theorem
title: Uniqueness of the pointed cyclic GNS representation
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-inner-product-induces-a-norm
  - def-axiom-of-choice
  - def-bounded-linear-operator
  - def-completion-of-a-normed-space
  - def-countable-choice
  - def-cyclic-vector-and-cyclic-unitary-representation
  - def-hilbert-space
  - def-linear-map
  - def-matrix-coefficient-of-a-unitary-representation
  - def-real-and-complex-inner-product-space
  - def-strongly-continuous-unitary-representation
  - lem-diagonal-unitary-coefficients-have-positive-type
  - lem-positive-type-functions-define-a-pre-hilbert-form
  - lem-the-gns-translation-action-is-unitary-and-strongly-continuous
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-completion-universal-property-for-bounded-linear-maps
  - thm-gns-construction-for-topological-groups
axiom_audit: "Assume AC for the canonical GNS construction and its left-translation action. AC implies DC and Countable Choice; Countable Choice is used by the bounded extension theorem and by the countable approximating sequences that prove the extended isometries have closed, dense range. The finite Gram identity, point-mass formulas, given cyclic-density arguments, and uniqueness on the specified orbit span use no further choice."
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Theorem C.4.10 and complete proof"
      url: https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf
      locator: "Appendix C §C.4, printed pp. 376–377"
    - title: "Bekka and de la Harpe, Unitary Representations of Groups, Duals, and Characters, Proposition 1.B.8 and complete proof"
      url: https://arxiv.org/pdf/1912.07262
      locator: "Chapter 1 §1.B, printed p. 29"
---

## Statement

Assume the Axiom of Choice. Let $G$ be a topological group. For $j=1,2$, let
$H_j$ be a complex Hilbert space, let $\pi_j:G\to U(H_j)$ be a strongly
continuous unitary representation, and let $\xi_j\in H_j$ be cyclic. Suppose
their diagonal coefficients agree:
$$
\langle\pi_1(g)\xi_1,\xi_1\rangle=\langle\pi_2(g)\xi_2,\xi_2\rangle\qquad(g\in G).
$$
Then there is a unique unitary intertwiner $U:H_1\to H_2$ such that
$U\xi_1=\xi_2$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a topological group $G$; two strongly continuous unitary representations $(\pi_j,H_j)$ with cyclic vectors $\xi_j$; and equality of their diagonal coefficients. All Hilbert pairings are linear in the first variable.

[F1] A strongly continuous unitary representation is a homomorphism into bijective complex-linear isometries; every orbit map is norm-continuous ([[def-strongly-continuous-unitary-representation]]).

[F2] The diagonal coefficient is $g\mapsto\langle\pi(g)\xi,\xi\rangle$, with this first-variable-linear convention ([[def-matrix-coefficient-of-a-unitary-representation]]).

[F3] A cyclic vector has dense complex-linear orbit span; the zero-space representation is cyclic ([[def-cyclic-vector-and-cyclic-unitary-representation]]).

[F4] The diagonal coefficient of a strongly continuous unitary representation is continuous and of positive type, and its value at $e$ is $\|\xi\|^2$ ([[lem-diagonal-unitary-coefficients-have-positive-type]]).

[F5] For finitely supported $f,h:G\to\mathbb C$, $$B_\varphi(f,h)=\sum_{x,y}f(x)\overline{h(y)}\varphi(y^{-1}x)$$ is the positive-semidefinite GNS form, and its quotient inner product has $B_\varphi(\delta_x,\delta_y)=\varphi(y^{-1}x)$ ([[lem-positive-type-functions-define-a-pre-hilbert-form]]).

[F6] Under AC, the GNS construction supplies $Q_\varphi=\mathbb C^{(G)}/N_\varphi$, its Hilbert completion $H_\varphi$ and dense isometric embedding $\kappa_\varphi$, and the representation extending left translations, with cyclic vector $\xi_\varphi=\kappa_\varphi([\delta_e])$ ([[thm-gns-construction-for-topological-groups]]).

[F7] Complex inner products are linear in their first variable, conjugate linear in their second, and induce the norm $\|v\|=\sqrt{\langle v,v\rangle}$ ([[def-real-and-complex-inner-product-space]]).

[F8] A completion is a Banach space with a dense linear isometric embedding; every complex Hilbert space is Banach. The induced inner-product norm is a norm ([[def-completion-of-a-normed-space]], [[def-hilbert-space]], [[cor-inner-product-induces-a-norm]]).

[F9] Under Countable Choice, a bounded linear map from a normed space into a Banach space extends uniquely and boundedly to its completion, with the same bound ([[thm-completion-universal-property-for-bounded-linear-maps]]).

[F10] A linear map obeys the linearity identities, and it is bounded when $\|Tx\|\le C\|x\|$ for some $C\ge0$ ([[def-linear-map]], [[def-bounded-linear-operator]]).

[F11] AC implies DC and then Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F12] On the GNS quotient, left translation is $L_gf(x)=f(g^{-1}x)$, and its extension to $H_\varphi$ is the strongly continuous representation $\pi_\varphi$ ([[lem-the-gns-translation-action-is-unitary-and-strongly-continuous]]).

## Proof

Bekka–de la Harpe–Valette prove the GNS existence and uniqueness theorem in Theorem C.4.10, Appendix C §C.4, printed pp. 376–377: they realize the positive kernel, map its feature vectors to the given cyclic orbit, extend the resulting isometry, and obtain the intertwining relation by cyclic density. Bekka–de la Harpe, Proposition 1.B.8, Chapter 1 §1.B, printed p. 29, computes the matching orbit-vector Gram norms and defines the corresponding map on the finite orbit span; its formal bijection is restricted to normalized positive-type functions and unit cyclic vectors, and the proof leaves the extension checks implicit. The proof here derives the arbitrary-norm statement from the canonical GNS quotient and records those checks, including the zero case.

**Proof technique:** direct.

1.1 Let $\varphi(g)=\langle\pi_1(g)\xi_1,\xi_1\rangle$. By [F2] and [F4], $\varphi\in P(G)$ and $\varphi(e)=\|\xi_1\|^2$. Equality of the coefficients gives $\varphi(g)=\langle\pi_2(g)\xi_2,\xi_2\rangle$ for all $g$, so [F4] also gives $\varphi(e)=\|\xi_2\|^2$. [F2, F4]

2.1 If $\varphi=0$, then $\|\xi_1\|=\|\xi_2\|=0$ by step 1.1, so both vectors are zero. Their cyclicity [F3] forces $H_1=H_2=\{0\}$, where the unique map is the required unitary intertwiner. For the rest of the proof we may assume $\varphi\ne0$. [F3, step 1.1]

2.2 By [F6], form the canonical GNS quotient $Q_\varphi$, its Hilbert completion $H_\varphi$, embedding $\kappa_\varphi$, and canonical triple $(\pi_\varphi,H_\varphi,\xi_\varphi)$. The input $\varphi\in P(G)$ was established in step 1.1. [F4, F6, step 1.1]

3.1 A complex-linear norm isometry $W$ between inner-product spaces preserves inner products: expanding squared norms gives $$ \|u+v\|^2-\|u-v\|^2=4\operatorname{Re}\langle u,v\rangle,\qquad \|u+iv\|^2-\|u-iv\|^2=4\operatorname{Im}\langle u,v\rangle. $$ Both differences are unchanged under $W$, so $\langle Wu,Wv\rangle=\langle u,v\rangle$. Thus every $\pi_j(g)$ preserves the inner product by [F1], and the same calculation applies to each $\pi_\varphi(g)$, which is a complex-linear norm isometry by [F6]. [F1, F6, F7, step 2.2, algebra]

4.1 For $j=1,2$ and finitely supported $f:G\to\mathbb C$, set $$\widetilde V_j(f):=\sum_{x\in G}f(x)\pi_j(x)\xi_j.$$ The sum is finite. Using step 3.1, the homomorphism law, and equality of the diagonal coefficients, we obtain $$ \|\widetilde V_j(f)\|^2=\sum_{x,y}f(x)\overline{f(y)}\langle\pi_j(x)\xi_j,\pi_j(y)\xi_j\rangle=\sum_{x,y}f(x)\overline{f(y)}\langle\pi_j(y^{-1}x)\xi_j,\xi_j\rangle=\sum_{x,y}f(x)\overline{f(y)}\varphi(y^{-1}x)=B_\varphi(f,f)=\|[f]\|_{Q_\varphi}^2. $$ Consequently, if $[f]=[h]$, then $B_\varphi(f-h,f-h)=0$ and $\widetilde V_j(f)-\widetilde V_j(h)=0$. Thus $\widetilde V_j$ factors through a well-defined linear isometry $V_j:Q_\varphi\to H_j$ with bound $1$, including the zero vector. [F1, F5, F7, F10, step 2.2, step 3.1, algebra]

5.1 The space $Q_\varphi$ is normed by its quotient inner-product norm [F5, F8], and $H_j$ is Banach [F8]. Step 4.1 makes $V_j$ a bounded linear map with bound $1$ [F10]. By AC and [F11], Countable Choice holds, so [F9] gives a unique bounded extension $\widehat V_j:H_\varphi\to H_j$ with $\widehat V_j\kappa_\varphi=V_j$. To see it is isometric, use Countable Choice and density of $\kappa_\varphi[Q_\varphi]$ to choose, for any $z\in H_\varphi$, a sequence $\kappa_\varphi([f_n])\to z$. Continuity and the norm identity in step 4.1 give $$ \|\widehat V_j z\|=\lim_n\|V_j([f_n])\|=\lim_n\|\kappa_\varphi([f_n])\|=\|z\|. $$ Thus $\widehat V_j$ is an isometry. [F8, F9, F11, step 4.1, choose]

6.1 For every $g\in G$, the canonical GNS action extends left translation, so $$ \widehat V_j\kappa_\varphi([\delta_g])=V_j([\delta_g])=\pi_j(g)\xi_j. $$ By [F12], $\pi_\varphi(g)\xi_\varphi=\kappa_\varphi([\delta_g])$. The classes of point masses span $Q_\varphi$ and their images under $\kappa_\varphi$ are dense in $H_\varphi$ [F5, F6, F8]. The range of $\widehat V_j$ therefore contains the dense cyclic orbit span of $\xi_j$ [F3]. [F3, F5, F6, F8, F12, step 2.2, step 5.1]

7.1 The range of $\widehat V_j$ is closed. Indeed, for any $\eta$ in its closure, Countable Choice [F11] selects $z_n\in H_\varphi$ with $\|\widehat V_jz_n-\eta\|<1/(n+1)$. The isometry in step 5.1 makes $(z_n)$ Cauchy. Completeness of $H_\varphi$ gives a limit $z$, and continuity of $\widehat V_j$ yields $\widehat V_jz=\eta$. Therefore the range is both dense and closed by step 6.1, hence is all of $H_j$. [F6, F8, F11, step 5.1, step 6.1, choose]

7.2 For $k,g\in G$, the left-translation action [F12] and step 6.1 give $$ \widehat V_j\pi_\varphi(k)\kappa_\varphi([\delta_g])=\widehat V_j\kappa_\varphi([\delta_{kg}])=\pi_j(kg)\xi_j=\pi_j(k)\widehat V_j\kappa_\varphi([\delta_g]). $$ The point-mass span is dense and both sides are continuous linear maps, so $\widehat V_j\pi_\varphi(k)=\pi_j(k)\widehat V_j$ on $H_\varphi$. Also, $\widehat V_j\xi_\varphi=\xi_j$ by the point-mass case $g=e$. Thus $\widehat V_j$ is a surjective unitary intertwiner carrying the canonical vector to $\xi_j$. [F1, F5, F6, F8, F12, step 5.1, step 6.1]

8.1 Define $U=\widehat V_2\widehat V_1^{-1}:H_1\to H_2$. The inverse exists by step 7.1, and step 7.2 shows $U$ is unitary, intertwines $\pi_1$ with $\pi_2$, and satisfies $U\xi_1=\xi_2$. [F1, step 7.1, step 7.2, construct]

9.1 If $U'$ is another pointed unitary intertwiner, then for every $g\in G$, $$U'\pi_1(g)\xi_1=\pi_2(g)\xi_2=U\pi_1(g)\xi_1.$$ The two bounded maps agree on the dense orbit span of $\xi_1$ by linearity, and hence agree on all of $H_1$ by continuity and [F3]. This proves uniqueness. [F1, F3, step 8.1]

10.1 The construction uses AC for the GNS triple and translation action [F6, F12]. AC implies DC and Countable Choice by [F11]; Countable Choice is used for the completion extensions [F9] and for the sequences in steps 5.1 and 7.1. The finite Gram identity, the specified point-mass calculations, and uniqueness on the given dense cyclic span use no further choice. [F6, F9, F11, F12, step 5.1, step 7.1] ∎
