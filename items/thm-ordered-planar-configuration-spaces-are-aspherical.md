---
id: thm-ordered-planar-configuration-spaces-are-aspherical
kind: theorem
title: "Ordered planar configuration spaces are aspherical"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-fadell-neuwirth-forgetful-fibration, lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles, lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent, def-pure-braid-group-from-ordered-configurations, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, prop-higher-homotopy-basepoint-transport-and-moving-homotopies]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-14 (Theorem 2.2: configuration spaces are K(pi,1))"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Edward Fadell and Lee Neuwirth, Configuration Spaces, section III, printed pp. 114-115"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
---

## Statement

Assume the Axiom of Choice. For every $n\ge1$, every $k\ge2$ and every base
configuration $q\in F_n(\operatorname{int}D^2)$ one has
$$\pi_k\bigl(F_n(\operatorname{int}D^2),q\bigr)=0 .$$
The same conclusion holds for $F_n(\mathbb C)$ and for $F_n(D^2)$ under the
coordinatewise radial homeomorphism $\mathbb C\to\operatorname{int}D^2$ and the
published inclusion homotopy equivalence. Consequently the open-disc and plane
ordered configuration spaces are $\mathrm K(PB_n,1)$ in the higher-homotopy
sense: their fundamental group is $PB_n$ in the convention of
[[def-pure-braid-group-from-ordered-configurations]] and all higher homotopy
groups vanish.

## Facts & Assumptions

**Given:** the Axiom of Choice, an integer $n\ge1$, a base configuration $q=(q_1,\dots,q_n)\in F_n(\operatorname{int}D^2)$, and the fibre spaces $M_{n-1}:=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$ for $n\ge2$.

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] In ZF, AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] For $M=\operatorname{int}D^2$ and $n\ge2$ the last-coordinate map $p:F_n(\operatorname{int}D^2)\to F_{n-1}(\operatorname{int}D^2)$ is, under AC and DC, a numerable locally trivial bundle with fibre over $q'$ equal to $F_1(M\setminus Q_{q'})=M\setminus Q_{q'}$, hence a Hurewicz and therefore Serre fibration ([[thm-fadell-neuwirth-forgetful-fibration]]).

[F3] For a based Serre fibration $p:(E,e_0)\to(B,b_0)$ with fibre $F=p^{-1}(b_0)$ the long exact sequence is exact wherever there is an incoming and outgoing arrow; in particular the segment $\pi_k(F)\xrightarrow{i_*}\pi_k(E)\xrightarrow{p_*}\pi_k(B)\xrightarrow{\partial_p}\pi_{k-1}(F)$ is exact for every $k\ge1$ ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F4] For every finite set $Q$ of distinct points of $\operatorname{int}D^2$ the complement $\operatorname{int}D^2\setminus Q$ has $\pi_j=0$ for every $j\ge2$, and $\operatorname{int}D^2$ itself is contractible; under the explicit radial homeomorphism the same holds for $\mathbb C$ minus finitely many points ([[lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]]).

[F5] For every $m\ge1$ and every base configuration $c\in F_m(\operatorname{int}D^2)$ one has $\pi_2(F_m(\operatorname{int}D^2),c)=0$ ([[lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction]]).

[F6] The inclusion $\iota^F:F_m(\operatorname{int}D^2)\to F_m(D^2)$ is a homotopy equivalence inducing isomorphisms on all homotopy groups, and the coordinatewise radial map restricts to a homeomorphism $F_m(\mathbb C)\to F_m(\operatorname{int}D^2)$; homotopy equivalences induce isomorphisms on all $\pi_k$, $k\ge1$, and based homotopy equivalences may be used to transfer vanishing statements ([[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]], [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]).

[F7] $PB_m=\pi_1(F_m(D^2),c)=\pi_1(F_m(\operatorname{int}D^2),c)$ for a base configuration $c$ of interior points, by the definition and its displayed inclusion isomorphism ([[def-pure-braid-group-from-ordered-configurations]]).

## Proof

**Proof technique:** induction on $n$ for fixed degree $k\ge3$.

1.1 **Fibre degree vanishing.** Let $Q$ be any finite set of distinct points of $\operatorname{int}D^2$. By [F4] the complement $\operatorname{int}D^2\setminus Q$ has $\pi_j=0$ for every $j\ge2$; in particular, for every $k\ge3$, both groups $\pi_k(\operatorname{int}D^2\setminus Q)$ and $\pi_{k-1}(\operatorname{int}D^2\setminus Q)$ vanish. [F4]

1.2 **The forgetful fibration.** By [F1] the Axiom of Choice [A1] yields DC, so for $n\ge2$ the map $p:F_n(\operatorname{int}D^2)\to F_{n-1}(\operatorname{int}D^2)$ forgetting the last coordinate is a Hurewicz fibration with fibre $M_{n-1}$ over $q'$, by [F2]; the fibre contains $q$ because $q_n\ne q_i$ for $i<n$. [A1, F1, F2]

1.3 **Base case $n=1$.** For $n=1$ single-coordinate evaluation gives $F_1(\operatorname{int}D^2)\cong\operatorname{int}D^2$, which is contractible by [F4]; a contractible space has vanishing $\pi_k$ for every $k\ge1$, so $\pi_k(F_1(\operatorname{int}D^2),q)=0$ for every $k\ge3$ and every base configuration $q$. [base, F4]

1.4 **Induction hypothesis.** Fix $k\ge3$, fix $n\ge2$ and assume that $\pi_k(F_{n-1}(\operatorname{int}D^2),c)=0$ for every base configuration $c\in F_{n-1}(\operatorname{int}D^2)$. [ih]

1.5 **Degree two.** For every $m\ge1$ and every base configuration $c\in F_m(\operatorname{int}D^2)$ one has $\pi_2(F_m(\operatorname{int}D^2),c)=0$ by [F5]; this is the case $k=2$ and needs no induction. [F5]

1.6 **Transferring vanishing.** By [F6] the coordinatewise radial homeomorphism gives a homeomorphism $F_m(\mathbb C)\cong F_m(\operatorname{int}D^2)$ for every $m$, and the inclusion $F_m(\operatorname{int}D^2)\to F_m(D^2)$ is a homotopy equivalence; both induce isomorphisms on all $\pi_k$ with $k\ge1$, so a vanishing statement transfers across them at corresponding basepoints. [F6]

2.1 **The induction step.** Fix $k\ge3$, let $q\in F_n(\operatorname{int}D^2)$ be an arbitrary base configuration with $n\ge2$ and put $q':=(q_1,\dots,q_{n-1})$. By step 1.2 the map $p$ is a based Serre fibration with $e_0=q$, $b_0=q'$ and fibre $M_{n-1}$, so the exact segment $\pi_k(M_{n-1})\xrightarrow{i_*}\pi_k(F_n(\operatorname{int}D^2),q)\xrightarrow{p_*}\pi_k(F_{n-1}(\operatorname{int}D^2),q')\xrightarrow{\partial}\pi_{k-1}(M_{n-1})$ of [F3] is available; the outer terms $\pi_k(M_{n-1})$ and $\pi_{k-1}(M_{n-1})$ vanish by step 1.1, since $k\ge3$ and $k-1\ge2$, and $\pi_k(F_{n-1}(\operatorname{int}D^2),q')=0$ by the induction hypothesis of step 1.4. Exactness then gives $\operatorname{im}(i_*)=\ker(p_*)=0$ and $\operatorname{im}(p_*)=\ker(\partial)=0$, so $p_*$ is both injective and zero and therefore $\pi_k(F_n(\operatorname{int}D^2),q)=0$. [step 1.1, step 1.2, step 1.4, F3]

3.1 **Induction conclusion.** Step 1.3 is the base case and step 2.1 proves the successor implication for arbitrary $n\ge2$ and arbitrary base configuration, so for every fixed $k\ge3$ and every $n\ge1$ one has $\pi_k(F_n(\operatorname{int}D^2),q)=0$. [step 1.3, step 2.1, discharge-induction]

4.1 **All degrees and all models.** Combining step 3.1 with step 1.5 covers every $k\ge2$ and every base configuration in the open-disc model; applying step 1.6 gives the same vanishing for $F_n(\mathbb C)$ and $F_n(D^2)$, and [F7] identifies the fundamental group of the open-disc and plane models with $PB_n$, so these spaces are $\mathrm K(PB_n,1)$ in the higher-homotopy sense. [step 1.5, step 1.6, step 3.1, F7, discharge-induction]

The induction is on the number of strands for each fixed degree $k\ge3$; the case $k=2$ was proved separately in advance and is not derived from any point-pushing statement. ∎
