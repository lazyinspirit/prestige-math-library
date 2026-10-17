---
id: lem-emg-xs-kn-rational-calculus
kind: lemma
title: Exact rational Kerr-Newman component derivation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-emg-xs-kn-data
  - def-emg-xs-geometric-electrovac
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - lem-emg-lorentz-hodge-calculus
  - alg-emg-rational-electrovac-verification
  - lem-emg-rational-electrovac-verification-correctness
  - lem-emg-rational-electrovac-verification-termination-resources
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
dependency_roles:
  def-emg-xs-kn-data: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  alg-emg-rational-electrovac-verification: mathematical-premise
  lem-emg-rational-electrovac-verification-correctness: mathematical-premise
  lem-emg-rational-electrovac-verification-termination-resources: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.2-3.1, printed pp. 4-11 (PDF pp. 5-12): KN metric, Maxwell field and direct field-equation verification"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)-(7.116) and charge substitution, printed p. 207 (PDF p. 214): Kerr metric and charged rotating form"
physical_scope: null
---


## Statement

Let $M,a,q\in\mathbb R$ and use the electric Kerr-Newman datum on a
Boyer-Lindquist chart with $\Sigma>0$, $\Delta\ne0$, $0<\theta<\pi$. Set
$y=\cos\theta$, $b=1-y^2$, $R=r^2+a^2$, and use the rational procedure of
[[alg-emg-rational-electrovac-verification]] with volume polynomial $w=\Sigma$.
Its exact component table is: the metric and inverse entries and determinant
in [[def-emg-xs-kn-data]]; the field components
$$\mathcal F_{10}=\frac{q(r^2-a^2y^2)}{\Sigma^2},\quad \mathcal F_{20}=\frac{2qra^2y}{\Sigma^2},\quad \mathcal F_{13}=-\frac{abq(r^2-a^2y^2)}{\Sigma^2},\quad \mathcal F_{23}=-\frac{2qraR\,y}{\Sigma^2};$$
the Ricci table and exact residuals recorded in Proof steps 2.2-3.1; and the exact contractions
$$\mathcal F_{ij}\mathcal F^{ij} =-\frac{2q^2(r^4-6a^2r^2y^2+a^4y^4)}{\Sigma^4},\qquad \operatorname{Ric}_{ij}\operatorname{Ric}^{ij}=\frac{4q^4}{\Sigma^4}, \qquad g^{ij}\operatorname{Ric}_{ij}=0.$$
The exact rational calculation returns zero numerator flags for all four
Maxwell-density residuals and all sixteen Einstein residuals.

## Facts & Assumptions

**Given:** The exact electric KN metric and potential on $\Sigma>0$, $\Delta\ne0$,
and $b=1-y^2>0$.

[F1] [[def-emg-xs-kn-data]]: in $(x^0,r,\theta,\phi)$,
$g=-\Delta\Sigma^{-1}(dx^0-a\sin^2\theta\,d\phi)^2
+\Sigma\Delta^{-1}dr^2+\Sigma d\theta^2
+\sin^2\theta\,\Sigma^{-1}(R\,d\phi-a\,dx^0)^2$ and
$\mathcal A=-qr\Sigma^{-1}(dx^0-a\sin^2\theta\,d\phi)$.

[F2] [[alg-emg-rational-electrovac-verification]]: for a symmetric rational
metric, rational potential and admitted volume polynomial $w$, the finite
procedure returns exact inverse, Maxwell-density, Christoffel, Ricci,
Einstein and scalar tables with numerator-zero flags.

[F3] [[lem-emg-rational-electrovac-verification-correctness]] and
[[lem-emg-rational-electrovac-verification-termination-resources]]: the finite
sparse-polynomial schedule has the stated exact algebraic meaning and
terminates; zero flags are exact after all admissible chart divisors are kept.

[F4] [[def-gr-curvature-tensor-and-derived-tensors]] and
[[thm-gr-curvature-tensoriality-and-coordinate-formula]]: use the sign
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and the stated
Christoffel and Ricci coordinate formulas.

[F6] [[lem-derivative-of-a-power]] and [[thm-algebra-of-derivatives]]: positive
and negative integer powers have their stated derivatives on their respective
domains, and finite sums, products, and quotients obey the derivative rules.
These identify the algorithm's formal monomial and rational derivatives with
ordinary coordinate derivatives on the admitted chart.

[F7] [[def-emg-xs-geometric-electrovac]] defines
$Q_{ij}(H)=H_{ik}H_j{}^k-\tfrac14g_{ij}H_{kl}H^{kl}$, with indices raised by
the inverse metric.

[A1] The coordinate region has $\Sigma>0$, $\Delta\ne0$, $b>0$; the algorithm
uses the rational-function field before specializing the parameters.

## Proof


1.1 The coordinate change $y=\cos\theta$ is a diffeomorphism on $0<\theta<\pi$ because $dy/d\theta=-\sin\theta\ne0$. Expanding the metric from [F1] gives the five nonzero entries $$g_{00}=-(\Delta-a^2b)/\Sigma,\quad g_{03}=-ab(R-\Delta)/\Sigma,\quad g_{33}=b(R^2-a^2\Delta b)/\Sigma,\quad g_{11}=\Sigma/\Delta,\quad g_{22}=\Sigma/b.$$ Their $0,3$ block determinant is $-\Delta b$ and the full determinant is $-\Sigma^2$. Multiplying the stated inverse entries in [[def-emg-xs-kn-data]] by these blocks gives $gg^{-1}=I_4$; the $1,1$ and $2,2$ entries are reciprocal diagonal factors. Since $\Sigma>0$, the volume polynomial is $w=\Sigma$. The input and inverse denominators are products of $\Sigma$, $\Delta$ and $b$; each is nonzero under [A1], so all divisions in this exact calculation are admissible. [F1, A1, algebra]

1.2 The potential components from [F1] are $\mathcal A_0=-qr/\Sigma$, $\mathcal A_3=qra b/\Sigma$, and $\mathcal A_1=\mathcal A_2=0$. Applying $\mathcal F_{ij}=\delta_i\mathcal A_j-\delta_j\mathcal A_i$ with $\delta_1=\partial_r$, $\delta_2=\partial_y$, using [F4] and [F6], gives the four independent field entries in the Statement; antisymmetry gives the remaining entries. [F1, F2, F6, A1, algebra]

2.1 Put $C:=r^2(3y^2-1)+a^2y^2(3-y^2)$ and $A:=r^2-a^2y^2$. Raising the field components in the Statement with the inverse in [F1] gives the nonzero radial/latitude density components $$\Sigma\mathcal F^{10}=-\frac{qRA}{\Sigma^2},\quad \Sigma\mathcal F^{20}=-\frac{2qra^2by}{\Sigma^2},\quad \Sigma\mathcal F^{13}=-\frac{qaA}{\Sigma^2},\quad \Sigma\mathcal F^{23}=-\frac{2qray}{\Sigma^2}.$$ Direct differentiation gives $$\partial_r(\Sigma\mathcal F^{10})=-\frac{2qra^2C}{\Sigma^3},\quad \partial_y(\Sigma\mathcal F^{20})=\frac{2qra^2C}{\Sigma^3},\quad \partial_r(\Sigma\mathcal F^{13})=\frac{2qar(r^2-3a^2y^2)}{\Sigma^3},\quad \partial_y(\Sigma\mathcal F^{23})=-\frac{2qar(r^2-3a^2y^2)}{\Sigma^3}.$$ The residuals for $j=0,3$ cancel pairwise; those for $j=1,2$ vanish because their potentially differentiated radial/latitude components are zero. Thus all four Maxwell-density residual numerators are exactly zero. [F1, F2, F4, F6, step 1.2, algebra]

2.2 Substitution of the metric entries and inverse from [F1] into the algorithm's full Christoffel and Ricci schedules [F2], using curvature convention [F4], gives the exact sixteen-entry Ricci output table $$\bigl(\operatorname{Ric}_{ij}\bigr)=\begin{pmatrix}\frac{q^2(\Delta+a^2b)}{\Sigma^3}&0&0&-\frac{q^2ab(\Delta+R)}{\Sigma^3}\\0&-\frac{q^2}{\Sigma\Delta}&0&0\\0&0&\frac{q^2}{\Sigma b}&0\\-\frac{q^2ab(\Delta+R)}{\Sigma^3}&0&0&\frac{q^2(a^2\Delta b^2+bR^2)}{\Sigma^3}\end{pmatrix}.$$ All omitted off-diagonal entries in this full matrix are zero. The complete rational certificate linked below supplies all 64 Christoffel entries as well as all 16 ordered Ricci entries, including zeros. For each Christoffel entry, substitute its certified numerator/denominator into the Christoffel schedule; for each ordered Ricci entry substitute those certified Christoffel entries and their quotient-rule derivatives into the Ricci schedule. Polynomial cross-multiplication gives the displayed table; the certificate checker performs these 64 and 16 checks separately, without inferring an uncomputed component by symmetry. [F1, F2, F3, F4, F6, step 1.1, step 1.2, algebra]

3.1 Direct contraction of the field entries from step 1.2 with the same inverse gives $$\mathcal F_{ij}\mathcal F^{ij}=-\frac{2q^2(r^4-6a^2r^2y^2+a^4y^4)}{\Sigma^4},\qquad (2Q_{ij}(\mathcal F))=\bigl(\operatorname{Ric}_{ij}\bigr),\qquad g^{ij}\operatorname{Ric}_{ij}=0,\qquad \operatorname{Ric}_{ij}\operatorname{Ric}^{ij}=\frac{4q^4}{\Sigma^4}.$$ Thus the full $4\times4$ Einstein-residual matrix is zero entry by entry, and the Maxwell-density table is zero by step 2.1. The certificate supplies the full $4\times4$ table of $2Q$, all raised field entries, and all 16 zero Einstein residual pairs; each $2Q$ entry is checked against $2\sum_{k,l}\mathcal F_{ik}g^{kl}\mathcal F_{jl}-g_{ij}\mathcal F^2/2$. Its checker expands these sums and both scalar contractions by polynomial cross-multiplication. Thus the equality to the Ricci matrix is checked componentwise, including every zero, rather than inferred from the correctness lemma. No floating-point evaluation or parameter sample is used. [F1, F2, F3, F7, step 1.2, step 2.1, step 2.2, algebra]

4.1 By [A1], $\Sigma$, $\Delta$ and $b$ are nonzero, so all recorded denominator factors remain nonzero after real parameter specialization. The certificate uses reduced representatives in the same fraction field, whereas [F2] may retain unreduced pairs. By fraction equality in [F3], reduction preserves every scheduled operation and its numerator-zero flag. For the inverse, the determinant is $-\Sigma^2$; all other divisions are by rational constants or the chart factors and their products. Even an uncancelled determinant numerator is $-\Sigma^2$ times its nonzero denominator, so it introduces no new excluded locus. Induction through the finite schedule identifies its output with these checked representatives. Correctness and termination are [F3]; hence steps 2.1, 2.2 and 3.1 prove the stated smooth coordinate identities on every admitted chart component. [A1, F3, step 2.1, step 2.2, step 3.1, algebra] ∎

## Remarks

The complete certificate is
[the sparse rational component table](../research/physics-remaining-80-2026-10-17-batch-21.kn-certificate.json).
Each fraction has polynomial numerator `n`, denominator `d`, and an exact
`zero_numerator` flag; polynomial terms are `[exponent-vector, rational-coefficient]`
in variable order $(r,y,M,a,q)$. It includes the metric, inverse, potential,
field, raised field, 64 Christoffel entries, 16 ordered Ricci entries,
$2Q$, Maxwell and Einstein residuals and scalar contractions. All zero
polynomials are the empty term list; all denominators are nonzero.

[The independent certificate checker](../research/physics-remaining-80-2026-10-17-batch-21-verify-certificate.py)
uses only exact rational coefficients and explicit finite polynomial operations.
It checks the input metric and potential, determinant, inverse, every
Christoffel and ordered Ricci formula, both field-index raisings, every
quadratic-tensor contraction and all asserted scalar/zero outputs by
cross-multiplication. Denominators factor into powers of $\Sigma$, $\Delta$
and $b$ with nonzero rational constants; these are exactly the permitted
chart factors. Cancellation is allowed only as equality in the fraction field,
not as removal of chart exclusions. Replay from the physics workspace with
`python3 research/physics-remaining-80-2026-10-17-batch-21-verify-certificate.py`.
The separate SymPy cross-check remains supplementary; neither program
establishes physical applicability.

