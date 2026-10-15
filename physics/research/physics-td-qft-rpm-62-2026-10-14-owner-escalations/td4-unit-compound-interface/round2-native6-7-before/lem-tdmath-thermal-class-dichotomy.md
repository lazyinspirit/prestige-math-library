---
id: lem-tdmath-thermal-class-dichotomy
kind: lemma
title: Thermal classes either fill the domain or split an adiabat
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 11
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-thermal-contact-hypotheses, lem-tdmath-convex-function-local-lipschitz, thm-tdmath-forward-boundary-graph, thm-tdmath-reference-strip-gluing, thm-tdmath-additive-entropy-representation, thm-heine-borel-rn, thm-tdmath-sector-nesting]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
  lem-tdmath-convex-function-local-lipschitz: mathematical-premise
  thm-tdmath-forward-boundary-graph: mathematical-premise
  thm-tdmath-reference-strip-gluing: mathematical-premise
  thm-tdmath-additive-entropy-representation: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-tdmath-sector-nesting: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 4.6, pp. 56–57"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement

Let $\Gamma\subset\mathbb R^{n+1}$ be a simple domain satisfying the forward-sector hypotheses and T1–T4. Let $S$ be the additive extensive entropy supplied by [[thm-tdmath-additive-entropy-representation]] after CH for its finite scaled products is proved by [[thm-tdmath-reference-strip-gluing]]. Then either all pairs of states in $\Gamma$ are thermally equivalent, or there are $x,y$ on one entropy level (equivalently, one adiabat $\partial A_x$ by [[thm-tdmath-sector-nesting]]) with $x\not\sim_T y$.

## Facts & Assumptions

**Given:** The same-type accessibility relation, the thermal relation, the hypotheses in the Statement, and the current entropy representation.

[A1] [[def-tdmath-forward-sector-hypotheses]]: A1–A7 and S1–S3 hold; the sector theorem fixes the positive energy orientation.

[A2] [[def-tdmath-thermal-contact-hypotheses]]: T1–T4 hold and thermal equivalence is transitive.

[F1] [[thm-tdmath-reference-strip-gluing]]: every equal-mass finite compound comparison of this simple type is complete.

[F2] [[thm-tdmath-additive-entropy-representation]]: under that comparison property, an additive extensive entropy represents every same-type finite-compound comparison.

[F3] [[thm-tdmath-forward-boundary-graph]]: at fixed work coordinate, accessibility is ordered by energy; sector boundaries are the stated graphs.

[F4] [[lem-tdmath-convex-function-local-lipschitz]]: a finite concave entropy is continuous on the open domain.

[F5] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F6] [[thm-tdmath-sector-nesting]]: a boundary point $y\in\partial A_x$ has $A_y=A_x$; strict accessibility is interior membership. Together with [F2], this identifies entropy levels with sector boundaries.

## Proof

1.1 Apply [F2] using [F1]. The convex-combination access hypothesis in [A1] and additivity imply concavity: for $0<t<1$, accessibility of $(tx,(1-t)y)$ to $tx+(1-t)y$ gives $tS(x)+(1-t)S(y)\le S(tx+(1-t)y)$. By [F3], $S$ is strictly increasing in energy at fixed work coordinate. [A1, F1, F2, F3]

1.2 Fix a work coordinate $v$ and let $J_v:=\{u:(u,v)\in\Gamma\}$, an open interval. The restriction $s_v(u)=S(u,v)$ is finite, concave, continuous by [F4], and strictly increasing by [F3]. For an interior $u$, concavity makes the right secant slopes nonincreasing as the secant endpoint moves right, and the left secant slopes monotone as the endpoint approaches $u$; hence the one-sided derivative limits $s'_{v,+}(u)$ and $s'_{v,-}(u)$ exist. Choose $a<u<b$ in $J_v$: the secants to $a,b$ bound those limits, so they are finite, and concavity gives $s'_-\ge s'_+$. Monotonicity gives nonnegative slopes. If $s'_+(u)=0$, then for every $z>u$ concavity bounds $(s_v(z)-s_v(u))/(z-u)\le s'_+(u)=0$, contradicting strict increase. Thus $s'_-\ge s'_+>0$. Define $\Theta(u,v)=[1/s'_{v,-}(u),1/s'_{v,+}(u)]$, a nonempty compact interval of positive finite reciprocal slopes. [A1, F3, F4, algebra]

1.3 Suppose the second alternative fails, so each adiabat contains one thermal-equivalence class. By [F1]–[F2], $A_x=\{y:S(y)\ge S(x)\}$. Continuity of $S$ and strict increase in energy at fixed work coordinate imply that every point with $S=\sigma$ has arbitrarily nearby points with larger and smaller entropy; hence each entropy level $E_\sigma=\{x:S(x)=\sigma\}$ is a forward-sector boundary. The supposition makes each $E_\sigma$ lie in one thermal class. Let $R=S(\Gamma)$ and, for each thermal class $C_\alpha$, put $R_\alpha=\{S(x):x\in C_\alpha\}$. These sets partition $R$: two distinct classes cannot share a level under the supposition. The range $R$ is an interval, since any two points of the convex domain are joined by a segment and the continuous entropy takes every intermediate value along it. [A1, A2, F1, F2, F3, F4, F6]

2.1 Fix $x=(u_1,v_1)$ and $y=(u_2,v_2)$ of this same simple type, and let $U=u_1+u_2$. The admissible energy splits form the open interval $D=\{w:(U-w,v_1)\in\Gamma,\ (w,v_2)\in\Gamma\}$, which contains $u_2$. Define $g(w)=s_{v_1}(U-w)+s_{v_2}(w)$. For the join state $J(x,y)$, T2 gives an admissible split $q$ whose pair is reversible with the join. For every other split $p$, T1 gives $p\prec J(x,y)\prec q$, so $p\prec q$. The pair states $p,q$ are finite compounds of two copies of this same simple type; [F1]–[F2] and their entropy representation therefore give $g(p)\le g(q)$. Thus $q$ maximizes $g$. If the initial split $x,y$ is reversible with the join, it is equivalent to $q$; entropy representation gives equal entropy, so it too maximizes $g$. Conversely, if $u_2$ maximizes $g$, then $g(u_2)=g(q)$, and [F1]–[F2] make the initial pair reversible with $q$; composing with $q\sim J(x,y)$ shows $x\sim_T y$. For a concave function at an interior point, maximality is equivalent to $g'_+(u_2)\le0\le g'_-(u_2)$: right secants are bounded above by the right derivative and left secants below by the left derivative. Here
$g'_+(u_2)=-s'_{v_1,-}(u_1)+s'_{v_2,+}(u_2),\qquad
g'_-(u_2)=-s'_{v_1,+}(u_1)+s'_{v_2,-}(u_2).$
The two inequalities are exactly $s'_{v_1,+}(u_1)\le s'_{v_2,-}(u_2)$ and $s'_{v_2,+}(u_2)\le s'_{v_1,-}(u_1)$, which say the positive slope intervals intersect; reciprocal reverses their endpoints, so this is equivalent to $\Theta(x)\cap\Theta(y)\ne\varnothing$. [A1, A2, F1, F2, step 1.2]

3.1 Let $T_\alpha$ be one thermal class. The compact intervals $\Theta(x)$, $x\in T_\alpha$, pairwise intersect by step 2.1. For any finite subfamily, pairwise intersection implies common intersection: the largest left endpoint is no greater than the smallest right endpoint, since the intervals attaining those two endpoints intersect. Fix $x_0\in T_\alpha$; the sets $\Theta(x)\cap\Theta(x_0)$ are closed subsets of the compact interval $\Theta(x_0)$ and have the finite-intersection property. Compactness [F5] gives a common point, so $I_\alpha:=\bigcap_{x\in T_\alpha}\Theta(x)$ is a nonempty compact interval. If distinct classes had intersecting common intervals, representatives $x,y$ would have intersecting $\Theta$ intervals and would be thermally equivalent by step 2.1, a contradiction. Thus the intervals $I_\alpha$ for distinct classes are disjoint and strictly ordered on the real line; use this as the order of the classes. [A2, F5, step 2.1]

4.1 For each work coordinate $v$, strict continuity of $s_v$ maps the open interval $J_v$ onto an open interval $R_v\subset R$. On $R_v$, the level-to-class map is nondecreasing: as $u$ increases, concavity makes both one-sided slopes nonincreasing, so both endpoints of $\Theta(u,v)$ are nondecreasing. If two such intervals $\Theta$ are disjoint, monotonicity of both endpoints forces the earlier interval to lie strictly below the later one; by step 3.1, this is the class order. The local class maps agree on overlaps of $R_v$ because each entropy level lies in one class. The open intervals $R_v$ cover $R$. Any compact subinterval of $R$ has a finite subcover by these intervals by [F5]; its intersection graph is connected, since otherwise the connected subinterval would be split into two disjoint nonempty relatively open sets. Chaining the local orders through overlaps proves that the class map is nondecreasing on all of $R$. [A1, F3, F4, F5, step 1.2, step 1.3, step 3.1]

5.1 Fix $\sigma\in R_\alpha$ and $x\in E_\sigma$. T4 gives $x_0\prec\prec x\prec\prec x_1$ with $x_0\sim_T x_1$. Entropy representation gives $S(x_0)<\sigma<S(x_1)$, and their levels belong to the same class $R_\alpha$. The global nondecreasing order from step 4.1 forces every level between them, including an open neighborhood of $\sigma$, into $R_\alpha$. Thus each class set is open in the interval $R$. Since these disjoint open sets partition connected $R$, only one nonempty class exists. Under the supposition, all states are thermally equivalent, proving the dichotomy. [A2, F2, step 4.1] ∎
