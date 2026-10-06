---
id: lem-lca-haar-measure-is-inversion-invariant
kind: lemma
title: Haar measure on an abelian group is invariant under inversion
dependency_level: 0
deps:
- def-left-haar-integral-and-left-haar-measure
- def-radon-measure-on-an-lch-space
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- def-topological-group
- def-locally-compact-space
- def-dependent-choice
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
- lem-finite-lch-partition-of-unity-near-a-compact-set
- lem-positive-linear-functionals-on-c-c-are-monotone
- thm-rmk-uniqueness-among-radon-measures
- thm-compactness-under-continuous-maps
- thm-finite-products-of-compact-spaces
- cor-cauchy-reals-lub-complete
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Gert K. Pedersen, The existence and uniqueness of the Haar integral on a locally compact topological group (2000), definitions and the second proof of uniqueness, pp. 2-5"
    url: "https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf"
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group
with a left Haar measure $m$ ([[def-left-haar-integral-and-left-haar-measure]]).
Then
$$m(-E)=m(E)\qquad\text{for every Borel set }E\subseteq G .$$

## Facts & Assumptions

**Given:** Dependent Choice, a locally compact Hausdorff abelian group $G$ written additively, and a left Haar measure $m$ on $G$. Write $\nu(E):=m(-E)$ and $I(f):=\int_Gf\,dm$, $J(f):=\int_Gf\,d\nu$ for the corresponding positive real-linear functionals on $C_c(G;\mathbb R)$.

[F1] $m$ is a nonzero Radon measure that is translation invariant, finite on compact sets and positive on nonempty open sets ([[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]). In particular $m(U)\in(0,+\infty)$ for every nonempty relatively compact open $U$, and $I$ is positive and nonzero.

[F2] $\nu(E)=m(-E)$ is again a Radon measure: it is nonzero because $\nu(G)=m(G)>0$, translation invariant because $\nu(E+a)=m(-E-a)=m(-E)=\nu(E)$, finite on compact sets because $-K$ is compact, and for Borel $E$ and open $U$ the identities $\nu(E)=\inf\{\nu(V):V\supseteq E\text{ open}\}$ and $\nu(U)=\sup\{\nu(K):K\subseteq U\text{ compact}\}$ follow from the same identities for $m$ by substituting $-E$ and $-U$, using that $K\mapsto-K$ is a bijection of the compact subsets of $U$ onto those of $-U$ ([[def-left-haar-integral-and-left-haar-measure]], [[thm-compactness-under-continuous-maps]]). Thus $J$ is positive and nonzero.

[F3] Under Dependent Choice every compact $K$ inside an open $U$ in an LCH space admits $f\in C_c$, $0\le f\le1$, $f=1$ on $K$, $\operatorname{supp}f\subseteq U$; and for every finite open cover $U_1,\dots,U_n$ of a compact $K$ there are nonnegative $\varphi_i\in C_c$ with $\operatorname{supp}\varphi_i\subseteq U_i$ and $\sum_i\varphi_i=1$ on $K$ ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[lem-finite-lch-partition-of-unity-near-a-compact-set]], [[def-dependent-choice]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F4] Positive real-linear functionals on $C_c(G;\mathbb R)$ are monotone, so for real $h\in C_c(G)$ one has $|\Lambda(h)|\le\Lambda(|h|)$: both $\Lambda(h)\le\Lambda(|h|)$ and $-\Lambda(h)=\Lambda(-h)\le\Lambda(|h|)$ ([[lem-positive-linear-functionals-on-c-c-are-monotone]]).

[F5] $G$ is locally compact, so there is a compact symmetric neighbourhood $W$ of $0$ ([[def-locally-compact-space]], [[def-topological-group]]). Continuous images of compact sets are compact, and a product of finitely many compact spaces is compact; hence for compact $K,L\subseteq G$ the sum $K+L$ is compact, being the image of the compact $K\times L$ under the continuous addition map ([[thm-compactness-under-continuous-maps]], [[thm-finite-products-of-compact-spaces]], [[def-topological-group]]).

[F6] Assuming Dependent Choice, two Radon measures on an LCH space with the same integrals of every real $C_c$ function agree on all Borel sets ([[thm-rmk-uniqueness-among-radon-measures]]). The real line is order-complete, so a Cauchy net in $\mathbb R$ converges ([[cor-cauchy-reals-lub-complete]]).

## Proof

**Proof technique:** direct.

1.1 (Fubinito for continuous compact kernels.) Let $\Lambda,M$ be positive real-linear functionals on $C_c(G;\mathbb R)$ and let $F\in C_c(G\times G;\mathbb R)$. Then $\Lambda_xM_yF=M_y\Lambda_xF$. Indeed, let $K_X,K_Y$ be the compact projections of $\operatorname{supp}F$; if $F=0$ both sides vanish, so assume otherwise and choose by [F3] cutoffs $c_X,c_Y\in C_c$ with $0\le c_i\le1$, $c_X=1$ on $K_X$, $c_Y=1$ on $K_Y$; put $L_Y=\operatorname{supp}c_Y$ and $L_X=\operatorname{supp}c_X$. For $\varepsilon>0$, consider all pairs $(y,V)$ with $y\in L_Y$, $V$ open containing $y$, and $|F(x,y')-F(x,y)|\le\varepsilon$ for every $x\in G$, $y'\in V$. Joint continuity and compactness of $K_X$ give such a $V$ at every $y$: a finite cover in the $x$ coordinate gives uniform control on $K_X$, and both sections vanish off $K_X$. The full family of these $V$ covers $L_Y$, so compactness gives finitely many pairs $(y_j,V_j)$ covering $L_Y$; by [F3] choose nonnegative $\psi_j\in C_c$ supported in $V_j$ with $\sum_j\psi_j=1$ on $L_Y$, and put $H(x,y):=c_Y(y)\sum_j\psi_j(y)F(x,y_j)=\sum_jc_Y(y)\psi_j(y)\,F(x,y_j)$. Each $F(\cdot,y_j)$ lies in $C_c(G)$ and each $c_Y\psi_j$ lies in $C_c(G)$, so $H$ is a finite sum of products $\xi_j(x)\eta_j(y)$; for such sums the two iterated integrals are equal by linearity and factorization. Moreover $|F-H|\le\varepsilon c_Xc_Y$: on $K_X\times L_Y$ the pointwise convex-combination bound holds, while off $L_Y$ both terms vanish and off $K_X$ both vanish. Applying [F4] twice gives $|\Lambda_xM_y(F-H)|\le\Lambda_xM_y|F-H|\le\varepsilon\Lambda(c_X)M(c_Y)$ and the same with the order interchanged, so $|\Lambda_xM_yF-M_y\Lambda_xF|\le2\varepsilon\Lambda(c_X)M(c_Y)$; as $\varepsilon>0$ is arbitrary and the cutoff integrals are finite, the two iterated integrals agree. [F3, F4, F5]

2.1 (Comparison identity.) Let $f\in C_c(G;\mathbb R)$ and let $u\in C_c(G;\mathbb R)$ satisfy $u(-x)=u(x)$. Then $I(f)J(u)=J_yI_z\bigl(f(y+z)u(z)\bigr)$. To see this, start from the trivial factorization $I(f)J(u)=J_y\bigl(I_x(f(x)u(y))\bigr)$, replace $u(y)$ by $u(y-x)$ inside the $y$-integral using the translation invariance of $J$ ([F2]), move $I_x$ through $J_y$ by step 1.1 applied to the kernel $(x,y)\mapsto f(x)u(y-x)$, and then substitute $x=y+z$ in the inner $I$-integral using the translation invariance of $I$ ([F1]) to obtain $I_x\bigl(f(x)u(y-x)\bigr)=I_z\bigl(f(y+z)u(-z)\bigr)=I_z\bigl(f(y+z)u(z)\bigr)$; the last equality is the symmetry of $u$. The kernel $f(x)u(y-x)$ is continuous and supported in $\operatorname{supp}f\times(\operatorname{supp}f+\operatorname{supp}u)$, which is compact by [F5]. [F1, F2, F5, step 1.1]

3.1 (The approximating net and its ratios.) Let $D$ be the set of pairs $(E,u)$ where $E$ is a symmetric open neighbourhood of $0$ and $u\in C_c(G;\mathbb R)$ satisfies $u\ge0$, $u(-x)=u(x)$, $u(0)=1$, $\operatorname{supp}u\subseteq E$; order $D$ by $(E,u)\preceq(E',u')$ when $E'\subseteq E$. This is a directed set: given $(E_1,u_1)$ and $(E_2,u_2)$, [F3] applied to $\{0\}\subseteq E_1\cap E_2$ gives $v\in C_c$ with $v(0)=1$ and $\operatorname{supp}v\subseteq E_1\cap E_2$, and $u_3(x):=v(x)v(-x)$ is symmetric, nonnegative, equals $1$ at $0$ and is supported in $E_1\cap E_2$, so $(E_3,u_3)\succeq(E_1,u_1),(E_2,u_2)$. For $(E,u)\in D$ both $I(u)$ and $J(u)$ are positive by [F1], [F2] and the positivity on nonempty open sets, so $\gamma_{(E,u)}:=I(u)/J(u)>0$ is well defined. Fix $f\in C_c(G;\mathbb R)$ with $f\ge0$, $f\ne0$, and put $\eta_E:=\sup_{z\in E}J_y\bigl(|f(y+z)-f(y)|\bigr)$ and $\theta_E:=\eta_E/J(f)$. By step 2.1, $I(f)J(u)=J_yI_z\bigl(f(y+z)u(z)\bigr)$, while the factorization $I(u)J(f)=J_yI_z\bigl(f(y)u(z)\bigr)$ holds by linearity; subtracting and dividing by $J(u)>0$ gives $J(u)\bigl(I(f)-\gamma_{(E,u)}J(f)\bigr)=J_yI_z\bigl((f(y+z)-f(y))u(z)\bigr)$. Bounding the right side with [F4], swapping the two integrals by step 1.1 applied to the nonnegative continuous compactly supported kernel $|f(y+z)-f(y)|u(z)$, and using $\operatorname{supp}u\subseteq E$ yields $J(u)\bigl|I(f)-\gamma_{(E,u)}J(f)\bigr|\le\eta_E\,I(u)=\eta_E\,\gamma_{(E,u)}J(u)$, that is $$\bigl|c-\gamma_{(E,u)}\bigr|\le\theta_E\,\gamma_{(E,u)},\qquad c:=I(f)/J(f)>0 .$$ [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 (Uniform continuity and the ratio limit.) Fix a compact symmetric identity neighbourhood $W$ and put $\widetilde K=\operatorname{supp}f+W$, compact by [F5]. For $\varepsilon>0$ consider all triples $(a,V,W')$ with $a\in\widetilde K$, $V,W'$ open identity neighbourhoods, $W'$ symmetric and contained in $W$, $W'+W'\subseteq V$, and $|f(a+v)-f(a)|<\varepsilon/3$ for all $v\in V$. Continuity gives such triples at each $a$, so their open sets $a+W'$ cover $\widetilde K$. Take a finite subcover and put $E=\bigcap_jW'_j$. If $y\in\widetilde K$, choose $j$ with $y\in a_j+W'_j$; for $z\in E$, both $y$ and $y+z$ lie in $a_j+V_j$, so $|f(y+z)-f(y)|<2\varepsilon/3$. If $y\notin\widetilde K$, both values vanish, because $z\in E\subseteq W$ and $W=-W$. Thus the difference is supported in $\widetilde K$ and bounded by $\varepsilon$, giving $\eta_E\le\varepsilon\nu(\widetilde K)$. Hence $\eta_E\to0$ as $E$ shrinks. For the fixed nonzero $f$ of step 3.1, choose $E_0$ with $\theta_{E_0}<1/2$. For every later pair $(E,u)$, $E\subseteq E_0$ implies $\theta_E\le\theta_{E_0}$, and the inequality of step 3.1 gives $c/(1+\theta_{E_0})\le\gamma_{(E,u)}\le c/(1-\theta_{E_0})$. The length of this interval tends to zero as $E_0$ shrinks, so the ratio net is Cauchy and converges by [F6]. It is eventually bounded below by $c/2>0$, so its limit $\gamma$ is positive. All covers used the complete families of admissible neighborhoods and only finite subfamilies, without uncountable selections. [F1, F2, F5, F6, step 3.1]

5.1 (Passing to the limit.) Fix $g\in C_c(G;\mathbb R)$ with $g\ge0$ and let $\delta>0$. By the uniform continuity argument of step 4.1 applied to $g$ there is a symmetric open $E_0$ with $\eta_{E_0}(g):=\sup_{z\in E_0}J_y|g(y+z)-g(y)|\le\delta$. For every $\lambda=(E,u)\succeq(E_0,\cdot)$ one has $\operatorname{supp}u\subseteq E\subseteq E_0$, so step 3.1 with the pair $(g,u)$ gives $|I(g)-\gamma_\lambda J(g)|\le\eta_{E_0}(g)\,\gamma_\lambda\le\delta\,\gamma_\lambda$. Letting $\lambda$ run through $D$ and using $\gamma_\lambda\to\gamma$ gives $|I(g)-\gamma J(g)|\le\delta\gamma$ for every $\delta>0$, so $I(g)=\gamma J(g)$; by linearity of both functionals the identity $I(h)=\gamma J(h)$ holds for every $h\in C_c(G;\mathbb R)$. [F4, step 3.1, step 4.1]

6.1 (The scale is one.) By step 5.1 the two Radon measures $m$ and $\gamma\nu$ have equal integrals of every real $C_c$ function, so [F6] gives $m(E)=\gamma\nu(E)$ for every Borel $E$, that is $m(E)=\gamma\,m(-E)$. Replacing $E$ by $-E$ gives $m(-E)=\gamma\,m(E)$, hence $m(E)=\gamma^2m(E)$ for every Borel $E$. Choosing a compact neighbourhood $E$ of $0$, [F1] gives $0<m(E)<+\infty$, so $\gamma^2=1$ and, since $\gamma>0$, $\gamma=1$. Therefore $m(-E)=m(E)$ for every Borel set $E$. [F1, F6, step 5.1] ∎ 