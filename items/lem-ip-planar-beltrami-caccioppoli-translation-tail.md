---
id: lem-ip-planar-beltrami-caccioppoli-translation-tail
kind: lemma
title: Beltrami Caccioppoli translation and Fourier-tail estimates
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-ip-planar-cauchy-beurling-and-near-two-inversion
  - thm-plancherel
  - thm-holder-inequality-for-integrals
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 6.1, Theorem 6.1 and complete proof, printed p. 41; Section 6.2, frequency splitting (6.7)–(6.9), printed p. 43."
dependency_level: 1
---

## Statement

Assume Countable Choice. Let $D_j=\{z\in\mathbb C:|z|<j\}$, let $0\le\kappa<1$, and let $2<r\le p_\kappa$, where $p_\kappa$ is a near-two inverse exponent. Put $q=2r/(r-2)$, so $1/2=1/q+1/r$. Let $\mu,\nu$ be measurable, supported in $D_3$, and satisfy $\||\mu|+|\nu|\|_\infty\le\kappa$. Suppose $f\in W^{1,r}(D_3;\mathbb C)$ satisfies
$$\bar\partial f=\mu\partial f+\nu\overline{\partial f}$$
almost everywhere. Fix a real $\phi\in C_c^\infty(D_2)$ and extend $F=\phi f$ by zero. Then
$$\|\bar\partial F\|_r+\|\partial F\|_r\le C_{\kappa,r}\|f\nabla\phi\|_r.$$
For $\omega_p(g,t):=\sup_{|h|\le t}\|g(\cdot-h)-g\|_p$, $G=\bar\partial F$, and $U=\|f\|_{W^{1,r}(D_3)}$, one has, when $0<t\le1/2$,
$$\omega_2(G,t)+\omega_2(\phi\bar\partial f,t)\le C_{\kappa,r,\phi}U\bigl(\omega_q(\mu,t)+\omega_q(\nu,t)+t\bigr).$$
For the unitary angular Fourier transform and $T\ge6$, this implies
$$\|\mathbf1_{\{|\xi|\ge T\}}\widehat G\|_2\le C_{\kappa,r,\phi}U\bigl(\omega_q(\mu,3/T)+\omega_q(\nu,3/T)+T^{-1}\bigr).$$

## Statement references

[[lem-ip-planar-cauchy-beurling-and-near-two-inversion|Beurling isometry, translation commutation and real-linear inversion.]]

## Facts & Assumptions

**Given:** Countable Choice and the coefficients, solution, cutoff and exponents in the statement.

[F1] The Beurling transform is bounded on $L^r$, is isometric on $L^2$, commutes with translations, and $I-\mu\mathcal B-\nu\overline{\mathcal B}$ is invertible on $L^2$ and $L^r$ with controlled inverse norm. ([[lem-ip-planar-cauchy-beurling-and-near-two-inversion]])

[F2] Fourier transformation is unitary, with the usual differentiation and translation multipliers. Hölder applies to exponents $2,q,r$ with $1/2=1/q+1/r$. Compactly supported Sobolev functions can be approximated in Sobolev norm by compactly supported smooth functions. ([[thm-plancherel]], [[thm-holder-inequality-for-integrals]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[A1] Countable Choice is inherited through [F1]–[F2]. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Choose $\chi\in C_c^\infty(D_3)$ equal to $1$ on a neighborhood of $\overline D_2$. The function $\chi f$, extended by zero outside $D_3$, belongs to $W^{1,r}(\mathbb C)$: for each weak derivative, testing against a global compactly supported smooth function and using the local product rule gives the zero extension of $\chi\nabla f+f\nabla\chi$, with no boundary term because $\chi$ vanishes near $\partial D_3$. By [F2], choose global $g_n\in C_c^\infty(\mathbb C)$ converging to this extension in $W^{1,r}(\mathbb C)$. On a neighborhood of $\operatorname{supp}\phi$, $g_n\to f$ in $W^{1,r}$, so the ordinary smooth product rule for $\phi g_n$ passes to the limit and gives $F=\phi f\in W^{1,r}(\mathbb C)$ with $\bar\partial F=\phi\bar\partial f+f\bar\partial\phi$ and $\partial F=\phi\partial f+f\partial\phi$. Since $r>2$ and $F$ has bounded support, $F\in H^1(\mathbb C)$. In Fourier variables the two Wirtinger multipliers give $\partial F=\mathcal B\bar\partial F$: this holds first in $L^2$ and then in $L^r$ by the compatible Beurling extension. Setting $G=\bar\partial F$ and $H=f\bar\partial\phi-\mu f\partial\phi-\nu\overline f\,\overline{\partial\phi}$, the Beltrami equation becomes $(I-\mu\mathcal B-\nu\overline{\mathcal B})G=H$. Thus [F1] gives $\|G\|_r\le C_{\kappa,r}\|H\|_r\le C_{\kappa,r}\|f\nabla\phi\|_r$ and $\|\partial F\|_r\le\|\mathcal B\|_{r\to r}\|G\|_r$. This is the first assertion. [A1, F1, F2, given, algebra]

2.1 Write $\tau_hg=g(\cdot-h)$. Translating the equation in step 1.1, subtracting it, and using translation commutation gives $(I-\mu\mathcal B-\nu\overline{\mathcal B})(\tau_hG-G)=(\tau_h\mu-\mu)\mathcal B\tau_hG+(\tau_h\nu-\nu)\overline{\mathcal B\tau_hG}+\tau_hH-H$. Inverse boundedness on $L^2$ and Hölder therefore yield $\|\tau_hG-G\|_2\le C_\kappa[(\|\tau_h\mu-\mu\|_q+\|\tau_h\nu-\nu\|_q)\|\mathcal BG\|_r+\|\tau_hH-H\|_2]$. All terms are in $L^2$: the differentiated cutoff has compact support, $G\in L^r$, and the coefficient translation differences are in $L^q$ because the coefficients are bounded with fixed bounded support. [F1, F2, step 1.1, algebra]

3.1 For any smooth cutoff derivative $\psi$ supported in $D_2$, extend $f\psi$ by zero. It belongs to $H^1(\mathbb C)$ and $\|f\psi\|_{H^1}\le C_{r,\psi}U$ by Hölder on the bounded support. The fundamental theorem along line segments gives $\|\tau_h(f\psi)-f\psi\|_2\le|h|\|\nabla(f\psi)\|_2$ for smooth inputs; smooth approximation in [F2] gives the same inequality for this Sobolev function. Expand each coefficient product in $H$ by $\tau_h(\mu f\psi)-\mu f\psi=(\tau_h\mu-\mu)\tau_h(f\psi)+\mu(\tau_h(f\psi)-f\psi)$, and the analogous expression with $\nu\overline f$. Hölder gives $\|\tau_hH-H\|_2\le CU(\|\tau_h\mu-\mu\|_q+\|\tau_h\nu-\nu\|_q+|h|)$. Step 1.1 also gives $\|\mathcal BG\|_r\le CU$. Substitution in step 2.1, followed by the supremum over $|h|\le t$, proves the desired bound for $G$. Finally $\phi\bar\partial f=G-f\bar\partial\phi$, and the just-proved translation bound for $f\psi$ yields the second bound. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Average $\|\tau_hG-G\|_2^2$ over the square $[-2/T,2/T]^2$ with normalized Lebesgue measure. Plancherel identifies the resulting multiplier as $2[1-\operatorname{sinc}(2\xi_1/T)\operatorname{sinc}(2\xi_2/T)]$, where $\operatorname{sinc}(x)=\sin(x)/x$ and its value at zero is $1$. If $|\xi|\ge T$, one coordinate has magnitude at least $T/\sqrt2$, so one sinc factor has absolute value at most $1/\sqrt2$, while the other is at most $1$. The multiplier is therefore at least $2(1-1/\sqrt2)>0$ on this frequency set. Every shift in the square has norm at most $2\sqrt2/T<3/T$. Hence $\|\mathbf1_{\{|\xi|\ge T\}}\widehat G\|_2\le C\omega_2(G,3/T)$. Since $3/T\le1/2$, step 3.1 applies and gives the claimed tail bound. [F2, step 3.1, algebra] ∎
