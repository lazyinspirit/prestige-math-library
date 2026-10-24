---
id: thm-universal-property-of-profinite-completion
kind: theorem
title: "The profinite completion is initial among continuous homomorphisms from G to profinite groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-profinite-completion-of-an-abstract-group,
       def-canonical-map-to-the-profinite-completion,
       thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion,
       def-profinite-group-by-inverse-limit,
       thm-continuity-into-an-inverse-limit-is-coordinatewise,
       thm-concrete-inverse-limit-universal-property-in-groups,
       thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

The profinite completion is initial among continuous homomorphisms from $G$ to
profinite groups.

## Facts & Assumptions

**Given:** An abstract group $G$, a profinite group $P$, and a homomorphism $f:G\to P$ that is continuous for the profinite topology on $G$.

[L1] By definition, choose a topological group isomorphism $\theta:P\to\varprojlim_iP_i$ with every $P_i$ finite discrete ([[def-profinite-group-by-inverse-limit]]).

[L2] The canonical map $\iota_G:G\to\widehat G$ has dense image ([[thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion]]).

[F1] The compatible-tuples construction satisfies the inverse-limit universal property ([[thm-concrete-inverse-limit-universal-property-in-groups]]).

[F2] The completion $\widehat G$ is the inverse limit of the finite quotients $G/N$ with its inverse-limit topology, and the $N$th coordinate of $\iota_G(g)$ is $gN$ ([[def-profinite-completion-of-an-abstract-group]], [[def-canonical-map-to-the-profinite-completion]]).

[L3] A map into an inverse limit is continuous exactly when all coordinate composites are continuous ([[thm-continuity-into-an-inverse-limit-is-coordinatewise]]).

[L4] An inverse limit of finite discrete groups is Hausdorff ([[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]).

## Proof

**Proof technique:** direct.

1.1 For each coordinate $q_i:P\to P_i$ of [L1], put $N_i:=\ker(q_i\circ f)$. This is normal, and $G/N_i$ is isomorphic to the image of $q_i\circ f$ in the finite group $P_i$, so $N_i$ has finite index. Let $\overline f_i:G/N_i\to P_i$ be the induced homomorphism. [L1, given, construct, algebra]

2.1 Let $\pi_{N_i}:\widehat G\to G/N_i$ be the completion coordinate and define $\widehat f_i:=\overline f_i\circ\pi_{N_i}$. It is continuous because both finite quotients are discrete and $\pi_{N_i}$ is a coordinate projection for the topology in [F2]. Moreover, [F2] gives $$\widehat f_i\circ\iota_G=q_i\circ f.$$ [F2, L1, step 1.1, construct]

3.1 If $i\le j$ and $\varphi_{ij}:P_j\to P_i$ is the transition map, then $q_i=\varphi_{ij}\circ q_j$, so $N_j\subseteq N_i$. Let $\psi_{ij}:G/N_j\to G/N_i$ be the natural quotient map. The two induced maps satisfy $$\varphi_{ij}\circ\overline f_j=\overline f_i\circ\psi_{ij},$$ and the completion coordinates satisfy $\psi_{ij}\circ\pi_{N_j}=\pi_{N_i}$. Hence $\varphi_{ij}\circ\widehat f_j=\widehat f_i$, so $(\widehat f_i)_i$ is a compatible cone. [L1, step 1.1, step 2.1, algebra]

4.1 By [F1], the compatible cone from step 3.1 induces a homomorphism $h:\widehat G\to\varprojlim_iP_i$ with coordinate maps $\widehat f_i$. The coordinate identities in step 2.1 give $h\circ\iota_G=\theta\circ f$. Define $\widehat f:=\theta^{-1}\circ h$; then $\widehat f\circ\iota_G=f$. [F1, L1, step 2.1, step 3.1, construct]

5.1 Every coordinate composite of $h$ is the continuous map $\widehat f_i$, so [L3] makes $h$ continuous. The inverse $\theta^{-1}$ is continuous because $\theta$ is a topological group isomorphism, hence $\widehat f$ is continuous. [L1, L3, step 2.1, step 4.1]

5.2 For uniqueness, let $u,v:\widehat G\to P$ be continuous homomorphisms with $u\circ\iota_G=v\circ\iota_G=f$. By [L1] and [L4], $P$ is Hausdorff. The equalizer of $u$ and $v$ is therefore closed, while [L2] says it contains the dense subset $\iota_G[G]$. Thus the equalizer is all of $\widehat G$, and $u=v$. [L1, L2, L4, step 4.1, algebra]

6.1 Steps 4.1, 5.1, and 5.2 give the unique continuous homomorphism $\widehat f:\widehat G\to P$ extending $f$. Therefore $\widehat G$ is initial among continuous homomorphisms from $G$ to profinite groups. [step 4.1, step 5.1, step 5.2] ∎
