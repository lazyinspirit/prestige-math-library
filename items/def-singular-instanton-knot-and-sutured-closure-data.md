---
id: def-singular-instanton-knot-and-sutured-closure-data
kind: definition
title: "Singular instanton knot and sutured closure data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - thm-poincare-lefschetz-duality
  - thm-first-chern-class-classifies-complex-line-bundles
  - def-axiom-of-choice
justified_by:
  - lem-instanton-knot-complex-asd-analytic-foundations
  - thm-sutured-instanton-khi-rank-detects-unknot
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 3.43"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "Theorem 3.43, printed pp. 253–254: compact oriented manifolds with boundary, with A=empty and B=the full boundary."
    - title: "P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector, §§2.1–2.4, 4.2–4.4, and 8.7"
      url: "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, sutures and excision, §§7.1–7.6"
      url: "https://arxiv.org/pdf/0807.4891v2"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, three-manifolds and instantons, §§4.3 and 5.1–5.2"
      url: "https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf"
---

## Definition

Assume full AC for the instanton constructions. Let $K\subset S^3$ be a smooth knot with a marked point $x$ and a preferred nonzero normal vector $v$ at $x$. Choose a small disk $D$ normal to $K$ at $x$, let $L=\partial D$, and let $\omega$ be the radius of $D$ from $x$ to a point of $L$. Then $K^\natural:=K\cup L$ is the based earring link. Choose disjoint closed tubular neighborhoods $N(K)$ and $N(L)$ of its two components, set $X=S^3\setminus\operatorname{int}(N(K)\cup N(L))$, and truncate the endpoints of $\omega$ at $\partial X$ to obtain $[\omega]\in H_1(X,\partial X;\mathbb Z/2)$.

Here $PU(2)=U(2)/U(1)\cong SO(3)$; a principal $PU(2)$ bundle $P\to X$ is equivalently an oriented real 3-plane bundle, and $w_2(P)\in H^2(X;\mathbb Z/2)$ denotes its second Stiefel–Whitney class. Poincaré–Lefschetz duality for the oriented compact 3-manifold $X$ with boundary is the isomorphism $PD:H_1(X,\partial X;\mathbb Z/2)\to H^2(X;\mathbb Z/2)$. Include a bundle $P$ with $w_2(P)=PD([\omega])$ in the singular bundle data.

Such a bundle exists for every marked earring. Orient the truncated arc as a relative integral cycle and set $c=PD_{\mathbb Z}[\omega]\in H^2(X;\mathbb Z)$. Choose a complex line bundle $Q\to X$ with $c_1(Q)=c$, and let $P$ be the projective unitary frame bundle of $Q\oplus\underline{\mathbb C}$. On each 2-cell, a clutch of $Q$ with winding $n$ gives the projective transition whose $SU(2)$ lift ends at $(-1)^n$; its lifting obstruction is therefore $n\bmod2$. Hence $w_2(P)=c\bmod2=PD_{\mathbb F_2}[\omega]$, as required.

In a local meridional angular coordinate $\theta$, an $SU(2)$ lift of the singular connection has the standard model $A_0+\frac14\begin{pmatrix}i&0\\0&-i\end{pmatrix}d\theta$, where $A_0$ is smooth in an $O(2)$ reduction. As the radius of a meridional circle tends to zero, its holonomy conjugacy class tends to that of $\operatorname{diag}(i,-i)$ in $SU(2)$; the limiting image has order two in $PU(2)$. This is the prescribed asymptotic meridional holonomy, not an assertion of exact holonomy on every finite-radius circle for an arbitrary smooth $A_0$. For a flat connection the holonomies of homotopic meridional circles are conjugate, so their conjugacy class is exactly this limiting class. Define $I^\natural(K;\mathbb Z)$ to be the singular instanton Floer homology $I^\omega(S^3,K^\natural;P)$ associated to these data by Analytic foundations for the singular instanton knot complex, which supplies its analytic complex and independence of auxiliary choices under full AC. This does not assert sutured closure independence or a distinguished canonical class.

For the sutured version, let $E_K$ be the compact knot exterior and put two oppositely oriented meridional sutures $\gamma$ on its boundary torus. Choose a connected oriented annulus $T$, attach $[-1,1]\times T$ along the annular sutured region, and glue the two resulting boundary surfaces by an orientation-compatible diffeomorphism fixing a chosen point from $T$. The result is a closed oriented 3-manifold $\bar Y$ with a distinguished torus $\bar R$; the fixed point determines a standard circle meeting $\bar R$ once. Choose a line bundle $w\to\bar Y$ whose first Chern class is Poincaré dual to that circle, so $\langle c_1(w),[\bar R]\rangle$ is odd. Let $I_*(\bar Y,w;\mathbb Q)$ denote the closed instanton Floer group with rational coefficients, using the admissible fixed-determinant theory in the external input below. For a homology class $z$ of dimension $0$ or $2$ in $\bar Y$, let $\mu(z)$ denote the standard instanton Floer operator associated to $z$; the point and surface operators commute and have degrees $4$ and $-2$, respectively. If $y\in\bar R$, define the closure group $KHI_{\bar Y,\bar R,w}(K;\mathbb Q)$ by
$$KHI_{\bar Y,\bar R,w}(K;\mathbb Q):=\{a\in I_*(\bar Y,w;\mathbb Q):\mu(\bar R)^N a=0\text{ for some }N\ge1,\ \mu(y)a=2a\}.$$
This uses the generalized $0$-eigenspace of the surface operator and the ordinary $+2$-eigenspace of the point operator. For this admissible torus closure it equals the simultaneous ordinary $(0,2)$ eigenspace, by the extreme-surface simplicity input stated below; no global diagonalizability of either operator is assumed. The closure group is considered up to isomorphism, with independence of these auxiliary choices supplied by the external input below and the stated well-definedness justifier; no canonical vector or preferred basis is part of this definition.

## Definition references

[[lem-instanton-knot-complex-asd-analytic-foundations|Integral singular complex and continuation invariance]]

[[def-knot-exterior|Chosen compact knot exterior]]

[[def-knot-meridian-and-preferred-longitude|Meridian and longitude conventions]]

[[def-stiefel-whitney-classes-from-the-projective-bundle-relation|Second Stiefel–Whitney class of the associated real 3-plane bundle]]

[[thm-poincare-lefschetz-duality|Integral and mod-two duals of the marked relative arc]]

[[thm-first-chern-class-classifies-complex-line-bundles|Existence of a line bundle with the prescribed first Chern class]]

[Hatcher, *Algebraic Topology*, Theorem 3.43](https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf)

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), §§2.1–2.4, 4.2–4.4, and 8.7](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Kronheimer–Mrowka, *Knots, sutures and excision* (2008), §§7.1–7.6](https://arxiv.org/pdf/0807.4891v2)

[Kronheimer–Mrowka, *Knots, three-manifolds and instantons* (2018), §§4.3 and 5.1–5.2](https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf)

[[lem-instanton-knot-complex-asd-analytic-foundations]]

## Facts & Assumptions

**Given:** Full AC and the actual based earring and marked admissible closure data in the definition. The singular complex is supplied by the preserved local analytic theorem.

[F1] **External admissible closure input.** Kronheimer–Mrowka, *Knots, sutures and excision*, arXiv:0807.4891v2, §7.1 and Definition 7.3, supplies the ordinary instanton group for a fixed determinant line bundle with odd pairing on an integral surface and the commuting point/surface operators. Definition 7.10 and its following closure-independence argument (§7.4, PDF p. 59), using Theorem 7.7 excision and Propositions 7.8–7.9, give independence of the allowed auxiliary surface and marked gluing choices. The auxiliary surface has a closed curve whose two boundary-surface copies are nonseparating; in this annular knot construction its core has that property. The marked gluing fixes the point determining the standard determinant circle. Genus one is permitted.

[F2] **External torus and coefficient normalization.** The same source's Definition 7.3 (PDF pp. 54–55) defines the surface-cut group by ordinary simultaneous extreme eigenspaces. The paragraph immediately after Proposition 7.4 (PDF p. 55) explicitly states, for every allowed $Y,R,w$ and every $N\ge1$,
$$\ker(\mu(y)-2)\cap\ker(\mu(R)-(2g(R)-2))^N=\ker(\mu(y)-2)\cap\ker(\mu(R)-(2g(R)-2)).$$
For $g(\bar R)=1$, this proves that the generalized surface-$0$/ordinary point-$+2$ group in the Definition equals that ordinary simultaneous eigenspace. Definition 7.13 and its following paragraph (§7.6, PDF pp. 60–61) identify it with the annular knot closure and the point-$+2$ half of the full determinant-one ordinary group. Thus it has half the full group's dimension, not an additional doubled factor. This uses the specific published extreme-surface identity, not semisimplicity for arbitrary surface operators or the generalized decomposition for other surfaces. The point condition remains the ordinary kernel $\ker(\mu(y)-2)$. The source uses complex coefficients for convenience. The rational version used here is explicitly permitted in Kronheimer–Mrowka, *Khovanov homology is an unknot-detector*, §1.1, PDF p. 3, immediately before Proposition 1.4.

These are explicit published external inputs under CLAUDE.md §12 for the current run, not a locally reconstructed ordinary all-genus/excision argument. The well-definedness theorem [[thm-sutured-instanton-khi-rank-detects-unknot]] uses these inputs with the preserved local singular construction. Its proof supplies the rank and rational bridge separately; neither a canonical element nor an integral eigenspace splitting is included in this definition.
