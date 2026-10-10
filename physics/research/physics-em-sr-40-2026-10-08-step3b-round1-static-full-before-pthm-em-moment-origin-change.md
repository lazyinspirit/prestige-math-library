---
id: pthm-em-moment-origin-change
kind: physics-theorem
domain: physics
dependency_level: 17
title: "Origin shift of the source moments: Q, the dipole p - Qb, the Cartesian expansion and the traceless quadrupole"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The exact reference-point dependence of the source moments of a static charge distribution: the total charge is reference-point independent, the dipole moment shifts by $-Qb$, every Cartesian moment has the displayed subset expansion, and the traceless quadrupole is reference-point independent for a neutral, non-dipolar distribution. The claim is a moment identity, not a statement about fields, forces, dynamics or empirical fact."
proof_strategy: direct
deps: [def-em-electric-moments, def-countable-choice, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-l-one-of-a-measure, def-metric-ball, def-euclidean-inner-product, def-finite-sum, lem-finite-sum-laws, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integral-triangle-inequality, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-ck-euclidean-maps-and-diffeomorphisms, thm-cauchy-schwarz-and-the-euclidean-norm, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]
dependency_roles:
  def-em-electric-moments: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 3.4.3 printed pp. 151-152 (displacing the origin by a: the new dipole moment is p - Qa, and p is origin-independent when Q = 0). Read in the stamped scanned full text, OCR cross-checked."
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 40 printed p. 95 (d' = d when the total charge vanishes) and Section 41 printed p. 99 (the quadrupole moment is independent of the coordinate origin if the total charge and the dipole moment both vanish; Gaussian units re-expressed in SI). Read in the stamped full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 2.2.3 printed pp. 20-22 (p = integral r' rho and Q_ij = integral rho (3 r'_i r'_j - delta_ij r'^2), the moments whose reference-point dependence is computed here). Read in the stamped full text."
verification:
  precheck: pass
---

## Statement

For the density-integral branch assume Countable Choice ($\mathrm{AC}_\omega$) through the Lebesgue interface ([[def-countable-choice]]); the finite-point branch of all identities below is choice-free. Let $a>0$ and let $\rho\in L^1(\mathbb R^3)$ be real and vanish $\lambda_3$-a.e. outside $\overline B_a(0)$ ([[def-metric-ball]]), or let $(x_k,q_k)_{k=1}^N$ be a finite system of stationary point charges, with the source moments of [[def-em-electric-moments]] branches (a) and (c) respectively. For $b\in\mathbb R^3$ define the moments **about the reference point $b$** by replacing, in each integrand of [[def-em-electric-moments]] (a) and in each summand of (c), the vector $y$ by $y-b$ (respectively $x_k$ by $x_k-b$):

$$Q^{(b)}:=\int_{\mathbb R^3}\rho\,d\lambda_3,\qquad p^{(b)}:=\int_{\mathbb R^3}(y-b)\,\rho(y)\,d\lambda_3(y),$$

$$M^{(b)}_{i_1\dots i_l}:=\int_{\mathbb R^3}\prod_{r=1}^l(y-b)_{i_r}\,\rho(y)\,d\lambda_3(y)\quad(l\ge1),\qquad M^{(b,0)}:=Q^{(b)},$$

$$Q^{(b)}_{ij}:=\int_{\mathbb R^3}\bigl(3(y-b)_i(y-b)_j-|y-b|^2\delta_{ij}\bigr)\rho(y)\,d\lambda_3(y),$$

and analogously with the finite sums $M^{(b)}_{i_1\dots i_l}=\sum_{k=1}^Nq_k\prod_{r=1}^l(x_k-b)_{i_r}$ $(l\ge1)$ and $Q^{(b)}_{ij}=\sum_{k=1}^Nq_k\bigl(3(x_k-b)_i(x_k-b)_j-|x_k-b|^2\delta_{ij}\bigr)$ in the point-charge branch; for $N=0$ the sums are the empty sum $0$. Every displayed integral is absolutely convergent: since $\rho=0$ $\lambda_3$-a.e. off $\overline B_a(0)$, the estimates $|(y-b)_{i_1}\cdots(y-b)_{i_l}|\le(|y|+|b|)^l\le(a+|b|)^l$ and $|3(y-b)_i(y-b)_j-|y-b|^2\delta_{ij}|\le4(|y|+|b|)^2\le4(a+|b|)^2$ hold $\lambda_3$-a.e. on the support, so each integrand is dominated $\lambda_3$-a.e. by a finite constant times $|\rho|\in L^1$ ([[def-em-electric-moments]] (a), [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-euclidean-inner-product]]). Then:

(a) $Q^{(b)}=Q$ for every $b$;

(b) $p^{(b)}=p-Qb$, so the dipole moment is independent of the reference point exactly when $Q=0$;

(c) for every $l\ge0$,

$$M^{(b)}_{i_1\dots i_l}=\sum_{S\subseteq\{1,\dots,l\}}(-1)^{|S|}\Bigl(\prod_{r\in S}b_{i_r}\Bigr)M_{S^{c}},$$

where for a subset $S\subseteq\{1,\dots,l\}$ we write $S^{c}:=\{1,\dots,l\}\setminus S$ and $M_{S^{c}}$ for the Cartesian moment whose index list is $(i_r)_{r\in S^{c}}$ in increasing order of $r$, with the empty index list read as $M_{\emptyset}:=Q$; in particular

$$M^{(b)}_{ij}=M_{ij}-b_ip_j-b_jp_i+b_ib_jQ;$$

(d) $Q^{(b)}_{ij}=Q_{ij}-3\bigl(b_ip_j+b_jp_i\bigr)+2(b\cdot p)\delta_{ij}+\bigl(3b_ib_j-|b|^2\delta_{ij}\bigr)Q$; consequently, if $Q=0$ and $p=0$, then $Q^{(b)}_{ij}=Q_{ij}$ for every $b$;

(e) [Scope] this is an exact identity between the declared source moments of [[def-em-electric-moments]]; it asserts nothing about fields, forces, dynamics or nature, and the reference point is a choice of coordinate origin, not an operation performed on the source.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$ for the density branch, let $a>0$, $b\in\mathbb R^3$, and let either a real $\rho\in L^1(\mathbb R^3)$ vanishing $\lambda_3$-a.e. off $\overline B_a(0)$, with source moments as in [[def-em-electric-moments]] (a), or a finite system $(x_k,q_k)_{k=1}^N$ of stationary point charges with source moments as in [[def-em-electric-moments]] (c), be given. All moments are read about the chart origin of the laboratory frame.

[F1] For $\rho\in L^1(\mathbb R^3)$ vanishing $\lambda_3$-a.e. outside $\overline B_a(0)$, the moments $Q=\int\rho$, $p=\int y\,\rho(y)\,d\lambda_3(y)$, $M_{i_1\dots i_l}=\int y_{i_1}\cdots y_{i_l}\rho\,d\lambda_3$ and $Q_{ij}=\int(3y_iy_j-|y|^2\delta_{ij})\rho\,d\lambda_3$ are absolutely convergent, dominated $\lambda_3$-a.e. by $a^l|\rho|$ and $4a^2|\rho|$ on the support, with $\sum_iQ_{ii}=0$ ([[def-em-electric-moments]]).

[F2] For a finite system of stationary point charges the moments $Q=\sum_kq_k$, $p=\sum_kq_kx_k$, $M_{i_1\dots i_l}=\sum_kq_kx_{k,i_1}\cdots x_{k,i_l}$ and $Q_{ij}=\sum_kq_k(3x_{k,i}x_{k,j}-|x_k|^2\delta_{ij})$ are finite sums with $\sum_iQ_{ii}=0$, defined without Choice, and empty sums are $0$ ([[def-em-electric-moments]]).

[F3] If $f,g\in L^1$ and $\alpha,\beta\in\mathbb R$, then $\int(\alpha f+\beta g)\,d\lambda_3=\alpha\int f\,d\lambda_3+\beta\int g\,d\lambda_3$; this extends to finite linear combinations ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F4] If $f$ and $g$ agree $\lambda_3$-a.e. then $\int f\,d\lambda_3=\int g\,d\lambda_3$ whenever either side is defined ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F5] $|\int f\,d\lambda_3|\le\int|f|\,d\lambda_3$, and for measurable $0\le u\le w$ one has $\int u\,d\lambda_3\le\int w\,d\lambda_3$ ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F6] Finite sums are distributive, may be reindexed over a bijection of their index set, and the empty sum is $0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[F7] With the Euclidean inner product and norm, $|y-b|\le|y|+|b|$ and $|(y-b)_i|\le|y-b|$ for every $y,b\in\mathbb R^3$; the inner product is bilinear and the components are read in the frame basis ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[F8] A polynomial identity between the coordinate functions of $\mathbb R^3$ that holds pointwise may be integrated and differentiated with the usual polynomial calculus; the coordinate maps of $\mathbb R^3$ are smooth in the componentwise sense ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F9] $\overline B_a(0)=\{y\in\mathbb R^3:|y|\le a\}$ ([[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 Establish that every integral in the definition of the $b$-moments is absolutely convergent. For $\lambda_3$-a.e. $y$ outside $\overline B_a(0)$ the integrands vanish, and for $y\in\overline B_a(0)$ one has $|y|\le a$ by [F9], so $|(y-b)_{i_1}\cdots(y-b)_{i_l}|\le(|y|+|b|)^l\le(a+|b|)^l$ and $|3(y-b)_i(y-b)_j-|y-b|^2\delta_{ij}|\le3|y-b|^2+|y-b|^2\le4(a+|b|)^2$ by [F7]; hence each integrand is bounded $\lambda_3$-a.e. on the support by a finite constant times $|\rho|\in L^1$, and the triangle and monotonicity rules [F5] give absolute convergence. [F1, F5, F7, F9, given]

1.2 Prove the polynomial expansion identity: for every $l\ge0$, all indices $i_1,\dots,i_l\in\{1,2,3\}$ and every $y\in\mathbb R^3$, $\prod_{r=1}^l(y-b)_{i_r}=\sum_{S\subseteq\{1,\dots,l\}}(-1)^{|S|}\bigl(\prod_{r\in S}b_{i_r}\bigr)\bigl(\prod_{r\in S^{c}}y_{i_r}\bigr)$, where empty products are $1$ and $S^{c}=\{1,\dots,l\}\setminus S$. The case $l=0$ is $1=1$, the unique subset being $S=\emptyset$; for $l\ge1$ write the product as $\bigl(\prod_{r=1}^{l-1}(y-b)_{i_r}\bigr)(y_{i_l}-b_{i_l})$, apply the induction hypothesis to the first factor and distribute: the subsets $S$ of $\{1,\dots,l-1\}$ that avoid $l$ and the subsets to which $l$ is adjoined are in bijection and reindex the same finite sum, giving the displayed identity. [F6, F8, algebra]

2.1 In the density branch, substitute step 1.2 into the definition of $M^{(b)}_{i_1\dots i_l}$ and integrate term by term. Each summand is a real constant $(-1)^{|S|}\prod_{r\in S}b_{i_r}$ times the $L^1$ function $y\mapsto(\prod_{r\in S^{c}}y_{i_r})\rho(y)$, which is dominated $\lambda_3$-a.e. by $|b|^{|S|}a^{l-|S|}|\rho|$ by [F1] and [F7]; finite linearity [F3] and the a.e. support convention [F4] therefore give $M^{(b)}_{i_1\dots i_l}=\sum_{S}(-1)^{|S|}\bigl(\prod_{r\in S}b_{i_r}\bigr)M_{S^{c}}$ with $M_{\emptyset}:=Q$. Specialising to $l=0$ gives $Q^{(b)}=Q$, which is (a). Specialising to $l=1$ gives $p^{(b)}_i=p_i-b_iQ$, which is (b): if $Q=0$ then $p^{(b)}=p$ for every $b$; conversely, if $p^{(b)}=p$ for every $b\in\mathbb R^3$, then $Qb=0$ for every $b$, and taking $b=e_r$ for $r=1,2,3$ shows that all three frame components of $Q$ vanish, so $Q=0$, and the dipole moment is independent of the reference point exactly when $Q=0$. [step 1.1, step 1.2, F1, F3, F4, F7]

3.1 Evaluate the $l=2$ instance of step 2.1: $M^{(b)}_{ij}=M_{ij}-b_ip_j-b_jp_i+b_ib_jQ$. Summing over $i=j$ and using finite linearity [F3] gives $\sum_{k=1}^3M^{(b)}_{kk}=\sum_{k=1}^3M_{kk}-2b\cdot p+|b|^2Q$, where $b\cdot p=\sum_kb_kp_k$ is the Euclidean inner product [F7]. [step 2.1, F3, F7]

4.1 Compute the traceless quadrupole about $b$. By [F1], $Q^{(b)}_{ij}=3M^{(b)}_{ij}-\delta_{ij}\sum_kM^{(b)}_{kk}$ and $Q_{ij}=3M_{ij}-\delta_{ij}\sum_kM_{kk}$, so substituting step 3.1 into the first identity gives $Q^{(b)}_{ij}=Q_{ij}-3(b_ip_j+b_jp_i)+2(b\cdot p)\delta_{ij}+(3b_ib_j-|b|^2\delta_{ij})Q$, which is the displayed identity of (d); every step is a finite algebraic rearrangement [F3]. [step 3.1, F1, F3, algebra]

5.1 Read off the invariant case: if $Q=0$ and $p=0$, then all four $b$-dependent terms of step 4.1 vanish, so $Q^{(b)}_{ij}=Q_{ij}$ for every $b$, which is the final clause of (d). [step 4.1]

6.1 Repeat the argument in the finite point-charge branch and complete the choice accounting. The same expansion identity of step 1.2 is substituted into the finite sums of [F2]; finite distributivity, reindexing and the empty-sum convention [F6] produce the identical identities (a)-(d) with sums in place of integrals, without any convergence hypothesis, and the case $N=0$ makes both sides $0$ at every step. The identities are therefore choice-free in this branch, while the density branch used only the declared Countable Choice of the measure interface. [step 1.2, step 5.1, F2, F6]

7.1 Combine the branches and record the scope. Replacing $\rho$ by an equal $\lambda_3$-a.e. density leaves every $b$-moment unchanged by [F4], so (a)-(d) hold as stated for the declared representatives; the density branch is established in steps 2.1, 4.1 and 5.1, the finite-point branch in step 6.1, and the identities are those of the source moments of [[def-em-electric-moments]] about the chart origin, the reference point $b$ being a choice of coordinate origin only; no field, force or dynamical content is asserted, which is clause (e). [step 6.1, F4] ∎
