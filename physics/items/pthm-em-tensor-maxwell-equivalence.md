---
id: pthm-em-tensor-maxwell-equivalence
kind: physics-theorem
title: "Tensor Maxwell equations equal the four laboratory Maxwell equations"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 14
deps: [def-em-electromagnetic-tensor,
       post-em-vacuum-maxwell,
       post-sr-inertial-covariance,
       thm-sr-tensor-and-current-transformation,
       def-em-fields,
       def-em-sources,
       def-em-lab-geometry,
       def-em-si-conventions,
       def-divergence-and-curl-of-a-c1-vector-field,
       def-directional-and-partial-derivatives]
dependency_roles:
  def-em-electromagnetic-tensor: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  post-sr-inertial-covariance: physical-assumption
  thm-sr-tensor-and-current-transformation: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statement about the smooth branch of the adopted vacuum Maxwell postulate on the laboratory region: the four SI Maxwell equations are equivalent to the two tensor systems (TM1) and (TM2) for the components of the electromagnetic two-form and four-current fixed by the framework's definitions, with eta=diag(-1,1,1,1), x^0=ct, mu_0 c^2 eps_0=1, and form-invariance under proper orthochronous changes of inertial chart. Excluded: the weak branch, singular source support, magnetic charge, potentials, and any dynamics beyond the adopted equations; no choice principle and no empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.1-§5.1.4 printed pp. 95-102 (four-vectors, proper time, raising and lowering indices, tensor transformation law (5.3)-(5.10)) and §5.3-§5.3.2 printed pp. 105-108 (the electromagnetic tensor (5.15) and the transformation law (5.16)), and §5.4 printed pp. 113-115 (the tensor Maxwell systems (5.26), their eight laboratory components and the cyclic formulation (5.27)), read in the full extracted text of the 236-page author-hosted revision; the source's (+---) and A_mu=(phi/c,-A) conventions are converted to the framework's (-+++), F_0i=-E_i/c dictionary"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node121.html"
      locator: "node 121 'The electromagnetic field tensor' (eqs. (1467)-(1490): the antisymmetric field tensor with F_i4=-F_4i=-E_i, F_ij=-cB_ij) and node 123 'Transformation of fields', read in the complete author-hosted HTML lecture notes; conventions converted to x^0=ct and the framework's field dictionary"
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zurich 2024 FS (author-hosted 176-page lecture script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§9.2 'Tensoren' pp. 9.5-9.8 and §9.3 'Kovariante Elektrodynamik' pp. 9.8-9.12 (field-strength tensor (9.42), four-current (9.43), eta_{mu nu} partial^mu F^{nu rho}=mu_0 J^rho (9.44), conservation (9.45), and the homogeneous equations (9.46)-(9.48)), read in the author-hosted 176-page script; the source's index placement and overall sign are converted to the framework's dictionary"
verification:
  precheck: pass
---

## Statement

Let the laboratory region $U\cong I\times\Omega$ with its inertial chart $x$,
the electric and magnetic fields $E,B$ of [[def-em-fields]], the source fields
$(\rho,J)$ of [[def-em-sources]] and the SI conventions of
[[def-em-si-conventions]] with $\varepsilon_0:=(\mu_0c^2)^{-1}$ be those of the
framework. Let $F$ be the electromagnetic two-form of
[[def-em-electromagnetic-tensor]] with the components fixed there,
$F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $F^{0i}=E_i/c$,
$F^{ij}=\epsilon_{ijk}B_k$ and
$\eta=\operatorname{diag}(-1,1,1,1)$, and let $j=(c\rho,J)$ carry the
tensor-component identification adopted in [[def-em-sources]]. Write
$\partial_0=c^{-1}\partial_t$ and $\partial_i$ for the coordinate partial
derivatives of [[def-directional-and-partial-derivatives]], and
$\operatorname{div},\operatorname{curl}$ for those of
[[def-divergence-and-curl-of-a-c1-vector-field]]. Assume the smooth branch of
the vacuum Maxwell postulate [[post-em-vacuum-maxwell]]: $E,B$ are jointly
$C^1$ on $\Omega\times I$ with the additional derivatives required by each
displayed equation existing and continuous, and $\rho,J$ are continuous. Then:

(a) [Equivalence] On $I\times\Omega$ the four smooth-branch equations

$$\operatorname{div}E=\rho/\varepsilon_0,\qquad \operatorname{div}B=0,\qquad \operatorname{curl}E=-\partial_tB,\qquad \operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$$

hold if and only if the two systems

$$(\mathrm{TM1})\quad \partial_\mu F^{\mu\nu}=-\mu_0\,j^\nu\quad(\nu=0,1,2,3),$$

$$(\mathrm{TM2})\quad \partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=0\quad(\lambda,\mu,\nu\in\{0,1,2,3\})$$

hold on $I\times\Omega$. Every instance of (TM2) with a repeated index vanishes
identically because $F$ is alternating, so (TM1) and (TM2) carry exactly eight
independent scalar equations: (TM1) with $\nu=0$ is
$\operatorname{div}E=\rho/\varepsilon_0$ (using $\mu_0c^2\varepsilon_0=1$),
(TM1) with $\nu=i$ is the $i$-th component of
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, (TM2) with
$(\lambda,\mu,\nu)=(1,2,3)$ is $\operatorname{div}B=0$, and the three cyclic
triples $(0,i,j)$ are the three components of
$\operatorname{curl}E=-\partial_tB$; conversely these eight scalar equations
reproduce the two systems.

(b) [Form invariance under a change of inertial description] Let $x'$ be another
inertial chart with transition $x'=\Lambda x+b$, $\Lambda$ a proper
orthochronous Lorentz matrix (the changes of inertial description adopted in
[[post-sr-inertial-covariance]]), and let the primed components of the same
objects be the tensor components of [[thm-sr-tensor-and-current-transformation]]
(iii): $F'^{\,ab}=\Lambda^a{}_c\Lambda^b{}_dF^{cd}$,
$F'_{ab}=(\Lambda^{-1})^c{}_a(\Lambda^{-1})^d{}_bF_{cd}$,
$j'^a=\Lambda^a{}_bj^b$. Then (TM1) holds in $x$ if and only if (TM1) holds in
$x'$ with $j'$, and (TM2) holds in $x$ if and only if it holds in $x'$; by (a)
applied in both charts the four smooth-branch equations are likewise
form-invariant, the primed fields satisfying the primed equations with the
primed sources.

(c) [Hypotheses actually used] Only first derivatives of $E,B$ occur; the
equivalence uses exactly the component dictionary, the alternating character of
$F$, the constants $\mu_0,c,\varepsilon_0$ and the identification
$j=(c\rho,J)$, and the covariance clause uses the constant-coefficient
component law and the invertibility of $\Lambda$. No potential, no second
derivative, no boundary, decay or smoothness hypothesis beyond the stated
class, and no converse from the wave equations to the Maxwell equations is used
or asserted.

(d) [Scope] Only the smooth branch is covered; the weak branch of
[[post-em-vacuum-maxwell]] and field or source points of singular support are
excluded. The conventions $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$ fix the
signs of (TM1), and the alternative sign convention, which reverses the form of
the sourced equation, is not mixed with them. The statement is conditional on
the adopted postulates, uses no choice principle and makes no empirical claim.

## Facts & Assumptions

**Given:** The laboratory region $U\cong I\times\Omega$ with its inertial chart $x$ ($x^0=ct$); the jointly $C^1$ fields $E,B$ with the additional derivatives required by each Maxwell equation existing and continuous; the continuous source fields $(\rho,J)$; the electromagnetic two-form $F$ with the component dictionary and index conventions of [[def-em-electromagnetic-tensor]]; the four-current $j=(c\rho,J)$ of [[def-em-sources]]; the constants $\mu_0,c>0$ and $\varepsilon_0=(\mu_0c^2)^{-1}$ of [[def-em-si-conventions]]; the smooth-branch Maxwell equations of [[post-em-vacuum-maxwell]]; and a second inertial chart $x'=\Lambda x+b$ with $\Lambda$ a proper orthochronous Lorentz matrix as adopted in [[post-sr-inertial-covariance]].

[F1] In the chart $x$ the electromagnetic two-form has components $F_{00}=0$, $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $F_{ab}=-F_{ba}$, $F^{0i}=E_i/c$, $F^{i0}=-E_i/c$, $F^{ij}=\epsilon_{ijk}B_k$, and $\eta=\operatorname{diag}(-1,1,1,1)$; here $\epsilon_{ijk}$ is the spatial permutation symbol, so $\epsilon_{ijk}=+1$ for even and $-1$ for odd permutations of $(1,2,3)$ and $\epsilon_{ijk}=0$ if two indices coincide ([[def-em-electromagnetic-tensor]] (a), [[def-em-si-conventions]]). The four-current components are $j^0=c\rho$ and $j^i=J^i$ ([[def-em-sources]] (c)).

[F2] On $U$ the smooth branch of the vacuum Maxwell postulate holds: $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, for jointly $C^1$ fields with the additional derivatives required by each equation existing and continuous and continuous sources ([[post-em-vacuum-maxwell]] (a)).

[F3] For a $C^1$ vector field $G=(G_1,G_2,G_3)$ on an open subset of $\mathbb R^3$, $\operatorname{div}G=\partial_1G_1+\partial_2G_2+\partial_3G_3$ and $\operatorname{curl}G=(\partial_2G_3-\partial_3G_2,\ \partial_3G_1-\partial_1G_3,\ \partial_1G_2-\partial_2G_1)$, so $(\operatorname{curl}G)_i=\epsilon_{ijk}\partial_jG_k$ for $i=1,2,3$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F4] The coordinate $x^0$ of the chart is $x^0=ct$, so $\partial_0=c^{-1}\partial_t$, where $\partial_t$ is the partial derivative at fixed position and $\partial_i$ are the spatial partial derivatives of [[def-directional-and-partial-derivatives]] ([[def-em-lab-geometry]] (a), (c), [[def-em-si-conventions]] (a)).

[F5] The constants satisfy $\varepsilon_0=(\mu_0c^2)^{-1}$, hence $\mu_0c^2\varepsilon_0=1$ and $c^{-2}=\mu_0\varepsilon_0$ ([[def-em-si-conventions]] (a)).

[F6] A change of inertial description is an affine map $x'=\Lambda x+b$ whose linear part $\Lambda$ is a proper orthochronous Lorentz matrix; such a $\Lambda$ is invertible, with inverse matrix $(\Lambda^{-1})^a{}_b$ satisfying $\Lambda^a{}_b(\Lambda^{-1})^b{}_c=\delta^a_c$ and $(\Lambda^{-1})^a{}_b\Lambda^b{}_c=\delta^a_c$ ([[post-sr-inertial-covariance]] (ii)).

[F7] For the same tensor field $F$ and vector field $j$ read in the two charts, the components transform as $F'^{\,ab}=\Lambda^a{}_c\Lambda^b{}_dF^{cd}$, $F'_{ab}=(\Lambda^{-1})^c{}_a(\Lambda^{-1})^d{}_bF_{cd}$, $j'^a=\Lambda^a{}_bj^b$, and the coordinate partial derivatives satisfy $\partial'_a=(\Lambda^{-1})^c{}_a\partial_c$ wherever the derivatives exist ([[thm-sr-tensor-and-current-transformation]] (i), (iii), (iv)).

[L1] Because $F$ is alternating, $F_{ab}=-F_{ba}$ and $F_{aa}=0$ for all $a,b\in\{0,1,2,3\}$ ([[def-em-electromagnetic-tensor]] (a)).

## Proof

**Proof technique:** direct component computation in the fixed dictionary, followed by the constant-coefficient transformation law.

1.1 (Sourced equation, $\nu=0$) On $I\times\Omega$ the equation (TM1) with $\nu=0$ holds if and only if $\operatorname{div}E=\rho/\varepsilon_0$. Indeed $\partial_\mu F^{\mu0}=\partial_0F^{00}+\partial_iF^{i0}=0+\partial_i(-E_i/c)=-\operatorname{div}E/c$ by [F1] and [F3], using $F^{00}=0$, $F^{i0}=-E_i/c$; the right-hand side is $-\mu_0j^0=-\mu_0c\rho$ by [F1]; the identity $-\operatorname{div}E/c=-\mu_0c\rho$ is equivalent to $\operatorname{div}E=\mu_0c^2\rho=\rho/\varepsilon_0$ by [F5] and $c>0$. [given, F1, F3, F5, algebra]

1.2 (Sourced equations, $\nu=i$) On $I\times\Omega$ the three equations (TM1) with $\nu=i$, $i=1,2,3$, hold if and only if $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$. Indeed $\partial_\mu F^{\mu i}=\partial_0F^{0i}+\partial_jF^{ji}=c^{-2}\partial_tE_i+\epsilon_{jik}\partial_jB_k=c^{-2}\partial_tE_i-(\operatorname{curl}B)_i$: the first term uses $F^{0i}=E_i/c$ and $\partial_0=c^{-1}\partial_t$ from [F4], the second uses $F^{ji}=-\epsilon_{ijk}B_k=\epsilon_{jik}B_k$ by [F1] and [L1], and the last equality is $(\operatorname{curl}B)_i=\epsilon_{ijk}\partial_jB_k$ from [F3] together with $\epsilon_{jik}=-\epsilon_{ijk}$. Equating with $-\mu_0j^i=-\mu_0J_i$ by [F1] gives $(\operatorname{curl}B)_i=\mu_0J_i+c^{-2}\partial_tE_i$ for each $i$, that is $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$. [given, F1, F3, F4, L1, algebra]

1.3 (Repeated-index instances of (TM2) vanish) If two of $\lambda,\mu,\nu$ coincide, the cyclic sum in (TM2) vanishes identically on $U$. For $\lambda=\mu$ the sum is $\partial_\lambda F_{\lambda\nu}+\partial_\lambda F_{\nu\lambda}+\partial_\nu F_{\lambda\lambda}=\partial_\lambda(F_{\lambda\nu}+F_{\nu\lambda})+0=0$ by [L1]; the cases $\lambda=\nu$ and $\mu=\nu$ are the same computation with the terms relabelled, since in each case two of the three terms are $\pm$ the same derivative and the third contains the vanishing diagonal entry $F_{aa}=0$. [given, F1, L1, algebra]

1.4 (Instance $(1,2,3)$ is the Gauss law for $B$) The instance $(\lambda,\mu,\nu)=(1,2,3)$ of (TM2) reads $\partial_1F_{23}+\partial_2F_{31}+\partial_3F_{12}=\partial_1B_1+\partial_2B_2+\partial_3B_3=\operatorname{div}B$, because $\epsilon_{231}=\epsilon_{312}=\epsilon_{123}=+1$ gives $F_{23}=B_1$, $F_{31}=B_2$ and $F_{12}=B_3$ in [F1], and [F3] identifies the sum with $\operatorname{div}B$. Hence this instance is equivalent to $\operatorname{div}B=0$. [given, F1, F3, algebra]

1.5 (Cyclic instances $(0,i,j)$ are the Faraday components) For each cyclic ordering $(i,j,k)$ of $(1,2,3)$ the instance $(\lambda,\mu,\nu)=(0,i,j)$ of (TM2) reads $\partial_0F_{ij}+\partial_iF_{j0}+\partial_jF_{0i}=c^{-1}\partial_tB_k+c^{-1}\partial_iE_j-c^{-1}\partial_jE_i=c^{-1}\bigl(\partial_tB_k+(\operatorname{curl}E)_k\bigr)$, using $\partial_0=c^{-1}\partial_t$ [F4], $F_{ij}=B_k$ for the cyclic index order [F1], $F_{j0}=-F_{0j}=E_j/c$ and $F_{0i}=-E_i/c$ [F1], [L1], and $(\operatorname{curl}E)_k=\epsilon_{kij}\partial_iE_j=\partial_iE_j-\partial_jE_i$ for the cyclic order [F3]. Hence these three instances are equivalent to the three components of $\operatorname{curl}E=-\partial_tB$. [given, F1, F3, F4, L1, algebra]

1.6 (Transformation data) In the second chart $x'=\Lambda x+b$ the component laws of [F7] hold, with the invertible matrix $\Lambda$ and its inverse entries $(\Lambda^{-1})^a{}_b$ as in [F6]. The primed component functions are constant-coefficient finite linear combinations of the unprimed components, so on the overlap of the two chart restrictions they are again jointly $C^1$ with the same additional derivatives existing and continuous. [given, F6, F7, algebra]

2.1 (Reduction of all instances of (TM2)) Every instance of (TM2) is either a repeated-index instance, which vanishes identically by step 1.3, or an instance with distinct indices. For distinct indices, interchanging two of $\lambda,\mu,\nu$ changes the cyclic sum's sign: with $S(\lambda,\mu,\nu):=\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}$ one has $S(\lambda,\nu,\mu)=\partial_\lambda F_{\nu\mu}+\partial_\nu F_{\mu\lambda}+\partial_\mu F_{\lambda\nu}=-(\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu})=-S(\lambda,\mu,\nu)$ by [L1], and the other two transpositions are the same computation after relabelling. Since transpositions generate the symmetric group, each of the $24$ distinct-index instances equals $\pm S$ of one of the four index sets $\{1,2,3\}$, $\{0,1,2\}$, $\{0,2,3\}$, $\{0,3,1\}$; by steps 1.4 and 1.5 the system (TM2) is therefore equivalent to the four scalar equations $\operatorname{div}B=0$ and the three components of $\operatorname{curl}E=-\partial_tB$. [given, step 1.3, step 1.4, step 1.5, F1, L1, algebra]

2.2 ((TM1) is form-invariant) Using [F7], whose $\partial'_a=(\Lambda^{-1})^c{}_a\partial_c$ has constant coefficients, $\partial'_aF'^{\,ab}=(\Lambda^{-1})^c{}_a\partial_c(\Lambda^a{}_e\Lambda^b{}_fF^{ef})=(\Lambda^{-1})^c{}_a\Lambda^a{}_e\Lambda^b{}_f\partial_cF^{ef}=\delta^c_e\Lambda^b{}_f\partial_cF^{ef}=\Lambda^b{}_f\partial_cF^{cf}$, the third equality by the inverse-matrix identity of [F6]. Since also $j'^b=\Lambda^b{}_fj^f$ by [F7], the equation (TM1) in $x'$ is $\Lambda^b{}_f(\partial_cF^{cf}+\mu_0j^f)=0$ for every $b$; multiplying by $(\Lambda^{-1})^g{}_b$ and summing over $b$ gives $\partial_cF^{cg}=-\mu_0j^g$ for every $g$, and substitution gives the converse. Hence (TM1) holds in $x$ if and only if it holds in $x'$ with $j'$. [given, step 1.6, F6, F7, algebra]

2.3 ((TM2) is form-invariant) Write $S_{abc}:=\partial_aF_{bc}+\partial_bF_{ca}+\partial_cF_{ab}$. By [F7] the three terms of the primed cyclic sum are $\partial'_\lambda F'_{\mu\nu}=(\Lambda^{-1})^a{}_\lambda(\Lambda^{-1})^b{}_\mu(\Lambda^{-1})^c{}_\nu\partial_aF_{bc}$, $\partial'_\mu F'_{\nu\lambda}=(\Lambda^{-1})^a{}_\lambda(\Lambda^{-1})^b{}_\mu(\Lambda^{-1})^c{}_\nu\partial_bF_{ca}$ and $\partial'_\nu F'_{\lambda\mu}=(\Lambda^{-1})^a{}_\lambda(\Lambda^{-1})^b{}_\mu(\Lambda^{-1})^c{}_\nu\partial_cF_{ab}$, the second and third after relabelling the dummy summation indices $a,b,c$. Their sum is $S'_{\lambda\mu\nu}=(\Lambda^{-1})^a{}_\lambda(\Lambda^{-1})^b{}_\mu(\Lambda^{-1})^c{}_\nu S_{abc}$; hence $S=0$ implies $S'=0$, and conversely $S_{abc}=\Lambda^\lambda{}_a\Lambda^\mu{}_b\Lambda^\nu{}_cS'_{\lambda\mu\nu}$ by the inverse-matrix identity of [F6], so $S'=0$ implies $S=0$. Thus (TM2) holds in $x$ if and only if it holds in $x'$. [given, step 1.6, F6, F7, algebra]

3.1 (Equivalence of clause (a)) If the four smooth-branch equations hold on $I\times\Omega$, then (TM1) holds by steps 1.1 and 1.2 and (TM2) holds by steps 1.3, 1.4, 1.5 and 2.1: the repeated-index instances vanish, the instance $(1,2,3)$ is $\operatorname{div}B=0$, and the three cyclic instances vanish because $\operatorname{curl}E=-\partial_tB$. Conversely, if (TM1) and (TM2) hold, then steps 1.1 and 1.2 give $\operatorname{div}E=\rho/\varepsilon_0$ and the three components of $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, while steps 1.4 and 1.5 give $\operatorname{div}B=0$ and the three components of $\operatorname{curl}E=-\partial_tB$. This proves the biconditional and identifies the eight scalar equations: (TM1)'s four components and, from the reduction of step 2.1, the distinct group $\operatorname{div}B=0$ and the three Faraday components; all remaining instances of (TM2) are repeats of these up to sign. [given, step 1.1, step 1.2, step 1.4, step 1.5, step 2.1, F2, algebra]

4.1 (Form invariance of the four equations) The computation of steps 1.1-3.1 is a statement about an inertial chart and its component dictionary and applies verbatim in the chart $x'$, whose primed fields and sources are again of the required class by step 1.6: the four primed smooth-branch equations hold if and only if (TM1) and (TM2) hold in $x'$ with $j'$. By steps 2.2 and 2.3 the primed tensor systems hold if and only if the unprimed ones do; by step 3.1 the latter hold if and only if the four equations hold in $x$. Therefore the four smooth-branch equations hold in $x$ if and only if the same four equations, with the primed fields and primed sources, hold in $x'$. This is conditional on the adopted covariance premise [F6] and proves no physical equivalence of descriptions beyond it. [given, step 3.1, step 1.6, step 2.2, step 2.3, F6]

5.1 (Hypotheses and scope) Steps 1.1-4.1 used only first derivatives of $E,B$; the equivalence used the component dictionary [F1], the alternating character of $F$ [L1], the constants $\mu_0,c,\varepsilon_0$ [F5] and the identification $j=(c\rho,J)$; the covariance clauses used the constant-coefficient component law [F7] and the invertibility of $\Lambda$ [F6]. No potential, no second derivative, no boundary, decay or additional smoothness hypothesis was used, no converse from the wave equations to the Maxwell equations is asserted, and no step covers the weak branch of [[post-em-vacuum-maxwell]] or singular source support; the signs are fixed by the conventions $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$ and no alternative dictionary is mixed in. The argument is finite linear algebra over the fixed component functions; it uses no choice principle and makes no empirical claim. [given, step 1.1, step 4.1, F1, F2, F5, F6, F7] ∎

## Source notes

The three cited treatments present the antisymmetric field tensor, the inhomogeneous equation in the form $\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ (in suitable conventions) and the homogeneous cyclic identity, and derive the component dictionary from the laboratory fields with sign and index conversions recorded in the locators. The deduction above is the component check that the two systems say exactly the same thing as the four laboratory equations in the framework's conventions, together with the constant-coefficient form invariance; the textbook treatments state these facts for their own conventions, and the conversion to the framework's dictionary is carried out here rather than assumed.
