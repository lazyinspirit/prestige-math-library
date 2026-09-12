---
id: "lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier"
kind: "lemma"
title: "Smooth orientation sign is the local integral homology multiplier"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-local-homology-detects-interior-points-boundary-points-and-dimension","thm-long-exact-sequence-of-a-pair-in-singular-homology","thm-singular-chain-homotopy-formula","prop-relative-homology-is-functorial-for-maps-of-pairs","prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps","thm-punctured-rn-deformation-retracts-onto-the-sphere","thm-invertible-matrices-factor-into-elementary-matrices","def-elementary-matrix","thm-determinant-under-elementary-row-operations","thm-determinant-multiplicative","def-total-derivative-in-euclidean-space","lem-euclidean-linear-maps-have-matrices-and-are-bounded","def-local-orientation-sign-of-a-regular-preimage","lem-coordinate-ball-classes-identify-local-homology-stalks","def-r-orientation-of-a-topological-manifold","thm-excision-for-singular-homology"]
sources:
  references:
    - title: Alexander Kupers, Algebraic Topology, section8.1 pp60–62; local degree
        and regular-value computation
      url: https://www.utsc.utoronto.ca/people/kupers/wp-content/uploads/sites/50/algtop-2020.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Fix a dimension $n\ge1$ and one generator $e_n$ of $H_n(\mathbb R^n,\mathbb R^n\setminus\{0\};\mathbb Z)$. A smooth orientation on a boundaryless $n$-manifold determines an integral local-homology orientation by requiring each positive chart centred at $p$ to send its local generator $\mu_p$ to $e_n$. This is independent of the positive chart and is a continuous generator section of the orientation local system. Use the same $e_n$ for all manifolds being compared.

If $F$ is smooth near $p$, $F(p)=q$, and $dF_p$ is invertible, its induced map on local integral homology carries $\mu_p$ to $\operatorname{sgn}(dF_p)\mu_q$. In dimension zero put $e_0=[\mathrm{point}]$; the smooth sign $\varepsilon(p)$ gives $\mu_p=\varepsilon(p)[p]$, and the local multiplier is the product of the source and target point signs. All assertions are choice-free. The local map is formed on a sufficiently small neighbourhood on which $p$ is the only preimage of $q$.

## Facts & Assumptions

[F1] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] computes the local integral group as infinite cyclic in degree $n$ and zero in the other degrees at an interior point.

[F2] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives the boundary isomorphism used in that identification; on a relative cycle it is represented by its boundary.

[F3] [[thm-singular-chain-homotopy-formula]] gives the prism identity, including degree zero, for homotopies of the pairs below.

[F4] [[prop-relative-homology-is-functorial-for-maps-of-pairs]] gives composition and inverse maps for pair homeomorphisms.

[F5] [[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]] gives degree $-1$ for every coordinate reflection of $S^k$ when $k\ge1$.

[F6] [[thm-punctured-rn-deformation-retracts-onto-the-sphere]] gives the displayed radial deformation retraction of punctured Euclidean space onto its unit sphere.

[F7] [[thm-invertible-matrices-factor-into-elementary-matrices]] gives a finite elementary factorization of an invertible real matrix.

[F8] [[def-elementary-matrix]] lists row additions, nonzero row scalings and row swaps, with no elementary matrix in dimension zero.

[F9] [[thm-determinant-under-elementary-row-operations]] gives their determinants $1,c,-1$, respectively, by applying those operations to the identity.

[F10] [[thm-determinant-multiplicative]] makes the determinant sign of a product the product of its determinant signs.

[F11] [[def-total-derivative-in-euclidean-space]] supplies $f(x)=Lx+r(x)$ with $r(x)=o(|x|)$ after centring source and target.

[F12] [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]] gives a norm bound for $L^{-1}$.

[F13] [[def-local-orientation-sign-of-a-regular-preimage]] identifies the intrinsic positive-dimensional sign with the determinant in positive bases, and computes the zero-dimensional ray sign.

[F14] [[lem-coordinate-ball-classes-identify-local-homology-stalks]] supplies the ball-to-point isomorphisms.

[F15] [[def-r-orientation-of-a-topological-manifold]] defines an integral orientation as a locally constant generator in these ball trivializations.

[F16] [[thm-excision-for-singular-homology]] identifies the local group after shrinking a neighbourhood of its distinguished point.

## Proof

**Given:** A fixed dimension and Euclidean generator as stated. All homology in this proof has integral coefficients.

1.1 A homotopy $H:(X\times I,A\times I)\to(Y,B)$ gives the same induced relative homology map at both ends. Indeed every simplex in $A$ has all its prism simplices mapped into $B$, so the operator of [F3] passes to quotient chains. Its identity $g_\#-f_\#=\partial P+P\partial$ then says that the two images of any relative cycle differ by a relative boundary. The same reasoning includes degree zero and unnormalized degenerate simplices. Also the boundary map [F2] commutes with maps of pairs, because $\partial f_\#c=f_\#\partial c$ on each representative. [F2, F3, F4, given]

2.1 Let $J_i$ be reflection of one coordinate of $\mathbb R^n$. Since $\mathbb R^n$ is contractible, its pair sequence [F2] identifies $H_n(\mathbb R^n,\mathbb R^n\setminus0)$ naturally with $\widetilde H_{n-1}(\mathbb R^n\setminus0)$. The radial deformation retraction [F6] identifies the latter group with $\widetilde H_{n-1}(S^{n-1})$ and commutes with $J_i$, because radial normalization satisfies $r(J_i x)=J_i r(x)$. For $n\ge2$ this action is $-1$ by [F5]. For $n=1$, the two components of the punctured line have classes $[+]$ and $[-]$, and the augmentation kernel is generated by $[+]-[-]$; reflection interchanges them and negates their difference. Hence every $J_i$ acts as $-1$ on the infinite cyclic local group [F1], regardless of which generator was chosen. [F1, F2, F5, F6, step 1.1]

3.1 Compute the action of the elementary matrices in [F8] on the pair $(\mathbb R^n,\mathbb R^n\setminus0)$. A shear $I+cE_{ij}$, $i\ne j$, is homotopic to the identity through $I+tcE_{ij}$, whose inverse is $I-tcE_{ij}$; thus its action is $+1$ by step 1.1. A positive coordinate scaling $c>0$ is homotopic to the identity by replacing $c$ with $(1-t)+tc>0$, so also acts as $+1$. A negative scaling is a positive scaling followed by $J_i$, hence acts as $-1$ by [F4] and step 2.1. A swap of coordinates $i,j$ is conjugate to a coordinate reflection: use the basis with vectors $e_i+e_j$ and $e_i-e_j$ in that plane and the other standard basis vectors elsewhere; the swap has eigenvalues $+1,-1$ on those two specified vectors. Conjugation does not change its local multiplier, since every invertible change of basis induces an automorphism of the same cyclic group by [F4], and conjugating multiplication by $-1$ leaves it $-1$. These multipliers equal the determinant signs in [F9]. [F4, F8, F9, step 1.1, step 2.1]

4.1 Factor any $L\in\operatorname{GL}_n(\mathbb R)$ into finitely many elementary matrices by [F7]. Functoriality [F4] and step 3.1 multiply their local multipliers, while [F10] multiplies their determinant signs. Thus $$L_*e_n=\operatorname{sgn}\det(L)\,e_n.$$ The empty factorization gives the identity multiplier $+1$. This proof requires no connectedness theorem for the general linear or orthogonal group and selects only a finite factorization of the one matrix. [F4, F7, F10, step 3.1]

5.1 Let $f$ be a centred smooth coordinate representative with $f(0)=0$ and invertible $L=Df(0)$. By [F12], choose $C>0$ with $|L^{-1}v|\le C|v|$, hence $|Lx|\ge C^{-1}|x|$. By [F11] choose a small ball about zero contained in the coordinate domain and on which $|r(x)|\le(2C)^{-1}|x|$, where $r(x)=f(x)-Lx$. Then $$H(x,t)=Lx+tr(x),\qquad |H(x,t)|\ge(2C)^{-1}|x|\quad(x\ne0,\ 0\le t\le1).$$ Thus this is a homotopy of pairs from the linear map to $f$, into $(\mathbb R^n,\mathbb R^n\setminus0)$, and $f$ has no other zero in the ball. By [F16], inclusion of this small ball identifies its local group with the whole Euclidean local group; shrinking again does not change the map by [F4]. Steps 1.1 and 4.1 prove that the germ multiplier is $\operatorname{sgn}\det Df(0)$. No local inverse theorem is needed for this homology calculation. [F4, F11, F12, F16, step 1.1, step 4.1]

6.1 At $p$ in an oriented smooth manifold choose a positive chart centred at $p$ and use [F16] to pull $e_n$ back to $\mu_p$. Two such charts are related by a smooth transition fixing zero with positive derivative determinant, by [F13]. Step 5.1 says the transition induces multiplication by $+1$ on the local group, so the two values $\mu_p$ agree. This defines one generator at every point by a unique chart-independent value; it does not select a chart at every point. [F13, F16, step 5.1]

7.1 Verify local continuity in the precise sense of [F15]. Inside one positive chart choose concentric balls $K=\overline B(0,r)\subset B(0,s)$. By [F14], choose the unique class over $K$ whose restriction at zero is the generator from step 6.1. Let $\rho$ satisfy $r<\rho<s$. Excision [F16] identifies the supported pair with $(B(0,s),B(0,s)\setminus K)$; since the ball is contractible, the boundary map [F2] identifies its degree-$n$ relative group with reduced degree-$(n-1)$ homology of the annulus. Radial deformation onto $S_\rho$ shows that the boundary class is represented by a sphere class there. For $x\in\operatorname{int}K$, restriction to the local pair at $x$ and translation of the target by $-x$ sends this sphere map to $u\mapsto u-x$. The homotopy $u\mapsto u-tx$ avoids zero because $|x|<r<\rho$, so step 1.1 and naturality of [F2] identify its class with $u\mapsto u$. This is exactly the generator defined using the chart centred at $x$ in step 6.1. The calculation works for $n=1$ on reduced $H_0$ as well. Hence the restrictions of the one ball class are all the $\mu_x$, proving that this is a continuous generator section by [F15]. [F2, F14, F15, F16, step 1.1, step 6.1]

8.1 For the given germ $F$ choose positive centred charts on source and target. The local map in these charts is exactly the one in step 5.1, so $$F_*\mu_p=\operatorname{sgn}\det(Df(0))\,\mu_q=\operatorname{sgn}(dF_p)\mu_q$$ by [F13]. The local map is independent of shrinking and charts by [F4], [F16] and step 6.1. Changing the common reference $e_n$ to $-e_n$ negates all source and target generators and leaves this multiplier unchanged. [F4, F13, F16, step 5.1, step 6.1, step 7.1]

9.1 When $n=0$, each singleton chart is open and its local group is $\mathbb Z[p]$ by [F1]. The section $\varepsilon(p)[p]$ is continuous on the discrete manifold. The unique local point map sends $[p]$ to $[q]$, so its multiplier in these signed generators is $\varepsilon(p)\varepsilon(q)$, as in [F13]. Empty manifolds impose an empty section condition, and no germ at an absent point. Singular derivatives are excluded; the remainder estimate in step 5.1 explicitly excludes zero along the entire homotopy except at its fixed origin. All homotopy endpoints and the identity/empty-factorization case are included. One reference generator for the fixed dimension and finitely many witnesses for one germ suffice; no family of generators over dimensions, charts, or points is chosen, and no AC occurs. [F1, F4, F13, step 1.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1] ∎
