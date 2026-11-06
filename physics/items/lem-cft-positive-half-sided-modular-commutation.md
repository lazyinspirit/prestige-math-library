---
id: lem-cft-positive-half-sided-modular-commutation
kind: lemma
title: Positive half-sided groups obey modular scaling and reflection
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
deps:
  - lem-qsmx-tomita-operator-involution
  - def-qsmx-standard-modular-data
  - def-axiom-of-choice
dependency_roles:
  lem-qsmx-tomita-operator-involution: mathematical-premise
  def-qsmx-standard-modular-data: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Borchers half-sided modular commutation, local cutoff-strip proof supplied here"
      url: https://arxiv.org/pdf/1503.01260
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/lem-cft-positive-half-sided-modular-commutation.md
dependency_level: 0
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Work under the Axiom of Choice, as in the existing modular polar-calculus supplier. Let $H$ be a complex Hilbert space with inner product linear in its first argument. Let $M\subseteq\mathcal B(H)$ be a concrete von Neumann algebra, and let the unit vector $\Omega$ be cyclic and separating for $M$. Let
$$S=\overline{\{x\Omega\mapsto x^*\Omega:x\in M\}}=J\Delta^{1/2}.$$
Let $T(a)=e^{iaP}$, $a\in\mathbb R$, be a strongly continuous unitary group with self-adjoint generator $P\ge0$. Suppose
$$T(a)\Omega=\Omega\quad(a\in\mathbb R),\qquad T(a)MT(a)^*\subseteq M\quad(a\ge0).$$
Then for all real $t,a$,
$$\Delta^{it}T(a)\Delta^{-it}=T(e^{-2\pi t}a),\qquad JT(a)J=T(-a).$$
No irreducibility, separability, spectral gap, strict positivity of $P$, uniqueness of the invariant vector, or modular covariance of a spacetime net is needed.

## Statement references

[[lem-qsmx-tomita-operator-involution]]

[[def-qsmx-standard-modular-data]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[F1] The linked suppliers have their exact declared mathematical scope; the argument below reconstructs the additional claim locally. [[lem-qsmx-tomita-operator-involution]], [[def-qsmx-standard-modular-data]], [[def-axiom-of-choice]].

## Proof

**Given:** Exactly the data and hypotheses in the Statement. All Hilbert inner products are linear in the first argument.

1.1 The data are: Exactly the data, positivity, invariant-vector and half-sided inclusion hypotheses above, and the stated proved modular polar interface. [given, F1, algebra]

2.1 Put $D=\Delta^{1/2}$. For $a\ge0$ and $x\in M$, the vector $T(a)x\Omega=(T(a)xT(-a))\Omega$ belongs to $M\Omega$, and $S_0T(a)x\Omega=T(a)x^*\Omega=T(a)S_0x\Omega.$ For $\xi\in\operatorname{Dom}S$, approximate $\xi$ in the graph of $S$ by core vectors $x_n\Omega$. The boundedness of $T(a)$ and closedness of $S$ imply $T(a)\xi\in\operatorname{Dom}S$ and $ST(a)\xi=T(a)S\xi$. Multiplying this equality on the left by $J$ gives, with $V_a=JT(a)J$, $DT(a)\xi=V_aD\xi\qquad(\xi\in\operatorname{Dom}D).$ Thus $DT(a)\supseteq V_aD$. This is a domain statement, not a formal equality obtained by moving unbounded powers through bounded operators. [given, F1, step 1.1, algebra]

3.1 Taking adjoints of the last inclusion is legitimate for densely defined operators. Since $T(a)$ and $V_a$ are bounded unitaries and $D$ is self-adjoint, it gives $T(-a)D\subseteq DV_a^*.$ Consequently, for every $\xi\in\operatorname{Dom}D$, one has $V_a^*\xi\in\operatorname{Dom}D$ and $DV_a^*\xi=T(-a)D\xi$. Injectivity of $D$ then gives the exact identity on this dense domain, $D^{-1}T(-a)D\xi=V_a^*\xi=JT(-a)J\xi.$ In particular the operator on the left has bounded unitary closure $JT(-a)J$. The sign $-a$ in this adjoint identity is essential. [given, F1, step 2.1, algebra]

4.1 Let $A=\log\Delta$ and $E_R=1_{[-R,R]}(A)$ for $R>0$. These are symmetric spectral cutoffs, and $E_R\to1$ strongly. Since $JAJ=-A$, $JE_RJ=E_R$. Positive energy gives a contractive holomorphic extension $T(w)=e^{iwP}\qquad(\operatorname{Im}w>0),\qquad\|T(w)\|\le1.$ Indeed $|e^{iwp}|=e^{-p\operatorname{Im}w}\le1$ on the spectral support $p\ge0$; the derivative multipliers $p^ne^{-p\operatorname{Im}w}$ are bounded locally away from the real axis, so the extension is norm-holomorphic there. The spectral dominated-convergence theorem gives strong continuity on the closed upper half-plane, including its real boundary. Fix $a>0$ and define on the strip $0<\operatorname{Im}z<1/2$, $F_R(z)=E_R\Delta^{iz}T(ae^{2\pi z})\Delta^{-iz}E_R.$ The exponential $ae^{2\pi z}$ belongs to the upper half-plane throughout this strip. The cutoff modular powers are bounded norm-entire functions, so $F_R$ is norm-holomorphic inside, strongly continuous at the horizontal boundaries, and, for $z=t+iy$, $\|F_R(t+iy)\|\le e^{2Ry}\le e^R\qquad(0\le y\le1/2).$ This raw bound is uniform in $t$; it is not claimed to be uniform in $R$. [given, F1, step 3.1, algebra]

5.1 On the lower boundary $\|F_R(t)\|\le1$ because its middle conjugate is unitary. On the upper boundary put $b=ae^{2\pi t}>0$. The adjoint-domain identity of step 3.1, applied on the cutoff domain, gives $F_R(t+i/2)=E_R\Delta^{it}\bigl(\Delta^{-1/2}T(-b)\Delta^{1/2}\bigr)\Delta^{-it}E_R=E_R\Delta^{it}JT(-b)J\Delta^{-it}E_R.$ The right side is a compression of a unitary, so it also has norm at most one. Moreover, using $JE_RJ=E_R$ and $J\Delta^{it}J=\Delta^{it}$ shows the exact boundary matching $F_R(t+i/2)=\vartheta(F_R(t)),\qquad \vartheta(B)=JB^*J.$ The map $\vartheta$ is a COMPLEX-LINEAR norm-isometric involution, even though it reverses products: $(\lambda B)^*=\bar\lambda B^*$ and antiunitarity of $J$ conjugates $\bar\lambda$ back to $\lambda$. [given, F1, step 4.1, algebra]

6.1 For fixed $R$ and unit vectors $\xi,\eta$, the scalar function $f(z)=\langle F_R(z)\xi,\eta\rangle$ is holomorphic, continuous at both boundaries, bounded by $e^R$ in the whole strip and bounded by one on its horizontal boundaries. Here is the bounded-strip maximum argument with no uncontrolled limit: multiply $f(z)$ by $e^{-\epsilon z^2}$ and apply the maximum principle on rectangles $[-L,L]\times[0,1/2]$. On the horizontal sides the modulus is at most $e^{\epsilon/4}$; on the vertical sides the raw bound is at most $e^Re^{-\epsilon L^2+\epsilon/4}$, tending to zero as $L\to\infty$. Thus $|f(z)e^{-\epsilon z^2}|\le e^{\epsilon/4}$, and letting $\epsilon\downarrow0$ gives $|f(z)|\le1$. Therefore $\|F_R(z)\|\le1$ throughout the closed strip, now INDEPENDENT OF $R$. [given, F1, step 5.1, algebra]

7.1 Let $H_{\mathrm{cut}}=\bigcup_R E_RH$, a dense linear subspace. For $\xi,\eta\in H_{\mathrm{cut}}$, once $R$ contains both spectral supports, the scalar matrix element $\langle F_R(z)\xi,\eta\rangle$ is EXACTLY independent of further enlargement of $R$: the external projections can be removed against these vectors and commute with the modular powers. In the linear-first convention its value can equivalently be written $\left\langle T(ae^{2\pi z})\Delta^{-iz}\xi,\Delta^{-i\bar z}\eta\right\rangle.$ Step 6.1 bounds this sesquilinear form by $\|\xi\|\|\eta\|$. It extends uniquely to a bounded operator $F(z)$ on all of $H$, with $\|F(z)\|\le1$. Matrix elements on cutoff vectors are holomorphic inside and continuous at the boundary; approximating arbitrary vectors by cutoff vectors, using the same uniform bound, proves weak holomorphy and weak boundary continuity for every matrix element. On the lower boundary, $F(t)=\Delta^{it}T(ae^{2\pi t})\Delta^{-it}.$ Since $\vartheta$ is weak-operator continuous, the upper boundary satisfies $F(t+i/2)=\vartheta(F(t)).$ For clarity, weak continuity and complex linearity follow directly from $\langle\vartheta(B)\xi,\eta\rangle=\langle B J\eta,J\xi\rangle.$ Thus no weakly convergent subsequence, Banach limit, or interchange of unbounded operators is used in constructing $F$. [given, F1, step 6.1, algebra]

8.1 Repeat this strip over the entire plane by setting, for each integer $k$ and $0\le\operatorname{Im}z\le1/2$, $\widetilde F(z+ki/2)=\vartheta^k(F(z)).$ Because $\vartheta$ is complex-linear, it preserves weak holomorphy. Since $\vartheta^2=1$ and the exact upper/lower boundary relation holds, neighboring definitions agree pointwise at each horizontal seam. All matrix elements of $\widetilde F$ are therefore continuous on the plane and holomorphic away from the seams, uniformly bounded by $\|\xi\|\|\eta\|$. They are holomorphic across every seam by Morera's theorem: split any triangle meeting a seam into its upper and lower pieces, displace the common edge by a small distance inside the strips, apply Cauchy's theorem separately, and pass to the limit using continuity; the two edge integrals cancel. A compact triangle meets only finitely many seams, so the same argument covers every triangle. Thus each matrix element is a bounded entire function, and Liouville's theorem makes it constant. It follows that the operator $\widetilde F$ itself is constant. Its value at $z=0$ is $T(a)$. [given, F1, step 7.1, algebra]

9.1 For real $t$, constancy gives $\Delta^{it}T(ae^{2\pi t})\Delta^{-it}=T(a).$ Replace $a$ by $be^{-2\pi t}>0$ to obtain $\Delta^{it}T(b)\Delta^{-it}=T(e^{-2\pi t}b)\qquad(b>0).$ The top boundary and the same constancy give $\vartheta(T(a))=T(a)$, equivalently $JT(a)J=T(-a)$. Taking adjoints extends both identities from positive parameters to negative ones; at zero both are immediate. Hence the asserted two commutation relations hold for ALL real $a,t$. [given, F1, step 8.1, algebra] ∎

