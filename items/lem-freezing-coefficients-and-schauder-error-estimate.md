---
id: lem-freezing-coefficients-and-schauder-error-estimate
kind: lemma
title: Freezing coefficients makes the Schauder error absorbable on a small ball
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 2
deps: [def-uniformly-elliptic-nondivergence-operator, def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, lem-holder-interpolation-with-an-epsilon-loss, thm-algebra-of-derivatives, thm-young-inequality-real-exponents, def-ck-and-multi-index-notation-in-several-variables]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.5, the freezing proof and the requirement $\\rho^\\alpha[A]_{C^\\alpha}<\\tfrac12$, printed pp. 148-149 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§3.2.1, Part I, the frozen-coefficient error and the modulus of continuity, printed pp. 105-107 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, the freezing and the small-ball absorption, printed pp. 133-135 (read in full)"
---

## Statement

Let $n\ge2$, $0<\alpha<1$, $R>0$ and $x_0\in\mathbb R^n$. Let $L=a^{ij}\partial_i\partial_j+b^i\partial_i+c$ be uniformly elliptic on $B_R(x_0)$ with constants $0<\lambda\le\Lambda<\infty$, $[A]_{0,\alpha;B_R(x_0)}\le K$, and $b,c\in C^{0,\alpha}(B_R(x_0))$. Put $L_0:=a^{ij}(x_0)\partial_i\partial_j$ and
$$\mathfrak M_R:=R^\alpha K+R\|b\|_\infty+R^{1+\alpha}[b]_{0,\alpha}+R^2\|c\|_\infty+R^{2+\alpha}[c]_{0,\alpha}.$$
Assume $\mathfrak M_R<\infty$. For every $\varepsilon>0$ there are $\eta_\varepsilon\in(0,1]$ and $C_\varepsilon<\infty$, depending only on $n,\alpha,\lambda,\Lambda,\mathfrak M_R,\varepsilon$, such that for every radius $0<\rho\le R\eta_\varepsilon$ and every $u$ with $\|u\|^{*}_{2,\alpha;B_\rho(x_0)}<\infty$,
$$\rho^2\|(L-L_0)u\|^{*}_{0,\alpha;B_\rho(x_0)}\le\varepsilon\|u\|^{*}_{2,\alpha;B_\rho(x_0)}+C_\varepsilon\sup_{B_\rho(x_0)}|u|,$$
where the cutoff $R\eta_\varepsilon$ is at most $R$ and the constant is uniform over all smaller radii, and $\|g\|^{*}_{0,\alpha;B_\rho}:=\sup_{B_\rho}|g|+\rho^\alpha[g]_{0,\alpha;B_\rho}$.

## Facts & Assumptions

**Given:** $n\ge2$, $0<\alpha<1$, $R>0$, $x_0$, an operator $L$ with the coefficient bounds of the Statement, a fixed $\varepsilon>0$, and any $0<\rho\le R\eta_\varepsilon$ with $\|u\|^{*}_{2,\alpha;B_\rho(x_0)}<\infty$.

[F1] $L_0$ is the constant-coefficient operator with matrix $A(x_0)$, so $(L-L_0)u=(a^{ij}-a^{ij}(x_0))\partial_i\partial_ju+b^i\partial_iu+cu$; the coefficient bounds are recorded by $\mathfrak M_R$ in the Statement, and $x_0$ is the base point for every frozen coefficient. ([[def-uniformly-elliptic-nondivergence-operator]], [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]])

[F2] In the normalized variables of step 1.1, put $\mathcal K:=R^\alpha K$ and let $\mathcal B,\mathcal C$ be the scaled $C^{0,\alpha}$ bounds of $\tilde b,\tilde c$; then $\mathcal K+\mathcal B+\mathcal C\le\mathfrak M_R$. On $B_t$, $|\tilde a^{ij}(z)-\tilde a^{ij}(0)|\le\mathcal Kt^\alpha$ and $[\tilde a^{ij}-\tilde a^{ij}(0)]_{0,\alpha;B_t}\le\mathcal K$. Also $[D_i\tilde u]_{0,\alpha;B_t}\le(2t)^{1-\alpha}\sup_{B_t}|D^2\tilde u|$ and $[\tilde u]_{0,\alpha;B_t}\le(2t)^{1-\alpha}\sup_{B_t}|D\tilde u|$. ([[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]], [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]])

[F3] Interpolation with $\varepsilon$-loss: for every $\varepsilon'>0$ there is $C_{\varepsilon'}$ with (i) $\rho\sup_{B_\rho}|Du|\le\varepsilon'\|u\|^{*}_{2,\alpha;B_\rho}+C_{\varepsilon'}\sup|u|$, (ii) $\sup|D^2u|\le\varepsilon'\rho^\alpha[D^2u]_{0,\alpha;B_\rho}+C_{\varepsilon'}\rho^{-2}\sup|u|$, and $\rho^{2+\alpha}[D^2u]_{0,\alpha;B_\rho}\le\|u\|^{*}_{2,\alpha;B_\rho}$. ([[lem-holder-interpolation-with-an-epsilon-loss]])

[F4] The product rule for the Hölder seminorm: $[fg]_{0,\alpha}\le[ f]_{0,\alpha}\sup|g|+\sup|f|[g]_{0,\alpha}$, and the elementary inequality $ab\le\varepsilon a^p+C_{p}\varepsilon^{-1/(p-1)}b^{p/(p-1)}$ for $a,b\ge0$ and $p>1$. ([[thm-algebra-of-derivatives]], [[thm-young-inequality-real-exponents]])

## Proof

**Proof technique:** direct.

1.1 Normalize the scale and record the coefficient oscillation. Put $z=(x-x_0)/R$ and $\tilde u(z)=u(x_0+Rz)$. In these variables the operator has coefficients $\tilde a(z)=a(x_0+Rz)$, $\tilde b(z)=R b(x_0+Rz)$ and $\tilde c(z)=R^2c(x_0+Rz)$ on $B_1$, and their dimensionless Hölder bounds are controlled by $\mathfrak M_R$ in the Statement. Write $t:=\rho/R\le1$. Since $x_0$ is the centre of the original ball, [F1] gives $\sup_{B_t}|\tilde a^{ij}-\tilde a^{ij}(0)|\le (R^\alpha K)t^\alpha$ and $[\tilde a^{ij}-\tilde a^{ij}(0)]_{0,\alpha;B_t}\le R^\alpha K$. Fix $\varepsilon'>0$ to be chosen below and let $C_{\varepsilon'}$ be the constant of [F3]; all estimates below are in the normalized variables on $B_t$ and the scaled norm is $\|\tilde u\|^{*}:=\|\tilde u\|^{*}_{2,\alpha;B_t}$. [F1, F2, F3, given]

2.1 The second-order part. By [F4] and step 1.1, $[(\tilde a^{ij}-\tilde a^{ij}(0))\partial_i\partial_j\tilde u]_{0,\alpha}\le\mathcal K\sup|D^2\tilde u|+\mathcal Kt^\alpha[D^2\tilde u]_{0,\alpha}$ and $\sup|(\tilde a^{ij}-\tilde a^{ij}(0))\partial_i\partial_j\tilde u|\le\mathcal Kt^\alpha\sup|D^2\tilde u|$. Hence [F3](ii) and its last bound give $$t^2\Bigl(\sup|(\tilde a^{ij}-\tilde a^{ij}(0))\partial_i\partial_j\tilde u|+t^\alpha[(\tilde a^{ij}-\tilde a^{ij}(0))\partial_i\partial_j\tilde u]_{0,\alpha}\Bigr)\le\Bigl[\varepsilon'\bigl(\mathcal K+\mathcal Kt^\alpha\bigr)+C\mathcal Kt^\alpha\Bigr]\|\tilde u\|^{*}+C_{\varepsilon'}\mathcal Kt^\alpha\sup|\tilde u|.$$ The $C\mathcal Kt^\alpha\|\tilde u\|^{*}$ contribution is the product-seminorm term $\sup|\tilde a^{ij}-\tilde a^{ij}(0)|[D_iD_j\tilde u]_{0,\alpha}$ after scaling; it has no interpolation factor $\varepsilon'$. [step 1.1, F2, F3, F4, algebra]

2.2 The lower-order part. Write $\tilde M:=\|\tilde b\|_{C^{0,\alpha}}+\|\tilde c\|_{C^{0,\alpha}}\le\mathfrak M_R$. By [F4] and [F2], the supremum of $\tilde b^i\partial_i\tilde u+\tilde c\tilde u$ is bounded by $\tilde M(\sup|D\tilde u|+\sup|\tilde u|)$, and its Hölder seminorm is bounded by $\tilde M(\sup|D\tilde u|+(2t)^{1-\alpha}\sup|D^2\tilde u|+\sup|\tilde u|+(2t)^{1-\alpha}\sup|D\tilde u|)$. Multiplying by $t^2$ and $t^{2+\alpha}$, respectively, and inserting [F3](i),(ii) shows that this contribution is at most $\varepsilon'C_1^{\rm low}(t)\|\tilde u\|^*+C_{n,\alpha,\varepsilon'}(1+\tilde M)\sup|\tilde u|$, where $C_1^{\rm low}(t)$ is bounded for $0<t\le1$ and has a finite limit as $t\downarrow0$. [step 1.1, F2, F3, F4, algebra]

3.1 Uniform choice of the normalized radius and conclusion. In normalized variables, collect the top-norm coefficients from steps 2.1 and 2.2 as $C_{\mathrm{err}}(t):=\varepsilon'C_{\mathrm{interp}}(t)+C_{\mathrm{osc}}\mathcal Kt^\alpha$, where $C_{\mathrm{interp}}(t)$ is bounded on $0<t\le1$ and has a finite limit at $0$, and $C_{\mathrm{osc}}$ depends only on $n,\alpha,\lambda,\Lambda$. The second term explicitly includes the product-seminorm term of step 2.1, which has no $\varepsilon'$ factor and tends to zero as $t\downarrow0$. Given $\varepsilon>0$, choose first $\varepsilon'>0$ so that $\varepsilon'C_{\mathrm{interp}}(0)\le\varepsilon/4$ (if $C_{\mathrm{interp}}(0)=0$, any positive $\varepsilon'$ suffices); then choose $\eta_\varepsilon\in(0,1]$ so small that $\varepsilon'C_{\mathrm{interp}}(t)\le\varepsilon/2$ and $C_{\mathrm{osc}}\mathcal Kt^\alpha\le\varepsilon/2$ for every $0<t\le\eta_\varepsilon$. Thus $C_{\mathrm{err}}(t)\le\varepsilon$ uniformly over every such radius. The lower-order remainder coefficients are also uniformly bounded there by $C_\varepsilon$ depending only on the displayed dimensionless parameters; the cap $t\le1$ is the small-scale condition used for those terms. Scaling back gives the same estimate for every physical radius $0<\rho\le R\eta_\varepsilon$. [step 1.1, step 2.1, step 2.2, F3, given, algebra] ∎

## Remarks

- The quantitative structure is the classical one: after normalization, the oscillation of the principal coefficients on a radius-$t$ ball is at most $(R^\alpha K)t^\alpha$; the frozen error carries the two extra derivatives scaled as $t^2$, and interpolation converts the resulting powers into an arbitrarily small multiple of the full scaled norm plus a bounded multiple of $\sup|u|$.
- The estimate is uniform over every smaller radius below $R\eta_\varepsilon$. The cutoff fraction $\eta_\varepsilon\le1$ is chosen from the dimensionless coefficient bounds, including the small-scale cap needed for the lower-order terms.
