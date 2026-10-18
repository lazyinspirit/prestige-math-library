---
id: lem-signorini-partial-dirichlet-korn-coercivity
kind: lemma
title: "Korn coercivity with a partial Dirichlet segment"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  [
    def-signorini-elasticity-contact-model,
    def-signorini-partial-trace-space,
    lem-signorini-partial-trace-space-bounded,
    lem-signorini-rigid-motion-controlled-by-dirichlet-segment,
    thm-na-bounded-lipschitz-domain-divergence-right-inverse,
    thm-poincare-wirtinger-on-bounded-connected-extension-domains,
    thm-lp-trace-operator-on-a-bounded-c-one-domain,
    def-wkp-zero-as-a-sobolev-closure,
    cor-cauchy-schwarz-inequality-for-l-two,
    def-countable-choice,
    def-axiom-of-choice,
    lem-euclidean-balls-have-positive-finite-lebesgue-measure
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Walter Zulehner, Numerical Methods for Continuum Mechanics 1, complete
        80-page lecture notes"
      url: "https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf"
      locator: "Chapter 2 §2.1, printed pp. 22–23: Lemma 2.2 states second Korn in
        dimension d; Corollary 2.1 states positive-measure Dirichlet coercivity
        in three dimensions."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 53: Stokes
        equations: Basic ideas"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf"
      locator: "§53.2, printed pp. 393–395: the positive-measure Dirichlet velocity
        space and coercivity of its symmetric-gradient form via Korn's inequality."
verification:
  precheck: pass
---

## Statement

Assume the geometry of [[def-signorini-partial-trace-space]] and let $V=\{v\in H^1(\Omega;\mathbb R^2):T_Dv=0\}$. Then there is $c_K>0$, depending on $\Omega$ and $\Gamma_D$, such that
$$\|v\|_{H^1(\Omega)}\le c_K\|\varepsilon(v)\|_{L^2(\Omega)}\qquad(v\in V).$$

## Facts & Assumptions

**Given:** A nonempty bounded connected Lipschitz extension polygon $\Omega\subset\mathbb R^2$, a straight Dirichlet segment $\Gamma_D$ of length $L>0$, and $V$ as above.

[A1] Countable Choice is used by the bounded-Lipschitz divergence right inverse and the closure-defined $H^1_0$ approximation. ([[def-countable-choice]])

[A2] The Axiom of Choice is used through the bounded C1 trace theorem and Poincare-Wirtinger on the bounded connected extension domain. ([[def-axiom-of-choice]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[thm-poincare-wirtinger-on-bounded-connected-extension-domains]])

[F0] A nonempty open bounded set has finite positive Lebesgue measure: it contains a ball and is contained in a ball. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[F1] There is a bounded linear $B_\Omega:L^2_0(\Omega)\to H^1_0(\Omega;\mathbb R^2)$ with $\operatorname{div}B_\Omega q=q$ and $\|\nabla B_\Omega q\|_2\le C_{\rm div}(\Omega)\|q\|_2$. ([[thm-na-bounded-lipschitz-domain-divergence-right-inverse]])

[F2] For $z\in H^1(\Omega)$ of zero mean, $\|z\|_2\le C_P\|\nabla z\|_2$; apply this componentwise. ([[thm-poincare-wirtinger-on-bounded-connected-extension-domains]])

[F3] $T_D$ is bounded and $V=\ker T_D$; in particular $T_Dv=0$ for $v\in V$. ([[def-signorini-partial-trace-space]], [[lem-signorini-partial-trace-space-bounded]])

[F4] Every planar rigid motion $r(x)=a+\omega Jx$ satisfies $\|r\|_{H^1(\Omega)}\le C_D\|T_Dr\|_{L^2(\Gamma_D)}$. ([[lem-signorini-rigid-motion-controlled-by-dirichlet-segment]])

[F5] $H^1_0(\Omega)$ is the $H^1$ closure of $C_c^\infty(\Omega)$. ([[def-wkp-zero-as-a-sobolev-closure]])

[F6] $\varepsilon(v)=(\nabla v+(\nabla v)^T)/2$, and $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$; adding a rigid motion $a+\omega Jx$ does not change $\varepsilon(v)$. ([[def-signorini-elasticity-contact-model]], [[lem-signorini-rigid-motion-controlled-by-dirichlet-segment]])

[F7] For finite-measure $\Omega$, every $L^2(\Omega)$ function is integrable and $\|g\|_{L^1}\le|\Omega|^{1/2}\|g\|_{L^2}$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

**Proof technique:** direct.

**Given:** The polygon, trace segment and space $V$ of the statement, with the Axiom of Choice and Countable Choice available through [A1]–[A2].

1.1 Since $\Omega$ is nonempty, open and bounded, [F0] gives $0<|\Omega|<\infty$. Hence $1\in L^2(\Omega)$, and [F7] with the Cauchy–Schwarz inequality makes every $L^2$ component of $v$ and its weak gradient integrable; boundedness of $\Omega$ also makes $x$ and $Jx$ integrable. Thus the means in $\omega=(2|\Omega|)^{-1}\int_\Omega\operatorname{curl}v$ and $a=|\Omega|^{-1}\int_\Omega(v-\omega Jx)$ exist. Put $r(x)=a+\omega Jx$ and $z=v-r$. Then $\int_\Omega z=0$, $\int_\Omega\operatorname{curl}z=0$, and $\varepsilon(z)=\varepsilon(v)$ by [F6]. [A1, given, F0, F6, F7, construct, algebra]

2.1 Let $q=\operatorname{curl}z\in L^2_0(\Omega)$ and choose $w=B_\Omega q$ by [F1]. Define the matrix $R(w)$ rowwise by $R(w)_{i1}=\partial_2w_i$ and $R(w)_{i2}=-\partial_1w_i$. For $w\in C_c^\infty(\Omega;\mathbb R^2)$ each row of $R(w)$ has zero divergence, so distributional integration by parts gives $(\nabla z,R(w))_{L^2}=0$. Approximate the actual $w\in H^1_0$ by compactly supported smooth fields using [F5]; since $R(w_m)\to R(w)$ in $L^2$, the same identity holds for $w$. [A1, F1, F5, step 1.1]

3.1 Set $G=\nabla z-R(w)$. In two dimensions $J:G=G_{21}-G_{12}=\operatorname{curl}z-\operatorname{div}w=q-q=0$, so the off-diagonal entries of $G$ agree and $G$ is symmetric. Write $S=(\nabla z-(\nabla z)^T)/2$, which is skew-symmetric. Symmetric and skew-symmetric matrices are orthogonal in the Frobenius inner product, so $(S,G)_{L^2}=0$ and $(\nabla z,G)=(\varepsilon(z),G)$. By step 2.1, $(\nabla z,G)=\|\nabla z\|_2^2-(\nabla z,R(w))=\|\nabla z\|_2^2$. The entries of $R(w)$ are the entries of $\nabla w$ permuted and sign-changed, so $\|R(w)\|_2=\|\nabla w\|_2$. Also $|q|^2=|\partial_1z_2-\partial_2z_1|^2\le2(|\partial_1z_2|^2+|\partial_2z_1|^2)\le2|\nabla z|_F^2$ almost everywhere; integration gives $\|q\|_2\le\sqrt2\|\nabla z\|_2$. Thus [F1] and the triangle inequality imply $\|G\|_2\le\|\nabla z\|_2+\|\nabla w\|_2\le(1+\sqrt2C_{\rm div})\|\nabla z\|_2$. Therefore $\|\nabla z\|_2^2\le\|\varepsilon(z)\|_2\|G\|_2\le(1+\sqrt2C_{\rm div})\|\varepsilon(z)\|_2\|\nabla z\|_2$. If $\nabla z=0$ the gradient estimate is immediate; otherwise divide by $\|\nabla z\|_2$. Then [F2] and $\int_\Omega z=0$ give $\|z\|_2\le C_P\|\nabla z\|_2$, hence $\|z\|_{H^1}\le\sqrt{1+C_P^2}\|\nabla z\|_2\le C_0\|\varepsilon(v)\|_2$. [A1, A2, F1, F2, F6, step 1.1, step 2.1, algebra]

4.1 For $v\in V$, [F3] gives $T_Dr=-T_Dz$. Apply [F4] and the trace bound [F3] to obtain $\|r\|_{H^1}\le C_D\|T_Dz\|_{L^2(\Gamma_D)}\le C_DC_T\|z\|_{H^1}$. Since $v=z+r$, step 3.1 yields $\|v\|_{H^1}\le\|z\|_{H^1}+\|r\|_{H^1}\le(1+C_DC_T)C_0\|\varepsilon(v)\|_2$, proving the assertion. [A2, F3, F4, step 3.1, given, algebra] ∎
