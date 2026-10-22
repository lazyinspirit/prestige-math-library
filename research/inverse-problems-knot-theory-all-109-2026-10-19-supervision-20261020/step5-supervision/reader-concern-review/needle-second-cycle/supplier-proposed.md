---
id: lem-kontsevich-configuration-integral-convergence-needle-estimates
kind: lemma
title: Convergence and needle estimates for Kontsevich integrals
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - def-singular-knot-and-vassiliev-derivative
  - def-framed-chord-diagram-and-four-term-relations
  - lem-kontsevich-configuration-space-compactification-faces
justified_by: []
dependency_level: 5
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §§8.5 and 8.6.2
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: The Fundamental Theorem of Vassiliev Invariants, §2.5.1 and §2.5.3
      url: https://arxiv.org/pdf/q-alg/9702009v1
---

## Statement

Fix either a strict Morse knot presentation $K:S^1\hookrightarrow\mathbb C\times\mathbb R$ or a compact strict Morse tangle $T\subset\mathbb C\times[a,b]$ with distinct regular boundary points, and a degree $m\ge0$. Each degree-$m$ coefficient of the unframed Kontsevich series is an absolutely convergent improper integral after summing its finitely many pairing terms in the 4T+1T quotient.

For a uniform local-cap estimate, consider a family on a fixed compact oriented skeleton, with fixed finite numbers of branches and critical points. Assume its heights have a fixed finite band decomposition: disjoint one-sided Morse bands with coordinates $t=c\pm s^2$, $0\le s\le S_c$, and intervening regular bands of bounded length. The cutoffs $S_c>0$ are fixed. In every Morse band, the two branches meeting at the critical point satisfy $|z_+(s)-z_-(s)|\ge a s$ for a fixed $a>0$, and all branch evaluations have uniformly bounded first derivatives in $s$. In every regular band the branch derivatives in $t$ are uniformly bounded. In either type of band, every equal-height pair other than the designated colliding pair has horizontal separation at least a fixed $d>0$. All bounds, lengths and finite band data are independent of the family parameter. Let $N_\varepsilon$ be a subarc through one critical point, of horizontal diameter at most $\varepsilon$, contained in the two critical branches with $0\le s\le h_\varepsilon\le A\varepsilon$, where $A$ is fixed. Identify diagram spaces by the fixed skeleton. For $m\ge1$, the degree-$m$ contribution $R_m(\varepsilon)$ of all pairings with an endpoint on $N_\varepsilon$ satisfies
$$
\|R_m(\varepsilon)\|\le C_m\varepsilon(1+|\log\varepsilon|)^{m-1}\longrightarrow0\qquad(\varepsilon\downarrow0),
$$
with $C_m$ depending only on the stated uniform controls and the chosen degree-$m$ norm. The degree-zero contribution meeting $N_\varepsilon$ is zero. Short chords outside $N_\varepsilon$ in the same Morse band are included in this estimate. No uniform estimate is asserted from horizontal width and embeddedness of each family member alone.

Separately, the special-critical-movement theorem is used as an external input: if two fixed compact Morse tangles agree outside an interior region $D=\bigcup_{t\in[t_1,t_2]}D_t$, each $D_t$ is a horizontal disk of diameter $\varepsilon$, each tangle has exactly one nondegenerate critical point in $D$, and each $D_t$ meets each tangle in at most two points, then their unframed configuration series agree. This is the precise special-movement conclusion, not a uniform $O(\varepsilon)$ bound for arbitrary cap families.

The following figure illustrates a local maximum. The two branches meet at the critical point; the short chord is isolated if no higher endpoint interrupts the small oriented component arc, while a long chord joins a needle branch to a point outside the needle.

```tikz
\begin{tikzpicture}[scale=0.9,thick]
  \draw[->] (-1.2,0) -- (1.2,0) node[right] {$z$};
  \draw[->] (-1.2,0) -- (-1.2,2.5) node[above] {$t$};
  \draw (-0.7,0.25) .. controls (-0.42,1.35) and (-0.18,1.95) .. (0,2.2);
  \draw (0.7,0.25) .. controls (0.42,1.35) and (0.18,1.95) .. (0,2.2);
  \draw[dashed] (-0.4,1.2) -- (0.4,1.2);
  \draw[dashed] (-0.52,0.75) -- (0.52,0.75);
  \draw[dashed] (-0.95,0.75) -- (-0.52,0.75);
  \fill (0,2.2) circle (1.2pt);
  \node at (0.25,2.28) {$t_c$};
  \node at (0,1.42) {short};
  \node at (-0.72,0.9) {long};
  \node at (0.83,1.2) {$\varepsilon$};
\end{tikzpicture}
```

## Statement references

[[def-kontsevich-integral-on-parenthesized-braids|Improper configuration-integral formula and 1T quotient]]

[[lem-kontsevich-configuration-space-compactification-faces|Morse branches and critical-level boundary coordinates]]

[[def-framed-chord-diagram-and-four-term-relations|Isolated-chord 1T relation]]

[Chmutov, Duzhin, and Mostovoy, §§8.5 and 8.6.2, printed pp. 231–232 and 236–237](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Bar-Natan and Stoimenow, §2.5.1 and §2.5.3, PDF pp. 13–15](https://arxiv.org/pdf/q-alg/9702009v1)

## Facts & Assumptions

**Given:** A strict Morse knot or compact strict Morse tangle with regular boundary points, its degree-$m$ configuration cells, and the unframed 4T+1T chord quotient on its skeleton.

[F1] [[def-kontsevich-integral-on-parenthesized-braids]]: on each branch chamber the integrand is a finite sum of products of logarithmic forms $d\log(z_j-z'_j)$; tangle diagrams use the ordered tangle skeleton and the unframed quotient kills a chord whose endpoints are consecutive on one component.

[F2] [[lem-kontsevich-configuration-space-compactification-faces]]: each critical level has a local coordinate $s\ge0$ with $t_c-t=s^2$ at a maximum, branch evaluations extend smoothly, and all level/collision faces of knots and tangles have finite-dimensional corner coordinates.

[F3] [[def-framed-chord-diagram-and-four-term-relations]]: 1T kills an isolated chord; on a circle its endpoints alternate with another chord exactly when the two chords intersect, and on a tangle arc the same local rule applies to consecutive endpoints.

[F4] **External input — special critical movements.** Chmutov, Duzhin, and Mostovoy, *Introduction to Vassiliev Knot Invariants*, §8.6.2, printed pp. 236–237 (PDF pp. 244–245), Proposition: tangles $T_0,T_1$ identical outside $D=\bigcup_{t\in[t_1,t_2]}D_t$, where the $D_t$ are horizontal disks of diameter $\varepsilon$, each tangle has exactly one nondegenerate critical point in $D$, and each $D_t$ meets each tangle in at most two points, have $Z(T_0)=Z(T_1)$ in the unframed diagram quotient. The boundary data are fixed because the region is interior. This precise special-movement result is imported, not locally reconstructed. Actual reading for this repair: the complete §8.6 proof, printed pp. 233–237, including §8.6.1 and both pages of the opposite-down-sign pairing and subsequent short-chord argument in §8.6.2. It is not a source for a uniform linear estimate on every family satisfying only a width bound.

## Proof

**Given:** A fixed strict Morse knot or compact strict Morse tangle for convergence; for the uniform cap estimate, also all the fixed skeleton, band, derivative, separation and cap-range data in the Statement. Fix a degree $m$ and a norm on its diagram quotient.

1.1 In a Morse band the colliding pair has $|z_+(s)-z_-(s)|\ge a s$, while its derivative is bounded, so its short-chord form is bounded in absolute value by $C\,ds/s$. Every other pair has separation at least $d$ and bounded derivative, so its logarithmic form is bounded by $C\,ds$; in a regular band the bound is $C\,dt$. These constants are uniform under the stated family hypotheses. For a single fixed tangle the same bounds hold with tangle-dependent constants: the Morse expansions are $z_\pm(s)=z_c\pm v s+O(s^2)$ with $v\ne0$, and all other branch pairs have nonzero limiting separation; shrink finitely many disjoint critical bands and use compactness on the remaining regular bands. Minima are treated by reversing height. [given, F1, F2, construct, algebra]

1.2 Discard every pairing diagram killed by 1T before taking absolute values. In a remaining pairing, let $0<\delta_k<\cdots<\delta_1<S$ be all $k\ge1$ short-chord parameters in one whole Morse band, including parameters outside a smaller cap. If no endpoint of another chord lies on the oriented critical arc between the ends of the innermost short chord at $\delta_k$, these ends are consecutive and 1T kills the diagram. Any such intervening endpoint must belong to a long chord in the same band, since no short chord lies closer to the critical point. Thus every surviving pairing has a long witness with parameter $0<r<\delta_k$. Retain that witness factor and drop other ordering constraints only when enlarging a nonnegative absolute majorant. [F1, F3, step 1.1, construct]

2.1 Integrating the retained witness first gives at most $C\delta_k$. The remaining short factors have ordered integral
$$
\int_{0<\delta_k<\cdots<\delta_1<S}\delta_k\prod_{j=1}^k\frac{d\delta_j}{\delta_j}=S.
$$
Indeed, the innermost integration gives $\delta_{k-1}$ and repeating gives $S$. Every additional long factor is integrated once over a bounded interval. Distinct critical bands use distinct level variables, and a witness chord in one band cannot be a witness in another band; their parameter intervals are disjoint. Apply this estimate in each band, and bounded-factor estimates in regular bands. There are finitely many branch chambers and pairing types at degree $m$, and every surviving term is absolutely integrable. The quotient norm is bounded by the sum of these absolute majorants times the norms of the finitely many diagram classes. This proves the fixed-tangle convergence assertion, with uniform bounds when all the family controls hold. [F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 For the cap band put $S=S_c$ and, by enlarging the cap when necessary, use the cutoff $h=A\varepsilon<S$. Define $J_0(h,S)=h$ and, for $k\ge1$,
$$
J_k(h,S):=\int_{0<\delta_k<\cdots<\delta_1<S}\min\{h,\delta_k\}\prod_{j=1}^k\frac{d\delta_j}{\delta_j}.
$$
For $L=\log(S/h)\ge0$, integrating the upper $k-1$ short parameters at fixed $u=\delta_k$ gives
$$
J_k(h,S)=\frac1{(k-1)!}\left(\int_0^h\log(S/u)^{k-1}\,du+h\int_h^S\log(S/u)^{k-1}\frac{du}{u}\right)=h\sum_{j=0}^k\frac{L^j}{j!}.
$$
The last equality follows by integration by parts in the first integral and the substitution $v=\log(S/u)$ in the second; the boundary term at $u=0$ is zero since $u\log(S/u)^j\to0$ for every fixed $j$. The same formula gives $J_0=h$ when the sum has only its $j=0$ term. In particular $J_k(S,S)=S$, consistently with step 2.1. [given, step 2.1, algebra]

3.2 Suppose a selected cap-meeting chord is long and $k\ge1$. If it is the witness retained in step 1.2, its parameter is restricted to $0<r<\min\{h,\delta_k\}$; integrating this one long factor supplies $C\min\{h,\delta_k\}$ and hence the majorant $CJ_k(h,S)$. If it is distinct from the chosen witness, retain both factors: integrate the selected cap long chord over a parameter interval of length at most $h$, and the witness over $(0,\delta_k)$. Dropping their mutual order enlarges the absolute integral and supplies $Ch\delta_k$, so step 2.1 gives the bound $ChS$. This is at most a fixed constant times $J_k(h,S)$, since $J_k(h,S)\ge h$ and $S$ is fixed. Neither long factor has been omitted or used twice. If $k=0$, a cap-meeting long factor directly supplies $Ch=CJ_0(h,S)$. [F1, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

3.3 Suppose instead that a selected cap-meeting chord is short. Some short parameter is at most $h$, hence the innermost one has $\delta_k\le h$. The witness from step 1.2 lies closer to the critical point, so it also lies inside the cap cutoff. Its integration supplies $C\delta_k$, while all upper short parameters still range through the whole band up to $S$. Therefore the ordered bound is
$$
\int_{\substack{0<\delta_k<\cdots<\delta_1<S\\\delta_k\le h}}\delta_k\prod_{j=1}^k\frac{d\delta_j}{\delta_j}=h\sum_{j=0}^{k-1}\frac{\log(S/h)^j}{j!}\le J_k(h,S).
$$
This follows from the first integral in step 3.1. In particular no parameter of an outer short chord has been artificially restricted to $h$. [F1, step 1.2, step 3.1, algebra]

4.1 The event that a pairing meets $N_\varepsilon$ is covered by the finite union over its at most $m$ selected chords and the long/short cases in steps 3.2–3.3. Keep the associated cap and witness factors in that band; in every other critical band keep its separate witness as in step 2.1. Integrating all remaining bounded factors once and summing over the finitely many diagrams gives $C_mJ_k(A\varepsilon,S)$ for some $k\le m-1$, or $C_m\varepsilon$ in the case of distinct retained long factors. The inequality $k\le m-1$ holds because any surviving short-chord contribution has at least one long witness. Formula 3.1 gives the stated $C_m\varepsilon(1+|\log\varepsilon|)^{m-1}$ bound. For fixed $m$ it tends to zero, since with $x=-\log\varepsilon$ it is bounded by a constant times $e^{-x}(1+x)^{m-1}$. If $m=0$, there is no chord endpoint and the cap-meeting contribution is exactly zero. [F1, F2, F3, step 2.1, step 3.1, step 3.2, step 3.3, algebra]

5.1 The final special-critical-movement assertion is exactly the separately labelled external input [F4] under its stated disk-region and single-critical-point hypotheses. It makes no assertion that individual pairing integrals, or arbitrary degenerating families, obey a uniform linear bound. The local convergence and controlled-cap estimates above were established independently. [given, F4, step 2.1, step 4.1] ∎
