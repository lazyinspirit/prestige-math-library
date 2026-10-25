---
id: thm-geometric-braids-form-a-group
kind: theorem
title: "The isotopy classes of geometric braids based at $Q$ form a group, and the endpoint permutation is a homomorphism"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [prop-stacking-of-geometric-braids-is-well-defined,
       def-braid-isotopy-relative-top-and-bottom,
       def-geometric-braid-with-setwise-endpoints, def-group,
       def-finite-symmetric-group-and-permutation-notation,
       lem-continuity-is-local-and-pastes, def-interval,
       def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.2-1.3, printed pp. 4-5"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.1, author manuscript pp. 3-4"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $n\in\mathbb N$ and let $Q=(q_1,\dots,q_n)$ be the base configuration of
[[def-geometric-braid-with-setwise-endpoints]]. Write

$$G_n:=\{[\beta]:\beta\ \text{a braid based at}\ Q\}$$

for the set of braid isotopy classes relative to the top and bottom
([[def-braid-isotopy-relative-top-and-bottom]]), and let $[\gamma][\beta]:
=[\gamma\star\beta]$ be the stacking of
[[prop-stacking-of-geometric-braids-is-well-defined]]. Then:

**(a)** $G_n$ is a group ([[def-group]]) with this operation. Its identity is
the class $[e]$ of the trivial braid $e_j(t):=q_j$, and the inverse of
$[\beta]$, for $\beta=(z_1,\dots,z_n)$ with endpoint permutation $\pi(\beta)$,
is the class of the **reversed braid**

$$\overline\beta_j(t):=z_{\pi(\beta)^{-1}(j)}(1-t)\qquad(t\in I,\ 1\le j\le n).$$

**(b)** The endpoint permutation map

$$\pi\colon G_n\longrightarrow S_n,\qquad[\beta]\longmapsto\pi(\beta),$$

is a well-defined group homomorphism
([[def-finite-symmetric-group-and-permutation-notation]]).

The construction is choice-free: all motions and reparametrisations used are
given by explicit formulas.

## Facts & Assumptions

**Given:** A natural number $n$, the base configuration $Q=(q_1,\dots,q_n)$, braids $\beta=(z_j)$, $\gamma$, $\delta$ based at $Q$, the trivial braid $e$, and isotopy classes as above.

[F1] A braid based at $Q$ is a tuple $(u_1,\dots,u_n)$ of continuous maps $u_j\colon I\to D^\circ$ with $u_i(t)\ne u_j(t)$ for $i\ne j$, $u_j(0)=q_j$, and $\{u_1(1),\dots,u_n(1)\}=\{q_1,\dots,q_n\}$; the endpoint permutation $\pi(u)\in S_n$ is the unique permutation with $u_j(1)=q_{\pi(u)(j)}$; a braid is pure exactly when $\pi(u)=\operatorname{id}$, and the trivial braid $e_j(t)=q_j$ is pure ([[def-geometric-braid-with-setwise-endpoints]], [[def-finite-symmetric-group-and-permutation-notation]]).

[F2] Stacking $[\gamma][\beta]=[\gamma\star\beta]$ of [[prop-stacking-of-geometric-braids-is-well-defined]] is well defined on isotopy classes and associative, $\pi(\gamma\star\beta)=\pi(\gamma)\circ\pi(\beta)$, and the endpoint permutation is constant along braid isotopies: if $\beta\sim\beta'$ then $\pi(\beta)=\pi(\beta')$.

[F3] A braid isotopy from $\beta$ to $\beta'$ is a tuple $Z=(Z_1,\dots,Z_n)$ of jointly continuous maps $Z_j\colon I\times I\to D^\circ$ such that every slice $Z(s,\cdot)$ is a braid based at $Q$ and $Z_j(0,t)=z_j(t)$, $Z_j(1,t)=z'_j(t)$ for all $j,t$; isotopy implies homotopy of the strands relative to the endpoints of the motions, in the sense of [[def-homotopy-relative-and-path-homotopy]] ([[def-braid-isotopy-relative-top-and-bottom]]).

[L4] A group is a set with an associative binary operation, a two-sided identity and two-sided inverses ([[def-group]]).

[L5] Composites of continuous maps are continuous, continuity on a finite closed cover pastes, and the interval $I=[0,1]$ carries the subspace topology in which $[0,\tfrac12]$ and $[\tfrac12,1]$ are closed and cover $I$ ([[lem-continuity-is-local-and-pastes]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 **(a), the identity.** Write $\mu(t):=\max(0,2t-1)$ and $\nu(t):=\min(2t,1)$; since the right factor of a stacking runs during the first half of the height interval, $(e\star\beta)_j(t)=z_j(2t)=z_j(\nu(t))$ for $t\le\tfrac12$ and $(e\star\beta)_j(t)=e_{\pi(\beta)(j)}(2t-1)=q_{\pi(\beta)(j)}=z_j(1)=z_j(\nu(t))$ for $t\ge\tfrac12$, while $(\beta\star e)_j(t)=e_j(2t)=q_j=z_j(0)=z_j(\mu(t))$ for $t\le\tfrac12$ and $(\beta\star e)_j(t)=z_{\pi(e)(j)}(2t-1)=z_j(2t-1)=z_j(\mu(t))$ for $t\ge\tfrac12$; so $e\star\beta$ and $\beta\star e$ are the reparametrisations $z_j\circ\nu$ and $z_j\circ\mu$ of the tuple $\beta$. Both $\mu$ and $\nu$ are continuous nondecreasing maps of $I$ onto $I$ fixing $0$ and $1$ by [L5], so for $s\in I$ the maps $\mu_s(t):=(1-s)t+s\mu(t)$ and $\nu_s(t):=(1-s)t+s\nu(t)$ are again of that kind, and $Z_j(s,t):=z_j(\mu_s(t))$, $W_j(s,t):=z_j(\nu_s(t))$ are jointly continuous by [L5]; each slice $(z_j(\mu_s(t)))_j$ is a braid based at $Q$, because $\mu_s(0)=0$, $\mu_s(1)=1$ and the collision-freeness and continuity conditions of [F1] are inherited from $\beta$, and likewise for $\nu_s$; the boundary slices are $\beta$, $e\star\beta$ and $\beta\star e$ by $\mu_0=\nu_0=\operatorname{id}$, $\mu_1=\mu$, $\nu_1=\nu$. Hence $e\star\beta\sim\beta$ and $\beta\star e\sim\beta$, so $[e]$ is a two-sided identity for the operation of [F2]. [F1, F2, F3, L5]

1.2 **(a), the inverse is a braid.** For $\overline\beta_j(t):=z_{\pi(\beta)^{-1}(j)}(1-t)$ each $\overline\beta_j$ is a composite of continuous maps with values in $D^\circ$, and $\overline\beta_i(t)\ne\overline\beta_j(t)$ for $i\ne j$ because $\pi(\beta)^{-1}$ is injective and the $z_k$ are collision-free by [F1]; its bottom values are $\overline\beta_j(0)=z_{\pi(\beta)^{-1}(j)}(1)=q_{\pi(\beta)(\pi(\beta)^{-1}(j))}=q_j$, using the defining property of $\pi(\beta)$ in [F1], and its top values are $\overline\beta_j(1)=z_{\pi(\beta)^{-1}(j)}(0)=q_{\pi(\beta)^{-1}(j)}$, which run through the set $\{q_1,\dots,q_n\}$; hence $\overline\beta$ is a braid based at $Q$ with $\pi(\overline\beta)=\pi(\beta)^{-1}$. [F1]

1.3 **(b).** The map $\pi$ is well defined on classes $[\beta]$ by the constancy of the endpoint permutation along isotopies in [F2]; it satisfies $\pi(\gamma\star\beta)=\pi(\gamma)\circ\pi(\beta)$ by [F2], and $\pi(e)=\operatorname{id}$ because $e$ is pure by [F1]; a map of groups that preserves the operation and the identity is a group homomorphism into the symmetric group $S_n$ of [[def-finite-symmetric-group-and-permutation-notation]], so the formula $\pi\colon G_n\to S_n$, $[\beta]\mapsto\pi(\beta)$, defines a group homomorphism once $G_n$ is known to be a group. [F1, F2]

2.1 **(a), $\overline\beta\star\beta\sim e$.** By the stacking formula of [F2] and step 1.2, $(\overline\beta\star\beta)_j(t)=z_j(2t)$ for $t\le\tfrac12$ and $(\overline\beta\star\beta)_j(t)=\overline\beta_{\pi(\beta)(j)}(2t-1)=z_{\pi(\beta)^{-1}(\pi(\beta)(j))}(2-2t)=z_j(2-2t)$ for $t\ge\tfrac12$; that is, $\overline\beta\star\beta$ is the out-and-back reparametrisation $z_j\circ\lambda$ of $\beta$ with $\lambda(t):=2t$ for $t\le\tfrac12$ and $\lambda(t):=2-2t$ for $t\ge\tfrac12$. For $s\in I$ put $\lambda_s(t):=(1-s)\lambda(t)$; then $\lambda_s$ is continuous with $\lambda_s(0)=\lambda_s(1)=0$, so $Z_j(s,t):=z_j(\lambda_s(t))$ is jointly continuous by [L5], each slice $(z_j(\lambda_s(t)))_j$ is a braid based at $Q$ because it is a reparametrisation of the collision-free tuple $\beta$ with all bottom and top values equal to $q_j$, and the boundary slices are $\overline\beta\star\beta$ at $s=0$ and $e$ at $s=1$; hence $\overline\beta\star\beta\sim e$. [F1, F2, F3, step 1.2, L5]

3.1 **(a), $\beta\star\overline\beta\sim e$.** By the same computation with the roles of the two factors exchanged, $(\beta\star\overline\beta)_j(t)=z_{\pi(\beta)^{-1}(j)}(1-2t)$ for $t\le\tfrac12$ and $(\beta\star\overline\beta)_j(t)=z_{\pi(\beta)^{-1}(j)}(2t-1)$ for $t\ge\tfrac12$, which is again an out-and-back parametrisation of $\beta$ with the labels relabelled by $\pi(\beta)^{-1}$; putting $\kappa(t):=1-2t$ for $t\le\tfrac12$ and $\kappa(t):=2t-1$ for $t\ge\tfrac12$, and then $\kappa_s(t):=(1-s)\kappa(t)+s$, gives a braid isotopy: $\kappa_s(0)=\kappa_s(1)=1$, so every slice begins and ends at $z_{\pi(\beta)^{-1}(j)}(1)=q_j$ and is collision-free; at $s=1$ the slice is the constant braid. Thus this is a braid isotopy from $\beta\star\overline\beta$ to $e$. [F1, F2, step 1.2, step 2.1]

4.1 **(a), conclusion.** By steps 1.1, 2.1 and 3.1 the operation of [F2] on the isotopy classes based at $Q$ is associative, has the two-sided identity class $[e]$, and gives $[\overline\beta][\beta]=[e]=[\beta][\overline\beta]$ for every $[\beta]$; by [L4] the set $G_n$ of isotopy classes is therefore a group with identity $[e]$ and $[\beta]^{-1}=[\overline\beta]$. [L4, F2, step 1.1, step 2.1, step 3.1]

5.1 Assertions (a) and (b) are steps 4.1 and 1.3, the latter now applicable because step 4.1 makes $G_n$ a group; the group structure uses only the explicit stacking, reversal and reparametrisation formulas displayed above. ∎ [step 1.3, step 4.1]

## Remarks

- The inverse is built from time reversal together with the relabelling $\pi(\beta)^{-1}$ at the top; the relabelling is necessary because braid isotopy fixes the bottom points but only the top *set*, so a naive time reversal of the tuple would not return the bottom labels.
- For $n=0$ the set $G_0$ has exactly one element and $S_0$ is trivial, so both assertions are immediate; for $n=1$ the group $G_1$ consists of the isotopy classes of loops in the disc $D^\circ$ based at $q_1=(0,0)$. This page does not determine $G_1$, and no claim about it is used later.
- No choice principle is used: the identity isotopies are the explicit reparametrisations $\mu_s,\nu_s,\lambda_s$, and the inverse is the explicit formula $\overline\beta_j(t)=z_{\pi(\beta)^{-1}(j)}(1-t)$.
