---
id: def-reiter-condition-p1
kind: definition
title: Reiter's condition (P1)
status: published
origin: pipeline
dependency_level: 0
deps:
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-left-haar-integral-and-left-haar-measure
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-measure-preserving-transformation-and-system
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-directed-set-and-net
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, Theorem G.3.1(iii), including the definition of L^1(G)_{1,+} (printed pp. 453–454)"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 19: Reiter's Property and the Følner Condition"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture19_2012_Reiter.pdf"
      locator: "Definition of Reiter's Property and L^1(G)_{1,+} (PDF p. 11, file page indexed 10)"
    - title: "Matthew Daws and Volker Runde, Reiter's properties (P1) and (P2) for locally compact quantum groups, arXiv:0705.3432v5"
      url: "https://arxiv.org/pdf/0705.3432v5"
      locator: "Section 1, printed p. 2: Reiter's property (P_p), specialized to p=1"
---

## Definition

Let $G$ be a locally compact Hausdorff group with fixed left Haar measure
$\mu$, and put
$$\mathcal P:=\{f\in L^1(G):f\ge0,\ \|f\|_1=1\},$$
where $f\ge0$ means that the class has a real-valued representative that is
nonnegative almost everywhere. For $g\in G$ define
$(L_gf)(x):=f(g^{-1}x)$ on almost-everywhere classes. For compact
$Q\subseteq G$ and $f\in\mathcal P$, set
$$\Delta_Q(f):=\sup\bigl(\{0\}\cup\{\|L_gf-f\|_1:g\in Q\}\bigr).$$
Then $0\le\Delta_Q(f)\le2$, and $\Delta_\varnothing(f)=0$. The group $G$
satisfies **Reiter's condition (P1)** if for every compact $Q\subseteq G$
and every $\varepsilon>0$ there is $f\in\mathcal P$ with
$\Delta_Q(f)\le\varepsilon$.

Equivalently, there is a net $(f_i)_{i\in I}$ in $\mathcal P$ with its
inherited $L^1$-norm topology such that for
every compact $Q$ and every $\varepsilon>0$ some $i_0\in I$ satisfies
$\Delta_Q(f_i)\le\varepsilon$ for all $i\succeq i_0$; this is uniform
convergence to zero on compact subsets. The set $\mathcal P$ is convex and
$L_g\mathcal P=\mathcal P$ for every $g\in G$. Only left translates are
used, the measure $\mu$ is fixed, and no compactness assumption on $G$ is
made.

## Facts & Assumptions

**Given:** A locally compact Hausdorff group $G$ with a fixed left Haar measure $\mu$.

[A1] For each $g\in G$, the map $T_g(x)=g^{-1}x$ is Borel measurable and measure-preserving: $T_g^{-1}(E)=gE$ and $\mu(gE)=\mu(E)$ for Borel $E\subseteq G$. Thus it induces $L_gf=f\circ T_g$ on almost-everywhere classes ([[def-left-haar-integral-and-left-haar-measure]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-measure-preserving-transformation-and-system]]).

[F1] $L^1(G)$ consists of complex measurable almost-everywhere classes with $\|f\|_1=\int_G|f|\,d\mu$; if $f\ge0$, then $\int_G f=\|f\|_1$ ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F2] Integrals are invariant under measure-preserving maps, and the integral is complex-linear on $L^1(G)$ ([[thm-integrals-are-invariant-under-measure-preserving-maps]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F3] A net is a function indexed by a nonempty directed preorder; antisymmetry is not required ([[def-directed-set-and-net]]).

## Proof

**Proof technique:** direct.

1.1 If $f\in\mathcal P$, then [A1] makes $L_gf$ well-defined on classes and preserves nonnegativity. By [F2], $\|L_gf\|_1=\int_G|f\circ T_g|\,d\mu=\int_G|f|\,d\mu=1$. Thus $L_g\mathcal P\subseteq\mathcal P$; applying the same argument to $g^{-1}$ and using $L_{g^{-1}}L_g=I$ gives equality. Also, for every $g\in G$, $\|L_gf-f\|_1\le\|L_gf\|_1+\|f\|_1=2$, so the supremum defining $\Delta_Q(f)$ is finite and lies in $[0,2]$, including the empty-test value zero. [A1, F1, F2, algebra]

1.2 For $f,h\in\mathcal P$ and $t\in[0,1]$, choose nonnegative real representatives. Their convex combination is nonnegative and, by [F2], $\|tf+(1-t)h\|_1=\int_G(tf+(1-t)h)\,d\mu =t\|f\|_1+(1-t)\|h\|_1=1$. Therefore $tf+(1-t)h\in\mathcal P$ and $\mathcal P$ is convex. [F1, F2, construct, algebra]


2.1 If $(f_i)_{i\in I}$ is a net satisfying the compact-uniform condition, then for any compact $Q$ and $\varepsilon>0$ its defining eventual estimate supplies $i_0$ with $\Delta_Q(f_i)\le\varepsilon$ for all $i\succeq i_0$. In particular $f_{i_0}\in\mathcal P$ is a witness to Reiter's condition. [F3, step 1.1, given]

3.1 Conversely, assume Reiter's condition. Let $I$ be the set of all triples $(Q,\varepsilon,f)$ with $Q$ compact, $\varepsilon>0$, $f\in\mathcal P$, and $\Delta_Q(f)\le\varepsilon$. Order them by $(Q,\varepsilon,f)\preceq(Q',\varepsilon',f')$ exactly when $Q\subseteq Q'$ and $\varepsilon'\le\varepsilon$. It is nonempty, since the condition at the compact singleton $\{e\}$ and $\varepsilon=1$ supplies a witness. It is directed: for two indices apply the condition to the compact union of their test sets, which is compact as a finite union, and the positive minimum of their tolerances, obtaining a witness that gives a common upper bound. By [F3], the third-coordinate map $i\mapsto f_i$ is a net. Given any compact $Q$ and $\varepsilon>0$, the condition supplies $i_0=(Q,\varepsilon,f_0)$; every $i\succeq i_0$ then has $\Delta_Q(f_i)\le\Delta_{Q_i}(f_i)\le\varepsilon_i\le\varepsilon$. Every index carries its own witness, so no global choice function is used. [F3, construct, algebra] ∎
