---
id: lem-emg-controlled-maxwell-wkb
kind: lemma
title: Finite WKB Maxwell residual, null rays and polarization quotient
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
proof_strategy: direct
deps:
  - def-emg-matter-formal-systems
  - lem-emg-potential-maxwell-wave-identity
  - thm-clairaut-schwarz-mixed-partials
  - def-complex-numbers-and-arithmetic
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-exponential
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
  - thm-chain-rule-for-total-derivatives
  - cor-mean-value-theorem
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-ftc-first-part
  - thm-derivative-of-exponential
  - thm-extreme-value-metric
  - thm-continuous-implies-integrable
dependency_roles:
  def-emg-matter-formal-systems: mathematical-premise
  lem-emg-potential-maxwell-wave-identity: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Harte, Gravitational lensing beyond geometric optics: I. Formalism and observables, arXiv:1808.06203v2 (2018), §§3.1–3.3 and Appendix A"
      url: https://arxiv.org/pdf/1808.06203v2
      locator: "Equations (40)–(55), PDF pp. 10–13, give the curved Maxwell potential ansatz, transport and gauge constraints, leading field and polarization quotient; Appendix A, equations (A.2)–(A.5), PDF pp. 33–34, explains the gauge-gradient residual for a truncated formal series. The exact finite-ε identities and component bounds below are proved locally and are not inferred from asymptotic convergence."
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, §6.2"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Equations (6.7)–(6.14), PDF pp. 61–64: curved Maxwell equations, eikonal null-gradient rays, and the affine null-geodesic calculation; Reall notes the Maxwell geometric-optics case after proving the scalar-wave calculation. Gaussian units are not imported."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Use the smooth oriented, time-oriented Lorentzian four-manifold, metric, connection, curvature sign, length-coordinate SI convention and constants of [[def-emg-matter-formal-systems]]. Let $U\subseteq M$ be open. Let $\theta\in C^4(U,\mathbb R)$ be dimensionless, set $k:=d\theta$, and assume that $k$ is nowhere zero and $g^{-1}(k,k)=0$. Define the metric dual vector field $k^\sharp$ by $g(k^\sharp,X)=k(X)$ for every tangent vector $X$; in coordinates, $(k^\sharp)^a=g^{ab}k_b$. Let $a_0,a_1\in C^3(U;T^*M\otimes_{\mathbb R}\mathbb C)$; this means that the real and imaginary parts of their coefficients are $C^3$ in every smooth chart. Complex tensor operations and $\nabla$ are extended componentwise and complex-linearly. Define

$$ (\Box a)_b:=g^{ac}\nabla_a\nabla_c a_b,\qquad (Pa)_b:=(\Box a)_b-\operatorname{Ric}_b{}^c a_c,\qquad d_1:=\nabla^a(a_1)_a, $$

and define the first-order operator

$$ (La)_b:=2k^c\nabla_c a_b+(\nabla_c k^c)a_b. $$

Assume pointwise on $U$ that

$$ g^{-1}(k,a_0)=0,\qquad La_0=0,\qquad iLa_1+Pa_0=0,\qquad ik^a(a_1)_a+\nabla^a(a_0)_a=0. $$

These are finite-order ansatz constraints; they assert neither initial data nor a global solution of the transport equations or convergence of a longer series. For $0<\epsilon\le1$, set

$$ A_\epsilon:=\epsilon e^{i\theta/\epsilon}(a_0+\epsilon a_1),\qquad F_\epsilon:=dA_\epsilon. $$

Here $dA_\epsilon$ uses the complex-linear extension of the $C^3$ coordinate definition in [[lem-emg-potential-maxwell-wave-identity]], so $F_\epsilon$ has $C^2$ components. On a $C^2$ two-form $F$, define $dF$ by the $C^1$ three-form components $(dF)_{abc}:=\partial_aF_{bc}+\partial_bF_{ca}+\partial_cF_{ab}$; the antisymmetrized chain rule and equality of mixed second partials make this coordinate definition chart-independent ([[thm-clairaut-schwarz-mixed-partials]]).

Then $dF_\epsilon=0$ and the exact Maxwell divergence residual is

$$ \nabla^a(F_\epsilon)_{ab} =e^{i\theta/\epsilon}\left[-i\epsilon k_b d_1+ \epsilon^2\bigl((Pa_1)_b-\nabla_b d_1\bigr)\right]. $$

The field-strength expansion is also exact:

$$ F_\epsilon=e^{i\theta/\epsilon}\left[ik\wedge a_0+ \epsilon(da_0+ik\wedge a_1)+\epsilon^2da_1\right]. $$

The acronym WKB means Wentzel–Kramers–Brillouin; here “finite WKB ansatz” means exactly the phase-amplitude family $A_\epsilon$ just defined, subject to the four pointwise constraints above, and asserts no convergence of a longer series.

For units, take $[k]=\mathrm m^{-1}$, $[a_0]=[a_1]=\mathrm{T\,m}$, $[d_1]=\mathrm T$, $[Pa_1]=[\nabla d_1]=\mathrm{T\,m^{-1}}$, and $[\epsilon]=[\theta]=1$. Fix a smooth chart $(V,y)$ and a compact set $K\subseteq y(V)$ in its coordinate image. Define

$$ \|S\|_{\infty,K}:= \begin{cases} \max_I\max_{x\in K}|S_I(x)|,&K\ne\varnothing,\\ 0,&K=\varnothing, \end{cases} $$

where $I$ ranges over the finitely many components of the real or complex tensor in that chart. If $K\ne\varnothing$ and finite constants $K_0,D_0,C_0,B_0,B_1\ge0$ satisfy

$$ \|k\|_{\infty,K}\le K_0,\quad \|d_1\|_{\infty,K}\le D_0,\quad \|Pa_1-\nabla d_1\|_{\infty,K}\le C_0,\quad \|da_0+ik\wedge a_1\|_{\infty,K}\le B_0,\quad \|da_1\|_{\infty,K}\le B_1, $$

then

$$ \|\nabla^a(F_\epsilon)_{ab}\|_{\infty,K} \le\epsilon K_0D_0+\epsilon^2C_0,\qquad \|F_\epsilon-e^{i\theta/\epsilon}ik\wedge a_0\|_{\infty,K} \le\epsilon B_0+\epsilon^2B_1. $$

Taking real parts gives real potentials and fields with the same bounds. Here a local integral curve of $k^\sharp$ means a $C^2$ curve $\gamma:J\to U$, with $J\subseteq\mathbb R$ an open interval, satisfying $\dot\gamma(\lambda)=k^\sharp_{\gamma(\lambda)}$. In length coordinates the parameter $\lambda$ has unit $\mathrm m^2$. An affinely parametrized null geodesic here means a $C^2$ curve with $\dot\gamma(\lambda)\ne0$, $g(\dot\gamma,\dot\gamma)=0$, and $\nabla_{\dot\gamma}\dot\gamma=0$; every such local integral curve is one and lies in a level set of $\theta$. Along each such curve, choose any $\lambda_0\in J$ and any nonzero dimensionless complex initial value $\mathcal A_0\in\mathbb C\setminus\{0\}$, and define the scalar transport amplitude

$$ \mathcal A(\lambda)=\mathcal A_0 \exp\left(-\frac12\int_{\lambda_0}^{\lambda}(\nabla_c k^c)(\gamma(s))\,ds\right),\qquad \lambda\in J. $$

The integral is well-defined on each compact segment between $\lambda_0$ and $\lambda$, and $\mathcal A$ is nowhere zero because $\mathcal A_0\ne0$ and the exponential is nonzero. The one-form $e:=a_0/\mathcal A$ is therefore well-defined and satisfies $\nabla_{\dot\gamma}e=0$ and $g^{-1}(k,e)=0$ along the curve; these equations express parallel transport and transversality, respectively. At each $p\in U$, define $k_p^\perp:=\{a\in T_p^*M\otimes_{\mathbb R}\mathbb C:g_p^{-1}(k_p,a)=0\}$. Define the leading polarization at $p$ to be the class $[a_0(p)]$ in $k_p^\perp/\operatorname{span}_{\mathbb C}\{k_p\}$. This quotient is a two-dimensional complex vector space with the positive Hermitian form induced by $g_p^{-1}$, and for every $\beta\in\mathbb C$ replacing $a_0(p)$ by $a_0(p)+\beta k_p$ leaves $k_p\wedge a_0(p)$ unchanged. If $a_0(p)$ is proportional to $k_p$, the leading field vanishes at $p$. No convergence of a formal series extending the finite ansatz, existence of amplitudes satisfying the constraints, exact-solution error estimate, or extension of the local rays or transport amplitude beyond their stated domains is asserted.

## Facts & Assumptions

**Given:** The smooth Lorentzian and SI conventions of [[def-emg-matter-formal-systems]], the stated phase and amplitude regularities, the four pointwise ansatz constraints, $0<\epsilon\le1$, and the displayed component bounds when $K$ is nonempty.

[F1] [[def-emg-matter-formal-systems]] supplies a smooth oriented and time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, its metric-compatible torsion-free connection, Ricci convention, SI component units, and only the inherited $\mathrm{AC}_\omega$ convention. The proof uses no choice beyond those already recorded there.

[F2] [[lem-emg-potential-maxwell-wave-identity]] proves, for every real $C^3$ potential and then by complex-linear extension, $\nabla^a(dA)_{ab}=(PA)_b-\nabla_b(\nabla^aA_a)$ with exactly the $P$ and curvature sign used here.

[F3] [[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]] and [[thm-chain-rule-for-total-derivatives]] give the real-coordinate chain rule $\nabla_c(e^{i\theta/\epsilon})=(i/\epsilon)k_c e^{i\theta/\epsilon}$.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $|e^{i\theta/\epsilon}|=1$, and [[lem-complex-conjugation-and-modulus-laws]] gives multiplicativity and the triangle inequality for the complex modulus.

[F5] [[thm-clairaut-schwarz-mixed-partials]] states that continuous second partial derivatives commute, as needed for the local $C^3$ identity $d(dA_\epsilon)=0$.

[F6] [[thm-picard-lindelof-local-existence-and-uniqueness]] gives a unique local solution when the coordinate vector field is continuous and locally Lipschitz in its state variable. Step 1.4 verifies local Lipschitz regularity of the coordinates of $k^\sharp$ before applying it.

[F7] [[thm-continuous-implies-integrable]] states that continuous real functions on closed nondegenerate intervals are integrable; [[thm-ftc-first-part]] and [[thm-derivative-of-exponential]] then give the derivative of the displayed scalar transport amplitude along each compact ray segment.

[F8] [[thm-extreme-value-metric]] states that a continuous real-valued function on a nonempty compact metric space attains finite maximum and minimum values. The norm components below are continuous on the compact coordinate set.

[F9] [[cor-mean-value-theorem]] states that if a real function is continuous on a closed interval and differentiable on its interior, its endpoint difference equals an interior derivative times the interval length.

[A1] The four finite-order constraints in the Statement are assumptions on the supplied amplitudes $a_0,a_1$. No initial or boundary data are imposed on those fields, and no global existence from ray initial data is claimed. The nonzero scalar value $\mathcal A_0$ is only a normalization defining the transport factor along a given local curve. No convergence of higher-order terms or continuation of local ray/amplitude data beyond their stated domains is assumed.

## Proof


1.1 For any complex $C^2$ one-form $a$, write $\varphi=e^{i\theta/\epsilon}$. By [F3], $\nabla_c\varphi=(i/\epsilon)k_c\varphi$. Applying the product rule twice gives $ \Box(\varphi a_b)=\varphi\left(\Box a_b+\frac{2i}{\epsilon}k^c\nabla_c a_b+ \frac{i}{\epsilon}(\nabla_c k^c)a_b-\frac1{\epsilon^2}g^{-1}(k,k)a_b\right). $ Indeed, the two cross terms are each $(i/\epsilon)k^c\nabla_c a_b$, differentiating $k_c$ contributes $(i/\epsilon)(\nabla_c k^c)a_b$, and differentiating the phase twice contributes $-\epsilon^{-2}k^ck_c a_b$. The Ricci term in $P$ multiplies by the same scalar $\varphi$. Therefore $ P(\varphi a)=\varphi\left(Pa+\frac{i}{\epsilon}La- \frac1{\epsilon^2}g^{-1}(k,k)a\right). $ [given, F1, F3, algebra]

1.2 The first-order product rule gives $ \nabla^a(A_\epsilon)_a=e^{i\theta/\epsilon} \left[ik^a(a_0)_a+\epsilon\left(ik^a(a_1)_a+\nabla^a(a_0)_a\right) +\epsilon^2d_1\right]. $ The first two brackets vanish by [A1], so $\nabla^a(A_\epsilon)_a=\epsilon^2e^{i\theta/\epsilon}d_1$. [A1, F3, algebra]

1.3 The first-order product rule gives $ dA_\epsilon=e^{i\theta/\epsilon}\left[ik\wedge a_0+ \epsilon(da_0+ik\wedge a_1)+\epsilon^2da_1\right], $ which is the stated exact field expansion under the $C^3$ coordinate definition of [F2]. [F2, F3, algebra]

1.4 In chart coordinates $y^a$, the vector field defined by metric raising has components $G^a(y):=g^{ab}(y)\partial_b\theta(y)$. Since $g$ is smooth and $\theta\in C^4$, $G$ is $C^3$ and is nowhere zero because $g$ is nondegenerate and $k$ is nowhere zero. At any chart point, continuity of each of the finitely many entries of $DG$ gives a neighborhood on which all entries are bounded by one finite $M$; shrink it to a convex coordinate box $C$ contained in the chart. For any $x,y\in C$, the segment $x+t(y-x)$ lies in $C$; the chain rule makes each component of $t\mapsto G(x+t(y-x))$ differentiable, and [F9] gives $|G^a(y)-G^a(x)|\le M\sum_b|y^b-x^b|$. Thus $G$ is locally Lipschitz at every chart point. The autonomous field $(\lambda,y)\mapsto G(y)$ is continuous and locally Lipschitz in its state variable; applying [F6] gives a local $C^1$ integral curve, which is $C^2$ because $G$ is $C^1$. Torsion freedom and $k=d\theta$ give $\nabla_a k_b=\nabla_bk_a$. Hence $k^a\nabla_a k_b=k^a\nabla_bk_a=\tfrac12\nabla_b(g^{-1}(k,k))=0. $ Along an integral curve this is $\nabla_{\dot\gamma}\dot\gamma=0$, while $g(\dot\gamma,\dot\gamma)=g^{-1}(k,k)=0$. Its parameter is therefore affine and its tangent is null. Also $(\theta\circ\gamma)'=d\theta(k^\sharp)=g^{-1}(k,k)=0$, so $\theta$ is constant along it. [F1, F3, F6, F9, A1, algebra]

1.5 At a point, choose a real covector $v\in T_p^*M$ with $g^{-1}(k,v)=-1$ and put $\ell=v+\tfrac12g^{-1}(v,v)k$. Then $g^{-1}(\ell,\ell)=0$ and $g^{-1}(k,\ell)=-1$ by direct expansion. Thus $\operatorname{span}_{\mathbb R}\{k,\ell\}$ has one positive and one negative direction. Since the full metric has signature $(-,+,+,+)$, its orthogonal complement $S$ is a positive two-plane. It follows that $k_p^\perp=\operatorname{span}_{\mathbb C}\{k_p\}\oplus S_{\mathbb C}$, so the quotient has complex dimension two and the induced Hermitian form from $g_p^{-1}(a,\overline b)$ is positive definite. Finally, for every $\beta\in\mathbb C$, $k_p\wedge(a_0(p)+\beta k_p)=k_p\wedge a_0(p)$; in a basis beginning with $k_p$, this wedge vanishes exactly when $a_0(p)$ is proportional to $k_p$. [F1, A1, construct, algebra]

2.1 Apply step 1.1 to $a=a_0+\epsilon a_1$ and multiply by $\epsilon$. The $g^{-1}(k,k)$ term vanishes by [A1], the $La_0$ term vanishes by [A1], and the remaining coefficient $\epsilon(Pa_0+iLa_1)$ vanishes by [A1]. Thus $PA_\epsilon=\epsilon^2e^{i\theta/\epsilon}Pa_1$. [A1, step 1.1, algebra]

2.2 Along a ray, $La_0=0$ gives $\nabla_{k^\sharp}a_0=-(\nabla_c k^c)a_0/2$. The integrand in $\mathcal A$ is continuous on each compact ray segment, so [F7] gives $k^\sharp(\mathcal A)=-(\nabla_c k^c)\mathcal A/2$; the exponential never vanishes. The quotient rule now gives $\nabla_{k^\sharp}(a_0/\mathcal A)=0$, and [A1] gives $g^{-1}(k,a_0/\mathcal A)=0$. [A1, F7, step 1.4, algebra]

3.1 Apply [F2] to $A_\epsilon$ using steps 2.1 and 1.2. Differentiating $\epsilon^2e^{i\theta/\epsilon}d_1$ gives $e^{i\theta/\epsilon}(i\epsilon k_b d_1+\epsilon^2\nabla_b d_1)$. Subtraction therefore gives the stated exact residual. In a chart, expanding the defined cyclic derivative of $F_\epsilon=dA_\epsilon$ cancels the six mixed second partials in pairs by [F5], so $dF_\epsilon=0$. [F2, F3, F5, step 2.1, step 1.2, algebra]

4.1 If $K=\varnothing$, both defined norms are zero. Suppose $K\ne\varnothing$. For each finite component, continuity of the component and of its complex modulus makes its absolute-value function continuous; [F8] therefore supplies its finite maximum, and a maximum over the finite component set also exists. From the exact residual of step 3.1, the componentwise product bound $|k_bd_1|\le K_0D_0$, the triangle inequality [F4], and $|e^{i\theta/\epsilon}|=1$ give $ \|\nabla^a(F_\epsilon)_{ab}\|_{\infty,K}\le\epsilon K_0D_0+\epsilon^2C_0. $ Step 1.3 gives the field bound in the same way, using $B_0,B_1$. For any $z=a+ib$, $|a|^2\le a^2+b^2=|z|^2$, so $|\operatorname{Re}z|\le|z|$; the real connection and exterior derivative commute with real part componentwise. Therefore the same estimates hold for the real potentials and fields. [given, F4, F8, step 3.1, step 1.3, algebra] ∎
