---
id: lem-supergravity-lorentzian-variations-realize-all-directions
kind: lemma
title: Compactly Supported Metric Directions Stay Lorentzian for Small Amplitude
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - thm-sylvesters-law-of-inertia
  - def-smooth-manifold
  - def-ck-and-multi-index-notation-in-several-variables
  - lem-compactness-of-a-subspace-is-ambient
  - cor-inverse-matrix-by-adjugate
  - def-determinant-of-a-square-matrix
  - def-matrix-minors-cofactors-and-adjugate
  - thm-algebra-of-derivatives
dependency_roles:
  def-definiteness-inertia-and-signature-data-over-the-reals: mathematical-premise
  thm-sylvesters-law-of-inertia: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  lem-compactness-of-a-subspace-is-ambient: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-matrix-minors-cofactors-and-adjugate: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§1.1, Lorentzian metric and orthonormal-frame conventions."
    - title: "David Tong, General Relativity, University of Cambridge Part III lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§2.1, Lorentzian signature and local orthonormal frames."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $M$ be a smooth ten-manifold and $G$ a smooth Lorentzian metric of signature $(-+\cdots+)$, meaning inertia $(9,1,0)$. If $h$ is any smooth symmetric covariant $2$-tensor with compact support, there is $\epsilon>0$ such that $G+s h$ is Lorentzian with the same signature for every $|s|<\epsilon$. Consequently, every smooth compactly supported symmetric inverse-metric direction $q^{MN}$ is realized by a smooth family of Lorentzian metrics with $\partial_sG(s)^{MN}|_0=q^{MN}$.

## Facts & Assumptions

**Given:** The smooth ten-dimensional Lorentzian metric $G$, its signature $(-+\cdots+)$, and the compactly supported smooth symmetric tensor $h$, or the inverse-metric direction $q$.

[F1] A symmetric form of inertia $(9,1,0)$ is congruent to a diagonal normal form with nine positive entries, one negative entry, and no zero entries ([[thm-sylvesters-law-of-inertia]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F3] Every ambient open cover of a compact subset has a finite subcover ([[lem-compactness-of-a-subspace-is-ambient]]).

[F4] For a square real matrix $A\in M_m(\mathbb R)$, $m\ge1$, the determinant is the finite Leibniz sum of signed products of matrix entries, and the entries of the adjugate are signed determinants of deleted-row-and-column minors. When $\det A\ne0$, this real number is a unit of $\mathbb R$, with reciprocal $1/\det A$, so the adjugate formula gives $A^{-1}=(\det A)^{-1}\operatorname{adj}(A)$ ([[def-determinant-of-a-square-matrix]], [[def-matrix-minors-cofactors-and-adjugate]], [[cor-inverse-matrix-by-adjugate]]).

[F5] On an open subset of $\mathbb R^m$, the smoothness convention requires every finite ordered coordinate partial derivative to exist and be jointly continuous, including the word of length zero ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F6] On an open real coordinate interval, differentiable functions obey the sum and product rules and the quotient rule wherever the denominator is nonzero ([[thm-algebra-of-derivatives]]). This is used only for derivatives along one coordinate line; joint continuity is proved directly below.

## Proof

**Proof technique:** direct; prove pointwise openness of the Lorentzian matrices, make the amplitude uniform over the compact support, and differentiate the inverse relation.

1.1 By [F1], any Lorentzian form on a ten-dimensional vector space has a basis with matrix $D=\operatorname{diag}(-1,1,\ldots,1)$. Let a symmetric form in this basis have matrix $D+E$, where $\max_{a,b}|E_{ab}|<1/18$. For $v=\sum_{a=1}^{9}v_ae_a$ in the positive coordinate subspace, $(D+E)(v,v)\ge |v|^2-\max|E_{ab}|(\sum_{a=1}^{9}|v_a|)^2\ge(1-9\max|E_{ab}|)|v|^2>0$. Also $(D+E)(e_0,e_0)=-1+E_{00}<0$. Thus the form is positive on a 9-dimensional subspace $W$ and negative on the line spanned by $e_0$. By [F1], write its inertia normal form as $\operatorname{diag}(I_p,-I_q,0_r)$, where $p+q+r=10$. Projection from $W$ to the $p$ positive coordinates is injective: a nonzero vector in its kernel would have quadratic value at most zero, contrary to positivity on $W$; hence $p\ge9$. Projection from the negative line to the $q$ negative coordinates is also injective, since a vector supported only in positive and zero coordinates has nonnegative quadratic value; hence $q\ge1$. Therefore $p=9,q=1,r=0$. This proves that the Lorentzian forms form an open subset of the symmetric matrices near $D$. An invertible change of basis acts by an invertible linear congruence map on the space of symmetric matrices, so this open-set conclusion holds near every Lorentzian matrix in every basis. [F1, algebra]

1.2 We first prove the required algebra on an arbitrary open $U\subseteq\mathbb R^m$, with continuity understood jointly in all coordinates. If $u,v:U\to\mathbb R$ are continuous at $z_0$, write $u_0=u(z_0)$ and $v_0=v(z_0)$. For any $\eta>0$, their joint continuity gives one neighborhood where $|u-u_0|<\eta$ and $|v-v_0|<\eta$. On this neighborhood, $|(u+v)-(u_0+v_0)|<2\eta$; if $\eta\le1$, then $|uv-u_0v_0|\le|u|\,|v-v_0|+|v_0|\,|u-u_0|<(|u_0|+1+|v_0|)\eta$. Choosing $\eta$ small proves joint continuity of sums and products. If $v_0\ne0$, additionally require $|v-v_0|<|v_0|/2$, so $|v|>|v_0|/2$ and $|v^{-1}-v_0^{-1}|\le2|v-v_0|/|v_0|^2$; this proves joint continuity of the reciprocal on its nonzero domain, and products give quotients. These arguments use neighborhoods in $U$, not separate continuity along lines. For smooth inputs, restrict to an open interval in one coordinate direction and apply [F6]. Induction on the length of an ordered derivative word writes every derivative of a finite sum or product as a finite sum of products of input derivatives. For a nowhere-zero smooth $v$, the formula $\partial_i(v^{-1})=-v^{-2}\partial_i v$ and the same induction write every derivative of $v^{-1}$ as a finite sum of products of derivatives of $v$ divided by positive integer powers of $v$. Each such expression is jointly continuous by [F5] and the joint-continuity estimates just proved. Thus finite sums, products, and quotients with nonvanishing smooth denominators are smooth on $U$ in the exact ordered-partial sense of [F5]. [F5, F6, algebra]

2.1 Let $K=\operatorname{supp}h$. If $K=\varnothing$, then $G+s h=G$ for every $s$. Otherwise define $\mathcal C$ to be the set of all tuples $(p,\varphi,V,\delta,B)$ such that $p\in K$, $(V,\varphi)$ is a smooth chart with $p\in V$, $\delta,B>0$, the maximum-entry ball of radius $\delta$ around the coordinate matrix $G(p)$ consists of Lorentzian forms, and throughout $V$ one has $\|G(x)-G(p)\|_{\max}<\delta/2$ and $\|h(x)\|_{\max}<B$. Step 1.1 and continuity imply that for every $p\in K$ at least one such tuple exists. Thus the chart neighborhoods occurring in $\mathcal C$ form an open cover of $K$; this is the family of all admissible tuples, not a pointwise choice function. By [F3] there is a finite subcover with tuples $(p_j,\varphi_j,V_j,\delta_j,B_j)$, $1\le j\le N$. Set $\epsilon:=\min_{1\le j\le N}\delta_j/(2(1+B_j))>0$. If $x\in V_j$ and $|s|<\epsilon$, then $\|G(x)+s h(x)-G(p_j)\|_{\max}<\delta_j$, so $G(x)+s h(x)$ is Lorentzian in that chart. These neighborhoods cover $K$, and off $K$ the metric is unchanged. [step 1.1, F3, F5, algebra]

3.1 Given compactly supported smooth symmetric $q^{MN}$, set $h_{MN}:=-G_{MA}G_{NB}q^{AB}$; step 1.2 in a manifold chart makes this tensor smooth, and it is symmetric and compactly supported. By step 2.1, $G(s):=G+s h$ is Lorentzian for small $|s|$. On an open parameter-chart domain $U\subseteq\mathbb R\times\mathbb R^{10}$, the functions $G_{MN}(x)$ and $h_{MN}(x)$ lift smoothly: their ordered $x$ derivatives are pulled back by the continuous coordinate projection, and any derivative in $s$ is zero. The coordinate function $s$ is smooth, so step 1.2 makes every entry of $A(s,x):=(G(s)_{MN}(x))$ jointly smooth. By [F4], its determinant and adjugate entries are finite polynomials in these entries and hence smooth by step 1.2. Lorentzian nondegeneracy gives $\det A\ne0$ throughout $U$, so that same result makes $(\det A)^{-1}\operatorname{adj}(A)=A^{-1}$ jointly smooth. Differentiate $G(s)^{MA}G(s)_{AN}=\delta^M{}_N$ in $s$ at zero using [F6] to obtain $\partial_sG(s)^{MN}|_0=-G^{MA}G^{NB}h_{AB}=q^{MN}$. This is the required smooth Lorentzian family. [given, step 2.1, step 1.2, F4, F5, F6, algebra] ∎
