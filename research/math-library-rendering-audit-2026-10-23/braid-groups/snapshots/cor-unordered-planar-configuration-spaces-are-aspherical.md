---
id: cor-unordered-planar-configuration-spaces-are-aspherical
kind: corollary
title: "Unordered planar configuration spaces are aspherical"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-ordered-planar-configuration-spaces-are-aspherical, thm-ordered-configurations-cover-unordered-configurations-regularly, thm-covering-space-lifting-criterion, thm-homotopy-lifting-for-covering-maps, thm-higher-dimensional-spheres-are-simply-connected, lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent, def-braid-group-from-unordered-configurations, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, prop-higher-homotopy-basepoint-transport-and-moving-homotopies, prop-cubical-and-spherical-models-of-higher-homotopy-agree, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-14 (Theorem 2.2: the unordered configuration space is a K(pi,1))"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Edward Fadell and Lee Neuwirth, Configuration Spaces, section III, printed pp. 114-115"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
---

## Statement

Assume the Axiom of Choice. For every $n\ge1$, every $k\ge2$ and every
basepoint $b\in C_n(\operatorname{int}D^2)$ one has
$$\pi_k\bigl(C_n(\operatorname{int}D^2),b\bigr)=0 .$$
The same conclusion holds for the unordered configuration spaces
$C_n(\mathbb C)$ and $C_n(D^2)$ under the coordinatewise radial homeomorphism
and the published unordered inclusion homotopy equivalence. Consequently the
open-disc and plane unordered configuration spaces are
$\mathrm K(B_n^{\mathrm{conf}},1)$ in the higher-homotopy sense: their
fundamental group is $B_n^{\mathrm{conf}}$ in the convention of
[[def-braid-group-from-unordered-configurations]] and all higher homotopy
groups vanish.

## Facts & Assumptions

**Given:** the Axiom of Choice, an integer $n\ge1$, a basepoint $b\in C_n(\operatorname{int}D^2)$ with a chosen preimage $x\in F_n(\operatorname{int}D^2)$, and a degree $k\ge2$.

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] For every $m\ge1$, every $j\ge2$ and every base configuration $c\in F_m(\operatorname{int}D^2)$ one has $\pi_j(F_m(\operatorname{int}D^2),c)=0$ ([[thm-ordered-planar-configuration-spaces-are-aspherical]]).

[F2] For the surface $M=\operatorname{int}D^2$ the quotient map $p:F_n(M)\to C_n(M)$ is an $n!$-sheeted covering map, both $F_n(M)$ and $C_n(M)$ are path-connected, and $p$ is regular; no choice principle is used ([[thm-ordered-configurations-cover-unordered-configurations-regularly]]).

[F3] Let $Y$ be path-connected and locally path-connected and let $f:(Y,y_0)\to(B,b_0)$ be based, with $p:(E,e_0)\to(B,b_0)$ a covering; a based lift of $f$ exists if and only if $f_*\pi_1(Y,y_0)\subseteq p_*\pi_1(E,e_0)$ ([[thm-covering-space-lifting-criterion]]).

[F4] Let $p:E\to B$ be a covering, $H:Y\times I\to B$ a homotopy and $\widetilde H_0:Y\to E$ a lift of $H(-,0)$; there is a unique lift $\widetilde H:Y\times I\to E$ extending $\widetilde H_0$ ([[thm-homotopy-lifting-for-covering-maps]]).

[F5] For every $k\ge2$ the sphere $S^k$ is simply connected, hence path-connected and locally path-connected ([[thm-higher-dimensional-spheres-are-simply-connected]], [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]]).

[F6] The unordered inclusion $\iota^C:C_n(\operatorname{int}D^2)\to C_n(D^2)$ is a homotopy equivalence, the coordinatewise radial map restricts to a homeomorphism $C_n(\mathbb C)\to C_n(\operatorname{int}D^2)$, and homotopy equivalences induce isomorphisms on all homotopy groups in degrees $\ge1$ ([[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]], [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]).

[F7] $B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[q])$ for the orbit of a base configuration of interior points, and the inclusion of the open-disc model induces an isomorphism $\pi_1(C_n(\operatorname{int}D^2),[q])\to B_n^{\mathrm{conf}}$ ([[def-braid-group-from-unordered-configurations]]).

## Proof

**Proof technique:** direct.

1.1 **Ordered vanishing.** Under the standing assumption [A1], which discharges the Axiom-of-Choice hypothesis of [F1], the ordered result applies: for the chosen preimage $x\in F_n(\operatorname{int}D^2)$ of $b$ one has $\pi_k(F_n(\operatorname{int}D^2),x)=0$ for the degree $k\ge2$; that is, every based map $S^k\to F_n(\operatorname{int}D^2)$ at $x$ is based-homotopic to the constant map. [A1, F1]

1.2 **Covering and lifting tools.** By [F2] the quotient $p:F_n(\operatorname{int}D^2)\to C_n(\operatorname{int}D^2)$ is a covering with both spaces path-connected; by [F5] the sphere $S^k$ is path-connected, locally path-connected and simply connected with $\pi_1(S^k,s_0)=1$ for $k\ge2$; the based lifting criterion [F3] and the homotopy lifting theorem [F4] are therefore available for based maps out of $(S^k,s_0)$. [F2, F3, F4, F5]

1.3 **Transferring along the disc models.** The coordinatewise radial map gives homeomorphisms $C_n(\mathbb C)\cong C_n(\operatorname{int}D^2)$, and the unordered inclusion $\iota^C:C_n(\operatorname{int}D^2)\to C_n(D^2)$ is a homotopy equivalence; by [F6] both induce isomorphisms on $\pi_j$ for every $j\ge1$, so vanishing of $\pi_k$ transfers between the three models at corresponding basepoints. [F6]

2.1 **Lifting a based sphere.** Let $u:(S^k,s_0)\to(C_n(\operatorname{int}D^2),b)$ be a based map. Its induced map on $\pi_1$ is trivial because $\pi_1(S^k,s_0)=1$ by step 1.2, so $u_*\pi_1(S^k,s_0)=\{1\}\subseteq p_*\pi_1(F_n(\operatorname{int}D^2),x)$ and the lifting criterion [F3] provides a based lift $\widetilde u:(S^k,s_0)\to(F_n(\operatorname{int}D^2),x)$ with $p\circ\widetilde u=u$. [step 1.2, F3]

3.1 **Nullhomotoping the lift and projecting.** By step 1.1 the based class $[\widetilde u]\in\pi_k(F_n(\operatorname{int}D^2),x)$ is trivial, so there is a based homotopy $\widetilde H:S^k\times I\to F_n(\operatorname{int}D^2)$ from $\widetilde u$ to the constant map at $x$ with $\widetilde H(s_0,t)=x$ for all $t$. Then $p\circ\widetilde H:S^k\times I\to C_n(\operatorname{int}D^2)$ is a based homotopy from $u=p\circ\widetilde u$ to the constant map at $b$, because $p(x)=b$; hence $u$ is nullhomotopic as a based map, and $[u]=0$ in $\pi_k(C_n(\operatorname{int}D^2),b)$. [step 1.1, step 2.1, F4]

4.1 **Vanishing for the unordered open-disc model.** Since $u$ was an arbitrary based map out of $(S^k,s_0)$ with arbitrary basepoint $b$ and arbitrary $k\ge2$, step 3.1 shows that every based class in $\pi_k(C_n(\operatorname{int}D^2),b)$ is trivial, so $\pi_k(C_n(\operatorname{int}D^2),b)=0$. [step 3.1]

5.1 **The other models and the $\mathrm K(B_n^{\mathrm{conf}},1)$ reading.** By step 1.3 the vanishing of step 4.1 transfers to $\pi_k(C_n(\mathbb C),b')$ and $\pi_k(C_n(D^2),b'')$ for arbitrary basepoints, and [F7] identifies the fundamental groups of the open-disc and plane models with $B_n^{\mathrm{conf}}$; hence these spaces have fundamental group $B_n^{\mathrm{conf}}$ and vanishing higher homotopy groups, that is, they are $\mathrm K(B_n^{\mathrm{conf}},1)$ in the higher-homotopy sense. [step 1.3, step 4.1, F7]

The proof lifts sphere classes to the ordered configuration space, where they vanish by ordered asphericity, and projects the nullhomotopy; the covering is used through its lifting properties only, and the case $k=2$ of the ordered input was proved without point pushing. ∎
