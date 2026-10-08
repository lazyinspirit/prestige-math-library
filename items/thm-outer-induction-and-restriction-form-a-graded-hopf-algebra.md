---
id: thm-outer-induction-and-restriction-form-a-graded-hopf-algebra
kind: theorem
title: "Outer induction and restriction make the symmetric-group character ring a graded Hopf algebra"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
deps:
  - thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring
  - def-restriction-coproduct-on-the-graded-symmetric-group-character-ring
  - def-graded-bialgebra-and-hopf-algebra
  - lem-connected-graded-bialgebra-has-a-recursive-antipode
  - prop-restriction-coproduct-is-schur-skewing
  - thm-mackey-double-coset-formula-for-restricting-an-induced-character
  - lem-induction-commutes-with-an-external-tensor-factor
  - def-conjugate-representation-and-conjugate-character
  - def-external-direct-product-of-groups
  - thm-external-direct-product-is-a-group
  - lem-character-ring-of-a-direct-product-is-the-tensor-product
  - thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism
  - thm-skew-jacobi-trudi-and-tableau-expansion
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-skew-schur-function-by-hall-adjointness
  - def-graded-ordinary-representation-ring-of-symmetric-groups
  - def-virtual-character-and-character-ring-of-a-finite-group
  - def-stable-graded-ring-of-symmetric-functions
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - prop-elementary-and-complete-generating-series-identity
  - prop-omega-conjugates-schur-functions
  - def-outer-induction-product-for-symmetric-group-characters
  - def-finite-symmetric-group-and-permutation-notation
  - def-group-homomorphism
  - def-induced-r-linear-g-module-by-h-covariant-functions
  - def-partition-young-diagram-and-conjugate-partition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Darij Grinberg and Victor Reiner, Hopf Algebras in Combinatorics (complete author-hosted lecture-notes book, 2020)"
      url: "https://www.cip.ifi.lmu.de/~grinberg/algebra/HopfComb.pdf"
      locator: "Chapter 1 §1.4, Proposition 1.4.16 (connected graded antipode), printed pp. 20–21; Chapter 2 §2.3, Proposition 2.3.6 (symmetric-function coproduct and skew-Schur expansion), printed pp. 52–53, and §2.4, Proposition 2.4.1, Definition 2.4.2 and Proposition 2.4.3 (the antipode and involution $\\omega$), printed pp. 54–56; Chapter 4 §4.1, Theorem 4.1.7 (Mackey formula), printed pp. 111–112, and §4.3, equations (4.3.1)–(4.3.3), Definition 4.3.4, Proposition 4.3.7(a) and its following Mackey calculation for the symmetric-group tower, printed pp. 119–123."
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5 Example 25, printed pp. 91–93: the diagonal comultiplication and counit on $\\Lambda$; Chapter I §7 Example 26, printed p. 134: restriction defines the comultiplication on the symmetric-group character ring."
---

## Statement

Let $R_S=\bigoplus_{n\ge0}R(S_n)$ be the graded commutative ring of [[thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring]], with outer product $\circ$, unit the trivial character $e$ of $S_0$ (so $R(S_0)=\mathbb Z\cdot1$), and let $\Delta$ be the restriction coproduct of [[def-restriction-coproduct-on-the-graded-symmetric-group-character-ring]]. Let $\varepsilon:R_S\to\mathbb Z$ be the augmentation defined by $\varepsilon(f)=f(1)$ on $R(S_0)$ and $\varepsilon|_{R(S_n)}=0$ for $n\ge1$ ([[def-graded-ordinary-representation-ring-of-symmetric-groups]], [[def-virtual-character-and-character-ring-of-a-finite-group]]). Then:

(i) $(R_S,\circ,e,\Delta,\varepsilon)$ is a connected graded bialgebra over $\mathbb Z$ ([[def-graded-bialgebra-and-hopf-algebra]]): $\Delta$ and $\varepsilon$ are $\mathbb Z$-algebra homomorphisms and satisfy coassociativity and the counit identities;

(ii) by [[lem-connected-graded-bialgebra-has-a-recursive-antipode]], $R_S$ has a unique antipode and is a graded Hopf algebra, with the antipode computed by the reduced-coproduct recursion;

(iii) the Frobenius characteristic is an isomorphism of graded Hopf algebras from $R_S$ onto $\Lambda$ equipped with the diagonal coproduct $\Delta_\Lambda f=f(x,y)$, multiplication of symmetric functions, counit the constant term, and antipode $S(f)=(-1)^n\omega(f)$ for $f\in\Lambda^n$. No choice principle is used.

## Facts & Assumptions

**Given:** The graded character ring $R_S$, its outer-induction product, the restriction coproduct, and the Frobenius characteristic.

[F1] $R_S=\bigoplus_{n\ge0}R(S_n)$ is the algebraic direct sum, $R(S_0)=\mathbb Z\cdot e$, and every element has finite degree support ([[def-graded-ordinary-representation-ring-of-symmetric-groups]]).

[F2] The outer product is $f\circ g=\operatorname{Ind}_{S_m\times S_n}^{S_{m+n}}(f\boxtimes g)$ on honest characters, extends $\mathbb Z$-bilinearly, adds degrees, and has the trivial $S_0$ character as unit ([[def-outer-induction-product-for-symmetric-group-characters]]).

[F3] The $(a,b)$-component $\Delta_{a,b}(f)$ is defined by pulling $f$ back from the ordered block subgroup $H_{a,b}$ and applying the inverse external-product character isomorphism; the endpoints are $\Delta_{0,n}(f)=e\otimes f$ and $\Delta_{n,0}(f)=f\otimes e$ ([[def-restriction-coproduct-on-the-graded-symmetric-group-character-ring]]).

[F4] For finite groups $G,H$, external products of irreducible characters form an orthonormal $\mathbb Z$-basis of $R(G\times H)$ and $R(G)\otimes R(H)\to R(G\times H)$ is an isomorphism ([[lem-character-ring-of-a-direct-product-is-the-tensor-product]]).

[F5] The global convention is $S_t=\operatorname{Sym}(\{0,1,\ldots,t-1\})$ with composition acting right to left ([[def-finite-symmetric-group-and-permutation-notation]]).

[F6] A group homomorphism preserves products ([[def-group-homomorphism]]).

[F7] Induced modules are covariant functions satisfying $F(gh)=h^{-1}\cdot F(g)$, with left translation action ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F8] Componentwise direct products are groups, and their coordinatewise operation restricts to direct-product subgroups ([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]]).

[F9] Mackey's formula expresses $\operatorname{Res}_K^G\operatorname{Ind}_H^G\theta$ as the sum over $K\backslash G/H$ of the induced restrictions of the conjugate character $^g\theta$ to $K\cap gHg^{-1}$ ([[thm-mackey-double-coset-formula-for-restricting-an-induced-character]]).

[F10] On a conjugate subgroup, the conjugate character satisfies $^g\theta(ghg^{-1})=\theta(h)$ ([[def-conjugate-representation-and-conjugate-character]]).

[F11] Induction from $C\times D$ to $P\times Q$ commutes with external tensor products, including identity-factor cases ([[lem-induction-commutes-with-an-external-tensor-factor]]).

[F12] A graded bialgebra has a degree-zero coassociative coproduct, a counit, multiplicative structure maps, and convolution product on endomorphisms ([[def-graded-bialgebra-and-hopf-algebra]]).

[F13] A connected graded bialgebra over a commutative ring has a unique graded antipode given by the reduced-coproduct recursion ([[lem-connected-graded-bialgebra-has-a-recursive-antipode]]).

[F14] The Frobenius characteristic $\operatorname{ch}:R_S\to\Lambda$ is a degree-preserving ring isomorphism and sends $e$ to $1$ ([[thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism]]).

[F15] The characteristic coproduct identity is $(\operatorname{ch}\otimes\operatorname{ch})\Delta(f)=\Delta_\Lambda(\operatorname{ch}(f))$, where $\Delta_\Lambda(s_\lambda)=\sum_{\mu\subseteq\lambda}s_\mu\otimes s_{\lambda/\mu}$ ([[prop-restriction-coproduct-is-schur-skewing]]).

[F16] $\Lambda=\bigoplus_{d\ge0}\Lambda^d$ is the algebraic graded ring of stable symmetric functions, with coordinatewise finite-rank specialization and finite degree support ([[def-stable-graded-ring-of-symmetric-functions]]).

[F17] In finite rank, $s_{\lambda/\mu}$ and $s_\lambda$ are generating functions for semistandard skew and straight tableaux with row-weak and column-strict inequalities ([[thm-skew-jacobi-trudi-and-tableau-expansion]]).

[F18] A skew diagram is $[\lambda]\setminus[\mu]$ when $\mu\subseteq\lambda$, and semistandard skew fillings are weakly increasing along rows and strictly increasing down columns ([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F19] The stable skew Schur symbol $s_{\lambda/\mu}$ is the skew Schur function defined by Hall adjointness ([[def-skew-schur-function-by-hall-adjointness]]).

[F20] At finite rank, $h_k=\sum_{a_1+\cdots+a_N=k}x_1^{a_1}\cdots x_N^{a_N}$ and $h_0=1$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F21] The complete functions $h_1,h_2,\ldots$ freely generate $\Lambda$ as a polynomial algebra ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F22] The elementary and complete generating series satisfy $E(-t)H(t)=1$, hence $\sum_{i=0}^n(-1)^ie_i h_{n-i}=\delta_{n0}$ ([[prop-elementary-and-complete-generating-series-identity]]).

[F23] The fundamental involution $\omega$ is a graded ring automorphism and $\omega(h_n)=e_n$ ([[prop-omega-conjugates-schur-functions]]).

[F24] A partition is a finite weakly decreasing sequence, and its English Young diagram is $[\lambda]=\{(i,j):1\le i\le k,\ 1\le j\le\lambda_i\}$ ([[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** direct.

1.1 For each $t$, set $G_t^0:=\operatorname{Sym}(\{0,\ldots,t-1\})$ and $G_t^1:=\operatorname{Sym}(\{1,\ldots,t\})$, and let $\beta_t(i)=i+1$, with the unique empty bijection for $t=0$. Conjugation $c_t:G_t^0\to G_t^1$, $c_t(\sigma)=\beta_t\sigma\beta_t^{-1}$, is a group isomorphism by [F5, F6] and carries the standard zero-based block embeddings of [F3] to the one-based embeddings used in [F2]. Given a one-based subgroup $H^1\leq G_t^1$, set $H^0:=c_t^{-1}(H^1)$ and pull an $H^1$-module $W$ back to $W^0$ by $h\cdot_0w:=c_t(h)\cdot_1w$. The map from the induced-function model for $(G_t^1,H^1,W)$ to that for $(G_t^0,H^0,W^0)$ [F7], $F^1\mapsto F^0$ with $F^0(g):=F^1(c_t(g))$, is invertible and satisfies $F^0(gh)=c_t(h)^{-1}\cdot_1F^0(g)=h^{-1}\cdot_0F^0(g)$. It intertwines left translation because $c_t(g_0^{-1}g)=c_t(g_0)^{-1}c_t(g)$. Pulling class functions back along $c_t$ therefore transports induction characters, and $c_t^{-1}$ maps the one-based outer-product blocks to the zero-based blocks of [F3]. Thus the outer product and restriction coproduct can both be computed in the zero-based realization. [F2, F3, F5, F6, F7]

1.2 Fix $f\in R(S_n)$ and $a+b+c=n$. Under the iterated external-product isomorphism from [F4], the $(a,b,c)$-component of either $(\Delta\otimes\mathrm{id})\Delta(f)$ or $(\mathrm{id}\otimes\Delta)\Delta(f)$ is the restriction of $f$ pulled back along the same embedding of $S_a\times S_b\times S_c$ acting on the three consecutive blocks of sizes $a,b,c$: composing the first two-block inclusions in either parenthesization gives that identical map on each triple $(\sigma,\tau,\rho)$. The iterated external-product maps agree on every tensor $\chi\otimes\psi\otimes\eta$ because both evaluate it as $\chi(\sigma)\psi(\tau)\eta(\rho)$, so the triple components are equal. Summing the finitely many triples proves coassociativity. The endpoints in [F3] show $(\varepsilon\otimes\mathrm{id})\Delta=\mathrm{id}=(\mathrm{id}\otimes\varepsilon)\Delta$ for the augmentation in the Statement. [F1, F3, F4, F12]

1.3 Define $\Delta_\Lambda f=f(X,Y)$ by substituting the disjoint union of finite alphabets into a stable symmetric function; this is well defined by [F16], is an algebra homomorphism, is coassociative by associativity of alphabet concatenation, and has counit evaluation at the empty alphabet, which is the constant term. Let $X=(x_1,\ldots,x_p)$ and $Y=(y_1,\ldots,y_q)$ be disjoint finite alphabets, ordered with every $x_i<y_j$. In a semistandard tableau of straight shape $\lambda$ on $X\sqcup Y$, the cells filled from $X$ form an initial segment in each row by [F17, F18]. If a cell in row $i+1$ and column $j$ is filled from $X$, then the cell above it exists by the partition shape [F24]; column strictness forces that upper entry to be smaller, hence it is also in $X$. Thus the row lengths of the $X$-cells are weakly decreasing and form a partition diagram $\mu\subseteq\lambda$. Restriction gives a semistandard tableau of shape $\mu$ on $X$ and one of shape $\lambda/\mu$ on $Y$. Conversely, such a pair combines to a semistandard tableau of shape $\lambda$: within each piece the inequalities hold, and at each horizontal or vertical boundary every $X$-letter is smaller than every $Y$-letter. This is a weight-preserving bijection, so the diagonal coproduct satisfies $\Delta_\Lambda(s_\lambda)=s_\lambda(X,Y)=\sum_{\mu\subseteq\lambda}s_\mu(X)s_{\lambda/\mu}(Y)$, with stable passage justified by [F16, F17, F19]. This is exactly the skew-Schur expansion in the characteristic coproduct identity [F15], so that identity intertwines the restriction coproduct with $\Delta_\Lambda$ on every Schur function. [F15, F16, F17, F18, F19, F24]

2.1 Use the common zero-based realization fixed in step 1.1. For honest characters $\chi\in R(S_m)$ and $\psi\in R(S_n)$, let $N=m+n$, let $H=S_m\times S_n$ preserve consecutive source blocks $C_1,C_2$, and let $K=S_a\times S_b$ preserve consecutive target blocks $R_1,R_2$, where $a+b=N$. For $g\in S_N$ define $M(g)=\begin{pmatrix}r&s\\u&v\end{pmatrix}$, where $r=|C_1\cap g^{-1}R_1|$, $s=|C_1\cap g^{-1}R_2|$, $u=|C_2\cap g^{-1}R_1|$, and $v=|C_2\cap g^{-1}R_2|$. Its row sums are $m,n$ and column sums $a,b$, and left multiplication by $K$ and right multiplication by $H$ preserve these counts. For each matrix with these margins, split $C_1,C_2$ into consecutive pieces of sizes $(r,s)$ and $(u,v)$, and split $R_1,R_2$ into consecutive pieces of sizes $(r,u)$ and $(s,v)$; the increasing bijections between paired pieces define a canonical representative $g_M$. If $g$ has this matrix, then the sets $C_j\cap g_M^{-1}R_i$ and $C_j\cap g^{-1}R_i$ have equal sizes. On each $C_j$, the unique increasing bijections from $C_j\cap g_M^{-1}R_i$ onto $C_j\cap g^{-1}R_i$ combine to $h_j\in S_{|C_j|}$; these give $h\in H$. Define $k_i$ on the disjoint pieces $g h(C_j\cap g_M^{-1}R_i)\subseteq R_i$ by $k_i(g h(x))=g_M(x)$; the pieces partition $R_i$ on both sides, so $k_i$ is a permutation of $R_i$, and together they give $k\in K$ with $kgh=g_M$. Thus the matrices classify $K\backslash S_N/H$, and the explicitly defined $g_M$ form a complete finite set of Mackey representatives, including zero-size blocks. [F2, F3, F5, F8]

2.2 For finite alphabets $X,Y$, the coefficient of $t^n$ in $H_X(t)H_Y(t)$ is $\sum_{i+j=n}h_i(X)h_j(Y)$; by the defining sum for $h_n$ in [F20], this enumerates every degree-$n$ monomial in $X\sqcup Y$ once. Thus $\Delta_\Lambda(h_n)=\sum_{i+j=n}h_i\otimes h_j$, and stable specialization is valid by [F16, F21]. Define $T(f)=(-1)^d\omega(f)$ for homogeneous $f\in\Lambda^d$. Since $\omega$ is a graded ring automorphism [F23], $T$ is a graded algebra homomorphism and $T(h_i)=(-1)^ie_i$. The finite-rank identity $E(-t)H(t)=1$ [F22], together with compatibility of the stable generators under specialization [F21], gives coefficientwise in $\Lambda$ that $\sum_{i+j=n}(-1)^ie_i h_j=\delta_{n0}$; reindexing gives $\sum_{i+j=n}h_i(-1)^je_j=\delta_{n0}$. Therefore $T*\mathrm{id}$ and $\mathrm{id}*T$ agree with the constant-term counit on each generator $h_n$, including $h_0=1$. Both convolutions are algebra homomorphisms: $(T*\mathrm{id})(fg)=\sum T(f_{(1)})T(g_{(1)})f_{(2)}g_{(2)}=(T*\mathrm{id})(f)(T*\mathrm{id})(g)$ because $\Delta_\Lambda$ and $T$ are algebra maps and $\Lambda$ is commutative; the same calculation with $T$ in the second tensor factor proves multiplicativity of $\mathrm{id}*T$. Since $h_1,h_2,\ldots$ freely generate $\Lambda$ by [F21], both convolutions equal the counit on all of $\Lambda$. Thus $T$ is a two-sided antipode and $S_\Lambda(f)=(-1)^d\omega(f)$ on $\Lambda^d$. [F12, F16, F20, F21, F22, F23, step 1.3]

3.1 For the representative $g_M$ in step 2.1, the intersection $L=K\cap g_M H g_M^{-1}$ consists exactly of permutations preserving each of the four intersections $R_1\cap g_M C_1$, $R_1\cap g_M C_2$, $R_2\cap g_M C_1$, and $R_2\cap g_M C_2$, hence is $S_r\times S_u\times S_s\times S_v$. Pulling the Mackey conjugate character $^{{g_M}}(\chi\boxtimes\psi)$ back to the source blocks by $g_M^{-1}$ and using [F10] gives the product of $\alpha=\operatorname{Res}^{S_m}_{S_r\times S_s}\chi$ and $\gamma=\operatorname{Res}^{S_n}_{S_u\times S_v}\psi$. Expand these honest product-group characters in the external-irreducible bases [F4], say $\alpha=\sum_i c_i\xi_i\boxtimes\xi_i'$ and $\gamma=\sum_j d_j\eta_j\boxtimes\eta_j'$. Regroup the four factors from source order $(r,s,u,v)$ into target order $(r,u,s,v)$; on $L$ the Mackey input character is then $\sum_{i,j}c_id_j(\xi_i\boxtimes\eta_j)\boxtimes(\xi_i'\boxtimes\eta_j')$, a character of $(S_r\times S_u)\times(S_s\times S_v)$. [F4, F8, F10, step 2.1]

4.1 Apply Mackey's formula [F9] to $\operatorname{Res}_K^{S_N}\operatorname{Ind}_H^{S_N}(\chi\boxtimes\psi)$. For the $M$-summand, apply the external-factor induction identity [F11] to each summand of the character in step 3.1, inducing from $S_r\times S_u$ to $S_a$ and from $S_s\times S_v$ to $S_b$. By the outer-product definition [F2], this Mackey term becomes under $\Phi_{a,b}$ the image of $\sum_{i,j}c_id_j(\xi_i\circ\eta_j)\otimes(\xi_i'\circ\eta_j')$, precisely the product of the $(r,s)$-component of $\Delta(\chi)$ and the $(u,v)$-component of $\Delta(\psi)$. [F2, F3, F9, F11, step 3.1]

5.1 The matrices of step 2.1 are in bijection with all degree allocations $r+s=m$, $u+v=n$, $r+u=a$, $s+v=b$. Hence summing the Mackey terms in step 4.1 gives exactly the $(a,b)$-component of $\Delta(\chi)\Delta(\psi)$; injectivity of $\Phi_{a,b}$ in [F3, F4] gives $\Delta_{a,b}(\chi\circ\psi)=(\Delta(\chi)\Delta(\psi))_{a,b}$. This holds for every $a+b=m+n$, so $\Delta(\chi\circ\psi)=\Delta(\chi)\Delta(\psi)$. Since the character rings consist of finite integral combinations of honest characters and $\circ,\Delta$ are bilinear, the identity extends to all virtual $\chi,\psi$. The endpoints in [F3] also give $\Delta(e)=e\otimes e$. [F1, F2, F3, F4, step 2.1, step 4.1]

6.1 If $f\in R(S_m)$ and $g\in R(S_n)$ are homogeneous, then $\varepsilon(f\circ g)=0=\varepsilon(f)\varepsilon(g)$ whenever $m+n>0$, since the outer product has degree $m+n$ by [F2]. When $m=n=0$, $R(S_0)=\mathbb Z e$ and $\circ$ is integer multiplication, so the same equality holds. Bilinearity gives that $\varepsilon$ is a unital algebra homomorphism on $R_S$. Together with steps 1.2 and 5.1, this verifies all bialgebra axioms in [F12]. [F1, F2, F3, F12, step 1.2, step 5.1]

7.1 $R_S$ is nonnegatively graded by [F1], and its degree-zero component is exactly $\mathbb Z e$, with unit map $\mathbb Z\xrightarrow{\sim}R(S_0)$; hence the bialgebra of step 6.1 is connected by [F12]. The antipode lemma [F13] gives a unique graded antipode with the reduced-coproduct recursion, proving parts (i) and (ii) of the Statement. [F1, F12, F13, step 6.1]

7.2 By [F14], $\operatorname{ch}$ is a degree-preserving graded-ring isomorphism sending $e$ to $1$, and [F15] says it intertwines $\Delta$ with $\Delta_\Lambda$. Since it preserves degree, it also carries the augmentation of step 6.1 to the constant-term counit: degree-zero elements map to constants and positive-degree elements have zero constant term. Thus $\operatorname{ch}$ is a bialgebra isomorphism from the bialgebra of step 6.1 to the diagonal bialgebra on $\Lambda$. [F14, F15, F16, step 6.1, step 1.3]

8.1 Transporting the antipode of step 7.1 through the bialgebra isomorphism of step 7.2 gives an antipode on $\Lambda$; by uniqueness of two-sided convolution inverses it is the map $T$ of step 2.2. Hence $\operatorname{ch}$ intertwines the antipodes and is an isomorphism of graded Hopf algebras, proving part (iii). All double-coset representatives were explicitly determined by a finite matrix, all tableaux sums are finite in each degree, and the recursive antipode uses no selections; no form of the axiom of choice is used. [F13, step 2.1, step 7.1, step 7.2, step 2.2] ∎
