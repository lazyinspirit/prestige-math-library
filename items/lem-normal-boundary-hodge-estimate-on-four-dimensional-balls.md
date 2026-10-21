---
id: lem-normal-boundary-hodge-estimate-on-four-dimensional-balls
kind: lemma
title: "The normal-boundary Hodge estimate on four-dimensional balls"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-riesz-transforms-on-euclidean-space
  - cor-riesz-transforms-are-bounded-on-lp
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-plancherel
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain
  - cor-locally-integrable-weakly-harmonic-functions-are-smooth
  - lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n
  - thm-holder-inequality-for-integrals
  - thm-riesz-fischer-completeness-of-l-p
  - thm-monotone-convergence-for-the-integral
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao and Gang Tian, A singularity removal theorem for Yang–Mills fields in higher dimensions, Proposition 3.5 and §9"
      url: "https://arxiv.org/pdf/math/0209352"
    - title: "Katrin Wehrheim, Uhlenbeck Compactness, public introduction, Theorem D"
      url: "https://math.berkeley.edu/~katrin/papers/justintro.pdf"
dependency_level: 0
---

## Statement

Assume full AC. Let $V$ be a fixed finite-dimensional real inner-product space, $2\le p<\infty$, let $r>0$, and put $B_r=B_r(0)\subset\mathbb R^4$. Let $Y_p(B_r;V)$ be the $W^{1,p}$ closure of smooth $V$-valued one-forms on the closed ball satisfying $a(\nu)=0$ on the sphere. Write $d^*a=-\sum_i\partial_i a_i$ and $(da)_{ij}=\partial_i a_j-\partial_j a_i$ for $i<j$. There is $C_{p,V}$ independent of $r$ such that every $a\in Y_p(B_r;V)$ satisfies
$$r^{-1}\|a\|_p+\|\nabla a\|_p\le C_{p,V}\bigl(\|da\|_p+\|d^*a\|_p\bigr).$$
Every such $a$ satisfies the zero-normal integration identity $\int\langle a,d\phi\rangle=\int\langle d^*a,\phi\rangle$ for smooth $\phi$ on the closed ball. If $da=d^*a=0$, then $a=0$.

For $V=\mathfrak{su}(2)$ with the Frobenius norm and $2\le p<4$, there exist $\rho_p>0$ and $C_p$ independent of $r$ such that, whenever $a\in Y_p$ satisfies $d^*a=0$ and $\|a\|_4\le\rho_p$, its curvature $F_a=da+a\wedge a$, $(a\wedge a)_{ij}=[a_i,a_j]$, satisfies
$$r^{-1}\|a\|_p+\|\nabla a\|_p\le C_p\|F_a\|_p.$$
All norms here are Euclidean coefficient norms; the class $Y_p$ states precisely the boundary approximation hypothesis.

## Statement references

[[cor-riesz-transforms-are-bounded-on-lp|Riesz transform bounds]]

[[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain|Rellich extraction]]

[Tao–Tian, Proposition 3.5 and §9](https://arxiv.org/pdf/math/0209352)

## Facts & Assumptions

[F1] Riesz transforms are the $L^2$ Fourier multipliers $-i\xi_j/|\xi|$ and are bounded on every $L^p$, $1<p<\infty$ ([[def-riesz-transforms-on-euclidean-space]], [[cor-riesz-transforms-are-bounded-on-lp]]). Fourier differentiation and Plancherel agreement and injectivity justify multiplier identities for smooth compactly supported functions ([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]], [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], [[thm-plancherel]]).

[F2] Smooth Sobolev approximation and the weak smooth-factor product rule hold; smooth cutoffs between balls exist. Multiplying global smooth approximants by a fixed cutoff gives compactly supported smooth approximants to a compactly supported Sobolev class ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F3] A $W^{1,p}$-bounded sequence on a bounded smooth ball has an $L^p$-convergent subsequence. Balls are extension domains, and for $2\le p<4$, $W^{1,p}(B_1)\hookrightarrow L^{4p/(4-p)}(B_1)$ continuously ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]], [[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n]]).

[F4] Distributionally harmonic locally integrable functions are smooth. The mean-zero Poincare inequality holds on $B_1$ and its rescaled balls ([[cor-locally-integrable-weakly-harmonic-functions-are-smooth]], [[lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n]]).

[F5] Holder, $L^p$ completeness and monotone convergence are available. Divergence gives integration by parts for smooth forms on the closed ball; [F2] and the extension theorem in [F3] give density of functions smooth near the closed ball in $W^{1,2}(B_1)$ ([[thm-holder-inequality-for-integrals]], [[thm-riesz-fischer-completeness-of-l-p]], [[thm-monotone-convergence-for-the-integral]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F6] Full AC supplies the countable and dependent choices used by these analytic suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** Full AC, $V$, $p$ and $r$. Work first on $B_1$.

1.1 **The whole-space first-order estimate.** For a compactly supported smooth one-form $b$ on $\mathbb R^4$ put $f_{ij}=\partial_i b_j-\partial_j b_i$ for all ordered indices and $g=\sum_i\partial_i b_i$. The identity $\Delta b_j=\sum_i\partial_i f_{ij}+\partial_j g$ and [F1] give $\partial_k b_j=-\sum_iR_kR_if_{ij}-R_kR_jg$: multiplication of the Fourier symbols proves equality away from zero frequency, hence almost everywhere in the $L^2$ transforms, and Plancherel injectivity identifies the functions. Riesz boundedness now gives $\|\nabla b\|_p\le C_{p,V}(\|db\|_p+\|d^*b\|_p)$. Approximate compactly supported $W^{1,p}$ forms by compactly supported smooth ones using [F2]; all displayed first derivatives converge in $L^p$, so the estimate extends to them. [F1, F2, algebra]

1.2 **Reflection of a tangential one-form.** For smooth $a$ on $\overline B_1$ with $a(\nu)=0$, put $\jmath(x)=x/|x|^2$ on $1<|x|<2$ and $b=\jmath^*a=D\jmath^T a(\jmath x)$ there, and put $b=a$ inside $B_1$. On the sphere $D\jmath=I-2\nu\otimes\nu$, so the boundary values match. This continuous piecewise smooth form has its piecewise first derivatives as weak derivatives, by cancelling the value-jump terms in integration by parts. Outside the sphere, differentiating and cancelling the symmetric second derivatives of $\jmath$ gives $db=\jmath^*(da)$. Also $D\jmath D\jmath^T=|x|^{-4}I$ and $\Delta\jmath_j=-4|x|^{-4}x_j$, whence $\operatorname{div}b=|x|^{-4}(\operatorname{div}a)(\jmath x)+4|x|^{-2}x\cdot b$. The inversion Jacobian is $|x|^{-8}$; these formulas on the bounded annulus show that its $b,db,d^*b$ norms are controlled by the respective inside $a,da,d^*a$ norms, with an additional $C\|a\|_p$ in the codifferential estimate. [given, construct, algebra]

2.1 **The estimate with a compact lower-order term.** Multiply the reflected form by a fixed cutoff equal to one near $\overline B_1$ and supported in $B_2$. Its exterior derivative and codifferential acquire only bounded smooth multiples of $b$. Apply step 1.1 to the resulting compactly supported $W^{1,p}$ form and restrict to $B_1$, using step 1.2 and the product rule. This yields $\|a\|_{W^{1,p}}\le C_{p,V}(\|da\|_p+\|d^*a\|_p+\|a\|_p)$. It extends to $Y_p$ by its defining strong approximation. For the same approximants, integration by parts and zero normal value give $\int\langle a_j,d\phi\rangle=\int\langle d^*a_j,\phi\rangle$; passing to the limit proves the claimed identity for $a\in Y_p$. [F2, F5, step 1.1, step 1.2, algebra]

3.1 **The kernel has no nonzero elements.** Suppose $a\in Y_p$ has $da=d^*a=0$. The identity used in step 1.1 makes each component of $a$ distributionally harmonic, hence smooth in the ball by [F4]. Closedness gives a smooth $V$-valued potential $u(x)=\int_0^1\sum_i x_i a_i(tx)\,dt$: differentiating under the integral and using $\partial_j a_i=\partial_i a_j$ makes $\partial_j u$ the integral of $\frac{d}{dt}(t a_j(tx))$, so $du=a$. Normalize $u$ to have zero mean on $B_{1/2}$. For $1/2<R<1$, Poincare on $B_R$ gives $\|u-u_{B_R}\|_{L^2(B_R)}\le PR\|a\|_2$. Taking the mean over $B_{1/2}$ bounds $|u_{B_R}|\le |B_{1/2}|^{-1/2}P\|a\|_2$. Consequently $\|u\|_{L^2(B_R)}\le C\|a\|_2$, uniformly in $R$. Here $a\in L^2$ since $p\ge2$ and the ball has finite volume. Monotone convergence [F5] gives $u\in W^{1,2}(B_1)$ with $du=a$. The zero-normal identity of step 2.1 extends to every $W^{1,2}$ scalar test by [F5], since $a\in L^2$ and $d^*a=0$. Test with $u$ to obtain $\|a\|_2^2=0$. Thus $a=0$. [F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 **Removing the lower-order term.** If no constant bounded the $W^{1,p}$ norm by $\|da\|_p+\|d^*a\|_p$ on $Y_p$, choose $a_j\in Y_p$ with $\|a_j\|_{W^{1,p}}=1$ and $\|da_j\|_p+\|d^*a_j\|_p<1/j$. By [F3] a subsequence converges in $L^p$. Apply step 2.1 to its pairwise differences; their first-order data tend to zero, so the subsequence is Cauchy in $W^{1,p}$. Completeness follows componentwise from [F5] by passing the derivative test identities to the $L^p$ limits. The strong limit $a\in Y_p$ therefore has norm one, but $da=d^*a=0$, contrary to step 3.1. This proves $\|a\|_{W^{1,p}}\le C_{p,V}(\|da\|_p+\|d^*a\|_p)$ on the unit ball. [F3, F5, F6, step 2.1, step 3.1, choose, contradiction]

5.1 **Critical nonlinear absorption.** For $V=\mathfrak{su}(2)$, the Frobenius matrix inequality gives $|[X,Y]|\le2|X||Y|$ and hence $|a\wedge a|\le2|a|^2$. Fix $2\le p<4$ and let $p^*=4p/(4-p)$. By [F3] there is $S_p$ with $\|a\|_{p^*}\le S_p\|a\|_{W^{1,p}}$. For $d^*a=0$, step 4.1 and Holder give $\|a\|_{W^{1,p}}\le C_{p,V}(\|F_a\|_p+2\|a\|_4\|a\|_{p^*})$, since $1/p=1/4+1/p^*$. Choose $\rho_p=(4C_{p,V}S_p)^{-1}$. Then $\|a\|_4\le\rho_p$ absorbs the last term and gives $\|a\|_{W^{1,p}}\le2C_{p,V}\|F_a\|_p$. All curvature products are in $L^p$, since $p^*\ge2p$ for $p\ge2$ on a finite-volume ball. [F3, F5, step 4.1, choose, algebra]

6.1 **All radii and conclusion.** Pull back by $y\mapsto ry$, so $b(y)=r a(ry)$. Smooth zero-normal forms pull back to smooth zero-normal forms, and strong approximation shows that $Y_p$ pulls back to $Y_p$. The $L^p$ norms of $\nabla b,db,d^*b$ scale by $r^{2-4/p}$, while $\|b\|_p=r^{1-4/p}\|a\|_p$. Also $F_b(y)=r^2F_a(ry)$ and $\|b\|_4=\|a\|_4$. Dividing the unit-ball estimates of steps 4.1–5.1 by $r^{2-4/p}$ proves both stated bounds. The integration identity rescales directly, and the kernel assertion follows from the estimate. Full AC is used through the exact Fourier, compactness and approximation suppliers [F1]–[F6], including the sequential choices in step 4.1. [F1, F2, F3, F4, F5, F6, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎

## Source notes

The complete proof of Tao–Tian's Proposition 3.5 (PDF p.9), and the surrounding critical product estimates on pp.8–9, were read. Its Hodge estimate and boundary-reflection mechanism are implemented here for the ball using explicit inversion and the actual local Riesz bounds. The proof closes the ball's kernel and lower-order-term removal explicitly. The public Wehrheim introduction only states its Hodge theorem; it is contextual and supplies no unproved premise here. The boundary hypothesis is the precise approximation class $Y_p$, which is sufficient for the ensuing constructed Neumann gauge iteration.
