---
id: lem-unweighted-good-lambda-local-estimate-for-maximal-truncations
kind: lemma
title: Unweighted local good-lambda estimate for maximal truncations
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [lem-maximal-dyadic-cubes-covering-a-proper-open-set, lem-annulus-far-field-estimates-for-the-maximal-function, lem-ball-and-cube-maximal-functions-are-comparable, def-maximal-truncated-singular-integral, def-standard-holder-calderon-zygmund-kernel, def-calderon-zygmund-kernel-and-principal-value-operator, thm-maximal-truncations-are-weak-one-one-and-strong-lp, def-centered-and-uncentered-hardy-littlewood-maximal-functions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-countable-additivity-and-set-function-continuity, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.4.3 and its proof, including the Whitney decomposition, the estimates $I_0^\\lambda$, $I_\\infty^\\lambda$ and (7.4.7)-(7.4.12), printed pp. 533-539"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "ch. 1 §§1.3-1.5, the Calderon-Zygmund decomposition and its use in the weak (1,1) estimate, printed pp. 14-24"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$,
$0<\delta\le1$, and let $k$ (pointwise size $A_1$, standard $\delta$-Hölder
$A_2'$, cancellation $A_3$), a principal-value distribution $W$ for $k$, and the
associated $L^2$-bounded convolution operator $T$ with norm $B$ be as in the
published maximal-truncation theorem, with truncations $T_\varepsilon$,
$T^{(\varepsilon,N)}$ and maximal truncations $T^*,T^{**}$
([[def-maximal-truncated-singular-integral]],
[[def-standard-holder-calderon-zygmund-kernel]],
[[def-calderon-zygmund-kernel-and-principal-value-operator]]). Let
$f\in L^1_{\mathrm{loc}}(\mathbb R^n)$ be such that
$\int_{|x-y|\ge\varepsilon}|f(y)|\,|x-y|^{-n}dy<\infty$ for every $x$ and
$\varepsilon>0$, so that $T_\varepsilon f$, $T^{(\varepsilon,N)}f$, $T^*f$ and
$T^{**}f$ are defined at every point, and let $\lambda>0$ be such that
$\Omega_\lambda=\{T^{**}f>\lambda\}$ is a proper open set. Then there are
constants $\gamma_0=c_0(n,\delta)(A_1+A_2'+A_3)^{-1}$ and $C_n$, depending only
on $n$ and $\delta$, such that for every $0<\gamma<\gamma_0$,
$$\bigl|\{T^{**}f>2\lambda\}\cap\{Mf\le\gamma\lambda\}\bigr|\le C_n\gamma(A_1+A_2'+A_3+B)\,|\{T^{**}f>\lambda\}|,$$
The same inequality holds with $T^*$ throughout whenever $\{T^*f>\lambda\}$ is a proper open set. More precisely, for either $U=T^{**}$ or $U=T^*$ under its stipulated level-set hypothesis, each Whitney cube $Q_j$ used in the proof satisfies
$$|Q_j\cap\{Uf>2\lambda\}\cap\{Mf\le\gamma\lambda\}|\le C_n\gamma(A_1+A_2'+A_3+B)|Q_j|.$$
If $A_1+A_2'+A_3=0$, interpret $\gamma_0=+\infty$; then the kernel and both maximal truncations vanish.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge1$, $0<\delta\le1$, constants $A_1,A_2',A_3,B$; the kernel $k$, distribution $W$, operator $T$ and function $f$ of the Statement; $\lambda>0$ with $\Omega_\lambda$ a proper open set; $0<\gamma<\gamma_0$ with $\gamma_0$ fixed in step 3.1; the centred maximal function $M$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]).

[F1] $|k(y)|\le A_1|y|^{-n}$ for $y\ne0$ and $|k(x-y)-k(x)|\le A_2'|y|^\delta|x|^{-n-\delta}$ whenever $|x|\ge2|y|>0$ ([[def-maximal-truncated-singular-integral]], [[def-standard-holder-calderon-zygmund-kernel]]), and for $h\in L^1(\mathbb R^n)$ and $\mu>0$ one has $|\{T^{**}h>\mu\}|\le C_{n,\delta}(A_1+A_2'+A_3+B)\mu^{-1}\|h\|_1$, with $T^*h\le T^{**}h\le2T^*h$ pointwise ([[thm-maximal-truncations-are-weak-one-one-and-strong-lp]]).

[F2] For a nonempty open proper $\Omega\subseteq\mathbb R^n$ the Whitney family of [[lem-maximal-dyadic-cubes-covering-a-proper-open-set]] consists of pairwise disjoint dyadic cubes $Q_j$, at most countable with $\bigcup_jQ_j=\Omega$, and each $Q_j$ comes with $y_j\notin\Omega$ satisfying $|x-y_j|\le6n\sqrt n\,\ell(Q_j)$ for all $x\in Q_j$.

[F3] For $g\in L^1_{\mathrm{loc}}(\mathbb R^n)$, $z\in\mathbb R^n$, $r>0$ and $\delta>0$, $\int_{|t-z|\ge r}|g(t)|\,|t-z|^{-n-\delta}dt\le C_{n,\delta}r^{-\delta}Mg(z)$ ([[lem-annulus-far-field-estimates-for-the-maximal-function]]).

[F4] For every cube $Q$ and $z\in Q$ one has $|Q|^{-1}\int_Q|g|\le C_nMg(z)$; in particular if $Mg(z)\le\gamma\lambda$ then $\int_Q|g|\le C_n|Q|\gamma\lambda$ ([[lem-ball-and-cube-maximal-functions-are-comparable]]).

[F5] Lebesgue measure (and any measure) is countably additive on pairwise disjoint measurable sets, so for pairwise disjoint measurable sets $A_j$ one has $\bigl|\bigcup_jA_j\bigr|=\sum_j|A_j|$ ([[thm-countable-additivity-and-set-function-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Whitney geometry. Treat either $U=T^{**}$ or $U=T^*$, with its own proper open set $\Omega_\lambda=\{Uf>\lambda\}$; if this set is empty the assertion is immediate. Apply [F2] to obtain disjoint cubes $Q_j$ covering it and points $y_j\notin\Omega_\lambda$ with $|x-y_j|\le d_n\ell(Q_j)$ for $x\in Q_j$, where $d_n=6n\sqrt n$. Put $L_j=\ell(Q_j)$, $\Lambda=24n\sqrt n$ and $V_j=\Lambda^2Q_j$. Choose $z_j\in Q_j$ with $Mf(z_j)\le\gamma\lambda$ whenever such a point exists. For $t\notin V_j$ and $x,z_j\in Q_j$, $|t-y_j|\ge(\Lambda^2/2-d_n-1/2)L_j=:b_nL_j$, with $b_n>2d_n$; the distances $|t-x|,|t-y_j|,|t-z_j|$ are mutually comparable. Also $V_j\subseteq B(y_j,R_j)$ with $R_j\le C_nL_j$. These follow from coordinate bounds and the triangle inequality. [F2, given, choose, algebra]

2.1 Local part. Put $u_j=f\mathbf1_{V_j}$ and $g_j=f-u_j$. By [F4], $\|u_j\|_1\le C_n|V_j|Mf(z_j)\le C_n\gamma\lambda|Q_j|$. The weak $(1,1)$ estimate [F1] for either maximal truncation therefore gives $|\{Uu_j>\lambda/2\}|\le C_{n,\delta}(A_1+A_2'+A_3+B)\gamma|Q_j|$. Cubes with no $z_j$ contribute nothing to the target set. [F1, F4, step 1.1, given, algebra]

2.2 Uniform difference of far truncations. Fix $x\in Q_j$ and $y=y_j$. On the common part of the cutoff domains, Hölder smoothness bounds the integral of the kernel difference by $A_2'|x-y|^\delta\int_{V_j^c}|f(t)||t-y|^{-n-\delta}dt\le C_{n,\delta}A_2'Mf(z_j)$: compare $|t-y|$ with $|t-z_j|$, use $|t-z_j|\ge c_nL_j$, and apply [F3] at $z_j$. For each cutoff radius $a$ (the lower radius $\varepsilon$ and, for double truncations, also the upper radius $N$), a mismatch lies where one of $|t-x|,|t-y|$ is at most $a$ and the other is greater than $a$. Their difference is at most $|x-y|$. If the mismatch meets $V_j^c$, the geometry implies $a\ge c_nL_j$, both distances are comparable to $a$, and $|t-z_j|\le C_na$. Thus the kernel contributing on either mismatch is at most $C_nA_1a^{-n}$ and its integral is bounded by $C_nA_1a^{-n}\int_{B(z_j,C_na)}|f|\le C_nA_1Mf(z_j)$. There are at most four mismatch pieces. It follows uniformly in all admissible cutoffs that the two far truncations at $x$ and $y_j$ differ by at most $C_{n,\delta}(A_1+A_2')Mf(z_j)$. For $T^*$ use only the lower cutoff. [F1, F3, step 1.1, given, algebra]

2.3 Far truncations at the boundary point. Choose $R_j$ with $V_j\subseteq B(y_j,R_j)$ and $R_j\le C_nL_j$. If $\varepsilon\ge R_j$, the far truncation equals the corresponding truncation of $f$, bounded by $Uf(y_j)\le\lambda$. If $\varepsilon<R_j<N$, split the far integral at $R_j$; the part beyond $R_j$ is the corresponding truncation of $f$ and is at most $\lambda$, while the part below $R_j$ is bounded by $A_1(b_nL_j)^{-n}\int_{B(z_j,C_nL_j)}|f|\le C_nA_1Mf(z_j)$ because $g_j$ vanishes within distance $b_nL_j$ of $y_j$. If $N\le R_j$, only this latter bound is needed. For single truncations the same proof uses $N=\infty$. Consequently $Ug_j(y_j)\le\lambda+C_nA_1Mf(z_j)$. [F1, F4, step 1.1, given, algebra]

3.1 Combining steps 2.2 and 2.3 gives $Ug_j(x)\le\lambda+C_{n,\delta}(A_1+A_2')\gamma\lambda$ on $Q_j$. Choose the dimensional $c_0$ in $\gamma_0=c_0/(A_1+A_2'+A_3)$ so that this is at most $3\lambda/2$ for $\gamma<\gamma_0$. Subadditivity then implies $Q_j\cap\{Uf>2\lambda\}\cap\{Mf\le\gamma\lambda\}\subseteq\{Uu_j>\lambda/2\}$. Apply step 2.1 and sum over the disjoint Whitney cubes using [F5] to obtain $|\{Uf>2\lambda\}\cap\{Mf\le\gamma\lambda\}|\le C_{n,\delta}\gamma(A_1+A_2'+A_3+B)|\{Uf>\lambda\}|$. The proof applies separately to both $U$, establishing the two asserted estimates. [F5, step 2.1, step 2.2, step 2.3, given, algebra] ∎
