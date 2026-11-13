---
id: lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly
kind: lemma
domain: mathematics
title: Canonical higher traces on a bounded boundary or compact interior hypersurface
status: published
deps:
  - math:def-axiom-of-choice
  - lem-se-sobolev-extension-retraction
  - lem-se-author-8d28f6f38ee5-localized-chart-operators
  - lem-se-author-8d28f6f38ee5-hypersurface-atlas-and-derivatives
  - lem-se-author-8d28f6f38ee5-flat-fourier-trace
  - math:thm-sharp-trace-theorem-for-w-one-p
  - math:lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts
  - math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - math:def-bounded-c-k-domain-and-boundary-charts
  - math:lem-finite-ambient-partitions-for-euclidean-boundary-integration
  - math:lem-smooth-euclidean-hypersurface-graph-and-localization
  - math:thm-euclidean-tubular-neighbourhood-theorem
  - math:def-normal-addition-map-for-a-euclidean-submanifold
  - math:thm-heine-borel-rn
  - math:def-nitsche-restriction-bessel-potential-sobolev-spaces
  - math:def-embedded-submanifold-and-slice-chart
  - math:def-codimension-and-hypersurface
  - math:lem-slice-chart-restrictions-form-a-smooth-atlas
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-se-sobolev-extension-retraction: mathematical-premise
  lem-se-author-8d28f6f38ee5-localized-chart-operators: mathematical-premise
  lem-se-author-8d28f6f38ee5-hypersurface-atlas-and-derivatives: mathematical-premise
  lem-se-author-8d28f6f38ee5-flat-fourier-trace: mathematical-premise
  math:thm-sharp-trace-theorem-for-w-one-p: mathematical-premise
  math:lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts: mathematical-premise
  math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces: mathematical-premise
  math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  math:def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  math:lem-finite-ambient-partitions-for-euclidean-boundary-integration: mathematical-premise
  math:lem-smooth-euclidean-hypersurface-graph-and-localization: mathematical-premise
  math:thm-euclidean-tubular-neighbourhood-theorem: mathematical-premise
  math:def-normal-addition-map-for-a-euclidean-submanifold: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
  math:def-nitsche-restriction-bessel-potential-sobolev-spaces: mathematical-premise
  math:def-embedded-submanifold-and-slice-chart: mathematical-premise
  math:def-codimension-and-hypersurface: mathematical-premise
  math:lem-slice-chart-restrictions-form-a-smooth-atlas: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
formulation_deps:
  - math:def-axiom-of-choice
  - lem-se-sobolev-extension-retraction
  - lem-se-author-8d28f6f38ee5-hypersurface-atlas-and-derivatives
  - math:thm-sharp-trace-theorem-for-w-one-p
  - math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - math:def-bounded-c-k-domain-and-boundary-charts
  - math:def-nitsche-restriction-bessel-potential-sobolev-spaces
  - math:def-embedded-submanifold-and-slice-chart
  - math:def-codimension-and-hypersurface
  - math:lem-slice-chart-restrictions-form-a-smooth-atlas
argument_deps:
  - math:def-axiom-of-choice
  - lem-se-sobolev-extension-retraction
  - lem-se-author-8d28f6f38ee5-localized-chart-operators
  - lem-se-author-8d28f6f38ee5-hypersurface-atlas-and-derivatives
  - lem-se-author-8d28f6f38ee5-flat-fourier-trace
  - math:thm-sharp-trace-theorem-for-w-one-p
  - math:lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts
  - math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - math:def-bounded-c-k-domain-and-boundary-charts
  - math:lem-finite-ambient-partitions-for-euclidean-boundary-integration
  - math:lem-smooth-euclidean-hypersurface-graph-and-localization
  - math:thm-euclidean-tubular-neighbourhood-theorem
  - math:def-normal-addition-map-for-a-euclidean-submanifold
  - math:thm-heine-borel-rn
  - math:def-nitsche-restriction-bessel-potential-sobolev-spaces
  - math:def-embedded-submanifold-and-slice-chart
  - math:def-codimension-and-hypersurface
  - math:lem-slice-chart-restrictions-form-a-smooth-atlas
proof_strategy: direct
dependency_level: 10
---

## Statement

Assume AC. Let $G\subset\mathbb R^n$, $n\ge2$, be smooth bounded, let $S$ be a smooth boundary component, and let $1\le s\le2$. There is a bounded linear trace $\gamma_S:H^s(G)\to H^{s-1/2}(S)$, with the restriction-quotient domain norm and finite-atlas boundary norm. It agrees as an $L^2(S)$ function with the existing first-order Sobolev trace and is independent of the chosen whole-space extension and charts. Smooth cutoffs commute with it and it is local near $S$.

For the interior assertion, let $U\subset\mathbb R^n$ be open and let $S\subset U$ be a compact smooth embedded hypersurface without boundary, with the induced smooth structure. Use the same whole-space Bessel-potential convention and define
$$H^s(U)=\{F|_U:F\in H^s(\mathbb R^n)\},\qquad \|u\|_{H^s(U)}=\inf_{F|_U=u}\|F\|_{H^s(\mathbb R^n)}.$$
There is a bounded linear trace $\gamma_{S,U}:H^s(U)\to H^{s-1/2}(S)$. For nonempty $S$ one can choose a bounded smooth open neighborhood $D$ with $S\subset D$ and $\overline D\subset U$, restrict $u$ to $D$, and assemble this trace there. Restriction satisfies $\|u|_D\|_{H^s(D)}\le\|u\|_{H^s(U)}$. The resulting trace agrees with smooth restriction and is independent of the chosen neighborhood, whole-space extension, charts and local side; it commutes with smooth cutoffs and is local near $S$. For empty $S$ the trace is the zero map. The constants may depend on the fixed neighborhood, its finite atlas and $s$; no uniform assertion for uncontrolled noncompact geometry is made.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; in particular its countable and dependent instances are available.

[F2] [[lem-se-sobolev-extension-retraction]] gives one bounded $E_G:H^s(G)\to H^s(\mathbb R^n)$ for every $0\le s\le2$, agreeing with the input on $G$.

[F3] [[lem-se-author-8d28f6f38ee5-localized-chart-operators]] bounds localized pullbacks on the ambient $H^s$ scale, and [[lem-se-author-8d28f6f38ee5-hypersurface-atlas-and-derivatives]] gives complete atlas-independent $H^{s-1/2}(S)$ norms and their continuous inclusion into surface $L^2$.

[F4] [[lem-se-author-8d28f6f38ee5-flat-fourier-trace]] gives the bounded flat trace and shows its $L^2$ value vanishes when the input is zero on a one-sided neighborhood after localization.

[F5] [[math:thm-sharp-trace-theorem-for-w-one-p]] supplies the bounded $H^1(G)$ trace whose target norm contains $L^2(S)$, and [[math:lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts]] supplies its agreement with classical smooth restrictions, chart transport, cutoff commutation and locality. No identification of its Slobodeckij target with a Bessel target is assumed.

[F6] [[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]] defines whole-space $H^s$ as a completion with dense Schwartz core, and [[math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] gives convergence of these approximants in the weak-derivative $W^{1,2}$ norm when $s\ge1$.

[F7] [[math:def-bounded-c-k-domain-and-boundary-charts|Bounded $C^k$ domains and boundary charts]] specifies the one-sided smooth graph charts used for $G$ (with smooth graph functions), without requiring connectedness. [[math:lem-smooth-euclidean-hypersurface-graph-and-localization]] supplies smooth graph charts and local smooth unit normals for embedded hypersurfaces. [[math:thm-heine-borel-rn]] identifies closed bounded Euclidean sets as compact. [[math:lem-finite-ambient-partitions-for-euclidean-boundary-integration]] supplies nonnegative ambient smooth cutoffs compactly supported in a finite open cover of a compact set, with sum one near that set.

[F8] Under countable choice, [[math:thm-euclidean-tubular-neighbourhood-theorem]] gives a positive smooth radius $\delta$ on an embedded smooth $S$ for which $E(p,v)=p+v$ is a diffeomorphism from $\{(p,v)\in N^\perp S:|v|<\delta(p)\}$ onto an open neighborhood of $S$. Here [[math:def-normal-addition-map-for-a-euclidean-submanifold]] defines $N^\perp S=\{(p,v):p\in S,\ v\perp T_pS\}$ with its smooth normal-bundle structure and the map $E$. AC in F1 supplies the countable-choice hypothesis.

[F9] [[math:def-nitsche-restriction-bessel-potential-sobolev-spaces]] defines the restriction space and quotient norm for every nonempty open Euclidean set and every nonnegative order, using the canonical $L^2$ realization of the Bessel-potential completion. Its countable-choice assumption follows from F1. We use this convention for the arbitrary open region $U$ as well as for $D$; if $U$ is empty, its restriction space contains only zero.

[F10] [[math:def-embedded-submanifold-and-slice-chart]] defines embedded submanifolds by ambient slice charts and the subspace topology; [[math:def-codimension-and-hypersurface]] defines a hypersurface as an embedded submanifold of codimension one. [[math:lem-slice-chart-restrictions-form-a-smooth-atlas]] supplies the smooth atlas on $S$ obtained by restricting slice charts, with its subspace topology; this is the induced smooth structure used here.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement with the stated spaces and bounds.

1.1 The boundary $\partial G$ is closed and bounded, hence compact. Its component $S$ is closed in $\partial G$ and therefore compact; the smooth boundary charts make it an embedded hypersurface without boundary. Choose finitely many ambient flattening patches covering $S$. F7 supplies ambient $\chi_i$ compactly supported in those patches with $\sum_i\chi_i=1$ near $S$. Shrink or refine the patches so their surface coordinates and the restrictions of $\chi_i$ give a finite atlas and subordinate partition. For any $F\in H^s(\mathbb R^n)$, pull each $\chi_iF$ back to the flattened coordinates and extend by zero only past the artificial chart edges. F3 bounds this whole-space $H^s$ operation; F4 bounds its flat trace in $H^{s-1/2}(\mathbb R^{n-1})$. Approximate $F$ by Schwartz $F_j$ in $H^s$. Their ordinary surface restrictions have these localized coordinate traces and are Cauchy in the complete finite-atlas norm from F3. Their limit defines a bounded linear map $T_S:H^s(\mathbb R^n)\to H^{s-1/2}(S)$ agreeing with smooth restriction. The same construction works for any compact smooth embedded hypersurface without boundary: use the graph charts in F7 in place of the boundary charts. In both cases $\|T_SF\|_{H^{s-1/2}(S)}\le C\|F\|_{H^s(\mathbb R^n)}$. [F3, F4, F6, F7, F10, given]

1.2 For nonempty compact interior $S\subset U$, apply F8. Compactness and positivity of $\delta$ give a uniform $\varepsilon>0$ with $2\varepsilon<\delta(p)$ for every $p\in S$; shrink $\varepsilon$ so that $p+v\in U$ whenever $p\in S$ and $|v|\le2\varepsilon$. The latter follows by covering $S$ by finitely many balls $B(p_j,r_j)$ with $B(p_j,2r_j)\subset U$ and taking $2\varepsilon<\min_j r_j$. Put $K_\varepsilon=\{(p,v)\in N^\perp S:|v|\le\varepsilon\}$ and $D=E(\{|v|<\varepsilon\})$. The set $K_\varepsilon$ is closed and bounded in $\mathbb R^{2n}$: $S$ is compact, and normality is a closed condition in local smooth tangent frames. It is compact by F7. The tube diffeomorphism makes $D$ open, with $\overline D=E(K_\varepsilon)\subset U$ compact and $\partial D=E(\{|v|=\varepsilon\})$. On each graph patch of $S$, a local smooth unit normal $\nu$ gives tube coordinates $(y,t)\mapsto p(y)+t\nu(p(y))$, in which $D$ is $|t|<\varepsilon$ and its boundary is $t=\pm\varepsilon$. Thus the boundary is smoothly embedded and $D$ occupies exactly one side locally. F7 converts these local slices to the one-sided graph convention, so $D$ is a bounded smooth domain of the type required by F2. This construction uses only local normals, not a global choice of side. Compactness supplies the first uniform radius by taking a finite subcover of sets where $\delta$ has a positive lower bound. [F1, F2, F7, F8, F10, given]

2.1 For $u\in H^s(G)$ define $\gamma_Su=T_S(E_Gu)$ using F2. If two whole-space extensions of $u$ are used, their difference vanishes on $G$. In each localized boundary chart the pulled-back difference is zero on the corresponding half-space: inside the chart this is the one-sided domain condition, and outside the chart it is zero by its compact support margin. F4, from either sign of the normal coordinate, makes its flat trace zero in $L^2$. Thus all localized traces agree, proving extension independence and $\|\gamma_Su\|_{H^{s-1/2}(S)}\le C\|u\|_{H^s(G)}$. The same argument applies to extensions agreeing on just a one-sided neighborhood of a boundary patch after further localization. [F2, F3, F4, F7, step 1.1]

2.2 In the stated quotient convention, every whole-space extension $F$ of $u\in H^s(U)$ also extends $u|_D$. Hence $\|u|_D\|_{H^s(D)}\le\|F\|_{H^s}$ for every such $F$, and taking their infimum gives the asserted contractive restriction. The quotient expression is a norm: it controls $\|u\|_{L^2(U)}$ by the nonnegative Fourier weight, is homogeneous, and satisfies the triangle inequality by adding extensions with norms arbitrarily close to their infima. Its kernel consists precisely of zero restrictions. Define $\gamma_{S,U}u=T_S(E_D(u|_D))$ using F2 on the fixed $D$ from step 1.2 and the interior version of $T_S$ in step 1.1. Both operators are linear and bounded, so $\|\gamma_{S,U}u\|_{H^{s-1/2}(S)}\le C_{S,D,s}\|u\|_{H^s(U)}$. [F2, F3, F6, F9, step 1.1, step 1.2, algebra]

3.1 Choose the Schwartz approximants to $E_Gu$ used above. Since $s\ge1$, their $H^s$ convergence implies $H^1$ convergence by the Fourier weights; F6 converts this to norm convergence of the functions and their first weak derivatives. Restriction to $G$ preserves that convergence, as follows directly by testing weak derivatives with compactly supported tests in $G$ and bounding their $L^2(G)$ norms by the ambient norms. The published first-order trace in F5 therefore converges in $L^2(S)$ to its trace of $u$. On these smooth approximants it agrees with the classical restriction, whose new traces converge in $H^{s-1/2}(S)$ and hence in $L^2(S)$ by F3. Uniqueness of the $L^2$ limit proves the claimed agreement without identifying a Slobodeckij norm with a Bessel norm. [F2, F3, F5, F6, step 1.1, step 2.1]

4.1 The atlas lemma makes the boundary target independent of charts up to equivalent norms. Two choices of charts give bounded trace maps agreeing on ambient smooth restrictions; the same Schwartz approximation proves that their $L^2$ values agree. For a fixed ambient smooth cutoff, the identity between the trace of its product and the product of its surface value with the trace holds on smooth functions and passes to the limit using the ambient and surface multiplier bounds in F3. If data agree on a neighborhood of $S$, localizing their difference in the patches of step 1.1 makes every flat trace zero by F4. This proves cutoff commutation and locality, consistently with the first-order interface in F5. [F3, F4, F5, F6, step 1.1, step 2.1, step 3.1]

5.1 For any whole-space $F$ with $F|_U=u$, the difference $E_D(u|_D)-F$ is zero on the neighborhood $D$ of $S$. The local flat uniqueness in F4, applied chartwise as in step 4.1, gives $\gamma_{S,U}u=T_SF$. This identity proves independence of $D$ and of extensions, including a change of neighborhood, since all such constructions give $T_SF$. Atlas independence, agreement with classical smooth restriction, locality, and cutoff commutation follow from the same ambient construction and step 4.1; on a local side where a first-order boundary trace is defined, step 3.1 identifies its $L^2$ value with this trace. The two flat one-sided traces also agree because F4 makes both restrictions of the same whole-space trace. If $S$ is empty the zero map has all asserted properties. All bounds use fixed compact charts and, for the collar construction, fixed $D$; thus the stated dependence of constants and the absence of a noncompact uniformity claim are preserved. [F2, F3, F4, F5, F6, step 1.1, step 3.1, step 4.1, step 2.2] ∎
