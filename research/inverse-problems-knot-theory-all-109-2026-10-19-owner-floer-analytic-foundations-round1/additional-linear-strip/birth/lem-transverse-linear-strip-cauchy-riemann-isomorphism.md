---
id: lem-transverse-linear-strip-cauchy-riemann-isomorphism
kind: lemma
title: "A transverse linear strip Cauchy–Riemann operator has a weighted inverse"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-fourier-basis-and-parseval-on-the-n-torus, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-tonelli-theorem-for-sigma-finite-product-spaces]
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §3.2"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology, Appendix A"
      url: "https://arxiv.org/pdf/math/0502404"
---

## Statement

Assume Countable Choice. Fix $m\ge1$ and angles $0<\theta_j<\pi$ for $1\le j\le m$. On the strip $S=\mathbb R\times[0,1]$ impose the real product-plane boundary conditions $u(s,0)\in\mathbb R^m$ and $u(s,1)\in\prod_j e^{i\theta_j}\mathbb R$. Let $H^1_\theta$ be the completion of smooth maps satisfying these conditions and compactly supported in the $s$ direction, for the norm
$$\|u\|_{H^1}^2=\|u\|_2^2+\|u_s\|_2^2+\|u_t\|_2^2.$$
The real linear operator $D=\partial_s+i\partial_t$ extends to an isomorphism $H^1_\theta\to L^2(S;\mathbb C^m)$. Put $\gamma=\min_j\{\theta_j,\pi-\theta_j\}>0$. Its inverse satisfies
$$\|D^{-1}f\|_2\le\gamma^{-1}\|f\|_2,\qquad \|D^{-1}f\|_{H^1}\le\sqrt{\gamma^{-2}+5}\,\|f\|_2.$$
For $0\le\delta<\gamma$, set $w(s)=e^{\delta|s|}$, $H^1_{\theta,\delta}=\{u:wu\in H^1_\theta\}$ with norm $\|wu\|_{H^1}$, and $L^2_\delta=\{f:wf\in L^2\}$ with norm $\|wf\|_2$. Then $D:H^1_{\theta,\delta}\to L^2_\delta$ is an isomorphism and
$$\|D^{-1}f\|_{H^1_{\theta,\delta}}\le\frac{\sqrt{\gamma^{-2}+5}}{1-\delta/\gamma}\,\|f\|_{L^2_\delta},\qquad \|wD^{-1}f\|_2\le\frac{\|wf\|_2}{\gamma-\delta}.$$
These are estimates for the constant linear asymptotic model. They make no assertion about nonlinear strip decay, a variable-coefficient operator, or its Maslov index.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, the product planes, angles, completions, and weights in the statement.

[F1] The complex exponentials form a complete orthonormal basis on a circle, with Parseval and norm-convergent expansions, by [[thm-fourier-basis-and-parseval-on-the-n-torus]], rescaled to a circle of length two.

[F2] Smooth compactly supported real or complex functions are dense in $L^2(\mathbb R)$ and in $H^1(\mathbb R)$, by [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] with $k=0,1$ and $p=2$.

[F3] Nonnegative iterated integrals may be interchanged by [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

## Proof

1.1 For one component set $\lambda_n=\pi n-\theta$ and $e_n(t)=e^{-i\lambda_nt}$ for $n\in\mathbb Z$. These satisfy the specified real boundary lines, $i e'_n=\lambda_ne_n$, and form an orthonormal basis of the real Hilbert space $L^2([0,1];\mathbb C)$ with pairing $\operatorname{Re}\int v\overline z$. Orthogonality follows by integrating $\cos(\pi(n-l)t)$. For completeness, multiply $v(t)$ by $e^{-i\theta t}$, reflect to $[-1,0]$ by $g(-t)=\overline{g(t)}$, and regard the extension as a length-two periodic $L^2$ function. Its complex Fourier coefficient at mode $e^{-i\pi nt}$ is real and equals $\operatorname{Re}\int_0^1g(t)e^{i\pi nt}\,dt$, precisely the real coefficient of $v$ at $e_n$. Fourier completeness in [F1] proves real completeness, and the Parseval identity follows by the same extension, whose squared norm is twice that of $g$ on $[0,1]$. Moreover $|\lambda_n|\ge\min\{\theta,\pi-\theta\}$. [F1, given, construct, algebra]

2.1 For a smooth compactly supported boundary-compatible map write $a_{j,n}(s)=\operatorname{Re}\int_0^1 u_j(s,t)\overline{e_{j,n}(t)}\,dt$. Differentiation in $s$ commutes with this integral. Integration by parts in $t$ shows that the coefficient of $i u_t$ is $\lambda_{j,n}a_{j,n}$: the real part of its boundary term $iu_j\overline{e_{j,n}}$ vanishes at both ends because the factors there are on the same real line. Parseval and [F3] give
$$\|u\|_{H^1}^2=\sum_{j,n}\int_{\mathbb R}\left(|a'_{j,n}|^2+(1+\lambda_{j,n}^2)|a_{j,n}|^2\right)ds.$$
Thus finite modal truncations converge in $H^1$, and $D$ acts on coefficients as $a\mapsto a'+\lambda a$. Each truncation is still smooth, compactly supported in $s$, and satisfies the boundary conditions. Passing to the completion preserves these identities and identifies its elements with coefficient families of finite displayed norm. Conversely every such family is obtained by first truncating its countable mode sum and then using [F2] for its finitely many $H^1(\mathbb R)$ coefficients. [F1, F2, F3, step 1.1, algebra]

3.1 For a real $b\in L^2(\mathbb R)$ and $\lambda\ne0$, define
$$a(s)=\begin{cases}\displaystyle\int_{-\infty}^{s}e^{-\lambda(s-r)}b(r)\,dr,&\lambda>0,\\\displaystyle-\int_s^{\infty}e^{-\lambda(s-r)}b(r)\,dr,&\lambda<0.\end{cases}$$
The absolute value of the kernel is nonnegative with $L^1$ norm $|\lambda|^{-1}$. Weighted Cauchy–Schwarz gives $|a(s)|^2\le |\lambda|^{-1}\int |K(s-r)|\,|b(r)|^2dr$; integration and [F3] give $\|a\|_2\le|\lambda|^{-1}\|b\|_2$. Initially for smooth compactly supported $b$, direct differentiation proves $a'+\lambda a=b$, hence $\|a'\|_2\le2\|b\|_2$ and $\|\lambda a\|_2\le\|b\|_2$. Approximation by [F2] passes these identities to every $b\in L^2$, with the derivative in the weak sense. There is no other $H^1$ solution: a difference has $(e^{\lambda s}a)'=0$ distributionally and hence equals $Ce^{-\lambda s}$, which is in $L^2(\mathbb R)$ only if $C=0$. To justify the distributional constant assertion, any smooth compact test of integral zero is the derivative of another compactly supported smooth test; a distribution annihilating all such tests is a constant distribution. [F2, F3, construct, algebra]

4.1 Apply step 3.1 to each real coefficient of $f$, using the modes of step 1.1 componentwise. By step 2.1 the resulting family is an element $u\in H^1_\theta$ and $Du=f$, with
$$\|u\|_2^2\le\gamma^{-2}\|f\|_2^2,\qquad \|u_s\|_2^2\le4\|f\|_2^2,\qquad \|u_t\|_2^2\le\|f\|_2^2.$$
For a finite smooth modal forcing the convolution solutions are smooth with exponential tails, so multiplying by cutoffs tending to one also places them in the defining completion; this is consistent with the coefficient characterization in step 2.1. The scalar uniqueness assertion proves injectivity. The estimate $\|Du\|_2\le\|u_s\|_2+\|u_t\|_2$ proves boundedness of $D$, while the displayed bounds prove boundedness of its inverse $Q$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Multiplication by the locally Lipschitz scalar $w=e^{\delta|s|}$ preserves the real boundary conditions and obeys the weak product rule locally. Explicitly $w'=\delta\operatorname{sign}(s)w$ almost everywhere, with no point-mass term at zero because $w$ is continuous. The rule follows first by integrating by parts separately on the two half-strips, whose boundary terms at zero cancel, and then by local $H^1$ approximation, supplied by the finite modal truncations and [F2] in step 2.1. Hence conjugating the weighted problem by $v=wu$ gives
$$wD(w^{-1}v)=Dv-Bv,\qquad Bv=\delta\operatorname{sign}(s)v.$$
This also shows that $D$ maps the stated weighted domain boundedly to $L^2_\delta$. [F2, step 2.1, given, algebra]

6.1 On $L^2$ the operator $BQ$ has norm at most $\delta/\gamma<1$, by step 4.1. Thus $(I-BQ)^{-1}=\sum_{r\ge0}(BQ)^r$ converges in operator norm, and
$$v=Q(I-BQ)^{-1}(wf)$$
is the unique solution of $(D-B)v=wf$. Indeed $(D-B)Q=I-BQ$, and for any $v\in H^1_\theta$, $QDv=v$ gives $v=Q(D-B)v+QBv$; the norm bound $\|QB\|_{L^2\to L^2}<1$ proves the homogeneous solution is zero. The norm of the inverse series is at most $(1-\delta/\gamma)^{-1}$. Combining this with the $H^1$ and $L^2$ bounds for $Q$ in step 4.1 proves both weighted inequalities, and step 5.1 carries existence and uniqueness back to $u=w^{-1}v$. [step 4.1, step 5.1, algebra] ∎
