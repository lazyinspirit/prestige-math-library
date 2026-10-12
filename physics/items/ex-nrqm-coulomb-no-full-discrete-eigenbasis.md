---
id: ex-nrqm-coulomb-no-full-discrete-eigenbasis
aliases: [nrqm-coulomb-example-no-full-discrete-eigenbasis]
kind: example
domain: mathematics
title: "No full discrete eigenbasis"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-coulomb-continuum-spectral-density, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-jost-volterra-solution, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-essential-spectrum, def-projection-valued-measure, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-continuity-real, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-cauchy-schwarz-inequality-for-l-two, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-continuum-spectral-density: mathematical-premise
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-coulomb-jost-volterra-solution: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-continuity-real: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.1-10.2 pp. 221-225 (sigma_ess(H^{(1)}) = [0,infinity); the point spectrum consists of the negative eigenvalues) and Section 10.4 p. 230 (Theorem 10.8: sigma_ac(A_l) = [0,infinity))"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive), Section 8.1 pp. 184-189 (the Rydberg series and its limit; only the discrete levels below the ionisation threshold are enumerated)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, let
$C=-\Delta-\gamma/|\cdot|$ on $H^2(\mathbb R^3;\mathbb C)$ be as above, and
fix $g\in C_c^\infty((0,\infty);\mathbb C)$ with
$$\int_0^\infty\varphi_0(1,r)g(r)\,dr=1,$$
where $\varphi_0(1,\cdot)$ is the regular solution of
[[thm-nrqm-coulomb-jost-volterra-solution]] at $k=1$, $l=0$. Such a $g$ exists
because $\varphi_0(1,\cdot)$ is nonzero and locally square-integrable. Put
$$\psi(x):=\frac{g(r)}{r}Y_{00}(\Omega)\qquad(x=r\Omega).$$
This example verifies concretely that:

(a) $\psi\in L^2(\mathbb R^3;\mathbb C)$ and the coefficients of $\psi$ in the polar decomposition of [[thm-nrqm-coulomb-angular-radial-unitary-reduction]] vanish except in the $(0,0)$-block, where they equal $g$;

(b) $\langle E_C((0,\infty))\psi,\psi\rangle=\int_0^\infty\rho_0(E)\bigl|\int_0^\infty\varphi_0(\sqrt E,r)g(r)dr\bigr|^2dE>0$;

(c) consequently the closed span of the bound states $(\psi_{nlm})$ of [[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]] is a proper subspace of $L^2(\mathbb R^3;\mathbb C)$: the bound states alone are not a complete eigenbasis, and the nonnegative continuous spectral projection is indispensable.

## Verification

**Given:** $\gamma>0$, the source $g$ with the displayed normalization, the function $\psi$, and the operators $C,A_0$ with their spectral measures.

**Proof technique:** explicit computation with the unitary polar decomposition and the spectral density; positivity of a continuous nonzero integrand.

[F1] The polar unitary $U$ of [[thm-nrqm-coulomb-angular-radial-unitary-reduction]] maps the block function $r^{-1}g(r)Y_{00}(\Omega)$ to the vector with $(0,0)$-entry $g$ and all other entries $0$, and $\|r^{-1}gY_{00}\|_2=\|g\|_2$; $C_c^\infty((0,\infty))\subseteq L^2(0,\infty)$ is dense and $\varphi_0(1,\cdot)\ne0$ ([[thm-nrqm-coulomb-jost-volterra-solution]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F2] Spectral density of $A_0$ for compactly supported sources: for every $0<a<b$, $\langle E_{A_0}((a,b))g,g\rangle=\int_a^b\rho_0(E)|\int_0^\infty\varphi_0(\sqrt E,r)g(r)dr|^2dE$ with $\rho_0(E)>0$; the identity of measures extends to all Borel sets in $(0,\infty)$ ([[thm-nrqm-coulomb-continuum-spectral-density]]).

[F3] The block identity $UCU^*=\bigoplus_{(l,m)}A_l$; the negative spectral subspace of $C$ is the closed span of the bound states, which is $U^{-1}$ of the corresponding direct sum of negative eigenspaces of the $A_l$ ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]], [[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]], [[thm-nrqm-coulomb-essential-spectrum]]).

[F4] Complex conjugation and continuity: $E\mapsto\int_0^\infty\varphi_0(\sqrt E,r)g(r)dr$ is continuous on $(0,\infty)$ (it is a pairing against a smooth family of solutions, [[thm-nrqm-coulomb-jost-volterra-solution]], [[def-continuity-real]]), and Cauchy-Schwarz bounds the expression ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-hilbert-space]]).


1.1 [The vector and its coefficients] Since $g$ is compactly supported in $(0,\infty)$ and $Y_{00}$ is bounded, $\psi$ is a finite-block element in $L^2$; by [F1] its polar transform is supported in the $(0,0)$-block with entry $g$, so $\|\psi\|_2=\|g\|_2<\infty$ and $\psi\ne0$. This is (a). [F1, given, algebra]

2.1 [Positive continuous-spectrum component] The function $h(E):=\int_0^\infty\varphi_0(\sqrt E,r)g(r)dr$ is continuous by [F4] and satisfies $h(1)=1$ by the choice of $g$; hence there is $\delta>0$ with $|h(E)|\ge1/2$ on $(1-\delta,1+\delta)$. By [F2] and the block identity [F3], $\langle E_C((0,\infty))\psi,\psi\rangle=\langle E_{A_0}((0,\infty))g,g\rangle=\int_0^\infty\rho_0(E)|h(E)|^2dE\ge\int_{1-\delta}^{1+\delta}\rho_0(E)|h(E)|^2dE\ge\tfrac14\int_{1-\delta}^{1+\delta}\rho_0(E)dE>0$, because $\rho_0>0$ and the interval has positive length. This is (b). [step 1.1, F2, F3, F4, algebra]

3.1 [The bound states do not span $L^2$] The negative spectral subspace $E_C((-\infty,0))L^2$ is exactly the closed span of the bound states by [F3]; since $(0,\infty)$ and $(-\infty,0)$ are disjoint Borel sets, the spectral projections are orthogonal, so the component $E_C((0,\infty))\psi\ne0$ of step 2.1 is orthogonal to the whole negative spectral subspace. Hence $\psi$ is not in the closed span of the bound states, which is therefore a proper subspace of $L^2(\mathbb R^3;\mathbb C)$. This is (c). [step 2.1, F3, algebra]

4.1 [Conclusion] Parts (a), (b), (c) are steps 1.1, 2.1 and 3.1. [step 1.1, step 2.1, step 3.1] ∎
