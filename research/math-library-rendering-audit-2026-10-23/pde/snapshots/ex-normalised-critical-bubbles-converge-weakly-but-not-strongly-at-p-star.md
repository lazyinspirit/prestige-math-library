---
id: ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star
kind: example
title: "Critical bubbles converge weakly but not strongly"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, thm-linear-change-of-variables-for-lebesgue-measure, thm-holder-inequality-for-integrals, thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity, thm-dominated-convergence, def-weak-convergence-of-nets-and-sequences, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, complete 168-page 2026 notes"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 Section 3.6, Theorem 3.44, Remark 3.45 and Example 3.46, printed pp. 85-90."
    - title: "John K. Hunter, Notes on Partial Differential Equations, complete 242-page 2014 notes"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Sections 1.5 and 3.10, printed pp. 6-7 and 73-74; locally derived consequences are identified in the strategies."
---

## Example

Assume Countable Choice. Let $n\ge2$, $1\le p<n$, $p^*=\frac{np}{n-p}$, and
choose a nonzero real $\varphi\in C_c^\infty(B(0,1))$ with
$\|\varphi\|_{L^{p^*}(\mathbb R^n)}=1$ (for instance a normalised smooth bump).
On $\Omega=B(0,1)$ put $u_j(x)=(j+1)^{(n-p)/p}\varphi((j+1)x)$ for $j\ge0$. Then
$u_j\in W^{1,p}_0(\Omega)$, $\|u_j\|_{L^{p^*}(\Omega)}=1$,
$\|Du_j\|_{L^p(\Omega)}=\|D\varphi\|_{L^p(\mathbb R^n)}$ and
$\|u_j\|_{L^p(\Omega)}=(j+1)^{-1}\|\varphi\|_{L^p(\mathbb R^n)}$. Moreover
$u_j\rightharpoonup0$ in $L^{p^*}(\Omega)$ and $u_j\to0$ almost everywhere,
but no subsequence converges strongly in $L^{p^*}(\Omega)$: the unit mass
concentrates at the origin, while the weak limit is the zero class and the norms remain one.

## Facts & Assumptions

**Given:** the Axiom of Countable Choice, $n\ge2$, $1\le p<n$, $p^*=\frac{np}{n-p}$, a nonzero real $\varphi\in C_c^\infty(B(0,1))$ with $\|\varphi\|_{p^*}=1$, and $u_j(x)=(j+1)^{(n-p)/p}\varphi((j+1)x)$ on $\Omega=B(0,1)$.

[F1] *Scaling.* For measurable nonnegative $h$ and $j\ge0$, $\int h((j+1)x)(j+1)^n\,dx=\int h(y)\,dy$, and $\operatorname{supp}(u_j)\subseteq B(0,1/(j+1))$. ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[def-sobolev-space-wkp-and-its-norm]])

[F2] *H\"older's inequality.* $\int|fg|\le\|f\|_{p^*}\|g\|_{(p^*)'}$ for conjugate exponents. ([[thm-holder-inequality-for-integrals]])

[F3] *Duality of $L^{p^*}$.* Since $1<p^*<\infty$ and $\Omega$ has finite measure, every bounded linear functional on $L^{p^*}(\Omega)$ is integration against some $g\in L^{(p^*)'}(\Omega)$. ([[thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity]])

[F4] *Absolute continuity of the integral.* If $|g|^{(p^*)'}$ is integrable, then $\|g\mathbf 1_{B(0,1/(j+1))}\|_{(p^*)'}\to0$ as $j\to\infty$. ([[thm-dominated-convergence]])

[F5] *Weak convergence.* $u_j\rightharpoonup0$ in $L^{p^*}$ means $\int u_jg\to0$ for every $g\in L^{(p^*)'}$; strong convergence implies weak convergence. ([[def-weak-convergence-of-nets-and-sequences]])

[F6] *Membership in $W^{1,p}_0$.* The function $u_j$ is smooth and compactly supported in $\Omega$, hence belongs to $W^{1,p}_0(\Omega)$ and its classical derivatives represent $Du_j$. ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]])

## Verification

**Proof technique:** direct.

1.1 By [F1], $\|u_j\|_{p^*}^{p^*}=(j+1)^{(n-p)p^*/p}(j+1)^{-n}\|\varphi\|_{p^*}^{p^*}=1$, $\|u_j\|_p=(j+1)^{(n-p)/p}(j+1)^{-n/p}\|\varphi\|_p=(j+1)^{-1}\|\varphi\|_p$, and $\|Du_j\|_p=(j+1)^{(n-p)/p}(j+1)^{1-n/p}\|D\varphi\|_p=\|D\varphi\|_p$; [F6] gives $u_j\in W^{1,p}_0(\Omega)$, and $u_j(x)\to0$ for every $x\neq0$ because $\varphi((j+1)x)=0$ once $(j+1)|x|>1$. [F1, F6, given]

2.1 Let $g\in L^{(p^*)'}(\Omega)$ and extend it by zero to $\mathbb R^n$. By [F2] and step 1.1, $|\int_\Omega u_jg\,dx|\le\|u_j\|_{p^*}\|g\mathbf 1_{B(0,1/(j+1))}\|_{(p^*)'}=\|g\mathbf 1_{B(0,1/(j+1))}\|_{(p^*)'}$, which tends to $0$ by [F4]; by [F3] and [F5] this says $u_j\rightharpoonup0$ in $L^{p^*}(\Omega)$. [F2, F3, F4, F5, step 1.1]

3.1 If a subsequence converged strongly in $L^{p^*}(\Omega)$ to some $v$, then $\|v\|_{p^*}=1$ by continuity of the norm and step 1.1, while [F5] would give $v=0$ because strong convergence and step 2.1 imply $\int_\Omega vg=0$ for every $g\in L^{(p^*)'}$. Taking $g=\operatorname{sgn}(v)|v|^{p^*-1}$ gives $\int|v|^{p^*}=0$; this contradiction shows that no subsequence converges strongly in $L^{p^*}(\Omega)$. The example therefore exhibits the failure of compactness at the critical exponent while for $1\le q<p^*$ the scaling exponent $(n-p)/p-n/q$ is negative, so the subcritical $L^q$ norms tend to zero. [F2, F5, step 1.1, step 2.1] ∎ 