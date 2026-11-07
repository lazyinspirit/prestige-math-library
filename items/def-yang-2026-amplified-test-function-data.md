---
dependency_level: 4
id: def-yang-2026-amplified-test-function-data
kind: definition
title: "Yang's 2026 Amplified Test-Function Data"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-yang-microlocalized-archimedean-whittaker-vector
  - lem-yang-amplifier-hecke-convolution-expansion
  - def-glnplus1-gln-period-and-relative-trace-kernel
  - lem-gln-last-row-congruence-subgroup-index
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), §§3.1–3.7"
      url: "https://arxiv.org/pdf/2309.07534v2"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $n\geq2$, put $G_p=\mathrm{GL}_{n+1}(\mathbb Q_p)$ and $K_p=\mathrm{GL}_{n+1}(\mathbb Z_p)$, and let $M,M',M''$ be positive integers with $M''>1$ and $M''\mid M'$. Let $\omega_p$ and $\omega'_p$ be unitary local central characters, with $\omega'_p$ of conductor exponent $m''=v_p(M'')$ and let $m'=v_p(M')$. For each prime $p$, fix a continuous unitary additive character $\psi_p$ of conductor $\mathbb Z_p$, so it is trivial on $\mathbb Z_p$ and nontrivial on $p^{-1}\mathbb Z_p$. Write $e=v_p(M)$. Assume the conductor exponent of $\omega_p$ is at most $e$ for every finite $p$, equivalently the finite conductor of this family divides $M$. Haar measures give $K_p$ and $K'_p=\mathrm{GL}_n(\mathbb Z_p)$ volume one, and multiplicative Haar measure gives $\mathbb Z_p^\times$ volume one. Define

$$K_p(M)=\left\{\begin{pmatrix}A&b\\c&d\end{pmatrix}\in K_p:c\in p^e\mathbb Z_p^{1\times n}\right\},$$

and define $K'_p(M')$ by the same last-row condition in $\mathrm{GL}_n(\mathbb Z_p)$. For a compactly supported function $h$ on $G_p$, write $h^*(g)=\overline{h(g^{-1})}$ and $h_1*h_2(g)=\int_{G_p}h_1(gg'^{-1})h_2(g')\,dg'$. For functions compact modulo $Z_p$ with $h(zg)=\omega_p(z)^{-1}h(g)$, the same convolution formula is instead integrated over $Z_p\backslash G_p$ with the quotient Haar measure. Its integrand is central-invariant: the two central factors are inverse to one another. The involution preserves this fixed unitary central-character class. Global convolution uses the corresponding adelic central quotient, as in the preceding relative-kernel convention. This distinction is required for all centrally projected factors below.

Choose a prime $p^\circ\nmid MM'$, a real number $L\geq1$, a finite set $\mathcal P\subset\{p\text{ prime}:L<p\leq2L,\ p\nmid p^\circ MM'\}$, and for every $p\in\mathcal P$ an integer $1\leq\ell_p\leq n+1$ and scalar $\alpha_p\in\mathbb C$. For $p\in\mathcal P$, set

$$T_{p,\ell}=p^{-n\ell/2}\mathbf1_{K_p\operatorname{diag}(p^\ell,I_n)K_p},\qquad T^*_{p,\ell}(g)=T_{p,\ell}(g^{-1}),$$

and

$$U_{p,i}=p^{-ni}\mathbf1_{K_p\operatorname{diag}(p^i,I_{n-1},p^{-i})K_p}\quad(0\leq i\leq\ell_p).$$

Central projection of a local function $h$ means $\mathcal C_{\omega_p}h(g)=\int_{\mathbb Q_p^\times}h(zg)\omega_p(z)\,d^\times z$. At $p\in\mathcal P$, put $f_p=\mathcal C_{\omega_p}T_{p,\ell_p}$. At a prime $p\nmid p^\circ MM'$ not in $\mathcal P$, put $f_p=\mathcal C_{\omega_p}\mathbf1_{K_p}$.

If $p\mid M$ and $p\nmid M'$, put $f_p=0$ off $Z_pK_p(M)$ and set

$$f_p(zk)=\operatorname{Vol}(K_p(M))^{-1}\omega_p(z)^{-1}\omega_p(k_{n+1,n+1})^{-1}\quad(z\in\mathbb Q_p^\times,\ k\in K_p(M)).$$

If $p\mid M'$, let $u_\alpha=\begin{pmatrix}I_n&b_\alpha\\0&1\end{pmatrix}$ with $b_\alpha={}^t(\alpha_1p^{-m'},\ldots,\alpha_{n-1}p^{-m'},\alpha_np^{-m''})$, where $\alpha_j\in\mathbb Z/p^{m'}\mathbb Z$ for $j<n$ and $\alpha_n\in(\mathbb Z/p^{m''}\mathbb Z)^\times$. Let

$$G(\omega'_p,\psi_p)=\sum_{a\in(\mathbb Z/p^{m''}\mathbb Z)^\times}\psi_p(ap^{-m''})\omega'_p(a),\qquad v_p=\operatorname{Vol}(K'_p(M'))^{-1}\operatorname{Vol}(K_p(M'))^{-1}p^{-(n-1)m'}G(\omega'_p,\psi_p)^{-1}.$$

Assume the displayed Gauss sum is nonzero, as it is for the primitive character in the source normalization. Put

$$\widetilde f_p(g)=v_p\sum_{\alpha_1,\ldots,\alpha_{n-1},\alpha_n}\omega'_p(\alpha_n)\int_{\mathbb Q_p^\times}\mathbf1_{u_\alpha K_p(M')}(zg)\omega_p(z)\,d^\times z,\qquad f_p=\widetilde f_p*\widetilde f_p^*.$$

At $p=p^\circ$, put $u_\beta=I_{n+1}+\beta p^{-1}E_{n,n+1}$ and $d=\operatorname{diag}(I_{n-1},p^{-1},p)$, and define

$$\widetilde f_{p^\circ}(g)=\int_{\mathbb Q_{p^\circ}^\times}\left(\sum_{\beta\in(\mathbb Z/p^\circ\mathbb Z)^\times}\psi_{p^\circ}(\beta(p^\circ)^{-1})\mathbf1_{u_\beta K_{p^\circ}}(zg)+\mathbf1_{dK_{p^\circ}}(zg)\right)\omega_{p^\circ}(z)\,d^\times z,\qquad f_{p^\circ}=\widetilde f_{p^\circ}*\widetilde f_{p^\circ}^*.$$

At infinity use $f_\infty$ from the preceding archimedean definition. For each $p\in\mathcal P$, take coefficients $c_{p,i}$ satisfying the Hecke-algebra identity

$$T_{p,\ell_p}*T^*_{p,\ell_p}=\sum_{i=0}^{\ell_p}c_{p,i}U_{p,i};$$

the coefficients used by Yang satisfy $|c_{p,i}|\ll_n1$. Let $f_{p,i}=\mathcal C_{\omega_p}U_{p,i}$. Define the diagonal and off-diagonal factorizable functions by

$$f^{\mathrm{diag}}_{p,i}=(f_\infty*f_\infty^*)\otimes f_{p,i}\otimes\!\bigotimes_{q\ne p}f_q,$$

$$f^{\mathrm{off}}_{p_1,p_2}=(f_\infty*f_\infty^*)\otimes f_{p_1}\otimes f_{p_2}^*\otimes\!\bigotimes_{q\ne p_1,p_2}f_q\quad(p_1\ne p_2\in\mathcal P),$$

and the amplified function

$$f^{\mathrm{amp}}=\sum_{p_1\ne p_2\in\mathcal P}\alpha_{p_1}\overline{\alpha_{p_2}}f^{\mathrm{off}}_{p_1,p_2}+\sum_{p\in\mathcal P}\sum_{i=0}^{\ell_p}c_{p,i}|\alpha_p|^2f^{\mathrm{diag}}_{p,i}.$$

This definition fixes the local normalizations and uses the coefficient family from the preceding Hecke-expansion statement. The existence and uniform bound for that family remain a separate theorem claim. This definition asserts no trace-formula identity, positivity, period estimate, or orbital-integral estimate.

## Definition references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, §§3.1–3.7](https://arxiv.org/pdf/2309.07534v2)


## Interface limits

The conductor bound makes $k\mapsto\omega_p(k_{n+1,n+1})$ a character for positive congruence exponent; [[lem-gln-last-row-congruence-subgroup-index]] proves this precise compatibility. The formula on $Z_pK_p(M)$ is then independent of the scalar decomposition $zk$. With the unit-volume convention above, the volume of the image of $K_p(M)$ in $Z_p\backslash G_p$ is its displayed $K_p(M)$ volume. At exponent zero the factor is the separate centrally projected spherical function, not a last-entry character on arbitrary $K_p$.

The archimedean microlocal function is generally smooth rather than finite under the maximal compact subgroup. Applying the compact-type-finite batch49 trace identity to it requires a proved approximation and uniform convergence extension; none is supplied by this definition. Positive-real split-center normalization and the exact inducing-character/basis dictionary must also be transported before invoking that identity. The correct conjugated involution and amplifier coefficients alone assert no positivity of a prescribed local period.

Source overbars were checked visually in Yang v2 printed13 (§3.1.8), printed15 (§3.4.2) and printed16 (3.12); text extraction drops them.
