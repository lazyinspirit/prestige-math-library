---
id: thm-csm-regular-shell-coarea
kind: theorem
title: "Coarea and invariant probability on compact regular phase shells"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  - def-csm-phase-space-reference
  - thm-tdmath-regular-energy-shell-measure
  - def-axiom-of-choice
  - def-countable-choice
  - thm-euclidean-implicit-function-theorem
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-liouville-volume-preservation
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - lem-distance-to-set-is-lipschitz
  - lem-finite-measure-uniqueness-on-a-pi-system
  - thm-topological-manifolds-are-metrizable-and-paracompact
dependency_roles:
  def-csm-phase-space-reference: mathematical-premise
  thm-tdmath-regular-energy-shell-measure: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-euclidean-implicit-function-theorem: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-liouville-volume-preservation: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  lem-distance-to-set-is-lipschitz: mathematical-premise
  lem-finite-measure-uniqueness-on-a-pi-system: mathematical-premise
  thm-topological-manifolds-are-metrizable-and-paracompact: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete 635-page course text, §4.2.2"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 2"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S2"
---

## Statement

Assume the Axiom of Choice. Let $\Gamma_N=T^*Q_N$ be a cotangent phase space
from [[def-csm-phase-space-reference]], with $\dim Q_N=n$, and let $J\subseteq
\mathbb R$ be open. Let $H\in C^2(\Gamma_N,\mathbb R)$ satisfy
$dH\ne0$ on $H^{-1}(J)$ and suppose $H^{-1}(K)$ is compact for every compact
$K\subset J$. Use the real canonical cotangent coordinates
$z=(q^1,\ldots,q^n,p_1,\ldots,p_n)$ of
[[def-csm-phase-space-reference]]; this mathematical theorem assigns no
physical units to these coordinates.

For a compact regular energy band, take a finite smooth partition of unity
$\{\chi_a\}$ subordinate to canonical cotangent charts. In a chart where
$\partial_iH\ne0$, write the local energy graph as $z_i=h_a(y,E)$ and define
the **weighted shell measure** on nonnegative Borel $f$ by
$$\mu_E(f):=c_N\sum_a\int f(y,h_a(y,E))\chi_a(y,h_a(y,E))|\partial_iH(y,h_a(y,E))|^{-1}\,dy,$$
where $c_N>0$ is the constant density of the reference measure in canonical
coordinates. Then this definition is independent of the chosen finite chart
partition and equals the chart expression
$$\mu_E(f)=c_N\int_{\Sigma_E}f(z)|\nabla_zH(z)|^{-1}\,dA_z,$$
with $\Sigma_E:=H^{-1}(\{E\})$ and Euclidean area in each real
canonical chart. For every nonnegative Borel $f$ compactly supported in
$H^{-1}(J)$,
$$\int_{\Gamma_N}f\,dm_N=\int_J\mu_E(f)\,dE.$$
If $\Sigma_E$ is nonempty, then $0<\mu_E(1)<\infty$ and
$P_E:=\mu_E/\mu_E(1)$ is a probability measure. If a Hamiltonian flow map is a
$C^1$ diffeomorphism on a full compact energy band and preserves that band,
then $P_E$ is invariant under that map for every such regular $E$. Critical
levels and noncompact inverse bands are outside this statement. For its
invariance clause, fix a compatible metric on a compact band whose interior
contains the shell; such a metric exists by
[[thm-topological-manifolds-are-metrizable-and-paracompact]].

The same shell measure can be computed after a fixed numerical coordinate
normalization. Choose positive real scales $\ell_j,p_{0j}$ with a common
product $\ell_jp_{0j}=A>0$, and put
$$q^j=\ell_jQ^j,\qquad p_j=p_{0j}P_j,\qquad F(Q,P)=(q,p),\qquad \widetilde H=H\circ F.$$
The reference density becomes $\widehat c_N\,dQ\,dP$ with
$\widehat c_N=c_NA^n$. The graph and weighted-area formulas above then use
$\widetilde H$, its gradient and Euclidean area in $(Q,P)$, and
$\widehat c_N$, with the same energy variable $E$. They describe the
pullback of $\mu_E$, not a different shell law. The pulled-back forms are
$$F^*\lambda=A\sum_jP_j\,dQ^j,\qquad F^*\omega_N=A\sum_jdQ^j\wedge dP_j.$$
For a Hamiltonian trajectory parameterized by its original $t$, the equations
in these coordinates are
$$\frac{dQ^j}{dt}=A^{-1}\partial_{P_j}\widetilde H,\qquad \frac{dP_j}{dt}=-A^{-1}\partial_{Q^j}\widetilde H.$$
This chart normalization does not rescale $H$, $E$ or $t$.


## Facts & Assumptions

**Given:** The cotangent phase space and its Liouville reference measure, the
regular compact-band Hamiltonian, and, for the invariance clause, the actual
Hamiltonian flow map defined as a diffeomorphism on the full band.

[A1] Full AC is assumed for the exact Euclidean shell supplier
[[thm-tdmath-regular-energy-shell-measure]]. It implies the Countable Choice
premise used by the change-of-variables supplier
([[def-axiom-of-choice]], [[def-countable-choice]]).

[A2] $H$ is $C^2$, $dH$ is nonzero on the open energy band, compact energy
intervals have compact inverse images, and every level considered is nonempty.

[A3] For invariance, the Hamiltonian map is a $C^1$ diffeomorphism on the
whole band and maps that band onto itself.

[F1] The phase definition gives $\Gamma_N=T^*Q_N$, $\omega_N=-d\lambda$, the
positive Liouville density $d\Lambda_N=|\omega_N^n|/n!$, and local canonical
volume density $c_Ndz$
([[def-csm-phase-space-reference]]).

[F2] In the Euclidean phase-domain case, the published shell theorem assumes
full AC, a $C^2$ canonical Hamiltonian, compact inverse bands and a nonzero
gradient; it proves coarea, positive finite mass of nonempty regular shells,
and invariance for a full-band Hamiltonian diffeomorphism
([[thm-tdmath-regular-energy-shell-measure]]).

[F3] A regular level is locally a $C^1$ graph; if $\partial_iH\ne0$, its
energy graph has $\partial_Eh=1/\partial_iH$
([[thm-euclidean-implicit-function-theorem]]).

[F4] A $C^1$ diffeomorphism changes a nonnegative Lebesgue integral by the
absolute Jacobian under Countable Choice
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]],
[[def-countable-choice]]).

[F5] Nonnegative product integrals may be evaluated in either order on
sigma-finite factors ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] One common integrable majorant justifies continuity limits under an
integral ([[thm-dominated-convergence]]).

[F7] Hamiltonian local flows preserve $\omega^n/n!$
([[thm-liouville-volume-preservation]]); a measure-preserving map preserves
integrals of nonnegative measurable and integrable functions
([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F8] Distance to a nonempty closed set is continuous and 1-Lipschitz
([[lem-distance-to-set-is-lipschitz]]). Finite measures agreeing on a
generating $\pi$-system and on the whole space agree on the generated sigma
algebra ([[lem-finite-measure-uniqueness-on-a-pi-system]]).

[F9] A topological manifold is metrizable and paracompact
([[thm-topological-manifolds-are-metrizable-and-paracompact]]).

## Proof

**Given:** [A1]–[A3] and the phase-space, coarea, change-of-variables,
Liouville, convergence, metric and measure-uniqueness interfaces [F1]–[F9].

1.1 In a canonical open phase domain $O\subseteq\mathbb R^{2n}$ with $m_N=c_Ndz$, hypotheses [A1]–[A2] match the published Euclidean theorem [F2]. It yields the graph-partition measure, the coarea identity, and finite positive mass on each nonempty regular level. Multiplying both the volume measure and every shell measure by the same positive constant $c_N$ preserves the identity and leaves $P_E$ unchanged. [A1, A2, F1, F2, algebra]

2.1 For a compact cotangent energy band, choose finitely many canonical charts whose smaller coordinate neighborhoods cover the band and whose closures lie inside the charts. In chart coordinates, $b(s)=e^{-1/s}$ for $s>0$ and $b(s)=0$ for $s\le0$ is smooth. For a coordinate ball of squared radius $R^2$ centered at $z_0$, $b(R^2-|z-z_0|^2)$ is a smooth bump, positive on the ball and zero outside its closure. Choose finitely many such balls whose smaller concentric balls cover the band and whose closures lie inside charts. Dividing the bumps by their positive sum near the band gives a finite partition $\sum_a\chi_a=1$ on a neighborhood of the band. This uses only a finite subcover. Refine it so that one fixed $\partial_iH$ is nonzero on each chart support. By [F3], each local level is a graph $z_i=h_a(y,E)$. The map $(y,E)\mapsto(y,h_a(y,E))$ has absolute Jacobian $|\partial_Eh_a|=|\partial_iH|^{-1}$, so [F4] and [F5] give the coarea identity for $f\chi_a$. Implicit differentiation gives $\partial_yh_a=-\partial_yH/\partial_iH$, hence $$\sqrt{1+|\nabla_yh_a|^2}=|\nabla_zH|/|\partial_iH|.$$ Thus the chart term is exactly the displayed weighted area integral. Cotangent coordinate changes have block Jacobian $$\begin{pmatrix}Dq&0\\ *&Dq^{-\mathsf T}\end{pmatrix},$$ whose determinant has absolute value one; therefore the Liouville density and the chart integrals agree on overlaps. Summing the finite partition proves the coarea identity and partition independence on the cotangent band. [A2, F1, F3, F4, F5, step 1.1, construct, algebra]

3.1 The shell is a closed subset of a compact inverse band, hence compact. A finite set of graph charts with $|\nabla_zH|$ bounded away from zero gives $\mu_E(1)<\infty$. A nonempty shell contains a graph patch with a nonempty open coordinate domain and positive continuous chart density, so $\mu_E(1)>0$. [A2, F1, step 2.1]

3.2 Along a Hamiltonian trajectory, $\frac{d}{dt}H(\Phi_tz)=dH(X_H)(\Phi_tz)=\omega_N(X_H,X_H)=0$; therefore the flow preserves energy. [F7] preserves the Liouville volume form. In canonical charts its density is $c_Ndz$, so form preservation makes the absolute coordinate Jacobian one; [F4] then proves measure preservation on each chart. Refine the finite source and target chart covers of the compact band into disjoint Borel pieces on which each chart representation of $\Phi_t$ applies, and sum the COV identities to obtain preservation of $m_N$ on the band. By [F7]'s integral-invariance clause, the coarea identity in step 2.1 gives, for continuous compactly supported $f$ and $q\in C_c(J)$, $$\int_Jq(E)\mu_E(f\circ\Phi_t)\,dE=\int_{\Gamma_N}q(H(z))f(\Phi_tz)\,dm_N =\int_{\Gamma_N}q(H(z))f(z)\,dm_N=\int_Jq(E)\mu_E(f)\,dE.$$ [A3, F1, F4, F7, step 2.1, algebra]

4.1 On any compact subinterval of $J$, use finitely many graph charts as in step 2.1. The derivatives $|\partial_iH|$ have a positive lower bound on their compact chart supports, and the chart domains, $f$ and $\Phi_t$ are bounded there. Thus the graph integrands have one finite integrable majorant. [F6] gives continuity of both $E\mapsto\mu_E(f\circ\Phi_t)$ and $E\mapsto\mu_E(f)$ on that subinterval. Their difference integrates to zero against every compactly supported continuous $q$ by step 3.2. If it were nonzero at one energy, continuity would give a neighborhood where it has one strict sign; a nonnegative continuous bump $q$ supported there would make the integral nonzero. Hence the two shell integrals agree for every regular $E\in J$. [F6, step 2.1, step 3.2]

5.1 Fix a closed subset $F$ of a shell. In the compatible band metric from [F9], $F$ is closed and the shell is compactly contained in the band interior. Choose $\delta>0$ so the closed $\delta$-neighborhood of the shell lies in the band, and let $\eta(z)=\max(0,1-\mathrm{dist}(z,\Sigma_E)/\delta)$. It is a continuous cutoff equal to one on the shell and supported in the band. The functions $g_k(z)=\eta(z)\max(0,1-k\,\mathrm{dist}(z,F))$ converge pointwise on the shell to $\mathbf1_F$ and are bounded by one. Apply the equality proved in step 4.1 to each $g_k$, then [F6] for the finite shell measures gives equality of $\mu_E$ and its flow pushforward on every closed subset. Both measures have the same finite total mass by step 3.1; closed sets form a generating $\pi$-system. Apply [F8] and divide by $\mu_E(1)>0$ from step 3.1. Thus $P_E$ is invariant for every such regular energy. [A3, F6, F8, F9, step 3.1, step 4.1]

6.1 The diagonal chart map $F$ has absolute Jacobian $\prod_j\ell_jp_{0j}=A^n$, so [F4] transforms $c_Ndq\,dp$ into $\widehat c_NdQ\,dP$. Applying the graph substitution of step 2.1 in the new coordinates gives its displayed formula with $\widetilde H$ and $\widehat c_N$; changing charts back by [F4] gives exactly the same localized shell integrals. Direct substitution in $\lambda=\sum_jp_jdq^j$ and $\omega_N=\sum_jdq^j\wedge dp_j$ proves the two pullback formulas. The canonical equations $\dot q^j=\partial_{p_j}H$, $\dot p_j=-\partial_{q^j}H$ follow by contracting $X_H$ into that form. Since $\partial_{P_j}\widetilde H=p_{0j}\partial_{p_j}H$ and $\partial_{Q^j}\widetilde H=\ell_j\partial_{q^j}H$, division of the two velocity components by $\ell_j$ and $p_{0j}$ proves the stated $A^{-1}$ factors in the unchanged parameter $t$. [F1, F4, step 2.1, algebra] ∎
