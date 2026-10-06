---
id: lem-arith-finite-permissible-smoothening
kind: lemma
title: "Defect decrease and finite smoothening"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-dilatations-and-defect-of-smoothness
  - lem-generic-freeness-finite-type-algebra-module
  - thm-ag-separating-transcendence-basis-perfect-field
  - thm-ag-field-differentials-separable-rank
  - lem-ag-geometric-regularity-field-tests
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 3.3/5 and 3.4/1-2 (finite permissible smoothening)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, and let $R^{\mathrm{sh}}$ be a strict henselization.

(a) If $Y\subseteq X_k$ is a centre whose $k^s$-points that lift to $R^{\mathrm{sh}}$-sections of $X$ are schematically dense in $Y$, and $U\subseteq Y$ is a smooth open subscheme on which $\Omega_{X/R}$ is locally free, then the $\pi$-dilatation of $X$ along $Y$ lowers the positive defect by at least one for every section specializing in $U$.

(b) For $X$ separated, flat and of finite type over an arbitrary discrete valuation ring with smooth generic fibre, there is a finite sequence of blowups in special-fibre centres, proper and generically isomorphisms, whose smooth locus contains the image of every $R^{\mathrm{sh}}$-section of $X$.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with uniformizer $\pi$, fraction field $K$, residue field $k$, a strict henselization $R^{\mathrm{sh}}$, a separated flat finite-type $R$-scheme $X$ with smooth generic fibre, and a closed centre $Y\subseteq X_k$ with schematically dense liftable $k^s$-points.

[F1] Dilatation charts and the defect computation are [[lem-arith-dilatations-and-defect-of-smoothness]]: the $\pi$-chart is flat with its universal property, and the defect $\delta(a)$ is the torsion length of $a^*\Omega_{X/R}$, computed by Jacobian-minor valuations and bounded uniformly on $X(R^{\mathrm{sh}})$.

[F2] A finitely generated algebra over a field which is injective into a product of copies of the separable closure after evaluation is geometrically reduced, and the smooth locus of a reduced finite-type scheme over a perfect field is dense; separatedness and differential rank control the descent of smoothness through field extensions ([[thm-ag-separating-transcendence-basis-perfect-field]], [[thm-ag-field-differentials-separable-rank]], [[lem-ag-geometric-regularity-field-tests]]).

[F3] A coherent sheaf on a reduced finite-type scheme is free on a dense open of every component ([[lem-generic-freeness-finite-type-algebra-module]]).

## Proof

**Proof technique:** direct: reduce the centre to a geometrically reduced dense-smooth object, then run the defect induction on finitely many strata.

1.1 Let $Y$ have schematically dense $k^s$-points. On an affine chart with coordinate ring $B$, evaluation at the $k^s$-points embeds $B$ into a product of copies of $k^s$; tensoring with any field extension $l/k$, every relation involves finitely many coefficients, so the embedding remains injective, and $k^s\otimes_kl$ is reduced because $k^s$ is separable algebraic over $k$. Hence $B\otimes_kl$ is reduced and $Y$ is geometrically reduced. Extending to a perfect closure, the function field of each component is separably generated and the differential rank equals the transcendence degree, so the relative Jacobian criterion produces a smooth neighbourhood of every generic point; smoothness descends through field extensions by [F2]. Therefore the smooth locus of $Y$ is dense and open, and the restriction of $\Omega_{X/R}$ to it is free on a dense open by [F3]. [F2, F3, given, algebra]

2.1 Shrink around a specialization in $U$, so $Y=U$ is smooth of dimension $r$ and $\Omega_{X/R}|_Y$ is free of rank $r+n$. Choose lifts $y_1,\dots,y_r,z_1,\dots,z_n$ whose differentials give its basis, with $z_j$ vanishing on $Y$ and the $dy_i$ mapping to a basis of $\Omega_{Y/k}$. Embed $X$ into affine space with these as initial coordinates. Independent rows of the remaining relation differentials cut out a smooth ambient $Z$ of dimension $r+n$ containing $X$, with these differentials as a basis. Locally $Y\subset Z$ has ideal $J=(\pi,z_1,\dots,z_n)$: its displayed equations define a smooth subscheme of dimension $r$ containing $Y$, hence agree with $Y$ locally. Put $X=\operatorname{Spec}(C/I)$ and $Z=\operatorname{Spec}C$. For $f\in I\subset J$ write $f=\pi g+\sum z_jg_j$. Since the map $\Omega_{Z/R}|_Y\to\Omega_{X/R}|_Y$ identifies the chosen bases, $df|_Y=0$, so every $g_j\in J$. Thus $f=\pi g+h$ with $h\in J^2$. On every liftable section through $Y$, $f(a)=0$ and $h(a)\in\pi^2R^{\mathrm{sh}}$; hence $g(a)\in\pi R^{\mathrm{sh}}$. Schematic density of those specializations gives $g\in J$. Therefore $I\subseteq J^2$. [F1, step 1.1, algebra]

3.1 In the dilatation of $Z$ write $z_j=\pi z'_j$. Since $I\subset J^2$, each relation $f$ becomes $\pi^2f'$ with $f'$ in the saturated ideal of the dilatation of $X$. Along a lifted section, the Jacobian rows for $f'$ have $y$-entries $\pi^{-2}\partial f/\partial y_i$ and $z'$-entries $\pi^{-1}\partial f/\partial z_j$. Choose a maximal-rank minor realizing the old defect in [F1], of size $q=r+n-d$, where $d$ is the generic relative dimension at the section. The corresponding minor of the divided equations is multiplied by $\pi^{-2a-b}$, with $a+b=q$ according to its selected coordinate columns. The new defining ideal may have additional generators, so its minimum minor valuation is at most this value: $\delta(a')\le\delta(a)-q$. If $q=0$, the generic closed immersion $X\subset Z$ agrees near the generic section by smoothness and equal dimension; the ideal vanishes locally at the specialization by flatness and schematic density, so the original section is already smooth. Thus positive defect implies $q\ge1$, proving (a). [F1, step 2.1, algebra]

4.1 For a set $E$ of nonsmooth $R^{\mathrm{sh}}$-sections, let $Y_1$ be the reduced closure of their specializations. It satisfies the liftable density condition by construction. Let $U_1$ be its dense smooth open where $\Omega_{X/R}|_{Y_1}$ is locally free, and let $E_1$ be the sections specializing there. Repeat with $E\setminus E_1$, obtaining $Y_2\subset Y_1\setminus U_1$, and continue. The dimensions of the nonempty centres strictly decrease, so this gives a finite partition $E=E_1\sqcup\cdots\sqcup E_t$ with $Y_i$ the specialization closure of $E_i\sqcup\cdots\sqcup E_t$. In particular $Y_t$ is permissible for the whole current $E$: every section of $E$ meeting it belongs to $E_t$ and specializes in $U_t$. Blowing up $Y_t$ uniquely lifts sections by properness; those through the centre lie in its $\pi$-chart, since the pulled-back ideal contains $\pi$ and is contained in $(\pi)$. Their positive defects decrease by step 3.1, while all sections outside the centre are unaffected. [F1, F2, step 3.1, induction]

5.1 Use induction first on the uniform maximal defect $D$ from [F1], and within a fixed $D$ on the partition length $t$. The case $D=0$ is smooth. Blow up $Y_t$ as in step 4.1 and apply the $D-1$ induction to its lifted subset $E_t$. All resulting centres stay over $Y_t$ in the nonsmooth locus, so the other $E_i$ are unaffected. Once $E_t$ is smooth, the remaining sections have defect at most $D$ and their canonical partition has length $t-1$, since the modification is an isomorphism away from $Y_t$; apply the second induction. This terminates with finitely many permissible special-fibre blowups, proper and generically isomorphisms, smoothing every section of $E$. Initially take $E$ to be all nonsmooth sections of $X$. Centres always avoid the smooth locus, so initially smooth sections remain smooth. This proves (b) over every DVR, using no completeness, excellence or perfect-residue hypothesis. [F1, step 4.1, algebra] ∎

