---
id: thm-good-and-geometric-quotient-on-stable-locus
kind: theorem
title: Good and geometric quotient on the stable locus
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
justified_by: []
aliases: []
deps: [def-semistable-and-stable-points-for-a-linearization, def-good-and-geometric-quotients-for-group-actions, lem-ample-invariant-section-charts-are-affine, lem-affine-chart-quotients-for-invariant-sections, lem-ample-linearization-power-equivariant-embedding, lem-reynolds-operator-and-invariant-subring-properties, thm-linear-action-projective-git-quotient, thm-projective-git-quotient-from-invariant-section-ring, lem-proj-veronese-invariance, def-rational-action-on-affine-variety, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Lemma 1.10, Theorem 1.12(iv) and Sections 3.4-3.5"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Proposition 1.35, printed p. 12"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Lemma 5.5, Theorem 5.6 with its proof"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Theorem 8.1 with proof, printed pp. 118-120"
---

## Statement

Assume AC inherited from the named suppliers. In the setting of [[thm-projective-git-quotient-from-invariant-section-ring]] let $X^s(L)=\{x\in X^{ss}(L):Gx\text{ is closed in }X^{ss}(L),\ G_x\text{ is finite}\}$, and let $\pi:X^{ss}(L)\to Y=\operatorname{Proj}R(X,L)^G$ be the good quotient. Then:

(i) $X^s(L)$ is open and $G$-stable in $X$, $Y^s:=\pi(X^s(L))$ is open in $Y$, and $X^s(L)=\pi^{-1}(Y^s)$;

(ii) $\pi:X^s(L)\to Y^s$ is a geometric quotient: its fibres are exactly the $G$-orbits in $X^s(L)$, and $\mathcal O_{Y^s}\cong(\pi_*\mathcal O_{X^s(L)})^G$;

(iii) for every $m\ge1$ the identification $X^{ss}(L)=X^{ss}(L^{\otimes m})$ carries $X^s(L)$ onto $X^s(L^{\otimes m})$, and the two geometric quotients are identified by the Veronese isomorphism;

(iv) the stable locus admits the invariant-chart description: $x\in X^s(L)$ if and only if $G_x$ is finite and there exist $m\ge1$ and $\sigma\in\Gamma(X,L^{\otimes m})^G$ with $\sigma(x)\ne0$ and the action of $G$ on the affine chart $X_\sigma$ having all orbits closed;

(v) if $X^s(L)=X^{ss}(L)$ then $\pi$ itself is a geometric quotient of $X^{ss}(L)$.

## Facts & Assumptions

**Given:** The setting of the projective GIT theorem: a complex reductive affine algebraic group $G$, a complex projective variety $X$, an ample $G$-linearized invertible sheaf $L$, the good quotient $\pi:X^{ss}(L)\to Y=\operatorname{Proj}R(X,L)^G$, and the locally closed stable locus $X^s(L)$.

[F1] *Linear case.* For a linear action of $G$ on a $G$-stable closed $X'\subseteq\mathbf P(V)$: $R(X')^G$ is a finitely generated graded $\mathbb C$-algebra, $X'^{ss}$ and $X'^s$ are open $G$-stable subsets, the chart morphisms glue to a good quotient $\pi':X'^{ss}\to Y'=\operatorname{Proj}R(X')^G$, the set $Y'^s=\pi'(X'^s)$ is open with $X'^s=\pi'^{-1}(Y'^s)$, the restriction $\pi':X'^s\to Y'^s$ is a geometric quotient with orbit fibres and $\mathcal O_{Y'^s}\cong(\pi'_*\mathcal O_{X'^s})^G$, a point of $X'^{ss}$ is stable if and only if it has finite stabilizer and lies in a chart $X'_F$ in which all $G$-orbits are closed, equivalently if and only if it has finite stabilizer and closed orbit in $X'^{ss}$, and $X'^s=X'^{ss}$ implies that $\pi'$ is a geometric quotient of $X'^{ss}$. ([[thm-linear-action-projective-git-quotient]])

[F2] *Ample case and Veronese.* Let $L$ be an ample $G$-linearized invertible sheaf with $R(X,L)$ its section ring and $\pi:X^{ss}(L)\to Y=\operatorname{Proj}R(X,L)^G$ the good quotient; for every $m\ge1$ one has $X^{ss}(L)=X^{ss}(L^{\otimes m})$ and $X^s(L)=X^s(L^{\otimes m})$, the Veronese isomorphism identifies the quotient data, and for a $G$-equivariant closed immersion $i:X\hookrightarrow\mathbf P(V)$ with $i^*\mathcal O(1)\cong L^{\otimes m}$ as $G$-linearized invertible sheaves one has $X^{ss}(L)=i^{-1}(X'^{ss})$ and $X^s(L)=i^{-1}(X'^s)$ for $X'=i(X)$ with its linear action. ([[thm-projective-git-quotient-from-invariant-section-ring]], [[def-semistable-and-stable-points-for-a-linearization]], [[lem-ample-linearization-power-equivariant-embedding]], [[lem-proj-veronese-invariance]])

[F3] *Transfer of coordinate charts.* If $F\in R(X')^G_k$ is a homogeneous invariant in the embedded homogeneous coordinate ring, its restriction is an invariant section $\sigma=i^*F\in\Gamma(X,L^{\otimes mk})^G$ and $i(X_\sigma)=X'_F$. Conversely every invariant homogeneous coordinate-ring element has an invariant polynomial lift by naturality of the Reynolds operator under the surjection from the polynomial ring. Since $i$ is a $G$-equivariant isomorphism onto $X'$, corresponding points have the same stabilizer and orbit closedness on these matching charts agrees. This fact concerns sections coming from the embedded coordinate ring; arbitrary global sections need not arise this way. ([[lem-affine-chart-quotients-for-invariant-sections]], [[lem-reynolds-operator-and-invariant-subring-properties]])

[F4] *AC.* The Axiom of Choice is inherited from the linear-action and quotient suppliers and is used only through them. ([[def-axiom-of-choice]])

[F5] *Saturation of a section chart.* For a positive-degree invariant section $\sigma\in R_n^G$ and any positive-degree invariant section $f\in R_d^G$ defining an overlapping chart, the degree-zero function $\sigma^d/f^n$ on $X_f$ pulls back from the Proj chart. Therefore, on $X_f$, its value is nonzero exactly where $\sigma$ is nonzero. Since the charts $X_f$ cover $X^{ss}(L)$, the chart quotient has target $D_+(\sigma)$ and $X_\sigma=\pi^{-1}(D_+(\sigma))$. ([[thm-projective-git-quotient-from-invariant-section-ring]], [[lem-affine-chart-quotients-for-invariant-sections]])

## Proof

**Proof technique:** direct.

1.1 *The equivariant embedding and the reduction.* Choose $m\ge1$ and a $G$-equivariant closed immersion $i:X\hookrightarrow\mathbf P(V)$ with $i^*\mathcal O(1)\cong L^{\otimes m}$ as $G$-linearized invertible sheaves ([F2]); put $X'=i(X)$ and $R'=R(X')$. By [F2] the isomorphism $i$ identifies $X^{ss}(L)$ with $X'^{ss}$ and $X^s(L)$ with $X'^s$; the Veronese isomorphism identifies $\operatorname{Proj}R(X,L)^G$ with $\operatorname{Proj}R(X,L^{\otimes m})^G$. The latter full section ring need not equal the homogeneous coordinate ring $R'$. Instead, the main theorem [F2] identifies their quotient targets canonically on each invariant coordinate chart: both localized degree-zero rings equal the invariant regular functions on that affine chart, these charts cover both targets, and their localization maps agree. The resulting canonical isomorphism $Y\cong Y'$ identifies $\pi$ with $\pi'$ because both chart morphisms arise from the same inclusions of invariant functions. [F2]

2.1 *Transport of (i) and (ii).* By [F1] applied to the linear action on $X'$ the stable locus $X'^s$ is open and $G$-stable, $Y'^s=\pi'(X'^s)$ is open in $Y'$, $X'^s=\pi'^{-1}(Y'^s)$, and $\pi':X'^s\to Y'^s$ is a geometric quotient with orbit fibres and $\mathcal O_{Y'^s}\cong(\pi'_*\mathcal O_{X'^s})^G$. Transporting along $i$ and the identification of step 1.1 gives that $X^s(L)$ is open and $G$-stable, $Y^s=\pi(X^s(L))$ is open in $Y$, $X^s(L)=\pi^{-1}(Y^s)$, and $\pi:X^s(L)\to Y^s$ is a geometric quotient with orbit fibres and $\mathcal O_{Y^s}\cong(\pi_*\mathcal O_{X^s(L)})^G$. This proves (i) and (ii). [F1, step 1.1]

2.2 *Veronese compatibility (iii).* The locus equalities $X^{ss}(L)=X^{ss}(L^{\otimes m})$ and $X^s(L)=X^s(L^{\otimes m})$ and the identification of the quotient data by the Veronese isomorphism are the corresponding clauses of [F2]; closedness of an orbit in the semistable locus and finiteness of a stabilizer are read in the same identified locus, so the geometric restrictions to the stable loci are identified as well. This proves (iii). [F2, step 1.1]

3.1 *Chart description (iv).* Let $x\in X^s(L)$, so $x'=i(x)\in X'^s$ by step 2.1. By [F1] the point $x'$ lies in a chart $X'_F$, $F\in R'^G_{>0}$, in which all $G$-orbits are closed, and $G_{x'}$ is finite; by [F3] the form $F$ restricts to an invariant section $\sigma\in\Gamma(X,L^{\otimes m\deg F})^G$ with $i(X_\sigma)=X'_F$, and $i$ identifies the stabilizers and the closedness of orbits, so all orbits in $X_\sigma$ are closed and $G_x$ is finite. Conversely let $\sigma\in\Gamma(X,L^{\otimes n})^G$ and $x\in X_\sigma$ with all orbits in $X_\sigma$ closed and $G_x$ finite. By [F5], $X_\sigma=\pi^{-1}(D_+(\sigma))$ is saturated. The quotient map is constant on $Gx$ and hence on its closure in $X^{ss}(L)$, since the fibre over $\pi(x)$ is closed. That fibre lies in $X_\sigma$, because $\pi(x)\in D_+(\sigma)$. Therefore any point of $\overline{Gx}\cap X^{ss}(L)$ lies in $X_\sigma$; as the orbit is closed there by assumption, it has no boundary point in $X^{ss}(L)$ and is closed in the semistable locus. Thus $x\in X^s(L)$. This proves (iv). [F1, F2, F3, F5, step 2.1]

3.2 *The case $X^s(L)=X^{ss}(L)$ (v).* If $X^s(L)=X^{ss}(L)$, then $X'^s=X'^{ss}$ by step 2.1, so $\pi'$ is a geometric quotient of $X'^{ss}$ by [F1]; transporting along the identifications of step 1.1 gives that $\pi$ is a geometric quotient of $X^{ss}(L)$. This proves (v). [F1, step 1.1]

4.1 Assertions (i)-(v) are established: (i) and (ii) in step 2.1, (iii) in step 2.2, (iv) in step 3.1 and (v) in step 3.2. No new selection is made; the Axiom of Choice is inherited from the named suppliers [F4]. [F4, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **Both descriptions of stability.** The invariant-chart description (iv) is the form in which stability is checked on the companion page; it is transported from the linear-action theorem through the equivariant embedding in steps 1.1 and 3.1, so the ample case is reduced to the linear one rather than re-proved chart by chart.
- **No numerical criterion.** As in the linear-action theorem, no Hilbert--Mumford criterion is involved; all statements are about orbits and invariant sections.
