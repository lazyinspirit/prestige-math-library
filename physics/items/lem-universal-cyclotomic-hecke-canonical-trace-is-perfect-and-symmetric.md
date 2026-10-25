---
id: lem-universal-cyclotomic-hecke-canonical-trace-is-perfect-and-symmetric
kind: lemma
title: "The universal cyclotomic Hecke canonical trace is perfect and symmetric"
status: published
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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Gunter Malle and Andrew Mathas, Symmetric cyclotomic Hecke algebras, J. Algebra 205 (1998), 275–293"
      url: "https://doi.org/10.1006/jabr.1997.7339"
      locator: "Cached complete 15-page author preprint; §3, printed pp. 5–9, especially Lemma 3.7 and Proposition 3.8. Local restricted-profile computations below reconstruct the proof; the sign alpha is obtained directly from the cyclotomic polynomial."
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

[F3] Determinants are multiplicative, and block-triangular determinants multiply over their diagonal blocks ([[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]]). For a square matrix over the commutative ring $R$, cofactor expansion gives $G\operatorname{adj}(G)=\operatorname{adj}(G)G=(\det G)I$, so a unit determinant gives an inverse $(\det G)^{-1}\operatorname{adj}(G)$ over $R$.

## Proof

**Proof technique:** direct.

**Given:** The universal PBW presentation and the data of [F1]–[F3].

1.1 The trace and its dual basis. Define $\tau\colon H_n\to R$ by $\tau(\mathcal B)=1$ at the zero-dot identity word and $0$ at every other PBW basis element, extended $R$-linearly; by [F1] this is well defined over $R$ and after base change. Put $J_1=1$ and $J_i=q_H^{-1}T_{i-1}J_{i-1}T_{i-1}$ in the finite Hecke subalgebra; the $J_i$ are units. Define the second family $\mathcal C=\bigl\{T_vJ_1^{\delta(c_1)}\cdots J_n^{\delta(c_n)} X_1^{c_1}\cdots X_n^{c_n}:0\le c_i<\ell,\ v\in S_n\bigr\},\qquad \delta(0)=0,\ \delta(c)=-1\ (c>0).$ The standard anti-involution fixing the presentation generators fixes each $X_i$, so $\mathcal B^*=\{T_vX^c\}$ is a basis; at each fixed profile $c$, multiplying the finite Hecke factor by the unit $J_1^{\delta(c_1)}\cdots J_n^{\delta(c_n)}$ is an invertible $R$-linear change of the finite Hecke basis. Hence $\mathcal C$ is an $R$-basis of $H_n$. [F1, construct]

1.2 Cyclicity for $X_1$ via the tower. At rank one the algebra is commutative, so cyclicity is immediate; for the induction assume $n\ge2$. Identify $H_{n-1}$ with the subalgebra on $X_1,\dots,X_{n-1},T_1,\dots,T_{n-2}$; its bounded words are a subset of $\mathcal B$. Put $v_k=s_{n-1}\cdots s_k$ for $1\le k<n$ and $v_n=1$; the decomposition $w=uv_k$ with $u\in S_{n-1}$ is length additive, so $\{X_n^aT_{v_k}:0\le a<\ell,\ 1\le k\le n\}$ is a left $H_{n-1}$-basis of $H_n$. Define the left-linear projection $E_n\colon H_n\to H_{n-1}$ to be $1$ on $X_n^0T_{v_n}$ and $0$ on the other basis elements, and $\tau_n=\tau_{n-1}\circ E_n$. With $V=T_{n-1}\cdots T_1$ and $U=(T_{n-1}-q_H+1)\cdots(T_1-q_H+1)$, the mixed relation gives $VX_1=X_nU$, and [F2] gives $VX_1^m=X_n^mU+J_m$, where every term of $J_m$ has total dot degree $m$ and $X_n$-degree between $1$ and $m-1$ (the leading branch transfers the full exponent, each correction transfers a strictly smaller positive exponent, and no variable above $n$ occurs). For $m\le\ell$ every lower exponent in $J_m$ is below $\ell$, so $E_n(J_m)=0$; likewise $E_n(X_n^mU)=0$ for $1\le m<\ell$. Multiplying the first-dot relation $f(X_1)=0$ by $V$ gives $0=X_n^\ell U+J_\ell+\sum_{m=1}^{\ell-1}c_m(X_n^mU+J_m)+c_0V$, and applying $E_n$ yields $E_n(X_n^\ell U)=0$, which completes the missing case $m=\ell$. To verify right $X_1$-linearity, test the displayed left tower basis $X_n^aT_{v_k}$. For $k\ge2$, $T_{v_k}$ and $X_n$ commute with $X_1$; its projection is zero unless $a=0,k=n$, where the equality is immediate. For $k=1$, $VX_1=X_nU$ gives $E_n(X_n^aVX_1)=E_n(X_n^{a+1}U)=0$ for $0\le a<\ell$: bounded positive exponents project to zero, and the endpoint $a+1=\ell$ was just established. Left $H_{n-1}$-linearity then extends the equality to every $h$. Hence $E_n(hX_1)=E_n(h)X_1$ for all $h$, and by left linearity $E_n(X_1h)=X_1E_n(h)$; induction on $n$ gives $\tau_n(X_1h)=\tau_n(hX_1)$. [F1, F2, algebra]

1.3 Cyclicity for the finite generators. Let $p=X^a$ be a bounded dot monomial and $w\in S_n$. By [F2], $T_jp=(s_jp)T_j+(1-q_H)X_{j+1}\frac{p-s_jp}{X_j-X_{j+1}};$ for $p=X_j^aX_{j+1}^b$ times the other variables, the correction monomials have the same total dot degree and both displayed exponents at most $\max(a,b)<\ell$ (the exponents run as $(a-1-k,b+1+k)$ or $(a+k,b-k)$), so when the exponent profile is positive every term on either side of $\tau(T_jpT_w)=\tau(pT_wT_j)$ has a positive bounded profile and evaluates to $0$. When $p=1$, the finite Hecke multiplication formula [F1] gives coefficient of $1$ in $T_jT_w$, respectively $T_wT_j$, equal to $q_H$ if $w=s_j$ and $0$ otherwise. This proves $\tau(T_jh)=\tau(hT_j)$ without using the trace one is proving. [F1, F2, algebra]

2.1 Generation and symmetry. The elements $X_1,T_1,\dots,T_{n-1}$ generate $H_n$ as an $R$-algebra: the constant term $c_0=(-1)^\ell\prod_aQ_a$ is a unit, so $f(X_1)=0$ makes $X_1^{-1}$ a polynomial in $X_1$; each $T_j^{-1}=q_H^{-1}(T_j-q_H+1)$; and $X_r=q_H^{1-r}T_{r-1}\cdots T_1X_1T_1\cdots T_{r-1}$, with inverses expressed likewise. Moving the generators of a word one at a time around $\tau$, using steps 1.2 and 1.3, gives $\tau(ab)=\tau(ba)$ for every pair of words, hence for all $a,b$ by $R$-bilinearity; the pairing $(a,b)\mapsto\tau(ab)$ is associative and symmetric. [step 1.2, step 1.3, algebra]

2.2 Restricted-profile zero values. For $0\le j\le n$ let $U_j$ be the span of the PBW words whose dot entries above $j$ vanish, all finite permutations included. It is a right finite-Hecke module. Multiplying its dot part by any polynomial in $X_1,\dots,X_j$ stays in $U_j$: transport the first cyclotomic relation successively only through $T_1,\dots,T_{j-1}$, so each resulting relation reduces a power of $X_i$, $i\le j$, using variables of index at most $i$ and finite words of indices below $i$; repeated Bernstein straightening and the bounded reduction of [F1] therefore never introduce a variable above $j$. In particular $U_j$ is the dot algebra on its first $j$ variables times the finite Hecke algebra. For $1\le k<\ell$ and $h\in U_j$, $\tau(X_{j+1}^kh)=0$, directly from the bounded basis, since the new exponent is positive and bounded. This statement concerns $h\in U_j$, rather than arbitrary $h\in H_n$. [F1, F2, step 1.1, algebra]

3.1 Transferred restricted-profile powers. Write $q=q_H$. For $1\le i\le j+1\le n$, $1\le k\le\ell$ and $h\in U_j$ we claim $\tau(X_{j+1}^kh)=q^{i-j-1}\tau(T_j\cdots T_iX_i^kT_i\cdots T_jh)$, with empty chains when $i=j+1$. The mixed relations give $X_i^k=q^{-1}T_{i-1}X_{i-1}^kT_{i-1}+q^{-1}(q-1)\sum_{c=1}^{k-1}X_i^cX_{i-1}^{k-c}T_{i-1}$, by induction on $k$ using that $T_{i-1}$ commutes with $X_{i-1}X_i$. To descend from $i$ to $i-1$, it suffices to show every correction has trace zero. Put $A=T_j\cdots T_i$, $B=T_i\cdots T_j$. For $0<c<k$, the mixed relation and the formula $X_{j+1}=q^{i-j-1}AX_iB$ give the exact identity $AX_i^cX_{i-1}^{k-c}T_{i-1}Bh=q^{j-i+1}AX_i^{c-1}X_{i-1}^{k-c-1}T_{i-1}A^{-1}X_{j+1}X_{i-1}h$: substitute $B=q^{j-i+1}X_i^{-1}A^{-1}X_{j+1}$ and use $X_iT_{i-1}X_i^{-1}=X_{i-1}^{-1}T_{i-1}X_{i-1}$. Expand $X_i^{c-1}X_{i-1}^{k-c-1}T_{i-1}A^{-1}$ in the reversed PBW order $\sum a_{w,b}T_wX^b$ using $T_a^{-1}=q^{-1}(T_a+1-q)$. Bernstein straightening swaps the two exponents or replaces them by intermediate exponents, so every exponent stays nonnegative and at most $\max(c-1,k-c-1)\le k-2$; variables have index at most $j+1$. Cyclicity from step 2.1 makes the trace of each correction a sum of traces of $X_{j+1}^{1+b_{j+1}}(X_1^{b_1}\cdots X_j^{b_j})X_{i-1}hAT_w$. The parenthesized remaining factor lies in $U_j$ by step 2.2, and $1\le1+b_{j+1}\le k-1<\ell$, so each trace is zero. Downward induction proves the claim, including $k=1$, whose correction sum is empty. [F1, F2, step 2.1, step 2.2, algebra]

4.1 The cyclotomic endpoint. Apply step 3.1 with $i=1$, $k=\ell$. In $\tau(q^{-j}T_j\cdots T_1X_1^\ell T_1\cdots T_jh)$ replace $X_1^\ell$ using its first cyclotomic relation. Each positive power $X_1^k$, $k<\ell$, transfers back to $X_{j+1}^k$ by step 3.1 and contributes zero by step 2.2. The constant term contributes $\alpha\tau(J_{j+1}h)$, where $\alpha=-f(0)=(-1)^{\ell+1}Q_1\cdots Q_\ell$ and $J_{j+1}=q^{-j}T_j\cdots T_1T_1\cdots T_j$. Thus $\tau(X_{j+1}^\ell h)=\alpha\tau(hJ_{j+1})$ for every $h\in U_j$. For $j=0$ this follows directly from the first polynomial; for $\ell=1$ there are no positive-power intermediate terms. The restriction on $h$ is essential. [step 2.1, step 2.2, step 3.1, algebra]

5.1 The full Gram blocks. Let $\mathcal B_j$ and $\mathcal C_j$ be the parts of the two bases with entries above $j$ zero, and let $G_j=(\tau(bc))$ be their matrix, of size $N_j=\ell^jn!$. For new profiles $b,c$ at position $j+1$, cyclicity and commuting dots rewrite an entry as $\tau(X_{j+1}^{b+c}hJ_{j+1}^{\delta(c)})$, where $h=X_1^{b_1+c_1}\cdots X_j^{b_j+c_j}T_wT_vJ_1^{\delta(c_1)}\cdots J_j^{\delta(c_j)}\in U_j$ by step 2.2; earlier combined exponents may exceed $\ell-1$, and that same reduction argument is why this remains in $U_j$. If $b=c=0$ the block is $G_j$. If $0<b+c<\ell$ it is zero by step 2.2. If $b+c=\ell$, then $c>0$ and step 4.1 cancels the last $J_{j+1}^{-1}$, giving the block $\alpha G_j$. Order rows by $b=0,1,\dots,\ell-1$ and columns by $c=0,\ell-1,\dots,1$. The row and column at zero have only $G_j$ at their intersection. Among positive rows and columns the blocks above the diagonal have $b+c<\ell$ and vanish, the diagonal has $b+c=\ell$, and blocks below may be arbitrary. Hence $G_{j+1}$ is block lower triangular with diagonal $G_j,\alpha G_j,\dots,\alpha G_j$, so $\det G_{j+1}=\pm\alpha^{(\ell-1)N_j}(\det G_j)^\ell$. At $j=0$, $G_0=(\tau(T_wT_v))$ has entry $q^{\operatorname{length}(w)}\delta_{v,w^{-1}}$ by [F1], and its determinant is a unit. Induction gives a unit determinant for $G_n$; since $\mathcal B$ and $\mathcal C$ are bases, the pairing identifies $H_n$ with its $R$-dual. [F1, F3, step 1.1, step 2.1, step 2.2, step 4.1, algebra]

6.1 Base change and boundary cases. Presentation base change commutes with forming $H_n$, and the universal PBW basis is free, so the trace coefficients and the inverse Gram matrix base-change to any commutative ring in which all parameters remain units; in particular they do so for the LM deformation DVR with $q_Ht$ and $Q_at^{na}$. For $n=0$ use $H_0=R$ with $\tau(1)=1_R$; for $\ell=1$ the family $\mathcal C$ consists of finite $T_v$ and the same proof applies. The separate level-zero positive-rank quotient is $0$, with the zero perfect pairing, and no claim $\tau(1)=1$ is made for it. No generic faithfulness or imported Bremke–Malle trace statement is used. [step 1.1, step 5.1] ∎

## Remarks

The trace is the canonical coefficient functional on the universal PBW basis; cyclicity is proved by the tower projection and the explicit Bernstein computation, and perfectness by exhibiting the dual basis $\mathcal C$ with a unimodular triangular Gram change. The scalar $\alpha=(-1)^{\ell+1}Q_1\cdots Q_\ell$ is forced by the first cyclotomic polynomial. At rank one and level one it is $Q_1$, which fixes the sign independently of a printed source formula. Exact universal PBW is a required input; unresolved prerequisites of that supplier hold this carrier and its consumers. All arguments are finite and use no choice principle.
