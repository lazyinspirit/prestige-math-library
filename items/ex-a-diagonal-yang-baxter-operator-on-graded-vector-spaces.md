---
id: ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces
kind: example
title: "A diagonal Yang–Baxter operator on graded vector spaces"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [thm-a-yang-baxter-operator-gives-braid-group-representations, def-yang-baxter-operator-on-an-object, thm-the-symmetric-group-has-the-coxeter-presentation, thm-von-dyck]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.4 (braidings on graded vector spaces from bicharacters), printed pp. 203--204; context for diagonal solutions. The arbitrary coefficient function here is justified by the explicit basis calculation, without a bicharacter or cocycle hypothesis."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $G$ be an abelian group, let $\chi\colon G\times G\to k^{\times}$ be any
function into the units of a field $k$, and let
$X=\bigoplus_{g\in G}ke_g$ be the free $G$-graded vector space, a direct sum
with one basis vector per group element. Define a linear map

$$R\colon X\otimes X\longrightarrow X\otimes X,\qquad R(e_g\otimes e_h)=\chi(g,h)\,e_h\otimes e_g .$$

Then $R$ is invertible, with
$R^{-1}(e_h\otimes e_g)=\chi(g,h)^{-1}e_g\otimes e_h$, and $R$ is a Yang–Baxter
operator on $X$: both sides of the cubic relation send $e_g\otimes e_h\otimes
e_l$ to $\chi(g,h)\chi(g,l)\chi(h,l)\,e_l\otimes e_h\otimes e_g$, and the two
scalar products agree because $k^{\times}$ is commutative. Hence
[[thm-a-yang-baxter-operator-gives-braid-group-representations]] gives
representations $\rho_n\colon B_n\to\operatorname{Aut}(X^{\otimes n})$ with
$\rho_n(\sigma_i)$ acting by scalar-weighted permutations of the graded basis. If
$\chi(g,h)\chi(h,g)=1$ for all $g,h$, then $R^2=1$ and the actions factor
through the symmetric groups; if $\chi(h,h)^2\ne1$ for some $h$ with
$ke_h\ne0$, then $R^2(e_h\otimes e_h)=\chi(h,h)^2e_h\otimes e_h$ shows that $R$
is not involutive.

## Facts & Assumptions

**Given:** an abelian group $G$, a field $k$, a function $\chi\colon G\times G\to k^{\times}$, the $G$-graded vector space $X=\bigoplus_{g\in G}ke_g$, and the linear map $R$ of the statement.

[L1] A Yang–Baxter operator on $X$ is an invertible $R\colon X\otimes X\to X\otimes X$ satisfying the cubic equation of [[def-yang-baxter-operator-on-an-object]] using the canonical associativity identifications in $\mathbf{Vect}_k$.

[L2] A Yang–Baxter operator on $X$ yields homomorphisms $\rho_n\colon B_n\to\operatorname{Aut}(X^{\otimes n})$ with $\rho_n(\sigma_i)$ the local operator of $R$ ([[thm-a-yang-baxter-operator-gives-braid-group-representations]]).

[F1] The symmetric group has the Coxeter presentation with generators $s_i$ and relators $s_i^2=1$, the braid relations and distant commutativity ([[thm-the-symmetric-group-has-the-coxeter-presentation]]), and von Dyck's theorem extends a relator-respecting generator assignment uniquely ([[thm-von-dyck]]).

## Verification

1.1 **Invertibility.** Define $R^{-1}$ on the graded basis by $R^{-1}(e_h\otimes e_g):=\chi(g,h)^{-1}e_g\otimes e_h$ and extend linearly. Then $R(R^{-1}(e_h\otimes e_g))=\chi(g,h)^{-1}R(e_g\otimes e_h)=e_h\otimes e_g$ and $R^{-1}(R(e_g\otimes e_h))=\chi(g,h)R^{-1}(e_h\otimes e_g)=e_g\otimes e_h$, so $R$ and $R^{-1}$ are mutually inverse linear bijections. [L1, given, algebra]

1.2 **The cubic relation.** Applying the left-hand composite $(R\otimes1_X)(1_X\otimes R)(R\otimes1_X)$ to $e_g\otimes e_h\otimes e_l$, from right to left, produces first $\chi(g,h)e_h\otimes e_g\otimes e_l$, then $\chi(g,l)e_h\otimes e_l\otimes e_g$, then $\chi(h,l)e_l\otimes e_h\otimes e_g$. Applying the right-hand composite $(1_X\otimes R)(R\otimes1_X)(1_X\otimes R)$ produces first $\chi(h,l)e_g\otimes e_l\otimes e_h$, then $\chi(g,l)e_l\otimes e_g\otimes e_h$, then $\chi(g,h)e_l\otimes e_h\otimes e_g$. Both sides therefore act on $e_g\otimes e_h\otimes e_l$ by multiplication by $\chi(g,h)\chi(g,l)\chi(h,l)$, and these scalars are equal in the commutative group $k^{\times}$; since the pure tensors of graded basis vectors span $X^{\otimes3}$, the cubic equation holds. [L1, given, algebra]

2.1 **The braid-group actions.** By steps 1.1 and 1.2 the map $R$ is an invertible solution of the cubic equation, hence a Yang–Baxter operator on $X$ in the sense of [L1], and [L2] gives the homomorphisms $\rho_n$ with $\rho_n(\sigma_i)$ acting on the graded basis by exchanging the $i$-th and $(i+1)$-st entries with the scalar $\chi$ attached to the two exchanged degrees. [L1, L2, step 1.1, step 1.2]

2.2 **Involutivity criterion.** On a pure tensor, $R^2(e_g\otimes e_h)=R(\chi(g,h)e_h\otimes e_g)=\chi(g,h)\chi(h,g)e_g\otimes e_h$, so $R^2=1_{X\otimes X}$ if and only if $\chi(g,h)\chi(h,g)=1$ for every pair $(g,h)$ with $ke_g,ke_h\ne0$. If this holds, then each local operator satisfies $R_i^2=1$ (it is a tensor product of identities with $R^2$) and the $R_i$ satisfy the braid relations, so the assignment $s_i\mapsto R_i$ respects the Coxeter relators of $S_n$ and [F1] gives homomorphisms $\psi_n\colon S_n\to\operatorname{Aut}(X^{\otimes n})$ with $\rho_n=\psi_n\circ\pi_n$; the actions factor through the symmetric groups. If instead $\chi(h,h)^2\ne1$ for some $h$ with $ke_h\ne0$, then $R^2(e_h\otimes e_h)=\chi(h,h)^2e_h\otimes e_h\ne e_h\otimes e_h$, so $R^2\ne1_{X\otimes X}$ and $R$ is not involutive. [L1, L2, F1, step 1.2, algebra]

3.1 **Conclusion.** The diagonal map $R(e_g\otimes e_h)=\chi(g,h)e_h\otimes e_g$ is always an invertible Yang–Baxter operator on the free graded vector space, its square is the diagonal map with coefficients $\chi(g,h)\chi(h,g)$, and it is involutive exactly when those coefficients are $1$. All computations are on a spanning set of pure tensors and use no choice principle. [step 1.1, step 1.2, step 2.1, step 2.2] ∎ 