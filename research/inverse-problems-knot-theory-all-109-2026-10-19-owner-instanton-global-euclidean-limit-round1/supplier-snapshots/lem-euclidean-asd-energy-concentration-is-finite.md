---
id: lem-euclidean-asd-energy-concentration-is-finite
kind: lemma
title: "Finite energy concentration for Euclidean ASD sequences"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-bolzano-weierstrass
  - lem-euclidean-asd-small-energy-curvature-bound
  - lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover
  - lem-close-su-two-cocycles-admit-constructed-sobolev-isomorphisms
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Katrin Wehrheim, Anti-self-dual instantons with Lagrangian boundary conditions, introduction, pp.3–4"
      url: "https://math.berkeley.edu/~katrin/papers/diss.pdf"
---

## Statement

Assume full AC. There is a universal number $\eta>0$ such that the following holds. Let $\Omega\subset\mathbb R^4$ be open and let $A_n$ be smooth $\mathfrak{su}(2)$ connection forms on $\Omega$ with Euclidean $F_{A_n}^+=0$ and
$$\int_\Omega|F_{A_n}|^2\le M<\infty.$$
There exist a subsequence, denoted again by $n$, and a finite set $S\subset\Omega$ with $|S|\eta\le M$ such that every $s\in S$ satisfies
$$\liminf_{n\to\infty}\int_{B_r(s)}|F_{A_n}|^2\ge\eta\quad\text{whenever }\overline B_r(s)\subset\Omega,$$
whereas the curvatures are uniformly bounded on every compact subset of $\Omega\setminus S$.

For each nonempty compact $K\subset\Omega\setminus S$, after a further subsequence depending on $K$, there is a neighborhood of $K$ with a fixed finite ball cover on which the sequence has the compatible weak Coulomb limit and continuous limit transition cocycle constructed in [[lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover]]. On a smaller neighborhood, the explicit isomorphisms of [[lem-close-su-two-cocycles-admit-constructed-sobolev-isomorphisms]] transfer these local connections to that fixed limiting cocycle while preserving weak $W^{1,2}_{\mathrm{loc}}$, strong $L^p_{\mathrm{loc}}$ for $p<4$, weak $L^2_{\mathrm{loc}}$ curvature convergence, and the weak ASD equations.

This is concentration and compact-set-local weak convergence on the complement of $S$. It asserts neither energy quantization nor a bubble tree, a limit extending across $S$, or one globally chosen limiting bundle on all of $\Omega\setminus S$.

## Statement references

[[lem-euclidean-asd-small-energy-curvature-bound|Constructed small-energy estimate]]

[[lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover|Actual finite-cover limit]]

[[lem-close-su-two-cocycles-admit-constructed-sobolev-isomorphisms|Actual transfer to fixed cocycle]]

## Facts & Assumptions

[F1] Every bounded real sequence has a convergent subsequence ([[thm-bolzano-weierstrass]]). Full AC permits a countable sequence of nested extractions ([[def-axiom-of-choice]]).

[F2] There are universal $\epsilon_0,C>0$ for which a smooth Euclidean ASD connection with $\|F\|_{L^2(B_r)}\le\epsilon_0$ has $\|F\|_{L^\infty(B_{r/2})}\le Cr^{-2}\|F\|_{L^2(B_r)}$ ([[lem-euclidean-asd-small-energy-curvature-bound]]).

[F3] There is a universal $\epsilon_1>0$ for which a fixed finite cover by Euclidean balls, with smooth local connection and transition data having curvature $L^2$ norm at most $\epsilon_1$ on each entire ball, admits the exact compatible subsequential limit stated above. The transferred maps identify the limiting cocycle and preserve all asserted convergence and ASD properties on a smaller neighborhood of any compact set ([[lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover]], [[lem-close-su-two-cocycles-admit-constructed-sobolev-isomorphisms]]).

[F4] Holder gives $\|f\|_{L^2(B)}\le |B|^{1/2}\|f\|_{L^\infty(B)}$ ([[thm-holder-inequality-for-integrals]]). Compact sets have finite subcovers.

## Proof

**Given:** The open set, Euclidean ASD sequence and total energy bound in the statement. Put $\eta=\epsilon_0^2/2$.

1.1 **One subsequence records all rational-ball energies.** List the countably many balls $B$ with rational centers and positive rational radii whose closed balls lie inside $\Omega$. Every sequence $E_n(B)=\int_B|F_{A_n}|^2$ lies in $[0,M]$. By [F1], choose nested infinite index subsequences on which these energies converge, one ball at a time. At stage $k$, take the $k$th index of the $k$th nested sequence. These indices strictly increase and eventually lie in every earlier sequence, so on the resulting single subsequence every $E_n(B)$ has a limit $E(B)\in[0,M]$. For an empty open set all conclusions are vacuous; otherwise these rational balls form a basis. [F1, given, choose, construct]

2.1 **Definition and finiteness of the concentration set.** Let $S$ consist of those $x\in\Omega$ for which $E(B)\ge\eta$ for every basis ball containing $x$. Its complement is the union of the basis balls with $E(B)<\eta$, so it is open. If $s_1,\ldots,s_k$ are distinct members of $S$, choose pairwise disjoint basis balls $B_j$ containing $s_j$ and with closed balls in $\Omega$, by first taking disjoint small neighborhoods of these finitely many points. Then $\sum_{j=1}^kE_n(B_j)\le M$, and passage to the limits gives $k\eta\le\sum_jE(B_j)\le M$. Hence $S$ has at most $\lfloor M/\eta\rfloor$ points: otherwise a finite selection of more distinct points would contradict this inequality. For any $s\in S$ and closed ball $\overline B_r(s)\subset\Omega$, choose a basis ball containing $s$ with closure inside $B_r(s)$. Monotonicity of nonnegative integrals gives $\liminf_n\int_{B_r(s)}|F_{A_n}|^2\ge E(B)\ge\eta$, as asserted. [F1, step 1.1, choose, construct, algebra]

3.1 **Uniform curvature bounds outside the set.** For $x\notin S$, choose a basis ball $B$ containing $x$ with $E(B)<\eta$. Since $E_n(B)\to E(B)$, eventually $E_n(B)<\epsilon_0^2$. Choose $\rho>0$ with $\overline B_{2\rho}(x)\subset B$. The original forms are smooth near this closed ball and its energy is no larger than $E_n(B)$, so [F2] gives $\|F_{A_n}\|_{L^\infty(B_\rho(x))}\le C(2\rho)^{-2}\epsilon_0$ for all sufficiently large $n$. The finitely many omitted smooth curvatures are bounded on $\overline B_\rho(x)$ too. Thus the bound holds for all $n$, after enlarging it. A compact subset of $\Omega\setminus S$ is covered by finitely many these neighborhoods, proving a uniform curvature bound there. [F2, F4, step 1.1, step 2.1, choose, algebra]

4.1 **An actual uniformly small finite cover near a compact set.** Fix nonempty compact $K\subset\Omega\setminus S$. Choose an open neighborhood $W$ of $K$ whose closure is compactly contained in $\Omega\setminus S$: finite sufficiently small balls centered at points of $K$ construct such a neighborhood. By step 3.1 there is $L<\infty$ with $|F_{A_n}|\le L$ on $\overline W$ for all $n$. For each $x\in K$, choose a radius $r_x>0$ with $\overline B_{r_x}(x)\subset W$ and $|B_{r_x}|^{1/2}L\le\epsilon_1$. Such radii exist since the four-dimensional ball volume tends to zero with its radius; if $L=0$ the norm condition is automatic. Finite subcover selection gives fixed balls $U_i$ covering $K$. They satisfy $\|F_{A_n}\|_{L^2(U_i)}\le\epsilon_1$ for every $i,n$ by [F4], and $A_n$ is smooth near every closed $U_i$. The original local transition maps are the identity, since these are restrictions of the same global form on $\Omega$. Thus all actual hypotheses of [F3], including a common fixed trivialization cover, are verified. [F3, F4, step 3.1, choose, construct, algebra]

5.1 **Compatible subsequential limits and fixed-cocycle transfer.** Apply the constructed finite-cover compactness theorem in [F3] to the balls and data of step 4.1. It supplies a further single subsequence for this finite cover, actual local gauges, weak $W^{1,2}$ and strong $L^p$, $p<4$, convergence of the Coulomb forms, weak $L^2$ curvature convergence and a continuous limiting cocycle with strong $W^{2,12/5}_{\mathrm{loc}}$ and uniform-on-compact transition convergence. Its limit is weakly ASD. Apply the explicit $SU(2)$ averaging isomorphisms in [F3] to this cocycle sequence and the compact set $K$. They give the smaller neighborhood, transfer to the fixed limiting cocycle, and preservation of exactly the asserted convergence. This further extraction retains every rational-ball energy limit and all properties of $S$. The construction was for the chosen compact set and asserts no unproved compatibility of separately chosen limits as $K$ varies. Full AC is inherited through [F1]–[F4]. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1, choose, construct, algebra] ∎

## Source notes

Wehrheim's discussion in the thesis introduction, printed pp.3–4/PDF pp.11–12, was read. It gives the broader bubbling and removable-singularity framework as context, not a proof premise. The finite concentration set, curvature bounds on its complement, and all compact-set-local gauge and cocycle limits here are reconstructed from the actual preceding local proofs. No quantized bubble energy, smooth global bundle extension or removable-singularity theorem is imported from that discussion.
