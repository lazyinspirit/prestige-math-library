---
id: ex-emx-retarded-versus-fixed-time
kind: example
title: "The radiation limit depends on the observation-time path"
domain: physics
status: published
origin: pipeline
dependency_level: 3
deps:
  - def-countable-choice
  - def-emx-radiation-data
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - lem-smooth-bump-between-concentric-euclidean-balls
  - lem-test-function-cutoffs-and-euclidean-localization
  - pthm-emx-retarded-history-localization
  - pthm-emx-transverse-radiation-data
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-clairaut-schwarz-mixed-partials
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emx-radiation-data: formulation-prerequisite
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  pthm-emx-retarded-history-localization: physical-result
  pthm-emx-transverse-radiation-data: physical-result
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A constructed smooth charge pulse in the retarded classical Maxwell model. At any fixed observation time its exterior field is eventually zero as the observation radius grows, while along a fixed retarded-time path the scaled electric field has a nonzero radiation-data limit. The example is conditional and contains no reported measurement."
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, Vorlesungsskript, ETH Zürich 2024 FS, complete 176-page course script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.2–§11.3, printed pp. 11.4–11.13 (PDF pp. 124–133): retarded observation times, radiation-zone limits and the distinction from the near-zone and fixed-time paths."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin, complete author-hosted HTML lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node52.html"
      locator: "Chapter 4, node 52, “Retarded fields”: retarded source times and the $1/R$ radiation-zone terms."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin, complete author-hosted HTML lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Chapter 4, node 50, “Retarded potentials”: the potential integral uses the source at $t-|x-y|/c$, fixing the retarded-time convention used in the example."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Assume Countable Choice and the SI retarded Maxwell model with no independent homogeneous field. In its laboratory chart, spatial coordinates have units $\mathrm m$ and times have units $\mathrm s$. Fix $a,c>0$ with units $\mathrm m$ and $\mathrm m\,\mathrm s^{-1}$, a retarded time $u\in\mathbb R$, and an amplitude $\alpha>0$ with units $\mathrm C\,\mathrm m^{-2}\,\mathrm s^{-2}$. Let $f\in C_c^\infty(B_a(0))$ be dimensionless and nonnegative with $\int f>0$, extended by zero to $\mathbb R^3$, and let $G\in C_c^\infty(\mathbb R)$ have units $\mathrm C\,\mathrm m^{-2}$ and equal $\alpha(t-u)^2$ on a neighborhood of $[u-a/c,u+a/c]$. Set $\rho(y,t)=-G(t)\partial_3f(y)$ and $J(y,t)=G'(t)f(y)e_3$, where $e_1=(1,0,0)$ and $e_3=(0,0,1)$. These jointly smooth maps $\rho:\mathbb R^3\times\mathbb R\to\mathbb R$ and $J:\mathbb R^3\times\mathbb R\to\mathbb R^3$ are conserved sources of compact space-time support, with units $\mathrm C\,\mathrm m^{-3}$ and $\mathrm A\,\mathrm m^{-2}$. For the direction $n=e_1$, the scaled electric field $rE(rn,u+r/c)$ has a nonzero limit. For any fixed observation time $t_f$, however, the retarded fields vanish at $x=rn$ for every sufficiently large $r$, because all source retarded times are then before the pulse.

## Example references

[[pthm-emx-retarded-history-localization]]

[[pthm-emx-transverse-radiation-data]]

[[def-emx-radiation-data]]

## Facts & Assumptions

**Given:** The SI model, positive amplitude $\alpha$, nonnegative dimensionless spatial bump $f$, time pulse $G$ equal to $\alpha(t-u)^2$ on a neighborhood of the delay interval, and source pair specified in the Example.

[A1] Assume Countable Choice for the source integrals and Lebesgue measure. ([[def-countable-choice]])

[F1] A smooth bump can equal one on a smaller ball and vanish outside a larger ball; compact-set smooth cutoffs exist on an open set. ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[lem-test-function-cutoffs-and-euclidean-localization]])

[F2] For jointly smooth conserved SI sources supported in a fixed spatial ball, the adopted retarded integrals, with no independent homogeneous field, define smooth Maxwell fields $E,B:\mathbb R^3\times\mathbb R\to\mathbb R^3$, of units $\mathrm V\,\mathrm m^{-1}$ and $\mathrm T$. Here $\mu_0>0$ has units $\mathrm N\,\mathrm A^{-2}$ and $\varepsilon_0=(\mu_0c^2)^{-1}$. Their radiation data are the uniform limits along $t=u+r/c$, on every nondegenerate compact interval of $u$ and uniformly in $|n|=1$, with electric limit $\frac{\mu_0}{4\pi}n\times(n\times V(n,u))$, where $V(n,u)=\int_{B_a}J_t(y,u+n\cdot y/c)\,dy$. ([[pthm-emx-retarded-history-localization]], [[pthm-emx-transverse-radiation-data]], [[def-emx-radiation-data]])

[F3] Under Countable Choice, every Euclidean ball of positive radius has positive finite Lebesgue measure. Mixed spatial partial derivatives of the smooth function $f$ commute, and the nonnegative integral is monotone. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-clairaut-schwarz-mixed-partials]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

## Verification

**Proof technique:** direct.

1.1 The data in the Example exist: by [F1] one may choose a dimensionless $f\in C_c^\infty(B_a(0))$ with $0\le f\le1$ and $f=1$ on some ball $B_{r_0}(0)$ with $0<r_0<a$. Then $\int f\,dy\ge\lambda_3(B_{r_0})>0$ by [F3]. For any $f$ admitted in the Example write $F:=\int f\,dy>0$. Choose $G$ by applying the smooth cutoff supplier to a compact interval slightly larger than $[u-a/c,u+a/c]$ and multiply that dimensionless cutoff by $\alpha(t-u)^2$. The resulting $G$ is compactly supported, has units $\mathrm C\,\mathrm m^{-2}$, equals $\alpha(t-u)^2$ on a neighborhood of the delay interval, and satisfies $G''=2\alpha$ there. [given, F1, F3, construct, A1]

2.1 The maps $\rho,J$ in the Example are jointly smooth and compactly supported in $B_a$ in space and in $\operatorname{supp}G\cup\operatorname{supp}G'$ in time. Their derivatives obey $\rho_t=-G'\partial_3f$ and $\operatorname{div}J=G'\partial_3f$, so $\rho_t+\operatorname{div}J=0$. Thus the retarded-history theorem applies. [step 1.1, given, F1, F3, algebra, A1]

3.1 For $n=e_1$, every source point in $B_a$ has $|y_1|<a$, so $G''(u+y_1/c)=2\alpha$. The shifted-current moment of [F2] is therefore $\displaystyle V(e_1,u)=\int_{B_a}J_t(y,u+y_1/c)\,dy=2\alpha F e_3.$ Since $e_1\cdot e_3=0$, $e_1\times(e_1\times V(e_1,u))=-2\alpha F e_3\ne0$. Apply [F2] on any nondegenerate compact interval containing $u$ to obtain $\displaystyle E_{\mathrm{rad}}(e_1,u)=-\frac{\mu_0\alpha F}{2\pi}e_3\ne0,$ so $rE(re_1,u+r/c)$ converges to a nonzero vector. [step 1.1, step 2.1, F2, F3, algebra, A1]

4.1 Let $t_f\in\mathbb R$ be a fixed observation time and choose $t_-<\inf(\operatorname{supp}G\cup\operatorname{supp}G')$. For $y\in B_a$ and $x=rn$, $|x-y|\ge r-a$, so the source retarded time satisfies $t_f-|x-y|/c\le t_f-(r-a)/c$. If $r>a+c(t_f-t_-)$, this is less than $t_-$ for every $y\in B_a$, with a uniform strict margin. The source and all its derivatives vanish on a time neighborhood of every such argument; because the inequalities remain strict on a neighborhood of $(x,t_f)$, the retarded potentials are identically zero there and their derivatives vanish. Hence $E(rn,t_f)=B(rn,t_f)=0$ for all such $r$. This fixed-time limit and the nonzero scaled retarded-time limit of step 3.1 are different paths to infinity, not contradictory field values. [step 2.1, step 3.1, given, F2, algebra, A1] ∎
