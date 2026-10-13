---
id: thm-cm-kepler-ellipse-geometry
kind: theorem
title: "The subcritical Kepler conic is an ellipse with semiaxes $a=p/(1-e^2)$, $b=a\\sqrt{1-e^2}$, focus at the origin and area $\\pi ab$; its area is also $\\tfrac12\\int_0^{2\\pi}\\varrho^2$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [thm-cm-kepler-conic-and-eccentricity, def-countable-choice, cor-c-one-change-of-variables-for-l-one-functions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image, thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null, thm-linear-change-of-variables-for-lebesgue-measure, cor-volume-of-the-unit-n-ball, thm-sine-and-cosine-derivatives, thm-sine-cosine-signs-monotonicity-and-ranges, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule, thm-algebra-of-derivatives, def-interval, def-continuity-real]
dependency_roles:
  thm-cm-kepler-conic-and-eccentricity: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image: mathematical-premise
  thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.4, Eqs. (3.59)-(3.65) and Fig. 8: the elliptic branch $E<0$, $e<1$, with the turning radii and the ellipse geometry"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §5.5 and §5.6: the elliptic orbit of the Kepler problem, its semiaxes and the focus at the force centre"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node44.html"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $p>0$ and
$0\le e<1$, and put
$$a:=\frac{p}{1-e^2}>0,\qquad b:=a\sqrt{1-e^2},\qquad \varrho(\varphi):=\frac{p}{1+e\cos\varphi}\quad(\varphi\in\mathbb R).$$

1. $\varrho$ is $C^1$, $2\pi$-periodic, and
   $\dfrac{p}{1+e}\le\varrho\le\dfrac{p}{1-e}$.
2. Let $Q(x,y):=(1-e^2)x^2+y^2+2pex-p^2$ and
   $E_{\rm ell}:=\{(x,y)\in\mathbb R^2:Q(x,y)\le0\}$. Then
   $E_{\rm ell}$ is Lebesgue measurable, and for the closed unit disc
   $\overline B\subseteq\mathbb R^2$ and $T(u,v):=(au-ae,bv)$ one has
   $E_{\rm ell}=T[\overline B]$; consequently
   $\lambda_2(E_{\rm ell})=\pi ab=\pi a^2\sqrt{1-e^2}$.
3. For every $\varphi$, the ray $\{s(\cos\varphi,\sin\varphi):s>0\}$ meets
   $\partial E_{\rm ell}$ in the unique point
   $\varrho(\varphi)(\cos\varphi,\sin\varphi)$; that point satisfies
   $Q=0$, and $\lambda_2(E_{\rm ell})=\frac12\int_0^{2\pi}\varrho(\varphi)^2\,
   \mathrm d\varphi$.

Thus the conic $Q=0$ is the ellipse with centre $(-ae,0)$, semiaxes $a,b$,
its right focus at the origin, and enclosed area $\pi ab$.

## Facts & Assumptions

**Given:** The constants $p>0$, $0\le e<1$, $a=p/(1-e^2)$, $b=a\sqrt{1-e^2}$, the profile $\varrho$, and the region $E_{\rm ell}$.

[L1] Substitution and completion of the square: $Q(T(u,v))=Q(au-ae,bv)=a^2(1-e^2)(u^2+v^2-1)$ for all $(u,v)\in\mathbb R^2$; equivalently $Q(x,y)=(1-e^2)\bigl(x+pe/(1-e^2)\bigr)^2+y^2-p^2/(1-e^2)$. [algebra]

[L2] Assuming countable choice, a $C^1$ diffeomorphism satisfies the change-of-variables formula for $L^1$ functions; the polar map $\Phi(\varphi,s)=(s\cos\varphi,s\sin\varphi)$ is a $C^1$ diffeomorphism of $(0,2\pi)\times(0,\infty)$ onto its image (injective there, with nonsingular derivative, hence a diffeomorphism onto its open image by the injective-regular theorem); and a continuous function on a product with a nonnegative area element may be integrated iteratively by Tonelli ([[cor-c-one-change-of-variables-for-l-one-functions]], [[thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-countable-choice]]).

[L3] A line in $\mathbb R^2$ is Lebesgue null, and so is every subset of it ([[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]); an invertible linear map scales Lebesgue measure by the absolute determinant, and the closed unit disc has measure $\pi$ ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[cor-volume-of-the-unit-n-ball]]).

[L4] $\cos$ is differentiable with $(\cos)'=-\sin$, is $2\pi$-periodic, and ranges over $[-1,1]$; $\sin^2+\cos^2=1$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-trigonometric-parity-and-pythagorean-identity]]); sums, products and quotients of $C^1$ functions with nonvanishing denominator are $C^1$ ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-continuity-real]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1: $\varrho$ is a quotient of $C^1$ functions with denominator $1+e\cos\varphi\ge1-e>0$, hence $C^1$ by [L4]; it is $2\pi$-periodic because $\cos$ is; and $p/(1+e)\le\varrho\le p/(1-e)$ because $\cos\varphi\in[-1,1]$. [given, L4, algebra]

1.2 Clause 2, the identity $E_{\rm ell}=T[\overline B]$: by [L1], for $(u,v)\in\mathbb R^2$, $Q(T(u,v))=a^2(1-e^2)(u^2+v^2-1)$, so $Q(T(u,v))\le0$ if and only if $u^2+v^2\le1$, that is, $(u,v)\in\overline B$; hence $(x,y)\in E_{\rm ell}$ exactly when $(x,y)=T(u,v)$ for some $(u,v)\in\overline B$, since $T$ is a bijection of $\mathbb R^2$ onto itself (its linear part is invertible, $\det\mathrm{diag}(a,b)=ab>0$). [given, L1, algebra]

1.3 Clause 3, the radial description: for $s>0$ put $(x,y):=s(\cos\varphi,\sin\varphi)$. Using [L4], $Q(x,y)=s^2(1-e^2\cos^2\varphi)+2pes\cos\varphi-p^2$, a quadratic in $s$ with positive leading coefficient (since $1-e^2\cos^2\varphi\ge1-e^2>0$) and negative constant term $-p^2<0$; hence the set of $s>0$ with $Q\le0$ is the interval $(0,\varrho(\varphi)]$: indeed $s=\varrho(\varphi)$ is the unique positive root of $Q=0$, because substituting $\varrho=p/(1+e\cos\varphi)$ and multiplying by $(1+e\cos\varphi)^2$ gives $$p^2\bigl(1-e^2\cos^2\varphi\bigr)+2p^2e\cos\varphi\,\bigl(1+e\cos\varphi\bigr)-p^2\bigl(1+e\cos\varphi\bigr)^2=0,$$ a direct expansion — and $Q(0)=-p^2<0$ while $Q(s)\to+\infty$ as $s\to\infty$, so the two roots have opposite signs and the positive one is $\varrho(\varphi)$. Therefore $E_{\rm ell}=\{s(\cos\varphi,\sin\varphi):0\le\varphi<2\pi,\ 0\le s\le\varrho(\varphi)\}$, the boundary is the displayed profile, and each ray meets it exactly once. [given, L1, L4, algebra]

2.1 Clause 2, the area: $T$ is an affine map with invertible linear part, hence a $C^1$ diffeomorphism of $\mathbb R^2$ with $|\det DT(u,v)|=ab$ everywhere; $E_{\rm ell}=\{Q\le0\}$ is closed (so Lebesgue measurable with indicator in $L^1$), and $T[\overline B]=E_{\rm ell}$ by step 1.2. The change-of-variables formula of [L2] applied to the indicator of $E_{\rm ell}$ gives $\lambda_2(E_{\rm ell})=\int_{\overline B}ab\,\mathrm d\lambda_2=ab\,\lambda_2(\overline B)$; the closed unit disc has $\lambda_2(\overline B)=\pi$ by [L3], so $\lambda_2(E_{\rm ell})=\pi ab=\pi a^2\sqrt{1-e^2}$. [step 1.2, L2, L3, algebra]

3.1 Clause 3, the polar area formula: let $W:=\{(\varphi,s):0<\varphi<2\pi,\ 0<s\le\varrho(\varphi)\}\subseteq D:=(0,2\pi)\times(0,\infty)$ and $S:=\Phi(W)$, where $\Phi(\varphi,s)=(s\cos\varphi,s\sin\varphi)$ is the restriction of the polar map of [L2]. The set $W$ is Borel because $\varrho$ is continuous, and $S$ is Borel because $\Phi$ is a homeomorphism from $D$ onto its image. Since $S\subseteq E_{\rm ell}$ by step 1.3 and $E_{\rm ell}$ has finite measure by step 2.1, $\mathbf 1_S$ is integrable. The change-of-variables formula [L2] applied on $D$ gives $$\lambda_2(S)=\int_W s\,\mathrm d\lambda_2(\varphi,s)=\int_0^{2\pi}\!\!\int_0^{\varrho(\varphi)}s\,\mathrm ds\,\mathrm d\varphi=\frac12\int_0^{2\pi}\varrho(\varphi)^2\,\mathrm d\varphi,$$ the middle equality by Tonelli [L2] applied to the nonnegative function $(\varphi,s)\mapsto s\mathbf 1_W$. By step 1.3, $E_{\rm ell}\setminus S$ is contained in the closed positive $x$-axis, including the origin, a subset of a line and hence null by [L3]. Therefore $\lambda_2(E_{\rm ell})=\lambda_2(S)=\frac12\int_0^{2\pi}\varrho(\varphi)^2\,\mathrm d\varphi$, which is clause 3. [step 1.3, step 2.1, L2, L3, algebra] ∎
