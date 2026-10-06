---
id: lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts
kind: lemma
title: "Weak divergence-form equations are invariant under $C^2$ boundary charts"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-local-weak-solution-for-a-divergence-form-operator, def-bounded-c-k-domain-and-boundary-charts, def-uniformly-elliptic-divergence-form-operator, thm-meyers-serrin-density-on-an-arbitrary-open-set, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, cor-c-one-change-of-variables-for-l-one-functions, thm-chain-rule-for-total-derivatives, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-countable-choice, lem-cutoff-difference-quotient-commutator-estimate, lem-c-k-boundary-flattening-preserves-wkp-locally]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.12, change of variables for the weak formulation and the coefficient formulas, printed p. 114 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 9, flattening a boundary and transforming the equation, printed pp. 86-90 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, let $L,a$ be as in [[def-uniformly-elliptic-divergence-form-operator]], let $f\in L^2_{\mathrm{loc}}(\Omega)$ and let $u\in H^1(\Omega)$ be a local weak solution of $Lu=f$ ([[def-local-weak-solution-for-a-divergence-form-operator]]). Let $\Phi:W\to V$ be a $C^2$ diffeomorphism of ambient open sets such that $\Phi(W\cap\Omega)=V\cap H$, where $H=\{y_n>0\}$, and put $\psi=\Phi^{-1}$. Then $\widehat u=u\circ\psi\in H^1_{\mathrm{loc}}(V\cap H)$, with
$$D\widehat u(y)=D\psi(y)^TDu(\psi(y)),$$
and it satisfies the weak integral identity for $\widehat L\widehat u=\widehat f$ against every compactly supported smooth test on $V\cap H$. Equivalently, on every bounded open $G\Subset V\cap H$ its restriction is a local weak solution in the sense of [[def-local-weak-solution-for-a-divergence-form-operator]], with the transformed coefficients restricted to $G$. Here $\widehat f=|\det D\psi|(f\circ\psi)$ and
$$\widetilde a^{ij}(y)=|\det D\psi(y)|\sum_{p,q}a^{pq}(\psi(y))\partial_p\Phi_i(\psi(y))\partial_q\Phi_j(\psi(y)),$$
$$\widetilde b^i(y)=|\det D\psi(y)|\sum_pb^p(\psi(y))\partial_p\Phi_i(\psi(y)),\qquad \widetilde c(y)=|\det D\psi(y)|c(\psi(y)).$$
The transformed datum is locally $L^2$, and the transformed coefficients are locally bounded; quantitative ellipticity is given by the companion flattening lemma. If $\zeta\in C_c^\infty(W)$ is an ambient cutoff, then $\widehat{\zeta u}\in H^1(V\cap H)$, with a norm bound determined by the cutoff and the chart/inverse derivative and Jacobian bounds on a compact ambient neighbourhood of $\operatorname{supp}\zeta$. Its distributional transformed equation uses the localized datum; when $a\in W^{1,\infty}$ and the original datum is square-integrable on the localized patch, that localized datum is also $L^2$. If additionally $u\in H^1_0(\Omega)$, then $\widehat{\zeta u}\in H^1_0(V\cap H)$, so zero Dirichlet data are preserved. In particular these global and zero-trace conclusions hold for $u$ itself when its support in $\overline\Omega$ is a compact subset of $W$, by choosing $\zeta=1$ near that support. The change of variables acts on the weak formulation and requires no classical regularity of $u$.
More generally, if the ambient chart and inverse are $C^m$ with bounded
derivatives through order $m$ on the cutoff patch, the same localized
pullback is bounded in $H^m$; for $W^{m,\infty}$ inputs it is bounded in
$W^{m,\infty}$. These bounds remain valid on patches reaching the flat boundary.

## Facts & Assumptions

**Given:** Countable Choice; the weak solution $u$ and datum $f$; the $C^2$ ambient boundary chart $\Phi:W\to V$ with $\Phi(W\cap\Omega)=V\cap H$; and the identification $\varphi=\Phi$, $\psi=\Phi^{-1}$.

[F1] Local weak solution: $a(u,v)=\int_\Omega f\overline v\,dx$ for every $v\in C_c^\infty(\Omega)$. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] Chain rule: for a smooth approximation $u_m$ on $W\cap\Omega$, $D(u_m\circ\psi)=D\psi^T(Du_m\circ\psi)$. On compactly contained matched patches, the chart and inverse have bounded derivatives and Jacobians bounded above and away from zero. ([[thm-chain-rule-for-total-derivatives]], [[def-bounded-c-k-domain-and-boundary-charts]])

[F3] Meyers--Serrin density gives smooth $H^1$ approximations on an open patch of $W\cap\Omega$; bounded pullback on compactly contained matched patches then passes the chain rule to the limit. ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]])

[F4] Change of variables holds for a $C^1$ diffeomorphism, with $dy=|\det D\Phi(x)|dx$ and $dx=|\det D\psi(y)|dy$. ([[cor-c-one-change-of-variables-for-l-one-functions]])

[F5] For $\widehat v\in C_c^\infty(V\cap H)$, the pullback $v=\widehat v\circ\Phi$ is $C^2$ with compact support in $\psi(V\cap H)=W\cap\Omega$, hence is an $H^1_0(W\cap\Omega)$ test. It can be approximated in $H^1$ by smooth tests with support in a fixed compact subset of $W\cap\Omega$, so boundedness of the weak pairings makes it admissible. A $C^2$ chart need not preserve $C^\infty$ functions. ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]])

[F6] Coefficient package of the transformed form: the functions $\widetilde a^{\,ij},\widetilde b^{\,i},\widetilde c$ defined by the displayed formulas are measurable (compositions and products of measurable maps) and bounded on compact subsets of $V$ by $\Lambda$-bounds on the chart and $M_a,M_b,M_c$; here only measurability and local boundedness are used. ([[def-bounded-c-k-domain-and-boundary-charts]], [[def-uniformly-elliptic-divergence-form-operator]])

## Proof

1.1 Local pullback and gradient. Let $G\Subset V\cap H$ be open and choose $G'\Subset W\cap\Omega$ containing $\psi(\overline G)$. By [F3], smooth approximations $u_m\to u$ in $H^1(G')$ exist. Change of variables and the compact chart bounds give $\|(u_m-u_\ell)\circ\psi\|_{H^1(G)}\le C_G\|u_m-u_\ell\|_{H^1(G')}$. Passing to the $H^1$ limit establishes $\widehat u\in H^1_{\mathrm{loc}}(V\cap H)$ and $D\widehat u=D\psi^T(Du\circ\psi)$ almost everywhere. If these derivative and Jacobian bounds are uniform on the whole matched patch, the identical integral estimate establishes global $H^1$ membership there. Local boundedness alone gives only the local conclusion. [F2, F3, F4, algebra]

1.2 Admissible transformed tests. For $\widehat v\in C_c^\infty(V\cap H)$, [F5] makes $v=\widehat v\circ\Phi$ an admissible compactly supported $H^1$ test. Approximate $v$ by smooth tests on a fixed compact patch; the coefficient bounds, $f\in L^2$ on that patch and Cauchy--Schwarz pass the weak identity to $v$. Thus no preservation of smooth test functions by the chart is required. [F1, F5, F6]

2.1 Coefficient matching. Use the standard Jacobian convention $M_{ip}=\partial_p\Phi_i$ at $x=\psi(y)$ and $N_{pi}=\partial_i\psi_p$ at $y$, so $MN=NM=I$. The displayed component formula is $\widetilde a=|\det N|MaM^T$, and $Du(x)=M^TD\widehat u(y)$, $Dv(x)=M^TD\widehat v(y)$. Substituting these two gradients and $dx=|\det N|dy$ gives exactly $\int\widetilde a^{ij}D_j\widehat u\overline{D_i\widehat v}dy=\int a^{pq}D_qu\overline{D_pv}dx$. The same substitution gives $\widetilde b=|\det N|Mb$, $\widetilde c=|\det N|c$ and $\widehat f=|\det N|(f\circ\psi)$. All integrals may be restricted to the matched test-support patches. [F2, F4, step 1.1, algebra]

2.2 Global membership after localization. For $\zeta\in C_c^\infty(W)$, the product $\zeta u$ belongs to $H^1(W\cap\Omega)$ and is supported in a compact ambient patch. On this patch $D\Phi,D\psi$ and the Jacobians have uniform bounds. The local chain rule of step 1.1 and change of variables give $\|\widehat{\zeta u}\|_{H^1(V\cap H)}\le C(\zeta,\Phi)\|u\|_{H^1(\Omega)}$ by integrating the weak gradient formula over the whole half-patch. The formula vanishes outside the image of the cutoff support. Its distributional equation follows by the product rule; with $a\in W^{1,\infty}$ the cutoff commutators expand to $L^2$ terms whenever the localized forcing is $L^2$. [F2, F4, step 1.1, algebra]

2.3 Zero-trace transfer on an aligned boundary patch. For a boundary chart whose ambient patch $W_0$ satisfies $\Phi(W_0\cap\Omega)=V\cap H$, take an ambient cutoff $\zeta$ supported inside $W_0$ and $u\in H^1_0(\Omega)$. Approximate $u$ by smooth compactly supported functions in $\Omega$, multiply by $\zeta$, and pull back. These pullbacks have compact support inside the open half-patch and lie in $H^1_0(V\cap H)$ by smooth approximation; uniform compact ambient chart bounds give their $H^1$ convergence. Hence the localized pullback has zero trace. Alignment is essential: restricting a compactly supported function across an unrelated interior plane does not preserve zero trace. [F3, F5, step 1.1]

3.1 Higher-order localized pullback. On compact interior subsets, the smooth-approximation proof of [[lem-c-k-boundary-flattening-preserves-wkp-locally]] gives $D^\alpha(z\circ\psi)=\sum_{|\beta|\le|\alpha|}(D^\beta z)\circ\psi\,P_{\alpha\beta}(D\psi,\ldots,D^m\psi)$ for $|\alpha|\le m$; order zero is the original class. The polynomials have uniform bounds on the compact ambient cutoff patch, including its flat boundary. Change of variables consequently bounds each field in $L^2$ on the entire half-patch, not just on its compact interior subsets. The local test identities identify these fields as the global weak derivatives; the cutoff vanishes near artificial edges, so no extra derivative is introduced by zero extension there. For $W^{m,\infty}$ input, apply the finite-exponent formula on bounded interior subsets and observe directly that all its fields have a common essential bound on the half-patch. This proves the two claimed higher-order bounds. The multiplier and support facts are those of [[lem-cutoff-difference-quotient-commutator-estimate]]. [F2, F3, F4, step 1.1, step 2.2, algebra]

3.2 Transformed equation. Steps 1.2 and 2.1 transform the actual weak identity for $u$ into $\int(\widetilde a^{ij}D_j\widehat u\overline{D_i\widehat v}+\widetilde b^iD_i\widehat u\overline{\widehat v}+\widetilde c\widehat u\overline{\widehat v})=\int\widehat f\overline{\widehat v}$ for each smooth compactly supported transformed test. The transformed datum is locally $L^2$ by change of variables on compact patches. On every bounded $G\Subset V\cap H$, step 1.1 gives $\widehat u\in H^1(G)$ and the chart bounds make all coefficients bounded. For $M=D\Phi\circ\psi$ and $J=|\det D\psi|$, ellipticity gives $\operatorname{Re}(\widetilde a^{ij}\xi_j\overline{\xi_i})\ge J\theta|M^T\xi|^2\ge\theta(\inf_GJ)(\sup_G\|D\psi\|)^{-2}|\xi|^2$; this positive constant establishes the operator hypotheses on $G$. Thus the cited local-solution definition applies to each restriction. The unrestricted transformed identity requires only $H^1_{\mathrm{loc}}$ membership and local coefficient bounds. [F1, F4, F6, step 1.1, step 1.2, step 2.1]

4.1 Conclusion. The component formulas and local weak equation are established by steps 1.1--3.2. Uniform chart bounds give global $H^1$ transfer, and step 2.3 proves zero-trace transfer for the aligned boundary patches used in Dirichlet estimates. The ambient cutoff supplies the uniform bounds for the global conclusion in step 2.2, and boundary alignment is a hypothesis of the Statement. [step 2.2, step 3.1, step 3.2, step 2.3] ∎

## Source notes

Hunter (printed p. 114) and Simon (Lecture 9, printed pp. 86--90) transform the weak equation on ambient boundary charts. With the standard Jacobian convention the principal coefficient matrix is $|\det D\psi|D\Phi\,a\,D\Phi^T$. The ambient cutoff supplies uniform chart bounds for global Sobolev transfer; approximation of compactly supported $H^1$ tests avoids assuming a $C^2$ chart preserves smooth test functions.
