---
id: lem-ip-planar-dn-enclosure-and-reciprocal-comparison
kind: lemma
title: Planar DN comparison under disk enclosure and conductivity reciprocation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-calderon-rough-dn-map-wellposedness
  - lem-ip-calderon-rough-alessandrini-and-quotient-norm
  - lem-ip-calderon-boundary-trace-quotient-identification
  - cor-poincare-wirtinger-on-convex-domains
  - thm-lax-milgram
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-smooth-up-to-the-boundary-density-on-smooth-domains
  - thm-sobolev-gauss-green-formula-on-c-one-domains
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-l-one-approximate-identities-converge-in-l-p
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 3.3, printed p. 12, for enclosing-domain DN comparison."
    - title: "Barceló, Faraco and Ruiz, Stability of Calderón inverse conductivity problem in the plane"
      url: "https://www.mis.mpg.de/preprints/2006/preprint2006_5.pdf"
      locator: "Section 2.2, Proposition 2.2 and the conjugate-function identity (2.23), preprint printed pp. 10–11 (PDF pp. 12–13)."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subset(0,1)^2$ be a nonempty bounded connected smooth domain and let $\Omega'\Subset\Omega$. Let $\gamma_j$ be real conductivities, $m\le\gamma_j\le M$ almost everywhere, equal to $1$ outside $\Omega'$, with $0<m\le M$. Extend them by $1$ to the disk $B=(1/2,1/2)+D_1$. On each domain use the weak energy DN map with trace space $\mathcal D=H^1/H_0^1$ and quotient $E=\mathcal D/\mathbb C\mathbf1$. Denote the constant-quotient DN difference norms by $\delta_\Omega(\gamma_1,\gamma_2)$ and $\delta_B(\gamma_1,\gamma_2)$. Then
$$\delta_B(\gamma_1,\gamma_2)\le C\delta_\Omega(\gamma_1,\gamma_2),\qquad \delta_B(\gamma_1^{-1},\gamma_2^{-1})\le C\delta_B(\gamma_1,\gamma_2),$$
where $C$ depends only on $m,M$ and the fixed geometry. Translation of $B$ to $D_1$ preserves these norms. In particular both disk data differences are bounded by a constant times the original measurement error, and both Beltrami coefficients have support in $D_a$ after this translation for a fixed $a<1$.

## Statement references

[[lem-ip-calderon-rough-alessandrini-and-quotient-norm|The weak conductivity identity and the exact constant-quotient norm convention.]]

[[lem-ip-calderon-boundary-trace-quotient-identification|The quotient trace space.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice and the domains and conductivities in the statement.

[F1] Positive bounded conductivities on a unit-cube subdomain give unique weak Dirichlet solutions, bounded energy DN maps killing constants, and the rough Alessandrini identity with the exact full/constant-quotient operator norm equality. The trace quotient is the boundary trace space. ([[lem-ip-calderon-rough-dn-map-wellposedness]], [[lem-ip-calderon-rough-alessandrini-and-quotient-norm]], [[lem-ip-calderon-boundary-trace-quotient-identification]])

[F2] Poincaré–Wirtinger holds on convex domains with a constant bounded by a dimensional constant times their diameter. Bounded coercive forms on Hilbert spaces are invertible by Lax–Milgram. ([[cor-poincare-wirtinger-on-convex-domains]], [[thm-lax-milgram]])

[F3] Circle Fourier modes are complete and obey Parseval; smooth ambient restrictions are dense in $H^1$ of a smooth domain. The Sobolev Green formula identifies weak normal and tangential boundary functionals by approximation. ([[thm-fourier-basis-and-parseval-on-the-n-torus]], [[thm-smooth-up-to-the-boundary-density-on-smooth-domains]], [[thm-sobolev-gauss-green-formula-on-c-one-domains]])

[F4] Interior mollification is smooth, commutes with weak derivatives, and converges in $L^2$ on compact subdomains. ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-l-one-approximate-identities-converge-in-l-p]])

[A1] The Axiom of Choice and Countable Choice are inherited from [F1]–[F4]. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Disk weak solutions in [F1] are obtained by an explicit fixed affine transport into the unit cube: $T(z)=(1/2,1/2)+z/4$ on $D_1$. In two dimensions this preserves the gradient energy and changes the $L^2$ term by a factor $1/16$, so $\tfrac14\|v\|_{H^1(D_1)}\le\|v\circ T^{-1}\|_{H^1(T(D_1))}\le\|v\|_{H^1(D_1)}$. Thus the disk weak solution estimate and DN boundedness follow with uniform constants, using ellipticity bounds $m_*:=\min\{m,1\}$ and $M_*:=\max\{M,1\}$ for the extended coefficients. The algebra proving the Alessandrini identity and double-annihilation norm equality in [F1] is invariant under this transport. Translation is an $H^1$ isometry, so it transports $B$ and its quotient DN map isometrically to $D_1$. [A1, F1, given, algebra]

2.1 For trace classes $f,g$ on $B$, let $u_1,u_2$ solve the two conductivity equations there. Their restrictions to $\Omega$ are the respective weak solutions for their own restricted traces. Since the coefficient difference is zero on $B\setminus\Omega$, applying the Alessandrini identity on the two domains gives $((\Lambda_{\gamma_1}^{B}-\Lambda_{\gamma_2}^{B})f)(g)=((\Lambda_{\gamma_1}^{\Omega}-\Lambda_{\gamma_2}^{\Omega})[u_1|_\Omega])([u_2|_\Omega])$. In the sesquilinear convention this is exactly the common integral of $(\gamma_1-\gamma_2)\nabla u_1\cdot\overline{\nabla u_2}$. Its absolute value is at most $\delta_\Omega\|u_1\|_{H^1(B)}\|u_2\|_{H^1(B)}\le C\delta_\Omega\|f\|_{\mathcal D(B)}\|g\|_{\mathcal D(B)}$, using step 1.1. Hence the full disk operator norm is at most $C\delta_\Omega$, and its constant-quotient norm is equal to that full norm by [F1]. This proves the first estimate. [F1, step 1.1, algebra]

3.1 On $D_1$ let $E=\mathcal D/\mathbb C\mathbf1$ and let $D$ be the weak counterclockwise tangential derivative on its boundary. This is a bounded bijection $E\to E^*$ with bounded inverse. For completeness, the squared $E$ norm of a finite boundary Fourier sum $\sum_{n\ne0}a_ne^{in\theta}$ is comparable to $2\pi\sum|n||a_n|^2$. The lower bound follows from the minimum Dirichlet energy of the harmonic lift $\sum a_nr^{|n|}e^{in\theta}$: subtracting that lift from any representative leaves a zero-trace function, whose gradient is orthogonal to the harmonic lift. Its energy is $2\pi\sum|n||a_n|^2$. The lift's squared $L^2$ norm is $\pi\sum|a_n|^2/(|n|+1)$, which gives the upper bound for the quotient norm. Finite modes are dense in $E$: angular Fourier projections converge in $H^1(D_1)$ by polar Parseval first for smooth ambient restrictions, and then for general functions by [F3]; their quotient traces are the finite boundary modes. In these equivalent weighted sequence norms, $D$ multiplies the $n$th coefficient by $in$, and the dual norm uses weight $1/|n|$. This proves its bounded invertibility. [F1, F3, step 1.1, step 2.1, algebra]

4.1 For any disk conductivity $m_*\le\gamma\le M_*$, its induced map $\dot\Lambda_\gamma:E\to E^*$ is bounded and coercive uniformly. Indeed, if $u$ solves its boundary class $f$, then $\|f\|_E\le\|u-u_{D_1}\|_{H^1}\le C\|\nabla u\|_2$ by [F2], while $\langle\dot\Lambda_\gamma f,f\rangle=\int\gamma|\nabla u|^2\ge m_*\|\nabla u\|_2^2$. The quotient of a Hilbert space by its closed constant subspace is Hilbert, so Lax–Milgram [F2] gives a bounded inverse with a uniform norm. This argument also applies to $\gamma^{-1}$ with reciprocal ellipticity bounds. [F1, F2, step 1.1, step 3.1, algebra]

5.1 We prove the conductivity-conjugate relation for rough coefficients. If $u\in H^1(D_1)$ is $\gamma$-harmonic, the $L^2$ vector field $F=J\gamma\nabla u$, where $J(x,y)=(-y,x)$, has distributional curl zero. It has an $H^1$ potential $v$ with $\nabla v=F$: mollify $F$ inside shrinking concentric disks, and for each smooth curl-free field use $v_\epsilon(x)=\int_0^1F_\epsilon(tx)\cdot x\,dt$, whose derivative is $F_\epsilon$ by the curl identity. Subtract its mean on $D_{1/2}$. Poincaré–Wirtinger on each disk of radius between $1/2$ and $1$ gives a uniform $L^2$ bound by the gradient norm; the normalization on $D_{1/2}$ controls the disk mean by Cauchy–Schwarz. Since the gradients converge in $L^2$ on every fixed interior disk by [F4], these normalized potentials are Cauchy in $H^1$ there. Their limits have a uniform global $H^1$ bound by exhaustion, giving the required $v$. Then $\operatorname{div}(\gamma^{-1}\nabla v)=\operatorname{div}(J\nabla u)=0$. The weak boundary identities are $D[v]=\dot\Lambda_\gamma[u]$ and $\dot\Lambda_{\gamma^{-1}}[v]=-D[u]$. For smooth functions these are $\partial_Tv=\gamma\partial_\nu u$ and $\gamma^{-1}\partial_\nu v=-\partial_Tu$. For the rough solutions they follow by applying the sesquilinear identity $\int(v_y\overline{w_x}-v_x\overline{w_y})=\langle D[v],[w]\rangle$ first to smooth approximations and then in $H^1$, using [F3]. Thus no boundary regularity of $\gamma$ or interior second derivatives are assumed. [F1, F2, F3, F4, step 3.1, step 4.1, algebra]

6.1 The two identities in step 5.1 imply $\dot\Lambda_{\gamma^{-1}}D^{-1}\dot\Lambda_\gamma=-D$, hence $\dot\Lambda_{\gamma^{-1}}=-D\dot\Lambda_\gamma^{-1}D$. Subtract this formula for the two coefficients and use $A^{-1}-B^{-1}=A^{-1}(B-A)B^{-1}$. The bounded norms of $D$ from step 3.1 and of the inverses from step 4.1 give $\delta_B(\gamma_1^{-1},\gamma_2^{-1})\le C\delta_B(\gamma_1,\gamma_2)$. Together with step 2.1 this proves both norm comparisons. Finally the translated unit square lies in the disk of radius $1/\sqrt2<1$ about zero, so the supports of both original and reciprocal Beltrami coefficients lie in $D_a$ for any fixed $1/\sqrt2<a<1$. [step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
