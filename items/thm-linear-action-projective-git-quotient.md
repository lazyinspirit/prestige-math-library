---
id: thm-linear-action-projective-git-quotient
kind: theorem
title: Projective GIT quotient for a linear action
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
justified_by: []
aliases: []
deps: [def-invariant-section-ring-and-projective-git-quotient, def-semistable-and-stable-points-for-a-linearization, def-good-and-geometric-quotients-for-group-actions, lem-graded-invariants-of-localization-at-an-invariant-element, lem-good-quotient-local-on-target, lem-ample-invariant-section-charts-are-affine, lem-proj-of-finitely-generated-graded-algebra-is-projective, lem-affine-chart-quotients-for-invariant-sections, thm-invariant-ring-finite-generation-and-affine-categorical-quotient, thm-stable-locus-geometric-quotient, lem-stabilizer-dimension-semicontinuity, lem-orbit-dimension-and-closed-orbits-for-complex-group-actions, lem-reynolds-operator-and-invariant-subring-properties, lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated, lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated, def-stable-points-of-an-affine-action, def-categorical-and-geometric-quotients-of-classical-varieties, def-homogeneous-coordinate-ring, def-affine-cone-projective-set, def-standard-open-proj, def-proj-graded-ring-points, lem-proj-associated-sheaf-basic-sections, lem-standard-opens-proj-affine, def-classical-algebraic-prevariety-regular-maps-and-varieties, def-rational-action-on-affine-variety, def-dimension-classical-variety, def-axiom-of-choice, lem-separation-of-disjoint-closed-invariant-subsets-by-an-invariant]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Theorem 1.12 and its proof in Sections 3.3-3.4; Theorem 1.6; Example 3.3"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Propositions 1.29 and 1.31 and their proofs, printed pp. 11-12"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Theorems 5.3 and 5.6 with proofs; Corollary 5.14"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Theorem 8.1 with proof, printed pp. 118-120"
---

## Statement

Assume AC inherited from the affine invariant-theory and quotient suppliers. Let $G$ be a complex reductive affine algebraic group, $V$ a finite-dimensional rational $G$-module, $X\subseteq\mathbf P(V)$ a $G$-stable closed projective algebraic set, $R=R(X)$ its homogeneous coordinate ring ([[def-homogeneous-coordinate-ring]], [[def-affine-cone-projective-set]]), and $L=\mathcal O(1)|_X$. Put
$$X^{ss}=X\smallsetminus V_+(R^G_+)=\{x\in X:\exists f\in R^G_{>0},\ f(x)\ne0\}$$
and $X^s=\{x\in X^{ss}:Gx\text{ is closed in }X^{ss}\text{ and }G_x\text{ is finite}\}$ ([[def-semistable-and-stable-points-for-a-linearization]]). Then:

(i) $R^G$ is a finitely generated graded $\mathbb C$-algebra with $(R^G)_0=\mathbb C$ when $X\ne\varnothing$ (and $R^G=0$ when $X=\varnothing$), and $Y:=\operatorname{Proj}R^G$ is a projective $\mathbb C$-scheme of finite type;

(ii) $X^{ss}$ and $X^s$ are open $G$-stable subsets of $X$, and $X^{ss}$ is the union of the affine $G$-stable charts $X_f$ for $f\in R^G_{>0}$;

(iii) the chart morphisms of [[lem-affine-chart-quotients-for-invariant-sections]] glue to a $G$-invariant morphism $\pi:X^{ss}\to Y$ that is a good quotient in the sense of [[def-good-and-geometric-quotients-for-group-actions]]; $\pi$ is surjective, $\mathcal O_Y\cong(\pi_*\mathcal O_{X^{ss}})^G$, and for $x_1,x_2\in X^{ss}$ one has $\pi(x_1)=\pi(x_2)$ if and only if $\overline{Gx_1}\cap\overline{Gx_2}\cap X^{ss}\ne\varnothing$;

(iv) $Y^s:=\pi(X^s)$ is open in $Y$, $X^s=\pi^{-1}(Y^s)$, and $\pi:X^s\to Y^s$ is a geometric quotient; a point $x\in X^{ss}$ is stable if and only if $G_x$ is finite and $Gx$ is closed in $X^{ss}$, equivalently if and only if $G_x$ is finite and $x$ lies in a chart $X_f$, $f\in R^G_{>0}$, in which all $G$-orbits are closed; and if $X^s=X^{ss}$ then $\pi$ is a geometric quotient of $X^{ss}$.

## Facts & Assumptions

**Given:** A complex reductive affine algebraic group $G$, a finite-dimensional rational $G$-module $V$, a $G$-stable closed projective algebraic set $X\subseteq\mathbf P(V)$ with homogeneous coordinate ring $R$ and invariant part $R^G$, and $L=\mathcal O(1)|_X$.

[F1] *Finite generation of invariants.* For $X\ne\varnothing$, $R$ is a finitely generated graded $\mathbb C$-algebra with $R_0=\mathbb C$ and finite-dimensional graded pieces, and the action of $G$ is rational by graded algebra automorphisms; hence $R^G$ is a finitely generated graded $\mathbb C$-algebra with $(R^G)_0=\mathbb C$. ([[lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated]], [[def-homogeneous-coordinate-ring]], [[def-affine-cone-projective-set]])

[F2] *Projectivity of the Proj.* A finitely generated graded $\mathbb C$-algebra $A$ with $A_0=\mathbb C$ and finite-dimensional graded pieces has $\operatorname{Proj}A$ a projective $\mathbb C$-scheme of finite type; in particular $Y=\operatorname{Proj}R^G$ is projective of finite type. ([[lem-proj-of-finitely-generated-graded-algebra-is-projective]])

[F3] *The affine chart quotients.* For every homogeneous $f\in R^G$ of positive degree the chart $X_f$ is affine and $G$-stable with $\mathcal O(X_f)^G=(R^G)_{(f)}$, and the affine quotient morphism $\pi_f:X_f\to D_+(f)=\operatorname{Spec}(R^G)_{(f)}$ is a good quotient; the various $\pi_f$ agree on overlaps. ([[lem-affine-chart-quotients-for-invariant-sections]], [[lem-ample-invariant-section-charts-are-affine]])

[F4] *Locality and the affine picture.* Good quotients are local on the target and are categorical; a good quotient is geometric exactly when its fibres are the orbits. Every fibre of the affine categorical quotient of an affine $G$-variety contains a unique closed orbit, for an affine $G$-variety the stable locus (closed orbit and finite stabilizer) is characterized by the affine stable-locus theorem, with geometric quotient onto its image, and a closed subgroup of the finite-type group $G$ is finite exactly when its dimension is zero. ([[lem-good-quotient-local-on-target]], [[thm-stable-locus-geometric-quotient]], [[def-stable-points-of-an-affine-action]], [[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]])

[F5] *Orbit and stabilizer behaviour.* The function $x\mapsto\dim G_x$ is upper semicontinuous and $x\mapsto\dim Gx$ is lower semicontinuous; for every point one has $\dim G=\dim G_x+\dim Gx$, the orbit closure $\overline{Gx}$ is the union of $Gx$ and of orbits of strictly smaller dimension, every orbit closure contains a closed orbit, and every orbit of minimal dimension in a $G$-stable closed set is closed. ([[lem-stabilizer-dimension-semicontinuity]], [[lem-orbit-dimension-and-closed-orbits-for-complex-group-actions]], [[def-dimension-classical-variety]])

[F6] *Good-quotient clauses.* A good quotient $\pi:X\to Y$ is $G$-invariant and surjective, satisfies $\mathcal O_Y\cong(\pi_*\mathcal O_X)^G$, maps closed $G$-stable subsets to closed subsets and disjoint closed $G$-stable subsets to disjoint subsets, and is categorical; a geometric quotient has the $G$-orbits as its fibres, with the quotient topology and sheaf conditions. ([[def-good-and-geometric-quotients-for-group-actions]], [[def-categorical-and-geometric-quotients-of-classical-varieties]])

[F7] *Separate a point from a disjoint invariant closed subset.* For an affine reductive-group action with categorical quotient $\pi$, if $Z$ is closed and invariant and $\pi(x)\notin\pi(Z)$, there is an invariant regular function $h$ with $h(x)\ne0$ and $h|_Z=0$ ([[lem-separation-of-disjoint-closed-invariant-subsets-by-an-invariant]]).

## Proof

**Proof technique:** direct.

1.1 *The invariant ring and the target.* If $X=\varnothing$, its homogeneous coordinate ring is zero, the invariant ring and every localized chart ring are zero, both loci and every quotient target are empty, and all conclusions hold with the empty morphisms. Assume henceforth $X\ne\varnothing$. By [F1] $R^G$ is a finitely generated graded $\mathbb C$-algebra with $(R^G)_0=\mathbb C$ and finite-dimensional graded pieces; by [F2] the scheme $Y=\operatorname{Proj}R^G$ is projective of finite type over $\mathbb C$. This is assertion (i). [F1, F2]

1.2 *The semistable locus.* By definition $x\in X^{ss}$ exactly when $f(x)\ne0$ for some homogeneous invariant $f$ of positive degree, i.e. exactly when $x$ lies in one of the charts $X_f$ with $f\in R^G_{>0}$; each such chart is open, affine and $G$-stable by [F3], so $X^{ss}$ is open and $G$-stable and covered by the charts $X_f$. [F3, given]

2.1 *Gluing the chart morphisms.* The chart morphisms $\pi_f:X_f\to D_+(f)$ of [F3] agree on overlaps $X_{fg}$ by the compatibility assertion of [F3]; since the $D_+(f)$ with $f\in R^G_{>0}$ cover $Y$ and the $X_f$ cover $X^{ss}$, they glue to a $G$-invariant morphism $\pi:X^{ss}\to Y$ whose restrictions are the good quotients $\pi_f$. For any positive-degree invariants $f,g$, the function $f^{\deg g}/g^{\deg f}$ on $X_g$ is the pullback of the same fraction on $D_+(g)$; it is nonzero precisely on $X_f\cap X_g$ and on $D_+(f)\cap D_+(g)$, respectively. Thus $\pi^{-1}(D_+(f))=X_f$, since the $X_g$ cover $X^{ss}$, so the chart maps really are target restrictions of $\pi$. By [F4] the good-quotient property is local on the target, so $\pi$ is a good quotient; in particular by [F6] it is surjective, its pullback identifies $\mathcal O_Y$ with $(\pi_*\mathcal O_{X^{ss}})^G$, and images of closed $G$-stable (respectively disjoint closed $G$-stable) subsets are closed (respectively disjoint). [F3, F4, F6, step 1.2]

2.2 *Closed charts and invariant vanishing.* Call a chart $X_f$, $f\in R^G_{>0}$, *closed* if every $G$-orbit contained in $X_f$ is closed in $X_f$, and let $X_c$ be the union of the closed charts; this is an open $G$-stable subset of $X^{ss}$. If $X_f$ is closed and $g\in R^G_{>0}$, then $X_{fg}=X_f\cap X_g$ is an open $G$-stable subset of $X_f$, so every orbit contained in $X_{fg}$ is closed in $X_{fg}$ as well. For a homogeneous invariant section $F$, if $F(x)=0$ then its closed zero locus is $G$-stable and contains $Gx$, hence also contains every $z\in\overline{Gx}\cap X^{ss}$. Equivalently, if such a $z$ lies in a chart $X_f$ and $F=f$, then $F(x)\ne0$, so $x\in X_f$. [given, step 1.2]

2.3 *The stable locus lies in the closed charts.* Let $x\in X^s$ and choose $f_0\in R^G_{>0}$ with $x\in X_{f_0}$ (step 1.2). The set $Z=\{y\in X_{f_0}:\dim G_y>0\}$ is closed and $G$-stable in $X_{f_0}$ by [F5] and is disjoint from the closed orbit $Gx$, whose stabilizers are conjugate to the finite group $G_x$. Since $Gx$ and $Z$ are disjoint closed $G$-stable subsets of the affine chart, the good-quotient property [F4] gives $\pi_{f_0}(Gx)\cap\pi_{f_0}(Z)=\varnothing$. Thus $\pi_{f_0}(x)\notin\pi_{f_0}(Z)$, and the affine quotient separation lemma [F7] gives $h\in\mathcal O(X_{f_0})^G$ with $h(x)\ne0$ and $h|_Z=0$. By [F3] write $h=g/f_0^m$ with $g\in R^G$ homogeneous. Choose $N\ge1$ and put $F=g f_0^N$; then $F$ is homogeneous invariant of positive degree and $F(x)\ne0$. Its chart satisfies $X_F\subseteq X_{f_0}$, and if $y\in X_F$ then $h(y)=g(y)/f_0(y)^m\ne0$, so $y\notin Z$; hence every point of $X_F$ has finite stabilizer. If an orbit $Gy\subseteq X_F$ were not closed in $X_F$, its boundary in $X_F$ would contain a point $z\in X_F\cap\overline{Gy}\setminus Gy$; by [F5] the orbit $Gz$ has dimension strictly smaller than $\dim Gy$. But every point of $X_F$ has finite stabilizer, so every orbit in $X_F$ has dimension $\dim G$ by the orbit-stabilizer formula [F5], a contradiction. Thus $X_F$ is a closed chart containing $x$. Every stable point lies in such a chart, so $X^s\subseteq X_c$. [F3, F4, F5, F7, step 1.2]

3.1 *Points of closed charts with finite stabilizer are stable.* Let $x\in X_c$ with $G_x$ finite and choose a closed chart $X_f$ containing $x$. The fibre $\pi^{-1}(\pi(x))$ is closed in $X^{ss}$ and contains $Gx$, so it contains $\overline{Gx}\cap X^{ss}$. Since $\pi(x)\in D_+(f)$ and $X_f=\pi^{-1}(D_+(f))$ by step 2.1, the fibre lies in $X_f$. Thus every $z\in\overline{Gx}\cap X^{ss}$ lies in the closure of $Gx$ computed in $X_f$, and closedness of the orbit in that chart forces $z\in Gx$. Hence $Gx$ is closed in $X^{ss}$ and $x\in X^s$. With step 2.3 this gives $X^s=X_c\cap\{x\in X:\dim G_x=0\}$. [F5, step 2.1, step 2.3]

3.2 *Fibres of $\pi$.* Let $x_1,x_2\in X^{ss}$. If $\pi(x_1)=\pi(x_2)$, choose $f\in R^G_{>0}$ with $\pi(x_1)\in D_+(f)$; then $x_1,x_2\in X_f$ and, since $\pi_f$ restricts $\pi$ by step 2.1, $\pi_f(x_1)=\pi_f(x_2)$, so the closures of $Gx_1$ and $Gx_2$ in $X_f$ meet by the unique-closed-orbit property of the affine fibre ([F4]), hence their closures in $X^{ss}$ meet. Conversely let $z\in\overline{Gx_1}\cap\overline{Gx_2}\cap X^{ss}$ and choose $f\in R^G_{>0}$ with $z\in X_f$; by the vanishing observation of step 2.2 the points $x_1,x_2$ also lie in $X_f$, and $z$ lies in both closures computed in $X_f$, so $\pi_f(x_1)=\pi_f(z)=\pi_f(x_2)$ by continuity and $\pi(x_1)=\pi(x_2)$. This proves (iii). [F4, step 2.1, step 2.2]

4.1 *Openness and the geometric quotient.* By step 3.1 the stable locus is $X^s=X_c\cap\{x\in X:\dim G_x=0\}$. The union $X_c$ of charts is open and $G$-stable, and $\{x:\dim G_x=0\}$ is open in $X_c$ by upper semicontinuity of $x\mapsto\dim G_x$ ([F5]); hence $X^s$ is open in $X$, and it is $G$-stable because stabilizers of points in one orbit are conjugate. On a closed chart $X_f$ the affine quotient $\pi_f$ of [F3] is a good quotient whose fibres contain a unique closed orbit ([F4]); since every orbit in $X_f$ is closed, each fibre is a single orbit, so $\pi_f$ is a geometric quotient. These geometric quotients agree on overlaps by [F3], so by locality of the geometric-quotient property ([F4]) they glue to a geometric quotient $\pi_c:X_c\to Y_c:=\pi(X_c)$, where $Y_c$ is the union of the open sets $D_+(f)$ over the closed charts, hence open in $Y$. The closed $G$-stable subset $X_c\smallsetminus X^s$ is mapped by the quotient $\pi_c$ to a closed subset of $Y_c$ by clause (iv) of [F6], so $Y^s:=\pi(X^s)=Y_c\smallsetminus\pi(X_c\smallsetminus X^s)$ is open in $Y_c$ and hence in $Y$; and $X^s=\pi^{-1}(Y^s)$ because the fibres of $\pi_c$ are the orbits and $X^s$ is $G$-stable. The restriction of the geometric quotient $\pi_c$ to the open $G$-stable subset $X^s$ is again a geometric quotient onto $Y^s$ by locality, so $\pi:X^s\to Y^s$ is a geometric quotient. This proves (iv); if $X^s=X^{ss}$ then $X_c=X^{ss}$ and the same argument shows that $\pi$ is a geometric quotient of $X^{ss}$. [F3, F4, F5, F6, step 2.3, step 3.1]

5.1 Assertions (i)-(iv) are established: (i) in step 1.1, (ii) in step 1.2, (iii) in steps 2.1 and 3.2, and (iv) in steps 2.3, 3.1 and 4.1. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **No Hilbert--Mumford criterion.** Semistability and stability are read off from invariant sections and orbit closures only; no numerical criterion is stated or used.
- **The linearization is a hypothesis.** The action on $R$ and hence the quotient come from the linearized structure of $\mathcal O(1)|_X$; no item constructs a linearization of an arbitrary ample sheaf.
