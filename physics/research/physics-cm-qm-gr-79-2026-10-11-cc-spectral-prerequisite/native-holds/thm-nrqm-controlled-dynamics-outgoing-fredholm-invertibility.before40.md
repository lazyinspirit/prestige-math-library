---
id: thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility
aliases: [nrqm-controlled-dynamics-outgoing-fredholm-invertibility]
kind: theorem
domain: mathematics
title: "Outgoing Fredholm invertibility"
status: draft
origin: pipeline
dependency_level: 8
deps: [thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues, thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp, thm-fredholm-alternative-for-identity-minus-compact, thm-interior-h-two-regularity-for-divergence-form-equations, thm-l-two-kernels-give-hilbert-schmidt-operators, thm-hilbert-schmidt-operators-are-compact, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-sobolev-space-wkp-and-its-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues: mathematical-premise
  thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp: mathematical-premise
  thm-fredholm-alternative-for-identity-minus-compact: mathematical-premise
  thm-interior-h-two-regularity-for-divergence-form-equations: mathematical-premise
  thm-l-two-kernels-give-hilbert-schmidt-operators: mathematical-premise
  thm-hilbert-schmidt-operators-are-compact: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Jerison and C. E. Kenig, Unique continuation and absence of positive eigenvalues for Schrodinger operators, Annals of Mathematics 121 (1985) 463-494 (invertibility of the outgoing integral equation, absence of positive eigenvalues)"
      url: "https://doi.org/10.2307/1971319"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.2 pp. 136-139 (compact operators) and Section 6.4 pp. 145-149 (Fredholm alternatives for compact perturbations)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real with $\operatorname{supp}V\subseteq B_R$,
let $k>0$, and on $L^2(B_R)$ define
$$(K_kf)(x):=\int_{B_R}\frac{e^{ik|x-y|}V(y)f(y)}{4\pi|x-y|}\,dy.$$
Then $K_k$ is compact on $L^2(B_R)$ ([[def-compact-linear-operator]]) and
$I+K_k$ is boundedly invertible: there is $c>0$ with
$\|(I+K_k)f\|_2\ge c\|f\|_2$ for all $f\in L^2(B_R)$.

## Facts & Assumptions

**Given:** the real bounded compactly supported potential $V$, the wave number $k>0$, the operator $K_k$.

[F1] The kernel $k(x,y):=\frac{e^{ik|x-y|}V(y)}{4\pi|x-y|}$ is a bounded function on $B_R\times B_R$ except for the integrable $1/|x-y|$ singularity, and $\int_{B_R}\int_{B_R}|k(x,y)|^2dx\,dy<\infty$ because $|x-y|^{-2}$ is locally integrable in dimension $3$ and $B_R$ is bounded; hence $K_k$ is Hilbert–Schmidt and compact ([[thm-l-two-kernels-give-hilbert-schmidt-operators]], [[thm-hilbert-schmidt-operators-are-compact]], [[def-compact-linear-operator]]).

[F2] The outgoing Green function $G_k(x)=\frac{e^{ik|x|}}{4\pi|x|}$ satisfies $(-\Delta-k^2)G_k=\delta_0$ distributionally, and convolution with $G_k$ against $L^1_{\mathrm{comp}}$ data gives $H^1_{\mathrm{loc}}$ functions whose distributional equation has $L^2_{\mathrm{loc}}$ right side; the interior $H^2$ regularity theorem then gives $H^2_{\mathrm{loc}}$ ([[thm-interior-h-two-regularity-for-divergence-form-equations]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] If $(I+K_k)f=0$ then $f=-K_kf$ on $B_R$; extending by $\psi:=-K_kf$ to all of $\mathbb R^3$, one has $\psi=f$ on $B_R$ and $(-\Delta+V-k^2)\psi=0$ on $\mathbb R^3$ in the distributional sense (since $(-\Delta-k^2)K_kf=Vf$ and $f=\psi$ on $\operatorname{supp}V$), and $\psi$ has the far-field expansion $\psi(r\Omega)=e^{ikr}A(\Omega)/r+O(r^{-2})$, uniformly in $\Omega$, with a smooth amplitude $A$ (Taylor expansion of $|x-y|$, $Vf\in L^1(B_R)$); the flux computation (imaginary part of the weak Green identity over $B_\rho$ against radial cutoffs, with $V$ real) gives $A=0$. Then $\psi=O(r^{-2})$ is in $L^2(\mathbb R^3)$, and elliptic regularity applied to $(-\Delta+V-k^2)\psi=0$ with $V$ bounded and compactly supported gives $\psi\in H^2(\mathbb R^3)$ ([[thm-interior-h-two-regularity-for-divergence-form-equations]], [[def-sobolev-space-wkp-and-its-norm]], [[thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues]], [[thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp]]).

[F4] Fredholm alternative: for a compact operator $K$ on a Banach space, injectivity of $I+K$ is equivalent to its surjectivity and to the existence of a bounded inverse ([[thm-fredholm-alternative-for-identity-minus-compact]]).

## Proof

1.1 [Compactness] This is [F1]: the kernel of $K_k$ is square-integrable, so $K_k$ is Hilbert–Schmidt and hence compact. [F1]

1.2 [Injectivity] Suppose $(I+K_k)f=0$. By [F3] the function $\psi:=-K_kf$ extends to a distributional solution of $(-\Delta+V-k^2)\psi=0$ on $\mathbb R^3$ with $\psi=f$ on $B_R$; the flux computation gives the vanishing far-field amplitude $A=0$, whence $\psi\in L^2(\mathbb R^3)$ and, by the elliptic regularity recalled in [F2], $\psi\in H^2(\mathbb R^3)$. The absence-of-positive-eigenvalues theorem [[thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues]] then forces $\psi=0$. Hence $f=\psi|_{B_R}=0$, so $I+K_k$ is injective. [F2, F3, algebra]

2.1 [Invertibility] By steps 1.1 and 1.2 the operator $I+K_k$ is an injective compact perturbation of the identity; the Fredholm alternative [F4] makes it surjective with bounded inverse, which is the claim. [step 1.1, step 1.2, F4] ∎
