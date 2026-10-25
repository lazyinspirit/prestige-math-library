---
id: lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function
kind: lemma
title: "The grand maximal function is pointwise dominated by a tangential maximal function"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-grand-maximal-test-class-of-order-n, def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, def-countable-choice, lem-schwartz-deconvolution-along-dyadic-dilations, lem-schwartz-dilations-preserve-schwartz-space, def-schwartz-space-and-its-seminorms, lem-schwartz-parameter-pairing-and-integral-interchange]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Cruz-Uribe SFO, Li-An Daniel Wang, Variable Hardy Spaces, arXiv:1211.6505 (2012)"
      url: "https://arxiv.org/pdf/1211.6505"
      locator: "section 3.1, printed p. 9 (PDF p. 10): the proof of inequality (3.1), $\\|M_Nf\\|_p\\le C\\|M_{\\Phi,T}f\\|_p$ for $N\\ge T+n+1$"
    - title: "Marcin Bownik, Anisotropic Hardy Spaces and Wavelets, Memoirs of the American Mathematical Society 164 (2003), no. 781"
      url: "https://pages.uoregon.edu/mbownik/papers/12-memo0781.pdf"
      locator: "Chapter 1, Section 7, Lemma 7.5 and its proof, printed pp. 45-46: pointwise domination of the grand maximal function by the tangential one"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$, $T>0$ and let $\varphi\in\mathcal S(\mathbb R^n)$ with
$\int\varphi\ne0$. Then there are $N=N(n,\varphi,T)$ and
$C=C(n,\varphi,T)<\infty$ such that for every $f\in\mathcal S'(\mathbb R^n)$
and every $x\in\mathbb R^n$,
$$M_Nf(x)\le C\,M_{\varphi,T}f(x),$$
where $M_N$ is the grand maximal function of
[[def-grand-maximal-test-class-of-order-n]] and $M_{\varphi,T}$ is the
tangential maximal function
$M_{\varphi,T}f(x)=\sup_{t>0}\sup_{y}|(f*\varphi_t)(x-y)|(1+|y|/t)^{-T}$.
Consequently $\|M_Nf\|_{L^p}\le C\|M_{\varphi,T}f\|_{L^p}$ for every
$0<p\le\infty$, both sides extended values.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $T>0$, $\varphi\in\mathcal S$ with $\int\varphi\ne0$, $f\in\mathcal S'$.

[F1] Deconvolution: for every $\psi\in\mathcal S$ and every choice of positive integer parameters $L',N'$ there are $C_{\mathrm{dec}},M_{\mathrm{dec}},s_0$ and $\eta^j\in\mathcal S$ with $\psi=\sum_{j\ge0}\eta^j*\varphi_{s_02^{-j}}$ in $\mathcal S$ and $\|\eta^j\|_{S_{N'}}\le C_{\mathrm{dec}}2^{-jnL'}\|\psi\|_{S_{M_{\mathrm{dec}}}}$ ([[lem-schwartz-deconvolution-along-dyadic-dilations]]); here $S_M$ is the norm $h\mapsto\sup_w(1+|w|)^M\max_{|\alpha|\le M}|\partial^\alpha h(w)|$. The supplier's weight $\max(1,|w|)^M$ and this weight satisfy $\max(1,|w|)^M\le(1+|w|)^M\le2^M\max(1,|w|)^M$; absorb $2^{N'}$ in $C_{\mathrm{dec}}$.

[F2] If $\Psi\in\mathcal S$ and $t>0$, then $(f*\Psi_t)(x)=\int_{\mathbb R^n}(f*\varphi_{st})(x-w)\,\eta_t(w)\,dw$ whenever $\Psi=\eta*\varphi_s$ in the sense of the decomposition of [F1]: apply [[lem-schwartz-parameter-pairing-and-integral-interchange]] to $H(w)(z)=\eta_t(w)\varphi_{st}(x-w-z)$. Each Schwartz seminorm of this family is bounded by $C(1+|w|)^m|\eta_t(w)|$, an integrable function because $\eta_t$ is Schwartz. The interchange proves the identity. Applying continuity of $f$ to the reflected translate of each partial sum in [F1] also justifies passage to the series; the subsequent nonnegative estimates apply to finite sums first, then to their limit.

[F3] The translated kernel $\psi^v(w)=\psi(w+v)$ satisfies $S_M(\psi^v)\le2^M S_M(\psi)$ for $|v|\le1$, and if $P_N(\psi)\le1$ then $S_M(\psi)\le1$ for $M\le N$ ([[def-grand-maximal-test-class-of-order-n]], [[def-schwartz-space-and-its-seminorms]]).



**Proof technique:** insert the dyadic deconvolution identity and sum the rapidly decaying coefficients.

## Proof

**Proof technique:** direct.

1.1 Single-kernel estimate. Choose integers $L'>T$ and $N'>T+n$ (for example, $L'=\lfloor T\rfloor+1$ and $N'=\lfloor T+n\rfloor+1$), and apply [F1] with these parameters, obtaining $C_{\mathrm{dec}},M_{\mathrm{dec}},s_0$. By the smaller-scale clause of [F1], decrease $s_0$ if necessary so that $s_0\le1$. Take an integer $N\ge\max(M_{\mathrm{dec}},N')$. Fix $\psi\in\mathcal F_N$, $t>0$ and $x$; write the deconvolution of [F1] and set $s=s_02^{-j}$. If $M_{\varphi,T}f(x)=+\infty$, the desired estimate is immediate. Otherwise, by [F2], $$|(f*\psi_t)(x)|\le\sum_{j\ge0}\int_{\mathbb R^n}|(f*\varphi_{st})(x-w)|\,|\eta^j_t(w)|\,dw\le M_{\varphi,T}f(x)\sum_{j\ge0}\int_{\mathbb R^n}\Bigl(1+\frac{|w|}{st}\Bigr)^T|\eta^j_t(w)|\,dw,$$ where we used the definition of $M_{\varphi,T}f(x)$ with the displacement $w$ at scale $st$. Substituting $w=tu$ and using $\eta^j_t(tu)=t^{-n}\eta^j(u)$ gives $$\int_{\mathbb R^n}\Bigl(1+\frac{|w|}{st}\Bigr)^T|\eta^j_t(w)|\,dw=\int_{\mathbb R^n}\Bigl(1+\frac{|u|}{s}\Bigr)^T|\eta^j(u)|\,du\le s^{-T}\int_{\mathbb R^n}(1+|u|)^T|\eta^j(u)|\,du\le C_{T,N'}s^{-T}\|\eta^j\|_{S_{N'}}\le C'\,2^{jT}2^{-jnL'}\|\psi\|_{S_{M_{\mathrm{dec}}}},$$ since $s\le1$, $N'>T+n$ makes $(1+|u|)^{T-N'}$ integrable, and [F1] gives $\|\eta^j\|_{S_{N'}}\le C2^{-jnL'}\|\psi\|_{S_{M_{\mathrm{dec}}}}$. Also $\|\psi\|_{S_{M_{\mathrm{dec}}}}\le1$ by the choice of $N$. The series converges because $nL'>T$, so $|(f*\psi_t)(x)|\le C''M_{\varphi,T}f(x)$ with $C''$ independent of $\psi,t,x$. [F1, F2, F3, algebra]

2.1 Aperture. For $t>0$ and $y$ with $|x-y|\le t$ write $v=(y-x)/t$, so $|v|\le1$, and let $\psi^v(w)=\psi(w+v)$; then $(f*\psi_t)(y)=(f*\psi^v_t)(x)$: both equal $t^{-n}\langle f_w,\psi((y-w)/t)\rangle$ and $t^{-n}\langle f_w,\psi((x-w)/t+v)\rangle=t^{-n}\langle f_w,\psi((y-w)/t)\rangle$. By [F3], $S_{M_{\mathrm{dec}}}(\psi^v)\le 2^{M_{\mathrm{dec}}}S_{M_{\mathrm{dec}}}(\psi)\le2^{M_{\mathrm{dec}}}$, so the kernel $\Psi=\psi^v/2^{M_{\mathrm{dec}}}$ satisfies $\|\Psi\|_{S_{M_{\mathrm{dec}}}}\le1$; the argument of step 1.1 uses only this bound on the kernel and the deconvolution of [F1] with the kernel $\varphi$, so it applies verbatim to $\Psi$ and gives $|(f*\Psi_t)(x)|\le C''M_{\varphi,T}f(x)$. Since $(\psi^v/2^{M_{\mathrm{dec}}})_t=\psi^v_t/2^{M_{\mathrm{dec}}}$ and $(f*\psi_t)(y)=(f*\psi^v_t)(x)$, multiplying by $2^{M_{\mathrm{dec}}}$ gives $|(f*\psi_t)(y)|\le C''2^{M_{\mathrm{dec}}}M_{\varphi,T}f(x)$. Taking the supremum over $\psi\in\mathcal F_N$, $t>0$ and $|x-y|\le t$ gives $M_Nf(x)\le CM_{\varphi,T}f(x)$. The $L^p$ statement follows by monotonicity of the integral; for $p=\infty$ it is the pointwise bound. [step 1.1, F3, given, algebra]

3.1 Conclusion. Step 1.1 controls a single test kernel by the tangential maximal function with a rapidly convergent deconvolution expansion, and step 2.1 removes the aperture restriction by translating the kernel; the class $\mathcal F_N$ is then dominated pointwise. This proves the lemma. [step 1.1, step 2.1] ∎
