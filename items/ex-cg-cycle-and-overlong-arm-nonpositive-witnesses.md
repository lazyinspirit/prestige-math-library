---
id: ex-cg-cycle-and-overlong-arm-nonpositive-witnesses
kind: example
title: "A cycle and an overlong arm: explicit non-positive witnesses"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 3
deps: [lem-cg-positive-definite-diagram-exclusions, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, def-definiteness-inertia-and-signature-data-over-the-reals, thm-of-square-roots, thm-quarter-turn-values-and-shift-formulas, thm-double-angle-and-power-reduction-identities, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, def-pi-via-first-positive-cosine-zero, lem-viete-finite-cosine-product-and-nested-radicals]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Proof of Theorem 5.15, printed pp. 13-15: the cyclicity witness v = e_{s_1}+...+e_{s_r} with <v,v> <= 0; the three-chain inequality and its boundary triples (1,2,5), (2,2,2), (1,3,3)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix C, Lemma C.2.2 and its proof (printed pp. 435-436): the diagrams in the right-hand column of Table 6.1, including the cycle A_n~ and the three-arm diagram E_8~, are positive semidefinite of corank 1. Lemma C.2.3 (printed p. 436) concerns the distinct path diagrams Z_4 and Z_5, not star-shaped extensions."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Throughout, $S$ is finite, $m$ is a Coxeter matrix with diagram $\Gamma$ and
Coxeter form $B$ on $V=\mathbb R^S$
([[def-cg-coxeter-diagram-components-and-finite-type]],
[[def-cg-real-coxeter-form-and-reflection]]), and one is asked whether $B$ can be
positive definite.

**(i) Cycles.** Let $\Gamma$ be the cycle on $r\ge3$ vertices
$s_1,\dots,s_r$ with all labels $3$, so that
$B(e_{s_i},e_{s_{i+1}})=-\frac12$ for consecutive pairs (indices modulo $r$) and
all other off-diagonal entries are $0$. Then $u=e_{s_1}+\cdots+e_{s_r}$
satisfies $B(u,u)=r-2\cdot r\cdot\frac12=0$, so the cycle is not positive
definite; more generally, if the labels on the cycle are $\ge3$ then
$B(u,u)\le0$.

**(ii) An overlong arm.** Let $\Gamma=E_9$ be the star with central vertex $c$
and arms of $1,2,5$ vertices, all edges labelled $3$, with arm vertices $a$
(length $1$), $b_1-b_2$ (length $2$, $b_1$ adjacent to $c$) and
$d_1-\cdots-d_5$ (length $5$, $d_5$ adjacent to $c$). Then
$$u=e_c+\tfrac12e_a+\tfrac13(2e_{b_1}+e_{b_2})+\tfrac16(e_{d_1}+2e_{d_2}+3e_{d_3}+4e_{d_4}+5e_{d_5})$$
satisfies $B(u,u)=0$; hence the star $(1,2,5)$, the one-vertex extension of
$E_8$, is not positive definite, in agreement with the arm inequality of
[[lem-cg-positive-definite-diagram-exclusions]] (6), which the triple $(1,2,5)$
fails with equality.

**(iii) Two large labels.** The three-vertex path with both edges labelled $4$
has the witness $u=e_{s_1}+\sqrt2\,e_{s_2}+e_{s_3}$ with $B(u,u)=0$, and the
four-vertex path with labels $4,3,4$ has the witness
$u=e_{s_1}+\sqrt2\,e_{s_2}+\sqrt2\,e_{s_3}+e_{s_4}$ with $B(u,u)=0$; these are
the first members of the family excluded in
[[lem-cg-positive-definite-diagram-exclusions]] (4)(ii).

## Facts & Assumptions

**Given:** A finite set $S$ with Coxeter matrix $m$ and diagram $\Gamma$, the space $V=\mathbb R^S$ with the Coxeter form $B$, and the specific diagrams of (i), (ii) and (iii).

[F1] Distinct vertices $s\ne t$ of $\Gamma$ are joined exactly when $m(s,t)\ge3$ and carry the label $m(s,t)$; the subdiagram $\Gamma_T$ is the induced labelled graph on $T$, so deleting vertices deletes exactly the incident edges; the neighbours of $s$ are $N(s)=\{t\ne s:m(s,t)\ge3\}$ ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] $B$ is the unique symmetric bilinear form on $V$ with $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ for $m(s,t)=\infty$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F3] If $0\ne u\in V_T$ for some $T\subseteq S$ and $B(u,u)\le0$, then $B$ is not positive definite; and if all coordinates of $u$ are $\ge0$ while a labelled graph $\Gamma_0$ on $T$ has all labels at most the labels of $\Gamma_T$, then $B_T(u,u)\le B_0(u,u)$ ([[lem-cg-positive-definite-diagram-exclusions]] (1)).

[F4] With $c(s,t):=-B(e_s,e_t)$ for $s\ne t$: $c(s,t)\in[0,1]$, $c(s,t)=0$ exactly when $m(s,t)=2$, and $c(s,t)\ge\frac12$ whenever $m(s,t)\ge3$ ([[lem-cg-positive-definite-diagram-exclusions]]).

[F5] For a vertex $v$ of degree $3$ whose edges all have label $3$ and whose three arms have $p,q,r\ge1$ vertices, $\frac1{p+1}+\frac1{q+1}+\frac1{r+1}>1$ is necessary for positive definiteness ([[lem-cg-positive-definite-diagram-exclusions]] (6)).

[F6] $\cos(2x)=2\cos^2x-1$ for every real $x$ ([[thm-double-angle-and-power-reduction-identities]]).

[F7] $\cos(x+\pi)=-\cos x$ and $\cos(-x)=\cos x$ for every real $x$ ([[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[F8] Cosine is strictly decreasing on $[0,\pi]$, $\pi>0$ and $\cos\pi=-1$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-pi-via-first-positive-cosine-zero]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F9] $\cos(\pi/4)=\sqrt2/2$ and this factor is positive ([[lem-viete-finite-cosine-product-and-nested-radicals]]).

[F10] $\sqrt2\ge0$ and $\sqrt2^2=2$ ([[thm-of-square-roots]]).

## Verification

1.1 (The two numerical values.) $\cos(\pi/4)=\sqrt2/2$ is [F9]. For $\cos(\pi/3)$, put $c=\cos(\pi/3)$: the shift formula gives $\cos(2\pi/3)=\cos(\pi-\pi/3)=-\cos(-\pi/3)=-c$ by [F7], while the double-angle formula gives $\cos(2\pi/3)=2c^2-1$ by [F6]; hence $2c^2-1=-c$, i.e. $(2c-1)(c+1)=0$. Since $0<\pi/3<\pi$ and cosine is strictly decreasing on $[0,\pi]$ with $\cos\pi=-1$, one has $c>-1$ [F8], so $c=\cos(\pi/3)=1/2$. [F6, F7, F8, F9, algebra]

2.1 (Weighted arms.) Let a path arm on vertices $s_1,\dots,s_p$ have all its edges labelled $3$ and let $s_p$ be the vertex adjacent to the centre $c$; put $u_p=\sum_{k=1}^{p}k\,e_{s_k}$. Every internal edge $\{s_k,s_{k+1}\}$ contributes $k(k+1)B(e_{s_k},e_{s_{k+1}})=-k(k+1)/2$ twice, so $B(u_p,u_p)=\sum_{k=1}^p k^2-\sum_{k=1}^{p-1}k(k+1)=p^2-\sum_{k=1}^{p-1}k=p(p+1)/2$, by [1.1] and [F2]; and $B(e_c,u_p)=-p/2$ since among the pairs $(c,s_k)$ only $\{c,s_p\}$ is an edge, with coefficient $p$. [F2, step 1.1, algebra]

2.2 (The cycle witness (i).) For the cycle of (i) put $u=\sum_{i=1}^{r}e_{s_i}\ne0$, a non-negative vector. Its diagonal contribution is $r$; each of the $r$ consecutive pairs contributes $2B(e_{s_i},e_{s_{i+1}})=-2c(s_i,s_{i+1})\le-1$ because $c\ge\frac12$ on edges [F4], and every other pair is a non-edge, contributing $0$ [F2, F4]; hence $B(u,u)\le r-r=0$, so $B$ is not positive definite by [F3]. If the labels on the cycle are any values $\ge3$, the same computation gives $B(u,u)\le0$ because each consecutive $c$ is still $\ge\frac12$ while every other pair contributes $\le0$ (an edge of label $\ge3$ gives $\le-1$, a non-edge gives $0$), and the conclusion is unchanged. [F1, F2, F3, F4, step 1.1, algebra]

2.3 (Two large labels (iii).) For the path with labels $4,4$ and $u=e_{s_1}+\sqrt2e_{s_2}+e_{s_3}$: the diagonal is $1+2+1=4$ [F2], and the two edges contribute $2\cdot(-\cos(\pi/4))\cdot\sqrt2=-2\sqrt2\cos(\pi/4)=-2$ each by [F10] and [1.1]; hence $B(u,u)=4-4=0$. For the path with labels $4,3,4$ and $u=e_{s_1}+\sqrt2e_{s_2}+\sqrt2e_{s_3}+e_{s_4}$: the diagonal is $1+2+2+1=6$, the two label-$4$ edges contribute $-2$ each, and the middle label-$3$ edge contributes $2\cdot(-\frac12)\cdot\sqrt2\cdot\sqrt2=-2$ by [1.1]; hence $B(u,u)=6-6=0$. In both cases $u\ne0$ has non-negative coordinates, so $B$ is not positive definite by [F3]. [F2, F3, step 1.1, F10, algebra]

3.1 (The star witness (ii).) In the star of (ii) the three arms meet only at $c$ [F1], so the three arm vectors $u_1=\frac12e_a$, $u_2=\frac13(2e_{b_1}+e_{b_2})$ and $u_3=\frac16(e_{d_1}+2e_{d_2}+3e_{d_3}+4e_{d_4}+5e_{d_5})$, in which the centre-adjacent vertices $a,b_1,d_5$ carry the weights $1,2,5$, are pairwise $B$-orthogonal; step 2.1 with $p=1,2,5$ gives $B(u_1,u_1)=\frac14$, $B(u_2,u_2)=\frac19\cdot3=\frac13$, $B(u_3,u_3)=\frac1{36}\cdot15=\frac5{12}$, and $B(e_c,u_1)=-\frac12\cdot\frac12=-\frac14$, $B(e_c,u_2)=-\frac13\cdot\frac22=-\frac13$, $B(e_c,u_3)=-\frac16\cdot\frac52=-\frac5{12}$. Therefore $u=e_c+u_1+u_2+u_3$ satisfies $B(u,u)=1+\frac14+\frac13+\frac5{12}+2(-\frac14-\frac13-\frac5{12})=1-(\frac14+\frac13+\frac5{12})=0$, and $u\ne0$ with all coordinates $\ge0$, so $B$ is not positive definite by [F3]. [F1, F2, F3, step 2.1, algebra]

4.1 (Agreement with the general exclusions.) The triple $(1,2,5)$ of arm lengths in (ii) gives $\frac1{1+1}+\frac1{2+1}+\frac1{5+1}=\frac12+\frac13+\frac16=1$, so it fails the necessary inequality [F5] with equality, and the star of (ii) is the first diagram at which the arm inequality becomes non-strict; the equality in the computation of [3.1] is the same equality. The paths of (iii) are the two shortest diagrams with two edges of label $\ge4$, so they are the first members of the family excluded in [[lem-cg-positive-definite-diagram-exclusions]] (4)(ii), whose witness vector is $\sqrt2$-weighted on the interior of the chain, exactly as in [2.3]. [F5, step 3.1, step 2.3, algebra] ∎
