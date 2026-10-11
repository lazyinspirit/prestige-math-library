---
id: thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
kind: theorem
title: "Compact Laplace-type bundle operators: regularity and shifted parametrices"
status: draft
origin: pipeline
dependency_level: 8
deps: [def-second-order-laplace-type-operators-on-vector-bundles, thm-chain-rule-for-total-derivatives, cor-c-one-change-of-variables-for-l-one-functions, thm-young-inequality-real-exponents, thm-holder-inequality-for-integrals, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, thm-smooth-partitions-of-unity-exist-on-manifolds, lem-cutoff-difference-quotient-commutator-estimate, lem-w-one-two-is-a-hilbert-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-hk-and-hk-zero-notation, def-sobolev-space-wkp-and-its-norm, thm-interior-h-two-regularity-for-divergence-form-equations, lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates, thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain, thm-higher-order-sobolev-embedding, thm-lax-milgram]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch VI §§1–2, pp 287–290; general context, not a substitute for the local analytic argument"
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§§4.7–4.11, pp 103–114; scalar weak interior regularity; bundle localization and domain argument proved below"
---

## Statement

Assume the Axiom of Choice. Let $M$ be a compact smooth manifold without boundary of real dimension $n\ge2$, equipped with a smooth positive density, and $E\to M$ a finite-rank real Euclidean or complex Hermitian smooth vector bundle. Let $P$ be a smooth-coefficient second-order differential operator on $E$, formally symmetric for the density and metric, whose positive-frequency principal symbol is
$$\sigma_2(P)(x,\xi)=a_x(\xi,\xi)I_{E_x},$$
where $a$ is a smooth positive-definite real quadratic form on cotangent vectors. Thus in any local frame $P=-a^{ij}\partial_i\partial_j+B^j\partial_j+C$, with scalar real positive-definite $a^{ij}$ and matrix-valued lower coefficients. Nonnegativity of $P$ is not needed here.

For nonnegative integers $k$, define $H^k(M,E)$ by requiring the coefficients of each member of a finite smooth partition of unity times the section, in precompact bundle charts and extended by zero, to lie in $H^k(\mathbb R^n)$; the norm is the square root of the sum of these component Sobolev norms squared. Different such choices give equivalent norms. The following hold.

1. These are Hilbert spaces, smooth sections are dense, $H^0=L^2$ with equivalent norms, $H^{k+1}\hookrightarrow H^k$ is compact, and $H^k\hookrightarrow C^r$ continuously whenever $k>r+n/2$.
2. If $u\in H^1$ and $Pu=f\in H^k$ distributionally, then $u\in H^{k+2}$ and
$$\|u\|_{H^{k+2}}\le C_k(\|f\|_{H^k}+\|u\|_{L^2}).$$
In particular smooth data give smooth weak solutions. The same estimate holds for all $u\in H^{k+2}$.
3. For sufficiently large real $\lambda>0$, $P+\lambda:H^2\to L^2$ is a bounded bijection with bounded inverse $B:L^2\to H^2$. As an operator on $L^2$, $B$ is compact, injective and selfadjoint, has dense range $H^2$, and the unbounded operator $P$ with domain exactly $H^2$ is selfadjoint. The map $B:H^k\to H^{k+2}$ is bounded for every nonnegative integer $k$ and preserves smooth sections.
4. It supplies two-sided parametrices **modulo compact operators**:
$$PB=I-\lambda B\quad\hbox{on }L^2,\qquad BP=I-\lambda B\quad\hbox{on }H^2.$$
Here on the second space $B$ denotes its restriction after inclusion $H^2\hookrightarrow L^2$; it is compact on $H^2$. No assertion concerning arbitrary-order elliptic operators, or pseudodifferential symbol classes, is part of this theorem.

## Facts & Assumptions

**Given:** the data and scalar principal-symbol hypothesis in the Statement; full AC supplies all countable and dependent choice used in the listed interfaces.

[F1] Smooth subordinate partitions exist; smooth-factor multiplication has the full weak Leibniz formula and is bounded at each integer Sobolev order; compactly supported Euclidean Sobolev functions have smooth compactly supported approximations. These apply componentwise ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[lem-cutoff-difference-quotient-commutator-estimate]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F2] Scalar uniformly elliptic divergence-form equations with smooth principal coefficients have weak interior $H^2$ regularity from $H^1$ and an $L^2$ source, with a nested-domain estimate; complex scalars are allowed. Compactly supported lower Sobolev derivatives satisfy arbitrary-small interpolation estimates ([[thm-interior-h-two-regularity-for-divergence-form-equations]], [[lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates]]).

[F3] Bounded smooth Euclidean balls have compact $H^1\hookrightarrow L^2$ inclusions under AC, and Sobolev derivatives of sufficiently high order give continuous classical derivatives with the higher-order embedding bound ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]], [[thm-higher-order-sobolev-embedding]]).

[F4] $L^2$ and $H^1$ have complete integral inner products; Lax–Milgram solves bounded coercive sesquilinear forms on real or complex Hilbert spaces ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[lem-w-one-two-is-a-hilbert-space]], [[thm-lax-milgram]]).

[F6] Repeated chain rule, integrable change of variables, Hölder and Young estimates are [[thm-chain-rule-for-total-derivatives]], [[cor-c-one-change-of-variables-for-l-one-functions]], [[thm-holder-inequality-for-integrals]] and [[thm-young-inequality-real-exponents]].

[F5] AC and its consequences are [[def-axiom-of-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]].

## Proof

1.1 Choose finitely many relatively compact bundle charts and subordinate smooth functions $\rho_i$ with sum one and supports strictly inside the charts. Each coefficient transformation on a compact overlap is multiplication by a smooth matrix followed by a smooth coordinate diffeomorphism with bounded derivatives and inverse derivatives at every fixed order. For a smooth coefficient function, the repeated chain rule expresses each derivative of the transformed function of order at most $k$ as a finite sum of bounded coefficients times derivatives of the original function of order at most $k$; change of variables bounds the integrals because the Jacobian and its inverse are bounded there. Approximate compactly supported Sobolev coefficients by [F1] smooth functions and pass these bounds and the weak derivative identities to the limit. Thus the same bounds hold on Sobolev classes. Multiplication by transition matrices is bounded by [F1]. Insert $u=\sum_i\rho_i u$ to compare any two finite-chart norms; the finite sum yields bounds in both directions. The metric and density are bounded above and below on these compact supports, giving $H^0=L^2$ and equivalent norms. [F1, F6, given]

2.1 Completeness is checked on the finitely many coefficient functions and derivatives: a Cauchy sequence has $L^2$ limits for every derivative of order at most $k$; passing the test-function identities to the limit identifies these as derivatives of the zeroth-order limit. The transition identities pass in $L^2$ by the bounds of step 1.1, so these local limits are one global section. This proves completeness for the sum-of-integral-derivatives inner product. To obtain smooth density, use cutoffs equal to one near each $\operatorname{supp}\rho_i$, mollify the zero-extended coefficient functions, multiply again by these cutoffs, extend the resulting sections by zero and sum; [F1] makes the sum converge in $H^k$. For a bounded $H^{k+1}$ sequence, all derivatives of the finitely many localized coefficients of order at most $k$ are bounded in $H^1$ on a fixed Euclidean ball. Apply [F3] successively to these finitely many families and retain a common subsequence converging in $L^2$ for every derivative. It is Cauchy in $H^k$, hence convergent. Apply the embedding of [F3] on the same balls and step 1.1 to get the $C^r$ bound when $k>r+n/2$. [F1, F3, F4, F5, step 1.1]

2.2 In a precompact chart each component of $Pu=f$ can be written $-\partial_i(a^{ij}\partial_j u_\alpha)=f_\alpha-\widetilde B^j_{\alpha\beta}\partial_j u_\beta-C_{\alpha\beta}u_\beta.$ The adjusted matrices $\widetilde B$ include the derivatives of $a$. If $u\in H^1$, the right side is locally $L^2$ and bounded by $C(\|f\|_2+\|u\|_{H^1})$ on an outer patch. The weak scalar equation follows by testing the original distributional equation against a compactly supported test in the single component and integrating its principal part once. [F2] therefore gives all components in $H^2$ on an inner patch, with the same bound. Cover $M$ by finitely many inner patches, each with a larger precompact outer patch, to get $\|u\|_{H^2}\le C(\|f\|_{L^2}+\|u\|_{H^1}).$ The lower matrices have been moved to the source; no coupled principal system or Dirichlet theorem is imported. [F1, F2, step 1.1]

3.1 After step 2.2, interpolation [F2] on the finitely many zero-extended localized coefficients gives $\|u\|_{H^1}\le\varepsilon\|u\|_{H^2}+C_\varepsilon\|u\|_2$; cutoff derivatives add only lower-order terms, absorbed by choosing their interpolation tolerances small. Choose $C\varepsilon<1/2$ to obtain the stated $k=0$ estimate. For induction, suppose $f\in H^k$ and $u\in H^{k+1}$, $k\ge1$. On nested patches differentiate the scalar principal equation $k$ times. For $|\alpha|=k$, $w=\partial^\alpha u_\beta\in H^1$ satisfies the same scalar second-order equation with source $\partial^\alpha f_\beta$ plus terms involving at most $k+1$ derivatives of $u$: in the commutator with the principal term at least one derivative hits $a$, and the lower terms have order at most one. All these terms are $L^2$, with bound $C_k(\|f\|_{H^k}+\|u\|_{H^{k+1}})$. Apply [F2] to $w$ on successively smaller patches and sum to get $\|u\|_{H^{k+2}}\le C_k(\|f\|_{H^k}+\|u\|_{H^{k+1}})$. Repeated use of the interpolation inequality of [F2] gives $\|u\|_{H^{k+1}}\le\varepsilon\|u\|_{H^{k+2}}+C_{k,\varepsilon}\|u\|_2$; absorb again. Starting with step 2.2 and using $f\in H^k\subset H^{k-1}$ proves the required membership before this absorption. The embedding of step 2.1 then proves smoothness for smooth $f$. [F1, F2, step 2.1, step 2.2]

3.2 Let $a(u,v)$ be the form obtained from $(Pu,v)_{L^2}$ by integrating the second-order principal term once, initially for smooth sections. It is bounded on $H^1\times H^1$: its integrands have at most one derivative in either factor and bounded coefficients. Formal symmetry and smooth density give $a(u,v)=\overline{a(v,u)}$. To prove a global lower bound, choose real smooth cutoffs $\chi_i$ supported in the charts with $\sum_i\chi_i^2=1$ (normalize a finite family of bumps by the positive smooth square root of their sum of squares). For smooth $u$, the principal integral of $a(\chi_i u,\chi_i u)$ is bounded below by $c_i\|\partial(\chi_i u)\|_2^2$: positive definiteness of the scalar coefficient and the positive bundle metric give this bound uniformly on its support. Every remaining term is bounded by $C\|\chi_i u\|_2\|\chi_i u\|_{H^1}+C\|\chi_i u\|_2^2$ and Young's inequality absorbs half the leading gradient. In the sum over $i$, $a(u,u)-\sum_i a(\chi_i u,\chi_i u)$ contains only terms with a derivative on a cutoff; second derivatives on $u$ cancel by $\sum_i\chi_i^2=1$, and these remaining terms are bounded by $C\|u\|_2\|u\|_{H^1}+C\|u\|_2^2$. Absorb once more. Norm equivalence yields constants $c>0,C$ with $a(u,u)\ge c\|u\|_{H^1}^2-C\|u\|_2^2.$ Density extends this real inequality and the bounded form to all $H^1$. [F1, F6, step 1.1, step 2.1, algebra]

4.1 Fix $\lambda>C+1$. Then $a_\lambda=a+\lambda(\cdot,\cdot)_2$ is coercive on $H^1$, so [F4] gives for every $f\in L^2$ a unique $u=Bf\in H^1$ with $a_\lambda(u,v)=(f,v)_2$ for every $v\in H^1$, with $\|u\|_{H^1}\le C'\|f\|_2$. Testing smoothly gives $Pu=f-\lambda u$ distributionally; step 3.1 gives $u\in H^2$ and $\|u\|_{H^2}\le C''\|f\|_2$. Conversely any $u\in H^2$ has $Pu\in L^2$ and integration by parts, passed by smooth approximation, gives the same weak identity with $f=(P+\lambda)u$. Uniqueness shows both inverse identities and $\operatorname{ran}B=H^2$. Symmetry gives $(Bf,g)_2=a_\lambda(Bf,Bg)=(f,Bg)_2$, so $B$ is bounded selfadjoint. Its range contains all smooth sections and is therefore dense; $Bf=0$ implies $(f,v)_2=0$ for every smooth $v$, hence $f=0$. Compactness follows from its bounded $H^2$ range and step 2.1. [F4, step 2.1, step 3.1, step 3.2]

5.1 Selfadjointness of the unbounded domain is proved directly. Put $A=P+\lambda$ with domain $H^2=\operatorname{ran}B$. It is densely defined and symmetric. If $y$ belongs to $\operatorname{dom}A^*$ with $A^*y=z$, then $(Au,y)_2=(u,z)_2$ for every $u\in H^2$. Set $u=Bf$ for arbitrary $f\in L^2$ and use symmetry of $B$ to obtain $(f,y)_2=(Bf,z)_2=(f,Bz)_2$; thus $y=Bz\in H^2$ and $Ay=z$. Conversely symmetry puts every $H^2$ element in $\operatorname{dom}A^*$. Hence $A=A^*$, and subtracting the bounded real scalar $\lambda$ gives $P=P^*$ on exactly $H^2$. Higher regularity step 3.1, with $Pu=f-\lambda u$, inductively yields $B:H^k\to H^{k+2}$ bounded (use $\|Bf\|_2\le C\|f\|_2$ and the already obtained lower-order bounds), and gives smooth preservation. [step 3.1, step 4.1, algebra]

6.1 The inverse identities in step 4.1 give $PB=I-\lambda B$ on $L^2$ and $BP=I-\lambda B$ on $H^2$. On $L^2$ the error is compact by step 4.1; on $H^2$ the restriction $B:H^2\to H^4$ is bounded by step 5.1 and $H^4\hookrightarrow H^2$ compact by two uses of step 2.1. Thus both are parametrices modulo compact operators on their respective spaces. All four conclusions, including the explicitly proved selfadjoint domain, follow. [step 2.1, step 4.1, step 5.1] ∎
