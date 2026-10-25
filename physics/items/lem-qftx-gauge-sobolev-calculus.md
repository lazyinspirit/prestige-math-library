---
id: lem-qftx-gauge-sobolev-calculus
kind: lemma
title: Sobolev gauge calculus and smooth gauge action
status: "published"
origin: pipeline
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF plus the full Axiom of Choice, as used by the Sobolev algebra, embedding, and Banach inverse-function suppliers."
deps:
  - def-qftx-smooth-sobolev-gauge-configuration
  - cor-sobolev-algebra-above-the-critical-index
  - thm-higher-order-sobolev-embedding
  - thm-inverse-function-theorem-for-banach-spaces
  - def-axiom-of-choice
dependency_roles:
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  cor-sobolev-algebra-above-the-critical-index: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  thm-inverse-function-theorem-for-banach-spaces: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Thomas Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§§5.13.1–5.13.2, printed pp. 113–115: Sobolev multiplication and stated Banach Lie group/right-action facts; the exp/log chart proof is supplied locally."
    - title: "Brian Williams, Geometry, Spin, and Seiberg-Witten Theory (full expository manuscript)"
      url: "https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf"
      locator: "§4.2 and Appendix A.1–A.2, PDF pp. 25–27 and 41–45: Sobolev configuration, the abelian gauge action, and Sobolev multiplication; local argument here treats SU(N)."
verification:
  precheck: pending
---

## Statement

Assume the configuration data of the preceding definition. For every integer $k>d/2+1$, all finite-atlas Sobolev norms on the specified section and form spaces are equivalent, and $H^k$ embeds continuously in $C^1$. Put $\mathcal M:=P\times_{\operatorname{Ad}}\operatorname{Mat}_N(\mathbb C)$, where $SU(N)$ acts by matrix conjugation and $H^r(\mathcal M)$ uses the same finite-atlas completion for each integer $r\ge0$. Pointwise multiplication is a bounded bilinear map $H^k(\mathcal M)\times H^k(\mathcal M)\to H^k(\mathcal M)$; its restriction to adjoint Lie algebra sections has this matrix-bundle target, whereas the commutator is a bounded bilinear map $H^k(\operatorname{ad}P)\times H^k(\operatorname{ad}P)\to H^k(\operatorname{ad}P)$. The set $\mathcal G_{k+1}=H^{k+1}(\operatorname{Ad}P)$ is a Hilbert Lie group modeled on $H^{k+1}(\operatorname{ad}P)$, and the right gauge action $\mathcal A_k\times\mathcal G_{k+1}\to\mathcal A_k$ is smooth. At $(A,e)$ its differential, in the affine and exponential coordinates, is

$$D\bigl((A+a)^{\exp\xi}\bigr)_{(0,0)}(a,\xi)=a+d_A\xi,$$

where $a\in H^k(T^*M\otimes\operatorname{ad}P)$ and $\xi\in H^{k+1}(\operatorname{ad}P)$.

## Statement references

[Walpuski, Sobolev connections and gauge transformations](https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf)

[Williams, the Sobolev gauge action](https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf)

## Facts & Assumptions

**Given:** Full AC; the compact Riemannian bundle data of the preceding definition; an integer $k>d/2+1$; $A\in\mathcal A_k$; and $u\in\mathcal G_{k+1}$.

[A1] Full AC is the adopted axiom base. [[def-axiom-of-choice]]

[F1] The configuration definition fixes the finite-atlas norms, $\operatorname{ad}P$, the right-action formula, and the covariant derivative $d_A\xi=d\xi+[A,\xi]$. [[def-qftx-smooth-sobolev-gauge-configuration]]

[F2] On a bounded extension domain, $W^{k,2}$ is a Banach algebra when $2k>d$, and the higher-order embedding gives $H^k\hookrightarrow C^1$ when $k>d/2+1$. The same estimates apply componentwise to finitely many localized bundle coefficients. [[cor-sobolev-algebra-above-the-critical-index]], [[thm-higher-order-sobolev-embedding]]

[F3] A $C^1$ map between real Banach spaces whose derivative at a point is a bounded linear isomorphism is a $C^1$ diffeomorphism between suitable open neighborhoods. [[thm-inverse-function-theorem-for-banach-spaces]]

## Proof

**Given:** The hypotheses of the Statement.

1.1 On an overlap of two relatively compact bundle charts, a localized section changes coordinates by multiplication by a smooth transition matrix and by a smooth coordinate change. Every derivative of order at most $k$ of the transformed coefficient is a finite sum of bounded derivatives of these transition maps times derivatives of the original coefficient of order at most $k$. The Jacobians and inverse Jacobians are bounded on the compact supports. The product and chain rules therefore bound each localized $H^k$ norm by a constant times the finite-atlas norm in the other chart. Summing over the finite cover gives both norm inequalities. Thus the norms are equivalent and define the same complete Sobolev topology. [given, A1, F1, algebra]

2.1 Localize by the fixed finite partition and extend each compactly supported coefficient by zero into a bounded Euclidean ball. For $p=2$, $2k>d$; [F2] gives the scalar $H^k$ product estimate and the $C^1$ representative when $k>d/2+1$. To estimate a localized product, multiply one factor by the partition cutoff and the other by an auxiliary smooth cutoff equal to one on its support. Summing the finitely many coefficient estimates gives bounded matrix multiplication on $H^k(\mathcal M)$; conjugation preserves products, so they patch. The commutator of two anti-Hermitian trace-zero matrices is anti-Hermitian and trace-zero, giving the stated adjoint-bundle bracket bound. Matrix multiplication itself need not preserve $\operatorname{ad}P$. The same reasoning at order $k+1$ gives its matrix-section algebra estimate and continuous embedding. The completed vector-section spaces are Hilbert spaces: the sum of the localized $L^2$ derivative inner products induces the chosen norm, and completion preserves that inner product. [F1, F2, step 1.1, algebra]

3.1 Regard $E:=H^{k+1}(\mathcal M)$ as a real Banach algebra with identity section $I_N$ and an equivalent submultiplicative norm, using step 2.1. The map $f:E\to E$, $f(X)=\exp X-I_N$, is $C^\infty$: its power series and all derivatives converge uniformly on bounded balls by the factorial bounds for powers in a Banach algebra. Its derivative at $0$ is $Df(0)=\operatorname{id}_E$. Thus [F3] applies to this map on the open Banach-space domain $E$, giving open neighborhoods $U$ of $0$ and $W$ of $0$ such that $f:U\to W$ is a smooth diffeomorphism. Shrink these neighborhoods so its inverse is the convergent series $\log(I_N+Y)=\sum_{j\ge1}(-1)^{j+1}Y^j/j$ for $Y\in W$, smooth by locally uniform convergence of its differentiated series. The two series are inverse there, since their absolutely convergent compositions are the scalar formal identities in the single commuting variable $X$ or $Y$. [F1, F2, F3, step 2.1, algebra]

4.1 The real subspace $H:=H^{k+1}(\operatorname{ad}P)\subset E$ is the closed range of the bounded projection $X\mapsto (X-X^*)/2-\operatorname{tr}(X-X^*)I_N/(2N)$: projecting smooth matrix-section approximants proves equality with the completed adjoint section space. Shrink $U$ using the continuous $C^0$ embedding so that $|\operatorname{tr}X(x)|<2\pi$ for every $X\in U$ and $x\in M$, and so that the following logarithm identities hold in their convergence neighborhoods. For $u\in\mathcal G_{k+1}\cap(I_N+W)$, the series give $(\log u)^*=\log(u^*)=\log(u^{-1})=-\log u$; the last equality follows from $\exp(-X)=(\exp X)^{-1}$ and the local inverse identities. For any matrix $X$, differentiating the determinant by column multilinearity gives $\frac{d}{dt}\det(e^{tX})=\operatorname{tr}(X)\det(e^{tX})$, hence $\det(e^X)=e^{\operatorname{tr}X}$. Thus $\det u=1$ implies $\operatorname{tr}\log u\in2\pi i\mathbb Z$; the strict trace bound forces it to be zero, so $\log u\in H$. Conjugation commutes with both series, so these assertions patch. Conversely, if $X\in U\cap H$, then $\exp X$ is unitary by $\exp(X)^*=\exp(-X)$ and has determinant one by the same identity. It lies in the defining completion of smooth gauge sections because smooth adjoint sections approximate $X$ and their exponentials converge in $E$. Consequently $\exp$ restricts to a homeomorphism from the open subset $U\cap H$ of $H$ onto the relatively open identity neighborhood $\mathcal G_{k+1}\cap(I_N+W)$, with inverse the restricted smooth logarithm. Here, after each shrinking, take $W=f(U)$; it remains open by step 3.1. [F1, F2, step 3.1, algebra]

5.1 Products and inverses preserve the completion defining $\mathcal G_{k+1}$: multiply smooth approximating gauge sections and use the algebra estimate; for inversion use $u^{-1}=u^*$, a bounded real-linear operation on $E$. Translated charts $u\exp X$ from step 4.1 cover the group and induce its given Sobolev topology, since translation and its inverse are continuous. Their coordinate changes are $X\mapsto\log(v^{-1}u\exp X)$ on the open overlap domains and are smooth by the ambient algebra estimates and series. In coordinates near any $u,v$, multiplication is represented by $\log((uv)^{-1}u\exp X\,v\exp Y)$, and inversion by $\log(u(u\exp X)^{-1})$, wherever these products lie in the identity chart. These expressions are smooth as maps into $E$ and take values in $H$; the subspace norm makes all their derivatives $H$-valued, so they are smooth as maps into $H$. This proves the Hilbert Lie group assertion without treating $SU(N)$-valued sections as an open subset of $E$. [F1, step 2.1, step 3.1, step 4.1, algebra]

6.1 On an overlap, write $s_\beta=s_\alpha g$; the connection and section transition rules are $A_\beta=g^{-1}A_\alpha g+g^{-1}dg$ and $u_\beta=g^{-1}u_\alpha g$. The product rule gives
$$A_\beta^{u_\beta}=g^{-1}\bigl(u_\alpha^{-1}A_\alpha u_\alpha+u_\alpha^{-1}du_\alpha\bigr)g+g^{-1}dg,$$
so the local formula for $A^u$ has exactly the connection transition rule and patches to the pullback by the $C^1$ bundle automorphism associated with $u$. In each chart the action is $A^u=u^{-1}Au+u^{-1}du$. Multiplication $H^{k+1}\times H^k\to H^k$ is bounded because $H^{k+1}\hookrightarrow H^k$ continuously and the matrix-section $H^k$ product is bounded by step 2.1. Differentiation $H^{k+1}\to H^k$ is bounded and $u^{-1}=u^*$ on the gauge group. Thus both terms are restrictions of compositions of bounded linear and bilinear maps on the local matrix Sobolev spaces, and are smooth in the charts of step 5.1. They have connection-valued output: conjugation preserves $\mathfrak{su}(N)$, while differentiating $u^*u=I_N$ and $\det u=1$ shows $u^{-1}du$ is anti-Hermitian and trace-zero. The composition identity $(A^u)^v=A^{uv}$ follows from $d(uv)=(du)v+u\,dv$, and $A^e=A$, so this is the stated smooth right action. [F1, step 2.1, step 5.1, algebra]

7.1 For $t\in\mathbb R$, expand in the finite-dimensional matrix algebra: $e^{-t\xi}(A+ta)e^{t\xi}=A+t(a+[A,\xi])+o(t)$ in $H^k$, while $e^{-t\xi}d(e^{t\xi})=t\,d\xi+o(t)$ in $H^k$ by the bounded derivative and product estimates of step 2.1. Adding the two terms gives derivative $a+d\xi+[A,\xi]=a+d_A\xi$, which is the displayed formula. [F1, step 2.1, step 6.1, algebra] ∎
