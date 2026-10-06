---
id: lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged
kind: lemma
title: "Critical values of disjoint trajectory closures can be interchanged"
status: published
origin: pipeline
dependency_level: 2
deps: [def-morse-function-adapted-to-a-cobordism, def-stable-and-unstable-sets-of-a-critical-point, def-morse-trajectory-from-p-to-q, thm-fundamental-theorem-on-flows, thm-regular-interval-diffeomorphism, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, def-morse-function-and-excellent-morse-function, def-countable-choice, lem-increasing-reparametrization-of-finitely-many-critical-levels]
justified_by: []
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
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Theorem 4.1 and Extension 4.2, printed pp. 37–39"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "separating bump transported along trajectories"
---


## Statement

Assume $\mathrm{AC}_\omega$. Let $(f,X)$ be adapted on a compact triad, and choose regular $0<u<c<c'<v<1$ such that the critical set in $K=f^{-1}[u,v]$ consists exactly of finite clusters $P,Q$ at values $c,c'$. Suppose there is no $X$-trajectory from a point of $Q$ to a point of $P$. Then for any $a,a'\in(u,v)$, including $a>a'$ or $a=a'$, there is an adapted Morse $g$ with the same critical points and indices as $f$, $g=a$ on $P$, $g=a'$ on $Q$, and $X$ still downward gradient-like for $g$. The function is $f$ outside the interior of $K$ and near its two end levels, and is $f$ plus a constant near every critical point. On a triad with just these two critical clusters, one may also use its face levels as $u,v$.

## Facts & Assumptions

[F1] [[def-morse-function-adapted-to-a-cobordism]] gives strict descent and the exact linear Morse-chart flow, with trajectories stopped on exiting a face.

[F2] [[thm-fundamental-theorem-on-flows]] gives unique smooth flow; [[thm-regular-interval-diffeomorphism]] gives finite regular-level transport.

[F3] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] separates disjoint compact subsets of a regular level by a smooth function.

[F4] [[lem-increasing-reparametrization-of-finitely-many-critical-levels]] supplies increasing interval diffeomorphisms fixed near endpoints and equal to translations near specified interior nodes.

## Proof

**Given:** The regular band, the two clusters with no connecting trajectory, and $a,a'\in(u,v)$.

1.1 Any trajectory staying in $K$ indefinitely at one end converges to a critical point. Indeed $f$ is monotone and bounded; if an accumulation point were regular, a small flow neighbourhood with $-df(X)$ bounded below would cause a fixed positive decrease on each repeated passage, contradicting convergence of its values. Thus all accumulation points are critical. The accumulation set is connected, being the intersection of nested connected closures of trajectory tails in compact $K$, and the critical set is finite, so it is a singleton. Otherwise the trajectory exits through an end level in finite time by regular continuation. Let $K_P,K_Q$ consist of all points on trajectories having an end in the respective cluster, including the critical points and their boundary exits. The absence of connections implies they are disjoint. [F1, F2, given, algebra]

2.1 These trajectory sets are compact. Choose disjoint small Morse blocks about the finitely many points. Outside the blocks $-df(X)$ has a positive lower bound, so the total travel time there is bounded by the value width divided by that bound. A limit of trajectories with an end in a cluster either follows the same finite regular pieces or spends unbounded time in a Morse block. In the latter case the equations $u(t)=e^{2t}u(0)$, $v(t)=e^{-2t}v(0)$ give a broken trajectory with an end at that block's critical point. A break connecting different clusters is excluded; a nonconstant break within one cluster is excluded by equal critical values and strict descent. Thus the limiting point is on a trajectory with an end in the same cluster. This proves closedness in compact $K$. The same equations show that regular trajectories approaching $K_P$ have lower-level exits approaching $K_P\cap f^{-1}(u)$, and similarly for $Q$: a passage near a stable disk exits near the local unstable sphere, whose subsequent regular transport is continuous. At a local minimum with empty unstable sphere, a neighbourhood instead has its forward endpoint at that minimum and contains no through-trajectory. [F1, F2, step 1.1, algebra]

3.1 On the lower regular level choose a smooth $b$ equal to zero near $K_P\cap f^{-1}(u)$ and one near $K_Q\cap f^{-1}(u)$ by [F3]; empty subsets impose no condition. Every trajectory outside $K_P\cup K_Q$ goes between the two end levels by step 1.1. Let $\sigma$ assign its lower-level exit, a smooth map by transverse hitting-time inversion and [F2]. Define $\beta=b\circ\sigma$ there, and set $\beta=0$ on $K_P$, $\beta=1$ on $K_Q$. Step 2.1 and the constant neighbourhood values of $b$ imply that this extension is constant on a neighbourhood of each critical trajectory set, hence smooth. It is constant along every trajectory by construction, so $d\beta(X)=0$. This is the orbit extension used in Milnor’s preliminary rearrangement theorem and its finite-cluster extension, pp. 37–39; an arbitrary spatial cutoff would not have this property. [F2, F3, step 1.1, step 2.1, construct]

4.1 Rescale [F4] from $[0,1]$ to $[u,v]$ and obtain increasing $\phi_0,\phi_1$ fixed near $u,v$, with $\phi_0(s)=s+a-c$ near $c$ and $\phi_1(s)=s+a'-c'$ near $c'$. Their supports may span both critical values. Put $G(s,t)=(1-t)\phi_0(s)+t\phi_1(s)$ and $g=G(f,\beta)$ on $K$, extended by $f$ outside. The identity near the end levels makes this extension smooth. [F4, step 3.1, construct]

5.1 Since $\partial_sG>0$ and $d\beta(X)=0$, $dg(X)=(\partial_sG)df(X)<0$ off the critical set. Near $P$ the function is $f+a-c$, and near $Q$ it is $f+a'-c'$; consequently the Hessians, indices and exact local field models are unchanged. No new critical point occurs, and all other critical neighbourhoods and the boundary are unchanged. The image of $G$ stays in $[u,v]$, preserving endpoint fibres of the original adapted function, and the same complete collar carrier supplies $X$. [F1, step 3.1, step 4.1, algebra] ∎
