---
id: def-kashiwara-skew-derivations-on-the-negative-quantum-half
kind: definition
title: "Kashiwara's skew derivations $e_i'$ and $e_i''$ on the negative half"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-drinfeld-jimbo-quantized-enveloping-algebra, def-positive-negative-and-toral-quantum-subalgebras, def-quantum-integers-factorials-and-divided-powers-at-q-i, thm-triangular-decomposition-of-a-quantized-enveloping-algebra, lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions, def-kac-moody-root-lattice-height-and-positive-cone]
justified_by: []
aliases: []
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§6, printed pp. 22-23, displays (6.1)-(6.3): the unique decomposition $e_iP-Pe_i=(K_iQ-K_i^{-1}R)/(q_i-q_i^{-1})$, the definition $e_i'(P)=R$, $e_i''(P)=Q$, and the commutation relations $e_i'f_j=q_i^{-a_{ij}}f_je_i'+\\delta_{ij}$, $e_i''f_j=q_i^{a_{ij}}f_je_i''+\\delta_{ij}$."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 1, Sections 1.2.13-1.2.14: coproduct coefficient maps, twisted product rules and bar compatibility in Lusztig's normalization. The commutator normalization and direction used by this item are fixed by JKK (6.1)-(6.3), rather than by identifying these maps without a normalization dictionary."
---

## Definition

Let $U_q(\mathfrak g)$ be the Drinfeld–Jimbo algebra of
[[def-drinfeld-jimbo-quantized-enveloping-algebra]], with its generated
subalgebras $U_q^-,U_q^0,U_q^+$ and root gradings
$U_q^-=\bigoplus_{\nu\in Q_+}U_q^-[-\nu]$ of
[[def-positive-negative-and-toral-quantum-subalgebras]]
($Q_+=\bigoplus_i\mathbb Z_{\ge0}\alpha_i$, height $\operatorname{ht}$ of
[[def-kac-moody-root-lattice-height-and-positive-cone]]). Fix $i\in I$ and
write $K_i:=K_{d_ih_i}$, so that $K_iF_jK_i^{-1}=q_i^{-a_{ij}}F_j$ and
$q_i-q_i^{-1}\ne0$.

For every $P\in U_q^-$ there exist unique elements $Q,R\in U_q^-$ with

$$E_iP-PE_i=\frac{K_iQ-K_i^{-1}R}{q_i-q_i^{-1}}.$$

Define the **Kashiwara skew derivations** $e_i',e_i'':U_q^-\to U_q^-$ by

$$e_i'(P):=R\qquad\text{and}\qquad e_i''(P):=Q .$$

Thus $e_i'$ is the operator whose value is the coefficient of $K_i^{-1}$ and
$e_i''$ is the operator whose value is the coefficient of $K_i$ in the
commutator with $E_i$. The maps have the following properties, all proved in
the Verification below.

(a) $e_i'$ and $e_i''$ are $\mathbb Q(q)$-linear, vanish on $1$, and
$e_i'(F_j)=e_i''(F_j)=\delta_{ij}$ for all $j\in I$.

(b) (Twisted Leibniz rules) For homogeneous $x,y\in U_q^-$, with the actual
weight $\operatorname{wt}(x)\in Q$ of [[def-positive-negative-and-toral-quantum-subalgebras]],
$$e_i'(xy)=e_i'(x)y+q_i^{\langle\operatorname{wt}(x),h_i\rangle}x\,e_i'(y),\qquad e_i''(xy)=e_i''(x)y+q_i^{-\langle\operatorname{wt}(x),h_i\rangle}x\,e_i''(y).$$

(c) (Commutation with the generators) For all $j\in I$ and all $y\in U_q^-$,
$$e_i'(F_jy)=q_i^{-a_{ij}}F_j\,e_i'(y)+\delta_{ij}y,\qquad e_i''(F_jy)=q_i^{a_{ij}}F_j\,e_i''(y)+\delta_{ij}y,$$

equivalently $e_i'F_j=q_i^{-a_{ij}}F_je_i'+\delta_{ij}$ and
$e_i''F_j=q_i^{a_{ij}}F_je_i''+\delta_{ij}$ as operators on $U_q^-$.

(d) (Grading, height and nilpotence) For every $\nu\in Q_+$,

$$e_i'\bigl(U_q^-[-\nu]\bigr),\ e_i''\bigl(U_q^-[-\nu]\bigr)\ \subseteq\ U_q^-[ -(\nu-\alpha_i)],$$

the right-hand side being $0$ when $\nu-\alpha_i\notin Q_+$. In particular both
maps raise the actual weight by $\alpha_i$, lower the positive height by one,
and are locally nilpotent: $(e_i')^{k}(P)=(e_i'')^{k}(P)=0$ for $k$ larger than
the height of the degree of a homogeneous $P$.

(e) (Bar compatibility) Let $\psi$ be the semilinear algebra involution
$q\mapsto q^{-1}$, $E_i\mapsto E_i$, $F_i\mapsto F_i$, $K_h\mapsto K_{-h}$ of
[[lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions]].
Then $e_i''=\psi\,e_i'\,\psi$ on $U_q^-$.

The commutator construction also fixes the orientation: the
$K_i^{-1}$-coefficient is $e_i'$ and the $K_i$-coefficient is $e_i''$. The
twists $q_i^{\pm\langle\operatorname{wt}(x),h_i\rangle}$ in (b) are the twists
of the corresponding coefficient maps of the negative-half coproduct in the
source's dictionary; the explicit commutator computation used here is the
definition of record, and no imaginary-simple-root convention is needed, since
every Cartan datum of this library has $a_{ii}=2$.

## Facts & Assumptions

**Given:** A fixed $i\in I$, the Drinfeld–Jimbo algebra $U_q(\mathfrak g)$ and its generated subalgebras, the root grading and the height $\operatorname{ht}:Q_+\to\mathbb Z_{\ge0}$ ([[def-drinfeld-jimbo-quantized-enveloping-algebra]], [[def-positive-negative-and-toral-quantum-subalgebras]], [[def-kac-moody-root-lattice-height-and-positive-cone]]), and the finite words $w=F_{j_1}\cdots F_{j_m}$ ($m\ge0$, the empty word for $m=0$) in the negative generators.

[F1] The multiplication $U_q^-\otimes_{\mathbb Q(q)}U_q^0\otimes_{\mathbb Q(q)}U_q^+\to U_q(\mathfrak g)$ is a vector-space isomorphism, and the $K_h$ ($h\in P^{\vee}$) are linearly independent; every element of $U_q^-$ is a finite $\mathbb Q(q)$-linear combination of words in the $F_j$; the root grading $U_q(\mathfrak g)=\bigoplus_{\beta\in Q}U_q(\mathfrak g)[\beta]$ has $U_q^-[-\nu]\,U_q^0\subseteq U_q(\mathfrak g)[-\nu]$ and the images of the subspaces $U_q^-[-\nu]\otimes U_q^0\otimes\mathbb Q(q)$ for distinct $\nu$ are linearly independent ([[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]], [[def-positive-negative-and-toral-quantum-subalgebras]]).

[F2] For homogeneous $x\in U_q(\mathfrak g)$ of degree $\beta$ and $h\in P^{\vee}$, $K_hxK_h^{-1}=q^{\beta(h)}x$, hence $K_hx=q^{\beta(h)}xK_h$ and $K_h^{-1}x=q^{-\beta(h)}xK_h^{-1}$; in particular $K_iF_j=q_i^{-a_{ij}}F_jK_i$ and $K_i^{-1}F_j=q_i^{a_{ij}}F_jK_i^{-1}$ ( [[def-positive-negative-and-toral-quantum-subalgebras]], [[def-kac-moody-root-lattice-height-and-positive-cone]] for $\operatorname{wt}(F_j)=-\alpha_j$).

[F3] $E_iF_j-F_jE_i=\delta_{ij}(K_i-K_i^{-1})/(q_i-q_i^{-1})$ in $U_q(\mathfrak g)$ ([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F4] $\psi$ is an involutive semilinear algebra automorphism of $U_q(\mathfrak g)$ with $\psi(q)=q^{-1}$, $\psi(E_i)=E_i$, $\psi(F_i)=F_i$, $\psi(K_h)=K_{-h}$; it preserves $U_q^-$ ([[lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions]]).

[F5] The height is additive: $\operatorname{ht}(\nu-\alpha_i)=\operatorname{ht}(\nu)-1$ for $\nu-\alpha_i\in Q_+$; if $\nu-k\alpha_i\in Q_+$ then $\operatorname{ht}(\nu-k\alpha_i)=\operatorname{ht}(\nu)-k\ge0$, so there is no word of that degree once $k>\operatorname{ht}(\nu)$; and the degrees of the direct sum $\bigoplus_{\nu\in Q_+}U_q^-[-\nu]$ are pairwise distinct ([[def-kac-moody-root-lattice-height-and-positive-cone]], [[def-positive-negative-and-toral-quantum-subalgebras]]).

[F6] $q_i=q^{d_i}$ with $d_i>0$, so $q_i-q_i^{-1}\ne0$ in $\mathbb Q(q)$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

## Verification

**Proof technique:** Construct $Q_w,R_w$ on words by moving $E_i$ to the right, prove the defining identity on words by induction, and obtain existence and uniqueness for all elements from [F1] and the linear independence of the toral coefficients.

1.1 For each word $w=F_{j_1}\cdots F_{j_m}$ define $Q_w,R_w\in U_q^-$ by recursion on $m$: for the empty word $Q_1:=R_1:=0$, and for $m\ge1$, with $w'=F_{j_2}\cdots F_{j_m}$, set $Q_w:=q_i^{a_{ij_1}}F_{j_1}Q_{w'}+\delta_{ij_1}w'$ and $R_w:=q_i^{-a_{ij_1}}F_{j_1}R_{w'}+\delta_{ij_1}w'$. Each is a finite $\mathbb Q(q)$-linear combination of words. If $w$ has degree $-\nu$, every nonzero term of $Q_w,R_w$ has degree $-\nu+\alpha_i$: inductively a nonzero $Q_{w'},R_{w'}$ has degree $\deg w'+\alpha_i$, multiplication by $F_{j_1}$ gives $\deg w+\alpha_i$, and the term $\delta_{ij_1}w'$ has that degree when $j_1=i$. [given, F1, F2, construct]

2.1 For every word $w$ one has $E_iw-wE_i=(K_iQ_w-K_i^{-1}R_w)/(q_i-q_i^{-1})$. For $m=0$ both sides vanish. For $m\ge1$, write $w=F_{j_1}w'$. Multiplying the inductive identity for $w'$ by $F_{j_1}$ on the left gives $F_{j_1}E_iw'=F_{j_1}w'E_i+F_{j_1}K_iQ_{w'}/(q_i-q_i^{-1})-F_{j_1}K_i^{-1}R_{w'}/(q_i-q_i^{-1})$, and [F3] gives $E_iF_{j_1}-F_{j_1}E_i=\delta_{ij_1}(K_i-K_i^{-1})/(q_i-q_i^{-1})$. Adding, and using [F2] in the form $F_{j_1}K_i=q_i^{a_{ij_1}}K_iF_{j_1}$, $F_{j_1}K_i^{-1}=q_i^{-a_{ij_1}}K_i^{-1}F_{j_1}$, yields $E_iw-wE_i=\bigl(K_i(q_i^{a_{ij_1}}F_{j_1}Q_{w'}+\delta_{ij_1}w')-K_i^{-1}(q_i^{-a_{ij_1}}F_{j_1}R_{w'}+\delta_{ij_1}w')\bigr)/(q_i-q_i^{-1})=(K_iQ_w-K_i^{-1}R_w)/(q_i-q_i^{-1})$, which is the claim. [step 1.1, F2, F3, algebra]

3.1 Existence follows for every $P\in U_q^-$: by [F1] write $P=\sum_wc_ww$ as a finite linear combination of words, and set $Q:=\sum_wc_wQ_w$, $R:=\sum_wc_wR_w$. Summing the identities of step 2.1 with coefficients $c_w$ gives $E_iP-PE_i=(K_iQ-K_i^{-1}R)/(q_i-q_i^{-1})$. [step 2.1, F1, algebra]

4.1 For uniqueness suppose $K_iQ-K_i^{-1}R=0$ with $Q,R\in U_q^-$. Decompose $Q=\sum_{\nu}Q_{\nu}$, $R=\sum_{\nu}R_{\nu}$ into the finitely many homogeneous components with $Q_{\nu},R_{\nu}\in U_q^-[-\nu]$ ([[def-positive-negative-and-toral-quantum-subalgebras]]). By [F2], $(K_iQ_{\nu}-K_i^{-1}R_{\nu})K_i=q_i^{-\nu(h_i)}Q_{\nu}K_i^2-q_i^{\nu(h_i)}R_{\nu}$ after multiplying on the right by $K_i$; the terms for distinct $\nu$ lie in distinct degrees $-\nu$ of the direct sum [F1], so for every $\nu$ the identity $q_i^{-\nu(h_i)}Q_{\nu}\otimes K_i^2=q_i^{\nu(h_i)}R_{\nu}\otimes1$ holds in $U_q^-[-\nu]\otimes U_q^0$ under the injective multiplication map. Applying $\mathrm{id}\otimes\lambda$, where $\lambda$ is the linear functional on $U_q^0$ with $\lambda(K_{2d_ih_i})=1$ and $\lambda(K_h)=0$ for $h\ne2d_ih_i$ (existence and well-definedness by the linear independence in [F1]), gives $Q_{\nu}=0$; then $R_{\nu}=0$. Hence $Q=R=0$, and two pairs $(Q,R)$, $(Q',R')$ giving the same commutator have $Q=Q'$ and $R=R'$. [step 3.1, F1, F2, F6, algebra]

5.1 Consequently $e_i'$ and $e_i''$ are well defined on all of $U_q^-$; they are $\mathbb Q(q)$-linear because the defining identity is linear in $P$: if $P=c_1P_1+c_2P_2$, the pairs $(c_1Q(P_1)+c_2Q(P_2),\,c_1R(P_1)+c_2R(P_2))$ satisfy the defining identity for $P$, so by uniqueness each map is linear. The recursion gives $Q_1=R_1=0$, hence $e_i'(1)=e_i''(1)=0$; and for the one-letter word $w=F_j$ the recursion gives $Q_{F_j}=R_{F_j}=\delta_{ij}$, hence $e_i'(F_j)=e_i''(F_j)=\delta_{ij}$. [step 1.1, step 3.1, step 4.1, F4, algebra]

5.2 For homogeneous $x,y\in U_q^-$ decompose $E_i(xy)-(xy)E_i=(E_ix-xE_i)y+x(E_iy-yE_i)$ and substitute the defining identities for $x$ and $y$: the right side equals $\bigl(K_ie_i''(x)y-K_i^{-1}e_i'(x)y+xK_ie_i''(y)-xK_i^{-1}e_i'(y)\bigr)/(q_i-q_i^{-1})$. By [F2] with $\operatorname{wt}(x)$ in place of $\beta$, $xK_i=K_iq_i^{-\langle\operatorname{wt}(x),h_i\rangle}x$ and $xK_i^{-1}=K_i^{-1}q_i^{\langle\operatorname{wt}(x),h_i\rangle}x$. Collecting the $K_i$- and $K_i^{-1}$-coefficients and using the uniqueness of step 4.1 yields the two twisted Leibniz rules of (b). [step 4.1, F2, algebra]

6.1 Grading and nilpotence. The degree computation of step 1.1 shows that for a word $w$ of degree $-\nu$, every nonzero term of $Q_w,R_w$ has degree $-\nu+\alpha_i$. These are negative words, so both coefficients vanish if $\nu-\alpha_i\notin Q_+$; otherwise they belong to $U_q^-[-(\nu-\alpha_i)]$. By linearity the same holds on every homogeneous component. Thus $e_i',e_i''$ raise actual degree by $\alpha_i$ and lower positive height by one, and their $k$-th powers vanish on degree $-\nu$ for $k>\operatorname{ht}(\nu)$. Every vector has finite homogeneous support, so both maps are locally nilpotent. [step 1.1, step 5.1, F5, algebra]

6.2 The commutation relations of (c) are the case $x=F_j$ of the Leibniz rules: $\operatorname{wt}(F_j)=-\alpha_j$, so $q_i^{\langle\operatorname{wt}(F_j),h_i\rangle}=q_i^{-a_{ij}}$ and $q_i^{-\langle\operatorname{wt}(F_j),h_i\rangle}=q_i^{a_{ij}}$, while $e_i'(F_j)=e_i''(F_j)=\delta_{ij}$ by step 5.1. Reading the resulting identities $e_i'(F_jy)=q_i^{-a_{ij}}F_je_i'(y)+\delta_{ij}y$ and $e_i''(F_jy)=q_i^{a_{ij}}F_je_i''(y)+\delta_{ij}y$ as operator identities gives (c). [step 5.1, step 5.2, algebra]

7.1 For the bar relation, apply the semilinear algebra automorphism $\psi$ of [F4] to the defining identity of $P$: since $\psi(E_i)=E_i$, $\psi(K_i)=K_i^{-1}$ and $\psi(q_i-q_i^{-1})=-(q_i-q_i^{-1})$, one gets $E_i\psi(P)-\psi(P)E_i=(K_i\psi(e_i'(P))-K_i^{-1}\psi(e_i''(P)))/(q_i-q_i^{-1})$. Comparing with the defining identity for $\psi(P)$, namely $E_i\psi(P)-\psi(P)E_i=(K_ie_i''(\psi(P))-K_i^{-1}e_i'(\psi(P)))/(q_i-q_i^{-1})$, uniqueness (step 4.1) gives $e_i''(\psi(P))=\psi(e_i'(P))$ and $e_i'(\psi(P))=\psi(e_i''(P))$. Applying the second identity to $\psi(P)$ in place of $P$ and using $\psi^2=\mathrm{id}$ gives $e_i''(P)=\psi(e_i'(\psi(P)))$, that is, $e_i''=\psi e_i'\psi$. This proves (a)–(e) and completes the definition. [step 4.1, step 5.1, step 6.1, step 5.2, step 6.2, F4, algebra] ∎

