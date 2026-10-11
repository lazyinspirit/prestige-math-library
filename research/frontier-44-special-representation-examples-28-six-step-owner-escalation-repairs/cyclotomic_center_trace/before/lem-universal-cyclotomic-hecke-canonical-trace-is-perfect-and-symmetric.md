---
id: lem-universal-cyclotomic-hecke-canonical-trace-is-perfect-and-symmetric
kind: lemma
title: "The universal cyclotomic Hecke canonical trace is perfect and symmetric"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis,
       thm-standard-basis-of-the-generic-type-a-hecke-algebra,
       def-determinant-of-a-square-matrix,
       thm-determinant-multiplicative]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gunter Malle and Andrew Mathas, Symmetric cyclotomic Hecke algebras, J. Algebra 205 (1998), 275–293"
      url: "https://doi.org/10.1006/jabr.1997.7339"
      locator: "Symmetrizing trace and Gram determinant; bibliographic identity checked against the author's publication list. Full text was not retrieved during Step 3a adjudication."
---

## Statement

For the universal cyclotomic presentation of
[[lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis]], extract
the coefficient of the zero-dot identity-permutation PBW word to define the
$R$-linear map $\tau$. Then $\tau(ab)=\tau(ba)$ and the pairing
$(a,b)\mapsto\tau(ab)$ is a perfect $R$-bilinear associative pairing. Both
properties hold after every commutative unit-parameter base change, including
the LM deformation DVR. Rank zero is $R$ with $\tau(1)=1_R$. For the separate
level-zero positive-rank zero algebra the zero pairing is perfect; no nonzero
$\tau(1)=1$ assertion is made.

## Facts & Assumptions

**Given:** The universal parameter ring $R=\mathbb Z[q_H^{\pm1},Q_1^{\pm1},\dots,Q_\ell^{\pm1}]$ with $\ell\ge1$, the nondegenerate cyclotomic quotient $H_n$ with first polynomial $f(X_1)=\prod_{a=1}^{\ell}(X_1-Q_a)$, and the PBW basis $\mathcal B=\{X_1^{a_1}\cdots X_n^{a_n}T_w:0\le a_i<\ell,\ w\in S_n\}$ ([[lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis]]).

[F1] $\mathcal B$ is an $R$-basis of $H_n$, valid over every commutative $R$-algebra ([[lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis]]); the finite Hecke algebra has standard basis $T_w$ with $T_wT_{s_i}=T_{ws_i}$ for increasing length and $q_HT_{ws_i}+(q_H-1)T_w$ for decreasing length ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F2] The mixed relation can be written
$T_jX_j=X_{j+1}(T_j-q_H+1)$ and gives the Bernstein straightening identity
$$T_jX_j^m=X_{j+1}^m(T_j-q_H+1) -(q_H-1)\sum_{b=1}^{m-1}X_j^bX_{j+1}^{m-b},$$
with $T_j^{-1}=q_H^{-1}(T_j-q_H+1)$
([[lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis]]).

[F3] Determinants are multiplicative and an integer matrix is invertible if and only if its determinant is a unit; block-triangular determinants multiply over the diagonal blocks ([[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]]).

## Proof

**Proof technique:** direct.

**Given:** The universal PBW presentation and the data of [F1]–[F3].

1.1 The trace and its dual basis. Define $\tau\colon H_n\to R$ by $\tau(\mathcal B)=1$ at the zero-dot identity word and $0$ at every other PBW basis element, extended $R$-linearly; by [F1] this is well defined over $R$ and after base change. Put $J_1=1$ and $J_i=q_H^{-1}T_{i-1}J_{i-1}T_{i-1}$ in the finite Hecke subalgebra; the $J_i$ are units. Define the second family $\mathcal C=\bigl\{T_vJ_1^{\delta(c_1)}\cdots J_n^{\delta(c_n)} X_1^{c_1}\cdots X_n^{c_n}:0\le c_i<\ell,\ v\in S_n\bigr\},\qquad \delta(0)=0,\ \delta(c)=-1\ (c>0).$ The standard anti-involution fixing the presentation generators fixes each $X_i$, so $\mathcal B^*=\{T_vX^c\}$ is a basis; at each fixed profile $c$, multiplying the finite Hecke factor by the unit $J_1^{\delta(c_1)}\cdots J_n^{\delta(c_n)}$ is an invertible $R$-linear change of the finite Hecke basis. Hence $\mathcal C$ is an $R$-basis of $H_n$. [F1, construct]

1.2 Cyclicity for $X_1$ via the tower. At rank one the algebra is commutative, so cyclicity is immediate; for the induction assume $n\ge2$. Identify $H_{n-1}$ with the subalgebra on $X_1,\dots,X_{n-1},T_1,\dots,T_{n-2}$; its bounded words are a subset of $\mathcal B$. Put $v_k=s_{n-1}\cdots s_k$ for $1\le k<n$ and $v_n=1$; the decomposition $w=uv_k$ with $u\in S_{n-1}$ is length additive, so $\{X_n^aT_{v_k}:0\le a<\ell,\ 1\le k\le n\}$ is a left $H_{n-1}$-basis of $H_n$. Define the left-linear projection $E_n\colon H_n\to H_{n-1}$ to be $1$ on $X_n^0T_{v_n}$ and $0$ on the other basis elements, and $\tau_n=\tau_{n-1}\circ E_n$. With $V=T_{n-1}\cdots T_1$ and $U=(T_{n-1}-q_H+1)\cdots(T_1-q_H+1)$, the mixed relation gives $VX_1=X_nU$, and [F2] gives $VX_1^m=X_n^mU+J_m$, where every term of $J_m$ has total dot degree $m$ and $X_n$-degree between $1$ and $m-1$ (the leading branch transfers the full exponent, each correction transfers a strictly smaller positive exponent, and no variable above $n$ occurs). For $m\le\ell$ every lower exponent in $J_m$ is below $\ell$, so $E_n(J_m)=0$; likewise $E_n(X_n^mU)=0$ for $1\le m<\ell$. Multiplying the first-dot relation $f(X_1)=0$ by $V$ gives $0=X_n^\ell U+J_\ell+\sum_{m=1}^{\ell-1}c_m(X_n^mU+J_m)+c_0V$, and applying $E_n$ yields $E_n(X_n^\ell U)=0$, which completes the missing case $m=\ell$. To verify right $X_1$-linearity, test the displayed left tower basis $X_n^aT_{v_k}$. For $k\ge2$, $T_{v_k}$ and $X_n$ commute with $X_1$; its projection is zero unless $a=0,k=n$, where the equality is immediate. For $k=1$, $VX_1=X_nU$ gives $E_n(X_n^aVX_1)=E_n(X_n^{a+1}U)=0$ for $0\le a<\ell$: bounded positive exponents project to zero, and the endpoint $a+1=\ell$ was just established. Left $H_{n-1}$-linearity then extends the equality to every $h$. Hence $E_n(hX_1)=E_n(h)X_1$ for all $h$, and by left linearity $E_n(X_1h)=X_1E_n(h)$; induction on $n$ gives $\tau_n(X_1h)=\tau_n(hX_1)$. [F1, F2, algebra]

1.3 Cyclicity for the finite generators. Let $p=X^a$ be a bounded dot monomial and $w\in S_n$. By [F2], $T_jp=(s_jp)T_j+(1-q_H)X_{j+1}\frac{p-s_jp}{X_j-X_{j+1}};$ for $p=X_j^aX_{j+1}^b$ times the other variables, the correction monomials have the same total dot degree and both displayed exponents at most $\max(a,b)<\ell$ (the exponents run as $(a-1-k,b+1+k)$ or $(a+k,b-k)$), so when the exponent profile is positive every term on either side of $\tau(T_jpT_w)=\tau(pT_wT_j)$ has a positive bounded profile and evaluates to $0$. When $p=1$, the finite Hecke multiplication formula [F1] gives coefficient of $1$ in $T_jT_w$, respectively $T_wT_j$, equal to $q_H$ if $w=s_j$ and $0$ otherwise. This proves $\tau(T_jh)=\tau(hT_j)$ without using the trace one is proving. [F1, F2, algebra]

2.1 Generation and symmetry. The elements $X_1,T_1,\dots,T_{n-1}$ generate $H_n$ as an $R$-algebra: the constant term $c_0=(-1)^\ell\prod_aQ_a$ is a unit, so $f(X_1)=0$ makes $X_1^{-1}$ a polynomial in $X_1$; each $T_j^{-1}=q_H^{-1}(T_j-q_H+1)$; and $X_r=q_H^{1-r}T_{r-1}\cdots T_1X_1T_1\cdots T_{r-1}$, with inverses expressed likewise. Moving the generators of a word one at a time around $\tau$, using steps 1.2 and 1.3, gives $\tau(ab)=\tau(ba)$ for every pair of words, hence for all $a,b$ by $R$-bilinearity; the pairing $(a,b)\mapsto\tau(ab)$ is associative and symmetric. [step 1.2, step 1.3, algebra]

2.2 Perfectness. Let $G_j$ be the matrix of the pairing between $\mathcal B$ and $\mathcal C$ restricted to profiles whose entries above $j$ vanish (all finite permutations included), of size $N_j=\ell^jn!$; order the new last profiles by $b_{j+1}=0,1,\dots,\ell-1$ and $c_{j+1}=0,\ell-1,\ell-2,\dots,1$. Cyclicity rotates the rightmost dot monomial to the front, combining exponents; if both new exponents are $0$ the block is $G_j$; if $0<b+c<\ell$ it is zero by step 1.2; if $b+c=\ell$ the cyclotomic reduction of the first variable applies: with $\alpha=(-1)^{\ell+1}Q_1\cdots Q_\ell$ one obtains $\tau(X_{j+1}^\ell h)=\alpha\,\tau(hJ_{j+1})$ (the right factor $J_{j+1}^{-1}$ occurring in $\mathcal C$ cancels the $J_{j+1}$), so the block is $\alpha G_j$. After the stated column permutation $G_{j+1}$ is block lower triangular with one diagonal block $G_j$ and $\ell-1$ diagonal blocks $\alpha G_j$; by [F3], $\det G_{j+1}=\pm\,\alpha^{(\ell-1)N_j}(\det G_j)^\ell .$ The base matrix $G_0=(\tau(T_wT_v))$ has entries $q_H^{\ell(w)}\delta_{v,w^{-1}}$ by the finite Hecke multiplication rule [F1], so its determinant is a unit. Induction makes $\det G_n$ a unit; equivalently, the bases $\mathcal B$ and $\mathcal C$ pair unimodularly, so $\tau$ identifies $H_n$ with its $R$-dual and the pairing is perfect over $R$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 Base change and boundary cases. Presentation base change commutes with forming $H_n$, and the universal PBW basis is free, so the trace coefficients and the inverse Gram matrix base-change to any commutative ring in which all parameters remain units; in particular they do so for the LM deformation DVR with $q_Ht$ and $Q_at^{na}$. For $n=0$ use $H_0=R$ with $\tau(1)=1_R$; for $\ell=1$ the family $\mathcal C$ consists of finite $T_v$ and the same proof applies. The separate level-zero positive-rank quotient is $0$, with the zero perfect pairing, and no claim $\tau(1)=1$ is made for it. No generic faithfulness or imported Bremke–Malle trace statement is used. [step 1.1, step 2.2] ∎

## Remarks

The trace is the canonical coefficient functional on the universal PBW basis; cyclicity is proved by the tower projection and the explicit Bernstein computation, and perfectness by exhibiting the dual basis $\mathcal C$ with a unimodular triangular Gram change. The monic scalar sign $\alpha=(-1)^{\ell+1}Q_1\cdots Q_\ell$ is forced by the presentation and is a unit either way. All arguments are finite and use no choice principle.
