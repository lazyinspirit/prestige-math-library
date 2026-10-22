---
id: lem-scalar-disk-riemann-hilbert-fredholm-index
kind: lemma
title: "The scalar disk Riemann–Hilbert operator has index one plus boundary winding"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-fredholm-operator-cokernel-and-index
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Robert Lipshitz, A cylindrical reformulation of Heegaard Floer homology"
      url: "https://arxiv.org/pdf/math/0502404"
      locator: "§4.1, printed pp.972–973, discusses the real-boundary index problem and its winding data. The scalar whole-disk Fredholm theorem below is proved directly by radial Fourier equations, not assumed from that discussion."
---

## Statement

Assume countable choice. Let $D=\{z\in\mathbb C:|z|<1\}$ and let $H^1(D)$ mean the completion of complex-valued functions smooth on a neighborhood of $\overline D$ for the norm $\|u\|_{H^1}^2=\int_D(|u|^2+|u_x|^2+|u_y|^2)\,dx\,dy$. Boundary restriction extends to a bounded map $\operatorname{tr}:H^1(D)\to L^2(S^1)$. For an integer $k$, put
$$X_k=\{u\in H^1(D):\operatorname{tr}u(e^{it})=e^{ikt}\overline{\operatorname{tr}u(e^{it})}\text{ for almost every }t\}.$$
This is a closed real Hilbert subspace. Its boundary condition is the real line $e^{ikt/2}\mathbb R$; no periodic choice of a nonzero vector in that line bundle is assumed. The bounded real operator
$$T_k=\partial_x+i\partial_y:X_k\longrightarrow L^2(D;\mathbb C)$$
is Fredholm, with closed range, real kernel dimension $\max(k+1,0)$, real cokernel dimension $\max(-k-1,0)$ and real index $k+1$. Its kernel consists exactly of the polynomials $\sum_{n=0}^k c_nz^n$ with $c_n=\overline{c_{k-n}}$ when $k\ge0$, and is zero when $k<0$.

More explicitly, write $f(re^{it})=\sum_{j\in\mathbb Z}f_j(r)e^{ijt}$. For each $n<0$ define the continuous moment $b_n(f)=\int_0^1r^{-n}f_{n+1}(r)\,dr$. Then $f$ lies in the range precisely when $b_n(f)=\overline{b_{k-n}(f)}$ for every integer $n$ with $k<n<0$. These are a real space of $\max(-k-1,0)$ independent conditions. There is a bounded real-linear right inverse on this closed range. The space $X_k$ is also the $H^1$ closure of the smooth functions satisfying its boundary condition. Multiplying the operator by $1/2$ gives the same conclusions for $\overline\partial$. No punctured surface, vector-bundle problem, triangle moduli space, or gluing assertion is part of this statement.

## Statement references

[[def-fredholm-operator-cokernel-and-index|Fredholm operator and real index]]

[[thm-fourier-basis-and-parseval-on-the-n-torus|Angular Fourier basis and Parseval]]

[Lipshitz, §4.1](https://arxiv.org/pdf/math/0502404)

## Facts & Assumptions

**Given:** Countable choice, the disk completion, integer $k$, and the actual scalar differential operator and boundary relation in the statement. All Hilbert spaces are regarded as real when dimensions or Fredholm indices are taken.

[A1] [[def-countable-choice]] suffices for the Hilbert/Fourier and approximation suppliers below. All finite moment corrections are explicit finite-dimensional operations.

[F1] [[thm-fourier-basis-and-parseval-on-the-n-torus]] gives the angular $L^2$ basis and Parseval identity. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] permits radial integration of integrable products; [[thm-monotone-convergence-for-the-integral]] passes from finite sums of nonnegative Fourier energies to the full sum.

[F2] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] gives completeness of the target $L^2$ spaces under countable choice. [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]] supplies smooth target approximation; angular Fourier truncation preserves smoothness and converges in $L^2$ by [F1].

[F3] [[def-fredholm-operator-cokernel-and-index]] requires a finite-dimensional kernel, a closed range and finite-dimensional quotient by that range, and defines the real index as the difference of those two dimensions.

## Proof

1.1 **The completion, trace and angular coordinates.** For a smooth $u$, use $u(1,t)=u(r,t)+\int_r^1u_s(s,t)\,ds$ with $1/2\le r\le3/4$, square by $|a+b|^2\le2|a|^2+2|b|^2$, and apply Cauchy–Schwarz to the integral. Integrating over that fixed radial interval and over $t$ gives $\|u|_{S^1}\|_{L^2}^2\le C\|u\|_{H^1}^2$. Thus restriction extends to the completion. An $H^1$ Cauchy sequence has an $L^2$ limit and $L^2$ limits of its two derivatives by [F2]; integration by parts against a compactly supported smooth test identifies the latter as the weak derivatives of the former. If the function limit is zero, those derivative limits pair to zero against every smooth compactly supported test and hence are zero by the density in [F2], so the completion embeds in $L^2$ with its indicated derivatives and is Hilbert. The boundary relation is the kernel of the bounded real map $u\mapsto\operatorname{tr}u-e^{ikt}\overline{\operatorname{tr}u}$, so $X_k$ is closed. Fourier projection in angle is bounded for the function and for its radial and angular energy. In polar coordinates, [F1] gives $\|u\|_{H^1}^2=2\pi\sum_n\int_0^1\left(|u_n|^2+|u_n'|^2+\frac{n^2}{r^2}|u_n|^2\right)r\,dr.$ The identity first holds for smooth functions and passes to their completion. On every annulus the coefficients have one-dimensional weak derivatives, hence absolutely continuous representatives: subtract the integral of the weak derivative and test the remainder to see that its derivative is zero and it is constant. Their endpoint values at $r=1$ are the Fourier coefficients of the trace, by the same trace estimate. [given, A1, F1, F2, construct, algebra]

2.1 **The radial differential equation.** Direct differentiation gives $T=e^{it}(\partial_r+i r^{-1}\partial_t)$. Hence $Tu=f$ is equivalent on $0<r<1$ to $u_n'-n u_n/r=f_{n+1}$ for every integer $n$. These identities extend from smooth functions to the completion by testing on compact annuli. The boundary relation is precisely $u_n(1)=\overline{u_{k-n}(1)}$. Smooth compactly supported targets followed by finite angular truncation form a dense target class by [F1] and [F2]. Such a target has finitely many angular modes and each of those modes has the smooth polar behavior at zero obtained by taking its Cartesian Taylor polynomials and remainder to every finite order. This permits the explicit solutions below to be computed first on that dense class. [F1, F2, step 1.1, construct, algebra]

3.1 **A bounded particular solution with one-sided boundary normalization.** For a target in that dense class put  $v_n(r)=-r^n\int_r^1s^{-n}f_{n+1}(s)\,ds\quad(n\ge0),\qquad v_n(r)=r^n\int_0^r s^{-n}f_{n+1}(s)\,ds\quad(n<0).$ Both solve the equation in step 2.1. For $n\ge0$ they have $v_n(1)=0$; for $n<0$ their boundary value is $b_n(f)$. They give a smooth disk function for a smooth finite-mode target: for $n\ge0$ the integrand has a smooth radial expansion beginning at $s$, and its integral adds a multiple of $r^n$; for $n<0$, writing $n=-m$, the integrand begins at $s^{2m-1}$ and the result begins at $r^m$. The corresponding all-order Taylor remainder estimates show smoothness in Cartesian coordinates as well. Integration by parts gives $\int_0^1|v_n'-n v_n/r|^2r\,dr=\int_0^1\left(|v_n'|^2+n^2|v_n|^2/r^2\right)r\,dr-n|v_n(1)|^2.$ The boundary term at zero vanishes for $n\ne0$ by that regular behavior; it is multiplied by zero when $n=0$. For $n\ge0$ the last term is zero. For $n<0$ it is positive. Thus the gradient energy of every mode is at most $\int|f_{n+1}|^2r\,dr$, and for $n<0$ also $|n||b_n(f)|^2$ is at most that integral. [step 2.1, construct, algebra]

4.1 For $n\ne0$, the angular energy bounds $\int_0^1|v_n|^2r\,dr$ because $n^2/r^2\ge1$. For $n=0$ use $v_0(r)=-\int_r^1f_1(s)\,ds$ and Cauchy–Schwarz with measure $s\,ds$: $|v_0(r)|^2\le\log(1/r)\int_r^1|f_1(s)|^2s\,ds$. Integrating $r\,dr$ and using the finite integral $\int_0^1r\log(1/r)\,dr=1/4$ bounds its $L^2$ norm too. Sum by [F1]. The resulting particular-solution map $V:f\mapsto v$ extends boundedly from all of $L^2$ to $H^1$. Its equation $Tv=f$, vanishing nonnegative trace coefficients and negative trace coefficients $b_n(f)$ persist by continuity. Independently, Cauchy–Schwarz gives $|b_n(f)|^2\le(-2n)^{-1}\int_0^1|f_{n+1}(s)|^2s\,ds$ for $n<0$, so every moment is continuous. [F1, F2, step 1.1, step 3.1, construct, algebra]

5.1 **The entire homogeneous solution.** If $Tu=0$, step 2.1 gives $u_n=c_nr^n$ on every annulus. For $n<0$ its $L^2$ norm diverges unless $c_n=0$, so all negative modes vanish. For $n\ge0$, the series $\sum c_nz^n$ converges in the $H^1$ completion whenever $\sum(n+1)|c_n|^2<\infty$, since its exact squared norm is $2\pi\sum |c_n|^2(n+(2n+2)^{-1})$. Conversely step 1.1 gives that summability for every homogeneous solution, with equivalent constants also at $n=0$. In particular its trace coefficients are $c_n$ for $n\ge0$ and zero for $n<0$. Thus every solution of $Tu=f$ is $Vf$ plus precisely such a holomorphic series; no holomorphic regularity theorem or hidden boundary distribution is being assumed. [F1, step 1.1, step 2.1, step 4.1, algebra]

6.1 **Solve the boundary equations.** Negative trace coefficients of any solution are necessarily $b_n(f)$. For a nonnegative $n$ with $m=k-n<0$, prescribe the holomorphic coefficient $c_n=\overline{b_m(f)}$. For nonnegative $n$ with $k-n\ge0$, prescribe $c_n=0$. These prescriptions are bounded in the holomorphic $H^1$ norm: for $n\ge0,m=k-n<0$, the ratio $(n+1)/|m|=(n+1)/(n-k)$ is bounded by a constant depending only on $k$, and step 3.1 bounds $|m||b_m|^2$. Each negative $m$ occurs at most once. The boundary equations for a nonnegative/negative pair are now satisfied in both directions, and those for a nonnegative/nonnegative pair have both sides zero. The only remaining equations are $b_n(f)=\overline{b_{k-n}(f)}$ for $k<n<0$. They are necessary for any solution and sufficient by this explicit construction. The resulting map $Q_k:f\mapsto Vf+\sum c_nz^n$ is bounded and real linear on the target satisfying these equations, has image in $X_k$, and satisfies $T_kQ_kf=f$. [step 1.1, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 **Independent obstructions and the closed range.** If $k\ge-1$ let $B$ be the zero map to the zero space; there are no remaining equations. If $k\le-2$, let $I=\{k+1,\ldots,-1\}$, of size $M=-k-1$. On $\mathbb C^I$ the real involution $J(a)_n=\overline{a_{k-n}}$ has a real anti-fixed space of dimension $M$: a two-element orbit contributes an arbitrary complex number, hence two real parameters, and a fixed index contributes an imaginary number, hence one. The obstruction map is $B(f)=(b_n(f))_{n\in I}-J((b_n(f))_{n\in I})$ into that anti-fixed space. It is continuous and onto. Indeed prescribe arbitrary finitely many negative boundary coefficients $a_n$ using the smooth antiholomorphic polynomial $w(z)=\sum_{n\in I}a_n\overline z^{-n}$. For $f=Tw$ the regular negative particular solutions are exactly those modes of $w$, so $b_n(f)=a_n$. Every anti-fixed vector is $a-Ja$ by taking $a$ to be half of that vector. Thus $\operatorname{ran}T_k=\ker B$ by step 6.1, which is closed, and the quotient by that range is isomorphic to the anti-fixed space of dimension $M$. This proves the stated real cokernel dimension, also when the obstruction space is zero. [step 4.1, step 6.1, construct, algebra]

8.1 **Kernel and index.** For $f=0$, step 5.1 and the boundary equations say $c_n=0$ whenever $n\ge0$ and $k-n<0$, while $c_n=\overline{c_{k-n}}$ otherwise. If $k<0$ there are no remaining coefficients. If $k\ge0$, the indices are $0,\ldots,k$; every two-element orbit contributes two real parameters and a fixed index one, for total real dimension $k+1$. Therefore the displayed polynomials are exactly the kernel. Along with the closed range and quotient in step 7.1 this proves Fredholmness in [F3], and the index is $\max(k+1,0)-\max(-k-1,0)=k+1$. The operator is bounded because its two first derivatives are bounded in the defining norm. [F3, step 1.1, step 5.1, step 6.1, step 7.1, algebra]

9.1 **The actual smooth boundary completion.** To approximate $f\in\ker B$, choose smooth finite-mode targets $f_j\to f$ as in step 2.1. In the nonzero obstruction case, the construction with the finitely many antiholomorphic monomials in step 7.1 gives an explicit real-linear right inverse $R$ of $B$ whose values are smooth finite-mode targets. Replace $f_j$ by $f_j-RBf_j$; these still converge to $f$ and now satisfy every obstruction. The formulas for $Q_k$ then produce smooth disk functions satisfying the boundary relation, since each target has finitely many modes and the only added holomorphic coefficients are finite in number. Boundedness makes them converge to $Q_kf$. Finally for any $u\in X_k$, the difference $u-Q_kT_ku$ is one of the finite polynomials in step 8.1. Adding that same smooth polynomial to these approximants proves density of the boundary-compatible smooth functions in $X_k$. This also verifies that the theorem uses the actual completed boundary problem, including odd $k$, rather than a formal coefficient space. Multiplication of the target by $1/2$ is a bounded real isomorphism, giving the identical kernel, range codimension and index for $\overline\partial=T_k/2$. No puncture or gluing inference has been made. [A1, F1, F2, step 2.1, step 6.1, step 7.1, step 8.1, construct, algebra] ∎
