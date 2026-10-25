---
id: lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars
kind: lemma
title: "Compact controlled Whitney spaces admit commuting radial collars"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-axiom-of-choice,
       lem-whitney-stratifications-admit-compatible-control-data,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-smooth-dependence-of-ode-solutions-on-parameters,
       thm-smooth-partitions-of-unity-exist-on-manifolds]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. M. Goresky, Triangulation of stratified objects, Proc. AMS 72 (1978), 193-200"
      url: "https://www.math.ias.edu/~goresky/pdf/triangulations.pdf"
      locator: "section 2, printed pp. 193-195 (radial collar construction); bibliographic identity verified, available copy is an image scan without text layer"
    - title: "John Mather, Notes on Topological Stability (1970)"
      url: "https://doi.org/10.1090/S0273-0979-2012-01383-6"
      locator: "Sections 6-10 (tube control and radial transport)"
---

## Statement

Assume AC. Let $W$ be a compact finite smooth Whitney-stratified subset of a
smooth Euclidean ambient space, with the frontier condition. After shrinking
compatible tube data and smoothly rescaling their squared radii by positive
functions of their base projections, there are normalized tubes
$T_X=\{\rho_X<1\}$ and stratum-preserving radial projections
$R_X(s):T_X\setminus X\to\{\rho_X=s\}$ for $0<s<1$. On every incident overlap
$Y<X$ they satisfy
$$R_X(s)R_Y(t)=R_Y(t)R_X(s),\qquad \rho_YR_X(s)=\rho_Y,\qquad \rho_XR_Y(t)=\rho_X,$$
whenever the source and target points lie in the indicated retained tubes. They
also satisfy $\pi_XR_X(s)=\pi_X$, $R_X(s)R_X(t)=R_X(s)$, and
$\pi_ZR_X(s)=R_X(s)|_Z\pi_Z$ for $X<Z$ on overlaps. They are continuous on their
stratified domains and smooth on individual strata. For a fixed reference
$a\in(0,1)$, $(R_X(a),\rho_X)$ identifies the punctured tube with
$S_X(a)\times(0,1)$, where $S_X(a)=W\cap\{\rho_X=a\}$; adjoining $X$ identifies
it with the corresponding open mapping cylinder of $\pi_X:S_X(a)\to X$. This is
a controlled topological collar; no semialgebraicity of the resulting flows is
asserted.

## Facts & Assumptions

**Given:** AC, a compact Whitney-stratified subset $W$ of a Euclidean space with finitely many strata and the frontier condition.

[F1] Compatible tube control data exist, with squared bundle radii, chain overlaps and local properness over compact base slices ([[lem-whitney-stratifications-admit-compatible-control-data]]). The additional size bounds used below are imposed in step 1.1.

[F2] Smooth partitions of unity and smooth local ODE solution maps with parameters exist; countable choice is supplied by AC ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[A1] AC supplies the choices of smooth partitions and the inherited tube hypotheses ([[def-axiom-of-choice]]); no further choice is used.

## Proof

**Proof technique:** direct.

1.1 Retain the tube embeddings $E_X(x,v)$ of [F1]. Since $E_X(x,0)=x$, continuity gives a locally positive fiber-radius bound on which $\|E_X(x,v)-x\|<1$ and, when $\partial X=\overline X\setminus X$ is nonempty, $\|E_X(x,v)-x\|<\operatorname{dist}(x,\partial X)/3$; the latter distance is positive on the locally closed $X$. By [F2] choose a smooth positive $b_X(x)$ below these bounds and below half the original tube radius, and restrict to $\|v\|<b_X(x)$. Replace $\rho_X$ by $\|v\|^2/b_X(\pi_X)^2$, normalizing this outer tube to $\rho_X<1$. The old identities survive: $\pi_Y\pi_X=\pi_Y$ shows that the numerator and the base factor of the new $\rho_Y$ are preserved by $\pi_X$; thus membership in the restricted $Y$-tube is preserved too, and submersivity survives the target coordinate change $(x,r)\mapsto(x,r/b_X(x)^2)$. Local properness survives over compact base slices, where $b_X$ has positive minimum and finite maximum. Use middle bands $\rho_X\le1/2$ and inner bands $\rho_X<1/4$. To check their relative closures in a higher stratum $Z$, take band points $p_j\to p\in Z$. Their bases $x_j$ are bounded by the displacement cap, so a subsequence converges in compact $\overline X$. A frontier base limit would force $p_j-x_j\to0$, putting $p$ in a stratum below $X$, contrary to $Z>X$. A base limit in $X$ gives a convergent normal-parameter subsequence with $\|v\|^2/b_X(x)^2\le1/2$, hence a limit inside the outer tube. Thus the bands have relative closure there, and shrinking preserves disjointness of incomparable tubes. [F1, F2, A1, construct, algebra]

2.1 Fix $X$. On $W\cap T_X\setminus X$ the map $g_X=(\pi_X,\rho_X)$ is submersive on each stratum. Construct a field lifting the target field $(0,r)$ in increasing dimension of incident strata: on a minimal stratum use a smooth right inverse of $dg_X$ given by the adjoint minimum-norm matrix inverse; on a higher stratum inside a lower incident $Z$-tube lift $(V_Z\pi_Z,0)$ through $(d\pi_Z,d\rho_Z)$, which also lifts $(0,r)$ because $g_X\pi_Z=g_X$. The active middle-band controllers at any point form a chain by [F1], and the maximal one implies all lower constraints by differentiating the control factorizations. Patches avoiding inactive closed middle bands and lying inside the active outer domains, combined with a smooth subordinate partition (whose derivatives do not enter, since the equations in the field are linear), give a smooth field $V_X$ with $dg_XV_X=(0,\rho_X)$ and with $d\pi_ZV_X=V_Z\pi_Z$, $d\rho_ZV_X=0$ in every inner $Z$-band. Doing this for the finitely many $X$ with the same constant bands, then retaining only inner tubes and multiplying all radii by four, restores $\rho_Z<1$ on every retained tube by a constant rescaling that preserves all equations. For $Y<X$ the field also preserves $\pi_Y$ and $\rho_Y$ wherever defined, because both factor through $\pi_X$ and $d\pi_XV_X=0$. [F1, step 1.1, construct, algebra]

3.1 Establish compact trapping for these fields, without assuming ambient boundedness on open strata, by induction on stratum dimension. Near a point $q$ of a lower stratum $Z$ choose a compact base slice $C\subseteq Z$ containing its trajectory for a common short time, and a closed small radius band whose inverse image $K$ is compact and lies inside the retained tube. For initial upper points close enough to $q$ the projected trajectory follows the smooth $Z$-flow and its radius stays constant, so while the upper ODE exists it remains in the interior of $K$: a first exit would have a compact limit with base in the interior of $C$ and radius strictly below the outer boundary, a contradiction. If an upper trajectory had a finite maximal endpoint within the common interval, compactness gives a cluster point; a cluster point in its own stratum allows ordinary ODE extension because the smooth field is bounded on a relatively compact coordinate ball and a sufficiently late visit cannot leave during the remaining short time, making the path Cauchy; a cluster point $q'$ in a lower stratum $Z'$ admits the same base-flow trap on a short interval covering the remaining time, and a sufficiently late visit to that trap cannot leave it, with $\rho_{Z'}$ a fixed positive value on the terminal segment, contradicting that the visits converge to $q'$ and force that value to zero; only incident lower strata can be cluster strata by the frontier condition. This gives a common short flow interval near each lower point, and the same argument backward gives inverse flows. Joint continuity follows from the compact tube slice estimate that the distance to the projection tends uniformly to zero as the radius tends to zero together with continuity of the projected lower flow, so incident-stratum sequences approaching a lower initial point have the correct flow limit; finite stratification and time subdivision complete the induction. [F1, F2, step 2.1, construct]

4.1 Obtain the initial radial family by flowing the field $V_X$ for time $\log(s/\rho_X(p))$, since $\dot\rho_X=\rho_X$ and $\dot\pi_X=0$; this time is finite (negative, zero or positive) for positive source and target levels inside the retained domain, and existence over the fixed base $\pi_X(p)$ with radii in a closed positive interval follows because the full inverse image in compact $W$ is compact in normal-bundle coordinates, so step 3.1's endpoint argument applies. Ordinary uniqueness gives the semigroup identity and inverse transport between levels; the control equations give preservation of every other incident radius and projection, and of the higher-projection equivariance. A trajectory starting in a retained higher tube cannot leave it during a finite radial transport, because its normalized radius there is constant and a first exit is excluded by local properness over the compact projected trajectory; the same holds for transport in a lower tube across a higher tube. Consequently all transports used below stay in their actual normalized tube domains, which is the purpose of step 1.1's normalization. [F1, F2, step 2.1, step 3.1, algebra]

5.1 Construct the final families in increasing dimension of $X$. Suppose the lower families are fixed and modify the current $X$-family by a decreasing induction on $Y<X$. For the currently processed $Y$ retain a small outer $Y$-band $0<\rho_Y<c$ lying inside all previously needed $Y$-commutation domains, possible with a positive constant by the finitely many earlier corrections, and put $a=c/2$. Writing $F^Y_{u\to v}$ for transport along the fixed $Y$-family between radius levels, choose a smooth $\phi$ with $\phi(t)=a$ for $t\le a$, $\phi(t)=t$ for $t\ge2c/3$, and $a\le\phi(t)<c$ for $0<t<c$. For a point $p$ with $t=\rho_Y(p)<c$ replace the current $X$-family by $\widetilde R_X(s)(p)=F^Y_{\phi(t)\to t}R_X(s)F^Y_{t\to\phi(t)}(p)$; all terms are defined by step 4.1, the intermediate $X$-operation preserves the $Y$-radius, the modification is conjugation on each fixed $Y$-slice and equals the old family near the outer boundary where $\phi(t)=t$, so it patches continuously and stratumwise smoothly with the old family outside the $Y$-band. [F2, step 3.1, step 4.1, construct]

6.1 The correction preserves the $X$-semigroup law because both $X$-operations preserve $t$ and the middle $Y$-transports cancel; it preserves $\rho_X\widetilde R_X(s)=s$ because the $Y$-transports preserve $\rho_X$; it preserves $\pi_X$ because higher-projection equivariance of the $Y$-transports moves the $X$-base forward and back around an $X$-operation that fixes its base. For any other incident radius $\rho_Z$ each $Y$-transport preserves it and the middle $X$-operation preserves it, while for $Z=Y$ the two transports cancel its change. Lower-projection preservation and higher-projection equivariance survive by the same composition calculation: a $Y$-transport that moves such a projection has its equivariance move it forward and back around an $X$-operation fixing it, or produces the identical corrected operation on the projected higher stratum. Hence all domain statements and actual controls of step 4.1 remain true after the correction. [step 4.1, step 5.1, algebra]

7.1 For $t<a$ the correction transports to the common reference level $a$, performs the same $X$-operation there and transports back, so in $Y$-coordinates $(q,t)=(R_Y(a)p,\rho_Y(p))$ it has the form $(q,t)\mapsto(A_s(q),t)$ independent of $t$; it therefore commutes with every $Y$-transport whose source and target lie in this inner band. Shrink the final $Y$-commutation domain to $t<a$ (retaining the outer maps for the next correction, and rescaling by the constant $a$ if desired). For a previously treated $Z$ with $Y<Z<X$ the $Z$-family commutes with the $Y$-transports by the fixed lower-family construction, preserves $t$, and commutes with the current $X$-family by the inner induction, so moving it through the three factors of step 5.1 shows it commutes with the corrected $X$-family. Incomparable strata have disjoint tubes and equal-dimensional strata are incomparable, so all previously imposed commutations survive; the finite nested induction terminates with every incident pair commuting, and all further rescalings are by constants that preserve radius equalities and controls. [step 5.1, step 6.1, algebra]

8.1 Fix a retained normalized reference $a$. The inverse of $p\mapsto(R_X(a)p,\rho_X(p))$ is $(q,t)\mapsto R_X(t)q$, by the semigroup law and the invertible level transport of step 4.1; both maps are continuous and smooth on each incident stratum. Adjoining the zero end by $(q,0)\mapsto\pi_X(q)$ is continuous: locally on compact base slices the parameter-vector norm is $b_X(\pi_X(p))\sqrt{\rho_X(p)}$, the smooth tube embedding has bounded fibre derivative on a smaller compact parameter slice, so the physical displacement is at most a fixed constant times this norm, and transport to radius zero converges uniformly to the base projection; the same estimate gives inverse continuity at the adjoined stratum, and compactness of each closed link fibre supplies the uniform quotient neighbourhoods. This yields the claimed open mapping-cylinder model and completes all assertions. [F1, step 4.1, step 6.1, step 7.1] ∎

## Remarks

- The construction is a controlled topological collar: the radial projections are continuous on their stratified domains and smooth on individual strata, but no semialgebraicity of the flows is asserted, and the collar is not claimed to be a smooth or PL trivialization of the whole stratified space.
