---
id: lem-full-level-gl2-distribution-rankin-selberg-unfolding
kind: lemma
title: "Absolute Unfolding of the Full-Level GL2 Distribution Rankin–Selberg Pairing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-full-level-gl2-automorphic-distribution
  - lem-periodic-distribution-fourier-coefficients-polynomial-growth
  - lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay
  - lem-full-level-gl2-triple-pairing-is-independent-of-smoothing
  - lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic
  - lem-full-level-gl2-eisenstein-distribution-intertwining-equation
  - def-euler-gamma-function
  - thm-identity-theorem-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§4, equations (4.18)–(4.40), printed pp.20–24; the proof here retains the smoothing through an Abel-damped Mellin calculation."
---

## Statement

Let $\tau_j\in(V^{-\infty}_{\lambda_j,\delta_j})^\Gamma$, $j=1,2$,
be full-level GL2 automorphic distributions with at least one cuspidal, and
write their affine Fourier coefficients as $a_n,b_n$. Set
$\eta\equiv\delta_1+\delta_2\pmod2$,
$s=(\nu+1)/2$, and $w=s-(\lambda_1+\lambda_2)/2$.
Normalize Haar measure on the positive component by
$dg=e^{-2t}\,dx\,dt\,d\theta$ in
$g=n_xa_tk_\theta$, where
$a_t=\operatorname{diag}(e^t,e^{-t})$ and $\theta$ is taken modulo $\pi$.
Let $P_\nu=P_\nu(\tau_1,\tau_2,E_\nu)$ use this measure and smoothing
functions of total integral one. Then for $\operatorname{Re}\nu$
sufficiently large all the unfolded smoothed integrals and the defining
Dirichlet series converge absolutely in the senses proved below, and
$$2P_\nu=(-1)^{\delta_1}G_\eta(w)\,\zeta(2s)\sum_{n\ge1}a_nb_n n^{-w}.$$
Here $G_0(w)=2(2\pi)^{-w}\Gamma(w)\cos(\pi w/2)$ and
$G_1(w)=2i(2\pi)^{-w}\Gamma(w)\sin(\pi w/2)$.
The Mellin calculation uses Abel damping before reversing its integration
order; it asserts no absolute convergence for an unsmoothed oscillatory
Mellin integral. No choice principle is assumed.

## Statement references

[[lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic|the global pairing and Eisenstein normalization]]

## Facts & Assumptions

**Given:** The distributions, parameters, Haar normalization, and Fourier coefficients in the Statement.

[F1] [[lem-periodic-distribution-fourier-coefficients-polynomial-growth]] gives polynomial bounds on $a_n,b_n$.

[F2] [[lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic]] constructs the Eisenstein lattice sum, with $E_\nu=\zeta(\nu+1)\sum_{\Gamma/\Gamma_\infty}\pi(\gamma)\delta_\infty$ for $\operatorname{Re}\nu>1$, by separating primitive vectors from their positive integer multiples. Here $\delta_\infty$ has reciprocal-chart value the Dirac mass at zero.

[F3] [[lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay]] gives fixed-order compact-picture estimates and repeated-differentiation cusp decay in a cuspidal factor. Its proof of decay in the first variable uses full-level invariance only for that factor; the other two factors may be arbitrary fixed distribution sections.

[F4] [[lem-full-level-gl2-triple-pairing-is-independent-of-smoothing]] permits any normalized compact smoothing function, including its left-$K$ average supported in the positive component.

[F5] [[lem-full-level-gl2-eisenstein-distribution-intertwining-equation]], proof step 1.1, constructs and uniquely identifies the nonzero-frequency sections $B_{n,\lambda}$ from their affine values $e^{2\pi inx}$.

[F6] [[def-euler-gamma-function]] and [[thm-identity-theorem-holomorphic-functions]] give $\int_0^\infty x^{w-1}e^{-zx}\,dx=\Gamma(w)z^{-w}$ for $\operatorname{Re}w,\operatorname{Re}z>0$, first for positive real $z$ by substitution and then throughout the right half-plane.

## Proof

**Given:** The data in the Statement. First suppose $\tau_1$ is cuspidal.

1.1 Choose the smoothing function $\psi$ supported in the positive component and left-$K$-invariant, by averaging a compact smooth bump over the rotation circle and normalizing its total integral, using [F4]. Replace $E_\nu$ by its sum in [F2]. For a single $\delta_\infty$ term the resulting smoothed function on $\Gamma_\infty\backslash G$ is periodic in the left $n_x$ variable. As $t\to+\infty$ its absolute value decays faster than any prescribed exponential after including Haar measure: [F3] applies to the cuspidal first factor, while the other factors have fixed polynomial group growth. As $t\to-\infty$, the third factor has the exact homogeneity $\delta_\infty(n_xa_tks)=e^{(\nu+1)t}\delta_\infty(ks)$ as a distribution in $k$, where $s=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. This follows by the reciprocal coordinate Jacobian $e^{2t}$ and the right-character multiplier $e^{(\nu-1)t}$. Pull this factor out before applying the finite-order estimates to the first two slots. Those slots have a bound $C_\nu e^{-2Mt}$ for $t\le0$, with $M$ independent of $\nu$, since their parameters and distribution orders are fixed and the remaining third-slot variable is compact. Including $e^{-2t}$ from Haar measure bounds the negative tail by $C_\nu e^{(\operatorname{Re}\nu-1-2M)t}$, which is integrable for $\operatorname{Re}\nu>1+2M$. [F2, F3, F4, algebra]

1.2 Take the compact unipotent character projections of each $\tau_j$. Their Fejér sums converge in distributions on the full projective line: for every test this is ordinary Fejér convergence of its smooth, periodic unipotent orbit pairing, and compactness of the translation interval gives a common finite-order bound for all means. Tensor evaluation passes to the limit by the same uniform bound and separated-test approximation used in [F3]. The nonzero projections are $a_\ell B_{\ell,\lambda_1}$ and $b_\ell B_{\ell,\lambda_2}$ by [F5]. The zeroth projection of $\tau_1$ vanishes on the full projective line by the cuspidal average proved in [F3]. Since $\delta_\infty$ is left-$N$-invariant, integration over $0\le x\le1$ kills every pair of projections except the pair with frequencies $\ell,-\ell$, $\ell\ne0$. Initially perform this operation on finite Fejér sums. [F3, F5, construct, algebra]

2.1 Thus the single-term smoothed function is absolutely integrable on $\Gamma_\infty\backslash G$ for a sufficiently far right half-plane. Summing its absolute integrals over coset translates of a fundamental domain for $\Gamma\backslash G$ gives exactly that finite unfolded integral. Consequently the Eisenstein sum can be integrated after smoothing and unfolded there: $P_\nu=\zeta(\nu+1)\int_{\Gamma_\infty\backslash G}\int_G\tau_1(gh)\tau_2(ghn_1)\delta_\infty(ghs)\psi(h)\,dh\,dg$. One can take increasing finite coset sets; their absolute tails are bounded by the just-proved integral, so no unsupported distributional exchange is needed. On compact sets the same partial sums agree with [F2]. [step 1.1, F2, algebra]

3.1 In the remaining integral write the smoothing variable as $h=k n_u a_v$; Haar measure in these coordinates is $dk\,du\,dv$. The distribution $\delta_\infty(a_t k n_u a_v s)$ is supported at $k=e$, modulo $\pi$, and integration against $dk=d\theta$ evaluates there with factor $e^{(\nu+1)t+(\nu-1)v}$. At $k=e$, the two nonzero-frequency affine values are $e^{(1-\lambda_1)(t+v)}e(\ell e^{2t}u)$ and $e^{(1-\lambda_2)(t+v)}e(-\ell(e^{2t}u+e^{2(t+v)}))$. These formulas follow by multiplying the displayed matrices and using right $B$-equivariance. Their $u$-phases cancel. The original outer rotation variable contributes its volume $\pi$ because $\psi$ is left-$K$-invariant. Put $\psi_A(v)=\int_{\mathbb R}\psi(n_u a_v)\,du$. Then normalization of $\psi$ gives $\pi\int\psi_A(v)\,dv=1$. Combining the two section weights, the Dirac Jacobian, and $e^{-2t}$ from the outer Haar measure gives $\pi\int_{\mathbb R}\int_{\mathbb R}e^{(\nu+1-\lambda_1-\lambda_2)(t+v)}e(-\ell e^{2(t+v)})\psi_A(v)\,dv\,dt$ for each frequency. [step 2.1, step 1.2, algebra]

4.1 Set $x=e^{2t}$, $y=e^{2v}$, and $\phi(y)=\pi\psi_A((\log y)/2)$. Then $\phi\in C_c^\infty(0,\infty)$ and $\int_0^\infty\phi(y)\,dy/y=2$. Step 3.1 becomes $P_\nu=\zeta(\nu+1)\sum_{\ell\ne0}a_\ell b_{-\ell}M_\ell(w)/4$, where $M_\ell(w)=\int_0^\infty x^{w-1}\int_0^\infty y^{w-1}\phi(y)e(-\ell xy)\,dy\,dx$. The inner integral is the Fourier transform of a compactly supported smooth function. Repeated integration by parts in $y$ bounds it by $C_L(1+|\ell|x)^{-L}$ for every fixed $L$. Near $x=0$ it is bounded. For $\operatorname{Re}w>0$, substitution $u=|\ell|x$ therefore gives an absolute outer-integral bound $C_w|\ell|^{-\operatorname{Re}w}$. By [F1] the frequency sum of these bounds converges when $\operatorname{Re}w$ is sufficiently large. This justifies passing from the finite Fejér expressions in step 1.2 to the full summed formula, including their outer integrals. [step 1.2, step 3.1, F1, algebra]

5.1 To evaluate $M_\ell(w)$, retain the smoothing and insert $e^{-\epsilon x}$, $\epsilon>0$. For $\operatorname{Re}w>0$ the damped double integral is absolutely integrable, so [F6] evaluates its inner $x$-integral as $\Gamma(w)(\epsilon+2\pi i\ell y)^{-w}$. Sending $\epsilon\downarrow0$ in that formula is uniform on the compact $y$ support. Sending it to zero in the original outer integral is legitimate by the absolute outer-integral bound of step 4.1. Since $\int\phi(y)\,dy/y=2$, this yields $M_\ell(w)=2\Gamma(w)(2\pi)^{-w}|\ell|^{-w}e^{-i\pi w\operatorname{sgn}(\ell)/2}$. This argument does not reverse the undamped oscillatory integral's order. [step 4.1, F6, algebra]

6.1 Full-level invariance under $\operatorname{diag}(-1,1)$ gives $a_{-n}=(-1)^{\delta_1}a_n$ and $b_{-n}=(-1)^{\delta_2}b_n$. Insert step 5.1 into step 4.1 and pair the positive and negative frequencies. The resulting phase factor is $(-1)^{\delta_2}e^{-i\pi w/2}+(-1)^{\delta_1}e^{i\pi w/2}$, equal to $(-1)^{\delta_1}2\cos(\pi w/2)$ for $\eta=0$ and to $(-1)^{\delta_1}2i\sin(\pi w/2)$ for $\eta=1$. Finally $\nu+1=2s$ and $n^{-w}=n^{(\lambda_1+\lambda_2)/2-s}$ give the displayed identity. [step 4.1, step 5.1, given, algebra]

7.1 If only $\tau_2$ is cuspidal, the same proof uses its slot for the positive-cusp estimate and its zero unipotent projection in steps 1.1 and 1.2. The character averaging still leaves exactly the same pairs $a_\ell b_{-\ell}$, the coordinate computation of step 3.1 is unchanged, and step 6.1 gives the same sign. Thus the formula holds under the stated at-least-one-cuspidal hypothesis. Every absolute estimate is in a sufficiently far right half-plane determined by the two fixed inputs; the remainder of the argument uses finite compact averaging, finite-order limits, and Abel damping. [step 1.1, step 1.2, step 3.1, step 6.1, algebra] ∎
