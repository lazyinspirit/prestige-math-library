---
id: lem-neumann-coulomb-gauge-correction-by-contraction
kind: lemma
title: "A Neumann Coulomb-gauge correction by contraction"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-strong-lp-neumann-inverse-on-four-dimensional-balls
  - lem-normal-boundary-hodge-estimate-on-four-dimensional-balls
  - thm-higher-order-sobolev-embedding
  - thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-holder-inequality-for-integrals
  - thm-riesz-fischer-completeness-of-l-p
  - thm-banach-fixed-point
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Terence Tao and Gang Tian, A singularity removal theorem for Yang–Mills fields in higher dimensions, Proposition 9.2, Step 3, pp.38–39"
      url: "https://arxiv.org/pdf/math/0209352"
dependency_level: 2
---

## Statement

Assume full AC and work on the closed Euclidean unit ball in four dimensions. Use sums of $L^p$ norms of Euclidean ordered derivative tensors for Sobolev norms; these are equivalent to the cited scalar Sobolev norms and invariant under orthogonal coordinate changes. Let $X$ be the mean-zero $W^{2,3}$ closure of $\mathfrak{su}(2)$-valued polynomials with zero normal derivative on the sphere. Let $Y$ be the $W^{1,3}$ closure of smooth $\mathfrak{su}(2)$-valued one-forms with zero normal component on the sphere. Let $\mathcal G_N$ be the $W^{2,3}$ closure of smooth maps to $SU(2)$ with zero normal derivative on the sphere.

There exist fixed positive constants $\rho,\eta,\delta,C$ such that, if $a\in Y$ satisfies $d^*a=0$, $\|a\|_4\le\rho$, and $\lambda\in Y$ satisfies $\|\lambda\|_{W^{1,3}}\le\delta$, there exists $u\in X$, unique among $\|u\|_{W^{2,3}}\le\eta$, such that $h=e^u\in\mathcal G_N$ and
$$b=h^{-1}dh+h^{-1}(a+\lambda)h\in Y,\qquad d^*b=0.$$
Moreover
$$\|u\|_{W^{2,3}}\le C\|\lambda\|_{W^{1,3}},\qquad \|b-a\|_{W^{1,3}}\le C(1+\|a\|_{W^{1,3}})\|\lambda\|_{W^{1,3}}.$$
All constants are independent of the higher norm of $a$.

Given a finite $\Gamma\le O(4)$ and an action $\tau$ of $\Gamma$ on $SU(2)$ by constant unitary conjugations, suppose $\gamma^*a=d\tau_\gamma(a)$ and $\gamma^*\lambda=d\tau_\gamma(\lambda)$. Then $u(\gamma x)=d\tau_\gamma(u(x))$ and $h(\gamma x)=\tau_\gamma(h(x))$. A representation into $PU(2)$ supplies such a conjugation action; no lift of that representation to $SU(2)$ is required.

## Statement references

[[lem-strong-lp-neumann-inverse-on-four-dimensional-balls|Constructed strong Neumann inverse]]

[[lem-normal-boundary-hodge-estimate-on-four-dimensional-balls|Normal-boundary Hodge class and identity]]

[Tao–Tian, Proposition 9.2, Step 3](https://arxiv.org/pdf/math/0209352)

## Facts & Assumptions

[F1] The constructed inverse $S$ for $-\Delta$ maps $L^3_0$ boundedly onto the complete normalized space $X$, with $\|Sf\|_{W^{2,3}}\le K_N\|f\|_3$. It preserves prescribed finite orthogonal equivariance ([[lem-strong-lp-neumann-inverse-on-four-dimensional-balls]]).

[F2] Every $R\in Y$ satisfies $\int d^*R=0$, by the normal-boundary integration identity tested with constants ([[lem-normal-boundary-hodge-estimate-on-four-dimensional-balls]]).

[F3] On the ball $W^{2,3}\hookrightarrow L^\infty$ and $\|Dv\|_{12}\le K\|v\|_{W^{2,3}}$; also $W^{1,3}\hookrightarrow L^{12}$. These follow from the proved higher-order and first-order embeddings and the ball's extension property ([[thm-higher-order-sobolev-embedding]], [[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n]], [[thm-extension-theorem-for-bounded-smooth-domains]]).

[F4] Holder controls products and changes of exponent on the fixed ball. $L^3$ is complete, smooth approximation is available, and a contraction on a nonempty complete metric space has a unique fixed point ([[thm-holder-inequality-for-integrals]], [[thm-riesz-fischer-completeness-of-l-p]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[thm-banach-fixed-point]]).

[F5] Full AC is inherited through the analytic suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** Full AC and the classes $X,Y,\mathcal G_N$ and data of the statement. All norms in this proof are on the fixed unit ball.

1.1 **Sobolev matrix algebra and boundary approximation.** By [F3]–[F4] and the weak product rule obtained by smooth approximation, $\|vw\|_{W^{2,3}}\le K_A\|v\|_{W^{2,3}}\|w\|_{W^{2,3}}$: the second-derivative cross terms obey $\|DvDw\|_3\le\|Dv\|_6\|Dw\|_6$, and [F3] controls both $L^6$ norms. Similarly $\|cv\|_{W^{1,3}}+\|vc\|_{W^{1,3}}\le K_A\|c\|_{W^{1,3}}\|v\|_{W^{2,3}}$. Passing the derivative test identities to $L^3$ limits proves completeness of the ambient Sobolev spaces from [F4]. The power series for $e^u$ therefore converges in $W^{2,3}$, locally uniformly in that norm, and defines a continuously differentiable composition there; termwise differentiation is justified by the convergent exponential majorants. For $u\in\mathfrak{su}(2)$ pointwise, $u^2=-s^2I$ for a real $s$, so $e^u=\cos s\,I+(\sin s/s)u$ (with the continuous value at zero) is unitary with determinant one. Polynomial Neumann approximants to $u\in X$ exponentiate to smooth $SU(2)$ maps with zero normal derivative; continuity gives $e^u\in\mathcal G_N$. Products of maps in $\mathcal G_N$ remain in it, and inverse is matrix adjoint and hence continuous. Gauge transformation by such maps sends $Y$ to $Y$, by approximating both inputs with smooth zero-normal inputs and using the above product estimates. Also $du\in Y$ for $u\in X$. [F1, F3, F4, construct, algebra]

2.1 **The exact nonlinear remainder.** Put $h=e^u$ and define $R(u)=h^{-1}dh-du+h^{-1}(a+\lambda)h-a$. By step 1.1, $R(u)\in Y$ whenever $u\in X$. Let $E(u)=e^{-u}d(e^u)-du$. Differentiating the convergent matrix series, or integrating the series termwise, gives $e^{-u}d(e^u)=\int_0^1e^{-tu}(du)e^{tu}\,dt$, hence $E(u)=A(u)du$ where $A(0)=0$ and $A$ and its first two matrix derivatives are uniformly bounded for $|u|\le1$. More precisely $|A(u)|\le C|u|$ there. Thus $R(u)=E(u)+(e^{-u}ae^u-a)+e^{-u}\lambda e^u$, with $R(0)=\lambda$. [step 1.1, algebra]

3.1 **The quadratic differential term.** Suppose $\|u\|_{W^{2,3}},\|v\|_{W^{2,3}}\le\eta$ with $\eta$ small enough that [F3] gives $|u|,|v|\le1$. The formula in step 2.1 gives $|d^*E(u)|\le C(|u||D^2u|+|Du|^2)$. Subtracting the two formulas, using bounded first and second derivatives of $A$, and applying [F3]–[F4] gives $\|d^*E(u)\|_3\le C\|u\|_{W^{2,3}}^2$ and $\|d^*(E(u)-E(v))\|_3\le C\eta\|u-v\|_{W^{2,3}}$. Indeed terms with two first derivatives use $L^6\cdot L^6\subset L^3$, while a second derivative is paired with an $L^\infty$ factor; differences of coefficients are bounded by $C|u-v|$, and the resulting terms use the same two estimates. These formulas hold for the Sobolev classes by the smooth approximation and product continuity of step 1.1. [F3, F4, step 1.1, step 2.1, algebra]

4.1 **The critical Coulomb coefficient and the perturbation.** In $d^*(e^{-u}ae^u-a)$ the term $e^{-u}(d^*a)e^u-d^*a$ vanishes. Only derivatives falling on the exponentials remain, so their pointwise norm is at most $C|a||Du|$ for $|u|\le1$. Subtracting at $u,v$ gives at most $C|a|(|D(u-v)|+|u-v|(|Du|+|Dv|))$. By $L^4\cdot L^{12}\subset L^3$, this gives a difference bound $C\|a\|_4\|u-v\|_{W^{2,3}}$ when $\eta\le1$. The contracted derivative of $e^{-u}\lambda e^u$ consists of $e^{-u}(d^*\lambda)e^u$ and terms bounded by $C|\lambda||Du|$. The same subtraction, [F3] and Holder give a difference bound $C\|\lambda\|_{W^{1,3}}\|u-v\|_{W^{2,3}}$. Thus, after choosing one universal $C_0$, the preceding estimates prove $\|d^*(R(u)-R(v))\|_3\le C_0(\eta+\|a\|_4+\|\lambda\|_{W^{1,3}})\|u-v\|_{W^{2,3}}$. The cancellation of $d^*a$ is why no higher norm of $a$ occurs in this bound. [F3, F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 **A well-defined contraction, including compatibility.** Define $T(u)=S(-d^*R(u))$ on the closed radius-$\eta$ ball in $X$. Step 2.1 and [F2] show $-d^*R(u)\in L^3_0$, so the Neumann solve is well defined for every iterate. Choose positive $\eta,\rho$ so that $\eta\le1$, the $L^\infty$ restriction of step 3.1 holds, and $K_NC_0(\eta+\rho)\le1/4$. Then choose $\delta>0$ so small that $K_NC_0\delta\le1/4$ and $K_N\|d^*\lambda\|_3\le\eta/4$ whenever $\|\lambda\|_{W^{1,3}}\le\delta$; the latter follows from the fixed finite coefficient bound for $d^*$. For $\|a\|_4\le\rho$ and such $\lambda$, step 4.1 gives contraction constant at most $1/2$, and $\|T(0)\|_{W^{2,3}}\le\eta/4$. Hence $\|T(u)\|_{W^{2,3}}\le3\eta/4$ on that ball. It is a complete metric space by [F1] and the equivalence of its domain norm with $W^{2,3}$. [F1, F2, F4, step 2.1, step 3.1, step 4.1, choose, construct, algebra]

6.1 **The correction and uniqueness.** By [F4], $u_{j+1}=T(u_j)$ starting at zero converges to the unique fixed point $u$ in that ball. The equation $-\Delta u=-d^*R(u)$ and $d^*du=-\Delta u$ give $d^*(du+R(u))=0$. Since $d^*a=0$, the form $b=a+du+R(u)=h^{-1}dh+h^{-1}(a+\lambda)h$ is Coulomb and belongs to $Y$ by step 1.1. Conversely any $u\in X$ in the stated ball for which $b$ is Coulomb satisfies this same Neumann equation, so uniqueness of [F1] makes it a fixed point and thus this $u$. Also $\|u\|_{W^{2,3}}\le\|T(0)\|_{W^{2,3}}+\tfrac12\|u\|_{W^{2,3}}\le K_N\|d^*\lambda\|_3+\tfrac12\|u\|_{W^{2,3}}$, giving the first quantitative bound. [F1, F4, step 1.1, step 2.1, step 5.1, construct, algebra]

7.1 **The correction size in the connection norm.** The matrix power series and product estimates of step 1.1 imply $\|e^{-u}d(e^u)\|_{W^{1,3}}\le C\|u\|_{W^{2,3}}$, $\|e^{-u}ae^u-a\|_{W^{1,3}}\le C\|a\|_{W^{1,3}}\|u\|_{W^{2,3}}$, and $\|e^{-u}\lambda e^u\|_{W^{1,3}}\le C\|\lambda\|_{W^{1,3}}$ on the fixed small ball. For the middle bound, write $e^{-u}ae^u-a=(e^{-u}-1)ae^u+a(e^u-1)$; the terms with derivatives on $a$ have a factor bounded by $C\|u\|_\infty$, and the other terms use $L^4\cdot L^{12}\subset L^3$. Adding the three bounds and using step 6.1 proves the claimed estimate for $b-a$, with $C$ independent of $\|a\|_{W^{1,3}}$. [F3, F4, step 1.1, step 6.1, algebra]

8.1 **Prescribed finite equivariance.** Orthogonal pullback preserves the Laplacian, codifferential, means and all the domain norms. Constant unitary conjugation preserves matrix products, the Frobenius norm and the exponential. Therefore the transformation $u(x)\mapsto d\tau_\gamma^{-1}(u(\gamma x))$ preserves $X$ and commutes with $T$ when $a,\lambda$ have the stated equivariance; this uses the equivariant inverse of [F1]. The zero starting iterate is invariant, so every iterate and its limit are invariant. Exponentiation gives the assertion for $h$. A central unitary scalar acts trivially by conjugation, which explains why a $PU(2)$ action suffices. The existence, uniqueness, estimates and boundary compatibility are all supplied in steps 5.1–7.1; full AC is inherited as stated in [F5]. [F1, F5, step 1.1, step 2.1, step 5.1, step 6.1, step 7.1, algebra] ∎

## Source notes

The full exponential Neumann iteration in Tao–Tian, Proposition 9.2, Step 3 (PDF pp.38–39), was read. Here its linear solve is the constructed local strong Neumann inverse, and every iterate's mean-zero compatibility is proved through the normal approximation class. The nonlinear estimates exploit the critical $L^4$ norm of the Coulomb coefficient, with its contracted derivative cancelling exactly. This lemma corrects nearby given Coulomb data; a subsequent scaling-path construction is needed to obtain a gauge from small curvature alone.
