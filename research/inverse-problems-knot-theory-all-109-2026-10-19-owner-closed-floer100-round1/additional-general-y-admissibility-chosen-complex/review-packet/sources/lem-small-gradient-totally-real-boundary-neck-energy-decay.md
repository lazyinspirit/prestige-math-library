---
id: lem-small-gradient-totally-real-boundary-neck-energy-decay
kind: lemma
title: "Exponential energy decay on totally real boundary necks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-interior-energy-regularity-for-smooth-almost-complex-strips, thm-fourier-basis-and-parseval-on-the-n-torus, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses]
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, boundary neck estimates"
      url: "https://bookstore.ams.org/coll-52"
---

## Statement

Assume Countable Choice. Fix a compact smooth Riemannian target $(X,g)$, a compact half-dimensional submanifold $L$, a smooth complex structure $J_b$ on $TX|_L$ for which $L$ is totally real, and an angular length $T>0$. Let $J(\sigma,\tau,x)$ be smooth almost complex structures on $[a,b]\times[0,T]\times X$, with uniform bounds for $J$ and its first two target covariant derivatives, and with $J(\sigma,0,x)=J(\sigma,T,x)=J_b(x)$ for $x\in L$. There are constants $\varepsilon,c,C>0$, independent of $a,b$, such that every smooth solution
$$u_\sigma+J(\sigma,\tau,u)u_\tau=0,\qquad u(\sigma,0),u(\sigma,T)\in L,$$
with $\sup|du|_g+\sup(|\partial_\sigma J|+|\partial_\tau J|)\le\varepsilon$ satisfies
$$E_g(u;[a+R,b-R]\times[0,T])\le C\varepsilon^2e^{-cR}\qquad(0\le R\le(b-a)/2).$$
In particular central energies vanish uniformly with the distance $R$ from the ends of these long boundary necks. Both angular edges lie on the same $L$; this is not a statement about strips with two different boundary submanifolds.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact geometric data, uniform bounds, fixed boundary complex structure, actual equation, and small-gradient and source-variation bounds of the statement.

[F1] The covariant tension identity proved in [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]] bounds the target tension of such a solution by $C(|du|_g^2+\kappa|du|_g)$, where $\kappa$ is the bound for explicit source derivatives of $J$.

[F2] The actual Countable Choice proof of [[thm-fourier-basis-and-parseval-on-the-n-torus]] gives periodic Wirtinger, $\int_0^{2T}|w_\tau|^2\ge(\pi/T)^2\int_0^{2T}|w|^2$ when $w$ has zero mean.

[F3] Smooth local inverses used here are supplied by the actual proofs in [[thm-euclidean-inverse-function-theorem]] and [[thm-higher-regularity-of-local-inverses]].

## Proof

1.1 A fixed finite-atlas embedding is obtained as follows. Choose a finite smooth partition $\phi_i$ with compact supports in coordinate charts $x_i$, using finite Euclidean bumps and normalization, and set $F(x)=(\phi_i(x),\phi_i(x)x_i(x))_i$. Equality of these coordinates recovers $x$ in a chart where $\phi_i>0$, and vanishing of their derivatives recovers a zero tangent vector in that chart. Thus $F$ is injective and immersive, and compactness makes it an embedding. Derivatives of $F$ are bounded and its differential uniformly compares $g$ with the ambient Euclidean metric. Write $Y=F(X)$ and $M=F(L)$. [given, construct, algebra]

2.1 We construct a smooth involution $\rho$ on a neighborhood of $L$ in $X$, fixing $L$, whose differential is $+I$ on $TL$ and $-I$ on $J_bTL$. First the ambient normal map $(y,n)\mapsto y+n$ from the Euclidean orthogonal normal bundle of $Y$ has invertible differential along its zero section. By [F3] it has local smooth inverses. It is injective for a uniform small normal radius: otherwise collisions with normal vectors tending to zero have base points converging after a subsequence by compactness; equality of images forces the same base limit, contradicting the local inverse there. The same compactness argument preserves invertible differential on a uniform radius. Projection of these glued inverses to $Y$ gives a smooth ambient retraction $P$ near $Y$ with $dP$ the tangent projection along $Y$. Now on the vector bundle $N_y=dF(J_bT_xL)$ over $y=F(x)\in M$, consider $\Phi(y,v)=P(y+v)\in Y$. At $v=0$ its derivative identifies $T_yM\oplus N_y$ with $T_yY$, since $L$ is totally real. The identical local-inverse and compactness argument gives a diffeomorphism from a uniform small symmetric bundle neighborhood onto a neighborhood of $M$ in $Y$. Conjugating $(y,v)\mapsto(y,-v)$ by this diffeomorphism and then by $F$ defines $\rho$. It is an involution, fixes $L$, and has the claimed differential. On a smaller fixed neighborhood all its first and second derivatives, and its inverse differential, are bounded. [F3, step 1.1, construct, algebra]

3.1 For small enough $\varepsilon$, the entire map lies in that fixed neighborhood: each path $\tau\mapsto u(\sigma,\tau)$ begins on $L$ and has length at most $T\varepsilon$. Define on the doubled angular circle of period $2T$ $$\widetilde u(\sigma,\tau)=\begin{cases}u(\sigma,\tau),&0\le\tau\le T,\\ \rho(u(\sigma,-\tau)),&-T\le\tau\le0,\end{cases}$$ identifying $-T$ and $T$. This is $C^1$ across both seams. Values agree because $\rho$ fixes $L$. Tangential derivatives agree because $u_\sigma\in TL$ there, so $d\rho u_\sigma=u_\sigma$. The equation gives $u_\tau=J_bu_\sigma\in J_bTL$, so the normal reflected derivative $-d\rho u_\tau$ equals $u_\tau$. These identities hold along the whole seam and may also be differentiated in $\sigma$. Thus all tangential derivatives of the values and normal first derivatives match. The doubled map is smooth on each closed side. [step 2.1, given, construct, algebra]

4.1 Put $V=F\circ\widetilde u$ and let $H=\Delta V$ weakly on the doubled cylinder. There is no line measure in this Laplacian because $V$ and its first derivatives match across the seams; integrating by parts on both sides verifies cancellation. On the original half, the composition formula and [F1] bound $|H|\le C(|du|_g^2+\kappa|du|_g)$. On the reflected half the composition rule for $F\circ\rho$ gives the same bound, with a larger fixed constant from its second derivatives. The equation gives $|du|_g\le C|u_\tau|_g$, and the embedding and reflected inverse differential compare this with $|V_\tau|$ on either side. Hence $$|H|\le C_0\varepsilon|V_\tau|$$ almost everywhere on the entire doubled cylinder. This argument does not assume a globally smooth reflected almost complex coefficient across a seam. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 Set $w=V_\tau$ and $e(\sigma)=\tfrac12\int_{-T}^T|w|^2d\tau$. The function $w$ is continuous and piecewise smooth, its angular derivative is an ordinary bounded piecewise function locally, and it has zero angular mean. Moreover $\Delta w=\partial_\tau H$ as distributions. Tangential differentiation of the piecewise formulas gives $$e''=\int_{-T}^T\bigl(|w_\sigma|^2+|w_\tau|^2-\langle w_\tau,H\rangle\bigr)d\tau.$$ For completeness the last integration by parts is distributional: $w$ is periodic $H^1$ in its angular variable and $H\in L^2$, so convolution on that circle proves $\langle\partial_\tau H,w\rangle=-\int\langle H,w_\tau\rangle$ by passage to the $L^2$ limit. Thus any jumps of $H$ are included, and no angular endpoint term was omitted. The matching tangential derivatives from step 3.1 justify differentiating the integral twice in $\sigma$. [step 3.1, step 4.1, construct, algebra]

6.1 Young's inequality and [F2] give, for $\lambda=(\pi/T)^2$, $$e''\ge\tfrac12\int|w_\tau|^2-\tfrac12C_0^2\varepsilon^2\int|w|^2\ge\tfrac12(\lambda-C_0^2\varepsilon^2)\int|w|^2.$$ Decrease $\varepsilon$ so that $C_0^2\varepsilon^2\le\lambda/2$ and set $c=\sqrt{\lambda/2}$. Then $e''\ge c^2e$. The barrier $h=e(a)e^{-c(\sigma-a)}+e(b)e^{-c(b-\sigma)}$ has $h''=c^2h$ and dominates the endpoint values of $e$. A positive interior maximum of $e-h$ would contradict $(e-h)''\ge c^2(e-h)$, so $e\le h$. Its integral on $[a+R,b-R]$ is at most $c^{-1}(e(a)+e(b))e^{-cR}$. [F2, step 4.1, step 5.1, construct, algebra]

7.1 The original energy is bounded by $C\int e(\sigma)d\sigma$, by the original equation and embedding norm equivalence. The small derivative hypothesis and the fixed reflected derivative bound give $e(a)+e(b)\le C\varepsilon^2$. Substitution in step 6.1 proves the asserted central energy estimate with a uniform constant. This proves boundary neck decay using the actual totally real boundary geometry. It does not address two different submanifolds or construct a bubble-tree decomposition. [step 1.1, step 2.1, step 3.1, step 6.1, algebra] ∎
