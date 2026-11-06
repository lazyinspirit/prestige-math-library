---
id: lem-stopped-floer-weighted-disk-and-matched-neck-parametrices
kind: lemma
title: Weighted disk Fredholm parametrices and matched real-boundary neck inverses
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-fredholm-operator-cokernel-and-index
  - lem-fredholm-splitting-and-parametrix
  - lem-neumann-series-and-small-perturbations-of-bounded-inverses
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - def-compact-linear-operator
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - thm-atkinson
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fredholm-operator-cokernel-and-index: mathematical-premise
  lem-fredholm-splitting-and-parametrix: mathematical-premise
  lem-neumann-series-and-small-perturbations-of-bounded-inverses: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  thm-atkinson: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lecture 10, strip-ended holomorphic-curve and Floer-category conventions; the weighted estimates below are proved here.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §1.5 and the finite wrapped-category setup; no transversality, Fredholm, neck, or gluing theorem is imported from it.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Choice. Let $\Sigma$ be a disk whose compactification is a smooth closed disk with its standard complex structure, with finitely many distinct boundary punctures and mutually disjoint holomorphic strip coordinates $(s,t)\in[0,\infty)\times[0,1]$ at the punctures. Let $E\to\Sigma$ be a smooth complex rank-$m$ bundle, $m\ge1$, and let $F$ be a smooth oriented totally real rank-$m$ subbundle on the unpunctured boundary. In each strip frame assume
$$F(s,0)=\mathbb R^m,\qquad F(s,1)=\prod_{j=1}^m e^{i\theta_j}\mathbb R,\qquad 0<\theta_j<\pi,$$
and assume the actual smooth real-linear Cauchy--Riemann operator is $D=\partial_s+i\partial_t+B(s,t)$, where $B$ tends uniformly to zero on each end. Use the actual weak $H^1$ completion of compactly supported smooth sections with boundary in $F$, denoted $X$, and the actual $L^2$ target $Y$. For $\gamma$ the minimum of $\{\theta_j,\pi-\theta_j\}$ over all coordinates of all ends (with $\gamma=+\infty$ if there are no punctures) and every $0\le\delta<\gamma$, use any smooth positive weight equal to $e^{\delta s}$ sufficiently far out every end and define $X_\delta,Y_\delta$ by multiplication by that weight. Then $D:X_\delta\to Y_\delta$ has bounded two-sided parametrices whose errors are operator-norm limits of finite-rank maps. It is Fredholm and has a bounded inverse from a Hilbert complement of its kernel to its range.

For $R>0$, on $[0,R]\times[0,1]$ with real boundary values at $t=0,1$, let $D_0=\partial_s+i\partial_t$. In the real Fourier expansion $u(s,t)=\sum_{n\in\mathbb Z}a_n(s)e^{-i\pi nt}$, impose
$$a_n(0)=0\ (n>0),\qquad a_n(R)=0\ (n<0),\qquad a_0(0)=0.$$
On the resulting weak-trace $H^1$ domain, $D_0$ is a bounded real isomorphism onto $L^2$. Its nonzero-mode inverse has $H^1$ norm bounded independently of $R$, while the full inverse has norm at most $C(1+R)$. Its zero mode is exactly $a_0(s)=\int_0^s f_0(r)\,dr$; if both zero-mode endpoint values are fixed to zero, the range condition is exactly $\int_0^R f_0(r)\,dr=0$, a closed real codimension-$m$ condition.

Finite smooth parameter columns and finitely many actual bounded node/evaluation equalities are retained as the block operator $(x,c)\mapsto(Dx+Pc,Ex)$, with each shared parameter appearing once. This is a finite-rank perturbation of $D\oplus0$, hence Fredholm; no surjectivity is inferred. No uniform zero-mode inverse as $R\to\infty$, nonlinear regularity, or geometric gluing is asserted.

## Statement references

[[def-axiom-of-choice]]

[[def-fredholm-operator-cokernel-and-index]]

[[lem-fredholm-splitting-and-parametrix]]

[[thm-fourier-basis-and-parseval-on-the-n-torus]]

[[thm-atkinson]]

## Facts & Assumptions

**Given:** The actual weighted disk operator and weak boundary domain in the Statement; the finite real-boundary neck domain and its three endpoint conditions; and bounded maps $P:\mathbb R^r\to Y$, $E:X\to\mathbb R^q$ for the named finite parameter and equality constraints. A point evaluation on a two-dimensional $H^1$ domain is not presumed bounded; it must be supplied as an actual bounded map on the chosen domain.

[A1] Adopt the Axiom of Choice. It implies the Countable Choice instances used for Hilbert projections, Fourier limits, and $L^2$ completions.

[F1] [[def-countable-choice]] and [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] give the stated real Hilbert completions and projections for closed subspaces.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], and [[thm-monotone-convergence-for-the-integral]] give complete Fourier expansions, Parseval, and the nonnegative mode-energy sums used below.

[F3] [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]] gives the dense target class used for the radial disk calculation.

[F4] [[def-compact-linear-operator]], [[lem-finite-rank-operators-are-compact]], and [[thm-norm-limit-of-compact-operators-is-compact]] identify the norm limits of finite-rank maps below as compact operators.

[F5] [[thm-atkinson]] says a bounded operator with bounded left and right parametrices modulo compact operators is Fredholm. [[lem-fredholm-splitting-and-parametrix]] then supplies the bounded range inverse and Hilbert kernel/cokernel splittings.

[F6] [[lem-neumann-series-and-small-perturbations-of-bounded-inverses]] gives the inverse for each transverse constant end mode after the exponential weight shifts its eigenvalue by $-\delta$.

## Proof

1.1 **Weighted conjugation and actual domains.** Multiplication by the specified smooth weight identifies $X_\delta,Y_\delta$ with $X,Y$. On a far end, conjugation changes the operator to $A_i=\partial_s+i\partial_t-\delta+B_i$; on the compact part it adds only a smooth zeroth-order term. The product rule holds first on the defining smooth sections and then on their completions because multiplication by the weight and its inverse is bounded on each compact chart. Thus $A:X\to Y$ is the actual bounded operator to analyze. Every finite collar cutoff below is bounded on $H^1$, preserves the actual totally real boundary condition, and extends by zero across a cut where it vanishes on a neighborhood. [given, A1, F1, construct, algebra]

1.2 **Transverse strip inverse.** For one complex coordinate on the whole strip, set $\lambda_n=\pi n-\theta$ and $\phi_n(t)=e^{-i\lambda_n t}$. The real inner product coefficients of a section satisfying the two product-plane conditions are real. Integration by parts in $t$ gives the coefficient of $i\partial_t$ equal to $\lambda_n$ times that coefficient; the boundary term has zero real part because the values lie on the prescribed real lines. Reflection at the two horizontal edges identifies these modes with the ordinary Fourier basis on a circle of length two, so [F2] gives completeness and Parseval. On each coefficient the operator is $a_n'+(\lambda_n-\delta)a_n$, with $|\lambda_n-\delta|\ge\gamma-\delta>0$. [F2, F6, given, construct, algebra]

1.3 **Finite neck modes and weak traces.** On the finite real-boundary strip the basis is $\psi_n=e^{-i\pi nt}$, $n\in\mathbb Z$. It is complete by reflecting a real-boundary function across $t=0,1$ to a length-two periodic function and applying [F2]. For smooth functions, integration by parts gives $ \|u\|_2^2=\sum_n\|a_n\|_2^2,\quad \|u_s\|_2^2=\sum_n\|a_n'\|_2^2,\quad \|u_t\|_2^2=\sum_n(\pi n)^2\|a_n\|_2^2. $ The identity extends to the actual weak $H^1$ completion by density. Each $a_n\in H^1([0,R];\mathbb R^m)$, so its endpoint evaluations are bounded and the specified modal endpoint conditions define a closed subspace. The equation is $a_n'+\pi n a_n=f_n$. [F1, F2, given, construct, algebra]

1.4 **Compact cap model.** Fill each boundary puncture with an auxiliary boundary arc and extend the bundle, totally real boundary planes, and zeroth-order coefficient smoothly over that arc, keeping the actual data fixed on a smaller collar of the old compact core. Choose a smooth connection on the complex bundle by patching local connections with a finite partition of unity; parallel transport along radial segments from one base fibre gives a global frame, since the linear ODE is solved by its uniformly convergent iterated-integral series. The real boundary planes admit a smooth periodic oriented real frame: transport an oriented orthonormal basis around the circle and close its endpoint frame by a path in $SO(m)$, constructed from finitely many plane rotations. Its columns are complex-linearly independent because the planes are totally real, so their matrix is a loop $C:S^1\to GL_m(\mathbb C)$. Gram--Schmidt deforms $C$ through invertible loops to a unitary loop $U$. Let $k$ be the determinant winding and choose a real lift $\psi$ of $\arg\det U$, so $\psi(2\pi)-\psi(0)=2\pi k$. If $m=1$, then $SU(1)=\{1\}$, and the zero-winding loop $U(t)e^{-ikt}$ has a periodic real argument; contracting that argument linearly fills the loop. For $m\ge2$, $U(t)\operatorname{diag}(e^{-i\psi(t)},1,\ldots,1)$ lies in $SU(m)$; it contracts as follows. Its first column is a loop in $S^{2m-1}$, which misses a point because a smooth one-dimensional image has zero $2m-1$ dimensional box volume when $2m-1>1$; stereographic projection contracts that column, and the skew-Hermitian trace-zero matrix $ K=v'v^*-vv'^*-(v^*v')vv^*-\frac{v^*v'}{m-1}(I-vv^*) $ lifts the contraction by the matrix ODE $G'=KG$, reducing to $SU(m-1)$, where $v'=\partial_rv$ along the contraction. Induction terminates at $SU(1)=\{1\}$. The remaining determinant phase has zero winding after its $e^{ikt}$ factor is removed, so its periodic real argument contracts linearly; the positive Gram--Schmidt factor contracts linearly to the identity. Thus $C(t)\operatorname{diag}(e^{-ikt},1,\ldots,1)$ extends over the disk, and a smooth gauge puts the boundary planes in the form $e^{ikt}\mathbb R\oplus\mathbb R^{m-1}$. [F1, A1, construct, algebra]

1.5 The model operator on the cap is $T=\partial_x+i\partial_y$ with those boundary planes. For a scalar line $e^{ikt}\mathbb R$, the boundary relation is $u(e^{it})=e^{2ikt}\overline{u(e^{it})}$. Write $u=\sum_nu_n(r)e^{int}$ and $Tu=f=\sum_jf_j(r)e^{ijt}$. On each annulus the equation is $u_n'-nu_n/r=f_{n+1}$. For smooth finite angular-mode forcing a particular solution is $ v_n(r)=-r^n\int_r^1s^{-n}f_{n+1}(s)\,ds\quad(n\ge0),\qquad v_n(r)=r^n\int_0^rs^{-n}f_{n+1}(s)\,ds\quad(n<0). $ It has $v_n(1)=0$ for $n\ge0$ and $v_n(1)=b_n:=\int_0^1s^{-n}f_{n+1}(s)\,ds$ for $n<0$. Integration by parts gives $ \int_0^1\bigl(|v_n'|^2+n^2|v_n|^2/r^2\bigr)r\,dr \le \int_0^1|f_{n+1}|^2r\,dr, $ and for $n<0$, also $|n||b_n|^2\le\int_0^1|f_{n+1}|^2r\,dr$. For $n<0$ the exact identity is the right side equal to the displayed left side plus $|n||b_n|^2$; for $n\ge0$, $v_n(1)=0$ makes it equality without the moment term. The moment estimate follows directly from $ |b_n|^2\le\left(\int_0^1|f_{n+1}(s)|^2s\,ds\right) \left(\int_0^1s^{-2n-1}\,ds\right) =\frac1{-2n}\int_0^1|f_{n+1}(s)|^2s\,ds. $ For $n\ne0$, the angular term controls the function $L^2$ norm since $n^2/r^2\ge1$. For $n=0$, $v_0(r)=-\int_r^1 f_1(s)\,ds$ and weighted Cauchy--Schwarz give $|v_0(r)|^2\le\log(1/r)\int_r^1|f_1(s)|^2s\,ds$; integrating in $r\,dr$ bounds its $L^2$ norm by the forcing norm. Parseval now gives a bounded $L^2\to H^1$ particular solution. [F1, F2, F3, construct, algebra]

2.1 For a real $b\in L^2(\mathbb R)$ and $\mu\ne0$, solve $a'+\mu a=b$ by $ a(s)=\begin{cases} \int_{-\infty}^{s}e^{-\mu(s-r)}b(r)\,dr,&\mu>0,\\ -\int_s^\infty e^{-\mu(s-r)}b(r)\,dr,&\mu<0. \end{cases} $ The absolute kernel has $L^1$ norm $|\mu|^{-1}$, so Cauchy--Schwarz followed by [F2] yields $\|a\|_2\le|\mu|^{-1}\|b\|_2$. Differentiation on smooth compactly supported $b$, then density [F3] and closedness of weak derivatives, gives $a'+\mu a=b$ and $\|a'\|_2\le2\|b\|_2$. A homogeneous difference is $ce^{-\mu s}$, which lies in $L^2(\mathbb R)$ only for $c=0$. Summing the modes by Parseval constructs the bounded whole-strip inverse for the weighted constant model; the $H^1$ bound follows from $|\lambda_n|\le|\lambda_n-\delta|+\delta$ and the same mode estimates. [F2, F3, step 1.2, construct, algebra]

2.2 For $n>0$, the unique solution with $a_n(0)=0$ is $\int_0^s e^{-\pi n(s-r)}f_n(r)\,dr$; for $n<0$, the unique solution with $a_n(R)=0$ is $-\int_s^R e^{-\pi n(s-r)}f_n(r)\,dr$; and $a_0(s)=\int_0^s f_0(r)\,dr$. For $\lambda=\pi n\ne0$, integration of $|a'+\lambda a|^2$ gives $ \|a'\|_2^2+\lambda^2\|a\|_2^2+\lambda(|a(R)|^2-|a(0)|^2)=\|f_n\|_2^2. $ The stipulated endpoint makes the boundary term nonnegative for either sign of $n$. Hence the sum of nonzero-mode $H^1$ norms is bounded independently of $R$. Cauchy--Schwarz gives $\|a_0\|_2\le R\|f_0\|_2/\sqrt2$ and $\|a_0'\|_2=\|f_0\|_2$. Finite modal sums therefore converge in $H^1$ for every $L^2$ forcing and solve the equation; uniqueness follows coefficientwise. This proves the isomorphism and $C(1+R)$ bound without adding forcing-edge conditions. Requiring $a_0(R)=0$ is equivalent to $\int_0^R f_0=0$; that map is onto $\mathbb R^m$, by constant forcings, so its kernel has codimension $m$. [F1, F2, step 1.3, construct, algebra]

2.3 Every homogeneous $H^1$ solution has coefficients $c_nr^n$; negative $n$ vanish by $L^2$ integrability, and the remaining holomorphic coefficients have finite $\sum_{n\ge0}(n+1)|c_n|^2$. The boundary relation pairs coefficient $n$ with $2k-n$. For each pair with one nonnegative and one negative index, choose the free $c_n$ to be the conjugate of the already determined negative boundary moment; the estimate on $|n||b_n|^2$ makes this correction bounded. The only remaining equations are the finitely many conditions $b_n=\overline{b_{2k-n}}$ for $2k<n<0$. Each $b_n$ is a continuous functional by Cauchy--Schwarz. Thus the range is the kernel of a finite-dimensional continuous obstruction map, is closed, and has finite codimension; the homogeneous kernel is finite dimensional because its allowed holomorphic degrees are $0,\ldots,2k$ when $k\ge0$, and empty when $k<0$. Smooth finite-mode forcings are dense by [F2,F3], and the displayed estimates extend the right inverse to the full closed range. This proves the scalar cap model Fredholm; taking its direct sum with $m-1$ untwisted scalar models proves the vector model Fredholm. [F1, F2, F3, step 1.5, construct, algebra]

3.1 The actual capped operator differs from that model by smooth zeroth-order multiplication. This is a norm limit of finite-rank maps $H^1\to L^2$: on a compact chart extend across a straight boundary by reflection, replace a function on a mesh of squares of side $h$ by its cell averages, and use the coordinate-segment fundamental theorem and Cauchy--Schwarz to obtain $\|u-\mathrm{av}_h u\|_2\le Ch\|u\|_{H^1}$. A finite atlas and partition give the same estimate on the cap. Hence multiplication by a bounded smooth coefficient is approximated by finite-rank maps. The compact model is Fredholm by the scalar calculation; [F5] gives a bounded generalized inverse and finite-rank errors. Adding the zeroth-order compactly approximable term preserves both Fredholmness and norm-limit-of-finite-rank parametrix errors. [F1, F4, F5, step 1.5, step 2.3, construct, algebra]

4.1 **Patch the actual disk and end models.** Choose smooth cutoffs $\chi_0,\chi_1,\ldots,\chi_a$ with $\sum\chi_i^2=1$, where $\chi_0$ is supported on the compact core and each $\chi_i$, $i>0$, is supported in one end and vanishes near its finite cut. Let $R_0$ be the capped Fredholm generalized inverse and $R_i$ the whole-strip inverse from step 2.1. Extend and restrict $\chi_i$-sections by zero on their auxiliary cap or full strip; the collar vanishing makes these maps bounded on the actual completed domains. Put $R=\chi_0R_0\chi_0+\sum_{i>0}\chi_iR_i\chi_i$. The product rule gives $AR=I+K_Y$ and $RA=I+K_X$. Each error is a sum of the finite-rank cap projection, cutoff commutators supported in compact transition regions, and end-coefficient terms $B_iR_i$ or $R_iB_i$. The mesh estimate of step 3.1 makes each compactly supported term a norm limit of finite-rank maps. For an end coefficient tending uniformly to zero, truncate at $s=T$; the discarded operator norm is at most $\sup_{s>T}|B_i(s,t)|$ times the fixed inverse norm, while the truncated term is compact by the same local mesh estimate. Therefore both $K_X,K_Y$ are norm limits of finite-rank maps. The identities hold on the defining smooth dense domains and extend by boundedness. [F4, F5, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 By [F4,F5], both parametrix errors are compact; [F5] applies to the actual conjugated weighted operator $A$. It is Fredholm and its kernel complement has a bounded range inverse. Conjugating back in step 1.1 gives the asserted two-sided parametrix and Fredholm operator on $X_\delta\to Y_\delta$. The lower spectral gap $\gamma-\delta>0$ is exactly what was used in step 1.2; no claim is made at its endpoint. [F4, F5, step 1.1, step 1.2, step 4.1, construct, algebra]

6.1 For the finite augmentation, $D\oplus0:X\oplus\mathbb R^r\to Y\oplus\mathbb R^q$ is Fredholm by the disk result and finite-dimensionality of the added summands. The difference between $(x,c)\mapsto(Dx+Pc,Ex)$ and $D\oplus0$ has finite-dimensional image, since $P\mathbb R^r$ and $\mathbb R^q$ are finite dimensional. Hence it is a finite-rank perturbation and remains Fredholm by [F4,F5]. The $r$ shared parameters occur once in the single factor $\mathbb R^r$; the cokernel or failure of surjectivity is retained. The finite-neck isomorphism and its exact zero-mode codimension-$m$ constraint were proved in steps 1.3 and 2.2. These results supply linear estimates and finite-dimensional bookkeeping only; they do not prove regularity, compactness, or gluing for nonlinear moduli spaces. [F4, F5, step 1.3, step 2.2, step 5.1, construct, algebra] ∎

## Remarks

The compact-cap proof is local to this operator statement. It does not cite the unaccepted mathematical-root draft Cauchy--Riemann suppliers as premises. A named finite evaluation must be a bounded map on its actual Sobolev domain; the usual point evaluation on a two-dimensional $H^1$ completion is not silently assumed.
