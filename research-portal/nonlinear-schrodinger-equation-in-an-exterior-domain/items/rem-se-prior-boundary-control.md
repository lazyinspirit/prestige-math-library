---
id: rem-se-prior-boundary-control
kind: remark
domain: mathematics
title: Prior full and partial boundary control results reported in the introduction
status: draft
deps:
  - def-se-cubic-boundary-system
  - def-se-foundation-time-function-spaces
  - def-se-foundation-control-language
  - math:def-h-minus-one-as-the-dual-of-h-one-zero
dependency_roles:
  def-se-cubic-boundary-system: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-foundation-control-language: mathematical-premise
  math:def-h-minus-one-as-the-dual-of-h-one-zero: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 1–2, final paragraph of §1.1 and §1.2
      reading_limits: Read the frozen original article text on PDF pp.1–2 for
        attribution and preservation of the historical account only. The article
        is not evidence for any earlier theorem.
    - title: Exact boundary controllability of the nonlinear Schrödinger equation
      url: https://www.academia.edu/84101289/Exact_boundary_controllability_of_the_nonlinear_Schr%C3%B6dinger_equation
      locator: Theorem 1.1, journal page 4131
      reading_limits: Read the accessible full-paper text extraction of equations
        (1.1)–(1.3) and Theorem 1.1, printed pp.4129–4131. Fraction bars and
        some relation glyphs are imperfect in the extraction; the exponent
        alternatives were checked against the abstract in the same source. No
        proof reconstruction or additional boundary-control regularity is
        claimed.
      statement: For every $T>0$, endpoints sufficiently near $w(0)$ and $w(T)$ in
        $H^s(D)$ can be joined by a solution in $C([0,T];H^s(D))$ of the cubic
        NLS, using full-boundary Dirichlet or Neumann control.
      hypotheses: $D\subset\mathbb R^n$ is a bounded domain. The nonzero constant
        $\lambda$ may be complex. A smooth reference solution $w$ exists on
        $D_1\times(-\eta,T+\eta)$ for a bounded neighborhood $D_1$ containing
        the closure of $D$, with $\eta>0$. The exponent satisfies $s>n/2$, or
        $0\le s<n/2$ with $1\le n<2+2s$, or $n=2$ with $s\in\{0,1\}$. Both
        boundary prescriptions act on the whole boundary; the theorem promises
        an appropriate control, not a specified common boundary norm.
    - title: Exact Controllability for the Schrödinger Equation
      url: https://www.electronicsandbooks.com/edt/manual/Magazine/S/SIAM%20Journal%20on%20Control%20and%20Optimization%20%28SICON%29/V32.pdf
      locator: Machtyngier (1994), printed pp.24–25, equations (1.1), (1.3), Theorem
        1.1 and real-inner-product conventions at the end of §1
      reading_limits: "Read the published-paper scan text at printed pp.24–25:
        equations (1.1) and (1.3), Theorem 1.1, the transposition solution
        class, and the real inner products at the end of §1. The publisher
        abstract at https://epubs.siam.org/doi/10.1137/S0363012991223145
        corroborates the data/control classes and arbitrary positive time. Scan
        OCR is imperfect; the proof was not reconstructed and no nonlinear
        extension is imported."
      statement: For every $T>0$ and $y^0\in H^{-1}(D)$, there is $v\in
        L^2(\Gamma_+\times(0,T))$ such that the transposition solution of
        $iy_t+\Delta y=0$, with $y=v$ on $\Gamma_+$ and $y=0$ elsewhere on the
        boundary, lies in $C([0,T];H^{-1}(D))$ and satisfies $y(T)=0$.
      hypotheses: $D\subset\mathbb R^n$ is open and bounded with $C^3$ boundary. Fix
        $x_0\in\mathbb R^n$ and put $\Gamma_+=\{x\in\partial
        D:(x-x_0)\cdot\nu(x)>0\}$, where $\nu$ points out of $D$. The source
        regards complex function spaces as real Hilbert spaces.
    - title: Geometric control in the presence of a black box
      url: https://arxiv.org/pdf/math/0304184
      locator: arXiv math/0304184v3, Theorem 1 and (1.1), PDF p.2; §6.2, PDF p.16
      reading_limits: "Read arXiv math/0304184v3 through the unversioned PDF URL,
        whose first page identifies v3: equation (1.1) and Theorem 1 on PDF p.2,
        and the obstacle conditions in §6.2 on PDF p.16. Text extraction
        contains split words. These passages do not define the all-order
        convention for the printed initial-data class; no spectral/closure
        identification or proof reconstruction is claimed."
      statement: For every $T,\varepsilon>0$ and $u_0$ in the printed class
        $H_0^{1+\varepsilon}(D)$, a control $g\in L^2([0,T]\times\partial D_e)$
        drives the linear Dirichlet Schrödinger solution to zero for $t>T$; the
        obstacle boundary is uncontrolled.
      hypotheses: $\Theta=\bigcup_{j=1}^N\Theta_j$ consists of mutually disjoint
        closed obstacles with smooth strictly convex boundaries. The smooth
        bounded outer domain $D_e$ contains $\operatorname{conv}(\Theta)$, and
        $D=D_e\setminus\Theta$. Section 6.2 requires
        $\operatorname{conv}(\Theta_j\cup\Theta_k)\cap\Theta_l=\varnothing$ for
        distinct indices; if $N>2$, also $\kappa L>N$, with $\kappa$ the infimum
        of principal curvatures and $L$ the minimum obstacle separation (no
        extra separation inequality for $N=2$).
    - title: Nicolas Burq, Contrôle de l'équation des plaques en présence d'obstacles
        strictement convexes
      url: https://smf.emath.fr/sites/default/files/2024-11/MSMF_1993_2_55__3_0__sample.pdf
      locator: §0.1, printed p.6; Theorem 0.1 and equation (0.1), printed p.7; also
        Numdam archival scan
        https://www.numdam.org/article/MSMF_1993_2_55__3_0.pdf, PDF pp.5–6
      reading_limits: Read §0.1 and Theorem 0.1, printed pp.6–7 (PDF pp.5–6), in the
        publisher sample and Numdam archival text extractions. The OCR of the
        formulas is imperfect; source-specific plate data notation and the named
        H1/H2 conditions are retained, without reconstructing their proof or
        asserting equivalence with the sufficient curvature/separation
        conditions of Burq–Zworski. No visual inspection credit is claimed.
      statement: For every $T,\varepsilon>0$, plate data
        $(u_0,u_1)\in(H^{1+\varepsilon}(D)\cap H_0^1(D))\times
        H^{-1+\varepsilon}(D)$ admit $g\in L^2((0,T)\times\partial D_e)$ such
        that $u_{tt}+\Delta^2u=0$, $u=0$ on all of $\partial D$, and $\Delta
        u=g$ on the outer boundary (zero on the obstacle boundaries), with $u=0$
        after $T$.
      hypotheses: $D_e\subset\mathbb R^3$ is connected and bounded with analytic
        boundary; mutually disjoint smooth strictly convex closed interior
        obstacles have convex hull contained in $D_e$, and
        $D=D_e\setminus\bigcup_j\Theta_j$. Condition H1 is no eclipse by a third
        obstacle. H2 is $\sum_{\gamma\text{ primitive}}\lambda_\gamma d_\gamma
        e^{\alpha d_\gamma}<\infty$ for some $\alpha>0$, where $d_\gamma$ is the
        periodic trapped-ray length and $\lambda_\gamma$ is the square root of
        the product of the two contracting Poincaré eigenvalues.
dependency_level: 3
external_input: true
---

## Statement

Assume countable choice for the function-space conventions used here. The article reports three earlier boundary-control results. Rosier and Zhang obtained local exact control for the cubic equation with Dirichlet or Neumann control acting on the whole boundary, around a smooth reference solution, for dimension-dependent Sobolev exponents. Local exact control means that initial and final states sufficiently near the reference endpoints can be joined by an admissible controlled solution.

For the linear equation, the article attributes partial-boundary control under a multiplier condition to Machtyngier. In that setting the controlled part is selected by the sign of $(x-x_0)\cdot\nu(x)$, with $x_0$ fixed and $\nu$ the outward unit normal. The cited theorem uses space-time $L^2$ Dirichlet controls and initial data in $H^{-1}$. For an open domain $D$, our notation $H^{-1}(D)$ denotes bounded conjugate-linear functionals on $H_0^1(D;\mathbb C)$, with the operator norm and evaluation pairing linear in the functional and conjugate-linear in the test vector.

The article also reports that, for certain disjoint smooth strictly convex obstacles satisfying additional geometric conditions, Burq's plate-equation result and Burq–Zworski's Schrödinger result yield outer-boundary control despite trapped rays. The Schrödinger theorem concerns $D=D_e\setminus\Theta$, with $D_e$ smooth and bounded and containing the convex hull of the obstacles; its additional obstacle conditions remain those of the cited §6.2. In the latter source, for each $T>0$ and $\varepsilon>0$, initial data in its $H_0^{1+\varepsilon}$ class can be driven to zero with a space-time $L^2$ Dirichlet control on the outer boundary. Here $H_0^{1+\varepsilon}$ reproduces the notation printed in that cited theorem; this contextual report does not identify it with either a closure of compactly supported smooth functions or a Dirichlet spectral-power domain.

## Statement references

[[def-se-cubic-boundary-system]]

[[def-se-foundation-time-function-spaces]]

[[def-se-foundation-control-language]]

[[math:def-h-minus-one-as-the-dual-of-h-one-zero]]

## External input

The following are imported theorem statements under the separate hypotheses recorded in their citation contracts; no local proof is claimed.

Rosier–Zhang, Theorem 1.1, supplies the full-boundary nonlinear control attribution.

Machtyngier, Theorem 1.1, supplies the linear multiplier-boundary control attribution.

Burq–Zworski, Theorem 1, supplies the outer-boundary Schrödinger control attribution under its §6.2 obstacle conditions.

Burq, Theorem 0.1, supplies only the plate-equation comparison below, under its own H1 and H2 hypotheses.

## Source notes

These are background attributions and do not supply a proof of the present article's control results. The three earlier results have different equations, geometries, data classes and control requirements; no implication between them is asserted. The original article is cited for its historical account, and the independent sources record the corresponding earlier theorem statements. The notation $H_0^{1+\varepsilon}$ in the preceding historical statement is kept literally as printed in Burq–Zworski, Theorem 1, for every $\varepsilon>0$. The inspected passages do not explicitly define its all-order convention. We therefore make no equality claim between its higher-order boundary compatibility requirements and any spectral or closure convention used elsewhere in this collection. No result here uses that data class as an operational premise.

For comparison, Burq's original plate theorem, Theorem 0.1, states its displacement class explicitly as $H^{1+\varepsilon}(\Omega)\cap H_0^1(\Omega)$, with velocity class $H^{-1+\varepsilon}(\Omega)$, for every $\varepsilon>0$. This is a separate plate-equation theorem under its own hypotheses; it is not used to define Burq–Zworski's notation or to transfer a control theorem between equations. Its statement and geometric hypotheses were read in the publisher sample and archival text extractions, whose formula OCR is imperfect, without reconstructing the proof.

Machtyngier uses real inner products on complex function spaces. The present conjugate-dual convention specifies our notation; the historical theorem remains reported with its source's real-pairing convention. No solution map is transported between pairing conventions and no equality of the source's norm normalization with our operator norm is asserted.
