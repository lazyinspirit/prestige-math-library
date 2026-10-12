---
id: thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation
aliases: [nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]
kind: theorem
domain: mathematics
title: "Slater direct and exchange calculation"
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-composites-euclidean-l2-product-unitary, lem-nrqm-coulomb-three-dimensional-hardy-bound, cor-cauchy-schwarz-inequality-for-l-two, thm-plancherel, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-gaussian-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 1.4.3 pp. 11-13 (two-particle operators, direct and exchange terms)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Chapter 6 Sections 6.4-6.5 pp. 88-93 (two-particle systems and identical particles)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H$ be a complex
Hilbert space with completed tensor powers $H^{\otimes n}$ and symmetric
projections $P_\pm^{(n)}$ ([[lem-nrqm-composites-hilbert-tensor-construction]],
[[lem-nrqm-composites-permutation-sector-projections]]). Then:

(a) *Slater vectors*: for $n\ge2$ and orthonormal $u_1,\dots,u_n\in H$, the
Slater vector
$$S(u_1,\dots,u_n):=\frac1{\sqrt{n!}}\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\,u_{\sigma(1)}\otimes\cdots\otimes u_{\sigma(n)}$$
satisfies $\|S(u_1,\dots,u_n)\|=1$ and
$S(u_1,\dots,u_n)=\sqrt{n!}\,P_-^{(n)}(u_1\otimes\cdots\otimes u_n)$;

(b) *exclusion*: if $u_i=u_j$ for some $i\ne j$, then
$P_-^{(n)}(u_1\otimes\cdots\otimes u_n)=0$ ([[lem-nrqm-composites-permutation-sector-projections]] (d));

(c) *two orbitals, bounded pair interaction*: let $u,v\in L^2(\mathbb R^3;\mathbb C)$
be normalized and orthogonal, let $W:\mathbb R^3\to\mathbb R$ be measurable and
bounded with $W(-z)=W(z)$ for a.e. $z$, let
$\Theta:L^2(\mathbb R^3)\otimes L^2(\mathbb R^3)\to L^2(\mathbb R^6)$ be the
Euclidean product unitary
([[lem-nrqm-composites-euclidean-l2-product-unitary]]), put
$\varphi_\pm:=(u\otimes v\pm v\otimes u)/\sqrt2$ and
$$D:=\int_{\mathbb R^6}|u(x)|^2|v(y)|^2W(x-y)\,dx\,dy,\qquad X:=\int_{\mathbb R^6}\overline{u(x)}v(x)u(y)\overline{v(y)}\,W(x-y)\,dx\,dy,$$
integrals of absolutely integrable functions. Then $D,X\in\mathbb R$ and the
pair expectation of the multiplier $M_W$ in the two spatial states is
$$\bigl\langle M_W(\Theta\varphi_\pm),\Theta\varphi_\pm\bigr\rangle=D\pm X .$$

(d) *repulsive Coulomb exchange*: let $\kappa>0$, $W(z)=\kappa/|z|$, let
$u,v\in W^{1,2}(\mathbb R^3;\mathbb C)\cap L^2$ be normalized and orthogonal
([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).
The vectors $\Theta\varphi_\pm$ belong to $D(M_W)$: Hardy translated in the $y$ variable and Tonelli give $\iint|u(x)v(y)|^2/|x-y|^2\le4\|u\|_2^2\|\nabla v\|_2^2<\infty$, and the swapped product has the same property. Then the integrals $D$ and $X$ converge absolutely, $0\le D<\infty$,
$X\in\mathbb R$ with $X\ge0$; consequently
$D-X\le D+X$, i.e. the antisymmetric spatial pair state has the lower
expectation of the repulsive Coulomb pair interaction.

The exchange calculation is a statement about the indicated spatial vectors; it
does not deduce the spin-statistics assignment of any species, and combining the
spatial states with spin requires a separately stipulated symmetry rule. No
physical interpretation of $D$, $X$ or the states is asserted.

## Facts & Assumptions
**Given:** orthonormal vectors $u_1,\dots,u_n\in H$, normalized orthogonal $u,v\in L^2(\mathbb R^3;\mathbb C)$, a bounded measurable even $W$, the pair multiplier $M_W$ on $L^2(\mathbb R^6)$, the numbers $D,X$, and $\kappa>0$.

[F1] The permutation unitaries satisfy $U_\pi(v_1\otimes\cdots\otimes v_n)=v_{\pi^{-1}(1)}\otimes\cdots\otimes v_{\pi^{-1}(n)}$, $P_-^{(n)}=\frac1{n!}\sum_\pi\operatorname{sgn}(\pi)U_\pi$, and $P_-^{(n)}(u_1\otimes\cdots\otimes u_n)=0$ whenever two of the $u_i$ coincide; elementary tensors have norm $\|v_1\otimes\cdots\otimes v_n\|=\|v_1\|\cdots\|v_n\|$ ([[lem-nrqm-composites-permutation-sector-projections]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] Cauchy-Schwarz and the $L^2$ product structure: for $f,g\in L^2$, $\|fg\|_1\le\|f\|_2\|g\|_2$, and for bounded measurable $W$, $|W(x-y)|\le\|W\|_\infty$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F3] Hardy for $W^{1,2}(\mathbb R^3)$: $\|w/|\cdot|\|_2\le2\|\nabla w\|_2$ ([[lem-nrqm-coulomb-three-dimensional-hardy-bound]] (c)).

[F4] Gaussian integrals and transforms: $\int_{\mathbb R}e^{-s^2}ds=\sqrt\pi$; for $t>0$ the Euclidean Fourier transform of $G_t(x):=e^{-t|x|^2}$ is $\widehat{G_t}(\xi)=(\pi/t)^{3/2}e^{-\pi^2|\xi|^2/t}>0$; the identity $1/r=\pi^{-1/2}\int_0^\infty s^{-1/2}e^{-sr^2}ds$ for $r>0$ follows by the substitution $s=u^2/r^2$ ([[thm-gaussian-integral]], [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]], [[thm-plancherel]]).

[F5] Tonelli for $\sigma$-finite product spaces permits the interchange of the order of integration for nonnegative measurable integrands ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] The Euclidean product unitary $\Theta$ satisfies $\Theta(f\otimes g)(x,y)=f(x)g(y)$; because $M_W$ acts on $L^2(\mathbb R^6)$, the spatial pairing is $\langle M_W\Theta(f\otimes g),\Theta(f'\otimes g')\rangle=\int f(x)g(y)W(x-y)\overline{f'(x)g'(y)}\,dx\,dy$, in the inner product linear in the first argument ([[lem-nrqm-composites-euclidean-l2-product-unitary]]). Once Tonelli establishes absolute integrability, Fubini applies separately to real and imaginary parts ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).




## Proof

1.1 [Slater norm and identity] For $\sigma,\pi\in S_n$, the tensor inner product is $\langle u_{\sigma(1)}\otimes\cdots\otimes u_{\sigma(n)},u_{\pi(1)}\otimes\cdots\otimes u_{\pi(n)}\rangle=\prod_{i=1}^n\langle u_{\sigma(i)},u_{\pi(i)}\rangle$ by [F1], which equals $1$ if $\sigma=\pi$ and $0$ otherwise because the $u_i$ are orthonormal. Hence the $n!$ summands of $\sqrt{n!}S$ are mutually orthogonal of norm $1$, so $\|\sqrt{n!}S\|^2=n!$ and $\|S\|=1$. Moreover $P_-^{(n)}(u_1\otimes\cdots\otimes u_n)=\frac1{n!}\sum_\pi\operatorname{sgn}(\pi)u_{\pi(1)}\otimes\cdots\otimes u_{\pi(n)}=\frac1{\sqrt{n!}}S$, using $U_\pi(u_1\otimes\cdots\otimes u_n)=u_{\pi^{-1}(1)}\otimes\cdots\otimes u_{\pi^{-1}(n)}$ and reindexing $\pi\mapsto\pi^{-1}$. This proves (a). [F1, algebra]

1.2 [Exclusion] The assertion (b) is exactly [F1]'s vanishing statement for $P_-^{(n)}$ on a tensor with two equal factors; in particular for $n=2$, $P_-^{(2)}(u\otimes u)=0$. [F1]

1.3 [Two-orbital expansion] Assume the hypotheses of (c). Absolute integrability of the four products $|u(x)|^2|v(y)|^2|W(x-y)|$, $|\overline{u(x)}v(x)u(y)\overline{v(y)}W(x-y)|,\dots$ follows from [F2]: e.g. $\int\int|u(x)|^2|v(y)|^2|W|\le\|W\|_\infty\|u\|_2^2\|v\|_2^2=\|W\|_\infty$ and $\int\int|\overline uv|\,|u\overline v||W|\le\|W\|_\infty(\int|uv|)^2\le\|W\|_\infty\|u\|_2^2\|v\|_2^2$. Expanding the four terms in the tensor representation of [F6] gives $\langle M_W\Theta\varphi_\pm,\Theta\varphi_\pm\rangle=\frac12[D\pm2\operatorname{Re}X+D']$, where $D'=\int\int|v(x)|^2|u(y)|^2W(x-y)$; replacing $(x,y)$ by $(y,x)$ and using $W(x-y)=W(y-x)$ gives $D'=D$, so the expectation is $D\pm\operatorname{Re}X$. Since $W$ is real and even, exchanging the two integration variables in $X$ shows $X=\overline X$, so $X\in\mathbb R$ and $\operatorname{Re}X=X$; the same symmetry with real $W$ gives $D\in\mathbb R$. This proves (c). [F2, F6, algebra]

1.4 [Absolute convergence for the Coulomb kernel] Assume the hypotheses of (d). For the direct term, by [F3] applied in the $y$-variable for a.e. $x$ and Cauchy-Schwarz, $\int|v(y)|^2/|x-y|\,dy\le2\|v\|_2\|\nabla v\|_2<\infty$, so with Tonelli [F5] $\int\int\frac{|u(x)|^2|v(y)|^2}{|x-y|}= \int|u(x)|^2\Bigl(\int\frac{|v(y)|^2}{|x-y|}dy\Bigr)dx\le2\|v\|_2\|\nabla v\|_2\|u\|_2^2<\infty$. For the crossed term use $2|u(x)v(y)v(x)u(y)|\le|u(x)v(y)|^2+|v(x)u(y)|^2$ and the same bound to conclude $\iint\frac{|\overline{u(x)}v(x)u(y)\overline{v(y)}|}{|x-y|}<\infty$. Hence $D,X$ are absolutely convergent and $D=\kappa\int\int|u|^2|v|^2/|x-y|\ge0$. [F3, F5, algebra]

2.1 [Gaussian positivity with only $L^1$ data] Put $f=\overline uv\in L^1$ by [F2], with no assumption that $f\in L^2$. Step 1.4 gives $\iint|f(x)f(y)|/|x-y|<\infty$. The Gaussian representation [F4], Tonelli on absolute values [F5] and complex Fubini [F6] therefore give $X=\kappa\pi^{-1/2}\int_0^\infty s^{-1/2}I_sds$, where $I_s:=\iint f(x)\overline{f(y)}e^{-s|x-y|^2}dxdy$. For $s>0$ completion of the square and the three-dimensional Gaussian integral give $e^{-s|x-y|^2}=(4s/\pi)^{3/2}\int_{\mathbb R^3}e^{-2s|x-z|^2}e^{-2s|y-z|^2}dz$. The triple integral of its absolute integrand is $(\pi/(4s))^{3/2}\iint|f(x)f(y)|e^{-s|x-y|^2}dxdy\le(\pi/(4s))^{3/2}\|f\|_1^2$, finite by Tonelli. Complex Fubini then yields $I_s=(4s/\pi)^{3/2}\int_{\mathbb R^3}|\int f(x)e^{-2s|x-z|^2}dx|^2dz\ge0$. The outer integral is absolutely convergent by the first bound from step 1.4 and the Gaussian kernel identity, so $X\ge0$ and is real. Since $D\ge0$, the two absolutely convergent interaction expectations satisfy $D-X\le D+X$ under the full original $W^{1,2}$ hypotheses. [F2, F4, F5, F6, step 1.4, algebra]

3.1 [Conclusion and scope] Steps 1.1 and 1.2 prove (a) and (b), steps 1.3 and 1.4 prove (c), and step 2.1 proves (d). The final paragraph of the statement records that the spin-statistics assignment and any physical interpretation are separate assumptions: the symmetric ($+$) and antisymmetric ($-$) spatial vectors are mathematical vectors, and combining them with spin requires a stipulated symmetry rule. This completes the proof. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, algebra] ∎
