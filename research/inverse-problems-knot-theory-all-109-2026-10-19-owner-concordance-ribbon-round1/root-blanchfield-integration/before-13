---
id: lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds
kind: lemma
title: The low-degree coefficient Bockstein on a compact manifold without choice
status: draft
origin: session
deps: [lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction, lem-compact-connected-manifold-fundamental-group-has-finite-generators-in-zf, def-homology-and-cohomology-with-local-coefficients]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Hatcher, Algebraic Topology, coefficient Bockstein and local coefficients
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

Let $M$ be a compact connected Hausdorff manifold with a basepoint, and let $0\to\mathcal A\xrightarrow{i}\mathcal B\xrightarrow{q}\mathcal C\to0$ be a short exact sequence of local systems of abelian groups on $M$. There is a natural coefficient Bockstein making the sequence
$$H^1(M;\mathcal B)\xrightarrow{q_*}H^1(M;\mathcal C)\xrightarrow{\beta}H^2(M;\mathcal A)\xrightarrow{i_*}H^2(M;\mathcal B)$$
exact at its two middle terms. In particular $\beta$ is an isomorphism if $H^1(M;\mathcal B)=H^2(M;\mathcal B)=0$. No choice principle is assumed. If the local systems and maps have a commuting coefficient-ring action, the sequence and Bockstein respect it.

## Facts & Assumptions

**Given:** The based manifold and the fiberwise exact coefficient sequence.

[F1] Based paths $\gamma_x$ to all points can be specified from finite atlas data, with $\gamma_o$ constant; the fundamental group has a finite generating list. [[lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction]], [[lem-compact-connected-manifold-fundamental-group-has-finite-generators-in-zf]]

[F2] Intrinsic local cochains take values in the fiber over the first vertex, and their coboundary uses inverse transport along the first edge. [[def-homology-and-cohomology-with-local-coefficients]]

## Proof

1.1 Fix the paths from [F1]. For a degree-one cocycle $\alpha$ in a local system $\mathcal E$, the two-simplex identity of [F2] gives $\alpha(uv)=\alpha(u)+T_u^{-1}\alpha(v)$ for concatenated paths, with the second term transported to the initial fiber. A triangle realizing the concatenation proves this formula, and a triangulated homotopy square proves invariance for endpoint-fixed path homotopies; common internal edges cancel with their inverse transports. A constant two-simplex shows that a cocycle evaluates to zero on a constant path, and the concatenation formula then handles reversed paths. Define a zero-cochain $v_x=T_{\gamma_x}\alpha(\gamma_x)$ and $v_o=0$. The normalized cocycle $\alpha^0=\alpha-\delta v$ vanishes on every $\gamma_x$. If $g_\sigma=[\gamma_x\sigma\overline\gamma_y]$ for a path $\sigma:x\to y$, the concatenation formula consequently gives $\alpha^0(\sigma)=T_{\gamma_x}d(g_\sigma)$, where $d(g)=\alpha^0(g)$ on based loops. Here $d(gh)=d(g)+\rho(g)d(h)$ with $\rho(g)=T_g^{-1}$ in the cohomological convention. This is a crossed homomorphism; conversely that formula assigns a normalized cocycle to every such $d$, since the three edges of a singular two-simplex satisfy the same loop relation. [F1, F2, given, construct, algebra]

2.1 Apply step 1.1 to a $\mathcal C$-cocycle. Choose one lift $b_s\in\mathcal B_o$ of $d(s)$ for each of the finitely many generators $s$ of $\pi_1(M,o)$ from [F1]. For its inverse use $b_{s^{-1}}=-\rho(s^{-1})b_s$. Order the finite alphabet and use shortlex order on its finite words. Every group element $g$ has a least representing word $w(g)$; the identity has the empty word. On a word $t_1\cdots t_k$ form the finite sum $D(w)=\sum_j\rho(t_1\cdots t_{j-1})b_{t_j}$ in $\mathcal B_o$, and put $Q(g)=D(w(g))$. Its image in $\mathcal C_o$ is $d(g)$ by the crossed-homomorphism law. Thus $b(\sigma)=T_{\gamma_x}^{\mathcal B}Q(g_\sigma)$ gives an actual $\mathcal B$-valued one-cochain lifting $\alpha^0$ on every singular path, without selecting a fraction representative for each path. Its coboundary has zero $\mathcal C$-image, so unique inverse images under the injective fiber maps $i$ define a two-cochain $a$ in $\mathcal A$ with $i(a)=\delta b$. It is a cocycle since $i$ is injective and $\delta^2b=0$. Define $\beta[\alpha]=[a]$. [F1, F2, step 1.1, construct, algebra]

3.1 Any other lift of the same normalized one-cochain differs from $b$ by the image of a unique $\mathcal A$-valued one-cochain, so its coboundary gives the same class $[a]$. This includes changes in the finite generators, their lifts and the shortlex order. If $\alpha$ is changed by $\delta c$ for a $\mathcal C$ zero-cochain, its normalization changes by $\delta\widehat c$, where $\widehat c_x=T_{\gamma_x}c_o$: indeed the change in the normalizing zero-cochain is $c_x-T_{\gamma_x}c_o$. A single lift of $c_o$ in $\mathcal B_o$, transported along all $\gamma_x$, lifts $\widehat c$. Its coboundary adjusts $b$ without changing $\delta b$. Thus $\beta$ depends only on the cohomology class. Sums of lifts are lifts of sums, and their coboundaries add, proving additivity. [F2, step 1.1, step 2.1, construct, algebra]

4.1 The map also does not depend on the finite-atlas path assignment. Compare a second family $\eta_x$ with $\gamma_x$, and first use the $\gamma$-normalized cocycle. Its evaluation on $\eta_x$ is $d(k_x)$, where $k_x=[\eta_x\overline\gamma_x]$. Thus its $\eta$-normalizing zero-cochain is $T_{\eta_x}^{\mathcal C}d(k_x)$. The explicit $\mathcal B$ zero-cochain $T_{\eta_x}^{\mathcal B}Q(k_x)$ lifts it, so subtracting its coboundary from $b$ produces a lift of the $\eta$ normalization with the same two-coboundary. Step 3.1 removes the initial change of representative. Coefficient morphisms commute with transport and the formulas, and images of chosen finite lifts are valid lifts for the image cocycle; independence of lifts therefore proves naturality. A commuting scalar action is treated by taking scalar multiples of lifts and using step 3.1. [step 1.1, step 2.1, step 3.1, construct, algebra]

4.2 If $[\alpha]$ comes from a $\mathcal B$ one-cocycle, normalize that cocycle using its own path evaluations. It lifts the normalized image cocycle and has zero coboundary, so its Bockstein is zero. Conversely if $\beta[\alpha]=0$, the lift $b$ from step 2.1 has $\delta b=i(\delta a_1)$ for some $\mathcal A$ one-cochain $a_1$. Then $b-i(a_1)$ is a $\mathcal B$ one-cocycle whose image is $\alpha^0$, so $[\alpha]$ is in the image of $q_*$. This proves exactness at $H^1(M;\mathcal C)$. [step 2.1, step 3.1, construct, algebra]

5.1 Every Bockstein two-cocycle becomes a coboundary in $\mathcal B$ by construction. Conversely let an $\mathcal A$ two-cocycle $a$ become a coboundary $i(a)=\delta b$ for one $\mathcal B$ one-cochain $b$. Its image $\alpha=q(b)$ is a $\mathcal C$ one-cocycle. The $\mathcal B$ zero-cochain $v_x=T_{\gamma_x}^{\mathcal B}b(\gamma_x)$, with $v_o=0$, lifts the normalizing zero-cochain for $\alpha$. Hence $b-\delta v$ lifts $\alpha^0$ and still has coboundary $i(a)$. By step 3.1 it computes the same Bockstein, so $\beta[\alpha]=[a]$. This proves exactness at $H^2(M;\mathcal A)$ and the asserted isomorphism when the two surrounding groups vanish. All lifts used either finitely many generator values, one base-fiber value, or a previously supplied whole cochain. No surjectivity of an infinite product of coefficient quotients was assumed. [step 2.1, step 3.1, step 4.2, construct, algebra] ∎
