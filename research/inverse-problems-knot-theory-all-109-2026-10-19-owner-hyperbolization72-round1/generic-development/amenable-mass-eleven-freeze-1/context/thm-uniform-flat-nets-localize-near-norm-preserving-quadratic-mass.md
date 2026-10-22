---
id: thm-uniform-flat-nets-localize-near-norm-preserving-quadratic-mass
kind: theorem
title: Uniform flat nets localize near norm-preserving quadratic mass
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-cauchy-integral-formula-circle
  - thm-montel-theorem-for-holomorphic-functions
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-covering-space-lifting-criterion
  - cor-cauchy-schwarz-inequality-for-l-two
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Amenability, Poincare series and quasiconformal maps
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/amen/amen.pdf
      locator: Full Sections 9–12 and Appendix A.1–A.4 read; Theorem 11.1, printed pp. 113–114, uses the uniform flat-net localization operation proved quantitatively below
---

## Statement

Assume AC. Let $p:Y\to X$ be a connected holomorphic unbranched covering of second-countable Riemann surfaces. Neither a finite-generation nor a regular-cover assumption is imposed. Let $q$ be an integrable holomorphic quadratic differential on $Y$, with $\|q\|_1=1$, and let $\psi=\Theta_pq\ne0$ be its holomorphic pushforward. Put $I=1-\|\psi\|_1\ge0$.

Supply a finite flat net $E_1,\ldots,E_s$ on $X$, $1\le s\le J$: each has a holomorphic coordinate onto a Euclidean disc of one common radius $r>0$ in which $\psi=dw^2$. Whenever two discs intersect they lie in one such flat coordinate chart, so their overlap is a connected Euclidean lens. Assume every nonempty lens has $|\psi|$ area at least $aA$, where $A=\pi r^2$ and $0<a\le1$. Write $U=\bigcup_\alpha E_\alpha$. Form the graph of all lifts of these discs to $Y$, with an edge exactly when two lifts intersect. Supply a union $\mathcal B$ of connected components of this graph whose vertex expansion is at least $\gamma>0$: every finite set $S$ of its vertices has at least $\gamma|S|$ neighbors outside $S$, counted inside $\mathcal B$. The union may have countably many components.

There is a constant $C=C(J,a,\gamma)<\infty$, independent of $X,Y,p,q,r$, such that
$$\int_{\bigcup_{B\in\mathcal B}B}|q|\le CI.$$
More precisely the sum of the individual masses of all lifted discs in $\mathcal B$ is at most $CI$. Thus small loss of norm under pushforward forces small mass on every uniformly expanding part of a uniform flat net.

Here is its exact mass-localization consequence. Let $F\subset X$ and $A_Y\subset Y$ be measurable. Assume $A_Y$ contains $p^{-1}(X\setminus F)$ and every lifted net disc not in $\mathcal B$. Then
$$\int_{Y\setminus A_Y}|q|\le(C+1)I+\int_{F\setminus U}|\psi|.$$
In particular for a sequence $p_n,q_n,\psi_n,F_n,A_n$ with $I_n\to0$, suppose that for every $\delta>0$ one can supply such nets and expanding unions with common bounds $J_\delta,a_\delta,\gamma_\delta$ for all sufficiently large $n$, satisfying
$$\limsup_n\int_{F_n\setminus U_n}|\psi_n|\le\delta.$$
Then $\int_{Y_n\setminus A_n}|q_n|\to0$. This includes varying complex structures and countably many lifted components, once the stated uniform geometric and graph data have actually been established.

The theorem supplies the analytic localization engine. It does not assert that these nets or expansion bounds automatically exist in a degenerating family, identify $A_n$ with a topological amenable part, or import projective quadratic compactness, covering compactness, norm continuity or completeness of Poincare series.

## Facts & Assumptions

**Given:** AC and the covering, unit-norm differential, nonzero pushforward, uniform flat-net and chosen uniformly expanding graph data specified above; the measurable sets and sequence data only for their respective conclusions.

[A1] Full AC is [[def-axiom-of-choice]]. It implies [[def-countable-choice]] by restricting a choice function to a countable family, and supplies all countable analytic and covering selections here.

[F1] Cauchy's circle formula, integrated over radii, gives the local holomorphic mean-value inequality. [[thm-cauchy-integral-formula-circle]]

[F2] A locally bounded holomorphic family on a plane domain has locally uniformly convergent subsequences with holomorphic limits. [[thm-montel-theorem-for-holomorphic-functions]]

[F3] Nonnegative and absolutely integrable countable sums and integrals can be interchanged using counting measure and the completed-product Tonelli/Fubini theorem. Conformal chart changes have real Jacobian $|f'|^2$ and obey change of variables for nonnegative measurable functions. [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F4] A map from a simply connected disc lifts through a cover after an initial point is fixed; the lift is unique. [[thm-covering-space-lifting-criterion]] Integral Cauchy–Schwarz holds for square-integrable factors. [[cor-cauchy-schwarz-inequality-for-l-two]]

## Proof

1.1 First the pushforward and its defect require no auxiliary covering operator theorem. Cover $X$ by countably many relatively compact evenly covered coordinate discs. Their inverse sheets are countable because $Y$ is second countable. For a holomorphic integrable quadratic $q$, the inverse-sheet coefficients have sum of absolute integrals at most $\|q\|_1$ on each disc, by [F3]. Their suprema on a smaller disc are summable by [F1], so their sum is normally convergent and holomorphic. Relabeling sheets gives a global quadratic $\Theta_pq$. A disjoint measurable partition subordinate to those discs and [F3] give $\|\Theta_pq\|_1\le\|q\|_1$. They also give $\int_Y(p^*\mu)q=\int_X\mu\psi$ for every bounded Beltrami tensor $\mu$. Define $\mu=\overline\psi/|\psi|$ in conformal coordinates off its zeros, and zero at its zeros. Its tensor rule is the Beltrami rule, so this is globally defined. Then $$d=|q|-\operatorname{Re}((p^*\mu)q)\ge0,\qquad\int_Yd=1-\|\psi\|_1=I.$$ More locally, for every measurable $E\subset X$, triangle inequality for the sheet sum gives $$0\le\int_{p^{-1}E}|q|-\int_E|\psi|\le I,$$ since the nonnegative differences over $E$ and its complement sum to $I$. All integrals here are of absolute-value densities, independent of coordinates. [A1, F1, F3, given, construct, algebra]

1.2 We prove the uniform local rigidity used on a flat disc. For every $\eta>0$ there is $\varepsilon>0$ such that a holomorphic $h$ on the unit disc with $\int|h|=1$ and $\operatorname{Re}\int h>1-\varepsilon$ satisfies $\int|h-1/\pi|<\eta$. Otherwise take a violating sequence with defects tending to zero. The inequality $|\operatorname{Im}h|^2\le2|h|(|h|-\operatorname{Re}h)$ and integral Cauchy–Schwarz give $\int|\operatorname{Im}h|\to0$. The mean-value bound [F1] makes the family locally bounded, so [F2] gives subsequential holomorphic limits. Their imaginary parts vanish, hence they are real constants; their value at zero is $1/\pi$, since $\operatorname{Re}h(0)=\pi^{-1}\operatorname{Re}\int h\to1/\pi$. Thus the only local uniform limit is $1/\pi$. On the radius-$t$ disc, $\int|h|\to t^2$ and $\int|h-1/\pi|\to0$. Outside it, the latter integral is at most the remaining mass of $|h|$ plus $1-t^2$, whose limsup is at most $2(1-t^2)$. Letting $t\uparrow1$ proves full $L^1$ convergence and contradicts the violation. This also proves uniformity in the assertion. After translation, scaling and normalizing by the mass, on a radius-$r$ disc it says: if $m=\int|h|>0$ and $m^{-1}\int(|h|-\operatorname{Re}h)<\varepsilon$, then $$\int|h-m/A|<\eta m,\qquad A=\pi r^2.$$ No limiting flat-coordinate radius enters $\varepsilon$. [A1, F1, F2, F3, F4, construct, algebra]

2.1 Each lifted disc is mapped biholomorphically to its base disc because that disc is simply connected; this also follows by lifting its coordinate radial paths and using homotopy invariance of path lifting. A lift of $E_\alpha$ intersects at most one lift of each $E_\beta$, since their base intersection is connected and the first lift maps homeomorphically onto $E_\alpha$. Thus the graph has degree at most $s-1\le J-1$, and any point of $Y$ belongs to at most $s\le J$ lifted discs. Its vertices form a countable set. For each lifted disc $B$ put $m(B)=\int_B|q|$ and $i(B)=m(B)^{-1}\int_Bd$. The mass is positive, since otherwise holomorphicity and connectedness would make $q$ identically zero on $Y$, contrary to its unit norm. By the multiplicity bound and step 1.1, $$\sum_Bm(B)\le J,\qquad\sum_Bm(B)i(B)\le JI.$$ On the lifted flat coordinate the pullback of $\psi$ is $dw^2$ and $p^*\mu=1$, so step 1.2 applies exactly to $q$ on that coordinate disc. All base lenses and their lifts have $|p^*\psi|$ area at least $aA$. [F1, F3, F4, step 1.1, step 1.2, given, construct, algebra]

3.1 Choose $0<\eta<a/2$ so small that $\lambda=(a-\eta)/(a+\eta)$ satisfies $\lambda^{-1}-1<\gamma/2$, and take $\varepsilon>0$ from step 1.2. Call a lifted disc efficient when $i(B)<\varepsilon$. On such a disc $$\int_B|q-(m(B)/A)p^*\psi|<\eta m(B).$$ If efficient discs $B,B'$ are neighbors, integrate the difference of these two constants over their common lens and use the two errors. It gives $a|m(B)-m(B')|\le\eta(m(B)+m(B'))$, so their masses have ratio at least $\lambda$ in both directions. If only $B$ is efficient, its neighbor still has mass at least $(a-\eta)m(B)$, because its mass includes that lens, on which the efficient constant has mass at least $a m(B)$ and its error is at most $\eta m(B)$. These constants depend only on $a,\gamma$ and the local rigidity modulus, not on the geometry or the number of graph components. [step 1.2, step 2.1, given, construct, algebra]

4.1 We supply the weighted expansion calculation for the actual chosen graph $\mathcal B$. Let $V$ be its efficient vertices and $W$ its inefficient vertices. For $w\in W$ set $F(w)=\max\{m(v):v\in V,\ v\sim w\}$, or zero if there are none. For $t>0$ the set $S_t=\{v\in V:m(v)>t\}$ is finite by step 2.1. Its border has at least $\gamma|S_t|$ vertices by the given expansion. Integrate this inequality for $t\in(0,\infty)$, using [F3] on nonnegative indicator sums. A vertex in $W$ contributes at most $F(w)$ to the integrated border. A vertex $v\in V$ can be in that border only for $m(v)\le t<\lambda^{-1}m(v)$, by the neighboring mass ratio in step 3.1. Its contribution is thus at most $(\lambda^{-1}-1)m(v)$. Therefore $$\sum_{w\in W}F(w)\ge\bigl(\gamma-(\lambda^{-1}-1)\bigr)\sum_{v\in V}m(v)\ge\frac\gamma2\sum_{v\in V}m(v).$$ This uses the expansion inequality on all finite subsets of the union, so applies equally to countably many components with the stated common expansion. No connected-graph conclusion or regular-cover hypothesis is being assumed. [F3, step 2.1, step 3.1, given, algebra]

5.1 Every $w\in W$ neighboring $V$ has mass at least $(a-\eta)F(w)$ by step 3.1. Step 4.1 consequently gives $$\sum_{w\in W}m(w)\ge(a-\eta)\frac\gamma2\sum_{v\in V}m(v).$$ Also $i(w)\ge\varepsilon$ on $W$, so step 2.1 gives $\sum_{w\in W}m(w)\le JI/\varepsilon$. Combining the two inequalities proves $$\sum_{B\in\mathcal B}m(B)\le C I,\qquad C=\frac J\varepsilon\left(1+\frac2{(a-\eta)\gamma}\right).$$ The mass of the union is at most the sum of the masses. This proves the stated quantitative estimate, including the case of an empty chosen union. Its constant depends only on $J,a,\gamma$. [step 2.1, step 3.1, step 4.1, algebra]

6.1 Assume now the measurable localization data. A point outside $A_Y$ lies over $F$, since $p^{-1}(X\setminus F)\subset A_Y$. If it also lies over $U$, it belongs to a lifted net disc; that disc must lie in $\mathcal B$, since all other lifted discs were included in $A_Y$. Thus its mass over $U$ is at most $CI$ by step 5.1. The remainder lies over $F\setminus U$, so the local defect bound in step 1.1 gives mass at most $\int_{F\setminus U}|\psi|+I$. Adding proves exactly the displayed localization inequality. No equality of $A_Y$ with a topologically defined amenable part is required or inferred. [step 1.1, step 2.1, step 5.1, given, algebra]

7.1 Finally fix $\delta>0$ in the sequence assertion. For all sufficiently large $n$ the chosen nets have the same bounds $J_\delta,a_\delta,\gamma_\delta$, hence one constant $C_\delta$ by step 5.1. Step 6.1 implies $$\limsup_n\int_{Y_n\setminus A_n}|q_n|\le\limsup_n(C_\delta+1)I_n+\limsup_n\int_{F_n\setminus U_n}|\psi_n|\le\delta.$$ Since $I_n\to0$ and $C_\delta$ is fixed for this $\delta$, the first term vanishes. Let $\delta\downarrow0$ and use nonnegativity. This proves the asserted full mass localization whenever its precise uniform-net inputs are established, with no interchange of a degenerating geometric constant and a norm-defect limit. [step 5.1, step 6.1, given, algebra] ∎

## Actual source reading and missing degeneration interface

The authentic amenability PDF was read through all of Sections 9–12 and the entire Appendix A.1–A.4, from `/tmp/kt72-mcmullen-amenability.txt`, including the complete proof of Theorem 11.1. Its compactness, continuity and completeness imports were identified rather than used as established suppliers. The actual iteration PDF Sections 5–6 were read in full, including the spots, stripes and thin-geodesic pairing argument. These are source reading claims for those exact sections, not for either whole paper. The current full Cauchy, Montel, completed Tonelli/Fubini and measurable change-of-variables proofs were read. The preceding fixed-surface quadratic-pushforward proofs were also read, but no strict operator theorem is needed for this local estimate.

To obtain the original unconditional amenable-mass degeneration alternative, one still needs actual supplied proofs of geometric compactness and transport of the relevant thick flat nets, plus topological identification and common expansion of the nonliftable covering components. The projective quadratic compactness used in the source in turn imports a continuous nonzero reference cyclic Poincare series, bounded-degree meromorphic normalizations, and underlying surface/cover compactness. These are separate current authoring obligations. The present theorem proves the entire quantitative analytic localization step, with its hypotheses explicit; it does not relabel those missing geometric inputs as proved or infer a moduli-uniform contraction from a fixed-surface bound.
