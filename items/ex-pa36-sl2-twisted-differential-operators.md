---
id: ex-pa36-sl2-twisted-differential-operators
kind: example
title: The SL2 flag charts realize the stated rho shift
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-pa36-flag-tdo-and-module
  - def-special-linear-lie-algebra-sl-two
  - lem-pa36-flag-tdo-pbw-and-twist
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§§7.1–7.4, printed pp. 97–98; chart actions and line-bundle convention, converted to the repository's standard sl2 basis"
    - title: "Pavel Etingof, Representations of Lie Groups, MIT 18.757 (2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§29.1, printed pp. 143–144; twisted differential operators on the SL2 flag variety"
---

## Example

Let $G=\mathrm{SL}_2(\mathbb C)$, $X=G/B\cong\mathbb P^1$, and use the
repository basis
$$h=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad e=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad f=\begin{pmatrix}0&0\\1&0\end{pmatrix}.$$
Let $\rho$ satisfy $\rho(h)=1$. For an integer $c$, set
$\kappa=c\rho$ and $d=-c-1$. Then
$$\mathcal D_{c\rho}=\operatorname{Diff}(\mathcal O_{\mathbb P^1}(d)).$$
On $U_0=\{x\ne0\}$ with coordinate $z=y/x$ and frame $e_0=x^d$, the
infinitesimal action is
$$e=z^2\partial_z+(c+1)z,\qquad f=-\partial_z,\qquad h=2z\partial_z+(c+1).$$
On $U_1=\{y\ne0\}$ with coordinate $w=x/y$ and frame $e_1=y^d$, it is
$$e=-\partial_w,\qquad f=w^2\partial_w+(c+1)w,\qquad h=-2w\partial_w-(c+1).$$
These formulas glue, satisfy the $\mathfrak{sl}_2$ relations, and give
$\mathcal D_{-\rho}=\operatorname{Diff}(\mathcal O_{\mathbb P^1})$ when
$c=-1$.

## Facts & Assumptions

**Given:** The TDO and line-bundle convention of
[[def-pa36-flag-tdo-and-module]], the standard $\mathfrak{sl}_2$ basis of
[[def-special-linear-lie-algebra-sl-two]], and the integral identification
[[lem-pa36-flag-tdo-pbw-and-twist]].

[F1] The chosen basis satisfies $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$
([[def-special-linear-lie-algebra-sl-two]]).

[F2] For integral $\kappa$, $\mathcal D_\kappa$ is
$\operatorname{Diff}(\mathcal O_X(\kappa+\rho))$; in particular the TDO
parameter is shifted by $\rho$
([[lem-pa36-flag-tdo-pbw-and-twist]]).

## Verification

1.1 The weight of the unique positive root is $2\rho$, so $\rho(h)=1$. With $d=-c-1$, the associated line is $\mathcal O_X((c+1)\rho)=\mathcal O_{\mathbb P^1}(d)$ by [F2]. On $U_0$, the inverse upper-unipotent matrix sends $(1,z)$ to $(1-tz,z)$; therefore its action on a local coefficient $g(z)e_0$ is $(1-tz)^d g(z/(1-tz))e_0$. Differentiating at $t=0$ gives $z^2\partial_z-dz=z^2\partial_z+(c+1)z$ for $e$. The inverse lower unipotent sends $(1,z)$ to $(1,z-t)$, giving $-\partial_z$ for $f$. The inverse diagonal matrix sends $(1,z)$ to $(e^{-t},e^t z)$; the homogeneous frame contributes $e^{-dt}$, so differentiation gives $2z\partial_z-d=2z\partial_z+(c+1)$ for $h$. [F1, F2, given, algebra]

2.1 On $U_0\cap U_1$, the frames satisfy $e_1=z^d e_0$, so a coefficient $g_1(w)$ on $U_1$ corresponds to $g_0(z)=z^d g_1(1/z)$ on $U_0$. If $Tg_1=z^d g_1(1/z)$, direct differentiation gives $$T^{-1}\partial_zT=d w-w^2\partial_w.$$ Conjugating the three operators from step 1.1 by $T$ and using $d=-(c+1)$ gives, respectively, $-\partial_w$, $w^2\partial_w+(c+1)w$ and $-2w\partial_w-(c+1)$. Thus the two formulas glue. Since they are obtained by differentiating the algebraic $G$-action, their commutators are the brackets in [F1]; direct substitution gives the same relations. [F1, step 1.1, algebra]

3.1 At $c=-1$ one has $d=0$, so the line bundle is the trivial bundle and [F2] gives $\mathcal D_{-\rho}=\operatorname{Diff}(\mathcal O_X)$, as claimed. [F2, step 1.1] ∎

