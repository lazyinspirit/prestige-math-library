---
id: ex-metric-independence-of-total-curvature-on-a-deformed-sphere
kind: example
title: A deformed sphere has the same total curvature
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - cor-total-gaussian-curvature-is-independent-of-the-riemannian-metric
  - ex-gauss-bonnet-for-the-round-sphere
  - prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-formula-for-the-curvature-tensor
  - def-riemann-curvature-four-tensor
  - def-sectional-curvature
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.7 and Problem 9-5, printed pp. 167-172 (PDF pp. 183-188): the total curvature is a topological invariant; Exercise 3.3(b)-(c) printed pp. 25-26, Problem 5-2(a) printed p. 87 and Problem 8-1(a) printed p. 150 cover surfaces of revolution and the ellipsoid metric."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.2.4, printed pp. 14-15 (PDF pp. 21-22): the global identity, so that any metric on the sphere has total curvature 4 pi."
---

## Example

Assume the axiom of choice.
Let $(S^2,o)$ be the oriented two-sphere. Every smooth Riemannian metric
$g$ on $S^2$ has
$$\int_{S^2}K_g\,dA_g=4\pi,$$
although $K_g$ need not be constant. In particular the induced metric of an
ellipsoid, transported to $S^2$ by radial projection, has total Gaussian
curvature $4\pi$; for the spheroid with semi-axes $(a,a,c)$, $a\ne c$, the
Gaussian curvature takes the value $c^2/a^4$ at the poles and $1/c^2$ on the
equator, so it is not constant and the constancy of the integral is
substantive.

## Facts & Assumptions

**Given:** The oriented two-sphere $S^2$ with the round metric of radius $R$ as reference, an arbitrary smooth Riemannian metric $g$ on $S^2$, and the spheroid $\Sigma_{a,c}=\{x_1^2/a^2+x_2^2/a^2+x_3^2/c^2=1\}$ with $a,c>0$.

[A1] full AC is assumed; it is inherited through the metric-independence corollary and the round-sphere example quoted below and is used nowhere else ([[def-axiom-of-choice]]).

[F1] For a closed oriented surface $M$ and two smooth Riemannian metrics $g_0,g_1$ on $M$, $\int_MK_{g_0}\,dA_{g_0}=\int_MK_{g_1}\,dA_{g_1}=2\pi\chi(M)$ ([[cor-total-gaussian-curvature-is-independent-of-the-riemannian-metric]]).

[F2] On the round sphere of radius $R$, $\chi(S^2)=2$ and $\int_{S^2}K\,dA=4\pi$ ([[ex-gauss-bonnet-for-the-round-sphere]]).

[F3] The inclusion $\Sigma_{a,c}\hookrightarrow\mathbb R^3$ of the spheroid is an immersion, so the induced metric is Riemannian ([[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]]); radial projection $\mathbb R^3\setminus\{0\}\to S^2$ restricts to a diffeomorphism $\Sigma_{a,c}\to S^2$, so the induced metric transported along it is a smooth Riemannian metric on $S^2$. On the chart $X(u,v)=(a\sin u\cos v,a\sin u\sin v,c\cos u)$ its coefficients are $E=a^2\cos^2u+c^2\sin^2u$, $F=0$, $G=a^2\sin^2u$.

[F4] The Levi-Civita symbols of a coordinate metric are $\Gamma^k{}_{ij}=\tfrac12g^{k\ell}(\partial_ig_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F5] With $R(\partial_i,\partial_j)\partial_k=R^\ell{}_{kij}\partial_\ell$, the coordinate curvature formula is $R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}$ ([[prop-coordinate-formula-for-the-curvature-tensor]]).

[F6] The four-tensor is $\operatorname{Rm}(A,B,C,D)=g(R(A,B)C,D)$, and the sectional curvature of the plane spanned by independent $A,B$ is $\operatorname{Rm}(A,B,B,A)/(g(A,A)g(B,B)-g(A,B)^2)$ ([[def-riemann-curvature-four-tensor]], [[def-sectional-curvature]]).

## Verification

**Proof technique:** obtain the total curvature $4\pi$ for every metric from metric independence and the round sphere, then compute the spheroid metric explicitly to exhibit nonconstant pointwise curvature.

1.1 By [F2], $\chi(S^2)=2$ and the round metric has total curvature $4\pi$; applying [F1] with the round metric as $g_0$ and any smooth metric $g$ on $S^2$ as $g_1$ gives $\int_{S^2}K_g\,dA_g=2\pi\chi(S^2)=4\pi$. The spheroid metric transported by the diffeomorphism of [F3] is such a smooth metric, so it too has total curvature $4\pi$. [F1, F2, F3, given, algebra]

1.2 On the spheroid chart of [F3], $X_u=(a\cos u\cos v,a\cos u\sin v,-c\sin u)$ and $X_v=(-a\sin u\sin v,a\sin u\cos v,0)$, so the induced metric has $E=\langle X_u,X_u\rangle=a^2\cos^2u+c^2\sin^2u$, $F=\langle X_u,X_v\rangle=0$ and $G=\langle X_v,X_v\rangle=a^2\sin^2u$, all depending on $u$ alone. [F3, algebra]

2.1 Substituting $E=E(u)$, $G=G(u)$ in [F4], the only nonzero symbols are $\Gamma^1{}_{11}=E'/(2E)$, $\Gamma^1{}_{22}=-G'/(2E)$ and $\Gamma^2{}_{12}=\Gamma^2{}_{21}=G'/(2G)$. [F4, step 1.2, algebra]

3.1 With $x^1=u$, $x^2=v$, the needed component of [F5] is $R^1{}_{212}=\partial_1\Gamma^1{}_{22}-\partial_2\Gamma^1{}_{12}+\Gamma^m{}_{22}\Gamma^1{}_{1m}-\Gamma^m{}_{12}\Gamma^1{}_{2m}$, whose four terms are $-G''/(2E)+G'E'/(2E^2)$, $0$, $-G'E'/(4E^2)$ and $G'^2/(4EG)$; hence $R^1{}_{212}=-G''/(2E)+G'E'/(4E^2)+G'^2/(4EG)$. Since $F=0$, [F6] gives $K=\operatorname{Rm}(\partial_1,\partial_2,\partial_2,\partial_1)/(EG)=R^1{}_{212}/G$. [F5, F6, step 2.1, algebra]

4.1 Specialize $E=a^2\cos^2u+c^2\sin^2u$ and $G=a^2\sin^2u$, so that $G'=2a^2\sin u\cos u$, $G''=2a^2(\cos^2u-\sin^2u)$ and $E'=2(c^2-a^2)\sin u\cos u$. Multiplying $K$ by $4E^2G$ and expanding with $\sin^2u+\cos^2u=1$ gives $-2EG''+E'G'+EG'^2/G=4c^2G$, hence $K=c^2/E^2=c^2/(a^2\cos^2u+c^2\sin^2u)^2$ on the chart. [step 3.1, algebra]

5.1 As $u\to0$ or $u\to\pi$ one has $E\to a^2$, so the continuous extension of $K$ to the poles has value $c^2/a^4$, while at the equator $u=\pi/2$ one has $E=c^2$ and $K=c^2/c^4=1/c^2$. If $a\ne c$ these values differ, since $c^2/a^4=1/c^2$ would force $c^4=a^4$ and hence $c=a$; therefore the Gaussian curvature of a nonspherical spheroid is not constant. [step 4.1, algebra]

6.1 Steps 1.1 and 5.1 together show that the total curvature $4\pi$ is metric-independent while the pointwise curvature is not: the round sphere is the constant-curvature case $a=c$, and the nonspherical spheroid has total curvature $4\pi$ by step 1.1 with nonconstant $K$ by step 5.1. [F1, F2, step 1.1, step 4.1, step 5.1]

7.1 No new choice is made: the chart, the metric coefficients and the reference metric are explicit, and full AC entered only through the inherited metric-independence corollary and round-sphere example. [A1, step 6.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.7 and Problem 9-5, printed pp. 167-172, proves that the total curvature is $2\pi\chi(M)$ and hence a topological invariant; the surfaces-of-revolution and ellipsoid computations are Lee's Exercise 3.3(b)-(c) printed pp. 25-26, Problem 5-2(a) printed p. 87 and Problem 8-1(a) printed p. 150, and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.2.4, printed pp. 14-15, states the global identity. The spheroid curvature $c^2/(a^2\cos^2u+c^2\sin^2u)^2$ is computed here from the Christoffel and curvature formulas of [[prop-christoffel-formula-for-the-levi-civita-connection]] and [[prop-coordinate-formula-for-the-curvature-tensor]], not imported; the values $c^2/a^4$ at the poles and $1/c^2$ at the equator exhibit the nonconstancy.
