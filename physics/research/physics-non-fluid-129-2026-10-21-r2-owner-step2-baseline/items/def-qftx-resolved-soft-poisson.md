---
id: def-qftx-resolved-soft-poisson
kind: definition
domain: mathematics
library: mathematics
title: Independent soft-radiation resolution model
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-countable-choice
  - def-qft-example-data
  - def-qft-fock-and-test-spaces
  - def-qft-photon-transverse-space
  - def-qft-qed-photon-energy-multiplier
  - thm-qft-example-soft-current-angular-coherent
  - def-euclidean-inner-product
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-logarithm-derivative-and-integral
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-exponential-addition-and-real-extension
  - def-factorial-and-falling-factorial
  - def-integer-power
justified_by:
  - lem-qftx-coherent-band-poisson
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  def-qft-qed-photon-energy-multiplier: mathematical-premise
  thm-qft-example-soft-current-angular-coherent: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-integer-power: mathematical-premise
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, full lecture notes"
      url: https://arxiv.org/pdf/math-ph/0511030
      locator: "§§5.3–5.6, PDF pp. 19–21; symmetric Fock sectors and the tensor product law for Fock spaces."
    - title: "Physikalisch-Technische Bundesanstalt, Quantum Optics, Lecture 5"
      url: https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf
      locator: "PDF pp. 1–2, equations (1)–(8) and “Photon statistics of coherent states”; normalized coherent-state number weights."
---

## Definition

Use SI quantities with $c>0$ in m s$^{-1}$, $\hbar>0$ in J s,
$e>0$ in C, and $\mu_0>0$ in H m$^{-1}$. Let $g=e\sqrt{\mu_0c/\hbar}>0$
be dimensionless. Let $I$ be a finite, possibly empty, set of leg labels.
For each $i\in I$, choose an energy $E_i>0$ in J, a dimensionless velocity
$v_i\in\mathbb R^3$ with $|v_i|<1$, a dimensionless charge number
$Q_i\in\mathbb R$ (physical charge $eQ_i$ in C), and an orientation
$\eta_i\in\{-1,1\}$, where $-1$
denotes an incoming leg and $+1$ an outgoing leg. Assume charge balance
$\sum_{i\in I}\eta_iQ_i=0$. Write $h=\operatorname{diag}(1,-1,-1,-1)$ and
$h(a,b)=a^0b^0-\mathbf a\cdot\mathbf b$.

For $n\in S^2=\{x\in\mathbb R^3:|x|=1\}$, set
$$p_i=E_i(1,v_i),\qquad q=\hbar\nu(1,n),\qquad J(q)=\sum_{i\in I}\eta_iQ_i\frac{p_i}{h(p_i,q)},\qquad K(n)=\sum_{i\in I}\eta_iQ_i\frac{(1,v_i)}{1-v_i\cdot n}.$$
Here $\nu>0$ is angular frequency in s$^{-1}$ and $\hbar\nu$ is photon
energy in J. The data make $h(p_i,q)=E_i\hbar\nu(1-v_i\cdot n)>0$ and
$J(q)=K(n)/(\hbar\nu)$. The balance condition gives
$h(J(q),q)=0$; this is the conservation convention for this prescribed
eikonal current in the model.

Let $A\subseteq S^2$ be a Borel angular acceptance region and let $d\Omega$
be Euclidean chart surface measure. Write $K(n)=(K^0(n),\mathbf K(n))$ and
define $K_\perp(n)=(I_3-nn^T)\mathbf K(n)$, where $I_3$ is the $3\times3$
identity matrix, and
$$b(n)=\mathbf1_A(n)\frac{gK_\perp(n)}{\sqrt{2(2\pi)^3}},\qquad C=\int_{S^2}|b(n)|^2\,d\Omega(n)\ge0.$$
Thus $b$ and $C$ are dimensionless.

For fixed angular-frequency cutoffs $0<\varepsilon<\Delta<\Lambda$, define
$\nu(\mathbf k)=c|\mathbf k|$ in s$^{-1}$. The one-particle coherent
displacement is the transverse mode function
$$f_{\varepsilon,\Lambda}(\mathbf k)= \mathbf1_{\{\varepsilon<\nu(\mathbf k)<\Lambda\}}|\mathbf k|^{-3/2} {}\times b\!\left(\frac{\mathbf k}{|\mathbf k|}\right) \quad(\mathbf k\ne0), \qquad f_{\varepsilon,\Lambda}(0)=0.$$
The function $f_{\varepsilon,\Lambda}$ has units m$^{3/2}$ in
$L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3)$; the associated free one-photon
energy is $\hbar\nu(\mathbf k)=\hbar c|\mathbf k|$ in J. Define its
exponential vector and normalized coherent vector by
$$\epsilon(f)=\bigoplus_{m=0}^{\infty}\frac{f^{\otimes_s m}}{\sqrt{m!}}, \qquad \Psi_{\varepsilon,\Lambda} =\exp\!\left(-\frac{\|f_{\varepsilon,\Lambda}\|^2}{2}\right) \epsilon(f_{\varepsilon,\Lambda}),$$
where $f^{\otimes_s0}=1$ in the vacuum sector. For a finite partition
$B_1,\ldots,B_r$ of $(\varepsilon,\Lambda)$ into disjoint Borel intervals,
let
$H_j=\{u\in\mathcal H_T:u(\mathbf k)=0\text{ a.e. unless }\nu(\mathbf k)\in B_j\}$.
For a tuple $(m_1,\ldots,m_r)\in\mathbb N_0^r$, its occupation subspace is
the closed span of symmetrized tensors with exactly $m_j$ one-particle factors
in $H_j$ for each $j$ and no factors outside $\bigoplus_jH_j$. The model
defines $N(B_j)=m_j$ on this occupation subspace and assigns it probability
equal to the squared norm of the projection of $\Psi_{\varepsilon,\Lambda}$
onto the subspace. Its resolution parameter
$\Delta$ divides $(\varepsilon,\Lambda)$ into the unresolved band
$(\varepsilon,\Delta)$ and the resolved band $[\Delta,\Lambda)$. The
threshold frequency is assigned to the resolved band; its exact assignment
does not change any $L^2$ vector or probability because a single frequency
has zero one-particle measure.
This is a finite-cutoff free coherent-state model; it does not posit a
detector response or an interacting QED scattering law.

## Definition references

[[thm-qft-example-soft-current-angular-coherent]]

[Dereziński, §§5.3–5.6](https://arxiv.org/pdf/math-ph/0511030)

[PTB Quantum Optics, Lecture 5](https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf)

## Remarks

The well-definedness of $C$, the transverse $L^2$ vector
$f_{\varepsilon,\Lambda}$, the normalized exponential vector, and the band
counting probabilities is established in
[[lem-qftx-coherent-band-poisson]]. The exact formulas are conditional on the
stated finite leg data and cutoffs. They introduce no empirical photon counts,
no virtual corrections, and no claim of full Bloch–Nordsieck or KLN
cancellation.
