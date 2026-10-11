---
id: lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations
kind: lemma
title: "The middle primitive polarization follows from the nonmiddle forms and a Kähler limit"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [def-axiom-of-choice, lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual, thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, «The Hodge theory of algebraic maps», arXiv:math/0306030v2 (complete arXiv PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "§5.3 Lemma 5.3.1 and Proposition 5.3.2, §5.4 Lemmas 5.4.1–5.4.4 and the proof of Theorem 2.1.7 for the middle summand, printed pp. 47–51"
    - title: "M. Goresky, «Lecture Notes on Sheaves and Perverse Sheaves» (version of June 26, 2026)"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "§23.2, printed p. 88 (classical primitive decomposition and Hodge–Riemann sign conventions)"
---

## Statement

Assume AC, let $X$ be smooth projective of complex dimension $n$, and write $H^m=H^m(X;\mathbb R)$. Let $\eta$ be a Kähler class, and let $L$ be a real $(1,1)$ class such that $L+\epsilon\eta$ is Kähler for every $\epsilon>0$. Use the centered nilpotent filtration $W$ of cup product by $L$ on total cohomology, with $L:W_a\to W_{a-2}$ and $L^a:\operatorname{Gr}^W_a\to\operatorname{Gr}^W_{-a}$ an isomorphism. Assume the following three precise hypotheses, to be furnished by the preceding stages of a projective induction:

(a) $W$ is a Hodge filtration by subspaces stable under $\eta$, and $\eta:\operatorname{Gr}^W_aH^{n-2}\to\operatorname{Gr}^W_aH^n$ is injective for every $a\le0$.

(b) For every $i\ge0$, the form
$$q_i(x,y)=\int_X\eta^{i+2}L^i x\wedge y$$
on $\operatorname{Gr}^W_iH^{n-2-2i}$ restricts nondegenerately to the kernel of $L^{i+1}$ there. This includes well-definedness of that induced form; it concerns only nonmiddle graded primitive forms.

(c) Poincaré pairing between complementary ordinary degrees annihilates $W_a\times W_b$ when $a+b<0$.

Set $D=\ker(L:H^n\to H^{n+2})$, $R=D\cap W_{-1}H^n$, and $M=\eta\ker(L:H^{n-2}\to H^n)$. Then the limit $\Lambda=\lim_{\epsilon\downarrow0}\ker(L+\epsilon\eta:H^n\to H^{n+2})$ exists as a Hodge subspace, and
$$\Lambda=D\cap\bigcap_{j\ge1}\bigl(\eta^j\ker(L^j:H^{n-2j}\to H^n)\bigr)^\perp,\qquad D=\Lambda\mathbin{\perp\oplus}M.$$
The radical of the Poincaré form on $D$ is exactly $R$. Its restriction, with the classical degree-$n$ Hodge sign, polarizes $\Lambda/(\Lambda\cap R)$. Consequently it polarizes every Hodge subspace of $D/R$ orthogonal to the image of $M$. In particular this applies to the middle double primitive subspace once that subspace's graded primitive condition identifies it with such a Hodge subspace. No polarization or semisimplicity in the middle is assumed in (a)–(c).

## Facts & Assumptions

**Given:** The smooth projective $X$ of dimension $n$, the real classes $\eta$ and $L$ with $L+\epsilon\eta$ Kähler for all $\epsilon>0$, the centered filtration $W$ with its hard Lefschetz property, hypotheses (a)–(c), and the notation $D,R,M$ and $E_j:=\eta^j\ker(L^j:H^{n-2j}\to H^n)$ of the Statement.

[F1] The classical supplier [[thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties]] gives Poincaré duality between complementary ordinary degrees, hard Lefschetz for every real Kähler class (in particular for each $L+\epsilon\eta$, $\epsilon>0$, and for $\eta$), and Hodge–Riemann positivity on the degree-$n$ primitive space of a Kähler class. Its convention is $Q_n=\epsilon(n)\int_X(-)\wedge(-)$ with $\epsilon(n)=(-1)^{n(n-1)/2}$, and $Q_n(Ca,\bar a)>0$ for $a\ne0$, where the Weil operator $C$ acts on a class of type $(p,q)$ by $i^{p-q}$. Cup product with a real $(1,1)$ class is a morphism of Hodge structures of type $(1,1)$, so its kernel in each degree is a Hodge subspace stable under the Hodge projectors; this includes the classes $L+\epsilon\eta$ and $\eta$.

[F2] The centered filtration and its finite Jordan-string description are supplied by [[lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual]]: $H^\bullet$ is the direct sum of $L$-strings $v,Lv,\dots,L^{\ell-1}v$ with $L^\ell v=0$, the weights of the vectors of such a string are $\ell-1,\ell-3,\dots,1-\ell$, $W_a$ is spanned by the vectors of weight at most $a$, and $L$ carries a vector of weight $a$ to one of weight $a-2$ or to $0$. Consequently $\ker L^j\subseteq W_{j-1}$ for every $j\ge1$. The string vectors can be chosen homogeneous in ordinary degree, since the kernels, images and complements in the construction are graded; this finite choice of bases is included in the stated AC allowance.


## Proof

**Proof technique:** an induction on the intersection index $i$ of the orthogonality condition, together with a Grassmannian limit and a limit of positive Hermitian forms.

1.1 Put $d=b_n-b_{n-2}$. By [F1] each map $L+\epsilon\eta:H^n\to H^{n+2}$ has kernel of dimension $d$, and these kernels are Hodge subspaces by [F1]. The matrix of the map is polynomial in $\epsilon$; choose a maximal minor that is nonzero on a sufficiently small punctured interval $(0,\epsilon_0)$. On that interval row elimination expresses a basis of the kernel $\Lambda_\epsilon$ by rational functions of $\epsilon$; wedge the $d$ basis vectors, clear denominators, and divide by the lowest power of $\epsilon$ occurring. The result is a nonzero polynomial exterior vector whose value at $\epsilon=0$ defines a point $\Lambda$ of the Grassmannian $\mathrm G(d,H^n)$, and $\Lambda=\lim_{\epsilon\downarrow0}\Lambda_\epsilon$: the Plücker coordinates of $\Lambda_\epsilon$ are given by that rational exterior vector, so they converge to the value at $0$. A different maximal minor gives the same punctured family of planes and hence the same limit point. Stability of a plane under a fixed endomorphism of $H^n$ is a closed condition on the Grassmannian, so $\Lambda$ is stable under every Hodge projector, being a limit of the Hodge subspaces $\Lambda_\epsilon$; hence $\Lambda$ is a real Hodge subspace. If $u_\epsilon\in\Lambda_\epsilon$ and $u_\epsilon\to u$, then $Lu_\epsilon=-\epsilon\eta u_\epsilon\to0$ by continuity, so $Lu=0$ and $\Lambda\subseteq D$. [given, F1, construct]

1.2 Put $E_j:=\eta^j\ker(L^j:H^{n-2j}\to H^n)$, so $M=E_1$. We prove by induction on $i$ that
$$M\cap E_1^\perp\cap\cdots\cap E_i^\perp=M\cap W_{-i}H^n .$$
For $i=0$ both sides equal $M$, because $\ker L\subseteq W_0$ by [F2] and $\eta$ preserves $W$ by (a), so $M\subseteq W_0$. [given, F2, base]

2.1 Induction hypothesis: fix $i\ge0$ and assume the displayed equality $M\cap E_1^\perp\cap\cdots\cap E_i^\perp=M\cap W_{-i}H^n$; we must derive the equality for $i+1$. Since $\ker L^{i+1}\subseteq W_i$ by [F2] and $\eta$ preserves $W$, one has $E_{i+1}\subseteq W_i$; condition (c) (with $a=-i-1$, $b=i$ and $a+b=-1<0$) therefore makes $M\cap W_{-i-1}H^n$ orthogonal to $E_{i+1}$, and so $M\cap W_{-i-1}H^n\subseteq M\cap E_1^\perp\cap\cdots\cap E_i^\perp\cap E_{i+1}^\perp$ by the induction hypothesis. This is one inclusion of the equality for $i+1$. [ih, F2, step 1.2]

3.1 For the converse inclusion let $\alpha=\eta\lambda\in M\cap W_{-i}H^n$ be orthogonal to $E_{i+1}$, where $L\lambda=0$. First we show $\lambda\in W_{-i}H^{n-2}$. Otherwise $\lambda\in W_0$ has a largest graded weight $a$ with $-i<a\le0$ and $[\lambda]_a\ne0$ in $\operatorname{Gr}^W_aH^{n-2}$; since $\alpha=\eta\lambda\in W_{-i}$ and $-i<a$, the graded class $[\alpha]_a=0$, while $[\alpha]_a=\eta[\lambda]_a$ because $\eta$ preserves $W$; as $a\le0$, hypothesis (a) makes $\eta:\operatorname{Gr}^W_aH^{n-2}\to\operatorname{Gr}^W_aH^n$ injective, a contradiction. Next, centered hard Lefschetz decomposes $\lambda$ along the graded pieces: because $L^i:\operatorname{Gr}^W_i\to\operatorname{Gr}^W_{-i}$ is an isomorphism, the $\operatorname{Gr}^W_{-i}$-class of $\lambda$ lifts to a class in $\operatorname{Gr}^W_i$ with representative $\lambda_1\in W_iH^{n-2-2i}$, and $\tau_1:=\lambda-L^i\lambda_1\in W_{-i-1}H^{n-2}$. Repeating with $\tau_1$ and $L^{i+1}$, then with the successive remainders and $L^{i+2},L^{i+3},\dots$, and using that $W$ is a finite filtration, we obtain $\lambda=L^i\lambda'$ with $\lambda'\in W_iH^{n-2-2i}$; indeed at stage $t$ the correction $L^{t-1}\lambda_t$ lies in $W_{i-(t-1)}H^{n-2-2i}$, so all corrections lie in $W_i$. Then $L^{i+1}\lambda'=L\lambda=0$. Every class of $\ker(L^{i+1}:\operatorname{Gr}^W_iH^{n-2-2i}\to\operatorname{Gr}^W_{i-2i-2})$ has an actual lift in $W_iH^{n-2-2i}$ annihilated by $L^{i+1}$: for any lift the error $L^{i+1}\lambda''$ lies in $W_{-i-3}H^n$, and the homogeneous-string description of [F2] shows $L^{i+1}:W_{i-1}H^{n-2-2i}\to W_{-i-3}H^n$ is surjective, since on each string it carries the vector of weight $b+2i+2$ onto the vector of weight $b$ for every weight $b\le-i-3$; subtracting a preimage of the error from $\lambda''$ gives the required lift. Pairing the orthogonality of $\alpha$ to $E_{i+1}$ with these lifts $\beta'$ shows $0=\int_X\alpha\wedge\eta^{i+1}\beta'=\int_X\eta^{i+2}L^i\lambda'\wedge\beta'=q_i([\lambda'],[\beta'])$ for every class $[\beta']$ in $\ker(L^{i+1}:\operatorname{Gr}^W_iH^{n-2-2i}\to\operatorname{Gr}^W_{i-2i-2})$. Hypothesis (b) now forces $[\lambda']=0$, that is, $\lambda'\in W_{i-1}H^{n-2-2i}$, and since $\eta$ preserves $W$ while $L$ shifts it by $-2$ one gets $\alpha=\eta L^i\lambda'\in W_{-i-1}H^n$. This proves the converse inclusion and completes the induction, so for $i$ beyond the finite filtration, $M\cap E_1^\perp\cap E_2^\perp\cap\cdots=0$. [given, F2, step 2.1, algebra]

4.1 Let $u_\epsilon\in\Lambda_\epsilon$. Commutation of the two even-degree classes $\eta,L$ gives $\eta^j u_\epsilon=(-\epsilon^{-1})^jL^ju_\epsilon$, hence $\int_Xu_\epsilon\wedge\eta^jz=(-\epsilon^{-1})^j\int_Xu_\epsilon\wedge L^jz=0$ for every $z$ with $L^jz=0$. Passing to the limit, $\Lambda\subseteq E_j^\perp$ for every $j\ge1$. By step 3.1, $\Lambda\cap M=0$. The rank of $L:H^n\to H^{n+2}$ equals the rank of $L:H^{n-2}\to H^n$, because the two maps are adjoint under the Poincaré pairings of [F1]; moreover $\eta:H^{n-2}\to H^n$ is injective by [F1]. Therefore $\dim D=b_n-\operatorname{rk}\bigl(L:H^n\to H^{n+2}\bigr)=\bigl(b_n-b_{n-2}\bigr)+\bigl(b_{n-2}-\operatorname{rk}\bigl(L:H^{n-2}\to H^n\bigr)\bigr)=\dim\Lambda+\dim M$, using $\dim\Lambda=d=b_n-b_{n-2}$ from step 1.1. Since $\Lambda\oplus M\subseteq D$ (both summands lie in $D$: $\Lambda$ by step 1.1 and $M$ because $L\eta=\eta L$ kills $\eta\ker L$) and the dimensions agree, $D=\Lambda\oplus M$; and because $\Lambda\subseteq E_1^\perp$ while $M=E_1$, this sum is orthogonal. Moreover $\Lambda\subseteq D\cap\bigcap_jE_j^\perp$ has dimension $\dim D-\dim M=\dim\Lambda$ and $M\cap\bigcap_jE_j^\perp=0$, so the inclusion is an equality, giving the asserted characterization of $\Lambda$. [F1, step 1.1, step 3.1, algebra]

5.1 Poincaré duality identifies the orthogonal complement of $D$ inside $H^n$ with the image of $L:H^{n-2}\to H^n$, by the adjointness used in step 4.1. On a homogeneous string the kernel of $L$ is the last vector $L^{\ell-1}v$, of weight $1-\ell$; this vector lies in the image of $L$ precisely when $\ell>1$, equivalently when its weight is negative, so $D\cap\operatorname{im}L=D\cap W_{-1}H^n=R$ and by definition $\operatorname{rad}(D)=D\cap D^\perp=D\cap\operatorname{im}L=R$. An orthogonal decomposition of a finite-dimensional space with radical $R$ descends to an orthogonal decomposition of the nondegenerate quotient: if $x=x_\Lambda+x_M\in R$ is paired with each summand separately, orthogonality of the decomposition and $x\in\operatorname{rad}$ show both components are radical, so $R=(R\cap\Lambda)\oplus(R\cap M)$ and the induced form on each quotient summand $\Lambda/(\Lambda\cap R)$ and $M/(M\cap R)$ is nondegenerate. [F1, F2, step 4.1, algebra]

6.1 The classical Hermitian form $Q_n(Ca,\bar a)$ of [F1] is positive on every $\Lambda_\epsilon$, because $\Lambda_\epsilon$ is the degree-$n$ primitive space of the Kähler class $L+\epsilon\eta$. For $a\in\Lambda$ choose $a_\epsilon\in\Lambda_\epsilon$ with $a_\epsilon\to a$; by continuity $Q_n(Ca,\bar a)=\lim_{\epsilon\downarrow0}Q_n(Ca_\epsilon,\bar a_\epsilon)\ge0$, so the form is semipositive on $\Lambda$. The Hodge stability of $\Lambda$ and of $R=D\cap W_{-1}$, together with $\eta$- and $L$-stability of $W$, makes $\Lambda/(\Lambda\cap R)$ a Hodge quotient. Step 5.1 gives nondegeneracy of the induced form there, and a nondegenerate semipositive Hermitian form is positive definite. The Hodge–Riemann bilinear relations pass from the ambient degree-$n$ cohomology of [F1], so this restriction is a polarization with exactly the sign $\epsilon(n)$ of [F1]. In $D/R$ the orthogonal complement of the image of $M$ is the image of $\Lambda$, since the decomposition of step 5.1 is orthogonal. Every Hodge subspace of that complement inherits the positive definite form, hence is polarized; this proves the final assertion, and in particular the middle double primitive subspace is polarized as soon as its graded primitive condition identifies it with such a Hodge subspace. The degenerate cases (empty or zero graded pieces, $d=0$, and the trivial string of length one with weight $0$) are covered by the same formulas, which then reduce to identities between zero-dimensional spaces. [F1, step 1.1, step 4.1, step 5.1, discharge-induction] ∎
