---
id: lem-finite-energy-euclidean-asd-point-singularity-is-removable
kind: lemma
title: "Removal of a finite-energy Euclidean ASD point singularity"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-finite-energy-punctured-euclidean-asd-connections-have-l-four-gauges
  - lem-small-critical-curvature-coulomb-gauges-on-four-balls
  - lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover
  - lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth
  - thm-absolute-continuity-of-the-integral
  - thm-holder-inequality-for-integrals
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-complex-lp-completeness-and-almost-everywhere-subsequences
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - thm-higher-order-sobolev-embedding
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao and Gang Tian, A singularity removal theorem for Yang–Mills fields in higher dimensions, Theorem 1.1, §4 and full §§5–9"
      url: "https://arxiv.org/pdf/math/0209352"
    - title: "Karen K. Uhlenbeck, Removable singularities in Yang–Mills fields, Communications in Mathematical Physics 83 (1982), 11–29"
      url: "https://doi.org/10.1007/BF01947068"
---

## Statement

Assume full AC. Let $A$ be a smooth $\mathfrak{su}(2)$ connection form on $B_1(0)\setminus\{0\}\subset\mathbb R^4$, with the standard Euclidean metric and orientation. If $F_A^+=0$ and
$$\int_{B_1\setminus\{0\}}|F_A|^2<\infty,$$
then there exist a smooth map $g:B_1\setminus\{0\}\to SU(2)$ and a smooth $\mathfrak{su}(2)$ connection form $a$ on all of $B_1$ such that $A^g=a$ on the punctured ball. The extended form satisfies $F_a^+=0$ classically. The gauge is not required to extend across zero or to satisfy a boundary condition.

The input is a connection form in a given trivialization of the punctured ball. No general curved-metric, prescribed surface singularity, perturbed ASD equation, energy quantization, Fredholm or gluing assertion is included.

## Statement references

[[lem-finite-energy-punctured-euclidean-asd-connections-have-l-four-gauges|Actual punctured critical potential gauge]]

[[lem-small-critical-curvature-coulomb-gauges-on-four-balls|Actual smooth-ball gauge existence]]

[[lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth|Actual weak ASD regularity]]

## Facts & Assumptions

[F1] For sufficiently small $\|F_A\|_2$ on a punctured $B_2$, the constructed annular-patching theorem supplies a smooth gauge on punctured $B_{1/2}$ with $B\in L^4$, $\|B\|_4\le C\|F_A\|_2$, and punctured curvature $\|F_B\|_2\le\|F_A\|_2$. It assumes no given small potential gauge ([[lem-finite-energy-punctured-euclidean-asd-connections-have-l-four-gauges]]).

[F2] Smooth connections on a closed ball with sufficiently small $L^2$ curvature admit the actually constructed Coulomb gauges, with uniform $W^{1,2}$ and $L^4$ bounds on their potentials. The full extraction proof of [[lem-critical-coulomb-compactness-on-a-fixed-finite-ball-cover]], steps 2.1–3.1, uses these Sobolev bounds to give weak $W^{1,2}$, strong $L^p$, $p<4$, and weak $L^2$ curvature convergence, and passes the Coulomb condition; it does not require the approximants to be ASD ([[lem-small-critical-curvature-coulomb-gauges-on-four-balls]]).

[F3] A $W^{1,2}_{\mathrm{loc}}$ Euclidean Coulomb form with weak ASD curvature has a smooth representative ([[lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth]]).

[F4] Integrals of a fixed $L^1$ function are absolutely continuous, Holder gives $\|B\|_{L^2(\{\rho<|x|<2\rho\})}\le C\rho\|B\|_{L^4(\{\rho<|x|<2\rho\})}$, and smooth radial cutoffs with derivative at most $C/\rho$ exist ([[thm-absolute-continuity-of-the-integral]], [[thm-holder-inequality-for-integrals]], [[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F5] Rellich on smaller balls supplies strong $L^2$ subsequences from bounded $W^{1,2}$ sequences, and strong $L^2$ convergence admits an almost-everywhere convergent subsequence. Smooth approximation gives weak product rules; higher Sobolev orders give classical smoothness ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]], [[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[thm-higher-order-sobolev-embedding]]).

[F6] Full AC supplies the countable analytic choices and diagonal extractions ([[def-axiom-of-choice]]).

## Proof

**Given:** The smooth punctured Euclidean ASD connection with finite curvature energy.

1.1 **Reduction to sufficiently small energy.** By [F4], choose $\rho>0$ with $\overline B_{2\rho}\subset B_1$ and $\|F_A\|_{L^2(B_{2\rho})}$ smaller than a universal $\epsilon$ to be fixed below. Pull back by $y\mapsto\rho y$; the resulting connection on punctured $B_2$ has the same curvature $L^2$ norm in dimension four. Apply [F1] to obtain a smooth gauge $g_0$ and potential $B$ on punctured $B_{1/2}$ with $\|B\|_4\le C\epsilon$ and $\|F_B\|_2\le\epsilon$. Write $\mathcal F$ for the punctured curvature extended by zero at the singleton, an $L^2$ class. At this stage no assertion that $B$ has a distributional curvature across zero is needed or used. Work on the fixed ball $B_R$, $R=1/4$. [F1, F4, F6, given, choose, construct, algebra]

2.1 **Exact smooth cutoff approximation with every curvature term.** Choose $r_j\downarrow0$ with $2r_j<R/2$ and smooth radial $\chi_j$ equal to zero on $B_{r_j}$, one outside $B_{2r_j}$, and $|d\chi_j|\le C/r_j$. Put $B_j=\chi_jB$ off zero and zero near zero. These are smooth near $\overline B_R$. Direct expansion gives, as an almost-everywhere identity on the whole ball, $$F_{B_j}=\chi_j\mathcal F+d\chi_j\wedge B+(\chi_j^2-\chi_j)B\wedge B.$$ Here all terms vanish near zero. The difference from $\mathcal F$ has $L^2$ norm at most $\|\mathcal F\|_{L^2(B_{2r_j})}+C\|B\|_{L^4(\{r_j<|x|<2r_j\})}+C\|B\|_{L^4(\{r_j<|x|<2r_j\})}^2$, using [F4] for the derivative term. Each tends to zero by absolute continuity. Also $\sup_j\|F_{B_j}\|_2\le\epsilon+C\epsilon+C\epsilon^2$. Choose $\epsilon$ small enough that this is below the actual ball-gauge threshold in [F2], as well as the threshold in [F1]. Since $\mathcal F^+=0$, the same convergence gives $\|F_{B_j}^+\|_2\to0$. [F1, F2, F4, step 1.1, choose, construct, algebra]

3.1 **Actual Coulomb extraction across the point.** Apply [F2] to $B_j$ on the closed $B_R$. It constructs $u_j\in W^{2,p}(B_R;SU(2))$ for every finite $p\ge2$ and Coulomb $a_j=B_j^{u_j}$ with bounded $W^{1,2}$ and $L^4$ norms. The actual extraction argument [F2] yields a subsequence with $a_j\rightharpoonup a$ in $W^{1,2}$, $a_j\to a$ strongly in every $L^p$, $p<4$, and $F_{a_j}\rightharpoonup F_a$ in $L^2$. It also gives $d^*a=0$ on the entire ball. Curvature covariance and unitarity give $\|F_{a_j}^+\|_2=\|F_{B_j}^+\|_2\to0$, so the weak curvature limit has $F_a^+=0$ throughout $B_R$. By [F3], $a$ has a smooth ASD representative there, including at zero. This conclusion required neither smoothness nor ASD of the original cutoff potentials at intermediate annuli beyond what was explicitly proved. [F2, F3, step 2.1, choose, construct, algebra]

4.1 **An actual limiting gauge on the punctured domain.** On every smaller ball compactly contained in $B_R\setminus\{0\}$ one has $B_j=B$ for all large $j$. The weak gauge equation is $du_j=u_ja_j-Bu_j$. Unitarity, bounded $a_j$ in $L^4$, and fixed smooth $B$ give a uniform local $W^{1,4}$ bound for $u_j$. On a countable rational-ball cover of the punctured domain, use [F5] and one nested diagonal to obtain strong $L^2$ and almost-everywhere convergence to $u$. Limits agree on overlaps by uniqueness of the $L^2$ limit. Closedness of $SU(2)$ gives $u\in SU(2)$ almost everywhere; boundedness then gives strong convergence in every finite $L^q$ on compact subsets, by $\|u_j-u\|_q^q\le(2\sqrt2)^{q-2}\|u_j-u\|_2^2$ for $q\ge2$ and Holder for $q<2$. The right side of the gauge equation passes strongly in $L^3$ locally: use $a_j-a\to0$ in $L^3$, bounded matrices, and $(u_j-u)a$ controlled by $L^{12}\cdot L^4\subset L^3$. Thus $du=ua-Bu$ distributionally. This constructs the needed gauge class, rather than inferring gauge equivalence from convergence of curvatures alone. [F4, F5, F6, step 1.1, step 3.1, choose, construct, algebra]

5.1 **Smooth gauge equivalence on the puncture.** The coefficients $a,B$ are smooth on the punctured domain and $u$ is bounded. The equation in step 4.1 first gives $u\in W^{1,p}_{\mathrm{loc}}$ for every finite $p$. Repeated weak differentiation and multiplication by the fixed smooth coefficients give $u\in W^{m,p}_{\mathrm{loc}}$ for every finite $m,p$, justified by the approximation and product rules [F5]. Sobolev embeddings then give a smooth representative; it remains $SU(2)$-valued everywhere by continuity and closedness. Multiplying $du=ua-Bu$ by $u^{-1}$ gives $B^u=a$. Hence the rescaled original connection is gauge equivalent, by $g_0u$, to this smooth form on punctured $B_R$. Rescaling back supplies a smooth gauge $\gamma$ on a punctured ball $B_\eta$ in the original coordinates, whose transformed connection extends smoothly and ASD across zero. [F3, F5, step 1.1, step 3.1, step 4.1, induction, algebra]

6.1 **A gauge on the whole original punctured ball.** Choose a smooth positive function $f:(0,1)\to(0,\eta)$ equal to $r$ for $r<\eta/4$ and equal to $\eta/3$ for $r>\eta/2$. For instance interpolate by a smooth cutoff between $r$ and $\eta/3$ only on $[\eta/4,\eta/2]$; all interpolated values stay below $\eta$. Define $g(x)=\gamma(f(|x|)x/|x|)$ on the full punctured $B_1$. It is smooth there and equals $\gamma$ near zero. Therefore $A^g$ equals the smooth local extension from step 5.1 near zero, and is smooth everywhere else. Define its value at zero using that extension to obtain a smooth connection form on all of $B_1$. Gauge covariance gives ASD away from zero, and continuity gives the equation at zero. There is no need for $g$ itself to extend at zero or to equal the identity near the outer boundary. Full AC is inherited through [F1]–[F6]. [F1, F2, F3, F4, F5, F6, step 5.1, choose, construct, algebra] ∎

## Source notes

The Tao–Tian full text was acquired; the full §§5–9 proofs, PDF pp.20–39, and Lemma 4.7 with its following discussion, pp.17–19, were read. The point-singularity proof above uses the actual locally reconstructed annular and critical gauge modules. It explicitly retains the quadratic cutoff-curvature term, uses genuinely smooth cutoffs, constructs the limiting gauge, and proves the final whole-punctured-ball extension of that gauge's domain. Uhlenbeck's original paper is cited for provenance only: its full text was not obtained and is not used as a quoted premise. This ordinary Euclidean point-removal result does not supply the separate surface-singular or holonomy-perturbed analytic models required by the original instanton claims.
