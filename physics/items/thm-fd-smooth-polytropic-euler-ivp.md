---
id: thm-fd-smooth-polytropic-euler-ivp
kind: theorem
title: "Local smooth positive-density polytropic Euler"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  - def-fd-polytropic-symmetric-variables
  - def-fd-periodic-fourier-sobolev-spaces
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - lem-fd-periodic-fourier-embedding-products
  - lem-fd-periodic-tame-transport-commutator
  - def-countable-choice
  - thm-picard-lindelof-local-existence-and-uniqueness
  - lem-fd-polynomial-ode-continuation
  - thm-euclidean-space-complete
  - thm-bolzano-weierstrass
dependency_roles:
  def-fd-polytropic-symmetric-variables: mathematical-premise
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  lem-fd-periodic-fourier-embedding-products: mathematical-premise
  lem-fd-periodic-tame-transport-commutator: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  lem-fd-polynomial-ode-continuation: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-bolzano-weierstrass: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §7.4, Theorems 7.8–7.9"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
    - title: "T. Sideris, Formation of Singularities in Three-Dimensional Compressible Fluids, §1"
      url: "https://web.math.ucsb.edu/~sideris/pdffiles/EulerCMP.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, $\kappa>0$, $\gamma>1$, $a=(\gamma-1)/2$, integer $s\ge4$, and smooth real periodic maps $\rho_0:\mathbb T^d\to(0,\infty)$ and $u_0:\mathbb T^d\to\mathbb R^d$, where $\mathbb T^d=(\mathbb R/2\pi\mathbb Z)^d$, with $\min_{x\in\mathbb T^d}\rho_0(x)>0$. Use normalized measure $d\mu=(2\pi)^{-d}dx$, coefficients $\widehat f(k)=\int f(x)e^{-ik\cdot x}\,d\mu(x)$, weights $w_k=(1+|k|^2)^{1/2}$, and componentwise norms $\|f\|_{H^m}^2=\sum_{k\in\mathbb Z^d}w_k^{2m}|\widehat f(k)|^2$. For $\rho>0$, set $p(\rho)=\kappa\rho^\gamma$ and $r(\rho)=\sqrt{\kappa\gamma}\,\rho^a/a$. Then there is $T>0$, depending only on $d,s,\kappa,\gamma$, $\|(r(\rho_0),u_0)\|_{H^s}$, and $\min r(\rho_0)$, and a unique smooth real solution $(\rho,u)$ on $[0,T]\times\mathbb T^d$ of
$$\rho_t+\operatorname{div}(\rho u)=0,\qquad u_t+u\cdot\nabla u+\rho^{-1}\nabla(\kappa\rho^\gamma)=0,$$
with initial data $(\rho_0,u_0)$ and $\rho(t,x)>0$. For every integer $m\ge s$, $\sup_{0\le t\le T}(\|\rho(t)\|_{H^m}+\|u(t)\|_{H^m})<\infty$. This conditional smooth periodic theorem concerns the isentropic barotropic model with strictly positive density; it asserts no continuation through vacuum or shocks and no viscous or temperature-coupled result.

## Statement references

[[def-fd-polytropic-symmetric-variables]]

[[def-fd-periodic-fourier-sobolev-spaces]]

[[def-countable-choice]]

[François Golse, *The Boltzmann Equation and Its Hydrodynamic Limits*, §7.4, Theorems 7.8–7.9](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

[T. Sideris, “Formation of Singularities in Three-Dimensional Compressible Fluids,” §1](https://web.math.ucsb.edu/~sideris/pdffiles/EulerCMP.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the data and conventions in the Statement, and the exact current conditional interfaces below. No readiness or proof acceptance is inferred for any FD-S01 item.

[L1] The current batch-17 manifest contains the `fd-s01` A page with eleven item carriers and its B page with two carriers. I inspected the current statements, hypotheses, and complete proofs of the Fourier-space, embedding/product, and tame-commutator suppliers used below; their actual interfaces match this proof. The current `step1Decision` queries for the six S01 inputs return `ready` with current hashes. These records document authoring readiness and do not replace later independent proof review.

[F1] The Fourier-space definition uses normalized measure $(2\pi)^{-d}dx$, coefficients $\widehat q(k)=\int q(x)e^{-ik\cdot x}\,d\mu(x)$, conjugate symmetry for real fields, and the weighted coefficient completion; for $m\ge0$ it has the coefficient-isometry $L^2$ representative ([[def-fd-periodic-fourier-sobolev-spaces]]).

[F2] The Fourier coefficient map on the normalized unit torus is a surjective isometry onto $\ell^2(\mathbb Z^d)$ and satisfies Parseval; rescaling $x=2\pi y$ gives the normalized $2\pi$-periodic convention in [F1] ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[F3] Under Countable Choice, for $d\le3$ and every integer $j\ge0$, $H^\sigma\hookrightarrow C^j$ when $\sigma>j+d/2$; for $\sigma>d/2$ pointwise multiplication is continuous on $H^\sigma$ ([[lem-fd-periodic-fourier-embedding-products]]).

[F4] Under Countable Choice, for $d\le3$, integers $m\ge s_0\ge4$, smooth periodic scalar $f,g$, and each coordinate $j$, $\|[\Lambda^m,f]\partial_jg\|_{L^2}\le C_{d,m,s_0}(\|f\|_{H^m}\|g\|_{H^{s_0}}+\|f\|_{H^{s_0}}\|g\|_{H^m})$ ([[lem-fd-periodic-tame-transport-commutator]]).

[F5] With $a=(\gamma-1)/2$, $r=\sqrt{\kappa\gamma}\rho^a/a$, $q=(r,u)$, and $A_j(q)=u_jI+ar(e_0e_j^{\mathsf T}+e_je_0^{\mathsf T})$, each $A_j$ is symmetric and linear in $q$, and $q_t+\sum_jA_j(q)\partial_jq=0$ is the positive-density polytropic Euler system ([[def-fd-polytropic-symmetric-variables]]).

[F6] Countable Choice permits choosing one member from each countable sequence of nonempty sets ([[def-countable-choice]]).

[F7] A continuous vector field locally Lipschitz in its state variable has a unique local solution through every initial state ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F8] A bounded trajectory of a polynomial vector field on a finite-dimensional real space extends past a finite right endpoint ([[lem-fd-polynomial-ode-continuation]]).

[F9] Finite-dimensional Euclidean space is complete ([[thm-euclidean-space-complete]]).

[F10] Every bounded real sequence has a convergent subsequence ([[thm-bolzano-weierstrass]]); finite extraction over real and imaginary Fourier coordinates uses only finite choice.

[A1] Countable Choice is retained for the analytic Fourier and Sobolev suppliers [F1]–[F4]; the explicit coefficient diagonal below makes no additional selection and uses no dependent choice ([[def-countable-choice]]).

## Proof

**Proof technique:** Symmetric Fourier Galerkin approximation, conditional on [F1], [F3], and [F4], followed by positivity and an explicit inverse change of variables.


1.1 For a positive smooth solution of the mass equation, $D_t\rho=-\rho\operatorname{div}u$, where $D_t=\partial_t+u\cdot\nabla$. Since $r'(\rho)=\sqrt{\kappa\gamma}\rho^{a-1}=c(\rho)/\rho$ and $c(\rho)=ar$, the chain rule gives $D_tr=-ar\operatorname{div}u$. Also $\rho^{-1}p'(\rho)\nabla\rho=c(\rho)^2\nabla\rho/\rho=c(\rho)\nabla r=ar\nabla r$. Conversely, for $r>0$, the inverse $\rho(r)=(ar/\sqrt{\kappa\gamma})^{1/a}$ has $\rho'(r)=\rho/(ar)$; the first symmetric equation therefore gives $D_t\rho=-\rho\operatorname{div}u$, and the second gives $D_tu+\rho^{-1}\nabla p(\rho)=0$ using $\rho^{-1}\nabla p=c(\rho)\nabla r=ar\nabla r$. Thus the two smooth systems are equivalent on the positive-density region. [given, F5, algebra]

1.2 Put $q_0=(r(\rho_0),u_0)$. For $N\ge1$, let $S_N$ be the componentwise orthogonal Fourier projection to $|k|_\infty\le N$ and solve $\partial_tq_N+S_N\sum_{j=1}^d A_j(q_N)\partial_jq_N=0$, $q_N(0)=S_Nq_0$. Each coefficient of its finite-dimensional vector field is polynomial. On any bounded coefficient box, the identity $x^n-y^n=(x-y)\sum_{i=0}^{n-1}x^{n-1-i}y^i$, telescoped over the finitely many factors of each monomial, bounds every monomial difference by a constant times the Euclidean distance; summing the finitely many monomials proves local Lipschitz continuity. Thus [F7] gives a unique local real solution, and the real Fourier cutoff preserves conjugate symmetry. [given, F1, F5, F7, algebra]

1.3 The analytic suppliers [F2]–[F4] apply under the standing Countable Choice assumption [F6, A1]. For integer $m\ge s$, put $Q=\Lambda^m q_N$ with $\Lambda$ the multiplier $(1+|k|^2)^{1/2}$. Pair the projected equation with $Q$. Since $S_N$ is self-adjoint and commutes with $\Lambda$, the projection disappears in the inner product. For each $j$, expand $\Lambda^m(A_j(q_N)\partial_jq_N)=A_j(q_N)\partial_jQ+[\Lambda^m,A_j(q_N)]\partial_jq_N$. Symmetry and periodic integration by parts give $\int Q^{\mathsf T}A_j(q_N)\partial_jQ=-\frac12\int Q^{\mathsf T}(\partial_jA_j(q_N))Q$, whose absolute value is at most $C\|\nabla q_N\|_\infty\|q_N\|_{H^m}^2$. The embedding in [F3] bounds this by $C_m\|q_N\|_{H^s}\|q_N\|_{H^m}^2$. Because each $A_j$ is linear in $q_N$, [F4] bounds all commutator terms by the same expression. Thus $\frac12\frac d{dt}\|q_N\|_{H^m}^2\le C_m\|q_N\|_{H^s}\|q_N\|_{H^m}^2$. [given, F2, F3, F4, F5, F6, A1, algebra]

1.4 Define a canonical extraction $E$ for a bounded real sequence $(b_n)_{n\ge1}$. Let $B\ge1$ be the least integer with $|b_n|\le B$ for every $n$, and put $I_0=[-B,B]$. Having defined $I_\ell$, bisect it into its two closed halves and define $I_{\ell+1}$ to be the left half if that half contains $b_n$ for infinitely many indices $n$, and the right half otherwise. At least one half contains infinitely many such indices, so this rule is defined and unique. Set $e_0=0$ and let $e_\ell$ be the least $n>e_{\ell-1}$ with $b_n\in I_\ell$. These minima exist because the corresponding index sets are infinite. Then $E(b)(\ell)=e_\ell$ is strictly increasing and $(b_{e_\ell})$ is Cauchy: for $p,q\ge\ell$, both values lie in $I_\ell$, whose length is $2B2^{-\ell}$. It converges, since [F10] gives a convergent subsequence of this bounded Cauchy sequence and the Cauchy inequality forces the entire sequence to have the same limit. All intervals and indices are uniquely specified; this defines a function $E$ without any choice principle. [given, F10, construct, algebra]

2.1 At $m=s$, let $Y_N=\|q_N\|_{H^s}$. If $Y_N(0)>0$, step 1.3 gives $Y_N'\le C_sY_N^2$ while $Y_N>0$; integrating $(1/Y_N)'\ge-C_s$ yields $Y_N(t)\le2\|q_0\|_{H^s}$ for $0\le t\le T_0=(2C_s\|q_0\|_{H^s})^{-1}$. If $q_0=0$, the unique finite-dimensional solution is zero and take $T_0=1$. For each $m>s$, substituting this $H^s$ bound into step 1.3 and multiplying the squared-norm inequality by the corresponding decreasing exponential gives $\|q_N(t)\|_{H^m}\le\|q_0\|_{H^m}e^{2C_m\|q_0\|_{H^s}T_0}$. Parseval [F2] bounds the Euclidean coefficient norm by $\|q_N\|_{H^s}$; since the finite-dimensional state space is $\mathbb R^M$ with $M\ge1$, completeness [F9] supplies the endpoint limit used by the continuation argument [F8]. Thus every finite-dimensional polynomial trajectory continues throughout $[0,T_0]$. [given, step 1.3, F2, F8, F9, algebra]

2.2 Let $q,v$ be two smooth solutions of the symmetric system with the same initial data and positive first component. Their difference $w=q-v$ satisfies $w_t+\sum_jA_j(q)\partial_jw=-\sum_j(A_j(q)-A_j(v))\partial_jv$. Pair with $w$, integrate over the torus, and use symmetry of $A_j(q)$ to integrate the principal term into $-\frac12\int w^{\mathsf T}(\partial_jA_j(q))w$. Linearity of $A_j$ bounds the right side by $C(\|\nabla q\|_\infty+\|\nabla v\|_\infty)\|w\|_2^2$, so $z(t)=\|w(t)\|_2^2$ satisfies $z'\le C(t)z$, with continuous nonnegative $C$. Multiplying by $e^{-\int_0^tC(s)ds}$ gives a nonincreasing nonnegative function initially zero, hence $w=0$. The inverse change of variables then makes the positive-density Euler solution unique. [given, step 1.1, F5, algebra]

3.1 For every integer $m\ge s+1$, the product estimate [F3] and the bounds in step 2.1 bound $\partial_tq_N=-S_N\sum_jA_j(q_N)\partial_jq_N$ uniformly in $C([0,T_0],H^{m-1})$. Hence each fixed Fourier coefficient is uniformly bounded and equicontinuous in time. [step 2.1, F1, F3, F5]

4.1 Enumerate tuples $(k,A,B,j,\epsilon)$ with $k\in\mathbb Z^d$, integers $A\ge0$, $B\ge1$, $\gcd(A,B)=1$, $A/B\le T_0$, $0\le j\le d$, and $\epsilon\in\{0,1\}$ by increasing $|k|_1+A+B+j+\epsilon$, then lexicographically within each finite level. At tuple $i$, let $b^i_N$ be the real ($\epsilon=0$) or imaginary ($\epsilon=1$) part of the $j$th component of $\widehat q_N(k,A/B)$. Starting with $h_0(n)=n$, define recursively $h_i=h_{i-1}\circ E(b^i\circ h_{i-1})$ and put $N_\ell=h_\ell(\ell)$. The successor in this recursion is a specified function of $h_{i-1}$, so this is ordinary recursion, not a succession of unspecified dependent selections. Each $h_i$ is strictly increasing and its range is contained in every preceding range. Moreover $N_{\ell+1}=h_\ell(E(b^{\ell+1}\circ h_\ell)(\ell+1))\ge h_\ell(\ell+1)>N_\ell$. For each fixed $i$, the tail $(N_\ell)_{\ell\ge i}$ is an increasing subsequence of the range of $h_i$, on which $b^i$ converges. Thus this one subsequence converges at every enumerated coefficient-time coordinate. Countable Choice remains the standing analytic Fourier assumption; the diagonal construction itself does not require dependent choice. [step 3.1, step 1.4, construct, algebra]

5.1 The equicontinuity from step 3.1 upgrades convergence at rational times to uniform-in-time convergence of each fixed Fourier coefficient. Given $\varepsilon>0$, choose a finite rational time grid so that every time is close enough to a grid point to make each of the two equicontinuity errors below $\varepsilon/3$; choose the subsequence indices large enough that the finitely many grid values differ by less than $\varepsilon/3$. The triangle inequality makes each coordinate uniformly Cauchy, and scalar completeness supplies its uniform limit. [step 3.1, step 4.1, F10, algebra]

6.1 For every integer $m\ge s$, the $H^{m+1}$ bound from step 2.1 and the coefficient weight give $\|(I-S_K)q_N(t)\|_{H^m}\le K^{-1}\|q_N(t)\|_{H^{m+1}}$ for $K\ge1$. This tail tends to zero uniformly in $N,t$. Combining it with finite-mode convergence from step 5.1 makes the diagonal subsequence Cauchy in $C([0,T_0],H^m)$ for every integer $m\ge s$. Completeness of the weighted coefficient space [F1] yields a limit $q\in\bigcap_{m\ge s}C([0,T_0],H^m)$ with all these uniform bounds; coefficientwise limits preserve reality and the initial data. [step 2.1, step 5.1, F1, F2]

7.1 Since $q_N\to q$ in $C_tH^m$ for every $m\ge s$, the algebra estimate [F3] gives $A_j(q_N)\partial_jq_N\to A_j(q)\partial_jq$ in $C_tH^{m-1}$. The Fourier cutoffs $S_N$ converge strongly to the identity in that space. They converge uniformly on the compact time image of the continuous curve $t\mapsto\sum_jA_j(q)\partial_jq$: choose a finite $\varepsilon$-net, use strong convergence at its finitely many points, and use $\|S_N\|\le1$ for the net errors. Thus the Galerkin right-hand sides converge uniformly in $C_tH^{m-1}$. [step 6.1, F1, F3]

8.1 Integrate each Galerkin equation from $0$ to $t$. A continuous curve into the complete weighted coefficient space is Riemann integrable: uniform continuity makes its Riemann sums Cauchy, and completeness supplies the limit; the triangle inequality gives $\|\int G_N-\int G\|_{H^{m-1}}\le T_0\sup_t\|G_N(t)-G(t)\|_{H^{m-1}}$. The right-hand-side convergence in step 7.1 and $S_Nq_0\to q_0$ therefore let the integrals pass to the limit, giving $q(t)=q_0-\int_0^t\sum_jA_j(q(s))\partial_jq(s)\,ds$. The integrand is continuous in every $H^{m-1}$; its integral has derivative equal to the integrand because the difference quotient error is bounded by the maximum oscillation of that continuous integrand on the shrinking time interval. Therefore $q_t+\sum_jA_j(q)\partial_jq=0$ at every Sobolev order, and the embeddings in [F3] imply spatial smoothness. Differentiating this polynomial first-order identity inductively gives all time derivatives: each new derivative is a finite sum of products of already continuous spatial derivatives. [step 6.1, step 7.1, F1, F3]

9.1 The first component satisfies $r_t=-u\cdot\nabla r-ar\operatorname{div}u$. By [F3], the uniform $H^s$ bound in step 2.1 bounds the right side in $L^\infty$ by $C\|q_0\|_{H^s}^2$. Hence $\|r(t)-r(0)\|_\infty\le Ct\|q_0\|_{H^s}^2$. Choose $0<T\le T_0$ so that this is less than $\frac12\min r(0)$; then $r(t,x)\ge\frac12\min r(0)>0$. The smooth inverse $\rho=(ar/\sqrt{\kappa\gamma})^{1/a}$ and step 1.1 give a smooth positive-density solution of the stated Euler equations. On the compact spacetime cylinder, $r$ stays in a compact subinterval of $(0,\infty)$; all derivatives of this inverse power are therefore bounded on the range of $r$, and the repeated chain rule gives $\rho\in C_tH^m$ for every $m$. The choice of $T$ uses only the stated parameters, $\|q_0\|_{H^s}$, and $\min r(0)$. [given, step 1.1, step 2.1, step 8.1, F3, F5, algebra]

10.1 The compactness, passage, positivity, and uniqueness arguments above give existence, smoothness, positivity, uniqueness, and all-order Sobolev bounds on the same interval. No argument extends the solution through vacuum, a shock, or a finite-time loss of the stated bounds. [step 6.1, step 8.1, step 9.1, step 2.2] ∎

