---
id: lem-divided-power-and-toral-quantum-binomial-reordering-identities
kind: lemma
title: "Divided-power multiplication, toral binomials and the $E_i^{(a)}F_i^{(b)}$ reordering identity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-drinfeld-jimbo-quantized-enveloping-algebra, def-lusztig-divided-power-integral-form, def-positive-negative-and-toral-quantum-subalgebras, def-quantum-integers-factorials-and-divided-powers-at-q-i, lem-quantum-pascal-recurrence-and-gaussian-integrality, thm-quantized-sl-two-string-formulas]
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Math 263C Quantum Groups (Stanford, 2022), lecture slides 'Lusztig's quantum group. Tilting modules. The Fusion Category in Action'"
      url: "http://sporadic.stanford.edu/quantum/lecture16.pdf"
      locator: "Slides 'Certain important elements': the reduction recursion $\\begin{bmatrix}K_i;c\\\\ t\\end{bmatrix}-v^{t}\\begin{bmatrix}K_i;c+1\\\\ t\\end{bmatrix}=K_i^{-1}v^{-(c+1)}\\begin{bmatrix}K_i;c\\\\ t-1\\end{bmatrix}$ and the identity $E_i^{(r)}F_i^{(r)}=\\sum_{t=0}^{r}F_i^{(r-t)}\\begin{bmatrix}K_i;2t-2r\\\\ t\\end{bmatrix}E_i^{(r-t)}$, used here in the general form with index $2t-a-b$ verified in the proof."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 23, §23.1.3, printed p. 186, identity (6) (the divided-power reordering with toral binomial coefficients in the modified algebra ${}_A\\dot U$) and the commutation identities of 23.1.3; Ch. 3, §3.1.9, printed pp. 24-25."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed pp. 5-6, displays (1.5)-(1.6): the divided powers and the Drinfeld-Jimbo commutation relations underlying the rank-one computation."
---

## Statement

Let $i\in I$ and let $T_{i,c,t}$ be the toral quantum binomials of
[[def-lusztig-divided-power-integral-form]]
($i\in I$, $c\in\mathbb Z$, $t\ge0$, $T_{i,c,0}=1$), inside the Drinfeld–Jimbo
algebra $U_q(\mathfrak g)$ of [[def-drinfeld-jimbo-quantized-enveloping-algebra]]
with $U_A$ and its parts $U_A^-,U_A^0,U_A^+$ as in that definition. Write
$E=E_i$, $F=F_i$, $E^{(a)}=E_i^{(a)}$, $F^{(b)}=F_i^{(b)}$ for the divided
powers of [[def-quantum-integers-factorials-and-divided-powers-at-q-i]] and put
$q=q_i$ inside the displayed formulas.

(i) **Divided-power multiplication.** For all $a,b\ge0$,
$$E^{(a)}E^{(b)}=\binom{a+b}{a}_iE^{(a+b)},\qquad F^{(a)}F^{(b)}=\binom{a+b}{a}_iF^{(a+b)}.$$

(ii) **Toral recursion and commutation.** For $t\ge1$,
$$T_{i,c,t}=\frac{K_iq_i^{\,c-t+1}-K_i^{-1}q_i^{\,-c+t-1}}{q_i^{\,t}-q_i^{\,-t}}\,T_{i,c,t-1}.$$
Each $T_{i,c,t}$ is a Laurent polynomial in $K_i^{\pm1}$ with coefficients in
$\mathbb Q(q)$; the toral elements commute with one another and with all $K_h$.
For all $i,j$ and all $m\in\mathbb Z$ one has
$K_i^{\,m}T_{j,c,t}=T_{j,c,t}K_i^{\,m}$ if $i\ne j$, while
$E_iT_{i,c,t}=T_{i,c-2,t}E_i$, $E_jT_{i,c,t}=T_{i,c-a_{ij},t}E_j$,
$F_iT_{i,c,t}=T_{i,c+2,t}F_i$, $F_jT_{i,c,t}=T_{i,c+a_{ij},t}F_j$ for all $j$.
In particular $E_iT_{i,c,t}\in U_A^0E_i$, $F_iT_{i,c,t}\in U_A^0F_i$,
$T_{i,c,t}E_i=E_iT_{i,c+2,t}\in E_iU_A^0$ and
$T_{i,c,t}F_i=F_iT_{i,c-2,t}\in F_iU_A^0$: the toral factor can be moved to the
middle at the cost of a shift of the binomial index.

(iii) **Reordering identity.** For all $a,b\ge0$,
$$E_i^{(a)}F_i^{(b)}=\sum_{t=0}^{\min(a,b)}F_i^{(b-t)}\,T_{i,\,2t-a-b,\,t}\,E_i^{(a-t)},$$
with every coefficient a toral quantum binomial in $U_A^0$. In particular
$E_iF_i-F_iE_i=T_{i,0,1}$ and
$E_i^{(a)}F_i^{(a)}=\sum_{t=0}^{a}F_i^{(a-t)}T_{i,2t-2a,t}E_i^{(a-t)}$.
For $i\ne j$, $E_i^{(a)}$ and $F_j^{(b)}$ commute; the same-half divided powers
$E_i^{(a)},E_j^{(b)}$ (and likewise $F_i^{(a)},F_j^{(b)}$) commute whenever
$a_{ij}=0$, and for $a_{ij}\ne0$ no commutation is asserted.

(iv) **Triangular spanning.** Every element of $U_A$ is an $A$-linear
combination of products $b_-u\,b_+$ with $b_-\in U_A^-$, $u\in U_A^0$ and
$b_+\in U_A^+$; equivalently $U_A=U_A^-U_A^0U_A^+$ as an $A$-module. No
independence of the spanning family is asserted.

## Facts & Assumptions

**Given:** The Cartan datum, the algebra $U_q(\mathfrak g)$, the toral
binomials $T_{i,c,t}$, and the divided powers $x^{(m)}=x^m/[m]_i!$.

[F1] $x^{(a)}x^{(b)}=\frac{x^{a+b}}{[a]_i![b]_i!}=\binom{a+b}{a}_ix^{(a+b)}$, because
$\binom{a+b}{a}_i=\frac{[a+b]_i!}{[a]_i![b]_i!}$ and $[m]_i!\ne0$ for all $m$
([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F2] The defining relations: $E_iF_i-F_iE_i=(K_i-K_i^{-1})/(q_i-q_i^{-1})$;
$E_iF_j=F_jE_i$ for $i\ne j$;
$E_iE_j-E_jE_i=0=F_iF_j-F_jF_i$ when $a_{ij}=0$; and the general same-half
relations are the quantum Serre relations
([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F3] Toral conjugation and shifts: $K_iE_jK_i^{-1}=q_i^{\,a_{ij}}E_j$ and
$K_iF_jK_i^{-1}=q_i^{\,-a_{ij}}F_j$, so for every Laurent polynomial
$f(K_i^{\pm1})$ one has $E_jf(K_i^{\pm1})=f(q_i^{\,-a_{ij}}K_i^{\pm1})E_j$ and
$F_jf(K_i^{\pm1})=f(q_i^{\,a_{ij}}K_i^{\pm1})F_j$
([[def-positive-negative-and-toral-quantum-subalgebras]]).

[F4] The published rank-one formula: for $b\ge1$,
$E_iF_i^{(b)}=F_i^{(b)}E_i+F_i^{(b-1)}T_{i,1-b,1}$, equivalently
$E_iF_i^{(b)}=F_i^{(b)}E_i+F_i^{(b-1)}\frac{1}{q_i^{b}-q_i^{-b}}\sum_{s=0}^{b-1}(q_i^{-2s}K_i-q_i^{2s}K_i^{-1})$,
and for $b=0$ one has $E_iF_i^{(0)}=E_i=F_i^{(0)}E_i$
([[thm-quantized-sl-two-string-formulas]] (ii) and
[[def-lusztig-divided-power-integral-form]] for the identification of
the coefficient with $T_{i,1-b,1}$).

[F5] The identity $[m+n]_i=q_i^{\,-n}[m]_i+q_i^{\,m}[n]_i=q_i^{\,n}[m]_i+q_i^{\,-m}[n]_i$
for all integers $m,n$ ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]],
[[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F6] $U_A$ is the $A$-algebra generated by the $E_i^{(r)},F_i^{(r)},K_h^{\pm1},T_{i,c,t}$;
its elements are finite $A$-linear combinations of finite products of these
generators, and $E_i^{(r)}\in U_A^+[r\alpha_i]$, $F_i^{(r)}\in U_A^-[ -r\alpha_i]$,
$K_h^{\pm1},T_{i,c,t}\in U_A^0[0]$
([[def-lusztig-divided-power-integral-form]]).



## Verification

**Proof technique:** the divided-power identities are factorial arithmetic; the
toral identities are computed by conjugating $K_i$ through $E_j,F_j$; the
reordering identity is an induction on $a$ whose induction step is the toral
product identity proved in step 1.2; the triangular spanning is a terminating
rewriting using the reordering identity.

1.1 Part (i): by [F1], $E^{(a)}E^{(b)}=E^{a+b}/([a]_i![b]_i!)=\binom{a+b}{a}_iE^{a+b}/[a+b]_i!=\binom{a+b}{a}_iE^{(a+b)}$ and likewise for $F$. [given, F1, algebra]

1.2 Auxiliary product identity. Fix integers $a,b$ and $t\ge1$, put $c:=2t-a-b-2$ and let $G(x,t):=\prod_{s=1}^{t}(K_iq_i^{x-s+1}-K_i^{-1}q_i^{-x+s-1})$, so that $T_{i,x,t}=G(x,t)/D(t)$ with $D(t)=\prod_{s=1}^{t}(q_i^{s}-q_i^{-s})$; we prove $[a+1]_iT_{i,c+1,t}=[a-t+1]_iT_{i,c,t}+T_{i,t-b,1}T_{i,c,t-1}$. Factoring $G(x,t)=q_i^{-t(t-1)/2}\prod_{s=1}^{t}(K_iq_i^{x}-K_i^{-1}q_i^{2s-2-x})$ and putting $u:=K_iq_i^{c+1}$, so that $K_iq_i^{x}=uq_i^{x-c-1}$ and $K_i^{-1}q_i^{y}=u^{-1}q_i^{-y-c-1}$, the relevant factors become $G(c+1,t)=q_i^{-t(t-1)/2}(u-u^{-1})W$, $G(c,t)=q_i^{-t(t-1)/2}q_i^{-t}W(u-q_i^{2t}u^{-1})$, $G(c,t-1)=q_i^{-(t-1)(t-2)/2}q_i^{-(t-1)}W$ and $G(t-b,1)=uq_i^{a-t+1}-u^{-1}q_i^{-a+t-1}$, where $W:=\prod_{s=1}^{t-1}(u-q_i^{2s}u^{-1})$. Multiplying the target identity by $D(t)=D(t-1)(q_i^{t}-q_i^{-t})$, using $D(t)/(D(t-1))=[t]_i(q_i-q_i^{-1})$ and $q_i^{t}-q_i^{-t}=[t]_i(q_i-q_i^{-1})$, and cancelling the common factor $q_i^{-t(t-1)/2}W$, the two sides become $[a+1]_i(u-u^{-1})$ and $[a-t+1]_iq_i^{-t}(u-q_i^{2t}u^{-1})+[t]_i(uq_i^{a-t+1}-u^{-1}q_i^{-a+t-1})$; comparing the coefficients of $u$ and $u^{-1}$ gives the identities $[a+1]_i=q_i^{-t}[a-t+1]_i+q_i^{a-t+1}[t]_i$ and $[a+1]_i=q_i^{t}[a-t+1]_i+q_i^{-a+t-1}[t]_i$, both instances of [F5] with $(m,n)=(a-t+1,t)$. [given, F4, F5, algebra]

2.1 Part (ii): unrolling the product definition, $T_{i,c,t}=\prod_{s=1}^{t}\frac{K_iq_i^{c-s+1}-K_i^{-1}q_i^{-c+s-1}}{q_i^{s}-q_i^{-s}}$ equals the $s=t$ factor times $T_{i,c,t-1}$; since both are Laurent polynomials in $K_i^{\pm1}$ ([[def-lusztig-divided-power-integral-form]], Verification) they commute and the recursion follows. The commutativity statements are those of that step. For the shifts, [F3] gives $E_jf(K_i^{\pm1})=f(q_i^{-a_{ij}}K_i^{\pm1})E_j$ and $F_jf(K_i^{\pm1})=f(q_i^{a_{ij}}K_i^{\pm1})F_j$; applying this to the $t$-fold product $f=T_{i,c,t}$, the first factor of $T_{i,c,t}$ is multiplied by $q_i^{-a_{ij}}$ (first term) and $q_i^{a_{ij}}$ (second term), which is the same as replacing $c$ by $c-a_{ij}$; hence $E_jT_{i,c,t}=T_{i,c-a_{ij},t}E_j$ (for $j=i$, $a_{ii}=2$), and likewise $F_jT_{i,c,t}=T_{i,c+a_{ij},t}F_j$. Rewriting gives $T_{i,c,t}E_j=E_jT_{i,c+a_{ij},t}$ and $T_{i,c,t}F_j=F_jT_{i,c-a_{ij},t}$. [step 1.1, F3, algebra]
$$[a+1]_i\,T_{i,c+1,t}=[a-t+1]_i\,T_{i,c,t}+T_{i,t-b,1}\,T_{i,c,t-1}.$$
Factoring $G(x,t)=q_i^{-t(t-1)/2}\prod_{s=1}^{t}(K_iq_i^{x}-K_i^{-1}q_i^{\,2s-2-x})$, and putting $u:=K_iq_i^{\,c+1}$ (so that $K_iq_i^{x}=uq_i^{\,x-c-1}$ and $K_i^{-1}q_i^{\,y}=u^{-1}q_i^{\,-y-c-1}$), the three factors become
$G(c+1,t)=q_i^{-t(t-1)/2}\prod_{s=1}^{t}(u-q_i^{\,2s-2}u^{-1})=q_i^{-t(t-1)/2}(u-u^{-1})W$,
$G(c,t)=q_i^{-t(t-1)/2}q_i^{-t}\prod_{s=1}^{t}(u-q_i^{\,2s}u^{-1})=q_i^{-t(t-1)/2}q_i^{-t}W(u-q_i^{\,2t}u^{-1})$,
$G(c,t-1)=q_i^{-(t-1)(t-2)/2}q_i^{-(t-1)}W$ and $G(t-b,1)=uq_i^{\,a-t+1}-u^{-1}q_i^{\,-a+t-1}$, where $W:=\prod_{s=1}^{t-1}(u-q_i^{\,2s}u^{-1})$. Multiplying the target identity by $D(t)=D(t-1)(q_i^{t}-q_i^{-t})$ and using $D(t)/D(t-1)=[t]_i(q_i-q_i^{-1})$ together with $q_i^{t}-q_i^{-t}=[t]_i(q_i-q_i^{-1})$, the two sides become, after cancellation of the common factor $q_i^{-t(t-1)/2}W$,
$[a+1]_i(u-u^{-1})$ on the left and $[a-t+1]_iq_i^{-t}(u-q_i^{2t}u^{-1})+[t]_i(uq_i^{\,a-t+1}-u^{-1}q_i^{\,-a+t-1})$ on the right; comparing coefficients of $u$ and $u^{-1}$ this is exactly the pair of identities $[a+1]_i=q_i^{-t}[a-t+1]_i+q_i^{\,a-t+1}[t]_i$ and $[a+1]_i=q_i^{\,t}[a-t+1]_i+q_i^{\,-a+t-1}[t]_i$, both instances of [F5] with $(m,n)=(a-t+1,t)$. This proves the auxiliary identity. [given, F4, F5, algebra]

3.1 Part (iii), the reordering identity, by induction on $a$ (for fixed $b$). For $a=0$ the assertion is $F^{(b)}=F^{(b)}T_{i,-b,0}E^{(0)}=F^{(b)}$ because $T_{i,x,0}=1$. Assume it for $a$; then $E^{(a+1)}F^{(b)}=[a+1]_i^{-1}E_iE^{(a)}F^{(b)}=[a+1]_i^{-1}\sum_{t=0}^{\min(a,b)}E_iF^{(b-t)}T_{i,2t-a-b,t}E^{(a-t)}$. For $b-t\ge1$, [F4] gives $E_iF^{(u)}=F^{(u)}E_i+F^{(u-1)}T_{i,1-u,1}$ with $u=b-t$, and for $u=0$ one has $E_iF^{(0)}=F^{(0)}E_i$ with the correction zero; then [F4]'s shifts of step 2.1 give $E_iT_{i,c,t}=T_{i,c-2,t}E_i$ and [F1] gives $E_iE^{(a-t)}=[a-t+1]_iE^{(a-t+1)}$. Summing, the coefficient of $F^{(b-t)}T_{i,2t-a-b-2,t}E^{(a-t+1)}$ is $[a+1]_i^{-1}[a-t+1]_i$ for $0\le t\le\min(a,b)$, and the coefficient of $F^{(b-t-1)}T_{i,t-b,1}T_{i,2t-a-b,t}E^{(a-t)}$ is $[a+1]_i^{-1}$; rewriting the second family with the index $t+1$ and multiplying each coefficient by $[a+1]_i$, the required equality of coefficients is exactly the auxiliary identity of step 1.2 with the substitutions $t\mapsto t$, $c=2t-a-b-2$ (for the target index $t$) and, for the target index $t+1$, the same identity at $t+1$; the boundary terms $t=0$ and $t=\min(a+1,b)$ use $[0]_i=0$ and the convention $F^{(-1)}=0$ for out-of-range divided powers, so they match the target sum over $0\le t\le\min(a+1,b)$. This proves (iii) for $a+1$, hence for all $a$, and the two displayed special cases follow by setting $a=b=1$ (giving $E_iF_i-F_iE_i=T_{i,0,1}$) and $a=b$. [step 2.1, step 1.2, F1, F4, algebra]

3.2 The remaining clauses of (iii): for $i\ne j$ the relation $E_iF_j=F_jE_i$ of [F2] gives $E_i^{(a)}F_j^{(b)}=F_j^{(b)}E_i^{(a)}$ after dividing by the nonzero factorials [F1]; if $a_{ij}=0$ then $E_iE_j=E_jE_i$ and $F_iF_j=F_jF_i$ by [F2], hence $E_i^{(a)}E_j^{(b)}=E_j^{(b)}E_i^{(a)}$ and $F_i^{(a)}F_j^{(b)}=F_j^{(b)}F_i^{(a)}$ for all $a,b$. No commutation is asserted when $a_{ij}\ne0$, where the quantum Serre relation is the only comparison used later. [step 2.1, F2, algebra]

4.1 Part (iv): every element of $U_A$ is a finite $A$-linear combination of finite products of generators by [F6]. Move every $K_h^{\pm1}$ and every $T_{j,c,t}$ to the middle: $K_h$ commutes with the toral generators and crosses $E_j,F_j$ at the cost of the scalar $q^{\mp\langle\alpha_j,h\rangle}\in A$ by [F3]; $T_{j,c,t}$ crosses $E_i,F_i$ at the cost of an index shift by step 2.1. These operations do not change the relative order of the positive and negative generators, so after finitely many of them we obtain a finite sum of terms $b_-u\,b_+$ with $u\in U_A^0$ and $b_\pm$ products of divided powers of a single sign, except that a product may still contain an $E$-factor to the left of an $F$-factor. Define the measure of such a product as the pair (total height $h$ = sum of the exponents of all its divided powers, number $\iota$ of ordered pairs (positive factor, negative factor) in which the positive factor precedes the negative one), ordered lexicographically. The leftmost inversion is of the form $\cdots E_i^{(a)}\bigl(\text{toral}\bigr)F_i^{(b)}\cdots$ for a fixed $i$ with $a,b\ge1$ (the toral factor is moved aside first); applying step 3.1 rewrites it as $\sum_{t=0}^{\min(a,b)}F_i^{(b-t)}T_{i,2t-a-b,t}E_i^{(a-t)}$: the terms with $t\ge1$ strictly decrease $h$, while the $t=0$ term $F_i^{(b)}T_{i,-a-b,0}E_i^{(a)}$ keeps $h$ but strictly decreases $\iota$ (that inversion disappears and no other inversion is created, as toral factors are ignored by $\iota$). By induction on $(h,\iota)$ the rewriting terminates, producing the asserted span by triangular products in $U_A^-U_A^0U_A^+$. [step 2.1, step 3.1, F3, F6, construct] ∎
