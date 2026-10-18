---
id: lem-root-unity-toral-quotient-and-integral-hopf-stability
kind: lemma
title: The root-specialized toral quotient and integral Hopf stability
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-axiom-of-choice, thm-integral-triangular-decomposition-for-the-lusztig-form, def-root-of-unity-quantum-group-forms, def-lusztig-divided-power-integral-form, lem-root-unity-quantum-lucas-and-divided-power-generation, lem-unmodified-integral-torus-has-a-quantum-binomial-basis, lem-divided-power-and-toral-quantum-binomial-reordering-identities, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: George Lusztig, Introduction to Quantum Groups
      url: https://math.mit.edu/~gyuri/papers/quant.gr.pdf
      locator: Chapters 23, 34–35; toral binomials and Frobenius specialization.
---

## Statement

Assume the Axiom of Choice inherited by the integral freeness supplier. Take a finite-type semisimple Cartan datum with standard symmetrizers $d_i$, chosen weight lattice $Q_{\rm root}\subseteq P\subseteq P_{\rm full}$, dual lattice $P^\vee$, and $K_i=K_{d_ih_i}$. Specialize at a primitive root $\zeta$ of odd order $\ell>1$, with $\gcd(\ell,d_i)=1$ for all $i$, and put $z_i=\zeta^{d_i}$. In the actual specialized toral algebra, the quotient by all $K_h-1$ is the polynomial algebra on $H_i=T_{i,0,\ell}$. If $c=\ell c_1+c_0$ and $t=\ell t_1+t_0$, with residues in $[0,\ell-1]$, its exact formula is
$$T_{i,c,t}=\binom{H_i+c_1}{t_1}\begin{bmatrix}c_0\\t_0\end{bmatrix}_{z_i}.$$
Moreover the actual integral divided-power form is stable under the library's Hopf maps, which therefore descend to its root specialization. Its coproduct and antipode on divided powers are
$$\Delta(E_i^{(n)})=\sum_{r+s=n}q_i^{rs}E_i^{(r)}\otimes K_i^{-r}E_i^{(s)},\qquad\Delta(F_i^{(n)})=\sum_{r+s=n}q_i^{-rs}F_i^{(r)}K_i^s\otimes F_i^{(s)},$$
$$S(E_i^{(n)})=(-1)^nq_i^{n(n-1)}E_i^{(n)}K_i^n,\qquad S(F_i^{(n)})=(-1)^nq_i^{-n(n-1)}K_i^{-n}F_i^{(n)}.$$
The counit is zero on positive-index divided powers and equals $1$ on $K_h$.

## Facts & Assumptions

**Given:** The datum, isogeny lattice, and good odd root order above.

[F1] The actual toral basis, product and shift formulas are supplied by [[lem-unmodified-integral-torus-has-a-quantum-binomial-basis]]. In one color, writing $T_t=T_{i,0,t}$, $K=K_i$, $z=q_i$, they include $(z^t-z^{-t})T_t=T_{t-1}(Kz^{1-t}-K^{-1}z^{t-1})$ and $T_rT_s=\sum_{j=0}^{\min(r,s)}z^{rs}K^{-j}\left[\begin{smallmatrix}r+s-j\\r\end{smallmatrix}\right]_z\left[\begin{smallmatrix}r\\j\end{smallmatrix}\right]_zT_{r+s-j}$.

[F2] Quantum Lucas and single-color generation hold at each $z_i$, which has exact odd order $\ell$ ([[lem-root-unity-quantum-lucas-and-divided-power-generation]]).

[F3] The full mixed divided-power reordering and toral commutation hold in the actual integral form ([[lem-divided-power-and-toral-quantum-binomial-reordering-identities]], [[def-lusztig-divided-power-integral-form]]).

[F4] The generic Hopf convention is $\Delta(E_i)=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta(F_i)=F_i\otimes1+K_i\otimes F_i$, $S(E_i)=-E_iK_i$ and $S(F_i)=-K_i^{-1}F_i$, with group-like $K_h$ ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]). Its root form is the actual scalar specialization of the integral subalgebra ([[def-root-of-unity-quantum-group-forms]]).

[C1] The actual integral form is free over $\mathbb Z[q,q^{-1}]$ by [[thm-integral-triangular-decomposition-for-the-lusztig-form]], with its inherited Axiom of Choice from [[def-axiom-of-choice]]. Its tensor powers therefore embed in their generic scalar extensions.

## Proof

**Given:** The data above.

1.1 Fix one color. Modulo $K=1$, the first recurrence of [F1] gives $T_{a\ell+1}=0$: its right numerator is zero and its left scalar $z-z^{-1}$ is nonzero. Successively for $1<r<\ell$, the scalar $z^r-z^{-r}$ is nonzero and the preceding term vanishes, so $T_{a\ell+r}=0$. In the product formula of [F1] with $r=\ell$, $s=a\ell$, Lucas makes all terms vanish except $j=0$ and $j=\ell$; these have coefficients $a+1$ and $a$, respectively. Thus $H T_{a\ell}=(a+1)T_{(a+1)\ell}+aT_{a\ell}$, where $H=T_\ell$. Induction from $T_0=1$ gives $T_{a\ell}=\binom Ha$. The toral spanning statement in [F1] now shows that the full quotient by all $K_h-1$ is spanned by polynomials in the $H_i$. [F1, F2, given, algebra]

2.1 For each $\mu\in P$, evaluate the integral torus at $K_h=q^{\langle\ell\mu,h\rangle}$ and then specialize $q=\zeta$. These are well-defined integral evaluations, since a toral binomial evaluates to the Laurent-integral quantum binomial with upper index $\langle\ell\mu,h_i\rangle+c$, including negative indices by [F2]. They annihilate every $K_h-1$ and send $H_i$ to $\langle\mu,h_i\rangle$. The coordinate image of $P$ is a finite-index subgroup of $\mathbb Z^I$, since $P$ has finite index in the full weight lattice; hence it contains $N\mathbb Z^I$ for some positive integer $N$. A polynomial vanishing on this grid is zero: regard it as a polynomial in one variable with infinitely many grid values, then apply the same argument to each coefficient in the other finitely many variables. There is consequently no polynomial relation among the $H_i$ in the quotient. This proves its exact polynomial-algebra description. [F1, F2, step 1.1, algebra]

3.1 Every $T_{i,c,t}$ is already a polynomial in $H_i$ in the quotient by step 1.1 and the toral shift spanning. Its evaluation at $\mu$ in step 2.1 is $\left[\begin{smallmatrix}\ell\langle\mu,h_i\rangle+c\\t\end{smallmatrix}\right]_{z_i}=\binom{\langle\mu,h_i\rangle+c_1}{t_1}\left[\begin{smallmatrix}c_0\\t_0\end{smallmatrix}\right]_{z_i}$ by [F2]. Polynomial separation from step 2.1 gives the formula in the statement, including negative $c$. In particular $T_{i,-\ell a_{ij},\ell}=H_i-a_{ij}$ in this quotient. [F1, F2, step 2.1, algebra]

4.1 Generically put $A=E_i\otimes K_i^{-1}$ and $B=1\otimes E_i$. Then $AB=q_i^{-2}BA$. The quantum binomial expansion in the order $A^rB^s$ has coefficient $G(n,r;q_i^2)$; division by $[n]_i!$ and symmetric normalization gives $q_i^{rs}$ times the divided factors, yielding the stated coproduct for $E_i^{(n)}$. For $C=F_i\otimes1$, $D=K_i\otimes F_i$ one has $CD=q_i^2DC$, so the expansion in the order $C^rD^s$ instead uses $G(n,r;q_i^{-2})$ and yields coefficient $q_i^{-rs}$. The antipode is an antialgebra map; moving the toral factors in $(-E_iK_i)^n$ and $(-K_i^{-1}F_i)^n$ gives respectively the scalars $(-1)^nq_i^{n(n-1)}$ and $(-1)^nq_i^{-n(n-1)}$ in the displayed orders. These expressions are integral, and the counit values follow from its generic values on $E_i,F_i,K_h$. [F3, F4, step 3.1, algebra]

5.1 No further integral generators obstruct Hopf stability. Indeed all toral binomials are generated integrally by the divided powers and $K_h$: induct on $t$ in $E_i^{(t)}F_i^{(t)}=\sum_{j=0}^tF_i^{(t-j)}T_{i,2j-2t,j}E_i^{(t-j)}$. Its final term is $T_{i,0,t}$; every other toral term has last index less than $t$ and is already generated by the induction hypothesis. The shift recurrence of [F1], solved both upward and downward with unit coefficients, expresses every shifted binomial of index $t$ through the unshifted one and lower-index shifted terms. Thus [F3] proves generation by divided powers and $K_h$ alone. Step 4.1 and the group-like formulas on $K_h$ prove stability of this entire actual integral subalgebra. By [C1], the tensor powers of the integral form embed in their generic scalar extensions, so the generic Hopf identities restrict to these integral maps and then specialize, giving all the asserted root Hopf maps in [F4]'s convention. [F1, F3, F4, C1, step 4.1, algebra] ∎
