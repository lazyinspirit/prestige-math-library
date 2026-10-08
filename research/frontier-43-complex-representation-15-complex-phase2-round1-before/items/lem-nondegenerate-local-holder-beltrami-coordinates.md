---
id: lem-nondegenerate-local-holder-beltrami-coordinates
kind: lemma
title: "Nondegenerate local Hölder coordinates for a Hölder coefficient"
status: draft
origin: pipeline
deps:
  - cor-mean-value-theorem
  - def-ck-and-multi-index-notation-in-several-variables
  - def-complex-domain
  - def-countable-choice
  - def-holder-spaces-c-k-alpha-and-their-scaled-norms
  - def-measurable-beltrami-coefficient
  - def-wirtinger-derivatives
  - lem-local-holder-cauchy-transform-estimate
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-algebra-of-derivatives
  - thm-banach-fixed-point
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-complete-subspace-iff-closed
  - thm-euclidean-inverse-function-theorem
  - thm-holder-spaces-on-bounded-domains-are-banach-spaces
dependency_level: 1
proof_strategy: contraction
axiom_use: >-
  Assume Countable Choice through the completeness of the bounded Hölder space
  and the fixed-support Cauchy-transform interfaces. The closed-subspace
  completeness direction and Banach iteration add no selection; no full Axiom
  of Choice is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.4, printed pp. 196–197: the real-analytic local solution by complexification, characteristics, and a nonsingular first integral; contextual motivation only, not the Hölder contraction proof here."
    - title: "Kari Astala, Albert Clop, Daniel Faraco, Jarmo Jääskeläinen and Aleksis Koski, Nonlinear Beltrami operators, Schauder estimates and bounds for the Jacobian, Ann. Inst. H. Poincaré Anal. Non Lineaire 34 (2017), 1543–1559"
      url: "https://ems.press/content/serial-article-files/16835"
      locator: "§§2.1–2.4, printed pp. 1545–1554: autonomous estimates, the disk Riemann–Hilbert problem, freezing and Schauder estimates; read in full as context. This item instead proves a fixed-support C^{k,alpha} contraction from its local Cauchy-transform supplier and imports no global Beurling L^p theorem."
aliases: []
---

## Statement

Assume Countable Choice. Fix an integer $k\ge0$, $0<\alpha<1$ and $0\le k_0<1$. Let $U\subseteq\mathbb C$ be a complex domain and let $\mu\in C^{k,\alpha}(U)$ satisfy $|\mu(z)|\le k_0$ for every $z\in U$ (so $\mu$ is a $C^{k,\alpha}$ Beltrami coefficient in the sense of [[def-measurable-beltrami-coefficient]]). Then for every $p\in U$ there are an open neighborhood $V\subseteq U$ of $p$ and an injective map $\Phi:V\to\mathbb C$ such that
$$\Phi\in C^{k+1,\alpha}(V),\qquad \Phi_{\bar z}(z)=\mu(z)\Phi_z(z)\ \text{for every }z\in V,\qquad J_\Phi(z)=|\Phi_z(z)|^2-|\Phi_{\bar z}(z)|^2>0\ \text{on }V,$$
and $\Phi(V)$ is open while $\Phi^{-1}:\Phi(V)\to V$ is also of class $C^{k+1,\alpha}$. The construction uses affine freezing of $\mu(p)$, rescaling and a fixed cutoff, and a contraction on a fixed-support Hölder space; it does not use any previously given solution of the equation.

## Facts & Assumptions

**Given:** Countable Choice; an integer $k\ge0$; $0<\alpha<1$; $0\le k_0<1$; a complex domain $U$; a coefficient $\mu\in C^{k,\alpha}(U)$ with $|\mu|\le k_0$; and a point $p\in U$.

[F1] The coefficient is pointwise bounded by $k_0<1$; the measurable Beltrami convention and its strict essential bound are those of [[def-measurable-beltrami-coefficient]].

[F2] $C^{k,\alpha}_b$ uses the full norm consisting of suprema of derivatives through order $k$ and the top-order $\alpha$-Hölder seminorm; derivatives and multi-indices are as in [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]] and [[def-ck-and-multi-index-notation-in-several-variables]].

[F3] Continuous first partial derivatives imply real total differentiability, and the Wirtinger identity is $Dh(h_0)=h_z h_0+h_{\bar z}\overline{h_0}$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-wirtinger-derivatives]]).

[F4] There is a smooth cutoff $\chi:\mathbb R^2\to[0,1]$ equal to $1$ on $\overline B_1(0)$ and supported in $B_2(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F5] For $q\in C^{k,\alpha}_b(\mathbb R^2;\mathbb C)$ supported in $\overline D_2$, the fixed-support Cauchy transform satisfies $\partial_{\bar z}Tq=q$ and has local $C^{k+1,\alpha}$ regularity ([[lem-local-holder-cauchy-transform-estimate]]).

[F6] The space $C^{k,\alpha}_b(\mathbb R^2;\mathbb C)$ with this norm is a Banach space under Countable Choice ([[thm-holder-spaces-on-bounded-domains-are-banach-spaces]]).

[F7] A closed subspace of a complete metric space is complete; this direction is choice-free ([[thm-complete-subspace-iff-closed]]).

[F8] A contraction of a nonempty complete metric space into itself has a unique fixed point ([[thm-banach-fixed-point]]).

[F9] The real mean-value theorem bounds the change of a real $C^1$ function along a segment by the supremum of its derivative times the segment length ([[cor-mean-value-theorem]]).

[F10] A real $C^1$ map with invertible derivative at a point has a local $C^1$ inverse, and the derivative of the inverse is the inverse matrix ([[thm-euclidean-inverse-function-theorem]]).

[F11] The real total-derivative chain rule holds for differentiable maps ([[thm-chain-rule-for-total-derivatives]]).

[F12] Countable Choice is the assertion that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F13] Restricting each coordinate derivative to its coordinate line and iterating the one-variable product rule gives the multi-index Leibniz formula ([[thm-algebra-of-derivatives]]).

[F14] For fixed-support $q$, $Sq=\partial_zTq$ lies in $C^{k,\alpha}_b(\mathbb R^2)$ and satisfies the stated operator bound ([[lem-local-holder-cauchy-transform-estimate]]).

**Choice use.** Countable Choice is used through the Cauchy-transform interfaces [F5], [F14] and the bounded Hölder-space completeness [F6]. The closed-support subspace is complete by the choice-free direction [F7], and the fixed-point iteration in [F8] is constructive. No full Axiom of Choice is used.

## Proof

**Proof technique:** contraction.

1.1 Replace $U$ by $U-p$ and $\mu(z)$ by $\mu(p+z)$; translation preserves the Hölder norms and equation, and we undo it at the end. Now $p=0$. Put $a:=\mu(0)$ and $A(z):=z+a\bar z$. Its real Jacobian is $1-|a|^2>0$ and $A^{-1}(w)=(w-a\bar w)/(1-|a|^2)$. On $A(U)$ define $\nu(w):=(\mu(A^{-1}w)-a)/(1-\bar a\mu(A^{-1}w))$. The denominator has modulus at least $1-k_0^2>0$. If $g_{\bar w}=\nu g_w$ and $\Phi=g\circ A$, [F3] and the chain rule [F11] give $\Phi_{\bar z}=(g_w\circ A)(a+\nu\circ A)$ and $\Phi_z=(g_w\circ A)(1+\bar a\nu\circ A)$, so $\Phi_{\bar z}=\mu\Phi_z$ by the definition of $\nu$. [F1, F3, F11, given, algebra]

1.2 We first record the finite product bound used below. Repeated coordinatewise product rules give $D^\beta(uv)=\sum_{\gamma\le\beta}\binom\beta\gamma D^\gamma u\,D^{\beta-\gamma}v$. For $|\gamma|<k$, the mean-value theorem bounds the $\alpha$-seminorm of $D^\gamma u$ by its next derivative when $|x-y|\le1$, and the sup norm does so when $|x-y|\ge1$; for $|\gamma|=k$ the top seminorm is part of the norm. Since $[fg]_{0,\alpha}\le\|f\|_\infty[g]_{0,\alpha}+\|g\|_\infty[f]_{0,\alpha}$, the Leibniz sum gives $P_{k,\alpha}<\infty$ with $\|uv\|_{C^{k,\alpha}}\le P_{k,\alpha}\|u\|_{C^{k,\alpha}}\|v\|_{C^{k,\alpha}}$ on $\mathbb R^2$. [F2, F9, F13, algebra]

2.1 The identity $|1-\bar a t|^2-|t-a|^2=(1-|a|^2)(1-|t|^2)$ shows that $\nu(0)=0$ and $|\nu(w)|<1$. The denominator bound and repeated chain and product rules show that $\nu$ is $C^{k,\alpha}$ near $0$: the rational map $t\mapsto(t-a)/(1-\bar a t)$ has bounded derivatives on $|t|\le k_0$, and composition with the affine map $A^{-1}$ preserves the finite-order derivative and top Hölder bounds. [F1, F2, F11, F13, step 1.1, algebra]

3.1 Choose $r>0$ so small that $\overline B_{2r}(0)\subset A(U)$ and define $b_r(\xi):=\chi(\xi)\nu(r\xi)$ on $B_2(0)$, extended by zero outside. Since $\chi$ is supported in a compact subset of $B_2$, this extension is $C^{k,\alpha}$ and supported in $\overline D_2$. Its norm tends to zero as $r\downarrow0$. For $k=0$, $\nu(0)=0$ gives $\sup_{B_2}|\nu(r\cdot)|\le2^\alpha r^\alpha[\nu]_{0,\alpha;B_{2r}}$ and $[\nu(r\cdot)]_{0,\alpha;B_2}=r^\alpha[\nu]_{0,\alpha;B_{2r}}$. For $k\ge1$, the zeroth-order supremum is $O(r)$, the order-$j$ derivative suprema are $O(r^j)$ for $1\le j\le k$, and the top seminorm is $r^{k+\alpha}[D^k\nu]_{0,\alpha;B_{2r}}$. The product bound of step 1.2 with the fixed cutoff proves $\|b_r\|_{C^{k,\alpha}(\mathbb R^2)}\to0$. Decrease $r$ so also $P_{k,\alpha}M_{k,\alpha}\|b_r\|_{C^{k,\alpha}}<1/2$, $2(1+M_{k,\alpha})\|b_r\|_{C^{k,\alpha}}\le1/4$, and $\|b_r\|_\infty<1$. [F2, F4, F9, F11, F13, step 2.1, step 1.2, given]

4.1 Let $X:=\{q\in C^{k,\alpha}_b(\mathbb R^2;\mathbb C):\operatorname{supp}q\subseteq\overline D_2\}$. It is nonempty and closed in the Banach space of [F6], since norm convergence implies uniform convergence and a uniform limit of functions vanishing outside $\overline D_2$ still vanishes there. Hence $X$ is complete by [F7]. With the radius from step 3.1, define $\mathcal T(q):=b_r(1+Sq)$. It maps $X$ to $X$, and steps 1.2 and [F14] give $\|\mathcal T(q_1)-\mathcal T(q_2)\|_{C^{k,\alpha}}\le P_{k,\alpha}M_{k,\alpha}\|b_r\|_{C^{k,\alpha}}\|q_1-q_2\|_{C^{k,\alpha}}$. By [F8] there is a fixed point $q\in X$; its equation and the same bound give $\|q\|_{C^{k,\alpha}}\le2\|b_r\|_{C^{k,\alpha}}$. [F6, F7, F8, F12, F14, step 1.2, step 3.1, given]

5.1 Put $\varphi(\xi):=\xi+Tq(\xi)$. By [F5], $\varphi_{\bar\xi}=q=b_r(1+Sq)=b_r\varphi_\xi$. The real operator norm of $D(Tq)$ is $|Sq|+|q|$, since its action is $h\mapsto(Sq)h+q\bar h$ and the argument of $h$ can align the two summands. Hence $\|D(Tq)\|_\infty\le(1+M_{k,\alpha})\|q\|_{C^{k,\alpha}}\le1/4$ by steps 3.1 and 4.1. Thus $|\varphi_\xi-1|=|Sq|\le1/4$, and $J_\varphi=|\varphi_\xi|^2-|\varphi_{\bar\xi}|^2=|\varphi_\xi|^2(1-|b_r|^2)>0$. For the two real components of $Tq$, [F9] on the segment from $x$ to $y$ gives $|Tq(x)-Tq(y)|\le\sqrt2\|D(Tq)\|_\infty|x-y|\le(\sqrt2/4)|x-y|$. Hence $|\varphi(x)-\varphi(y)|\ge(1-\sqrt2/4)|x-y|>|x-y|/2$: $\varphi$ is injective and its inverse is Lipschitz. Since $J_\varphi>0$, [F10] makes it a local $C^1$ diffeomorphism; injectivity then makes it a global diffeomorphism onto its open image. [F3, F5, F9, F10, F14, step 3.1, step 4.1, algebra]

6.1 On $D_r(0)$ define $g(w):=\varphi(w/r)$. Since $\chi=1$ on $\overline D_1$, step 5.1 gives $g_{\bar w}=\nu(w)g_w$ there. Put $V:=A^{-1}(D_r(0))\subset U$ and $\Phi:=g\circ A$ on $V$. By step 1.1 and the real chain rule, $\Phi_{\bar z}=\mu\Phi_z$ at every $z\in V$, and $J_\Phi(z)=|g_w(Az)|^2\bigl(|1+\bar a\nu(Az)|^2-|a+\nu(Az)|^2\bigr)=|g_w(Az)|^2(1-|a|^2)(1-|\nu(Az)|^2)>0$. Here $g_w=r^{-1}\varphi_\xi(w/r)$ is nonzero by step 5.1. The maps $A$ and $g|_{D_r}$ are injective, so $\Phi$ is injective; $\Phi(V)=\varphi(D_1)$ is open by step 5.1. The affine changes and the local bound in [F5] give $\Phi\in C^{k+1,\alpha}(V)$. Undoing the translation gives the desired neighborhood and map at the original $p$. [F1, F3, F4, F5, F11, step 1.1, step 3.1, step 5.1, algebra]

7.1 It remains to check the full Hölder regularity of the inverse. The real derivative field $D\varphi$ has bounded $C^{k,\alpha}$ norm, since its Wirtinger components are $1+Sq$ and $q$. The bound $\|D\varphi-I\|_\infty\le1/4$ keeps these matrices in a bounded subset of $GL(2,\mathbb R)$ with inverses uniformly bounded. The explicit cofactor-over-determinant formula and the product and chain rules therefore give $M:=(D\varphi)^{-1}\in C^{k,\alpha}_b(\mathbb R^2)$. Let $H:=\varphi^{-1}$ on $\varphi(\mathbb R^2)$. By [F10], $DH=M\circ H$, and step 5.1 makes $H$ globally Lipschitz. Thus $DH$ is $\alpha$-Hölder with a uniform bound when $k=0$. For $k\ge1$, induction on $m=1,\dots,k$ applies the finite chain/product formulas to $M\circ H$: if $H$ has derivatives through order $m$ with bounded suprema and top $\alpha$-seminorm, then $M\circ H$ has the same regularity, so $DH=M\circ H$ gives the next derivative of $H$ with bounded suprema and the required top seminorm. The top composition term is $D^kM\circ H$, which is $\alpha$-Hölder because $H$ is Lipschitz; all other factors are covered by the product estimate of step 1.2. Hence $H$ has bounded derivatives through order $k+1$ and bounded top $\alpha$-seminorm on $\varphi(D_1)$. Since $H(\varphi(D_1))=D_1$, its function supremum is finite there as well. For $\eta\in\Phi(V)=\varphi(D_1)$, $\Phi^{-1}(\eta)=A^{-1}(rH(\eta))$, so the inverse is $C^{k+1,\alpha}$ on $\Phi(V)$. [F2, F3, F10, F11, F13, F14, step 1.2, step 5.1, step 6.1, algebra] ∎

## Source notes

Lyubich §14.4 constructs local coordinates for real-analytic coefficients by characteristics and a nonsingular first integral. Astala et al. §§2.1–2.4 develop a different freezing/Schauder route and a local disk Riemann–Hilbert solver using the Beurling transform. The proof above does not cite either argument as a substitute for its fixed-support Hölder contraction: the needed Cauchy and $S$ bounds are supplied by [[lem-local-holder-cauchy-transform-estimate]], and every contraction and inverse estimate is displayed locally.
