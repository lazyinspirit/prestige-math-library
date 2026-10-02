---
id: thm-pure-braid-forgetting-a-strand-short-exact-sequence
kind: theorem
title: "The Fadell-Neuwirth short exact sequence for pure braids"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-fadell-neuwirth-forgetful-fibration, def-pure-braid-group-from-ordered-configurations, lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles, lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, thm-induced-fundamental-group-map-functoriality]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-14 (equation (2.2), the split pure braid tower)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Edward Fadell and Lee Neuwirth, Configuration Spaces, section II, printed pp. 111-114"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
---

## Statement

Assume the Axiom of Choice and let $n\ge2$. Let
$q=(q_1,\dots,q_n)\in F_n(\operatorname{int}D^2)$ be a base configuration and
write $q':=(q_1,\dots,q_{n-1})$, so that
$$PB_n=\pi_1\bigl(F_n(D^2),q\bigr),\qquad PB_{n-1}=\pi_1\bigl(F_{n-1}(D^2),q'\bigr)$$
in the closed-disc convention of
[[def-pure-braid-group-from-ordered-configurations]]. Let
$$F_{n-1}:=\pi_1\bigl(\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\},\,q_n\bigr)$$
be the fundamental group of the fibre of the last-coordinate forgetful map,
which is free on the $n-1$ positively oriented meridian classes of the punctures
$q_1,\dots,q_{n-1}$ ([[lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]]).
Then forgetting the last strand, that is the map induced on fundamental groups by
$(x_1,\dots,x_n)\mapsto(x_1,\dots,x_{n-1})$, fits into a short exact sequence
$$1\longrightarrow F_{n-1}\xrightarrow{\ \kappa\ }PB_n\xrightarrow{\ \varphi\ }PB_{n-1}\longrightarrow1,$$
where $\kappa$ is the injection induced by the inclusion of the fibre
$\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}\to F_n(\operatorname{int}D^2)$,
$x\mapsto(q_1,\dots,q_{n-1},x)$, transported through the identity
$PB_n=\pi_1(F_n(D^2),q)$ of the closed-disc convention, and $\varphi$ is the
forgetful map. Moreover $PB_1$ is trivial, so for $n=2$ the displayed sequence
reads $1\to F_1\to PB_2\to 1\to 1$.

## Facts & Assumptions

**Given:** the Axiom of Choice and integers $n\ge2$; a base configuration $q=(q_1,\dots,q_n)\in F_n(\operatorname{int}D^2)$ with $q'=(q_1,\dots,q_{n-1})$; the open-disc configuration spaces $F_n(\operatorname{int}D^2)$, $F_{n-1}(\operatorname{int}D^2)$ and the closed-disc spaces $F_n(D^2)$, $F_{n-1}(D^2)$; the fibre space $M_{n-1}:=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$.

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] In ZF, AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] For the nonempty connected Hausdorff surface $M=\operatorname{int}D^2$ without boundary and the last-coordinate forgetful map $p:F_n(M)\to F_{n-1}(M)$ with $n\ge2$, every fibre over $q'$ is homeomorphic to $F_1(M\setminus Q_{q'})=M\setminus Q_{q'}$, the map is locally trivial with that fibre type, and under AC and DC it is a numerable locally trivial bundle, hence a Hurewicz fibration ([[thm-fadell-neuwirth-forgetful-fibration]]).

[F3] $PB_m=\pi_1(F_m(D^2),q^{(m)})$ for a base configuration of interior points; the inclusion $\iota^F:F_m(\operatorname{int}D^2)\to F_m(D^2)$ induces an isomorphism $\iota^F_*$ of fundamental groups at every configuration of interior points; $PB_0$ and $PB_1$ are trivial, and for $n=1$ single-coordinate evaluation gives $F_1(D^2)\cong D^2$ ([[def-pure-braid-group-from-ordered-configurations]], [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[F4] For a based Serre fibration $p:(E,e_0)\to(B,b_0)$ with fibre $F=p^{-1}(b_0)$ the sequence
$$\cdots\to\pi_1(F)\xrightarrow{i_*}\pi_1(E)\xrightarrow{p_*}\pi_1(B)\xrightarrow{\partial_p}\pi_0(F)\xrightarrow{i_*}\pi_0(E)\xrightarrow{p_*}\pi_0(B)$$
is exact, exactness meaning incoming image equals inverse image of the distinguished element; every arrow between groups is a homomorphism, and the last arrow is onto precisely when $p(E)$ meets every path component of $B$ ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F5] For a set $Q$ of $k$ distinct points of $\operatorname{int}D^2$ the complement $\operatorname{int}D^2\setminus Q$ has $\pi_j=0$ for all $j\ge2$, is homotopy equivalent to a wedge of $k$ circles, and its fundamental group at any basepoint is free with a free basis given by the $k$ positively oriented meridian classes of the punctures $Q$ ([[lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]]).

[F6] For every $m\ge1$ and every base configuration $c\in F_m(\operatorname{int}D^2)$ one has $\pi_2(F_m(\operatorname{int}D^2),c)=0$ ([[lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction]]).

[F7] Induced maps on fundamental groups are functorial: $(g\circ f)_*=g_*\circ f_*$ and $(\operatorname{id})_*=\operatorname{id}$ ([[thm-induced-fundamental-group-map-functoriality]]).

## Proof

**Proof technique:** direct.

1.1 **Fibre and base computations.** The complement $M_{n-1}$ is homotopy equivalent to a wedge of $n-1$ circles by [F5], hence path-connected, so $\pi_0(M_{n-1})$ is a one-point set; also $\pi_2(M_{n-1},q_n)=0$ and $\pi_1(M_{n-1},q_n)$ is free with the $n-1$ positively oriented meridian classes of $q_1,\dots,q_{n-1}$ as a free basis, all by [F5]. Since $n\ge2$ we have $n-1\ge1$, so [F6] gives $\pi_2(F_{n-1}(\operatorname{int}D^2),q')=0$. [F5, F6]

1.2 **The open-to-closed comparison.** Let $\iota^F:F_m(\operatorname{int}D^2)\to F_m(D^2)$ be the inclusion for $m=n-1,n$ and let $p^D:F_n(D^2)\to F_{n-1}(D^2)$ be the closed-disc last-coordinate forgetful map. Both $p^D$ and $p$ forget the last coordinate, so $p^D\circ\iota^F=\iota^F\circ p$ as maps; by [F7] the induced maps satisfy $p^D_*\circ\iota^F_*=\iota^F_*\circ p_*$. By [F3] the maps $\iota^F_*:\pi_1(F_n(\operatorname{int}D^2),q)\to PB_n$ and $\iota^F_*:\pi_1(F_{n-1}(\operatorname{int}D^2),q')\to PB_{n-1}$ are isomorphisms onto the groups in the closed-disc convention, so $PB_n$ and $PB_{n-1}$ may be computed in the open-disc model. [F3, F7]

1.3 **The forgetful fibration and its fibre.** By [F1] the Axiom of Choice [A1] yields the Axiom of Dependent Choice, so the choice hypotheses of [F2] are met; by [F2] the last-coordinate map $p:F_n(\operatorname{int}D^2)\to F_{n-1}(\operatorname{int}D^2)$, $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_{n-1})$, is a Hurewicz, hence Serre, fibration; over $b:=p(q)=q'$ its fibre is $p^{-1}(q')=F_1(M_{n-1})\cong M_{n-1}=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$, which contains $q$ because $q_n\notin\{q_1,\dots,q_{n-1}\}$. This use of AC, only to invoke [F2], is the sole choice principle in the proof. [A1, F1, F2]

2.1 **The exact sequence in the open-disc model.** Inserting the computations of step 1.1 into the exact sequence of [F4] for the based Serre fibration $p$ of step 1.3 with $e_0=q$, $b_0=q'$ and fibre $M_{n-1}$ gives the exact sequence of groups $\pi_2(F_{n-1}(\operatorname{int}D^2),q')\xrightarrow{\partial}\pi_1(M_{n-1},q_n)\xrightarrow{i_*}\pi_1(F_n(\operatorname{int}D^2),q)\xrightarrow{p_*}\pi_1(F_{n-1}(\operatorname{int}D^2),q')\xrightarrow{\partial}\pi_0(M_{n-1})$. The left term vanishes by step 1.1, so $\operatorname{im}(i_*)=\ker(p_*)$ is the kernel of $p_*$ and $i_*$ is injective; the last term is a one-point set, so the boundary into it is the zero map and exactness at $\pi_1(F_{n-1}(\operatorname{int}D^2),q')$ makes $p_*$ surjective. Hence $1\to\pi_1(M_{n-1},q_n)\xrightarrow{i_*}\pi_1(F_n(\operatorname{int}D^2),q)\xrightarrow{p_*}\pi_1(F_{n-1}(\operatorname{int}D^2),q')\to1$ is short exact. [step 1.1, step 1.3, F4]

3.1 **Transport to the closed-disc convention.** Conjugating the sequence of step 2.1 by the isomorphisms of step 1.2 identifies it with $1\to F_{n-1}\xrightarrow{\kappa}PB_n\xrightarrow{\varphi}PB_{n-1}\to1$, where $\kappa=\iota^F_*\circ i_*$ is the composite of the fibre inclusion with the open-to-closed isomorphism $\iota^F_*$ for $m=n$, and $\varphi=p^D_*$ is the induced map of the closed-disc forgetting map; exactness is preserved by these isomorphisms and $\varphi$ is the map induced by forgetting the last strand. [step 1.2, step 2.1]

4.1 **Elementary cases and conclusion.** By [F3] the group $PB_1$ is trivial, so for $n=2$ the quotient in the displayed sequence is trivial and the sequence reads $1\to F_1\to PB_2\to 1\to 1$; the general case $n\ge2$ is step 3.1, so the theorem is proved. [step 3.1, step 1.1, F3]

The proof used the published choice-dependent Fadell–Neuwirth fibration only through the AC/DC deduction in step 1.3, and no Artin presentation, group action, or Birman injectivity is used. ∎
