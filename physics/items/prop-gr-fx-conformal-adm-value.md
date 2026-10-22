---
id: prop-gr-fx-conformal-adm-value
kind: proposition
title: "ADM energy of a conformally flat end"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: "A fixed-chart calculation for a conformally flat end; no constraint equation, positivity result, or empirical claim is inferred."
deps:
  - def-gr-fx-adm-end
dependency_roles:
  def-gr-fx-adm-end: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), §§7.3.1–7.3.2, equations (7.14)–(7.15) and (7.45)–(7.48), PDF pp. 105–110."
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "Sebastiano Bernuzzi, Lecture Notes on 3+1 Numerical Relativity, v0.1 (2021), §§7.2 and 7.2.2, equations (7.6b)–(7.6d) and (7.18)–(7.22), PDF pp. 33–35."
      url: "https://www.ias.edu/sites/default/files/NR_notes.pdf"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Eric Gourgoulhon, From Geometry to Numerics, arXiv:0712.2332v2 (2008), §2.1, equation (2), PDF pp. 7–8."
      url: "https://arxiv.org/pdf/0712.2332"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

On a fixed-chart end $E=\{x\in\mathbb R^3:r=|x|>R_0\}$ with the ADM convention stated below, let $u\in C^\infty(E,(0,\infty))$ satisfy $u=1+m/(2r)+\rho$, where $m\in\mathbb R$ has units of metres and $\rho=O_2(r^{-2})$. Set $h=u^4\delta$ and choose any $C^1$ symmetric tensor $K=O_1(r^{-2})$. Then the ADM limit exists in the specified chart and
$$E_{\mathrm{ADM}}(h;x)=\frac{c^4m}{G_N}.$$

## Statement references

[[def-gr-fx-adm-end]]

## Facts & Assumptions

**Given:** The fixed Cartesian end and ADM convention of [[def-gr-fx-adm-end]], a smooth positive $u=1+m/(2r)+\rho$ with $\rho=O_2(r^{-2})$, and $h=u^4\delta$.

[F1] On the fixed chart, $E_{\mathrm{ADM}}$ is $c^4/(16\pi G_N)$ times the limit of $\int_{S_R}(\partial_j h_{ij}-\partial_i h_{jj})n^i\,dS$, where $dS$ is induced by $\delta|_{S_R}$ and a local parametrization $X$ has density $\sqrt{\det[\delta(\partial_{y^a}X,\partial_{y^b}X)]_{a,b=1}^{2}}\,dy^1dy^2$; $O_2(r^{-q})$ controls Cartesian derivatives of order $k\le2$ by $O(r^{-q-k})$ uniformly in angle; $c$ and $G_N$ have the SI units stated in the definition ([[def-gr-fx-adm-end]]).

[A1] $m$ is a real length parameter, $u$ is strictly positive on $E$, and the remainder bounds are uniform in angle, as required by the Statement.

## Proof

**Given:** [F1], [A1], and the conformally flat metric in the Statement.

1.1 Set $w:=m/(2r)+\rho$. Derivatives of $r^{-1}$ satisfy $\partial^\alpha(r^{-1})=O(r^{-1-|\alpha|})$ for $|\alpha|\le2$, since each derivative is homogeneous of degree $-1-|\alpha|$ and bounded on the unit sphere. Together with $\rho=O_2(r^{-2})$, this gives $w=O_2(r^{-1})$; the product rule gives $w^2,w^3,w^4=O_2(r^{-2})$. Also $4w=2m/r+O_2(r^{-2})$, so the binomial expansion $u^4=(1+w)^4=1+4w+6w^2+4w^3+w^4$ yields $h_{ij}=\delta_{ij}+(2m\delta_{ij})/r+O_2(r^{-2})$. Since $u>0$, $h$ is positive definite and $C^2$, and the supplied symmetric $K$ is $C^1$ with $O_1(r^{-2})$ decay. Thus $(h,K)$ satisfies the definition of a fixed-chart end with $a_{ij}=2m\delta_{ij}$ and $\epsilon=1$. Now $h_{ij}=u^4\delta_{ij}$ gives $\partial_jh_{ij}=\partial_i(u^4)$ and $h_{jj}=3u^4$, hence $\partial_jh_{ij}-\partial_i h_{jj}=-2\partial_i(u^4)=-8u^3\partial_i u$. Contracting with $n^i=x^i/R$ on $S_R$ replaces $\partial_i u$ by $\partial_r u$. [F1, A1, algebra]

2.1 The radial derivative bounds in [F1] and $\rho=O_2(r^{-2})$ give $u|_{S_R}=1+m/(2R)+O(R^{-2})$ and $\partial_r u|_{S_R}=-m/(2R^2)+O(R^{-3})$, uniformly in angle. Thus $u^3=1+O(R^{-1})$, so step 1.1's contracted integrand is $4m/R^2+O(R^{-3})$, uniformly on $S_R$. [F1, A1, step 1.1, algebra]

3.1 Parameterize the complement of the poles and one meridian in $S_R$ by $X_R(\theta,\varphi)=R(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$, with coordinates $y^1=\theta\in(0,\pi)$ and $y^2=\varphi\in(0,2\pi)$. Its coordinate tangent vectors are $\partial_\theta X_R=R(\cos\theta\cos\varphi,\cos\theta\sin\varphi,-\sin\theta)$ and $\partial_\varphi X_R=R(-\sin\theta\sin\varphi,\sin\theta\cos\varphi,0)$, so the induced-metric Gram matrix is $[\delta(\partial_{y^a}X_R,\partial_{y^b}X_R)]_{a,b=1}^{2}=\begin{pmatrix}R^2&0\\0&R^2\sin^2\theta\end{pmatrix}$, with determinant $R^4\sin^2\theta$. The area-measure definition in [F1] therefore gives $dS=R^2\sin\theta\,d\theta\,d\varphi$. The omitted poles and meridian have area zero, so integrating the uniform expansion in step 2.1 over this chart yields $\int_{S_R}(\partial_jh_{ij}-\partial_i h_{jj})n^i\,dS=16\pi m+O(R^{-1})$, since $\int_0^{2\pi}\int_0^\pi\sin\theta\,d\theta\,d\varphi=4\pi$. This proves the limit exists. [F1, step 2.1, algebra]

4.1 Multiplying the limit in step 3.1 by $c^4/(16\pi G_N)$ from [F1] gives $E_{\mathrm{ADM}}=c^4m/G_N$. The dimensions are $(c^4/G_N)\times\mathrm m=\mathrm J$, as specified in [F1]. [F1, step 3.1, algebra] ∎

## Remarks

The proof uses the fixed chart and the exact stated falloff. It proves neither coordinate invariance for broader asymptotic classes nor a positivity theorem.
