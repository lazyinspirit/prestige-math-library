---
id: lem-em-pec-cavity-eigenfield-boundary-regularity
kind: lemma
domain: mathematics
title: "Smooth boundary regularity of PEC cavity eigenfields in the declared graph completion"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 3
deps: [lem-em-smooth-pec-cavity-spectral-closure, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-wkp-extension-from-a-half-space, lem-cutoff-difference-quotient-commutator-estimate, thm-extension-theorem-for-bounded-smooth-domains, thm-higher-order-sobolev-embedding, lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain, def-axiom-of-choice, thm-riesz-representation-for-hilbert-space, cor-cauchy-schwarz-inequality-for-l-two, thm-dominated-convergence, def-bounded-c-k-domain-and-boundary-charts, def-laplacian-of-a-c2-function, thm-algebra-of-derivatives, lem-compactness-of-a-subspace-is-ambient, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-acl-characterisation-of-w-one-p, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-complex-translation-and-approximate-identity-interfaces, lem-test-function-cutoffs-and-euclidean-localization]
dependency_roles:
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-acl-characterisation-of-w-one-p: mathematical-premise
  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values: mathematical-premise
  lem-compactness-of-a-subspace-is-ambient: mathematical-premise
  lem-em-smooth-pec-cavity-spectral-closure: mathematical-premise
  thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  thm-wkp-extension-from-a-half-space: mathematical-premise
  lem-cutoff-difference-quotient-commutator-estimate: mathematical-premise
  thm-extension-theorem-for-bounded-smooth-domains: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis), printed pp. 114-117 (Theorems 4.30-4.32: scalar boundary difference-quotient method)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Printed pp. 114-117 (PDF pp. 120-123), a complete bounded excerpt of the scalar Dirichlet difference-quotient method; the source is not an applicable vector PEC theorem. The vector coupling, actual graph-class tests and Robin bootstrap are proved locally in this item."
    - title: "S. Dyatlov, Lecture notes for 18.155: distributions, elliptic regularity, and applications (MIT), Chapter 15.1"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Section 15.1 (elliptic regularity in Sobolev spaces) as contextual reference for the bootstrap scheme; the boundary commutator and mixed vector estimate are local."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^3$ be a bounded $C^\infty$ domain ([[def-bounded-c-k-domain-and-boundary-charts]]), and let $X$ be exactly the curl/div graph-norm completion of smooth-on-the-closure fields with $\nu\times u=0$ defined in [[lem-em-smooth-pec-cavity-spectral-closure]]. If $u\in X$, $\operatorname{div}u=0$ weakly, and $\lambda\ge0$ satisfies

$$\int_\Omega\operatorname{curl}u\cdot\operatorname{curl}v=\lambda\int_\Omega u\cdot v\qquad(v\in X),$$

then $u\in H^m(\Omega;\mathbb R^3)$ for every integer $m\ge1$ and has a $C^\infty$ representative on the closure (indeed a smooth ambient extension to a neighbourhood of the closure). For each $m$, $\|u\|_{H^m}\le C_{m,\Omega,\lambda}\|u\|_{H^1}$. The equations $\operatorname{curl}\operatorname{curl}u=\lambda u$, $\operatorname{div}u=0$, $\nu\times u=0$ and $\partial_\nu u_n+(\operatorname{div}\nu)u_n=0$ hold classically, where $u_n=u\cdot\nu$ and the normal is extended constant along collar normal lines. This includes zero eigenvalues and disconnected domains; it asserts neither equality with every maximal tangential-trace realization nor smoothness of arbitrary finite-energy modal sums.

## Facts & Assumptions
**Given:** The Axiom of Choice; a bounded $C^\infty$ domain $\Omega$ with compact boundary, outward unit normal $\nu$ extended smoothly as a unit field in a collar, boundary curvature $\kappa=\operatorname{div}\nu$ on the boundary; the graph completion $X$ and its properties from [[lem-em-smooth-pec-cavity-spectral-closure]]; a field $u\in X$ with $\operatorname{div}u=0$ and the full-$X$ eigenidentity of the Statement.

[F1] **Graph completion and its H-one structure.** The spectral-closure Statement supplies the closed inclusion $X\subset H^1$ with zero tangential trace and the exact bounds $\|w\|_{H^1}\le C_\Omega\|w\|_X$ and $\|w\|_X\le C_\Omega\|w\|_{H^1}$, where $\|w\|_X^2=\|w\|_2^2+\|\operatorname{curl}w\|_2^2+\|\operatorname{div}w\|_2^2$. It also supplies $\|Tw\|_2^2\le\delta\|\nabla w\|_2^2+C_{\Omega,\delta}\|w\|_2^2$ for every $\delta>0$ and $w\in H^1$. The trace operator on $H^1$ is bounded ([[lem-em-smooth-pec-cavity-spectral-closure]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]), and smooth PEC fields are dense in $X$ by its definition. The spectral-closure Statement also supplies the Gaffney identity $\int_\Omega(|\operatorname{curl}w|^2+|\operatorname{div}w|^2-|\nabla w|^2)=\int_{\partial\Omega}\kappa\,w_n^2\,dS$ for smooth PEC $w$.

[F2] **Admissible tests.** For a localized flattened triple $V=(V_1,V_2,V_3)$ supported away from the artificial chart sides with zero traces of $V_1,V_2$ at $s=0$, the odd extension of $V_1,V_2$ and the even extension of $V_3$ are $H^1$ across the interface, and mollification with a kernel even in $s$ followed by an even cutoff produces smooth PEC fields converging in $H^1$; the first-order reflection assertion is verified locally in step 3.1. Integer-order half-space extensions are supplied by [[thm-wkp-extension-from-a-half-space]]. ACL representatives and product integration are supplied by [[thm-acl-characterisation-of-w-one-p]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]. Smooth convolution and approximate-identity convergence in $L^2$ are supplied by [[lem-complex-translation-and-approximate-identity-interfaces]]; applied to a field and each weak derivative, they give $H^1$ convergence, since distributional differentiation commutes with convolution by integration of the weak-derivative identity. Nonnegative smooth compact cutoffs exist by [[lem-test-function-cutoffs-and-euclidean-localization]]. Interior compactly supported tests are produced by the same convolution construction.

[F3] **Commutator and Riesz tools.** The cutoff/difference-quotient commutator estimate controls the lower-order terms with smooth multipliers ([[lem-cutoff-difference-quotient-commutator-estimate]]); $L^2(S)$ is a Hilbert space so bounded functionals are represented ([[thm-riesz-representation-for-hilbert-space]]); Cauchy-Schwarz, dominated convergence and the algebra of derivatives are available ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-dominated-convergence]], [[thm-algebra-of-derivatives]]).

[F4] **Extensions and embeddings.** $W^{k,p}$ extension from the half-space and from bounded smooth domains, higher-order Sobolev embeddings, and a fixed parameter-preserving smooth extension of smooth-domain fields to an ambient neighbourhood ([[thm-wkp-extension-from-a-half-space]], [[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-higher-order-sobolev-embedding]], [[lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain]]).



[F5] **Finite chart covers.** The closed bounded boundary is compact by [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], and its ambient open chart cover has a finite subcover by [[lem-compactness-of-a-subspace-is-ambient]].

## Proof

**Proof technique:** direct.

1.1 Polarizing the Gaffney identity [F1] gives, for smooth PEC $u,v$, $\int_\Omega(\operatorname{curl}u\cdot\operatorname{curl}v+\operatorname{div}u\operatorname{div}v)=\int_\Omega\nabla u:\nabla v+\int_{\partial\Omega}\kappa\,u_nv_n\,dS$: the integration-by-parts boundary term before imposing the traces is $\sum_{i,j}\int_{\partial\Omega}(\nu_ju_j\partial_iv_i-\nu_ju_i\partial_iv_j)$, and at the boundary $u=u_n\nu$, $v=v_n\nu$ with $\nu\cdot\partial_i\nu=0$, so it reduces to $\kappa u_nv_n$; the sign is positive for an outward sphere with $\kappa=2/R$, and no convexity is assumed. [given, F1, F3, algebra]

2.1 By the $H^1$ equivalence and bounded trace of [F1] the identity of step 1.1 extends to all $u,v\in X$; combining it with $\operatorname{div}u=0$ and the eigenidentity of the Statement gives the weak mixed boundary identity $\int_\Omega\nabla u:\nabla v+\int_{\partial\Omega}\kappa\,u_nv_n\,dS=\lambda\int_\Omega u\cdot v$ for every $v\in X$; no classical normal derivative has been assumed. [step 1.1, given, F1, algebra]

3.1 Flattening: shrink smooth boundary charts and take a finite cover of the compact boundary with nested half-boxes $(y_1,y_2,s)$, $s>0$ inside, and cutoffs away from artificial sides; choose a smooth orthonormal frame $Q=(\tau_1,\tau_2,\nu)$ with $\tau_2=\nu\times\tau_1$ and write $u=QU$. The $H^1$ trace has $TU_1=TU_2=0$ while $TU_3$ is free, and by [F2] every localized $H^1$ triple with these two vanishing traces is an admissible test for the identity of step 2.1 after odd/even extension, mollification and cut off; For completeness, for a localized scalar $z$ the odd extension is $z(y,s)$ for $s>0$ and $-z(y,-s)$ for $s<0$, while the even extension uses $z(y,-s)$ on $s<0$. The even extension has matching traces for every $z\in H^1$; the odd one has matching traces when $Tz=0$. On almost every normal line the ACL representative has a finite endpoint limit, because its derivative is $L^2$ on the bounded interval and hence $L^1$; this limit is the flat chart trace. Integration along those lines and then Fubini [F2] show that the weak normal derivative is the reflected derivative with the corresponding sign: the only possible boundary jump term is the difference of the two endpoint traces, which vanishes. Tangential differentiation acts on each half independently, so all reflected weak derivatives lie in $L^2$. Take a nonnegative smooth compact mollifier even in $s$, obtained by symmetrizing a cutoff from [F2] and normalizing its positive integral. Convolution preserves odd/even parity and converges together with all first weak derivatives in $L^2$ by [F2]; multiplication by an even cutoff away from the artificial sides preserves the parity. The resulting smooth first two components vanish at $s=0$, and the third has unrestricted value there. Pulling back through the smooth frame and chart and extending by zero outside the compact chart support therefore gives actual smooth PEC fields whose $H^1$ limits are the localized test triples, proving that those tests belong to $X$. [step 2.1, given, F2, F5, algebra]

4.1 Local coupled weak system: expanding $\nabla(QU)$ in step 2.1 and transporting the volume and surface measures produces a real symmetric smooth principal matrix $a^{ij}$, uniformly positive on the smaller half-box and scalar in the component indices, such that for all admissible triples $V$ $\sum_m\int a^{ij}\partial_jU_m\partial_iV_m+\int_B\beta U_3V_3=\int f\cdot V+\sum_i\int G_i\cdot\partial_iV+\int_BhV_3$, where $B=\{s=0\}$, $\beta=\kappa J_B$ is smooth and possibly signed, $f=\lambda JU+\sum_iC_i\partial_iU+C_0U\in L^2$, $G_i=B_iU\in H^1$ for smooth matrix coefficients, and $h=0$ in the original eigenidentity; the estimate below also allows an additional datum $h\in H^1(B)$. This follows by expanding the finite products, the two differentiated factors producing the scalar $a^{ij}$ because $Q^{\mathsf T}Q=I$, while terms with derivatives of $Q$ and $U$ enter $f$ or $G$, with no extra boundary datum. [step 3.1, F3, algebra]

5.1 Tangential mixed estimate: for $k=1,2$ put $W=\delta_h^kU$ and test with $V=-\delta_{-h}^k(\eta^2W)$ on a nested patch; the test is admissible by [F2], discrete integration by parts and the shifted product rule give the principal term $\sum_m\int\eta^2a^{ij}(x+he_k)\partial_jW_m\partial_iW_m\ge\alpha\|\eta\nabla W\|_2^2$, and all remaining terms involve $\delta_ha$, $\nabla\eta$, $\nabla U$, $W$ and the Robin product; [F3] bounds them by $\epsilon\|\eta\nabla W\|_2^2+C_\epsilon\|U\|_{H^1}^2$ on the larger patch using $\|W\|_2\le C\|\partial_kU\|_2$ and $\|\delta_{-h}(\eta^2W)\|_2\le C(\|\eta\nabla W\|_2+\|W\|_2)$ from the elementary line formula and Cauchy-Schwarz, the $f$ pairing is bounded without differentiating $f$ using the displayed bound for the test in $L^2$; transfer the quotient in the $G$ pairing to $G$ and use $\|\delta_hG\|_2\le C\|G\|_{H^1}$, and transfer the boundary quotient to $h$ using $\|\delta_hh\|_{L^2(B)}\le C\|h\|_{H^1(B)}$. The exact Robin quotient is $\int_B\beta(y+h)\eta^2|W_3|^2+\int_B(\delta_h\beta)U_3\eta^2W_3$. The trace estimate of [F1] $\|Tz\|_2^2\le\epsilon\|\nabla z\|_2^2+C_\epsilon\|z\|_2^2$ absorbing the Robin and boundary-datum terms even when $\beta$ has either sign; choosing the finitely many epsilons small gives $\|\eta\nabla\delta_h^kU\|_2\le C(\|U\|_{H^1}+\|f\|_2+\|G\|_{H^1}+\|h\|_{H^1(B)})$ uniformly for small $h\ne0$. [step 4.1, F1, F2, F3, algebra]

6.1 Normal recovery: by step 5.1 each distributional tangential derivative of every $\partial_iU_m$ is an $L^2$ class, since its pairing with a smooth test is the limit of $\int\delta_h^k(\partial_iU_m)\psi$ and is a bounded $L^2$ functional, represented by [F3]'s Riesz theorem; interior quotient tests give the same conclusion away from the boundary; hence the interior equation $-\partial_i(a^{ij}\partial_jU_m)=f_m-\partial_iG_{i,m}$ together with $a^{33}\ge\alpha>0$ yields $a^{33}\partial_{33}U_m=\partial_iG_{i,m}-f_m-\sum_{(i,j)\ne(3,3)}a^{ij}\partial_{ij}U_m-\sum_{i,j}(\partial_ia^{ij})\partial_jU_m$ with every right-hand term in $L^2$, so all three second normal derivatives are $L^2$ and $U\in H^2$ locally; this does not presuppose a classical Robin derivative. [step 5.1, F3, algebra]

7.1 Bootstrap with boundary commutators: suppose $U\in H^{r+1}$ locally, $r\ge1$; then $f\in H^r$ and $G\in H^{r+1}$ because the eigenvalue term is $\lambda JU$ and the coefficients are smooth. For a tangential multi-index $\alpha$ of order $r$ put $Z=D_y^\alpha U\in H^1$; its first two traces still vanish, and trace commutation is justified by extending localized $H^{r+1}$ classes with the integer-order half-space extension [F4], mollifying in that norm and passing the continuous $H^1$ trace identity to the limit. Applying the weak system of step 4.1 to $Z$ by tangential integration by parts leaves the same principal and Robin terms with bulk datum $D_y^\alpha f\in L^2$, divergence datum $\widetilde G_i=D_y^\alpha G_i-\sum_{0<\gamma\le\alpha}\binom{\alpha}{\gamma}(D_y^\gamma a^{ij})\partial_jD_y^{\alpha-\gamma}U\in H^1$ and boundary commutator $\widetilde h=-\sum_{0<\gamma\le\alpha}\binom{\alpha}{\gamma}(D_y^\gamma\beta)TD_y^{\alpha-\gamma}U_3\in H^1(B)$: indeed $|\alpha-\gamma|\le r-1$, so the indicated derivative is $H^2$ and its trace and tangential derivative traces are $L^2$ by the $H^1$ trace and the just-proved commutation. Steps 5.1-6.1 then give $Z\in H^2$, controlling total order $r+2$ with at most two normal derivatives; differentiating the normal-recovery equation of step 6.1 and inducting on the number of normal derivatives at fixed total order (the non-$(3,3)$ terms have strictly fewer normal derivatives, and all differentiated coefficients and data have the available order) yields $U\in H^{r+2}$; nested patches and the finite boundary/interior cover give $u\in H^m(\Omega)$ for every integer $m$ with $\|u\|_{H^m}\le C_{m,\Omega,\lambda}\|u\|_{H^1}$. [step 4.1, step 5.1, step 6.1, F4, F3, algebra]

8.1 Classical conclusion: for each $j$ choose $m>j+3/2$; the extension theorem and higher-order Sobolev embedding [F4] give continuous derivatives through order $j$ on the closure, compatible by weak-derivative uniqueness, and the fixed parameter-preserving smooth extension [F4] applied to the (time-constant) field yields one actual smooth ambient representative near the whole closure; therefore all jets have continuous one-sided boundary limits. The interior variational equation gives $\operatorname{curl}\operatorname{curl}u=\lambda u$ pointwise ([[def-laplacian-of-a-c2-function]], [F3]), the tangential trace $\nu\times u=0$ is classical, and the boundary identity of step 1.1 tested with arbitrary smooth compactly supported normal traces, admissible by [F2], gives $\partial_\nu u_n+\kappa u_n=0$ pointwise; the unit-normal collar extension ensures $\partial_\nu u_n=(\partial_\nu u)\cdot\nu$, which agrees with the classical identity $\operatorname{div}u=\partial_\nu u_n+\kappa u_n$ for zero tangential trace, so $\operatorname{div}u=0$ holds classically. [step 7.1, F4, F3, algebra]

9.1 The argument covers $\lambda=0$ and disconnected smooth domains, since no component is singled out and the local estimates are globalized over the finite cover; it makes no smoothness assertion for arbitrary finite-energy modal sums and no identification with a maximal tangential-trace realization, and the full Axiom of Choice is carried from the completion, trace, extension, Hilbert and Sobolev suppliers. [step 7.1, step 8.1, given, F1, algebra] ∎
