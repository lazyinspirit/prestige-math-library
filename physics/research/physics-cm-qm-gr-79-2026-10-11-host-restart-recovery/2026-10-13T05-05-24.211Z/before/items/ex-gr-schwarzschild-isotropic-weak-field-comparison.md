---
id: ex-gr-schwarzschild-isotropic-weak-field-comparison
kind: example
title: "Explicit isotropic-to-areal conversion and the second-order scalar-coefficient comparison of the Schwarzschild exterior"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-isotropic-coordinate-form, lem-gr-schwarzschild-metric-properties, def-derivative, thm-algebra-of-derivatives, def-rational-power, thm-real-power-continuity-and-derivatives, def-interval, thm-chain-rule]
dependency_roles:
  thm-chain-rule: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-isotropic-coordinate-form: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7: the Schwarzschild metric (7.29) and its reduction to conformally flat spatial form by r = rho(1+GM/2rho)^2, printed pp. 169-172 (PDF pp. 176-179)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.1.1: the warning that Newtonian-limit coefficients must be compared in one and the same coordinate system, printed p. 210 (PDF p. 217); section 6.1: the Schwarzschild metric (6.1) and its domain r > 2GM, printed pp. 232-233 (PDF pp. 239-240)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3.3 (2.60): the isotropic form ds^2 = -[(1-M/2rho)/(1+M/2rho)]^2 dt^2 + (1+M/2rho)^4(drho^2 + rho^2 dOmega^2), printed p. 25"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Example

Let $(M,g,N)$ be the Schwarzschild exterior datum with Schwarzschild radius
$s>0$, $f(r)=1-s/r$ and $g_{11}=1/f$
([[def-gr-schwarzschild-exterior-model]],
[[lem-gr-schwarzschild-metric-properties]]). Let

$$R(\rho):=\rho\Bigl(1+\frac{s}{4\rho}\Bigr)^{2},\qquad \rho>\frac{s}{4},$$

be the isotropic-to-areal radius map of
[[lem-gr-schwarzschild-isotropic-coordinate-form]] and let
$\rho_0:(s,\infty)\to(s/4,\infty)$ be its inverse, so that the isotropic
coefficient of the spatial metric is the function
$\rho\mapsto(1+s/(4\rho))^{4}$ and the areal coefficient is
$r\mapsto(1-s/r)^{-1}$. The two displayed functions are coefficients in different radial bases.
The following scalar-function comparisons do not identify their tensor
components after a change of basis; that transformation is included in clause 5.

1. **Exact form and positivity.**
   $R(\rho)=\rho+\frac{s}{2}+\frac{s^{2}}{16\rho}$ and
   $R'(\rho)=1-\frac{s^{2}}{16\rho^{2}}>0$ on $(s/4,\infty)$; the inverse is
   $\rho_0(r)=\frac{(r-\frac{s}{2})+\sqrt{r(r-s)}}{2}$.
2. **Conversion and areal expansion.** With $\rho=\rho_0(r)$,
   $$\rho_0(r)=r-\frac{s}{2}-\frac{s^{2}}{16r}+O\!\left(\frac{s^3}{r^2}\right),\qquad \frac{1}{\rho_0(r)}=\frac{1}{r}+\frac{s}{2r^{2}}+O\!\left(\frac{s^2}{r^3}\right).$$
   These are expansions as $r/s\to\infty$ with fixed $s>0$.
   The areal coefficient satisfies, exactly for $r>s$,
   $$(1-s/r)^{-1}=1+\frac{s}{r}+\frac{(s/r)^{2}}{1-s/r},$$
   so its expansion is $1+\frac{s}{r}+\frac{s^{2}}{r^{2}}+O\!\left(\frac{s^3}{r^3}\right)$.
3. **Isotropic coefficient after argument substitution.**
   With $\rho=\rho_0(r)$ one has
   $\frac{s}{4\rho_0(r)}=\frac{s}{4r}+\frac{s^{2}}{8r^{2}}+O(s^{3}/r^{3})$ and
   $$\Bigl(1+\frac{s}{4\rho_0(r)}\Bigr)^{4}=1+\frac{s}{r}+\frac{7}{8}\frac{s^{2}}{r^{2}}+O\!\left(\frac{s^3}{r^3}\right).$$
   Hence these scalar functions agree through first order and differ at second
   order by $\frac{1}{8}\frac{s^{2}}{r^{2}}$.
4. **Failure of the unconverted comparison.** Evaluating the isotropic
   coefficient at $\rho=r$ instead of at $\rho=\rho_0(r)$ gives
   $$\Bigl(1+\frac{s}{4r}\Bigr)^{4}=1+\frac{s}{r}+\frac{3}{8}\frac{s^{2}}{r^{2}}+O\!\left(\frac{s^3}{r^3}\right),$$
   which differs from the areal coefficient of clause 2 by
   $\frac{5}{8}\frac{s^{2}}{r^{2}}$ at second order: the consistency of the
   leading Newtonian-type term is unaffected, but the comparison of
   coefficients in the unchanged chart is already wrong at relative order
   $(s/r)^{2}$.

5. **Radial tensor transformation.** Put $a(r)=s/(4\rho_0(r))$.
   Differentiating $R(\rho_0(r))=r$ gives
   $\rho_0'(r)=(1-a(r)^2)^{-1}$. Consequently the radial coefficient in the
   areal basis is exactly
   $$g_{rr}=(1+a(r))^4\bigl(\rho_0'(r)\bigr)^2=(1-s/r)^{-1}.$$
   Moreover $(\rho_0')^2=1+s^2/(8r^2)+O(s^3/r^3)$, so this coefficient is
   $1+s/r+s^2/r^2+O(s^3/r^3)$: the apparent $1/8$ discrepancy of clause 3
   disappears when the basis is transformed.

## Facts & Assumptions

**Given:** The exterior datum with Schwarzschild radius $s>0$, the functions $R$, $\rho_0$, the areal coefficient $1/f$ and the isotropic coefficient $(1+s/(4\rho))^{4}$.

[L1] $R(\rho)=\rho(1+s/(4\rho))^{2}$ is a smooth bijection of $(s/4,\infty)$ onto $(s,\infty)$ with smooth inverse $\rho_0(r)=\frac{(r-s/2)+\sqrt{r(r-s)}}{2}$, $R'(\rho)=1-s^{2}/(16\rho^{2})>0$, the exact algebraic identity $R(\rho)=\rho+\frac{s}{2}+\frac{s^{2}}{16\rho}$, and the asymptotic expansion $\rho_0(r)=r-\frac{s}{2}-\frac{s^2}{16r}+O(s^3/r^2)$ for fixed $s>0$ as $r/s\to\infty$ ([[lem-gr-schwarzschild-isotropic-coordinate-form]] clauses (a) and (c), [[def-derivative]], [[thm-algebra-of-derivatives]], [[def-rational-power]]).

[L2] For $0<t<1$, $(1-t)^{-1}=1+t+t^{2}(1-t)^{-1}$ by multiplication by $1-t$ ([[thm-algebra-of-derivatives]], [[def-rational-power]]).

[L3] In the isotropic chart of the datum the spatial coefficient is $g_{\rho\rho}=(1+s/(4\rho))^{4}$ and in a spherical-polar product chart $g_{11}=(1-s/r)^{-1}$
([[lem-gr-schwarzschild-isotropic-coordinate-form]] clause (b), [[lem-gr-schwarzschild-metric-properties]] clause (a), [[def-gr-schwarzschild-exterior-model]] clause (c)).

[L4] The identity $(1+x)^{4}=1+4x+6x^{2}+4x^{3}+x^{4}$ holds for every real $x$; on $(s,\infty)$ one has $r>s$ so $s/r\in(0,1)$ and $r\ge s$, and the interval $(s,\infty)$ is nonempty ([[thm-algebra-of-derivatives]], [[def-interval]], [[def-rational-power]]).

[L5] The chain rule for differentiable functions on open real intervals gives
$R'(\rho_0(r))\rho_0'(r)=1$ from $R\circ\rho_0=\mathrm{id}$
([[thm-chain-rule]]); the radial term of the metric in [L3] is
$(1+s/(4\rho))^4d\rho^2$, so $d\rho=\rho_0'(r)dr$ in the areal chart.

## Proof

**Proof technique:** use the inverse-radius expansion proved in the isotropic-coordinate lemma, expand the reciprocal and fourth power with explicit remainders, and compare the coefficients after the coordinate conversion.

1.1 (Exact form and inverse.) By [L1], $R(\rho)=\rho+\frac{s}{2}+\frac{s^{2}}{16\rho}$, so $R'(\rho)=1-\frac{s^{2}}{16\rho^{2}}$, which is positive exactly because $\rho^{2}>s^{2}/16$, that is $\rho>s/4$; [L1] also gives the displayed inverse $\rho_0$, and the identity $R(\rho_0(r))=r$ holds on $(s,\infty)$. This is clause 1. [L1, algebra]

1.2 (Expansion of the inverse.) By [L1], for fixed $s>0$ and $r/s\to\infty$,
$$\rho_0(r)=r-\frac{s}{2}-\frac{s^2}{16r}+O\!\left(\frac{s^3}{r^2}\right).$$
Write $\rho_0(r)=r(1+\delta(r))$, where
$\delta(r)=-s/(2r)-s^2/(16r^2)+O(s^3/r^3)=O(s/r)$. For all sufficiently large
$r/s$, $|\delta(r)|\le1/2$, and the exact identity
$(1+\delta)^{-1}=1-\delta+\delta^2/(1+\delta)$ gives
$$\frac1{\rho_0(r)}=\frac1r+\frac{s}{2r^2}+O\!\left(\frac{s^2}{r^3}\right).$$
All remainder estimates here are for fixed $s>0$ and $r/s\to\infty$. This proves the two expansions of clause 2. [L1, algebra]

1.3 (Areal expansion.) For $r>s$ the identity $(1-s/r)^{-1}=1+\frac{s/r}{1-s/r}=1+\frac{s}{r}+\frac{(s/r)^{2}}{1-s/r}$ is exact by [L2]; since $0<s/r<1$ by [L4], the last term is positive and satisfies $\frac{(s/r)^{2}}{1-s/r}=(s/r)^{2}\bigl(1+O(s/r)\bigr)$, so $(1-s/r)^{-1}=1+\frac{s}{r}+\frac{s^{2}}{r^{2}}+O(s^{3}/r^{3})$ with remainder at most $\frac{s^{3}/r^{3}}{1-s/r}$, which is $O(s^{3}/r^{3})$ on $r\ge 2s$. This is the second display of clause 2. [L2, L4, algebra]

2.1 (Isotropic coefficient after conversion.) By step 1.2, $\frac{s}{4\rho_0(r)}=\frac{s}{4r}+\frac{s^{2}}{8r^{2}}+O(s^{3}/r^{3})$, so with $x:=\frac{s}{4\rho_0(r)}$, [L4] gives $(1+x)^{4}=1+4x+6x^{2}+O(x^{3})$, hence $(1+x)^{4}=1+\frac{s}{r}+\frac{s^{2}}{2r^{2}}+\frac{6s^{2}}{16r^{2}}+O(s^{3}/r^{3}) =1+\frac{s}{r}+\frac{7}{8}\frac{s^{2}}{r^{2}}+O(s^{3}/r^{3})$. Combining with step 1.3, the two coefficients agree in their constant and $1/r$ terms and differ in their $1/r^{2}$ terms by $\frac{1}{8}\frac{s^{2}}{r^{2}}$; this is clause 3. [step 1.2, L3, L4, algebra]

3.1 (Unconverted comparison.) Evaluating at $\rho=r$ gives $x=\frac{s}{4r}$ and by [L4] $(1+\frac{s}{4r})^{4}=1+\frac{s}{r}+\frac{6s^{2}}{16r^{2}}+O(s^{3}/r^{3}) =1+\frac{s}{r}+\frac{3}{8}\frac{s^{2}}{r^{2}}+O(s^{3}/r^{3})$; subtracting the areal expansion of step 1.3 termwise gives the mismatch $\bigl(1-\frac{3}{8}\bigr)\frac{s^{2}}{r^{2}}=\frac{5}{8}\frac{s^{2}}{r^{2}}$ at second order, while the constant and first-order terms continue to agree. This is clause 4 as a comparison of scalar coefficient functions, not a metric transformation. [step 1.3, L3, L4, algebra]

3.2 (Transforming the radial basis.) By [L1] and [L5], $\rho_0'=1/(1-a^2)$ with $0<a<1$. Since $f(r)=(1-a)^2/(1+a)^2$ for $r=R(\rho_0(r))$, the transformed radial coefficient is $(1+a)^4/(1-a^2)^2=(1+a)^2/(1-a)^2=f(r)^{-1}$. Step 1.2 gives $a^2=s^2/(16r^2)+O(s^3/r^3)$; for $u=a^2$, the exact remainder identity $(1-u)^{-2}-1-2u=u^2(3-2u)/(1-u)^2$ gives $(\rho_0')^2=1+s^2/(8r^2)+O(s^3/r^3)$. Multiplication by the expansion of step 2.1 changes its second-order coefficient from $7/8$ to $7/8+1/8=1$, exactly as in step 1.3. This proves clause 5. [L1, L3, L5, step 1.2, step 1.3, step 2.1, algebra] ∎

## Remarks

- **What the example checks.** The computation is exact finite algebra with remainder bounds as $r/s\to\infty$: after argument substitution alone, the second-order isotropic coefficient is $1/2+3/8=7/8$, where $1/2$ comes from the coordinate shift in $1/\rho_0$ and $3/8$ from the fourth-power expansion. The areal coefficient has second-order coefficient $1$, so their difference is $1/8$; the $O(s^2/r^3)$ remainder of $1/\rho_0$ contributes only at third order. The radial tensor coefficient additionally includes the squared Jacobian of clause 5 and agrees exactly with the areal coefficient. No numerical value of $s$, no observed system and no measurement occurs.
