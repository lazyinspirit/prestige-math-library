---
id: texp-qft-two-level-measurement
kind: thought-experiment
domain: physics
library: physics
title: "Two-level measurement and formal-coefficient boundary"
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 3
deps:
  - post-qft-constructed-model-and-measurement
  - def-qft-finite-bounded-kraus-instrument
  - def-countable-choice
  - lem-qft-finite-instrument-normalization
  - lem-nrqm-composites-rank-one-operator-calculus
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-complex-plane-is-complete
  - thm-reals-ordered-field
  - def-formal-power-series-and-coefficient-extraction
  - lem-cauchy-reals-archimedean
dependency_roles:
  post-qft-constructed-model-and-measurement: physical-assumption
  def-qft-finite-bounded-kraus-instrument: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-finite-instrument-normalization: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-complex-plane-is-complete: mathematical-premise
  thm-reals-ordered-field: mathematical-premise
  def-formal-power-series-and-coefficient-extraction: mathematical-premise
  lem-cauchy-reals-archimedean: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional ideal two-level instrument; no observed outcome and no formal coefficient identified as an exact probability."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Watrous, The Theory of Quantum Information (Cambridge University Press, 2018; author-hosted prepublication manuscript), §2.3.1 pp. 100–102 and §2.3.2 pp. 111–113"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
    - title: "R. B. Griffiths, Notes on Quantum Information Theory, version 30 Jan. 2004, complete §7, printed pp. 1–3, equations (7.2)–(7.9)"
      url: "https://www.andrew.cmu.edu/course/33-658/qit7.pdf"
    - title: "OpenStax, Calculus Volume 2, §6.1 ‘Power Series and Functions,’ Example 6.1(2)"
      url: "https://openstax.org/books/calculus-volume-2/pages/6-1-power-series-and-functions"
    - title: "R. W. Howell, Complex Analysis, §4.4, Theorem 4.4.1 and Exercise 3(b)"
      url: "https://complexanalysis.org/web/sec_power-series.html"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume $\mathrm{AC}_\omega$. At one fixed measurement time, take the
constructed two-dimensional Hilbert space $\mathcal H=\mathbb C^2$ with
inner product
$\langle x,y\rangle=x_0\overline{y_0}+x_1\overline{y_1}$, linear in the
first variable. Let $e_0=(1,0)$, $e_1=(0,1)$ and
$v=\alpha e_0+\beta e_1$ with
$|\alpha|^2+|\beta|^2=1$. Prepare the rank-one density operator
$\rho=T_{v,v}$, where
$T_{v,v}x=\langle x,v\rangle v$ as in
[[lem-nrqm-composites-rank-one-operator-calculus]]. Define the two measurement
operators

$$P_0=\begin{pmatrix}1&0\\0&0\end{pmatrix},\qquad P_1=\begin{pmatrix}0&0\\0&1\end{pmatrix},\qquad M_{0,1}=P_0,\quad M_{1,1}=P_1.$$

This is a finite normalized instrument. The postulate
[[post-qft-constructed-model-and-measurement]] assigns model probabilities
$p_0=|\alpha|^2$ and $p_1=|\beta|^2$, which sum to one. When $p_i>0$ its
conditional state is $P_i$; when $p_i=0$ the normalized update is undefined.
This is a conditional model calculation, not a report of an observed result.

For the formal comparison, let $g$ be an indeterminate; the formal algebra
assigns it no SI unit or numerical value. The formal series

$$F(g):=\sum_{n=0}^{\infty}n!g^n\in\mathbb R\llbracket g\rrbracket$$

has a coefficient for every $n$, while its numerical power series has radius
zero after the real coefficients are embedded in $\mathbb C$ for evaluation.
This example separates coefficient data from numerical convergence.
The Born postulate does not assign an exact probability to a coefficient in
isolation: an additional map from formal data to a constructed state and
measurement, together with any approximation and error assumptions, would be
needed. No such map or observed outcome is claimed.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the model state and finite instrument above;
the usual finite-product definition of $n!$; and the numerical convention
$g^0=1$ for every $g$, including $g=0$.

[A1] [[post-qft-constructed-model-and-measurement]]: as the Born interpretation
postulate for the selected model, it reads
$p_a(t)=\operatorname{tr}(\mathcal J_a(\rho_t))=\operatorname{tr}(\rho_tE_a)$
as the model probability for outcome $a$.

[A2] [[def-countable-choice]]: for every family of nonempty sets indexed by
$\mathbb N$, there is a function selecting one element from each set.

[A3] For numerical evaluation, $n!:=\prod_{k=1}^n k$ with $0!:=1$ and
$g^0:=1$ for all $g$. Thus $n!>0$ in the real coefficient field for each
finite $n$.

[A4] The numerical convergence radius used here is
$R:=\sup\{r\ge0:\text{the series converges for every }g\in\mathbb C
\text{ with }|g|<r\}$.

[A5] This thought experiment supplies no map from the formal coefficient
sequence to a state, instrument, or controlled approximation.

[A6] [[post-qft-constructed-model-and-measurement]]: when $p_a(t)>0$, adopt
$\mathcal J_a(\rho_t)/p_a(t)$ as the model's conditional state; at zero
probability no normalized update is assigned.

[A7] [[post-qft-constructed-model-and-measurement]]: the physical reading is
adopted only for an explicitly selected model whose mathematical data have
actually been constructed.

[L1] [[def-qft-finite-bounded-kraus-instrument]]: normalization means
$\sum_{a,r}M_{a,r}^*M_{a,r}=I_{\mathcal H}$, and the outcome operator and
operation are $E_a=\sum_rM_{a,r}^*M_{a,r}$ and
$\mathcal J_a(X)=\sum_rM_{a,r}XM_{a,r}^*$. The Hilbert adjoint satisfies
$\langle Mx,y\rangle=\langle x,M^*y\rangle$.

[L2] [[lem-qft-finite-instrument-normalization]]: assuming
$\mathrm{AC}_\omega$, a unit vector $\psi$ gives the rank-one density operator
$T_{\psi,\psi}$, with outcome probability
$p_a=\sum_r\|M_{a,r}\psi\|^2$; for positive probability the conditional
update is a density operator, and at zero probability it is undefined.

[L3] [[lem-nrqm-composites-rank-one-operator-calculus]]: the rank-one map is
$T_{u,v}x=\langle x,v\rangle u$; for a unit vector $x$, $T_{x,x}$ is positive
and trace class with trace one.

[F1] [[def-real-and-complex-inner-product-space]]: the chosen complex inner
product is linear in its first argument, conjugate-linear in its second, and
has $\|x\|^2=\langle x,x\rangle$.

[F2] [[def-hilbert-space]]: a complex Hilbert space is a complex inner-product
space complete in its induced norm.

[F3] [[thm-complex-plane-is-complete]]: the complex plane with its Euclidean
metric is complete.

[F4] [[def-formal-power-series-and-coefficient-extraction]]: for a
commutative ring $R$, a formal power series in $R\llbracket g\rrbracket$ is a
coefficient function; $g$ is an indeterminate, and formal membership asserts
no analytic convergence or chosen value of $g$.

[F5] [[lem-cauchy-reals-archimedean]]: the Cauchy-sequence reals are
Archimedean: for every $x\in\mathbb R$ there is a natural number $N$ with
$x<N$.

[F6] [[thm-reals-ordered-field]]: the repository real numbers form a totally
ordered field, and hence a commutative coefficient ring for [F4].

[F7] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: if
$z=a+bi$, then $|z|=\sqrt{a^2+b^2}$, so $|z|\ge0$ and $|z|=0$ only for
$z=0$.

## Proof

1.1 The displayed pairing is linear in the first variable by coordinatewise
addition and scalar multiplication, is conjugate-symmetric by complex
conjugation, and satisfies
$\langle x,x\rangle=|x_0|^2+|x_1|^2\ge0$, with equality only for $x=0$.
Thus it is a positive-definite complex inner product with norm
$\|x\|=(|x_0|^2+|x_1|^2)^{1/2}$. [given, F1, F7, algebra]

1.2 Take the coefficient ring to be the repository real field, which is a
commutative ring by [F6], and define $a_n:=n!$ for each $n\in\mathbb N_0$.
Each coefficient is a finite product of real integers, so $(a_n)_{n\ge0}$ is
a coefficient function and hence $F(g)\in\mathbb R\llbracket g\rrbracket$ by
[F4]. This formal membership does not assert convergence. [given, A3, F4, F6,
algebra]

1.3 By [F4], a formal coefficient is an entry in a coefficient function and
does not itself select a numerical argument or a model. By [A1], the postulate
assigns outcome probabilities only through its model Born rule; by [A5] and
[A7], this formal example supplies no state, instrument, or map from the
coefficient sequence to such data. Therefore the postulate assigns no exact
probability to an isolated coefficient; this does not exclude a separate
model that supplies such a map. [given, A1, A5, A7, F4, algebra]

2.1 Let $(x_n)$ be Cauchy in the norm of step 1.1, with coordinates
$x_n=(z_{n,0},z_{n,1})$. For each $j$, the estimate
$|z_{n,j}-z_{m,j}|\le\|x_n-x_m\|$ makes $(z_{n,j})$ Cauchy in $\mathbb C$.
By [F3] it converges to some $z_j$. Then
$\|x_n-(z_0,z_1)\|^2=|z_{n,0}-z_0|^2+|z_{n,1}-z_1|^2\to0$.
So $\mathbb C^2$ is complete, and is a complex Hilbert space by [F2]; it is
nonzero since $e_0\ne0$. [given, F2, F3, F7, step 1.1, algebra]

2.2 At $g=0$, the numerical sum equals $1$ by [A3]. Fix any nonzero complex
$g$ and let $u_n:=n!g^n$. By [F5] choose a natural $N>2/|g|$. For every
$n\ge N$,
$|u_{n+1}|/|u_n|=(n+1)|g|>2$, so $|u_n|\ge|u_N|>0$. Thus the terms do not
tend to zero. If the partial sums converged, their consecutive differences
$u_n$ would tend to zero, a contradiction. Therefore the numerical series
diverges for every nonzero $g$. [given, A3, F5, F6, F7, step 1.2, algebra]

3.1 For $P_0$, both inner products in the symmetry identity equal
$x_0\overline{y_0}$; for $P_1$, both equal $x_1\overline{y_1}$. Thus
$P_i^*=P_i$. Multiplying the diagonal matrices gives $P_i^2=P_i$ and
$P_0+P_1=I_2$. For $x=(x_0,x_1)$,
$\|P_0x\|^2=|x_0|^2\le\|x\|^2$ and
$\|P_1x\|^2=|x_1|^2\le\|x\|^2$, so both operators are bounded. With two
outcomes and one Kraus operator each,
$\sum_{i=0}^1M_{i,1}^*M_{i,1}=P_0+P_1=I_2$; [L1] therefore identifies the
data as a normalized finite instrument on the Hilbert space of step 2.1.
[given, A2, F1, F7, L1, step 2.1, algebra]

3.2 The normalization of $v$ gives $\langle v,v\rangle=|\alpha|^2+|\beta|^2=1$. By [L3], $T_{v,v}x=\langle x,v\rangle v$; substituting $\langle x,v\rangle=x_0\overline\alpha+x_1\overline\beta$ gives $\rho=T_{v,v}=\begin{pmatrix}|\alpha|^2&\alpha\overline\beta\\\beta\overline\alpha&|\beta|^2\end{pmatrix}$. The formula in [L3] gives the displayed matrix, and [L2] identifies this unit-vector rank-one operator as a density operator under $\mathrm{AC}_\omega$. [given, A2, F1, F7, L2, L3, step 2.1, algebra]

3.3 By the radius definition [A4], for every $r>0$ the nonzero real number
$g=r/2$ lies inside that disk. Step 2.2 proves divergence at this $g$, so no
positive $r$ belongs to the defining set. The value $r=0$ belongs vacuously
because its disk is empty; hence $R=0$. [given, A4, step 2.2, algebra]

4.1 The actions are $P_0v=\alpha e_0$ and $P_1v=\beta e_1$, so their squared
norms are $|\alpha|^2$ and $|\beta|^2$. The pure-state formula in [L2] gives
$p_0=|\alpha|^2$ and $p_1=|\beta|^2$, whose sum is one. By [A1] these are
the adopted model probabilities; each lies in $[0,1]$. [given, A1, A2, F7,
L2, step 3.1, step 3.2, algebra]

5.1 From [L1], $\mathcal J_0(\rho)=P_0\rho P_0$ and
$\mathcal J_1(\rho)=P_1\rho P_1$. Using the matrix in step 3.2,
$$P_0\rho P_0= \begin{pmatrix}1&0\\0&0\end{pmatrix} \begin{pmatrix}|\alpha|^2&\alpha\overline\beta\\ \beta\overline\alpha&|\beta|^2\end{pmatrix} \begin{pmatrix}1&0\\0&0\end{pmatrix}=|\alpha|^2P_0,$$
while
$$P_1\rho P_1= \begin{pmatrix}0&0\\0&1\end{pmatrix} \begin{pmatrix}|\alpha|^2&\alpha\overline\beta\\ \beta\overline\alpha&|\beta|^2\end{pmatrix} \begin{pmatrix}0&0\\0&1\end{pmatrix}=|\beta|^2P_1.$$
Also $P_i=T_{e_i,e_i}$ by [L3], so [L2] makes $P_i$ a density operator. If
$p_0>0$, $\mathcal J_0(\rho)/p_0=P_0$; if $p_0=0$, division is undefined.
The same argument gives $P_1$ when $p_1>0$ and no normalized update when
$p_1=0$, exactly as adopted in [A6]. [given, A6, L1, L2, L3, step 3.1,
step 3.2, step 4.1, algebra] ∎
