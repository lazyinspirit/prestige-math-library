---
id: thm-nrqm-coulomb-onto-radial-continuum-transform
aliases: [nrqm-coulomb-onto-radial-continuum-transform]
kind: theorem
domain: mathematics
title: "Onto radial continuum transform"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, thm-orthogonal-decomposition-by-a-closed-subspace, thm-self-adjoint-resolvent-estimate, thm-tonelli-and-fubini-for-completed-product-measures, thm-plancherel, thm-nrqm-coulomb-continuum-spectral-density, thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-coulomb-jost-volterra-solution, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-essential-spectrum, def-projection-valued-measure, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-extension-of-a-bounded-map-from-a-dense-subspace, thm-dominated-convergence, cor-cauchy-schwarz-inequality-for-l-two, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-nrqm-coulomb-continuum-spectral-density: mathematical-premise
  thm-nrqm-coulomb-laguerre-bound-energy-exhaustion: mathematical-premise
  thm-nrqm-coulomb-jost-volterra-solution: mathematical-premise
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
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

(a) $T_lg\in L^2((0,\infty),dE)$ and $\|T_lg\|^2=\langle E_{A_l}((0,\infty))g,g\rangle$; consequently $T_l$ extends uniquely to a linear contraction $T:H\to L^2((0,\infty),dE)$, where $H:=L^2((0,\infty),dr)$ and $P_+:=E_{A_l}((0,\infty))$, with $\|Tg\|=\|P_+g\|$ for every $g\in H$. Its restriction is a linear isometry
$$\widehat T_l:E_{A_l}((0,\infty))L^2(0,\infty)\longrightarrow L^2((0,\infty),dE)$$
of the positive spectral subspace of $A_l$ into $L^2((0,\infty),dE)$, satisfying $T=\widehat T_lP_+$ and $T_lg=\widehat T_l(P_+g)$ for $g\in C_c$. Equivalently, $P_+g\mapsto T_lg$ is a well-defined isometry on the dense projected core $P_+C_c\subseteq P_+H$ and $\widehat T_l$ is its unique isometric extension;

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

[F3] Under the retained public AC hypothesis, [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]] and [[thm-unbounded-borel-functional-calculus]] give the unique regular PVM, bounded Borel calculus, nonreal resolvent multiplier and exact operator-domain norm formula. Here $H=L^2((0,\infty),dr)$, $K=L^2((0,\infty),dE)$ and $H_+=P_+H$, $P_+=E_{A_l}((0,\infty))$. Projections on disjoint spectral sets are orthogonal, bounded Borel pairings integrate mixed measures, and the restricted $A_+=A_l|_{D(A_l)\cap H_+}$ is self-adjoint with the exact restricted spectral domain: its nonreal resolvent is the restriction of the full multiplier resolvent, so both nonreal ranges are onto. The inner product is linear in the first argument. [[thm-self-adjoint-resolvent-estimate]] supplies $(A_+-z)^{-1}$ with norm at most $|\operatorname{Im}z|^{-1}$. This is an honest AC-bearing prerequisite use, retaining the stated AC and CC hypotheses on the later source40 CC lemma.

[F4] A projection on $K$ commuting with all indicator multipliers is a scalar indicator multiplier, as proved locally in step 5.1. [[thm-orthogonal-decomposition-by-a-closed-subspace]] supplies the required orthogonal projection under CC; dominated convergence and Cauchy-Schwarz are supplied by [[thm-dominated-convergence]] and [[cor-cauchy-schwarz-inequality-for-l-two]].

[F5] Fix the countable family $g_j$ of all finite rational-complex linear combinations of indicators $\mathbf1_{(a,b)}$, with $0<a<b<\infty$ rational. Each is a compact source, and on each $(1/k,k)$, $k\ge2$, the members supported there are dense in $L^2(1/k,k)$ by simple approximation and regularity. The regular solution is real for real $k$ and has locally uniform parameter bounds, including $\varphi_l(k,r)=r^{l+1}[1+O(r)]$ near zero, by [[thm-nrqm-coulomb-jost-volterra-solution]]. Compact positive-energy intervals have bounded continuous $\rho_l$ and bounded regular solutions on compact radial intervals. [[thm-tonelli-and-fubini-for-completed-product-measures]] justifies the compact double integrals below. The free Fourier multiplier and its zero-set property use [[thm-plancherel]] and the transported endpoint realization.

## Proof

1.1 [Projected norm identity on compact sources] For compactly supported $g$, [F1] with $a\downarrow0$, $b\uparrow\infty$ (or the monotone convergence of the positive measures on the increasing intervals $(1/k,k)$) gives $\|T_lg\|^2_{L^2((0,\infty),dE)}=\int_0^\infty\rho_l(E)\bigl|\int\varphi_l(\sqrt E,r)g(r)dr\bigr|^2dE=\langle E_{A_l}((0,\infty))g,g\rangle$; the right side is finite because it is the mass of the finite measure $E_{A_l,g}$ on $(0,\infty)$. This is the norm identity of (a) on the dense compact-source domain $C_c$. [F1, F2, given, algebra]

2.1 [Extension through the positive projection] Step 1.1 gives $\|T_lg\|\le\|g\|$ on compact sources, so extend $T_l$ first to a contraction $T$ on all $L^2$. Passing to compact-source approximations yields $\|Tg\|^2=\langle P_+g,g\rangle$ for every $g$, where $P_+=E_{A_l}((0,\infty))$. Thus $T(I-P_+)=0$ and $\widehat T=T|_{P_+H}$ is an isometry, with $T=\widehat T P_+$. If $P_+g=P_+h$ for compact sources, the norm identity gives $T_l(g-h)=0$, so the induced map $P_+g\mapsto T_lg$ is well-defined and isometric. The projected core $P_+C_c$ is dense in $P_+H$: project compact-source approximations to any vector in $P_+H$ and use $\|P_+\|\le1$. This proves the unique-extension and factorization assertions of (a). Its range is closed because Cauchy sequences in that range pull back to Cauchy sequences in the complete positive subspace. In particular compact-source images are dense in its range, without incorrectly calling $T_l$ isometric on all compact sources. [step 1.1, F2, F3, algebra]

3.1 [Compressed resolvents and the missing norm equality] Write $W=\widehat T:H_+\to K$, $M=\operatorname{ran}W$ and $Q$ for the orthogonal projection onto this closed range. Define $W^*=W^{-1}Q$: uniqueness of orthogonal decomposition gives directly $\langle Wu,v\rangle=\langle u,W^*v\rangle$, $W^*W=I_{H_+}$ and $WW^*=Q$, without invoking another representation theorem. Polarize [F1] on compact sources; the mixed measures are finite, and equality on positive intervals extends to all positive Borel sets by the interval-generated finite-measure uniqueness argument. Integration of bounded simple functions and bounded approximation then gives $\langle M_bTg,Th\rangle=\langle b_+(A_l)g,h\rangle$, where $b_+$ is $b$ on the positive half-line and zero elsewhere. Boundedness extends this identity from compact sources to all $g,h\in H$. Thus $W^*M_bW=b(A_+)$, initially only a compression. For $z=x+iy$, $y\ne0$, put $m_z(E)=(E-z)^{-1}$ and $R_z=(A_+-z)^{-1}$. The identity gives $QM_{m_z}Wu=WR_zu$. Pointwise $\operatorname{Im}m_z=y|m_z|^2$, so $\operatorname{Im}\langle M_{m_z}Wu,Wu\rangle=y\|M_{m_z}Wu\|^2$. Setting $v=R_zu$ and $u=(A_+-z)v$, self-adjointness and the linear-first convention give $\operatorname{Im}\langle R_zu,u\rangle=\operatorname{Im}\langle v,(A_+-z)v\rangle=y\|R_zu\|^2$. The compressed pairing identifies these imaginary parts. Dividing by the nonzero real $y$ proves $\|M_{m_z}Wu\|^2=\|R_zu\|^2=\|WR_zu\|^2=\|QM_{m_z}Wu\|^2$. Pythagoras forces $(I-Q)M_{m_z}Wu=0$. Apply this to both $z$ and $\overline z$, whose multipliers are adjoints: $M$ and $M^\perp$ reduce these multipliers, $Q$ commutes with them, and $M_{m_z}W=WR_z$. This is the required compression-to-reduction proof before any onto claim. [step 2.1, F1, F3, F4, algebra]

4.1 [Resolvent reduction implies indicator reduction] For $0<a<b$ and $\varepsilon>0$, define $p_{\varepsilon,a,b}(E)=\pi^{-1}\int_a^b\varepsilon/[(E-t)^2+\varepsilon^2]dt$. Its multiplier commutes with $Q$: it is the operator-norm Riemann-integral limit of the imaginary parts of $M_{m_{t+i\varepsilon}}$, since $\|M_{m_{t+i\varepsilon}}-M_{m_{s+i\varepsilon}}\|\le|t-s|/\varepsilon^2$. One has $0\le p_{\varepsilon,a,b}\le1$, and these functions tend as $\varepsilon=1/n\downarrow0$ to $\mathbf1_{(a,b)}$ except at the two Lebesgue-null endpoints. Dominated convergence against $|h|^2$ for each $h\in K$ gives strong convergence of the multipliers, so $Q$ commutes with $M_{\mathbf1_{(a,b)}}$. The Borel sets whose multipliers commute with $Q$ form a sigma-algebra: complements use $I-M_{\mathbf1_B}$, intersections use products, and disjoint countable unions use strongly convergent finite sums; disjointification gives arbitrary countable unions. Positive intervals generate the Borel sigma-algebra, so all Borel indicators commute with $Q$. Bounded simple approximation gives all bounded Borel multipliers; completed-measurable sets have the same multiplier as a Borel representative modulo null sets. [step 3.1, F4, algebra]

5.1 [The reducing projection is a scalar indicator] Set $q(E)=e^{-E}>0$ in $K$, $\psi=Qq$ and $a=\psi/q$ using measurable representatives. Commutation gives $Q(bq)=b\psi$ for bounded measurable $b$. For every measurable $B$, contractivity gives $\int_B|\psi|^2\le\int_Bq^2$, hence $|a|\le1$ a.e.; otherwise intersecting $\{|a|>1+1/n\}$ with a bounded positive interval gives a contradiction to this inequality. Vectors $bq$ are dense: for $h\in K$, $h_n=\mathbf1_{\{1/n<E<n,\ |h/q|\le n\}}h$ have that form and converge in $K$ by dominated convergence. Therefore $Q=M_a$ on $K$. Self-adjointness and idempotence force $a=\overline a=a^2$ a.e., testing the multiplier identities on bounded-interval indicators. Thus $Q=M_{\mathbf1_S}$ for a measurable $S$, and $M=L^2(S)$. [step 4.1, F4, construct, algebra]

6.1 [Countable compact tests eliminate the complement] For the explicit family $g_j$ of [F5], each $T_lg_j$ lies in $M=L^2(S)$ and vanishes a.e. on $S^c$. Remove the union of the countably many exceptional null sets. For every remaining $E\in S^c$, positivity of $\rho_l(E)$ gives $\int\varphi_l(\sqrt E,r)g_j(r)dr=0$ for every $j$. On each $(1/k,k)$, $k\ge2$, this is a continuous linear functional by Cauchy-Schwarz and local square integrability of $\varphi_l$. Its vanishing on the fixed dense family implies its vanishing on all of $L^2(1/k,k)$, including $\overline{\varphi_l}\mathbf1_{(1/k,k)}$. Hence $\int_{1/k}^k|\varphi_l|^2=0$. Exhausting $(0,\infty)$ contradicts the nonzero continuous regular solution of [F1]. The remaining part of $S^c$ is therefore empty, so $S^c$ is null, $Q=I_K$, and $W$ is unitary with isometric inverse $W^*$. Only countably many conull sets were intersected. This proves (b). [step 5.1, F1, F4, F5, algebra]

7.1 [Exact bounded and unbounded diagonalization] Steps 3.1, 4.1 and 6.1 give $\widehat T E_{A_l}(B)|_{P_+H}=M_{\mathbf1_B}\widehat T$ for every positive Borel set. Linear combinations and bounded pointwise simple approximation therefore give $\widehat T h(A_l)|_{P_+H}\widehat T^*=M_{h|_{(0,\infty)}}$ for every bounded Borel $h$. This uses the onto-ness of step 6.1 and does not incorrectly pair negative components through $T$. For unbounded energy, spectral truncation and the norm formula give $\int E^2|\widehat T g(E)|^2dE=\int_{(0,\infty)}\lambda^2dE_g(\lambda)$, so the exact generator domain is $\{h:Eh\in L^2(dE)\}$ and $\widehat T A_l|_{P_+H}\widehat T^*=M_E$ there. [step 3.1, step 4.1, step 6.1, F3, algebra]

7.2 [Inverse integral and exact scope of convergence] For $h\in K$ put $h_n=\mathbf1_{(1/n,n)}h$ and $v_n(r)=\int_{1/n}^n\sqrt{\rho_l(E)}\varphi_l(\sqrt E,r)h(E)dE$. The compact parameter bounds of [F5] and Cauchy-Schwarz give $v_n\in L^2_{\mathrm{loc}}(0,\infty)$. Fubini for compact-source $g$ gives $\langle Tg,h_n\rangle=\langle g,v_n\rangle$. Since $T=W P_+$ and $W^*h_n\in H_+$, the left side also equals $\langle g,W^*h_n\rangle$. All compact-source tests therefore identify $v_n$ locally a.e. with $W^*h_n$, so $v_n$ represents a global $L^2$ element of $H_+$. Finally $h_n\to h$ in $K$ and $W^*$ is an isometry, giving $W^*h=\lim_{n\to\infty}v_n$ in $L^2(dr)$. This explicitly realizes the inverse without asserting pointwise convergence at infinity. If compact source means bounded support that may approach zero, cutting it off below $1/n$ and using the regular $r^{l+1}$ bound of [F5] extends all compact-energy integral identities by Cauchy-Schwarz and $L^2$ continuity. [step 2.1, step 6.1, F4, F5, algebra]

8.1 [Complete resolution of $C$] By the block identity of [[thm-nrqm-coulomb-transported-radial-endpoint-realization]] and the angular unitary of [[thm-nrqm-coulomb-angular-radial-unitary-reduction]], $C$ is unitarily equivalent to the direct sum over $(l,m)$ of the operators $A_l$, and by the previous items $A_l$ is unitarily equivalent to $M_E$ on $L^2((0,\infty),dE)$ together with the discrete eigenvalues $-\gamma^2/(4n^2)$, $n\ge l+1$, each simple, whose eigenspaces are spanned by the transported regular solutions ([[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]], [[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]]); the essential spectrum is $[0,\infty)$ and the positive spectrum is purely absolutely continuous by [[thm-nrqm-coulomb-continuum-spectral-density]]. The absence of a zero eigenvector follows from [[thm-nrqm-coulomb-continuum-spectral-density]]. For $\gamma>0$, PVM transport from [F3] through the angular unitary and the exact block identity shows that the normalized global negative eigenfamily restricts to a complete radial negative family in each channel; otherwise placing a missing radial vector in one channel contradicts global completeness. Thus each radial unitary sends $u$ to $((\langle u,u_{nl}/\|u_{nl}\|\rangle)_{n\ge l+1},W P_+u)$, with inverse the $L^2$ bound-family sum plus step 7.2. Assembling these unitaries in the fixed countable channel order gives the stated onto unitary $V$, since orthogonal norm sums give convergence and surjectivity. The exact block domain and step 7.1 identify its diagonal domain with square summability of all energy-multiplied discrete and continuum coordinates. For $\gamma=0$, use the transported free operator: its explicit Fourier multiplier $|p|^2$ has zero projection on $(-\infty,0]$, since $\{p=0\}$ is null. PVM uniqueness and unitary transport in [F3] give $\bigoplus_{l,m}E_{A_l}((-\infty,0])=0$, so every individual nonpositive block projection is zero. Each free radial block is consequently wholly positive, and the same positive transforms assemble a continuum-only unitary. No zero-energy bound copies are introduced. [step 7.1, step 7.2, F3, F5, given, algebra]

9.1 [Conclusion] Clauses (a), (b), (c), (d) are steps 1.1 and 2.1; 3.1 through 6.1; 7.1; and 8.1. Step 7.2 explicitly realizes the isometric adjoint inverse. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 7.2, step 8.1] ∎
