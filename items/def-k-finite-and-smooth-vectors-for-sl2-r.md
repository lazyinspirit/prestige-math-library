---
id: def-k-finite-and-smooth-vectors-for-sl2-r
kind: definition
title: Smooth and K-finite vectors for SL2(R), and the (g,K)-module
status: draft
origin: pipeline
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - def-strongly-continuous-unitary-representation
  - def-special-linear-lie-algebra-sl-two
  - def-universal-enveloping-algebra-as-a-tensor-quotient
  - prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra
  - def-lie-bracket-on-the-tangent-space-of-a-lie-group
  - def-killing-form-of-a-semisimple-lie-algebra
  - def-quadratic-casimir-element
  - prop-the-quadratic-casimir-element-is-central
  - thm-one-parameter-subgroups-are-exactly-exponentials
  - def-one-parameter-subgroup-of-a-lie-group
  - def-axiom-of-choice
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is inherited from the Iwasawa supplier's normalized Haar measure on K; its consequence AC_omega is used by the one-parameter-subgroup and tangent-bracket suppliers. These definitions add no further choice."
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, printed pp. 9–11: infinitesimal action (2.4)–(2.6), explicit W,E± basis, and Casimir normalization"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 Lecture 9)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec09.pdf"
      locator: "§9.1, printed pp. 47–49: g_C=sl2(C), K-weights, and (g,K)-module conventions"
---
## Definition

Assume the Axiom of Choice. Let $G=\mathrm{SL}_2(\mathbb R)$, $K=\mathrm{SO}(2)$ with $k_\theta=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}$, and $\mathfrak g=\mathfrak{sl}_2(\mathbb R)$ with complexification $\mathfrak g_\mathbb C=\mathfrak{sl}_2(\mathbb C)$, using the conventions of [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]] and [[def-special-linear-lie-algebra-sl-two]]. Let $(\pi,H)$ be a strongly continuous unitary representation of $G$ ([[def-strongly-continuous-unitary-representation]]).

A vector $v\in H$ is **smooth** if its orbit map $g\mapsto\pi(g)v$ is $C^\infty$ in the norm topology of $H$; write $H^\infty$ for the smooth vectors. It is **$K$-finite** if $\operatorname{span}\{\pi(k)v:k\in K\}$ is finite-dimensional. Set $V:=H^{\infty,K}$, the vector space of smooth, $K$-finite vectors.

For $X\in\mathfrak g$ and $v\in H^\infty$, define the derived operator
$$L_Xv:=\left.\frac{d}{dt}\right|_{t=0}\pi(\exp_G(tX))v,$$
where $t\mapsto\exp_G(tX)$ is the one-parameter subgroup with tangent $X$ ([[def-one-parameter-subgroup-of-a-lie-group]], [[thm-one-parameter-subgroups-are-exactly-exponentials]]). Extend $X\mapsto L_X$ complex-linearly to $\mathfrak g_\mathbb C$. The maps $L_X$ preserve $H^\infty$, give a Lie-algebra action there, and extend uniquely to a unital action of $U(\mathfrak g_\mathbb C)$ ([[def-universal-enveloping-algebra-as-a-tensor-quotient]], [[prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra]]).

The **$(\mathfrak g,K)$-module associated to $\pi$** is $V$, with the restricted $K$-action $\pi|_K$ and derived $\mathfrak g_\mathbb C$-action $X\mapsto L_X|_V$. These actions preserve $V$ and satisfy
$$\pi(k)L_X\pi(k)^{-1}=L_{\operatorname{Ad}(k)X}\quad(k\in K,\ X\in\mathfrak g_\mathbb C),\qquad \operatorname{Ad}(k)X=kXk^{-1}.$$
The derivative of the $K$-action agrees with the restriction of $L$ to $\operatorname{Lie}(K)=\mathbb RJ$, and every vector lies in a finite-dimensional smooth $K$-invariant subspace. These are the compatibility and local finiteness conditions meant by a $(\mathfrak g,K)$-module here; no finite-multiplicity assertion is included. The enveloping-algebra action restricts to $V$.

For the fixed compact-adapted basis, put
$$J=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad S=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad D=\begin{pmatrix}1&0\\0&-1\end{pmatrix},$$
and define $W:=-iJ$ and $E_\pm:=\tfrac12(D\pm iS)$ in $\mathfrak g_\mathbb C$. Direct multiplication gives $[W,E_\pm]=\pm2E_\pm$ and $[E_+,E_-]=W$; also $W=-i\frac{d}{d\theta}|_{0}k_\theta$ in the complexified Lie algebra. For $n\in\mathbb Z$, define
$$H_n:=\{v\in H:\pi(k_\theta)v=e^{in\theta}v\text{ for all }\theta\in\mathbb R\},\qquad V_n:=V\cap H_n.$$
If $v\in H_n\cap H^\infty$, then $L_Jv=\left.\frac{d}{d\theta}\right|_0\pi(k_\theta)v=in v$, so $L_Wv=-iL_Jv=nv$.

The quadratic Casimir element $\Omega\in Z(U(\mathfrak g_\mathbb C))$ is normalized by
$$\Omega=\tfrac18W^2-\tfrac14W+\tfrac12E_+E_-.$$
In the ordered basis $(W,E_+,E_-)$, the displayed brackets give $B(W,W)=\operatorname{tr}((\operatorname{ad}W)^2)=8$, $B(E_+,E_-)=B(E_-,E_+)=\operatorname{tr}(\operatorname{ad}E_+\operatorname{ad}E_-)=4$, and zero for the remaining pairings. Thus the Killing-dual basis is $(W/8,E_-/4,E_+/4)$, so [[def-quadratic-casimir-element]] gives $W^2/8+(E_+E_-+E_-E_+)/4$; the bracket relation above gives the displayed formula. Centrality follows from [[prop-the-quadratic-casimir-element-is-central]]. All derived-action computations on this pair use this normalization.

## Facts & Assumptions

**Given:** AC; the finite-dimensional real Lie group $G=\mathrm{SL}_2(\mathbb R)$, a strongly continuous unitary representation $(\pi,H)$, a smooth vector $v\in H^\infty$, and real Lie-algebra elements $X,Y\in\mathfrak g$.

[F1] For every smooth vector $v$, the orbit map $F_v:G\to H$, $F_v(g)=\pi(g)v$, is $C^\infty$ in norm by the definition above.

[F2] For $X\in\mathfrak g$, the curve $\gamma_X(t)=\exp_G(tX)$ is a smooth one-parameter subgroup with $\gamma_X(0)=e$ and $\gamma_X'(0)=X$ ([[def-one-parameter-subgroup-of-a-lie-group]], [[thm-one-parameter-subgroups-are-exactly-exponentials]]).

[F3] The left-invariant fields $X^L,Y^L$ satisfy $[X^L,Y^L]=[X,Y]^L$ for the fixed tangent Lie bracket ([[def-lie-bracket-on-the-tangent-space-of-a-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 The curve $t\mapsto F_v(\gamma_X(t))$ is smooth by [F1] and [F2], so its derivative at $0$ exists and is $L_Xv$. For every $g\in G$, bounded linearity of $\pi(g)$ gives $\pi(g)L_Xv=\left.\frac{d}{dt}\right|_{0}F_v(g\gamma_X(t))=(X^LF_v)(g)$. In local coordinates $X^L=\sum_i a_i\partial_i$ with smooth coefficients, so $X^LF_v=\sum_i a_i\partial_iF_v$ is smooth as an $H$-valued map. Hence the orbit map of $L_Xv$ is smooth and $L_Xv\in H^\infty$. [F1, F2, algebra]

2.1 Applying the preceding identity twice gives $L_XL_Yv=(X^L(Y^LF_v))(e)$ and $L_YL_Xv=(Y^L(X^LF_v))(e)$. For an $H$-valued smooth map the commutator identity follows by applying every continuous linear functional on $H$ to it; these functionals separate points, and differentiation commutes with them. Therefore $L_XL_Yv-L_YL_Xv=([X^L,Y^L]F_v)(e)=([X,Y]^LF_v)(e)=L_{[X,Y]}v$ by [F3]. [F1, F2, F3, step 1.1]

2.2 For $k\in K$, the orbit map of $\pi(k)v$ is $g\mapsto F_v(gk)$, so $K$ preserves $H^\infty$. The curve $k\exp_G(tX)k^{-1}$ is a one-parameter subgroup with tangent $kXk^{-1}$, and hence equals $\exp_G(t\operatorname{Ad}(k)X)$ by [F2]. Differentiating gives $\pi(k)L_Xv=L_{\operatorname{Ad}(k)X}\pi(k)v$ for real $X$, and complex-linearity gives it for complex $X$. If $v\in V$, let $E=\operatorname{span}\{\pi(k)v:k\in K\}$; it is a finite-dimensional $K$-invariant subspace of $H^\infty$. For a basis $X_1,X_2,X_3$ of $\mathfrak g_\mathbb C$, the finite-dimensional span of all $L_{X_i}u$, $u\in E$, is $K$-invariant by this covariance identity and contains every $L_Xv$. Thus $L_Xv$ is $K$-finite as well as smooth, and $L_X$ preserves $V$. [F1, F2, step 1.1, algebra]

3.1 Complex-linearity extends this bracket identity to $\mathfrak g_\mathbb C$, so $X\mapsto L_X$ is a Lie-algebra action on $H^\infty$. The universal property of the enveloping algebra, [[prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra]], then gives the unique unital action of $U(\mathfrak g_\mathbb C)$ extending it. [step 2.1, algebra]

4.1 The $K$-action preserves $V$, since translating a finite-dimensional $K$-orbit span leaves it unchanged. Its restriction to each such span is smooth: all its vectors are smooth and coordinate functionals on the finite-dimensional span recover smooth matrix entries from their orbit maps. Differentiating $\pi(k_\theta)v$ gives $L_Jv$ because $k_\theta=\exp_G(\theta J)$; this identity follows from [F2] since both curves have tangent $J$. Hence the infinitesimal $K$-action and the restricted Lie-algebra action agree. Together with step 2.2 this proves all stated $(\mathfrak g,K)$ compatibilities. Stability under each $L_X$ also makes $V$ stable under their finite products and sums, so the action from step 3.1 restricts to $V$. [F1, F2, step 3.1, step 2.2, algebra] ∎

**Choice.** AC is inherited from the Iwasawa supplier's normalized Haar measure on $K$; its consequence $\mathrm{AC}_\omega$ is used by the one-parameter-subgroup and tangent-bracket suppliers. The smoothness, finiteness, basis, and K-type definitions here add no further choice ([[def-axiom-of-choice]]).
