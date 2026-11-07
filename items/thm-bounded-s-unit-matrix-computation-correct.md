---
id: thm-bounded-s-unit-matrix-computation-correct
kind: theorem
title: The bounded S-unit matrix algorithm returns generators and the full class group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - alg-compute-units-and-class-group-from-bounded-s-units
  - thm-lenstra-integral-s-unit-height-generators
  - thm-s-unit-valuation-exact-sequence
  - thm-integer-smith-normal-form-computes-kernel-and-cokernel
  - thm-prime-ideal-decomposition-algorithm-correct
  - thm-small-prime-ideal-class-generators-correct
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-axiom-of-choice
  - thm-integer-column-hnf-terminates-and-is-canonical
  - thm-integral-ideal-enumeration-correct
  - thm-minkowski-bound-for-ideal-classes
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
  - def-ideal-class-group-of-a-domain
  - def-s-integers-and-s-units-of-a-number-field
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-integral-basis-and-power-integral-basis
  - def-field-norm-and-trace
  - cor-trace-and-norm-of-an-algebraic-integer
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - def-discriminant-of-a-number-field-basis-and-order
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - lem-relative-projective-height-coordinate-invariance
  - def-absolute-norm-of-an-ideal
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - lem-denominator-ideal-valuation-in-a-number-field
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-ideal-norm-is-multiplicative
  - thm-field-norm-and-trace-by-embeddings
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. W. Lenstra Jr., Algorithms in Algebraic Number Theory, §§5–6"
      url: "https://arxiv.org/pdf/math/9204234"
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Proposition 2.1.5 and §7.1"
      url: "https://wstein.org/books/ant/ant.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. For the field presentation and exact input data of the bounded S-unit matrix algorithm, the algorithm terminates. If it returns units $u_j$ and nontrivial invariant factors $\delta_i$ represented by ideals $\mathfrak c_i$, then $\mathcal O_K^\times=\langle u_j\rangle$ and $\operatorname{Cl}(\mathcal O_K)\cong\bigoplus_i\mathbb Z/\delta_i\mathbb Z$, with the class of each $\mathfrak c_i$ corresponding to the standard generator of its cyclic summand.

## Statement references

[Lenstra, Theorem 6.2 and §5 valuation sequence](https://arxiv.org/pdf/math/9204234)

[Stein, Proposition 2.1.5 and §7.1](https://wstein.org/books/ant/ant.pdf)

## Diagram

The maps used in the valuation argument form the following commutative square, followed by the class map $\kappa$:

\[
\begin{tikzcd}
\mathbb Z^m \arrow[r,"\phi"] \arrow[d,"V"'] & U_T \arrow[d,"\nu"] \\
\mathbb Z^T \arrow[r,equal] & \mathbb Z^T
\end{tikzcd}
\qquad \mathbb Z^T \xrightarrow{\kappa} \operatorname{Cl}(\mathcal O_K).
\]

The square commutes because $V=\nu\circ\phi$; exactness and the cokernel identification are proved in the numbered argument.

## Facts & Assumptions

**Given:** The Axiom of Choice and the exact field presentation, integral basis, multiplication table, discriminant, and signature in the algorithm input.

[A1] Choice is used in the Minkowski ideal-class bound and the bounded S-unit height-generator theorem ([[def-axiom-of-choice]], [[thm-minkowski-bound-for-ideal-classes]], [[thm-lenstra-integral-s-unit-height-generators]]).

[F1] The field discriminant is a nonzero integer, and its trace Gram determinant is nonzero ([[thm-number-field-discriminant-is-well-defined-and-nonzero]], [[def-discriminant-of-a-number-field-basis-and-order]]).

[F2] Prime ideals up to any integer bound $B\ge M_K$ generate the finite class group ([[thm-small-prime-ideal-class-generators-correct]]).

[F3] Integral $T$-units of height at most $d^2m_T$ generate $U_T$, where $d=(2/\pi)^{r_2}\sqrt{|\Delta|}$ ([[thm-lenstra-integral-s-unit-height-generators]]).

[F4] The relative unrooted height is the norm of the integral denominator ideal times the real and complex embedding factors with weights one and two ([[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]], [[thm-lenstra-integral-s-unit-height-generators]]).

[F5] For integral $x\ne0$, $N((x))=|N_{K/\mathbb Q}(x)|$, ideal norms multiply, and the field norm is the product over embeddings ([[thm-principal-ideal-norm-is-absolute-field-norm]], [[thm-ideal-norm-is-multiplicative]], [[thm-field-norm-and-trace-by-embeddings]]).

[F6] Nonzero integral ideals factor uniquely into prime ideals; a prime $\mathfrak p$ above the rational prime $p$ has norm $p^{f_{\mathfrak p}}$ with $f_{\mathfrak p}\ge1$ ([[thm-number-field-integral-ideal-factorisation-in-zf]], [[def-prime-above-and-residue-degree]], [[def-absolute-norm-of-an-ideal]]).

[F7] The valuation sequence is exact for a finite set $T$ whose classes generate; its kernel at $U_T$ is $\mathcal O_K^\times$ ([[thm-s-unit-valuation-exact-sequence]], [[def-s-integers-and-s-units-of-a-number-field]], [[def-ideal-class-group-of-a-domain]]).

[F8] The Smith algorithm gives a basis of the integer kernel and the invariant factors of the cokernel using its transformation matrices ([[thm-integer-smith-normal-form-computes-kernel-and-cokernel]]).

[F9] The exact integral-basis prime decomposition and HNF procedures terminate and return the stated ideal bases ([[thm-prime-ideal-decomposition-algorithm-correct]], [[thm-integer-column-hnf-terminates-and-is-canonical]], [[thm-integral-ideal-enumeration-correct]]).

[F10] The trace of an algebraic integer in a number field is an integer ([[cor-trace-and-norm-of-an-algebraic-integer]]).

[F11] An element is a $T$-unit exactly when its principal fractional ideal has valuation zero outside $T$ ([[def-s-integers-and-s-units-of-a-number-field]]).

[F12] The denominator ideal of a number-field element is a nonzero integral ideal ([[lem-denominator-ideal-valuation-in-a-number-field]]).

[F13] For every $N\in\mathbb N$, $\pi/4$ equals the $N$th Gregory–Leibniz partial sum plus the signed integral remainder displayed in its finite-remainder formula ([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

[F14] The Minkowski ideal-class constant is $M_K=(4/\pi)^{r_2}(n!/n^n)\sqrt{|\Delta|}$ ([[thm-minkowski-bound-for-ideal-classes]]).

[F15] The projective-height formula is unchanged by common nonzero coordinate scaling ([[lem-relative-projective-height-coordinate-invariance]]).

## Proof



1.1 Let $\Delta$ be the nonzero integer discriminant, so $|\Delta|\ge1$. By [F13] at $N=0$ and $N=1$, [given]
$$\frac\pi4=1-\int_0^1\frac{x^2}{1+x^2}\,dx<1,\qquad \frac\pi4=\frac23+\int_0^1\frac{x^4}{1+x^2}\,dx>\frac23,$$
so $2<\pi<4$. If $n=1$, then $K=\mathbb Q$, $|\Delta|=1$, $B=1$, and [F14] gives $M_K=1$. If $n\ge2$, put $U_n=(4/\pi)^{n/2}n!/n^n$. Since $\pi>2$, $U_2=2/\pi<1$. For $n\ge2$,
$$\frac{U_{n+1}}{U_n}=\frac2{\sqrt\pi}\left(\frac n{n+1}\right)^n\le\frac1{\sqrt\pi}<1,$$
because the binomial expansion gives $(1+1/n)^n\ge2$. Hence $U_n<1$. Since $4/\pi>1$ and $r_2\le n/2$, [F14] yields
$$M_K\le U_n\sqrt{|\Delta|}<\sqrt{|\Delta|}\le|\Delta|=B.$$
The bounded prime enumeration is finite and produces a set $T$ whose classes generate the finite class group by [F2]. [F1, F2, F13, F14, given, algebra]

1.2 Set $A_0=\max_k|a_k|$ for the nonleading coefficients of the monic polynomial $f$. Every complex root $z$ satisfies $|z|\le1+A_0$: otherwise $|z|>1+A_0\ge1$, and [given]
$$|z|^n\le A_0\sum_{k=0}^{n-1}|z|^k=A_0\frac{|z|^n-1}{|z|-1}<|z|^n,$$
a contradiction (when $A_0=0$, the first inequality already forces $z=0$). Thus every embedding of $\alpha$ has modulus at most $R=1+A_0$, and $|\sigma(\omega_j)|\le W_j$ by the triangle inequality. [given, algebra]

1.3 For $g_j\in\mathcal O_K\cap U_T$, factor $(g_j)$ into prime ideals. Membership in $\mathfrak p^e$ holds exactly for $e\le\operatorname{ord}_{\mathfrak p}(g_j)$. If $\mathfrak p$ lies above $p$, then [F5]–[F6] give [given]
$$v_p(|N_{K/\mathbb Q}(g_j)|)=\sum_{\mathfrak q\mid p} f_{\mathfrak q}\operatorname{ord}_{\mathfrak q}(g_j)\ge\operatorname{ord}_{\mathfrak p}(g_j),$$
so the prescribed finite search reaches every valuation. Therefore $V$ is the matrix of the valuation homomorphism on the chosen generators. [F5, F6, F9, given, algebra]

2.1 Put $d=(2/\pi)^{r_2}\sqrt{|\Delta|}$. Since $\pi>2$ by step 1.1, $d^2\le|\Delta|=B$. Every prime in $T$ has norm at most $B$, so $m_T\le B$ and $d^2m_T\le B^2$. [F1, F3, step 1.1, given, algebra]

3.1 Let $x\in\mathcal O_K\cap U_T$ satisfy the Lenstra bound $H_K([x:1])\le d^2m_T$. By [F12] its denominator ideal is integral, so its norm is at least $1$; every archimedean factor in the height is at least $1$. Hence $|\sigma(x)|\le B^2$ at every real embedding and $|\tau(x)|\le B$ at every complex embedding, in particular all embedding moduli are at most $B^2$. By [F3] these elements generate $U_T$. [F3, F4, F12, step 2.1, given]

4.1 For the integral-basis coordinates $x=\sum_i z_i\omega_i$, put $t_j=\operatorname{Tr}_{K/\mathbb Q}(x\omega_j)$. The element $x\omega_j$ is integral, so $t_j\in\mathbb Z$ by [F10]; using the $n$ embeddings and step 3.1 gives $|t_j|\le nB^2W_j$, hence $|t_j|\le\lceil nB^2W_j\rceil$. The trace equations are $t=Gz$. By [F1], $G$ is invertible, so [given, step 3.1]
$$|z_i|\le\sum_j|(G^{-1})_{ij}|\,|t_j|\le C_i.$$
Therefore every integral Lenstra-bounded generator occurs in the coordinate box of step 2 of the algorithm. [F1, F10, given, algebra, step 3.1]

5.1 Every retained element is a nonzero integral $T$-unit: factorization of $(x)$ shows that it has no prime divisor outside $T$ exactly when it passes the membership tests for all prime ideals above rational divisors of $|N(x)|$. Conversely, every integral $T$-unit in the coordinate box passes those tests. By steps 3.1, 1.2, 4.1, the retained list contains the Lenstra-bounded generating set and is itself contained in $U_T$ by [F11]; thus $g_1,\ldots,g_m$ generate $U_T$. [F5, F6, F9, F11, step 4.1, given, step 3.1, step 1.2]

6.1 Let $\phi:\mathbb Z^m\to U_T$ send $z$ to $\prod_jg_j^{z_j}$. Step 5.1 makes $\phi$ surjective and the valuation matrix is $V=\nu\circ\phi$, as illustrated in the Diagram section. By the exact sequence [F7], $\operatorname{im}V=\ker\kappa$ and $\phi(\ker V)=\mathcal O_K^\times$. Hence $\operatorname{coker}V\cong\operatorname{Cl}(\mathcal O_K)$. The diagram records the maps only; the exactness and cokernel identification follow from [F7] and this calculation. [F7, step 5.1, step 1.3, algebra]

7.1 The Smith theorem [F8] gives $UVQ=D$. Since $\operatorname{coker}V$ is finite by step 1.1, the rank of $V$ is $|T|$ and $D$ has no free cokernel coordinates. The last $m-|T|$ columns of $Q$ form a basis of $\ker V$; their products of the $g_j$ therefore generate $\phi(\ker V)=\mathcal O_K^\times$. [F8, step 1.1, step 6.1]

8.1 The row transformation $U$ identifies $\mathbb Z^{|T|}/\operatorname{im}V$ with $\mathbb Z^{|T|}/\operatorname{im}D$. For each nonzero diagonal entry $\delta_i$, the standard class of $e_i$ in the latter quotient has order $\delta_i$, and its preimage in $\operatorname{coker}V$ is represented by $U^{-1}e_i$. Applying $\kappa$ gives the class of $\prod_{\mathfrak p_j\in T}\mathfrak p_j^{(U^{-1}e_i)_j}$. Entries $1$ give trivial summands and are omitted. This is exactly the algorithm's invariant-factor output. [F7, F8, step 6.1, step 7.1, algebra]

9.1 All searches are finite: the prime and ideal lists have explicit norm bounds; each coordinate box and each quotient-ring scan is finite; trial division of a nonzero integer terminates; and the HNF, prime-decomposition, and Smith routines terminate by [F9] and [F8]. Thus the complete algorithm terminates with the asserted generators and invariant factors. [F8, F9, step 1.1, step 5.1, step 1.3] ∎

