---
id: thm-cg-compact-local-cat-one-short-circle-criterion
kind: theorem
title: "Compact geodesic locally CAT(1) spaces are CAT(1) exactly when they contain no short circle"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 12
deps: [lem-closed-subset-of-a-compact-space-is-compact, def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-comparison-convexity-and-model-spaces, lem-cg-alexandrov-comparison-triangle-gluing, def-metric-space, def-metric-ball, def-metric-compactness, def-geodesic-and-geodesic-metric-space, def-axiom-of-choice, cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets, thm-compact-implies-complete-and-totally-bounded, thm-metric-compactness-equivalences, def-topology-of-uniform-convergence, lem-metric-reverse-triangle, def-isometry-and-metric-embedding, def-cg-comparison-angle-and-alexandrov-angle, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, cor-pi-is-the-first-positive-sine-zero, thm-heine-borel-rn]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "AC supplies the Arzela-Ascoli subsequences used for continuity of unique short geodesics and for the minimizing digons, and the countable selection of near-minimal digons. Finite chart choices need only finite choice."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.4.12, printed pp. 200–201 (compact balls: a space of curvature $\\le\\kappa$ is CAT($\\kappa$) iff short pairs are joined uniquely); II.4.15–II.4.17, printed pp. 202–204 (injectivity radius, systole, the minimum embedded circle)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed p. 502 (Theorem I.2.8: equivalent conditions for curvature $\\le\\kappa>0$)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a metric space that is compact, geodesic and locally CAT(1) ([[def-cg-cat-zero-cat-one-and-local-geodesic]], [[def-metric-compactness]]). Then:

**(i)** $X$ is CAT(1) if and only if $X$ contains no isometrically embedded circle of length $<2\pi$ ([[lem-cg-comparison-convexity-and-model-spaces]] clause (vi)).

**(ii)** If $X$ is not CAT(1), then there is an isometrically embedded circle in $X$ of length $2\operatorname{injrad}(X)<2\pi$, where $\operatorname{injrad}(X)$ is the supremum of the numbers $r\ge0$ such that every pair of points at distance $<r$ is joined by a unique geodesic segment; in particular $\operatorname{injrad}(X)>0$.


**(iii) Comparison below a uniqueness threshold.** Let $0<R\le\pi$. If every pair of points of $X$ at distance $<R$ is joined by a unique geodesic, then every geodesic triangle of perimeter $<2R$ satisfies the spherical CAT(1) comparison inequality for all pairs of points on its sides: $d(u,v)\le d_S(\bar u,\bar v)$ for the corresponding points of its spherical comparison triangle ([[def-cg-cat-zero-cat-one-and-local-geodesic]]).
## Facts & Assumptions

**Given:** AC, a compact geodesic locally CAT(1) metric space $X$, and the injectivity radius defined in the Statement.

[F1] The spherical model, its comparison triangles, spherical cosine rule, and the CAT(1) circle criterion are proved in [[lem-cg-comparison-convexity-and-model-spaces]] clauses (ii), (iii), (vi); CAT inequalities and geodesic segments have the definitions [[def-cg-cat-zero-cat-one-and-local-geodesic]], [[def-geodesic-and-geodesic-metric-space]], and isometric subspaces have their induced distances ([[def-isometry-and-metric-embedding]]).

[F2] Compact metric spaces are complete and totally bounded and sequentially compact; AC gives a uniformly convergent subsequence of every equicontinuous pointwise bounded sequence of continuous maps from a nonempty compact metric space to a proper metric space ([[thm-compact-implies-complete-and-totally-bounded]], [[thm-metric-compactness-equivalences]], [[cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets]], [[def-axiom-of-choice]], [[def-topology-of-uniform-convergence]]). A compact metric target is proper, because its closed balls are closed subsets and therefore compact ([[lem-closed-subset-of-a-compact-space-is-compact]]). The interval $[0,1]$ is compact ([[thm-heine-borel-rn]]).

[F3] The patchwork sweep gives vertex angle comparison for a triangle of perimeter $<2\pi$ when its geodesics from one vertex to the opposite side depend continuously on the side point; Alexandrov's straightening gives the comparison distance to a marked splitting point, including the limiting collinear configurations. Angles satisfy the triangle inequality, and the angle between the two directions of a geodesic is $\pi$ ([[lem-cg-alexandrov-comparison-triangle-gluing]] clauses (i), (iii), (iv) and its closed model-comparison argument; [[def-cg-comparison-angle-and-alexandrov-angle]]).

[F4] Metric distances obey the triangle and reverse triangle inequalities ([[def-metric-space]], [[lem-metric-reverse-triangle]]). The sine and cosine addition formulas hold; sine is positive on $(0,\pi)$ and cosine strictly decreases on $[0,\pi]$ ([[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-pi-is-the-first-positive-sine-zero]]).

## Proof

1.1 A short circle obstructs CAT(1). An isometric copy of $S^1_\ell$, $\ell<2\pi$, has geodesic triangle sides that remain geodesics in $X$, with exactly the same side and cross distances. The circle's failed CAT(1) test in [F1] is therefore a failed test in $X$. This proves the forward implication of (i). Empty and one-point spaces are CAT(1) and contain no circle; henceforth the non-CAT(1) case is nonempty. [F1, given]

1.2 A positive uniform uniqueness radius. Consider the family of all CAT(1) closed balls with radii $0<\rho<\pi/4$; their open half-radius balls cover $X$. Shrinking is legitimate: balls of radius $<\pi/2$ in a CAT(1) chart are convex, since each center-and-endpoints triangle has perimeter $<4\rho<2\pi$ and its spherical comparison stays in the model ball. The open half-radius balls cover $X$; take finitely many, with radii $\rho_i$, and put $\varepsilon=\min_i\rho_i/4$. If $d(x,y)<\varepsilon$ and $x$ lies in the $i$th half-ball, every geodesic from $x$ to $y$ lies in its full ball, since each of its points is within $d(x,y)$ of $x$. Any two such geodesics coincide by the CAT(1) test on their digon with a zero third side, whose perimeter is $2d(x,y)<2\pi$. Thus $r:=\operatorname{injrad}(X)\ge\varepsilon>0$. [F1, F2, F4, choose]

1.3 Continuity under short uniqueness. Suppose $0<R\le\pi$ and all pairs at distance $<R$ have unique geodesics. If endpoints $u_n,v_n$ converge to $u,v$ with $d(u,v)<R$, parametrize their geodesics on $[0,1]$. Their speeds $d(u_n,v_n)$ are bounded, hence they are equicontinuous into compact $X$. By [F2] every subsequence has a uniformly convergent further subsequence; the distance equality $d(c_n(s),c_n(t))=|s-t|d(u_n,v_n)$ passes to the limit by [F4], making that limit the unique geodesic from $u$ to $v$. The entire sequence converges uniformly: failure would give a subsequence uniformly separated from that geodesic and contradict its convergent further subsequence. This proves endpoint continuity in the uniform metric. AC is used through the Ascoli corollary. [F2, F4, given]

2.1 Angle comparison below the uniqueness threshold. For a triangle of perimeter $P<2R$, every side has length $<R$. For any point $v$ of the side opposite $p$, the two boundary routes give $2d(p,v)\le P<2R$. Step 1.3 supplies a continuous sweep of the unique geodesics $[p,v]$. If $p$ is off that side, patchwork [F3] gives angle comparison. If $p$ lies on that side, uniqueness makes all sides the corresponding subsegments and the triangle is isometric to its collinear comparison. Thus every triangle of perimeter $<2R$ has vertex angle comparison. [step 1.3, F1, F3, F4]

3.1 Comparison at scale $R$ and the compact uniqueness criterion. Under the hypothesis of (iii), use step 2.1 with that $R$. For a point $v$ interior to the side $[q_0,q_1]$ of a triangle of perimeter $P<2R$, the two triangles $(p,q_0,v)$ and $(p,v,q_1)$ have perimeter at most $P$. Their actual angles at $v$ have sum at least $\pi$ by [F3], and therefore so do their comparison angles. Glue their models along the common side $[\bar p,\bar v]$ on opposite sides; the four boundary lengths sum to $P<2R\le2\pi$. Alexandrov's marked-point comparison [F3] then gives $d(p,v)\le d_S(\bar p,\bar v)$ in the comparison triangle of $(p,q_0,q_1)$. Collinear submodels follow by the closed limiting cosine inequalities; $p=v$ or $p$ on the opposite side is already trivial by uniqueness. This proves every vertex-to-opposite-side inequality. It implies all-pair comparison as follows. For $x\in[p,q]$, $y\in[p,z]$, first apply it in $(p,x,z)$ to obtain $d(x,y)\le d_S(\hat x,\hat y)$; then apply it in $(p,q,z)$ to obtain $d(x,z)\le d_S(\bar x,\bar z)$. These subtriangles have perimeter at most the original perimeter. The spherical cosine rule shows that the second inequality bounds the model angle at $p$ in $(p,x,z)$ by the original model angle at $\bar p$, and the first then bounds $d(x,y)$ by $d_S(\bar x,\bar y)$: for fixed two positive sides $<\pi$, the opposite side increases with the included angle because both sines are positive. Zero sides and coinciding points give equality directly. This proves (iii); the sweep, both split triangles and both all-pair subtriangles stay within the same perimeter bound $2R$. Taking $R=\pi$ proves that short uniqueness makes $X$ CAT(1). Conversely CAT(1) implies uniqueness below $\pi$ by its digon test. We have proved, rather than assumed, the compact short-uniqueness criterion. [step 2.1, F1, F3, F4, algebra]

4.1 The first failure is below $\pi$. Suppose $X$ is not CAT(1). Step 3.1 gives two distinct geodesics between points of distance $L<\pi$. Uniqueness cannot hold at any radius greater than $L$, so $0<r\le L<\pi$. For every pair at distance $<r$, uniqueness holds: choose a radius in the defining set strictly greater than that distance, using the definition of supremum. In particular steps 1.3 and 2.1 apply with $R=r$. [step 1.2, step 3.1, F4]

5.1 A limiting minimizing digon. For each positive integer $n$ choose a pair of distinct geodesics with common endpoints and length $L_n<r+\delta_n$, where $\delta_n>0$ tends to zero and $r+\delta_n<\pi$; such a pair exists by the definition of $r$, and $L_n\ge r$. This countable selection uses AC. Parametrize both sides on $[0,1]$; they are uniformly Lipschitz with speeds $L_n$. Apply [F2] to the first sides and then to the corresponding second sides to obtain simultaneous uniform limits $c,c'$ and limits $x,y$ of the endpoints. Passing the distance equalities to the limit shows that both are geodesics from $x$ to $y$ of length $r$. [step 4.1, F2, F4, choose]

6.1 Explicit noncollapse of the digons. Suppose $c=c'$. Their midpoints $m_n,m_n'$ then have distance $h_n\to0$. Put $a_n=L_n/2<\pi/2$. For large $n$, $L_n+h_n<2r$; thus each triangle $(x_n,m_n,m_n')$ and $(y_n,m_n,m_n')$ has perimeter $2a_n+h_n<2r$ and angle comparison by steps 2.1 and 4.1. If $h_n>0$, its comparison angle $\theta_n$ at $m_n'$ satisfies $\cos\theta_n=\cos a_n(1-\cos h_n)/(\sin a_n\sin h_n)>0$, so $\theta_n<\pi/2$. But the two actual angles at $m_n'$ sum to at least $\pi$, because $m_n'$ is interior to a geodesic and [F3] applies; comparison bounds their sum by $2\theta_n<\pi$, a contradiction. Consequently $h_n=0$. Since $a_n<r$ for large $n$, uniqueness identifies both halves through the common midpoint, contradicting the distinctness of the original digon sides. Therefore $c\ne c'$. [step 2.1, step 4.1, step 5.1, F1, F3, F4, algebra]

7.1 Opposite points have distance $r$. Use arclength parameters on $c,c'$ and take $z=c(a)$, $z'=c'(b)$ with $a+b=r$. If $a=0$ or $b=0$ their distance is $r$. Otherwise $a,b>0$ and $h=d(z,z')\le r$ by the two routes through $x,y$. Suppose $h<r$. If $h=0$, the endpoint segments all have lengths $a,b<r$ and uniqueness makes both digon sides coincide, a contradiction. If $h>0$, both triangles $(x,z,z')$, $(y,z,z')$ have perimeter $r+h<2r$, hence angle comparison. Their model angles $\theta_x,\theta_y$ at $z'$ satisfy $\cos\theta_x+\cos\theta_y=\frac{\sin r\bigl(\cos(a-b)-\cos h\bigr)}{\sin a\sin b\sin h}$. The reverse triangle inequality gives $h\ge|a-b|$. If $h>|a-b|$, the displayed quantity is positive, whereas $\theta_x+\theta_y\ge\pi$ (the actual angle sum is at least $\pi$) would give $\cos\theta_x+\cos\theta_y=2\cos((\theta_x+\theta_y)/2)\cos((\theta_x-\theta_y)/2)\le0$. Thus $h=|a-b|$. If $a\ge b$, the equality $d(x,z)=d(x,z')+d(z',z)$ puts $z'$ on a geodesic from $x$ to $z$; that geodesic is unique since $a<r$, so $z'$ lies on $c$. The unique segments from $x$ and $y$ to $z'$ (of lengths $b,a<r$) are then the corresponding subsegments of both sides, making $c=c'$. If $b\ge a$, interchange the sides. This contradiction proves $h=r$. [step 2.1, step 4.1, step 6.1, F1, F3, F4, algebra]

8.1 All circle distances, and conclusion. For arbitrary $c(s),c'(t)$ let $w=c'(r-s)$ be opposite $c(s)$. Step 7.1 and the reverse triangle inequality give $d(c(s),c'(t))\ge r-|t-(r-s)|=\min\{s+t,2r-s-t\}$; the two routes through $x,y$ give the reverse bound. Distances on either single side already equal parameter differences. Thus traversing $c$ and then $c'$ backwards gives an isometry $S^1_{2r}\to c([0,r])\cup c'([0,r])$: the distance formula also excludes every additional identification. Since $0<r<\pi$, this proves (ii); together with step 1.1 it proves (i). [step 4.1, step 7.1, F1, F4] ∎

## Remarks

The proof includes the compact uniqueness criterion of Bridson–Haefliger II.4.12. The two collapse arguments in II.4.16 are written here as spherical cosine computations; each tested triangle has its perimeter explicitly bounded by $2r$. AC is used for the near-minimal sequence and the Ascoli extractions, including the continuity argument.
