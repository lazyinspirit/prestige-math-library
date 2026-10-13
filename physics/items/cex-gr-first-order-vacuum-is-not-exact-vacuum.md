---
id: cex-gr-first-order-vacuum-is-not-exact-vacuum
kind: counterexample
title: "A first-order vacuum family whose exact metric has nonzero Ricci tensor at order epsilon^2: a harmonic diagonal perturbation with phi = x^1"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-minkowski-model-and-inertial-chart, def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, def-gr-curvature-tensor-and-derived-tensors, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, thm-gr-curvature-tensoriality-and-coordinate-formula, def-laplacian-of-a-c2-function, def-gr-smooth-lorentzian-objects]
dependency_roles:
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4 equations (4.12)-(4.21) and (4.48)-(4.52), printed pp. 105-112: Newtonian time-time potential and Poisson limit; Ch. 6 equations (6.4)-(6.8), (6.13)-(6.22) and (6.24)-(6.29), printed pp. 142-148: first-order curvature, gauge, trace reversal and diagonal weak-field metric"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 7.1-7.2: the linearized approximation and the error term of order h^2 neglected in it, printed pp. 86-90 (PDF pp. 87-91)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2: the weak-field expansion, the linearized equations and the quadratic corrections, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Let $(\varepsilon_1,h,q)$ be a flat linearized family over an
open set $\Omega$ of the flat model
([[def-gr-flat-linearized-perturbation]]) whose first-order Einstein tensor
vanishes identically, $G^{(1)}_{ab}(h)=0$ on $\Omega$. Then every metric
$g(\lambda)$ of the family with $0<|\lambda|<\varepsilon_1$ is an exact vacuum
solution of the field equation, $G_{ab}(g(\lambda))=0$ on $\Omega$."

The counterexample is the flat linearized family over the open unit ball
$\Omega\subseteq\mathbb R^4$ with

$$h_{00}=-2\varphi,\qquad h_{ij}=-2\varphi\,\delta_{ij},\qquad h_{0i}=0,\qquad \varphi(x):=x^1,\qquad q\equiv0,\qquad \varepsilon_1:=\tfrac14 ,$$

so that $g(\lambda)_{ab}=\eta_{ab}+\lambda h_{ab}$. Then:

1. $(\varepsilon_1,h,q)$ is a flat linearized family over $\Omega$, and
   $\varphi$ is harmonic, $\Delta\varphi=0$;
2. $G^{(1)}_{ab}(h)=0$ on $\Omega$, so the hypothesis of the refuted statement
   holds, and by linearity $G^{(1)}_{ab}(\lambda h)=\lambda G^{(1)}_{ab}(h)=0$;
3. nevertheless the exact Ricci tensor of $g(\lambda)$ does not vanish: in
   closed form, with $p:=1+2\lambda\varphi$ and $q:=1-2\lambda\varphi$,

   $$\operatorname{Ric}_{00}\bigl(g(\lambda)\bigr)=-\frac{2\lambda^2}{p\,q^2}\qquad\text{on }\Omega,$$

   which equals $-2\lambda^2\neq0$ at the origin $x=0$ for every
   $0<|\lambda|<\varepsilon_1$; hence $G_{ab}(g(\lambda))\neq0$ on $\Omega$ and
   the conclusion of the refuted statement fails.

## Facts & Assumptions

**Given:** The flat model with inertial chart $x$, $\Omega$ the open unit ball, the potential $\varphi=x^1$, the functions $p=1+2\lambda x^1$, $q=1-2\lambda x^1$, and the family $g(\lambda)_{ab}=\eta_{ab}+\lambda h_{ab}$ with $h_{00}=-2\varphi$, $h_{0i}=0$, $h_{ij}=-2\varphi\delta_{ij}$, $\lambda\in(-\varepsilon_1,\varepsilon_1)$, $\varepsilon_1=1/4$.

[L1] A flat linearized family over $\Omega$ consists of $\varepsilon_1>0$ and smooth fields $h$, $q$ such that for $0<|\lambda|<\varepsilon_1$ the field $g_{ab}(\lambda,p)=\eta_{ab}+\lambda h_{ab}(p)+\lambda^2q_{ab}(\lambda,p)$ is the component field of a smooth Lorentzian metric of signature $(-,+,+,+)$ on $\Omega$; the first-order coefficients are the $\lambda$-derivatives at $0$ and indices are raised and lowered with $\eta$, with $\bar h_{ab}=h_{ab}-\frac12\eta_{ab}h$ and $\Box=\eta^{ab}\partial_a\partial_b$ ([[def-gr-flat-linearized-perturbation]] clauses (a)-(c)).

[L2] First-order formulas ([[thm-gr-flat-linearized-curvature-and-gauge]] clauses (b)-(c)): $\operatorname{Ric}^{(1)}_{ab}=\frac12(\partial_c\partial_ah^{c}{}_{b}+\partial_c\partial_bh^{c}{}_{a}-\Box h_{ab}-\partial_a\partial_bh)$, $S^{(1)}=\partial_a\partial_bh^{ab}-\Box h$ and $G^{(1)}_{ab}=-\frac12\Box\bar h_{ab}+\partial^c\partial_{(a}\bar h_{b)c}-\frac12\eta_{ab}\partial^c\partial^d\bar h_{cd}$, expressions linear in $h$.

[L3] The metric-selected connection is unique with Christoffel symbols $\Gamma^a{}_{bc}=\frac12g^{ad}(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc})$ computed from the exact metric components of $g(\lambda)$ ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-christoffel-symbols-of-an-affine-connection]]). Curvature components in a chart are $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$ and $\operatorname{Ric}_{bd}=R^a{}_{bad}$ with $R_{abcd}=g_{ae}R^e{}_{bcd}$, $G_{ab}=\operatorname{Ric}_{ab}-\frac12Sg_{ab}$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b), [[def-gr-curvature-tensor-and-derived-tensors]] clause (c)).

[L4] For $\varphi=x^1$: $\partial_i\varphi=\delta_{i1}$, $\Delta\varphi=0$, and $\varphi$ is stationary ([[def-laplacian-of-a-c2-function]]).

[L5] A diagonal symmetric form with matrix $\operatorname{diag}(-p,q,q,q)$ has inertia $(3,1,0)$ whenever $p>0$ and $q>0$; its coordinate eigenvalues are exactly $-p,q,q,q$.

[L6] On the open unit ball, $|x^1|<1$, so for $|\lambda|<\varepsilon_1=1/4$ one has $|2\lambda x^1|<1/2$ and hence $p=1+2\lambda x^1>1/2$, $q=1-2\lambda x^1>1/2$. Also $p+q=2$, $\partial_1p=2\lambda$, $\partial_1q=-2\lambda$, and $\partial_1(1/q)=2\lambda/q^2$.

## Counterexample

**Proof technique:** direct; verify the family, compute the first-order Einstein coefficient from the closed formula, compute the exact Christoffel symbols and the $(00)$ Ricci component of the exact metric, and evaluate it at the origin.

1.1 (The family.) The fields $h$ and $q\equiv0$ are smooth and stationary, and for $0<|\lambda|<\varepsilon_1=1/4$ the exact metric matrix is $\operatorname{diag}(-p,q,q,q)$. By [L6], both $p$ and $q$ are positive everywhere on $\Omega$, so [L5] gives the Lorentzian signature $(-,+,+,+)$ directly. Thus every $g(\lambda)$ is a smooth Lorentzian metric on $\Omega$ and $(\varepsilon_1,h,q)$ is a flat linearized family. [L1, L5, L6, algebra]

1.2 (First-order vacuum.) By [L1], $h=\eta^{ab}h_{ab}=2\varphi-6\varphi=-4\varphi$, so $\bar h_{00}=-2\varphi-\frac12(-1)(-4\varphi)=-4\varphi$ and $\bar h_{0i}=0$, $\bar h_{ij}=-2\varphi\delta_{ij}-\frac12\delta_{ij}(-4\varphi)=0$; that is, $\bar h_{ab}=-4\varphi\,\delta_{a0}\delta_{b0}$. With $\Box\varphi=\Delta\varphi=0$ and stationarity, the closed formula of [L2] gives $G^{(1)}_{00}=-\frac12\Box(-4\varphi)=2\Delta\varphi=0$, while $\partial^c\partial^d\bar h_{cd}=\eta^{00}\eta^{00}\partial_0\partial_0\bar h_{00}=0$ and every divergence term involves $\bar h_{0\cdot}$ components or time derivatives; the $(0i)$ and $(ij)$ components contain only such terms as well. Hence $G^{(1)}_{ab}(h)=0$; by the linearity of [L2], $G^{(1)}_{ab}(\lambda h)=\lambda G^{(1)}_{ab}(h)=0$ for every $\lambda$. [L1, L2, L4, algebra]

1.3 (Exact Christoffel symbols.) In the coordinate frame $g(\lambda)=\operatorname{diag}(-p,q,q,q)$, so $g^{00}=-1/p$ and $g^{ii}=1/q$; the general formula of [L3] and [L6] give, and all other components vanish: $\Gamma^0{}_{01}=\Gamma^0{}_{10}=\partial_1p/(2p)=\lambda/p$; $\Gamma^1{}_{00}=\partial_1p/(2q)=\lambda/q$; $\Gamma^1{}_{11}=\partial_1q/(2q)=-\lambda/q$; $\Gamma^1{}_{22}=\Gamma^1{}_{33}=-\partial_1q/(2q)=\lambda/q$; $\Gamma^2{}_{12}=\Gamma^2{}_{21}=\Gamma^3{}_{13}=\Gamma^3{}_{31}=\partial_1q/(2q)=-\lambda/q$. (For example $\Gamma^1{}_{22}=\frac12g^{11}(\partial_2g_{12}+\partial_2g_{21}-\partial_1g_{22})=\frac12(1/q)(-\partial_1q)$, since only the $\partial_1$ derivative of the diagonal entries is nonzero; all components with a time derivative vanish by stationarity.) [L3, L6, algebra]

2.1 (Exact Ricci component.) By [L3] and step 1.3, $R^{a}{}_{0a0}=\partial_a\Gamma^a{}_{00}-\partial_0\Gamma^a{}_{a0}+\Gamma^a{}_{ae}\Gamma^e{}_{00}-\Gamma^a{}_{0e}\Gamma^e{}_{a0}$ and $\operatorname{Ric}_{00}=R^{a}{}_{0a0}$. The terms are: $\partial_a\Gamma^a{}_{00}=\partial_1(\lambda/q)=2\lambda^2/q^2$ by [L6]; $\partial_0\Gamma^a{}_{a0}=0$; $\Gamma^a{}_{a1}=\Gamma^0{}_{01}+\Gamma^1{}_{11}+\Gamma^2{}_{21}+\Gamma^3{}_{31}=\lambda/p-3\lambda/q$, so $\Gamma^a{}_{ae}\Gamma^e{}_{00}=\Gamma^a{}_{a1}\Gamma^1{}_{00}=\lambda^2/(pq)-3\lambda^2/q^2$; and $\Gamma^a{}_{0e}\Gamma^e{}_{a0}=\Gamma^0{}_{01}\Gamma^1{}_{00}+\Gamma^1{}_{00}\Gamma^0{}_{10}=2\lambda^2/(pq)$. Summing, $\operatorname{Ric}_{00}=2\lambda^2/q^2+\lambda^2/(pq)-3\lambda^2/q^2-2\lambda^2/(pq)=-\lambda^2/q^2-\lambda^2/(pq)=-\lambda^2(p+q)/(pq^2)=-2\lambda^2/(pq^2)$ since $p+q=2$ by [L6]. [step 1.3, L3, L6, algebra]

3.1 (Refutation.) At the origin $x=0$ one has $p=q=1$, so step 2.1 gives $\operatorname{Ric}_{00}(g(\lambda))= -2\lambda^2\neq0$ for every $0<|\lambda|<\varepsilon_1$; hence the exact Ricci tensor does not vanish on $\Omega$. If the exact Einstein tensor vanished, then contracting $G_{ab}=\operatorname{Ric}_{ab}-\frac12Sg_{ab}$ of [L3] with $g^{ab}$ would give $S=-g^{ab}G_{ab}=0$ and then $\operatorname{Ric}_{ab}=G_{ab}+\frac12Sg_{ab}=0$, contradicting $\operatorname{Ric}_{00}\neq0$. So $G_{ab}(g(\lambda))\neq0$ on $\Omega$ although $G^{(1)}_{ab}(\lambda h)=0$ by step 1.2, which refutes the statement. The failure is of order $\lambda^2$, consistent with the quadratic remainder bound of [[thm-gr-flat-linearized-curvature-and-gauge]] clause (f). [step 1.2, step 2.1, L1, L3, algebra] ∎

## Remarks

- **What the example does not say.** It refutes the implication "linearized vacuum solution $\Rightarrow$ exact vacuum solution" for one explicit family; it does not claim that every first-order vacuum family fails to be exact, nor that any approximate solution is useless. Exact vacuum metrics may have first-order coefficients with $G^{(1)}=0$ (any exact vacuum family has, by the expansion), and the point is only the converse failure.
- **Scope.** The datum $h_{ab}$ here is a mathematically chosen perturbation, not a physical field; no source, matter model, measurement or uncertainty occurs.
