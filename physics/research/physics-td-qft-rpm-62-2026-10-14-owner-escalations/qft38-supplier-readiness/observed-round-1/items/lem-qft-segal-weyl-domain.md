---
id: lem-qft-segal-weyl-domain
kind: lemma
title: Self-adjoint Segal fields and explicit Weyl unitaries
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-complex-exponential
  - lem-cauchy-product-of-absolutely-convergent-complex-series
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-exponential-addition-and-real-extension
  - thm-dominated-convergence
  - thm-fatou-lemma
  - def-measure-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-permutation-sector-projections
  - lem-qft-fock-ccr-car
  - lem-qft-fock-one-mode-splitting
  - lem-qft-hermite-graph-core-for-position
  - thm-nrqm-oscillator-hermite-completeness
  - thm-nrqm-oscillator-hermite-recurrence
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-cauchy-product-of-absolutely-convergent-complex-series: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  def-measure-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  lem-qft-fock-one-mode-splitting: mathematical-premise
  lem-qft-hermite-graph-core-for-position: mathematical-premise
  thm-nrqm-oscillator-hermite-completeness: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jan Dereziński, Mathematical Introduction to Quantum Field Theory, §§5.4–5.9 and 7.4, 7.7
      url: https://www.fuw.edu.pl/~derezins/qft-lectures.pdf
      locator: Full 136-page author-hosted notes; Fock fields and exponential law, PDF pp. 35–40; Weyl relations and Fock representation, pp. 57–59.
    - title: David Tong, Quantum Field Theory, §§2.2–2.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted notes; printed pp. 23–25 and 29–30; mode formula and Fock-space discussion, with formal-domain caveat.
    - title: Gerald Teschl, Mathematical Methods in Quantum Mechanics, §8.3
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
      locator: Complete 317-page book; printed pp. 178–179, oscillator Hermite basis and ladder recurrence.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. Let $H$ be a separable
complex Hilbert space with the second-variable-linear convention of
[[def-qft-fock-and-test-spaces]], and let $\mathcal F_s(H)$ and
$\mathcal D_{\rm fin}$ be its bosonic Fock space and finite-particle domain.
For $h\in H$ define on $\mathcal D_{\rm fin}$ the Segal field
$$\phi_0(h):=2^{-1/2}\bigl(a^\dagger(h)+a(h)\bigr).$$
For $h\ne0$, this symmetric operator is essentially self-adjoint; write
$\Phi(h)=\overline{\phi_0(h)}$. If $r=\|h\|$, $e=h/r$, $K=e^\perp$,
$G=\mathcal F_s(K)$, choose a countable orthonormal basis $(u_j)$ of $G$
whose vectors are finite-particle, and use the one-mode splitting of
[[lem-qft-fock-one-mode-splitting]] followed by the Hermite unitary
$|n\rangle\mapsto g_n$ into $L^2(\mathbb R,dx;\mathbb C)$ with pairing
$\langle f,g\rangle_2=\int\overline f g$ to write a vector as
$(f_j)_{j\in J}\in\ell^2(J;L^2(\mathbb R,dx;\mathbb C))$. Then the exact domain and
action are
$$D(\Phi(h))=\left\{(f_j):\sum_{j\in J}\int_{\mathbb R}(1+r^2x^2)|f_j(x)|^2\,dx<\infty\right\},\qquad (\Phi(h)f)_j(x)=rx f_j(x).$$
For $h=0$, $\phi_0(0)$ closes to the zero operator on all of $\mathcal F_s(H)$.

Define $\epsilon(z)=\bigoplus_{n\ge0}z^{\otimes n}/\sqrt{n!}$ for $z\in H$.
There are unitaries $W(h)$ determined on these total exponential vectors by
$$W(h)\epsilon(z)=\exp\!\left(-\frac{\|h\|^2}{4} +\frac{i}{\sqrt2}\langle h,z\rangle_2\right) \epsilon\!\left(z+\frac{i h}{\sqrt2}\right).$$
They obey
$$W(h)W(k)=\exp\!\left(-\frac{i}{2}\operatorname{Im}\langle h,k\rangle_2\right)W(h+k),\qquad \langle\Omega,W(h)\Omega\rangle_2=e^{-\|h\|^2/4},$$
and $h\mapsto W(h)$ is strongly continuous. For every $h$, the one-parameter
group $t\mapsto W(th)$ has norm derivative at zero exactly on
$D(\Phi(h))$, with derivative $i\Phi(h)$ (for $h=0$ this is the zero
generator). Thus the displayed bounded Weyl operators have precisely the
closed Segal fields as their generators; no point-field or measurement claim
is included.

## Facts & Assumptions

**Given:** Countable Choice; a separable complex Hilbert space $H$; its
bosonic Fock sectors, vacuum, finite-particle domain and creation/annihilation
maps; and the Hermite functions $g_n$.

[A1] Countable Choice is the choice assumption of the Fock tensor and sector
constructions. [[def-countable-choice]]

[F1] On finite sectors, $a(h)$ is conjugate-linear in $h$, $a^\dagger(h)$ is
linear, and they are mutual adjoints between adjacent sectors; their sector
norms are at most $\sqrt n\|h\|$ and $\sqrt{n+1}\|h\|$.
[[lem-qft-fock-ccr-car]]

[F2] For a unit vector $e$, $H=\mathbb Ce\oplus e^\perp$ and the map
$J(|k\rangle\otimes\psi_m)=\sqrt{\binom{k+m}{k}}
P_{s,k+m}(e^{\otimes k}\otimes\psi_m)$ extends to a unitary from
$\mathcal F_s(\mathbb Ce)\widehat\otimes\mathcal F_s(e^\perp)$ to
$\mathcal F_s(H)$; $a(e)$ and $a^\dagger(e)$ become the one-mode lowering and
raising maps. [[lem-qft-fock-one-mode-splitting]]

[F3] The real Hermite functions $g_n=H_ng_0/\sqrt{2^nn!}$ form an
orthonormal basis of Lebesgue $L^2(\mathbb R,dx;\mathbb C)$, with $H_0=1$, $H_1(x)=2x$,
$H_{n+1}=2xH_n-2nH_{n-1}$, and
$xg_n=(\sqrt n\,g_{n-1}+\sqrt{n+1}\,g_{n+1})/\sqrt2$.
[[thm-nrqm-oscillator-hermite-completeness]]
[[thm-nrqm-oscillator-hermite-recurrence]]

[F4] Multiplication $Qf(x)=xf(x)$ is self-adjoint, and the finite Hermite
span is a core in its graph norm. The graph, adjoint, and core terms have the
definitions in [[def-unbounded-linear-operator-domain-and-graph]],
[[def-adjoint-of-a-densely-defined-unbounded-operator]], and
[[def-densely-defined-closed-and-closable-operator]]. The cited core result
uses first-variable-linear $L^2$; complex conjugation transfers it to the
second-variable-linear pairing used here, because $Q$ and every $g_n$ are
real. [[lem-qft-hermite-graph-core-for-position]]

[F5] For a densely defined operator $T$, $y\in D(T^*)$ exactly when there is
$w$ with $\langle Tx,y\rangle_2=\langle x,w\rangle_2$ for all $x\in D(T)$;
the real multiplication operator is symmetric when its multiplier is real.
This is the adjoint convention of
[[def-adjoint-of-a-densely-defined-unbounded-operator]] after reversing the
pairing, together with [[def-symmetric-self-adjoint-and-essentially-self-adjoint]].

[F6] The complex exponential has its everywhere-convergent power series; its
addition law and the Cauchy product for absolutely convergent series justify
the expansion of $e^{2xs-s^2}$.
[[def-complex-exponential]]
[[lem-complex-exponential-series-converges-everywhere]]
[[lem-cauchy-product-of-absolutely-convergent-complex-series]]
[[thm-complex-exponential-addition-and-real-extension]]

[F7] Dominated convergence and Fatou's lemma apply to the Lebesgue measure;
for an $L^2$ function $u$, the estimate
$\mu\{|u|>\delta\}\le\delta^{-2}\|u\|_2^2$ follows by integrating
$|u|^2\ge\delta^2$ on that set. Countable subadditivity then implies that an
$L^2$-convergent sequence has an almost-everywhere convergent subsequence by
choosing squared errors summable after thresholds tending to zero.
[[def-measure-space]]
[[def-l-p-space-as-a-quotient-by-null-functions]]
[[thm-dominated-convergence]]
[[thm-fatou-lemma]]

[F8] The span of elementary tensors is dense in a Hilbert tensor completion,
and a complete orthonormal family in each factor gives a complete product
orthonormal family. [[lem-nrqm-composites-hilbert-tensor-construction]]

## Proof

1.1 Put $K=e^\perp$ and $G=\mathcal F_s(K)$ for a unit vector $e$. Since $H$ is separable, its continuous orthogonal projection $v\mapsto v-\langle e,v\rangle_2e$ sends a countable dense subset of $H$ to a countable dense subset of $K$. Finite elementary tensors from that subset have dense span in each tensor power by [F8]; applying the bounded symmetrizer gives a countable dense subset of each $K_s^{(m)}$. Rational complex finite sums over the countably many sectors give a countable dense subset of $G$ consisting of finite-particle vectors. Gram–Schmidt, omitting zero residuals, therefore gives a finite or countable orthonormal basis $(u_j)_{j\in J}$ of $G$ whose vectors are all finite-particle. [A1, F2, F8, construct]

1.2 Map the one-mode basis $|n\rangle=e^{\otimes n}$ to $g_n$. The map $V:\mathcal F_s(\mathbb Ce)\to L^2_2(\mathbb R)$ is a linear unitary: the two displayed families are complete orthonormal families, and both pairings are second-variable-linear. Here $L^2_2$ has pairing $\langle f,g\rangle_2=\int\overline f g$; the core and self-adjointness of $Qf=xf$ transfer from [F4] by complex conjugation. The recurrence [F3] shows that $V\,2^{-1/2}(a^\dagger(e)+a(e))V^{-1}$ equals $Q$ on the finite Hermite span. Together with $J$ [F2], the full field for $h=re$ acts in $L^2_2(\mathbb R)\widehat\otimes G$ as multiplication by $rx$ on the dense span of $g_n\otimes u_j$. [F2, F3, F4, F8, construct]

1.3 Under the product-basis unitary of [F8], identify $L^2_2(\mathbb R)\widehat\otimes G$ with $\ell^2(J;L^2_2(\mathbb R))$. Define $M_r(f_j)=(rx f_j)$ on $D(M_r)=\{(f_j):\sum_j\int r^2x^2|f_j(x)|^2dx<\infty\}$. Its domain is dense because finite coordinates supported in $[-m,m]$ are dense. It is symmetric since $rx$ is real. If $g\in D(M_r^*)$ and $k=M_r^*g$, test the adjoint identity in coordinate $j$ against $f_j=(rxg_j-k_j)\mathbf1_{[-m,m]}$ and set all other coordinates to zero. This vector lies in $D(M_r)$ because $rx$ is bounded on $[-m,m]$; the identity then gives $0=\int_{-m}^m|rxg_j-k_j|^2dx$. Letting $m\to\infty$ yields $rxg_j=k_j$ almost everywhere for each $j$, so $\sum_j\int r^2x^2|g_j|^2=\sum_j\|k_j\|^2<\infty$ and $g\in D(M_r)$. Conversely, for $g\in D(M_r)$, reality of $rx$ gives $\langle M_rf,g\rangle_2=\langle f,M_rg\rangle_2$ for every $f\in D(M_r)$, hence $M_r^*g=M_rg$. Thus $M_r$ is self-adjoint with the displayed domain. [F5, F8, given, algebra]

1.4 The series defining $\epsilon(z)$ converges in Fock norm because $\|\epsilon(z)\|^2=\sum_{n\ge0}\|z\|^{2n}/n!=e^{\|z\|^2}$ [F6]. Its inner products are $\langle\epsilon(z),\epsilon(w)\rangle_2=e^{\langle z,w\rangle_2}$. These vectors are total: if $\Psi=(\Psi_n)$ is orthogonal to all of them, then for every $z$ and scalar $t$ the entire power series $\langle\Psi,\epsilon(tz)\rangle_2$ vanishes, so each coefficient $\langle\Psi_n,z^{\otimes n}\rangle_2$ is zero. For fixed $n$, the coefficient of $t_1\cdots t_n$ in $\langle\Psi_n,(t_1z_1+\cdots+t_nz_n)^{\otimes n}\rangle_2$ is $n!\langle\Psi_n,P_{s,n}(z_1\otimes\cdots\otimes z_n)\rangle_2$; it too vanishes. The symmetrized elementary tensors have dense span in $H_s^{(n)}$ by [F8], hence every $\Psi_n=0$ and $\Psi=0$. [F6, F8, given, algebra]

2.1 The finite Hermite span is graph dense in $D(Q)$ by [F4]. The vectors $u_j$ from step 1.1 are finite-particle, so every $g_n\otimes u_j$ belongs to the image of $\mathcal D_{\rm fin}$ under $J^{-1}$ and $V\otimes I$. For any $(f_j)\in D(M_r)$, truncating the countable coordinate sum converges in the graph norm of $M_r$ because both $\sum_j\|f_j\|^2$ and $\sum_j\|rx f_j\|^2$ converge. For each retained coordinate, if $r>0$ then $f_j\in D(Q)$ and we approximate it in the graph norm of $Q$ by finite Hermite sums using [F4]; multiplying the graph component by the fixed scalar $r$ preserves convergence. If $r=0$, finite Hermite sums are dense in $L^2$ by [F3], and the operator graph norm is just the $L^2$ norm. Hence the image of $\mathcal D_{\rm fin}$ is graph dense in $D(M_r)$. Step 1.2 identifies the restriction with $\phi_0(e)$, and scaling gives the same for $h=re$. Therefore $\phi_0(h)$ is essentially self-adjoint and its closure is the self-adjoint $M_r$ transported through these unitaries, with exactly the domain stated. When $h=0$, it is the zero operator on the dense $\mathcal D_{\rm fin}$ and its closure is zero on all Fock space. [F1, F2, F3, F4, step 1.1, step 1.2, step 1.3, given]

2.2 Write $\lambda_h(z)=\exp(-\|h\|^2/4+i\langle h,z\rangle_2/\sqrt2)$. Using the exponential-vector inner product from step 1.4 and $\langle z+ih/\sqrt2,w+ih/\sqrt2\rangle_2$ $=\langle z,w\rangle_2+i\langle z,h\rangle_2/\sqrt2 -i\langle h,w\rangle_2/\sqrt2+\|h\|^2/2$, direct cancellation gives $\langle\lambda_h(z)\epsilon(z+ih/\sqrt2), \lambda_h(w)\epsilon(w+ih/\sqrt2)\rangle_2=e^{\langle z,w\rangle_2}$. Thus the formula in the Statement preserves inner products on the span of total exponential vectors and extends uniquely to an isometry $W(h)$. Substituting the formula twice, using $\langle h,ik/\sqrt2\rangle_2=i\langle h,k\rangle_2/\sqrt2$, gives the left-hand scalar $$\exp\!\left(-\frac{\|h\|^2+\|k\|^2}{4} +\frac{i\langle h+k,z\rangle_2}{\sqrt2}-\frac12\langle h,k\rangle_2\right).$$ Since $\|h+k\|^2=\|h\|^2+\|k\|^2+2\operatorname{Re}\langle h,k\rangle_2$, this scalar is exactly the right-hand scalar below, including its Weyl phase: $$W(h)W(k)\epsilon(z)=e^{-i\operatorname{Im}\langle h,k\rangle_2/2} W(h+k)\epsilon(z).$$ Taking $k=-h$ shows $W(-h)W(h)=W(h)W(-h)=I$, so each isometry is unitary and the Weyl identity holds on all Fock space. The vacuum case $z=0$ gives $\langle\Omega,W(h)\Omega\rangle_2=e^{-\|h\|^2/4}$. [F6, step 1.4, given, algebra]

3.1 The formula for $W(h)\epsilon(z)$ is norm-continuous in $h$ for every $z$. Since the exponential vectors have dense span and $\|W(h)\|=1$, this implies strong continuity: approximate an arbitrary vector by a vector in that span and bound the two remaining errors by twice the approximation error. To identify its generator, write $h=re$, $z=\alpha e+w$ with $w\in e^\perp$. Expanding the permutation average in the one-mode splitting [F2] gives $\epsilon(z)=J(\epsilon(\alpha e)\otimes\epsilon(w))$. The absolutely convergent exponential series and their Cauchy product [F6] give $e^{2xs-s^2}=\sum_{n\ge0}c_n(x)s^n/n!$, where $c_n(x)=n!\sum_{j=0}^{\lfloor n/2\rfloor}(-1)^j(2x)^{n-2j}/((n-2j)!j!)$. Here $c_0=1$ and $c_1=2x$. In $2xc_n-2nc_{n-1}$, reindex the second finite sum by $j\mapsto j+1$; for each common power $(2x)^{n+1-2j}$, the combined numerator is $(n+1-2j)+2j=n+1$, giving $c_{n+1}=2xc_n-2nc_{n-1}$. The recurrence and initial values in [F3] therefore give $c_n=H_n$ by induction, so $\sum_nH_n(x)s^n/n!=e^{2xs-s^2}$. Since $g_n=H_ng_0/\sqrt{2^nn!}$, substituting $s=\alpha/\sqrt2$ shows that the Hermite series for $V\epsilon(\alpha e)$ converges pointwise to $g_0(x)e^{\sqrt2\alpha x-\alpha^2/2}$. Let $S_N(x)=\sum_{n=0}^N\alpha^n g_n(x)/\sqrt{n!}$. The $S_N$ also converge in $L^2$ by the Fock norm series. To identify these limits, choose a subsequence $S_{N_j}$ whose squared $L^2$ errors from the Hilbert-space limit are below $2^{-3j}$. The sets where $|S_{N_j}-V\epsilon(\alpha e)|>2^{-j}$ have measure at most $2^{-j}$, by integrating the squared error; their tail unions have measure at most $\sum_{j\ge J}2^{-j}\to0$. Thus this subsequence converges almost everywhere to the $L^2$ limit, which must equal the pointwise generating-function limit. Multiplication by $e^{itrx}$ sends this function to $$e^{itr\alpha/\sqrt2-t^2r^2/4} g_0(x)e^{\sqrt2(\alpha+itr/\sqrt2)x-(\alpha+itr/\sqrt2)^2/2},$$ which is exactly the image of $W(th)\epsilon(z)$ under $J^{-1}$ and $V\otimes I$. By totality, $W(th)$ is the coordinate multiplier $e^{itrx}$ for every real $t$. Its difference quotient converges on the displayed domain to $iM_r$: if $rx f_j\in L^2$, then $|(e^{itrx}-1)/t|\le r|x|$ and dominated convergence gives the norm limit; conversely, if a difference quotient converges, Fatou's lemma along $t_n=1/n$ gives $\sum_j\int r^2x^2|f_j|^2<\infty$. Thus its exact generator domain is $D(M_r)$ and the derivative is $iM_r=i\Phi(h)$; $h=0$ is immediate. [F2, F3, F6, F7, step 1.3, step 2.1, step 1.4, algebra] ∎
