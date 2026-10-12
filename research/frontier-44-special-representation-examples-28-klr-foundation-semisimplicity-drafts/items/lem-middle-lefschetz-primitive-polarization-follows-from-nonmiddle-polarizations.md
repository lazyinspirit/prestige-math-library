---
id: lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations
kind: lemma
title: "The middle primitive polarization follows from the nonmiddle forms and a Kähler limit"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties
  - lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "de Cataldo and Migliorini, The Hodge theory of algebraic maps, full section 5.4"
      url: https://arxiv.org/pdf/math/0306030
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

**Given:** $X,\eta,L,W$, hypotheses (a)–(c) and the notation in the Statement.

[F1] The classical supplier [[thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties]] gives Poincaré duality, hard Lefschetz for each $L+\epsilon\eta$ and for $\eta$, and Hodge–Riemann on its degree-$n$ primitive space. Its convention is $Q_n=\epsilon(n)\int_X(-)\wedge(-)$, $\epsilon(n)=(-1)^{n(n-1)/2}$, and positive Hermitian form $Q_n(Ca,\bar a)$ with the Weil operator on the first argument.

[F2] The centered filtration and its finite Jordan-string description are supplied by [[lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual]]. In a homogeneous string $v,Lv,\ldots,L^{\ell-1}v$, the weights are $\ell-1,\ell-3,\ldots,1-\ell$. Thus $\ker L^j\subset W_{j-1}$. The strings can be chosen homogeneous in ordinary degree: the kernels, images and quotient complements in their elementary construction are graded, so choose homogeneous complements and preimages. This use of finite bases is included in the stated AC allowance.

## Proof

1.1 Let $d=b_n-b_{n-2}$. Hard Lefschetz makes $\Lambda_\epsilon=\ker(L+\epsilon\eta:H^n\to H^{n+2})$ have dimension $d$. The matrix of this map is polynomial in $\epsilon$. Choose a maximal minor nonzero on a sufficiently small punctured interval. Row elimination then expresses its kernel by a rational basis on that interval. Wedge that basis and clear denominators. Removing the common lowest power of $\epsilon$ leaves a nonzero limiting exterior vector, which defines a unique limiting $d$-plane $\Lambda$ in the closed Grassmannian. A different minor gives the same punctured family and hence the same limit. The kernels are real Hodge subspaces because the cup map has type $(1,1)$; stability under each Hodge projector is a closed condition on the Grassmannian, so the limit is also Hodge. For $u_\epsilon\to u$ one has $Lu_\epsilon=-\epsilon\eta u_\epsilon$, whence $\Lambda\subset D$. [given, F1, construct]

1.2 Put $E_j=\eta^j\ker(L^j:H^{n-2j}\to H^n)$. We prove by induction that $M\cap E_1^\perp\cap\cdots\cap E_i^\perp=M\cap W_{-i}H^n$. For $i=0$, $\ker L\subset W_0$ and $\eta$ preserves $W$, so both sides are $M$. Suppose the equality holds for $i$. Since $E_{i+1}\subset W_iH^n$ by [F2], condition (c) makes $M\cap W_{-i-1}$ orthogonal to $E_{i+1}$, proving one inclusion in the next equality. [given, F2, base, ih]

2.1 For the converse let $\alpha=\eta\lambda\in M\cap W_{-i}H^n$ be orthogonal to $E_{i+1}$, where $L\lambda=0$. First $\lambda\in W_{-i}H^{n-2}$. Otherwise its largest nonzero graded weight $a$ has $-i<a\le0$, and $\eta\lambda\in W_{-i}$ forces its graded class into the kernel of the injective map in (a), a contradiction. Centered hard Lefschetz expresses $\lambda=L^i\lambda_1+\tau_1$ with $\lambda_1\in W_iH^{n-2-2i}$ and $\tau_1\in W_{-i-1}H^{n-2}$. Repeat on $\tau_1$ using $L^{i+1}$, then on the remainder using $L^{i+2}$, and so on. Finite length gives $\lambda=L^i\lambda'$ with $\lambda'\in W_iH^{n-2-2i}$; indeed the successive corrections to $\lambda'$ are $L^{t-1}\lambda_t\in W_{i-(t-1)}$. Also $L^{i+1}\lambda'=0$. Every class of $\ker L^{i+1}$ in $\operatorname{Gr}^W_iH^{n-2-2i}$ has an actual lift annihilated by $L^{i+1}$ in $W_i$: for any lift its error lies in $W_{-i-3}$, and the homogeneous strings in [F2] show $L^{i+1}:W_{i-1}H^{n-2-2i}\twoheadrightarrow W_{-i-3}H^n$. Subtract a preimage of that error. Pairing $\alpha$ with $\eta^{i+1}\beta'$ for all these lifts gives $0=\int_X\eta^{i+2}L^i\lambda'\wedge\beta'=q_i([\lambda'],[\beta'])$. Hypothesis (b) makes $[\lambda']=0$, so $\alpha=\eta L^i\lambda'\in W_{-i-1}H^n$. This completes the induction. Taking $i$ beyond the finite filtration gives $M\cap\bigcap_jE_j^\perp=0$. [given, F2, step 1.2, discharge-induction]

3.1 For $u_\epsilon\in\Lambda_\epsilon$, commutation of the two even-degree cup classes gives $\eta^ju_\epsilon=(-\epsilon^{-1})^jL^ju_\epsilon$. Thus $\int_Xu_\epsilon\wedge\eta^jz=(-\epsilon^{-1})^j\int_Xu_\epsilon\wedge L^jz=0$ for $L^jz=0$, and $\Lambda\subset\bigcap_jE_j^\perp$. Step 2.1 makes $\Lambda\cap M=0$. The rank of $L:H^n\to H^{n+2}$ equals the rank of $L:H^{n-2}\to H^n$, since the two maps are adjoint under Poincaré duality. Moreover $\eta:H^{n-2}\to H^n$ is injective by classical hard Lefschetz. Therefore $\dim D=\dim\Lambda+\dim M$. This proves $D=\Lambda\oplus M$ and the asserted exact characterization of $\Lambda$. Since $M=E_1$, the sum is orthogonal. [F1, step 1.1, step 2.1, algebra]

4.1 Poincaré duality identifies $D^\perp$ inside $H^n$ with $\operatorname{im}(L:H^{n-2}\to H^n)$. On a homogeneous Jordan string the kernel of $L$ is its last vector, of weight $1-\ell$; this vector lies in the image of $L$ precisely when $\ell>1$, equivalently its weight is negative. Hence $\operatorname{rad}(D)=D\cap\operatorname{im}L=D\cap W_{-1}H^n=R$. An orthogonal decomposition of a finite space with radical $R$ descends to an orthogonal decomposition of the nondegenerate quotient: if $x=x_\Lambda+x_M$ is in $R$, pair with each summand separately to see that both components are radical. Thus $R=(R\cap\Lambda)\oplus(R\cap M)$ and the induced form on each quotient summand is nondegenerate. [F1, F2, step 3.1, algebra]

5.1 The classical Hermitian form $Q_n(Ca,\bar a)$ is positive on every $\Lambda_\epsilon$, since these are its degree-$n$ primitive spaces. Choose convergent representatives in those planes for any vector of $\Lambda$; its value is the limit of nonnegative values, so the form is semipositive on $\Lambda$. The Hodge stability of $\Lambda$ and $R$ makes the quotient Hodge. Step 4.1 gives nondegeneracy on $\Lambda/(\Lambda\cap R)$; a nondegenerate semipositive Hermitian form is positive definite, by diagonalization or its Cauchy–Schwarz inequality. The Hodge bilinear relations pass from the ambient degree-$n$ cohomology, so this is a polarization with exactly the sign in [F1]. In $D/R$, the orthogonal complement of the image of $M$ is the image of $\Lambda$. Every Hodge subspace of that complement inherits the positive form and is therefore polarized, proving the final assertion. [F1, step 1.1, step 3.1, step 4.1, discharge-induction] ∎

## Proof boundary

This is a finite-dimensional conditional implication with explicit hypotheses (a)–(c); its proof establishes the endpoint limit, the intersection induction, the radical and quotient positivity. To use it for a projective map, the preceding induction must actually furnish those hypotheses and identify the middle double primitive Hodge subspace with the orthogonal complement specified here. None of those geometric inputs is declared proved merely by this lemma. No decomposition theorem or middle primitive positivity is used in its assumptions.
