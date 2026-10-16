---
id: thm-qa-23-qsp-phase-factorization
kind: theorem
title: Constructive factorization of an admissible QSP polynomial pair
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qa-23-qsp-signal-sequence
  - def-qa-23-qsp-admissible-polynomial-pair
  - lem-qa-23-phase-sequence-unitarity
  - lem-qa-23-hermitian-signal-convention-conversion
  - thm-polar-form-with-unique-principal-argument
  - thm-eulers-formula
  - thm-complex-numbers-form-a-field
  - def-polynomial-ring-over-a-commutative-ring
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-polynomial-division-algorithm-over-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
proof_strategy: induction
axiom_use: "None; the proof is finite induction and pointwise polynomial algebra."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 3 and proof, PDF pp. 7–10."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 29 §29.2, Lemma 29.1 and complete induction proof, PDF pp. 144–146."
---

## Statement

For every integer $d\ge0$, a pair $P,Q\in\mathbb C[x]$ is QSP-admissible of degree bound $d$ if and only if there is a real phase list $\Phi=(\phi_0,\ldots,\phi_d)$ such that
$$U_\Phi(x)=\begin{pmatrix}P(x)&s(x)Q(x)\\(-1)^{d+1}s(x)Q^*(x)&(-1)^dP^*(x)\end{pmatrix}\quad (x\in[-1,1]).$$
The converse is constructive: a leading-coefficient phase peel reduces the degree at each nonconstant stage. The polynomial identity, determinant signs, product order, and phase convention are exactly those in [[def-qa-23-qsp-admissible-polynomial-pair]] and [[def-qa-23-qsp-signal-sequence]].

## Facts & Assumptions

**Given:** An integer $d\ge0$ and polynomials $P,Q\in\mathbb C[x]$.

[F1] [[def-qa-23-qsp-admissible-polynomial-pair]]: the degree bounds and parities are $d$ and $d-1$, and $PP^*+(1-x^2)QQ^*=1$ as a polynomial identity.

[F2] [[lem-qa-23-phase-sequence-unitarity]]: a length-$d$ reflection sequence has the displayed determinant-$(−1)^d$ matrix form and its upper entries are an admissible pair.

[F3] [[lem-qa-23-hermitian-signal-convention-conversion]]: for $d\ge1$, the reflection sequence is $i^d$ times the explicitly phase-shifted SU(2) sequence; the map between phase lists is invertible and the scalar is retained under control.

[F4] [[thm-polar-form-with-unique-principal-argument]]: every nonzero complex number has polar form $r(\cos\theta+i\sin\theta)$ with $r>0$.

[F5] [[thm-eulers-formula]]: $e^{i\theta}=\cos\theta+i\sin\theta$ for real $\theta$.

[F6] [[thm-polynomial-degree-of-a-product-over-a-domain]]: for nonzero polynomials over a domain, the degree of a product is the sum of the degrees.

[F7] [[thm-polynomial-division-algorithm-over-a-field]]: division by a nonzero polynomial over a field gives a unique quotient and a remainder that is zero or has degree strictly below the divisor. In particular, division by $x-\alpha$ leaves the constant remainder $R(\alpha)$, so $R(\alpha)=0$ implies $x-\alpha$ divides $R$.

[F8] [[def-qa-23-qsp-signal-sequence]]: $U_\Phi=Z(\phi_0)\prod_{j=1}^d(W_RZ(\phi_j))$ in the stated left-to-right, right-to-left matrix order; for $d=0$, $U_\Phi=Z(\phi_0)$.

[F9] For displayed $2\times2$ complex matrices, $M^\dagger:=\overline M^{\mathsf T}$ and “unitary” means $M^\dagger M=MM^\dagger=I$; $P^*$ and $Q^*$ continue to mean coefficient conjugation of polynomials.

## Proof

1.1 If the pair comes from a phase list, [[lem-qa-23-phase-sequence-unitarity]] gives exactly the stated matrix form, degree/parity bounds, and polynomial identity for the sequence defined in [F8]. This proves the forward implication. [F2, F8]

1.2 Let $d=0$ and suppose the pair is admissible. Then $Q=0$ and $P$ is constant with $|P|=1$. Set $\phi_0=\operatorname{Arg}(P)$ from the unique principal polar representation [F4]; [F5] gives $P=e^{i\phi_0}$. By [F8], $U_\Phi=Z(\phi_0)=\operatorname{diag}(P,P^*)$, the required matrix. [F1, F4, F5, F8, base, given, algebra]

1.3 Let $d=1$. Parity gives $P=ax$ and $Q=b$ for constants $a,b\in\mathbb C$. Evaluating the identity at $x=0$ and $x=1$ gives $|b|=|a|=1$. Set $\alpha=\operatorname{Arg}(a)$ and $\beta=\operatorname{Arg}(b)$ by [F4], so [F5] gives $a=e^{i\alpha}$ and $b=e^{i\beta}$; then set $\phi_0=(\alpha+\beta)/2$, $\phi_1=(\alpha-\beta)/2$. By the order in [F8], direct multiplication of $Z(\phi_0)W_R(x)Z(\phi_1)$ gives entries $ax$, $s(x)b$, $s(x)\overline b$, and $-x\overline a$, exactly the four entries in the Statement for $d=1$. [F1, F4, F5, F8, base, algebra]

1.4 Now let $d\ge2$ and assume the converse has been constructed at every smaller nominal degree. Put $P_S=i^{-d}P$ and $Q_S=i^{-(d+1)}Q$. Multiplication by unit complex scalars preserves the bounds, parities and coefficient-conjugate identity in [F1]. The corresponding source-convention matrix is $M_S(x)=\begin{pmatrix}P_S(x)&i s(x)Q_S(x)\\i s(x)Q_S^*(x)&P_S^*(x)\end{pmatrix}.$ For real $x$, the diagonal entries of $M_S^\dagger M_S$ are $|P_S|^2+s^2|Q_S|^2=1$, and the off-diagonal entries cancel as $i sP_S^*Q_S-i sQ_SP_S^*=0$ and its conjugate. Thus $M_S^\dagger M_S=I$; together with $\det M_S=P_SP_S^*+(1-x^2)Q_SQ_S^*=1$ from [F1], this makes $M_S$ unitary by [F9]. Also $W_S^\dagger W_S=W_SW_S^\dagger=I$ and $\det W_S=1$ by direct multiplication using $x^2+s^2=1$, while every $Z(\psi)$ is unitary with determinant $1$ by [F2, F9]. Thus the peel multiplies by unitary matrices. [F1, F2, F3, F9, given, algebra]

1.5 If $P_S$ is constant, then the identity at $x=1$ gives $|P_S|=1$. For every $x\in(-1,1)$ it then gives $(1-x^2)|Q_S(x)|^2=0$, hence $Q_S(x)=0$ throughout that interval. If $Q_S$ were nonzero of degree $m$, choose $m+1$ distinct points in $(-1,1)$; repeated division by their linear factors using [F7] would force a divisor of degree $m+1$ of $Q_S$, contradicting [F6]. Thus $Q_S=0$. The parity of the nonzero constant $P_S$ forces $d$ even. Set $\psi_0=\operatorname{Arg}(P_S)$ by [F4], so [F5] gives $P_S=e^{i\psi_0}$. Direct multiplication using $x^2+s^2=1$ gives $W_SZ(\pi/2)W_S=Z(\pi/2)$ and therefore $W_SZ(\pi/2)W_SZ(-\pi/2)=I$. This identity is the length-two phase product $Z(0)W_SZ(\pi/2)W_SZ(-\pi/2)$. Insert it on the left of the current sequence; the adjacent $Z(-\pi/2)$ and initial $Z(\psi_0)$ combine to $Z(\psi_0-\pi/2)$ by [F3], so the result is again a standard phase list and has two additional signal factors. Repeating this $d/2$ times pads the constant sequence to nominal degree $d$. [F1, F3, F4, F5, F6, F7, given, algebra]

1.6 Otherwise let $\ell=\deg P_S\ge1$, with leading coefficients $p_\ell$ for $P_S$ and $q_m$ for $Q_S$. The identity forces $Q_S\ne0$ and $m=\ell-1$: if $m\ge\ell$, the highest term of $-(x^2)Q_SQ_S^*$ has degree $2m+2>2\ell$ and cannot cancel; if $m<\ell-1$, the degree-$2\ell$ term $|p_\ell|^2x^{2\ell}$ cannot cancel. At degree $2\ell$, the coefficients therefore satisfy $|p_\ell|^2-|q_{\ell-1}|^2=0$. Thus $r:=p_\ell/q_{\ell-1}$ has modulus one. Set $\psi_d=\operatorname{Arg}(r)/2$ using [F4]; then [F5] gives $e^{2i\psi_d}=r$. [F1, F4, F5, F6, algebra]

2.1 Multiply $M_S$ on the right by $Z(-\psi_d)W_S^\dagger$, where $W_S=\begin{pmatrix}x&is\\is&x\end{pmatrix}$. The result has the same form with $P'=e^{-i\psi_d}xP_S+e^{i\psi_d}(1-x^2)Q_S,\qquad Q'=e^{i\psi_d}xQ_S-e^{-i\psi_d}P_S.$ The possible degree-$(\ell+1)$ coefficient of $P'$ and degree-$\ell$ coefficient of $Q'$ both equal zero by $e^{2i\psi_d}=p_\ell/q_{\ell-1}$. Their parities then give $\deg P'\le\ell-1$ and $\deg Q'\le\ell-2$, the bounds for nominal degree $d-1$. The right multiplier and $M_S$ are unitary with determinant $1$, so their product $N=\begin{pmatrix}A&B\\C&D\end{pmatrix}$ is also unitary with determinant $1$. The cofactor formula gives $N^{-1}=\begin{pmatrix}D&-B\\-C&A\end{pmatrix}$, whereas [F9] gives $N^{-1}=N^\dagger=\begin{pmatrix}A^*&C^*\\B^*&D^*\end{pmatrix}$. Equating entries yields $D=A^*$ and $C=-B^*$. Since $A=P'$ and $B=i sQ'$, this is the required lower row $[i s Q'^*,P'^*]$. If $a=e^{-i\psi_d}$, then $P'=axP_S+\overline a(1-x^2)Q_S$ and $Q'=\overline a xQ_S-aP_S$; expanding their coefficient-conjugate products cancels the two mixed terms and leaves $P'P'^*+(1-x^2)Q'Q'^*=(x^2+1-x^2)\bigl(P_SP_S^*+(1-x^2)Q_SQ_S^*\bigr)=1.$ So $(P',Q')$ is admissible at nominal degree $d-1$. [F1, F6, F9, step 1.6, algebra]

3.1 Put $k=d-1\ge1$ and $M'=M_SZ(-\psi_d)W_S^\dagger$, the matrix in step 2.1. The pair $(i^kP',i^{k+1}Q')$ is admissible at nominal degree $k$, since the unit scalars preserve degree, parity and the coefficient-conjugate identity. Apply the reflection-convention induction hypothesis to this pair. Its displayed matrix is $i^kM'$ entrywise: the lower-row factors are $(-1)^{k+1}i^{-(k+1)}=i^{k+1}$ and $(-1)^ki^{-k}=i^k$. By [F3], convert that reflection phase list to a source-convention list with $i^kU_S=i^kM'$, hence $U_S=M'$. Reversing the peel gives $M_S=M'W_SZ(\psi_d)$, so appending $\psi_d$ constructs the required finite source-convention list. Each induction call has strictly smaller nominal degree; steps 1.2, 1.3 and 1.5 supply the bases and constant padding. [F1, F3, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, IH, induction, construct]

4.1 For $d\ge2$, apply the inverse affine phase map in [F3] to obtain a reflection phase list $\Phi$. Since $U_R(\Phi)=i^dU_S(\Psi)$, its upper-left entry is $i^dP_S=P$, its upper-right entry is $i^{d+1}sQ_S=sQ$, and its lower entries are $(-1)^{d+1}sQ^*$ and $(-1)^dP^*$. Thus it is the required reflection sequence and the converse follows. Together with the forward implication and both base cases this proves the equivalence for all $d\ge0$. [F3, step 1.1, step 1.2, step 1.3, step 1.4, step 3.1, discharge-induction: step 1.4, algebra] ∎







