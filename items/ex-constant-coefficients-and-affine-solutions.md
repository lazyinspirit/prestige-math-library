---
id: ex-constant-coefficients-and-affine-solutions
kind: example
title: "Constant coefficients and their affine solutions"
status: published
origin: pipeline
deps:
  - def-measurable-beltrami-coefficient
  - def-weak-solution-beltrami-equation
  - thm-measurable-riemann-mapping-sphere
  - def-beltrami-coefficient-and-maximal-dilatation
  - def-acl-sobolev-quasiconformal-homeomorphism
  - thm-acl-characterisation-of-w-one-p
  - def-wirtinger-derivatives
  - def-mobius-transformation
  - def-complex-domain
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - thm-determinant-sign-detects-orientation-change
  - def-geometric-quasiconformal-homeomorphism
dependency_level: 10
axiom_use: >-
  Assume AC for the analytic quasiconformal and normalized solution interfaces.
  AC implies Countable Choice for the measurable coefficient, weak-solution
  and ACL definitions. The affine computations themselves use no choice.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: 'Ch. 2 §1, printed pp. 49–51: the real-linear form $f(z)=\alpha z+\beta\bar z$, its complex dilatation, maximal dilatation and ellipse axes; read in full.'
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.1, printed p. 196: solutions differ by conformal postcomposition; read in full."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice. It implies Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]). Fix $\nu\in\mathbb C$ with $|\nu|<1$, and let $\mu$ be the sphere Beltrami coefficient whose finite-chart representative is the constant $\nu$ ([[def-measurable-beltrami-coefficient]], [[def-riemann-sphere-holomorphic-charts]], [[rem-riemann-sphere-one-point-compactification]]).

(a) **Affine solution.** The real-linear map $A(z)=z+\nu\bar z$ is an orientation-preserving analytically quasiconformal homeomorphism of $\mathbb C$ onto itself ([[def-geometric-quasiconformal-homeomorphism]], [[def-acl-sobolev-quasiconformal-homeomorphism]]). Its inverse, Wirtinger derivatives, Beltrami coefficient, and maximal dilatation are
$$A^{-1}(w)=\frac{w-\nu\bar w}{1-|\nu|^2},\qquad A_z\equiv1,\qquad A_{\bar z}\equiv\nu,\qquad \mu_A\equiv\nu,\qquad K_A=\frac{1+|\nu|}{1-|\nu|}$$
([[def-wirtinger-derivatives]], [[def-beltrami-coefficient-and-maximal-dilatation]]). More generally, every orientation-preserving real-affine solution $g(z)=a z+b\bar z+c$ of $g_{\bar z}=\nu g_z$ on a complex domain has $b=\nu a$, $a\ne0$, and hence the form $g(z)=a(z+\nu\bar z)+c$ ([[def-complex-domain]]).

(b) **Normalized sphere solution.** The map
$$f^\nu(z):=\frac{z+\nu\bar z}{1+\nu},\qquad f^\nu(\infty):=\infty$$
is an orientation-preserving quasiconformal homeomorphism and sphere weak solution: it fixes $0,1,\infty$ and solves $f_{\bar z}=\mu f_z$ in the sphere charts ([[def-weak-solution-beltrami-equation]], [[def-riemann-sphere-holomorphic-charts]]). It is unique among normalized orientation-preserving quasiconformal homeomorphic solutions. The full set of orientation-preserving quasiconformal homeomorphic sphere solutions is exactly $\{M\circ f^\nu:M\text{ is Möbius}\}$ ([[thm-measurable-riemann-mapping-sphere]], [[def-mobius-transformation]]).

(c) **Ellipse distortion.** The ellipse $A(S^1)$ has major-to-minor semiaxis ratio $K_A=(1+|\nu|)/(1-|\nu|)$, equal to the ratio prescribed by the coefficient $\nu$ ([[def-measurable-beltrami-coefficient]](b)). Multiplication by $(1+\nu)^{-1}$ does not change that ratio, and when $\nu=0$ the normalized map is the identity.

## Facts & Assumptions

**Given:** AC; $\nu\in\mathbb C$ with $|\nu|<1$; and the sphere coefficient $\mu$ with finite-chart representative $\nu$.

[F1] AC implies Countable Choice, required by the measurable-coefficient, weak-solution and ACL interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F2] A sphere Beltrami coefficient is specified by its finite-chart representative; the infinity-chart expression is the holomorphic pullback and preserves its essential norm. The weak-solution equation is chart-independent under these pullbacks ([[def-measurable-beltrami-coefficient]], [[def-weak-solution-beltrami-equation]], [[def-riemann-sphere-holomorphic-charts]], [[rem-riemann-sphere-one-point-compactification]]).

[F3] For a real-differentiable map, $f_z$ and $f_{\bar z}$ are the two Wirtinger coefficients of its real differential; for $A(z)=z+\nu\bar z$, they are $1$ and $\nu$ ([[def-wirtinger-derivatives]]).

[F4] For a real-affine map, coordinate-line restrictions are absolutely continuous with constant derivatives, so the ACL characterization [[thm-acl-characterisation-of-w-one-p]] gives local $W^{1,2}$ membership. An analytic quasiconformal homeomorphism has $W^{1,2}_{\mathrm{loc}}$ regularity and satisfies $|f_{\bar z}|\le k|f_z|$ for $k=(K-1)/(K+1)$; its maximal dilatation is determined by its Beltrami coefficient ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]]).

[F5] A real-linear isomorphism preserves orientation exactly when its determinant is positive; for $A$ the determinant is $1-|\nu|^2$ ([[thm-determinant-sign-detects-orientation-change]]).

[F6] A positive real determinant gives the positive local orientation sign; the sign of a homeomorphism is locally constant, and the holomorphic sphere-chart transition preserves orientation. Thus the positive finite-chart sign gives the same sphere orientation at infinity ([[thm-determinant-sign-detects-orientation-change]], [[def-geometric-quasiconformal-homeomorphism]], [[def-riemann-sphere-holomorphic-charts]]).

[F7] On the sphere, holomorphic source and target chart changes transport both the coefficient and weak equation; a locally Lipschitz chart expression with bounded classical derivatives away from one point is in $W^{1,2}_{\mathrm{loc}}$ by the ACL characterization [[thm-acl-characterisation-of-w-one-p]], and its value at one point does not affect the a.e. equation. Since every chart expression of $\mu$ has modulus $|\nu|$, the weak equation gives the analytic quasiconformal inequality in each chart ([[def-riemann-sphere-holomorphic-charts]], [[def-measurable-beltrami-coefficient]], [[def-weak-solution-beltrami-equation]], [[def-acl-sobolev-quasiconformal-homeomorphism]]).

[F8] Among orientation-preserving quasiconformal homeomorphic sphere solutions, the normalized measurable Riemann mapping theorem gives existence and uniqueness of the three-point normalized solution and identifies all such solutions as its Möbius postcompositions ([[thm-measurable-riemann-mapping-sphere]]).

[F9] The ellipse-field definition assigns axis ratio $(1+|\nu|)/(1-|\nu|)$ to coefficient $\nu$ ([[def-measurable-beltrami-coefficient]](b)).

## Proof

**Proof technique:** compute the real-linear map and extend its normalized multiple to the sphere.

1.1 Put $s:=|\nu|<1$. The inverse formula follows from $w-\nu\bar w=(1-|\nu|^2)z$. By [F3], $A_z=1$ and $A_{\bar z}=\nu$, so $J_A=1-|\nu|^2>0$; the inverse makes $A$ a homeomorphism. By [F4], it is analytically $K_A$-quasiconformal with coefficient $\nu$, where $K_A=(1+s)/(1-s)$; [F5] gives orientation preservation. [F1, F3, F4, F5, given, algebra]

1.2 If $g(z)=a z+b\bar z+c$, then $g_z=a$ and $g_{\bar z}=b$. Thus the equation is equivalent to $b=\nu a$. Its Jacobian is $|a|^2-|b|^2=(1-|\nu|^2)|a|^2$, so an orientation-preserving solution has $a\ne0$; conversely any such $a$ gives the stated real-affine solution. [F3, F5, given, algebra]

2.1 Since $|\nu|<1$, $1+\nu\ne0$ and $f^\nu=(1+\nu)^{-1}A$ is invertible on $\mathbb C$. Its lower bound $|f^\nu(z)|\ge(1-|\nu|)|z|/|1+\nu|$ shows it extends continuously by $f^\nu(\infty)=\infty$, and its inverse extends likewise. In the source and target infinity coordinates $w=1/z$ and $\eta=1/f^\nu(z)$, the expression is $$\eta(w)=\frac{(1+\nu)w\bar w}{\bar w+\nu w},\qquad \eta(0)=0.$$ For $w\ne0$, $|\bar w+\nu w|\ge(1-|\nu|)|w|$; the expression is homogeneous of degree one and smooth on the punctured disk, so its derivative is bounded there by its bound on the unit circle, while $|\eta(w)|=O(|w|)$. The bounded derivative gives a Lipschitz bound along segments avoiding $0$, and continuity extends that bound across $0$. Its coordinate-line restrictions are therefore absolutely continuous: the sum of their increments is bounded by the Lipschitz constant times the total interval length. Their derivatives are bounded off $0$, hence locally square-integrable, so the ACL characterization in [F7] gives $W^{1,2}_{\mathrm{loc}}$ at $0$. In the finite chart, $f^\nu_{\bar z}=\nu f^\nu_z$; the coefficient pullback in [F7] gives the same weak equation in the infinity chart, with the point $w=0$ immaterial. The local orientation sign remains positive by [F6]. Hence $f^\nu$ is a sphere weak solution and orientation-preserving quasiconformal homeomorphism. Direct substitution gives $f^\nu(0)=0$ and $f^\nu(1)=1$. [F2, F3, F6, F7, step 1.1, given]

3.1 The Axiom of Choice permits use of [F8]. Step 2.1 proves that $f^\nu$ is a normalized orientation-preserving quasiconformal homeomorphic solution, so uniqueness in [F8] identifies it with the normalized MRMT solution. Every other orientation-preserving quasiconformal homeomorphic sphere solution is its Möbius postcomposition by [F8], and every such postcomposition is a solution. [F1, F8, step 2.1, given]

4.1 If $\nu=0$, then $A$ and $f^0$ are the identity and the ellipse ratio is $1$. Otherwise write $\nu=s e^{i\theta}$ and set $z=e^{i\theta/2}(x+iy)$. Then $$A(z)=e^{i\theta/2}\bigl((1+s)x+i(1-s)y\bigr).$$ Thus $A(S^1)$ has semiaxes $1+s$ and $1-s$, so its ratio is $(1+s)/(1-s)=K_A$, which also equals the coefficient ellipse ratio by [F9]. Multiplication by $(1+\nu)^{-1}$ scales and rotates both axes equally. [F9, step 1.1, given, algebra] ∎

## Source notes

Bishop, Ch. 2 §1, printed pp. 49–51, was read in full. It derives the real-linear form $\alpha z+\beta\bar z$, the complex dilatation $\mu=\beta/\alpha$, the ratio $D=(1+|\mu|)/(1-|\mu|)$, and the major-axis direction. The Step 1 locator “Ch. 3 §1, p. 85” was corrected to this exact passage. Lyubich §14.1, printed p. 196, was read in full for uniqueness up to conformal postcomposition.

## Supplier reconciliation

The explicit maps and calculations above remain unchanged. Their exact normalized uniqueness and solution-family uses now consume the complete stable MRMT proof, and their analytic conventions consume the earlier12 definitions/equivalence. Root decisions and full-run certification are separate.
