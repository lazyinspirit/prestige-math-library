---
id: lem-proper-unit-domain-boundary-disks-are-compact-modulo-node-fixing-affine-maps
kind: lemma
title: "Proper unit-domain boundary disks are compact modulo node-fixing affine maps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness, lem-nearly-symmetric-compact-bubble-domain-positivity-and-energy, lem-divisor-degree-additivity-and-zero-marked-strip-bubble-exclusion, lem-smooth-strip-compactness-away-from-energy-concentration, lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index]
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks, link invariants and the multi-variable Alexander polynomial"
      url: "https://arxiv.org/abs/math/0512286"
      locator: "Section5.3 boundary-degeneration compactness; the exact proper-unit-domain and marked-node normalization proof is supplied below"
---

## Statement

Assume Countable Choice. Fix a closed connected Riemann surface $\Sigma$, $m\ge1$ disjoint smooth attaching circles $\gamma_i$, and $L=q(\gamma_1\times\cdots\times\gamma_m)\subset X=\operatorname{Sym}^m(\Sigma)$. Assume their complement has at least two components $A_1,\ldots,A_k$, and fix one of them, $A_i$. Fix a metric and surface area form and the diagonal and component-divisor neighborhoods of the compact-bubble energy theorem. Let smooth autonomous nearly symmetric structures $J_n\to J_\infty$ converge smoothly with this common geometry and with the full restrictions $J_n|_L=J_\infty|_L$ fixed.

Let $v_n:\overline{\mathbb D}\to X$ be smooth holomorphic disks for $J_n$, with boundary on $L$, whose actual component domains are precisely $A_i$ with coefficient one and zero on every other $A_j$. Mark one fixed source boundary point $p$. Suppose $v_n(p)=x_n\to x\in L$. Then there are orientation-preserving conformal disk automorphisms $g_n$ fixing $p$ and a nonconstant $J_\infty$-holomorphic smooth disk $v$ of the same unit domain, with $v(p)=x$, such that after a subsequence
$$v_n\circ g_n\longrightarrow v\quad\text{in }C^\infty(\overline{\mathbb D}).$$
In an upper-half-plane coordinate with $p=\infty$, these $g_n$ are exactly positive affine maps $z\mapsto a_nz+b_n$, $a_n>0$, $b_n\in\mathbb R$. No energy bound need be imposed on the sequence separately: the fixed unit domain gives one.

For a fixed such $J$ and fixed node value $x$, if every actual disk of this domain has surjective node-fixed linearization of real Fredholm index two, then there are only finitely many of their affine orbits. This proves compactness and conditional finiteness for proper unit domains; it supplies neither that index/surjectivity assertion nor the value of the resulting count.

## Statement references

[[def-countable-choice]]

[[lem-nearly-symmetric-compact-bubble-domain-positivity-and-energy]]

[[lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index]]

## Facts & Assumptions

**Given:** The compact target geometry, fixed full boundary structure, proper unit component domain, source mark and convergent node values. Proper here means that some other attaching-system complement component is nonempty, not a map-theoretic assertion.

[F1] [[lem-nearly-symmetric-compact-bubble-domain-positivity-and-energy]] proves nonnegative compact-disk component degrees, constancy of those degrees on attaching-complement components, domain-controlled energy with common constants for a smooth convergent geometric family, and sphere domains $d\Sigma$, $d\ge0$. A zero-domain disk or zero-degree sphere is constant.

[F2] [[thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness]] gives an actual finite disk/sphere tree, smooth convergence on all cores, explicit affine rescalings in local interior or straight boundary charts, connected nodes, energy identity and constant-bubble stability. [[lem-divisor-degree-additivity-and-zero-marked-strip-bubble-exclusion]] proves exact componentwise divisor-degree additivity for this actual compact-disk conclusion, without requiring the degrees to be zero.

[F3] The complete local proof of [[lem-smooth-strip-compactness-away-from-energy-concentration]] supplies interior and fixed-boundary epsilon estimates and all higher derivative bootstrap. It applies in finitely many fixed source charts on the closed disk.

[F4] [[lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index]] constructs the actual node-fixed $H^3$ map charts, smooth finite-dimensional regular zero charts, and local positive-affine slices. At a surjective index-two node-fixed disk the zero chart is locally just its free two-dimensional affine orbit. It proves this on smooth solution families, without assuming translation differentiable on all rough Sobolev maps.

## Proof

1.1 By [F1], every $v_n$ has energy at most $C\int_{A_i}\eta$ for one common finite $C$, since all its other component degrees are zero. The hypotheses in [F2] on the fixed boundary structure hold exactly, so apply its compact-disk theorem and then degree additivity at one point in every $A_j$. Every component degree is nonnegative by [F1]. A nonconstant sphere would have degree $d\ge1$ at a point in an $A_j$ other than $A_i$, contradicting the zero total degree there. Thus every sphere component is constant. Every disk domain is a nonnegative sum $\sum b_j A_j$, and their finite sum is $A_i$. Exactly one disk component has domain $A_i$; every other disk has zero domain and is constant. That unique disk is nonconstant, since a constant disk has zero divisor degree. Any sphere subtree would have a constant leaf, violating sphere stability in [F2], so no sphere bubbles remain. A constant disk bubble, with no sphere children, has at least two disk children by its stability inequality. A finite tree of disk bubbles with only one nonconstant vertex cannot have such a vertex: choose a deepest constant branching vertex; its distinct descendant branches would each have a nonconstant leaf, giving at least two nonconstant disks. Hence there are no constant disk bubble vertices either. Consequently either the base disk is the unique nonconstant component and there are no bubbles, or the base is constant and there is exactly one nonconstant disk bubble attached directly to its boundary. [F1, F2, given, construct, algebra]

2.1 In the first case take the identity source reparametrization. In the second choose a global conformal upper-half-plane coordinate on the original disk that makes the attachment point finite. Its real-axis boundary chart is permissible in the actual [F2] rescaling proof; shrinking its fixed local neighborhood if needed leaves its estimates unchanged. The unique active bubble is given by real centers $c_n$ and positive scales $r_n\to0$, through the exact global half-plane automorphisms $\alpha_n(\zeta)=c_n+r_n\zeta$. It has no child bubbles, so the rescaled maps converge smoothly on all compact subsets of the closed half-plane, with its boundary point at infinity filled to a smooth disk. Its energy is the entire limiting energy, by [F2], because the base and all other components are constant. We must adjust the rescaling to preserve the original marked point, rather than discard its value. [F2, step 1.1, construct]

3.1 Put the original marked point $p$ at infinity in a global half-plane coordinate $z$. If the bubble attachment point is not $p$, perform step2.1 in this same coordinate. Then $\alpha_n$ fixes infinity exactly and already is an allowed $g_n$. If the bubble attaches at $p$, use instead $w=-1/z$ as the original coordinate, so that the attachment and original mark are both at $w=0$. In that coordinate write the rescaling as $w=c_n+r_n\zeta$ and set $\xi_n=-c_n/r_n\in\mathbb R$. It is the bubble-coordinate preimage of the original mark. Extract a subsequence with $\xi_n$ converging in the real projective circle. If it has a finite real limit, put $T_n(\zeta)=\xi_n-1/\zeta$; these are upper-half-plane automorphisms converging to the same expression with the limiting $\xi$. If $\xi_n$ tends to the point at infinity, put $T_n(\zeta)=\zeta/(1+\zeta/\xi_n)$, after discarding finitely many zero $\xi_n$; these converge to the identity in the automorphism group. In both cases $T_n(\infty)=\xi_n$ and the limiting $T$ is a genuine automorphism. Thus $$g_n(\zeta)=-\frac1{c_n+r_nT_n(\zeta)}$$ is an upper-half-plane automorphism taking infinity exactly to the original infinity: the inner denominator at infinity is $c_n+r_n\xi_n=0$. Its real fractional-linear matrix has positive determinant, and fixing infinity makes it a positive affine map. These are exact automorphisms of the original disk, not truncated local rescalings. The new maps converge smoothly on compact subsets away from the limiting preimage $T^{-1}(\infty)$ to the smooth nonconstant disk obtained from the active bubble by precomposition with $T$. [F2, step 2.1, construct, algebra]

4.1 The convergence just obtained is in fact smooth on the entire closed disk, including the marked point and the possible remaining exceptional point. Denote the new maps by $u_n=v_n\circ g_n$ and their smooth filled active limit by $v$. Conformal invariance and [F2] give $$\lim_nE_g(u_n)=E_g(v).$$ Around a possible exceptional source point choose a small disk or boundary half-disk $B_\rho^{(+)}$, whose annular boundary avoids the finite exceptional set. Smooth convergence on its compact complement gives $$\lim_nE_g(u_n;B_\rho^{(+)})=E_g(v;B_\rho^{(+)}),$$ using the total energy identity; the energy of its boundary has measure zero, and convergence on annuli extends the identity to a chosen small radius. The right side tends to zero with $\rho$. Choose it below the epsilon threshold in [F3]. Then for all sufficiently large $n$ the epsilon estimate gives a common first derivative bound on a smaller neighborhood of that point, and its actual higher bootstrap supplies all derivative bounds up to a physical boundary as well. Compact target extraction and a countable derivative diagonal give smooth convergence there to the already determined limit, whose extension is unique by continuity off the point. This proves global $C^\infty$ convergence. In particular the exact identities $u_n(p)=x_n$ give $v(p)=x$ even if the active bubble formed at that mark. Relative divisor degrees are invariant under these source automorphisms and pass to the smooth limit by [F2], so $v$ has domain $A_i$. [F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Now fix $J,x$ and impose the last actual linearization hypothesis. The domain $A_i$ is locally constant on the smooth solution family, since its finite integer divisor degrees are continuous curvature integrals by [F2]. At every solution [F4] gives a neighborhood in its $H^3$ solution space containing exactly that solution's affine orbit. The orbit space of these actual solutions is consequently discrete. If it were infinite, for each positive integer $n$ the set of ordered $n$-tuples of pairwise distinct orbits would be nonempty. Countable Choice selects one such tuple for every $n$ simultaneously. Flatten these already selected finite tuples into one sequence and retain each orbit only at its first occurrence. Their union is infinite because it contains at least $n$ distinct elements for every $n$, so this gives a sequence of distinct orbits without dependent selection. Countable Choice then selects one representative from each of these prescribed orbits. Apply steps1.1–4.1 to those representatives with constant $J_n=J$ and $x_n=x$. After allowed affine reparametrizations they converge globally smoothly, hence in $H^3$, to another solution of the same unit domain and node value. The local orbit neighborhood at that limit then places all sufficiently late representatives in its one orbit, contradicting distinctness. Thus the orbit set is finite. This proves conditional count finiteness without assuming its index or regularity, and without identifying or counting any formal class lacking an actual representative. [F2, F4, step 1.1, step 4.1, construct, contradiction] ∎
