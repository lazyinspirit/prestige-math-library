---
id: lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points
kind: lemma
title: Highest- and lowest-weight submodules at the exceptional parameters
status: draft
origin: pipeline
deps:
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - def-special-linear-lie-algebra-sl-two
  - def-one-parameter-subgroup-of-a-lie-group
  - thm-one-parameter-subgroups-are-exactly-exponentials
  - def-exponential-map-of-a-lie-group
  - def-universal-enveloping-algebra-as-a-tensor-quotient
  - prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra
  - thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights
  - def-fundamental-weights-for-a-chosen-simple-root-system
  - def-axiom-of-choice
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC supplies the normalized Haar probability on K used for algebraic K-weight projection and is inherited through the compact-picture and K-type suppliers. The finite-dimensional classification input adds no further choice."
verification:
  precheck: pass
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Examples 2.6–2.7, printed pp. 10–11 (the limit split and exceptional submodule/quotient diagrams)"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 Lecture 9)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec09.pdf"
      locator: "§9.1, formulas (4)–(5) and the short exact sequences, printed pp. 48–49 (with the model parameter s=-nu)"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix $\varepsilon\in\{0,1\}$ and $\nu\in\mathbb C$, and let $I^K_{\varepsilon,\nu}$ be the compact-picture $(\mathfrak g,K)$-module with K-type basis $f_m(k_\theta)=e^{im\theta}$ for $m\equiv\varepsilon\pmod2$ from [[lem-k-type-decomposition-of-the-sl2-principal-series]]. Use the compact-picture action of [[thm-compact-picture-of-the-sl2-principal-series]] and the basis $J,H,S,W,E_\pm$ and Casimir $\Omega$ normalized in [[def-k-finite-and-smooth-vectors-for-sl2-r]]. For real $X$, write $L_Xf=\left.\frac{d}{dt}\right|_{0}\Pi_\nu(\exp_G(tX))f$, and extend complex-linearly. Let $\mathcal W_\varepsilon=\{\nu\in\mathbb Z:\nu\equiv\varepsilon+1\pmod2\}$ from [[def-normalized-principal-series-i-epsilon-nu]].

**(a)** Let $n\in\mathcal W_\varepsilon$, $n\ge1$. Inside $I^K_{\varepsilon,n}$ set $M^-_{n+1}:=\bigoplus_{j\ge0}\mathbb Cf_{n+1+2j}$ and $M^+_{-(n+1)}:=\bigoplus_{j\ge0}\mathbb Cf_{-(n+1)-2j}$. Then $L_{E_-}f_{n+1}=0$, $L_{E_+}f_{-(n+1)}=0$, $M^+_{-(n+1)}$ is an irreducible highest-weight submodule of highest weight $-(n+1)$, and $M^-_{n+1}$ is an irreducible lowest-weight submodule of lowest weight $n+1$. Their direct sum is the unique maximal proper submodule, and the quotient is the finite-dimensional simple module $L_{n-1}$ with K-types $n-1,n-3,\dots,-(n-1)$ and dimension $n$.

**(b)** Let $n\in\mathbb Z$, $n\ge2$, and $\nu=n-1\in\mathcal W_\varepsilon$. Then $M^+_{-n}:=\bigoplus_{j\ge0}\mathbb Cf_{-n-2j}$ is an irreducible highest-weight submodule of highest weight $-n$, and $M^-_n:=\bigoplus_{j\ge0}\mathbb Cf_{n+2j}$ is an irreducible lowest-weight submodule of lowest weight $n$. The Casimir $\Omega$ acts on both by $\tfrac18((n-1)^2-1)$.

**(c)** For $\varepsilon=1$ and $\nu=0$, one has $I^K_{1,0}=M^-_1\oplus M^+_{-1}$, where $M^-_1=\bigoplus_{j\ge0}\mathbb Cf_{1+2j}$ and $M^+_{-1}=\bigoplus_{j\ge0}\mathbb Cf_{-1-2j}$ are the irreducible lowest- and highest-weight submodules, respectively. The Casimir acts on $I^K_{1,0}$ by $-\tfrac18$.

## Facts & Assumptions

**Given:** AC; the compact-picture representation of [[def-normalized-principal-series-i-epsilon-nu]]; and its K-finite module $I^K_{\varepsilon,\nu}$.

[F1] If $k_\theta g_0=a_u n_x k_\beta$ is the canonical $ANK$ factorization, the compact-picture action is $(\Pi_\nu(g_0)f)(k_\theta)=e^{(1+\nu)u/2}f(k_\beta)$ ([[thm-compact-picture-of-the-sl2-principal-series]]).

[F2] The K-finite module is the algebraic direct sum of the lines $\mathbb Cf_m$ of parity $m\equiv\varepsilon\pmod2$, with $\Pi_\nu(k_\phi)f_m=e^{im\phi}f_m$ and normalized Haar probability $dk=d\phi/(2\pi)$ ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F3] The compact-adapted matrices satisfy $W=-iJ$, $E_\pm=(H\pm iS)/2$, $[W,E_\pm]=\pm2E_\pm$, $[E_+,E_-]=W$, and $\Omega=\tfrac18W^2-\tfrac14W+\tfrac12E_+E_-$ ([[def-k-finite-and-smooth-vectors-for-sl2-r]]).

[F4] For $\mathfrak{sl}_2(\mathbb C)$, every finite-dimensional simple highest-weight module of dominant integral highest weight $m$ is the unique module denoted $L_m$ ([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]], [[def-fundamental-weights-for-a-chosen-simple-root-system]]).

[F5] A Lie-algebra action extends uniquely to a unital action of the enveloping algebra ([[def-universal-enveloping-algebra-as-a-tensor-quotient]], [[prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra]]).

[F6] The curves $t\mapsto\exp_G(tX)$ are the one-parameter subgroups with tangent $X$ ([[def-exponential-map-of-a-lie-group]], [[def-one-parameter-subgroup-of-a-lie-group]], [[thm-one-parameter-subgroups-are-exactly-exponentials]]).

[A1] AC supplies the normalized Haar probability used in [F2] and the finite K-orbit projections below ([[def-axiom-of-choice]]).

## Proof

**Given:** The hypotheses and notation in the Statement.

**Proof technique:** direct.

1.1 For $X=J,H,S$, define $L_Xf=\left.\frac{d}{ds}\right|_0\Pi_\nu(\exp_G(sX))f$ using [F6]; the matrix curves are $\exp(sJ)=k_s$, $\exp(sH)=\operatorname{diag}(e^s,e^{-s})$, and $\exp(sS)=\begin{pmatrix}\cosh s&\sinh s\\\sinh s&\cosh s\end{pmatrix}$. If $b(s)$ is the bottom row of $k_\theta\exp(sX)$, then the $ANK$ factorization in [F1] gives $b(s)=e^{-u(s,\theta)/2}(-\sin\beta(s,\theta),\cos\beta(s,\theta))$, so $e^{u/2}=1/\|b\|$ and $\partial_s\beta|_0=\det(b,b')/\|b\|^2$. At $s=0$, $b=(-\sin\theta,\cos\theta)$; for $J$, $\partial_s\log(e^{u/2})=0$ and $\beta'=1$; for $H$, $b'=(-\sin\theta,-\cos\theta)$, giving $\partial_s\log(e^{u/2})=\cos2\theta$ and $\beta'=\sin2\theta$; for $S$, $b'=(\cos\theta,-\sin\theta)$, giving $\partial_s\log(e^{u/2})=\sin2\theta$ and $\beta'=-\cos2\theta$. Differentiating [F1] yields $L_J=\partial_\theta$, $L_H=(1+\nu)\cos2\theta+\sin2\theta\,\partial_\theta$, and $L_S=(1+\nu)\sin2\theta-\cos2\theta\,\partial_\theta$. Hence $L_W=-i\partial_\theta$, $L_{E_\pm}=\tfrac12e^{\pm2i\theta}((1+\nu)\mp i\partial_\theta)$, and on each basis vector $L_Wf_m=mf_m$, $L_{E_+}f_m=\tfrac{1+\nu+m}{2}f_{m+2}$, and $L_{E_-}f_m=\tfrac{1+\nu-m}{2}f_{m-2}$. [F1, F3, F6, algebra]

1.2 If $v=\sum_{m\in S}c_mf_m$ is a finite K-type sum and $M$ is a K-stable submodule containing $v$, then $P_mv:=\int_K e^{-im\phi}\Pi_\nu(k_\phi)v\,dk=c_mf_m$. The orbit span of $v$ is finite dimensional and lies in $M$, hence is closed; its integral also lies in $M$. Thus every nonzero submodule contains some weight vector $f_m$. [F2, A1, algebra]

2.1 The operators in step 1.1 satisfy $[L_W,L_{E_\pm}]f_m=\pm2L_{E_\pm}f_m$. Also $L_{E_+}L_{E_-}f_m=\tfrac{\nu^2-(m-1)^2}{4}f_m$ and $L_{E_-}L_{E_+}f_m=\tfrac{\nu^2-(m+1)^2}{4}f_m$, so $[L_{E_+},L_{E_-}]f_m=mf_m=L_Wf_m$. Since the $f_m$ span $I^K_{\varepsilon,\nu}$, these relations make $X\mapsto L_X$ a Lie-algebra action there; [F5] gives its enveloping-algebra action. [F3, F5, step 1.1, algebra]

2.2 In part (a), at $\nu=n$ the coefficients in step 1.1 vanish at $L_{E_-}f_{n+1}$ and $L_{E_+}f_{-(n+1)}$, so the positive and negative tails displayed in the Statement are stable under $K,E_+,E_-$. On the positive tail, all upward coefficients are nonzero and every downward coefficient except the boundary one is nonzero, so step 1.2 shows any nonzero submodule contains a weight vector from which both directions generate the whole tail; the negative tail has the same property with the roles reversed. Hence both tails are irreducible, and their disjoint weights make their sum direct. [F2, step 1.1, step 1.2, algebra]

2.3 In part (b), at $\nu=n-1$ the coefficients are $L_{E_-}f_m=\tfrac{n-m}{2}f_{m-2}$ and $L_{E_+}f_m=\tfrac{n+m}{2}f_{m+2}$; hence $L_{E_-}f_n=0$, $L_{E_+}f_{-n}=0$, and all other coefficients along the two tails are nonzero, so [F2] and step 1.2 give the stated irreducible submodules. In part (c), at $\nu=0$ and odd weights, $L_{E_-}f_1=L_{E_+}f_{-1}=0$; the other coefficients along the positive and negative tails are nonzero, and these tails partition the entire odd basis, giving the stated direct sum of irreducible submodules. [F2, step 1.1, step 1.2, algebra]

2.4 For every weight $m$, [F3] and step 1.1 give $E_+E_-f_m=\tfrac{(1+\nu-m)(\nu+m-1)}4f_m=\tfrac{\nu^2-(m-1)^2}{4}f_m$. Therefore $\Omega f_m=(\tfrac{m^2}{8}-\tfrac m4+\tfrac{\nu^2-(m-1)^2}{8})f_m=\tfrac{\nu^2-1}{8}f_m$. At $\nu=n-1$ this is $\tfrac18((n-1)^2-1)$, and at $\nu=0$ it is $-\tfrac18$. [F3, step 1.1, algebra]

3.1 The quotient by the two tails has basis $\bar f_{n-1},\bar f_{n-3},\dots,\bar f_{-(n-1)}$, so it has dimension $n$. The class $\bar f_{n-1}$ is a highest-weight vector of weight $n-1$, since $L_{E_+}f_{n-1}$ lies in the positive tail. The positive root is determined by $[W,E_+]=2E_+$, so its coroot is $W$ and its fundamental weight $\omega$ satisfies $\omega(W)=1$; the highest weight is $(n-1)\omega$. Every nonzero $\mathfrak{sl}_2$-submodule of the quotient is $W$-stable, so a Lagrange interpolation polynomial in $W$ isolates a nonzero weight line; all ladder coefficients between consecutive weights in the finite range are nonzero, so the ladder operators generate every line. Thus the quotient is a finite-dimensional simple highest-weight module, hence $L_{n-1}$ by [F4]. [F2, F3, F4, step 1.1, step 2.2, algebra]

4.1 If a proper submodule of $I^K_{\varepsilon,n}$ contained any central weight $f_m$ with $-(n-1)\le m\le n-1$, step 1.1 shows the nonzero ladder coefficients move it through every weight of the parity class, making the submodule all of $I^K_{\varepsilon,n}$. By step 1.2 every submodule decomposes into its weight lines, so every proper submodule lies in the sum of the two tails. Since the quotient in step 3.1 is simple, that sum is the unique maximal proper submodule. [step 1.1, step 1.2, step 3.1, algebra]

5.1 Steps 2.2–4.1 establish part (a), step 2.3 establishes the irreducible submodules and direct sum in parts (b) and (c), and step 2.4 establishes both stated Casimir scalars. The case $n=1$ in part (a) has the one-dimensional quotient $\mathbb C\bar f_0$; no $n=0$ case is asserted there, and its separate odd-parameter case is part (c). [step 2.2, step 3.1, step 4.1, step 2.3, step 2.4] ∎
