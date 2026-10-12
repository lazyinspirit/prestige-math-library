---
id: lem-cartan-projection-constructs-the-quantum-verma-contravariant-form
kind: lemma
title: "Cartan projection constructs the Verma contravariant form and identifies its radical"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-contravariant-form-on-an-integrable-quantum-highest-weight-module, def-kashiwara-skew-derivations-on-the-negative-quantum-half, def-lusztig-divided-power-integral-form, def-quantum-integers-factorials-and-divided-powers-at-q-i, def-quantum-verma-module-and-simple-highest-weight-quotient, lem-divided-power-and-toral-quantum-binomial-reordering-identities, lem-quantum-pascal-recurrence-and-gaussian-integrality, lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions, lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality, thm-triangular-decomposition-of-a-quantized-enveloping-algebra]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§2, printed p. 8, displays (2.2)-(2.3) and Lemma 2.3: the anti-involution, the unique symmetric bilinear form with $(v_\\lambda,v_\\lambda)=1$ and $(xu,v)=(u,\\sigma(x)v)$, its orthogonality on distinct weights and its nondegeneracy."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 3, §3.4-3.5: the contravariant form on integrable highest weight modules; Ch. 6, §6.2 for the Verma module."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.2.1, printed pp. 316-317: the invariant form and the complete-reducibility proof."
---

## Statement

Let $\lambda\in P$, let $M(\lambda)$ be the Verma module with its canonical
$P$-label grading and highest vector $v_\lambda$
([[def-quantum-verma-module-and-simple-highest-weight-quotient]]), and let
$\sigma$ be the linear contravariant anti-involution of
[[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]]
($\sigma(K_h)=K_h$, $\sigma(E_i)=q_iF_iK_i^{-1}$,
$\sigma(F_i)=q_i^{-1}K_iE_i$).

(i) **Existence and uniqueness.** Define the $\lambda$-weight functional
$\eta\colon U_q(\mathfrak g)\to\mathbb Q(q)$ by $\eta(y):=$ the coefficient of
$v_\lambda$ in $yv_\lambda$ (so $\eta(y)$ is unchanged by adding an element of
the Verma ideal $J(\lambda)$, and $\eta(1)=1$). Then
$$B\bigl(av_\lambda,bv_\lambda\bigr):=\eta\bigl(\sigma(a)b\bigr)\qquad(a,b\in U_q^-)$$
is a well-defined bilinear form on $M(\lambda)$; it is homogeneous, normalized
($B(v_\lambda,v_\lambda)=1$) and $\sigma$-contravariant,
$B(xu,v)=B(u,\sigma(x)v)$. It is the unique such form on $M(\lambda)$, in the
sense of [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]].

(ii) **Radical and descent.** The radical
$\operatorname{rad}B=\{u:B(u,M(\lambda))=0\}$ equals the sum $N(\lambda)$ of all
proper graded submodules of $M(\lambda)$; consequently $B$ descends to a
nondegenerate normalized $\sigma$-contravariant form on the simple highest
weight quotient $L(\lambda)=M(\lambda)/N(\lambda)$.

(iii) **Rank-one norms and dominant singular vectors.** If
$m_i=\langle\lambda,h_i\rangle\ge0$ (that is, $\lambda$ dominant), then for
every $r\ge0$
$$B\bigl(F_i^{(r)}v_\lambda,F_i^{(r)}v_\lambda\bigr)=q_i^{\,r(m_i-r)}\binom{m_i}{r}_i,$$
with the Gaussian binomial interpreted as $0$ for $r>m_i$; in particular each
$F_i^{(m_i+1)}v_\lambda$ lies in the radical, so $B$ factors through the Serre
quotient $M(\lambda)/\sum_iU_q(\mathfrak g)F_i^{(m_i+1)}v_\lambda$. (The same
computation proves the norm formula for every $\lambda$ and all $r$ for which
the right-hand side is read with $m_i=\langle\lambda,h_i\rangle$.)

(iv) **Ordinary simplicity.** Let $V$ be an integrable cyclic graded quotient of
$M(\lambda)$ with support in $\lambda-Q_+$ on which the descended form is
nondegenerate. Then $V$ is simple as an ordinary module (not only as a graded
module).

(v) **Integrality of the lattice values.** If $\lambda$ is integral and
$V_A:=U_Av_\lambda=U_A^-v_\lambda\subseteq L(\lambda)$ is the highest lattice of
the Lusztig form ([[def-lusztig-divided-power-integral-form]]), then
$B(V_A,V_A)\subseteq A=\mathbb Z[q,q^{-1}]$. No perfectness of $B$ over $A$ is
asserted.

## Facts & Assumptions

**Given:** $\lambda\in P$, the Verma module $M(\lambda)=U_q^-v_\lambda$ with
label grading, the anti-involution $\sigma$, and the functional $\eta(y)=$ the
coefficient of $v_\lambda$ in $yv_\lambda$.

[F1] $M(\lambda)=U_qv_\lambda$, $M(\lambda)_{\lambda-\nu}=U_q^-[-\nu]v_\lambda$,
$M(\lambda)_\lambda=\mathbb Q(q)v_\lambda$; the map $U_q^-\to M(\lambda)$,
$a\mapsto av_\lambda$, is a linear isomorphism; the Verma ideal is
$J(\lambda)=U_q(\mathfrak g)\langle E_i,\ K_h-q^{\langle\lambda,h\rangle}\rangle$,
and $yv_\lambda=0$ if and only if $y\in J(\lambda)$
([[def-quantum-verma-module-and-simple-highest-weight-quotient]]).

[F2] $\sigma$ is an involutive $\mathbb Q(q)$-linear anti-automorphism with
$\sigma(K_h)=K_h$, $\sigma(E_i)=q_iF_iK_i^{-1}$,
$\sigma(F_i)=q_i^{-1}K_iE_i$; it preserves the root grading up to sign
($\sigma$ multiplies root degrees by $-1$)
([[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]],
[[lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions]]).

[F3] $\eta$ is $\mathbb Q(q)$-linear and factors through $J(\lambda)$; it
satisfies $\eta(K_hy)=q^{\langle\lambda,h\rangle}\eta(y)$ for all $y$, and
$\eta(F_i\cdot U_q(\mathfrak g))=0$: indeed $F_iyv_\lambda$ has label
$\mu-\alpha_i$ when $yv_\lambda$ has label $\mu\le\lambda$, which can equal
$\lambda$ only if some weight of $M(\lambda)$ equals $\lambda+\alpha_i$, and all
weights of $M(\lambda)$ lie in $\lambda-Q_+$ ([[def-quantum-verma-module-and-simple-highest-weight-quotient]]).

[F4] Triangular decomposition: $U_q(\mathfrak g)$ is the direct sum over
$\alpha,\gamma\in Q_+$ of the subspaces $U_q^-[-\gamma]U_q^0U_q^+[\alpha]$, and
$U_q(\mathfrak g)=U_q^-U_q^0U_q^+$ as a vector space; for $y\in U_q(\mathfrak g)$
the image $yv_\lambda$ determines and is determined by the sum of the
$U_q^-[-\gamma]$-components of its normal form
([[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]]).

[F5] Rank-one reordering: for every $r\ge1$,
$E_iF_i^{(r)}=F_i^{(r)}E_i+F_i^{(r-1)}T_{i,1-r,1}$ and
$T_{i,1-r,1}v_\lambda=[m_i-r+1]_iv_\lambda$ with $m_i=\langle\lambda,h_i\rangle$,
while $K_iF_i^{(r-1)}v_\lambda=q_i^{m_i-2(r-1)}F_i^{(r-1)}v_\lambda$
([[lem-divided-power-and-toral-quantum-binomial-reordering-identities]] (iii),
[[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F6] Divided-power multiplication $F_i^{(a)}F_i^{(b)}=\binom{a+b}{a}_iF_i^{(a+b)}$
and $\binom{m}{r}_i=0$ for $r>m$, with all Gaussian coefficients integer
Laurent polynomials in $q_i$
([[def-quantum-integers-factorials-and-divided-powers-at-q-i]],
[[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

## Verification

**Proof technique:** build the form from the $\lambda$-weight functional, verify
contravariance on the three families of generators using the weight bound and
the Verma ideal, obtain symmetry from the uniqueness theorem for contravariant
forms, identify the radical with the sum of proper graded submodules by a
pairing argument, and compute the rank-one norms by the divided-power
recursion.

1.1 The functional $\eta$ and the formula. Since $a\mapsto av_\lambda$ is a linear isomorphism $U_q^-\to M(\lambda)$ by [F1], the assignment $B(av_\lambda,bv_\lambda):=\eta(\sigma(a)b)$ is a well-defined bilinear form. It is homogeneous: if $a\in U_q^-[-\nu]$, $b\in U_q^-[-\mu]$ then $\sigma(a)b$ has root degree $\nu-\mu$, and $\eta$ vanishes on elements of nonzero root degree (the coefficient of the degree-zero vector $v_\lambda$ in $yv_\lambda$ vanishes when $y$ has nonzero degree, by the grading of $M(\lambda)$); hence $B$ vanishes unless $\nu=\mu$. It is normalized: $B(v_\lambda,v_\lambda)=\eta(\sigma(1)1)=\eta(1)=1$. [given, F1, F2, F4, algebra]

2.1 Contravariance on generators. (a) For $x=F_j$: $B(F_jav_\lambda,bv_\lambda)=\eta(\sigma(a)\sigma(F_j)b)=B(av_\lambda,\sigma(F_j)bv_\lambda)$ is a tautology of associativity. (b) For $x=K_h$: $K_hav_\lambda=q^{\langle\lambda-\nu,h\rangle}av_\lambda$ if $a\in U_q^-[-\nu]$, so $B(K_hav_\lambda,bv_\lambda)=q^{\langle\lambda-\nu,h\rangle}B(av_\lambda,bv_\lambda)$ while $B(av_\lambda,\sigma(K_h)bv_\lambda)=B(av_\lambda,K_hbv_\lambda)$ and $K_hbv_\lambda=q^{\langle\lambda-\mu,h\rangle}bv_\lambda$; both quantities vanish unless the labels match ($\nu=\mu$, forced by the homogeneity of $B$), in which case the two scalars agree. (c) For $x=E_i$: write $E_ia=aE_i+w$ with $w=(K_iQ-K_i^{-1}R)/(q_i-q_i^{-1})$, $Q=e_i''(a)$, $R=e_i'(a)\in U_q^-$ ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]]), so $E_iav_\lambda=wv_\lambda$ and the coordinate of $E_iav_\lambda$ is the normal form $\mathrm{nf}(w)\in U_q^-$ of $w$. For every $b\in U_q^-$ one has $E_ia-\mathrm{nf}(w)\in J(\lambda)$, and $\sigma(J(\lambda))U_q^-\subseteq\ker\eta$: indeed $J(\lambda)=U_q(\mathfrak g)\langle E_i,K_h-q^{\langle\lambda,h\rangle}\rangle$, so $\sigma(J(\lambda))=\langle\sigma(E_i),\sigma(K_h)-q^{\langle\lambda,h\rangle}\rangle U_q(\mathfrak g)$, and $\eta$ kills $\bigl(K_h-q^{\langle\lambda,h\rangle}\bigr)U_q(\mathfrak g)$ by $\eta(K_hy)=q^{\langle\lambda,h\rangle}\eta(y)$ of [F3], while it kills $\sigma(E_i)U_q(\mathfrak g)U_q^-=\sigma(E_i)U_q(\mathfrak g)=q_iF_iK_i^{-1}U_q(\mathfrak g)$ by $\eta(F_iU_q(\mathfrak g))=0$ of [F3]. Hence $\eta(\sigma(\mathrm{nf}(w))b)=\eta(\sigma(w)b)$, and therefore $B(E_iav_\lambda,bv_\lambda)=\eta(\sigma(w)b)=\eta(\sigma(a)\sigma(E_i)b)=B(av_\lambda,\sigma(E_i)bv_\lambda)$. Since the set of $x$ for which $B(xu,v)=B(u,\sigma(x)v)$ holds for all $u,v$ is a subalgebra of $U_q(\mathfrak g)$ (if it holds for $x$ and $y$, then $B(xyu,v)=B(yu,\sigma(x)v)=B(u,\sigma(y)\sigma(x)v)=B(u,\sigma(xy)v)$) and contains the generators by (a)-(c), the form is $\sigma$-contravariant. [step 1.1, F1, F2, F3, given, algebra]

3.1 Symmetry. Let $B^{t}(u,v):=B(v,u)$ be the transpose. Then $B^{t}(v_\lambda,v_\lambda)=1$ and $B^{t}$ is $\sigma$-contravariant: $B^{t}(xu,v)=B(v,xu)=B(\sigma(x)v,u)=B^{t}(u,\sigma(x)v)$, using step 2.1 and $\sigma^{2}=\mathrm{id}$. By the uniqueness part of [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]] (a $\sigma$-contravariant bilinear form on a normalized highest weight module with value $1$ on the top vector is unique), $B^{t}=B$, i.e. $B$ is symmetric. [step 2.1, F2, algebra]

4.1 The radical equals $N(\lambda)$. The radical of a contravariant form is a submodule ($B(xu,v)=0$ for $u\in\operatorname{rad}B$ and all $v$ implies $B(u,\sigma(x)v)=0$), it is homogeneous by step 1.1, and it is proper because $B(v_\lambda,v_\lambda)=1$. Hence $\operatorname{rad}B$ is a proper graded submodule and $\operatorname{rad}B\subseteq N(\lambda)$. Conversely let $n\in N(\lambda)$ have label $\lambda-\nu$ and let $b\in U_q^-[-\nu]$ be arbitrary. By symmetry and contravariance, $B(n,bv_\lambda)=B(bv_\lambda,n)=B(v_\lambda,\sigma(b)n)$; now $\sigma(b)n\in U_q(\mathfrak g)N(\lambda)\subseteq N(\lambda)$ and $\sigma(b)n$ has label $\lambda$ because $b$ has label $\nu$ and $n$ has label $\lambda-\nu$, so $\sigma(b)n\in N(\lambda)_\lambda=N(\lambda)\cap M(\lambda)_\lambda=0$ because $N(\lambda)$ is proper graded and $M(\lambda)_\lambda=\mathbb Q(q)v_\lambda$ with $v_\lambda\notin N(\lambda)$. Hence $B(n,bv_\lambda)=0$; since the $bv_\lambda$ with $b\in U_q^-[-\nu]$ span $M(\lambda)_{\lambda-\nu}$ and $B(n,\cdot)$ vanishes on all other graded pieces by homogeneity, $n\in\operatorname{rad}B$. Thus $N(\lambda)\subseteq\operatorname{rad}B$ and the two agree. Consequently the induced form on $L(\lambda)=M(\lambda)/N(\lambda)$ is well defined, normalized, contravariant and nondegenerate (if $\bar u$ pairs to zero with all of $L(\lambda)$ then $u$ pairs to zero with all of $M(\lambda)$, so $u\in\operatorname{rad}B=N(\lambda)$, i.e. $\bar u=0$). [step 1.1, step 2.1, step 3.1, F1, algebra]

5.1 Rank-one norms. Write $N_r:=B(F_i^{(r)}v_\lambda,F_i^{(r)}v_\lambda)$ and $m=m_i$. For $r\ge1$ use contravariance with $x=F_i$: since $F_iF_i^{(r-1)}=[r]_iF_i^{(r)}$ [F6], $N_r=[r]_i^{-1}B(F_iF_i^{(r-1)}v_\lambda,F_i^{(r)}v_\lambda)=[r]_i^{-1}B(F_i^{(r-1)}v_\lambda,\sigma(F_i)F_i^{(r)}v_\lambda)=[r]_i^{-1}q_i^{-1}B(F_i^{(r-1)}v_\lambda,K_iE_iF_i^{(r)}v_\lambda)$. By [F5], $E_iF_i^{(r)}v_\lambda=F_i^{(r-1)}T_{i,1-r,1}v_\lambda=F_i^{(r-1)}[m-r+1]_iv_\lambda$, so $K_iE_iF_i^{(r)}v_\lambda=[m-r+1]_iq_i^{m-2(r-1)}F_i^{(r-1)}v_\lambda$ and $N_r=[r]_i^{-1}q_i^{m-2r+1}[m-r+1]_iN_{r-1}$. With $N_0=1$, induction gives $N_r=\prod_{k=1}^{r}q_i^{m-2k+1}\frac{[m-k+1]_i}{[k]_i}=q_i^{rm-r^2}\frac{[m]_i\cdots[m-r+1]_i}{[1]_i\cdots[r]_i}=q_i^{r(m-r)}\binom{m}{r}_i$, since $\sum_{k=1}^{r}(m-2k+1)=rm-r^2$; when $r>m$ the factor $[m-r+1]_i=0$ appears and the product vanishes, and $\binom{m}{r}_i=0$ by [F6]. For $r=m_i+1$ this gives $N_{m_i+1}=0$; moreover for any word $w$ of degree $-(m_i+1)\alpha_i$ one has $w=cF_i^{(m_i+1)}$ because $U_q^-[-(m_i+1)\alpha_i]$ is spanned by the single word $F_i^{m_i+1}$, so $B(F_i^{(m_i+1)}v_\lambda,wv_\lambda)=0$ for all $w$, i.e. $F_i^{(m_i+1)}v_\lambda\in\operatorname{rad}B=N(\lambda)$ by step 4.1. [step 2.1, step 4.1, F5, F6, algebra]

6.1 Ordinary simplicity. Let $V$ be the quotient of the statement and $0\ne W\subseteq V$ an ordinary submodule. Choose $0\ne x\in W$ and write $x=\sum_jx_j$ with nonzero homogeneous components of distinct labels $\mu_j\in\lambda-Q_+$. Choose a minimal label $\mu_j$ in this finite support. Homogeneity and nondegeneracy give a homogeneous $b\in U_q^-[-(\lambda-\mu_j)]$ with $B(x_j,b\bar v_\lambda)\ne0$. The vector $y:=\sigma(b)x$ belongs to $W$. For $k\ne j$, $\sigma(b)x_k$ would have label $\lambda+\mu_k-\mu_j$, which cannot lie in $\lambda-Q_+$: membership would imply $\mu_k<\mu_j$, contradicting minimality. Thus $y=\sigma(b)x_j\in V_\lambda=\mathbb Q(q)\bar v_\lambda$, and $B(y,\bar v_\lambda)=B(x_j,b\bar v_\lambda)\ne0$. Hence $W$ contains $\bar v_\lambda$ and equals its cyclic module $V$. This proves ordinary simplicity without taking homogeneous components inside $W$. [step 4.1, step 5.1, F1, F2, algebra]

7.1 Integrality. Let $\lambda$ be integral and $a,b\in U_A^-$. By the stability computation of [[lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]] (applied to $\sigma$ in place of the two involutions named there: $\sigma(E_i^{(r)})=q_i^{r^2}F_i^{(r)}K_i^{-r}$ and $\sigma(F_i^{(r)})=q_i^{-r^2}K_i^rE_i^{(r)}$ lie in $U_A$, and $\sigma(K_h)=K_h$, $\sigma(T_{i,c,t})=T_{i,c,t}$), one has $\sigma(a)b\in U_A$. Write $\sigma(a)b$ in the triangular spanning form $\sigma(a)b=\sum_tb_tu_tc_t$ with $b_t\in U_A^-$, $u_t\in U_A^0$, $c_t\in U_A^+$ ([[lem-divided-power-and-toral-quantum-binomial-reordering-identities]] (iv)). Then $\sigma(a)bv_\lambda=\sum_t\epsilon_t\chi_\lambda(u_t)b_tv_\lambda$ with $\epsilon_t$ the augmentation of $c_t$, so $\eta(\sigma(a)b)=\sum_t\epsilon_t\chi_\lambda(u_t)\varepsilon(b_t)$ with $\varepsilon$ the augmentation of $U_A^-$: each of these three factors lies in $A$, because $\varepsilon(U_A^\pm)\subseteq A$, $\chi_\lambda(K_h)=q^{\langle\lambda,h\rangle}\in A$ and $\chi_\lambda(T_{i,c,t})=\left[\langle\lambda,h_i\rangle+c\ \mathrm{choose}\ t\right]_i$, a Gaussian binomial with integer upper entry, which is an integer Laurent polynomial in $q_i$ by [F6] (the negative upper entry is handled by the finite product formula $[x]_i$ and the Gaussian quotient identities). Hence $B(av_\lambda,bv_\lambda)=\eta(\sigma(a)b)\in A$, which is (v). No perfectness of $B$ over $A$ and no $A$-valuedness of the negative-half Kashiwara form is claimed. This completes the construction and the proof. [step 1.1, step 4.1, F5, F6, algebra] ∎
