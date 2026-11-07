---
dependency_level: 8
id: thm-gl3-standard-and-twisted-l-function-functional-equation
kind: theorem
title: "Analytic Continuation and Functional Equation for Standard and Twisted GL3 L-Functions"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-full-level-gl3-automorphic-distribution
  - def-standard-gl3-l-function-and-dirichlet-twist
  - lem-gl3-standard-l-series-converges-in-a-right-half-plane
  - lem-gl3-cuspidal-coefficients-canonical-extensions
  - thm-gl3-heisenberg-fourier-expansion
  - thm-gl3-signed-mellin-transform-fourier-functional-equation
  - def-primitive-dirichlet-character-and-conductor
  - def-parity-dirichlet-character
  - def-gauss-sum-dirichlet-character
  - lem-primitive-gauss-sum-twist
  - thm-primitive-gauss-sum-norm
  - def-countable-choice
  - thm-gl3-embedded-sl2-fourier-coefficient-relations
  - lem-gl3-mellin-endpoint-pairing-and-cutoff-independence
  - lem-gl3-mellin-inversion-and-holomorphic-flatness-criterion
  - lem-gl3-homogeneous-fourier-mellin-kernel
  - thm-gl3-fourier-transform-preserves-infinite-order
  - thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-identity-theorem-holomorphic-functions
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §6, Theorem 6.15"
      url: "https://arxiv.org/pdf/math/0408100v3"
    - title: "Stephen D. Miller and Wilfried Schmid, Distributions and Analytic Continuation of Dirichlet Series, §§3–6"
      url: "https://arxiv.org/pdf/math/0403030v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Assume Countable Choice. Let $\tau$ be a cuspidal full-level GL3 automorphic distribution with parameters $\lambda=(\lambda_1,\lambda_2,\lambda_3)$ and $\delta=(\delta_1,\delta_2,\delta_3)$ satisfying $\sum_j\lambda_j=0$ and $\sum_j\delta_j=0$ in $\mathbb Z/2\mathbb Z$. Let $\chi$ be a primitive Dirichlet character of conductor $Q\geq1$, and let $\epsilon\in\{0,1\}$ be its parity, so that $\chi(-1)=(-1)^\epsilon$. Then $L(s,\tau\otimes\chi)$, $L(s,\widetilde\tau\otimes\overline\chi)$, $G_{\epsilon+\delta_3}(s+\lambda_3)L(s,\tau\otimes\chi)$, and $G_{\epsilon+\delta_1}(s-\lambda_1)L(s,\widetilde\tau\otimes\overline\chi)$ extend to entire functions of $s$ and are polynomially bounded on every vertical strip. They satisfy
$$L(1-s,\widetilde\tau\otimes\overline\chi)=Q^{3s}g_\chi^{-3}\left(\prod_{j=1}^3G_{\epsilon+\delta_j}(s+\lambda_j)\right)L(s,\tau\otimes\chi),$$
where $g_\chi=\sum_{k\bmod Q}\chi(k)e(k/Q)$ and $e(t)=\exp(2\pi i t)$.

## Statement references

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, §6, Theorem 6.15 and its proof](https://arxiv.org/pdf/math/0408100v3)


## Facts & Assumptions

**Given:** The stated datum, primitive $\chi$ of conductor $Q\ge1$, its parity $\epsilon$, and [[def-countable-choice|Countable Choice]]. All positive-base complex powers use the real logarithm.

[F1] [[def-standard-gl3-l-function-and-dirichlet-twist]] fixes the two Dirichlet series, the phase-fixed dual and $G,g_\chi$. [[lem-gl3-standard-l-series-converges-in-a-right-half-plane]] gives their initial right-half-plane convergence. [[def-full-level-gl3-automorphic-distribution]] gives coefficient normalization.

[F2] [[thm-gl3-embedded-sl2-fourier-coefficient-relations]] gives polynomial coefficient growth, the parity relations, both global reciprocal coefficient identities and the dual phase. [[lem-gl3-cuspidal-coefficients-canonical-extensions]] gives infinite flatness of all coefficient distributions at every rational point and at infinity.

[F3] [[thm-gl3-heisenberg-fourier-expansion]] gives the finite Fourier identity between $\rho_{Q,k}$ and $\widehat\sigma_{Q,l}$, with no extra scaling constant.

[F4] [[def-primitive-dirichlet-character-and-conductor]], [[def-parity-dirichlet-character]] and [[def-gauss-sum-dirichlet-character]] fix the arithmetic conventions. [[lem-primitive-gauss-sum-twist]] gives $\sum_k\chi(k)e(kl/Q)=\overline\chi(l)g_\chi$, including nonunits. [[thm-primitive-gauss-sum-norm]] gives $|g_\chi|^2=Q$.

[F5] [[thm-gl3-signed-mellin-transform-fourier-functional-equation]] gives the signed Fourier–Mellin equation. [[lem-gl3-mellin-endpoint-pairing-and-cutoff-independence]] and [[lem-gl3-mellin-inversion-and-holomorphic-flatness-criterion]] give entire, polynomial-vertical-growth Mellin transforms for distributions infinitely flat at both endpoints.

[F6] [[thm-gl3-fourier-transform-preserves-infinite-order]], [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] and [[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]] give canonical Fourier endpoint extensions, reflection under the double transform and the exact transforms of lattice point masses.

[F7] [[lem-gl3-homogeneous-fourier-mellin-kernel]] gives the polynomial vertical growth and $G_\nu(z)G_\nu(1-z)=(-1)^\nu$ for the parity index. [[thm-identity-theorem-holomorphic-functions]] gives continuation of the initially derived scalar identities; multiplying finite pole factors gives its meromorphic form.

## Proof

**Given:** The stated data.

1.1 The coefficient normalization and parities in [F2] imply $a_{-r,s}=a_{r,s}=a_{r,-s}$ for nonzero indices. Complex conjugation preserves primitivity, since an inducing character for the conjugate would conjugate back to an inducing character for the original. Conjugating the finite Gauss sum and replacing $k$ by $-k$ gives $\overline{g_\chi}=(-1)^\epsilon g_{\overline\chi}$. Thus [F4] implies [F1, F2, F4, F5, F6, given, algebra]
$$g_\chi g_{\overline\chi}=(-1)^\epsilon Q,$$
and both Gauss sums are nonzero. We will also use the following exact periodic Mellin computation. If $P(x)=\sum_{n\ne0}b_ne(nx)$ with polynomially growing $b_n$, put $D=\sum_{n\ne0}b_n\delta_n$. This is tempered and identically zero near zero; its Fourier transform is $P(-x)$ by [F6], with strong convergence against Schwartz tests. Apply [F5] to $D$ and use reflection parity. For $\operatorname{Re}z$ sufficiently large its absolutely convergent point-mass Mellin sum gives
$$M_\nu P(z)=G_\nu(z)\sum_{n\ne0}b_n(\operatorname{sgn}n)^\nu|n|^{-z}.$$
The endpoint cutoff agrees with this sum by absolute convergence. This derives, rather than assumes, the periodic Mellin formula used below. [F1, F2, F4, F5, F6, given, algebra]

2.1 First prove entireness of the two bare L-functions. The finite Gauss identity gives [F1, F2, F4, F5, F6, step 1.1, algebra]
$$P_\chi(x):=g_{\overline\chi}^{-1}\sum_{k\bmod Q}\overline\chi(k)D_1(x+k/Q)=\sum_{n\ne0}\chi(n)c_{1,n}e(nx).$$
Each shifted periodic distribution is infinitely flat at zero by its rational flatness in [F2]; hence so is $P_\chi$. Set $D_\chi=\sum_{n\ne0}\chi(n)c_{1,n}\delta_n$. It is zero near zero and its transform is $P_\chi(-x)$. Applying [F6] to that infinitely flat transform and reflecting proves that $D_\chi$ has a canonical infinitely flat infinity extension. Its Mellin transform is therefore entire with polynomial vertical growth by [F5], and the initial absolutely convergent sum gives
$$M_{\epsilon+\delta_3}D_\chi(1-s-\lambda_3)=2L(s,\tau\otimes\chi).$$
The two signs of $n$ give the factor two, since $\chi(n)(\operatorname{sgn}n)^\epsilon=\chi(|n|)$ and $a_{1,-n}=a_{1,n}$. Similarly the finite $\chi$-weighted shifts of $C_1$ produce the point-mass distribution $\widetilde D_{\overline\chi}=\sum_{n\ne0}\overline\chi(n)c_{n,1}\delta_n$, with
$$M_{\epsilon+\delta_1}\widetilde D_{\overline\chi}(1+\lambda_1-s)=2L(s,\widetilde\tau\otimes\overline\chi).$$
The same endpoint argument proves its entire continuation and polynomial vertical bounds. These formulas agree with the exact series of [F1], whose dual normalization is phase-fixed. [F1, F2, F4, F5, F6, step 1.1, algebra]

2.2 Put $\kappa=\epsilon+\delta_2$ modulo two and define the entire polynomial-vertical-growth functions [F2, F3, F4, F5, F7, step 1.1, algebra]
$$A(s)=\sum_{k\bmod Q}\chi(k)M_\kappa\rho_{Q,k}(1-s-\lambda_2),\qquad B(s)=\sum_{l\bmod Q}\overline\chi(l)M_\kappa\sigma_{Q,l}(s+\lambda_2).$$
They are entire by the two-endpoint flatness in [F2] and [F5]. Insert $a_k=\chi(k)$ in the finite Fourier relation [F3]. Its finite Fourier coefficients are $g_\chi\overline\chi(l)$ by [F4]. Mellin scaling of $\widehat\sigma(Qy)$ and then [F5] yield
$$A(s)=(-1)^\kappa g_\chi Q^{s+\lambda_2-1}G_\kappa(1-s-\lambda_2)B(s).$$
Initially this is obtained where the half-plane Fourier–Mellin equation applies; both sides are meromorphic globally, so [F7] continues the identity to all $s$. No meromorphic factor is treated as finite at its poles without cancellation. [F2, F3, F4, F5, F7, step 1.1, algebra]

3.1 For a unit $k$ modulo $Q$, let $\bar k$ be its inverse. The global $\rho$ relation [F2] gives [F1, F2, F4, F5, F7, step 1.1, step 2.2, algebra]
$$\rho_{Q,k}(t)=(\operatorname{sgn}t)^{\delta_1}|Qt|^{\lambda_2-\lambda_3-1}\sum_{n\ne0}a_{1,n}|n|^{\lambda_3}(\operatorname{sgn}n)^{\delta_3}e\left(\frac{n}{Q^2t}-\frac{n\bar k}{Q}\right).$$
Change $t$ to $1/t$ in its canonical Mellin pairing. For $\operatorname{Re}s$ sufficiently large, apply the periodic computation of step 1.1 and positive scaling by $Q^2$. This gives
$$M_\kappa\rho_{Q,k}(1-s-\lambda_2)=Q^{2s+\lambda_2+\lambda_3-1}G_{\epsilon+\delta_3}(s+\lambda_3)\sum_{n\ne0}a_{1,n}(\operatorname{sgn}n)^\epsilon|n|^{-s}e(-n\bar k/Q).$$
In the finite $k$ sum, inversion permutes the units and [F4] gives
$$(\operatorname{sgn}n)^\epsilon\sum_k\chi(k)e(-n\bar k/Q)=(-1)^\epsilon\chi(|n|)g_{\overline\chi}.$$
Consequently
$$A(s)=2(-1)^\epsilon g_{\overline\chi}Q^{2s+\lambda_2+\lambda_3-1}G_{\epsilon+\delta_3}(s+\lambda_3)L(s,\tau\otimes\chi).$$
Since $A$ is entire and the displayed scalar and positive-base exponential are nowhere zero, this supplies the entire continuation and polynomial strip bounds of the first weighted product in the Statement; its identity with the original product continues meromorphically by [F7]. [F1, F2, F4, F5, F7, step 1.1, step 2.2, algebra]

3.2 Use the global $\sigma$ relation in the same way, now with the reversed exponential argument $\bar l/Q-1/(Q^2t)$. Reciprocal substitution in $M_\kappa\sigma_{Q,l}(s+\lambda_2)$ gives Mellin parameter $1-s-\lambda_1$, parity $\epsilon+\delta_1$ and scaling factor $Q^{1-2s-\lambda_1-\lambda_2}$. The negative frequency contributes $(-1)^{\epsilon+\delta_1}$. Summing over $l$ uses $\sum_l\overline\chi(l)e(n\bar l/Q)=g_\chi\overline\chi(n)$. Thus initially for $\operatorname{Re}s$ sufficiently negative, [F1, F2, F4, F5, F7, step 1.1, step 2.2, algebra]
$$B(s)=2(-1)^{\epsilon+\delta_1}g_\chi Q^{1-2s-\lambda_1-\lambda_2}G_{\epsilon+\delta_1}(1-s-\lambda_1)L(1-s,\widetilde\tau\otimes\overline\chi).$$
Here $c_{n,1}=a_{n,1}|n|^{-\lambda_1}(\operatorname{sgn}n)^{\delta_1}$ and the sign-invariance of $a$ supplies the factor two. Replacing $s$ by $1-s$ and using the entireness of $B$ proves the claimed entire continuation and polynomial bounds of the second weighted product. The identity continues meromorphically by [F7]. [F1, F2, F4, F5, F7, step 1.1, step 2.2, algebra]

4.1 Substitute the evaluations of $A,B$ into step 2.2. On the pole-free nonzero locus, solve for the dual L-function and use $\sum\lambda_j=0$, $G_\nu(z)G_\nu(1-z)=(-1)^\nu$ and $g_\chi g_{\overline\chi}=(-1)^\epsilon Q$. The $Q$ powers become $Q^{3s-1}$ before the Gauss-sum relation; its remaining factor is $(-1)^\epsilon g_{\overline\chi}/g_\chi^2=Q/g_\chi^3$. The sign factors from the two inverse $G$ terms cancel those from $\delta_1,\delta_2$. One obtains exactly [F1, F2, F4, F5, F7, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, algebra]
$$L(1-s,\widetilde\tau\otimes\overline\chi)=Q^{3s}g_\chi^{-3}\prod_{j=1}^3G_{\epsilon+\delta_j}(s+\lambda_j)L(s,\tau\otimes\chi).$$
Meromorphic continuation in [F7], together with the already proved entire dual L-function, removes every apparent pole of the full right-hand product. All four polynomial strip bounds follow from the entire Mellin transforms in steps 2.1–3.2; division was only by nonzero constants and $Q$ exponentials whose modulus is bounded above and below on each vertical strip. For $Q=1$ the one unit residue class gives $g_\chi=1$, $\epsilon=0$ and the untwisted equation, with the same proof. Zero coefficient data cause no exception. No generic-parameter, spherical or tempered restriction, and no invalid power-test substitution into Voronoi summation, has been used. [F1, F2, F4, F5, F7, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, algebra] ∎

## Remarks

The arbitrary original central character is retained by the explicit normalization in the full-level datum. Before that normalization, writing its positive central character as $r^{it}$ changes the principal-series parameters to $\lambda_j-it/3$. Directly from the coefficient powers, the corresponding unnormalized standard series is $L(s-it/3,\tau\otimes\chi)$ and its phase-fixed dual series is $L(s+it/3,\widetilde\tau\otimes\overline\chi)$. Substituting $s-it/3$ in the proved equation gives the factor $Q^{3s-it}$ and gamma arguments $s+\lambda_j-it/3$. This is an exact determinant-twist translation, without a representation-classification assumption.
