---
id: thm-nrqm-coulomb-onto-radial-continuum-transform
aliases: [nrqm-coulomb-onto-radial-continuum-transform]
kind: theorem
domain: mathematics
title: "Onto radial continuum transform"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-coulomb-continuum-spectral-density, thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-coulomb-jost-volterra-solution, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-essential-spectrum, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, thm-bounded-borel-pvm-integral, def-projection-valued-measure, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-extension-of-a-bounded-map-from-a-dense-subspace, thm-dominated-convergence, cor-cauchy-schwarz-inequality-for-l-two, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-continuum-spectral-density: mathematical-premise
  thm-nrqm-coulomb-laguerre-bound-energy-exhaustion: mathematical-premise
  thm-nrqm-coulomb-jost-volterra-solution: mathematical-premise
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.3 pp. 195-202 (spectral transformations I: construction of the direct and inverse transforms) and Section 9.6 pp. 209-214 (spectral transformations II)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis (ETH lecture notes, 2017), Section 5.6-5.7 pp. 273-298 (spectral measures and cyclic vectors) and Chapter 6 pp. 305-333 (unbounded operators on Hilbert spaces)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma\ge0$, $l\ge0$,
let $A_l$ be the radial operator of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]] with spectral
measure $E_{A_l}$ and form domain $V_l$, and for $E>0$ let
$\varphi_l(\sqrt E,\cdot)$ and $\rho_l(E)=\frac{\sqrt E}{\pi|W_l(\sqrt E)|^2}$
be as in [[thm-nrqm-coulomb-continuum-spectral-density]]. Define, for $g$ in
the dense subspace $C_c$ of compactly supported square-integrable functions,
$$(T_lg)(E):=\sqrt{\rho_l(E)}\int_0^\infty\varphi_l(\sqrt E,r)g(r)\,dr\qquad(E>0).$$
Then:

(a) $T_lg\in L^2((0,\infty),dE)$ and $\|T_lg\|^2=\langle E_{A_l}((0,\infty))g,g\rangle$; consequently $T_l$ extends uniquely to a linear isometry
$$\widehat T_l:E_{A_l}((0,\infty))L^2(0,\infty)\longrightarrow L^2((0,\infty),dE)$$
of the positive spectral subspace of $A_l$ into $L^2((0,\infty),dE)$;

(b) $\widehat T_l$ is onto, hence unitary; equivalently the range of $\widehat T_l$ is all of $L^2((0,\infty),dE)$ and the adjoint $\widehat T_l^*$ is an isometry inverse to $\widehat T_l$;

(c) $\widehat T_lA_l\widehat T_l^*$ is multiplication by the independent variable on the domain $\{h\in L^2((0,\infty),dE):\int E^2|h(E)|^2dE<\infty\}$, and $\widehat T_lh(A_l)\widehat T_l^*$ is multiplication by $h$ for every bounded Borel function $h$;

(d) *complete Coulomb spectral resolution.* If $\gamma>0$, the operator $C=-\Delta-\gamma/|\cdot|$ on $H^2(\mathbb R^3;\mathbb C)$ is unitarily equivalent to the diagonal operator
$$\bigoplus_{(l,m)}\Bigl[\Bigl(\bigoplus_{n\ge l+1}\mathbb C\Bigr)\oplus L^2((0,\infty),dE)\Bigr]$$
with the constant $-\gamma^2/(4n^2)$ on the $(n,l,m)$-copy of $\mathbb C$ and multiplication by $E$ on each continuum copy; equivalently there is a unitary $V$ from $L^2(\mathbb R^3;\mathbb C)$ onto the displayed direct sum with $VCV^*$ equal to that diagonal operator, and the negative part of the spectrum is exhausted by the bound states of [[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]] while the positive part is purely absolutely continuous. If $\gamma=0$, the representation is $\bigoplus_{(l,m)}L^2((0,\infty),dE)$ with multiplication by $E$ and no discrete copies, because the free Fourier multiplier has no nonpositive spectral projection.

The transform is a mathematical spectral representation of $A_l$ and $C$; no
scattering amplitude, phase shift or physical interpretation is asserted.

## Facts & Assumptions

**Given:** $\gamma\ge0$, $l\ge0$, the operator $A_l$, its spectral measure $E_{A_l}$, the density $\rho_l$, the solutions $\varphi_l$, and the unitary $U$ of [[thm-nrqm-coulomb-angular-radial-unitary-reduction]].

[F1] For compactly supported $g,h$ and every $0<a<b$: $\langle E_{A_l}((a,b))g,h\rangle=\int_a^b\rho_l(E)\bigl(\int\varphi_l(\sqrt E,r)g(r)dr\bigr)\overline{\bigl(\int\varphi_l(\sqrt E,r)h(r)dr\bigr)}dE$; the measures have no atoms in $(0,\infty)$, $\rho_l(E)>0$, and $\varphi_l(\sqrt E,\cdot)\ne0$ in $L^2_{\mathrm{loc}}$ for every $E>0$ ([[thm-nrqm-coulomb-continuum-spectral-density]], [[thm-nrqm-coulomb-jost-volterra-solution]]).

[F2] Compactly supported functions are dense in $L^2(0,\infty)$, and a bounded linear isometry defined on a dense subspace extends uniquely to the closure with the same norm ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-hilbert-space]]).

[F3] Bounded Borel functional calculus: for a self-adjoint operator $A$ with PVM $E$ and bounded Borel $h$, $h(A)=\int h\,dE$ satisfies $\langle h(A)x,y\rangle=\int h\,dE_{x,y}$ and $h(A)^*=\overline h(A)$; projections on disjoint sets are orthogonal ([[thm-bounded-borel-pvm-integral]], [[thm-unbounded-borel-functional-calculus]], [[def-projection-valued-measure]]).

[F4] A projection $P$ on $L^2((0,\infty),dE)$ commuting with every indicator multiplication $M_{\mathbf 1_B}$ is $M_{\mathbf 1_S}$ for a measurable $S$: choosing $0<\rho_0\in L^2$ with $1/\rho_0$ locally bounded and setting $\psi:=P\rho_0$, commutation with $M_h$ for bounded $h$ gives $P(h\rho_0)=h\psi$; boundedness of $P$ gives $\|\mathbf 1_B\psi\|_2\le\|\mathbf 1_B\rho_0\|_2$ for every $B$, so $\varphi:=\psi/\rho_0$ is essentially bounded, and $P=M_\varphi$ on a dense set; self-adjointness and idempotence give $\varphi=\overline\varphi=\varphi^2$, so $\varphi$ is the indicator of $S=\{\varphi=1\}$ up to a null set ([[thm-bounded-borel-pvm-integral]], [[def-projection-valued-measure]], [[thm-dominated-convergence]]).

[F5] The spectral theorem in multiplication form: a self-adjoint operator with a separating vector and a spectral measure absolutely continuous with density against $dE$ is unitarily equivalent to multiplication by $E$ on $L^2$ of its spectrum ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]]).

## Proof

1.1 [Isometry on compact sources] For compactly supported $g$, [F1] with $a\downarrow0$, $b\uparrow\infty$ (or the monotone convergence of the positive measures on the increasing intervals $(1/k,k)$) gives $\|T_lg\|^2_{L^2((0,\infty),dE)}=\int_0^\infty\rho_l(E)\bigl|\int\varphi_l(\sqrt E,r)g(r)dr\bigr|^2dE=\langle E_{A_l}((0,\infty))g,g\rangle$; the right side is finite because it is the mass of the finite measure $E_{A_l,g}$ on $(0,\infty)$. This is the isometry of (a) on the dense set $C_c$. [F1, F2, given, algebra]

2.1 [Extension through the positive projection] Step 1.1 gives $\|T_lg\|\le\|g\|$ on compact sources, so extend $T_l$ first to a contraction $T$ on all $L^2$. Passing to compact-source approximations yields $\|Tg\|^2=\langle P_+g,g\rangle$ for every $g$, where $P_+=E_{A_l}((0,\infty))$. Thus $T(I-P_+)=0$ and $\widehat T=T|_{P_+H}$ is an isometry. Its range is closed because Cauchy sequences in that range pull back to Cauchy sequences in the complete positive subspace. In particular compact-source images are dense in its range, without incorrectly calling $T_l$ isometric on all compact sources. [step 1.1, F2, F3, algebra]

3.1 [The range actually reduces every indicator] Set $Q=\widehat T\widehat T^*$. The polarized density identity, first on intervals and then on all positive Borel sets by finite measure uniqueness, gives $T^*M_{\mathbf1_B}T=E_{A_l}(B)$. Hence $Q M_{\mathbf1_B}Tg=T E_{A_l}(B)g$. Moreover $\|M_{\mathbf1_B}Tg\|^2=\langle E_{A_l}(B)g,g\rangle=\|T E_{A_l}(B)g\|^2=\|Q M_{\mathbf1_B}Tg\|^2$. Pythagoras forces $(I-Q)M_{\mathbf1_B}Tg=0$. Compact-source images are dense in the range, so it is invariant under each self-adjoint indicator multiplier; its orthogonal complement is invariant as well. Thus $Q M_{\mathbf1_B}=M_{\mathbf1_B}Q$. [step 2.1, F1, F3, algebra]

4.1 [The range is $L^2(S)$ with $S$ of full measure] By step 3.1 and [F4] the projection $Q$ equals $M_{\mathbf 1_S}$ for a measurable $S\subseteq(0,\infty)$; thus $\operatorname{ran}\widehat T_l=L^2(S,dE)$ and its orthogonal complement in $L^2((0,\infty),dE)$ is $L^2(S^c,dE)$. If $S^c$ had positive measure, then for a.e. $E\in S^c$ one would have $(T_lg)(E)=0$ for every $g\in C_c$, because $(T_lg)$ is supported in $S$; fix the countable family $g_{j,k}$, $j,k\ge1$, where for each $k$ the functions $(g_{j,k})_j$ run over a countable dense subset of $C_c((1/k,k))$ (possible by the separability of $L^2$ and [F2]). Intersecting the countably many conull sets, we get a conull set of $E\in S^c$ with $\int\varphi_l(\sqrt E,r)g_{j,k}(r)dr=0$ for all $j,k$ (since $\rho_l(E)>0$); for fixed $k$ the restrictions of the $g_{j,k}$ are dense in $L^2(1/k,k)$ and the pairing against $\varphi_l(\sqrt E,\cdot)\in L^2(1/k,k)$ vanishes on that dense set, hence $\varphi_l(\sqrt E,\cdot)=0$ a.e. on $(1/k,k)$ for every $k$, i.e. $\varphi_l(\sqrt E,\cdot)=0$ in $L^2_{\mathrm{loc}}(0,\infty)$, contradicting [F1]. Hence $S^c$ is a null set and $\widehat T_l$ is unitary. This is (b). [step 3.1, F1, F2, F4, algebra]

5.1 [Exact bounded and unbounded diagonalization] Step 3.1 gives $\widehat T E_{A_l}(B)|_{P_+H}=M_{\mathbf1_B}\widehat T$ for every positive Borel set. Linear combinations and bounded pointwise simple approximation therefore give $\widehat T h(A_l)|_{P_+H}\widehat T^*=M_{h|_{(0,\infty)}}$ for every bounded Borel $h$. This uses the onto-ness of step 4.1 and does not incorrectly pair negative components through $T$. For unbounded energy, spectral truncation and the norm formula give $\int E^2|\widehat T g(E)|^2dE=\int_{(0,\infty)}\lambda^2dE_g(\lambda)$, so the exact generator domain is $\{h:Eh\in L^2(dE)\}$ and $\widehat T A_l|_{P_+H}\widehat T^*=M_E$ there. [step 3.1, step 4.1, F3, algebra]

6.1 [Complete resolution of $C$] By the block identity of [[thm-nrqm-coulomb-transported-radial-endpoint-realization]] and the angular unitary of [[thm-nrqm-coulomb-angular-radial-unitary-reduction]], $C$ is unitarily equivalent to the direct sum over $(l,m)$ of the operators $A_l$, and by the previous items $A_l$ is unitarily equivalent to $M_E$ on $L^2((0,\infty),dE)$ together with the discrete eigenvalues $-\gamma^2/(4n^2)$, $n\ge l+1$, each simple, whose eigenspaces are spanned by the transported regular solutions ([[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]], [[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]]); the essential spectrum is $[0,\infty)$ and the positive spectrum is purely absolutely continuous by [[thm-nrqm-coulomb-continuum-spectral-density]]. The absence of a zero eigenvector follows from [[thm-nrqm-coulomb-continuum-spectral-density]]. For $\gamma>0$, assembling the normalized bound eigenvectors and positive transforms gives the stated unitary $V$. For $\gamma=0$, use the transported free operator: its explicit Fourier multiplier $|p|^2$ has zero projection on $(-\infty,0]$, since $\{p=0\}$ is null. Each free radial block is consequently wholly positive, and the same positive transforms assemble a continuum-only unitary. No zero-energy bound copies are introduced. [step 5.1, given, algebra]

7.1 [Conclusion] Clauses (a), (b), (c), (d) are steps 1.1 and 2.1; 3.1 and 4.1; 5.1; and 6.1. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
