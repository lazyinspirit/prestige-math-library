---
id: lem-meromorphic-gl2-local-trilinear-intertwining-identity
kind: lemma
title: "The Meromorphic Local GL2 Trilinear Intertwining Identity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-full-level-gl2-automorphic-distribution
  - lem-gl2-trilinear-integral-normalization-constant
  - thm-identity-theorem-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§3, (3.21)–(3.23); §4, (4.9), (4.15)–(4.16), printed pp.13–14 and18–20."
---

## Statement

Use the smooth principal-series conventions for $G=PGL_2(\mathbb R)$.
For parameters $\rho_j\in\mathbb C$ and parities $\delta_j\in\{0,1\}$,
the invariant trilinear integral
$$K_{\rho_1,\rho_2,\rho_3}(v_1,v_2,v_3)=\int_{\mathbb R^3}v_1(x)v_2(y)v_3(z)\operatorname{sgn}((x-y)(y-z)(z-x))^{\delta_1+\delta_2+\delta_3}|x-y|^{(-\rho_1-\rho_2+\rho_3-1)/2}|y-z|^{(\rho_1-\rho_2-\rho_3-1)/2}|x-z|^{(-\rho_1+\rho_2-\rho_3-1)/2}\,dx\,dy\,dz$$
is absolutely convergent when
$\operatorname{Re}(\rho_i-\rho_j-\rho_\ell)>-1$ for distinct indices and
$\operatorname{Re}(\rho_1+\rho_2+\rho_3)<1$. It has a meromorphic
continuation as a continuous trilinear functional on the smooth compact
models. The only possible parameter poles lie on the hyperplanes
$\rho_i+\rho_j-\rho_\ell=1+2k$ or $\rho_1+\rho_2+\rho_3=1+2k$,
$k\ge0$. Away from these hyperplanes its distribution kernel restricts to
the displayed nonzero smooth density on the open orbit.

There is a meromorphic continuous intertwiner
$J_\nu:V^\infty_{-\nu,0}\to V^\infty_{\nu,0}$ given, initially for
$\operatorname{Re}\nu>0$, by
$$ (J_\nu v)(x)=\int_{\mathbb R}v(t)|t-x|^{\nu-1}\,dt.$$
It extends to distribution vectors by transposition with the natural
principal-series duality. Put $\eta\equiv\delta_1+\delta_2\pmod2$ and
$G_0(w)=2(2\pi)^{-w}\Gamma(w)\cos(\pi w/2)$,
$G_1(w)=2i(2\pi)^{-w}\Gamma(w)\sin(\pi w/2)$.
For $v_j\in V^\infty_{\rho_j,\delta_j}$, $j=1,2$, and
$v_3\in V^\infty_{-\nu,0}$, one has the meromorphic identity
$$K_{\rho_1,\rho_2,\nu}(v_1,v_2,J_\nu v_3)=\frac{(-1)^\eta G_\eta((\rho_1-\rho_2-\nu+1)/2)G_\eta((-\rho_1+\rho_2-\nu+1)/2)}{G_0(1-\nu)}K_{\rho_1,\rho_2,-\nu}(v_1,v_2,v_3).$$
The equality is an equality of meromorphic families, including at their
exceptional parameters; it does not assert a finite value at a pole.
No choice principle is assumed.

## Statement references

[[def-full-level-gl2-automorphic-distribution|the principal-series convention]]

## Facts & Assumptions

**Given:** The parameters and three smooth vectors in the Statement, identified across parameters by their smooth compact circle realizations.

[F1] [[lem-gl2-trilinear-integral-normalization-constant]] evaluates the one-variable integral with $\operatorname{Re}\alpha,\operatorname{Re}\beta>0$ and $\operatorname{Re}(\alpha+\beta)<1$, with its exact sign and Gamma constant.

[F2] [[thm-identity-theorem-holomorphic-functions]] extends equal holomorphic functions uniquely; applying it successively in each parameter also extends the finite-chart meromorphic identities below.

## Proof

**Given:** The vectors and parameter-dependent compact models in the Statement.

1.1 First regard the displayed integral as an integral on the compact manifold $P^3$, $P=\mathbb RP^1$. Inversion in any coordinate, together with the transformation rule $|x|^{\rho-1}v(-1/x)$ for a smooth vector, transforms its density by precisely the principal-series transition factors. Thus infinity produces no additional singular stratum. At a point of one double diagonal but not the triple diagonal, a transverse coordinate contributes $|u|^{(-\rho_i-\rho_j+\rho_\ell-1)/2}$ times a sign power and a smooth factor. Its absolute integrability is exactly $\operatorname{Re}(\rho_\ell-\rho_i-\rho_j)>-1$. [given, algebra]

1.2 For completeness the meromorphic regularization is explicit. For a compactly supported smooth function $f$, split $\int_{\mathbb R}|u|^a\operatorname{sgn}(u)^\epsilon f(u)\,du$ at $|u|=1$. On the inner interval subtract the Taylor polynomial of $f$ through degree $L$, using a fixed cutoff equal to one near zero. The subtracted remainder is integrable for $\operatorname{Re}a>-L-2$ and is bounded by a finite derivative seminorm. Each removed monomial contributes a meromorphic scalar whose possible pole is $a=-j-1$, with $0\le j\le L$; parity removes the terms with the wrong sign symmetry. Increasing $L$ gives compatible continuations because subtraction and addition cancel on their common convergence domains. The same operation successively in two independent coordinates regularizes a product of two such powers, with locally bounded finite-order estimates after clearing its finitely many local parameter poles. [construct, algebra]

2.1 Near the triple diagonal put $u=x-y$, $v=y-z$ and retain $y$ as tangential coordinate. Divide the normal plane by fixed smooth homogeneous angular cutoffs into finitely many regions in which either $|u|$ or $|v|$ is the larger coordinate. In a region $v=ut$, the Jacobian is $|u|$ and $t$ stays bounded. The three differences become $u$, $ut$, $u(1+t)$. The radial absolute power is therefore $|u|^{(-\rho_1-\rho_2-\rho_3-1)/2}$; the angular singularities at $t=0,-1$ have the double-diagonal exponents of step 1.1. The other regions have the same form with permuted indices. This proves the asserted absolute convergence conditions, including $\operatorname{Re}(\rho_1+\rho_2+\rho_3)<1$. [step 1.1, construct, algebra]

2.2 For $\operatorname{Re}\nu>0$ the formula for $J_\nu$ is integrable at $t=x$. At infinity, the input has size $O(|t|^{-\operatorname{Re}\nu-1})$, so the integrand is $O(|t|^{-2})$. Its projectively transformed compact-picture kernel is smooth off the diagonal, and has the local power $|u|^{\nu-1}$ at the diagonal. Step 1.2 continues it meromorphically. After a local change of variable taking the singularity to $u=0$, differentiation of the output amounts to pairing this fixed finite-order power distribution with a smoothly varying test; difference quotients converge in every required test seminorm. Thus the operator maps smooth vectors continuously to smooth vectors meromorphically. A projective change of variable gives exactly the weight change from $-\nu$ to $\nu$, proving equivariance. The kernel is symmetric in the two affine variables, so transposition with the invariant pairing between opposite parameters defines the same intertwiner on distribution vectors. [step 1.2, construct, algebra]

3.1 Apply step 1.2 to the finite chart decomposition in steps 1.1–2.1. The double-diagonal poles can occur only when $\rho_i+\rho_j-\rho_\ell=1+2j$. The radial poles can occur only when $\rho_1+\rho_2+\rho_3=1+2j$. Every smooth factor and transition multiplier depends holomorphically on the parameters with all derivatives bounded on compact parameter sets. Thus the regularized kernels are continuous trilinear distributions meromorphic in the parameters. The finite-chart pieces agree on overlapping convergence domains, and then everywhere by [F2], so they give the asserted global continuation. Direct projective changes of variables prove $G$-invariance on the convergence domain and hence meromorphically by the same argument. Its restriction off the diagonals is unchanged and nonzero. [step 1.1, step 2.1, step 1.2, F2, algebra]

3.2 Work first in a nonempty open parameter region with $\rho_1,\rho_2$ close to zero and real $0<\nu<1$, slightly thickened in all complex variables. All triple kernels in the desired identity are absolutely integrable by steps 1.1–2.1. Upon substituting $J_\nu v_3$, the inner $t$-integral is exactly [F1] with $\alpha=(-\rho_1+\rho_2-\nu+1)/2$ and $\beta=(\rho_1-\rho_2-\nu+1)/2$. Its absolute value is bounded by the corresponding positive absolute-power integral from [F1], times the moduli of the smooth vectors. The resulting triple absolute-power kernel is integrable in this region by step 2.1. Hence absolute Fubini is legitimate; it may also be obtained by compact Riemann truncation followed by these absolute tail estimates. [step 2.1, step 2.2, F1, algebra]

4.1 Evaluation by [F1] changes the $t$-kernel into the trilinear kernel with third parameter $-\nu$, multiplied by $(-1)^\eta G_\eta(\alpha)G_\eta(\beta)/G_0(\alpha+\beta)$. Since $\alpha+\beta=1-\nu$, this is precisely the displayed constant. Steps 3.1 and 2.2 show both sides are meromorphic families in the three parameters. The local Taylor-subtraction construction has only the explicitly listed affine hyperplane poles, so successive one-variable identity theorems [F2], clearing poles on each compact parameter set, extend the identity from the open region in step 3.2 to the full meromorphic families. This asserts no value at a pole and uses only finite chart decompositions and explicitly increasing Taylor orders. [step 3.1, step 2.2, step 3.2, F1, F2, algebra] ∎
