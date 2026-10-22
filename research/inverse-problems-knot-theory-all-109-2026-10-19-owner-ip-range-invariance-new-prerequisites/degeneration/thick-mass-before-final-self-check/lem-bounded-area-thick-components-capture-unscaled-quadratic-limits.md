---
id: lem-bounded-area-thick-components-capture-unscaled-quadratic-limits
kind: lemma
title: Bounded-area thick components capture unscaled quadratic limits
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - thm-cauchy-integral-formula-circle
  - thm-cauchy-integral-formula-higher-derivatives
  - thm-montel-theorem-for-holomorphic-functions
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Amenability, Poincare series and quasiconformal maps
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/amen/amen.pdf
      locator: Sections 9–12 and Appendix A.1–A.4 fully read; this proves the unscaled nonzero thick-component limit used in the proof of Theorem 11.1, PDF page20, without inferring its normalization from projective convergence alone
---

## Statement

Assume AC, hence Countable Choice. Let $\Gamma_n\le\mathrm{PSL}_2(\mathbb R)$ be discrete torsion-free, let $X_n=H/\Gamma_n$ be pointed at $x_n=[i]$, and suppose $\operatorname{inj}_{X_n}(x_n)\ge\varepsilon>0$. Let $q_n$ be holomorphic quadratic differentials on $X_n$ with $\int_{X_n}|q_n|\le B<\infty$. Along a thick-pointed subsequence of [[thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases]], a further subsequence converges WITHOUT multiplying by scalars to a holomorphic quadratic $q$ on its limit $X=H/\Gamma$, locally in all derivatives in the actual quotient charts, and $\int_X|q|\le B$. The limit may be zero.

Bounded quotient balls are faithfully captured by finitely many of those actual charts: for each fixed $R<\infty$ there exist finitely many precompact discs $U_j\Subset H$, projecting injectively for $\Gamma$ on a neighborhood of their closures and eventually for $\Gamma_n$, such that $\overline B_{X_n}(x_n,R)\subset\bigcup_j\pi_n(U_j)$ for all sufficiently large $n$. If measurable $E_n\subset\overline B_{X_n}(x_n,R)$ satisfy $\liminf_n\int_{E_n}|q_n|\ge m>0$, then $q\ne0$.

In particular suppose also $\operatorname{area}(X_n)\le A<\infty$, and let $Z_n$ be the connected component containing $x_n$ of the closed thick set $\{\operatorname{inj}_{X_n}\ge\varepsilon\}$. For any fixed $0<r<\varepsilon$ write $v(r/2)=2\pi(\cosh(r/2)-1)$ and $M=\lfloor A/v(r/2)\rfloor$. These components are compact and satisfy $Z_n\subset\overline B_{X_n}(x_n,2r(M+1))$. Consequently $\liminf_n\int_{Z_n}|q_n|>0$ forces a nonzero UNSCALED limit $q$.

There is no fixed-genus or finite-generation hypothesis, and no assumption of convergence of the entire thick component, of its topology, or of total quadratic mass. The conclusion does not assert that all the mass $B$ survives.

## Facts & Assumptions

**Given:** AC, the pointed Fuchsian sequence, positive base injectivity bound and globally bounded quadratic integrals, and the extra bounded-radius sets or area bound only for the corresponding conclusions.

[A1] AC and its consequence Countable Choice are [[def-axiom-of-choice]] and [[def-countable-choice]]. They authorize subsequences and finite and countable chart selections and the measurable suppliers below.

[F1] The actual thick-pointed theorem constructs a discrete torsion-free limit $\Gamma$, with eventual injectivity of each fixed precompact $\Gamma$-injective lifted chart, exact quotient overlap convergence and asymptotic separation. Every finite limit of elements of $\Gamma_n$ belongs to $\Gamma$, and every element of $\Gamma$ has approximants in $\Gamma_n$. It also constructs smooth compact-neighborhood embeddings converging in all derivatives in those charts. [[thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases]]

[F2] Quotient distance is the attained infimum of orbit distances, the quotients are proper, and injectivity radius is half the least nontrivial displacement and is continuous. Balls of radius below the point's injectivity radius project injectively from model balls and have model volume. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]] The model metric is $y^{-2}|dz|^2$; in hyperbolic polar coordinates it is $dt^2+\sinh^2t\,d\theta^2$. Thus a radius-$s$ disc has area $v(s)=2\pi(\cosh s-1)$. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

[F3] Cauchy's circle formula and all its derivative formulas hold on interior circles. A locally bounded sequence of holomorphic functions has a locally uniformly convergent subsequence, under AC. [[thm-cauchy-integral-formula-circle]], [[thm-cauchy-integral-formula-higher-derivatives]], [[thm-montel-theorem-for-holomorphic-functions]]

[F4] Under Countable Choice, measurable change of variables and completed Tonelli–Fubini apply. For $q=f(z)dz^2$, its conformally invariant nonnegative measure is $|f(z)|\,dx\,dy$; this transformation rule follows from the real Jacobian $|h'|^2$ of a holomorphic coordinate change. Monotone convergence applies to increasing exhaustions of these measures. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-monotone-convergence-for-the-integral]]

## Proof

1.1 Apply [F1] and fix the resulting subsequence and limit group. We first prove faithful bounded-radius chart capture, which is stronger than the existence of smooth compact-region embeddings alone. Every point of $\overline B_{X_n}(x_n,R)$ has a representative in the fixed compact model ball $K_R=\overline B_H(i,R)$, because the orbit-distance infimum is attained by [F2]. At every $z\in K_R$, choose a small Euclidean disc $U_z\Subset H$ containing $z$ whose projection under $\Gamma$ is injective on a neighborhood of its closure. This is possible by the free proper action. A finite collection $U_1,\ldots,U_s$ covers $K_R$. By [F1], each of these projections is eventually injective for $\Gamma_n$ on a neighborhood of the same closure. Thus the $\pi_n(U_j)$ are actual uniformly defined charts and cover the WHOLE radius-$R$ quotient ball for large $n$. Equivalently, any sequence of bounded-distance points has lifts in $K_R$ with a convergent subsequence, and a fixed limit chart contains those lifts eventually. No conclusion about exhaustion follows merely from smooth forward embeddings; it follows here from these compact model lifts. [A1, F1, F2, given, construct, algebra]

2.1 Lift $q_n$ to $f_n(z)dz^2$ on $H$. For every fixed precompact disc $U$ with $\Gamma$-injective closure, eventual injectivity for $\Gamma_n$ and [F4] give $\int_U|f_n|\le B$. For a holomorphic function $f$ on a neighborhood of a closed Euclidean disc $\overline D(z,s)$, the Cauchy formula [F3] gives $$|f(z)|\le\frac1{2\pi}\int_0^{2\pi}|f(z+\rho e^{i\theta})|\,d\theta\quad(0<\rho\le s).$$ Multiply by $2\pi\rho$ and integrate $0<\rho<s$. Polar change of variables and Tonelli [F4] yield $$|f(z)|\le\frac1{\pi s^2}\int_{D(z,s)}|f|.$$ Consequently on each compact subdisc of $U$ the $f_n$ are uniformly bounded. Every compact set of $H$ is covered by finitely many smaller such discs, so the sequence is locally bounded on the WHOLE common domain $H$. Discarding finitely many initial terms in any one local estimate has no effect on local boundedness, since those finitely many holomorphic functions are bounded on that compact set as well. [F1, F3, F4, given, construct, algebra]

3.1 Apply Montel [F3] on $H$ to obtain $f_n\to f$ locally uniformly, with $f$ holomorphic. Cauchy's higher derivative formulas imply convergence of every derivative on smaller compact sets: use a slightly larger fixed circle and estimate the integral of $f_n-f$. For every $\gamma\in\Gamma$ choose approximants $\gamma_n\in\Gamma_n$. Since $\gamma_n$ and their derivatives converge on compact subsets of $H$, the automorphy identity $$f_n(\gamma_nz)\gamma_n'(z)^2=f_n(z)$$ passes to $f(\gamma z)\gamma'(z)^2=f(z)$. Thus $f(z)dz^2$ descends to a holomorphic quadratic $q$ on $X$. In the actual quotient charts convergence is precisely the local convergence of these coefficients and all derivatives. This also gives convergence of their pullbacks under the smooth compact-region embeddings from [F1], by their smooth coordinate convergence; no claim that those embeddings are holomorphic is needed. [A1, F1, F3, step 2.1, construct, algebra]

4.1 We check that $q$ is integrable with norm at most $B$, rather than assuming mass continuity. Use the open Dirichlet interior $D^\circ$ for $\Gamma$ based at $i$. As proved in [F1], its boundary is a countable locally finite union of geodesic pieces and has hyperbolic and Euclidean area zero, and its translates cover $H$ modulo that null boundary. Hence $\int_X|q|=\int_{D^\circ}|f|$ by [F4]. On every compact $K\subset D^\circ$, the projection $\pi_n$ is injective for sufficiently large $n$: a contrary sequence of identifications has compact matrix subsequence by proper model frames, whose nonidentity limit would identify two points of $K$ under $\Gamma$; the uniform base displacement excludes an identity limit. These are exactly the compact-interior arguments in [F1]. Thus $\int_K|f_n|\le B$. Uniform convergence on $K$ and its finite Euclidean area imply $\int_K|f|\le B$. Exhaust $D^\circ$ by increasing compact sets and apply monotone convergence [F4] to obtain $\int_X|q|\le B$. Only this inequality, not equality or absence of escaping mass, has been proved. [F1, F2, F4, step 3.1, construct, algebra]

5.1 Let $E_n$ lie in the fixed radius-$R$ ball and have the assumed positive mass. Take the finite precompact discs $U_j$ from step 1.1. If $q=0$, its lifted coefficient $f$ vanishes, so $f_n\to0$ uniformly on each $\overline U_j$. Using the actual injective charts and [F4], $$\int_{E_n}|q_n|\le\sum_{j=1}^s\int_{\pi_n(U_j)}|q_n|=\sum_{j=1}^s\int_{U_j}|f_n|\longrightarrow0.$$ Every $U_j$ has fixed finite Euclidean area, so the last limit follows directly from uniform convergence. This contradicts the positive lower bound. Thus $q\ne0$. This argument does not presume a nonzero projective limit or a bounded projective scale; it proves the needed unscaled nonvanishing from faithful compact capture. [F4, step 1.1, step 3.1, given, algebra]

6.1 We prove the uniform thick-component radius estimate in an individual surface $X_n$ and then use it uniformly. Let $Z$ be any nonempty connected component of the closed set $\{\operatorname{inj}\ge\varepsilon\}$ in a proper quotient of total area at most $A$. It is closed, since a component of a closed set is closed. Fix $0<r<\varepsilon$. Greedily choose centers in $Z$ separated by at least $r$, stopping when no additional such center exists. Their open quotient balls of radius $r/2$ are pairwise disjoint by the triangle inequality. Each center has injectivity radius at least $\varepsilon$, so [F2] makes its radius-$r/2$ ball an embedded model disc of area $v(r/2)>0$. There can be at most $M=\lfloor A/v(r/2)\rfloor$ centers. Thus the selection stops after a finite nonzero number $s\le M$; it cannot require an infinite maximality principle. Its open radius-$r$ balls cover $Z$, because otherwise one could add a center at distance at least $r$ from all previous ones. [A1, F2, F4, given, construct, algebra]

7.1 The nerve of this finite RELATIVE open cover of $Z$ is connected: a partition of its vertices into two nonempty collections with no intersection on $Z$ would partition the connected set $Z$ into two disjoint nonempty relatively open subsets. Each cover member is nonempty since it contains its center. Whenever two cover members meet, their centers have distance less than $2r$. A simple path in the finite connected nerve uses at most $s-1$ edges. Given two points of $Z$, choose cover members containing them, connect the centers along such a path and include the two end segments of length less than $r$. Their ambient distance is less than $2rs\le2rM$ and in particular at most $2r(M+1)$. Thus for any prescribed $x\in Z$, $$Z\subset\overline B_X(x,2r(M+1)).$$ Since $Z$ is closed and the ambient quotient is proper, it is compact. Notice that neither path connectedness of the closed thick set nor an intrinsic length bound for paths constrained to it was assumed; connectedness of the finite relative cover suffices for this ambient-distance conclusion. [F2, step 6.1, given, algebra]

8.1 Apply steps 6.1 and 7.1 to $Z_n$ with the common $A,\varepsilon,r$. The same finite $R=2r(M+1)$ bounds all their quotient distances from $x_n$. Each $Z_n$ is compact, hence measurable. If $\liminf\int_{Z_n}|q_n|>0$, choose any positive lower constant smaller than that liminf and apply step 5.1 with $E_n=Z_n$. The unscaled limit from step 3.1 is nonzero and has norm at most $B$ by step 4.1. This establishes the asserted missing normalization implication for thick components. It asserts neither that $Z_n$ converges to one particular limiting thick component nor that it carries all the original quadratic mass. [step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, given, algebra] ∎

## Actual reading and remaining scope

The full actual thick-pointed atlas theorem, arbitrary-quotient local thin and model proofs, Cauchy circle and higher-derivative formulas, Montel theorem, measurable change-of-variables, completed Tonelli–Fubini, and monotone convergence proofs were read in full during this development. The actual source Theorem 11.1 proof and Appendix A.1–A.4 were read in full; projective compactness alone was not substituted for the unscaled nonvanishing argument supplied above.

This removes the unproved scale-normalization step for any bounded-area thick component carrying positive pushforward mass. Construction and transport of flat nets, limiting thick-component topology, and topological identification and uniform expansion of the lifted nonamenable graph components still have to be supplied before the full amenable-mass/general gluing alternative follows. No global norm-continuity or mass-tightness theorem is imported.
