---
id: "thm-hopf-rinow"
kind: "theorem"
title: "Hopf–Rinow theorem"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","def-countable-choice","def-riemannian-distance-on-a-connected-manifold","thm-riemannian-distance-is-a-metric","def-complete-metric-space","def-geodesically-complete-riemannian-manifold","def-domain-and-exponential-map-of-a-connection","thm-metric-completeness-implies-geodesic-completeness","lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain","def-metric-bounded-diameter","def-metric-ball","thm-metric-open-set-algebra","thm-coordinate-derivations-form-a-basis-of-the-tangent-space","thm-gram-schmidt-orthonormalisation","def-metric-topology","cor-heine-borel-in-the-product-topology","thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth","thm-compactness-under-continuous-maps","thm-closed-subspace-of-a-compact-space-is-compact","lem-metric-cauchy-bounded","thm-compactness-agrees-with-metric-compactness","thm-compact-implies-complete-and-totally-bounded"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 19.2.1 and proof, pp.141--144
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    - title: Ben Andrews, Geodesics and Completeness, Theorem 11.5.1 and proof, printed pp.106--108
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "equivalence cycle"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g)$ be a **nonempty**, connected,
boundaryless Riemannian manifold, and let $d=d_g$ be its Riemannian distance.
The following conditions are equivalent.

1. The metric space $(M,d)$ is complete.
2. The Riemannian manifold $(M,g)$ is geodesically complete.
3. For every $p\in M$, the fibre exponential domain is all of the tangent
   space: $\mathcal E_p=T_pM$.
4. There is a point $p_0\in M$ for which $\mathcal E_{p_0}=T_{p_0}M$.
5. Every closed bounded subset of the metric space $(M,d)$ is compact.

Whenever these conditions hold, every $x,y\in M$ are joined by a minimizing
geodesic. More exactly, there is $v\in T_xM$ with
$$
\exp_x(v)=y,\qquad |v|_{g_x}=d(x,y),
$$
and $t\mapsto\exp_x(tv)$ on $[0,1]$ has length $d(x,y)$.

The nonemptiness hypothesis is essential for this formulation: on the empty
manifold conditions 1--3 and 5 are vacuous, whereas condition 4 is false.

## Facts & Assumptions

**Given:** The manifold and distance in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$. [[rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow]] explains why the boundaryless hypothesis is required.

[F1] [[def-riemannian-distance-on-a-connected-manifold]] defines the finite distance $d$, and [[thm-riemannian-distance-is-a-metric]] supplies its metric axioms.

[F2] Under [A1], [[def-geodesically-complete-riemannian-manifold]] says that every maximal geodesic has domain $\mathbb R$, while [[def-domain-and-exponential-map-of-a-connection]] says that $v\in\mathcal E_p$ exactly when the maximal geodesic with initial vector $v$ is defined at time $1$.

[F3] Under [A1], [[thm-metric-completeness-implies-geodesic-completeness]] proves condition 1 implies condition 2. Under the same assumption, [[lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain]] says that a global fibre exponential map reaches each point of the basepoint's component by a radial minimizing geodesic whose initial norm equals the Riemannian distance.

[F4] [[def-metric-bounded-diameter]] defines a bounded subset as either empty or contained in some open ball. [[def-metric-ball]] defines open and closed balls, and [[thm-metric-open-set-algebra]] makes every closed ball closed.

[F5] At a point of positive-dimensional $M$, [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]] and [[thm-gram-schmidt-orthonormalisation]] give orthonormal linear coordinates on its tangent space. [[def-metric-topology]] and [[cor-heine-borel-in-the-product-topology]] then make every closed norm ball there compact. In dimension zero such a tangent ball is the singleton $\{0_p\}$ and is compact directly.

[F6] Under [A1], [[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]] makes each fibre exponential map continuous on its domain. [[thm-compactness-under-continuous-maps]] makes the image of a compact set compact, and [[thm-closed-subspace-of-a-compact-space-is-compact]] makes a closed subset of that compact image compact.

[F7] [[lem-metric-cauchy-bounded]] puts the range of a Cauchy sequence inside an open ball. [[thm-compactness-agrees-with-metric-compactness]] identifies topological compactness with metric compactness for a metric subspace, and [[thm-compact-implies-complete-and-totally-bounded]] makes that subspace complete, without any additional choice principle.

## Proof

**Proof technique:** equivalence cycle.

1.1 Condition 1 implies condition 2 by [F3]. [F3]

1.2 Suppose condition 2 holds. For $p\in M$ and $v\in T_pM$, [F2] gives $I_{p,v}=\mathbb R$, so in particular $1\in I_{p,v}$ and hence $v\in\mathcal E_p$. Thus $T_pM\subseteq\mathcal E_p$; the reverse inclusion is part of the definition, so $\mathcal E_p=T_pM$. Since $p$ was arbitrary, condition 3 holds. [F2]

1.3 Suppose condition 3 holds. Nonemptiness supplies one point $p_0\in M$, and condition 3 at that one point gives $\mathcal E_{p_0}=T_{p_0}M$. Thus condition 4 holds. This instantiates one existential statement and makes no family of choices. [given]

1.4 Suppose condition 4, and fix such a $p_0$. Let $S\subseteq M$ be closed and bounded. If $S=\varnothing$, every open cover has the empty finite subcover, so $S$ is compact. Suppose instead that $S\ne\varnothing$. By [F4] there are $a\in M$ and $r>0$ such that $S\subseteq B(a,r)$, and put $$ R=d(p_0,a)+r>0, \qquad K_R=\{v\in T_{p_0}M:|v|_{g_{p_0}}\le R\}. $$ For $q\in S$, the triangle inequality gives $d(p_0,q)\le d(p_0,a)+d(a,q)<R$. [F1, F4]

1.5 If $\dim M>0$, identify $T_{p_0}M$ with $\mathbb R^n$ by one orthonormal basis from [F5]. The identity $|\sum_i u^ie_i|^2=\sum_i(u^i)^2$ identifies $K_R$ with the Euclidean closed ball of radius $R$, which is closed and bounded and therefore compact by [F5]. If $\dim M=0$, then $T_{p_0}M=\{0_{p_0}\}$ and $K_R$ is a singleton; given an open cover, any member containing its sole point is a one-member finite subcover. Thus $K_R$ is compact in every dimension. [F5]

1.6 Suppose condition 5, and let $(x_k)$ be a Cauchy sequence in $(M,d)$. By [F7] there are $c\in M$ and $r>0$ such that every $x_k$ lies in $B(c,r)$. Put $C=\bar B(c,r)$. It is closed by [F4], and it is bounded because $C\subseteq B(c,r+1)$. Hence condition 5 makes $C$ compact. [F4, F7]

1.7 The theorem assumes $\mathrm{AC}_\omega$ because the maximal-geodesic and radial-minimizer facts [F2] and [F3] use the global geodesic construction under that assumption. [A1, F2, F3]

1.8 The smooth exponential-map fact [F6] inherits the same $\mathrm{AC}_\omega$ assumption and introduces no stronger choice principle. [A1, F6]

2.1 For this fixed $q$, [F3] supplies a vector $v_q\in T_{p_0}M$ with $\exp_{p_0}(v_q)=q$ and $|v_q|_{g_{p_0}}=d(p_0,q)<R$. Hence $q\in\exp_{p_0}[K_R]$. Since $q$ was arbitrary, $$S\subseteq\exp_{p_0}[K_R].$$ This pointwise use of an existential theorem proves an inclusion; it does not construct or use a choice function $q\mapsto v_q$. [F3, step 1.4]

2.2 By [F7], the metric subspace $(C,d|_{C\times C})$ is a compact metric space and therefore complete. The sequence $(x_k)$ is Cauchy in this subspace, because all its terms lie in $C$ and the subspace distance is the same $d$. It consequently converges to some $x\in C$ in the subspace metric, hence also in $(M,d)$. Every Cauchy sequence in $M$ converges in $M$, so condition 1 holds. [F7, step 1.6]

3.1 The map $\exp_{p_0}$ is continuous on all of $T_{p_0}M$ by condition 4 and [F6], so $H_R:=\exp_{p_0}[K_R]$ is compact. Since $S$ is closed in $M$, it is closed in the subspace $H_R$; steps 2.1 and 1.5 and [F6] therefore make $S$ compact. The closed bounded set $S$ was arbitrary, so condition 5 holds. [F6, step 2.1, step 1.5]

4.1 Steps 1.1--3.1 and 1.6--2.2 prove the cycle $$1\Longrightarrow2\Longrightarrow3\Longrightarrow4 \Longrightarrow5\Longrightarrow1,$$ so all five conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 2.1, step 2.2, step 3.1]

5.1 Assume any one of the equivalent conditions and fix $x,y\in M$. Condition 3 then holds, so $\mathcal E_x=T_xM$. Because $M$ is connected, the component of $x$ is all of $M$, and [F3] supplies $v\in T_xM$ with the stated endpoint, norm, length, and global minimizing properties. This proves the final assertion. [F3, step 4.1]

5.2 Step 1.4 treats the empty closed bounded subset separately and keeps every ball radius positive; step 1.5 uses the closed tangent-ball endpoint. Both directions of the equivalence are present in the cycle. [F4, F5, step 1.4, step 1.5, step 4.1]

6.1 Nonemptiness was used exactly at step 1.3 and is indispensable for the displayed equivalence, as the statement's empty-manifold comparison shows. A nonempty connected zero-manifold is a singleton: its zero-dimensional charts make points open, and a discrete connected nonempty space has one point. All five conditions then hold and step 5.1 gives the constant minimizing geodesic. The proof in dimension one is unchanged. At $x=y$, [F3] supplies $v=0_x$, so no division by a distance occurs. [F2, F3, step 1.3, step 5.1]

7.1 The finite-dimensional and topological compactness facts in [F5]--[F7] require no additional choice. The constructions in steps 1.4--3.1 use only fixed existential witnesses or pointwise existential elimination, as step 2.1 makes explicit, and therefore add no countable or arbitrary selection. [F5, F6, F7, step 1.4, step 1.5, step 2.1, step 2.2, step 3.1] ∎

## Source locators

- Datar, Theorem 19.2.1 and its proof, pp.141--144: the five conditions, metric-to-geodesic completeness, radial minimizers from a global exponential fibre, and compactness of closed bounded sets.
- Andrews, Theorem 11.5.1 and its proof, printed pp.106--108: completeness, global exponential domains, and existence of minimizing radial geodesics. The properness clauses and the explicit empty-manifold qualification above are verified locally.
