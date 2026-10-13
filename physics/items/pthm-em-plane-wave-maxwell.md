---
id: pthm-em-plane-wave-maxwell
kind: physics-theorem
title: "Dispersion, transversality and the two polarization conditions for plane-wave solutions"
status: published
origin: pipeline
domain: physics
dependency_level: 15
deps: [def-em-plane-wave-definition,
       pthm-em-vacuum-wave-equation,
       post-em-vacuum-maxwell,
       def-em-si-conventions,
       def-cross-product-in-r3,
       def-euclidean-inner-product,
       lem-cross-product-is-bilinear-alternating-and-orthogonal,
       thm-cross-product-norm-is-the-two-vector-gram-determinant,
       def-complex-conjugate-real-imaginary-part-and-modulus,
       thm-complex-numbers-form-a-field,
       thm-eulers-formula,
       thm-quarter-turn-values-and-shift-formulas,
       thm-complex-exponential-is-entire-with-derivative-itself,
       thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       thm-chain-rule-for-total-derivatives,
       def-divergence-and-curl-of-a-c1-vector-field,
       def-directional-and-partial-derivatives,
       def-laplacian-of-a-c2-function]
dependency_roles:
  def-em-plane-wave-definition: formulation-prerequisite
  pthm-em-vacuum-wave-equation: physical-result
  post-em-vacuum-maxwell: physical-assumption
  def-em-si-conventions: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  thm-eulers-formula: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional classification of ideal whole-space plane-wave solutions of the smooth source-free vacuum Maxwell branch: amplitude equations, dispersion relation, transversality, orthogonality and the magnitude relation $|B|=|E|/c$, in a named inertial chart with SI constants. Excluded: non-plane-wave fields, sources, boundaries, finite total energy, material media and any empirical claim."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.3.2 pp. 87-88 (the constraints $ik\\cdot E_0=0$, $ik\\cdot B_0=0$, $ik\\times E_0=i\\omega B_0$, the dispersion relation and the statement that the fourth Maxwell equation gives no further constraint)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.2 printed pp. 376-379 (transversality from the divergence equations; $B_0=(1/c)(\\hat k\\times E_0)$; the warning that empty-space Maxwell solutions obey the wave equation but not conversely)"
proof_strategy: direct
---

## Statement

Let $k\in\mathbb R^3\setminus\{0\}$, $\omega>0$ and $e,b\in\mathbb C^3$, and let
$(E,B)$ be the plane-wave fields of [[def-em-plane-wave-definition]] on the
whole-space region $\Omega=\mathbb R^3$, $I=\mathbb R$, with the terminology and
phase convention of that definition, the cross product and inner product of
[[def-cross-product-in-r3]] and [[def-euclidean-inner-product]] extended to
$\mathbb C^3$ componentwise, the constants of [[def-em-si-conventions]] and
$\hat k=k/|k|$. Then:

(a) [Amplitude equations] $(E,B)$ satisfies the four smooth-branch vacuum
Maxwell equations of [[post-em-vacuum-maxwell]] with $\rho\equiv0$ and
$J\equiv0$ on $\mathbb R^3\times\mathbb R$ if and only if

$$k\cdot e=0,\qquad k\cdot b=0,\qquad k\times e=\omega b,\qquad k\times b=-\frac{\omega}{c^2}e .$$

(b) [Dispersion, nonzero waves, two polarizations] The amplitude equations
admit a nonzero solution $(e,b)\ne(0,0)$ if and only if
$|k|^2=\omega^2/c^2$; off this dispersion relation the only solution is
$e=b=0$. On the dispersion relation both zero and nonzero solutions occur; a
particular solution is nonzero exactly when its amplitudes are not both zero,
in the sense of [[def-em-plane-wave-definition]](c). If $|k|=\omega/c$, the
solutions are exactly the pairs $(e,b)$ with
$e\in\{v\in\mathbb C^3: k\cdot v=0\}$ arbitrary and $b=k\times e/\omega$: a
complex two-dimensional family; $e=0$ gives the zero wave, and for every
nonzero solution $e\ne0$ and $b\ne0$.

(c) [Transversality, orthogonality, magnitude relation and the wave equation]
For every solution with $|k|=\omega/c$ and every
$(x,t)\in\mathbb R^3\times\mathbb R$: $k\cdot E(x,t)=k\cdot B(x,t)=0$,
$E(x,t)\cdot B(x,t)=0$ and $B(x,t)=\hat k\times E(x,t)/c$; in particular
$|B(x,t)|=|E(x,t)|/c$. Each component of $E$ and of $B$ is a $C^\infty$
solution of the wave equation $\Delta v=c^{-2}\partial_t^2v$ of
[[pthm-em-vacuum-wave-equation]] on $\mathbb R^3\times\mathbb R$.

(d) [Scope] The equivalence in (a) is between the amplitude equations and
membership in the source-free smooth Maxwell branch; it says nothing about
fields that solve the wave equations but not the amplitude equations (see
[[pthm-em-vacuum-wave-equation]](b)). The item covers ideal whole-space plane
waves only, makes no finite-energy, boundary, material or empirical claim, and
is conditional on the adopted postulate.

## Facts & Assumptions

**Given:** The wavevector $k\ne0$, the angular frequency $\omega>0$, the
complex amplitudes $e,b\in\mathbb C^3$, the plane-wave fields $(E,B)$ of
[[def-em-plane-wave-definition]] on $\Omega=\mathbb R^3$, $I=\mathbb R$ with
phase $\theta(x,t)=k\cdot x-\omega t$, and the constants of
[[def-em-si-conventions]] with $\varepsilon_0=(\mu_0c^2)^{-1}$.

[F1] The fields are given by
$E(x,t)=\operatorname{Re}(e\exp(i\theta(x,t)))$ and
$B(x,t)=\operatorname{Re}(b\exp(i\theta(x,t)))$ componentwise; they are of
class $C^\infty$ on $\mathbb R^3\times\mathbb R$, and $(E,B)$ is the
identically zero pair exactly when $e=b=0$
([[def-em-plane-wave-definition]]).

[F2] The smooth branch of the vacuum Maxwell postulate holds for jointly $C^1$
fields with the additional derivatives required by each equation and
continuous sources; on the whole-space region $\Omega=\mathbb R^3$,
$I=\mathbb R$ with the identically zero source fields $\rho=0$, $J=0$ it
consists of the four equations
$\operatorname{div}E=0$, $\operatorname{div}B=0$,
$\operatorname{curl}E=-\partial_tB$,
$\operatorname{curl}B=c^{-2}\partial_tE$ ([[post-em-vacuum-maxwell]],
[[def-em-si-conventions]]).

[F3] On $\mathbb C^3$ the inner product and cross product are the
componentwise extensions of [[def-euclidean-inner-product]] and
[[def-cross-product-in-r3]]: $u\cdot v=\sum_j u_jv_j$ and $u\times v$ given by
the coordinate differences of products. The identities of
[[lem-cross-product-is-bilinear-alternating-and-orthogonal]] are polynomial
identities with integer coefficients and therefore hold for complex entries as
well: the cross product is bilinear and alternating,
$\langle u\times v,w\rangle=\det[u\ v\ w]$, and $u\times v$ is orthogonal to
$u$ and to $v$. Moreover
$|u\times v|^2=|u|^2|v|^2-(u\cdot v)^2$ for real $u,v$
([[thm-cross-product-norm-is-the-two-vector-gram-determinant]]).

[F4] The operators: divergence and curl of a $C^1$ field are those of
[[def-divergence-and-curl-of-a-c1-vector-field]]; partial derivatives are
those of [[def-directional-and-partial-derivatives]]; the Laplacian is that of
[[def-laplacian-of-a-c2-function]]. The complex exponential is entire with
derivative itself ([[thm-complex-exponential-is-entire-with-derivative-itself]]),
the chain rule for total derivatives applies
([[thm-chain-rule-for-total-derivatives]]), complex differentiability is
equivalent to real total differentiability with a complex-linear derivative
([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]),
and the real part, imaginary part and conjugation are those of
[[def-complex-conjugate-real-imaginary-part-and-modulus]], so that
$\operatorname{Re}$ is $\mathbb R$-linear and every $W\in\mathbb C^3$ has a
unique decomposition $W=A+iB$ with $A,B\in\mathbb R^3$.

[F5] The source-free wave-equation theorem
[[pthm-em-vacuum-wave-equation]] holds for jointly $C^2$ fields on a
source-free open region of the smooth branch, with
$\Delta E=c^{-2}\partial_t^2E$ and $\Delta B=c^{-2}\partial_t^2B$
componentwise.

[F6] Complex field arithmetic and Euler's formula: $\mathbb C$ is a field, so
multiplication is distributive and $i^2=-1$
([[thm-complex-numbers-form-a-field]]); for every real $\theta$,
$\exp(i\theta)=\cos\theta+i\sin\theta$ ([[thm-eulers-formula]]); and
$\cos(\pi/2)=0$, $\sin(\pi/2)=1$, $\cos\pi=-1$, $\sin\pi=0$
([[thm-quarter-turn-values-and-shift-formulas]]).

## Proof

1.1 For the fields of [F1] with phase $\theta(x,t)=k\cdot x-\omega t$, differentiation through the real part gives componentwise $\partial_{x_j}E=\operatorname{Re}(i\,k_je\,\exp(i\theta))$ and $\partial_tE=\operatorname{Re}(-i\omega\,e\,\exp(i\theta))$, hence $\operatorname{div}E=\operatorname{Re}(i\,(k\cdot e)\exp(i\theta))$ and $\operatorname{curl}E=\operatorname{Re}(i\,(k\times e)\exp(i\theta))$; replacing $e$ by $b$ gives the same four displays with $B$ and $b$. Indeed each component of $(x,t)\mapsto e_j\exp(i\theta(x,t))$ is a composition of the entire exponential with the real-linear maps $(x,t)\mapsto i\theta(x,t)$ and multiplication by the constant $e_j$, so the chain rule [F4] gives $\partial_{x_j}(e_j\exp(i\theta))=e_j\exp(i\theta)\,ik_j$ and $\partial_t(e_j\exp(i\theta))=e_j\exp(i\theta)(-i\omega)$; the derivative of the real part equals the real part of the derivative because $\operatorname{Re}$ is $\mathbb R$-linear [F4], and summing coordinates with the coordinate formulas for divergence and curl [F4] and the cross-product formula [F3] gives the displays. [F1, F3, F4, given, algebra]

1.2 Let $W\in\mathbb C^3$ satisfy $\operatorname{Re}(W\exp(i\theta))=0$ for every real $\theta$. Writing $W=A+iB$ with $A,B\in\mathbb R^3$ [F4] and using Euler's formula and the field arithmetic [F6] gives $W\exp(i\theta)=(A\cos\theta-B\sin\theta)+i(A\sin\theta+B\cos\theta)$, so $\operatorname{Re}(W\exp(i\theta))=A\cos\theta-B\sin\theta$; evaluating at $\theta=\pi/2$ gives $-B=0$ and at $\theta=\pi$ gives $-A=0$, using the quarter-turn values of [F6]; hence $A=B=0$ and $W=0$. Moreover, for every $(x,t)$ the phase attains every real value: given a real $\theta$ and a time $t$, choose a coordinate $j$ with $k_j\ne0$ and let $x$ have $x_j=(\theta+\omega t)/k_j$ and $x_i=0$ for $i\ne j$; then $k\cdot x=\theta+\omega t$ by the coordinate form of the inner product [F3], so $\theta(x,t)=\theta$. Consequently a relation $\operatorname{Re}(W\exp(i\theta(x,t)))=0$ valid for all $(x,t)\in\mathbb R^3\times\mathbb R$ forces $W=0$. [F3, F4, F6, given, algebra]

2.1 By [F2] and step 1.1, the four equations $\operatorname{div}E=0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}B=c^{-2}\partial_tE$ hold on $\mathbb R^3\times\mathbb R$ exactly when $\operatorname{Re}(i(k\cdot e)\exp(i\theta))=0$, $\operatorname{Re}(i(k\cdot b)\exp(i\theta))=0$, $\operatorname{Re}(i(k\times e-\omega b)\exp(i\theta))=0$ and $\operatorname{Re}(i(k\times b+(\omega/c^2)e)\exp(i\theta))=0$ for all $(x,t)$; by step 1.2 each of these is equivalent to the vanishing of the complex vector it multiplies, that is to $k\cdot e=0$, $k\cdot b=0$, $k\times e=\omega b$ and $k\times b=-(\omega/c^2)e$. This proves the equivalence of (a). [step 1.1, step 1.2, F2, algebra]

3.1 Assume $(e,b)$ satisfies the four amplitude equations of step 2.1 and $(e,b)\ne(0,0)$. If $e=0$, then $k\times e=\omega b$ gives $b=0$, a contradiction; hence $e\ne0$. Since $k\cdot e=0$, the triple-product expansion $k\times(k\times e)=k(k\cdot e)-|k|^2e=-|k|^2e$ (the coordinate identity of [F3]) shows that $k\times e=0$ would force $|k|^2e=0$ and hence $e=0$; therefore $k\times e\ne0$ and $b=k\times e/\omega\ne0$. Crossing $k\times b=-(\omega/c^2)e$ with $k$ gives $k\times(k\times b)=-(\omega/c^2)(k\times e)=-(\omega^2/c^2)b$, while the same triple-product identity and $k\cdot b=0$ give $k\times(k\times b)=k(k\cdot b)-|k|^2b=-|k|^2b$; hence $(|k|^2-\omega^2/c^2)b=0$ and, since $b\ne0$ and $|k|^2,c^2$ are real with $c>0$, $|k|^2=\omega^2/c^2$. Equivalently, if $|k|^2\ne\omega^2/c^2$ then the only solution is $e=b=0$, because any nonzero solution would have $|k|^2=\omega^2/c^2$ by the argument just given. [step 2.1, F3, algebra]

3.2 Conversely assume $|k|^2=\omega^2/c^2$. For any $e\in\mathbb C^3$ with $k\cdot e=0$, put $b:=k\times e/\omega$; then $k\cdot b=(k\cdot(k\times e))/\omega=0$ because $\langle k\times e,k\rangle=\det[k\ e\ k]=0$ by alternation [F3], and $k\times b=(k(k\cdot e)-|k|^2e)/\omega=-(\omega^2/c^2)e/\omega=-(\omega/c^2)e$, so $(e,b)$ satisfies the amplitude equations; by step 2.1 the corresponding plane wave lies in the source-free smooth Maxwell branch. If $e=0$ then $b=k\times e/\omega=0$, the zero wave; if $e\ne0$ then $k\times e\ne0$, since $k\times e=0$ together with $k\cdot e=0$ would give $k\times(k\times e)=k(k\cdot e)-|k|^2e=-|k|^2e=0$ and hence $e=0$, so $b\ne0$. Conversely, every solution with $|k|=\omega/c$ satisfies $k\cdot e=0$ and $b=k\times e/\omega$ by the amplitude equations, so on the dispersion relation the solutions are exactly the pairs $(e,k\times e/\omega)$ with $k\cdot e=0$; since $k\ne0$, the condition $k\cdot e=0$ is one nontrivial complex-linear equation in $\mathbb C^3$, whose solution space is a complex two-dimensional subspace. [step 2.1, F3, algebra]

3.3 By step 2.1 the pair $(E,B)$ satisfies the four equations of the source-free smooth branch on $\mathbb R^3\times\mathbb R$, and the fields are $C^\infty$ by [F1]; the source-free wave-equation theorem [F5] applied on the source-free region $W=\mathbb R^3\times\mathbb R$ therefore gives $\Delta E=c^{-2}\partial_t^2E$ and $\Delta B=c^{-2}\partial_t^2B$ componentwise on $\mathbb R^3\times\mathbb R$. [step 2.1, F1, F5]

4.1 For a solution with $|k|=\omega/c$ and any $(x,t)$, the equalities $k\cdot e=0$ and $k\cdot b=0$ of step 2.1 give $k\cdot E(x,t)=\sum_jk_j\operatorname{Re}(e_j\exp(i\theta))=\operatorname{Re}\bigl((k\cdot e)\exp(i\theta)\bigr)=0$ and likewise $k\cdot B(x,t)=0$, using the $\mathbb R$-linearity of $\operatorname{Re}$ and the coordinate form of the inner product [F3, F4]. [step 2.1, step 3.2, F3, F4, algebra]

4.2 For a solution with $|k|=\omega/c$ one has $b=k\times e/\omega=(|k|/\omega)(\hat k\times e)=\hat k\times e/c$, so componentwise taking real parts and using that $\hat k\times\cdot$ is a real-linear combination of coordinates gives $B(x,t)=\operatorname{Re}(b\exp(i\theta))=\hat k\times\operatorname{Re}(e\exp(i\theta))/c=\hat k\times E(x,t)/c$. Consequently $E(x,t)\cdot B(x,t)=E\cdot(\hat k\times E)/c=\det[E\ \hat k\ E]/c=0$ for every $(x,t)$, by the determinant identity and alternation of [F3], the last determinant having two equal columns. [step 3.2, F1, F3, algebra]

5.1 For a solution with $|k|=\omega/c$, step 4.2 gives $|B(x,t)|^2=|\hat k\times E(x,t)|^2/c^2$, and the Gram determinant identity of [F3] together with $\hat k\cdot E=0$ from step 4.1 and $|\hat k|^2=\langle k,k\rangle/|k|^2=1$ gives $|\hat k\times E|^2=|\hat k|^2|E|^2-(\hat k\cdot E)^2=|E|^2$; hence $|B(x,t)|^2=|E(x,t)|^2/c^2$ and, both sides being nonnegative and $c>0$, $|B(x,t)|=|E(x,t)|/c$. [step 4.1, step 4.2, F3, algebra]

5.2 The equivalence in (a) is between the amplitude equations and membership in the source-free smooth Maxwell branch, and it asserts nothing about fields that solve the wave equations but not the amplitude equations; [F5] records the one-directional character of the wave-equation implication for general fields. The item covers ideal whole-space plane waves only, makes no finite-energy, boundary, material or empirical claim, and is conditional on the adopted postulate. [step 3.1, step 3.2, step 4.1, step 4.2, given]

6.1 Steps 1.1 and 1.2 supply the derivative formulas and the phase-injectivity fact; step 2.1 proves the amplitude-equation equivalence (a); steps 3.1 and 3.2 prove the dispersion alternative, the nonzero-solution criterion and the complex two-dimensional solution family (b); step 3.3 proves the wave-equation clause and steps 4.1, 4.2 and 5.1 prove transversality, orthogonality, the relation $B=\hat k\times E/c$ and the magnitude relation (c); step 5.2 records the scope (d). [step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, step 4.2, step 5.1, step 5.2, given] ∎

## Source notes

The cited treatments obtain the amplitude equations by substituting the
monochromatic ansatz, read the dispersion relation and transversality off them,
and state the relation between the magnetic and electric amplitudes; they also
stress that solutions of the wave equation need not satisfy the full Maxwell
system. The deduction above uses the plane-wave definition, the smooth-branch
postulate and the imported complex, cross-product and vector-calculus
interfaces; the vanishing fact of step 1.2 is the elementary statement that
the real parts of $W\exp(i\theta)$ for all phases determine $W$, and the
products of amplitudes are never decomposed as if they were additive.
