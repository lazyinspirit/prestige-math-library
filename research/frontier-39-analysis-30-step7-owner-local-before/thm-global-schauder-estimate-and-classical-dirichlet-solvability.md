---
id: thm-global-schauder-estimate-and-classical-dirichlet-solvability
kind: theorem
title: Global Schauder estimate and classical Dirichlet solvability by the continuity method
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 9
deps: [thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators, thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian, thm-boundary-schauder-estimate-for-the-dirichlet-problem, thm-holder-spaces-on-bounded-domains-are-banach-spaces, thm-arzela-ascoli-for-real-ck, cor-real-and-euclidean-vector-valued-ascoli-arzela, def-uniformly-elliptic-nondivergence-operator, def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-axiom-of-choice, def-countable-choice, thm-weak-maximum-principle-for-the-laplacian]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.9, Theorem 8.31 (continuity method, injection by the maximum principle, closedness by Arzela-Ascoli), printed pp. 153-155 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§2.6, Theorems 2.18-2.19 and the proof by the continuity method, printed pp. 65-68 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, Theorem 4 and the remark on solving the Dirichlet problem once the a priori estimate is available, printed pp. 136-137 (read in full)"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $n\ge2$, $0<\alpha<1$, let $\Omega$ be a bounded $C^{2,\alpha}$ domain and let $L=a^{ij}\partial_i\partial_j+b^i\partial_i+c$ be uniformly elliptic on $\bar\Omega$, with $a^{ij},b^i,c\in C^{0,\alpha}(\bar\Omega)$, constants $\lambda,\Lambda$, $[A]_{0,\alpha}\le K$, and $\|b\|_{C^{0,\alpha}}+\|c\|_{C^{0,\alpha}}\le M$. Put $X:=\{u\in C^{2,\alpha}(\bar\Omega):u|_{\partial\Omega}=0\}$ and $L_t:=tL+(1-t)\Delta$ for $t\in[0,1]$. Assume that each $L_t:X\to C^{0,\alpha}(\bar\Omega)$ is injective. Then every $L_t$ is bijective; in particular every $f\in C^{0,\alpha}(\bar\Omega)$ and $g\in C^{2,\alpha}(\bar\Omega)$ determine a unique classical solution of $Lu=f$ in $\Omega$, $u=g$ on $\partial\Omega$, and
$$\|u\|_{C^{2,\alpha}(\bar\Omega)}\le C\bigl(\|f\|_{C^{0,\alpha}(\bar\Omega)}+\|g\|_{C^{2,\alpha}(\bar\Omega)}\bigr),$$
where $C$ is uniform in $t,u,f,g$.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice, $n\ge2$, $0<\alpha<1$, the bounded $C^{2,\alpha}$ domain $\Omega$, the operator $L$ with the stated coefficient bounds, the family $L_t=tL+(1-t)\Delta$, and the hypothesis that every $L_t$ is injective on $X$.

[A1] The Axiom of Choice and Countable Choice are used through the Banach-space, maximum-principle, Arzela-Ascoli and Schauder-regularity inputs; the further choices in the contradiction argument are finite or sequential. ([[def-axiom-of-choice]], [[def-countable-choice]])

[F1] On this smooth domain every member of $C_b^{2,\alpha}(\Omega)$ has continuous derivative extensions: the Hessian is globally Hölder, while integrating the bounded gradient and Hessian along images of line segments in boundary half-boxes makes the lower-order fields uniformly continuous near each boundary point. A finite boundary atlas and interior balls give their extensions on $\bar\Omega$. Thus $X$ equals the closed zero-boundary subspace of $C_b^{2,\alpha}(\Omega)$ furnished by [[thm-holder-spaces-on-bounded-domains-are-banach-spaces]], hence is Banach, and $Y:=C^{0,\alpha}(\bar\Omega)$ is a Banach space. ([[thm-holder-spaces-on-bounded-domains-are-banach-spaces]])

[F2] Each $L_t$ maps $X$ boundedly into $Y$, with a bound uniform in $t$: $\|L_tu\|_{C^{0,\alpha}}\le C_L\|u\|_{C^{2,\alpha}}$ for $u\in X$ and $t\in[0,1]$, because the coefficients are bounded in $C^{0,\alpha}$ and the principal matrices $A_t=tA+(1-t)I$ are uniformly elliptic with constants $\min\{\lambda,1\},\max\{\Lambda,1\}$, $C^{0,\alpha}$ seminorm at most $K$ and lower-order coefficient bounds at most $M$. Moreover $t\mapsto L_t$ is affine, so $L_t-L_s=(t-s)(L-\Delta)$ with $\|(L-\Delta)u\|_{C^{0,\alpha}}\le C_L'\|u\|_{C^{2,\alpha}}$. ([[def-uniformly-elliptic-nondivergence-operator]])

[F3] Uniform boundary Schauder estimate ([[thm-boundary-schauder-estimate-for-the-dirichlet-problem]]): applied to $L_t$ with the uniform constants of [F2], it gives $$\|u\|_{C^{2,\alpha}(\bar\Omega)}\le C_1\bigl(\|L_tu\|_{C^{0,\alpha}(\bar\Omega)}+\|u\|_{C^0(\Omega)}\bigr)\qquad(u\in X,\ t\in[0,1]),$$ with $C_1$ depending only on $n,\alpha$, the uniform ellipticity and coefficient bounds and $\Omega$.

[F4] Compactness: a sequence bounded in $X$ has a subsequence converging in $C^2(\bar\Omega)$; this is the vector-valued Arzela-Ascoli theorem [[cor-real-and-euclidean-vector-valued-ascoli-arzela]] applied to the maps $x\mapsto(u_j(x),\nabla u_j(x),D^2u_j(x))$, which are equicontinuous and pointwise bounded because $\|u_j\|_{C^{2,\alpha}}\le1$. ([[thm-arzela-ascoli-for-real-ck]])

[F5] Base point: $L_0=\Delta$ is bijective from $X$ to $Y$. Injectivity: if $\Delta u=0$ on $\Omega$ with $u=0$ on $\partial\Omega$, the weak maximum principle (applied to $u$ and $-u$, componentwise for complex functions) gives $u=0$. Surjectivity: given $h\in Y$, put $f:=-h\in C^{0,\alpha}(\bar\Omega)$ and let $u$ be the weak solution of $-\Delta u=f$ with zero boundary values given by [[thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian]]; then $u\in C^{2,\alpha}(\bar\Omega)$, $u=0$ on $\partial\Omega$ and $\Delta u=h$ pointwise, so $L_0u=h$. ([[thm-weak-maximum-principle-for-the-laplacian]])

[F6] Method of continuity ([[thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators]]): if $L_0$ is bijective and, for some $0\le C<\infty$, $\|x\|_X\le C\|L_tx\|_Y$ holds for all $t\in[0,1]$ and all $x\in X$, then every $L_t$ is bijective with $\|L_t^{-1}\|\le C$.

## Proof

**Proof technique:** direct.

1.1 Setting. By [F1], $X$ and $Y$ are Banach spaces over the same field, and by [F2] each $L_t$ is a bounded operator $X\to Y$ forming an affine family $L_t=(1-t)L_0+tL_1$ with $L_0=\Delta$ and $L_1=L$. It remains to verify the two hypotheses of [F6]: the bijectivity of $L_0$ and the uniform a priori estimate. [F1, F2, given, A1]

1.2 The estimate with the supremum term. By [F3], for every $u\in X$ and $t\in[0,1]$, $$\|u\|_{C^{2,\alpha}(\bar\Omega)}\le C_1\bigl(\|L_tu\|_{C^{0,\alpha}(\bar\Omega)}+\|u\|_{C^0(\Omega)}\bigr).$$ This is the only place where the boundary Schauder estimate enters; its constant is uniform in $t$ because the family is uniformly elliptic with uniformly bounded $C^{0,\alpha}$ coefficients. [F2, F3]

2.1 Removing the supremum term. Suppose the uniform estimate $\|u\|_X\le C\|L_tu\|_Y$ failed for every finite $C$. Then for each $j$ there are $t_j\in[0,1]$ and $u_j\in X$ with $\|u_j\|_{C^{2,\alpha}}=1$ and $\|L_{t_j}u_j\|_{C^{0,\alpha}}<1/j$. By step 1.2, $1\le C_1(1/j+\|u_j\|_{C^0})$, so $\|u_j\|_{C^0}\ge1/(2C_1)$ for all large $j$. By [F4] and compactness of $[0,1]$ there is a subsequence, relabelled, with $t_j\to t$ and $u_j\to u$ in $C^2(\bar\Omega)$; then $\|u\|_{C^0}=\lim\|u_j\|_{C^0}\ge1/(2C_1)>0$, so $u\ne0$, and $u|_{\partial\Omega}=0$ because $u_j|_{\partial\Omega}=0$ and the convergence is uniform. Moreover $L_tu=0$: indeed $L_{t_j}u_j=L_tu_j+(t_j-t)(L-\Delta)u_j$; the second term tends to $0$ in the $C^{0,\alpha}$ norm by [F2] and $|t_j-t|\to0$ with $\|u_j\|_{C^{2,\alpha}}=1$, while $L_tu_j\to L_tu$ in the supremum norm because $u_j\to u$ in $C^2$ and the coefficients of $L_t$ are fixed continuous functions; since $L_{t_j}u_j\to0$ in $Y$, it follows that $L_tu=0$. For distinct $x,y$, pass the uniformly bounded Hessian difference quotients to the $C^2$ limit to obtain $[D^2u]_{0,\alpha}\le\liminf_j[D^2u_j]_{0,\alpha}<\infty$. Hence $u\in X$, so the injectivity hypothesis on $L_t$ forces $u=0$, contradicting $u\ne0$. Hence there is $0<C<\infty$ with $\|u\|_{C^{2,\alpha}}\le C\|L_tu\|_{C^{0,\alpha}}$ for all $u\in X$ and $t\in[0,1]$. [step 1.2, F2, F4, given, contradiction]

3.1 The base point is bijective. By [F5], $L_0=\Delta$ is injective and surjective, hence bijective, with $\|L_0^{-1}\|\le C$ already implied by the uniform estimate of step 2.1. [F5, step 2.1]

4.1 The method of continuity. Applying [F6] with $L_0=\Delta$, $L_1=L$, the uniform estimate of step 2.1 and the bijectivity of step 3.1, every $L_t:X\to Y$ is bijective and $\|L_t^{-1}\|_{Y\to X}\le C$ with the same constant $C$ for all $t\in[0,1]$. [step 2.1, step 3.1, F6]

5.1 Nonzero boundary data. Let $f\in Y$, $g\in C^{2,\alpha}(\bar\Omega)$ and fix $t\in[0,1]$. Since $L_tg\in Y$ and $L_t$ is bijective by step 4.1, there is a unique $u_0\in X$ with $L_tu_0=f-L_tg$; then $u:=u_0+g$ lies in $C^{2,\alpha}(\bar\Omega)$, satisfies $L_tu=f$ in $\Omega$ and $u=g$ on $\partial\Omega$, and $$\|u\|_{C^{2,\alpha}}\le\|u_0\|_{C^{2,\alpha}}+\|g\|_{C^{2,\alpha}}\le C\|f-L_tg\|_{C^{0,\alpha}}+\|g\|_{C^{2,\alpha}}\le C'\bigl(\|f\|_{C^{0,\alpha}}+\|g\|_{C^{2,\alpha}}\bigr)$$ by [F2], with $C'$ independent of $t$ and of $(u,f,g)$. Uniqueness for fixed $t$ follows from injectivity: two solutions differ by an element of $X$ in the kernel of $L_t$. [step 4.1, F2, algebra]

6.1 Conclusion. Under the stated injectivity hypothesis, the affine family $L_t$ satisfies the uniform a priori estimate of step 2.1 and has the bijective base point $L_0=\Delta$ of step 3.1; the method of continuity therefore makes every $L_t$ bijective, uniformly in $t$, and subtracting a $C^{2,\alpha}$ extension of the boundary datum produces the classical solution of the Dirichlet problem for $L$ with the displayed estimate. In particular the injectivity hypothesis can be verified separately for each $t$ (a separate uniqueness argument must respect the displayed positive-principal-part sign convention), and the conclusion is a genuine existence statement for classical solutions, obtained without compactness of the operator $L$ itself. [step 4.1, step 5.1, F6, given] ∎

## Remarks

- The two structural inputs are the boundary Schauder estimate, which supplies the uniform a priori bound, and the weak solvability of the Dirichlet Laplacian (through the maximum principle and the global Schauder regularity theorem), which supplies the bijective base point. The contradiction step uses Arzela-Ascoli to rule out a loss of the supremum term.
- The constant is uniform in $t$ because the uniform coefficient bounds and injectivity on the fixed compact parameter family give the estimate in step 2.1; the theorem does not use symmetry of $L$, and the injectivity hypothesis is the exact place where a possible eigenvalue of the family is excluded.
