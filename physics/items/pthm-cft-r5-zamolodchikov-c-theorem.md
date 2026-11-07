---
id: pthm-cft-r5-zamolodchikov-c-theorem
kind: physics-theorem
title: Zamolodchikov monotonic c-function for positive 2D RG flows
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps:
  - def-cft-r5-positive-2d-renormalizable-rg-theory
  - def-virasoro-algebra
  - lem-cft-two-point-rp-stress-spectral-representation
  - lem-cft-positive-zamolodchikov-spectral-kernel
dependency_roles:
  def-cft-r5-positive-2d-renormalizable-rg-theory: formulation-prerequisite
  def-virasoro-algebra: mathematical-premise
  lem-cft-two-point-rp-stress-spectral-representation: mathematical-premise
  lem-cft-positive-zamolodchikov-spectral-kernel: mathematical-premise
justified_by: []
physical_scope: Conditional pointwise positivity and monotonicity for the declared connected tempered tensor-reflection-positive two-dimensional RG data, with source-normalized trace and squared-length RG time and an explicitly added trace-clustering condition excluding invariant trace fluctuations. All claimed couplings are covered without assuming global RG trajectories or UV/IR conformal endpoints.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - source_key: S03
      title: A. B. Zamolodchikov, Irreversibility of the Flux of the Renormalization Group in a 2D Field Theory, JETP Letters 43(12) (1986), 730–732
      url: https://img.atwiki.jp/sakurazemi/pub/reference/Zamolodchikov1986.pdf
      locator: "pp. 730–732, Eqs. (2)–(14): monotonicity claim, stress correlators, Ward/Callan–Symanzik identities, c-function, and fixed-point Virasoro normalization."
      source_limit: The article supplies the c-function and Ward framework. The corrected local model states its stress sign and squared-length time explicitly; the measure and pointwise positivity are derived by the local two-point prerequisites with an explicitly added trace-clustering condition.
    - source_key: S20
      title: Satoshi Nawata, Runkai Tao, Daisuke Yokoyama, An Introduction to 2d Conformal Field Theory, arXiv:2208.05180v5
      url: https://arxiv.org/pdf/2208.05180v5
      locator: "§6.2, printed pp. 84–86, Eqs. (6.25)–(6.37): stress-tensor conservation, rotational two-point forms, monotonicity and fixed-point normalization."
      source_limit: This independent source checks the conservation and fixed-point normalizations; the separate pointwise positivity argument below uses the locally derived stress measure.
    - source_key: S21
      title: Andrea Cappelli, Daniel Friedan, José I. Latorre, c-Theorem and Spectral Representation, Nuclear Physics B352 (1991), 616–670
      url: https://www.physics.rutgers.edu/~friedan/papers/Nucl_Phys_B352_616-670_1991.pdf
      locator: "§2.1, printed pp. 620–623, Eqs. (2.2)–(2.16): positive stress-tensor spectral density and positive-smearing c-functions for trajectories with finite UV/IR conformal endpoints."
      source_limit: The source spectral representation is in Eq2.3 and AppendixA; endpoint identifications later require extra assumptions. The local proof constructs the measure from two-point reflection positivity and identifies the exact pointwise Bessel kernel, without conformal endpoints.
    - source_key: S22
      title: John Cardy, Notes on the c-theorem, addendum to Introduction to Conformal Field Theory (2014)
      url: https://www-thphys.physics.ox.ac.uk/people/JohnCardy/cft14/ctheoremnotes.pdf
      locator: "pp. 1–2: conservation identities, c-function monotonicity, fixed-point value, and the integrated endpoint sum rule."
      source_limit: This independent source checks the radial conservation calculation; endpoint sum rules are not used in the proof below.
verification:
  precheck: pass
---

## Statement

At every claimed coupling $g$ of [[def-cft-r5-positive-2d-renormalizable-rg-theory]], use its connected tempered tensor-reflection-positive two-point functions, source conventions $\Theta=-\mathsf T_{z\bar z}=\beta^i\Phi_i$ and squared-length RG time, and impose its **additional trace-clustering condition** $\langle\Theta(r,0)\Theta(0)\rangle_c\to0$ as $r\to\infty$. This exclusion of invariant trace fluctuations is an explicit additional assumption, not an implication of reflection positivity or mean subtraction. All following contractions and coupling derivatives are required to exist as specified by that data package.

Fix $r=|x|=x_0$ and set $C(g)=2z^4\langle T(x)T(0)\rangle_c$, $H_i(g)=z^2r^2\langle T(x)\Phi_i(0)\rangle_c$ and $G_{ij}(g)=r^4\langle\Phi_i(x)\Phi_j(0)\rangle_c$. Define
$$c(g)=C(g)+4\beta^i(g)H_i(g)-6\beta^i(g)\beta^j(g)G_{ij}(g).$$
Then
$$c(g)\ge0,\qquad \beta^i(g)\partial_i c(g)=-12\beta^i(g)\beta^j(g)G_{ij}(g)\le0,$$
with equality in the differential inequality exactly when the physical beta vector is zero. At a claimed conformal fixed point, $c$ equals the Virasoro central charge of the specified holomorphic stress action. The assertions are pointwise at every coupling satisfying the declared model hypotheses; no global RG trajectory, mass gap, or UV/IR conformal endpoint is assumed.

## Facts & Assumptions

**Given:** The model data and the explicitly added trace-clustering assumption in the Statement. AC is the mathematical choice hypothesis of the two-point spectral construction; no spectral measure is a physical input.

[F1] [[def-cft-r5-positive-2d-renormalizable-rg-theory]] supplies the connected correlation functions, tensor conservation, trace identity, exact separated cutoff/Callan–Symanzik covariance, finite contractions and the positive-definite physical Gram metric.

[F2] [[lem-cft-two-point-rp-stress-spectral-representation]] derives a positive stress measure from two-point reflection positivity, temperateness and covariance, including independent nonnegative chiral massless constants and the possible invariant trace atom. The trace-clustering hypothesis sets that atom to zero.

[F3] [[lem-cft-positive-zamolodchikov-spectral-kernel]] proves $f(u)=u^4(K_4(u)+2K_2(u)-3K_0(u))/48=u^3K_1(u)/4+u^2K_2(u)/2>0$ for $u>0$, with $f(0)=1$. Its proof and this use require no endpoint hypotheses.

[F4] [[def-virasoro-algebra]] fixes the central-charge mode convention; [F1] specifies the fixed-point stress normalization $\langle T(z)T(0)\rangle_c=\widetilde c/(2z^4)$.

## Proof

1.1 Keep the radius variable temporarily and write $s=z\bar z=r^2$, $\dot{}=s\partial_s$, $D=\beta^i\partial_i$. Set $F=C/2$, $B=\beta^iH_i$, $H=\beta^i\beta^jG_{ij}$. Tensor rotation covariance and the trace identity give $\langle TT\rangle_c=F(s)/z^4,\quad\langle T\Theta\rangle_c=B(s)/(z^3\bar z),\quad\langle\Theta\Theta\rangle_c=H(s)/(z^2\bar z^2).$ At fixed $g$, conservation $\bar\partial T-\partial\Theta=0$ applied to the second insertion $T$ gives $\dot F-\dot B=-3B$; applied to $\Theta$ it gives $\dot B-\dot H=B-2H$. For example $\bar\partial(F/z^4)=F'/z^3$ and $\partial(B/(z^3\bar z))=(B'-3B/s)/z^3$. The second equation is obtained by multiplying its conservation equation by $z^3\bar z^2$. These are separated-point equalities; [F2] gives the needed smoothness and no contact term enters. [given, F1, F2, algebra]

2.1 Differentiate the three exact cutoff covariance equations of [F1]. They give $\dot C=DC,\quad\dot H_i=DH_i+(\partial_i\beta^j)H_j,\quad\dot G_{ij}=DG_{ij}+(\partial_i\beta^k)G_{kj}+(\partial_j\beta^k)G_{ik}.$ Contracting with $\beta$ gives $\dot F=DF$, $\dot B=DB$ and $\dot H=DH$. In these contractions the derivative-of-beta terms are retained: $DB=(D\beta^i)H_i+\beta^iDH_i$, and similarly for $DH$. Squared-length time is essential here; in length time the scalar derivative is $2\dot{}$. No local trajectory is extended beyond its domain to obtain these infinitesimal identities. [given, F1, step 1.1, algebra]

2.2 Apply [F2] at this fixed coupling. It constructs the positive mass measure $\nu$, a nonnegative left chiral constant $c_L$ and a nonnegative invariant trace coefficient $\kappa$. The explicit trace-clustering hypothesis makes $\kappa=0$. For $u=\mu r$, the three finite spectral integrals give $c=2F+4B-6H=c_L+\frac1{48}\int u^4(K_4(u)+2K_2(u)-3K_0(u))\,d\nu(\mu)=c_L+\int f(\mu r)\,d\nu(\mu).$ Every term before subtraction is finite by [F2], so this subtraction of integrals is legitimate. By [F3] the last integrand is positive, and $c_L\ge0$. Hence $c(g)\ge0$. The measure was derived from the actual two-point assumptions, not inserted as a new spectral axiom. No limit along a coupling trajectory, conformal endpoint or exchange of an unbounded limiting integral was used. [given, F1, F2, F3, step 1.1]

3.1 The uncontracted Ward identities also follow, rather than being assumed as unrelated coupling equations. Applying conservation to $\Phi_i$ gives $\dot H_i-H_i=\beta^j(\dot G_{ij}-2G_{ij})$. Substitution of2.1 yields $DH_i+(\partial_i\beta^k)H_k-H_i=-2\beta^jG_{ij}+\beta^jDG_{ij}+\beta^j(\partial_i\beta^k)G_{kj}+\beta^j(\partial_j\beta^k)G_{ik}.$ The first equation of1.1 gives $\tfrac12DC=-3\beta^iH_i+\beta^iDH_i+(D\beta^i)H_i$. These are the two source-normalized stress/Callan–Symanzik equations with consistent trace sign and time normalization. [given, F1, step 1.1, step 2.1, algebra]

3.2 Since $c=2F+4B-6H$, the product rule and1.1–2.1 give $Dc=2DF+4DB-6DH=2(-3B+DB)+4DB-6DH=-6B+6(DB-DH)=-12H.$ In particular the coefficient of $DB$ is initially4; it becomes6 only after substituting the first Ward identity. This calculation includes the beta derivatives through the definitions of $DB,DH$ and corrects the erroneous premature coefficient6. [given, step 1.1, step 2.1, algebra]

4.1 Reflection positivity and the declared null-field quotient/completion give $H=\|\beta\|_G^2\ge0$, with equality if and only if the physical beta vector is zero. Equation3.2 therefore proves both monotonicity and its exact equality criterion, including the countable-coupling case where convergence and membership in that completed space were stipulated. [given, F1, step 3.2]

5.1 At a claimed fixed point, $\beta=0$ removes both beta-dependent terms, so $c=C=2z^4\langle T(z)T(0)\rangle_c=\widetilde c$ by [F4]. This identifies the holomorphic Virasoro central charge and does not assert existence of such a fixed point or of a trajectory approaching it. Equations3.2–2.2 hold at every claimed coupling satisfying the corrected hypotheses, completing the full stated pointwise theorem. [given, F1, F4, step 3.2, step 4.1, step 2.2] ∎

## Remarks

The trace-clustering clause is an explicit necessary qualification of the weaker authored model class. Ordinary connected subtraction alone leaves possible invariant trace fluctuations; without this clause [F2] would instead give $c=c_L+\int f\,d\nu-6\kappa r^4$, so its positivity would not follow. Clustering is required only for the trace two-point function. Neither a unique whole vacuum space nor full-hierarchy clustering, a conformal endpoint, or an assumed spectral density is used. In length RG time $\ell$ one has $\beta_\ell=2\beta$ and $\beta_\ell^i\partial_i c=-24\beta^i\beta^jG_{ij}$; this is the same result in a different time convention, not a second coefficient for the beta in the Statement.
