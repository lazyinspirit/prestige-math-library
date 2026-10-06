---
id: thm-raikov-compact-open-and-weak-star-topologies-coincide-on-normalized-positive-type-functions
kind: theorem
title: "Raikov: compact-open and weak star topologies agree on normalized positive type functions"
deps:
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-a-locally-compact-hausdorff-space-is-completely-regular
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - def-continuous-function-of-positive-type
  - lem-positive-type-functions-satisfy-translation-estimates
  - thm-gns-construction-for-topological-groups
  - def-matrix-coefficient-of-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-l-infinity-on-a-measure-space
  - def-weak-star-convergence
  - def-directed-set-and-net
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-left-haar-integral-and-left-haar-measure
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-axiom-of-choice
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the Haar and L1-translation suppliers; the averaging and net arguments add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix C, §C.5: Theorem C.5.6, proof read in full"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.B: Theorem 1.B.13(4) (Raikov's theorem, with the reference to [BeHV–08, C.5])"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group with a fixed left Haar
measure and let $P_1(G)$ be the set of continuous functions of positive type
$\varphi$ with $\varphi(e)=1$
([[def-continuous-function-of-positive-type]]), viewed in the unit ball of
$L^\infty(G;\mathbb C)$. Here this means complex essentially bounded measurable functions modulo equality almost everywhere, paired with the complex Haar $L^1(G)$ by $[u]\mapsto(f\mapsto\int fu)$. Each class defines a bounded functional on $(L^1(G;\mathbb C))$ by this pairing. Its restriction to $P_1(G)$ is injective; no identification of the entire $L^\infty$ space with the dual is required. On $P_1(G)$ the weak-*
topology $\sigma(L^\infty,L^1)$, that is, the topology of convergence of
$\int_Gf\varphi_i$ for every $f\in L^1(G)$, coincides with the topology of
uniform convergence on compact subsets of $G$: a net
$(\varphi_i)\subseteq P_1(G)$ satisfies
$\int_Gf\varphi_i\to\int_Gf\varphi$ for every $f\in L^1(G)$ if and only if
$\varphi_i\to\varphi$ uniformly on every compact $Q\subseteq G$.

## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed left Haar measure $\mu$; the set $P_1(G)$; a net $(\varphi_i)_{i\in I}\subseteq P_1(G)$ and $\varphi\in P_1(G)$.

[A1] A continuous positive-type function is defined by the positive semidefiniteness of the matrices $(\varphi(g_j^{-1}g_k))$; for $\varphi\in P_1(G)$ the $2\times2$ matrix with entries $\varphi(e)=1,\varphi(g),\varphi(g^{-1}),1$ is positive semidefinite, so $\varphi(g^{-1})=\overline{\varphi(g)}$ and $|\varphi(g)|\le1$ for every $g$ ([[def-continuous-function-of-positive-type]]).

[A2] Translation estimates: if $\psi$ has a GNS triple $(\pi_\psi,H_\psi,\xi)$ with $\|\xi\|=1$ and $\psi(g)=\langle\pi_\psi(g)\xi,\xi\rangle$, then $|\psi(x)-\psi(y)|^2\le2(1-\operatorname{Re}\psi(y^{-1}x))$ and $2(1-\operatorname{Re}\psi(g))=\|\pi_\psi(g)\xi-\xi\|^2$ for all $x,y,g$ ([[lem-positive-type-functions-satisfy-translation-estimates]]). Every $\psi\in P_1(G)$ is the diagonal coefficient of a strongly continuous unitary representation with a cyclic unit vector with $\psi(e)=1$, namely its GNS triple ([[thm-gns-construction-for-topological-groups]], [[def-matrix-coefficient-of-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]]).

[A3] $L^1(G)$ is a Banach space, $C_c(G)\subseteq L^1(G)$ is dense, and left translations $L_xf(y)=f(x^{-1}y)$ are isometric with $x\mapsto L_xf$ continuous ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-left-haar-integral-and-left-haar-measure]], [[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]).

[A4] For bounded measurable $\psi$ with $|\psi|\le1$, the map $f\mapsto\int_G f\psi\,d\mu$ is a bounded linear functional on $L^1(G)$ of norm at most $1$. A continuous function $u$ not identically zero has a nonzero pairing: choose a compact neighbourhood $V$ inside an open set where $|u|>c>0$, and use $f=\mathbf1_V\overline u\in L^1(G)$, giving $\int fu=\int_V|u|^2>0$. Such a $V$ has finite positive Haar measure ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]). Thus the pairing embeds $P_1(G)$ faithfully in the dual, and the restricted weak-* topology is the topology of the stated evaluations ([[def-weak-star-convergence]], [[def-directed-set-and-net]]).

[A5] Cauchy–Schwarz for a probability measure: $\bigl|\int u\,d\nu\bigr|^2\le\int|u|^2\,d\nu$ when $\nu\ge0$ has total mass one ([[thm-cauchy-schwarz-in-an-inner-product-space]]).


[A6] Every open neighbourhood $W$ of a point in an LCH space contains a compact neighbourhood of that point. To see this, choose a compact neighbourhood $K$ with open $O\subseteq K$ containing the point. Complete regularity supplies a continuous $f:X\to[0,1]$ equal to $1$ there and zero outside $W\cap O$. Then $V=K\cap\{f\ge1/2\}$ is compact, is contained in $W$, and contains the open set $\{f>1/2\}$. Complete regularity under DC is available under AC ([[thm-a-locally-compact-hausdorff-space-is-completely-regular]], [[thm-choice-implies-dependent-implies-countable-choice]]).
## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$ with left Haar measure, a net $(\varphi_i)\subseteq P_1(G)$ and $\varphi\in P_1(G)$.

1.1 For every $\psi\in P_1(G)$ one has $|\psi(g)|\le1$ and $\psi(g^{-1})=\overline{\psi(g)}$: the matrix $\begin{pmatrix}1&\psi(g)\\\psi(g^{-1})&1\end{pmatrix}$ is positive semidefinite by [A1], so it is Hermitian with nonnegative determinant. [A1]

1.2 Averaging estimate. Let $V\subseteq G$ be a compact identity neighbourhood with $\mu(V)>0$, put $f:=\mu(V)^{-1}\mathbf 1_V\in L^1(G)$, and for $\psi\in P_1(G)$ define $A\psi(x):=\int_Gf(h)\psi(xh)\,dh$. Then $\sup_{x\in G}|A\psi(x)-\psi(x)|\le\bigl(2(1-\operatorname{Re}\int_Gf\psi)\bigr)^{1/2}$. Indeed, the change of variables $g=xh$ and left invariance of Haar measure give $A\psi(x)=\int_Gf(x^{-1}g)\psi(g)\,dg$, and [A2] together with the $2\times2$ case of [A1] gives $|\psi(xh)-\psi(x)|\le\bigl(2(1-\operatorname{Re}\psi(h))\bigr)^{1/2}$; hence $|A\psi(x)-\psi(x)|\le\int f(h)\bigl(2(1-\operatorname{Re}\psi(h))\bigr)^{1/2}dh$, and Cauchy–Schwarz for the probability measure $f\,dh$ of total mass one, [A5], bounds this by $\bigl(2\int f(h)(1-\operatorname{Re}\psi(h))\,dh\bigr)^{1/2}=\bigl(2(1-\operatorname{Re}\int f\psi)\bigr)^{1/2}$ by linearity of the integral. [A1, A2, A3, A5]

2.1 Uniformity on compact sets. Suppose $\int_Gu\varphi_i\to\int_Gu\varphi$ for every $u\in L^1(G)$. Then for every compact $Q\subseteq G$ and every $f\in L^1(G)$, $\sup_{x\in Q}\bigl|\int_G(L_xf)(\varphi_i-\varphi)\bigr|\to0$. Indeed, $K:=\{L_xf:x\in Q\}$ is a compact subset of $L^1(G)$ by [A3]; let $M:=\sup_i\|\varphi_i\|_\infty\vee\|\varphi\|_\infty\le1$ by step 1.1. Given $\epsilon>0$, cover $K$ by finitely many balls $B(u_j,\epsilon/(4M+1))$, $j=1,\dots,m$; for each $j$ the assumed convergence gives $|\int u_j(\varphi_i-\varphi)|<\epsilon/2$ eventually, and a common bound $i_0$ works for all $j$; for $i\ge i_0$ and any $x$ with $L_xf\in B(u_j,\epsilon/(4M+1))$ one has $|\int(L_xf-u_j)(\varphi_i-\varphi)|\le\|L_xf-u_j\|_1\,\|\varphi_i-\varphi\|_\infty<\epsilon/2$, so the sum is $<\epsilon$ uniformly over $x\in Q$. [A3, A4, step 1.1]

2.2 Compact-open convergence implies weak-* convergence. If $\varphi_i\to\varphi$ uniformly on compacta, then $\int_Gf(\varphi_i-\varphi)\to0$ for every $f\in L^1(G)$: given $\epsilon>0$, [A3] and absolute continuity of the integral provide a compact $Q$ with $\int_{G\setminus Q}|f|<\epsilon/4$; by step 1.1 both $\varphi_i$ and $\varphi$ are bounded by $1$, so $\bigl|\int f(\varphi_i-\varphi)\bigr|\le\|f\|_1\sup_Q|\varphi_i-\varphi|+2\int_{G\setminus Q}|f|<\epsilon$ once $\sup_Q|\varphi_i-\varphi|<\epsilon/(2\|f\|_1+2)$. [A3, step 1.1]

3.1 Weak-* convergence implies compact-open convergence. Assume $\int_Gf\varphi_i\to\int_Gf\varphi$ for every $f\in L^1(G)$, let $Q\subseteq G$ be compact and let $\epsilon>0$. By continuity of $\varphi$ at $e$ and $\varphi(e)=1$, choose, using [A6], a compact identity neighbourhood $V$ with $\sup_V|1-\varphi|<\delta$ for a small $\delta>0$ to be fixed below, and let $f=\mu(V)^{-1}\mathbf 1_V$. For all $i$ eventually, $1-\operatorname{Re}\int f\varphi_i<2\delta$, because $\int f\varphi_i\to\int f\varphi$ and $1-\operatorname{Re}\int f\varphi=\int f(1-\operatorname{Re}\varphi)\le\sup_V|1-\varphi|<\delta$. Hence by step 1.2, $\sup_{x\in G}|A\varphi_i(x)-\varphi_i(x)|\le2\sqrt\delta$ and $\sup_{x\in G}|A\varphi(x)-\varphi(x)|\le\sqrt{2\delta}$ eventually (for $\varphi$ itself directly, for $\varphi_i$ once the displayed inequality holds). By step 2.1, $\sup_{x\in Q}|A\varphi_i(x)-A\varphi(x)|\le\epsilon/3$ eventually, because $A\psi(x)=\int(L_xf)\psi$ as computed in step 1.2. Therefore eventually $\sup_Q|\varphi_i-\varphi|\le2\sqrt\delta+\epsilon/3+\sqrt{2\delta}$; taking $\delta$ so small that $2\sqrt\delta+\sqrt{2\delta}<\epsilon/3$ gives $\sup_Q|\varphi_i-\varphi|<\epsilon$. [A1, A3, A6, step 1.2, step 2.1]

4.1 Steps 3.1 and 2.2 prove the two implications for an arbitrary net, hence the two topologies on $P_1(G)$ coincide; no compactness theorem for $P_1(G)$ and no unimodularity is used, and the averaging in step 1.2 is matched with left translation in the $L^1$ pairing. The Axiom of Choice is inherited from the Haar and translation suppliers of [A1]–[A5]; the estimates themselves are choice-free ([[def-axiom-of-choice]]). [A1, A3, step 2.2, step 3.1] ∎ 
