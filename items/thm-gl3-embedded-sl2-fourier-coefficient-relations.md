---
dependency_level: 6
id: thm-gl3-embedded-sl2-fourier-coefficient-relations
kind: theorem
title: "Embedded SL2 relations for GL3 Fourier coefficient distribution vectors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-full-level-gl3-automorphic-distribution, thm-gl3-heisenberg-fourier-expansion, lem-gl3-unipotent-character-descent-and-rank-one-boundary-model, thm-linear-change-of-variables-for-lebesgue-measure, lem-distribution-pairing-with-smooth-parameter-families, def-countable-choice, def-pullback-of-a-distribution-by-a-diffeomorphism]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), Lemma 3.26, Proposition 3.28, Corollary 3.38 and their full proofs"
      url: "https://arxiv.org/pdf/math/0408100v3"
---

## Statement

Assume Countable Choice. Let $\tau$ be a supplied $\Gamma$-invariant distribution vector in the normalized full-level GL3 principal-series model, with $\sum\lambda_j=0$, $\sum\delta_j=0$ and its Heisenberg coefficients. This includes every full-level cuspidal datum with its embedding supplied. Put
$$A_q(x)=\sum_r c_{r,q}e(rx),\quad B_q(y)=\sum_s c_{q,s}e(sy),\quad\mu_1=\lambda_1-\lambda_2,\quad\mu_2=\lambda_2-\lambda_3.$$
Use the natural rank-one distribution-vector extensions and actions from the unipotent descent lemma. Let $c\ne0$, $a,\bar a\in\mathbb Z$ satisfy $a\bar a\equiv1\pmod c$, and put $M=\begin{pmatrix}\bar a&-1/c\\c&0\end{pmatrix}\in\mathrm{SL}_2(\mathbb R)$. For every nonzero integer $q$ there are global identities
$$A_q=\psi_{\mu_1,\delta_3}(M)\sigma_{cq,aq},\qquad B_q(-\,\cdot)=\psi_{\mu_2,\delta_1}(M)\rho_{cq,aq}.$$
Thus, on the punctured line,
$$\sigma_{cq,aq}(x)=(\operatorname{sgn}(cx))^{\delta_3}|cx|^{\mu_1-1}\sum_r c_{r,q}e\left(\frac{r\bar a}{c}-\frac{r}{c^2x}\right),$$
$$\rho_{cq,aq}(y)=(\operatorname{sgn}(cy))^{\delta_1}|cy|^{\mu_2-1}\sum_s c_{q,s}e\left(\frac{s}{c^2y}-\frac{s\bar a}{c}\right).$$
The global identities include the prescribed boundary components, and are not merely punctured-line identities. They depend only on $\bar a$ modulo $c$.

The coefficient parities are
$$c_{-r,s}=(-1)^{\delta_1}c_{r,s},\qquad c_{r,-s}=(-1)^{\delta_3}c_{r,s},$$
$$\sigma_{-n,k}(x)=(-1)^{\delta_1}\sigma_{n,k}(-x),\quad\sigma_{-n,-k}(x)=(-1)^{\delta_3}\sigma_{n,k}(x),$$
$$\rho_{-n,-k}(y)=(-1)^{\delta_1}\rho_{n,k}(y),\quad\rho_{-n,k}(y)=(-1)^{\delta_3}\rho_{n,k}(-y).$$
The coefficients $c_{r,s}$ have at most polynomial growth in $|r|+|s|$. Also $A_0=0$ if $\delta_3=1$, while if $\delta_3=0$ it satisfies $A_0(x)=|x|^{\mu_1-1}A_0(-1/x)$; analogously $B_0=0$ if $\delta_1=1$ and otherwise $B_0(y)=|y|^{\mu_2-1}B_0(-1/y)$. These too are identities in the natural rank-one models. For the cuspidal datum, all $c_{r,0}$ and $c_{0,s}$ vanish.

The involution $\vartheta(g)=w_0(g^t)^{-1}w_0$, where $w_0$ reverses the three coordinates, sends the supplied model to parameters $(-\lambda_3,-\lambda_2,-\lambda_1)$ and $(\delta_3,\delta_2,\delta_1)$. Its pullback preserves $\Gamma$ invariance and interchanges the two global cuspidal zero-average conditions. Its Fourier coefficients satisfy $c'_{r,s}=c_{-s,-r}$, $\sigma'_{-n,-k}=\rho_{n,k}$ and $\rho'_{-n,-k}=\sigma_{n,k}$, with the compatible natural rank-one extensions. For $rs\ne0$ its normalized coefficients satisfy $a'_{r,s}=(-1)^{\delta_2}a_{s,r}$; therefore the phase-fixed dual $\widetilde\tau=(-1)^{\delta_2}\vartheta^*\tau$ has normalized coefficients $a_{s,r}$.

## Statement references

[Miller and Schmid, Lemma3.26, Proposition3.28 and Corollary3.38](https://arxiv.org/pdf/math/0408100v3)

## Facts & Assumptions

**Given:** The stated supplied model and [[def-countable-choice|Countable Choice]]. No classification or existence of an embedding is assumed beyond the given datum.

[F1] [[def-full-level-gl3-automorphic-distribution]] gives the right principal-series character, left action and $\Gamma$ invariance. [[thm-gl3-heisenberg-fourier-expansion]] gives unique strong Fourier coefficients on the compact nilmanifold.

[F2] [[lem-gl3-unipotent-character-descent-and-rank-one-boundary-model]] constructs natural rank-one vectors, their translations/reflection, the coefficient covariance $v_\chi=\psi(\gamma)v_{\chi\circ\operatorname{Ad}\gamma}$, and global vanishing of the two zero-character averages for cuspidal data.

[F3] [[thm-linear-change-of-variables-for-lebesgue-measure]] and [[lem-distribution-pairing-with-smooth-parameter-families]] justify the compact torus substitutions and their application to distributions. [[def-pullback-of-a-distribution-by-a-diffeomorphism]] gives the coordinate pullbacks used for the outer involution.

## Proof

**Given:** The stated data.

1.1 Put $b=(a\bar a-1)/c\in\mathbb Z$ and $\gamma_1=\begin{pmatrix}\bar a&b\\c&a\end{pmatrix}$ in the upper-left embedded $\mathrm{SL}_2(\mathbb Z)$. Its conjugation on $H_1$ acts on the column $(z,y)$ by $\gamma_1$. Thus the character $qy$ becomes $cqz+aqy$. The covariance in [F2] gives [F1, F2, F3, given, algebra]
$$A_q=\psi(\gamma_1)v^{(1)}_{aq,cq}=\psi(\gamma_1)\psi(n(-a/c))\sigma_{cq,aq}=\psi(M)\sigma_{cq,aq},$$
since $\gamma_1n(-a/c)=M$. This is a global rank-one identity by the descent construction, including the second chart. [F1, F2, F3, given, algebra]

1.2 For a diagonal sign matrix $m=\operatorname{diag}(\epsilon_1,\epsilon_2,\epsilon_3)\in\Gamma$, its character and conjugation give [F1, F2, given, algebra]
$$\tau(\epsilon_1\epsilon_2x,\epsilon_2\epsilon_3y,\epsilon_1\epsilon_3z)=\left(\prod_j\epsilon_j^{\delta_j}\right)\tau(x,y,z).$$
Compare the two Heisenberg expansions in [F1], first with $\epsilon_1=-1$ and then with $\epsilon_3=-1$, all other signs positive. Their coefficient uniqueness gives exactly the six displayed parity relations. The same diagonal matrices preserve the product flag orbits, so character descent in [F2] transports these relations to the natural rank-one extensions as well; no boundary distribution is discarded. Finite distribution order of $\tau$ on the compact quotient bounds $|c_{r,s}|=|\langle\tau,e(-rx-sy)\rangle|$ by a fixed finite derivative seminorm of this test, hence by $C(1+|r|+|s|)^L$. This proves the asserted polynomial bound. [F1, F2, given, algebra]

2.1 For the other model use $\gamma_2=\begin{pmatrix}\bar a&-b\\-c&a\end{pmatrix}$ in the lower-right copy. Its conjugation on the row $(x,w)$ is right multiplication by $\gamma_2^{-1}=\begin{pmatrix}a&b\\c&\bar a\end{pmatrix}$. Hence the character $qx$ again becomes $aqx+cqw$. By [F2], [F1, F2, F3, step 1.1, algebra]
$$B_q=\psi(\gamma_2)v^{(2)}_{aq,cq}=\psi(\gamma_2)R\psi(n(-a/c))\rho_{cq,aq}.$$
Now $R\psi(\gamma_2)R=\psi(\gamma_1)$, so reflecting this identity gives $B_q(-\,\cdot)=\psi(M)\rho_{cq,aq}$. Inverting the two fractional-linear formulas of [F2], with reciprocal variable $1/(c(\bar a-cx))$, gives exactly the two displayed punctured formulas. No absolute value or sign of $c,q$ was restricted. Replacing $\bar a$ by $\bar a+ct$ replaces $M$ by $n(t)M$. Both $A_q$ and $B_q(-\,\cdot)$ are periodic under integral translations as global vectors, by the lattice covariance in [F2] with zero central frequency. Hence both global identities remain unchanged, including their boundary components. The index $aq$ depends only on $a$ modulo $c$. [F1, F2, F3, step 1.1, algebra]

2.2 The parity identities imply $A_0=0$ when $\delta_3=1$ and $B_0=0$ when $\delta_1=1$. The zero-character projection is fixed by the embedded integral Weyl matrix $w=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, by the covariance in [F2]. Its rank-one action therefore gives $A_0(x)=(\operatorname{sgn}x)^{\delta_3}|x|^{\mu_1-1}A_0(-1/x)$ and the analogous formula for $B_0$, globally in the two-chart model; in the nonzero cases the respective parity is even. Finally, the global cuspidal zero-average identities in [F2] imply $A_0=B_0=0$ and hence every $c_{r,0}=c_{0,s}=0$ by Fourier coefficient uniqueness. These conclusions include $q=0$ only in this stated zero-mode form, not in a formula with $cq=0$ in a denominator. [F1, F2, step 1.2, algebra]

3.1 For the outer involution, direct inversion and transpose give $\vartheta(n(x,y,z))=n(-y,-x,xy-z)$. It preserves $P$ and $\Gamma$, and sends a diagonal $(a_1,a_2,a_3)$ to $(a_3^{-1},a_2^{-1},a_1^{-1})$. Substitution in the given principal-series character gives exactly the displayed new parameters. It interchanges $H_1,H_2$ up to signs, preserving their integer lattices and normalized torus measures; hence it interchanges the two zero-average conditions. Substitute $(-y,-x,xy-z)$ into both Heisenberg expansions and reindex $(n,k)$ to $(-n,-k)$. Since $z-xy$ changes to $-z$, coefficient uniqueness gives the three stated primed-coefficient identities. They hold for the natural rank-one extensions because the involution carries the two product flag orbits, their frame characters and the descent construction into one another. For nonzero indices the coefficient normalization now gives [F1, F2, F3, step 1.2, step 2.2, algebra]
$$a'_{r,s}=c_{-s,-r}|r|^{-\lambda_3}|s|^{\lambda_1}(\operatorname{sgn}r)^{\delta_3}(\operatorname{sgn}s)^{\delta_1}=(-1)^{\delta_1+\delta_3}a_{s,r}=(-1)^{\delta_2}a_{s,r}.$$
Multiplication of the outer-image distribution by $(-1)^{\delta_2}$ removes precisely this scalar, proving the asserted phase-fixed normalization. This proves the involution assertion in addition to all preceding coefficient relations. [F1, F2, F3, step 1.2, step 2.2, algebra] ∎
