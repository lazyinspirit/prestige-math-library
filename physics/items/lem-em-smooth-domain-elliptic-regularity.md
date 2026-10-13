---
id: lem-em-smooth-domain-elliptic-regularity
kind: lemma
domain: mathematics
title: "Classical smoothness of weak Poisson solutions on smooth domains and across smooth interfaces"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 4
deps: [lem-em-prescribed-fractional-dirichlet-existence, lem-em-weak-neumann-and-transmission-existence, thm-riesz-representation-for-hilbert-space, thm-extension-theorem-for-bounded-smooth-domains, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, thm-l-two-fourier-inversion, cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, def-countable-choice, def-bounded-c-k-domain-and-boundary-charts, lem-c-k-boundary-flattening-preserves-wkp-locally, def-first-difference-quotient, lem-difference-quotient-integration-by-parts, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, lem-weak-leibniz-rule-with-a-smooth-factor, thm-higher-order-sobolev-embedding, def-sobolev-space-wkp-and-its-norm, def-laplacian-of-a-c2-function, thm-the-curl-of-a-gradient-vanishes, thm-lp-trace-operator-on-a-bounded-c-one-domain, lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain]
dependency_roles:
  lem-em-prescribed-fractional-dirichlet-existence: mathematical-premise
  lem-em-weak-neumann-and-transmission-existence: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  thm-extension-theorem-for-bounded-smooth-domains: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-l-two-fourier-inversion: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  lem-c-k-boundary-flattening-preserves-wkp-locally: mathematical-premise
  def-first-difference-quotient: mathematical-premise
  lem-difference-quotient-integration-by-parts: mathematical-premise
  thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014), Chapters 4.11-4.12 (interior and boundary regularity)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapters 4.11-4.12 as the contextual reference for interior and boundary elliptic regularity and the difference-quotient method; the interface bootstrap and the concrete trace conclusions are supplied locally."
    - title: "S. Dyatlov, Lecture notes for 18.155: distributions, elliptic regularity, and applications (MIT), Sections 9.2 and 15.1"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Sections 9.2 and 15.1 (elliptic regularity in Sobolev spaces) as contextual reference; the flattening, difference-quotient and normal-recovery steps are local."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice inherited from the stated weak-existence, Sobolev extension and trace suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $\Omega\subset\mathbb R^3$ be a bounded $C^\infty$ domain ([[def-bounded-c-k-domain-and-boundary-charts]]), let $\varepsilon\in C^\infty(\overline\Omega;\operatorname{Sym}^3)$ be uniformly positive, and let $\rho$ be smooth on the closure. Prescribe in the prescribed-data lemma either smooth Dirichlet data $g\in C^\infty(\partial\Omega)$, or smooth outward flux data $g$ with its compatibility condition as in the weak Neumann lemma. Then the weak solution of $-\operatorname{div}(\varepsilon\nabla u)=\rho$ in $\Omega$ with those data is $C^\infty$ on the closure $\overline\Omega$. For finitely many disjoint closed smooth interfaces strictly inside $\Omega$, piecewise smooth positive $\varepsilon$, piecewise smooth $\rho$ and smooth sheet charge $\sigma$, the weak solution is smooth on each closed side. Edge and junction points, reentrant corners and coefficient loss of regularity are excluded. The existence claims are those of the two weak solvability lemmas; this lemma proves their classical upgrade on the declared domains.

## Facts & Assumptions
**Given:** A bounded $C^\infty$ domain $\Omega\subseteq\mathbb R^3$ with finite smooth boundary charts; a smooth uniformly positive coefficient $\varepsilon$ with constants $0<\alpha\le\beta<\infty$; smooth bulk data $\rho$ and the smooth boundary data of the Statement; the weak solution supplied by [[lem-em-prescribed-fractional-dirichlet-existence]] or [[lem-em-weak-neumann-and-transmission-existence]]; finitely many disjoint closed smooth interfaces with piecewise smooth data in the transmission case.

[F1] **Weak existence.** Under the declared Choice, the Dirichlet and compatible Neumann weak problems have unique solutions in the declared classes, and the transmission problem with sheet charge has a weak solution ([[lem-em-prescribed-fractional-dirichlet-existence]], [[lem-em-weak-neumann-and-transmission-existence]]).

[F2] **Flattening.** A $C^k$ chart diffeomorphism maps local $W^{k,p}$ classes with bounded derivatives and the chain rule ([[lem-c-k-boundary-flattening-preserves-wkp-locally]], [[def-bounded-c-k-domain-and-boundary-charts]]).

[F3] **Difference quotients.** The first difference quotient, its discrete integration by parts, the increment estimate $\|\delta_h^iu\|_{L^2(\Omega')}\le\|\partial_iu\|_{L^2}$, the converse characterization and the weak Leibniz rule are available ([[def-first-difference-quotient]], [[lem-difference-quotient-integration-by-parts]], [[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]], [[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F4] **Riesz, Cauchy-Schwarz and Sobolev tools.** Bounded functionals on closed subspaces of $L^2$ are represented by $L^2$ classes ([[thm-riesz-representation-for-hilbert-space]]), Cauchy-Schwarz holds ([[cor-cauchy-schwarz-inequality-for-l-two]]), and integer-order Sobolev spaces have the Fourier characterization with inversion and the embedding into continuous functions for $m>j+3/2$ ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[thm-l-two-fourier-inversion]], [[thm-higher-order-sobolev-embedding]], [[def-sobolev-space-wkp-and-its-norm]]).

[F5] **Calculus.** The gradient of a scalar is curl-free and the Laplacian is the Euclidean one ([[thm-the-curl-of-a-gradient-vanishes]], [[def-laplacian-of-a-c2-function]]); the extension theorem extends smooth-domain classes to $\mathbb R^3$ ([[thm-extension-theorem-for-bounded-smooth-domains]]).



[F6] **Trace and smooth extension.** The trace is bounded $H^1\to L^2$ on each bounded smooth side ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]]). A function all of whose derivatives extend continuously to a smooth-domain closure has one smooth ambient extension, by the explicit extension operator applied to a time-independent function ([[lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain]]).

## Proof

**Proof technique:** direct.

1.1 Local reduction: in an interior patch, or in a flattened smooth boundary or interface patch, write the weak equation in divergence form $\int a_{ij}\partial_ju\,\partial_iv=\int fv+\int G_i\partial_iv$ with $\tilde a=|\det D\Phi^{-1}|D\Phi\,a\,D\Phi^{\mathsf T}$ uniformly elliptic by the positivity of the Jacobian bounds and the bounds on $D\Phi$ ([[lem-c-k-boundary-flattening-preserves-wkp-locally]]); Dirichlet data are removed by subtracting a smooth lift $g(y)\eta(t)$ built from a finite subordinate smooth partition and a normal cutoff, and smooth Neumann flux is converted to smooth volume data by a collar vector field $G$ with $G\cdot n=g$ and the divergence theorem, so in every case the local datum has the form $f\in C^\infty$ plus a divergence term with smooth $G$. [given, F1, F2, F5, algebra]

2.1 Tangential estimate: for a tangential direction $k$ put $w=\delta_h^ku$ and test the local weak identity with $v=-\delta_{-h}^k(\eta^2w)$ for a cutoff $\eta$ supported in a smaller patch; the discrete integration by parts, the shifted product rule and the increment estimates of [F3] give the principal bound $\alpha\|\eta\nabla w\|_2^2$ against cutoff terms bounded by $C\|u\|_{H^1}[\|\eta\nabla w\|_2+\|w\|_2]$, with $\|\delta_ha\|_\infty\le\|\partial_ka\|_\infty$ and the $f,G$ contributions controlled by Cauchy-Schwarz; the absorption inequality $2AB\le(\alpha/2)A^2+2B^2/\alpha$ [F4] yields a bound $\|\eta\nabla\delta_h^ku\|_2\le C(\|u\|_{H^1}+\|f\|_{C^0}+\|G\|_{C^1})$ uniform in small $h$. [step 1.1, F3, F4, algebra]

3.1 Transmission surface terms and two-sided estimates. In an interface chart flatten the sheet to $B=\{s=0\}$, with half-boxes $P_+$ and $P_-$. The weak identity is $$\sum_{\pm}\int_{P_\pm}a^\pm_{ij}\partial_ju\,\partial_iv=\sum_{\pm}\int_{P_\pm}(f^\pm v+G^\pm_i\partial_iv)+\int_B\sigma_B\,Tv,$$ where $a^\pm,f^\pm,G^\pm$ are smooth up to their respective sides, $a^\pm$ are uniformly positive, and $\sigma_B$ is the sheet density multiplied by the smooth surface Jacobian. The solution and admissible tests have one common trace, since they are globally $H^1$; tangential translations preserve this common trace. For a tangential direction $k$ use the single global test $v=-\delta_{-h}^k(\eta^2\delta_h^ku)$, whose restrictions agree on the sheet. Discrete integration by parts on $B$ changes the sheet term to $\int_B(\delta_h^k\sigma_B)T(\eta^2\delta_h^ku)$. The cutoff is compactly supported in the chart, so no edge term occurs; smoothness bounds $\|\delta_h^k\sigma_B\|_{L^2(B)}$ independently of $h$. By [F6] the trace of $\eta^2\delta_h^ku$ is bounded by its $H^1$ norm on either side. Cauchy-Schwarz and Young's inequality bound the sheet term by $\epsilon\|\eta\nabla\delta_h^ku\|_{L^2(P_+\cup P_-)}^2+C_\epsilon(1+\|u\|_{H^1(P_+\cup P_-)}^2)$, since the increment estimate bounds $\delta_h^ku$ in $L^2$. The two positive principal terms sum, and the piecewise coefficient commutators have the same bounds as in step 2.1: tangential differences do not cross the flat sheet. Absorbing the finitely many $\epsilon$ terms yields the uniform two-sided tangential estimate. The distributional limit argument below gives tangential derivatives of the gradient on both sides, and expansion of the local weak equation recovers the pure normal second derivative separately with $a^\pm_{33}\ge\alpha>0$. This proves piecewise $H^2$ with the sheet charge retained. [F2, F3, F4, F6, step 2.1, algebra]

3.2 Weak second derivatives: the limit of the pairings of step 2.1 as $h\to0$ defines the distributional tangential derivative $\partial_k\partial_iu$ as a bounded functional in the $L^2$ norm on compactly supported smooth tests, which extends to the closed $L^2$ subspace they generate and is represented by an $L^2$ class through [F4]'s Riesz theorem, with no weak-subsequence selection; the same argument applied in all tangential directions gives every second derivative with at least one tangential index in flattened coordinates, and the interior patches allow all quotient directions. [step 2.1, F3, F4, algebra]

4.1 Normal recovery: with compactly supported smooth tests the weak identity reads $-\operatorname{div}(a\nabla u)=f-\operatorname{div}G$ distributionally, so expanding the divergence gives $a_{33}\partial_{33}u=\operatorname{div}G-f-\sum_{(i,j)\ne(3,3)}a_{ij}\partial_{ij}u-\sum_{i,j}(\partial_ia_{ij})\partial_ju$ with every right-hand term in $L^2$ and $a_{33}\ge\alpha>0$; hence the remaining normal second derivative is an $L^2$ class and the local $H^2$ bound holds on each declared side. [step 3.2, F5, algebra]

5.1 Higher orders: differentiating the weak equation by tangential multi-indices and re-applying steps 2.1-4.1 raises the regularity by two tangential orders and then recovers the normal derivatives one by one through the same explicit equation; the exact coefficient commutators are finite combinations of lower-order derivatives and the data are smooth, so induction gives $u$ locally in $H^m$ for every $m$ on each declared side, with the Dirichlet tangential derivatives keeping zero trace and natural tests remaining admissible; the finite cover of the compact closure and the finitely many pieces give the global bounds on each side. [step 2.1, step 3.2, step 4.1, F2, F3, algebra]

5.2 Higher transmission orders. Suppose the piecewise solution is $H^{r+1}$ on a larger interface patch and all tangential derivatives of order at most $r$ have the common trace inherited from global tangential $H^1$ regularity. Differentiate the two-sided weak identity tangentially $r$ times. For a tangential multi-index $\alpha$, $Z=D_y^\alpha u$ remains an admissible globally $H^1$ unknown with a common sheet trace. The principal coefficients stay $a^\pm$, the sheet density becomes $D_y^\alpha\sigma_B$, and the coefficient commutators are divergence data of the form $(D_y^\gamma a^\pm)\nabla D_y^{\alpha-\gamma}u$ with $0<|\gamma|\le r$. They lie in $H^1$ on each side, since the highest derivative of $u$ needed is order $r+1$; the bulk data are $L^2$ and the sheet density remains smooth. Apply step 3.1 to $Z$, transferring one additional tangential difference from each divergence datum onto its $H^1$ derivative. This gives all derivatives of total order $r+2$ with at most one normal index. The differentiated normal-recovery equation of step 4.1 gives the remaining derivatives inductively on the number of normal indices: every right-hand derivative has fewer normal indices of the same total order or lower total order, and $a^\pm_{33}$ stays positive. Tangential difference-quotient limits also show that the newly controlled tangential derivatives have a common trace and remain globally $H^1$, so the induction continues. Nested patches, followed by the finite interface/boundary cover, yield $H^m$ on every closed side for all integers $m$, without treating the interface as two unrelated Neumann problems or dropping its sheet term. [F2, F3, F4, F6, step 3.1, step 3.2, step 4.1, algebra]

6.1 Classical representative: the Sobolev extension theorem and the Fourier characterization with inversion [F4] convert $W^{m,2}$ membership for $m>j+3/2$ into $C^j$ classes, with derivatives agreeing with the weak ones by testing and Fubini and representatives agreeing by continuity; taking $m$ arbitrarily large gives continuous extensions of all derivatives to each closed side; [F6] then provides one $C^\infty$ ambient extension on a neighbourhood of that closed side, and the continuous boundary trace is the prescribed one by trace continuity and the classical strong equation; on closed side interiors the equation holds pointwise by the usual fundamental-lemma argument. [step 5.1, step 5.2, F4, F5, F6, algebra]

7.1 Conclusion: existence is supplied by the weak Dirichlet, compatible Neumann and transmission lemmas [F1], and this argument upgrades it to the stated classical smoothness on the declared domains; edge and junction points, reentrant corners and coefficient loss of regularity are excluded by hypothesis, and the declared Choice hypotheses are transported explicitly. [step 1.1, step 6.1, F1, algebra] ∎
